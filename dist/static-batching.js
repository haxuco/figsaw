import * as THREE from './vendor/three.module.js';

// Bake only immutable, opaque scenery. Interactive subtrees keep their own meshes
// and hit targets; batched scenery still occludes them through its normal raycast.
export function batchStaticScenery(root,{exclude=[],minObjects=3,allowInteractiveRoot=false,dispose=true,palette=false}={}){
 const materialKeys=new Map();
 const excluded=new Set(exclude),buckets=new Map(),sources=new Set(),point=new THREE.Vector3(),normal=new THREE.Vector3(),normalMatrix=new THREE.Matrix3();
 root.updateWorldMatrix(true,true);const inverseRoot=root.matrixWorld.clone().invert();
 function paletteKey(m){
  if(!palette||m.isMeshPhysicalMaterial||m.vertexColors||m.clippingPlanes?.length||!m.color)return null;
  if(!materialKeys.has(m)){
   const fields=['type','roughness','metalness','opacity','alphaTest','side','blending','depthWrite','depthTest','colorWrite','flatShading','toneMapped','polygonOffset','polygonOffsetFactor','polygonOffsetUnits','emissiveIntensity','envMapIntensity','fog','dithering','premultipliedAlpha','reflectivity','shininess','wireframe'];
   const key=fields.map(k=>m[k]).concat(m.emissive?.getHex(),m.specular?.getHex(),m.customProgramCacheKey());
   for(const k of ['map','alphaMap','aoMap','bumpMap','normalMap','roughnessMap','metalnessMap','emissiveMap','envMap','lightMap'])key.push(m[k]?.uuid);
   materialKeys.set(m,JSON.stringify(key));
  }
  return materialKeys.get(m);
 }
 function visit(object){
  if(!object.visible||excluded.has(object)||(!(object===root&&allowInteractiveRoot)&&(Number.isInteger(object.userData.rescueChair)||object.userData.salvagePart||object.userData.chargingAction||object.userData.keyAction||Number.isInteger(object.userData.hoistIndex)||Number.isInteger(object.userData.valveIndex))))return;
  if(object.isMesh&&!object.isInstancedMesh&&!object.isSkinnedMesh&&!object.children.length){
   const g=object.geometry,m=object.material,attrs=g.attributes;
   if(m&&!Array.isArray(m)&&!m.transparent&&!g.morphAttributes.position&&g.drawRange.start===0&&g.drawRange.count===Infinity&&attrs.position&&Object.keys(attrs).every(k=>['position','normal','uv'].includes(k))){
    object.getWorldPosition(point);const cell=`${Math.floor(point.x/3)},${Math.floor(point.z/3)}`;
    const key=[paletteKey(m)||m.uuid,object.castShadow,object.receiveShadow,object.renderOrder,Object.keys(attrs).sort().join(','),cell].join('|');
    if(!buckets.has(key))buckets.set(key,[]);buckets.get(key).push(object);
   }
  }
  for(const child of object.children)visit(child);
 }
 visit(root);let removed=0,batches=0;
 for(const objects of buckets.values()){
  if(objects.length<minObjects)continue;
  const names=Object.keys(objects[0].geometry.attributes),vertices=objects.reduce((n,o)=>n+o.geometry.attributes.position.count,0),indices=objects.reduce((n,o)=>n+(o.geometry.index?.count||o.geometry.attributes.position.count),0);
  const geometry=new THREE.BufferGeometry(),arrays={};
  for(const name of names){const itemSize=objects[0].geometry.attributes[name].itemSize;arrays[name]=new Float32Array(vertices*itemSize);geometry.setAttribute(name,new THREE.BufferAttribute(arrays[name],itemSize));}
  const colored=!!paletteKey(objects[0].material);
  if(colored){arrays.color=new Float32Array(vertices*3);geometry.setAttribute('color',new THREE.BufferAttribute(arrays.color,3));}
  const index=vertices<=65535?new Uint16Array(indices):new Uint32Array(indices);let vertexOffset=0,indexOffset=0;
  for(const object of objects){
   const g=object.geometry,transform=new THREE.Matrix4().multiplyMatrices(inverseRoot,object.matrixWorld);normalMatrix.getNormalMatrix(transform);
   for(let i=0;i<g.attributes.position.count;i++){
    point.fromBufferAttribute(g.attributes.position,i).applyMatrix4(transform);point.toArray(arrays.position,(vertexOffset+i)*3);
    if(colored)object.material.color.toArray(arrays.color,(vertexOffset+i)*3);
    if(arrays.normal){normal.fromBufferAttribute(g.attributes.normal,i).applyMatrix3(normalMatrix).normalize();normal.toArray(arrays.normal,(vertexOffset+i)*3);}
    if(arrays.uv){arrays.uv[(vertexOffset+i)*2]=g.attributes.uv.getX(i);arrays.uv[(vertexOffset+i)*2+1]=g.attributes.uv.getY(i);}
   }
   const count=g.index?.count||g.attributes.position.count;
   for(let i=0;i<count;i++)index[indexOffset++]=vertexOffset+(g.index?g.index.getX(i):i);
   // Mirrored transforms reverse triangle winding when baked into vertices.
   if(transform.determinant()<0)for(let i=indexOffset-count;i<indexOffset;i+=3){const temp=index[i+1];index[i+1]=index[i+2];index[i+2]=temp;}
   vertexOffset+=g.attributes.position.count;sources.add(g);object.removeFromParent();removed++;
  }
  geometry.setIndex(new THREE.BufferAttribute(index,1));geometry.computeBoundingBox();geometry.computeBoundingSphere();
  const first=objects[0];let material=first.material;if(colored){material=first.material.clone();material.onBeforeCompile=first.material.onBeforeCompile;material.customProgramCacheKey=first.material.customProgramCacheKey;material.color.setHex(0xffffff);material.vertexColors=true;}const batch=new THREE.Mesh(geometry,material);batch.name='Batched static office scenery';batch.castShadow=first.castShadow;batch.receiveShadow=first.receiveShadow;batch.renderOrder=first.renderOrder;batch.matrixAutoUpdate=false;root.add(batch);batches++;
 }
 const stillUsed=new Set();root.traverse(o=>{if(o.geometry)stillUsed.add(o.geometry);});for(const g of sources)if(dispose&&!stillUsed.has(g))g.dispose();
 return {removed,batches};
}
