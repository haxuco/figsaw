import test from 'node:test';
import assert from 'node:assert/strict';
import * as THREE from '../dist/vendor/three.module.js';
import {createPlayerRestraint} from '../dist/player-restraint.js';
import {createSceneRaycaster,firstInteractionHit} from '../dist/scene-picking.js';
import {createKetchupKeyState,collectShackleKey} from '../dist/ketchup-key-state.js';
import {createInventory} from '../dist/inventory.js';

test('the equipped key keeps the cuff visible and directly clickable throughout reach and rest on phones and desktops',()=>{
 for(const aspect of [.40,.48,.75,1,1.78,2.4])for(const fov of [48.36,62]){
  const camera=new THREE.PerspectiveCamera(fov,aspect,.06,35);camera.position.set(1.85221,.821615,3.1149);camera.lookAt(1.155084,.748275,2.401713);camera.updateMatrixWorld();
  const restraint=createPlayerRestraint(camera),cuff=restraint.group.getObjectByName('Close-fitting oval wrist cuff'),ray=createSceneRaycaster();restraint.requestReach(0);
  for(const time of [.3,.7,1,2,5,15]){
   restraint.update(time,false,true,null,0,true);restraint.group.updateMatrixWorld(true);
   const point=cuff.getWorldPosition(new THREE.Vector3()).project(camera);
   assert.ok(Math.abs(point.x)<.70&&point.y>-.78&&point.y<.8,`cuff left the usable screen: ${aspect}, ${fov}, ${time}, ${point.toArray()}`);
   ray.setFromCamera(new THREE.Vector2(point.x,point.y),camera);
   const hit=firstInteractionHit(ray.intersectObject(restraint.group,true));let root=hit?.object;while(root&&root!==restraint.target)root=root.parent;
   assert.equal(root,restraint.target,'the real cuff is clickable without diagnostic targets');
  }
 }
});

test('key pickup immediately opens the cuff without equipping or clicking it, even at the first reveal frame',()=>{
 for(const time of [2.5,3.5,40])for(const reaching of [false,true])for(const aspect of [.48,1.78]){
  const key=createKetchupKeyState(),bag=createInventory(),camera=new THREE.PerspectiveCamera(62,aspect,.06,35);
  const restraint=createPlayerRestraint(camera,{canDetach:()=>key.hasKey});
  key.pour(0);
  assert.equal(collectShackleKey(key,restraint,2.49),false);assert.equal(restraint.locked,true);
  if(reaching){restraint.requestReach(time-.3);restraint.update(time-.1);}
  assert.equal(collectShackleKey(key,restraint,time),true);
  assert.equal(restraint.locked,false);assert.equal(key.hasKey,true);
  assert.equal(bag.has('key'),false);assert.equal(bag.equipped,null);
  restraint.update(time+.6);
  const cuff=restraint.group.getObjectByName('Close-fitting oval wrist cuff');
  assert.ok(cuff.position.z<-.5,'release starts at the wrist, even if no prior reach initialized its pose');
  assert.ok(restraint.group.getObjectByName('Hinged upper cuff').rotation.z>1.9,'the cuff clips open');
  assert.equal(restraint.group.getObjectByName('Camera-relative reaching hand').visible,true);
  restraint.update(time+2);
  assert.equal(restraint.group.getObjectByName('Camera-relative reaching hand').visible,false);
  assert.equal(collectShackleKey(key,restraint,time+3),false,'repeated pickups cannot restart release');
 }
});

test('retry requires collecting the key again before the shackle unlocks',()=>{
 const key=createKetchupKeyState(),camera=new THREE.PerspectiveCamera(62,.48,.06,35),restraint=createPlayerRestraint(camera,{canDetach:()=>key.hasKey});
 key.pour(0);assert.equal(collectShackleKey(key,restraint,2.5),true);
 key.reset();restraint.reset();assert.equal(restraint.locked,true);
 assert.equal(restraint.detach(10),false);assert.equal(collectShackleKey(key,restraint,10),false);
 key.pour(10);assert.equal(collectShackleKey(key,restraint,12.5),true);assert.equal(restraint.locked,false);
});
