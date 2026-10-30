import {validateDisplayName,displayNameKey} from '../_shared/display-name.js';
const UUID=/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
export function validateSubmission(body){
 const name=validateDisplayName(body?.name);if(!name.ok)return {ok:false,code:'name'};
 const r=body?.run;
 if(!r||!UUID.test(r.id??'')||r.eligible!==true||r.reason!=='qualified'||r.figpalsSaved!==2||!Number.isInteger(r.remainingSeconds)||r.remainingSeconds<0||r.remainingSeconds>1200||!Number.isSafeInteger(r.attempt)||r.attempt<1||r.attempt>2147483647)return {ok:false,code:'ineligible'};
 return {ok:true,name:name.name,nameKey:displayNameKey(name.name),run:r};
}
// Rejects names before any score/name write. Services return verdicts, never
// alternate names or messages to render. Errors and malformed replies fail closed.
export function createLeaderboardHandler({allowedOrigins,authenticate,consumeQuota,reviewName,save,list}){
 return async function handler(request){
  const origin=request.headers.get('Origin');
  if(origin&&!allowedOrigins.includes(origin))return new Response(null,{status:403});
  const headers={'Content-Type':'application/json','Cache-Control':'no-store','Vary':'Origin',...(origin?{'Access-Control-Allow-Origin':origin}:{})};
  const reply=(body,status=200)=>new Response(JSON.stringify(body),{status,headers});
  if(request.method==='OPTIONS')return new Response(null,{status:204,headers:{...headers,'Access-Control-Allow-Methods':'GET, POST, OPTIONS','Access-Control-Allow-Headers':'authorization, apikey, content-type','Access-Control-Max-Age':'600'}});
  if(request.method==='GET')try{return reply({entries:await list()});}catch{return reply({ok:false,code:'unavailable'},503);}
  if(request.method!=='POST')return reply({ok:false,code:'method'},405);
  try{
   const user=await authenticate(request);if(!user?.id||!UUID.test(user.id))return reply({ok:false,code:'auth'},401);
   // Consume quota before parsing/review, including rejected requests. Store only
   // the authenticated user ID and counters, never rejected names or request bodies.
   if(!await consumeQuota(user.id))return reply({ok:false,code:'rate_limit'},429);
   const reader=request.body?.getReader();if(!reader)return reply({ok:false,code:'invalid'},400);
   let length=0;const chunks=[];
   while(true){const {done,value}=await reader.read();if(done)break;length+=value.byteLength;if(length>2048){await reader.cancel();return reply({ok:false,code:'size'},413);}chunks.push(value);}
   const bytes=new Uint8Array(length);let offset=0;for(const chunk of chunks){bytes.set(chunk,offset);offset+=chunk.byteLength;}
   let body;try{body=JSON.parse(new TextDecoder().decode(bytes));}catch{return reply({ok:false,code:'invalid'},400);}
   const checked=validateSubmission(body);if(!checked.ok)return reply(checked);
   const verdict=await reviewName(checked.name);
   if(verdict!==true)return reply({ok:false,code:'name'});
   return reply(await save({...checked,userId:user.id}));
  }catch{return reply({ok:false,code:'unavailable'},503);}
 };
}
