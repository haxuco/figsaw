import {createLocalLeaderboard,captureRankedEscape} from './leaderboard.js';
import {createLeaderboardUI} from './leaderboard-ui.js';
import {createDiagnostics,createDiagnosticUI} from './diagnostics.js';
import {createDiagnosticActions} from './diagnostic-actions.js';
import {createInventory,createInventoryUI,ITEMS} from './inventory.js';
import {createInventoryModelPreviews} from './inventory-models.js';
import {createEquippedModel} from './equipped-model.js';
import {createTestingHighlights,createTestingModeUI} from './testing-highlights.js';
import {createInteractionTargets} from './interaction-targets.js';
import {PLAYER_CHAIR} from './rescue-state.js';
import * as THREE from './vendor/three.module.js';
import {renderQuality as quality,drawingPixelRatio} from './render-quality.js';
import {batchStaticScenery} from './static-batching.js';
import {createRoomReflections} from './room-reflections.js';
import {createPerformanceReport} from './performance-report.js';
import {createFrameRateCounter} from './frame-rate.js';
import { createOffice } from './office.js?v=fewer-faster';
import { createFigpalBubbles, createHangingPleas, createFigpalLoweringDialogue } from './figpal-finale.js?v=silent-skeletons';
import { createPlayerRestraint } from './player-restraint.js?v=key-lock';
import { createRestraintMenu } from './restraint-menu.js?v=key-lock';
import { FIGPAL_INTERVAL_SECONDS,formatCountdown } from './countdown-clock.js';
import {createCountdownHUD} from './countdown-hud.js';
import {createSceneRaycaster} from './scene-picking.js';
import {createAttemptTracker} from './attempts.js';
import {createGameOverShare,createVictoryShare} from './game-over-share.js';
import {createLaptopProgram} from './laptop-program.js';
import { createDialogueSpeech, dialogueMouthAmount } from './dialogue-speech.js';
import { figsawIdlePose } from './character-motion.js';
import { createArrivalCameraMove } from './arrival-camera.js';
import {createFigsawDeparture,createFigsawCornerReaction,FIGSAW_CORNER_LINE} from './figsaw-departure.js';
import { createLaptopOpening } from './laptop-opening.js';
import { createDrawerCamera } from './drawer-camera.js';
import { createFigpalRounds } from './figpal-rounds.js';
import {createHazardClock} from './hazard-clock.js';
import { createFigpalCamera } from './figpal-camera.js';
import { createAcidCamera } from './acid-camera.js';
import {createChairSeat} from './chair-seat.js';
import { createAlarmCamera } from './alarm-camera.js';
import {createMobileCamera} from './mobile-camera.js';
import {createMobilePuzzleState,createEscapePuzzle} from './mobile-puzzle-state.js';
import {createDocumentViewer} from './wall-documents.js';
import {createMobileInspection,createMobileInspectionUI} from './mobile-inspection.js';
import {createDoorKeypadUI} from './door-keypad.js';
import { createAxeInteraction } from './fire-axe.js';
import { createSawTrap } from './saw-trap.js';
import { createSawMenu } from './saw-menu.js';
import { createMugImpactOverlay } from './mug-impact.js';
import { createMugTrap } from './mug-trap.js?v=locked-mug';

import {createTouchNavigation} from './touch-navigation.js';
import {createContactShadows} from './contact-shadows.js';
import {applySceneBudget,useMobileMaterials} from './scene-budget.js';
import {installGraphicsRecovery} from './graphics-recovery.js';
import {createStartupProgress} from './startup-progress.js';
import {createGameOverTransition,gameOverReason,resolveGameOverCause} from './game-over-transition.js';
const loadingStatus=document.querySelector('#loading-status');
const startupProgress=createStartupProgress(loadingStatus);
startupProgress.update('Creating Figsaw…');
const yieldStartup=async message=>{startupProgress.update(message);await new Promise(resolve=>setTimeout(resolve,0));};
const canvas=document.querySelector('#scene');
const attempts=createAttemptTracker();
const initialCanvasDescription=canvas.getAttribute('aria-label');
const reducedMotion=matchMedia('(prefers-reduced-motion: reduce)').matches;
const homeCamera={position:[1.85221,.821615,3.1149],lookAt:[1.293346,.717709,2.292176],fov:62};
const homePosition=new THREE.Vector3(...homeCamera.position);
const homeDirection=new THREE.Vector3(...homeCamera.lookAt).sub(homePosition).normalize();
const homeView={yaw:Math.atan2(-homeDirection.x,-homeDirection.z),pitch:Math.asin(homeDirection.y)};
const state={yaw:homeView.yaw,pitch:homeView.pitch,zoom:1,jaw:0,space:false,time:0,talkUntil:0};
const renderer=new THREE.WebGLRenderer({canvas,antialias:!quality.mobile,alpha:false,powerPreference:quality.mobile?'default':'high-performance'});
renderer.setPixelRatio(quality.pixelRatio);
renderer.localClippingEnabled=true;
renderer.shadowMap.enabled=quality.shadows;
renderer.shadowMap.autoUpdate=false;
renderer.shadowMap.type=THREE.PCFSoftShadowMap;
renderer.outputColorSpace=THREE.SRGBColorSpace;
renderer.toneMapping=THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure=.76;
const scene=new THREE.Scene();scene.background=new THREE.Color(0x161d18);scene.fog=new THREE.Fog(0x232d22,11,26);
const profiler=createPerformanceReport(renderer,scene);
const frameRate=createFrameRateCounter(document.querySelector('#frame-rate'));
const camera=new THREE.PerspectiveCamera(homeCamera.fov,1,.06,35);
const cameraPosition=homePosition.clone();
const arrivalCameraMove=createArrivalCameraMove(homeCamera.fov);
const cameraTarget=new THREE.Vector3(),viewDirection=new THREE.Vector3();
const hemi=new THREE.HemisphereLight(0x91a5a0,0x242c28,.62);hemi.userData.mobileEssential=true;scene.add(hemi);
const fluorescentPower=17.5;
const fluorescent=new THREE.SpotLight(0xc4d2b0,fluorescentPower,12,1.25,.72,2);fluorescent.position.set(.22,2.83,-.55);fluorescent.target.position.set(0,0,-.1);fluorescent.castShadow=quality.shadows;
fluorescent.shadow.mapSize.set(quality.shadowSize,quality.shadowSize);fluorescent.shadow.camera.near=.1;fluorescent.shadow.camera.far=11;fluorescent.shadow.normalBias=.0025;fluorescent.shadow.bias=-.00005;fluorescent.userData.mobileEssential=true;scene.add(fluorescent,fluorescent.target);
const windowLight=new THREE.DirectionalLight(0x9cb4b5,.85);windowLight.position.set(6.2,4.1,-1.6);windowLight.target.position.set(-1,.35,-.3);windowLight.castShadow=!quality.mobile;windowLight.shadow.mapSize.set(1024,1024);windowLight.shadow.camera.left=-6;windowLight.shadow.camera.right=6;windowLight.shadow.camera.top=5;windowLight.shadow.camera.bottom=-5;windowLight.shadow.normalBias=.003;windowLight.shadow.bias=-.00006;windowLight.userData.mobileEssential=true;scene.add(windowLight,windowLight.target);
const doorwayLight=new THREE.PointLight(0x8ea6a4,2.2,10,2);doorwayLight.position.set(-1,2.6,4.0);scene.add(doorwayLight);

const mix=THREE.MathUtils.lerp;
function mat(color,roughness=.9){ return quality.mobile?new THREE.MeshLambertMaterial({color}):new THREE.MeshStandardMaterial({color,roughness}); }
function mesh(geometry,material,parent=scene){const m=new THREE.Mesh(geometry,material);m.castShadow=true;m.receiveShadow=true;parent.add(m);return m;}
function ball(parent,color,position,scale,detail=3){const m=mesh(new THREE.IcosahedronGeometry(1,quality.mobile?Math.min(detail,2):detail),typeof color==='string'||typeof color==='number'?mat(color):color,parent);m.position.set(...position);m.scale.set(...scale);return m;}
function tube(points,radius,material,parent,closed=false){const c=new THREE.CatmullRomCurve3(points.map(p=>p.isVector3?p:new THREE.Vector3(...p)),closed);return mesh(new THREE.TubeGeometry(c,Math.max(quality.mobile?12:24,points.length*2),radius,quality.mobile?5:8,closed),material,parent);}

// Rough lipstick pigment follows the stone, including the subtly raised cheeks.
function lipstickTexture(){
 const c=document.createElement('canvas');c.width=c.height=quality.mobile?512:1024;const ctx=c.getContext('2d');
 let brushSeed=2718;const rand=()=>{brushSeed=(brushSeed*1664525+1013904223)>>>0;return brushSeed/4294967296;};
 const project=([x,y])=>[(x+2)/4*c.width,(1-y/3)*c.height];
 function stroke(points,width,colors=['rgba(211,12,57,.66)','rgba(227,17,62,.50)']){
  const p=points.map(project);ctx.lineCap='round';ctx.lineJoin='round';
  for(let pass=0;pass<3;pass++){
   ctx.strokeStyle=colors[pass===0?0:1];
   for(let i=1;i<p.length;i++){
    const wobble=(Math.sin(i*1.37+pass)*.08+Math.sin(i*.42)*.1);
    ctx.lineWidth=width*c.width/4*(1+wobble)*(pass===0?1.13:.77);
    const dx=(rand()-.5)*1.5,dy=(rand()-.5)*1.5;
    ctx.beginPath();ctx.moveTo(p[i-1][0]+dx,p[i-1][1]+dy);ctx.lineTo(p[i][0]+dx,p[i][1]+dy);ctx.stroke();
   }
  }
 }
 // The wide black mouth line continues across the cheeks beyond the short lipstick stroke.
 const wideMouth=[];for(let i=0;i<=140;i++){const u=i/140,x=mix(-1.65,1.23,u);const curl=.16*Math.exp(-Math.pow((x+1.65)/.26,2))+.06*Math.pow(Math.max(0,(x-.42)/.81),2);wideMouth.push([x,1.45-curl+.006*Math.sin(u*12)]);}
 stroke(wideMouth,.075,['rgba(23,25,24,.98)','rgba(23,25,24,.94)']);
 const lips=[];for(let i=0;i<=80;i++){const u=i/80;lips.push([mix(-.68,.42,u),1.452+.009*Math.sin(u*15)+.012*Math.sin(u*7)]);}
 stroke(lips,.18);
 for(const side of[-1,1]){
  const spiral=[],cx=side===-1?-1.13:1.15,cy=1.68;
  for(let i=0;i<=240;i++){const f=i/240,a=f*Math.PI*6.1,r=.017+f*.272+.003*Math.sin(f*39+side);spiral.push([cx+Math.cos(a)*r,cy+Math.sin(a)*r*.92+.003*Math.sin(f*43)]);}
  stroke(spiral,.047);
 }
 // Fine gaps and dry, streaky edges suggest wax dragged across rough stone.
 ctx.globalCompositeOperation='destination-out';
 for(let i=0;i<14000;i++){ctx.fillStyle=`rgba(0,0,0,${.08+rand()*.48})`;const x=rand()*c.width,y=rand()*c.height;ctx.fillRect(x,y,.35+rand()*1.2,.4+rand()*1.8);}
 for(let i=0;i<1600;i++){ctx.strokeStyle=`rgba(0,0,0,${.05+rand()*.17})`;ctx.lineWidth=.4+rand()*.7;const x=rand()*c.width,y=rand()*c.height;ctx.beginPath();ctx.moveTo(x,y);ctx.lineTo(x+2+rand()*6,y+rand()*2-1);ctx.stroke();}
 const texture=new THREE.CanvasTexture(c);texture.colorSpace=THREE.SRGBColorSpace;texture.anisotropy=Math.min(quality.mobile?2:8,renderer.capabilities.getMaxAnisotropy());return texture;
}
const pigment=lipstickTexture();
// Sculpted stone and moss remain procedural beneath the flat lipstick pigment.
const rockMaterial=new THREE.MeshStandardMaterial({color:0xd3d5ca,roughness:.94});
rockMaterial.onBeforeCompile=(shader)=>{
 shader.uniforms.lipstickPaint={value:pigment};
 shader.vertexShader='varying vec3 vStone;\n'+shader.vertexShader;
 shader.vertexShader=shader.vertexShader.replace('#include <begin_vertex>','#include <begin_vertex>\nvStone = position;');
 shader.fragmentShader=`varying vec3 vStone;
 uniform sampler2D lipstickPaint;
 float hash3(vec3 p){return fract(sin(dot(p,vec3(127.1,311.7,74.7)))*43758.5453);}
 float stoneNoise(vec3 p){vec3 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);return mix(mix(mix(hash3(i),hash3(i+vec3(1,0,0)),f.x),mix(hash3(i+vec3(0,1,0)),hash3(i+vec3(1,1,0)),f.x),f.y),mix(mix(hash3(i+vec3(0,0,1)),hash3(i+vec3(1,0,1)),f.x),mix(hash3(i+vec3(0,1,1)),hash3(i+vec3(1,1,1)),f.x),f.y),f.z);}
 `+shader.fragmentShader;
 shader.fragmentShader=shader.fragmentShader.replace('#include <color_fragment>',`#include <color_fragment>
 float grain=stoneNoise(vStone*53.);float fleck=stoneNoise(vStone*142.);float mottled=stoneNoise(vStone*5.);
 float edge=.43 + vStone.x*.53 + .21*sin(vStone.z*5.+vStone.x*3.)+(stoneNoise(vStone*4.)-.5)*.34;
 float moss=1.-smoothstep(-.045,.045,vStone.y-edge);
 vec2 mossSpot=(vStone.xy-vec2(-.13,.88))/vec2(.31,.20);
 float mossPatch=(1.-smoothstep(.94,1.08,length(mossSpot)+(mottled-.5)*.16))*smoothstep(.70,.95,vStone.z);
 moss=max(moss,mossPatch*.97);
 vec3 stone=diffuseColor.rgb*(.79+mottled*.17+grain*.12);
 vec3 green=mix(vec3(.20,.32,.075),vec3(.40,.53,.17),grain*.6+mottled*.4);
 diffuseColor.rgb=mix(stone,green,moss);
 diffuseColor.rgb*=.91+fleck*.17;
 vec4 paint=texture2D(lipstickPaint,vec2((vStone.x+2.)/4.,vStone.y/3.));
 float pigmentMask=paint.a*smoothstep(.40,.65,vStone.z);
 diffuseColor.rgb=mix(diffuseColor.rgb,paint.rgb*(.84+grain*.19),pigmentMask);
 `);
};
const dark=mat(0x201e22,.98), tongueMat=mat(0x702738,.98);
const cavityMaterial=new THREE.MeshBasicMaterial({color:0x080609,side:THREE.DoubleSide});
const model=new THREE.Group();model.name='Figsaw and tricycle';scene.add(model);

