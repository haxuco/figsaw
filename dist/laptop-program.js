import * as THREE from './vendor/three.module.js';
import {createLaptopChallenge,KERNING_WORDS} from './laptop-challenge.js';

const WIDTH=800,HEIGHT=510;
export function measureKerningLayouts(context){
 return KERNING_WORDS.map(spec=>{
  const layout=measureKerningLayout(context,spec,{fit:!spec.positions});
  // Calibrated rounds share the exact reference used by scoring.
  return spec.positions?{...layout,positions:[...spec.positions]}:layout;
 });
}
export function measureKerningLayout(context,spec,{fit=true}={}){
 context.fontKerning='normal';
 let fontSize=spec.fontSize;
 const font=()=>`${spec.style} ${spec.weight} ${fontSize}px ${spec.family}`;
 context.font=font();const measured=context.measureText(spec.word).width;
 if(fit&&measured>640){fontSize=Math.floor(fontSize*640/measured);context.font=font();}
 const total=context.measureText(spec.word).width,left=(WIDTH-total)/2;
 const letters=[...spec.word],widths=letters.map(letter=>context.measureText(letter).width);
 const positions=widths.map((width,i)=>left+context.measureText(letters.slice(0,i+1).join('')).width-width);
 return {...spec,font:font(),fontSize,widths,positions};
}
function completedRow(layout){
 const scale=.6,first=layout.positions[0],width=(layout.positions.at(-1)+layout.widths.at(-1)-first)*scale;
 return {...layout,font:layout.font.replace(/(\d*\.?\d+)px/,`${layout.fontSize*scale}px`),positions:layout.positions.map(x=>(WIDTH-width)/2+(x-first)*scale)};
}
function paintProgram(canvas,challenge){
 const view=challenge.view;
 const c=canvas.getContext('2d');
 c.fillStyle='#252b30';c.fillRect(0,0,WIDTH,HEIGHT);c.fillStyle='#1c2226';c.fillRect(0,0,WIDTH,44);
 c.textBaseline='alphabetic';c.fillStyle='#a9b4b7';c.font='16px Arial';c.fillText('kerning.fig',26,28);
 if(challenge.completed){
  c.textAlign='center';c.fillStyle='#c9d4c9';c.font='bold 14px Arial';c.fillText('03 / 03 ACCEPTED',400,82);
  c.fillStyle='#eef0e9';c.font='34px Georgia';c.fillText('Spacing approved.',400,126);c.textAlign='left';
  challenge.completedWords.forEach((layout,index)=>{const row=completedRow(layout);c.font=row.font;c.fillStyle='#f1f1e9';[...row.word].forEach((letter,i)=>c.fillText(letter,row.positions[i],202+index*76));});
  c.fillStyle='#c1d0b3';c.fillRect(268,378,264,56);c.fillStyle='#202b23';c.font='bold 20px Arial';c.textAlign='center';c.fillText('Return to room',400,412);c.textAlign='left';return;
 }
 c.fillStyle='#c9d4c9';c.font='bold 14px Arial';c.fillText(`WORD ${String(challenge.round+1).padStart(2,'0')} / 03`,48,86);
 c.fillStyle='#eef0e9';c.font='34px Georgia';c.fillText(challenge.completed?'Spacing approved.':'Fix the kerning.',48,132);
 c.fillStyle='#a1adb0';c.font='19px Arial';c.fillText('Drag the inner letters. First and last stay fixed.',48,163);
 c.strokeStyle='#ffffff16';c.beginPath();c.moveTo(48,331);c.lineTo(752,331);c.stroke();
 c.font=view.font;[...view.word].forEach((letter,i)=>{c.fillStyle=i===0||i===view.word.length-1?'#7d9296':'#f1f1e9';c.fillText(letter,view.positions[i],318);});
 c.fillStyle='#96a6aa';c.font='15px Arial';c.fillText(view.label,48,376);
 c.fillStyle='#d7dfce';c.font='19px Arial';c.fillText(challenge.completed?'3 words accepted. Return to the room.':'90 points to pass each word. Click to play.',48,463);
}
export function createLaptopProgramTexture(){
 const canvas=document.createElement('canvas');canvas.width=WIDTH;canvas.height=HEIGHT;
 const challenge=createLaptopChallenge(measureKerningLayouts(canvas.getContext('2d')));paintProgram(canvas,challenge);
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
 const root=document.querySelector('#laptop-program'),screenMap=laptop.screen.material.map;
 const layouts=measureKerningLayouts(screenMap.image.getContext('2d')),challenge=createLaptopChallenge(layouts);
 const play=root.querySelector('[data-play]'),result=root.querySelector('[data-result]'),status=root.querySelector('[data-status]'),check=root.querySelector('[data-check]');
 const wordArea=root.querySelector('[data-word]'),roundLabel=root.querySelector('[data-round]'),typeLabel=root.querySelector('[data-typeface]'),progress=[...root.querySelectorAll('[data-progress]')];
 const returnButton=root.querySelector('[data-return]'),power=root.querySelector('[data-power]'),nudgeButtons=[...root.querySelectorAll('[data-nudge]')];
 const completedWords=root.querySelector('[data-completed-words]');
 const center=new THREE.Vector3(),normal=new THREE.Vector3(),up=new THREE.Vector3(),rotation=new THREE.Quaternion(),startRotation=new THREE.Quaternion(),targetRotation=new THREE.Quaternion(),startPosition=new THREE.Vector3(),destination=new THREE.Vector3(),lookMatrix=new THREE.Matrix4();
 const corners=[[-.823/2,.525/2],[.823/2,.525/2],[.823/2,-.525/2],[-.823/2,-.525/2]].map(([x,y])=>new THREE.Vector3(x,y,0));
 let phase='closed',elapsed=0,startFov=62,selected=1,drawnRound=-1,letters=[],drag=null;
 function paint(){paintProgram(screenMap.image,challenge);screenMap.needsUpdate=true;}
 function selection(){letters.forEach((letter,i)=>letter.classList.toggle('selected',i===selected&&!challenge.accepted));}
 function sync({texture=true}={}){
  const view=challenge.view,accepted=challenge.accepted;
  if(drawnRound!==challenge.round){
   drawnRound=challenge.round;selected=1;wordArea.replaceChildren();wordArea.style.font=view.font;letters=[];
   [...view.word].forEach((letter,i)=>{
    const fixed=i===0||i===[...view.word].length-1,node=document.createElement(fixed?'span':'button');node.className=`kern-letter${fixed?' fixed':''}`;node.textContent=letter;
    node.style.width=`${view.widths[i]}px`;node.setAttribute('aria-label',fixed?`Fixed letter ${letter}`:`Move letter ${letter}, position ${i+1}`);
    if(!fixed){node.type='button';node.dataset.letter=String(i);}
    letters.push(node);wordArea.append(node);
   });
  }
  letters.forEach((letter,i)=>{letter.style.left=`${view.positions[i]}px`;if(letter.tagName==='BUTTON')letter.disabled=accepted;});selection();
  roundLabel.textContent=`WORD ${String(challenge.round+1).padStart(2,'0')} / 03`;typeLabel.textContent=view.label;
  progress.forEach((node,i)=>node.classList.toggle('passed',challenge.passed[i]));
  play.hidden=challenge.completed;result.hidden=!challenge.completed;check.hidden=challenge.completed;
  completedWords.replaceChildren();
  if(!result.hidden)challenge.completedWords.forEach(layout=>{
   const row=completedRow(layout),svg=document.createElementNS('http://www.w3.org/2000/svg','svg');
   svg.setAttribute('viewBox','0 0 800 76');svg.setAttribute('role','img');svg.setAttribute('aria-label',row.word);svg.classList.add('kern-completed-word');
   [...row.word].forEach((letter,i)=>{const glyph=document.createElementNS('http://www.w3.org/2000/svg','text');glyph.setAttribute('x',row.positions[i]);glyph.setAttribute('y',64);glyph.setAttribute('aria-hidden','true');glyph.style.font=row.font;glyph.textContent=letter;svg.append(glyph);});completedWords.append(svg);
  });
  nudgeButtons.forEach(button=>button.disabled=accepted);status.textContent=challenge.message;status.classList.toggle('accepted',accepted);
  check.textContent=challenge.accepted?'Next word →':'Submit spacing';
  if(texture)paint();
 }
 function endDrag(){if(drag&&wordArea.hasPointerCapture?.(drag.id))wordArea.releasePointerCapture(drag.id);drag=null;}
 wordArea.addEventListener('pointerdown',event=>{
  if(phase!=='playing'||challenge.accepted||event.button!==0)return;
  const button=event.target.closest('[data-letter]');if(!button)return;
  selected=Number(button.dataset.letter);button.focus({preventScroll:true});selection();
  drag={id:event.pointerId,x:event.clientX,origin:challenge.view.positions[selected],index:selected};wordArea.setPointerCapture(event.pointerId);event.preventDefault();
 });
 wordArea.addEventListener('pointermove',event=>{
  if(!drag||drag.id!==event.pointerId)return;
  const width=root.getBoundingClientRect().width;if(!width)return;
  if(challenge.move(drag.index,drag.origin+(event.clientX-drag.x)*WIDTH/width)){sync({texture:false});}
 });
 for(const event of ['pointerup','pointercancel','lostpointercapture'])wordArea.addEventListener(event,endDrag);
 wordArea.addEventListener('focusin',event=>{const button=event.target.closest('[data-letter]');if(button){selected=Number(button.dataset.letter);selection();}});
 function nudge(amount){if(phase==='playing'&&challenge.move(selected,challenge.view.positions[selected]+amount)){sync({texture:false});}}
 nudgeButtons.forEach(button=>button.onclick=()=>nudge(Number(button.dataset.nudge)));
 function submit(){
  if(phase!=='playing')return;endDrag();
  if(challenge.accepted){if(challenge.next()){sync();letters[1].focus({preventScroll:true});}return;}
  challenge.check();sync();if(challenge.completed)returnButton.focus({preventScroll:true});else if(challenge.accepted)check.focus({preventScroll:true});
 }
 check.onclick=submit;
 root.addEventListener('keydown',event=>{
  if(phase!=='playing')return;
  if(event.key==='ArrowLeft'||event.key==='ArrowRight'){event.preventDefault();event.stopPropagation();nudge((event.key==='ArrowLeft'?-1:1)*(event.shiftKey?10:1));}
  else if(event.key==='Enter'&&event.target!==returnButton){event.preventDefault();event.stopPropagation();submit();}
 });
 function cancel(){
  if(phase==='closed')return;endDrag();paint();
  phase='closed';root.hidden=true;document.body.classList.remove('entering-laptop');
  laptop.close(false);
  camera.position.copy(startPosition);camera.quaternion.copy(startRotation);camera.fov=startFov;camera.updateProjectionMatrix();camera.updateMatrixWorld(true);onReturn();canvas.focus({preventScroll:true});
 }
 returnButton.onclick=cancel;
 function start(){
  if(phase!=='closed'||!laptop.isReady)return false;
  startPosition.copy(camera.position);startRotation.copy(camera.quaternion);startFov=camera.fov;elapsed=0;phase='zooming';onLock();document.body.classList.add('entering-laptop');sync();return true;
 }
 function update(dt,time,reducedMotion=false){
  if(phase==='closed')return;
  if(!laptop.isOpen){cancel();return;}
  const powerText=getPowerStatus();if(power&&power.textContent!==powerText)power.textContent=powerText;
  laptop.screen.updateWorldMatrix(true,false);laptop.screen.getWorldPosition(center);laptop.screen.getWorldQuaternion(rotation);
  normal.set(0,0,1).applyQuaternion(rotation);up.set(0,1,0).applyQuaternion(rotation);
  destination.copy(center).addScaledVector(normal,laptopProgramDistance(camera.aspect));lookMatrix.lookAt(destination,center,up);targetRotation.setFromRotationMatrix(lookMatrix);
  if(phase==='zooming'){
   elapsed+=dt;const fraction=reducedMotion?1:THREE.MathUtils.smootherstep(elapsed,0,1.15);
   camera.position.lerpVectors(startPosition,destination,fraction);camera.quaternion.slerpQuaternions(startRotation,targetRotation,fraction);camera.fov=THREE.MathUtils.lerp(startFov,48,fraction);
   if(fraction===1){phase=laptop.isPowered?'playing':'unpowered';if(phase==='playing')(challenge.completed?returnButton:letters[1]).focus({preventScroll:true});}
  }else{camera.position.copy(destination);camera.quaternion.copy(targetRotation);camera.fov=48;}
  if(phase==='playing'&&!laptop.isPowered){endDrag();phase='unpowered';}
  else if(phase==='unpowered'&&laptop.isPowered){phase='playing';(challenge.completed?returnButton:letters[selected]).focus({preventScroll:true});}
  camera.updateProjectionMatrix();camera.updateMatrixWorld(true);
  if(phase!=='playing'){root.hidden=true;return;}
  const rect=canvas.getBoundingClientRect(),points=corners.map(corner=>{const point=laptop.screen.localToWorld(corner.clone()).project(camera);return{x:rect.left+(point.x+1)*rect.width/2,y:rect.top+(1-point.y)*rect.height/2};});
  const matrix=screenHomography(points,WIDTH,HEIGHT);root.hidden=!matrix||!matrix.every(Number.isFinite);
  if(!root.hidden)root.style.transform=`matrix3d(${matrix.join(',')})`;
 }
 sync();return {start,cancel,update,capture:challenge.capture,restore(value){cancel();drawnRound=-1;challenge.restore(value);sync();},complete(){cancel();challenge.complete();sync();},reset(){cancel();drawnRound=-1;challenge.reset();sync();},get active(){return phase!=='closed';},get completed(){return challenge.completed;},get passedCount(){return challenge.passed.filter(Boolean).length;}};
}
