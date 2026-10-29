import * as THREE from './vendor/three.module.js';

export const ESCAPE_DURATION=4.8;
export const EXIT_DOOR_HINGE=[-.53,0,.06];
export const EXIT_DOOR_LEAF_OFFSET=[.53,0,-.06];
const ease=(time,start,end)=>THREE.MathUtils.smootherstep(time,start,end);

// A held latch, a brief crack, then a forceful swing and a small rebound.
// Use elapsed time so the mobile frame rate cannot slow the ending down.
export function escapeDoorAngle(age,reducedMotion=false){
 // Positive rotation opens into the hallway, clear of the waiting chair train.
 if(reducedMotion)return 1.84;
 if(age<1.05)return 0;
 if(age<1.45)return .10*ease(age,1.05,1.45);
 if(age<2.25){const u=THREE.MathUtils.clamp((age-1.45)/.80,0,1);return THREE.MathUtils.lerp(.10,1.98,1-(1-u)**3);}
 if(age<2.80)return THREE.MathUtils.lerp(1.98,1.76,ease(age,2.25,2.80));
 return THREE.MathUtils.lerp(1.76,1.84,ease(age,2.80,3.35));
}

export function createExitDoorMotion({object,frame,light,scenery=null}){
 let started=null,parade=false;
 const lightHome=light?.position.clone(),lightRange=light?.distance;
 if(scenery)scenery.visible=false;
 return {object,scenery,
  unlock(time=0,{restart=false}={}){if(started===null||restart)started=time;},
  reset(){started=null;parade=false;object.rotation.y=0;if(light){light.intensity=0;light.position.copy(lightHome);light.distance=lightRange;}if(scenery)scenery.visible=false;},
  lightParade(){parade=true;if(light){light.position.set(-.85,2.35,-4.45);light.distance=7;}},
  update(time,reducedMotion=false){
   const angle=started===null?0:escapeDoorAngle(Math.max(0,time-started),reducedMotion);
   object.rotation.y=angle;if(light)light.intensity=parade?7:Math.min(2.4,Math.abs(angle)*1.5);
   if(scenery)scenery.visible=angle>0;
  },
  getEscapeView(eye,target){frame.updateWorldMatrix(true,false);frame.localToWorld(eye.set(0,1.05,2.25));frame.localToWorld(target.set(0,1.28,0));},
  getParadeView(eye,target){frame.updateWorldMatrix(true,false);frame.localToWorld(eye.set(-1.35,1.55,-4.62));frame.localToWorld(target.set(0,.97,-1.70));}
 };
}

export function createEscapeCinematic({camera,position,state,door,baseFov}){
 let active=false;
 const destination=new THREE.Vector3(),target=new THREE.Vector3(),direction=new THREE.Vector3();
 function start(time){
  // Begin outside with the doorway clear; do not replay the interior opening.
  active=true;door.unlock(time-ESCAPE_DURATION,{restart:true});door.lightParade?.();door.update(time);
  update();
 }
 function update(){
  if(!active)return false;
  // Keep the saved Figpals' faces and seats visible as they roll outside.
  door.getParadeView(destination,target);
  if(camera.aspect<.8){const extra=(.8-camera.aspect)*2.2;destination.z+=extra;destination.x-=extra*.15;}
  position.copy(destination);camera.position.copy(position);camera.lookAt(target);
  direction.subVectors(target,position).normalize();state.yaw=Math.atan2(-direction.x,-direction.z);state.pitch=Math.asin(direction.y);state.zoom=.90;
  camera.fov=baseFov*state.zoom;camera.updateProjectionMatrix();
  return true;
 }
 return {start,update,reset(){active=false;},get active(){return active;}};
}
