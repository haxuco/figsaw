import * as THREE from './vendor/three.module.js';

export const FIGPAL_PLEAS=['Nooo!!!!','Tell my wife that I love her!','Delete my browser history!'];
export const HANGING_PLEAS=['help','I have a family',"I swear I didn't detach the component!"];
export const FIGPAL_RELIEF=Object.freeze([
 "We're saved!",
 'A dry run. Literally.',
 'Best empty state ever!',
 'No fill? No funeral!',
 'Cancel my exit interview!',
 'New status: undissolved.',
 'My bones stay internal!',
 'Death failed QA!',
 'Undo my last scream!',
 'I still have layers!',
 'This counts as PTO, right?',
 'Survived another sprint!',
 'Finally, a safe drop shadow!',
 "Tell my wife I'm... fine?",
 'I take back the browser thing!',
 'Five stars. No acid.',
 'Less toxic than my last job!',
 'Nothing to dissolve here!',
 'Not today, skeleton me!',
 'The only good scope cut!',
 'Love the negative space!',
 'Shipped without the acid!',
 'Still a solid contributor!',
 'Can we expense therapy?'
]);

// Manual and timed descents share the same tank-aware dialogue. A shuffled bag
// gives every relief line a turn before repeating, including across game retries.
export function createFigpalLoweringDialogue(hoists,bubbles,isDrained,random=Math.random){
 const active=new Map();let bag=[],lastLine=null;
 function relief(){
  if(!bag.length){
   bag=[...FIGPAL_RELIEF];
   for(let i=bag.length-1;i>0;i--){const j=Math.floor(random()*(i+1));[bag[i],bag[j]]=[bag[j],bag[i]];}
   if(bag.at(-1)===lastLine)[bag[0],bag[bag.length-1]]=[bag.at(-1),bag[0]];
  }
  lastLine=bag.pop();return lastLine;
 }
 function hide(index){active.delete(index);bubbles.hide(index);}
 function show(index,time){
  if(!hoists.canSpeak(index)){hide(index);return null;}
  const dry=!!isDrained(index),line=dry?relief():FIGPAL_PLEAS[index];
  active.set(index,dry);bubbles.show(index,time,line);return line;
 }
 return {show,hide,reset(){active.clear();bubbles.hide();},update(time){
  for(const [index,dry]of active){
   if(!hoists.canSpeak(index)||!hoists.isLowered(index)){hide(index);continue;}
   // If a tank finishes draining during the descent, the living Figpal notices.
   if(!dry&&isDrained(index)){active.set(index,true);bubbles.show(index,time,relief());}
  }
 }};
}

// One captive calls out at a time, with a quiet interval between their pleas.
export function createHangingPleas(hoists,bubbles,random=Math.random){
 let nextAt=18,lastIndex=-1,lineIndex=Math.floor(random()*HANGING_PLEAS.length);
 return {
  update(time,finaleActive=false){
   if(time<nextAt)return false;
   if(finaleActive||bubbles.isActive(time)){nextAt=time+2;return false;}
   let eligible=[0,1,2].filter(index=>hoists.isHanging(index));
   if(!eligible.length){nextAt=time+2;return false;}
   if(eligible.length>1)eligible=eligible.filter(index=>index!==lastIndex);
   const index=eligible[Math.floor(random()*eligible.length)];
   bubbles.show(index,time,HANGING_PLEAS[lineIndex],6);
   lastIndex=index;lineIndex=(lineIndex+1)%HANGING_PLEAS.length;
   nextAt=time+20+random()*15;
   return true;
  },
  reset(time=0){nextAt=time+18;lastIndex=-1;}
 };
}

// Fixed-size bubbles stay centered on their own 3D anchors without reflowing.
export function createFigpalBubbles(anchors,canvas,canSpeak=()=>true){
 const container=document.querySelector('#figpal-dialogues');
 const bubbles=FIGPAL_PLEAS.map((line,index)=>{
  const wrapper=document.createElement('div');wrapper.className='figpal-speech';wrapper.hidden=true;
  wrapper.dataset.figpal=String(index+1);
  const text=document.createElement('span');text.className='figpal-speech-text';text.textContent=line;
  const tail=document.createElementNS('http://www.w3.org/2000/svg','svg');tail.classList.add('figpal-speech-tail');tail.setAttribute('aria-hidden','true');
  const path=document.createElementNS('http://www.w3.org/2000/svg','path');path.setAttribute('d','M 0 0 L 12 0 L 6 15 Z');tail.append(path);
  wrapper.append(text,tail);container.append(wrapper);return wrapper;
 });
 const point=new THREE.Vector3(),startedAt=bubbles.map(()=>null),durations=bubbles.map(()=>15);
 function show(index,time,line=FIGPAL_PLEAS[index],duration=15){
  if(!bubbles[index])return;
  if(!canSpeak(index)){hide(index);return;}
  startedAt[index]=time;durations[index]=duration;bubbles[index].children[0].textContent=line;
 }
 function isActive(time){return startedAt.some((start,index)=>canSpeak(index)&&start!==null&&time>=start&&time<start+durations[index]);}
 function showAll(time){for(let i=0;i<bubbles.length;i++)show(i,time);}
 function hide(index){
  if(Number.isInteger(index)){if(bubbles[index]){startedAt[index]=null;bubbles[index].hidden=true;}return;}
  container.hidden=true;for(let i=0;i<bubbles.length;i++){startedAt[i]=null;bubbles[i].hidden=true;}
 }
 function update(camera,time){
  if(!isActive(time)){hide();return;}
  container.hidden=false;
  const rect=canvas.getBoundingClientRect();let visible=0;
  for(let i=0;i<anchors.length;i++){
   // Becoming a skeleton ends an existing plea and prevents every later trigger.
   if(!canSpeak(i)){hide(i);continue;}
   const bubble=bubbles[i],elapsed=startedAt[i]===null?-1:time-startedAt[i];
   const duration=durations[i];
   if(elapsed<0||elapsed>=duration){bubble.hidden=true;if(elapsed>=duration)startedAt[i]=null;continue;}
   bubble.style.opacity=String(1-THREE.MathUtils.smoothstep(elapsed,duration-1,duration));
   anchors[i].getWorldPosition(point);
   // Last words remain just above the water rather than vanishing behind the vat.
   point.y=Math.max(point.y,1.32);point.project(camera);
   if(point.z<-1||point.z>1||Math.abs(point.x)>1.04||Math.abs(point.y)>1.1){bubble.hidden=true;continue;}
   bubble.hidden=false;
   const anchorX=rect.left+(point.x*.5+.5)*rect.width,anchorY=rect.top+(-point.y*.5+.5)*rect.height;
   bubble.style.transform=`translate3d(${anchorX}px,${anchorY-14}px,0) translate(-50%,-100%)`;
   visible++;
  }
  container.hidden=visible===0;
 }
 hide();return {update,hide,show,showAll,isActive};
}
