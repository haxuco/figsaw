// The PM is last in the schedule, but the second expired deadline ends the game.
// Manual hoist operations never advance this deadline counter. A rescued
// Figpal still consumes its scheduled clock, but never starts another descent.
export function createFigpalRounds(hoists,countdown,puzzle){
 let phase='waiting',index=null,phaseAt=0,settledAt=null,scheduledDrops=0;
 function update(time,blocked=false,invulnerable=false){
  if(phase==='finished')return null;
  if(phase==='ending'){
   if(invulnerable){phase='returning';phaseAt=time;return {type:'return',index};}
   if(time-phaseAt<1.1)return null;phase='finished';return {type:'gameover'};
  }
  if(phase==='returning'){
   if(time-phaseAt<1.1)return null;
   countdown.reset();countdown.start();phase='waiting';index=null;
   return {type:'restart',remaining:Math.max(0,2-scheduledDrops)};
  }
  if(phase==='lowering'){
   if(!(hoists.isSettled?hoists.isSettled(index):hoists.isSubmerged(index))){settledAt=null;return null;}
   if(settledAt===null)settledAt=time;
   if(time-settledAt<1.25)return null;
   scheduledDrops++;phaseAt=time;
   if(scheduledDrops>=2&&!invulnerable){phase='ending';return {type:'ending'};}
   phase='returning';return {type:'return',index};
  }
  if(scheduledDrops>=2){if(invulnerable||blocked||countdown.status!=='finished')return null;phase='ending';phaseAt=time;return {type:'ending'};}
  if(blocked||countdown.status!=='finished'||hoists.movingIndex!==null)return null;
  index=(puzzle?.dropOrder??[0,1,2])[scheduledDrops];
  if(hoists.isRescued?.(index)){
   scheduledDrops++;phaseAt=time;
   if(scheduledDrops>=2&&!invulnerable){phase='ending';return {type:'ending'};}
   countdown.reset();countdown.start();index=null;
   return {type:'restart',remaining:Math.max(0,2-scheduledDrops)};
  }
  if(!hoists.lower(index)){index=null;return null;}
  phase='lowering';phaseAt=time;settledAt=null;return {type:'lower',index};
 }
 return {update,capture(time){return {time,phase,index,phaseAt,settledAt,scheduledDrops};},restore(value,time){({phase,index,phaseAt,settledAt,scheduledDrops}=value);phaseAt+=time-value.time;if(settledAt!==null)settledAt+=time-value.time;},reset(){phase='waiting';index=null;phaseAt=0;settledAt=null;scheduledDrops=0;hoists.reset();},get scheduledDrops(){return scheduledDrops;},get active(){return phase!=='waiting';},get index(){return index;},blackout(time){return phase==='finished'?1:phase==='ending'?Math.min(1,Math.max(0,(time-phaseAt)/1.1)):0;}};
}
