import test from 'node:test';
import assert from 'node:assert/strict';
import {createLeaderboardSignIn} from '../dist/leaderboard-sign-in.js';

function setup(client){
 const button={},status={},root={innerHTML:'',querySelector:selector=>selector==='button'?button:status};
 const view=createLeaderboardSignIn(root,{client});return {button,status,view,root};
}
test('Top 10 exposes sign-in even before setup, with an explicit unavailable state',async()=>{
 let calls=0;const {button,status,root}=setup({configured:false,connected:false,connect:async()=>{calls++;}});
 assert.match(root.innerHTML,/Sign in with LinkedIn/);assert.equal(button.disabled,true);assert.match(status.textContent,/not available yet/);
 await button.onclick();assert.equal(calls,0);
});
test('Top 10 sign-in connects once and keeps the name private without saving or posting',async()=>{
 let connects=0,finish;const client={configured:true,connected:false,name:'',connect:()=>{connects++;return new Promise(resolve=>{finish=()=>{client.connected=true;client.name='Alex Example';resolve();};});},post(){assert.fail('Sign-in must never post.');}};
 const {button,status}=setup(client);assert.equal(button.disabled,false);
 const pending=button.onclick();assert.equal(button.disabled,true);await button.onclick();assert.equal(connects,1);
 finish();await pending;assert.equal(button.textContent,'LinkedIn connected');assert.equal(button.disabled,true);assert.match(status.textContent,/Alex Example/);assert.match(status.textContent,/private until you approve/);
});
test('cancelled sign-in can be retried and an expired session can reconnect',async()=>{
 const client={configured:true,connected:false,connect:async()=>{throw Error('LinkedIn sign-in was cancelled.');}};
 const {button,status,view}=setup(client);await button.onclick();assert.equal(button.disabled,false);assert.match(status.textContent,/cancelled/);
 client.connected=true;client.name='Alex';view.sync();assert.equal(button.disabled,true);
 client.connected=false;view.sync();assert.equal(button.disabled,false);assert.equal(button.textContent,'Sign in with LinkedIn');
});
