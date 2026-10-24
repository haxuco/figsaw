import * as THREE from './vendor/three.module.js';

const $ = (s) => document.querySelector(s);
const canvas = $('#scene');
const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;
const homeView={yaw:.48,pitch:.22};
const state = { mouth:0, jaw:0, mood:'happy', env:'day', dusk:0, yaw:homeView.yaw, pitch:homeView.pitch, zoom:1, drag:false, helloUntil:0, space:false, sound:false, time:0, tapUntil:0 };
let renderer;
try { renderer = new THREE.WebGLRenderer({canvas,antialias:true,alpha:true,preserveDrawingBuffer:true}); }
catch(error) { $('#loading').classList.add('hidden'); $('#error').classList.remove('hidden'); throw error; }
renderer.setPixelRatio(Math.min(devicePixelRatio,2));
renderer.shadowMap.enabled=true;
renderer.localClippingEnabled=true;
renderer.shadowMap.type=THREE.PCFSoftShadowMap;
renderer.outputColorSpace=THREE.SRGBColorSpace;
renderer.toneMapping=THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure=1.08;
const scene=new THREE.Scene();
const camera=new THREE.PerspectiveCamera(36,1,.1,80);
const cameraTarget=new THREE.Vector3(0,1.38,0);
const hemi=new THREE.HemisphereLight(0xf6fbf0,0x9d9877,2.1);scene.add(hemi);
const sun=new THREE.DirectionalLight(0xfff3d9,3.3);sun.position.set(-3.5,7,5);sun.castShadow=true;
sun.shadow.mapSize.set(2048,2048);sun.shadow.camera.left=-6;sun.shadow.camera.right=6;sun.shadow.camera.top=6;sun.shadow.camera.bottom=-6;sun.shadow.normalBias=.035;sun.shadow.bias=-.00015;sun.shadow.radius=4;scene.add(sun);
const fill=new THREE.DirectionalLight(0xd4e5c7,1.5);fill.position.set(4,3,-3);scene.add(fill);
const warm=new THREE.PointLight(0xffcb83,0,12);warm.position.set(-2,2,2);scene.add(warm);

let seed=24;
function random(){ seed=(seed*1664525+1013904223)>>>0;return seed/4294967296; }
const mix=THREE.MathUtils.lerp;
const materials={};
function mat(color,roughness=.9){ return new THREE.MeshStandardMaterial({color,roughness}); }
function mesh(geometry,material,parent=scene){const m=new THREE.Mesh(geometry,material);m.castShadow=true;m.receiveShadow=true;parent.add(m);return m;}
function ball(parent,color,position,scale,detail=3){const m=mesh(new THREE.IcosahedronGeometry(1,detail),typeof color==='string'||typeof color==='number'?mat(color):color,parent);m.position.set(...position);m.scale.set(...scale);return m;}
function tube(points,radius,material,parent,closed=false){const c=new THREE.CatmullRomCurve3(points.map(p=>p.isVector3?p:new THREE.Vector3(...p)),closed);return mesh(new THREE.TubeGeometry(c,Math.max(24,points.length*2),radius,8,closed),material,parent);}

