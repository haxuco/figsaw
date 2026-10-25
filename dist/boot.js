// Give the loading message one paint before constructing the WebGL room.
requestAnimationFrame(()=>setTimeout(()=>import('./game.bundle.js?v=5e5d20fb0f3d').catch(error=>{
 console.error(error);const status=document.querySelector('#loading-status');if(status)status.textContent='The room could not load. Please reload to try again.';
}),0));
