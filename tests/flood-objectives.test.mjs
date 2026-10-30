import test from 'node:test';
import assert from 'node:assert/strict';
import {createAcidFlow} from '../dist/acid-flow.js';
import {createRescueState} from '../dist/rescue-state.js';
import {createInventory} from '../dist/inventory.js';
import {createMobilePuzzleState,MOBILE_PIECES} from '../dist/mobile-puzzle-state.js';
import {createHazardClock} from '../dist/hazard-clock.js';
import {hasFailedFloodObjectives} from '../dist/flood-objectives.js';
import {gameOverReason,resolveGameOverCause} from '../dist/game-over-transition.js';

const origin={x:0,y:0,z:0};
function fixture({pmIndex=2,skip=null,reverse=false}={}){
 const acid=createAcidFlow(),rescue=createRescueState({pmIndex}),inventory=createInventory(),mobile=createMobilePuzzleState();
 for(const [index,part] of [[0,'caster'],[1,'seat'],[1,'base']]){
  inventory.add(part);if(skip!==part)rescue.use(index,part,inventory);
 }
 const survivors=[0,1,2].filter(index=>index!==pmIndex);if(reverse)survivors.reverse();
 survivors.forEach((tank,index)=>{if(skip!=='placement')rescue.place(index,tank);});
 inventory.add('chain');inventory.equip('chain');
 for(let index=0;index<3;index++)if(skip!==`link${index}`)rescue.link(index,inventory);
 for(const piece of Object.keys(MOBILE_PIECES))if(skip!==piece)mobile.collectPiece(piece,inventory);
 inventory.equip('mobile');if(skip!=='hanging')mobile.hang(inventory);
 mobile.collect('mobileKit',{drawerReady:true});mobile.inspect();
 if(skip!=='repair'){mobile.repair(0);mobile.update(4);}
 const input={acid,rescue,mobile,laptopComplete:skip!=='laptop',pmIndex};
 return {...input,inventory,check:paused=>hasFailedFloodObjectives({...input,paused}),
  spill(kind='breach',time=0){acid[kind](0,origin,time);rescue.noteFlood();},
  tick(time){return acid.update(time,.05,origin,{protectedFromAcid:true});}
 };
}

test('an unfinished objective causes failure even when a chair prevents acid injury',()=>{
 for(const skip of ['laptop',...Object.keys(MOBILE_PIECES),'hanging','repair','caster','seat','base','placement','link0','link1','link2']){
  const f=fixture({skip});assert.equal(f.check(),false,`${skip}: no failure on a dry floor`);
  f.spill();f.tick(.5);
  assert.equal(f.acid.dying,false,`${skip}: player remains physically safe`);
  assert.equal(f.check(),true,`${skip}: incomplete preparation is fatal`);
 }
});

test('both valves and axe breaches fail only after acid reaches the floor',()=>{
 for(const kind of ['open','breach']){
  const f=fixture({skip:'repair'});f.spill(kind);
  f.tick(.01);assert.equal(f.check(),false,'opening a tank is not yet a floor pool');
  f.tick(.6);assert.ok(f.acid.leaks[0].points.length>0);assert.equal(f.check(),true);
 }
});

test('all randomized PM assignments and chair orders allow a fully prepared escape',()=>{
 for(let pmIndex=0;pmIndex<3;pmIndex++)for(const reverse of [false,true]){
  const f=fixture({pmIndex,reverse});f.spill();
  assert.equal(f.rescue.secured,true);assert.equal(f.rescue.safe,false,'Figpals do not need to be rescued before the tanks are breached');
  for(const time of [.05,2,10,40]){f.tick(time);assert.equal(f.check(),false);}
  assert.equal(f.acid.neutralized,false);
 }
});

test('automatic lowering pauses objective failure until the player regains control',()=>{
 const f=fixture({skip:'repair'}),clock=createHazardClock();f.spill();f.tick(.5);clock.update(.5);
 const before=JSON.stringify(f.acid.leaks);
 for(const time of [1,20,40]){
  const frame=clock.update(time,true);
  assert.equal(f.check(frame.paused),false);assert.equal(JSON.stringify(f.acid.leaks),before);
 }
 const resumed=clock.update(41,false);assert.equal(resumed.dt,0);assert.equal(f.check(resumed.paused),true);
});

test('retry clears the flood and failed preparation cannot be repaired by linking late',()=>{
 const f=fixture({skip:'link2'});f.spill();f.tick(2);
 f.rescue.link(2,f.inventory);assert.equal(f.rescue.secured,false);assert.equal(f.check(),true);
 f.acid.reset();f.rescue.reset();f.mobile.reset();assert.equal(f.check(),false);
});

test('ordinary water is not a corrosive floor, and the failure reason gives no solution',()=>{
 const f=fixture({skip:'repair'});f.spill();f.tick(2);f.acid.neutralize();assert.equal(f.check(),false);
 assert.equal(resolveGameOverCause({flood:true}),'flood');
 assert.equal(resolveGameOverCause({flood:true,acid:true}),'acid');
 assert.equal(gameOverReason('flood'),'The acid flood made escape impossible.');
 assert.doesNotMatch(gameOverReason('flood'),/mobile|chain|repair|laptop|before|should/i);
});
