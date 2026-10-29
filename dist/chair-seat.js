import * as THREE from './vendor/three.module.js';

const wrap=angle=>THREE.MathUtils.euclideanModulo(angle+Math.PI,Math.PI*2)-Math.PI;

// Sitting is physical game state, independent of temporary inspection cameras.
// Merely lifting/zooming the camera never grants protection from the acid.
export function createChairSeat({position,state,getView}){
 let phase='floor',move=null,saved=null,progress=0;
 const eye=new THREE.Vector3(),target=new THREE.Vector3(),direction=new THREE.Vector3(),body=new THREE.Vector3();
 const capture=()=>({position:position.clone(),yaw:state.yaw,pitch:state.pitch,zoom:state.zoom});
 function sit(time,{locked=false,dying=false}={}){
  if(locked||dying||phase!=='floor')return false;
  saved=capture();getView(eye,target);direction.subVectors(target,eye).normalize();
  move={time,from:saved,to:{position:eye.clone(),yaw:Math.atan2(-direction.x,-direction.z),pitch:Math.asin(direction.y),zoom:1}};
  body.copy(position);phase='sitting';progress=0;return true;
 }
 function leave(time){
  if(phase!=='seated')return false;
  move={time,from:capture(),to:saved};phase='leaving';progress=0;return true;
 }
 function update(time,reducedMotion=false){
  if(!move)return;
  progress=reducedMotion?1:THREE.MathUtils.smootherstep(time-move.time,0,1.1);
  const {from,to}=move;
  position.lerpVectors(from.position,to.position,progress);
  // Lift the body before crossing the floor, and lower it last on the way back.
  const rise=phase==='sitting'?Math.min(1,progress*2):Math.max(0,progress*2-1);
  position.y=THREE.MathUtils.lerp(from.position.y,to.position.y,rise);
  body.copy(position);
  state.yaw=wrap(from.yaw+wrap(to.yaw-from.yaw)*progress);
  state.pitch=THREE.MathUtils.lerp(from.pitch,to.pitch,progress);
  state.zoom=THREE.MathUtils.lerp(from.zoom,to.zoom,progress);
  if(progress===1){phase=phase==='sitting'?'seated':'floor';move=null;if(phase==='floor')saved=null;}
 }
 return {sit,leave,update,translate(delta){if(phase!=='seated')return;position.add(delta);body.add(delta);if(saved)saved.position.add(delta);},reset(){phase='floor';move=saved=null;progress=0;},
  get occupied(){return phase!=='floor';},get seated(){return phase==='seated';},get moving(){return move!==null;},
  get hazardPosition(){return phase==='floor'?position:body;},
  get protectedFromAcid(){return phase==='seated'||phase==='sitting'&&progress>=.35||phase==='leaving'&&progress<.65;}
 };
}
