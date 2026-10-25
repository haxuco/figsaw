// Flat, five-color Figma mark, drawn locally for the lid decal and display header.
export function drawFigmaMark(ctx,x,y,width){
 const u=width/2,r=u/2;
 ctx.save();ctx.translate(x,y);
 function leftLobe(top,color){ctx.fillStyle=color;ctx.beginPath();ctx.moveTo(u,top);ctx.lineTo(r,top);ctx.arc(r,top+r,r,-Math.PI/2,Math.PI/2,true);ctx.lineTo(u,top+u);ctx.closePath();ctx.fill();}
 leftLobe(0,'#f24e1e');leftLobe(u,'#a259ff');
 ctx.fillStyle='#ff7262';ctx.beginPath();ctx.moveTo(u,0);ctx.lineTo(u+r,0);ctx.arc(u+r,r,r,-Math.PI/2,Math.PI/2);ctx.lineTo(u,u);ctx.closePath();ctx.fill();
 ctx.fillStyle='#1abcfe';ctx.beginPath();ctx.arc(u+r,u+r,r,0,Math.PI*2);ctx.fill();
 ctx.fillStyle='#0acf83';ctx.beginPath();ctx.moveTo(u,2*u);ctx.lineTo(u,2*u+r);ctx.arc(r,2*u+r,r,0,Math.PI*1.5);ctx.closePath();ctx.fill();
 ctx.restore();
}
