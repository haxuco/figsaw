import test from 'node:test';
import assert from 'node:assert/strict';
import {createGameOverTimeline,gameOverStyle,resolveGameOverCause} from '../dist/game-over-transition.js';
import {createFireAlarmState} from '../dist/fire-alarm-state.js';

test('blood runs down, fills the view red, holds, then fades black before the title appears',()=>{
 const death=createGameOverTimeline();assert.equal(death.update(20).visible,false);death.start(20);
 let frame=death.update(21);assert.ok(frame.flow>0&&frame.flow<1);assert.equal(frame.blackout,0);assert.equal(frame.finished,false);
 frame=death.update(22.7);assert.equal(frame.flow,1);assert.equal(frame.red,1);assert.equal(frame.blackout,0);
 frame=death.update(23.1);assert.equal(frame.red,1);assert.equal(frame.blackout,0,'hold full red before black');
 frame=death.update(23.7);assert.ok(frame.blackout>0&&frame.blackout<1);assert.equal(frame.finished,false);
 frame=death.update(24.3);assert.equal(frame.blackout,1);assert.equal(frame.finished,false,'title waits for solid black');
 frame=death.update(24.5);assert.equal(frame.finished,true);assert.equal(frame.visible,false);
});
test('trap completion cannot restart the fade and retry fully clears it',()=>{
 const death=createGameOverTimeline();assert.equal(death.start(1),true);death.update(2);assert.equal(death.start(2),false);
 assert.equal(death.update(5.5).finished,true);death.reset();assert.equal(death.finished,false);
 const clear=death.update(100);assert.equal(clear.visible,false);assert.equal(clear.blackout,0);assert.equal(clear.red,0);
 assert.equal(death.start(100),true);assert.equal(death.update(100).finished,false);
});
test('reduced motion keeps the red-to-black order without moving drips',()=>{
 const death=createGameOverTimeline();death.start(0,true);
 let frame=death.update(.5);assert.equal(frame.red,1);assert.equal(frame.flow,0);assert.equal(frame.blackout,0);
 frame=death.update(1);assert.ok(frame.blackout>0&&frame.blackout<1);assert.equal(frame.finished,false);
 frame=death.update(1.5);assert.equal(frame.blackout,1);assert.equal(frame.finished,true);
});
test('objective failure fades directly to black, never exposing blood, in either motion mode',()=>{
 for(const reduced of [false,true]){
  const death=createGameOverTimeline();death.start(10,reduced,'objective');
  for(let elapsed=0;elapsed<2;elapsed+=.05){const frame=death.update(10+elapsed);assert.equal(frame.visible,false);assert.equal(frame.flow,0);assert.equal(frame.red,0);}
  const midway=death.update(10+(reduced?.25:.575));assert.ok(midway.blackout>.49&&midway.blackout<.51);assert.equal(midway.finished,false);
  const black=death.update(10+(reduced?.5:1.15));assert.equal(black.blackout,1);assert.equal(black.finished,false,'title waits for solid black');
  assert.equal(death.update(12).finished,true);
 }
});
test('injuries and failed objectives select distinct presentations',()=>{
 for(const cause of ['acid','saw','mug','fire','explosion'])assert.equal(gameOverStyle(cause),'injury');
 for(const cause of ['laptop','deadline','objective'])assert.equal(gameOverStyle(cause),'objective');
 assert.equal(resolveGameOverCause(),null);assert.equal(resolveGameOverCause({alarm:'fire'}),null,'putting out a fire is not a failure');
 assert.equal(resolveGameOverCause({alarm:'laptop',deadline:true}),'laptop');
 assert.equal(resolveGameOverCause({alarm:'acid',acid:true}),'explosion');
 for(const cause of ['deadline','saw','fire','acid','mug'])assert.equal(resolveGameOverCause({[cause]:true}),cause);
});
test('sprinkler laptop failure chooses black at the first fade cue, before trap completion',()=>{
 const alarm=createFireAlarmState(),death=createGameOverTimeline();alarm.pull(0);
 const time=3.5;assert.ok(alarm.blackout(time)>0);assert.equal(alarm.update(time),false);
 const cause=resolveGameOverCause({alarm:alarm.blackout(time)>0?alarm.outcome:null});assert.equal(cause,'laptop');
 death.start(time,false,gameOverStyle(cause));const frame=death.update(time+.6);assert.equal(frame.red,0);assert.equal(frame.visible,false);assert.ok(frame.blackout>0);
});
test('a later failure cannot swap the transition; retry clears the old presentation',()=>{
 const death=createGameOverTimeline();death.start(0,false,'objective');assert.equal(death.start(.2,false,'injury'),false);assert.equal(death.update(.6).red,0);
 death.reset();assert.equal(death.update(10).style,null);death.start(10,false,'injury');assert.equal(death.update(12.7).red,1);
 death.reset();death.start(20,false,'objective');const frame=death.update(20.5);assert.equal(frame.red,0);assert.equal(frame.flow,0);assert.equal(frame.visible,false);
});
