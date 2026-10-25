import * as THREE from './vendor/three.module.js';

export const SPEAKING_VIEW={position:[1.85221,.821615,3.1149],lookAt:[1.155084,.748275,2.401713],fov:48.36};
const shortestAngle=angle=>THREE.MathUtils.euclideanModulo(angle+Math.PI,Math.PI*2)-Math.PI;

// Start once on arrival, then retain the exact requested view until the user moves.
export function createArrivalCameraMove(baseFov){
 const destination=new THREE.Vector3(...SPEAKING_VIEW.position);
 const direction=new THREE.Vector3(...SPEAKING_VIEW.lookAt).sub(destination).normalize();
 const target={yaw:Math.atan2(-direction.x,-direction.z),pitch:Math.asin(direction.y),zoom:SPEAKING_VIEW.fov/baseFov};
 let move=null;
 return {
  start(time,position,state){move={time,position:position.clone(),yaw:state.yaw,pitch:state.pitch,zoom:state.zoom};},
  cancel(){move=null;},
  get active(){return move!==null;},
  update(time,position,state,reducedMotion=false){
   if(!move)return;
   const progress=reducedMotion?1:THREE.MathUtils.clamp((time-move.time)/1.4,0,1);
   const ease=progress*progress*(3-2*progress);
   position.lerpVectors(move.position,destination,ease);
   state.yaw=move.yaw+shortestAngle(target.yaw-move.yaw)*ease;
   state.pitch=THREE.MathUtils.lerp(move.pitch,target.pitch,ease);
   state.zoom=THREE.MathUtils.lerp(move.zoom,target.zoom,ease);
   if(progress===1){position.copy(destination);Object.assign(state,target);move=null;}
  }
 };
}
