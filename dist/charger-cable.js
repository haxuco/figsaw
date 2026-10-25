import * as THREE from './vendor/three.module.js';

// Endpoints and exit tangents come from the physical plugs, not world axes.
// The broad slack loop stays outside the laptop footprint.
export function createChargerCableGeometry({adapterExit,connectorExit,laptop,floorSupport,strip}){
 const start=adapterExit.getWorldPosition(new THREE.Vector3()),end=connectorExit.getWorldPosition(new THREE.Vector3());
 const adapterOut=new THREE.Vector3(1,0,0).transformDirection(adapterExit.matrixWorld);
 const laptopOut=new THREE.Vector3(-1,0,0).transformDirection(connectorExit.matrixWorld);
 const ground=point=>{point.y=floorSupport(point.x,point.z)+.0055;return point;};
 const around=(x,z)=>ground(laptop.localToWorld(new THREE.Vector3(x,0,z)));
 let departure=[start,start.clone().addScaledVector(adapterOut,.065),ground(start.clone().addScaledVector(adapterOut,.22))];
 if(strip){
  // Leave the upright adapter above its housing, then bend past the front of
  // the strip before descending. Dropping straight down cuts through sockets.
  const local=strip.worldToLocal(start.clone()),above=Math.max(.24,local.y+.045);
  const point=(y,z)=>strip.localToWorld(new THREE.Vector3(local.x,y,z));
  departure=[start,start.clone().addScaledVector(adapterOut,.045),point(above,-.10),point(.10,-.19),ground(point(0,-.29))];
 }
 const points=[
  ...departure,
  around(-.32,1.45),around(-.61,1.12),around(-.85,.85),
  around(-.91,.48),around(-.90,.06),
  ground(end.clone().addScaledVector(laptopOut,.23)),
  end.clone().addScaledVector(laptopOut,.09),end
 ];
 const path=new THREE.CatmullRomCurve3(points,false,'centripetal');
 const grounded=new THREE.Curve();
 grounded.getPoint=(t,out=new THREE.Vector3())=>{
  path.getPoint(t,out);out.y=Math.max(out.y,floorSupport(out.x,out.z)+.0055);return out;
 };
 return new THREE.TubeGeometry(grounded,112,.0045,8,false);
}
