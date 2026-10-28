import * as THREE from './vendor/three.module.js';

export function createFloorHandsaw(timerPosition){
 const group=new THREE.Group();group.name='Worn handsaw beside the countdown timer';
 group.position.copy(timerPosition).add(new THREE.Vector3(-.34,0,.25));group.position.y=0;group.rotation.y=-.12;group.rotation.z=.026;
 const flat=new THREE.Group();flat.rotation.x=-Math.PI/2;group.add(flat);
 // Neutral brushed steel, without the reddish rust patches of the shared metal.
 const steelPixels=new Uint8Array(128*128*4);
 for(let y=0;y<128;y++)for(let x=0;x<128;x++){
  const i=(y*128+x)*4,value=181+Math.sin(y*2.7+x*.013)*10+Math.sin(y*.33)*5;
  steelPixels[i]=value;steelPixels[i+1]=value+3;steelPixels[i+2]=value+4;steelPixels[i+3]=255;
 }
 const steelMap=new THREE.DataTexture(steelPixels,128,128);steelMap.colorSpace=THREE.SRGBColorSpace;steelMap.needsUpdate=true;
 const steel=new THREE.MeshStandardMaterial({color:0xc5ccce,map:steelMap,bumpMap:steelMap,bumpScale:.00018,metalness:.82,roughness:.46});
 const edge=new THREE.MeshStandardMaterial({color:0xa9b1ac,metalness:.72,roughness:.38});
 const brass=new THREE.MeshStandardMaterial({color:0x9c8758,metalness:.68,roughness:.62});
 const dark=new THREE.MeshStandardMaterial({color:0x30291d,roughness:1});
 const data=new Uint8Array(256*256*4);let seed=1903;
 for(let y=0;y<256;y++)for(let x=0;x<256;x++){
  seed=(1664525*seed+1013904223)>>>0;
  const grain=Math.sin(y*.54+Math.sin(x*.026)*2)*5+Math.sin(y*1.4+x*.012)*3;
  const fleck=(seed>>>24)/255,wear=fleck>.99?28:0,i=(y*256+x)*4;
  data[i]=98+grain+fleck*12+wear;data[i+1]=57+grain*.7+fleck*9+wear;data[i+2]=30+grain*.3+fleck*6+wear;data[i+3]=255;
 }
 const woodMap=new THREE.DataTexture(data,256,256);woodMap.colorSpace=THREE.SRGBColorSpace;woodMap.needsUpdate=true;woodMap.magFilter=THREE.LinearFilter;
 const wood=new THREE.MeshStandardMaterial({map:woodMap,roughness:.83,bumpMap:woodMap,bumpScale:.0005});
 function mesh(geometry,material,parent=flat){const m=new THREE.Mesh(geometry,material);m.castShadow=true;m.receiveShadow=true;parent.add(m);return m;}
 function extrusion(shape,depth,bevel,materials){
  const geo=new THREE.ExtrudeGeometry(shape,{depth,bevelEnabled:bevel>0,bevelSize:bevel,bevelThickness:bevel,bevelSegments:2,curveSegments:24});geo.translate(0,0,-depth/2);
  const uv=geo.attributes.uv;for(let i=0;i<uv.count;i++)uv.setXY(i,(uv.getX(i)+.37)/.72,(uv.getY(i)+.115)/.23);
  return mesh(geo,materials);
 }
 // A thin tapered plate and individually cut teeth, not a rectangular blade decal.
 const blade=new THREE.Shape();blade.moveTo(-.36,.035);blade.lineTo(.19,.081);blade.lineTo(.205,-.083);
 const count=38;
 for(let i=count;i>=0;i--){
  const x=-.36+i/count*.55,y=-.035-(x+.36)/.55*.048;
  blade.lineTo(x,y);if(i>0)blade.lineTo(x-.55/count*.40,y-.009);
 }
 blade.lineTo(-.365,.025);blade.closePath();
 const plate=extrusion(blade,.0028,.00035,[steel,edge]);plate.name='Tapered brushed steel blade with saw teeth';
 const handle=new THREE.Shape();handle.moveTo(.145,.092);handle.bezierCurveTo(.19,.119,.31,.116,.338,.079);handle.lineTo(.326,-.079);handle.quadraticCurveTo(.314,-.111,.278,-.102);handle.lineTo(.172,-.085);handle.quadraticCurveTo(.153,-.070,.157,-.047);handle.lineTo(.17,.046);handle.closePath();
 const grip=new THREE.Path();grip.moveTo(.214,.055);grip.quadraticCurveTo(.24,.072,.283,.055);grip.lineTo(.283,-.057);grip.quadraticCurveTo(.253,-.065,.226,-.052);grip.lineTo(.209,.032);grip.closePath();handle.holes.push(grip);
 const woodenHandle=extrusion(handle,.026,.006,wood);woodenHandle.name='Worn wooden open grip';
 for(const [x,y]of[[.176,.055],[.183,-.053],[.199,.003]])for(const side of[-1,1]){
  const screw=mesh(new THREE.CylinderGeometry(.006,.006,.0035,18),brass);screw.rotation.x=Math.PI/2;screw.position.set(x,y,side*.020);
  const slot=mesh(new THREE.BoxGeometry(.007,.0012,.0006),dark);slot.position.set(x,y,side*.022);slot.rotation.z=.35;
 }
 return {group,setEnvironment(map){steel.envMap=edge.envMap=brass.envMap=map;for(const m of[steel,edge,brass]){m.envMapIntensity=.9;m.needsUpdate=true;}}};
}
