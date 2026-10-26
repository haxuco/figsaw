import * as THREE from './vendor/three.module.js';

export const KETCHUP_MOUTH_Y=.478;

export function createKetchupClosure(){
 const cap=new THREE.Group();cap.name='Smooth white metal twist-off ketchup lid';cap.position.y=.482;
 const neck=new THREE.Group();neck.name='Open glass bottle mouth';
 const enamel=new THREE.MeshStandardMaterial({color:0xe5e6df,roughness:.32,metalness:.32});
 const metal=new THREE.MeshStandardMaterial({color:0xa4aaa4,roughness:.28,metalness:.85});
 const glass=new THREE.MeshPhysicalMaterial({color:0xe9f1e5,metalness:0,roughness:.08,transparent:true,opacity:.22,depthWrite:false,clearcoat:1,clearcoatRoughness:.05,side:THREE.DoubleSide});
 function lathe(profile,material,parent){const mesh=new THREE.Mesh(new THREE.LatheGeometry(profile.map(p=>new THREE.Vector2(...p)),40),material);mesh.castShadow=true;mesh.receiveShadow=true;parent.add(mesh);return mesh;}
 // A continuous rolled skirt and gently domed enamel top. No grip ridges.
 lathe([[.033,-.015],[.0355,-.016],[.037,-.013],[.037,.0095],[.036,.013],[.032,.016],[.018,.017],[0,.0175]],enamel,cap);
 // All metal belongs to the removable lid, including its lower rolled hem.
 lathe([[0,.013],[.030,.013],[.033,.010],[.0325,-.012],[.033,-.015]],metal,cap);
 const hem=new THREE.Mesh(new THREE.TorusGeometry(.0348,.0012,6,40),metal);hem.rotation.x=Math.PI/2;hem.position.y=-.0147;cap.add(hem);
 // A smooth, thin glass wall folds over the rounded lip into the open throat.
 // No opaque inner sleeve or raised rings remain when the metal lid is removed.
 const mouth=lathe([[.029,.440],[.0295,.447],[.0295,.469],[.0305,.473],[.030,.476],[.027,.478],[.0245,.476],[.024,.472],[.024,.440]],glass,neck);
 mouth.name='Translucent glass lip and open inner neck';mouth.castShadow=false;mouth.receiveShadow=false;
 return {cap,neck,setEnvironment(map){for(const material of[enamel,metal,glass]){material.envMap=map;material.envMapIntensity=material===glass?.35:.8;material.needsUpdate=true;}}};
}
