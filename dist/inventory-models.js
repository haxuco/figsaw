import * as THREE from './vendor/three.module.js';

// Borrow geometry/textures, but isolate transforms and materials from the world.
// Collected objects are hidden in the room; invisible pick volumes are not models.
export function cloneInventoryModel(source,materials=new Map()){
 function copy(object,root=false){
  if(!root&&!object.visible)return null;
  const sourceMaterials=object.material?(Array.isArray(object.material)?object.material:[object.material]):[];
  if(sourceMaterials.length&&sourceMaterials.every(m=>!m.visible||m.colorWrite===false||m.opacity===0))return null;
  if(object.isLight)return null;
  const cloned=object.clone(false);cloned.userData={};cloned.visible=true;cloned.castShadow=cloned.receiveShadow=false;
  if(object.material){
   const isolate=material=>{
    if(!materials.has(material)){
     const m=material.clone();m.clippingPlanes=null;
     materials.set(material,m);
    }
    return materials.get(material);
   };
   cloned.material=Array.isArray(object.material)?object.material.map(isolate):isolate(object.material);
  }
  for(const child of object.children){const c=copy(child);if(c)cloned.add(c);}
  return cloned;
 }
 const model=copy(source,true);
 model.matrixAutoUpdate=true;model.position.set(0,0,0);model.quaternion.identity();model.scale.set(1,1,1);model.updateMatrix();
 return model;
}

export function frameInventoryModel(model,rotation=[0,0,0]){
 const pose=new THREE.Group();pose.rotation.set(...rotation);pose.add(model);pose.updateMatrixWorld(true);
 const bounds=new THREE.Box3().setFromObject(pose),size=bounds.getSize(new THREE.Vector3());
 const center=bounds.getCenter(new THREE.Vector3()),extent=Math.max(size.x/1.35,size.y,size.z*.5,.001);
 const centered=new THREE.Group();centered.add(pose);pose.position.sub(center);centered.scale.setScalar(1.65/extent);
 centered.updateMatrixWorld(true);return centered;
}

export function createInventoryModelPreviews({renderer,getModel}){
 const cache=new Map(),pending=new Map(),materials=new Map();let target=null,busy=false,generation=0;
 const width=256,height=192,pixels=new Uint8Array(width*height*4);
 const scene=new THREE.Scene(),camera=new THREE.OrthographicCamera(-1.35,1.35,1,-1,.1,20);
 camera.position.z=6;camera.lookAt(0,0,0);
 scene.add(new THREE.HemisphereLight(0xf1f3ec,0x727b70,1.05));
 for(const [position,intensity]of[[[2,3,5],1.75],[[-3,1,2],1.05],[[0,2,-3],1.4]]){
  const light=new THREE.DirectionalLight(0xffffff,intensity);light.position.set(...position);scene.add(light);
 }
 function attach(id,host){
  const ready=cache.get(id);if(ready){host.replaceChildren(ready);return;}
  pending.set(id,host);
 }
 const visible=host=>host.isConnected&&host.closest('#inventory-panel')?.hidden===false;
 function withPreviewState(work){
  const previous={target:renderer.getRenderTarget(),color:renderer.getClearColor(new THREE.Color()),alpha:renderer.getClearAlpha(),exposure:renderer.toneMappingExposure,shadows:renderer.shadowMap.enabled,autoClear:renderer.autoClear};
  try{
   renderer.shadowMap.enabled=false;renderer.toneMappingExposure=1.05;renderer.autoClear=true;
   renderer.setRenderTarget(target);renderer.setClearColor(0x000000,0);
   return work();
  }finally{
   // Restore immediately, before any async compilation/readback yields to the
   // main scene. Its camera, shadows and render target must never inherit ours.
   renderer.setRenderTarget(previous.target);renderer.setClearColor(previous.color,previous.alpha);
   renderer.toneMappingExposure=previous.exposure;renderer.shadowMap.enabled=previous.shadows;renderer.autoClear=previous.autoClear;
  }
 }
 async function draw(id,host,request){
  let model;
  try{
   const definition=getModel(id);if(!definition?.object)return;
   model=frameInventoryModel(cloneInventoryModel(definition.object,materials),definition.rotation);
   scene.add(model);
   target??=new THREE.WebGLRenderTarget(width,height,{depthBuffer:true,stencilBuffer:false});
   target.texture.colorSpace=THREE.SRGBColorSpace;
   if(renderer.compileAsync)await withPreviewState(()=>renderer.compileAsync(scene,camera));
   if(request!==generation)return;
   if(!visible(host)){if(host.isConnected&&!pending.has(id))pending.set(id,host);return;}
   await withPreviewState(()=>{
    renderer.render(scene,camera);
    // WebGL2 fences let the browser keep drawing while the thumbnail finishes.
    return renderer.readRenderTargetPixelsAsync(target,0,0,width,height,pixels);
   });
   if(request!==generation)return;
   const canvas=document.createElement('canvas');canvas.width=width;canvas.height=height;canvas.setAttribute('aria-hidden','true');
   const context=canvas.getContext('2d'),image=context.createImageData(width,height),row=width*4;
   for(let y=0;y<height;y++)image.data.set(pixels.subarray((height-y-1)*row,(height-y)*row),y*row);
   context.putImageData(image,0,0);cache.set(id,canvas);
   const destination=pending.get(id)??host;pending.delete(id);
   if(destination.isConnected)destination.replaceChildren(canvas);
  }catch(error){
   // A lost graphics context must not turn an optional thumbnail into a game
   // error. Reopening the inventory can retry it after context recovery.
   if(!renderer.getContext?.().isContextLost())console.warn('Inventory preview unavailable:',id,error);
  }finally{
   if(model){scene.remove(model);model.traverse(o=>{if(o.isInstancedMesh)o.dispose();});}
   busy=false;
  }
 }
 function update(){
  // One in-flight job; cached materials keep their GPU programs between cards.
  if(busy)return;
  const entry=[...pending].find(([,host])=>host.isConnected&&host.closest('#inventory-panel')?.hidden===false);
  if(!entry)return;
  const [id,host]=entry;pending.delete(id);
  busy=true;return draw(id,host,generation);
 }
 return {attach,update,clearPending(){pending.clear();generation++;}};
}
