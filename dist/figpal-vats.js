import {batchStaticScenery} from './static-batching.js';
import * as THREE from './vendor/three.module.js';
import {renderQuality as quality} from './render-quality.js';
import { weatheredMetal, createTankMaterials } from './industrial-materials.js?v=brighter-liquid';
import { figpalSwayPose } from './character-motion.js';
import { createFloatingBones } from './floating-bones.js?v=no-skulls';
import { createFigpalTransformation } from './figpal-transformation.js?v=figpal-identity';
import { createTankDecalFactory } from './tank-decal.js';

// The three little captives are modeled from the supplied Figpals illustration.
// Shapes, glass, liquid and wear are procedural; the supplied tank decal is bundled.
export function createFigpalVats(){
 const group=new THREE.Group();group.name='Three suspended Figpals over bubbling green canisters';
 const TAU=Math.PI*2;
 let seed=193108;const random=()=>{seed=(seed*1664525+1013904223)>>>0;return seed/4294967296;};
 const material=(color,roughness=.78,emission=.005)=>new THREE.MeshStandardMaterial({color,roughness,emissive:color,emissiveIntensity:emission});
 const ink=material(0x121415,.85,0),cream=material(0xffedb6),rice=material(0xf6f4e7),blue=material(0x008ce8),orange=material(0xe8570c),ribOrange=material(0xa83109),gold=material(0xffac22),pink=material(0xffa8a7),fishBlue=material(0x9bdcf4),finBlue=material(0x047cdc),yellow=material(0xffd428);
 const outlineMaterial=new THREE.MeshBasicMaterial({color:0x101313,side:THREE.BackSide});
 outlineMaterial.onBeforeCompile=shader=>{shader.vertexShader=shader.vertexShader.replace('#include <begin_vertex>','#include <begin_vertex>\ntransformed += normal * 0.009;');};
 outlineMaterial.customProgramCacheKey=()=> 'figpal-outline-v1';
 function mesh(geometry,mat,parent=group,outlined=false){
  const m=new THREE.Mesh(geometry,mat);m.castShadow=true;m.receiveShadow=true;parent.add(m);
  if(outlined){const edge=new THREE.Mesh(geometry,outlineMaterial);edge.name='Ink outline';m.add(edge);}
  return m;
 }
 function ball(pos,size,mat,parent,outlined=false){const m=mesh(new THREE.SphereGeometry(1,quality.mobile?12:24,quality.mobile?8:16),mat,parent,outlined);m.position.set(...pos);m.scale.set(...size);return m;}
 function box(size,pos,mat,parent=group){const m=mesh(new THREE.BoxGeometry(...size),mat,parent);m.position.set(...pos);return m;}
 function cylinder(radius,height,pos,mat,parent=group,open=false){const m=mesh(new THREE.CylinderGeometry(radius,radius,height,quality.mobile?16:48,1,open),mat,parent);m.position.set(...pos);return m;}
 function line(points,r,mat,parent=group){const curve=new THREE.CatmullRomCurve3(points.map(p=>new THREE.Vector3(...p)));return mesh(new THREE.TubeGeometry(curve,Math.max(12,points.length*(quality.mobile?2:5)),r,quality.mobile?4:6,false),mat,parent);}
 function rod(a,b,r,mat,parent=group){const start=new THREE.Vector3(...a),end=new THREE.Vector3(...b),d=end.clone().sub(start);const m=cylinder(r,d.length(),start.clone().add(end).multiplyScalar(.5).toArray(),mat,parent);m.quaternion.setFromUnitVectors(new THREE.Vector3(0,1,0),d.normalize());return m;}
 function ring(radius,tube,y,mat,parent=group){const m=mesh(new THREE.TorusGeometry(radius,tube,quality.mobile?5:8,quality.mobile?32:64),mat,parent);m.rotation.x=Math.PI/2;m.position.y=y;return m;}
 function extrude(shape,depth,mat,parent,bevel=.035){
  const geometry=new THREE.ExtrudeGeometry(shape,{depth:depth-bevel*2,bevelEnabled:true,bevelSize:bevel,bevelThickness:bevel,bevelSegments:quality.mobile?1:3,steps:1,curveSegments:quality.mobile?8:16});
  geometry.translate(0,0,-depth/2+bevel);return mesh(geometry,mat,parent,true);
 }
 function face(parent,y,z,spacing=.105,expression='worried'){
  const expressionGroup=new THREE.Group();expressionGroup.name=`${expression} expression`;parent.add(expressionGroup);
  for(const side of[-1,1]){
   ball([side*spacing,y,z],[.022,.031,.013],ink,expressionGroup);
   // Inner ends lift toward the forehead: anxious brows, not an angry scowl.
   line([[side*(spacing+.035),y+.041,z+.004],[side*spacing,y+.055,z+.007],[side*(spacing-.035),y+.074,z+.007]],.010,ink,expressionGroup);
  }
  if(expression==='afraid')ball([0,y-.075,z+.003],[.026,.038,.012],ink,expressionGroup);
  else line([[-.052,y-.091,z],[0,y-.060,z+.005],[.052,y-.091,z]],.012,ink,expressionGroup);
 }
 function pudding(){
  const g=new THREE.Group();g.name='Party-hat pudding Figpal';
  const s=new THREE.Shape();s.moveTo(-.30,-.27);s.bezierCurveTo(-.42,-.19,-.38,.12,-.29,.24);s.quadraticCurveTo(0,.34,.29,.24);s.bezierCurveTo(.38,.12,.42,-.19,.30,-.27);s.quadraticCurveTo(0,-.34,-.30,-.27);
  extrude(s,.37,gold,g,.035);
  const icing=new THREE.Shape();icing.moveTo(-.29,.25);icing.quadraticCurveTo(0,.34,.29,.25);icing.lineTo(.30,.13);icing.quadraticCurveTo(.28,.10,.22,.16);icing.lineTo(.15,.055);icing.quadraticCurveTo(.13,.035,.08,.115);icing.lineTo(.01,.045);icing.quadraticCurveTo(-.02,.028,-.09,.12);icing.lineTo(-.17,.065);icing.quadraticCurveTo(-.20,.05,-.22,.16);icing.lineTo(-.30,.13);icing.closePath();
  const frosting=extrude(icing,.025,cream,g,.006);frosting.position.z=.191;
  face(g,-.045,.222);
  for(const side of[-1,1])ball([side*.24,-.085,.206],[.045,.028,.012],pink,g);
  const hat=new THREE.Group();hat.position.set(.02,.285,0);hat.rotation.z=-.12;hat.scale.setScalar(.60);g.add(hat);
  const c=document.createElement('canvas');c.width=512;c.height=256;const ctx=c.getContext('2d');ctx.fillStyle='#ffd62d';ctx.fillRect(0,0,512,256);ctx.fillStyle='#0088ea';
  for(let row=0;row<4;row++)for(let col=0;col<7;col++){ctx.beginPath();ctx.ellipse(col*85+(row%2)*42,30+row*67,18,14,0,0,TAU);ctx.fill();}
  const map=new THREE.CanvasTexture(c);map.colorSpace=THREE.SRGBColorSpace;
  const hatMat=new THREE.MeshStandardMaterial({map,roughness:.82});
  const cone=mesh(new THREE.ConeGeometry(.205,.50,48),hatMat,hat,true);cone.position.y=.25;
  ring(.205,.009,0,ink,hat);
  ball([0,.515,0],[.042,.045,.041],blue,hat);
  for(let i=0;i<8;i++){const a=i/8*TAU;rod([0,.515,.005],[Math.cos(a)*.07,.515+Math.sin(a)*.07,.006],.012,blue,hat);}
  return {object:g};
 }
 function sushi(){
  const g=new THREE.Group();g.name='Orange-beanie sushi Figpal';
  const s=new THREE.Shape();s.moveTo(-.32,-.035);s.quadraticCurveTo(-.38,-.11,-.31,-.20);
  for(let i=0;i<8;i++){const x=-.31+i*.0775;s.quadraticCurveTo(x+.038,-.285,x+.0775,-.225);}
  s.quadraticCurveTo(.39,-.13,.32,-.035);s.quadraticCurveTo(0,.035,-.32,-.035);extrude(s,.43,rice,g,.025);
  const topping=new THREE.Shape();topping.moveTo(-.37,-.015);topping.lineTo(-.41,.17);topping.quadraticCurveTo(-.40,.22,-.21,.29);topping.quadraticCurveTo(0,.33,.21,.29);topping.quadraticCurveTo(.40,.22,.41,.17);topping.lineTo(.37,-.015);topping.quadraticCurveTo(0,.055,-.37,-.015);
  extrude(topping,.43,yellow,g,.022);
  const nori=new THREE.Shape();nori.moveTo(-.12,.022);nori.lineTo(-.13,.31);nori.quadraticCurveTo(0,.33,.13,.31);nori.lineTo(.12,.022);nori.closePath();const seaweed=extrude(nori,.44,ink,g,.006);seaweed.position.z=.008;
  face(g,-.10,.253,.10,'afraid');
  for(let i=0;i<16;i++){const a=i/16*TAU;ball([Math.cos(a)*.29,-.18+Math.sin(a)*.025,Math.sin(a)*.17],[.031,.022,.015],rice,g);}
  const hat=new THREE.Group();hat.position.y=.30;g.add(hat);
  const dome=mesh(new THREE.SphereGeometry(1,32,16,0,TAU,0,Math.PI/2),orange,hat,true);dome.scale.set(.235,.235,.20);
  for(let i=0;i<10;i++){const a=i/10*TAU,points=[];for(let j=0;j<=14;j++){const t=.08+j/14*(Math.PI/2-.08);points.push([Math.sin(t)*Math.cos(a)*.238,Math.cos(t)*.237,Math.sin(t)*Math.sin(a)*.204]);}line(points,.006,ribOrange,hat);}
  const cuff=cylinder(.258,.065,[0,.002,0],orange,hat);cuff.scale.z=.86;ring(.26,.009,-.030,ink,hat).scale.y=.86;ring(.26,.008,.034,ink,hat).scale.y=.86;
  for(let i=0;i<30;i++){const a=i/30*TAU;rod([Math.cos(a)*.259,-.025,Math.sin(a)*.224],[Math.cos(a)*.259,.027,Math.sin(a)*.224],.0045,ribOrange,hat);}
  return {object:g};
 }
 function pufferfish(){
  const g=new THREE.Group();g.name='Propeller-hat pufferfish Figpal';
  ball([0,0,0],[.335,.33,.25],fishBlue,g,true);
  const tail=new THREE.Shape();tail.moveTo(.26,.03);tail.quadraticCurveTo(.34,.06,.40,.16);tail.quadraticCurveTo(.49,.23,.50,.06);tail.quadraticCurveTo(.51,-.11,.43,-.13);tail.lineTo(.33,-.05);tail.closePath();extrude(tail,.11,fishBlue,g,.02);
  for(let i=0;i<3;i++)line([[.38,-.025+i*.04,.078],[.465,-.075+i*.085,.078]],.012,finBlue,g);
  for(const side of[-1,1]){const fin=ball([side*.303,-.02,.13],[.065,.10,.035],fishBlue,g,true);fin.rotation.z=side*.25;for(let i=0;i<3;i++)line([[side*.30,-.06+i*.04,.168],[side*.338,-.075+i*.05,.160]],.01,finBlue,g);}
  face(g,.015,.252,.09,'worried');
  for(let i=0;i<11;i++){const a=Math.PI*1.03+i/10*Math.PI*.90,x=Math.cos(a)*.26,y=Math.sin(a)*.25;const z=.25*Math.sqrt(Math.max(.04,1-(x/.335)**2-(y/.33)**2))+.008;line([[x,y,z],[x+.008,y-.027,z]],.011,finBlue,g);}
  for(let i=0;i<7;i++){const a=.15+i/6*Math.PI*.88;rod([Math.cos(a)*.31,Math.sin(a)*.31,0],[Math.cos(a)*.37,Math.sin(a)*.37,0],.012,finBlue,g);}
  const hat=new THREE.Group();hat.position.set(0,.275,0);g.add(hat);
  const panels=[material(0xf04615),yellow,material(0x4946e9),yellow];
  for(let i=0;i<4;i++){const dome=mesh(new THREE.SphereGeometry(1,12,12,i*TAU/4,TAU/4,0,Math.PI/2),panels[i],hat);dome.scale.set(.215,.20,.215);}
  ring(.218,.011,0,ink,hat);rod([0,.20,0],[0,.27,0],.012,rice,hat);
  const propeller=new THREE.Group();propeller.position.y=.275;hat.add(propeller);
  ball([0,0,0],[.025,.018,.025],rice,propeller);for(const side of[-1,1])ball([side*.066,0,0],[.083,.012,.029],rice,propeller);
  return {object:g,propeller};
 }

 const steel=weatheredMetal(0xe1ddd0),darkMetal=weatheredMetal(0x92958c),fastener=weatheredMetal(0xe5e0d4),chainMetal=weatheredMetal(0xd5d0c6);
 chainMetal.bumpScale=.0007;chainMetal.envMapIntensity=.85;
 const grease=new THREE.MeshStandardMaterial({color:0x151811,roughness:.29,metalness:.08});
 // Oval welded links have straight shanks, rounded ends, and alternating planes.
 const linkPoints=[];
 for(let j=0;j<=12;j++){const a=j/12*Math.PI;linkPoints.push(new THREE.Vector3(Math.cos(a)*.015,.010+Math.sin(a)*.015,0));}
 for(let j=0;j<=12;j++){const a=Math.PI+j/12*Math.PI;linkPoints.push(new THREE.Vector3(Math.cos(a)*.015,-.010+Math.sin(a)*.015,0));}
 const chainGeometry=new THREE.TubeGeometry(new THREE.CatmullRomCurve3(linkPoints,true),quality.chainSegments,.0048,quality.chainRadialSegments,true);
 const chainDummy=new THREE.Object3D(),chainUp=new THREE.Vector3(0,1,0),chainTwist=new THREE.Quaternion();
 function chainRun(points,parent,maxLinks=null){
  const curve=new THREE.CatmullRomCurve3(points.map(p=>new THREE.Vector3(...p))),length=curve.getLength();
  const count=maxLinks??Math.max(2,Math.ceil(length/.033));
  const links=new THREE.InstancedMesh(chainGeometry,chainMetal,count);links.name='Interlocking steel chain links';links.castShadow=true;links.receiveShadow=true;links.frustumCulled=false;parent.add(links);
  for(let j=0;j<count;j++)links.setColorAt(j,new THREE.Color().setRGB(.67+random()*.30,.58+random()*.30,.45+random()*.34));
  function setPoints(a,b){
   const start=new THREE.Vector3(...a),end=new THREE.Vector3(...b),direction=end.clone().sub(start),distance=direction.length();
   const n=Math.min(count,Math.max(2,Math.ceil(distance/.033)));links.count=n;direction.normalize();
   for(let j=0;j<n;j++){chainDummy.position.copy(start).lerp(end,j/(n-1));chainDummy.quaternion.setFromUnitVectors(chainUp,direction);chainTwist.setFromAxisAngle(chainUp,(j%2?Math.PI/2:0)+Math.sin(j*7.17)*.07);chainDummy.quaternion.multiply(chainTwist);chainDummy.scale.setScalar(1);chainDummy.updateMatrix();links.setMatrixAt(j,chainDummy.matrix);}
   links.instanceMatrix.needsUpdate=true;
  }
  if(maxLinks){links.instanceMatrix.setUsage(THREE.DynamicDrawUsage);setPoints(points[0],points.at(-1));}
  else for(let j=0;j<count;j++){const t=j/(count-1);chainDummy.position.copy(curve.getPointAt(t));chainDummy.quaternion.setFromUnitVectors(chainUp,curve.getTangentAt(t));chainTwist.setFromAxisAngle(chainUp,(j%2?Math.PI/2:0)+Math.sin(j*7.17)*.07);chainDummy.quaternion.multiply(chainTwist);chainDummy.scale.setScalar(1);chainDummy.updateMatrix();links.setMatrixAt(j,chainDummy.matrix);}
  return {object:links,setPoints};
 }
 const tankMaterials=createTankMaterials();
 const createTankDecal=createTankDecalFactory();
 const {glass,haze,fluid,liquidTop,foam:foamMat,bubble:bubbleMat,ripple:rippleMat,waterTime}=tankMaterials;
 const rigs=[],vats=[],valves=[],speechAnchors=[],dummy=new THREE.Object3D();
 // A staggered left-hand bay leaves Figsaw and his dialogue clear in the saved view.
 const stations=[{x:-3.05,z:-1.05,height:2.02,winchY:2.80},{x:-2.85,z:.30,height:1.84,winchY:2.65},{x:-2.15,z:1.45,height:1.60,winchY:2.38}];
 for(let i=0;i<stations.length-1;i++){const a=stations[i],b=stations[i+1];rod([a.x,3.065,a.z],[b.x,3.065,b.z],.052,steel);}
 const makers=[pudding,sushi,pufferfish];
 for(let i=0;i<3;i++){
  const {x,z:tankZ,height,winchY}=stations[i];
  const vat=new THREE.Group();vat.position.set(x,.012,tankZ);vat.name=`Green bubbling canister ${i+1}`;group.add(vat);
  cylinder(.515,.16,[0,.10,0],steel,vat);cylinder(.46,.035,[0,.025,0],darkMetal,vat);
  for(let j=0;j<8;j++){const a=j/8*TAU;ball([Math.cos(a)*.49,.15,Math.sin(a)*.49],[.022,.022,.022],fastener,vat);}
  const shell=cylinder(.485,1.02,[0,.72,0],glass,vat,true);shell.castShadow=false;shell.renderOrder=6;
  const deposits=cylinder(.487,1.02,[0,.72,0],haze,vat,true);deposits.name='Condensation, mineral streaks and algae tide marks';deposits.castShadow=false;deposits.renderOrder=7;
  vat.add(createTankDecal());
  const liquid=cylinder(.444,.865,[0,.64,0],fluid,vat,true);liquid.castShadow=false;liquid.renderOrder=2;
  const floatingBones=createFloatingBones(i);vat.add(floatingBones.group);
  for(const bone of floatingBones.group.children)batchStaticScenery(bone,{minObjects:2,dispose:false});
  cylinder(.444,.018,[0,.215,0],liquidTop,vat);
  for(const y of[.225,1.235]){ring(.484,.036,y,steel,vat);ring(.454,.010,y-.018,darkMetal,vat);}
  for(const a of[.15,2.24,4.34]){const px=Math.cos(a)*.485,pz=Math.sin(a)*.485;rod([px,.22,pz],[px,1.23,pz],.021,steel,vat);}
  for(const side of[-1,1]){line([[side*.47,.96,0],[side*.58,.96,0],[side*.58,.74,0],[side*.48,.74,0]],.022,steel,vat);}
  // A wet, uneven open meniscus, rather than a solid lid.
  const surfaceGeometry=new THREE.RingGeometry(0,.444,quality.mobile?32:48,quality.mobile?6:10);surfaceGeometry.rotateX(-Math.PI/2);
  const surface=mesh(surfaceGeometry,liquidTop,vat);surface.position.y=1.074;surface.castShadow=false;surface.renderOrder=4;
  ring(.441,.006,1.075,liquidTop,vat).renderOrder=4;
  const bubbleData=Array.from({length:quality.mobile?18:48},()=>({x:(random()-.5)*.61,z:(random()-.5)*.61,r:.007+random()**2*.023,phase:random(),speed:.15+random()*.17}));
  const bubbles=new THREE.InstancedMesh(new THREE.SphereGeometry(1,12,8),bubbleMat,bubbleData.length);bubbles.name='Rising liquid bubbles';bubbles.instanceMatrix.setUsage(THREE.DynamicDrawUsage);bubbles.frustumCulled=false;bubbles.renderOrder=3;vat.add(bubbles);
  const foam=[];for(let j=0;j<(quality.mobile?6:24);j++){const a=random()*TAU,r=j<18?.40+random()*.025:random()*.34,baseRadius=.006+random()*.016;const m=ball([Math.cos(a)*r,1.074,Math.sin(a)*r],[baseRadius,baseRadius*.65,baseRadius],foamMat,vat);m.castShadow=false;m.renderOrder=5;foam.push({mesh:m,baseRadius,phase:random()*TAU});}
  const ripples=[];for(let j=0;j<(quality.mobile?2:5);j++){const m=mesh(new THREE.RingGeometry(.96,1,quality.mobile?20:40),rippleMat.clone(),vat);m.rotation.x=-Math.PI/2;m.position.set((random()-.5)*.45,1.078,(random()-.5)*.45);m.castShadow=false;m.renderOrder=5;ripples.push({mesh:m,phase:random()});}
  // Stenciled identification, a pressure gauge and weathered lower-band stripes.
  const labelCanvas=document.createElement('canvas');labelCanvas.width=256;labelCanvas.height=128;const labelCtx=labelCanvas.getContext('2d');labelCtx.fillStyle='#bec39f';labelCtx.fillRect(0,0,256,128);labelCtx.fillStyle='#242c22';labelCtx.font='bold 67px monospace';labelCtx.textAlign='center';labelCtx.fillText(`0${i+1}`,128,87);
  const labelMap=new THREE.CanvasTexture(labelCanvas);labelMap.colorSpace=THREE.SRGBColorSpace;
  const plate=mesh(new THREE.PlaneGeometry(.17,.085),new THREE.MeshStandardMaterial({map:labelMap,roughness:.9}),vat);plate.position.set(0,.115,.517);plate.castShadow=false;
  for(let j=0;j<5;j++){const stripe=box([.065,.065,.007],[-.23+j*.115,.12,.50],j%2?ink:material(0x99924e,.85,0),vat);stripe.rotation.z=-.45;}
  plate.position.z=.520;
  const gauge=cylinder(.064,.03,[.32,1.19,.37],steel,vat);gauge.rotation.x=Math.PI/2;
  const dial=mesh(new THREE.CircleGeometry(.052,24),cream,vat);dial.position.set(.32,1.19,.391);line([[.32,1.19,.395],[.30,1.219,.395]],.003,ink,vat);
  const drain=new THREE.Group();drain.name=`Tank ${i+1} drain valve`;drain.position.set(.30,.29,.43);drain.userData.valveIndex=i;vat.add(drain);
  const fitting=cylinder(.042,.19,[0,0,0],steel,drain);fitting.rotation.x=Math.PI/2;
  line([[0,0,.045],[0,-.035,.16],[0,-.10,.23]],.033,steel,drain);
  const outlet=new THREE.Object3D();outlet.position.set(0,-.10,.23);drain.add(outlet);
  const mouth=mesh(new THREE.RingGeometry(.024,.034,20),steel,drain);mouth.position.copy(outlet.position);mouth.rotation.x=.60;
  const interior=mesh(new THREE.CircleGeometry(.024,20),darkMetal,drain);interior.position.copy(outlet.position);interior.position.z-=.001;interior.rotation.x=.60;
  rod([0,0,.01],[0,.075,.11],.012,steel,drain);
  const wheel=new THREE.Group();wheel.name='Spinning red drain handwheel';wheel.position.set(0,.075,.12);drain.add(wheel);
  mesh(new THREE.TorusGeometry(.088,.010,8,32),ribOrange,wheel);
  for(let j=0;j<3;j++){const a=j/3*TAU;rod([0,0,0],[Math.cos(a)*.084,Math.sin(a)*.084,0],.007,ribOrange,wheel);}
  const hub=cylinder(.018,.028,[0,0,0],fastener,wheel);hub.rotation.x=Math.PI/2;
  const pick=mesh(new THREE.SphereGeometry(.102,12,8),new THREE.MeshBasicMaterial({transparent:true,opacity:0,depthWrite:false,colorWrite:false}),wheel);pick.castShadow=false;
  valves.push({object:drain,outlet,setOpen(progress){wheel.rotation.z=-progress*Math.PI*4;wheel.position.z=.12+progress*.018;}});
  const glow=new THREE.PointLight(0x6b9c25,.58,1.7,2);glow.position.set(0,.85,0);glow.userData.mobileEssential=i===1;vat.add(glow);if(quality.mobile)glow.visible=i===1;
  vats.push({surface,bubbles,bubbleData,foam,ripples,floatingBones,phase:i*1.7});

  const facing=Math.atan2(1.85221-x,3.1149-tankZ);
  vat.rotation.y=facing;
  const rig=new THREE.Group();rig.name=`Chain hoist ${i+1}`;rig.position.set(x,0,tankZ);rig.rotation.y=facing;group.add(rig);
  box([.40,.05,.34],[0,3.13,0],steel,rig);
  for(const side of[-1,1]){rod([side*.16,3.12,0],[side*.16,winchY+.10,0],.023,steel,rig);ball([side*.16,3.12,.08],[.026,.026,.026],fastener,rig);}
  const winch=new THREE.Group();winch.name=`Winch ${i+1}: lower or raise Figpal`;winch.position.y=winchY;winch.userData.hoistIndex=i;rig.add(winch);
  box([.46,.12,.30],[0,.10,-.03],steel,winch);
  // Bolted bearing cheeks, grease seals, and a battered motor junction box.
  for(const side of[-1,1]){
   box([.035,.22,.27],[side*.191,.012,-.01],steel,winch);
   const collar=cylinder(.057,.055,[side*.205,0,0],grease,winch);collar.rotation.z=Math.PI/2;
   for(const y of[-.073,.093])for(const z of[-.106,.096]){
    const bolt=mesh(new THREE.CylinderGeometry(.013,.013,.018,6),fastener,winch);bolt.position.set(side*.215,y,z);bolt.rotation.z=Math.PI/2;
   }
  }
  box([.105,.09,.11],[.30,.15,-.035],darkMetal,winch);
  line([[.30,.18,.01],[.38,.21,.06],[.43,.12,.10],[.40,-.04,.07]],.008,grease,winch);
  const serviceCanvas=document.createElement('canvas');serviceCanvas.width=256;serviceCanvas.height=128;
  const sc=serviceCanvas.getContext('2d');sc.fillStyle='#817653';sc.fillRect(0,0,256,128);sc.fillStyle='#2a2b24';sc.font='bold 22px monospace';sc.fillText('CHAIN HOIST',15,30);sc.font='18px monospace';sc.fillText('250 KG / 1978',15,62);sc.fillText('SERVICE OVERDUE',15,103);
  for(let d=0;d<90;d++){sc.fillStyle=d%2?'rgba(42,25,12,.48)':'rgba(170,156,116,.7)';sc.fillRect(random()*256,random()*128,random()*17,random()*3);}
  const serviceMap=new THREE.CanvasTexture(serviceCanvas);serviceMap.colorSpace=THREE.SRGBColorSpace;
  const servicePlate=mesh(new THREE.PlaneGeometry(.25,.10),new THREE.MeshStandardMaterial({map:serviceMap,roughness:.87}),winch);servicePlate.position.set(-.005,.10,.124);servicePlate.rotation.z=.028;

  const drumMount=new THREE.Group();drumMount.rotation.z=Math.PI/2;winch.add(drumMount);
  const drum=new THREE.Group();drum.name='Rotating chain sprocket';drumMount.add(drum);
  cylinder(.10,.28,[0,0,0],darkMetal,drum);
  for(const side of[-1,1]){cylinder(.136,.026,[0,side*.16,0],steel,drum);for(let j=0;j<12;j++){const a=j/12*TAU;box([.026,.03,.032],[Math.cos(a)*.13,side*.16,Math.sin(a)*.13],fastener,drum);}}
  const winding=[];for(let j=0;j<=120;j++){const a=j/120*TAU*4;winding.push([Math.cos(a)*.106,-.10+j/120*.20,Math.sin(a)*.106]);}chainRun(winding,drum).object.name='Greasy chain wound around the drum';
  const motor=cylinder(.105,.24,[.30,.015,-.04],darkMetal,winch);motor.rotation.z=Math.PI/2;
  for(let j=0;j<6;j++){const fin=cylinder(.115,.009,[.215+j*.033,.015,-.04],steel,winch);fin.rotation.z=Math.PI/2;}
  const crank=new THREE.Group();crank.position.set(-.22,0,0);winch.add(crank);rod([0,0,0],[0,-.13,0],.014,steel,crank);rod([0,-.13,0],[-.09,-.13,0],.021,darkMetal,crank);
  const inspectionLight=new THREE.PointLight(0xbcc7ad,.40,.85,2);inspectionLight.position.set(-.24,.12,.36);winch.add(inspectionLight);if(quality.mobile)inspectionLight.visible=false;
  ball([0,.17,.28],[.018,.011,.012],new THREE.MeshBasicMaterial({color:0x76866b}),winch);
  const hanger=new THREE.Group();hanger.name=`Suspended Figpal ${i+1}`;hanger.position.y=height;rig.add(hanger);
  const captive=makers[i]();captive.object.scale.setScalar(.62);captive.object.rotation.z=(i-1)*.035;hanger.add(captive.object);
  const transformation=createFigpalTransformation(captive.object,i);
  batchStaticScenery(captive.object,{exclude:[captive.propeller],minObjects:2,dispose:false});
  transformation.skeleton.visible=true;batchStaticScenery(transformation.skeleton,{minObjects:2,dispose:false});transformation.skeleton.visible=false;
  const speechAnchor=new THREE.Object3D();speechAnchor.position.set(0,.50,0);hanger.add(speechAnchor);speechAnchors.push(speechAnchor);
  // A spreader and two linked chain slings support the body, leaving its face clear.
  rod([-.22,.45,0],[.22,.45,0],.019,steel,hanger);
  const hook=mesh(new THREE.TorusGeometry(.045,.010,6,18,Math.PI*1.65),fastener,hanger);hook.position.set(0,.49,0);hook.rotation.z=-.5;rod([-.028,.476,.008],[.016,.511,.008],.004,darkMetal,hanger);
  for(const side of[-1,1])chainRun([[side*.21,.45,0],[side*.245,.11,0],[side*.23,-.12,.015],[side*.16,-.205,.04],[0,-.222,.045]],hanger);
  const loadChain=chainRun([[0,winchY-.10,.025],[0,height+.52,0]],rig,72);
  const returnChain=chainRun([[-.10,winchY-.01,-.11],[-.11,winchY-.36,-.12],[-.16,winchY-.40,-.10],[-.20,winchY-.05,-.08]],rig);
  returnChain.object.name='Winch return chain loop';
  const control=new THREE.Group();control.name=`Canister ${i+1} winch control`;control.position.set(.39,.85,.40);control.rotation.y=.35;control.userData.hoistIndex=i;vat.add(control);
  box([.12,.21,.07],[0,0,0],darkMetal,control);
  ball([0,.047,.047],[.024,.024,.015],material(0x7b2e23,.6,0),control);ball([0,-.047,.047],[.024,.024,.015],material(0x697c49,.6,0),control);
  line([[.39,.95,.40],[.44,1.02,.35],[.46,1.27,.12],[.44,winchY-.13,.06],[.24,winchY,.0]],.007,darkMetal,rig);
  // Batch within each independently moving part, preserving the hoist hit target.
  for(const rigid of[drum,crank,control,wheel])batchStaticScenery(rigid,{minObjects:2,allowInteractiveRoot:true,dispose:false});
  batchStaticScenery(winch,{exclude:[drumMount,crank],minObjects:2,allowInteractiveRoot:true,dispose:false});
  batchStaticScenery(rig,{exclude:[hanger,winch],minObjects:2,dispose:false});
  batchStaticScenery(vat,{exclude:[surface,floatingBones.group,...foam.map(f=>f.mesh),...ripples.map(r=>r.mesh)],minObjects:2,dispose:false});
  rigs.push({rig,hanger,transformation,captive:captive.object,propeller:captive.propeller,drum,crank,loadChain,height,homeHeight:height,targetHeight:height,winchY,phase:i*2.1,lowered:false});
 }
 const faceLight=new THREE.PointLight(0xb2b8ad,.75,3.8,2);faceLight.position.set(-1.75,2.75,-.20);group.add(faceLight);
 function toggleHoist(index){const rig=rigs[index];if(!rig)return null;rig.lowered=!rig.lowered;rig.targetHeight=rig.lowered?.65:rig.homeHeight;return `Figpal ${index+1}${rig.transformation.transformed?"'s bones":''} ${rig.lowered?'lowering into the canister':'rising above the canister'}.`;}
 function lowerAll(){for(const rig of rigs){rig.lowered=true;rig.targetHeight=.65;}}
 function reset(){
  for(const rig of rigs){
   rig.lowered=false;rig.height=rig.targetHeight=rig.homeHeight;
   rig.hanger.position.set(0,rig.homeHeight,0);rig.hanger.rotation.z=0;
   rig.loadChain.setPoints([0,rig.winchY-.10,.025],[0,rig.homeHeight+.52,0]);
   rig.drum.rotation.y=rig.crank.rotation.x=0;rig.transformation.reset();
  }
 }
 let lastTime=0;const swayPose={};
 function update(time,reducedMotion=false){
  const dt=Math.max(0,Math.min(.12,time-lastTime));lastTime=time;
  const t=reducedMotion?0:time;waterTime.value=t;
  for(const rig of rigs){
   const delta=rig.targetHeight-rig.height;rig.height=reducedMotion?rig.targetHeight:rig.height+Math.sign(delta)*Math.min(Math.abs(delta),dt*.15);
   figpalSwayPose(time,rig.height,rig.winchY,rig.phase,reducedMotion,swayPose);
   rig.hanger.position.set(swayPose.x,swayPose.y,0);rig.hanger.rotation.z=swayPose.angle;
   rig.loadChain.setPoints([0,rig.winchY-.10,.025],[swayPose.hookX,swayPose.hookY,0]);
   rig.drum.rotation.y=(rig.homeHeight-rig.height)/.10;rig.crank.rotation.x=(rig.homeHeight-rig.height)/.10;
   rig.transformation.update(1.086);
   if(rig.propeller)rig.propeller.rotation.y=t*.18;
  }
  for(const vat of vats){
   vat.floatingBones.update(time,reducedMotion);
   const positions=vat.surface.geometry.attributes.position;
   const normals=vat.surface.geometry.attributes.normal;
   for(let j=0;j<positions.count;j++){
    const x=positions.getX(j),z=positions.getZ(j),a=x*17+t*1.4+vat.phase,b=z*14-t*1.1,c=(x+z)*28-t*2.1;
    positions.setY(j,Math.sin(a)*Math.cos(b)*.0035+Math.sin(c)*.0012);
    const dx=Math.cos(a)*Math.cos(b)*.0595+Math.cos(c)*.0336,dz=-Math.sin(a)*Math.sin(b)*.049+Math.cos(c)*.0336;
    const length=Math.hypot(dx,1,dz);normals.setXYZ(j,-dx/length,1/length,-dz/length);
   }
   positions.needsUpdate=true;normals.needsUpdate=true;
   vat.bubbleData.forEach((bubble,j)=>{const life=(t*bubble.speed+bubble.phase)%1;dummy.position.set(bubble.x+Math.sin(t*1.3+j)*.012,.25+life*.84,bubble.z+Math.cos(t+j)*.009);dummy.scale.setScalar(bubble.r*(.65+life*.5));dummy.updateMatrix();vat.bubbles.setMatrixAt(j,dummy.matrix);});vat.bubbles.instanceMatrix.needsUpdate=true;
   for(const foam of vat.foam){const pulse=(Math.sin(t*2.4+foam.phase)+1)*.5;foam.mesh.scale.set(foam.baseRadius,foam.baseRadius*(.12+pulse*.28),foam.baseRadius);}
   for(const ripple of vat.ripples){const life=(t*.48+ripple.phase)%1;const size=.012+life*.075;ripple.mesh.scale.setScalar(size);ripple.mesh.visible=life<.88;ripple.mesh.material.opacity=(1-life)*.16;}
  }
 }
 update(0);
 function setEnvironment(map){for(const mat of[steel,darkMetal,fastener,chainMetal,glass,fluid,liquidTop,bubbleMat]){mat.envMap=map;mat.needsUpdate=true;}}
 function canSpeak(index){const rig=rigs[index];return !!rig&&!rig.transformation.transformed;}
 function isHanging(index){const rig=rigs[index];return canSpeak(index)&&!rig.lowered&&Math.abs(rig.height-rig.homeHeight)<.025;}
 return {group,update,valves,toggleHoist,isLowered:index=>rigs[index]?.lowered??false,canSpeak,isHanging,lowerAll,reset,speechAnchors,setEnvironment};
}
