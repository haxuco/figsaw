import * as THREE from './vendor/three.module.js';

export const CHAIR_RADIUS=.46,CHAIR_GAP=.05;
const roomBounds={minX:-3.40,maxX:3.40,minZ:-3.50,maxZ:3.95};
const distance=(a,b)=>Math.hypot(b.x-a.x,b.z-a.z);

// Plan once per move. Inflating the obstacles keeps the whole chair clear,
// including when its swivel frame rotates between the start and parking poses.
export function createChairRoute(from,to,obstacles,{padding=CHAIR_RADIUS+CHAIR_GAP,bounds=roomBounds}={}){
 const circles=obstacles.map(o=>({...o,radius:o.radius+padding}));
 const inside=p=>Number.isFinite(p.x)&&Number.isFinite(p.z)&&p.x>=bounds.minX&&p.x<=bounds.maxX&&p.z>=bounds.minZ&&p.z<=bounds.maxZ;
 const free=p=>inside(p)&&circles.every(c=>distance(p,c)>=c.radius-1e-7);
 function clear(a,b){
  const dx=b.x-a.x,dz=b.z-a.z,length=dx*dx+dz*dz;
  return circles.every(c=>{
   const t=length?THREE.MathUtils.clamp(((c.x-a.x)*dx+(c.z-a.z)*dz)/length,0,1):0;
   return Math.hypot(a.x+dx*t-c.x,a.z+dz*t-c.z)>=c.radius-1e-7;
  });
 }
 if(!free(from)||!free(to))return null;
 const start=from.clone(),goal=to.clone();let points=[start,goal];
 if(!clear(from,to)){
  const nodes=[...points],sides=20;
  for(const c of circles){
   // Circumscribed waypoints keep the straight chords outside each obstacle.
   const radius=(c.radius+.012)/Math.cos(Math.PI/sides);
   for(let i=0;i<sides;i++){
    const angle=i/sides*Math.PI*2,p=new THREE.Vector3(c.x+Math.cos(angle)*radius,from.y,c.z+Math.sin(angle)*radius);
    if(free(p))nodes.push(p);
   }
  }
  const costs=nodes.map(()=>Infinity),previous=nodes.map(()=>-1),visited=new Set();costs[0]=0;
  for(let step=0;step<nodes.length;step++){
   let current=-1;
   for(let i=0;i<nodes.length;i++)if(!visited.has(i)&&(current<0||costs[i]<costs[current]))current=i;
   if(current<0||!Number.isFinite(costs[current]))return null;
   if(current===1)break;
   visited.add(current);
   for(let next=0;next<nodes.length;next++){
    if(visited.has(next))continue;
    const cost=costs[current]+distance(nodes[current],nodes[next]);
    if(cost<costs[next]&&clear(nodes[current],nodes[next])){costs[next]=cost;previous[next]=current;}
   }
  }
  if(previous[1]<0)return null;
  points=[];for(let i=1;i!==-1;i=previous[i])points.unshift(nodes[i]);
 }
 const lengths=points.slice(1).map((p,i)=>distance(points[i],p)),length=lengths.reduce((sum,n)=>sum+n,0);
 return {length,getPoint(fraction,out){
  if(fraction<=0)return out.copy(start);if(fraction>=1)return out.copy(goal);
  let remaining=THREE.MathUtils.clamp(fraction,0,1)*length;
  for(let i=0;i<lengths.length;i++){
   if(remaining<=lengths[i]||i===lengths.length-1)return out.lerpVectors(points[i],points[i+1],lengths[i]?remaining/lengths[i]:1);
   remaining-=lengths[i];
  }
  return out.copy(goal);
 }};
}
