import * as THREE from './vendor/three.module.js';
import { weatheredMetal } from './industrial-materials.js?v=brighter-liquid';

// Seeded ballast faults: new uneven bursts every cycle, not a repeating metronome.
const eventCache=new Map(),cycleLength=31.7;
function failureEvents(cycle){
 if(eventCache.has(cycle))return eventCache.get(cycle);
 let seed=(0x93ad23+Math.imul(cycle,2654435761))>>>0;
 const random=()=>{seed=(Math.imul(seed,1664525)+1013904223)>>>0;return seed/4294967296;};
 const events=[];let start=.65+random()*1.4;
 while(start<cycleLength-2){
  const count=2+Math.floor(random()*5);
  for(let i=0;i<count;i++){
   const duration=.028+random()*.072;
   events.push([start,duration,random()*.045,random()>.23]);
   start+=duration+.045+random()*.16;
  }
  if(random()<.42){events.push([start,.22+random()*.40,.005,true]);start+=.75;}
  start+=1.3+random()*4.2;
 }
 // Retain only nearby cycles; long-running countdown sessions do not grow the cache.
 if(eventCache.size>4)eventCache.delete(eventCache.keys().next().value);
 eventCache.set(cycle,events);return events;
}
export function fluorescentLevels(time,reducedMotion=false){
 if(reducedMotion)return [.88,.79];
 const cycle=Math.floor(time/cycleLength),t=time-cycle*cycleLength,events=failureEvents(cycle);
 return [0,1].map(index=>{
  let level=index?.79:.88;
  for(let i=0;i<events.length;i++){
   const [base,duration,low,both]=events[i];if(index===1&&!both)continue;
   const start=base+(index?((i%3)-1)*.013:0),end=start+duration;
   if(t>=start&&t<end){
    const edge=Math.min((t-start)/.003,(end-t)/.005,1);
    level=THREE.MathUtils.lerp(level,low,Math.max(0,edge));
   }else if(t>=end&&t<end+.025){level*=1+.16*(1-(t-end)/.025);}
  }
  return level*(.985+.015*Math.sin(time*8.7+index));
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
