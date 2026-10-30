import {linkedInDisplayName} from '../_shared/linkedin-name.js';
export function createLinkedInNameVerifier({fetcher=fetch}={}){
 return async (user,token)=>{
  if(typeof token!=='string'||token.length<10||token.length>8192)return null;
  const response=await fetcher('https://api.linkedin.com/v2/userinfo',{headers:{Authorization:`Bearer ${token}`},signal:AbortSignal.timeout(15000),redirect:'error'});
  if(!response.ok)return null;
  const profile=await response.json();
  if(!profile.sub||!user.identities?.some(i=>i.provider==='linkedin_oidc'&&i.identity_data?.sub===profile.sub))return null;
  const name=linkedInDisplayName(profile.name);
  return name?{name}:null;
 };
}
