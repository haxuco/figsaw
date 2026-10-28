import * as THREE from './vendor/three.module.js';
import {createRescueState,REPAIRS,PLAYER_CHAIR} from './rescue-state.js';
import {batchStaticScenery} from './static-batching.js';
import {renderQuality} from './render-quality.js';
import {visibleLocalBounds} from './testing-highlights.js';
import {createRescueSwingPath,CHAIR_PASSENGER_HEIGHT,RESCUE_SWING_SECONDS} from './rescue-swing.js';
import {createChairRoute,CHAIR_RADIUS} from './chair-route.js';

export function createRescueChairs({objects,parts,player,tanks,floorSupport,puzzle}){
 const group=new THREE.Group();group.name='Chair rescue, salvaged parts and hoist chains';group.userData.ignoreAcid=true;
 const state=createRescueState(puzzle),homes=objects.map(o=>({p:o.position.clone(),q:o.quaternion.clone()}));
 const playerHome={p:player.position.clone(),q:player.quaternion.clone()};
 const metal=new THREE.MeshStandardMaterial({color:0x79776a,metalness:.8,roughness:.57});
 const tint=new THREE.MeshBasicMaterial({color:0xffd782,transparent:true,opacity:.75,depthWrite:false,side:THREE.DoubleSide,toneMapped:false,fog:false});
 const previewMaterial=new THREE.LineBasicMaterial({color:0xffd782,transparent:true,opacity:.65,depthWrite:false,toneMapped:false,fog:false});
 const ghost=new THREE.MeshBasicMaterial({transparent:true,opacity:0,colorWrite:false,depthWrite:false});
 const dummy=new THREE.Object3D(),up=new THREE.Vector3(0,1,0),right=new THREE.Vector3(1,0,0),twist=new THREE.Quaternion(),point=new THREE.Vector3();
 const linkCurve=[];for(let j=0;j<=8;j++){const a=j/8*Math.PI;linkCurve.push(new THREE.Vector3(Math.cos(a)*.017,.012+Math.sin(a)*.017,0));}for(let j=0;j<=8;j++){const a=Math.PI+j/8*Math.PI;linkCurve.push(new THREE.Vector3(Math.cos(a)*.017,-.012+Math.sin(a)*.017,0));}
 const geometry=new THREE.TubeGeometry(new THREE.CatmullRomCurve3(linkCurve,true),16,.005,4,true);
 const coilHomes=[],chains=[],slots=[],tankObstacles=[],rolls=new Map(),transfers=new Map();
 let message='',moving=null,firstAnchor=null,pullAt=null,lastTime=0,linksDirty=true,discoveryEnabled=true,playerOffset=new THREE.Vector3();
 const anchorPoint=(index,out)=>[...objects,player][index].localToWorld(out.set(0,.25,.20));
 function chainMesh(){const m=new THREE.InstancedMesh(geometry,metal,128);m.instanceMatrix.setUsage(THREE.DynamicDrawUsage);m.count=0;m.frustumCulled=false;m.castShadow=true;group.add(m);return m;}
 function chainPath(mesh,points){const curve=new THREE.CatmullRomCurve3(points),length=curve.getLength(),count=Math.min(128,Math.max(2,Math.ceil(length/.042)));mesh.count=count;
  for(let j=0;j<count;j++){const t=j/(count-1);curve.getPoint(t,point);dummy.position.copy(point);dummy.quaternion.setFromUnitVectors(up,curve.getTangent(t));twist.setFromAxisAngle(up,j%2?Math.PI/2:0);dummy.quaternion.multiply(twist);dummy.scale.setScalar(1);dummy.updateMatrix();mesh.setMatrixAt(j,dummy.matrix);}mesh.instanceMatrix.needsUpdate=true;
 }
 for(const [id,object]of Object.entries(parts)){object.userData.salvagePart=id;object.userData.ignoreAcid=true;object.name=`Salvage ${id} from donor chair`;batchStaticScenery(object,{minObjects:2,allowInteractiveRoot:true,palette:renderQuality.mobile});}
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
  batchStaticScenery(object,{exclude:[repair.base,repair.seat],minObjects:2,allowInteractiveRoot:true,palette:renderQuality.mobile});
  batchStaticScenery(repair.base,{exclude:[repair.caster],minObjects:2,palette:renderQuality.mobile});
  batchStaticScenery(repair.seat,{minObjects:2,palette:renderQuality.mobile});
  // A chair has many thin rails and gaps. Use a modest, attached hit volume
  // so mouse and touch clicks between those rails still reach the chair.
  const bounds=visibleLocalBounds(object).expandByScalar(.025);
  if(!bounds.isEmpty()){
   const pick=new THREE.Mesh(pickGeometry,ghost);pick.name=`Rescue chair ${i+1} click target`;
   bounds.getCenter(pick.position);bounds.getSize(pick.scale);object.add(pick);
  }
 });
 for(let i=0;i<=PLAYER_CHAIR;i++){
  const chair=i===PLAYER_CHAIR?player:objects[i],anchor=new THREE.Mesh(new THREE.TorusGeometry(.046,.009,5,16),metal);anchor.position.set(0,.25,.20);anchor.userData.chainAnchor=i;anchor.name='Chair towing loop';chair.add(anchor);
  const pick=new THREE.Mesh(new THREE.SphereGeometry(.105,8,6),ghost);pick.userData.chainAnchor=i;anchor.add(pick);
 }
 tanks.forEach((tank,index)=>{
  tank.updateWorldMatrix(true,false);
  const tankCenter=tank.getWorldPosition(new THREE.Vector3()),valve=tank.localToWorld(new THREE.Vector3(.30,0,.55));
  tankObstacles.push({x:tankCenter.x,z:tankCenter.z,radius:.61},{x:valve.x,z:valve.z,radius:.14});
  // Park in the open aisle, clear of the neighbouring staggered tanks as well
  // as this tank. Keep the seat in front of the breach for the rescue swing.
  const p=tank.localToWorld(new THREE.Vector3(.90,0,1.05));p.y=floorSupport(p.x,p.z);
  const marker=new THREE.Group();marker.name=`Chair destination — Tank ${String(index+1).padStart(2,'0')}`;marker.position.copy(p);marker.visible=false;marker.userData.rescueSlot=index;group.add(marker);
  const ring=new THREE.Mesh(new THREE.RingGeometry(.46,.50,32),tint);ring.rotation.x=-Math.PI/2;ring.position.y=.014;marker.add(ring);
  // A lightweight chair silhouette makes the floor target recognizable from
  // a low viewpoint. Its hit volume covers the silhouette as well as the ring.
  for(const [size,pos]of[[[.48,.04,.46],[0,.49,0]],[[.48,.48,.04],[0,.77,.21]],[[.04,.47,.04],[-.18,.25,0]],[[.04,.47,.04],[.18,.25,0]]]){
   const box=new THREE.BoxGeometry(...size),outline=new THREE.LineSegments(new THREE.EdgesGeometry(box),previewMaterial);box.dispose();outline.position.set(...pos);outline.raycast=()=>{};marker.add(outline);
  }
  const pick=new THREE.Mesh(new THREE.BoxGeometry(.98,1.1,.98),ghost);pick.position.y=.55;pick.userData.rescueSlot=index;const target=new THREE.Group();target.position.copy(p);target.add(pick);target.visible=false;group.add(target);
  // Present the open front of the seat to the breach. A forward-facing chair's
  // mesh back would otherwise sit directly across the captive's landing path.
  slots.push({p,q:tank.quaternion.clone().multiply(new THREE.Quaternion().setFromAxisAngle(up,Math.PI+Math.atan2(.90,1.05))),seatedQ:tank.quaternion.clone(),marker,target});
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
 function canMove(index){return !rolls.size&&!transfers.size&&slots.some((s,i)=>state.canPlace(index,i));}
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
 function prepare(tank,alive=true){if(rolls.size||transfers.size)return false;return state.reserve(tank,tank,{alive});}
 function board(tank,hanger,alive=true){const index=state.chairAt(tank);if(index<0||rolls.has(index))return false;const chosen=state.board(tank,tank,{alive});if(chosen<0)return false;
  const object=objects[index],source=tanks[tank],from=source.worldToLocal(hanger.getWorldPosition(new THREE.Vector3())),to=source.worldToLocal(object.localToWorld(new THREE.Vector3(0,CHAIR_PASSENGER_HEIGHT,0)));
  group.attach(hanger);const toQ=group.getWorldQuaternion(new THREE.Quaternion()).invert().multiply(object.getWorldQuaternion(new THREE.Quaternion()));
  transfers.set(tank,{hanger,object,index,source,path:createRescueSwingPath(from,to),q:hanger.quaternion.clone(),toQ,at:lastTime});return true;
 }
 function prepareChain(index){const c=chains[index];if(c.dropped)return;c.dropped=true;const p=coilHomes[index],points=[];for(let j=0;j<=32;j++){const a=j/32*Math.PI*4,r=.06+j*.0018;points.push(new THREE.Vector3(p.x+Math.cos(a)*r,p.y+j*.0002,p.z+Math.sin(a)*r));}chainPath(c.mesh,points);}
 function dropChain(index){prepareChain(index);const c=chains[index];c.mesh.visible=c.pick.visible=true;}
 function collectChain(index,inventory,{fromHoist=false}={}){
  const c=chains[index],id='chain'+index;if(!c||c.collected||(!c.dropped&&!fromHoist))return false;
  if(!inventory.has(id)&&!inventory.add(id))return false;
  prepareChain(index);c.collected=true;c.mesh.visible=c.pick.visible=false;return true;
 }
 function hook(index,item,inventory){
  if(!/^chain[0-2]$/.test(item)||!inventory.has(item))return 'Equip a recovered hoist chain first.';
  if(index<PLAYER_CHAIR&&!state.chairs[index]?.repaired)return 'Repair that chair before linking it.';
  if(firstAnchor===null){firstAnchor=index;return 'First hook attached. Click the towing loop on a second chair.';}
  if(!state.connect(firstAnchor,index,item)){firstAnchor=null;return 'That connection would tangle the train. Use an open loop on another chair.';}
  inventory.remove(item);firstAnchor=null;linksDirty=true;return 'Chairs linked. Connect both rescue chairs to your chair, then pull them to safety.';
 }
 const pullStarts=[];let pullOrder=[];
 function pull(){if(transfers.size||rolls.size||!state.startPull())return false;pullAt=lastTime;pullStarts.length=0;pullStarts.push(...objects.map(o=>o.position.clone()),player.position.clone());
  pullOrder=[PLAYER_CHAIR];while(pullOrder.length<=PLAYER_CHAIR){const n=pullOrder.at(-1),link=state.links.find(l=>(l.a===n&&!pullOrder.includes(l.b))||(l.b===n&&!pullOrder.includes(l.a)));if(!link)break;pullOrder.push(link.a===n?link.b:link.a);}return true;
 }
 function update(time,reducedMotion=false){lastTime=time;syncPartHighlights(time,reducedMotion);let dirty=linksDirty;linksDirty=false;playerOffset.set(0,0,0);
  for(const [i,r]of rolls){const u=reducedMotion?1:THREE.MathUtils.smootherstep(time-r.at,0,r.duration),o=objects[i];if(r.route){r.route.getPoint(u,o.position);o.position.y=floorSupport(o.position.x,o.position.z);}else o.position.lerpVectors(r.from,r.to,u);o.quaternion.slerpQuaternions(r.q,r.toQ,u);dirty=true;if(u===1)rolls.delete(i);}
  for(const [i,t]of transfers){const u=reducedMotion?1:THREE.MathUtils.smootherstep(time-t.at,0,RESCUE_SWING_SECONDS);t.path.getPoint(u,point);t.source.localToWorld(point);group.worldToLocal(point);t.hanger.position.copy(point);t.hanger.quaternion.slerpQuaternions(t.q,t.toQ,u);twist.setFromAxisAngle(right,-Math.sin(u*Math.PI)*.14);t.hanger.quaternion.multiply(twist);
   if(u===1){t.object.attach(t.hanger);t.hanger.position.set(0,CHAIR_PASSENGER_HEIGHT,0);t.hanger.quaternion.identity();rolls.set(t.index,{from:t.object.position.clone(),to:t.object.position.clone(),q:t.object.quaternion.clone(),toQ:slots[i].seatedQ.clone(),at:time,duration:1});transfers.delete(i);}
  }
  if(state.pulling){const previous=player.position.clone();pullOrder.forEach((index,n)=>{const u=reducedMotion?1:THREE.MathUtils.smootherstep(time-pullAt-n*.7,0,5);const target=new THREE.Vector3(-.70+n*.76,floorSupport(-.70+n*.76,3.9),3.9);const o=index===PLAYER_CHAIR?player:objects[index];o.position.lerpVectors(pullStarts[index],target,u);o.rotation.set(0,Math.PI,0);});playerOffset.subVectors(player.position,previous);dirty=true;if(reducedMotion||time-pullAt>=5+PLAYER_CHAIR*.7){state.finishPull();message='The Figpals are safe beside the exit. Solve the door code before the final deadline.';}}
  if(dirty)for(const link of state.links){const c=chains[Number(link.chain.slice(-1))],a=anchorPoint(link.a,new THREE.Vector3()),b=anchorPoint(link.b,new THREE.Vector3()),mid=a.clone().lerp(b,.5);mid.y=state.pulling?Math.max(.05,Math.min(a.y,b.y)-.06):floorSupport(mid.x,mid.z)+.035;c.mesh.visible=true;chainPath(c.mesh,[a,mid,b]);}
 }
 function reset(){message='';cancelMove();firstAnchor=null;pullAt=null;state.reset();rolls.clear();transfers.clear();linksDirty=true;objects.forEach((o,i)=>{o.position.copy(homes[i].p);o.quaternion.copy(homes[i].q);if(o.replacementSeat){o.remove(o.replacementSeat);o.replacementSeat=null;}o.chairParts.seat.visible=true;});player.position.copy(playerHome.p);player.quaternion.copy(playerHome.q);playerOffset.set(0,0,0);for(const p of Object.values(parts))p.visible=true;for(const c of chains){c.dropped=c.collected=false;c.mesh.visible=c.pick.visible=false;}syncParts();syncPartHighlights();}
 function capture(){return {state:state.capture(),poses:[...objects,player].map(o=>({position:o.position.toArray(),rotation:o.quaternion.toArray()})),parts:Object.fromEntries(Object.entries(parts).map(([id,o])=>[id,o.visible])),chains:chains.map(c=>({dropped:c.dropped,collected:c.collected}))};}
 function restore(value){
  reset();state.restore(value.state);syncParts();
  if(state.chairs[1].installed.includes('seat')){objects[1].chairParts.seat.visible=false;const seat=parts.seat.clone();seat.userData={};seat.visible=true;seat.position.set(0,.49,0);seat.rotation.set(0,0,0);objects[1].add(seat);objects[1].replacementSeat=seat;}
  value.poses.forEach((p,i)=>{const o=[...objects,player][i];o.position.fromArray(p.position);o.quaternion.fromArray(p.rotation);});
  for(const [id,visible]of Object.entries(value.parts))parts[id].visible=visible;
  value.chains.forEach((v,i)=>{if(v.dropped)dropChain(i);chains[i].collected=v.collected;if(v.collected)chains[i].mesh.visible=chains[i].pick.visible=false;});linksDirty=true;syncPartHighlights(lastTime);
 }
 return {group,state,objects,parts,capture,restore,inventoryChain:index=>chains[index]?.mesh,canCollectChain:index=>!!chains[index]?.dropped&&!chains[index].collected,canHook:(index,item)=>firstAnchor===null?state.canStartLink(index,item):state.canConnect(firstAnchor,index,item),setHighlightsEnabled(value){discoveryEnabled=value;syncPartHighlights(lastTime);},takeMessage(){const result=message;message='';return result;},use,canMove,availableSlots,select,cancelMove,place,prepare,cancelPreparation:state.cancelReservation,board,isTransferring:index=>transfers.has(index)||rolls.has(state.chairs.findIndex(c=>c.passenger===index)),dropChain,collectChain,hook,pull,update,reset,cancelHook(){firstAnchor=null;},get moving(){return moving;},get playerOffset(){return playerOffset;},get busy(){return rolls.size>0||transfers.size>0||state.pulling;},collectPart(id,inventory){const p=parts[id];if(!p?.visible||!inventory.add(id))return false;p.visible=false;syncPartHighlights(lastTime);return true;}};
}
