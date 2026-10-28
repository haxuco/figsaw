import test from 'node:test';
import assert from 'node:assert/strict';
import {createFigpalLoweringDialogue,FIGPAL_RELIEF,FIGPAL_PLEAS} from '../dist/figpal-finale.js';
function fixture(){
 const dry=new Set(),silent=new Set(),lowered=new Set([0,1,2]),spoken=[],hidden=[];
 const dialogue=createFigpalLoweringDialogue({canSpeak:i=>!silent.has(i),isLowered:i=>lowered.has(i)},
  {show:(...args)=>spoken.push(args),hide:i=>hidden.push(i)},i=>dry.has(i),()=>.4);
 return{dry,silent,lowered,spoken,hidden,dialogue};
}
test('unsafe manual and timed descents get desperate pleas; only a drained tank gets relief',()=>{
 const f=fixture();f.dry.add(1);
 assert.ok(FIGPAL_PLEAS.includes(f.dialogue.show(0,2)));assert.ok(FIGPAL_RELIEF.includes(f.dialogue.show(1,2)));assert.ok(FIGPAL_PLEAS.includes(f.dialogue.show(2,2)));
 assert.deepEqual(f.spoken.map(s=>s[0]),[0,1,2]);
});
test('every desperate plea gets a turn before repeating, even across retry',()=>{
 const f=fixture(),lines=Array.from({length:FIGPAL_PLEAS.length},(_,i)=>f.dialogue.show(i%3,i));
 assert.deepEqual(new Set(lines),new Set(FIGPAL_PLEAS));f.dialogue.reset();assert.notEqual(f.dialogue.show(0,30),lines.at(-1));
});
test('all relief lines get a turn before repeating, and the next bag never repeats its last line',()=>{
 const f=fixture();[0,1,2].forEach(i=>f.dry.add(i));
 const lines=Array.from({length:FIGPAL_RELIEF.length},(_,i)=>f.dialogue.show(i%3,i));
 assert.equal(new Set(lines).size,FIGPAL_RELIEF.length);assert.deepEqual(new Set(lines),new Set(FIGPAL_RELIEF));assert.notEqual(f.dialogue.show(0,30),lines.at(-1));
});
test('a living Figpal switches from panic to relief when its own tank finishes draining mid-descent',()=>{
 const f=fixture();f.dialogue.show(0,0);f.dry.add(1);f.dialogue.update(1);assert.equal(f.spoken.length,1);
 f.dry.add(0);f.dialogue.update(2);assert.equal(f.spoken.length,2);assert.ok(FIGPAL_RELIEF.includes(f.spoken[1][2]));
 f.dialogue.update(3);assert.equal(f.spoken.length,2,'do not replace the bubble every frame');
});
test('skeletons and rescued Figpals stay silent even after the acid drains or another lowering is requested',()=>{
 const f=fixture();f.dialogue.show(0,0);f.silent.add(0);f.dry.add(0);f.dialogue.update(1);
 assert.equal(f.spoken.length,1);assert.equal(f.dialogue.show(0,2),null);assert.equal(f.spoken.length,1);assert.ok(f.hidden.includes(0));
});
test('raising, cancelling and retrying discard pending reactions without restarting the relief pool',()=>{
 const f=fixture();f.dialogue.show(0,0);f.lowered.delete(0);f.dialogue.update(1);f.dry.add(0);f.dialogue.update(2);assert.equal(f.spoken.length,1);
 f.lowered.add(0);const first=f.dialogue.show(0,3);f.dialogue.reset();f.dialogue.update(4);assert.equal(f.spoken.length,2);assert.notEqual(f.dialogue.show(0,5),first);
 f.dialogue.show(1,6);f.dialogue.hide(1);f.dry.add(1);f.dialogue.update(7);assert.equal(f.spoken.length,4);
});
