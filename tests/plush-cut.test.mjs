import test from 'node:test';
import assert from 'node:assert/strict';
import * as THREE from '../dist/vendor/three.module.js';
import {createPlushCut} from '../dist/plush-cut.js';
import {batchStaticScenery} from '../dist/static-batching.js';

function fixture(){
 const room=new THREE.Group(),saw=new THREE.Group();room.position.set(.2,0,-.4);room.add(saw);saw.position.set(1,.02,2);saw.rotation.y=.34;
 const material=new THREE.MeshStandardMaterial(),animals=['Pig','Tiger','Elephant','Fox'].map((kind,i)=>{
  const object=new THREE.Group();object.userData.stuffedAnimal=kind;object.position.set(-.6+i*.4,.05,.5);object.rotation.set(.08,i*.5,-.06);object.scale.setScalar(.88);room.add(object);
  for(let k=0;k<3;k++){const body=new THREE.Mesh(new THREE.SphereGeometry(.08,8,6),material);body.position.set(k*.04,.07,0);object.add(body);}return {object,kind};
 });
 const floorSupport=(x,z)=>x<0?.02:.065;
 const cut=createPlushCut({saw,animals,floorSupport});room.add(cut.group);room.updateMatrixWorld(true);
 for(const animal of animals)batchStaticScenery(animal.object,{minObjects:2});
 batchStaticScenery(room,{exclude:[saw,...animals.map(a=>a.object),cut.group],minObjects:2});
 return {room,saw,animals,cut,floorSupport};
}

test('a toy cut strokes the saw, opens its seam, restores the saw and never triggers a fatal trap',()=>{
 const {saw,animals,cut}=fixture(),home=saw.position.clone(),rotation=saw.quaternion.clone(),toy=animals[0].object;
 assert.equal(cut.start(new THREE.Group(),0),false);assert.equal(cut.start(toy,0),true);assert.equal(cut.start(animals[1].object,.1),false);
 assert.equal(cut.update(.2),false);assert.ok(saw.position.distanceTo(home)>0);
 cut.update(1.3);const first=saw.position.clone();cut.update(1.45);assert.ok(saw.position.distanceTo(first)>.025);
 assert.equal(toy.getObjectByName('Split fabric seam and exposed stuffing').visible,true);
 assert.equal(cut.update(3.6),true);assert.equal(cut.active,false);assert.ok(saw.position.distanceTo(home)<1e-8);assert.ok(saw.quaternion.angleTo(rotation)<1e-7);
 assert.equal(cut.update(5),false);assert.equal(cut.start(toy,6),false);assert.equal(cut.canCut(toy),false);assert.equal(cut.start(animals[1].object,6),true);
});

test('stuffing lands on each actual floor height, remains visible and retry clears every cut',()=>{
 const {room,saw,animals,cut,floorSupport}=fixture();
 for(const [i,a]of animals.entries()){assert.equal(cut.start(a.object,i*5),true);cut.update(i*5+4);}
 const fluff=cut.group.getObjectByName('Loose cotton filling'),matrix=new THREE.Matrix4(),position=new THREE.Vector3(),scale=new THREE.Vector3(),q=new THREE.Quaternion();
 for(let i=0;i<fluff.count;i++){
  fluff.getMatrixAt(i,matrix);matrix.decompose(position,q,scale);fluff.localToWorld(position);
  assert.ok(position.toArray().every(Number.isFinite));assert.ok(scale.x>0);assert.ok(Math.abs(position.y-(floorSupport(position.x,position.z)+scale.y))<1e-6,'cotton rests on concrete or carpet');
 }
 const before=Array.from(fluff.instanceMatrix.array);cut.update(100);assert.deepEqual(Array.from(fluff.instanceMatrix.array),before,'settled stuffing needs no per-frame animation');
 cut.reset();assert.equal(cut.active,false);
 for(const a of animals){assert.equal(cut.canCut(a.object),true);assert.equal(a.object.getObjectByName('Split fabric seam and exposed stuffing').visible,false);}
 for(let i=0;i<fluff.count;i++){fluff.getMatrixAt(i,matrix);matrix.decompose(position,q,scale);assert.equal(scale.length(),0);}
});

test('reduced motion skips repeated strokes and still leaves stuffing and a reusable saw',()=>{
 const {cut,animals,saw}=fixture(),home=saw.position.clone();
 cut.start(animals[2].object,10);cut.update(10.2,true);const pose=saw.position.clone();cut.update(10.25,true);assert.ok(saw.position.distanceTo(pose)<1e-7);
 assert.equal(cut.update(10.6,true),true);assert.ok(saw.position.distanceTo(home)<1e-8);assert.equal(animals[2].object.getObjectByName('Split fabric seam and exposed stuffing').visible,true);
 cut.reset();assert.equal(cut.start(animals[2].object,11),true);
});
