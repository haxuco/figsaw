import test from 'node:test';
import assert from 'node:assert/strict';
import * as THREE from '../dist/vendor/three.module.js';
import {createFigpalVats} from '../dist/figpal-vats.js';
import {createRescueChairs} from '../dist/rescue-chairs.js';
import {createAcidFlow,BREACHED_TANK_RESIDUAL} from '../dist/acid-flow.js';
import {createInventory} from '../dist/inventory.js';
import {CHAIR_RADIUS,CHAIR_GAP} from '../dist/chair-route.js';
import {captureVictoryResult} from '../dist/victory-result.js';
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
 function prepareChairs(indices=[0,1]){
  for(const [i,part]of [[0,'caster'],[1,'seat'],[1,'base']])if(indices.includes(i)){inventory.add(part);rescue.use(i,part,inventory);}
  update(2);for(const i of indices){assert.equal(rescue.select(i),true);assert.equal(rescue.place(i),true);update(8);}

 }
 return {room,vats,flow,rescue,inventory,update,breakTanks,prepareChairs};
}

test('the three tank stations and suspended Figpals are separated from both the laptop floor view and the player chair',()=>{
 const previous=globalThis.document,previousPath=globalThis.Path2D;globalThis.Path2D=class {};globalThis.document={createElement:()=>canvasMock(),createElementNS:()=>({addEventListener(){},removeEventListener(){},set src(value){}})};
 try{
  const {vats}=fixture();vats.group.updateMatrixWorld(true);
  for(const eye of [new THREE.Vector3(1.85221,.821615,3.1149),new THREE.Vector3(-.295,1.4,3.325)]){
   const angles=vats.rigs.map(({vat})=>{const p=vat.getWorldPosition(new THREE.Vector3());return Math.atan2(p.x-eye.x,eye.z-p.z);});
   for(let i=1;i<angles.length;i++)assert.ok(angles[i]-angles[i-1]>THREE.MathUtils.degToRad(12),'stations must spread left to right instead of lining up behind the front tank');
  }
  for(const {vat,rig,hanger}of vats.rigs){const tank=vat.getWorldPosition(new THREE.Vector3()),hoist=rig.getWorldPosition(new THREE.Vector3()),captive=hanger.getWorldPosition(new THREE.Vector3());assert.ok(Math.hypot(tank.x-hoist.x,tank.z-hoist.z)<1e-8,'the hoist moves with its tank');assert.ok(Math.hypot(tank.x-captive.x,tank.z-captive.z)<.08,'the swaying Figpal stays over its own tank');}
 }finally{globalThis.document=previous;globalThis.Path2D=previousPath;}
});

