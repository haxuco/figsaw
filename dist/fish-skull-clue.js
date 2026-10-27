import * as THREE from './vendor/three.module.js';
// Attached to the fish's bony forehead, behind the same dissolution clipping plane.
export function createFishSkullClue(puzzle){
 const canvas=document.createElement('canvas');canvas.width=512;canvas.height=160;const ctx=canvas.getContext('2d');
 const map=new THREE.CanvasTexture(canvas);map.colorSpace=THREE.SRGBColorSpace;
 const material=new THREE.MeshStandardMaterial({map,transparent:true,alphaTest:.1,roughness:1,depthWrite:false,polygonOffset:true,polygonOffsetFactor:-2});
 const mesh=new THREE.Mesh(new THREE.PlaneGeometry(.194,.060),material);mesh.name='Four letters etched into the fish skull';mesh.position.set(-.16,.185,.133);mesh.rotation.x=0;
 function refresh(){ctx.clearRect(0,0,512,160);ctx.textAlign='center';ctx.textBaseline='middle';ctx.font='bold 100px Georgia';ctx.fillStyle='#f0e4bc';ctx.fillText(puzzle.letters.split('').join(' '),256,85,490);ctx.fillStyle='#453e2b';ctx.fillText(puzzle.letters.split('').join(' '),253,82,490);map.needsUpdate=true;}
 refresh();return {mesh,refresh};
}
