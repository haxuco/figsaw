import test from 'node:test';
import assert from 'node:assert/strict';
import {createPuzzleHints,PUZZLE_HINTS,nextPuzzleHint} from '../dist/puzzle-hints.js';
import {createChargingState} from '../dist/charging-state.js';
import {createFigpalBubbles} from '../dist/figpal-finale.js';
import * as THREE from '../dist/vendor/three.module.js';

function fixture(){
 const progress={locked:true,keyCollected:false,laptopPowered:true,chargerDamaged:false,laptopComplete:false,pmRevealed:false,mobileRepaired:false,chairOccupied:false,keypadUnlocked:false,revision:0};
 const silent=new Set(),lowered=new Set(),rescued=new Set();let hint=null,transientUntil=0;
 const bubbles={setHint(index,line){hint={index,line};},clearHint(){hint=null;},isActive:t=>!!hint||t<transientUntil};
 const hints=createPuzzleHints({hoists:{speechAnchors:[{},{},{}],isHanging:i=>!silent.has(i)&&!lowered.has(i)&&!rescued.has(i),canSpeak:i=>!silent.has(i)&&!rescued.has(i),canHint:i=>!silent.has(i)&&(!lowered.has(i)||rescued.has(i))},bubbles,getProgress:()=>progress});
 return {hints,progress,silent,lowered,rescued,get hint(){return hint;},transient(until){transientUntil=until;}};
}

test('the full hint sequence waits 30 seconds and clears as each actual task completes',()=>{
 const f=fixture(),update=t=>f.hints.update(t);
 assert.equal(update(0),null);assert.equal(update(29.99),null);assert.equal(update(30).line,PUZZLE_HINTS.key);
 f.progress.keyCollected=true;f.progress.locked=false;assert.equal(update(31),null);assert.equal(f.hint,null);
 assert.equal(update(60),null);assert.equal(update(61).line,PUZZLE_HINTS.laptop);
 f.progress.laptopComplete=true;assert.equal(update(93),null);assert.equal(update(123).line,PUZZLE_HINTS.pm);
 f.hints.inspect('org-chart',124);assert.equal(update(124),null);assert.equal(update(160),null,'reading the org chart resolves the PM-identification hint');
 f.progress.pmRevealed=true;assert.equal(update(161),null);assert.equal(update(191).line,PUZZLE_HINTS.skull);
 f.hints.inspect('skull',192);assert.equal(update(192),null);assert.equal(update(222).line,PUZZLE_HINTS.mobile);
 f.progress.mobileRepaired=true;assert.equal(update(223),null);assert.equal(f.hint,null);
 assert.equal(update(252.99),null);assert.equal(update(253).line,PUZZLE_HINTS.perspective);
 f.hints.inspect('keypad',254);assert.equal(update(254),null);assert.equal(update(500),null);assert.equal(f.hint,null);
});

test('the perspective hint requires completed code clues, an undiscovered keypad, and a player off the chair',()=>{
 const progress={locked:false,laptopComplete:true,pmRevealed:true,mobileRepaired:true,chairOccupied:false,keypadUnlocked:false};
 const seen=new Set(['skull']);assert.equal(nextPuzzleHint(progress,seen),'perspective');
 for(const change of[{locked:true},{laptopComplete:false},{pmRevealed:false},{mobileRepaired:false},{chairOccupied:true},{keypadUnlocked:true}])assert.notEqual(nextPuzzleHint({...progress,...change},seen),'perspective');
 assert.notEqual(nextPuzzleHint(progress,new Set()),'perspective');
 assert.equal(nextPuzzleHint(progress,new Set(['skull','keypad'])),null,'finding the keypad early still suppresses its discovery hint');
});

test('sitting cancels the pending or visible hint; standing restarts the full inactivity delay',()=>{
 const f=fixture();Object.assign(f.progress,{locked:false,laptopComplete:true,pmRevealed:true,mobileRepaired:true});f.hints.inspect('skull',0);
 f.hints.update(0);f.progress.chairOccupied=true;assert.equal(f.hints.update(20),null);assert.equal(f.hints.update(100),null);
 f.progress.chairOccupied=false;assert.equal(f.hints.update(101),null);assert.equal(f.hints.update(130.99),null);assert.equal(f.hints.update(131).key,'perspective');
 f.hints.activity(132);assert.equal(f.hints.update(1000).key,'perspective','the shown hint stays until the step is resolved');
 f.progress.chairOccupied=true;assert.equal(f.hints.update(1001),null);assert.equal(f.hint,null);
 f.hints.inspect('keypad',1002);f.progress.chairOccupied=false;assert.equal(f.hints.update(1002),null);assert.equal(f.hints.update(2000),null);
 f.hints.reset();f.hints.inspect('skull',2001);f.hints.update(2001);assert.equal(f.hints.update(2031).key,'perspective','a retry clears the discovered-keypad flag');
});

