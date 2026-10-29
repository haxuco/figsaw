import test from 'node:test';
import assert from 'node:assert/strict';
import * as THREE from '../dist/vendor/three.module.js';
import {chooseRenderQuality} from '../dist/render-quality.js';
import {batchStaticScenery} from '../dist/static-batching.js';
import {createKetchupKeyState} from '../dist/ketchup-key-state.js';
import {createRestraintState} from '../dist/restraint-state.js';
import {createFrameRateCounter} from '../dist/frame-rate.js';
import {createFloorSupport} from '../dist/floor-contact.js';

test('FPS reports rendered cadence and real stalls, throttles DOM writes and resets across pauses',()=>{
 let text='',writes=0;const node={set textContent(value){text=value;writes++;}},counter=createFrameRateCounter(node);
 for(let frame=0;frame<=60;frame++)counter.frame(frame*1000/60);
 assert.equal(text,'60 FPS');assert.ok(writes<=3,'no per-frame DOM changes');
 counter.reset();assert.equal(text,'— FPS');for(let frame=0;frame<=30;frame++)counter.frame(2000+frame*1000/30);assert.equal(text,'30 FPS');
 counter.reset();counter.frame(4000);counter.frame(8000);assert.equal(text,'<1 FPS');counter.reset();counter.frame(12000);assert.equal(text,'— FPS');for(let frame=1;frame<=60;frame++)counter.frame(12000+frame*1000/60);assert.equal(text,'60 FPS');
});

test('spatial floor lookup matches transformed carpet edges, overlaps and bare concrete',()=>{
 const group=new THREE.Group();group.position.set(-.31,0,.42);group.rotation.y=.27;
 const patches=[];for(let i=0;i<14;i++){const p=new THREE.Mesh(new THREE.BoxGeometry(.3+(i%3)*.2,.012,.3+(i%4)*.16));p.position.set((i%4)*.45-1.2,.007+(i%2)*.012,Math.floor(i/4)*.52-.9);p.rotation.y=i*.17;group.add(p);patches.push(p);}
 const support=createFloorSupport(patches),v=new THREE.Vector3();
 const reference=patches.map(p=>({inverse:p.matrixWorld.clone().invert(),width:p.geometry.parameters.width/2,depth:p.geometry.parameters.depth/2,top:p.getWorldPosition(new THREE.Vector3()).y+.006}));
 for(let x=-2;x<=2;x+=.043)for(let z=-2;z<=2;z+=.047){let expected=.003;for(const r of reference){v.set(x,0,z).applyMatrix4(r.inverse);if(Math.abs(v.x)<=r.width&&Math.abs(v.z)<=r.depth)expected=Math.max(expected,r.top);}assert.equal(support(x,z),expected);}
 assert.equal(support(100,-100),.003);assert.equal(createFloorSupport()(0,0),.003);
});

test('mobile simplification before batching merges unused PBR variations and retains colours',async()=>{
 const {useMobileMaterials}=await import('../dist/scene-budget.js'),root=new THREE.Group(),geometry=new THREE.BoxGeometry(.1,.1,.1);
 const colors=[0xff0000,0x00ff00,0x0000ff];
 colors.forEach((color,i)=>{const mesh=new THREE.Mesh(geometry,new THREE.MeshStandardMaterial({color,roughness:i*.4,metalness:i*.3}));mesh.position.x=i*.15;root.add(mesh);});
 useMobileMaterials(root,chooseRenderQuality({coarse:true}));assert.equal(batchStaticScenery(root,{palette:true}).batches,1);
 const batch=root.children[0];for(let i=0;i<3;i++)assert.equal(new THREE.Color().fromBufferAttribute(batch.geometry.attributes.color,i*24).getHex(),colors[i]);
});

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
 assert.equal(low.pixelRatio,.7);assert.ok(low.minPixelRatio<=.7);
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
 key.pour(1);key.update(3.3);assert.equal(key.collect(),false);
 key.update(4.5);assert.equal(key.collect(),true);assert.equal(cuff.detach(4.5),true);
 assert.equal(cuff.sample(4.8).handFree,0);assert.ok(cuff.sample(5.1).hingeOpen>.99);
 assert.equal(cuff.requestReach(6),true);assert.equal(cuff.sample(6.6).openLaptop,true);
 key.reset();cuff.reset();assert.equal(cuff.detach(10),false);
});

test('portrait and landscape buffers stay under the mobile pixel budget',async()=>{
 const {drawingPixelRatio}=await import('../dist/render-quality.js');
 const quality=chooseRenderQuality({mobileHint:true,dpr:3,width:1024});
 assert.equal(quality.mobile,true);assert.equal(quality.shadows,false);
 for(const [w,h]of[[390,844],[844,390],[1366,1024],[2800,1800]]){
  const dpr=drawingPixelRatio(quality,w,h);assert.ok(w*h*dpr*dpr<=quality.maxPixels+1);assert.ok(dpr<=1);
 }
 assert.equal(chooseRenderQuality({safe:true}).mobile,true);
});

test('palette batching keeps different colours, ray hits and independently moving roots',()=>{
 const root=new THREE.Group(),geometry=new THREE.BoxGeometry(.4,.4,.4);
 const colours=[0xff0000,0x00ff00,0x0000ff];
 for(let i=0;i<3;i++){const mesh=new THREE.Mesh(geometry,new THREE.MeshLambertMaterial({color:colours[i]}));mesh.position.set(i*.5,0,0);root.add(mesh);}
 root.userData.hoistIndex=0;
 const before=new THREE.Box3().setFromObject(root,true);
 assert.equal(batchStaticScenery(root,{palette:true,allowInteractiveRoot:true}).batches,1);
 const batch=root.children[0],colour=batch.geometry.attributes.color;
 assert.equal(batch.material.vertexColors,true);assert.ok(batch.geometry.index.array instanceof Uint16Array);
 for(let i=0;i<3;i++){const actual=new THREE.Color().fromBufferAttribute(colour,i*24);assert.equal(actual.getHex(),colours[i]);}
 root.position.y=2;root.rotation.y=.4;root.updateMatrixWorld(true);
 assert.ok(new THREE.Box3().setFromObject(root,true).min.y>before.max.y);
 assert.equal(root.userData.hoistIndex,0);
 const hit=new THREE.Raycaster(new THREE.Vector3(0,4,0),new THREE.Vector3(0,-1,0)).intersectObject(root)[0];assert.ok(hit);
});

test('mobile material simplification preserves live screen fades, clipping and acid hooks',async()=>{
 const {useMobileMaterials}=await import('../dist/scene-budget.js');
 const scene=new THREE.Scene(),source=new THREE.MeshPhysicalMaterial({color:0xff0000,emissive:0x112233,emissiveIntensity:.8,transparent:true,opacity:.7});
 const plane=new THREE.Plane();source.clippingPlanes=[plane];const hook=()=>{};source.onBeforeCompile=hook;
 const mesh=new THREE.Mesh(new THREE.BoxGeometry(),source);scene.add(mesh);useMobileMaterials(scene,chooseRenderQuality({coarse:true}));
 assert.equal(mesh.material.isMeshLambertMaterial,true);assert.equal(mesh.material.clippingPlanes[0],plane);assert.equal(mesh.material.onBeforeCompile,hook);
 source.color.setHex(0x00ff00);source.opacity=.25;source.emissiveIntensity=.1;
 assert.equal(mesh.material.color.getHex(),0x00ff00);assert.equal(mesh.material.opacity,.25);assert.equal(mesh.material.emissiveIntensity,.1);
});
