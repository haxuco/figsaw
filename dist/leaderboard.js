import {FIGPAL_INTERVAL_SECONDS} from './countdown-clock.js';
import {captureVictoryResult} from './victory-result.js';
import {validateDisplayName,displayNameKey} from './display-name.js';
import {linkedInDisplayName} from './linkedin-name.js';

export const LEADERBOARD_LIMIT=10,LEADERBOARD_STORAGE_KEY='figsaw-top-10-v1';
export const ESCAPE_BUDGET_SECONDS=FIGPAL_INTERVAL_SECONDS*2;
export function remainingEscapeTime(seconds,scheduledDrops=0){
 if(!Number.isFinite(seconds)||!Number.isInteger(scheduledDrops)||scheduledDrops<0||scheduledDrops>2)return 0;
 if(scheduledDrops===2)return 0;
 return Math.max(0,Math.min(FIGPAL_INTERVAL_SECONDS,Math.ceil(seconds)))+FIGPAL_INTERVAL_SECONDS*(1-scheduledDrops);
}
export const createEscapeRunId=()=>globalThis.crypto?.randomUUID?.()??`escape-${Date.now()}-${Math.random().toString(36).slice(2)}`;

// Take eligibility from the actual rescued identities and living models, not
// just the count printed on the share card. The randomized PM is the exception.
export function captureRankedEscape({attempt,intervalSeconds,scheduledDrops=0,rescue,pmIndex,rigs,wordsCompleted=0,assisted=false,id=createEscapeRunId()}){
 // Words are a keepsake statistic; eligibility and ordering depend only on rescue and time.
 const result=captureVictoryResult({attempt,remainingSeconds:remainingEscapeTime(intervalSeconds,scheduledDrops),rescue,wordsCompleted});
 const survivors=[0,1,2].filter(i=>i!==pmIndex),passengers=new Set(rescue?.chairs?.filter(c=>c.landed).map(c=>c.passenger));
 const intact=Number.isInteger(pmIndex)&&pmIndex>=0&&pmIndex<3&&rescue?.safe&&survivors.every(i=>passengers.has(i)&&rigs?.[i]?.transformation?.transformed===false&&rigs[i].transformation.damaged!==true)&&!passengers.has(pmIndex)&&result.figpalsSaved===2;
 const timed=Number.isFinite(intervalSeconds)&&intervalSeconds>=0&&Number.isInteger(scheduledDrops)&&scheduledDrops>=0&&scheduledDrops<2;
 const reason=assisted?'diagnostic':!intact?'rescue':!timed?'time':'qualified';
 return Object.freeze({...result,id,eligible:reason==='qualified',reason});
}

const compare=(a,b)=>b.remainingSeconds-a.remainingSeconds||a.createdAt-b.createdAt||a.id.localeCompare(b.id);
function validEntry(value,trustedServer=false){
 if(!value||typeof value!=='object'||typeof value.id!=='string'||value.id.length>100||!value.id)return null;
 const verified=trustedServer&&value.nameSource==='linkedin';
 const name=verified?{name:linkedInDisplayName(value.name),ok:Boolean(linkedInDisplayName(value.name))}:validateDisplayName(value.name);
 if(!name.ok||!Number.isInteger(value.remainingSeconds)||value.remainingSeconds<0||value.remainingSeconds>ESCAPE_BUDGET_SECONDS||!Number.isSafeInteger(value.attempt)||value.attempt<1||!Number.isSafeInteger(value.createdAt)||value.createdAt<0)return null;
 return {id:value.id,name:name.name,remainingSeconds:value.remainingSeconds,attempt:value.attempt,createdAt:value.createdAt,...(verified?{nameSource:'linkedin'}:{})};
}
export function rankedEntries(values,{trustedServer=false}={}){
 const names=new Set(),ids=new Set();return (Array.isArray(values)?values:[]).map(value=>validEntry(value,trustedServer)).filter(Boolean).sort(compare).filter(entry=>{
  const key=displayNameKey(entry.name);if(names.has(key)||ids.has(entry.id))return false;names.add(key);ids.add(entry.id);return true;
 }).slice(0,LEADERBOARD_LIMIT);
}
export function prospectiveRank(entries,seconds){return 1+entries.filter(entry=>entry.remainingSeconds>=seconds).length;}
function browserStorage(){try{return globalThis.localStorage;}catch{return null;}}

// Repository boundary: the Payload adapter can implement list()/submit().
// No network, credentials or new dependency is needed for the local version.
export function createLocalLeaderboard({storage=browserStorage(),now=()=>Date.now()}={}){
 let memory=[],persistent=!!storage;
 function read(){
  if(persistent)try{const raw=storage.getItem(LEADERBOARD_STORAGE_KEY);try{memory=rankedEntries(JSON.parse(raw??'[]'));}catch{memory=[];}}catch{persistent=false;}
  // Remove legacy rejected names from storage as well as from the UI.
  if(persistent)try{storage.setItem(LEADERBOARD_STORAGE_KEY,JSON.stringify(memory));}catch{persistent=false;}
  return memory.map(entry=>({...entry}));
 }
 function write(entries){memory=entries;if(persistent)try{storage.setItem(LEADERBOARD_STORAGE_KEY,JSON.stringify(entries));}catch{persistent=false;}}
 return {
  async list(){return read();},
  async submit({run,name}){
   const checked=validateDisplayName(name);if(!checked.ok)return {...checked,code:'name'};
   if(!run?.eligible)return {ok:false,code:'ineligible',message:'This escape is not eligible for the top 10.'};
   const candidate=validEntry({id:run.id,name:checked.name,remainingSeconds:run.remainingSeconds,attempt:run.attempt,createdAt:now()});
   if(!candidate)return {ok:false,code:'invalid',message:'This escape could not be ranked.'};
   const current=read(),duplicate=current.find(entry=>entry.id===run.id);
   if(duplicate)return {ok:true,entries:current,entry:duplicate,rank:current.indexOf(duplicate)+1,improved:false};
   const previous=current.find(entry=>displayNameKey(entry.name)===displayNameKey(candidate.name));
   const improved=!previous||candidate.remainingSeconds>previous.remainingSeconds;
   const chosen=improved?candidate:previous,entries=rankedEntries([...current.filter(entry=>entry!==previous),chosen]);
   write(entries);const index=entries.findIndex(entry=>entry.id===chosen.id);
   return {ok:true,entries:entries.map(entry=>({...entry})),entry:index<0?null:{...chosen},rank:index<0?null:index+1,improved};
  },
  get persistent(){return persistent;},
  get scopeLabel(){return persistent?'On this device':'This visit only';},
  get savedMessage(){return persistent?'Saved on this device.':'Saved for this visit.';}
 };
}
