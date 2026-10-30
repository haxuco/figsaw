import test from 'node:test';import assert from 'node:assert/strict';
import {createLinkedInClient} from '../dist/linkedin-client.js';
import {readFile} from 'node:fs/promises';

test('popup authenticates only a same-origin callback from its own window; browser never receives provider tokens',async()=>{
 const calls=[],listeners=new Map(),popup={closed:false,location:{href:''},close(){this.closed=true;}};
 const win={location:{origin:'https://figsaw.figma.site'},open:()=>popup,addEventListener:(k,fn)=>listeners.set(k,fn),removeEventListener:k=>listeners.delete(k),setTimeout:()=>1,clearTimeout(){},setInterval:()=>2,clearInterval(){}};
 const client=createLinkedInClient({config:{enabled:true,apiBase:'/api/figsaw'},win,fetcher:async(url,options)=>{
  calls.push({url,options});if(url.endsWith('/start'))return Response.json({url:'https://www.linkedin.com/oauth/v2/authorization?state=test'});
  if(url.endsWith('/status'))return Response.json({name:'Ada Example',expiresAt:Date.now()+3600000});
  if(url.endsWith('/share'))return Response.json({url:'https://www.linkedin.com/feed/update/test'});
  throw Error('Unexpected request');
 }});
 const connecting=client.connect();await new Promise(resolve=>setImmediate(resolve));
 const receive=listeners.get('message');await receive({origin:'https://evil.example',source:popup,data:{type:'figsaw-linkedin-auth',connected:true}});
 await receive({origin:win.location.origin,source:{},data:{type:'figsaw-linkedin-auth',connected:true}});assert.equal(client.connected,false);assert.equal(calls.length,1);
 await receive({origin:win.location.origin,source:popup,data:{type:'figsaw-linkedin-auth',connected:true}});await connecting;
 assert.equal(client.connected,true);assert.deepEqual(client.leaderboardIdentity(),{name:'Ada Example'});
 assert.equal(calls.filter(c=>c.url.endsWith('/share')).length,0);
 await assert.rejects(client.post({kind:'video',confirmed:'true'}),/Review/);
 await client.post({kind:'video',confirmed:true,requestId:'one'});
 const sent=calls.find(c=>c.url.endsWith('/share')).options;assert.equal(sent.credentials,'same-origin');assert.equal(sent.body.get('providerToken'),null);assert.equal(sent.headers.Authorization,undefined);
});
test('active browser files have no Supabase endpoints, keys, or browser-held OAuth tokens',async()=>{
 for(const name of ['backend-config.js','linkedin-config.js','leaderboard-remote.js','linkedin-client.js','analytics.js','insights.js']){
  const source=await readFile(new URL('../dist/'+name,import.meta.url),'utf8');assert.doesNotMatch(source,/supabase\.co|sb_publishable_|\/auth\/v1|\/rest\/v1|provider_token|providerToken|access_token/);
 }
});
