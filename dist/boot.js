// Give the loading bar one paint before constructing the WebGL room.
requestAnimationFrame(()=>setTimeout(()=>import('./game.bundle.js?v=b9e903cd83e8').catch(error=>{
 console.error(error);const status=document.querySelector('#loading-status');if(status){status.setAttribute('aria-busy','false');const message=document.querySelector('#loading-message');message.hidden=false;message.textContent='The room could not load. Please reload to try again.';document.querySelector('#loading-progress').hidden=true;}
}),0));
