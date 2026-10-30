const params=new URLSearchParams(location.search),code=params.get('code');
history.replaceState(null,'',location.pathname);
if(window.opener){window.opener.postMessage({type:'figsaw-linkedin-auth',code,error:!code},location.origin);document.querySelector('#status').textContent='You can return to the game’s post preview. Nothing has been posted.';}
else document.querySelector('#status').textContent='Return to Figsaw and choose Connect LinkedIn again. Nothing has been posted.';
