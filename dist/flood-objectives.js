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
