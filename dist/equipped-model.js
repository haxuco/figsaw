import * as THREE from './vendor/three.module.js';
import {cloneInventoryModel,frameInventoryModel} from './inventory-models.js';

export function createEquippedModel({camera,getModel}){
 const group=new THREE.Group();group.name='Camera-relative equipped item';group.userData.ignoreAcid=group.userData.ignoreFloorContact=true;group.visible=false;
 const cache=new Map(),point=new THREE.Vector3();let current=null;
 const sizes={key:.45,mobileKit:.72,mobile:.8,ratchet:.85,caster:.65,charger:.85};
 function load(id){
  if(cache.has(id))return cache.get(id);
  const definition=getModel(id);if(!definition?.object)return null;
  const model=frameInventoryModel(cloneInventoryModel(definition.object),definition.rotation);
  model.traverse(o=>{
   o.raycast=()=>{};o.renderOrder=120;
   for(const m of o.material?(Array.isArray(o.material)?o.material:[o.material]):[]){
    m.depthTest=false;m.depthWrite=false;m.transparent=true;
    if(m.emissive&&m.color){
     m.emissive.setRGB(Math.max(m.color.r,.06),Math.max(m.color.g,.06),Math.max(m.color.b,.06)).multiplyScalar(.28);m.emissiveIntensity=.8;m.emissiveMap=m.map;
     // Mobile batches store the rubber/metal colours per vertex, not on the
     // shared white material. Preserve those colours in the soft equipment fill.
     if(m.vertexColors){m.onBeforeCompile=shader=>{shader.fragmentShader=shader.fragmentShader.replace('#include <emissivemap_fragment>','#include <emissivemap_fragment>\n#ifdef USE_COLOR\ntotalEmissiveRadiance *= max(vColor.rgb, vec3(0.06));\n#endif');};m.customProgramCacheKey=()=> 'equipped-vertex-fill';}
    }
   }
  });model.visible=false;group.add(model);cache.set(id,model);return model;
 }
 function update(id,time=0,visible=true){
  // The axe already has a pickup/swing animation using its real world model.
  if(!visible||!id||id==='axe'){group.visible=false;return;}
  const model=load(id);if(!model){group.visible=false;return;}
  if(current!==model){if(current)current.visible=false;current=model;model.visible=true;}
  camera.updateWorldMatrix(true,false);
  const halfHeight=.70*Math.tan(THREE.MathUtils.degToRad(camera.fov/2)),halfWidth=halfHeight*camera.aspect;
  point.set(halfWidth*.55,-halfHeight*.56,-.70).applyMatrix4(camera.matrixWorld);group.position.copy(point);group.quaternion.copy(camera.quaternion);
  group.scale.setScalar(.17*halfHeight/.42*Math.min(1,camera.aspect/1.1)*(sizes[id]??1));
  group.visible=true;group.updateWorldMatrix(false,true);
 }
 return{group,update,get current(){return current;},get cachedCount(){return cache.size;}};
}