test('a rescued living Figpal can give the perspective hint, while skeletons and ordinary rescued pleas remain silent',()=>{
 const f=fixture();Object.assign(f.progress,{locked:false,laptopComplete:true,pmRevealed:true,mobileRepaired:true});f.hints.inspect('skull',0);
 f.silent.add(0);f.rescued.add(1);f.rescued.add(2);f.hints.update(0);const shown=f.hints.update(30);
 assert.equal(shown.key,'perspective');assert.notEqual(shown.index,0);
 f.silent.add(shown.index);const next=f.hints.update(31);assert.notEqual(next.index,shown.index);
 f.progress.mobileRepaired=false;assert.equal(f.hints.update(32),null);assert.equal(f.hints.update(62),null,'earlier hints still require a hanging Figpal');
});

test('actions restart a pending delay, but do not dismiss an already-visible hint',()=>{
 const f=fixture();f.hints.update(0);f.hints.activity(25);assert.equal(f.hints.update(30),null);
 assert.equal(f.hints.update(54.9),null);assert.equal(f.hints.update(55).key,'key');
 f.progress.revision++;f.hints.activity(56);assert.equal(f.hints.update(56).key,'key');
 assert.equal(f.hints.update(1000).key,'key','the bubble has no expiry');
});

test('inventory changes and drawer progress defer a pending hint without reacting to the clock ticking',()=>{
 const f=fixture();f.hints.update(0);f.progress.revision++;assert.equal(f.hints.update(20),null);
 assert.equal(f.hints.update(49.99),null);assert.equal(f.hints.update(50).key,'key');
});

test('flat batteries request a charger; a connected charger displaying 0% resolves that hint',()=>{
 const f=fixture(),charger=createChargingState();f.progress.locked=false;
 charger.update(0,{opened:true});charger.update(60,{opened:true});assert.equal(charger.canUse,false);
 f.progress.laptopPowered=charger.canUse;f.hints.update(60);assert.equal(f.hints.update(90).line,PUZZLE_HINTS.battery);
 for(const action of ['drawer','charger','strip'])charger.use(action);
 assert.equal(charger.battery,0);assert.equal(charger.canUse,true);
 f.progress.laptopPowered=charger.canUse;assert.equal(f.hints.update(91),null);assert.equal(f.hint,null);
 assert.equal(f.hints.update(121).key,'laptop');
 f.progress.chargerDamaged=true;f.progress.laptopPowered=false;assert.equal(f.hints.update(122),null,'do not suggest a charger that cannot be repaired');
});

test('out-of-order discoveries skip solved hints and do not send a player back to a completed laptop',()=>{
 const f=fixture();f.progress.locked=false;f.progress.pmRevealed=true;f.progress.mobileRepaired=true;
 assert.equal(nextPuzzleHint(f.progress,new Set()),'skull');
 f.hints.inspect('skull',0);assert.equal(f.hints.update(0),null);assert.equal(f.hints.update(60),null);
 f.progress.laptopPowered=false;f.progress.laptopComplete=true;assert.equal(f.hints.update(120),null);
});

test('the PM never delivers the post-sacrifice hint; hints transfer when their speaker is lowered or rescued',()=>{
 const f=fixture();f.progress.locked=false;f.progress.pmRevealed=true;f.silent.add(0);
 f.hints.update(0);const first=f.hints.update(30);assert.notEqual(first.index,0);
 f.lowered.add(first.index);const next=f.hints.update(31);assert.notEqual(next.index,first.index);assert.equal(next.key,'skull');
 f.silent.add(next.index);assert.equal(f.hints.update(32),null);assert.equal(f.hint,null);
});

test('inspections and transient screams defer new hints, while an established hint survives interruptions',()=>{
 const f=fixture();f.hints.update(0);assert.equal(f.hints.update(30,{blocked:true}),null);
 f.transient(40);assert.equal(f.hints.update(35),null);assert.equal(f.hints.update(40).key,'key');
 assert.equal(f.hints.update(41,{blocked:true}).key,'key');
});

test('intro, game over, retries and diagnostic undo do not retain stale hints or discovery flags',()=>{
 const f=fixture();assert.equal(f.hints.update(100,{enabled:false}),null);f.hints.update(101);
 assert.equal(f.hints.update(130),null);assert.equal(f.hints.update(131).key,'key');
 assert.equal(f.hints.update(132,{enabled:false}),null);assert.equal(f.hint,null);
 f.hints.inspect('org-chart',132);f.hints.reset();f.progress.locked=false;f.progress.laptopComplete=true;
 f.hints.update(200);assert.equal(f.hints.update(230).key,'pm');
});

