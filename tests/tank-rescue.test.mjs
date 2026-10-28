import test from 'node:test';
import assert from 'node:assert/strict';
import * as THREE from '../dist/vendor/three.module.js';
import {createFigpalVats} from '../dist/figpal-vats.js';
import {createRescueChairs} from '../dist/rescue-chairs.js';
import {createAcidFlow,BREACHED_TANK_RESIDUAL} from '../dist/acid-flow.js';
import {createInventory} from '../dist/inventory.js';

function canvasMock(){const gradient={addColorStop(){}};const ctx=new Proxy({createRadialGradient:()=>gradient,createLinearGradient:()=>gradient,measureText:()=>({width:50})},{get:(t,k)=>k in t?t[k]:()=>{}});return {width:0,height:0,getContext:()=>ctx};}
function fixture(){
 const room=new THREE.Group(),vats=createFigpalVats({floorSupport:()=>0}),flow=createAcidFlow(),inventory=createInventory();room.add(vats.group);
 const objects=[0,1].map(()=>{const o=new THREE.Group();o.chairParts={base:new THREE.Group(),seat:new THREE.Group(),caster:new THREE.Group()};o.add(o.chairParts.base,o.chairParts.seat);room.add(o);return o;});
 const parts=Object.fromEntries(['caster','seat','base'].map(id=>{const o=new THREE.Group();o.add(new THREE.Mesh(new THREE.BoxGeometry(.1,.1,.1),new THREE.MeshStandardMaterial()));room.add(o);return [id,o];}));
 const player=new THREE.Group();room.add(player);
 const rescue=createRescueChairs({objects,parts,player,tanks:vats.rigs.map(r=>r.vat),floorSupport:()=>0,puzzle:{pmIndex:2}});room.add(rescue.group);vats.bindRescue(rescue,{...flow,isDrained:i=>flow.remaining(i)<=.0001});
 let time=0;
 function update(dt=.1,reduced=false){time+=dt;rescue.update(time,reduced);vats.update(time,reduced);room.updateMatrixWorld(true);}
 function breakTanks(){for(let i=0;i<2;i++){vats.tanks[i].break(time);flow.breach(i,{x:0,y:.39,z:0},time);}flow.update(time+20,.1,{x:20,z:20});update(20);}
 function prepareChairs(){
  for(const id of ['caster','seat','base','ratchet'])inventory.add(id);
  for(const [i,part]of [[0,'caster'],[1,'seat'],[1,'base']]){rescue.use(i,part,inventory);rescue.use(i,'ratchet',inventory);}
  update(2);for(let i=0;i<2;i++){assert.equal(rescue.select(i),true);assert.equal(rescue.place(i),true);update(2);}
  for(const [a,b,id]of [[2,0,'chain0'],[0,1,'chain1']]){rescue.hook(a,id,inventory);rescue.hook(b,id,inventory);}
  assert.equal(rescue.state.arranged,true);
 }
 function collectChains(){for(let i=0;i<2;i++){assert.match(vats.toggleHoist(i),/spare return chain/);update(2);assert.equal(vats.rigs[i].lowered,false);assert.equal(vats.rigs[i].loadChain.object.visible,true);assert.equal(rescue.collectChain(i,inventory),true);}}
 return {room,vats,flow,rescue,inventory,update,breakTanks,prepareChairs,collectChains};
}

test('real hoists retain acid, require preparation before descent, and swing both living captives onto linked chairs',()=>{
 const previous=globalThis.document,previousPath=globalThis.Path2D;globalThis.Path2D=class {};globalThis.document={createElement:()=>canvasMock(),createElementNS:()=>({addEventListener(){},removeEventListener(){},set src(value){}})};
 try{
  const f=fixture();f.breakTanks();f.collectChains();
  assert.equal(f.flow.remaining(0),BREACHED_TANK_RESIDUAL);
  // Preparing the route after this lowering starts must not save this captive.
  assert.equal(f.vats.lower(0),true);assert.equal(f.vats.rigs[0].rescuePlanned,false);f.prepareChairs();f.update(20,true);
  assert.equal(f.vats.rigs[0].transformation.damaged,true);assert.equal(f.vats.rigs[0].transformation.transformed,false);assert.equal(f.vats.rigs[0].rescued,false);
  f.vats.toggleHoist(0);f.update(20,true);assert.equal(f.vats.rigs[0].transformation.damaged,true,'raising cannot restore the bottom half');
  f.rescue.reset();f.vats.reset();f.flow.reset();f.inventory.reset();f.breakTanks();f.collectChains();f.prepareChairs();
  for(let i=0;i<2;i++){
   assert.equal(f.vats.lower(i),true);assert.equal(f.vats.rigs[i].rescuePlanned,true);f.update(20,true);
   assert.equal(f.vats.rigs[i].escaping,true);assert.equal(f.vats.isSettled(i),false,'timed camera holds throughout the swing');assert.equal(f.rescue.pull(),false);
   const from=f.vats.rigs[i].hanger.getWorldPosition(new THREE.Vector3());f.update(.9);
   assert.ok(f.vats.rigs[i].hanger.getWorldPosition(new THREE.Vector3()).distanceTo(from)>.04);assert.equal(f.vats.rigs[i].transformation.damaged,false);
   for(let frame=0;frame<55;frame++)f.update(.1);
   assert.equal(f.vats.isSettled(i),true);assert.equal(f.vats.rigs[i].rescued,true);assert.equal(f.vats.rigs[i].hanger.parent,f.rescue.objects[i]);assert.equal(f.vats.rigs[i].transformation.damaged,false);assert.equal(f.vats.rigs[i].captive.visible,true);
  }
  assert.equal(f.rescue.state.ready,true);assert.equal(f.rescue.pull(),true);f.update(10,true);assert.equal(f.rescue.state.safe,true);
  f.rescue.reset();f.vats.reset();assert.ok(f.vats.rigs.every(r=>!r.rescued&&!r.escaping&&!r.rescuePlanned&&!r.transformation.damaged&&r.hanger.parent===r.rig));
 }finally{globalThis.document=previous;globalThis.Path2D=previousPath;}
});
