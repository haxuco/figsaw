import * as THREE from './vendor/three.module.js';

export function createSceneRaycaster(){
 const ray=new THREE.Raycaster();
 // The default one-metre line radius makes thin table outlines intercept
 // clicks and visibility checks on objects clearly visible beside them.
 ray.params.Line.threshold=.008;
 return ray;
}

const ancestor=(object,predicate)=>{for(let o=object;o;o=o.parent)if(predicate(o))return o;return null;};
const visible=object=>!ancestor(object,o=>!o.visible);
const chair=object=>ancestor(object,o=>Number.isInteger(o.userData.rescueChair)||o.userData.chairSeat);
const within=(object,root)=>!!ancestor(object,o=>o===root);
function unclipped(hit){
 const material=Array.isArray(hit.object.material)?hit.object.material[hit.face?.materialIndex??0]:hit.object.material;
 if(material?.visible===false)return false;
 const planes=material?.clippingPlanes;if(!planes?.length)return true;
 return material.clipIntersection?!planes.every(p=>p.distanceToPoint(hit.point)<0):!planes.some(p=>p.distanceToPoint(hit.point)<0);
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
