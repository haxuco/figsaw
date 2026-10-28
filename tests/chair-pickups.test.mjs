import test from 'node:test';
import assert from 'node:assert/strict';
import * as THREE from '../dist/vendor/three.module.js';
import {createRescueChairs} from '../dist/rescue-chairs.js';
import {createInventory} from '../dist/inventory.js';
import {createSceneRaycaster} from '../dist/scene-picking.js';

function fixture(){
 const room=new THREE.Group(),parts={};
 for(const [i,id]of ['caster','seat','base'].entries()){
  const part=new THREE.Group();part.position.set(i*.8,.04,0);room.add(part);
  part.add(new THREE.Mesh(new THREE.BoxGeometry(id==='caster'?.06:.4,.03,.06),new THREE.MeshStandardMaterial()));parts[id]=part;
 }
 const objects=[0,1].map(()=>{const o=new THREE.Group();o.chairParts={base:new THREE.Group(),seat:new THREE.Group(),caster:new THREE.Group()};o.add(o.chairParts.base,o.chairParts.seat);return o;});
 const rescue=createRescueChairs({objects,parts,player:new THREE.Group(),tanks:[],floorSupport:()=>.003});room.add(rescue.group);room.updateMatrixWorld(true);
 const ray=createSceneRaycaster();
 const at=(x,z=0)=>{ray.set(new THREE.Vector3(x,2,z),new THREE.Vector3(0,-1,0));return ray.intersectObject(room,true).find(hit=>{for(let o=hit.object;o;o=o.parent)if(!o.visible)return false;return true;})?.object;};
 return{room,rescue,parts,at,ray};
}

test('each repair part has a forgiving pickup target, including empty space beside the tiny caster',()=>{
 const {rescue,parts,at,room,ray}=fixture();
 for(const [id,part]of Object.entries(parts)){
  const target=rescue.group.getObjectByName(`Chair ${id} pickup target`);
  assert.ok(target.scale.x>=.22&&target.scale.y>=.14&&target.scale.z>=.22);
  assert.equal(at(part.position.x+.07,.07)?.userData.salvagePart,id);
  assert.equal(parts[id].children.some(o=>o===target),false,'pick volumes do not change collectible models');
 }
 // Enlarging a pickup must not let it be collected through a solid surface.
 const cover=new THREE.Mesh(new THREE.BoxGeometry(.5,.1,.5),new THREE.MeshBasicMaterial());cover.position.set(0,.8,0);room.add(cover);room.updateMatrixWorld(true);
 assert.equal(at(.07,.07),cover);
 const beacon=rescue.group.getObjectByName('Temporary chair part highlights').children.find(o=>o.userData.salvagePart==='caster');
 ray.set(beacon.position.clone().add(new THREE.Vector3(0,0,1)),new THREE.Vector3(0,0,-1));
 assert.equal(ray.intersectObject(beacon)[0]?.object.userData.salvagePart,'caster','visible discovery markers are also clickable');
});

test('pickup volumes and markers disappear immediately on collection, and reset with the parts',()=>{
 const {rescue,parts,at}=fixture(),inventory=createInventory();
 for(const [id,part]of Object.entries(parts)){
  assert.equal(rescue.collectPart(id,inventory),true);assert.equal(part.visible,false);
  assert.equal(at(part.position.x+.07,.07),undefined,'a collected part leaves no invisible blocking target');
  assert.equal(rescue.collectPart(id,inventory),false);
 }
 assert.deepEqual(inventory.items,['caster','seat','base']);
 inventory.reset();rescue.reset();
 for(const [id,part]of Object.entries(parts))assert.equal(at(part.position.x+.07,.07)?.userData.salvagePart,id);
});

