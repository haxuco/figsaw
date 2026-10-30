import test from 'node:test';
import assert from 'node:assert/strict';
import * as THREE from '../dist/vendor/three.module.js';
import {createCountdownClock} from '../dist/countdown-clock.js';
import {createFigpalRounds,DEADLINE_ACID_SECONDS} from '../dist/figpal-rounds.js';
import {createFigpalCamera} from '../dist/figpal-camera.js';

function fixture(puzzle){
 let now=0;const dead=new Set(),under=new Set(),lowered=new Set(),rescued=new Set(),calls=[];
 const clock=createCountdownClock(undefined,()=>now);
 const hoists={count:3,movingIndex:null,canSpeak:i=>!dead.has(i),isSubmerged:i=>under.has(i),isLowered:i=>lowered.has(i),isRescued:i=>rescued.has(i),
  lower(i){calls.push(i);lowered.add(i);this.movingIndex=i;return true;},
  reset(){dead.clear();under.clear();lowered.clear();rescued.clear();this.movingIndex=null;}};
 const rounds=createFigpalRounds(hoists,clock,puzzle);
 return {clock,rounds,hoists,calls,dead,under,lowered,rescued,setNow(value){now=value;},submerge(i){dead.add(i);under.add(i);hoists.movingIndex=null;}};
}

test('seated survivors skip their scheduled descents, but the second full clock still ends the game',()=>{
 const f=fixture({dropOrder:[2,0,1]});f.rescued.add(2);f.rescued.add(0);f.clock.start();
 f.setNow(599);assert.equal(f.rounds.update(599),null);
 f.setNow(600);assert.deepEqual(f.rounds.update(600),{type:'restart',remaining:1});
 assert.equal(f.rounds.scheduledDrops,1);assert.equal(f.clock.remainingSeconds,600);assert.equal(f.rounds.active,false);assert.equal(f.rounds.index,null);assert.deepEqual(f.calls,[],'do not lower a seated Figpal or substitute the PM');
 f.setNow(1199);assert.equal(f.rounds.update(1199),null);assert.equal(f.clock.remainingSeconds,1);
 f.setNow(1200);assert.deepEqual(f.rounds.update(1200),{type:'ending'});assert.equal(f.rounds.scheduledDrops,2);assert.deepEqual(f.calls,[]);
 assert.equal(f.rounds.blackout(1203.9),0);assert.equal(f.rounds.update(1203.9),null);assert.ok(f.rounds.blackout(1204.6)>.5);assert.deepEqual(f.rounds.update(1205.2),{type:'gameover'});assert.equal(f.rounds.update(1300),null);
});

test('the second deadline releases acid instead of waiting for an unrescued Figpal to descend',()=>{
 const f=fixture({dropOrder:[1,2,0]});f.rescued.add(1);f.clock.start();
 f.setNow(600);assert.equal(f.rounds.update(600).type,'restart');
 f.hoists.movingIndex=2;f.setNow(1200);assert.deepEqual(f.rounds.update(1200),{type:'ending'});assert.deepEqual(f.calls,[]);
 assert.equal(f.rounds.ending,true);assert.equal(f.rounds.scheduledDrops,2);assert.equal(f.rounds.index,null);
});

test('a seated second survivor is not lowered after a normal first deadline',()=>{
 const f=fixture();f.rescued.add(1);f.clock.start();f.setNow(600);f.rounds.update(600);f.submerge(0);f.rounds.update(602);f.rounds.update(604);f.setNow(606);f.rounds.update(606);
 f.setNow(1206);assert.deepEqual(f.rounds.update(1206),{type:'ending'});assert.deepEqual(f.calls,[0]);assert.equal(f.rounds.scheduledDrops,2);
});

test('diagnostic invulnerability and checkpoint restore preserve expired clocks without re-lowering rescued Figpals',()=>{
 const f=fixture();f.rescued.add(0);f.rescued.add(1);f.clock.start();f.setNow(600);f.rounds.update(600);
 const saved=f.rounds.capture(600),clock=f.clock.capture();f.rounds.reset();f.setNow(5000);f.rounds.restore(saved,5000);f.clock.restore(clock);f.rescued.add(0);f.rescued.add(1);
 f.setNow(5600);assert.deepEqual(f.rounds.update(5600,false,true),{type:'restart',remaining:0});assert.equal(f.rounds.scheduledDrops,2);assert.equal(f.rounds.active,false);
 f.setNow(6200);assert.equal(f.rounds.update(6200,false,true),null);assert.deepEqual(f.calls,[]);assert.equal(f.rounds.blackout(6200),0);
 assert.deepEqual(f.rounds.update(6201,false,false),{type:'ending'});
});

