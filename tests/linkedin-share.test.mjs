import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import {createLinkedInHandler,POST_TEXT,PROMO_SOURCE} from '../payload/src/shared/linkedin-post.js';
import {createLinkedInClient,LINKEDIN_POST_TEXT} from '../dist/linkedin-client.js';
const origin='https://figsaw.figma.site',id='f710d12c-6480-45f8-a453-5cf1ba79c257';
const user={id:'user-1',identities:[{provider:'linkedin_oidc',identity_data:{sub:'member1'}}]};
function request({kind='video',confirmed='true',text=POST_TEXT,graphic,originValue=origin}={}){const body=new FormData();for(const [k,v]of Object.entries({kind,confirmed,text,requestId:id,providerToken:'fake-test-token'}))body.set(k,v);if(graphic)body.set('graphic',graphic,'result.png');return new Request('https://example.test/share',{method:'POST',headers:{origin:originValue,Authorization:'Bearer fake-test-session'},body});}
function setup({account=user,reservation={created:true},throwPublish=false}={}){
 const calls=[],completed=[];
 const fetcher=async(url,options={})=>{
  calls.push({url,options});
  if(url.endsWith('/userinfo'))return Response.json({sub:'member1'});
  if(url===PROMO_SOURCE)return new Response(new Uint8Array(16),{headers:{'content-length':'16'}});
  if(url.includes('videos?action=initialize'))return Response.json({value:{video:'urn:li:video:123',uploadToken:'',uploadInstructions:[{uploadUrl:'https://www.linkedin.com/dms-uploads/one',firstByte:0,lastByte:7},{uploadUrl:'https://www.linkedin.com/dms-uploads/two',firstByte:8,lastByte:15}]}});
  if(url.includes('images?action=initialize'))return Response.json({value:{image:'urn:li:image:123',uploadUrl:'https://www.linkedin.com/dms-uploads/image'}});
  if(url.includes('/dms-uploads/'))return new Response(null,{headers:{etag:'test-etag'}});
  if(url.includes('finalizeUpload'))return new Response(null,{status:200});
  if(url.endsWith('/posts')){if(throwPublish)throw Error('timeout');return new Response(null,{status:201,headers:{'x-restli-id':'urn:li:share:123456'}});}
  throw Error('Unexpected URL');
 };
 const handler=createLinkedInHandler({allowedOrigins:[origin],authenticate:async()=>account,claim:async()=>reservation,complete:async(...args)=>completed.push(args),fetcher});
 return {handler,calls,completed};
}
test('post copy matches exactly and video is a fixed first-party asset',()=>{assert.equal(POST_TEXT,'I want to play a game.\n\n#Figma');assert.equal(POST_TEXT,LINKEDIN_POST_TEXT);assert.match(PROMO_SOURCE,/\/assets\/figsaw-promo\.mp4$/);});
test('preview, preflight, missing confirmation and mismatched copy never publish',async()=>{
 const {handler,calls}=setup();
 assert.equal((await handler(new Request('https://example.test/share',{method:'OPTIONS',headers:{origin}}))).status,204);
 for(const changes of [{confirmed:'false'},{text:'different text'},{originValue:'https://attacker.test'}])assert.ok((await handler(request(changes))).status>=400);
 assert.equal(calls.length,0);
});
test('unauthenticated and mismatched LinkedIn sessions cannot upload or post',async()=>{
 const a=setup({account:null});assert.equal((await a.handler(request())).status,401);assert.equal(a.calls.length,0);
 const b=setup({account:{...user,identities:[]}});assert.equal((await b.handler(request())).status,403);assert.equal(b.calls.length,1);
});
test('confirmed video uses all inclusive byte parts and exact post text once',async()=>{
 const s=setup(),result=await s.handler(request());assert.equal(result.status,200);assert.equal((await result.json()).url,'https://www.linkedin.com/feed/update/urn:li:share:123456/');
 const uploads=s.calls.filter(c=>c.options.method==='PUT');assert.deepEqual(uploads.map(c=>c.options.body.size),[8,8]);
 const posts=s.calls.filter(c=>c.url.endsWith('/posts'));assert.equal(posts.length,1);const post=JSON.parse(posts[0].options.body);assert.equal(post.commentary,POST_TEXT);assert.equal(post.author,'urn:li:person:member1');assert.equal(post.content.media.id,'urn:li:video:123');assert.equal(s.completed.length,1);
});
test('confirmed graphic uploads the selected PNG instead of the video',async()=>{
 const png=new Blob([new Uint8Array([137,80,78,71,13,10,26,10,0])],{type:'image/png'}),s=setup();assert.equal((await s.handler(request({kind:'graphic',graphic:png}))).status,200);assert.equal(s.calls.some(c=>c.url===PROMO_SOURCE),false);assert.equal(JSON.parse(s.calls.find(c=>c.url.endsWith('/posts')).options.body).content.media.id,'urn:li:image:123');
});
test('repeated and uncertain requests never publish a second time',async()=>{
 const pending=setup({reservation:{created:false}});assert.equal((await pending.handler(request())).status,409);assert.equal(pending.calls.length,1);
 const done=setup({reservation:{url:'https://www.linkedin.com/feed/update/urn:li:share:123456/'}});assert.equal((await done.handler(request())).status,200);assert.equal(done.calls.length,1);
 const lost=setup({throwPublish:true});assert.equal((await lost.handler(request())).status,502);assert.equal(lost.calls.filter(c=>c.url.endsWith('/posts')).length,1);
});
test('client refuses a post before explicit confirmation or connection',async()=>{
 let requests=0;const client=createLinkedInClient({win:{},cryptoApi:{},fetcher:async()=>{requests++;}});await assert.rejects(client.post({kind:'video'}),/Review and confirm/);await assert.rejects(client.post({kind:'video',confirmed:true}),/Reconnect/);assert.equal(requests,0);
});
test('auth callback only returns only sign-in status to its same-origin opener, never posts',async()=>{
 const source=await readFile(new URL('../dist/linkedin-callback.js',import.meta.url),'utf8');assert.match(source,/history.replaceState/);assert.match(source,/postMessage\(.*location.origin/);assert.doesNotMatch(source,/fetch\(|\.post\(/);
});
