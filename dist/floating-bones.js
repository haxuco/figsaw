import * as THREE from './vendor/three.module.js';
import { createLongBone, createRib, createFigpalSkull, createJaw, createSpine, createRibCage } from './bone-models.js?v=figpal-identity';

// Deliberately different remains in each vessel; every path stays in the liquid.
const layouts=[
 [
  {kind:'pudding-skull',x:0,y:.67,z:.20,tilt:-.10,yaw:.08,scale:.40,framed:true},
  {kind:'femur',x:.14,y:.46,z:.15,tilt:1.1,yaw:-.3,scale:.90}
 ],
 [
  {kind:'sushi-skull',x:0,y:.67,z:.20,tilt:.08,yaw:-.08,scale:.40,framed:true},
  {kind:'ribs',x:.02,y:.40,z:.10,tilt:.30,yaw:-.20,scale:.78},
  {kind:'spine',x:-.16,y:.40,z:-.08,tilt:-.50,yaw:.4,scale:.75},
  {kind:'rib',x:.16,y:.34,z:.17,tilt:.9,yaw:-.4,scale:.64}
 ],
 [
  {kind:'sushi-skull',x:0,y:.67,z:.20,tilt:-.13,yaw:.13,scale:.38,framed:true},
  {kind:'forearm',x:-.13,y:.42,z:.16,tilt:-.68,yaw:.20,scale:.88},
  {kind:'jaw',x:.09,y:.32,z:.16,tilt:-.18,yaw:.6,scale:1.04}
 ]
];
const makers={'pudding-skull':()=>createFigpalSkull(0),'sushi-skull':()=>createFigpalSkull(1),femur:createLongBone,forearm:()=>createLongBone(true),rib:createRib,ribs:createRibCage,spine:createSpine,jaw:createJaw};
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
   // Keep the skull portraits within the clear center of the fixed glass decals.
   const drift=bone.framed?.012:.022,turn=bone.framed?.13:.46;
   bone.object.position.set(bone.x+drift*Math.sin(t*.27+phase),bone.y+.014*Math.sin(t*.57+phase),bone.z+.018*Math.cos(t*.23+phase));
   bone.object.rotation.set(.10*Math.sin(t*.19+phase),bone.yaw+turn*Math.sin(t*.17+phase),bone.tilt+(bone.framed?.06:.11)*Math.sin(t*.31+phase),'YXZ');
  }
 }
 update(0);return {group,update};
}
