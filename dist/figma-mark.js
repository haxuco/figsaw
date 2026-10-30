// Exact vector paths and colors from assets/figma-icon.svg (the supplied brand asset).
// Crop only its transparent artboard padding when drawing a visible-width decal.
const shapes=[
 ['#24CB71','M312 840C312 784.772 356.772 740 412 740H512V840C512 895.228 467.228 940 412 940C356.772 940 312 895.228 312 840Z'],
 ['#FF7237','M512 340V540H612C667.228 540 712 495.228 712 440C712 384.772 667.228 340 612 340H512Z'],
 ['#00B6FF',null],
 ['#FF3737','M312 440C312 495.228 356.772 540 412 540H512V340H412C356.772 340 312 384.772 312 440Z'],
 ['#874FFF','M312 640C312 695.228 356.772 740 412 740H512V540H412C356.772 540 312 584.772 312 640Z'],
];
let paths;
export function drawFigmaMark(ctx,x,y,width){
 paths??=shapes.map(([,data])=>{const path=new Path2D(data??'');if(!data)path.arc(611.167,640,100,0,Math.PI*2);return path;});
 ctx.save();ctx.translate(x,y);ctx.scale(width/400,width/400);ctx.translate(-312,-340);
 shapes.forEach(([color],i)=>{ctx.fillStyle=color;ctx.fill(paths[i]);});
 ctx.restore();
}
