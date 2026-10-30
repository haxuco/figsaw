import * as THREE from './vendor/three.module.js';
import {artCanvas} from './texture-budget.js';
import {batchStaticScenery} from './static-batching.js';

// Built in door-frame coordinates: negative Z is outside the haunted office.
// Baked-looking materials keep the bright space independent of the failing
// room lights, without adding shadows or another set of real-time lights.
export function createCoworkingHallway(){
 const group=new THREE.Group();group.name='Bright coworking hallway beyond the exit';group.userData.ignoreAcid=true;group.position.z=-.25;
 const materials=new Map(),cube=new THREE.BoxGeometry(1,1,1);
 function mat(color){if(!materials.has(color))materials.set(color,new THREE.MeshBasicMaterial({color,toneMapped:false,fog:false}));return materials.get(color);}
 function add(geo,material,pos,parent=group){const m=new THREE.Mesh(geo,material);m.position.set(...pos);parent.add(m);return m;}
 function box(size,pos,color,parent=group){const m=add(cube,mat(color),pos,parent);m.scale.set(...size);return m;}
 function picture(w,h,pos,draw){
  const[c,ctx]=artCanvas(768,384,512);draw(ctx);const map=new THREE.CanvasTexture(c);map.colorSpace=THREE.SRGBColorSpace;
  const material=new THREE.MeshBasicMaterial({map,toneMapped:false,fog:false});return add(new THREE.PlaneGeometry(w,h),material,pos);
 }
 // An uninterrupted central aisle fits all three linked chairs, past the exit.
 box([5.5,.08,8.5],[0,-.04,-4.24],0xcbb99a);
 box([1.04,.025,.18],[0,-.0125,.09],0xcbb99a);
 box([5.5,3.16,.10],[0,1.58,-8.5],0xf7f4ec);
 box([.10,3.16,8.5],[-2.75,1.58,-4.24],0xe8e4db);
 box([.10,3.16,8.5],[2.75,1.58,-4.24],0xf4f1e9);
 box([5.5,.08,8.5],[0,3.16,-4.24],0xe1e2dd);
 const floor=picture(5.48,8.48,[0,.001,-4.24],ctx=>{
  ctx.fillStyle='#d7c6a9';ctx.fillRect(0,0,768,384);
  for(let x=0;x<768;x+=48){
   ctx.fillStyle=x%96?'#d2bfa0':'#dfcfb3';ctx.fillRect(x,0,47,384);
   ctx.fillStyle='#b9a88e';ctx.fillRect(x,0,1,384);
   for(let y=-96+(x%96);y<384;y+=144){ctx.fillStyle='#baa98c';ctx.fillRect(x,y,48,1);}
   for(let j=0;j<9;j++){ctx.strokeStyle=j%2?'#d0bd9e':'#e0d0b4';ctx.lineWidth=.5;ctx.beginPath();ctx.moveTo(x+4+j*5,0);ctx.bezierCurveTo(x+7+j*5,120,x+j*5,240,x+4+j*5,384);ctx.stroke();}
  }
 });floor.rotation.x=-Math.PI/2;
 // Soft pools of ceiling light are static translucent decals, not light passes.
 const[glow,ink]=artCanvas(64,64);const gradient=ink.createRadialGradient(32,32,0,32,32,32);gradient.addColorStop(0,'rgba(255,250,226,.42)');gradient.addColorStop(1,'rgba(255,250,226,0)');ink.fillStyle=gradient;ink.fillRect(0,0,64,64);
 const glowMap=new THREE.CanvasTexture(glow),glowMat=new THREE.MeshBasicMaterial({map:glowMap,transparent:true,depthWrite:false,toneMapped:false,fog:false});
 for(const z of[-1.5,-3.7,-5.9,-7.9]){
  box([.09,.035,1.4],[0,3.10,z],0xd9d7d0);box([.055,.012,1.36],[0,3.074,z],0xffffff);
  const pool=add(new THREE.PlaneGeometry(2.4,2.5),glowMat,[0,.004,z]);pool.rotation.x=-Math.PI/2;
 }
 const glass=new THREE.MeshBasicMaterial({color:0xb3d4cf,transparent:true,opacity:.23,depthWrite:false,side:THREE.DoubleSide,toneMapped:false,fog:false});
 for(const side of[-1,1]){
  box([.035,.10,8.4],[side*2.685,.05,-4.24],0xa6a5a0);
  // Black-framed glass meeting rooms, with furniture visible through the panes.
  for(const z of[-2.6,-5.3]){
   box([1.08,.10,2.35],[side*2.12,.05,z],0xc2bcb1);
   const pane=add(new THREE.PlaneGeometry(2.36,2.64),glass,[side*1.60,1.37,z]);pane.rotation.y=Math.PI/2;
   box([.72,.055,1.25],[side*2.18,.75,z],0xdac3a0);
   for(const dz of[-.46,.46])box([.04,.72,.04],[side*2.18,.36,z+dz],0x6b706a);
   for(const dz of[-.87,.87]){box([.43,.075,.39],[side*2.18,.45,z+dz],0x717d74);box([.43,.40,.06],[side*2.18,.66,z+dz+Math.sign(dz)*.18],0x84958a);}
   for(const dz of[-1.20,0,1.20])box([.045,2.72,.035],[side*1.58,1.38,z+dz],0x353b3a);
   for(const y of[.02,2.74])box([.045,.04,2.43],[side*1.58,y,z],0x353b3a);
   // Reflections and the horizontal privacy band make the glazing readable.
   box([.049,.17,2.36],[side*1.58,1.25,z],0xd9e4df);
   for(const dz of[-.84,.31])box([.051,1.07,.017],[side*1.58,1.99,z+dz],0xe7eeea);
   box([.065,.32,.025],[side*1.55,1.08,z+.18],0x404743);
   const room=picture(.35,.15,[side*1.545,1.67,z-.55],ctx=>{ctx.fillStyle='#34423f';ctx.fillRect(0,0,768,384);ctx.fillStyle='#f4f4e9';ctx.font='500 98px Arial';ctx.textAlign='center';ctx.fillText(z===-2.6?'MEET 01':'MEET 02',384,230);});room.rotation.y=side<0?Math.PI/2:-Math.PI/2;
  }
 }
 // Reception at the end of the corridor: pale oak slats and a simple wordmark.
 box([3.1,2.90,.10],[0,1.50,-8.36],0xbda681);
 for(let i=0;i<32;i++)box([.050,2.90,.045],[-1.50+i*.097,1.50,-8.285],i%3?0xd2bb96:0xcab28c);
 picture(1.75,.875,[0,2.15,-8.25],ctx=>{
  ctx.fillStyle='#f5f1e8';ctx.fillRect(0,0,768,384);ctx.fillStyle='#303934';ctx.textAlign='center';ctx.font='700 64px Arial, sans-serif';ctx.fillText('NosotrosTrabajamos',384,185,704);ctx.font='500 24px Arial';ctx.fillText('MAKE A LIFE, NOT JUST A LIVING.',384,254);
 });
 box([2.35,.94,.64],[0,.47,-7.45],0xdac4a3);box([2.43,.06,.72],[0,.97,-7.45],0xfaf8ee);
 box([2.20,.06,.04],[0,.085,-7.11],0x9d8c73);
 box([.40,.26,.035],[.45,1.14,-7.47],0x3c4442);box([.06,.08,.06],[.45,1.01,-7.47],0x454c47);
 // The small lounge is outside the door's swept volume and the towing aisle.
 for(const x of[-2.05,2.05]){
  box([.78,.10,1.40],[x,.18,-.85],0x766e60);box([.80,.20,1.40],[x,.33,-.85],0xc99d68);
  box([.16,.48,1.40],[x+Math.sign(x)*.35,.53,-.85],0xd5ae79);
  for(const z of[-1.39,-.31])box([.05,.18,.05],[x,.09,z],0x514e47);
 }
 const leafGeo=new THREE.SphereGeometry(1,8,5);
 for(const [x,z]of[[-2.05,-6.75],[2.05,-6.75],[-2.17,-1.95]]){
  add(new THREE.CylinderGeometry(.21,.16,.42,12),mat(0xdfd9cc),[x,.21,z]);
  add(new THREE.CylinderGeometry(.185,.185,.015,12),mat(0x514d3e),[x,.425,z]);
  for(let i=0;i<9;i++){
   const a=i*2.40,leaf=add(leafGeo,mat(i%2?0x607a4c:0x3e6549),[x+Math.sin(a)*.16,.58+(i%3)*.17,z+Math.cos(a)*.16]);leaf.scale.set(.10,.27,.055);leaf.rotation.set(Math.cos(a)*.5,a,Math.sin(a)*.5);
  }
 }
 batchStaticScenery(group,{minObjects:2,palette:true});
 return group;
}

// Overlay UVs still cover the original wall, but never bridge the open doorway.
export function entranceWallOverlayGeometry(){
 const positions=[],uvs=[];
 for(const [left,right,bottom,top]of[[-3.9,.64,0,3.35],[1.76,3.9,0,3.35],[.64,1.76,2.36,3.35]]){
  for(const [x,y]of[[left,bottom],[right,bottom],[right,top],[left,bottom],[right,top],[left,top]]){positions.push(x,y-1.675,0);uvs.push((x+3.9)/7.8,y/3.35);}
 }
 const geo=new THREE.BufferGeometry();geo.setAttribute('position',new THREE.Float32BufferAttribute(positions,3));geo.setAttribute('uv',new THREE.Float32BufferAttribute(uvs,2));geo.computeVertexNormals();return geo;
}
