import test from 'node:test';
import assert from 'node:assert/strict';
import {validateDisplayName} from '../dist/display-name.js';
import {captureRankedEscape,remainingEscapeTime,createLocalLeaderboard,rankedEntries,prospectiveRank,LEADERBOARD_STORAGE_KEY} from '../dist/leaderboard.js';

const run=(id,remainingSeconds=900)=>({id,eligible:true,attempt:3,remainingSeconds});
function storage(){const data=new Map();return {getItem:key=>data.get(key)??null,setItem:(key,value)=>data.set(key,value),data};}
function fixture(pmIndex=2){return {id:'win',attempt:4,intervalSeconds:340,scheduledDrops:0,pmIndex,rigs:Array.from({length:3},()=>({transformation:{transformed:false}})),rescue:{safe:true,chairs:[0,1,2].filter(i=>i!==pmIndex).map(passenger=>({passenger,landed:true}))}};}

test('only both living non-PMs safely seated qualify, regardless of the randomized PM identity',()=>{
 for(let pmIndex=0;pmIndex<3;pmIndex++){
  const f=fixture(pmIndex);f.rigs[pmIndex].transformation.transformed=true;
  const result=captureRankedEscape(f);assert.equal(result.eligible,true);assert.equal(result.remainingSeconds,940);assert.equal(Object.isFrozen(result),true);
  f.rescue.safe=false;assert.equal(captureRankedEscape(f).eligible,false);f.rescue.safe=true;
  f.rigs[f.rescue.chairs[0].passenger].transformation.damaged=true;assert.equal(captureRankedEscape(f).eligible,false);f.rigs[f.rescue.chairs[0].passenger].transformation.damaged=false;
  f.rigs[f.rescue.chairs[0].passenger].transformation.transformed=true;assert.equal(captureRankedEscape(f).eligible,false);
 }
 const f=fixture();f.rescue.chairs[1].passenger=2;assert.equal(captureRankedEscape(f).eligible,false,'a PM in a chair cannot replace a survivor');
 f.rescue.chairs[1].passenger=0;assert.equal(captureRankedEscape(f).eligible,false,'duplicate passenger IDs do not count twice');
});

test('diagnostic attempts are unranked and frozen results cannot be changed by later gameplay',()=>{
 const f=fixture();assert.equal(captureRankedEscape({...f,assisted:true}).reason,'diagnostic');
 const result=captureRankedEscape(f);f.rescue.safe=false;f.rigs[0].transformation.transformed=true;assert.equal(result.eligible,true);
 assert.equal(captureRankedEscape({...fixture(),intervalSeconds:NaN}).eligible,false);
 assert.equal(captureRankedEscape({...fixture(),intervalSeconds:0,scheduledDrops:1}).eligible,true,'a zero-second escape is still a win');
 assert.equal(captureRankedEscape({...fixture(),scheduledDrops:2}).eligible,false);
});

test('ranking uses the entire twenty-minute budget instead of rewarding a reset timer',()=>{
 assert.equal(remainingEscapeTime(600,0),1200);assert.equal(remainingEscapeTime(1,0),601);
 assert.equal(remainingEscapeTime(600,1),600);assert.equal(remainingEscapeTime(1,1),1);assert.equal(remainingEscapeTime(0,1),0);
 assert.equal(remainingEscapeTime(600,2),0);assert.equal(remainingEscapeTime(NaN,0),0);
 assert.equal(remainingEscapeTime(300,7),0);
});

test('names accept normal international names and reject profanity, common disguises and markup',()=>{
 for(const name of ['Maya Chen','O’Connor','Anne-Marie','José','Zoë','李 明','Ada_42','Scunthorpe','Hancock','Dickens','Cassandra','Shital'])assert.equal(validateDisplayName(name).ok,true,name);
 assert.deepEqual(validateDisplayName('  Maya   Chen '),{ok:true,name:'Maya Chen'});
 for(const name of ['fuck','FUCKYOU','f.u.c.k','f.u.c.k.','F U C K','fuuuck','fück','ｆｕｃｋ','f\u200buck','sh1t','S H I T','b1tch','biiitch','bastard123','123bastard','c.u.n.t','asshole','<script>alert(1)</script>','a','a'.repeat(25),'...'])assert.equal(validateDisplayName(name).ok,false,name);
});

