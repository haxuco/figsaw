import * as THREE from './vendor/three.module.js';
import {createScissors} from './mobile-supplies.js';

export function createMobileInspection({mobile,state}){
 const group=new THREE.Group();group.name='Mobile hanging from the ceiling';group.userData.ignoreAcid=true;
 // Keep the suspended toys to the right, clear of the tanks and rear objects.
 group.position.set(1.25,1.90,.55);
 const assembly=new THREE.Group();assembly.userData.mobilePuzzle=true;assembly.visible=false;group.add(assembly);const arms=[];let hung=false;
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
  const arm=[end.x,.28,end.z];arms.push(tube([[0,.30,0],arm],.012,mobile.pieces.mobileBar0.children[0].material));
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
 tube([[0,ceilingY-.28,0],[0,.34,0]],.004,cord);
 const hookTarget=new THREE.Group();hookTarget.name='Empty ceiling hook for the animal mobile';hookTarget.userData.mobileMount=true;group.add(hookTarget);
 const hookMetal=new THREE.MeshStandardMaterial({color:0xabb19f,metalness:.55,roughness:.55,emissive:0x434c35,emissiveIntensity:.28});
 const stem=new THREE.Mesh(new THREE.CylinderGeometry(.007,.007,.25,8),hookMetal);stem.position.set(0,ceilingY-.12,0);hookTarget.add(stem);
 const hook=new THREE.Mesh(new THREE.TorusGeometry(.05,.007,6,18),hookMetal);hook.position.set(0,ceilingY-.28,0);hookTarget.add(hook);
 const mount=new THREE.Mesh(new THREE.CylinderGeometry(.045,.045,.018,16),metal);mount.position.set(0,ceilingY+.035,0);hookTarget.add(mount);
 const hookPick=new THREE.Mesh(new THREE.BoxGeometry(.26,.40,.26),new THREE.MeshBasicMaterial({transparent:true,opacity:0,colorWrite:false,depthWrite:false}));hookPick.name='Animal mobile hanging target';hookPick.position.set(0,ceilingY-.20,0);hookTarget.add(hookPick);
 const packedModel=new THREE.Group();packedModel.name='Animal mobile';packedModel.add(hub.clone(),...arms.map(arm=>arm.clone()),cleanStrings.clone());
 for(const c of mountedAnimals){c.patch.visible=false;const toy=c.object.clone();toy.visible=true;toy.position.copy(c.target);toy.quaternion.copy(c.targetQ);toy.scale.setScalar(1.08);toy.getObjectByName(c.headPose.name).rotation.x=-Math.PI/2;packedModel.add(toy);}
 const lamp=new THREE.PointLight(0xe3d4ad,2,2.5,2);lamp.position.set(0,-.80,0);lamp.userData.mobileEssential=true;group.add(lamp);
 function getTarget(out){return out.copy(group.position).add(new THREE.Vector3(0,-.18,0));}
 function update(time,reducedMotion=false){
  const done=state.update(time,reducedMotion);
  if(!state.hung&&hung)reset();
  if(state.hung&&!hung){hung=true;for(const c of mountedAnimals){assembly.add(c.object);c.object.scale.setScalar(1.08);c.object.visible=true;}}
  group.visible=true;assembly.visible=hung;hookTarget.visible=true;hookTarget.userData.mobileMount=!hung;hookPick.visible=!hung;mobile.group.visible=!hung&&!state.collectedAll;lamp.visible=state.active;
  if(!hung){
   for(const [id,object]of Object.entries(mobile.pieces))object.visible=!state.hasPiece(id);
   for(const animal of mobile.animals){animal.shadow.visible=animal.string.visible=!state.hasPiece('mobile'+animal.kind);animal.patch.visible=false;}
   return done;
  }
  const repair=state.phase==='repaired'?1:state.action==='repair'?THREE.MathUtils.smootherstep(state.progress,.35,1):0;
  for(const c of mountedAnimals){c.patch.visible=state.phase==='repaired';c.object.position.lerpVectors(c.start,c.target,repair);c.object.quaternion.copy(c.startQ).slerp(c.targetQ,repair);c.headPose.rotation.x=-Math.PI/2*repair;}
  knots.visible=state.phase==='tangled'&&(!state.action||state.progress<.45);cleanStrings.visible=repair>0;
  scissors.group.visible=state.action==='repair'&&state.progress<.35;
  if(scissors.group.visible){const p=state.progress/.35;scissors.group.position.set(.24-.19*Math.sin(Math.PI*p),.06,.16);scissors.group.rotation.set(0,-.3,-1.2);scissors.setOpen(reducedMotion?.1:.5+.45*Math.sin(p*Math.PI*6));knots.scale.setScalar(1-Math.max(0,p-.7)*1.5);}
  else knots.scale.setScalar(1);
  return done;
 }
 function reset(){hung=false;group.visible=true;assembly.visible=false;hookTarget.visible=true;hookTarget.userData.mobileMount=true;hookPick.visible=true;mobile.group.visible=true;for(const c of mountedAnimals){c.home.parent.add(c.object);c.object.position.copy(c.home.position);c.object.quaternion.copy(c.home.quaternion);c.object.scale.copy(c.home.scale);c.headPose.rotation.x=0;c.patch.visible=false;}for(const object of Object.values(mobile.pieces))object.visible=true;for(const animal of mobile.animals)animal.shadow.visible=animal.string.visible=true;}
 return {group,assembly,hookTarget,packedModel,update,getTarget,reset,get hung(){return hung;}};
}

export function createMobileInspectionUI({state,time,equipped=()=>null}){
 function activate(){
  if(!state.active||state.action||state.phase==='repaired')return;
  if(equipped()!=='mobileKit')return;
  state.repair(time());
  sync();
 }
 function sync(){document.body.classList.toggle('inspecting-mobile',state.active);}
 return {sync,activate};
}
