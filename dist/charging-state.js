export const LAPTOP_BATTERY_SECONDS=60;
export const LAPTOP_CHARGE_SECONDS_PER_PERCENT=20;
const INITIAL_BATTERY=8;

export function createChargingState(){
 let phase='drawer',drawerOpen=false,battery=INITIAL_BATTERY,deadline=null,now=0,depleted=false;
 const batteryLevel=()=>phase==='charging'?Math.floor(battery+1e-8):Math.ceil(battery);
 const chargingMessage=()=>`MacBook charging · Battery: ${batteryLevel()}%.`;
 function update(time,{opened=false}={}){
  // A monotonic deadline survives slow frames and time spent in another tab.
  const previous=now;now=Math.max(now,Number.isFinite(time)?time:now);
  let event=null;
  if(opened&&deadline===null){deadline=now+LAPTOP_BATTERY_SECONDS;if(phase!=='charging')event='started';}
  if(phase==='charging'){battery=Math.min(100,battery+(now-previous)/LAPTOP_CHARGE_SECONDS_PER_PERCENT);depleted=false;return event;}
  if(deadline!==null&&!depleted){
   battery=Math.max(0,Math.min(100,INITIAL_BATTERY*(deadline-now)/LAPTOP_BATTERY_SECONDS));
   if(battery===0){depleted=true;event='depleted';}
  }
  return event;
 }
 function use(action,locked=false){
  if(locked)return 'Detach your shackle before using the charger.';
  if(action==='drawer'){drawerOpen=!drawerOpen;return drawerOpen?'Supplies drawer opened. Take the charger, scissors or string.':'Drawer closed.';}
  if(phase==='damaged')return 'The charger cable has burned through. It cannot power the MacBook.';
  if(action==='charger'){
   if(phase!=='drawer')return 'You already collected the charger.';
   if(!drawerOpen)return 'Open the Supplies drawer first.';
   phase='carrying';return 'Charger collected. Plug it into the power strip behind you.';
  }
  if(action==='strip'){
   if(phase==='drawer')return 'The power strip is on. Find the charger in the Supplies drawer.';
   if(phase==='carrying'){phase='charging';depleted=false;return `Charger and cable connected. ${chargingMessage()}`;}
   return phase==='charging'?chargingMessage():'The charger has power. Connect the MacBook.';
  }
  if(action==='laptop'){
   if(phase==='powered'){phase='charging';depleted=false;return `Cable connected. ${chargingMessage()}`;}
   if(phase==='charging')return chargingMessage();
   return phase==='carrying'?'Plug the charger into the power strip first.':'Find the charger in the Supplies drawer.';
  }
  return '';
 }
 return {use,update,
  capture(){return {phase,drawerOpen,battery,deadline,now,depleted};},
  restore(value,time=value.now){({phase,drawerOpen,battery,deadline,now,depleted}=value);if(deadline!==null)deadline+=time-now;now=time;},
  damageCable(){if(phase==='powered'||phase==='charging'){phase='damaged';deadline=now+battery/INITIAL_BATTERY*LAPTOP_BATTERY_SECONDS;depleted=battery<=0;}},
  reset(){phase='drawer';drawerOpen=false;battery=8;deadline=null;now=0;depleted=false;},
  get canUse(){return phase==='charging'||battery>0;},
  get started(){return deadline!==null;},
  get remaining(){return phase==='charging'?battery/INITIAL_BATTERY*LAPTOP_BATTERY_SECONDS:deadline===null?LAPTOP_BATTERY_SECONDS:Math.max(0,deadline-now);},
  get batteryLevel(){return batteryLevel();},
  get phase(){return phase;},get drawerOpen(){return drawerOpen;},get battery(){return battery;},
  get nextAction(){return phase==='drawer'?(drawerOpen?'charger':'drawer'):phase==='carrying'?'strip':phase==='powered'?'laptop':null;}
 };
}
