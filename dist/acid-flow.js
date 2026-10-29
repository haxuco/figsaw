import {shiftTime} from './diagnostic-time.js';
const clamp=(v,a,b)=>Math.max(a,Math.min(b,v));
// The bottom band sits below the axe opening and retains a hazardous heel.
export const BREACHED_TANK_RESIDUAL=.20;
const FLOOD_DURATION=1.8;
// Finite reservoirs spread across the floor independently of the player's view.
// Deterministic concentric lobes overlap into broad, persistent pools.
export function createAcidFlow({speed=.38,maxPoints=180}={}){
 const leaks=[];let hitAt=null,finished=false,neutralized=false,invulnerable=false;
 function open(index,origin,time,locked=false,{breach=false}={}){
  if(locked||hitAt!==null||leaks.some(l=>l.index===index))return false;
  leaks.push({index,openedAt:time,drainStarted:time,drainInitial:1,drainFloor:breach?BREACHED_TANK_RESIDUAL:0,breached:breach,drainingComplete:false,duration:breach?FLOOD_DURATION:25,spreadInitial:0,progress:0,remaining:1,pouring:0,origin:{...origin},head:{x:origin.x,z:origin.z},points:[]});return true;
 }
 function breach(index,origin,time){
  const leak=leaks.find(l=>l.index===index);if(!leak)return open(index,origin,time,false,{breach:true});
  if(leak.remaining<=0||leak.breached)return false;
  leak.origin={...origin};leak.breached=true;leak.drainInitial=leak.remaining;
  leak.drainFloor=Math.min(BREACHED_TANK_RESIDUAL,leak.remaining);
  leak.spreadInitial=leak.points.length;
  leak.drainStarted=time;leak.duration=Math.max(.01,FLOOD_DURATION*(leak.remaining-leak.drainFloor)/(1-BREACHED_TANK_RESIDUAL));leak.drainingComplete=false;return true;
 }
 function update(time,dt,viewer,{protectedFromAcid=false}={}){
  if(finished)return false;
  for(const leak of leaks){
   const age=Math.max(0,time-leak.openedAt),drainAge=Math.max(0,time-leak.drainStarted),delay=leak.breached?.04:.48,u=clamp((drainAge-delay)/leak.duration,0,1);
   const volume=leak.drainInitial-leak.drainFloor;
   leak.progress=clamp(age/1.35,0,1);leak.remaining=Math.min(leak.remaining,leak.drainFloor+volume*(1-u)**(leak.breached?2:1.5));
   leak.drainingComplete=u>=1||volume<=.0001;
   leak.pouring=leak.drainingComplete?0:(leak.breached?clamp(drainAge/.16,0,1):leak.progress)*Math.sqrt((leak.remaining-leak.drainFloor)/volume);
   const spreadAge=leak.breached?drainAge:age;
   if(spreadAge<delay)continue;
   const spread=Math.min(1,(spreadAge-delay)/((leak.breached?7:30)*.38/speed)),initial=leak.spreadInitial??0;
   const desired=Math.min(maxPoints,initial+1+Math.floor(spread*(maxPoints-initial-1)));
   while(leak.points.length<desired){
    const n=leak.points.length,a=n*2.399963+leak.index*1.7;
    const r=n===0?0:Math.sqrt(n/(maxPoints-1))*4.5*(.90+.10*Math.sin(a*3+leak.index));
    leak.points.push({x:clamp(leak.origin.x+Math.cos(a)*r,-3.95,3.95),z:clamp(leak.origin.z+Math.sin(a)*r,-4.05,4.35),born:time,radius:.13});
   }
   for(const point of leak.points){
    point.radius=leak.breached?.22+.30*clamp((time-point.born)/1.25,0,1):.13+.34*clamp((time-point.born)/4,0,1);
    if(!invulnerable&&!neutralized&&!protectedFromAcid&&hitAt===null&&Math.hypot(viewer.x-point.x,viewer.z-point.z)<point.radius+.15)hitAt=time;
   }
  }
  if(hitAt!==null&&time-hitAt>=.85){finished=true;return true;}return false;
 }
 return {open,breach,update,leaks,
  setInvulnerable(value){invulnerable=value;if(value){hitAt=null;finished=false;}},
  capture(time){return structuredClone({time,leaks,hitAt,finished,neutralized});},
  restore(value,time){const copy=structuredClone(value),delta=time-copy.time;leaks.length=0;for(const l of copy.leaks){l.openedAt+=delta;l.drainStarted+=delta;for(const p of l.points)p.born+=delta;leaks.push(l);}hitAt=invulnerable?null:shiftTime(copy.hitAt,delta);finished=invulnerable?false:copy.finished;neutralized=copy.neutralized;},outflowFinished:index=>leaks.some(l=>l.index===index&&l.drainingComplete),neutralize(){if(hitAt!==null||finished)return false;neutralized=true;return true;},get neutralized(){return neutralized;},remaining:index=>leaks.find(l=>l.index===index)?.remaining??1,reset(){leaks.length=0;hitAt=null;finished=false;neutralized=false;},get dying(){return hitAt!==null;},get finished(){return finished;},blackout(time){return hitAt===null?0:clamp((time-hitAt)/.70,0,1);}};
}
