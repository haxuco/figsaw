// Same-origin Payload API. No API keys or secrets belong in browser code.
// Set FIGSAW_BACKEND=local when building an intentionally offline preview.
export const backendConfig=Object.freeze({
 enabled:typeof __FIGSAW_PAYLOAD__==='undefined'?true:__FIGSAW_PAYLOAD__,
 apiBase:'/api/figsaw'
});
