import test from 'node:test';
import assert from 'node:assert/strict';
import * as THREE from '../dist/vendor/three.module.js';
import {createKetchupKey} from '../dist/ketchup-key.js';
import {KETCHUP_MOUTH_Y} from '../dist/ketchup-closure.js';
import {createPlayerRestraint} from '../dist/player-restraint.js';
import {createEquippedModel} from '../dist/equipped-model.js';

function fixture(){
 const scene=new THREE.Scene(),bottle=new THREE.Group(),body=new THREE.Group();
 scene.add(bottle);bottle.add(body);body.position.y=-.25;
 bottle.position.set(.98,.08,2.82);bottle.rotation.set(-.25,.45,Math.PI/2);bottle.scale.setScalar(.82);
 const profile=[[0,.004],[.0595,.004],[.0725,.018],[.0765,.051],[.0755,.194],[.0655,.271],[.0455,.346],[.0265,.414],[.026,.469],[0,.469]];
 const contents=new THREE.Mesh(new THREE.LatheGeometry(profile.map(p=>new THREE.Vector2(...p)),48),new THREE.MeshStandardMaterial());body.add(contents);
 const cap=new THREE.Group();cap.position.y=.480;body.add(cap);scene.updateMatrixWorld(true);
 const key=createKetchupKey({bottle,contents,cap,floorSupport:()=>.003});scene.add(key.group);
 return {scene,bottle,body,contents,cap,key};
}

test('ketchup falls vertically from the bottle mouth onto the floor',()=>{
 const {key,body}=fixture();key.pour(0);
 for(const time of [1,1.8,2.6,3.2]){
  key.update(time,false);
  const stream=key.group.getObjectByName('Downward ketchup stream');assert.equal(stream.visible,true);
  const mouth=body.localToWorld(new THREE.Vector3(0,KETCHUP_MOUTH_Y,0));
  const upper=stream.localToWorld(new THREE.Vector3(0,.5,0)),lower=stream.localToWorld(new THREE.Vector3(0,-.5,0));
  assert.ok(upper.distanceTo(mouth)<1e-6,'stream must start at the open neck');
  assert.ok(upper.y>lower.y+.1,'sauce must flow downward');
  assert.ok(Math.hypot(upper.x-lower.x,upper.z-lower.z)<1e-6,'the pool must be directly below the mouth');
  assert.ok(Math.abs(lower.y-.012)<1e-6,'stream must meet the floor puddle');
 }
});

test('ketchup settles at the low neck, with a horizontal surface as it empties',()=>{
 const {key,contents}=fixture();key.pour(0);
 let previous=Infinity;
 for(const time of [1.2,1.8,2.4,3.0]){
  key.update(time,false);contents.updateWorldMatrix(true,false);
  const p=contents.geometry.attributes.position,point=new THREE.Vector3(),heights=[];
  for(let j=0;j<=48;j++)heights.push(point.fromBufferAttribute(p,j*10+1).applyMatrix4(contents.matrixWorld).y);
  const surface=heights[0];
  assert.ok(Math.max(...heights)-Math.min(...heights)<2e-6,'liquid surface must stay level under gravity');
  assert.ok(surface<previous,'liquid must recede downward, not collect at the raised base');previous=surface;
  for(let i=0;i<p.count;i++)assert.ok(point.fromBufferAttribute(p,i).applyMatrix4(contents.matrixWorld).y<=surface+2e-6,'no liquid remains above the free surface');
  assert.equal(contents.scale.y,1,'do not shrink the liquid toward the raised bottle base');
 }
});

