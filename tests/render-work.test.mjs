import test from 'node:test';
import assert from 'node:assert/strict';
import * as THREE from '../dist/vendor/three.module.js';
import {separatePickVolumes,createShadowScheduler} from '../dist/render-work.js';
import {createSceneRaycaster} from '../dist/scene-picking.js';
import {createTankFoam} from '../dist/tank-foam.js';

const box=material=>new THREE.Mesh(new THREE.BoxGeometry(1,1,1),material??new THREE.MeshBasicMaterial());
test('invisible click volumes remain clickable without color or shadow submissions',()=>{
 const scene=new THREE.Scene(),camera=new THREE.PerspectiveCamera(),target=box(new THREE.MeshBasicMaterial({colorWrite:false,depthWrite:false,transparent:true,opacity:0})),surface=box();
 target.position.z=-2;target.castShadow=true;surface.position.z=-4;scene.add(target,surface);scene.updateMatrixWorld(true);
 assert.equal(separatePickVolumes(scene),1);
 assert.equal(target.layers.test(camera.layers),false);assert.equal(target.castShadow,false);
 assert.equal(surface.layers.test(camera.layers),true);
 const ray=createSceneRaycaster();ray.set(new THREE.Vector3(),new THREE.Vector3(0,0,-1));
 assert.equal(ray.intersectObject(scene)[0].object,target);
 target.visible=false;assert.equal(ray.intersectObject(scene)[0].object,surface);
});

test('picking prunes hidden branches, respects layer traversal and retains sorted target arrays',()=>{
 const root=new THREE.Group(),hidden=new THREE.Group(),hiddenMesh=box(),front=box(),back=box();
 hidden.visible=false;hidden.add(hiddenMesh);front.position.z=-2;back.position.z=-4;
 let hiddenTests=0;hiddenMesh.raycast=()=>{hiddenTests++;};root.add(back,hidden,front);root.layers.set(3);root.updateMatrixWorld(true);
 const ray=createSceneRaycaster();ray.set(new THREE.Vector3(),new THREE.Vector3(0,0,-1));
 const hits=[];assert.equal(ray.intersectObject(root,true,hits),hits);assert.equal(hits[0].object,front);assert.equal(hiddenTests,0);
 assert.equal(ray.intersectObject(hiddenMesh).length,0,'a child passed directly is hidden by its parent');
 assert.equal(ray.intersectObject(root,false).length,0);
 front.raycast=()=>false;front.add(box());assert.equal(ray.intersectObject(front).length,0,'custom raycasts can suppress recursion');
});

test('shadow refreshes are staggered, initialize both maps and recover after a clock reset',()=>{
 const renderer={shadowMap:{enabled:true,needsUpdate:false}},lights=Array.from({length:2},()=>({castShadow:true,shadow:{autoUpdate:true,needsUpdate:false}}));
 const schedule=createShadowScheduler(renderer,lights,24),consume=()=>{const count=lights.filter(l=>l.shadow.needsUpdate).length;for(const l of lights)l.shadow.needsUpdate=false;return count;};
 assert.equal(schedule.update(0),true);assert.equal(consume(),2);
 assert.equal(schedule.update(.01),false);assert.equal(consume(),0);
 assert.equal(schedule.update(.05),true);assert.equal(consume(),1);
 assert.equal(schedule.update(.10),true);assert.equal(consume(),1);
 assert.equal(schedule.update(0),true);assert.equal(consume(),2);
 renderer.shadowMap.enabled=false;assert.equal(schedule.update(1),false);assert.equal(consume(),0);
});

for(const mobile of [false,true])test(`instanced foam follows liquid height and disappears in dry tanks (${mobile?'mobile':'desktop'})`,()=>{
 const foam=createTankFoam(new THREE.MeshBasicMaterial(),{mobile,random:()=>.5}),matrix=new THREE.Matrix4(),position=new THREE.Vector3(),scale=new THREE.Vector3(),rotation=new THREE.Quaternion();
 assert.equal(foam.mesh.count,mobile?6:24);assert.equal(foam.mesh.castShadow,false);
 foam.update(2,.24);for(let i=0;i<foam.mesh.count;i++){
  foam.mesh.getMatrixAt(i,matrix);matrix.decompose(position,rotation,scale);
  assert.ok(Math.abs(position.y-.24)<1e-6);assert.ok(Math.hypot(position.x,position.z)<.45);assert.ok(scale.y>0&&scale.y<scale.x);
 }
 foam.update(3,0,false);assert.equal(foam.mesh.visible,false);
 foam.update(4,1,true);assert.equal(foam.mesh.visible,true);foam.mesh.getMatrixAt(0,matrix);assert.equal(matrix.elements[13],1);
});