// A vintage tricycle supports the rock directly on its saddle.
const tricycle=new THREE.Group();tricycle.name='Figsaw’s red tricycle';model.add(tricycle);
const enamel=new THREE.MeshStandardMaterial({color:0xc93338,roughness:.44,metalness:.28});
const chrome=new THREE.MeshStandardMaterial({color:0xaeb5b3,roughness:.34,metalness:.72});
const spokeMaterial=new THREE.MeshStandardMaterial({color:0x535a59,roughness:.46,metalness:.65});
const gripMaterial=mat(0x87242b,.86);
const rubber=mat(0x171c1b,.93),saddleMaterial=mat(0x242725,.85);
function rod(parent,start,end,radius,material){
 const a=new THREE.Vector3(...start),b=new THREE.Vector3(...end),delta=b.clone().sub(a);
 const part=mesh(new THREE.CylinderGeometry(radius,radius,delta.length(),16),material,parent);
 part.position.copy(a).add(b).multiplyScalar(.5);part.quaternion.setFromUnitVectors(new THREE.Vector3(0,1,0),delta.normalize());return part;
}
const spinningWheels=[];
function wheel(x,y,z,radius,spokes){
 const group=new THREE.Group();group.position.set(x,y,z);group.rotation.y=Math.PI/2;group.name=spokes===8?'Large front wheel':'Small rear wheel';tricycle.add(group);
 group.userData.radius=radius;spinningWheels.push(group);
 const tireWidth=radius>.7?.045:.033;
 mesh(new THREE.TorusGeometry(radius-tireWidth,tireWidth,12,80),rubber,group);
 mesh(new THREE.TorusGeometry(radius-tireWidth*2,.018,10,80),spokeMaterial,group);
 for(const side of[-1,1]){
  const trim=mesh(new THREE.TorusGeometry(radius-tireWidth*1.65,.006,6,80),chrome,group);trim.position.z=side*.024;
 }
 for(let i=0;i<spokes;i++){
  const a=i/spokes*Math.PI*2+.16;
  rod(group,[0,0,0],[Math.cos(a)*(radius-tireWidth*2),Math.sin(a)*(radius-tireWidth*2),0],radius>.7?.013:.011,spokeMaterial);
 }
 rod(group,[0,0,-.14],[0,0,.14],.082,enamel);
 for(const side of[-1,1])ball(group,chrome,[0,0,side*.15],[.061,.061,.027],2);
 return group;
}
const frontAxleY=1.39,frontAxleZ=1.52,rearAxleY=.89,rearAxleZ=-1.23;
wheel(0,frontAxleY,frontAxleZ,.86,8);
wheel(-1.05,rearAxleY,rearAxleZ,.36,6);
wheel(1.05,rearAxleY,rearAxleZ,.36,6);
rod(tricycle,[-1.16,rearAxleY,rearAxleZ],[1.16,rearAxleY,rearAxleZ],.045,spokeMaterial);
// A broad curved steel strip runs from the rear axle to the steering head.
const frameCurve=new THREE.CatmullRomCurve3([[0,.89,-1.23],[0,1.24,-1.03],[0,1.65,-.55],[0,1.95,.05],[0,2.14,.73],[0,2.19,1.22]].map(p=>new THREE.Vector3(...p)));
const framePoints=[],frameIndices=[],frameSegments=64;
for(let i=0;i<=frameSegments;i++){
 const p=frameCurve.getPoint(i/frameSegments),tangent=frameCurve.getTangent(i/frameSegments);
 const normal=new THREE.Vector3(0,-tangent.z,tangent.y).normalize();
 for(const [x,edge] of [[-.055,-1],[.055,-1],[.055,1],[-.055,1]]){
  framePoints.push(p.x+x,p.y+normal.y*.074*edge,p.z+normal.z*.074*edge);
 }
 if(i<frameSegments)for(let edge=0;edge<4;edge++){
  const a=i*4+edge,b=i*4+(edge+1)%4;frameIndices.push(a,b+4,b,a,a+4,b+4);
 }
}
frameIndices.push(0,1,2,0,2,3);
const frameEnd=frameSegments*4;frameIndices.push(frameEnd,frameEnd+2,frameEnd+1,frameEnd,frameEnd+3,frameEnd+2);
const frameGeometry=new THREE.BufferGeometry();frameGeometry.setAttribute('position',new THREE.Float32BufferAttribute(framePoints,3));frameGeometry.setIndex(frameIndices);frameGeometry.computeVertexNormals();
mesh(frameGeometry,enamel,tricycle);
rod(tricycle,[0,1.72,-.45],[0,2.02,-.45],.064,enamel);
const deck=mesh(new THREE.BoxGeometry(1.91,.07,.29),enamel,tricycle);deck.position.set(0,.99,rearAxleZ);
for(let i=-5;i<=5;i++){
 const tread=mesh(new THREE.BoxGeometry(.012,.006,.24),gripMaterial,tricycle);tread.position.set(i*.16,1.028,rearAxleZ);
}
const saddleShape=new THREE.Shape();saddleShape.moveTo(-.20,-.58);
saddleShape.bezierCurveTo(-.30,-.18,-.72,.02,-.70,.34);
saddleShape.bezierCurveTo(-.66,.57,.66,.57,.70,.34);
saddleShape.bezierCurveTo(.72,.02,.30,-.18,.20,-.58);
saddleShape.quadraticCurveTo(0,-.70,-.20,-.58);
const saddle=mesh(new THREE.ExtrudeGeometry(saddleShape,{depth:.08,bevelEnabled:true,bevelSize:.035,bevelThickness:.025,bevelSegments:3,steps:1,curveSegments:20}),saddleMaterial,tricycle);
saddle.rotation.x=-Math.PI/2;saddle.position.set(0,2.0,-.45);
// Two fork legs straddle the front wheel and lead into the steering head.
for(const side of[-1,1]){
 tube([[side*.16,frontAxleY,frontAxleZ],[side*.18,1.76,1.48],[side*.17,2.10,1.29],[side*.10,2.27,1.20]],.046,enamel,tricycle);
}
rod(tricycle,[0,2.15,1.22],[0,2.43,1.17],.084,enamel);
// A raised U-shaped bar has a level crosspiece and tall, backswept grip ends.
tube([[0,2.36,1.18],[0,2.52,1.18],[0,2.63,1.34],[0,2.69,1.43]],.046,chrome,tricycle);
tube([[-1.11,2.99,.86],[-1.10,2.98,1.12],[-1.04,2.88,1.35],[-.87,2.71,1.46],[-.60,2.69,1.45],[0,2.69,1.43],[.60,2.69,1.45],[.87,2.71,1.46],[1.04,2.88,1.35],[1.10,2.98,1.12],[1.11,2.99,.86]],.048,chrome,tricycle);
rod(tricycle,[-.10,2.69,1.43],[.10,2.69,1.43],.064,chrome);
ball(tricycle,spokeMaterial,[0,2.69,1.491],[.027,.027,.015],2);
for(const side of[-1,1]){
 rod(tricycle,[side*1.10,2.98,1.12],[side*1.11,2.99,.86],.061,gripMaterial);
 ball(tricycle,spokeMaterial,[side*1.11,2.99,.85],[.061,.061,.022],2);
}
// Direct-drive cranks turn with the front wheel, with level pedal platforms.
const crank=new THREE.Group();crank.name='Rotating pedal crank';crank.position.set(0,frontAxleY,frontAxleZ);tricycle.add(crank);
const pedalPlatforms=[];
for(const side of[-1,1]){
 const pedalY=side*.17,pedalZ=-side*.19;
 rod(crank,[side*.17,0,0],[side*.30,pedalY,pedalZ],.025,chrome);
 rod(crank,[side*.30,pedalY,pedalZ],[side*.53,pedalY,pedalZ],.023,chrome);
 const platform=new THREE.Group();platform.position.set(side*.44,pedalY,pedalZ);crank.add(platform);pedalPlatforms.push(platform);
 mesh(new THREE.BoxGeometry(.27,.075,.19),rubber,platform);
 for(let j=-1;j<=1;j++){const rib=mesh(new THREE.BoxGeometry(.24,.008,.012),saddleMaterial,platform);rib.position.set(0,.041,j*.05);}
}
function setRollingDistance(distance){
 for(const wheel of spinningWheels)wheel.rotation.z=distance/wheel.userData.radius;
 crank.rotation.x=distance/.86;
 for(const platform of pedalPlatforms)platform.rotation.x=-crank.rotation.x;
}
ball(tricycle,chrome,[-.47,2.76,1.45],[.085,.055,.085]);
rod(tricycle,[-.47,2.75,1.45],[-.57,2.77,1.45],.016,rubber);
const riderScale=.72,riderSeatY=2.08;
const puppet=new THREE.Group();puppet.scale.setScalar(riderScale);puppet.position.set(0,riderSeatY,-.45);model.add(puppet);
const bodyHeight=2.8,rows=quality.mobile?32:64,cols=quality.mobile?80:160,cutRow=rows/2,halfMouth=Math.PI/10;
const mouthCenter=-.13,mouthTop=.05+cutRow/rows*bodyHeight,maxMouthTravel=.12;
function radius(t){return 2.05*Math.pow(Math.max(0,Math.sin(Math.PI*t)),.40)*(1.19-.45*t);}
function rawSurface(t,a){
 const r=radius(t),noise=1+.018*Math.sin(a*5+t*9)+.012*Math.cos(a*9-t*7);
 // A small amount of fullness keeps the lower face rounded without a projecting chin.
 const s=THREE.MathUtils.clamp(t/(cutRow/rows),0,1);
 const muzzle=t<cutRow/rows?.20*Math.pow(Math.sin(Math.PI*s),.8)*Math.pow(Math.max(0,Math.cos(a)),3):0;
 const p=new THREE.Vector3(Math.sin(a)*r*noise-.28*t,.05+t*bodyHeight,Math.cos(a)*r*.68*noise+muzzle);
 // Soft cheek domes lift the painted spirals slightly out of the stone.
 const front=THREE.MathUtils.smoothstep(Math.cos(a),.25,.65);
 for(const cx of[-1.13,1.15]){
  const q=((p.x-cx)/.36)**2+((p.y-1.68)/.33)**2;
  if(q<1)p.z+=.09*(1-q)**2*front;
 }
 // Broad, smoothly fading domes keep the rear round without a sharp shoulder.
 const rear=THREE.MathUtils.smoothstep(-Math.cos(a),.55,.90);
 let fullness=0;
 for(const cx of[-.68,.53]){
  const q=((p.x-cx)/1.02)**2+((p.y-.90)/.91)**2;
  const cap=.76*Math.exp(-q);
  // Blend the larger dome rather than stacking their overlap into a central point.
  const blend=Math.max(.08-Math.abs(fullness-cap),0)/.08;
  fullness=Math.max(fullness,cap)+blend*blend*.02;
 }
 p.z-=fullness*rear*THREE.MathUtils.smoothstep(t,0,.13)*(1-THREE.MathUtils.smoothstep(t,.72,1));
 return p;
}
function angleAtX(t,x){let low=-Math.PI/2,high=Math.PI/2;for(let i=0;i<22;i++){const mid=(low+high)/2;if(rawSurface(t,mid).x<x)low=mid;else high=mid;}return(low+high)/2;}
// Keep each seam beneath its lip corner in the rock's own coordinates.
// A slight hand-drawn bend softens the lines without skewing the jaw to one side.
const seamStarts=[rawSurface(cutRow/rows,-halfMouth).x,rawSurface(cutRow/rows,halfMouth).x],seamCache=new Map();
function seamAngles(t){
 if(t===0||t>=cutRow/rows)return[-halfMouth,halfMouth];
 const key=t.toFixed(7);if(seamCache.has(key))return seamCache.get(key);
 const s=t/(cutRow/rows),bend=Math.sin(Math.PI*s);
 const angles=[angleAtX(t,seamStarts[0]-.018*bend),angleAtX(t,seamStarts[1]+.018*bend)];
 seamCache.set(key,angles);return angles;
}
function slotSurface(t,a){
 if(t<=cutRow/rows){const[left,right]=seamAngles(t);
  if(a<-halfMouth)a=mix(-Math.PI,left,(a+Math.PI)/(Math.PI-halfMouth));
  else if(a<=halfMouth)a=mix(left,right,(a+halfMouth)/(halfMouth*2));
  else a=mix(right,Math.PI,(a-halfMouth)/(Math.PI-halfMouth));
 }
 return rawSurface(t,a);
}
function faceZ(x,y){const t=(y-.05)/bodyHeight;return rawSurface(t,angleAtX(t,x)).z;}
function patchGeometry(jaw=false,inside=false){
 const pos=[],indices=[];const start=jaw?-halfMouth:-Math.PI,end=jaw?halfMouth:Math.PI,nc=jaw?20:cols,nr=jaw?cutRow:rows;
 for(let r=0;r<=nr;r++){for(let c=0;c<=nc;c++){const p=slotSurface(r/rows,mix(start,end,c/nc));if(inside)p.z=Math.min(p.z-.24,.72);pos.push(p.x,p.y,p.z);}}
 for(let r=0;r<nr;r++){for(let c=0;c<nc;c++){const angle=mix(start,end,(c+.5)/nc);if(!jaw&&r<cutRow&&Math.abs(angle)<halfMouth-.0001)continue;const a=r*(nc+1)+c,b=a+1,d=a+nc+2,cc=a+nc+1;indices.push(a,b,cc,b,d,cc);}}
 const geo=new THREE.BufferGeometry();geo.setAttribute('position',new THREE.Float32BufferAttribute(pos,3));geo.setIndex(indices);geo.computeVertexNormals();return geo;
}
// An inverted hull gives the stone a thick black outline from every camera angle.
const outlineMaterial=new THREE.MeshBasicMaterial({color:0x171918,side:THREE.BackSide});
outlineMaterial.onBeforeCompile=shader=>{shader.vertexShader=shader.vertexShader.replace('#include <begin_vertex>','#include <begin_vertex>\ntransformed += normal * 0.058;');};
function outline(geometry,parent){const o=new THREE.Mesh(geometry,outlineMaterial);o.name='Black stone outline';parent.add(o);return o;}
const bodyGeometry=patchGeometry();const body=mesh(bodyGeometry,rockMaterial,puppet);body.name='Figsaw';outline(bodyGeometry,puppet);
 // A short curved crease makes the rounded rear read as a cartoon butt.
 const rearCrease=[];
 for(let i=0;i<=18;i++){
  const f=i/18,t=(mix(1.28,.33,f)-.05)/bodyHeight;
  const p=rawSurface(t,Math.PI+.018*Math.sin(f*Math.PI));p.z-=.012;rearCrease.push(p);
 }
 const buttCrease=tube(rearCrease,.021,new THREE.MeshBasicMaterial({color:0x252820}),puppet);buttCrease.name='Rounded cartoon butt crease';