test('the board keeps ten names, descending time, and stable earlier-first ties',async()=>{
 const s=storage();let now=0;const repo=createLocalLeaderboard({storage:s,now:()=>now++});
 for(let i=0;i<13;i++)await repo.submit({run:run(`r${i}`,900+i),name:`Player ${i}`});
 const entries=await repo.list();assert.equal(entries.length,10);assert.equal(entries[0].remainingSeconds,912);assert.equal(entries[9].remainingSeconds,903);
 assert.equal(prospectiveRank(entries,903),11);assert.equal(prospectiveRank(entries,913),1);
 const loaded=await createLocalLeaderboard({storage:s}).list();assert.deepEqual(loaded,entries);
 const tie=await repo.submit({run:run('tie',912),name:'Equal time'});assert.equal(tie.rank,2);assert.equal(tie.entries[0].id,'r12');
 const slow=await repo.submit({run:run('slow',0),name:'Just escaped'});assert.equal(slow.rank,null);assert.equal((await repo.list()).length,10);
});

test('one best result per name and one submission per run prevent duplicate places',async()=>{
 const repo=createLocalLeaderboard({storage:storage(),now:()=>10});
 await repo.submit({run:run('first',900),name:'Maya'});
 const slower=await repo.submit({run:run('second',800),name:'maya'});assert.equal(slower.improved,false);assert.equal(slower.entry.id,'first');
 const better=await repo.submit({run:run('third',1000),name:'MAYA'});assert.equal(better.improved,true);assert.equal(better.entry.id,'third');assert.equal((await repo.list()).length,1);
 const duplicate=await repo.submit({run:run('third',1100),name:'Different name'});assert.equal(duplicate.entry.name,'MAYA');assert.equal(duplicate.entry.remainingSeconds,1000);assert.equal((await repo.list()).length,1);
 assert.equal((await repo.submit({run:{...run('cheat'),eligible:false},name:'Tester'})).ok,false);
 assert.equal((await repo.submit({run:run('curse'),name:'f.u.c.k'})).ok,false);
});

test('corrupt storage and unsafe stored names do not render, and blocked storage falls back to this visit',async()=>{
 const s=storage();s.data.set(LEADERBOARD_STORAGE_KEY,'not json');const repo=createLocalLeaderboard({storage:s,now:()=>1});
 assert.deepEqual(await repo.list(),[]);assert.equal(repo.persistent,true);await repo.submit({run:run('safe'),name:'Maya'});assert.equal((await repo.list()).length,1);
 s.data.set(LEADERBOARD_STORAGE_KEY,JSON.stringify([{id:'bad',name:'fuck',remainingSeconds:1199,attempt:1,createdAt:1}]));assert.deepEqual(await repo.list(),[]);
 const memory=createLocalLeaderboard({storage:{getItem(){throw Error();},setItem(){throw Error();}},now:()=>2});
 const result=await memory.submit({run:run('memory'),name:'Ava'});assert.equal(result.rank,1);assert.equal(memory.persistent,false);assert.equal((await memory.list())[0].name,'Ava');
 const unavailable=createLocalLeaderboard({storage:{getItem:()=>null,setItem(){throw Error();}},now:()=>3});await unavailable.submit({run:run('quota'),name:'Kai'});assert.equal(unavailable.persistent,false);assert.equal((await unavailable.list()).length,1);
});

test('stored ordering never mutates source records and malformed scores are discarded',()=>{
 const values=[{id:'a',name:'Ava',remainingSeconds:1200,attempt:1,createdAt:2},{id:'b',name:'Kai',remainingSeconds:1200,attempt:1,createdAt:1},{id:'c',name:'Invalid',remainingSeconds:9999,attempt:1,createdAt:1}];
 const ranked=rankedEntries(values);assert.deepEqual(ranked.map(e=>e.id),['b','a']);assert.deepEqual(values.map(e=>e.id),['a','b','c']);
 ranked[0].name='Edited';assert.equal(values[1].name,'Kai');
});
