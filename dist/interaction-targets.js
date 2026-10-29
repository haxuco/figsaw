import {PLAYER_CHAIR} from './rescue-state.js';
import {equipmentMatchesTarget} from './equipment-targets.js';

export function createInteractionTargets({office,model,restraint,laptop,catMug,handsaw,fireAxe,chairRefuge,rescueChairs,mobileInspection,fallenMobile,stuffedAnimals,inventory,chargingKit,ketchupKey,figpalHoists,doorKeypadUI,plushCut}){
 const entries=new Map();
 function add(object,target,enabled=()=>true){
  if(!object)return;entries.set(object,{object,target,enabled,matches:(item,context)=>equipmentMatchesTarget(item,{...target,object},context)});
 }
 // Register existing interaction roots once; never traverse the office each frame.
 office.traverse(o=>{
  const d=o.userData;
  if(d.testingDecoration)return;
  if(d.wallDocument)add(o,{kind:'document'});
  else if(d.fireAlarm)add(o,{kind:'alarm'});
  else if(d.supplyAction)add(o,{kind:'pickup',item:d.supplyAction},()=>!inventory.has(d.supplyAction)&&chargingKit.drawerOpen);
  else if(d.chargingAction){
   if(d.chargingAction==='laptop')return; // Highlight the full laptop instead of its tiny port.
   const kind=d.chargingAction==='strip'?'strip':d.chargingAction==='drawer'?'drawer':'pickup';
   add(o,{kind,item:'charger'},()=>d.chargingAction!=='charger'||chargingKit.phase==='drawer'&&chargingKit.drawerOpen);
  }else if(d.keyAction)add(o,{kind:d.keyAction==='pour'?'bottle':'pickup',item:'key'},()=>d.keyAction==='pour'?ketchupKey.phase==='sealed':!ketchupKey.hasKey);
  else if(Number.isInteger(d.hoistIndex))add(o,{kind:'hoist',index:d.hoistIndex});
  else if(Number.isInteger(d.valveIndex))add(o,{kind:'valve',index:d.valveIndex});
  else if(Number.isInteger(d.rescueSlot))add(o,{kind:'rescue-slot',index:d.rescueSlot});
  else if(d.keypadKey)add(o,{kind:'keypad-key'},()=>doorKeypadUI.active);
  else if(d.exitKeypad)add(o,{kind:'keypad'});
  else if(d.fishClue!==undefined&&!Number.isInteger(d.tankIndex))add(o,{kind:'clue'},()=>d.fishClue&&figpalHoists.fishClueReady);
 });
 add(model,{kind:'figsaw'});
 add(laptop.object,{kind:'laptop'});add(catMug,{kind:'mug'});
 add(handsaw,{kind:'pickup',item:'saw'},()=>!inventory.has('saw'));
 add(fireAxe.object,{kind:'pickup',item:'axe'},()=>!inventory.has('axe'));
 rescueChairs.objects.forEach((o,index)=>add(o,{kind:'chair',index},()=>rescueChairs.canInteract(index,inventory.equipped)));add(chairRefuge.object,{kind:'chair',index:PLAYER_CHAIR});
 for(const [id,o]of Object.entries(rescueChairs.parts))add(o,{kind:'pickup',item:id},()=>!inventory.has(id));
 add(restraint.target.getObjectByName('Close-fitting oval wrist cuff')??restraint.target,{kind:'shackle'},()=>restraint.locked);
 for(const [id,object]of Object.entries(fallenMobile.pieces))add(object,{kind:'pickup',item:id});
 add(mobileInspection.assembly,{kind:'mobile'},()=>mobileInspection.hung);
 add(mobileInspection.hookTarget,{kind:'mobile-mount'},()=>!mobileInspection.hung);
 for(const animal of stuffedAnimals)add(animal.object,{kind:'plush'},()=>inventory.equipped==='saw'&&plushCut.canCut(animal.object));
 figpalHoists.rigs.forEach((rig,index)=>add(rig.vat,{kind:'tank',index},()=>inventory.equipped==='axe'&&!figpalHoists.tanks[index].broken||!!rig.vat.userData.fishClue&&figpalHoists.fishClueReady));
 return [...entries.values()];
}
