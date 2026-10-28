// Small vector overlays stay sharp on phones without adding image downloads.
function jaggedMark(seed){
 const points=[];
 for(let i=0;i<64;i++){
  const angle=i/64*Math.PI*2;
  const notch=i%17===0?.79:i%23===0?1.10:1;
  const r=(73+7*Math.sin(angle*5+seed)+4*Math.sin(angle*11+seed*.7))*notch;
  points.push([Math.cos(angle)*r,Math.sin(angle)*r]);
 }
 const midpoint=(a,b)=>`${((a[0]+b[0])/2).toFixed(2)},${((a[1]+b[1])/2).toFixed(2)}`;
 let d='M'+midpoint(points.at(-1),points[0]);
 points.forEach((p,i)=>{const next=points[(i+1)%points.length];d+=`Q${p[0].toFixed(2)},${p[1].toFixed(2)} ${midpoint(p,next)}`;});
 return d+'Z';
}
function wound(index){
 const id=`mug-blood-${index}`,path=jaggedMark(index*3.7+1),streaks=[[-36,235,5],[-12,315,8],[19,195,4],[43,275,6]];
 const drips=streaks.map(([x,length,width],i)=>{
  x+=index?7-i*3:0;const sway=(i%2?1:-1)*9;
  return `<path d="M ${x-width} -8 C ${x-width+4} 48,${x+sway-width} ${length*.55},${x+sway-width*.6} ${length-14} C ${x+sway-width*1.6} ${length+7},${x+sway+width*1.6} ${length+7},${x+sway+width*.6} ${length-14} C ${x+sway+width} ${length*.55},${x+width-3} 48,${x+width} -8 Z"/>`;
 }).join('');
 return `<div class="eye-wound">
  <svg class="blood-streaks" viewBox="-100 0 200 330" preserveAspectRatio="none"><defs><linearGradient id="${id}-drip" x2=".3" y2="1"><stop stop-color="#9e0013"/><stop offset=".65" stop-color="#bc1021"/><stop offset="1" stop-color="#69000e"/></linearGradient></defs><g fill="url(#${id}-drip)">${drips}</g></svg>
  <svg class="wound-mark" viewBox="-100 -100 200 200"><defs><radialGradient id="${id}"><stop stop-color="#76000c"/><stop offset=".48" stop-color="#d91525"/><stop offset=".82" stop-color="#b00618"/><stop offset="1" stop-color="#63000d"/></radialGradient></defs>
   <path d="${path}" fill="url(#${id})"/>
   <path d="${jaggedMark(index+5)}" transform="scale(.69 .76) rotate(${index?21:-13})" fill="#dd1c2a" opacity=".3"/>
   <path d="${jaggedMark(index+8)}" transform="scale(.22 .27) rotate(31)" fill="#65000e" opacity=".55"/>
   <g fill="#b6081b"><circle cx="-82" cy="-31" r="3"/><circle cx="49" cy="-80" r="2.6"/><circle cx="81" cy="20" r="4"/><circle cx="-33" cy="82" r="2.7"/></g>
  </svg>
 </div>`;
}
export function createMugImpactOverlay(element){
 element.innerHTML=wound(0)+wound(1);
 function reset(){element.hidden=true;element.style.opacity='0';for(const name of['--eye-scale','--eye-left','--eye-right','--drip-length','--drip-width','--drip-opacity'])element.style.removeProperty(name);}
 function update(trap,blackout){
  element.hidden=trap.eyeImpact<=0||blackout>=1;if(element.hidden)return;
  element.style.opacity=String(trap.eyeImpact);
  const spread=trap.eyeSpread??.82;
  element.style.setProperty('--eye-left',`${(1-spread)*50}%`);
  element.style.setProperty('--eye-right',`${(1+spread)*50}%`);
  element.style.setProperty('--eye-scale',String(.035+1.115*trap.eyeGrowth));
  element.style.setProperty('--drip-length',String(trap.eyeDrip));
  element.style.setProperty('--drip-width',String(.12+.88*trap.eyeGrowth));
  element.style.setProperty('--drip-opacity',String(Math.min(1,trap.eyeDrip*5)));
 }
 reset();return {update,reset};
}
