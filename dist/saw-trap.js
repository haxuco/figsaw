import * as THREE from './vendor/three.module.js';

// Reuse the floor prop and chained arm. The consequence cuts to black; no wound
// geometry or extra arm is needed, and unlocked pickups stay invisible.
export function createSawTrap({saw,camera,restraint,hasKey}){
 const homePosition=saw.position.clone(),homeRotation=saw.quaternion.clone();
 const floorPosition=new THREE.Vector3(),floorRotation=new THREE.Quaternion();
 const contact=new THREE.Vector3(),target=new THREE.Vector3(),offset=new THREE.Vector3();
 const worldRotation=new THREE.Quaternion(),targetRotation=new THREE.Quaternion(),parentRotation=new THREE.Quaternion();
 const upright=new THREE.Quaternion().setFromEuler(new THREE.Euler(Math.PI/2,Math.PI,.16,'ZYX'));
 const cameraRight=new THREE.Vector3();
 let startedAt=null,finished=false,blackout=0;
 function start(time){
  if(hasKey()||!restraint.locked||startedAt!==null)return false;
  saw.getWorldPosition(floorPosition);saw.getWorldQuaternion(floorRotation);
  restraint.requestReach(time);startedAt=time;return true;
 }
 function update(time,reducedMotion=false){
  if(startedAt===null||finished)return false;
  const elapsed=time-startedAt;
  if(!reducedMotion){
   const lift=THREE.MathUtils.smootherstep(elapsed,0,1.25);
   const stroke=elapsed<1.4?0:Math.sin((elapsed-1.4)*Math.PI*6)*.085*THREE.MathUtils.smoothstep(elapsed,1.4,1.7);
   restraint.getSawContact(contact);
   targetRotation.copy(camera.quaternion).multiply(upright);
   // The saw's child lies flat on the floor. Rotate it upright, then place a
   // point on the toothed edge at the wrist, with the grip on the left.
   offset.set(-.06,0,.070).applyQuaternion(targetRotation);
   target.copy(contact).sub(offset);
   cameraRight.set(1,0,0).applyQuaternion(camera.quaternion);
   target.addScaledVector(cameraRight,stroke);
   saw.position.lerpVectors(floorPosition,target,lift);
   saw.parent.worldToLocal(saw.position);
   worldRotation.slerpQuaternions(floorRotation,targetRotation,lift);
   saw.parent.getWorldQuaternion(parentRotation);
   saw.quaternion.copy(parentRotation.invert()).multiply(worldRotation);
   blackout=THREE.MathUtils.smootherstep(elapsed,2.75,3.55);
  }else blackout=THREE.MathUtils.smootherstep(elapsed,.55,1.1);
  if(elapsed<(reducedMotion?1.2:3.65))return false;
  finished=true;blackout=1;restraint.endReach();return true;
 }
 function reset(){startedAt=null;finished=false;blackout=0;saw.position.copy(homePosition);saw.quaternion.copy(homeRotation);restraint.endReach();}
 return {start,update,reset,armLift:(time,reducedMotion=false)=>startedAt===null||reducedMotion?0:THREE.MathUtils.smootherstep(time-startedAt,.24,.95),get active(){return startedAt!==null&&!finished;},get finished(){return finished;},get blackout(){return blackout;}};
}
