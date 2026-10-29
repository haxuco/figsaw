import test from 'node:test';
import assert from 'node:assert/strict';
import * as THREE from '../dist/vendor/three.module.js';
import {createRescueState} from '../dist/rescue-state.js';
import {createInventory} from '../dist/inventory.js';
import {createChairSeat} from '../dist/chair-seat.js';
import {createChairTow,planChairTow} from '../dist/chair-tow.js';
import {createAcidFlow} from '../dist/acid-flow.js';
import {createRescueChain} from '../dist/rescue-chain.js';

function prepared(pmIndex=2){
 const state=createRescueState({pmIndex}),inventory=createInventory(),survivors=[0,1,2].filter(i=>i!==pmIndex);
 for(const [chair,part]of [[0,'caster'],[1,'seat'],[1,'base']]){inventory.add(part);state.use(chair,part,inventory);}
 survivors.forEach((tank,i)=>state.place(i,tank));inventory.add('chain');inventory.equip('chain');
 return {state,inventory,survivors};
}
test('one spare chain links the three prepared chairs and is consumed only at the final clasp',()=>{
 const {state,inventory}=prepared();
 assert.equal(state.canTow(),false);assert.equal(state.canLink(0),true);
 for(const index of [2,0]){assert.match(state.link(index,inventory),/Chair linked/);assert.equal(inventory.equipped,'chain');}
 assert.equal(state.link(0,inventory),'That chair is already linked.');
 assert.equal(state.link(1,inventory),'All three chairs are linked.');assert.equal(inventory.has('chain'),false);assert.equal(inventory.equipped,null);
 state.noteFlood();assert.equal(state.secured,true);assert.equal(state.canLink(1),false);
 const snapshot=state.capture();state.reset();assert.deepEqual(state.links,[false,false,false]);assert.equal(state.flooded,false);state.restore(snapshot);assert.equal(state.secured,true);
});
test('spilling acid before all three clasps are attached permanently prevents late linking in that attempt',()=>{
 for(const count of [0,1,2]){
  const {state,inventory,survivors}=prepared();for(let i=0;i<count;i++)state.link(i,inventory);
  state.noteFlood();assert.equal(state.secured,false);assert.match(state.link(2,inventory),/flooded/);
  state.reserve(survivors[0],survivors[0]);state.board(survivors[0],survivors[0]);state.finishBoard(survivors[0]);
  assert.equal(state.canTow(),false);state.noteFlood();assert.equal(state.secured,false);
 }
 const {state,inventory}=prepared();state.chairs[0].tank=null;assert.equal(state.canLink(0),false);assert.match(state.link(0,inventory),/not ready/);
});
test('pulling requires a completed landing, and the exit is not complete until all linked chairs pass the door',()=>{
 const {state,inventory,survivors}=prepared();for(let i=0;i<3;i++)state.link(i,inventory);state.noteFlood();
 state.reserve(survivors[0],survivors[0]);state.board(survivors[0],survivors[0]);assert.equal(state.beginTow(),false);
 state.finishBoard(survivors[0]);assert.equal(state.beginExit(),false);assert.equal(state.beginTow(),true);
 assert.equal(state.canBoard(survivors[1],survivors[1]),false,'no new boarding while chairs move away');
 assert.equal(state.beginExit(),false);state.finishTow();assert.equal(state.towPhase,'at-door');
 assert.equal(state.beginExit(),true);assert.notEqual(state.towPhase,'escaped');state.finishExit();assert.equal(state.towPhase,'escaped');
});

