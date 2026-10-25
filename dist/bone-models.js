import * as THREE from './vendor/three.module.js';

let boneMaterial;
export function stainedBoneMaterial(){
 if(boneMaterial)return boneMaterial;
 const size=128,color=new Uint8Array(size*size*4),pores=new Uint8Array(size*size*4);
 let seed=8817;const random=()=>{seed=(seed*1664525+1013904223)>>>0;return seed/4294967296;};
 for(let y=0;y<size;y++)for(let x=0;x<size;x++){
  const i=(y*size+x)*4,grain=random();
  const stain=Math.max(0,Math.sin(x*.056+Math.sin(y*.05)*2)*Math.cos(y*.041)-.15);
  const pit=grain>.965?.22:0;
  color[i]=223-stain*67-grain*16-pit*140;
  color[i+1]=219-stain*49-grain*15-pit*130;
  color[i+2]=186-stain*72-grain*17-pit*130;color[i+3]=255;
  pores[i]=pores[i+1]=pores[i+2]=145+grain*24-pit*255;pores[i+3]=255;
 }
 const map=new THREE.DataTexture(color,size,size),bumpMap=new THREE.DataTexture(pores,size,size);
 for(const texture of[map,bumpMap]){texture.wrapS=texture.wrapT=THREE.RepeatWrapping;texture.magFilter=THREE.LinearFilter;texture.minFilter=THREE.LinearMipmapLinearFilter;texture.generateMipmaps=true;texture.needsUpdate=true;}
 map.colorSpace=THREE.SRGBColorSpace;
 // Soft fill makes the ivory readable through several layers of murky glass and water.
 boneMaterial=new THREE.MeshStandardMaterial({map,bumpMap,bumpScale:.0011,color:0xf4efd7,roughness:.72,emissive:0xbfb58c,emissiveIntensity:.28});
 return boneMaterial;
}


const sphereGeometry=new THREE.SphereGeometry(1,20,14);
const cavityMaterial=new THREE.MeshStandardMaterial({color:0x181d0e,roughness:1});
function mesh(geometry,parent,material=stainedBoneMaterial()){
 const object=new THREE.Mesh(geometry,material);object.castShadow=true;object.receiveShadow=true;parent.add(object);return object;
}
function ball(parent,position,scale,material){const object=mesh(sphereGeometry,parent,material);object.position.set(...position);object.scale.set(...scale);return object;}
function tube(parent,points,radius=.012){return mesh(new THREE.TubeGeometry(new THREE.CatmullRomCurve3(points.map(p=>new THREE.Vector3(...p))),32,radius,8,false),parent);}
function rod(parent,a,b,radius=.012){const start=new THREE.Vector3(...a),end=new THREE.Vector3(...b),delta=end.clone().sub(start);const object=mesh(new THREE.CylinderGeometry(radius*.82,radius,delta.length(),10),parent);object.position.copy(start).add(end).multiplyScalar(.5);object.quaternion.setFromUnitVectors(new THREE.Vector3(0,1,0),delta.normalize());return object;}

