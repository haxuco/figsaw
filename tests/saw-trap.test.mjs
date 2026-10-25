import test from 'node:test';
import assert from 'node:assert/strict';
import * as THREE from '../dist/vendor/three.module.js';
import {createSawTrap} from '../dist/saw-trap.js';
import {createFloorHandsaw} from '../dist/floor-handsaw.js';
import {createPlayerRestraint} from '../dist/player-restraint.js';
import {createKetchupKeyState} from '../dist/ketchup-key-state.js';
import {batchStaticScenery} from '../dist/static-batching.js';

function fixture(fov=48.36,aspect=16/9){
 const scene=new THREE.Scene(),office=new THREE.Group();scene.add(office);
 const camera=new THREE.PerspectiveCamera(fov,aspect,.06,35);
 camera.position.set(1.85221,.821615,3.1149);camera.lookAt(1.155084,.748275,2.401713);camera.updateMatrixWorld();
 const key=createKetchupKeyState(),restraint=createPlayerRestraint(camera,{canDetach:()=>key.hasKey});scene.add(restraint.group);
 const saw=createFloorHandsaw(new THREE.Vector3(1.2,0,2.1)).group;office.add(saw);
 batchStaticScenery(office,{exclude:[saw]});
 const trap=createSawTrap({saw,camera,restraint,hasKey:()=>key.hasKey});
 const tick=(time,reduced=false)=>{restraint.update(time,reduced,trap.active,null,trap.armLift(time,reduced));return trap.update(time,reduced);};
 return {saw,camera,restraint,key,trap,tick};
}

test('the saw is fatal until the key is collected, including while the key lies in the ketchup',()=>{
 for(const phase of['sealed','pouring','revealed','collected']){
  const {key,trap}=fixture();
  if(phase!=='sealed')key.pour(0);
  if(['revealed','collected'].includes(phase))key.update(4);
  if(phase==='collected')key.collect();
  assert.equal(trap.start(5),phase!=='collected');
  if(phase!=='collected')assert.equal(trap.start(5.1),false,'repeated clicks cannot restart the sequence');
 }
});

test('the actual saw lifts with its handle on the left, strokes beside the cuff, then blacks out',()=>{
 for(const fov of[62,48.36])for(const aspect of[16/9,390/844]){
  const {saw,camera,restraint,trap,tick}=fixture(fov,aspect),home=saw.position.clone();
  assert.equal(trap.start(0),true);
  tick(1.8);const a=saw.position.clone();tick(1.95);const b=saw.position.clone();
  assert.ok(a.distanceTo(home)>.3,'lift the floor prop');assert.ok(a.distanceTo(b)>.08,'visible back-and-forth strokes');
  const handle=new THREE.Box3().setFromObject(saw.getObjectByName('Worn wooden open grip')).getCenter(new THREE.Vector3()).project(camera);
  const bladeTip=saw.children[0].localToWorld(new THREE.Vector3(-.35,0,0)).project(camera);
  const edgeTop=saw.children[0].localToWorld(new THREE.Vector3(-.06,.05,0)).project(camera);
  const edgeBottom=saw.children[0].localToWorld(new THREE.Vector3(-.06,-.07,0)).project(camera);
  assert.ok(handle.x<bladeTip.x,'the wooden grip stays on the left of the blade');
  assert.ok(edgeBottom.y<edgeTop.y,'turning the saw must keep its teeth pointing down');
  assert.equal(restraint.locked,true,'the saw must not unlock the shackle');
  assert.equal(restraint.group.getObjectByName('Cartoon forearm and right hand').visible,true);
  const contact=restraint.getSawContact(new THREE.Vector3()).project(camera);
  assert.ok(Math.abs(contact.y)<.7&&contact.z>-1&&contact.z<1,'wrist must stay above the bottom edge');
  assert.equal(trap.blackout,0);tick(3.1);assert.ok(trap.blackout>0&&trap.blackout<1);
  assert.equal(tick(3.7),true);assert.equal(trap.blackout,1);assert.equal(trap.finished,true);assert.equal(tick(4),false);
 }
});

test('retry restores the saw and shackle; reduced motion skips the strokes',()=>{
 const {saw,trap,tick,restraint,key}=fixture(),home=saw.position.clone(),rotation=saw.quaternion.clone();
 trap.start(0);tick(3.7);trap.reset();restraint.reset();key.reset();
 assert.ok(saw.position.distanceTo(home)<1e-8);assert.ok(saw.quaternion.angleTo(rotation)<1e-7);assert.equal(trap.blackout,0);
 assert.equal(trap.start(5),true);tick(5.8,true);assert.ok(trap.blackout>0);assert.ok(saw.position.distanceTo(home)<1e-8);
 assert.equal(tick(6.3,true),true);
});