// The mouth is an opening in the stone. Its dark backing stays deep inside,
// without dark walls following the projecting muzzle's outer surface.
const cavity=mesh(patchGeometry(true,true),cavityMaterial,puppet);cavity.castShadow=false;
function mouthInterior(parent,lower=false){
 const positions=[],indices=[];
 for(let i=0;i<=40;i++){
  const p=slotSurface(cutRow/rows,mix(-halfMouth,halfMouth,i/40));
  const y=p.y+(lower?-.008:.008);
  positions.push(p.x,y,p.z-.075,p.x,y,.70);
  if(i<40){const a=i*2;indices.push(a,a+1,a+2,a+1,a+3,a+2);}
 }
 const geo=new THREE.BufferGeometry();geo.setAttribute('position',new THREE.Float32BufferAttribute(positions,3));geo.setIndex(indices);geo.computeVertexNormals();
 const interior=mesh(geo,cavityMaterial,parent);interior.castShadow=false;
}
mouthInterior(puppet);
const jaw=new THREE.Group();puppet.add(jaw);
// Close the jaw's shell so its rounded underside also gets a silhouette outline.
function solidJawGeometry(){
 const front=patchGeometry(true),positions=Array.from(front.attributes.position.array),indices=Array.from(front.index.array),count=front.attributes.position.count;
 for(let i=0;i<count;i++)positions.push(positions[i*3],positions[i*3+1],positions[i*3+2]-.14);
 const outerIndices=indices.slice();for(let i=0;i<outerIndices.length;i+=3)indices.push(outerIndices[i]+count,outerIndices[i+2]+count,outerIndices[i+1]+count);
 const edge=[];for(let c=0;c<=20;c++)edge.push(c);for(let r=1;r<=cutRow;r++)edge.push(r*21+20);for(let c=19;c>=0;c--)edge.push(cutRow*21+c);for(let r=cutRow-1;r>0;r--)edge.push(r*21);
 for(let i=0;i<edge.length;i++){const a=edge[i],b=edge[(i+1)%edge.length];indices.push(a,a+count,b,b,a+count,b+count);}
 front.setAttribute('position',new THREE.Float32BufferAttribute(positions,3));front.setIndex(indices);front.deleteAttribute('normal');front.computeVertexNormals();return front;
}
const jawGeometry=solidJawGeometry();const jawMaterial=rockMaterial.clone();jawMaterial.onBeforeCompile=rockMaterial.onBeforeCompile;mesh(jawGeometry,jawMaterial,jaw);outline(jawGeometry,jaw);
mouthInterior(jaw,true);
ball(jaw,tongueMat,[mouthCenter,mouthTop-.025,.83],[.25,.016,.055]);
const mouthLine=[];for(let i=0;i<=30;i++){const p=slotSurface(cutRow/rows,mix(-halfMouth,halfMouth,i/30));p.z+=.002;mouthLine.push(p);}tube(mouthLine,.008,dark,puppet);
for(const side of[-1,1]){
 const seam=[];for(let i=4;i<=cutRow;i++){const p=slotSurface(i/rows,side*halfMouth);p.z+=.009;seam.push(p);}tube(seam,.033,new THREE.MeshBasicMaterial({color:0x171918}),puppet);
}
// Open, unblinking eyes track the viewer between smooth glances around the room.
const trackingEyes=[];
// A trace of red remains legible during the fluorescent's dim phases.
const irisMaterial=mat(0xf51528,.36);irisMaterial.emissive.set(0xb90d1a);irisMaterial.emissiveIntensity=.12;
const idlePose={headYaw:0,gazeYaw:0,gazePitch:0};
const gazeOrigin=new THREE.Vector3(),gazeDirection=new THREE.Vector3(),gazeTarget=new THREE.Vector3();
const gazeUp=new THREE.Vector3(0,1,0),previousEyeRotation=new THREE.Quaternion();
for(const side of[-1,1]){
 const x=side*.42-.09,y=1.84+(side===-1?.045:0),z=faceZ(x,y)+.044;
 const eye=new THREE.Group();eye.position.set(x,y,z);puppet.add(eye);trackingEyes.push(eye);
 ball(eye,mat(0x101015,.25),[0,0,0],[.156,.156,.075]);
 ball(eye,irisMaterial,[0,0,.055],[.084,.084,.029]);
 ball(eye,mat(0x0a090c,.32),[0,0,.074],[.039,.039,.016]);
}
// A small red fabric bow tie sits below the jaw's full travel, attached to the stone.
const bowTie=new THREE.Group();bowTie.name='Red bow tie';bowTie.position.set(mouthCenter,.40,faceZ(mouthCenter,.40)+.065);jaw.add(bowTie);
const ribbonMaterial=new THREE.MeshPhysicalMaterial({color:0xc71326,roughness:.76,sheen:.55,sheenColor:0xf04a53,sheenRoughness:.82});
const wingShape=new THREE.Shape();
wingShape.moveTo(.055,.065);
wingShape.bezierCurveTo(.18,.085,.32,.185,.43,.19);
wingShape.quadraticCurveTo(.49,.19,.485,.12);
wingShape.bezierCurveTo(.47,.03,.50,-.075,.48,-.14);
wingShape.quadraticCurveTo(.47,-.195,.40,-.175);
wingShape.bezierCurveTo(.27,-.14,.15,-.07,.055,-.06);
wingShape.closePath();
const wingGeometry=new THREE.ExtrudeGeometry(wingShape,{depth:.055,bevelEnabled:true,bevelSize:.018,bevelThickness:.018,bevelSegments:3,steps:1,curveSegments:18});
for(const side of[-1,1]){
 const wing=mesh(wingGeometry,ribbonMaterial,bowTie);wing.scale.x=side;wing.rotation.y=-side*.10;
 const creaseMaterial=mat(0x98101e,.9);
 for(const fold of[-1,1])tube([[side*.09,fold*.026,.08],[side*.19,fold*.055,.087],[side*.34,fold*.11,.088]],.005,creaseMaterial,bowTie);
}
const knot=mesh(new THREE.SphereGeometry(1,24,16),ribbonMaterial,bowTie);knot.position.set(0,0,.07);knot.scale.set(.105,.12,.075);

