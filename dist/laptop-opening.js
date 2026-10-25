import * as THREE from './vendor/three.module.js';

const smooth=(value,start,end)=>THREE.MathUtils.smootherstep(value,start,end);
const wrap=angle=>THREE.MathUtils.euclideanModulo(angle+Math.PI,Math.PI*2)-Math.PI;

// One timeline owns the approach, grip, hinge movement, release, and withdrawal.
export function createLaptopOpening({laptop,restraint,cameraPosition,state}){
 let startedAt=null;
 const startPosition=new THREE.Vector3(),leanPosition=new THREE.Vector3(),lookAt=new THREE.Vector3(),direction=new THREE.Vector3();
 const rotation=new THREE.Quaternion(),wristRotation=new THREE.Quaternion(),wristEuler=new THREE.Euler();
 let startYaw=0,startPitch=0,leanYaw=0,leanPitch=0;
 const hand={position:new THREE.Vector3(),quaternion:new THREE.Quaternion(),blend:0,grip:0,reveal:0};
 function start(time){
  if(startedAt!==null||restraint.locked||laptop.isOpen||!restraint.requestReach(time))return false;
  startedAt=time;startPosition.copy(cameraPosition);startYaw=state.yaw;startPitch=state.pitch;
  laptop.object.updateWorldMatrix(true,false);
  laptop.object.localToWorld(leanPosition.set(.16,.87,1.12));
  laptop.object.localToWorld(lookAt.set(0,.46,0));direction.copy(lookAt).sub(leanPosition).normalize();
  leanYaw=Math.atan2(-direction.x,-direction.z);leanPitch=Math.asin(direction.y);
  hand.blend=hand.grip=hand.reveal=0;
  return true;
 }
 function update(time,reducedMotion=false){
  if(startedAt===null)return false;
  const elapsed=time-startedAt;
  if(reducedMotion){laptop.setOpenProgress(1);restraint.endReach();startedAt=null;return true;}
  const lean=smooth(elapsed,0,.70)*(1-smooth(elapsed,2.70,3.40));
  cameraPosition.lerpVectors(startPosition,leanPosition,lean);
  state.yaw=wrap(startYaw+wrap(leanYaw-startYaw)*lean);state.pitch=THREE.MathUtils.lerp(startPitch,leanPitch,lean);
  const lift=smooth(elapsed,.96,2.21);laptop.setOpenProgress(lift);
  laptop.getLidGrip(hand.position);laptop.object.getWorldQuaternion(rotation);
  // The wrist rolls while the hooked fingertips stay on the moving front lip.
  wristRotation.setFromEuler(wristEuler.set(-.10-.28*lift,0,-.10));hand.quaternion.copy(rotation).multiply(wristRotation);
  hand.blend=smooth(elapsed,0,.80)*(1-smooth(elapsed,2.38,3.02));
  hand.grip=smooth(elapsed,.70,.92)*(1-smooth(elapsed,2.21,2.38));
  hand.reveal=smooth(elapsed,0,.18)*(1-smooth(elapsed,2.64,3.12));
  if(elapsed<3.40)return false;
  cameraPosition.copy(startPosition);state.yaw=startYaw;state.pitch=startPitch;
  restraint.endReach();startedAt=null;return true;
 }
 function cancel(){
  if(startedAt===null)return;
  cameraPosition.copy(startPosition);state.yaw=startYaw;state.pitch=startPitch;
  restraint.endReach();startedAt=null;
 }
 return {start,update,cancel,get active(){return startedAt!==null;},get handPose(){return startedAt===null?null:hand;}};
}
