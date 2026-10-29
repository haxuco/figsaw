import * as THREE from './vendor/three.module.js';

// Animate the original rescued characters, still parented to their real chairs.
// Never clone a captive or bring back somebody who was dissolved.
export function createVictoryParade({rigs}){
 let started=null,arrived=null,passengers=[];
 const eye=new THREE.Vector3(),position=new THREE.Vector3(),worldTurn=new THREE.Quaternion(),parentTurn=new THREE.Quaternion(),up=new THREE.Vector3(0,1,0),lean=new THREE.Quaternion(),forward=new THREE.Vector3(0,0,1);
 function reset(){
  for(const p of passengers){p.rig.captive.position.copy(p.position);p.rig.captive.quaternion.copy(p.rotation);p.rig.captive.scale.copy(p.scale);p.rig.nameTag.visible=p.tagVisible;if(p.rig.sling)p.rig.sling.visible=p.slingVisible;
   if(p.faces){p.faces.worried.visible=p.worried;p.faces.happy.visible=p.happy;}
   p.rig.transformation.update();
  }
  passengers=[];started=arrived=null;
 }
 function start(time){
  reset();started=time;
  passengers=rigs.filter(r=>r.rescued&&!r.transformation.damaged).map(rig=>{
   const object=rig.captive,faces=object.expressions,p={rig,position:object.position.clone(),rotation:object.quaternion.clone(),scale:object.scale.clone(),tagVisible:rig.nameTag.visible,slingVisible:rig.sling?.visible,faces,worried:faces?.worried.visible,happy:faces?.happy.visible};
   if(faces){faces.worried.visible=false;faces.happy.visible=true;}rig.nameTag.visible=false;if(rig.sling)rig.sling.visible=false;return p;
  });
 }
 function update(time,cameraPosition,reducedMotion=false){
  if(started===null)return;
  const age=Math.max(0,time-started),ramp=THREE.MathUtils.smootherstep(age,.4,1.2);
  for(const [i,p]of passengers.entries()){
   const object=p.rig.captive,phase=age*(i?7.5:8.1)+i*1.65;
   const hop=reducedMotion?0:Math.max(0,Math.sin(phase))*ramp,stretch=reducedMotion?0:Math.sin(phase*2)*.055*ramp;
   object.scale.set(p.scale.x*(1-stretch*.5),p.scale.y*(1+stretch),p.scale.z*(1-stretch*.5));
   object.position.copy(p.position);object.position.y+=hop*.17+Math.max(0,stretch)*.21;
   object.getWorldPosition(position);eye.copy(cameraPosition).sub(position);eye.y=0;
   worldTurn.setFromAxisAngle(up,Math.atan2(eye.x,eye.z));object.parent.getWorldQuaternion(parentTurn).invert();object.quaternion.multiplyQuaternions(parentTurn,worldTurn);
   if(!reducedMotion){lean.setFromAxisAngle(forward,Math.sin(phase*.5)*.07*ramp);object.quaternion.multiply(lean);}
   // These clipping planes are world-space. They must follow every chair move
   // and bounce, even though the normal gameplay update has stopped after a win.
   p.rig.transformation.update();
  }
 }
 function readyForResults(time,chairsFinished,reducedMotion=false){
  if(!chairsFinished){arrived=null;return false;}
  if(arrived===null)arrived=time;
  return time-arrived>=(reducedMotion?.6:1.8);
 }
 return {start,update,reset,readyForResults,get count(){return passengers.length;}};
}
