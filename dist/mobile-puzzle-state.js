export const ANIMAL_DIGITS=Object.freeze({Pig:'7',Tiger:'3',Elephant:'8',Fox:'2'});
// The animal-order clue is deliberately deferred. Set this when that puzzle is designed.
export const EXIT_ANIMAL_ORDER=null;
export function createMobilePuzzleState(){
 const inventory=new Set();let phase='tangled',active=false,action=null,started=0,progress=0;
 return {
  inspect(locked=false){if(locked||active)return false;active=true;return true;},
  close(force=false){if(action&&!force)return false;active=false;return true;},
  collect(item,{locked=false,drawerReady=false}={}){if(locked||!drawerReady||!['scissors','string'].includes(item)||inventory.has(item))return false;inventory.add(item);return true;},
  cut(time){if(!active||action||phase!=='tangled'||!inventory.has('scissors'))return false;action='cut';started=time;progress=0;return true;},
  restring(time){if(!active||action||phase!=='cut'||!inventory.has('string'))return false;action='restring';started=time;progress=0;return true;},
  update(time,reducedMotion=false){if(!action)return null;progress=Math.max(0,Math.min(1,(time-started)/(reducedMotion?.2:action==='cut'?1.4:2)));if(progress<1)return null;phase=action==='cut'?'cut':'repaired';if(phase==='repaired')inventory.delete('string');const done=action;action=null;return done;},
  reset(){inventory.clear();phase='tangled';active=false;action=null;progress=0;},
  has:item=>inventory.has(item),get phase(){return phase;},get active(){return active;},get action(){return action;},get progress(){return progress;}
 };
}
export function createDoorKeypadState({order=EXIT_ANIMAL_ORDER}={}){
 let entry='',unlocked=false;
 const code=Array.isArray(order)&&order.length===4&&new Set(order).size===4&&order.every(k=>k in ANIMAL_DIGITS)?order.map(k=>ANIMAL_DIGITS[k]).join(''):null;
 return {press(key,{locked=false}={}){
  if(locked)return 'Free your wrist first.';if(unlocked)return 'Door unlocked.';
  if(key==='clear'){entry='';return '';}
  if(key==='back'){entry=entry.slice(0,-1);return '';}
  if(/^\d$/.test(key)){if(entry.length<4)entry+=key;return '';}
  if(key!=='enter')return '';
  if(entry.length!==4)return 'Enter four numbers.';
  if(!code){entry='';return 'Locked. You still need the animal order.';}
  if(entry===code){unlocked=true;return 'Door unlocked.';}
  entry='';return 'Incorrect order.';
 },reset(){entry='';unlocked=false;},get entry(){return entry;},get unlocked(){return unlocked;},get configured(){return code!==null;}};
}
