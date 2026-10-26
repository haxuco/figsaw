import test from 'node:test';
import assert from 'node:assert/strict';
import {createGameOverTimeline} from '../dist/game-over-transition.js';

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
