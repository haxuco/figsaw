import * as THREE from './vendor/three.module.js';
import {createRescueState,REPAIRS,PLAYER_CHAIR} from './rescue-state.js';
import {batchStaticScenery} from './static-batching.js';
import {renderQuality} from './render-quality.js';

export function createRescueChairs({objects,parts,player,tanks,floorSupport,puzzle}){
 const group=new THREE.Group();group.name='Chair rescue, salvaged parts and hoist chains';group.userData.ignoreAcid=true;
 const state=createRescueState(puzzle),homes=objects.map(o=>({p:o.position.clone(),q:o.quaternion.clone()}));
 const playerHome={p:player.position.clone(),q:player.quaternion.clone()};
 const metal=new THREE.MeshStandardMaterial({color:0x79776a,metalness:.8,roughness:.57});
 const tint=new THREE.MeshBasicMaterial({color:0x8e9566,transparent:true,opacity:.48,depthWrite:false,side:THREE.DoubleSide});
 const ghost=new THREE.MeshBasicMaterial({transparent:true,opacity:0,colorWrite:false,depthWrite:false});
 const dummy=new THREE.Object3D(),up=new THREE.Vector3(0,1,0),twist=new THREE.Quaternion(),point=new THREE.Vector3();
 const linkCurve=[];for(let j=0;j<=8;j++){const a=j/8*Math.PI;linkCurve.push(new THREE.Vector3(Math.cos(a)*.017,.012+Math.sin(a)*.017,0));}for(let j=0;j<=8;j++){const a=Math.PI+j/8*Math.PI;linkCurve.push(new THREE.Vector3(Math.cos(a)*.017,-.012+Math.sin(a)*.017,0));}
 const geometry=new THREE.TubeGeometry(new THREE.CatmullRomCurve3(linkCurve,true),16,.005,4,true);
 const coilHomes=[],chains=[],slots=[],rolls=new Map(),transfers=new Map();
 let message='',moving=null,firstAnchor=null,pullAt=null,lastTime=0,linksDirty=true,playerOffset=new THREE.Vector3();
 const anchorPoint=(index,out)=>[...objects,player][index].localToWorld(out.set(0,.25,.20));
 function chainMesh(){const m=new THREE.InstancedMesh(geometry,metal,128);m.instanceMatrix.setUsage(THREE.DynamicDrawUsage);m.count=0;m.frustumCulled=false;m.castShadow=true;group.add(m);return m;}
 function chainPath(mesh,points){const curve=new THREE.CatmullRomCurve3(points),length=curve.getLength(),count=Math.min(128,Math.max(2,Math.ceil(length/.042)));mesh.count=count;
  for(let j=0;j<count;j++){const t=j/(count-1);curve.getPoint(t,point);dummy.position.copy(point);dummy.quaternion.setFromUnitVectors(up,curve.getTangent(t));twist.setFromAxisAngle(up,j%2?Math.PI/2:0);dummy.quaternion.multiply(twist);dummy.scale.setScalar(1);dummy.updateMatrix();mesh.setMatrixAt(j,dummy.matrix);}mesh.instanceMatrix.needsUpdate=true;
 }
 for(const [id,object]of Object.entries(parts)){object.userData.salvagePart=id;object.userData.ignoreAcid=true;object.name=`Salvage ${id} from donor chair`;batchStaticScenery(object,{minObjects:2,allowInteractiveRoot:true,palette:renderQuality.mobile});}
 // Temporary discovery aid: lightweight markers stay outside the collectible
 // models, so inventory previews and installed replacements remain unchanged.
 const partHighlights=new THREE.Group();partHighlights.name='Temporary chair part highlights';group.add(partHighlights);
 const beaconGeometry=new THREE.OctahedronGeometry(.065),beaconMaterial=new THREE.MeshBasicMaterial({color:0xffdd44,transparent:true,opacity:.9,depthTest:false,depthWrite:false,toneMapped:false,fog:false});
 const highlightedParts=Object.values(parts).map(object=>{
  object.updateWorldMatrix(true,true);
  const bounds=new THREE.Box3().setFromObject(object).applyMatrix4(object.parent.matrixWorld.clone().invert()).expandByScalar(.025);
  const outline=new THREE.Box3Helper(bounds,0xffdd44);outline.material.depthTest=false;outline.material.depthWrite=false;outline.material.transparent=true;outline.material.toneMapped=false;outline.material.fog=false;outline.renderOrder=90;outline.raycast=()=>{};
  const beacon=new THREE.Mesh(beaconGeometry,beaconMaterial);bounds.getCenter(beacon.position);beacon.position.y=bounds.max.y+.18;beacon.renderOrder=91;beacon.raycast=()=>{};
  partHighlights.add(outline,beacon);return {object,outline,beacon,height:beacon.position.y};
 });
 function syncPartHighlights(time=0,reducedMotion=false){
  const pulse=reducedMotion?1:.8+.2*Math.sin(time*3);
  beaconMaterial.opacity=pulse;
  for(const {object,outline,beacon,height}of highlightedParts){
   outline.visible=beacon.visible=object.visible;
   if(!object.visible)continue;
   outline.material.opacity=pulse;beacon.position.y=height+(reducedMotion?0:Math.sin(time*3)*.025);beacon.rotation.y=reducedMotion?0:time*.8;
  }
 }
 objects.forEach((object,i)=>{
  object.userData.rescueChair=i;object.userData.ignoreAcid=true;object.name=`Aeron rescue chair — ${REPAIRS[i].label}`;
  const repair=object.chairParts;
  // Keep repaired pieces separate from the static frame so the defect visibly disappears.
  batchStaticScenery(object,{exclude:[repair.base,repair.seat],minObjects:2,allowInteractiveRoot:true,palette:renderQuality.mobile});
  batchStaticScenery(repair.base,{exclude:[repair.caster],minObjects:2,palette:renderQuality.mobile});
  batchStaticScenery(repair.seat,{minObjects:2,palette:renderQuality.mobile});
 });
 for(let i=0;i<=PLAYER_CHAIR;i++){
  const chair=i===PLAYER_CHAIR?player:objects[i],anchor=new THREE.Mesh(new THREE.TorusGeometry(.046,.009,5,16),metal);anchor.position.set(0,.25,.20);anchor.userData.chainAnchor=i;anchor.name='Chair towing loop';chair.add(anchor);
  const pick=new THREE.Mesh(new THREE.SphereGeometry(.105,8,6),ghost);pick.userData.chainAnchor=i;anchor.add(pick);
 }
 tanks.forEach((tank,index)=>{
  tank.updateWorldMatrix(true,false);const p=tank.localToWorld(new THREE.Vector3(0,0,.92));p.y=floorSupport(p.x,p.z);
  const marker=new THREE.Mesh(new THREE.RingGeometry(.31,.33,32),tint);marker.rotation.x=-Math.PI/2;marker.position.copy(p);marker.position.y+=.013;marker.visible=false;marker.userData.rescueSlot=index;group.add(marker);
  const pick=new THREE.Mesh(new THREE.CylinderGeometry(.37,.37,.12,12),ghost);pick.position.y=.03;pick.userData.rescueSlot=index;const target=new THREE.Group();target.position.copy(p);target.add(pick);target.visible=false;group.add(target);
  slots.push({p,q:tank.quaternion.clone(),marker,target});
  const mesh=chainMesh();mesh.visible=false;mesh.userData.chainPickup=index;
  const center=tank.localToWorld(new THREE.Vector3(.43,0,.62));center.y=floorSupport(center.x,center.z)+.02;coilHomes.push(center);
  const pickChain=new THREE.Mesh(new THREE.BoxGeometry(.32,.11,.32),ghost);pickChain.position.copy(center);pickChain.userData.chainPickup=index;pickChain.visible=false;group.add(pickChain);
  chains.push({mesh,pick:pickChain,dropped:false,collected:false});
 });
 function syncParts(){objects.forEach((o,i)=>{const c=state.chairs[i],parts=o.chairParts;if(i===0)parts.caster.visible=c.installed.includes('caster');if(i===1)parts.base.visible=c.installed.includes('base');});}
 function use(index,item,inventory){
  const before=state.chairs[index]?.installed.includes('seat'),message=state.use(index,item,inventory),c=state.chairs[index];
  if(!c)return message;
  if(c.installed.includes('seat')&&!before&&index===1){objects[1].chairParts.seat.visible=false;const seat=parts.seat.clone();seat.userData={};seat.visible=true;seat.position.set(0,.49,0);seat.rotation.set(0,0,0);objects[1].add(seat);objects[1].replacementSeat=seat;}
  syncParts();if(c.repaired){const object=objects[index];rolls.set(index,{from:object.position.clone(),q:object.quaternion.clone(),to:object.position.clone().setY(floorSupport(object.position.x,object.position.z)),toQ:new THREE.Quaternion().setFromAxisAngle(up,object.rotation.y),at:lastTime,duration:1});}
  return message;
 }
 function select(index){if(!state.chairs[index]?.repaired||state.chairs[index].passenger!==null||state.pulling||state.safe||rolls.has(index))return false;moving=index;slots.forEach((s,i)=>{s.marker.visible=s.target.visible=!state.chairs.some((c,j)=>j!==index&&c.tank===i);});return true;}
 function cancelMove(){moving=null;slots.forEach(s=>s.marker.visible=s.target.visible=false);}
 function place(tank){if(moving===null||!state.place(moving,tank))return false;const index=moving,o=objects[index],slot=slots[tank];rolls.set(index,{from:o.position.clone(),q:o.quaternion.clone(),to:slot.p.clone(),toQ:slot.q.clone(),at:lastTime,duration:1.5});cancelMove();return true;}
 function board(tank,hanger,alive=true){const index=state.chairAt(tank);if(index<0||rolls.has(index))return false;const chosen=state.board(tank,tank,{alive});if(chosen<0)return false;
  const object=objects[index];object.attach(hanger);transfers.set(tank,{hanger,from:hanger.position.clone(),q:hanger.quaternion.clone(),at:lastTime});return true;
 }
 function dropChain(index){const c=chains[index];if(c.dropped)return;c.dropped=true;c.mesh.visible=c.pick.visible=true;const p=coilHomes[index],points=[];for(let j=0;j<=32;j++){const a=j/32*Math.PI*4,r=.06+j*.0018;points.push(new THREE.Vector3(p.x+Math.cos(a)*r,p.y+j*.0002,p.z+Math.sin(a)*r));}chainPath(c.mesh,points);}
 function collectChain(index,inventory){const c=chains[index];if(!c?.dropped||c.collected)return false;c.collected=true;c.mesh.visible=c.pick.visible=false;inventory.add('chain'+index);return true;}
 function hook(index,item,inventory){
  if(!/^chain[0-2]$/.test(item)||!inventory.has(item))return 'Equip a recovered hoist chain first.';
  if(index<PLAYER_CHAIR&&!state.chairs[index]?.repaired)return 'Repair that chair before linking it.';
  if(firstAnchor===null){firstAnchor=index;return 'First hook attached. Click the towing loop on a second chair.';}
  if(!state.connect(firstAnchor,index,item)){firstAnchor=null;return 'That connection would tangle the train. Use an open loop on another chair.';}
  inventory.remove(item);firstAnchor=null;linksDirty=true;return 'Chairs linked. Connect both rescue chairs to your chair, then pull them to safety.';
 }
 const pullStarts=[];let pullOrder=[];
 function pull(){if(!state.startPull())return false;pullAt=lastTime;pullStarts.length=0;pullStarts.push(...objects.map(o=>o.position.clone()),player.position.clone());
  pullOrder=[PLAYER_CHAIR];while(pullOrder.length<=PLAYER_CHAIR){const n=pullOrder.at(-1),link=state.links.find(l=>(l.a===n&&!pullOrder.includes(l.b))||(l.b===n&&!pullOrder.includes(l.a)));if(!link)break;pullOrder.push(link.a===n?link.b:link.a);}return true;
 }
 function update(time,reducedMotion=false){lastTime=time;syncPartHighlights(time,reducedMotion);let dirty=linksDirty;linksDirty=false;playerOffset.set(0,0,0);
  for(const [i,r]of rolls){const u=reducedMotion?1:THREE.MathUtils.smootherstep(time-r.at,0,r.duration),o=objects[i];o.position.lerpVectors(r.from,r.to,u);o.quaternion.slerpQuaternions(r.q,r.toQ,u);dirty=true;if(u===1)rolls.delete(i);}
  for(const [i,t]of transfers){const u=reducedMotion?1:THREE.MathUtils.smootherstep(time-t.at,0,1.6);t.hanger.position.lerpVectors(t.from,new THREE.Vector3(0,.78,0),u);t.hanger.quaternion.copy(t.q).slerp(new THREE.Quaternion(),u);if(u===1)transfers.delete(i);}
  if(state.pulling){const previous=player.position.clone();pullOrder.forEach((index,n)=>{const u=reducedMotion?1:THREE.MathUtils.smootherstep(time-pullAt-n*.7,0,5);const target=new THREE.Vector3(-.70+n*.76,floorSupport(-.70+n*.76,3.9),3.9);const o=index===PLAYER_CHAIR?player:objects[index];o.position.lerpVectors(pullStarts[index],target,u);o.rotation.set(0,Math.PI,0);});playerOffset.subVectors(player.position,previous);dirty=true;if(reducedMotion||time-pullAt>=5+PLAYER_CHAIR*.7){state.finishPull();message='The Figpals are safe beside the exit. Solve the door code before the final deadline.';}}
  if(dirty)for(const link of state.links){const c=chains[Number(link.chain.slice(-1))],a=anchorPoint(link.a,new THREE.Vector3()),b=anchorPoint(link.b,new THREE.Vector3()),mid=a.clone().lerp(b,.5);mid.y=state.pulling?Math.max(.05,Math.min(a.y,b.y)-.06):floorSupport(mid.x,mid.z)+.035;c.mesh.visible=true;chainPath(c.mesh,[a,mid,b]);}
 }
 function reset(){message='';cancelMove();firstAnchor=null;pullAt=null;state.reset();rolls.clear();transfers.clear();linksDirty=true;objects.forEach((o,i)=>{o.position.copy(homes[i].p);o.quaternion.copy(homes[i].q);if(o.replacementSeat){o.remove(o.replacementSeat);o.replacementSeat=null;}o.chairParts.seat.visible=true;});player.position.copy(playerHome.p);player.quaternion.copy(playerHome.q);playerOffset.set(0,0,0);for(const p of Object.values(parts))p.visible=true;for(const c of chains){c.dropped=c.collected=false;c.mesh.visible=c.pick.visible=false;}syncParts();syncPartHighlights();}
 return {group,state,objects,parts,inventoryChain:index=>chains[index]?.mesh,takeMessage(){const result=message;message='';return result;},use,select,cancelMove,place,board,dropChain,collectChain,hook,pull,update,reset,cancelHook(){firstAnchor=null;},get moving(){return moving;},get playerOffset(){return playerOffset;},get busy(){return rolls.size>0||transfers.size>0||state.pulling;},collectPart(id,inventory){const p=parts[id];if(!p?.visible||!inventory.add(id))return false;p.visible=false;syncPartHighlights(lastTime);return true;}};
}