// Pigment is painted into the stone material, with no raised lip or cheek geometry.
function lipstickTexture(){
 const c=document.createElement('canvas');c.width=c.height=1024;const ctx=c.getContext('2d');
 let brushSeed=2718;const rand=()=>{brushSeed=(brushSeed*1664525+1013904223)>>>0;return brushSeed/4294967296;};
 const project=([x,y])=>[(x+2)/4*c.width,(1-y/3)*c.height];
 function stroke(points,width,colors=['rgba(211,12,57,.66)','rgba(227,17,62,.50)']){
  const p=points.map(project);ctx.lineCap='round';ctx.lineJoin='round';
  for(let pass=0;pass<3;pass++){
   ctx.strokeStyle=colors[pass===0?0:1];
   for(let i=1;i<p.length;i++){
    const wobble=(Math.sin(i*1.37+pass)*.08+Math.sin(i*.42)*.1);
    ctx.lineWidth=width*c.width/4*(1+wobble)*(pass===0?1.13:.77);
    const dx=(rand()-.5)*1.5,dy=(rand()-.5)*1.5;
    ctx.beginPath();ctx.moveTo(p[i-1][0]+dx,p[i-1][1]+dy);ctx.lineTo(p[i][0]+dx,p[i][1]+dy);ctx.stroke();
   }
  }
 }
 // The wide black mouth line continues across the cheeks beyond the short lipstick stroke.
 const wideMouth=[];for(let i=0;i<=120;i++){const u=i/120;wideMouth.push([mix(-1.28,1.23,u),1.45-.016*Math.sin(u*Math.PI)+.006*Math.sin(u*12)]);}
 stroke(wideMouth,.075,['rgba(23,25,24,.98)','rgba(23,25,24,.94)']);
 const lips=[];for(let i=0;i<=80;i++){const u=i/80;lips.push([mix(-.68,.42,u),1.452+.009*Math.sin(u*15)+.012*Math.sin(u*7)]);}
 stroke(lips,.18);
 for(const side of[-1,1]){
  const spiral=[],cx=side===-1?-1.13:1.15,cy=1.68;
  for(let i=0;i<=150;i++){const f=i/150,a=f*Math.PI*3.9,r=.023+f*.255+.006*Math.sin(f*39+side);spiral.push([cx+Math.cos(a)*r,cy+Math.sin(a)*r*.8+.005*Math.sin(f*43)]);}
  stroke(spiral,.064);
 }
 // Fine gaps and dry, streaky edges suggest wax dragged across rough stone.
 ctx.globalCompositeOperation='destination-out';
 for(let i=0;i<14000;i++){ctx.fillStyle=`rgba(0,0,0,${.08+rand()*.48})`;const x=rand()*c.width,y=rand()*c.height;ctx.fillRect(x,y,.35+rand()*1.2,.4+rand()*1.8);}
 for(let i=0;i<1600;i++){ctx.strokeStyle=`rgba(0,0,0,${.05+rand()*.17})`;ctx.lineWidth=.4+rand()*.7;const x=rand()*c.width,y=rand()*c.height;ctx.beginPath();ctx.moveTo(x,y);ctx.lineTo(x+2+rand()*6,y+rand()*2-1);ctx.stroke();}
 const texture=new THREE.CanvasTexture(c);texture.colorSpace=THREE.SRGBColorSpace;texture.anisotropy=renderer.capabilities.getMaxAnisotropy();return texture;
}
const pigment=lipstickTexture();
// Sculpted stone and moss remain procedural beneath the flat lipstick pigment.
const rockMaterial=new THREE.MeshStandardMaterial({color:0xd3d5ca,roughness:.94});
rockMaterial.onBeforeCompile=(shader)=>{
 shader.uniforms.lipstickPaint={value:pigment};
 shader.vertexShader='varying vec3 vStone;\n'+shader.vertexShader;
 shader.vertexShader=shader.vertexShader.replace('#include <begin_vertex>','#include <begin_vertex>\nvStone = position;');
 shader.fragmentShader=`varying vec3 vStone;
 uniform sampler2D lipstickPaint;
 float hash3(vec3 p){return fract(sin(dot(p,vec3(127.1,311.7,74.7)))*43758.5453);}
 float stoneNoise(vec3 p){vec3 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);return mix(mix(mix(hash3(i),hash3(i+vec3(1,0,0)),f.x),mix(hash3(i+vec3(0,1,0)),hash3(i+vec3(1,1,0)),f.x),f.y),mix(mix(hash3(i+vec3(0,0,1)),hash3(i+vec3(1,0,1)),f.x),mix(hash3(i+vec3(0,1,1)),hash3(i+vec3(1,1,1)),f.x),f.y),f.z);}
 `+shader.fragmentShader;
 shader.fragmentShader=shader.fragmentShader.replace('#include <color_fragment>',`#include <color_fragment>
 float grain=stoneNoise(vStone*53.);float fleck=stoneNoise(vStone*142.);float mottled=stoneNoise(vStone*5.);
 float edge=.43 + vStone.x*.53 + .21*sin(vStone.z*5.+vStone.x*3.)+(stoneNoise(vStone*4.)-.5)*.34;
 float moss=1.-smoothstep(-.045,.045,vStone.y-edge);
 float mossPatch=1.-smoothstep(.23,.34,length((vStone.xy-vec2(-.95,.65))*vec2(1.,1.4))+(mottled-.5)*.12);
 moss=max(moss,mossPatch*.97);
 vec3 stone=diffuseColor.rgb*(.79+mottled*.17+grain*.12);
 vec3 green=mix(vec3(.20,.32,.075),vec3(.40,.53,.17),grain*.6+mottled*.4);
 diffuseColor.rgb=mix(stone,green,moss);
 diffuseColor.rgb*=.91+fleck*.17;
 vec4 paint=texture2D(lipstickPaint,vec2((vStone.x+2.)/4.,vStone.y/3.));
 float pigmentMask=paint.a*smoothstep(.40,.65,vStone.z);
 diffuseColor.rgb=mix(diffuseColor.rgb,paint.rgb*(.84+grain*.19),pigmentMask);
 `);
};
const dark=mat(0x201e22,.98), tongueMat=mat(0x702738,.98);
const cavityMaterial=new THREE.MeshBasicMaterial({color:0x080609,side:THREE.DoubleSide});
const garden=new THREE.Group();scene.add(garden);
const islandProfile=[[0,-.05],[2.4,-.05],[2.91,.02],[3.12,.14],[3.17,.29],[3.09,.42],[2.92,.49],[0,.49]].map(p=>new THREE.Vector2(...p));
const island=mesh(new THREE.LatheGeometry(islandProfile,96),mat(0xbaa784),garden);
island.scale.set(1,1,.79);
const grassTop=mesh(new THREE.CylinderGeometry(2.94,3.06,.16,96,1),mat(0x84965b),garden);grassTop.position.y=.44;grassTop.scale.z=.79;
// A fine, uneven surface gives the miniature garden its felt-like softness.
const grassGeo=new THREE.SphereGeometry(1,7,5);
const grassColors=[0x9ba972,0xa8b67e,0x7f9458,0x94a367,0xadb785];
for(let i=0;i<110;i++){
 const a=random()*Math.PI*2,r=Math.sqrt(random())*2.9;
 const x=Math.cos(a)*r,z=Math.sin(a)*r*.79;
 if(Math.abs(x)<1.65&&Math.abs(z)<1)continue;
 const tuft=mesh(grassGeo,mat(grassColors[i%5]),garden);tuft.position.set(x,.52,z);tuft.scale.set(.12+random()*.23,.018+random()*.025,.08+random()*.15);tuft.rotation.y=random()*6;
}
// Broad contact shadow under the floating, rounded island.
function shadowTexture(){const c=document.createElement('canvas');c.width=c.height=128;const ctx=c.getContext('2d');const g=ctx.createRadialGradient(64,64,0,64,64,63);g.addColorStop(0,'rgba(51,62,28,.25)');g.addColorStop(.45,'rgba(51,62,28,.13)');g.addColorStop(1,'rgba(51,62,28,0)');ctx.fillStyle=g;ctx.fillRect(0,0,128,128);return new THREE.CanvasTexture(c);}
const contact=new THREE.Mesh(new THREE.PlaneGeometry(9,7),new THREE.MeshBasicMaterial({map:shadowTexture(),transparent:true,depthWrite:false}));contact.rotation.x=-Math.PI/2;contact.position.y=-.09;scene.add(contact);

