import test from 'node:test';
import assert from 'node:assert/strict';
import * as THREE from '../dist/vendor/three.module.js';
import {createFigpalTransformation} from '../dist/figpal-transformation.js';
import {createAcidFlow} from '../dist/acid-flow.js';
function fixture(index){
 const scene=new THREE.Group(),hanger=new THREE.Group(),captive=new THREE.Group();scene.add(hanger);hanger.add(captive);hanger.position.set(-2,2,1);
 const skin=new THREE.Mesh(new THREE.BoxGeometry(.4,.4,.4),new THREE.MeshStandardMaterial());captive.add(skin);
 captive.scale.setScalar(.62);const transformation=createFigpalTransformation(captive,index);
 return{scene,hanger,captive,skin,transformation};
}
function visibleVertices(mesh){
 mesh.updateWorldMatrix(true,false);const p=mesh.geometry.attributes.position,plane=mesh.material.clippingPlanes[0],v=new THREE.Vector3();let visible=0;
 for(let i=0;i<p.count;i++){v.fromBufferAttribute(p,i).applyMatrix4(mesh.matrixWorld);if(plane.distanceToPoint(v)>=-1e-6)visible++;}
 return visible;
}
test('a drained, neutralized tank keeps each living Figpal visible throughout lowering and raising',()=>{
 const flow=createAcidFlow();flow.open(0,{x:0,y:0,z:0},0);flow.update(2,.05,{x:10,z:10},{protectedFromAcid:true});flow.neutralize();flow.update(40,.05,{x:0,z:0});assert.equal(flow.remaining(0),0);
 for(let index=0;index<3;index++){
  const f=fixture(index),cut=f.transformation.cutHeight;
  // Reproduce the old frozen-plane symptom before updating a dry frame.
  f.hanger.position.y=.43;assert.equal(visibleVertices(f.skin),0,'a plane left at hanging height clips every skin vertex');
  for(const height of [2,1.7,1.1,.7,.43,.7,1.2,2]){
   f.hanger.position.y=height;f.hanger.rotation.z=Math.sin(height)*.04;
   f.transformation.update(flow.remaining(0)>.0001?1.09:null);
   assert.equal(visibleVertices(f.skin),f.skin.geometry.attributes.position.count);assert.equal(f.captive.visible,true);assert.equal(f.transformation.skeleton.visible,false);assert.equal(f.transformation.transformed,false);assert.equal(f.transformation.cutHeight,cut);
  }
 }
});
test('dry updates retain partial dissolution while keeping both clipping planes attached to a moving hanger',()=>{
 const f=fixture(1);f.transformation.update(2);const cut=f.transformation.cutHeight;
 assert.ok(f.transformation.skeleton.visible);assert.equal(f.transformation.transformed,false);
 for(const height of [1.6,.43,2.4,-.3]){
  f.hanger.position.y=height;f.transformation.update();assert.equal(f.transformation.cutHeight,cut,'no new exposure in an empty tank, even below world zero');
  assert.ok(visibleVertices(f.skin)>0&&visibleVertices(f.skin)<f.skin.geometry.attributes.position.count);
  const skinPlane=f.skin.material.clippingPlanes[0];let bonePlane;f.transformation.skeleton.traverse(o=>{if(o.material&&!bonePlane)bonePlane=o.material.clippingPlanes[0];});
  assert.ok(skinPlane.normal.clone().add(bonePlane.normal).length()<1e-8);assert.ok(Math.abs(skinPlane.constant+bonePlane.constant)<1e-8);
 }
});
test('already dissolved Figpals stay skeletons in an empty tank; a fresh game restores the character',()=>{
 const f=fixture(2);f.transformation.update(3);assert.equal(f.transformation.transformed,true);
 f.hanger.position.y=.43;f.transformation.update();assert.equal(f.captive.visible,false);assert.equal(f.transformation.skeleton.visible,true);
 f.transformation.reset();assert.equal(f.captive.visible,true);assert.equal(f.transformation.skeleton.visible,false);assert.equal(visibleVertices(f.skin),f.skin.geometry.attributes.position.count);
});
