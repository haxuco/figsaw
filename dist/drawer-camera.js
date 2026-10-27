import * as THREE from './vendor/three.module.js';

const wrap=angle=>THREE.MathUtils.euclideanModulo(angle+Math.PI,Math.PI*2)-Math.PI;

// Keep the contents in view until pickup/close, then return to the saved pose.
// Manual panning pauses the assist while retaining the Back/Escape return pose.
export function createDrawerCamera({position,state,getView}){
 let saved=null,move=null;
 const target=new THREE.Vector3(),lookAt=new THREE.Vector3(),direction=new THREE.Vector3();
 const capture=()=>({position:position.clone(),yaw:state.yaw,pitch:state.pitch,zoom:state.zoom});
 function transition(to,time,returning){move={from:capture(),to,time,returning};}
 function start(time){
  if(!saved)saved=capture();
  getView(target,lookAt);direction.subVectors(lookAt,target).normalize();
  transition({position:target.clone(),yaw:Math.atan2(-direction.x,-direction.z),pitch:Math.asin(direction.y),zoom:.90},time,false);
 }
 function restore(time){if(saved&&!move?.returning)transition(saved,time,true);}
 function cancel(){saved=null;move=null;}
 function update(time,reducedMotion=false){
  if(!move)return;
  const progress=reducedMotion?1:THREE.MathUtils.smootherstep(time-move.time,0,.85),{from,to,returning}=move;
  position.lerpVectors(from.position,to.position,progress);
  state.yaw=wrap(from.yaw+wrap(to.yaw-from.yaw)*progress);
  state.pitch=THREE.MathUtils.lerp(from.pitch,to.pitch,progress);
  state.zoom=THREE.MathUtils.lerp(from.zoom,to.zoom,progress);
  if(progress===1){move=null;if(returning)saved=null;}
 }
 return {start,restore,cancel,pause(){move=null;},update,get active(){return saved!==null;},get returning(){return !!move?.returning;}};
}
