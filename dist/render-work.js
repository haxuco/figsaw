import * as THREE from './vendor/three.module.js';

// Click volumes belong to the input ray, not the color or shadow passes.
export const PICK_LAYER=1;
export function separatePickVolumes(scene){
 let count=0;
 scene.traverse(object=>{
  if(!object.isMesh)return;
  const materials=Array.isArray(object.material)?object.material:[object.material];
  if(materials.length&&materials.every(m=>m&&m.colorWrite===false&&m.depthWrite===false)){
   object.layers.disable(0);object.layers.enable(PICK_LAYER);object.castShadow=false;count++;
  }
 });
 return count;
}

// Startup prepares visible surfaces, including those reached by panning. Later
// batches can opt into specific hidden effects. This compile view borrows the
// meshes without reparenting them or allocating copies of their geometry.
export async function prepareSceneMaterials(renderer,scene,camera,{roots=[scene],includeHidden=false,batchSize=Infinity}={}){
 if(!renderer.compileAsync)return;
 const surfaces=[],textures=new Set();
 const collect=object=>{
  if(!(object.isMesh||object.isPoints||object.isLine||object.isSprite)||!object.layers.test(camera.layers))return;
  const materials=Array.isArray(object.material)?object.material:[object.material];
  if(materials.some(m=>m&&m.visible!==false&&m.colorWrite!==false)){
   surfaces.push(object);
  }
 };
 for(const root of roots)root[includeHidden?'traverse':'traverseVisible'](collect);
 // Upload in small batches while shader linking runs in parallel. Otherwise
 // all canvas/image textures get uploaded in the first playable frame.
 async function uploadTextures(batch){
  if(!renderer.initTexture)return;
  let start=performance.now();
  for(const object of batch)for(const material of Array.isArray(object.material)?object.material:[object.material]){
   if(!material)continue;
   for(const texture of Object.values(material))if(texture?.isTexture&&!texture.isRenderTargetTexture&&!textures.has(texture)){
    textures.add(texture);renderer.initTexture(texture);
    if(performance.now()-start>6){await new Promise(resolve=>setTimeout(resolve,0));start=performance.now();}
   }
  }
 }
 for(let index=0;index<surfaces.length;index+=batchSize){
  if(renderer.getContext?.().isContextLost())return;
  const batch=surfaces.slice(index,index+batchSize),preparation=new THREE.Group();
  preparation.traverse=visit=>batch.forEach(visit);
  preparation.traverseVisible=()=>{}; // Lighting comes from the real scene.
  await Promise.all([renderer.compileAsync(preparation,camera,scene),uploadTextures(batch)]);
  if(index+batchSize<surfaces.length)await new Promise(resolve=>setTimeout(resolve,32));
 }
}

// Keep both shadow maps, but stagger their refreshes instead of redrawing the
// entire room twice in the same frame. Light flicker does not change shadow shape.
export function createShadowScheduler(renderer,lights,hz){
 const casters=lights.filter(light=>light.castShadow);let last=-Infinity,next=0,initialized=false;
 for(const light of casters)light.shadow.autoUpdate=false;
 return {update(time){
  if(!renderer.shadowMap.enabled||!casters.length)return false;
  if(time<last)initialized=false;
  if(initialized&&time-last<1/hz)return false;
  last=time;renderer.shadowMap.needsUpdate=true;
  if(!initialized){for(const light of casters)light.shadow.needsUpdate=true;initialized=true;}
  else{casters[next].shadow.needsUpdate=true;next=(next+1)%casters.length;}
  return true;
 }};
}
