import * as THREE from './vendor/three.module.js';

// Broad light sources are what show through the dirty glass. A tiny panorama
// avoids compiling and rendering the complete room six times before first paint.
export function createRoomReflections(renderer){
 const canvas=document.createElement('canvas');canvas.width=256;canvas.height=128;
 const ctx=canvas.getContext('2d'),gradient=ctx.createLinearGradient(0,0,0,128);
 gradient.addColorStop(0,'#111812');gradient.addColorStop(.48,'#3a4636');gradient.addColorStop(1,'#171d12');ctx.fillStyle=gradient;ctx.fillRect(0,0,256,128);
 ctx.fillStyle='#a9b7a3';ctx.fillRect(78,19,72,3);ctx.fillStyle='#596e68';ctx.fillRect(190,38,29,25);ctx.fillStyle='#435827';ctx.fillRect(25,64,34,15);
 const panorama=new THREE.CanvasTexture(canvas);panorama.colorSpace=THREE.SRGBColorSpace;panorama.mapping=THREE.EquirectangularReflectionMapping;
 const filter=new THREE.PMREMGenerator(renderer),environment=filter.fromEquirectangular(panorama);filter.dispose();panorama.dispose();return environment;
}
