const clamp=(v,a,b)=>Math.max(a,Math.min(b,v));
// Finite reservoirs spread across the floor independently of the player's view.
// Deterministic concentric lobes overlap into broad, persistent pools.
export function createAcidFlow({speed=.38,maxPoints=180}={}){
 const leaks=[];let hitAt=null,finished=false,neutralized=false;
 function open(index,origin,time,locked=false,{breach=false}={}){
  if(locked||hitAt!==null||leaks.some(l=>l.index===index))return false;
  leaks.push({index,openedAt:time,drainStarted:time,drainInitial:1,duration:breach?14:25,progress:0,remaining:1,pouring:0,origin:{...origin},head:{x:origin.x,z:origin.z},points:[]});return true;
 }
 function breach(index,origin,time){
  const leak=leaks.find(l=>l.index===index);if(!leak)return open(index,origin,time,false,{breach:true});
  if(leak.remaining<=0)return false;
  leak.origin={...origin};leak.drainInitial=leak.remaining;leak.drainStarted=time;leak.duration=14*leak.remaining;return true;
 }
 function update(time,dt,viewer,{protectedFromAcid=false}={}){
  if(finished)return false;
  for(const leak of leaks){
   const age=Math.max(0,time-leak.openedAt),u=clamp((time-leak.drainStarted-.48)/leak.duration,0,1);
   leak.progress=clamp(age/1.35,0,1);leak.remaining=Math.min(leak.remaining,leak.drainInitial*(1-u)**1.5);
   leak.pouring=u>=1?0:leak.progress*Math.sqrt(leak.remaining);
   if(age<.48)continue;
   const spread=Math.min(1,(age-.48)/(30*.38/speed));
   const desired=Math.min(maxPoints,1+Math.floor(spread*(maxPoints-1)));
   while(leak.points.length<desired){
    const n=leak.points.length,a=n*2.399963+leak.index*1.7;
    const r=n===0?0:Math.sqrt(n/(maxPoints-1))*4.5*(.90+.10*Math.sin(a*3+leak.index));
    leak.points.push({x:clamp(leak.origin.x+Math.cos(a)*r,-3.95,3.95),z:clamp(leak.origin.z+Math.sin(a)*r,-4.05,4.35),born:time,radius:.13});
   }
   for(const point of leak.points){
    point.radius=.13+.34*clamp((time-point.born)/4,0,1);
    if(!neutralized&&!protectedFromAcid&&hitAt===null&&Math.hypot(viewer.x-point.x,viewer.z-point.z)<point.radius+.15)hitAt=time;
   }
  }
  if(hitAt!==null&&time-hitAt>=.85){finished=true;return true;}return false;
 }
 return {open,breach,update,leaks,neutralize(){if(hitAt!==null||finished)return false;neutralized=true;return true;},get neutralized(){return neutralized;},remaining:index=>leaks.find(l=>l.index===index)?.remaining??1,reset(){leaks.length=0;hitAt=null;finished=false;neutralized=false;},get dying(){return hitAt!==null;},get finished(){return finished;},blackout(time){return hitAt===null?0:clamp((time-hitAt)/.70,0,1);}};
}
