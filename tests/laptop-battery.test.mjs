import test from 'node:test';
import assert from 'node:assert/strict';
import * as THREE from '../dist/vendor/three.module.js';
import {createChargingState,LAPTOP_CHARGE_SECONDS_PER_PERCENT} from '../dist/charging-state.js';
import {createChargingKit} from '../dist/charging-kit.js';

const connect=state=>{for(const action of ['drawer','charger','strip'])state.use(action);};

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

test('plugging into the strip revives a flat battery and charges slowly without resetting on repeated clicks',()=>{
 const state=createChargingState();state.update(0,{opened:true});state.update(60,{opened:true});connect(state);
 assert.equal(state.phase,'charging');assert.equal(state.canUse,true);assert.equal(state.battery,0);assert.equal(state.nextAction,null);
 state.update(79.9);assert.equal(state.batteryLevel,0);state.update(80);assert.equal(state.batteryLevel,1);
 state.use('strip');state.update(100);assert.equal(state.batteryLevel,2);assert.match(state.use('laptop'),/Battery: 2%/);
 state.damageCable();assert.equal(state.canUse,true,'stored charge remains available when external power is lost');
 state.update(114.9);assert.equal(state.canUse,true);assert.equal(state.update(115),'depleted');assert.equal(state.canUse,false);assert.match(state.use('laptop'),/burned through/);
});

test('early connection retains existing charge; locked actions and retry retain the puzzle sequence',()=>{
 const state=createChargingState();state.use('drawer',true);assert.equal(state.drawerOpen,false);
 state.update(100,{opened:true});state.update(130);assert.equal(state.battery,4);connect(state);assert.equal(state.battery,4);
 state.update(170);assert.equal(state.batteryLevel,6);assert.equal(state.canUse,true);
 state.reset();assert.equal(state.started,false);assert.equal(state.battery,8);assert.equal(state.phase,'drawer');
 assert.equal(state.update(800,{opened:true}),'started');state.update(859.99);assert.equal(state.canUse,true);state.update(860);assert.equal(state.canUse,false);
});

test('charging is independent of frame rate, capped at 100%, and restored without elapsed-time jumps',()=>{
 const fast=createChargingState(),slow=createChargingState();connect(fast);connect(slow);
 for(let t=1;t<=120;t++)fast.update(t);slow.update(120);assert.ok(Math.abs(fast.battery-slow.battery)<1e-8);assert.equal(fast.batteryLevel,14);
 slow.update(100);assert.equal(slow.batteryLevel,14,'backward time cannot add or remove charge');
 const saved=slow.capture();slow.restore(saved,1000);slow.update(1020);assert.equal(slow.batteryLevel,15);
 slow.update(1000+100*LAPTOP_CHARGE_SECONDS_PER_PERCENT);assert.equal(slow.battery,100);assert.equal(slow.batteryLevel,100);
});

test('the real charging kit hides screen overlays on shutdown and restores power, then shows the increasing charge',()=>{
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
  for(const action of ['drawer','charger','strip'])kit.use(action,4);
  assert.equal(kit.phase,'charging');assert.equal(laptop.isPowered,true);assert.equal(kit.nextAction,null);
  kit.update(5,true);assert.equal(laptop.isPowered,true);assert.equal(readout.visible,true);assert.equal(warning.visible,false);assert.equal(kit.battery,0);assert.ok(text.includes('⚡ 0%'));assert.match(kit.hint(null),/Charging/);
  const connector=kit.group.getObjectByName('Connected MacBook charging cable'),wire=kit.group.getObjectByName('Charging cable resting across the floor'),port=object.getObjectByName('MacBook charging port');
  assert.equal(connector.visible,true);assert.ok(wire);assert.equal(kit.drawer.getObjectByName('Coiled charger cable').visible,false,'the collected coil stays hidden in the drawer');
  const expected=port.getWorldPosition(new THREE.Vector3()).add(new THREE.Vector3(-.032,0,0).applyQuaternion(connector.quaternion));
  assert.ok(connector.position.distanceTo(expected)<1e-7,'the same strip action seats the cable in the actual laptop port');assert.ok(kit.cablePoints.length>0,'the connected floor cable is available to the acid/fire interaction');
  now=2000;kit.update(6,true);assert.equal(kit.battery,52);assert.ok(text.includes('⚡ 52%'));assert.match(kit.hint(null),/52%/);
  kit.meltCable(new THREE.Vector3(),1);kit.update(7,true);assert.equal(laptop.isPowered,true);assert.equal(kit.energized,false);
  now=2390;kit.update(8,true);assert.equal(laptop.isPowered,false);assert.equal(readout.visible,false);
  kit.reset();laptop.isReady=false;laptop.openProgress=0;kit.update(8,true);assert.equal(kit.battery,8);assert.equal(laptop.isPowered,true);assert.equal(warning.visible,false);
 }finally{globalThis.document=previous;}
});
