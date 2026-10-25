import * as THREE from './vendor/three.module.js';

const safeDistance=3.0,visibleDistance=2.8;
export function isRodentShadow(x,z){return z < -1.55 || (Math.abs(x)>2.55 && z<.45);}
const distanceTo=(point,viewer)=>Math.hypot(point.x-viewer.x,point.z-viewer.z);

// Stay in the back/side shadows, avoiding furniture and the viewer on every step.
export function floorRoutes(room){
 const step=.18,minX=-3.60,minZ=-3.65,cols=41,rows=43,obstacles=[];
 const box=new THREE.Box3(),size=new THREE.Vector3();
 room.updateWorldMatrix(true,true);
 function visit(object){
  if(!object.visible)return;
  if(object.isMesh&&!object.isInstancedMesh&&object.geometry){
   object.geometry.computeBoundingBox();box.copy(object.geometry.boundingBox).applyMatrix4(object.matrixWorld);box.getSize(size);
   // Paper, wires, carpets and thin floor surfaces can be stepped over.
   if(box.min.y<.13&&box.max.y>.10&&size.y>.065&&Math.min(size.x,size.z)>.018)
    obstacles.push({x0:box.min.x-.15,x1:box.max.x+.15,z0:box.min.z-.15,z1:box.max.z+.15});
  }
  for(const child of object.children)visit(child);
 }
 for(const child of room.children)visit(child);
 const cells=Array.from({length:cols*rows},(_,id)=>{
  const col=id%cols,row=Math.floor(id/cols),x=minX+col*step,z=minZ+row*step;
  return {id,col,row,x,z,free:isRodentShadow(x,z)&&!obstacles.some(o=>x>=o.x0&&x<=o.x1&&z>=o.z0&&z<=o.z1),neighbors:[]};
 });
 for(const cell of cells){
  if(!cell.free)continue;
  for(let dz=-1;dz<=1;dz++)for(let dx=-1;dx<=1;dx++){
   if(!dx&&!dz)continue;const col=cell.col+dx,row=cell.row+dz;
   if(col<0||col>=cols||row<0||row>=rows)continue;
   const next=cells[row*cols+col];
   if(next.free&&(!dx||!dz||(cells[cell.row*cols+col].free&&cells[row*cols+cell.col].free)))cell.neighbors.push(next.id);
  }
 }
 const free=cells.filter(c=>c.free&&c.neighbors.length);
 function closest(x,z,viewer){const candidates=viewer?free.filter(c=>distanceTo(c,viewer)>=safeDistance):free;return candidates.reduce((best,c)=>!best||(c.x-x)**2+(c.z-z)**2<(best.x-x)**2+(best.z-z)**2?c:best,null);}
 function path(start,random,viewer){
  const previous=new Int32Array(cells.length).fill(-1),queue=[start];previous[start]=start;
  for(let q=0;q<queue.length;q++){
   const current=cells[queue[q]],currentDistance=distanceTo(current,viewer);
   for(const n of current.neighbors){
    const nextDistance=distanceTo(cells[n],viewer);
    // If the player approaches, allow an escape that only increases clearance.
    if(previous[n]<0&&(nextDistance>=safeDistance||nextDistance>currentDistance+.001)){previous[n]=current.id;queue.push(n);}
   }
  }
  const origin=cells[start],candidates=queue.filter(id=>{const c=cells[id],d=Math.hypot(c.x-origin.x,c.z-origin.z);return d>.8&&d<2.8&&distanceTo(c,viewer)>=safeDistance;});
  if(!candidates.length)return [];
  let end=candidates[Math.floor(random()*candidates.length)];const route=[];
  while(end!==start){route.push(cells[end]);end=previous[end];}
  return route.reverse();
 }
 return {closest,path};
}

