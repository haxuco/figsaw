const BLOCKED=new Set(('fuck fucking fucker fuckers fucked fuckface motherfucker motherfuckers shit shits shitty shitting shithead shitheads shitface shitstorm dipshit sonofabitch bullshit horseshit bitch bitches bitchy bastard bastards asshole assholes arsehole arseholes cunt cunts dick dicks dickhead dickheads cock cocks cocksucker cocksuckers pussy pussies prick pricks twat twats wanker wankers slut sluts whore whores skank skanks douche douchebag douchebags piss pissing pissed ass arse tits titty titties bollocks bugger faggot faggots fag fags nigger niggers nigga niggas retard retards retarded merde putain puta putas mierda cabron cabrón pendejo scheisse').split(' '));
// Keep moderation data out of player-facing suggestions and error messages.
const NEGATIVE=new Set(('damn dammit crap dumbass dumbasses jackass jackasses dumbfuck bad boring cringe lame annoying suck sucks sucked sucking hate hated hater haters hateful trash garbage rubbish scam scams scammer scammers scamming fraud fraudulent loser losers idiot idiots idiotic stupid stupidity dumb moron morons imbecile pathetic worthless useless disgusting awful terrible worst toxic ugly failure incompetent racist racists nazi nazis rapist rapists pedophile pedophiles').split(' '));
const PHRASES=['kill yourself','kill yourselves','go die','drop dead','i will kill','you should die','kys','stfu','gtfo','wtf','eat shit','screw you','you suck','i hate you','all designers suck'];
const LOOKALIKES={'а':'a','е':'e','о':'o','р':'p','с':'c','х':'x','і':'i','ј':'j','ѕ':'s','ӏ':'l','υ':'u','κ':'k','τ':'t','α':'a','ο':'o','ι':'i','μ':'m','ɡ':'g','ԁ':'d','ԛ':'q','ԝ':'w','0':'o','1':'i','2':'z','3':'e','4':'a','5':'s','7':'t','8':'b','9':'g'};
function folded(value){return value.normalize('NFKD').replace(/\p{M}/gu,'').toLowerCase().replace(/[аеорсхіјѕӏυκταοιμɡԁԛԝ012345789]/gu,c=>LOOKALIKES[c]??c);}
const repeated=word=>[...word].map(c=>c+'+').join('');
const forbiddenWord=new RegExp('^(?:'+[...BLOCKED,...NEGATIVE].map(repeated).join('|')+')$','u');
const forbiddenPhrase=new RegExp(PHRASES.map(p=>repeated(p.replaceAll(' ',''))).join('|'),'u');
const figmaName=/f+i+g+m+a+/u;
const figmaAttack=new RegExp(['fuck','shit','bitch','asshole','bastard','cunt','bad','suck','hate','trash','garbage','rubbish','scam','fraud','stupid','dumb','idiot','awful','terrible','worst','useless','worthless','pathetic','disgusting','ugly','broken','buggy','slow','laggy','overpriced','expensive','ripoff','boycott','avoid','uninstall','delete','evil','toxic','fail','loser','incompetent','greedy','liar','lies','lying','steal','stole','copycat','ruined','ruins','joke','meh','mid','isdead','notgood','nogood','dontuse','neveruse','isnot','isnt','doesnot','doesnt','dontlike','dontlove','notafan','onestar','zerostars','noto','downwith','isntgood','nobodylikes','nobodyneeds','unusable','inferior','malo','mala','basura','odio','nul','nulle','schlecht'].map(repeated).join('|'),'u');
export const DISPLAY_NAME_GUIDANCE='Use a name or friendly nickname. No offensive language or negative messages.';

function inappropriate(name){
 const words=folded(name).split(/[ ._'’\-]+/u).filter(Boolean),compact=words.join('');
 // Check every contiguous token span so splitting an insult into letters, or
 // surrounding it with a name, does not bypass the filter. Avoid indiscriminate
 // substring bans that reject legitimate names such as Hancock or Shital.
 for(let start=0;start<words.length;start++){
  let span='';
  for(let end=start;end<words.length;end++){
   span+=words[end];
   if(forbiddenWord.test(span))return true;
  }
 }
 // Strip literal numeric handles before folding leetspeak; otherwise a numeric
 // suffix like 123 becomes "ize" and conceals an otherwise prohibited word.
 const bare=folded(name.replace(/\p{N}+/gu,'')).replace(/[ ._'’\-]/gu,'');
 if(forbiddenWord.test(bare)||/f+u+c+k+/u.test(compact)||forbiddenPhrase.test(compact))return true;
 // Brand-directed messages need context: e.g. "bad" in a real surname is fine,
 // but "FigmaIsBad" and its separated/lookalike variants are not display names.
 return figmaName.test(compact)&&figmaAttack.test(compact.replace(figmaName,''));
}
export function validateDisplayName(value){
 if(typeof value!=='string')return {ok:false,message:'Enter a display name.'};
 const name=value.normalize('NFKC').replace(/\p{Cf}/gu,'').trim().replace(/\s+/gu,' '),length=[...name].length;
 if(length<2||length>24)return {ok:false,message:'Use 2–24 characters for your name.'};
 if(!/^[\p{L}\p{M}\p{N} ._'’\-]+$/u.test(name)||!/[\p{L}\p{N}]/u.test(name))return {ok:false,message:'Use letters, numbers, spaces, apostrophes, dots or hyphens.'};
 if(inappropriate(name))return {ok:false,message:DISPLAY_NAME_GUIDANCE};
 return {ok:true,name};
}
export const displayNameKey=name=>name.normalize('NFKC').toLocaleLowerCase('en');
