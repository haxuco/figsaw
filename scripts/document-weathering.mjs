// Baked vector damage keeps inspection artwork sharp without runtime effects.
const f=n=>Number(n.toFixed(2));
const path=(d,attrs='')=>`<path d="${d}" ${attrs}/>`;
const rect=(x,y,w,h,attrs='')=>`<rect x="${f(x)}" y="${f(y)}" width="${f(w)}" height="${f(h)}" ${attrs}/>`;
export function weatheredDocument(w,h,content,board=false){
 let seed=(w*31+h*13+content.length*97)>>>0;const random=()=>{seed=(seed*1664525+1013904223)>>>0;return seed/4294967296;},range=(a,b)=>a+random()*(b-a);
 const unit=Math.min(w,h),edge=unit*.027,points=[];
 // Uneven edges and missing wedges replace perfectly rectangular new paper.
 for(let x=0;x<=w;x+=w/45)points.push([x,board?0:range(1,edge*.23)+(random()<.1?range(edge*.4,edge*1.4):0)]);
 for(let y=0;y<=h;y+=h/36)points.push([w-(board?0:range(1,edge*.3)+(random()<.1?edge:0)),y]);
 for(let x=w;x>=0;x-=w/45)points.push([x,h-(board?0:range(1,edge*.6)+(random()<.14?range(edge,edge*2.1):0))]);
 for(let y=h;y>=0;y-=h/36)points.push([board?0:range(1,edge*.35)+(random()<.1?edge*.7:0),y]);
 const outline=points.map((p,i)=>(i?'L':'M')+p.map(f).join(' ')).join('')+'Z';
 function bloom(x,y,rx,ry,color,opacity){const points=[];for(let j=0;j<30;j++){const a=j/30*Math.PI*2,r=range(.74,1.16);points.push([x+Math.cos(a)*rx*r,y+Math.sin(a)*ry*r]);}let d=`M${f((points[29][0]+points[0][0])/2)} ${f((points[29][1]+points[0][1])/2)}`;for(let j=0;j<30;j++){const p=points[j],next=points[(j+1)%30];d+=`Q${f(p[0])} ${f(p[1])} ${f((p[0]+next[0])/2)} ${f((p[1]+next[1])/2)}`;}return path(d+'Z',`fill="${color}" opacity="${opacity}"`);}
 let under='',over='';
 // Broad tide marks, mildew shadows and nicotine-yellow discoloration.
 for(let i=0;i<11;i++){
  const x=range(0,w),y=i%3===0?range(-.06,.08)*h:i%3===1?range(.88,1.02)*h:range(0,h),rx=range(.09,.24)*w,ry=range(.035,.12)*h;
  under+=bloom(x,y,rx,ry,i%2?'#847047':'#51583b',range(.08,.19));
  over+=bloom(x,y,rx,ry,i%2?'#755731':'#4a5134',range(.06,.11));
  if(i%3!==2){const d=`M${f(x-rx)} ${f(y)}q${f(rx*.45)} ${f(ry*1.7)} ${f(rx)} ${f(ry*.8)}t${f(rx)} ${f(-ry*.7)}`;over+=path(d,'fill="none" stroke="#6b512e" stroke-width="2" opacity=".24"');}
 }
 // Vertical leak trails are thick at their source and accumulate at the bottom.
 for(let i=0;i<24;i++){
  const x=range(0,w),length=range(.08,.38)*h,bend=range(-12,12);over+=path(`M${f(x)} 0Q${f(x+bend)} ${f(length*.4)} ${f(x+bend*.5)} ${f(length)}`,`fill="none" stroke="url(#drip)" stroke-width="${f(range(1,unit*.009))}"`);
 }
 // Small irregular colonies, concentrated along damp perimeter rather than clues.
 for(let colony=0;colony<15;colony++){
  const side=colony%4,cx=side<2?(side?w:0)+range(-.02,.04)*w:range(0,w),cy=side<2?range(0,h):(side===2?0:h)+range(-.03,.03)*h,r=range(.025,.085)*unit;
  over+=bloom(cx,cy,r*1.3,r, '#414735',.21);
  for(let j=0;j<27;j++){const a=range(0,Math.PI*2),distance=Math.sqrt(random())*r,x=cx+Math.cos(a)*distance,y=cy+Math.sin(a)*distance,size=range(.7,4.4)*(unit/700);
   over+=`<circle cx="${f(x)}" cy="${f(y)}" r="${f(size)}" fill="${j%3?'#292f23':'#858c60'}" opacity="${f(range(.25,.7))}"/>`;
  }
 }
 // Embedded grit and fine fibers are baked into each document, not extra scene meshes.
 for(let i=0;i<380;i++){
  const x=range(0,w),y=range(0,h);over+=rect(x,y,range(.4,2.5),range(.4,1.8),`fill="${i%4?'#3d3b29':'#e4d8b1'}" opacity="${f(range(.12,.4))}"`);
 }
 if(board){
  // Dirty eraser drag, permanent marker ghosts, chips in the enamel.
  for(let i=0;i<13;i++){const y=range(.13,.95)*h,x=range(0,w*.6);over+=path(`M${f(x)} ${f(y)}q${f(w*.12)} -10 ${f(w*range(.12,.45))} ${f(range(-9,9))}`,`fill="none" stroke="#69735b" stroke-width="${f(range(3,12))}" opacity=".11"`);}
  for(let i=0;i<24;i++){const x=range(0,w),y=i%2?range(0,22):range(h-35,h);over+=path(`M${f(x)} ${f(y)}l14 2-6 8-12-2Z`,'fill="#4b4d3c" opacity=".62"');}
  for(const [x,y] of[[w*.16,h*.15],[w*.78,h*.58]]){over+=rect(x,y,w*.10,h*.07,'fill="#a4945f" opacity=".16" stroke="#806b3d" stroke-width="2"');}
 }else{
  // Brittle fold lines, adhesive residue and lifted/folded corners.
  over+=path(`M${f(w*.49)} 0l${f(-w*.006)} ${h}M0 ${f(h*.51)}l${w} ${f(h*.009)}`,'fill="none" stroke="#5b4e34" stroke-width="5" opacity=".20"');
  over+=path(`M${f(w*.49+2)} 0l${f(-w*.006)} ${h}M0 ${f(h*.51+3)}l${w} ${f(h*.009)}`,'fill="none" stroke="#ece0ba" stroke-width="2" opacity=".48"');
  const curl=unit*.07;over+=path(`M${f(w-curl)} ${h}l${f(curl*.08)} ${f(-curl)} ${f(curl)} ${f(curl*.67)}Z`,'fill="#403c29" opacity=".4"')+path(`M${f(w-curl)} ${h}l0 ${f(-curl)} ${f(curl)} ${f(curl*.7)}Z`,'fill="#b5a77d" stroke="#766849" stroke-width="1"');
  for(const x of[w*.1,w*.78])over+=`<g transform="rotate(${f(range(-8,8))} ${f(x)} 19)">${rect(x,5,w*.12,unit*.035,'fill="#ab9561" opacity=".29"')}${path(`M${f(x+5)} 10h${f(w*.10)}`,'stroke="#e1d1a0" opacity=".25"')}</g>`;
 }
 const defs=`<defs><clipPath id="paper-edge">${path(outline)}</clipPath><linearGradient id="drip" x2="0" y2="1"><stop stop-color="#51432a" stop-opacity=".38"/><stop offset="1" stop-color="#726344" stop-opacity="0"/></linearGradient></defs>`;
 return `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">${defs}<g clip-path="url(#paper-edge)">${rect(0,0,w,h,`fill="${board?'#bfc5ad':'#c6b98e'}"`)}${under}<g font-family="Arial,Helvetica,sans-serif" fill="#28362f" opacity=".85">${content}</g>${rect(0,0,w,h,'fill="#8b7745" opacity=".09"')}${over}${path(outline,'fill="none" stroke="#655d3c" stroke-width="3" opacity=".60"')}</g></svg>`;
}
