// Each expired deadline consumes one surviving Figpal. The clock stays at zero
// through the descent and camera return, so hidden tabs cannot skip victims.
export function createFigpalRounds(hoists,countdown){
 let phase='waiting',index=null,phaseAt=0,submergedAt=null;
 const remaining=()=>Array.from({length:hoists.count},(_,i)=>i).filter(i=>hoists.canSpeak(i));
 function update(time,blocked=false){
  if(phase==='finished')return null;
  if(phase==='ending'){
   if(time-phaseAt<1.1)return null;
   phase='finished';return {type:'gameover'};
  }
  if(phase==='returning'){
   if(time-phaseAt<1.1)return null;
   countdown.reset();countdown.start();phase='waiting';index=null;
   return {type:'restart',remaining:remaining().length};
  }
  if(phase==='lowering'){
   if(!hoists.isSubmerged(index)){submergedAt=null;return null;}
   if(submergedAt===null)submergedAt=time;
   // Let the submerged skeleton be seen before returning or fading out.
   if(time-submergedAt<1.25)return null;
   phaseAt=time;
   if(!remaining().length){phase='ending';return {type:'ending'};}
   phase='returning';return {type:'return',index};
  }
  if(blocked)return null;
  const alive=remaining();
  // Manually sacrificing the last survivor has the same outcome.
  if(!alive.length){
   if(hoists.movingIndex!==null)return null;
   phase='ending';phaseAt=time;return {type:'ending'};
  }
  if(countdown.status!=='finished')return null;
  const moving=hoists.movingIndex;
  // Finish an already-lowering hoist first; wait for a raising hoist to settle.
  if(moving!==null&&!hoists.isLowered(moving))return null;
  index=moving??alive[0];
  if(!hoists.lower(index)){index=null;return null;}
  phase='lowering';phaseAt=time;submergedAt=null;
  return {type:'lower',index};
 }
 function reset(){phase='waiting';index=null;phaseAt=0;submergedAt=null;hoists.reset();}
 return {update,reset,get active(){return phase!=='waiting';},get index(){return index;},
  blackout(time){return phase==='finished'?1:phase==='ending'?Math.min(1,Math.max(0,(time-phaseAt)/1.1)):0;}};
}