test('the first ten-minute clock lowers one Figpal and the second releases acid before game over',()=>{
 const f=fixture({dropOrder:[2,0,1]});f.clock.start();
 f.setNow(599);assert.equal(f.rounds.update(599),null);
 f.setNow(600);assert.deepEqual(f.rounds.update(600),{type:'lower',index:2});
 assert.equal(f.rounds.update(605),null);f.submerge(2);f.rounds.update(610);
 assert.deepEqual(f.rounds.update(612),{type:'return',index:2});
 f.setNow(620);assert.deepEqual(f.rounds.update(620),{type:'restart',remaining:1});assert.equal(f.clock.remainingSeconds,600);
 f.setNow(1219);assert.equal(f.rounds.update(1219),null);
 f.setNow(1220);assert.deepEqual(f.rounds.update(1220),{type:'ending'});
 assert.deepEqual(f.calls,[2],'there is no second cinematic delay before the room-wide release');
 assert.equal(f.clock.remainingSeconds,0);assert.equal(f.rounds.active,true);
 for(const elapsed of [0,1,DEADLINE_ACID_SECONDS-.01]){
  assert.equal(f.rounds.update(1220+elapsed),null);assert.equal(f.rounds.blackout(1220+elapsed),0);
  assert.ok(Math.abs(f.rounds.endingElapsed(1220+elapsed)-elapsed)<1e-8);
 }
 assert.ok(f.rounds.blackout(1220+DEADLINE_ACID_SECONDS+.55)>.49);
 assert.deepEqual(f.rounds.update(1220+DEADLINE_ACID_SECONDS+1.2),{type:'gameover'});
 assert.equal(f.rounds.update(1300),null);
 f.rounds.reset();f.clock.reset();assert.equal(f.rounds.ending,false);assert.equal(f.rounds.endingElapsed(1400),0);assert.equal(f.rounds.blackout(1400),0);
});

test('a hidden-tab deadline still selects just one survivor and never catches up with multiple drops',()=>{
 const f=fixture();f.clock.start();f.setNow(1800);
 assert.deepEqual(f.rounds.update(1),{type:'lower',index:0});
 for(let i=2;i<20;i++)assert.equal(f.rounds.update(i),null);
 assert.deepEqual(f.calls,[0]);
 f.submerge(0);f.rounds.update(20);f.rounds.update(22);f.setNow(1900);f.rounds.update(24);
 assert.equal(f.clock.remainingSeconds,600);
});

test('manual operations never count as a deadline or override the randomized schedule',()=>{
 const f=fixture();f.dead.add(2);f.under.add(2);f.lowered.add(2);f.clock.start();f.setNow(600);
 f.hoists.movingIndex=2;assert.equal(f.rounds.update(600),null);
 f.hoists.movingIndex=null;assert.deepEqual(f.rounds.update(601),{type:'lower',index:0});
 assert.equal(f.rounds.scheduledDrops,0);f.submerge(0);f.rounds.update(610);f.rounds.update(612);assert.equal(f.rounds.scheduledDrops,1);
});

test('other camera actions defer the deadline; reset clears every victim and pending ending',()=>{
 const f=fixture();f.clock.start();f.setNow(600);
 assert.equal(f.rounds.update(600,true),null);assert.deepEqual(f.calls,[]);
 f.rounds.update(601);f.submerge(0);f.rounds.reset();f.clock.reset();
 assert.equal(f.rounds.active,false);assert.equal(f.rounds.index,null);assert.equal(f.rounds.blackout(600),0);
 assert.equal(f.dead.size,0);assert.equal(f.rounds.update(600),null);
 f.clock.start();f.setNow(1200);assert.deepEqual(f.rounds.update(1200),{type:'lower',index:0});
});

test('manual transformations alone cannot trigger the scheduled game over',()=>{
 const f=fixture();for(let i=0;i<3;i++)f.submerge(i);
 assert.equal(f.rounds.update(1),null);assert.equal(f.rounds.scheduledDrops,0);
});

test('PM remains last and a safely lowered living captive still completes its scheduled round',()=>{
 let finished=true,moving=null;const lowered=[];
 const hoists={count:3,get movingIndex(){return moving;},lower(i){lowered.push(i);moving=i;return true;},isSettled:()=>moving===null,reset(){moving=null;}};
 const clock={get status(){return finished?'finished':'running';},reset(){finished=false;},start(){}};
 const rounds=createFigpalRounds(hoists,clock,{dropOrder:[2,0,1]});
 assert.deepEqual(rounds.update(300),{type:'lower',index:2});moving=null;rounds.update(305);assert.equal(rounds.update(307).type,'return');rounds.update(309);finished=true;
 assert.deepEqual(rounds.update(609),{type:'ending'});assert.deepEqual(lowered,[2]);
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


test('deadline framing can show the whole tank bay without moving the seated player',()=>{
 const position=new THREE.Vector3(1.2,1.6,2.8),home=position.clone(),state={yaw:0,pitch:-1,zoom:.7};
 const camera=createFigpalCamera({position,state,baseFov:62,focusFov:64,getView(_,eye,target){eye.copy(home);target.set(-3,1.35,.55);}});
 camera.start(0,10);camera.update(12);
 assert.deepEqual(position.toArray(),home.toArray());assert.equal(state.zoom,64/62);assert.ok(state.pitch>-.1);assert.ok(state.yaw>0);
 camera.cancel();assert.equal(camera.active,false);
});
