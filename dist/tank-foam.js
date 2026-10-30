import * as THREE from './vendor/three.module.js';

// One draw per tank, with the same separate drifting surface bubbles.
export function createTankFoam(material,{mobile=false,random=Math.random}={}){
 const data=Array.from({length:mobile?6:24},(_,j)=>{
  const angle=random()*Math.PI*2,radius=j<18?.40+random()*.025:random()*.34;
  return {x:Math.cos(angle)*radius,z:Math.sin(angle)*radius,radius:.006+random()*.016,phase:random()*Math.PI*2};
 });
 const mesh=new THREE.InstancedMesh(new THREE.SphereGeometry(1,mobile?12:24,mobile?8:16),material,data.length);
 mesh.name='Tank surface foam';mesh.renderOrder=5;mesh.receiveShadow=true;mesh.frustumCulled=false;
 mesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage);
 const pose=new THREE.Object3D();
 function update(time,level,wet=true){
  mesh.visible=wet;if(!wet)return;
  for(let i=0;i<data.length;i++){
   const bubble=data[i],pulse=(Math.sin(time*2.4+bubble.phase)+1)*.5;
   pose.position.set(bubble.x,level,bubble.z);pose.scale.set(bubble.radius,bubble.radius*(.12+pulse*.28),bubble.radius);
   pose.updateMatrix();mesh.setMatrixAt(i,pose.matrix);
  }
  mesh.instanceMatrix.needsUpdate=true;
 }
 update(0,1.074);
 return {mesh,update};
}
