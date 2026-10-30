import {randomUUID} from 'node:crypto';
import {hash,randomToken,readCookie,sessionCookie,rateKey,httpError,seal,unseal,code,same} from './security.mjs';
import {linkedInDisplayName} from '../shared/linkedin-name.js';

export function createAuth({store,env,fetcher=fetch,sendEmail,now=Date.now}){
  const origin=env.APP_ORIGIN,ttl=7200000;
  async function session(request){
    const token=readCookie(request,origin);if(!token)return null;
    const doc=await store.get('sessions',hash(token));return doc&&Date.parse(doc.expiresAt)>now()?doc:null;
  }
  async function ensure(request){
    const current=await session(request);if(current)return {doc:current};
    if(!await store.claim('session:'+rateKey(request,env,now()),30,3600000,now()))throw httpError(429,'Please try again later.');
    const token=randomToken(),doc=await store.create('sessions',{key:hash(token),value:{id:randomUUID()},expiresAt:new Date(now()+ttl).toISOString()});
    return {doc,cookie:sessionCookie(token,origin)};
  }
  async function identity(doc){
    const saved=unseal(doc?.value?.linkedin||'',env.PAYLOAD_SECRET);
    if(!saved||saved.expiresAt<=now())return null;
    const response=await fetcher('https://api.linkedin.com/v2/userinfo',{headers:{Authorization:`Bearer ${saved.token}`},redirect:'error',signal:AbortSignal.timeout(15000)});
    if(!response.ok)return null;const profile=await response.json(),name=linkedInDisplayName(profile.name);
    return name&&profile.sub===saved.sub?{...saved,name}:null;
  }
  return {
    session,ensure,identity,
    async startLinkedIn(request){
      if(!env.LINKEDIN_CLIENT_ID||!env.LINKEDIN_CLIENT_SECRET)throw httpError(503,'LinkedIn sign-in is not configured yet.');
      const {doc,cookie}=await ensure(request);
      if(!await store.claim('oauth:'+doc.key,6,3600000,now()))throw httpError(429,'Please try again later.');
      const state=randomToken(),verifier=randomToken();
      await store.create('challenges',{key:hash(state),value:{kind:'linkedin',session:doc.key,verifier:seal(verifier,env.PAYLOAD_SECRET)},expiresAt:new Date(now()+600000).toISOString()});
      const url=new URL('https://www.linkedin.com/oauth/v2/authorization');
      url.search=new URLSearchParams({response_type:'code',client_id:env.LINKEDIN_CLIENT_ID,redirect_uri:origin+'/api/figsaw/linkedin/callback',state,scope:'openid profile email w_member_social',code_challenge:Buffer.from(hash(verifier),'hex').toString('base64url'),code_challenge_method:'S256'}).toString();
      return {url:url.href,cookie};
    },
    async callback(request){
      const url=new URL(request.url),state=url.searchParams.get('state'),authCode=url.searchParams.get('code');
      if(!/^[a-f0-9]{64}$/.test(state||'')||!authCode||authCode.length>4096)throw httpError(400,'Sign-in was canceled.');
      const doc=await session(request),challenge=await store.get('challenges',hash(state));
      if(!doc||!challenge||challenge.value.kind!=='linkedin'||challenge.value.session!==doc.key||Date.parse(challenge.expiresAt)<now()||!await store.consume(challenge.key,challenge.expiresAt))throw httpError(401,'Sign-in expired.');
      const response=await fetcher('https://www.linkedin.com/oauth/v2/accessToken',{method:'POST',headers:{'Content-Type':'application/x-www-form-urlencoded'},body:new URLSearchParams({grant_type:'authorization_code',code:authCode,client_id:env.LINKEDIN_CLIENT_ID,client_secret:env.LINKEDIN_CLIENT_SECRET,redirect_uri:origin+'/api/figsaw/linkedin/callback',code_verifier:unseal(challenge.value.verifier,env.PAYLOAD_SECRET)}),redirect:'error',signal:AbortSignal.timeout(15000)});
      if(!response.ok)throw httpError(401,'LinkedIn could not connect.');
      const value=await response.json();if(typeof value.access_token!=='string'||!Number.isFinite(value.expires_in))throw httpError(401,'LinkedIn could not connect.');
      const r=await fetcher('https://api.linkedin.com/v2/userinfo',{headers:{Authorization:`Bearer ${value.access_token}`},redirect:'error',signal:AbortSignal.timeout(15000)});
      if(!r.ok)throw httpError(401,'LinkedIn could not connect.');
      const profile=await r.json(),name=linkedInDisplayName(profile.name);if(!name||typeof profile.sub!=='string'||profile.sub.length>255)throw httpError(401,'LinkedIn profile is unavailable.');
      await store.update('sessions',doc.id,{value:{...doc.value,linkedin:seal({sub:profile.sub,name,token:value.access_token,expiresAt:Math.min(now()+value.expires_in*1000,Date.parse(doc.expiresAt))},env.PAYLOAD_SECRET)}});
      // No tokens, auth codes or names are returned to the callback URL/browser.
      return origin+'/linkedin-callback.html?connected=1';
    },
    async requestOwnerCode(request,email){
      const {doc,cookie}=await ensure(request);
      if(!await store.claim('owner-email:'+rateKey(request,env,now()),3,600000,now()))throw httpError(429,'Please try again later.');
      // Identical response for unauthorized addresses; no open signup or SMTP relay.
      if(!env.OWNER_EMAIL||String(email).trim().toLowerCase()!==env.OWNER_EMAIL.toLowerCase())return {cookie};
      if(!env.SMTP_HOST)throw httpError(503,'Owner email sign-in is not configured yet.');
      const secret=code(),value={kind:'owner',session:doc.key,codeHash:hash(secret),owner:hash(env.OWNER_EMAIL.toLowerCase())};
      const existing=await store.get('challenges','owner:'+doc.key);
      const fields={value,expiresAt:new Date(now()+600000).toISOString()};
      if(existing)await store.update('challenges',existing.id,fields);else await store.create('challenges',{key:'owner:'+doc.key,...fields});
      await sendEmail({to:env.OWNER_EMAIL,subject:'Your Figsaw sign-in code',text:`Your code is ${secret}. It expires in 10 minutes. If you did not request it, ignore this email.`});
      return {cookie};
    },
    async verifyOwnerCode(request,email,entered){
      const doc=await session(request);
      if(!doc||!env.OWNER_EMAIL||String(email).trim().toLowerCase()!==env.OWNER_EMAIL.toLowerCase())throw httpError(401,'Invalid or expired code.');
      const challenge=await store.get('challenges','owner:'+doc.key);
      if(!await store.claim('owner-verify:'+doc.key,5,600000,now())||!challenge||Date.parse(challenge.expiresAt)<now()||!same(challenge.value.codeHash,hash(String(entered)))||challenge.value.owner!==hash(env.OWNER_EMAIL.toLowerCase())||!await store.consume(challenge.key+':'+challenge.updatedAt,challenge.expiresAt))throw httpError(401,'Invalid or expired code.');
      await store.update('sessions',doc.id,{value:{...doc.value,owner:challenge.value.owner,ownerUntil:now()+3600000}});
    },
    isOwner:doc=>Boolean(doc&&env.OWNER_EMAIL&&doc.value.owner===hash(env.OWNER_EMAIL.toLowerCase())&&doc.value.ownerUntil>now()),
    async logout(request){const doc=await session(request);if(doc)await store.update('sessions',doc.id,{expiresAt:new Date(0).toISOString(),value:{id:doc.value.id}});return sessionCookie('',origin,0);}
  };
}
