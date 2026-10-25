import * as THREE from './vendor/three.module.js';
import {renderQuality} from './render-quality.js';

// Keep decorative surface effects out of the mobile shader permutations. Materials
// stay the same objects so animated controls and acid effects retain their references.
export function applySceneBudget(scene,quality=renderQuality){
 const materials=new Set(),textures=new Set();
 scene.traverse(object=>{
  if(!object.isMesh)return;
  if(quality.mobile&&object.geometry){
   if(!object.geometry.boundingSphere)object.geometry.computeBoundingSphere();
   const radius=object.geometry.boundingSphere.radius*Math.max(Math.abs(object.scale.x),Math.abs(object.scale.y),Math.abs(object.scale.z));
   if(radius<.08)object.castShadow=false;
  }
  for(const material of Array.isArray(object.material)?object.material:[object.material]){
   if(!material||materials.has(material))continue;materials.add(material);
   if(quality.mobile){
    if(material.isMeshPhysicalMaterial){material.clearcoat=0;material.transmission=0;material.sheen=0;material.iridescence=0;material.anisotropy=0;}
    material.bumpMap=null;material.normalMap=null;material.clearcoatNormalMap=null;material.clearcoatRoughnessMap=null;
    // One pass for thin transparent shells instead of separately drawing both faces.
    if(material.transparent)material.forceSinglePass=true;
   }
   for(const value of Object.values(material))if(value?.isTexture)textures.add(value);
  }
 });
 for(const texture of textures)if(quality.mobile)texture.anisotropy=Math.min(texture.anisotropy,2);
 return {materials:materials.size,textures:textures.size};
}

// Phone GPUs use one inexpensive diffuse lighting model. Share the mutable colour
// and opacity values with the original so laptop fades and other interactions work.
export function useMobileMaterials(scene,quality=renderQuality){
 if(!quality.mobile)return;
 const converted=new Map();
 function convert(source){
  if(!source.isMeshStandardMaterial)return source;
  if(converted.has(source))return converted.get(source);
  const material=new THREE.MeshLambertMaterial();THREE.Material.prototype.copy.call(material,source);
  for(const key of ['map','alphaMap','aoMap','aoMapIntensity','lightMap','lightMapIntensity','wireframe','wireframeLinewidth','fog'])material[key]=source[key];
  for(const key of ['color','emissive','opacity','emissiveIntensity','visible'])Object.defineProperty(material,key,{configurable:true,get:()=>source[key],set:value=>{source[key]=value;}});
  material.clippingPlanes=source.clippingPlanes;material.emissiveMap=source.emissiveMap;material.envMap=null;
  material.onBeforeCompile=source.onBeforeCompile;material.customProgramCacheKey=source.customProgramCacheKey;
  material.forceSinglePass=true;converted.set(source,material);return material;
 }
 scene.traverse(object=>{if(object.material)object.material=Array.isArray(object.material)?object.material.map(convert):convert(object.material);
  if(object.isLight&&!object.userData.mobileEssential)object.visible=false;
 });
}
