import * as THREE from './vendor/three.module.js';

const wrap=angle=>THREE.MathUtils.euclideanModulo(angle+Math.PI,Math.PI*2)-Math.PI;

// A short tank close-up follows the descending captive, then restores the exact
// player's pose. This owns the camera only during the timed sacrifice.
export function createFigpalCamera({position,state,getView,baseFov,focusFov=50}){
 let saved=null,from=null,index=null,startedAt=0,returning=false;
 const eye=new THREE.Vector3(),target=new THREE.Vector3(),direction=new THREE.Vector3();
 const capture=()=>({position:position.clone(),yaw:state.yaw,pitch:state.pitch,zoom:state.zoom});
 function start(nextIndex,time){saved=capture();from=saved;index=nextIndex;startedAt=time;returning=false;}
 function restore(time){if(!saved)return;from=capture();startedAt=time;returning=true;}
 function cancel(){saved=from=null;index=null;returning=false;}
 function update(time,reducedMotion=false){
  if(!saved)return;
  const progress=reducedMotion?1:THREE.MathUtils.smootherstep(time-startedAt,0,returning?1:1.15);
  let destination=saved;
  if(!returning){
   getView(index,eye,target);direction.subVectors(target,eye).normalize();
   destination={position:eye,yaw:Math.atan2(-direction.x,-direction.z),pitch:Math.asin(direction.y),zoom:focusFov/baseFov};
  }
  position.lerpVectors(from.position,destination.position,progress);
  state.yaw=wrap(from.yaw+wrap(destination.yaw-from.yaw)*progress);
  state.pitch=THREE.MathUtils.lerp(from.pitch,destination.pitch,progress);
  state.zoom=THREE.MathUtils.lerp(from.zoom,destination.zoom,progress);
  if(returning&&progress===1)cancel();
 }
 return {start,restore,cancel,update,get active(){return saved!==null;}};
}
