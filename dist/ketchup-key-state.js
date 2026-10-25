// The key becomes collectible only after it has fallen clear of the bottle.
export function createKetchupKeyState(){
 let phase='sealed',startedAt=-Infinity;
 return {
  get phase(){return phase;},get hasKey(){return phase==='collected';},get startedAt(){return startedAt;},
  pour(time){if(phase!=='sealed')return false;phase='pouring';startedAt=time;return true;},
  update(time){if(phase==='pouring'&&time-startedAt>=3.4)phase='revealed';},
  collect(){if(phase!=='revealed')return false;phase='collected';return true;},
  reset(){phase='sealed';startedAt=-Infinity;}
 };
}
