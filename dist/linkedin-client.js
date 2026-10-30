import {linkedinConfig} from './linkedin-config.js';
export const LINKEDIN_POST_TEXT='I want to play a game.\n\n#Figma';
export const PROMO_URL='./assets/figsaw-promo.mp4';
export function createLinkedInClient({config=linkedinConfig,fetcher=fetch,win=window,cryptoApi=crypto}={}){
 let session=null,connecting=false;
 const configured=()=>config.enabled&&/^sb_publishable_/.test(config.publishableKey);
 async function connect(){
  if(!configured())throw Error('LinkedIn sharing is not connected yet. You can save the media and copy the post text below.');
  if(connecting)throw Error('Finish the LinkedIn sign-in window first.');
  const popup=win.open('about:blank','figsaw-linkedin-sign-in','popup,width=580,height=730');
  if(!popup)throw Error('Allow the sign-in popup, then try again.');
  connecting=true;
  try{
   const verifier=Array.from(cryptoApi.getRandomValues(new Uint8Array(32)),n=>n.toString(16).padStart(2,'0')).join('');
   const digest=await cryptoApi.subtle.digest('SHA-256',new TextEncoder().encode(verifier));
   const challenge=btoa(String.fromCharCode(...new Uint8Array(digest))).replace(/\+/g,'-').replace(/\//g,'_').replace(/=+$/,'');
   const callback=new URL('./linkedin-callback.html',win.location.href);callback.search='';callback.hash='';
   const auth=new URL('/auth/v1/authorize',config.projectUrl);
   for(const [key,value]of Object.entries({provider:'linkedin_oidc',redirect_to:callback.href,scopes:'openid profile email w_member_social',code_challenge:challenge,code_challenge_method:'s256'}))auth.searchParams.set(key,value);
   const code=await new Promise((resolve,reject)=>{
    const cleanup=()=>{win.removeEventListener('message',receive);clearInterval(check);clearTimeout(timeout);};
    const receive=event=>{if(event.origin!==win.location.origin||event.source!==popup||event.data?.type!=='figsaw-linkedin-auth')return;cleanup();popup.close();event.data.code?resolve(event.data.code):reject(Error('LinkedIn sign-in was cancelled or denied.'));};
    win.addEventListener('message',receive);
    const check=setInterval(()=>{if(popup.closed){cleanup();reject(Error('LinkedIn sign-in was cancelled.'));}},600);
    const timeout=setTimeout(()=>{cleanup();popup.close();reject(Error('LinkedIn sign-in timed out. Please try again.'));},180000);
    popup.location.href=auth.href;
   });
   const response=await fetcher(`${config.projectUrl}/auth/v1/token?grant_type=pkce`,{method:'POST',headers:{apikey:config.publishableKey,'Content-Type':'application/json'},body:JSON.stringify({auth_code:code,code_verifier:verifier})});
   const data=await response.json();
   if(!response.ok||!data.access_token||!data.provider_token)throw Error('LinkedIn could not connect. Please try again.');
   session={accessToken:data.access_token,providerToken:data.provider_token,name:data.user?.user_metadata?.full_name||data.user?.user_metadata?.name||'LinkedIn member',expiresAt:Date.now()+Math.min(Number(data.expires_in)||3600,3600)*1000};
   return {name:session.name};
  }finally{connecting=false;if(!popup.closed)popup.close();}
 }
 async function post({kind,graphic,requestId,confirmed=false}){
  if(confirmed!==true)throw Error('Review and confirm the post first.');
  if(!session||session.expiresAt<=Date.now()){session=null;throw Error('Reconnect LinkedIn before posting.');}
  const body=new FormData();body.set('kind',kind);body.set('requestId',requestId);body.set('text',LINKEDIN_POST_TEXT);body.set('confirmed','true');body.set('providerToken',session.providerToken);
  if(kind==='graphic')body.set('graphic',graphic,'figsaw-result.png');
  let response;
  try{response=await fetcher(`${config.projectUrl}/functions/v1/linkedin-share`,{method:'POST',headers:{apikey:config.publishableKey,Authorization:`Bearer ${session.accessToken}`},body});}
  catch{throw Error('The connection ended before we could confirm the result. Check your LinkedIn profile before trying again.');}
  const data=await response.json().catch(()=>({}));
  if(!response.ok)throw Error(data.message||'LinkedIn could not confirm the post. Check your profile before trying again.');
  return data;
 }
 return {connect,post,get configured(){return Boolean(configured());},get connected(){return Boolean(session&&session.expiresAt>Date.now());},get name(){return session?.name||'';},leaderboardIdentity(){
  if(!session||session.expiresAt<=Date.now())throw Error('Reconnect LinkedIn before using your name.');
  return {accessToken:session.accessToken,providerToken:session.providerToken,name:session.name};
 }};
}
let sharedClient;
export function getLinkedInClient(){return sharedClient??=createLinkedInClient();}
