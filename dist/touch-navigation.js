// One-finger dragging is handled by the scene. Two fingers adjust zoom without moving the viewer.
export function createTouchNavigation({canvas,state,cancel,canInteract}){
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
 return {reset(){touches.clear();pinching=false;pinchDistance=0;}};
}
