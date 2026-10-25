import * as THREE from './vendor/three.module.js';
import {createAcidFlow} from './acid-flow.js';

export function createTankLeaks({valves,floorSupport}){
 const group=new THREE.Group();group.name='Corrosive green liquid, bubbles and contact smoke';group.userData.ignoreAcid=true;group.visible=false;
 const flow=createAcidFlow(),dummy=new THREE.Object3D(),point=new THREE.Vector3(),cameraRotation=new THREE.Quaternion();
 const timeUniform={value:0},streams=new Map(),materialCopies=new Map(),contactBounds=[];let lastPaint=-Infinity;
 const burnCanvas=document.createElement('canvas');burnCanvas.width=burnCanvas.height=512;
 const burn=burnCanvas.getContext('2d');burn.fillStyle='#000';burn.fillRect(0,0,512,512);
 const burnMap=new THREE.CanvasTexture(burnCanvas);burnMap.generateMipmaps=false;burnMap.minFilter=THREE.LinearFilter;burnMap.flipY=false;
 const burnUniform={value:burnMap};
 function corrosionMaterial(original){
  if(materialCopies.has(original))return materialCopies.get(original);
  const copy=original.clone(),before=original.onBeforeCompile,cache=original.customProgramCacheKey();
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
     const convert=mat=>mat.isMeshStandardMaterial||mat.isMeshBasicMaterial||mat.isMeshToonMaterial?corrosionMaterial(mat):mat;
     object.material=Array.isArray(object.material)?object.material.map(convert):convert(object.material);
    }
   }
   for(const child of object.children)visit(child);
  }
  for(const root of roots){root.updateWorldMatrix(true,true);visit(root);}
 }
 const liquid=new THREE.MeshPhysicalMaterial({color:0x608b16,roughness:.16,metalness:.06,clearcoat:1,clearcoatRoughness:.13,emissive:0x426d0c,emissiveIntensity:.53,side:THREE.DoubleSide});
 liquid.onBeforeCompile=shader=>{
  shader.uniforms.acidTime=timeUniform;
  shader.vertexShader='varying vec3 vWetWorld;\n'+shader.vertexShader;
  shader.vertexShader=shader.vertexShader.replace('#include <worldpos_vertex>',`#include <worldpos_vertex>
   vec4 wetVertex=vec4(transformed,1.0);
   #ifdef USE_INSTANCING
    wetVertex=instanceMatrix*wetVertex;
   #endif
   vWetWorld=(modelMatrix*wetVertex).xyz;`);
  shader.fragmentShader='uniform float acidTime;varying vec3 vWetWorld;\n'+shader.fragmentShader;
  shader.fragmentShader=shader.fragmentShader.replace('#include <color_fragment>',`#include <color_fragment>
   float streak=sin(vWetWorld.x*28.0+acidTime*1.9)*sin(vWetWorld.z*33.0-acidTime*2.8);
   float ripples=sin(length(vWetWorld.xz*17.0)+acidTime*3.2);
   diffuseColor.rgb*=.83+.18*streak+.09*ripples;`);
 };
 const shape=new THREE.Shape();
 for(let i=0;i<=48;i++){const a=i/48*Math.PI*2,r=1+.10*Math.sin(a*5)+.045*Math.cos(a*9),x=Math.cos(a)*r,y=Math.sin(a)*r;i?shape.lineTo(x,y):shape.moveTo(x,y);}
 shape.closePath();const poolGeometry=new THREE.ShapeGeometry(shape,1);poolGeometry.rotateX(-Math.PI/2);
 const pools=new THREE.InstancedMesh(poolGeometry,liquid,543);pools.instanceMatrix.setUsage(THREE.DynamicDrawUsage);pools.frustumCulled=false;pools.count=0;pools.name='Advancing connected acid puddles';group.add(pools);
 const scorch=new THREE.InstancedMesh(poolGeometry,new THREE.MeshBasicMaterial({color:0x161b08}),543);scorch.instanceMatrix.setUsage(THREE.DynamicDrawUsage);scorch.frustumCulled=false;scorch.count=0;scorch.name='Etched and blackened floor';group.add(scorch);
 const bubbles=new THREE.InstancedMesh(new THREE.SphereGeometry(1,10,7),new THREE.MeshPhysicalMaterial({color:0x9ec943,roughness:.22,clearcoat:1,emissive:0x4a6f1c,emissiveIntensity:.35}),108);bubbles.instanceMatrix.setUsage(THREE.DynamicDrawUsage);bubbles.frustumCulled=false;bubbles.count=0;group.add(bubbles);
 const smokeCanvas=document.createElement('canvas');smokeCanvas.width=smokeCanvas.height=128;const smokePaint=smokeCanvas.getContext('2d');
 for(let i=0;i<7;i++){const x=64+Math.sin(i*2.4)*23,y=64+Math.cos(i*3.1)*21,g=smokePaint.createRadialGradient(x,y,0,x,y,36);g.addColorStop(0,'rgba(220,231,199,.3)');g.addColorStop(1,'rgba(220,231,199,0)');smokePaint.fillStyle=g;smokePaint.fillRect(0,0,128,128);}
 const smokeTexture=new THREE.CanvasTexture(smokeCanvas);
 const smokeGeometry=new THREE.PlaneGeometry(1,1),smokeAlpha=new THREE.InstancedBufferAttribute(new Float32Array(84),1);smokeGeometry.setAttribute('smokeAlpha',smokeAlpha);
 const smokeMaterial=new THREE.MeshBasicMaterial({map:smokeTexture,transparent:true,opacity:.62,depthWrite:false,color:0xb3c79a,side:THREE.DoubleSide});
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
  valve.outlet.getWorldPosition(point);
  const origin=point.clone();origin.y=floorSupport(origin.x,origin.z)+.009;
  if(!flow.open(index,origin,time,locked))return false;
  const curve=new THREE.CatmullRomCurve3([point.clone(),point.clone().add(new THREE.Vector3(0,-.04,.025)),origin.clone()]);
  const stream=new THREE.Mesh(new THREE.TubeGeometry(curve,16,.018,8,false),liquid);stream.name=`Tank ${index+1} acid escaping its drain`;stream.raycast=()=>{};stream.visible=false;group.add(stream);streams.set(index,stream);
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
 function update(time,dt,viewer,camera,reducedMotion=false){
  if(!flow.leaks.length)return false;
  const finished=flow.update(time,dt,viewer),t=reducedMotion?0:time;timeUniform.value=t;camera.getWorldQuaternion(cameraRotation);
  let poolCount=0,bubbleCount=0,smokeCount=0;
  for(const leak of flow.leaks){
   valves[leak.index].setOpen(reducedMotion?1:THREE.MathUtils.smootherstep(leak.progress,0,1));
   streams.get(leak.index).visible=leak.points.length>0;
   for(const p of leak.points){
    dummy.position.set(p.x,floorSupport(p.x,p.z)+.009,p.z);dummy.rotation.set(0,leak.index*.7,0);dummy.scale.set(p.radius,1,p.radius*.87);dummy.updateMatrix();pools.setMatrixAt(poolCount,dummy.matrix);
    dummy.position.y-=.004;dummy.scale.x*=1.20;dummy.scale.z*=1.20;dummy.updateMatrix();scorch.setMatrixAt(poolCount++,dummy.matrix);
   }
   if(!leak.points.length)continue;
   for(let i=0;i<36;i++){
    const p=leak.points[(i*17+leak.index*5)%leak.points.length],life=(t*.75+i*.618)%1,a=i*2.399,rad=p.radius*.7;
    dummy.position.set(p.x+Math.cos(a)*rad,floorSupport(p.x,p.z)+.013+Math.sin(life*Math.PI)*.026,p.z+Math.sin(a)*rad);
    const size=(.009+(i%4)*.004)*Math.sin(life*Math.PI);dummy.scale.set(size,size*.65,size);dummy.quaternion.identity();dummy.updateMatrix();bubbles.setMatrixAt(bubbleCount++,dummy.matrix);
   }
   for(let i=0;i<28;i++){
    // Favor the moving edge and the newest contact patches, where corrosion is most active.
    const offset=(i*7)%Math.min(35,leak.points.length),p=leak.points[Math.max(0,leak.points.length-1-offset)];
    const life=(t*.46+i*.381)%1,a=i*2.4+leak.index,r=p.radius*(.45+life*.5),size=.11+life*.34;
    dummy.position.set(p.x+Math.cos(a)*r+Math.sin(t+i)*life*.06,contactHeight(p.x,p.z)+.025+life*.48,p.z+Math.sin(a)*r);
    dummy.quaternion.copy(cameraRotation);dummy.rotateZ(i*.9+life*.4);dummy.scale.set(size,size*1.5,1);dummy.updateMatrix();smoke.setMatrixAt(smokeCount,dummy.matrix);smokeAlpha.setX(smokeCount++,Math.sin(life*Math.PI)*.80);
   }
  }
  pools.count=scorch.count=poolCount;bubbles.count=bubbleCount;smoke.count=smokeCount;
  for(const mesh of[pools,scorch,bubbles,smoke])mesh.instanceMatrix.needsUpdate=true;smokeAlpha.needsUpdate=true;
  paintBurn(time);return finished;
 }
 function reset(){
  flow.reset();group.visible=false;pools.count=scorch.count=bubbles.count=smoke.count=0;
  for(const stream of streams.values()){group.remove(stream);stream.geometry.dispose();}streams.clear();
  for(const valve of valves)valve.setOpen(0);
  burn.clearRect(0,0,512,512);burn.fillStyle='#000';burn.fillRect(0,0,512,512);burnMap.needsUpdate=true;lastPaint=-Infinity;
 }
 return {group,open,update,reset,bindTargets,blackout:time=>flow.blackout(time),get dying(){return flow.dying;},get active(){return flow.leaks.length>0;}};
}