// Half-size Figsaw rides from the shadowed coffee corner into the ceiling light's central pool.
const modelScale=.26,groundOffset=-.53*modelScale+.0036;
model.scale.setScalar(modelScale);
const entrancePath=new THREE.CatmullRomCurve3([
 [2.45,groundOffset,-2.40],[2.05,groundOffset,-1.70],[1.05,groundOffset,-1.28],
 [.35,groundOffset,-1.10],[.24,groundOffset,-.66],[.12,groundOffset,.10]
].map(point=>new THREE.Vector3(...point)),false,'centripetal');
entrancePath.arcLengthDivisions=240;
const departure=createFigsawDeparture(entrancePath,modelScale);
const cornerReaction=createFigsawCornerReaction(()=>departure.finished);
const entranceDelay=1.0,entranceDuration=8.5;
const entranceLength=entrancePath.getLength(),ridePoint=new THREE.Vector3(),rideDirection=new THREE.Vector3();
const arrivalDialogue=document.querySelector('#figsaw-dialogue');
const dialogueAnnouncement=document.querySelector('#dialogue-announcement');
const countdownReadout=document.querySelector('#game-countdown');
const countdownAnnouncement=document.querySelector('#countdown-announcement');
let countdownStartTime=null,lastCountdownSeconds=FIGPAL_INTERVAL_SECONDS;
const dialogueLines=[
 'I want to play a game...',
 "Those who don't appreciate design do not deserve it.",
 'Complete the design challenges to escape... but every 10 minutes one of your Figpals will be dropped into the tank of acid.',
 'Let the games begin...'
];
let dialogueLineIndex=-1,nextDialogueAt=Infinity;
const dialogueAnchor=new THREE.Vector3(),dialogueProjection=new THREE.Vector3();
const dialogueRay=createSceneRaycaster(),dialogueDirection=new THREE.Vector3();
let entranceStartedAt=0,entranceArrived=false,entranceArrivedAt=0,dialogueOccluded=false,nextDialogueVisibilityCheck=0,dialogueSpeech=null;
function showFigsawDialogue(index){
 const text=dialogueLines[index];dialogueLineIndex=index;
 arrivalDialogue.classList.toggle('long-dialogue',text.length>80);
 arrivalDialogue.querySelector('.dialogue-bubble span').textContent=text;
 dialogueAnnouncement.textContent=`Figsaw. ${text}`;
 const speech=createDialogueSpeech(text,state.time);
 dialogueSpeech=reducedMotion?null:speech;
 // Leave a beat between lines, then depart three seconds after the last line ends.
 nextDialogueAt=index<dialogueLines.length-1?speech.startTime+speech.duration+1:Infinity;
 if(index===dialogueLines.length-1)departure.schedule(speech.startTime+speech.duration);
 // Preserve the original countdown cue without restarting it for later lines.
 if(index===0)countdownStartTime=speech.startTime+speech.duration;
}
function updateEntrance(time){
 puppet.rotation.z=0;
 const departingDistance=departure.update(time,model,puppet,reducedMotion);
 if(departingDistance!==null){
  const shake=cornerReaction.shake(time,reducedMotion);puppet.rotation.y+=shake;puppet.rotation.z=shake*.5;
  setRollingDistance(departingDistance);figsawIdlePose(-1,reducedMotion,idlePose);return;
 }
 const elapsed=time-entranceStartedAt-entranceDelay;
 const progress=reducedMotion?1:THREE.MathUtils.smoothstep(elapsed,0,entranceDuration);
 entrancePath.getPointAt(progress,ridePoint);entrancePath.getTangentAt(progress,rideDirection);
 model.position.copy(ridePoint);model.rotation.y=Math.atan2(rideDirection.x,rideDirection.z);
 // Turn the stone partly toward the saved viewpoint while the wheels follow the route.
 const viewerYaw=Math.atan2(homePosition.x-ridePoint.x,homePosition.z-ridePoint.z);
 const relativeYaw=THREE.MathUtils.euclideanModulo(viewerYaw-model.rotation.y+Math.PI,Math.PI*2)-Math.PI;
 setRollingDistance(progress*entranceLength/modelScale);
 if(progress===1&&!entranceArrived){entranceArrived=true;entranceArrivedAt=time;arrivalCameraMove.start(state.time,cameraPosition,state);showFigsawDialogue(0);}
 figsawIdlePose(entranceArrived?time-entranceArrivedAt:-1,reducedMotion,idlePose);
 puppet.rotation.y=THREE.MathUtils.clamp(relativeYaw*.58,-.70,.70)+idlePose.headYaw;
}
updateEntrance(0);
function reactToFigsaw(){
 if(!departure.finished){state.talkUntil=state.time+1.8;return;}
 const speech=cornerReaction.react(state.time);if(!speech)return;
 arrivalDialogue.classList.remove('long-dialogue');
 arrivalDialogue.querySelector('.dialogue-bubble span').textContent=FIGSAW_CORNER_LINE;
 dialogueAnnouncement.textContent=`Figsaw. ${FIGSAW_CORNER_LINE}`;
 dialogueSpeech=reducedMotion?null:speech;nextDialogueVisibilityCheck=0;
}
profiler.mark('characterBuilt');
await yieldStartup('Building the office…');
const escapePuzzle=createEscapePuzzle(),inventory=createInventory();
const {group:office,rescueChairs,chairRefuge,documents,laptop,catMug,handsaw,stuffedAnimals,fallenMobile,mobileSupplies,doorKeypad,exitDoor,plushCut,acidLeaks,chargingKit,fireHazard,fireAlarm,fireAxe,ketchupKey,countdown,setDisplayEnvironment,update:updateOffice,figpalHoists,toggleHoist}=await createOffice(renderer,homePosition,yieldStartup,escapePuzzle);scene.add(office);
const countdownHUD=createCountdownHUD({timer:countdown,camera,occluders:[office,model],corner:document.querySelector('#timer-hud'),warning:document.querySelector('#countdown-warning'),reducedMotion});
profiler.mark('officeBuilt');
await yieldStartup('Preparing the room…');
const restraint=createPlayerRestraint(camera,{canDetach:()=>ketchupKey.hasKey});scene.add(restraint.group);
const laptopOpening=createLaptopOpening({laptop,restraint,cameraPosition,state});
const drawerCamera=createDrawerCamera({position:cameraPosition,state,getView:chargingKit.getDrawerView});
const acidCamera=createAcidCamera({position:cameraPosition,state});
const chairSeat=createChairSeat({position:cameraPosition,state,getView:chairRefuge.getView});
const alarmCamera=createAlarmCamera({position:cameraPosition,state});
const hazardClock=createHazardClock(state.time);
const mugTrap=createMugTrap({mug:catMug,camera,restraint});
const sawTrap=createSawTrap({saw:handsaw,camera,restraint,hasKey:()=>ketchupKey.hasKey});
const axeInteraction=createAxeInteraction({axe:fireAxe,camera,tanks:figpalHoists.tanks,onBreak(index,time,outlet){
 acidLeaks.breach(index,hazardClock.time,outlet);
}});scene.add(axeInteraction.group);
const cancelAxeSelection=document.querySelector('#cancel-axe-selection');
cancelAxeSelection.addEventListener('click',()=>{if(!axeInteraction.active){putAxeBack();canvas.focus({preventScroll:true});}});
const gameOver=document.querySelector('#game-over'),gameOverContent=gameOver.querySelector('.game-over-content');
const fireWarning=document.querySelector('#fire-warning');
const gameOverReasonText=document.querySelector('#game-over-reason');
const restartGame=document.querySelector('#restart-game'),mugEyeImpact=document.querySelector('#mug-eye-impact');
const mugImpactOverlay=createMugImpactOverlay(mugEyeImpact);
const deathTransition=createGameOverTransition(document.querySelector('#death-transition'));
const gameOverShare=createGameOverShare(document.querySelector('#game-over-share'));
const escapeScreen=document.querySelector('#escaped');
let diagnosticRunUsed=false;
const victoryShare=createVictoryShare(document.querySelector('#victory-share'));
const leaderboardUI=createLeaderboardUI({repository:createLocalLeaderboard(),root:document.querySelector('#victory-leaderboard'),button:document.querySelector('#top10-button'),canOpen:()=>!sawBusy()&&!laptopProgram.active&&!inventoryUI.active&&!documentViewer.active&&!mobilePuzzle.active,onOpen(){releaseControls();chainMenu.hide();sawMenu.hide();},onClose(){canvas.focus({preventScroll:true});},getCountdown:()=>countdown.status==='waiting'?null:lastCountdownSeconds,onRank:result=>victoryShare.prepare(result)});
for(const dialog of[gameOver,escapeScreen])dialog.addEventListener('keydown',event=>{
 if(event.key!=='Tab')return;
 const buttons=[...dialog.querySelectorAll('button,input,select,textarea')].filter(control=>!control.disabled&&!control.closest('[hidden]')),index=buttons.indexOf(document.activeElement);
 event.preventDefault();event.stopPropagation();buttons[(index+(event.shiftKey?-1:1)+buttons.length)%buttons.length]?.focus();
});
let gameEnded=false,gameWon=false,escapedAt=0;
document.querySelector('#new-game').addEventListener('click',()=>{resetView({skipIntro:true});canvas.focus({preventScroll:true});});
restartGame.addEventListener('click',()=>{resetView({skipIntro:true});canvas.focus({preventScroll:true});});
const restraintStatus=document.querySelector('#restraint-status');
const mobilePuzzle=createMobilePuzzleState(),mobileInspection=createMobileInspection({mobile:fallenMobile,state:mobilePuzzle});scene.add(mobileInspection.group);
const mobileCamera=createMobileCamera({position:cameraPosition,state,getTarget:mobileInspection.getTarget,aspect:()=>camera.aspect,baseFov:homeCamera.fov});
const mobileUI=createMobileInspectionUI({state:mobilePuzzle,time:()=>state.time,equipped:()=>inventory.equipped});
const doorKeypadUI=createDoorKeypadUI({keypad:doorKeypad,locked:()=>restraint.locked,onUnlock:escapeRoom,puzzle:escapePuzzle,onOpen:target=>documentViewer.show(target),onClose:immediate=>documentViewer.hide(immediate)});
const documentViewer=createDocumentViewer({documents,position:cameraPosition,state,aspect:()=>camera.aspect,baseFov:homeCamera.fov,scene,onOpen(){releaseControls();arrivalCameraMove.cancel();drawerCamera.pause();acidCamera.cancel();alarmCamera.cancel();resetting=false;chainMenu.hide();sawMenu.hide();canvas.focus({preventScroll:true});},onClose(){canvas.focus({preventScroll:true});}});
let selectingAnimal=false;
const cancelSawSelection=document.querySelector('#cancel-saw-selection');
cancelSawSelection.addEventListener('click',()=>{clearSawSelection();canvas.focus({preventScroll:true});});
let hoveredChair=false,hoveredDocument=null,hoveredFish=false,hoveredSupply=null,hoveredMobile=false,hoveredKeypad=false,hoveredAlarm=false,hoveredKeyAction=null,hoveredChargingAction=null;
const chainMenu=createRestraintMenu(()=>{
 if(!ketchupKey.hasKey){return;}
 if(restraint.detach(state.time)){restraintStatus.textContent='Your wrist is free.';canvas.classList.remove('over-chain');}
},{canDetach:()=>ketchupKey.hasKey});
const sawMenu=createSawMenu({onShackle:sawShackle,onAnimal:chooseStuffedAnimal,canSawShackle:()=>restraint.locked&&!ketchupKey.hasKey,canSawAnimal:()=>!restraint.locked&&stuffedAnimals.some(animal=>plushCut.canCut(animal.object))});
const figpalRounds=createFigpalRounds(figpalHoists,countdown,escapePuzzle);
const figpalCamera=createFigpalCamera({position:cameraPosition,state,getView:figpalHoists.getFocusView,baseFov:homeCamera.fov});
const figpalBubbles=createFigpalBubbles(figpalHoists.speechAnchors,canvas,figpalHoists.canSpeak);
const loweringDialogue=createFigpalLoweringDialogue(figpalHoists,figpalBubbles,figpalHoists.safeDescent);
const hangingPleas=createHangingPleas(figpalHoists,figpalBubbles);
// Diffuse mobile materials do not sample a reflection environment. Avoid the
// panorama conversion, render targets and PMREM shader compilation on phones.
if(!quality.mobile){const displayEnvironment=createRoomReflections(renderer);setDisplayEnvironment(displayEnvironment.texture);restraint.setEnvironment(displayEnvironment.texture);}
applySceneBudget(scene);
acidLeaks.bindTargets([office,model]);
// Simplify first: mobile materials that differed only in unused PBR properties
// can now share a draw call without changing their colours or moving parts.
useMobileMaterials(scene);
for(const rigid of[...spinningWheels,...pedalPlatforms,bowTie])batchStaticScenery(rigid,{minObjects:2,dispose:false,palette:quality.mobile});
batchStaticScenery(crank,{exclude:pedalPlatforms,minObjects:2,dispose:false,palette:quality.mobile});
batchStaticScenery(tricycle,{exclude:[...spinningWheels,crank],minObjects:2,dispose:false,palette:quality.mobile});
for(const animal of stuffedAnimals){
 batchStaticScenery(animal.headPose,{minObjects:2,palette:quality.mobile});
 batchStaticScenery(animal.object,{exclude:[animal.headPose,animal.object.getObjectByName('Split fabric seam and exposed stuffing')],minObjects:2,palette:quality.mobile});
}
batchStaticScenery(chairRefuge.object,{minObjects:2,palette:quality.mobile});
batchStaticScenery(office,{exclude:[rescueChairs.group,...rescueChairs.objects,...Object.values(rescueChairs.parts),chairRefuge.object,laptop.object,catMug,handsaw,...stuffedAnimals.map(animal=>animal.object),plushCut.group,figpalHoists.group,countdown.group,chargingKit.group,ketchupKey.group,fireHazard.group,fireAlarm.station,fireAlarm.effects,fireAxe.mount,fallenMobile.group,doorKeypad.group,exitDoor.object,...documents.targets],minObjects:2,palette:quality.mobile});
const contactShadows=quality.mobile?createContactShadows(scene,[laptop.object,catMug,handsaw,countdown.group,...figpalHoists.group.children.filter(o=>o.name.startsWith('Green bubbling canister'))],model):null;
profiler.mark('scenePrepared');
function updateArrivalDialogue(time){
 if(documentViewer.active||laptopProgram.active||mobilePuzzle.active||doorKeypadUI.active||!entranceArrived||(departure.active&&!cornerReaction.visible(time))||figpalRounds.active||fireAlarm.dying){arrivalDialogue.hidden=true;return;}
 // Keep the bubble attached to the crown as the viewer walks or turns around.
 puppet.localToWorld(dialogueAnchor.set(-.28,bodyHeight+.24,0));
 dialogueProjection.copy(dialogueAnchor).project(camera);
 // A portrait view can clip his crown while part of the rock is still visible.
 const horizontalMargin=Math.min(.7,.40/(camera.position.distanceTo(dialogueAnchor)*Math.tan(THREE.MathUtils.degToRad(camera.fov/2))*camera.aspect));
 if(dialogueProjection.z<-1||dialogueProjection.z>1||Math.abs(dialogueProjection.x)>1+horizontalMargin||Math.abs(dialogueProjection.y)>1){arrivalDialogue.hidden=true;return;}
 if(time>=nextDialogueVisibilityCheck){
  nextDialogueVisibilityCheck=time+(quality.mobile?.4:.12);
  dialogueDirection.copy(dialogueAnchor).sub(camera.position);const distance=dialogueDirection.length();
  dialogueRay.set(camera.position,dialogueDirection.normalize());dialogueRay.near=.06;dialogueRay.far=Math.max(.06,distance-.035);
  dialogueOccluded=dialogueRay.intersectObject(office,true).length>0;
 }
 // A click on the visible rider/bike already confirms the corner reaction's
 // visibility, even if the table blocks the ray to his crown.
 if(dialogueOccluded&&!cornerReaction.visible(time)){arrivalDialogue.hidden=true;return;}
 arrivalDialogue.hidden=false;
 const rect=canvas.getBoundingClientRect(),anchorX=rect.left+(dialogueProjection.x*.5+.5)*rect.width;
 const anchorY=rect.top+(-dialogueProjection.y*.5+.5)*rect.height;
 arrivalDialogue.style.transform=`translate3d(${anchorX}px,${anchorY-8}px,0) translate(-50%,-100%)`;
}
const interactionRay=createSceneRaycaster(),interactionPointer=new THREE.Vector2();
function interactionAt(event){
 const rect=canvas.getBoundingClientRect();
 interactionPointer.set((event.clientX-rect.left)/rect.width*2-1,-(event.clientY-rect.top)/rect.height*2+1);
 interactionRay.setFromCamera(interactionPointer,camera);
 // Pick the nearest surface so furniture and walls correctly occlude interactive objects.
 const sceneHit=interactionRay.intersectObjects([office,model,restraint.group,mobileInspection.group],true).find(hit=>{
  for(let object=hit.object;object;object=object.parent)if(!object.visible)return false;
  return true;
 });
 // Testing highlights are explicit click targets for the equipped item, even
 // when unrelated clutter is in front of its matching chair or tool socket.
 const hit=testingMode.enabled&&inventory.equipped?testingHighlights.pickMatching(interactionRay)??sceneHit:sceneHit;
 for(let object=hit?.object;object;object=object.parent){if(object===model&&departure.finished)return puppet;if(object===restraint.target||object===laptop.object||object===catMug||object===handsaw||object.userData.stuffedAnimal||object===puppet||Number.isInteger(object.userData.rescueChair)||Number.isInteger(object.userData.rescueSlot)||Number.isInteger(object.userData.chainAnchor)||Number.isInteger(object.userData.chainPickup)||object.userData.salvagePart||object.userData.chairSeat||object.userData.chargingAction||object.userData.keyAction||object.userData.fireAlarm||object.userData.fireAxe||object.userData.supplyAction||object.userData.mobilePuzzle||object.userData.exitKeypad||object.userData.keypadKey||object.userData.wallDocument||(object.userData.fishClue&&figpalHoists.fishClueReady)||(axeInteraction.held&&Number.isInteger(object.userData.tankIndex))||Number.isInteger(object.userData.valveIndex)||Number.isInteger(object.userData.hoistIndex))return object;}
 return null;
}
const leaveChairButton=document.querySelector('#leave-chair');
leaveChairButton.addEventListener('click',leaveChair);
function sitOnChair(){
 if(sawBusy()||mobilePuzzle.active||documentViewer.active||doorKeypadUI.active)return;
 if(restraint.locked){restraint.requestReach(state.time);return;}
 if(chairSeat.occupied)return;
 clearSawSelection();sawMenu.hide();prepareSawAction();
 chairSeat.sit(state.time,{locked:restraint.locked,dying:acidLeaks.dying});
}
function leaveChair(){
 if(sawBusy()||mobilePuzzle.active||drawerCamera.active||documentViewer.active||doorKeypadUI.active)return;
 prepareSawAction();
 if(chairSeat.leave(state.time)){canvas.focus({preventScroll:true});}
}
function syncChairButton(){
 leaveChairButton.hidden=!chairSeat.seated||sawBusy()||mobilePuzzle.active||drawerCamera.active||documentViewer.active||doorKeypadUI.active;
}
function inspectDocument(hit){
 if(sawBusy())return;
 if(hit?.userData.wallDocument)documentViewer.show(hit);
 else if(hit?.userData.fishClue&&figpalHoists.fishClueReady)documentViewer.show(figpalHoists.fishInspectionTarget);
}
function escapeRoom(){
 laptopProgram.cancel();
 if(gameEnded||gameWon)return;
 const result=captureRankedEscape({attempt:attempts.count,intervalSeconds:countdown.update(),scheduledDrops:figpalRounds.scheduledDrops,rescue:rescueChairs.state,pmIndex:escapePuzzle.pmIndex,rigs:figpalHoists.rigs,assisted:diagnosticRunUsed});
 testingMode.update({hidden:true});testingHighlights.group.visible=false;equippedModel.group.visible=false;exitDoor.unlock();gameWon=true;countdownHUD.hide();fireWarning.hidden=true;leaveChairButton.hidden=true;escapedAt=state.time;
 countdownStartTime=null;fireAlarm.silence();releaseControls();documentViewer.hide();closeMobileInspection(true);chainMenu.hide();loweringDialogue.reset();arrivalDialogue.hidden=true;canvas.inert=true;
 const target=exitDoor.object.getWorldPosition(new THREE.Vector3()).add(new THREE.Vector3(0,1.1,0)),direction=target.sub(cameraPosition).normalize();state.yaw=Math.atan2(-direction.x,-direction.z);state.pitch=Math.asin(direction.y);state.zoom=1;
 camera.position.copy(cameraPosition);camera.lookAt(cameraPosition.clone().add(direction));camera.fov=homeCamera.fov;camera.updateProjectionMatrix();
 restraintStatus.textContent='The code works. The door opens. You escaped.';
 victoryShare.prepare(result);leaderboardUI.close();leaderboardUI.showResult(result);
}
function inspectMobile(){
 if(sawBusy()||mobilePuzzle.active)return;
 if(restraint.locked){restraint.requestReach(state.time);return;}
 clearSawSelection();putAxeBack();prepareSawAction();sawMenu.hide();
 if(mobilePuzzle.inspect()){mobileCamera.start(state.time);mobileUI.sync();}
}
function closeMobileInspection(force=false){if(mobilePuzzle.close(true)){mobileCamera.restore(state.time,force);mobileUI.sync();syncInspectionBack();releaseControls();canvas.focus({preventScroll:true});}}
const inspectionBack=document.querySelector('#inspection-back');
function syncInspectionBack(){
 inspectionBack.hidden=gameEnded||gameWon||documentViewer.returning||(!laptopProgram.active&&!documentViewer.active&&!mobilePuzzle.active&&(!drawerCamera.active||drawerCamera.returning));
}
function leaveInspection(){
 if(laptopProgram.active){laptopProgram.cancel();return;}
 releaseControls();
 if(doorKeypadUI.active)doorKeypadUI.hide(false);
 else if(documentViewer.active)documentViewer.hide(false);
 else if(mobilePuzzle.active)closeMobileInspection();
 else if(drawerCamera.active){releaseControls();drawerCamera.restore(state.time);canvas.focus({preventScroll:true});}
 syncInspectionBack();
}
inspectionBack.addEventListener('click',leaveInspection);
function inventoryModelFor(id){
 const supply=mobileSupplies.objects[id];
 if(supply)return {object:supply,rotation:id==='string'?[.3,-.35,-.2]:[.12,-.3,-.55]};
 if(id==='key')return {object:ketchupKey.key,rotation:[1.15,.15,-.35]};
 if(id==='saw')return {object:handsaw,rotation:[1.25,.15,-.2]};
 if(id==='axe')return {object:fireAxe.object,rotation:[.1,-.28,-.65]};
 if(id==='charger')return {object:chargingKit.inventoryModel(),rotation:[.15,-.2,0]};
 if(id.startsWith('chain'))return {object:rescueChairs.inventoryChain(Number(id.at(-1))),rotation:[.9,-.15,-.25]};
 return {object:rescueChairs.parts[id],rotation:[.48,-.4,-.12]};
}
const inventoryPreviews=createInventoryModelPreviews({renderer,getModel:inventoryModelFor});
const equippedModel=createEquippedModel({camera,getModel:inventoryModelFor});scene.add(equippedModel.group);
const inventoryUI=createInventoryUI({inventory,previews:inventoryPreviews,onEquip:equipItem,onPutAway:putEquipmentAway,onOpen(){releaseControls();chainMenu.hide();sawMenu.hide();},canOpen:()=>!laptopProgram.active&&!sawBusy()&&!rescueChairs.state.pulling});
const testingMode=createTestingModeUI();
rescueChairs.setHighlightsEnabled(false);
const testingHighlights=createTestingHighlights({entries:createInteractionTargets({office,model,restraint,laptop,catMug,handsaw,fireAxe,chairRefuge,rescueChairs,mobileInspection,fallenMobile,stuffedAnimals,inventory,chargingKit,ketchupKey,figpalHoists,doorKeypadUI,plushCut})});scene.add(testingHighlights.group);
function updateTestingMode(time){
 const context={locked:restraint.locked,hasKey:ketchupKey.hasKey,mobilePhase:mobilePuzzle.phase,chargingPhase:chargingKit.phase,chairs:rescueChairs.state.chairs,canHook:rescueChairs.canHook,brokenTanks:figpalHoists.tanks.map(t=>t.broken),canCut:plushCut.canCut,selectingAnimal};
 const revision=[inventory.revision,mobilePuzzle.phase,mobilePuzzle.action,chargingKit.phase,chargingKit.drawerOpen,ketchupKey.phase,restraint.locked,doorKeypadUI.active,context.brokenTanks.join(),context.chairs.map(c=>[c.step,c.installed.join(),c.repaired,c.tank,c.passenger].join(':')).join('|'),rescueChairs.state.links.length,figpalHoists.fishClueReady].join(';');
 const counts=testingHighlights.update(time,{enabled:testingMode.enabled&&!laptopProgram.active&&!sawBusy()&&!inventoryUI.active&&!mobilePuzzle.action&&!sawMenu.active,showInteractive:testingMode.showInteractive,showMatching:testingMode.showMatching,item:inventory.equipped,revision,context});
 testingMode.update({hidden:!diagnostics.enabled||gameEnded||gameWon||inventoryUI.active,itemName:ITEMS[inventory.equipped]?.name??'',matches:counts.matching});
 equippedModel.update(inventory.equipped,time,!laptopProgram.active&&!sawBusy()&&!inventoryUI.active&&!documentViewer.active&&!drawerCamera.active&&!mobilePuzzle.action);
}
let movePromptChair=null;
const rescueControls=document.createElement('div');rescueControls.id='rescue-controls';rescueControls.hidden=true;
rescueControls.innerHTML='<p data-move-label role="status"></p><div class="rescue-actions"><button type="button" data-move>Move chair</button><div data-destinations aria-label="Chair destinations"><button type="button" data-tank="0">Tank 01</button><button type="button" data-tank="1">Tank 02</button><button type="button" data-tank="2">Tank 03</button></div><button type="button" data-cancel>Cancel move</button><button type="button" data-pull>Pull chairs to safety</button></div><small data-pan>Drag to look around · Esc to cancel</small>';document.body.append(rescueControls);
const moveLabel=rescueControls.querySelector('[data-move-label]'),moveButton=rescueControls.querySelector('[data-move]'),destinations=rescueControls.querySelector('[data-destinations]'),panLabel=rescueControls.querySelector('[data-pan]');
function beginChairMove(index){
 if(!rescueChairs.canMove(index))return false;
 putEquipmentAway();state.space=false;arrivalCameraMove.cancel();drawerCamera.cancel();acidCamera.cancel();alarmCamera.cancel();resetting=false;
 movePromptChair=index;return rescueChairs.select(index);
}
function placeRescueChair(tank){if(rescueChairs.place(tank)){movePromptChair=null;canvas.focus({preventScroll:true});return true;}return false;}
moveButton.onclick=()=>beginChairMove(movePromptChair);
for(const button of destinations.children)button.onclick=()=>placeRescueChair(Number(button.dataset.tank));
rescueControls.querySelector('[data-cancel]').onclick=()=>{rescueChairs.cancelMove();canvas.focus({preventScroll:true});};
rescueControls.querySelector('[data-pull]').onclick=()=>{if(!chairSeat.seated){return;}rescueChairs.pull();};
function syncRescueControls(){
 const moving=rescueChairs.moving!==null,c=movePromptChair===null?null:rescueChairs.state.chairs[movePromptChair];
 const prompt=!moving&&c?.repaired&&c.passenger===null&&!rescueChairs.state.safe&&!rescueChairs.state.pulling;
 const pull=rescueChairs.state.ready&&!rescueChairs.busy&&!rescueChairs.state.safe&&!rescueChairs.state.pulling;
 rescueControls.hidden=gameEnded||gameWon||inventoryUI.active||sawBusy()||documentViewer.active||mobilePuzzle.active||laptopProgram.active||drawerCamera.active||(!moving&&!prompt&&!pull);
 const label=moving?'Choose a spot in front of a tank.':prompt?'Chair repaired.':'';if(moveLabel.textContent!==label)moveLabel.textContent=label;moveLabel.hidden=!moving&&!prompt;
 moveButton.hidden=!prompt;moveButton.disabled=prompt&&!rescueChairs.canMove(movePromptChair);
 destinations.hidden=panLabel.hidden=!moving;
 const available=rescueChairs.availableSlots();for(const button of destinations.children)button.disabled=!available.includes(Number(button.dataset.tank));
 rescueControls.querySelector('[data-cancel]').hidden=!moving;rescueControls.querySelector('[data-pull]').hidden=!pull;
}
function putEquipmentAway(){putAxeBack();clearSawSelection();sawMenu.hide();rescueChairs.cancelHook();inventory.putAway();if(inventory.has('saw')&&!sawTrap.active&&!plushCut.active)handsaw.visible=false;canvas.focus({preventScroll:true});}
function equipItem(id){
 putEquipmentAway();rescueChairs.cancelMove();movePromptChair=null;if(!inventory.equip(id))return;
 if(id==='axe'){fireAxe.object.visible=true;axeInteraction.pickUp(state.time);}
 if(id==='saw'){grabSaw();}
 if(id==='key'&&restraint.locked)restraint.requestReach(state.time);
 canvas.focus({preventScroll:true});
}
function useRescueObject(hit){
 const data=hit?.userData;if(!data)return false;
 const isRescue=data.chairSeat||data.salvagePart||Number.isInteger(data.rescueChair)||Number.isInteger(data.chainPickup)||Number.isInteger(data.chainAnchor);
 if(!isRescue)return false;
 if(sawBusy())return true;
 if(restraint.locked){restraint.requestReach(state.time);return true;}
 if(data.chairSeat){sitOnChair();return true;}
 if(data.salvagePart){rescueChairs.collectPart(data.salvagePart,inventory);return true;}
 if(Number.isInteger(data.chainPickup)){if(!figpalHoists.collectChain(data.chainPickup,inventory))rescueChairs.collectChain(data.chainPickup,inventory);return true;}
 let index=data.chairSeat?PLAYER_CHAIR:Number.isInteger(data.chainAnchor)?data.chainAnchor:data.rescueChair;
 if(inventory.equipped?.startsWith('chain')){testingMode.report(rescueChairs.hook(index,inventory.equipped,inventory));return true;}
 if(index===PLAYER_CHAIR){sitOnChair();return true;}
 if(rescueChairs.state.chairs[index].repaired){beginChairMove(index);return true;}
 if(inventory.equipped){
  const message=rescueChairs.use(index,inventory.equipped,inventory);testingMode.report(message);inventoryUI.notify(message);
  if(rescueChairs.state.chairs[index].repaired){drawerCamera.cancel();movePromptChair=index;}
  return true;
 }
 return true;
}
function takeMobileSupply(item){
 if(sawBusy())return;
 if(restraint.locked){restraint.requestReach(state.time);return;}
 if(!chargingKit.drawerOpen||!chargingKit.drawerReady){return;}
 if(inventory.add(item)){
  if(['scissors','string'].includes(item))mobilePuzzle.collect(item,{drawerReady:true});
  syncSupplies();
 }
}
function syncSupplies(){mobileSupplies.sync({has:id=>inventory.has(id),phase:mobilePuzzle.phase});}

