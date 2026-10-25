import test from 'node:test';
import assert from 'node:assert/strict';
import * as THREE from '../dist/vendor/three.module.js';
import {chooseRenderQuality} from '../dist/render-quality.js';
import {batchStaticScenery} from '../dist/static-batching.js';
import {createKetchupKeyState} from '../dist/ketchup-key-state.js';
import {createRestraintState} from '../dist/restraint-state.js';

test('mobile and low-memory devices get bounded budgets without upscaling low-DPR screens',()=>{
 const desktop=chooseRenderQuality({dpr:3});
 for(const hint of [{coarse:true},{width:390},{cores:4},{memory:4}]){
  const mobile=chooseRenderQuality({...hint,dpr:3});
  assert.equal(mobile.mobile,true);
  assert.ok(mobile.pixelRatio<desktop.pixelRatio);
  assert.ok(mobile.shadowSize<desktop.shadowSize);
  assert.ok(mobile.textureSize<desktop.textureSize);
  assert.equal(mobile.maxFps,30);
 }
 const low=chooseRenderQuality({coarse:true,dpr:.7});
 assert.equal(low.pixelRatio,.7);assert.equal(low.minPixelRatio,.7);
});

function room(){
 const root=new THREE.Group(),geometry=new THREE.BoxGeometry(.4,.4,.4),material=new THREE.MeshStandardMaterial();
 const objects=[.3,1,1.7].map(x=>{const mesh=new THREE.Mesh(geometry,material);mesh.position.set(x,.4,1);root.add(mesh);return mesh;});
 return {root,geometry,material,objects};
}

test('batching preserves world bounds, front-facing ray hits and mirrored geometry',()=>{
 const {root,objects}=room();root.position.set(4,1,-2);root.rotation.y=.4;
 objects[1].scale.x=-1;objects[2].rotation.y=.5;
 const before=new THREE.Box3().setFromObject(root,true),origins=objects.map(mesh=>mesh.getWorldPosition(new THREE.Vector3()).add(new THREE.Vector3(0,3,0)));
 const {removed,batches}=batchStaticScenery(root);assert.equal(removed,3);assert.equal(batches,1);
 const after=new THREE.Box3().setFromObject(root,true);
 assert.ok(before.min.distanceTo(after.min)<1e-6);assert.ok(before.max.distanceTo(after.max)<1e-6);
 assert.equal(root.children[0].geometry.index.count,108);
 for(const origin of origins){
  const hit=new THREE.Raycaster(origin,new THREE.Vector3(0,-1,0)).intersectObject(root)[0];
  assert.ok(hit);assert.ok(Math.abs(hit.distance-2.8)<1e-6);assert.ok(hit.face.normal.y>.99);
 }
});

test('interactive/dynamic objects and transparent surfaces stay separate; shared geometry stays alive',()=>{
 const {root,geometry,material}=room();let disposed=false;geometry.addEventListener('dispose',()=>{disposed=true;});
 const retained=[];
 for(const tag of ['chargingAction','keyAction','hoistIndex','valveIndex']){
  const parent=new THREE.Group();parent.userData[tag]=tag.endsWith('Index')?0:'collect';root.add(parent);
  for(let i=0;i<3;i++)parent.add(new THREE.Mesh(geometry,material));retained.push(parent);
 }
 const moving=new THREE.Group();root.add(moving);for(let i=0;i<3;i++)moving.add(new THREE.Mesh(geometry,material));retained.push(moving);
 const glass=new THREE.MeshStandardMaterial({transparent:true,opacity:.2});
 for(let i=0;i<3;i++){const mesh=new THREE.Mesh(geometry,glass);root.add(mesh);retained.push(mesh);}
 const result=batchStaticScenery(root,{exclude:[moving]});assert.equal(result.removed,3);assert.equal(disposed,false);
 for(const object of retained)assert.equal(object.parent,root);
 for(const object of retained.filter(o=>o.isGroup))assert.equal(object.children.length,3);
});

test('partial draw ranges are not expanded by batching',()=>{
 const {root,geometry}=room();geometry.setDrawRange(0,6);
 assert.deepEqual(batchStaticScenery(root),{removed:0,batches:0});
});

test('key and restraint sequence survives coarse mobile update intervals',()=>{
 const key=createKetchupKeyState(),cuff=createRestraintState({canDetach:()=>key.hasKey});
 assert.equal(cuff.detach(0),false);assert.equal(key.collect(),false);
 key.pour(1);key.update(4.3);assert.equal(key.collect(),false);
 key.update(4.5);assert.equal(key.collect(),true);assert.equal(cuff.detach(4.5),true);
 assert.equal(cuff.sample(4.8).handFree,0);assert.ok(cuff.sample(5.1).hingeOpen>.99);
 assert.equal(cuff.requestReach(6),true);assert.equal(cuff.sample(6.6).openLaptop,true);
 key.reset();cuff.reset();assert.equal(cuff.detach(10),false);
});
