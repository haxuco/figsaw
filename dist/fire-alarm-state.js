import {shiftTime} from './diagnostic-time.js';
const clamp=v=>Math.max(0,Math.min(1,v));

// Decide once when the pull station is used. An existing fire takes priority
// over acid, so the charger-fire puzzle has a survivable sprinkler response.
export function createFireAlarmState(){
 let outcome=null,startedAt=null,completed=false,invulnerable=false;
 function pull(time,{locked=false,fireActive=false,acidSpilled=false}={}){
  if(locked||outcome!==null)return false;
  outcome=fireActive?'fire':acidSpilled?'acid':'laptop';startedAt=time;return outcome;
 }
 const elapsed=time=>startedAt===null?0:Math.max(0,time-startedAt);
 const fatal=()=>outcome==='acid'||outcome==='laptop';
 const impactAt=()=>outcome==='acid'?1.25:1.8;
 return {pull,elapsed,
  setInvulnerable(value){invulnerable=value;},
  capture(time){return {time,outcome,startedAt,completed};},
  restore(value,time){outcome=value.outcome;startedAt=shiftTime(value.startedAt,time-value.time);completed=value.completed;},
  update(time){if(invulnerable||!fatal()||completed||elapsed(time)<impactAt()+2.3)return false;completed=true;return true;},
  blackout(time){return !invulnerable&&fatal()?clamp((elapsed(time)-impactAt()-1.5)/.7):0;},
  get outcome(){return outcome;},get active(){return outcome!==null;},get dying(){return !invulnerable&&fatal();},
  get message(){return outcome==='acid'?'The sprinkler water hits the acid. A violent reaction erupts. Game over.':outcome==='laptop'?'The sprinklers flood the laptop. Your escape route is destroyed. Game over.':'';},
  reset(){outcome=null;startedAt=null;completed=false;}
 };
}
