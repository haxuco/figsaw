const smooth=x=>{x=Math.max(0,Math.min(1,x));return x*x*(3-2*x);};

// Reaching and releasing are separate transitions: a click can never unlock the cuff.
export function createRestraintState(){
 let locked=true,reachStart=-Infinity,releasedAt=-Infinity,openPending=false;
 return {
  get locked(){return locked;},
  requestReach(time){
   if(time-reachStart<1.65)return false;
   reachStart=time;openPending=!locked;return true;
  },
  detach(time){if(!locked)return false;locked=false;releasedAt=time;reachStart=-Infinity;openPending=false;return true;},
  sample(time){
   const elapsed=time-reachStart;
   const reach=elapsed<.52?smooth(elapsed/.52):elapsed<.86?1:1-smooth((elapsed-.86)/.79);
   let openLaptop=false;
   if(!locked&&openPending&&elapsed>=.55){openLaptop=true;openPending=false;}
   return {locked,reach,release:locked?0:smooth((time-releasedAt)/.85),strain:locked&&elapsed>.45&&elapsed<.86?Math.sin(elapsed*64)*.003:0,openLaptop};
  },
  reset(){locked=true;reachStart=-Infinity;releasedAt=-Infinity;openPending=false;}
 };
}
