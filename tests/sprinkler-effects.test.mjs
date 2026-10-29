import test from 'node:test';
import assert from 'node:assert/strict';
import * as THREE from '../dist/vendor/three.module.js';
import {createCeilingSprinklers} from '../dist/ceiling-sprinklers.js';
import {createFireAlarm} from '../dist/fire-alarm.js';
import {createLaptopSizzle} from '../dist/laptop-sizzle.js';
import {createTankLeaks} from '../dist/tank-leaks.js';
import {createOfficeFire} from '../dist/office-fire.js';

test('dense sprinkler spray remains batched, above the floor, and clears on reset',()=>{
 const sprinkler=createCeilingSprinklers({floorSupport:()=>.08,pipeMaterial:new THREE.MeshStandardMaterial()});
 sprinkler.update(1,1);
 const drops=sprinkler.group.getObjectByName('Sprinkler droplets falling from ceiling deflectors'),splashes=sprinkler.group.getObjectByName('Sprinkler splashes on the floor');
 assert.ok(drops.geometry.attributes.position.count>=960);assert.ok(drops.material.opacity>.6);assert.ok(splashes.count>=80);
 const a=drops.geometry.attributes.position.array;assert.ok([...a].every(Number.isFinite));for(let i=1;i<a.length;i+=3)assert.ok(a[i]>=.091);
 sprinkler.update(3,1,true);const still=[...a];sprinkler.update(7,1,true);assert.deepEqual([...a],still,'reduced motion holds spray still');
 sprinkler.update(8,0);assert.equal(drops.visible,false);assert.equal(splashes.visible,false);
 const water=sprinkler.group.getObjectByName('Standing sprinkler water across the office floor');assert.equal(water.visible,true);assert.ok(water.material.opacity>.1);
 sprinkler.update(30,0);assert.equal(water.visible,true,'standing water persists after the spray shuts off');
 sprinkler.update(31,1);sprinkler.reset();assert.equal(drops.visible,false);assert.equal(splashes.visible,false);assert.equal(water.visible,false);assert.equal(water.material.opacity,0);
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

test('the fire alarm extinguishes flames and stops spraying while floor acid stays green and lethal',()=>{
 const previous=globalThis.document;
 const context=new Proxy({}, {get(_,key){return key==='createRadialGradient'?()=>({addColorStop(){}}):()=>{};},set(){return true;}});
 globalThis.document={createElement:()=>({getContext:()=>context})};
 try{
  const outlet=new THREE.Object3D();outlet.position.set(0,.15,0);outlet.updateMatrixWorld();
  const leaks=createTankLeaks({valves:[{outlet,setOpen(){}}],floorSupport:()=>0}),viewer={x:0,z:.1},camera=new THREE.PerspectiveCamera();camera.position.set(0,.8,1);
  leaks.open(0,0);leaks.update(2,.016,viewer,camera,false,{protectedFromAcid:true});
  const contact=new THREE.Vector3().copy(leaks.leaks[0].origin),charging={energized:true,cablePoints:[contact],meltCable(){}};
  const fire=createOfficeFire({chargingKit:charging,acidLeaks:leaks,floorSupport:()=>0,pipeMaterial:new THREE.MeshStandardMaterial()});
  fire.update(2,.016,viewer,camera);fire.update(3.5,.016,viewer,camera);assert.equal(fire.phase,'burning');
  const laptop={object:new THREE.Group(),damageWater(){throw new Error('successful fire suppression must not destroy the laptop');}};
  const alarm=createFireAlarm({fireHazard:fire,acidLeaks:leaks,laptop,floorSupport:()=>0});assert.equal(alarm.pull(3.6),'fire');assert.equal(leaks.neutralized,false);
  for(let t=3.8;t<15;t+=.05){assert.equal(leaks.update(t,.05,viewer,camera,false,{protectedFromAcid:true}),false);assert.equal(fire.update(t,.05,viewer,camera),false);assert.equal(alarm.update(t,camera),false);}
  assert.equal(fire.phase,'extinguished');assert.equal(leaks.dying,false);
  const pool=leaks.group.getObjectByName('Continuous reflective acid film');assert.equal(pool.material.color.getHex(),0x637c23);assert.notEqual(pool.material.emissive.getHex(),0);
  assert.ok(leaks.group.getObjectByName('Smoke rising from corroding surfaces').count>0);
  assert.equal(fire.group.getObjectByName('Sprinkler droplets falling from ceiling deflectors').visible,false);
  assert.equal(fire.group.getObjectByName('Standing sprinkler water across the office floor').visible,true);
  leaks.update(16,.05,viewer,camera);assert.equal(leaks.dying,true,'stepping off the chair after the sprinkler cycle is still fatal');
  leaks.reset();fire.reset();assert.equal(leaks.neutralized,false);assert.equal(pool.material.color.getHex(),0x637c23);assert.equal(fire.group.getObjectByName('Standing sprinkler water across the office floor').visible,false);
 }finally{globalThis.document=previous;}
});
