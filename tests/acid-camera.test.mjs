import test from 'node:test';
import assert from 'node:assert/strict';
import * as THREE from '../dist/vendor/three.module.js';
import {createAcidCamera} from '../dist/acid-camera.js';
import {createAcidFlow} from '../dist/acid-flow.js';

function fixture(y=.821615){
 const position=new THREE.Vector3(1.85221,y,3.1149),state={yaw:.77,pitch:-.08,zoom:.78};
 const camera=createAcidCamera({position,state});
 return {position,state,camera};
}
const source={x:-1.7,y:.01,z:1.8};
test('only an open laptop triggers the lift, which clears the lid and frames the approaching acid',()=>{
 const {position,state,camera}=fixture(),home=position.clone();
 assert.equal(camera.start(0,source,false),false);camera.update(2);assert.ok(position.equals(home));
 assert.equal(camera.start(3,source,true),true);camera.update(3.5);
 assert.ok(position.y>home.y&&position.y<1.65);assert.equal(position.x,home.x);assert.equal(position.z,home.z);
 camera.update(4.2);assert.equal(camera.active,false);assert.equal(position.y,1.65);assert.equal(state.zoom,1);assert.ok(state.pitch<-.4);
 const view=new THREE.PerspectiveCamera(62,390/844,.06,35);view.position.copy(position);
 view.lookAt(position.clone().add(new THREE.Vector3(-Math.sin(state.yaw)*Math.cos(state.pitch),Math.sin(state.pitch),-Math.cos(state.yaw)*Math.cos(state.pitch))));view.updateMatrixWorld();
 for(const progress of[.2,.56,.9]){
  const point=new THREE.Vector3(home.x,.035,home.z).lerp(new THREE.Vector3(source.x,.035,source.z),progress).project(view);
  assert.ok(Math.abs(point.x)<.95&&Math.abs(point.y)<1&&point.z<1,'approaching floor trail remains in the portrait view');
 }
});
test('manual cancellation, subsequent valves, and reduced motion preserve camera control',()=>{
 const {position,state,camera}=fixture();camera.start(0,source,true);camera.update(.4);camera.cancel();
 position.y=1.2;state.pitch=.1;camera.update(4);assert.equal(position.y,1.2);assert.equal(state.pitch,.1);
 camera.start(5,{x:0,z:-1},true);camera.update(5,true);assert.equal(camera.active,false);assert.ok(position.y>=1.65);
 const high=fixture(2.9);high.camera.start(0,source,true);high.camera.update(2);assert.equal(high.position.y,2.9,'never lower an already higher camera');
});
test('lifting the camera does not delay acid contact or evade game over',()=>{
 const low=createAcidFlow(),high=createAcidFlow(),{position,state,camera}=fixture();
 const fixed=position.clone();low.open(0,source,0);high.open(0,source,0);camera.start(0,source,true);
 let lowEnd=null,highEnd=null;
 for(let tick=1;tick<1400;tick++){
  const time=tick/30;camera.update(time);
  if(low.update(time,1/30,fixed))lowEnd=tick;
  if(high.update(time,1/30,position))highEnd=tick;
 }
 assert.notEqual(lowEnd,null);assert.equal(highEnd,lowEnd);assert.equal(high.finished,true);
});
