const smooth=x=>{x=Math.max(0,Math.min(1,x));return x*x*(3-2*x);};

// Reaching and releasing are separate transitions: a click can never unlock the cuff.
export function createRestraintState({canDetach=()=>true}={}){
 let locked=true,reachStart=-Infinity,releasedAt=-Infinity,openPending=false,visibleUntil=-Infinity;
 return {
  get locked(){return locked;},
  requestReach(time){
   if(time-reachStart<1.65||(!locked&&time-releasedAt<.85))return false;
   reachStart=time;visibleUntil=time+5.2;openPending=!locked;return true;
  },
  detach(time){if(!locked||!canDetach())return false;locked=false;releasedAt=time;visibleUntil=time+2.4;openPending=false;return true;},
  endReach(){visibleUntil=-Infinity;openPending=false;},
  sample(time,keepVisible=false){
   if(keepVisible&&Number.isFinite(reachStart))visibleUntil=Math.max(visibleUntil,time+.8);
   const elapsed=time-reachStart;
   const reach=elapsed<.52?smooth(elapsed/.52):elapsed<.86?1:1-smooth((elapsed-.86)/.79);
   let openLaptop=false;
   if(!locked&&openPending&&elapsed>=.55){openLaptop=true;openPending=false;}
   const releaseElapsed=time-releasedAt;
   const unlatch=locked?0:smooth(releaseElapsed/.14),hingeOpen=locked?0:smooth((releaseElapsed-.12)/.42);
   const handFree=locked?0:smooth((releaseElapsed-.56)/.28),cuffDrop=locked?0:smooth((releaseElapsed-.90)/.65);
   // Only the one-time cuff release may remain visible after unlocking.
   // Later pickups cannot bring the wrist rig back, even when they request a reach.
   const visible=time<visibleUntil&&(locked||releaseElapsed<1.65),reveal=visible?Math.min(smooth(elapsed/.24),smooth((visibleUntil-time)/.45)):0;
   return {locked,reach,visible,reveal,releaseElapsed,unlatch,hingeOpen,handFree,cuffDrop,release:locked?0:smooth((time-releasedAt)/.85),strain:locked&&elapsed>.45&&elapsed<.86?Math.sin(elapsed*64)*.003:0,openLaptop};
  },
  reset(){locked=true;reachStart=-Infinity;releasedAt=-Infinity;openPending=false;visibleUntil=-Infinity;}
 };
}
