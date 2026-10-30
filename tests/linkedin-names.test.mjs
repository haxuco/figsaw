import test from 'node:test';
import assert from 'node:assert/strict';
import {createLeaderboardHandler} from '../payload/src/shared/handler.js';
import {createLinkedInNameVerifier} from '../legacy/supabase/functions/leaderboard/linkedin-identity.js';
import {createPayloadLeaderboard} from '../dist/leaderboard-remote.js';
import {rankedEntries} from '../dist/leaderboard.js';
import {linkedInDisplayName} from '../dist/linkedin-name.js';
const user={id:'123e4567-e89b-12d3-a456-426614174000',identities:[{provider:'linkedin_oidc',identity_data:{sub:'member-1'}}]};
const run={id:'123e4567-e89b-12d3-a456-426614174001',eligible:true,reason:'qualified',figpalsSaved:2,remainingSeconds:900,attempt:2};
const body={name:'Figma Designer',nameSource:'linkedin',nameConsent:true,providerToken:'test-provider-token',run};
const origin='https://figsaw.figma.site';
const request=data=>new Request('https://project.supabase.co/functions/v1/leaderboard',{method:'POST',headers:{Origin:origin},body:JSON.stringify(data)});
function setup(overrides={}){const saved=[],reviewed=[];const handler=createLeaderboardHandler({allowedOrigins:[origin],authenticate:async()=>user,consumeQuota:async()=>true,verifyLinkedInName:async()=>({name:body.name}),reviewName:async name=>{reviewed.push(name);return false;},save:async record=>{saved.push(record);return {ok:true};},list:async()=>[],...overrides});return {handler,saved,reviewed};}
test('verified LinkedIn name bypasses nickname review only after explicit exact-name consent',async()=>{
 const {handler,saved,reviewed}=setup();
 for(const patch of [{nameConsent:false},{nameConsent:undefined},{nameConsent:'true'},{name:'Another Person'}]){assert.equal((await (await handler(request({...body,...patch}))).json()).ok,false);assert.equal(saved.length,0);}
 assert.equal((await (await handler(request(body))).json()).ok,true);
 assert.equal(saved[0].name,body.name);assert.equal(saved[0].nameKey,`linkedin:${user.id}`);assert.equal(saved[0].nameConsent,true);assert.equal(saved[0].nameSource,'linkedin');assert.equal(saved[0].providerToken,undefined);assert.equal(reviewed.length,0);
});
test('forged LinkedIn flags and missing identities cannot approve a name',async()=>{
 const {handler,saved}=setup({verifyLinkedInName:async()=>null});assert.equal((await handler(request(body))).status,401);assert.equal(saved.length,0);
 const alias=setup();assert.equal((await (await alias.handler(request({...body,nameSource:'alias'}))).json()).ok,false);assert.equal(alias.saved.length,0);
});
test('LinkedIn verification uses the provider profile and checks account ownership, not mutable user metadata',async()=>{
 let calls=0;const verifier=createLinkedInNameVerifier({fetcher:async(url,options)=>{calls++;assert.equal(url,'https://api.linkedin.com/v2/userinfo');assert.equal(options.headers.Authorization,'Bearer test-provider-token');return Response.json({sub:'member-1',name:'Jane Example'});}});
 assert.deepEqual(await verifier({...user,user_metadata:{name:'FORGED'}},body.providerToken),{name:'Jane Example'});
 assert.equal(await verifier({...user,identities:[]},body.providerToken),null);
 assert.equal(await verifier(user,'short'),null);assert.equal(calls,2);
});
test('verified names are accepted only from the trusted server response, never a local-storage flag',()=>{
 const row={id:run.id,name:body.name,nameSource:'linkedin',remainingSeconds:900,attempt:2,createdAt:123};
 assert.equal(rankedEntries([row]).length,0);assert.equal(rankedEntries([row],{trustedServer:true})[0].name,body.name);
 assert.equal(linkedInDisplayName('李'), '李');assert.equal(linkedInDisplayName('x'.repeat(101)),null);assert.equal(linkedInDisplayName('Jane\u202E Doe'),null);
});
test('cloud adapter does not submit a LinkedIn name during connect or without consent',async()=>{
 const calls=[];const client={configured:true,connected:true,name:body.name,leaderboardIdentity:()=>({name:body.name,accessToken:'verified-user',providerToken:body.providerToken})};
 const repo=createPayloadLeaderboard({apiBase:'/api/figsaw',linkedinClient:client,fetchImpl:async(url,options)=>{calls.push({url,options});return Response.json({ok:true,entries:[],entry:null});}});
 assert.deepEqual(await repo.connectLinkedIn(),{name:body.name});assert.equal(calls.length,0);
 assert.equal((await repo.submit({...body,nameConsent:false})).ok,false);assert.equal(calls.length,0);
 await repo.submit(body);assert.equal(calls.length,2);assert.equal(calls[1].options.credentials,'same-origin');assert.equal(calls[1].options.headers.Authorization,undefined);assert.equal(JSON.parse(calls[1].options.body).nameConsent,true);assert.equal(JSON.parse(calls[1].options.body).providerToken,undefined);
});
