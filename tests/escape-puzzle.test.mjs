import test from 'node:test';
import assert from 'node:assert/strict';
import {createEscapePuzzle,createDoorKeypadState,ANIMALS} from '../dist/mobile-puzzle-state.js';
import {fishSkullDocument} from '../dist/fish-skull-clue.js';
function seeded(seed){return()=>((seed=(1664525*seed+1013904223)>>>0)/4294967296);}
test('each game uses four distinct digits and an animal permutation; the skull and keypad agree',()=>{
 const puzzle=createEscapePuzzle(seeded(23908)),keypad=createDoorKeypadState({puzzle});let previous=null;
 for(let round=0;round<100;round++){
  assert.deepEqual([...puzzle.order].sort(),[...ANIMALS].sort());assert.equal(new Set(Object.values(puzzle.digits)).size,4);assert.match(puzzle.code,/^[1-9]{4}$/);
  assert.equal(puzzle.letters,puzzle.order.map(a=>a[0]).join(''));assert.equal(puzzle.code,puzzle.order.map(a=>puzzle.digits[a]).join(''));assert.notEqual(puzzle.code,previous);
  for(const n of'0000')keypad.press(n);assert.equal(keypad.press('enter'),'Incorrect order.');assert.equal(keypad.unlocked,false);
  for(const n of puzzle.code)keypad.press(n);assert.equal(keypad.press('enter'),'Door unlocked.');assert.equal(keypad.unlocked,true);
  previous=puzzle.code;puzzle.reset();keypad.reset();assert.equal(keypad.unlocked,false);assert.equal(keypad.entry,'');
 }
});
test('the fish clue persists after raising the skeleton, but a fresh attempt hides it and replaces both clues',()=>{
 const p=createEscapePuzzle(seeded(7));assert.equal(p.fishRevealed,false);p.revealFish();assert.equal(p.fishRevealed,true);
 const old={digits:p.digits,order:p.order,revision:p.revision};p.reset();assert.equal(p.fishRevealed,false);assert.equal(p.revision,old.revision+1);assert.notStrictEqual(p.digits,old.digits);assert.notStrictEqual(p.order,old.order);
 const view=fishSkullDocument(p);assert.ok(view.svg.includes(p.letters.split('').join('  ')));assert.ok(!view.svg.includes(p.code));
});
test('identical random draws on retry still cannot reuse the previous code',()=>{
 const p=createEscapePuzzle(()=>0);const first=p.code,order=[...p.order],digits={...p.digits};p.reset();assert.notEqual(p.code,first);assert.notDeepEqual(p.order,order);assert.notDeepEqual(p.digits,digits);
});
test('a locked wrist cannot enter a known code, and partial or invalid entries cannot unlock',()=>{
 const p=createEscapePuzzle(seeded(4)),k=createDoorKeypadState({puzzle:p});for(const n of p.code)k.press(n,{locked:true});assert.equal(k.entry,'');assert.equal(k.unlocked,false);
 k.press(p.code[0]);assert.equal(k.press('enter'),'Enter four numbers.');k.press('clear');assert.equal(k.entry,'');k.press('hello');assert.equal(k.entry,'');
});
