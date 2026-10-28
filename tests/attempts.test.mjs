import test from 'node:test';
import assert from 'node:assert/strict';
import {createAttemptTracker,ATTEMPT_STORAGE_KEY} from '../dist/attempts.js';
import {attemptLabel} from '../dist/game-over-share.js';
function memory(value){const values=new Map(value===undefined?[]:[[ATTEMPT_STORAGE_KEY,value]]);return{getItem:key=>values.get(key)??null,setItem:(key,value)=>values.set(key,value)};}

test('first visit, retries and fresh page instances all increment the same persistent attempt count',()=>{
 const storage=memory(),firstPage=createAttemptTracker(storage);assert.equal(firstPage.count,1);
 assert.equal(firstPage.next(),2);assert.equal(firstPage.count,2);
 const refreshedPage=createAttemptTracker(storage);assert.equal(refreshedPage.count,3);assert.equal(refreshedPage.next(),4);
 assert.equal(storage.getItem(ATTEMPT_STORAGE_KEY),'4');
});
test('retries read attempts from other tabs without changing the current game’s displayed number',()=>{
 const storage=memory(),a=createAttemptTracker(storage),b=createAttemptTracker(storage);
 assert.equal(a.count,1);assert.equal(b.count,2);assert.equal(a.next(),3);assert.equal(b.next(),4);
});
test('corrupt or unavailable storage cannot break the game, and in-page retries still count',()=>{
 for(const value of ['bad','-1','1.5','Infinity','9007199254740992',''])assert.equal(createAttemptTracker(memory(value)).count,1);
 const blocked={getItem(){throw Error('blocked');},setItem(){throw Error('blocked');}},tracker=createAttemptTracker(blocked);assert.equal(tracker.count,1);assert.equal(tracker.next(),2);
 assert.equal(createAttemptTracker(null).next(),2);
 const full=createAttemptTracker(memory(String(Number.MAX_SAFE_INTEGER)));assert.equal(full.next(),Number.MAX_SAFE_INTEGER);
});
test('result labels preserve large counts and use a safe first attempt for invalid input',()=>{
 assert.equal(attemptLabel(1),'Attempt 1');assert.equal(attemptLabel(342),'Attempt 342');assert.equal(attemptLabel(NaN),'Attempt 1');
});
