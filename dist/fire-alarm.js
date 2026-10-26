import * as THREE from './vendor/three.module.js';
import {artCanvas} from './texture-budget.js';
import {renderQuality} from './render-quality.js';
import {batchStaticScenery} from './static-batching.js';
import {createFireAlarmState} from './fire-alarm-state.js';
import {createLaptopSizzle} from './laptop-sizzle.js';

export function createFireAlarm({fireHazard,acidLeaks,laptop,floorSupport}){
 const sizzle=createLaptopSizzle();
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
 const clouds=new THREE.InstancedMesh(new THREE.PlaneGeometry(1,1),cloudMaterial,renderQuality.mobile?24:42);clouds.name='Steam and vapor from sprinkler damage';clouds.instanceMatrix.setUsage(THREE.DynamicDrawUsage);clouds.frustumCulled=false;clouds.count=0;clouds.raycast=()=>{};clouds.renderOrder=13;effects.add(clouds);
 const ripple=mesh(new THREE.RingGeometry(.9,1,48),new THREE.MeshBasicMaterial({color:0xe1edb6,transparent:true,opacity:0,depthWrite:false,side:THREE.DoubleSide}),effects);ripple.rotation.x=-Math.PI/2;ripple.visible=false;ripple.raycast=()=>{};
 const puddle=mesh(new THREE.CircleGeometry(1,40),new THREE.MeshBasicMaterial({map:smokeMap,color:0x789aab,transparent:true,opacity:0,depthWrite:false}),effects);puddle.rotation.x=-Math.PI/2;puddle.visible=false;puddle.raycast=()=>{};
 const sparkCount=32,sparkArray=new Float32Array(sparkCount*6),sparkGeometry=new THREE.BufferGeometry();sparkGeometry.setAttribute('position',new THREE.BufferAttribute(sparkArray,3).setUsage(THREE.DynamicDrawUsage));
 const sparks=new THREE.LineSegments(sparkGeometry,new THREE.LineBasicMaterial({color:0xc8eaff,transparent:true,opacity:0,depthWrite:false}));sparks.name='Repeated electrical crackles across the wet laptop';sparks.frustumCulled=false;sparks.visible=false;sparks.raycast=()=>{};effects.add(sparks);
 const flash=new THREE.PointLight(0xe9f7b0,0,10,2);flash.userData.mobileEssential=true;effects.add(flash);
 const splashCount=renderQuality.mobile?48:80,splashPositions=new Float32Array(splashCount*6),splashGeometry=new THREE.BufferGeometry();splashGeometry.setAttribute('position',new THREE.BufferAttribute(splashPositions,3).setUsage(THREE.DynamicDrawUsage));
 const laptopSplashes=new THREE.LineSegments(splashGeometry,new THREE.LineBasicMaterial({color:0xd1eaf0,transparent:true,opacity:.78,depthWrite:false,toneMapped:false}));laptopSplashes.name='Water bouncing off the laptop';laptopSplashes.frustumCulled=false;laptopSplashes.visible=false;laptopSplashes.raycast=()=>{};effects.add(laptopSplashes);
 const wetPoint=new THREE.Vector3(),wetTail=new THREE.Vector3();
 const target=new THREE.Vector3(),dummy=new THREE.Object3D(),rotation=new THREE.Quaternion();
 function pull(time,locked=false){
  const outcome=state.pull(time,{locked,fireActive:fireHazard.phase==='burning'||fireHazard.phase==='extinguishing',acidSpilled:acidLeaks.leaks.length>0});
  if(!outcome)return false;
  if(outcome==='fire')target.copy(fireHazard.origin);
  else if(outcome==='acid'){const leak=acidLeaks.leaks[0];target.set(leak.head.x,floorSupport(leak.head.x,leak.head.z),leak.head.z);}
  else {laptop.object.getWorldPosition(target);sizzle.play();}
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
  const wet=age>=.85,steamAge=Math.max(0,age-.85),effectTime=reducedMotion?1.4:age;
  flash.intensity=reducedMotion?0:acid?(active?Math.max(0,1-burst/.65)*22:0):wet&&age<3.4?1.4+3.6*Math.sin(age*21)**8:0;
  clouds.count=(acid?active:wet)?clouds.instanceMatrix.count:0;
  cloudMaterial.color.setHex(acid?0xbac595:0xb5c3bf);cloudMaterial.opacity=acid?(active?.74*Math.min(1,burst*4):0):.46*Math.min(1,steamAge*3);
  for(let i=0;i<clouds.count;i++){
   const seed=(i*.618)%1,angle=i*2.399;
   if(acid){
    const r=(.22+burst*1.5)*Math.sqrt(seed),rise=burst*1.2+seed*.16;
    dummy.position.set(target.x+Math.cos(angle)*r,target.y+.06+rise,target.z+Math.sin(angle)*r);
    const size=.28+burst*.85+seed*.45;dummy.scale.set(size,size*1.15,1);
   }else{
    const phase=(effectTime*.8+seed)%1;
    wetPoint.set(Math.cos(angle)*.29+Math.sin(phase*5+i)*phase*.10,.05+phase*.66,Math.sin(angle)*.18+phase*.035);
    dummy.position.copy(laptop.object.localToWorld(wetPoint));
    const size=(.085+phase*.23)*Math.sin(Math.PI*phase);dummy.scale.set(size,size*1.7,1);
   }
   dummy.quaternion.copy(rotation);dummy.rotateZ(i*.7);dummy.updateMatrix();clouds.setMatrixAt(i,dummy.matrix);
  }
  if(clouds.count)clouds.instanceMatrix.needsUpdate=true;
  if(acid){
   ripple.visible=active;ripple.position.set(target.x,floorSupport(target.x,target.z)+.016,target.z);ripple.scale.setScalar(.10+burst*4);ripple.material.opacity=Math.max(0,.65-burst*.7);
  }else{
   puddle.visible=age>.5;puddle.position.set(target.x,floorSupport(target.x,target.z)+.008,target.z);const size=Math.min(1.35,Math.max(0,age-.5)*.48);puddle.scale.set(size,size,1);puddle.material.opacity=.38;
   const damage=THREE.MathUtils.smoothstep(age,1.8,2.8),flicker=!reducedMotion&&wet&&age<2.8?.35*Math.sin(age*23)**6:0;
   laptop.damageWater(Math.min(1,damage+flicker));
   laptopSplashes.visible=wet;laptopSplashes.material.opacity=reducedMotion?.36:.78;
   if(wet){for(let i=0;i<splashCount;i++){
    const phase=(effectTime*3.2+i*.618)%1,angle=i*2.399,r=.07+phase*.14;
    wetPoint.set(Math.sin(i*9.1)*.28+Math.cos(angle)*r,.04+Math.sin(Math.PI*phase)*.19,Math.cos(i*5.7)*.15+Math.sin(angle)*r);
    wetTail.copy(wetPoint);wetTail.y+=.022;wetTail.x-=Math.cos(angle)*.012;laptop.object.localToWorld(wetPoint);laptop.object.localToWorld(wetTail);
    wetPoint.toArray(splashPositions,i*6);wetTail.toArray(splashPositions,i*6+3);
   }splashGeometry.attributes.position.needsUpdate=true;}
   sparks.visible=age>1.02&&age<3.4&&!reducedMotion;sparks.material.opacity=.60+.35*Math.sin(age*18)**2;
   if(sparks.visible){for(let i=0;i<sparkCount;i++){
    const phase=(age*4.3+i*.618)%1,angle=i*2.4,r=phase*.16;
    wetPoint.set(Math.sin(i*7.7)*.28+Math.cos(angle)*r,.035+Math.sin(phase*Math.PI)*.13,Math.cos(i*4.1)*.14+Math.sin(angle)*r);
    wetTail.copy(wetPoint);wetTail.x+=Math.cos(angle)*(.018+phase*.022);wetTail.y+=.028;wetTail.z+=Math.sin(angle)*.018;
    laptop.object.localToWorld(wetPoint);laptop.object.localToWorld(wetTail);wetPoint.toArray(sparkArray,i*6);wetTail.toArray(sparkArray,i*6+3);
   }sparkGeometry.attributes.position.needsUpdate=true;}

  }
  return state.update(time);
 }
 return {station,effects,pull,update,target,silence:sizzle.stop,blackout:state.blackout,
  get active(){return state.active;},get dying(){return state.dying;},get outcome(){return state.outcome;},get message(){return state.message;},
  hint(){return state.active?'Fire alarm pulled · Sprinklers released':'Pull fire alarm';},
  reset(){sizzle.stop();state.reset();lever.rotation.x=0;lever.position.y=.052;status.material.color.setHex(0x48150b);clouds.count=0;ripple.visible=puddle.visible=sparks.visible=laptopSplashes.visible=false;flash.intensity=0;laptop.damageWater(0);}
 };
}
