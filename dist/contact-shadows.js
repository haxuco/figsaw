import * as THREE from './vendor/three.module.js';

// Lightweight contact pools preserve grounded silhouettes without a second scene
// render for every shadow update on phones.
export function createContactShadows(scene,objects,moving){
 const canvas=document.createElement('canvas');canvas.width=canvas.height=64;const ctx=canvas.getContext('2d'),g=ctx.createRadialGradient(32,32,9,32,32,32);
 g.addColorStop(0,'rgba(0,0,0,.66)');g.addColorStop(.65,'rgba(0,0,0,.30)');g.addColorStop(1,'rgba(0,0,0,0)');ctx.fillStyle=g;ctx.fillRect(0,0,64,64);
 const map=new THREE.CanvasTexture(canvas),material=new THREE.MeshBasicMaterial({map,transparent:true,depthWrite:false,polygonOffset:true,polygonOffsetFactor:-1}),geometry=new THREE.PlaneGeometry(1,1);
 const shadows=new THREE.Group();shadows.name='Mobile floor contact shadows';shadows.userData.ignoreAcid=true;scene.add(shadows);
 const box=new THREE.Box3();
 function add(object){object.updateWorldMatrix(true,true);box.setFromObject(object);const size=box.getSize(new THREE.Vector3()),center=box.getCenter(new THREE.Vector3());const shadow=new THREE.Mesh(geometry,material);shadow.rotation.x=-Math.PI/2;shadow.position.set(center.x,.017,center.z);shadow.scale.set(Math.max(.12,size.x*1.15),Math.max(.12,size.z*1.15),1);shadow.raycast=()=>{};shadows.add(shadow);return shadow;}
 for(const object of objects)add(object);
 const traveling=add(moving);
 return {update(){moving.getWorldPosition(traveling.position);traveling.position.y=.017;}};
}
