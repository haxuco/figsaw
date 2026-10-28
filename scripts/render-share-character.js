import * as THREE from '../dist/vendor/three.module.js';

// Asset-authoring only: render the game's real character once, rather than
// allocating another WebGL scene or context on visitors' game-over screens.
export function renderShareCharacter(renderer,source,{puppetIndex,jawIndex,riderSeatY}){
 const materials=new Map(),subject=source.clone(true);
 subject.traverse(o=>{
  o.castShadow=o.receiveShadow=false;
  if(!o.material)return;
  const copy=m=>{if(!materials.has(m)){const n=m.clone();n.onBeforeCompile=m.onBeforeCompile;n.customProgramCacheKey=m.customProgramCacheKey;n.clippingPlanes=null;materials.set(m,n);}return materials.get(m);};
  o.material=Array.isArray(o.material)?o.material.map(copy):copy(o.material);
 });
 subject.position.set(0,0,0);subject.rotation.set(0,0,0);subject.scale.setScalar(1);
 const rider=subject.children[puppetIndex];rider.rotation.set(0,0,0);rider.position.y=riderSeatY;rider.children[jawIndex].position.y=0;
 subject.updateMatrixWorld(true);
 const bounds=new THREE.Box3().setFromObject(subject,true),center=bounds.getCenter(new THREE.Vector3()),height=bounds.max.y-bounds.min.y;
 const root=new THREE.Group();root.add(subject);subject.position.sub(center);root.scale.setScalar(1.78/height);
 const scene=new THREE.Scene();scene.add(root,new THREE.HemisphereLight(0xd8e6dc,0x44523e,2.1));
 for(const [pos,color,power]of[[[3,4,6],0xffffff,3.2],[[-4,1,3],0xabbba9,1.5],[[2,3,-3],0xff3434,4.0]]){const light=new THREE.DirectionalLight(color,power);light.position.set(...pos);scene.add(light);}
 const camera=new THREE.OrthographicCamera(-1.05,1.05,1.05,-1.05,.1,20);camera.position.set(2.8,1.0,6);camera.lookAt(0,0,0);camera.updateMatrixWorld();
 const width=800,heightPx=800,target=new THREE.WebGLRenderTarget(width,heightPx,{depthBuffer:true,stencilBuffer:false});target.texture.colorSpace=THREE.SRGBColorSpace;
 const pixels=new Uint8Array(width*heightPx*4),previous={target:renderer.getRenderTarget(),color:renderer.getClearColor(new THREE.Color()),alpha:renderer.getClearAlpha(),exposure:renderer.toneMappingExposure,shadows:renderer.shadowMap.enabled,autoClear:renderer.autoClear};
 try{
  renderer.shadowMap.enabled=false;renderer.toneMappingExposure=1;renderer.autoClear=true;renderer.setRenderTarget(target);renderer.setClearColor(0x000000,0);renderer.render(scene,camera);renderer.readRenderTargetPixels(target,0,0,width,heightPx,pixels);
  const canvas=document.createElement('canvas');canvas.width=width;canvas.height=heightPx;const ctx=canvas.getContext('2d'),image=ctx.createImageData(width,heightPx),row=width*4;
  for(let y=0;y<heightPx;y++)image.data.set(pixels.subarray((heightPx-y-1)*row,(heightPx-y)*row),y*row);
  ctx.putImageData(image,0,0);return canvas;
 }finally{
  renderer.setRenderTarget(previous.target);renderer.setClearColor(previous.color,previous.alpha);renderer.toneMappingExposure=previous.exposure;renderer.shadowMap.enabled=previous.shadows;renderer.autoClear=previous.autoClear;target.dispose();materials.forEach(m=>m.dispose());subject.traverse(o=>{if(o.isInstancedMesh)o.dispose();});
 }
}
