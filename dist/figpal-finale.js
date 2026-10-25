import * as THREE from './vendor/three.module.js';

export const FIGPAL_PLEAS=['Nooo!!!!','Tell my wife that I love her!','Delete my browser history!'];

// A state transition, rather than a repeating zero-second action or a toggle.
export function createFinaleCue(hoists){
 let startedAt=null;
 return {
  update(status,time){
   if(status!=='finished'||startedAt!==null)return false;
   startedAt=time;hoists.lowerAll();return true;
  },
  reset(){if(startedAt!==null)hoists.reset();startedAt=null;},
  get active(){return startedAt!==null;},
  elapsed(time){return startedAt===null?-1:Math.max(0,time-startedAt);}
 };
}

// Pack horizontally in camera order, including when all vats project near an edge.
export function layoutFigpalBubbles(items,rect){
 items.sort((a,b)=>a.anchorX-b.anchorX);
 let edge=rect.left+10;
 for(const item of items){item.x=Math.max(item.x,edge);edge=item.x+item.width+8;}
 edge=rect.right-10;
 for(let i=items.length-1;i>=0;i--){const item=items[i];item.x=Math.min(item.x,edge-item.width);edge=item.x-8;}
 return items;
}

// Compact screen-space bubbles stay legible while their anchors descend in 3D.
export function createFigpalBubbles(anchors,canvas){
 const container=document.querySelector('#figpal-dialogues');
 const bubbles=FIGPAL_PLEAS.map((line,index)=>{
  const wrapper=document.createElement('div');wrapper.className='figpal-speech';wrapper.hidden=true;
  wrapper.dataset.figpal=String(index+1);
  const text=document.createElement('span');text.className='figpal-speech-text';text.textContent=line;
  const tail=document.createElementNS('http://www.w3.org/2000/svg','svg');tail.classList.add('figpal-speech-tail');tail.setAttribute('aria-hidden','true');
  const path=document.createElementNS('http://www.w3.org/2000/svg','path');tail.append(path);
  wrapper.append(text,tail);container.append(wrapper);return wrapper;
 });
 const point=new THREE.Vector3();
 function hide(){container.hidden=true;for(const bubble of bubbles)bubble.hidden=true;}
 function update(camera,elapsed){
  if(elapsed<0||elapsed>=15){hide();return;}
  container.hidden=false;container.style.opacity=String(1-THREE.MathUtils.smoothstep(elapsed,13,15));
  const rect=canvas.getBoundingClientRect(),visible=[];
  for(let i=0;i<anchors.length;i++){
   const bubble=bubbles[i];anchors[i].getWorldPosition(point);
   // Last words remain just above the water rather than vanishing behind the vat.
   point.y=Math.max(point.y,1.32);point.project(camera);
   if(point.z<-1||point.z>1||Math.abs(point.x)>1.04||Math.abs(point.y)>1.1){bubble.hidden=true;continue;}
   bubble.hidden=false;
   const width=bubble.offsetWidth,height=bubble.offsetHeight;
   const anchorX=rect.left+(point.x*.5+.5)*rect.width,anchorY=rect.top+(-point.y*.5+.5)*rect.height;
   visible.push({bubble,width,height,anchorX,anchorY,x:THREE.MathUtils.clamp(anchorX-width/2,rect.left+10,rect.right-width-10),y:Math.max(rect.top+10,anchorY-height-14)});
  }
  for(const item of layoutFigpalBubbles(visible,rect)){
   const tailX=THREE.MathUtils.clamp(item.anchorX-item.x,12,item.width-12);
   const length=Math.max(10,Math.min(85,item.anchorY-item.y-item.height));
   item.bubble.style.transform=`translate3d(${item.x}px,${item.y}px,0)`;
   // The leader still points to its own Figpal after the boxes are spread apart.
   item.bubble.querySelector('path').setAttribute('d',`M ${tailX-5} 0 L ${tailX+6} 0 L ${item.anchorX-item.x} ${length} Z`);
  }
 }
 hide();return {update,hide};
}
