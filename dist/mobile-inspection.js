import * as THREE from './vendor/three.module.js';
import {createScissors} from './mobile-supplies.js';
import {ANIMAL_DIGITS} from './mobile-puzzle-state.js';

export function createMobileInspection({mobile,state}){
 const group=new THREE.Group();group.name='Mobile hanging from the ceiling';group.visible=false;group.userData.ignoreAcid=true;group.userData.mobilePuzzle=true;mobile.group.getWorldPosition(group.position);group.position.y=1.90;
 const assembly=new THREE.Group();group.add(assembly);let hung=false;
 const cord=new THREE.MeshStandardMaterial({color:0xc0b59b,roughness:1}),metal=new THREE.MeshStandardMaterial({color:0x8a8d7e,metalness:.45,roughness:.6}),ivory=new THREE.MeshStandardMaterial({color:0xb8b398,roughness:.8});
 function tube(points,r,material,parent=assembly){const g=new THREE.TubeGeometry(new THREE.CatmullRomCurve3(points.map(p=>new THREE.Vector3(...p))),Math.max(10,points.length*4),r,5,false);const m=new THREE.Mesh(g,material);parent.add(m);return m;}
 const hub=new THREE.Mesh(new THREE.CylinderGeometry(.10,.10,.07,24),ivory);hub.position.y=.30;assembly.add(hub);
 const targets=[[-.36,-.22,.25],[.36,-.22,.25],[-.36,-.22,-.25],[.36,-.22,-.25]];
 const hangingQ=new THREE.Quaternion().setFromEuler(new THREE.Euler(Math.PI/2,0,0));
 const cleanStrings=new THREE.Group(),knots=new THREE.Group();assembly.add(cleanStrings,knots);
 const mountedAnimals=mobile.animals.map((animal,i)=>{
  const object=animal.object,home={parent:object.parent,position:object.position.clone(),quaternion:object.quaternion.clone(),scale:object.scale.clone()};
  const target=new THREE.Vector3(...targets[i]),start=new THREE.Vector3((i%2?1:-1)*.15,-.10+i*.015,(i<2?1:-1)*.10);
  // Point each upright face away from the hub toward a different wall.
  const targetQ=new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0,1,0),Math.atan2(-target.x,-target.z)).multiply(hangingQ);
  const end=target.clone().add(animal.tab.position.clone().multiplyScalar(1.08).applyQuaternion(targetQ));
  const arm=[end.x,.28,end.z];tube([[0,.30,0],arm],.008,metal);
  tube([arm,[end.x+.004,.06,end.z],end.toArray()],.0028,cord,cleanStrings);
  const startQ=new THREE.Quaternion().setFromEuler(new THREE.Euler((i-1.5)*.39,i*.66,(i%2?1:-1)*.48));
  const tiedEnd=start.clone().add(animal.tab.position.clone().multiplyScalar(1.08).applyQuaternion(startQ));
  // Each tangled cord still runs from a real spreader arm to a sewn suspension tab.
  const path=[arm,[arm[0]*.72,.12,arm[2]*.65],[.035*Math.sin(i),-.025,.03*Math.cos(i)]];
  for(let j=0;j<=32;j++){const a=j/32*Math.PI*3.4+i*.7;path.push([Math.sin(a)*(.065+i*.012),.024+Math.cos(a*2)*.018-i*.008,Math.sin(a*2)*.045+.014*Math.cos(a)]);}
  path.push([tiedEnd.x*.8,tiedEnd.y-.035,tiedEnd.z],tiedEnd.toArray());tube(path,.0035,cord,knots);
  const bow=[];for(let j=0;j<=20;j++){const a=j/20*Math.PI*2;bow.push([tiedEnd.x+Math.sin(a)*.018,tiedEnd.y+Math.cos(a)*.012,tiedEnd.z+.004*Math.sin(a*2)]);}tube(bow,.0027,cord,knots);
  return {object,home,headPose:animal.headPose,patch:animal.patch,start,target,targetQ,startQ:new THREE.Quaternion().setFromEuler(new THREE.Euler((i-1.5)*.39,i*.66,(i%2?1:-1)*.48))};
 });
 // Tight overhand knot and two hanging, frayed tails instead of floating circular loops.
 for(let j=0;j<3;j++){
  const points=[];for(let i=0;i<=30;i++){const a=i/30*Math.PI*3;points.push([Math.sin(a)*.021,.025+Math.cos(a)*.014+j*.006,Math.sin(a*2)*.015+j*.004]);}tube(points,.0032,cord,knots);
 }
 for(const side of[-1,1]){
  tube([[0,.02,0],[side*.055,-.035,.03],[side*.065,-.12,.05],[side*.074,-.19,.048]],.003,cord,knots);
  for(let j=0;j<3;j++)tube([[side*.074,-.178,.048],[side*.074+(j-1)*.004,-.20-j*.003,.05+(j-1)*.003]],.0006,cord,knots);
 }
 const scissors=createScissors();scissors.group.scale.setScalar(1.7);assembly.add(scissors.group);scissors.group.visible=false;
 const ceilingY=3.20-group.position.y;
 tube([[0,ceilingY,0],[0,.34,0]],.004,cord);
 const hook=new THREE.Mesh(new THREE.TorusGeometry(.025,.005,6,16),metal);hook.position.set(0,ceilingY,0);group.add(hook);
 const mount=new THREE.Mesh(new THREE.CylinderGeometry(.045,.045,.018,16),metal);mount.position.set(0,ceilingY+.035,0);group.add(mount);
 const lamp=new THREE.PointLight(0xe3d4ad,2,2.5,2);lamp.position.set(0,-.80,0);lamp.userData.mobileEssential=true;group.add(lamp);
 function getTarget(out){return out.copy(group.position).add(new THREE.Vector3(0,-.18,0));}
 function update(time,reducedMotion=false){
  const done=state.update(time,reducedMotion);
  if(state.active&&!hung){hung=true;for(const c of mountedAnimals){assembly.add(c.object);c.object.scale.setScalar(1.08);}}
  group.visible=hung;mobile.group.visible=!hung;lamp.visible=state.active;
  for(const c of mountedAnimals)c.patch.visible=state.phase==='repaired';
  if(!hung)return done;
  const repair=state.phase==='repaired'?1:state.action==='restring'?THREE.MathUtils.smootherstep(state.progress,0,1):0;
  for(const c of mountedAnimals){c.patch.visible=state.phase==='repaired';c.object.position.lerpVectors(c.start,c.target,repair);c.object.quaternion.copy(c.startQ).slerp(c.targetQ,repair);c.headPose.rotation.x=-Math.PI/2*repair;}
  knots.visible=state.phase==='tangled';cleanStrings.visible=state.phase==='repaired';
  scissors.group.visible=state.action==='cut';
  if(scissors.group.visible){const p=state.progress;scissors.group.position.set(.24-.19*Math.sin(Math.PI*p),.06,.16);scissors.group.rotation.set(0,-.3,-1.2);scissors.setOpen(reducedMotion?.1:.5+.45*Math.sin(p*Math.PI*6));knots.scale.setScalar(1-Math.max(0,p-.7)*1.5);}
  else knots.scale.setScalar(1);
  return done;
 }
 function reset(){hung=false;group.visible=false;mobile.group.visible=true;for(const c of mountedAnimals){c.home.parent.add(c.object);c.object.position.copy(c.home.position);c.object.quaternion.copy(c.home.quaternion);c.object.scale.copy(c.home.scale);c.headPose.rotation.x=0;c.patch.visible=false;}}
 return {group,update,getTarget,reset,get hung(){return hung;}};
}

