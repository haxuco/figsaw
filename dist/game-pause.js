// Keep wall-clock deadlines in sync with a scene that stops rendering in a menu.
export function createGamePause(now=()=>performance.now()/1000){
 let pausedAt=null,excluded=0,countdown=null,resumeCountdown=false;
 return {
  now:()=> (pausedAt??now())-excluded,
  pause(timer){
   if(pausedAt!==null)return;
   pausedAt=now();countdown=timer;resumeCountdown=!timer.paused;timer.pause();
  },
  resume(){
   if(pausedAt===null)return;
   excluded+=now()-pausedAt;pausedAt=null;
   if(resumeCountdown)countdown.resume();
   countdown=null;resumeCountdown=false;
  },
  get active(){return pausedAt!==null;}
 };
}
