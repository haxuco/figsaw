// Touch gestures share the same movement state as the keyboard; no second game loop.
export function createTouchNavigation({canvas,state,keys,cancel,canInteract}){
 const touches=new Map();let pinchDistance=0,pinchZoom=1,pinching=false;
 const distance=()=>{const[a,b]=[...touches.values()];return Math.hypot(a.x-b.x,a.y-b.y);};
 canvas.addEventListener('pointerdown',e=>{
  if(e.pointerType!=='touch'||!canInteract())return;
  touches.set(e.pointerId,{x:e.clientX,y:e.clientY});
  if(touches.size===2){pinchDistance=distance();pinchZoom=state.zoom;pinching=true;cancel();e.stopImmediatePropagation();}
 },true);
 canvas.addEventListener('pointermove',e=>{
  if(!touches.has(e.pointerId))return;touches.set(e.pointerId,{x:e.clientX,y:e.clientY});
  if(pinching){e.stopImmediatePropagation();if(touches.size===2&&canInteract())state.zoom=Math.max(.60,Math.min(1.15,pinchZoom*pinchDistance/Math.max(1,distance())));}
 },true);
 function end(e){if(!touches.has(e.pointerId))return;touches.delete(e.pointerId);if(pinching){e.stopImmediatePropagation();if(!touches.size)pinching=false;}}
 canvas.addEventListener('pointerup',end,true);canvas.addEventListener('pointercancel',end,true);
 const nav=document.createElement('div');nav.id='touch-navigation';
 const toggle=document.createElement('button');toggle.type='button';toggle.textContent='Move';toggle.setAttribute('aria-expanded','false');toggle.setAttribute('aria-label','Show movement controls');nav.append(toggle);
 const pad=document.createElement('div');pad.className='touch-pad';pad.hidden=true;
 for(const[key,label,text]of[['KeyQ','Lower camera','↓'],['KeyW','Move forward','▲'],['KeyE','Raise camera','↑'],['KeyA','Move left','◀'],['KeyS','Move backward','▼'],['KeyD','Move right','▶']]){
  const button=document.createElement('button');button.type='button';button.textContent=text;button.setAttribute('aria-label',label);button.style.touchAction='none';
  button.addEventListener('pointerdown',e=>{e.preventDefault();if(!canInteract())return;cancel();keys.add(key);button.setPointerCapture(e.pointerId);});
  for(const event of['pointerup','pointercancel','lostpointercapture'])button.addEventListener(event,()=>keys.delete(key));
  pad.append(button);
 }
 toggle.addEventListener('click',()=>{pad.hidden=!pad.hidden;toggle.setAttribute('aria-expanded',String(!pad.hidden));if(pad.hidden)keys.clear();});nav.append(pad);document.body.append(nav);
 return {reset(){touches.clear();pinching=false;keys.clear();pad.hidden=true;toggle.setAttribute('aria-expanded','false');}};
}
