import test from 'node:test';
import assert from 'node:assert/strict';
import * as THREE from '../dist/vendor/three.module.js';
import {solveReachElbow,createReachingForearm} from '../dist/reaching-arm.js';
import {createPlayerRestraint} from '../dist/player-restraint.js';
import {createLaptopOpening} from '../dist/laptop-opening.js';
import {createDrainJet} from '../dist/acid-surface.js';
import {createAcidFlow} from '../dist/acid-flow.js';

test('reach uses fixed limb lengths and a full taper into the fitted wrist',()=>{
 const shoulder=new THREE.Vector3(.34,-.66,-.09),wrist=new THREE.Vector3(.08,-.12,-.82),elbow=new THREE.Vector3();
 solveReachElbow(shoulder,wrist,elbow);
 assert.ok(Math.abs(elbow.distanceTo(shoulder)-.43)<1e-7);
 assert.ok(Math.abs(elbow.distanceTo(wrist)-.49)<1e-7);
 const forearm=createReachingForearm(new THREE.MeshStandardMaterial(),new THREE.MeshBasicMaterial());
 forearm.update(elbow,wrist,new THREE.Quaternion());
 const positions=forearm.mesh.geometry.attributes.position,point=new THREE.Vector3(),lastRing=positions.count-29;
 let proximalWidth=0,distalWidth=0;
 for(let i=0;i<29;i++){
  proximalWidth=Math.max(proximalWidth,point.fromBufferAttribute(positions,i).distanceTo(elbow));
  distalWidth=Math.max(distalWidth,point.fromBufferAttribute(positions,lastRing+i).distanceTo(wrist));
 }
 assert.ok(proximalWidth>distalWidth*1.8);assert.ok(Math.abs(distalWidth-.038)<1e-6);
 assert.ok([...positions.array].every(Number.isFinite));
});

test('unlocked laptop opens without showing the hand and restores the view',()=>{
 for(const fov of[62,48.36])for(const reducedMotion of[false,true]){
  const camera=new THREE.PerspectiveCamera(fov,1,.06,35),restraint=createPlayerRestraint(camera);
  const object=new THREE.Group(),cameraPosition=new THREE.Vector3(1.85,.82,3.11),home=cameraPosition.clone(),state={yaw:.8,pitch:-.1,zoom:.78};
  let progress=0;
  const laptop={object,get isOpen(){return progress===1;},setOpenProgress(value){progress=value;},getLidGrip(point){return object.localToWorld(point.set(0,.1+progress*.4,.3));}};
  const opening=createLaptopOpening({laptop,restraint,cameraPosition,state});
  assert.equal(opening.start(0),false,'locked players cannot open the lid');
  restraint.requestReach(0);restraint.update(.8);restraint.detach(1);
  assert.equal(restraint.group.getObjectByName('Cartoon forearm and right hand').visible,true,'the hand stays visible for the cuff release');
  assert.equal(opening.start(3),true);
  for(const elapsed of[0,.4,.9,1.5,2.2,2.8,3.5]){
   opening.update(3+elapsed,reducedMotion);restraint.update(3+elapsed,reducedMotion,true,opening.handPose);
   assert.equal(restraint.group.getObjectByName('Camera-relative reaching hand').visible,false);
   assert.equal(restraint.group.getObjectByName('Cartoon forearm and right hand').visible,false);
  }
  assert.equal(progress,1);assert.equal(opening.active,false);
  assert.ok(cameraPosition.distanceTo(home)<1e-6);assert.deepEqual(state,{yaw:.8,pitch:-.1,zoom:.78});
  restraint.reset();restraint.requestReach(10);restraint.update(10.7);
  assert.equal(restraint.group.getObjectByName('Camera-relative reaching hand').visible,true,'a new game restores the restrained reach');
  assert.equal(restraint.group.getObjectByName('Cartoon forearm and right hand').visible,true);
 }
});

test('drain jet starts at the outlet and falls to the actual pool origin',()=>{
 const outlet=new THREE.Object3D();outlet.position.set(-1,.23,1.4);outlet.rotation.y=.5;outlet.updateMatrixWorld();
 const jet=createDrainJet(outlet,()=>0,new THREE.MeshStandardMaterial());jet.update(0,1);
 const positions=jet.mesh.geometry.attributes.position,center=new THREE.Vector3(),v=new THREE.Vector3();
 for(const [start,expected] of [[0,outlet.position],[positions.count-11,jet.origin]]){
  center.set(0,0,0);for(let i=0;i<10;i++)center.add(v.fromBufferAttribute(positions,start+i));center.multiplyScalar(.1);
  // The lower stream has a very small animated wobble.
  assert.ok(center.distanceTo(expected)<.004);
 }
 assert.ok(jet.origin.z>outlet.position.z);assert.ok(jet.origin.y<outlet.position.y);
});

test('acid contact, widening source pool and restart remain consistent',()=>{
 const flow=createAcidFlow(),viewer={x:0,z:2};assert.equal(flow.open(0,{x:0,y:0,z:0},0,true),false);
 flow.open(0,{x:0,y:0,z:0},0);
 for(let tick=1;tick<=90;tick++)flow.update(tick/30,1/30,viewer);
 assert.equal(flow.dying,false);assert.ok(flow.leaks[0].points[0].radius>.30);
 assert.ok(flow.leaks[0].points.some(p=>p.x<-.3)&&flow.leaks[0].points.some(p=>p.x>.3),'pool spreads on both sides');
 let finished=false;for(let tick=91;tick<300;tick++)finished=flow.update(tick/30,1/30,viewer)||finished;
 assert.equal(finished,true);assert.equal(flow.finished,true);
 flow.reset();assert.equal(flow.leaks.length,0);assert.equal(flow.dying,false);assert.equal(flow.blackout(100),0);
});
