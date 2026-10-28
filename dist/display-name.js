const BLOCKED=new Set(('fuck fucking fucker fuckers fucked fuckface motherfucker motherfuckers shit shits shitty shitting shithead shitheads shitface shitstorm dipshit sonofabitch bullshit horseshit bitch bitches bitchy bastard bastards asshole assholes arsehole arseholes cunt cunts dick dicks dickhead dickheads cock cocks cocksucker cocksuckers pussy pussies prick pricks twat twats wanker wankers slut sluts whore whores skank skanks douche douchebag douchebags piss pissing pissed ass arse tits titty titties bollocks bugger faggot faggots fag fags nigger niggers nigga niggas retard retards retarded merde putain puta putas mierda cabron cabrón pendejo scheisse').split(' '));
const LOOKALIKES={'а':'a','е':'e','о':'o','р':'p','с':'c','х':'x','і':'i','ј':'j','ѕ':'s','ӏ':'l','υ':'u','κ':'k','τ':'t','α':'a','ο':'o','ι':'i','0':'o','1':'i','3':'e','4':'a','5':'s','7':'t','8':'b','9':'g'};
function folded(value){return value.normalize('NFKD').replace(/\p{M}/gu,'').toLowerCase().replace(/[аеорсхіјѕӏυκταοι01345789]/gu,c=>LOOKALIKES[c]??c);}
export function validateDisplayName(value){
 if(typeof value!=='string')return {ok:false,message:'Enter a display name.'};
 const name=value.normalize('NFKC').replace(/\p{Cf}/gu,'').trim().replace(/\s+/gu,' '),length=[...name].length;
 if(length<2||length>24)return {ok:false,message:'Use 2–24 characters for your name.'};
 if(!/^[\p{L}\p{M}\p{N} ._'’-]+$/u.test(name)||!/[\p{L}\p{N}]/u.test(name))return {ok:false,message:'Use letters, numbers, spaces, apostrophes, dots or hyphens.'};
 const words=folded(name).split(/[ ._'’-]+/u).filter(Boolean),compact=words.join('');
 const trimmed=folded(name.replace(/^\d+|\d+$/gu,'')).split(/[ ._'’-]+/u).filter(Boolean);
 // Match complete words and obvious separated/repeated-letter disguises.
 // A substring ban would incorrectly reject names such as Scunthorpe/Hancock.
 const variants=[...words,...trimmed,compact].flatMap(word=>[word,word.replace(/(.)\1+/g,'$1')]);
 if(variants.some(word=>BLOCKED.has(word))||/f+u+c+k+/u.test(compact)||/^s+h+i+t+(?:s|ty|head)?$/u.test(compact))return {ok:false,message:'Choose a name without profanity.'};
 return {ok:true,name};
}
export const displayNameKey=name=>name.normalize('NFKC').toLocaleLowerCase('en');
