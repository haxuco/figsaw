import {linkedinConfig} from './linkedin-config.js';
import {linkedInDisplayName} from './linkedin-name.js';
export const LINKEDIN_POST_TEXT='I want to play a game.\n\n#Figma';
export const PROMO_URL='./assets/figsaw-promo.mp4';
export function createLinkedInClient({config=linkedinConfig,fetcher=fetch,win=globalThis.window}={}){
 let name=null,expiresAt=0,connecting=null;
 const connected=()=>Boolean(name&&expiresAt>Date.now());
 const configured=config.enabled===true&&/^\/api\/[a-z0-9/-]+$/i.test(config.apiBase||'');
 async function request(path,options={}){
  const r=await fetcher(config.apiBase+path,{...options,credentials:'same-origin',cache:'no-store',headers:{...(options.body instanceof FormData?{}:{'Content-Type':'application/json'}),...options.headers},signal:AbortSignal.timeout(path==='/linkedin/share'?180000:15000)});
  const body=await r.json();if(!r.ok)throw Error(body.message||'LinkedIn could not connect. Please try again.');return body;
 }
 async function connect(){
  if(!configured)throw Error('LinkedIn is not configured yet.');if(connecting)return connecting;
  const popup=win.open('about:blank','figsaw-linkedin','popup,width=580,height=730');if(!popup)throw Error('Allow the sign-in popup, then try again.');
  // Listen before navigating; the callback carries only success, never tokens.
  connecting=new Promise((resolve,reject)=>{
   let timeout,poll,settled=false;
   const cleanup=()=>{win.removeEventListener('message',receive);win.clearTimeout(timeout);win.clearInterval(poll);};
   const finish=(error,value)=>{if(settled)return;settled=true;cleanup();try{popup.close();}catch{}error?reject(error):resolve(value);};
   const receive=async event=>{
    if(event.origin!==win.location.origin||event.source!==popup||event.data?.type!=='figsaw-linkedin-auth')return;
    if(!event.data.connected)return finish(Error('LinkedIn sign-in was canceled or expired.'));
    try{const status=await request('/status');name=linkedInDisplayName(status.name);expiresAt=Number(status.expiresAt)||0;if(!connected())throw Error('LinkedIn profile is unavailable.');finish(null,{name});}catch(error){finish(error);}
   };
   win.addEventListener('message',receive);
   timeout=win.setTimeout(()=>finish(Error('LinkedIn sign-in timed out. Please try again.')),180000);
   poll=win.setInterval(()=>{if(popup.closed)finish(Error('LinkedIn sign-in was canceled.'));},600);
   request('/linkedin/start',{method:'POST',body:'{}'}).then(({url})=>{
    const destination=new URL(url);if(destination.origin!=='https://www.linkedin.com'||destination.pathname!=='/oauth/v2/authorization')throw Error('Invalid sign-in destination.');
    if(!settled)popup.location.href=destination.href;
   }).catch(error=>finish(error));
  }).finally(()=>{connecting=null;});
  return connecting;
 }
 return {
  get configured(){return configured;},get connected(){return connected();},get name(){return connected()?name:null;},connect,
  leaderboardIdentity(){if(!connected())throw Error('Reconnect LinkedIn first.');return {name};},
  async post({kind,requestId,confirmed=false,graphic}){
   if(confirmed!==true)throw Error('Review and confirm the post first.');
   if(!connected())throw Error('Reconnect LinkedIn before posting.');
   const form=new FormData();form.set('kind',kind);form.set('requestId',requestId);form.set('text',LINKEDIN_POST_TEXT);form.set('confirmed','true');if(graphic)form.set('graphic',graphic,'figsaw.png');
   // A timed-out publish may have succeeded. Do not automatically retry.
   try{return await request('/linkedin/share',{method:'POST',body:form});}
   catch(error){throw Error(`${error.message} Check your LinkedIn profile before trying again.`);}
  }
 };
}
let shared;export function getLinkedInClient(){return shared??=createLinkedInClient();}
