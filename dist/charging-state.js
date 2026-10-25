export function createChargingState(){
 let phase='drawer',drawerOpen=false,battery=8;
 function use(action,locked=false){
  if(locked)return 'Detach your shackle before using the charger.';
  if(action==='drawer'){drawerOpen=!drawerOpen;return drawerOpen?'Drawer opened. Take the MacBook charger and cable.':'Drawer closed.';}
  if(action==='charger'){
   if(phase!=='drawer')return 'You already collected the charger.';
   if(!drawerOpen)return 'Open the rear drawer first.';
   phase='carrying';return 'Charger collected. Plug it into the power strip behind you.';
  }
  if(action==='strip'){
   if(phase==='drawer')return 'The power strip is on. Find the charger in the rear drawer.';
   if(phase==='carrying'){phase='powered';return 'Charger plugged in. Connect its cable to the MacBook.';}
   return phase==='charging'?'The MacBook is charging.':'The charger has power. Connect the MacBook.';
  }
  if(action==='laptop'){
   if(phase==='powered'){phase='charging';return 'Cable connected. The MacBook is charging.';}
   if(phase==='charging')return `MacBook battery: ${Math.floor(battery)}%.`;
   return phase==='carrying'?'Plug the charger into the power strip first.':'Find the charger in the rear drawer.';
  }
  return '';
 }
 return {use,update(dt){if(phase==='charging')battery=Math.min(100,battery+Math.max(0,dt)*.65);},reset(){phase='drawer';drawerOpen=false;battery=8;},get phase(){return phase;},get drawerOpen(){return drawerOpen;},get battery(){return battery;},get nextAction(){return phase==='drawer'?(drawerOpen?'charger':'drawer'):phase==='carrying'?'strip':phase==='powered'?'laptop':null;}};
}
