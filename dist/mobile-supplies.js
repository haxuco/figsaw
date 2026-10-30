import * as THREE from './vendor/three.module.js';

export function createScissors(){
 const group=new THREE.Group();group.name='Tailored steel scissors with ergonomic red grips';
 const steel=new THREE.MeshStandardMaterial({color:0xaab4b4,metalness:.82,roughness:.36});
 const edge=new THREE.MeshStandardMaterial({color:0xe0e5e3,metalness:.9,roughness:.22});
 const red=new THREE.MeshStandardMaterial({color:0x862d24,roughness:.56});
 const rubber=new THREE.MeshStandardMaterial({color:0x222b29,roughness:.86});
 const dark=new THREE.MeshStandardMaterial({color:0x424b49,metalness:.75,roughness:.44});
 const arms=[];
 function add(parent,geometry,material,name){const mesh=new THREE.Mesh(geometry,material);mesh.name=name;mesh.castShadow=mesh.receiveShadow=true;parent.add(mesh);return mesh;}
 function extrude(shape,depth,bevel){return new THREE.ExtrudeGeometry(shape,{depth,bevelEnabled:true,bevelSize:bevel,bevelThickness:bevel,bevelSegments:2,steps:1,curveSegments:12});}
 function mirroredShape(side){const shape=new THREE.Shape();return {shape,move:(x,y)=>shape.moveTo(x*side,y),line:(x,y)=>shape.lineTo(x*side,y),curve:(a,b,c,d,e,f)=>shape.bezierCurveTo(a*side,b,c*side,d,e*side,f)};}
 for(const side of[-1,1]){
  const arm=new THREE.Group();arm.name=side<0?'Thumb blade and grip':'Finger blade and grip';group.add(arm);arms.push(arm);
  // The complete half pivots at the screw. Offset blade planes allow the two
  // bevelled cutting edges to pass each other without coplanar faces.
  const z=side*.0022,p=mirroredShape(side);
  p.move(.007,-.033);p.curve(.018,-.025,.015,-.011,.014,.002);
  p.curve(.015,.031,.013,.083,.003,.137);p.curve(.002,.143,.0008,.147,-.0005,.146);
  p.curve(-.0016,.145,-.002,.141,-.002,.137);p.line(-.002,.024);
  p.curve(-.002,.013,-.010,.010,-.009,-.002);p.curve(-.008,-.016,.001,-.026,.007,-.033);
  const blade=add(arm,extrude(p.shape,.0026,.0005),steel,'Forged tapered blade and curved tang');blade.position.z=z;
  const b=mirroredShape(side);b.move(-.002,.025);b.line(-.002,.137);b.curve(-.0016,.143,-.0003,.148,.001,.143);b.line(.0023,.109);b.line(.0018,.025);b.shape.closePath();
  const bevelGeometry=new THREE.ShapeGeometry(b.shape,12);
  for(const face of[-1,1]){const bevel=add(arm,bevelGeometry,edge,'Ground cutting edge');bevel.position.z=z+(face>0?.00315:-.00055);if(face<0){bevel.rotation.y=Math.PI;bevel.scale.x=-1;}}
  // One continuous moulded handle, with a small thumb loop and a longer
  // finger loop. The rubber liner follows the opening instead of covering it.
  const cx=.029,cy=side<0?-.064:-.072,rx=side<0?.023:.025,ry=side<0?.027:.035;
  const h=mirroredShape(side);h.move(.004,-.020);h.curve(.014,-.019,.019,cy+ry,cx,cy+ry);
  h.curve(cx+rx*.56,cy+ry,cx+rx,cy+ry*.56,cx+rx,cy);
  h.curve(cx+rx,cy-ry*.56,cx+rx*.56,cy-ry,cx,cy-ry);
  h.curve(cx-rx*.56,cy-ry,cx-rx,cy-ry*.56,cx-rx,cy);
  h.curve(cx-rx,cy+ry*.48,.008,-.039,.004,-.020);h.shape.closePath();
  const hole=new THREE.Path();hole.absellipse(cx*side,cy,rx-.006,ry-.006,0,Math.PI*2,true);h.shape.holes.push(hole);
  const grip=add(arm,extrude(h.shape,.0064,.0018),red,'Continuous contoured red handle');grip.position.z=z-.002;
  const lining=new THREE.Shape();lining.absellipse(cx*side,cy,rx-.0054,ry-.0054,0,Math.PI*2,false);
  const opening=new THREE.Path();opening.absellipse(cx*side,cy,rx-.008,ry-.008,0,Math.PI*2,true);lining.holes.push(opening);
  const liner=add(arm,extrude(lining,.0068,.0008),rubber,'Inset soft black finger liner');liner.position.z=z-.0022;
 }
 // Rounded hardware on both sides, including a recessed slot and washer.
 const hardware=new THREE.Group();group.add(hardware);
 const washer=add(hardware,new THREE.CylinderGeometry(.0086,.0086,.0014,20),dark,'Pivot washer');washer.rotation.x=Math.PI/2;washer.position.z=.0061;
 const screw=add(hardware,new THREE.SphereGeometry(.0067,20,10,0,Math.PI*2,0,Math.PI/2),edge,'Domed pivot screw');screw.rotation.x=Math.PI/2;screw.scale.y=.35;screw.position.z=.0068;
 const slot=add(hardware,new THREE.BoxGeometry(.0075,.00085,.0002),dark,'Recessed screw slot');slot.position.z=.00935;slot.rotation.z=-.45;
 const back=add(hardware,new THREE.CylinderGeometry(.0064,.0064,.0016,16),steel,'Rear pivot rivet');back.rotation.x=Math.PI/2;back.position.z=-.0037;
 function setOpen(value){const angle=.012+THREE.MathUtils.clamp(value,0,1)*.38;arms.forEach((arm,i)=>arm.rotation.z=(i?1:-1)*angle);}
 setOpen(.23);
 return {group,setOpen};
}
export function createMobileSupplies(drawer){
 const objects={},group=new THREE.Group();group.name='Scissors and repair string in Supplies';drawer.add(group);
 const kit=new THREE.Group();kit.name='Scissors and cotton string repair kit';kit.userData.supplyAction='mobileKit';group.add(kit);objects.mobileKit=kit;
 const scissors=createScissors();scissors.group.rotation.set(-Math.PI/2,0,0);scissors.group.position.set(.215,-.129,.10);scissors.group.scale.setScalar(.80);kit.add(scissors.group);
 const string=new THREE.Group();string.name='Spool of cotton repair string';string.position.set(.215,-.100,-.07);kit.add(string);
 const wood=new THREE.MeshStandardMaterial({color:0x8e7253,roughness:.9}),cotton=new THREE.MeshStandardMaterial({color:0xc6bea1,roughness:1});
 function cylinder(r,h,y,mat){const o=new THREE.Mesh(new THREE.CylinderGeometry(r,r,h,20),mat);o.position.y=y;string.add(o);}
 cylinder(.027,.065,0,wood);for(const y of[-.031,.031])cylinder(.036,.008,y,wood);
 cylinder(.031,.047,0,cotton);
 for(let i=0;i<13;i++){const ring=new THREE.Mesh(new THREE.TorusGeometry(.031,.0013,4,20),cotton);ring.rotation.x=Math.PI/2;ring.position.y=-.022+i*.0035;string.add(ring);}
 const strand=new THREE.Mesh(new THREE.TubeGeometry(new THREE.CatmullRomCurve3([new THREE.Vector3(.03,-.023,0),new THREE.Vector3(.065,-.025,.02),new THREE.Vector3(.075,-.025,.04)]),12,.0018,4,false),cotton);string.add(strand);
 for(const [item,object]of Object.entries(objects)){
  const hit=new THREE.Mesh(new THREE.BoxGeometry(.17,.16,.31),new THREE.MeshBasicMaterial({transparent:true,opacity:0,colorWrite:false,depthWrite:false}));hit.position.set(.215,-.10,.04);object.add(hit);
  object.traverse(o=>{if(o.isMesh){o.castShadow=true;o.receiveShadow=true;}});hit.castShadow=false;
 }
 return {group,objects,sync(state){for(const [key,o]of Object.entries(objects))o.visible=!state.has(key)&&!(key==='mobileKit'&&state.phase==='repaired');}};
}
