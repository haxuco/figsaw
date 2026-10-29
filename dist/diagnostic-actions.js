import * as THREE from './vendor/three.module.js';
import {ITEMS} from './inventory.js';
import {MOBILE_PIECES} from './mobile-puzzle-state.js';
import {REPAIRS} from './rescue-state.js';
import {FIGPAL_INTERVAL_SECONDS} from './countdown-clock.js';

// Capture only the domains an action can affect. Undo never restarts the game,
// reassigns the PM, or adds an escape attempt. Retained history is bounded.
export function createDiagnosticActions({time,hazardTime,inventory,mobilePuzzle,rescueChairs,hoists,ketchupKey,restraint,laptop,chargingKit,laptopProgram,acidLeaks,fireHazard,fireAlarm,countdown,rounds,view,props,prepareTimer,restoreTimer,afterRestore=()=>{},onLower=()=>{}}){
 const timed=(object,clock)=>({capture:()=>object.capture(clock()),restore:value=>object.restore(value,clock())});
 const ports={inventory,mobilePuzzle,rescueChairs,hoists:timed(hoists,time),key:timed(ketchupKey,time),laptop,charging:timed(chargingKit,time),program:laptopProgram,acid:timed(acidLeaks,hazardTime),fire:timed(fireHazard,hazardTime),alarm:timed(fireAlarm,hazardTime),rounds:timed(rounds,time),view,props,
  wrist:{capture:()=>restraint.locked,restore:value=>restraint.setLocked(value,time())},
  timer:{capture:()=>({clock:countdown.capture(),pending:prepareTimer.capture()}),restore:value=>{countdown.restore(value.clock);restoreTimer(value.pending);}}
 };
 const environment=['acid','fire','alarm','charging','laptop','rescueChairs','hoists'];
 function action(id,label,domains,run,target=false){return {id,label,target,run(index){
  const saved=domains.map(name=>[ports[name],ports[name].capture()]);
  const undo=()=>{for(const [port,value]of saved)port.restore(value);afterRestore();};
  try{if(run(index)===false){undo();return false;}}catch(error){undo();throw error;}return undo;
 }};}
 return [
  action('timer-reset','Reset countdown to 10:00',['timer',...environment,'rounds','view'],()=>{prepareTimer();countdown.setRemaining(FIGPAL_INTERVAL_SECONDS);}),
  action('timer-five','Jump countdown to 00:05',['timer',...environment,'rounds','view'],()=>{prepareTimer();countdown.setRemaining(5);}),
  action('items','Collect all inventory items',['inventory','mobilePuzzle','rescueChairs','hoists','key','props'],()=>{
   for(const id of Object.keys(rescueChairs.parts))if(!inventory.has(id))rescueChairs.collectPart(id,inventory);
   for(const id of Object.keys(ITEMS))if(!MOBILE_PIECES[id]&&id!=='mobile')inventory.add(id);
   for(const id of Object.keys(MOBILE_PIECES))mobilePuzzle.collectPiece(id,inventory);
   mobilePuzzle.collect('mobileKit',{drawerReady:true});ketchupKey.grant(time());props.hideCollected();
  }),
  action('unlock','Unlock shackle',['wrist'],()=>{if(!restraint.locked)return false;restraint.setLocked(false,time());}),
  action('laptop-open','Open laptop',['charging','laptop'],()=>{if(laptop.isOpen)return false;laptop.open();laptop.update(1,true);}),
  action('laptop-close','Close laptop',['charging','laptop'],()=>{if(!laptop.isOpen)return false;laptopProgram.cancel();laptop.close(false);}),
  action('charge','Connect laptop charger',['charging','laptop','inventory'],()=>{
   if(chargingKit.phase==='charging')return false;chargingKit.reset();for(const step of ['drawer','charger','strip','laptop'])chargingKit.use(step,time());chargingKit.update(time(),true);inventory.remove('charger');
  }),
  action('challenge','Complete laptop challenge',['program'],()=>{if(laptopProgram.completed)return false;laptopProgram.complete();}),
  action('repair-chairs','Repair both rescue chairs',['inventory','rescueChairs','hoists'],()=>{
   for(const [index,repair]of REPAIRS.entries())for(const {part}of repair.steps){const chair=rescueChairs.state.chairs[index];if(chair.repaired||chair.installed.includes(part))continue;if(!inventory.has(part))rescueChairs.collectPart(part,inventory);inventory.add(part);rescueChairs.parts[part].visible=false;rescueChairs.use(index,part,inventory);}rescueChairs.update(time(),true);
  }),
  action('valve','Open tank valve',environment,index=>acidLeaks.open(index,hazardTime()),true),
  action('break-tank','Break tank with axe',environment,index=>{const tank=hoists.tanks[index];if(!tank||!tank.break(time()))return false;return acidLeaks.breach(index,hazardTime(),tank.outlet);},true),
  action('lower','Lower Figpal',['rescueChairs','hoists'],index=>{if(hoists.isLowered(index)||!hoists.lower(index))return false;onLower(index);return true;},true),
  action('raise','Raise Figpal',['rescueChairs','hoists'],index=>hoists.raise(index),true),
  action('fire','Start cable fire',environment,()=>{
   const point=chargingKit.cablePoints[0]??new THREE.Vector3(1.15,.015,3.05);return fireHazard.ignite(hazardTime(),point);
  }),
  action('alarm','Pull fire alarm / sprinklers',environment,()=>fireAlarm.pull(hazardTime())),
  action('neutralize','Neutralize floor acid',environment,()=>acidLeaks.neutralize(hazardTime()))
 ];
}