function useDoorKeypad(){if(sawBusy())return;prepareSawAction();doorKeypadUI.show();}
function putAxeBack(){axeInteraction.reset();fireAxe.object.visible=!inventory.has('axe');if(inventory.equipped==='axe')inventory.putAway();cancelAxeSelection.hidden=true;canvas.classList.remove('over-axe','over-tank');}
function takeFireAxe(){
 if(sawBusy())return;
 if(restraint.locked){restraint.requestReach(state.time);return;}
 inventory.add('axe');fireAxe.object.visible=false;
}

function tankIndexFor(object){for(let o=object;o;o=o.parent)if(Number.isInteger(o.userData.tankIndex))return o.userData.tankIndex;return -1;}
function swingFireAxe(object){
 if(sawBusy())return;
 const index=tankIndexFor(object);
 if(index<0){return;}
 if(figpalHoists.tanks[index].broken){return;}
 if(axeInteraction.strike(index,state.time,restraint.locked)){
  prepareSawAction();
 }
}
function useKeyObject(action){
 if(rescueChairs.state.pulling||chairSeat.moving||laptopOpening.active||figpalRounds.active||mugTrap.active||sawTrap.active||plushCut.active||axeInteraction.active||gameEnded||gameWon||acidLeaks.dying||fireHazard.dying||fireAlarm.dying)return;
 arrivalCameraMove.cancel();resetting=false;
 if(action==='pour'){
  ketchupKey.pour(state.time);
 }else if(action==='collect'&&ketchupKey.collect()){
  inventory.add('key');
  restraint.requestReach(state.time);
 }
}
function useCharging(action){
 if(!action||rescueChairs.state.pulling||chairSeat.moving||laptopOpening.active||figpalRounds.active||mugTrap.active||sawTrap.active||plushCut.active||axeInteraction.active||gameEnded||gameWon||acidLeaks.dying||fireHazard.dying||fireAlarm.dying)return;
 if(['strip','laptop'].includes(action)&&inventory.equipped!=='charger'){return;}
 const wasOpen=chargingKit.drawerOpen,previousPhase=chargingKit.phase;
 hoveredChargingAction=null;canvas.classList.remove('over-charging');
 if(restraint.locked)restraint.requestReach(state.time);
 if(!(action==='charger'&&chargingKit.phase==='drawer'&&!chargingKit.drawerReady&&!restraint.locked))chargingKit.use(action,state.time,restraint.locked);
 if(previousPhase==='drawer'&&chargingKit.phase==='carrying')inventory.add('charger');
 if(previousPhase==='powered'&&chargingKit.phase==='charging')inventory.remove('charger');
 arrivalCameraMove.cancel();resetting=false;
 if(!restraint.locked){
  if(action==='drawer'&&!wasOpen&&chargingKit.drawerOpen){acidCamera.cancel();alarmCamera.cancel();releaseControls();drawerCamera.start(state.time);}
  else if((action==='drawer'&&wasOpen&&!chargingKit.drawerOpen)||(previousPhase==='drawer'&&chargingKit.phase==='carrying')){releaseControls();drawerCamera.restore(state.time);}
 }
}
const laptopProgram=createLaptopProgram({camera,canvas,laptop,onLock(){prepareSawAction();inventoryUI.close();arrivalDialogue.hidden=true;},onReturn(){releaseControls();restraintStatus.textContent='You close the laptop.';canvas.classList.remove('over-laptop');canvas.setAttribute('aria-label',initialCanvasDescription);},getPowerStatus(){return chargingKit.phase==='charging'?'⚡ 0% · External power':`${Math.ceil(chargingKit.battery)}% · Connect charger: ${formatCountdown(chargingKit.battery/8*60)}`;}});
function openLaptop(){
 if(rescueChairs.state.pulling||chairSeat.moving||laptopOpening.active||figpalRounds.active||mugTrap.active||sawTrap.active||plushCut.active||axeInteraction.active||gameEnded||gameWon||acidLeaks.dying||fireHazard.dying||fireAlarm.dying)return;
 if(restraint.locked){
  restraint.requestReach(state.time);restraintStatus.textContent="The chain pulls tight. You can't reach the laptop.";return;
 }
 if(chargingKit.phase==='powered'&&inventory.equipped==='charger'){useCharging('laptop');return;}
 chargingKit.syncPower();
 if(laptop.isMoving)return;
 if(laptop.isOpen){
  laptopProgram.start();
  return;
 }
 drawerCamera.cancel();acidCamera.cancel();alarmCamera.cancel();
 if(laptopOpening.start(state.time)){
  releaseControls();arrivalCameraMove.cancel();resetting=false;
  restraintStatus.textContent='You reach for the front edge of the laptop.';
 }
}
function finishOpeningLaptop(fromHand=false){
 chargingKit.syncPower();
 if(!fromHand&&!laptop.open())return;
 restraintStatus.textContent='You lift the lid and let go. The laptop is open.';
 canvas.classList.remove('over-laptop');
 canvas.setAttribute('aria-label',canvas.getAttribute('aria-label').replace('a closed MacBook Pro','an open MacBook Pro'));
 laptopProgram.start();
}
function grabMug(){
 if(rescueChairs.state.pulling||chairSeat.moving||laptopOpening.active||figpalRounds.active||mugTrap.active||sawTrap.active||plushCut.active||axeInteraction.active||gameEnded||gameWon||acidLeaks.dying||fireHazard.dying||fireAlarm.dying)return;
 if(restraint.locked){restraint.requestReach(state.time);restraintStatus.textContent='The chain pulls tight.';return;}
 if(!mugTrap.start(state.time))return;
 drawerCamera.cancel();acidCamera.cancel();alarmCamera.cancel();
 releaseControls();arrivalCameraMove.cancel();resetting=false;chainMenu.hide();
 canvas.classList.remove('over-mug');
 restraintStatus.textContent='You pick up the cat mug by its handle and raise it for a drink.';
}
function sawBusy(){return rescueChairs.state.pulling||chairSeat.moving||laptopOpening.active||figpalRounds.active||mugTrap.active||sawTrap.active||plushCut.active||axeInteraction.active||gameEnded||gameWon||acidLeaks.dying||fireHazard.dying||fireAlarm.dying;}
function clearSawSelection(){selectingAnimal=false;cancelSawSelection.hidden=true;canvas.classList.remove('over-plush');}
function prepareSawAction(){drawerCamera.cancel();acidCamera.cancel();alarmCamera.cancel();arrivalCameraMove.cancel();resetting=false;releaseControls();chainMenu.hide();}
function grabSaw(){
 if(sawBusy())return;
 if(!inventory.has('saw')){inventory.add('saw');handsaw.visible=false;return;}
 if(inventory.equipped!=='saw'){return;}
 putAxeBack();clearSawSelection();prepareSawAction();sawMenu.show();
}
function sawShackle(){
 if(sawBusy()||ketchupKey.hasKey||!restraint.locked)return;
 handsaw.visible=true;if(!sawTrap.start(state.time))return;
 prepareSawAction();canvas.classList.remove('over-saw');
 restraintStatus.textContent='You try to saw through the shackle, but the blade slips against your wrist.';
}
function chooseStuffedAnimal(){
 if(sawBusy())return;
 if(restraint.locked){return;}
 prepareSawAction();selectingAnimal=true;cancelSawSelection.hidden=false;
 const target=stuffedAnimals[0].object.getWorldPosition(new THREE.Vector3());target.y+=.10;
 const direction=target.sub(cameraPosition).normalize();state.yaw=Math.atan2(-direction.x,-direction.z);state.pitch=Math.asin(direction.y);state.zoom=.78;
}
function cutStuffedAnimal(object){
 if(sawBusy())return;
 if(restraint.locked){clearSawSelection();return;}
 if(!object?.userData.stuffedAnimal){return;}
 handsaw.visible=true;if(!plushCut.start(object,state.time,restraint.locked)){return;}
 clearSawSelection();prepareSawAction();
 restraintStatus.textContent=`You saw into the stuffed ${object.userData.stuffedAnimal.toLowerCase()}. Cotton filling spills out.`;
}
function openTankValve(index){
 if(rescueChairs.state.pulling||chairSeat.moving||laptopOpening.active||figpalRounds.active||mugTrap.active||sawTrap.active||plushCut.active||axeInteraction.active||gameEnded||gameWon||acidLeaks.dying||fireHazard.dying||fireAlarm.dying)return;
 if(restraint.locked){restraint.requestReach(state.time);restraintStatus.textContent='The chain pulls tight.';return;}
 if(acidLeaks.open(index,hazardClock.time,restraint.locked)){
  drawerCamera.cancel();acidCamera.cancel();alarmCamera.cancel();
  arrivalCameraMove.cancel();resetting=false;chainMenu.hide();
  const source=acidLeaks.leaks.find(leak=>leak.index===index).origin;
  if(!chairSeat.occupied&&acidCamera.start(state.time,source,laptop.isOpen))releaseControls();
  restraintStatus.textContent=`Tank ${index+1}'s valve spins open. Bubbling acid spills onto the floor and starts eating through everything it touches.`;
 }
}
function pullFireAlarm(){
 if(rescueChairs.state.pulling||chairSeat.moving||laptopOpening.active||figpalRounds.active||mugTrap.active||sawTrap.active||plushCut.active||axeInteraction.active||gameEnded||gameWon||acidLeaks.dying||fireHazard.dying||fireAlarm.dying)return;
 if(restraint.locked){restraint.requestReach(state.time);return;}
 const outcome=fireAlarm.pull(hazardClock.time);
 if(!outcome){return;}
 releaseControls();arrivalCameraMove.cancel();drawerCamera.cancel();acidCamera.cancel();alarmCamera.cancel();chainMenu.hide();resetting=false;
 alarmCamera.start(state.time,fireAlarm.target);
}
function nearestTankValve(){
 let nearest=0,distance=Infinity;const point=new THREE.Vector3();
 figpalHoists.valves.forEach((valve,index)=>{valve.object.getWorldPosition(point);const d=point.distanceToSquared(cameraPosition);if(d<distance){distance=d;nearest=index;}});
 return nearest;
}
let figpalRoundFinished=false;
function updateFigpalRound(time){
 if(countdownStartTime!==null&&time>=countdownStartTime){
  countdown.start();countdownStartTime=null;
  countdownAnnouncement.textContent='The ten-minute countdown has started.';
 }
 const event=figpalRounds.update(time,rescueChairs.state.pulling||chairSeat.moving||!!mobilePuzzle.action||laptopOpening.active||mugTrap.active||sawTrap.active||plushCut.active||axeInteraction.active||acidLeaks.dying||fireHazard.dying||fireAlarm.dying,diagnostics.invulnerable);
 if(event?.type==='lower'){
  leaderboardUI.close();laptopProgram.cancel();releaseControls();chainMenu.hide();sawMenu.hide();clearSawSelection();putAxeBack();documentViewer.hide();closeMobileInspection(true);doorKeypadUI.hide();arrivalCameraMove.cancel();drawerCamera.cancel();acidCamera.cancel();alarmCamera.cancel();resetting=false;
  figpalCamera.start(event.index,time);loweringDialogue.reset();const line=loweringDialogue.show(event.index,time);
  const destination=figpalHoists.safeDescent(event.index)?'prepared rescue route':'green liquid';
  countdownAnnouncement.textContent=`Time is up. Figpal ${event.index+1} is lowering into the ${destination}.${line?' '+line:''}`;
 }else if(event?.type==='return'){
  loweringDialogue.reset();figpalCamera.restore(time);
 }else if(event?.type==='restart'){
  countdownAnnouncement.textContent=event.remaining===1?'The final ten-minute countdown has started.':'The timer resets to ten minutes.';
 }else if(event?.type==='ending'){
  releaseControls();chainMenu.hide();loweringDialogue.reset();arrivalDialogue.hidden=true;
  countdownAnnouncement.textContent='The second deadline has passed. Your time is up.';
 }else if(event?.type==='gameover')figpalRoundFinished=true;
 const seconds=countdown.update();
 if(seconds!==lastCountdownSeconds){countdownReadout.textContent=formatCountdown(seconds);lastCountdownSeconds=seconds;}
}

