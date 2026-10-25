import {renderQuality} from './render-quality.js';
// Draw in existing artwork coordinates without allocating desktop-size canvases.
export function artCanvas(width=512,height=width,maxSize=renderQuality.maxTextureSize){
 const scale=Math.min(1,maxSize/Math.max(width,height));
 const canvas=document.createElement('canvas');canvas.width=Math.max(1,Math.round(width*scale));canvas.height=Math.max(1,Math.round(height*scale));
 const context=canvas.getContext('2d');context.scale(canvas.width/width,canvas.height/height);
 return [canvas,context];
}

export function fitTextureImage(texture,maxSize=renderQuality.maxTextureSize){
 const image=texture.image;if(!image||Math.max(image.width,image.height)<=maxSize)return texture;
 const ratio=maxSize/Math.max(image.width,image.height),c=document.createElement('canvas');c.width=Math.max(1,Math.round(image.width*ratio));c.height=Math.max(1,Math.round(image.height*ratio));
 c.getContext('2d').drawImage(image,0,0,c.width,c.height);texture.image=c;texture.needsUpdate=true;return texture;
}
