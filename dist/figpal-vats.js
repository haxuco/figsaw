import * as THREE from './vendor/three.module.js';

// The three little captives are modeled from the supplied Figpals illustration.
// All shapes, markings, glass, liquid and wear are local procedural assets.
export function createFigpalVats(){
 const group=new THREE.Group();group.name='Three suspended Figpals over bubbling green canisters';
 const TAU=Math.PI*2;
 let seed=193108;const random=()=>{seed=(seed*1664525+1013904223)>>>0;return seed/4294967296;};
 const material=(color,roughness=.72,emission=.07)=>new THREE.MeshStandardMaterial({color,roughness,emissive:color,emissiveIntensity:emission});
 const ink=material(0x121415,.85,0),cream=material(0xffedb6),rice=material(0xf6f4e7),blue=material(0x008ce8),orange=material(0xe8570c),ribOrange=material(0xa83109),gold=material(0xffac22),pink=material(0xffa8a7),fishBlue=material(0x9bdcf4),finBlue=material(0x047cdc),yellow=material(0xffd428);
 const outlineMaterial=new THREE.MeshBasicMaterial({color:0x101313,side:THREE.BackSide});
 outlineMaterial.onBeforeCompile=shader=>{shader.vertexShader=shader.vertexShader.replace('#include <begin_vertex>','#include <begin_vertex>\ntransformed += normal * 0.009;');};
 outlineMaterial.customProgramCacheKey=()=> 'figpal-outline-v1';
 function mesh(geometry,mat,parent=group,outlined=false){
  const m=new THREE.Mesh(geometry,mat);m.castShadow=true;m.receiveShadow=true;parent.add(m);
  if(outlined){const edge=new THREE.Mesh(geometry,outlineMaterial);edge.name='Ink outline';m.add(edge);}
  return m;
 }
 function ball(pos,size,mat,parent,outlined=false){const m=mesh(new THREE.SphereGeometry(1,24,16),mat,parent,outlined);m.position.set(...pos);m.scale.set(...size);return m;}
 function box(size,pos,mat,parent=group){const m=mesh(new THREE.BoxGeometry(...size),mat,parent);m.position.set(...pos);return m;}
 function cylinder(radius,height,pos,mat,parent=group,open=false){const m=mesh(new THREE.CylinderGeometry(radius,radius,height,48,1,open),mat,parent);m.position.set(...pos);return m;}
 function line(points,r,mat,parent=group){const curve=new THREE.CatmullRomCurve3(points.map(p=>new THREE.Vector3(...p)));return mesh(new THREE.TubeGeometry(curve,Math.max(16,points.length*5),r,6,false),mat,parent);}
 function rod(a,b,r,mat,parent=group){const start=new THREE.Vector3(...a),end=new THREE.Vector3(...b),d=end.clone().sub(start);const m=cylinder(r,d.length(),start.clone().add(end).multiplyScalar(.5).toArray(),mat,parent);m.quaternion.setFromUnitVectors(new THREE.Vector3(0,1,0),d.normalize());return m;}
 function ring(radius,tube,y,mat,parent=group){const m=mesh(new THREE.TorusGeometry(radius,tube,8,64),mat,parent);m.rotation.x=Math.PI/2;m.position.y=y;return m;}
 function extrude(shape,depth,mat,parent,bevel=.035){
  const geometry=new THREE.ExtrudeGeometry(shape,{depth:depth-bevel*2,bevelEnabled:true,bevelSize:bevel,bevelThickness:bevel,bevelSegments:3,steps:1,curveSegments:16});
  geometry.translate(0,0,-depth/2+bevel);return mesh(geometry,mat,parent,true);
 }
 function face(parent,y,z,spacing=.105,smile=true){
  for(const side of[-1,1])ball([side*spacing,y,z],[.022,.025,.012],ink,parent);
  const mouth=smile?[[-.052,y-.054,z],[0,y-.079,z+.004],[.052,y-.052,z]]:[[-.052,y-.067,z],[.052,y-.067,z]];
  line(mouth,.012,ink,parent);
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
  const hatMat=new THREE.MeshStandardMaterial({map,roughness:.73,emissive:0xffffff,emissiveMap:map,emissiveIntensity:.08});
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
  face(g,-.10,.253,.10);
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
  face(g,.015,.252,.09,false);
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

 const c=document.createElement('canvas');c.width=c.height=512;const ctx=c.getContext('2d');ctx.fillStyle='#424b42';ctx.fillRect(0,0,512,512);
 for(let i=0;i<1800;i++){const x=random()*512,y=random()*512,r=random()*8+.4;ctx.fillStyle=i%3?'rgba(21,27,19,.15)':'rgba(131,67,28,.37)';ctx.beginPath();ctx.arc(x,y,r,0,TAU);ctx.fill();}
 for(let i=0;i<55;i++){ctx.strokeStyle='rgba(190,190,159,.18)';ctx.lineWidth=random()+.4;const x=random()*512,y=random()*512;ctx.beginPath();ctx.moveTo(x,y);ctx.lineTo(x+random()*75,y+random()*8);ctx.stroke();}
 const metalMap=new THREE.CanvasTexture(c);metalMap.colorSpace=THREE.SRGBColorSpace;
 const steel=new THREE.MeshStandardMaterial({map:metalMap,roughness:.67,metalness:.48,bumpMap:metalMap,bumpScale:.004});
 const darkMetal=material(0x202b27,.56,0),rope=material(0x978c6b,.92,0),fastener=new THREE.MeshStandardMaterial({color:0x869486,metalness:.7,roughness:.4});
 const glass=new THREE.MeshPhysicalMaterial({color:0xc4ebbc,roughness:.16,metalness:.05,transparent:true,opacity:.12,depthWrite:false,clearcoat:1,clearcoatRoughness:.12,side:THREE.DoubleSide});
 const fluid=new THREE.MeshStandardMaterial({color:0x55ad13,emissive:0x367d08,emissiveIntensity:.8,roughness:.21,transparent:true,opacity:.60,depthWrite:false,side:THREE.DoubleSide});
 const liquidTop=new THREE.MeshStandardMaterial({color:0x83d629,emissive:0x4c8d0d,emissiveIntensity:.75,roughness:.19,metalness:.12,side:THREE.DoubleSide});
 const foamMat=new THREE.MeshStandardMaterial({color:0xc3ed62,emissive:0x6fa527,emissiveIntensity:.38,roughness:.24,transparent:true,opacity:.84,depthWrite:false});
 const bubbleMat=new THREE.MeshPhysicalMaterial({color:0xc3f87b,emissive:0x66aa1c,emissiveIntensity:.42,roughness:.08,transparent:true,opacity:.5,depthWrite:false,clearcoat:1});
 const rippleMat=new THREE.MeshBasicMaterial({color:0xb9ea55,transparent:true,opacity:.38,depthWrite:false,side:THREE.DoubleSide});
 const rigs=[],vats=[],dummy=new THREE.Object3D();
 const tankZ=-2.39;
 box([4.32,.11,.15],[-.30,3.065,tankZ],steel);
 for(const x of[-2.25,1.65]){box([.18,.055,.31],[x,3.145,tankZ],steel);for(const z of[-.09,.09])cylinder(.025,.035,[x,3.185,tankZ+z],fastener);}
 const makers=[pudding,sushi,pufferfish];
 for(let i=0;i<3;i++){
  const x=-1.70+i*1.40;
  const vat=new THREE.Group();vat.position.set(x,.012,tankZ);vat.name=`Green bubbling canister ${i+1}`;group.add(vat);
  cylinder(.515,.16,[0,.10,0],steel,vat);cylinder(.46,.035,[0,.025,0],darkMetal,vat);
  for(let j=0;j<8;j++){const a=j/8*TAU;ball([Math.cos(a)*.49,.15,Math.sin(a)*.49],[.022,.022,.022],fastener,vat);}
  const shell=cylinder(.485,1.02,[0,.72,0],glass,vat,true);shell.castShadow=false;shell.renderOrder=6;
  const liquid=cylinder(.444,.865,[0,.64,0],fluid,vat,true);liquid.castShadow=false;liquid.renderOrder=2;
  cylinder(.444,.018,[0,.215,0],liquidTop,vat);
  for(const y of[.225,1.235]){ring(.484,.036,y,steel,vat);ring(.454,.010,y-.018,darkMetal,vat);}
  for(const a of[.15,2.24,4.34]){const px=Math.cos(a)*.485,pz=Math.sin(a)*.485;rod([px,.22,pz],[px,1.23,pz],.021,steel,vat);}
  for(const side of[-1,1]){line([[side*.47,.96,0],[side*.58,.96,0],[side*.58,.74,0],[side*.48,.74,0]],.022,steel,vat);}
  // A wet, uneven open meniscus, rather than a solid lid.
  const surfaceGeometry=new THREE.CircleGeometry(.444,64);surfaceGeometry.rotateX(-Math.PI/2);
  const surface=mesh(surfaceGeometry,liquidTop,vat);surface.position.y=1.074;surface.castShadow=false;surface.renderOrder=4;
  ring(.441,.009,1.075,foamMat,vat).renderOrder=4;
  const bubbleData=Array.from({length:28},()=>({x:(random()-.5)*.61,z:(random()-.5)*.61,r:.014+random()*.027,phase:random(),speed:.15+random()*.17}));
  const bubbles=new THREE.InstancedMesh(new THREE.SphereGeometry(1,12,8),bubbleMat,bubbleData.length);bubbles.name='Rising liquid bubbles';bubbles.instanceMatrix.setUsage(THREE.DynamicDrawUsage);bubbles.frustumCulled=false;bubbles.renderOrder=3;vat.add(bubbles);
  const foam=[];for(let j=0;j<9;j++){const a=random()*TAU,r=random()*.36,baseRadius=.024+random()*.026;const m=ball([Math.cos(a)*r,1.074,Math.sin(a)*r],[baseRadius,baseRadius*.65,baseRadius],foamMat,vat);m.castShadow=false;m.renderOrder=5;foam.push({mesh:m,baseRadius,phase:random()*TAU});}
  const ripples=[];for(let j=0;j<5;j++){const m=mesh(new THREE.RingGeometry(.82,1,32),rippleMat,vat);m.rotation.x=-Math.PI/2;m.position.set((random()-.5)*.45,1.078,(random()-.5)*.45);m.castShadow=false;m.renderOrder=5;ripples.push({mesh:m,phase:random()});}
  // Stenciled identification, a pressure gauge and weathered lower-band stripes.
  const labelCanvas=document.createElement('canvas');labelCanvas.width=256;labelCanvas.height=128;const labelCtx=labelCanvas.getContext('2d');labelCtx.fillStyle='#bec39f';labelCtx.fillRect(0,0,256,128);labelCtx.fillStyle='#242c22';labelCtx.font='bold 67px monospace';labelCtx.textAlign='center';labelCtx.fillText(`0${i+1}`,128,87);
  const labelMap=new THREE.CanvasTexture(labelCanvas);labelMap.colorSpace=THREE.SRGBColorSpace;
  const plate=mesh(new THREE.PlaneGeometry(.17,.085),new THREE.MeshStandardMaterial({map:labelMap,roughness:.9}),vat);plate.position.set(0,.115,.517);plate.castShadow=false;
  for(let j=0;j<5;j++){const stripe=box([.065,.065,.007],[-.23+j*.115,.12,.50],j%2?ink:material(0x99924e,.85,0),vat);stripe.rotation.z=-.45;}
  plate.position.z=.520;
  const gauge=cylinder(.064,.03,[.32,1.19,.37],steel,vat);gauge.rotation.x=Math.PI/2;
  const dial=mesh(new THREE.CircleGeometry(.052,24),cream,vat);dial.position.set(.32,1.19,.391);line([[.32,1.19,.395],[.30,1.219,.395]],.003,ink,vat);
  const drain=cylinder(.038,.17,[.37,.25,.37],steel,vat);drain.rotation.x=Math.PI/2;
  const valve=mesh(new THREE.TorusGeometry(.068,.008,6,24),ribOrange,vat);valve.position.set(.37,.25,.47);rod([.31,.25,.47],[.43,.25,.47],.006,ribOrange,vat);
  const glow=new THREE.PointLight(0x86d82c,1.65,2.25,2);glow.position.set(0,1.12,0);vat.add(glow);
  vats.push({surface,bubbles,bubbleData,foam,ripples,phase:i*1.7});

  const pivot=new THREE.Group();pivot.name=`Suspension rig ${i+1}`;pivot.position.set(x,3.00,tankZ);group.add(pivot);
  const captive=makers[i]();captive.object.position.y=-.64;captive.object.rotation.y=.28;captive.object.rotation.z=(i-1)*.035;pivot.add(captive.object);
  // Two cords and an under-body sling make the suspension visibly supported.
  for(const side of[-1,1]){line([[side*.24,0,0],[side*.26,-.30,0],[side*.36,-.67,.012],[side*.29,-.89,.055],[side*.16,-.965,.07],[0,-.975,.07]],.011,rope,pivot);ball([side*.24,0,0],[.026,.027,.026],fastener,pivot);}
  rigs.push({pivot,propeller:captive.propeller,phase:i*2.1});
 }
 // Localized light reveals the colored toys without brightening the rest of the office.
 const faceLight=new THREE.PointLight(0xe8dfc5,4.2,4.0,2);faceLight.position.set(-.15,2.70,-1.35);group.add(faceLight);
 function update(time,reducedMotion=false){
  const t=reducedMotion?0:time;
  for(const rig of rigs){rig.pivot.rotation.z=Math.sin(t*.65+rig.phase)*.014;rig.pivot.rotation.x=Math.sin(t*.48+rig.phase)*.008;if(rig.propeller)rig.propeller.rotation.y=t*.7;}
  for(const vat of vats){
   const positions=vat.surface.geometry.attributes.position;
   for(let j=0;j<positions.count;j++){const x=positions.getX(j),z=positions.getZ(j);positions.setY(j,Math.sin(x*17+t*2+vat.phase)*Math.cos(z*14-t*1.5)*.004);}
   positions.needsUpdate=true;
   vat.bubbleData.forEach((bubble,j)=>{const life=(t*bubble.speed+bubble.phase)%1;dummy.position.set(bubble.x+Math.sin(t*1.3+j)*.012,.25+life*.84,bubble.z+Math.cos(t+j)*.009);dummy.scale.setScalar(bubble.r*(.65+life*.5));dummy.updateMatrix();vat.bubbles.setMatrixAt(j,dummy.matrix);});vat.bubbles.instanceMatrix.needsUpdate=true;
   for(const foam of vat.foam){const pulse=(Math.sin(t*2.4+foam.phase)+1)*.5;foam.mesh.scale.set(foam.baseRadius,foam.baseRadius*(.2+pulse*.85),foam.baseRadius);}
   for(const ripple of vat.ripples){const life=(t*.48+ripple.phase)%1;const size=.012+life*.075;ripple.mesh.scale.setScalar(size);ripple.mesh.visible=life<.88;}
  }
 }
 update(0);
 return {group,update};
}
