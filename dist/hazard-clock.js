// Acid drainage, floor spread, cable fire and sprinkler effects share this clock.
// The Figpal cinematic keeps its own time, so it can finish while hazards wait.
export function createHazardClock(start=0){
 let time=start,lastSceneTime=start,wasPaused=false;
 const frame={time,dt:0,paused:false};
 return {
  update(sceneTime,paused=false){
   const elapsed=Math.max(0,sceneTime-lastSceneTime);
   // Neither edge of a cinematic can charge its elapsed time to the hazards.
   frame.dt=paused||wasPaused?0:elapsed;time+=frame.dt;
   lastSceneTime=sceneTime;wasPaused=paused;
   frame.time=time;frame.paused=paused;return frame;
  },
  get time(){return time;},
  reset(sceneTime=0){time=lastSceneTime=sceneTime;wasPaused=false;frame.time=time;frame.dt=0;frame.paused=false;}
 };
}
