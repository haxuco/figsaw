import * as THREE from './vendor/three.module.js';
import {createChairRoute,CHAIR_RADIUS} from './chair-route.js';

export const EXIT_STAGING=[new THREE.Vector3(-.25,0,2.43),new THREE.Vector3(.70,0,1.20),new THREE.Vector3(-1.20,0,3.65)];
// Move the lead chair first, then take up each length of chain. Stationary
// chairs remain obstacles while the next chair is rolling into the aisle.
export function planChairTow(chairs,tankObstacles,{exit=false}={}){
 const positions=chairs.map(o=>o.position.clone()),order=[2,...[0,1].sort((i,j)=>positions[j].z-positions[i].z)],moves=[];
 for(let sequence=0;sequence<order.length;sequence++){
  const index=order[sequence],from=positions[index],to=exit?new THREE.Vector3(-1.20,0,8.10-sequence*1.16):EXIT_STAGING[sequence===0?2:sequence-1].clone();
  const obstacles=[...tankObstacles,...positions.flatMap((p,i)=>i===index?[]:[{x:p.x,z:p.z,radius:CHAIR_RADIUS}])];
  const options=exit?{bounds:{minX:-3.40,maxX:3.40,minZ:-3.50,maxZ:8.30}}:{};
  // Before crossing the wall, every chair must enter the narrow door centrally.
  let route;
  if(exit&&sequence>0){
   const threshold=new THREE.Vector3(-1.20,0,3.65),first=createChairRoute(from,threshold,obstacles,options),second=createChairRoute(threshold,to,obstacles,options);
   if(!first||!second)return null;
   const length=first.length+second.length;
   route={length,getPoint(u,out){const distance=u*length;return distance<=first.length?first.getPoint(distance/first.length,out):second.getPoint((distance-first.length)/second.length,out);}};
  }else route=createChairRoute(from,to,obstacles,options);
  if(!route)return null;
  moves.push({index,route,duration:Math.max(.8,route.length/(exit?1.35:1.0)),to});positions[index]=to;
 }
 return moves;
}

export function createChairTow({chairs,state,tankObstacles,floorSupport}){
 let moves=[],current=0,started=null,rotation=null;
 const point=new THREE.Vector3(),ahead=new THREE.Vector3(),up=new THREE.Vector3(0,1,0),q=new THREE.Quaternion();
 function start(time,exit=false){
  if(started!==null)return false;
  const plan=planChairTow(chairs,tankObstacles,{exit});if(!plan)return false;
  if(!(exit?state.beginExit():state.beginTow()))return false;
  moves=plan;current=0;started=time;rotation=chairs[moves[0].index].quaternion.clone();return true;
 }
 function update(time,reducedMotion=false){
  if(started===null)return;
  while(current<moves.length){
   const m=moves[current],age=Math.max(0,time-started),u=reducedMotion?1:Math.min(1,age/m.duration),chair=chairs[m.index];
   m.route.getPoint(u,point);point.y=floorSupport(point.x,point.z);chair.position.copy(point);
   m.route.getPoint(Math.max(0,u-.02),ahead);const dx=point.x-ahead.x,dz=point.z-ahead.z;
   if(Math.hypot(dx,dz)>.001){q.setFromAxisAngle(up,Math.atan2(dx,dz));chair.quaternion.slerpQuaternions(rotation,q,Math.min(1,age*2));}
   if(u<1)return;
   started+=m.duration;current++;
   if(current<moves.length)rotation=chairs[moves[current].index].quaternion.clone();
  }
  started=null;state.towPhase==='exiting'?state.finishExit():state.finishTow();
 }
 return {start,update,pause(dt){if(started!==null)started+=Math.max(0,dt);},reset(){moves=[];started=rotation=null;current=0;},get active(){return started!==null;}};
}
