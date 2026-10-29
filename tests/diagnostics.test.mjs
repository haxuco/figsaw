import test from 'node:test';
import assert from 'node:assert/strict';
import {createDiagnostics,createDiagnosticTrigger} from '../dist/diagnostics.js';
import {createCountdownClock} from '../dist/countdown-clock.js';
import {createAcidFlow} from '../dist/acid-flow.js';
import {createCableFireState} from '../dist/cable-fire-state.js';
import {createFireAlarmState} from '../dist/fire-alarm-state.js';
import {createChargingState} from '../dist/charging-state.js';
import {createFigpalRounds} from '../dist/figpal-rounds.js';
import {createInventory} from '../dist/inventory.js';
import {createRestraintState} from '../dist/restraint-state.js';

test('the secret requires a deliberate set sequence and ignores editing, shortcuts and held keys',()=>{
 let now=0,activations=0;const trigger=createDiagnosticTrigger(()=>activations++,{now:()=>now});
 const key=(value,extra={})=>trigger({key:value,...extra});
 key('s');key('e');assert.equal(key('t'),true);assert.equal(activations,1);
 key('s');now=2000;key('e');key('t');assert.equal(activations,1);
 key('s',{ctrlKey:true});key('e');key('t');
 key('s');key('e',{repeat:true});key('t');
 key('s',{target:{closest:()=>true}});key('e');key('t');assert.equal(activations,1);
 key('S');key('E');key('T');assert.equal(activations,2);
});

test('pausing preserves subsecond time, including hidden tabs and a paused intro/round reset',()=>{
 let now=0;const clock=createCountdownClock(undefined,()=>now);
 clock.pause();clock.start();now=1800;assert.equal(clock.remainingSeconds,600);assert.equal(clock.status,'paused');
 clock.resume();now=1800.7;const checkpoint=clock.capture();clock.pause();now=3600;
 assert.equal(clock.remainingSeconds,600);clock.resume();now=3600.71;assert.equal(clock.remainingSeconds,599);
 clock.restore(checkpoint);assert.equal(clock.remainingSeconds,600);assert.equal(clock.paused,false);
 clock.pause();clock.reset();clock.start();now+=2000;assert.equal(clock.remainingSeconds,600);
 clock.resume();now+=600;assert.equal(clock.status,'finished');
});

test('diagnostic actions undo in order, bound history, preserve inventory and leave normal play unpaused',()=>{
 const clock=createCountdownClock(),inventory=createInventory();inventory.add('axe');inventory.equip('axe');let changes=[],busy=false;
 const actions=[{id:'give',label:'Give mobile kit',run(){const before=inventory.capture();inventory.add('mobileKit');return ()=>inventory.restore(before);}}];
 const mode=createDiagnostics({clock,actions,onInvulnerability:value=>changes.push(value),canRun:()=>!busy,historyLimit:2});
 assert.equal(mode.run('give'),false);assert.equal(mode.invulnerable,false);mode.activate();assert.equal(mode.invulnerable,true);
 mode.toggleTimer();assert.equal(clock.paused,true);mode.run('give');assert.equal(inventory.has('mobileKit'),true);
 busy=true;assert.equal(mode.undo(),false);assert.equal(inventory.has('mobileKit'),true);busy=false;assert.equal(mode.undo(),true);
 assert.deepEqual(inventory.capture(),{items:['axe'],equipped:'axe'});assert.equal(mode.undoLabel,null);
 mode.setInvulnerable(false);assert.equal(mode.invulnerable,false);mode.exit();assert.equal(clock.paused,false);assert.equal(mode.enabled,false);assert.deepEqual(changes,[true,false,false]);
});

test('failed/no-op diagnostic actions cannot discard a successful undo entry',()=>{
 let value=0;const actions=[{id:'ok',label:'Change',run(){value++;return ()=>value--;}},{id:'no',label:'No change',run(){return false;}}];
 const mode=createDiagnostics({clock:createCountdownClock(),actions});mode.activate();mode.run('ok');assert.equal(mode.run('no'),false);assert.equal(mode.undoLabel,'Change');mode.undo();assert.equal(value,0);
});

test('old diagnostic checkpoints are released when the history limit or a new attempt is reached',()=>{
 let value=0;const action={id:'add',label:'Add',run(){const previous=value;value++;return ()=>{value=previous;};}};
 const mode=createDiagnostics({clock:createCountdownClock(),actions:[action],historyLimit:2});mode.activate();
 for(let i=0;i<3;i++)mode.run('add');assert.equal(value,3);mode.undo();mode.undo();assert.equal(value,1);assert.equal(mode.undo(),false);
 mode.run('add');mode.clearHistory();assert.equal(mode.undo(),false);assert.equal(value,2);
});