const puppet=new THREE.Group();puppet.position.set(0,.54,0);garden.add(puppet);
const bodyHeight=2.8,rows=64,cols=160,cutRow=32,halfMouth=8*Math.PI*2/cols;
const mouthCenter=-.13,mouthTop=.05+cutRow/rows*bodyHeight,maxMouthTravel=.12;
function radius(t){return 2.05*Math.pow(Math.max(0,Math.sin(Math.PI*t)),.40)*(1.19-.45*t);}
function rawSurface(t,a){
 const r=radius(t),noise=1+.018*Math.sin(a*5+t*9)+.012*Math.cos(a*9-t*7);
 // A closed, rounded underside and a broad lower muzzle make a continuous stone silhouette.
 const s=THREE.MathUtils.clamp(t/(cutRow/rows),0,1);
 const muzzle=t<cutRow/rows?.91*Math.pow(Math.sin(Math.PI*s),.8)*Math.pow(Math.max(0,Math.cos(a)),3):0;
 return new THREE.Vector3(Math.sin(a)*r*noise-.28*t,.05+t*bodyHeight,Math.cos(a)*r*.68*noise+muzzle);
}
function angleAtX(t,x){let low=-Math.PI/2,high=Math.PI/2;for(let i=0;i<22;i++){const mid=(low+high)/2;if(rawSurface(t,mid).x<x)low=mid;else high=mid;}return(low+high)/2;}
function slotSurface(t,a){
 if(t<=cutRow/rows){const s=t/(cutRow/rows),bend=Math.sin(Math.PI*s);const left=-halfMouth-.045*bend+.018*Math.sin(s*8)*bend,right=halfMouth+.05*bend+.024*Math.sin(s*6)*bend;
  if(a<-halfMouth)a=mix(-Math.PI,left,(a+Math.PI)/(Math.PI-halfMouth));
  else if(a<=halfMouth)a=mix(left,right,(a+halfMouth)/(halfMouth*2));
  else a=mix(right,Math.PI,(a-halfMouth)/(Math.PI-halfMouth));
 }
 return rawSurface(t,a);
}
function faceZ(x,y){const t=(y-.05)/bodyHeight;return rawSurface(t,angleAtX(t,x)).z;}
function patchGeometry(jaw=false,inside=false){
 const pos=[],indices=[];const start=jaw?-halfMouth:-Math.PI,end=jaw?halfMouth:Math.PI,nc=jaw?20:cols,nr=jaw?cutRow:rows;
 for(let r=0;r<=nr;r++){for(let c=0;c<=nc;c++){const p=slotSurface(r/rows,mix(start,end,c/nc));if(inside)p.z=Math.min(p.z-.24,.72);pos.push(p.x,p.y,p.z);}}
 for(let r=0;r<nr;r++){for(let c=0;c<nc;c++){const angle=mix(start,end,(c+.5)/nc);if(!jaw&&r<cutRow&&Math.abs(angle)<halfMouth-.0001)continue;const a=r*(nc+1)+c,b=a+1,d=a+nc+2,cc=a+nc+1;indices.push(a,b,cc,b,d,cc);}}
 const geo=new THREE.BufferGeometry();geo.setAttribute('position',new THREE.Float32BufferAttribute(pos,3));geo.setIndex(indices);geo.computeVertexNormals();return geo;
}
// An inverted hull gives the stone a thick black outline from every camera angle.
const outlineMaterial=new THREE.MeshBasicMaterial({color:0x171918,side:THREE.BackSide});
outlineMaterial.onBeforeCompile=shader=>{shader.vertexShader=shader.vertexShader.replace('#include <begin_vertex>','#include <begin_vertex>\ntransformed += normal * 0.058;');};
function outline(geometry,parent){const o=new THREE.Mesh(geometry,outlineMaterial);o.name='Black stone outline';parent.add(o);return o;}
const bodyGeometry=patchGeometry();const body=mesh(bodyGeometry,rockMaterial,puppet);body.name='Rocky';outline(bodyGeometry,puppet);
// The mouth is an opening in the stone. Its dark backing stays deep inside,
// without dark walls following the projecting muzzle's outer surface.
const cavity=mesh(patchGeometry(true,true),cavityMaterial,puppet);cavity.castShadow=false;
function mouthInterior(parent,lower=false){
 const positions=[],indices=[];
 for(let i=0;i<=40;i++){
  const p=slotSurface(cutRow/rows,mix(-halfMouth,halfMouth,i/40));
  const y=p.y+(lower?-.008:.008);
  positions.push(p.x,y,p.z-.075,p.x,y,.70);
  if(i<40){const a=i*2;indices.push(a,a+1,a+2,a+1,a+3,a+2);}
 }
 const geo=new THREE.BufferGeometry();geo.setAttribute('position',new THREE.Float32BufferAttribute(positions,3));geo.setIndex(indices);geo.computeVertexNormals();
 const interior=mesh(geo,cavityMaterial,parent);interior.castShadow=false;
}
mouthInterior(puppet);
const jaw=new THREE.Group();puppet.add(jaw);
// Close the jaw's shell so its rounded, projecting underside also gets a silhouette outline.
function solidJawGeometry(){
 const front=patchGeometry(true),positions=Array.from(front.attributes.position.array),indices=Array.from(front.index.array),count=front.attributes.position.count;
 for(let i=0;i<count;i++)positions.push(positions[i*3],positions[i*3+1],positions[i*3+2]-.14);
 const outerIndices=indices.slice();for(let i=0;i<outerIndices.length;i+=3)indices.push(outerIndices[i]+count,outerIndices[i+2]+count,outerIndices[i+1]+count);
 const edge=[];for(let c=0;c<=20;c++)edge.push(c);for(let r=1;r<=cutRow;r++)edge.push(r*21+20);for(let c=19;c>=0;c--)edge.push(cutRow*21+c);for(let r=cutRow-1;r>0;r--)edge.push(r*21);
 for(let i=0;i<edge.length;i++){const a=edge[i],b=edge[(i+1)%edge.length];indices.push(a,a+count,b,b,a+count,b+count);}
 front.setAttribute('position',new THREE.Float32BufferAttribute(positions,3));front.setIndex(indices);front.deleteAttribute('normal');front.computeVertexNormals();return front;
}
const jawGeometry=solidJawGeometry();const jawMaterial=rockMaterial.clone();jawMaterial.onBeforeCompile=rockMaterial.onBeforeCompile;mesh(jawGeometry,jawMaterial,jaw);outline(jawGeometry,jaw);
mouthInterior(jaw,true);
ball(jaw,tongueMat,[mouthCenter,mouthTop-.025,.83],[.25,.016,.055]);
const mouthLine=[];for(let i=0;i<=30;i++){const p=slotSurface(cutRow/rows,mix(-halfMouth,halfMouth,i/30));p.z+=.002;mouthLine.push(p);}tube(mouthLine,.008,dark,puppet);
for(const side of[-1,1]){
 const seam=[];for(let i=4;i<=cutRow;i++){const p=slotSurface(i/rows,side*halfMouth);p.z+=.009;seam.push(p);}tube(seam,.033,new THREE.MeshBasicMaterial({color:0x171918}),puppet);
}
// Fixed, open eyes: no blinking or eyelid scaling in any mood.
for(const side of[-1,1]){
 const x=side*.42-.09,y=2.04+(side===-1?.045:0),z=faceZ(x,y)+.025;
 const eye=new THREE.Group();eye.position.set(x,y,z);eye.rotation.y=side*.15;puppet.add(eye);
 ball(eye,mat(0x101015,.25),[0,0,0],[.205,.235,.095]);
 ball(eye,mat(0xf51528,.36),[0,0,.087],[.107,.125,.036]);
 ball(eye,mat(0x0a090c,.32),[0,0,.119],[.052,.065,.016]);
}
// Sculpted white brow ridges taper into the stone and project over the eyes.
const browMaterial=mat(0xf8f6f0,.88);
for(const side of[-1,1]){
 const path=new THREE.CatmullRomCurve3([
  new THREE.Vector3(-.09+side*.02,2.28,0),
  new THREE.Vector3(-.09+side*.26,2.43,0),
  new THREE.Vector3(-.09+side*.55,2.49,0),
  new THREE.Vector3(-.09+side*.87,2.36,0)
 ]);
 const positions=[],indices=[],segments=48,sides=16;
 for(let i=0;i<=segments;i++){
  const t=i/segments,p=path.getPoint(t),tangent=path.getTangent(t);
  const taper=Math.pow(Math.sin(Math.PI*t),.55),width=.105*taper+.008,depth=.16*taper+.008;
  for(let j=0;j<=sides;j++){
   const a=j/sides*Math.PI*2,across=Math.sin(a)*width;
   const x=p.x-tangent.y*across,y=p.y+tangent.x*across;
   positions.push(x,y,faceZ(x,y)+.025+Math.cos(a)*depth);
   if(i<segments&&j<sides){const v=i*(sides+1)+j;indices.push(v,v+sides+1,v+1,v+1,v+sides+1,v+sides+2);}
  }
 }
 const geo=new THREE.BufferGeometry();geo.setAttribute('position',new THREE.Float32BufferAttribute(positions,3));geo.setIndex(indices);geo.computeVertexNormals();
 const brow=mesh(geo,browMaterial,puppet);brow.name=side===-1?'Left white eyebrow':'Right white eyebrow';
}
// A small red fabric bow tie sits below the jaw's full travel, attached to the stone.
const bowTie=new THREE.Group();bowTie.name='Red bow tie';bowTie.position.set(mouthCenter,.40,faceZ(mouthCenter,.40)+.065);jaw.add(bowTie);
const ribbonMaterial=new THREE.MeshPhysicalMaterial({color:0xc71326,roughness:.76,sheen:.55,sheenColor:0xf04a53,sheenRoughness:.82});
const wingShape=new THREE.Shape();
wingShape.moveTo(.055,.065);
wingShape.bezierCurveTo(.18,.085,.32,.185,.43,.19);
wingShape.quadraticCurveTo(.49,.19,.485,.12);
wingShape.bezierCurveTo(.47,.03,.50,-.075,.48,-.14);
wingShape.quadraticCurveTo(.47,-.195,.40,-.175);
wingShape.bezierCurveTo(.27,-.14,.15,-.07,.055,-.06);
wingShape.closePath();
const wingGeometry=new THREE.ExtrudeGeometry(wingShape,{depth:.055,bevelEnabled:true,bevelSize:.018,bevelThickness:.018,bevelSegments:3,steps:1,curveSegments:18});
for(const side of[-1,1]){
 const wing=mesh(wingGeometry,ribbonMaterial,bowTie);wing.scale.x=side;wing.rotation.y=-side*.10;
 const creaseMaterial=mat(0x98101e,.9);
 for(const fold of[-1,1])tube([[side*.09,fold*.026,.08],[side*.19,fold*.055,.087],[side*.34,fold*.11,.088]],.005,creaseMaterial,bowTie);
}
const knot=mesh(new THREE.SphereGeometry(1,24,16),ribbonMaterial,bowTie);knot.position.set(0,0,.07);knot.scale.set(.105,.12,.075);
// Small rock companions and plants establish the miniature scale.
const pebbleMat=mat(0xc8cbb7), darkPebble=mat(0xa1ad88);
const rockSpecs=[[-2.1,.65,.65,.42,.28,.33],[2.12,.66,.48,.38,.26,.3],[-1.55,.61,1.54,.25,.17,.2],[1.62,.61,1.7,.32,.17,.2],[2.3,.62,-.8,.24,.18,.22],[-2.4,.61,-.5,.23,.18,.2],[.65,.61,1.93,.16,.12,.14]];
for(let i=0;i<rockSpecs.length;i++){const[x,y,z,sx,sy,sz]=rockSpecs[i];const p=ball(garden,i%2?darkPebble:pebbleMat,[x,y,z],[sx,sy,sz],2);p.rotation.set(random()*.4,random()*6,random()*.3);}
const plants=[];
function plant(x,z,size=1){
 const group=new THREE.Group();group.position.set(x,.53,z);group.rotation.y=random()*6;garden.add(group);plants.push(group);
 for(let j=0;j<5;j++){const a=j/5*Math.PI*2,h=(.25+random()*.24)*size;
 const pts=[[0,0,0],[Math.sin(a)*.06*size,h*.55,Math.cos(a)*.06*size],[Math.sin(a)*.16*size,h,Math.cos(a)*.16*size]];
 tube(pts,.012*size,mat(j%2?0x68844a:0x7e9655),group);
 const leaf=ball(group,mat(j%2?0x9aa960:0x78934f),pts[1],[.035*size,.13*size,.017*size],1);leaf.rotation.z=-Math.sin(a)*.6;leaf.rotation.x=Math.cos(a)*.6;
 }
}
for(const p of[[-2,1.25,.8],[2.45,.14,.8],[-2.35,-.83,1.4],[1.85,-1.2,1.3],[-.7,-1.7,1.1],[.9,1.8,.7],[-.45,1.83,.6],[2,-.7,1]])plant(...p);
const flowers=[];
function flower(x,z,size=1){
 const g=new THREE.Group();g.position.set(x,.53,z);garden.add(g);flowers.push(g);
 const h=.34*size;tube([[0,0,0],[.025,h*.6,0],[.015,h,0]],.012,mat(0x788e4c),g);
 for(let i=0;i<6;i++){const a=i/6*Math.PI*2;const petal=ball(g,mat(0xfffbed),[.015+Math.cos(a)*.062*size,h+.01,Math.sin(a)*.062*size],[.052*size,.017*size,.025*size],2);petal.rotation.y=-a;}
 ball(g,mat(0xe2b34f),[.015,h+.025,0],[.03*size,.02*size,.03*size],2);
}
for(const p of[[-1.8,1.65,1],[1.9,1.15,.9],[2.12,1.3,.7],[-2.5,.1,.8],[-1.7,-1.3,1.15],[.0,2.07,.7]])flower(...p);
// Airborne pollen becomes softly glowing fireflies after sunset.
const motePositions=new Float32Array(100*3),moteSeeds=[];
for(let i=0;i<100;i++){moteSeeds.push([random()*Math.PI*2,random()*3.7,random()*4]);}
const moteGeo=new THREE.BufferGeometry();moteGeo.setAttribute('position',new THREE.BufferAttribute(motePositions,3));
const moteMat=new THREE.PointsMaterial({color:0xc4bc89,size:.027,transparent:true,opacity:.55,depthWrite:false});
const motes=new THREE.Points(moteGeo,moteMat);scene.add(motes);
const heartShape=new THREE.Shape();heartShape.moveTo(0,.22);heartShape.bezierCurveTo(-.5,.66,-.72,.04,0,-.47);heartShape.bezierCurveTo(.72,.04,.5,.66,0,.22);
const heartGeo=new THREE.ShapeGeometry(heartShape,18);const hearts=[];
function heartsBurst(count=7){for(let i=0;i<count;i++){const h=new THREE.Mesh(heartGeo,new THREE.MeshBasicMaterial({color:i%2?0xff728d:0xf94377,transparent:true,side:THREE.DoubleSide,depthWrite:false}));const size=.12+Math.random()*.12;h.scale.setScalar(size);h.position.set((Math.random()-.5)*2,2.5+Math.random()*.7,1);h.userData={born:state.time,speed:.45+Math.random()*.4,drift:(Math.random()-.5)*.35};scene.add(h);hearts.push(h);}}

