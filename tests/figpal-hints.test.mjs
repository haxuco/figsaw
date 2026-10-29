import test from 'node:test';
import assert from 'node:assert/strict';
import {createFigpalHints,FIGPAL_HINTS} from '../dist/figpal-hints.js';

function fixture(){
 const tanks=Array.from({length:3},()=>({broken:false})),silent=new Set(),lowered=new Set(),drained=new Set(),ready=new Set(),chairs=new Set(),remaining=[.2,.2,.2],spoken=[],puzzle={pmIndex:2};let until=0;
 const acidLeaks={neutralized:false,outflowFinished:i=>drained.has(i),remaining:i=>remaining[i]};
 const hints=createFigpalHints({hoists:{tanks,isHanging:i=>!lowered.has(i),canSpeak:i=>!silent.has(i)},
  bubbles:{isActive:t=>t<until,show(index,time,line,duration){spoken.push({index,time,line});until=time+duration;}},
  acidLeaks,
  rescue:{state:{canBoard:i=>ready.has(i),chairAt:i=>chairs.has(i)?0:-1}},puzzle});
 return {tanks,silent,lowered,drained,ready,chairs,remaining,spoken,puzzle,acidLeaks,hints};
}
test('a broken tank warns about its residual acid only after the gush finishes, including after the floor is neutralized',()=>{
 const f=fixture();assert.equal(f.hints.update(0),null);f.tanks[0].broken=true;
 assert.equal(f.hints.update(1),null);f.drained.add(0);f.acidLeaks.neutralized=true;
 assert.equal(f.hints.update(2).line,FIGPAL_HINTS.residual);assert.equal(f.spoken[0].index,0);
 assert.equal(f.spoken[0].line,"Don't lower me yet, there's still some acid on the bottom of the tank.");
 f.puzzle.pmIndex=0;assert.equal(f.hints.update(100),null,'the same warning is not repeated every frame');
});
test('ready rescue routes, empty tanks, skeletons and captives already being lowered do not get a misleading warning',()=>{
 for(const condition of ['ready','empty','silent','lowered']){
  const f=fixture();f.tanks[0].broken=true;f.drained.add(0);
  if(condition==='empty')f.remaining[0]=0;else f[condition].add(0);
  assert.equal(f.hints.update(3),null);assert.equal(f.spoken.length,0);
 }
});
test('hints wait for inspections and existing dialogue without being lost or replacing a scream',()=>{
 const f=fixture();f.tanks[0].broken=true;f.drained.add(0);
 assert.equal(f.hints.update(3,true),null);assert.equal(f.hints.update(10).key,'residual');
 f.tanks[1].broken=true;f.drained.add(1);
 assert.equal(f.hints.update(15),null);assert.equal(f.hints.update(22).index,1);
 assert.deepEqual(f.spoken.map(s=>s.index),[0,1]);
});
test('occasional follow-ups reflect the missing landing and chains, then stop once the actual route can board',()=>{
 const f=fixture();f.tanks[0].broken=true;f.drained.add(0);
 assert.equal(f.hints.update(2).key,'residual');assert.equal(f.hints.update(31),null);
 assert.equal(f.hints.update(32).key,'landing');f.chairs.add(0);
 assert.equal(f.hints.update(63).key,'chains');f.ready.add(0);
 assert.equal(f.hints.update(94),null);assert.equal(f.spoken.length,3);
});
test('PM dialogue does not promise an impossible chair rescue, and new tank warnings take priority over follow-ups',()=>{
 const f=fixture();f.tanks[0].broken=true;f.drained.add(0);f.hints.update(2);
 f.tanks[1].broken=true;f.drained.add(1);assert.equal(f.hints.update(32).index,1);
 f.puzzle.pmIndex=0;assert.equal(f.hints.update(44),null);
 f.hints.reset();assert.equal(f.hints.update(45).key,'residual','retry and diagnostic undo restore appropriate contextual hints');
});
