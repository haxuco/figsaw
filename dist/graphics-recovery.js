// A lost WebGL context must not trigger an automatic page-reload loop.
export function installGraphicsRecovery(canvas,{pause,resume,lowerQuality,status}){
 let lost=false,timer;
 function message(text,retry=false){status.hidden=false;status.textContent=text;
  if(retry){const button=document.createElement('button');button.type='button';button.textContent='Retry with lighter graphics';button.addEventListener('click',()=>location.reload(),{once:true});status.append(document.createElement('br'),button);}
 }
 function onLost(event){event.preventDefault();lost=true;pause();try{sessionStorage.setItem('figsaw-safe-graphics','1');}catch{}
  message('Restoring graphics…');clearTimeout(timer);timer=setTimeout(()=>{if(lost)message('Graphics were interrupted. Your device may need a lighter scene.',true);},8000);
 }
 function onRestored(){if(!lost)return;lost=false;clearTimeout(timer);lowerQuality();status.hidden=true;resume();}
 canvas.addEventListener('webglcontextlost',onLost);canvas.addEventListener('webglcontextrestored',onRestored);
 return {get lost(){return lost;},dispose(){clearTimeout(timer);canvas.removeEventListener('webglcontextlost',onLost);canvas.removeEventListener('webglcontextrestored',onRestored);}};
}
