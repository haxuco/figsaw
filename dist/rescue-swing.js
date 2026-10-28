import * as THREE from './vendor/three.module.js';

export const RESCUE_HEIGHT=.66;
export const CHAIR_PASSENGER_HEIGHT=.72;
export const RESCUE_SWING_SECONDS=3.4;

// Tank-local route: stay above the acid and below the upper rim until the
// whole body has cleared the broken front pane, then settle onto the seat.
export function createRescueSwingPath(from,to){
 return new THREE.CatmullRomCurve3([
  from.clone(),new THREE.Vector3(0,RESCUE_HEIGHT,.28),
  new THREE.Vector3(0,RESCUE_HEIGHT+.018,.59),
  new THREE.Vector3(to.x,.81,to.z-.07),to.clone()
 ],false,'centripetal');
}
