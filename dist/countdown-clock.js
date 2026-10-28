export const FIGPAL_INTERVAL_SECONDS=10*60;

export function formatCountdown(seconds){
 const whole=Math.max(0,Math.ceil(seconds));
 return `${String(Math.floor(whole/60)).padStart(2,'0')}:${String(whole%60).padStart(2,'0')}`;
}

// Read an absolute monotonic deadline instead of subtracting rendered frame time.
// The deadline stays accurate when the tab is hidden or rendering slows down.
export function createCountdownClock(duration=FIGPAL_INTERVAL_SECONDS,now=()=>performance.now()/1000){
 let deadline=null,held=duration,paused=false;
 const remaining=()=>deadline===null?held:Math.max(0,deadline-now());
 return {
  start(){if(deadline!==null)return false;held=duration;deadline=paused?Infinity:now()+held;return true;},
  reset(){deadline=null;held=duration;},
  pause(){if(paused)return;held=remaining();paused=true;if(deadline!==null)deadline=Infinity;},
  resume(){if(!paused)return;paused=false;if(deadline!==null)deadline=now()+held;},
  setRemaining(seconds){held=Math.max(0,seconds);deadline=paused?Infinity:now()+held;},
  capture(){return {started:deadline!==null,seconds:paused?held:remaining(),paused};},
  restore(value){held=value.seconds;paused=value.paused;deadline=value.started?(paused?Infinity:now()+held):null;},
  get paused(){return paused;},
  get remainingSeconds(){return Math.ceil(paused?held:remaining());},
  get status(){return deadline===null?'waiting':paused?'paused':now()>=deadline?'finished':'running';}
 };
}
