import {fitTextureImage} from './texture-budget.js';
import {renderQuality} from './render-quality.js';
import * as THREE from './vendor/three.module.js';

// Project the supplied transparent artwork onto the front of the glass cylinder.
// The central opening remains actual clear glass, with the bones behind it.
export function createTankDecalFactory(){
 const map=new THREE.TextureLoader().load(new URL('./assets/open-to-work.png',import.meta.url).href,loaded=>{if(renderQuality.mobile)fitTextureImage(loaded,256);});
 map.colorSpace=THREE.SRGBColorSpace;map.anisotropy=4;
 const material=new THREE.MeshStandardMaterial({map,transparent:true,alphaTest:.025,depthWrite:false,roughness:.86,metalness:0,emissiveMap:map,emissive:0xffffff,emissiveIntensity:.18});
 const geometry=new THREE.PlaneGeometry(.78,.78,48,2),positions=geometry.attributes.position;
 for(let i=0;i<positions.count;i++)positions.setZ(i,Math.sqrt(.490**2-positions.getX(i)**2));
 geometry.computeVertexNormals();geometry.computeBoundingSphere();
 return ()=>{
  const decal=new THREE.Mesh(geometry,material);decal.name='#OPENTOWORK decal on curved tank glass';
  decal.position.y=.70;decal.renderOrder=8;
  return decal;
 };
}
