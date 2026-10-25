// Device hints pick a conservative starting budget; frame timing can lower DPR further.
export function chooseRenderQuality({coarse=false,width=1280,cores=8,memory=8,dpr=1}={}){
 const mobile=coarse||width<700||cores<=4||memory<=4;
 return Object.freeze({mobile,pixelRatio:Math.min(dpr,mobile?1.25:1.5),minPixelRatio:Math.min(dpr,mobile?.75:1),maxFps:mobile?30:Infinity,shadowSize:mobile?1024:1536,shadowHz:mobile?12:24,textureSize:mobile?256:512,chainSegments:mobile?16:24,chainRadialSegments:mobile?4:5,effectsHz:mobile?24:40,targetFrameMs:mobile?33.3:22});
}
const hints=typeof window==='undefined'?{}:{coarse:matchMedia('(pointer:coarse)').matches,width:innerWidth,cores:navigator.hardwareConcurrency||8,memory:navigator.deviceMemory||8,dpr:devicePixelRatio||1};
export const renderQuality=chooseRenderQuality(hints);
