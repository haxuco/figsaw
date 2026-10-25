import * as THREE from './vendor/three.module.js';
import { createDisplayFactory } from './damaged-displays.js?v=laminated-glass';
import { createFigpalVats } from './figpal-vats.js?v=no-skulls';

import { createFallenMobile } from './fallen-mobile.js?v=plush-grounded';
import { createFailingFluorescent } from './failing-fluorescent.js?v=erratic-bursts';
import { createFloorTimer } from './floor-timer.js?v=smaller-clockwise';
import { createFloorSupport, settleOnFloor, drapeFloorCable } from './floor-contact.js';
import { drawFigmaMark } from './figma-mark.js';
import { createFloorHandsaw } from './floor-handsaw.js';
import { createLightInsects } from './light-insects.js?v=visible-swarms';
import { createFloorRodents } from './floor-rodents.js?v=fewer-faster';
import { createChargingKit } from './charging-kit.js';
import { createKetchupKey } from './ketchup-key.js';
import { createTankLeaks } from './tank-leaks.js';

export function createOffice(renderer,viewerPosition){
 const office=new THREE.Group();office.name='Abandoned technology office';
 const floorProps=[],floorCables=[];
 const onFloor=object=>{floorProps.push(object);return object;};
 let seed=87021;const random=()=>{seed=(seed*1664525+1013904223)>>>0;return seed/4294967296;};
 const range=(a,b)=>a+(b-a)*random();
 function canvas(size=512){const c=document.createElement('canvas');c.width=c.height=size;return[c,c.getContext('2d')];}
 function texture(c){const t=new THREE.CanvasTexture(c);t.colorSpace=THREE.SRGBColorSpace;t.anisotropy=Math.min(8,renderer.capabilities.getMaxAnisotropy());return t;}
 function cloud(ctx,x,y,r,color,alpha){const g=ctx.createRadialGradient(x,y,0,x,y,r);g.addColorStop(0,`rgba(${color},${alpha})`);g.addColorStop(1,`rgba(${color},0)`);ctx.fillStyle=g;ctx.fillRect(x-r,y-r,r*2,r*2);}
 function speckle(ctx,size,n,color,alpha){for(let i=0;i<n;i++){ctx.fillStyle=`rgba(${color},${random()*alpha})`;ctx.fillRect(random()*size,random()*size,range(.4,2.2),range(.4,2));}}
 function weathered(base,kind='paint'){
  const[c,ctx]=canvas();ctx.fillStyle=base;ctx.fillRect(0,0,512,512);
  for(let i=0;i<210;i++)cloud(ctx,random()*512,random()*512,range(4,70),i%3?'27,33,23':'110,83,48',range(.025,.15));
  speckle(ctx,512,12000,'18,25,18',.24);speckle(ctx,512,4000,'200,192,159',.18);
  if(kind==='wood')for(let i=0;i<550;i++){ctx.strokeStyle=`rgba(36,29,17,${range(.02,.16)})`;ctx.lineWidth=range(.4,2);const y=random()*512;ctx.beginPath();ctx.moveTo(0,y);ctx.bezierCurveTo(170,y+range(-12,12),340,y+range(-12,12),512,y);ctx.stroke();}
  if(kind==='metal')for(let i=0;i<250;i++)cloud(ctx,random()*512,random()*512,range(2,18),'112,56,24',range(.1,.5));
  for(let i=0;i<80;i++){ctx.strokeStyle=`rgba(197,190,160,${range(.08,.3)})`;ctx.lineWidth=range(.3,1.3);const x=random()*512,y=random()*512;ctx.beginPath();ctx.moveTo(x,y);ctx.lineTo(x+range(3,50),y+range(-2,4));ctx.stroke();}
  return texture(c);
 }
 const plasterMap=weathered('#8b8c77'),plasticMap=weathered('#b2b09a'),woodMap=weathered('#817157','wood'),metalMap=weathered('#4e5550','metal'),fabricMap=weathered('#44534b'),floorMap=weathered('#66695a');
 const material=(color,roughness=.88,map=null,metalness=0)=>new THREE.MeshStandardMaterial({color,roughness,map,bumpMap:map,bumpScale:map?.008:0,metalness});
 const plaster=material(0xffffff,.98,plasterMap),wood=material(0xffffff,.86,woodMap),plastic=material(0xffffff,.80,plasticMap),steel=material(0xffffff,.73,metalMap,.42),fabric=material(0xffffff,.95,fabricMap),black=material(0x171c19,.86),rubber=material(0x101512,.95),concrete=material(0xffffff,.98,floorMap),silver=material(0x828c86,.4,null,.8);
 function mesh(geometry,mat,parent=office){const m=new THREE.Mesh(geometry,mat);m.castShadow=true;m.receiveShadow=true;parent.add(m);return m;}
 function box(size,pos,mat=steel,parent=office){const m=mesh(new THREE.BoxGeometry(...size),mat,parent);m.position.set(...pos);return m;}
 function sphere(size,pos,mat,parent=office){const m=mesh(new THREE.SphereGeometry(1,20,12),mat,parent);m.scale.set(...size);m.position.set(...pos);return m;}
 function cylinder(radius,height,pos,mat=steel,parent=office,segments=12){const m=mesh(new THREE.CylinderGeometry(radius,radius,height,segments),mat,parent);m.position.set(...pos);return m;}
 function rod(a,b,r=.015,mat=steel,parent=office){const start=new THREE.Vector3(...a),end=new THREE.Vector3(...b),direction=end.clone().sub(start);const m=cylinder(r,direction.length(),start.clone().add(end).multiplyScalar(.5).toArray(),mat,parent);m.quaternion.setFromUnitVectors(new THREE.Vector3(0,1,0),direction.normalize());return m;}
 function cable(points,r=.008,mat=black,parent=office){const curve=new THREE.CatmullRomCurve3(points.map(p=>new THREE.Vector3(...p)));const wire=mesh(new THREE.TubeGeometry(curve,Math.max(20,points.length*8),r,6,false),mat,parent);if(parent===office&&points.some(p=>p[1]<.06))floorCables.push(wire);return wire;}
 function bevelBox(w,h,d,r=.025){r=Math.min(r,w*.45,h*.45);const s=new THREE.Shape();const x=w/2,y=h/2;s.moveTo(-x+r,-y);s.lineTo(x-r,-y);s.quadraticCurveTo(x,-y,x,-y+r);s.lineTo(x,y-r);s.quadraticCurveTo(x,y,x-r,y);s.lineTo(-x+r,y);s.quadraticCurveTo(-x,y,-x,y-r);s.lineTo(-x,-y+r);s.quadraticCurveTo(-x,-y,-x+r,-y);const b=Math.min(.012,w/6,h/6,d/6),g=new THREE.ExtrudeGeometry(s,{depth:d-b*2,bevelEnabled:true,bevelSize:b,bevelThickness:b,bevelSegments:2,steps:1,curveSegments:4});g.translate(0,0,-d/2+b);return g;}
 function rounded(size,pos,mat,parent=office){const m=mesh(bevelBox(...size),mat,parent);m.position.set(...pos);return m;}
 function dirtOverlay(width,height,parent,floor=false){const[c,ctx]=canvas(1024);
  for(let i=0;i<290;i++)cloud(ctx,random()*1024,floor?random()*1024:random()<.6?range(600,1060):random()*1024,range(12,140),'24,30,19',range(.03,.26));
  if(!floor){const g=ctx.createLinearGradient(0,0,0,1024);g.addColorStop(0,'rgba(29,35,24,.4)');g.addColorStop(.3,'rgba(29,35,24,0)');g.addColorStop(.75,'rgba(29,35,24,.07)');g.addColorStop(1,'rgba(23,30,21,.72)');ctx.fillStyle=g;ctx.fillRect(0,0,1024,1024);for(let i=0;i<80;i++){const x=random()*1024,y=random()*220;ctx.strokeStyle=`rgba(62,51,30,${range(.03,.26)})`;ctx.lineWidth=range(1,6);ctx.beginPath();ctx.moveTo(x,y);ctx.lineTo(x+range(-8,8),y+range(80,750));ctx.stroke();}}
  speckle(ctx,1024,17000,'16,25,17',.28);const m=mesh(new THREE.PlaneGeometry(width,height),new THREE.MeshStandardMaterial({map:texture(c),transparent:true,depthWrite:false,roughness:1}),parent);m.castShadow=false;return m;
 }
 // A decayed office shell, rather than bathroom tiles: plaster, wall panels and old carpet.
 box([7.8,.15,8.6],[0,-.075,.2],concrete);
 const floorDirt=dirtOverlay(7.8,8.6,office,true);floorDirt.rotation.x=-Math.PI/2;floorDirt.position.set(0,.003,.2);
 const backWall=box([7.8,3.35,.16],[0,1.675,-4.08],plaster);
 const leftWall=box([.16,3.35,8.6],[-3.98,1.675,.2],material(0x829085,.98,plasterMap));
 box([.16,1.1,8.6],[3.98,.55,.2],plaster);box([.16,.65,8.6],[3.98,3.025,.2],plaster);
 box([.16,1.6,1.2],[3.98,1.9,-3.4],plaster);box([.16,1.6,4.8],[3.98,1.9,2.1],plaster);
 const backDirt=dirtOverlay(7.8,3.35,office);backDirt.position.set(0,1.675,-3.99);
 const leftDirt=dirtOverlay(8.6,3.35,office);leftDirt.rotation.y=Math.PI/2;leftDirt.position.set(-3.89,1.675,.2);
 for(let i=0;i<9;i++)box([.012,2.2,.014],[-3.85+i*.96,1.66,-3.977],steel);
 box([7.8,.045,.035],[0,.58,-3.96],steel);box([7.8,.045,.035],[0,2.76,-3.96],steel);
 for(const x of[-3.86,3.86])box([.045,.13,8.6],[x,.065,.2],black);
 box([7.8,.13,.04],[0,.065,-3.95],black);
 // Areas of flaking paint and exposed plaster, with jagged boundaries.
 for(let i=0;i<26;i++){const shape=new THREE.Shape(),cx=range(-3.65,3.65),cy=range(.24,3.1),sx=range(.05,.22),sy=range(.05,.26);for(let j=0;j<9;j++){const a=j/9*Math.PI*2,r=range(.6,1);const x=cx+Math.cos(a)*sx*r,y=cy+Math.sin(a)*sy*r;j?shape.lineTo(x,y):shape.moveTo(x,y);}shape.closePath();const flake=mesh(new THREE.ShapeGeometry(shape),material(i%3?0x4f5547:0xb1ad91,.99));flake.position.z=-3.972;flake.castShadow=false;}
 const ceilingVoid=box([7.8,.10,8.6],[0,3.36,.2],black);
 for(let x=-3.6;x<3.9;x+=1.2)box([.028,.032,8.6],[x,3.12,.2],steel);
 for(let z=-3.9;z<4.5;z+=1.2)box([7.8,.032,.028],[0,3.12,z],steel);
 const ceilingMat=material(0x9a9c88,.98,plasterMap);
 for(let x=-3;x<3.9;x+=1.2)for(let z=-3.3;z<4.5;z+=1.2){if(random()<.25)continue;const p=box([1.15,.035,1.15],[x,3.145,z],ceilingMat);if(random()<.12){p.rotation.z=range(-.13,.13);p.position.y-=.06;}}
 for(let i=0;i<5;i++)cable([[-2+i*.45,3.30,-1.6],[-1.9+i*.45,2.80,-1.5],[-1.7+i*.4,2.53,-1.6],[-1.3+i*.35,3.29,-1.8]],.009,black);

 // Broken window and bent Venetian blinds admit the cold, greenish daylight.
 const windowGroup=new THREE.Group();windowGroup.position.set(3.88,1.9,-1.5);windowGroup.rotation.y=-Math.PI/2;office.add(windowGroup);
 const[cSky,sky]=canvas();sky.fillStyle='#778c88';sky.fillRect(0,0,512,512);for(let i=0;i<15;i++){const x=i*43,w=range(25,60),h=range(70,290);sky.fillStyle=i%2?'#4b5d58':'#526560';sky.fillRect(x,512-h,w,h);for(let j=0;j<5;j++){sky.fillStyle='#879186';sky.fillRect(x+8,512-h+18+j*34,4,10);}}
 const outside=mesh(new THREE.PlaneGeometry(2.8,1.6),new THREE.MeshBasicMaterial({map:texture(cSky),color:0x374541}),windowGroup);outside.position.z=-.13;outside.castShadow=false;
 for(const x of[-1.43,0,1.43])box([.055,1.7,.09],[x,0,.025],steel,windowGroup);
 for(const y of[-.83,.83])box([2.92,.055,.09],[0,y,.025],steel,windowGroup);
 const glass=material(0x9db8aa,.25,null,.25);glass.transparent=true;glass.opacity=.18;glass.side=THREE.DoubleSide;
 for(const x of[-.72,.72]){const pane=box([1.37,1.55,.008],[x,0,.04],glass,windowGroup);pane.castShadow=false;}
 for(let i=0;i<17;i++){if([5,9,14].includes(i))continue;const slat=box([2.77,.047,.015],[0,.73-i*.086,.11],material(0x7c8372,.82,plasticMap),windowGroup);slat.rotation.x=.35;if(i===7||i===12){slat.rotation.z=i===7?.035:-.05;slat.rotation.x=.9;}}
 for(const x of[-.86,.86])cable([[x,.80,.15],[x,.12,.16],[x,-.77,.15]],.005,black,windowGroup);
 cable([[1.35,.83,.12],[1.4,-.7,.14],[1.32,-1.10,.18]],.006,black,windowGroup);

 // Separate LCD damage from the laminated glass and its room reflections.
 const displays=createDisplayFactory(renderer);
 // Keep the established furniture and clutter layout independent of display texture changes.
 seed=577513849;
 const monitorCase=bevelBox(.77,.45,.035,.012);
 const monitorMetal=material(0x6b7474,.38,null,.7);
 function monitor(parent,pos,rotation=0,type='cracked',size=1){const group=new THREE.Group();group.position.set(...pos);group.rotation.y=rotation;group.scale.setScalar(size);parent.add(group);
  group.name='Damaged widescreen monitor';
  const shell=mesh(monitorCase,black,group);shell.position.set(0,.375,0);
  rounded([.31,.018,.20],[0,.013,-.025],monitorMetal,group);box([.055,.24,.025],[0,.14,-.035],monitorMetal,group);
  displays.add(group,type);
  box([.18,.16,.032],[0,.36,-.03],monitorMetal,group);
  sphere([.004,.004,.003],[.35,.163,.022],type==='live'?new THREE.MeshBasicMaterial({color:0x8cbb60}):black,group);
  for(let i=0;i<11;i++)box([.015,.002,.003],[-.25+i*.05,.585,-.020],steel,group);
  const powerCable=cable([[.10,.23,-.05],[.15,.04,-.08],[.23,-.31,-.18]],.006,black,group);powerCable.name='Monitor power cable';powerCable.userData.ignoreFloorContact=true;return group;
 }
 const keyGeometry=new THREE.BoxGeometry(.023,.008,.023);
 function keyboard(parent,pos,angle=0){const group=new THREE.Group();group.position.set(...pos);group.rotation.y=angle;parent.add(group);rounded([.47,.035,.18],[0,0,0],plastic,group);
  const keys=new THREE.InstancedMesh(keyGeometry,material(0x686e60,.8),56);for(let i=0;i<56;i++){const o=new THREE.Object3D();o.position.set(-.206+(i%14)*.031,.024,-.065+Math.floor(i/14)*.036);o.updateMatrix();keys.setMatrixAt(i,o.matrix);}group.add(keys);box([.14,.008,.022],[0,.024,.07],black,group);return group;
 }
 function tower(parent,pos,rotation=0,open=false){const group=new THREE.Group();group.position.set(...pos);group.rotation.y=rotation;parent.add(group);rounded([.25,.53,.46],[0,.265,0],plastic,group);
  for(let y=.32;y<.49;y+=.065)box([.195,.042,.012],[0,y,.239],black,group);
  for(let i=0;i<7;i++)box([.16,.008,.012],[0,.055+i*.025,.239],steel,group);
  if(open){box([.012,.42,.35],[.139,.27,0],black,group);for(let j=0;j<3;j++)box([.015,.09,.25],[.15,.16+j*.105,-.02],material(0x294b34,.83),group);}
  return group;
 }
 function desk(x,z,width,rotation=0){const group=new THREE.Group();group.position.set(x,0,z);group.rotation.y=rotation;office.add(group);
  box([width,.075,.86],[0,.82,0],wood,group);box([width,.035,.025],[0,.794,.443],steel,group);
  for(const xx of[-width/2+.08,width/2-.08]){box([.048,.79,.68],[xx,.39,0],steel,group);box([.24,.035,.74],[xx,.018,0],black,group);}
  box([width-.16,.19,.035],[0,.45,-.35],steel,group);return group;
 }
 const backDesk=desk(-1.0,-3.37,5.4);
 for(let i=0;i<6;i++){const x=-2.24+i*.84;monitor(backDesk,[x,.86,-.05],range(-.13,.13),i===3?'live':i%2?'hole':'cracked',range(.88,1.04));keyboard(backDesk,[x+.03,.87,.30],range(-.16,.16));if(i%2===0)tower(backDesk,[x+.18,0,-.10],range(-.1,.1),true);}
 const sideDesk=desk(-1.10,-2.25,2.6,0);
 for(let i=0;i<3;i++){monitor(sideDesk,[-.84+i*.83,.86,-.10],range(-.2,.2),i===0?'live':'hole',.9);keyboard(sideDesk,[-.84+i*.83,.87,.30],range(-.2,.2));}
 // Fallen hardware and open cases are actual objects, not floor decals.
 const fallen=monitor(office,[-.80,.31,-1.45],.42,'hole',.95);fallen.rotation.set(-1.38,.42,.21);onFloor(fallen);
 const tipped=monitor(office,[-2.72,.24,2.58],-.45,'cracked',.73);tipped.rotation.x=-.56;tipped.rotation.z=.24;onFloor(tipped);
 const looseTower=tower(office,[-2.22,.13,-.72],.35,true);looseTower.rotation.z=Math.PI/2;onFloor(looseTower);
 for(let i=0;i<3;i++)onFloor(tower(office,[-3.32,0,-2.45+i*.31],-.18,true)).scale.setScalar(.90);

 // Aeron-inspired chairs: curved open mesh, broad back shells, lumbar supports and cast bases.
 // Keep their wear generation independent of the established room's random layout.
 const roomSeed=seed;
 const chairFrame=material(0xffffff,.78,weathered('#afb4a9','metal'),.22);
 const chairEdge=material(0x626a62,.70,null,.25),chairArm=material(0x313934,.86,fabricMap);
 const fracture=material(0xadb1a5,.82),chairMetal=material(0x68746c,.46,null,.73);
 function meshWeave(damage=0){
  const[c,ctx]=canvas(512);ctx.lineWidth=1.8;
  for(let x=0;x<512;x+=7){ctx.strokeStyle=x%21?'#a0a59a':'#686f65';ctx.beginPath();ctx.moveTo(x,0);ctx.lineTo(x,512);ctx.stroke();}
  for(let y=0;y<512;y+=6){ctx.strokeStyle=y%18?'#7f897e':'#b0b4a5';ctx.lineWidth=y%18?1.6:2.1;ctx.beginPath();ctx.moveTo(0,y);ctx.lineTo(512,y);ctx.stroke();}
  if(damage){
   ctx.globalCompositeOperation='destination-out';ctx.fillStyle='#000';ctx.beginPath();
   const tear=damage===1?[[126,180],[187,210],[203,182],[229,265],[204,288],[236,339],[183,360],[154,302],[113,321],[137,257],[102,232]]:[[275,256],[315,209],[333,270],[377,253],[353,315],[386,375],[328,354],[300,399],[287,332],[248,309]];
   tear.forEach(([x,y],i)=>i?ctx.lineTo(x,y):ctx.moveTo(x,y));ctx.closePath();ctx.fill();
   ctx.lineWidth=3;for(let i=0;i<16;i++){const[x,y]=tear[i%tear.length];ctx.beginPath();ctx.moveTo(x,y);ctx.lineTo(x+range(-24,24),y+range(-18,18));ctx.stroke();}
  }
  return new THREE.MeshStandardMaterial({map:texture(c),color:0xe1e3d9,roughness:.93,side:THREE.DoubleSide,alphaTest:.30,alphaToCoverage:true});
 }
 const chairMesh=[meshWeave(),meshWeave(1),meshWeave(2)];
 function meshPanel(points,center,surface,parent,damage=0){
  const outline=new THREE.CatmullRomCurve3(points.map(p=>new THREE.Vector3(p[0],p[1],0)),true,'centripetal');
  const edge=outline.getSpacedPoints(96).slice(0,-1),positions=[],uvs=[],indices=[],rings=12,n=edge.length;
  const minX=Math.min(...edge.map(p=>p.x)),maxX=Math.max(...edge.map(p=>p.x)),minY=Math.min(...edge.map(p=>p.y)),maxY=Math.max(...edge.map(p=>p.y));
  for(let r=0;r<=rings;r++)for(let j=0;j<n;j++){
   const t=r/rings,x=center[0]+(edge[j].x-center[0])*t,y=center[1]+(edge[j].y-center[1])*t;
   positions.push(...surface(x,y,t));uvs.push((x-minX)/(maxX-minX),(y-minY)/(maxY-minY));
   if(r<rings){const a=r*n+j,b=r*n+(j+1)%n;indices.push(a,b,a+n,b,b+n,a+n);}
  }
  const geometry=new THREE.BufferGeometry();geometry.setAttribute('position',new THREE.Float32BufferAttribute(positions,3));geometry.setAttribute('uv',new THREE.Float32BufferAttribute(uvs,2));geometry.setIndex(indices);geometry.computeVertexNormals();
  const panel=mesh(geometry,chairMesh[damage],parent);
  panel.customDepthMaterial=new THREE.MeshDepthMaterial({depthPacking:THREE.RGBADepthPacking,map:chairMesh[damage].map,alphaTest:.30,side:THREE.DoubleSide});
  for(const [inset,radius,mat]of[[1,.025,chairFrame],[.925,.007,chairEdge]]){
   const path=edge.map(p=>new THREE.Vector3(...surface(center[0]+(p.x-center[0])*inset,center[1]+(p.y-center[1])*inset,inset)));
   mesh(new THREE.TubeGeometry(new THREE.CatmullRomCurve3(path,true),96,radius,8,true),mat,parent);
  }
 }
 function chairBack(parent,damage=1){
  const back=new THREE.Group();back.name='Torn mesh back and lumbar support';parent.add(back);
  const outline=[[-.18,0],[-.224,.08],[-.235,.26],[-.28,.46],[-.264,.55],[-.17,.60],[0,.615],[.17,.60],[.264,.55],[.28,.46],[.235,.26],[.224,.08],[.18,0],[0,-.014]];
  meshPanel(outline,[0,.30],(x,y,t)=>[x,y,-.11*y/.615+.035*(1-t*t)],back,damage);
  // The rear fork and adjustable lumbar pad remain visible through the open weave.
  cable([[0,-.09,-.07],[0,.13,-.08],[-.17,.30,-.09],[-.23,.37,-.09]],.018,chairFrame,back);
  cable([[0,.08,-.08],[.08,.22,-.085],[.23,.37,-.09]],.018,chairFrame,back);
  for(const y of[.12,.235])sphere([.048,.073,.024],[0,y,-.055],chairArm,back);
  cable([[-.21,.175,-.06],[0,.19,-.035],[.21,.175,-.06]],.014,chairEdge,back);
  if(damage){for(let j=0;j<5;j++)cable([[-.13+j*.012,.20,-.015],[-.12+j*.012,.15,.001],[-.14+j*.012,.10,-.02]],.0016,chairMesh[0],back);}
  return back;
 }
 function chairArmrest(parent,side,broken=false){
  const arm=new THREE.Group();parent.add(arm);
  const x=side*.295;
  cable([[side*.22,.46,-.17],[x,.53,-.20],[x,.67,-.17],[x,.72,-.07]],.023,chairFrame,arm);
  if(broken){sphere([.025,.011,.026],[x,.72,-.07],fracture,arm);return arm;}
  const pad=sphere([.058,.034,.15],[x,.745,.01],chairArm,arm);pad.rotation.z=side*.06;
  rod([x,.68,-.085],[x,.734,.045],.019,chairEdge,arm);return arm;
 }
 function chairCaster(parent,x,y,z,angle=0){
  const wheel=new THREE.Group();wheel.position.set(x,y,z);wheel.rotation.y=angle;parent.add(wheel);
  rod([0,.028,0],[0,.078,.015],.012,chairMetal,wheel);
  for(const side of[-1,1]){const tire=cylinder(.039,.022,[side*.021,0,0],rubber,wheel,16);tire.rotation.z=Math.PI/2;sphere([.002,.018,.018],[side*.033,0,0],chairEdge,wheel);}
  return wheel;
 }
 function chairBase(parent,missing=-1){
  const base=new THREE.Group();base.name='Five-spoke caster base';parent.add(base);
  cylinder(.057,.09,[0,.16,0],chairFrame,base,16);cylinder(.031,.20,[0,.28,0],chairMetal,base,16);
  for(let i=0;i<5;i++){
   const a=i/5*Math.PI*2+.25,dx=Math.cos(a),dz=Math.sin(a);
   if(i===missing){rod([0,.16,0],[dx*.13,.135,dz*.13],.025,chairFrame,base);sphere([.024,.014,.018],[dx*.13,.135,dz*.13],fracture,base);continue;}
   cable([[0,.18,0],[dx*.14,.145,dz*.14],[dx*.31,.092,dz*.31]],.022,chairFrame,base);
   chairCaster(base,dx*.31,.04,dz*.31,a);
  }
  return base;
 }
 function settleChairPart(group,x,z,rotation){
  group.position.set(x,0,z);group.rotation.set(...rotation);group.updateMatrixWorld(true);
  return onFloor(group);
 }
 function aeronChair(x,z,rotation,damage={}){
  const g=new THREE.Group();g.name='Broken Aeron-style mesh chair';office.add(g);
  if(!damage.noBase)chairBase(g,damage.missingSpoke??-1);
  // Tilt mechanism, adjustment paddles and a suspended waterfall seat.
  rounded([.24,.095,.27],[0,.405,-.035],chairEdge,g);
  cylinder(.045,.13,[0,.405,0],chairFrame,g,16);
  rod([-.14,.41,.015],[-.245,.405,.05],.012,chairMetal,g);sphere([.035,.016,.055],[-.25,.405,.055],chairArm,g);
  sphere([.055,.025,.04],[.18,.407,-.04],chairArm,g);
  const seatOutline=[[-.20,-.23],[-.26,-.16],[-.283,.08],[-.25,.22],[0,.25],[.25,.22],[.283,.08],[.26,-.16],[.20,-.23],[0,-.25]];
  meshPanel(seatOutline,[0,0],(x,z,t)=>[x,.51-.035*(1-t*t)-.025*Math.max(0,z/.25),z],g,damage.seatTear??1);
  for(const side of[-1,1]){cable([[side*.12,.41,-.14],[side*.22,.46,-.20],[side*.24,.49,-.15]],.023,chairFrame,g);chairArmrest(g,side,side===damage.brokenArm);}
  if(!damage.noBack){const back=chairBack(g,damage.backTear??1);back.position.set(0,.55,-.22);back.rotation.set(damage.backLean??0,0,damage.backTwist??0);}
  return settleChairPart(g,x,z,rotation);
 }
 aeronChair(-2.85,-2.48,[0,.35,-.035],{brokenArm:1,backTear:2});
 aeronChair(-.30,3.35,[-.08,-.28,.08],{brokenArm:-1,missingSpoke:3,backLean:-.16});
 aeronChair(2.75,3.30,[-.55,-.80,1.39],{brokenArm:-1,missingSpoke:2,backTwist:.20});
 aeronChair(-.55,-3.42,[1.65,.65,.32],{brokenArm:1,noBack:true});
 // A tipped chair and its detached base frame the right-hand aisle without covering the laptop.
 aeronChair(1.35,1.42,[-.30,-.50,-1.28],{noBase:true,brokenArm:-1,backTwist:-.14,backTear:2});
 const looseBase=chairBase(office,1);looseBase.name='Detached chair base';settleChairPart(looseBase,2.35,2.53,[2.70,.36,.22]);
 const looseBack=chairBack(office,2);looseBack.name='Snapped mesh backrest';settleChairPart(looseBack,-.75,2.30,[-1.60,.22,-.40]);
 const looseArm=chairArmrest(office,1);looseArm.name='Broken chair arm';settleChairPart(looseArm,1.40,2.62,[1.48,.71,.15]);
 onFloor(chairCaster(office,2.37,.045,2.84,.7));onFloor(chairCaster(office,-2.15,.045,.95,-.4));
 seed=roomSeed;
 for(let i=0;i<11;i++){const x=range(-3.3,.9),z=range(-3,-1);cable([[x,.83,z],[x+.15,.52,z+.2],[x-.12,.04,z+.45],[x+.31,.022,z+.83],[x+.62,.02,z+.47]],.009,black);}
 // Loose network cables snake across the clear central aisle.
 cable([[-3.25,.026,.8],[-2,.023,1.45],[-1.25,.022,1.78],[-.85,.022,1.47],[-.67,.022,2.5],[.45,.022,2.83],[1.25,.022,2.44]],.012,black);
 cable([[2.8,.027,-2.9],[2.05,.025,-1.5],[1.64,.024,-.4],[1.8,.022,.1],[.98,.022,.6]],.008,material(0x625c3b,.9));

 // Neglected coffee station: espresso machine, broken carafe, cups, spills and a drawer hanging open.
 const coffee=desk(2.55,-3.38,1.92);box([1.70,.72,.72],[0,.40,-.025],material(0x667268,.94,woodMap),coffee);
 for(const x of[-.42,.42]){const drawer=box([.77,.24,.045],[x,.66,.37],wood,coffee);if(x>0){drawer.position.z=.51;drawer.rotation.z=-.04;}rod([x-.13,.66,.41],[x+.13,.66,.41],.014,steel,coffee);}
 const machine=new THREE.Group();machine.position.set(-.27,.87,-.04);coffee.add(machine);
 rounded([.49,.60,.37],[0,.30,0],steel,machine);box([.40,.35,.025],[0,.26,.20],black,machine);
 rounded([.34,.15,.06],[0,.50,.20],plastic,machine);box([.12,.05,.008],[-.07,.515,.236],material(0x223d2b,.4),machine);
 for(const x of[-.08,.08]){rod([x,.38,.21],[x,.31,.26],.018,silver,machine);}
 box([.37,.04,.23],[0,.045,.22],black,machine);for(let i=0;i<7;i++)box([.017,.012,.19],[-.14+i*.047,.07,.22],silver,machine);
 const hopper=cylinder(.12,.17,[0,.68,-.015],new THREE.MeshStandardMaterial({color:0x4d5a48,transparent:true,opacity:.55,roughness:.45}),machine,24);const lid=box([.27,.022,.25],[.025,.78,-.015],black,machine);lid.rotation.z=.13;
 const cupMaterial=material(0xb7b39a,.7,plasticMap);
 function mug(parent,pos,tilt=0){const g=new THREE.Group();g.position.set(...pos);g.rotation.z=tilt;parent.add(g);const profile=[[.052,0],[.055,.014],[.059,.12],[.054,.128],[.047,.12],[.047,.018]].map(p=>new THREE.Vector2(...p));mesh(new THREE.LatheGeometry(profile,24,0,Math.PI*1.9),cupMaterial,g);const handle=mesh(new THREE.TorusGeometry(.036,.008,8,20,Math.PI*1.6),cupMaterial,g);handle.rotation.x=Math.PI/2;handle.position.set(.066,.07,0);return g;}
 mug(machine,[0,.07,.23]);mug(coffee,[.46,.87,.25],1.25);mug(coffee,[.64,.87,-.02]);
 const coffeeStain=material(0x3b2a16,.33);const stain=mesh(new THREE.CircleGeometry(.18,32),coffeeStain,coffee);stain.rotation.x=-Math.PI/2;stain.position.set(.48,.862,.19);stain.scale.y=.65;stain.castShadow=false;
 // Cracked refrigerator and an empty water cooler.
 rounded([.52,.83,.54],[3.28,.42,-2.40],plastic);const fridgeDoor=box([.49,.78,.045],[3.21,.43,-2.10],plastic);fridgeDoor.rotation.y=.24;box([.035,.23,.04],[3.04,.56,-2.065],steel);
 box([.36,.80,.36],[3.39,.4,-1.72],plastic);const bottle=cylinder(.16,.40,[3.39,1.04,-1.72],new THREE.MeshStandardMaterial({color:0x70958b,transparent:true,opacity:.38,roughness:.34}),office,24);bottle.rotation.z=.08;

 // A collapsed right-hand support leaves the table visibly sloping toward the window.
 const game=new THREE.Group();game.name='Broken lopsided foosball table';game.position.set(2.24,-.104,.03);game.rotation.set(0,-.18,-.22);office.add(game);
 const tableWood=material(0xd2c3a2,.87,woodMap),field=material(0x7b9874,.92,fabricMap);
 box([1.18,.25,1.91],[0,.91,0],tableWood,game);box([1.04,.025,1.74],[0,1.048,0],field,game);
 for(const x of[-.61,.61])box([.10,.18,2.02],[x,1.12,0],tableWood,game);
 box([1.14,.18,.08],[0,1.12,-.99],tableWood,game);
 const brokenRail=new THREE.Shape();brokenRail.moveTo(-.57,1.03);brokenRail.lineTo(.57,1.03);brokenRail.lineTo(.57,1.21);brokenRail.lineTo(.23,1.21);brokenRail.lineTo(.12,1.07);brokenRail.lineTo(.02,1.15);brokenRail.lineTo(-.09,1.07);brokenRail.lineTo(-.16,1.21);brokenRail.lineTo(-.57,1.21);brokenRail.closePath();
 const rail=mesh(new THREE.ExtrudeGeometry(brokenRail,{depth:.08,bevelEnabled:false}),tableWood,game);rail.position.z=.95;
 for(const z of[-.99,.99])box([.30,.10,.012],[0,1.085,z+(z>0?-.045:.045)],black,game);
 for(const x of[-.47,.47])for(const z of[-.80,.80]){
  const snapped=x>0&&z>0,short=x>0;
  box([.11,snapped?.24:short?.57:.80,.12],[x,snapped?.68:short?.515:.40,z],steel,game);
  if(snapped)for(let i=0;i<4;i++)box([.012,.09,.018],[x-.04+i*.023,.555,z+range(-.04,.04)],wood,game).rotation.z=range(-.2,.2);
 }
 const fallenLeg=box([.11,.57,.12],[2.89,.09,.98],steel);fallenLeg.rotation.set(.05,.37,1.42);
 const brokenPlank=box([.45,.045,.08],[2.55,.045,1.32],tableWood);brokenPlank.rotation.y=.4;
 const markings=[];function line(a,b){markings.push(...a,...b);}
 for(const z of[-.80,.80])line([-.48,1.065,z],[.48,1.065,z]);for(const x of[-.48,.48])line([x,1.065,-.80],[x,1.065,.80]);line([-.48,1.065,0],[.48,1.065,0]);
 for(let i=0;i<48;i++){const a=i/48*Math.PI*2,b=(i+1)/48*Math.PI*2;line([Math.cos(a)*.19,1.065,Math.sin(a)*.19],[Math.cos(b)*.19,1.065,Math.sin(b)*.19]);}
 const lines=new THREE.BufferGeometry();lines.setAttribute('position',new THREE.Float32BufferAttribute(markings,3));game.add(new THREE.LineSegments(lines,new THREE.LineBasicMaterial({color:0x939e7e})));
 const players=[material(0x8b3930,.8),material(0xa2a18a,.8)];
 for(let row=0;row<8;row++){const z=-.78+row*.223,side=row%2?1:-1;
  if(row===5)cable([[-.91,1.21,z],[-.24,1.21,z],[.18,1.36,z+.13],[.91,1.17,z+.08]],.012,silver,game);else rod([-.91,1.21,z],[.91,1.21,z],.012,silver,game);
  if(row!==4)rod([side*.80,1.21,z],[side*1.02,1.21,z],.034,black,game);
  const count=row===0||row===7?1:row===1||row===6?2:3;
  for(let j=0;j<count;j++){if(row===3&&j===0||row===6&&j===1)continue;const x=(j-(count-1)/2)*.29;box([.055,.10,.037],[x,1.195,z],players[row%2],game);sphere([.031,.035,.031],[x,1.28,z],players[row%2],game);box([.06,.045,.045],[x,1.11,z],players[row%2],game);}
 }
 sphere([.024,.024,.024],[.46,1.09,.69],plastic,game);
 cable([[-.46,1.068,.29],[-.2,1.068,.21],[-.08,1.068,.30],[.12,1.068,.23],[.48,1.068,.37]],.007,black,game);
 const loosePlayer=box([.055,.13,.04],[.38,1.09,.51],players[0],game);loosePlayer.rotation.z=Math.PI/2;
 for(const z of[-1.07,1.07]){rod([-.32,1.27,z],[.32,1.27,z],.008,silver,game);for(let i=0;i<5;i++)sphere([.025,.03,.025],[-.25+i*.07,1.27,z],players[z>0?1:0],game);}

 // The MacBook rests directly on the floor in front of the viewer's prone eye position.
 const laptop=new THREE.Group();laptop.name='MacBook Pro on the floor';laptop.position.set(.45,.027,2.18);laptop.rotation.y=Math.atan2(viewerPosition.x-laptop.position.x,viewerPosition.z-laptop.position.z);office.add(laptop);
 // A separate floor prop beside the laptop, turned slightly clockwise from the viewer.
 const timerPosition=laptop.position.clone().add(new THREE.Vector3(1.18,0,0).applyAxisAngle(new THREE.Vector3(0,1,0),laptop.rotation.y));
 const countdown=createFloorTimer(viewerPosition,timerPosition);office.add(countdown.group);
 const handsaw=createFloorHandsaw(timerPosition);office.add(handsaw.group);onFloor(handsaw.group);
 const aluminum=material(0x879194,.35,null,.72),keyBlack=material(0x101517,.70);
 // Both halves share the same rounded footprint, including the bevel's outer extent.
 function devicePanel(w,h,t,pos,mat,parent,flat=false){const b=Math.min(.012,w/6,h/6,t/6),part=mesh(bevelBox(w-2*b,h-2*b,t,.026-b),mat,parent);part.position.set(...pos);if(flat)part.rotation.x=-Math.PI/2;return part;}
 devicePanel(.88,.59,.026,[0,0,0],aluminum,laptop,true);
 devicePanel(.66,.275,.003,[0,.0145,-.065],keyBlack,laptop,true);
 const hinge=cylinder(.013,.77,[0,.020,-.281],black,laptop,20);hinge.rotation.z=Math.PI/2;
 const laptopLid=new THREE.Group();laptopLid.position.set(0,.034,-.295);laptopLid.rotation.x=Math.PI/2;laptop.add(laptopLid);
 devicePanel(.88,.59,.018,[0,.295,0],aluminum,laptopLid);
 devicePanel(.856,.566,.005,[0,.295,.010],keyBlack,laptopLid);
 for(const x of[-.34,.34])for(const z of[-.21,.21])sphere([.025,.006,.025],[x,-.014,z],rubber,laptop);
 // The off-center Figma decal has a transparent backing; only the colored mark prints on the lid.
 const logoCanvas=document.createElement('canvas');logoCanvas.width=256;logoCanvas.height=384;const sticker=logoCanvas.getContext('2d');
 drawFigmaMark(sticker,28,42,200);
 const figmaMap=texture(logoCanvas),figmaMat=new THREE.MeshStandardMaterial({map:figmaMap,transparent:true,alphaTest:.1,roughness:.64,metalness:.03,emissiveMap:figmaMap,emissive:0xffffff,emissiveIntensity:.14});
 const lidEmblem=mesh(new THREE.PlaneGeometry(.115,.1725),figmaMat,laptopLid);lidEmblem.name='Off-center Figma vinyl sticker';lidEmblem.position.set(.265,.365,-.0108);lidEmblem.rotation.set(0,Math.PI,-.14);lidEmblem.castShadow=false;

 const[cDisplay,display]=canvas(1024);cDisplay.height=640;
 display.fillStyle='#111b22';display.fillRect(0,0,1024,640);
 display.fillStyle='#222e36';display.fillRect(0,0,1024,38);display.fillRect(0,38,140,602);display.fillRect(894,38,130,602);
 drawFigmaMark(display,15,6,17);
 display.font='13px sans-serif';display.fillStyle='#bac6ca';display.fillText('Figma / Wireframes',44,25);
 for(let i=0;i<7;i++){display.fillStyle=i===2?'#48616b':'#657a80';display.fillRect(18,85+i*34,85-i%3*18,3);}
 for(let i=0;i<3;i++){
  const x=181+i*231;display.fillStyle='#b2bfbb';display.fillRect(x,118,197,390);
  display.fillStyle='#465b62';display.fillRect(x+12,137,173,19);display.fillRect(x+12,175,173,86);
  display.strokeStyle='#53696d';display.lineWidth=2;display.beginPath();display.moveTo(x+12,175);display.lineTo(x+185,261);display.moveTo(x+185,175);display.lineTo(x+12,261);display.stroke();
  for(let row=0;row<5;row++){display.fillStyle='#82918f';display.fillRect(x+13,278+row*20,range(75,170),4);}
  display.fillStyle='#526c72';display.fillRect(x+14,401,169,28);
  display.strokeStyle='#788c8d';display.strokeRect(x+14,447,78,39);display.strokeRect(x+105,447,78,39);
 }
 for(let i=0;i<12;i++){display.fillStyle='#50666e';display.fillRect(912,84+i*31,range(35,90),3);}
 const displayMap=texture(cDisplay),displayMat=new THREE.MeshBasicMaterial({map:displayMap,color:0x7f9296});
 const laptopScreen=mesh(new THREE.PlaneGeometry(.823,.525),displayMat,laptopLid);laptopScreen.position.set(0,.300,.013);laptopScreen.castShadow=false;
 box([.076,.014,.002],[0,.556,.014],keyBlack,laptopLid);sphere([.003,.003,.001],[0,.553,.0155],material(0x1e3038,.2),laptopLid);
 const[cLabel,label]=canvas(512);cLabel.height=64;label.font='22px sans-serif';label.textAlign='center';label.fillStyle='#9ca5a6';label.fillText('MacBook Pro',256,40);
 const wordmark=mesh(new THREE.PlaneGeometry(.14,.018),new THREE.MeshBasicMaterial({map:texture(cLabel),transparent:true}),laptopLid);wordmark.position.set(0,.025,.013);wordmark.castShadow=false;
 const[cKeys,kctx]=canvas(1024);kctx.fillStyle='#151b1e';kctx.fillRect(0,0,1024,1024);kctx.strokeStyle='#3e494d';kctx.fillStyle='#9ca5a6';kctx.font='25px sans-serif';kctx.textAlign='center';
 const labels=['1234567890-=','QWERTYUIOP[]','ASDFGHJKL;’','ZXCVBNM,./'];
 for(let row=0;row<4;row++)for(let col=0;col<12;col++){const x=18+col*83,y=74+row*181;kctx.strokeRect(x,y,72,145);kctx.fillText(labels[row][col]||'',x+36,y+86);}
 kctx.strokeRect(250,825,524,125);const keyboardSurface=mesh(new THREE.PlaneGeometry(.635,.257),new THREE.MeshStandardMaterial({map:texture(cKeys),roughness:.7}),laptop);keyboardSurface.rotation.x=-Math.PI/2;keyboardSurface.position.set(0,.0165,-.065);
 const trackpad=devicePanel(.34,.17,.001,[0,.0135,.174],material(0x667478,.44,null,.62),laptop,true);
 const speakerDots=new THREE.InstancedMesh(new THREE.CircleGeometry(.0012,5),black,480);
 for(let i=0;i<480;i++){const o=new THREE.Object3D(),side=i<240?-1:1,j=i%240;o.position.set(side*(.355+(j%8)*.006),.017,-.196+Math.floor(j/8)*.0085);o.rotation.x=-Math.PI/2;o.updateMatrix();speakerDots.setMatrixAt(i,o.matrix);}laptop.add(speakerDots);
 for(const side of[-1,1])for(let i=0;i<3;i++)box([.003,.006,.035],[side*.444,.001,-.18+i*.065],keyBlack,laptop);
 const screenSpill=new THREE.PointLight(0x8daebe,0,1.4,2);screenSpill.position.set(0,.29,.14);laptopLid.add(screenSpill);
 const screenColor=displayMat.color.clone();displayMat.color.setScalar(0);
 let laptopOpened=false,laptopProgress=0,manualOpening=false;
 function applyLidProgress(progress){
  laptopLid.rotation.x=THREE.MathUtils.lerp(Math.PI/2,-.20,progress);
  const wake=THREE.MathUtils.smoothstep(progress,.22,.72);
  displayMat.color.copy(screenColor).multiplyScalar(wake);screenSpill.intensity=.60*wake;
 }
 const laptopControl={
  object:laptop,screen:laptopScreen,
  get isReady(){return laptopProgress===1;},
  get isOpen(){return laptopOpened;},
  get openProgress(){return laptopProgress;},
  getLidGrip(out){laptopLid.updateWorldMatrix(true,false);return laptopLid.localToWorld(out.set(.12,.600,-.004));},
  setOpenProgress(progress){manualOpening=true;laptopProgress=THREE.MathUtils.clamp(progress,0,1);laptopOpened=laptopProgress>0;applyLidProgress(laptopProgress);},
  open(){if(laptopOpened)return false;manualOpening=false;laptopOpened=true;return true;},
  close(){manualOpening=false;laptopOpened=false;laptopProgress=0;applyLidProgress(0);},
  update(dt,instant=false){
   if(manualOpening||!laptopOpened||laptopProgress===1)return;
   laptopProgress=instant?1:Math.min(1,laptopProgress+dt/.95);
   applyLidProgress(THREE.MathUtils.smootherstep(laptopProgress,0,1));
  }
 };

 // Paperwork, circuit boards, cables and broken casing fragments cover the floor.
 function paperMap(){const[c,ctx]=canvas();ctx.fillStyle='#b2af94';ctx.fillRect(0,0,512,512);ctx.fillStyle='#4f584c';for(let i=0;i<35;i++){const y=35+i*12;ctx.fillRect(30,y,range(100,430),range(1,3));}ctx.strokeStyle='rgba(64,54,28,.4)';ctx.lineWidth=4;ctx.beginPath();ctx.arc(345,130,61,0,Math.PI*2);ctx.stroke();speckle(ctx,512,8000,'49,45,27',.16);return texture(c);}
 const paper=material(0xffffff,.99,paperMap()),board=material(0x2b4834,.88),debrisMats=[plastic,steel,wood,material(0x838575,.97)],floorPapers=[],carpetPatches=[];
 for(let i=0;i<82;i++){
  let x=range(-3.62,3.58),z=range(-3.75,4.0);if(Math.abs(x)<.65&&z<.8&&z>-.9)x-=1.2;
  const sheet=mesh(new THREE.PlaneGeometry(range(.13,.29),range(.17,.37),4,4),paper);
  const crease=range(-.10,.10),curl=range(-.07,.07),angle=random()*Math.PI*2,oldHeight=range(.012,.038);
  sheet.rotation.set(-Math.PI/2,0,angle);sheet.position.set(x,.005,z);sheet.material.side=THREE.DoubleSide;sheet.name='Paper resting on the floor';
  const p=sheet.geometry.attributes.position;for(let j=0;j<p.count;j++)p.setZ(j,Math.abs(Math.sin(p.getX(j)*33+crease)*Math.sin(p.getY(j)*24+curl))*.0015+oldHeight*.008);
  floorPapers.push(sheet);
 }
 for(let i=0;i<95;i++){let x=range(-3.65,3.65),z=range(-3.7,4);if(Math.abs(x)<.8&&z>-.8&&z<1.3)x-=1.7;const piece=box([range(.025,.17),range(.015,.065),range(.035,.20)],[x,range(.025,.055),z],debrisMats[i%4]);piece.rotation.set(range(-.13,.13),random()*Math.PI*2,range(-.13,.13));piece.name='Fallen casing fragment';onFloor(piece);}
 for(let i=0;i<9;i++){const chip=new THREE.Group();chip.position.set(range(-3,3),.028,range(-2,3));chip.rotation.y=random()*6;office.add(chip);chip.name='Loose circuit board';onFloor(chip);box([.18,.012,.24],[0,0,0],board,chip);for(let j=0;j<4;j++)box([.035,.017,.05],[-.055+(j%2)*.10,.013,-.07+Math.floor(j/2)*.12],black,chip);}
 for(let i=0;i<12;i++){const p=box([.09,.018,.09],[range(-3.5,3.5),.03,range(-3.4,3.7)],black);p.rotation.y=random()*6;box([.06,.003,.03],[0,.011,0],plastic,p);p.name='Broken key cap';onFloor(p);}
 // A few torn carpet squares and lifted corners break up the concrete floor.
 for(let i=0;i<14;i++){const p=box([range(.3,.7),.012,range(.3,.8)],[range(-3.4,3.4),.007,range(-3.5,3.7)],material(i%2?0x888c7c:0x9b9a85,.98,fabricMap));p.rotation.y=range(-.15,.15);carpetPatches.push(p);}
 const floorSupport=createFloorSupport(carpetPatches);

 // Product-design whiteboards: screen layouts, mobile flows, notes and erased marker smears.
 // Uneven eraser passes leave ghost lines; dirt and drips collect around the frames.
 function wearWhiteboard(ctx,base,patches){
  ctx.save();ctx.lineCap='round';
  for(const[x,y,w,h]of patches){
   for(let row=0;row<13;row++){
    const yy=y+row*h/12;
    ctx.strokeStyle=base;ctx.globalAlpha=range(.65,.94);ctx.lineWidth=range(12,27);
    ctx.beginPath();ctx.moveTo(x+range(-18,35),yy);ctx.quadraticCurveTo(x+w*.45,yy+range(-12,12),x+w+range(-35,18),yy+range(-8,8));ctx.stroke();
   }
   ctx.globalAlpha=1;
   for(let i=0;i<8;i++)cloud(ctx,x+random()*w,y+random()*h,range(13,43),'54,66,61',range(.035,.09));
  }
  ctx.globalAlpha=1;
  for(let i=0;i<95;i++){
   const x=random()*1024,y=random()<.55?range(800,1045):random()*1024;
   cloud(ctx,x,y,range(14,95),i%3?'44,49,38':'103,77,42',range(.045,.16));
  }
  const grime=ctx.createLinearGradient(0,0,0,1024);grime.addColorStop(0,'rgba(43,44,32,.30)');grime.addColorStop(.13,'rgba(43,44,32,0)');grime.addColorStop(.77,'rgba(43,44,32,0)');grime.addColorStop(1,'rgba(44,40,27,.38)');ctx.fillStyle=grime;ctx.fillRect(0,0,1024,1024);
  for(let i=0;i<23;i++){const x=random()*1024,y=range(8,105);ctx.strokeStyle=`rgba(86,67,38,${range(.06,.17)})`;ctx.lineWidth=range(1.5,6);ctx.beginPath();ctx.moveTo(x,y);ctx.bezierCurveTo(x+4,y+60,x-3,y+125,x+range(-5,5),y+range(130,460));ctx.stroke();}
  speckle(ctx,1024,12000,'36,42,30',.21);
  ctx.restore();
 }
 function wireframeMap(mobile){
  const[c,ctx]=canvas(1024);ctx.fillStyle='#bfc4b6';ctx.fillRect(0,0,1024,1024);
  ctx.strokeStyle='#304a4d';ctx.fillStyle='#304a4d';ctx.lineWidth=4;ctx.font='28px sans-serif';ctx.fillText(mobile?'ONBOARDING / FIRST RUN':'WORKSPACE / DASHBOARD',45,67);
  function arrow(x,y){ctx.beginPath();ctx.moveTo(x,y);ctx.lineTo(x+50,y);ctx.lineTo(x+37,y-11);ctx.moveTo(x+50,y);ctx.lineTo(x+37,y+11);ctx.stroke();}
  if(mobile){
   for(let i=0;i<3;i++){
    const x=48+i*330;ctx.strokeRect(x,154,253,593);ctx.strokeRect(x+14,174,225,544);ctx.fillRect(x+80,187,91,5);
    ctx.strokeRect(x+32,225,189,130);ctx.beginPath();ctx.moveTo(x+32,225);ctx.lineTo(x+221,355);ctx.moveTo(x+221,225);ctx.lineTo(x+32,355);ctx.stroke();
    for(let j=0;j<4;j++)ctx.fillRect(x+31,397+j*25,170-(j%2)*41,4);
    ctx.strokeRect(x+32,524,188,54);ctx.strokeRect(x+32,602,188,54);if(i<2)arrow(x+266,451);
    ctx.font='23px sans-serif';ctx.fillText(['01 / welcome','02 / connect','03 / explore'][i],x+23,803);
   }
  }else{
   for(let i=0;i<2;i++){
    const x=45+i*498;ctx.strokeRect(x,165,436,525);ctx.strokeRect(x,165,436,44);ctx.strokeRect(x+14,223,87,448);
    for(let row=0;row<5;row++)ctx.fillRect(x+25,246+row*40,59-row%2*17,4);
    ctx.strokeRect(x+118,230,297,133);ctx.beginPath();ctx.moveTo(x+135,343);ctx.lineTo(x+171,300);ctx.lineTo(x+212,325);ctx.lineTo(x+270,265);ctx.lineTo(x+328,293);ctx.lineTo(x+397,248);ctx.stroke();
    for(let row=0;row<2;row++)for(let col=0;col<2;col++){ctx.strokeRect(x+118+col*154,385+row*145,139,124);ctx.fillRect(x+131+col*154,404+row*145,92,5);for(let j=0;j<3;j++)ctx.fillRect(x+131+col*154,431+row*145+j*18,103-j*13,3);}
   }
  }
  ctx.strokeStyle='#7d453b';ctx.lineWidth=3;ctx.beginPath();ctx.ellipse(510,905,357,48,-.02,0,Math.PI*2);ctx.stroke();ctx.font='25px sans-serif';ctx.fillStyle='#7d453b';ctx.fillText(mobile?'simplify the first step / test again':'less noise — keep the primary action visible',180,915);
  wearWhiteboard(ctx,'#bfc4b6',mobile?[[345,225,290,290],[65,570,220,170],[660,765,280,130]]:[[570,215,350,235],[145,500,280,200],[220,855,430,95]]);return texture(c);
 }
 for(let i=0;i<2;i++){
  const g=new THREE.Group();g.name='Whiteboard with interface wireframes';g.position.set(i?2.25:.12,2.20,-3.94);g.rotation.z=i?-.025:.012;office.add(g);
  box([1.78,1.12,.04],[0,0,0],silver,g);const map=wireframeMap(!i);
  const face=mesh(new THREE.PlaneGeometry(1.70,1.04),new THREE.MeshStandardMaterial({map,roughness:.75,emissive:0xffffff,emissiveMap:map,emissiveIntensity:.025}),g);face.position.z=.024;
  box([1.70,.023,.09],[0,-.57,.025],silver,g);
  for(let j=0;j<3;j++)rod([-.58+j*.18,-.546,.057],[-.46+j*.18,-.546,.057],.013,j?black:material(0x394e6a,.7),g);
 }

 // Freestanding planning whiteboard with curled sticky notes and old interface sketches.
 const partition=new THREE.Group();partition.name='Planning whiteboard covered in sticky notes';partition.position.set(1.90,0,-3.0);partition.rotation.y=0;office.add(partition);
 for(const x of[-1.12,1.12]){
  box([.045,.98,.055],[x,.49,0],steel,partition);box([.11,.06,.65],[x,.06,0],steel,partition);
  for(const z of[-.25,.25])sphere([.047,.045,.032],[x,.035,z],black,partition);
 }
 box([2.68,1.94,.05],[0,1.85,0],silver,partition);
 const missingNotes=new Set([1,4,7,9,13,17,20,22,24]);
 const[cPlanning,planning]=canvas(1024);planning.fillStyle='#c2c7ba';planning.fillRect(0,0,1024,1024);
 for(let i=0;i<65;i++)cloud(planning,random()*1024,random()*1024,range(15,110),'60,69,55',.065);
 planning.strokeStyle='rgba(38,62,63,.65)';planning.fillStyle='rgba(38,62,63,.65)';planning.lineWidth=3;
 for(let i=0;i<3;i++){
  const x=170+i*245;planning.strokeRect(x,560,190,335);planning.strokeRect(x+12,579,166,28);
  planning.strokeRect(x+12,625,166,102);planning.beginPath();planning.moveTo(x+12,625);planning.lineTo(x+178,727);planning.moveTo(x+178,625);planning.lineTo(x+12,727);planning.stroke();
  for(let j=0;j<4;j++)planning.fillRect(x+15,753+j*19,137-j%2*39,3);planning.strokeRect(x+15,843,160,28);
  if(i<2){planning.beginPath();planning.moveTo(x+198,727);planning.lineTo(x+235,727);planning.lineTo(x+222,717);planning.moveTo(x+235,727);planning.lineTo(x+222,737);planning.stroke();}
 }
 wearWhiteboard(planning,'#c2c7ba',[[130,620,285,170],[407,735,280,165],[685,530,190,150]]);
 // Pale paper-shaped ghosts and old adhesive remain where notes have fallen away.
 for(const index of missingNotes){
  const x=(-1.10+(index%9)*.273)/2.60*1024+512;
  const y=(.5-(2.63-Math.floor(index/9)*.28-1.85)/1.86)*1024;
  planning.fillStyle='rgba(203,203,175,.20)';planning.fillRect(x-40,y-59,80,118);
  planning.fillStyle='rgba(111,96,51,.17)';planning.fillRect(x-34,y-56,68,8);
  for(let j=0;j<9;j++){planning.fillStyle='rgba(77,67,39,.15)';planning.fillRect(x+range(-33,33),y-53+range(-2,6),range(1,3),range(2,5));}
 }
 const planningMap=texture(cPlanning),planningSurface=mesh(new THREE.PlaneGeometry(2.60,1.86),new THREE.MeshStandardMaterial({map:planningMap,roughness:.75,emissive:0xffffff,emissiveMap:planningMap,emissiveIntensity:.025}),partition);planningSurface.position.set(0,1.85,.027);
 box([2.58,.025,.13],[0,.87,.045],silver,partition);
 for(let i=0;i<3;i++)rod([-.63+i*.23,.899,.09],[-.48+i*.23,.899,.09],.017,i===0?material(0x344f65,.75):black,partition);
 box([.18,.045,.07],[.62,.906,.075],black,partition);
 const noteColors=['#c3b25e','#b38488','#7faaa9','#a4b081'];
 function sticky(parent,x,y,z,index){
  const[c,ctx]=canvas(128);ctx.fillStyle=noteColors[index%4];ctx.fillRect(0,0,128,128);ctx.fillStyle='rgba(42,49,37,.16)';ctx.fillRect(0,0,128,14);ctx.strokeStyle='rgba(39,52,47,.68)';ctx.lineWidth=2.6;
  for(let row=0;row<3+(index%3);row++){ctx.beginPath();const yy=30+row*16;ctx.moveTo(16,yy);for(let j=1;j<8;j++)ctx.lineTo(16+j*range(8,12),yy+range(-2.4,2.4));ctx.stroke();}
  if(index%4===0){ctx.strokeRect(19,75,35,27);ctx.strokeRect(72,75,35,27);}
  const geo=new THREE.PlaneGeometry(.205,.215,3,5),pos=geo.attributes.position;
  for(let i=0;i<pos.count;i++){const yy=pos.getY(i);pos.setZ(i,Math.max(0,-yy-.015)**2*3.3);}geo.computeVertexNormals();
  const map=texture(c),m=mesh(geo,new THREE.MeshStandardMaterial({map,roughness:.96,side:THREE.DoubleSide,emissive:0xffffff,emissiveMap:map,emissiveIntensity:.025}),parent);m.position.set(x,y,z);m.rotation.z=range(-.13,.13);return m;
 }
 for(let row=0;row<3;row++)for(let col=0;col<9;col++){if(missingNotes.has(row*9+col))continue;sticky(partition,-1.10+col*.273+range(-.018,.018),2.63-row*.28+range(-.014,.014),.040,row*9+col);}
 for(let i=0;i<5;i++){if(i===1||i===4)continue;sticky(partition,i<3?-1.10:1.09,1.75-(i%3)*.29,.040,28+i);}
 for(let i=0;i<4;i++){const fallenNote=sticky(office,-1.70-i*.30,.005,-.38+i*.26,33+i);fallenNote.rotation.set(-Math.PI/2,0,.6+i*.73);const p=fallenNote.geometry.attributes.position;for(let j=0;j<p.count;j++)p.setZ(j,p.getZ(j)*.10);floorPapers.push(fallenNote);}

 // One crooked overhead light and a small desk lamp provide practical light sources.
 const ceilingFixture=createFailingFluorescent();office.add(ceilingFixture.group);
 const ceilingInsects=createLightInsects({flies:14,moths:7,spread:[.88,.23,.50],sizeScale:.55,dive:.65});ceilingInsects.group.position.y=-.40;ceilingFixture.group.add(ceilingInsects.group);
 for(const x of[-.66,.66])rod([x,3.30,-.55],[x,2.98,-.55],.006,black);
 cable([[.85,3.30,-.6],[1.03,2.8,-.65],[1.26,2.86,-.7],[1.30,3.30,-.7]],.007,black);
 const deskLamp=new THREE.Group();deskLamp.position.set(-2.1,.88,-3.20);backDesk.parent.add(deskLamp);cylinder(.11,.035,[0,0,0],black,deskLamp);rod([0,0,0],[.05,.31,0],.016,steel,deskLamp);rod([.05,.31,0],[.22,.40,.02],.013,steel,deskLamp);const shade=mesh(new THREE.ConeGeometry(.12,.13,20,1,true),steel,deskLamp);shade.position.set(.23,.37,.02);sphere([.04,.025,.04],[.23,.32,.02],new THREE.MeshBasicMaterial({color:0xe6c184}),deskLamp);
 const taskLight=new THREE.PointLight(0xe6bd7e,1.2,2.5,2);taskLight.position.set(-1.87,1.19,-3.18);office.add(taskLight);
 const deskInsects=createLightInsects({flies:5,moths:3,spread:[.28,.10,.22],seed:113,sizeScale:.55,dive:.10});deskInsects.group.position.set(-1.87,1.14,-3.02);office.add(deskInsects.group);
 // Two discarded ketchup bottles, based on the glass and squeeze-bottle reference.
 const ketchup=new THREE.MeshPhysicalMaterial({color:0xd72e13,roughness:.31,clearcoat:1,clearcoatRoughness:.18});
 const bottleGlass=new THREE.MeshPhysicalMaterial({color:0xf0f1dc,roughness:.13,transparent:true,opacity:.16,depthWrite:false,clearcoat:1,clearcoatRoughness:.08});
 const bottleCap=material(0xd6ddd0,.49),capSeam=material(0x899589,.69);
 // Distinct front and neck artwork follows the supplied 750 ml / 500 mL reference.
 const labelLoader=new THREE.TextureLoader();
 function ketchupLabel(file){
  const map=labelLoader.load(new URL(`./labels/${file}.svg`,import.meta.url).href);
  map.colorSpace=THREE.SRGBColorSpace;map.anisotropy=Math.min(8,renderer.capabilities.getMaxAnisotropy());
  return new THREE.MeshStandardMaterial({map,transparent:true,alphaTest:.15,roughness:.72,side:THREE.DoubleSide});
 }
 const glassLabel=ketchupLabel('ketchup-glass'),squeezeLabel=ketchupLabel('ketchup-squeeze'),neckLabel=ketchupLabel('ketchup-neck');
 // Preserve the seeded room clutter after replacing the former procedural label.
 for(let i=0;i<8140;i++)random();
 function radiusAt(profile,y){for(let i=1;i<profile.length;i++)if(profile[i][1]>=y){const[a,ay]=profile[i-1],[b,by]=profile[i];return THREE.MathUtils.lerp(a,b,(y-ay)/(by-ay||1));}return profile.at(-1)[0];}
 function bottleLabel(parent,profile,bottom,top,paper,depth=1,span=1.02){
  const geo=new THREE.PlaneGeometry(1,1,24,16),p=geo.attributes.position,uv=geo.attributes.uv;
  for(let i=0;i<p.count;i++){const a=(uv.getX(i)*2-1)*span,y=THREE.MathUtils.lerp(bottom,top,uv.getY(i)),r=radiusAt(profile,y)+.0018;p.setXYZ(i,Math.sin(a)*r,y,Math.cos(a)*r*depth+.0008);}
  geo.computeVertexNormals();const label=mesh(geo,paper,parent);label.castShadow=false;return label;
 }
 function bottleShell(profile,mat,parent,depth=1){const body=mesh(new THREE.LatheGeometry(profile.map(p=>new THREE.Vector2(...p)),48),mat,parent);body.scale.z=depth;return body;}
 function placeBottle(bottle,x,z,rotation,center,scale){
  const pose=new THREE.Group();pose.name=bottle.name;pose.add(bottle);bottle.position.y=-center;office.add(pose);pose.position.set(x,0,z);pose.rotation.set(...rotation);pose.scale.setScalar(scale);pose.updateMatrixWorld(true);return settleOnFloor(pose,floorSupport);
 }
 const glassKetchup=new THREE.Group();glassKetchup.name='Discarded glass ketchup bottle';
 const glassProfile=[[0,0],[.063,0],[.076,.014],[.080,.047],[.079,.19],[.069,.267],[.049,.342],[.030,.410],[.029,.447],[.033,.454],[.032,.471],[0,.471]];
 const filling=glassProfile.filter(p=>p[1]<.44).map(([r,y])=>[Math.max(0,r-.0035),y+.004]);filling.push([.026,.443],[0,.443]);
 const glassFilling=bottleShell(filling,ketchup,glassKetchup);const glassBody=bottleShell(glassProfile,bottleGlass,glassKetchup);glassBody.castShadow=false;
 bottleLabel(glassKetchup,glassProfile,.047,.240,glassLabel);bottleLabel(glassKetchup,glassProfile,.365,.432,neckLabel,1,.95);
 const glassCap=new THREE.Group();glassCap.position.y=.480;glassKetchup.add(glassCap);
 cylinder(.037,.036,[0,0,0],bottleCap,glassCap,32);cylinder(.0365,.006,[0,.461,0],capSeam,glassKetchup,32);
 for(let i=0;i<30;i++){const a=i/30*Math.PI*2;rod([Math.cos(a)*.037,-.013,Math.sin(a)*.037],[Math.cos(a)*.037,.014,Math.sin(a)*.037],.0011,capSeam,glassCap);}
 const glassBottom=mesh(new THREE.TorusGeometry(.070,.003,6,32),bottleGlass,glassKetchup);glassBottom.rotation.x=Math.PI/2;glassBottom.position.y=.016;
 const glassBottlePose=placeBottle(glassKetchup,-.28,2.92,[-.25,.45,Math.PI/2],.25,.82);
 const squeezeKetchup=new THREE.Group();squeezeKetchup.name='Discarded squeeze ketchup bottle';
 const squeezeProfile=[[0,.058],[.055,.058],[.065,.075],[.098,.105],[.115,.15],[.109,.25],[.118,.36],[.112,.415],[.092,.438],[0,.438]];
 bottleShell(squeezeProfile,ketchup,squeezeKetchup,.62);bottleLabel(squeezeKetchup,squeezeProfile,.122,.403,squeezeLabel,.62,1.04);
 const flipCap=cylinder(.069,.060,[0,.034,0],bottleCap,squeezeKetchup,40);flipCap.scale.z=.73;
 const lidSeam=cylinder(.0694,.003,[0,.014,0],capSeam,squeezeKetchup,40);lidSeam.scale.z=.73;
 rounded([.042,.012,.010],[0,.014,.051],bottleCap,squeezeKetchup);
 box([.031,.018,.008],[0,.040,-.050],capSeam,squeezeKetchup);
 placeBottle(squeezeKetchup,1.95,2.45,[-Math.PI/2,0,-.45],.225,.80);
 // A tipped blue animal mug with pointed ceramic ears and coffee running from its rim.
 const[cMug,mugPaint]=canvas(1024);cMug.height=512;
 mugPaint.fillStyle='#86b0b2';mugPaint.fillRect(0,0,1024,512);
 for(let i=0;i<180;i++)cloud(mugPaint,random()*1024,random()*512,range(5,55),i%2?'225,229,207':'83,125,129',range(.035,.14));
 mugPaint.lineCap='round';
 for(let i=0;i<260;i++){const x=random()*1024,y=random()*512;mugPaint.strokeStyle=`rgba(44,57,53,${range(.3,.65)})`;mugPaint.lineWidth=range(2,4);mugPaint.beginPath();mugPaint.moveTo(x,y);mugPaint.quadraticCurveTo(x-3,y+7,x+range(-2,3),y+range(7,15));mugPaint.stroke();}
 mugPaint.fillStyle='#eee2c3';mugPaint.beginPath();mugPaint.moveTo(512,176);mugPaint.bezierCurveTo(459,117,386,112,350,169);mugPaint.bezierCurveTo(313,243,337,421,410,466);mugPaint.bezierCurveTo(460,493,565,493,615,466);mugPaint.bezierCurveTo(687,421,711,243,675,169);mugPaint.bezierCurveTo(639,112,565,117,512,176);mugPaint.fill();
 for(const x of[433,591]){cloud(mugPaint,x,271,29,'197,123,110',.20);mugPaint.fillStyle='#3d3630';mugPaint.beginPath();mugPaint.ellipse(x,215,7,4,-.20,0,Math.PI*2);mugPaint.fill();}
 mugPaint.strokeStyle='#52443a';mugPaint.lineWidth=3;mugPaint.beginPath();mugPaint.moveTo(512,274);mugPaint.lineTo(512,316);mugPaint.bezierCurveTo(501,335,482,337,472,326);mugPaint.moveTo(512,316);mugPaint.bezierCurveTo(523,335,542,337,552,326);mugPaint.stroke();
 for(const side of[-1,1])for(let i=0;i<3;i++){mugPaint.fillStyle='#6e5b46';mugPaint.beginPath();mugPaint.arc(512+side*(25+i*9),300+(i%2)*12,1.8,0,Math.PI*2);mugPaint.fill();}
 speckle(mugPaint,512,2300,'112,124,109',.07);
 const mugGlaze=new THREE.MeshPhysicalMaterial({map:texture(cMug),roughness:.29,clearcoat:1,clearcoatRoughness:.16});
 const blueGlaze=new THREE.MeshPhysicalMaterial({color:0x8ab7b9,roughness:.25,clearcoat:1,clearcoatRoughness:.14});
 const[cInside,insidePaint]=canvas(1024);cInside.height=512;insidePaint.fillStyle='#e8dcba';insidePaint.fillRect(0,0,1024,512);
 for(let i=0;i<18;i++){const x=i*1024/18;insidePaint.fillStyle=i%2?'#93b8ae':'#7ca6a5';insidePaint.beginPath();insidePaint.moveTo(x-12,0);insidePaint.bezierCurveTo(x-20,170,x+4,310,x-12,512);insidePaint.lineTo(x+12,512);insidePaint.bezierCurveTo(x+26,310,x+8,170,x+17,0);insidePaint.closePath();insidePaint.fill();}
 const coffeeRing=insidePaint.createLinearGradient(0,220,0,512);coffeeRing.addColorStop(0,'rgba(103,62,27,0)');coffeeRing.addColorStop(.7,'rgba(103,62,27,.09)');coffeeRing.addColorStop(1,'rgba(74,39,14,.48)');insidePaint.fillStyle=coffeeRing;insidePaint.fillRect(0,0,1024,512);
 const innerGlaze=new THREE.MeshPhysicalMaterial({map:texture(cInside),roughness:.34,clearcoat:.8,side:THREE.DoubleSide});
 const earMug=new THREE.Group();earMug.name='Blue pointy-eared mug tipped on its side';
 function mugSurface(profile,mat){const geo=new THREE.LatheGeometry(profile.map(p=>new THREE.Vector2(...p)),64),uv=geo.attributes.uv,p=geo.attributes.position;for(let i=0;i<p.count;i++)uv.setY(i,p.getY(i)/.258);geo.rotateY(Math.PI);return mesh(geo,mat,earMug);}
 mugSurface([[0,.008],[.085,.008],[.113,.018],[.126,.043],[.139,.138],[.144,.236],[.140,.257]],mugGlaze);
 mugSurface([[.127,.257],[.128,.237],[.121,.090],[.106,.034],[0,.034]],innerGlaze);
 const mugRim=mesh(new THREE.TorusGeometry(.134,.008,10,64),blueGlaze,earMug);mugRim.rotation.x=Math.PI/2;mugRim.position.y=.254;
 const mugFoot=mesh(new THREE.TorusGeometry(.102,.004,8,48),innerGlaze,earMug);mugFoot.rotation.x=Math.PI/2;mugFoot.position.y=.012;
 for(const side of[-1,1]){
  const ear=new THREE.Group();ear.position.set(side*.095,.235,.103);ear.rotation.set(-.06,side*Math.atan2(.095,.103),-side*.10);earMug.add(ear);
  const shape=new THREE.Shape();shape.moveTo(-.047,0);shape.bezierCurveTo(-.044,.046,-.015,.112,0,.142);shape.bezierCurveTo(.018,.125,.046,.045,.047,0);shape.closePath();
  const geo=new THREE.ExtrudeGeometry(shape,{depth:.013,bevelEnabled:true,bevelSegments:3,steps:1,bevelSize:.005,bevelThickness:.005,curveSegments:12});geo.translate(0,0,-.0065);mesh(geo,blueGlaze,ear);
  cable([[-.028,.018,.014],[-.025,.057,.014],[0,.113,.014],[.027,.036,.014]],.0019,material(0x4c615b,.62),ear);
 }
 const[cHandle,handlePaint]=canvas(256);handlePaint.fillStyle='#e8dfc6';handlePaint.fillRect(0,0,256,256);handlePaint.fillStyle='#84adb0';for(const x of[0,95,200])handlePaint.fillRect(x,0,47,256);
 const handleGlaze=new THREE.MeshPhysicalMaterial({map:texture(cHandle),roughness:.28,clearcoat:1});
 cable([[.129,.211,0],[.195,.222,0],[.249,.188,0],[.257,.130,0],[.229,.075,0],[.178,.057,0],[.125,.076,0]],.014,handleGlaze,earMug);
 const noseShape=new THREE.Shape();noseShape.moveTo(-.021,.010);noseShape.quadraticCurveTo(0,.021,.021,.010);noseShape.quadraticCurveTo(.021,-.003,0,-.019);noseShape.quadraticCurveTo(-.022,-.004,-.021,.010);
 const nose=mesh(new THREE.ExtrudeGeometry(noseShape,{depth:.012,bevelEnabled:true,bevelSize:.003,bevelThickness:.003,bevelSegments:2,curveSegments:8}),new THREE.MeshPhysicalMaterial({color:0x292823,roughness:.30,clearcoat:1}),earMug);nose.position.set(0,.129,.142);
 const mugPose=new THREE.Group();mugPose.name='Spilled animal mug in the left foreground';mugPose.add(earMug);earMug.position.y=-.135;office.add(mugPose);
 const mouthAxis=new THREE.Vector3(-.55,-.05,.83).normalize(),faceAxis=new THREE.Vector3(.54,.66,.39);faceAxis.addScaledVector(mouthAxis,-faceAxis.dot(mouthAxis)).normalize();
 const sideAxis=new THREE.Vector3().crossVectors(mouthAxis,faceAxis).normalize();mugPose.quaternion.setFromRotationMatrix(new THREE.Matrix4().makeBasis(sideAxis,mouthAxis,faceAxis));
 mugPose.scale.setScalar(.72);mugPose.position.set(.24,0,3.02);mugPose.updateMatrixWorld(true);settleOnFloor(mugPose,floorSupport);mugPose.updateMatrixWorld(true);
 // Find the lowest point of the open rim so the spill visibly meets the cup.
 const rimSlope=Math.hypot(sideAxis.y,faceAxis.y),rimPoint=earMug.localToWorld(new THREE.Vector3(-.134*sideAxis.y/rimSlope,.254,-.134*faceAxis.y/rimSlope));
 const spillDirection=new THREE.Vector3(mouthAxis.x,0,mouthAxis.z).normalize(),poolCenter=rimPoint.clone().addScaledVector(spillDirection,.23);poolCenter.y=floorSupport(poolCenter.x,poolCenter.z)+.001;
 const wetCoffee=new THREE.MeshPhysicalMaterial({color:0x51402b,roughness:.13,metalness:.04,clearcoat:1,clearcoatRoughness:.08,transparent:true,opacity:.94,side:THREE.DoubleSide});
 const coffeeEdge=new THREE.MeshStandardMaterial({color:0x8a7049,roughness:.40,transparent:true,opacity:.68,depthWrite:false,side:THREE.DoubleSide});
 function coffeePuddle(x,z,rx,rz,phase=0){
  const outline=new THREE.Shape();for(let i=0;i<=80;i++){const a=i/80*Math.PI*2,r=1+.11*Math.sin(a*3+phase)+.065*Math.sin(a*7-.3)+.025*Math.cos(a*13),xx=Math.cos(a)*rx*r,zz=Math.sin(a)*rz*r;i?outline.lineTo(xx,zz):outline.moveTo(xx,zz);}outline.closePath();
  const geometry=new THREE.ShapeGeometry(outline,32),edge=mesh(geometry,coffeeEdge);edge.rotation.x=-Math.PI/2;edge.scale.setScalar(1.045);edge.position.set(x,floorSupport(x,z)+.0005,z);edge.castShadow=false;
  const puddle=mesh(geometry,wetCoffee);puddle.rotation.x=-Math.PI/2;puddle.position.set(x,floorSupport(x,z)+.001,z);puddle.castShadow=false;return puddle;
 }
 coffeePuddle(poolCenter.x,poolCenter.z,.23,.145,.4);
 const lipFloor=rimPoint.clone();lipFloor.y=floorSupport(lipFloor.x,lipFloor.z)+.008;
 cable([rimPoint.toArray(),lipFloor.toArray(),lipFloor.clone().addScaledVector(spillDirection,.09).toArray(),poolCenter.toArray()],.008,wetCoffee);
 for(const[distance,side,radius]of[[.45,.10,.018],[.51,-.07,.012],[.37,-.18,.022],[.29,.21,.009]]){
  const drop=rimPoint.clone().addScaledVector(spillDirection,distance).add(new THREE.Vector3(-spillDirection.z*side,0,spillDirection.x*side));coffeePuddle(drop.x,drop.z,radius,radius*.65,distance*3);
 }

 // Papers conform to the concrete and thin carpet remnants instead of hovering above them.
 office.updateMatrixWorld(true);
 for(const sheet of floorPapers){
  const p=sheet.geometry.attributes.position;
  for(let i=0;i<p.count;i++){
   const point=sheet.localToWorld(new THREE.Vector3(p.getX(i),p.getY(i),0));let support=.003;
   for(const patch of carpetPatches){const local=patch.worldToLocal(point.clone()),size=patch.geometry.parameters;if(Math.abs(local.x)<size.width/2&&Math.abs(local.z)<size.depth/2)support=Math.max(support,.013);}
   p.setZ(i,p.getZ(i)+support+.002-sheet.position.y);
  }
  p.needsUpdate=true;sheet.geometry.computeVertexNormals();sheet.geometry.computeBoundingSphere();
 }

 // The left wall carries the remains of the design team's work and reference library.
 for(const[z,y,w,h,mobile]of[[-2.53,2.13,1.52,1.08,true],[-.62,2.13,1.78,1.10,false]]){
  const g=new THREE.Group();g.name='Left-wall design whiteboard';g.position.set(-3.86,y,z);g.rotation.y=Math.PI/2;office.add(g);
  box([w,h,.045],[0,0,0],silver,g);const map=wireframeMap(mobile);
  const face=mesh(new THREE.PlaneGeometry(w-.07,h-.07),new THREE.MeshStandardMaterial({map,roughness:.85,emissive:0xffffff,emissiveMap:map,emissiveIntensity:.025}),g);face.position.z=.026;
  box([w-.07,.025,.10],[0,-h/2,.035],silver,g);
  rod([-.4,-h/2+.025,.06],[-.23,-h/2+.025,.06],.011,black,g);
  box([.13,.035,.065],[w*.29,-h/2+.029,.045],fabric,g);
  sticky(g,w*.35,h*.21,.034,mobile?6:9);
 }
 const library=new THREE.Group();library.name='Worn bookshelf of design books';library.position.set(-3.65,0,1.65);library.rotation.y=Math.PI/2;office.add(library);
 const shelfWood=material(0xb1a893,.92,woodMap),bookPages=material(0xa6a28d,.98);
 box([1.56,2.38,.035],[0,1.19,-.185],shelfWood,library);
 for(const x of[-.765,.765])box([.045,2.42,.42],[x,1.21,.015],shelfWood,library);
 for(const y of[.12,.66,1.20,1.74,2.28])box([1.50,.035,.42],[0,y,.015],shelfWood,library);
 box([1.51,.10,.045],[0,.05,.19],shelfWood,library);
 const titles=[['The Design of Everyday Things','#b5ad86'],["Don't Make Me Think",'#bd8b36'],['Thinking with Type','#9f392f'],['Grid Systems','#adaf9a'],['Designing Interfaces','#54796f'],['About Face','#393e3e'],['The Elements of User Experience','#758b9d'],['Sprint','#b3a847'],['Universal Principles of Design','#b8b5a4'],['Designing for Interaction','#80665b'],['Sketching User Experiences','#456976'],['The Shape of Design','#bcb296']];
 const spines=titles.map(([title,color],i)=>{
  const[c,ctx]=canvas(128);c.height=1024;ctx.fillStyle=color;ctx.fillRect(0,0,128,1024);
  const shade=ctx.createLinearGradient(0,0,128,0);shade.addColorStop(0,'rgba(0,0,0,.35)');shade.addColorStop(.25,'rgba(0,0,0,0)');shade.addColorStop(.86,'rgba(230,219,175,.12)');shade.addColorStop(1,'rgba(0,0,0,.2)');ctx.fillStyle=shade;ctx.fillRect(0,0,128,1024);
  ctx.save();ctx.translate(76,70);ctx.rotate(Math.PI/2);ctx.fillStyle=[2,4,5,6,9,10].includes(i)?'#ded9c5':'#262b26';ctx.font='600 47px Georgia,serif';ctx.fillText(title,0,0,820);ctx.restore();
  ctx.fillStyle='rgba(217,210,181,.55)';ctx.fillRect(14,947,100,3);ctx.fillRect(14,963,100,3);speckle(ctx,128,400,'22,24,17',.22);
  return new THREE.MeshStandardMaterial({map:texture(c),roughness:.96});
 });
 for(let row=0;row<4;row++){
  let x=-.69;
  for(let i=0;i<16;i++){
   const index=(i+row*5)%titles.length,w=range(.045,.085),h=range(.30,.44),depth=range(.22,.30);
   if(x+w>.68)break;if(i===7||row===2&&i===11){x+=.10;continue;}
   const book=new THREE.Group();book.name=titles[index][0];library.add(book);const lean=(i%6===5?-.12:range(-.025,.025));book.rotation.z=lean;book.position.set(x+w/2,.12+row*.54+.018+Math.abs(Math.sin(lean))*w/2,.18-depth/2);
   box([w-.008,h-.009,depth-.007],[0,h/2,0],bookPages,book);
   const cover=material(titles[index][1],.93);for(const side of[-1,1])box([.004,h,depth],[side*(w/2-.002),h/2,0],cover,book);
   box([w,h,.007],[0,h/2,depth/2],cover,book);
   const spine=mesh(new THREE.PlaneGeometry(w-.002,h-.004),spines[index],book);spine.position.set(0,h/2,depth/2+.004);spine.castShadow=false;
   x+=w+.008;
  }
 }
 // Dust collects along shelf lips and in the empty upper section.
 for(const y of[.14,.68,1.22,1.76,2.30])box([1.44,.002,.035],[0,y,.196],material(0x6d6e59,.99),library);
 const looseBook=box([.32,.055,.24],[.41,2.327,.03],material(0x6a4538,.95),library);looseBook.rotation.y=.17;

 // High-resolution concrete wear: old spills, ground-in dirt, caster marks and fine cracks.
 const[cWear,wear]=canvas(2048);wear.fillStyle='#66695d';wear.fillRect(0,0,2048,2048);
 for(let i=0;i<1250;i++)cloud(wear,random()*2048,random()*2048,range(4,125),i%4?'34,31,21':'135,131,110',range(.035,.22));
 for(let i=0;i<160;i++){
  const side=i%4,x=side<2?(side?2048:0)+range(-45,90):random()*2048,y=side<2?random()*2048:(side===2?0:2048)+range(-45,90);
  cloud(wear,x,y,range(60,190),'20,26,19',range(.15,.4));
 }
 for(let i=0;i<75;i++){
  const x=range(80,1968),y=range(80,1968),r=range(14,70);cloud(wear,x,y,r*1.7,'57,35,15',range(.13,.35));
  wear.strokeStyle=`rgba(48,35,18,${range(.12,.36)})`;wear.lineWidth=range(1,4);wear.beginPath();wear.ellipse(x,y,r,r*range(.6,1.2),random()*Math.PI,0,Math.PI*range(1.1,2));wear.stroke();
 }
 wear.lineCap='round';
 for(let i=0;i<340;i++){
  const x=range(100,1950),y=range(100,1950);wear.save();wear.translate(x,y);wear.rotate(random()*Math.PI*2);
  wear.strokeStyle=`rgba(16,23,19,${range(.10,.30)})`;wear.lineWidth=range(1,4);wear.beginPath();wear.moveTo(0,0);wear.quadraticCurveTo(range(15,50),range(-12,12),range(55,160),range(-20,20));wear.stroke();wear.restore();
 }
 // Narrow chipped cracks and lighter scratches break up the surface without raised geometry.
 for(let i=0;i<17;i++){
  let x=random()*2048,y=random()*2048;wear.beginPath();wear.moveTo(x,y);for(let j=0;j<9;j++){x+=range(-20,25);y+=range(6,27);wear.lineTo(x,y);}
  wear.strokeStyle='rgba(18,23,18,.42)';wear.lineWidth=2.2;wear.stroke();
 }
 for(let i=0;i<1900;i++){const x=random()*2048,y=random()*2048;wear.strokeStyle=`rgba(167,163,137,${range(.03,.22)})`;wear.lineWidth=range(.4,1.3);wear.beginPath();wear.moveTo(x,y);wear.lineTo(x+range(3,28),y+range(-5,5));wear.stroke();}
 speckle(wear,2048,90000,'16,22,15',.26);speckle(wear,2048,30000,'166,161,135',.20);
 const wornFloorMap=texture(cWear);concrete.map=wornFloorMap;concrete.bumpMap=wornFloorMap;concrete.bumpScale=.006;concrete.needsUpdate=true;
 // Complete the room behind the prone viewer with an abandoned service entrance.
 const rear=new THREE.Group();rear.name='Weathered entrance wall behind the viewer';rear.position.z=4.48;rear.rotation.y=Math.PI;office.add(rear);
 box([7.8,3.35,.16],[0,1.675,-.08],material(0x99a18f,.99,plasterMap),rear);
 const rearGrime=dirtOverlay(7.8,3.35,rear);rearGrime.position.set(0,1.675,.004);
 box([7.8,.14,.045],[0,.07,.024],black,rear);
 box([7.8,.026,.023],[0,2.87,.03],steel,rear);
 // Water leaks, missing paint and narrow plaster cracks gather around the old door frame.
 const[cRear,rearWear]=canvas(1024);
 for(let i=0;i<62;i++){
  const x=random()*1024,y=range(0,180);rearWear.strokeStyle=`rgba(43,36,22,${range(.10,.32)})`;rearWear.lineWidth=range(.5,5);rearWear.beginPath();rearWear.moveTo(x,y);rearWear.bezierCurveTo(x+6,y+80,x-4,y+170,x+range(-6,9),y+range(210,650));rearWear.stroke();
 }
 for(let i=0;i<21;i++){
  const x=random()*1024,y=random()*1024;rearWear.beginPath();for(let j=0;j<12;j++){const a=j/12*Math.PI*2,r=range(9,27),xx=x+Math.cos(a)*r,yy=y+Math.sin(a)*r*1.7;j?rearWear.lineTo(xx,yy):rearWear.moveTo(xx,yy);}rearWear.closePath();rearWear.fillStyle=i%3?'rgba(61,65,52,.75)':'rgba(149,144,118,.6)';rearWear.fill();
 }
 for(let i=0;i<10;i++){
  let x=random()*1024,y=range(60,850);rearWear.strokeStyle='rgba(28,34,26,.75)';rearWear.lineWidth=.8;rearWear.beginPath();rearWear.moveTo(x,y);for(let j=0;j<8;j++){x+=range(-9,12);y+=range(5,16);rearWear.lineTo(x,y);}rearWear.stroke();
 }
 const rearScars=mesh(new THREE.PlaneGeometry(7.8,3.35),new THREE.MeshStandardMaterial({map:texture(cRear),transparent:true,depthWrite:false,roughness:1}),rear);rearScars.position.set(0,1.675,.007);rearScars.castShadow=false;
 const door=new THREE.Group();door.name='Scuffed service door and failing exit sign';door.position.set(1.20,0,.05);rear.add(door);
 const doorPaint=material(0x697368,.88,metalMap,.22);
 box([1.12,2.34,.042],[0,1.17,0],black,door);
 box([1.035,2.27,.048],[0,1.153,.022],doorPaint,door);
 for(const x of[-.565,.565])box([.065,2.40,.10],[x,1.20,.035],steel,door);
 box([1.19,.065,.10],[0,2.40,.035],steel,door);
 box([1.10,.025,.13],[0,.016,.045],silver,door);
 box([.85,.28,.009],[0,.25,.052],material(0x6e766c,.7,metalMap,.55),door);
 for(const side of[-1,1])for(const y of[.14,.35])sphere([.008,.008,.003],[side*.39,y,.059],silver,door);
 box([.68,.73,.032],[0,1.69,.055],steel,door);
 const[cDoor,doorGlass]=canvas(512);doorGlass.fillStyle='#293c39';doorGlass.fillRect(0,0,512,512);
 for(let i=0;i<170;i++)cloud(doorGlass,random()*512,random()*512,range(4,45),'7,14,11',range(.08,.3));
 doorGlass.strokeStyle='rgba(100,118,105,.32)';doorGlass.lineWidth=1.4;for(let i=-512;i<1024;i+=36){doorGlass.beginPath();doorGlass.moveTo(i,0);doorGlass.lineTo(i+512,512);doorGlass.moveTo(i,0);doorGlass.lineTo(i-512,512);doorGlass.stroke();}
 const doorWindow=mesh(new THREE.PlaneGeometry(.60,.65),new THREE.MeshPhysicalMaterial({map:texture(cDoor),roughness:.32,clearcoat:.8,metalness:.12}),door);doorWindow.position.set(0,1.69,.074);
 rod([.36,.90,.095],[.36,1.05,.095],.017,silver,door);rod([.36,1.03,.095],[.20,1.03,.12],.015,silver,door);
 for(const y of[.35,1.20,2.07]){box([.07,.10,.034],[-.515,y,.064],steel,door);cylinder(.012,.12,[-.53,y,.08],silver,door);}
 function wallLabel(text,w,h,parent,pos,background='#74796b',ink='#d0cdb8'){
  const[c,ctx]=canvas(512);c.height=128;ctx.fillStyle=background;ctx.fillRect(0,0,512,128);ctx.fillStyle=ink;ctx.font='600 50px Arial,sans-serif';ctx.textAlign='center';ctx.fillText(text,256,82,470);speckle(ctx,512,1500,'14,20,15',.2);
  const label=mesh(new THREE.PlaneGeometry(w,h),new THREE.MeshStandardMaterial({map:texture(c),roughness:.9}),parent);label.position.set(...pos);label.castShadow=false;return label;
 }
 wallLabel('STAFF ONLY',.40,.10,door,[0,1.12,.055]);
 box([.54,.21,.10],[0,2.66,.08],steel,door);
 const exitLabel=wallLabel('EXIT  →',.48,.15,door,[0,2.66,.133],'#263b30','#a8b593');exitLabel.material.emissive.set(0x5b7657);exitLabel.material.emissiveMap=exitLabel.material.map;exitLabel.material.emissiveIntensity=.25;
 // An old pinboard of discarded design critiques, curling printouts and tape ghosts.
 const notices=new THREE.Group();notices.name='Abandoned critique pinboard';notices.position.set(-.95,1.94,.055);notices.rotation.z=-.018;rear.add(notices);
 const cork=material(0x807052,.99,woodMap);box([1.86,1.25,.045],[0,0,0],cork,notices);
 for(const x of[-.94,.94])box([.035,1.30,.055],[x,0,.01],steel,notices);
 for(const y of[-.64,.64])box([1.91,.035,.055],[0,y,.01],steel,notices);
 for(let i=0;i<7;i++){
  const x=-.68+(i%4)*.44,y=i<4?.28:-.26,map=wireframeMap(i%2===0),print=mesh(new THREE.PlaneGeometry(.35,.43),new THREE.MeshStandardMaterial({map,color:i%2?0xb9b4a0:0xc6c6b4,roughness:1,side:THREE.DoubleSide}),notices);
  print.position.set(x,y,.028+i%3*.001);print.rotation.z=range(-.10,.10);print.castShadow=false;
  sphere([.008,.008,.005],[x,y+.195,.039],i%2?black:material(0x773f33,.8),notices);
  const tape=box([.11,.033,.001],[x-.06,y+.20,.031],material(0x989a73,.98),notices);tape.rotation.z=range(-.2,.2);
 }
 wallLabel('DESIGN / CRITIQUE',1.1,.10,notices,[-.11,.56,.028],'#77765a','#252d27');
 // A weak remaining task tube reveals the pinboard without lifting the room's darkness.
 box([.94,.065,.13],[-.95,2.78,.11],steel,rear);
 const rearTube=cylinder(.013,.82,[-.95,2.741,.14],new THREE.MeshBasicMaterial({color:0x738b85}),rear,12);rearTube.rotation.z=Math.PI/2;rearTube.castShadow=false;
 const rearTask=new THREE.SpotLight(0x92aaa0,3.4,3.6,1.0,.85,2);rearTask.position.set(-.95,2.72,.36);rearTask.target.position.set(-1.12,1.35,.04);rear.add(rearTask,rearTask.target);
 const rearInsects=createLightInsects({flies:7,moths:3,spread:[.48,.14,.22],seed:71,sizeScale:.50,dive:.22});rearInsects.group.position.set(-.95,2.52,.43);rear.add(rearInsects.group);
 // Old drawers, a box of abandoned prototypes and dangling network leads below the board.
 const filing=new THREE.Group();filing.name='Damaged filing cabinets';filing.position.set(-1.12,0,.26);rear.add(filing);
 box([1.52,.77,.028],[0,.385,-.20],doorPaint,filing);box([1.56,.035,.46],[0,.795,0],steel,filing);
 for(const x of[-.745,0,.745])box([.025,.77,.43],[x,.385,0],doorPaint,filing);
 for(const y of[.018,.385])box([1.52,.025,.43],[0,y,0],steel,filing);
 for(const x of[-.38,.38])for(const y of[.20,.56]){
  if(x<0&&y>.4)continue;
  const pulled=0;box([.71,.32,.025],[x,y,.231+pulled],steel,filing);rod([x-.10,y+.04,.26+pulled],[x+.10,y+.04,.26+pulled],.011,silver,filing);
  box([.16,.055,.004],[x,y-.06,.248+pulled],plastic,filing);
  if(pulled){box([.68,.014,.35],[x,y-.16,.20],steel,filing);box([.012,.28,.34],[x-.34,y,.20],steel,filing);}
 }
 const archiveBox=box([.47,.29,.36],[-1.30,.96,.29],material(0xb09a6d,.99,woodMap),rear);archiveBox.rotation.y=.14;
 wallLabel('ARCHIVE',.25,.075,rear,[-1.30,.97,.483],'#a49471','#3b3d30');
 const folded=box([.50,.014,.19],[-1.30,1.116,.39],wood,rear);folded.rotation.x=.20;
 // Open electrical cabinet, missing covers, cable conduit and a rusted extinguisher bracket.
 const utilities=new THREE.Group();utilities.name='Neglected network and electrical cabinet';utilities.position.set(-2.96,1.60,.08);rear.add(utilities);
 box([.64,.97,.12],[0,0,0],steel,utilities);box([.56,.88,.014],[0,0,.066],black,utilities);
 for(let row=0;row<4;row++)for(let col=0;col<5;col++){box([.072,.09,.035],[-.20+col*.10,.28-row*.16,.09],doorPaint,utilities);box([.017,.035,.010],[-.20+col*.10,.28-row*.16,.113],row===1?plastic:black,utilities);}
 const cabinetDoor=new THREE.Group();cabinetDoor.position.set(-.32,0,.06);cabinetDoor.rotation.y=-.65;utilities.add(cabinetDoor);box([.62,.96,.025],[.31,0,0],steel,cabinetDoor);
 wallLabel('CAUTION',.30,.10,cabinetDoor,[.32,.26,.014],'#a08d52','#252b24');
 for(let i=0;i<4;i++)cable([[-3.12+i*.08,2.10,.12],[-3.15+i*.08,2.50,.12],[-3.15+i*.08,2.88,.12],[-2.1+i*.08,2.88,.12]],.012,steel,rear);
 for(let i=0;i<6;i++)cable([[-3.18+i*.08,1.15,.16],[-3.20+i*.06,.71,.21],[-3.13+i*.10,.32,.17],[-2.85+i*.06,.15,.30]],.005,i%2?black:material(0x59665b,.9),rear);
 box([.20,.13,.022],[2.20,.35,.047],plastic,rear);box([.11,.085,.025],[2.20,.35,.065],black,rear);
 cable([[2.20,.35,.09],[2.24,.12,.13],[2.47,.023,.28],[2.90,.023,.42],[3.10,.023,.30]],.007,black,rear);
 const extinguisher=new THREE.Group();extinguisher.name='Dusty fire extinguisher';extinguisher.position.set(2.16,.25,.17);rear.add(extinguisher);
 const fadedRed=material(0x7e3629,.78,metalMap,.23);cylinder(.095,.42,[0,.25,0],fadedRed,extinguisher,24);sphere([.095,.065,.095],[0,.47,0],fadedRed,extinguisher);sphere([.093,.045,.093],[0,.04,0],fadedRed,extinguisher);
 box([.11,.025,.055],[.015,.56,0],black,extinguisher);rod([0,.51,0],[0,.57,0],.018,silver,extinguisher);cable([[.035,.52,0],[.12,.47,.02],[.13,.19,.06]],.012,black,extinguisher);
 wallLabel('FIRE',.12,.14,extinguisher,[0,.27,.097],'#b4ac8c','#33382d');
 // Ground complete rigid objects after their final rotations and all carpet are known.
 floorProps.push(backDesk,sideDesk,coffee,game,fallenLeg,brokenPlank,laptop,countdown.group,partition,library,filing,extinguisher);
 for(const prop of floorProps)settleOnFloor(prop,floorSupport);
 for(const monitor of[fallen,tipped]){
  const old=monitor.getObjectByName('Monitor power cable');monitor.remove(old);old.geometry.dispose();
  const start=monitor.localToWorld(new THREE.Vector3(.10,.23,-.05)),x=start.x,z=start.z;
  const wire=cable([start.toArray(),[x+.09,Math.max(floorSupport(x+.09,z+.10)+.008,start.y*.45),z+.10],[x+.20,floorSupport(x+.20,z+.20)+.007,z+.20],[x+.38,floorSupport(x+.38,z+.11)+.007,z+.11]],.006,black);
  wire.userData.ignoreFloorContact=true;wire.userData.anchorStart=true;
 }
 for(const wire of floorCables)drapeFloorCable(wire,floorSupport);
 office.add(createFallenMobile(viewerPosition,floorSupport));
 const figpalVats=createFigpalVats();figpalVats.group.userData.ignoreAcid=true;office.add(figpalVats.group);
 const acidLeaks=createTankLeaks({valves:figpalVats.valves,floorSupport});office.add(acidLeaks.group);
 const chargingKit=createChargingKit({filing,laptop:laptopControl,floorSupport,drawerMaterial:steel});office.add(chargingKit.group);
 const ketchupKey=createKetchupKey({bottle:glassBottlePose,contents:glassFilling,cap:glassCap,floorSupport});office.add(ketchupKey.group);
 const rodents=createFloorRodents({room:office,floorSupport});office.add(rodents.group);
 function setEnvironment(map){handsaw.setEnvironment(map);displays.setEnvironment(map);figpalVats.setEnvironment(map);ceilingFixture.setEnvironment(map);}
 function update(time,reducedMotion){ketchupKey.update(time,reducedMotion);rodents.update(time,reducedMotion);figpalVats.update(time,reducedMotion);const level=ceilingFixture.update(time,reducedMotion);ceilingInsects.update(time,reducedMotion,level);rearInsects.update(time,reducedMotion,.65);deskInsects.update(time,reducedMotion,.78);return level;}
 return {group:office,laptop:laptopControl,catMug:mugPose,acidLeaks,chargingKit,ketchupKey,countdown,setDisplayEnvironment:setEnvironment,update,figpalHoists:figpalVats,toggleHoist:figpalVats.toggleHoist};
}
