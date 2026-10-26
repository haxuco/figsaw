import * as THREE from './vendor/three.module.js';
const wrap=a=>THREE.MathUtils.euclideanModulo(a+Math.PI,Math.PI*2)-Math.PI;

// Orbit a fixed mobile in the room; keep the original player pose for returning.
export function createMobileCamera({position,state,getTarget,aspect=()=>1,baseFov=62}){
 const target=new THREE.Vector3(),offset=new THREE.Vector3(),direction=new THREE.Vector3();
 let saved=null,move=null,azimuth=0,elevation=1.08;
 const viewFov=()=>aspect()<.85?70:60;
 const capture=()=>({position:position.clone(),yaw:state.yaw,pitch:state.pitch,zoom:state.zoom});
 const apply=pose=>{position.copy(pose.position);state.yaw=pose.yaw;state.pitch=pose.pitch;state.zoom=pose.zoom;};
 function targetOrbit(){
  const radius=Math.max(1.55,1.35/(2*Math.tan(THREE.MathUtils.degToRad(viewFov()/2))*.76*Math.max(.4,aspect())));
  const vertical=THREE.MathUtils.clamp(radius*Math.sin(elevation),.16-target.y,2.94-target.y);
  return {radius,elevation:Math.asin(vertical/radius),azimuth};
 }
 function view(which,time){
  if(!saved)saved=capture();getTarget(target);
  elevation=which==='under'?-1.45:1.08;azimuth=0;transition(time);
 }
 function transition(time){
  offset.subVectors(position,target);const radius=Math.max(.1,offset.length());
  move={kind:'orbit',time,from:{radius,elevation:Math.asin(THREE.MathUtils.clamp(offset.y/radius,-1,1)),azimuth:Math.atan2(offset.x,offset.z),zoom:state.zoom},to:targetOrbit()};
 }
 function drag(dx,dy,time){if(!saved||move?.kind==='return')return;azimuth=THREE.MathUtils.clamp(azimuth+dx*.006,-.8,.8);elevation=THREE.MathUtils.clamp(elevation+dy*.006,-1.45,1.08);transition(time);}
 function restore(time,immediate=false){
  if(!saved)return;if(immediate){apply(saved);saved=move=null;return;}
  move={kind:'return',time,from:capture(),to:saved};
 }
 function update(time,reducedMotion=false){
  if(!move)return;const p=reducedMotion?1:THREE.MathUtils.smootherstep(time-move.time,0,move.kind==='return'?.85:1.05),{from,to}=move;
  if(move.kind==='return'){
   position.lerpVectors(from.position,to.position,p);state.yaw=wrap(from.yaw+wrap(to.yaw-from.yaw)*p);state.pitch=THREE.MathUtils.lerp(from.pitch,to.pitch,p);state.zoom=THREE.MathUtils.lerp(from.zoom,to.zoom,p);
   if(p===1){apply(to);saved=move=null;}return;
  }
  const a=from.azimuth+wrap(to.azimuth-from.azimuth)*p,e=THREE.MathUtils.lerp(from.elevation,to.elevation,p),r=THREE.MathUtils.lerp(from.radius,to.radius,p);
  position.set(Math.sin(a)*Math.cos(e)*r,Math.sin(e)*r,Math.cos(a)*Math.cos(e)*r).add(target);
  direction.subVectors(target,position).normalize();state.yaw=Math.atan2(-direction.x,-direction.z);state.pitch=Math.asin(direction.y);state.zoom=THREE.MathUtils.lerp(from.zoom,viewFov()/baseFov,p);
  if(p===1)move=null;
 }
 function reset(){saved=move=null;azimuth=0;elevation=1.08;}
 return {view,drag,restore,update,reset,get active(){return saved!==null;},get returning(){return move?.kind==='return';},get underneath(){return saved!==null&&elevation<-.7&&position.y<target.y-.5;}};
}
