import * as THREE from './vendor/three.module.js';
import {createLaptopChallenge,KERNING_WORDS} from './laptop-challenge.js';
import {drawFigmaMark} from './figma-mark.js';

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
const desktopClock=()=>new Date().toLocaleString('en-US',{weekday:'short',hour:'numeric',minute:'2-digit',hour12:false}).replace(',', '');
function roundedPanel(c,x,y,w,h,r,fill){
 c.beginPath();c.moveTo(x+r,y);c.lineTo(x+w-r,y);c.quadraticCurveTo(x+w,y,x+w,y+r);c.lineTo(x+w,y+h-r);c.quadraticCurveTo(x+w,y+h,x+w-r,y+h);c.lineTo(x+r,y+h);c.quadraticCurveTo(x,y+h,x,y+h-r);c.lineTo(x,y+r);c.quadraticCurveTo(x,y,x+r,y);c.fillStyle=fill;c.fill();
}
function paintDesktop(c){
 const sky=c.createLinearGradient(0,0,800,510);sky.addColorStop(0,'#91a6ae');sky.addColorStop(.45,'#4c7b91');sky.addColorStop(1,'#132c4e');c.fillStyle=sky;c.fillRect(0,0,800,510);
 c.beginPath();c.moveTo(0,480);c.bezierCurveTo(190,180,440,210,800,130);c.lineTo(800,510);c.lineTo(0,510);c.fillStyle='#4380a0';c.fill();
 c.beginPath();c.moveTo(0,510);c.bezierCurveTo(290,310,560,430,800,290);c.lineTo(800,510);c.fillStyle='#244f76';c.fill();
 c.fillStyle='#16253b';c.fillRect(0,0,800,27);c.fillStyle='#f5f7fb';c.font='600 11px Arial';if(typeof Path2D!=='undefined'){c.save();c.translate(16,5);c.scale(.65,.65);c.fill(new Path2D('M16.3 1.5c.2 2-1.1 4-3.1 4.4-.3-1.8 1.2-3.9 3.1-4.4ZM18.7 12.8c0 3 2.4 4 2.4 4-1.1 2.8-2.8 5.7-4.8 5.7-1.2 0-1.7-.8-3.5-.8-1.7 0-2.5.8-3.6.8-2 0-4.6-3.9-5.3-7.1-1-4.2.5-8.6 3.9-9.2 1.9-.4 3.2.9 4.6.9 1.4 0 2.7-1 4.5-.9 1.8.1 3.2 1 4.1 2.3-1.6 1-2.3 2.4-2.3 4.3Z'));c.restore();}c.fillText('Figma',47,18);c.font='11px Arial';c.fillText('File     Edit     View     Window     Help',96,18);c.textAlign='right';c.fillText(desktopClock(),784,18);c.textAlign='left';
 c.shadowColor='#09142488';c.shadowBlur=25;c.shadowOffsetY=12;roundedPanel(c,16,45,768,400,10,'#f1f1f1');c.shadowBlur=0;c.shadowOffsetY=0;
 roundedPanel(c,17,46,766,43,9,'#f2f2f2');c.fillStyle='#d4d4d4';c.fillRect(17,88,766,1);
 ['#ff5f57','#febc2e','#28c840'].forEach((color,i)=>{c.fillStyle=color;c.beginPath();c.arc(38+i*18,67,5.5,0,Math.PI*2);c.fill();});
 if(typeof Path2D!=='undefined')drawFigmaMark(c,350,57,13);
 c.fillStyle='#333';c.font='600 12px Arial';c.fillText('kerning.fig',372,72);c.fillStyle='#838383';c.font='10px Arial';c.textAlign='right';c.fillText('Design challenge',767,72);c.textAlign='left';
 roundedPanel(c,303,460,194,42,12,'#d6e4f499');
 ['#68b8ff','#248fd5','#fffced','#f8f8f8','#b9c7d4'].forEach((color,i)=>roundedPanel(c,311+i*37,466,29,29,7,color));
 c.fillStyle='#1b4980';c.font='21px Arial';c.fillText('⌣',315,488);c.fillStyle='#f6cb4d';c.fillRect(385,466,29,7);
 c.strokeStyle='#ec6656';c.lineWidth=3;c.beginPath();c.moveTo(357,488);c.lineTo(369,473);c.stroke();
 if(typeof Path2D!=='undefined')drawFigmaMark(c,429.5,470,14);
 c.fillStyle='#283b51';c.beginPath();c.arc(436.5,498.5,1.5,0,Math.PI*2);c.fill();
}
function paintProgram(canvas,challenge){
 const view=challenge.view,c=canvas.getContext('2d');c.textAlign='left';c.textBaseline='alphabetic';paintDesktop(c);
 if(challenge.completed){
  c.textAlign='center';c.fillStyle='#777';c.font='600 10px Arial';c.fillText('03 / 03 COMPLETE',400,119);
  c.fillStyle='#242424';c.font='600 27px Arial';c.fillText('Kerning approved',400,152);c.fillStyle='#727272';c.font='13px Arial';c.fillText('Your finished work',400,176);c.textAlign='left';
  roundedPanel(c,49,187,702,166,7,'#fff');
  challenge.completedWords.forEach((layout,index)=>{const row=completedRow(layout);c.save();c.translate(88,0);c.scale(.78,.78);c.font=row.font;c.fillStyle='#242424';[...row.word].forEach((letter,i)=>c.fillText(letter,row.positions[i],296+index*68));c.restore();});
  roundedPanel(c,310,370,180,40,6,'#0d66d0');c.fillStyle='#fff';c.font='600 12px Arial';c.textAlign='center';c.fillText('Return to room',400,395);c.textAlign='left';return;
 }
 roundedPanel(c,28,101,180,109,7,'#fff');c.fillStyle='#555';c.font='600 11px Arial';c.fillText('Pages',39,120);c.fillStyle='#aaa';c.font='10px Arial';c.fillText('3',190,120);
 for(let i=0;i<3;i++){
  if(i===challenge.round)roundedPanel(c,32,129+i*24,172,24,4,'#e5f0ff');
  const locked=i>challenge.round;c.fillStyle=locked?'#969696':i===challenge.round?'#075dc1':'#626262';c.font='11px Arial';c.fillText(String(i+1).padStart(2,'0'),39,145+i*24);c.fillText(challenge.pageNames[i],65,145+i*24);
  if(challenge.passed[i]){c.fillStyle='#257b46';c.fillText('✓',188,145+i*24);}
  if(locked){const y=136+i*24;c.strokeStyle='#969696';c.lineWidth=1;c.strokeRect(189,y+4,7,6);c.beginPath();c.arc(192.5,y+4,2.5,Math.PI,0);c.stroke();}
 }
 c.textAlign='center';c.fillStyle='#777';c.font='600 10px Arial';c.fillText(`WORD ${String(challenge.round+1).padStart(2,'0')} / 03`,496,123);
 c.fillStyle='#242424';c.font='600 27px Arial';c.fillText('Fix the kerning',496,156);c.fillStyle='#727272';c.font='13px Arial';c.fillText('Drag the inner letters',496,179);c.fillText('First and last stay fixed',496,198);c.textAlign='left';
 c.fillStyle='#858585';c.font='9px Arial';c.fillText(`Typography / ${view.word}`,32,226);c.fillStyle='#fff';c.fillRect(32,231,736,123);
 c.font=view.font;[...view.word].forEach((letter,i)=>{c.fillStyle=i===0||i===view.word.length-1?'#777':'#242424';c.fillText(letter,view.positions[i],318);});
 c.fillStyle='#838383';c.font='10px Arial';c.fillText('90 points to pass',32,374);c.fillText('Tab to select · ← → to nudge · Shift for 10px',523,374);
 roundedPanel(c,28,384,744,51,8,'#fff');c.fillStyle='#333';c.font='22px Arial';c.fillText('T    ←    →',44,417);
 roundedPanel(c,622,391,142,38,6,'#0d66d0');c.fillStyle='#fff';c.font='600 12px Arial';c.fillText('Check kerning',649,415);
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

export function createLaptopProgram({camera,canvas,laptop,onLock=()=>{},onReturn=()=>{},getPowerStatus=()=>({percent:8,charging:false,remaining:60})}){
 const root=document.querySelector('#laptop-program'),screenMap=laptop.screen.material.map;
 const layouts=measureKerningLayouts(screenMap.image.getContext('2d')),challenge=createLaptopChallenge(layouts);
 const play=root.querySelector('[data-play]'),result=root.querySelector('[data-result]'),status=root.querySelector('[data-status]'),check=root.querySelector('[data-check]');
 const wordArea=root.querySelector('[data-word]'),roundLabel=root.querySelector('[data-round]'),progress=[...root.querySelectorAll('[data-progress]')];
 const returnButton=root.querySelector('[data-return]'),power=root.querySelector('[data-power]'),nudgeButtons=[...root.querySelectorAll('[data-nudge]')];
 const completedWords=root.querySelector('[data-completed-words]');
 const artboardName=root.querySelector('[data-artboard-name]'),batteryIcon=root.querySelector('[data-battery]'),powerWarning=root.querySelector('[data-power-warning]'),systemClock=root.querySelector('[data-system-clock]');
 let clockMinute=-1,lastPowerLabel='';
 const center=new THREE.Vector3(),normal=new THREE.Vector3(),up=new THREE.Vector3(),rotation=new THREE.Quaternion(),startRotation=new THREE.Quaternion(),targetRotation=new THREE.Quaternion(),startPosition=new THREE.Vector3(),destination=new THREE.Vector3(),lookMatrix=new THREE.Matrix4();
 const corners=[[-.823/2,.525/2],[.823/2,.525/2],[.823/2,-.525/2],[-.823/2,-.525/2]].map(([x,y])=>new THREE.Vector3(x,y,0));
 let phase='closed',elapsed=0,startFov=62,selected=1,drawnRound=-1,letters=[],drag=null;
 function paint(){paintProgram(screenMap.image,challenge);screenMap.needsUpdate=true;}
 function selection(){
  letters.forEach((letter,i)=>letter.classList.toggle('selected',i===selected&&!challenge.accepted));
 }
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
  roundLabel.textContent=`WORD ${String(challenge.round+1).padStart(2,'0')} / 03`;
  if(artboardName)artboardName.textContent=view.word;
  // This list is read-only progress, never a route to another round.
  progress.forEach((node,i)=>{
   const locked=i>challenge.round,label=node.querySelector?.('[data-page-label]');
   node.classList.toggle('passed',challenge.passed[i]);node.classList.toggle('current',i===challenge.round);node.classList.toggle('locked',locked);
   node.setAttribute('aria-disabled',String(locked));node.setAttribute('aria-current',i===challenge.round?'step':'false');
   node.setAttribute('aria-label',`${locked?`Word ${i+1}`:challenge.pageNames[i]}: ${locked?'locked; pass the current word first':challenge.passed[i]?'complete':'in progress'}`);
   if(label)label.textContent=challenge.pageNames[i];
  });
  play.hidden=challenge.completed;result.hidden=!challenge.completed;check.hidden=challenge.completed;
  completedWords.replaceChildren();
  if(!result.hidden)challenge.completedWords.forEach(layout=>{
   const row=completedRow(layout),svg=document.createElementNS('http://www.w3.org/2000/svg','svg');
   svg.setAttribute('viewBox','0 0 800 76');svg.setAttribute('role','img');svg.setAttribute('aria-label',row.word);svg.classList.add('kern-completed-word');
   [...row.word].forEach((letter,i)=>{const glyph=document.createElementNS('http://www.w3.org/2000/svg','text');glyph.setAttribute('x',row.positions[i]);glyph.setAttribute('y',64);glyph.setAttribute('aria-hidden','true');glyph.style.font=row.font;glyph.textContent=letter;svg.append(glyph);});completedWords.append(svg);
  });
  nudgeButtons.forEach(button=>button.disabled=accepted);status.textContent=challenge.message;status.classList.toggle('accepted',accepted);
  check.textContent=challenge.accepted?'Next word →':'Check kerning';
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
  const supply=getPowerStatus(),level=Math.max(0,Math.min(100,Number(supply.percent)||0)),seconds=Math.max(0,Math.ceil(supply.remaining||0));
  const powerLabel=`${level}:${Boolean(supply.charging)}:${seconds}`;
  if(powerLabel!==lastPowerLabel){
   lastPowerLabel=powerLabel;if(power){power.textContent=`${level}%`;power.setAttribute('aria-label',`${level}% battery${supply.charging?' · Charging':''}`);}
   if(batteryIcon){batteryIcon.classList.toggle('charging',supply.charging);batteryIcon.style.setProperty('--charge',`${level}%`);}
   if(powerWarning){powerWarning.hidden=Boolean(supply.charging);powerWarning.textContent=`Connect charger · ${Math.floor(seconds/60)}:${String(seconds%60).padStart(2,'0')}`;}
  }
  const minute=Math.floor(Date.now()/60000);if(systemClock&&minute!==clockMinute){clockMinute=minute;systemClock.textContent=desktopClock();}
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
  root.classList.toggle('compact',Math.abs(points[1].x-points[0].x)<620);
  const matrix=screenHomography(points,WIDTH,HEIGHT);root.hidden=!matrix||!matrix.every(Number.isFinite);
  if(!root.hidden)root.style.transform=`matrix3d(${matrix.join(',')})`;
 }
 sync();return {start,cancel,update,capture:challenge.capture,restore(value){cancel();drawnRound=-1;challenge.restore(value);sync();},complete(){cancel();challenge.complete();sync();},reset(){cancel();drawnRound=-1;challenge.reset();sync();},get active(){return phase!=='closed';},get completed(){return challenge.completed;},get passedCount(){return challenge.passed.filter(Boolean).length;}};
}
