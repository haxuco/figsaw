import test from 'node:test';
import assert from 'node:assert/strict';
import * as THREE from '../dist/vendor/three.module.js';
import {createDrawerCamera} from '../dist/drawer-camera.js';
import {createChargerCableGeometry} from '../dist/charger-cable.js';
import {createMacBookAdapter,createPowerStrip,createMainsLeadGeometry} from '../dist/charging-hardware.js';

function viewFixture(){
 const position=new THREE.Vector3(1.85,.82,3.11),state={yaw:.78,pitch:-.07,zoom:.78};
 const home={position:position.clone(),...state};
 const controller=createDrawerCamera({position,state,getView(eye,target){eye.set(1.5,1.5,3.14);target.set(1.5,.475,3.74);}});
 return {position,state,home,controller};
}
test('drawer view looks into the tray, holds for pickup, then restores the saved view',()=>{
 const {position,state,home,controller}=viewFixture();controller.start(10);controller.update(10.4);
 assert.ok(position.y>home.position.y&&position.y<1.5);
 controller.update(11);assert.equal(controller.active,true);assert.ok(state.pitch<-.9);
 const focus=position.clone();controller.update(90);assert.ok(position.equals(focus),'do not leave before the player grabs the charger');
 controller.restore(91);controller.update(92);assert.equal(controller.active,false);
 assert.ok(position.distanceTo(home.position)<1e-8);assert.ok(Math.abs(state.yaw-home.yaw)<1e-8);assert.equal(state.pitch,home.pitch);assert.equal(state.zoom,home.zoom);
});

test('upright adapter, charging lead and mains lead clear the power strip throughout insertion',()=>{
 const scene=new THREE.Group(),{group:strip,adapterSeat,leadExit}=createPowerStrip();scene.add(strip);
 strip.position.set(1.94,.035,3.72);strip.rotation.y=-.16;
 const {group:adapter,exit:adapterExit}=createMacBookAdapter();strip.add(adapter);adapter.position.copy(adapterSeat.position);
 const laptop=new THREE.Group(),connector=new THREE.Group();scene.add(laptop,connector);laptop.position.set(.45,.03,2.18);laptop.rotation.y=.98;
 const connectorExit=new THREE.Object3D();connectorExit.position.x=-.057;connector.add(connectorExit);
 const floorSupport=()=>.003,vertex=new THREE.Vector3(),local=new THREE.Vector3();
 scene.updateMatrixWorld(true);
 assert.ok(new THREE.Vector3(1,0,0).transformDirection(adapterExit.matrixWorld).y>.999,'USB-C cable must leave upward');
 adapter.traverse(m=>{if(m.name==='Downward AC prong'){
  const p=strip.worldToLocal(m.getWorldPosition(new THREE.Vector3()));assert.ok(Math.abs(Math.abs(p.x-adapterSeat.position.x)-.014)<1e-8);assert.ok(Math.abs(p.z+.012)<1e-8,'prongs align with the first socket slots');
 }});
 function clearStrip(geometry){
  const positions=geometry.attributes.position;
  for(let i=0;i<positions.count;i++){
   vertex.fromBufferAttribute(positions,i);assert.ok(vertex.y>=floorSupport()-.00001,'cable must rest above the floor');
   strip.worldToLocal(local.copy(vertex));
   assert.ok(Math.abs(local.x)>.327||Math.abs(local.z)>.070||local.y>.043||local.y<-.032,`cable clips power strip at ${local.toArray()}`);
  }
 }
 for(const lift of[0,.08,.19])for(const progress of[0,.5,1]){
  adapter.position.y=adapterSeat.position.y+lift;connector.quaternion.copy(laptop.quaternion);
  connector.position.copy(laptop.localToWorld(new THREE.Vector3(-.446-.032-(1-progress)*.12,.002+(1-progress)*.028,-.18)));
  const geometry=createChargerCableGeometry({adapterExit,connectorExit,laptop,floorSupport,strip});clearStrip(geometry);
  const positions=geometry.attributes.position;
  for(let i=0;i<positions.count;i++){
   adapter.worldToLocal(local.fromBufferAttribute(positions,i));
   assert.ok(Math.abs(local.x)>.075||Math.abs(local.z)>.037||local.y>.162||local.y<.005,'USB-C cable cuts through adapter shell');
  }
  geometry.dispose();
 }
 const mains=createMainsLeadGeometry({exit:leadExit,wallPlug:new THREE.Vector3(2.15,.30,4.35),floorSupport});clearStrip(mains);
 const positions=mains.attributes.position,first=new THREE.Vector3(),last=new THREE.Vector3(),ring=positions.count/8-1;
 for(let j=0;j<7;j++){first.add(vertex.fromBufferAttribute(positions,j));last.add(vertex.fromBufferAttribute(positions,ring*8+j));}
 first.divideScalar(7);last.divideScalar(7);
 assert.ok(first.distanceTo(leadExit.getWorldPosition(vertex))<1e-6);assert.ok(last.distanceTo(new THREE.Vector3(2.15,.30,4.35))<1e-6,'mains lead connects all the way to the wall plug');
 mains.dispose();
});
test('early close, manual navigation and reduced motion do not leave a camera override running',()=>{
 const {position,state,home,controller}=viewFixture();controller.start(0);controller.update(.3);controller.restore(.3);controller.update(1.3);
 assert.ok(position.equals(home.position));assert.equal(controller.active,false);
 controller.start(2);controller.update(2.2);controller.cancel();position.set(2,1,2);state.pitch=.2;controller.update(20);
 assert.deepEqual(position.toArray(),[2,1,2]);assert.equal(state.pitch,.2);
 controller.start(21);controller.update(21,true);assert.equal(position.y,1.5);
 controller.restore(22);controller.update(22,true);assert.deepEqual(position.toArray(),[2,1,2]);assert.equal(state.pitch,.2);assert.equal(controller.active,false);
});

