import * as THREE from './vendor/three.module.js';
import {batchStaticScenery} from './static-batching.js';
import {createScissors} from './mobile-supplies.js';
import {ANIMAL_DIGITS} from './mobile-puzzle-state.js';

export function createMobileInspection({mobile,state,camera}){
 const group=new THREE.Group();group.name='Mobile held up for inspection';group.visible=false;group.userData.ignoreAcid=true;
 const assembly=new THREE.Group();group.add(assembly);
 const cord=new THREE.MeshStandardMaterial({color:0xb8ae92,roughness:1}),metal=new THREE.MeshStandardMaterial({color:0x8a8d7e,metalness:.45,roughness:.6}),ivory=new THREE.MeshStandardMaterial({color:0xb8b398,roughness:.8});
 function tube(points,r,material,parent=assembly){const g=new THREE.TubeGeometry(new THREE.CatmullRomCurve3(points.map(p=>new THREE.Vector3(...p))),Math.max(10,points.length*4),r,5,false);const m=new THREE.Mesh(g,material);parent.add(m);return m;}
 const hub=new THREE.Mesh(new THREE.CylinderGeometry(.10,.10,.07,24),ivory);hub.position.y=.30;assembly.add(hub);
 const targets=[[-.36,-.22,.25],[.36,-.22,.25],[-.36,-.22,-.25],[.36,-.22,-.25]];
 const cleanStrings=new THREE.Group(),knots=new THREE.Group();assembly.add(cleanStrings,knots);
 const copies=mobile.animals.map((animal,i)=>{
  const object=animal.object.clone(true);object.name=`Inspect ${animal.kind}`;object.rotation.set(0,0,0);object.scale.setScalar(1.08);assembly.add(object);
  object.traverse(o=>{o.userData={};});
  batchStaticScenery(object,{minObjects:2,dispose:false});
  const target=new THREE.Vector3(...targets[i]),start=new THREE.Vector3((i%2?1:-1)*.15,-.10+i*.015,(i<2?1:-1)*.10);
  const end=target.clone().add(new THREE.Vector3(0,.17,-.065));
  const arm=[end.x,.28,end.z];tube([[0,.30,0],arm],.008,metal);
  tube([arm,[end.x+.004,.06,end.z],end.toArray()],.0028,cord,cleanStrings);
  tube([[0,.27,0],[.23*Math.sin(i+1),.14,.23*Math.cos(i)],[.02,.04,-.12],start.clone().add(new THREE.Vector3(0,.17,-.06)).toArray()],.003,cord,knots);
  return {object,patch:object.getObjectByName(`Stitched ${ANIMAL_DIGITS[animal.kind]} under ${animal.kind}`),start,target,startQ:new THREE.Quaternion().setFromEuler(new THREE.Euler((i-1.5)*.39,i*.66,(i%2?1:-1)*.48))};
 });
 for(let j=0;j<5;j++){
  const points=[];for(let i=0;i<=24;i++){const a=i/24*Math.PI*3+j*.8;points.push([Math.cos(a)*(.10+j*.018),.10+Math.sin(a*1.7)*.055,Math.sin(a)*(.09+j*.019)]);}
  tube(points,.003,cord,knots);
 }
 const scissors=createScissors();scissors.group.scale.setScalar(1.7);assembly.add(scissors.group);scissors.group.visible=false;
 const lamp=new THREE.PointLight(0xeee0c3,3.4,2.4,2);lamp.position.set(.3,.65,.55);lamp.userData.mobileEssential=true;group.add(lamp);
 const fill=new THREE.AmbientLight(0xc8c8c0,.85);fill.userData.mobileEssential=true;group.add(fill);
 let pitch=1.05,yaw=0,targetPitch=1.05,targetYaw=0;
 const identity=new THREE.Quaternion();
 function view(which){targetPitch=which==='under'?-1.45:1.05;targetYaw=0;}
 function drag(dx,dy){targetYaw+=dx*.007;targetPitch=THREE.MathUtils.clamp(targetPitch+dy*.007,-1.5,1.5);}
 function update(time,reducedMotion=false){
  const done=state.update(time,reducedMotion);group.visible=state.active;mobile.group.visible=!state.active;
  mobile.tangled.visible=state.phase==='tangled';for(const s of mobile.strings)s.visible=state.phase!=='cut';
  if(!state.active)return done;
  camera.updateWorldMatrix(true,false);group.position.set(0,.045,-1.65).applyMatrix4(camera.matrixWorld);group.quaternion.copy(camera.quaternion);
  const width=2*1.65*Math.tan(THREE.MathUtils.degToRad(camera.fov/2))*camera.aspect;group.scale.setScalar(Math.min(1.16,width*.80/1.18));
  pitch=reducedMotion?targetPitch:THREE.MathUtils.lerp(pitch,targetPitch,.16);yaw=reducedMotion?targetYaw:THREE.MathUtils.lerp(yaw,targetYaw,.16);
  assembly.rotation.set(pitch,yaw,0,'YXZ');
  const repair=state.phase==='repaired'?1:state.action==='restring'?THREE.MathUtils.smootherstep(state.progress,0,1):0;
  for(const c of copies){c.patch.visible=state.phase==='repaired';c.object.position.lerpVectors(c.start,c.target,repair);c.object.quaternion.copy(c.startQ).slerp(identity,repair);}
  knots.visible=state.phase==='tangled';cleanStrings.visible=state.phase==='repaired';
  scissors.group.visible=state.action==='cut';
  if(scissors.group.visible){const p=state.progress;scissors.group.position.set(.24-.19*Math.sin(Math.PI*p),.06,.16);scissors.group.rotation.set(0,-.3,-1.2);scissors.setOpen(reducedMotion?.1:.5+.45*Math.sin(p*Math.PI*6));knots.scale.setScalar(1-Math.max(0,p-.7)*1.5);}
  else knots.scale.setScalar(1);
  return done;
 }
 function reset(){pitch=targetPitch=1.05;yaw=targetYaw=0;group.visible=false;mobile.group.visible=true;mobile.tangled.visible=true;for(const s of mobile.strings)s.visible=true;}
 return {group,update,view,drag,reset,get underneath(){return state.phase==='repaired'&&pitch<-.9;}};
}

