import test from 'node:test';
import assert from 'node:assert/strict';
import * as THREE from '../dist/vendor/three.module.js';
import {createPlayerRestraint} from '../dist/player-restraint.js';
import {createSceneRaycaster,firstInteractionHit} from '../dist/scene-picking.js';
import {createKetchupKeyState} from '../dist/ketchup-key-state.js';
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

test('retrieving the real bottle key permits release, and retry clears that permission',()=>{
 const key=createKetchupKeyState(),bag=createInventory(),camera=new THREE.PerspectiveCamera(48.36,.48,.06,35),restraint=createPlayerRestraint(camera,{canDetach:()=>key.hasKey});
 assert.equal(restraint.detach(0),false);key.pour(0);key.update(3.5);assert.equal(key.collect(),true);bag.add('key');bag.equip('key');
 restraint.requestReach(3.5);restraint.update(4.2,false,true,null,0,bag.equipped==='key');restraint.group.updateMatrixWorld(true);
 const cuff=restraint.group.getObjectByName('Close-fitting oval wrist cuff'),before=cuff.getWorldPosition(new THREE.Vector3());
 assert.equal(restraint.detach(4.2),true);bag.putAway();restraint.update(4.2,false,true);restraint.group.updateMatrixWorld(true);assert.ok(cuff.getWorldPosition(new THREE.Vector3()).distanceTo(before)<1e-7,'unlocking must not jump the cuff out of the focused wrist pose');
 restraint.update(6,false,false);assert.equal(restraint.locked,false);assert.equal(restraint.group.getObjectByName('Camera-relative reaching hand').visible,false);
 key.reset();bag.reset();restraint.reset();assert.equal(restraint.detach(10),false);assert.equal(restraint.locked,true);
});
