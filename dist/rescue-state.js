export const REPAIRS=Object.freeze([
 {label:'missing caster',steps:[{part:'caster',tool:'ratchet'}]},
 {label:'torn seat and broken base',steps:[{part:'seat',tool:'ratchet'},{part:'base',tool:'ratchet'}]}
]);
export const PLAYER_CHAIR=REPAIRS.length;
export function createRescueState(puzzle={pmIndex:2}){
 let chairs,links,usedChains,pulling=false,safe=false;
 function reset(){chairs=REPAIRS.map(()=>({installed:[],step:0,repaired:false,tank:null,passenger:null,reservation:null}));links=[];usedChains=new Set();pulling=safe=false;}
 reset();
 function use(index,item,inventory){
  const c=chairs[index];if(!c||pulling||safe)return 'That chair cannot be repaired now.';
  if(c.repaired)return 'Chair already repaired.';
  const r=REPAIRS[index].steps[c.step];
  if(!c.installed.includes(r.part)){if(item!==r.part)return 'That item does not fit this chair.';if(!inventory.has(item))return 'Item not in inventory.';inventory.remove(item);c.installed.push(item);return `${r.part[0].toUpperCase()+r.part.slice(1)} fitted.`;}
  if(item===r.part)return 'Part already fitted.';
  if(item!==r.tool||!inventory.has(item))return 'That item cannot secure this part.';
  c.step++;if(c.step<REPAIRS[index].steps.length)return 'Part secured.';
  c.repaired=true;return 'Chair repaired.';
 }
 const isParked=index=>{const c=chairs[index];return !!c?.repaired&&c.tank!==null&&c.tank!==puzzle.pmIndex;};
 function canPlace(index,tank){const c=chairs[index];return !!c?.repaired&&!isParked(index)&&c.passenger===null&&!chairs.some(c=>c.reservation!==null)&&!pulling&&!safe&&Number.isInteger(tank)&&tank>=0&&tank<3&&!chairs.some((o,i)=>i!==index&&o.tank===tank);}
 function place(index,tank){if(!canPlace(index,tank))return false;chairs[index].tank=tank;return true;}
 // Both chairs and their towing chains must be arranged before a descent starts.
 const arranged=()=>links.length===PLAYER_CHAIR&&chairs.every((c,i)=>c.repaired&&c.tank!==null&&c.tank!==puzzle.pmIndex&&connected(i,PLAYER_CHAIR));
 function canBoard(tank,figpal,{alive=true}={}){return alive&&figpal!==puzzle.pmIndex&&Number.isInteger(figpal)&&figpal>=0&&figpal<3&&!pulling&&!safe&&arranged()&&!chairs.some(c=>c.passenger===figpal)&&chairs.some(c=>c.tank===tank&&c.passenger===null&&(c.reservation===null||c.reservation===figpal));}
 function reserve(tank,figpal,options){if(!canBoard(tank,figpal,options))return false;chairs.find(c=>c.tank===tank).reservation=figpal;return true;}
 function cancelReservation(tank){const c=chairs.find(c=>c.tank===tank);if(c)c.reservation=null;}
 function board(tank,figpal,options){if(!canBoard(tank,figpal,options))return -1;const i=chairs.findIndex(c=>c.tank===tank&&c.reservation===figpal);if(i<0)return -1;chairs[i].reservation=null;chairs[i].passenger=figpal;return i;}
 function connected(a,b){const visited=new Set([a]),stack=[a];while(stack.length){const n=stack.pop();for(const link of links){const next=link.a===n?link.b:link.b===n?link.a:null;if(next===null||visited.has(next))continue;visited.add(next);stack.push(next);}}return visited.has(b);}
 function canStartLink(index,chain){
  return /^chain[0-2]$/.test(chain)&&!pulling&&!safe&&Number.isInteger(index)&&index>=0&&index<=PLAYER_CHAIR&&!usedChains.has(chain)&&links.length<PLAYER_CHAIR&&(index===PLAYER_CHAIR||chairs[index].repaired)&&links.filter(l=>l.a===index||l.b===index).length<(index===PLAYER_CHAIR?1:2);
 }
 function canConnect(a,b,chain){return a!==b&&canStartLink(a,chain)&&canStartLink(b,chain)&&!connected(a,b);}
 function connect(a,b,chain){
  if(!canConnect(a,b,chain))return false;
  links.push({a,b,chain});usedChains.add(chain);return true;
 }
 const ready=()=>links.length===PLAYER_CHAIR&&chairs.every((c,i)=>c.repaired&&c.passenger!==null&&c.passenger!==puzzle.pmIndex&&connected(i,PLAYER_CHAIR));
 return {capture(){return structuredClone({chairs,links,usedChains:[...usedChains],pulling,safe});},restore(value){({chairs,links,pulling,safe}=structuredClone(value));usedChains=new Set(value.usedChains);},reset,use,isParked,canPlace,place,board,reserve,cancelReservation,canBoard,connect,canStartLink,canConnect,get arranged(){return arranged();},get chairs(){return chairs;},get links(){return links;},get ready(){return ready();},get pulling(){return pulling;},get safe(){return safe;},startPull(){if(!ready()||pulling||safe)return false;pulling=true;return true;},finishPull(){if(pulling){pulling=false;safe=true;}},chairAt:tank=>chairs.findIndex(c=>c.tank===tank&&c.repaired)};
}
