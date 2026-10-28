import * as THREE from './vendor/three.module.js';
import {createLaptopChallenge} from './laptop-challenge.js';

const WIDTH=800,HEIGHT=510;
function paintProgram(canvas,challenge){
 const c=canvas.getContext('2d'),offsets=challenge.offsets;
 c.fillStyle='#202124';c.fillRect(0,0,WIDTH,HEIGHT);c.fillStyle='#2b2c30';c.fillRect(0,0,WIDTH,50);
 c.fillStyle='#a9a7b0';c.font='18px Arial';c.fillText('design-challenge.fig',28,32);c.fillText('Prototype 01',648,32);
 c.fillStyle='#e7e4ed';c.font='bold 37px Arial';c.fillText(challenge.completed?'Challenge complete.':'Restore the layout.',48,131);
 c.fillStyle='#a4a1ad';c.font='18px Arial';c.fillText(challenge.completed?'Your design has passed the check.':'Align the three components with their guides.',48,169);
 for(let i=0;i<3;i++){
  const x=48+i*241;c.fillStyle='#29292f';c.beginPath();c.roundRect(x,209,221,174,12);c.fill();
  c.strokeStyle='#82808d';c.setLineDash([5,5]);c.beginPath();c.moveTo(x+110,228);c.lineTo(x+110,360);c.stroke();c.setLineDash([]);
  c.fillStyle=challenge.completed?'#8acda9':['#c6b6ef','#a7c8ed','#d5b9a2'][i];c.beginPath();c.roundRect(x+55+offsets[i]*34,260,111,67,9);c.fill();
 }
 c.fillStyle=challenge.completed?'#8acda9':'#b7adc7';c.font='18px Arial';c.fillText(challenge.completed?'Return to the room.':'Click the screen to continue.',48,456);
}
export function createLaptopProgramTexture(){
 const canvas=document.createElement('canvas');canvas.width=WIDTH;canvas.height=HEIGHT;paintProgram(canvas,createLaptopChallenge());
 const map=new THREE.CanvasTexture(canvas);map.colorSpace=THREE.SRGBColorSpace;return map;
}

// Project the interactive program onto the actual four corners of the screen.
export function screenHomography(points,width,height){
 const [p0,p1,p2,p3]=points,dx1=p1.x-p2.x,dx2=p3.x-p2.x,dy1=p1.y-p2.y,dy2=p3.y-p2.y;
 const dx3=p0.x-p1.x+p2.x-p3.x,dy3=p0.y-p1.y+p2.y-p3.y,den=dx1*dy2-dx2*dy1;
 if(Math.abs(den)<.00001)return null;
 const g=(dx3*dy2-dx2*dy3)/den,h=(dx1*dy3-dx3*dy1)/den;
 const a=p1.x-p0.x+g*p1.x,b=p3.x-p0.x+h*p3.x,d=p1.y-p0.y+g*p1.y,e=p3.y-p0.y+h*p3.y;
 return [a/width,d/width,0,g/width,b/height,e/height,0,h/height,0,0,1,0,p0.x,p0.y,0,1];
}
export function laptopProgramDistance(aspect,fov=48){return Math.max(.525,.823/aspect)/(2*Math.tan(THREE.MathUtils.degToRad(fov/2)))*1.10;}

