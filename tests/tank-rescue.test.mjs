import test from 'node:test';
import assert from 'node:assert/strict';
import * as THREE from '../dist/vendor/three.module.js';
import {createFigpalVats} from '../dist/figpal-vats.js';
import {createRescueChairs} from '../dist/rescue-chairs.js';
import {createAcidFlow,BREACHED_TANK_RESIDUAL} from '../dist/acid-flow.js';
import {createInventory} from '../dist/inventory.js';
import {CHAIR_RADIUS,CHAIR_GAP} from '../dist/chair-route.js';
import {createEscapePuzzle} from '../dist/mobile-puzzle-state.js';

function canvasMock(){const gradient={addColorStop(){}};const ctx=new Proxy({createRadialGradient:()=>gradient,createLinearGradient:()=>gradient,measureText:()=>({width:50})},{get:(t,k)=>k in t?t[k]:()=>{}});return {width:0,height:0,getContext:()=>ctx};}
function fixture(puzzle=null){
 const room=new THREE.Group(),vats=createFigpalVats({floorSupport:()=>0,puzzle}),flow=createAcidFlow(),inventory=createInventory();room.add(vats.group);
 const objects=[0,1].map(i=>{const o=new THREE.Group();o.position.set(...(i===0?[-1.85,0,-1.28]:[2.75,0,3.3]));o.chairParts={base:new THREE.Group(),seat:new THREE.Group(),caster:new THREE.Group()};o.add(o.chairParts.base,o.chairParts.seat);room.add(o);return o;});
 const parts=Object.fromEntries(['caster','seat','base'].map(id=>{const o=new THREE.Group();o.add(new THREE.Mesh(new THREE.BoxGeometry(.1,.1,.1),new THREE.MeshStandardMaterial()));room.add(o);return [id,o];}));
 const player=new THREE.Group();room.add(player);
 const rescue=createRescueChairs({objects,parts,player,tanks:vats.rigs.map(r=>r.vat),floorSupport:()=>0,puzzle:{pmIndex:2}});room.add(rescue.group);vats.bindRescue(rescue,{...flow,isDrained:i=>flow.remaining(i)<=.0001});
 let time=0;
 function update(dt=.1,reduced=false){time+=dt;rescue.update(time,reduced);vats.update(time,reduced);room.updateMatrixWorld(true);}
 function breakTanks(){for(let i=0;i<2;i++){vats.tanks[i].break(time);flow.breach(i,{x:0,y:.39,z:0},time);}flow.update(time+20,.1,{x:20,z:20});update(20);}
 function prepareChairs(){
  for(const id of ['caster','seat','base','ratchet'])inventory.add(id);
  for(const [i,part]of [[0,'caster'],[1,'seat'],[1,'base']]){rescue.use(i,part,inventory);rescue.use(i,'ratchet',inventory);}
  update(2);for(let i=0;i<2;i++){assert.equal(rescue.select(i),true);assert.equal(rescue.place(i),true);update(8);}
  for(const [a,b,id]of [[2,0,'chain0'],[0,1,'chain1']]){rescue.hook(a,id,inventory);rescue.hook(b,id,inventory);}
  assert.equal(rescue.state.arranged,true);
 }
 function collectChains(){for(let i=0;i<2;i++){assert.equal(vats.collectChain(i,inventory),true);assert.equal(vats.rigs[i].lowered,false);assert.equal(vats.rigs[i].loadChain.object.visible,true);assert.equal(inventory.has('chain'+i),true);}}
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

test('available spare chains enter inventory immediately without falling, moving the captive, or leaving floor pickup targets',()=>{
 const previous=globalThis.document,previousPath=globalThis.Path2D;globalThis.Path2D=class {};globalThis.document={createElement:()=>canvasMock(),createElementNS:()=>({addEventListener(){},removeEventListener(){},set src(value){}})};
 try{
  const f=fixture(createEscapePuzzle(()=>.9));assert.equal(f.vats.collectChain(0,f.inventory),false);assert.equal(f.inventory.has('chain0'),false);
  f.breakTanks();const savedHoists=f.vats.capture(20),savedChairs=f.rescue.capture(),savedInventory=f.inventory.capture();
  const rig=f.vats.rigs[0],height=rig.height;assert.equal(f.vats.canCollectChain(0),true);
  assert.equal(f.vats.collectChain(0,f.inventory),true);assert.equal(f.inventory.has('chain0'),true,'no update or falling animation is needed');
  assert.equal(rig.height,height);assert.equal(rig.targetHeight,height);assert.equal(rig.lowered,false);assert.equal(f.vats.movingIndex,null);
  assert.equal(rig.returnChain.object.visible,false);assert.equal(rig.loadChain.object.visible,true);
  assert.ok(f.rescue.inventoryChain(0).count>0,'the collected chain still has a real model for inventory and equipment');
  f.rescue.group.traverse(o=>{if(o.userData.chainPickup===0)assert.equal(o.visible,false);});
  assert.equal(f.vats.collectChain(0,f.inventory),false);assert.deepEqual(f.inventory.items,['chain0']);
  f.update(5);assert.equal(rig.height,height);assert.equal(rig.returnChain.object.visible,false);
  f.inventory.restore(savedInventory);f.rescue.restore(savedChairs);f.vats.restore(savedHoists,25);
  assert.equal(rig.returnChain.object.visible,true);assert.equal(f.inventory.has('chain0'),false);assert.equal(f.vats.canCollectChain(0),true);
  assert.equal(f.vats.collectChain(0,f.inventory),true);assert.match(f.vats.toggleHoist(0),/lowering/,'after collection, the winch still operates normally');
 }finally{globalThis.document=previous;globalThis.Path2D=previousPath;}
});

test('both chairs avoid every tank and valve from their room positions and when switching between all three parking spots',()=>{
 const previous=globalThis.document,previousPath=globalThis.Path2D;globalThis.Path2D=class {};globalThis.document={createElement:()=>canvasMock(),createElementNS:()=>({addEventListener(){},removeEventListener(){},set src(value){}})};
 try{
  const f=fixture(),obstacles=f.vats.rigs.flatMap(({vat})=>{
   const center=vat.getWorldPosition(new THREE.Vector3()),valve=vat.localToWorld(new THREE.Vector3(.30,0,.55));
   return [{x:center.x,z:center.z,radius:.61},{x:valve.x,z:valve.z,radius:.14}];
  });
  const homes=[new THREE.Vector3(-1.85,0,-1.28),new THREE.Vector3(2.75,0,3.3)],docks=f.vats.rigs.map((_,i)=>f.rescue.group.getObjectByName(`Chair destination — Tank 0${i+1}`).position.clone());
  for(let i=0;i<docks.length;i++)for(let j=i+1;j<docks.length;j++)assert.ok(docks[i].distanceTo(docks[j])>CHAIR_RADIUS*2+CHAIR_GAP,'parked chairs have separate space in the aisle');
  let time=0;
  for(let chair=0;chair<2;chair++)for(const source of[homes[chair],...docks])for(let tank=0;tank<3;tank++){
   f.rescue.reset();f.rescue.objects[chair].position.copy(source);f.rescue.state.chairs[chair].repaired=true;
   assert.equal(f.rescue.select(chair),true);assert.equal(f.rescue.place(tank),true,`chair ${chair} can reach tank ${tank}`);
   for(let frame=0;frame<240;frame++){
    time+=.04;f.rescue.update(time);
    const position=f.rescue.objects[chair].position;assert.equal(position.y,0,'wheels stay grounded along the route');
    for(const obstacle of obstacles)assert.ok(Math.hypot(position.x-obstacle.x,position.z-obstacle.z)>=obstacle.radius+CHAIR_RADIUS+CHAIR_GAP-1e-7,`chair ${chair} clips a tank or valve on its way to tank ${tank}`);
   }
   assert.ok(f.rescue.objects[chair].position.distanceTo(docks[tank])<1e-9);
  }
  f.rescue.reset();for(const chair of f.rescue.state.chairs)chair.repaired=true;
  for(let i=0;i<2;i++){
   assert.equal(f.rescue.select(i),true);assert.equal(f.rescue.place(i),true);assert.equal(f.rescue.canMove(1-i),false,'finish one move before routing the other chair');
   for(let frame=0;frame<240;frame++){
    time+=.04;f.rescue.update(time);const a=f.rescue.objects[0].position,b=f.rescue.objects[1].position;
    assert.ok(Math.hypot(a.x-b.x,a.z-b.z)>=CHAIR_RADIUS*2+CHAIR_GAP-1e-7,'the second chair clears the already parked chair');
   }
  }
 }finally{globalThis.document=previous;globalThis.Path2D=previousPath;}
});