let speechTimer,toastTimer;
function speak(message,duration=3400){$('#speech span').textContent=message;$('#speech').classList.add('visible');clearTimeout(speechTimer);speechTimer=setTimeout(()=>$('#speech').classList.remove('visible'),duration);}
function toast(message){$('#toast').textContent=message;$('#toast').classList.add('show');clearTimeout(toastTimer);toastTimer=setTimeout(()=>$('#toast').classList.remove('show'),3200);}
const mouthSlider=$('#mouth');
function setMouth(value){state.mouth=value;mouthSlider.value=Math.round(value*100);$('#mouth-value').value=Math.round(value*100)+'%';mouthSlider.style.background=`linear-gradient(to right,#7e9463 ${value*100}%,#e5e9dc ${value*100}%)`;}
mouthSlider.addEventListener('input',()=>setMouth(Number(mouthSlider.value)/100));
function hello(){state.helloUntil=state.time+3;state.tapUntil=state.time+1.5;speak(['oh, hi there!','you rock. you really do.','a little hello from me ♡','so glad you’re here.'][Math.floor(Math.random()*4)]);heartsBurst(5);if(state.sound)chirp();}
$('#hello').addEventListener('click',hello);
document.querySelectorAll('[data-mood]').forEach(button=>button.addEventListener('click',()=>{
 state.mood=button.dataset.mood;document.querySelectorAll('[data-mood]').forEach(b=>{b.classList.toggle('active',b===button);b.setAttribute('aria-pressed',String(b===button));});
 const messages={happy:'life is good. rock solid, even.',curious:'hmm… what’s over there?',sleepy:'just five more little minutes…',love:'a soft spot, just for you.'};speak(messages[state.mood]);if(state.mood==='love')heartsBurst(10);if(state.mood==='happy')state.tapUntil=state.time+1;
}));
document.querySelectorAll('[data-env]').forEach(button=>button.addEventListener('click',()=>{
 state.env=button.dataset.env;document.body.classList.toggle('dusk',state.env==='dusk');document.querySelectorAll('[data-env]').forEach(b=>{b.classList.toggle('active',b===button);b.setAttribute('aria-pressed',String(b===button));});speak(state.env==='dusk'?'stay a little. the stars are out.':'a little sunshine feels nice.');
}));
let resetAnimation=0;
function resetView(){resetAnimation=1;toast('Back to our little corner of the world.');}
$('#reset').addEventListener('click',resetView);
$('#help').addEventListener('click',()=>$('#help-dialog').showModal());$('#close-help').addEventListener('click',()=>$('#help-dialog').close());
$('#help-dialog').addEventListener('click',e=>{if(e.target===$('#help-dialog'))$('#help-dialog').close();});
document.addEventListener('keydown',e=>{if(/INPUT|TEXTAREA|BUTTON/.test(document.activeElement?.tagName)||$('#help-dialog').open)return;if(e.code==='Space'){e.preventDefault();state.space=true;}if(!e.repeat&&e.code==='KeyH')hello();if(!e.repeat&&e.code==='KeyR')resetView();});
document.addEventListener('keyup',e=>{if(e.code==='Space')state.space=false;});window.addEventListener('blur',()=>{state.space=false;state.drag=false;});
let pointerStart=null,lastPointer=null,pointerDistance=0;
canvas.addEventListener('pointerdown',e=>{canvas.focus({preventScroll:true});state.drag=true;resetAnimation=0;pointerDistance=0;pointerStart=lastPointer={x:e.clientX,y:e.clientY};canvas.setPointerCapture(e.pointerId);});
canvas.addEventListener('pointermove',e=>{if(!state.drag)return;const dx=e.clientX-lastPointer.x,dy=e.clientY-lastPointer.y;pointerDistance+=Math.abs(dx)+Math.abs(dy);state.yaw-=dx*.006;state.pitch=THREE.MathUtils.clamp(state.pitch+dy*.004,-.06,.95);lastPointer={x:e.clientX,y:e.clientY};});
canvas.addEventListener('pointerup',e=>{state.drag=false;if(pointerDistance<6){const rect=canvas.getBoundingClientRect(),pointer=new THREE.Vector2((e.clientX-rect.left)/rect.width*2-1,-(e.clientY-rect.top)/rect.height*2+1);const ray=new THREE.Raycaster();ray.setFromCamera(pointer,camera);if(ray.intersectObject(puppet,true).length)hello();}pointerStart=null;});
canvas.addEventListener('pointercancel',()=>{state.drag=false;});
canvas.addEventListener('wheel',e=>{e.preventDefault();resetAnimation=0;state.zoom=THREE.MathUtils.clamp(state.zoom+e.deltaY*.0007,.7,1.5);},{passive:false});

