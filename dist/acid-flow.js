const clamp=(v,a,b)=>Math.max(a,Math.min(b,v));

// A growing wet trail, not a delayed loss timer: contact is tested against the
// actual puddles, including old ones the player can step back into.
export function createAcidFlow({speed=.38,maxPoints=180}={}){
 const leaks=[];let hitAt=null,finished=false;
 function open(index,origin,time,locked=false){
  if(locked||hitAt!==null||leaks.some(leak=>leak.index===index))return false;
  leaks.push({index,openedAt:time,progress:0,origin:{...origin},head:{x:origin.x,z:origin.z},points:[]});return true;
 }
 function update(time,dt,viewer){
  if(finished)return false;
  for(const leak of leaks){
   leak.progress=clamp((time-leak.openedAt)/1.35,0,1);
   if(time-leak.openedAt<.48)continue;
   if(!leak.points.length)leak.points.push({...leak.head,born:time,radius:.13});
   const dx=viewer.x-leak.head.x,dz=viewer.z-leak.head.z,distance=Math.hypot(dx,dz),step=Math.min(distance,speed*clamp(dt,0,.08));
   if(distance>.001){leak.head.x+=dx/distance*step;leak.head.z+=dz/distance*step;}
   const tail=leak.points.at(-1);
   if(Math.hypot(tail.x-leak.head.x,tail.z-leak.head.z)>.075){
    leak.points.push({...leak.head,born:time,radius:.13});
    if(leak.points.length>maxPoints)leak.points.splice(1,1);
   }
   for(const point of leak.points){
    point.radius=.13+.13*clamp((time-point.born)/3,0,1);
    if(hitAt===null&&Math.hypot(viewer.x-point.x,viewer.z-point.z)<point.radius+.15)hitAt=time;
   }
  }
  if(hitAt!==null&&time-hitAt>=.85){finished=true;return true;}
  return false;
 }
 return {open,update,leaks,reset(){leaks.length=0;hitAt=null;finished=false;},get dying(){return hitAt!==null;},get finished(){return finished;},blackout(time){return hitAt===null?0:clamp((time-hitAt)/.70,0,1);}};
}
