import * as THREE from './vendor/three.module.js';
import {renderQuality as quality} from './render-quality.js';

// Correlated, multiscale PBR maps: rust is rough/nonmetallic and pits catch light.
const clamp=(v,a=0,b=1)=>Math.min(b,Math.max(a,v));
const smooth=v=>{v=clamp(v);return v*v*(3-2*v);};
function hash(x,y){let h=Math.imul(x,374761393)+Math.imul(y,668265263);h=Math.imul(h^(h>>>13),1274126177);return ((h^(h>>>16))>>>0)/4294967295;}
function noise(x,y){const ix=Math.floor(x),iy=Math.floor(y),u=smooth(x-ix),v=smooth(y-iy);return THREE.MathUtils.lerp(THREE.MathUtils.lerp(hash(ix,iy),hash(ix+1,iy),u),THREE.MathUtils.lerp(hash(ix,iy+1),hash(ix+1,iy+1),u),v);}
function grain(x,y){return noise(x*5,y*5)*.48+noise(x*17+3,y*17)*.29+noise(x*61,y*61+9)*.15+noise(x*187,y*187)*.08;}
function pixels(fn,size=quality.textureSize,color=false){
 const data=new Uint8Array(size*size*4);
 for(let y=0;y<size;y++)for(let x=0;x<size;x++){const p=fn(x/size,y/size,x,y),i=(y*size+x)*4;for(let k=0;k<4;k++)data[i+k]=Math.round(clamp(p[k]??1)*255);}
 const map=new THREE.DataTexture(data,size,size,THREE.RGBAFormat);map.wrapS=map.wrapT=THREE.RepeatWrapping;map.magFilter=THREE.LinearFilter;map.minFilter=THREE.LinearMipmapLinearFilter;map.generateMipmaps=true;map.anisotropy=4;if(color)map.colorSpace=THREE.SRGBColorSpace;map.needsUpdate=true;return map;
}
let cachedMetal;
export function weatheredMetal(color=0xffffff){
 if(!cachedMetal){
  const field=(u,v)=>{const n=grain(u,v),streak=noise(u*48,v*3),rust=smooth((n+streak*.13-.51)*9),pit=smooth((noise(u*150,v*150)-.64)*8);return {n,rust,pit};};
  const packed=new Float32Array(quality.textureSize*quality.textureSize*3);
  // Evaluate the noise field once, packing bump/roughness/metalness into RGB.
  const map=pixels((u,v,x,y)=>{const {n,rust,pit}=field(u,v),scratch=Math.pow(noise(u*4,v*260),18)*.24,k=(y*quality.textureSize+x)*3;packed[k]=.45+rust*.21+n*.18-pit*.25;packed[k+1]=.35+rust*.57+pit*.07;packed[k+2]=.88-rust*.86;return [.39+n*.34,.42+n*.34,.39+n*.32].map((metal,j)=>THREE.MathUtils.lerp(metal,[.35+n*.30,.12+n*.19,.045+n*.10][j],rust)-pit*.10+scratch);},quality.textureSize,true);
  const properties=pixels((u,v,x,y)=>{const k=(y*quality.textureSize+x)*3;return [packed[k],packed[k+1],packed[k+2]];});
  const roughnessMap=properties,metalnessMap=properties,bumpMap=properties;
  cachedMetal={map,roughnessMap,metalnessMap,bumpMap};
 }
 return new THREE.MeshStandardMaterial({color,...cachedMetal,roughness:1,metalness:1,bumpScale:quality.mobile?0:.0035,envMapIntensity:.7});
}
export function createTankMaterials(){
 const grimeField=(u,v)=>{
  const cloud=grain(u+3,v+2),runs=noise(u*70,v*2.3)*noise(u*19,v*6),scale=noise(u*170,v*190);
  const bottom=(1-smooth(v/.23))*.78,top=smooth((v-.86)/.14)*.34;
  const tide=Math.exp(-(((v-.844)*75)**2))*(.2+noise(u*38,1)*.8);
  const dirt=clamp(bottom+top+tide*.52+smooth((cloud-.49)*7)*.45+runs*.20);
  const fog=smooth((cloud-.37)*4)*.7;
  return {dirt,fog,runs,scale,tide};
 };
 const packed=new Float32Array(quality.textureSize*quality.textureSize*2);
 const hazeMap=pixels((u,v,x,y)=>{const {dirt,fog,runs,scale,tide}=grimeField(u,v),droplet=Math.pow(noise(u*105,v*69),12)*.65,k=(y*quality.textureSize+x)*2;packed[k]=.4+dirt*.10+runs*.09+scale*.025+droplet;packed[k+1]=.08+fog*.36+dirt*.43+runs*.10;return [.59-dirt*.30,.63-dirt*.30,.48-dirt*.30,clamp(.03+fog*.23+dirt*.55+tide*.12+scale*.025)];},quality.textureSize,true);
 const glassBump=pixels((u,v,x,y)=>{const k=(y*quality.textureSize+x)*2;return [packed[k],packed[k+1],0];});
 const roughnessMap=glassBump;
 const glass=new THREE.MeshPhysicalMaterial({color:0xdde4cd,roughness:.7,roughnessMap,metalness:0,transparent:true,opacity:.17,depthWrite:false,clearcoat:quality.mobile?0:1,clearcoatRoughness:.14,bumpMap:quality.mobile?null:glassBump,bumpScale:.003,side:quality.mobile?THREE.FrontSide:THREE.DoubleSide,envMapIntensity:.85});
 const haze=new THREE.MeshStandardMaterial({map:hazeMap,roughness:.9,bumpMap:quality.mobile?null:glassBump,bumpScale:.002,transparent:true,depthWrite:false,side:quality.mobile?THREE.FrontSide:THREE.DoubleSide});
 const waterMap=pixels((u,v)=>{const n=grain(u+11,v+7),m=noise(u*12,v*9);return [.11+n*.19,.24+n*.35,.026+m*.08];},quality.textureSize/2,true);
 const sedimentMap=pixels((u,v)=>{const n=grain(u+5,v+3),s=smooth(v);return [.10+n*.12+s*.06,.17+n*.22+s*.12,.025+n*.055,.93-s*.43];},quality.textureSize/2,true);
 const fluid=new THREE.MeshPhysicalMaterial({map:sedimentMap,color:0xc9db91,roughness:.26,transparent:true,opacity:.76,depthWrite:false,side:quality.mobile?THREE.FrontSide:THREE.DoubleSide,emissive:0x1e3b05,emissiveIntensity:.48,envMapIntensity:.35});
 const liquidTop=new THREE.MeshPhysicalMaterial({map:waterMap,color:0xffffff,roughness:.17,metalness:0,ior:1.333,clearcoat:quality.mobile?0:1,clearcoatRoughness:.12,side:quality.mobile?THREE.FrontSide:THREE.DoubleSide,emissive:0x243b07,emissiveIntensity:.30,envMapIntensity:1.15});
 // Slow advecting currents in the colour map; geometric waves supply moving normals.
 const waterTime={value:0};
 liquidTop.onBeforeCompile=shader=>{shader.uniforms.waterTime=waterTime;shader.fragmentShader='uniform float waterTime;\n'+shader.fragmentShader;shader.fragmentShader=shader.fragmentShader.replace('#include <map_fragment>',`#ifdef USE_MAP
 vec2 flowUv=vMapUv+vec2(sin(vMapUv.y*10.0+waterTime*.17),cos(vMapUv.x*9.0-waterTime*.13))*.025;
 diffuseColor*=texture2D(map,flowUv);
 #endif`);};
 liquidTop.customProgramCacheKey=()=> 'slow-water-currents-v1';
 const foam=new THREE.MeshStandardMaterial({color:0x91a96a,roughness:.79,transparent:true,opacity:.75,depthWrite:false,emissive:0x263209,emissiveIntensity:.12});
 const bubble=new THREE.MeshPhysicalMaterial({color:0xc7db99,roughness:.07,metalness:0,transparent:true,opacity:.23,depthWrite:false,clearcoat:quality.mobile?0:1,clearcoatRoughness:.04,envMapIntensity:1.25});
 const ripple=new THREE.MeshBasicMaterial({color:0xbed18a,transparent:true,opacity:.18,depthWrite:false,side:quality.mobile?THREE.FrontSide:THREE.DoubleSide});
 return {glass,haze,fluid,liquidTop,foam,bubble,ripple,waterTime};
}
