import {ANIMAL_DIGITS} from './mobile-puzzle-state.js';
import {renderQuality as quality} from './render-quality.js';
import {artCanvas} from './texture-budget.js';
import * as THREE from './vendor/three.module.js';
import { settleOnFloor, drapeFloorCable, floorClearance } from './floor-contact.js';

// A discarded four-animal nursery mobile, modeled from the user's cartoon reference.
export function createFallenMobile(viewerPosition,floorSupport=()=>.003,puzzle=null){
 const animals=[],strings=[],shadows=[],digitPainters=[],pieces={};
 const group=new THREE.Group();group.name='Fallen nursery mobile with four soft animals';group.position.set(-1.05,0,.55);
 let seed=48319;const random=()=>{seed=(seed*1664525+1013904223)>>>0;return seed/4294967296;};
 const [canvas,ctx]=artCanvas(512);ctx.fillStyle='#e0d9c7';ctx.fillRect(0,0,512,512);
 for(let i=0;i<7000;i++){const x=random()*512,y=random()*512;ctx.strokeStyle=i%2?'rgba(58,52,36,.12)':'rgba(246,236,212,.28)';ctx.lineWidth=.6;ctx.beginPath();ctx.moveTo(x,y);ctx.lineTo(x+2,y+3);ctx.stroke();}
 for(let i=0;i<6500;i++){const x=random()*512,y=random()*512;ctx.strokeStyle=i%3?'rgba(255,249,227,.32)':'rgba(85,72,54,.13)';ctx.lineWidth=1.2;ctx.beginPath();ctx.ellipse(x,y,1.3,2.2,random()*Math.PI,0,Math.PI*1.7);ctx.stroke();}
 for(let i=0;i<18;i++){const x=random()*512,y=random()*512,r=8+random()*70,g=ctx.createRadialGradient(x,y,0,x,y,r);g.addColorStop(0,'rgba(63,52,31,.15)');g.addColorStop(1,'rgba(63,52,31,0)');ctx.fillStyle=g;ctx.fillRect(x-r,y-r,r*2,r*2);}
 function texture(c){const t=new THREE.CanvasTexture(c);t.colorSpace=THREE.SRGBColorSpace;t.anisotropy=4;return t;}
 const fabricMap=texture(canvas);
 function plush(color,map=fabricMap){return new THREE.MeshPhysicalMaterial({color,map,bumpMap:fabricMap,bumpScale:.0023,roughness:1,sheen:.65,sheenColor:0xbdb9a8,sheenRoughness:.95});}
 const pink=plush(0xd2989e),pinkPale=plush(0xe1b5ac),blue=plush(0x779da9),blueDark=plush(0x506c80),ochre=plush(0xd7a455),cream=plush(0xe6d6a9),brown=plush(0x34302b);
 const foxOrange=plush(0xdc712e),foxIvory=plush(0xf4e6cc),foxBoots=plush(0x483126);
 const thread=new THREE.MeshStandardMaterial({color:0x60574b,roughness:1});
 const cord=new THREE.MeshStandardMaterial({color:0xa09b80,roughness:1});
 const black=new THREE.MeshStandardMaterial({color:0x191b19,roughness:.48});
 const agedIvory=new THREE.MeshStandardMaterial({color:0xc2bca1,map:fabricMap,roughness:.68,bumpMap:fabricMap,bumpScale:.001});
 const metal=new THREE.MeshStandardMaterial({color:0x7c8275,metalness:.65,roughness:.56});
 const [stripeCanvas,stripeCtx]=artCanvas(512);stripeCtx.drawImage(canvas,0,0,512,512);
 stripeCtx.fillStyle='#343027';
 for(let i=0;i<7;i++){const x=i*76-12,y=70+(i%2)*24;stripeCtx.beginPath();stripeCtx.moveTo(x,y);stripeCtx.bezierCurveTo(x+55,105,x+8,180,x+51,268);stripeCtx.lineTo(x+23,238);stripeCtx.bezierCurveTo(x-12,148,x+26,93,x-9,y);stripeCtx.fill();stripeCtx.beginPath();stripeCtx.moveTo(x+25,446);stripeCtx.bezierCurveTo(x+69,417,x+6,367,x+45,285);stripeCtx.lineTo(x+24,314);stripeCtx.bezierCurveTo(x-11,395,x+41,418,x-3,446);stripeCtx.fill();}
 const tigerMat=plush(0xd9a05d,texture(stripeCanvas));
 const sphereGeometry=new THREE.SphereGeometry(1,quality.mobile?12:24,quality.mobile?8:16);
 function mesh(geometry,mat,parent=group){const m=new THREE.Mesh(geometry,mat);m.castShadow=true;m.receiveShadow=true;parent.add(m);return m;}
 function ball(pos,size,mat,parent){const m=mesh(sphereGeometry,mat,parent);m.position.set(...pos);m.scale.set(...size);return m;}
 function line(points,r,mat,parent=group){return mesh(new THREE.TubeGeometry(new THREE.CatmullRomCurve3(points.map(p=>new THREE.Vector3(...p))),Math.max(quality.mobile?12:20,points.length*(quality.mobile?2:6)),r,quality.mobile?4:6,false),mat,parent);}
 function rod(a,b,r,mat,parent=group){const start=new THREE.Vector3(...a),end=new THREE.Vector3(...b),d=end.clone().sub(start);const m=mesh(new THREE.CylinderGeometry(r,r,d.length(),12),mat,parent);m.position.copy(start).add(end).multiplyScalar(.5);m.quaternion.setFromUnitVectors(new THREE.Vector3(0,1,0),d.normalize());return m;}
 function box(size,pos,mat,parent=group){const m=mesh(new THREE.BoxGeometry(...size),mat,parent);m.position.set(...pos);return m;}
 function ear(pos,size,mat,parent){const s=new THREE.Shape();s.moveTo(-.5,0);s.quadraticCurveTo(-.48,.44,0,1);s.quadraticCurveTo(.49,.49,.5,0);s.quadraticCurveTo(0,-.1,-.5,0);const g=new THREE.ExtrudeGeometry(s,{depth:.18,bevelEnabled:true,bevelSize:.06,bevelThickness:.05,bevelSegments:2,curveSegments:8,steps:1});g.translate(0,0,-.09);const m=mesh(g,mat,parent);m.scale.set(...size);m.position.set(...pos);return m;}
 function eyes(parent,z,y=.092,x=.047){for(const side of[-1,1]){ball([side*x,y,z],[.012,.014,.008],black,parent);ball([side*x-.003,y+.005,z-.007],[.0032,.0032,.0018],cream,parent);}}
 // Short curled pile catches the light at the silhouette, without costly fur shells.
 function pile(pos,size,mat,parent,count){
  const vertices=[],normals=[];
  for(let i=0;i<count;i++){
   const a=random()*Math.PI*2,z=random()*2-1,r=Math.sqrt(1-z*z),normal=new THREE.Vector3(r*Math.cos(a),z,r*Math.sin(a));
   const at=new THREE.Vector3(pos[0]+normal.x*size[0],pos[1]+normal.y*size[1],pos[2]+normal.z*size[2]);
   const tangent=new THREE.Vector3(-normal.z,.2,normal.x).normalize(),length=.002+random()*.0035;
   const tip=at.clone().addScaledVector(normal,length).addScaledVector(tangent,length*.4);
   for(const v of[at.clone().addScaledVector(tangent,-.0007),at.clone().addScaledVector(tangent,.0007),tip]){vertices.push(...v);normals.push(...normal);}
  }
  const geometry=new THREE.BufferGeometry();geometry.setAttribute('position',new THREE.Float32BufferAttribute(vertices,3));geometry.setAttribute('normal',new THREE.Float32BufferAttribute(normals,3));
  const fiber=new THREE.MeshStandardMaterial({color:mat.color,roughness:1,side:THREE.DoubleSide});const m=mesh(geometry,fiber,parent);m.name='Soft short plush pile';m.castShadow=false;
 }
 function makeAnimal(kind){
  const g=new THREE.Group();g.name=`${kind} mobile animal`;g.userData.stuffedAnimal=kind;
  const mat=kind==='Pig'?pink:kind==='Elephant'?blue:kind==='Tiger'?tigerMat:foxOrange;
  // Rounded plush haunches retain their tails; underside embroidery supplies the clue.
  const body=ball([0,.065,-.025],[.112,.091,.154],mat,g);body.name='Soft body resting on the floor';pile([0,.065,-.025],[.112,.091,.154],mat,g,quality.mobile?90:360);
  for(const side of[-1,1])ball([side*.047,.073,.080],[.077,.090,.090],mat,g);

  for(const side of[-1,1])for(const z of[-.106,.100]){
   const leg=ball([side*.110,.002,z],[.043,.043,.062],mat,g);leg.rotation.z=side*.28;
   ball([side*.134,-.007,z+.015],kind==='Fox'?[.030,.034,.046]:[.021,.030,.041],kind==='Pig'?brown:kind==='Elephant'?blueDark:kind==='Fox'?foxBoots:pinkPale,g);
   if(kind==='Tiger'||kind==='Fox')for(let j=0;j<3;j++)ball([side*.151,-.012+(j-1)*.014,z+.034],[.004,.004,.006],brown,g);
  }
  // Articulate the whole face together when the torso hangs rear-down.
  const headPose=new THREE.Group();headPose.name=`${kind} head pose`;g.add(headPose);
  const headSize=kind==='Elephant'?[.105,.101,.101]:kind==='Fox'?[.094,.083,.086]:[.098,.091,.090];
  ball([0,.102,-.170],headSize,mat,headPose);
  pile([0,.102,-.170],headSize,mat,headPose,quality.mobile?75:300);
  if(kind==='Pig'){
   ball([0,.080,-.244],[.049,.032,.024],pinkPale,headPose);for(const side of[-1,1])ball([side*.019,.082,-.267],[.006,.009,.003],brown,headPose);
   for(const side of[-1,1]){const e=ear([side*.061,.153,-.177],[.072,.083,.09],pink,headPose);e.rotation.z=-side*.35;}
   const points=[];for(let j=0;j<=45;j++){const t=j/45*Math.PI*3.9,r=.025*(1-j/70);points.push([Math.sin(t)*r,.115+Math.cos(t)*r,.167+j/45*.028]);}line(points,.0065,pinkPale,g);
   eyes(headPose,-.242,.122);
  }else if(kind==='Elephant'){
   for(const side of[-1,1]){ball([side*.098,.098,-.160],[.071,.080,.027],blue,headPose);ball([side*.113,.101,-.184],[.047,.055,.009],blueDark,headPose);}
   line([[0,.099,-.240],[0,.055,-.273],[0,-.006,-.268],[.018,-.031,-.304],[.032,-.006,-.317]],.022,blue,headPose);
   eyes(headPose,-.248,.127,.043);
   line([[0,.122,.150],[.025,.115,.185],[.042,.080,.199]],.006,blueDark,g);ball([.044,.077,.200],[.013,.018,.012],blueDark,g);
  }else if(kind==='Fox'){
   // Tall dark-tipped ears, a tapered ivory muzzle and cheek ruffs distinguish
   // the fox from the round-faced tiger while keeping the sewn plush finish.
   for(const side of[-1,1]){
    const outer=ear([side*.061,.159,-.173],[.085,.119,.13],foxBoots,headPose);outer.rotation.z=-side*.16;outer.name='Fox pointed ear';
    const orange=ear([side*.061,.163,-.183],[.069,.098,.09],foxOrange,headPose);orange.rotation.z=-side*.16;
    const inner=ear([side*.061,.170,-.194],[.041,.067,.045],foxIvory,headPose);inner.rotation.z=-side*.16;
    const ruff=ear([side*.038,.064,-.234],[.067,.074,.15],foxIvory,headPose);ruff.rotation.z=-side*1.04;ruff.name='Fox ivory cheek ruff';
   }
   const profile=[[0,-.012],[.044,0],[.043,.018],[.031,.050],[.017,.078],[0,.088]];
   const muzzleGeometry=new THREE.LatheGeometry(profile.map(p=>new THREE.Vector2(...p)),quality.mobile?16:28);muzzleGeometry.rotateX(-Math.PI/2);
   const muzzle=mesh(muzzleGeometry,foxIvory,headPose);muzzle.position.set(0,.078,-.215);muzzle.scale.y=.77;muzzle.name='Fox tapered muzzle';
   ball([0,.084,-.302],[.014,.010,.011],brown,headPose).name='Fox dark nose';
   eyes(headPose,-.245,.128,.044);
   line([[0,.076,-.307],[0,.062,-.294],[-.016,.059,-.281]],.0017,brown,headPose);
   line([[0,.062,-.294],[.016,.059,-.281]],.0017,brown,headPose);
   // One continuous curved brush, with its pale tip part of the same mesh.
   const path=new THREE.CatmullRomCurve3([[0,.122,.135],[.094,.145,.204],[.183,.153,.174],[.225,.155,.083],[.220,.162,.006]].map(p=>new THREE.Vector3(...p)));
   const segments=quality.mobile?20:32,sides=quality.mobile?10:14,geometry=new THREE.TubeGeometry(path,segments,1,sides,false),positions=geometry.attributes.position,center=new THREE.Vector3(),vertex=new THREE.Vector3();
   for(let i=0;i<=segments;i++){
    const t=i/segments,r=.012*(1-t)+.060*Math.pow(Math.sin(Math.PI*t),.75);path.getPointAt(t,center);
    for(let j=0;j<=sides;j++){const index=i*(sides+1)+j;vertex.fromBufferAttribute(positions,index).sub(center).multiplyScalar(r).add(center);positions.setXYZ(index,...vertex);}
   }
   geometry.computeVertexNormals();const tipStart=Math.floor(segments*.66)*sides*6;
   geometry.clearGroups();geometry.addGroup(0,tipStart,0);geometry.addGroup(tipStart,geometry.index.count-tipStart,1);
   mesh(geometry,[foxOrange,foxIvory],g).name='Fox bushy white-tipped tail';
  }else{
   for(const side of[-1,1]){
    ball([side*.073,.175,-.168],[.034,.036,.022],mat,headPose);ball([side*.073,.177,-.188],[.021,.023,.007],pinkPale,headPose);
   }
   for(const side of[-1,1])ball([side*.025,.076,-.235],[.039,.032,.026],cream,headPose);
   ball([0,.091,-.260],[.015,.011,.011],brown,headPose);eyes(headPose,-.241,.124,.044);
   line([[0,.134,.150],[.035,.162,.193],[.067,.155,.201],[.075,.129,.182]],.012,tigerMat,g);
   ball([.075,.129,.182],[.014,.015,.016],brown,g);
  }
  if(kind!=='Elephant'&&kind!=='Fox')line([[-.020,.060,-.255],[0,.051,-.259],[.020,.060,-.255]],.0017,brown,headPose);
  headPose.position.set(0,.102,-.170);
  for(const part of headPose.children)part.position.sub(headPose.position);
  // Fabric seam on each flank and a small suspension tab on the shoulder.
  for(const side of[-1,1])line([[side*.10,.10,.07],[side*.113,.065,-.02],[side*.094,.092,-.10]],.0015,thread,g);
  const tab=mesh(new THREE.TorusGeometry(.014,.004,6,16,Math.PI*1.75),cord,g);tab.position.set(0,.158,-.065);tab.rotation.x=Math.PI/2;
  return {object:g,tab,body,headPose};
 }
 // Plush rests on its broad body, not on a single projecting paw or trunk.
 // Compress only the underside against the actual concrete/carpet surface.
 function settlePlush(object,body){
  object.updateWorldMatrix(true,true);
  const position=object.getWorldPosition(new THREE.Vector3());position.y-=floorClearance(body,floorSupport)+.006;
  object.parent.worldToLocal(position);object.position.copy(position);object.updateWorldMatrix(true,true);
  const vertex=new THREE.Vector3(),inverse=new THREE.Matrix4();
  object.traverse(part=>{
   if(!part.isMesh)return;
   const geometry=part.geometry.clone(),points=geometry.attributes.position;inverse.copy(part.matrixWorld).invert();let compressed=false;
   for(let i=0;i<points.count;i++){
    vertex.fromBufferAttribute(points,i).applyMatrix4(part.matrixWorld);
    const floor=floorSupport(vertex.x,vertex.z)+.0006;
    if(vertex.y>=floor)continue;
    vertex.y=floor;vertex.applyMatrix4(inverse);points.setXYZ(i,vertex.x,vertex.y,vertex.z);compressed=true;
   }
   if(compressed){points.needsUpdate=true;geometry.computeVertexNormals();geometry.computeBoundingBox();geometry.computeBoundingSphere();part.geometry=geometry;}
   else geometry.dispose();
  });
  object.userData.floorProp=true;
 }
 // Keep the small wooden bars attached to the music-box base as one clear pickup.
 const wood=new THREE.MeshStandardMaterial({color:0x81745a,map:fabricMap,roughness:1});
 const frame=new THREE.Group();frame.name='Attached mobile crossbars and music box base';frame.userData.mobilePiece='mobileFrame';frame.position.set(3.0,0,1.30);frame.rotation.y=-.18;group.add(frame);pieces.mobileFrame=frame;
 for(let i=0;i<2;i++){
  const bar=new THREE.Group();bar.name=`Attached mobile crossbar ${i+1}`;bar.position.y=.050+i*.024;bar.rotation.y=i*Math.PI/2;frame.add(bar);
  rod([-.33,0,0],[.33,0,0],.012,wood,bar).name='Mobile wooden crossbar';
  for(const side of[-1,1]){const cap=mesh(new THREE.SphereGeometry(.014,8,6),wood,bar);cap.position.x=side*.33;}
 }
 const hub=new THREE.Group();hub.name='Attached mobile music box base';frame.add(hub);
 mesh(new THREE.CylinderGeometry(.103,.103,.068,24),agedIvory,hub);
 const seam=mesh(new THREE.TorusGeometry(.103,.002,6,24),thread,hub);seam.rotation.x=Math.PI/2;
 ball([0,.039,0],[.034,.009,.034],ochre,hub);
 for(let j=0;j<5;j++)box([.030,.002,.002],[-.049+j*.019,.035,.041],thread,hub);
 group.updateMatrixWorld(true);settleOnFloor(frame,floorSupport);
 const framePick=mesh(new THREE.BoxGeometry(.82,.18,.82),new THREE.MeshBasicMaterial({transparent:true,opacity:0,colorWrite:false,depthWrite:false}),frame);framePick.position.y=.04;framePick.castShadow=false;
 const placements=[
  {kind:'Pig',x:.46,z:.96,rear:true,yaw:-.12,roll:.08,arm:3},
  {kind:'Tiger',x:-.62,z:.22,rear:true,yaw:.36,roll:-.12,arm:0},
  {kind:'Elephant',x:.75,z:1.40,rear:false,yaw:-.28,roll:-.24,arm:1},
  {kind:'Fox',x:-.85,z:1.85,rear:true,yaw:1.12,roll:.20,arm:2}
 ];
 for(const p of placements){
  const {object,tab,body,headPose}=makeAnimal(p.kind);animals.push({object,kind:p.kind,tab,headPose});const id='mobile'+p.kind;object.userData.mobilePiece=id;pieces[id]=object;object.position.set(p.x,0,p.z);object.scale.setScalar(.88);
  const toward=Math.atan2(viewerPosition.x-(group.position.x+p.x),viewerPosition.z-(group.position.z+p.z));
  object.rotation.set(p.kind==='Pig'?-.06:.03,toward+(p.rear?0:Math.PI)+p.yaw,p.roll,'YXZ');group.add(object);
  group.updateMatrixWorld(true);settlePlush(object,body);group.updateMatrixWorld(true);
  const end=group.worldToLocal(tab.getWorldPosition(new THREE.Vector3()));
  const string=line([[end.x-.15,.014,end.z+.08],[end.x-.10,.012,end.z+.04],[end.x-.05,.012,end.z+.07],end.toArray()],.0021,cord);string.userData.anchorStart=string.userData.anchorEnd=true;string.userData.mobilePiece=id;drapeFloorCable(string,floorSupport);strings.push(string);
  // A close contact shadow conforms to carpet edges instead of hovering above them.
  const shadowCanvas=document.createElement('canvas');shadowCanvas.width=shadowCanvas.height=64;const sc=shadowCanvas.getContext('2d'),fade=sc.createRadialGradient(32,32,5,32,32,32);fade.addColorStop(0,'rgba(0,0,0,.65)');fade.addColorStop(.48,'rgba(0,0,0,.32)');fade.addColorStop(1,'rgba(0,0,0,0)');sc.fillStyle=fade;sc.fillRect(0,0,64,64);
  const bounds=new THREE.Box3().setFromObject(object),size=bounds.getSize(new THREE.Vector3()),center=group.worldToLocal(bounds.getCenter(new THREE.Vector3()));
  const shadowGeometry=new THREE.PlaneGeometry(size.x+.05,size.z+.05,12,12);shadowGeometry.rotateX(-Math.PI/2);shadowGeometry.translate(center.x,0,center.z);
  const points=shadowGeometry.attributes.position;
  for(let i=0;i<points.count;i++)points.setY(i,floorSupport(group.position.x+points.getX(i),group.position.z+points.getZ(i))+.0002);
  shadowGeometry.computeVertexNormals();
  const shadow=mesh(shadowGeometry,new THREE.MeshBasicMaterial({map:new THREE.CanvasTexture(shadowCanvas),transparent:true,depthWrite:false}));shadow.name=`${p.kind} floor contact shadow`;shadow.castShadow=false;shadow.userData.ignoreFloorContact=true;shadows.push(shadow);animals.at(-1).shadow=shadow;animals.at(-1).string=string;
 }
 // Stitch the numbers onto the rounded rear below the tail, not the belly.
 for(const animal of animals){
  const c=document.createElement('canvas');c.width=c.height=256;const p=c.getContext('2d');
  function paintDigit(){const digit=(puzzle?.digits??ANIMAL_DIGITS)[animal.kind];p.clearRect(0,0,256,256);
  p.fillStyle='#777164';p.beginPath();p.ellipse(128,128,109,116,0,0,Math.PI*2);p.fill();
  p.strokeStyle='#c9bea3';p.lineWidth=3;p.setLineDash([5,5]);p.beginPath();p.ellipse(128,128,99,106,0,0,Math.PI*2);p.stroke();
  p.font='bold 174px Georgia';p.textAlign='center';p.textBaseline='middle';p.fillStyle='#e7d9b8';p.fillText(digit,128,139);
  p.strokeStyle='#aaa08b';p.lineWidth=2;p.setLineDash([2,4]);p.strokeText(digit,128,139);
  p.setLineDash([]);p.strokeStyle='#e7d9b8';p.lineWidth=4;p.beginPath();p.moveTo(96,219);p.lineTo(160,219);p.stroke();
  }
  paintDigit();
  const material=new THREE.MeshStandardMaterial({map:texture(c),transparent:true,alphaTest:.15,roughness:1});
  const geometry=new THREE.PlaneGeometry(.100,.082,16,12),positions=geometry.attributes.position;
  for(let i=0;i<positions.count;i++){
   const x=positions.getX(i),y=positions.getY(i)+.055;
   // The cloth follows the haunches and bridges their central crease.
   const haunch=Math.max(...[-1,1].map(side=>.080+.090*Math.sqrt(Math.max(0,1-((x-side*.047)/.077)**2-((y-.073)/.090)**2))));
   const stitchedBridge=.080+.090*Math.sqrt(Math.max(0,1-((y-.073)/.090)**2))-.004;
   positions.setXYZ(i,x,y,Math.max(haunch,stitchedBridge)+.0018);
  }
  geometry.computeVertexNormals();
  const patch=new THREE.Mesh(geometry,material);patch.name=`Stitched ${(puzzle?.digits??ANIMAL_DIGITS)[animal.kind]} under ${animal.kind}`;animal.object.add(patch);animal.patch=patch;
  digitPainters.push(()=>{paintDigit();material.map.needsUpdate=true;patch.name=`Stitched ${(puzzle?.digits??ANIMAL_DIGITS)[animal.kind]} under ${animal.kind}`;});
 }
 for(const animal of animals){const pick=mesh(new THREE.BoxGeometry(.39,.23,.53),new THREE.MeshBasicMaterial({transparent:true,opacity:0,colorWrite:false,depthWrite:false}),animal.object);pick.position.set(0,.08,-.04);pick.castShadow=false;pick.name=animal.kind+' plush pickup target';}
 const tangled=new THREE.Group();tangled.name='Loose mobile cord scraps';tangled.visible=false;group.add(tangled);
 return {group,animals,pieces,strings,shadows,tangled,refreshDigits(){digitPainters.forEach(paint=>paint());}};
}
