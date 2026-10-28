import * as THREE from './vendor/three.module.js';

export function createSceneRaycaster(){
 const ray=new THREE.Raycaster();
 // The default one-metre line radius makes thin table outlines intercept
 // clicks and visibility checks on objects clearly visible beside them.
 ray.params.Line.threshold=.008;
 return ray;
}
