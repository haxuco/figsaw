import test from 'node:test';
import assert from 'node:assert/strict';
import * as THREE from '../dist/vendor/three.module.js';
import {createFigsawDeparture,createFigsawCornerReaction,FIGSAW_CORNER_LINE} from '../dist/figsaw-departure.js';
import {createDialogueSpeech} from '../dist/dialogue-speech.js';

function fixture(){
 const path=new THREE.CatmullRomCurve3([[2.45,0,-2.4],[2.05,0,-1.7],[1.05,0,-1.28],[.35,0,-1.1],[.24,0,-.66],[.12,0,.1]].map(p=>new THREE.Vector3(...p)),false,'centripetal');path.arcLengthDivisions=240;
 const model=new THREE.Group(),head=new THREE.Group();model.add(head);
 path.getPointAt(1,model.position);const d=path.getTangentAt(1);model.rotation.y=Math.atan2(d.x,d.z);head.rotation.y=.6;
 return {path,model,head,departure:createFigsawDeparture(path,.26)};
}
test('Figsaw waits for the final line to finish, then holds a three-second reading pause',()=>{
 const {model,head,departure}=fixture(),home=model.position.clone(),yaw=model.rotation.y;
 assert.equal(departure.update(500,model,head),null,'no departure before the monologue schedules it');
 const speech=createDialogueSpeech('Let the games begin...',30),end=speech.startTime+speech.duration;
 departure.schedule(end);departure.schedule(end+100);
 for(const time of[30,end,end+2.99]){assert.equal(departure.update(time,model,head),null);assert.ok(model.position.equals(home));assert.equal(model.rotation.y,yaw);}
 assert.notEqual(departure.update(end+3,model,head),null);assert.equal(departure.active,true);
});
test('he turns around, rides forward along the reversed path, and remains back at the entrance',()=>{
 const {path,model,head,departure}=fixture(),home=model.position.clone();departure.schedule(10);
 const arrivalDistance=path.getLength()/.26;let distance=arrivalDistance;
 departure.update(13,model,head);departure.update(13.6,model,head);assert.equal(departure.finished,false);
 assert.ok(model.position.equals(home));assert.ok(head.rotation.y>0&&head.rotation.y<.6);
 departure.update(14.2,model,head);assert.equal(head.rotation.y,0);
 const forward=new THREE.Vector3(Math.sin(model.rotation.y),0,Math.cos(model.rotation.y));assert.ok(forward.dot(path.getTangentAt(1))<-.999);
 for(let t=14.2;t<=23;t+=.1){
  const next=departure.update(t,model,head);assert.ok(next>=distance-1e-8);distance=next;assert.ok(Number.isFinite(next));assert.equal(model.position.y,0);
 }
 departure.update(30,model,head);assert.equal(departure.finished,true);assert.ok(model.position.distanceTo(path.getPointAt(0))<1e-8);
 assert.ok(Math.abs(departure.update(500,model,head)-arrivalDistance*2)<1e-8);assert.ok(model.position.distanceTo(path.getPointAt(0))<1e-8,'do not snap back into the center');
});
test('retry can schedule a fresh departure and reduced motion retains the reading pause',()=>{
 const {path,model,head,departure}=fixture();departure.schedule(0);departure.update(20,model,head);
 departure.reset();assert.equal(departure.active,false);assert.equal(departure.finished,false);assert.equal(departure.update(40,model,head),null);
 path.getPointAt(1,model.position);departure.schedule(40);
 assert.equal(departure.update(42.99,model,head,true),null);assert.ok(model.position.distanceTo(path.getPointAt(1))<1e-8);
 departure.update(43,model,head,true);assert.equal(departure.active,true);assert.ok(model.position.distanceTo(path.getPointAt(0))<1e-8);
});

test('the corner response is available only after retreat and its shake settles without moving the tricycle',()=>{
 const {path,model,head,departure}=fixture(),reaction=createFigsawCornerReaction(()=>departure.finished);
 assert.equal(reaction.react(0),null);departure.schedule(0);departure.update(5,model,head);assert.equal(reaction.react(5),null);
 departure.update(20,model,head);const position=model.position.clone(),yaw=model.rotation.y;
 const speech=reaction.react(20);assert.deepEqual(speech,createDialogueSpeech(FIGSAW_CORNER_LINE,20));assert.equal(reaction.visible(20),true);
 assert.notEqual(reaction.shake(20.05),0);assert.ok(Math.abs(reaction.shake(20.05))<.09);assert.equal(reaction.shake(20.05,true),0);
 assert.equal(reaction.react(20.2),null,'rapid repeated clicks do not restart the reaction');assert.equal(reaction.shake(21),0);
 for(let t=20;t<22;t+=.1){departure.update(t,model,head);head.rotation.y+=reaction.shake(t);assert.ok(model.position.equals(position));assert.equal(model.rotation.y,yaw);}
 assert.ok(position.distanceTo(path.getPointAt(0))<1e-8);assert.equal(reaction.visible(20+speech.duration+2),false);
 assert.ok(reaction.react(40));reaction.reset();departure.reset();assert.equal(reaction.visible(40),false);assert.equal(reaction.shake(40.05),0);assert.equal(reaction.react(40),null);
});
