import * as THREE from './vendor/three.module.js';
import {weatheredMetal} from './industrial-materials.js?v=brighter-liquid';
import {createRestraintState} from './restraint-state.js?v=hinged-cuff';

const UP=new THREE.Vector3(0,1,0);
export function createPlayerRestraint(camera){
 const group=new THREE.Group();group.name='Player forearm chained to the rear pipes';
 const space=new THREE.Group();space.name='Camera-relative reaching hand';group.add(space);
 const state=createRestraintState(),sphere=new THREE.SphereGeometry(1,24,16);
 // Broad cel-shaded forms and an ink silhouette match Figsaw's drawn features.
 const bands=new THREE.DataTexture(new Uint8Array([75,145,205,255]),4,1,THREE.RedFormat);
 bands.minFilter=bands.magFilter=THREE.NearestFilter;bands.generateMipmaps=false;bands.needsUpdate=true;
 const skin=new THREE.MeshToonMaterial({color:0xd3aa87,gradientMap:bands,emissive:0x684333,emissiveIntensity:.025});
 const ink=new THREE.MeshBasicMaterial({color:0x201c19,side:THREE.BackSide});
 const iron=weatheredMetal(0xa5aaa2),edge=weatheredMetal(0xbfc5c0),black=new THREE.MeshStandardMaterial({color:0x151716,roughness:.9});
 const invisible=new THREE.MeshBasicMaterial({transparent:true,opacity:0,depthWrite:false,colorWrite:false});
 function mesh(geo,mat,parent=space){const m=new THREE.Mesh(geo,mat);m.castShadow=true;m.receiveShadow=true;parent.add(m);return m;}
 function ball(parent,pos,size,mat=skin){const m=mesh(sphere,mat,parent);m.position.set(...pos);m.scale.set(...size);return m;}
 function rod(parent,a,b,r,mat){a=new THREE.Vector3(...a);b=new THREE.Vector3(...b);const d=b.clone().sub(a),m=mesh(new THREE.CylinderGeometry(r,r,d.length(),20),mat,parent);m.position.copy(a).add(b).multiplyScalar(.5);m.quaternion.setFromUnitVectors(UP,d.normalize());return m;}
 function tube(parent,points,r,mat){return mesh(new THREE.TubeGeometry(new THREE.CatmullRomCurve3(points.map(p=>new THREE.Vector3(...p))),24,r,7,false),mat,parent);}
 const arm=new THREE.Group();arm.name='Cartoon forearm and right hand';space.add(arm);
 // Each digit is one rounded form; an expanded back face draws just its silhouette.
 function outline(m,width=.002){
  const geo=m.geometry.clone(),p=geo.attributes.position,n=geo.attributes.normal;
  for(let i=0;i<p.count;i++)p.setXYZ(i,p.getX(i)+n.getX(i)*width,p.getY(i)+n.getY(i)*width,p.getZ(i)+n.getZ(i)*width);
  p.needsUpdate=true;geo.computeBoundingSphere();const shell=new THREE.Mesh(geo,ink);shell.name='Ink silhouette';shell.raycast=()=>{};m.add(shell);
 }
 function skinForm(parent,sections,segments=28){
  const points=sections.map(([z,x,y,rx,ry])=>({z,x,y,rx,ry})),verts=[],uvs=[],indices=[];
  for(let j=0;j<points.length;j++){
   const p=points[j];for(let i=0;i<=segments;i++){
    const a=i/segments*Math.PI*2,c=Math.cos(a),sn=Math.sin(a);
    verts.push(p.x+p.rx*c,p.y+p.ry*sn,p.z);uvs.push(i/segments,j/(points.length-1));
    if(j&&i){const b=j*(segments+1)+i;indices.push(b,b-segments-2,b-1,b,b-segments-1,b-segments-2);}
   }
  }
  const geo=new THREE.BufferGeometry();geo.setAttribute('position',new THREE.Float32BufferAttribute(verts,3));geo.setAttribute('uv',new THREE.Float32BufferAttribute(uvs,2));geo.setIndex(indices);geo.computeVertexNormals();const m=mesh(geo,skin,parent);outline(m);return m;
 }
 const upperarm=skinForm(arm,[[0,0,0,.074,.058],[-.18,.004,0,.073,.056],[-.42,.008,.003,.069,.052],[-.70,.006,.002,.061,.047],[-1,0,0,.054,.042]],40);upperarm.name='Upper arm';
 const elbowJoint=ball(arm,[0,0,0],[.056,.046,.052]);elbowJoint.name='Bent elbow';
 const forearm=skinForm(arm,[[0,0,0,.054,.042],[-.12,.004,.002,.058,.043],[-.30,.010,.004,.057,.041],[-.52,.012,.004,.051,.036],[-.73,.008,.002,.044,.030],[-.90,.003,0,.039,.027],[-1,0,0,.038,.026]],40);forearm.name='Tapered forearm';
 const hand=new THREE.Group();hand.name='Cartoon right hand';arm.add(hand);
 // Keep the wrist narrow enough for the existing fitted cuff; exaggerate only
 // the palm and fingers so the same hinged release still clears the hand.
 skinForm(hand,[[.025,0,0,.037,.025],[0,0,0,.040,.026],[-.028,-.005,0,.055,.034],[-.060,-.005,0,.064,.037],[-.098,-.002,-.002,.064,.034],[-.128,.002,-.003,.059,.028],[-.146,.004,-.004,.046,.020],[-.155,.004,-.004,.006,.004]],40);
 const fingers=[];
 for(const [i,x,length]of[[0,-.049,.109],[1,-.015,.124],[2,.021,.116],[3,.053,.091]]){
  const finger=new THREE.Group();finger.position.set(x,-.002,-.125+(i===3?.012:0));finger.rotation.y=(i-1.4)*-.035;hand.add(finger);fingers.push(finger);
  const r=i===3?.016:.0185;
  skinForm(finger,[[.014,0,0,r*.92,r*.90],[0,0,0,r,r],[-length*.22,0,-.002,r,r*.98],[-length*.48,0,-.005,r*.96,r*.94],[-length*.70,0,-.009,r*.92,r*.90],[-length*.84,0,-.012,r*.86,r*.84],[-length*.94,0,-.014,r*.64,r*.64],[-length*.985,0,-.014,r*.30,r*.30],[-length,0,-.014,.0003,.0003]]);
 }
 const thumb=new THREE.Group();thumb.position.set(-.043,-.008,-.037);thumb.rotation.y=.71;thumb.rotation.z=-.26;hand.add(thumb);
 skinForm(thumb,[[.018,0,0,.031,.028],[0,0,0,.030,.028],[-.024,-.003,0,.027,.025],[-.046,-.005,.002,.024,.023],[-.065,-.006,.002,.023,.022],[-.081,-.006,.001,.019,.018],[-.092,-.006,0,.011,.011],[-.097,-.006,0,.0003,.0003]]);
 const restraint=new THREE.Group();restraint.name='Wrist cuff and chain — right-click to detach';restraint.userData.playerChain=true;space.add(restraint);
 const cuff=new THREE.Group();cuff.name='Close-fitting oval wrist cuff';restraint.add(cuff);
 const hingeX=-.044;
 function cuffHalf(start,end,parent){
  const shape=new THREE.Shape();shape.absellipse(0,0,.047,.034,start,end,false);
  shape.lineTo(Math.cos(end)*.0405,Math.sin(end)*.028);
  shape.absellipse(0,0,.0405,.028,end,start,true);shape.closePath();
  const geo=new THREE.ExtrudeGeometry(shape,{depth:.030,bevelEnabled:true,bevelSize:.0008,bevelThickness:.0008,bevelSegments:2,curveSegments:32});
  const m=mesh(geo,iron,parent);m.position.z=-.015;return m;
 }
 const lowerCuff=cuffHalf(Math.PI,Math.PI*2,cuff);lowerCuff.name='Fixed lower cuff';
 // Both halves meet at the left hinge pin. The upper half rotates around that
 // physical edge, never around the wrist center or along the forearm.
 const gate=new THREE.Group();gate.name='Hinged upper cuff';gate.position.x=hingeX;cuff.add(gate);
 const upperCuff=cuffHalf(0,Math.PI,gate);upperCuff.position.x=-hingeX;
 rod(cuff,[hingeX,0,-.023],[hingeX,0,.023],.0055,edge);
 for(const z of[-.021,.021])ball(cuff,[hingeX,0,z],[.0065,.0065,.002],edge);
 const receiver=mesh(new THREE.BoxGeometry(.013,.016,.033),iron,cuff);receiver.position.set(.046,-.007,0);
 const latch=new THREE.Group();latch.name='Spring-loaded locking clip';latch.position.set(.045-hingeX,.008,0);gate.add(latch);
 const clasp=mesh(new THREE.BoxGeometry(.009,.021,.025),edge,latch);clasp.position.set(.003,-.008,0);
 ball(latch,[.008,-.006,.006],[.0018,.004,.0015],black);
 const chainEye=mesh(new THREE.TorusGeometry(.010,.0032,8,20),edge,cuff);chainEye.position.set(.051,-.019,0);chainEye.rotation.y=Math.PI/2;
 const cuffPick=mesh(new THREE.CylinderGeometry(.060,.060,.07,16),invisible,cuff);cuffPick.rotation.x=Math.PI/2;cuffPick.castShadow=false;
 // Rear-wall pipe and proper bolted pipe saddles establish the other end of the tether.
 const pipes=new THREE.Group();pipes.name='Rusted rear pipe anchoring the wrist chain';group.add(pipes);
 tube(pipes,[[3.30,.13,4.16],[3.30,.42,4.16],[3.30,2.16,4.16],[3.27,2.32,4.16],[2.78,2.34,4.16]],.045,iron);
 for(const y of[.30,1.25,2.08]){
  const plate=mesh(new THREE.BoxGeometry(.20,.16,.025),iron,pipes);plate.position.set(3.30,y,4.37);
  for(const x of[3.23,3.37]){rod(pipes,[x,y,4.35],[x,y,4.14],.008,edge);const bolt=mesh(new THREE.CylinderGeometry(.017,.017,.018,6),edge,pipes);bolt.rotation.x=Math.PI/2;bolt.position.set(x,y,4.12);}
  const clamp=mesh(new THREE.TorusGeometry(.058,.010,8,32),edge,pipes);clamp.rotation.x=Math.PI/2;clamp.position.set(3.30,y,4.16);
 }
 const pipeAnchor=new THREE.Vector3(3.30,.28,4.10),pipeHook=new THREE.Vector3();
 const anchorRing=mesh(new THREE.TorusGeometry(.055,.009,8,24),edge,pipes);anchorRing.position.set(3.30,.28,4.10);anchorRing.rotation.y=Math.PI/2;
 const linkPoints=[];for(let i=0;i<48;i++){const a=i/48*Math.PI*2;linkPoints.push(new THREE.Vector3(Math.cos(a)*.015,Math.sin(a)*.025,0));}
 const linkGeo=new THREE.TubeGeometry(new THREE.CatmullRomCurve3(linkPoints,true),48,.0045,7,true);
 const links=new THREE.InstancedMesh(linkGeo,edge,360);links.name='Heavy interlocking wrist chain';links.castShadow=true;links.receiveShadow=true;links.frustumCulled=false;restraint.add(links);
 const pickLinks=new THREE.InstancedMesh(new THREE.SphereGeometry(1,8,6),invisible,360);pickLinks.frustumCulled=false;restraint.add(pickLinks);
 const wrist=new THREE.Vector3(),elbow=new THREE.Vector3(),shoulder=new THREE.Vector3(),start=new THREE.Vector3(),delta=new THREE.Vector3(),tangent=new THREE.Vector3(),dummy=new THREE.Object3D();
 const restWrist=new THREE.Vector3(.29,-.30,-.78),restElbow=new THREE.Vector3(.48,-.43,-.56);
 const chainedReach=new THREE.Vector3(.13,-.27,-.87),freeReach=new THREE.Vector3(-.14,-.31,-.97),worldPoint=new THREE.Vector3();
 const reachElbow=new THREE.Vector3(.41,-.35,-.64),freeElbow=new THREE.Vector3(.15,-.39,-.78),shoulderOffset=new THREE.Vector3(.12,-.34,.22),boneAxis=new THREE.Vector3(0,0,-1);
 const releasedWrist=new THREE.Vector3(),releasedElbow=new THREE.Vector3(),releasedRotation=new THREE.Quaternion(),releasedCuffRotation=new THREE.Quaternion();
 let hasReleasePose=false;
 let chainLength=3;
 const sideways=new THREE.Vector3(1,0,0),samples=Array.from({length:49},()=>new THREE.Vector3());
 function chainPoint(t,amplitude,out){out.copy(start).lerp(pipeHook,t);out.addScaledVector(sideways,Math.sin(Math.PI*t)*amplitude);out.y-=Math.sin(Math.PI*t)*amplitude*.9;worldPoint.copy(out);space.localToWorld(worldPoint);worldPoint.y=Math.max(.032,worldPoint.y);space.worldToLocal(worldPoint);out.copy(worldPoint);return out;}
 function updateChain(){
  let lo=0,hi=1.5;for(let iteration=0;iteration<9;iteration++){const a=(lo+hi)/2;let len=0;for(let j=0;j<samples.length;j++){chainPoint(j/(samples.length-1),a,samples[j]);if(j)len+=samples[j].distanceTo(samples[j-1]);}if(len>chainLength)hi=a;else lo=a;}
  const curve=new THREE.CatmullRomCurve3(samples),length=curve.getLength(),count=Math.min(360,Math.max(2,Math.ceil(length/.038)));links.count=pickLinks.count=count;
  for(let i=0;i<count;i++){
   const u=i/(count-1);curve.getPointAt(u,dummy.position);curve.getTangentAt(u,tangent);dummy.quaternion.setFromUnitVectors(UP,tangent);if(i%2)dummy.rotateY(Math.PI/2);dummy.scale.set(1,1,1);dummy.updateMatrix();links.setMatrixAt(i,dummy.matrix);
   dummy.scale.set(.032,.026,.032);dummy.updateMatrix();pickLinks.setMatrixAt(i,dummy.matrix);
  }
  links.instanceMatrix.needsUpdate=true;pickLinks.instanceMatrix.needsUpdate=true;
 }
 function update(time,reducedMotion=false,keepVisible=false){
  const pose=state.sample(time,keepVisible),reach=pose.reach;
  // The entire arm follows translation, yaw AND pitch; the far chain end remains
  // physically attached to the room's pipe. FOV changes preserve the framing.
  space.position.copy(camera.position);space.quaternion.copy(camera.quaternion);
  const framing=Math.tan(THREE.MathUtils.degToRad(camera.fov/2))/Math.tan(THREE.MathUtils.degToRad(62/2));
  space.scale.set(framing,framing,1);space.updateWorldMatrix(true,false);
  space.visible=pose.visible;
  if(!pose.visible)return pose.openLaptop;
  pipeHook.copy(pipeAnchor);space.worldToLocal(pipeHook);
  const reveal=reducedMotion?1:pose.reveal,withdraw=(1-reveal)*.55;
  wrist.copy(restWrist).lerp(pose.locked?chainedReach:freeReach,reach);
  if(pose.locked)wrist.y+=reducedMotion?0:pose.strain;
  // Two fixed-length limb segments articulate at the elbow instead of stretching
  // one long cylinder from the bottom of the screen to the hand.
  elbow.copy(restElbow).lerp(pose.locked?reachElbow:freeElbow,reach);
  const releaseActive=!pose.locked&&pose.releaseElapsed<1.8&&hasReleasePose;
  const hingeOpen=reducedMotion&&!pose.locked?1:pose.hingeOpen;
  const cuffDrop=reducedMotion&&!pose.locked?1:pose.cuffDrop;
  if(releaseActive){
   wrist.copy(releasedWrist);elbow.copy(releasedElbow);
   const pull=reducedMotion?1:pose.handFree;
   wrist.y+=pull*.055;wrist.z+=pull*.025;
  }
  wrist.y-=withdraw;elbow.y-=withdraw;
  delta.copy(elbow).sub(wrist).setLength(.35);elbow.copy(wrist).add(delta);
  shoulder.copy(elbow).add(shoulderOffset);
  upperarm.position.copy(shoulder);delta.copy(elbow).sub(shoulder);upperarm.quaternion.setFromUnitVectors(boneAxis,delta.clone().normalize());upperarm.scale.z=delta.length();
  forearm.position.copy(elbow);delta.copy(wrist).sub(elbow);forearm.quaternion.setFromUnitVectors(boneAxis,delta.clone().normalize());forearm.scale.z=.35;
  elbowJoint.position.copy(elbow);elbowJoint.quaternion.copy(forearm.quaternion);
  hand.position.copy(wrist);hand.quaternion.copy(forearm.quaternion);hand.rotateX(-.12+reach*.08);hand.rotateY(.13-reach*.06);hand.rotateZ(-.04);
  if(releaseActive)hand.quaternion.slerp(releasedRotation,1-pose.handFree);
  fingers.forEach((f,i)=>{f.rotation.x=-.06+(1-reach)*(.11+i*.015);});
  if(pose.locked){
   cuff.position.copy(wrist);cuff.quaternion.copy(hand.quaternion);gate.rotation.z=0;latch.rotation.z=0;
  }else{
   // Hold the cuff on the wrist while the clip snaps and the gate swings clear.
   // Only then can the open cuff fall; it never travels over the closed hand.
   cuff.position.copy(releasedWrist);cuff.position.y-=withdraw+cuffDrop*.32;cuff.position.x+=cuffDrop*.08;
   cuff.quaternion.copy(releasedCuffRotation);cuff.rotateX(cuffDrop*.8);cuff.rotateZ(cuffDrop*.42);
   gate.rotation.z=hingeOpen*1.95;latch.rotation.z=-(reducedMotion?1:pose.unlatch)*.85;
  }
  cuff.updateMatrix();start.set(.051,-.019,0).applyMatrix4(cuff.matrix);
  chainLength=start.distanceTo(pipeHook)+(pose.locked?.24*(1-reach)+.018:.42);updateChain();
  return pose.openLaptop;
 }
 function detach(time){
  if(!state.locked)return false;
  releasedWrist.copy(wrist);releasedElbow.copy(elbow);releasedRotation.copy(hand.quaternion);releasedCuffRotation.copy(cuff.quaternion);hasReleasePose=true;
  return state.detach(time);
 }
 function reset(){state.reset();hasReleasePose=false;gate.rotation.z=0;latch.rotation.z=0;update(0,true);}
 update(0,true);
 return {group,target:restraint,state,update,reset,setEnvironment(map){for(const mat of[iron,edge]){mat.envMap=map;mat.envMapIntensity=1.15;mat.needsUpdate=true;}},get locked(){return state.locked;},requestReach:time=>state.requestReach(time),detach};
}
