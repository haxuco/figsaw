const BLOCKED=new Set(('fuck fucking fucker fuckers fucked fuckface motherfucker motherfuckers shit shits shitty shitting shithead shitheads shitface shitstorm dipshit sonofabitch bullshit horseshit bitch bitches bitchy bastard bastards asshole assholes arsehole arseholes cunt cunts dick dicks dickhead dickheads cock cocks cocksucker cocksuckers pussy pussies prick pricks twat twats wanker wankers slut sluts whore whores skank skanks douche douchebag douchebags piss pissing pissed ass arse tits titty titties bollocks bugger faggot faggots fag fags nigger niggers nigga niggas retard retards retarded merde putain puta putas mierda cabron cabrón pendejo scheisse').split(' '));
// Keep moderation data out of player-facing suggestions and error messages.
const NEGATIVE=new Set(('damn dammit crap dumbass dumbasses jackass jackasses dumbfuck bad boring cringe lame annoying suck sucks sucked sucking hate hated hater haters hateful trash garbage rubbish scam scams scammer scammers scamming fraud fraudulent loser losers idiot idiots idiotic stupid stupidity dumb moron morons imbecile pathetic worthless useless disgusting awful terrible worst toxic ugly failure incompetent racist racists nazi nazis rapist rapists pedophile pedophiles').split(' '));
const PHRASES=['kill yourself','kill yourselves','go die','drop dead','i will kill','you should die','kys','stfu','gtfo','wtf','eat shit','screw you','you suck','i hate you','all designers suck'];
const LOOKALIKES={'а':'a','е':'e','о':'o','р':'p','с':'c','х':'x','і':'i','ј':'j','ѕ':'s','ӏ':'l','υ':'u','κ':'k','τ':'t','α':'a','ο':'o','ι':'i','μ':'m','ɡ':'g','ԁ':'d','ԛ':'q','ԝ':'w','0':'o','1':'i','2':'z','3':'e','4':'a','5':'s','7':'t','8':'b','9':'g'};
function folded(value){return value.normalize('NFKD').replace(/\p{M}/gu,'').toLowerCase().replace(/[аеорсхіјѕӏυκταοιμɡԁԛԝ012345789]/gu,c=>LOOKALIKES[c]??c);}
const repeated=word=>[...word].map(c=>c+'+').join('');
const forbiddenWord=new RegExp('^(?:'+[...BLOCKED,...NEGATIVE].map(repeated).join('|')+')$','u');
const forbiddenPhrase=new RegExp(PHRASES.map(p=>repeated(p.replaceAll(' ',''))).join('|'),'u');
const negativeMessage=new RegExp(['stupid','idiot','garbage','trash','loser','worthless','useless','disgusting','hate','scammer','thisisbad','notgood','dontplay','dontuse','godies','ripoff','boycott'].map(repeated).join('|'),'u');
const figmaName=/f+i+g+m+a+/u;
const SEXUAL=['boob','boobs','boobie','boobies','penis','penises','cock','cocks','dick','dicks','pussy','vagina','vulva','clitoris','clit','testicle','testicles','ballsack','scrotum','tits','titty','titties','nipple','nipples','porn','porno','pornhub','xxx','sex','sexual','sexy','sexting','cum','cumming','jizz','semen','orgasm','masturbate','masturbation','blowjob','handjob','dildo','anal','anus','boner','erection','hentai','horny','milf','nudes','nude'];
const sexualContent=new RegExp(SEXUAL.map(repeated).join('|'),'u');
// Whole-name exceptions avoid rejecting familiar surnames solely because they
// contain a short syllable. Appended words still go through every check.
const ORDINARY_NAMES=new Set(['hancock','peacock','dickens','dickinson','cassandra','scunthorpe','shital','badawi','sussex','essex']);
export const DISPLAY_NAME_GUIDANCE='Use a name or friendly nickname. No offensive or sexual language, Figma references, or negative messages.';

function inappropriate(name){
 const words=folded(name).split(/[ ._'’\-]+/u).filter(Boolean),compact=words.join('');
 if(figmaName.test(compact)||negativeMessage.test(compact))return true;
 // Check every contiguous token span so splitting an insult into letters, or
 // surrounding it with a name, does not bypass the filter. Avoid indiscriminate
 // substring bans that reject legitimate names such as Hancock or Shital.
 for(let start=0;start<words.length;start++){
  let span='',sexualSpan='';
  for(let end=start;end<words.length;end++){
   span+=words[end];sexualSpan+=ORDINARY_NAMES.has(words[end])?'':words[end];
   if(forbiddenWord.test(span)||sexualContent.test(sexualSpan))return true;
  }
 }
 // Strip literal numeric handles before folding leetspeak; otherwise a numeric
 // suffix like 123 becomes "ize" and conceals an otherwise prohibited word.
 const bare=folded(name.replace(/\p{N}+/gu,'')).replace(/[ ._'’\-]/gu,'');
 const sexualBare=folded(name.replace(/\p{N}+/gu,'')).split(/[ ._'’\-]+/u).filter(word=>!ORDINARY_NAMES.has(word)).join('');
 if(forbiddenWord.test(bare)||sexualContent.test(sexualBare)||/f+u+c+k+/u.test(compact)||forbiddenPhrase.test(compact))return true;
 return false;
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
