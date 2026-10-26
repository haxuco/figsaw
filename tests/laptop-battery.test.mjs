import test from 'node:test';
import assert from 'node:assert/strict';
import * as THREE from '../dist/vendor/three.module.js';
import {createChargingState} from '../dist/charging-state.js';
import {createChargingKit} from '../dist/charging-kit.js';

const connect=state=>{for(const action of ['drawer','charger','strip','laptop'])state.use(action);};

test('battery waits for opening, then expires at exactly 60 real seconds',()=>{
 const state=createChargingState();state.update(1000);assert.equal(state.battery,8);assert.equal(state.started,false);
 assert.equal(state.update(1001,{opened:true}),'started');assert.equal(state.remaining,60);
 state.update(1031,{opened:true});assert.equal(state.battery,4);
 state.update(1060.999,{opened:true});assert.equal(state.canUse,true);
 assert.equal(state.update(1061,{opened:true}),'depleted');assert.equal(state.battery,0);assert.equal(state.canUse,false);
 assert.equal(state.update(2000,{opened:true}),null,'announce shutdown only once');
});

test('closing, reopening and missed frames cannot refill or pause the battery',()=>{
 const state=createChargingState();state.update(10,{opened:true});state.update(20,{opened:false});
 state.update(30,{opened:true});assert.equal(state.remaining,40);
 assert.equal(state.update(200,{opened:true}),'depleted');assert.equal(state.canUse,false);
 state.update(20,{opened:true});assert.equal(state.canUse,false,'time cannot run backwards');
});

test('the strip alone is insufficient; both connections restore power and keep 0% forever',()=>{
 const state=createChargingState();state.update(0,{opened:true});state.update(60,{opened:true});
 for(const action of ['drawer','charger','strip'])state.use(action);
 assert.equal(state.phase,'powered');assert.equal(state.canUse,false);
 state.use('laptop');assert.equal(state.canUse,true);assert.equal(state.battery,0);
 state.update(900,{opened:true});assert.equal(state.battery,0);assert.equal(state.canUse,true);
 state.damageCable();assert.equal(state.canUse,false);assert.match(state.use('laptop'),/burned through/);
});

test('early connection also shows 0%; locked actions and retry retain the puzzle sequence',()=>{
 const state=createChargingState();state.use('drawer',true);assert.equal(state.drawerOpen,false);
 connect(state);state.update(100,{opened:true});state.update(500,{opened:true});assert.equal(state.canUse,true);assert.equal(state.battery,0);
 state.reset();assert.equal(state.started,false);assert.equal(state.battery,8);assert.equal(state.phase,'drawer');
 assert.equal(state.update(800,{opened:true}),'started');state.update(859.99);assert.equal(state.canUse,true);state.update(860);assert.equal(state.canUse,false);
});

test('the real charging kit hides screen overlays on shutdown and restores 0% on external power',()=>{
 const previous=globalThis.document,text=[];
 const context=new Proxy({}, {get(_,key){return key==='fillText'?(value)=>text.push(value):()=>{};},set(){return true;}});
 globalThis.document={createElement:()=>({getContext:()=>context})};
 try{
  let now=100;
  const object=new THREE.Group(),screen=new THREE.Mesh(new THREE.PlaneGeometry(1,1),new THREE.MeshBasicMaterial());object.add(screen);
  const laptop={object,screen,isReady:false,openProgress:0,isPowered:true,setPower(value){this.isPowered=value;}};
  const kit=createChargingKit({filing:new THREE.Group(),laptop,floorSupport:()=>0,drawerMaterial:new THREE.MeshStandardMaterial(),powerClock:()=>now});
  now=900;kit.update(1,true);assert.equal(kit.battery,8);
  laptop.isReady=true;laptop.openProgress=1;kit.update(2,true);
  const warning=screen.getObjectByName('Sixty-second battery warning'),readout=screen.getObjectByName('MacBook battery charge readout');
  assert.equal(warning.visible,true);assert.ok(text.some(value=>value.includes('1:00')));assert.match(kit.takePowerMessage(),/60 seconds/);
  now=960;kit.update(3,true);assert.equal(laptop.isPowered,false);assert.equal(warning.visible,false);assert.equal(readout.visible,false);assert.match(kit.takePowerMessage(),/run out/);
  for(const action of ['drawer','charger','strip','laptop'])kit.use(action,4);
  kit.update(5,true);assert.equal(laptop.isPowered,true);assert.equal(readout.visible,true);assert.equal(warning.visible,false);assert.equal(kit.battery,0);assert.ok(text.includes('⚡ 0%'));assert.match(kit.hint(null),/External power/);
  now=2000;kit.update(6,true);assert.equal(kit.battery,0);
  kit.meltCable(new THREE.Vector3(),1);kit.update(7,true);assert.equal(laptop.isPowered,false);assert.equal(readout.visible,false);
  kit.reset();laptop.isReady=false;laptop.openProgress=0;kit.update(8,true);assert.equal(kit.battery,8);assert.equal(laptop.isPowered,true);assert.equal(warning.visible,false);
 }finally{globalThis.document=previous;}
});
