import * as THREE from './vendor/three.module.js';

const smooth=(value,start,end)=>THREE.MathUtils.smootherstep(value,start,end);

// Lift the actual floor prop by its handle, then bring its pointed ears to eye level.
export function createMugTrap({mug,camera,restraint}){
 const homePosition=mug.position.clone(),homeRotation=mug.quaternion.clone();
 const floorPosition=new THREE.Vector3(),floorRotation=new THREE.Quaternion();
 const eyePosition=new THREE.Vector3(),eyeRotation=new THREE.Quaternion();
 const heldPosition=new THREE.Vector3(),drinkPosition=new THREE.Vector3(),worldPosition=new THREE.Vector3();
 const worldRotation=new THREE.Quaternion(),localRotation=new THREE.Quaternion(),parentRotation=new THREE.Quaternion();
 const drinkRotation=new THREE.Quaternion(),halfTurn=new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0,1,0),Math.PI);
 const handleRotation=new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0,0,1),-Math.PI/2);
 const handle=mug.getObjectByName('Mug handle grip'),earTips=['Mug left ear tip','Mug right ear tip'].map(name=>mug.getObjectByName(name));
 const earCenter=new THREE.Vector3(),earPoint=new THREE.Vector3(),mugScale=new THREE.Vector3();
 const hand={position:new THREE.Vector3(),quaternion:new THREE.Quaternion(),blend:0,grip:0,reveal:0,gripKind:'handle'};
 let startedAt=null,finished=false,blackout=0;
 function start(time){
  if(restraint.locked||startedAt!==null||finished||!restraint.requestReach(time))return false;
  mug.updateWorldMatrix(true,false);mug.getWorldPosition(floorPosition);mug.getWorldQuaternion(floorRotation);
  camera.updateWorldMatrix(true,false);camera.getWorldPosition(eyePosition);camera.getWorldQuaternion(eyeRotation);
  heldPosition.set(.03,-.25,-.52).applyQuaternion(eyeRotation).add(eyePosition);
  // Turn the cat face away, putting the ears on the far rim as in a real sip.
  // Land the actual ear tips at eye level rather than guessing the mug center.
  earCenter.set(0,0,0);
  for(const tip of earTips){tip.getWorldPosition(earPoint);mug.worldToLocal(earPoint);earCenter.add(earPoint);}
  earCenter.multiplyScalar(.5);mug.getWorldScale(mugScale);
  drinkRotation.setFromAxisAngle(new THREE.Vector3(1,0,0),.82);
  localRotation.copy(eyeRotation).multiply(drinkRotation).multiply(halfTurn);
  drinkPosition.set(0,0,-.055).applyQuaternion(eyeRotation).add(eyePosition)
   .sub(earCenter.multiply(mugScale).applyQuaternion(localRotation));
  startedAt=time;blackout=0;hand.blend=hand.grip=hand.reveal=0;return true;
 }
 function update(time,reducedMotion=false){
  if(startedAt===null||finished)return false;
  const elapsed=time-startedAt;
  if(reducedMotion){
   blackout=smooth(elapsed,.15,.45);
   if(elapsed<.60)return false;
  }else{
   const lift=smooth(elapsed,.82,2.12),sip=smooth(elapsed,2.28,3.36);
   worldPosition.lerpVectors(floorPosition,heldPosition,lift);
   worldPosition.y+=Math.sin(Math.PI*lift)*.13;
   worldPosition.lerp(drinkPosition,sip);
   drinkRotation.setFromAxisAngle(new THREE.Vector3(1,0,0),.82*sip);
   localRotation.copy(eyeRotation).multiply(drinkRotation).multiply(halfTurn);
   worldRotation.slerpQuaternions(floorRotation,localRotation,lift);
   mug.position.copy(worldPosition);mug.parent.worldToLocal(mug.position);
   mug.parent.getWorldQuaternion(parentRotation);mug.quaternion.copy(parentRotation.invert()).multiply(worldRotation);
   mug.updateWorldMatrix(true,false);
   handle.getWorldPosition(hand.position);
   // Thumb up, fingers stacked vertically around the handle. Counter the cup's
   // half-turn so the wrist still points back toward the viewer's forearm.
   hand.quaternion.copy(worldRotation).multiply(halfTurn).multiply(handleRotation);
   hand.blend=smooth(elapsed,0,.72);hand.grip=smooth(elapsed,.48,.80);hand.reveal=smooth(elapsed,0,.22);
   blackout=smooth(elapsed,3.16,3.36);
   if(elapsed<3.72)return false;
  }
  finished=true;blackout=1;restraint.endReach();return true;
 }
 function reset(){
  startedAt=null;finished=false;blackout=0;mug.position.copy(homePosition);mug.quaternion.copy(homeRotation);mug.updateWorldMatrix(true,false);
  hand.blend=hand.grip=hand.reveal=0;restraint.endReach();
 }
 return {start,update,reset,get active(){return startedAt!==null&&!finished;},get finished(){return finished;},get blackout(){return blackout;},get handPose(){return startedAt!==null&&!finished?hand:null;}};
}
