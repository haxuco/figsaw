import * as THREE from './vendor/three.module.js';

// Shared, instanced geometry keeps these small moving silhouettes inexpensive.
export function createLightInsects({flies=10,moths=5,spread=[.82,.17,.47],seed=29,sizeScale=1,dive=0}={}){
 const group=new THREE.Group();group.name='Flies and moths circling the light';
 const bodyGeometry=new THREE.SphereGeometry(1,8,6);
 const flyBody=new THREE.MeshStandardMaterial({color:0x151916,roughness:.65});
 const mothBody=new THREE.MeshStandardMaterial({color:0x554b36,roughness:1});
 const flyWing=new THREE.MeshStandardMaterial({color:0xc4d2c8,roughness:.35,transparent:true,opacity:.58,depthWrite:false,side:THREE.DoubleSide});
 const canvas=document.createElement('canvas');canvas.width=canvas.height=128;
 const paint=canvas.getContext('2d');paint.fillStyle='#b8aa83';paint.fillRect(0,0,128,128);
 for(let i=0;i<190;i++){paint.fillStyle=i%2?'#89795255':'#e2d3ab66';paint.fillRect((i*47)%128,(i*73)%128,2,1);}
 paint.strokeStyle='#695c3d';paint.lineWidth=4;paint.beginPath();paint.moveTo(76,0);paint.quadraticCurveTo(99,60,76,128);paint.stroke();
 paint.fillStyle='#5b5039';paint.beginPath();paint.ellipse(57,68,13,18,.25,0,Math.PI*2);paint.fill();
 paint.fillStyle='#d5c59a';paint.beginPath();paint.ellipse(57,68,6,9,.25,0,Math.PI*2);paint.fill();
 paint.strokeStyle='#75684788';paint.lineWidth=1;
 for(let i=0;i<5;i++){paint.beginPath();paint.moveTo(0,64);paint.lineTo(128,12+i*26);paint.stroke();}
 const wingMap=new THREE.CanvasTexture(canvas);wingMap.colorSpace=THREE.SRGBColorSpace;
 const mothWing=new THREE.MeshStandardMaterial({map:wingMap,roughness:.9,side:THREE.DoubleSide,emissive:0x9a8966,emissiveMap:wingMap,emissiveIntensity:.15});
 function wingGeometry(moth){
  const shape=new THREE.Shape();shape.moveTo(0,-.008);
  if(moth){shape.bezierCurveTo(.020,-.031,.052,-.036,.058,-.018);shape.bezierCurveTo(.060,-.007,.044,.004,.039,.009);shape.bezierCurveTo(.047,.026,.023,.034,.013,.019);}
  else{shape.bezierCurveTo(.008,-.021,.030,-.024,.033,-.013);shape.bezierCurveTo(.035,-.003,.015,.016,.005,.012);}
  shape.lineTo(0,.008);shape.closePath();
  const geo=new THREE.ShapeGeometry(shape,10),p=geo.attributes.position,uv=geo.attributes.uv;
  for(let i=0;i<p.count;i++)uv.setXY(i,p.getX(i)/.060,(p.getY(i)+.036)/.070);
  geo.rotateX(-Math.PI/2);return geo;
 }
 function instances(geo,mat,count,name){const mesh=new THREE.InstancedMesh(geo,mat,count);mesh.name=name;mesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage);mesh.frustumCulled=false;mesh.raycast=()=>{};group.add(mesh);return mesh;}
 const flyBodies=instances(bodyGeometry,flyBody,flies*2,'Small dark flies');
 const mothBodies=instances(bodyGeometry,mothBody,moths*2,'Moth bodies');
 const flyWings=instances(wingGeometry(false),flyWing,flies*2,'Translucent fly wings');
 const mothWings=instances(wingGeometry(true),mothWing,moths*2,'Dusty patterned moth wings');
 const dummy=new THREE.Object3D(),position=new THREE.Vector3(),next=new THREE.Vector3(),direction=new THREE.Vector3();
 const forward=new THREE.Vector3(0,0,-1),axisZ=new THREE.Vector3(0,0,1),axisY=new THREE.Vector3(0,1,0),offset=new THREE.Vector3();
 const facing=new THREE.Quaternion(),flapRotation=new THREE.Quaternion(),mirror=new THREE.Quaternion().setFromAxisAngle(axisY,Math.PI);
 const insects=Array.from({length:flies+moths},(_,i)=>({moth:i>=flies,index:i>=flies?i-flies:i,phase:i*2.399+seed*.17,size:sizeScale*(.72+((i*17+seed)%13)/28),speed:i>=flies?.95+(i%3)*.23:1.8+(i%4)*.46}));
 function path(time,insect,out){
  const t=time*insect.speed+insect.phase,p=insect.phase,r=insect.moth?.72:.46;
  out.set(
   spread[0]*(r*Math.cos(t)+.17*Math.sin(t*2.37+p)),
   spread[1]*(.70*Math.sin(t*1.73+p)+.23*Math.cos(t*4.13)),
   spread[2]*(r*Math.sin(t*.91)+.18*Math.cos(t*2.71-p))
  );
  // Occasional downward swoops make the swarm visible in the light beam from floor level.
  out.y-=dive*(insect.moth?1:.38)*Math.pow(.5+.5*Math.sin(t*.43+p),6);
  if(!insect.moth){out.x+=.035*Math.sin(t*7.3);out.y+=.014*Math.cos(t*9.7);}
  return out;
 }
 function update(time,reducedMotion=false,lightLevel=1){
  const t=reducedMotion?0:time;
  for(const insect of insects){
   const {moth,index,phase,size}=insect,bodies=moth?mothBodies:flyBodies,wings=moth?mothWings:flyWings;
   path(t,insect,position);path(t+.012,insect,next);direction.copy(next).sub(position).normalize();
   facing.setFromUnitVectors(forward,direction);
   flapRotation.setFromAxisAngle(axisZ,.25*Math.sin(t*2.1+phase));facing.multiply(flapRotation);
   dummy.position.copy(position);dummy.quaternion.copy(facing);dummy.scale.set(moth?.006:.0065,moth?.007:.0055,moth?.021:.011).multiplyScalar(size);dummy.updateMatrix();bodies.setMatrixAt(index*2,dummy.matrix);
   offset.set(0,0,moth?-.022:-.013).applyQuaternion(facing);dummy.position.copy(position).addScaledVector(offset,size);dummy.scale.setScalar((moth?.006:.0068)*size);dummy.updateMatrix();bodies.setMatrixAt(index*2+1,dummy.matrix);
   const flap=reducedMotion?.42:.18+Math.sin(t*(moth?39:92)+phase)*(moth?.90:.74);
   for(const [j,side] of[-1,1].entries()){
    offset.set(side*.004,0,0).applyQuaternion(facing);dummy.position.copy(position).addScaledVector(offset,size);
    flapRotation.setFromAxisAngle(axisZ,side*flap);dummy.quaternion.copy(facing).multiply(flapRotation);if(side<0)dummy.quaternion.multiply(mirror);
    dummy.scale.setScalar(size);dummy.updateMatrix();wings.setMatrixAt(index*2+j,dummy.matrix);
   }
  }
  mothWing.emissiveIntensity=.055+.14*Math.max(0,lightLevel);
  for(const mesh of[flyBodies,mothBodies,flyWings,mothWings])mesh.instanceMatrix.needsUpdate=true;
 }
 update(0);return {group,update};
}
