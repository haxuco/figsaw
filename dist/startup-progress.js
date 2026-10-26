const stages=['Creating Figsaw…','Building the office…','Setting up the workstations…','Placing the objects…','Finishing the office…','Preparing the tanks…','Preparing the room…','Warming up the lights…'];

// Progress follows completed setup stages; downloading stays indeterminate.
export function createStartupProgress(root,frame=callback=>requestAnimationFrame(callback)){
 const label=root.querySelector('#loading-message'),bar=root.querySelector('#loading-progress');
 let value=0,failed=false,finished=false;
 function update(message){
  if(failed||finished)return;
  label.textContent=message;
  const index=stages.indexOf(message);
  if(index>=0){value=Math.max(value,Math.round((index+1)/(stages.length+1)*100));bar.value=value;}
  bar.setAttribute('aria-valuetext',message);
 }
 function fail(){failed=true;root.hidden=false;root.setAttribute('aria-busy','false');label.textContent='The room could not load. Please reload to try again.';bar.hidden=true;}
 function finish(){
  if(failed||finished)return;finished=true;bar.value=100;bar.setAttribute('aria-valuetext','Ready');label.textContent='Ready';root.setAttribute('aria-busy','false');
  // Paint the completed bar, then uncover the already-rendered room. No delay.
  frame(()=>frame(()=>{if(!failed)root.hidden=true;}));
 }
 return {update,fail,finish};
}
