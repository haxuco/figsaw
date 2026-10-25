import test from 'node:test';
import assert from 'node:assert/strict';
import * as THREE from '../dist/vendor/three.module.js';
import {createMugTrap} from '../dist/mug-trap.js';
import {createPlayerRestraint} from '../dist/player-restraint.js';

function fixture(fov=62,aspect=16/9){
 const scene=new THREE.Scene(),camera=new THREE.PerspectiveCamera(fov,aspect,.06,35);
 camera.position.set(1.85,.82,3.11);camera.lookAt(1.15,.75,2.4);camera.updateMatrixWorld();
 const mug=new THREE.Group();mug.scale.setScalar(.72);mug.position.set(.24,.11,3.02);mug.rotation.set(.1,-.5,1.5);scene.add(mug);
 // Match the nested body and rotated ears of the real floor prop.
 const body=new THREE.Group();body.position.y=-.135;mug.add(body);
 const handle=new THREE.Object3D();handle.name='Mug handle grip';handle.position.set(-.249,.141,0);body.add(handle);
 for(const side of[-1,1]){
  const ear=new THREE.Group();ear.position.set(side*.095,.235,.103);ear.rotation.set(-.06,side*Math.atan2(.095,.103),-side*.10);body.add(ear);
  const tip=new THREE.Object3D();tip.name=side<0?'Mug left ear tip':'Mug right ear tip';tip.position.y=.142;ear.add(tip);
 }
 const restraint=createPlayerRestraint(camera);scene.add(restraint.group);
 const trap=createMugTrap({mug,camera,restraint});return {scene,camera,mug,restraint,trap};
}

test('both visible ear tips approach the eye marks throughout the sip on desktop and mobile',()=>{
 for(const fov of[62,48.36])for(const aspect of[16/9,390/844]){
  const {camera,mug,restraint,trap}=fixture(fov,aspect);restraint.requestReach(0);restraint.update(.7);restraint.detach(1);trap.start(4);
  trap.update(6.2);
  const face=new THREE.Vector3(0,0,1).applyQuaternion(mug.getWorldQuaternion(new THREE.Quaternion())).applyQuaternion(camera.quaternion.clone().invert());
  assert.ok(face.z<-.999,'the mug must turn 180 degrees before drinking');
  let previousWidth=0;
  for(const elapsed of[2.12,2.5,2.9,3.36]){
   trap.update(4+elapsed);
   const tips=['Mug left ear tip','Mug right ear tip'].map(name=>mug.getObjectByName(name).getWorldPosition(new THREE.Vector3()).project(camera));
   const width=Math.abs(tips[1].x-tips[0].x);assert.ok(width>=previousWidth-1e-6,'the tips must approach the viewer');previousWidth=width;
   for(const tip of tips){assert.ok(Math.abs(tip.y-.08)<1e-6,'ear drops below the eye line');assert.ok(tip.z>-1&&tip.z<1,'ear is clipped before impact');}
   if(elapsed===3.36)for(const tip of tips)assert.ok(Math.abs(Math.abs(tip.x)-.22)<1e-6,'each ear must meet its red eye mark');
  }
  trap.update(7.42);assert.equal(trap.eyeImpact,1);assert.equal(trap.blackout,0,'the two red marks appear before any blackout');
  trap.reset();assert.equal(trap.start(10),true);trap.update(13.36);
  const tip=mug.getObjectByName('Mug left ear tip').getWorldPosition(new THREE.Vector3()).project(camera);
  assert.ok(Math.abs(Math.abs(tip.x)-.22)<1e-6,'reset must preserve the same eye alignment');
 }
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
