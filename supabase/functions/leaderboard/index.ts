import {createLeaderboardHandler} from './handler.js';
import {createNameReviewer} from './name-review.js';
import {validateDisplayName} from '../_shared/display-name.js';
import {linkedInDisplayName} from '../_shared/linkedin-name.js';
import {createLinkedInNameVerifier} from './linkedin-identity.js';
const env=(key:string)=>Deno.env.get(key)??'';
const project=env('SUPABASE_URL'),secret=env('SUPABASE_SERVICE_ROLE_KEY');
const allowedOrigins=env('LEADERBOARD_ALLOWED_ORIGINS').split(',').map(s=>s.trim()).filter(Boolean);
async function rpc(name:string,args:Record<string,unknown>={}){
 const response=await fetch(`${project}/rest/v1/rpc/${name}`,{method:'POST',headers:{apikey:secret,Authorization:`Bearer ${secret}`,'Content-Type':'application/json'},body:JSON.stringify(args),signal:AbortSignal.timeout(10000)});
 if(!response.ok)throw Error('Database unavailable');return response.json();
}
async function list(){const rows=await rpc('figsaw_top_ten');return rows.filter((row:{name:string,nameSource?:string})=>row.nameSource==='linkedin'?Boolean(linkedInDisplayName(row.name)):validateDisplayName(row.name).ok);}
Deno.serve(createLeaderboardHandler({
 allowedOrigins,
 async authenticate(request:Request){
  const authorization=request.headers.get('Authorization');if(!authorization?.startsWith('Bearer '))return null;
  const response=await fetch(`${project}/auth/v1/user`,{headers:{apikey:env('SUPABASE_ANON_KEY'),Authorization:authorization},signal:AbortSignal.timeout(10000)});
  if(!response.ok)return null;return response.json();
 },
 consumeQuota:(userId:string)=>rpc('figsaw_submission_quota',{p_user_id:userId}),
 reviewName:createNameReviewer({endpoint:env('NAME_REVIEW_URL'),token:env('NAME_REVIEW_TOKEN')}),
 verifyLinkedInName:createLinkedInNameVerifier(),
 async save({name,nameKey,run,userId,nameSource='alias',nameConsent=false}:any){return rpc('figsaw_submit_score_with_identity',{p_user_id:userId,p_run_id:run.id,p_name:name,p_name_key:nameKey,p_remaining_seconds:run.remainingSeconds,p_attempt:run.attempt,p_name_source:nameSource,p_name_consent:nameConsent});},
 list
}));
