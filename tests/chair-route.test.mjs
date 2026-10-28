import test from 'node:test';
import assert from 'node:assert/strict';
import * as THREE from '../dist/vendor/three.module.js';
import {createChairRoute,CHAIR_RADIUS,CHAIR_GAP} from '../dist/chair-route.js';

test('a rolling chair detours around a tank instead of following the old intersecting straight line',()=>{
 const from=new THREE.Vector3(-2,.01,0),to=new THREE.Vector3(2,.01,0),tank={x:0,z:0,radius:.61};
 assert.equal(from.clone().lerp(to,.5).length(),.01,'the old midpoint was inside the tank');
 const path=createChairRoute(from,to,[tank]);assert.ok(path);assert.ok(path.length>4);
 const point=new THREE.Vector3();
 for(let i=0;i<=1000;i++){
  path.getPoint(i/1000,point);assert.ok(Math.hypot(point.x,point.z)>=tank.radius+CHAIR_RADIUS+CHAIR_GAP-1e-7);
  assert.ok(Math.abs(point.x)<=3.4&&point.z>=-3.5&&point.z<=3.95);
 }
 assert.deepEqual(path.getPoint(0,point).toArray(),from.toArray());assert.deepEqual(path.getPoint(1,point).toArray(),to.toArray());
});

test('blocked routes never fall back to cutting through a tank or crossing the room walls',()=>{
 const from=new THREE.Vector3(-2,0,0),to=new THREE.Vector3(2,0,0),tank={x:0,z:0,radius:.61};
 assert.equal(createChairRoute(from,to,[tank],{bounds:{minX:-3,maxX:3,minZ:-.9,maxZ:.9}}),null);
 assert.equal(createChairRoute(new THREE.Vector3(0,0,0),to,[tank]),null);
 assert.equal(createChairRoute(from,new THREE.Vector3(4,0,0),[]),null);
 const path=createChairRoute(from,to,[]);assert.equal(path.length,4);
 from.set(10,0,10);to.set(10,0,10);assert.deepEqual(path.getPoint(.5,new THREE.Vector3()).toArray(),[0,0,0],'animation keeps its own endpoints');
});
