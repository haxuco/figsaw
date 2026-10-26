import * as THREE from './vendor/three.module.js';

const wrap=angle=>THREE.MathUtils.euclideanModulo(angle+Math.PI,Math.PI*2)-Math.PI;

// Leave a reading pause after the final speech cue, turn away, and retrace the
// entrance route. Rolling distance keeps increasing so he rides forward home.
export function createFigsawDeparture(path,modelScale){
 const length=path.getLength(),tangent=new THREE.Vector3();
 let departAt=null,startYaw=null,startHeadYaw=0;
 function schedule(speechEnd){if(departAt!==null)return;departAt=speechEnd+3;}
 function reset(){departAt=null;startYaw=null;startHeadYaw=0;}
 function update(time,model,head,reducedMotion=false){
  if(departAt===null||time<departAt)return null;
  if(startYaw===null){startYaw=model.rotation.y;startHeadYaw=head.rotation.y;}
  const elapsed=time-departAt;
  const turn=reducedMotion?1:THREE.MathUtils.smootherstep(elapsed,0,1.2);
  const progress=reducedMotion?1:THREE.MathUtils.smootherstep(elapsed-1.2,0,8.5);
  path.getPointAt(1-progress,model.position);path.getTangentAt(1-progress,tangent);
  const yaw=Math.atan2(-tangent.x,-tangent.z);
  model.rotation.y=startYaw+wrap(yaw-startYaw)*turn;
  head.rotation.y=startHeadYaw*(1-turn);
  return (length+progress*length)/modelScale;
 }
 return {schedule,reset,update,get active(){return startYaw!==null;}};
}
