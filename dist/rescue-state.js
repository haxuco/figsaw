export const REPAIRS=Object.freeze([
 {label:'missing caster',steps:[{part:'caster'}]},
 {label:'torn seat and broken base',steps:[{part:'seat'},{part:'base'}]}
]);
export const PLAYER_CHAIR=REPAIRS.length;
export function createRescueState(puzzle={pmIndex:2}){
 let chairs;
 function reset(){chairs=REPAIRS.map(()=>({installed:[],step:0,repaired:false,tank:null,passenger:null,reservation:null,landed:false}));}
 reset();
 function use(index,item,inventory){
  const c=chairs[index];if(!c)return 'That chair cannot be repaired now.';
  if(c.repaired)return 'Chair already repaired.';
  const steps=REPAIRS[index].steps;
  if(!steps.some(step=>step.part===item))return 'That item does not fit this chair.';
  if(c.installed.includes(item))return 'Part already fitted.';
  if(!inventory.has(item))return 'Item not in inventory.';
  inventory.remove(item);c.installed.push(item);c.step=c.installed.length;
  c.repaired=steps.every(step=>c.installed.includes(step.part));
  return c.repaired?'Chair repaired.':`${item[0].toUpperCase()+item.slice(1)} fitted.`;
 }
 const isParked=index=>{const c=chairs[index];return !!c?.repaired&&c.tank!==null&&c.tank!==puzzle.pmIndex;};
 function canPlace(index,tank){const c=chairs[index];return !!c?.repaired&&!isParked(index)&&c.passenger===null&&!chairs.some(c=>c.reservation!==null)&&Number.isInteger(tank)&&tank>=0&&tank<3&&!chairs.some((o,i)=>i!==index&&o.tank===tank);}
 function place(index,tank){if(!canPlace(index,tank))return false;chairs[index].tank=tank;return true;}
 // Each landing works independently; no second chair or inventory chain is needed.
 function canBoard(tank,figpal,{alive=true}={}){return alive&&figpal!==puzzle.pmIndex&&Number.isInteger(figpal)&&figpal>=0&&figpal<3&&!chairs.some(c=>c.passenger===figpal)&&chairs.some(c=>c.repaired&&c.tank===tank&&c.passenger===null&&(c.reservation===null||c.reservation===figpal));}
 function reserve(tank,figpal,options){if(!canBoard(tank,figpal,options))return false;chairs.find(c=>c.tank===tank).reservation=figpal;return true;}
 function cancelReservation(tank){const c=chairs.find(c=>c.tank===tank);if(c)c.reservation=null;}
 function board(tank,figpal,options){if(!canBoard(tank,figpal,options))return -1;const i=chairs.findIndex(c=>c.tank===tank&&c.reservation===figpal);if(i<0)return -1;chairs[i].reservation=null;chairs[i].passenger=figpal;return i;}
 function finishBoard(tank){const c=chairs.find(c=>c.tank===tank&&c.passenger!==null);if(c)c.landed=true;}
 return {capture(){return structuredClone({chairs});},restore(value){chairs=structuredClone(value.chairs);},reset,use,isParked,canPlace,place,board,reserve,cancelReservation,canBoard,finishBoard,get chairs(){return chairs;},get ready(){return chairs.every(c=>c.landed);},get safe(){return chairs.some(c=>c.landed);},chairAt:tank=>chairs.findIndex(c=>c.tank===tank&&c.repaired)};
}
