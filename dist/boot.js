// Give the loading message one paint before constructing the WebGL room.
requestAnimationFrame(()=>setTimeout(()=>import('./game.bundle.js?v=1a24a77ef63a').catch(error=>{
 console.error(error);const status=document.querySelector('#loading-status');if(status)status.textContent='The room could not load. Please reload to try again.';
}),0));
