import test,{before,after,beforeEach} from 'node:test';
import assert from 'node:assert/strict';
import {mkdtemp,rm} from 'node:fs/promises';
import {tmpdir} from 'node:os';
import {join} from 'node:path';
import {randomBytes,randomUUID} from 'node:crypto';
import {createStore} from '../src/core/store.mjs';
import {createBackend} from '../src/core/handler.mjs';
import {seal,unseal} from '../src/core/security.mjs';
import {summarize} from '../src/core/analytics.mjs';
const origin='http://localhost:3000';
let payload,store,folder,handler,calls,email,now,env,review=true;
before(async()=>{
 folder=await mkdtemp(join(tmpdir(),'figsaw-payload-test-'));
 Object.assign(process.env,{PAYLOAD_SECRET:randomBytes(32).toString('hex'),DATABASE_URI:'file:'+join(folder,'test.db'),APP_ORIGIN:origin,OWNER_EMAIL:'owner@example.invalid',NODE_ENV:'development'});
 const {getPayload}=await import('payload'),{default:config}=await import('../src/payload.config.ts');
 payload=await getPayload({config});store=createStore(payload);
});
after(async()=>{await payload?.destroy();if(folder)await rm(folder,{recursive:true,force:true});});
beforeEach(async()=>{
 for(const collection of ['scores','sessions','challenges','limits','post-requests','visits','attempts','owners'])await payload.delete({collection,where:{},overrideAccess:true});
 calls=[];email=[];review=true;now=Date.now();
 env={...process.env,NAME_REVIEW_URL:'https://review.example.invalid',NAME_REVIEW_TOKEN:'test-only',SMTP_HOST:'test.invalid',LINKEDIN_CLIENT_ID:'test-app',LINKEDIN_CLIENT_SECRET:'test-only'};
 handler=createBackend({store,env,now:()=>now,sendEmail:async message=>email.push(message),fetcher:async(url,options)=>{
  calls.push({url,options});
  if(url==='https://review.example.invalid')return Response.json({allow:review,policy:'figsaw-friendly-names-v1'});
  if(url.endsWith('/accessToken'))return Response.json({access_token:'test-token-server-only',expires_in:3600});
  if(url.endsWith('/userinfo'))return Response.json({sub:'member-42',name:'Ada Example'});
  throw Error('No real network or publishing allowed: '+url);
 }});
});
function req(path,{body,method=body===undefined?'GET':'POST',cookie,headers={}}={}){return new Request(origin+'/api/figsaw/'+path,{method,headers:{Origin:origin,...(body!==undefined?{'Content-Type':'application/json'}:{}),...(cookie?{Cookie:cookie}:{}),...headers},...(body!==undefined?{body:JSON.stringify(body)}:{})});}
async function session(){const response=await handler(req('session',{body:{}}));assert.equal(response.status,200);return response.headers.get('set-cookie').split(';')[0];}
const run=()=>({id:randomUUID(),eligible:true,reason:'qualified',remainingSeconds:850,figpalsSaved:2,attempt:5,wordsCompleted:2});
const submit=(cookie,changes={})=>handler(req('leaderboard',{cookie,body:{name:'Ada',run:run(),...changes}}));
function packet(){return {p_visit:randomUUID(),p_run:randomUUID(),p_secret:'a'.repeat(64),p_data:{sequence:1,environment:'official',device:'desktop',active_ms:1000,visible_ms:1000,run_ms:1000,interactions:1,run_interactions:1,load_ms:500,outcome:'playing',cause:null,milestones:{room_ready:0},saved:0}};}
test('raw collections deny anonymous reads/writes and first-admin takeover',async()=>{
 for(const collection of ['scores','sessions','challenges','limits','post-requests','visits','attempts','owners']){
  await assert.rejects(()=>payload.find({collection,overrideAccess:false}));
  await assert.rejects(()=>payload.create({collection,data:{key:'forged',value:{}},overrideAccess:false}));
 }
 await assert.rejects(()=>payload.create({collection:'owners',data:{email:env.OWNER_EMAIL,password:'an-attacker-password'},overrideAccess:true}),/server-only/);
});
test('encrypted credentials reject a different server secret',()=>{
 const encrypted=seal({token:'private'},env.PAYLOAD_SECRET);assert.ok(!encrypted.includes('private'));assert.equal(unseal(encrypted,env.PAYLOAD_SECRET).token,'private');assert.equal(unseal(encrypted,'other-secret'),null);
});
test('API requires same origin and HttpOnly session, never browser identity flags',async()=>{
 assert.equal((await handler(req('session',{body:{},headers:{Origin:'https://evil.invalid'}}))).status,403);
 assert.equal((await submit(null)).status,401);
 const response=await handler(req('session',{body:{}}));assert.match(response.headers.get('set-cookie'),/HttpOnly; SameSite=Lax/);
 const cookie=response.headers.get('set-cookie').split(';')[0];
 assert.equal((await submit(cookie,{nameSource:'linkedin',nameConsent:true,providerToken:'forged'})).status,401);
 assert.equal((await handler(req('insights',{cookie,body:{}}))).status,403);
 assert.equal((await store.rows('scores')).docs.length,0);
});
test('offensive aliases are rejected and absent semantic review fails closed',async()=>{
 const cookie=await session();
 for(const name of ['f.u.c.k.','boobs','Figma is awful'])assert.equal((await (await submit(cookie,{name})).json()).code,'name');
 review=false;assert.equal((await (await submit(cookie)).json()).code,'name');
 delete env.NAME_REVIEW_URL;const closed=createBackend({store,env,sendEmail:async()=>{},now:()=>now});
 assert.equal((await closed(req('leaderboard',{cookie,body:{name:'Ada',run:run()}}))).status,503);
 assert.equal((await store.rows('scores')).docs.length,0);
});
test('scores rank by time, deduplicate names and preserve immutable run submissions',async()=>{
 const cookie=await session(),r=run();
 let result=await (await submit(cookie,{run:r})).json();assert.equal(result.ok,true);assert.equal(result.entry.name,'Ada');
 result=await (await submit(cookie,{name:'Different',run:{...r,remainingSeconds:1199}})).json();assert.equal(result.entry.name,'Ada');assert.equal(result.entry.remainingSeconds,850);
 await submit(cookie,{run:{...run(),remainingSeconds:900}});await submit(cookie,{name:'Sam',run:{...run(),remainingSeconds:1100}});
 const rows=(await (await handler(req('leaderboard'))).json()).entries;
 assert.deepEqual(rows.map(r=>[r.name,r.remainingSeconds]),[['Sam',1100],['Ada',900]]);assert.equal((await store.get('scores',r.id)).wordsCompleted,2);
 assert.equal((await (await submit(await session(),{run:r})).json()).code,'duplicate');
});
test('concurrent requests create one reservation and enforce exact quota',async()=>{
 const results=await Promise.all(Array.from({length:10},()=>store.insertOnce('post-requests','same-request',{value:{}})));assert.equal(results.filter(r=>r.created).length,1);
 const quota=await Promise.all(Array.from({length:12},()=>store.claim('parallel',6,3600000,now)));assert.equal(quota.filter(Boolean).length,6);
});
test('OAuth binds state to session, keeps tokens server-side, and requires exact-name consent',async()=>{
 const cookie=await session(),start=await (await handler(req('linkedin/start',{cookie,body:{}}))).json(),url=new URL(start.url),state=url.searchParams.get('state');
 assert.equal(url.searchParams.get('redirect_uri'),origin+'/api/figsaw/linkedin/callback');assert.equal(url.searchParams.get('code_challenge_method'),'S256');
 let response=await handler(req('linkedin/callback?state='+state+'&code=test',{cookie:await session()}));assert.match(response.headers.get('location'),/error=1/);
 response=await handler(req('linkedin/callback?state='+state+'&code=test',{cookie}));assert.match(response.headers.get('location'),/connected=1/);
 assert.match((await handler(req('linkedin/callback?state='+state+'&code=test',{cookie}))).headers.get('location'),/error=1/);
 const status=await (await handler(req('status',{cookie}))).json();assert.equal(status.name,'Ada Example');assert.ok(!JSON.stringify(status).includes('test-token'));
 for(const changes of [{name:'Ada Example',nameConsent:false},{name:'Forged',nameConsent:true}])assert.equal((await (await submit(cookie,{nameSource:'linkedin',...changes})).json()).code,'consent');
 review=false;assert.equal((await (await submit(cookie,{name:'Ada Example',nameSource:'linkedin',nameConsent:true})).json()).ok,true);
 assert.equal(calls.filter(c=>c.url.endsWith('/posts')).length,0);
});
test('owner code is session-bound, single-use, and only sent to the owner',async()=>{
 const cookie=await session();await handler(req('owner/code',{cookie,body:{email:'stranger@example.invalid'}}));assert.equal(email.length,0);
 assert.equal((await handler(req('owner/code',{cookie,body:{email:env.OWNER_EMAIL}}))).status,200);const code=email[0].text.match(/\d{8}/)[0],body={email:env.OWNER_EMAIL,code};
 assert.equal((await handler(req('owner/verify',{cookie:await session(),body}))).status,401);
 assert.equal((await handler(req('owner/verify',{cookie,body}))).status,200);assert.equal((await handler(req('owner/verify',{cookie,body}))).status,401);
 assert.equal((await handler(req('insights',{cookie,body:{days:30,environment:'all'}}))).status,200);
 await handler(req('logout',{cookie,body:{}}));assert.equal((await handler(req('insights',{cookie,body:{}}))).status,403);
});
test('analytics whitelist fields, bind attempts, freeze outcomes and reject stale packets',async()=>{
 const p=packet();p.p_data.secretText='must never persist';assert.equal((await handler(req('analytics',{body:p}))).status,200);
 let stored=await store.get('attempts',p.p_run);assert.ok(!JSON.stringify(stored).includes('must never persist'));assert.equal(stored.environment,'staging');
 assert.equal((await handler(req('analytics',{body:{...p,p_secret:'b'.repeat(64)}}))).status,403);
 assert.equal((await handler(req('analytics',{body:{...packet(),p_run:p.p_run}}))).status,403);
 now+=15000;p.p_data.sequence=2;p.p_data.outcome='lost';p.p_data.cause='acid';p.p_data.run_ms=16000;assert.equal((await handler(req('analytics',{body:p}))).status,200);
 p.p_data.sequence=3;p.p_data.outcome='won';p.p_data.cause=null;await handler(req('analytics',{body:p}));stored=await store.get('attempts',p.p_run);assert.equal(stored.outcome,'lost');assert.equal(stored.value.cause,'acid');
 const data=summarize((await store.rows('visits')).docs,(await store.rows('attempts')).docs,{now});assert.equal(data.summary.losses,1);assert.equal(data.failures[0].cause,'acid');
 p.p_data.milestones.email=3;assert.equal((await handler(req('analytics',{body:p}))).status,400);
});
test('sharing ignores browser tokens and persists reservations across uncertain publishes',async()=>{
 const cookie=await session(),start=await (await handler(req('linkedin/start',{cookie,body:{}}))).json(),state=new URL(start.url).searchParams.get('state');
 await handler(req('linkedin/callback?state='+state+'&code=test',{cookie}));
 const sends=[];
 const posting=createBackend({store,env,now:()=>now,sendEmail:async()=>{},fetcher:async(url,options={})=>{
  sends.push({url,options});
  if(url.endsWith('/userinfo'))return Response.json({sub:'member-42',name:'Ada Example'});
  if(url.includes('images?action='))return Response.json({value:{image:'urn:li:image:42',uploadUrl:'https://www.linkedin.com/dms-uploads/test'}});
  if(options.method==='PUT')return new Response(null,{status:200});
  if(url.endsWith('/posts'))throw Error('Mock timeout after publishing may have succeeded');
  throw Error('Unexpected mock request');
 }});
 const id=randomUUID();
 function post(){const form=new FormData();for(const [key,value]of Object.entries({kind:'graphic',requestId:id,confirmed:'true',text:'I want to play a game.\n\n#Figma',providerToken:'attacker-controlled'}))form.set(key,value);form.set('graphic',new Blob([new Uint8Array([137,80,78,71,13,10,26,10,0])],{type:'image/png'}),'result.png');return posting(new Request(origin+'/api/figsaw/linkedin/share',{method:'POST',headers:{Origin:origin,Cookie:cookie},body:form}));}
 assert.equal((await post()).status,502);assert.equal((await post()).status,409);
 assert.equal(sends.filter(c=>c.url.endsWith('/posts')).length,1);
 for(const call of sends.filter(c=>c.url.endsWith('/userinfo')))assert.equal(call.options.headers.Authorization,'Bearer test-token-server-only');
});
