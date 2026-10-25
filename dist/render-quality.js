// Conservative phone/tablet budgets, including iPads with a desktop user agent.
export function chooseRenderQuality({coarse=false,width=1280,cores=8,memory=8,dpr=1,mobileHint=false,safe=false}={}){
 const mobile=safe||mobileHint||coarse||width<700||cores<=4||memory<=4;
 return Object.freeze({mobile,safe,pixelRatio:Math.min(dpr,mobile?(safe?.75:1):1.5),minPixelRatio:Math.min(dpr,mobile?.6:1),maxPixels:safe?260000:mobile?520000:2200000,maxFps:mobile?30:60,shadowSize:mobile?512:1536,shadowHz:mobile?5:24,shadows:!mobile&&!safe,textureSize:mobile?128:512,maxTextureSize:safe?128:mobile?256:1024,chainSegments:mobile?12:24,chainRadialSegments:mobile?3:5,effectsHz:mobile?15:40,targetFrameMs:mobile?33.3:22});
}
export function drawingPixelRatio(quality,width,height,requested=quality.pixelRatio){
 return Math.min(requested,Math.sqrt(quality.maxPixels/Math.max(1,width*height)));
}
let safe=false;try{safe=sessionStorage.getItem('figsaw-safe-graphics')==='1';}catch{}
const hints=typeof window==='undefined'?{}:{coarse:matchMedia('(pointer:coarse)').matches,width:innerWidth,cores:navigator.hardwareConcurrency||8,memory:navigator.deviceMemory||8,dpr:devicePixelRatio||1,mobileHint:new URLSearchParams(location.search).get('quality')==='mobile'||/Android|iPhone|iPad|iPod/.test(navigator.userAgent)||(navigator.platform==='MacIntel'&&navigator.maxTouchPoints>1),safe};
export const renderQuality=chooseRenderQuality(hints);
