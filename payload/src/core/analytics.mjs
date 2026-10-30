import {UUID,hash,same,httpError} from './security.mjs';
import {ANALYTICS_STAGES,ANALYTICS_CAUSES} from '../shared/analytics-schema.js';
const integer=(n,max)=>Number.isSafeInteger(n)&&n>=0&&n<=max;
export function validatePacket(packet){
  const d=packet?.p_data;
  if(!UUID.test(packet?.p_visit||'')||!UUID.test(packet?.p_run||'')||!/^([a-f0-9]{64})$/.test(packet?.p_secret||'')||!d||typeof d!=='object')throw httpError(400,'Invalid telemetry.');
  for(const field of ['sequence','run_ms','active_ms','visible_ms','interactions','run_interactions','saved'])if(!integer(d[field],field==='saved'?2:86400000))throw httpError(400,'Invalid counter.');
  if(!['official','staging'].includes(d.environment)||!['mobile','desktop'].includes(d.device)||!['playing','won','lost','error'].includes(d.outcome))throw httpError(400,'Invalid telemetry.');
  if(d.outcome==='lost'&&!Object.hasOwn(ANALYTICS_CAUSES,d.cause)||d.outcome==='error'&&d.cause!=='load'||['won','playing'].includes(d.outcome)&&d.cause!==null)throw httpError(400,'Invalid outcome.');
  if(!d.milestones||Array.isArray(d.milestones)||typeof d.milestones!=='object'||Object.entries(d.milestones).some(([key,value])=>!Object.hasOwn(ANALYTICS_STAGES,key)||!integer(value,86400)))throw httpError(400,'Invalid milestone.');
  if(d.load_ms!==null&&!integer(d.load_ms,600000))throw httpError(400,'Invalid load time.');
  // Whitelist fields. Never store unknown text, URLs, identities or request headers.
  return Object.fromEntries(['sequence','run_ms','active_ms','visible_ms','interactions','run_interactions','saved','environment','device','outcome','cause','milestones','load_ms'].map(key=>[key,d[key]]));
}
export async function recordAnalytics(store,packet,now=Date.now()){
  const d=validatePacket(packet),key=packet.p_visit,runKey=packet.p_run,secretHash=hash(packet.p_secret);
  return store.transaction(async tx=>{
    let visit=await tx.get('visits',key);
    if(!visit)visit=await tx.create('visits',{key,secretHash,environment:d.environment,device:d.device,lastSeenAt:new Date(now).toISOString(),value:{active_ms:0,visible_ms:0,interactions:0,load_ms:null}});
    if(!same(visit.secretHash,secretHash))throw httpError(403,'Invalid telemetry session.');
    if(now-Date.parse(visit.createdAt)>86400000)return false;
    let run=await tx.get('attempts',runKey);
    if(run&&run.visitKey!==key)throw httpError(403,'Invalid attempt.');
    if(run&&(d.sequence<=run.sequence||run.outcome!=='playing'))return true;
    if(run&&d.outcome==='playing'&&now-Date.parse(run.lastSeenAt)<3000)return false;
    if(!run&&(await tx.rows('attempts',{visitKey:{equals:key}},'createdAt',100)).docs.length>=100)return false;
    const budget=Math.min(86400000,now-Date.parse(visit.createdAt)+30000),previous=run?.value||{},oldVisit=visit.value;
    const milestones={...previous.milestones};
    for(const [stage,seconds]of Object.entries(d.milestones))milestones[stage]=Math.min(milestones[stage]??Infinity,seconds,Math.ceil(budget/1000));
    const value={active_ms:Math.max(previous.active_ms||0,Math.min(d.run_ms,budget)),interactions:Math.max(previous.interactions||0,Math.min(d.run_interactions,1000000)),cause:d.cause,milestones,saved:Math.max(previous.saved||0,d.saved)};
    const fields={sequence:d.sequence,outcome:d.outcome,lastSeenAt:new Date(now).toISOString(),value};
    if(run)await tx.update('attempts',run.id,fields);else await tx.create('attempts',{key:runKey,visitKey:key,environment:visit.environment,...fields});
    await tx.update('visits',visit.id,{lastSeenAt:new Date(now).toISOString(),value:{active_ms:Math.max(oldVisit.active_ms,Math.min(d.active_ms,budget)),visible_ms:Math.max(oldVisit.visible_ms,Math.min(d.visible_ms,budget)),interactions:Math.max(oldVisit.interactions,Math.min(d.interactions,1000000)),load_ms:oldVisit.load_ms??d.load_ms}});
    return true;
  });
}
const average=values=>values.length?values.reduce((a,b)=>a+b,0)/values.length:0;
export function summarize(visits,attempts,{days=30,environment='official',now=Date.now(),truncated=false}={}){
  const runs=attempts.map(r=>({...r.value,visitKey:r.visitKey,started_at:r.createdAt,last_seen_at:r.lastSeenAt,outcome:r.outcome}));
  const stale=r=>Date.parse(r.last_seen_at)<now-120000,byOutcome=outcome=>runs.filter(r=>r.outcome===outcome);
  const completed=visits.filter(v=>Date.parse(v.lastSeenAt)<now-120000||runs.some(r=>r.visitKey===v.key&&r.outcome!=='playing'));
  const times=runs.map(r=>r.active_ms/1000).sort((a,b)=>a-b),middle=Math.floor(times.length/2);
  const daily=Array.from({length:days},(_,i)=>{const day=new Date(now-(days-1-i)*86400000).toISOString().slice(0,10);return {day,visits:visits.filter(v=>v.createdAt.slice(0,10)===day).length,wins:runs.filter(r=>r.started_at.slice(0,10)===day&&r.outcome==='won').length};});
  return {generatedAt:new Date(now).toISOString(),days,environment,truncated,
    summary:{visits:visits.length,attempts:runs.length,completedVisits:completed.length,bounces:completed.filter(v=>v.value.interactions===0&&v.value.active_ms<30000).length,wins:byOutcome('won').length,losses:byOutcome('lost').length,loadErrors:byOutcome('error').length,abandoned:byOutcome('playing').filter(stale).length,playing:byOutcome('playing').filter(r=>!stale(r)).length,avgActiveSeconds:average(visits.map(v=>v.value.active_ms/1000)),avgVisibleSeconds:average(visits.map(v=>v.value.visible_ms/1000)),medianAttemptSeconds:times.length?(times.length%2?times[middle]:(times[middle-1]+times[middle])/2):0,avgLoadMs:visits.some(v=>v.value.load_ms!==null)?average(visits.filter(v=>v.value.load_ms!==null).map(v=>v.value.load_ms)):null},
    daily,stages:Object.keys(ANALYTICS_STAGES).map(key=>{const reached=runs.filter(r=>Object.hasOwn(r.milestones,key));return {key,count:reached.length,seconds:average(reached.map(r=>r.milestones[key]))};}),
    failures:Object.keys(ANALYTICS_CAUSES).map(cause=>({cause,count:byOutcome('lost').filter(r=>r.cause===cause).length})).filter(r=>r.count).sort((a,b)=>b.count-a.count),
    devices:['mobile','desktop'].map(device=>{const group=visits.filter(v=>v.device===device);return {device,visits:group.length,seconds:average(group.map(v=>v.value.active_ms/1000))};}),
    duration:[['< 30 sec',0,30000],['30 sec–2 min',30000,120000],['2–5 min',120000,300000],['5–10 min',300000,600000],['10+ min',600000,Infinity]].map(([label,min,max])=>({label,count:runs.filter(r=>r.active_ms>=min&&r.active_ms<max).length})),
    recent:runs.sort((a,b)=>b.started_at.localeCompare(a.started_at)).slice(0,100).map(({visitKey,...r})=>r)
  };
}
