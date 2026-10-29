import test from 'node:test';
import assert from 'node:assert/strict';
import {equipmentMatchesTarget as matches} from '../dist/equipment-targets.js';
import {createRescueState,REPAIRS,PLAYER_CHAIR} from '../dist/rescue-state.js';
import {createInventory} from '../dist/inventory.js';

test('chair parts point to their owner and installed parts stop matching immediately',()=>{
 const state=createRescueState(),inventory=createInventory(),ctx={locked:false,chairs:state.chairs};for(const id of['caster','seat','base'])inventory.add(id);
 assert.equal(matches('caster',{kind:'chair',index:0},ctx),true);assert.equal(matches('caster',{kind:'chair',index:1},ctx),false);
 for(const id of['seat','base']){assert.equal(matches(id,{kind:'chair',index:1},ctx),true);assert.equal(matches(id,{kind:'chair',index:0},ctx),false);}
 state.use(0,'caster',inventory);assert.equal(state.chairs[0].repaired,true);assert.equal(matches('caster',{kind:'chair',index:0},ctx),false);
 state.use(1,'base',inventory);assert.equal(matches('base',{kind:'chair',index:1},ctx),false);assert.equal(matches('seat',{kind:'chair',index:1},ctx),true);
 state.use(1,'seat',inventory);assert.equal(state.chairs[1].repaired,true);assert.equal(matches('seat',{kind:'chair',index:1},ctx),false);
 assert.equal(matches('base',{kind:'chair',index:PLAYER_CHAIR},ctx),false);
});
test('supplies, key, charger, saw and axe follow their actual interaction stages',()=>{
 const plush={},ctx={locked:false,hasKey:true,mobilePhase:'tangled',chargingPhase:'carrying',brokenTanks:[false,true,false],selectingAnimal:true,canCut:o=>o===plush};
 assert.equal(matches('mobile',{kind:'mobile-mount'},ctx),true);assert.equal(matches('mobileKit',{kind:'mobile'},ctx),false);ctx.mobileHung=true;assert.equal(matches('mobile',{kind:'mobile-mount'},ctx),false);assert.equal(matches('mobileKit',{kind:'mobile'},ctx),true);ctx.mobilePhase='repaired';assert.equal(matches('mobileKit',{kind:'mobile'},ctx),false);
 assert.equal(matches('charger',{kind:'strip'},ctx),true);assert.equal(matches('charger',{kind:'laptop'},ctx),false);ctx.chargingPhase='powered';assert.equal(matches('charger',{kind:'laptop'},ctx),true);assert.equal(matches('charger',{kind:'strip'},ctx),false);ctx.chargingPhase='charging';assert.equal(matches('charger',{kind:'laptop'},ctx),false);
 assert.equal(matches('axe',{kind:'tank',index:0},ctx),true);assert.equal(matches('axe',{kind:'tank',index:1},ctx),false);assert.equal(matches('saw',{kind:'plush',object:plush},ctx),true);assert.equal(matches('saw',{kind:'plush',object:{}},ctx),false);
 ctx.locked=true;assert.equal(matches('key',{kind:'shackle'},ctx),true);assert.equal(matches('mobileKit',{kind:'mobile'},ctx),false);assert.equal(matches('axe',{kind:'tank',index:0},ctx),false);assert.equal(matches('saw',{kind:'plush',object:plush},ctx),false);assert.equal(matches('saw',{kind:'shackle'},ctx),false);ctx.hasKey=false;assert.equal(matches('key',{kind:'shackle'},ctx),false);assert.equal(matches('saw',{kind:'shackle'},ctx),true);
});
test('removed chain items never match a chair, even in testing mode',()=>{
 const ctx={locked:false,chairs:createRescueState().chairs};
 for(const item of ['chain0','chain1','chain2'])for(let index=0;index<=PLAYER_CHAIR;index++)assert.equal(matches(item,{kind:'chair',index},ctx),false);
});


test('spare chain highlights only prepared unlinked chairs while the floor is dry',()=>{
 const ctx={locked:false,pmIndex:2,chainFlooded:false,chainLinks:[false,false,false],chairs:[{repaired:true,tank:0},{repaired:true,tank:null}]};
 assert.equal(matches('chain',{kind:'chair',index:0},ctx),true);assert.equal(matches('chain',{kind:'chair',index:1},ctx),false);assert.equal(matches('chain',{kind:'chair',index:PLAYER_CHAIR},ctx),true);
 ctx.chainLinks[0]=true;assert.equal(matches('chain',{kind:'chair',index:0},ctx),false);ctx.chainFlooded=true;assert.equal(matches('chain',{kind:'chair',index:PLAYER_CHAIR},ctx),false);
 ctx.chainFlooded=false;ctx.chairs[1].tank=2;assert.equal(matches('chain',{kind:'chair',index:1},ctx),false);
});
