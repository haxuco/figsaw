import * as THREE from './vendor/three.module.js';
import { createOffice } from './office.js?v=light-name';
import { createDialogueSpeech, dialogueMouthAmount } from './dialogue-speech.js';
import { figsawIdlePose } from './character-motion.js';

const canvas=document.querySelector('#scene');
const reducedMotion=matchMedia('(prefers-reduced-motion: reduce)').matches;
const homeCamera={position:[1.85221,.821615,3.1149],lookAt:[1.293346,.717709,2.292176],fov:62};
const homePosition=new THREE.Vector3(...homeCamera.position);
const homeDirection=new THREE.Vector3(...homeCamera.lookAt).sub(homePosition).normalize();
const homeView={yaw:Math.atan2(-homeDirection.x,-homeDirection.z),pitch:Math.asin(homeDirection.y)};
const state={yaw:homeView.yaw,pitch:homeView.pitch,zoom:1,jaw:0,space:false,time:0,talkUntil:0};
const renderer=new THREE.WebGLRenderer({canvas,antialias:true,alpha:true});
renderer.setPixelRatio(Math.min(devicePixelRatio,2));
renderer.shadowMap.enabled=true;
renderer.shadowMap.type=THREE.PCFSoftShadowMap;
renderer.outputColorSpace=THREE.SRGBColorSpace;
renderer.toneMapping=THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure=.76;
const scene=new THREE.Scene();scene.background=new THREE.Color(0x161d18);scene.fog=new THREE.Fog(0x232d22,11,26);
const camera=new THREE.PerspectiveCamera(homeCamera.fov,1,.06,35);
const cameraPosition=homePosition.clone();
const cameraTarget=new THREE.Vector3(),viewDirection=new THREE.Vector3(),moveDirection=new THREE.Vector3();
const hemi=new THREE.HemisphereLight(0x91a5a0,0x242c28,.62);scene.add(hemi);
const fluorescentPower=17.5;
const fluorescent=new THREE.SpotLight(0xc4d2b0,fluorescentPower,12,1.25,.72,2);fluorescent.position.set(.22,2.83,-.55);fluorescent.target.position.set(0,0,-.1);fluorescent.castShadow=true;
fluorescent.shadow.mapSize.set(2048,2048);fluorescent.shadow.camera.near=.1;fluorescent.shadow.camera.far=11;fluorescent.shadow.normalBias=.015;fluorescent.shadow.bias=-.00015;scene.add(fluorescent,fluorescent.target);
const windowLight=new THREE.DirectionalLight(0x9cb4b5,.85);windowLight.position.set(6.2,4.1,-1.6);windowLight.target.position.set(-1,.35,-.3);windowLight.castShadow=true;windowLight.shadow.mapSize.set(2048,2048);windowLight.shadow.camera.left=-6;windowLight.shadow.camera.right=6;windowLight.shadow.camera.top=5;windowLight.shadow.camera.bottom=-5;windowLight.shadow.normalBias=.012;windowLight.shadow.bias=-.0002;scene.add(windowLight,windowLight.target);
const doorwayLight=new THREE.PointLight(0x8ea6a4,2.2,10,2);doorwayLight.position.set(-1,2.6,4.0);scene.add(doorwayLight);

const mix=THREE.MathUtils.lerp;
function mat(color,roughness=.9){ return new THREE.MeshStandardMaterial({color,roughness}); }
function mesh(geometry,material,parent=scene){const m=new THREE.Mesh(geometry,material);m.castShadow=true;m.receiveShadow=true;parent.add(m);return m;}
function ball(parent,color,position,scale,detail=3){const m=mesh(new THREE.IcosahedronGeometry(1,detail),typeof color==='string'||typeof color==='number'?mat(color):color,parent);m.position.set(...position);m.scale.set(...scale);return m;}
function tube(points,radius,material,parent,closed=false){const c=new THREE.CatmullRomCurve3(points.map(p=>p.isVector3?p:new THREE.Vector3(...p)),closed);return mesh(new THREE.TubeGeometry(c,Math.max(24,points.length*2),radius,8,closed),material,parent);}