const centers=[[-2.65,2.24],[-3,.55],[-3.15,-1.40]],reference=new THREE.Vector3(.78,0,3.22);
function chairScene(ids){
 const chairs=ids.map(i=>{const c=new THREE.Group(),center=new THREE.Vector3(centers[i][0],0,centers[i][1]);c.position.copy(center).addScaledVector(reference.clone().sub(center).normalize(),1.18);return c;});
 const player=new THREE.Group();player.position.set(-.30,0,3.35);chairs.push(player);
 const obstacles=centers.flatMap(([x,z])=>{const yaw=Math.atan2(1.85221-x,3.1149-z),valve=new THREE.Vector3(.30,0,.55).applyAxisAngle(new THREE.Vector3(0,1,0),yaw).add(new THREE.Vector3(x,0,z));return [{x,z,radius:.61},{x:valve.x,z:valve.z,radius:.14}];});return {chairs,obstacles};
}
test('every randomized PM and chair assignment has a clear route to and through the doorway',()=>{
 for(let pm=0;pm<3;pm++)for(const reverse of [false,true]){
  const ids=[0,1,2].filter(i=>i!==pm);if(reverse)ids.reverse();const {chairs,obstacles}=chairScene(ids);
  for(const exit of [false,true]){
   const plan=planChairTow(chairs,obstacles,{exit});assert.ok(plan);
   for(const move of plan){
    for(let j=0;j<=200;j++){
     const p=move.route.getPoint(j/200,new THREE.Vector3());
     for(const obstacle of obstacles)assert.ok(Math.hypot(p.x-obstacle.x,p.z-obstacle.z)>=obstacle.radius+.51-1e-7);
     for(let i=0;i<3;i++)if(i!==move.index)assert.ok(p.distanceTo(chairs[i].position)>=.97-1e-7);
     if(p.z>3.96)assert.ok(Math.abs(p.x+1.20)<.001,'cross the wall only through the actual door');
    }
    chairs[move.index].position.copy(move.to);
   }
  }
  assert.ok(chairs.every(c=>c.position.z>4.9));
 }
});
test('the seated camera follows the lead chair while the acid remains lethal below it',()=>{
 const {state,inventory,survivors}=prepared();for(let i=0;i<3;i++)state.link(i,inventory);state.noteFlood();
 state.reserve(survivors[0],survivors[0]);state.board(survivors[0],survivors[0]);state.finishBoard(survivors[0]);
 const {chairs,obstacles}=chairScene(survivors),tow=createChairTow({chairs,state,tankObstacles:obstacles,floorSupport:()=>0});
 const position=new THREE.Vector3(),view={yaw:0,pitch:0,zoom:1},seat=createChairSeat({position,state:view,getView(eye,target){eye.copy(chairs[2].position).y=1.36;target.set(0,0,0);}});
 seat.sit(0);seat.update(2);const flow=createAcidFlow();flow.breach(0,{x:-1,y:0,z:2},0);
 assert.equal(tow.start(2),true);const parked=chairs[2].position.clone();tow.pause(5);tow.update(7);assert.ok(chairs[2].position.equals(parked),'automatic Figpal close-ups pause the chair movement too');
 for(let t=7;t<20;t+=1/30){const before=chairs[2].position.clone();tow.update(t);seat.translate(chairs[2].position.clone().sub(before));assert.equal(flow.update(t,1/30,seat.hazardPosition,{protectedFromAcid:seat.protectedFromAcid}),false);}
 assert.equal(state.towPhase,'at-door');assert.ok(Math.abs(position.y-1.36)<1e-9);assert.ok(Math.abs(position.x-chairs[2].position.x)<1e-9);assert.equal(flow.neutralized,false);
 assert.equal(tow.start(21,true),true);tow.update(50,true);assert.equal(state.towPhase,'escaped');assert.ok(chairs.every(c=>c.position.z>4.9));
});
test('the floor coil is a real inventory model; attached metal links follow moving chairs without being reallocated',()=>{
 const {state,inventory}=prepared(),{chairs}=chairScene([0,1]),chain=createRescueChain({chairs,state,floorSupport:()=>0});
 inventory.remove('chain');assert.equal(chain.collect(inventory),true);assert.equal(chain.coil.visible,false);assert.equal(chain.collect(inventory),false);inventory.equip('chain');
 for(let i=0;i<3;i++)state.link(i,inventory);chain.update();const links=chain.group.getObjectByName('Metal chain linking the three chairs');assert.ok(links.count>40);const matrix=links.instanceMatrix;
 chairs[0].position.x+=.3;chain.update();assert.equal(links.instanceMatrix,matrix);assert.ok([...matrix.array].every(Number.isFinite));
 state.reset();chain.reset();assert.equal(chain.coil.visible,true);assert.equal(links.count,0);
});
