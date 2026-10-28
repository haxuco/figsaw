export const REPAIRS=Object.freeze([{part:'caster',tool:'hammer',label:'missing caster'},{part:'seat',tool:'screwdriver',label:'torn seat'},{part:'base',tool:'ratchet',label:'broken base'}]);
export function createRescueState(){
 let chairs,links,usedChains,pulling=false,safe=false;
 function reset(){chairs=REPAIRS.map(()=>({partInstalled:false,repaired:false,tank:null,passenger:null}));links=[];usedChains=new Set();pulling=safe=false;}
 reset();
 function use(index,item,inventory){
  const c=chairs[index],r=REPAIRS[index];if(!c||pulling||safe)return 'That chair cannot be repaired now.';
  if(c.repaired)return 'Chair repaired. Put away the tool to move it.';
  if(!c.partInstalled){if(item!==r.part)return `Find and equip a ${r.part} to replace the ${r.label}.`;if(!inventory.has(item))return 'Collect the replacement part first.';inventory.remove(item);c.partInstalled=true;return `Replacement fitted. Secure it with the ${r.tool}${index===2?' and Allen sockets':''}.`;}
  if(item!==r.tool||!inventory.has(item))return `Equip the ${r.tool} to secure the replacement.`;
  if(index===2&&!inventory.has('allen'))return 'The ratchet needs the Allen socket set from Supplies.';
  c.repaired=true;return 'Chair repaired. Put away the tool, then move the chair in front of a tank.';
 }
 function place(index,tank){const c=chairs[index];if(!c?.repaired||c.passenger!==null||pulling||safe||!Number.isInteger(tank)||tank<0||tank>2||chairs.some((o,i)=>i!==index&&o.tank===tank))return false;c.tank=tank;return true;}
 function board(tank,figpal){const i=chairs.findIndex(c=>c.tank===tank&&c.repaired&&c.passenger===null);if(i<0||pulling||safe)return -1;chairs[i].passenger=figpal;return i;}
 function connected(a,b){const visited=new Set([a]),stack=[a];while(stack.length){const n=stack.pop();for(const link of links){const next=link.a===n?link.b:link.b===n?link.a:null;if(next===null||visited.has(next))continue;visited.add(next);stack.push(next);}}return visited.has(b);}
 function connect(a,b,chain){
  if(!/^chain[0-2]$/.test(chain)||pulling||safe||a===b||![a,b].every(i=>Number.isInteger(i)&&i>=0&&i<=3)||usedChains.has(chain)||links.length>=3||connected(a,b))return false;
  if([a,b].some(i=>i<3&&!chairs[i].repaired)||[a,b].some(i=>links.filter(l=>l.a===i||l.b===i).length>=(i===3?1:2)))return false;
  links.push({a,b,chain});usedChains.add(chain);return true;
 }
 const ready=()=>links.length===3&&chairs.every((c,i)=>c.repaired&&c.passenger!==null&&connected(i,3));
 return {reset,use,place,board,connect,get chairs(){return chairs;},get links(){return links;},get ready(){return ready();},get pulling(){return pulling;},get safe(){return safe;},startPull(){if(!ready()||pulling||safe)return false;pulling=true;return true;},finishPull(){if(pulling){pulling=false;safe=true;}},chairAt:tank=>chairs.findIndex(c=>c.tank===tank&&c.repaired)};
}
