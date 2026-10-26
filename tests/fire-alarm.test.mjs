import test from 'node:test';
import assert from 'node:assert/strict';
import * as THREE from '../dist/vendor/three.module.js';
import {createFireAlarmState} from '../dist/fire-alarm-state.js';
import {createCableFireState} from '../dist/cable-fire-state.js';
import {createOfficeFire} from '../dist/office-fire.js';
import {createAlarmCamera} from '../dist/alarm-camera.js';

test('an active fire wins over spilled acid and manual water suppresses it',()=>{
 const fire=createCableFireState(),alarm=createFireAlarmState(),viewer={x:3,z:3},contact={x:0,y:.01,z:0};
 for(let t=0;t<=2;t+=1/60)fire.update(t,1/60,{contact,live:true,viewer});
 assert.equal(fire.phase,'burning');
 assert.equal(alarm.pull(2,{fireActive:true,acidSpilled:true}),'fire');
 assert.equal(fire.releaseSprinklers(2),true);
 for(let t=2;t<12;t+=1/30){assert.equal(fire.update(t,1/30,{viewer}),false);assert.equal(alarm.update(t),false);}
 assert.equal(fire.phase,'extinguished');assert.equal(fire.intensity,0);assert.equal(alarm.dying,false);assert.equal(alarm.blackout(12),0);
});

test('acid without fire reacts, while a dry room floods the laptop before game over',()=>{
 for(const [options,outcome,impact] of [[{acidSpilled:true},'acid',1.25],[{},'laptop',1.8]]){
  const alarm=createFireAlarmState();assert.equal(alarm.pull(10,options),outcome);assert.equal(alarm.dying,true);
  assert.equal(alarm.blackout(10+impact),0);assert.equal(alarm.update(10+impact),false);
  assert.ok(alarm.blackout(10+impact+1.8)>0);
  assert.equal(alarm.update(10+impact+2.4),true);assert.equal(alarm.update(99),false);
  assert.match(alarm.message,/Game over/);
 }
});

test('the shackle gates the alarm; repeated pulls cannot change the outcome; retry clears it',()=>{
 const alarm=createFireAlarmState();assert.equal(alarm.pull(1,{locked:true}),false);assert.equal(alarm.active,false);
 assert.equal(alarm.pull(2,{acidSpilled:true}),'acid');assert.equal(alarm.pull(3,{fireActive:true}),false);assert.equal(alarm.outcome,'acid');
 alarm.reset();assert.equal(alarm.active,false);assert.equal(alarm.dying,false);assert.equal(alarm.blackout(100),0);
 assert.equal(alarm.pull(101,{fireActive:true,acidSpilled:true}),'fire');
});

test('the actual ceiling spray runs without a fire or live cable and resets fully',()=>{
 const fire=createOfficeFire({chargingKit:{energized:false,cablePoints:[]},acidLeaks:{leaks:[]},floorSupport:()=>0,pipeMaterial:new THREE.MeshStandardMaterial()});
 const camera=new THREE.PerspectiveCamera(),viewer={x:1,z:2};
 assert.equal(fire.releaseSprinklers(1),true);fire.update(1.8,.05,viewer,camera,false,true);
 const spray=fire.group.getObjectByName('Sprinkler droplets falling from ceiling deflectors');
 assert.equal(spray.visible,true);assert.ok(spray.material.opacity>.3);assert.equal(fire.phase,'idle');
 fire.update(12,.05,viewer,camera);assert.equal(spray.visible,false);
 fire.reset();assert.equal(fire.sprinklersArmed,false);assert.equal(fire.releaseSprinklers(20),true);
});

test('alarm camera shows the consequence without moving the player across hazards',()=>{
 const position=new THREE.Vector3(1.85,.82,3.11),state={yaw:-2,pitch:0,zoom:.8};
 const camera=createAlarmCamera({position,state});camera.start(10,{x:.45,z:2.18});camera.update(10.2);assert.equal(state.yaw,-2);
 camera.update(12);assert.equal(position.x,1.85);assert.equal(position.z,3.11);assert.equal(position.y,1.2);assert.ok(state.pitch<0);assert.equal(camera.active,false);
 camera.start(13,{x:-2,z:-1});camera.cancel();const yaw=state.yaw;camera.update(20);assert.equal(state.yaw,yaw);
 camera.start(21,{x:.45,z:2.18});camera.update(21,true);assert.equal(camera.active,false);
});
