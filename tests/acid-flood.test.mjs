import test from 'node:test';
import assert from 'node:assert/strict';
import * as THREE from '../dist/vendor/three.module.js';
import {createAcidFlow,BREACHED_TANK_RESIDUAL} from '../dist/acid-flow.js';
import {createDrainJet} from '../dist/acid-surface.js';
import {createFigpalVats} from '../dist/figpal-vats.js';

const far={x:20,z:20},source={x:0,y:.01,z:0};
test('the real liquid surface and meniscus fall with the initial gush, reaching the heel in under two seconds',()=>{
 const previous=globalThis.document,previousPath=globalThis.Path2D,gradient={addColorStop(){}};
 const ctx=new Proxy({createRadialGradient:()=>gradient,createLinearGradient:()=>gradient,measureText:()=>({width:50})},{get:(t,k)=>k in t?t[k]:()=>{}});
 globalThis.Path2D=class {};globalThis.document={createElement:()=>({width:0,height:0,getContext:()=>ctx}),createElementNS:()=>({addEventListener(){},removeEventListener(){},set src(value){}})};
 try{
  const vats=createFigpalVats({floorSupport:()=>0}),flow=createAcidFlow();vats.bindRescue(null,flow);vats.update(0);
  const vat=vats.rigs[0].vat,surface=vat.getObjectByName('Tank acid surface'),rim=vat.getObjectByName('Tank acid meniscus'),volume=vat.getObjectByName('Tank acid volume');
  const full=surface.position.y;vats.tanks[0].break(0);flow.breach(0,source,0);
  for(let tick=1;tick<=40;tick++){
   const t=tick/20;flow.update(t,.05,far);vats.update(t);
   if(t===1)assert.ok(surface.position.y<full-.50,'the surface drops by over half a meter in the first second');
   assert.ok(Math.abs(rim.position.y-surface.position.y-.001)<1e-8);
  }
  assert.ok(surface.position.y<.40);assert.equal(volume.scale.y,BREACHED_TANK_RESIDUAL);assert.equal(flow.outflowFinished(0),true);
  assert.equal(vat.getObjectByName('Tank acid surface').visible,true,'the residual heel remains visible for the rescue puzzle');
 }finally{globalThis.document=previous;globalThis.Path2D=previousPath;}
});
test('broken glass surges immediately, floods in every direction and stops above the retained heel',()=>{
 const flood=createAcidFlow(),valve=createAcidFlow();flood.breach(0,source,0);valve.open(0,source,0);
 for(let t=.05;t<=8;t+=.05){
  flood.update(t,.05,far);valve.update(t,.05,far);
  if(Math.abs(t-.2)<.001){assert.ok(flood.leaks[0].pouring>.9);assert.equal(valve.leaks[0].points.length,0);}
  if(Math.abs(t-1)<.001)assert.ok(flood.remaining(0)<.40,'most of the releasable acid leaves in the first second');
  if(Math.abs(t-2)<.001){
   assert.equal(flood.remaining(0),BREACHED_TANK_RESIDUAL,'the large opening reaches its residual level within two seconds');
   assert.equal(flood.outflowFinished(0),true);
   assert.ok(flood.leaks[0].points.length>valve.leaks[0].points.length*4);
   const points=flood.leaks[0].points;
   for(const axis of ['x','z'])assert.ok(points.some(p=>p[axis]>1)&&points.some(p=>p[axis]<-1));
  }
 }
 assert.equal(flood.remaining(0),BREACHED_TANK_RESIDUAL);assert.equal(flood.outflowFinished(0),true);
 assert.equal(flood.leaks[0].pouring,0);assert.equal(flood.leaks[0].points.length,180);
 assert.equal(valve.outflowFinished(0),false,'valves retain their slower drainage');
});

test('an already leaking tank begins a fresh surge without refilling or jumping its flood clock on undo',()=>{
 const flow=createAcidFlow();flow.open(0,source,0);flow.update(10,.1,far);
 const before=flow.remaining(0),pool=flow.leaks[0].points.length;
 flow.breach(0,{x:.2,y:.01,z:.2},10);flow.update(10.2,.1,far);
 assert.ok(flow.leaks[0].pouring>.65);assert.ok(flow.remaining(0)<before);
 assert.ok(flow.leaks[0].points.length>pool);assert.equal(flow.leaks[0].progress,1,'the open valve does not close during the upgrade');
 const saved=flow.capture(10.2),restored=createAcidFlow();restored.restore(saved,100);
 flow.update(10.7,.1,far);restored.update(100.5,.1,far);
 assert.ok(Math.abs(flow.remaining(0)-restored.remaining(0))<1e-10);
 assert.equal(flow.leaks[0].points.length,restored.leaks[0].points.length);
 flow.update(20,.1,far);assert.equal(flow.remaining(0),BREACHED_TANK_RESIDUAL);
});

test('breach geometry is a broad thick sheet with a wider landing, not a scaled pipe stream',()=>{
 const outlet=new THREE.Object3D();outlet.position.set(-1,.4,1);outlet.rotation.y=.8;outlet.updateMatrixWorld();
 const material=new THREE.MeshStandardMaterial(),flood=createDrainJet(outlet,()=>0,material,{breach:true}),valve=createDrainJet(outlet,()=>0,material);
 const across=new THREE.Vector3(1,0,0).applyQuaternion(outlet.quaternion),p=new THREE.Vector3();
 function span(jet,start){const values=[];for(let i=0;i<10;i++)values.push(p.fromBufferAttribute(jet.mesh.geometry.attributes.position,start+i).dot(across));return Math.max(...values)-Math.min(...values);}
 assert.ok(span(flood,0)>.50);assert.ok(span(flood,0)>span(valve,0)*10);
 assert.ok(span(flood,220)>span(flood,0)*1.4);
 assert.ok(flood.origin.distanceTo(outlet.position)>valve.origin.distanceTo(outlet.position));
 for(const strength of [0,.05,.5,1]){
  flood.update(3,strength);
  for(const attr of ['position','normal'])assert.ok([...flood.mesh.geometry.attributes[attr].array].every(Number.isFinite));
 }
 flood.mesh.geometry.dispose();valve.mesh.geometry.dispose();material.dispose();
});
