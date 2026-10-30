import * as THREE from './vendor/three.module.js';
import {createObjectInspectionCamera} from './object-inspection-camera.js';
import {formatCountdown} from './countdown-clock.js';

// Use a separate camera while the entire simulation is paused. Opening a board
// cannot advance a hazard, overwrite a chair transition, or move the player.
export function createInfoPosterCamera({camera,state,baseFov}){
 const view=camera.clone(),position=camera.position.clone(),pose={yaw:state.yaw,pitch:state.pitch,zoom:state.zoom};
 const motion=createObjectInspectionCamera({position,state:pose,aspect:()=>view.aspect,baseFov,fitEntireFrame:true});
 const direction=new THREE.Vector3();
 return {camera:view,show:motion.show,restore:motion.restore,get active(){return motion.active;},get returning(){return motion.returning;},update(time,aspect,reducedMotion){
  view.aspect=aspect;motion.update(time,reducedMotion);view.position.copy(position);
  direction.set(-Math.sin(pose.yaw)*Math.cos(pose.pitch),Math.sin(pose.pitch),-Math.cos(pose.yaw)*Math.cos(pose.pitch)).add(position);view.lookAt(direction);
  view.fov=baseFov*pose.zoom;view.updateProjectionMatrix();view.updateMatrixWorld(true);
 }};
}

export function createInfoPosterViewer({renderer,scene,camera,state,baseFov,light,reducedMotion=false,onOpen=()=>{},onClose=()=>{},getCountdown=()=>null}){
 const dialog=document.createElement('dialog');dialog.id='info-poster-view';dialog.setAttribute('aria-label','Office notice board');
 dialog.innerHTML='<button type="button" class="inspection-back" aria-label="Back to room">← Back</button><output class="info-poster-timer" aria-label="Game countdown"></output><div class="info-poster-content" hidden></div>';
 document.body.append(dialog);
 const back=dialog.querySelector('button'),content=dialog.querySelector('.info-poster-content'),timer=dialog.querySelector('output'),canvas=renderer.domElement;
 const corners=[new THREE.Vector3(),new THREE.Vector3()];
 let inspection=null,target=null,frame=0,start=0,settled=false,lightState=null;
 const now=()=>performance.now()/1000-start;
 function schedule(){if(dialog.open&&!frame&&!document.hidden)frame=requestAnimationFrame(draw);}
 function finish(){
  cancelAnimationFrame(frame);frame=0;inspection=null;target=null;
  if(lightState){light.position.copy(lightState.position);light.color.copy(lightState.color);light.intensity=lightState.intensity;light.distance=lightState.distance;lightState=null;}
  content.hidden=true;content.replaceChildren();dialog.close();document.body.classList.remove('reading-info-poster');onClose();
 }
 function draw(){
  frame=0;if(!dialog.open||document.hidden)return;
  const time=now(),rect=canvas.getBoundingClientRect();inspection.update(time,rect.width/rect.height,reducedMotion);
  if(!inspection.active){finish();return;}
  light.position.copy(inspection.camera.position);light.color.setHex(0xd3d5b8);light.distance=8;light.intensity=.65;
  renderer.render(scene,inspection.camera);
  if(!inspection.returning&&(reducedMotion||time>=.85)){
   target.updateWorldMatrix(true,false);target.geometry.computeBoundingBox();const box=target.geometry.boundingBox;
   corners[0].set(box.min.x,box.max.y,box.max.z).applyMatrix4(target.matrixWorld).project(inspection.camera);
   corners[1].set(box.max.x,box.min.y,box.max.z).applyMatrix4(target.matrixWorld).project(inspection.camera);
   const x=rect.left+(corners[0].x+1)*rect.width/2,y=rect.top+(1-corners[0].y)*rect.height/2;
   Object.assign(content.style,{left:`${x}px`,top:`${y}px`,width:`${(corners[1].x-corners[0].x)*rect.width/2}px`,height:`${(corners[0].y-corners[1].y)*rect.height/2}px`});
   content.hidden=false;settled=true;
  }
  // Once the zoom settles, the paused room needs no continuous render loop.
  if(!settled||inspection.returning)schedule();
 }
 function close(immediate=false){
  if(!dialog.open||inspection.returning&&!immediate)return;
  content.hidden=true;back.disabled=true;inspection.restore(now(),immediate);settled=false;
  if(immediate)finish();else schedule();
 }
 function open(object,element){
  if(dialog.open||!object||!element)return false;
  target=object;start=performance.now()/1000;settled=false;back.disabled=false;
  lightState={position:light.position.clone(),color:light.color.clone(),intensity:light.intensity,distance:light.distance};
  inspection=createInfoPosterCamera({camera,state,baseFov});inspection.show(target,0);
  dialog.setAttribute('aria-label',object.name);content.replaceChildren(element);content.scrollTop=0;content.hidden=true;
  const seconds=getCountdown();timer.hidden=seconds===null;timer.textContent=seconds===null?'':formatCountdown(seconds);
  document.body.classList.add('reading-info-poster');dialog.showModal();onOpen();back.focus({preventScroll:true});schedule();return true;
 }
 back.onclick=()=>close();dialog.addEventListener('cancel',event=>{event.preventDefault();close();});
 window.addEventListener('resize',schedule);
 document.addEventListener('visibilitychange',()=>{if(document.hidden){cancelAnimationFrame(frame);frame=0;}else schedule();});
 canvas.addEventListener('webglcontextlost',()=>close(true));
 return {open,close,refresh:schedule,get active(){return dialog.open;}};
}