test('repair chairs accept clicks in frame gaps, retain furniture occlusion and carry their target when moved',()=>{
 const room=new THREE.Group(),material=new THREE.MeshStandardMaterial();
 const chairs=[0,1].map(i=>{
  const chair=new THREE.Group();chair.position.x=i*2;room.add(chair);
  chair.chairParts={base:new THREE.Group(),seat:new THREE.Group(),caster:new THREE.Group()};chair.add(chair.chairParts.base,chair.chairParts.seat);
  for(const x of[-.25,.25]){const rail=new THREE.Mesh(new THREE.BoxGeometry(.04,1.1,.04),material);rail.position.set(x,.55,0);chair.add(rail);}
  const seat=new THREE.Mesh(new THREE.BoxGeometry(.5,.04,.5),material);seat.position.y=.5;chair.chairParts.seat.add(seat);return chair;
 });
 createRescueChairs({objects:chairs,parts:{},player:new THREE.Group(),tanks:[],floorSupport:()=>.003});room.updateMatrixWorld(true);
 const ray=createSceneRaycaster(),hitAt=x=>{ray.set(new THREE.Vector3(x,.8,2),new THREE.Vector3(0,0,-1));return ray.intersectObject(room,true)[0]?.object;};
 const pick=hitAt(.08);assert.equal(pick.name,'Rescue chair 1 click target');assert.equal(pick.parent,chairs[0]);assert.equal(pick.material.colorWrite,false);
 const panel=new THREE.Mesh(new THREE.BoxGeometry(.7,1.3,.08),material);panel.position.set(0,.65,.8);room.add(panel);room.updateMatrixWorld(true);assert.equal(hitAt(.08),panel,'the target must not select chairs through a desk or wall');
 room.remove(panel);chairs[0].position.x=-1;room.updateMatrixWorld(true);assert.equal(hitAt(.08),undefined);assert.equal(hitAt(-.92),pick,'the target stays attached during chair movement');
});

test('a repaired chair offers large clickable destinations and rolls to the chosen tank',()=>{
 const room=new THREE.Group(),objects=[0,1].map(i=>{
  const o=new THREE.Group();o.position.set(i*2,0,2);o.chairParts={base:new THREE.Group(),seat:new THREE.Group(),caster:new THREE.Group()};o.add(o.chairParts.base,o.chairParts.seat);room.add(o);return o;
 });
 const tanks=[0,1,2].map(i=>{const o=new THREE.Group();o.position.set(i*2,0,-2);room.add(o);return o;});
 const rescue=createRescueChairs({objects,parts:{},player:new THREE.Group(),tanks,floorSupport:()=>.003});room.add(rescue.group);
 const inventory=createInventory();inventory.add('caster');inventory.add('ratchet');
 assert.equal(rescue.select(0),false,'broken chairs cannot be moved');
 rescue.use(0,'caster',inventory);rescue.use(0,'ratchet',inventory);
 assert.equal(rescue.canMove(0),false,'finish the repair settling animation first');
 rescue.update(2);assert.equal(rescue.canMove(0),true);assert.equal(rescue.select(0),true);
 assert.deepEqual(rescue.availableSlots(),[0,1,2]);room.updateMatrixWorld(true);
 const ray=createSceneRaycaster();ray.set(new THREE.Vector3(0,.85,1),new THREE.Vector3(0,0,-1));
 assert.equal(ray.intersectObject(rescue.group,true).find(h=>h.object.parent.visible&&h.object.visible)?.object.userData.rescueSlot,0,'the silhouette is clickable above the floor ring');
 assert.equal(rescue.place(0),true);assert.equal(rescue.moving,null);assert.deepEqual(rescue.availableSlots(),[]);
 for(const o of rescue.group.children.filter(o=>o.name.startsWith('Chair destination')))assert.equal(o.visible,false);
 rescue.update(4);assert.ok(objects[0].position.distanceTo(new THREE.Vector3(0,.003,-1.08))<1e-9);
 rescue.state.chairs[1].repaired=true;assert.equal(rescue.select(1),true);
 assert.deepEqual(rescue.availableSlots(),[1,2],'an occupied destination is disabled, without revealing the randomized PM');
 assert.equal(rescue.place(0),false);assert.equal(rescue.moving,1,'an invalid placement keeps the selection');
 rescue.cancelMove();assert.equal(rescue.moving,null);rescue.reset();assert.equal(rescue.canMove(0),false);
});
