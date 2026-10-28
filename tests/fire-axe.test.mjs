import test from 'node:test';
import assert from 'node:assert/strict';
import * as THREE from '../dist/vendor/three.module.js';
import {createFireAxe,createAxeInteraction} from '../dist/fire-axe.js';
import {createTankBreakage} from '../dist/tank-breakage.js';
import {createTankLeaks} from '../dist/tank-leaks.js';
import {batchStaticScenery} from '../dist/static-batching.js';

function fixture(){
 const scene=new THREE.Scene(),axe=createFireAxe(),camera=new THREE.PerspectiveCamera(62,1,.06,35);
 axe.mount.position.set(.4,2.06,4.4);axe.mount.rotation.y=Math.PI;scene.add(axe.mount);
 camera.position.set(1.85,.82,3.11);camera.lookAt(-2,.7,1.45);camera.updateMatrixWorld();
 const floorSupport=(x,z)=>x<0?.016:.055;
 const tanks=Array.from({length:3},(_,i)=>{
  const vat=new THREE.Group();vat.position.set(-2-i*.5,.012,1-i*1.2);vat.rotation.y=.6;scene.add(vat);
  const material=new THREE.MeshStandardMaterial({transparent:true,opacity:.3,side:THREE.DoubleSide});
  const shell=new THREE.Mesh(new THREE.CylinderGeometry(.485,.485,1.02,48,1,true),material),deposits=shell.clone();shell.position.y=deposits.position.y=.72;vat.add(shell,deposits);
  const t=createTankBreakage({vat,shell,deposits,index:i,floorSupport});return Object.assign(t,{vat,shell,deposits});
 });
 const hits=[],interaction=createAxeInteraction({axe,camera,tanks,onBreak:(...args)=>hits.push(args)});scene.add(interaction.group);
 batchStaticScenery(scene,{exclude:[axe.mount,...tanks.map(t=>t.vat),interaction.group],minObjects:2});
 return {scene,axe,camera,tanks,hits,interaction,floorSupport};
}
test('locked wrist cannot take or swing the axe; unlocked strikes break only the chosen tank at impact',()=>{
 const {axe,tanks,hits,interaction}=fixture(),home=axe.object.position.clone();
 assert.equal(interaction.pickUp(0,true),false);assert.equal(interaction.strike(1,0),false);assert.ok(axe.object.position.equals(home));
 assert.equal(interaction.pickUp(1),true);assert.equal(interaction.pickUp(1.1),false);interaction.update(1.6);assert.equal(interaction.phase,'held');
 assert.equal(interaction.strike(1,2,true),false);assert.equal(interaction.strike(1,2),true);assert.equal(interaction.strike(0,2.1),false);
 interaction.update(2.7);assert.equal(hits.length,0);assert.equal(tanks[1].shell.visible,true);
 interaction.update(2.85);assert.deepEqual(hits.map(h=>h[0]),[1]);assert.equal(tanks[1].shell.visible,false);assert.equal(tanks[0].shell.visible,true);assert.equal(tanks[2].shell.visible,true);
 interaction.update(3);interaction.update(4);assert.equal(hits.length,1);assert.equal(interaction.strike(1,4),false);
 assert.equal(interaction.strike(2,4),true);interaction.update(6);assert.deepEqual(hits.map(h=>h[0]),[1,2]);
});
test('the cut is a real hole in the glass, with the rear pane preserved and shards settled on the floor',()=>{
 const {tanks,floorSupport}=fixture(),tank=tanks[0],ray=new THREE.Raycaster();
 tank.break(0);tank.update(2);tank.vat.updateMatrixWorld(true);
 const glass=tank.group.children[0],start=tank.vat.localToWorld(new THREE.Vector3(0,.65,1)),dir=new THREE.Vector3(0,0,-1).transformDirection(tank.vat.matrixWorld);
 ray.set(start,dir);const hits=ray.intersectObject(glass);assert.ok(hits.length>0);assert.ok(hits[0].distance>1.4,'ray passes through front breach and hits the rear pane');
 const shards=tank.group.getObjectByName('Fallen glass shards'),m=new THREE.Matrix4(),p=new THREE.Vector3(),q=new THREE.Quaternion(),scale=new THREE.Vector3();
 for(let i=0;i<shards.count;i++){
  shards.getMatrixAt(i,m);m.decompose(p,q,scale);shards.localToWorld(p);assert.ok(Math.abs(p.y-floorSupport(p.x,p.z)-.004)<1e-6);
  assert.ok(Math.abs(new THREE.Vector3(0,0,1).applyQuaternion(q).y)>.999,'shards lie flat');
 }
 const before=Array.from(shards.instanceMatrix.array);tank.update(50);assert.deepEqual(Array.from(shards.instanceMatrix.array),before);
});
test('held axe follows camera; reduced motion and retry preserve a reusable axe and intact tanks',()=>{
 const {axe,camera,tanks,interaction,hits}=fixture(),home=axe.object.position.clone(),homeQ=axe.object.quaternion.clone();
 interaction.pickUp(0);interaction.update(.1,true);const point=axe.object.position.clone().applyMatrix4(camera.matrixWorld.clone().invert());
 camera.position.x+=1;camera.lookAt(-1,1,-2);camera.updateMatrixWorld();interaction.update(.2);const next=axe.object.position.clone().applyMatrix4(camera.matrixWorld.clone().invert());assert.ok(point.distanceTo(next)<1e-7);
 interaction.strike(0,1);interaction.update(1.15,true);interaction.update(1.5,true);assert.equal(hits.length,1);assert.equal(interaction.active,false);
 interaction.reset();for(const t of tanks)t.reset();assert.equal(axe.object.parent,axe.mount);assert.ok(axe.object.position.equals(home));assert.ok(axe.object.quaternion.angleTo(homeQ)<1e-7);
 assert.equal(interaction.held,false);assert.ok(tanks.every(t=>!t.broken&&t.shell.visible));assert.equal(interaction.pickUp(2),true);
});

