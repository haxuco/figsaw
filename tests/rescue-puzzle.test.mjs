import test from 'node:test';
import assert from 'node:assert/strict';
import {createEscapePuzzle,createDirectionalKeypadState} from '../dist/mobile-puzzle-state.js';
import {createInventory} from '../dist/inventory.js';
import {createRescueState,PLAYER_CHAIR} from '../dist/rescue-state.js';
import {createAcidFlow,BREACHED_TANK_RESIDUAL} from '../dist/acid-flow.js';

test('every retry reassigns the PM and keeps roles, clue identity and timed order consistent',()=>{
 let seed=15;const random=()=>((seed=(seed*1664525+1013904223)>>>0)/4294967296),p=createEscapePuzzle(random),seen=new Set();
 for(let i=0;i<100;i++){const old=p.pmIndex;seen.add(old);assert.equal(p.roles[old],'Product Manager');assert.equal(new Set(p.roles).size,3);assert.equal(p.dropOrder[2],old);assert.equal(new Set(p.dropOrder).size,3);p.reset();assert.notEqual(p.pmIndex,old);assert.equal(p.fishRevealed,false);}
 assert.equal(seen.size,3);
});
test('D-pad wraps values and slots; direct digits cannot bypass the awkward controls',()=>{
 const k=createDirectionalKeypadState({code:'9071'});assert.equal(k.entry,'0000');
 k.press('down',{locked:true});assert.equal(k.entry,'0000');k.press('9');assert.equal(k.entry,'0000');
 k.press('down');k.press('right');k.press('right');for(let i=0;i<7;i++)k.press('up');k.press('right');k.press('up');assert.equal(k.entry,'9071');
 k.press('right');assert.equal(k.selected,0);k.press('left');assert.equal(k.selected,3);assert.equal(k.press('enter'),'Door unlocked.');k.reset();assert.equal(k.unlocked,false);assert.equal(k.entry,'0000');
});
test('inventory consumes fitted parts, preserves reusable equipment and rejects removed tools',()=>{
 const i=createInventory(),r=createRescueState();
 for(const removed of['hammer','screwdriver','allen','ratchet','chain0','chain1','chain2']){assert.equal(i.add(removed),false);assert.equal(i.equip(removed),false);}
 assert.equal(i.equip('axe'),false);i.add('axe');i.add('caster');i.equip('axe');r.use(0,'axe',i);assert.equal(r.chairs[0].repaired,false);assert.equal(i.has('axe'),true);
 i.equip('caster');assert.equal(r.use(0,'caster',i),'Chair repaired.');assert.equal(i.has('caster'),false);assert.equal(i.equipped,null);assert.equal(r.chairs[0].repaired,true);assert.equal(i.has('axe'),true);
 i.reset();r.reset();assert.equal(i.items.length,0);assert.equal(r.chairs[0].repaired,false);
});
function repairedChairs(puzzle={pmIndex:2}){
 const inventory=createInventory(),state=createRescueState(puzzle);
 for(const item of ['caster','seat','base'])inventory.add(item);
 for(const [chair,part]of [[0,'caster'],[1,'seat'],[1,'base']])state.use(chair,part,inventory);
 return {inventory,state};
}
test('chairs become usable after their required parts are installed, in either order and without a tool',()=>{
 for(const order of [['seat','base'],['base','seat']]){
  const i=createInventory(),r=createRescueState();assert.equal(r.chairs.length,2);assert.equal(PLAYER_CHAIR,2);
  assert.equal(r.use(1,order[0],i),'Item not in inventory.');assert.equal(r.chairs[1].step,0);
  for(const id of order)i.add(id);
  assert.equal(r.use(1,'caster',i),'That item does not fit this chair.');
  r.use(1,order[0],i);assert.equal(r.chairs[1].repaired,false);assert.equal(r.canPlace(1,0),false);
  assert.equal(r.use(1,order[0],i),'Part already fitted.');
  assert.equal(r.use(1,order[1],i),'Chair repaired.');assert.equal(r.chairs[1].repaired,true);assert.equal(r.canPlace(1,0),true);
  assert.equal(i.has('seat'),false);assert.equal(i.has('base'),false);assert.equal(r.chairs[1].step,2);
 }
});
test('each survivor boards its own chair without chains or preparing the other chair',()=>{
 for(let pmIndex=0;pmIndex<3;pmIndex++){
  const survivors=[0,1,2].filter(n=>n!==pmIndex),r=createRescueState({pmIndex}),inventory=createInventory();
  inventory.add('caster');r.use(0,'caster',inventory);
  assert.equal(r.place(0,survivors[0]),true);assert.equal(r.canBoard(survivors[0],survivors[0]),true);
  assert.equal(r.chairs[1].repaired,false);assert.equal(r.safe,false);
  assert.equal(r.reserve(survivors[0],survivors[0]),true);assert.equal(r.board(survivors[0],survivors[0]),0);
  assert.equal(r.safe,false,'a Figpal in mid-hop is not yet safe');r.finishBoard(survivors[0]);assert.equal(r.safe,true);
  for(const part of ['base','seat']){inventory.add(part);r.use(1,part,inventory);}
  assert.equal(r.place(1,survivors[1]),true,'one saved Figpal does not block the other repair');
  assert.equal(r.reserve(survivors[1],survivors[1]),true);assert.equal(r.board(survivors[1],survivors[1]),1);r.finishBoard(survivors[1]);
  assert.equal(r.ready,true);const saved=r.capture();r.reset();assert.equal(r.safe,false);r.restore(saved);assert.equal(r.ready,true);
  assert.equal(r.canBoard(survivors[0],survivors[0]),false,'a rescued passenger cannot board again');
 }
});
test('chairs lock at survivor tanks and remain movable at the PM tank',()=>{
 for(let pmIndex=0;pmIndex<3;pmIndex++){
  const {state:r}=repairedChairs({pmIndex}),survivors=[0,1,2].filter(n=>n!==pmIndex),unplaced=r.capture();
  assert.equal(r.place(0,pmIndex),true);assert.equal(r.isParked(0),false);assert.equal(r.reserve(pmIndex,pmIndex),false);
  assert.equal(r.place(0,survivors[0]),true);assert.equal(r.isParked(0),true);
  for(let tank=0;tank<3;tank++)assert.equal(r.place(0,tank),false);
  assert.equal(r.place(1,survivors[0]),false,'two chairs cannot occupy one tank spot');assert.equal(r.place(1,survivors[1]),true);
  assert.equal(r.reserve(survivors[0],survivors[0]),true);assert.equal(r.board(survivors[0],survivors[0]),0);
  const parked=r.capture();r.restore(unplaced);assert.equal(r.canPlace(0,pmIndex),true);r.restore(parked);assert.equal(r.isParked(0),true);
  r.reset();assert.equal(r.isParked(0),false);
 }
});
test('PM and damaged captives cannot reserve a chair; retry clears reservations and passengers',()=>{
 const puzzle={pmIndex:0},{state:r}=repairedChairs(puzzle);
 r.place(0,1);r.place(1,2);
 assert.equal(r.reserve(0,0),false);assert.equal(r.reserve(1,1,{alive:false}),false);
 assert.equal(r.board(1,1),-1,'boarding without a pre-descent reservation is forbidden');
 assert.equal(r.reserve(1,1),true);assert.equal(r.place(1,0),false,'the route cannot move during a descent');assert.equal(r.board(1,1),0);
 assert.equal(r.reserve(2,1),false,'no duplicate passenger');
 puzzle.pmIndex=2;r.reset();const i=createInventory();for(const id of ['caster','seat','base'])i.add(id);
 for(const [chair,part]of [[0,'caster'],[1,'seat'],[1,'base']])r.use(chair,part,i);
 r.place(0,0);r.place(1,1);assert.equal(r.reserve(2,2),false);assert.equal(r.reserve(0,0),true);r.cancelReservation(0);assert.equal(r.board(0,0),-1);assert.equal(r.reserve(0,0),true);assert.equal(r.board(0,0),0);
});
test('finite draining leaves broad persistent puddles that ignore camera and cable targets',()=>{
 const a=createAcidFlow(),b=createAcidFlow();a.open(0,{x:0,y:.01,z:0},0,false,{breach:true});b.open(0,{x:0,y:.01,z:0},0,false,{breach:true});
 for(let t=0;t<40;t+=.1){a.update(t,.1,{x:20,z:20},{target:{x:2,z:4}});b.update(t,.1,{x:-20,z:-20},{target:{x:-2,z:-4}});}
 assert.deepEqual(a.leaks,b.leaks);assert.equal(a.remaining(0),BREACHED_TANK_RESIDUAL);assert.equal(a.leaks[0].pouring,0);assert.equal(a.outflowFinished(0),true);
 const points=a.leaks[0].points;assert.ok(points.some(p=>p.x>2)&&points.some(p=>p.x<-2)&&points.some(p=>p.z>2)&&points.some(p=>p.z<-2));assert.ok(points.length<=180);
 a.update(50,.1,{x:0,z:0},{protectedFromAcid:true});assert.equal(a.dying,false);a.update(51,.1,{x:0,z:0});assert.equal(a.dying,true);assert.equal(a.update(52,.1,{x:0,z:0}),true);a.reset();assert.equal(a.remaining(0),1);
});
test('breaking a partly emptied tank accelerates only the remaining reservoir without refilling it',()=>{
 const f=createAcidFlow();f.open(1,{x:0,y:.1,z:0},0);f.update(10,.1,{x:20,z:20});const before=f.remaining(1);assert.ok(before<1&&before>0);
 f.breach(1,{x:1,y:.1,z:0},10);f.update(10.5,.1,{x:20,z:20});assert.ok(f.remaining(1)<=before);f.update(30,.1,{x:20,z:20});assert.equal(f.remaining(1),BREACHED_TANK_RESIDUAL);assert.equal(f.breach(1,{x:1,z:0},31),false);
});

test('breaking a tank below the hole never refills it, and neutralizing floor acid leaves the residual hazardous',()=>{
 for(const end of [18,40]){
  const f=createAcidFlow();f.open(0,{x:0,y:.1,z:0},0);f.update(end,.1,{x:20,z:20});const before=f.remaining(0);
  assert.ok(before<BREACHED_TANK_RESIDUAL);f.breach(0,{x:1,y:.1,z:0},end);f.update(end+30,.1,{x:20,z:20});assert.equal(f.remaining(0),before);
 }
 const f=createAcidFlow();assert.equal(f.outflowFinished(1),false);f.breach(1,{x:0,y:.1,z:0},0);f.update(15,.1,{x:20,z:20});f.neutralize();f.update(40,.1,{x:0,z:0});assert.equal(f.remaining(1),BREACHED_TANK_RESIDUAL);assert.equal(f.dying,false);f.reset();assert.equal(f.outflowFinished(1),false);assert.equal(f.remaining(1),1);
});
