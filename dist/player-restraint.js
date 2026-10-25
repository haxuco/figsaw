import * as THREE from './vendor/three.module.js';
import {weatheredMetal} from './industrial-materials.js?v=brighter-liquid';
import {createRestraintState} from './restraint-state.js';

const UP=new THREE.Vector3(0,1,0);
export function createPlayerRestraint(homePosition,homeYaw){
 const group=new THREE.Group();group.name='Player forearm chained to the rear pipes';
 const space=new THREE.Group();space.position.set(homePosition.x,0,homePosition.z);space.rotation.y=homeYaw;group.add(space);
 const state=createRestraintState(),sphere=new THREE.SphereGeometry(1,24,16);
 const skin=new THREE.MeshStandardMaterial({color:0xb68b70,roughness:.77});
 const pores=new Uint8Array(64*64*4);let seed=381;for(let i=0;i<pores.length;i+=4){seed=(1664525*seed+1013904223)>>>0;const v=154+(seed>>>25);pores[i]=pores[i+1]=pores[i+2]=v;pores[i+3]=255;}
 const poreMap=new THREE.DataTexture(pores,64,64);poreMap.wrapS=poreMap.wrapT=THREE.RepeatWrapping;poreMap.needsUpdate=true;skin.bumpMap=poreMap;skin.bumpScale=.0005;
 const nails=new THREE.MeshPhysicalMaterial({color:0xc9aa94,roughness:.49,clearcoat:.12});
 const creases=new THREE.MeshStandardMaterial({color:0x765542,roughness:1,transparent:true,opacity:.34});
 const iron=weatheredMetal(0xa5aaa2),edge=weatheredMetal(0xbfc5c0),black=new THREE.MeshStandardMaterial({color:0x151716,roughness:.9});
 const invisible=new THREE.MeshBasicMaterial({transparent:true,opacity:0,depthWrite:false,colorWrite:false});
 function mesh(geo,mat,parent=space){const m=new THREE.Mesh(geo,mat);m.castShadow=true;m.receiveShadow=true;parent.add(m);return m;}
 function ball(parent,pos,size,mat=skin){const m=mesh(sphere,mat,parent);m.position.set(...pos);m.scale.set(...size);return m;}
 function rod(parent,a,b,r,mat){a=new THREE.Vector3(...a);b=new THREE.Vector3(...b);const d=b.clone().sub(a),m=mesh(new THREE.CylinderGeometry(r,r,d.length(),20),mat,parent);m.position.copy(a).add(b).multiplyScalar(.5);m.quaternion.setFromUnitVectors(UP,d.normalize());return m;}
 function tube(parent,points,r,mat){return mesh(new THREE.TubeGeometry(new THREE.CatmullRomCurve3(points.map(p=>new THREE.Vector3(...p))),24,r,7,false),mat,parent);}
 const arm=new THREE.Group();arm.name='Forearm and right hand';space.add(arm);
 const profile=[[0,0],[.079,0],[.085,.10],[.081,.30],[.070,.60],[.054,.88],[.052,1],[0,1]].map(([x,y])=>new THREE.Vector2(x,y));
 const forearm=mesh(new THREE.LatheGeometry(profile,32),skin,arm);
 const elbowJoint=ball(arm,[0,0,0],[.083,.075,.08]);
 const hand=new THREE.Group();hand.name='Right hand with articulated fingers';arm.add(hand);
 ball(hand,[0,0,-.072],[.071,.035,.092]);
 ball(hand,[-.034,-.003,-.040],[.045,.035,.058]);
 const fingers=[];
 for(const [i,x,length]of[[0,-.050,.135],[1,-.016,.153],[2,.020,.144],[3,.052,.112]]){
  const finger=new THREE.Group();finger.position.set(x,.002,-.132+(i===3?.014:0));finger.rotation.y=(i-1.4)*-.045;hand.add(finger);fingers.push(finger);
  let joint=finger;const lengths=[length*.43,length*.34,length*.23];
  for(let j=0;j<3;j++){
   const phalanx=new THREE.Group();joint.add(phalanx);if(j)phalanx.position.z=-lengths[j-1];phalanx.rotation.x=j===0?-.04:.15;const r=(i===3?.0125:.0155)*(1-j*.10),len=lengths[j];
   ball(phalanx,[0,0,-len*.50],[r,r,len*.55]);ball(phalanx,[0,0,0],[r*1.03,r*.96,r]);
   tube(phalanx,[[-r*.7,r*.87,-.007],[0,r*1.02,-.010],[r*.7,r*.87,-.007]],.00075,creases);
   if(j===2){const nail=ball(phalanx,[0,r*.86,-len*.53],[r*.70,.0022,len*.32],nails);nail.rotation.x=-.08;}
   joint=phalanx;
  }
 }
 const thumb=new THREE.Group();thumb.position.set(-.063,-.004,-.030);thumb.rotation.y=.78;thumb.rotation.z=-.14;hand.add(thumb);
 ball(thumb,[0,0,-.035],[.024,.024,.047]);ball(thumb,[0,.003,-.087],[.018,.019,.030]);ball(thumb,[0,.019,-.092],[.012,.002,.017],nails);
 for(const x of[-.038,-.012,.018,.044])tube(hand,[[x*.65,.027,-.013],[x,.034,-.064],[x,.028,-.121]],.0011,creases);
 const restraint=new THREE.Group();restraint.name='Wrist cuff and chain — right-click to detach';restraint.userData.playerChain=true;space.add(restraint);
 const cuff=new THREE.Group();restraint.add(cuff);
 function cuffHalf(start,end){const shape=new THREE.Shape();shape.absarc(0,0,.074,start,end,false);shape.lineTo(Math.cos(end)*.060,Math.sin(end)*.060);shape.absarc(0,0,.060,end,start,true);shape.closePath();const m=mesh(new THREE.ExtrudeGeometry(shape,{depth:.045,bevelEnabled:true,bevelSize:.002,bevelThickness:.002,bevelSegments:2,curveSegments:24}),iron,cuff);m.position.z=-.0225;return m;}
 const halves=[cuffHalf(-Math.PI/2,Math.PI/2),cuffHalf(Math.PI/2,Math.PI*1.5)];
 const clasp=mesh(new THREE.BoxGeometry(.033,.045,.052),edge,cuff);clasp.position.x=.078;
 const keyhole=ball(cuff,[.096,0,.017],[.004,.009,.003],black);
 for(const y of[-.015,.015])ball(cuff,[.097,y,-.012],[.004,.004,.003],edge);
 const hinge=rod(cuff,[-.072,0,-.035],[-.072,0,.035],.012,edge);
 const cuffPick=mesh(new THREE.CylinderGeometry(.092,.092,.10,16),invisible,cuff);cuffPick.rotation.x=Math.PI/2;cuffPick.castShadow=false;
 // Rear-wall pipe and proper bolted pipe saddles establish the other end of the tether.
 const pipes=new THREE.Group();pipes.name='Rusted rear pipe anchoring the wrist chain';group.add(pipes);
 tube(pipes,[[3.30,.13,4.16],[3.30,.42,4.16],[3.30,2.16,4.16],[3.27,2.32,4.16],[2.78,2.34,4.16]],.045,iron);
 for(const y of[.30,1.25,2.08]){
  const plate=mesh(new THREE.BoxGeometry(.20,.16,.025),iron,pipes);plate.position.set(3.30,y,4.37);
  for(const x of[3.23,3.37]){rod(pipes,[x,y,4.35],[x,y,4.14],.008,edge);const bolt=mesh(new THREE.CylinderGeometry(.017,.017,.018,6),edge,pipes);bolt.rotation.x=Math.PI/2;bolt.position.set(x,y,4.12);}
  const clamp=mesh(new THREE.TorusGeometry(.058,.010,8,32),edge,pipes);clamp.rotation.x=Math.PI/2;clamp.position.set(3.30,y,4.16);
 }
 const pipeHook=new THREE.Vector3(3.30,.28,4.10);space.updateWorldMatrix(true,false);space.worldToLocal(pipeHook);
 const anchorRing=mesh(new THREE.TorusGeometry(.055,.009,8,24),edge,pipes);anchorRing.position.set(3.30,.28,4.10);anchorRing.rotation.y=Math.PI/2;
 const linkPoints=[];for(let i=0;i<48;i++){const a=i/48*Math.PI*2;linkPoints.push(new THREE.Vector3(Math.cos(a)*.015,Math.sin(a)*.025,0));}
 const linkGeo=new THREE.TubeGeometry(new THREE.CatmullRomCurve3(linkPoints,true),48,.0045,7,true);
 const links=new THREE.InstancedMesh(linkGeo,edge,90);links.name='Heavy interlocking wrist chain';links.castShadow=true;links.receiveShadow=true;links.frustumCulled=false;restraint.add(links);
 const pickLinks=new THREE.InstancedMesh(new THREE.SphereGeometry(1,8,6),invisible,90);pickLinks.frustumCulled=false;restraint.add(pickLinks);
 const wrist=new THREE.Vector3(),elbow=new THREE.Vector3(),start=new THREE.Vector3(),delta=new THREE.Vector3(),tangent=new THREE.Vector3(),dummy=new THREE.Object3D();
 const restWrist=new THREE.Vector3(.42,.40,-.88),restElbow=new THREE.Vector3(.55,.19,-.20),chainLength=restWrist.distanceTo(pipeHook)+.24;
 const sideways=new THREE.Vector3(1,0,0),samples=Array.from({length:49},()=>new THREE.Vector3());
 function chainPoint(t,amplitude,out){out.copy(start).lerp(pipeHook,t);out.addScaledVector(sideways,Math.sin(Math.PI*t)*amplitude);out.y=Math.max(.032,out.y-Math.sin(Math.PI*t)*amplitude*.9);return out;}
 function updateChain(){
  let lo=0,hi=1.5;for(let iteration=0;iteration<9;iteration++){const a=(lo+hi)/2;let len=0;for(let j=0;j<samples.length;j++){chainPoint(j/(samples.length-1),a,samples[j]);if(j)len+=samples[j].distanceTo(samples[j-1]);}if(len>chainLength)hi=a;else lo=a;}
  const curve=new THREE.CatmullRomCurve3(samples),length=curve.getLength(),count=Math.min(90,Math.ceil(length/.038));links.count=pickLinks.count=count;
  for(let i=0;i<count;i++){
   const u=i/(count-1);curve.getPointAt(u,dummy.position);curve.getTangentAt(u,tangent);dummy.quaternion.setFromUnitVectors(UP,tangent);if(i%2)dummy.rotateY(Math.PI/2);dummy.scale.set(1,1,1);dummy.updateMatrix();links.setMatrixAt(i,dummy.matrix);
   dummy.scale.set(.032,.026,.032);dummy.updateMatrix();pickLinks.setMatrixAt(i,dummy.matrix);
  }
  links.instanceMatrix.needsUpdate=true;pickLinks.instanceMatrix.needsUpdate=true;
 }
 function update(time,reducedMotion=false){
  const pose=state.sample(time),reach=pose.reach;
  wrist.copy(restWrist).lerp(pose.locked?new THREE.Vector3(.01,.39,-1.05):new THREE.Vector3(-.41,.16,-1.18),reach);
  if(pose.locked){delta.copy(wrist).sub(pipeHook);if(delta.length()>chainLength-.025)wrist.copy(pipeHook).add(delta.setLength(chainLength-.025));wrist.y+=reducedMotion?0:pose.strain;}
  elbow.copy(restElbow).lerp(pose.locked?new THREE.Vector3(.25,.24,-.38):new THREE.Vector3(-.04,.12,-.61),reach);
  forearm.position.copy(elbow);delta.copy(wrist).sub(elbow);forearm.quaternion.setFromUnitVectors(UP,delta.clone().normalize());forearm.scale.y=delta.length();elbowJoint.position.copy(elbow);
  hand.position.copy(wrist);hand.rotation.set(.04-reach*.12,.12+reach*.36,-.08+reach*.05);
  fingers.forEach((f,i)=>{f.rotation.x=(1-reach)*(.09+i*.02)-reach*.13;});
  if(pose.locked){cuff.position.copy(wrist);cuff.rotation.copy(hand.rotation);halves[0].rotation.y=halves[1].rotation.y=0;}
  else{cuff.position.copy(restWrist).lerp(new THREE.Vector3(.49,.080,-.36),pose.release);cuff.rotation.set(pose.release*Math.PI/2,0,pose.release*.45);halves[0].rotation.y=pose.release*1.12;halves[1].rotation.y=-pose.release*.72;}
  cuff.updateMatrix();start.set(.098,0,0).applyMatrix4(cuff.matrix);updateChain();
  return pose.openLaptop;
 }
 function reset(){state.reset();update(0,true);}
 update(0,true);
 return {group,target:restraint,state,update,reset,setEnvironment(map){for(const mat of[iron,edge]){mat.envMap=map;mat.envMapIntensity=1.15;mat.needsUpdate=true;}},get locked(){return state.locked;},requestReach:time=>state.requestReach(time),detach:time=>state.detach(time)};
}
