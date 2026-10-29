import test from 'node:test';
import assert from 'node:assert/strict';
import * as THREE from '../dist/vendor/three.module.js';
import {createSceneRaycaster,firstInteractionHit,preferAxeTankHit,preferChainChairHit,preferSkullInspection,preferMobilePickup} from '../dist/scene-picking.js';
import {createInventory} from '../dist/inventory.js';
import {createMobilePuzzleState} from '../dist/mobile-puzzle-state.js';

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

function mobileBehindChair(){
 const {room,chair,pick,hitsAt}=skullBehindChair();
 room.children.filter(o=>o!==chair).forEach(o=>room.remove(o));
 const tiger=new THREE.Group();tiger.userData.mobilePiece='mobileTiger';tiger.position.z=-1;
 const body=new THREE.Mesh(new THREE.SphereGeometry(.16,16,12),new THREE.MeshBasicMaterial());
 const target=new THREE.Mesh(new THREE.BoxGeometry(.7,.7,.7),new THREE.MeshBasicMaterial({transparent:true,opacity:0,colorWrite:false}));
 tiger.add(body,target);room.add(tiger);return {room,chair,pick,tiger,body,hitsAt};
}

test('mobile animals remain collectible through a chair frame and its oversized click volume',()=>{
 const {chair,pick,tiger,hitsAt}=mobileBehindChair(),hits=hitsAt();assert.equal(hits[0].object,pick);
 assert.equal(preferMobilePickup(hits[0],hits).object,tiger);
 assert.equal(preferMobilePickup({object:chair},hits).object,tiger,'diagnostic chair targets cannot steal an aimed pickup');
 const rail=new THREE.Mesh(new THREE.BoxGeometry(.1,.5,.1),new THREE.MeshBasicMaterial());rail.position.z=1.4;chair.add(rail);
 const solidHits=hitsAt();assert.equal(solidHits[0].object,rail);assert.equal(preferMobilePickup(solidHits[0],solidHits).object,tiger);
 const bag=createInventory(),puzzle=createMobilePuzzleState();
 assert.equal(puzzle.collectPiece(preferMobilePickup(solidHits[0],solidHits).object.userData.mobilePiece,bag),true);assert.deepEqual(bag.items,['mobileTiger']);
});

test('the mobile priority is confined to real visible pieces, and preserves walls, other objects and ordinary chair clicks',()=>{
 const {room,tiger,body,hitsAt}=mobileBehindChair();
 let hits=hitsAt(.3);assert.equal(preferMobilePickup(hits[0],hits),hits[0],'empty space inside an animal pickup box stays a chair click');
 hits=hitsAt();assert.equal(preferMobilePickup(hits[0],hits,false),hits[0],'hung mobiles do not claim floor pickups');
 tiger.visible=false;hits=hitsAt();assert.equal(preferMobilePickup(hits[0],hits),hits[0],'collected animals no longer intercept clicks');tiger.visible=true;
 body.material.clippingPlanes=[new THREE.Plane(new THREE.Vector3(0,-1,0),-.2)];hits=hitsAt();assert.equal(preferMobilePickup(hits[0],hits),hits[0]);body.material.clippingPlanes=[];
 const wall=new THREE.Mesh(new THREE.BoxGeometry(1,1,.1),new THREE.MeshBasicMaterial());room.add(wall);hits=hitsAt();assert.equal(preferMobilePickup(hits[0],hits),hits[0],'a wall between chair and animal blocks pickup');
 wall.position.z=2;hits=hitsAt();assert.equal(hits[0].object,wall);assert.equal(preferMobilePickup(hits[0],hits),hits[0],'ordinary foreground interactions keep their priority');
});

