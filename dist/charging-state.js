export const LAPTOP_BATTERY_SECONDS=60;

export function createChargingState(){
 let phase='drawer',drawerOpen=false,battery=8,deadline=null,now=0,depleted=false;
 function update(time,{opened=false}={}){
  // A monotonic deadline survives slow frames and time spent in another tab.
  now=Math.max(now,Number.isFinite(time)?time:now);
  let event=null;
  if(opened&&deadline===null){deadline=now+LAPTOP_BATTERY_SECONDS;if(phase!=='charging')event='started';}
  if(phase==='charging'){battery=0;return event;}
  if(deadline!==null&&!depleted){
   battery=8*Math.max(0,Math.min(1,(deadline-now)/LAPTOP_BATTERY_SECONDS));
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
   if(phase==='carrying'){phase='powered';return 'Charger plugged in. Connect its cable to the MacBook.';}
   return phase==='charging'?'The MacBook is running on external power. Battery: 0%.':'The charger has power. Connect the MacBook.';
  }
  if(action==='laptop'){
   if(phase==='powered'){phase='charging';battery=0;depleted=true;return 'Cable connected. The MacBook is running on external power. Battery: 0%.';}
   if(phase==='charging')return 'MacBook battery: 0% · External power connected.';
   return phase==='carrying'?'Plug the charger into the power strip first.':'Find the charger in the Supplies drawer.';
  }
  return '';
 }
 return {use,update,
  capture(){return {phase,drawerOpen,battery,deadline,now,depleted};},
  restore(value,time=value.now){({phase,drawerOpen,battery,deadline,now,depleted}=value);if(deadline!==null)deadline+=time-now;now=time;},
  damageCable(){if(phase==='powered'||phase==='charging')phase='damaged';},
  reset(){phase='drawer';drawerOpen=false;battery=8;deadline=null;now=0;depleted=false;},
  get canUse(){return phase==='charging'||battery>0;},
  get started(){return deadline!==null;},
  get remaining(){return deadline===null?LAPTOP_BATTERY_SECONDS:Math.max(0,deadline-now);},
  get phase(){return phase;},get drawerOpen(){return drawerOpen;},get battery(){return battery;},
  get nextAction(){return phase==='drawer'?(drawerOpen?'charger':'drawer'):phase==='carrying'?'strip':phase==='powered'?'laptop':null;}
 };
}
