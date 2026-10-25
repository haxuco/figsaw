import * as THREE from './vendor/three.module.js';
import {createAcidFlow} from './acid-flow.js';
import {createAcidSurface,createDrainJet} from './acid-surface.js';

export function createTankLeaks({valves,floorSupport}){
 const group=new THREE.Group();group.name='Corrosive green liquid, bubbles and contact smoke';group.userData.ignoreAcid=true;group.visible=false;
 const flow=createAcidFlow(),dummy=new THREE.Object3D(),cameraRotation=new THREE.Quaternion();
 const timeUniform={value:0},streams=new Map(),materialCopies=new Map(),contactBounds=[];let lastPaint=-Infinity;
 const burnCanvas=document.createElement('canvas');burnCanvas.width=burnCanvas.height=512;
 const burn=burnCanvas.getContext('2d');burn.fillStyle='#000';burn.fillRect(0,0,512,512);
 const burnMap=new THREE.CanvasTexture(burnCanvas);burnMap.generateMipmaps=false;burnMap.minFilter=THREE.LinearFilter;burnMap.flipY=false;
 const burnUniform={value:burnMap};
 function corrosionMaterial(original){
  if(materialCopies.has(original))return materialCopies.get(original);
  const copy=original.clone(),before=original.onBeforeCompile,cache=original.customProgramCacheKey();
  // Keep animated screen fades attached after adding corrosion to the closed lid.
  if(original.color)copy.color=original.color;if(original.emissive)copy.emissive=original.emissive;
  copy.onBeforeCompile=shader=>{
   before.call(original,shader);shader.uniforms.acidBurn=burnUniform;
   shader.vertexShader='varying vec3 vAcidWorld;\n'+shader.vertexShader;
   shader.vertexShader=shader.vertexShader.replace('#include <worldpos_vertex>',`#include <worldpos_vertex>
    vec4 acidVertex=vec4(transformed,1.0);
    #ifdef USE_INSTANCING
     acidVertex=instanceMatrix*acidVertex;
    #endif
    vAcidWorld=(modelMatrix*acidVertex).xyz;`);
   shader.fragmentShader='uniform sampler2D acidBurn;varying vec3 vAcidWorld;\n'+shader.fragmentShader;
   shader.fragmentShader=shader.fragmentShader.replace('#include <color_fragment>',`#include <color_fragment>
    vec2 acidUV=(vAcidWorld.xz+vec2(4.1,4.2))/vec2(8.2,8.8);
    float burned=texture2D(acidBurn,clamp(acidUV,0.0,1.0)).r*(1.0-smoothstep(.035,.32,vAcidWorld.y));
    float pitting=fract(sin(dot(floor(vAcidWorld*145.0),vec3(17.17,83.23,39.71)))*43758.5453);
    diffuseColor.rgb=mix(diffuseColor.rgb,vec3(.075,.063,.025)+pitting*.035,burned*.94);
    if(burned>.48&&pitting<(burned-.48)*.55)discard;`);
  };
  copy.customProgramCacheKey=()=>cache+'-acid-corrosion-v1';materialCopies.set(original,copy);return copy;
 }
 function bindTargets(roots){
  const bounds=new THREE.Box3();
  function visit(object){
   if(object.userData.ignoreAcid)return;
   if(object.isMesh&&object.material){
    bounds.setFromObject(object);
    if(bounds.min.y<.40&&bounds.max.y>-.01){
     if(bounds.max.y>.02&&bounds.max.y<.65)contactBounds.push(bounds.clone());
     const convert=mat=>mat.isMeshStandardMaterial||mat.isMeshLambertMaterial||mat.isMeshPhongMaterial||mat.isMeshBasicMaterial||mat.isMeshToonMaterial?corrosionMaterial(mat):mat;
     object.material=Array.isArray(object.material)?object.material.map(convert):convert(object.material);
    }
   }
   for(const child of object.children)visit(child);
  }
  for(const root of roots){root.updateWorldMatrix(true,true);visit(root);}
 }
 const surface=createAcidSurface(floorSupport,burnMap,timeUniform);group.add(surface.scorch,surface.pool);
 const bubbles=new THREE.InstancedMesh(new THREE.SphereGeometry(1,10,7),new THREE.MeshPhysicalMaterial({color:0xa0ae64,roughness:.13,clearcoat:1,transparent:true,opacity:.72,depthWrite:false}),54);bubbles.instanceMatrix.setUsage(THREE.DynamicDrawUsage);bubbles.frustumCulled=false;bubbles.count=0;group.add(bubbles);
 const droplets=new THREE.InstancedMesh(new THREE.SphereGeometry(1,8,6),surface.jetMaterial,42);droplets.instanceMatrix.setUsage(THREE.DynamicDrawUsage);droplets.frustumCulled=false;droplets.count=0;droplets.name='Small falling splash droplets';group.add(droplets);
 const rippleGeometry=new THREE.RingGeometry(.90,1,32);rippleGeometry.rotateX(-Math.PI/2);
 const rippleAlpha=new THREE.InstancedBufferAttribute(new Float32Array(12),1);rippleGeometry.setAttribute('rippleAlpha',rippleAlpha);
 const rippleMaterial=new THREE.MeshBasicMaterial({color:0xb6c58b,transparent:true,opacity:.32,depthWrite:false,side:THREE.DoubleSide});
 rippleMaterial.onBeforeCompile=shader=>{
  shader.vertexShader='attribute float rippleAlpha;varying float vRippleAlpha;\n'+shader.vertexShader;
  shader.vertexShader=shader.vertexShader.replace('#include <begin_vertex>','#include <begin_vertex>\nvRippleAlpha=rippleAlpha;');
  shader.fragmentShader='varying float vRippleAlpha;\n'+shader.fragmentShader;
  shader.fragmentShader=shader.fragmentShader.replace('#include <color_fragment>','#include <color_fragment>\ndiffuseColor.a*=vRippleAlpha;');
 };
 const ripples=new THREE.InstancedMesh(rippleGeometry,rippleMaterial,12);ripples.instanceMatrix.setUsage(THREE.DynamicDrawUsage);ripples.frustumCulled=false;ripples.count=0;ripples.renderOrder=6;ripples.name='Expanding impact rings';group.add(ripples);
 const smokeCanvas=document.createElement('canvas');smokeCanvas.width=smokeCanvas.height=128;const smokePaint=smokeCanvas.getContext('2d');
 for(let i=0;i<7;i++){const x=64+Math.sin(i*2.4)*23,y=64+Math.cos(i*3.1)*21,g=smokePaint.createRadialGradient(x,y,0,x,y,36);g.addColorStop(0,'rgba(220,231,199,.3)');g.addColorStop(1,'rgba(220,231,199,0)');smokePaint.fillStyle=g;smokePaint.fillRect(0,0,128,128);}
 const smokeTexture=new THREE.CanvasTexture(smokeCanvas);
 const smokeGeometry=new THREE.PlaneGeometry(1,1),smokeAlpha=new THREE.InstancedBufferAttribute(new Float32Array(84),1);smokeGeometry.setAttribute('smokeAlpha',smokeAlpha);
 const smokeMaterial=new THREE.MeshBasicMaterial({map:smokeTexture,transparent:true,opacity:.27,depthWrite:false,color:0xc1c8b3,side:THREE.DoubleSide});
 smokeMaterial.onBeforeCompile=shader=>{
  shader.vertexShader='attribute float smokeAlpha;varying float vSmokeAlpha;\n'+shader.vertexShader;
  shader.vertexShader=shader.vertexShader.replace('#include <begin_vertex>','#include <begin_vertex>\nvSmokeAlpha=smokeAlpha;');
  shader.fragmentShader='varying float vSmokeAlpha;\n'+shader.fragmentShader;
  shader.fragmentShader=shader.fragmentShader.replace('#include <color_fragment>','#include <color_fragment>\ndiffuseColor.a*=vSmokeAlpha;');
 };
 const smoke=new THREE.InstancedMesh(smokeGeometry,smokeMaterial,84);smoke.name='Smoke rising from corroding surfaces';smoke.instanceMatrix.setUsage(THREE.DynamicDrawUsage);smoke.frustumCulled=false;smoke.count=0;smoke.renderOrder=12;group.add(smoke);
 group.traverse(object=>{if(object.isMesh)object.raycast=()=>{};});
 function contactHeight(x,z){
  let y=floorSupport(x,z);
  for(const box of contactBounds)if(x>=box.min.x&&x<=box.max.x&&z>=box.min.z&&z<=box.max.z)y=Math.max(y,Math.min(.27,box.max.y));
  return y;
 }
 function open(index,time,locked=false){
  const valve=valves[index];if(!valve||locked)return false;
  if(flow.dying||flow.leaks.some(leak=>leak.index===index))return false;
  const stream=createDrainJet(valve.outlet,floorSupport,surface.jetMaterial);
  if(!flow.open(index,stream.origin,time,locked)){stream.mesh.geometry.dispose();return false;}
  stream.mesh.visible=false;group.add(stream.mesh);streams.set(index,stream);
  group.visible=true;return true;
 }
 function paintBurn(time){
  if(time-lastPaint<.10)return;lastPaint=time;
  for(const leak of flow.leaks)for(const p of leak.points){
   const x=(p.x+4.1)/8.2*512,y=(p.z+4.2)/8.8*512,r=p.radius*512/8.2*1.18;
   const gradient=burn.createRadialGradient(x,y,r*.45,x,y,r);gradient.addColorStop(0,'rgba(255,255,255,.13)');gradient.addColorStop(1,'rgba(255,255,255,0)');burn.fillStyle=gradient;burn.fillRect(x-r,y-r,r*2,r*2);
  }
  burnMap.needsUpdate=true;
 }
 function update(time,dt,viewer,camera,reducedMotion=false,options={}){
  if(!flow.leaks.length)return false;
  const finished=flow.update(time,dt,viewer,options),t=reducedMotion?0:time;timeUniform.value=t;camera.getWorldQuaternion(cameraRotation);
  let bubbleCount=0,smokeCount=0,dropCount=0,rippleCount=0;
  for(const leak of flow.leaks){
   valves[leak.index].setOpen(reducedMotion?1:THREE.MathUtils.smootherstep(leak.progress,0,1));
   const stream=streams.get(leak.index);stream.mesh.visible=leak.points.length>0;stream.update(t,leak.progress);
   if(!leak.points.length)continue;
   for(let i=0;i<18;i++){
    const p=leak.points[(i*17+leak.index*5)%leak.points.length],life=(t*.9+i*.618)%1,a=i*2.399,rad=p.radius*.57;
    dummy.position.set(p.x+Math.cos(a)*rad,floorSupport(p.x,p.z)+.008+Math.sin(life*Math.PI)*.005,p.z+Math.sin(a)*rad);
    const size=(.005+(i%4)*.0025)*Math.sin(life*Math.PI);dummy.scale.set(size,size*.45,size);dummy.quaternion.identity();dummy.updateMatrix();bubbles.setMatrixAt(bubbleCount++,dummy.matrix);
   }
   for(let i=0;i<14;i++){
    const life=(t*2.7+i*.618)%1,a=i*2.399+leak.index,r=.015+life*(.07+(i%3)*.02),height=.045+(i%4)*.012;
    dummy.position.set(leak.origin.x+Math.cos(a)*r,leak.origin.y+4*height*life*(1-life),leak.origin.z+Math.sin(a)*r);
    const size=(.003+(i%3)*.0015)*(1-life*.45);dummy.scale.set(size,size*(1.3+life),size);dummy.quaternion.identity();dummy.updateMatrix();droplets.setMatrixAt(dropCount++,dummy.matrix);
   }
   for(let i=0;i<4;i++){
    const life=(t*1.6+i*.25)%1,r=.018+life*.16;
    dummy.position.set(leak.origin.x,floorSupport(leak.origin.x,leak.origin.z)+.010,leak.origin.z);dummy.quaternion.identity();dummy.scale.set(r,1,r*.92);dummy.updateMatrix();ripples.setMatrixAt(rippleCount,dummy.matrix);rippleAlpha.setX(rippleCount++,Math.sin(life*Math.PI)*(1-life));
   }
   for(let i=0;i<16;i++){
    // Favor the moving edge and the newest contact patches, where corrosion is most active.
    const offset=(i*7)%Math.min(35,leak.points.length),p=leak.points[Math.max(0,leak.points.length-1-offset)];
    const life=(t*.46+i*.381)%1,a=i*2.4+leak.index,r=p.radius*(.45+life*.5),size=.075+life*.22;
    dummy.position.set(p.x+Math.cos(a)*r+Math.sin(t+i)*life*.06,contactHeight(p.x,p.z)+.015+life*.34,p.z+Math.sin(a)*r);
    dummy.quaternion.copy(cameraRotation);dummy.rotateZ(i*.9+life*.4);dummy.scale.set(size,size*1.5,1);dummy.updateMatrix();smoke.setMatrixAt(smokeCount,dummy.matrix);smokeAlpha.setX(smokeCount++,Math.sin(life*Math.PI)*.58);
   }
  }
  bubbles.count=bubbleCount;smoke.count=smokeCount;droplets.count=dropCount;ripples.count=rippleCount;
  for(const mesh of[bubbles,smoke,droplets,ripples])mesh.instanceMatrix.needsUpdate=true;smokeAlpha.needsUpdate=true;rippleAlpha.needsUpdate=true;
  surface.update(time,flow.leaks);paintBurn(time);return finished;
 }
 function reset(){
  flow.reset();surface.reset();group.visible=false;bubbles.count=smoke.count=droplets.count=ripples.count=0;
  for(const stream of streams.values()){group.remove(stream.mesh);stream.mesh.geometry.dispose();}streams.clear();
  for(const valve of valves)valve.setOpen(0);
  burn.clearRect(0,0,512,512);burn.fillStyle='#000';burn.fillRect(0,0,512,512);burnMap.needsUpdate=true;lastPaint=-Infinity;
 }
 return {group,open,update,reset,bindTargets,get leaks(){return flow.leaks;},setEnvironment:surface.setEnvironment,blackout:time=>flow.blackout(time),get dying(){return flow.dying;},get active(){return flow.leaks.length>0;}};
}
