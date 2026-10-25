import * as THREE from './vendor/three.module.js';
import {createChargingState} from './charging-state.js';
import {createChargerCableGeometry} from './charger-cable.js';

export function createChargingKit({filing,laptop,floorSupport,drawerMaterial}){
 const group=new THREE.Group();group.name='Interactive MacBook charging kit';
 const rearBounce=new THREE.PointLight(0xa4b4a5,1.5,2.8,2);rearBounce.position.set(1.55,1.25,3.25);group.add(rearBounce);
 const state=createChargingState(),ivory=new THREE.MeshStandardMaterial({color:0xd9d4c4,roughness:.51}),white=new THREE.MeshStandardMaterial({color:0xe6e3d9,roughness:.42}),rubber=new THREE.MeshStandardMaterial({color:0x252821,roughness:.88}),metal=new THREE.MeshStandardMaterial({color:0x8a9595,roughness:.4,metalness:.7});
 const amber=new THREE.MeshBasicMaterial({color:0xffb335}),green=new THREE.MeshBasicMaterial({color:0x8fc788});
 function mesh(geometry,material,parent=group){const m=new THREE.Mesh(geometry,material);m.castShadow=true;m.receiveShadow=true;parent.add(m);return m;}
 function box(size,pos,material,parent){const m=mesh(new THREE.BoxGeometry(...size),material,parent);m.position.set(...pos);return m;}
 function rounded(size,pos,material,parent){
  const [w,h,d]=size,r=Math.min(.012,h*.24),s=new THREE.Shape(),x=w/2,y=h/2;
  s.moveTo(-x+r,-y);s.lineTo(x-r,-y);s.quadraticCurveTo(x,-y,x,-y+r);s.lineTo(x,y-r);s.quadraticCurveTo(x,y,x-r,y);s.lineTo(-x+r,y);s.quadraticCurveTo(-x,y,-x,y-r);s.lineTo(-x,-y+r);s.quadraticCurveTo(-x,-y,-x+r,-y);
  const b=Math.min(.004,d/6),g=new THREE.ExtrudeGeometry(s,{depth:d-2*b,bevelEnabled:true,bevelSize:b,bevelThickness:b,bevelSegments:2,curveSegments:5});g.translate(0,0,-d/2+b);const m=mesh(g,material,parent);m.position.set(...pos);return m;
 }
 function tube(points,r,material,parent=group){return mesh(new THREE.TubeGeometry(new THREE.CatmullRomCurve3(points.map(p=>p.isVector3?p:new THREE.Vector3(...p))),48,r,7,false),material,parent);}
 function label(text,w,h,pos,parent){
  const c=document.createElement('canvas');c.width=512;c.height=128;const ctx=c.getContext('2d');ctx.fillStyle='#c4c4b6';ctx.fillRect(0,0,512,128);ctx.fillStyle='#353b35';ctx.font='600 58px Arial';ctx.textAlign='center';ctx.fillText(text,256,85,480);
  const map=new THREE.CanvasTexture(c);map.colorSpace=THREE.SRGBColorSpace;const m=mesh(new THREE.PlaneGeometry(w,h),new THREE.MeshStandardMaterial({map,roughness:.9}),parent);m.position.set(...pos);return m;
 }
 const drawer=new THREE.Group();drawer.name='Rear drawer containing the MacBook charger';drawer.userData.chargingAction='drawer';drawer.position.set(-.38,.56,0);filing.add(drawer);
 box([.71,.32,.025],[0,0,.231],drawerMaterial,drawer);
 rounded([.22,.022,.028],[0,.04,.264],metal,drawer);
 label('CHARGERS',.20,.047,[0,-.065,.246],drawer);
 box([.66,.018,.36],[0,-.145,.025],drawerMaterial,drawer);
 for(const x of[-.33,.33])box([.015,.27,.36],[x,-.01,.025],drawerMaterial,drawer);
 box([.66,.27,.015],[0,-.01,-.155],drawerMaterial,drawer);
 for(const x of[-.348,.348])box([.013,.027,.43],[x,-.08,.015],metal,drawer);
 const brick=new THREE.Group();brick.name='MacBook USB-C power adapter';brick.userData.chargingAction='charger';drawer.add(brick);brick.position.set(.105,-.097,.045);
 rounded([.145,.075,.145],[0,0,0],white,brick);
 box([.147,.001,.147],[0,-.009,0],ivory,brick);
 for(const x of[-.016,.016])box([.005,.025,.015],[x,-.049,0],metal,brick);
 box([.003,.015,.027],[.074,.006,0],rubber,brick);
 const adapterPlug=new THREE.Group();adapterPlug.visible=false;brick.add(adapterPlug);
 rounded([.032,.016,.022],[.095,.006,0],white,adapterPlug);
 const adapterSleeve=mesh(new THREE.CylinderGeometry(.0048,.007,.024,12),ivory,adapterPlug);adapterSleeve.rotation.z=-Math.PI/2;adapterSleeve.position.set(.121,.006,0);
 const adapterExit=new THREE.Object3D();adapterExit.name='Adapter cable exit';adapterExit.position.set(.133,.006,0);brick.add(adapterExit);
 const adapterText=label('96W USB-C',.086,.022,[0,.009,.075],brick);adapterText.material.color.setHex(0x999b92);
 const coil=new THREE.Group();coil.name='Coiled charger cable';coil.userData.chargingAction='charger';drawer.add(coil);coil.position.set(-.145,-.127,.06);
 const coiled=[];for(let i=0;i<=120;i++){const a=i/120*Math.PI*6;coiled.push([Math.cos(a)*(.086+i*.00012),i*.000045,Math.sin(a)*.060]);}
 tube(coiled,.0045,white,coil);rounded([.041,.014,.019],[.12,.01,0],white,coil);box([.014,.009,.014],[.145,.01,0],metal,coil);
 const strip=new THREE.Group();strip.name='Powered floor power strip';strip.userData.chargingAction='strip';strip.position.set(1.94,floorSupport(1.94,3.72)+.032,3.72);strip.rotation.y=-.16;group.add(strip);
 rounded([.51,.055,.12],[0,0,0],ivory,strip);
 for(const x of[-.16,-.055,.05,.155]){
  box([.079,.001,.082],[x,.029,0],white,strip);
  for(const z of[-.020,.020])box([.021,.002,.006],[x-.009,.031,z],rubber,strip);
  const hole=mesh(new THREE.CircleGeometry(.007,12),rubber,strip);hole.rotation.x=-Math.PI/2;hole.position.set(x+.022,.031,0);
 }
 const rocker=rounded([.035,.011,.057],[.224,.032,0],new THREE.MeshStandardMaterial({color:0x9d392a,roughness:.4}),strip);rocker.rotation.z=.07;
 box([.008,.002,.020],[.224,.039,0],green,strip);
 // The strip has a real lead running to a wall socket behind the viewer.
 const outlet=rounded([.12,.16,.018],[2.15,.27,4.424],ivory,group);
 for(const y of[.235,.30]){box([.065,.042,.006],[2.15,y,4.411],white,group);for(const x of[2.136,2.164])box([.005,.016,.003],[x,y+.004,4.406],rubber,group);}
 rounded([.054,.043,.055],[2.15,.30,4.383],rubber,group);
 const stripEnd=strip.localToWorld(new THREE.Vector3(-.265,0,0));
 tube([stripEnd,[1.57,.018,3.80],[1.61,.015,4.04],[1.98,.015,4.25],[2.16,.07,4.34],[2.15,.30,4.35]],.007,rubber).raycast=()=>{};
 const port=new THREE.Group();port.name='MacBook charging port';port.userData.chargingAction='laptop';port.position.set(-.446,.002,-.18);laptop.object.add(port);
 box([.005,.010,.035],[0,0,0],rubber,port);
 const portPick=mesh(new THREE.BoxGeometry(.045,.048,.085),new THREE.MeshBasicMaterial({transparent:true,opacity:0,colorWrite:false,depthWrite:false}),port);portPick.castShadow=false;
 const connector=new THREE.Group();connector.name='Connected MacBook charging cable';connector.visible=false;group.add(connector);
 rounded([.048,.018,.026],[0,0,0],white,connector);box([.014,.008,.022],[.030,0,0],metal,connector);
 const sleeve=mesh(new THREE.CylinderGeometry(.0048,.008,.032,12),ivory,connector);sleeve.rotation.z=Math.PI/2;sleeve.position.x=-.041;
 const connectorExit=new THREE.Object3D();connectorExit.name='Laptop cable exit';connectorExit.position.x=-.057;connector.add(connectorExit);
 const led=box([.010,.003,.007],[.005,.011,0],amber,connector);led.castShadow=false;
 const batteryCanvas=document.createElement('canvas');batteryCanvas.width=512;batteryCanvas.height=96;const batteryPaint=batteryCanvas.getContext('2d'),batteryMap=new THREE.CanvasTexture(batteryCanvas);batteryMap.colorSpace=THREE.SRGBColorSpace;
 const batteryOverlay=mesh(new THREE.PlaneGeometry(.245,.046),new THREE.MeshBasicMaterial({map:batteryMap}),laptop.screen);batteryOverlay.name='MacBook battery charge readout';batteryOverlay.position.set(.282,.235,.001);batteryOverlay.visible=false;batteryOverlay.castShadow=false;
 let drawerProgress=0,plugStarted=-Infinity,connectStarted=-Infinity,wire=null,lastWireProgress=-1,lastBatteryLabel='',lastTime=null;
 const point=new THREE.Vector3(),plugTarget=new THREE.Vector3();
 function updateWire(progress){
  const geometry=wire?.geometry;
  const next=createChargerCableGeometry({adapterExit,connectorExit,laptop:laptop.object,floorSupport});
  if(!wire){wire=mesh(next,white);wire.name='Charging cable resting across the floor';wire.raycast=()=>{};}else{wire.geometry=next;geometry.dispose();}
  lastWireProgress=progress;
 }
 function use(action,time,locked=false){
  const before=state.phase,message=state.use(action,locked);
  if(locked)return message;
  if(before==='drawer'&&state.phase==='carrying'){brick.visible=false;coil.visible=false;}
  if(before==='carrying'&&state.phase==='powered'){
   strip.add(brick);brick.visible=true;brick.rotation.set(0,0,0);brick.position.set(-.16,.075,0);plugStarted=time;
   group.add(coil);coil.visible=true;coil.rotation.set(0,.4,0);coil.position.set(1.70,floorSupport(1.70,3.42)+.008,3.42);
  }
  if(before==='powered'&&state.phase==='charging'){connectStarted=time;connector.visible=true;adapterPlug.visible=true;coil.visible=false;}
  return message;
 }
 function update(time,reducedMotion=false){
  const dt=lastTime===null?0:Math.max(0,Math.min(.05,time-lastTime));lastTime=time;state.update(dt);
  const target=state.drawerOpen?1:0;drawerProgress=reducedMotion?target:THREE.MathUtils.damp(drawerProgress,target,8,dt);drawer.position.z=drawerProgress*.43;
  if(state.phase==='powered'||state.phase==='charging')brick.position.y=.075+(reducedMotion?0:.19*(1-THREE.MathUtils.smootherstep(time-plugStarted,0,.65)));
  if(state.phase==='charging'){
   const progress=reducedMotion?1:THREE.MathUtils.smootherstep(time-connectStarted,0,.65);
   port.getWorldPosition(plugTarget);connector.quaternion.copy(laptop.object.getWorldQuaternion(new THREE.Quaternion()));
   point.set(-.032-(1-progress)*.12,(1-progress)*.028,0).applyQuaternion(connector.quaternion);connector.position.copy(plugTarget).add(point);
   if(Math.abs(progress-lastWireProgress)>.02||progress===1&&lastWireProgress!==1)updateWire(progress);
   led.material=state.battery>=100?green:amber;
  }
  batteryOverlay.visible=laptop.openProgress>.35;
  const level=Math.floor(state.battery),charging=state.phase==='charging',text=`${charging?'⚡ ':''}${level}%`;
  if(text!==lastBatteryLabel){
   lastBatteryLabel=text;batteryPaint.fillStyle='#222e36';batteryPaint.fillRect(0,0,512,96);batteryPaint.fillStyle=charging?'#93dba3':'#e3b36d';batteryPaint.font='500 44px Arial';batteryPaint.textAlign='right';batteryPaint.fillText(text,385,63);
   batteryPaint.strokeStyle=charging?'#93dba3':'#e3b36d';batteryPaint.lineWidth=5;batteryPaint.strokeRect(405,25,72,44);batteryPaint.fillRect(480,37,7,19);batteryPaint.fillRect(413,33,56*level/100,28);batteryMap.needsUpdate=true;
  }
 }
 function reset(){state.reset();drawerProgress=0;drawer.position.z=0;drawer.add(brick,coil);brick.visible=coil.visible=true;brick.position.set(.105,-.097,.045);brick.rotation.set(0,0,0);coil.position.set(-.145,-.127,.06);coil.rotation.set(0,0,0);connector.visible=false;adapterPlug.visible=false;if(wire){group.remove(wire);wire.geometry.dispose();wire=null;}lastWireProgress=-1;lastBatteryLabel='';lastTime=null;}
 function hint(action){
  if(action==='drawer')return state.drawerOpen?'Close charger drawer':'Open charger drawer';
  if(action==='charger')return 'Take MacBook charger + cable';
  if(action==='strip')return state.phase==='carrying'?'Plug charger into power strip':'Powered power strip';
  if(action==='laptop')return state.phase==='powered'?'Connect charger to MacBook':`MacBook battery · ${Math.floor(state.battery)}%`;
  return state.phase==='carrying'?'Charger collected · Plug into the power strip [F]':state.phase==='powered'?'Charger powered · Connect the MacBook [F]':state.phase==='charging'?`${state.battery>=100?'Fully charged':'Charging'} · ${Math.floor(state.battery)}%`:'';
 }
 function getDrawerView(position,lookAt){
  filing.updateWorldMatrix(true,false);
  filing.localToWorld(position.set(drawer.position.x,drawer.position.y+.94,1.08));
  filing.localToWorld(lookAt.set(drawer.position.x,drawer.position.y-.085,.48));
 }
 update(0);return {group,use,update,reset,hint,getDrawerView,get drawerOpen(){return state.drawerOpen;},get phase(){return state.phase;},get nextAction(){return state.nextAction;},get drawerReady(){return drawerProgress>.85;},get battery(){return state.battery;}};
}
