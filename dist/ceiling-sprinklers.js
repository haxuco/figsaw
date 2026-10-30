import * as THREE from './vendor/three.module.js';
import {batchStaticScenery} from './static-batching.js';
import {renderQuality} from './render-quality.js';

export function createCeilingSprinklers({floorSupport,pipeMaterial}){
 const group=new THREE.Group();group.name='Ceiling sprinkler pipework and automatic spray';group.userData.ignoreAcid=true;
 const waterGeometry=new THREE.PlaneGeometry(8.2,8.8,24,24);waterGeometry.rotateX(-Math.PI/2);waterGeometry.translate(0,0,.2);
 const waterPositions=waterGeometry.attributes.position;
 for(let i=0;i<waterPositions.count;i++)waterPositions.setY(i,floorSupport(waterPositions.getX(i),waterPositions.getZ(i))+.004);
 waterGeometry.computeVertexNormals();
 const waterMaterial=new THREE.MeshPhysicalMaterial({color:0x829297,roughness:.17,metalness:.05,clearcoat:1,clearcoatRoughness:.10,transparent:true,opacity:0,depthWrite:false,envMapIntensity:1.2});
 const waterTime={value:0};
 waterMaterial.onBeforeCompile=shader=>{
  shader.uniforms.wetFloorTime=waterTime;
  shader.vertexShader='varying vec3 vStandingWater;\n'+shader.vertexShader;
  shader.vertexShader=shader.vertexShader.replace('#include <worldpos_vertex>','#include <worldpos_vertex>\nvStandingWater=(modelMatrix*vec4(transformed,1.0)).xyz;');
  shader.fragmentShader='varying vec3 vStandingWater;uniform float wetFloorTime;\n'+shader.fragmentShader;
  shader.fragmentShader=shader.fragmentShader.replace('#include <normal_fragment_begin>',`#include <normal_fragment_begin>
   float rippleX=.028*sin(vStandingWater.x*19.0+vStandingWater.z*11.0-wetFloorTime*1.3);
   float rippleZ=.025*cos(vStandingWater.z*23.0-vStandingWater.x*9.0+wetFloorTime*1.1);
   normal=normalize(normal+mat3(viewMatrix)*vec3(rippleX,0.0,rippleZ));`);
 };
 const standingWater=new THREE.Mesh(waterGeometry,waterMaterial);standingWater.name='Standing sprinkler water across the office floor';standingWater.visible=false;standingWater.renderOrder=2;standingWater.raycast=()=>{};standingWater.receiveShadow=true;group.add(standingWater);
 let wetAt=null,wetness=0,acid=false;
 const hardware=new THREE.Group();group.add(hardware);
 const iron=pipeMaterial.clone();iron.color.setHex(0x897767);iron.roughness=.87;iron.emissive.setHex(0x17130f);iron.emissiveIntensity=.18;
 const brass=new THREE.MeshStandardMaterial({color:0x927653,metalness:.72,roughness:.58,emissive:0x33251a,emissiveIntensity:.16});
 const bulb=new THREE.MeshStandardMaterial({color:0x701b15,roughness:.3,metalness:.25});
 const heads=[[-1.9,2.96,-1.4],[1.6,2.96,-1.4],[-1.9,2.96,2.2],[1.6,2.96,2.2]];
 const axis=new THREE.Vector3(0,1,0),a=new THREE.Vector3(),b=new THREE.Vector3();
 function cylinder(radius,height,pos,mat=iron,sides=12){const m=new THREE.Mesh(new THREE.CylinderGeometry(radius,radius,height,sides),mat);m.position.set(...pos);m.castShadow=true;hardware.add(m);return m;}
 function pipe(start,end,r=.024,mat=iron){a.set(...start);b.set(...end);const delta=b.clone().sub(a),m=cylinder(r,delta.length(),a.clone().add(b).multiplyScalar(.5).toArray(),mat);m.quaternion.setFromUnitVectors(axis,delta.normalize());return m;}
 pipe([1.6,3.075,-3.97],[1.6,3.075,3.8]);
 pipe([1.6,3.075,-3.97],[1.6,2.48,-3.97]);
 for(const z of[-1.4,2.2]){
  pipe([-2.2,3.075,z],[1.6,3.075,z]);
  for(const x of[-1.9,1.6]){
   cylinder(.039,.045,[x,3.075,z]);cylinder(.018,.09,[x,3.00,z],brass);
   const collar=cylinder(.083,.014,[x,3.102,z],iron,24);collar.receiveShadow=true;
   cylinder(.030,.024,[x,2.948,z],brass,6);
   for(const side of[-1,1]){pipe([x+side*.024,2.94,z],[x+side*.032,2.89,z],.005,brass);pipe([x+side*.032,2.89,z],[x,2.87,z],.005,brass);}
   cylinder(.007,.048,[x,2.913,z],bulb,8);
   cylinder(.038,.006,[x,2.865,z],brass,16);
   for(let i=0;i<10;i++){const angle=i/10*Math.PI*2;pipe([x+Math.cos(angle)*.025,2.864,z+Math.sin(angle)*.025],[x+Math.cos(angle)*.049,2.859,z+Math.sin(angle)*.049],.003,brass);}
  }
 }
 // Real pipe clamps tie the branches to the ceiling grid.
 for(const z of[-2.9,.4,3.4]){cylinder(.033,.020,[1.6,3.08,z]);pipe([1.6,3.08,z],[1.6,3.15,z],.009);}
 batchStaticScenery(hardware);
 const count=renderQuality.mobile?480:960,positions=new Float32Array(count*6),geo=new THREE.BufferGeometry();geo.setAttribute('position',new THREE.BufferAttribute(positions,3).setUsage(THREE.DynamicDrawUsage));
 const material=new THREE.LineBasicMaterial({color:0xc0d4dc,transparent:true,opacity:.64,depthWrite:false});
 const spray=new THREE.LineSegments(geo,material);spray.name='Sprinkler droplets falling from ceiling deflectors';spray.frustumCulled=false;spray.visible=false;spray.raycast=()=>{};group.add(spray);
 const mistGeometry=new THREE.RingGeometry(.8,1,20);mistGeometry.rotateX(-Math.PI/2);
 const splashes=new THREE.InstancedMesh(mistGeometry,new THREE.MeshBasicMaterial({color:0x9db7bb,transparent:true,opacity:.38,side:THREE.DoubleSide,depthWrite:false}),renderQuality.mobile?80:144);splashes.name='Sprinkler splashes on the floor';splashes.visible=false;splashes.frustumCulled=false;splashes.raycast=()=>{};group.add(splashes);
 const dummy=new THREE.Object3D(),splashCount=splashes.instanceMatrix.count;
 function setAcid(value){
  if(acid===value)return;
  acid=value;wetAt=null;wetness=0;
  waterMaterial.color.setHex(acid?0x718d20:0x829297);
  waterMaterial.emissive.setHex(acid?0x344c06:0x000000);waterMaterial.emissiveIntensity=acid?.5:1;
  material.color.setHex(acid?0xb5d957:0xc0d4dc);
  splashes.material.color.setHex(acid?0xadd34f:0x9db7bb);
  standingWater.renderOrder=acid?7:2;
  if(!acid)standingWater.position.y=0;
 }
 function update(time,strength,reducedMotion=false){
  if(strength>0){if(wetAt===null)wetAt=time;wetness=Math.max(wetness,Math.min(1,(time-wetAt+.25)/(acid?3:7)));}
  standingWater.visible=wetness>0;waterMaterial.opacity=(acid?.85:.30)*wetness;standingWater.position.y=acid?.18*wetness:0;waterTime.value=reducedMotion?0:time;
  spray.visible=splashes.visible=strength>0;if(!strength)return;
  material.opacity=strength*(reducedMotion?.32:.68);
  const flowTime=reducedMotion?0:time;
  for(let i=0;i<count;i++){
   const h=heads[i%heads.length],phase=(flowTime*(1.10+(i%7)*.055)+i*.618)%1,angle=i*2.3999;
   const distance=.30+(i%23)/23*2.05,r=distance*phase,y=2.86*(1-phase*phase);
   const x=h[0]+Math.cos(angle)*r,z=h[2]+Math.sin(angle)*r,floor=floorSupport(x,z)+.012;
   const j=i*6;positions[j]=x;positions[j+1]=Math.max(floor,y);positions[j+2]=z;
   positions[j+3]=x-Math.cos(angle)*.022;positions[j+4]=Math.max(floor,y+.085+phase*.14);positions[j+5]=z-Math.sin(angle)*.022;
  }
  geo.attributes.position.needsUpdate=true;splashes.material.opacity=.38*strength;
  for(let i=0;i<splashCount;i++){
   const h=heads[i%heads.length],phase=(flowTime*2.6+i*.618)%1,angle=i*2.399,r=.30+(i%17)/17*2.05,x=h[0]+Math.cos(angle)*r,z=h[2]+Math.sin(angle)*r;
   dummy.position.set(x,floorSupport(x,z)+.012,z);dummy.scale.setScalar(.012+phase*.065);dummy.updateMatrix();splashes.setMatrixAt(i,dummy.matrix);
  }
  splashes.instanceMatrix.needsUpdate=true;
 }
 return {group,update,setAcid,setEnvironment(map){for(const material of[iron,brass,waterMaterial]){material.envMap=map;material.envMapIntensity=material===waterMaterial?1.2:.7;material.needsUpdate=true;}},reset(){setAcid(false);spray.visible=splashes.visible=standingWater.visible=false;wetAt=null;wetness=0;waterMaterial.opacity=0;}};
}
