import * as THREE from './vendor/three.module.js';
import {renderQuality} from './render-quality.js';

// One shared particle draw for all four toys; spent stuffing stays on the floor.
export function createPlushCut({saw,animals,floorSupport}){
 const group=new THREE.Group();group.name='Stuffing spilled from cut plush toys';group.userData.ignoreAcid=true;
 const count=renderQuality.mobile?18:30,records=new Map(),dummy=new THREE.Object3D();
 const filling=new THREE.MeshStandardMaterial({color:0xe6dfc9,roughness:1});
 const geometry=new THREE.IcosahedronGeometry(1,1),vertices=geometry.attributes.position;
 for(let i=0;i<vertices.count;i++){const k=.91+.13*Math.sin(vertices.getX(i)*17+vertices.getY(i)*13+vertices.getZ(i)*19);vertices.setXYZ(i,vertices.getX(i)*k,vertices.getY(i)*k,vertices.getZ(i)*k);}geometry.computeVertexNormals();
 const fluff=new THREE.InstancedMesh(geometry,filling,count*animals.length);fluff.name='Loose cotton filling';fluff.instanceMatrix.setUsage(THREE.DynamicDrawUsage);fluff.frustumCulled=false;fluff.receiveShadow=true;fluff.raycast=()=>{};group.add(fluff);
 const seamMaterial=new THREE.MeshStandardMaterial({color:0x28251f,roughness:1,side:THREE.DoubleSide});
 for(const [index,animal]of animals.entries()){
  const cut=new THREE.Group();cut.name='Split fabric seam and exposed stuffing';cut.visible=false;cut.userData.ignoreAcid=true;animal.object.add(cut);
  const positions=[],indices=[],rows=14;
  for(let j=0;j<=rows;j++){
   const z=-.103+j/rows*.155,width=.005+.009*Math.sin(j/rows*Math.PI);
   for(const side of[-1,1]){const x=side*width;positions.push(x,.065+.091*Math.sqrt(Math.max(0,1-(x/.112)**2-((z+.025)/.154)**2))+.002,z);}
   if(j<rows){const a=j*2;indices.push(a,a+1,a+2,a+1,a+3,a+2);}
  }
  const seamGeo=new THREE.BufferGeometry();seamGeo.setAttribute('position',new THREE.Float32BufferAttribute(positions,3));seamGeo.setIndex(indices);seamGeo.computeVertexNormals();cut.add(new THREE.Mesh(seamGeo,seamMaterial));
  for(let j=0;j<9;j++){const z=-.096+j/8*.14,puff=new THREE.Mesh(geometry,filling);puff.position.set(Math.sin(j*2)*.005,.065+.091*Math.sqrt(1-((z+.025)/.154)**2)+.004,z);puff.scale.set(.012,.010,.017);cut.add(puff);}
  records.set(animal.object,{...animal,index,cut,startedAt:null,settled:false,origin:new THREE.Vector3()});
 }
 const home=saw.position.clone(),homeQ=saw.quaternion.clone(),startPosition=new THREE.Vector3(),startQ=new THREE.Quaternion();
 const contact=new THREE.Vector3(),target=new THREE.Vector3(),axis=new THREE.Vector3(),offset=new THREE.Vector3(),point=new THREE.Vector3(),worldQ=new THREE.Quaternion(),parentQ=new THREE.Quaternion(),rotation=new THREE.Quaternion();
 const upright=new THREE.Quaternion().setFromEuler(new THREE.Euler(Math.PI/2,Math.PI,0,'ZYX'));
 let active=null;
 function start(object,time,locked=false){
  const record=records.get(object);if(locked||active||!record||record.startedAt!==null)return false;
  record.startedAt=time;record.settled=false;object.localToWorld(record.origin.set(0,.16,-.025));active=record;
  saw.getWorldPosition(startPosition);saw.getWorldQuaternion(startQ);return true;
 }
 function update(time,reducedMotion=false){
  let completed=false,dirty=false;
  if(active){
   const age=time-active.startedAt,cutStart=reducedMotion?.1:.85,cutEnd=reducedMotion?.3:2.75,end=reducedMotion?.5:3.55;
   active.cut.visible=age>=cutStart;
   active.object.localToWorld(contact.set(0,.153,-.025));active.object.getWorldQuaternion(worldQ);worldQ.multiply(upright);
   const lift=reducedMotion?1:THREE.MathUtils.smootherstep(age,0,.75),back=THREE.MathUtils.smootherstep(age,cutEnd,end);
   const stroke=reducedMotion||age<cutStart||age>cutEnd?0:Math.sin((age-cutStart)*Math.PI*7)*.065;
   offset.set(-.06,0,.072).applyQuaternion(worldQ);target.copy(contact).sub(offset);axis.set(1,0,0).applyQuaternion(worldQ);target.addScaledVector(axis,stroke);
   point.lerpVectors(startPosition,target,lift).lerp(startPosition,back);saw.parent.worldToLocal(point);saw.position.copy(point);
   rotation.slerpQuaternions(startQ,worldQ,lift).slerp(startQ,back);saw.parent.getWorldQuaternion(parentQ);saw.quaternion.copy(parentQ.invert()).multiply(rotation);
   if(age>=end){saw.position.copy(home);saw.quaternion.copy(homeQ);active=null;completed=true;}
  }
  for(const record of records.values()){
   if(record.startedAt===null||record.settled)continue;
   const age=time-record.startedAt;dirty=true;
   for(let i=0;i<count;i++){
    const delay=(reducedMotion?.1:1.05)+i/count*(reducedMotion?.1:1.3),elapsed=reducedMotion?(age>=delay?9:-1):age-delay;
    if(elapsed<0){dummy.scale.setScalar(0);}
    else{
     const angle=i*2.399+record.index*.7,distance=.10+(i%9)/9*.22,flight=.58+(i%5)*.065,phase=Math.min(1,elapsed/flight),size=.012+(i%4)*.0035;
     point.copy(record.origin);point.x+=Math.cos(angle)*distance*phase;point.z+=Math.sin(angle)*distance*phase;
     const floor=floorSupport(point.x,point.z)+size*.66;
     point.y=THREE.MathUtils.lerp(record.origin.y,floor,phase)+Math.sin(Math.PI*phase)*(.11+(i%5)*.025);
     dummy.position.copy(group.worldToLocal(point));dummy.rotation.set(i*.7,angle,elapsed<flight?elapsed*3+i:i+flight*3);dummy.scale.set(size*1.25,size*.66,size);
    }
    dummy.updateMatrix();fluff.setMatrixAt(record.index*count+i,dummy.matrix);
   }
   if(age>(reducedMotion?.25:3.35))record.settled=true;
  }
  if(dirty)fluff.instanceMatrix.needsUpdate=true;
  return completed;
 }
 function reset(){active=null;saw.position.copy(home);saw.quaternion.copy(homeQ);for(const record of records.values()){record.startedAt=null;record.settled=false;record.cut.visible=false;}dummy.scale.setScalar(0);dummy.updateMatrix();for(let i=0;i<fluff.instanceMatrix.count;i++)fluff.setMatrixAt(i,dummy.matrix);fluff.instanceMatrix.needsUpdate=true;}
 reset();
 return {group,start,update,reset,canCut:object=>records.has(object)&&records.get(object).startedAt===null,get active(){return active!==null;}};
}
