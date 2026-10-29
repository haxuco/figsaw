import test from 'node:test';
import assert from 'node:assert/strict';
import * as THREE from '../dist/vendor/three.module.js';
import {cloneInventoryModel,frameInventoryModel} from '../dist/inventory-models.js';
import {createScissors,createMobileSupplies} from '../dist/mobile-supplies.js';

test('inventory previews reveal collected models without touching world objects or picking volumes',()=>{
 const source=createScissors().group;source.visible=false;source.position.set(7,3,-5);source.rotation.set(1,.5,.3);source.scale.setScalar(.8);
 const target=new THREE.Mesh(new THREE.BoxGeometry(20,20,20),new THREE.MeshBasicMaterial({colorWrite:false,opacity:0}));source.add(target);
 const preview=cloneInventoryModel(source);
 assert.equal(source.visible,false);assert.deepEqual(source.position.toArray(),[7,3,-5]);
 assert.equal(preview.visible,true);assert.deepEqual(preview.position.toArray(),[0,0,0]);assert.equal(preview.children.length,source.children.length-1);
 const original=source.children[0].children[0],copy=preview.children[0].children[0];
 assert.equal(copy.geometry,original.geometry);assert.notEqual(copy.material,original.material);
 copy.material.color.setHex(0xff0000);assert.notEqual(copy.material.color.getHex(),original.material.color.getHex());
 const bounds=new THREE.Box3().setFromObject(frameInventoryModel(preview,[.12,-.3,-.55]));
 assert.ok(bounds.getCenter(new THREE.Vector3()).length()<1e-6);
 const size=bounds.getSize(new THREE.Vector3());assert.ok(size.x<=2.23&&size.y<=1.651);
});

test('Supplies contains only the mobile repair kit, whose model fits the inventory card',()=>{
 const drawer=new THREE.Group(),{objects:tools}=createMobileSupplies(drawer);assert.deepEqual(Object.keys(tools),['mobileKit']);assert.equal(drawer.children.length,1);
 for(const [id,source]of Object.entries(tools)){
  source.visible=false;
  const preview=frameInventoryModel(cloneInventoryModel(source),[.12,-.3,-.55]);
  const bounds=new THREE.Box3().setFromObject(preview),size=bounds.getSize(new THREE.Vector3());
  assert.ok(!bounds.isEmpty(),id);assert.ok(size.x<=2.23&&size.y<=1.651,id);
  assert.equal(source.visible,false);
 }
});

test('recovered chain previews retain alternating instanced links without sharing instance transforms',()=>{
 const chain=new THREE.InstancedMesh(new THREE.TorusGeometry(.02,.005,4,12),new THREE.MeshStandardMaterial(),3);
 for(let i=0;i<3;i++)chain.setMatrixAt(i,new THREE.Matrix4().compose(new THREE.Vector3(5+i*.035,.03,-3),new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0,1,0),i%2*Math.PI/2),new THREE.Vector3(1,1,1)));
 chain.visible=false;
 const copy=cloneInventoryModel(chain);assert.equal(copy.count,3);assert.notEqual(copy.instanceMatrix,chain.instanceMatrix);
 assert.deepEqual([...copy.instanceMatrix.array],[...chain.instanceMatrix.array]);
 const bounds=new THREE.Box3().setFromObject(frameInventoryModel(copy,[.9,-.15,-.25]));
 assert.ok(bounds.getCenter(new THREE.Vector3()).length()<1e-5);
});
