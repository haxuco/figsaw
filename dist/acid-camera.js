import * as THREE from './vendor/three.module.js';

const wrap=angle=>THREE.MathUtils.euclideanModulo(angle+Math.PI,Math.PI*2)-Math.PI;

// Sit up above the open lid and look along the spill's approach. Keep the
// player's floor position fixed so the camera assist cannot dodge the acid.
export function createAcidCamera({position,state}){
 let move=null;
 const destination=new THREE.Vector3(),target=new THREE.Vector3(),direction=new THREE.Vector3();
 function start(time,source,laptopOpen=false){
  if(!laptopOpen)return false;
  destination.copy(position);
  destination.y=Math.max(position.y,Math.min(2.5,Math.max(1.65,position.y+.65)));
  target.set(source.x,.035,source.z).lerp(new THREE.Vector3(position.x,.035,position.z),.44);
  direction.subVectors(target,destination).normalize();
  move={time,from:position.clone(),yaw:state.yaw,pitch:state.pitch,zoom:state.zoom,
   targetYaw:Math.atan2(-direction.x,-direction.z),targetPitch:Math.asin(direction.y)};
  return true;
 }
 function cancel(){move=null;}
 function update(time,reducedMotion=false){
  if(!move)return;
  const progress=reducedMotion?1:THREE.MathUtils.smootherstep(time-move.time,0,1.15);
  position.lerpVectors(move.from,destination,progress);
  state.yaw=wrap(move.yaw+wrap(move.targetYaw-move.yaw)*progress);
  state.pitch=THREE.MathUtils.lerp(move.pitch,move.targetPitch,progress);
  state.zoom=THREE.MathUtils.lerp(move.zoom,Math.max(1,move.zoom),progress);
  if(progress===1)cancel();
 }
 return {start,cancel,update,get active(){return move!==null;}};
}
