// Give the loading message one paint before constructing the WebGL room.
requestAnimationFrame(()=>setTimeout(()=>import('./game.bundle.js?v=d2d8ca2e6103').catch(error=>{
 console.error(error);const status=document.querySelector('#loading-status');if(status){status.setAttribute('aria-busy','false');document.querySelector('#loading-message').textContent='The room could not load. Please reload to try again.';document.querySelector('#loading-progress').hidden=true;}
}),0));
