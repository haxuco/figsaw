// Count rendered frames, not requestAnimationFrame callbacks skipped by the cap.
// Only touch the DOM twice a second. The caller resets it when rendering pauses.
export function createFrameRateCounter(node,interval=500){
 let start=null,last=null,frames=0,text='';
 function display(value){if(value!==text){text=value;node.textContent=value;}}
 function reset(){start=last=null;frames=0;display('— FPS');}
 function frame(now){
  if(start===null||now<last){start=last=now;frames=0;return;}
  last=now;frames++;
  const elapsed=now-start;
  if(elapsed>=interval){const fps=frames*1000/elapsed;display(`${fps<1?'<1':Math.round(fps)} FPS`);start=now;frames=0;}
 }
 reset();return {frame,reset};
}