export function createLaptopProgram({camera,canvas,laptop,onLock=()=>{},onReturn=()=>{},getPowerStatus=()=>''}){
 const challenge=createLaptopChallenge(),root=document.querySelector('#laptop-program');
 const play=root.querySelector('[data-play]'),result=root.querySelector('[data-result]'),status=root.querySelector('[data-status]'),check=root.querySelector('[data-check]');
 const components=[...root.querySelectorAll('[data-component]')],returnButton=root.querySelector('[data-return]');
 const power=root.querySelector('[data-power]');
 const screenMap=laptop.screen.material.map;
 const center=new THREE.Vector3(),normal=new THREE.Vector3(),up=new THREE.Vector3(),rotation=new THREE.Quaternion(),startRotation=new THREE.Quaternion(),targetRotation=new THREE.Quaternion(),startPosition=new THREE.Vector3(),destination=new THREE.Vector3(),lookMatrix=new THREE.Matrix4();
 const corners=[[-.823/2,.525/2],[.823/2,.525/2],[.823/2,-.525/2],[-.823/2,-.525/2]].map(([x,y])=>new THREE.Vector3(x,y,0));
 let phase='closed',elapsed=0,startFov=62;
 function sync(){
  const offsets=challenge.offsets;
  for(let i=0;i<3;i++){const offset=offsets[i];components[i].style.setProperty('--offset',offset);components[i].setAttribute('aria-label',`Align component ${i+1}: ${offset===0?'centered':offset<0?'left':'right'}`);}
  play.hidden=challenge.completed;result.hidden=!challenge.completed;check.hidden=challenge.completed;status.textContent=challenge.message;
  paintProgram(screenMap.image,challenge);screenMap.needsUpdate=true;
 }
 components.forEach((button,i)=>button.onclick=()=>{if(phase==='playing'&&challenge.cycle(i))sync();});
 check.onclick=()=>{if(phase!=='playing')return;challenge.check();sync();if(challenge.completed)returnButton.focus({preventScroll:true});};
 function cancel(){
  if(phase==='closed')return;
  phase='closed';root.hidden=true;document.body.classList.remove('entering-laptop');
  camera.position.copy(startPosition);camera.quaternion.copy(startRotation);camera.fov=startFov;camera.updateProjectionMatrix();camera.updateMatrixWorld(true);onReturn();canvas.focus({preventScroll:true});
 }
 returnButton.onclick=cancel;
 function start(){
  if(phase!=='closed'||challenge.completed||!laptop.isReady||!laptop.isPowered)return false;
  startPosition.copy(camera.position);startRotation.copy(camera.quaternion);startFov=camera.fov;elapsed=0;phase='zooming';onLock();document.body.classList.add('entering-laptop');sync();return true;
 }
 function update(dt,time,reducedMotion=false){
  if(phase==='closed')return;
  if(!laptop.isPowered||!laptop.isOpen){cancel();return;}
  const powerText=getPowerStatus();if(power&&power.textContent!==powerText)power.textContent=powerText;
  laptop.screen.updateWorldMatrix(true,false);laptop.screen.getWorldPosition(center);laptop.screen.getWorldQuaternion(rotation);
  normal.set(0,0,1).applyQuaternion(rotation);up.set(0,1,0).applyQuaternion(rotation);
  destination.copy(center).addScaledVector(normal,laptopProgramDistance(camera.aspect));lookMatrix.lookAt(destination,center,up);targetRotation.setFromRotationMatrix(lookMatrix);
  if(phase==='zooming'){
   elapsed+=dt;const progress=reducedMotion?1:THREE.MathUtils.smootherstep(elapsed,0,1.15);
   camera.position.lerpVectors(startPosition,destination,progress);camera.quaternion.slerpQuaternions(startRotation,targetRotation,progress);camera.fov=THREE.MathUtils.lerp(startFov,48,progress);
   if(progress===1){phase='playing';components[0].focus({preventScroll:true});}
  }else{camera.position.copy(destination);camera.quaternion.copy(targetRotation);camera.fov=48;}
  camera.updateProjectionMatrix();camera.updateMatrixWorld(true);
  if(phase!=='playing'){root.hidden=true;return;}
  const rect=canvas.getBoundingClientRect(),points=corners.map(corner=>{const point=laptop.screen.localToWorld(corner.clone()).project(camera);return{x:rect.left+(point.x+1)*rect.width/2,y:rect.top+(1-point.y)*rect.height/2};});
  const matrix=screenHomography(points,WIDTH,HEIGHT);root.hidden=!matrix||!matrix.every(Number.isFinite);
  if(!root.hidden)root.style.transform=`matrix3d(${matrix.join(',')})`;
 }
 sync();return {start,cancel,update,reset(){cancel();challenge.reset();sync();},get active(){return phase!=='closed';},get completed(){return challenge.completed;}};
}
