import * as THREE from './vendor/three.module.js';

export function createOffice(renderer){
 const office=new THREE.Group();office.name='Abandoned technology office';
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
 function cable(points,r=.008,mat=black,parent=office){const curve=new THREE.CatmullRomCurve3(points.map(p=>new THREE.Vector3(...p)));return mesh(new THREE.TubeGeometry(curve,Math.max(20,points.length*8),r,6,false),mat,parent);}
 function bevelBox(w,h,d,r=.025){r=Math.min(r,w*.45,h*.45);const s=new THREE.Shape();const x=w/2,y=h/2;s.moveTo(-x+r,-y);s.lineTo(x-r,-y);s.quadraticCurveTo(x,-y,x,-y+r);s.lineTo(x,y-r);s.quadraticCurveTo(x,y,x-r,y);s.lineTo(-x+r,y);s.quadraticCurveTo(-x,y,-x,y-r);s.lineTo(-x,-y+r);s.quadraticCurveTo(-x,-y,-x+r,-y);const b=Math.min(.012,w/6,h/6,d/6),g=new THREE.ExtrudeGeometry(s,{depth:d-b*2,bevelEnabled:true,bevelSize:b,bevelThickness:b,bevelSegments:2,steps:1,curveSegments:4});g.translate(0,0,-d/2+b);return g;}
 function rounded(size,pos,mat,parent=office){const m=mesh(bevelBox(...size),mat,parent);m.position.set(...pos);return m;}
 function dirtOverlay(width,height,parent,floor=false){const[c,ctx]=canvas(1024);
  for(let i=0;i<290;i++)cloud(ctx,random()*1024,floor?random()*1024:random()<.6?range(600,1060):random()*1024,range(12,140),'24,30,19',range(.03,.26));
  if(!floor){const g=ctx.createLinearGradient(0,0,0,1024);g.addColorStop(0,'rgba(29,35,24,.4)');g.addColorStop(.3,'rgba(29,35,24,0)');g.addColorStop(.75,'rgba(29,35,24,.07)');g.addColorStop(1,'rgba(23,30,21,.72)');ctx.fillStyle=g;ctx.fillRect(0,0,1024,1024);for(let i=0;i<80;i++){const x=random()*1024,y=random()*220;ctx.strokeStyle=`rgba(62,51,30,${range(.03,.26)})`;ctx.lineWidth=range(1,6);ctx.beginPath();ctx.moveTo(x,y);ctx.lineTo(x+range(-8,8),y+range(80,750));ctx.stroke();}}
  speckle(ctx,1024,17000,'16,25,17',.28);const m=mesh(new THREE.PlaneGeometry(width,height),new THREE.MeshStandardMaterial({map:texture(c),transparent:true,depthWrite:false,roughness:1}),parent);m.castShadow=false;return m;
 }
 // A decayed office shell, rather than bathroom tiles: plaster, wall panels and old carpet.
 box([7.8,.15,8.6],[0,-.085,.2],concrete);
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

 // Modern flat-panel displays with fractured LCDs and a few dying green traces.
 function screenMap(type){const[c,ctx]=canvas();ctx.fillStyle=type==='live'?'#10231b':'#101a16';ctx.fillRect(0,0,512,512);
  const gradient=ctx.createLinearGradient(0,0,512,512);gradient.addColorStop(0,'rgba(101,125,107,.22)');gradient.addColorStop(1,'rgba(3,8,5,.7)');ctx.fillStyle=gradient;ctx.fillRect(0,0,512,512);
  if(type==='live'){for(let row=0;row<24;row++){ctx.fillStyle=`rgba(102,150,91,${range(.2,.65)})`;let x=24;for(let j=0;j<range(5,14);j++){const w=range(5,45);ctx.fillRect(x,25+row*17,w,3);x+=w+7;}}for(let y=0;y<512;y+=4){ctx.fillStyle='rgba(0,0,0,.2)';ctx.fillRect(0,y,512,1);}}
  if(type!=='live'){const hx=range(150,350),hy=range(100,330);for(let i=0;i<15;i++){const a=i/15*Math.PI*2;ctx.strokeStyle=i%2?'rgba(148,166,149,.65)':'rgba(0,0,0,.8)';ctx.lineWidth=range(1,3);ctx.beginPath();ctx.moveTo(hx,hy);for(let j=1;j<7;j++)ctx.lineTo(hx+Math.cos(a)*j*65+range(-20,20),hy+Math.sin(a)*j*65+range(-15,15));ctx.stroke();}if(type==='hole'){ctx.fillStyle='#030705';ctx.beginPath();for(let i=0;i<14;i++){const a=i/14*Math.PI*2,r=range(55,105),x=hx+Math.cos(a)*r,y=hy+Math.sin(a)*r;i?ctx.lineTo(x,y):ctx.moveTo(x,y);}ctx.closePath();ctx.fill();}}
  speckle(ctx,512,5000,'168,173,142',.13);return texture(c);
 }
 const screens={};for(const type of['live','cracked','hole']){const map=screenMap(type);screens[type]=new THREE.MeshStandardMaterial({map,roughness:.28,metalness:.15,emissive:0xffffff,emissiveMap:map,emissiveIntensity:type==='live'?.7:.45});}
 const monitorCase=bevelBox(.77,.45,.035,.012),frontGlass=new THREE.PlaneGeometry(.735,.410);
 const monitorMetal=material(0x6b7474,.38,null,.7);
 function monitor(parent,pos,rotation=0,type='cracked',size=1){const group=new THREE.Group();group.position.set(...pos);group.rotation.y=rotation;group.scale.setScalar(size);parent.add(group);
  group.name='Damaged widescreen monitor';
  const shell=mesh(monitorCase,black,group);shell.position.set(0,.375,0);
  rounded([.31,.018,.20],[0,.013,-.025],monitorMetal,group);box([.055,.24,.025],[0,.14,-.035],monitorMetal,group);
  const face=mesh(frontGlass,screens[type],group);face.position.set(0,.381,.020);face.castShadow=false;
  box([.18,.16,.032],[0,.36,-.03],monitorMetal,group);
  sphere([.004,.004,.003],[.35,.163,.022],type==='live'?new THREE.MeshBasicMaterial({color:0x8cbb60}):black,group);
  for(let i=0;i<11;i++)box([.015,.002,.003],[-.25+i*.05,.585,-.020],steel,group);
  cable([[.10,.23,-.05],[.15,.04,-.08],[.23,-.31,-.18]],.006,black,group);return group;
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
 const sideDesk=desk(-3.37,-.69,2.6,Math.PI/2);
 for(let i=0;i<3;i++){monitor(sideDesk,[-.84+i*.83,.86,-.10],range(-.2,.2),i===0?'live':'hole',.9);keyboard(sideDesk,[-.84+i*.83,.87,.30],range(-.2,.2));}
 // Fallen hardware and open cases are actual objects, not floor decals.
 const fallen=monitor(office,[-2.20,.31,1.24],.42,'hole',.95);fallen.rotation.z=.21;
 const tipped=monitor(office,[-2.72,.24,2.58],-.45,'cracked',.73);tipped.rotation.x=-.56;tipped.rotation.z=.24;
 const looseTower=tower(office,[-2.22,.13,-.72],.35,true);looseTower.rotation.z=Math.PI/2;
 for(let i=0;i<3;i++)tower(office,[-3.32,0,-2.45+i*.31],-.18,true).scale.setScalar(.90);

 function chair(x,z,angle=0,tipped=false){const g=new THREE.Group();g.position.set(x,tipped?.32:0,z);g.rotation.set(tipped?1.03:0,angle,tipped?.34:0);office.add(g);
  cylinder(.04,.43,[0,.24,0],steel,g);rounded([.46,.08,.43],[0,.49,0],fabric,g);const back=rounded([.44,.39,.075],[0,.81,-.18],fabric,g);back.rotation.x=.12;
  for(const xx of[-.19,.19])rod([xx,.48,-.17],[xx,.9,-.20],.014,steel,g);
  for(let i=0;i<5;i++){const a=i/5*Math.PI*2;rod([0,.12,0],[Math.cos(a)*.30,.075,Math.sin(a)*.30],.023,steel,g);sphere([.04,.047,.03],[Math.cos(a)*.30,.05,Math.sin(a)*.30],black,g);}
  for(const side of[-1,1]){rod([side*.24,.49,.10],[side*.24,.69,.10],.013,steel,g);box([.055,.04,.29],[side*.24,.7,-.015],black,g);}return g;
 }
 chair(-2.25,-2.30,.35);chair(-.30,-2.18,-.18);chair(-2.82,.29,-.80,true);chair(.58,-2.94,.65,true);
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

 // A space-gray MacBook Pro on the desk directly in front of the viewer.
 const viewerDesk=desk(.72,2.32,2.05);viewerDesk.scale.y=.76;
 const laptop=new THREE.Group();laptop.name='MacBook Pro on the foreground desk';laptop.position.set(.72,.663,2.18);laptop.rotation.y=.10;office.add(laptop);
 const aluminum=material(0x879194,.35,null,.72),keyBlack=material(0x101517,.70);
 rounded([.88,.026,.59],[0,0,0],aluminum,laptop);
 rounded([.66,.006,.275],[0,.016,-.065],keyBlack,laptop);
 const hinge=cylinder(.018,.77,[0,.014,-.272],black,laptop,20);hinge.rotation.z=Math.PI/2;
 const laptopLid=new THREE.Group();laptopLid.position.set(0,.012,-.274);laptopLid.rotation.x=-.20;laptop.add(laptopLid);
 rounded([.88,.565,.018],[0,.283,0],aluminum,laptopLid);
 rounded([.856,.542,.007],[0,.286,.013],keyBlack,laptopLid);
 const[cDisplay,display]=canvas(1024);cDisplay.height=640;
 display.fillStyle='#111b22';display.fillRect(0,0,1024,640);
 display.fillStyle='#222e36';display.fillRect(0,0,1024,38);display.fillRect(0,38,140,602);display.fillRect(894,38,130,602);
 display.font='13px sans-serif';display.fillStyle='#7e969e';display.fillText('Wireframes / exploration',28,25);
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
 const laptopScreen=mesh(new THREE.PlaneGeometry(.823,.505),displayMat,laptopLid);laptopScreen.position.set(0,.289,.018);laptopScreen.castShadow=false;
 box([.076,.014,.004],[0,.536,.021],keyBlack,laptopLid);sphere([.003,.003,.002],[0,.532,.024],material(0x1e3038,.2),laptopLid);
 const[cLabel,label]=canvas(512);cLabel.height=64;label.font='22px sans-serif';label.textAlign='center';label.fillStyle='#9ca5a6';label.fillText('MacBook Pro',256,40);
 const wordmark=mesh(new THREE.PlaneGeometry(.14,.018),new THREE.MeshBasicMaterial({map:texture(cLabel),transparent:true}),laptopLid);wordmark.position.set(0,.025,.021);wordmark.castShadow=false;
 const[cKeys,kctx]=canvas(1024);kctx.fillStyle='#151b1e';kctx.fillRect(0,0,1024,1024);kctx.strokeStyle='#3e494d';kctx.fillStyle='#9ca5a6';kctx.font='25px sans-serif';kctx.textAlign='center';
 const labels=['1234567890-=','QWERTYUIOP[]','ASDFGHJKL;’','ZXCVBNM,./'];
 for(let row=0;row<4;row++)for(let col=0;col<12;col++){const x=18+col*83,y=74+row*181;kctx.strokeRect(x,y,72,145);kctx.fillText(labels[row][col]||'',x+36,y+86);}
 kctx.strokeRect(250,825,524,125);const keyboardSurface=mesh(new THREE.PlaneGeometry(.635,.257),new THREE.MeshStandardMaterial({map:texture(cKeys),roughness:.7}),laptop);keyboardSurface.rotation.x=-Math.PI/2;keyboardSurface.position.set(0,.021,-.065);
 const trackpad=rounded([.34,.003,.17],[0,.016,.174],material(0x667478,.44,null,.62),laptop);
 const speakerDots=new THREE.InstancedMesh(new THREE.CircleGeometry(.0012,5),black,480);
 for(let i=0;i<480;i++){const o=new THREE.Object3D(),side=i<240?-1:1,j=i%240;o.position.set(side*(.355+(j%8)*.006),.017,-.196+Math.floor(j/8)*.0085);o.rotation.x=-Math.PI/2;o.updateMatrix();speakerDots.setMatrixAt(i,o.matrix);}laptop.add(speakerDots);
 for(const side of[-1,1])for(let i=0;i<3;i++)box([.003,.006,.035],[side*.444,.001,-.18+i*.065],keyBlack,laptop);
 cable([[-.445,.002,-.19],[-.56,.004,-.20],[-.72,-.02,-.06],[-.83,-.29,.21],[-.81,-.62,.40]],.006,black,laptop);
 const screenSpill=new THREE.PointLight(0x8daebe,.60,1.4,2);screenSpill.position.set(.72,1.02,2.13);office.add(screenSpill);

 // Paperwork, circuit boards, cables and broken casing fragments cover the floor.
 function paperMap(){const[c,ctx]=canvas();ctx.fillStyle='#b2af94';ctx.fillRect(0,0,512,512);ctx.fillStyle='#4f584c';for(let i=0;i<35;i++){const y=35+i*12;ctx.fillRect(30,y,range(100,430),range(1,3));}ctx.strokeStyle='rgba(64,54,28,.4)';ctx.lineWidth=4;ctx.beginPath();ctx.arc(345,130,61,0,Math.PI*2);ctx.stroke();speckle(ctx,512,8000,'49,45,27',.16);return texture(c);}
 const paper=material(0xffffff,.99,paperMap()),board=material(0x2b4834,.88),debrisMats=[plastic,steel,wood,material(0x838575,.97)];
 for(let i=0;i<82;i++){
  let x=range(-3.62,3.58),z=range(-3.75,4.0);if(Math.abs(x)<.65&&z<.8&&z>-.9)x-=1.2;
  const sheet=mesh(new THREE.PlaneGeometry(range(.13,.29),range(.17,.37),1,1),paper);sheet.rotation.set(-Math.PI/2+range(-.10,.10),range(-.07,.07),random()*Math.PI*2);sheet.position.set(x,range(.012,.038),z);sheet.material.side=THREE.DoubleSide;
 }
 for(let i=0;i<95;i++){let x=range(-3.65,3.65),z=range(-3.7,4);if(Math.abs(x)<.8&&z>-.8&&z<1.3)x-=1.7;const piece=box([range(.025,.17),range(.015,.065),range(.035,.20)],[x,range(.025,.055),z],debrisMats[i%4]);piece.rotation.set(range(-.13,.13),random()*Math.PI*2,range(-.13,.13));}
 for(let i=0;i<9;i++){const chip=new THREE.Group();chip.position.set(range(-3,3),.028,range(-2,3));chip.rotation.y=random()*6;office.add(chip);box([.18,.012,.24],[0,0,0],board,chip);for(let j=0;j<4;j++)box([.035,.017,.05],[-.055+(j%2)*.10,.013,-.07+Math.floor(j/2)*.12],black,chip);}
 for(let i=0;i<12;i++){const p=box([.09,.018,.09],[range(-3.5,3.5),.03,range(-3.4,3.7)],black);p.rotation.y=random()*6;box([.06,.003,.03],[p.position.x,.041,p.position.z],plastic).rotation.y=p.rotation.y;}
 // A few torn carpet squares and lifted corners break up the concrete floor.
 for(let i=0;i<14;i++){const p=box([range(.3,.7),.012,range(.3,.8)],[range(-3.4,3.4),.007,range(-3.5,3.7)],material(i%2?0xb9bcb0:0xc6c7b6,.98,fabricMap));p.rotation.y=range(-.15,.15);}

 // Product-design whiteboards: screen layouts, mobile flows, notes and erased marker smears.
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
  for(let i=0;i<40;i++)cloud(ctx,random()*1024,random()*1024,range(15,100),'53,62,51',.06);return texture(c);
 }
 for(let i=0;i<2;i++){
  const g=new THREE.Group();g.name='Whiteboard with interface wireframes';g.position.set(i?2.25:.12,2.20,-3.94);g.rotation.z=i?-.025:.012;office.add(g);
  box([1.78,1.12,.04],[0,0,0],silver,g);const map=wireframeMap(!i);
  const face=mesh(new THREE.PlaneGeometry(1.70,1.04),new THREE.MeshStandardMaterial({map,roughness:.75,emissive:0xffffff,emissiveMap:map,emissiveIntensity:.025}),g);face.position.z=.024;
  box([1.70,.023,.09],[0,-.57,.025],silver,g);
  for(let j=0;j<3;j++)rod([-.58+j*.18,-.546,.057],[-.46+j*.18,-.546,.057],.013,j?black:material(0x394e6a,.7),g);
 }

 // Freestanding planning whiteboard with curled sticky notes and old interface sketches.
 const partition=new THREE.Group();partition.name='Planning whiteboard covered in sticky notes';partition.position.set(-2.26,0,-1.20);partition.rotation.y=.08;office.add(partition);
 for(const x of[-1.12,1.12]){
  box([.045,.98,.055],[x,.49,0],steel,partition);box([.11,.06,.65],[x,.06,0],steel,partition);
  for(const z of[-.25,.25])sphere([.047,.045,.032],[x,.035,z],black,partition);
 }
 box([2.68,1.94,.05],[0,1.85,0],silver,partition);
 const[cPlanning,planning]=canvas(1024);planning.fillStyle='#c2c7ba';planning.fillRect(0,0,1024,1024);
 for(let i=0;i<65;i++)cloud(planning,random()*1024,random()*1024,range(15,110),'60,69,55',.065);
 planning.strokeStyle='rgba(38,62,63,.65)';planning.fillStyle='rgba(38,62,63,.65)';planning.lineWidth=3;
 for(let i=0;i<3;i++){
  const x=170+i*245;planning.strokeRect(x,560,190,335);planning.strokeRect(x+12,579,166,28);
  planning.strokeRect(x+12,625,166,102);planning.beginPath();planning.moveTo(x+12,625);planning.lineTo(x+178,727);planning.moveTo(x+178,625);planning.lineTo(x+12,727);planning.stroke();
  for(let j=0;j<4;j++)planning.fillRect(x+15,753+j*19,137-j%2*39,3);planning.strokeRect(x+15,843,160,28);
  if(i<2){planning.beginPath();planning.moveTo(x+198,727);planning.lineTo(x+235,727);planning.lineTo(x+222,717);planning.moveTo(x+235,727);planning.lineTo(x+222,737);planning.stroke();}
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
 for(let row=0;row<3;row++)for(let col=0;col<9;col++){if(row===2&&col===4)continue;sticky(partition,-1.10+col*.273+range(-.018,.018),2.63-row*.28+range(-.014,.014),.040,row*9+col);}
 for(let i=0;i<5;i++)sticky(partition,i<3?-1.10:1.09,1.75-(i%3)*.29,.040,28+i);
 const fallenNote=sticky(office,-1.65,.024,.54,33);fallenNote.rotation.set(-Math.PI/2,0,.6);

 // One crooked overhead light and a small desk lamp provide practical light sources.
 const lamp=new THREE.Group();lamp.position.set(.22,2.98,-.55);lamp.rotation.set(.02,.12,-.075);office.add(lamp);box([1.50,.09,.28],[0,0,0],steel,lamp);
 const glow=new THREE.MeshBasicMaterial({color:0x899479});for(const z of[-.075,.075]){const tube=cylinder(.022,1.34,[0,-.065,z],glow,lamp,16);tube.rotation.z=Math.PI/2;tube.castShadow=false;}
 for(const x of[-.66,.66])rod([x,3.30,-.55],[x,2.98,-.55],.006,black);
 cable([[.85,3.30,-.6],[1.03,2.8,-.65],[1.26,2.86,-.7],[1.30,3.30,-.7]],.007,black);
 const deskLamp=new THREE.Group();deskLamp.position.set(-2.1,.88,-3.20);backDesk.parent.add(deskLamp);cylinder(.11,.035,[0,0,0],black,deskLamp);rod([0,0,0],[.05,.31,0],.016,steel,deskLamp);rod([.05,.31,0],[.22,.40,.02],.013,steel,deskLamp);const shade=mesh(new THREE.ConeGeometry(.12,.13,20,1,true),steel,deskLamp);shade.position.set(.23,.37,.02);sphere([.04,.025,.04],[.23,.32,.02],new THREE.MeshBasicMaterial({color:0xe6c184}),deskLamp);
 const taskLight=new THREE.PointLight(0xe6bd7e,1.2,2.5,2);taskLight.position.set(-1.87,1.19,-3.18);office.add(taskLight);
 return office;
}
