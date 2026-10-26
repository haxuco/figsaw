import * as THREE from './vendor/three.module.js';

export const KETCHUP_MOUTH_Y=.478;

export function createKetchupClosure(){
 const cap=new THREE.Group();cap.name='Smooth white metal twist-off ketchup lid';cap.position.y=.482;
 const neck=new THREE.Group();neck.name='Open glass bottle mouth';
 const enamel=new THREE.MeshStandardMaterial({color:0xe5e6df,roughness:.32,metalness:.32});
 const metal=new THREE.MeshStandardMaterial({color:0xa4aaa4,roughness:.28,metalness:.85});
 const glass=new THREE.MeshPhysicalMaterial({color:0xb3b9a2,roughness:.14,transparent:true,opacity:.58,depthWrite:false,clearcoat:1,clearcoatRoughness:.08,side:THREE.DoubleSide});
 const inside=new THREE.MeshStandardMaterial({color:0x363222,roughness:.36,side:THREE.BackSide});
 function lathe(profile,material,parent){const mesh=new THREE.Mesh(new THREE.LatheGeometry(profile.map(p=>new THREE.Vector2(...p)),40),material);mesh.castShadow=true;mesh.receiveShadow=true;parent.add(mesh);return mesh;}
 // A continuous rolled skirt and gently domed enamel top. No grip ridges.
 lathe([[.033,-.015],[.0355,-.016],[.037,-.013],[.037,.0095],[.036,.013],[.032,.016],[.018,.017],[0,.0175]],enamel,cap);
 // All metal belongs to the removable lid, including its lower rolled hem.
 lathe([[0,.013],[.030,.013],[.033,.010],[.0325,-.012],[.033,-.015]],metal,cap);
 const hem=new THREE.Mesh(new THREE.TorusGeometry(.0348,.0012,6,40),metal);hem.rotation.x=Math.PI/2;hem.position.y=-.0147;cap.add(hem);
 // Fold the lip inward to form a real hole, instead of closing a lathe at r=0.
 lathe([[.029,.440],[.030,.447],[.031,.450],[.030,.461],[.030,.469],[.032,.472],[.031,.476],[.027,.478],[.024,.476],[.024,.442]],glass,neck);
 const throat=new THREE.Mesh(new THREE.CylinderGeometry(.0238,.024,.038,40,1,true),inside);throat.position.y=.454;neck.add(throat);
 // Two shallow glass thread starts beneath the rolled mouth.
 for(const phase of[0,Math.PI]){
  const points=Array.from({length:25},(_,i)=>{const a=phase+i/24*Math.PI*1.65;return new THREE.Vector3(Math.sin(a)*.0306,.450+i/24*.013,Math.cos(a)*.0306);});
  const thread=new THREE.Mesh(new THREE.TubeGeometry(new THREE.CatmullRomCurve3(points),24,.00115,5,false),glass);neck.add(thread);
 }
 return {cap,neck,setEnvironment(map){for(const material of[enamel,metal,glass]){material.envMap=map;material.envMapIntensity=.8;material.needsUpdate=true;}}};
}
