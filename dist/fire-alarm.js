import * as THREE from './vendor/three.module.js';
import {artCanvas} from './texture-budget.js';
import {renderQuality} from './render-quality.js';
import {batchStaticScenery} from './static-batching.js';
import {createFireAlarmState} from './fire-alarm-state.js';

export function createFireAlarm({fireHazard,acidLeaks,laptop,floorSupport}){
 const state=createFireAlarmState(),station=new THREE.Group(),effects=new THREE.Group();
 station.name='Unbranded red FIRE pull station';station.userData.fireAlarm=true;station.userData.ignoreAcid=true;
 effects.name='Sprinkler water damage and acid reaction';effects.userData.ignoreAcid=true;
 const red=new THREE.MeshStandardMaterial({color:0x9e1719,roughness:.55,metalness:.15,emissive:0x74110e,emissiveIntensity:.45});
 const trim=new THREE.MeshStandardMaterial({color:0xd3cfc1,roughness:.55,metalness:.25,emissive:0x39362d,emissiveIntensity:.25});
 const black=new THREE.MeshStandardMaterial({color:0x181914,roughness:.57,metalness:.32});
 const metal=new THREE.MeshStandardMaterial({color:0x9b9d91,roughness:.39,metalness:.75});
 function mesh(geometry,material,parent=station){const m=new THREE.Mesh(geometry,material);m.castShadow=true;m.receiveShadow=true;parent.add(m);return m;}
 function rounded(w,h,d,r,material,parent=station){
  const shape=new THREE.Shape(),x=w/2,y=h/2;
  shape.moveTo(-x+r,-y);shape.lineTo(x-r,-y);shape.quadraticCurveTo(x,-y,x,-y+r);shape.lineTo(x,y-r);shape.quadraticCurveTo(x,y,x-r,y);shape.lineTo(-x+r,y);shape.quadraticCurveTo(-x,y,-x,y-r);shape.lineTo(-x,-y+r);shape.quadraticCurveTo(-x,-y,-x+r,-y);
  const g=new THREE.ExtrudeGeometry(shape,{depth:d,bevelEnabled:true,bevelSize:.002,bevelThickness:.002,bevelSegments:2,curveSegments:5});g.translate(0,0,-d/2);return mesh(g,material,parent);
 }
 rounded(.244,.354,.040,.018,trim);
 rounded(.226,.336,.046,.014,red).position.z=.007;
 const recess=rounded(.172,.158,.008,.014,trim);recess.position.set(0,-.009,.034);
 const opening=rounded(.160,.145,.010,.010,black);opening.position.set(0,-.008,.039);
 function textPlane(w,h,draw,parent=station){
  const [canvas,ctx]=artCanvas(512,256);draw(ctx,512,256);
  const map=new THREE.CanvasTexture(canvas);map.colorSpace=THREE.SRGBColorSpace;
  const material=new THREE.MeshStandardMaterial({map,transparent:true,alphaTest:.1,roughness:.8,emissiveMap:map,emissive:0xffffff,emissiveIntensity:.5});
  const m=mesh(new THREE.PlaneGeometry(w,h),material,parent);m.castShadow=false;return m;
 }
 const title=textPlane(.194,.066,(c,w,h)=>{c.font=`900 ${h*.91}px Arial,sans-serif`;c.textAlign='center';c.textBaseline='middle';c.fillStyle='#f0eadb';c.fillText('FIRE',w/2,h*.53,w*.96);});title.position.set(0,.116,.036);
 const lever=new THREE.Group();lever.name='Hinged PULL DOWN handle';lever.position.set(0,.052,.047);station.add(lever);
 const flap=rounded(.144,.076,.012,.006,black,lever);flap.position.y=-.038;
 const instructions=textPlane(.132,.057,(c,w,h)=>{
  c.fillStyle='#eae4d5';c.textAlign='center';c.textBaseline='middle';c.font=`700 ${h*.34}px Arial,sans-serif`;c.fillText('PULL',w/2,h*.29,w*.6);c.fillText('DOWN',w/2,h*.69,w*.6);
  for(const x of[w*.10,w*.90]){c.fillRect(x-w*.018,h*.24,w*.036,h*.38);c.beginPath();c.moveTo(x-w*.063,h*.59);c.lineTo(x+w*.063,h*.59);c.lineTo(x,h*.86);c.fill();}
 },lever);instructions.position.set(0,-.038,.011);
 const grip=rounded(.137,.017,.022,.005,red,lever);grip.position.set(0,-.080,.014);
 for(const x of[-.076,.076]){const hinge=mesh(new THREE.CylinderGeometry(.005,.005,.076,8),metal);hinge.position.set(x,.015,.051);}
 const lock=mesh(new THREE.CylinderGeometry(.020,.020,.008,24),metal);lock.rotation.x=Math.PI/2;lock.position.set(.077,-.128,.037);
 const keyhole=mesh(new THREE.CircleGeometry(.016,24),black);keyhole.position.set(.077,-.128,.042);
 const slot=mesh(new THREE.BoxGeometry(.003,.012,.002),metal);slot.position.set(.077,-.128,.044);
 for(const x of[-.10,.10])for(const y of[-.151,.151]){const screw=mesh(new THREE.CircleGeometry(.003,8),metal);screw.position.set(x,y,.032);}
 // Faded scratches and grime without any manufacturer's lettering.
 const wear=textPlane(.220,.328,(c,w,h)=>{let seed=19;const rand=()=>{seed=(seed*1664525+1013904223)>>>0;return seed/4294967296;};for(let i=0;i<430;i++){c.fillStyle=i%3?'rgba(27,17,11,.16)':'rgba(235,220,191,.16)';c.fillRect(rand()*w,rand()*h,1+rand()*6,.5+rand()*2);}});wear.position.z=.0345;
 const status=mesh(new THREE.CircleGeometry(.004,12),new THREE.MeshBasicMaterial({color:0x48150b}));status.position.set(-.087,-.132,.034);
 batchStaticScenery(station,{exclude:[lever,status],minObjects:2});

 const [smokeCanvas,paint]=artCanvas(128),gradient=paint.createRadialGradient(64,64,5,64,64,62);gradient.addColorStop(0,'rgba(255,255,255,.85)');gradient.addColorStop(.48,'rgba(255,255,255,.5)');gradient.addColorStop(1,'rgba(255,255,255,0)');paint.fillStyle=gradient;paint.fillRect(0,0,128,128);
 const smokeMap=new THREE.CanvasTexture(smokeCanvas),cloudMaterial=new THREE.MeshBasicMaterial({map:smokeMap,color:0xcbd7a1,transparent:true,opacity:0,depthWrite:false,side:THREE.DoubleSide});
 const clouds=new THREE.InstancedMesh(new THREE.PlaneGeometry(1,1),cloudMaterial,renderQuality.mobile?24:42);clouds.instanceMatrix.setUsage(THREE.DynamicDrawUsage);clouds.frustumCulled=false;clouds.count=0;clouds.raycast=()=>{};clouds.renderOrder=13;effects.add(clouds);
 const ripple=mesh(new THREE.RingGeometry(.9,1,48),new THREE.MeshBasicMaterial({color:0xe1edb6,transparent:true,opacity:0,depthWrite:false,side:THREE.DoubleSide}),effects);ripple.rotation.x=-Math.PI/2;ripple.visible=false;ripple.raycast=()=>{};
 const puddle=mesh(new THREE.CircleGeometry(1,40),new THREE.MeshBasicMaterial({map:smokeMap,color:0x789aab,transparent:true,opacity:0,depthWrite:false}),effects);puddle.rotation.x=-Math.PI/2;puddle.visible=false;puddle.raycast=()=>{};
 const sparkArray=new Float32Array(12*6),sparkGeometry=new THREE.BufferGeometry();sparkGeometry.setAttribute('position',new THREE.BufferAttribute(sparkArray,3).setUsage(THREE.DynamicDrawUsage));
 const sparks=new THREE.LineSegments(sparkGeometry,new THREE.LineBasicMaterial({color:0xc8eaff,transparent:true,opacity:0,depthWrite:false}));sparks.frustumCulled=false;sparks.visible=false;sparks.raycast=()=>{};effects.add(sparks);
 const flash=new THREE.PointLight(0xe9f7b0,0,10,2);flash.userData.mobileEssential=true;effects.add(flash);
 const target=new THREE.Vector3(),dummy=new THREE.Object3D(),rotation=new THREE.Quaternion();
 function pull(time,locked=false){
  const outcome=state.pull(time,{locked,fireActive:fireHazard.phase==='burning'||fireHazard.phase==='extinguishing',acidSpilled:acidLeaks.leaks.length>0});
  if(!outcome)return false;
  if(outcome==='fire')target.copy(fireHazard.origin);
  else if(outcome==='acid'){const leak=acidLeaks.leaks[0];target.set(leak.head.x,floorSupport(leak.head.x,leak.head.z),leak.head.z);}
  else laptop.object.getWorldPosition(target);
  fireHazard.releaseSprinklers(time+.18);return outcome;
 }
 function update(time,camera,reducedMotion=false){
  if(!state.active)return false;
  const age=state.elapsed(time),pull=reducedMotion?1:THREE.MathUtils.smootherstep(age,0,.45);
  lever.rotation.x=-1.02*pull;lever.position.y=.052-.026*pull;status.material.color.setHex(0xf13819);
  if(!state.dying)return false;
  const acid=state.outcome==='acid',impact=acid?1.25:1.8,burst=Math.max(0,age-impact),active=age>=impact;
  camera.getWorldQuaternion(rotation);
  flash.position.set(target.x,target.y+.35,target.z);flash.color.setHex(acid?0xe9f7b0:0xb3dfff);
  flash.intensity=active&&!reducedMotion?Math.max(0,1-burst/(acid?.65:.4))*(acid?22:3):0;
  clouds.count=active?clouds.instanceMatrix.count:0;cloudMaterial.color.setHex(acid?0xbac595:0x646a6a);cloudMaterial.opacity=active?(acid?.74:.35)*Math.min(1,burst*4):0;
  for(let i=0;i<clouds.count;i++){
   const phase=(i*.618)%1,angle=i*2.399,r=(acid?.22+burst*1.5:.08+burst*.12)*Math.sqrt(phase),rise=(acid?burst*1.2:burst*.25)+phase*.16;
   dummy.position.set(target.x+Math.cos(angle)*r,target.y+.06+rise,target.z+Math.sin(angle)*r);dummy.quaternion.copy(rotation);dummy.rotateZ(i*.7);
   const size=acid?.28+burst*.85+phase*.45:.10+burst*.16;dummy.scale.set(size,size*1.15,1);dummy.updateMatrix();clouds.setMatrixAt(i,dummy.matrix);
  }
  if(clouds.count)clouds.instanceMatrix.needsUpdate=true;
  if(acid){
   ripple.visible=active;ripple.position.set(target.x,floorSupport(target.x,target.z)+.016,target.z);ripple.scale.setScalar(.10+burst*4);ripple.material.opacity=Math.max(0,.65-burst*.7);
  }else{
   puddle.visible=age>.5;puddle.position.set(target.x,floorSupport(target.x,target.z)+.008,target.z);const size=Math.min(1.1,Math.max(0,age-.5)*.36);puddle.scale.set(size,size,1);puddle.material.opacity=.28;
   laptop.damageWater(THREE.MathUtils.smoothstep(age,1.8,2.5));
   sparks.visible=active&&burst<.7&&!reducedMotion;sparks.material.opacity=Math.max(0,1-burst/.7);
   if(sparks.visible){for(let i=0;i<12;i++){const angle=i*2.4,r=.03+burst*.30,j=i*6;sparkArray[j]=target.x+Math.cos(angle)*r;sparkArray[j+1]=target.y+.06+Math.sin(i+age*23)**2*.12;sparkArray[j+2]=target.z+Math.sin(angle)*r;sparkArray[j+3]=sparkArray[j]+Math.cos(angle)*.035;sparkArray[j+4]=sparkArray[j+1]+.035;sparkArray[j+5]=sparkArray[j+2]+Math.sin(angle)*.035;}sparkGeometry.attributes.position.needsUpdate=true;}
  }
  return state.update(time);
 }
 return {station,effects,pull,update,target,blackout:state.blackout,
  get active(){return state.active;},get dying(){return state.dying;},get outcome(){return state.outcome;},get message(){return state.message;},
  hint(){return state.active?'Fire alarm pulled · Sprinklers released':'Pull fire alarm';},
  reset(){state.reset();lever.rotation.x=0;lever.position.y=.052;status.material.color.setHex(0x48150b);clouds.count=0;ripple.visible=puddle.visible=sparks.visible=false;flash.intensity=0;laptop.damageWater(0);}
 };
}
