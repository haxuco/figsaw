import {renderQuality as quality} from './render-quality.js';
import * as THREE from './vendor/three.module.js';
import {weatheredMetal} from './industrial-materials.js?v=brighter-liquid';
import {createRestraintState} from './restraint-state.js?v=key-lock';
import {createReachingForearm,solveReachElbow} from './reaching-arm.js';
import {addHandleCurl} from './handle-grip.js';

const UP=new THREE.Vector3(0,1,0);
export function createPlayerRestraint(camera,options={}){
 const group=new THREE.Group();group.name='Player forearm chained to the rear pipes';
 const space=new THREE.Group();space.name='Camera-relative reaching hand';group.add(space);
 const state=createRestraintState(options),sphere=new THREE.SphereGeometry(1,quality.mobile?12:24,quality.mobile?8:16);
 // Rounded proportions and a fine ink edge match the character, with smooth
 // matte shading so the arm reads as a volume rather than a faceted stick.
 const skin=new THREE.MeshStandardMaterial({color:0xd3aa87,roughness:.86,metalness:0,emissive:0x684333,emissiveIntensity:.025});
 const ink=new THREE.MeshBasicMaterial({color:0x201c19,side:THREE.BackSide});
 const iron=weatheredMetal(0xa5aaa2),edge=weatheredMetal(0xbfc5c0),black=new THREE.MeshStandardMaterial({color:0x151716,roughness:.9});
 const cuffSteel=weatheredMetal(0x96a5ae);cuffSteel.map=null;cuffSteel.metalnessMap=null;cuffSteel.metalness=.86;cuffSteel.roughness=.66;cuffSteel.bumpScale=.00035;
 const polished=new THREE.MeshStandardMaterial({color:0xafbdc5,metalness:.92,roughness:.29});
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
 const upperarm=skinForm(arm,[[0,0,0,.097,.078],[-.18,.004,0,.099,.077],[-.42,.008,.003,.092,.073],[-.70,.006,.002,.084,.066],[-1,0,0,.076,.061]],40);upperarm.name='Upper arm';
 const elbowJoint=ball(arm,[0,0,0],[.076,.061,.068]);elbowJoint.name='Bent elbow';
 const forearmShape=createReachingForearm(skin,ink);arm.add(forearmShape.mesh);
 const forearmRotation=new THREE.Quaternion();
 const hand=new THREE.Group();hand.name='Cartoon right hand';arm.add(hand);
 const sawContact=new THREE.Object3D();sawContact.name='Saw contact above wrist';sawContact.position.set(0,.044,.095);hand.add(sawContact);
 const handleContact=new THREE.Object3D();handleContact.name='Mug handle contact';handleContact.position.set(0,-.036,-.145);hand.add(handleContact);
 // A narrow wrist joins the fuller palm; the cuff sits behind the palm flare.
 skinForm(hand,[[.025,0,0,.037,.025],[0,0,0,.040,.026],[-.030,-.005,0,.059,.036],[-.066,-.005,0,.071,.040],[-.108,-.002,-.002,.071,.037],[-.140,.002,-.003,.065,.031],[-.160,.004,-.004,.051,.022],[-.170,.004,-.004,.006,.004]],40);
 const fingers=[],fingerCurls=[];
 for(const [i,x,length,spread]of[[0,-.056,.120,.19],[1,-.018,.136,.055],[2,.023,.128,-.08],[3,.060,.100,-.23]]){
  const finger=new THREE.Group();finger.position.set(x,-.002,-.137+(i===3?.013:0));finger.rotation.y=spread;hand.add(finger);fingers.push(finger);
  const r=i===3?.0175:.020;
  const digit=skinForm(finger,[[.014,0,0,r*.92,r*.90],[0,0,0,r,r],[-length*.22,0,-.002,r,r*.98],[-length*.48,0,-.005,r*.96,r*.94],[-length*.70,0,-.009,r*.92,r*.90],[-length*.84,0,-.012,r*.86,r*.84],[-length*.94,0,-.014,r*.64,r*.64],[-length*.985,0,-.014,r*.30,r*.30],[-length,0,-.014,.0003,.0003]]);
  digit.name=`Finger ${i+1}`;fingerCurls.push(addHandleCurl(digit,length));
  finger.userData.spread=spread;
 }
 const fingertip=new THREE.Object3D();fingertip.name='Lid contact fingertip';fingertip.position.set(0,-.014,-.136);fingers[1].add(fingertip);
 const thumb=new THREE.Group();thumb.position.set(-.049,-.008,-.041);thumb.rotation.y=.88;thumb.rotation.z=-.26;hand.add(thumb);
 skinForm(thumb,[[.018,0,0,.033,.030],[0,0,0,.032,.030],[-.027,-.003,0,.029,.027],[-.051,-.005,.002,.026,.025],[-.072,-.006,.002,.025,.024],[-.089,-.006,.001,.021,.020],[-.101,-.006,0,.012,.012],[-.107,-.006,0,.0003,.0003]]);
 const restraint=new THREE.Group();restraint.name='Wrist cuff and chain — right-click to detach';restraint.userData.playerChain=true;space.add(restraint);
 const cuff=new THREE.Group();cuff.name='Close-fitting oval wrist cuff';restraint.add(cuff);
 const cuffOffset=new THREE.Vector3(0,0,.033),hingeX=-.056;
 function cuffHalf(start,end,parent){
  const shape=new THREE.Shape();shape.absellipse(0,0,.061,.049,start,end,false);
  shape.lineTo(Math.cos(end)*.050,Math.sin(end)*.038);
  shape.absellipse(0,0,.050,.038,end,start,true);shape.closePath();
  const geo=new THREE.ExtrudeGeometry(shape,{depth:.044,bevelEnabled:true,bevelSize:.0006,bevelThickness:.0006,bevelSegments:2,curveSegments:28});
  const m=mesh(geo,cuffSteel,parent);m.position.z=-.022;
  // Worn, polished rims catch the room light and show the band's thickness.
  for(const z of[0,.044]){
   const points=Array.from({length:25},(_,i)=>{const a=start+(end-start)*i/24;return [.0608*Math.cos(a),.0488*Math.sin(a),z];});
   const rim=tube(m,points,.0016,polished);rim.name='Polished shackle rim';
  }
  return m;
 }
 const lowerCuff=cuffHalf(Math.PI,Math.PI*2,cuff);lowerCuff.name='Fixed lower cuff';
 const gate=new THREE.Group();gate.name='Hinged upper cuff';gate.position.x=hingeX;cuff.add(gate);
 const upperCuff=cuffHalf(0,Math.PI,gate);upperCuff.position.x=-hingeX;
 rod(cuff,[hingeX,0,-.030],[hingeX,0,.030],.008,polished);
 for(const z of[-.029,.029])ball(cuff,[hingeX,0,z],[.009,.009,.003],polished);
 const receiver=mesh(new THREE.BoxGeometry(.021,.027,.043),cuffSteel,cuff);receiver.position.set(.064,-.010,0);
 const latch=new THREE.Group();latch.name='Spring-loaded locking clip';latch.position.set(.064-hingeX,.012,0);gate.add(latch);
 const clasp=mesh(new THREE.BoxGeometry(.013,.027,.036),polished,latch);clasp.position.set(.003,-.008,0);
 // Recessed keyhole and rivets make the locking hardware readable at arm's length.
 ball(cuff,[.064,-.006,-.0225],[.0038,.0038,.001],black);
 const keySlot=mesh(new THREE.BoxGeometry(.003,.008,.0015),black,cuff);keySlot.position.set(.064,-.011,-.0225);
 for(const z of[-.015,.015])ball(latch,[.010,-.007,z],[.002,.003,.003],polished);
 const chainEye=mesh(new THREE.TorusGeometry(.014,.0048,8,24),polished,cuff);chainEye.name='Welded chain attachment';chainEye.position.set(.076,-.019,0);chainEye.rotation.y=Math.PI/2;
 const cuffPick=mesh(new THREE.CylinderGeometry(.078,.078,.08,16),invisible,cuff);cuffPick.rotation.x=Math.PI/2;cuffPick.castShadow=false;
 // Rear-wall pipe and proper bolted pipe saddles establish the other end of the tether.
 const pipes=new THREE.Group();pipes.name='Rusted rear pipe anchoring the wrist chain';group.add(pipes);
 tube(pipes,[[3.30,.13,4.16],[3.30,.42,4.16],[3.30,2.16,4.16],[3.27,2.32,4.16],[2.78,2.34,4.16]],.045,iron);
 for(const y of[.30,1.25,2.08]){
  const plate=mesh(new THREE.BoxGeometry(.20,.16,.025),iron,pipes);plate.position.set(3.30,y,4.37);
  for(const x of[3.23,3.37]){rod(pipes,[x,y,4.35],[x,y,4.14],.008,edge);const bolt=mesh(new THREE.CylinderGeometry(.017,.017,.018,6),edge,pipes);bolt.rotation.x=Math.PI/2;bolt.position.set(x,y,4.12);}
  const clamp=mesh(new THREE.TorusGeometry(.058,.010,8,32),edge,pipes);clamp.rotation.x=Math.PI/2;clamp.position.set(3.30,y,4.16);
 }
 const pipeAnchor=new THREE.Vector3(3.30,2.08,4.10),pipeHook=new THREE.Vector3();
 const anchorRing=mesh(new THREE.TorusGeometry(.055,.009,8,24),edge,pipes);anchorRing.name='Raised wrist-chain pipe anchor';anchorRing.position.copy(pipeAnchor);anchorRing.rotation.y=Math.PI/2;
 const linkPoints=[];for(let i=0;i<48;i++){const a=i/48*Math.PI*2;linkPoints.push(new THREE.Vector3(Math.cos(a)*.017,Math.sin(a)*.028,0));}
 const linkGeo=new THREE.TubeGeometry(new THREE.CatmullRomCurve3(linkPoints,true),quality.mobile?12:32,.0055,quality.mobile?4:6,true);
 const links=new THREE.InstancedMesh(linkGeo,polished,180);links.name='Heavy interlocking wrist chain';links.castShadow=true;links.receiveShadow=true;links.frustumCulled=false;restraint.add(links);
 const pickLinks=new THREE.InstancedMesh(new THREE.SphereGeometry(1,8,6),invisible,180);pickLinks.frustumCulled=false;restraint.add(pickLinks);
 const wrist=new THREE.Vector3(),elbow=new THREE.Vector3(),shoulder=new THREE.Vector3(),start=new THREE.Vector3(),delta=new THREE.Vector3(),tangent=new THREE.Vector3(),dummy=new THREE.Object3D();
 // A shorter reach keeps the hand close and the elbow below the camera frame.
 const restWrist=new THREE.Vector3(.29,-.36,-.73),restElbow=new THREE.Vector3(.45,-.65,-.50);
 const chainedReach=new THREE.Vector3(.15,-.31,-.77),freeReach=new THREE.Vector3(-.08,-.32,-.83),worldPoint=new THREE.Vector3();
 const reachElbow=new THREE.Vector3(.43,-.66,-.54),freeElbow=new THREE.Vector3(.22,-.68,-.58),shoulderOffset=new THREE.Vector3(.12,-.34,-.05),boneAxis=new THREE.Vector3(0,0,-1);
 const releasedWrist=new THREE.Vector3(),releasedCuffPosition=new THREE.Vector3(),releasedElbow=new THREE.Vector3(),releasedRotation=new THREE.Quaternion(),releasedCuffRotation=new THREE.Quaternion();
 let hasReleasePose=false,focusedPose=false,releaseFocus=false;
 const gripPosition=new THREE.Vector3(),gripOffset=new THREE.Vector3(),gripWrist=new THREE.Vector3(),gripElbow=new THREE.Vector3(),focusOffset=new THREE.Vector3();
 const gripRotation=new THREE.Quaternion(),cameraInverse=new THREE.Quaternion();
 let chainLength=3;
 const sideways=new THREE.Vector3(1,0,0),samples=Array.from({length:49},()=>new THREE.Vector3());
 function chainPoint(t,amplitude,out){out.copy(start).lerp(pipeHook,t);out.addScaledVector(sideways,Math.sin(Math.PI*t)*amplitude);out.y-=Math.sin(Math.PI*t)*amplitude*.9;worldPoint.copy(out);space.localToWorld(worldPoint);worldPoint.y=Math.max(.032,worldPoint.y);space.worldToLocal(worldPoint);out.copy(worldPoint);return out;}
 function updateChain(){
  let lo=0,hi=1.5;for(let iteration=0;iteration<9;iteration++){const a=(lo+hi)/2;let len=0;for(let j=0;j<samples.length;j++){chainPoint(j/(samples.length-1),a,samples[j]);if(j)len+=samples[j].distanceTo(samples[j-1]);}if(len>chainLength)hi=a;else lo=a;}
  const curve=new THREE.CatmullRomCurve3(samples),length=curve.getLength(),count=Math.min(180,Math.max(2,Math.ceil(length/.043)));links.count=pickLinks.count=count;
  for(let i=0;i<count;i++){
   const u=i/(count-1);curve.getPointAt(u,dummy.position);curve.getTangentAt(u,tangent);dummy.quaternion.setFromUnitVectors(UP,tangent);if(i%2)dummy.rotateY(Math.PI/2);dummy.scale.set(1,1,1);dummy.updateMatrix();links.setMatrixAt(i,dummy.matrix);
   dummy.scale.set(.032,.026,.032);dummy.updateMatrix();pickLinks.setMatrixAt(i,dummy.matrix);
  }
  links.instanceMatrix.needsUpdate=true;pickLinks.instanceMatrix.needsUpdate=true;
 }
 function update(time,reducedMotion=false,keepVisible=false,lidHand=null,sawLift=0,interactionFocus=false){
  const pose=state.sample(time,keepVisible),reach=pose.reach;
  // The entire arm follows translation, yaw AND pitch; the far chain end remains
  // physically attached to the room's pipe. FOV changes preserve the framing.
  space.position.copy(camera.position);space.quaternion.copy(camera.quaternion);
  const framing=Math.tan(THREE.MathUtils.degToRad(camera.fov/2))/Math.tan(THREE.MathUtils.degToRad(62/2));
  // Equipping the key presents the cuff above the bottom HUD. A narrow view
  // shifts the rig inward instead of cropping the lock off the right edge.
  // The pipe anchor stays in world space, so the chain remains attached.
  focusedPose=pose.locked?interactionFocus&&!lidHand:hasReleasePose&&releaseFocus&&pose.releaseElapsed<1.8;
  if(focusedPose){focusOffset.set(-Math.max(0,.31-camera.aspect*.20)*framing,.11*framing,0).applyQuaternion(camera.quaternion);space.position.add(focusOffset);}
  space.scale.set(framing,framing,1);space.updateWorldMatrix(true,false);
  space.visible=pose.visible;
  arm.visible=pose.locked;
  if(!pose.visible)return pose.openLaptop;
  pipeHook.copy(pipeAnchor);space.worldToLocal(pipeHook);
  const reveal=lidHand?lidHand.reveal:reducedMotion?1:pose.reveal,withdraw=(1-reveal)*.55;
  wrist.copy(restWrist).lerp(pose.locked?chainedReach:freeReach,reach);
  wrist.y+=sawLift*.18;wrist.x-=sawLift*.12;
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
  delta.copy(wrist).sub(elbow);forearmRotation.setFromUnitVectors(boneAxis,delta.clone().normalize());
  elbowJoint.position.copy(elbow);elbowJoint.quaternion.copy(forearmRotation);
  hand.position.copy(wrist);hand.quaternion.copy(forearmRotation);hand.rotateX(-.12+reach*.08);hand.rotateY(.13-reach*.06);hand.rotateZ(-.04);
  if(releaseActive)hand.quaternion.slerp(releasedRotation,1-pose.handFree);
  fingers.forEach((f,i)=>{f.rotation.x=-.06+(1-reach)*(.11+i*.015);});
  thumb.rotation.x=0;thumb.rotation.y=.88;thumb.rotation.z=-.26;
  fingerCurls.forEach(curl=>curl(0));
  if(lidHand){
   const blend=lidHand.blend,grip=lidHand.grip,holdingMug=lidHand.gripKind==='handle';
   fingers.forEach((finger,i)=>{
    finger.rotation.x=THREE.MathUtils.lerp(finger.rotation.x,(holdingMug?-.16:-.46)+(i===0?.08:0),grip);
    finger.rotation.y=THREE.MathUtils.lerp(finger.userData.spread,finger.userData.spread*.30,grip);
   });
   thumb.rotation.x=(holdingMug?.42:.28)*grip;thumb.rotation.y=.88-(holdingMug?.58:.28)*grip;
   if(holdingMug){fingerCurls.forEach(curl=>curl(grip));thumb.rotation.z=-.26+.18*grip;}
   // Solve the wrist from the grip point: fingertips for the lid, palm for
   // the mug handle. The hand stays attached as either prop moves.
   fingers[1].updateMatrix();
   if(holdingMug)gripOffset.copy(handleContact.position);
   else gripOffset.copy(fingertip.position).applyMatrix4(fingers[1].matrix);
   cameraInverse.copy(camera.quaternion).invert();gripRotation.copy(cameraInverse).multiply(lidHand.quaternion);
   gripPosition.copy(lidHand.position);space.worldToLocal(gripPosition);
   gripWrist.copy(gripPosition).sub(gripOffset.applyQuaternion(gripRotation));
   hand.position.lerp(gripWrist,blend);hand.quaternion.slerp(gripRotation,blend);
   // The arm enters from below the frame during the lift, keeping the elbow out
   // of sight as the wrist rises with the laptop edge.
   wrist.copy(hand.position);shoulder.set(.34,-.66-withdraw,-.09);
   solveReachElbow(shoulder,wrist,gripElbow);elbow.lerp(gripElbow,blend);
   upperarm.position.copy(shoulder);delta.copy(elbow).sub(shoulder);upperarm.quaternion.setFromUnitVectors(boneAxis,delta.clone().normalize());upperarm.scale.z=delta.length();
   delta.copy(wrist).sub(elbow);forearmRotation.setFromUnitVectors(boneAxis,delta.clone().normalize());
   elbowJoint.position.copy(elbow);elbowJoint.quaternion.copy(forearmRotation);
  }else fingers.forEach(finger=>{finger.rotation.y=finger.userData.spread;});
  forearmShape.update(elbow,hand.position,hand.quaternion);
  if(pose.locked){
   cuff.position.copy(cuffOffset).applyQuaternion(hand.quaternion).add(wrist);cuff.quaternion.copy(hand.quaternion);gate.rotation.z=0;latch.rotation.z=0;
  }else{
   // Hold the cuff on the wrist while the clip snaps and the gate swings clear.
   // Only then can the open cuff fall; it never travels over the closed hand.
   cuff.position.copy(releasedCuffPosition);cuff.position.y-=withdraw+cuffDrop*.32;cuff.position.x+=cuffDrop*.08;
   cuff.quaternion.copy(releasedCuffRotation);cuff.rotateX(cuffDrop*.8);cuff.rotateZ(cuffDrop*.42);
   gate.rotation.z=hingeOpen*1.95;latch.rotation.z=-(reducedMotion?1:pose.unlatch)*.85;
  }
  cuff.updateMatrix();start.copy(chainEye.position).applyMatrix4(cuff.matrix);
  chainLength=start.distanceTo(pipeHook)+(pose.locked?.24*(1-reach)+.018:.42);updateChain();
  return pose.openLaptop;
 }
 function detach(time){
  if(!state.locked)return false;
  releasedWrist.copy(wrist);releasedElbow.copy(elbow);releasedRotation.copy(hand.quaternion);releasedCuffRotation.copy(cuff.quaternion);releasedCuffPosition.copy(cuff.position);hasReleasePose=true;
  releaseFocus=focusedPose;
  const detached=state.detach(time);
  if(detached)arm.visible=false;
  return detached;
 }
 function reset(){state.reset();hasReleasePose=focusedPose=releaseFocus=false;gate.rotation.z=0;latch.rotation.z=0;update(0,true);}
 update(0,true);
 return {group,target:restraint,state,update,reset,setLocked(value,time){if(value){reset();return;}state.setLocked(false,time);arm.visible=false;},getSawContact:out=>sawContact.getWorldPosition(out),endReach:()=>state.endReach(),setEnvironment(map){for(const mat of[iron,edge,cuffSteel,polished]){mat.envMap=map;mat.envMapIntensity=mat===polished?1.65:1.15;mat.needsUpdate=true;}},get locked(){return state.locked;},requestReach:time=>state.requestReach(time),detach};
}
