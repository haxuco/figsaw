import test from 'node:test';
import assert from 'node:assert/strict';
import {equipmentMatchesTarget as matches} from '../dist/equipment-targets.js';
import {createRescueState,REPAIRS,PLAYER_CHAIR} from '../dist/rescue-state.js';
import {createInventory} from '../dist/inventory.js';

test('chair parts point to their owner; the ratchet only matches a fitted, unsecured repair',()=>{
 const state=createRescueState(),inventory=createInventory(),ctx={locked:false,chairs:state.chairs};for(const id of['caster','seat','base','ratchet'])inventory.add(id);
 assert.equal(matches('caster',{kind:'chair',index:0},ctx),true);assert.equal(matches('caster',{kind:'chair',index:1},ctx),false);
 for(const id of['seat','base']){assert.equal(matches(id,{kind:'chair',index:1},ctx),true);assert.equal(matches(id,{kind:'chair',index:0},ctx),false);}
 assert.equal(matches('ratchet',{kind:'chair',index:0},ctx),false);state.use(0,'caster',inventory);
 assert.equal(matches('caster',{kind:'chair',index:0},ctx),false);assert.equal(matches('ratchet',{kind:'chair',index:0},ctx),true);
 state.use(0,'ratchet',inventory);assert.equal(matches('ratchet',{kind:'chair',index:0},ctx),false);
 state.use(1,'seat',inventory);assert.equal(matches('ratchet',{kind:'chair',index:1},ctx),true);state.use(1,'ratchet',inventory);assert.equal(matches('ratchet',{kind:'chair',index:1},ctx),false);
 assert.equal(matches('base',{kind:'chair',index:1},ctx),true);assert.equal(matches('base',{kind:'chair',index:PLAYER_CHAIR},ctx),false);
});
test('supplies, key, charger, saw and axe follow their actual interaction stages',()=>{
 const plush={},ctx={locked:false,hasKey:true,mobilePhase:'tangled',chargingPhase:'carrying',brokenTanks:[false,true,false],selectingAnimal:true,canCut:o=>o===plush};
 assert.equal(matches('mobile',{kind:'mobile-mount'},ctx),false);assert.equal(matches('mobileKit',{kind:'mobile'},ctx),false);ctx.mobileHung=true;assert.equal(matches('mobile',{kind:'mobile-mount'},ctx),false);assert.equal(matches('mobileKit',{kind:'mobile'},ctx),true);ctx.mobilePhase='repaired';assert.equal(matches('mobileKit',{kind:'mobile'},ctx),false);
 assert.equal(matches('charger',{kind:'strip'},ctx),true);assert.equal(matches('charger',{kind:'laptop'},ctx),false);ctx.chargingPhase='powered';assert.equal(matches('charger',{kind:'laptop'},ctx),true);assert.equal(matches('charger',{kind:'strip'},ctx),false);ctx.chargingPhase='charging';assert.equal(matches('charger',{kind:'laptop'},ctx),false);
 assert.equal(matches('axe',{kind:'tank',index:0},ctx),true);assert.equal(matches('axe',{kind:'tank',index:1},ctx),false);assert.equal(matches('saw',{kind:'plush',object:plush},ctx),true);assert.equal(matches('saw',{kind:'plush',object:{}},ctx),false);
 ctx.locked=true;assert.equal(matches('key',{kind:'shackle'},ctx),true);assert.equal(matches('mobileKit',{kind:'mobile'},ctx),false);assert.equal(matches('axe',{kind:'tank',index:0},ctx),false);assert.equal(matches('saw',{kind:'plush',object:plush},ctx),false);assert.equal(matches('saw',{kind:'shackle'},ctx),false);ctx.hasKey=false;assert.equal(matches('key',{kind:'shackle'},ctx),false);assert.equal(matches('saw',{kind:'shackle'},ctx),true);
});
test('chain highlights share the real connection rules and exclude self-links, full hooks, cycles and used chains',()=>{
 const state=createRescueState(),inventory=createInventory();inventory.add('ratchet');
 for(let i=0;i<2;i++)for(const step of REPAIRS[i].steps){inventory.add(step.part);state.use(i,step.part,inventory);state.use(i,'ratchet',inventory);}
 for(const chain of['chain0','chain1','chain2']){
  const ctx={locked:false,canHook:i=>state.canStartLink(i,chain)};assert.equal(matches(chain,{kind:'chair',index:0},ctx),true);assert.equal(matches(chain,{kind:'chair',index:PLAYER_CHAIR},ctx),true);
 }
 assert.equal(state.canConnect(0,0,'chain0'),false);assert.equal(state.connect(PLAYER_CHAIR,0,'chain0'),true);
 assert.equal(state.canStartLink(PLAYER_CHAIR,'chain1'),false);assert.equal(state.canStartLink(1,'chain0'),false);assert.equal(state.canConnect(0,1,'chain1'),true);assert.equal(state.connect(0,1,'chain1'),true);assert.equal(state.canConnect(1,PLAYER_CHAIR,'chain2'),false);
});