// Rough lipstick pigment follows the stone, including the subtly raised cheeks.
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
 const wideMouth=[];for(let i=0;i<=140;i++){const u=i/140,x=mix(-1.65,1.23,u);const curl=.16*Math.exp(-Math.pow((x+1.65)/.26,2))+.06*Math.pow(Math.max(0,(x-.42)/.81),2);wideMouth.push([x,1.45-curl+.006*Math.sin(u*12)]);}
 stroke(wideMouth,.075,['rgba(23,25,24,.98)','rgba(23,25,24,.94)']);
 const lips=[];for(let i=0;i<=80;i++){const u=i/80;lips.push([mix(-.68,.42,u),1.452+.009*Math.sin(u*15)+.012*Math.sin(u*7)]);}
 stroke(lips,.18);
 for(const side of[-1,1]){
  const spiral=[],cx=side===-1?-1.13:1.15,cy=1.68;
  for(let i=0;i<=240;i++){const f=i/240,a=f*Math.PI*6.1,r=.017+f*.272+.003*Math.sin(f*39+side);spiral.push([cx+Math.cos(a)*r,cy+Math.sin(a)*r*.92+.003*Math.sin(f*43)]);}
  stroke(spiral,.047);
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
 vec2 mossSpot=(vStone.xy-vec2(-.13,.88))/vec2(.31,.20);
 float mossPatch=(1.-smoothstep(.94,1.08,length(mossSpot)+(mottled-.5)*.16))*smoothstep(.70,.95,vStone.z);
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
const model=new THREE.Group();model.name='Figsaw and tricycle';scene.add(model);

// A vintage tricycle supports the rock directly on its saddle.
const tricycle=new THREE.Group();tricycle.name='Figsaw’s red tricycle';model.add(tricycle);
const enamel=new THREE.MeshStandardMaterial({color:0xc93338,roughness:.44,metalness:.28});
const chrome=new THREE.MeshStandardMaterial({color:0xaeb5b3,roughness:.34,metalness:.72});
const spokeMaterial=new THREE.MeshStandardMaterial({color:0x535a59,roughness:.46,metalness:.65});
const gripMaterial=mat(0x87242b,.86);
const rubber=mat(0x171c1b,.93),saddleMaterial=mat(0x242725,.85);
function rod(parent,start,end,radius,material){
 const a=new THREE.Vector3(...start),b=new THREE.Vector3(...end),delta=b.clone().sub(a);
 const part=mesh(new THREE.CylinderGeometry(radius,radius,delta.length(),16),material,parent);
 part.position.copy(a).add(b).multiplyScalar(.5);part.quaternion.setFromUnitVectors(new THREE.Vector3(0,1,0),delta.normalize());return part;
}
const spinningWheels=[];
function wheel(x,y,z,radius,spokes){
 const group=new THREE.Group();group.position.set(x,y,z);group.rotation.y=Math.PI/2;group.name=spokes===8?'Large front wheel':'Small rear wheel';tricycle.add(group);
 group.userData.radius=radius;spinningWheels.push(group);
 const tireWidth=radius>.7?.045:.033;
 mesh(new THREE.TorusGeometry(radius-tireWidth,tireWidth,12,80),rubber,group);
 mesh(new THREE.TorusGeometry(radius-tireWidth*2,.018,10,80),spokeMaterial,group);
 for(const side of[-1,1]){
  const trim=mesh(new THREE.TorusGeometry(radius-tireWidth*1.65,.006,6,80),chrome,group);trim.position.z=side*.024;
 }
 for(let i=0;i<spokes;i++){
  const a=i/spokes*Math.PI*2+.16;
  rod(group,[0,0,0],[Math.cos(a)*(radius-tireWidth*2),Math.sin(a)*(radius-tireWidth*2),0],radius>.7?.013:.011,spokeMaterial);
 }
 rod(group,[0,0,-.14],[0,0,.14],.082,enamel);
 for(const side of[-1,1])ball(group,chrome,[0,0,side*.15],[.061,.061,.027],2);
 return group;
}
const frontAxleY=1.39,frontAxleZ=1.52,rearAxleY=.89,rearAxleZ=-1.23;
wheel(0,frontAxleY,frontAxleZ,.86,8);
wheel(-1.05,rearAxleY,rearAxleZ,.36,6);
wheel(1.05,rearAxleY,rearAxleZ,.36,6);
rod(tricycle,[-1.16,rearAxleY,rearAxleZ],[1.16,rearAxleY,rearAxleZ],.045,spokeMaterial);
// A broad curved steel strip runs from the rear axle to the steering head.
const frameCurve=new THREE.CatmullRomCurve3([[0,.89,-1.23],[0,1.24,-1.03],[0,1.65,-.55],[0,1.95,.05],[0,2.14,.73],[0,2.19,1.22]].map(p=>new THREE.Vector3(...p)));
const framePoints=[],frameIndices=[],frameSegments=64;
for(let i=0;i<=frameSegments;i++){
 const p=frameCurve.getPoint(i/frameSegments),tangent=frameCurve.getTangent(i/frameSegments);
 const normal=new THREE.Vector3(0,-tangent.z,tangent.y).normalize();
 for(const [x,edge] of [[-.055,-1],[.055,-1],[.055,1],[-.055,1]]){
  framePoints.push(p.x+x,p.y+normal.y*.074*edge,p.z+normal.z*.074*edge);
 }
 if(i<frameSegments)for(let edge=0;edge<4;edge++){
  const a=i*4+edge,b=i*4+(edge+1)%4;frameIndices.push(a,b+4,b,a,a+4,b+4);
 }
}
frameIndices.push(0,1,2,0,2,3);
const frameEnd=frameSegments*4;frameIndices.push(frameEnd,frameEnd+2,frameEnd+1,frameEnd,frameEnd+3,frameEnd+2);
const frameGeometry=new THREE.BufferGeometry();frameGeometry.setAttribute('position',new THREE.Float32BufferAttribute(framePoints,3));frameGeometry.setIndex(frameIndices);frameGeometry.computeVertexNormals();
mesh(frameGeometry,enamel,tricycle);
rod(tricycle,[0,1.72,-.45],[0,2.02,-.45],.064,enamel);
const deck=mesh(new THREE.BoxGeometry(1.91,.07,.29),enamel,tricycle);deck.position.set(0,.99,rearAxleZ);
for(let i=-5;i<=5;i++){
 const tread=mesh(new THREE.BoxGeometry(.012,.006,.24),gripMaterial,tricycle);tread.position.set(i*.16,1.028,rearAxleZ);
}
const saddleShape=new THREE.Shape();saddleShape.moveTo(-.20,-.58);
saddleShape.bezierCurveTo(-.30,-.18,-.72,.02,-.70,.34);
saddleShape.bezierCurveTo(-.66,.57,.66,.57,.70,.34);
saddleShape.bezierCurveTo(.72,.02,.30,-.18,.20,-.58);
saddleShape.quadraticCurveTo(0,-.70,-.20,-.58);
const saddle=mesh(new THREE.ExtrudeGeometry(saddleShape,{depth:.08,bevelEnabled:true,bevelSize:.035,bevelThickness:.025,bevelSegments:3,steps:1,curveSegments:20}),saddleMaterial,tricycle);
saddle.rotation.x=-Math.PI/2;saddle.position.set(0,2.0,-.45);
// Two fork legs straddle the front wheel and lead into the steering head.
for(const side of[-1,1]){
 tube([[side*.16,frontAxleY,frontAxleZ],[side*.18,1.76,1.48],[side*.17,2.10,1.29],[side*.10,2.27,1.20]],.046,enamel,tricycle);
}
rod(tricycle,[0,2.15,1.22],[0,2.43,1.17],.084,enamel);
// A raised U-shaped bar has a level crosspiece and tall, backswept grip ends.
tube([[0,2.36,1.18],[0,2.52,1.18],[0,2.63,1.34],[0,2.69,1.43]],.046,chrome,tricycle);
tube([[-1.11,2.99,.86],[-1.10,2.98,1.12],[-1.04,2.88,1.35],[-.87,2.71,1.46],[-.60,2.69,1.45],[0,2.69,1.43],[.60,2.69,1.45],[.87,2.71,1.46],[1.04,2.88,1.35],[1.10,2.98,1.12],[1.11,2.99,.86]],.048,chrome,tricycle);
rod(tricycle,[-.10,2.69,1.43],[.10,2.69,1.43],.064,chrome);
ball(tricycle,spokeMaterial,[0,2.69,1.491],[.027,.027,.015],2);
for(const side of[-1,1]){
 rod(tricycle,[side*1.10,2.98,1.12],[side*1.11,2.99,.86],.061,gripMaterial);
 ball(tricycle,spokeMaterial,[side*1.11,2.99,.85],[.061,.061,.022],2);
}
// Direct-drive cranks turn with the front wheel, with level pedal platforms.
const crank=new THREE.Group();crank.name='Rotating pedal crank';crank.position.set(0,frontAxleY,frontAxleZ);tricycle.add(crank);
const pedalPlatforms=[];
for(const side of[-1,1]){
 const pedalY=side*.17,pedalZ=-side*.19;
 rod(crank,[side*.17,0,0],[side*.30,pedalY,pedalZ],.025,chrome);
 rod(crank,[side*.30,pedalY,pedalZ],[side*.53,pedalY,pedalZ],.023,chrome);
 const platform=new THREE.Group();platform.position.set(side*.44,pedalY,pedalZ);crank.add(platform);pedalPlatforms.push(platform);
 mesh(new THREE.BoxGeometry(.27,.075,.19),rubber,platform);
 for(let j=-1;j<=1;j++){const rib=mesh(new THREE.BoxGeometry(.24,.008,.012),saddleMaterial,platform);rib.position.set(0,.041,j*.05);}
}
function setRollingDistance(distance){
 for(const wheel of spinningWheels)wheel.rotation.z=distance/wheel.userData.radius;
 crank.rotation.x=distance/.86;
 for(const platform of pedalPlatforms)platform.rotation.x=-crank.rotation.x;
}
ball(tricycle,chrome,[-.47,2.76,1.45],[.085,.055,.085]);
rod(tricycle,[-.47,2.75,1.45],[-.57,2.77,1.45],.016,rubber);
const riderScale=.72,riderSeatY=2.08;
const puppet=new THREE.Group();puppet.scale.setScalar(riderScale);puppet.position.set(0,riderSeatY,-.45);model.add(puppet);
const bodyHeight=2.8,rows=64,cols=160,cutRow=32,halfMouth=8*Math.PI*2/cols;
const mouthCenter=-.13,mouthTop=.05+cutRow/rows*bodyHeight,maxMouthTravel=.12;
function radius(t){return 2.05*Math.pow(Math.max(0,Math.sin(Math.PI*t)),.40)*(1.19-.45*t);}
function rawSurface(t,a){
 const r=radius(t),noise=1+.018*Math.sin(a*5+t*9)+.012*Math.cos(a*9-t*7);
 // A small amount of fullness keeps the lower face rounded without a projecting chin.
 const s=THREE.MathUtils.clamp(t/(cutRow/rows),0,1);
 const muzzle=t<cutRow/rows?.20*Math.pow(Math.sin(Math.PI*s),.8)*Math.pow(Math.max(0,Math.cos(a)),3):0;
 const p=new THREE.Vector3(Math.sin(a)*r*noise-.28*t,.05+t*bodyHeight,Math.cos(a)*r*.68*noise+muzzle);
 // Soft cheek domes lift the painted spirals slightly out of the stone.
 const front=THREE.MathUtils.smoothstep(Math.cos(a),.25,.65);
 for(const cx of[-1.13,1.15]){
  const q=((p.x-cx)/.36)**2+((p.y-1.68)/.33)**2;
  if(q<1)p.z+=.09*(1-q)**2*front;
 }
 return p;
}
function angleAtX(t,x){let low=-Math.PI/2,high=Math.PI/2;for(let i=0;i<22;i++){const mid=(low+high)/2;if(rawSurface(t,mid).x<x)low=mid;else high=mid;}return(low+high)/2;}
// Keep each seam beneath its lip corner in the rock's own coordinates.
// A slight hand-drawn bend softens the lines without skewing the jaw to one side.
const seamStarts=[rawSurface(cutRow/rows,-halfMouth).x,rawSurface(cutRow/rows,halfMouth).x],seamCache=new Map();
function seamAngles(t){
 if(t===0||t>=cutRow/rows)return[-halfMouth,halfMouth];
 const key=t.toFixed(7);if(seamCache.has(key))return seamCache.get(key);
 const s=t/(cutRow/rows),bend=Math.sin(Math.PI*s);
 const angles=[angleAtX(t,seamStarts[0]-.018*bend),angleAtX(t,seamStarts[1]+.018*bend)];
 seamCache.set(key,angles);return angles;
}
function slotSurface(t,a){
 if(t<=cutRow/rows){const[left,right]=seamAngles(t);
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
const bodyGeometry=patchGeometry();const body=mesh(bodyGeometry,rockMaterial,puppet);body.name='Figsaw';outline(bodyGeometry,puppet);
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
// Close the jaw's shell so its rounded underside also gets a silhouette outline.
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
// Open, unblinking eyes track the viewer between smooth glances around the room.
const trackingEyes=[];
// A trace of red remains legible during the fluorescent's dim phases.
const irisMaterial=mat(0xf51528,.36);irisMaterial.emissive.set(0xb90d1a);irisMaterial.emissiveIntensity=.12;
const idlePose={headYaw:0,gazeYaw:0,gazePitch:0};
const gazeOrigin=new THREE.Vector3(),gazeDirection=new THREE.Vector3(),gazeTarget=new THREE.Vector3();
const gazeUp=new THREE.Vector3(0,1,0),previousEyeRotation=new THREE.Quaternion();
for(const side of[-1,1]){
 const x=side*.42-.09,y=1.84+(side===-1?.045:0),z=faceZ(x,y)+.044;
 const eye=new THREE.Group();eye.position.set(x,y,z);puppet.add(eye);trackingEyes.push(eye);
 ball(eye,mat(0x101015,.25),[0,0,0],[.156,.156,.075]);
 ball(eye,irisMaterial,[0,0,.055],[.084,.084,.029]);
 ball(eye,mat(0x0a090c,.32),[0,0,.074],[.039,.039,.016]);
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

// Half-size Figsaw rides from the shadowed coffee corner into the ceiling light's central pool.
const modelScale=.26,groundOffset=-.53*modelScale+.012;
model.scale.setScalar(modelScale);
const entrancePath=new THREE.CatmullRomCurve3([
 [2.45,groundOffset,-2.40],[2.05,groundOffset,-1.70],[1.05,groundOffset,-1.28],
 [.35,groundOffset,-1.10],[.24,groundOffset,-.66],[.12,groundOffset,.10]
].map(point=>new THREE.Vector3(...point)),false,'centripetal');
entrancePath.arcLengthDivisions=240;
const entranceLength=entrancePath.getLength(),ridePoint=new THREE.Vector3(),rideDirection=new THREE.Vector3();
const arrivalDialogue=document.querySelector('#figsaw-dialogue');
const dialogueAnnouncement=document.querySelector('#dialogue-announcement');
const dialogueText='I want to play a game...';
const dialogueAnchor=new THREE.Vector3(),dialogueProjection=new THREE.Vector3();
const dialogueRay=new THREE.Raycaster(),dialogueDirection=new THREE.Vector3();
let entranceStartedAt=0,entranceArrived=false,entranceArrivedAt=0,dialogueOccluded=false,nextDialogueVisibilityCheck=0,dialogueSpeech=null;
function showFigsawDialogue(text){
 arrivalDialogue.querySelector('.dialogue-bubble span').textContent=text;
 dialogueAnnouncement.textContent=`Figsaw. ${text}`;
 dialogueSpeech=reducedMotion?null:createDialogueSpeech(text,state.time);
}
function updateEntrance(time){
 const elapsed=time-entranceStartedAt-1.0;
 const progress=reducedMotion?1:THREE.MathUtils.smoothstep(elapsed,0,8.5);
 entrancePath.getPointAt(progress,ridePoint);entrancePath.getTangentAt(progress,rideDirection);
 model.position.copy(ridePoint);model.rotation.y=Math.atan2(rideDirection.x,rideDirection.z);
 // Turn the stone partly toward the saved viewpoint while the wheels follow the route.
 const viewerYaw=Math.atan2(homePosition.x-ridePoint.x,homePosition.z-ridePoint.z);
 const relativeYaw=THREE.MathUtils.euclideanModulo(viewerYaw-model.rotation.y+Math.PI,Math.PI*2)-Math.PI;
 setRollingDistance(progress*entranceLength/modelScale);
 if(progress===1&&!entranceArrived){entranceArrived=true;entranceArrivedAt=time;showFigsawDialogue(dialogueText);}
 figsawIdlePose(entranceArrived?time-entranceArrivedAt:-1,reducedMotion,idlePose);
 puppet.rotation.y=THREE.MathUtils.clamp(relativeYaw*.58,-.70,.70)+idlePose.headYaw;
}
updateEntrance(0);
const {group:office,laptop,setDisplayEnvironment,update:updateOffice,toggleHoist}=createOffice(renderer,homePosition);scene.add(office);
// Capture the actual furnished room once for subtle reflections in the display covers.
// Static environment capture keeps the glass reflective without six extra renders per frame.
const reflectionTarget=new THREE.WebGLCubeRenderTarget(128,{type:THREE.HalfFloatType});
const reflectionCamera=new THREE.CubeCamera(.08,20,reflectionTarget);reflectionCamera.position.set(0,1.35,.25);
reflectionCamera.update(renderer,scene);
const reflectionFilter=new THREE.PMREMGenerator(renderer);
const displayEnvironment=reflectionFilter.fromCubemap(reflectionTarget.texture);
setDisplayEnvironment(displayEnvironment.texture);reflectionTarget.dispose();reflectionFilter.dispose();
function updateArrivalDialogue(time){
 if(!entranceArrived){arrivalDialogue.hidden=true;return;}
 // Keep the bubble attached to the crown as the viewer walks or turns around.
 puppet.localToWorld(dialogueAnchor.set(-.28,bodyHeight+.24,0));
 dialogueProjection.copy(dialogueAnchor).project(camera);
 // A portrait view can clip his crown while part of the rock is still visible.
 const horizontalMargin=Math.min(.7,.40/(camera.position.distanceTo(dialogueAnchor)*Math.tan(THREE.MathUtils.degToRad(camera.fov/2))*camera.aspect));
 if(dialogueProjection.z<-1||dialogueProjection.z>1||Math.abs(dialogueProjection.x)>1+horizontalMargin||Math.abs(dialogueProjection.y)>1){arrivalDialogue.hidden=true;return;}
 if(time>=nextDialogueVisibilityCheck){
  nextDialogueVisibilityCheck=time+.12;
  dialogueDirection.copy(dialogueAnchor).sub(camera.position);const distance=dialogueDirection.length();
  dialogueRay.set(camera.position,dialogueDirection.normalize());dialogueRay.near=.06;dialogueRay.far=Math.max(.06,distance-.035);
  dialogueOccluded=dialogueRay.intersectObject(office,true).length>0;
 }
 if(dialogueOccluded){arrivalDialogue.hidden=true;return;}
 arrivalDialogue.hidden=false;
 const rect=canvas.getBoundingClientRect(),anchorX=rect.left+(dialogueProjection.x*.5+.5)*rect.width;
 const anchorY=rect.top+(-dialogueProjection.y*.5+.5)*rect.height;
 const halfWidth=arrivalDialogue.offsetWidth/2;
 const x=THREE.MathUtils.clamp(anchorX,halfWidth+12,innerWidth-halfWidth-12);
 const y=Math.max(arrivalDialogue.offsetHeight+14,anchorY-8);
 arrivalDialogue.style.transform=`translate3d(${x}px,${y}px,0) translate(-50%,-100%)`;
 arrivalDialogue.style.setProperty('--tail-offset',`${THREE.MathUtils.clamp(anchorX-x,-halfWidth+24,halfWidth-24)}px`);
}
const interactionRay=new THREE.Raycaster(),interactionPointer=new THREE.Vector2();
function interactionAt(event){
 const rect=canvas.getBoundingClientRect();
 interactionPointer.set((event.clientX-rect.left)/rect.width*2-1,-(event.clientY-rect.top)/rect.height*2+1);
 interactionRay.setFromCamera(interactionPointer,camera);
 // Pick the nearest surface so furniture and walls correctly occlude interactive objects.
 const hit=interactionRay.intersectObjects([office,model],true)[0];
 for(let object=hit?.object;object;object=object.parent){if(object===laptop.object||object===puppet||Number.isInteger(object.userData.hoistIndex))return object;}
 return null;
}
function openLaptop(){
 if(!laptop.open())return;
 canvas.classList.remove('over-laptop');
 canvas.setAttribute('aria-label',canvas.getAttribute('aria-label').replace('a closed MacBook Pro','an open MacBook Pro').replace(' Click the laptop or press Enter to open it.',''));
}
function operateHoist(index){const message=toggleHoist(index);if(message)document.querySelector('#hoist-status').textContent=message;}
let resetting=false,dragPointer=null,lastPointer=null,pointerDistance=0;
const movementKeys=new Set(['KeyW','KeyA','KeyS','KeyD','KeyE','KeyQ']),pressedKeys=new Set();
const wrapAngle=angle=>THREE.MathUtils.euclideanModulo(angle+Math.PI,Math.PI*2)-Math.PI;
function resetView(){pressedKeys.clear();resetting=true;entranceStartedAt=clock.elapsedTime;entranceArrived=false;arrivalDialogue.hidden=true;dialogueAnnouncement.textContent='';dialogueSpeech=null;state.talkUntil=0;nextDialogueVisibilityCheck=0;}
function releaseControls(){pressedKeys.clear();state.space=false;dragPointer=null;}

document.addEventListener('keydown',event=>{
 if(event.target.closest('input,textarea,select,[contenteditable="true"]')||event.metaKey||event.ctrlKey||event.altKey)return;
 if(movementKeys.has(event.code)){event.preventDefault();pressedKeys.add(event.code);resetting=false;return;}
 if(event.target.closest('button')&&(event.code==='Space'||event.code==='Enter'))return;
 if(event.code==='Enter'&&event.target===canvas){event.preventDefault();openLaptop();}
 if(/^Digit[1-3]$/.test(event.code)&&event.target===canvas&&!event.repeat){event.preventDefault();operateHoist(Number(event.code.slice(-1))-1);}
 if(event.code==='Space'){event.preventDefault();state.space=true;}
 if(event.code==='KeyR'&&!event.repeat)resetView();
 if(event.code.startsWith('Arrow')){
  event.preventDefault();resetting=false;
  if(event.code==='ArrowLeft')state.yaw=wrapAngle(state.yaw+.08);
  if(event.code==='ArrowRight')state.yaw=wrapAngle(state.yaw-.08);
  if(event.code==='ArrowUp')state.pitch=THREE.MathUtils.clamp(state.pitch+.05,-1.40,1.40);
  if(event.code==='ArrowDown')state.pitch=THREE.MathUtils.clamp(state.pitch-.05,-1.40,1.40);
 }
});
document.addEventListener('keyup',event=>{pressedKeys.delete(event.code);if(event.code==='Space')state.space=false;});
window.addEventListener('blur',releaseControls);
document.addEventListener('visibilitychange',()=>{if(document.hidden)releaseControls();});
canvas.addEventListener('pointerdown',event=>{
 if(dragPointer!==null)return;
 canvas.focus({preventScroll:true});dragPointer=event.pointerId;resetting=false;pointerDistance=0;
 lastPointer={x:event.clientX,y:event.clientY};canvas.setPointerCapture(event.pointerId);
});
canvas.addEventListener('pointermove',event=>{
 if(dragPointer===null){const hit=interactionAt(event);canvas.classList.toggle('over-laptop',hit===laptop.object&&!laptop.isOpen);canvas.classList.toggle('over-hoist',Number.isInteger(hit?.userData.hoistIndex));return;}
 if(event.pointerId!==dragPointer)return;
 const dx=event.clientX-lastPointer.x,dy=event.clientY-lastPointer.y;pointerDistance+=Math.abs(dx)+Math.abs(dy);
 state.yaw=wrapAngle(state.yaw-dx*.004);state.pitch=THREE.MathUtils.clamp(state.pitch+dy*.003,-1.40,1.40);lastPointer={x:event.clientX,y:event.clientY};
});
canvas.addEventListener('pointerup',event=>{
 if(event.pointerId!==dragPointer)return;
 dragPointer=null;
 if(pointerDistance<6){
  const hit=interactionAt(event);
  if(hit===laptop.object)openLaptop();
  else if(hit===puppet)state.talkUntil=state.time+1.8;
  else if(Number.isInteger(hit?.userData.hoistIndex))operateHoist(hit.userData.hoistIndex);
 }
});
canvas.addEventListener('pointerleave',()=>canvas.classList.remove('over-laptop','over-hoist'));
canvas.addEventListener('pointercancel',event=>{if(event.pointerId===dragPointer)dragPointer=null;});
canvas.addEventListener('lostpointercapture',event=>{if(event.pointerId===dragPointer)dragPointer=null;});
canvas.addEventListener('wheel',event=>{event.preventDefault();resetting=false;state.zoom=THREE.MathUtils.clamp(state.zoom+event.deltaY*.0005,.78,1.0);},{passive:false});

// Export the rendered camera, including responsive framing and zoom, as a paste-ready prompt.
const copyViewButton=document.querySelector('#copy-view'),copyViewLabel=copyViewButton.querySelector('span');
const copyStatus=document.querySelector('#copy-status'),copyFallback=document.querySelector('#copy-fallback'),viewText=document.querySelector('#view-text');
let copyFeedbackTimer;
function currentViewPrompt(){
 const roundedVector=vector=>vector.toArray().map(value=>Number(value.toFixed(6)));
 const direction=camera.getWorldDirection(new THREE.Vector3());
 const view={position:roundedVector(camera.position),lookAt:roundedVector(camera.position.clone().add(direction)),fov:Number(camera.fov.toFixed(4))};
 return `Set this as the default camera view for Figsaw:\n${JSON.stringify(view,null,2)}`;
}
function copySelectedText(text){
 const selection=document.createElement('textarea');selection.value=text;selection.readOnly=true;
 selection.style.cssText='position:fixed;left:-9999px;top:0;font-size:16px';document.body.append(selection);
 selection.focus();selection.select();selection.setSelectionRange(0,text.length);
 let copied=false;
 try{copied=document.execCommand('copy');}catch{}
 selection.remove();copyViewButton.focus({preventScroll:true});return copied;
}
copyViewButton.addEventListener('click',async()=>{
 const text=currentViewPrompt();viewText.value=text;clearTimeout(copyFeedbackTimer);
 let copied=false;
 try{if(navigator.clipboard?.writeText){await navigator.clipboard.writeText(text);copied=true;}}catch{}
 if(!copied)copied=copySelectedText(text);
 if(copied){
  copyFallback.hidden=true;copyViewLabel.textContent='Copied';copyStatus.textContent='View copied. Paste it into the chat to set the default view.';
 }else{
  copyFallback.hidden=false;viewText.focus();viewText.select();
  copyStatus.textContent='Select and copy the view below, then paste it into the chat.';
 }
 copyFeedbackTimer=setTimeout(()=>{copyViewLabel.textContent='Copy view';},2200);
});
document.querySelector('#close-copy').addEventListener('click',()=>{copyFallback.hidden=true;copyViewButton.focus();});

function resize(){
 const {width,height}=canvas.getBoundingClientRect();if(!width||!height)return;
 renderer.setSize(width,height,false);camera.aspect=width/height;camera.fov=homeCamera.fov*state.zoom;camera.updateProjectionMatrix();
}
const resizeObserver=new ResizeObserver(resize);resizeObserver.observe(canvas);resize();
const clock=new THREE.Clock();
function render(){
 const dt=Math.min(clock.getDelta(),.04),t=state.time+=dt,eased=1-Math.exp(-dt*12);
 if(resetting){
  state.yaw=wrapAngle(state.yaw+wrapAngle(homeView.yaw-state.yaw)*eased*.5);state.pitch=mix(state.pitch,homeView.pitch,eased*.5);state.zoom=mix(state.zoom,1,eased*.5);
  cameraPosition.lerp(homePosition,eased*.5);
  if(Math.abs(wrapAngle(state.yaw-homeView.yaw))+Math.abs(state.pitch-homeView.pitch)+Math.abs(state.zoom-1)+cameraPosition.distanceTo(homePosition)<.005){
   state.yaw=homeView.yaw;state.pitch=homeView.pitch;state.zoom=1;cameraPosition.copy(homePosition);resetting=false;
  }
 }
 const viewYaw=state.yaw;
 // Walk along the floor plane relative to the view; E/Q independently change eye height.
 const forward=Number(pressedKeys.has('KeyW'))-Number(pressedKeys.has('KeyS'));
 const strafe=Number(pressedKeys.has('KeyD'))-Number(pressedKeys.has('KeyA'));
 const vertical=Number(pressedKeys.has('KeyE'))-Number(pressedKeys.has('KeyQ'));
 moveDirection.set(-Math.sin(viewYaw)*forward+Math.cos(viewYaw)*strafe,vertical,-Math.cos(viewYaw)*forward-Math.sin(viewYaw)*strafe);
 if(moveDirection.lengthSq()>0){
  cameraPosition.addScaledVector(moveDirection.normalize(),dt*1.05);
  cameraPosition.x=THREE.MathUtils.clamp(cameraPosition.x,-3.72,3.72);
  cameraPosition.y=THREE.MathUtils.clamp(cameraPosition.y,.08,3.0);
  cameraPosition.z=THREE.MathUtils.clamp(cameraPosition.z,-3.78,4.25);
 }
 camera.position.copy(cameraPosition);
 viewDirection.set(-Math.sin(viewYaw)*Math.cos(state.pitch),Math.sin(state.pitch),-Math.cos(viewYaw)*Math.cos(state.pitch));
 cameraTarget.copy(cameraPosition).add(viewDirection);camera.lookAt(cameraTarget);
 const fov=homeCamera.fov*state.zoom;
 if(Math.abs(camera.fov-fov)>.001){camera.fov=fov;camera.updateProjectionMatrix();}
 updateEntrance(clock.elapsedTime);
 const dialogueMouth=dialogueMouthAmount(dialogueSpeech,t);
 const tapMouth=t<state.talkUntil?.16+.7*Math.sin(t*10)**2:0;
 const mouthTarget=state.space?1:Math.max(dialogueMouth,tapMouth);
 state.jaw=mix(state.jaw,mouthTarget,eased);jaw.position.y=-state.jaw*maxMouthTravel;
 puppet.position.y=riderSeatY+state.jaw*maxMouthTravel*riderScale;
 laptop.update(dt,reducedMotion);
 fluorescent.intensity=fluorescentPower*updateOffice(t,reducedMotion);
 model.updateMatrixWorld(true);
 // One shared distant target keeps both eyes coordinated. Their faster motion
 // leads the head, then settles back toward the viewer between glances.
 puppet.localToWorld(gazeOrigin.set(-.09,1.86,1.0));
 gazeDirection.copy(camera.position).sub(gazeOrigin);
 const gazeDistance=Math.max(1,gazeDirection.length());
 gazeDirection.normalize().applyAxisAngle(gazeUp,idlePose.gazeYaw);
 gazeDirection.y+=idlePose.gazePitch;gazeDirection.normalize();
 gazeTarget.copy(gazeOrigin).addScaledVector(gazeDirection,gazeDistance);
 for(const eye of trackingEyes){
  previousEyeRotation.copy(eye.quaternion);eye.lookAt(gazeTarget);
  if(!reducedMotion)eye.quaternion.copy(previousEyeRotation.slerp(eye.quaternion,1-Math.exp(-dt*16)));
 }
 renderer.render(scene,camera);updateArrivalDialogue(t);requestAnimationFrame(render);
}
render();
canvas.addEventListener('webglcontextlost',event=>event.preventDefault());
canvas.addEventListener('webglcontextrestored',()=>location.reload());
