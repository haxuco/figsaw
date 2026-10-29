import * as THREE from './vendor/three.module.js';

// One instanced link mesh per chain keeps the metal loops inexpensive on phones.
export function createRescueChain({chairs,state,floorSupport}){
 const group=new THREE.Group();group.name='Spare chain and linked chair frames';group.userData.ignoreAcid=true;
 const material=new THREE.MeshStandardMaterial({color:0x92988e,metalness:.82,roughness:.33});
 const geometry=new THREE.TorusGeometry(.022,.006,5,10);geometry.scale(1,1.5,1);
 const dummy=new THREE.Object3D(),a=new THREE.Vector3(),b=new THREE.Vector3(),tangent=new THREE.Vector3(),up=new THREE.Vector3(0,1,0);
 const coil=new THREE.Group();coil.name='Spare metal chain on the floor';coil.userData.spareChain=true;
 coil.position.set(.70,floorSupport(.70,3.55)+.012,3.55);group.add(coil);
 const loose=new THREE.InstancedMesh(geometry,material,56);loose.castShadow=true;coil.add(loose);
 for(let i=0;i<56;i++){
  const angle=i*.38,r=.14+.0012*i;
  dummy.position.set(Math.cos(angle)*r,.008+(i%2)*.007,Math.sin(angle)*r*.72);
  dummy.rotation.set(Math.PI/2,0,angle);dummy.rotateY(i%2?Math.PI/2:0);dummy.updateMatrix();loose.setMatrixAt(i,dummy.matrix);
 }
 const pick=new THREE.Mesh(new THREE.BoxGeometry(.46,.15,.36),new THREE.MeshBasicMaterial({transparent:true,opacity:0,colorWrite:false,depthWrite:false}));pick.position.y=.04;coil.add(pick);
 const links=new THREE.InstancedMesh(geometry,material,340);links.name='Metal chain linking the three chairs';links.instanceMatrix.setUsage(THREE.DynamicDrawUsage);links.frustumCulled=false;links.castShadow=true;links.raycast=()=>{};links.count=0;group.add(links);
 const collars=chairs.map(chair=>{
  const collar=new THREE.Mesh(new THREE.TorusGeometry(.067,.008,5,14),material);collar.rotation.x=Math.PI/2;collar.position.y=.28;collar.visible=false;collar.raycast=()=>{};chair.add(collar);return collar;
 });
 let collected=false,lastPose='';
 function update(){
  const pose=state.links.join()+chairs.map(c=>[...c.position,...c.quaternion].join(',')).join(';');
  if(pose===lastPose)return;lastPose=pose;
  let count=0;collars.forEach((o,i)=>o.visible=state.links[i]);
  const order=[2,...[0,1].sort((i,j)=>chairs[j].position.z-chairs[i].position.z)];
  // Keep each attached length visible even before the final clasp is secured.
  const attached=order.filter(i=>state.links[i]);
  for(let s=1;s<attached.length;s++){
   chairs[attached[s-1]].localToWorld(a.set(0,.28,0));chairs[attached[s]].localToWorld(b.set(0,.28,0));group.worldToLocal(a);group.worldToLocal(b);
   const distance=a.distanceTo(b),n=Math.min(169,Math.max(3,Math.ceil(distance/.052)));
   tangent.subVectors(b,a).normalize();
   for(let j=0;j<n;j++){
    const u=j/(n-1);dummy.position.lerpVectors(a,b,u);dummy.position.y-=Math.sin(Math.PI*u)*Math.min(.16,distance*.06);
    dummy.quaternion.setFromUnitVectors(up,tangent);dummy.rotateY(j%2?Math.PI/2:0);dummy.scale.set(1,Math.max(1,distance/(n*.052)),1);dummy.updateMatrix();links.setMatrixAt(count++,dummy.matrix);
   }
  }
  links.count=count;links.instanceMatrix.needsUpdate=true;
 }
 function reset(){collected=false;coil.visible=true;lastPose='';update();}
 return {group,coil,update,reset,collect(inventory){if(collected||!inventory.add('chain'))return false;collected=true;coil.visible=false;return true;},
  capture:()=>collected,restore(value){collected=!!value;coil.visible=!collected;update();}};
}
