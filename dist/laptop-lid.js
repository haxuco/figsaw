import * as THREE from './vendor/three.module.js';

export function createLaptopLid({object,screen,lid,displayMaterial,screenSpill}){
 const screenColor=displayMaterial.color.clone();
 let opened=false,progress=0,manualOpening=false,waterDamage=0,batteryPowered=true;
 function apply(value){
  lid.rotation.x=THREE.MathUtils.lerp(Math.PI/2,-.20,value);
  const wake=THREE.MathUtils.smoothstep(value,.22,.72)*(1-waterDamage)*Number(batteryPowered);
  displayMaterial.color.copy(screenColor).multiplyScalar(wake);screenSpill.intensity=.60*wake;
 }
 apply(0);
 return {
  object,screen,
  setPower(powered){if(batteryPowered===powered)return;batteryPowered=powered;apply(progress);},
  get isPowered(){return batteryPowered&&waterDamage<1;},
  damageWater(amount){waterDamage=THREE.MathUtils.clamp(amount,0,1);apply(progress);},
  get isReady(){return opened&&progress===1;},get isOpen(){return opened;},get openProgress(){return progress;},
  get isMoving(){return !manualOpening&&progress!==(opened?1:0);},
  getLidGrip(out){lid.updateWorldMatrix(true,false);return lid.localToWorld(out.set(.12,.600,-.004));},
  setOpenProgress(value){manualOpening=true;progress=THREE.MathUtils.clamp(value,0,1);opened=progress>0;apply(progress);},
  open(){if(opened)return false;manualOpening=false;opened=true;return true;},
  close(instant=true){manualOpening=false;opened=false;if(instant){progress=0;apply(0);}},
  update(dt,instant=false){
   if(manualOpening||progress===(opened?1:0))return;
   progress=instant?(opened?1:0):THREE.MathUtils.clamp(progress+(opened?1:-1)*Math.max(0,dt)/(opened?.95:.65),0,1);
   apply(THREE.MathUtils.smootherstep(progress,0,1));
  }
 };
}
