import * as THREE from './vendor/three.module.js';
import {artCanvas} from './texture-budget.js';
import {renderQuality as quality} from './render-quality.js';

// Shared baked textures add decay without extra frame-time work or large maps.
export function createWallDecay(){
 let seed=81963;const random=()=>{seed=(seed*1664525+1013904223)>>>0;return seed/4294967296;},range=(a,b)=>a+(b-a)*random();
 function map(kind){
  const[c,p]=artCanvas(512,512,quality.mobile?256:512);p.fillStyle={cork:'#625236',frame:'#565447',tape:'#a18c56'}[kind];p.fillRect(0,0,512,512);
  for(let i=0;i<320;i++){
   const x=random()*512,y=random()*512,r=range(3,45),g=p.createRadialGradient(x,y,0,x,y,r);
   g.addColorStop(0,i%3?'rgba(26,34,21,.45)':'rgba(127,64,24,.5)');g.addColorStop(1,'rgba(35,35,20,0)');p.fillStyle=g;p.fillRect(x-r,y-r,r*2,r*2);
  }
  for(let i=0;i<2600;i++){p.fillStyle=i%4?'rgba(14,24,14,.28)':'rgba(185,155,96,.32)';p.fillRect(random()*512,random()*512,range(1,kind==='cork'?7:3),range(1,4));}
  if(kind==='frame')for(let i=0;i<80;i++){const x=random()*512,y=random()*512;p.fillStyle=i%3?'#3f3526':'#95866b';p.fillRect(x,y,range(2,14),range(1,4));}
  if(kind==='tape'){p.fillStyle='rgba(61,54,24,.32)';p.fillRect(0,0,512,27);p.fillRect(0,480,512,32);for(let i=0;i<40;i++){p.strokeStyle='rgba(228,206,149,.25)';p.beginPath();p.moveTo(0,i*13);p.lineTo(512,i*13+3);p.stroke();}}
  const t=new THREE.CanvasTexture(c);t.colorSpace=THREE.SRGBColorSpace;t.anisotropy=2;return t;
 }
 const corkMap=map('cork'),frameMap=map('frame'),tapeMap=map('tape');
 const cork=new THREE.MeshStandardMaterial({map:corkMap,roughness:1,bumpMap:quality.mobile?null:corkMap,bumpScale:.008});
 const frame=new THREE.MeshStandardMaterial({map:frameMap,metalness:.32,roughness:.89});
 const tape=new THREE.MeshStandardMaterial({map:tapeMap,roughness:1,side:THREE.DoubleSide});
 const webMaterial=new THREE.LineBasicMaterial({color:0xa7a58b,transparent:true,opacity:.20,depthWrite:false});
 function cobweb(parent,w,h,z,side=1,y=0){
  const points=[],origin=new THREE.Vector3(side*w/2,y+h/2,z),r=Math.min(w,h)*.26,rays=7;
  const point=(a,d)=>new THREE.Vector3(origin.x-side*Math.cos(a)*d,origin.y-Math.sin(a)*d,z+.012*Math.sin(a*2));
  for(let i=0;i<rays;i++){const a=i/(rays-1)*Math.PI/2;points.push(origin,point(a,r*(.75+random()*.25)));}
  for(let ring=1;ring<=6;ring++)for(let i=0;i<rays-1;i++){const a=i/(rays-1)*Math.PI/2,b=(i+1)/(rays-1)*Math.PI/2,d=r*ring/6;points.push(point(a,d),point((a+b)/2,d*.88),point((a+b)/2,d*.88),point(b,d));}
  const web=new THREE.LineSegments(new THREE.BufferGeometry().setFromPoints(points),webMaterial);web.name='Dusty cobweb on neglected notice board';web.raycast=()=>{};parent.add(web);return web;
 }
 return {cork,frame,tape,cobweb};
}

export function wornPaperGeometry(w,h,variant=0){
 const geo=new THREE.PlaneGeometry(w,h,8,10),p=geo.attributes.position;
 for(let i=0;i<p.count;i++){
  let x=p.getX(i),y=p.getY(i);const u=x/w+.5,v=.5-y/h;
  if(Math.abs(x)>w*.49)x-=Math.sign(x)*(Math.sin(i*19+variant)*.5+.5)*w*.022;
  if(Math.abs(y)>h*.49)y-=Math.sign(y)*(Math.sin(i*13+variant)*.5+.5)*h*.018;
  const curl=Math.pow(Math.max(0,v-.56),2)*h*.42*(.5+u)+Math.sin(u*8+variant)*Math.sin(v*Math.PI)*w*.007;
  p.setXYZ(i,x,y,curl);
 }
 geo.computeVertexNormals();return geo;
}
