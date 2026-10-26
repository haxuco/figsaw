import * as THREE from './vendor/three.module.js';

// The visible concrete grime and carpet tops are the support surfaces.
export function createFloorSupport(patches=[]){
 // Most vertices lie over bare concrete. Index the small carpet rectangles once
 // instead of applying every inverse matrix for every floor/prop vertex.
 const cells=new Map(),cellSize=.75;
 for(const p of patches){
  p.updateWorldMatrix(true,false);
  const r={inverse:p.matrixWorld.clone().invert().elements,width:p.geometry.parameters.width/2,depth:p.geometry.parameters.depth/2,top:p.getWorldPosition(new THREE.Vector3()).y+p.geometry.parameters.height/2};
  const bounds=new THREE.Box3().setFromObject(p);
  for(let x=Math.floor(bounds.min.x/cellSize);x<=Math.floor(bounds.max.x/cellSize);x++)for(let z=Math.floor(bounds.min.z/cellSize);z<=Math.floor(bounds.max.z/cellSize);z++){
   const key=`${x},${z}`;if(!cells.has(key))cells.set(key,[]);cells.get(key).push(r);
  }
 }
 return (x,z)=>{
  let height=.003;
  const candidates=cells.get(`${Math.floor(x/cellSize)},${Math.floor(z/cellSize)}`);
  if(candidates)for(const r of candidates){const m=r.inverse;if(Math.abs(m[0]*x+m[8]*z+m[12])<=r.width&&Math.abs(m[2]*x+m[10]*z+m[14])<=r.depth)height=Math.max(height,r.top);}
  return height;
 };
}

export function floorClearance(root,support){
 root.updateWorldMatrix(true,true);
 let minimum=Infinity;
 const vertex=new THREE.Vector3(),instance=new THREE.Matrix4(),world=new THREE.Matrix4();
 function visit(object){
  if(object.userData.ignoreFloorContact)return;
  const positions=object.isMesh&&object.geometry.attributes.position;
  if(positions){
   for(let n=0;n<(object.isInstancedMesh?object.count:1);n++){
    if(object.isInstancedMesh){object.getMatrixAt(n,instance);world.multiplyMatrices(object.matrixWorld,instance);}else world.copy(object.matrixWorld);
    for(let i=0;i<positions.count;i++){vertex.fromBufferAttribute(positions,i).applyMatrix4(world);minimum=Math.min(minimum,vertex.y-support(vertex.x,vertex.z));}
   }
  }
  for(const child of object.children)visit(child);
 }
 visit(root);return minimum;
}

export function settleOnFloor(root,support=()=>.003){
 const gap=floorClearance(root,support);
 if(!Number.isFinite(gap))return root;
 const position=root.getWorldPosition(new THREE.Vector3());position.y+=.0006-gap;
 if(root.parent)root.parent.worldToLocal(position);
 root.position.copy(position);root.updateWorldMatrix(false,true);root.userData.floorProp=true;
 return root;
}

// Move each low tube ring intact, so cords retain their round cross-section.
export function drapeFloorCable(cable,support){
 cable.updateWorldMatrix(true,false);
 const geometry=cable.geometry,p=geometry.attributes.position,radial=geometry.parameters.radialSegments+1;
 const inverse=cable.matrixWorld.clone().invert(),center=new THREE.Vector3(),v=new THREE.Vector3();
 const radius=geometry.parameters.radius;
 for(let ring=0;ring<p.count;ring+=radial){
  center.set(0,0,0);for(let j=0;j<radial-1;j++)center.add(v.fromBufferAttribute(p,ring+j).applyMatrix4(cable.matrixWorld));center.divideScalar(radial-1);
  const floor=support(center.x,center.z),weight=1-THREE.MathUtils.smoothstep(center.y-floor,.055,.15);
  const startWeight=cable.userData.anchorStart?THREE.MathUtils.smoothstep(ring/radial,0,3):1;
  const endWeight=cable.userData.anchorEnd?THREE.MathUtils.smoothstep((p.count-radial-ring)/radial,0,3):1;
  const shift=(floor+radius+.0006-center.y)*weight*startWeight*endWeight;
  for(let j=0;j<radial;j++){v.fromBufferAttribute(p,ring+j).applyMatrix4(cable.matrixWorld);v.y+=shift;v.applyMatrix4(inverse);p.setXYZ(ring+j,v.x,v.y,v.z);}
 }
 p.needsUpdate=true;geometry.computeVertexNormals();geometry.computeBoundingBox();geometry.computeBoundingSphere();
}
