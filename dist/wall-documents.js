import * as THREE from './vendor/three.module.js';
import {renderQuality as quality} from './render-quality.js';
const specs=[['org-chart','Figpal Labs — people & practice',1600,1100],['onboarding','Onboarding wireframes',1600,1000],['workspace','Workspace design review',1600,1000],['planning','Sprint planning whiteboard',1600,1020],...Array.from({length:8},(_,i)=>[`note-${i}`,['Research note','Product planning note','Design note','Engineering note','Review note','Sprint checklist','Retrospective note','Content note'][i],480,500])];
export async function createWallDocuments(){
 const entries=new Map(),targets=[];
 await Promise.all(specs.map(async([id,title,width,height])=>{
  const src=`./assets/documents/${id}.svg`,image=new Image();image.decoding='async';image.src=src;
  await image.decode();const scale=Math.min(1,(quality.mobile?256:1024)/Math.max(width,height));
  const c=document.createElement('canvas');c.width=Math.round(width*scale);c.height=Math.round(height*scale);c.getContext('2d').drawImage(image,0,0,c.width,c.height);
  const map=new THREE.CanvasTexture(c);map.colorSpace=THREE.SRGBColorSpace;map.anisotropy=quality.mobile?2:4;
  entries.set(id,{id,title,src,width,height,map,description:id==='org-chart'?'Figpal Labs organization chart. Cappy the capybara is CEO. Byte the snake is CTO, with Stack the blocks as Engineering Lead and Maki the sushi as Frontend Developer. Pixel the cat is VP of Design, with Pudding as Product Designer and Page the book as UX Designer. Toast is Chief Product Officer, with Puff the fish in the black DESIGN IS DEAD hat as Product Manager and Bloom the sunflower in Product Operations.':title});
 }));
 function tag(object,id){object.userData.wallDocument=id;object.name=entries.get(id).title;targets.push(object);return object;}
 return {entries,targets,tag,map:id=>entries.get(id).map};
}

// Vector artwork is decoded at full detail only while inspecting it. In-room GPU
// textures remain small; zoom never uploads a giant wall texture on a phone.
export function createDocumentViewer({documents,onOpen=()=>{},onClose=()=>{}}){
 const dialog=document.querySelector('#document-viewer'),stage=dialog.querySelector('.document-stage'),image=dialog.querySelector('img'),title=dialog.querySelector('h2'),readout=dialog.querySelector('output');
 let zoom=1,x=0,y=0,fit=1,width=1,height=1,url=null,previousFocus=null;
 const pointers=new Map();let gesture=null;
 function bounds(){return {w:stage.clientWidth,h:stage.clientHeight};}
 function paint(){const b=bounds();x=THREE.MathUtils.clamp(x,-Math.max(0,(width*fit*zoom-b.w)/2)-28,Math.max(0,(width*fit*zoom-b.w)/2)+28);y=THREE.MathUtils.clamp(y,-Math.max(0,(height*fit*zoom-b.h)/2)-28,Math.max(0,(height*fit*zoom-b.h)/2)+28);image.style.width=`${width*fit}px`;image.style.height=`${height*fit}px`;image.style.transform=`translate(calc(-50% + ${x}px),calc(-50% + ${y}px)) scale(${zoom})`;readout.textContent=`${Math.round(zoom*100)}%`;}
 function resize(){const b=bounds();fit=Math.min((b.w-32)/width,(b.h-32)/height);paint();}
 function scaleTo(value,px=0,py=0){const next=THREE.MathUtils.clamp(value,1,6),ratio=next/zoom;x=px+(x-px)*ratio;y=py+(y-py)*ratio;zoom=next;paint();}
 function show(entry){
  if(!entry)return;onOpen();previousFocus=document.activeElement;
  if(url)URL.revokeObjectURL(url);url=null;
  if(entry.svg){url=URL.createObjectURL(new Blob([entry.svg],{type:'image/svg+xml'}));image.src=url;}else image.src=entry.src;
  width=entry.width;height=entry.height;image.alt=entry.description||entry.title;title.textContent=entry.title;zoom=1;x=y=0;
  dialog.showModal();resize();dialog.querySelector('[data-document="close"]').focus({preventScroll:true});
 }
 function hide(){if(!dialog.open)return;dialog.close();pointers.clear();gesture=null;image.removeAttribute('src');if(url){URL.revokeObjectURL(url);url=null;}onClose();previousFocus?.focus({preventScroll:true});}
 dialog.addEventListener('cancel',e=>{e.preventDefault();hide();});
 dialog.addEventListener('click',e=>{const action=e.target.closest('[data-document]')?.dataset.document;if(action==='close')hide();if(action==='in')scaleTo(zoom*1.4);if(action==='out')scaleTo(zoom/1.4);if(action==='fit'){zoom=1;x=y=0;resize();}});
 dialog.addEventListener('keydown',e=>{e.stopPropagation();if(e.key==='+'||e.key==='='){e.preventDefault();scaleTo(zoom*1.25);}if(e.key==='-'){e.preventDefault();scaleTo(zoom/1.25);}if(e.key.startsWith('Arrow')){e.preventDefault();if(e.key==='ArrowLeft')x+=45;if(e.key==='ArrowRight')x-=45;if(e.key==='ArrowUp')y+=45;if(e.key==='ArrowDown')y-=45;paint();}});
 stage.addEventListener('wheel',e=>{e.preventDefault();const r=stage.getBoundingClientRect();scaleTo(zoom*Math.exp(-e.deltaY*.002),e.clientX-r.left-r.width/2,e.clientY-r.top-r.height/2);},{passive:false});
 function capture(){const p=[...pointers.values()];gesture=p.length>1?{x:(p[0].x+p[1].x)/2,y:(p[0].y+p[1].y)/2,d:Math.hypot(p[0].x-p[1].x,p[0].y-p[1].y)}:p[0]||null;}
 stage.addEventListener('pointerdown',e=>{if(e.button!==0)return;e.preventDefault();stage.setPointerCapture(e.pointerId);pointers.set(e.pointerId,{x:e.clientX,y:e.clientY});capture();});
 stage.addEventListener('pointermove',e=>{if(!pointers.has(e.pointerId))return;const last=gesture;pointers.set(e.pointerId,{x:e.clientX,y:e.clientY});capture();if(last&&gesture){x+=gesture.x-last.x;y+=gesture.y-last.y;if(gesture.d&&last.d){const r=stage.getBoundingClientRect();scaleTo(zoom*gesture.d/last.d,gesture.x-r.left-r.width/2,gesture.y-r.top-r.height/2);}else paint();}});
 for(const type of['pointerup','pointercancel','lostpointercapture'])stage.addEventListener(type,e=>{pointers.delete(e.pointerId);capture();});
 stage.addEventListener('dblclick',e=>{e.preventDefault();scaleTo(zoom>1?1:2.5);});
 const observer=new ResizeObserver(()=>{if(dialog.open)resize();});observer.observe(stage);
 return {show:id=>show(typeof id==='string'?documents.entries.get(id):id),hide,get active(){return dialog.open;}};
}
