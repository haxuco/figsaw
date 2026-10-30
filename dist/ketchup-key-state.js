// Reveal and pickup share one boundary, including a catch while it is falling.
export const KEY_REVEAL_DELAY=2.5;
// Pickup and release happen in the same action, including catches mid-pour.
// The key is used immediately and never becomes an equippable inventory item.
export function collectShackleKey(key,restraint,time){
 if(!key.collect(time))return false;
 restraint.detach(time,{reveal:true});
 return true;
}
export function createKetchupKeyState(){
 let phase='sealed',startedAt=-Infinity;
 const update=time=>{if(phase==='pouring'&&time-startedAt>=KEY_REVEAL_DELAY)phase='revealed';};
 return {
  capture(time){return {phase,age:time-startedAt};},restore(value,time){phase=value.phase;startedAt=time-value.age;},grant(time){phase='collected';startedAt=time-4;},
  get phase(){return phase;},get hasKey(){return phase==='collected';},get startedAt(){return startedAt;},
  pour(time){if(phase!=='sealed')return false;phase='pouring';startedAt=time;return true;},
  update,
  collect(time){if(Number.isFinite(time))update(time);if(phase!=='revealed')return false;phase='collected';return true;},
  reset(){phase='sealed';startedAt=-Infinity;}
 };
}