function endGame(cause='objective'){
 if(diagnostics.invulnerable){diagnostics.report(`Invulnerability prevented: ${gameOverReason(cause)}`);return;}
 if(gameEnded)return;leaderboardUI.close();laptopProgram.cancel();gameEnded=true;countdownHUD.hide();fireWarning.hidden=true;inventoryUI.setHidden(true);leaveChairButton.hidden=true;fireAlarm.silence();
 drawerCamera.cancel();acidCamera.cancel();alarmCamera.cancel();figpalCamera.cancel();
 deathTransition.start(state.time,reducedMotion);
 releaseControls();chainMenu.hide();sawMenu.hide();clearSawSelection();putAxeBack();documentViewer.hide();closeMobileInspection(true);doorKeypadUI.hide();arrivalDialogue.hidden=true;loweringDialogue.reset();
 document.body.classList.add('game-over');canvas.inert=true;
 gameOverReasonText.textContent=gameOverReason(cause);
 restraintStatus.textContent=`Game over. ${gameOverReasonText.textContent}`;
}
function updateGameOver(time){
 const frame=deathTransition.update(time);
 gameOver.hidden=frame.blackout<=0;gameOver.style.opacity=String(frame.blackout);
 if(gameEnded&&frame.finished&&gameOverContent.hidden){
  mugEyeImpact.hidden=true;gameOverContent.hidden=false;gameOverShare.prepare(attempts.count);restartGame.focus({preventScroll:true});
 }
 return frame;
}
function operateHoist(index){
 if(rescueChairs.state.pulling||chairSeat.moving||figpalRounds.active||mugTrap.active||sawTrap.active||plushCut.active||axeInteraction.active||gameEnded||gameWon||acidLeaks.dying||fireHazard.dying||fireAlarm.dying)return;
 if(!restraint.locked&&figpalHoists.collectChain(index,inventory))return;
 const message=toggleHoist(index);if(!message){document.querySelector('#hoist-status').textContent='Wait for the moving hoist to stop before operating another.';return;}
 const lowering=figpalHoists.isLowered(index);
 const line=lowering?loweringDialogue.show(index,state.time):null;if(!lowering)loweringDialogue.hide(index);
 document.querySelector('#hoist-status').textContent=line?`${message} ${line}`:message;
}
let chairDragCandidate=null;
let resetting=false,dragPointer=null,lastPointer=null,pointerDistance=0;
const wrapAngle=angle=>THREE.MathUtils.euclideanModulo(angle+Math.PI,Math.PI*2)-Math.PI;
function resetView({skipIntro=false}={}){
 diagnostics.clearHistory();diagnosticRunUsed=diagnostics.enabled;leaderboardUI.reset();laptopProgram.reset();
 attempts.next();gameOverShare.reset();victoryShare.reset();
 scheduleFrame();
 ketchupKey.reset();hoveredKeyAction=null;chargingKit.reset();hoveredChargingAction=null;
 inventory.reset();movePromptChair=null;inventoryUI.close();inventoryUI.setHidden(false);handsaw.visible=true;fireAxe.object.visible=true;rescueChairs.reset();
 gameEnded=false;gameWon=false;escapeScreen.hidden=true;escapePuzzle.reset();documents.refreshRoles().catch(()=>{});fallenMobile.refreshDigits();documentViewer.hide();closeMobileInspection(true);mobilePuzzle.reset();mobileInspection.reset();mobileCamera.reset();syncSupplies();doorKeypadUI.reset();exitDoor.reset();chairSeat.reset();hoveredChair=false;leaveChairButton.hidden=true;canvas.classList.remove('over-chair');acidLeaks.reset();fireHazard.reset();fireAlarm.reset();hazardClock.reset(state.time);hoveredAlarm=false;canvas.classList.remove('over-alarm');mugTrap.reset();sawTrap.reset();plushCut.reset();sawMenu.hide();clearSawSelection();putAxeBack();mugImpactOverlay.reset();deathTransition.reset();
 gameOver.hidden=true;gameOver.style.opacity='0';gameOverContent.hidden=true;gameOverReasonText.textContent='';fireWarning.hidden=true;
 document.body.classList.remove('game-over','death-active');canvas.inert=false;
 laptopOpening.cancel();arrivalCameraMove.cancel();drawerCamera.cancel();acidCamera.cancel();alarmCamera.cancel();restraint.reset();laptop.close();chainMenu.hide();
 restraintStatus.textContent='';canvas.setAttribute('aria-label',initialCanvasDescription);
 figpalRounds.reset();figpalCamera.cancel();figpalRoundFinished=false;loweringDialogue.reset();hangingPleas.reset(state.time);releaseControls();
 resetting=!skipIntro;departure.reset();cornerReaction.reset();canvas.classList.remove('over-figsaw');
 entranceStartedAt=state.time-(skipIntro?entranceDelay+entranceDuration:0);
 entranceArrived=skipIntro;entranceArrivedAt=state.time;
 arrivalDialogue.hidden=true;arrivalDialogue.classList.remove('long-dialogue');dialogueAnnouncement.textContent='';dialogueSpeech=null;
 dialogueLineIndex=skipIntro?dialogueLines.length-1:-1;nextDialogueAt=Infinity;
 state.jaw=0;state.talkUntil=0;nextDialogueVisibilityCheck=0;
 countdownStartTime=null;countdown.reset();countdownHUD.hide();lastCountdownSeconds=FIGPAL_INTERVAL_SECONDS;
 countdownReadout.textContent=formatCountdown(FIGPAL_INTERVAL_SECONDS);countdownAnnouncement.textContent='';
 if(skipIntro){
  // Resume at the completed introduction, without replaying speech or the ride.
  // Use the same exact arrival view and give this attempt a fresh ten minutes.
  arrivalDialogue.querySelector('.dialogue-bubble span').textContent=dialogueLines[dialogueLineIndex];
  arrivalCameraMove.start(state.time,cameraPosition,state);
  arrivalCameraMove.update(state.time,cameraPosition,state,true);
  updateEntrance(state.time);departure.schedule(state.time);
  countdown.start();countdownAnnouncement.textContent='The ten-minute countdown has started.';
 }
}

const diagnosticView={capture:()=>({position:cameraPosition.toArray(),yaw:state.yaw,pitch:state.pitch,zoom:state.zoom}),restore(value){figpalCamera.cancel();arrivalCameraMove.cancel();drawerCamera.cancel();acidCamera.cancel();alarmCamera.cancel();resetting=false;cameraPosition.fromArray(value.position);state.yaw=value.yaw;state.pitch=value.pitch;state.zoom=value.zoom;}};
const diagnosticProps={capture:()=>({saw:handsaw.visible,axe:fireAxe.object.visible}),restore(value){handsaw.visible=value.saw;fireAxe.object.visible=value.axe;},hideCollected(){handsaw.visible=false;fireAxe.object.visible=false;}};
const prepareDiagnosticTimer=()=>{countdownStartTime=null;};prepareDiagnosticTimer.capture=()=>({delay:countdownStartTime===null?null:countdownStartTime-state.time,announcement:countdownAnnouncement.textContent});
const diagnosticActions=createDiagnosticActions({time:()=>state.time,hazardTime:()=>hazardClock.time,inventory,mobilePuzzle,rescueChairs,hoists:figpalHoists,ketchupKey,restraint,laptop,chargingKit,laptopProgram,acidLeaks,fireHazard,fireAlarm,countdown,rounds:figpalRounds,view:diagnosticView,props:diagnosticProps,onLower:index=>loweringDialogue.show(index,state.time),prepareTimer:prepareDiagnosticTimer,restoreTimer:value=>{countdownStartTime=value.delay===null?null:state.time+value.delay;countdownAnnouncement.textContent=value.announcement;},afterRestore(){loweringDialogue.reset();hangingPleas.reset(state.time);figpalRoundFinished=false;movePromptChair=null;syncSupplies();inventoryUI.sync();}});
const diagnostics=createDiagnostics({clock:countdown,actions:diagnosticActions,
 onActivate(){diagnosticRunUsed=true;testingMode.setEnabled(true);releaseControls();if(gameEnded||gameWon)resetView({skipIntro:true});},
 onExit(){testingMode.setEnabled(false);testingHighlights.group.visible=false;canvas.focus({preventScroll:true});},
 onInvulnerability(value){
  acidLeaks.setInvulnerable(value);fireHazard.setInvulnerable(value);fireAlarm.setInvulnerable(value);
  if(value){deathTransition.reset();gameOver.hidden=true;document.body.classList.remove('death-active');}
 },
 canRun(){
  if(gameEnded||gameWon||figpalRounds.active||rescueChairs.busy||chairSeat.moving||laptopOpening.active||mugTrap.active||sawTrap.active||plushCut.active||axeInteraction.active||mobilePuzzle.action)return false;
  laptopProgram.cancel();inventoryUI.close();rescueChairs.cancelMove();releaseControls();chainMenu.hide();sawMenu.hide();return true;
 }
});
const diagnosticUI=createDiagnosticUI({mode:diagnostics,clock:countdown,actions:diagnosticActions,testingMode,focusScene:()=>canvas.focus({preventScroll:true})});

function releaseControls(){state.space=false;dragPointer=null;}