export function createMobileInspectionUI({state,inspectionCamera,time,onClose,onFeedback,puzzle}){
 const panel=document.querySelector('#mobile-inspection'),status=panel.querySelector('[data-mobile-status]'),inventory=panel.querySelector('[data-mobile-inventory]'),digits=panel.querySelector('[data-mobile-digits]');
 const cut=panel.querySelector('[data-mobile="cut"]'),restring=panel.querySelector('[data-mobile="restring"]'),close=panel.querySelector('[data-mobile="close"]');
 let previous=null;
 panel.addEventListener('click',event=>{
  const action=event.target.closest('[data-mobile]')?.dataset.mobile;if(!action)return;
  if(action==='close'){if(!state.action)onClose();return;}
  if(state.action)return;
  if(action==='above'||action==='under'){inspectionCamera.view(action,time());return;}
  if(action==='cut'){if(!state.cut(time())){status.textContent='Find the scissors in the Supplies drawer.';onFeedback(status.textContent);return;}}
  if(action==='restring'){if(!state.restring(time())){status.textContent='Find fresh string in the Supplies drawer.';onFeedback(status.textContent);return;}}
  sync();
 });
 function sync(){
  panel.hidden=!state.active;if(!state.active){previous=null;return;}
  const key=[state.phase,state.action,state.has('scissors'),state.has('string'),inspectionCamera.underneath].join('|');if(key===previous)return;previous=key;
  status.textContent=state.action==='cut'?'Snipping the tangled cords…':state.action==='restring'?'Tying fresh strings…':state.phase==='tangled'?'The strings are tangled. Cut them free, then rebuild the mobile.':state.phase==='cut'?'The old cords are gone. It needs new string.':inspectionCamera.underneath?'Four stitched numbers. But which animal comes first?':'Rebuilt. Try looking at it from another perspective.';
  inventory.textContent=`Scissors ${state.has('scissors')?'✓':'—'}  ·  String ${state.has('string')?'✓':state.phase==='repaired'?'used':'—'}`;
  cut.hidden=state.phase!=='tangled';restring.hidden=state.phase!=='cut';
  cut.disabled=!!state.action;restring.disabled=!!state.action;close.disabled=!!state.action;
  digits.textContent=state.phase==='repaired'&&inspectionCamera.underneath?Object.entries(puzzle?.digits??ANIMAL_DIGITS).map(([animal,digit])=>`${animal}: ${digit}`).join('. '):'';
 }
 return {sync};
}
