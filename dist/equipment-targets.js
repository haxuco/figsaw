import {REPAIRS,PLAYER_CHAIR} from './rescue-state.js';

// Inventory relationships, shared by testing highlights and their assertions.
export function equipmentMatchesTarget(item,target,context){
 if(!item)return false;
 const {locked,mobilePhase,chargingPhase,chairs=[]}=context;
 if(locked&&!['key','saw'].includes(item))return false;
 if(target.kind==='chair'){
  const chair=chairs[target.index];
  if(item.startsWith('chain'))return !!context.canHook?.(target.index,item);
  if(target.index===PLAYER_CHAIR||!chair||chair.repaired)return false;
  const steps=REPAIRS[target.index].steps;
  if(['caster','seat','base'].includes(item))return steps.some(step=>step.part===item)&&!chair.installed.includes(item);
  return item==='ratchet'&&chair.installed.includes(steps[chair.step]?.part);
 }
 if(item==='key')return target.kind==='shackle'&&locked&&context.hasKey;
 if(item==='mobileKit')return target.kind==='mobile'&&!!context.mobileHung&&mobilePhase==='tangled';
 if(item==='charger')return target.kind==='strip'&&chargingPhase==='carrying'||target.kind==='laptop'&&chargingPhase==='powered';
 if(item==='axe')return target.kind==='tank'&&!context.brokenTanks?.[target.index];
 if(item==='saw')return locked?target.kind==='shackle'&&!context.hasKey:target.kind==='plush'&&context.selectingAnimal&&!!context.canCut?.(target.object);
 return false;
}
