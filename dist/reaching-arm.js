import * as THREE from './vendor/three.module.js';

// Two fixed limb lengths with an outward/downward elbow pole.
export function solveReachElbow(shoulder,wrist,elbow,upperLength=.43,foreLength=.49){
 const axis=new THREE.Vector3().subVectors(wrist,shoulder),distance=axis.length();
 axis.normalize();
 if(distance>upperLength+foreLength-.015)shoulder.addScaledVector(axis,distance-(upperLength+foreLength-.015));
 const d=Math.max(.001,shoulder.distanceTo(wrist));
 const along=THREE.MathUtils.clamp((upperLength*upperLength-foreLength*foreLength+d*d)/(2*d),-upperLength,upperLength);
 const pole=new THREE.Vector3(.55,-1,.08).addScaledVector(axis,-new THREE.Vector3(.55,-1,.08).dot(axis)).normalize();
 elbow.copy(shoulder).addScaledVector(axis,along).addScaledVector(pole,Math.sqrt(Math.max(0,upperLength*upperLength-along*along)));
 return elbow;
}

// A swept volume bends into the wrist. It never stretches a skinny cylinder.
export function createReachingForearm(skin,ink){
 const rings=20,sides=28,geometry=new THREE.BufferGeometry(),vertices=new Float32Array((rings+1)*(sides+1)*3),indices=[];
 for(let j=1;j<=rings;j++)for(let i=1;i<=sides;i++){const b=j*(sides+1)+i;indices.push(b,b-sides-2,b-1,b,b-sides-1,b-sides-2);}
 geometry.setAttribute('position',new THREE.BufferAttribute(vertices,3).setUsage(THREE.DynamicDrawUsage));geometry.setIndex(indices);
 const mesh=new THREE.Mesh(geometry,skin);mesh.name='Full curved forearm';mesh.castShadow=mesh.receiveShadow=true;mesh.frustumCulled=false;
 const shellGeometry=geometry.clone(),shell=new THREE.Mesh(shellGeometry,ink);shell.name='Forearm ink silhouette';shell.raycast=()=>{};shell.frustumCulled=false;mesh.add(shell);
 const curve=new THREE.CubicBezierCurve3(),back=new THREE.Vector3(),center=new THREE.Vector3(),tangent=new THREE.Vector3(),xAxis=new THREE.Vector3(),yAxis=new THREE.Vector3(),handX=new THREE.Vector3(),point=new THREE.Vector3();
 const profile=[[0,.076,.061],[.18,.081,.063],[.4,.073,.055],[.65,.059,.043],[.8,.047,.033],[1,.038,.026]];
 function update(elbow,wrist,rotation){
  back.set(0,0,1).applyQuaternion(rotation);
  curve.v0.copy(elbow);curve.v1.lerpVectors(elbow,wrist,.31);curve.v1.x+=.018;
  // The last 7.5 cm follow the hand's axis, giving the cuff a stable wrist
  // section. Bend behind the band, rather than sweeping flesh through it.
  curve.v3.copy(wrist).addScaledVector(back,.075);
  curve.v2.copy(curve.v3).addScaledVector(back,.065);
  handX.set(1,0,0).applyQuaternion(rotation);
  for(let j=0;j<=rings;j++){
   const t=j/rings;
   if(t<.8){curve.getPoint(t/.8,center);curve.getTangent(t/.8,tangent);}
   else{center.copy(wrist).addScaledVector(back,.075*(1-t)/.2);tangent.copy(back).negate();}
   xAxis.copy(handX).addScaledVector(tangent,-handX.dot(tangent)).normalize();yAxis.crossVectors(xAxis,tangent).normalize();
   const end=profile.findIndex(p=>p[0]>=t),a=profile[Math.max(0,end-1)],b=profile[end],blend=a===b?0:THREE.MathUtils.smoothstep(t,a[0],b[0]);
   const rx=THREE.MathUtils.lerp(a[1],b[1],blend),ry=THREE.MathUtils.lerp(a[2],b[2],blend);
   for(let i=0;i<=sides;i++){const angle=i/sides*Math.PI*2;point.copy(center).addScaledVector(xAxis,Math.cos(angle)*rx).addScaledVector(yAxis,Math.sin(angle)*ry);point.toArray(vertices,(j*(sides+1)+i)*3);}
  }
  geometry.attributes.position.needsUpdate=true;geometry.computeVertexNormals();
  const normal=geometry.attributes.normal,p=shellGeometry.attributes.position;
  for(let i=0;i<p.count;i++)p.setXYZ(i,vertices[i*3]+normal.getX(i)*.0015,vertices[i*3+1]+normal.getY(i)*.0015,vertices[i*3+2]+normal.getZ(i)*.0015);
  p.needsUpdate=true;
 }
 return {mesh,update};
}