// Garden ambience is generated locally and starts only after the sound button is pressed.
let audioContext,master,audioTimer;
function chirp(){if(!audioContext||!state.sound)return;const now=audioContext.currentTime;const osc=audioContext.createOscillator(),gain=audioContext.createGain();osc.type='sine';osc.frequency.setValueAtTime(1450+Math.random()*600,now);osc.frequency.exponentialRampToValueAtTime(2900,now+.07);osc.frequency.exponentialRampToValueAtTime(1700,now+.15);gain.gain.setValueAtTime(0,now);gain.gain.linearRampToValueAtTime(.025,now+.03);gain.gain.exponentialRampToValueAtTime(.001,now+.25);osc.connect(gain);gain.connect(master);osc.start(now);osc.stop(now+.3);}
$('#sound').addEventListener('click',async()=>{try{
 if(!audioContext){audioContext=new(window.AudioContext||window.webkitAudioContext)();master=audioContext.createGain();master.gain.value=0;master.connect(audioContext.destination);const buffer=audioContext.createBuffer(1,audioContext.sampleRate*3,audioContext.sampleRate);const data=buffer.getChannelData(0);let last=0;for(let i=0;i<data.length;i++){last=(last+(Math.random()*2-1)*.02)/1.02;data[i]=last*2;}const noise=audioContext.createBufferSource();noise.buffer=buffer;noise.loop=true;const filter=audioContext.createBiquadFilter();filter.type='lowpass';filter.frequency.value=420;noise.connect(filter);filter.connect(master);noise.start();audioTimer=setInterval(()=>{if(state.sound&&Math.random()>.3)chirp();},2600);}
 await audioContext.resume();state.sound=!state.sound;master.gain.setTargetAtTime(state.sound?.4:0,audioContext.currentTime,.4);$('#sound').setAttribute('aria-pressed',String(state.sound));$('#sound').setAttribute('aria-label',state.sound?'Mute garden sounds':'Enable garden sounds');$('#sound').innerHTML=state.sound?'<svg viewBox="0 0 24 24"><path d="m11 5-5 4H3v6h3l5 4V5Zm4 3a7 7 0 0 1 0 8m3-11a11 11 0 0 1 0 14"/></svg>':'<svg viewBox="0 0 24 24"><path d="m11 5-5 4H3v6h3l5 4V5Zm4 4 5 6m0-6-5 6"/></svg>';toast(state.sound?'A little breeze. A little birdsong.':'A quiet little world.');if(state.sound)chirp();
 }catch{toast('Audio isn’t available in this browser.');}});
