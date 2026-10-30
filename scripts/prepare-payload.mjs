import {cp,mkdir,rm} from 'node:fs/promises';
// The game stays static. Payload/Next serves it and its API on one origin;
// importing the 3D scene into React would add boot work and change game behavior.
await mkdir('payload/public',{recursive:true});
await rm('payload/public',{recursive:true,force:true});
await cp('dist/client','payload/public',{recursive:true});
console.log('Game assets prepared in payload/public.');