document.addEventListener('keydown',event=>{
 if(leaderboardUI.active||event.target.closest('#diagnostic-tools,#victory-leaderboard form'))return;
 // A browser refresh starts its own attempt on load; do not also restart here.
 if(event.code==='KeyR'&&(event.metaKey||event.ctrlKey||event.altKey))return;
 if(inventoryUI.active)return;
 if(event.code==='KeyI'&&!laptopProgram.active&&!event.repeat&&!event.target.closest('input,textarea')){event.preventDefault();inventoryUI.open();return;}
 if(event.code==='Escape'&&rescueChairs.moving!==null){event.preventDefault();rescueChairs.cancelMove();return;}
 if(gameEnded||gameWon){
  if(event.code==='KeyR'&&!event.repeat){event.preventDefault();resetView();canvas.focus({preventScroll:true});}
  return;
 }
 if((rescueChairs.state.pulling||chairSeat.moving||figpalRounds.active||laptopOpening.active||mugTrap.active||sawTrap.active||plushCut.active||axeInteraction.active||acidLeaks.dying||fireHazard.dying||fireAlarm.dying)&&event.code!=='KeyR'){event.preventDefault();return;}
 if(laptopProgram.active){if(event.code==='Escape'){event.preventDefault();laptopProgram.cancel();}return;}
 if(documentViewer.active){
  if(event.metaKey||event.ctrlKey||event.altKey)return;
  if(event.target.closest('button')&&(event.code==='Enter'||event.code==='Space'))return;
  if(event.code==='Escape'){event.preventDefault();leaveInspection();}
  else if(doorKeypadUI.active){event.preventDefault();const key={ArrowLeft:'left',ArrowRight:'right',ArrowUp:'up',ArrowDown:'down',Enter:'enter'}[event.key];if(key)doorKeypadUI.press(key);}
  else if(event.code.startsWith('Arrow')){event.preventDefault();documentViewer.drag(event.code==='ArrowLeft'?30:event.code==='ArrowRight'?-30:0,event.code==='ArrowUp'?30:event.code==='ArrowDown'?-30:0);}
  else if(['+','=','-'].includes(event.key)){event.preventDefault();documentViewer.setZoom(documentViewer.zoom*(event.key==='-'?1.25:.8));}
  return;
 }
 if(chainMenu.active||sawMenu.active||mobileCamera.returning)return;
 if(mobilePuzzle.active){
  if(event.code==='Escape'){event.preventDefault();closeMobileInspection();}
  else if(event.code.startsWith('Arrow')){event.preventDefault();mobileCamera.drag(event.code==='ArrowLeft'?-12:event.code==='ArrowRight'?12:0,event.code==='ArrowUp'?12:event.code==='ArrowDown'?-12:0,state.time);}
  return;
 }
 if(axeInteraction.held&&event.code==='Escape'){event.preventDefault();putAxeBack();return;}
 if(axeInteraction.held&&!['ArrowLeft','ArrowRight','ArrowUp','ArrowDown','KeyR'].includes(event.code))return;
 if(selectingAnimal&&event.code==='Escape'){event.preventDefault();clearSawSelection();return;}
 if(selectingAnimal&&!['ArrowLeft','ArrowRight','ArrowUp','ArrowDown','KeyR'].includes(event.code))return;
 if(event.target.closest('input,textarea,select,[contenteditable="true"]')||event.metaKey||event.ctrlKey||event.altKey)return;
 if(event.code==='Escape'&&drawerCamera.active){event.preventDefault();leaveInspection();return;}
 if(event.code==='Escape'&&chairSeat.seated){event.preventDefault();leaveChair();return;}
 if(event.target.closest('button')&&(event.code==='Space'||event.code==='Enter'))return;
 if(event.code==='Enter'&&event.target===canvas&&!event.repeat){event.preventDefault();openLaptop();}
 if(event.code==='KeyF'&&event.target===canvas&&!event.repeat){event.preventDefault();useCharging(chargingKit.nextAction);}
 if(event.code==='KeyM'&&event.target===canvas&&!event.repeat){event.preventDefault();grabMug();}
 if(event.code==='KeyV'&&event.target===canvas&&!event.repeat){event.preventDefault();openTankValve(nearestTankValve());}
 if(/^Digit[1-3]$/.test(event.code)&&event.target===canvas&&!event.repeat){event.preventDefault();operateHoist(Number(event.code.slice(-1))-1);}
 if(event.code==='Space'){event.preventDefault();state.space=true;}
 if(event.code==='KeyR'&&!event.repeat)resetView();
 if(event.code.startsWith('Arrow')){
  event.preventDefault();arrivalCameraMove.cancel();drawerCamera.pause();acidCamera.cancel();alarmCamera.cancel();resetting=false;
  if(event.code==='ArrowLeft')state.yaw=wrapAngle(state.yaw+.08);
  if(event.code==='ArrowRight')state.yaw=wrapAngle(state.yaw-.08);
  if(event.code==='ArrowUp')state.pitch=THREE.MathUtils.clamp(state.pitch+.05,-1.40,1.40);
  if(event.code==='ArrowDown')state.pitch=THREE.MathUtils.clamp(state.pitch-.05,-1.40,1.40);
 }
});
document.addEventListener('keyup',event=>{if(event.code==='Space')state.space=false;});
window.addEventListener('blur',releaseControls);
document.addEventListener('visibilitychange',()=>{if(document.hidden)releaseControls();});
createTouchNavigation({canvas,state,cancel(){releaseControls();arrivalCameraMove.cancel();drawerCamera.pause();acidCamera.cancel();alarmCamera.cancel();resetting=false;},getZoom:()=>documentViewer.active?documentViewer.zoom:state.zoom,setZoom:value=>{if(documentViewer.active)documentViewer.setZoom(value);else state.zoom=THREE.MathUtils.clamp(value,.60,1.15);},canInteract:()=>!laptopProgram.active&&!inventoryUI.active&&rescueChairs.moving===null&&!documentViewer.returning&&!chairSeat.moving&&!mobileCamera.returning&&!mobilePuzzle.active&&!figpalRounds.active&&!laptopOpening.active&&!mugTrap.active&&!sawTrap.active&&!plushCut.active&&!axeInteraction.active&&!gameEnded&&!gameWon&&!acidLeaks.dying&&!fireHazard.dying&&!fireAlarm.dying});
canvas.addEventListener('contextmenu',event=>{
 event.preventDefault();releaseControls();
 if(laptopProgram.active){laptopProgram.cancel();return;}
 if(documentViewer.active){leaveInspection();return;}
 if(mobilePuzzle.active){closeMobileInspection();return;}
 if(rescueChairs.state.pulling||chairSeat.moving||figpalRounds.active||mugTrap.active||sawTrap.active||plushCut.active||axeInteraction.active||gameEnded||gameWon||acidLeaks.dying||fireHazard.dying||fireAlarm.dying)return;
 if(axeInteraction.held){putAxeBack();return;}
 if(selectingAnimal){clearSawSelection();return;}
 if(restraint.locked&&interactionAt(event)===restraint.target)chainMenu.show(event.clientX,event.clientY);else chainMenu.hide();
});
canvas.addEventListener('pointerdown',event=>{
 if(documentViewer.returning||rescueChairs.state.pulling||chairSeat.moving||mobileCamera.returning||laptopOpening.active||figpalRounds.active||mugTrap.active||sawTrap.active||plushCut.active||axeInteraction.active||gameEnded||gameWon||acidLeaks.dying||fireHazard.dying||fireAlarm.dying)return;
 if(inventoryUI.active||event.button!==0)return;
 if(laptopProgram.active)return;
 if(dragPointer!==null)return;
 canvas.focus({preventScroll:true});dragPointer=event.pointerId;resetting=false;pointerDistance=0;
 lastPointer={x:event.clientX,y:event.clientY};canvas.setPointerCapture(event.pointerId);
 const chairHit=interactionAt(event),chairIndex=chairHit?.userData.rescueChair;
 chairDragCandidate=rescueChairs.moving===null&&!inventory.equipped?.startsWith('chain')&&!restraint.locked&&Number.isInteger(chairIndex)&&rescueChairs.canMove(chairIndex)?chairIndex:null;
});
canvas.addEventListener('pointermove',event=>{
 if(rescueChairs.state.pulling||chairSeat.moving||laptopProgram.active||laptopOpening.active||figpalRounds.active||mugTrap.active||sawTrap.active||plushCut.active||axeInteraction.active||gameEnded||gameWon||acidLeaks.dying||fireHazard.dying||fireAlarm.dying)return;
 if(documentViewer.active){if(dragPointer!==null&&event.pointerId===dragPointer){const dx=event.clientX-lastPointer.x,dy=event.clientY-lastPointer.y;pointerDistance+=Math.abs(dx)+Math.abs(dy);documentViewer.drag(dx,dy);lastPointer={x:event.clientX,y:event.clientY};}return;}
 if(mobilePuzzle.active){if(dragPointer!==null&&event.pointerId===dragPointer){const dx=event.clientX-lastPointer.x,dy=event.clientY-lastPointer.y;pointerDistance+=Math.abs(dx)+Math.abs(dy);mobileCamera.drag(dx,dy,state.time);lastPointer={x:event.clientX,y:event.clientY};}return;}
 if(dragPointer===null){const hit=interactionAt(event);canvas.classList.toggle('over-figsaw',hit===puppet&&departure.finished);if(Number.isInteger(hit?.userData.rescueChair)&&rescueChairs.canMove(hit.userData.rescueChair)&&!inventory.equipped?.startsWith('chain'))movePromptChair=hit.userData.rescueChair;hoveredChair=!!hit?.userData.chairSeat;canvas.classList.toggle('over-chair',hoveredChair||Number.isInteger(hit?.userData.rescueChair)||Number.isInteger(hit?.userData.chainAnchor));hoveredDocument=hit?.userData.wallDocument||null;hoveredFish=!!hit?.userData.fishClue&&figpalHoists.fishClueReady;hoveredSupply=hit?.userData.supplyAction||null;hoveredMobile=!!hit?.userData.mobilePuzzle||!!hit?.userData.stuffedAnimal;hoveredKeypad=!!hit?.userData.exitKeypad;canvas.classList.toggle('over-puzzle',!!hoveredDocument||hoveredFish||!!hoveredSupply||hoveredMobile||hoveredKeypad||!!hit?.userData.salvagePart||Number.isInteger(hit?.userData.rescueSlot)||Number.isInteger(hit?.userData.chainPickup));canvas.classList.toggle('over-axe',!!hit?.userData.fireAxe);canvas.classList.toggle('over-tank',axeInteraction.held&&tankIndexFor(hit)>=0);canvas.classList.toggle('over-plush',selectingAnimal&&!!hit?.userData.stuffedAnimal);hoveredAlarm=!!hit?.userData.fireAlarm;canvas.classList.toggle('over-alarm',hoveredAlarm);hoveredKeyAction=hit?.userData.keyAction||null;canvas.classList.toggle('over-key',!!hoveredKeyAction);hoveredChargingAction=hit?.userData.chargingAction||(hit===laptop.object&&chargingKit.phase==='powered'?'laptop':null);canvas.classList.toggle('over-charging',!!hoveredChargingAction);canvas.classList.toggle('over-laptop',hit===laptop.object);canvas.classList.toggle('over-hoist',Number.isInteger(hit?.userData.hoistIndex));canvas.classList.toggle('over-mug',hit===catMug);canvas.classList.toggle('over-saw',hit===handsaw);canvas.classList.toggle('over-valve',Number.isInteger(hit?.userData.valveIndex));canvas.classList.toggle('over-chain',hit===restraint.target&&restraint.locked);return;}
 if(event.pointerId!==dragPointer)return;
 const dx=event.clientX-lastPointer.x,dy=event.clientY-lastPointer.y;pointerDistance+=Math.abs(dx)+Math.abs(dy);
 if(pointerDistance>=6&&chairDragCandidate!==null&&rescueChairs.moving===null)beginChairMove(chairDragCandidate);
 if(rescueChairs.moving!==null&&chairDragCandidate!==null){lastPointer={x:event.clientX,y:event.clientY};return;}
 if(pointerDistance>=6){arrivalCameraMove.cancel();drawerCamera.pause();acidCamera.cancel();alarmCamera.cancel();}
 state.yaw=wrapAngle(state.yaw+dx*.004);state.pitch=THREE.MathUtils.clamp(state.pitch+dy*.003,-1.40,1.40);lastPointer={x:event.clientX,y:event.clientY};
});
canvas.addEventListener('pointerup',event=>{
 if(event.pointerId!==dragPointer)return;
 const draggedChair=chairDragCandidate!==null;dragPointer=null;chairDragCandidate=null;
 if(rescueChairs.moving!==null){if(pointerDistance<6||draggedChair){const hit=interactionAt(event);if(Number.isInteger(hit?.userData.rescueSlot))placeRescueChair(hit.userData.rescueSlot);}return;}
 if(documentViewer.active){if(!documentViewer.returning&&pointerDistance<6){const hit=interactionAt(event);if(doorKeypadUI.active&&hit?.userData.keypadKey)doorKeypadUI.press(hit.userData.keypadKey);else if(!doorKeypadUI.active&&hit?.userData.wallDocument&&hit!==documentViewer.target)inspectDocument(hit);}return;}
 if(mobilePuzzle.active){
  if(pointerDistance<6){const hit=interactionAt(event);if(hit?.userData.mobilePuzzle||hit?.userData.stuffedAnimal)mobileUI.activate();}
  return;
 }
 if(pointerDistance<6){
  const hit=interactionAt(event);
  if(useRescueObject(hit))return;
  if(axeInteraction.held)swingFireAxe(hit);
  else if(hit?.userData.chairSeat)sitOnChair();
  else if(hit?.userData.fireAxe)takeFireAxe();
  else if(selectingAnimal)cutStuffedAnimal(hit);
  else if(hit?.userData.wallDocument||hit?.userData.fishClue)inspectDocument(hit);
  else if(hit?.userData.supplyAction)takeMobileSupply(hit.userData.supplyAction);
  else if(hit?.userData.mobilePuzzle||hit?.userData.stuffedAnimal)inspectMobile();
  else if(hit?.userData.exitKeypad||hit?.userData.keypadKey)useDoorKeypad();
  else if(hit?.userData.keyAction)useKeyObject(hit.userData.keyAction);
  else if(hit?.userData.fireAlarm)pullFireAlarm();
  else if(hit===restraint.target&&restraint.locked)chainMenu.show(event.clientX,event.clientY);
  else if(hit?.userData.chargingAction)useCharging(hit.userData.chargingAction);
  else if(hit===laptop.object)openLaptop();
  else if(hit===catMug)grabMug();
  else if(hit===handsaw)grabSaw();
  else if(Number.isInteger(hit?.userData.valveIndex))openTankValve(hit.userData.valveIndex);
  else if(hit===puppet)reactToFigsaw();
  else if(Number.isInteger(hit?.userData.hoistIndex))operateHoist(hit.userData.hoistIndex);
 }
});
canvas.addEventListener('pointerleave',()=>{hoveredChair=false;canvas.classList.remove('over-chair');hoveredDocument=null;hoveredFish=false;hoveredSupply=null;hoveredMobile=hoveredKeypad=false;canvas.classList.remove('over-puzzle');hoveredAlarm=false;canvas.classList.remove('over-alarm');hoveredKeyAction=null;hoveredChargingAction=null;canvas.classList.remove('over-axe','over-tank','over-key','over-laptop','over-hoist','over-chain','over-mug','over-saw','over-valve','over-charging','over-plush','over-figsaw');});
canvas.addEventListener('pointercancel',event=>{if(event.pointerId===dragPointer)dragPointer=null;});
canvas.addEventListener('lostpointercapture',event=>{if(event.pointerId===dragPointer)dragPointer=null;});
canvas.addEventListener('wheel',event=>{event.preventDefault();if(laptopProgram.active)return;if(documentViewer.active){documentViewer.setZoom(documentViewer.zoom*Math.exp(event.deltaY*.0015));return;}if(mobilePuzzle.active||mobileCamera.returning)return;if(rescueChairs.state.pulling||chairSeat.moving||laptopOpening.active||figpalRounds.active||mugTrap.active||sawTrap.active||plushCut.active||axeInteraction.active||gameEnded||gameWon||acidLeaks.dying||fireHazard.dying||fireAlarm.dying)return;arrivalCameraMove.cancel();drawerCamera.pause();acidCamera.cancel();alarmCamera.cancel();resetting=false;state.zoom=THREE.MathUtils.clamp(state.zoom+event.deltaY*.0005,.78,1.0);},{passive:false});

