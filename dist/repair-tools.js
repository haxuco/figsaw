import * as THREE from './vendor/three.module.js';
import {batchStaticScenery} from './static-batching.js';
export function createRepairTools(drawer){
 const objects={},metal=new THREE.MeshStandardMaterial({color:0xa7aaa0,metalness:.82,roughness:.39}),wood=new THREE.MeshStandardMaterial({color:0x775431,roughness:.86}),red=new THREE.MeshStandardMaterial({color:0x732f24,roughness:.7}),dark=new THREE.MeshStandardMaterial({color:0x272c24,roughness:.8});
 function box(p,size,pos,mat){const m=new THREE.Mesh(new THREE.BoxGeometry(...size),mat);m.position.set(...pos);p.add(m);return m;}
 function cyl(p,r,h,pos,mat,n=10){const m=new THREE.Mesh(new THREE.CylinderGeometry(r,r,h,n),mat);m.position.set(...pos);p.add(m);return m;}
 for(const [id,x,z,a]of[['hammer',.025,-.095,-1.2],['screwdriver',.22,.13,1.35],['ratchet',-.09,.135,1.25],['allen',-.25,.13,0]]){
  const g=new THREE.Group();g.name=id==='allen'?'Hex Allen sockets in a worn socket rail':id;g.userData.supplyAction=id;g.position.set(x,-.12,z);g.rotation.set(Math.PI/2,0,a);drawer.add(g);objects[id]=g;
  if(id==='hammer'){box(g,[.012,.21,.012],[0,-.01,0],wood);box(g,[.075,.029,.028],[0,.09,0],metal);const claw=box(g,[.042,.009,.022],[.04,.08,0],metal);claw.rotation.z=-.5;}
  if(id==='screwdriver'){cyl(g,.005,.12,[0,.04,0],metal);box(g,[.010,.020,.003],[0,.108,0],metal);cyl(g,.013,.075,[0,-.06,0],red);for(const x of[-.009,.009])box(g,[.002,.052,.023],[x,-.06,0],dark);}
  if(id==='ratchet'){cyl(g,.008,.17,[0,-.01,0],metal);cyl(g,.013,.06,[0,-.08,0],dark);const head=cyl(g,.021,.015,[0,.08,0],metal);head.rotation.x=Math.PI/2;box(g,[.009,.009,.02],[0,.08,.015],dark);}
  if(id==='allen'){box(g,[.10,.045,.009],[0,0,-.013],dark);for(let j=0;j<4;j++){const x=(j-1.5)*.024;const socket=cyl(g,.009,.024,[x,0,0],metal);socket.rotation.x=Math.PI/2;const hex=cyl(g,.004+j*.0005,.034,[x,0,.025],metal,6);hex.rotation.x=Math.PI/2;}}
  g.traverse(o=>{if(o.isMesh)o.castShadow=o.receiveShadow=true;});batchStaticScenery(g,{minObjects:2,allowInteractiveRoot:true});
  const hit=new THREE.Mesh(new THREE.BoxGeometry(id==='allen'?.12:.09,id==='allen'?.07:.24,.04),new THREE.MeshBasicMaterial({transparent:true,opacity:0,colorWrite:false,depthWrite:false}));g.add(hit);
 }
 return objects;
}
