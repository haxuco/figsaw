import * as THREE from './vendor/three.module.js';
import {renderQuality} from './render-quality.js';

export function createAcidSurface(floorSupport,burnMap,timeUniform){
 const size=renderQuality.textureSize,canvas=document.createElement('canvas');canvas.width=canvas.height=size;
 const paint=canvas.getContext('2d'),wetMap=new THREE.CanvasTexture(canvas);wetMap.flipY=false;wetMap.generateMipmaps=false;wetMap.minFilter=THREE.LinearFilter;
 const wetUniform={value:wetMap};
 function water(masked){
  const mat=new THREE.MeshPhysicalMaterial({color:0x637c23,roughness:.12,metalness:0,ior:1.333,clearcoat:1,clearcoatRoughness:.08,emissive:0x273e08,emissiveIntensity:.15,transparent:masked,opacity:masked?.92:1,depthWrite:!masked,side:THREE.DoubleSide,envMapIntensity:1.4});
  mat.onBeforeCompile=shader=>{
   shader.uniforms.acidTime=timeUniform;shader.uniforms.acidWet=wetUniform;
   shader.vertexShader='varying vec3 vWetWorld;\n'+shader.vertexShader;
   shader.vertexShader=shader.vertexShader.replace('#include <worldpos_vertex>',`#include <worldpos_vertex>
    vec4 wetVertex=vec4(transformed,1.0);
    #ifdef USE_INSTANCING
     wetVertex=instanceMatrix*wetVertex;
    #endif
    vWetWorld=(modelMatrix*wetVertex).xyz;`);
   shader.fragmentShader='uniform float acidTime;uniform sampler2D acidWet;varying vec3 vWetWorld;\n'+shader.fragmentShader;
   shader.fragmentShader=shader.fragmentShader.replace('#include <color_fragment>',`#include <color_fragment>
    vec2 flowUV=vWetWorld.xz;
    float eddy=sin(flowUV.x*14.0+sin(flowUV.y*9.0-acidTime*.7)+acidTime*.35)*sin(flowUV.y*17.0-acidTime*.8);
    float fine=sin(flowUV.x*71.0+flowUV.y*43.0-acidTime*2.5)*sin(flowUV.y*81.0-flowUV.x*29.0+acidTime*1.8);
    ${masked?`float wet=texture2D(acidWet,(flowUV+vec2(4.1,4.2))/vec2(8.2,8.8)).r;
    wet-=.035*eddy+.018*fine;
    if(wet<.055)discard;
    float depth=smoothstep(.12,.95,wet);
    diffuseColor.rgb=mix(vec3(.31,.42,.085),diffuseColor.rgb*.62,depth);
    diffuseColor.a*=smoothstep(.055,.22,wet)*mix(.48,1.0,depth);`:''}
    diffuseColor.rgb*=.94+.07*eddy+.025*fine;`);
   shader.fragmentShader=shader.fragmentShader.replace('#include <normal_fragment_begin>',`#include <normal_fragment_begin>
    float dx=.045*cos(vWetWorld.x*24.0+vWetWorld.z*12.0-acidTime*2.1)+.018*cos(vWetWorld.x*83.0-vWetWorld.z*36.0+acidTime*3.0);
    float dz=.035*sin(vWetWorld.z*27.0-vWetWorld.x*9.0+acidTime*1.7)+.012*sin(vWetWorld.z*79.0+acidTime*3.4);
    normal=normalize(normal+mat3(viewMatrix)*vec3(dx,0.0,dz));`);
  };
  mat.customProgramCacheKey=()=>`acid-water-${masked?'surface':'jet'}-v2`;return mat;
 }
 const material=water(true),jetMaterial=water(false),segments=renderQuality.mobile?48:72;
 const geo=new THREE.PlaneGeometry(8.2,8.8,segments,segments);geo.rotateX(-Math.PI/2);geo.translate(0,0,.2);
 const p=geo.attributes.position,uv=geo.attributes.uv;
 for(let i=0;i<p.count;i++){const x=p.getX(i),z=p.getZ(i);p.setY(i,floorSupport(x,z)+.006);uv.setXY(i,(x+4.1)/8.2,(z+4.2)/8.8);}
 p.needsUpdate=true;uv.needsUpdate=true;geo.computeVertexNormals();
 const pool=new THREE.Mesh(geo,material);pool.name='Continuous reflective acid film';pool.renderOrder=4;pool.receiveShadow=true;
 const scorch=new THREE.Mesh(geo,new THREE.MeshBasicMaterial({color:0x101509,alphaMap:burnMap,transparent:true,opacity:.44,depthWrite:false,alphaTest:.01}));scorch.name='Damp corroded edge beneath acid';scorch.position.y=-.002;scorch.renderOrder=3;
 let lastPaint=-Infinity;
 function update(time,leaks){
  if(time-lastPaint<.10)return;lastPaint=time;
  paint.globalCompositeOperation='source-over';paint.fillStyle='#000';paint.fillRect(0,0,size,size);paint.globalCompositeOperation='lighten';
  for(const leak of leaks)for(const point of leak.points){
   const x=(point.x+4.1)/8.2*size,y=(point.z+4.2)/8.8*size,r=point.radius*size/8.2;
   const gradient=paint.createRadialGradient(x,y,0,x,y,r);gradient.addColorStop(0,'#fff');gradient.addColorStop(.62,'#fff');gradient.addColorStop(.85,'#999');gradient.addColorStop(1,'#000');
   paint.fillStyle=gradient;paint.fillRect(x-r,y-r,r*2,r*2);
  }
  wetMap.needsUpdate=true;
 }
 return {pool,scorch,jetMaterial,update,reset(){lastPaint=-Infinity;paint.globalCompositeOperation='source-over';paint.fillStyle='#000';paint.fillRect(0,0,size,size);wetMap.needsUpdate=true;},setEnvironment(map){for(const mat of[material,jetMaterial]){mat.envMap=map;mat.needsUpdate=true;}}};
}