// Export the rendered camera, including responsive framing and zoom, as a paste-ready prompt.
const copyViewButton=document.querySelector('#copy-view'),copyViewLabel=copyViewButton.querySelector('span');
const copyStatus=document.querySelector('#copy-status'),copyFallback=document.querySelector('#copy-fallback'),viewText=document.querySelector('#view-text');
let copyFeedbackTimer;
function currentViewPrompt(){
 const roundedVector=vector=>vector.toArray().map(value=>Number(value.toFixed(6)));
 const direction=camera.getWorldDirection(new THREE.Vector3());
 const view={position:roundedVector(camera.position),lookAt:roundedVector(camera.position.clone().add(direction)),fov:Number(camera.fov.toFixed(4))};
 return `Set this as the default camera view for Figsaw:\n${JSON.stringify(view,null,2)}`;
}
function copySelectedText(text){
 const selection=document.createElement('textarea');selection.value=text;selection.readOnly=true;
 selection.style.cssText='position:fixed;left:-9999px;top:0;font-size:16px';document.body.append(selection);
 selection.focus();selection.select();selection.setSelectionRange(0,text.length);
 let copied=false;
 try{copied=document.execCommand('copy');}catch{}
 selection.remove();copyViewButton.focus({preventScroll:true});return copied;
}
copyViewButton.addEventListener('click',async()=>{
 const text=currentViewPrompt();viewText.value=text;clearTimeout(copyFeedbackTimer);
 let copied=false;
 try{if(navigator.clipboard?.writeText){await navigator.clipboard.writeText(text);copied=true;}}catch{}
 if(!copied)copied=copySelectedText(text);
 if(copied){
  copyFallback.hidden=true;copyViewLabel.textContent='Copied';copyStatus.textContent='View copied. Paste it into the chat to set the default view.';
 }else{
  copyFallback.hidden=false;viewText.focus();viewText.select();
  copyStatus.textContent='Select and copy the view below, then paste it into the chat.';
 }
 copyFeedbackTimer=setTimeout(()=>{copyViewLabel.textContent='Copy view';},2200);
});
document.querySelector('#close-copy').addEventListener('click',()=>{copyFallback.hidden=true;copyViewButton.focus();});

let requestedPixelRatio=quality.pixelRatio;
function resize(){
 const {width,height}=canvas.getBoundingClientRect();if(!width||!height)return;
 renderer.setPixelRatio(drawingPixelRatio(quality,width,height,requestedPixelRatio));renderer.setSize(width,height,false);camera.aspect=width/height;camera.fov=homeCamera.fov*state.zoom;camera.updateProjectionMatrix();
}
const resizeObserver=new ResizeObserver(resize);resizeObserver.observe(canvas);resize();
const clock=new THREE.Clock();
let contextLost=false,sceneReady=false,frameRequest=0,lastRenderAt=0,lastShadowTime=-Infinity,lastQualityCheck=0,slowFrames=0,frameSamples=0;
function scheduleFrame(){if(sceneReady&&!contextLost&&!frameRequest&&!document.hidden)frameRequest=requestAnimationFrame(render);}
document.addEventListener('visibilitychange',()=>{frameRate.reset();if(document.hidden){fireAlarm.silence();cancelAnimationFrame(frameRequest);frameRequest=0;releaseControls();}else{lastRenderAt=0;clock.getDelta();scheduleFrame();}});
function render(){
 frameRequest=0;if(document.hidden||contextLost)return;
 const cpuStart=performance.now();
 const frameInterval=lastRenderAt?cpuStart-lastRenderAt:0;
 if(lastRenderAt&&frameInterval<1000/quality.maxFps-1){scheduleFrame();return;}
 lastRenderAt=cpuStart;
 const dt=Math.min(clock.getDelta(),.1),t=state.time+=dt,eased=1-Math.exp(-dt*12);
 if(gameWon){
  exitDoor.update(reducedMotion);renderer.render(scene,camera);frameRate.frame(performance.now());
  if(t-escapedAt>1.5){escapeScreen.hidden=false;if(!leaderboardUI.focusResult())document.querySelector('#new-game').focus({preventScroll:true});frameRate.reset();return;}
  scheduleFrame();return;
 }
 // Once the trap finishes, only animate the lightweight screen overlay.
 if(gameEnded){frameRate.reset();updateGameOver(t);if(!deathTransition.finished)scheduleFrame();return;}
 if(resetting&&!laptopProgram.active){
  state.yaw=wrapAngle(state.yaw+wrapAngle(homeView.yaw-state.yaw)*eased*.5);state.pitch=mix(state.pitch,homeView.pitch,eased*.5);state.zoom=mix(state.zoom,1,eased*.5);
  cameraPosition.lerp(homePosition,eased*.5);
  if(Math.abs(wrapAngle(state.yaw-homeView.yaw))+Math.abs(state.pitch-homeView.pitch)+Math.abs(state.zoom-1)+cameraPosition.distanceTo(homePosition)<.005){
   state.yaw=homeView.yaw;state.pitch=homeView.pitch;state.zoom=1;cameraPosition.copy(homePosition);resetting=false;
  }
 }
 updateEntrance(t);contactShadows?.update();
 if(entranceArrived&&t>=nextDialogueAt)showFigsawDialogue(dialogueLineIndex+1);
 if(arrivalCameraMove.active)resetting=false;
 if(dragPointer!==null)arrivalCameraMove.cancel();
 if(chairSeat.occupied||laptopOpening.active||mugTrap.active||sawTrap.active||plushCut.active||axeInteraction.active||drawerCamera.active||mobileCamera.active||documentViewer.active)arrivalCameraMove.cancel();
 arrivalCameraMove.update(t,cameraPosition,state,reducedMotion);
 drawerCamera.update(t,reducedMotion);acidCamera.update(t,reducedMotion);alarmCamera.update(t,reducedMotion);chairSeat.update(t,reducedMotion);
 if(laptopOpening.update(t,reducedMotion))finishOpeningLaptop(true);
 updateFigpalRound(t);figpalCamera.update(t,reducedMotion);mobileCamera.update(t,reducedMotion);documentViewer.update(t,reducedMotion);
 const hazardFrame=hazardClock.update(t,figpalRounds.active);
 const viewYaw=state.yaw;
 // Manual controls rotate the view only; scripted interactions own camera position.
 if(!laptopProgram.active){
 camera.position.copy(cameraPosition);
 viewDirection.set(-Math.sin(viewYaw)*Math.cos(state.pitch),Math.sin(state.pitch),-Math.cos(viewYaw)*Math.cos(state.pitch));
 cameraTarget.copy(cameraPosition).add(viewDirection);camera.lookAt(cameraTarget);
 const fov=homeCamera.fov*state.zoom;
 if(Math.abs(camera.fov-fov)>.001){camera.fov=fov;camera.updateProjectionMatrix();}
 }
 const dialogueMouth=dialogueMouthAmount(dialogueSpeech,t);
 const tapMouth=t<state.talkUntil?.16+.7*Math.sin(t*10)**2:0;
 const mouthTarget=state.space?1:Math.max(dialogueMouth,tapMouth);
 state.jaw=mix(state.jaw,mouthTarget,eased);jaw.position.y=-state.jaw*maxMouthTravel;
 puppet.position.y=riderSeatY+state.jaw*maxMouthTravel*riderScale;
 const mobileEvent=mobileInspection.update(t,reducedMotion);mobileUI.sync();syncInspectionBack();syncChairButton();syncSupplies();
 if(mobileEvent==='restring')inventory.remove('string');
 axeInteraction.update(t,reducedMotion);cancelAxeSelection.disabled=axeInteraction.active;
 const physicalPosition=chairSeat.occupied?chairSeat.hazardPosition:documentViewer.origin;
 const acidFinished=!hazardFrame.paused&&!fireAlarm.dying&&acidLeaks.update(hazardFrame.time,hazardFrame.dt,physicalPosition,camera,reducedMotion,{protectedFromAcid:chairSeat.protectedFromAcid});
 const fireFinished=!hazardFrame.paused&&fireHazard.update(hazardFrame.time,hazardFrame.dt,physicalPosition,camera,reducedMotion,fireAlarm.dying);
 const fireWarningOpacity=fireHazard.warningOpacity(hazardFrame.time,reducedMotion);fireWarning.hidden=fireWarningOpacity<=0;fireWarning.style.opacity=String(fireWarningOpacity);
 const alarmFinished=!hazardFrame.paused&&fireAlarm.update(hazardFrame.time,camera,reducedMotion);
 if(acidLeaks.dying||fireHazard.dying||fireAlarm.dying)releaseControls();
 const mugFinished=mugTrap.update(t,reducedMotion);
 restraint.update(t,reducedMotion,chainMenu.active||mugTrap.active||sawTrap.active||inventory.equipped==='key'&&restraint.locked,mugTrap.handPose||laptopOpening.handPose,sawTrap.armLift(t,reducedMotion));
 if(plushCut.update(t,reducedMotion)){handsaw.visible=false;}
 const sawFinished=sawTrap.update(t,reducedMotion);
 const failureCause=diagnostics.invulnerable?null:resolveGameOverCause({alarm:fireAlarm.blackout(hazardFrame.time)>0?fireAlarm.outcome:null,deadline:figpalRounds.blackout(t)>0,saw:sawTrap.blackout>0,fire:fireHazard.blackout(hazardFrame.time)>0,acid:acidLeaks.blackout(hazardFrame.time)>0});
 if(failureCause){deathTransition.start(t,reducedMotion);document.body.classList.add('death-active');}
 const deathFrame=updateGameOver(t);
 if(deathFrame.visible||deathFrame.blackout>0)mugEyeImpact.hidden=true;else mugImpactOverlay.update(mugTrap);
 if(mugFinished){mugTrap.reset();mugImpactOverlay.reset();restraintStatus.textContent='Your vision clears.';}
 if(diagnostics.invulnerable){
  if(sawFinished){sawTrap.reset();handsaw.visible=!inventory.has('saw');}
 }
 if(alarmFinished)endGame(fireAlarm.outcome==='acid'?'explosion':'laptop');
 else if(figpalRoundFinished)endGame('deadline');
 else if(sawFinished)endGame('saw');
 else if(fireFinished)endGame('fire');
 else if(acidFinished)endGame('acid');
 laptop.update(dt,reducedMotion);chargingKit.update(t,reducedMotion);
 laptopProgram.update(dt,t,reducedMotion);
 fluorescent.intensity=fluorescentPower*updateOffice(t,reducedMotion,camera.position);
 if(chairSeat.seated&&!documentViewer.active&&!mobilePuzzle.active&&!drawerCamera.active)cameraPosition.add(rescueChairs.playerOffset);
 inventoryUI.sync();syncRescueControls();diagnosticUI.sync();leaderboardUI.update();
 model.updateMatrixWorld(true);
 // One shared distant target keeps both eyes coordinated. Their faster motion
 // leads the head, then settles back toward the viewer between glances.
 puppet.localToWorld(gazeOrigin.set(-.09,1.86,1.0));
 gazeDirection.copy(camera.position).sub(gazeOrigin);
 const gazeDistance=Math.max(1,gazeDirection.length());
 gazeDirection.normalize().applyAxisAngle(gazeUp,idlePose.gazeYaw);
 gazeDirection.y+=idlePose.gazePitch;gazeDirection.normalize();
 gazeTarget.copy(gazeOrigin).addScaledVector(gazeDirection,gazeDistance);
 for(const eye of trackingEyes){
  previousEyeRotation.copy(eye.quaternion);eye.lookAt(gazeTarget);
  if(!reducedMotion)eye.quaternion.copy(previousEyeRotation.slerp(eye.quaternion,1-Math.exp(-dt*16)));
 }
 if(renderer.shadowMap.enabled&&t-lastShadowTime>=1/quality.shadowHz){renderer.shadowMap.needsUpdate=true;lastShadowTime=t;}
 if(inventoryUI.active)inventoryPreviews.update();
 updateTestingMode(t);
 renderer.render(scene,camera);
 countdownHUD.update(performance.now()/1000,lastCountdownSeconds,{enabled:!gameEnded&&!gameWon&&!figpalRounds.active,forceCorner:inventoryUI.active||laptopProgram.active});
 frameRate.frame(performance.now());
 updateArrivalDialogue(t);loweringDialogue.update(t);hangingPleas.update(t,documentViewer.active||laptopProgram.active||mobilePuzzle.active||doorKeypadUI.active||figpalRounds.active||fireAlarm.dying);figpalBubbles.update(camera,t);profiler.frame(cpuStart);
 const frameCost=performance.now()-cpuStart;frameSamples++;if(frameCost>quality.targetFrameMs||frameInterval>quality.targetFrameMs*1.4)slowFrames++;
 if(t-lastQualityCheck>4){
  if(frameSamples>30&&slowFrames/frameSamples>.65&&requestedPixelRatio>quality.minPixelRatio){requestedPixelRatio=Math.max(quality.minPixelRatio,requestedPixelRatio-.2);resize();}
  lastQualityCheck=t;slowFrames=0;frameSamples=0;
 }
 scheduleFrame();
}
await yieldStartup('Warming up the lights…');
camera.position.copy(homePosition);camera.lookAt(new THREE.Vector3(...homeCamera.lookAt));camera.updateMatrixWorld(true);
// On phones compile only what the first render actually uses. Precompiling the
// entire scene also compiles hidden traps/skeletons and duplicates clipping variants.
(quality.mobile?Promise.resolve():renderer.compileAsync(scene,camera)).then(()=>{profiler.mark('shadersReady');sceneReady=true;clock.getDelta();render();startupProgress.finish();}).catch(error=>{console.error(error);startupProgress.fail();});
installGraphicsRecovery(canvas,{
 status:loadingStatus,
 pause(){contextLost=true;frameRate.reset();cancelAnimationFrame(frameRequest);frameRequest=0;releaseControls();},
 lowerQuality(){renderer.shadowMap.enabled=false;requestedPixelRatio=Math.min(requestedPixelRatio,.6);resize();},
 resume(){contextLost=false;lastRenderAt=0;clock.getDelta();scheduleFrame();}
});
