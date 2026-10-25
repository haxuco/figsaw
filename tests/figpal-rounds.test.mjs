import test from 'node:test';
import assert from 'node:assert/strict';
import * as THREE from '../dist/vendor/three.module.js';
import {createCountdownClock} from '../dist/countdown-clock.js';
import {createFigpalRounds} from '../dist/figpal-rounds.js';
import {createFigpalCamera} from '../dist/figpal-camera.js';

function fixture(){
 let now=0;const dead=new Set(),under=new Set(),lowered=new Set(),calls=[];
 const clock=createCountdownClock(300,()=>now);
 const hoists={count:3,movingIndex:null,canSpeak:i=>!dead.has(i),isSubmerged:i=>under.has(i),isLowered:i=>lowered.has(i),
  lower(i){calls.push(i);lowered.add(i);this.movingIndex=i;return true;},
  reset(){dead.clear();under.clear();lowered.clear();this.movingIndex=null;}};
 const rounds=createFigpalRounds(hoists,clock);
 return {clock,rounds,hoists,calls,dead,under,lowered,setNow(value){now=value;},submerge(i){dead.add(i);under.add(i);hoists.movingIndex=null;}};
}

test('three complete five-minute rounds lower one unique captive each and only then end the game',()=>{
 const f=fixture();f.clock.start();
 for(let i=0;i<3;i++){
  const start=i*320;f.setNow(start+299);
  assert.equal(f.rounds.update(start+299),null);assert.equal(f.clock.remainingSeconds,1);
  f.setNow(start+300);
  assert.deepEqual(f.rounds.update(start+300),{type:'lower',index:i});
  assert.equal(f.rounds.active,true);assert.deepEqual(f.calls,Array.from({length:i+1},(_,j)=>j));
  assert.equal(f.rounds.update(start+305),null,'zero must not trigger another hoist');
  f.dead.add(i);assert.equal(f.rounds.update(start+306),null,'wait for the full descent, not just transformation');
  f.submerge(i);assert.equal(f.rounds.update(start+310),null);
  const event=f.rounds.update(start+312);
  if(i<2){
   assert.deepEqual(event,{type:'return',index:i});assert.equal(f.clock.remainingSeconds,0);
   assert.equal(f.rounds.update(start+312.5),null,'timer waits for camera return');
   f.setNow(start+320);assert.deepEqual(f.rounds.update(start+320),{type:'restart',remaining:2-i});
   assert.equal(f.clock.remainingSeconds,300);assert.equal(f.rounds.active,false);
  }else{
   assert.deepEqual(event,{type:'ending'});assert.equal(f.clock.remainingSeconds,0);
   assert.ok(f.rounds.blackout(start+312.55)>.49);
   assert.deepEqual(f.rounds.update(start+314),{type:'gameover'});
   assert.equal(f.rounds.update(start+320),null);assert.equal(f.rounds.blackout(start+320),1);
  }
 }
});

test('a hidden-tab deadline still selects just one survivor and never catches up with multiple drops',()=>{
 const f=fixture();f.clock.start();f.setNow(1800);
 assert.deepEqual(f.rounds.update(1),{type:'lower',index:0});
 for(let i=2;i<20;i++)assert.equal(f.rounds.update(i),null);
 assert.deepEqual(f.calls,[0]);
 f.submerge(0);f.rounds.update(20);f.rounds.update(22);f.setNow(1900);f.rounds.update(24);
 assert.equal(f.clock.remainingSeconds,300);
});

test('manual sacrifices are skipped, an existing descent is adopted, and a raising hoist cannot overlap',()=>{
 const f=fixture();f.dead.add(0);f.under.add(0);f.lowered.add(0);f.clock.start();f.setNow(300);
 f.hoists.movingIndex=1;
 assert.equal(f.rounds.update(300),null,'wait while the player raises another hoist');
 f.lowered.add(1);
 assert.deepEqual(f.rounds.update(301),{type:'lower',index:1});assert.deepEqual(f.calls,[1]);
 f.submerge(1);f.rounds.update(310);f.rounds.update(312);f.rounds.update(314);
 f.setNow(600);assert.deepEqual(f.rounds.update(600),{type:'lower',index:2});
});

test('other camera actions defer the deadline; reset clears every victim and pending ending',()=>{
 const f=fixture();f.clock.start();f.setNow(300);
 assert.equal(f.rounds.update(300,true),null);assert.deepEqual(f.calls,[]);
 f.rounds.update(301);f.submerge(0);f.rounds.reset();f.clock.reset();
 assert.equal(f.rounds.active,false);assert.equal(f.rounds.index,null);assert.equal(f.rounds.blackout(600),0);
 assert.equal(f.dead.size,0);assert.equal(f.rounds.update(600),null);
 f.clock.start();f.setNow(600);assert.deepEqual(f.rounds.update(600),{type:'lower',index:0});
});

test('manually losing the final Figpal ends the game even before the countdown expires',()=>{
 const f=fixture();for(let i=0;i<3;i++)f.submerge(i);
 f.hoists.movingIndex=2;assert.equal(f.rounds.update(.5),null,'manual final descent must settle before game over');f.hoists.movingIndex=null;
 assert.deepEqual(f.rounds.update(1),{type:'ending'});
 assert.deepEqual(f.rounds.update(3),{type:'gameover'});
});

test('tank camera follows the descent, holds focus, and restores the exact previous player view',()=>{
 const position=new THREE.Vector3(1.85,.82,3.11),state={yaw:3.1,pitch:-.1,zoom:.78};
 const saved={position:position.clone(),...state};let height=2.02,selected=null;
 const camera=createFigpalCamera({position,state,baseFov:62,getView(index,eye,target){selected=index;eye.set(-1,1.65,1);target.set(-3,height,-1);}});
 camera.start(1,10);camera.update(10.5);assert.ok(position.distanceTo(saved.position)>0);
 camera.update(12);assert.equal(selected,1);assert.deepEqual(position.toArray(),[-1,1.65,1]);
 const initialPitch=state.pitch;height=.65;camera.update(16);assert.ok(state.pitch<initialPitch,'follow down to the water');assert.equal(camera.active,true);
 camera.restore(20);camera.update(21.1);assert.equal(camera.active,false);
 assert.ok(position.distanceTo(saved.position)<1e-9);assert.ok(Math.abs(state.yaw-saved.yaw)<1e-9);assert.equal(state.pitch,saved.pitch);assert.equal(state.zoom,saved.zoom);
 camera.start(2,22);camera.update(22,true);assert.equal(selected,2);assert.deepEqual(position.toArray(),[-1,1.65,1]);
 camera.cancel();position.set(0,1,2);camera.update(24);assert.deepEqual(position.toArray(),[0,1,2]);
});