test('key lands in the spill and Try again can refill and reseal the bottle',()=>{
 const {key,bottle,contents,cap,body}=fixture();const home=bottle.position.clone(),original=contents.geometry.attributes.position.array.slice();
 key.pour(0);key.update(3.5,false);assert.equal(key.collect(),true);
 assert.equal(contents.visible,false);assert.ok(Math.abs(key.key.position.y-.012)<1e-6);
 key.reset();assert.equal(key.hasKey,false);assert.equal(key.phase,'sealed');assert.equal(contents.visible,true);
 assert.ok(bottle.position.distanceTo(home)<1e-6);assert.equal(cap.parent,body);
 assert.deepEqual(contents.geometry.attributes.position.array,original);
 assert.equal(key.pour(10),true);key.update(11.5,false);assert.equal(key.group.getObjectByName('Downward ketchup stream').visible,true);
});

test('the key can be caught as soon as it appears, and stays collected when pouring finishes',()=>{
 for(const start of [0,30])for(const age of [2.5,2.55,3.39,3.4,4.5]){
  const {key}=fixture();key.pour(start);key.update(start+age,false);
  assert.equal(key.key.visible,true);
  assert.equal(key.collect(start+age),true,`visible key must be collectible at ${age}s`);
  assert.equal(key.key.visible,false,'pickup immediately removes the world target');
  for(const later of [5,10,60]){
   key.update(start+later,false);assert.equal(key.hasKey,true);assert.equal(key.key.visible,false);
   assert.equal(key.collect(start+later),false,'a repeated click cannot collect a duplicate');
  }
 }
});

test('a hidden key cannot be collected, even between updates at the reveal boundary',()=>{
 const {key}=fixture();assert.equal(key.collect(0),false);
 key.pour(10);key.update(12.49,false);
 assert.equal(key.key.visible,false);assert.equal(key.collect(12.49),false);
 assert.equal(key.collect(12.5),true,'pickup checks the current clock, not the previous render');
 key.reset();assert.equal(key.hasKey,false);assert.equal(key.collect(20),false);
});

test('the equipped key stays clear of the entire cuff and never catches clicks, including on narrow phones',()=>{
 const {key}=fixture();
 function screenBounds(root,camera){
  const box=new THREE.Box2(),point=new THREE.Vector3();root.updateWorldMatrix(true,true);
  root.traverse(object=>{if(!object.isMesh)return;const p=object.geometry.attributes.position;
   for(let i=0;i<p.count;i++){point.fromBufferAttribute(p,i).applyMatrix4(object.matrixWorld).project(camera);box.expandByPoint(new THREE.Vector2(point.x,point.y));}
  });return box;
 }
 for(const aspect of [.40,.48,.75,1,1.78,2.4])for(const fov of [48.36,62]){
  const camera=new THREE.PerspectiveCamera(fov,aspect,.06,35),restraint=createPlayerRestraint(camera),equipped=createEquippedModel({camera,getModel:()=>({object:key.key,rotation:[1.15,.15,-.35]})});
  camera.position.set(1.85221,.821615,3.1149);camera.lookAt(1.155084,.748275,2.401713);camera.updateMatrixWorld();restraint.requestReach(0);
  for(const time of [.3,.7,1,2,15]){
   restraint.update(time,false,true,null,0,true);equipped.update('key',time);
   const keyBounds=screenBounds(equipped.group,camera),cuffBounds=screenBounds(restraint.group.getObjectByName('Close-fitting oval wrist cuff'),camera);
   assert.ok(!cuffBounds.clone().expandByScalar(.05).intersectsBox(keyBounds),`key overlaps the unlock target at aspect ${aspect}, FOV ${fov}, time ${time}: key ${keyBounds.min.toArray()} to ${keyBounds.max.toArray()}, cuff ${cuffBounds.min.toArray()} to ${cuffBounds.max.toArray()}`);
   assert.ok(keyBounds.min.x>-1&&keyBounds.max.x<1&&keyBounds.min.y>-.7&&keyBounds.max.y<1,'key stays on screen above the inventory HUD');
   const ray=new THREE.Raycaster();ray.setFromCamera(keyBounds.getCenter(new THREE.Vector2()),camera);assert.equal(ray.intersectObject(equipped.group,true).length,0);
  }
 }
});
