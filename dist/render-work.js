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
