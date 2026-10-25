import * as THREE from './vendor/three.module.js';

function outline(w,h,r){
 const s=new THREE.Shape(),x=w/2,y=h/2;
 s.moveTo(-x+r,-y);s.lineTo(x-r,-y);s.quadraticCurveTo(x,-y,x,-y+r);s.lineTo(x,y-r);s.quadraticCurveTo(x,y,x-r,y);s.lineTo(-x+r,y);s.quadraticCurveTo(-x,y,-x,y-r);s.lineTo(-x,-y+r);s.quadraticCurveTo(-x,-y,-x+r,-y);return s;
}
function plate(shape,depth,bevel=.001){
 const g=new THREE.ExtrudeGeometry(shape,{depth:depth-2*bevel,bevelEnabled:bevel>0,bevelSize:bevel,bevelThickness:bevel,bevelSegments:2,curveSegments:6});g.translate(0,0,-depth/2+bevel);return g;
}
function add(parent,geometry,material,position,name){const m=new THREE.Mesh(geometry,material);m.position.set(...position);m.name=name;m.castShadow=m.receiveShadow=true;parent.add(m);return m;}
function box(parent,size,pos,mat,name){return add(parent,new THREE.BoxGeometry(...size),mat,pos,name);}
function round(parent,size,pos,mat,name,r=.012){return add(parent,plate(outline(size[0],size[1],r),size[2],Math.min(.002,size[2]/4)),mat,pos,name);}
function slab(parent,w,d,h,pos,mat,name,r=.012){const m=add(parent,plate(outline(w,d,r),h,Math.min(.002,h/4)),mat,pos,name);m.rotation.x=-Math.PI/2;return m;}

export function createMacBookAdapter(){
 const group=new THREE.Group();group.name='MacBook USB-C power adapter';group.userData.chargingAction='charger';
 const white=new THREE.MeshStandardMaterial({color:0xe5e2d8,roughness:.36}),seam=new THREE.MeshStandardMaterial({color:0xa5a59c,roughness:.7}),metal=new THREE.MeshStandardMaterial({color:0xbac2c4,metalness:.8,roughness:.3});
 const dark=new THREE.MeshStandardMaterial({color:0x1d2321,roughness:.8});
 round(group,[.142,.147,.065],[0,.083,0],white,'Upright rounded adapter shell');
 round(group,[.143,.148,.0015],[0,.083,0],seam,'Adapter casing seam');
 round(group,[.060,.029,.062],[0,.014,-.012],white,'Removable AC duckhead',.006);
 for(const x of[-.014,.014])box(group,[.005,.023,.014],[x,-.010,-.012],metal,'Downward AC prong');
 const port=slab(group,.025,.010,.002,[0,.158,0],dark,'USB-C port on top',.003);
 const plug=new THREE.Group();plug.name='USB-C adapter plug and strain relief';plug.visible=false;group.add(plug);
 round(plug,[.027,.034,.014],[0,.177,0],white,'Upright USB-C plug',.005);
 const sleeve=add(plug,new THREE.CylinderGeometry(.0045,.007,.024,12),white,[0,.204,0],'Adapter cable strain relief');
 const exit=new THREE.Object3D();exit.name='Adapter cable exit';exit.position.set(0,.216,0);exit.rotation.z=Math.PI/2;group.add(exit);
 return {group,plug,exit};
}

