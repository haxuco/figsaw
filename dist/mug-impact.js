// Two inexpensive CSS gradients follow the ear contact points in camera space.
// The temporary visual effect never intercepts input or triggers game over.
export function createMugImpactOverlay(element){
 element.innerHTML='<div class="eye-contact"><span class="eye-dot"></span><span class="eye-blindspot"></span></div>'.repeat(2);
 function reset(){element.hidden=true;element.style.opacity='0';for(const name of['--eye-scale','--eye-left','--eye-right','--eye-darkness','--eye-dot-opacity'])element.style.removeProperty(name);}
 function update(trap){
  element.hidden=trap.eyeImpact<=0;if(element.hidden)return;
  element.style.opacity=String(trap.eyeImpact);
  const spread=trap.eyeSpread??.82;
  element.style.setProperty('--eye-left',`${(1-spread)*50}%`);
  element.style.setProperty('--eye-right',`${(1+spread)*50}%`);
  element.style.setProperty('--eye-scale',String(.08+.92*trap.eyeGrowth));
  element.style.setProperty('--eye-darkness',String(trap.eyeDarkness));
  element.style.setProperty('--eye-dot-opacity',String(1-trap.eyeDarkness));
 }
 reset();return {update,reset};
}
