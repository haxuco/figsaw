import * as THREE from './vendor/three.module.js';

export function createScissors(){
 const group=new THREE.Group();group.name='Steel scissors with worn red handles';
 const steel=new THREE.MeshStandardMaterial({color:0xb5bdbb,metalness:.88,roughness:.34});
 const edge=new THREE.MeshStandardMaterial({color:0xe1e5df,metalness:.92,roughness:.23});
 const red=new THREE.MeshStandardMaterial({color:0x933d31,roughness:.62});
 const dark=new THREE.MeshStandardMaterial({color:0x343c39,metalness:.65,roughness:.48});
 const blades=[];
 function add(parent,geometry,material,name){const mesh=new THREE.Mesh(geometry,material);mesh.name=name;mesh.castShadow=mesh.receiveShadow=true;parent.add(mesh);return mesh;}
 function profile(points,side){const shape=new THREE.Shape();points.forEach(([x,y],i)=>shape[i?'lineTo':'moveTo'](x*side,y));shape.closePath();return shape;}
 for(const side of[-1,1]){
  const arm=new THREE.Group();arm.name=side<0?'Thumb blade and grip':'Finger blade and grip';group.add(arm);blades.push(arm);
  // Each half includes the steel tang: the blade and handle rotate together
  // around the same rivet, on separate planes so the cutting edges can cross.
  const shape=profile([[-.006,-.016],[-.013,-.048],[.017,-.056],[.021,-.043],[.010,-.012],[.018,.030],[.014,.083],[.002,.145],[-.003,.138],[-.007,.036]],side);
  const blade=add(arm,new THREE.ExtrudeGeometry(shape,{depth:.0028,bevelEnabled:true,bevelSize:.00055,bevelThickness:.0005,bevelSegments:1,curveSegments:8}),steel,'Tapered stainless steel blade and tang');blade.position.z=side*.0024;
  const bevel=profile([[-.007,.024],[-.003,.138],[.002,.145],[.001,.103],[-.003,.024]],side);
  const cuttingEdge=add(arm,new THREE.ShapeGeometry(bevel),edge,'Polished cutting bevel');cuttingEdge.position.z=blade.position.z+.0034;cuttingEdge.material.side=THREE.DoubleSide;
  const grip=new THREE.Shape(),hole=new THREE.Path();
  const rx=side<0?.022:.026,ry=side<0?.027:.033;
  grip.absellipse(0,0,rx,ry,0,Math.PI*2,false);hole.absellipse(0,0,rx-.0065,ry-.007,0,Math.PI*2,true);grip.holes.push(hole);
  const handle=add(arm,new THREE.ExtrudeGeometry(grip,{depth:.006,bevelEnabled:true,bevelSize:.0015,bevelThickness:.0015,bevelSegments:2,steps:1,curveSegments:16}),red,'Rounded red finger loop');
  handle.position.set(side*.029,-.066,blade.position.z-.0016);handle.rotation.z=side*-.20;
  const collar=add(arm,new THREE.BoxGeometry(.017,.022,.007),red,'Moulded handle neck');collar.position.set(side*.014,-.039,blade.position.z+.001);collar.rotation.z=side*.40;
 }
 const washer=add(group,new THREE.CylinderGeometry(.009,.009,.003,20),dark,'Pivot washer');washer.rotation.x=Math.PI/2;washer.position.z=.006;
 const rivet=add(group,new THREE.CylinderGeometry(.007,.007,.0035,20),edge,'Slotted pivot screw');rivet.rotation.x=Math.PI/2;rivet.position.z=.009;
 const slot=add(group,new THREE.BoxGeometry(.009,.0012,.0006),dark,'Screw slot');slot.position.z=.011;slot.rotation.z=-.35;
 function setOpen(value){const angle=.06+THREE.MathUtils.clamp(value,0,1)*.34;blades.forEach((blade,i)=>blade.rotation.z=(i?1:-1)*angle);}
 setOpen(.24);
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
