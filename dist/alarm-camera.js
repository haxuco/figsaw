import * as THREE from './vendor/three.module.js';
const wrap=a=>THREE.MathUtils.euclideanModulo(a+Math.PI,Math.PI*2)-Math.PI;

export function createAlarmCamera({position,state}){
 let move=null;
 function start(time,target){
  const destination=position.clone();destination.y=Math.max(position.y,1.2);
  const direction=new THREE.Vector3(target.x,.12,target.z).sub(destination).normalize();
  move={time,from:position.clone(),destination,yaw:state.yaw,pitch:state.pitch,zoom:state.zoom,
   toYaw:Math.atan2(-direction.x,-direction.z),toPitch:Math.asin(direction.y)};
 }
 function cancel(){move=null;}
 function update(time,reducedMotion=false){
  if(!move)return;
  const progress=reducedMotion?1:THREE.MathUtils.smootherstep(time-move.time,.5,1.55);
  position.lerpVectors(move.from,move.destination,progress);
  state.yaw=wrap(move.yaw+wrap(move.toYaw-move.yaw)*progress);
  state.pitch=THREE.MathUtils.lerp(move.pitch,move.toPitch,progress);
  state.zoom=THREE.MathUtils.lerp(move.zoom,1,progress);
  if(progress===1)cancel();
 }
 return {start,cancel,update,get active(){return move!==null;}};
}