$('#capture').addEventListener('click',()=>{try{renderer.render(scene,camera);const out=document.createElement('canvas');out.width=canvas.width;out.height=canvas.height;const ctx=out.getContext('2d');ctx.fillStyle=state.env==='day'?'#f4f3e9':'#272d3c';ctx.fillRect(0,0,out.width,out.height);ctx.drawImage(canvas,0,0);ctx.fillStyle=state.env==='day'?'#536746':'#dce2d0';ctx.font=`${Math.max(18,out.width*.023)}px Georgia`;ctx.fillText('a little moment with rocky.',out.width*.06,out.height*.93);out.toBlob(blob=>{if(!blob)return;const url=URL.createObjectURL(blob),a=document.createElement('a');a.href=url;a.download='a-little-moment-with-rocky.png';a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);toast('A little keepsake, saved.');},'image/png');}catch{toast('Couldn’t save that moment. Please try again.');}});

function resize(){const r=canvas.getBoundingClientRect();renderer.setSize(r.width,r.height,false);camera.aspect=r.width/r.height;camera.updateProjectionMatrix();}
const resizeObserver=new ResizeObserver(resize);resizeObserver.observe($('#world'));resize();
const clock=new THREE.Clock();let firstFrame=true;
const dayLight=new THREE.Color(0xfff3d9),nightLight=new THREE.Color(0xa8b9f1),dayHemi=new THREE.Color(0xf6fbf0),nightHemi=new THREE.Color(0x8292c9);
function render(){
 const dt=Math.min(clock.getDelta(),.04),t=state.time+=dt;
 const eased=1-Math.exp(-dt*12);
 state.dusk=mix(state.dusk,state.env==='dusk'?1:0,1-Math.exp(-dt*2));sun.color.copy(dayLight).lerp(nightLight,state.dusk);sun.intensity=mix(3.3,1.65,state.dusk);hemi.color.copy(dayHemi).lerp(nightHemi,state.dusk);hemi.intensity=mix(2.1,1.2,state.dusk);fill.intensity=mix(1.5,2,state.dusk);warm.intensity=state.dusk*5;moteMat.opacity=mix(.55,.95,state.dusk);moteMat.size=mix(.024,.045,state.dusk);moteMat.color.set(state.dusk>.5?0xffdfa0:0xbeb98f);
 if(resetAnimation){state.yaw=mix(state.yaw,homeView.yaw,eased*.5);state.pitch=mix(state.pitch,homeView.pitch,eased*.5);state.zoom=mix(state.zoom,1,eased*.5);if(Math.abs(state.yaw-homeView.yaw)+Math.abs(state.pitch-homeView.pitch)+Math.abs(state.zoom-1)<.005)resetAnimation=0;}
 const distance=(camera.aspect<.85?12.6:10.8)*state.zoom;
 camera.position.set(Math.sin(state.yaw)*Math.cos(state.pitch)*distance,cameraTarget.y+Math.sin(state.pitch)*distance,Math.cos(state.yaw)*Math.cos(state.pitch)*distance);camera.lookAt(cameraTarget);
 let mouthTarget=state.space?1:state.mouth;
 if(t<state.helloUntil)mouthTarget=Math.max(mouthTarget,.16+.7*Math.pow(Math.sin(t*10),2));
 if(state.mood==='sleepy'&&!reducedMotion)mouthTarget=Math.max(mouthTarget,Math.pow(Math.max(0,Math.sin(t*.6)),14)*.65);
 state.jaw=mix(state.jaw,mouthTarget,eased);jaw.position.y=-state.jaw*maxMouthTravel;
 const bounce=t<state.tapUntil&&!reducedMotion?Math.abs(Math.sin((state.tapUntil-t)*7))*.16:0;
 puppet.position.y=.54+state.jaw*maxMouthTravel+bounce+(reducedMotion?0:Math.sin(t*1.65)*.012);
 const tilt=state.mood==='curious'?.13:state.mood==='sleepy'?-.06:0;puppet.rotation.z=mix(puppet.rotation.z,tilt+(reducedMotion?0:Math.sin(t*.85)*.009),eased*.25);
 puppet.rotation.y=mix(puppet.rotation.y,state.mood==='curious'?Math.sin(t*.65)*.16:0,eased*.3);
 plants.forEach((p,i)=>{p.rotation.z=reducedMotion?0:Math.sin(t*1.4+i)*.035;});flowers.forEach((p,i)=>{p.rotation.z=reducedMotion?0:Math.sin(t*1.4+i)*.045;});
 for(let i=0;i<moteSeeds.length;i++){const[a,r,y]=moteSeeds[i];motePositions[i*3]=Math.cos(a+(reducedMotion?0:t*.018))*r;motePositions[i*3+1]=.7+(y+(reducedMotion?0:t*.055))%3.6;motePositions[i*3+2]=Math.sin(a+(reducedMotion?0:t*.018))*r*.7;}
 moteGeo.attributes.position.needsUpdate=true;
 for(let i=hearts.length-1;i>=0;i--){const h=hearts[i],age=t-h.userData.born;h.position.y+=dt*h.userData.speed;h.position.x+=dt*h.userData.drift;h.quaternion.copy(camera.quaternion);h.material.opacity=Math.max(0,1-age/3);if(age>3){scene.remove(h);h.material.dispose();hearts.splice(i,1);}}
 renderer.render(scene,camera);
 if(firstFrame){firstFrame=false;$('#loading').style.opacity='0';setTimeout(()=>{$('#loading').classList.add('hidden');speak('oh, hi there!',4200);},600);document.body.dataset.ready='true';}
 requestAnimationFrame(render);
}
render();
canvas.addEventListener('webglcontextlost',e=>{e.preventDefault();$('#error').classList.remove('hidden');});
canvas.addEventListener('webglcontextrestored',()=>location.reload());