test('acid invulnerability clears a pending death and permits sustained contact without neutralizing the liquid',()=>{
 const acid=createAcidFlow();acid.open(0,{x:0,z:0},0);acid.update(1,.1,{x:0,z:0});assert.equal(acid.dying,true);
 acid.setInvulnerable(true);for(let t=2;t<40;t++)assert.equal(acid.update(t,.1,{x:0,z:0}),false);
 assert.equal(acid.dying,false);assert.equal(acid.neutralized,false);assert.equal(acid.remaining(0),0);
 acid.setInvulnerable(false);acid.update(41,.1,{x:0,z:0});assert.equal(acid.dying,true);
});

test('fire and fatal sprinkler outcomes remain testable without death/control locks',()=>{
 const fire=createCableFireState();fire.setInvulnerable(true);assert.equal(fire.ignite(0,{x:0,y:0,z:0}),true);
 for(let t=0;t<90;t++)assert.equal(fire.update(t,.05,{viewer:{x:0,z:0}}),false);
 assert.equal(fire.phase,'burning');assert.equal(fire.dying,false);assert.equal(fire.blackout(90),0);
 const alarm=createFireAlarmState();alarm.setInvulnerable(true);alarm.pull(90,{acidSpilled:true});assert.equal(alarm.outcome,'acid');assert.equal(alarm.dying,false);assert.equal(alarm.update(100),false);assert.equal(alarm.blackout(100),0);
 alarm.setInvulnerable(false);assert.equal(alarm.dying,true);assert.equal(alarm.update(101),true);
});

test('environment checkpoints restore effect ages and detach copied arrays from undo history',()=>{
 const acid=createAcidFlow();acid.setInvulnerable(true);acid.open(0,{x:0,z:0},0);acid.update(5,.1,{x:0,z:0});
 const saved=acid.capture(5),remaining=acid.remaining(0);acid.neutralize();acid.update(30,.1,{x:0,z:0});acid.restore(saved,100);
 assert.equal(acid.neutralized,false);assert.equal(acid.remaining(0),remaining);assert.equal(acid.leaks[0].openedAt,95);
 acid.update(101,.1,{x:0,z:0});assert.ok(acid.remaining(0)<remaining);assert.equal(saved.leaks[0].remaining,remaining);
 const fire=createCableFireState();fire.ignite(5,{x:0,y:0,z:0});fire.update(9,.1,{viewer:{x:1,z:1}});const checkpoint=fire.capture(9);fire.reset();fire.restore(checkpoint,100);assert.equal(fire.phase,'burning');assert.equal(fire.capture(100).ignitedAt,96);
 const alarm=createFireAlarmState();alarm.pull(10,{fireActive:true});const a=alarm.capture(12);alarm.reset();alarm.restore(a,50);assert.equal(alarm.elapsed(50),2);
});

test('charger and shackle checkpoints preserve game state without requiring a key to test unlocking',()=>{
 const charger=createChargingState();charger.update(10,{opened:true});charger.use('drawer');charger.use('charger');charger.update(30,{opened:true});const saved=charger.capture();
 charger.use('strip');charger.use('laptop');assert.equal(charger.battery,0);charger.restore(saved,100);assert.equal(charger.phase,'carrying');assert.equal(charger.remaining,40);assert.equal(charger.battery,saved.battery);
 const cuff=createRestraintState({canDetach:()=>false});assert.equal(cuff.detach(0),false);cuff.setLocked(false,1);assert.equal(cuff.locked,false);cuff.setLocked(true,2);assert.equal(cuff.locked,true);
});

test('invulnerable deadline cinematics return control after both drops, with no third auto-drop or blackout',()=>{
 let finished=true;const calls=[],clock={get status(){return finished?'finished':'running';},reset(){finished=false;},start(){}};
 const hoists={movingIndex:null,lower(i){calls.push(i);return true;},isSettled:()=>true,reset(){}};
 const rounds=createFigpalRounds(hoists,clock,{dropOrder:[2,0,1]});
 for(let i=0;i<2;i++){const t=i*10;finished=true;assert.equal(rounds.update(t,false,true).type,'lower');rounds.update(t+1,false,true);assert.equal(rounds.update(t+3,false,true).type,'return');assert.equal(rounds.update(t+5,false,true).type,'restart');assert.equal(rounds.active,false);assert.equal(rounds.blackout(t+5),0);}
 finished=true;assert.equal(rounds.update(30,false,true),null);assert.deepEqual(calls,[2,0]);
 assert.equal(rounds.update(31,false,false).type,'ending','turning invulnerability off restores deadline failure');
});
