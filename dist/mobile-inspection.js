import * as THREE from './vendor/three.module.js';
import {createScissors} from './mobile-supplies.js';

export function createMobileInspection({mobile,state,light=null}){
 const group=new THREE.Group();group.name='Mobile hanging from the ceiling';group.userData.ignoreAcid=true;
 // Keep the suspended toys to the right, clear of the tanks and rear objects.
 group.position.set(1.25,1.90,.55);
 const assembly=new THREE.Group();assembly.userData.mobilePuzzle=true;assembly.visible=false;group.add(assembly);let hung=false;
 const cord=new THREE.MeshStandardMaterial({color:0xc0b59b,roughness:1}),metal=new THREE.MeshStandardMaterial({color:0x8a8d7e,metalness:.45,roughness:.6}),ivory=new THREE.MeshStandardMaterial({color:0xb8b398,roughness:.8});
 function tube(points,r,material,parent=assembly){const g=new THREE.TubeGeometry(new THREE.CatmullRomCurve3(points.map(p=>new THREE.Vector3(...p))),Math.max(10,points.length*4),r,5,false);const m=new THREE.Mesh(g,material);parent.add(m);return m;}
 const hub=new THREE.Mesh(new THREE.CylinderGeometry(.10,.10,.07,24),ivory);hub.position.y=.30;assembly.add(hub);
 const targets=[[-.36,-.22,.25],[.36,-.22,.25],[-.36,-.22,-.25],[.36,-.22,-.25]];
 const hangingQ=new THREE.Quaternion().setFromEuler(new THREE.Euler(Math.PI/2,0,0));
 const cleanStrings=new THREE.Group(),knots=new THREE.Group();cleanStrings.visible=false;assembly.add(cleanStrings,knots);
 const mountedAnimals=mobile.animals.map((animal,i)=>{
  const object=animal.object,home={parent:object.parent,position:object.position.clone(),quaternion:object.quaternion.clone(),scale:object.scale.clone()};
  const target=new THREE.Vector3(...targets[i]),start=new THREE.Vector3((i%2?1:-1)*.15,-.10+i*.015,(i<2?1:-1)*.10);
  // Point each upright face away from the hub toward a different wall.
  const targetQ=new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0,1,0),Math.atan2(-target.x,-target.z)).multiply(hangingQ);
  const end=target.clone().add(animal.tab.position.clone().multiplyScalar(1.08).applyQuaternion(targetQ));
  const arm=[end.x,.28,end.z];tube([[0,.30,0],arm],.012,mobile.pieces.mobileFrame.getObjectByName('Mobile wooden crossbar').material);
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
 const hanger=tube([[0,ceilingY-.405,0],[0,.34,0]],.004,cord);hanger.visible=false;
 const hookTarget=new THREE.Group();hookTarget.name='Ceiling hook for the animal mobile';hookTarget.userData.mobileMount=true;group.add(hookTarget);
 const hookMetal=new THREE.MeshStandardMaterial({color:0xd0b572,metalness:.65,roughness:.46,emissive:0x65522a,emissiveIntensity:.22});
 const plateMaterial=new THREE.MeshStandardMaterial({color:0xc2ab66,metalness:.35,roughness:.75});
 const stem=new THREE.Mesh(new THREE.CylinderGeometry(.013,.016,.29,10),hookMetal);stem.position.set(0,ceilingY-.145,0);hookTarget.add(stem);
 const hook=new THREE.Mesh(new THREE.TorusGeometry(.075,.015,8,24,Math.PI*1.65),hookMetal);hook.name='Large brass ceiling J hook';hook.rotation.z=Math.PI*.85;hook.position.set(0,ceilingY-.33,0);hookTarget.add(hook);
 const mount=new THREE.Mesh(new THREE.CylinderGeometry(.11,.11,.035,20),plateMaterial);mount.name='Aged brass ceiling hook plate';mount.position.set(0,ceilingY-.018,0);hookTarget.add(mount);
 for(const x of[-.07,.07]){const bolt=new THREE.Mesh(new THREE.CylinderGeometry(.013,.013,.012,6),metal);bolt.position.set(x,ceilingY-.041,0);hookTarget.add(bolt);}
 const hookPick=new THREE.Mesh(new THREE.BoxGeometry(.34,.48,.34),new THREE.MeshBasicMaterial({transparent:true,opacity:0,colorWrite:false,depthWrite:false}));hookPick.name='Animal mobile hanging target';hookPick.position.set(0,ceilingY-.23,0);hookTarget.add(hookPick);
 for(const c of mountedAnimals)c.patch.visible=false;
 const lamp=light??new THREE.PointLight(0xe3d4ad,0,2.5,2);
 if(!light){lamp.position.set(0,-.80,0);lamp.userData.mobileEssential=true;group.add(lamp);}
 function getTarget(out){return out.copy(group.position).add(new THREE.Vector3(0,-.18,0));}
 function update(time,reducedMotion=false){
  const done=state.update(time,reducedMotion);
  if(!state.hung&&hung)reset();
  if(state.hung&&!hung){hung=true;for(const c of mountedAnimals){assembly.add(c.object);c.object.scale.setScalar(1.08);c.object.visible=true;}}
  group.visible=true;assembly.visible=hung;hookTarget.visible=true;hookTarget.userData.mobileMount=hookPick.visible=!hung;hanger.visible=hung;mobile.group.visible=!hung&&!state.collectedAll;
  if(state.active){lamp.intensity=2;lamp.color.setHex(0xe3d4ad);lamp.distance=2.5;if(light){lamp.position.set(0,-.8,0);group.localToWorld(lamp.position);}}
  else if(!light)lamp.intensity=0;
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
 let inventoryPreview=null;
 function inventoryModel(){
  if(inventoryPreview)return inventoryPreview;
  inventoryPreview=new THREE.Group();inventoryPreview.name='Assembled animal mobile';
  // Borrow existing meshes without moving any world animals into the ceiling.
  for(const child of assembly.children){if(child===scissors.group||child===hanger||mountedAnimals.some(c=>c.object===child))continue;const copy=child.clone(true);copy.visible=child!==cleanStrings;inventoryPreview.add(copy);}
  for(const c of mountedAnimals){const copy=c.object.clone(true);copy.visible=true;copy.position.copy(c.start);copy.quaternion.copy(c.startQ);copy.scale.setScalar(1.08);inventoryPreview.add(copy);}
  return inventoryPreview;
 }
 function reset(){hung=false;group.visible=true;assembly.visible=hanger.visible=false;hookTarget.visible=hookPick.visible=hookTarget.userData.mobileMount=true;mobile.group.visible=true;for(const c of mountedAnimals){c.home.parent.add(c.object);c.object.position.copy(c.home.position);c.object.quaternion.copy(c.home.quaternion);c.object.scale.copy(c.home.scale);c.headPose.rotation.x=0;c.patch.visible=false;}for(const object of Object.values(mobile.pieces))object.visible=true;for(const animal of mobile.animals)animal.shadow.visible=animal.string.visible=true;}
 return {group,assembly,hookTarget,update,getTarget,reset,inventoryModel,get hung(){return hung;}};
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
