import * as THREE from './vendor/three.module.js';

function emptyBatteryIndicator(){
 const group=new THREE.Group();group.name='Empty MacBook battery indicator';group.position.set(0,.012,.002);
 const outline=new THREE.Shape();outline.moveTo(-.084,-.035);outline.lineTo(.072,-.035);outline.quadraticCurveTo(.081,-.035,.081,-.026);outline.lineTo(.081,.026);outline.quadraticCurveTo(.081,.035,.072,.035);outline.lineTo(-.084,.035);outline.quadraticCurveTo(-.093,.035,-.093,.026);outline.lineTo(-.093,-.026);outline.quadraticCurveTo(-.093,-.035,-.084,-.035);
 const hole=new THREE.Path();hole.moveTo(-.083,-.030);hole.lineTo(.071,-.030);hole.quadraticCurveTo(.076,-.030,.076,-.025);hole.lineTo(.076,.025);hole.quadraticCurveTo(.076,.030,.071,.030);hole.lineTo(-.083,.030);hole.quadraticCurveTo(-.088,.030,-.088,.025);hole.lineTo(-.088,-.025);hole.quadraticCurveTo(-.088,-.030,-.083,-.030);outline.holes.push(hole);
 const cap=new THREE.Shape();cap.moveTo(.085,-.013);cap.lineTo(.091,-.013);cap.quadraticCurveTo(.096,-.013,.096,-.008);cap.lineTo(.096,.008);cap.quadraticCurveTo(.096,.013,.091,.013);cap.lineTo(.085,.013);cap.closePath();
 const bolt=new THREE.Shape();bolt.moveTo(.004,-.057);bolt.lineTo(-.014,-.079);bolt.lineTo(-.003,-.079);bolt.lineTo(-.010,-.098);bolt.lineTo(.014,-.071);bolt.lineTo(.002,-.071);bolt.closePath();
 const frame=new THREE.Mesh(new THREE.ShapeGeometry([outline,cap,bolt],8),new THREE.MeshBasicMaterial({color:0xb7b9ba,toneMapped:false,fog:false}));
 const low=new THREE.Mesh(new THREE.PlaneGeometry(.011,.046),new THREE.MeshBasicMaterial({color:0xda493b,toneMapped:false,fog:false}));low.position.set(-.076,0,.0001);
 for(const part of[frame,low]){part.raycast=()=>{};group.add(part);}return group;
}

export function createLaptopLid({object,screen,lid,displayMaterial,screenSpill}){
 const screenColor=displayMaterial.color.clone();
 const emptyBattery=emptyBatteryIndicator();screen.add(emptyBattery);
 let opened=false,progress=0,manualOpening=false,waterDamage=0,batteryPowered=true;
 function apply(value){
  lid.rotation.x=THREE.MathUtils.lerp(Math.PI/2,-.20,value);
  const wake=THREE.MathUtils.smoothstep(value,.22,.72)*(1-waterDamage)*Number(batteryPowered);
  displayMaterial.color.copy(screenColor).multiplyScalar(wake);screenSpill.intensity=.60*wake;
  emptyBattery.visible=!batteryPowered&&waterDamage<1&&value>.35;
 }
 apply(0);
 return {
  object,screen,
  capture(){return {opened,progress,manualOpening,waterDamage,batteryPowered};},
  restore(value){({opened,progress,manualOpening,waterDamage,batteryPowered}=value);apply(progress);},
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
