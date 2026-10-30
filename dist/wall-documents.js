import * as THREE from './vendor/three.module.js';
import {createObjectInspectionCamera} from './object-inspection-camera.js';
import {renderQuality as quality} from './render-quality.js';
const specs=[['org-chart','Figpal Labs — people & practice',1600,1100],['onboarding','Onboarding wireframes',1600,1000],['workspace','Workspace design review',1600,1000],['planning','Sprint planning whiteboard',1600,1020],...Array.from({length:8},(_,i)=>[`note-${i}`,['Research note','Product planning note','Design note','Engineering note','Review note','Sprint checklist','Retrospective note','Content note'][i],480,500])];
export async function createWallDocuments(puzzle){
 const entries=new Map(),targets=[];
 // Start the randomized chart and static artwork together, rather than making
 // every poster wait for the chart's SVG request and parse.
 const templateRequest=fetch('./assets/documents/org-chart.svg?v=haunted-wear-2').then(r=>r.text());
 let orgTemplate;
 let orgUrl=null,orgRevision=0;
 function orgSource(){
  const xml=new DOMParser().parseFromString(orgTemplate,'image/svg+xml'),names=['Pudding','Maki','Puff'];
  const cards=names.map(name=>[...xml.querySelectorAll('text')].find(t=>t.textContent===name).parentElement);
  const positions=Object.fromEntries(cards.map(card=>[[...card.children].find(n=>n.tagName==='text'&&n.getAttribute('y')==='101').textContent,card.getAttribute('transform')]));
  cards.forEach((card,i)=>{const role=puzzle?.roles[i]??['Product Designer','Frontend Developer','Product Manager'][i];card.setAttribute('transform',positions[role]);[...card.children].find(n=>n.tagName==='text'&&n.getAttribute('y')==='101').textContent=role;});
  const old=orgUrl;orgUrl=URL.createObjectURL(new Blob([new XMLSerializer().serializeToString(xml)],{type:'image/svg+xml'}));if(old)URL.revokeObjectURL(old);return orgUrl;
 }

 await Promise.all(specs.map(async([id,title,width,height])=>{
  if(id==='org-chart')orgTemplate=await templateRequest;
  const src=id==='org-chart'?orgSource():`./assets/documents/previews/${id}-${quality.mobile?256:1024}.webp`,image=new Image();image.decoding='async';image.src=src;
  await image.decode();const scale=Math.min(1,(quality.mobile?256:1024)/Math.max(width,height));
  const c=document.createElement('canvas');c.width=Math.round(width*scale);c.height=Math.round(height*scale);c.getContext('2d').drawImage(image,0,0,c.width,c.height);
  const map=new THREE.CanvasTexture(c);map.colorSpace=THREE.SRGBColorSpace;map.anisotropy=quality.mobile?2:4;
  entries.set(id,{id,title,src,detailSrc:id==='org-chart'?null:`./assets/documents/previews/${id}-1600.webp`,width,height,map,description:title});
 }));
 function tag(object,id){object.userData.wallDocument=id;object.name=entries.get(id).title;targets.push(object);return object;}
 async function refreshRoles(){
  const request=++orgRevision,entry=entries.get('org-chart');entry.src=orgSource();const image=new Image();image.src=entry.src;await image.decode();if(request!==orgRevision)return;
  const c=entry.map.image;c.getContext('2d').clearRect(0,0,c.width,c.height);c.getContext('2d').drawImage(image,0,0,c.width,c.height);entry.map.needsUpdate=true;
 }
 return {entries,targets,tag,refreshRoles,map:id=>entries.get(id).map};
}

// Keep a small, bounded detail cache so reopening a poster doesn't decode and
// upload it again. Mobile retains one large map; desktop retains two.
export function createDocumentViewer({documents,position,state,aspect,baseFov,scene,light=null,onOpen=()=>{},onClose=()=>{}}){
 const camera=createObjectInspectionCamera({position,state,aspect,baseFov});
 if(!light){light=new THREE.PointLight(0xd3d5b8,0,8,2);light.userData.mobileEssential=true;scene.add(light);}
 const maps=new Map(),capacity=quality.mobile?1:2;
 let detail=null,revision=0;
 function releaseDetail(){revision++;if(detail){detail.target.material=detail.original;detail.material.dispose();detail=null;}}
 async function sharpen(target){
  const entry=documents.entries.get(target.userData.wallDocument);if(!entry)return;
  const request=revision,src=entry.detailSrc??entry.src;let map=maps.get(src);
  if(map){maps.delete(src);maps.set(src,map);}
  else{
   const image=new Image();image.decoding='async';image.src=src;await image.decode();if(request!==revision)return;
   map=new THREE.Texture(image);map.colorSpace=THREE.SRGBColorSpace;map.anisotropy=quality.mobile?2:4;map.needsUpdate=true;
   maps.set(src,map);
   while(maps.size>capacity){const oldest=maps.keys().next().value;maps.get(oldest).dispose();maps.delete(oldest);}
  }
  const original=target.material,material=original.clone();material.map=map;if(material.emissiveMap)material.emissiveMap=map;target.material=material;detail={target,original,material,map};
 }
 function show(target){if(!target)return;onOpen();releaseDetail();camera.show(target,state.time);sharpen(target).catch(()=>{});}
 function hide(immediate=true){if(!camera.active)return;releaseDetail();camera.restore(state.time,immediate);onClose();}
 return {show,hide,drag:camera.drag,setZoom:camera.setZoom,update(time,reducedMotion){camera.update(time,reducedMotion);light.position.copy(position);light.color.setHex(0xd3d5b8);light.distance=8;light.intensity=camera.active?.65:0;},get zoom(){return camera.zoom;},get active(){return camera.active;},get returning(){return camera.returning;},get origin(){return camera.origin;},get target(){return camera.target;}};
}
