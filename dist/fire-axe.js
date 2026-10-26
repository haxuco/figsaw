import * as THREE from './vendor/three.module.js';
import {batchStaticScenery} from './static-batching.js';

export function createFireAxe(){
 const mount=new THREE.Group(),object=new THREE.Group();mount.name='Fire axe brackets above the alarm';object.name='Red pick-head fireman’s axe';object.userData.fireAxe=true;mount.userData.ignoreAcid=true;
 const red=new THREE.MeshStandardMaterial({color:0xb9271b,roughness:.61,metalness:.48});
 const steel=new THREE.MeshStandardMaterial({color:0x8b9393,roughness:.32,metalness:.87});
 const wood=new THREE.MeshStandardMaterial({color:0x795130,roughness:.83});
 const dark=new THREE.MeshStandardMaterial({color:0x2d302b,roughness:.7,metalness:.7});
 function mesh(g,m,p=object){const o=new THREE.Mesh(g,m);o.castShadow=o.receiveShadow=true;p.add(o);return o;}
 function shape(points,depth,mat){const s=new THREE.Shape();s.moveTo(...points[0]);for(const p of points.slice(1))s.lineTo(...p);s.closePath();const g=new THREE.ExtrudeGeometry(s,{depth,bevelEnabled:true,bevelSize:.004,bevelThickness:.004,bevelSegments:2,curveSegments:3});g.translate(0,0,-depth/2);return mesh(g,mat);}
 // Curved ash handle, an expanded cutting blade, and a tapered rear pick.
 const curve=new THREE.CatmullRomCurve3([new THREE.Vector3(-.025,-.40,0),new THREE.Vector3(-.035,-.28,0),new THREE.Vector3(.005,.02,0),new THREE.Vector3(0,.32,0)]);
 const handle=mesh(new THREE.TubeGeometry(curve,20,.022,10,false),wood);handle.scale.z=.73;
 const butt=mesh(new THREE.SphereGeometry(1,12,8),wood);butt.position.set(-.025,-.39,0);butt.scale.set(.029,.042,.020);
 shape([[-.19,.43],[-.10,.37],[.07,.37],[.23,.29],[.10,.30],[.04,.25],[-.10,.25],[-.21,.20],[-.23,.23],[-.23,.38]],.060,red);
 shape([[-.19,.43],[-.23,.38],[-.23,.23],[-.21,.20],[-.25,.19],[-.28,.23],[-.28,.39],[-.24,.45]],.035,steel);
 shape([[.12,.345],[.25,.285],[.20,.28],[.10,.30]],.026,steel);
 const collar=mesh(new THREE.CylinderGeometry(.032,.028,.064,12),dark);collar.position.y=.22;
 for(const y of[.29,.34]){const rivet=mesh(new THREE.CylinderGeometry(.008,.008,.069,12),steel);rivet.rotation.x=Math.PI/2;rivet.position.y=y;}
 // Fine grain and nicks stay geometry-light and inherit the room lighting.
 const grain=[];for(let i=0;i<9;i++){const x=(i-4)*.0034;grain.push(x-.02,-.34,.017,x-.009,-.13,.018,x-.009,-.13,.018,x,.17,.017);}
 const lines=new THREE.LineSegments(new THREE.BufferGeometry().setAttribute('position',new THREE.Float32BufferAttribute(grain,3)),new THREE.LineBasicMaterial({color:0x48321f,transparent:true,opacity:.48}));object.add(lines);
 for(const y of[-.28,.13]){
  const bracketX=y<0?-.062:.016;
  const pad=mesh(new THREE.BoxGeometry(.105,.08,.018),dark,mount);pad.position.set(bracketX,y,0);
  const hook=mesh(new THREE.TorusGeometry(.037,.008,6,14,Math.PI*1.45),steel,mount);hook.rotation.x=Math.PI/2;hook.rotation.z=-.72;hook.position.set(bracketX,y,.055);
  for(const x of[-.038,.038]){const screw=mesh(new THREE.CylinderGeometry(.006,.006,.023,8),steel,mount);screw.rotation.x=Math.PI/2;screw.position.set(bracketX+x,y,.009);}
 }
 object.position.z=.066;object.rotation.z=-.12;mount.add(object);
 // Generous invisible pick target helps touch users select the slim handle.
 const target=mesh(new THREE.BoxGeometry(.13,.72,.12),new THREE.MeshBasicMaterial({transparent:true,opacity:0,depthWrite:false,colorWrite:false}));target.castShadow=false;
 batchStaticScenery(object,{minObjects:2,dispose:false});batchStaticScenery(mount,{exclude:[object],minObjects:2,dispose:false});
 return {mount,object,setEnvironment(map){for(const m of[red,steel,dark]){m.envMap=map;m.needsUpdate=true;}}};
}

