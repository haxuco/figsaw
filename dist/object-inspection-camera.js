import * as THREE from './vendor/three.module.js';
const wrap=a=>THREE.MathUtils.euclideanModulo(a+Math.PI,Math.PI*2)-Math.PI;

// Inspect existing scene geometry. The saved player position is separate from
// the moving inspection camera, so zooming cannot dodge floor hazards.
export function createObjectInspectionCamera({position,state,aspect=()=>1,baseFov=62}){
 const center=new THREE.Vector3(),normal=new THREE.Vector3(),right=new THREE.Vector3(),up=new THREE.Vector3(),eye=new THREE.Vector3(),aim=new THREE.Vector3(),direction=new THREE.Vector3();
 let saved=null,target=null,frame=null,move=null,panX=0,panY=0,zoom=1;
 const capture=()=>({position:position.clone(),yaw:state.yaw,pitch:state.pitch,zoom:state.zoom});
 const apply=p=>{position.copy(p.position);Object.assign(state,{yaw:p.yaw,pitch:p.pitch,zoom:p.zoom});};
 function frameTarget(object){
  if(object.userData.inspectionFrame)return object.userData.inspectionFrame;
  object.geometry.computeBoundingBox();const box=object.geometry.boundingBox,size=box.getSize(new THREE.Vector3());
  return {center:box.getCenter(new THREE.Vector3()).toArray(),width:size.x,height:size.y};
 }
 function pose(){
  target.updateWorldMatrix(true,false);const m=target.matrixWorld;
  center.fromArray(frame.center||[0,0,0]).applyMatrix4(m);normal.set(0,0,1).transformDirection(m);
  // A tiny tilt avoids the undefined yaw of looking exactly down at floor notes.
  if(Math.abs(normal.y)>.98)normal.z+=.16;normal.normalize();
  right.crossVectors(new THREE.Vector3(0,1,0),normal).normalize();up.crossVectors(normal,right).normalize();
  const scale=new THREE.Vector3().setFromMatrixScale(m),width=frame.width*scale.x,height=frame.height*scale.y;
  const fit=Math.max(height,width/Math.max(.3,aspect()))/ .76;
  const distance=Math.max(frame.distance||.42,Math.min(1.1,fit/(2*Math.tan(Math.PI/8))));
  eye.copy(center).addScaledVector(normal,distance);eye.y=Math.max(.16,eye.y);
  if(frame.lift)eye.y+=frame.lift;
  aim.copy(center).addScaledVector(right,panX*width).addScaledVector(up,panY*height);
  direction.subVectors(aim,eye).normalize();
  const fov=THREE.MathUtils.clamp(THREE.MathUtils.radToDeg(2*Math.atan(fit*zoom/(2*distance))),8,100);
  return {position:eye,yaw:Math.atan2(-direction.x,-direction.z),pitch:Math.asin(direction.y),zoom:fov/baseFov};
 }
 function show(object,time){if(!saved)saved=capture();target=object;frame=frameTarget(object);panX=panY=0;zoom=1;move={kind:'in',time,from:capture()};}
 function restore(time,immediate=false){if(!saved)return;if(immediate){apply(saved);saved=target=frame=move=null;}else move={kind:'out',time,from:capture()};}
 function update(time,reducedMotion=false){
  if(!saved)return;
  const to=move?.kind==='out'?saved:pose();
  if(!move){apply(to);return;}
  const t=reducedMotion?1:THREE.MathUtils.smootherstep(time-move.time,0,.85),from=move.from;
  position.lerpVectors(from.position,to.position,t);state.yaw=wrap(from.yaw+wrap(to.yaw-from.yaw)*t);state.pitch=THREE.MathUtils.lerp(from.pitch,to.pitch,t);state.zoom=THREE.MathUtils.lerp(from.zoom,to.zoom,t);
  if(t===1){apply(to);if(move.kind==='out')saved=target=frame=null;move=null;}
 }
 return {show,restore,update,drag(dx,dy){if(!saved||move)return;panX=THREE.MathUtils.clamp(panX-dx*.0015*zoom,-.48,.48);panY=THREE.MathUtils.clamp(panY+dy*.0015*zoom,-.48,.48);},setZoom(value){if(saved&&move?.kind!=='out')zoom=THREE.MathUtils.clamp(value,.22,1.5);},get zoom(){return zoom;},get active(){return !!saved;},get returning(){return move?.kind==='out';},get origin(){return saved?.position||position;},get target(){return target;}};
}
