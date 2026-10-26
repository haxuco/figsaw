const clamp=(v,a=0,b=1)=>Math.max(a,Math.min(b,v));

// Game logic is independent of particles/frame rate. Only real wet/live cable
// contact starts this chain of events; arming alone never releases water.
export function createCableFireState(){
 let phase='idle',armed=false,contactAt=null,ignitedAt=null,sprayAt=null,hitAt=null,origin=null,head=null,intensity=0,melt=0;
 const patches=[];
 function update(time,dt,{contact=null,live=false,viewer}){
  if(phase==='dead')return false;
  if(phase==='idle'&&live&&contact){
   origin={...contact};head={x:contact.x,z:contact.z};contactAt=time;phase='melting';
  }
  if(phase==='melting'){
   melt=clamp((time-contactAt)/1.4);
   if(melt===1){phase='burning';ignitedAt=time;patches.push({...head,born:time,radius:.10});}
  }
  if(phase==='burning'||phase==='extinguishing'){
   const age=time-ignitedAt;
   if(armed&&sprayAt===null&&age>=1.1){sprayAt=time;phase='extinguishing';}
   const wet=sprayAt===null?0:clamp((time-sprayAt)/2.8);
   intensity=clamp(age/1.2)*(1-wet);
   if(phase==='burning'&&age>.8){
    const dx=viewer.x-head.x,dz=viewer.z-head.z,distance=Math.hypot(dx,dz),step=Math.min(distance,.32*clamp(dt,0,.08));
    if(distance>.001){head.x+=dx/distance*step;head.z+=dz/distance*step;}
    if(Math.hypot(head.x-patches.at(-1).x,head.z-patches.at(-1).z)>.14&&patches.length<60)patches.push({...head,born:time,radius:.10});
   }
   for(const patch of patches){
    patch.radius=.10+.35*clamp((time-patch.born)/3);
    if(sprayAt===null&&hitAt===null&&age>2.4&&Math.hypot(viewer.x-patch.x,viewer.z-patch.z)<patch.radius+.17){hitAt=time;}
   }
   if(wet===1){phase='extinguished';intensity=0;}
  }
  if(hitAt!==null&&time-hitAt>=1.1){phase='dead';return true;}
  return false;
 }
 return {update,patches,activateSprinklers(){armed=true;},
  releaseSprinklers(time){
   if(phase==='dead'||hitAt!==null||sprayAt!==null)return false;
   armed=true;sprayAt=time;if(phase==='burning')phase='extinguishing';return true;
  },
  reset(){phase='idle';armed=false;contactAt=ignitedAt=sprayAt=hitAt=origin=head=null;intensity=melt=0;patches.length=0;},
  blackout(time){return hitAt===null?0:clamp((time-hitAt)/1.0);},
  get phase(){return phase;},get armed(){return armed;},get origin(){return origin;},get melt(){return melt;},get intensity(){return intensity;},get dying(){return hitAt!==null;},
  water(time){return sprayAt===null?0:clamp((time-sprayAt)/.45)*(1-clamp((time-sprayAt-7)/2));}
 };
}
