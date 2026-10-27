import * as THREE from './vendor/three.module.js';
import {createObjectInspectionCamera} from './object-inspection-camera.js';
import {renderQuality as quality} from './render-quality.js';
const specs=[['org-chart','Figpal Labs — people & practice',1600,1100],['onboarding','Onboarding wireframes',1600,1000],['workspace','Workspace design review',1600,1000],['planning','Sprint planning whiteboard',1600,1020],...Array.from({length:8},(_,i)=>[`note-${i}`,['Research note','Product planning note','Design note','Engineering note','Review note','Sprint checklist','Retrospective note','Content note'][i],480,500])];
export async function createWallDocuments(){
 const entries=new Map(),targets=[];
 await Promise.all(specs.map(async([id,title,width,height])=>{
  const src=`./assets/documents/${id}.svg?v=haunted-wear-2`,image=new Image();image.decoding='async';image.src=src;
  await image.decode();const scale=Math.min(1,(quality.mobile?256:1024)/Math.max(width,height));
  const c=document.createElement('canvas');c.width=Math.round(width*scale);c.height=Math.round(height*scale);c.getContext('2d').drawImage(image,0,0,c.width,c.height);
  const map=new THREE.CanvasTexture(c);map.colorSpace=THREE.SRGBColorSpace;map.anisotropy=quality.mobile?2:4;
  entries.set(id,{id,title,src,width,height,map,description:id==='org-chart'?'Figpal Labs organization chart. Cappy the capybara is CEO. Byte the snake is CTO, with Stack the blocks as Engineering Lead and Maki the sushi as Frontend Developer. Pixel the cat is VP of Design, with Pudding as Product Designer and Page the book as UX Designer. Toast is Chief Product Officer, with Puff the fish in the black DESIGN IS DEAD hat as Product Manager and Bloom the sunflower in Product Operations.':title});
 }));
 function tag(object,id){object.userData.wallDocument=id;object.name=entries.get(id).title;targets.push(object);return object;}
 return {entries,targets,tag,map:id=>entries.get(id).map};
}

// Only the inspected physical poster gets a high-resolution texture. Restore
// and dispose it on exit rather than keeping every wall-sized map in GPU memory.
export function createDocumentViewer({documents,position,state,aspect,baseFov,scene,onOpen=()=>{},onClose=()=>{}}){
 const camera=createObjectInspectionCamera({position,state,aspect,baseFov});
 const light=new THREE.PointLight(0xd3d5b8,0,8,2);light.userData.mobileEssential=true;scene.add(light);
 let detail=null,revision=0;
 function releaseDetail(){revision++;if(detail){detail.target.material=detail.original;detail.material.dispose();detail.map.dispose();detail=null;}}
 async function sharpen(target){
  const entry=documents.entries.get(target.userData.wallDocument);if(!entry)return;
  const request=revision,image=new Image();image.src=entry.src;await image.decode();if(request!==revision)return;
  const c=document.createElement('canvas'),scale=Math.min(1,(quality.mobile?1600:2048)/Math.max(entry.width,entry.height));c.width=Math.round(entry.width*scale);c.height=Math.round(entry.height*scale);c.getContext('2d').drawImage(image,0,0,c.width,c.height);
  const map=new THREE.CanvasTexture(c);map.colorSpace=THREE.SRGBColorSpace;map.anisotropy=quality.mobile?2:4;
  const original=target.material,material=original.clone();material.map=map;if(material.emissiveMap)material.emissiveMap=map;target.material=material;detail={target,original,material,map};
 }
 function show(target){if(!target)return;onOpen();releaseDetail();camera.show(target,state.time);sharpen(target).catch(()=>{});}
 function hide(immediate=true){if(!camera.active)return;releaseDetail();camera.restore(state.time,immediate);onClose();}
 return {show,hide,drag:camera.drag,setZoom:camera.setZoom,update(time,reducedMotion){camera.update(time,reducedMotion);light.position.copy(position);light.intensity=camera.active?.65:0;},get zoom(){return camera.zoom;},get active(){return camera.active;},get returning(){return camera.returning;},get origin(){return camera.origin;},get target(){return camera.target;}};
}
