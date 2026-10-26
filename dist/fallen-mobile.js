import {ANIMAL_DIGITS} from './mobile-puzzle-state.js';
import * as THREE from './vendor/three.module.js';
import { settleOnFloor, drapeFloorCable, floorClearance } from './floor-contact.js';

// A discarded four-animal nursery mobile, modeled from the user's cartoon reference.
export function createFallenMobile(viewerPosition,floorSupport=()=>.003){
 const animals=[],strings=[],shadows=[];
 const group=new THREE.Group();group.name='Fallen nursery mobile with four soft animals';group.userData.mobilePuzzle=true;group.position.set(-1.05,0,.55);
 let seed=48319;const random=()=>{seed=(seed*1664525+1013904223)>>>0;return seed/4294967296;};
 const canvas=document.createElement('canvas');canvas.width=canvas.height=512;const ctx=canvas.getContext('2d');ctx.fillStyle='#c6c1ac';ctx.fillRect(0,0,512,512);
 for(let i=0;i<7000;i++){const x=random()*512,y=random()*512;ctx.strokeStyle=i%2?'rgba(58,52,36,.12)':'rgba(246,236,212,.28)';ctx.lineWidth=.6;ctx.beginPath();ctx.moveTo(x,y);ctx.lineTo(x+2,y+3);ctx.stroke();}
 for(let i=0;i<45;i++){const x=random()*512,y=random()*512,r=8+random()*70,g=ctx.createRadialGradient(x,y,0,x,y,r);g.addColorStop(0,'rgba(63,52,31,.15)');g.addColorStop(1,'rgba(63,52,31,0)');ctx.fillStyle=g;ctx.fillRect(x-r,y-r,r*2,r*2);}
 function texture(c){const t=new THREE.CanvasTexture(c);t.colorSpace=THREE.SRGBColorSpace;t.anisotropy=4;return t;}
 const fabricMap=texture(canvas);
 function plush(color,map=fabricMap){return new THREE.MeshPhysicalMaterial({color,map,bumpMap:fabricMap,bumpScale:.0012,roughness:.96,sheen:.32,sheenColor:0xbdb9a8,sheenRoughness:.95});}
 const pink=plush(0xd2989e),pinkPale=plush(0xe1b5ac),blue=plush(0x779da9),blueDark=plush(0x506c80),ochre=plush(0xd7a455),cream=plush(0xe6d6a9),brown=plush(0x34302b);
 const thread=new THREE.MeshStandardMaterial({color:0x60574b,roughness:1});
 const cord=new THREE.MeshStandardMaterial({color:0xa09b80,roughness:1});
 const black=new THREE.MeshStandardMaterial({color:0x191b19,roughness:.48});
 const agedIvory=new THREE.MeshStandardMaterial({color:0xc2bca1,map:fabricMap,roughness:.68,bumpMap:fabricMap,bumpScale:.001});
 const metal=new THREE.MeshStandardMaterial({color:0x7c8275,metalness:.65,roughness:.56});
 const stripeCanvas=document.createElement('canvas');stripeCanvas.width=stripeCanvas.height=512;const stripeCtx=stripeCanvas.getContext('2d');stripeCtx.drawImage(canvas,0,0);
 stripeCtx.fillStyle='#343027';
 for(let i=0;i<12;i++){const x=i*45-15,y=(i%2)*30;stripeCtx.beginPath();stripeCtx.moveTo(x,y);stripeCtx.bezierCurveTo(x+55,105,x+8,180,x+51,268);stripeCtx.lineTo(x+23,238);stripeCtx.bezierCurveTo(x-12,148,x+26,93,x-9,y);stripeCtx.fill();stripeCtx.beginPath();stripeCtx.moveTo(x+25,512);stripeCtx.bezierCurveTo(x+69,417,x+6,367,x+45,285);stripeCtx.lineTo(x+24,314);stripeCtx.bezierCurveTo(x-11,395,x+41,438,x-3,512);stripeCtx.fill();}
 const tigerMat=plush(0xd9a05d,texture(stripeCanvas));
 const sphereGeometry=new THREE.SphereGeometry(1,24,16);
 function mesh(geometry,mat,parent=group){const m=new THREE.Mesh(geometry,mat);m.castShadow=true;m.receiveShadow=true;parent.add(m);return m;}
 function ball(pos,size,mat,parent){const m=mesh(sphereGeometry,mat,parent);m.position.set(...pos);m.scale.set(...size);return m;}
 function line(points,r,mat,parent=group){return mesh(new THREE.TubeGeometry(new THREE.CatmullRomCurve3(points.map(p=>new THREE.Vector3(...p))),Math.max(20,points.length*6),r,6,false),mat,parent);}
 function rod(a,b,r,mat,parent=group){const start=new THREE.Vector3(...a),end=new THREE.Vector3(...b),d=end.clone().sub(start);const m=mesh(new THREE.CylinderGeometry(r,r,d.length(),12),mat,parent);m.position.copy(start).add(end).multiplyScalar(.5);m.quaternion.setFromUnitVectors(new THREE.Vector3(0,1,0),d.normalize());return m;}
 function box(size,pos,mat,parent=group){const m=mesh(new THREE.BoxGeometry(...size),mat,parent);m.position.set(...pos);return m;}
 function ear(pos,size,mat,parent){const s=new THREE.Shape();s.moveTo(-.5,0);s.quadraticCurveTo(-.48,.44,0,1);s.quadraticCurveTo(.49,.49,.5,0);s.quadraticCurveTo(0,-.1,-.5,0);const g=new THREE.ExtrudeGeometry(s,{depth:.18,bevelEnabled:true,bevelSize:.06,bevelThickness:.05,bevelSegments:2,curveSegments:8,steps:1});g.translate(0,0,-.09);const m=mesh(g,mat,parent);m.scale.set(...size);m.position.set(...pos);return m;}
 function eyes(parent,z,y=.092,x=.047){for(const side of[-1,1])ball([side*x,y,z],[.009,.012,.007],black,parent);}
 function makeAnimal(kind){
  const g=new THREE.Group();g.name=`${kind} mobile animal`;g.userData.stuffedAnimal=kind;
  const mat=kind==='Pig'?pink:kind==='Elephant'?blue:kind==='Tiger'?tigerMat:ochre;
  // Rounded plush haunches retain their tails; underside embroidery supplies the clue.
  const body=ball([0,.065,-.025],[.112,.091,.154],mat,g);body.name='Soft body resting on the floor';
  for(const side of[-1,1])ball([side*.047,.073,.080],[.077,.090,.090],mat,g);

  for(const side of[-1,1])for(const z of[-.106,.100]){
   const leg=ball([side*.110,.002,z],[.043,.043,.062],mat,g);leg.rotation.z=side*.28;
   ball([side*.134,-.007,z+.015],[.021,.030,.041],kind==='Pig'?brown:kind==='Elephant'?blueDark:pinkPale,g);
   if(kind==='Tiger'||kind==='Fox')for(let j=0;j<3;j++)ball([side*.151,-.012+(j-1)*.014,z+.034],[.004,.004,.006],brown,g);
  }
  const head=ball([0,.102,-.170],kind==='Elephant'?[.097,.094,.094]:[.090,.083,.083],mat,g);
  if(kind==='Pig'){
   ball([0,.080,-.244],[.049,.032,.024],pinkPale,g);for(const side of[-1,1])ball([side*.019,.082,-.267],[.006,.009,.003],brown,g);
   for(const side of[-1,1]){const e=ear([side*.061,.153,-.177],[.072,.083,.09],pink,g);e.rotation.z=-side*.35;}
   const points=[];for(let j=0;j<=45;j++){const t=j/45*Math.PI*3.9,r=.025*(1-j/70);points.push([Math.sin(t)*r,.115+Math.cos(t)*r,.167+j/45*.028]);}line(points,.0065,pinkPale,g);
   eyes(g,-.242,.122);
  }else if(kind==='Elephant'){
   for(const side of[-1,1]){ball([side*.098,.098,-.160],[.071,.080,.027],blue,g);ball([side*.113,.101,-.184],[.047,.055,.009],blueDark,g);}
   line([[0,.099,-.240],[0,.055,-.273],[0,-.006,-.268],[.018,-.031,-.304],[.032,-.006,-.317]],.022,blue,g);
   eyes(g,-.248,.127,.043);
   line([[0,.122,.150],[.025,.115,.185],[.042,.080,.199]],.006,blueDark,g);ball([.044,.077,.200],[.013,.018,.012],blueDark,g);
  }else{
   for(const side of[-1,1]){const e=ear([side*.057,.155,-.172],[.067,.071,.10],mat,g);e.rotation.z=-side*.26;ear([side*.057,.162,-.184],[.038,.045,.055],pinkPale,g);}
   for(const side of[-1,1])ball([side*.025,.076,-.235],[.035,.027,.023],cream,g);
   ball([0,.091,-.260],[.015,.011,.011],brown,g);eyes(g,-.241,.124,.044);
   if(kind==='Tiger'){
    line([[0,.134,.150],[.035,.162,.193],[.067,.155,.201],[.075,.129,.182]],.012,tigerMat,g);
    ball([.075,.129,.182],[.014,.015,.016],brown,g);
   }else{
    const tail=ball([.042,.130,.191],[.058,.061,.131],ochre,g);tail.rotation.x=-.45;tail.rotation.z=-.25;
    const tip=ball([.039,.182,.271],[.045,.046,.061],cream,g);tip.rotation.x=-.45;
   }
  }
  // Fabric seam on each flank and a small suspension tab on the shoulder.
  for(const side of[-1,1])line([[side*.10,.10,.07],[side*.113,.065,-.02],[side*.094,.092,-.10]],.0015,thread,g);
  const tab=mesh(new THREE.TorusGeometry(.014,.004,6,16,Math.PI*1.75),cord,g);tab.position.set(0,.158,-.065);tab.rotation.x=Math.PI/2;
  return {object:g,tab,body};
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
 // The support has toppled as one piece; the clamp, bent arch and music box lie low.
 const stand=new THREE.Group();stand.name='Toppled mobile support';group.add(stand);
 box([.16,.055,.12],[-.60,.0305,.48],agedIvory,stand);
 box([.12,.028,.10],[-.60,.0765,.48],agedIvory,stand);
 rod([-.60,.0565,.48],[-.60,.1425,.48],.012,metal,stand);
 ball([-.60,.1455,.48],[.043,.012,.020],agedIvory,stand);
 line([[-.59,.039,.44],[-.63,.017,.10],[-.48,.017,-.30],[-.20,.020,-.47],[.12,.019,-.39],[.19,.017,-.13],[.04,.052,0]],.013,agedIvory,stand);
 settleOnFloor(stand,floorSupport);
 const hub=new THREE.Group();hub.name='Scuffed mobile music box';hub.position.set(0,.116,0);hub.rotation.set(.21,0,-.18);group.add(hub);
 const drum=mesh(new THREE.CylinderGeometry(.103,.103,.068,40),agedIvory,hub);
 const seam=mesh(new THREE.TorusGeometry(.103,.002,6,40),thread,hub);seam.rotation.x=Math.PI/2;
 const button=ball([0,.039,0],[.034,.009,.034],ochre,hub);
 for(let j=0;j<5;j++)box([.030,.002,.002],[-.049+j*.019,.035,.041],thread,hub);
 rod([0,-.02,-.093],[0,-.02,-.145],.005,metal,hub);ball([0,-.02,-.150],[.026,.012,.005],metal,hub);
 group.updateMatrixWorld(true);settleOnFloor(hub,floorSupport);
 const ends=[[-.37,.068,.035],[.34,.103,-.025],[.018,.058,-.33],[-.025,.075,.34]];
 for(const end of ends){end[1]=floorSupport(group.position.x+end[0],group.position.z+end[2])+.0076;rod([0,hub.position.y,0],end,.007,metal);}
 for(const p of ends){const ring=mesh(new THREE.TorusGeometry(.014,.003,6,16),metal);ring.rotation.x=Math.PI/2;ring.position.set(p[0],p[1]-.004,p[2]);}
 const placements=[
  {kind:'Pig',x:.29,z:.35,rear:true,yaw:-.12,roll:.08,arm:3},
  {kind:'Tiger',x:-.38,z:.17,rear:true,yaw:.36,roll:-.12,arm:0},
  {kind:'Elephant',x:.34,z:-.29,rear:false,yaw:-.28,roll:-.24,arm:1},
  {kind:'Fox',x:-.27,z:-.43,rear:true,yaw:1.12,roll:.20,arm:2}
 ];
 for(const p of placements){
  const {object,tab,body}=makeAnimal(p.kind);animals.push({object,kind:p.kind,tab});object.position.set(p.x,0,p.z);object.scale.setScalar(.88);
  const toward=Math.atan2(viewerPosition.x-(group.position.x+p.x),viewerPosition.z-(group.position.z+p.z));
  object.rotation.set(p.kind==='Pig'?-.06:.03,toward+(p.rear?0:Math.PI)+p.yaw,p.roll,'YXZ');group.add(object);
  group.updateMatrixWorld(true);settlePlush(object,body);group.updateMatrixWorld(true);
  const end=group.worldToLocal(tab.getWorldPosition(new THREE.Vector3())),start=ends[p.arm];
  const string=line([start,[start[0]+.06,.024,start[2]+.08],[(start[0]+end.x)/2-.05,.023,(start[2]+end.z)/2+.08],[end.x-.04,.025,end.z+.035],end.toArray()],.0021,cord);string.userData.anchorStart=string.userData.anchorEnd=true;drapeFloorCable(string,floorSupport);strings.push(string);
  // A close contact shadow conforms to carpet edges instead of hovering above them.
  const shadowCanvas=document.createElement('canvas');shadowCanvas.width=shadowCanvas.height=64;const sc=shadowCanvas.getContext('2d'),fade=sc.createRadialGradient(32,32,5,32,32,32);fade.addColorStop(0,'rgba(0,0,0,.65)');fade.addColorStop(.48,'rgba(0,0,0,.32)');fade.addColorStop(1,'rgba(0,0,0,0)');sc.fillStyle=fade;sc.fillRect(0,0,64,64);
  const bounds=new THREE.Box3().setFromObject(object),size=bounds.getSize(new THREE.Vector3()),center=group.worldToLocal(bounds.getCenter(new THREE.Vector3()));
  const shadowGeometry=new THREE.PlaneGeometry(size.x+.05,size.z+.05,12,12);shadowGeometry.rotateX(-Math.PI/2);shadowGeometry.translate(center.x,0,center.z);
  const points=shadowGeometry.attributes.position;
  for(let i=0;i<points.count;i++)points.setY(i,floorSupport(group.position.x+points.getX(i),group.position.z+points.getZ(i))+.0002);
  shadowGeometry.computeVertexNormals();
  const shadow=mesh(shadowGeometry,new THREE.MeshBasicMaterial({map:new THREE.CanvasTexture(shadowCanvas),transparent:true,depthWrite:false}));shadow.name=`${p.kind} floor contact shadow`;shadow.castShadow=false;shadow.userData.ignoreFloorContact=true;shadows.push(shadow);
 }
 // Small cloth number patches face down, concealed from the ordinary overhead view.
 for(const animal of animals){
  const c=document.createElement('canvas');c.width=c.height=256;const p=c.getContext('2d');
  p.fillStyle='#777164';p.beginPath();p.ellipse(128,128,109,116,0,0,Math.PI*2);p.fill();
  p.strokeStyle='#c9bea3';p.lineWidth=3;p.setLineDash([5,5]);p.beginPath();p.ellipse(128,128,99,106,0,0,Math.PI*2);p.stroke();
  p.font='bold 174px Georgia';p.textAlign='center';p.textBaseline='middle';p.fillStyle='#e7d9b8';p.fillText(ANIMAL_DIGITS[animal.kind],128,139);
  p.strokeStyle='#aaa08b';p.lineWidth=2;p.setLineDash([2,4]);p.strokeText(ANIMAL_DIGITS[animal.kind],128,139);
  const material=new THREE.MeshStandardMaterial({map:texture(c),transparent:true,alphaTest:.15,roughness:1});
  const patch=new THREE.Mesh(new THREE.PlaneGeometry(.127,.139),material);patch.name=`Stitched ${ANIMAL_DIGITS[animal.kind]} under ${animal.kind}`;patch.position.set(0,-.032,-.005);patch.rotation.x=Math.PI/2;animal.object.add(patch);
 }
 const tangled=new THREE.Group();tangled.name='Knotted and crossed mobile cords';group.add(tangled);
 for(let j=0;j<7;j++){
  const points=[];for(let i=0;i<=28;i++){const a=i/28*Math.PI*2.5+j*.77,r=.14+.11*Math.sin(a*2+j);const x=Math.cos(a)*r,z=Math.sin(a)*r;points.push([x,floorSupport(group.position.x+x,group.position.z+z)+.013+j*.0015,z]);}
  line(points,.0023,cord,tangled);
 }
 return {group,animals,strings,shadows,tangled};
}
