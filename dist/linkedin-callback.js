const params=new URLSearchParams(location.search),connected=params.get('connected')==='1';
history.replaceState(null,'',location.pathname);
if(window.opener){window.opener.postMessage({type:'figsaw-linkedin-auth',connected,error:!connected},location.origin);document.querySelector('#status').textContent='You can return to the game. Nothing has been posted.';}
else document.querySelector('#status').textContent='Return to Figsaw and choose Connect LinkedIn again. Nothing has been posted.';
