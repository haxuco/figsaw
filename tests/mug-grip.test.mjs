import test from 'node:test';
import assert from 'node:assert/strict';
import * as THREE from '../dist/vendor/three.module.js';
import {createMugTrap} from '../dist/mug-trap.js';
import {createPlayerRestraint} from '../dist/player-restraint.js';

function fixture(fov=62){
 const scene=new THREE.Scene(),camera=new THREE.PerspectiveCamera(fov,1,.06,35);
 camera.position.set(1.85,.82,3.11);camera.lookAt(1.15,.75,2.4);camera.updateMatrixWorld();
 const mug=new THREE.Group();mug.scale.setScalar(.72);mug.position.set(.24,.11,3.02);mug.rotation.set(.1,-.5,1.5);scene.add(mug);
 // Named points represent the physical handle and ear tips on the floor prop.
 for(const [name,pos] of [['Mug handle grip',[-.249,.006,0]],['Mug left ear tip',[-.105,.24,.10]],['Mug right ear tip',[.105,.24,.10]]]){
  const anchor=new THREE.Object3D();anchor.name=name;anchor.position.set(...pos);mug.add(anchor);
 }
 const restraint=createPlayerRestraint(camera);scene.add(restraint.group);
 const trap=createMugTrap({mug,camera,restraint});return {scene,camera,mug,restraint,trap};
}

test('mug turns its face away and brings the far-rim ears to eye level',()=>{
 const {camera,mug,restraint,trap}=fixture();restraint.requestReach(0);restraint.update(.7);restraint.detach(1);trap.start(4);
 trap.update(6.2);
 const face=new THREE.Vector3(0,0,1).applyQuaternion(mug.getWorldQuaternion(new THREE.Quaternion())).applyQuaternion(camera.quaternion.clone().invert());
 assert.ok(face.z<-.999,'the mug must turn 180 degrees before drinking');
 trap.update(7.36);const center=new THREE.Vector3();
 for(const name of ['Mug left ear tip','Mug right ear tip'])center.add(mug.getObjectByName(name).getWorldPosition(new THREE.Vector3()));
 camera.worldToLocal(center.multiplyScalar(.5));assert.ok(Math.abs(center.y)<1e-6);assert.ok(Math.abs(center.z+.055)<1e-6);
 trap.update(7.42);assert.equal(trap.eyeImpact,1);assert.equal(trap.blackout,0,'the two red marks appear before any blackout');
});

test('mug pickup moves the prop without revealing the unlocked hand or chain',()=>{
 for(const fov of [62,48.36]){
  const {mug,restraint,trap}=fixture(fov),home=mug.position.clone();restraint.requestReach(0);restraint.update(.7);restraint.detach(1);trap.start(4);
  for(const elapsed of [.82,1.2,1.8,2.2,2.8,3.25,4.0]){
   trap.update(4+elapsed);restraint.update(4+elapsed,false,true,trap.handPose);
   assert.equal(restraint.group.getObjectByName('Cartoon forearm and right hand').visible,false);
   assert.equal(restraint.group.getObjectByName('Camera-relative reaching hand').visible,false);
   if(elapsed>1.2)assert.ok(mug.position.distanceTo(home)>.1,'the mug must still lift from the floor');
  }
 }
});

test('mug remains locked before detaching and resets after game over',()=>{
 const {mug,restraint,trap}=fixture();const home=mug.position.clone(),rotation=mug.quaternion.clone();
 assert.equal(trap.start(0),false);
 restraint.requestReach(0);restraint.update(.7);restraint.detach(1);assert.equal(trap.start(4),true);
 assert.equal(trap.update(8.8),true);assert.equal(trap.finished,true);assert.equal(trap.blackout,1);
 trap.reset();assert.equal(trap.active,false);assert.equal(trap.blackout,0);assert.equal(trap.eyeImpact,0);assert.ok(home.distanceTo(mug.position)<1e-7);assert.ok(rotation.angleTo(mug.quaternion)<1e-7);
 assert.equal(trap.start(10),true);assert.equal(trap.update(11.3,true),true);
});


test('ear contact remains visible before the fade, including reduced motion',()=>{
 for(const reduced of [false,true]){
  const {restraint,trap}=fixture();restraint.requestReach(0);restraint.update(.7);restraint.detach(1);trap.start(4);
  const hit=reduced?.22:3.42,fade=reduced?.90:4.25;
  trap.update(4+hit,reduced);assert.equal(trap.eyeImpact,1);assert.equal(trap.blackout,0);
  trap.update(4+hit+.35,reduced);assert.equal(trap.eyeImpact,1);assert.equal(trap.blackout,0);
  trap.update(4+fade,reduced);assert.ok(trap.blackout>.2&&trap.blackout<.9);assert.equal(trap.eyeImpact,1);
 }
});