function tankBehindParkedChair(){
 const f=skullBehindChair();f.room.remove(f.skull);
 const options={axeHeld:true,tanks:[{broken:false},{broken:false},{broken:false}],chairs:[{repaired:true,tank:1}]};
 return {...f,options};
}
test('an equipped axe reaches actual tank glass through a parked chair mesh and its click volume',()=>{
 const f=tankBehindParkedChair(),hits=f.hitsAt();assert.equal(hits[0].object,f.pick);
 assert.equal(preferAxeTankHit(hits[0],hits,f.options).object,f.tank);
 const rail=new THREE.Mesh(new THREE.BoxGeometry(.12,.5,.1),new THREE.MeshBasicMaterial());rail.position.z=1.4;f.chair.add(rail);
 const solid=f.hitsAt();assert.equal(solid[0].object,rail);assert.equal(preferAxeTankHit(solid[0],solid,f.options).object,f.tank);
 assert.equal(preferAxeTankHit({object:f.chair},solid,f.options).object,f.tank,'diagnostic chair targets cannot steal an axe strike');
});
test('the tank exception requires an axe, a positioned repaired chair and a ray on rendered glass',()=>{
 const f=tankBehindParkedChair();let hits=f.hitsAt(),hit=hits[0];
 assert.equal(preferAxeTankHit(hit,hits,{...f.options,axeHeld:false}),hit);
 for(const state of [{repaired:false,tank:1},{repaired:true,tank:null}])assert.equal(preferAxeTankHit(hit,hits,{...f.options,chairs:[state]}),hit);
 hits=f.hitsAt(.43);hit=hits[0];assert.equal(preferAxeTankHit(hit,hits,f.options),hit,'empty space beside the tank remains a chair hit');
 const ghost=new THREE.Mesh(new THREE.BoxGeometry(1.3,1.3,.8),new THREE.MeshBasicMaterial({opacity:0,colorWrite:false}));ghost.position.z=-1;f.tank.add(ghost);
 hits=f.hitsAt(.43);hit=hits[0];assert.equal(preferAxeTankHit(hit,hits,f.options),hit,'an invisible tank target cannot expand the strike area');
 f.chair.visible=false;hits=f.hitsAt();const visibleHit=firstInteractionHit(hits,f.options);assert.equal(preferAxeTankHit(visibleHit,hits,f.options),visibleHit,'a hidden chair cannot change a normal tank hit');
});
test('walls and unrelated furniture still block axe strikes through parked chairs',()=>{
 const f=tankBehindParkedChair(),wall=new THREE.Mesh(new THREE.BoxGeometry(1,1,.1),new THREE.MeshBasicMaterial());f.room.add(wall);
 let hits=f.hitsAt();assert.equal(preferAxeTankHit(hits[0],hits,f.options),hits[0]);
 wall.position.z=2;hits=f.hitsAt();assert.equal(hits[0].object,wall);assert.equal(preferAxeTankHit(hits[0],hits,f.options),hits[0]);
});
test('parked chairs and previously broken tanks do not shield the next intact tank from the axe',()=>{
 const f=tankBehindParkedChair(),next=new THREE.Group();next.userData.tankIndex=2;next.position.z=-3;
 next.add(new THREE.Mesh(new THREE.BoxGeometry(.8,.8,.6),new THREE.MeshBasicMaterial()));f.room.add(next);
 f.options.tanks[1].broken=true;const hits=f.hitsAt();assert.equal(preferAxeTankHit(hits[0],hits,f.options).object,next);
 f.options.tanks[2].broken=true;assert.equal(preferAxeTankHit(hits[0],hits,f.options),hits[0],'no intact tank means no strike target');
});

for(const data of [{hoistIndex:1},{valveIndex:1},{fishClue:true}])test(`holding an axe preserves ${Object.keys(data)[0]} interactions on broken tanks and behind chairs`,()=>{
 const f=tankBehindParkedChair(),control=new THREE.Group();control.userData=data;control.position.z=-.4;
 const button=new THREE.Mesh(new THREE.BoxGeometry(.2,.2,.1),new THREE.MeshBasicMaterial());control.add(button);f.tank.add(control);
 for(const broken of [false,true]){
  f.options.tanks[1].broken=broken;
  let hits=f.hitsAt();assert.equal(preferAxeTankHit(hits[0],hits,f.options).object,button,'the control stays an interaction instead of an axe strike');
  f.chair.visible=false;hits=f.hitsAt();assert.equal(firstInteractionHit(hits,f.options).object,button,'a breached tank must not hide its controls');
  f.chair.visible=true;
 }
});


test('the equipped chain reaches an unlinked chair behind a linked chair, but never through walls',()=>{
 const room=new THREE.Group(),front=new THREE.Group(),back=new THREE.Group();front.userData.rescueChair=0;back.userData.rescueChair=1;front.position.z=1;
 const material=new THREE.MeshBasicMaterial();for(const c of [front,back]){c.add(new THREE.Mesh(new THREE.BoxGeometry(.8,1,.5),material));room.add(c);}room.updateMatrixWorld(true);
 const ray=createSceneRaycaster();ray.set(new THREE.Vector3(0,0,3),new THREE.Vector3(0,0,-1));
 const options={chainHeld:true,links:[true,false,false],canLink:i=>i===1},hits=ray.intersectObject(room,true);
 assert.equal(preferChainChairHit(hits[0],hits,options).object,back);
 assert.equal(preferChainChairHit(hits[0],hits,{...options,chainHeld:false}),hits[0]);
 assert.equal(preferChainChairHit(hits[0],hits,{...options,canLink:()=>false}),hits[0]);
 const wall=new THREE.Mesh(new THREE.BoxGeometry(1,1,.1),material);wall.position.z=.5;room.add(wall);room.updateMatrixWorld(true);const blocked=ray.intersectObject(room,true);
 assert.equal(preferChainChairHit(blocked[0],blocked,options),blocked[0]);
});
