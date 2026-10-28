import test from 'node:test';
import assert from 'node:assert/strict';
import {createGameOverTimeline,resolveGameOverCause} from '../dist/game-over-transition.js';
import {createFireAlarmState} from '../dist/fire-alarm-state.js';

test('the screen fades red, holds, then turns black before the title appears',()=>{
 const death=createGameOverTimeline();assert.equal(death.update(20).visible,false);death.start(20);
 let frame=death.update(20.3);assert.ok(frame.red>0&&frame.red<1);assert.equal(frame.blackout,0);assert.equal(frame.finished,false);
 frame=death.update(20.8);assert.equal(frame.red,1);assert.equal(frame.blackout,0,'hold full red before black');
 frame=death.update(21.5);assert.ok(frame.blackout>0&&frame.blackout<1);assert.equal(frame.finished,false);
 frame=death.update(22.15);assert.equal(frame.blackout,1);assert.equal(frame.finished,false,'title waits for solid black');
 frame=death.update(22.4);assert.equal(frame.finished,true);assert.equal(frame.visible,false);
});
test('trap completion cannot restart the fade and retry fully clears it',()=>{
 const death=createGameOverTimeline();assert.equal(death.start(1),true);death.update(2);assert.equal(death.start(2),false);
 assert.equal(death.update(3.5).finished,true);death.reset();assert.equal(death.finished,false);
 const clear=death.update(100);assert.equal(clear.visible,false);assert.equal(clear.blackout,0);assert.equal(clear.red,0);
 assert.equal(death.start(100),true);assert.equal(death.update(100).finished,false);
});
test('reduced motion preserves the red-to-black order with a shorter transition',()=>{
 const death=createGameOverTimeline();death.start(0,true);
 let frame=death.update(.3);assert.equal(frame.red,1);assert.equal(frame.blackout,0);
 frame=death.update(.6);assert.ok(frame.blackout>0&&frame.blackout<1);assert.equal(frame.finished,false);
 frame=death.update(.9);assert.equal(frame.blackout,1);assert.equal(frame.finished,false);
 assert.equal(death.update(1).finished,true);
});
test('only fatal hazards resolve to game over; the cat mug no longer does',()=>{
 assert.equal(resolveGameOverCause(),null);assert.equal(resolveGameOverCause({alarm:'fire'}),null);
 assert.equal(resolveGameOverCause({mug:true}),null);
 assert.equal(resolveGameOverCause({alarm:'laptop',deadline:true}),'laptop');
 assert.equal(resolveGameOverCause({alarm:'acid',acid:true}),'explosion');
 for(const cause of ['deadline','saw','fire','acid'])assert.equal(resolveGameOverCause({[cause]:true,mug:true}),cause);
});
test('objective failure uses the same red-to-black fade from the first fatal cue',()=>{
 const alarm=createFireAlarmState(),death=createGameOverTimeline();alarm.pull(0);
 const time=3.5;assert.ok(alarm.blackout(time)>0);assert.equal(alarm.update(time),false);
 const cause=resolveGameOverCause({alarm:alarm.blackout(time)>0?alarm.outcome:null});assert.equal(cause,'laptop');
 death.start(time);let frame=death.update(time+.8);assert.equal(frame.red,1);assert.equal(frame.blackout,0);
 frame=death.update(time+1.6);assert.ok(frame.blackout>0&&frame.blackout<1);
});
