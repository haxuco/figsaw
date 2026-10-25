// Opt-in, read-only diagnostics for repeatable local QA (?profile=1).
export function createPerformanceReport(renderer,scene){
 if(!new URLSearchParams(location.search).has('profile'))return {mark(){},frame(){}};
 const node=document.createElement('output');node.id='performance-report';node.hidden=true;document.body.append(node);
 const start=performance.now(),stages={},samples=[];let inventory=null;let firstFrame=0,lastFrame=0,frames=0;
 function mark(name){stages[name]=Math.round(performance.now()-start);}
 function resources(){const geometries=new Set(),textures=new Set(),groups=[];let bytes=0,textureBytes=0,lights=0;
  scene.traverse(o=>{if(o.isLight&&o.visible)lights++;if(o.geometry)geometries.add(o.geometry);for(const m of Array.isArray(o.material)?o.material:[o.material])if(m)for(const v of Object.values(m))if(v?.isTexture)textures.add(v);
   if(o.isGroup&&o.name){let meshes=0,triangles=0;o.traverse(c=>{if(c.isMesh){meshes++;triangles+=(c.geometry?.index?.count||c.geometry?.attributes.position?.count||0)/3*(c.isInstancedMesh?c.count:1);}});if(meshes>15)groups.push({name:o.name,meshes,triangles:Math.round(triangles)});}
  });
  for(const g of geometries){for(const a of Object.values(g.attributes))bytes+=a.array.byteLength;bytes+=g.index?.array.byteLength||0;}
  for(const t of textures){const i=t.image;textureBytes+=(i?.width||0)*(i?.height||0)*4*(t.generateMipmaps?4/3:1);}
  return{geometryMB:+(bytes/1048576).toFixed(1),textureMB:+(textureBytes/1048576).toFixed(1),lights,largestTextures:[...textures].map(t=>({w:t.image?.width,h:t.image?.height})).sort((a,b)=>b.w*b.h-a.w*a.h).slice(0,10),groups:groups.sort((a,b)=>b.meshes-a.meshes).slice(0,18)};
 }
 return {mark,frame(cpuStart){
  const now=performance.now();if(!firstFrame)firstFrame=now-start;
  if(lastFrame){samples.push(now-lastFrame);if(samples.length>90)samples.shift();}lastFrame=now;frames++;
  if(frames===1||frames%30===0){let meshes=0;scene.traverse(o=>{if(o.isMesh)meshes++;});inventory??=resources();node.textContent=JSON.stringify({inventory,programs:renderer.info.programs.length,firstFrameMs:Math.round(firstFrame),stages,frameMs:samples.length?Math.round(samples.reduce((a,b)=>a+b,0)/samples.length*10)/10:0,renderCpuMs:Math.round((now-cpuStart)*10)/10,frames,calls:renderer.info.render.calls,triangles:renderer.info.render.triangles,geometries:renderer.info.memory.geometries,textures:renderer.info.memory.textures,meshes,pixelRatio:renderer.getPixelRatio()});}
 }};
}
