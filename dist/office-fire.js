import * as THREE from './vendor/three.module.js';
import {createCableFireState} from './cable-fire-state.js';
import {createCeilingSprinklers} from './ceiling-sprinklers.js';
import {renderQuality} from './render-quality.js';

const vertexShader=`attribute float seed;varying vec2 vUv;varying float vSeed;
 void main(){vUv=uv;vSeed=seed;gl_Position=projectionMatrix*modelViewMatrix*instanceMatrix*vec4(position,1.);}`;
const noiseShader=`
 float hash(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}
 float noise(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);return mix(mix(hash(i),hash(i+vec2(1,0)),f.x),mix(hash(i+vec2(0,1)),hash(i+vec2(1,1)),f.x),f.y);}
 float fbm(vec2 p){return .57*noise(p)+.28*noise(p*2.03)+.15*noise(p*4.1);}`;
export function createOfficeFire({chargingKit,acidLeaks,floorSupport,pipeMaterial}){
 const group=new THREE.Group();group.name='Acid-damaged charger fire and ceiling sprinklers';group.userData.ignoreAcid=true;
 const sprinklers=createCeilingSprinklers({floorSupport,pipeMaterial});group.add(sprinklers.group);
 const state=createCableFireState(),clock={value:0},power={value:0},dummy=new THREE.Object3D(),rotation=new THREE.Quaternion(),point=new THREE.Vector3();
 let target=null,message='',lastPhase='idle';
 function particles(count,fragmentShader,blend=THREE.NormalBlending){
  const geometry=new THREE.PlaneGeometry(1,1),seeds=new Float32Array(count);for(let i=0;i<count;i++)seeds[i]=i*.731;
  geometry.setAttribute('seed',new THREE.InstancedBufferAttribute(seeds,1));
  const material=new THREE.ShaderMaterial({uniforms:{time:clock,power},vertexShader,fragmentShader,transparent:true,depthWrite:false,side:THREE.DoubleSide,blending:blend,toneMapped:false});
  const mesh=new THREE.InstancedMesh(geometry,material,count);mesh.instanceMatrix.setUsage(THREE.DynamicDrawUsage);mesh.frustumCulled=false;mesh.raycast=()=>{};mesh.count=0;group.add(mesh);return mesh;
 }
 const flames=particles(renderQuality.mobile?90:180,`uniform float time;uniform float power;varying vec2 vUv;varying float vSeed;${noiseShader}
 void main(){vec2 p=vUv;float n=fbm(vec2(p.x*5.+vSeed,p.y*5.-time*3.8));
 float bend=sin(p.y*6.-time*3.+vSeed)*.13*p.y;
 float width=(1.-p.y)*.43;float edge=width-abs(p.x-.5+bend)+(n-.5)*.27;
 float alpha=smoothstep(-.035,.09,edge)*smoothstep(0.,.08,p.y)*(1.-smoothstep(.72,1.,p.y))*power;
 vec3 color=mix(vec3(1.,.10,.008),vec3(1.,.72,.12),clamp((edge+.08)*3.,0.,1.));color=mix(color,vec3(1.,.95,.65),(1.-p.y)*smoothstep(.14,.3,edge));
 gl_FragColor=vec4(color,alpha*.94);}`);
 flames.name='Spreading tongues of electrical fire';flames.renderOrder=10;
 const smoke=particles(renderQuality.mobile?36:66,`uniform float time;uniform float power;varying vec2 vUv;varying float vSeed;${noiseShader}
 void main(){float d=length((vUv-.5)*2.);float n=fbm(vUv*4.+vec2(vSeed,-time*.22));float a=smoothstep(1.,.15,d)*(.35+n*.6)*power;gl_FragColor=vec4(vec3(.075,.068,.058)+n*.045,a*.56);}`);
 smoke.name='Dark smoke from burned cable insulation';smoke.renderOrder=11;
 const ashGeometry=new THREE.CircleGeometry(1,24);ashGeometry.rotateX(-Math.PI/2);
 const ash=new THREE.InstancedMesh(ashGeometry,new THREE.MeshStandardMaterial({color:0x100b07,roughness:.95,transparent:true,opacity:.62,depthWrite:false,polygonOffset:true,polygonOffsetFactor:-1}),60);ash.count=0;ash.frustumCulled=false;ash.raycast=()=>{};ash.receiveShadow=true;group.add(ash);
 const light=new THREE.PointLight(0xff6e12,0,5,2),frontLight=new THREE.PointLight(0xff8c25,0,3,2);group.add(light,frontLight);
 const sparkPositions=new Float32Array(14*6),sparkGeometry=new THREE.BufferGeometry();sparkGeometry.setAttribute('position',new THREE.BufferAttribute(sparkPositions,3).setUsage(THREE.DynamicDrawUsage));
 const sparks=new THREE.LineSegments(sparkGeometry,new THREE.LineBasicMaterial({color:0xffb34d,transparent:true,opacity:.9,depthWrite:false}));sparks.name='Sparks at the melted charger cable';sparks.frustumCulled=false;sparks.visible=false;sparks.raycast=()=>{};group.add(sparks);
 function flowTarget(){
  if(state.origin)return state.origin;
  if(!chargingKit.energized||!acidLeaks.leaks.length){target=null;return undefined;}
  // Liquid runs toward the closest low cable section, then pools there. The wet
  // trail still harms a player who steps into it; fire now carries the danger onward.
  let best=Infinity;target=null;
  for(const leak of acidLeaks.leaks)for(const p of chargingKit.cablePoints){const d=Math.hypot(p.x-leak.origin.x,p.z-leak.origin.z);if(d<best){best=d;target=p;}}
  return target||undefined;
 }
 function wetCableContact(){
  if(!chargingKit.energized)return null;
  for(const p of chargingKit.cablePoints)for(const leak of acidLeaks.leaks)for(const wet of leak.points){if(Math.hypot(p.x-wet.x,p.z-wet.z)<wet.radius+.006)return p;}
  return null;
 }
 function update(time,dt,viewer,camera,reducedMotion=false){
  if(state.phase==='idle'&&(!chargingKit.energized||acidLeaks.leaks.length===0))return false;
  const finished=state.update(time,dt,{live:chargingKit.energized,contact:state.phase==='idle'?wetCableContact():null,viewer});
  if(state.origin){point.set(state.origin.x,state.origin.y,state.origin.z);chargingKit.meltCable(point,state.melt);}
  if(lastPhase!==state.phase){
   const messages={melting:'The acid is melting the plugged-in charger cable…',burning:'The damaged cable sparks. Fire is spreading across the floor!',extinguishing:'The armed sprinklers trigger automatically. Water smothers the flames.',extinguished:'The fire is out. The charger is ruined, and the spilled acid is still dangerous.'};
   message=messages[state.phase]||'';lastPhase=state.phase;
  }
  const water=state.water(time);sprinklers.update(time,water,reducedMotion);
  clock.value=reducedMotion?0:time;power.value=state.intensity;
  let flameCount=0,smokeCount=0,ashCount=0;
  camera.getWorldQuaternion(rotation);
  const perPatch=renderQuality.mobile?2:3;
  for(const [i,patch] of state.patches.entries()){
   const age=Math.min(1,(time-patch.born)/1.2),y=floorSupport(patch.x,patch.z)+.014;
   dummy.position.set(patch.x,y,patch.z);dummy.quaternion.identity();dummy.scale.set(patch.radius*1.1,1,patch.radius*.88);dummy.updateMatrix();ash.setMatrixAt(ashCount++,dummy.matrix);
   if(state.intensity<=0)continue;
   for(let j=0;j<perPatch&&flameCount<flames.instanceMatrix.count;j++){
    const angle=i*2.4+j*2.1,r=patch.radius*.4,height=(.34+(i+j)%4*.12)*age;
    dummy.position.set(patch.x+Math.cos(angle)*r,y+height*.5,patch.z+Math.sin(angle)*r);
    dummy.rotation.set(0,Math.atan2(camera.position.x-dummy.position.x,camera.position.z-dummy.position.z),0);dummy.scale.set(.25+patch.radius*.85,height,1);dummy.updateMatrix();flames.setMatrixAt(flameCount++,dummy.matrix);
   }
  }
  if(state.origin&&(state.intensity>0||state.phase==='melting')){
   const num=renderQuality.mobile?24:42,base=state.origin;
   for(let i=0;i<num;i++){
    const phase=(time*.27+i*.618)%1,p=state.patches[i%Math.max(1,state.patches.length)]||base;
    const height=.15+phase*1.65,size=.15+phase*.85;
    dummy.position.set(p.x+Math.sin(i*2.1+time*.3)*phase*.25,floorSupport(p.x,p.z)+height,p.z+Math.cos(i*1.7)*phase*.19);dummy.quaternion.copy(rotation);dummy.rotateZ(i+phase*.6);dummy.scale.set(size,size*1.3,1);dummy.updateMatrix();smoke.setMatrixAt(smokeCount++,dummy.matrix);
   }
  }
  flames.count=flameCount;smoke.count=smokeCount;ash.count=ashCount;
  flames.instanceMatrix.needsUpdate=smoke.instanceMatrix.needsUpdate=ash.instanceMatrix.needsUpdate=true;
  if(state.origin){
   light.position.set(state.origin.x,.36,state.origin.z);const front=state.patches.at(-1)||state.origin;frontLight.position.set(front.x,.26,front.z);
   const flicker=reducedMotion?1:.88+.07*Math.sin(time*17)+.05*Math.sin(time*29);light.intensity=4.5*state.intensity*flicker;frontLight.intensity=2*state.intensity*flicker;
  }
  sparks.visible=!reducedMotion&&(state.phase==='melting'&&state.melt>.55||state.phase==='burning'&&state.patches.length<8);
  if(sparks.visible){for(let i=0;i<14;i++){
   const life=(time*3+i*.618)%1,angle=i*2.4,r=life*.19,h=Math.max(0,.28*life-.26*life*life),p=state.origin,j=i*6;
   sparkPositions[j]=p.x+Math.cos(angle)*r;sparkPositions[j+1]=p.y+.015+h;sparkPositions[j+2]=p.z+Math.sin(angle)*r;
   sparkPositions[j+3]=sparkPositions[j]-.013*Math.cos(angle);sparkPositions[j+4]=sparkPositions[j+1]-.02;sparkPositions[j+5]=sparkPositions[j+2]-.013*Math.sin(angle);
  }sparkGeometry.attributes.position.needsUpdate=true;}
  return finished;
 }
 return {group,update,flowTarget,setEnvironment:sprinklers.setEnvironment,activateSprinklers:state.activateSprinklers,
  get phase(){return state.phase;},get dying(){return state.dying;},get sprinklersArmed(){return state.armed;},blackout:state.blackout,
  takeMessage(){const text=message;message='';return text;},
  reset(){state.reset();sprinklers.reset();target=null;message='';lastPhase='idle';flames.count=smoke.count=ash.count=0;sparks.visible=false;light.intensity=frontLight.intensity=0;power.value=0;}
 };
}
