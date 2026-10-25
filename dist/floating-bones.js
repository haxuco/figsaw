import * as THREE from './vendor/three.module.js';
import { createLongBone, createRib, createSkull, createJaw, createSpine, createRibCage } from './bone-models.js';

// Deliberately different remains in each vessel; every path stays in the liquid.
const layouts=[
 [
  {kind:'skull',x:-.12,y:.85,z:.17,tilt:-.24,yaw:.30,scale:1.18},
  {kind:'femur',x:.14,y:.46,z:.15,tilt:1.1,yaw:-.3,scale:.90}
 ],
 [
  {kind:'ribs',x:.02,y:.82,z:.20,tilt:.30,yaw:-.20,scale:1.08},
  {kind:'spine',x:-.16,y:.44,z:.13,tilt:-.50,yaw:.4,scale:.90},
  {kind:'rib',x:.16,y:.36,z:.17,tilt:.9,yaw:-.4,scale:.72}
 ],
 [
  {kind:'skull',x:.08,y:.86,z:.17,tilt:.51,yaw:-.45,scale:.91},
  {kind:'forearm',x:-.13,y:.58,z:.16,tilt:-.68,yaw:.20,scale:.95},
  {kind:'jaw',x:.09,y:.32,z:.16,tilt:-.18,yaw:.6,scale:1.04}
 ]
];
const makers={skull:createSkull,femur:createLongBone,forearm:()=>createLongBone(true),rib:createRib,ribs:createRibCage,spine:createSpine,jaw:createJaw};
export function createFloatingBones(index){
 const group=new THREE.Group();group.name=`Bones floating in canister ${index+1}`;
 const bones=layouts[index].map((pose,i)=>{
  const object=makers[pose.kind]();object.scale.multiplyScalar(pose.scale);group.add(object);
  return {...pose,object,phase:index*1.91+i*2.3};
 });
 function update(time,reducedMotion=false){
  const t=reducedMotion?0:time;
  for(const bone of bones){
   const phase=bone.phase;
   bone.object.position.set(bone.x+.022*Math.sin(t*.27+phase),bone.y+.014*Math.sin(t*.57+phase),bone.z+.018*Math.cos(t*.23+phase));
   bone.object.rotation.set(.10*Math.sin(t*.19+phase),bone.yaw+.46*Math.sin(t*.17+phase),bone.tilt+.11*Math.sin(t*.31+phase),'YXZ');
  }
 }
 update(0);return {group,update};
}
