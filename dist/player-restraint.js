import * as THREE from './vendor/three.module.js';
import {weatheredMetal} from './industrial-materials.js?v=brighter-liquid';
import {createRestraintState} from './restraint-state.js?v=camera-hand';

const UP=new THREE.Vector3(0,1,0);
export function createPlayerRestraint(camera){
 const group=new THREE.Group();group.name='Player forearm chained to the rear pipes';
 const space=new THREE.Group();space.name='Camera-relative reaching hand';group.add(space);
 const state=createRestraintState(),sphere=new THREE.SphereGeometry(1,24,16);
 // Muted skin, fine mottling and shallow pores avoid the smooth plastic appearance.
 const skin=new THREE.MeshPhysicalMaterial({color:0xb29b8c,roughness:.72,metalness:0,clearcoat:.025,clearcoatRoughness:.85});
 const pores=new Uint8Array(128*128*4),tones=new Uint8Array(128*128*4);let seed=381;
 for(let y=0;y<128;y++)for(let x=0;x<128;x++){
  const i=(y*128+x)*4;seed=(1664525*seed+1013904223)>>>0;
  const noise=(seed>>>24)/255,v=140+noise*55,flush=Math.sin(x*.11)*Math.sin(y*.08)*3;
  pores[i]=pores[i+1]=pores[i+2]=v;pores[i+3]=255;
  tones[i]=231+noise*15+flush;tones[i+1]=224+noise*13;tones[i+2]=219+noise*12;tones[i+3]=255;
 }
 function skinMap(data){const map=new THREE.DataTexture(data,128,128);map.wrapS=map.wrapT=THREE.RepeatWrapping;map.repeat.set(2,3);map.needsUpdate=true;return map;}
 skin.map=skinMap(tones);skin.map.colorSpace=THREE.SRGBColorSpace;skin.bumpMap=skinMap(pores);skin.bumpScale=.00018;
 const nails=new THREE.MeshPhysicalMaterial({color:0xb9a89b,roughness:.56,clearcoat:.10});
 const creases=new THREE.MeshStandardMaterial({color:0x786e65,roughness:1,transparent:true,opacity:.17});
 const iron=weatheredMetal(0xa5aaa2),edge=weatheredMetal(0xbfc5c0),black=new THREE.MeshStandardMaterial({color:0x151716,roughness:.9});
 const invisible=new THREE.MeshBasicMaterial({transparent:true,opacity:0,depthWrite:false,colorWrite:false});
 function mesh(geo,mat,parent=space){const m=new THREE.Mesh(geo,mat);m.castShadow=true;m.receiveShadow=true;parent.add(m);return m;}
 function ball(parent,pos,size,mat=skin){const m=mesh(sphere,mat,parent);m.position.set(...pos);m.scale.set(...size);return m;}
 function rod(parent,a,b,r,mat){a=new THREE.Vector3(...a);b=new THREE.Vector3(...b);const d=b.clone().sub(a),m=mesh(new THREE.CylinderGeometry(r,r,d.length(),20),mat,parent);m.position.copy(a).add(b).multiplyScalar(.5);m.quaternion.setFromUnitVectors(UP,d.normalize());return m;}
 function tube(parent,points,r,mat){return mesh(new THREE.TubeGeometry(new THREE.CatmullRomCurve3(points.map(p=>new THREE.Vector3(...p))),24,r,7,false),mat,parent);}
 const arm=new THREE.Group();arm.name='Anatomical forearm and right hand';space.add(arm);
 // A single smooth skin surface per digit, with tapered tips and knuckles built into
 // the profile, replaces the old stack of spheres at every finger joint.
 function skinForm(parent,sections,segments=28){
  const points=sections.map(([z,x,y,rx,ry])=>({z,x,y,rx,ry})),verts=[],uvs=[],indices=[];
  for(let j=0;j<points.length;j++){
   const p=points[j];for(let i=0;i<=segments;i++){
    const a=i/segments*Math.PI*2,c=Math.cos(a),sn=Math.sin(a);
    verts.push(p.x+p.rx*c,p.y+p.ry*sn,p.z);uvs.push(i/segments,j/(points.length-1));
    if(j&&i){const b=j*(segments+1)+i;indices.push(b,b-segments-2,b-1,b,b-segments-1,b-segments-2);}
   }
  }
  const geo=new THREE.BufferGeometry();geo.setAttribute('position',new THREE.Float32BufferAttribute(verts,3));geo.setAttribute('uv',new THREE.Float32BufferAttribute(uvs,2));geo.setIndex(indices);geo.computeVertexNormals();return mesh(geo,skin,parent);
 }
 const forearm=skinForm(arm,[[0,0,0,.069,.053],[-.06,0,0,.070,.053],[-.22,.003,0,.066,.049],[-.42,.006,0,.060,.042],[-.64,.006,0,.051,.034],[-.82,.003,0,.043,.029],[-1,0,0,.038,.026]],40);
 const hand=new THREE.Group();hand.name='Right hand with tapered fingers and fine knuckle creases';arm.add(hand);
 skinForm(hand,[[.025,0,0,.037,.025],[0,0,0,.040,.026],[-.028,-.006,0,.049,.029],[-.060,-.006,-.001,.057,.029],[-.098,-.002,-.003,.057,.026],[-.128,.002,-.004,.052,.022],[-.146,.004,-.005,.043,.015],[-.152,.004,-.005,.006,.004]],40);
 const fingers=[];
 for(const [i,x,length]of[[0,-.044,.126],[1,-.013,.143],[2,.019,.134],[3,.047,.104]]){
  const finger=new THREE.Group();finger.position.set(x,-.002,-.125+(i===3?.012:0));finger.rotation.y=(i-1.4)*-.035;hand.add(finger);fingers.push(finger);
  const r=i===3?.0114:.0138;
  skinForm(finger,[[.012,0,0,r*1.02,r*.90],[0,0,0,r*1.05,r*.94],[-length*.20,0,-.003,r*.94,r*.87],[-length*.39,0,-.005,r*1.01,r*.91],[-length*.49,0,-.007,r*.88,r*.78],[-length*.66,0,-.010,r*.88,r*.81],[-length*.78,0,-.014,r*.76,r*.72],[-length*.92,0,-.018,r*.70,r*.65],[-length*.98,0,-.019,r*.44,r*.46],[-length,0,-.019,.0003,.0003]]);
  for(const [z,h]of[[-length*.39,-.005+r*.91],[-length*.67,-.010+r*.80]])for(let k=0;k<2;k++)tube(finger,[[-r*.55,h-.001,z+k*.002],[0,h+.0003,z-.001+k*.002],[r*.55,h-.001,z+k*.002]],.00028,creases);
  const nail=ball(finger,[0,-.016+r*.67,-length*.87],[r*.60,.0011,length*.075],nails);nail.rotation.x=.10;
 }
 const thumb=new THREE.Group();thumb.position.set(-.043,-.008,-.037);thumb.rotation.y=.71;thumb.rotation.z=-.26;hand.add(thumb);
 skinForm(thumb,[[.018,0,0,.027,.025],[0,0,0,.026,.024],[-.026,-.003,0,.022,.021],[-.046,-.005,.002,.019,.018],[-.061,-.006,.002,.018,.017],[-.080,-.006,.001,.015,.014],[-.093,-.006,0,.012,.012],[-.101,-.006,0,.0003,.0003]]);
 ball(thumb,[-.006,.014,-.084],[.010,.0011,.010],nails);
 // Tendon relief stays shallow and skin-colored instead of dark cartoon outlines.
 for(const x of[-.036,-.010,.020,.043])tube(hand,[[x*.45,.025,-.008],[x*.78,.028,-.060],[x,.022,-.122]],.00065,skin);
 const restraint=new THREE.Group();restraint.name='Wrist cuff and chain — right-click to detach';restraint.userData.playerChain=true;space.add(restraint);
 const cuff=new THREE.Group();restraint.add(cuff);
 function cuffHalf(start,end){const shape=new THREE.Shape();shape.absarc(0,0,.053,start,end,false);shape.lineTo(Math.cos(end)*.043,Math.sin(end)*.043);shape.absarc(0,0,.043,end,start,true);shape.closePath();const m=mesh(new THREE.ExtrudeGeometry(shape,{depth:.045,bevelEnabled:true,bevelSize:.002,bevelThickness:.002,bevelSegments:2,curveSegments:24}),iron,cuff);m.position.z=-.0225;return m;}
 const halves=[cuffHalf(-Math.PI/2,Math.PI/2),cuffHalf(Math.PI/2,Math.PI*1.5)];
 const clasp=mesh(new THREE.BoxGeometry(.033,.045,.052),edge,cuff);clasp.position.x=.059;
 const keyhole=ball(cuff,[.077,0,.017],[.004,.009,.003],black);
 for(const y of[-.015,.015])ball(cuff,[.078,y,-.012],[.004,.004,.003],edge);
 const hinge=rod(cuff,[-.051,0,-.035],[-.051,0,.035],.012,edge);
 const cuffPick=mesh(new THREE.CylinderGeometry(.071,.071,.10,16),invisible,cuff);cuffPick.rotation.x=Math.PI/2;cuffPick.castShadow=false;
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
 const wrist=new THREE.Vector3(),elbow=new THREE.Vector3(),start=new THREE.Vector3(),delta=new THREE.Vector3(),tangent=new THREE.Vector3(),dummy=new THREE.Object3D();
 const restWrist=new THREE.Vector3(.32,-.32,-.72),restElbow=new THREE.Vector3(.48,-.61,-.18);
 const chainedReach=new THREE.Vector3(.04,-.28,-.94),freeReach=new THREE.Vector3(-.20,-.31,-1.04),worldPoint=new THREE.Vector3();
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
  wrist.copy(restWrist).lerp(pose.locked?chainedReach:freeReach,reach);wrist.y-=withdraw;
  if(pose.locked)wrist.y+=reducedMotion?0:pose.strain;
  elbow.copy(restElbow).lerp(pose.locked?new THREE.Vector3(.35,-.57,-.28):new THREE.Vector3(.19,-.57,-.42),reach);elbow.y-=withdraw;
  forearm.position.copy(elbow);delta.copy(wrist).sub(elbow);forearm.quaternion.setFromUnitVectors(new THREE.Vector3(0,0,-1),delta.clone().normalize());forearm.scale.z=delta.length();
  hand.position.copy(wrist);hand.rotation.set(-.10-reach*.08,-.10+reach*.18,-.08+reach*.04);
  fingers.forEach((f,i)=>{f.rotation.x=-.06+(1-reach)*(.11+i*.015);});
  if(pose.locked){cuff.position.copy(wrist);cuff.rotation.copy(hand.rotation);halves[0].rotation.y=halves[1].rotation.y=0;}
  else{cuff.position.copy(restWrist).lerp(new THREE.Vector3(.49,-.68,-.36),pose.release);cuff.position.y-=withdraw;cuff.rotation.set(pose.release*Math.PI/2,0,pose.release*.45);halves[0].rotation.y=pose.release*1.12;halves[1].rotation.y=-pose.release*.72;}
  cuff.updateMatrix();start.set(.079,0,0).applyMatrix4(cuff.matrix);
  chainLength=start.distanceTo(pipeHook)+(pose.locked?.24*(1-reach)+.018:.42);updateChain();
  return pose.openLaptop;
 }
 function reset(){state.reset();update(0,true);}
 update(0,true);
 return {group,target:restraint,state,update,reset,setEnvironment(map){for(const mat of[iron,edge,skin,nails]){mat.envMap=map;mat.envMapIntensity=mat===skin?.35:1.15;mat.needsUpdate=true;}},get locked(){return state.locked;},requestReach:time=>state.requestReach(time),detach:time=>state.detach(time)};
}
