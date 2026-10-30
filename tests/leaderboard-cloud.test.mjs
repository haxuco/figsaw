import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import {validateDisplayName} from '../dist/display-name.js';
import {createLocalLeaderboard,LEADERBOARD_STORAGE_KEY} from '../dist/leaderboard.js';
import {createLeaderboardRepository,createPayloadLeaderboard} from '../dist/leaderboard-remote.js';
import {createLeaderboardHandler,validateSubmission} from '../payload/src/shared/handler.js';
const id='123e4567-e89b-12d3-a456-426614174000',userId='123e4567-e89b-12d3-a456-426614174001';
const run={id,eligible:true,reason:'qualified',remainingSeconds:845,figpalsSaved:2,attempt:4};
const entry={id,name:'Ava',remainingSeconds:845,attempt:4,createdAt:1000};
const payload={run,name:'Ava'},origin='https://figsaw.figma.site';
const request=(body=payload,method='POST',extra={})=>new Request('https://project.supabase.co/functions/v1/leaderboard',{method,headers:{Origin:origin,Authorization:'Bearer test-token',...extra},...(method==='POST'?{body:JSON.stringify(body)}:{})});
function server(overrides={}){
 const calls={saved:[],reviewed:[],quota:[]};
 const handler=createLeaderboardHandler({allowedOrigins:[origin],authenticate:async()=>({id:userId}),consumeQuota:async id=>{calls.quota.push(id);return true;},reviewName:async name=>{calls.reviewed.push(name);return true;},save:async data=>{calls.saved.push(data);return {ok:true,entries:[entry],entry,rank:1,improved:true};},list:async()=>[entry],...overrides});
 return {handler,calls};
}
test('sexual terms, disguised spellings and all brand references are rejected',()=>{
 for(const name of ['boob','boobs','B O O B S','b00bs','B.o.O.b.S','bööbs','boooobs','boobPlayer','PlayerPenis','p.e.n.i.s','p3n1s','cock','c0ck','C O C K','cock99','xxx','hentai','horny','vagina','blowjob','Figma','FigmaFan','F I G M A','F1gm4','Ｆｉｇｍａ','Fіgmа'])assert.equal(validateDisplayName(name).ok,false,name);
 for(const name of ['Ava','José','李 明','Hancock','Dickens'])assert.equal(validateDisplayName(name).ok,true,name);
});
test('local reads actually purge disallowed legacy names instead of only hiding them',async()=>{
 let data=JSON.stringify([{...entry,name:'Figma Fan'}, {...entry,id:'second',name:'boobs'}, {...entry,id:'third',name:'Ava'}]);
 const repository=createLocalLeaderboard({storage:{getItem:()=>data,setItem:(key,value)=>{assert.equal(key,LEADERBOARD_STORAGE_KEY);data=value;}}});
 assert.deepEqual((await repository.list()).map(e=>e.name),['Ava']);assert.deepEqual(JSON.parse(data).map(e=>e.name),['Ava']);
});
test('browser and Payload server use exactly the same moderation policy',async()=>{
 assert.equal(await readFile(new URL('../dist/display-name.js',import.meta.url),'utf8'),await readFile(new URL('../payload/src/shared/display-name.js',import.meta.url),'utf8'));
});
test('server rejects names before moderation or database writes, even when bypassing the browser',async()=>{
 const {handler,calls}=server();
 for(const name of ['boobs','penis','cock','Figma fan','You are stupid','f.u.c.k.']){
  const response=await handler(request({...payload,name}));assert.equal((await response.json()).code,'name');
 }
 assert.equal(calls.saved.length,0);assert.equal(calls.reviewed.length,0);assert.equal(calls.quota.length,6);
});
test('server requires auth and quota and fails closed when review rejects or is unavailable',async()=>{
 for(const [overrides,status]of [[{authenticate:async()=>null},401],[{consumeQuota:async()=>false},429],[{reviewName:async()=>{throw Error('offline');}},503],[{reviewName:async()=>false},200],[{reviewName:async()=>({allow:true})},200]]){
  const {handler,calls}=server(overrides),response=await handler(request());assert.equal(response.status,status);assert.equal(calls.saved.length,0);
 }
});
test('server saves only the approved normalized name with the authenticated owner',async()=>{
 const {handler,calls}=server(),response=await handler(request({...payload,name:'  Ava  ',userId:'forged'}));
 assert.equal((await response.json()).ok,true);assert.equal(calls.saved[0].name,'Ava');assert.equal(calls.saved[0].nameKey,'ava');assert.equal(calls.saved[0].userId,userId);
});
test('server rejects invalid score payloads, oversized bodies and unapproved origins',async()=>{
 for(const patch of [{eligible:false},{reason:'diagnostic'},{figpalsSaved:1},{attempt:0},{attempt:3.5},{remainingSeconds:1201},{remainingSeconds:-1},{remainingSeconds:Infinity},{id:'not-uuid'}])assert.equal(validateSubmission({name:'Ava',run:{...run,...patch}}).ok,false);
 const {handler,calls}=server();assert.equal((await handler(request({...payload,padding:'x'.repeat(3000)}))).status,413);
 assert.equal((await handler(request(payload,'POST',{Origin:'https://unapproved.example'}))).status,403);assert.equal(calls.saved.length,0);
 const preflight=await handler(request(null,'OPTIONS'));assert.equal(preflight.status,204);assert.equal(preflight.headers.get('Access-Control-Allow-Origin'),origin);
 const read=await handler(request(null,'GET'));assert.deepEqual(await read.json(),{entries:[entry]});
});
test('blank configuration stays local; partial/cloud failures never silently save locally',async()=>{
 const local=createLeaderboardRepository({config:{enabled:false},storage:null});assert.equal(local.scopeLabel,'This visit only');
 const partial=createLeaderboardRepository({config:{enabled:true,apiBase:'https://invalid.example'}});await assert.rejects(()=>partial.list());
 assert.throws(()=>createPayloadLeaderboard({apiBase:'http://invalid.example'}));
 assert.throws(()=>createPayloadLeaderboard({apiBase:'//invalid.example'}));
 const failing=createPayloadLeaderboard({apiBase:'/api/figsaw',fetchImpl:async()=>{throw Error('network offline');}});await assert.rejects(()=>failing.submit(payload));
});
test('cloud adapter is lazy, uses server-managed session cookies on submit and filters response names',async()=>{
 const calls=[];const repo=createPayloadLeaderboard({apiBase:'/api/figsaw',fetchImpl:async(url,options)=>{
  calls.push({url,options});
  if(url.endsWith('/session'))return Response.json({access_token:'user-token',refresh_token:'refresh',expires_in:3600});
  if(options.method==='POST')return Response.json({ok:true,entries:[entry],entry,rank:1,improved:true});
  return Response.json({entries:[entry,{...entry,id:'bad',name:'boobs'}]});
 }});
 assert.equal(calls.length,0);assert.equal(repo.scopeLabel,'Worldwide');assert.deepEqual(await repo.list(),[entry]);
 const result=await repo.submit(payload);assert.equal(result.rank,1);assert.equal(calls[2].options.credentials,'same-origin');assert.equal(calls[2].options.headers.Authorization,undefined);
 await repo.submit(payload);assert.equal(calls.filter(c=>c.url.endsWith('/session')).length,2);
 const before=calls.length;assert.equal((await repo.submit({...payload,name:'Figma'})).ok,false);assert.equal(calls.length,before);
});
test('SQL access is restricted to the service role and submission changes are serialized',async()=>{
 const sql=await readFile(new URL('../legacy/supabase/migrations/202610300001_leaderboard.sql',import.meta.url),'utf8');
 for(const table of ['figsaw_scores','figsaw_submissions','figsaw_submission_limits'])assert.ok(sql.includes(`alter table public.${table} enable row level security`));
 assert.match(sql,/revoke all on function public\.figsaw_submit_score.*from public,anon,authenticated/);
 assert.match(sql,/pg_advisory_xact_lock/);assert.match(sql,/on conflict\(name_key\)/);assert.match(sql,/used <= 6/);
});

