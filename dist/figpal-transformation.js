import * as THREE from './vendor/three.module.js';
import { createFigpalSkeleton } from './bone-models.js?v=figpal-identity';

export function createFigpalTransformation(captive,index){
 const skeleton=createFigpalSkeleton(index);skeleton.position.copy(captive.position);skeleton.quaternion.copy(captive.quaternion);skeleton.scale.copy(captive.scale);captive.parent.add(skeleton);
 captive.updateWorldMatrix(true,true);
 const inverse=captive.matrixWorld.clone().invert(),bounds=new THREE.Box3(),localBox=new THREE.Box3();
 captive.traverse(object=>{if(!object.isMesh)return;object.geometry.computeBoundingBox();localBox.copy(object.geometry.boundingBox).applyMatrix4(new THREE.Matrix4().multiplyMatrices(inverse,object.matrixWorld));bounds.union(localBox);});
 const skinPlane=new THREE.Plane(),bonePlane=new THREE.Plane();
 function clipMaterials(root,plane){
  const clones=new Map();
  root.traverse(object=>{
   if(!object.isMesh)return;
   const clone=material=>{
    if(!clones.has(material)){
     const copy=material.clone();copy.onBeforeCompile=material.onBeforeCompile;copy.customProgramCacheKey=material.customProgramCacheKey;
     copy.clippingPlanes=[plane];copy.clipShadows=true;clones.set(material,copy);
    }
    return clones.get(material);
   };
   object.material=Array.isArray(object.material)?object.material.map(clone):clone(object.material);
  });
 }
 clipMaterials(captive,skinPlane);clipMaterials(skeleton,bonePlane);
 let cut=bounds.min.y-.04,transformed=false;const waterPoint=new THREE.Vector3();
 function update(waterHeight){
  captive.updateWorldMatrix(true,false);
  waterPoint.setFromMatrixPosition(captive.matrixWorld);waterPoint.y=waterHeight;captive.worldToLocal(waterPoint);
  // Retain the deepest exposure: raising the hoist does not restore dissolved parts.
  cut=Math.max(cut,Math.min(bounds.max.y+.04,waterPoint.y));
  skinPlane.set(new THREE.Vector3(0,1,0),-cut).applyMatrix4(captive.matrixWorld);bonePlane.copy(skinPlane).negate();
  transformed=cut>=bounds.max.y+.015;
  captive.visible=!transformed;skeleton.visible=cut>bounds.min.y;
 }
 update(-100);
 function reset(){cut=bounds.min.y-.04;transformed=false;update(-100);}
 return {skeleton,update,reset,attachBoneDetail(object){clipMaterials(object,bonePlane);skeleton.add(object);},get transformed(){return transformed;},get cutHeight(){return cut;}};
}
