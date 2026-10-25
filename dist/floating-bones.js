import * as THREE from './vendor/three.module.js';

let boneMaterial;
function stainedBoneMaterial(){
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

// Small stained bones sit inside the liquid volume, behind the water and foggy glass.
// Their paths stay inside the cylinder and below its moving meniscus.
export function createFloatingBones(index){
 const group=new THREE.Group();group.name=`Bones floating in canister ${index+1}`;
 const material=stainedBoneMaterial(),sphere=new THREE.SphereGeometry(1,18,12);
 function mesh(geometry,parent){const object=new THREE.Mesh(geometry,material);object.receiveShadow=true;parent.add(object);return object;}
 function joint(parent,position,scale){const object=mesh(sphere,parent);object.position.set(...position);object.scale.set(...scale);return object;}
 function longBone(){
  const object=new THREE.Group();object.name='Worn long bone';
  const profile=[[0,-.161],[.023,-.16],[.028,-.13],[.019,-.10],[.014,-.04],[.015,.025],[.019,.085],[.028,.122],[.026,.145],[0,.155]];
  const shaft=new THREE.LatheGeometry(profile.map(p=>new THREE.Vector2(...p)),20);
  const positions=shaft.attributes.position;
  for(let i=0;i<positions.count;i++)positions.setX(i,positions.getX(i)+.009*Math.sin((positions.getY(i)+.16)*Math.PI/.315));
  shaft.computeVertexNormals();mesh(shaft,object);
  // Offset ball joint and paired condyles give an anatomical silhouette.
  joint(object,[.022,.140,0],[.043,.038,.039]);
  joint(object,[-.015,-.147,.002],[.028,.030,.034]);
  joint(object,[.020,-.150,-.002],[.029,.032,.032]);
  return object;
 }
 function rib(){
  const object=new THREE.Group();object.name='Curved rib fragment';
  const points=[];
  for(let i=0;i<=20;i++){const angle=-.85+i/20*2.9;points.push(new THREE.Vector3(Math.cos(angle)*.123-.018,Math.sin(angle)*.123,.018*Math.sin(angle*1.3)));}
  mesh(new THREE.TubeGeometry(new THREE.CatmullRomCurve3(points),32,.012,8,false),object);
  joint(object,points[0].toArray(),[.017,.015,.018]);
  joint(object,points.at(-1).toArray(),[.013,.014,.014]);
  return object;
 }
 const placements=[
  {x:-.10,y:.945,z:.18,tilt:1.43,yaw:.35+index*.37,scale:1,kind:'long'},
  {x:.13,y:.65,z:.16,tilt:-.61,yaw:-.50+index*.24,scale:.85,kind:'long'},
  {x:-.13,y:.40,z:.19,tilt:.30,yaw:.3+index*.3,scale:1,kind:'rib'}
 ];
 const bones=placements.map((pose,i)=>{
  const object=pose.kind==='rib'?rib():longBone();object.scale.setScalar(pose.scale);group.add(object);
  return {...pose,object,phase:index*1.91+i*2.3};
 });
 function update(time,reducedMotion=false){
  const t=reducedMotion?0:time;
  for(const bone of bones){
   const phase=bone.phase;
   bone.object.position.set(bone.x+.022*Math.sin(t*.27+phase),bone.y+.014*Math.sin(t*.57+phase),bone.z+.018*Math.cos(t*.23+phase));
   bone.object.rotation.set(.10*Math.sin(t*.19+phase),bone.yaw+.46*Math.sin(t*.17+phase),bone.tilt+.11*Math.sin(t*.31+phase),'YXZ');
  }
 }
 update(0);
 return {group,update};
}
