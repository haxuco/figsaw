import test from 'node:test';
import assert from 'node:assert/strict';
import * as THREE from '../dist/vendor/three.module.js';
import {createKetchupClosure} from '../dist/ketchup-closure.js';

test('the smooth metal lid seals the bottle, and removing it exposes an unobstructed glass opening',()=>{
 const {cap,neck}=createKetchupClosure(),bottle=new THREE.Group();bottle.add(cap,neck);bottle.updateMatrixWorld(true);
 const ray=new THREE.Raycaster(new THREE.Vector3(0,.60,0),new THREE.Vector3(0,-1,0));
 const sealed=ray.intersectObjects(bottle.children,true);assert.ok(sealed.length>0);assert.ok(Math.abs(sealed[0].point.y-.4995)<.00001);
 cap.removeFromParent();bottle.updateMatrixWorld(true);
 assert.equal(ray.intersectObjects(bottle.children,true).length,0,'no permanent disc or metal cap can remain across the opening');
 neck.traverse(object=>{if(object.isMesh)assert.ok((object.material.metalness||0)===0,'metal must leave with the lid');});
 assert.equal(cap.children.length,3,'smooth shell, underside and rolled hem only');
});
