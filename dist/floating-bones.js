import * as THREE from './vendor/three.module.js';
import { createLongBone, createRib, createJaw, createSpine, createRibCage } from './bone-models.js?v=figpal-identity';

// Deliberately different remains in each vessel; every path stays in the liquid.
const layouts=[
 [
  {kind:'femur',x:.14,y:.46,z:.15,tilt:1.1,yaw:-.3,scale:.90}
 ],
 [
  {kind:'ribs',x:.02,y:.40,z:.10,tilt:.30,yaw:-.20,scale:.78},
  {kind:'spine',x:-.16,y:.40,z:-.08,tilt:-.50,yaw:.4,scale:.75},
  {kind:'rib',x:.16,y:.34,z:.17,tilt:.9,yaw:-.4,scale:.64}
 ],
 [
  {kind:'forearm',x:-.13,y:.42,z:.16,tilt:-.68,yaw:.20,scale:.88},
  {kind:'jaw',x:.09,y:.32,z:.16,tilt:-.18,yaw:.6,scale:1.04}
 ]
];
const makers={femur:createLongBone,forearm:()=>createLongBone(true),rib:createRib,ribs:createRibCage,spine:createSpine,jaw:createJaw};
export function createFloatingBones(index){
 const group=new THREE.Group();group.name=`Bones floating in canister ${index+1}`;
 const bones=layouts[index].map((pose,i)=>{
  const object=makers[pose.kind]();object.scale.multiplyScalar(pose.scale);group.add(object);
  return {...pose,object,phase:index*1.91+i*2.3};
 });
 function update(time,reducedMotion=false,remaining=1){
  const t=reducedMotion?0:time;
  for(const bone of bones){
   const phase=bone.phase;
   const drift=.022*remaining,turn=.46*remaining;
   bone.object.position.set(bone.x+drift*Math.sin(t*.27+phase),.29+(bone.y-.29)*remaining+.014*remaining*Math.sin(t*.57+phase),bone.z+.018*Math.cos(t*.23+phase));
   bone.object.rotation.set(.10*Math.sin(t*.19+phase),bone.yaw+turn*Math.sin(t*.17+phase),bone.tilt+(Math.PI/2-bone.tilt)*(1-remaining)+.11*remaining*Math.sin(t*.31+phase),'YXZ');
  }
 }
 update(0);return {group,update};
}
