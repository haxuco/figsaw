import * as THREE from './vendor/three.module.js';
import {batchStaticScenery} from './static-batching.js';
export function createRepairTools(drawer){
 const metal=new THREE.MeshStandardMaterial({color:0xa7aaa0,metalness:.82,roughness:.39}),dark=new THREE.MeshStandardMaterial({color:0x272c24,roughness:.8});
 const ratchet=new THREE.Group();ratchet.name='Ratchet wrench';ratchet.userData.supplyAction='ratchet';ratchet.position.set(-.09,-.12,.135);ratchet.rotation.set(Math.PI/2,0,1.25);drawer.add(ratchet);
 function cylinder(r,h,pos,mat){const m=new THREE.Mesh(new THREE.CylinderGeometry(r,r,h,10),mat);m.position.set(...pos);ratchet.add(m);return m;}
 cylinder(.008,.17,[0,-.01,0],metal);cylinder(.013,.06,[0,-.08,0],dark);
 const head=cylinder(.021,.015,[0,.08,0],metal);head.rotation.x=Math.PI/2;
 const drive=new THREE.Mesh(new THREE.BoxGeometry(.009,.009,.02),dark);drive.position.set(0,.08,.015);ratchet.add(drive);
 ratchet.traverse(o=>{if(o.isMesh)o.castShadow=o.receiveShadow=true;});batchStaticScenery(ratchet,{minObjects:2,allowInteractiveRoot:true});
 const hit=new THREE.Mesh(new THREE.BoxGeometry(.09,.24,.04),new THREE.MeshBasicMaterial({transparent:true,opacity:0,colorWrite:false,depthWrite:false}));ratchet.add(hit);
 return {ratchet};
}
