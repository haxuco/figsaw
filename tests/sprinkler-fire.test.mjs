import test from 'node:test';
import assert from 'node:assert/strict';
import * as THREE from '../dist/vendor/three.module.js';
import {createCableFireState} from '../dist/cable-fire-state.js';
import {createChargingState} from '../dist/charging-state.js';
import {createAcidFlow} from '../dist/acid-flow.js';
import {createOfficeFire} from '../dist/office-fire.js';

const viewer={x:1.85,z:3.11},contact={x:.65,y:.01,z:2.02};
function run(state,end,options,start=0){let finished=false;for(let tick=Math.round(start*60);tick<=end*60;tick++)finished=state.update(tick/60,1/60,options)||finished;return finished;}

test('only live cable contact melts the insulation and starts a spreading fatal fire',()=>{
 const state=createCableFireState();
 run(state,3,{contact,live:false,viewer});assert.equal(state.phase,'idle');
 run(state,6,{live:true,viewer},3);assert.equal(state.phase,'idle');
 state.update(6,1/60,{contact,live:true,viewer});assert.equal(state.phase,'melting');
 run(state,6.8,{live:true,viewer},6);assert.equal(state.phase,'melting');assert.ok(state.melt>0&&state.melt<1);
 assert.equal(run(state,20,{live:true,viewer},6.8),true);assert.equal(state.phase,'dead');assert.ok(state.patches.length>4);assert.equal(state.blackout(20),1);assert.equal(state.water(20),0);
});

test('armed sprinklers stay dry until fire, then suppress it before it reaches the player',()=>{
 const state=createCableFireState();state.activateSprinklers();
 run(state,4,{live:true,viewer});assert.equal(state.phase,'idle');assert.equal(state.water(4),0);
 state.update(4,1/60,{contact,live:true,viewer});
 assert.equal(run(state,6,{live:true,viewer},4),false);assert.equal(state.phase,'burning');
 assert.equal(run(state,7,{live:false,viewer},6),false);assert.equal(state.phase,'extinguishing');assert.ok(state.water(7)>.5);
 assert.equal(run(state,18,{live:false,viewer},7),false);assert.equal(state.phase,'extinguished');assert.equal(state.intensity,0);assert.equal(state.dying,false);assert.equal(state.water(18),0);
 state.reset();assert.equal(state.armed,false);assert.equal(state.phase,'idle');assert.equal(state.patches.length,0);assert.equal(state.melt,0);assert.equal(state.blackout(18),0);
});

test('a burned charging cable stops charging and cannot be reconnected until retry',()=>{
 const charging=createChargingState();charging.use('drawer');charging.use('charger');charging.use('strip');charging.use('laptop');charging.update(10);
 const before=charging.battery;charging.damageCable();charging.update(10);
 assert.equal(charging.phase,'damaged');assert.equal(charging.battery,before);assert.equal(charging.nextAction,null);assert.match(charging.use('laptop'),/burned through/);
 charging.reset();assert.equal(charging.phase,'drawer');assert.equal(charging.battery,8);
});

test('acid reaches the actual cable before ignition; existing acid contact remains lethal',()=>{
 const flow=createAcidFlow(),charging={energized:false,cablePoints:[new THREE.Vector3(contact.x,contact.y,contact.z)],meltCable(p,amount){if(amount===1)this.energized=false;}},acid={leaks:flow.leaks};
 const fire=createOfficeFire({chargingKit:charging,acidLeaks:acid,floorSupport:()=>0,pipeMaterial:new THREE.MeshStandardMaterial()}),camera=new THREE.PerspectiveCamera();camera.position.set(viewer.x,.8,viewer.z);
 flow.open(0,{x:-1,y:0,z:0},0);assert.equal(fire.flowTarget(),undefined);
 charging.energized=true;let ignited=false,ended=false;
 for(let tick=0;tick<1800;tick++){
  const t=tick/60;
  const acidFinished=flow.update(t,1/60,viewer,{target:fire.flowTarget()});
  ended=fire.update(t,1/60,viewer,camera)||ended;
  if(fire.phase!=='idle')ignited=true;
  assert.equal(acidFinished,false,'pool around the cable must not preempt the fire outcome');
 }
 assert.equal(ignited,true);assert.equal(ended,true);assert.equal(charging.energized,false);
 fire.reset();assert.equal(fire.phase,'idle');assert.equal(fire.sprinklersArmed,false);
 const lethal=createAcidFlow();lethal.open(0,{x:0,y:0,z:0},0);let acidDeath=false;
 for(let tick=0;tick<1200;tick++)acidDeath=lethal.update(tick/60,1/60,viewer)||acidDeath;
 assert.equal(acidDeath,true,'without a live cable acid retains its original behavior');
});

test('late sprinkler activation cannot undo an already fatal burn',()=>{
 const state=createCableFireState(),close={x:contact.x+.1,z:contact.z};
 run(state,4.5,{contact,live:true,viewer:close});assert.equal(state.dying,true);
 state.activateSprinklers();assert.equal(run(state,8,{viewer:close},4.5),true);assert.equal(state.phase,'dead');
});
