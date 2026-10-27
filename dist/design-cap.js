import * as THREE from './vendor/three.module.js';
import {artCanvas} from './texture-budget.js';
import {renderQuality as quality} from './render-quality.js';
import {settleOnFloor} from './floor-contact.js';

// A six-panel cotton cap, with the reference's irregular three-line embroidery.
// The small procedural textures keep this floor prop cheap to load on phones.
export function createDesignCap(viewer,floorSupport,{worn=false}={}){
 const group=new THREE.Group();group.name='Black DESIGN IS DEAD embroidered cap';
 const [cloth,ctx]=artCanvas(128);ctx.fillStyle='#292a29';ctx.fillRect(0,0,128,128);
 for(let i=-128;i<256;i+=3){ctx.strokeStyle=i%2?'#343534':'#202120';ctx.lineWidth=1;ctx.beginPath();ctx.moveTo(i,0);ctx.lineTo(i+128,128);ctx.stroke();}
 const clothMap=new THREE.CanvasTexture(cloth);clothMap.colorSpace=THREE.SRGBColorSpace;clothMap.wrapS=clothMap.wrapT=THREE.RepeatWrapping;clothMap.repeat.set(5,3);
 const cotton=new THREE.MeshStandardMaterial({map:clothMap,color:0xc1c1bc,roughness:1,emissive:0xffffff,emissiveMap:clothMap,emissiveIntensity:.085,bumpMap:quality.mobile?null:clothMap,bumpScale:.0007,side:THREE.DoubleSide});
 const thread=new THREE.MeshStandardMaterial({color:0x383a36,roughness:1});
 const dark=new THREE.MeshStandardMaterial({color:0x111310,roughness:1});
 function add(geometry,material){const mesh=new THREE.Mesh(geometry,material);mesh.castShadow=true;mesh.receiveShadow=true;group.add(mesh);return mesh;}
 function surface(rows,cols,sample){
  const p=[],uv=[],index=[];
  for(let j=0;j<=rows;j++)for(let i=0;i<=cols;i++){p.push(...sample(i/cols,j/rows));uv.push(i/cols,1-j/rows);}
  for(let j=0;j<rows;j++)for(let i=0;i<cols;i++){const a=j*(cols+1)+i,b=a+cols+1;index.push(a,b,a+1,b,b+1,a+1);}
  const g=new THREE.BufferGeometry();g.setAttribute('position',new THREE.Float32BufferAttribute(p,3));g.setAttribute('uv',new THREE.Float32BufferAttribute(uv,2));g.setIndex(index);g.computeVertexNormals();return g;
 }
 function crown(phi,theta,offset=0){
  const r=Math.pow(Math.sin(theta),.60),seam=1-.012*Math.cos(phi*6)*Math.sin(theta);
  return [(.234+offset)*r*Math.sin(phi)*seam,.032+(.285+offset)*Math.cos(theta),(.205+offset)*r*Math.cos(phi)*seam];
 }
 add(surface(quality.mobile?14:22,quality.mobile?36:60,(u,v)=>crown((u-.5)*Math.PI*2,v*Math.PI/2)),cotton).name='Soft black cotton crown';
 const brim=(u,v)=>{const x=u*2-1,arc=Math.sqrt(Math.max(0,1-x*x)),inner=.045+.145*arc,outer=.15+.27*arc;return [x*(.226+.019*Math.sin(v*Math.PI/2)),.021+.037*x*x-.014*v,THREE.MathUtils.lerp(inner,outer,v)];};
 add(surface(quality.mobile?7:12,quality.mobile?24:40,brim),cotton).name='Curved stitched bill';
 function seam(points,r=.00085,material=thread){return add(new THREE.TubeGeometry(new THREE.CatmullRomCurve3(points.map(p=>new THREE.Vector3(...p))),points.length*2,r,4,false),material);}
 for(let panel=0;panel<6;panel++)seam(Array.from({length:15},(_,i)=>crown(panel*Math.PI/3,i/14*Math.PI/2,.001)));
 for(const v of[.36,.49,.62,.75,.88,.98])seam(Array.from({length:25},(_,i)=>{const p=brim(i/24,v);p[1]+=.0008;return p;}),.00065);
 seam(Array.from({length:49},(_,i)=>crown(i/48*Math.PI*2,Math.PI/2,.0005)),.0023,dark);
 const button=add(new THREE.SphereGeometry(1,16,8),cotton);button.scale.set(.022,.009,.022);button.position.y=.321;
 for(const phi of[-.63,.63,1.9,-1.9]){
  const p=new THREE.Vector3(...crown(phi,.72,.001)),normal=new THREE.Vector3(p.x/.234**2,(p.y-.032)/.285**2,p.z/.205**2).normalize();
  const eyelet=add(new THREE.TorusGeometry(.0062,.0016,4,12),thread);eyelet.position.copy(p);eyelet.quaternion.setFromUnitVectors(new THREE.Vector3(0,0,1),normal);
  const hole=add(new THREE.CircleGeometry(.0046,12),dark);hole.position.copy(p);hole.quaternion.copy(eyelet.quaternion);
 }
 const [letterCanvas,ink]=artCanvas(512,384);
 // Individually drawn letters preserve the reference's wonky spacing and slant.
 const glyphs={
  D:'M 7 2 L 1 64 Q 38 65 43 31 Q 44 4 7 2',
  E:'M 39 3 L 10 1 L 3 62 L 37 63 M 7 30 L 29 30',
  S:'M 39 8 Q 15 -6 9 12 Q 3 26 24 33 Q 48 43 34 60 Q 18 72 2 57',
  I:'M 17 2 L 7 64',
  G:'M 42 11 Q 29 -4 15 6 Q 0 18 3 45 Q 7 70 30 63 Q 45 57 42 36 L 25 36',
  N:'M 3 64 L 10 2 L 35 59 L 43 1',
  A:'M 1 64 L 25 2 L 42 64 M 10 42 L 36 42'
 };
 function letter(char,x,y,scale=1,angle=0){
  ink.save();ink.translate(x,y);ink.rotate(angle);ink.scale(scale,scale);ink.lineCap='round';ink.lineJoin='round';const path=new Path2D(glyphs[char]);
  ink.strokeStyle='#ecece3';ink.lineWidth=7;ink.stroke(path);
  // Short cross-grain fibers roughen the silhouette like satin stitch, not a font.
  ink.strokeStyle='#fffdf4';ink.lineWidth=8.7;ink.setLineDash([1.0,1.9]);ink.stroke(path);ink.restore();
 }
 letter('D',78,37,1.05,.15);letter('E',150,40,.98,-.04);letter('S',222,35,1.08,.05);letter('I',306,40,1.06,.05);letter('G',356,42,1.06,-.05);letter('N',434,40,.98,.03);
 letter('I',218,151,.88,-.04);letter('S',260,147,.92,.02);
 letter('D',113,251,1.11,.08);letter('E',208,250,1.05,.02);letter('A',295,251,1.13,.02);letter('D',390,249,1.13,.04);
 ink.strokeStyle='#f5f4eb';ink.lineWidth=8;ink.lineCap='butt';
 for(const [x,y,dx,dy]of[[36,38,-6,-17],[55,18,-5,-18],[461,239,10,-21],[484,254,9,-20]]){ink.beginPath();ink.moveTo(x,y);ink.lineTo(x+dx,y+dy);ink.stroke();}
 const lettering=new THREE.CanvasTexture(letterCanvas);lettering.colorSpace=THREE.SRGBColorSpace;lettering.anisotropy=quality.mobile?2:4;
 const embroidery=new THREE.MeshStandardMaterial({map:lettering,transparent:true,alphaTest:.15,emissive:0xffffff,emissiveMap:lettering,emissiveIntensity:.10,roughness:.95,bumpMap:quality.mobile?null:lettering,bumpScale:.0008,side:THREE.DoubleSide,depthWrite:false});
 add(surface(14,32,(u,v)=>crown((u-.5)*1.68,.49+v*1.00,.0018)),embroidery).name='White DESIGN / IS / DEAD embroidery with quotation marks';
 if(worn)return group;
 group.position.set(-.80,0,-.65);group.rotation.set(-.04,Math.atan2(viewer.x-group.position.x,viewer.z-group.position.z)-.91,0,'YXZ');
 settleOnFloor(group,floorSupport);
 // A soft contact footprint also grounds the bill with mobile shadows disabled.
 const [shadowCanvas,shade]=artCanvas(64);const gradient=shade.createRadialGradient(32,32,9,32,32,31);gradient.addColorStop(0,'rgba(0,0,0,.66)');gradient.addColorStop(1,'rgba(0,0,0,0)');shade.fillStyle=gradient;shade.fillRect(0,0,64,64);
 const shadow=add(new THREE.PlaneGeometry(.60,.73),new THREE.MeshBasicMaterial({map:new THREE.CanvasTexture(shadowCanvas),transparent:true,depthWrite:false}));shadow.rotation.x=-Math.PI/2+.04;const footprint=group.localToWorld(new THREE.Vector3(0,0,.09));footprint.y=floorSupport(footprint.x,footprint.z)+.0001;shadow.position.copy(group.worldToLocal(footprint));shadow.castShadow=false;shadow.userData.ignoreFloorContact=true;shadow.raycast=()=>{};
 return group;
}
