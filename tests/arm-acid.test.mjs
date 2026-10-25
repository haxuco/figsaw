import test from 'node:test';
import assert from 'node:assert/strict';
import * as THREE from '../dist/vendor/three.module.js';
import {solveReachElbow,createReachingForearm} from '../dist/reaching-arm.js';
import {createPlayerRestraint} from '../dist/player-restraint.js';
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

test('hooked fingertip stays on the lid contact in both camera framings',()=>{
 const camera=new THREE.PerspectiveCamera(62,1,.06,35),restraint=createPlayerRestraint(camera);
 restraint.requestReach(0);restraint.update(.8);restraint.detach(1);restraint.requestReach(2);
 const target=new THREE.Vector3(.08,-.12,-.8),rotation=new THREE.Quaternion().setFromEuler(new THREE.Euler(-.3,0,-.1));
 for(const fov of[62,48.36]){
  camera.fov=fov;camera.updateProjectionMatrix();camera.updateMatrixWorld();
  restraint.update(3.5,false,false,{position:target,quaternion:rotation,blend:1,grip:1,reveal:1});
  const tip=restraint.group.getObjectByName('Lid contact fingertip').getWorldPosition(new THREE.Vector3());
  assert.ok(tip.distanceTo(target)<1e-6);
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
 assert.ok(Math.abs(flow.leaks[0].head.x)>.01,'the advancing front gently meanders');
 let finished=false;for(let tick=91;tick<300;tick++)finished=flow.update(tick/30,1/30,viewer)||finished;
 assert.equal(finished,true);assert.equal(flow.finished,true);
 flow.reset();assert.equal(flow.leaks.length,0);assert.equal(flow.dying,false);assert.equal(flow.blackout(100),0);
});
