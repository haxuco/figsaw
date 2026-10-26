import * as THREE from './vendor/three.module.js';
import {renderQuality} from './render-quality.js';

// Cut actual triangles out of the cylindrical glass; reflections cannot fill the hole.
export function brokenGlassGeometry(radius){
 const g=new THREE.CylinderGeometry(radius,radius,1.02,48,26,true),pos=g.attributes.position,keep=[];
 for(let i=0;i<g.index.count;i+=3){
  let x=0,y=0,z=0;for(let k=0;k<3;k++){const j=g.index.getX(i+k);x+=pos.getX(j)/3;y+=pos.getY(j)/3;z+=pos.getZ(j)/3;}
  const angle=Math.atan2(x,z),a=Math.atan2((y+.015)/.29,angle/.61),edge=1+.13*Math.sin(a*9)+.08*Math.cos(a*13);
  if((angle/.61)**2+((y+.015)/.29)**2>edge**2)for(let k=0;k<3;k++)keep.push(g.index.getX(i+k));
 }
 g.setIndex(keep);g.computeBoundingSphere();return g;
}

export function createTankBreakage({vat,shell,deposits,index=0,floorSupport=()=>0}){
 const group=new THREE.Group();group.name='Broken glass with jagged axe breach';group.visible=false;vat.add(group);
 for(const [original,radius]of[[shell,.485],[deposits,.487]]){
  const broken=new THREE.Mesh(brokenGlassGeometry(radius),original.material);broken.position.copy(original.position);broken.renderOrder=original.renderOrder;group.add(broken);
 }
 const impact=new THREE.Object3D(),outlet=new THREE.Object3D();impact.position.set(0,.705,.49);outlet.position.set(0,.49,.49);vat.add(impact,outlet);
 // Bright chipped edges and hairline fractures radiate away from the missing pane.
 const edgeMaterial=new THREE.LineBasicMaterial({color:0xc0cfbc,transparent:true,opacity:.45});
 const chippedRim=new THREE.LineSegments(new THREE.EdgesGeometry(group.children[0].geometry,40),edgeMaterial);chippedRim.position.copy(shell.position);chippedRim.raycast=()=>{};group.add(chippedRim);
 const edges=[];for(let i=0;i<11;i++){
  const a=i/11*Math.PI*2+Math.sin(i*13)*.13,r=.92+(i%3)*.07,theta=Math.cos(a)*.61*r,y=.705+Math.sin(a)*.29*r;
  const length=1.12+(i%4)*.09,t2=theta*length,y2=.705+(y-.705)*length;
  edges.push(Math.sin(theta)*.489,y,Math.cos(theta)*.489,Math.sin(t2)*.489,Math.min(1.20,Math.max(.24,y2)),Math.cos(t2)*.489);
 }
 const cracks=new THREE.LineSegments(new THREE.BufferGeometry().setAttribute('position',new THREE.Float32BufferAttribute(edges,3)),new THREE.LineBasicMaterial({color:0xb5c5aa,transparent:true,opacity:.65}));cracks.raycast=()=>{};group.add(cracks);
 const shardGeometry=new THREE.BufferGeometry();shardGeometry.setAttribute('position',new THREE.Float32BufferAttribute([-.5,-.35,0,.55,-.25,0,-.12,.65,0],3));shardGeometry.computeVertexNormals();
 const shardMaterial=new THREE.MeshStandardMaterial({color:0x849585,roughness:.23,metalness:.35,transparent:true,opacity:.70,side:THREE.DoubleSide});
 const shards=new THREE.InstancedMesh(shardGeometry,shardMaterial,renderQuality.mobile?12:22);shards.name='Fallen glass shards';shards.instanceMatrix.setUsage(THREE.DynamicDrawUsage);shards.frustumCulled=false;shards.raycast=()=>{};shards.count=0;group.add(shards);
 const dummy=new THREE.Object3D(),point=new THREE.Vector3(),world=new THREE.Vector3(),plans=[];
 let brokenAt=null,settled=false;
 function breakTank(time){
  if(brokenAt!==null)return false;brokenAt=time;settled=false;shell.visible=deposits.visible=false;group.visible=true;
  vat.updateWorldMatrix(true,true);plans.length=0;
  for(let i=0;i<shards.instanceMatrix.count;i++){
   const a=i*2.399+index,start=new THREE.Vector3(Math.cos(a)*.16,.70+Math.sin(a)*.21,.49);
   const end=new THREE.Vector3(Math.sin(a*1.7)*(.25+(i%5)*.09),0,.58+(i%7)*.075);
   world.copy(end);vat.localToWorld(world);world.y=floorSupport(world.x,world.z)+.004;vat.worldToLocal(world);end.copy(world);
   plans.push({start,end,size:.045+(i%5)*.022,spin:a,duration:.45+(i%6)*.075});
  }
  update(time);return true;
 }
 function update(time,reducedMotion=false){
  if(brokenAt===null||settled)return;
  const age=Math.max(0,time-brokenAt);shards.count=plans.length;
  for(let i=0;i<plans.length;i++){
   const p=plans[i],u=reducedMotion?1:Math.min(1,age/p.duration);
   point.lerpVectors(p.start,p.end,u);point.y+=(1-u)*u*.20;
   dummy.position.copy(point);dummy.scale.setScalar(p.size);
   dummy.rotation.set(THREE.MathUtils.lerp(p.spin,Math.PI/2,u),0,p.spin+(1-u)*3);dummy.updateMatrix();shards.setMatrixAt(i,dummy.matrix);
  }
  shards.instanceMatrix.needsUpdate=true;settled=reducedMotion||age>=.9;
 }
 function reset(){brokenAt=null;settled=false;plans.length=0;shell.visible=deposits.visible=true;group.visible=false;shards.count=0;}
 return {group,impact,outlet,break:breakTank,update,reset,get broken(){return brokenAt!==null;}};
}
