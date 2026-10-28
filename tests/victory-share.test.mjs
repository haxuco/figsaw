import test from 'node:test';
import assert from 'node:assert/strict';
import {createCountdownClock} from '../dist/countdown-clock.js';
import {captureVictoryResult,victoryResult} from '../dist/victory-result.js';
import {drawVictoryGraphic,createVictoryShare,createGameOverShare,SHARE_WIDTH,SHARE_HEIGHT} from '../dist/game-over-share.js';

function context(){const text=[],rects=[];const gradient={addColorStop(){}};return new Proxy({text,rects,createRadialGradient:()=>gradient,measureText:value=>({width:String(value).length*45}),fillText:value=>text.push(value),fillRect:(...args)=>rects.push(args)},{get:(o,k)=>k in o?o[k]:()=>{}});}
test('victory captures the clock, rescued passengers and attempts once at escape',()=>{
 let now=0;const clock=createCountdownClock(undefined,()=>now);clock.start();now=127.2;
 const rescue={safe:false,chairs:[{passenger:0},{passenger:1}]};
 assert.equal(captureVictoryResult({attempt:4,remainingSeconds:clock.remainingSeconds,rescue}).figpalsSaved,0,'seated captives still need to reach the exit');
 rescue.safe=true;const result=captureVictoryResult({attempt:4,remainingSeconds:clock.remainingSeconds,rescue});
 assert.deepEqual(result,{attempt:4,remainingSeconds:473,figpalsSaved:2});assert.equal(Object.isFrozen(result),true);
 now=500;rescue.safe=false;rescue.chairs.length=0;assert.deepEqual(result,{attempt:4,remainingSeconds:473,figpalsSaved:2},'viewing or retrying cannot rewrite the completed run');
 assert.equal(captureVictoryResult({attempt:1,remainingSeconds:50,rescue:{safe:true,chairs:[{passenger:1},{passenger:1},{passenger:null}]}}).figpalsSaved,1,'never count an empty chair or duplicate passenger');
});
test('victory values stay valid at zero time, with no rescues and with large attempt counts',()=>{
 assert.deepEqual(victoryResult({attempt:342,remainingSeconds:0,figpalsSaved:0}),{attempt:342,remainingSeconds:0,figpalsSaved:0});
 assert.deepEqual(victoryResult({attempt:NaN,remainingSeconds:-10,figpalsSaved:99}),{attempt:1,remainingSeconds:0,figpalsSaved:2});
 assert.deepEqual(victoryResult({remainingSeconds:Infinity,figpalsSaved:NaN}),{attempt:1,remainingSeconds:0,figpalsSaved:0});
});
test('the square victory export draws all three statistics and a distinct victory headline',()=>{
 const ctx=context();drawVictoryGraphic(ctx,{attempt:4,remainingSeconds:173,figpalsSaved:2});
 assert.equal(SHARE_WIDTH,SHARE_HEIGHT);assert.ok(ctx.rects.some(r=>r[2]===1080&&r[3]===1080));
 for(const value of ['You escaped.','TIME REMAINING','02:53','FIGPALS SAVED','2 / 2','ESCAPE ATTEMPTS','04'])assert.ok(ctx.text.includes(value),value);
 assert.equal(ctx.text.includes("Let's play a game"),false);
});

function root(){
 const ctx=context(),exports=[],nodes={};
 for(const selector of ['canvas','[data-save-graphic]','[data-share-graphic]','[data-share-status]','[data-attempt]'])nodes[selector]={hidden:false,disabled:false,textContent:'',listeners:{},attributes:{},addEventListener(type,fn){this.listeners[type]=fn;},setAttribute(key,value){this.attributes[key]=value;}};
 Object.assign(nodes.canvas,{getContext:()=>ctx,toBlob:callback=>exports.push(callback)});
 return {querySelector:selector=>nodes[selector],nodes,exports,ctx};
}
test('victory save/share keeps its own frozen stats and filename, ignores cancelled exports and preserves the loss graphic',async()=>{
 const previous={document:globalThis.document,Image:globalThis.Image,navigator:Object.getOwnPropertyDescriptor(globalThis,'navigator')};
 const shared=[];globalThis.document={fonts:{load:async()=>[]}};globalThis.Image=class{set src(value){queueMicrotask(()=>this.onload());}};
 Object.defineProperty(globalThis,'navigator',{configurable:true,value:{canShare:()=>true,share:async payload=>shared.push(payload)}});
 const flush=async()=>{for(let i=0;i<6;i++)await Promise.resolve();};
 try{
  const r=root(),share=createVictoryShare(r),stale=share.prepare({attempt:1,remainingSeconds:250,figpalsSaved:0});await flush();assert.equal(r.exports.length,1);
  share.reset();r.exports.shift()(new Blob(['old']));await stale;assert.equal(r.nodes['[data-save-graphic]'].disabled,true);
  const input={attempt:4,remainingSeconds:173,figpalsSaved:2},ready=share.prepare(input);input.remainingSeconds=0;input.figpalsSaved=0;await flush();r.exports.shift()(new Blob(['victory']));await ready;
  assert.equal(r.nodes['[data-save-graphic]'].disabled,false);assert.equal(r.nodes['[data-share-graphic]'].hidden,false);
  assert.match(r.nodes.canvas.attributes['aria-label'],/02:53 remaining.*2 of 2 Figpals saved.*4 escape attempts/);
  await r.nodes['[data-share-graphic]'].listeners.click();assert.equal(shared[0].files[0].name,'figsaw-escaped-attempt-4.png');assert.match(shared[0].text,/02:53 remaining, 2 of 2 Figpals saved, and 4 escape attempts/);
  const lossRoot=root(),loss=createGameOverShare(lossRoot),lost=loss.prepare(7);await flush();lossRoot.exports.shift()(new Blob(['loss']));await lost;await lossRoot.nodes['[data-share-graphic]'].listeners.click();
  assert.equal(shared[1].files[0].name,'figsaw-attempt-7.png');assert.match(shared[1].text,/Let's play a game/);assert.equal(lossRoot.ctx.text.includes('You escaped.'),false);
 }finally{globalThis.document=previous.document;globalThis.Image=previous.Image;if(previous.navigator)Object.defineProperty(globalThis,'navigator',previous.navigator);else delete globalThis.navigator;}
});