export function createMobileInspectionUI({state,inspection,time,onClose,onFeedback}){
 const panel=document.querySelector('#mobile-inspection'),status=panel.querySelector('[data-mobile-status]'),inventory=panel.querySelector('[data-mobile-inventory]'),digits=panel.querySelector('[data-mobile-digits]');
 const cut=panel.querySelector('[data-mobile="cut"]'),restring=panel.querySelector('[data-mobile="restring"]'),close=panel.querySelector('[data-mobile="close"]');
 let previous=null;
 panel.addEventListener('click',event=>{
  const action=event.target.closest('[data-mobile]')?.dataset.mobile;if(!action)return;
  if(action==='close'){if(!state.action)onClose();return;}
  if(state.action)return;
  if(action==='above'||action==='under'){inspection.view(action);return;}
  if(action==='cut'){if(!state.cut(time())){status.textContent='Find the scissors in the Supplies drawer.';onFeedback(status.textContent);return;}}
  if(action==='restring'){if(!state.restring(time())){status.textContent='Find fresh string in the Supplies drawer.';onFeedback(status.textContent);return;}}
  sync();
 });
 function sync(){
  panel.hidden=!state.active;if(!state.active){previous=null;return;}
  const key=[state.phase,state.action,state.has('scissors'),state.has('string'),inspection.underneath].join('|');if(key===previous)return;previous=key;
  status.textContent=state.action==='cut'?'Snipping the tangled cords…':state.action==='restring'?'Tying fresh strings…':state.phase==='tangled'?'The strings are tangled. Cut them free, then rebuild the mobile.':state.phase==='cut'?'The old cords are gone. It needs new string.':inspection.underneath?'Four stitched numbers. But which animal comes first?':'Rebuilt. Try looking at it from another perspective.';
  inventory.textContent=`Scissors ${state.has('scissors')?'✓':'—'}  ·  String ${state.has('string')?'✓':state.phase==='repaired'?'used':'—'}`;
  cut.hidden=state.phase!=='tangled';restring.hidden=state.phase!=='cut';
  cut.disabled=!!state.action;restring.disabled=!!state.action;close.disabled=!!state.action;
  digits.textContent=inspection.underneath?Object.entries(ANIMAL_DIGITS).map(([animal,digit])=>`${animal}: ${digit}`).join('. '):'';
 }
 return {sync};
}
