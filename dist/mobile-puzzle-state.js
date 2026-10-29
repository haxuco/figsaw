export const ANIMAL_DIGITS=Object.freeze({Pig:'7',Tiger:'3',Elephant:'8',Fox:'2'});
export const ANIMALS=Object.freeze(['Fox','Pig','Elephant','Tiger']);
function shuffled(values,random){
 const out=[...values];for(let i=out.length-1;i>0;i--){const j=Math.min(i,Math.floor(Math.max(0,random())*(i+1)));[out[i],out[j]]=[out[j],out[i]];}return out;
}
// A single source of truth for embroidery, the etched skull, and the exit keypad.
export function createEscapePuzzle(random=Math.random){
 let digits,order,roles,dropOrder,pmIndex,revision=0,fishRevealed=false;
 function reset(){
  const previous=digits&&order.map(k=>digits[k]).join(''),oldDigits=digits,oldOrder=order;
  order=shuffled(ANIMALS,random);if(oldOrder&&order.every((k,i)=>k===oldOrder[i]))order.push(order.shift());const pool=shuffled(['1','2','3','4','5','6','7','8','9'],random);
  digits=Object.fromEntries(ANIMALS.map((kind,i)=>[kind,pool[i]]));
  if(oldDigits&&ANIMALS.every(k=>digits[k]===oldDigits[k]))[digits.Fox,digits.Pig]=[digits.Pig,digits.Fox];
  if(order.map(k=>digits[k]).join('')===previous)[digits[order[0]],digits[order[1]]]=[digits[order[1]],digits[order[0]]];
  const previousPM=pmIndex;
  pmIndex=Math.min(2,Math.floor(Math.max(0,random())*3));
  if(previousPM===pmIndex)pmIndex=(pmIndex+1+Math.floor(random()*2))%3;
  const others=shuffled([0,1,2].filter(i=>i!==pmIndex),random);
  roles=Array(3);roles[pmIndex]='Product Manager';roles[others[0]]='Product Designer';roles[others[1]]='Frontend Developer';
  roles=Object.freeze(roles);dropOrder=Object.freeze([...others,pmIndex]);
  digits=Object.freeze(digits);order=Object.freeze(order);fishRevealed=false;revision++;
 }
 reset();return {reset,get roles(){return roles;},get pmIndex(){return pmIndex;},get dropOrder(){return dropOrder;},revealFish(){fishRevealed=true;},setFishRevealed(value){fishRevealed=!!value;},get digits(){return digits;},get order(){return order;},get letters(){return order.map(k=>k[0]).join('');},get code(){return order.map(k=>digits[k]).join('');},get revision(){return revision;},get fishRevealed(){return fishRevealed;}};
}
export const MOBILE_PIECES=Object.freeze({
 mobilePig:'Pig plush',mobileTiger:'Tiger plush',mobileElephant:'Elephant plush',mobileFox:'Fox plush',
 mobileBar0:'Mobile crossbar',mobileBar1:'Mobile crossbar',mobileHub:'Mobile hub'
});
export function createMobilePuzzleState(){
 const inventory=new Set(),pieces=new Set();let phase='scattered',hung=false,active=false,action=null,started=0,progress=0;
 const complete=()=>pieces.size===Object.keys(MOBILE_PIECES).length;
 return {
  capture(){return {items:[...inventory],pieces:[...pieces],phase,hung,active,action,started,progress};},
  restore(value){inventory.clear();pieces.clear();for(const id of value.items)inventory.add(id);for(const id of value.pieces)pieces.add(id);({phase,hung,active,action,started,progress}=value);},
  collectPiece(id,bag,{locked=false}={}){
   if(locked||hung||!MOBILE_PIECES[id]||pieces.has(id)||!bag.add(id))return false;
   pieces.add(id);
   if(complete()){phase='tangled';for(const piece of Object.keys(MOBILE_PIECES))bag.remove(piece);bag.add('mobile');}
   return true;
  },
  hang(bag,{locked=false}={}){if(locked||hung||!complete()||!bag.has('mobile'))return false;bag.remove('mobile');hung=true;return true;},
  inspect(locked=false){if(locked||!hung||active)return false;active=true;return true;},
  close(force=false){if(action&&!force)return false;active=false;return true;},
  collect(item,{locked=false,drawerReady=false}={}){if(locked||!drawerReady||item!=='mobileKit'||inventory.has(item)||phase==='repaired')return false;inventory.add(item);return true;},
  repair(time){if(!active||action||phase!=='tangled'||!inventory.has('mobileKit'))return false;action='repair';started=time;progress=0;return true;},
  update(time,reducedMotion=false){if(!action)return null;progress=Math.max(0,Math.min(1,(time-started)/(reducedMotion?.2:3.2)));if(progress<1)return null;phase='repaired';inventory.delete('mobileKit');action=null;return 'repair';},
  reset(){inventory.clear();pieces.clear();phase='scattered';hung=active=false;action=null;progress=0;},
  has:item=>inventory.has(item),hasPiece:id=>pieces.has(id),get collectedAll(){return complete();},get hung(){return hung;},get phase(){return phase;},get active(){return active;},get action(){return action;},get progress(){return progress;}
 };
}
export function createDoorKeypadState({order=null,digits=ANIMAL_DIGITS,puzzle=null}={}){
 let entry='',unlocked=false;
 const fixedCode=Array.isArray(order)&&order.length===4&&new Set(order).size===4&&order.every(k=>k in digits)?order.map(k=>digits[k]).join(''):null;
 return {press(key,{locked=false}={}){
  if(locked)return 'Free your wrist first.';if(unlocked)return 'Door unlocked.';
  if(key==='clear'){entry='';return '';}
  if(key==='back'){entry=entry.slice(0,-1);return '';}
  if(/^\d$/.test(key)){if(entry.length<4)entry+=key;return '';}
  if(key!=='enter')return '';
  if(entry.length!==4)return 'Enter four numbers.';
  const code=puzzle?.code??fixedCode;
  if(!code){entry='';return 'Locked. You still need the animal order.';}
  if(entry===code){unlocked=true;return 'Door unlocked.';}
  entry='';return 'Incorrect order.';
 },reset(){entry='';unlocked=false;},get entry(){return entry;},get unlocked(){return unlocked;},get configured(){return (puzzle?.code??fixedCode)!==null;}};
}

// Deliberately awkward four-slot control: digits can only change through arrows.
export function createDirectionalKeypadState(puzzle){
 let digits=[0,0,0,0],selected=0,unlocked=false;
 return {press(key,{locked=false}={}){
  if(locked)return 'Free your wrist first.';if(unlocked)return 'Door unlocked.';
  if(key==='left')selected=(selected+3)%4;
  else if(key==='right')selected=(selected+1)%4;
  else if(key==='up')digits[selected]=(digits[selected]+1)%10;
  else if(key==='down')digits[selected]=(digits[selected]+9)%10;
  else if(key==='enter'){
   if(puzzle?.code===digits.join('')){unlocked=true;return 'Door unlocked.';}
   return 'Incorrect order.';
  }
  return '';
 },reset(){digits=[0,0,0,0];selected=0;unlocked=false;},get entry(){return digits.join('');},get selected(){return selected;},get unlocked(){return unlocked;}};
}
