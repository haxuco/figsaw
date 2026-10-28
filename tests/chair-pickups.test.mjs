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
