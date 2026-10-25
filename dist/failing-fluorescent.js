import * as THREE from './vendor/three.module.js';
import { weatheredMetal } from './industrial-materials.js?v=brighter-liquid';

// Hard ballast cutouts and abrupt restarts, in short irregular clusters.
// Each tube has a small independent delay, with long steady stretches between failures.
const failureEvents=[
 [3.70,.15,.015],[4.22,.22,0],[4.96,.34,.025],
 [10.20,.94,0],[11.62,.16,.02],[12.25,.28,.04],
 [19.40,.18,0],[20.03,.25,.025],[21.05,.68,0],[25.10,.24,.06]
];
export function fluorescentLevels(time,reducedMotion=false){
 if(reducedMotion)return [.88,.79];
 return [0,1].map(index=>{
  const t=((time+index*.055)%27.8+27.8)%27.8;
  let level=index?.79:.88;
  for(let i=0;i<failureEvents.length;i++){
   const [start,duration,low]=failureEvents[i];if(index===1&&i===4)continue;
   if(t>=start&&t<start+duration){
    const edge=Math.min((t-start)/.008,(start+duration-t)/.014,1);
    level=THREE.MathUtils.lerp(level,low,Math.max(0,edge));
   }else if(t>=start+duration&&t<start+duration+.075){
    // A brief striking surge, then an immediate return to the normal output.
    level*=1+.12*(1-(t-start-duration)/.075);
   }
  }
  return level*(.98+.02*Math.sin(time*1.7+index));
 });
}
export function createFailingFluorescent(){
 const group=new THREE.Group();group.name='Crooked failing fluorescent fixture';group.position.set(.22,2.98,-.55);group.rotation.set(.02,.12,-.075);
 const metal=weatheredMetal(0x93998a),enamel=weatheredMetal(0xe5e1c9),soot=new THREE.MeshStandardMaterial({color:0x242821,roughness:.9}),ceramic=new THREE.MeshStandardMaterial({color:0xaaa58a,roughness:.72});
 function mesh(geometry,mat,pos=[0,0,0]){const m=new THREE.Mesh(geometry,mat);m.position.set(...pos);m.castShadow=true;m.receiveShadow=true;group.add(m);return m;}
 const box=(size,pos,mat=metal)=>mesh(new THREE.BoxGeometry(...size),mat,pos);
 function cylinder(r,h,pos,mat=metal){const m=mesh(new THREE.CylinderGeometry(r,r,h,16),mat,pos);return m;}
 function wire(points,mat=soot,r=.004){return mesh(new THREE.TubeGeometry(new THREE.CatmullRomCurve3(points.map(p=>new THREE.Vector3(...p))),24,r,5,false),mat);}
 box([1.53,.055,.32],[0,.012,0],enamel);
 // Bent reflector wings, corroded seams, exposed ballast and missing diffuser.
 for(const side of[-1,1]){const rail=box([1.53,.080,.016],[0,-.033,side*.157],enamel);rail.rotation.x=side*.25;box([1.46,.006,.012],[0,-.017,side*.121],soot);}
 box([.38,.045,.085],[.12,.055,0],soot);
 for(const x of[-.69,.69]){box([.065,.05,.275],[x,-.02,0],metal);for(const z of[-.132,.132]){const screw=cylinder(.012,.012,[x,-.051,z]);box([.016,.002,.003],[x,-.058,z],soot);screw.rotation.z=.05;}}
 const tubeMaterials=[];
 for(const [i,z] of[-.078,.078].entries()){
  const c=document.createElement('canvas');c.width=512;c.height=64;const ctx=c.getContext('2d');const gradient=ctx.createLinearGradient(0,0,512,0);gradient.addColorStop(0,'#29271f');gradient.addColorStop(.035,'#5a5948');gradient.addColorStop(.09,'#b4b9a0');gradient.addColorStop(.19,'#d9dfc4');gradient.addColorStop(.77,'#d0d8bd');gradient.addColorStop(.93,'#92977e');gradient.addColorStop(.98,'#383c32');gradient.addColorStop(1,'#272b22');ctx.fillStyle=gradient;ctx.fillRect(0,0,512,64);
  for(let j=0;j<170;j++){const x=(j*73.29)%512,y=(j*23.87)%64;ctx.fillStyle='rgba(35,36,24,.12)';ctx.fillRect(x,y,1+(j%5),1);}
  const map=new THREE.CanvasTexture(c);map.colorSpace=THREE.SRGBColorSpace;
  // Cylinder UV v follows its axis; rotate the texture so the burn marks sit at its ends.
  map.center.set(.5,.5);map.rotation=Math.PI/2;
  const mat=new THREE.MeshStandardMaterial({map,emissiveMap:map,emissive:0xe4edcc,emissiveIntensity:2,roughness:.27});tubeMaterials.push(mat);
  const tube=cylinder(.019,1.34,[0,-.073,z],mat);tube.rotation.z=Math.PI/2;tube.castShadow=false;
  for(const side of[-1,1]){
   const cap=cylinder(.021,.035,[side*.657,-.073,z],metal);cap.rotation.z=Math.PI/2;
   box([.037,.075,.056],[side*.704,-.045,z],ceramic);
   for(const dz of[-.007,.007]){const pin=cylinder(.0025,.024,[side*.684,-.073,z+dz],metal);pin.rotation.z=Math.PI/2;}
  }
  wire([[-.73,.03,z],[-.77,-.01,z],[-.72,-.04,z+.025]],i?soot:new THREE.MeshStandardMaterial({color:0x6b4935,roughness:.8}));
 }
 const starter=cylinder(.015,.034,[.54,-.035,0],ceramic);starter.rotation.x=.08;
 // Loose cover clip hangs below one end, and a twisted lead exits the housing.
 wire([[.57,-.02,.15],[.59,-.15,.17],[.68,-.13,.18],[.68,-.035,.15]],metal,.004);
 wire([[.72,.04,0],[.82,.09,.03],[.89,.19,.04],[1.02,.31,.03]],soot,.006);
 const bounce=new THREE.PointLight(0xb1bb97,.25,1.2,2);bounce.position.set(0,.1,0);group.add(bounce);
 function update(time,reducedMotion){const levels=fluorescentLevels(time,reducedMotion);tubeMaterials.forEach((m,i)=>m.emissiveIntensity=levels[i]*2.9);bounce.intensity=(levels[0]+levels[1])*.20;return (levels[0]+levels[1])/1.67;}
 function setEnvironment(map){for(const mat of[metal,enamel]){mat.envMap=map;mat.needsUpdate=true;}}
 update(0,false);return {group,update,setEnvironment};
}
