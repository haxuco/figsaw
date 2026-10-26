import test from 'node:test';
import assert from 'node:assert/strict';
import * as THREE from '../dist/vendor/three.module.js';
import {createCeilingSprinklers} from '../dist/ceiling-sprinklers.js';
import {createFireAlarm} from '../dist/fire-alarm.js';
import {createLaptopSizzle} from '../dist/laptop-sizzle.js';

test('dense sprinkler spray remains batched, above the floor, and clears on reset',()=>{
 const sprinkler=createCeilingSprinklers({floorSupport:()=>.08,pipeMaterial:new THREE.MeshStandardMaterial()});
 sprinkler.update(1,1);
 const drops=sprinkler.group.getObjectByName('Sprinkler droplets falling from ceiling deflectors'),splashes=sprinkler.group.getObjectByName('Sprinkler splashes on the floor');
 assert.ok(drops.geometry.attributes.position.count>=960);assert.ok(drops.material.opacity>.6);assert.ok(splashes.count>=80);
 const a=drops.geometry.attributes.position.array;assert.ok([...a].every(Number.isFinite));for(let i=1;i<a.length;i+=3)assert.ok(a[i]>=.091);
 sprinkler.update(3,1,true);const still=[...a];sprinkler.update(7,1,true);assert.deepEqual([...a],still,'reduced motion holds spray still');
 sprinkler.update(8,0);assert.equal(drops.visible,false);assert.equal(splashes.visible,false);
 sprinkler.update(9,1);sprinkler.reset();assert.equal(drops.visible,false);assert.equal(splashes.visible,false);
});

test('water damage produces sustained steam, repeated sparks and splashes attached to the laptop',()=>{
 const previous=globalThis.document;
 const context=new Proxy({}, {get(_,key){return key==='createRadialGradient'?()=>({addColorStop(){}}):()=>{};},set(){return true;}});
 globalThis.document={createElement:()=>({getContext:()=>context})};
 try{
  const object=new THREE.Group();object.position.set(.45,.03,2.18);object.rotation.y=.98;object.updateMatrixWorld();let damage=0;
  const laptop={object,damageWater(value){damage=value;}};
  const alarm=createFireAlarm({fireHazard:{phase:'idle',releaseSprinklers(){}},acidLeaks:{leaks:[]},laptop,floorSupport:()=>0});
  assert.equal(alarm.pull(10),'laptop');const camera=new THREE.PerspectiveCamera();camera.position.set(1.85,.82,3.11);camera.lookAt(object.position);
  alarm.update(11.4,camera);
  const steam=alarm.effects.getObjectByName('Steam and vapor from sprinkler damage'),sparks=alarm.effects.getObjectByName('Repeated electrical crackles across the wet laptop'),splashes=alarm.effects.getObjectByName('Water bouncing off the laptop');
  assert.ok(steam.count>=24);assert.equal(sparks.visible,true);assert.equal(splashes.visible,true);
  const p=new THREE.Vector3(),positions=splashes.geometry.attributes.position;
  for(let i=0;i<positions.count;i++){object.worldToLocal(p.fromBufferAttribute(positions,i));assert.ok(Math.abs(p.x)<.55);assert.ok(Math.abs(p.z)<.4);assert.ok(p.y>.025&&p.y<.3);}
  alarm.update(13,camera);assert.equal(sparks.visible,true);assert.equal(damage,1);
  alarm.update(13.1,camera,true);assert.equal(sparks.visible,false);
  alarm.reset();assert.equal(steam.count,0);assert.equal(sparks.visible,false);assert.equal(splashes.visible,false);assert.equal(damage,0);
 }finally{globalThis.document=previous;}
});

test('sizzle is optional without audio support and stops cleanly between tries',()=>{
 const absent=createLaptopSizzle({getContext:()=>null});assert.equal(absent.play(),false);absent.stop();
 let stopped=0,start=0,samples;
 const context={currentTime:10,destination:{},resume:()=>Promise.resolve(),createBuffer(channels,count){samples=new Float32Array(count);return {getChannelData:()=>samples};},createBufferSource(){return {connect(){},disconnect(){},start(t){start=t;},stop(){stopped++;}};},createBiquadFilter:()=>({frequency:{},connect(){},disconnect(){}}),createGain:()=>({gain:{setValueAtTime(){},linearRampToValueAtTime(){}},connect(){},disconnect(){}})};
 const audio=createLaptopSizzle({getContext:()=>context});assert.equal(audio.play(),true);assert.equal(start,10.85);assert.ok(samples.some(v=>Math.abs(v)>.1));assert.ok(samples.every(Number.isFinite));audio.stop();assert.equal(stopped,2);audio.stop();assert.equal(stopped,2);
});
