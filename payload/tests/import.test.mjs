import test from 'node:test';import assert from 'node:assert/strict';
import {prepareLegacyImport,importLegacy} from '../src/core/legacy-import.mjs';
const score={id:'123e4567-e89b-12d3-a456-426614174001',name:'Ada',name_source:'alias',remaining_seconds:940,attempt:3,created_at:Date.now()-1000};
const data=()=>({kind:'figsaw-legacy-export',version:1,visits:[],attempts:[],scores:[score]});
test('legacy import is dry-run by default, discards unknown fields and rejects unconsented or offensive names',async()=>{
 const d=data();d.scores.push({...score,name:'f.u.c.k.'},{...score,name:'Ada',name_source:'linkedin',name_consented_at:null});d.scores[0]={...score,providerToken:'never copy'};
 const plan=prepareLegacyImport(d);assert.equal(plan.rejected.scores,2);assert.ok(!JSON.stringify(plan).includes('never copy'));
 const result=await importLegacy(null,plan);assert.equal(result.mode,'dry-run');assert.equal(result.scores,1);
});
test('legacy alias review fails before any writes and re-imports never overwrite records',async()=>{
 const plan=prepareLegacyImport(data()),writes=[];const store={insertOnce:async(...args)=>{writes.push(args);return {created:false};}};
 await assert.rejects(()=>importLegacy(store,plan,{apply:true,reviewName:async()=>{throw Error('offline');}}));assert.equal(writes.length,0);
 let result=await importLegacy(store,plan,{apply:true,reviewName:async()=>false});assert.equal(writes.length,0);assert.equal(result.rejectedScores,1);
 result=await importLegacy(store,plan,{apply:true,reviewName:async()=>true});assert.equal(result.existing,1);
});