export function createDrainJet(outlet,floorSupport,material,{width=1}={}){
 const source=new THREE.Vector3(),rotation=new THREE.Quaternion();outlet.getWorldPosition(source);outlet.getWorldQuaternion(rotation);
 const velocity=new THREE.Vector3(0,-.25,.6).applyQuaternion(rotation),gravity=9.81;
 const floor=floorSupport(source.x,source.z)+.009,height=Math.max(.01,source.y-floor);
 const duration=(velocity.y+Math.sqrt(velocity.y*velocity.y+2*gravity*height))/gravity;
 const origin=source.clone().addScaledVector(velocity,duration);origin.y=floorSupport(origin.x,origin.z)+.009;
 const rings=20,sides=10,geo=new THREE.BufferGeometry(),positions=new Float32Array((rings+1)*(sides+1)*3),normals=new Float32Array(positions.length),indices=[];
 for(let j=1;j<=rings;j++)for(let i=1;i<=sides;i++){const b=j*(sides+1)+i;indices.push(b,b-sides-2,b-1,b,b-sides-1,b-sides-2);}
 geo.setAttribute('position',new THREE.BufferAttribute(positions,3).setUsage(THREE.DynamicDrawUsage));geo.setAttribute('normal',new THREE.BufferAttribute(normals,3).setUsage(THREE.DynamicDrawUsage));geo.setIndex(indices);
 const mesh=new THREE.Mesh(geo,material);mesh.name='Gravity-fed wavering drain stream';mesh.frustumCulled=false;mesh.raycast=()=>{};
 const center=new THREE.Vector3(),axis=new THREE.Vector3(),x=new THREE.Vector3(),y=new THREE.Vector3(),radial=new THREE.Vector3();
 function update(time,strength){
  const fill=THREE.MathUtils.smoothstep(strength,0,.65);
  for(let j=0;j<=rings;j++){
   const u=j/rings,t=u*duration;center.copy(source).addScaledVector(velocity,t);center.y-=.5*gravity*t*t;
   center.x+=Math.sin(time*19-u*13)*.002*u;center.z+=Math.sin(time*16-u*11)*.0015*u;
   axis.copy(velocity);axis.y-=gravity*t;axis.normalize();x.set(1,0,0).addScaledVector(axis,-axis.x).normalize();y.crossVectors(x,axis);
   const radius=width*(.021-.010*u)*(1+.12*Math.sin(u*25-time*23))*fill;
   for(let i=0;i<=sides;i++){const a=i/sides*Math.PI*2,k=(j*(sides+1)+i)*3;radial.copy(x).multiplyScalar(Math.cos(a)).addScaledVector(y,Math.sin(a));radial.toArray(normals,k);positions[k]=center.x+radial.x*radius;positions[k+1]=center.y+radial.y*radius;positions[k+2]=center.z+radial.z*radius;}
  }
  geo.attributes.position.needsUpdate=geo.attributes.normal.needsUpdate=true;
 }
 update(0,1);return {mesh,origin,update};
}
