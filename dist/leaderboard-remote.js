import {createLocalLeaderboard,rankedEntries} from './leaderboard.js';
import {validateDisplayName} from './display-name.js';
import {leaderboardConfig} from './leaderboard-config.js';
import {getLinkedInClient} from './linkedin-client.js';
import {linkedInDisplayName} from './linkedin-name.js';

export function createPayloadLeaderboard({apiBase='/api/figsaw',fetchImpl=globalThis.fetch,linkedinClient}={}){
 if(!/^\/api\/[a-z0-9/-]+$/i.test(apiBase)||apiBase.includes('//'))throw Error('Use a same-origin Payload API path.');
 const linkedin=()=>linkedinClient??getLinkedInClient();
 async function request(path,options={}){
  const response=await fetchImpl(apiBase+path,{...options,credentials:'same-origin',headers:{'Content-Type':'application/json',...options.headers},signal:AbortSignal.timeout(15000),cache:'no-store'});
  if(!response.ok)throw Error('The leaderboard is unavailable. Please try again.');
  return response.json();
 }
 async function ensureSession(){
  return request('/session',{method:'POST',body:'{}'});
 }
 return {
  persistent:true,scopeLabel:'Worldwide',savedMessage:'Saved to the worldwide leaderboard.',
  get supportsLinkedIn(){return linkedin().configured;},
  async connectLinkedIn(){const client=linkedin();if(!client.connected)await client.connect();return {name:client.name};},
  async list(){const data=await request('/leaderboard');if(!Array.isArray(data.entries))throw Error('Invalid leaderboard response.');return rankedEntries(data.entries,{trustedServer:true});},
  async submit({run,name,nameSource='alias',nameConsent=false}){
   let identity=null;
   if(nameSource==='linkedin'){
    if(nameConsent!==true)return {ok:false,code:'consent',message:'Approve displaying your LinkedIn name first.'};
    identity=linkedin().leaderboardIdentity();
    if(!linkedInDisplayName(name)||linkedInDisplayName(name)!==linkedInDisplayName(identity.name))return {ok:false,code:'consent',message:'Review your LinkedIn name again.'};
   }
   const checked=identity?{ok:true,name:linkedInDisplayName(identity.name)}:validateDisplayName(name);if(!checked.ok)return {...checked,code:'name'};
   if(!run?.eligible)return {ok:false,code:'ineligible',message:'This escape is not eligible for the top 10.'};
   await ensureSession();
   const result=await request('/leaderboard',{method:'POST',body:JSON.stringify({name:checked.name,...(identity?{nameSource:'linkedin',nameConsent:true}:{}),run:{id:run.id,attempt:run.attempt,remainingSeconds:run.remainingSeconds,figpalsSaved:run.figpalsSaved,eligible:run.eligible,reason:run.reason,wordsCompleted:run.wordsCompleted}})});
   if(result.ok!==true)return {ok:false,code:result.code==='name'?'name':'unavailable',message:result.code==='name'?'Choose a different name or friendly nickname.':'Your score could not be saved. Please try again.'};
   if(!Array.isArray(result.entries))throw Error('Invalid leaderboard response.');
   const entries=rankedEntries(result.entries,{trustedServer:true}),entry=entries.find(e=>e.id===result.entry?.id)??null;
   return {ok:true,entries,entry,rank:entry?entries.indexOf(entry)+1:null,improved:result.improved===true};
  }
 };
}
export function createLeaderboardRepository({config=leaderboardConfig,...options}={}){
 if(config.enabled===false)return createLocalLeaderboard(options);
 try{return createPayloadLeaderboard({...config,...options});}catch{
  // A cloud configuration error must never pretend to save a worldwide score locally.
  const unavailable=async()=>{throw Error('The leaderboard connection is not configured correctly.');};
  return {list:unavailable,submit:unavailable,persistent:false,scopeLabel:'Worldwide · unavailable',savedMessage:''};
 }
}
