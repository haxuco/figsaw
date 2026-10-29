import test from 'node:test';
import assert from 'node:assert/strict';
import * as THREE from '../dist/vendor/three.module.js';
import {createExitDoorMotion,createEscapeCinematic,escapeDoorAngle,ESCAPE_DURATION} from '../dist/escape-cinematic.js';

function fixture(aspect=16/9){
 const frame=new THREE.Group(),hinge=new THREE.Group();frame.position.set(-1.2,0,4.43);frame.rotation.y=Math.PI;frame.add(hinge);
 const light=new THREE.PointLight(),door=createExitDoorMotion({object:hinge,frame,light});
 const camera=new THREE.PerspectiveCamera(62,aspect,.06,35),position=new THREE.Vector3(1.85,.82,3.11),state={yaw:1.9,pitch:.1,zoom:.78};
 const shot=createEscapeCinematic({camera,position,state,door,baseFov:62});return {frame,hinge,light,door,camera,position,state,shot};
}

test('the door holds while the camera frames it, swings past ninety degrees, rebounds and settles before results',()=>{
 const f=fixture();f.shot.start(10);
 f.door.update(10.9);assert.equal(f.hinge.rotation.y,0);
 f.door.update(11.4);assert.ok(f.hinge.rotation.y<0&&f.hinge.rotation.y>-.11);
 f.door.update(12.25);assert.ok(f.hinge.rotation.y<-Math.PI/2);
 const peak=f.hinge.rotation.y;f.door.update(12.8);assert.ok(f.hinge.rotation.y>peak,'the leaf rebounds after its strong opening swing');
 f.door.update(14);assert.equal(f.hinge.rotation.y,-1.84);assert.ok(f.light.intensity>0);
 assert.equal(f.shot.update(10+ESCAPE_DURATION-.01),false);assert.equal(f.shot.update(10+ESCAPE_DURATION+.01),true);
 f.door.reset();f.shot.reset();assert.equal(f.hinge.rotation.y,0);assert.equal(f.light.intensity,0);assert.equal(f.shot.active,false);
});

test('door and camera motion depend on elapsed time instead of desktop or mobile frame counts',()=>{
 const run=hz=>{const f=fixture();f.shot.start(0);for(let i=0;i<=hz*2;i++){f.shot.update(i/hz);f.door.update(i/hz);}return f;};
 const low=run(24),high=run(120);assert.ok(low.position.distanceTo(high.position)<1e-9);assert.ok(low.camera.quaternion.angleTo(high.camera.quaternion)<1e-7);assert.equal(low.hinge.rotation.y,high.hinge.rotation.y);
 assert.equal(escapeDoorAngle(0),0);assert.equal(escapeDoorAngle(100),-1.84);
});

test('the camera leans back and keeps the doorway and exit sign framed on portrait and landscape screens',()=>{
 for(const aspect of [.4,.55,1,16/9]){
  const f=fixture(aspect);f.shot.start(0);f.shot.update(1.15);const near=f.position.clone();f.shot.update(1.8);f.camera.updateMatrixWorld(true);
  const target=f.frame.localToWorld(new THREE.Vector3(0,1.28,0));
  assert.ok(f.position.distanceTo(target)>near.distanceTo(target),'the lean pulls away from the doorway');
  assert.ok(f.position.y>1.05);const upright=new THREE.PerspectiveCamera();upright.position.copy(f.position);upright.lookAt(f.frame.localToWorld(new THREE.Vector3(0,1.43,0)));assert.ok(f.camera.quaternion.angleTo(upright.quaternion)>.01,'the shot includes a small cinematic tilt');
  for(const local of [[-.65,.02,0],[.65,.02,0],[-.65,2.85,0],[.65,2.85,0]]){
   const projected=f.frame.localToWorld(new THREE.Vector3(...local)).project(f.camera);assert.ok(Math.abs(projected.x)<1&&Math.abs(projected.y)<1,'the full doorway stays on screen');
  }
 }
});

test('reduced motion uses a steady camera, opens the door immediately and retains a short reveal',()=>{
 const f=fixture();f.shot.start(20);f.door.update(20,true);assert.equal(f.hinge.rotation.y,-1.84);
 assert.equal(f.shot.update(20,true),false);const pose=f.camera.quaternion.clone(),position=f.position.clone();
 assert.equal(f.shot.update(20.84,true),false);assert.ok(position.distanceTo(f.position)<1e-9);assert.ok(pose.angleTo(f.camera.quaternion)<1e-7);const upright=new THREE.PerspectiveCamera();upright.position.copy(f.position);upright.lookAt(f.frame.localToWorld(new THREE.Vector3(0,1.43,0)));assert.ok(upright.quaternion.angleTo(f.camera.quaternion)<1e-7);
 assert.equal(f.shot.update(20.86,true),true);
});
