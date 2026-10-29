export const REPAIRS=Object.freeze([
 {label:'missing caster',steps:[{part:'caster'}]},
 {label:'torn seat and broken base',steps:[{part:'seat'},{part:'base'}]}
]);
export const PLAYER_CHAIR=REPAIRS.length;
export function createRescueState(puzzle={pmIndex:2}){
 let chairs,links,flooded,secured,towPhase;
 function reset(){chairs=REPAIRS.map(()=>({installed:[],step:0,repaired:false,tank:null,passenger:null,reservation:null,landed:false}));links=[false,false,false];flooded=secured=false;towPhase='idle';}
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
 function canPlace(index,tank){const c=chairs[index];return towPhase==='idle'&&!links[index]&&!!c?.repaired&&!isParked(index)&&c.passenger===null&&!chairs.some(c=>c.reservation!==null)&&Number.isInteger(tank)&&tank>=0&&tank<3&&!chairs.some((o,i)=>i!==index&&o.tank===tank);}
 function place(index,tank){if(!canPlace(index,tank))return false;chairs[index].tank=tank;return true;}
 // A chair can catch a Figpal, but it still needs the prepared chain to leave.
 function canBoard(tank,figpal,{alive=true}={}){return towPhase==='idle'&&alive&&figpal!==puzzle.pmIndex&&Number.isInteger(figpal)&&figpal>=0&&figpal<3&&!chairs.some(c=>c.passenger===figpal)&&chairs.some(c=>c.repaired&&c.tank===tank&&c.passenger===null&&(c.reservation===null||c.reservation===figpal));}
 function reserve(tank,figpal,options){if(!canBoard(tank,figpal,options))return false;chairs.find(c=>c.tank===tank).reservation=figpal;return true;}
 function cancelReservation(tank){const c=chairs.find(c=>c.tank===tank);if(c)c.reservation=null;}
 function board(tank,figpal,options){if(!canBoard(tank,figpal,options))return -1;const i=chairs.findIndex(c=>c.tank===tank&&c.reservation===figpal);if(i<0)return -1;chairs[i].reservation=null;chairs[i].passenger=figpal;return i;}
 function finishBoard(tank){const c=chairs.find(c=>c.tank===tank&&c.passenger!==null);if(c)c.landed=true;}
 function noteFlood(){if(!flooded){flooded=true;secured=links.every(Boolean);}}
 function canLink(index){return towPhase==='idle'&&!flooded&&Number.isInteger(index)&&index>=0&&index<=PLAYER_CHAIR&&!links[index]&&(index===PLAYER_CHAIR||isParked(index));}
 function link(index,inventory){
  if(flooded)return 'The floor is flooded. The chair frames are out of reach.';
  if(!inventory.has('chain')||inventory.equipped!=='chain')return 'Equip the spare chain first.';
  if(links[index])return 'That chair is already linked.';
  if(!canLink(index))return 'The chair is not ready to link.';
  links[index]=true;const count=links.filter(Boolean).length;
  if(count===3)inventory.remove('chain');
  return count===3?'All three chairs are linked.':`Chair linked (${count}/3).`;
 }
 const canTow=()=>secured&&towPhase==='idle'&&chairs.some(c=>c.landed)&&chairs.every(c=>c.reservation===null&&(c.passenger===null||c.landed));
 return {capture(){return structuredClone({chairs,links,flooded,secured,towPhase});},restore(value){chairs=structuredClone(value.chairs);links=[...(value.links??[false,false,false])];flooded=!!value.flooded;secured=!!value.secured;towPhase=value.towPhase??'idle';},reset,use,isParked,canPlace,place,board,reserve,cancelReservation,canBoard,finishBoard,noteFlood,canLink,link,canTow,
  beginTow(){if(!canTow())return false;towPhase='pulling';return true;},finishTow(){if(towPhase==='pulling')towPhase='at-door';},
  beginExit(){if(towPhase!=='at-door')return false;towPhase='exiting';return true;},finishExit(){if(towPhase==='exiting')towPhase='escaped';},
  get links(){return links;},get flooded(){return flooded;},get secured(){return secured;},get towPhase(){return towPhase;},get chairs(){return chairs;},get ready(){return chairs.every(c=>c.landed);},get safe(){return chairs.some(c=>c.landed);},chairAt:tank=>chairs.findIndex(c=>c.tank===tank&&c.repaired)};
}