export function createPowerStrip(){
 const group=new THREE.Group();group.name='Powered floor power strip';group.userData.chargingAction='strip';
 const ivory=new THREE.MeshStandardMaterial({color:0xc9c7b8,roughness:.65}),socket=new THREE.MeshStandardMaterial({color:0xe0ddd0,roughness:.52}),rubber=new THREE.MeshStandardMaterial({color:0x242720,roughness:.9}),metal=new THREE.MeshStandardMaterial({color:0x8d9999,metalness:.75,roughness:.45});
 slab(group,.646,.132,.050,[0,0,0],ivory,'Rounded power strip housing',.025);
 slab(group,.646,.133,.006,[0,-.012,0],rubber,'Dark housing joint',.025);
 for(const x of[-.255,.255])for(const z of[-.041,.041])slab(group,.035,.021,.006,[x,-.028,z],rubber,'Rubber foot',.005);
 const outletXs=[-.205,-.095,.015,.125];
 for(const [i,x] of outletXs.entries()){
  slab(group,.094,.103,.003,[x,.0255,0],rubber,'Recessed socket surround',.013);
  const s=outline(.088,.097,.011);
  for(const side of[-1,1]){
   const w=side<0?.0055:.0045,h=.016,p=new THREE.Path(),cx=side*.014,cy=.012;
   p.moveTo(cx-w/2,cy-h/2);p.lineTo(cx-w/2,cy+h/2);p.lineTo(cx+w/2,cy+h/2);p.lineTo(cx+w/2,cy-h/2);p.closePath();s.holes.push(p);
  }
  const ground=new THREE.Path();ground.absarc(0,-.024,.006,0,Math.PI*2,true);s.holes.push(ground);
  const face=add(group,plate(s,.005,.0004),socket,[x,.030,0],`Recessed grounded outlet ${i+1}`);face.rotation.x=-Math.PI/2;
 }
 slab(group,.054,.075,.006,[.253,.029,0],rubber,'Recessed switch bezel',.010);
 const red=new THREE.MeshStandardMaterial({color:0xb83e27,roughness:.29,emissive:0x9c2112,emissiveIntensity:.18});
 const rocker=slab(group,.037,.055,.010,[.253,.034,0],red,'Illuminated on-off rocker',.007);rocker.rotation.z=.10;
 slab(group,.003,.014,.001,[.245,.040,0],socket,'Switch on symbol',.0007);
 const led=new THREE.MeshBasicMaterial({color:0x85c86b});add(group,new THREE.CylinderGeometry(.003,.003,.001,10),led,[.211,.028,.039],'Surge protection indicator');
 for(const x of[-.303,.303]){
  add(group,new THREE.CylinderGeometry(.006,.006,.002,12),metal,[x,.026,0],'Recessed casing screw');box(group,[.008,.0008,.001],[x,.0273,0],rubber,'Screw slot');
 }
 const relief=add(group,new THREE.CylinderGeometry(.009,.012,.052,12),rubber,[.344,-.004,0],'Moulded mains strain relief');relief.rotation.z=-Math.PI/2;
 for(let i=0;i<5;i++){const rib=add(group,new THREE.TorusGeometry(.010-i*.00045,.0014,5,12),rubber,[.326+i*.009,-.004,0],'Strain relief rib');rib.rotation.y=Math.PI/2;}
 const leadExit=new THREE.Object3D();leadExit.name='Power strip mains cable exit';leadExit.position.set(.370,-.004,0);group.add(leadExit);
 const adapterSeat=new THREE.Object3D();adapterSeat.name='Charger plug seat';adapterSeat.position.set(outletXs[0],.033,0);group.add(adapterSeat);
 return {group,leadExit,adapterSeat};
}

export function createMainsLeadGeometry({exit,wallPlug,floorSupport}){
 const start=exit.getWorldPosition(new THREE.Vector3()),out=new THREE.Vector3(1,0,0).transformDirection(exit.matrixWorld),end=wallPlug.clone();
 const floor=p=>{p.y=floorSupport(p.x,p.z)+.0085;return p;};
 const points=[start,start.clone().addScaledVector(out,.07),floor(start.clone().addScaledVector(out,.22)),floor(new THREE.Vector3(2.73,0,4.00)),floor(new THREE.Vector3(2.50,0,4.27)),new THREE.Vector3(end.x+.08,.07,end.z-.07),end.clone().add(new THREE.Vector3(0,-.06,-.02)),end];
 const path=new THREE.CatmullRomCurve3(points,false,'centripetal'),grounded=new THREE.Curve();
 grounded.getPoint=(t,out=new THREE.Vector3())=>{path.getPoint(t,out);out.y=Math.max(out.y,floorSupport(out.x,out.z)+.0085);return out;};
 return new THREE.TubeGeometry(grounded,88,.0075,7,false);
}
