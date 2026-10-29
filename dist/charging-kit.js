import * as THREE from './vendor/three.module.js';
import {createChargingState} from './charging-state.js';
import {createChargerCableGeometry} from './charger-cable.js';
import {createMacBookAdapter,createPowerStrip,createMainsLeadGeometry} from './charging-hardware.js';

export function createChargingKit({filing,laptop,floorSupport,drawerMaterial,powerClock=()=>performance.now()/1000}){
 const group=new THREE.Group();group.name='Interactive MacBook charging kit';group.userData.ignoreAcid=true;
 const rearBounce=new THREE.PointLight(0xa4b4a5,1.5,2.8,2);rearBounce.position.set(1.55,1.25,3.25);rearBounce.userData.mobileEssential=true;group.add(rearBounce);
 const state=createChargingState(),ivory=new THREE.MeshStandardMaterial({color:0xd9d4c4,roughness:.51}),white=new THREE.MeshStandardMaterial({color:0xe6e3d9,roughness:.42}),rubber=new THREE.MeshStandardMaterial({color:0x252821,roughness:.88}),metal=new THREE.MeshStandardMaterial({color:0x8a9595,roughness:.4,metalness:.7});
 const cableMaterial=white.clone(),burnPoint={value:new THREE.Vector3()},burnAmount={value:0};
 cableMaterial.onBeforeCompile=shader=>{
  shader.uniforms.cableBurnPoint=burnPoint;shader.uniforms.cableBurnAmount=burnAmount;
  shader.vertexShader='uniform vec3 cableBurnPoint;uniform float cableBurnAmount;varying float vCableBurn;\n'+shader.vertexShader;
  shader.vertexShader=shader.vertexShader.replace('#include <begin_vertex>',`#include <begin_vertex>
   vCableBurn=(1.0-smoothstep(.025,.18,distance((modelMatrix*vec4(position,1.0)).xyz,cableBurnPoint)))*cableBurnAmount;
   transformed-=normal*vCableBurn*.0025;`);
  shader.fragmentShader='varying float vCableBurn;\n'+shader.fragmentShader;
  shader.fragmentShader=shader.fragmentShader.replace('#include <color_fragment>',`#include <color_fragment>
   diffuseColor.rgb=mix(diffuseColor.rgb,vec3(.055,.026,.012),vCableBurn);`);
 };
 cableMaterial.customProgramCacheKey=()=> 'melting-charger-insulation-v1';
 const amber=new THREE.MeshBasicMaterial({color:0xffb335});
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
 const drawer=new THREE.Group();drawer.name='Supplies drawer with charger, scissors and string';drawer.userData.chargingAction='drawer';drawer.position.set(-.38,.56,0);filing.add(drawer);
 box([.71,.32,.025],[0,0,.231],drawerMaterial,drawer);
 rounded([.22,.022,.028],[0,.04,.264],metal,drawer);
 label('SUPPLIES',.20,.047,[0,-.065,.246],drawer);
 box([.66,.018,.36],[0,-.145,.025],drawerMaterial,drawer);
 for(const x of[-.33,.33])box([.015,.27,.36],[x,-.01,.025],drawerMaterial,drawer);
 box([.66,.27,.015],[0,-.01,-.155],drawerMaterial,drawer);
 for(const x of[-.348,.348])box([.013,.027,.43],[x,-.08,.015],metal,drawer);
 const {group:brick,plug:adapterPlug,exit:adapterExit}=createMacBookAdapter();drawer.add(brick);
 const drawerBrickPosition=new THREE.Vector3(.105,-.105,-.055);
 brick.position.copy(drawerBrickPosition);brick.rotation.x=Math.PI/2;
 const adapterText=label('96W USB-C',.077,.018,[0,.082,-.034],brick);adapterText.rotation.y=Math.PI;adapterText.material.color.setHex(0x999b92);
 const coil=new THREE.Group();coil.name='Coiled charger cable';coil.userData.chargingAction='charger';drawer.add(coil);coil.position.set(-.145,-.127,.06);
 const coiled=[];for(let i=0;i<=120;i++){const a=i/120*Math.PI*6;coiled.push([Math.cos(a)*(.086+i*.00012),i*.000045,Math.sin(a)*.060]);}
 const coilWire=tube(coiled,.0045,cableMaterial,coil);rounded([.041,.014,.019],[.12,.01,0],white,coil);box([.014,.009,.014],[.145,.01,0],metal,coil);
 const {group:strip,leadExit,adapterSeat}=createPowerStrip();
 strip.position.set(1.94,floorSupport(1.94,3.72)+.032,3.72);strip.rotation.y=-.16;group.add(strip);
 label('SURGE',.040,.012,[.253,.043,-.042],strip).rotation.x=-Math.PI/2;
 // The strip has a real lead running to a wall socket behind the viewer.
 const outlet=rounded([.12,.16,.018],[2.15,.27,4.424],ivory,group);
 for(const y of[.235,.30]){box([.065,.042,.006],[2.15,y,4.411],white,group);for(const x of[2.136,2.164])box([.005,.016,.003],[x,y+.004,4.406],rubber,group);}
 rounded([.054,.043,.055],[2.15,.30,4.383],rubber,group);
 const mains=mesh(createMainsLeadGeometry({exit:leadExit,wallPlug:new THREE.Vector3(2.15,.30,4.35),floorSupport}),rubber);mains.name='Power strip mains lead to wall socket';mains.raycast=()=>{};
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
 const warningCanvas=document.createElement('canvas');warningCanvas.width=1024;warningCanvas.height=80;
 const warningPaint=warningCanvas.getContext('2d'),warningMap=new THREE.CanvasTexture(warningCanvas);warningMap.colorSpace=THREE.SRGBColorSpace;
 const warningOverlay=mesh(new THREE.PlaneGeometry(.73,.057),new THREE.MeshBasicMaterial({map:warningMap,toneMapped:false}),laptop.screen);warningOverlay.name='Sixty-second battery warning';warningOverlay.position.set(0,-.217,.002);warningOverlay.visible=false;warningOverlay.castShadow=false;
 let lastWarningLabel='',powerMessage='';
 function syncPower(time=powerClock()){
  const event=state.update(time,{opened:laptop.isReady});
  if(event==='started')powerMessage='Battery critical. Connect the charger within 60 seconds.';
  if(event==='depleted')powerMessage='The laptop has run out of power. Connect the charger to use it.';
  laptop.setPower(state.canUse);
 }
 let drawerProgress=0,plugStarted=-Infinity,connectStarted=-Infinity,wire=null,lastWireProgress=-1,lastBatteryLabel='',lastTime=null;
 const point=new THREE.Vector3(),plugTarget=new THREE.Vector3(),cablePoints=[];
 function sampleCable(geometry,object){
  object.updateWorldMatrix(true,false);cablePoints.length=0;
  for(let i=0;i<=96;i++){const p=geometry.parameters.path.getPoint(i/96).applyMatrix4(object.matrixWorld);if(p.y<floorSupport(p.x,p.z)+.035)cablePoints.push(p);}
 }
 function updateWire(progress){
  const geometry=wire?.geometry;
  const next=createChargerCableGeometry({adapterExit,connectorExit,laptop:laptop.object,floorSupport,strip});
  if(!wire){wire=mesh(next,cableMaterial);wire.name='Charging cable resting across the floor';wire.raycast=()=>{};}else{wire.geometry=next;geometry.dispose();}
  sampleCable(next,wire);lastWireProgress=progress;
 }
 function use(action,time,locked=false){
  syncPower();const before=state.phase,message=state.use(action,locked);laptop.setPower(state.canUse);
  if(locked)return message;
  if(before==='drawer'&&state.phase==='carrying'){brick.visible=false;coil.visible=false;}
  if(before==='carrying'&&state.phase==='charging'){
   strip.add(brick);brick.visible=true;brick.rotation.set(0,0,0);brick.position.copy(adapterSeat.position);plugStarted=time;
  }
  if(before!=='charging'&&state.phase==='charging'){powerMessage='';connectStarted=time;connector.visible=true;adapterPlug.visible=true;coil.visible=false;}
  return message;
 }
 function update(time,reducedMotion=false,powerTime=powerClock()){
  const dt=lastTime===null?0:Math.max(0,Math.min(.05,time-lastTime));lastTime=time;syncPower(powerTime);
  const target=state.drawerOpen?1:0;drawerProgress=reducedMotion?target:THREE.MathUtils.damp(drawerProgress,target,8,dt);drawer.position.z=drawerProgress*.43;
  if(state.phase==='powered'||state.phase==='charging')brick.position.y=adapterSeat.position.y+(reducedMotion?0:.19*(1-THREE.MathUtils.smootherstep(time-plugStarted,0,.65)));
  if(state.phase==='charging'){
   const progress=reducedMotion?1:THREE.MathUtils.smootherstep(time-connectStarted,0,.65);
   port.getWorldPosition(plugTarget);connector.quaternion.copy(laptop.object.getWorldQuaternion(new THREE.Quaternion()));
   point.set(-.032-(1-progress)*.12,(1-progress)*.028,0).applyQuaternion(connector.quaternion);connector.position.copy(plugTarget).add(point);
   if(Math.abs(progress-lastWireProgress)>.02||progress===1&&lastWireProgress!==1)updateWire(progress);
   led.material=amber;
  }
  batteryOverlay.visible=laptop.openProgress>.35&&laptop.isPowered;
  warningOverlay.visible=batteryOverlay.visible&&state.started&&state.phase!=='charging';
  const seconds=Math.ceil(state.remaining),warning=`Connect charger in ${Math.floor(seconds/60)}:${String(seconds%60).padStart(2,'0')} · Battery critical`;
  if(warningOverlay.visible&&warning!==lastWarningLabel){lastWarningLabel=warning;warningPaint.fillStyle='#261c12';warningPaint.fillRect(0,0,1024,80);warningPaint.fillStyle='#ffd08b';warningPaint.font='500 38px Arial';warningPaint.textAlign='center';warningPaint.fillText(warning,512,53,980);warningMap.needsUpdate=true;}
  const level=Math.ceil(state.battery),charging=state.phase==='charging',text=`${charging?'⚡ ':''}${level}%`;
  if(text!==lastBatteryLabel){
   lastBatteryLabel=text;batteryPaint.fillStyle='#222e36';batteryPaint.fillRect(0,0,512,96);batteryPaint.fillStyle=charging?'#93dba3':'#e3b36d';batteryPaint.font='500 44px Arial';batteryPaint.textAlign='right';batteryPaint.fillText(text,385,63);
   batteryPaint.strokeStyle=charging?'#93dba3':'#e3b36d';batteryPaint.lineWidth=5;batteryPaint.strokeRect(405,25,72,44);batteryPaint.fillRect(480,37,7,19);batteryPaint.fillRect(413,33,56*level/100,28);batteryMap.needsUpdate=true;
  }
 }
 function reset(){state.reset();laptop.setPower(true);batteryOverlay.visible=warningOverlay.visible=false;lastWarningLabel='';powerMessage='';cablePoints.length=0;burnAmount.value=0;led.visible=true;drawerProgress=0;drawer.position.z=0;drawer.add(brick,coil);brick.visible=coil.visible=true;brick.position.copy(drawerBrickPosition);brick.rotation.set(Math.PI/2,0,0);coil.position.set(-.145,-.127,.06);coil.rotation.set(0,0,0);connector.visible=false;adapterPlug.visible=false;if(wire){group.remove(wire);wire.geometry.dispose();wire=null;}lastWireProgress=-1;lastBatteryLabel='';lastTime=null;}
 function hint(action){
  if(state.phase==='damaged')return 'Charger cable burned through';
  if(action==='drawer')return state.drawerOpen?'Close Supplies drawer':'Open Supplies drawer';
  if(action==='charger')return 'Take MacBook charger + cable';
  if(action==='strip')return state.phase==='carrying'?'Plug charger into power strip':'Powered power strip';
  if(action==='laptop')return state.phase==='powered'?'Connect charger to MacBook':!state.canUse?'Battery empty · Connect the charger':`MacBook battery · ${Math.ceil(state.battery)}%`;
  if(!action&&state.started&&state.phase!=='charging'){const seconds=Math.ceil(state.remaining);return state.canUse?`Battery critical · Plug in the charger in ${Math.floor(seconds/60)}:${String(seconds%60).padStart(2,'0')}`:'Laptop off · Battery 0% · Connect the charger';}
  return state.phase==='carrying'?'Charger collected · Plug into the power strip [F]':state.phase==='powered'?'Charger powered · Connect the MacBook [F]':state.phase==='charging'?'External power · Battery 0%':'';
 }
 function getDrawerView(position,lookAt){
  filing.updateWorldMatrix(true,false);
  filing.localToWorld(position.set(drawer.position.x,drawer.position.y+1.10,.83));
  filing.localToWorld(lookAt.set(drawer.position.x,drawer.position.y-.085,.42));
 }
 function meltCable(position,amount){burnPoint.value.copy(position);burnAmount.value=amount;if(amount>=1){state.damageCable();led.visible=false;}}
 function inventoryModel(){
  const model=new THREE.Group(),adapter=brick.clone(),cable=coil.clone();
  adapter.visible=cable.visible=true;adapter.position.set(-.09,-.07,0);adapter.rotation.set(0,-.25,0);
  cable.position.set(.09,-.045,.025);cable.rotation.set(.8,0,-.2);model.add(adapter,cable);return model;
 }
 function capture(time){return {time,state:state.capture(),drawerProgress,burn:burnAmount.value,burnPoint:burnPoint.value.toArray(),connected:!!wire};}
 function restore(value,time){
  reset();const phase=value.state.phase;
  if(phase!=='drawer'){
   use('drawer',time);use('charger',time);
   if(phase!=='carrying')use('strip',time);
   if(phase==='charging'||phase==='damaged'&&value.connected)use('laptop',time);
  }
  state.restore(value.state,powerClock());drawerProgress=value.drawerProgress;drawer.position.z=drawerProgress*.43;
  burnAmount.value=value.burn;burnPoint.value.fromArray(value.burnPoint);led.visible=phase!=='damaged';update(time,true);
 }
 update(0);return {group,drawer,inventoryModel,use,update,reset,capture,restore,hint,syncPower,takePowerMessage(){const message=powerMessage;powerMessage='';return message;},get canUse(){return state.canUse;},getDrawerView,meltCable,get cablePoints(){return cablePoints;},get energized(){return state.phase==='powered'||state.phase==='charging';},get drawerOpen(){return state.drawerOpen;},get phase(){return state.phase;},get nextAction(){return state.nextAction;},get drawerReady(){return drawerProgress>.85;},get battery(){return state.battery;}};
}
