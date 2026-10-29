import test from 'node:test';
import assert from 'node:assert/strict';
import {createGamePause} from '../dist/game-pause.js';
import {createCountdownClock} from '../dist/countdown-clock.js';
import {createChargingState} from '../dist/charging-state.js';
import {createPuzzleHints} from '../dist/puzzle-hints.js';

function fixture(){
 let wall=0;
 const pause=createGamePause(()=>wall),timer=createCountdownClock(600,()=>wall);
 return {pause,timer,advance(seconds){wall+=seconds;}};
}

test('Top 10 preserves partial seconds through repeated visits and resumes without catch-up',()=>{
 const f=fixture();f.timer.start();f.advance(12.4);f.pause.pause(f.timer);
 const saved=f.timer.capture();f.advance(900);f.pause.pause(f.timer);
 assert.equal(f.pause.now(),12.4);assert.equal(f.timer.remainingSeconds,588);
 f.pause.resume();assert.equal(f.timer.paused,false);assert.equal(f.timer.capture().seconds,saved.seconds);
 f.advance(.7);assert.equal(f.timer.remainingSeconds,587);
 f.pause.pause(f.timer);f.advance(800);f.pause.resume();f.pause.resume();
 assert.ok(Math.abs(f.pause.now()-13.1)<1e-9);
 f.advance(1);assert.equal(f.timer.remainingSeconds,586);
});

test('closing Top 10 preserves a diagnostic pause and does not start a waiting timer',()=>{
 const f=fixture();f.pause.pause(f.timer);f.advance(100);f.pause.resume();
 assert.equal(f.timer.status,'waiting');assert.equal(f.timer.paused,false);
 f.timer.start();f.advance(10);f.timer.pause();f.pause.pause(f.timer);f.advance(300);f.pause.resume();
 assert.equal(f.timer.status,'paused');assert.equal(f.timer.remainingSeconds,590);
 f.timer.resume();f.advance(5);assert.equal(f.timer.remainingSeconds,585);
});

test('an open laptop retains its battery deadline while Top 10 is open',()=>{
 const f=fixture(),battery=createChargingState();battery.update(f.pause.now(),{opened:true});
 f.advance(45);battery.update(f.pause.now());assert.equal(battery.remaining,15);
 f.pause.pause(f.timer);f.advance(1200);f.pause.resume();battery.update(f.pause.now());
 assert.equal(battery.remaining,15);assert.equal(battery.canUse,true);
 f.advance(14.9);battery.update(f.pause.now());assert.equal(battery.canUse,true);
 f.advance(.2);assert.equal(battery.update(f.pause.now()),'depleted');
});

test('Top 10 time does not trigger an idle hint immediately on return',()=>{
 const f=fixture();let line=null;
 const hints=createPuzzleHints({hoists:{speechAnchors:[{}],isHanging:()=>true,canSpeak:()=>true},bubbles:{clearHint(){line=null;},setHint(i,value){line=value;},isActive:()=>false},getProgress:()=>({locked:true,keyCollected:false,revision:0})});
 hints.update(f.pause.now());f.advance(20);hints.update(f.pause.now());
 f.pause.pause(f.timer);f.advance(100);f.pause.resume();hints.update(f.pause.now());assert.equal(line,null);
 f.advance(10);hints.update(f.pause.now());assert.equal(line,'The ketchup bottle is amazing UX');
});
