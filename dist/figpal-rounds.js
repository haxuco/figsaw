// The PM is last in the schedule, but the second expired deadline ends the game.
// Manual hoist operations never advance this deadline counter.
export function createFigpalRounds(hoists,countdown,puzzle){
 let phase='waiting',index=null,phaseAt=0,settledAt=null,scheduledDrops=0;
 function update(time,blocked=false){
  if(phase==='finished')return null;
  if(phase==='ending'){
   if(time-phaseAt<1.1)return null;phase='finished';return {type:'gameover'};
  }
  if(phase==='returning'){
   if(time-phaseAt<1.1)return null;
   countdown.reset();countdown.start();phase='waiting';index=null;
   return {type:'restart',remaining:1};
  }
  if(phase==='lowering'){
   if(!(hoists.isSettled?hoists.isSettled(index):hoists.isSubmerged(index))){settledAt=null;return null;}
   if(settledAt===null)settledAt=time;
   if(time-settledAt<1.25)return null;
   scheduledDrops++;phaseAt=time;
   if(scheduledDrops>=2){phase='ending';return {type:'ending'};}
   phase='returning';return {type:'return',index};
  }
  if(blocked||countdown.status!=='finished'||hoists.movingIndex!==null)return null;
  index=(puzzle?.dropOrder??[0,1,2])[scheduledDrops];
  if(!hoists.lower(index)){index=null;return null;}
  phase='lowering';phaseAt=time;settledAt=null;return {type:'lower',index};
 }
 return {update,reset(){phase='waiting';index=null;phaseAt=0;settledAt=null;scheduledDrops=0;hoists.reset();},get scheduledDrops(){return scheduledDrops;},get active(){return phase!=='waiting';},get index(){return index;},blackout(time){return phase==='finished'?1:phase==='ending'?Math.min(1,Math.max(0,(time-phaseAt)/1.1)):0;}};
}
