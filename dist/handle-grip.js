import * as THREE from './vendor/three.module.js';

// A smooth, joint-like curl along each digit, instead of rotating a rigid finger
// backward at its knuckle. Morph targets also restore the flat laptop pose.
export function addHandleCurl(mesh,length){
 const geometry=mesh.geometry,position=geometry.attributes.position;
 const target=geometry.clone(),p=target.attributes.position,k=1.9/length;
 for(let i=0;i<p.count;i++){
  const x=position.getX(i),y=position.getY(i),z=position.getZ(i),a=Math.max(0,-z)*k;
  if(z>=0)continue;
  p.setXYZ(i,x,y*Math.cos(a)-(1-Math.cos(a))/k,-Math.sin(a)/k-y*Math.sin(a));
 }
 target.computeVertexNormals();
 geometry.morphAttributes.position=[p];geometry.morphAttributes.normal=[target.attributes.normal];mesh.updateMorphTargets();
 const shell=mesh.children.find(child=>child.name==='Ink silhouette');
 if(shell){
  const edge=p.clone(),normal=target.attributes.normal;
  for(let i=0;i<edge.count;i++)edge.setXYZ(i,p.getX(i)+normal.getX(i)*.002,p.getY(i)+normal.getY(i)*.002,p.getZ(i)+normal.getZ(i)*.002);
  shell.geometry.morphAttributes.position=[edge];shell.updateMorphTargets();
 }
 return amount=>{mesh.morphTargetInfluences[0]=THREE.MathUtils.clamp(amount,0,1);if(shell)shell.morphTargetInfluences[0]=mesh.morphTargetInfluences[0];};
}
