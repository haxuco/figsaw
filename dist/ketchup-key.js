import * as THREE from './vendor/three.module.js';
import {createKetchupKeyState} from './ketchup-key-state.js';

export function createKetchupKey({bottle,contents,cap,floorSupport}){
 const group=new THREE.Group();group.name='Ketchup spill and hidden shackle key';
 const state=createKetchupKeyState(),home=bottle.position.clone(),homeRotation=bottle.quaternion.clone();
 bottle.userData.keyAction='pour';
 const direction=new THREE.Vector3(0,1,0).applyQuaternion(homeRotation);
 const pourRotation=new THREE.Quaternion().setFromUnitVectors(direction,new THREE.Vector3(-.25,-.94,.23).normalize()).multiply(homeRotation);
 const raised=home.clone().add(new THREE.Vector3(.72,.32,.38));
 const landing=raised.clone().add(new THREE.Vector3(-.045,0,.045));landing.y=floorSupport(landing.x,landing.z)+.009;
 const capHome=cap.position.clone(),capRotation=cap.quaternion.clone();cap.updateWorldMatrix(true,false);
 const capStart=cap.getWorldPosition(new THREE.Vector3()),capWorldRotation=cap.getWorldQuaternion(new THREE.Quaternion());
 const capEnd=capStart.clone().add(new THREE.Vector3(-.13,0,.10));capEnd.y=floorSupport(capEnd.x,capEnd.z)+.016;
 const brass=new THREE.MeshStandardMaterial({color:0xd0a951,metalness:.72,roughness:.27,emissive:0x6d4815,emissiveIntensity:.18});
 const key=new THREE.Group();key.name='Brass shackle key';key.userData.keyAction='collect';group.add(key);key.visible=false;
 function mesh(geo,mat,parent){const m=new THREE.Mesh(geo,mat);m.castShadow=true;m.receiveShadow=true;parent.add(m);return m;}
 const bow=mesh(new THREE.TorusGeometry(.025,.0055,8,24),brass,key);bow.rotation.x=Math.PI/2;bow.position.x=-.042;
 const shaft=mesh(new THREE.BoxGeometry(.078,.009,.010),brass,key);shaft.position.x=.013;
 for(const x of[.027,.047]){const tooth=mesh(new THREE.BoxGeometry(.010,.009,.022),brass,key);tooth.position.set(x,0,.010);}
 const keyPick=mesh(new THREE.BoxGeometry(.15,.04,.10),new THREE.MeshBasicMaterial({transparent:true,opacity:0,depthWrite:false,colorWrite:false}),key);keyPick.castShadow=false;keyPick.receiveShadow=false;
 const sauce=new THREE.MeshPhysicalMaterial({color:0xb7210c,roughness:.28,clearcoat:1,clearcoatRoughness:.18});
 const spill=new THREE.Group();spill.position.copy(landing);spill.position.y-=.006;group.add(spill);spill.visible=false;
 const outline=new THREE.Shape();
 for(let i=0;i<=64;i++){const a=i/64*Math.PI*2,r=1+.10*Math.sin(a*5)+.07*Math.cos(a*9);const x=Math.cos(a)*.20*r,z=Math.sin(a)*.13*r;if(i===0)outline.moveTo(x,z);else outline.lineTo(x,z);}
 const puddle=mesh(new THREE.ShapeGeometry(outline,32),sauce,spill);puddle.rotation.x=-Math.PI/2;puddle.castShadow=false;
 const globs=[];
 for(let i=0;i<7;i++){const a=i*2.4,r=.05+i*.016,m=mesh(new THREE.SphereGeometry(1,12,8),sauce,spill);m.position.set(Math.cos(a)*r,.003,Math.sin(a)*r*.6);m.scale.set(.015+i%3*.005,.004,.012);globs.push(m);}
 const stream=mesh(new THREE.CylinderGeometry(1,1,1,10),sauce,group);stream.visible=false;stream.castShadow=false;
 const spout=new THREE.Vector3(),mid=new THREE.Vector3(),flowDirection=new THREE.Vector3(),up=new THREE.Vector3(0,1,0);
 const smooth=(v)=>{const x=THREE.MathUtils.clamp(v,0,1);return x*x*(3-2*x);};
 let capDetached=false;
 function reset(){
  state.reset();bottle.position.copy(home);bottle.quaternion.copy(homeRotation);contents.scale.y=1;
  bottle.children[0].add(cap);cap.position.copy(capHome);cap.quaternion.copy(capRotation);cap.scale.setScalar(1);capDetached=false;
  key.visible=false;spill.visible=false;stream.visible=false;
 }
 function update(time,reducedMotion){
  state.update(time);if(state.phase==='sealed')return;
  const t=time-state.startedAt,tilt=smooth(t/.8)*(1-smooth((t-3.35)/.8));
  bottle.position.copy(home).lerp(raised,tilt);bottle.quaternion.copy(homeRotation).slerp(pourRotation,tilt);
  if(!capDetached){group.attach(cap);capDetached=true;}
  cap.position.copy(capStart).lerp(capEnd,smooth(t/.55));cap.position.y+=Math.sin(Math.min(1,t/.55)*Math.PI)*.08;
  cap.quaternion.copy(capWorldRotation).multiply(new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0,0,1),smooth(t/.55)*2));
  const drain=smooth((t-.75)/2.5);contents.scale.y=Math.max(.025,1-drain);
  spill.visible=t>.75;spill.scale.setScalar(Math.max(.01,drain));
  bottle.updateWorldMatrix(true,true);bottle.children[0].localToWorld(spout.set(0,.469,0));
  stream.visible=t>.8&&t<3.3;
  if(stream.visible){mid.copy(spout).add(landing).multiplyScalar(.5);flowDirection.subVectors(spout,landing);stream.position.copy(mid);stream.quaternion.setFromUnitVectors(up,flowDirection.clone().normalize());const pulse=reducedMotion?1:1+Math.sin(t*21)*.12;stream.scale.set(.012*pulse,flowDirection.length(),.012*pulse);}
  key.visible=t>=2.5&&!state.hasKey;
  if(key.visible){const fall=smooth((t-2.5)/.9);key.position.copy(spout).lerp(landing,fall);key.position.y+=Math.sin(fall*Math.PI)*.065;key.rotation.set((1-fall)*2,fall*.50,(1-fall)*3);brass.emissiveIntensity=reducedMotion?.22:.22+.10*Math.sin(time*3);}
 }
 return {group,bottle,key,update,reset,get hasKey(){return state.hasKey;},get phase(){return state.phase;},
  pour:time=>state.pour(time),collect:()=>state.collect(),
  hint(action){if(action==='collect'&&!state.hasKey)return state.phase==='revealed'?'Pick up the shackle key':'A key is sliding out…';if(action==='pour')return state.phase==='sealed'?'Pour out the ketchup':state.phase==='pouring'?'Pouring ketchup…':state.hasKey?'The bottle is empty':'Pick up the key in the ketchup';return '';}
 };
}
