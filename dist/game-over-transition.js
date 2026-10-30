const smooth=(time,start,end)=>{const t=Math.max(0,Math.min(1,(time-start)/(end-start)));return t*t*(3-2*t);};

export function gameOverReason(cause){
 switch(cause){
  case 'acid':return 'The acid reached you.';
  case 'saw':return 'The saw cut too deep.';
  case 'fire':return 'You were consumed by the fire.';
  case 'explosion':return 'You were caught in the explosion.';
  case 'laptop':return 'Water destroyed the laptop.';
  case 'deadline':return 'Time ran out. Acid flooded the room.';
  case 'flood':return 'The acid flood made escape impossible.';
  default:return 'The challenge ended in failure.';
 }
}
export function resolveGameOverCause({alarm,deadline,saw,fire,acid,flood}={}){
 if(alarm==='acid')return 'explosion';
 if(alarm==='laptop')return 'laptop';
 if(deadline)return 'deadline';
 if(saw)return 'saw';
 if(fire)return 'fire';
 if(acid)return 'acid';
 return flood?'flood':null;
}

// Every failure uses a flat red fade, a short hold, then solid black. The title
// waits until the view is fully black; there are no liquid or drip animations.
export function createGameOverTimeline(){
 let startedAt=null,reduced=false;
 const frame={elapsed:0,visible:false,red:0,blackout:0,finished:false};
 function reset(){startedAt=null;Object.assign(frame,{elapsed:0,visible:false,red:0,blackout:0,finished:false});}
 return {
  start(time,reducedMotion=false){if(startedAt!==null)return false;startedAt=time;reduced=reducedMotion;return true;},
  update(time){
   if(startedAt===null)return frame;
   const t=Math.max(0,time-startedAt);frame.elapsed=t;
   frame.red=smooth(t,0,reduced?.25:.65);
   frame.blackout=smooth(t,reduced?.4:1,reduced?.85:2.1);
   frame.finished=t>=(reduced?1:2.3);frame.visible=frame.blackout<1;
   return frame;
  },reset,get finished(){return frame.finished;}
 };
}
export function createGameOverTransition(element){
 const timeline=createGameOverTimeline();
 element.innerHTML='<div class="death-red-wash"></div>';
 const wash=element.querySelector('.death-red-wash');
 function update(time){const frame=timeline.update(time);element.hidden=!frame.visible;wash.style.opacity=String(frame.red);return frame;}
 function reset(){timeline.reset();element.hidden=true;wash.style.opacity='0';}
 reset();return {start:timeline.start,update,reset,get finished(){return timeline.finished;}};
}
