import * as THREE from './vendor/three.module.js';
import {formatCountdown} from './countdown-clock.js';

export function createCountdownHUD({timer,camera,occluders,corner,warning,reducedMotion=false}){
 const display=timer.display,ray=new THREE.Raycaster(),center=new THREE.Vector3(),towardEye=new THREE.Vector3(),normal=new THREE.Vector3(),projected=new THREE.Vector3();
 const width=display.geometry.parameters.width/2,height=display.geometry.parameters.height/2;
 let nextVisibilityCheck=0,displayVisible=false,lastSecond=null,secondChangedAt=0;
 function inView(){
  for(let object=display;object;object=object.parent)if(!object.visible)return false;
  display.updateWorldMatrix(true,false);camera.updateMatrixWorld();
  center.setFromMatrixPosition(display.matrixWorld);towardEye.subVectors(camera.position,center);
  const distance=towardEye.length();
  normal.set(0,0,1).transformDirection(display.matrixWorld);
  if(!distance||normal.dot(towardEye)/distance<.15)return false;
  // A clipped readout should still get a complete, readable corner timer.
  for(const x of[-width,width])for(const y of[-height,height]){
   projected.set(x,y,0).applyMatrix4(display.matrixWorld).project(camera);
   if(projected.z<-1||projected.z>1||Math.abs(projected.x)>.98||Math.abs(projected.y)>.98)return false;
  }
  ray.set(camera.position,towardEye.negate().normalize());ray.near=.02;ray.far=Math.max(.02,distance-.01);
  return !ray.intersectObjects(occluders,true).some(hit=>{
   for(let object=hit.object;object;object=object.parent){if(!object.visible||object===timer.group)return false;}
   const materials=Array.isArray(hit.object.material)?hit.object.material:[hit.object.material];
   return materials.some(material=>material&&material.visible&&material.colorWrite&&(!material.transparent||material.opacity>.5));
  });
 }
 function hide(){corner.hidden=warning.hidden=true;nextVisibilityCheck=0;lastSecond=null;}
 function update(time,seconds,{enabled=true,forceCorner=false}={}){
  if(!enabled||timer.status==='waiting'){hide();return;}
  if(seconds!==lastSecond){lastSecond=seconds;secondChangedAt=time;corner.textContent=warning.textContent=formatCountdown(seconds);}
  // Raycast only four times a second, and only while the readout is in frame.
  if(time>=nextVisibilityCheck){displayVisible=inView();nextVisibilityCheck=time+.25;}
  corner.hidden=!forceCorner&&displayVisible;
  warning.hidden=!(seconds>0&&seconds<=5&&timer.status==='running')||(!reducedMotion&&time-secondChangedAt>=.55);
 }
 hide();return {update,hide};
}