export function createFloorRodents({room,floorSupport,viewerPosition,seed=Math.floor(Math.random()*0xffffffff)}){
 const group=new THREE.Group();group.name='Tiny mice and rats darting through distant shadows';group.userData.ignoreAcid=true;
 let randomState=seed>>>0;
 const random=()=>{randomState=(randomState*1664525+1013904223)>>>0;return randomState/4294967296;};
 const routes=floorRoutes(room),dummy=new THREE.Object3D(),world=new THREE.Vector3(),end=new THREE.Vector3(),direction=new THREE.Vector3(),up=new THREE.Vector3(0,1,0);
 const furCanvas=document.createElement('canvas');furCanvas.width=furCanvas.height=128;const paint=furCanvas.getContext('2d');
 paint.fillStyle='#e8e3d9';paint.fillRect(0,0,128,128);
 for(let i=0;i<1400;i++){paint.strokeStyle=i%3?'#7d766f30':'#ffffff66';const x=random()*128,y=random()*128;paint.beginPath();paint.moveTo(x,y);paint.lineTo(x+(random()-.5)*2,y+3+random()*5);paint.stroke();}
 const furMap=new THREE.CanvasTexture(furCanvas);furMap.colorSpace=THREE.SRGBColorSpace;
 const fur=new THREE.MeshStandardMaterial({map:furMap,roughness:.96});
 const features=new THREE.MeshStandardMaterial({roughness:.72});
 const tailMaterial=new THREE.MeshStandardMaterial({roughness:.88});
 function instances(geometry,material,count,name){const mesh=new THREE.InstancedMesh(geometry,material,count);mesh.name=name;mesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage);mesh.frustumCulled=false;mesh.castShadow=true;mesh.receiveShadow=true;mesh.raycast=()=>{};group.add(mesh);return mesh;}
 const starts=[[-2.75,-2.75],[-3.1,-.55],[2.65,-2.85]],count=starts.length;
 const sphere=new THREE.SphereGeometry(1,14,9);
 const bodies=instances(sphere,fur,count*6,'Furry rat and mouse bodies');
 const details=instances(sphere,features,count*9,'Ears, eyes, noses and running paws');
 const tails=instances(new THREE.CylinderGeometry(1,1,1,7),tailMaterial,count*9,'Long tapered swishing tails');
 const whiskerPositions=new Float32Array(count*4*2*3),whiskerGeometry=new THREE.BufferGeometry();whiskerGeometry.setAttribute('position',new THREE.BufferAttribute(whiskerPositions,3).setUsage(THREE.DynamicDrawUsage));
 const whiskers=new THREE.LineSegments(whiskerGeometry,new THREE.LineBasicMaterial({color:0xbbb1a0,transparent:true,opacity:.45}));whiskers.frustumCulled=false;whiskers.raycast=()=>{};group.add(whiskers);
 const colors=[0x514b44,0x59544b,0x45443e];
 const animals=starts.map(([x,z],i)=>{
  const cell=routes.closest(x,z,viewerPosition)||routes.closest(x,z),mouse=i!==0;
  return {mouse,cell:cell.id,x:cell.x,z:cell.z,yaw:random()*Math.PI*2,size:.28*(mouse?.58+random()*.08:.92+random()*.12),color:new THREE.Color(colors[i]),phase:random()*6.28,speed:3.6*(mouse?1.05+random()*.30:.88+random()*.25),route:[],pause:1.2+i*1.6+random()*2,gait:0,moving:false,visibility:1};
 });
 const pink=new THREE.Color(0x78635d),noseColor=new THREE.Color(0x67514b),eyeColor=new THREE.Color(0x11110e);
 let lastTime=null;
 function local(animal,x,y,z,out=world){const c=Math.cos(animal.yaw),s=Math.sin(animal.yaw),scale=animal.size*animal.visibility;return out.set(animal.x+(x*c+z*s)*scale,floorSupport(animal.x,animal.z)+y*scale,animal.z+(-x*s+z*c)*scale);}
 function ellipsoid(mesh,index,animal,pos,scale,color,roll=0){
  local(animal,...pos);dummy.position.copy(world);dummy.rotation.set(0,animal.yaw,roll);dummy.scale.set(...scale).multiplyScalar(animal.size*animal.visibility);dummy.updateMatrix();mesh.setMatrixAt(index,dummy.matrix);mesh.setColorAt(index,color);
 }
 function update(time,reducedMotion=false,viewer=viewerPosition){
  const dt=lastTime===null?0:Math.min(.1,Math.max(0,time-lastTime));lastTime=time;let whiskerIndex=0;
  for(const [i,animal]of animals.entries()){
   animal.moving=false;
   const clearance=distanceTo(animal,viewer);
   // Disappear into cover before entering the foreground, even if the player rushes up.
   animal.visibility=THREE.MathUtils.smoothstep(clearance,visibleDistance,safeDistance+.25);
   if(!reducedMotion){
    const next=animal.route[0];
    if(next&&distanceTo(next,viewer)<safeDistance&&distanceTo(next,viewer)<=clearance)animal.route=[];
    if(clearance<safeDistance+.35)animal.pause=0;
    if(animal.pause>0)animal.pause-=dt;
    else{
     if(!animal.route.length)animal.route=routes.path(animal.cell,random,viewer);
     let remaining=animal.speed*dt;
     // Consume the whole stride across grid cells, so fast dashes remain fast at 30 fps.
     while(animal.route.length&&remaining>0){
      const target=animal.route[0],dx=target.x-animal.x,dz=target.z-animal.z,distance=Math.hypot(dx,dz),travel=Math.min(distance,remaining);
      animal.moving=true;animal.gait+=travel*45;remaining-=travel;
      if(distance>.0001){animal.x+=dx/distance*travel;animal.z+=dz/distance*travel;const yaw=Math.atan2(-dx,-dz),delta=THREE.MathUtils.euclideanModulo(yaw-animal.yaw+Math.PI,Math.PI*2)-Math.PI;animal.yaw+=delta*(1-Math.exp(-dt*28));}
      if(travel>=distance-.0001){animal.x=target.x;animal.z=target.z;animal.cell=target.id;animal.route.shift();if(!animal.route.length)animal.pause=3+random()*5;}
     }
     if(!animal.route.length&&!animal.moving)animal.pause=1;
    }
   }
   const t=reducedMotion?0:time,bob=animal.moving?Math.abs(Math.sin(animal.gait))*.005:Math.sin(t*3+animal.phase)*.0015,sniff=animal.moving?0:Math.sin(t*12+animal.phase)*.002;
   const b=i*6,d=i*9;
   ellipsoid(bodies,b,animal,[0,.077+bob,0],[.068,.063,.125],animal.color);
   ellipsoid(bodies,b+1,animal,[0,.081+bob,.068],[.070,.069,.071],animal.color);
   ellipsoid(bodies,b+2,animal,[0,.078+bob,-.115],[.046,.044,.066],animal.color);
   ellipsoid(bodies,b+3,animal,[0,.057+bob+sniff,-.177],[.030,.024,.050],animal.color);
   for(const [j,side]of[-1,1].entries()){
    const ear=animal.mouse?1.23:.88;
    ellipsoid(bodies,b+4+j,animal,[side*.044,.126+bob,-.102],[.030*ear,.038*ear,.012],animal.color,side*.20);
    ellipsoid(details,d+j,animal,[side*.044,.128+bob,-.113],[.022*ear,.028*ear,.004],pink,side*.20);
    ellipsoid(details,d+2+j,animal,[side*.032,.094+bob,-.149],[.007,.008,.007],eyeColor);
   }
   ellipsoid(details,d+4,animal,[0,.057+bob+sniff,-.221],[.011,.009,.009],noseColor);
   for(let j=0;j<4;j++){
    const side=j%2?-1:1,rear=j>1,phase=animal.gait+(j===0||j===3?0:Math.PI),lift=animal.moving?Math.max(0,Math.sin(phase))*.023:0,stride=animal.moving?Math.cos(phase)*.027:0;
    ellipsoid(details,d+5+j,animal,[side*(rear?.055:.043),.010+lift,(rear?.080:-.087)+stride],[.018,.010,.031],pink);
   }
   const tailLength=animal.mouse?.23:.29;
   function tailPoint(j,out){const f=j/9;return local(animal,Math.sin(f*3.5+t*(animal.moving?8:1.6)+animal.phase)*.045*f,.026*(1-f)+.009,.126+tailLength*f,out);}
   for(let j=0;j<9;j++){
    tailPoint(j,world);tailPoint(j+1,end);direction.copy(end).sub(world);const length=direction.length();dummy.position.copy(world).add(end).multiplyScalar(.5);dummy.quaternion.setFromUnitVectors(up,direction.normalize());const radius=(.009*(1-j/9)+.001)*animal.size*animal.visibility;dummy.scale.set(radius,length,radius);dummy.updateMatrix();tails.setMatrixAt(i*9+j,dummy.matrix);tails.setColorAt(i*9+j,pink);
   }
   for(const side of[-1,1])for(let j=0;j<2;j++){
    local(animal,side*.018,.061+bob,-.195);world.toArray(whiskerPositions,whiskerIndex);whiskerIndex+=3;
    local(animal,side*.080,.062+bob+sniff,-.200+j*.027);world.toArray(whiskerPositions,whiskerIndex);whiskerIndex+=3;
   }
  }
  for(const mesh of[bodies,details,tails]){mesh.instanceMatrix.needsUpdate=true;mesh.instanceColor.needsUpdate=true;}
  whiskerGeometry.attributes.position.needsUpdate=true;
 }
 update(0);return {group,update};
}
