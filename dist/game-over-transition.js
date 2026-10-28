const smooth=(time,start,end)=>{const t=Math.max(0,Math.min(1,(time-start)/(end-start)));return t*t*(3-2*t);};

export function gameOverStyle(cause){return ['acid','saw','mug','fire','explosion'].includes(cause)?'injury':'objective';}
export function gameOverReason(cause){
 switch(cause){
  case 'acid':return 'The acid reached you.';
  case 'saw':return 'The saw cut too deep.';
  case 'mug':return 'The mug pierced your eyes.';
  case 'fire':return 'You were consumed by the fire.';
  case 'explosion':return 'You were caught in the explosion.';
  case 'laptop':return 'Water destroyed the laptop.';
  case 'deadline':return 'You ran out of time.';
  default:return 'The challenge ended in failure.';
 }
}
export function resolveGameOverCause({alarm,deadline,saw,fire,acid,mug}={}){
 if(alarm==='acid')return 'explosion';
 if(alarm==='laptop')return 'laptop';
 if(deadline)return 'deadline';
 if(saw)return 'saw';
 if(fire)return 'fire';
 if(acid)return 'acid';
 return mug?'mug':null;
}

export function createGameOverTimeline(){
 let startedAt=null,reduced=false,style=null;
 const frame={elapsed:0,visible:false,flow:0,red:0,blackout:0,finished:false,reduced:false,style:null};
 function reset(){startedAt=null;style=null;Object.assign(frame,{elapsed:0,visible:false,flow:0,red:0,blackout:0,finished:false,reduced:false,style:null});}
 return {
  start(time,reducedMotion=false,presentation='injury'){if(startedAt!==null)return false;startedAt=time;reduced=reducedMotion;style=presentation;return true;},
  update(time){
   if(startedAt===null)return frame;
   const t=Math.max(0,time-startedAt);frame.elapsed=t;frame.reduced=reduced;frame.style=style;
   if(style==='objective'){
    frame.flow=frame.red=0;frame.visible=false;
    frame.blackout=smooth(t,0,reduced?.5:1.15);
    frame.finished=t>=(reduced?.65:1.35);return frame;
   }
   frame.flow=reduced?0:smooth(t,.45,2.7);
   frame.red=reduced?smooth(t,0,.4):smooth(t,1.65,2.7);
   frame.blackout=reduced?smooth(t,.75,1.35):smooth(t,3.15,4.25);
   frame.finished=t>=(reduced?1.5:4.45);frame.visible=frame.blackout<1;
   return frame;
  },reset,get finished(){return frame.finished;}
 };
}

function curtain(){
 let path='M0 -1600 H1000 V620';
 // Unequal rounded fingers of liquid along one continuous, opaque leading edge.
 for(let i=11;i>=0;i--){
  const left=i*1000/12,right=(i+1)*1000/12,mid=(left+right)/2,tip=760+((i*73)%215),base=620+(i%3)*18;
  path+=` C${right-15} ${base},${mid+15} ${tip-75},${mid+14} ${tip-17}`;
  path+=` C${mid+19} ${tip+16},${mid-19} ${tip+16},${mid-14} ${tip-17}`;
  path+=` C${mid-15} ${tip-75},${left+15} ${base},${left} ${base}`;
 }
 return path+' V-1600 Z';
}

export function createGameOverTransition(element){
 const timeline=createGameOverTimeline(),drips=[];
 for(let i=0;i<15;i++){
  const x=20+i*69+(i%3)*7,w=4+(i*7)%9,length=510+(i*137)%470,sway=(i%2?1:-1)*13;
  const d=`M${x-w} -25 C${x-w+2} 100,${x+sway-w} ${length*.65},${x+sway-w*.7} ${length-20} C${x+sway-w*1.8} ${length+12},${x+sway+w*1.8} ${length+12},${x+sway+w*.7} ${length-20} C${x+sway+w} ${length*.65},${x+w-2} 100,${x+w} -25 Z`;
  drips.push(`<path class="death-rivulet" d="${d}" fill="url(#death-blood-liquid)"/>`);
 }
 element.innerHTML=`<div class="death-red-wash"></div><svg class="death-rivulets" viewBox="0 0 1000 1000" preserveAspectRatio="none"><defs><linearGradient id="death-blood-liquid" x2="0" y2="1"><stop stop-color="#48020b"/><stop offset=".65" stop-color="#920b1b"/><stop offset="1" stop-color="#bd2333"/></linearGradient></defs>${drips.join('')}</svg><svg class="death-blood-sheet" viewBox="0 0 1000 1000" preserveAspectRatio="none"><path d="${curtain()}" fill="url(#death-blood-liquid)"/></svg>`;
 const wash=element.querySelector('.death-red-wash'),sheet=element.querySelector('.death-blood-sheet'),streams=[...element.querySelectorAll('.death-rivulet')];
 function update(time){
  const frame=timeline.update(time);element.hidden=!frame.visible;
  if(!frame.visible)return frame;
  wash.style.opacity=String(frame.red);
  sheet.hidden=frame.reduced;sheet.style.transform=`translateY(${-112+152*frame.flow}%)`;
  for(let i=0;i<streams.length;i++){
   const delay=(i*7%11)*.065,growth=frame.reduced?0:smooth(frame.elapsed,delay,1.6+delay);
   streams[i].style.transform=`scaleY(${growth})`;
  }
  return frame;
 }
 function reset(){timeline.reset();element.hidden=true;wash.style.opacity='0';sheet.style.transform='translateY(-112%)';for(const stream of streams)stream.style.transform='scaleY(0)';}
 reset();return {start:timeline.start,update,reset,get finished(){return timeline.finished;}};
}
