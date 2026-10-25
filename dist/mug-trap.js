import * as THREE from './vendor/three.module.js';

const smooth=(value,start,end)=>THREE.MathUtils.smootherstep(value,start,end);

// Lift the actual floor prop by its handle, then bring its pointed ears to eye level.
export function createMugTrap({mug,camera,restraint}){
 const homePosition=mug.position.clone(),homeRotation=mug.quaternion.clone();
 const floorEarPosition=new THREE.Vector3(),floorRotation=new THREE.Quaternion();
 const eyePosition=new THREE.Vector3(),eyeRotation=new THREE.Quaternion();
 const heldPosition=new THREE.Vector3(),drinkPosition=new THREE.Vector3(),worldPosition=new THREE.Vector3(),recoil=new THREE.Vector3();
 const worldRotation=new THREE.Quaternion(),localRotation=new THREE.Quaternion(),parentRotation=new THREE.Quaternion();
 const drinkRotation=new THREE.Quaternion(),halfTurn=new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0,1,0),Math.PI);
 const handleRotation=new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0,0,1),-Math.PI/2);
 const handle=mug.getObjectByName('Mug handle grip'),earTips=['Mug left ear tip','Mug right ear tip'].map(name=>mug.getObjectByName(name));
 const earCenter=new THREE.Vector3(),earPoint=new THREE.Vector3(),earOffset=new THREE.Vector3(),earSpan=new THREE.Vector3(),mugScale=new THREE.Vector3();
 const hand={position:new THREE.Vector3(),quaternion:new THREE.Quaternion(),blend:0,grip:0,reveal:0,gripKind:'handle'};
 let startedAt=null,finished=false,blackout=0,eyeImpact=0,eyeGrowth=0,eyeDrip=0;
 function start(time){
  if(restraint.locked||startedAt!==null||finished||!restraint.requestReach(time))return false;
  mug.updateWorldMatrix(true,false);mug.getWorldQuaternion(floorRotation);
  camera.updateWorldMatrix(true,false);camera.getWorldPosition(eyePosition);camera.getWorldQuaternion(eyeRotation);
  recoil.set(0,-.22,-.12).applyQuaternion(eyeRotation);
  // Aim the actual tips, including the mug body's offset and the ear rotations.
  earCenter.set(0,0,0);earSpan.set(0,0,0);
  earTips.forEach((tip,index)=>{tip.getWorldPosition(earPoint);mug.worldToLocal(earPoint);earCenter.add(earPoint);earSpan.addScaledVector(earPoint,index?1:-1);});
  earCenter.multiplyScalar(.5);mug.getWorldScale(mugScale);
  floorEarPosition.copy(earCenter);mug.localToWorld(floorEarPosition);
  drinkRotation.setFromAxisAngle(new THREE.Vector3(1,0,0),.82);
  localRotation.copy(drinkRotation).multiply(halfTurn);
  earSpan.multiply(mugScale).applyQuaternion(localRotation);
  // Fill the foreground before contact, with each actual ear tip at 20% / 80%
  // of the view. Keep the tips clear of the near plane at all supported FOVs.
  const projection=camera.projectionMatrix.elements,contactDepth=Math.max(camera.near*1.35,Math.abs(earSpan.x)*.5*projection[0]/.60);
  function eyeLine(depth,out){return out.set(0,.08*depth/projection[5],-depth).applyQuaternion(eyeRotation).add(eyePosition);}
  eyeLine(contactDepth+.30,heldPosition);eyeLine(contactDepth,drinkPosition);
  startedAt=time;blackout=eyeImpact=eyeGrowth=eyeDrip=0;hand.blend=hand.grip=hand.reveal=0;return true;
 }
 function update(time,reducedMotion=false){
  if(startedAt===null||finished)return false;
  const elapsed=time-startedAt;
  if(reducedMotion){
   eyeImpact=smooth(elapsed,.15,.20);
   eyeGrowth=.12*smooth(elapsed,.20,.65);
   eyeDrip=0;
   blackout=smooth(elapsed,.65,1.15);
   if(elapsed<1.25)return false;
  }else{
   const lift=smooth(elapsed,.82,2.12),sip=smooth(elapsed,2.28,4.05);
   drinkRotation.setFromAxisAngle(new THREE.Vector3(1,0,0),.82*sip);
   localRotation.copy(eyeRotation).multiply(drinkRotation).multiply(halfTurn);
   worldRotation.slerpQuaternions(floorRotation,localRotation,lift);
   worldPosition.lerpVectors(heldPosition,drinkPosition,sip).lerp(floorEarPosition,1-lift);
   worldPosition.y+=Math.sin(Math.PI*lift)*.08;
   // Derive the cup's origin from the moving ear target on every frame so
   // tipping the mug cannot push the ears back below the viewer's eyes.
   earOffset.copy(earCenter).multiply(mugScale).applyQuaternion(worldRotation);worldPosition.sub(earOffset);
   worldPosition.addScaledVector(recoil,smooth(elapsed,4.40,4.85));
   mug.position.copy(worldPosition);mug.parent.worldToLocal(mug.position);
   mug.parent.getWorldQuaternion(parentRotation);mug.quaternion.copy(parentRotation.invert()).multiply(worldRotation);
   mug.updateWorldMatrix(true,false);
   handle.getWorldPosition(hand.position);
   // Thumb up, fingers stacked vertically around the handle. Counter the cup's
   // half-turn so the wrist still points back toward the viewer's forearm.
   hand.quaternion.copy(worldRotation).multiply(halfTurn).multiply(handleRotation);
   hand.blend=smooth(elapsed,0,.72);hand.grip=smooth(elapsed,.48,.80);hand.reveal=smooth(elapsed,0,.22);
   // Hold the close contact, then let the ragged marks spread and drip before fading.
   eyeImpact=smooth(elapsed,4.05,4.11);
   eyeGrowth=smooth(elapsed,4.11,6.35);
   eyeDrip=smooth(elapsed,4.20,5.65);
   blackout=smooth(elapsed,6.45,7.20);
   if(elapsed<7.30)return false;
  }
  finished=true;blackout=1;restraint.endReach();return true;
 }
 function reset(){
  startedAt=null;finished=false;blackout=eyeImpact=eyeGrowth=eyeDrip=0;mug.position.copy(homePosition);mug.quaternion.copy(homeRotation);mug.updateWorldMatrix(true,false);
  hand.blend=hand.grip=hand.reveal=0;restraint.endReach();
 }
 return {start,update,reset,get active(){return startedAt!==null&&!finished;},get finished(){return finished;},get blackout(){return blackout;},get eyeImpact(){return eyeImpact;},get eyeGrowth(){return eyeGrowth;},get eyeDrip(){return eyeDrip;},get handPose(){return startedAt!==null&&!finished?hand:null;}};
}
