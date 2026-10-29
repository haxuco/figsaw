import * as THREE from './vendor/three.module.js';

export const ESCAPE_DURATION=4.8;
const wrap=angle=>THREE.MathUtils.euclideanModulo(angle+Math.PI,Math.PI*2)-Math.PI;
const ease=(time,start,end)=>THREE.MathUtils.smootherstep(time,start,end);

// A held latch, a brief crack, then a forceful swing and a small rebound.
// Use elapsed time so the mobile frame rate cannot slow the ending down.
export function escapeDoorAngle(age,reducedMotion=false){
 if(reducedMotion)return -1.84;
 if(age<1.05)return 0;
 if(age<1.45)return -.10*ease(age,1.05,1.45);
 if(age<2.25){const u=THREE.MathUtils.clamp((age-1.45)/.80,0,1);return THREE.MathUtils.lerp(-.10,-1.98,1-(1-u)**3);}
 if(age<2.80)return THREE.MathUtils.lerp(-1.98,-1.76,ease(age,2.25,2.80));
 return THREE.MathUtils.lerp(-1.76,-1.84,ease(age,2.80,3.35));
}

export function createExitDoorMotion({object,frame,light}){
 let started=null;
 return {object,
  unlock(time=0){if(started===null)started=time;},
  reset(){started=null;object.rotation.y=0;if(light)light.intensity=0;},
  update(time,reducedMotion=false){
   const angle=started===null?0:escapeDoorAngle(Math.max(0,time-started),reducedMotion);
   object.rotation.y=angle;if(light)light.intensity=Math.min(2.4,Math.abs(angle)*1.5);
  },
  getEscapeView(eye,target){frame.updateWorldMatrix(true,false);frame.localToWorld(eye.set(0,1.05,2.25));frame.localToWorld(target.set(0,1.28,0));}
 };
}

export function createEscapeCinematic({camera,position,state,door,baseFov}){
 let shot=null;
 const destination=new THREE.Vector3(),target=new THREE.Vector3(),away=new THREE.Vector3(),direction=new THREE.Vector3();
 function start(time){
  door.getEscapeView(destination,target);away.subVectors(destination,target).setY(0).normalize();
  shot={time,from:position.clone(),yaw:state.yaw,pitch:state.pitch,zoom:state.zoom};
  door.unlock(time);
 }
 function update(time,reducedMotion=false){
  if(!shot)return false;
  const age=Math.max(0,time-shot.time),progress=reducedMotion?1:ease(age,0,1.15),lean=reducedMotion?1:ease(age,.35,1.65);
  door.getEscapeView(destination,target);
  // Pull farther back on narrow screens so the full frame and swinging leaf fit.
  const eyeHeight=destination.y,distance=Math.max(2.25,1.05/(Math.tan(THREE.MathUtils.degToRad(baseFov*1.04)/2)*Math.max(.35,camera.aspect)));
  destination.copy(target).addScaledVector(away,distance+.45*lean);destination.y=eyeHeight+.14*lean;
  position.lerpVectors(shot.from,destination,progress);
  target.y+=.15*lean;direction.subVectors(target,position).normalize();
  state.yaw=shot.yaw+wrap(Math.atan2(-direction.x,-direction.z)-shot.yaw)*progress;
  state.pitch=THREE.MathUtils.lerp(shot.pitch,Math.asin(direction.y),progress);
  state.zoom=THREE.MathUtils.lerp(shot.zoom,1.04,progress);
  camera.position.copy(position);
  direction.set(-Math.sin(state.yaw)*Math.cos(state.pitch),Math.sin(state.pitch),-Math.cos(state.yaw)*Math.cos(state.pitch));
  camera.lookAt(target.copy(position).add(direction));
  if(!reducedMotion)camera.rotateZ(-.045*lean*(1-.65*ease(age,2.25,3.6)));
  camera.fov=baseFov*state.zoom;camera.updateProjectionMatrix();
  return age>=(reducedMotion?.85:ESCAPE_DURATION);
 }
 return {start,update,reset(){shot=null;},get active(){return shot!==null;}};
}
