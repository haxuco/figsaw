import test from 'node:test';
import assert from 'node:assert/strict';
import * as THREE from '../dist/vendor/three.module.js';
import {createInfoPosterCamera} from '../dist/info-poster-view.js';
import {createGamePause} from '../dist/game-pause.js';

function setup(){
 const camera=new THREE.PerspectiveCamera(62,1.7,.06,35);camera.position.set(1.85,.82,3.11);
 const state={yaw:.59,pitch:-.1,zoom:1,time:45};camera.lookAt(camera.position.clone().add(new THREE.Vector3(-Math.sin(state.yaw)*Math.cos(state.pitch),Math.sin(state.pitch),-Math.cos(state.yaw)*Math.cos(state.pitch))));camera.updateMatrixWorld(true);
 const target=new THREE.Mesh(new THREE.PlaneGeometry(1.32,1.65));target.position.set(-3.82,2.02,-.62);target.rotation.y=Math.PI/2;
 return {camera,state,target,view:createInfoPosterCamera({camera,state,baseFov:62})};
}

test('notice-board camera zoom and return leave gameplay position and simulation time untouched',()=>{
 const {camera,state,target,view}=setup(),home=camera.matrixWorld.clone(),initial={...state};
 let wallTime=100,paused=false,resumes=0;const pause=createGamePause(()=>wallTime),timer={get paused(){return paused;},pause(){paused=true;},resume(){paused=false;resumes++;}};
 pause.pause(timer);view.show(target,0);view.update(.4,1.7,false);
 assert.equal(pause.active,true);assert.equal(paused,true);assert.ok(!view.camera.position.equals(camera.position));
 view.update(1,1.7,false);wallTime=145;assert.equal(pause.now(),100,'reading does not spend deadline or hint time');
 view.restore(46);view.update(46.4,1.7,false);assert.equal(view.returning,true);view.update(47,1.7,false);
 assert.equal(view.active,false);assert.ok(view.camera.position.equals(camera.position));assert.deepEqual(camera.matrixWorld,home);assert.deepEqual(state,initial);
 pause.resume();assert.equal(resumes,1);wallTime++;assert.equal(pause.now(),101);
});

test('notice boards fit portrait and landscape screens and support an early Back or reduced-motion exit',()=>{
 for(const aspect of [.42,.56,1,1.78,2.3]){
  const {camera,target,view}=setup();view.show(target,0);view.update(1,aspect,false);target.updateWorldMatrix(true,false);
  for(const x of [-.66,.66])for(const y of [-.825,.825]){
   const p=new THREE.Vector3(x,y,0).applyMatrix4(target.matrixWorld).project(view.camera);
   assert.ok(Math.abs(p.x)<.8&&Math.abs(p.y)<.8,`board fits aspect ${aspect}: ${p.toArray()}`);
  }
  view.restore(1);view.update(1,aspect,true);assert.equal(view.active,false);assert.ok(view.camera.position.equals(camera.position));
 }
 const {camera,target,view}=setup();view.show(target,0);view.update(.15,1,false);view.restore(.16);view.update(1.1,1,false);assert.equal(view.active,false);assert.ok(view.camera.position.equals(camera.position));
});
