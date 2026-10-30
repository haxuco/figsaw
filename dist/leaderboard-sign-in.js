import {getLinkedInClient} from './linkedin-client.js';

// Signing in only connects an account. Publishing a name still uses the
// separate, exact-name approval on an eligible result.
export function createLeaderboardSignIn(root,{client=getLinkedInClient()}={}){
 root.innerHTML='<button type="button" data-leaderboard-sign-in>Sign in with LinkedIn</button><p data-sign-in-status role="status" aria-live="polite"></p>';
 const button=root.querySelector('button'),status=root.querySelector('[data-sign-in-status]');
 let busy=false;
 function sync(){
  button.disabled=busy||!client.configured||client.connected;
  button.textContent=busy?'Signing in…':client.connected?'LinkedIn connected':'Sign in with LinkedIn';
  status.textContent=client.connected?`Signed in as ${client.name}. Your name stays private until you approve displaying it after a qualifying escape.`:client.configured?'Your name stays private until you approve displaying it. Signing in does not post to LinkedIn.':'LinkedIn sign-in is not available yet. You can still play and use a nickname.';
 }
 button.onclick=async()=>{
  if(busy||!client.configured||client.connected)return;
  busy=true;sync();
  try{await client.connect();busy=false;sync();}
  catch(error){busy=false;sync();status.textContent=error.message||'LinkedIn could not connect. Please try again.';}
 };
 sync();return {sync};
}