export function createAxeInteraction({axe,camera,tanks,onBreak=()=>{}}){
 const group=new THREE.Group();group.name='Picked-up fire axe';group.userData.ignoreAcid=true;
 const object=axe.object,parent=object.parent,home=object.position.clone(),homeQ=object.quaternion.clone();
 const heldP=new THREE.Vector3(),heldQ=new THREE.Quaternion(),startP=new THREE.Vector3(),startQ=new THREE.Quaternion(),impactP=new THREE.Vector3(),impactQ=new THREE.Quaternion(),normal=new THREE.Vector3(),cockP=new THREE.Vector3(),cockQ=new THREE.Quaternion();
 const heldTilt=new THREE.Quaternion().setFromEuler(new THREE.Euler(.12,-.28,-.33));
 const blade=new THREE.Vector3(-.27,.31,0),localQ=new THREE.Quaternion().setFromEuler(new THREE.Euler(0,-Math.PI/2,0));
 let phase='mounted',started=0,index=-1,struck=false;
 function heldPose(){camera.updateWorldMatrix(true,false);heldP.set(.36,-.31,-.88).applyMatrix4(camera.matrixWorld);heldQ.copy(camera.quaternion).multiply(heldTilt);}
 function pose(p,q){object.position.copy(p);object.quaternion.copy(q);}
 function pickUp(time,locked=false){
  if(locked||phase!=='mounted')return false;
  object.getWorldPosition(startP);object.getWorldQuaternion(startQ);group.attach(object);pose(startP,startQ);phase='picking';started=time;return true;
 }
 function strike(tankIndex,time,locked=false){
  const tank=tanks[tankIndex];if(locked||phase!=='held'||!tank||tank.broken)return false;
  index=tankIndex;struck=false;started=time;phase='striking';startP.copy(object.position);startQ.copy(object.quaternion);
  tank.impact.getWorldPosition(impactP);tank.impact.getWorldQuaternion(impactQ);normal.set(0,0,1).applyQuaternion(impactQ);
  impactQ.multiply(localQ);impactP.sub(blade.clone().applyQuaternion(impactQ));
  cockP.copy(impactP).addScaledVector(normal,.48);cockP.y+=.24;
  cockQ.copy(impactQ).multiply(new THREE.Quaternion().setFromEuler(new THREE.Euler(0,0,-.80)));
  return true;
 }
 function reset(){parent.add(object);object.position.copy(home);object.quaternion.copy(homeQ);phase='mounted';index=-1;struck=false;}
 function update(time,reducedMotion=false){
  if(phase==='mounted')return;
  heldPose();const age=Math.max(0,time-started),ease=THREE.MathUtils.smootherstep;
  if(phase==='picking'){
   const u=reducedMotion?1:ease(age,0,.55);object.position.lerpVectors(startP,heldP,u);object.quaternion.slerpQuaternions(startQ,heldQ,u);if(u===1)phase='held';return;
  }
  if(phase==='held'){pose(heldP,heldQ);return;}
  const hitAt=reducedMotion?.12:.84,doneAt=reducedMotion?.40:1.75;
  if(age>=hitAt&&!struck){struck=true;const tank=tanks[index];if(tank.break(time)){onBreak(index,time,tank.outlet);}}
  if(reducedMotion){pose(heldP,heldQ);}
  else if(age<.56){const u=ease(age,0,.56);object.position.lerpVectors(startP,cockP,u);object.quaternion.slerpQuaternions(startQ,cockQ,u);}
  else if(age<hitAt){const u=(age-.56)/(hitAt-.56);object.position.lerpVectors(cockP,impactP,u*u);object.quaternion.slerpQuaternions(cockQ,impactQ,u*u);}
  else{const u=ease(age,hitAt+.08,doneAt);object.position.lerpVectors(impactP,heldP,u);object.quaternion.slerpQuaternions(impactQ,heldQ,u);}
  if(age>=doneAt){phase='held';pose(heldP,heldQ);}
 }
 return {group,pickUp,strike,update,reset,get active(){return phase==='picking'||phase==='striking';},get held(){return phase!=='mounted';},get phase(){return phase;}};
}
