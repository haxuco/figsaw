import * as THREE from './vendor/three.module.js';

export function createScissors(){
 const group=new THREE.Group();group.name='Steel scissors with worn red handles';
 const metal=new THREE.MeshStandardMaterial({color:0xb3b9af,metalness:.8,roughness:.38}),red=new THREE.MeshStandardMaterial({color:0x85342b,roughness:.72});
 const blades=[];
 for(const side of[-1,1]){
  const arm=new THREE.Group();arm.rotation.z=side*.14;group.add(arm);blades.push(arm);
  const shape=new THREE.Shape();shape.moveTo(-.008,-.042);shape.lineTo(.010,-.042);shape.lineTo(.012,.028);shape.lineTo(.002,.133);shape.lineTo(-.008,.115);shape.closePath();
  const geo=new THREE.ExtrudeGeometry(shape,{depth:.003,bevelEnabled:true,bevelSize:.0008,bevelThickness:.0008,bevelSegments:1});const blade=new THREE.Mesh(geo,metal);blade.position.z=side*.002;arm.add(blade);
  const grip=new THREE.Mesh(new THREE.TorusGeometry(.024,.006,6,20),red);grip.position.y=-.068;grip.scale.set(.75,1.15,1);arm.add(grip);
 }
 const pivot=new THREE.Mesh(new THREE.CylinderGeometry(.007,.007,.012,12),metal);pivot.rotation.x=Math.PI/2;pivot.position.z=.003;group.add(pivot);
 return {group,setOpen(value){blades.forEach((b,i)=>b.rotation.z=(i?1:-1)*(.06+value*.34));}};
}
export function createMobileSupplies(drawer){
 const objects={},group=new THREE.Group();group.name='Scissors and repair string in Supplies';drawer.add(group);
 const scissors=createScissors();scissors.group.rotation.set(-Math.PI/2,0,-.35);scissors.group.position.set(.23,-.129,-.015);scissors.group.scale.setScalar(.80);scissors.group.userData.supplyAction='scissors';group.add(scissors.group);objects.scissors=scissors.group;
 const string=new THREE.Group();string.name='Spool of cotton repair string';string.position.set(-.24,-.100,-.07);string.userData.supplyAction='string';group.add(string);objects.string=string;
 const wood=new THREE.MeshStandardMaterial({color:0x8e7253,roughness:.9}),cotton=new THREE.MeshStandardMaterial({color:0xc6bea1,roughness:1});
 function cylinder(r,h,y,mat){const o=new THREE.Mesh(new THREE.CylinderGeometry(r,r,h,20),mat);o.position.y=y;string.add(o);}
 cylinder(.027,.065,0,wood);for(const y of[-.031,.031])cylinder(.036,.008,y,wood);
 cylinder(.031,.047,0,cotton);
 for(let i=0;i<13;i++){const ring=new THREE.Mesh(new THREE.TorusGeometry(.031,.0013,4,20),cotton);ring.rotation.x=Math.PI/2;ring.position.y=-.022+i*.0035;string.add(ring);}
 const strand=new THREE.Mesh(new THREE.TubeGeometry(new THREE.CatmullRomCurve3([new THREE.Vector3(.03,-.023,0),new THREE.Vector3(.065,-.025,.02),new THREE.Vector3(.075,-.025,.04)]),12,.0018,4,false),cotton);string.add(strand);
 for(const [item,object]of Object.entries(objects)){
  const hit=new THREE.Mesh(new THREE.BoxGeometry(item==='scissors'?.09:.08,item==='scissors'?.22:.08,.045),new THREE.MeshBasicMaterial({transparent:true,opacity:0,colorWrite:false,depthWrite:false}));object.add(hit);
  object.traverse(o=>{if(o.isMesh){o.castShadow=true;o.receiveShadow=true;}});hit.castShadow=false;
 }
 return {group,objects,sync(state){for(const [key,o]of Object.entries(objects))o.visible=!state.has(key)&&!(key==='string'&&state.phase==='repaired');}};
}
