import test from 'node:test';
import assert from 'node:assert/strict';
import * as THREE from '../dist/vendor/three.module.js';
import {visibleLocalBounds,createTestingHighlights} from '../dist/testing-highlights.js';
import {createEquippedModel} from '../dist/equipped-model.js';

test('highlight bounds exclude invisible pick targets and hidden model pieces, while following world movement',()=>{
 const root=new THREE.Group(),model=new THREE.Mesh(new THREE.BoxGeometry(1,1,1),new THREE.MeshBasicMaterial());root.add(model);
 const pick=new THREE.Mesh(new THREE.BoxGeometry(99,99,99),new THREE.MeshBasicMaterial({colorWrite:false,opacity:0}));root.add(pick);
 const hidden=new THREE.Mesh(new THREE.BoxGeometry(80,80,80));hidden.visible=false;root.add(hidden);root.position.set(4,1,-3);
 const size=visibleLocalBounds(root).getSize(new THREE.Vector3());assert.deepEqual(size.toArray(),[1,1,1]);
 const highlighter=createTestingHighlights({entries:[{object:root,matches:item=>item==='caster'}]});highlighter.update(0,{item:'caster'});assert.deepEqual(highlighter.counts,{interactive:0,matching:1});assert.equal(highlighter.group.children.length,2,'all outlines use just two draw calls');
 const positions=highlighter.group.children[1].geometry.attributes.position;assert.ok(positions.getX(0)>3);root.position.x=10;highlighter.update(1,{item:'caster'});assert.ok(positions.getX(0)>9);
 root.visible=false;highlighter.update(2,{item:'caster'});assert.equal(highlighter.counts.matching,0);root.visible=true;highlighter.update(3,{item:null});assert.equal(highlighter.counts.interactive,1);highlighter.update(4,{enabled:false});assert.equal(highlighter.group.visible,false);
});
test('equipped models follow translation, yaw, pitch and portrait framing without changing or intercepting the world item',()=>{
 const camera=new THREE.PerspectiveCamera(62,1.7,.06,35),source=new THREE.Group(),material=new THREE.MeshStandardMaterial({color:0x884422});source.visible=false;source.position.set(9,2,4);source.add(new THREE.Mesh(new THREE.BoxGeometry(.4,.2,.3),material));
 let calls=0;const held=createEquippedModel({camera,getModel:()=>{calls++;return{object:source,rotation:[.48,-.4,-.12]};}});
 held.update('seat');assert.equal(held.group.visible,true);assert.equal(source.visible,false);assert.deepEqual(source.position.toArray(),[9,2,4]);assert.equal(material.depthTest,true);assert.equal(material.transparent,false);
 const first=camera.worldToLocal(held.group.position.clone());camera.position.set(3,1,-2);camera.rotation.set(.3,1.2,0);camera.updateMatrixWorld(true);held.update('seat');const moved=camera.worldToLocal(held.group.position.clone());assert.ok(moved.distanceTo(first)<1e-8);assert.equal(calls,1,'reuse the existing clone');
 const mesh=held.current.getObjectByProperty('isMesh',true),ray=new THREE.Raycaster();assert.deepEqual(ray.intersectObject(held.group,true),[],'held geometry cannot intercept scene clicks');assert.equal(mesh.material.depthTest,false);assert.equal(mesh.material.transparent,true);
 camera.aspect=.55;camera.updateProjectionMatrix();held.update('seat');const box=new THREE.Box3().setFromObject(held.group),points=[];for(const x of[box.min.x,box.max.x])for(const y of[box.min.y,box.max.y])for(const z of[box.min.z,box.max.z])points.push(new THREE.Vector3(x,y,z).project(camera));
 mesh.updateWorldMatrix(true,false);const vertices=mesh.geometry.attributes.position;for(let i=0;i<vertices.count;i++){const p=new THREE.Vector3().fromBufferAttribute(vertices,i).applyMatrix4(mesh.matrixWorld).project(camera);assert.ok(Math.abs(p.x)<1&&Math.abs(p.y)<1,'portrait equipment fits within the camera');}
 assert.ok(held.group.scale.x<.1,'reduce held size in portrait');held.update(null);assert.equal(held.group.visible,false);held.update('seat',0,false);assert.equal(held.group.visible,false);held.update('axe');assert.equal(held.group.visible,false,'preserve the real axe animation');assert.equal(held.cachedCount,1);
});

test('testing click targets select the nearest matching object and disappear when testing is disabled',()=>{
 const near=new THREE.Mesh(new THREE.BoxGeometry(.3,.3,.3)),far=near.clone();near.position.z=-1;far.position.z=-3;
 const highlighter=createTestingHighlights({entries:[{object:far,matches:()=>true},{object:near,matches:()=>true}]}),ray=new THREE.Raycaster(new THREE.Vector3(),new THREE.Vector3(0,0,-1));
 highlighter.update(0,{item:'seat'});assert.equal(highlighter.pickMatching(ray).object,near);
 near.visible=false;highlighter.update(1,{item:'seat'});assert.equal(highlighter.pickMatching(ray).object,far);
 highlighter.update(2,{enabled:false});assert.equal(highlighter.pickMatching(ray),null);
});

test('wireframe layers toggle independently and immediately without disabling diagnostic target picking',()=>{
 const target=new THREE.Mesh(new THREE.BoxGeometry(.3,.3,.3)),other=target.clone();target.position.z=-1;other.position.x=2;
 const highlighter=createTestingHighlights({entries:[{object:target,matches:item=>item==='seat'},{object:other}]}),ray=new THREE.Raycaster(new THREE.Vector3(),new THREE.Vector3(0,0,-1));
 const [interactive,matching]=highlighter.group.children;
 highlighter.update(0,{item:'seat'});assert.deepEqual(highlighter.counts,{interactive:1,matching:1});
 highlighter.update(.01,{item:'seat',showInteractive:false});assert.equal(interactive.visible,false);assert.equal(matching.visible,true);
 highlighter.update(.02,{item:'seat',showMatching:false});assert.equal(interactive.visible,true);assert.equal(matching.visible,false);
 highlighter.update(.03,{item:'seat',showInteractive:false,showMatching:false});assert.equal(interactive.visible,false);assert.equal(matching.visible,false);assert.equal(highlighter.pickMatching(ray).object,target);
 highlighter.update(.04,{enabled:false});assert.equal(highlighter.group.visible,false);assert.equal(highlighter.pickMatching(ray),null);
 highlighter.update(.05,{item:'seat'});assert.equal(highlighter.group.visible,true);assert.equal(interactive.visible,true);assert.equal(matching.visible,true);
});
