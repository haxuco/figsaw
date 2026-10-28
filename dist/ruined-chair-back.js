import * as THREE from './vendor/three.module.js';

// Decorative wreckage: an open, snapped frame and scraps of mesh rather than
// the complete silhouette used by the salvageable chair parts.
export function createRuinedChairBack({frame,edge,weave,fracture,padding,mobile=false}){
 const group=new THREE.Group();group.name='Unusable shattered chair backrest';
 const chunks=Array.from({length:3},()=>{const chunk=new THREE.Group();group.add(chunk);return chunk;});let parent=chunks[0];
 const brokenFace=fracture.clone();brokenFace.side=THREE.DoubleSide;
 const depth=new THREE.MeshDepthMaterial({depthPacking:THREE.RGBADepthPacking,map:weave.map,alphaTest:.3,side:THREE.DoubleSide});
 function mesh(geometry,material){const m=new THREE.Mesh(geometry,material);m.castShadow=m.receiveShadow=true;parent.add(m);return m;}
 function tube(points,radius,material=frame){const curve=new THREE.CatmullRomCurve3(points.map(p=>new THREE.Vector3(...p)));return mesh(new THREE.TubeGeometry(curve,points.length*(mobile?3:6),radius,mobile?4:6,false),material);}
 function brokenEnd(point,tangent,radius){
  const shape=new THREE.Shape();for(let i=0;i<12;i++){const a=i/12*Math.PI*2,r=radius*(i%3===0?.64:1);if(i)shape.lineTo(Math.cos(a)*r,Math.sin(a)*r);else shape.moveTo(Math.cos(a)*r,Math.sin(a)*r);}shape.closePath();
  const cap=mesh(new THREE.ShapeGeometry(shape),brokenFace);cap.position.set(...point);cap.quaternion.setFromUnitVectors(new THREE.Vector3(0,0,1),new THREE.Vector3(...tangent).normalize());
 }
 const pieces=[
  [[-.10,.60,-.108],[0,.615,-.11],[.17,.60,-.108],[.264,.55,-.10],[.28,.46,-.083],[.235,.275,-.048]],
  [[-.235,.235,-.03],[-.23,.10,.008],[-.18,0,.022],[0,-.014,.025],[.145,.025,.07]]
 ];
 for(const [index,points]of pieces.entries()){parent=chunks[index];tube(points,.025);for(const [a,b]of[[0,1],[points.length-1,points.length-2]])brokenEnd(points[a],points[a].map((v,i)=>v-points[b][i]),.025);}
 function rag(points,fold){
  const shape=new THREE.Shape(points.map(p=>new THREE.Vector2(...p))),geometry=new THREE.ShapeGeometry(shape),p=geometry.attributes.position,uv=geometry.attributes.uv;
  for(let i=0;i<p.count;i++){const x=p.getX(i),y=p.getY(i);p.setZ(i,-.11*y/.615+Math.sin(x*19+y*13)*fold);uv.setXY(i,(x+.28)/.56,(y+.014)/.629);}
  geometry.computeVertexNormals();const m=mesh(geometry,weave);m.customDepthMaterial=depth;
  // Short, irregular nylon strands hang from the ripped inner edge.
  for(let i=1;i<points.length-2;i++){const [x,y]=points[i];if(i<4)continue;const z=-.11*y/.615+Math.sin(x*19+y*13)*fold;tube([[x,y,z],[x-.009,y-.012,z-.008],[x-.014+Math.sin(i*5)*.012,y-.035-(i%3)*.008,z-.016]],.0014,edge);}
 }
 parent=chunks[0];rag([[.06,.60],[.17,.59],[.25,.54],[.27,.45],[.23,.29],[.18,.32],[.21,.38],[.14,.40],[.16,.48],[.08,.46],[.10,.55],[.02,.54]],.018);
 parent=chunks[1];rag([[-.22,.23],[-.225,.09],[-.17,.01],[-.02,-.01],[.09,.02],[.01,.06],[.04,.11],[-.04,.09],[-.08,.15],[-.15,.12],[-.12,.21],[-.19,.18]],.028);
 // The mounting fork is severed and the lumbar brace has buckled off-axis.
 tube([[0,-.09,-.07],[0,.10,-.08],[.075,.18,-.14]],.018);brokenEnd([.075,.18,-.14],[1,1,-1],.018);
 tube([[-.20,.16,-.055],[-.09,.20,-.025],[.015,.17,.045]],.014,edge);
 const pad=mesh(new THREE.SphereGeometry(1,12,8),padding);pad.position.set(-.04,.15,-.02);pad.scale.set(.032,.045,.018);pad.rotation.z=.55;
 parent=chunks[2];tube([[.21,.04,.06],[.29,.095,.048],[.33,.19,.035]],.022);brokenEnd([.21,.04,.06],[-1,-1,0],.022);
 return group;
}
