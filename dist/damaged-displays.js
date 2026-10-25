import * as THREE from './vendor/three.module.js';

// A laminated display stack: damaged LCD, reflective cover, then hairline glass edges.
export function createDisplayFactory(renderer){
 const W=1024,H=576,glassMaterials=[],cache=new Map();let nextDisplay=0;
 const plane=new THREE.PlaneGeometry(.735,.410);
 function surface(){const c=document.createElement('canvas');c.width=W;c.height=H;return[c,c.getContext('2d')];}
 function tex(c,color=true){const t=new THREE.CanvasTexture(c);if(color)t.colorSpace=THREE.SRGBColorSpace;t.anisotropy=Math.min(8,renderer.capabilities.getMaxAnisotropy());return t;}
 function build(type,variant){
  let state=13817+variant*7319+(type==='hole'?20001:type==='live'?481:0);
  const rand=()=>{state=(state*1664525+1013904223)>>>0;return state/4294967296;},between=(a,b)=>a+(b-a)*rand();
  const[lcd,ctx]=surface(),[cracks,edge]=surface(),[roughness,dust]=surface(),[relief,bump]=surface();
  ctx.fillStyle='#080d10';ctx.fillRect(0,0,W,H);dust.fillStyle='#545454';dust.fillRect(0,0,W,H);bump.fillStyle='#777';bump.fillRect(0,0,W,H);
  const powered=type==='live'||type==='cracked'&&variant%2===0;
  const falloff=ctx.createLinearGradient(0,0,W,H);falloff.addColorStop(0,'#1b262a');falloff.addColorStop(.45,'#0b1217');falloff.addColorStop(1,'#040709');ctx.fillStyle=falloff;ctx.fillRect(0,0,W,H);
  if(powered){
   ctx.fillStyle='#253438';ctx.fillRect(0,0,W,27);ctx.fillRect(0,27,150,H);
   for(let row=0;row<28;row++){let x=174;for(let j=0;j<between(3,10);j++){ctx.fillStyle=['#365b51','#47615d','#354847'][Math.floor(rand()*3)];const width=between(9,93);ctx.fillRect(x,53+row*17,width,2);x+=width+between(5,15);}}
   for(let y=0;y<H;y+=3){ctx.fillStyle='rgba(0,0,0,.18)';ctx.fillRect(0,y,W,1);}
  }
  const hit={x:between(W*.20,W*.78),y:between(H*.22,H*.78)};
  function stroke(points,context,color,width,dx=0,dy=0){context.strokeStyle=color;context.lineWidth=width;context.beginPath();points.forEach(([x,y],i)=>i?context.lineTo(x+dx,y+dy):context.moveTo(x+dx,y+dy));context.stroke();}
  function fracture(points,width=1){
   stroke(points,edge,'rgba(0,3,6,.86)',width*1.9);
   stroke(points,edge,`rgba(185,212,216,${between(.45,.9)})`,width*.7,-.7,.35);
   if(rand()<.30)stroke(points,edge,'rgba(113,153,163,.35)',.5,.75,-.35);
   stroke(points,bump,'#242424',width*1.6);stroke(points,bump,'#bfbfbf',width*.7,-.7,.35);
   stroke(points,dust,'#b9b9b9',width*1.5);
  }
  const holes=[];
  if(type!=='live'){
   // Liquid-crystal bleeding has an irregular oily boundary, not a painted circular hole.
   const bruise=[];const rx=type==='hole'?between(68,107):between(42,78),ry=rx*between(.42,.75);
   for(let j=0;j<72;j++){const a=j/72*Math.PI*2,r=1+.13*Math.sin(a*5+variant)+.07*Math.sin(a*13);bruise.push([hit.x+Math.cos(a)*rx*r,hit.y+Math.sin(a)*ry*r]);}
   function fillContour(points,color,scale=1){ctx.fillStyle=color;ctx.beginPath();points.forEach(([x,y],i)=>{x=hit.x+(x-hit.x)*scale;y=hit.y+(y-hit.y)*scale;i?ctx.lineTo(x,y):ctx.moveTo(x,y);});ctx.closePath();ctx.fill();}
   for(const[scale,color]of[[1.18,'rgba(56,39,73,.46)'],[1.10,'rgba(36,72,74,.55)'],[1.05,'#151c2a'],[1,'#010204']])fillContour(bruise,color,scale);
   // Short vertical color failures stop at dead horizontal rows or at the impact zone.
   if(powered||type==='hole'&&variant===1){
    for(let j=0;j<61;j++){
     const x=hit.x+between(-rx*1.7,rx*1.7),start=j%3?0:hit.y,end=j%3?hit.y:H;
     ctx.fillStyle=['rgba(85,129,115,.65)','rgba(130,62,94,.6)','rgba(70,103,146,.60)','rgba(172,177,161,.48)'][j%4];ctx.fillRect(x,start,between(.4,2),end-start);
    }
    const blockX=hit.x+rx*.4,blockWidth=between(35,108);ctx.fillStyle='rgba(130,151,153,.23)';ctx.fillRect(blockX,0,blockWidth,hit.y);
    for(let y=0;y<hit.y;y+=3){ctx.fillStyle=`rgba(15,28,32,${between(.15,.65)})`;ctx.fillRect(blockX,y,blockWidth,1);}
    for(let j=0;j<9;j++){ctx.fillStyle=j%3?'rgba(2,5,8,.85)':'rgba(129,156,153,.45)';ctx.fillRect(0,hit.y+between(-15,18),W,between(.5,2.4));}
    fillContour(bruise,'#010204',.98);
   }
   const count=12+variant%4,angles=Array.from({length:count},(_,j)=>j/count*Math.PI*2+between(-.11,.11));
   for(const a of angles){
    const path=[[hit.x+Math.cos(a)*3,hit.y+Math.sin(a)*3]];let radius=between(7,13);
    while(radius<1300){const wobble=between(-.021,.021),x=hit.x+Math.cos(a+wobble)*radius,y=hit.y+Math.sin(a+wobble)*radius;path.push([x,y]);radius+=between(16,47);if(x<0||x>W||y<0||y>H)break;}
    fracture(path,between(.55,1.20));
    for(let j=2;j<path.length-1;j++)if(rand()<.33){
     const[x,y]=path[j],side=rand()<.5?-1:1,branchAngle=a+side*between(.18,.65),length=between(28,145),branch=[[x,y]];
     for(let k=1;k<=5;k++)branch.push([x+Math.cos(branchAngle)*length*k/5+between(-3,3),y+Math.sin(branchAngle)*length*k/5+between(-3,3)]);
     fracture(branch,between(.30,.64));
    }
   }
   // Uneven circumferential cracks join radial fractures into small retained slivers.
   for(const radius of[18,35,61,101,155])for(let j=0;j<count;j++){
    if(rand()<.28||radius>70&&rand()<.45)continue;
    const a=angles[j],b=j===count-1?angles[0]+Math.PI*2:angles[j+1],r=radius*between(.8,1.12),path=[];
    for(let k=0;k<=4;k++){const t=a+(b-a)*k/4;path.push([hit.x+Math.cos(t)*r+between(-3,3),hit.y+Math.sin(t)*r*.84+between(-2,2)]);}
    fracture(path,between(.35,.75));
   }
   for(let j=0;j<90;j++){const a=rand()*Math.PI*2,r=between(2,25),x=hit.x+Math.cos(a)*r,y=hit.y+Math.sin(a)*r*.7;fracture([[x,y],[x+between(-6,6),y+between(-5,5)]],between(.3,.8));}
   if(type==='hole'){
    // Missing tiny flakes expose the dark polarizer; most shattered glass stays laminated.
    for(let j=0;j<7;j++){const a=j/7*Math.PI*2,r=between(8,26),x=hit.x+Math.cos(a)*r,y=hit.y+Math.sin(a)*r*.7;const points=[[x,y],[x+between(4,11),y+between(-6,2)],[x+between(-3,5),y+between(4,13)]];holes.push(points);ctx.fillStyle='#000102';ctx.beginPath();points.forEach(([px,py],i)=>i?ctx.lineTo(px,py):ctx.moveTo(px,py));ctx.closePath();ctx.fill();fracture([...points,points[0]],1.0);}
   }
  }
  // Dust, finger smears and cleaning scratches mostly alter reflections, not screen brightness.
  for(let j=0;j<35;j++){
   const x=rand()*W,y=rand()*H,r=between(20,115),g=dust.createRadialGradient(x,y,0,x,y,r);g.addColorStop(0,'rgba(205,205,205,.20)');g.addColorStop(1,'rgba(160,160,160,0)');dust.fillStyle=g;dust.fillRect(x-r,y-r,r*2,r*2);
  }
  for(let j=0;j<3800;j++){const x=rand()*W,y=rand()*H;dust.fillStyle=`rgba(230,230,230,${between(.06,.4)})`;dust.fillRect(x,y,between(.4,1.3),between(.4,1.1));if(j%9===0){edge.fillStyle='rgba(135,149,146,.13)';edge.fillRect(x,y,.65,.65);}}
  for(let j=0;j<70;j++){const x=rand()*W,y=rand()*H;stroke([[x,y],[x+between(3,31),y+between(-8,8)]],dust,'rgba(189,189,189,.35)',.7);}
  // Fine perimeter grime and trapped dust under the bezel.
  edge.strokeStyle='rgba(89,93,83,.50)';edge.lineWidth=2.4;edge.strokeRect(1,1,W-2,H-2);
  const lcdMap=tex(lcd),roughMap=tex(roughness,false),bumpMap=tex(relief,false);
  const lcdMaterial=new THREE.MeshStandardMaterial({map:lcdMap,roughness:.62,metalness:0,emissiveMap:lcdMap,emissive:0xffffff,emissiveIntensity:type==='live'?.52:powered?.28:.025});
  const glass=new THREE.MeshPhysicalMaterial({color:0x9aaeb3,metalness:.08,roughness:.36,roughnessMap:roughMap,bumpMap,bumpScale:.00038,transparent:true,opacity:.27,depthWrite:false,clearcoat:1,clearcoatRoughness:.19,clearcoatRoughnessMap:roughMap,ior:1.52,envMapIntensity:.85,side:THREE.FrontSide});
  glassMaterials.push(glass);
  const cracksMaterial=new THREE.MeshStandardMaterial({map:tex(cracks),transparent:true,depthWrite:false,roughness:.38,metalness:.12,polygonOffset:true,polygonOffsetFactor:-1,polygonOffsetUnits:-1});
  return{lcdMaterial,glass,cracksMaterial,holes};
 }
 function add(group,type){
  const variant=nextDisplay++%3,key=`${type}-${variant}`;if(!cache.has(key))cache.set(key,build(type,variant));const materials=cache.get(key);
  for(const[material,z,name]of[[materials.lcdMaterial,.019,'Damaged liquid-crystal panel'],[materials.glass,.0205,'Reflective laminated screen glass'],[materials.cracksMaterial,.0213,'Fine branching glass fractures']]){
   const layer=new THREE.Mesh(plane,material);layer.position.set(0,.381,z);layer.name=name;layer.castShadow=false;layer.receiveShadow=true;group.add(layer);
  }
  // A handful of minute, tilted chips catch practical light differently from the flat panel.
  for(const points of materials.holes){
   const vertices=points.flatMap(([x,y],i)=>[(x/W-.5)*.735,(.5-y/H)*.410+.381,.0215+(i===1?.0018:0)]),g=new THREE.BufferGeometry();g.setAttribute('position',new THREE.Float32BufferAttribute(vertices,3));g.computeVertexNormals();
   const chip=new THREE.Mesh(g,materials.glass);chip.castShadow=false;group.add(chip);
  }
 }
 return{add,setEnvironment(environment){for(const mat of glassMaterials){mat.envMap=environment;mat.needsUpdate=true;}}};
}
