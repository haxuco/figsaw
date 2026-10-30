import {UUID,hash,randomToken} from './security.mjs';
import {validateDisplayName,displayNameKey} from '../shared/display-name.js';
import {linkedInDisplayName} from '../shared/linkedin-name.js';
import {ANALYTICS_STAGES,ANALYTICS_CAUSES} from '../shared/analytics-schema.js';
const integer=(value,max)=>{if(!Number.isSafeInteger(value)||value<0||value>max)throw Error('Invalid legacy counter.');return value;};
const date=value=>{const result=new Date(value);if(!Number.isFinite(result.getTime())||result.getTime()>Date.now()+300000)throw Error('Invalid legacy timestamp.');return result.toISOString();};
const uuid=value=>{if(!UUID.test(value||''))throw Error('Invalid legacy identifier.');return value;};
export function prepareLegacyImport(data){
 if(data?.kind!=='figsaw-legacy-export'||data.version!==1||!['scores','visits','attempts'].every(k=>Array.isArray(data[k])))throw Error('Expected the JSON value returned by export-supabase.sql.');
 const rows=[],rejected={scores:0},visits=new Map();
 for(const row of data.visits){
  const key=uuid(row.id);if(!['official','staging'].includes(row.environment)||!['mobile','desktop'].includes(row.device))throw Error('Invalid legacy environment.');
  visits.set(key,row.environment);
  rows.push({collection:'visits',data:{key,secretHash:hash(randomToken()),environment:row.environment,device:row.device,createdAt:date(row.started_at),lastSeenAt:date(row.last_seen_at),value:{active_ms:integer(row.active_ms,86400000),visible_ms:integer(row.visible_ms,86400000),interactions:integer(row.interactions,1000000),load_ms:row.load_ms==null?null:integer(row.load_ms,600000)}}});
 }
 for(const row of data.attempts){
  const key=uuid(row.id),visitKey=uuid(row.visit_id);if(!visits.has(visitKey))throw Error('Legacy attempt is missing its visit.');
  if(!['playing','won','lost','error'].includes(row.outcome)||row.cause!==null&&!Object.hasOwn(ANALYTICS_CAUSES,row.cause))throw Error('Invalid legacy outcome.');
  const milestones={};for(const [stage,seconds]of Object.entries(row.milestones||{})){if(!Object.hasOwn(ANALYTICS_STAGES,stage))throw Error('Invalid legacy milestone.');milestones[stage]=integer(seconds,86400);}
  rows.push({collection:'attempts',data:{key,visitKey,environment:visits.get(visitKey),sequence:integer(row.sequence,86400000),outcome:row.outcome,createdAt:date(row.started_at),lastSeenAt:date(row.last_seen_at),value:{active_ms:integer(row.active_ms,86400000),interactions:integer(row.interactions,1000000),cause:row.cause,milestones,saved:integer(row.saved,2)}}});
 }
 for(const row of data.scores){
  const verified=row.name_source==='linkedin'&&row.name_consented_at&&Number.isFinite(Date.parse(row.name_consented_at));
  const name=verified?linkedInDisplayName(row.name):row.name_source==='linkedin'?null:validateDisplayName(row.name).ok?validateDisplayName(row.name).name:null;
  if(!name){rejected.scores++;continue;}
  const key=uuid(row.id),remainingSeconds=integer(row.remaining_seconds,1200),attempt=integer(row.attempt,2147483647);if(!attempt)throw Error('Invalid legacy attempt count.');
  rows.push({collection:'scores',needsReview:!verified,data:{key,name,nameKey:verified?'legacy-linkedin:'+hash(String(row.name_key)):displayNameKey(name),nameSource:verified?'linkedin':'alias',nameConsent:Boolean(verified),ownerKey:'legacy:'+hash(key),remainingSeconds,attempt,wordsCompleted:0,createdAt:date(row.created_at)}});
 }
 return {rows,rejected};
}
export async function importLegacy(store,plan,{apply=false,reviewName}={}){
 const summary={mode:apply?'apply':'dry-run',visits:0,attempts:0,scores:0,existing:0,rejectedScores:plan.rejected.scores};
 const accepted=[];
 for(const row of plan.rows){
  if(apply&&row.needsReview&&await reviewName(row.data.name)!==true){summary.rejectedScores++;continue;}
  accepted.push(row);summary[row.collection]++;
 }
 // All validation/review finishes before writing. Per-record unique keys make
 // resuming after a network interruption safe without overwriting live records.
 if(apply)for(const row of accepted){const result=await store.insertOnce(row.collection,row.data.key,row.data);if(!result.created)summary.existing++;}
 return summary;
}