function canvasMock(){const gradient={addColorStop(){}};const ctx=new Proxy({createRadialGradient:()=>gradient,createLinearGradient:()=>gradient},{get:(t,k)=>k in t?t[k]:()=>{}});return {width:0,height:0,getContext:()=>ctx};}
test('breach pours from the hole, keeps valves closed, upgrades an existing leak without duplicating it, and resets',()=>{
 const previous=globalThis.document;globalThis.document={createElement:()=>canvasMock()};
 try{
  const {tanks,camera}=fixture(),opened=[0,0,0];const valves=tanks.map((t,i)=>({outlet:t.outlet,setOpen:v=>{opened[i]=v;}}));
  const leaks=createTankLeaks({valves,floorSupport:()=>.02});
  assert.equal(leaks.breach(1,0,tanks[1].outlet,true),false);assert.equal(leaks.active,false);
  assert.equal(leaks.breach(1,0,tanks[1].outlet),true);assert.equal(leaks.breach(1,.1,tanks[1].outlet),false);
  leaks.update(2,.1,{x:1.85,z:3.11},camera);assert.deepEqual(opened,[0,0,0]);assert.equal(leaks.leaks.length,1);
  const stream=leaks.group.getObjectByName('Acid pouring through shattered tank glass'),p=stream.geometry.attributes.position,c=new THREE.Vector3(),v=new THREE.Vector3();
  for(let i=0;i<10;i++)c.add(v.fromBufferAttribute(p,i));c.multiplyScalar(.1);assert.ok(c.distanceTo(tanks[1].outlet.getWorldPosition(v))<1e-6);
  assert.equal(leaks.open(0,3),true);leaks.update(5,.1,{x:1.85,z:3.11},camera);assert.equal(opened[0],1);
  const trail=leaks.leaks[1].points;assert.equal(leaks.breach(0,5,tanks[0].impact),true);assert.equal(leaks.leaks.length,2);assert.equal(leaks.leaks[1].points,trail);
  leaks.reset();assert.equal(leaks.active,false);assert.deepEqual(opened,[0,0,0]);assert.equal(leaks.breach(1,10,tanks[1].outlet),true);
 }finally{globalThis.document=previous;}
});
