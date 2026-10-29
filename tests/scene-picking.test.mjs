import test from 'node:test';
import assert from 'node:assert/strict';
import * as THREE from '../dist/vendor/three.module.js';
import {createSceneRaycaster,preferSkullInspection} from '../dist/scene-picking.js';

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

function skullBehindChair(){
 const room=new THREE.Group(),chair=new THREE.Group(),tank=new THREE.Group(),skull=new THREE.Group();chair.userData.rescueChair=0;tank.userData={tankIndex:1,fishClue:true};skull.userData.fishClue=true;
 const pick=new THREE.Mesh(new THREE.BoxGeometry(.9,.9,.4),new THREE.MeshBasicMaterial({opacity:0,colorWrite:false}));pick.position.z=1;chair.add(pick);
 const shell=new THREE.Mesh(new THREE.BoxGeometry(.8,.8,.6),new THREE.MeshBasicMaterial({transparent:true,opacity:.2}));shell.position.z=-1;tank.add(shell);
 const bone=new THREE.Mesh(new THREE.SphereGeometry(.16,16,12),new THREE.MeshBasicMaterial());skull.position.z=-1;skull.add(bone);room.add(chair,tank,skull);
 const ray=createSceneRaycaster(),hitsAt=(x=0)=>{room.updateMatrixWorld(true);ray.set(new THREE.Vector3(x,0,3),new THREE.Vector3(0,0,-1));return ray.intersectObject(room,true);};
 return {room,chair,tank,skull,bone,pick,hitsAt};
}

test('a revealed PM skull takes priority over the chair click box and mesh in front of it, including testing targets',()=>{
 const {skull,chair,pick,hitsAt}=skullBehindChair(),hits=hitsAt();assert.equal(hits[0].object,pick);
 assert.equal(preferSkullInspection(hits[0],hits,skull,true).object,skull);
 assert.equal(preferSkullInspection({object:chair},hits,skull,true).object,skull,'an equipped item cannot let a diagnostic chair outline steal the inspection');
});

test('the exception stays inside the revealed PM geometry, leaving the rest of the chair movable',()=>{
 const {skull,hitsAt}=skullBehindChair(),hits=hitsAt(.3),chairHit=hits[0];
 assert.equal(preferSkullInspection(chairHit,hits,skull,true),chairHit,'the tank outline is not a replacement for the skull itself');
 const centered=hitsAt(),hit=centered[0];assert.equal(preferSkullInspection(hit,centered,skull,false),hit,'do not expose the clue before it dissolves');
 skull.userData.fishClue=false;assert.equal(preferSkullInspection(hit,centered,skull,true),hit,'other Figpal skeletons do not claim PM inspection');
 skull.userData.fishClue=true;skull.visible=false;assert.equal(preferSkullInspection(hit,centered,skull,true),hit,'hidden replacement bones cannot be picked');
});

test('walls and desks still block the PM skull, and ordinary foreground interactions keep their priority',()=>{
 const {room,skull,hitsAt}=skullBehindChair(),panel=new THREE.Mesh(new THREE.BoxGeometry(1,1,.1),new THREE.MeshBasicMaterial());room.add(panel);
 let hits=hitsAt();assert.equal(preferSkullInspection(hits[0],hits,skull,true),hits[0],'a wall between the chair and skull blocks inspection');
 panel.position.z=2;hits=hitsAt();assert.equal(hits[0].object,panel);assert.equal(preferSkullInspection(hits[0],hits,skull,true).object,panel,'only chair hits can be overridden');
});

test('dissolution clipping planes cannot turn still-hidden skull geometry into an inspection target',()=>{
 const {skull,bone,hitsAt}=skullBehindChair();bone.material.clippingPlanes=[new THREE.Plane(new THREE.Vector3(0,-1,0),-.1)];
 let hits=hitsAt();assert.equal(preferSkullInspection(hits[0],hits,skull,true),hits[0]);
 bone.material.clippingPlanes[0].constant=.1;hits=hitsAt();assert.equal(preferSkullInspection(hits[0],hits,skull,true).object,skull);
});
