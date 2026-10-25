import * as THREE from './vendor/three.module.js';

// Bake only immutable, opaque scenery. Interactive subtrees keep their own meshes
// and hit targets; batched scenery still occludes them through its normal raycast.
export function batchStaticScenery(root,{exclude=[]}={}){
 const excluded=new Set(exclude),buckets=new Map(),sources=new Set(),point=new THREE.Vector3(),normal=new THREE.Vector3(),normalMatrix=new THREE.Matrix3();
 root.updateWorldMatrix(true,true);const inverseRoot=root.matrixWorld.clone().invert();
 function visit(object){
  if(!object.visible||excluded.has(object)||object.userData.chargingAction||object.userData.keyAction||Number.isInteger(object.userData.hoistIndex)||Number.isInteger(object.userData.valveIndex))return;
  if(object.isMesh&&!object.isInstancedMesh&&!object.isSkinnedMesh&&!object.children.length){
   const g=object.geometry,m=object.material,attrs=g.attributes;
   if(m&&!Array.isArray(m)&&!m.transparent&&!g.morphAttributes.position&&g.drawRange.start===0&&g.drawRange.count===Infinity&&attrs.position&&Object.keys(attrs).every(k=>['position','normal','uv'].includes(k))){
    object.getWorldPosition(point);const cell=`${Math.floor(point.x/3)},${Math.floor(point.z/3)}`;
    const key=[m.uuid,object.castShadow,object.receiveShadow,object.renderOrder,Object.keys(attrs).sort().join(','),cell].join('|');
    if(!buckets.has(key))buckets.set(key,[]);buckets.get(key).push(object);
   }
  }
  for(const child of object.children)visit(child);
 }
 visit(root);let removed=0,batches=0;
 for(const objects of buckets.values()){
  if(objects.length<3)continue;
  const names=Object.keys(objects[0].geometry.attributes),vertices=objects.reduce((n,o)=>n+o.geometry.attributes.position.count,0),indices=objects.reduce((n,o)=>n+(o.geometry.index?.count||o.geometry.attributes.position.count),0);
  const geometry=new THREE.BufferGeometry(),arrays={};
  for(const name of names){const itemSize=objects[0].geometry.attributes[name].itemSize;arrays[name]=new Float32Array(vertices*itemSize);geometry.setAttribute(name,new THREE.BufferAttribute(arrays[name],itemSize));}
  const index=new Uint32Array(indices);let vertexOffset=0,indexOffset=0;
  for(const object of objects){
   const g=object.geometry,transform=new THREE.Matrix4().multiplyMatrices(inverseRoot,object.matrixWorld);normalMatrix.getNormalMatrix(transform);
   for(let i=0;i<g.attributes.position.count;i++){
    point.fromBufferAttribute(g.attributes.position,i).applyMatrix4(transform);point.toArray(arrays.position,(vertexOffset+i)*3);
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
  const first=objects[0],batch=new THREE.Mesh(geometry,first.material);batch.name='Batched static office scenery';batch.castShadow=first.castShadow;batch.receiveShadow=first.receiveShadow;batch.renderOrder=first.renderOrder;batch.matrixAutoUpdate=false;root.add(batch);batches++;
 }
 const stillUsed=new Set();root.traverse(o=>{if(o.geometry)stillUsed.add(o.geometry);});for(const g of sources)if(!stillUsed.has(g))g.dispose();
 return {removed,batches};
}
