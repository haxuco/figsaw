import test from 'node:test';
import assert from 'node:assert/strict';
import * as THREE from '../dist/vendor/three.module.js';
import {createChairSeat} from '../dist/chair-seat.js';
import {createAcidFlow} from '../dist/acid-flow.js';

function fixture(){
 const position=new THREE.Vector3(1.85,.82,3.11),state={yaw:.8,pitch:-.1,zoom:.78};
 const chair=createChairSeat({position,state,getView(eye,target){eye.set(-.3,1.36,3.35);target.set(.7,.12,1.25);}});
 return {position,state,chair};
}
test('the chair requires a free wrist and cannot undo fatal acid contact',()=>{
 const {chair,position}=fixture(),home=position.clone();
 assert.equal(chair.sit(0,{locked:true}),false);
 assert.equal(chair.sit(0,{dying:true}),false);
 chair.update(5);assert.ok(position.equals(home));assert.equal(chair.protectedFromAcid,false);
 assert.equal(chair.sit(6),true);assert.equal(chair.sit(6),false);
 assert.equal(chair.leave(6),false,'cannot interrupt a climb');
});
test('sitting lifts the viewpoint and leaves panning free after the transition',()=>{
 const {chair,position,state}=fixture();chair.sit(0);chair.update(.55);
 assert.equal(chair.moving,true);assert.ok(position.y>1.3);assert.equal(chair.protectedFromAcid,true);
 chair.update(1.2);assert.equal(chair.seated,true);assert.equal(chair.moving,false);
 assert.ok(position.distanceTo(new THREE.Vector3(-.3,1.36,3.35))<1e-9);
 state.yaw=2;state.pitch=-.7;chair.update(3);assert.equal(state.yaw,2);assert.equal(state.pitch,-.7);
});
test('acid keeps spreading under the occupied chair without ending the game',()=>{
 const {chair}=fixture(),flow=createAcidFlow();chair.sit(0);chair.update(1.2);
 flow.open(0,{x:-.3,y:0,z:3.35},1.3);flow.open(1,{x:-1,y:0,z:2.5},1.3);
 for(let tick=42;tick<900;tick++)assert.equal(flow.update(tick/30,1/30,chair.hazardPosition,{protectedFromAcid:chair.protectedFromAcid}),false);
 assert.equal(flow.dying,false);assert.equal(flow.blackout(30),0);
 assert.ok(flow.leaks.every(leak=>leak.points.length>0));
 assert.ok(flow.leaks[0].points[0].radius>.35,'the acid remains live beneath the seat');
});
test('inspecting from the chair does not move the physical player or remove protection',()=>{
 const {chair,position}=fixture();chair.sit(0);chair.update(2);
 const seatedBody=chair.hazardPosition.clone();position.set(-2,.05,-2);chair.update(4);
 assert.ok(chair.hazardPosition.equals(seatedBody));assert.equal(chair.protectedFromAcid,true);
});
test('climbing down restores the floor pose and exposes the player to existing acid',()=>{
 for(const reducedMotion of[false,true]){
  const {chair,position,state}=fixture(),home=position.clone(),original={...state},flow=createAcidFlow();
  chair.sit(0);chair.update(2,reducedMotion);
  flow.open(0,{x:home.x,y:0,z:home.z},2);
  for(let tick=61;tick<120;tick++)flow.update(tick/30,1/30,chair.hazardPosition,{protectedFromAcid:chair.protectedFromAcid});
  assert.equal(flow.dying,false);assert.equal(chair.leave(4),true);chair.update(5.2,reducedMotion);
  assert.equal(chair.occupied,false);assert.ok(position.equals(home));for(const key of Object.keys(state))assert.ok(Math.abs(state[key]-original[key])<1e-9);
  flow.update(5.2,1/30,chair.hazardPosition,{protectedFromAcid:chair.protectedFromAcid});assert.equal(flow.dying,true);
  assert.equal(flow.update(6.1,1/30,chair.hazardPosition),true);
 }
});
test('reset removes the chair protection, including mid-transition',()=>{
 for(const elapsed of[.2,2]){
  const {chair}=fixture();chair.sit(0);chair.update(elapsed);chair.reset();
  assert.equal(chair.occupied,false);assert.equal(chair.moving,false);assert.equal(chair.protectedFromAcid,false);assert.equal(chair.leave(3),false);
 }
});
