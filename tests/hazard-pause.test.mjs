import test from 'node:test';
import assert from 'node:assert/strict';
import {createHazardClock} from '../dist/hazard-clock.js';
import {createFigpalRounds} from '../dist/figpal-rounds.js';
import {createAcidFlow} from '../dist/acid-flow.js';
import {createCableFireState} from '../dist/cable-fire-state.js';

const viewer={x:3.9,z:4.3},contact={x:0,y:0,z:0};
function fixture(){
 let expired=false,settled=false;
 const countdown={get status(){return expired?'finished':'running';},reset(){expired=false;},start(){}};
 const hoists={movingIndex:null,lower(index){this.movingIndex=index;settled=false;return true;},isSettled:()=>settled,reset(){this.movingIndex=null;settled=false;}};
 const rounds=createFigpalRounds(hoists,countdown),clock=createHazardClock(),acid=createAcidFlow(),fire=createCableFireState();
 let finished=false;
 return {rounds,clock,acid,fire,hoists,countdown,
  expire(){expired=true;},settle(){settled=true;hoists.movingIndex=null;},
  tick(time,{position=viewer,live=false,wetContact=null}={}){
   const event=rounds.update(time),frame=clock.update(time,rounds.active);
   if(!frame.paused){finished=acid.update(frame.time,frame.dt,position)||finished;finished=fire.update(frame.time,frame.dt,{viewer:position,live,contact:wetContact})||finished;}
   return {event,...frame,finished};
  }
 };
}

test('automatic descent and camera return freeze acid drainage, spread and injury without a resume jump',()=>{
 const f=fixture();f.acid.open(0,contact,f.clock.time);f.tick(0);f.tick(1);
 const before=JSON.stringify(f.acid.leaks);
 f.expire();assert.equal(f.tick(2).event.type,'lower');
 for(const time of [3,20,40]){
  const frame=f.tick(time,{position:contact});
  assert.equal(frame.paused,true);assert.equal(frame.time,1);assert.equal(frame.finished,false);
  assert.equal(JSON.stringify(f.acid.leaks),before);assert.equal(f.acid.dying,false);
 }
 f.settle();f.tick(41);assert.equal(f.tick(42.3).event.type,'return');
 assert.equal(f.tick(43).paused,true,'camera return is protected too');
 const resumed=f.tick(43.5);assert.equal(resumed.event.type,'restart');assert.equal(resumed.paused,false);assert.equal(resumed.time,1);
 assert.equal(JSON.stringify(f.acid.leaks),before,'no catch-up when control returns');
 f.tick(43.6,{position:contact});assert.equal(f.acid.dying,true,'acid resumes its normal contact rules');
 assert.equal(f.tick(44,{position:contact}).finished,false);
 assert.equal(f.tick(44.6,{position:contact}).finished,true);
});

test('a nearly expired fire keeps its remaining grace period throughout a long automatic lowering',()=>{
 const f=fixture();f.tick(0,{live:true,wetContact:contact});f.tick(1.4);f.tick(26.4);
 assert.equal(f.fire.phase,'burning');assert.equal(f.fire.dying,false);
 const patches=JSON.stringify(f.fire.patches),warning=f.fire.warningOpacity(f.clock.time);
 f.expire();f.tick(27);
 for(const time of [40,60,80]){
  assert.equal(f.tick(time).finished,false);assert.equal(f.fire.dying,false);
  assert.equal(JSON.stringify(f.fire.patches),patches);assert.equal(f.fire.warningOpacity(f.clock.time),warning);
 }
 f.settle();f.tick(81);f.tick(82.3);f.tick(83);const resumed=f.tick(83.5);
 assert.equal(resumed.event.type,'restart');assert.equal(f.clock.time,26.4);assert.equal(f.fire.blackout(f.clock.time),0);
 f.tick(88.4);assert.equal(f.fire.dying,false,'the remaining five seconds are still available');
 f.tick(88.6);assert.equal(f.fire.dying,true);assert.equal(f.tick(89.8).finished,true);
});

test('sprinkler duration pauses too, and hazards opened afterward use the resumed clock',()=>{
 const f=fixture();f.tick(0,{live:true,wetContact:contact});f.tick(1.4);
 f.fire.releaseSprinklers(2);f.tick(2.5);assert.equal(f.fire.water(f.clock.time),1);
 f.expire();f.tick(2.6);f.tick(60);f.settle();f.tick(61);f.tick(62.3);f.tick(63.5);
 assert.equal(f.fire.water(f.clock.time),1,'the cutscene cannot consume the spray duration');
 f.acid.open(0,contact,f.clock.time);f.tick(63.6);
 assert.ok(f.acid.remaining(0)>.99,'a newly opened tank does not inherit the scene-clock offset');
 f.tick(73.5);assert.equal(f.fire.water(f.clock.time),0);
});

test('manual hoist activity leaves hazards running and retry discards the previous cinematic pause',()=>{
 const f=fixture();f.acid.open(0,contact,0);f.hoists.movingIndex=1;
 f.tick(1);f.tick(10);assert.equal(f.rounds.active,false);assert.equal(f.clock.time,10);assert.ok(f.acid.remaining(0)<1);
 f.hoists.movingIndex=null;f.expire();f.tick(11);f.tick(100);assert.equal(f.clock.time,10);
 f.rounds.reset();f.countdown.reset();f.acid.reset();f.fire.reset();f.clock.reset(100);
 f.acid.open(0,contact,f.clock.time);const fresh=f.tick(100.1);
 assert.equal(fresh.paused,false);assert.equal(fresh.time,100.1);assert.ok(f.acid.remaining(0)>.99);
});
