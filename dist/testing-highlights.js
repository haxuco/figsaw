import * as THREE from './vendor/three.module.js';

export function isWorldVisible(object){for(let o=object;o;o=o.parent)if(!o.visible)return false;return true;}
const renderable=m=>m.visible!==false&&m.colorWrite!==false&&m.opacity!==0;
// Exclude invisible picking volumes and hidden replacements/skeletons from bounds.
export function visibleLocalBounds(root,out=new THREE.Box3()){
 root.updateWorldMatrix(true,true);out.makeEmpty();const inverse=root.matrixWorld.clone().invert(),local=new THREE.Matrix4(),instance=new THREE.Matrix4(),combined=new THREE.Matrix4(),box=new THREE.Box3();
 function visit(o){
  if(!o.visible||o.userData.testingDecoration)return;
  if(o.isMesh&&(Array.isArray(o.material)?o.material:[o.material]).some(renderable)){
   const geometry=o.geometry;if(!geometry.boundingBox)geometry.computeBoundingBox();local.multiplyMatrices(inverse,o.matrixWorld);
   for(let i=0;i<(o.isInstancedMesh?o.count:1);i++){
    if(o.isInstancedMesh){o.getMatrixAt(i,instance);combined.multiplyMatrices(local,instance);}else combined.copy(local);
    box.copy(geometry.boundingBox).applyMatrix4(combined);out.union(box);
   }
  }
  for(const child of o.children)visit(child);
 }
 visit(root);return out;
}
const edges=[0,1,1,3,3,2,2,0,4,5,5,7,7,6,6,4,0,4,1,5,2,6,3,7];
export function createTestingHighlights({entries,maxTargets=256}){
 const group=new THREE.Group();group.name='Testing interaction highlights';group.userData.ignoreAcid=group.userData.testingDecoration=true;
 function lines(color,depthTest){
  const geometry=new THREE.BufferGeometry();geometry.setAttribute('position',new THREE.BufferAttribute(new Float32Array(maxTargets*72),3).setUsage(THREE.DynamicDrawUsage));geometry.setDrawRange(0,0);
  const object=new THREE.LineSegments(geometry,new THREE.LineBasicMaterial({color,transparent:true,opacity:depthTest?.62:.95,depthTest,depthWrite:false,toneMapped:false,fog:false}));object.frustumCulled=false;object.renderOrder=depthTest?92:94;object.raycast=()=>{};group.add(object);return object;
 }
 const interactive=lines(0xe5bc55,true),matching=lines(0x52ffe1,false),worldBox=new THREE.Box3();
 const cache=new Map(),pickPoint=new THREE.Vector3();let matchingTargets=[],lastTime=-Infinity,lastRevision=null,lastItem=null,counts={interactive:0,matching:0};
 function append(line,box,index){
  const data=line.geometry.attributes.position.array,offset=index*72;
  for(let i=0;i<edges.length;i++){const corner=edges[i],p=offset+i*3;data[p]=corner&1?box.max.x:box.min.x;data[p+1]=corner&2?box.max.y:box.min.y;data[p+2]=corner&4?box.max.z:box.min.z;}
 }
 function update(time,{enabled=true,showInteractive=true,showMatching=true,item=null,revision=0,context={}}={}){
  // Layer visibility is independent of cached bounds and diagnostic picking.
  group.visible=enabled;interactive.visible=showInteractive;matching.visible=showMatching;if(!enabled)return counts;
  if(time-lastTime<.12&&revision===lastRevision&&item===lastItem)return counts;
  lastTime=time;lastRevision=revision;lastItem=item;counts={interactive:0,matching:0};matchingTargets=[];
  for(const entry of entries){
   const object=entry.object;if(!object||!isWorldVisible(object)||entry.enabled?.(context)===false)continue;
   const signature=entry.revision?.(context)??revision;let cached=cache.get(entry);
   if(!cached||cached.signature!==signature){cached={signature,box:visibleLocalBounds(object)};cache.set(entry,cached);}
   if(cached.box.isEmpty())continue;
   object.updateWorldMatrix(true,false);worldBox.copy(cached.box).applyMatrix4(object.matrixWorld).expandByScalar(.018);
   const match=!!entry.matches?.(item,context),kind=match?'matching':'interactive',line=match?matching:interactive,index=counts[kind];
   if(match){cached.worldBox??=new THREE.Box3();cached.worldBox.copy(worldBox);matchingTargets.push({object,box:cached.worldBox});}
   if(index>=maxTargets)continue;append(line,worldBox,index);counts[kind]++;
  }
  for(const [line,kind]of[[interactive,'interactive'],[matching,'matching']]){line.geometry.setDrawRange(0,counts[kind]*24);line.geometry.attributes.position.needsUpdate=true;}
  return counts;
 }
 return{group,update,pickMatching(raycaster){
  if(!group.visible)return null;let chosen=null,distance=Infinity;
  for(const target of matchingTargets){if(!isWorldVisible(target.object))continue;const point=raycaster.ray.intersectBox(target.box,pickPoint);if(!point)continue;const d=point.distanceToSquared(raycaster.ray.origin);if(d<distance){chosen=target.object;distance=d;}}
  return chosen?{object:chosen}:null;
 },get counts(){return counts;}};
}

export function createTestingModeUI(){
 // Testing belongs to the session-only diagnostics menu. Old URL/storage flags
 // must never turn on highlights during an ordinary game.
 let enabled=false,messageUntil=0;
 const root=document.createElement('div');root.id='testing-tools';root.hidden=true;root.innerHTML='<button type="button" aria-pressed="false"></button><div class="testing-legend"><label><input type="checkbox" data-interactive checked><span>●</span> Interactive wireframes</label><label><input type="checkbox" data-matching checked><b>●</b> Matching target wireframes</label></div><p role="status" aria-live="polite"></p>';
 const button=root.querySelector('button'),legend=root.querySelector('.testing-legend'),status=root.querySelector('p'),interactive=root.querySelector('[data-interactive]'),matching=root.querySelector('[data-matching]');
 function sync(){button.textContent=`Testing: ${enabled?'on':'off'}`;button.setAttribute('aria-pressed',String(enabled));legend.hidden=!enabled;status.hidden=!enabled;}
 button.onclick=()=>{enabled=!enabled;sync();};sync();
 return{element:root,get enabled(){return enabled;},get showInteractive(){return interactive.checked;},get showMatching(){return matching.checked;},setEnabled(value){enabled=!!value;sync();},report(message){if(enabled&&message){status.textContent=message;messageUntil=performance.now()+5000;}},update({hidden=false,itemName='',matches=0}={}){root.hidden=hidden;if(performance.now()>messageUntil){const text=enabled&&itemName?`${itemName} · ${matches} matching target${matches===1?'':'s'}`:'';if(status.textContent!==text)status.textContent=text;}}};
}