test('review service requires an explicit boolean approval for the current policy',async()=>{
 const {createNameReviewer}=await import('../payload/src/shared/name-review.js');
 for(const settings of [{},{endpoint:'http://review.example',token:'private'}])await assert.rejects(()=>createNameReviewer(settings)('Ava'));
 for(const response of [{allow:'true',policy:'figsaw-friendly-names-v1'},{allow:true,policy:'old'},{}]){
  const review=createNameReviewer({endpoint:'https://review.example',token:'private',fetchImpl:async()=>Response.json(response)});await assert.rejects(()=>review('Ava'));
 }
 let captured;const review=createNameReviewer({endpoint:'https://review.example',token:'private',fetchImpl:async(url,options)=>{captured=options;return Response.json({allow:true,policy:'figsaw-friendly-names-v1'});}});
 assert.equal(await review('Ava'),true);assert.equal(captured.redirect,'error');assert.deepEqual(JSON.parse(captured.body),{name:'Ava',policy:'figsaw-friendly-names-v1'});
 const deny=createNameReviewer({endpoint:'https://review.example',token:'private',fetchImpl:async()=>Response.json({allow:false,policy:'figsaw-friendly-names-v1'})});assert.equal(await deny('Ava'),false);
 for(const name of ['YouAreStupid','TrashGame','GameIsGarbage','ThisIsBad'])assert.equal(validateDisplayName(name).ok,false,name);
 for(const name of ['John Hancock','Ada Dickens'])assert.equal(validateDisplayName(name).ok,true,name);
});
