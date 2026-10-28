export const FIGPAL_INTERVAL_SECONDS=10*60;

export function formatCountdown(seconds){
 const whole=Math.max(0,Math.ceil(seconds));
 return `${String(Math.floor(whole/60)).padStart(2,'0')}:${String(whole%60).padStart(2,'0')}`;
}

// Read an absolute monotonic deadline instead of subtracting rendered frame time.
// The deadline stays accurate when the tab is hidden or rendering slows down.
export function createCountdownClock(duration=FIGPAL_INTERVAL_SECONDS,now=()=>performance.now()/1000){
 let deadline=null;
 return {
  start(){if(deadline!==null)return false;deadline=now()+duration;return true;},
  reset(){deadline=null;},
  get remainingSeconds(){return deadline===null?duration:Math.max(0,Math.ceil(deadline-now()));},
  get status(){return deadline===null?'waiting':now()>=deadline?'finished':'running';}
 };
}
