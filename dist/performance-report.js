// Opt-in, read-only diagnostics for repeatable local QA (?profile=1).
export function createPerformanceReport(renderer,scene){
 if(!new URLSearchParams(location.search).has('profile'))return {mark(){},frame(){}};
 const node=document.createElement('output');node.id='performance-report';node.hidden=true;document.body.append(node);
 const start=performance.now(),stages={},samples=[];let firstFrame=0,lastFrame=0,frames=0;
 function mark(name){stages[name]=Math.round(performance.now()-start);}
 return {mark,frame(cpuStart){
  const now=performance.now();if(!firstFrame)firstFrame=now-start;
  if(lastFrame){samples.push(now-lastFrame);if(samples.length>90)samples.shift();}lastFrame=now;frames++;
  if(frames===1||frames%30===0){let meshes=0;scene.traverse(o=>{if(o.isMesh)meshes++;});node.textContent=JSON.stringify({firstFrameMs:Math.round(firstFrame),stages,frameMs:samples.length?Math.round(samples.reduce((a,b)=>a+b,0)/samples.length*10)/10:0,renderCpuMs:Math.round((now-cpuStart)*10)/10,frames,calls:renderer.info.render.calls,triangles:renderer.info.render.triangles,geometries:renderer.info.memory.geometries,textures:renderer.info.memory.textures,meshes,pixelRatio:renderer.getPixelRatio()});}
 }};
}
