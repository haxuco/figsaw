import {REPAIRS,PLAYER_CHAIR} from './rescue-state.js';

// Chair height prevents acid injuries, but cannot recover unfinished preparations.
// Wait for liquid to reach the floor, and honor the automatic-lowering hazard pause.
export function hasFailedFloodObjectives({acid,rescue,mobile,laptopComplete,pmIndex,paused=false}){
 if(paused||acid.neutralized||!acid.leaks.some(leak=>leak.points.length>0))return false;
 const chairsReady=rescue.chairs.length===REPAIRS.length&&rescue.chairs.every(chair=>
  chair.repaired&&Number.isInteger(chair.tank)&&chair.tank>=0&&chair.tank<3&&chair.tank!==pmIndex
 )&&new Set(rescue.chairs.map(chair=>chair.tank)).size===REPAIRS.length;
 const chainReady=rescue.secured&&rescue.links.length===PLAYER_CHAIR+1&&rescue.links.every(Boolean);
 return !laptopComplete||!mobile.hung||mobile.phase!=='repaired'||!chairsReady||!chainReady;
}

// Record the failed preparation at the first floor contact, but let the actual
// outflow finish before starting the fade. A valve and a shattered tank drain
// at different speeds, so follow the liquid simulation instead of a timeout.
export function createFloodObjectiveFailure(){
 let failedLeak=null;
 return {
  update(input){
   if(input.paused)return false;
   if(input.acid.neutralized){failedLeak=null;return false;}
   if(failedLeak&&!input.acid.leaks.includes(failedLeak))failedLeak=null;
   if(!failedLeak&&hasFailedFloodObjectives(input))failedLeak=input.acid.leaks.find(leak=>leak.points.length>0);
   return failedLeak?.drainingComplete===true;
  },
  reset(){failedLeak=null;}
 };
}
