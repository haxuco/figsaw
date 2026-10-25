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
 function bevelBox(w,h,d,r=.025){const s=new THREE.Shape();const x=w/2,y=h/2;s.moveTo(-x+r,-y);s.lineTo(x-r,-y);s.quadraticCurveTo(x,-y,x,-y+r);s.lineTo(x,y-r);s.quadraticCurveTo(x,y,x-r,y);s.lineTo(-x+r,y);s.quadraticCurveTo(-x,y,-x,y-r);s.lineTo(-x,-y+r);s.quadraticCurveTo(-x,-y,-x+r,-y);const b=Math.min(.012,d/6),g=new THREE.ExtrudeGeometry(s,{depth:d-b*2,bevelEnabled:true,bevelSize:b,bevelThickness:b,bevelSegments:2,steps:1,curveSegments:4});g.translate(0,0,-d/2+b);return g;}
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
 const outside=mesh(new THREE.PlaneGeometry(2.8,1.6),new THREE.MeshBasicMaterial({map:texture(cSky)}),windowGroup);outside.position.z=-.13;outside.castShadow=false;
 for(const x of[-1.43,0,1.43])box([.055,1.7,.09],[x,0,.025],steel,windowGroup);
 for(const y of[-.83,.83])box([2.92,.055,.09],[0,y,.025],steel,windowGroup);
 const glass=material(0x9db8aa,.25,null,.25);glass.transparent=true;glass.opacity=.18;glass.side=THREE.DoubleSide;
 for(const x of[-.72,.72]){const pane=box([1.37,1.55,.008],[x,0,.04],glass,windowGroup);pane.castShadow=false;}
 for(let i=0;i<17;i++){if([5,9,14].includes(i))continue;const slat=box([2.77,.047,.015],[0,.73-i*.086,.11],material(0x7c8372,.82,plasticMap),windowGroup);slat.rotation.x=.35;if(i===7||i===12){slat.rotation.z=i===7?.035:-.05;slat.rotation.x=.9;}}
 for(const x of[-.86,.86])cable([[x,.80,.15],[x,.12,.16],[x,-.77,.15]],.005,black,windowGroup);
 cable([[1.35,.83,.12],[1.4,-.7,.14],[1.32,-1.10,.18]],.006,black,windowGroup);

 // CRT glass: deep dark screens, spiderweb fractures, and a few dying green traces.
 function screenMap(type){const[c,ctx]=canvas();ctx.fillStyle=type==='live'?'#10231b':'#101a16';ctx.fillRect(0,0,512,512);
  const gradient=ctx.createLinearGradient(0,0,512,512);gradient.addColorStop(0,'rgba(101,125,107,.22)');gradient.addColorStop(1,'rgba(3,8,5,.7)');ctx.fillStyle=gradient;ctx.fillRect(0,0,512,512);
  if(type==='live'){for(let row=0;row<24;row++){ctx.fillStyle=`rgba(102,150,91,${range(.2,.65)})`;let x=24;for(let j=0;j<range(5,14);j++){const w=range(5,45);ctx.fillRect(x,25+row*17,w,3);x+=w+7;}}for(let y=0;y<512;y+=4){ctx.fillStyle='rgba(0,0,0,.2)';ctx.fillRect(0,y,512,1);}}
  if(type!=='live'){const hx=range(150,350),hy=range(100,330);for(let i=0;i<15;i++){const a=i/15*Math.PI*2;ctx.strokeStyle=i%2?'rgba(148,166,149,.65)':'rgba(0,0,0,.8)';ctx.lineWidth=range(1,3);ctx.beginPath();ctx.moveTo(hx,hy);for(let j=1;j<7;j++)ctx.lineTo(hx+Math.cos(a)*j*65+range(-20,20),hy+Math.sin(a)*j*65+range(-15,15));ctx.stroke();}if(type==='hole'){ctx.fillStyle='#030705';ctx.beginPath();for(let i=0;i<14;i++){const a=i/14*Math.PI*2,r=range(55,105),x=hx+Math.cos(a)*r,y=hy+Math.sin(a)*r;i?ctx.lineTo(x,y):ctx.moveTo(x,y);}ctx.closePath();ctx.fill();}}
  speckle(ctx,512,5000,'168,173,142',.13);return texture(c);
 }
 const screens={};for(const type of['live','cracked','hole']){const map=screenMap(type);screens[type]=new THREE.MeshStandardMaterial({map,roughness:.28,metalness:.15,emissive:0xffffff,emissiveMap:map,emissiveIntensity:type==='live'?.7:.45});}
 const monitorCase=bevelBox(.66,.51,.43,.045),frontGlass=new THREE.PlaneGeometry(.50,.36,12,10);
 const gPos=frontGlass.attributes.position;for(let i=0;i<gPos.count;i++){const x=gPos.getX(i),y=gPos.getY(i);gPos.setZ(i,.022*(1-(x/.25)**2)*(1-(y/.18)**2));}frontGlass.computeVertexNormals();
 function monitor(parent,pos,rotation=0,type='cracked',size=1){const group=new THREE.Group();group.position.set(...pos);group.rotation.y=rotation;group.scale.setScalar(size);parent.add(group);
  const shell=mesh(monitorCase,plastic,group);shell.position.set(0,.35,-.08);box([.54,.045,.36],[0,.065,-.08],plastic,group);box([.10,.07,.10],[0,.11,-.08],steel,group);
  box([.55,.39,.018],[0,.36,.143],black,group);const face=mesh(frontGlass,screens[type],group);face.position.set(0,.37,.157);
  for(let i=0;i<9;i++)box([.035,.004,.003],[-.22+i*.041,.13,.145],steel,group);
  sphere([.011,.011,.006],[.25,.135,.151],type==='live'?new THREE.MeshBasicMaterial({color:0x8cbb60}):black,group);
  for(let i=0;i<7;i++)box([.004,.025,.18],[.337,.25+i*.031,-.09],black,group);
  cable([[.12,.15,-.29],[.22,-.05,-.35],[.28,-.34,-.28]],.009,black,group);return group;
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

 // Worn foosball table, one short leg, missing players and slightly bent rods.
 const game=new THREE.Group();game.name='Damaged foosball table';game.position.set(2.24,0,.03);game.rotation.y=-.18;office.add(game);
 const tableWood=material(0xd2c3a2,.87,woodMap),field=material(0x7b9874,.92,fabricMap);
 box([1.18,.25,1.91],[0,.91,0],tableWood,game);box([1.04,.025,1.74],[0,1.048,0],field,game);
 for(const x of[-.61,.61])box([.10,.18,2.02],[x,1.12,0],tableWood,game);
 for(const z of[-.99,.99]){box([1.14,.18,.08],[0,1.12,z],tableWood,game);box([.30,.12,.012],[0,1.09,z+(z>0?-.045:.045)],black,game);}
 for(const x of[-.47,.47])for(const z of[-.80,.80]){const leg=box([.11,z>.0&&x>.0?.67:.80,.12],[x,z>.0&&x>.0?.39:.40,z],steel,game);if(x>.0&&z>.0)leg.rotation.z=.06;}
 box([.14,.10,.20],[.47,.05,.80],wood,game);
 const markings=[];function line(a,b){markings.push(...a,...b);}
 for(const z of[-.80,.80])line([-.48,1.065,z],[.48,1.065,z]);for(const x of[-.48,.48])line([x,1.065,-.80],[x,1.065,.80]);line([-.48,1.065,0],[.48,1.065,0]);
 for(let i=0;i<48;i++){const a=i/48*Math.PI*2,b=(i+1)/48*Math.PI*2;line([Math.cos(a)*.19,1.065,Math.sin(a)*.19],[Math.cos(b)*.19,1.065,Math.sin(b)*.19]);}
 const lines=new THREE.BufferGeometry();lines.setAttribute('position',new THREE.Float32BufferAttribute(markings,3));game.add(new THREE.LineSegments(lines,new THREE.LineBasicMaterial({color:0x939e7e})));
 const players=[material(0x8b3930,.8),material(0xa2a18a,.8)];
 for(let row=0;row<8;row++){const z=-.78+row*.223,side=row%2?1:-1;rod([-.91,1.21,z],[.91,1.21,z+(row===5?.055:0)],.012,silver,game);rod([side*.80,1.21,z],[side*1.02,1.21,z],.034,black,game);
  const count=row===0||row===7?1:row===1||row===6?2:3;
  for(let j=0;j<count;j++){if(row===3&&j===0||row===6&&j===1)continue;const x=(j-(count-1)/2)*.29;box([.055,.10,.037],[x,1.195,z],players[row%2],game);sphere([.031,.035,.031],[x,1.28,z],players[row%2],game);box([.06,.045,.045],[x,1.11,z],players[row%2],game);}
 }
 sphere([.024,.024,.024],[.32,1.09,.49],plastic,game);
 for(const z of[-1.07,1.07]){rod([-.32,1.27,z],[.32,1.27,z],.008,silver,game);for(let i=0;i<5;i++)sphere([.025,.03,.025],[-.25+i*.07,1.27,z],players[z>0?1:0],game);}

 // A dead laptop in the foreground and a stack of obsolete equipment.
 const laptop=new THREE.Group();laptop.position.set(.91,.035,1.90);laptop.rotation.y=-.42;office.add(laptop);rounded([.48,.035,.34],[0,0,0],steel,laptop);
 const laptopLid=new THREE.Group();laptopLid.position.set(0,.015,-.16);laptopLid.rotation.x=-.18;laptop.add(laptopLid);rounded([.48,.31,.025],[0,.155,0],black,laptopLid);const laptopGlass=mesh(new THREE.PlaneGeometry(.43,.25),screens.hole,laptopLid);laptopGlass.position.set(0,.16,.017);
 for(let row=0;row<3;row++)for(let col=0;col<10;col++)box([.030,.005,.027],[-.18+col*.04,.023,-.10+row*.04],black,laptop);
 box([.12,.003,.06],[0,.023,.10],black,laptop);

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

 // A stained whiteboard and a corkboard keep the room recognizably an office.
 box([1.28,.83,.035],[1.35,2.0,-3.945],steel);
 const[cBoard,bctx]=canvas();bctx.fillStyle='#a5aa96';bctx.fillRect(0,0,512,512);bctx.strokeStyle='rgba(32,54,37,.38)';bctx.lineWidth=3;for(let i=0;i<8;i++){bctx.strokeRect(35+(i%4)*120,55+Math.floor(i/4)*230,84,86);bctx.beginPath();bctx.moveTo(77+(i%4)*120,140+Math.floor(i/4)*230);bctx.lineTo(77+(i%4)*120,230+Math.floor(i/4)*230);bctx.stroke();}for(let i=0;i<35;i++)cloud(bctx,random()*512,random()*512,range(10,75),'36,44,28',.08);
 const whiteboard=mesh(new THREE.PlaneGeometry(1.19,.74),material(0xffffff,.6,texture(cBoard)));whiteboard.position.set(1.35,2,-3.921);
 box([.70,.88,.04],[-3.87,1.90,1.8],wood).rotation.y=Math.PI/2;
 for(let i=0;i<5;i++){const page=mesh(new THREE.PlaneGeometry(.15,.21),paper);page.position.set(-3.837,1.67+(i%3)*.19,1.64+Math.floor(i/3)*.24);page.rotation.set(0,Math.PI/2,range(-.2,.2));}

 // One crooked overhead light and a small desk lamp provide practical light sources.
 const lamp=new THREE.Group();lamp.position.set(.22,2.98,-.55);lamp.rotation.set(.02,.12,-.075);office.add(lamp);box([1.50,.09,.28],[0,0,0],steel,lamp);
 const glow=new THREE.MeshBasicMaterial({color:0xd0dfb7});for(const z of[-.075,.075]){const tube=cylinder(.022,1.34,[0,-.065,z],glow,lamp,16);tube.rotation.z=Math.PI/2;tube.castShadow=false;}
 for(const x of[-.66,.66])rod([x,3.30,-.55],[x,2.98,-.55],.006,black);
 cable([[.85,3.30,-.6],[1.03,2.8,-.65],[1.26,2.86,-.7],[1.30,3.30,-.7]],.007,black);
 const deskLamp=new THREE.Group();deskLamp.position.set(-2.1,.88,-3.20);backDesk.parent.add(deskLamp);cylinder(.11,.035,[0,0,0],black,deskLamp);rod([0,0,0],[.05,.31,0],.016,steel,deskLamp);rod([.05,.31,0],[.22,.40,.02],.013,steel,deskLamp);const shade=mesh(new THREE.ConeGeometry(.12,.13,20,1,true),steel,deskLamp);shade.position.set(.23,.37,.02);sphere([.04,.025,.04],[.23,.32,.02],new THREE.MeshBasicMaterial({color:0xe6c184}),deskLamp);
 const taskLight=new THREE.PointLight(0xe6bd7e,1.2,2.5,2);taskLight.position.set(-1.87,1.19,-3.18);office.add(taskLight);
 return office;
}
