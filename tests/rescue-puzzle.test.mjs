import test from 'node:test';
import assert from 'node:assert/strict';
import {createEscapePuzzle,createDirectionalKeypadState} from '../dist/mobile-puzzle-state.js';
import {createInventory} from '../dist/inventory.js';
import {createRescueState} from '../dist/rescue-state.js';
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
 const i=createInventory(),r=createRescueState();assert.equal(i.equip('hammer'),false);i.add('hammer');i.add('caster');i.equip('hammer');r.use(0,'hammer',i);assert.equal(r.chairs[0].repaired,false);assert.equal(i.has('hammer'),true);
 i.equip('caster');r.use(0,'caster',i);assert.equal(i.has('caster'),false);assert.equal(i.equipped,null);r.use(0,'hammer',i);assert.equal(r.chairs[0].repaired,true);assert.equal(i.has('hammer'),true);i.putAway();assert.equal(i.has('hammer'),true);
 i.reset();r.reset();assert.equal(i.items.length,0);assert.equal(r.chairs[0].repaired,false);
});
test('ratchet requires its hex sockets; chairs occupy unique slots and chains cannot form loops',()=>{
 const i=createInventory(),r=createRescueState();for(const id of['caster','seat','base','hammer','screwdriver','ratchet'])i.add(id);
 r.use(2,'base',i);r.use(2,'ratchet',i);assert.equal(r.chairs[2].repaired,false);i.add('allen');r.use(2,'ratchet',i);assert.equal(r.chairs[2].repaired,true);
 for(const [n,p,t]of[[0,'caster','hammer'],[1,'seat','screwdriver']]){r.use(n,p,i);r.use(n,t,i);}
 assert.equal(r.place(0,0),true);assert.equal(r.place(1,0),false);r.place(1,1);r.place(2,2);
 for(let n=0;n<3;n++)assert.equal(r.board(n,n),n);
 assert.equal(r.connect(3,0,'chain0'),true);assert.equal(r.connect(0,1,'chain1'),true);assert.equal(r.connect(1,3,'chain2'),false);assert.equal(r.connect(1,2,'chain2'),true);
 assert.equal(r.ready,true);assert.equal(r.startPull(),true);assert.equal(r.connect(0,2,'chain2'),false);r.finishPull();assert.equal(r.safe,true);
 r.reset();assert.equal(r.safe,false);assert.equal(r.links.length,0);assert.equal(r.ready,false);
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