test('charging cable meets both plug exits, stays on the floor and routes around the laptop',()=>{
 const root=new THREE.Group(),adapter=new THREE.Group(),laptop=new THREE.Group(),connector=new THREE.Group();root.add(adapter,laptop,connector);
 adapter.position.set(1.78,.11,3.746);adapter.rotation.y=-.16;
 const adapterExit=new THREE.Object3D();adapterExit.position.set(.133,.006,0);adapter.add(adapterExit);
 laptop.position.set(.45,.03,2.18);laptop.rotation.y=.98;
 const connectorExit=new THREE.Object3D();connectorExit.position.x=-.057;connector.add(connectorExit);
 for(const progress of [0,.5,1]){
  root.updateMatrixWorld(true);connector.quaternion.copy(laptop.quaternion);
  connector.position.copy(laptop.localToWorld(new THREE.Vector3(-.446-.032-(1-progress)*.12,.002+(1-progress)*.028,-.18)));
  const geometry=createChargerCableGeometry({adapterExit,connectorExit,laptop,floorSupport:()=>.003}),p=geometry.attributes.position;
  const center=ring=>{const c=new THREE.Vector3(),v=new THREE.Vector3();for(let j=0;j<8;j++)c.add(v.fromBufferAttribute(p,ring*9+j));return c.multiplyScalar(1/8);};
  const last=p.count/9-1,start=adapterExit.getWorldPosition(new THREE.Vector3()),end=connectorExit.getWorldPosition(new THREE.Vector3());
  assert.ok(center(0).distanceTo(start)<1e-6);assert.ok(center(last).distanceTo(end)<1e-6);
  const out=new THREE.Vector3(1,0,0).transformDirection(adapterExit.matrixWorld),into=new THREE.Vector3(1,0,0).transformDirection(connectorExit.matrixWorld);
  assert.ok(center(1).sub(center(0)).normalize().dot(out)>.95,'wire must leave the adapter along its strain relief');
  assert.ok(center(last).sub(center(last-1)).normalize().dot(into)>.95,'wire must enter straight into the laptop plug');
  for(let i=0;i<p.count;i++)assert.ok(p.getY(i)>.003,'wire must not cut through the floor');
  for(let i=0;i<=last;i++){
   const local=laptop.worldToLocal(center(i));
   assert.ok(Math.abs(local.x)>.49||Math.abs(local.z)>.33,'wire must go around, not through, the computer');
  }
  geometry.dispose();
 }
});

test('panning in a drawer close-up retains the original Back destination',()=>{
 const {position,state,home,controller}=viewFixture();controller.start(0);controller.update(1);controller.pause();state.yaw+=.8;state.pitch+=.2;
 controller.update(3);assert.equal(controller.active,true);assert.equal(controller.returning,false);
 controller.restore(4);controller.restore(4.7);controller.update(5);assert.equal(controller.active,false);assert.ok(position.equals(home.position));assert.ok(Math.abs(state.yaw-home.yaw)<1e-8);assert.equal(state.pitch,home.pitch);
});