test('idle delay uses elapsed real time while existing dialogue retains its own animation clock',()=>{
 const f=fixture();f.hints.update(1000,{dialogueTime:5});f.transient(10);
 assert.equal(f.hints.update(1030,{dialogueTime:9}),null);
 assert.equal(f.hints.update(1031,{dialogueTime:11}).key,'key');
});

class Element{
 constructor(){this.children=[];this.style={};this.dataset={};this.classes=new Set();this.classList={add:k=>this.classes.add(k),toggle:(k,on)=>on?this.classes.add(k):this.classes.delete(k)};}
 append(...children){this.children.push(...children);}setAttribute(){}
}
test('the actual bubble renderer allows a rescued survivor to hint without restoring cries or skeleton speech',()=>{
 const previous=globalThis.document,container=new Element();
 globalThis.document={querySelector:()=>container,createElement:()=>new Element(),createElementNS:()=>new Element()};
 try{
  const anchor=new THREE.Object3D();anchor.position.set(0,1.5,0);let alive=true;
  const camera=new THREE.PerspectiveCamera(50,1,.1,100);camera.position.set(0,1.5,3);camera.lookAt(0,1.5,0);camera.updateMatrixWorld();
  const bubbles=createFigpalBubbles([anchor],{getBoundingClientRect:()=>({left:0,top:0,width:500,height:500})},()=>false,()=>alive),bubble=container.children[0];
  bubbles.show(0,0,'Help!');assert.equal(bubbles.isActive(1),false);
  bubbles.setHint(0,PUZZLE_HINTS.perspective);bubbles.update(camera,30);assert.equal(bubble.hidden,false);assert.equal(bubble.children[0].textContent,PUZZLE_HINTS.perspective);
  bubbles.update(camera,300);assert.equal(bubble.style.opacity,'1');
  bubbles.clearHint();bubbles.update(camera,301);assert.equal(bubble.hidden,true);
  alive=false;bubbles.setHint(0,PUZZLE_HINTS.perspective);bubbles.update(camera,302);assert.equal(bubble.hidden,true);assert.equal(bubbles.isActive(302),false);
 }finally{globalThis.document=previous;}
});
test('real speech bubbles persist at full opacity, resume after a scream and never speak from a skeleton',()=>{
 const previous=globalThis.document,container=new Element();
 globalThis.document={querySelector:()=>container,createElement:()=>new Element(),createElementNS:()=>new Element()};
 try{
  const anchors=Array.from({length:3},()=>{const a=new THREE.Object3D();a.position.set(0,1.5,0);return a;}),silent=new Set();
  const camera=new THREE.PerspectiveCamera(50,1,.1,100);camera.position.set(0,1.5,3);camera.lookAt(0,1.5,0);camera.updateMatrixWorld();
  const bubbles=createFigpalBubbles(anchors,{getBoundingClientRect:()=>({left:0,top:0,width:500,height:500})},i=>!silent.has(i));
  const bubble=container.children[1];bubbles.setHint(1,PUZZLE_HINTS.laptop);bubbles.update(camera,30);
  assert.equal(bubble.children[0].textContent,PUZZLE_HINTS.laptop);assert.equal(bubble.hidden,false);
  bubbles.update(camera,1000);assert.equal(bubble.style.opacity,'1');assert.ok(bubble.classes.has('figpal-hint'));
  bubbles.show(1,1000,'Help!',6);bubbles.update(camera,1001);assert.equal(bubble.children[0].textContent,'Help!');
  bubbles.update(camera,1007);assert.equal(bubble.children[0].textContent,PUZZLE_HINTS.laptop);assert.equal(bubble.style.opacity,'1');
  bubbles.hide();bubbles.update(camera,1008);assert.equal(bubble.hidden,false,'a lowering-dialogue reset does not discard puzzle hints');
  camera.lookAt(0,1.5,6);camera.updateMatrixWorld();bubbles.update(camera,1009);assert.equal(bubble.hidden,true);
  camera.lookAt(0,1.5,0);camera.updateMatrixWorld();bubbles.update(camera,1010);assert.equal(bubble.hidden,false,'looking away does not expire the hint');
  silent.add(1);bubbles.update(camera,1011);assert.equal(bubble.hidden,true);
  bubbles.clearHint();assert.equal(bubbles.isActive(1012),false);
 }finally{globalThis.document=previous;}
});
