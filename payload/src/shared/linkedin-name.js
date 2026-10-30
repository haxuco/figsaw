// Formatting only: LinkedIn names bypass nickname moderation, but only after
// server-side identity verification and explicit consent to this exact name.
export function linkedInDisplayName(value){
 if(typeof value!=='string'||/[\p{Cc}\p{Cf}]/u.test(value))return null;
 const name=value.normalize('NFC').trim().replace(/\s+/gu,' ');
 return name.length>=1&&name.length<=100?name:null;
}
