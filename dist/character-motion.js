const clamp01=value=>Math.max(0,Math.min(1,value));
const smooth=value=>{const t=clamp01(value);return t*t*(3-2*t);};
function glanceEnvelope(time,start,rise,hold,fall){
 if(time<start)return 0;
 const elapsed=time-start;
 if(elapsed<rise)return smooth(elapsed/rise);
 if(elapsed<rise+hold)return 1;
 return 1-smooth((elapsed-rise-hold)/fall);
}

// Long, unequal pauses make the rock watch the room instead of constantly oscillating.
// The eyes notice something first; the heavier stone turns a moment later.
const glances=[
 {at:5.0,head:-.32,eye:-.52,pitch:.035,hold:1.7},
 {at:17.4,head:.36,eye:.55,pitch:-.065,hold:2.1},
 {at:31.1,head:-.23,eye:-.40,pitch:-.10,hold:1.3}
];
export function figsawIdlePose(time,reducedMotion=false,out={}){
 out.headYaw=0;out.gazeYaw=0;out.gazePitch=0;
 if(reducedMotion||time<0)return out;
 const t=time%43.7;
 for(const glance of glances){
  const eyes=glanceEnvelope(t,glance.at,.24,glance.hold+1.0,.65);
  const head=glanceEnvelope(t,glance.at+.38,.95,glance.hold,1.25);
  out.headYaw+=glance.head*head;
  out.gazeYaw+=glance.eye*eyes;
  out.gazePitch+=glance.pitch*eyes;
 }
 // A brief look down toward the laptop, without another head turn.
 out.gazePitch-=.12*glanceEnvelope(t,25.2,.22,.8,.5);
 return out;
}

// A pendulum measured from the winch outlet, so the load chain never detaches
// or changes length as the hanging character moves through its arc.
export function figpalSwayPose(time,height,winchY,phase,reducedMotion=false,out={}){
 const clearance=smooth((height-1.08)/.42);
 const frequency=1.10+phase*.055;
 const angle=reducedMotion?0:clearance*.105*(Math.sin(time*frequency+phase)+.12*Math.sin(time*.47+phase*.6))/1.12;
 const length=winchY-.10-height;
 out.angle=angle;
 out.x=Math.sin(angle)*length;
 out.y=winchY-.10-Math.cos(angle)*length;
 out.hookX=out.x-Math.sin(angle)*.52;
 out.hookY=out.y+Math.cos(angle)*.52;
 return out;
}
