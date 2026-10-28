import test from 'node:test';
import assert from 'node:assert/strict';
import {createLaptopChallenge,scoreKerning,KERNING_PASS_SCORE} from '../dist/laptop-challenge.js';
const layouts=()=>['TYPE','VECTOR','DESIGN'].map(word=>({word,font:'100px Arial',fontSize:100,label:'Test face',widths:[...word].map(()=>60),positions:[...word].map((_,i)=>100+i*70)}));
function arrange(game,layout,error=0){for(let i=1;i<layout.positions.length-1;i++)game.move(i,layout.positions[i]+error);}

test('90 is the inclusive pass boundary; 89 cannot advance or finish a word',()=>{
 const data=layouts(),game=createLaptopChallenge(data,{random:()=>.4});
 assert.equal(KERNING_PASS_SCORE,90);assert.equal(game.next(),false);assert.equal(game.check(),false);
 arrange(game,data[0],3.52);assert.equal(scoreKerning(game.positions,data[0]),89);const failed=game.positions;
 assert.equal(game.check(),false);assert.deepEqual(game.positions,failed,'keep the player’s spacing for another attempt');assert.equal(game.next(),false);assert.match(game.message,/Try again/);assert.doesNotMatch(game.message,/89|90|left|right|pixel/i);
 arrange(game,data[0],3.2);assert.equal(scoreKerning(game.positions,data[0]),90);assert.equal(game.check(),true);assert.equal(game.accepted,true);assert.equal(game.completed,false);
 assert.equal(game.move(1,200),false,'accepted arrangements stay locked until Next');
});

test('each of three distinct words must pass, and repeat submissions cannot skip rounds',()=>{
 const data=layouts(),game=createLaptopChallenge(data,{random:()=>.6});
 for(let round=0;round<3;round++){
  assert.equal(game.round,round);assert.equal(game.check(),false);assert.equal(game.completed,false);
  arrange(game,data[round]);assert.equal(game.check(),true);assert.equal(game.check(),true);assert.equal(game.round,round);
  assert.deepEqual(game.passed,[0,1,2].map(i=>i<=round));
  assert.equal(game.completed,round===2);assert.equal(game.next(),round<2);
 }
 assert.equal(game.next(),false);assert.equal(game.completed,true);
});

test('fixed ends, letter order, and finite movement bounds survive large drags and invalid input',()=>{
 const data=layouts(),game=createLaptopChallenge(data),before=game.positions;
 for(const i of[-1,0,3,4,1.5])assert.equal(game.move(i,0),false);
 for(const value of[NaN,Infinity,-Infinity])assert.equal(game.move(1,value),false);
 game.move(1,-10000);let p=game.positions;assert.ok(p[1]>p[0]);game.move(2,10000);p=game.positions;assert.ok(p[2]<p[3]);assert.equal(p[0],before[0]);assert.equal(p[3],before[3]);
 arrange(game,data[0]);assert.equal(game.check(),true,'bounded initial arrangements remain solvable');
});

test('font-normalized scoring is consistent across type sizes and rejects malformed positions',()=>{
 const small=layouts()[0],large={...small,fontSize:200,positions:small.positions.map(x=>x*2)};
 const a=small.positions.map((x,i)=>i>0&&i<3?x+3.2:x),b=a.map(x=>x*2);
 assert.equal(scoreKerning(a,small),90);assert.equal(scoreKerning(b,large),90);
 assert.equal(scoreKerning([],small),0);assert.equal(scoreKerning([100,NaN,240,310],small),0);
});

test('capture and restore preserve partial work and passed words without sharing arrays',()=>{
 const data=layouts(),game=createLaptopChallenge(data);arrange(game,data[0]);game.check();game.next();game.move(1,game.positions[1]+2);
 const saved=game.capture(),positions=game.positions;game.complete();assert.equal(game.completed,true);assert.equal(game.restore(saved),true);assert.equal(game.completed,false);assert.equal(game.round,1);assert.deepEqual(game.positions,positions);assert.deepEqual(game.passed,[true,false,false]);
 saved.positions[1]+=10;saved.passed[0]=false;assert.deepEqual(game.positions,positions);assert.deepEqual(game.passed,[true,false,false]);
 game.reset();assert.equal(game.round,0);assert.deepEqual(game.passed,[false,false,false]);assert.equal(game.completed,false);
 assert.equal(game.restore({round:2,positions:data[2].positions,passed:[false,false,true],accepted:true}),false);assert.equal(game.round,0);
});

test('fresh attempts never start already solved, even with deterministic random extremes',()=>{
 for(const random of[()=>0,()=>.5,()=>.999999]){
  const data=layouts(),game=createLaptopChallenge(data,{random});
  for(let i=0;i<3;i++){assert.ok(scoreKerning(game.positions,data[i])<90);arrange(game,data[i]);game.check();game.next();}
 }
});
