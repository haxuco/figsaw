import * as THREE from './vendor/three.module.js';
import {PICK_LAYER} from './render-work.js';

export function createSceneRaycaster(){
 const ray=new THREE.Raycaster();ray.layers.enable(PICK_LAYER);
 // The default one-metre line radius makes thin table outlines intercept
 // clicks and visibility checks on objects clearly visible beside them.
 ray.params.Line.threshold=.008;
 // Three's default raycaster traverses invisible subtrees. Hidden inventory
 // models, skeletons and effects cannot receive input and need no ray tests.
 const intersect=(object,hits,recursive)=>{
  if(!object.visible)return;
  let descend=true;
  if(object.layers.test(ray.layers))descend=object.raycast(ray,hits)!==false;
  if(descend&&recursive)for(const child of object.children)intersect(child,hits,true);
 };
 ray.intersectObjects=(objects,recursive=true,hits=[])=>{
  for(const object of objects)if(visible(object))intersect(object,hits,recursive);
  return hits.sort((a,b)=>a.distance-b.distance);
 };
 ray.intersectObject=(object,recursive=true,hits=[])=>ray.intersectObjects([object],recursive,hits);
 return ray;
}

const ancestor=(object,predicate)=>{for(let o=object;o;o=o.parent)if(predicate(o))return o;return null;};
const visible=object=>!ancestor(object,o=>!o.visible);
const chair=object=>ancestor(object,o=>Number.isInteger(o.userData.rescueChair)||o.userData.chairSeat);
const within=(object,root)=>!!ancestor(object,o=>o===root);
const tankControl=object=>ancestor(object,o=>Number.isInteger(o.userData.hoistIndex)||Number.isInteger(o.userData.valveIndex)||o.userData.fishClue&&!Number.isInteger(o.userData.tankIndex));
const renderedTankControl=hit=>{
 const material=Array.isArray(hit.object.material)?hit.object.material[hit.face?.materialIndex??0]:hit.object.material;
 return tankControl(hit.object)&&hit.object.isMesh&&material?.colorWrite!==false&&material?.opacity!==0&&unclipped(hit);
};
// The prepared chain passes over chairs that are already clasped. Let the
// next unlinked chair remain selectable through those forgiving chair boxes.
export function preferChainChairHit(hit,hits,{chainHeld=false,links=[],canLink=()=>false}={}){
 const index=o=>o?.userData.chairSeat?2:o?.userData.rescueChair;
 const front=chair(hit?.object);if(!chainHeld||!front||!links[index(front)])return hit;
 for(const candidate of hits){
  if(!visible(candidate.object)||!unclipped(candidate))continue;
  const root=chair(candidate.object);if(!root)return hit;
  const i=index(root);if(links[i])continue;
  return canLink(i)?{...candidate,object:root}:hit;
 }
 return hit;
}
// Skip breached glass and oversized pick volumes when aiming at the next tank,
// while keeping visible winches, valves and skull clues usable with the axe held.
export function firstInteractionHit(hits,{axeHeld=false,tanks=[]}={}){
 return hits.find(hit=>{
  if(!visible(hit.object))return false;
  const tank=axeHeld&&ancestor(hit.object,o=>Number.isInteger(o.userData.tankIndex));
  return !tank||!tanks[tank.userData.tankIndex]?.broken||!!renderedTankControl(hit);
 });
}
function unclipped(hit){
 const material=Array.isArray(hit.object.material)?hit.object.material[hit.face?.materialIndex??0]:hit.object.material;
 if(material?.visible===false)return false;
 const planes=material?.clippingPlanes;if(!planes?.length)return true;
 return material.clipIntersection?!planes.every(p=>p.distanceToPoint(hit.point)<0):!planes.some(p=>p.distanceToPoint(hit.point)<0);
}

// A chair parked for rescue must not shield the tank from the equipped axe.
// Only bypass parked rescue chairs and already-broken tanks; desks, walls and
// other props still block a strike, and the ray must hit real tank geometry.
export function preferAxeTankHit(hit,hits,{axeHeld=false,tanks=[],chairs=[]}={}){
 const parked=object=>ancestor(object,o=>{
  const state=chairs[o.userData.rescueChair];
  return Number.isInteger(o.userData.rescueChair)&&state?.repaired&&Number.isInteger(state.tank);
 });
 if(!axeHeld||!parked(hit?.object))return hit;
 for(const candidate of hits){
  if(!visible(candidate.object)||!unclipped(candidate)||parked(candidate.object))continue;
  // A control visible through a parked chair keeps its ordinary action even
  // with an axe equipped, including controls attached to a breached tank.
  if(renderedTankControl(candidate))return candidate;
  const tank=ancestor(candidate.object,o=>Number.isInteger(o.userData.tankIndex));
  if(!tank)return hit;
  const state=tanks[tank.userData.tankIndex];
  if(!state||state.broken)continue;
  const material=Array.isArray(candidate.object.material)?candidate.object.material[candidate.face?.materialIndex??0]:candidate.object.material;
  if(!candidate.object.isMesh||material?.colorWrite===false||material?.opacity===0)continue;
  return {...candidate,object:tank};
 }
 return hit;
}

// Rescue chairs have forgiving hit boxes and alpha-cutout mesh backs. A click
// aimed at the revealed PM bones must still inspect those bones, rather than
// start moving the chair. Keep this exception inside the skull's own geometry.
export function preferSkullInspection(hit,hits,target,ready=false){
 if(!ready||!target?.userData.fishClue||!visible(target)||!chair(hit?.object))return hit;
 const skull=hits.find(h=>within(h.object,target)&&visible(h.object)&&unclipped(h));
 if(!skull)return hit;
 for(const other of hits){
  if(other.distance>=skull.distance)break;
  if(!visible(other.object)||!unclipped(other)||chair(other.object)||within(other.object,target))continue;
  // The PM tank was already inspectable through its glass/liquid shell.
  if(ancestor(other.object,o=>o.userData.fishClue&&Number.isInteger(o.userData.tankIndex)))continue;
  return hit; // Desks, walls and unrelated props still occlude inspection.
 }
 return {...skull,object:target};
}

// Parked chairs can cover the scattered mobile animals with their generous
// click volumes. Only an aim on the collectible's rendered geometry takes
// priority; empty space in its pickup box still belongs to the chair.
export function preferMobilePickup(hit,hits,enabled=true){
 if(!enabled||!chair(hit?.object))return hit;
 const rendered=h=>{
  const material=Array.isArray(h.object.material)?h.object.material[h.face?.materialIndex??0]:h.object.material;
  return h.object.isMesh&&visible(h.object)&&unclipped(h)&&material?.colorWrite!==false&&material?.opacity!==0;
 };
 const pickup=hits.find(h=>ancestor(h.object,o=>o.userData.mobilePiece)&&rendered(h));
 if(!pickup)return hit;
 const target=ancestor(pickup.object,o=>o.userData.mobilePiece);
 for(const other of hits){
  if(other.distance>=pickup.distance)break;
  if(!visible(other.object)||!unclipped(other)||chair(other.object)||within(other.object,target))continue;
  return hit; // Other furniture, walls and tank glass retain their occlusion.
 }
 return {...pickup,object:target};
}