export function createLongBone(slender=false){
 const object=new THREE.Group();object.name=slender?'Slender forearm bone':'Worn femur';
 const profile=[[0,-.161],[.023,-.16],[.028,-.13],[.019,-.10],[.014,-.04],[.015,.025],[.019,.085],[.028,.122],[.026,.145],[0,.155]];
 const shaft=new THREE.LatheGeometry(profile.map(p=>new THREE.Vector2(p[0]*(slender?.62:1),p[1])),20),positions=shaft.attributes.position;
 for(let i=0;i<positions.count;i++)positions.setX(i,positions.getX(i)+.009*Math.sin((positions.getY(i)+.16)*Math.PI/.315));
 shaft.computeVertexNormals();mesh(shaft,object);
 ball(object,[.022,.140,0],[.043,.038,.039]);
 ball(object,[-.015,-.147,.002],[.028,.030,.034]);ball(object,[.020,-.150,-.002],[.029,.032,.032]);
 if(slender)object.scale.set(.75,1,.80);
 return object;
}
export function createRib(){
 const object=new THREE.Group();object.name='Curved rib fragment';const points=[];
 for(let i=0;i<=20;i++){const angle=-.85+i/20*2.9;points.push([Math.cos(angle)*.123-.018,Math.sin(angle)*.123,.018*Math.sin(angle*1.3)]);}
 tube(object,points);ball(object,points[0],[.017,.015,.018]);return object;
}
export function createJaw(){
 const object=new THREE.Group();object.name='Detached jaw with uneven teeth';
 tube(object,[[-.088,.045,-.035],[-.080,-.025,.035],[-.043,-.050,.071],[0,-.054,.082],[.043,-.050,.071],[.080,-.025,.035],[.088,.045,-.035]],.013);
 for(let i=0;i<8;i++){
  const x=(i-3.5)*.017,z=.078-Math.abs(x)*.30;
  const tooth=mesh(new THREE.BoxGeometry(.013,.020+(i%3)*.002,.013),object);tooth.position.set(x,-.041,z);tooth.rotation.y=-x*3;
 }
 return object;
}
export function createSkull(){
 const object=new THREE.Group();object.name='Goofy buck-toothed skull with wonky eye sockets';
 // A broad domed forehead and unequal hollow sockets give these a comic expression.
 const face=new THREE.Shape();face.moveTo(-.076,-.061);face.quadraticCurveTo(-.133,-.035,-.121,.067);face.bezierCurveTo(-.119,.171,.123,.165,.120,.060);face.quadraticCurveTo(.136,-.029,.077,-.061);face.lineTo(.047,-.071);face.lineTo(-.047,-.073);face.closePath();
 for(const [x,y,rx,ry,tilt]of[[-.052,.019,.039,.043,-.20],[.052,.011,.033,.035,.18]]){const hole=new THREE.Path();hole.absellipse(x,y,rx,ry,0,Math.PI*2,true,tilt);face.holes.push(hole);}
 const nose=new THREE.Path();nose.moveTo(.001,-.026);nose.lineTo(-.012,-.050);nose.quadraticCurveTo(.001,-.045,.013,-.050);nose.closePath();face.holes.push(nose);
 const plate=mesh(new THREE.ExtrudeGeometry(face,{depth:.022,bevelEnabled:true,bevelSize:.004,bevelThickness:.004,bevelSegments:2,steps:1,curveSegments:20}),object);plate.position.z=.043;
 ball(object,[0,.040,-.055],[.120,.121,.077]);
 ball(object,[0,.012,.027],[.109,.093,.010],cavityMaterial);
 for(const side of[-1,1])ball(object,[side*.093,-.042,.047],[.028,.022,.025]);
 // Two oversized crooked front teeth, gaps, and tiny side teeth replace the neat dental row.
 for(const [x,y,w,h,tilt]of[[-.019,-.084,.028,.042,-.11],[.017,-.080,.027,.036,.17],[-.060,-.073,.014,.018,-.28],[.060,-.071,.012,.015,.23]]){
  const tooth=mesh(new THREE.BoxGeometry(w,h,.018),object);tooth.position.set(x,y,.064);tooth.rotation.z=tilt;
 }
 const jaw=new THREE.Group();jaw.name='Lopsided cartoon jaw';jaw.position.set(.004,-.071,-.003);jaw.rotation.z=-.12;object.add(jaw);
 tube(jaw,[[-.087,.040,-.025],[-.083,-.025,.037],[-.047,-.053,.071],[0,-.056,.079],[.051,-.048,.068],[.085,-.022,.033],[.087,.040,-.025]],.014);
 for(const [x,y]of[[-.052,-.040],[.038,-.041],[.057,-.036]]){const tooth=mesh(new THREE.BoxGeometry(.015,.016,.015),jaw);tooth.position.set(x,y,.071);tooth.rotation.z=x*3;}
 tube(object,[[-.009,.154,-.016],[.003,.150,.003],[-.004,.141,.025],[.005,.126,.042]],.0016).material=cavityMaterial;
 return object;
}
export function createSpine(){
 const object=new THREE.Group();object.name='Short articulated spine';
 for(let i=0;i<6;i++){
  const y=(i-2.5)*.038,z=.010*Math.sin(i*.7);
  ball(object,[0,y,z],[.025,.016,.020]);
  for(const side of[-1,1])rod(object,[side*.012,y,z],[side*.045,y-.009,z-.008],.007);
  rod(object,[0,y,z],[0,y+.008,z-.043],.006);
 }
 return object;
}
export function createRibCage(){
 const object=new THREE.Group();object.name='Broken rib cage';object.add(createSpine());
 for(let i=0;i<5;i++)for(const side of[-1,1]){
  if(i===4&&side===1)continue;
  const y=.080-i*.043,width=.080+Math.sin(i/5*Math.PI)*.038;
  tube(object,[[0,y,-.02],[side*width*.65,y+.018,-.045],[side*width,y-.004,.008],[side*width*.82,y-.031,.065],[side*.018,y-.044,.080]],.0085);
 }
 rod(object,[0,.060,.081],[0,-.120,.079],.010);return object;
}

// Different skeletal silhouettes retain each captive's proportions and chain sling.
export function createFigpalSkeleton(index){
 const object=new THREE.Group();object.name=['Pudding Figpal skeleton','Sushi Figpal skeleton','Pufferfish skeleton'][index];
 if(index===2){
  const skull=createSkull();skull.scale.set(1.25,1.35,1.05);skull.position.set(-.16,.035,.055);object.add(skull);
  for(let i=0;i<7;i++){const x=-.05+i*.055;ball(object,[x,0,0],[.028,.021,.020]);if(i<5)for(const side of[-1,1])tube(object,[[x,0,0],[x+.026,side*.09,-.010],[x+.014,side*(.22-i*.023),.015]],.010);}
  for(const y of[-.16,-.08,0,.08,.16])rod(object,[.29,0,0],[.47,y,0],.009);
 }else{
  const skull=createSkull();skull.position.set(0,.14,.035);skull.scale.set(index===0?1.65:1.9,1.40,1.35);object.add(skull);
  const ribs=createRibCage();ribs.position.y=-.15;ribs.scale.set(index===0?1.7:2.1,1,1.45);object.add(ribs);
  for(const side of[-1,1]){const bone=createLongBone(true);bone.scale.multiplyScalar(.48);bone.position.set(side*(index===0?.255:.29),-.14,0);bone.rotation.z=side*.22;object.add(bone);}
 }
 return object;
}
