import test from 'node:test';
import assert from 'node:assert/strict';
import {createEscapePuzzle,createDirectionalKeypadState} from '../dist/mobile-puzzle-state.js';
import {createInventory} from '../dist/inventory.js';
import {createRescueState,PLAYER_CHAIR} from '../dist/rescue-state.js';
import {createAcidFlow} from '../dist/acid-flow.js';

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
test('inventory only equips collected objects, consumes installed parts and preserves reusable tools',()=>{
 const i=createInventory(),r=createRescueState();
 for(const removed of['hammer','screwdriver','allen']){assert.equal(i.add(removed),false);assert.equal(i.equip(removed),false);}
 assert.equal(i.equip('ratchet'),false);i.add('ratchet');i.add('caster');i.equip('ratchet');r.use(0,'ratchet',i);assert.equal(r.chairs[0].repaired,false);assert.equal(i.has('ratchet'),true);
 i.equip('caster');r.use(0,'caster',i);assert.equal(i.has('caster'),false);assert.equal(i.equipped,null);r.use(0,'ratchet',i);assert.equal(r.chairs[0].repaired,true);assert.equal(i.has('ratchet'),true);i.putAway();assert.equal(i.has('ratchet'),true);
 i.reset();r.reset();assert.equal(i.items.length,0);assert.equal(r.chairs[0].repaired,false);
});
function repairedChairs(puzzle={pmIndex:2}){
 const inventory=createInventory(),state=createRescueState(puzzle);
 for(const item of ['caster','seat','base','ratchet'])inventory.add(item);
 for(const [chair,part,tool]of [[0,'caster','ratchet'],[1,'seat','ratchet'],[1,'base','ratchet']]){state.use(chair,part,inventory);state.use(chair,tool,inventory);}
 return {inventory,state};
}
test('both chairs require their salvaged parts, with the ratchet as the only repair tool',()=>{
 const i=createInventory(),r=createRescueState();assert.equal(r.chairs.length,2);assert.equal(PLAYER_CHAIR,2);
 for(const id of['seat','base','ratchet'])i.add(id);
 r.use(1,'base',i);assert.equal(i.has('base'),true,'seat must be repaired before the base');
 r.use(1,'seat',i);r.use(1,'ratchet',i);assert.equal(r.chairs[1].repaired,false);
 r.use(1,'base',i);assert.equal(r.chairs[1].repaired,false,'fitting a base still needs the ratchet');
 i.remove('ratchet');r.use(1,'ratchet',i);assert.equal(r.chairs[1].repaired,false,'the wrench must be collected');
 i.add('ratchet');r.use(1,'ratchet',i);assert.equal(r.chairs[1].repaired,true);
 assert.equal(i.has('seat'),false);assert.equal(i.has('base'),false);assert.equal(i.has('ratchet'),true);
});
test('exactly two survivors and two chains complete the train for every randomized PM',()=>{
 for(let pmIndex=0;pmIndex<3;pmIndex++){
  const {state:r}=repairedChairs({pmIndex}),survivors=[0,1,2].filter(n=>n!==pmIndex);
  assert.equal(r.place(0,survivors[0]),true);assert.equal(r.place(1,survivors[0]),false);r.place(1,survivors[1]);
  assert.equal(r.board(survivors[0],survivors[0]),0);assert.equal(r.board(survivors[1],survivors[1]),1);
  assert.equal(r.connect(PLAYER_CHAIR,0,'chain'+survivors[0]),true);
  assert.equal(r.ready,false);assert.equal(r.startPull(),false);
  assert.equal(r.connect(0,1,'chain'+survivors[1]),true);
  assert.equal(r.connect(1,PLAYER_CHAIR,'chain'+pmIndex),false);
  assert.equal(r.connect(0,3,'chain'+pmIndex),false,'no phantom fourth chair');
  assert.equal(r.ready,true);assert.equal(r.startPull(),true);r.finishPull();assert.equal(r.safe,true);
  r.reset();assert.equal(r.chairs.length,2);assert.equal(r.safe,false);assert.equal(r.links.length,0);assert.equal(r.ready,false);
 }
});
test('PM and skeletons cannot take a rescue chair, and retries use the new PM identity',()=>{
 const puzzle={pmIndex:0},{state:r}=repairedChairs(puzzle);
 r.place(0,0);assert.equal(r.board(0,0),-1);assert.equal(r.chairs[0].passenger,null);
 r.place(0,1);assert.equal(r.board(1,1,{alive:false}),-1);assert.equal(r.chairs[0].passenger,null);
 assert.equal(r.board(1,1),0);r.place(1,2);assert.equal(r.board(2,1),-1,'no duplicate passenger');
 puzzle.pmIndex=2;r.reset();
 const i=createInventory();i.add('caster');i.add('ratchet');r.use(0,'caster',i);r.use(0,'ratchet',i);
 r.place(0,2);assert.equal(r.board(2,2),-1);r.place(0,0);assert.equal(r.board(0,0),0);
});
test('finite draining leaves broad persistent puddles that ignore camera and cable targets',()=>{
 const a=createAcidFlow(),b=createAcidFlow();a.open(0,{x:0,y:.01,z:0},0,false,{breach:true});b.open(0,{x:0,y:.01,z:0},0,false,{breach:true});
 for(let t=0;t<40;t+=.1){a.update(t,.1,{x:20,z:20},{target:{x:2,z:4}});b.update(t,.1,{x:-20,z:-20},{target:{x:-2,z:-4}});}
 assert.deepEqual(a.leaks,b.leaks);assert.equal(a.remaining(0),0);assert.equal(a.leaks[0].pouring,0);
 const points=a.leaks[0].points;assert.ok(points.some(p=>p.x>2)&&points.some(p=>p.x<-2)&&points.some(p=>p.z>2)&&points.some(p=>p.z<-2));assert.ok(points.length<=180);
 a.update(50,.1,{x:0,z:0},{protectedFromAcid:true});assert.equal(a.dying,false);a.update(51,.1,{x:0,z:0});assert.equal(a.dying,true);assert.equal(a.update(52,.1,{x:0,z:0}),true);a.reset();assert.equal(a.remaining(0),1);
});
test('breaking a partly emptied tank accelerates only the remaining reservoir without refilling it',()=>{
 const f=createAcidFlow();f.open(1,{x:0,y:.1,z:0},0);f.update(10,.1,{x:20,z:20});const before=f.remaining(1);assert.ok(before<1&&before>0);
 f.breach(1,{x:1,y:.1,z:0},10);f.update(10.5,.1,{x:20,z:20});assert.ok(f.remaining(1)<=before);f.update(30,.1,{x:20,z:20});assert.equal(f.remaining(1),0);assert.equal(f.breach(1,{x:1,z:0},31),false);
});
