import test from 'node:test';
import assert from 'node:assert/strict';
import * as THREE from '../dist/vendor/three.module.js';
import {cloneInventoryModel,frameInventoryModel,createInventoryModelPreviews} from '../dist/inventory-models.js';
import {createScissors,createMobileSupplies} from '../dist/mobile-supplies.js';

const deferred=()=>{let resolve,reject;const promise=new Promise((a,b)=>{resolve=a;reject=b;});return {promise,resolve,reject};};
function previewFixture(t){
 const documentBefore=globalThis.document;
 globalThis.document={createElement:()=>({setAttribute(){},getContext:()=>({createImageData:(w,h)=>({data:new Uint8Array(w*h*4)}),putImageData(){}})})};
 t.after(()=>{globalThis.document=documentBefore;});
 const panel={hidden:false},host=()=>({isConnected:true,children:[],closest:()=>panel,replaceChildren(...children){this.children=children;}});
 const compile=deferred(),readback=deferred(),originalTarget={},color=new THREE.Color(0x123456);
 let target=originalTarget,alpha=.7,draws=0,reads=0,compiles=0;
 const renderer={shadowMap:{enabled:true},toneMappingExposure:.8,autoClear:false,getRenderTarget:()=>target,setRenderTarget:value=>{target=value;},getClearColor:out=>out.copy(color),getClearAlpha:()=>alpha,setClearColor:(value,a)=>{color.set(value);alpha=a;},compileAsync(){compiles++;return compile.promise;},render(){draws++;},readRenderTargetPixelsAsync(){reads++;return readback.promise;}};
 const source=new THREE.Mesh(new THREE.BoxGeometry(),new THREE.MeshStandardMaterial()),previews=createInventoryModelPreviews({renderer,getModel:()=>({object:source})});
 const restored=()=>{assert.equal(target,originalTarget);assert.equal(color.getHex(),0x123456);assert.equal(alpha,.7);assert.equal(renderer.shadowMap.enabled,true);assert.equal(renderer.toneMappingExposure,.8);assert.equal(renderer.autoClear,false);};
 return {host,panel,previews,compile,readback,restored,counts:()=>({draws,reads,compiles})};
}

test('async inventory work restores main-scene state before yielding and caches completed previews',async t=>{
 const f=previewFixture(t),host=f.host();f.previews.attach('axe',host);
 const work=f.previews.update();f.restored();assert.equal(f.counts().draws,0);
 f.previews.update();assert.equal(f.counts().compiles,1,'one compilation in flight');
 f.compile.resolve();await Promise.resolve();f.restored();assert.equal(f.counts().reads,1);
 assert.equal(host.children.length,0,'do not display incomplete GPU data');
 f.readback.resolve();await work;f.restored();assert.equal(host.children.length,1);
 const reopened=f.host();f.previews.attach('axe',reopened);assert.equal(reopened.children[0],host.children[0]);assert.equal(f.counts().reads,1);
});

test('cancelled thumbnail work cannot populate stale inventory cards',async t=>{
 const f=previewFixture(t),old=f.host(),next=f.host();f.previews.attach('seat',old);const work=f.previews.update();
 f.previews.clearPending();f.previews.attach('seat',next);f.compile.resolve();await work;
 f.restored();assert.equal(old.children.length,0);assert.equal(f.counts().reads,0);
 const retry=f.previews.update();await Promise.resolve();f.readback.resolve();await retry;
 assert.equal(next.children.length,1);assert.equal(old.children.length,0);
});

test('closing inventory during compilation keeps the thumbnail queued for reopening',async t=>{
 const f=previewFixture(t),host=f.host();f.previews.attach('axe',host);const work=f.previews.update();
 f.panel.hidden=true;f.compile.resolve();await work;assert.equal(f.counts().reads,0);
 f.previews.update();assert.equal(f.counts().compiles,1);
 f.panel.hidden=false;const retry=f.previews.update();await Promise.resolve();
 f.panel.hidden=true;f.readback.resolve();await retry;assert.equal(host.children.length,1,'completed readback may populate a hidden, connected card');
});

test('readback failure restores the scene and leaves the preview retryable',async t=>{
 const f=previewFixture(t),host=f.host(),warn=console.warn;console.warn=()=>{};t.after(()=>{console.warn=warn;});
 f.previews.attach('saw',host);const work=f.previews.update();f.compile.resolve();await Promise.resolve();f.readback.reject(new Error('context lost'));await work;
 f.restored();assert.equal(host.children.length,0);assert.equal(f.counts().reads,1);
 f.previews.attach('saw',host);await f.previews.update();assert.equal(f.counts().compiles,2);
});

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
