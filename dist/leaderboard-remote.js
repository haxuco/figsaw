import {createLocalLeaderboard,rankedEntries} from './leaderboard.js';
import {validateDisplayName} from './display-name.js';
import {leaderboardConfig} from './leaderboard-config.js';

export function createSupabaseLeaderboard({supabaseUrl,publishableKey,fetchImpl=globalThis.fetch}={}){
 const url=new URL(supabaseUrl);
 if(url.protocol!=='https:'||url.username||url.password||url.search||url.hash||url.pathname!=='/'||!/^sb_publishable_[A-Za-z0-9_-]+$/.test(publishableKey??''))throw Error('Use the Supabase project URL and a publishable key.');
 const base=url.origin,headers={apikey:publishableKey,'Content-Type':'application/json'};let session=null,authentication=null;
 async function request(path,options={}){
  const response=await fetchImpl(base+path,{...options,headers:{...headers,...options.headers},signal:AbortSignal.timeout(15000),cache:'no-store'});
  if(!response.ok)throw Error('The leaderboard is unavailable. Please try again.');
  return response.json();
 }
 async function token(){
  if(session&&session.expiresAt>Date.now()+30000)return session.access_token;
  if(!authentication)authentication=(async()=>{
   const value=await request(session?'/auth/v1/token?grant_type=refresh_token':'/auth/v1/signup',{method:'POST',body:JSON.stringify(session?{refresh_token:session.refresh_token}:{})});
   if(typeof value.access_token!=='string'||typeof value.refresh_token!=='string')throw Error('Unable to start a leaderboard session.');
   session={...value,expiresAt:Date.now()+(value.expires_in??3600)*1000};return session.access_token;
  })().finally(()=>{authentication=null;});
  return authentication;
 }
 return {
  persistent:true,scopeLabel:'Worldwide',savedMessage:'Saved to the worldwide leaderboard.',
  async list(){const data=await request('/functions/v1/leaderboard');if(!Array.isArray(data.entries))throw Error('Invalid leaderboard response.');return rankedEntries(data.entries);},
  async submit({run,name}){
   const checked=validateDisplayName(name);if(!checked.ok)return {...checked,code:'name'};
   if(!run?.eligible)return {ok:false,code:'ineligible',message:'This escape is not eligible for the top 10.'};
   const accessToken=await token();
   const result=await request('/functions/v1/leaderboard',{method:'POST',headers:{Authorization:`Bearer ${accessToken}`},body:JSON.stringify({name:checked.name,run:{id:run.id,attempt:run.attempt,remainingSeconds:run.remainingSeconds,figpalsSaved:run.figpalsSaved,eligible:run.eligible,reason:run.reason}})});
   if(result.ok!==true)return {ok:false,code:result.code==='name'?'name':'unavailable',message:result.code==='name'?'Choose a different name or friendly nickname.':'Your score could not be saved. Please try again.'};
   if(!Array.isArray(result.entries))throw Error('Invalid leaderboard response.');
   const entries=rankedEntries(result.entries),entry=entries.find(e=>e.id===result.entry?.id)??null;
   return {ok:true,entries,entry,rank:entry?entries.indexOf(entry)+1:null,improved:result.improved===true};
  }
 };
}
export function createLeaderboardRepository({config=leaderboardConfig,...options}={}){
 if(!config.supabaseUrl&&!config.publishableKey)return createLocalLeaderboard(options);
 try{return createSupabaseLeaderboard({...config,...options});}catch{
  // A cloud configuration error must never pretend to save a worldwide score locally.
  const unavailable=async()=>{throw Error('The leaderboard connection is not configured correctly.');};
  return {list:unavailable,submit:unavailable,persistent:false,scopeLabel:'Worldwide · unavailable',savedMessage:''};
 }
}
