import test from 'node:test';
import assert from 'node:assert/strict';
import * as THREE from '../dist/vendor/three.module.js';
import {createSceneRaycaster} from '../dist/scene-picking.js';

test('thin table lines do not block a visible character beside them, while real surfaces still do',()=>{
 const outline=new THREE.LineSegments(new THREE.BufferGeometry().setFromPoints([new THREE.Vector3(.4,-1,0),new THREE.Vector3(.4,1,0)]),new THREE.LineBasicMaterial());
 const character=new THREE.Mesh(new THREE.BoxGeometry(.3,.3,.3),new THREE.MeshBasicMaterial());character.position.z=-1;character.updateMatrixWorld();
 const origin=new THREE.Vector3(0,0,2),direction=new THREE.Vector3(0,0,-1),defaultRay=new THREE.Raycaster(origin,direction);
 assert.equal(defaultRay.intersectObjects([outline,character])[0].object,outline,'reproduce the oversized default line hit');
 const ray=createSceneRaycaster();ray.set(origin,direction);assert.equal(ray.intersectObjects([outline,character])[0].object,character);
 const wall=new THREE.Mesh(new THREE.BoxGeometry(1,1,.1),new THREE.MeshBasicMaterial());wall.position.z=.5;wall.updateMatrixWorld();
 assert.equal(ray.intersectObjects([outline,character,wall])[0].object,wall,'walls retain normal occlusion');
 outline.position.x=-.4;outline.updateMatrixWorld();assert.equal(ray.intersectObjects([outline,character])[0].object,outline,'a click actually on the thin line still hits it');
});