test('real hoists retain acid, require preparation before descent, and hop both living captives onto their positioned chairs',()=>{
 const previous=globalThis.document,previousPath=globalThis.Path2D;globalThis.Path2D=class {};globalThis.document={createElement:()=>canvasMock(),createElementNS:()=>({addEventListener(){},removeEventListener(){},set src(value){}})};
 try{
  const f=fixture();f.breakTanks();
  assert.equal(f.flow.remaining(0),BREACHED_TANK_RESIDUAL);
  // Preparing the route after this lowering starts must not save this captive.
  assert.equal(f.vats.lower(0),true);assert.equal(f.vats.rigs[0].rescuePlanned,false);f.prepareChairs();f.update(20,true);
  assert.equal(f.vats.rigs[0].transformation.damaged,true);assert.equal(f.vats.rigs[0].transformation.transformed,false);assert.equal(f.vats.rigs[0].rescued,false);
  f.vats.toggleHoist(0);f.update(20,true);assert.equal(f.vats.rigs[0].transformation.damaged,true,'raising cannot restore the bottom half');
  f.rescue.reset();f.vats.reset();f.flow.reset();f.inventory.reset();f.breakTanks();f.prepareChairs([0]);
  for(let i=0;i<2;i++){
   if(i===1)f.prepareChairs([1]);else assert.equal(f.rescue.state.chairs[1].repaired,false,'one chair works before the other is repaired');
   assert.equal(f.vats.lower(i),true);assert.equal(f.vats.rigs[i].rescuePlanned,true);f.update(20,true);
   assert.equal(f.vats.rigs[i].escaping,true);assert.equal(f.vats.isSettled(i),false,'timed camera holds throughout the hop');assert.equal(captureVictoryResult({rescue:f.rescue.state}).figpalsSaved,i,'an unfinished hop is not counted');
   const from=f.vats.rigs[i].hanger.getWorldPosition(new THREE.Vector3());f.update(.9);
   assert.ok(f.vats.rigs[i].hanger.getWorldPosition(new THREE.Vector3()).distanceTo(from)>.04);assert.equal(f.vats.rigs[i].transformation.damaged,false);
   for(let frame=0;frame<55;frame++)f.update(.1);
   assert.equal(f.vats.isSettled(i),true);assert.equal(f.vats.rigs[i].rescued,true);assert.equal(f.vats.rigs[i].hanger.parent,f.rescue.objects[i]);assert.equal(f.vats.rigs[i].transformation.damaged,false);assert.equal(f.vats.rigs[i].captive.visible,true);
   assert.equal(captureVictoryResult({rescue:f.rescue.state}).figpalsSaved,i+1,'each completed landing counts without towing');
   const seatedPosition=f.vats.rigs[i].hanger.position.clone();assert.equal(f.vats.isRescued(i),true);assert.equal(f.vats.lower(i),false);assert.ok(f.vats.rigs[i].hanger.position.equals(seatedPosition),'a rescued Figpal cannot be lowered from the chair');
  }
  assert.equal(f.rescue.state.ready,true);assert.equal(f.rescue.state.safe,true);assert.deepEqual(f.inventory.items,[],'no chain items were collected or equipped');
  f.rescue.reset();f.vats.reset();assert.ok(f.vats.rigs.every(r=>!r.rescued&&!r.escaping&&!r.rescuePlanned&&!r.transformation.damaged&&r.hanger.parent===r.rig));
 }finally{globalThis.document=previous;globalThis.Path2D=previousPath;}
});

test('winch chains stay in the scene and no chain inventory or pickup targets remain',()=>{
 const previous=globalThis.document,previousPath=globalThis.Path2D;globalThis.Path2D=class {};globalThis.document={createElement:()=>canvasMock(),createElementNS:()=>({addEventListener(){},removeEventListener(){},set src(value){}})};
 try{
  const f=fixture(createEscapePuzzle(()=>.9));f.breakTanks();
  for(let i=0;i<3;i++){
   assert.equal(f.inventory.add('chain'+i),false);assert.equal(f.vats.rigs[i].returnChain.object.visible,true);assert.equal(f.vats.rigs[i].loadChain.object.visible,true);
  }
  f.room.traverse(o=>{assert.equal(o.userData.chainPickup,undefined);assert.equal(o.userData.chainAnchor,undefined);});
  assert.match(f.vats.toggleHoist(0),/lowering/,'clicking the winch operates it directly');
  f.update(20,true);assert.equal(f.vats.rigs[0].lowered,true);assert.deepEqual(f.inventory.items,[]);
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
  for(const [i,dock]of docks.entries()){const local=f.vats.rigs[i].vat.worldToLocal(dock.clone());assert.ok(Math.abs(local.x)<.25,'the chair stays centered on its own tank');assert.ok(Math.hypot(local.x,local.z)>1.12&&Math.hypot(local.x,local.z)<1.20,'the chair parks close without clipping the base');}
  for(let i=0;i<docks.length;i++)for(let j=i+1;j<docks.length;j++)assert.ok(docks[i].distanceTo(docks[j])>CHAIR_RADIUS*2+CHAIR_GAP,'parked chairs have separate space in the aisle');
  for(const eye of [new THREE.Vector3(1.85221,.821615,3.1149),new THREE.Vector3(-.295,1.4,3.325)]){
   const angles=f.vats.rigs.map(({vat})=>{const p=vat.getWorldPosition(new THREE.Vector3());return Math.atan2(p.x-eye.x,eye.z-p.z);});
   for(const [i,dock]of docks.entries()){
    const angle=Math.atan2(dock.x-eye.x,eye.z-dock.z),offsets=angles.map(a=>Math.abs(a-angle));
    assert.equal(offsets.indexOf(Math.min(...offsets)),i,'a parked chair must line up with its own tank from both player viewpoints');
   }
  }
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
