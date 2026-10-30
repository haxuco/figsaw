import {createAuth} from './auth.mjs';
import {hash,httpError,jsonBody,requireOrigin,rateKey,unseal} from './security.mjs';
import {createLeaderboardHandler} from '../shared/handler.js';
import {createNameReviewer} from '../shared/name-review.js';
import {createLinkedInHandler} from '../shared/linkedin-post.js';
import {validateDisplayName} from '../shared/display-name.js';
import {linkedInDisplayName} from '../shared/linkedin-name.js';
import {recordAnalytics,summarize} from './analytics.mjs';

export function createBackend({store,env,fetcher=fetch,sendEmail,now=Date.now}){
  const origin=env.APP_ORIGIN,auth=createAuth({store,env,fetcher,sendEmail,now});
  if(!origin||new URL(origin).origin!==origin||!origin.startsWith('https://')&&!/^http:\/\/(localhost|127\.0\.0\.1):\d+$/.test(origin))throw Error('APP_ORIGIN must be the exact HTTPS game origin (localhost is allowed for development).');
  const reviewName=createNameReviewer({endpoint:env.NAME_REVIEW_URL,token:env.NAME_REVIEW_TOKEN,fetchImpl:fetcher});
  const reply=(data,status=200,cookie)=>Response.json(data,{status,headers:{'Cache-Control':'no-store','X-Content-Type-Options':'nosniff',...(cookie?{'Set-Cookie':cookie}:{})}});
  async function list(){
    const {docs}=await store.rows('scores',{},['-remainingSeconds','createdAt','id']);
    const seen=new Set(),entries=[];
    for(const row of docs){
      if(seen.has(row.nameKey))continue;
      const name=row.nameSource==='linkedin'&&row.nameConsent?linkedInDisplayName(row.name):validateDisplayName(row.name).ok?row.name:null;
      if(!name)continue;seen.add(row.nameKey);
      entries.push({id:row.key,name,remainingSeconds:row.remainingSeconds,attempt:row.attempt,createdAt:Date.parse(row.createdAt),...(row.nameSource==='linkedin'?{nameSource:'linkedin'}:{})});
      if(entries.length===10)break;
    }return entries;
  }
  return async function handler(request){
    const path=new URL(request.url).pathname.replace(/^\/api\/figsaw\/?/,'');
    try{
      if(request.method==='POST')requireOrigin(request,origin);
      if(path==='linkedin/callback'&&request.method==='GET'){
        let target;try{target=await auth.callback(request);}catch{target=origin+'/linkedin-callback.html?error=1';}
        return new Response(null,{status:303,headers:{Location:target,'Cache-Control':'no-store','Referrer-Policy':'no-referrer'}});
      }
      if(path==='status'&&request.method==='GET'){
        const session=await auth.session(request),identity=unseal(session?.value?.linkedin||'',env.PAYLOAD_SECRET);
        return reply({backend:'payload',linkedin:Boolean(env.LINKEDIN_CLIENT_ID&&env.LINKEDIN_CLIENT_SECRET),name:identity?.expiresAt>now()?identity.name:null,expiresAt:identity?.expiresAt||0,owner:auth.isOwner(session)});
      }
      if(path==='session'&&request.method==='POST'){const {cookie}=await auth.ensure(request);return reply({ok:true},200,cookie);}
      if(path==='linkedin/start'&&request.method==='POST'){const {url,cookie}=await auth.startLinkedIn(request);return reply({url},200,cookie);}
      if(path==='owner/code'&&request.method==='POST'){const {email}=await jsonBody(request,1024),{cookie}=await auth.requestOwnerCode(request,email);return reply({ok:true},200,cookie);}
      if(path==='owner/verify'&&request.method==='POST'){const {email,code}=await jsonBody(request,1024);await auth.verifyOwnerCode(request,email,code);return reply({ok:true});}
      if(path==='logout'&&request.method==='POST')return reply({ok:true},200,await auth.logout(request));
      if(path==='leaderboard'&&['GET','POST'].includes(request.method)){
        let session,verified;
        return createLeaderboardHandler({allowedOrigins:[origin],list,reviewName,
          authenticate:async()=>{session=await auth.session(request);return session?{id:session.value.id}:null;},
          consumeQuota:()=>store.claim('score:'+session.key,6,3600000,now()),
          verifyLinkedInName:async()=>{verified=await auth.identity(session);return verified;},
          save:async({name,nameKey,nameSource='alias',nameConsent=false,run})=>{
            const ownerKey=verified?'linkedin:'+hash(verified.sub):session.key;
            const value={name,nameKey:verified?ownerKey:nameKey,nameSource,nameConsent,ownerKey,remainingSeconds:run.remainingSeconds,attempt:run.attempt,wordsCompleted:Number.isInteger(run.wordsCompleted)?Math.max(0,Math.min(3,run.wordsCompleted)):0};
            const {created,doc}=await store.insertOnce('scores',run.id,value);
            if(doc.ownerKey!==ownerKey)return {ok:false,code:'duplicate'};
            const entries=await list(),entry=entries.find(e=>e.id===doc.key)||null;
            return {ok:true,entries,entry,improved:created&&Boolean(entry)};
          }
        })(request);
      }
      if(path==='linkedin/share'&&request.method==='POST'){
        let session,identity;
        return createLinkedInHandler({allowedOrigins:[origin],fetcher,version:env.LINKEDIN_API_VERSION||'202610',promoSource:env.PROMO_VIDEO_URL||origin+'/assets/figsaw-promo.mp4',
          authenticate:async()=>{session=await auth.session(request);identity=await auth.identity(session);return identity?{id:hash(identity.sub),identities:[{provider:'linkedin_oidc',identity_data:{sub:identity.sub}}]}:null;},
          providerToken:async()=>identity.token,
          claim:async(userId,id,kind)=>{
            const key=userId+':'+id,existing=await store.get('post-requests',key);
            if(existing)return existing.value.url?{url:existing.value.url}:{created:false};
            if(!await store.claim('post:'+userId,6,3600000,now()))throw httpError(429,'Please try again later.');
            return {created:(await store.insertOnce('post-requests',key,{value:{kind}})).created};
          },
          complete:async(userId,id,url)=>{const doc=await store.get('post-requests',userId+':'+id);await store.update('post-requests',doc.id,{value:{...doc.value,url}});}
        })(request);
      }
      if(path==='analytics'&&request.method==='POST'){
        if(!await store.claim('telemetry:'+rateKey(request,env,now()),120,60000,now()))throw httpError(429,'Please try later.');
        const packet=await jsonBody(request,4096);
        // Derive deployment environment rather than trusting browser input.
        packet.p_data={...packet.p_data,environment:new URL(origin).hostname==='figsaw.figma.site'?'official':'staging'};
        return reply({ok:await recordAnalytics(store,packet,now())});
      }
      if(path==='insights'&&request.method==='POST'){
        if(!auth.isOwner(await auth.session(request)))throw httpError(403,'Owner access required.');
        const {days=30,environment='official'}=await jsonBody(request,1024);
        if(![7,30,90].includes(days)||!['official','staging','all'].includes(environment))throw httpError(400,'Invalid date range.');
        const where={createdAt:{greater_than_equal:new Date(now()-days*86400000).toISOString()},...(environment==='all'?{}:{environment:{equals:environment}})};
        const visits=await store.rows('visits',where,'-createdAt'),attempts=await store.rows('attempts',where,'-createdAt');
        return reply(summarize(visits.docs,attempts.docs,{days,environment,now:now(),truncated:visits.truncated||attempts.truncated}));
      }
      return reply({message:'Not found.'},404);
    }catch(error){
      // Do not log request bodies, email codes, tokens, names or provider responses.
      return reply({message:error.status?error.message:'The service is temporarily unavailable.'},error.status||503);
    }
  };
}
