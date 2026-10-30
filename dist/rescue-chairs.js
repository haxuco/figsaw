import * as THREE from './vendor/three.module.js';
import {createRescueState,REPAIRS} from './rescue-state.js';
import {batchStaticScenery} from './static-batching.js';
import {visibleLocalBounds} from './testing-highlights.js';
import {createRescueSwingPath,CHAIR_PASSENGER_HEIGHT,RESCUE_SWING_SECONDS} from './rescue-swing.js';
import {createChairRoute,CHAIR_RADIUS} from './chair-route.js';
import {createRescueChain} from './rescue-chain.js';
import {createChairTow} from './chair-tow.js';

export function createRescueChairs({objects,parts,player,tanks,floorSupport,puzzle}){
 const group=new THREE.Group();group.name='Chair rescue and salvaged parts';group.userData.ignoreAcid=true;
 const state=createRescueState(puzzle),homes=objects.map(o=>({p:o.position.clone(),q:o.quaternion.clone()}));
 const playerHome={p:player.position.clone(),q:player.quaternion.clone()};
 const tint=new THREE.MeshBasicMaterial({color:0xffd782,transparent:true,opacity:.75,depthWrite:false,side:THREE.DoubleSide,toneMapped:false,fog:false});
 const ghost=new THREE.MeshBasicMaterial({transparent:true,opacity:0,colorWrite:false,depthWrite:false});
 const up=new THREE.Vector3(0,1,0),right=new THREE.Vector3(1,0,0),twist=new THREE.Quaternion(),point=new THREE.Vector3();
 const slots=[],tankObstacles=[],rolls=new Map(),transfers=new Map();
 let message='',moving=null,lastTime=0,discoveryEnabled=true;
 const chain=createRescueChain({chairs:[...objects,player],state,floorSupport});group.add(chain.group);
 const tow=createChairTow({chairs:[...objects,player],state,tankObstacles,floorSupport});
 for(const [id,object]of Object.entries(parts)){object.userData.salvagePart=id;object.userData.ignoreAcid=true;object.name=`Salvage ${id} from donor chair`;batchStaticScenery(object,{minObjects:2,allowInteractiveRoot:true,palette:true});}
 // Keep forgiving hit volumes and temporary markers outside the collectible
 // models, so inventory previews and installed replacements remain unchanged.
 const partHighlights=new THREE.Group();partHighlights.name='Temporary chair part highlights';partHighlights.userData.testingDecoration=true;group.add(partHighlights);
 const beaconGeometry=new THREE.OctahedronGeometry(.065),beaconMaterial=new THREE.MeshBasicMaterial({color:0xffdd44,transparent:true,opacity:.9,depthTest:false,depthWrite:false,toneMapped:false,fog:false});
 const pickGeometry=new THREE.BoxGeometry(1,1,1);
 const highlightedParts=Object.entries(parts).map(([id,object])=>{
  object.updateWorldMatrix(true,true);
  const bounds=new THREE.Box3().setFromObject(object,true).applyMatrix4(object.parent.matrixWorld.clone().invert()).expandByScalar(.025);
  const pick=new THREE.Mesh(pickGeometry,ghost);pick.name=`Chair ${id} pickup target`;pick.userData.salvagePart=id;
  bounds.getCenter(pick.position);bounds.getSize(pick.scale).addScalar(.08).max(new THREE.Vector3(.22,.14,.22));group.add(pick);
  const outline=new THREE.Box3Helper(bounds,0xffdd44);outline.material.depthTest=false;outline.material.depthWrite=false;outline.material.transparent=true;outline.material.toneMapped=false;outline.material.fog=false;outline.renderOrder=90;outline.raycast=()=>{};
  const beacon=new THREE.Mesh(beaconGeometry,beaconMaterial);bounds.getCenter(beacon.position);beacon.position.y=bounds.max.y+.18;beacon.renderOrder=91;beacon.userData.salvagePart=id;
  partHighlights.add(outline,beacon);return {object,pick,outline,beacon,height:beacon.position.y};
 });
 function syncPartHighlights(time=0,reducedMotion=false){
  const pulse=reducedMotion?1:.8+.2*Math.sin(time*3);
  beaconMaterial.opacity=pulse;
  for(const {object,pick,outline,beacon,height}of highlightedParts){
   pick.visible=object.visible;outline.visible=beacon.visible=discoveryEnabled&&object.visible;
   if(!object.visible)continue;
   outline.material.opacity=pulse;beacon.position.y=height+(reducedMotion?0:Math.sin(time*3)*.025);beacon.rotation.y=reducedMotion?0:time*.8;
  }
 }
 objects.forEach((object,i)=>{
  object.userData.rescueChair=i;object.userData.ignoreAcid=true;object.name=`Aeron rescue chair — ${REPAIRS[i].label}`;
  const repair=object.chairParts;
  // Keep repaired pieces separate from the static frame so the defect visibly disappears.
  batchStaticScenery(object,{exclude:[repair.base,repair.seat],minObjects:2,allowInteractiveRoot:true,palette:true});
  batchStaticScenery(repair.base,{exclude:[repair.caster],minObjects:2,palette:true});
  batchStaticScenery(repair.seat,{minObjects:2,palette:true});
  // A chair has many thin rails and gaps. Use a modest, attached hit volume
  // so mouse and touch clicks between those rails still reach the chair.
  const bounds=visibleLocalBounds(object).expandByScalar(.025);
  if(!bounds.isEmpty()){
   const pick=new THREE.Mesh(pickGeometry,ghost);pick.name=`Rescue chair ${i+1} click target`;
   bounds.getCenter(pick.position);bounds.getSize(pick.scale);object.add(pick);
  }
 });
 tanks.forEach((tank,index)=>{
  tank.updateWorldMatrix(true,false);
  const tankCenter=tank.getWorldPosition(new THREE.Vector3()),valve=tank.localToWorld(new THREE.Vector3(.30,0,.55));
  tankObstacles.push({x:tankCenter.x,z:tankCenter.z,radius:.61},{x:valve.x,z:valve.z,radius:.14});
  // Keep each chair directly in front of its own breach, just beyond the
  // tank base and valve, instead of shifting it across the next tank's view.
  // Aim between the laptop and refuge-chair viewpoints so perspective does
  // not make a middle chair read as belonging to the right-hand tank.
  const direction=new THREE.Vector3(.78,0,3.22).sub(tankCenter).setY(0).normalize();
  const p=tankCenter.clone().addScaledVector(direction,1.18);p.y=floorSupport(p.x,p.z);
  const marker=new THREE.Group();marker.name=`Chair destination — Tank ${String(index+1).padStart(2,'0')}`;marker.position.copy(p);marker.visible=false;marker.userData.rescueSlot=index;group.add(marker);
  const ring=new THREE.Mesh(new THREE.RingGeometry(.46,.50,32),tint);ring.rotation.x=-Math.PI/2;ring.position.y=.014;marker.add(ring);
  // Keep a forgiving invisible target above the floor ring without drawing
  // chair wireframes across the tanks.
  const pick=new THREE.Mesh(new THREE.BoxGeometry(.98,1.1,.98),ghost);pick.position.y=.55;pick.userData.rescueSlot=index;const target=new THREE.Group();target.position.copy(p);target.add(pick);target.visible=false;group.add(target);
  // Present the open front of the seat to the breach. A forward-facing chair's
  // mesh back would otherwise sit directly across the captive's landing path.
  slots.push({p,q:new THREE.Quaternion().setFromAxisAngle(up,Math.PI+Math.atan2(direction.x,direction.z)),seatedQ:tank.quaternion.clone(),marker,target});
 });
 function syncParts(){objects.forEach((o,i)=>{const c=state.chairs[i],parts=o.chairParts;if(i===0)parts.caster.visible=c.installed.includes('caster');if(i===1)parts.base.visible=c.installed.includes('base');});}
 function use(index,item,inventory){
  const before=state.chairs[index]?.installed.includes('seat'),message=state.use(index,item,inventory),c=state.chairs[index];
  if(!c)return message;
  if(c.installed.includes('seat')&&!before&&index===1){objects[1].chairParts.seat.visible=false;const seat=parts.seat.clone();seat.userData={};seat.visible=true;seat.position.set(0,.49,0);seat.rotation.set(0,0,0);objects[1].add(seat);objects[1].replacementSeat=seat;}
  syncParts();if(c.repaired){const object=objects[index];rolls.set(index,{from:object.position.clone(),q:object.quaternion.clone(),to:object.position.clone().setY(floorSupport(object.position.x,object.position.z)),toQ:new THREE.Quaternion().setFromAxisAngle(up,object.rotation.y),at:lastTime,duration:1});}
  return message;
 }
 function canMove(index){return !tow.active&&!rolls.size&&!transfers.size&&slots.some((s,i)=>state.canPlace(index,i));}
 // Correctly parked frames stop accepting clicks.
 function canInteract(index,item){return !tow.active&&(item==='chain'&&state.canLink(index)||state.towPhase==='idle'&&!state.isParked(index));}
 function availableSlots(){return moving===null?[]:slots.flatMap((s,i)=>state.canPlace(moving,i)?[i]:[]);}
 function select(index){if(!canMove(index))return false;moving=index;slots.forEach((s,i)=>{s.marker.visible=s.target.visible=state.canPlace(index,i);});return true;}
 function cancelMove(){moving=null;slots.forEach(s=>s.marker.visible=s.target.visible=false);}
 function place(tank){
  if(moving===null||rolls.size||transfers.size||!state.canPlace(moving,tank))return false;
  const index=moving,o=objects[index],slot=slots[tank];
  const parked=objects.flatMap((other,i)=>i!==index&&state.chairs[i].repaired?[{x:other.position.x,z:other.position.z,radius:CHAIR_RADIUS}]:[]);
  const route=createChairRoute(o.position,slot.p,[...tankObstacles,...parked]);
  if(!route){message='That chair route is blocked.';return false;}
  state.place(index,tank);rolls.set(index,{route,q:o.quaternion.clone(),toQ:slot.q.clone(),at:lastTime,duration:Math.max(1.5,route.length/1.8)});cancelMove();return true;
 }
 function prepare(tank,alive=true){
  // Another Figpal can descend or hop without occupying this waiting chair.
  const index=state.chairAt(tank);if(index<0||rolls.has(index)||transfers.has(tank))return false;
  return state.reserve(tank,tank,{alive});
 }
 function board(tank,hanger,alive=true){const index=state.chairAt(tank);if(index<0||rolls.has(index))return false;const chosen=state.board(tank,tank,{alive});if(chosen<0)return false;
  const object=objects[index],source=tanks[tank],from=source.worldToLocal(hanger.getWorldPosition(new THREE.Vector3())),to=source.worldToLocal(object.localToWorld(new THREE.Vector3(0,CHAIR_PASSENGER_HEIGHT,0)));
  group.attach(hanger);const toQ=group.getWorldQuaternion(new THREE.Quaternion()).invert().multiply(object.getWorldQuaternion(new THREE.Quaternion()));
  transfers.set(tank,{hanger,object,index,source,path:createRescueSwingPath(from,to),q:hanger.quaternion.clone(),toQ,at:lastTime});return true;
 }
 function update(time,reducedMotion=false){lastTime=time;syncPartHighlights(time,reducedMotion);tow.update(time,reducedMotion);
  for(const [i,r]of rolls){const u=reducedMotion?1:THREE.MathUtils.smootherstep(time-r.at,0,r.duration),o=objects[i];if(r.route){r.route.getPoint(u,o.position);o.position.y=floorSupport(o.position.x,o.position.z);}else o.position.lerpVectors(r.from,r.to,u);o.quaternion.slerpQuaternions(r.q,r.toQ,u);if(u===1)rolls.delete(i);}
  for(const [i,t]of transfers){const u=reducedMotion?1:THREE.MathUtils.smootherstep(time-t.at,0,RESCUE_SWING_SECONDS);t.path.getPoint(u,point);t.source.localToWorld(point);group.worldToLocal(point);t.hanger.position.copy(point);t.hanger.quaternion.slerpQuaternions(t.q,t.toQ,u);twist.setFromAxisAngle(right,-Math.sin(u*Math.PI)*.14);t.hanger.quaternion.multiply(twist);
   if(u===1){t.object.attach(t.hanger);t.hanger.position.set(0,CHAIR_PASSENGER_HEIGHT,0);t.hanger.quaternion.identity();state.finishBoard(i);rolls.set(t.index,{from:t.object.position.clone(),to:t.object.position.clone(),q:t.object.quaternion.clone(),toQ:slots[i].seatedQ.clone(),at:time,duration:1});transfers.delete(i);}
  }
  chain.update();
 }
 function reset(){message='';cancelMove();state.reset();tow.reset();rolls.clear();transfers.clear();objects.forEach((o,i)=>{o.position.copy(homes[i].p);o.quaternion.copy(homes[i].q);if(o.replacementSeat){o.remove(o.replacementSeat);o.replacementSeat=null;}o.chairParts.seat.visible=true;});player.position.copy(playerHome.p);player.quaternion.copy(playerHome.q);for(const p of Object.values(parts))p.visible=true;syncParts();syncPartHighlights();chain.reset();}
 function capture(){return {state:state.capture(),chain:chain.capture(),poses:[...objects,player].map(o=>({position:o.position.toArray(),rotation:o.quaternion.toArray()})),parts:Object.fromEntries(Object.entries(parts).map(([id,o])=>[id,o.visible]))};}
 function restore(value){
  reset();state.restore(value.state);syncParts();
  if(state.chairs[1].installed.includes('seat')){objects[1].chairParts.seat.visible=false;const seat=parts.seat.clone();seat.userData={};seat.visible=true;seat.position.set(0,.49,0);seat.rotation.set(0,0,0);objects[1].add(seat);objects[1].replacementSeat=seat;}
  value.poses.forEach((p,i)=>{const o=[...objects,player][i];o.position.fromArray(p.position);o.quaternion.fromArray(p.rotation);});
  for(const [id,visible]of Object.entries(value.parts))parts[id].visible=visible;
  chain.restore(value.chain);syncPartHighlights(lastTime);
 }
 return {group,state,objects,parts,chain,capture,restore,canInteract,
  link(index,inventory){if(rolls.size||transfers.size)return 'The chair is still moving.';const result=state.link(index,inventory);chain.update();return result;},
  canTow:()=>!rolls.size&&!transfers.size&&!tow.active&&state.canTow(),pull:time=>!rolls.size&&!transfers.size&&tow.start(time),exit:time=>tow.start(time,true),pauseTow:tow.pause,get towing(){return tow.active;},
  setHighlightsEnabled(value){discoveryEnabled=value;syncPartHighlights(lastTime);},takeMessage(){const result=message;message='';return result;},use,canMove,availableSlots,select,cancelMove,place,prepare,cancelPreparation:state.cancelReservation,board,isTransferring:index=>transfers.has(index)||rolls.has(state.chairs.findIndex(c=>c.passenger===index)),update,reset,get moving(){return moving;},get busy(){return tow.active||rolls.size>0||transfers.size>0;},collectPart(id,inventory){const p=parts[id];if(!p?.visible||!inventory.add(id))return false;p.visible=false;syncPartHighlights(lastTime);return true;}};
}
