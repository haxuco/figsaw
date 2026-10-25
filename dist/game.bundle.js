var Gg=0,Cf=1,Wg=2;var Vp=1,ed=2,us=3,Ki=0,yn=1,Dt=2,Is=0,Gr=1,Mc=2,Pf=3,If=4,Xg=5,nr=100,qg=101,Yg=102,Zg=103,$g=104,Kg=200,Jg=201,Qg=202,jg=203,Uh=204,Hh=205,e1=206,t1=207,n1=208,i1=209,s1=210,r1=211,o1=212,a1=213,c1=214,Nh=0,Fh=1,Oh=2,Yr=3,Bh=4,zh=5,kh=6,Vh=7,Gp=0,l1=1,h1=2,Ls=0,u1=1,d1=2,f1=3,td=4,p1=5,m1=6,g1=7;var Wp=300,Zr=301,$r=302,Jo=303,Gh=304,Jc=306,or=1e3,rr=1001,Wh=1002,ti=1003,x1=1004;var ka=1005;var mn=1006,jl=1007;var Oi=1008;var fs=1009,Xp=1010,qp=1011,Qo=1012,nd=1013,ar=1014,$i=1015,da=1016,id=1017,sd=1018,Kr=1020,Yp=35902,Zp=1021,$p=1022,hi=1023,Kp=1024,Jp=1025,Wr=1026,Jr=1027,rd=1028,od=1029,Qp=1030,ad=1031;var cd=1033,mc=33776,gc=33777,xc=33778,yc=33779,Xh=35840,qh=35841,Yh=35842,Zh=35843,$h=36196,Kh=37492,Jh=37496,Qh=37808,jh=37809,eu=37810,tu=37811,nu=37812,iu=37813,su=37814,ru=37815,ou=37816,au=37817,cu=37818,lu=37819,hu=37820,uu=37821,vc=36492,du=36494,fu=36495,jp=36283,pu=36284,mu=36285,gu=36286;var Ec=2300,xu=2301,eh=2302,Lf=2400,Df=2401,Uf=2402;var y1=3200,ld=3201;var e0=0,v1=1,Ps="",ft="srgb",zs="srgb-linear",hd="display-p3",Qc="display-p3-linear",Sc="linear",rn="srgb",wc="rec709",bc="p3";var br=7680;var Hf=519,_1=512,M1=513,E1=514,t0=515,S1=516,w1=517,b1=518,T1=519,Nf=35044,Dn=35048;var Ff="300 es",ds=2e3,Tc=2001,Us=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let s=this._listeners[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let n=this._listeners[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},kn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Of=1234567,qo=Math.PI/180,Qr=180/Math.PI;function fr(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(kn[i&255]+kn[i>>8&255]+kn[i>>16&255]+kn[i>>24&255]+"-"+kn[e&255]+kn[e>>8&255]+"-"+kn[e>>16&15|64]+kn[e>>24&255]+"-"+kn[t&63|128]+kn[t>>8&255]+"-"+kn[t>>16&255]+kn[t>>24&255]+kn[n&255]+kn[n>>8&255]+kn[n>>16&255]+kn[n>>24&255]).toLowerCase()}function Sn(i,e,t){return Math.max(e,Math.min(t,i))}function ud(i,e){return(i%e+e)%e}function R1(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function A1(i,e,t){return i!==e?(t-i)/(e-i):0}function Yo(i,e,t){return(1-t)*i+t*e}function C1(i,e,t,n){return Yo(i,e,1-Math.exp(-t*n))}function P1(i,e=1){return e-Math.abs(ud(i,e*2)-e)}function I1(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function L1(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function D1(i,e){return i+Math.floor(Math.random()*(e-i+1))}function U1(i,e){return i+Math.random()*(e-i)}function H1(i){return i*(.5-Math.random())}function N1(i){i!==void 0&&(Of=i);let e=Of+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function F1(i){return i*qo}function O1(i){return i*Qr}function B1(i){return(i&i-1)===0&&i!==0}function z1(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function k1(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function V1(i,e,t,n,s){let r=Math.cos,o=Math.sin,a=r(t/2),c=o(t/2),l=r((e+n)/2),h=o((e+n)/2),p=r((e-n)/2),f=o((e-n)/2),d=r((n-e)/2),g=o((n-e)/2);switch(s){case"XYX":i.set(a*h,c*p,c*f,a*l);break;case"YZY":i.set(c*f,a*h,c*p,a*l);break;case"ZXZ":i.set(c*p,c*f,a*h,a*l);break;case"XZX":i.set(a*h,c*g,c*d,a*l);break;case"YXY":i.set(c*d,a*h,c*g,a*l);break;case"ZYZ":i.set(c*g,c*d,a*h,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function zr(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Yn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var Ze={DEG2RAD:qo,RAD2DEG:Qr,generateUUID:fr,clamp:Sn,euclideanModulo:ud,mapLinear:R1,inverseLerp:A1,lerp:Yo,damp:C1,pingpong:P1,smoothstep:I1,smootherstep:L1,randInt:D1,randFloat:U1,randFloatSpread:H1,seededRandom:N1,degToRad:F1,radToDeg:O1,isPowerOfTwo:B1,ceilPowerOfTwo:z1,floorPowerOfTwo:k1,setQuaternionFromProperEuler:V1,normalize:Yn,denormalize:zr},Ne=class i{constructor(e=0,t=0){i.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Sn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},yt=class i{constructor(e,t,n,s,r,o,a,c,l){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,c,l)}set(e,t,n,s,r,o,a,c,l){let h=this.elements;return h[0]=e,h[1]=s,h[2]=a,h[3]=t,h[4]=r,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],p=n[7],f=n[2],d=n[5],g=n[8],x=s[0],m=s[3],u=s[6],E=s[1],y=s[4],M=s[7],C=s[2],A=s[5],T=s[8];return r[0]=o*x+a*E+c*C,r[3]=o*m+a*y+c*A,r[6]=o*u+a*M+c*T,r[1]=l*x+h*E+p*C,r[4]=l*m+h*y+p*A,r[7]=l*u+h*M+p*T,r[2]=f*x+d*E+g*C,r[5]=f*m+d*y+g*A,r[8]=f*u+d*M+g*T,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8];return t*o*h-t*a*l-n*r*h+n*a*c+s*r*l-s*o*c}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],p=h*o-a*l,f=a*c-h*r,d=l*r-o*c,g=t*p+n*f+s*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/g;return e[0]=p*x,e[1]=(s*l-h*n)*x,e[2]=(a*n-s*o)*x,e[3]=f*x,e[4]=(h*t-s*c)*x,e[5]=(s*r-a*t)*x,e[6]=d*x,e[7]=(n*c-l*t)*x,e[8]=(o*t-n*r)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+e,-s*l,s*c,-s*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(th.makeScale(e,t)),this}rotate(e){return this.premultiply(th.makeRotation(-e)),this}translate(e,t){return this.premultiply(th.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},th=new yt;function n0(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function jo(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function G1(){let i=jo("canvas");return i.style.display="block",i}var Bf={};function _c(i){i in Bf||(Bf[i]=!0,console.warn(i))}function W1(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}function X1(i){let e=i.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function q1(i){let e=i.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}var zf=new yt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),kf=new yt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),No={[zs]:{transfer:Sc,primaries:wc,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i,fromReference:i=>i},[ft]:{transfer:rn,primaries:wc,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[Qc]:{transfer:Sc,primaries:bc,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.applyMatrix3(kf),fromReference:i=>i.applyMatrix3(zf)},[hd]:{transfer:rn,primaries:bc,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.convertSRGBToLinear().applyMatrix3(kf),fromReference:i=>i.applyMatrix3(zf).convertLinearToSRGB()}},Y1=new Set([zs,Qc]),Xt={enabled:!0,_workingColorSpace:zs,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!Y1.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;let n=No[e].toReference,s=No[t].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this._workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this._workingColorSpace)},getPrimaries:function(i){return No[i].primaries},getTransfer:function(i){return i===Ps?Sc:No[i].transfer},getLuminanceCoefficients:function(i,e=this._workingColorSpace){return i.fromArray(No[e].luminanceCoefficients)}};function Xr(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function nh(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Tr,yu=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Tr===void 0&&(Tr=jo("canvas")),Tr.width=e.width,Tr.height=e.height;let n=Tr.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Tr}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=jo("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Xr(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Xr(t[n]/255)*255):t[n]=Xr(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Z1=0,Rc=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Z1++}),this.uuid=fr(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(ih(s[o].image)):r.push(ih(s[o]))}else r=ih(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function ih(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?yu.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var $1=0,$n=class i extends Us{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=rr,s=rr,r=mn,o=Oi,a=hi,c=fs,l=i.DEFAULT_ANISOTROPY,h=Ps){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:$1++}),this.uuid=fr(),this.name="",this.source=new Rc(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Ne(0,0),this.repeat=new Ne(1,1),this.center=new Ne(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new yt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Wp)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case or:e.x=e.x-Math.floor(e.x);break;case rr:e.x=e.x<0?0:1;break;case Wh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case or:e.y=e.y-Math.floor(e.y);break;case rr:e.y=e.y<0?0:1;break;case Wh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};$n.DEFAULT_IMAGE=null;$n.DEFAULT_MAPPING=Wp;$n.DEFAULT_ANISOTROPY=1;var Kt=class i{constructor(e=0,t=0,n=0,s=1){i.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,c=e.elements,l=c[0],h=c[4],p=c[8],f=c[1],d=c[5],g=c[9],x=c[2],m=c[6],u=c[10];if(Math.abs(h-f)<.01&&Math.abs(p-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(p+x)<.1&&Math.abs(g+m)<.1&&Math.abs(l+d+u-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let y=(l+1)/2,M=(d+1)/2,C=(u+1)/2,A=(h+f)/4,T=(p+x)/4,P=(g+m)/4;return y>M&&y>C?y<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(y),s=A/n,r=T/n):M>C?M<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(M),n=A/s,r=P/s):C<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(C),n=T/r,s=P/r),this.set(n,s,r,t),this}let E=Math.sqrt((m-g)*(m-g)+(p-x)*(p-x)+(f-h)*(f-h));return Math.abs(E)<.001&&(E=1),this.x=(m-g)/E,this.y=(p-x)/E,this.z=(f-h)/E,this.w=Math.acos((l+d+u-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},vu=class extends Us{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Kt(0,0,e,t),this.scissorTest=!1,this.viewport=new Kt(0,0,e,t);let s={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:mn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let r=new $n(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,s=e.textures.length;n<s;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new Rc(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},ps=class extends vu{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Ac=class extends $n{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=ti,this.minFilter=ti,this.wrapR=rr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var _u=class extends $n{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=ti,this.minFilter=ti,this.wrapR=rr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var pt=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let c=n[s+0],l=n[s+1],h=n[s+2],p=n[s+3],f=r[o+0],d=r[o+1],g=r[o+2],x=r[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=h,e[t+3]=p;return}if(a===1){e[t+0]=f,e[t+1]=d,e[t+2]=g,e[t+3]=x;return}if(p!==x||c!==f||l!==d||h!==g){let m=1-a,u=c*f+l*d+h*g+p*x,E=u>=0?1:-1,y=1-u*u;if(y>Number.EPSILON){let C=Math.sqrt(y),A=Math.atan2(C,u*E);m=Math.sin(m*A)/C,a=Math.sin(a*A)/C}let M=a*E;if(c=c*m+f*M,l=l*m+d*M,h=h*m+g*M,p=p*m+x*M,m===1-a){let C=1/Math.sqrt(c*c+l*l+h*h+p*p);c*=C,l*=C,h*=C,p*=C}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=p}static multiplyQuaternionsFlat(e,t,n,s,r,o){let a=n[s],c=n[s+1],l=n[s+2],h=n[s+3],p=r[o],f=r[o+1],d=r[o+2],g=r[o+3];return e[t]=a*g+h*p+c*d-l*f,e[t+1]=c*g+h*f+l*p-a*d,e[t+2]=l*g+h*d+a*f-c*p,e[t+3]=h*g-a*p-c*f-l*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(s/2),p=a(r/2),f=c(n/2),d=c(s/2),g=c(r/2);switch(o){case"XYZ":this._x=f*h*p+l*d*g,this._y=l*d*p-f*h*g,this._z=l*h*g+f*d*p,this._w=l*h*p-f*d*g;break;case"YXZ":this._x=f*h*p+l*d*g,this._y=l*d*p-f*h*g,this._z=l*h*g-f*d*p,this._w=l*h*p+f*d*g;break;case"ZXY":this._x=f*h*p-l*d*g,this._y=l*d*p+f*h*g,this._z=l*h*g+f*d*p,this._w=l*h*p-f*d*g;break;case"ZYX":this._x=f*h*p-l*d*g,this._y=l*d*p+f*h*g,this._z=l*h*g-f*d*p,this._w=l*h*p+f*d*g;break;case"YZX":this._x=f*h*p+l*d*g,this._y=l*d*p+f*h*g,this._z=l*h*g-f*d*p,this._w=l*h*p-f*d*g;break;case"XZY":this._x=f*h*p-l*d*g,this._y=l*d*p-f*h*g,this._z=l*h*g+f*d*p,this._w=l*h*p+f*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],c=t[9],l=t[2],h=t[6],p=t[10],f=n+a+p;if(f>0){let d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-c)*d,this._y=(r-l)*d,this._z=(o-s)*d}else if(n>a&&n>p){let d=2*Math.sqrt(1+n-a-p);this._w=(h-c)/d,this._x=.25*d,this._y=(s+o)/d,this._z=(r+l)/d}else if(a>p){let d=2*Math.sqrt(1+a-n-p);this._w=(r-l)/d,this._x=(s+o)/d,this._y=.25*d,this._z=(c+h)/d}else{let d=2*Math.sqrt(1+p-n-a);this._w=(o-s)/d,this._x=(r+l)/d,this._y=(c+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Sn(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+o*a+s*l-r*c,this._y=s*h+o*c+r*a-n*l,this._z=r*h+o*l+n*c-s*a,this._w=o*h-n*a-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,s=this._y,r=this._z,o=this._w,a=o*e._w+n*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;let c=1-a*a;if(c<=Number.EPSILON){let d=1-t;return this._w=d*o+t*this._w,this._x=d*n+t*this._x,this._y=d*s+t*this._y,this._z=d*r+t*this._z,this.normalize(),this}let l=Math.sqrt(c),h=Math.atan2(l,a),p=Math.sin((1-t)*h)/l,f=Math.sin(t*h)/l;return this._w=o*p+this._w*f,this._x=n*p+this._x*f,this._y=s*p+this._y*f,this._z=r*p+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},S=class i{constructor(e=0,t=0,n=0){i.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Vf.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Vf.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*s-a*n),h=2*(a*t-r*s),p=2*(r*n-o*t);return this.x=t+c*l+o*p-a*h,this.y=n+c*h+a*l-r*p,this.z=s+c*p+r*h-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,c=t.z;return this.x=s*c-r*a,this.y=r*o-n*c,this.z=n*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return sh.copy(this).projectOnVector(e),this.sub(sh)}reflect(e){return this.sub(sh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Sn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},sh=new S,Vf=new pt,Ln=class{constructor(e=new S(1/0,1/0,1/0),t=new S(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Hi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Hi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Hi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Hi):Hi.fromBufferAttribute(r,o),Hi.applyMatrix4(e.matrixWorld),this.expandByPoint(Hi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Va.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Va.copy(n.boundingBox)),Va.applyMatrix4(e.matrixWorld),this.union(Va)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Hi),Hi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Fo),Ga.subVectors(this.max,Fo),Rr.subVectors(e.a,Fo),Ar.subVectors(e.b,Fo),Cr.subVectors(e.c,Fo),ws.subVectors(Ar,Rr),bs.subVectors(Cr,Ar),$s.subVectors(Rr,Cr);let t=[0,-ws.z,ws.y,0,-bs.z,bs.y,0,-$s.z,$s.y,ws.z,0,-ws.x,bs.z,0,-bs.x,$s.z,0,-$s.x,-ws.y,ws.x,0,-bs.y,bs.x,0,-$s.y,$s.x,0];return!rh(t,Rr,Ar,Cr,Ga)||(t=[1,0,0,0,1,0,0,0,1],!rh(t,Rr,Ar,Cr,Ga))?!1:(Wa.crossVectors(ws,bs),t=[Wa.x,Wa.y,Wa.z],rh(t,Rr,Ar,Cr,Ga))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Hi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Hi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(os[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),os[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),os[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),os[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),os[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),os[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),os[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),os[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(os),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},os=[new S,new S,new S,new S,new S,new S,new S,new S],Hi=new S,Va=new Ln,Rr=new S,Ar=new S,Cr=new S,ws=new S,bs=new S,$s=new S,Fo=new S,Ga=new S,Wa=new S,Ks=new S;function rh(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Ks.fromArray(i,r);let a=s.x*Math.abs(Ks.x)+s.y*Math.abs(Ks.y)+s.z*Math.abs(Ks.z),c=e.dot(Ks),l=t.dot(Ks),h=n.dot(Ks);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}var K1=new Ln,Oo=new S,oh=new S,Hs=class{constructor(e=new S,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):K1.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Oo.subVectors(e,this.center);let t=Oo.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Oo,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(oh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Oo.copy(e.center).add(oh)),this.expandByPoint(Oo.copy(e.center).sub(oh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},as=new S,ah=new S,Xa=new S,Ts=new S,ch=new S,qa=new S,lh=new S,ea=class{constructor(e=new S,t=new S(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,as)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=as.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(as.copy(this.origin).addScaledVector(this.direction,t),as.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){ah.copy(e).add(t).multiplyScalar(.5),Xa.copy(t).sub(e).normalize(),Ts.copy(this.origin).sub(ah);let r=e.distanceTo(t)*.5,o=-this.direction.dot(Xa),a=Ts.dot(this.direction),c=-Ts.dot(Xa),l=Ts.lengthSq(),h=Math.abs(1-o*o),p,f,d,g;if(h>0)if(p=o*c-a,f=o*a-c,g=r*h,p>=0)if(f>=-g)if(f<=g){let x=1/h;p*=x,f*=x,d=p*(p+o*f+2*a)+f*(o*p+f+2*c)+l}else f=r,p=Math.max(0,-(o*f+a)),d=-p*p+f*(f+2*c)+l;else f=-r,p=Math.max(0,-(o*f+a)),d=-p*p+f*(f+2*c)+l;else f<=-g?(p=Math.max(0,-(-o*r+a)),f=p>0?-r:Math.min(Math.max(-r,-c),r),d=-p*p+f*(f+2*c)+l):f<=g?(p=0,f=Math.min(Math.max(-r,-c),r),d=f*(f+2*c)+l):(p=Math.max(0,-(o*r+a)),f=p>0?r:Math.min(Math.max(-r,-c),r),d=-p*p+f*(f+2*c)+l);else f=o>0?-r:r,p=Math.max(0,-(o*f+a)),d=-p*p+f*(f+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,p),s&&s.copy(ah).addScaledVector(Xa,f),d}intersectSphere(e,t){as.subVectors(e.center,this.origin);let n=as.dot(this.direction),s=as.dot(as)-n*n,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,c,l=1/this.direction.x,h=1/this.direction.y,p=1/this.direction.z,f=this.origin;return l>=0?(n=(e.min.x-f.x)*l,s=(e.max.x-f.x)*l):(n=(e.max.x-f.x)*l,s=(e.min.x-f.x)*l),h>=0?(r=(e.min.y-f.y)*h,o=(e.max.y-f.y)*h):(r=(e.max.y-f.y)*h,o=(e.min.y-f.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),p>=0?(a=(e.min.z-f.z)*p,c=(e.max.z-f.z)*p):(a=(e.max.z-f.z)*p,c=(e.min.z-f.z)*p),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,as)!==null}intersectTriangle(e,t,n,s,r){ch.subVectors(t,e),qa.subVectors(n,e),lh.crossVectors(ch,qa);let o=this.direction.dot(lh),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ts.subVectors(this.origin,e);let c=a*this.direction.dot(qa.crossVectors(Ts,qa));if(c<0)return null;let l=a*this.direction.dot(ch.cross(Ts));if(l<0||c+l>o)return null;let h=-a*Ts.dot(lh);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},wt=class i{constructor(e,t,n,s,r,o,a,c,l,h,p,f,d,g,x,m){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,c,l,h,p,f,d,g,x,m)}set(e,t,n,s,r,o,a,c,l,h,p,f,d,g,x,m){let u=this.elements;return u[0]=e,u[4]=t,u[8]=n,u[12]=s,u[1]=r,u[5]=o,u[9]=a,u[13]=c,u[2]=l,u[6]=h,u[10]=p,u[14]=f,u[3]=d,u[7]=g,u[11]=x,u[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,s=1/Pr.setFromMatrixColumn(e,0).length(),r=1/Pr.setFromMatrixColumn(e,1).length(),o=1/Pr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),p=Math.sin(r);if(e.order==="XYZ"){let f=o*h,d=o*p,g=a*h,x=a*p;t[0]=c*h,t[4]=-c*p,t[8]=l,t[1]=d+g*l,t[5]=f-x*l,t[9]=-a*c,t[2]=x-f*l,t[6]=g+d*l,t[10]=o*c}else if(e.order==="YXZ"){let f=c*h,d=c*p,g=l*h,x=l*p;t[0]=f+x*a,t[4]=g*a-d,t[8]=o*l,t[1]=o*p,t[5]=o*h,t[9]=-a,t[2]=d*a-g,t[6]=x+f*a,t[10]=o*c}else if(e.order==="ZXY"){let f=c*h,d=c*p,g=l*h,x=l*p;t[0]=f-x*a,t[4]=-o*p,t[8]=g+d*a,t[1]=d+g*a,t[5]=o*h,t[9]=x-f*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){let f=o*h,d=o*p,g=a*h,x=a*p;t[0]=c*h,t[4]=g*l-d,t[8]=f*l+x,t[1]=c*p,t[5]=x*l+f,t[9]=d*l-g,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){let f=o*c,d=o*l,g=a*c,x=a*l;t[0]=c*h,t[4]=x-f*p,t[8]=g*p+d,t[1]=p,t[5]=o*h,t[9]=-a*h,t[2]=-l*h,t[6]=d*p+g,t[10]=f-x*p}else if(e.order==="XZY"){let f=o*c,d=o*l,g=a*c,x=a*l;t[0]=c*h,t[4]=-p,t[8]=l*h,t[1]=f*p+x,t[5]=o*h,t[9]=d*p-g,t[2]=g*p-d,t[6]=a*h,t[10]=x*p+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(J1,e,Q1)}lookAt(e,t,n){let s=this.elements;return ci.subVectors(e,t),ci.lengthSq()===0&&(ci.z=1),ci.normalize(),Rs.crossVectors(n,ci),Rs.lengthSq()===0&&(Math.abs(n.z)===1?ci.x+=1e-4:ci.z+=1e-4,ci.normalize(),Rs.crossVectors(n,ci)),Rs.normalize(),Ya.crossVectors(ci,Rs),s[0]=Rs.x,s[4]=Ya.x,s[8]=ci.x,s[1]=Rs.y,s[5]=Ya.y,s[9]=ci.y,s[2]=Rs.z,s[6]=Ya.z,s[10]=ci.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],p=n[5],f=n[9],d=n[13],g=n[2],x=n[6],m=n[10],u=n[14],E=n[3],y=n[7],M=n[11],C=n[15],A=s[0],T=s[4],P=s[8],O=s[12],v=s[1],w=s[5],W=s[9],z=s[13],B=s[2],H=s[6],Z=s[10],me=s[14],Q=s[3],ge=s[7],N=s[11],ae=s[15];return r[0]=o*A+a*v+c*B+l*Q,r[4]=o*T+a*w+c*H+l*ge,r[8]=o*P+a*W+c*Z+l*N,r[12]=o*O+a*z+c*me+l*ae,r[1]=h*A+p*v+f*B+d*Q,r[5]=h*T+p*w+f*H+d*ge,r[9]=h*P+p*W+f*Z+d*N,r[13]=h*O+p*z+f*me+d*ae,r[2]=g*A+x*v+m*B+u*Q,r[6]=g*T+x*w+m*H+u*ge,r[10]=g*P+x*W+m*Z+u*N,r[14]=g*O+x*z+m*me+u*ae,r[3]=E*A+y*v+M*B+C*Q,r[7]=E*T+y*w+M*H+C*ge,r[11]=E*P+y*W+M*Z+C*N,r[15]=E*O+y*z+M*me+C*ae,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],c=e[9],l=e[13],h=e[2],p=e[6],f=e[10],d=e[14],g=e[3],x=e[7],m=e[11],u=e[15];return g*(+r*c*p-s*l*p-r*a*f+n*l*f+s*a*d-n*c*d)+x*(+t*c*d-t*l*f+r*o*f-s*o*d+s*l*h-r*c*h)+m*(+t*l*p-t*a*d-r*o*p+n*o*d+r*a*h-n*l*h)+u*(-s*a*h-t*c*p+t*a*f+s*o*p-n*o*f+n*c*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],p=e[9],f=e[10],d=e[11],g=e[12],x=e[13],m=e[14],u=e[15],E=p*m*l-x*f*l+x*c*d-a*m*d-p*c*u+a*f*u,y=g*f*l-h*m*l-g*c*d+o*m*d+h*c*u-o*f*u,M=h*x*l-g*p*l+g*a*d-o*x*d-h*a*u+o*p*u,C=g*p*c-h*x*c-g*a*f+o*x*f+h*a*m-o*p*m,A=t*E+n*y+s*M+r*C;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let T=1/A;return e[0]=E*T,e[1]=(x*f*r-p*m*r-x*s*d+n*m*d+p*s*u-n*f*u)*T,e[2]=(a*m*r-x*c*r+x*s*l-n*m*l-a*s*u+n*c*u)*T,e[3]=(p*c*r-a*f*r-p*s*l+n*f*l+a*s*d-n*c*d)*T,e[4]=y*T,e[5]=(h*m*r-g*f*r+g*s*d-t*m*d-h*s*u+t*f*u)*T,e[6]=(g*c*r-o*m*r-g*s*l+t*m*l+o*s*u-t*c*u)*T,e[7]=(o*f*r-h*c*r+h*s*l-t*f*l-o*s*d+t*c*d)*T,e[8]=M*T,e[9]=(g*p*r-h*x*r-g*n*d+t*x*d+h*n*u-t*p*u)*T,e[10]=(o*x*r-g*a*r+g*n*l-t*x*l-o*n*u+t*a*u)*T,e[11]=(h*a*r-o*p*r-h*n*l+t*p*l+o*n*d-t*a*d)*T,e[12]=C*T,e[13]=(h*x*s-g*p*s+g*n*f-t*x*f-h*n*m+t*p*m)*T,e[14]=(g*a*s-o*x*s-g*n*c+t*x*c+o*n*m-t*a*m)*T,e[15]=(o*p*s-h*a*s+h*n*c-t*p*c-o*n*f+t*a*f)*T,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,c=e.z,l=r*o,h=r*a;return this.set(l*o+n,l*a-s*c,l*c+s*a,0,l*a+s*c,h*a+n,h*c-s*o,0,l*c-s*a,h*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,o=t._y,a=t._z,c=t._w,l=r+r,h=o+o,p=a+a,f=r*l,d=r*h,g=r*p,x=o*h,m=o*p,u=a*p,E=c*l,y=c*h,M=c*p,C=n.x,A=n.y,T=n.z;return s[0]=(1-(x+u))*C,s[1]=(d+M)*C,s[2]=(g-y)*C,s[3]=0,s[4]=(d-M)*A,s[5]=(1-(f+u))*A,s[6]=(m+E)*A,s[7]=0,s[8]=(g+y)*T,s[9]=(m-E)*T,s[10]=(1-(f+x))*T,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements,r=Pr.set(s[0],s[1],s[2]).length(),o=Pr.set(s[4],s[5],s[6]).length(),a=Pr.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],Ni.copy(this);let l=1/r,h=1/o,p=1/a;return Ni.elements[0]*=l,Ni.elements[1]*=l,Ni.elements[2]*=l,Ni.elements[4]*=h,Ni.elements[5]*=h,Ni.elements[6]*=h,Ni.elements[8]*=p,Ni.elements[9]*=p,Ni.elements[10]*=p,t.setFromRotationMatrix(Ni),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,s,r,o,a=ds){let c=this.elements,l=2*r/(t-e),h=2*r/(n-s),p=(t+e)/(t-e),f=(n+s)/(n-s),d,g;if(a===ds)d=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===Tc)d=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=p,c[12]=0,c[1]=0,c[5]=h,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=d,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,o,a=ds){let c=this.elements,l=1/(t-e),h=1/(n-s),p=1/(o-r),f=(t+e)*l,d=(n+s)*h,g,x;if(a===ds)g=(o+r)*p,x=-2*p;else if(a===Tc)g=r*p,x=-1*p;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-f,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-d,c[2]=0,c[6]=0,c[10]=x,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Pr=new S,Ni=new wt,J1=new S(0,0,0),Q1=new S(1,1,1),Rs=new S,Ya=new S,ci=new S,Gf=new wt,Wf=new pt,vi=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],h=s[9],p=s[2],f=s[6],d=s[10];switch(t){case"XYZ":this._y=Math.asin(Sn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Sn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-p,r),this._z=0);break;case"ZXY":this._x=Math.asin(Sn(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-p,d),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Sn(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Sn(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-p,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-Sn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Gf.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Gf,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Wf.setFromEuler(this),this.setFromQuaternion(Wf,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};vi.DEFAULT_ORDER="XYZ";var ta=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},j1=0,Xf=new S,Ir=new pt,cs=new wt,Za=new S,Bo=new S,ex=new S,tx=new pt,qf=new S(1,0,0),Yf=new S(0,1,0),Zf=new S(0,0,1),$f={type:"added"},nx={type:"removed"},Lr={type:"childadded",child:null},hh={type:"childremoved",child:null},At=class i extends Us{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:j1++}),this.uuid=fr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new S,t=new vi,n=new pt,s=new S(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new wt},normalMatrix:{value:new yt}}),this.matrix=new wt,this.matrixWorld=new wt,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ta,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ir.setFromAxisAngle(e,t),this.quaternion.multiply(Ir),this}rotateOnWorldAxis(e,t){return Ir.setFromAxisAngle(e,t),this.quaternion.premultiply(Ir),this}rotateX(e){return this.rotateOnAxis(qf,e)}rotateY(e){return this.rotateOnAxis(Yf,e)}rotateZ(e){return this.rotateOnAxis(Zf,e)}translateOnAxis(e,t){return Xf.copy(e).applyQuaternion(this.quaternion),this.position.add(Xf.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(qf,e)}translateY(e){return this.translateOnAxis(Yf,e)}translateZ(e){return this.translateOnAxis(Zf,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(cs.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Za.copy(e):Za.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Bo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?cs.lookAt(Bo,Za,this.up):cs.lookAt(Za,Bo,this.up),this.quaternion.setFromRotationMatrix(cs),s&&(cs.extractRotation(s.matrixWorld),Ir.setFromRotationMatrix(cs),this.quaternion.premultiply(Ir.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent($f),Lr.child=e,this.dispatchEvent(Lr),Lr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(nx),hh.child=e,this.dispatchEvent(hh),hh.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),cs.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),cs.multiply(e.parent.matrixWorld)),e.applyMatrix4(cs),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent($f),Lr.child=e,this.dispatchEvent(Lr),Lr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Bo,e,ex),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Bo,tx,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let p=c[l];r(e.shapes,p)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(e.materials,this.material[c]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];s.animations.push(r(e.animations,c))}}if(t){let a=o(e.geometries),c=o(e.materials),l=o(e.textures),h=o(e.images),p=o(e.shapes),f=o(e.skeletons),d=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),p.length>0&&(n.shapes=p),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){let c=[];for(let l in a){let h=a[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}};At.DEFAULT_UP=new S(0,1,0);At.DEFAULT_MATRIX_AUTO_UPDATE=!0;At.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Fi=new S,ls=new S,uh=new S,hs=new S,Dr=new S,Ur=new S,Kf=new S,dh=new S,fh=new S,ph=new S,mh=new Kt,gh=new Kt,xh=new Kt,ir=class i{constructor(e=new S,t=new S,n=new S){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Fi.subVectors(e,t),s.cross(Fi);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){Fi.subVectors(s,t),ls.subVectors(n,t),uh.subVectors(e,t);let o=Fi.dot(Fi),a=Fi.dot(ls),c=Fi.dot(uh),l=ls.dot(ls),h=ls.dot(uh),p=o*l-a*a;if(p===0)return r.set(0,0,0),null;let f=1/p,d=(l*c-a*h)*f,g=(o*h-a*c)*f;return r.set(1-d-g,g,d)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,hs)===null?!1:hs.x>=0&&hs.y>=0&&hs.x+hs.y<=1}static getInterpolation(e,t,n,s,r,o,a,c){return this.getBarycoord(e,t,n,s,hs)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,hs.x),c.addScaledVector(o,hs.y),c.addScaledVector(a,hs.z),c)}static getInterpolatedAttribute(e,t,n,s,r,o){return mh.setScalar(0),gh.setScalar(0),xh.setScalar(0),mh.fromBufferAttribute(e,t),gh.fromBufferAttribute(e,n),xh.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(mh,r.x),o.addScaledVector(gh,r.y),o.addScaledVector(xh,r.z),o}static isFrontFacing(e,t,n,s){return Fi.subVectors(n,t),ls.subVectors(e,t),Fi.cross(ls).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Fi.subVectors(this.c,this.b),ls.subVectors(this.a,this.b),Fi.cross(ls).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,o,a;Dr.subVectors(s,n),Ur.subVectors(r,n),dh.subVectors(e,n);let c=Dr.dot(dh),l=Ur.dot(dh);if(c<=0&&l<=0)return t.copy(n);fh.subVectors(e,s);let h=Dr.dot(fh),p=Ur.dot(fh);if(h>=0&&p<=h)return t.copy(s);let f=c*p-h*l;if(f<=0&&c>=0&&h<=0)return o=c/(c-h),t.copy(n).addScaledVector(Dr,o);ph.subVectors(e,r);let d=Dr.dot(ph),g=Ur.dot(ph);if(g>=0&&d<=g)return t.copy(r);let x=d*l-c*g;if(x<=0&&l>=0&&g<=0)return a=l/(l-g),t.copy(n).addScaledVector(Ur,a);let m=h*g-d*p;if(m<=0&&p-h>=0&&d-g>=0)return Kf.subVectors(r,s),a=(p-h)/(p-h+(d-g)),t.copy(s).addScaledVector(Kf,a);let u=1/(m+x+f);return o=x*u,a=f*u,t.copy(n).addScaledVector(Dr,o).addScaledVector(Ur,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},i0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},As={h:0,s:0,l:0},$a={h:0,s:0,l:0};function yh(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var dt=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ft){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Xt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=Xt.workingColorSpace){return this.r=e,this.g=t,this.b=n,Xt.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=Xt.workingColorSpace){if(e=ud(e,1),t=Sn(t,0,1),n=Sn(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=yh(o,r,e+1/3),this.g=yh(o,r,e),this.b=yh(o,r,e-1/3)}return Xt.toWorkingColorSpace(this,s),this}setStyle(e,t=ft){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=ft){let n=i0[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Xr(e.r),this.g=Xr(e.g),this.b=Xr(e.b),this}copyLinearToSRGB(e){return this.r=nh(e.r),this.g=nh(e.g),this.b=nh(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ft){return Xt.fromWorkingColorSpace(Vn.copy(this),e),Math.round(Sn(Vn.r*255,0,255))*65536+Math.round(Sn(Vn.g*255,0,255))*256+Math.round(Sn(Vn.b*255,0,255))}getHexString(e=ft){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Xt.workingColorSpace){Xt.fromWorkingColorSpace(Vn.copy(this),t);let n=Vn.r,s=Vn.g,r=Vn.b,o=Math.max(n,s,r),a=Math.min(n,s,r),c,l,h=(a+o)/2;if(a===o)c=0,l=0;else{let p=o-a;switch(l=h<=.5?p/(o+a):p/(2-o-a),o){case n:c=(s-r)/p+(s<r?6:0);break;case s:c=(r-n)/p+2;break;case r:c=(n-s)/p+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=Xt.workingColorSpace){return Xt.fromWorkingColorSpace(Vn.copy(this),t),e.r=Vn.r,e.g=Vn.g,e.b=Vn.b,e}getStyle(e=ft){Xt.fromWorkingColorSpace(Vn.copy(this),e);let t=Vn.r,n=Vn.g,s=Vn.b;return e!==ft?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(As),this.setHSL(As.h+e,As.s+t,As.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(As),e.getHSL($a);let n=Yo(As.h,$a.h,t),s=Yo(As.s,$a.s,t),r=Yo(As.l,$a.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Vn=new dt;dt.NAMES=i0;var ix=0,Ns=class extends Us{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ix++}),this.uuid=fr(),this.name="",this.type="Material",this.blending=Gr,this.side=Ki,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Uh,this.blendDst=Hh,this.blendEquation=nr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new dt(0,0,0),this.blendAlpha=0,this.depthFunc=Yr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Hf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=br,this.stencilZFail=br,this.stencilZPass=br,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Gr&&(n.blending=this.blending),this.side!==Ki&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Uh&&(n.blendSrc=this.blendSrc),this.blendDst!==Hh&&(n.blendDst=this.blendDst),this.blendEquation!==nr&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Yr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Hf&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==br&&(n.stencilFail=this.stencilFail),this.stencilZFail!==br&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==br&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let c=r[a];delete c.metadata,o.push(c)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},gt=class extends Ns{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new dt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new vi,this.combine=Gp,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var xn=new S,Ka=new Ne,un=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Nf,this.updateRanges=[],this.gpuType=$i,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ka.fromBufferAttribute(this,t),Ka.applyMatrix3(e),this.setXY(t,Ka.x,Ka.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)xn.fromBufferAttribute(this,t),xn.applyMatrix3(e),this.setXYZ(t,xn.x,xn.y,xn.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)xn.fromBufferAttribute(this,t),xn.applyMatrix4(e),this.setXYZ(t,xn.x,xn.y,xn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)xn.fromBufferAttribute(this,t),xn.applyNormalMatrix(e),this.setXYZ(t,xn.x,xn.y,xn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)xn.fromBufferAttribute(this,t),xn.transformDirection(e),this.setXYZ(t,xn.x,xn.y,xn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=zr(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Yn(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=zr(t,this.array)),t}setX(e,t){return this.normalized&&(t=Yn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=zr(t,this.array)),t}setY(e,t){return this.normalized&&(t=Yn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=zr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Yn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=zr(t,this.array)),t}setW(e,t){return this.normalized&&(t=Yn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Yn(t,this.array),n=Yn(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=Yn(t,this.array),n=Yn(n,this.array),s=Yn(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=Yn(t,this.array),n=Yn(n,this.array),s=Yn(s,this.array),r=Yn(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Nf&&(e.usage=this.usage),e}};var Cc=class extends un{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Pc=class extends un{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var ct=class extends un{constructor(e,t,n){super(new Float32Array(e),t,n)}},sx=0,xi=new wt,vh=new At,Hr=new S,li=new Ln,zo=new Ln,In=new S,Ct=class i extends Us{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:sx++}),this.uuid=fr(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(n0(e)?Pc:Cc)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new yt().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return xi.makeRotationFromQuaternion(e),this.applyMatrix4(xi),this}rotateX(e){return xi.makeRotationX(e),this.applyMatrix4(xi),this}rotateY(e){return xi.makeRotationY(e),this.applyMatrix4(xi),this}rotateZ(e){return xi.makeRotationZ(e),this.applyMatrix4(xi),this}translate(e,t,n){return xi.makeTranslation(e,t,n),this.applyMatrix4(xi),this}scale(e,t,n){return xi.makeScale(e,t,n),this.applyMatrix4(xi),this}lookAt(e){return vh.lookAt(e),vh.updateMatrix(),this.applyMatrix4(vh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Hr).negate(),this.translate(Hr.x,Hr.y,Hr.z),this}setFromPoints(e){let t=[];for(let n=0,s=e.length;n<s;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new ct(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ln);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new S(-1/0,-1/0,-1/0),new S(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];li.setFromBufferAttribute(r),this.morphTargetsRelative?(In.addVectors(this.boundingBox.min,li.min),this.boundingBox.expandByPoint(In),In.addVectors(this.boundingBox.max,li.max),this.boundingBox.expandByPoint(In)):(this.boundingBox.expandByPoint(li.min),this.boundingBox.expandByPoint(li.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Hs);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new S,1/0);return}if(e){let n=this.boundingSphere.center;if(li.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];zo.setFromBufferAttribute(a),this.morphTargetsRelative?(In.addVectors(li.min,zo.min),li.expandByPoint(In),In.addVectors(li.max,zo.max),li.expandByPoint(In)):(li.expandByPoint(zo.min),li.expandByPoint(zo.max))}li.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)In.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(In));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)In.fromBufferAttribute(a,l),c&&(Hr.fromBufferAttribute(e,l),In.add(Hr)),s=Math.max(s,n.distanceToSquared(In))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new un(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],c=[];for(let P=0;P<n.count;P++)a[P]=new S,c[P]=new S;let l=new S,h=new S,p=new S,f=new Ne,d=new Ne,g=new Ne,x=new S,m=new S;function u(P,O,v){l.fromBufferAttribute(n,P),h.fromBufferAttribute(n,O),p.fromBufferAttribute(n,v),f.fromBufferAttribute(r,P),d.fromBufferAttribute(r,O),g.fromBufferAttribute(r,v),h.sub(l),p.sub(l),d.sub(f),g.sub(f);let w=1/(d.x*g.y-g.x*d.y);isFinite(w)&&(x.copy(h).multiplyScalar(g.y).addScaledVector(p,-d.y).multiplyScalar(w),m.copy(p).multiplyScalar(d.x).addScaledVector(h,-g.x).multiplyScalar(w),a[P].add(x),a[O].add(x),a[v].add(x),c[P].add(m),c[O].add(m),c[v].add(m))}let E=this.groups;E.length===0&&(E=[{start:0,count:e.count}]);for(let P=0,O=E.length;P<O;++P){let v=E[P],w=v.start,W=v.count;for(let z=w,B=w+W;z<B;z+=3)u(e.getX(z+0),e.getX(z+1),e.getX(z+2))}let y=new S,M=new S,C=new S,A=new S;function T(P){C.fromBufferAttribute(s,P),A.copy(C);let O=a[P];y.copy(O),y.sub(C.multiplyScalar(C.dot(O))).normalize(),M.crossVectors(A,O);let w=M.dot(c[P])<0?-1:1;o.setXYZW(P,y.x,y.y,y.z,w)}for(let P=0,O=E.length;P<O;++P){let v=E[P],w=v.start,W=v.count;for(let z=w,B=w+W;z<B;z+=3)T(e.getX(z+0)),T(e.getX(z+1)),T(e.getX(z+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new un(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);let s=new S,r=new S,o=new S,a=new S,c=new S,l=new S,h=new S,p=new S;if(e)for(let f=0,d=e.count;f<d;f+=3){let g=e.getX(f+0),x=e.getX(f+1),m=e.getX(f+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,x),o.fromBufferAttribute(t,m),h.subVectors(o,r),p.subVectors(s,r),h.cross(p),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,x),l.fromBufferAttribute(n,m),a.add(h),c.add(h),l.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(x,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let f=0,d=t.count;f<d;f+=3)s.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),h.subVectors(o,r),p.subVectors(s,r),h.cross(p),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)In.fromBufferAttribute(e,t),In.normalize(),e.setXYZ(t,In.x,In.y,In.z)}toNonIndexed(){function e(a,c){let l=a.array,h=a.itemSize,p=a.normalized,f=new l.constructor(c.length*h),d=0,g=0;for(let x=0,m=c.length;x<m;x++){a.isInterleavedBufferAttribute?d=c[x]*a.data.stride+a.offset:d=c[x]*h;for(let u=0;u<h;u++)f[g++]=l[d++]}return new un(f,h,p)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let a in s){let c=s[a],l=e(c,n);t.setAttribute(a,l)}let r=this.morphAttributes;for(let a in r){let c=[],l=r[a];for(let h=0,p=l.length;h<p;h++){let f=l[h],d=e(f,n);c.push(d)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let c in n){let l=n[c];e.data.attributes[c]=l.toJSON(e.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let p=0,f=l.length;p<f;p++){let d=l[p];h.push(d.toJSON(e.data))}h.length>0&&(s[c]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let s=e.attributes;for(let l in s){let h=s[l];this.setAttribute(l,h.clone(t))}let r=e.morphAttributes;for(let l in r){let h=[],p=r[l];for(let f=0,d=p.length;f<d;f++)h.push(p[f].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let l=0,h=o.length;l<h;l++){let p=o[l];this.addGroup(p.start,p.count,p.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Jf=new wt,Js=new ea,Ja=new Hs,Qf=new S,Qa=new S,ja=new S,ec=new S,_h=new S,tc=new S,jf=new S,nc=new S,ht=class extends At{constructor(e=new Ct,t=new gt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){tc.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=a[c],p=r[c];h!==0&&(_h.fromBufferAttribute(p,e),o?tc.addScaledVector(_h,h):tc.addScaledVector(_h.sub(t),h))}t.add(tc)}return t}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ja.copy(n.boundingSphere),Ja.applyMatrix4(r),Js.copy(e.ray).recast(e.near),!(Ja.containsPoint(Js.origin)===!1&&(Js.intersectSphere(Ja,Qf)===null||Js.origin.distanceToSquared(Qf)>(e.far-e.near)**2))&&(Jf.copy(r).invert(),Js.copy(e.ray).applyMatrix4(Jf),!(n.boundingBox!==null&&Js.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Js)))}_computeIntersections(e,t,n){let s,r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,p=r.attributes.normal,f=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,x=f.length;g<x;g++){let m=f[g],u=o[m.materialIndex],E=Math.max(m.start,d.start),y=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let M=E,C=y;M<C;M+=3){let A=a.getX(M),T=a.getX(M+1),P=a.getX(M+2);s=ic(this,u,e,n,l,h,p,A,T,P),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,d.start),x=Math.min(a.count,d.start+d.count);for(let m=g,u=x;m<u;m+=3){let E=a.getX(m),y=a.getX(m+1),M=a.getX(m+2);s=ic(this,o,e,n,l,h,p,E,y,M),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,x=f.length;g<x;g++){let m=f[g],u=o[m.materialIndex],E=Math.max(m.start,d.start),y=Math.min(c.count,Math.min(m.start+m.count,d.start+d.count));for(let M=E,C=y;M<C;M+=3){let A=M,T=M+1,P=M+2;s=ic(this,u,e,n,l,h,p,A,T,P),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,d.start),x=Math.min(c.count,d.start+d.count);for(let m=g,u=x;m<u;m+=3){let E=m,y=m+1,M=m+2;s=ic(this,o,e,n,l,h,p,E,y,M),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};function rx(i,e,t,n,s,r,o,a){let c;if(e.side===yn?c=n.intersectTriangle(o,r,s,!0,a):c=n.intersectTriangle(s,r,o,e.side===Ki,a),c===null)return null;nc.copy(a),nc.applyMatrix4(i.matrixWorld);let l=t.ray.origin.distanceTo(nc);return l<t.near||l>t.far?null:{distance:l,point:nc.clone(),object:i}}function ic(i,e,t,n,s,r,o,a,c,l){i.getVertexPosition(a,Qa),i.getVertexPosition(c,ja),i.getVertexPosition(l,ec);let h=rx(i,e,t,n,Qa,ja,ec,jf);if(h){let p=new S;ir.getBarycoord(jf,Qa,ja,ec,p),s&&(h.uv=ir.getInterpolatedAttribute(s,a,c,l,p,new Ne)),r&&(h.uv1=ir.getInterpolatedAttribute(r,a,c,l,p,new Ne)),o&&(h.normal=ir.getInterpolatedAttribute(o,a,c,l,p,new S),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let f={a,b:c,c:l,normal:new S,materialIndex:0};ir.getNormal(Qa,ja,ec,f.normal),h.face=f,h.barycoord=p}return h}var Mt=class i extends Ct{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let c=[],l=[],h=[],p=[],f=0,d=0;g("z","y","x",-1,-1,n,t,e,o,r,0),g("z","y","x",1,-1,n,t,-e,o,r,1),g("x","z","y",1,1,e,n,t,s,o,2),g("x","z","y",1,-1,e,n,-t,s,o,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new ct(l,3)),this.setAttribute("normal",new ct(h,3)),this.setAttribute("uv",new ct(p,2));function g(x,m,u,E,y,M,C,A,T,P,O){let v=M/T,w=C/P,W=M/2,z=C/2,B=A/2,H=T+1,Z=P+1,me=0,Q=0,ge=new S;for(let N=0;N<Z;N++){let ae=N*w-z;for(let ne=0;ne<H;ne++){let ie=ne*v-W;ge[x]=ie*E,ge[m]=ae*y,ge[u]=B,l.push(ge.x,ge.y,ge.z),ge[x]=0,ge[m]=0,ge[u]=A>0?1:-1,h.push(ge.x,ge.y,ge.z),p.push(ne/T),p.push(1-N/P),me+=1}}for(let N=0;N<P;N++)for(let ae=0;ae<T;ae++){let ne=f+ae+H*N,ie=f+ae+H*(N+1),F=f+(ae+1)+H*(N+1),re=f+(ae+1)+H*N;c.push(ne,ie,re),c.push(ie,F,re),Q+=6}a.addGroup(d,Q,O),d+=Q,f+=me}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function jr(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function Zn(i){let e={};for(let t=0;t<i.length;t++){let n=jr(i[t]);for(let s in n)e[s]=n[s]}return e}function ox(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function s0(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Xt.workingColorSpace}var ax={clone:jr,merge:Zn},cx=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,lx=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Ji=class extends Ns{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=cx,this.fragmentShader=lx,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=jr(e.uniforms),this.uniformsGroups=ox(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},Ic=class extends At{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new wt,this.projectionMatrix=new wt,this.projectionMatrixInverse=new wt,this.coordinateSystem=ds}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Cs=new S,ep=new Ne,tp=new Ne,Hn=class extends Ic{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Qr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(qo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Qr*2*Math.atan(Math.tan(qo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Cs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Cs.x,Cs.y).multiplyScalar(-e/Cs.z),Cs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Cs.x,Cs.y).multiplyScalar(-e/Cs.z)}getViewSize(e,t){return this.getViewBounds(e,ep,tp),t.subVectors(tp,ep)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(qo*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,t-=o.offsetY*n/l,s*=o.width/c,n*=o.height/l}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Nr=-90,Fr=1,Mu=class extends At{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Hn(Nr,Fr,e,t);s.layers=this.layers,this.add(s);let r=new Hn(Nr,Fr,e,t);r.layers=this.layers,this.add(r);let o=new Hn(Nr,Fr,e,t);o.layers=this.layers,this.add(o);let a=new Hn(Nr,Fr,e,t);a.layers=this.layers,this.add(a);let c=new Hn(Nr,Fr,e,t);c.layers=this.layers,this.add(c);let l=new Hn(Nr,Fr,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,a,c]=t;for(let l of t)this.remove(l);if(e===ds)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Tc)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,c,l,h]=this.children,p=e.getRenderTarget(),f=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,o),e.setRenderTarget(n,2,s),e.render(t,a),e.setRenderTarget(n,3,s),e.render(t,c),e.setRenderTarget(n,4,s),e.render(t,l),n.texture.generateMipmaps=x,e.setRenderTarget(n,5,s),e.render(t,h),e.setRenderTarget(p,f,d),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},Lc=class extends $n{constructor(e,t,n,s,r,o,a,c,l,h){e=e!==void 0?e:[],t=t!==void 0?t:Zr,super(e,t,n,s,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Eu=class extends ps{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Lc(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:mn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Mt(5,5,5),r=new Ji({name:"CubemapFromEquirect",uniforms:jr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:yn,blending:Is});r.uniforms.tEquirect.value=t;let o=new ht(s,r),a=t.minFilter;return t.minFilter===Oi&&(t.minFilter=mn),new Mu(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,s){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}},Mh=new S,hx=new S,ux=new yt,yi=class{constructor(e=new S(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=Mh.subVectors(n,t).cross(hx.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(Mh),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||ux.getNormalMatrix(e),s=this.coplanarPoint(Mh).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Qs=new Hs,sc=new S,na=class{constructor(e=new yi,t=new yi,n=new yi,s=new yi,r=new yi,o=new yi){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=ds){let n=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],c=s[3],l=s[4],h=s[5],p=s[6],f=s[7],d=s[8],g=s[9],x=s[10],m=s[11],u=s[12],E=s[13],y=s[14],M=s[15];if(n[0].setComponents(c-r,f-l,m-d,M-u).normalize(),n[1].setComponents(c+r,f+l,m+d,M+u).normalize(),n[2].setComponents(c+o,f+h,m+g,M+E).normalize(),n[3].setComponents(c-o,f-h,m-g,M-E).normalize(),n[4].setComponents(c-a,f-p,m-x,M-y).normalize(),t===ds)n[5].setComponents(c+a,f+p,m+x,M+y).normalize();else if(t===Tc)n[5].setComponents(a,p,x,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Qs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Qs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Qs)}intersectsSprite(e){return Qs.center.set(0,0,0),Qs.radius=.7071067811865476,Qs.applyMatrix4(e.matrixWorld),this.intersectsSphere(Qs)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(sc.x=s.normal.x>0?e.max.x:e.min.x,sc.y=s.normal.y>0?e.max.y:e.min.y,sc.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(sc)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function r0(){let i=null,e=!1,t=null,n=null;function s(r,o){t(r,o),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function dx(i){let e=new WeakMap;function t(a,c){let l=a.array,h=a.usage,p=l.byteLength,f=i.createBuffer();i.bindBuffer(c,f),i.bufferData(c,l,h),a.onUploadCallback();let d;if(l instanceof Float32Array)d=i.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)d=i.SHORT;else if(l instanceof Uint32Array)d=i.UNSIGNED_INT;else if(l instanceof Int32Array)d=i.INT;else if(l instanceof Int8Array)d=i.BYTE;else if(l instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:d,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:p}}function n(a,c,l){let h=c.array,p=c.updateRanges;if(i.bindBuffer(l,a),p.length===0)i.bufferSubData(l,0,h);else{p.sort((d,g)=>d.start-g.start);let f=0;for(let d=1;d<p.length;d++){let g=p[f],x=p[d];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++f,p[f]=x)}p.length=f+1;for(let d=0,g=p.length;d<g;d++){let x=p[d];i.bufferSubData(l,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let c=e.get(a);c&&(i.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}var Et=class i extends Ct{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(n),c=Math.floor(s),l=a+1,h=c+1,p=e/a,f=t/c,d=[],g=[],x=[],m=[];for(let u=0;u<h;u++){let E=u*f-o;for(let y=0;y<l;y++){let M=y*p-r;g.push(M,-E,0),x.push(0,0,1),m.push(y/a),m.push(1-u/c)}}for(let u=0;u<c;u++)for(let E=0;E<a;E++){let y=E+l*u,M=E+l*(u+1),C=E+1+l*(u+1),A=E+1+l*u;d.push(y,M,A),d.push(M,C,A)}this.setIndex(d),this.setAttribute("position",new ct(g,3)),this.setAttribute("normal",new ct(x,3)),this.setAttribute("uv",new ct(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}},fx=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,px=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,mx=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,gx=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,xx=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,yx=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,vx=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,_x=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Mx=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Ex=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Sx=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,wx=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bx=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Tx=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Rx=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Ax=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Cx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Px=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ix=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Lx=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Dx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Ux=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Hx=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Nx=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Fx=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Ox=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Bx=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,zx=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,kx=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Vx=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Gx="gl_FragColor = linearToOutputTexel( gl_FragColor );",Wx=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Xx=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,qx=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Yx=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Zx=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,$x=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Kx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Jx=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Qx=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,jx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ey=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,ty=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ny=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,iy=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,sy=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,ry=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,oy=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ay=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,cy=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ly=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,hy=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,uy=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,dy=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,fy=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,py=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,my=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,gy=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,xy=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,yy=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,vy=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,_y=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,My=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Ey=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Sy=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,wy=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,by=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Ty=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Ry=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ay=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Cy=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Py=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Iy=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Ly=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Dy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Uy=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Hy=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Ny=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Fy=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Oy=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,By=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,zy=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ky=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Vy=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Gy=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Wy=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Xy=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,qy=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Yy=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Zy=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,$y=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Ky=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Jy=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Qy=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,jy=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,ev=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,tv=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,nv=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,iv=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,sv=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,rv=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,ov=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,av=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,cv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,lv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,hv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,uv=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,dv=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,fv=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,pv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,mv=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,gv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,xv=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,yv=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,vv=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,_v=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Mv=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Ev=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Sv=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,wv=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,bv=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Tv=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Rv=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Av=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Cv=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Pv=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Iv=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Lv=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Dv=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Uv=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Hv=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Nv=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Fv=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ov=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Bv=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zv=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,kv=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Vv=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Gv=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Wv=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Xv=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,_t={alphahash_fragment:fx,alphahash_pars_fragment:px,alphamap_fragment:mx,alphamap_pars_fragment:gx,alphatest_fragment:xx,alphatest_pars_fragment:yx,aomap_fragment:vx,aomap_pars_fragment:_x,batching_pars_vertex:Mx,batching_vertex:Ex,begin_vertex:Sx,beginnormal_vertex:wx,bsdfs:bx,iridescence_fragment:Tx,bumpmap_pars_fragment:Rx,clipping_planes_fragment:Ax,clipping_planes_pars_fragment:Cx,clipping_planes_pars_vertex:Px,clipping_planes_vertex:Ix,color_fragment:Lx,color_pars_fragment:Dx,color_pars_vertex:Ux,color_vertex:Hx,common:Nx,cube_uv_reflection_fragment:Fx,defaultnormal_vertex:Ox,displacementmap_pars_vertex:Bx,displacementmap_vertex:zx,emissivemap_fragment:kx,emissivemap_pars_fragment:Vx,colorspace_fragment:Gx,colorspace_pars_fragment:Wx,envmap_fragment:Xx,envmap_common_pars_fragment:qx,envmap_pars_fragment:Yx,envmap_pars_vertex:Zx,envmap_physical_pars_fragment:ry,envmap_vertex:$x,fog_vertex:Kx,fog_pars_vertex:Jx,fog_fragment:Qx,fog_pars_fragment:jx,gradientmap_pars_fragment:ey,lightmap_pars_fragment:ty,lights_lambert_fragment:ny,lights_lambert_pars_fragment:iy,lights_pars_begin:sy,lights_toon_fragment:oy,lights_toon_pars_fragment:ay,lights_phong_fragment:cy,lights_phong_pars_fragment:ly,lights_physical_fragment:hy,lights_physical_pars_fragment:uy,lights_fragment_begin:dy,lights_fragment_maps:fy,lights_fragment_end:py,logdepthbuf_fragment:my,logdepthbuf_pars_fragment:gy,logdepthbuf_pars_vertex:xy,logdepthbuf_vertex:yy,map_fragment:vy,map_pars_fragment:_y,map_particle_fragment:My,map_particle_pars_fragment:Ey,metalnessmap_fragment:Sy,metalnessmap_pars_fragment:wy,morphinstance_vertex:by,morphcolor_vertex:Ty,morphnormal_vertex:Ry,morphtarget_pars_vertex:Ay,morphtarget_vertex:Cy,normal_fragment_begin:Py,normal_fragment_maps:Iy,normal_pars_fragment:Ly,normal_pars_vertex:Dy,normal_vertex:Uy,normalmap_pars_fragment:Hy,clearcoat_normal_fragment_begin:Ny,clearcoat_normal_fragment_maps:Fy,clearcoat_pars_fragment:Oy,iridescence_pars_fragment:By,opaque_fragment:zy,packing:ky,premultiplied_alpha_fragment:Vy,project_vertex:Gy,dithering_fragment:Wy,dithering_pars_fragment:Xy,roughnessmap_fragment:qy,roughnessmap_pars_fragment:Yy,shadowmap_pars_fragment:Zy,shadowmap_pars_vertex:$y,shadowmap_vertex:Ky,shadowmask_pars_fragment:Jy,skinbase_vertex:Qy,skinning_pars_vertex:jy,skinning_vertex:ev,skinnormal_vertex:tv,specularmap_fragment:nv,specularmap_pars_fragment:iv,tonemapping_fragment:sv,tonemapping_pars_fragment:rv,transmission_fragment:ov,transmission_pars_fragment:av,uv_pars_fragment:cv,uv_pars_vertex:lv,uv_vertex:hv,worldpos_vertex:uv,background_vert:dv,background_frag:fv,backgroundCube_vert:pv,backgroundCube_frag:mv,cube_vert:gv,cube_frag:xv,depth_vert:yv,depth_frag:vv,distanceRGBA_vert:_v,distanceRGBA_frag:Mv,equirect_vert:Ev,equirect_frag:Sv,linedashed_vert:wv,linedashed_frag:bv,meshbasic_vert:Tv,meshbasic_frag:Rv,meshlambert_vert:Av,meshlambert_frag:Cv,meshmatcap_vert:Pv,meshmatcap_frag:Iv,meshnormal_vert:Lv,meshnormal_frag:Dv,meshphong_vert:Uv,meshphong_frag:Hv,meshphysical_vert:Nv,meshphysical_frag:Fv,meshtoon_vert:Ov,meshtoon_frag:Bv,points_vert:zv,points_frag:kv,shadow_vert:Vv,shadow_frag:Gv,sprite_vert:Wv,sprite_frag:Xv},Ye={common:{diffuse:{value:new dt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new yt},alphaMap:{value:null},alphaMapTransform:{value:new yt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new yt}},envmap:{envMap:{value:null},envMapRotation:{value:new yt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new yt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new yt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new yt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new yt},normalScale:{value:new Ne(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new yt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new yt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new yt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new yt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new dt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new dt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new yt},alphaTest:{value:0},uvTransform:{value:new yt}},sprite:{diffuse:{value:new dt(16777215)},opacity:{value:1},center:{value:new Ne(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new yt},alphaMap:{value:null},alphaMapTransform:{value:new yt},alphaTest:{value:0}}},Zi={basic:{uniforms:Zn([Ye.common,Ye.specularmap,Ye.envmap,Ye.aomap,Ye.lightmap,Ye.fog]),vertexShader:_t.meshbasic_vert,fragmentShader:_t.meshbasic_frag},lambert:{uniforms:Zn([Ye.common,Ye.specularmap,Ye.envmap,Ye.aomap,Ye.lightmap,Ye.emissivemap,Ye.bumpmap,Ye.normalmap,Ye.displacementmap,Ye.fog,Ye.lights,{emissive:{value:new dt(0)}}]),vertexShader:_t.meshlambert_vert,fragmentShader:_t.meshlambert_frag},phong:{uniforms:Zn([Ye.common,Ye.specularmap,Ye.envmap,Ye.aomap,Ye.lightmap,Ye.emissivemap,Ye.bumpmap,Ye.normalmap,Ye.displacementmap,Ye.fog,Ye.lights,{emissive:{value:new dt(0)},specular:{value:new dt(1118481)},shininess:{value:30}}]),vertexShader:_t.meshphong_vert,fragmentShader:_t.meshphong_frag},standard:{uniforms:Zn([Ye.common,Ye.envmap,Ye.aomap,Ye.lightmap,Ye.emissivemap,Ye.bumpmap,Ye.normalmap,Ye.displacementmap,Ye.roughnessmap,Ye.metalnessmap,Ye.fog,Ye.lights,{emissive:{value:new dt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:_t.meshphysical_vert,fragmentShader:_t.meshphysical_frag},toon:{uniforms:Zn([Ye.common,Ye.aomap,Ye.lightmap,Ye.emissivemap,Ye.bumpmap,Ye.normalmap,Ye.displacementmap,Ye.gradientmap,Ye.fog,Ye.lights,{emissive:{value:new dt(0)}}]),vertexShader:_t.meshtoon_vert,fragmentShader:_t.meshtoon_frag},matcap:{uniforms:Zn([Ye.common,Ye.bumpmap,Ye.normalmap,Ye.displacementmap,Ye.fog,{matcap:{value:null}}]),vertexShader:_t.meshmatcap_vert,fragmentShader:_t.meshmatcap_frag},points:{uniforms:Zn([Ye.points,Ye.fog]),vertexShader:_t.points_vert,fragmentShader:_t.points_frag},dashed:{uniforms:Zn([Ye.common,Ye.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:_t.linedashed_vert,fragmentShader:_t.linedashed_frag},depth:{uniforms:Zn([Ye.common,Ye.displacementmap]),vertexShader:_t.depth_vert,fragmentShader:_t.depth_frag},normal:{uniforms:Zn([Ye.common,Ye.bumpmap,Ye.normalmap,Ye.displacementmap,{opacity:{value:1}}]),vertexShader:_t.meshnormal_vert,fragmentShader:_t.meshnormal_frag},sprite:{uniforms:Zn([Ye.sprite,Ye.fog]),vertexShader:_t.sprite_vert,fragmentShader:_t.sprite_frag},background:{uniforms:{uvTransform:{value:new yt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:_t.background_vert,fragmentShader:_t.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new yt}},vertexShader:_t.backgroundCube_vert,fragmentShader:_t.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:_t.cube_vert,fragmentShader:_t.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:_t.equirect_vert,fragmentShader:_t.equirect_frag},distanceRGBA:{uniforms:Zn([Ye.common,Ye.displacementmap,{referencePosition:{value:new S},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:_t.distanceRGBA_vert,fragmentShader:_t.distanceRGBA_frag},shadow:{uniforms:Zn([Ye.lights,Ye.fog,{color:{value:new dt(0)},opacity:{value:1}}]),vertexShader:_t.shadow_vert,fragmentShader:_t.shadow_frag}};Zi.physical={uniforms:Zn([Zi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new yt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new yt},clearcoatNormalScale:{value:new Ne(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new yt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new yt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new yt},sheen:{value:0},sheenColor:{value:new dt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new yt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new yt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new yt},transmissionSamplerSize:{value:new Ne},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new yt},attenuationDistance:{value:0},attenuationColor:{value:new dt(0)},specularColor:{value:new dt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new yt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new yt},anisotropyVector:{value:new Ne},anisotropyMap:{value:null},anisotropyMapTransform:{value:new yt}}]),vertexShader:_t.meshphysical_vert,fragmentShader:_t.meshphysical_frag};var rc={r:0,b:0,g:0},js=new vi,qv=new wt;function Yv(i,e,t,n,s,r,o){let a=new dt(0),c=r===!0?0:1,l,h,p=null,f=0,d=null;function g(E){let y=E.isScene===!0?E.background:null;return y&&y.isTexture&&(y=(E.backgroundBlurriness>0?t:e).get(y)),y}function x(E){let y=!1,M=g(E);M===null?u(a,c):M&&M.isColor&&(u(M,1),y=!0);let C=i.xr.getEnvironmentBlendMode();C==="additive"?n.buffers.color.setClear(0,0,0,1,o):C==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||y)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(E,y){let M=g(y);M&&(M.isCubeTexture||M.mapping===Jc)?(h===void 0&&(h=new ht(new Mt(1,1,1),new Ji({name:"BackgroundCubeMaterial",uniforms:jr(Zi.backgroundCube.uniforms),vertexShader:Zi.backgroundCube.vertexShader,fragmentShader:Zi.backgroundCube.fragmentShader,side:yn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(C,A,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),js.copy(y.backgroundRotation),js.x*=-1,js.y*=-1,js.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(js.y*=-1,js.z*=-1),h.material.uniforms.envMap.value=M,h.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(qv.makeRotationFromEuler(js)),h.material.toneMapped=Xt.getTransfer(M.colorSpace)!==rn,(p!==M||f!==M.version||d!==i.toneMapping)&&(h.material.needsUpdate=!0,p=M,f=M.version,d=i.toneMapping),h.layers.enableAll(),E.unshift(h,h.geometry,h.material,0,0,null)):M&&M.isTexture&&(l===void 0&&(l=new ht(new Et(2,2),new Ji({name:"BackgroundMaterial",uniforms:jr(Zi.background.uniforms),vertexShader:Zi.background.vertexShader,fragmentShader:Zi.background.fragmentShader,side:Ki,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=M,l.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,l.material.toneMapped=Xt.getTransfer(M.colorSpace)!==rn,M.matrixAutoUpdate===!0&&M.updateMatrix(),l.material.uniforms.uvTransform.value.copy(M.matrix),(p!==M||f!==M.version||d!==i.toneMapping)&&(l.material.needsUpdate=!0,p=M,f=M.version,d=i.toneMapping),l.layers.enableAll(),E.unshift(l,l.geometry,l.material,0,0,null))}function u(E,y){E.getRGB(rc,s0(i)),n.buffers.color.setClear(rc.r,rc.g,rc.b,y,o)}return{getClearColor:function(){return a},setClearColor:function(E,y=1){a.set(E),c=y,u(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(E){c=E,u(a,c)},render:x,addToRenderList:m}}function Zv(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null),r=s,o=!1;function a(v,w,W,z,B){let H=!1,Z=p(z,W,w);r!==Z&&(r=Z,l(r.object)),H=d(v,z,W,B),H&&g(v,z,W,B),B!==null&&e.update(B,i.ELEMENT_ARRAY_BUFFER),(H||o)&&(o=!1,M(v,w,W,z),B!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(B).buffer))}function c(){return i.createVertexArray()}function l(v){return i.bindVertexArray(v)}function h(v){return i.deleteVertexArray(v)}function p(v,w,W){let z=W.wireframe===!0,B=n[v.id];B===void 0&&(B={},n[v.id]=B);let H=B[w.id];H===void 0&&(H={},B[w.id]=H);let Z=H[z];return Z===void 0&&(Z=f(c()),H[z]=Z),Z}function f(v){let w=[],W=[],z=[];for(let B=0;B<t;B++)w[B]=0,W[B]=0,z[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:w,enabledAttributes:W,attributeDivisors:z,object:v,attributes:{},index:null}}function d(v,w,W,z){let B=r.attributes,H=w.attributes,Z=0,me=W.getAttributes();for(let Q in me)if(me[Q].location>=0){let N=B[Q],ae=H[Q];if(ae===void 0&&(Q==="instanceMatrix"&&v.instanceMatrix&&(ae=v.instanceMatrix),Q==="instanceColor"&&v.instanceColor&&(ae=v.instanceColor)),N===void 0||N.attribute!==ae||ae&&N.data!==ae.data)return!0;Z++}return r.attributesNum!==Z||r.index!==z}function g(v,w,W,z){let B={},H=w.attributes,Z=0,me=W.getAttributes();for(let Q in me)if(me[Q].location>=0){let N=H[Q];N===void 0&&(Q==="instanceMatrix"&&v.instanceMatrix&&(N=v.instanceMatrix),Q==="instanceColor"&&v.instanceColor&&(N=v.instanceColor));let ae={};ae.attribute=N,N&&N.data&&(ae.data=N.data),B[Q]=ae,Z++}r.attributes=B,r.attributesNum=Z,r.index=z}function x(){let v=r.newAttributes;for(let w=0,W=v.length;w<W;w++)v[w]=0}function m(v){u(v,0)}function u(v,w){let W=r.newAttributes,z=r.enabledAttributes,B=r.attributeDivisors;W[v]=1,z[v]===0&&(i.enableVertexAttribArray(v),z[v]=1),B[v]!==w&&(i.vertexAttribDivisor(v,w),B[v]=w)}function E(){let v=r.newAttributes,w=r.enabledAttributes;for(let W=0,z=w.length;W<z;W++)w[W]!==v[W]&&(i.disableVertexAttribArray(W),w[W]=0)}function y(v,w,W,z,B,H,Z){Z===!0?i.vertexAttribIPointer(v,w,W,B,H):i.vertexAttribPointer(v,w,W,z,B,H)}function M(v,w,W,z){x();let B=z.attributes,H=W.getAttributes(),Z=w.defaultAttributeValues;for(let me in H){let Q=H[me];if(Q.location>=0){let ge=B[me];if(ge===void 0&&(me==="instanceMatrix"&&v.instanceMatrix&&(ge=v.instanceMatrix),me==="instanceColor"&&v.instanceColor&&(ge=v.instanceColor)),ge!==void 0){let N=ge.normalized,ae=ge.itemSize,ne=e.get(ge);if(ne===void 0)continue;let ie=ne.buffer,F=ne.type,re=ne.bytesPerElement,X=F===i.INT||F===i.UNSIGNED_INT||ge.gpuType===nd;if(ge.isInterleavedBufferAttribute){let V=ge.data,$=V.stride,xe=ge.offset;if(V.isInstancedInterleavedBuffer){for(let Ce=0;Ce<Q.locationSize;Ce++)u(Q.location+Ce,V.meshPerAttribute);v.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=V.meshPerAttribute*V.count)}else for(let Ce=0;Ce<Q.locationSize;Ce++)m(Q.location+Ce);i.bindBuffer(i.ARRAY_BUFFER,ie);for(let Ce=0;Ce<Q.locationSize;Ce++)y(Q.location+Ce,ae/Q.locationSize,F,N,$*re,(xe+ae/Q.locationSize*Ce)*re,X)}else{if(ge.isInstancedBufferAttribute){for(let V=0;V<Q.locationSize;V++)u(Q.location+V,ge.meshPerAttribute);v.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=ge.meshPerAttribute*ge.count)}else for(let V=0;V<Q.locationSize;V++)m(Q.location+V);i.bindBuffer(i.ARRAY_BUFFER,ie);for(let V=0;V<Q.locationSize;V++)y(Q.location+V,ae/Q.locationSize,F,N,ae*re,ae/Q.locationSize*V*re,X)}}else if(Z!==void 0){let N=Z[me];if(N!==void 0)switch(N.length){case 2:i.vertexAttrib2fv(Q.location,N);break;case 3:i.vertexAttrib3fv(Q.location,N);break;case 4:i.vertexAttrib4fv(Q.location,N);break;default:i.vertexAttrib1fv(Q.location,N)}}}}E()}function C(){P();for(let v in n){let w=n[v];for(let W in w){let z=w[W];for(let B in z)h(z[B].object),delete z[B];delete w[W]}delete n[v]}}function A(v){if(n[v.id]===void 0)return;let w=n[v.id];for(let W in w){let z=w[W];for(let B in z)h(z[B].object),delete z[B];delete w[W]}delete n[v.id]}function T(v){for(let w in n){let W=n[w];if(W[v.id]===void 0)continue;let z=W[v.id];for(let B in z)h(z[B].object),delete z[B];delete W[v.id]}}function P(){O(),o=!0,r!==s&&(r=s,l(r.object))}function O(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:P,resetDefaultState:O,dispose:C,releaseStatesOfGeometry:A,releaseStatesOfProgram:T,initAttributes:x,enableAttribute:m,disableUnusedAttributes:E}}function $v(i,e,t){let n;function s(l){n=l}function r(l,h){i.drawArrays(n,l,h),t.update(h,n,1)}function o(l,h,p){p!==0&&(i.drawArraysInstanced(n,l,h,p),t.update(h,n,p))}function a(l,h,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,p);let d=0;for(let g=0;g<p;g++)d+=h[g];t.update(d,n,1)}function c(l,h,p,f){if(p===0)return;let d=e.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<l.length;g++)o(l[g],h[g],f[g]);else{d.multiDrawArraysInstancedWEBGL(n,l,0,h,0,f,0,p);let g=0;for(let x=0;x<p;x++)g+=h[x];for(let x=0;x<f.length;x++)t.update(g,n,f[x])}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function Kv(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let T=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(T){return!(T!==hi&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(T){let P=T===da&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(T!==fs&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==$i&&!P)}function c(T){if(T==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp",h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let p=t.logarithmicDepthBuffer===!0,f=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control");if(f===!0){let T=e.get("EXT_clip_control");T.clipControlEXT(T.LOWER_LEFT_EXT,T.ZERO_TO_ONE_EXT)}let d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),u=i.getParameter(i.MAX_VERTEX_ATTRIBS),E=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),y=i.getParameter(i.MAX_VARYING_VECTORS),M=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),C=g>0,A=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:p,reverseDepthBuffer:f,maxTextures:d,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:m,maxAttributes:u,maxVertexUniforms:E,maxVaryings:y,maxFragmentUniforms:M,vertexTextures:C,maxSamples:A}}function Jv(i){let e=this,t=null,n=0,s=!1,r=!1,o=new yi,a=new yt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(p,f){let d=p.length!==0||f||n!==0||s;return s=f,n=p.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(p,f){t=h(p,f,0)},this.setState=function(p,f,d){let g=p.clippingPlanes,x=p.clipIntersection,m=p.clipShadows,u=i.get(p);if(!s||g===null||g.length===0||r&&!m)r?h(null):l();else{let E=r?0:n,y=E*4,M=u.clippingState||null;c.value=M,M=h(g,f,y,d);for(let C=0;C!==y;++C)M[C]=t[C];u.clippingState=M,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=E}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(p,f,d,g){let x=p!==null?p.length:0,m=null;if(x!==0){if(m=c.value,g!==!0||m===null){let u=d+x*4,E=f.matrixWorldInverse;a.getNormalMatrix(E),(m===null||m.length<u)&&(m=new Float32Array(u));for(let y=0,M=d;y!==x;++y,M+=4)o.copy(p[y]).applyMatrix4(E,a),o.normal.toArray(m,M),m[M+3]=o.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}function Qv(i){let e=new WeakMap;function t(o,a){return a===Jo?o.mapping=Zr:a===Gh&&(o.mapping=$r),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===Jo||a===Gh)if(e.has(o)){let c=e.get(o).texture;return t(c,o.mapping)}else{let c=o.image;if(c&&c.height>0){let l=new Eu(c.height);return l.fromEquirectangularTexture(i,o),e.set(o,l),o.addEventListener("dispose",s),t(l.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}var Dc=class extends Ic{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,o=n+e,a=s+t,c=s-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},kr=4,np=[.125,.215,.35,.446,.526,.582],sr=20,Eh=new Dc,ip=new dt,Sh=null,wh=0,bh=0,Th=!1,tr=(1+Math.sqrt(5))/2,Or=1/tr,sp=[new S(-tr,Or,0),new S(tr,Or,0),new S(-Or,0,tr),new S(Or,0,tr),new S(0,tr,-Or),new S(0,tr,Or),new S(-1,1,-1),new S(1,1,-1),new S(-1,1,1),new S(1,1,1)],eo=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){Sh=this._renderer.getRenderTarget(),wh=this._renderer.getActiveCubeFace(),bh=this._renderer.getActiveMipmapLevel(),Th=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ap(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=op(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Sh,wh,bh),this._renderer.xr.enabled=Th,e.scissorTest=!1,oc(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Zr||e.mapping===$r?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Sh=this._renderer.getRenderTarget(),wh=this._renderer.getActiveCubeFace(),bh=this._renderer.getActiveMipmapLevel(),Th=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:mn,minFilter:mn,generateMipmaps:!1,type:da,format:hi,colorSpace:zs,depthBuffer:!1},s=rp(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=rp(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=jv(r)),this._blurMaterial=e_(r,e,t)}return s}_compileMaterial(e){let t=new ht(this._lodPlanes[0],e);this._renderer.compile(t,Eh)}_sceneToCubeUV(e,t,n,s){let a=new Hn(90,1,t,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,p=h.autoClear,f=h.toneMapping;h.getClearColor(ip),h.toneMapping=Ls,h.autoClear=!1;let d=new gt({name:"PMREM.Background",side:yn,depthWrite:!1,depthTest:!1}),g=new ht(new Mt,d),x=!1,m=e.background;m?m.isColor&&(d.color.copy(m),e.background=null,x=!0):(d.color.copy(ip),x=!0);for(let u=0;u<6;u++){let E=u%3;E===0?(a.up.set(0,c[u],0),a.lookAt(l[u],0,0)):E===1?(a.up.set(0,0,c[u]),a.lookAt(0,l[u],0)):(a.up.set(0,c[u],0),a.lookAt(0,0,l[u]));let y=this._cubeSize;oc(s,E*y,u>2?y:0,y,y),h.setRenderTarget(s),x&&h.render(g,a),h.render(e,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=f,h.autoClear=p,e.background=m}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===Zr||e.mapping===$r;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=ap()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=op());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new ht(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;let c=this._cubeSize;oc(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(o,Eh)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=sp[(s-r-1)%sp.length];this._blur(e,r-1,r,o,a)}t.autoClear=n}_blur(e,t,n,s,r){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,s,"latitudinal",r),this._halfBlur(o,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,o,a){let c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,p=new ht(this._lodPlanes[s],l),f=l.uniforms,d=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*sr-1),x=r/g,m=isFinite(r)?1+Math.floor(h*x):sr;m>sr&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${sr}`);let u=[],E=0;for(let T=0;T<sr;++T){let P=T/x,O=Math.exp(-P*P/2);u.push(O),T===0?E+=O:T<m&&(E+=2*O)}for(let T=0;T<u.length;T++)u[T]=u[T]/E;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=u,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);let{_lodMax:y}=this;f.dTheta.value=g,f.mipInt.value=y-n;let M=this._sizeLods[s],C=3*M*(s>y-kr?s-y+kr:0),A=4*(this._cubeSize-M);oc(t,C,A,3*M,2*M),c.setRenderTarget(t),c.render(p,Eh)}};function jv(i){let e=[],t=[],n=[],s=i,r=i-kr+1+np.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);t.push(a);let c=1/a;o>i-kr?c=np[o-i+kr-1]:o===0&&(c=0),n.push(c);let l=1/(a-2),h=-l,p=1+l,f=[h,h,p,h,p,p,h,h,p,p,h,p],d=6,g=6,x=3,m=2,u=1,E=new Float32Array(x*g*d),y=new Float32Array(m*g*d),M=new Float32Array(u*g*d);for(let A=0;A<d;A++){let T=A%3*2/3-1,P=A>2?0:-1,O=[T,P,0,T+2/3,P,0,T+2/3,P+1,0,T,P,0,T+2/3,P+1,0,T,P+1,0];E.set(O,x*g*A),y.set(f,m*g*A);let v=[A,A,A,A,A,A];M.set(v,u*g*A)}let C=new Ct;C.setAttribute("position",new un(E,x)),C.setAttribute("uv",new un(y,m)),C.setAttribute("faceIndex",new un(M,u)),e.push(C),s>kr&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function rp(i,e,t){let n=new ps(i,e,t);return n.texture.mapping=Jc,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function oc(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function e_(i,e,t){let n=new Float32Array(sr),s=new S(0,1,0);return new Ji({name:"SphericalGaussianBlur",defines:{n:sr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:dd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Is,depthTest:!1,depthWrite:!1})}function op(){return new Ji({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:dd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Is,depthTest:!1,depthWrite:!1})}function ap(){return new Ji({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:dd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Is,depthTest:!1,depthWrite:!1})}function dd(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function t_(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){let c=a.mapping,l=c===Jo||c===Gh,h=c===Zr||c===$r;if(l||h){let p=e.get(a),f=p!==void 0?p.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return t===null&&(t=new eo(i)),p=l?t.fromEquirectangular(a,p):t.fromCubemap(a,p),p.texture.pmremVersion=a.pmremVersion,e.set(a,p),p.texture;if(p!==void 0)return p.texture;{let d=a.image;return l&&d&&d.height>0||h&&d&&s(d)?(t===null&&(t=new eo(i)),p=l?t.fromEquirectangular(a):t.fromCubemap(a),p.texture.pmremVersion=a.pmremVersion,e.set(a,p),a.addEventListener("dispose",r),p.texture):null}}}return a}function s(a){let c=0,l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function r(a){let c=a.target;c.removeEventListener("dispose",r);let l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function n_(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&_c("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function i_(i,e,t,n){let s={},r=new WeakMap;function o(p){let f=p.target;f.index!==null&&e.remove(f.index);for(let g in f.attributes)e.remove(f.attributes[g]);for(let g in f.morphAttributes){let x=f.morphAttributes[g];for(let m=0,u=x.length;m<u;m++)e.remove(x[m])}f.removeEventListener("dispose",o),delete s[f.id];let d=r.get(f);d&&(e.remove(d),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(p,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,t.memory.geometries++),f}function c(p){let f=p.attributes;for(let g in f)e.update(f[g],i.ARRAY_BUFFER);let d=p.morphAttributes;for(let g in d){let x=d[g];for(let m=0,u=x.length;m<u;m++)e.update(x[m],i.ARRAY_BUFFER)}}function l(p){let f=[],d=p.index,g=p.attributes.position,x=0;if(d!==null){let E=d.array;x=d.version;for(let y=0,M=E.length;y<M;y+=3){let C=E[y+0],A=E[y+1],T=E[y+2];f.push(C,A,A,T,T,C)}}else if(g!==void 0){let E=g.array;x=g.version;for(let y=0,M=E.length/3-1;y<M;y+=3){let C=y+0,A=y+1,T=y+2;f.push(C,A,A,T,T,C)}}else return;let m=new(n0(f)?Pc:Cc)(f,1);m.version=x;let u=r.get(p);u&&e.remove(u),r.set(p,m)}function h(p){let f=r.get(p);if(f){let d=p.index;d!==null&&f.version<d.version&&l(p)}else l(p);return r.get(p)}return{get:a,update:c,getWireframeAttribute:h}}function s_(i,e,t){let n;function s(f){n=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function c(f,d){i.drawElements(n,d,r,f*o),t.update(d,n,1)}function l(f,d,g){g!==0&&(i.drawElementsInstanced(n,d,r,f*o,g),t.update(d,n,g))}function h(f,d,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,f,0,g);let m=0;for(let u=0;u<g;u++)m+=d[u];t.update(m,n,1)}function p(f,d,g,x){if(g===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let u=0;u<f.length;u++)l(f[u]/o,d[u],x[u]);else{m.multiDrawElementsInstancedWEBGL(n,d,0,r,f,0,x,0,g);let u=0;for(let E=0;E<g;E++)u+=d[E];for(let E=0;E<x.length;E++)t.update(u,n,x[E])}}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=p}function r_(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(r/3);break;case i.LINES:t.lines+=a*(r/2);break;case i.LINE_STRIP:t.lines+=a*(r-1);break;case i.LINE_LOOP:t.lines+=a*r;break;case i.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function o_(i,e,t){let n=new WeakMap,s=new Kt;function r(o,a,c){let l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,p=h!==void 0?h.length:0,f=n.get(a);if(f===void 0||f.count!==p){let O=function(){T.dispose(),n.delete(a),a.removeEventListener("dispose",O)};f!==void 0&&f.texture.dispose();let d=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],u=a.morphAttributes.normal||[],E=a.morphAttributes.color||[],y=0;d===!0&&(y=1),g===!0&&(y=2),x===!0&&(y=3);let M=a.attributes.position.count*y,C=1;M>e.maxTextureSize&&(C=Math.ceil(M/e.maxTextureSize),M=e.maxTextureSize);let A=new Float32Array(M*C*4*p),T=new Ac(A,M,C,p);T.type=$i,T.needsUpdate=!0;let P=y*4;for(let v=0;v<p;v++){let w=m[v],W=u[v],z=E[v],B=M*C*4*v;for(let H=0;H<w.count;H++){let Z=H*P;d===!0&&(s.fromBufferAttribute(w,H),A[B+Z+0]=s.x,A[B+Z+1]=s.y,A[B+Z+2]=s.z,A[B+Z+3]=0),g===!0&&(s.fromBufferAttribute(W,H),A[B+Z+4]=s.x,A[B+Z+5]=s.y,A[B+Z+6]=s.z,A[B+Z+7]=0),x===!0&&(s.fromBufferAttribute(z,H),A[B+Z+8]=s.x,A[B+Z+9]=s.y,A[B+Z+10]=s.z,A[B+Z+11]=z.itemSize===4?s.w:1)}}f={count:p,texture:T,size:new Ne(M,C)},n.set(a,f),a.addEventListener("dispose",O)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let d=0;for(let x=0;x<l.length;x++)d+=l[x];let g=a.morphTargetsRelative?1:1-d;c.getUniforms().setValue(i,"morphTargetBaseInfluence",g),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",f.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function a_(i,e,t,n){let s=new WeakMap;function r(c){let l=n.render.frame,h=c.geometry,p=e.get(c,h);if(s.get(p)!==l&&(e.update(p),s.set(p,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){let f=c.skeleton;s.get(f)!==l&&(f.update(),s.set(f,l))}return p}function o(){s=new WeakMap}function a(c){let l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:o}}var Uc=class extends $n{constructor(e,t,n,s,r,o,a,c,l,h=Wr){if(h!==Wr&&h!==Jr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Wr&&(n=ar),n===void 0&&h===Jr&&(n=Kr),super(null,s,r,o,a,c,h,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:ti,this.minFilter=c!==void 0?c:ti,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},o0=new $n,cp=new Uc(1,1),a0=new Ac,c0=new _u,l0=new Lc,lp=[],hp=[],up=new Float32Array(16),dp=new Float32Array(9),fp=new Float32Array(4);function oo(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=lp[s];if(r===void 0&&(r=new Float32Array(s),lp[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function wn(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function bn(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function jc(i,e){let t=hp[e];t===void 0&&(t=new Int32Array(e),hp[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function c_(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function l_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(wn(t,e))return;i.uniform2fv(this.addr,e),bn(t,e)}}function h_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(wn(t,e))return;i.uniform3fv(this.addr,e),bn(t,e)}}function u_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(wn(t,e))return;i.uniform4fv(this.addr,e),bn(t,e)}}function d_(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(wn(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),bn(t,e)}else{if(wn(t,n))return;fp.set(n),i.uniformMatrix2fv(this.addr,!1,fp),bn(t,n)}}function f_(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(wn(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),bn(t,e)}else{if(wn(t,n))return;dp.set(n),i.uniformMatrix3fv(this.addr,!1,dp),bn(t,n)}}function p_(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(wn(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),bn(t,e)}else{if(wn(t,n))return;up.set(n),i.uniformMatrix4fv(this.addr,!1,up),bn(t,n)}}function m_(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function g_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(wn(t,e))return;i.uniform2iv(this.addr,e),bn(t,e)}}function x_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(wn(t,e))return;i.uniform3iv(this.addr,e),bn(t,e)}}function y_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(wn(t,e))return;i.uniform4iv(this.addr,e),bn(t,e)}}function v_(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function __(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(wn(t,e))return;i.uniform2uiv(this.addr,e),bn(t,e)}}function M_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(wn(t,e))return;i.uniform3uiv(this.addr,e),bn(t,e)}}function E_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(wn(t,e))return;i.uniform4uiv(this.addr,e),bn(t,e)}}function S_(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(cp.compareFunction=t0,r=cp):r=o0,t.setTexture2D(e||r,s)}function w_(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||c0,s)}function b_(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||l0,s)}function T_(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||a0,s)}function R_(i){switch(i){case 5126:return c_;case 35664:return l_;case 35665:return h_;case 35666:return u_;case 35674:return d_;case 35675:return f_;case 35676:return p_;case 5124:case 35670:return m_;case 35667:case 35671:return g_;case 35668:case 35672:return x_;case 35669:case 35673:return y_;case 5125:return v_;case 36294:return __;case 36295:return M_;case 36296:return E_;case 35678:case 36198:case 36298:case 36306:case 35682:return S_;case 35679:case 36299:case 36307:return w_;case 35680:case 36300:case 36308:case 36293:return b_;case 36289:case 36303:case 36311:case 36292:return T_}}function A_(i,e){i.uniform1fv(this.addr,e)}function C_(i,e){let t=oo(e,this.size,2);i.uniform2fv(this.addr,t)}function P_(i,e){let t=oo(e,this.size,3);i.uniform3fv(this.addr,t)}function I_(i,e){let t=oo(e,this.size,4);i.uniform4fv(this.addr,t)}function L_(i,e){let t=oo(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function D_(i,e){let t=oo(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function U_(i,e){let t=oo(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function H_(i,e){i.uniform1iv(this.addr,e)}function N_(i,e){i.uniform2iv(this.addr,e)}function F_(i,e){i.uniform3iv(this.addr,e)}function O_(i,e){i.uniform4iv(this.addr,e)}function B_(i,e){i.uniform1uiv(this.addr,e)}function z_(i,e){i.uniform2uiv(this.addr,e)}function k_(i,e){i.uniform3uiv(this.addr,e)}function V_(i,e){i.uniform4uiv(this.addr,e)}function G_(i,e,t){let n=this.cache,s=e.length,r=jc(t,s);wn(n,r)||(i.uniform1iv(this.addr,r),bn(n,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||o0,r[o])}function W_(i,e,t){let n=this.cache,s=e.length,r=jc(t,s);wn(n,r)||(i.uniform1iv(this.addr,r),bn(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||c0,r[o])}function X_(i,e,t){let n=this.cache,s=e.length,r=jc(t,s);wn(n,r)||(i.uniform1iv(this.addr,r),bn(n,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||l0,r[o])}function q_(i,e,t){let n=this.cache,s=e.length,r=jc(t,s);wn(n,r)||(i.uniform1iv(this.addr,r),bn(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||a0,r[o])}function Y_(i){switch(i){case 5126:return A_;case 35664:return C_;case 35665:return P_;case 35666:return I_;case 35674:return L_;case 35675:return D_;case 35676:return U_;case 5124:case 35670:return H_;case 35667:case 35671:return N_;case 35668:case 35672:return F_;case 35669:case 35673:return O_;case 5125:return B_;case 36294:return z_;case 36295:return k_;case 36296:return V_;case 35678:case 36198:case 36298:case 36306:case 35682:return G_;case 35679:case 36299:case 36307:return W_;case 35680:case 36300:case 36308:case 36293:return X_;case 36289:case 36303:case 36311:case 36292:return q_}}var Su=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=R_(t.type)}},wu=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Y_(t.type)}},bu=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],n)}}},Rh=/(\w+)(\])?(\[|\.)?/g;function pp(i,e){i.seq.push(e),i.map[e.id]=e}function Z_(i,e,t){let n=i.name,s=n.length;for(Rh.lastIndex=0;;){let r=Rh.exec(n),o=Rh.lastIndex,a=r[1],c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){pp(t,l===void 0?new Su(a,i,e):new wu(a,i,e));break}else{let p=t.map[a];p===void 0&&(p=new bu(a),pp(t,p)),t=p}}}var qr=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);Z_(r,o,this)}}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&n.push(o)}return n}};function mp(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var $_=37297,K_=0;function J_(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function Q_(i){let e=Xt.getPrimaries(Xt.workingColorSpace),t=Xt.getPrimaries(i),n;switch(e===t?n="":e===bc&&t===wc?n="LinearDisplayP3ToLinearSRGB":e===wc&&t===bc&&(n="LinearSRGBToLinearDisplayP3"),i){case zs:case Qc:return[n,"LinearTransferOETF"];case ft:case hd:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function gp(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+J_(i.getShaderSource(e),o)}else return s}function j_(i,e){let t=Q_(e);return`vec4 ${i}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function e2(i,e){let t;switch(e){case u1:t="Linear";break;case d1:t="Reinhard";break;case f1:t="Cineon";break;case td:t="ACESFilmic";break;case m1:t="AgX";break;case g1:t="Neutral";break;case p1:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var ac=new S;function t2(){Xt.getLuminanceCoefficients(ac);let i=ac.x.toFixed(4),e=ac.y.toFixed(4),t=ac.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function n2(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Xo).join(`
`)}function i2(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function s2(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function Xo(i){return i!==""}function xp(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function yp(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var r2=/^[ \t]*#include +<([\w\d./]+)>/gm;function Tu(i){return i.replace(r2,a2)}var o2=new Map;function a2(i,e){let t=_t[e];if(t===void 0){let n=o2.get(e);if(n!==void 0)t=_t[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Tu(t)}var c2=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function vp(i){return i.replace(c2,l2)}function l2(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function _p(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function h2(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Vp?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===ed?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===us&&(e="SHADOWMAP_TYPE_VSM"),e}function u2(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Zr:case $r:e="ENVMAP_TYPE_CUBE";break;case Jc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function d2(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case $r:e="ENVMAP_MODE_REFRACTION";break}return e}function f2(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Gp:e="ENVMAP_BLENDING_MULTIPLY";break;case l1:e="ENVMAP_BLENDING_MIX";break;case h1:e="ENVMAP_BLENDING_ADD";break}return e}function p2(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function m2(i,e,t,n){let s=i.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,c=h2(t),l=u2(t),h=d2(t),p=f2(t),f=p2(t),d=n2(t),g=i2(r),x=s.createProgram(),m,u,E=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Xo).join(`
`),m.length>0&&(m+=`
`),u=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Xo).join(`
`),u.length>0&&(u+=`
`)):(m=[_p(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Xo).join(`
`),u=[_p(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+p:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ls?"#define TONE_MAPPING":"",t.toneMapping!==Ls?_t.tonemapping_pars_fragment:"",t.toneMapping!==Ls?e2("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",_t.colorspace_pars_fragment,j_("linearToOutputTexel",t.outputColorSpace),t2(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Xo).join(`
`)),o=Tu(o),o=xp(o,t),o=yp(o,t),a=Tu(a),a=xp(a,t),a=yp(a,t),o=vp(o),a=vp(a),t.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,u=["#define varying in",t.glslVersion===Ff?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Ff?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);let y=E+m+o,M=E+u+a,C=mp(s,s.VERTEX_SHADER,y),A=mp(s,s.FRAGMENT_SHADER,M);s.attachShader(x,C),s.attachShader(x,A),t.index0AttributeName!==void 0?s.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function T(w){if(i.debug.checkShaderErrors){let W=s.getProgramInfoLog(x).trim(),z=s.getShaderInfoLog(C).trim(),B=s.getShaderInfoLog(A).trim(),H=!0,Z=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(H=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,x,C,A);else{let me=gp(s,C,"vertex"),Q=gp(s,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+w.name+`
Material Type: `+w.type+`

Program Info Log: `+W+`
`+me+`
`+Q)}else W!==""?console.warn("THREE.WebGLProgram: Program Info Log:",W):(z===""||B==="")&&(Z=!1);Z&&(w.diagnostics={runnable:H,programLog:W,vertexShader:{log:z,prefix:m},fragmentShader:{log:B,prefix:u}})}s.deleteShader(C),s.deleteShader(A),P=new qr(s,x),O=s2(s,x)}let P;this.getUniforms=function(){return P===void 0&&T(this),P};let O;this.getAttributes=function(){return O===void 0&&T(this),O};let v=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return v===!1&&(v=s.getProgramParameter(x,$_)),v},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=K_++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=C,this.fragmentShader=A,this}var g2=0,Ru=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Au(e),t.set(e,n)),n}},Au=class{constructor(e){this.id=g2++,this.code=e,this.usedTimes=0}};function x2(i,e,t,n,s,r,o){let a=new ta,c=new Ru,l=new Set,h=[],p=s.logarithmicDepthBuffer,f=s.reverseDepthBuffer,d=s.vertexTextures,g=s.precision,x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(v){return l.add(v),v===0?"uv":`uv${v}`}function u(v,w,W,z,B){let H=z.fog,Z=B.geometry,me=v.isMeshStandardMaterial?z.environment:null,Q=(v.isMeshStandardMaterial?t:e).get(v.envMap||me),ge=Q&&Q.mapping===Jc?Q.image.height:null,N=x[v.type];v.precision!==null&&(g=s.getMaxPrecision(v.precision),g!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",g,"instead."));let ae=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,ne=ae!==void 0?ae.length:0,ie=0;Z.morphAttributes.position!==void 0&&(ie=1),Z.morphAttributes.normal!==void 0&&(ie=2),Z.morphAttributes.color!==void 0&&(ie=3);let F,re,X,V;if(N){let It=Zi[N];F=It.vertexShader,re=It.fragmentShader}else F=v.vertexShader,re=v.fragmentShader,c.update(v),X=c.getVertexShaderID(v),V=c.getFragmentShaderID(v);let $=i.getRenderTarget(),xe=B.isInstancedMesh===!0,Ce=B.isBatchedMesh===!0,ve=!!v.map,te=!!v.matcap,L=!!Q,_e=!!v.aoMap,se=!!v.lightMap,he=!!v.bumpMap,de=!!v.normalMap,Me=!!v.displacementMap,Se=!!v.emissiveMap,U=!!v.metalnessMap,b=!!v.roughnessMap,j=v.anisotropy>0,pe=v.clearcoat>0,Te=v.dispersion>0,Ee=v.iridescence>0,Xe=v.sheen>0,Oe=v.transmission>0,ke=j&&!!v.anisotropyMap,vt=pe&&!!v.clearcoatMap,De=pe&&!!v.clearcoatNormalMap,J=pe&&!!v.clearcoatRoughnessMap,ye=Ee&&!!v.iridescenceMap,Ie=Ee&&!!v.iridescenceThicknessMap,Pe=Xe&&!!v.sheenColorMap,Re=Xe&&!!v.sheenRoughnessMap,le=!!v.specularMap,Ve=!!v.specularColorMap,q=!!v.specularIntensityMap,Ae=Oe&&!!v.transmissionMap,ce=Oe&&!!v.thicknessMap,we=!!v.gradientMap,Ue=!!v.alphaMap,Fe=v.alphaTest>0,ut=!!v.alphaHash,Pt=!!v.extensions,Ot=Ls;v.toneMapped&&($===null||$.isXRRenderTarget===!0)&&(Ot=i.toneMapping);let lt={shaderID:N,shaderType:v.type,shaderName:v.name,vertexShader:F,fragmentShader:re,defines:v.defines,customVertexShaderID:X,customFragmentShaderID:V,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:g,batching:Ce,batchingColor:Ce&&B._colorsTexture!==null,instancing:xe,instancingColor:xe&&B.instanceColor!==null,instancingMorph:xe&&B.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:$===null?i.outputColorSpace:$.isXRRenderTarget===!0?$.texture.colorSpace:zs,alphaToCoverage:!!v.alphaToCoverage,map:ve,matcap:te,envMap:L,envMapMode:L&&Q.mapping,envMapCubeUVHeight:ge,aoMap:_e,lightMap:se,bumpMap:he,normalMap:de,displacementMap:d&&Me,emissiveMap:Se,normalMapObjectSpace:de&&v.normalMapType===v1,normalMapTangentSpace:de&&v.normalMapType===e0,metalnessMap:U,roughnessMap:b,anisotropy:j,anisotropyMap:ke,clearcoat:pe,clearcoatMap:vt,clearcoatNormalMap:De,clearcoatRoughnessMap:J,dispersion:Te,iridescence:Ee,iridescenceMap:ye,iridescenceThicknessMap:Ie,sheen:Xe,sheenColorMap:Pe,sheenRoughnessMap:Re,specularMap:le,specularColorMap:Ve,specularIntensityMap:q,transmission:Oe,transmissionMap:Ae,thicknessMap:ce,gradientMap:we,opaque:v.transparent===!1&&v.blending===Gr&&v.alphaToCoverage===!1,alphaMap:Ue,alphaTest:Fe,alphaHash:ut,combine:v.combine,mapUv:ve&&m(v.map.channel),aoMapUv:_e&&m(v.aoMap.channel),lightMapUv:se&&m(v.lightMap.channel),bumpMapUv:he&&m(v.bumpMap.channel),normalMapUv:de&&m(v.normalMap.channel),displacementMapUv:Me&&m(v.displacementMap.channel),emissiveMapUv:Se&&m(v.emissiveMap.channel),metalnessMapUv:U&&m(v.metalnessMap.channel),roughnessMapUv:b&&m(v.roughnessMap.channel),anisotropyMapUv:ke&&m(v.anisotropyMap.channel),clearcoatMapUv:vt&&m(v.clearcoatMap.channel),clearcoatNormalMapUv:De&&m(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:J&&m(v.clearcoatRoughnessMap.channel),iridescenceMapUv:ye&&m(v.iridescenceMap.channel),iridescenceThicknessMapUv:Ie&&m(v.iridescenceThicknessMap.channel),sheenColorMapUv:Pe&&m(v.sheenColorMap.channel),sheenRoughnessMapUv:Re&&m(v.sheenRoughnessMap.channel),specularMapUv:le&&m(v.specularMap.channel),specularColorMapUv:Ve&&m(v.specularColorMap.channel),specularIntensityMapUv:q&&m(v.specularIntensityMap.channel),transmissionMapUv:Ae&&m(v.transmissionMap.channel),thicknessMapUv:ce&&m(v.thicknessMap.channel),alphaMapUv:Ue&&m(v.alphaMap.channel),vertexTangents:!!Z.attributes.tangent&&(de||j),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!Z.attributes.uv&&(ve||Ue),fog:!!H,useFog:v.fog===!0,fogExp2:!!H&&H.isFogExp2,flatShading:v.flatShading===!0,sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:p,reverseDepthBuffer:f,skinning:B.isSkinnedMesh===!0,morphTargets:Z.morphAttributes.position!==void 0,morphNormals:Z.morphAttributes.normal!==void 0,morphColors:Z.morphAttributes.color!==void 0,morphTargetsCount:ne,morphTextureStride:ie,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:v.dithering,shadowMapEnabled:i.shadowMap.enabled&&W.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ot,decodeVideoTexture:ve&&v.map.isVideoTexture===!0&&Xt.getTransfer(v.map.colorSpace)===rn,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===Dt,flipSided:v.side===yn,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:Pt&&v.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Pt&&v.extensions.multiDraw===!0||Ce)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return lt.vertexUv1s=l.has(1),lt.vertexUv2s=l.has(2),lt.vertexUv3s=l.has(3),l.clear(),lt}function E(v){let w=[];if(v.shaderID?w.push(v.shaderID):(w.push(v.customVertexShaderID),w.push(v.customFragmentShaderID)),v.defines!==void 0)for(let W in v.defines)w.push(W),w.push(v.defines[W]);return v.isRawShaderMaterial===!1&&(y(w,v),M(w,v),w.push(i.outputColorSpace)),w.push(v.customProgramCacheKey),w.join()}function y(v,w){v.push(w.precision),v.push(w.outputColorSpace),v.push(w.envMapMode),v.push(w.envMapCubeUVHeight),v.push(w.mapUv),v.push(w.alphaMapUv),v.push(w.lightMapUv),v.push(w.aoMapUv),v.push(w.bumpMapUv),v.push(w.normalMapUv),v.push(w.displacementMapUv),v.push(w.emissiveMapUv),v.push(w.metalnessMapUv),v.push(w.roughnessMapUv),v.push(w.anisotropyMapUv),v.push(w.clearcoatMapUv),v.push(w.clearcoatNormalMapUv),v.push(w.clearcoatRoughnessMapUv),v.push(w.iridescenceMapUv),v.push(w.iridescenceThicknessMapUv),v.push(w.sheenColorMapUv),v.push(w.sheenRoughnessMapUv),v.push(w.specularMapUv),v.push(w.specularColorMapUv),v.push(w.specularIntensityMapUv),v.push(w.transmissionMapUv),v.push(w.thicknessMapUv),v.push(w.combine),v.push(w.fogExp2),v.push(w.sizeAttenuation),v.push(w.morphTargetsCount),v.push(w.morphAttributeCount),v.push(w.numDirLights),v.push(w.numPointLights),v.push(w.numSpotLights),v.push(w.numSpotLightMaps),v.push(w.numHemiLights),v.push(w.numRectAreaLights),v.push(w.numDirLightShadows),v.push(w.numPointLightShadows),v.push(w.numSpotLightShadows),v.push(w.numSpotLightShadowsWithMaps),v.push(w.numLightProbes),v.push(w.shadowMapType),v.push(w.toneMapping),v.push(w.numClippingPlanes),v.push(w.numClipIntersection),v.push(w.depthPacking)}function M(v,w){a.disableAll(),w.supportsVertexTextures&&a.enable(0),w.instancing&&a.enable(1),w.instancingColor&&a.enable(2),w.instancingMorph&&a.enable(3),w.matcap&&a.enable(4),w.envMap&&a.enable(5),w.normalMapObjectSpace&&a.enable(6),w.normalMapTangentSpace&&a.enable(7),w.clearcoat&&a.enable(8),w.iridescence&&a.enable(9),w.alphaTest&&a.enable(10),w.vertexColors&&a.enable(11),w.vertexAlphas&&a.enable(12),w.vertexUv1s&&a.enable(13),w.vertexUv2s&&a.enable(14),w.vertexUv3s&&a.enable(15),w.vertexTangents&&a.enable(16),w.anisotropy&&a.enable(17),w.alphaHash&&a.enable(18),w.batching&&a.enable(19),w.dispersion&&a.enable(20),w.batchingColor&&a.enable(21),v.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.reverseDepthBuffer&&a.enable(4),w.skinning&&a.enable(5),w.morphTargets&&a.enable(6),w.morphNormals&&a.enable(7),w.morphColors&&a.enable(8),w.premultipliedAlpha&&a.enable(9),w.shadowMapEnabled&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.transmission&&a.enable(15),w.sheen&&a.enable(16),w.opaque&&a.enable(17),w.pointsUvs&&a.enable(18),w.decodeVideoTexture&&a.enable(19),w.alphaToCoverage&&a.enable(20),v.push(a.mask)}function C(v){let w=x[v.type],W;if(w){let z=Zi[w];W=ax.clone(z.uniforms)}else W=v.uniforms;return W}function A(v,w){let W;for(let z=0,B=h.length;z<B;z++){let H=h[z];if(H.cacheKey===w){W=H,++W.usedTimes;break}}return W===void 0&&(W=new m2(i,w,v,r),h.push(W)),W}function T(v){if(--v.usedTimes===0){let w=h.indexOf(v);h[w]=h[h.length-1],h.pop(),v.destroy()}}function P(v){c.remove(v)}function O(){c.dispose()}return{getParameters:u,getProgramCacheKey:E,getUniforms:C,acquireProgram:A,releaseProgram:T,releaseShaderCache:P,programs:h,dispose:O}}function y2(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,c){i.get(o)[a]=c}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function v2(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Mp(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Ep(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(p,f,d,g,x,m){let u=i[e];return u===void 0?(u={id:p.id,object:p,geometry:f,material:d,groupOrder:g,renderOrder:p.renderOrder,z:x,group:m},i[e]=u):(u.id=p.id,u.object=p,u.geometry=f,u.material=d,u.groupOrder=g,u.renderOrder=p.renderOrder,u.z=x,u.group=m),e++,u}function a(p,f,d,g,x,m){let u=o(p,f,d,g,x,m);d.transmission>0?n.push(u):d.transparent===!0?s.push(u):t.push(u)}function c(p,f,d,g,x,m){let u=o(p,f,d,g,x,m);d.transmission>0?n.unshift(u):d.transparent===!0?s.unshift(u):t.unshift(u)}function l(p,f){t.length>1&&t.sort(p||v2),n.length>1&&n.sort(f||Mp),s.length>1&&s.sort(f||Mp)}function h(){for(let p=e,f=i.length;p<f;p++){let d=i[p];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:a,unshift:c,finish:h,sort:l}}function _2(){let i=new WeakMap;function e(n,s){let r=i.get(n),o;return r===void 0?(o=new Ep,i.set(n,[o])):s>=r.length?(o=new Ep,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function M2(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new S,color:new dt};break;case"SpotLight":t={position:new S,direction:new S,color:new dt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new S,color:new dt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new S,skyColor:new dt,groundColor:new dt};break;case"RectAreaLight":t={color:new dt,position:new S,halfWidth:new S,halfHeight:new S};break}return i[e.id]=t,t}}}function E2(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ne};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ne};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ne,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var S2=0;function w2(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function b2(i){let e=new M2,t=E2(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new S);let s=new S,r=new wt,o=new wt;function a(l){let h=0,p=0,f=0;for(let O=0;O<9;O++)n.probe[O].set(0,0,0);let d=0,g=0,x=0,m=0,u=0,E=0,y=0,M=0,C=0,A=0,T=0;l.sort(w2);for(let O=0,v=l.length;O<v;O++){let w=l[O],W=w.color,z=w.intensity,B=w.distance,H=w.shadow&&w.shadow.map?w.shadow.map.texture:null;if(w.isAmbientLight)h+=W.r*z,p+=W.g*z,f+=W.b*z;else if(w.isLightProbe){for(let Z=0;Z<9;Z++)n.probe[Z].addScaledVector(w.sh.coefficients[Z],z);T++}else if(w.isDirectionalLight){let Z=e.get(w);if(Z.color.copy(w.color).multiplyScalar(w.intensity),w.castShadow){let me=w.shadow,Q=t.get(w);Q.shadowIntensity=me.intensity,Q.shadowBias=me.bias,Q.shadowNormalBias=me.normalBias,Q.shadowRadius=me.radius,Q.shadowMapSize=me.mapSize,n.directionalShadow[d]=Q,n.directionalShadowMap[d]=H,n.directionalShadowMatrix[d]=w.shadow.matrix,E++}n.directional[d]=Z,d++}else if(w.isSpotLight){let Z=e.get(w);Z.position.setFromMatrixPosition(w.matrixWorld),Z.color.copy(W).multiplyScalar(z),Z.distance=B,Z.coneCos=Math.cos(w.angle),Z.penumbraCos=Math.cos(w.angle*(1-w.penumbra)),Z.decay=w.decay,n.spot[x]=Z;let me=w.shadow;if(w.map&&(n.spotLightMap[C]=w.map,C++,me.updateMatrices(w),w.castShadow&&A++),n.spotLightMatrix[x]=me.matrix,w.castShadow){let Q=t.get(w);Q.shadowIntensity=me.intensity,Q.shadowBias=me.bias,Q.shadowNormalBias=me.normalBias,Q.shadowRadius=me.radius,Q.shadowMapSize=me.mapSize,n.spotShadow[x]=Q,n.spotShadowMap[x]=H,M++}x++}else if(w.isRectAreaLight){let Z=e.get(w);Z.color.copy(W).multiplyScalar(z),Z.halfWidth.set(w.width*.5,0,0),Z.halfHeight.set(0,w.height*.5,0),n.rectArea[m]=Z,m++}else if(w.isPointLight){let Z=e.get(w);if(Z.color.copy(w.color).multiplyScalar(w.intensity),Z.distance=w.distance,Z.decay=w.decay,w.castShadow){let me=w.shadow,Q=t.get(w);Q.shadowIntensity=me.intensity,Q.shadowBias=me.bias,Q.shadowNormalBias=me.normalBias,Q.shadowRadius=me.radius,Q.shadowMapSize=me.mapSize,Q.shadowCameraNear=me.camera.near,Q.shadowCameraFar=me.camera.far,n.pointShadow[g]=Q,n.pointShadowMap[g]=H,n.pointShadowMatrix[g]=w.shadow.matrix,y++}n.point[g]=Z,g++}else if(w.isHemisphereLight){let Z=e.get(w);Z.skyColor.copy(w.color).multiplyScalar(z),Z.groundColor.copy(w.groundColor).multiplyScalar(z),n.hemi[u]=Z,u++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ye.LTC_FLOAT_1,n.rectAreaLTC2=Ye.LTC_FLOAT_2):(n.rectAreaLTC1=Ye.LTC_HALF_1,n.rectAreaLTC2=Ye.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=p,n.ambient[2]=f;let P=n.hash;(P.directionalLength!==d||P.pointLength!==g||P.spotLength!==x||P.rectAreaLength!==m||P.hemiLength!==u||P.numDirectionalShadows!==E||P.numPointShadows!==y||P.numSpotShadows!==M||P.numSpotMaps!==C||P.numLightProbes!==T)&&(n.directional.length=d,n.spot.length=x,n.rectArea.length=m,n.point.length=g,n.hemi.length=u,n.directionalShadow.length=E,n.directionalShadowMap.length=E,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=M,n.spotShadowMap.length=M,n.directionalShadowMatrix.length=E,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=M+C-A,n.spotLightMap.length=C,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=T,P.directionalLength=d,P.pointLength=g,P.spotLength=x,P.rectAreaLength=m,P.hemiLength=u,P.numDirectionalShadows=E,P.numPointShadows=y,P.numSpotShadows=M,P.numSpotMaps=C,P.numLightProbes=T,n.version=S2++)}function c(l,h){let p=0,f=0,d=0,g=0,x=0,m=h.matrixWorldInverse;for(let u=0,E=l.length;u<E;u++){let y=l[u];if(y.isDirectionalLight){let M=n.directional[p];M.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(m),p++}else if(y.isSpotLight){let M=n.spot[d];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(m),M.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(m),d++}else if(y.isRectAreaLight){let M=n.rectArea[g];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(m),o.identity(),r.copy(y.matrixWorld),r.premultiply(m),o.extractRotation(r),M.halfWidth.set(y.width*.5,0,0),M.halfHeight.set(0,y.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),g++}else if(y.isPointLight){let M=n.point[f];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(m),f++}else if(y.isHemisphereLight){let M=n.hemi[x];M.direction.setFromMatrixPosition(y.matrixWorld),M.direction.transformDirection(m),x++}}}return{setup:a,setupView:c,state:n}}function Sp(i){let e=new b2(i),t=[],n=[];function s(h){l.camera=h,t.length=0,n.length=0}function r(h){t.push(h)}function o(h){n.push(h)}function a(){e.setup(t)}function c(h){e.setupView(t,h)}let l={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function T2(i){let e=new WeakMap;function t(s,r=0){let o=e.get(s),a;return o===void 0?(a=new Sp(i),e.set(s,[a])):r>=o.length?(a=new Sp(i),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}var ia=class extends Ns{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=y1,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Cu=class extends Ns{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},R2=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,A2=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function C2(i,e,t){let n=new na,s=new Ne,r=new Ne,o=new Kt,a=new ia({depthPacking:ld}),c=new Cu,l={},h=t.maxTextureSize,p={[Ki]:yn,[yn]:Ki,[Dt]:Dt},f=new Ji({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ne},radius:{value:4}},vertexShader:R2,fragmentShader:A2}),d=f.clone();d.defines.HORIZONTAL_PASS=1;let g=new Ct;g.setAttribute("position",new un(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new ht(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Vp;let u=this.type;this.render=function(A,T,P){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;let O=i.getRenderTarget(),v=i.getActiveCubeFace(),w=i.getActiveMipmapLevel(),W=i.state;W.setBlending(Is),W.buffers.color.setClear(1,1,1,1),W.buffers.depth.setTest(!0),W.setScissorTest(!1);let z=u!==us&&this.type===us,B=u===us&&this.type!==us;for(let H=0,Z=A.length;H<Z;H++){let me=A[H],Q=me.shadow;if(Q===void 0){console.warn("THREE.WebGLShadowMap:",me,"has no shadow.");continue}if(Q.autoUpdate===!1&&Q.needsUpdate===!1)continue;s.copy(Q.mapSize);let ge=Q.getFrameExtents();if(s.multiply(ge),r.copy(Q.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/ge.x),s.x=r.x*ge.x,Q.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/ge.y),s.y=r.y*ge.y,Q.mapSize.y=r.y)),Q.map===null||z===!0||B===!0){let ae=this.type!==us?{minFilter:ti,magFilter:ti}:{};Q.map!==null&&Q.map.dispose(),Q.map=new ps(s.x,s.y,ae),Q.map.texture.name=me.name+".shadowMap",Q.camera.updateProjectionMatrix()}i.setRenderTarget(Q.map),i.clear();let N=Q.getViewportCount();for(let ae=0;ae<N;ae++){let ne=Q.getViewport(ae);o.set(r.x*ne.x,r.y*ne.y,r.x*ne.z,r.y*ne.w),W.viewport(o),Q.updateMatrices(me,ae),n=Q.getFrustum(),M(T,P,Q.camera,me,this.type)}Q.isPointLightShadow!==!0&&this.type===us&&E(Q,P),Q.needsUpdate=!1}u=this.type,m.needsUpdate=!1,i.setRenderTarget(O,v,w)};function E(A,T){let P=e.update(x);f.defines.VSM_SAMPLES!==A.blurSamples&&(f.defines.VSM_SAMPLES=A.blurSamples,d.defines.VSM_SAMPLES=A.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new ps(s.x,s.y)),f.uniforms.shadow_pass.value=A.map.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,i.setRenderTarget(A.mapPass),i.clear(),i.renderBufferDirect(T,null,P,f,x,null),d.uniforms.shadow_pass.value=A.mapPass.texture,d.uniforms.resolution.value=A.mapSize,d.uniforms.radius.value=A.radius,i.setRenderTarget(A.map),i.clear(),i.renderBufferDirect(T,null,P,d,x,null)}function y(A,T,P,O){let v=null,w=P.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(w!==void 0)v=w;else if(v=P.isPointLight===!0?c:a,i.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){let W=v.uuid,z=T.uuid,B=l[W];B===void 0&&(B={},l[W]=B);let H=B[z];H===void 0&&(H=v.clone(),B[z]=H,T.addEventListener("dispose",C)),v=H}if(v.visible=T.visible,v.wireframe=T.wireframe,O===us?v.side=T.shadowSide!==null?T.shadowSide:T.side:v.side=T.shadowSide!==null?T.shadowSide:p[T.side],v.alphaMap=T.alphaMap,v.alphaTest=T.alphaTest,v.map=T.map,v.clipShadows=T.clipShadows,v.clippingPlanes=T.clippingPlanes,v.clipIntersection=T.clipIntersection,v.displacementMap=T.displacementMap,v.displacementScale=T.displacementScale,v.displacementBias=T.displacementBias,v.wireframeLinewidth=T.wireframeLinewidth,v.linewidth=T.linewidth,P.isPointLight===!0&&v.isMeshDistanceMaterial===!0){let W=i.properties.get(v);W.light=P}return v}function M(A,T,P,O,v){if(A.visible===!1)return;if(A.layers.test(T.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&v===us)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,A.matrixWorld);let z=e.update(A),B=A.material;if(Array.isArray(B)){let H=z.groups;for(let Z=0,me=H.length;Z<me;Z++){let Q=H[Z],ge=B[Q.materialIndex];if(ge&&ge.visible){let N=y(A,ge,O,v);A.onBeforeShadow(i,A,T,P,z,N,Q),i.renderBufferDirect(P,null,z,N,A,Q),A.onAfterShadow(i,A,T,P,z,N,Q)}}}else if(B.visible){let H=y(A,B,O,v);A.onBeforeShadow(i,A,T,P,z,H,null),i.renderBufferDirect(P,null,z,H,A,null),A.onAfterShadow(i,A,T,P,z,H,null)}}let W=A.children;for(let z=0,B=W.length;z<B;z++)M(W[z],T,P,O,v)}function C(A){A.target.removeEventListener("dispose",C);for(let P in l){let O=l[P],v=A.target.uuid;v in O&&(O[v].dispose(),delete O[v])}}}var P2={[Nh]:Fh,[Oh]:kh,[Bh]:Vh,[Yr]:zh,[Fh]:Nh,[kh]:Oh,[Vh]:Bh,[zh]:Yr};function I2(i){function e(){let q=!1,Ae=new Kt,ce=null,we=new Kt(0,0,0,0);return{setMask:function(Ue){ce!==Ue&&!q&&(i.colorMask(Ue,Ue,Ue,Ue),ce=Ue)},setLocked:function(Ue){q=Ue},setClear:function(Ue,Fe,ut,Pt,Ot){Ot===!0&&(Ue*=Pt,Fe*=Pt,ut*=Pt),Ae.set(Ue,Fe,ut,Pt),we.equals(Ae)===!1&&(i.clearColor(Ue,Fe,ut,Pt),we.copy(Ae))},reset:function(){q=!1,ce=null,we.set(-1,0,0,0)}}}function t(){let q=!1,Ae=!1,ce=null,we=null,Ue=null;return{setReversed:function(Fe){Ae=Fe},setTest:function(Fe){Fe?X(i.DEPTH_TEST):V(i.DEPTH_TEST)},setMask:function(Fe){ce!==Fe&&!q&&(i.depthMask(Fe),ce=Fe)},setFunc:function(Fe){if(Ae&&(Fe=P2[Fe]),we!==Fe){switch(Fe){case Nh:i.depthFunc(i.NEVER);break;case Fh:i.depthFunc(i.ALWAYS);break;case Oh:i.depthFunc(i.LESS);break;case Yr:i.depthFunc(i.LEQUAL);break;case Bh:i.depthFunc(i.EQUAL);break;case zh:i.depthFunc(i.GEQUAL);break;case kh:i.depthFunc(i.GREATER);break;case Vh:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}we=Fe}},setLocked:function(Fe){q=Fe},setClear:function(Fe){Ue!==Fe&&(i.clearDepth(Fe),Ue=Fe)},reset:function(){q=!1,ce=null,we=null,Ue=null}}}function n(){let q=!1,Ae=null,ce=null,we=null,Ue=null,Fe=null,ut=null,Pt=null,Ot=null;return{setTest:function(lt){q||(lt?X(i.STENCIL_TEST):V(i.STENCIL_TEST))},setMask:function(lt){Ae!==lt&&!q&&(i.stencilMask(lt),Ae=lt)},setFunc:function(lt,It,Xn){(ce!==lt||we!==It||Ue!==Xn)&&(i.stencilFunc(lt,It,Xn),ce=lt,we=It,Ue=Xn)},setOp:function(lt,It,Xn){(Fe!==lt||ut!==It||Pt!==Xn)&&(i.stencilOp(lt,It,Xn),Fe=lt,ut=It,Pt=Xn)},setLocked:function(lt){q=lt},setClear:function(lt){Ot!==lt&&(i.clearStencil(lt),Ot=lt)},reset:function(){q=!1,Ae=null,ce=null,we=null,Ue=null,Fe=null,ut=null,Pt=null,Ot=null}}}let s=new e,r=new t,o=new n,a=new WeakMap,c=new WeakMap,l={},h={},p=new WeakMap,f=[],d=null,g=!1,x=null,m=null,u=null,E=null,y=null,M=null,C=null,A=new dt(0,0,0),T=0,P=!1,O=null,v=null,w=null,W=null,z=null,B=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),H=!1,Z=0,me=i.getParameter(i.VERSION);me.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(me)[1]),H=Z>=1):me.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(me)[1]),H=Z>=2);let Q=null,ge={},N=i.getParameter(i.SCISSOR_BOX),ae=i.getParameter(i.VIEWPORT),ne=new Kt().fromArray(N),ie=new Kt().fromArray(ae);function F(q,Ae,ce,we){let Ue=new Uint8Array(4),Fe=i.createTexture();i.bindTexture(q,Fe),i.texParameteri(q,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(q,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let ut=0;ut<ce;ut++)q===i.TEXTURE_3D||q===i.TEXTURE_2D_ARRAY?i.texImage3D(Ae,0,i.RGBA,1,1,we,0,i.RGBA,i.UNSIGNED_BYTE,Ue):i.texImage2D(Ae+ut,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Ue);return Fe}let re={};re[i.TEXTURE_2D]=F(i.TEXTURE_2D,i.TEXTURE_2D,1),re[i.TEXTURE_CUBE_MAP]=F(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),re[i.TEXTURE_2D_ARRAY]=F(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),re[i.TEXTURE_3D]=F(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),r.setClear(1),o.setClear(0),X(i.DEPTH_TEST),r.setFunc(Yr),se(!1),he(Cf),X(i.CULL_FACE),L(Is);function X(q){l[q]!==!0&&(i.enable(q),l[q]=!0)}function V(q){l[q]!==!1&&(i.disable(q),l[q]=!1)}function $(q,Ae){return h[q]!==Ae?(i.bindFramebuffer(q,Ae),h[q]=Ae,q===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=Ae),q===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=Ae),!0):!1}function xe(q,Ae){let ce=f,we=!1;if(q){ce=p.get(Ae),ce===void 0&&(ce=[],p.set(Ae,ce));let Ue=q.textures;if(ce.length!==Ue.length||ce[0]!==i.COLOR_ATTACHMENT0){for(let Fe=0,ut=Ue.length;Fe<ut;Fe++)ce[Fe]=i.COLOR_ATTACHMENT0+Fe;ce.length=Ue.length,we=!0}}else ce[0]!==i.BACK&&(ce[0]=i.BACK,we=!0);we&&i.drawBuffers(ce)}function Ce(q){return d!==q?(i.useProgram(q),d=q,!0):!1}let ve={[nr]:i.FUNC_ADD,[qg]:i.FUNC_SUBTRACT,[Yg]:i.FUNC_REVERSE_SUBTRACT};ve[Zg]=i.MIN,ve[$g]=i.MAX;let te={[Kg]:i.ZERO,[Jg]:i.ONE,[Qg]:i.SRC_COLOR,[Uh]:i.SRC_ALPHA,[s1]:i.SRC_ALPHA_SATURATE,[n1]:i.DST_COLOR,[e1]:i.DST_ALPHA,[jg]:i.ONE_MINUS_SRC_COLOR,[Hh]:i.ONE_MINUS_SRC_ALPHA,[i1]:i.ONE_MINUS_DST_COLOR,[t1]:i.ONE_MINUS_DST_ALPHA,[r1]:i.CONSTANT_COLOR,[o1]:i.ONE_MINUS_CONSTANT_COLOR,[a1]:i.CONSTANT_ALPHA,[c1]:i.ONE_MINUS_CONSTANT_ALPHA};function L(q,Ae,ce,we,Ue,Fe,ut,Pt,Ot,lt){if(q===Is){g===!0&&(V(i.BLEND),g=!1);return}if(g===!1&&(X(i.BLEND),g=!0),q!==Xg){if(q!==x||lt!==P){if((m!==nr||y!==nr)&&(i.blendEquation(i.FUNC_ADD),m=nr,y=nr),lt)switch(q){case Gr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Mc:i.blendFunc(i.ONE,i.ONE);break;case Pf:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case If:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",q);break}else switch(q){case Gr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Mc:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Pf:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case If:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",q);break}u=null,E=null,M=null,C=null,A.set(0,0,0),T=0,x=q,P=lt}return}Ue=Ue||Ae,Fe=Fe||ce,ut=ut||we,(Ae!==m||Ue!==y)&&(i.blendEquationSeparate(ve[Ae],ve[Ue]),m=Ae,y=Ue),(ce!==u||we!==E||Fe!==M||ut!==C)&&(i.blendFuncSeparate(te[ce],te[we],te[Fe],te[ut]),u=ce,E=we,M=Fe,C=ut),(Pt.equals(A)===!1||Ot!==T)&&(i.blendColor(Pt.r,Pt.g,Pt.b,Ot),A.copy(Pt),T=Ot),x=q,P=!1}function _e(q,Ae){q.side===Dt?V(i.CULL_FACE):X(i.CULL_FACE);let ce=q.side===yn;Ae&&(ce=!ce),se(ce),q.blending===Gr&&q.transparent===!1?L(Is):L(q.blending,q.blendEquation,q.blendSrc,q.blendDst,q.blendEquationAlpha,q.blendSrcAlpha,q.blendDstAlpha,q.blendColor,q.blendAlpha,q.premultipliedAlpha),r.setFunc(q.depthFunc),r.setTest(q.depthTest),r.setMask(q.depthWrite),s.setMask(q.colorWrite);let we=q.stencilWrite;o.setTest(we),we&&(o.setMask(q.stencilWriteMask),o.setFunc(q.stencilFunc,q.stencilRef,q.stencilFuncMask),o.setOp(q.stencilFail,q.stencilZFail,q.stencilZPass)),Me(q.polygonOffset,q.polygonOffsetFactor,q.polygonOffsetUnits),q.alphaToCoverage===!0?X(i.SAMPLE_ALPHA_TO_COVERAGE):V(i.SAMPLE_ALPHA_TO_COVERAGE)}function se(q){O!==q&&(q?i.frontFace(i.CW):i.frontFace(i.CCW),O=q)}function he(q){q!==Gg?(X(i.CULL_FACE),q!==v&&(q===Cf?i.cullFace(i.BACK):q===Wg?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):V(i.CULL_FACE),v=q}function de(q){q!==w&&(H&&i.lineWidth(q),w=q)}function Me(q,Ae,ce){q?(X(i.POLYGON_OFFSET_FILL),(W!==Ae||z!==ce)&&(i.polygonOffset(Ae,ce),W=Ae,z=ce)):V(i.POLYGON_OFFSET_FILL)}function Se(q){q?X(i.SCISSOR_TEST):V(i.SCISSOR_TEST)}function U(q){q===void 0&&(q=i.TEXTURE0+B-1),Q!==q&&(i.activeTexture(q),Q=q)}function b(q,Ae,ce){ce===void 0&&(Q===null?ce=i.TEXTURE0+B-1:ce=Q);let we=ge[ce];we===void 0&&(we={type:void 0,texture:void 0},ge[ce]=we),(we.type!==q||we.texture!==Ae)&&(Q!==ce&&(i.activeTexture(ce),Q=ce),i.bindTexture(q,Ae||re[q]),we.type=q,we.texture=Ae)}function j(){let q=ge[Q];q!==void 0&&q.type!==void 0&&(i.bindTexture(q.type,null),q.type=void 0,q.texture=void 0)}function pe(){try{i.compressedTexImage2D.apply(i,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Te(){try{i.compressedTexImage3D.apply(i,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Ee(){try{i.texSubImage2D.apply(i,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Xe(){try{i.texSubImage3D.apply(i,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Oe(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function ke(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function vt(){try{i.texStorage2D.apply(i,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function De(){try{i.texStorage3D.apply(i,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function J(){try{i.texImage2D.apply(i,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function ye(){try{i.texImage3D.apply(i,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Ie(q){ne.equals(q)===!1&&(i.scissor(q.x,q.y,q.z,q.w),ne.copy(q))}function Pe(q){ie.equals(q)===!1&&(i.viewport(q.x,q.y,q.z,q.w),ie.copy(q))}function Re(q,Ae){let ce=c.get(Ae);ce===void 0&&(ce=new WeakMap,c.set(Ae,ce));let we=ce.get(q);we===void 0&&(we=i.getUniformBlockIndex(Ae,q.name),ce.set(q,we))}function le(q,Ae){let we=c.get(Ae).get(q);a.get(Ae)!==we&&(i.uniformBlockBinding(Ae,we,q.__bindingPointIndex),a.set(Ae,we))}function Ve(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),l={},Q=null,ge={},h={},p=new WeakMap,f=[],d=null,g=!1,x=null,m=null,u=null,E=null,y=null,M=null,C=null,A=new dt(0,0,0),T=0,P=!1,O=null,v=null,w=null,W=null,z=null,ne.set(0,0,i.canvas.width,i.canvas.height),ie.set(0,0,i.canvas.width,i.canvas.height),s.reset(),r.reset(),o.reset()}return{buffers:{color:s,depth:r,stencil:o},enable:X,disable:V,bindFramebuffer:$,drawBuffers:xe,useProgram:Ce,setBlending:L,setMaterial:_e,setFlipSided:se,setCullFace:he,setLineWidth:de,setPolygonOffset:Me,setScissorTest:Se,activeTexture:U,bindTexture:b,unbindTexture:j,compressedTexImage2D:pe,compressedTexImage3D:Te,texImage2D:J,texImage3D:ye,updateUBOMapping:Re,uniformBlockBinding:le,texStorage2D:vt,texStorage3D:De,texSubImage2D:Ee,texSubImage3D:Xe,compressedTexSubImage2D:Oe,compressedTexSubImage3D:ke,scissor:Ie,viewport:Pe,reset:Ve}}function wp(i,e,t,n){let s=L2(n);switch(t){case Zp:return i*e;case Kp:return i*e;case Jp:return i*e*2;case rd:return i*e/s.components*s.byteLength;case od:return i*e/s.components*s.byteLength;case Qp:return i*e*2/s.components*s.byteLength;case ad:return i*e*2/s.components*s.byteLength;case $p:return i*e*3/s.components*s.byteLength;case hi:return i*e*4/s.components*s.byteLength;case cd:return i*e*4/s.components*s.byteLength;case mc:case gc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case xc:case yc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case qh:case Zh:return Math.max(i,16)*Math.max(e,8)/4;case Xh:case Yh:return Math.max(i,8)*Math.max(e,8)/2;case $h:case Kh:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Jh:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Qh:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case jh:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case eu:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case tu:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case nu:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case iu:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case su:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case ru:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case ou:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case au:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case cu:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case lu:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case hu:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case uu:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case vc:case du:case fu:return Math.ceil(i/4)*Math.ceil(e/4)*16;case jp:case pu:return Math.ceil(i/4)*Math.ceil(e/4)*8;case mu:case gu:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function L2(i){switch(i){case fs:case Xp:return{byteLength:1,components:1};case Qo:case qp:case da:return{byteLength:2,components:1};case id:case sd:return{byteLength:2,components:4};case ar:case nd:case $i:return{byteLength:4,components:1};case Yp:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function D2(i,e,t,n,s,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Ne,h=new WeakMap,p,f=new WeakMap,d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(U,b){return d?new OffscreenCanvas(U,b):jo("canvas")}function x(U,b,j){let pe=1,Te=Se(U);if((Te.width>j||Te.height>j)&&(pe=j/Math.max(Te.width,Te.height)),pe<1)if(typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&U instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&U instanceof ImageBitmap||typeof VideoFrame<"u"&&U instanceof VideoFrame){let Ee=Math.floor(pe*Te.width),Xe=Math.floor(pe*Te.height);p===void 0&&(p=g(Ee,Xe));let Oe=b?g(Ee,Xe):p;return Oe.width=Ee,Oe.height=Xe,Oe.getContext("2d").drawImage(U,0,0,Ee,Xe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Te.width+"x"+Te.height+") to ("+Ee+"x"+Xe+")."),Oe}else return"data"in U&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Te.width+"x"+Te.height+")."),U;return U}function m(U){return U.generateMipmaps&&U.minFilter!==ti&&U.minFilter!==mn}function u(U){i.generateMipmap(U)}function E(U,b,j,pe,Te=!1){if(U!==null){if(i[U]!==void 0)return i[U];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+U+"'")}let Ee=b;if(b===i.RED&&(j===i.FLOAT&&(Ee=i.R32F),j===i.HALF_FLOAT&&(Ee=i.R16F),j===i.UNSIGNED_BYTE&&(Ee=i.R8)),b===i.RED_INTEGER&&(j===i.UNSIGNED_BYTE&&(Ee=i.R8UI),j===i.UNSIGNED_SHORT&&(Ee=i.R16UI),j===i.UNSIGNED_INT&&(Ee=i.R32UI),j===i.BYTE&&(Ee=i.R8I),j===i.SHORT&&(Ee=i.R16I),j===i.INT&&(Ee=i.R32I)),b===i.RG&&(j===i.FLOAT&&(Ee=i.RG32F),j===i.HALF_FLOAT&&(Ee=i.RG16F),j===i.UNSIGNED_BYTE&&(Ee=i.RG8)),b===i.RG_INTEGER&&(j===i.UNSIGNED_BYTE&&(Ee=i.RG8UI),j===i.UNSIGNED_SHORT&&(Ee=i.RG16UI),j===i.UNSIGNED_INT&&(Ee=i.RG32UI),j===i.BYTE&&(Ee=i.RG8I),j===i.SHORT&&(Ee=i.RG16I),j===i.INT&&(Ee=i.RG32I)),b===i.RGB_INTEGER&&(j===i.UNSIGNED_BYTE&&(Ee=i.RGB8UI),j===i.UNSIGNED_SHORT&&(Ee=i.RGB16UI),j===i.UNSIGNED_INT&&(Ee=i.RGB32UI),j===i.BYTE&&(Ee=i.RGB8I),j===i.SHORT&&(Ee=i.RGB16I),j===i.INT&&(Ee=i.RGB32I)),b===i.RGBA_INTEGER&&(j===i.UNSIGNED_BYTE&&(Ee=i.RGBA8UI),j===i.UNSIGNED_SHORT&&(Ee=i.RGBA16UI),j===i.UNSIGNED_INT&&(Ee=i.RGBA32UI),j===i.BYTE&&(Ee=i.RGBA8I),j===i.SHORT&&(Ee=i.RGBA16I),j===i.INT&&(Ee=i.RGBA32I)),b===i.RGB&&j===i.UNSIGNED_INT_5_9_9_9_REV&&(Ee=i.RGB9_E5),b===i.RGBA){let Xe=Te?Sc:Xt.getTransfer(pe);j===i.FLOAT&&(Ee=i.RGBA32F),j===i.HALF_FLOAT&&(Ee=i.RGBA16F),j===i.UNSIGNED_BYTE&&(Ee=Xe===rn?i.SRGB8_ALPHA8:i.RGBA8),j===i.UNSIGNED_SHORT_4_4_4_4&&(Ee=i.RGBA4),j===i.UNSIGNED_SHORT_5_5_5_1&&(Ee=i.RGB5_A1)}return(Ee===i.R16F||Ee===i.R32F||Ee===i.RG16F||Ee===i.RG32F||Ee===i.RGBA16F||Ee===i.RGBA32F)&&e.get("EXT_color_buffer_float"),Ee}function y(U,b){let j;return U?b===null||b===ar||b===Kr?j=i.DEPTH24_STENCIL8:b===$i?j=i.DEPTH32F_STENCIL8:b===Qo&&(j=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===ar||b===Kr?j=i.DEPTH_COMPONENT24:b===$i?j=i.DEPTH_COMPONENT32F:b===Qo&&(j=i.DEPTH_COMPONENT16),j}function M(U,b){return m(U)===!0||U.isFramebufferTexture&&U.minFilter!==ti&&U.minFilter!==mn?Math.log2(Math.max(b.width,b.height))+1:U.mipmaps!==void 0&&U.mipmaps.length>0?U.mipmaps.length:U.isCompressedTexture&&Array.isArray(U.image)?b.mipmaps.length:1}function C(U){let b=U.target;b.removeEventListener("dispose",C),T(b),b.isVideoTexture&&h.delete(b)}function A(U){let b=U.target;b.removeEventListener("dispose",A),O(b)}function T(U){let b=n.get(U);if(b.__webglInit===void 0)return;let j=U.source,pe=f.get(j);if(pe){let Te=pe[b.__cacheKey];Te.usedTimes--,Te.usedTimes===0&&P(U),Object.keys(pe).length===0&&f.delete(j)}n.remove(U)}function P(U){let b=n.get(U);i.deleteTexture(b.__webglTexture);let j=U.source,pe=f.get(j);delete pe[b.__cacheKey],o.memory.textures--}function O(U){let b=n.get(U);if(U.depthTexture&&U.depthTexture.dispose(),U.isWebGLCubeRenderTarget)for(let pe=0;pe<6;pe++){if(Array.isArray(b.__webglFramebuffer[pe]))for(let Te=0;Te<b.__webglFramebuffer[pe].length;Te++)i.deleteFramebuffer(b.__webglFramebuffer[pe][Te]);else i.deleteFramebuffer(b.__webglFramebuffer[pe]);b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer[pe])}else{if(Array.isArray(b.__webglFramebuffer))for(let pe=0;pe<b.__webglFramebuffer.length;pe++)i.deleteFramebuffer(b.__webglFramebuffer[pe]);else i.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&i.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let pe=0;pe<b.__webglColorRenderbuffer.length;pe++)b.__webglColorRenderbuffer[pe]&&i.deleteRenderbuffer(b.__webglColorRenderbuffer[pe]);b.__webglDepthRenderbuffer&&i.deleteRenderbuffer(b.__webglDepthRenderbuffer)}let j=U.textures;for(let pe=0,Te=j.length;pe<Te;pe++){let Ee=n.get(j[pe]);Ee.__webglTexture&&(i.deleteTexture(Ee.__webglTexture),o.memory.textures--),n.remove(j[pe])}n.remove(U)}let v=0;function w(){v=0}function W(){let U=v;return U>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+U+" texture units while this GPU supports only "+s.maxTextures),v+=1,U}function z(U){let b=[];return b.push(U.wrapS),b.push(U.wrapT),b.push(U.wrapR||0),b.push(U.magFilter),b.push(U.minFilter),b.push(U.anisotropy),b.push(U.internalFormat),b.push(U.format),b.push(U.type),b.push(U.generateMipmaps),b.push(U.premultiplyAlpha),b.push(U.flipY),b.push(U.unpackAlignment),b.push(U.colorSpace),b.join()}function B(U,b){let j=n.get(U);if(U.isVideoTexture&&de(U),U.isRenderTargetTexture===!1&&U.version>0&&j.__version!==U.version){let pe=U.image;if(pe===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(pe.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ie(j,U,b);return}}t.bindTexture(i.TEXTURE_2D,j.__webglTexture,i.TEXTURE0+b)}function H(U,b){let j=n.get(U);if(U.version>0&&j.__version!==U.version){ie(j,U,b);return}t.bindTexture(i.TEXTURE_2D_ARRAY,j.__webglTexture,i.TEXTURE0+b)}function Z(U,b){let j=n.get(U);if(U.version>0&&j.__version!==U.version){ie(j,U,b);return}t.bindTexture(i.TEXTURE_3D,j.__webglTexture,i.TEXTURE0+b)}function me(U,b){let j=n.get(U);if(U.version>0&&j.__version!==U.version){F(j,U,b);return}t.bindTexture(i.TEXTURE_CUBE_MAP,j.__webglTexture,i.TEXTURE0+b)}let Q={[or]:i.REPEAT,[rr]:i.CLAMP_TO_EDGE,[Wh]:i.MIRRORED_REPEAT},ge={[ti]:i.NEAREST,[x1]:i.NEAREST_MIPMAP_NEAREST,[ka]:i.NEAREST_MIPMAP_LINEAR,[mn]:i.LINEAR,[jl]:i.LINEAR_MIPMAP_NEAREST,[Oi]:i.LINEAR_MIPMAP_LINEAR},N={[_1]:i.NEVER,[T1]:i.ALWAYS,[M1]:i.LESS,[t0]:i.LEQUAL,[E1]:i.EQUAL,[b1]:i.GEQUAL,[S1]:i.GREATER,[w1]:i.NOTEQUAL};function ae(U,b){if(b.type===$i&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===mn||b.magFilter===jl||b.magFilter===ka||b.magFilter===Oi||b.minFilter===mn||b.minFilter===jl||b.minFilter===ka||b.minFilter===Oi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(U,i.TEXTURE_WRAP_S,Q[b.wrapS]),i.texParameteri(U,i.TEXTURE_WRAP_T,Q[b.wrapT]),(U===i.TEXTURE_3D||U===i.TEXTURE_2D_ARRAY)&&i.texParameteri(U,i.TEXTURE_WRAP_R,Q[b.wrapR]),i.texParameteri(U,i.TEXTURE_MAG_FILTER,ge[b.magFilter]),i.texParameteri(U,i.TEXTURE_MIN_FILTER,ge[b.minFilter]),b.compareFunction&&(i.texParameteri(U,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(U,i.TEXTURE_COMPARE_FUNC,N[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===ti||b.minFilter!==ka&&b.minFilter!==Oi||b.type===$i&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||n.get(b).__currentAnisotropy){let j=e.get("EXT_texture_filter_anisotropic");i.texParameterf(U,j.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,s.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy}}}function ne(U,b){let j=!1;U.__webglInit===void 0&&(U.__webglInit=!0,b.addEventListener("dispose",C));let pe=b.source,Te=f.get(pe);Te===void 0&&(Te={},f.set(pe,Te));let Ee=z(b);if(Ee!==U.__cacheKey){Te[Ee]===void 0&&(Te[Ee]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,j=!0),Te[Ee].usedTimes++;let Xe=Te[U.__cacheKey];Xe!==void 0&&(Te[U.__cacheKey].usedTimes--,Xe.usedTimes===0&&P(b)),U.__cacheKey=Ee,U.__webglTexture=Te[Ee].texture}return j}function ie(U,b,j){let pe=i.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(pe=i.TEXTURE_2D_ARRAY),b.isData3DTexture&&(pe=i.TEXTURE_3D);let Te=ne(U,b),Ee=b.source;t.bindTexture(pe,U.__webglTexture,i.TEXTURE0+j);let Xe=n.get(Ee);if(Ee.version!==Xe.__version||Te===!0){t.activeTexture(i.TEXTURE0+j);let Oe=Xt.getPrimaries(Xt.workingColorSpace),ke=b.colorSpace===Ps?null:Xt.getPrimaries(b.colorSpace),vt=b.colorSpace===Ps||Oe===ke?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,vt);let De=x(b.image,!1,s.maxTextureSize);De=Me(b,De);let J=r.convert(b.format,b.colorSpace),ye=r.convert(b.type),Ie=E(b.internalFormat,J,ye,b.colorSpace,b.isVideoTexture);ae(pe,b);let Pe,Re=b.mipmaps,le=b.isVideoTexture!==!0,Ve=Xe.__version===void 0||Te===!0,q=Ee.dataReady,Ae=M(b,De);if(b.isDepthTexture)Ie=y(b.format===Jr,b.type),Ve&&(le?t.texStorage2D(i.TEXTURE_2D,1,Ie,De.width,De.height):t.texImage2D(i.TEXTURE_2D,0,Ie,De.width,De.height,0,J,ye,null));else if(b.isDataTexture)if(Re.length>0){le&&Ve&&t.texStorage2D(i.TEXTURE_2D,Ae,Ie,Re[0].width,Re[0].height);for(let ce=0,we=Re.length;ce<we;ce++)Pe=Re[ce],le?q&&t.texSubImage2D(i.TEXTURE_2D,ce,0,0,Pe.width,Pe.height,J,ye,Pe.data):t.texImage2D(i.TEXTURE_2D,ce,Ie,Pe.width,Pe.height,0,J,ye,Pe.data);b.generateMipmaps=!1}else le?(Ve&&t.texStorage2D(i.TEXTURE_2D,Ae,Ie,De.width,De.height),q&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,De.width,De.height,J,ye,De.data)):t.texImage2D(i.TEXTURE_2D,0,Ie,De.width,De.height,0,J,ye,De.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){le&&Ve&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ae,Ie,Re[0].width,Re[0].height,De.depth);for(let ce=0,we=Re.length;ce<we;ce++)if(Pe=Re[ce],b.format!==hi)if(J!==null)if(le){if(q)if(b.layerUpdates.size>0){let Ue=wp(Pe.width,Pe.height,b.format,b.type);for(let Fe of b.layerUpdates){let ut=Pe.data.subarray(Fe*Ue/Pe.data.BYTES_PER_ELEMENT,(Fe+1)*Ue/Pe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ce,0,0,Fe,Pe.width,Pe.height,1,J,ut,0,0)}b.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ce,0,0,0,Pe.width,Pe.height,De.depth,J,Pe.data,0,0)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ce,Ie,Pe.width,Pe.height,De.depth,0,Pe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else le?q&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,ce,0,0,0,Pe.width,Pe.height,De.depth,J,ye,Pe.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ce,Ie,Pe.width,Pe.height,De.depth,0,J,ye,Pe.data)}else{le&&Ve&&t.texStorage2D(i.TEXTURE_2D,Ae,Ie,Re[0].width,Re[0].height);for(let ce=0,we=Re.length;ce<we;ce++)Pe=Re[ce],b.format!==hi?J!==null?le?q&&t.compressedTexSubImage2D(i.TEXTURE_2D,ce,0,0,Pe.width,Pe.height,J,Pe.data):t.compressedTexImage2D(i.TEXTURE_2D,ce,Ie,Pe.width,Pe.height,0,Pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):le?q&&t.texSubImage2D(i.TEXTURE_2D,ce,0,0,Pe.width,Pe.height,J,ye,Pe.data):t.texImage2D(i.TEXTURE_2D,ce,Ie,Pe.width,Pe.height,0,J,ye,Pe.data)}else if(b.isDataArrayTexture)if(le){if(Ve&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ae,Ie,De.width,De.height,De.depth),q)if(b.layerUpdates.size>0){let ce=wp(De.width,De.height,b.format,b.type);for(let we of b.layerUpdates){let Ue=De.data.subarray(we*ce/De.data.BYTES_PER_ELEMENT,(we+1)*ce/De.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,we,De.width,De.height,1,J,ye,Ue)}b.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,De.width,De.height,De.depth,J,ye,De.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Ie,De.width,De.height,De.depth,0,J,ye,De.data);else if(b.isData3DTexture)le?(Ve&&t.texStorage3D(i.TEXTURE_3D,Ae,Ie,De.width,De.height,De.depth),q&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,De.width,De.height,De.depth,J,ye,De.data)):t.texImage3D(i.TEXTURE_3D,0,Ie,De.width,De.height,De.depth,0,J,ye,De.data);else if(b.isFramebufferTexture){if(Ve)if(le)t.texStorage2D(i.TEXTURE_2D,Ae,Ie,De.width,De.height);else{let ce=De.width,we=De.height;for(let Ue=0;Ue<Ae;Ue++)t.texImage2D(i.TEXTURE_2D,Ue,Ie,ce,we,0,J,ye,null),ce>>=1,we>>=1}}else if(Re.length>0){if(le&&Ve){let ce=Se(Re[0]);t.texStorage2D(i.TEXTURE_2D,Ae,Ie,ce.width,ce.height)}for(let ce=0,we=Re.length;ce<we;ce++)Pe=Re[ce],le?q&&t.texSubImage2D(i.TEXTURE_2D,ce,0,0,J,ye,Pe):t.texImage2D(i.TEXTURE_2D,ce,Ie,J,ye,Pe);b.generateMipmaps=!1}else if(le){if(Ve){let ce=Se(De);t.texStorage2D(i.TEXTURE_2D,Ae,Ie,ce.width,ce.height)}q&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,J,ye,De)}else t.texImage2D(i.TEXTURE_2D,0,Ie,J,ye,De);m(b)&&u(pe),Xe.__version=Ee.version,b.onUpdate&&b.onUpdate(b)}U.__version=b.version}function F(U,b,j){if(b.image.length!==6)return;let pe=ne(U,b),Te=b.source;t.bindTexture(i.TEXTURE_CUBE_MAP,U.__webglTexture,i.TEXTURE0+j);let Ee=n.get(Te);if(Te.version!==Ee.__version||pe===!0){t.activeTexture(i.TEXTURE0+j);let Xe=Xt.getPrimaries(Xt.workingColorSpace),Oe=b.colorSpace===Ps?null:Xt.getPrimaries(b.colorSpace),ke=b.colorSpace===Ps||Xe===Oe?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ke);let vt=b.isCompressedTexture||b.image[0].isCompressedTexture,De=b.image[0]&&b.image[0].isDataTexture,J=[];for(let we=0;we<6;we++)!vt&&!De?J[we]=x(b.image[we],!0,s.maxCubemapSize):J[we]=De?b.image[we].image:b.image[we],J[we]=Me(b,J[we]);let ye=J[0],Ie=r.convert(b.format,b.colorSpace),Pe=r.convert(b.type),Re=E(b.internalFormat,Ie,Pe,b.colorSpace),le=b.isVideoTexture!==!0,Ve=Ee.__version===void 0||pe===!0,q=Te.dataReady,Ae=M(b,ye);ae(i.TEXTURE_CUBE_MAP,b);let ce;if(vt){le&&Ve&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Ae,Re,ye.width,ye.height);for(let we=0;we<6;we++){ce=J[we].mipmaps;for(let Ue=0;Ue<ce.length;Ue++){let Fe=ce[Ue];b.format!==hi?Ie!==null?le?q&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+we,Ue,0,0,Fe.width,Fe.height,Ie,Fe.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+we,Ue,Re,Fe.width,Fe.height,0,Fe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):le?q&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+we,Ue,0,0,Fe.width,Fe.height,Ie,Pe,Fe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+we,Ue,Re,Fe.width,Fe.height,0,Ie,Pe,Fe.data)}}}else{if(ce=b.mipmaps,le&&Ve){ce.length>0&&Ae++;let we=Se(J[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Ae,Re,we.width,we.height)}for(let we=0;we<6;we++)if(De){le?q&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+we,0,0,0,J[we].width,J[we].height,Ie,Pe,J[we].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+we,0,Re,J[we].width,J[we].height,0,Ie,Pe,J[we].data);for(let Ue=0;Ue<ce.length;Ue++){let ut=ce[Ue].image[we].image;le?q&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+we,Ue+1,0,0,ut.width,ut.height,Ie,Pe,ut.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+we,Ue+1,Re,ut.width,ut.height,0,Ie,Pe,ut.data)}}else{le?q&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+we,0,0,0,Ie,Pe,J[we]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+we,0,Re,Ie,Pe,J[we]);for(let Ue=0;Ue<ce.length;Ue++){let Fe=ce[Ue];le?q&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+we,Ue+1,0,0,Ie,Pe,Fe.image[we]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+we,Ue+1,Re,Ie,Pe,Fe.image[we])}}}m(b)&&u(i.TEXTURE_CUBE_MAP),Ee.__version=Te.version,b.onUpdate&&b.onUpdate(b)}U.__version=b.version}function re(U,b,j,pe,Te,Ee){let Xe=r.convert(j.format,j.colorSpace),Oe=r.convert(j.type),ke=E(j.internalFormat,Xe,Oe,j.colorSpace);if(!n.get(b).__hasExternalTextures){let De=Math.max(1,b.width>>Ee),J=Math.max(1,b.height>>Ee);Te===i.TEXTURE_3D||Te===i.TEXTURE_2D_ARRAY?t.texImage3D(Te,Ee,ke,De,J,b.depth,0,Xe,Oe,null):t.texImage2D(Te,Ee,ke,De,J,0,Xe,Oe,null)}t.bindFramebuffer(i.FRAMEBUFFER,U),he(b)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,pe,Te,n.get(j).__webglTexture,0,se(b)):(Te===i.TEXTURE_2D||Te>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Te<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,pe,Te,n.get(j).__webglTexture,Ee),t.bindFramebuffer(i.FRAMEBUFFER,null)}function X(U,b,j){if(i.bindRenderbuffer(i.RENDERBUFFER,U),b.depthBuffer){let pe=b.depthTexture,Te=pe&&pe.isDepthTexture?pe.type:null,Ee=y(b.stencilBuffer,Te),Xe=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Oe=se(b);he(b)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Oe,Ee,b.width,b.height):j?i.renderbufferStorageMultisample(i.RENDERBUFFER,Oe,Ee,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,Ee,b.width,b.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Xe,i.RENDERBUFFER,U)}else{let pe=b.textures;for(let Te=0;Te<pe.length;Te++){let Ee=pe[Te],Xe=r.convert(Ee.format,Ee.colorSpace),Oe=r.convert(Ee.type),ke=E(Ee.internalFormat,Xe,Oe,Ee.colorSpace),vt=se(b);j&&he(b)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,vt,ke,b.width,b.height):he(b)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,vt,ke,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,ke,b.width,b.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function V(U,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,U),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(b.depthTexture).__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),B(b.depthTexture,0);let pe=n.get(b.depthTexture).__webglTexture,Te=se(b);if(b.depthTexture.format===Wr)he(b)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,pe,0,Te):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,pe,0);else if(b.depthTexture.format===Jr)he(b)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,pe,0,Te):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,pe,0);else throw new Error("Unknown depthTexture format")}function $(U){let b=n.get(U),j=U.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==U.depthTexture){let pe=U.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),pe){let Te=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,pe.removeEventListener("dispose",Te)};pe.addEventListener("dispose",Te),b.__depthDisposeCallback=Te}b.__boundDepthTexture=pe}if(U.depthTexture&&!b.__autoAllocateDepthBuffer){if(j)throw new Error("target.depthTexture not supported in Cube render targets");V(b.__webglFramebuffer,U)}else if(j){b.__webglDepthbuffer=[];for(let pe=0;pe<6;pe++)if(t.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer[pe]),b.__webglDepthbuffer[pe]===void 0)b.__webglDepthbuffer[pe]=i.createRenderbuffer(),X(b.__webglDepthbuffer[pe],U,!1);else{let Te=U.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ee=b.__webglDepthbuffer[pe];i.bindRenderbuffer(i.RENDERBUFFER,Ee),i.framebufferRenderbuffer(i.FRAMEBUFFER,Te,i.RENDERBUFFER,Ee)}}else if(t.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=i.createRenderbuffer(),X(b.__webglDepthbuffer,U,!1);else{let pe=U.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Te=b.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,Te),i.framebufferRenderbuffer(i.FRAMEBUFFER,pe,i.RENDERBUFFER,Te)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function xe(U,b,j){let pe=n.get(U);b!==void 0&&re(pe.__webglFramebuffer,U,U.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),j!==void 0&&$(U)}function Ce(U){let b=U.texture,j=n.get(U),pe=n.get(b);U.addEventListener("dispose",A);let Te=U.textures,Ee=U.isWebGLCubeRenderTarget===!0,Xe=Te.length>1;if(Xe||(pe.__webglTexture===void 0&&(pe.__webglTexture=i.createTexture()),pe.__version=b.version,o.memory.textures++),Ee){j.__webglFramebuffer=[];for(let Oe=0;Oe<6;Oe++)if(b.mipmaps&&b.mipmaps.length>0){j.__webglFramebuffer[Oe]=[];for(let ke=0;ke<b.mipmaps.length;ke++)j.__webglFramebuffer[Oe][ke]=i.createFramebuffer()}else j.__webglFramebuffer[Oe]=i.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){j.__webglFramebuffer=[];for(let Oe=0;Oe<b.mipmaps.length;Oe++)j.__webglFramebuffer[Oe]=i.createFramebuffer()}else j.__webglFramebuffer=i.createFramebuffer();if(Xe)for(let Oe=0,ke=Te.length;Oe<ke;Oe++){let vt=n.get(Te[Oe]);vt.__webglTexture===void 0&&(vt.__webglTexture=i.createTexture(),o.memory.textures++)}if(U.samples>0&&he(U)===!1){j.__webglMultisampledFramebuffer=i.createFramebuffer(),j.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,j.__webglMultisampledFramebuffer);for(let Oe=0;Oe<Te.length;Oe++){let ke=Te[Oe];j.__webglColorRenderbuffer[Oe]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,j.__webglColorRenderbuffer[Oe]);let vt=r.convert(ke.format,ke.colorSpace),De=r.convert(ke.type),J=E(ke.internalFormat,vt,De,ke.colorSpace,U.isXRRenderTarget===!0),ye=se(U);i.renderbufferStorageMultisample(i.RENDERBUFFER,ye,J,U.width,U.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Oe,i.RENDERBUFFER,j.__webglColorRenderbuffer[Oe])}i.bindRenderbuffer(i.RENDERBUFFER,null),U.depthBuffer&&(j.__webglDepthRenderbuffer=i.createRenderbuffer(),X(j.__webglDepthRenderbuffer,U,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Ee){t.bindTexture(i.TEXTURE_CUBE_MAP,pe.__webglTexture),ae(i.TEXTURE_CUBE_MAP,b);for(let Oe=0;Oe<6;Oe++)if(b.mipmaps&&b.mipmaps.length>0)for(let ke=0;ke<b.mipmaps.length;ke++)re(j.__webglFramebuffer[Oe][ke],U,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Oe,ke);else re(j.__webglFramebuffer[Oe],U,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Oe,0);m(b)&&u(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Xe){for(let Oe=0,ke=Te.length;Oe<ke;Oe++){let vt=Te[Oe],De=n.get(vt);t.bindTexture(i.TEXTURE_2D,De.__webglTexture),ae(i.TEXTURE_2D,vt),re(j.__webglFramebuffer,U,vt,i.COLOR_ATTACHMENT0+Oe,i.TEXTURE_2D,0),m(vt)&&u(i.TEXTURE_2D)}t.unbindTexture()}else{let Oe=i.TEXTURE_2D;if((U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(Oe=U.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Oe,pe.__webglTexture),ae(Oe,b),b.mipmaps&&b.mipmaps.length>0)for(let ke=0;ke<b.mipmaps.length;ke++)re(j.__webglFramebuffer[ke],U,b,i.COLOR_ATTACHMENT0,Oe,ke);else re(j.__webglFramebuffer,U,b,i.COLOR_ATTACHMENT0,Oe,0);m(b)&&u(Oe),t.unbindTexture()}U.depthBuffer&&$(U)}function ve(U){let b=U.textures;for(let j=0,pe=b.length;j<pe;j++){let Te=b[j];if(m(Te)){let Ee=U.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,Xe=n.get(Te).__webglTexture;t.bindTexture(Ee,Xe),u(Ee),t.unbindTexture()}}}let te=[],L=[];function _e(U){if(U.samples>0){if(he(U)===!1){let b=U.textures,j=U.width,pe=U.height,Te=i.COLOR_BUFFER_BIT,Ee=U.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Xe=n.get(U),Oe=b.length>1;if(Oe)for(let ke=0;ke<b.length;ke++)t.bindFramebuffer(i.FRAMEBUFFER,Xe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ke,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Xe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ke,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Xe.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Xe.__webglFramebuffer);for(let ke=0;ke<b.length;ke++){if(U.resolveDepthBuffer&&(U.depthBuffer&&(Te|=i.DEPTH_BUFFER_BIT),U.stencilBuffer&&U.resolveStencilBuffer&&(Te|=i.STENCIL_BUFFER_BIT)),Oe){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Xe.__webglColorRenderbuffer[ke]);let vt=n.get(b[ke]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,vt,0)}i.blitFramebuffer(0,0,j,pe,0,0,j,pe,Te,i.NEAREST),c===!0&&(te.length=0,L.length=0,te.push(i.COLOR_ATTACHMENT0+ke),U.depthBuffer&&U.resolveDepthBuffer===!1&&(te.push(Ee),L.push(Ee),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,L)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,te))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Oe)for(let ke=0;ke<b.length;ke++){t.bindFramebuffer(i.FRAMEBUFFER,Xe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ke,i.RENDERBUFFER,Xe.__webglColorRenderbuffer[ke]);let vt=n.get(b[ke]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Xe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ke,i.TEXTURE_2D,vt,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Xe.__webglMultisampledFramebuffer)}else if(U.depthBuffer&&U.resolveDepthBuffer===!1&&c){let b=U.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[b])}}}function se(U){return Math.min(s.maxSamples,U.samples)}function he(U){let b=n.get(U);return U.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function de(U){let b=o.render.frame;h.get(U)!==b&&(h.set(U,b),U.update())}function Me(U,b){let j=U.colorSpace,pe=U.format,Te=U.type;return U.isCompressedTexture===!0||U.isVideoTexture===!0||j!==zs&&j!==Ps&&(Xt.getTransfer(j)===rn?(pe!==hi||Te!==fs)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",j)),b}function Se(U){return typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement?(l.width=U.naturalWidth||U.width,l.height=U.naturalHeight||U.height):typeof VideoFrame<"u"&&U instanceof VideoFrame?(l.width=U.displayWidth,l.height=U.displayHeight):(l.width=U.width,l.height=U.height),l}this.allocateTextureUnit=W,this.resetTextureUnits=w,this.setTexture2D=B,this.setTexture2DArray=H,this.setTexture3D=Z,this.setTextureCube=me,this.rebindTextures=xe,this.setupRenderTarget=Ce,this.updateRenderTargetMipmap=ve,this.updateMultisampleRenderTarget=_e,this.setupDepthRenderbuffer=$,this.setupFrameBufferTexture=re,this.useMultisampledRTT=he}function U2(i,e){function t(n,s=Ps){let r,o=Xt.getTransfer(s);if(n===fs)return i.UNSIGNED_BYTE;if(n===id)return i.UNSIGNED_SHORT_4_4_4_4;if(n===sd)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Yp)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Xp)return i.BYTE;if(n===qp)return i.SHORT;if(n===Qo)return i.UNSIGNED_SHORT;if(n===nd)return i.INT;if(n===ar)return i.UNSIGNED_INT;if(n===$i)return i.FLOAT;if(n===da)return i.HALF_FLOAT;if(n===Zp)return i.ALPHA;if(n===$p)return i.RGB;if(n===hi)return i.RGBA;if(n===Kp)return i.LUMINANCE;if(n===Jp)return i.LUMINANCE_ALPHA;if(n===Wr)return i.DEPTH_COMPONENT;if(n===Jr)return i.DEPTH_STENCIL;if(n===rd)return i.RED;if(n===od)return i.RED_INTEGER;if(n===Qp)return i.RG;if(n===ad)return i.RG_INTEGER;if(n===cd)return i.RGBA_INTEGER;if(n===mc||n===gc||n===xc||n===yc)if(o===rn)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===mc)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===gc)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===xc)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===yc)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===mc)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===gc)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===xc)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===yc)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Xh||n===qh||n===Yh||n===Zh)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Xh)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===qh)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Yh)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Zh)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===$h||n===Kh||n===Jh)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===$h||n===Kh)return o===rn?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Jh)return o===rn?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Qh||n===jh||n===eu||n===tu||n===nu||n===iu||n===su||n===ru||n===ou||n===au||n===cu||n===lu||n===hu||n===uu)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Qh)return o===rn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===jh)return o===rn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===eu)return o===rn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===tu)return o===rn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===nu)return o===rn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===iu)return o===rn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===su)return o===rn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ru)return o===rn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ou)return o===rn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===au)return o===rn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===cu)return o===rn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===lu)return o===rn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===hu)return o===rn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===uu)return o===rn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===vc||n===du||n===fu)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===vc)return o===rn?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===du)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===fu)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===jp||n===pu||n===mu||n===gu)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===vc)return r.COMPRESSED_RED_RGTC1_EXT;if(n===pu)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===mu)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===gu)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Kr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var Pu=class extends Hn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},be=class extends At{constructor(){super(),this.isGroup=!0,this.type="Group"}},H2={type:"move"},Zo=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new be,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new be,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new S,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new S),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new be,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new S,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new S),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(let x of e.hand.values()){let m=t.getJointPose(x,n),u=this._getHandJoint(l,x);m!==null&&(u.matrix.fromArray(m.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=m.radius),u.visible=m!==null}let h=l.joints["index-finger-tip"],p=l.joints["thumb-tip"],f=h.position.distanceTo(p.position),d=.02,g=.005;l.inputState.pinching&&f>d+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&f<=d-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(H2)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new be;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},N2=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,F2=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Iu=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){let s=new $n,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Ji({vertexShader:N2,fragmentShader:F2,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ht(new Et(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Lu=class extends Us{constructor(e,t){super();let n=this,s=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,p=null,f=null,d=null,g=null,x=new Iu,m=t.getContextAttributes(),u=null,E=null,y=[],M=[],C=new Ne,A=null,T=new Hn;T.layers.enable(1),T.viewport=new Kt;let P=new Hn;P.layers.enable(2),P.viewport=new Kt;let O=[T,P],v=new Pu;v.layers.enable(1),v.layers.enable(2);let w=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(F){let re=y[F];return re===void 0&&(re=new Zo,y[F]=re),re.getTargetRaySpace()},this.getControllerGrip=function(F){let re=y[F];return re===void 0&&(re=new Zo,y[F]=re),re.getGripSpace()},this.getHand=function(F){let re=y[F];return re===void 0&&(re=new Zo,y[F]=re),re.getHandSpace()};function z(F){let re=M.indexOf(F.inputSource);if(re===-1)return;let X=y[re];X!==void 0&&(X.update(F.inputSource,F.frame,l||o),X.dispatchEvent({type:F.type,data:F.inputSource}))}function B(){s.removeEventListener("select",z),s.removeEventListener("selectstart",z),s.removeEventListener("selectend",z),s.removeEventListener("squeeze",z),s.removeEventListener("squeezestart",z),s.removeEventListener("squeezeend",z),s.removeEventListener("end",B),s.removeEventListener("inputsourceschange",H);for(let F=0;F<y.length;F++){let re=M[F];re!==null&&(M[F]=null,y[F].disconnect(re))}w=null,W=null,x.reset(),e.setRenderTarget(u),d=null,f=null,p=null,s=null,E=null,ie.stop(),n.isPresenting=!1,e.setPixelRatio(A),e.setSize(C.width,C.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(F){r=F,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(F){a=F,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(F){l=F},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return p},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(F){if(s=F,s!==null){if(u=e.getRenderTarget(),s.addEventListener("select",z),s.addEventListener("selectstart",z),s.addEventListener("selectend",z),s.addEventListener("squeeze",z),s.addEventListener("squeezestart",z),s.addEventListener("squeezeend",z),s.addEventListener("end",B),s.addEventListener("inputsourceschange",H),m.xrCompatible!==!0&&await t.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(C),s.renderState.layers===void 0){let re={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,t,re),s.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),E=new ps(d.framebufferWidth,d.framebufferHeight,{format:hi,type:fs,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let re=null,X=null,V=null;m.depth&&(V=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,re=m.stencil?Jr:Wr,X=m.stencil?Kr:ar);let $={colorFormat:t.RGBA8,depthFormat:V,scaleFactor:r};p=new XRWebGLBinding(s,t),f=p.createProjectionLayer($),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),E=new ps(f.textureWidth,f.textureHeight,{format:hi,type:fs,depthTexture:new Uc(f.textureWidth,f.textureHeight,X,void 0,void 0,void 0,void 0,void 0,void 0,re),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),ie.setContext(s),ie.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function H(F){for(let re=0;re<F.removed.length;re++){let X=F.removed[re],V=M.indexOf(X);V>=0&&(M[V]=null,y[V].disconnect(X))}for(let re=0;re<F.added.length;re++){let X=F.added[re],V=M.indexOf(X);if(V===-1){for(let xe=0;xe<y.length;xe++)if(xe>=M.length){M.push(X),V=xe;break}else if(M[xe]===null){M[xe]=X,V=xe;break}if(V===-1)break}let $=y[V];$&&$.connect(X)}}let Z=new S,me=new S;function Q(F,re,X){Z.setFromMatrixPosition(re.matrixWorld),me.setFromMatrixPosition(X.matrixWorld);let V=Z.distanceTo(me),$=re.projectionMatrix.elements,xe=X.projectionMatrix.elements,Ce=$[14]/($[10]-1),ve=$[14]/($[10]+1),te=($[9]+1)/$[5],L=($[9]-1)/$[5],_e=($[8]-1)/$[0],se=(xe[8]+1)/xe[0],he=Ce*_e,de=Ce*se,Me=V/(-_e+se),Se=Me*-_e;if(re.matrixWorld.decompose(F.position,F.quaternion,F.scale),F.translateX(Se),F.translateZ(Me),F.matrixWorld.compose(F.position,F.quaternion,F.scale),F.matrixWorldInverse.copy(F.matrixWorld).invert(),$[10]===-1)F.projectionMatrix.copy(re.projectionMatrix),F.projectionMatrixInverse.copy(re.projectionMatrixInverse);else{let U=Ce+Me,b=ve+Me,j=he-Se,pe=de+(V-Se),Te=te*ve/b*U,Ee=L*ve/b*U;F.projectionMatrix.makePerspective(j,pe,Te,Ee,U,b),F.projectionMatrixInverse.copy(F.projectionMatrix).invert()}}function ge(F,re){re===null?F.matrixWorld.copy(F.matrix):F.matrixWorld.multiplyMatrices(re.matrixWorld,F.matrix),F.matrixWorldInverse.copy(F.matrixWorld).invert()}this.updateCamera=function(F){if(s===null)return;let re=F.near,X=F.far;x.texture!==null&&(x.depthNear>0&&(re=x.depthNear),x.depthFar>0&&(X=x.depthFar)),v.near=P.near=T.near=re,v.far=P.far=T.far=X,(w!==v.near||W!==v.far)&&(s.updateRenderState({depthNear:v.near,depthFar:v.far}),w=v.near,W=v.far);let V=F.parent,$=v.cameras;ge(v,V);for(let xe=0;xe<$.length;xe++)ge($[xe],V);$.length===2?Q(v,T,P):v.projectionMatrix.copy(T.projectionMatrix),N(F,v,V)};function N(F,re,X){X===null?F.matrix.copy(re.matrixWorld):(F.matrix.copy(X.matrixWorld),F.matrix.invert(),F.matrix.multiply(re.matrixWorld)),F.matrix.decompose(F.position,F.quaternion,F.scale),F.updateMatrixWorld(!0),F.projectionMatrix.copy(re.projectionMatrix),F.projectionMatrixInverse.copy(re.projectionMatrixInverse),F.isPerspectiveCamera&&(F.fov=Qr*2*Math.atan(1/F.projectionMatrix.elements[5]),F.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(f===null&&d===null))return c},this.setFoveation=function(F){c=F,f!==null&&(f.fixedFoveation=F),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=F)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(v)};let ae=null;function ne(F,re){if(h=re.getViewerPose(l||o),g=re,h!==null){let X=h.views;d!==null&&(e.setRenderTargetFramebuffer(E,d.framebuffer),e.setRenderTarget(E));let V=!1;X.length!==v.cameras.length&&(v.cameras.length=0,V=!0);for(let xe=0;xe<X.length;xe++){let Ce=X[xe],ve=null;if(d!==null)ve=d.getViewport(Ce);else{let L=p.getViewSubImage(f,Ce);ve=L.viewport,xe===0&&(e.setRenderTargetTextures(E,L.colorTexture,f.ignoreDepthValues?void 0:L.depthStencilTexture),e.setRenderTarget(E))}let te=O[xe];te===void 0&&(te=new Hn,te.layers.enable(xe),te.viewport=new Kt,O[xe]=te),te.matrix.fromArray(Ce.transform.matrix),te.matrix.decompose(te.position,te.quaternion,te.scale),te.projectionMatrix.fromArray(Ce.projectionMatrix),te.projectionMatrixInverse.copy(te.projectionMatrix).invert(),te.viewport.set(ve.x,ve.y,ve.width,ve.height),xe===0&&(v.matrix.copy(te.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),V===!0&&v.cameras.push(te)}let $=s.enabledFeatures;if($&&$.includes("depth-sensing")){let xe=p.getDepthInformation(X[0]);xe&&xe.isValid&&xe.texture&&x.init(e,xe,s.renderState)}}for(let X=0;X<y.length;X++){let V=M[X],$=y[X];V!==null&&$!==void 0&&$.update(V,re,l||o)}ae&&ae(F,re),re.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:re}),g=null}let ie=new r0;ie.setAnimationLoop(ne),this.setAnimationLoop=function(F){ae=F},this.dispose=function(){}}},er=new vi,O2=new wt;function B2(i,e){function t(m,u){m.matrixAutoUpdate===!0&&m.updateMatrix(),u.value.copy(m.matrix)}function n(m,u){u.color.getRGB(m.fogColor.value,s0(i)),u.isFog?(m.fogNear.value=u.near,m.fogFar.value=u.far):u.isFogExp2&&(m.fogDensity.value=u.density)}function s(m,u,E,y,M){u.isMeshBasicMaterial||u.isMeshLambertMaterial?r(m,u):u.isMeshToonMaterial?(r(m,u),p(m,u)):u.isMeshPhongMaterial?(r(m,u),h(m,u)):u.isMeshStandardMaterial?(r(m,u),f(m,u),u.isMeshPhysicalMaterial&&d(m,u,M)):u.isMeshMatcapMaterial?(r(m,u),g(m,u)):u.isMeshDepthMaterial?r(m,u):u.isMeshDistanceMaterial?(r(m,u),x(m,u)):u.isMeshNormalMaterial?r(m,u):u.isLineBasicMaterial?(o(m,u),u.isLineDashedMaterial&&a(m,u)):u.isPointsMaterial?c(m,u,E,y):u.isSpriteMaterial?l(m,u):u.isShadowMaterial?(m.color.value.copy(u.color),m.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function r(m,u){m.opacity.value=u.opacity,u.color&&m.diffuse.value.copy(u.color),u.emissive&&m.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(m.map.value=u.map,t(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,t(u.alphaMap,m.alphaMapTransform)),u.bumpMap&&(m.bumpMap.value=u.bumpMap,t(u.bumpMap,m.bumpMapTransform),m.bumpScale.value=u.bumpScale,u.side===yn&&(m.bumpScale.value*=-1)),u.normalMap&&(m.normalMap.value=u.normalMap,t(u.normalMap,m.normalMapTransform),m.normalScale.value.copy(u.normalScale),u.side===yn&&m.normalScale.value.negate()),u.displacementMap&&(m.displacementMap.value=u.displacementMap,t(u.displacementMap,m.displacementMapTransform),m.displacementScale.value=u.displacementScale,m.displacementBias.value=u.displacementBias),u.emissiveMap&&(m.emissiveMap.value=u.emissiveMap,t(u.emissiveMap,m.emissiveMapTransform)),u.specularMap&&(m.specularMap.value=u.specularMap,t(u.specularMap,m.specularMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest);let E=e.get(u),y=E.envMap,M=E.envMapRotation;y&&(m.envMap.value=y,er.copy(M),er.x*=-1,er.y*=-1,er.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(er.y*=-1,er.z*=-1),m.envMapRotation.value.setFromMatrix4(O2.makeRotationFromEuler(er)),m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=u.reflectivity,m.ior.value=u.ior,m.refractionRatio.value=u.refractionRatio),u.lightMap&&(m.lightMap.value=u.lightMap,m.lightMapIntensity.value=u.lightMapIntensity,t(u.lightMap,m.lightMapTransform)),u.aoMap&&(m.aoMap.value=u.aoMap,m.aoMapIntensity.value=u.aoMapIntensity,t(u.aoMap,m.aoMapTransform))}function o(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,u.map&&(m.map.value=u.map,t(u.map,m.mapTransform))}function a(m,u){m.dashSize.value=u.dashSize,m.totalSize.value=u.dashSize+u.gapSize,m.scale.value=u.scale}function c(m,u,E,y){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.size.value=u.size*E,m.scale.value=y*.5,u.map&&(m.map.value=u.map,t(u.map,m.uvTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,t(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function l(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.rotation.value=u.rotation,u.map&&(m.map.value=u.map,t(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,t(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function h(m,u){m.specular.value.copy(u.specular),m.shininess.value=Math.max(u.shininess,1e-4)}function p(m,u){u.gradientMap&&(m.gradientMap.value=u.gradientMap)}function f(m,u){m.metalness.value=u.metalness,u.metalnessMap&&(m.metalnessMap.value=u.metalnessMap,t(u.metalnessMap,m.metalnessMapTransform)),m.roughness.value=u.roughness,u.roughnessMap&&(m.roughnessMap.value=u.roughnessMap,t(u.roughnessMap,m.roughnessMapTransform)),u.envMap&&(m.envMapIntensity.value=u.envMapIntensity)}function d(m,u,E){m.ior.value=u.ior,u.sheen>0&&(m.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),m.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(m.sheenColorMap.value=u.sheenColorMap,t(u.sheenColorMap,m.sheenColorMapTransform)),u.sheenRoughnessMap&&(m.sheenRoughnessMap.value=u.sheenRoughnessMap,t(u.sheenRoughnessMap,m.sheenRoughnessMapTransform))),u.clearcoat>0&&(m.clearcoat.value=u.clearcoat,m.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(m.clearcoatMap.value=u.clearcoatMap,t(u.clearcoatMap,m.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,t(u.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(m.clearcoatNormalMap.value=u.clearcoatNormalMap,t(u.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===yn&&m.clearcoatNormalScale.value.negate())),u.dispersion>0&&(m.dispersion.value=u.dispersion),u.iridescence>0&&(m.iridescence.value=u.iridescence,m.iridescenceIOR.value=u.iridescenceIOR,m.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(m.iridescenceMap.value=u.iridescenceMap,t(u.iridescenceMap,m.iridescenceMapTransform)),u.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=u.iridescenceThicknessMap,t(u.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),u.transmission>0&&(m.transmission.value=u.transmission,m.transmissionSamplerMap.value=E.texture,m.transmissionSamplerSize.value.set(E.width,E.height),u.transmissionMap&&(m.transmissionMap.value=u.transmissionMap,t(u.transmissionMap,m.transmissionMapTransform)),m.thickness.value=u.thickness,u.thicknessMap&&(m.thicknessMap.value=u.thicknessMap,t(u.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=u.attenuationDistance,m.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(m.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(m.anisotropyMap.value=u.anisotropyMap,t(u.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=u.specularIntensity,m.specularColor.value.copy(u.specularColor),u.specularColorMap&&(m.specularColorMap.value=u.specularColorMap,t(u.specularColorMap,m.specularColorMapTransform)),u.specularIntensityMap&&(m.specularIntensityMap.value=u.specularIntensityMap,t(u.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,u){u.matcap&&(m.matcap.value=u.matcap)}function x(m,u){let E=e.get(u).light;m.referencePosition.value.setFromMatrixPosition(E.matrixWorld),m.nearDistance.value=E.shadow.camera.near,m.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function z2(i,e,t,n){let s={},r={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(E,y){let M=y.program;n.uniformBlockBinding(E,M)}function l(E,y){let M=s[E.id];M===void 0&&(g(E),M=h(E),s[E.id]=M,E.addEventListener("dispose",m));let C=y.program;n.updateUBOMapping(E,C);let A=e.render.frame;r[E.id]!==A&&(f(E),r[E.id]=A)}function h(E){let y=p();E.__bindingPointIndex=y;let M=i.createBuffer(),C=E.__size,A=E.usage;return i.bindBuffer(i.UNIFORM_BUFFER,M),i.bufferData(i.UNIFORM_BUFFER,C,A),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,y,M),M}function p(){for(let E=0;E<a;E++)if(o.indexOf(E)===-1)return o.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(E){let y=s[E.id],M=E.uniforms,C=E.__cache;i.bindBuffer(i.UNIFORM_BUFFER,y);for(let A=0,T=M.length;A<T;A++){let P=Array.isArray(M[A])?M[A]:[M[A]];for(let O=0,v=P.length;O<v;O++){let w=P[O];if(d(w,A,O,C)===!0){let W=w.__offset,z=Array.isArray(w.value)?w.value:[w.value],B=0;for(let H=0;H<z.length;H++){let Z=z[H],me=x(Z);typeof Z=="number"||typeof Z=="boolean"?(w.__data[0]=Z,i.bufferSubData(i.UNIFORM_BUFFER,W+B,w.__data)):Z.isMatrix3?(w.__data[0]=Z.elements[0],w.__data[1]=Z.elements[1],w.__data[2]=Z.elements[2],w.__data[3]=0,w.__data[4]=Z.elements[3],w.__data[5]=Z.elements[4],w.__data[6]=Z.elements[5],w.__data[7]=0,w.__data[8]=Z.elements[6],w.__data[9]=Z.elements[7],w.__data[10]=Z.elements[8],w.__data[11]=0):(Z.toArray(w.__data,B),B+=me.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,W,w.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(E,y,M,C){let A=E.value,T=y+"_"+M;if(C[T]===void 0)return typeof A=="number"||typeof A=="boolean"?C[T]=A:C[T]=A.clone(),!0;{let P=C[T];if(typeof A=="number"||typeof A=="boolean"){if(P!==A)return C[T]=A,!0}else if(P.equals(A)===!1)return P.copy(A),!0}return!1}function g(E){let y=E.uniforms,M=0,C=16;for(let T=0,P=y.length;T<P;T++){let O=Array.isArray(y[T])?y[T]:[y[T]];for(let v=0,w=O.length;v<w;v++){let W=O[v],z=Array.isArray(W.value)?W.value:[W.value];for(let B=0,H=z.length;B<H;B++){let Z=z[B],me=x(Z),Q=M%C,ge=Q%me.boundary,N=Q+ge;M+=ge,N!==0&&C-N<me.storage&&(M+=C-N),W.__data=new Float32Array(me.storage/Float32Array.BYTES_PER_ELEMENT),W.__offset=M,M+=me.storage}}}let A=M%C;return A>0&&(M+=C-A),E.__size=M,E.__cache={},this}function x(E){let y={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(y.boundary=4,y.storage=4):E.isVector2?(y.boundary=8,y.storage=8):E.isVector3||E.isColor?(y.boundary=16,y.storage=12):E.isVector4?(y.boundary=16,y.storage=16):E.isMatrix3?(y.boundary=48,y.storage=48):E.isMatrix4?(y.boundary=64,y.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),y}function m(E){let y=E.target;y.removeEventListener("dispose",m);let M=o.indexOf(y.__bindingPointIndex);o.splice(M,1),i.deleteBuffer(s[y.id]),delete s[y.id],delete r[y.id]}function u(){for(let E in s)i.deleteBuffer(s[E]);o=[],s={},r={}}return{bind:c,update:l,dispose:u}}var Hc=class{constructor(e={}){let{canvas:t=G1(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:p=!1}=e;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;let d=new Uint32Array(4),g=new Int32Array(4),x=null,m=null,u=[],E=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ft,this.toneMapping=Ls,this.toneMappingExposure=1;let y=this,M=!1,C=0,A=0,T=null,P=-1,O=null,v=new Kt,w=new Kt,W=null,z=new dt(0),B=0,H=t.width,Z=t.height,me=1,Q=null,ge=null,N=new Kt(0,0,H,Z),ae=new Kt(0,0,H,Z),ne=!1,ie=new na,F=!1,re=!1,X=new wt,V=new wt,$=new S,xe=new Kt,Ce={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},ve=!1;function te(){return T===null?me:1}let L=n;function _e(I,K){return t.getContext(I,K)}try{let I={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:p};if("setAttribute"in t&&t.setAttribute("data-engine","three.js r169"),t.addEventListener("webglcontextlost",we,!1),t.addEventListener("webglcontextrestored",Ue,!1),t.addEventListener("webglcontextcreationerror",Fe,!1),L===null){let K="webgl2";if(L=_e(K,I),L===null)throw _e(K)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(I){throw console.error("THREE.WebGLRenderer: "+I.message),I}let se,he,de,Me,Se,U,b,j,pe,Te,Ee,Xe,Oe,ke,vt,De,J,ye,Ie,Pe,Re,le,Ve,q;function Ae(){se=new n_(L),se.init(),le=new U2(L,se),he=new Kv(L,se,e,le),de=new I2(L),he.reverseDepthBuffer&&de.buffers.depth.setReversed(!0),Me=new r_(L),Se=new y2,U=new D2(L,se,de,Se,he,le,Me),b=new Qv(y),j=new t_(y),pe=new dx(L),Ve=new Zv(L,pe),Te=new i_(L,pe,Me,Ve),Ee=new a_(L,Te,pe,Me),Ie=new o_(L,he,U),De=new Jv(Se),Xe=new x2(y,b,j,se,he,Ve,De),Oe=new B2(y,Se),ke=new _2,vt=new T2(se),ye=new Yv(y,b,j,de,Ee,f,c),J=new C2(y,Ee,he),q=new z2(L,Me,he,de),Pe=new $v(L,se,Me),Re=new s_(L,se,Me),Me.programs=Xe.programs,y.capabilities=he,y.extensions=se,y.properties=Se,y.renderLists=ke,y.shadowMap=J,y.state=de,y.info=Me}Ae();let ce=new Lu(y,L);this.xr=ce,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){let I=se.get("WEBGL_lose_context");I&&I.loseContext()},this.forceContextRestore=function(){let I=se.get("WEBGL_lose_context");I&&I.restoreContext()},this.getPixelRatio=function(){return me},this.setPixelRatio=function(I){I!==void 0&&(me=I,this.setSize(H,Z,!1))},this.getSize=function(I){return I.set(H,Z)},this.setSize=function(I,K,oe=!0){if(ce.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}H=I,Z=K,t.width=Math.floor(I*me),t.height=Math.floor(K*me),oe===!0&&(t.style.width=I+"px",t.style.height=K+"px"),this.setViewport(0,0,I,K)},this.getDrawingBufferSize=function(I){return I.set(H*me,Z*me).floor()},this.setDrawingBufferSize=function(I,K,oe){H=I,Z=K,me=oe,t.width=Math.floor(I*oe),t.height=Math.floor(K*oe),this.setViewport(0,0,I,K)},this.getCurrentViewport=function(I){return I.copy(v)},this.getViewport=function(I){return I.copy(N)},this.setViewport=function(I,K,oe,ue){I.isVector4?N.set(I.x,I.y,I.z,I.w):N.set(I,K,oe,ue),de.viewport(v.copy(N).multiplyScalar(me).round())},this.getScissor=function(I){return I.copy(ae)},this.setScissor=function(I,K,oe,ue){I.isVector4?ae.set(I.x,I.y,I.z,I.w):ae.set(I,K,oe,ue),de.scissor(w.copy(ae).multiplyScalar(me).round())},this.getScissorTest=function(){return ne},this.setScissorTest=function(I){de.setScissorTest(ne=I)},this.setOpaqueSort=function(I){Q=I},this.setTransparentSort=function(I){ge=I},this.getClearColor=function(I){return I.copy(ye.getClearColor())},this.setClearColor=function(){ye.setClearColor.apply(ye,arguments)},this.getClearAlpha=function(){return ye.getClearAlpha()},this.setClearAlpha=function(){ye.setClearAlpha.apply(ye,arguments)},this.clear=function(I=!0,K=!0,oe=!0){let ue=0;if(I){let ee=!1;if(T!==null){let Le=T.texture.format;ee=Le===cd||Le===ad||Le===od}if(ee){let Le=T.texture.type,We=Le===fs||Le===ar||Le===Qo||Le===Kr||Le===id||Le===sd,je=ye.getClearColor(),et=ye.getClearAlpha(),ot=je.r,at=je.g,Ke=je.b;We?(d[0]=ot,d[1]=at,d[2]=Ke,d[3]=et,L.clearBufferuiv(L.COLOR,0,d)):(g[0]=ot,g[1]=at,g[2]=Ke,g[3]=et,L.clearBufferiv(L.COLOR,0,g))}else ue|=L.COLOR_BUFFER_BIT}K&&(ue|=L.DEPTH_BUFFER_BIT,L.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),oe&&(ue|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(ue)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",we,!1),t.removeEventListener("webglcontextrestored",Ue,!1),t.removeEventListener("webglcontextcreationerror",Fe,!1),ke.dispose(),vt.dispose(),Se.dispose(),b.dispose(),j.dispose(),Ee.dispose(),Ve.dispose(),q.dispose(),Xe.dispose(),ce.dispose(),ce.removeEventListener("sessionstart",mi),ce.removeEventListener("sessionend",ss),Jn.stop()};function we(I){I.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),M=!0}function Ue(){console.log("THREE.WebGLRenderer: Context Restored."),M=!1;let I=Me.autoReset,K=J.enabled,oe=J.autoUpdate,ue=J.needsUpdate,ee=J.type;Ae(),Me.autoReset=I,J.enabled=K,J.autoUpdate=oe,J.needsUpdate=ue,J.type=ee}function Fe(I){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",I.statusMessage)}function ut(I){let K=I.target;K.removeEventListener("dispose",ut),Pt(K)}function Pt(I){Ot(I),Se.remove(I)}function Ot(I){let K=Se.get(I).programs;K!==void 0&&(K.forEach(function(oe){Xe.releaseProgram(oe)}),I.isShaderMaterial&&Xe.releaseShaderCache(I))}this.renderBufferDirect=function(I,K,oe,ue,ee,Le){K===null&&(K=Ce);let We=ee.isMesh&&ee.matrixWorld.determinant()<0,je=an(I,K,oe,ue,ee);de.setMaterial(ue,We);let et=oe.index,ot=1;if(ue.wireframe===!0){if(et=Te.getWireframeAttribute(oe),et===void 0)return;ot=2}let at=oe.drawRange,Ke=oe.attributes.position,Tt=at.start*ot,xt=(at.start+at.count)*ot;Le!==null&&(Tt=Math.max(Tt,Le.start*ot),xt=Math.min(xt,(Le.start+Le.count)*ot)),et!==null?(Tt=Math.max(Tt,0),xt=Math.min(xt,et.count)):Ke!=null&&(Tt=Math.max(Tt,0),xt=Math.min(xt,Ke.count));let Bt=xt-Tt;if(Bt<0||Bt===1/0)return;Ve.setup(ee,ue,je,oe,et);let Cn,Ht=Pe;if(et!==null&&(Cn=pe.get(et),Ht=Re,Ht.setIndex(Cn)),ee.isMesh)ue.wireframe===!0?(de.setLineWidth(ue.wireframeLinewidth*te()),Ht.setMode(L.LINES)):Ht.setMode(L.TRIANGLES);else if(ee.isLine){let it=ue.linewidth;it===void 0&&(it=1),de.setLineWidth(it*te()),ee.isLineSegments?Ht.setMode(L.LINES):ee.isLineLoop?Ht.setMode(L.LINE_LOOP):Ht.setMode(L.LINE_STRIP)}else ee.isPoints?Ht.setMode(L.POINTS):ee.isSprite&&Ht.setMode(L.TRIANGLES);if(ee.isBatchedMesh)if(ee._multiDrawInstances!==null)Ht.renderMultiDrawInstances(ee._multiDrawStarts,ee._multiDrawCounts,ee._multiDrawCount,ee._multiDrawInstances);else if(se.get("WEBGL_multi_draw"))Ht.renderMultiDraw(ee._multiDrawStarts,ee._multiDrawCounts,ee._multiDrawCount);else{let it=ee._multiDrawStarts,zt=ee._multiDrawCounts,He=ee._multiDrawCount,qe=et?pe.get(et).bytesPerElement:1,Mn=Se.get(ue).currentProgram.getUniforms();for(let nn=0;nn<He;nn++)Mn.setValue(L,"_gl_DrawID",nn),Ht.render(it[nn]/qe,zt[nn])}else if(ee.isInstancedMesh)Ht.renderInstances(Tt,Bt,ee.count);else if(oe.isInstancedBufferGeometry){let it=oe._maxInstanceCount!==void 0?oe._maxInstanceCount:1/0,zt=Math.min(oe.instanceCount,it);Ht.renderInstances(Tt,Bt,zt)}else Ht.render(Tt,Bt)};function lt(I,K,oe){I.transparent===!0&&I.side===Dt&&I.forceSinglePass===!1?(I.side=yn,I.needsUpdate=!0,Qe(I,K,oe),I.side=Ki,I.needsUpdate=!0,Qe(I,K,oe),I.side=Dt):Qe(I,K,oe)}this.compile=function(I,K,oe=null){oe===null&&(oe=I),m=vt.get(oe),m.init(K),E.push(m),oe.traverseVisible(function(ee){ee.isLight&&ee.layers.test(K.layers)&&(m.pushLight(ee),ee.castShadow&&m.pushShadow(ee))}),I!==oe&&I.traverseVisible(function(ee){ee.isLight&&ee.layers.test(K.layers)&&(m.pushLight(ee),ee.castShadow&&m.pushShadow(ee))}),m.setupLights();let ue=new Set;return I.traverse(function(ee){if(!(ee.isMesh||ee.isPoints||ee.isLine||ee.isSprite))return;let Le=ee.material;if(Le)if(Array.isArray(Le))for(let We=0;We<Le.length;We++){let je=Le[We];lt(je,oe,ee),ue.add(je)}else lt(Le,oe,ee),ue.add(Le)}),E.pop(),m=null,ue},this.compileAsync=function(I,K,oe=null){let ue=this.compile(I,K,oe);return new Promise(ee=>{function Le(){if(ue.forEach(function(We){Se.get(We).currentProgram.isReady()&&ue.delete(We)}),ue.size===0){ee(I);return}setTimeout(Le,10)}se.get("KHR_parallel_shader_compile")!==null?Le():setTimeout(Le,10)})};let It=null;function Xn(I){It&&It(I)}function mi(){Jn.stop()}function ss(){Jn.start()}let Jn=new r0;Jn.setAnimationLoop(Xn),typeof self<"u"&&Jn.setContext(self),this.setAnimationLoop=function(I){It=I,ce.setAnimationLoop(I),I===null?Jn.stop():Jn.start()},ce.addEventListener("sessionstart",mi),ce.addEventListener("sessionend",ss),this.render=function(I,K){if(K!==void 0&&K.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(M===!0)return;if(I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),K.parent===null&&K.matrixWorldAutoUpdate===!0&&K.updateMatrixWorld(),ce.enabled===!0&&ce.isPresenting===!0&&(ce.cameraAutoUpdate===!0&&ce.updateCamera(K),K=ce.getCamera()),I.isScene===!0&&I.onBeforeRender(y,I,K,T),m=vt.get(I,E.length),m.init(K),E.push(m),V.multiplyMatrices(K.projectionMatrix,K.matrixWorldInverse),ie.setFromProjectionMatrix(V),re=this.localClippingEnabled,F=De.init(this.clippingPlanes,re),x=ke.get(I,u.length),x.init(),u.push(x),ce.enabled===!0&&ce.isPresenting===!0){let Le=y.xr.getDepthSensingMesh();Le!==null&&Je(Le,K,-1/0,y.sortObjects)}Je(I,K,0,y.sortObjects),x.finish(),y.sortObjects===!0&&x.sort(Q,ge),ve=ce.enabled===!1||ce.isPresenting===!1||ce.hasDepthSensing()===!1,ve&&ye.addToRenderList(x,I),this.info.render.frame++,F===!0&&De.beginShadows();let oe=m.state.shadowsArray;J.render(oe,I,K),F===!0&&De.endShadows(),this.info.autoReset===!0&&this.info.reset();let ue=x.opaque,ee=x.transmissive;if(m.setupLights(),K.isArrayCamera){let Le=K.cameras;if(ee.length>0)for(let We=0,je=Le.length;We<je;We++){let et=Le[We];nt(ue,ee,I,et)}ve&&ye.render(I);for(let We=0,je=Le.length;We<je;We++){let et=Le[We];st(x,I,et,et.viewport)}}else ee.length>0&&nt(ue,ee,I,K),ve&&ye.render(I),st(x,I,K);T!==null&&(U.updateMultisampleRenderTarget(T),U.updateRenderTargetMipmap(T)),I.isScene===!0&&I.onAfterRender(y,I,K),Ve.resetDefaultState(),P=-1,O=null,E.pop(),E.length>0?(m=E[E.length-1],F===!0&&De.setGlobalState(y.clippingPlanes,m.state.camera)):m=null,u.pop(),u.length>0?x=u[u.length-1]:x=null};function Je(I,K,oe,ue){if(I.visible===!1)return;if(I.layers.test(K.layers)){if(I.isGroup)oe=I.renderOrder;else if(I.isLOD)I.autoUpdate===!0&&I.update(K);else if(I.isLight)m.pushLight(I),I.castShadow&&m.pushShadow(I);else if(I.isSprite){if(!I.frustumCulled||ie.intersectsSprite(I)){ue&&xe.setFromMatrixPosition(I.matrixWorld).applyMatrix4(V);let We=Ee.update(I),je=I.material;je.visible&&x.push(I,We,je,oe,xe.z,null)}}else if((I.isMesh||I.isLine||I.isPoints)&&(!I.frustumCulled||ie.intersectsObject(I))){let We=Ee.update(I),je=I.material;if(ue&&(I.boundingSphere!==void 0?(I.boundingSphere===null&&I.computeBoundingSphere(),xe.copy(I.boundingSphere.center)):(We.boundingSphere===null&&We.computeBoundingSphere(),xe.copy(We.boundingSphere.center)),xe.applyMatrix4(I.matrixWorld).applyMatrix4(V)),Array.isArray(je)){let et=We.groups;for(let ot=0,at=et.length;ot<at;ot++){let Ke=et[ot],Tt=je[Ke.materialIndex];Tt&&Tt.visible&&x.push(I,We,Tt,oe,xe.z,Ke)}}else je.visible&&x.push(I,We,je,oe,xe.z,null)}}let Le=I.children;for(let We=0,je=Le.length;We<je;We++)Je(Le[We],K,oe,ue)}function st(I,K,oe,ue){let ee=I.opaque,Le=I.transmissive,We=I.transparent;m.setupLightsView(oe),F===!0&&De.setGlobalState(y.clippingPlanes,oe),ue&&de.viewport(v.copy(ue)),ee.length>0&&rt(ee,K,oe),Le.length>0&&rt(Le,K,oe),We.length>0&&rt(We,K,oe),de.buffers.depth.setTest(!0),de.buffers.depth.setMask(!0),de.buffers.color.setMask(!0),de.setPolygonOffset(!1)}function nt(I,K,oe,ue){if((oe.isScene===!0?oe.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[ue.id]===void 0&&(m.state.transmissionRenderTarget[ue.id]=new ps(1,1,{generateMipmaps:!0,type:se.has("EXT_color_buffer_half_float")||se.has("EXT_color_buffer_float")?da:fs,minFilter:Oi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Xt.workingColorSpace}));let Le=m.state.transmissionRenderTarget[ue.id],We=ue.viewport||v;Le.setSize(We.z,We.w);let je=y.getRenderTarget();y.setRenderTarget(Le),y.getClearColor(z),B=y.getClearAlpha(),B<1&&y.setClearColor(16777215,.5),y.clear(),ve&&ye.render(oe);let et=y.toneMapping;y.toneMapping=Ls;let ot=ue.viewport;if(ue.viewport!==void 0&&(ue.viewport=void 0),m.setupLightsView(ue),F===!0&&De.setGlobalState(y.clippingPlanes,ue),rt(I,oe,ue),U.updateMultisampleRenderTarget(Le),U.updateRenderTargetMipmap(Le),se.has("WEBGL_multisampled_render_to_texture")===!1){let at=!1;for(let Ke=0,Tt=K.length;Ke<Tt;Ke++){let xt=K[Ke],Bt=xt.object,Cn=xt.geometry,Ht=xt.material,it=xt.group;if(Ht.side===Dt&&Bt.layers.test(ue.layers)){let zt=Ht.side;Ht.side=yn,Ht.needsUpdate=!0,ze(Bt,oe,ue,Cn,Ht,it),Ht.side=zt,Ht.needsUpdate=!0,at=!0}}at===!0&&(U.updateMultisampleRenderTarget(Le),U.updateRenderTargetMipmap(Le))}y.setRenderTarget(je),y.setClearColor(z,B),ot!==void 0&&(ue.viewport=ot),y.toneMapping=et}function rt(I,K,oe){let ue=K.isScene===!0?K.overrideMaterial:null;for(let ee=0,Le=I.length;ee<Le;ee++){let We=I[ee],je=We.object,et=We.geometry,ot=ue===null?We.material:ue,at=We.group;je.layers.test(oe.layers)&&ze(je,K,oe,et,ot,at)}}function ze(I,K,oe,ue,ee,Le){I.onBeforeRender(y,K,oe,ue,ee,Le),I.modelViewMatrix.multiplyMatrices(oe.matrixWorldInverse,I.matrixWorld),I.normalMatrix.getNormalMatrix(I.modelViewMatrix),ee.onBeforeRender(y,K,oe,ue,I,Le),ee.transparent===!0&&ee.side===Dt&&ee.forceSinglePass===!1?(ee.side=yn,ee.needsUpdate=!0,y.renderBufferDirect(oe,K,ue,ee,I,Le),ee.side=Ki,ee.needsUpdate=!0,y.renderBufferDirect(oe,K,ue,ee,I,Le),ee.side=Dt):y.renderBufferDirect(oe,K,ue,ee,I,Le),I.onAfterRender(y,K,oe,ue,ee,Le)}function Qe(I,K,oe){K.isScene!==!0&&(K=Ce);let ue=Se.get(I),ee=m.state.lights,Le=m.state.shadowsArray,We=ee.state.version,je=Xe.getParameters(I,ee.state,Le,K,oe),et=Xe.getProgramCacheKey(je),ot=ue.programs;ue.environment=I.isMeshStandardMaterial?K.environment:null,ue.fog=K.fog,ue.envMap=(I.isMeshStandardMaterial?j:b).get(I.envMap||ue.environment),ue.envMapRotation=ue.environment!==null&&I.envMap===null?K.environmentRotation:I.envMapRotation,ot===void 0&&(I.addEventListener("dispose",ut),ot=new Map,ue.programs=ot);let at=ot.get(et);if(at!==void 0){if(ue.currentProgram===at&&ue.lightsStateVersion===We)return qt(I,je),at}else je.uniforms=Xe.getUniforms(I),I.onBeforeCompile(je,y),at=Xe.acquireProgram(je,et),ot.set(et,at),ue.uniforms=je.uniforms;let Ke=ue.uniforms;return(!I.isShaderMaterial&&!I.isRawShaderMaterial||I.clipping===!0)&&(Ke.clippingPlanes=De.uniform),qt(I,je),ue.needsLights=Gt(I),ue.lightsStateVersion=We,ue.needsLights&&(Ke.ambientLightColor.value=ee.state.ambient,Ke.lightProbe.value=ee.state.probe,Ke.directionalLights.value=ee.state.directional,Ke.directionalLightShadows.value=ee.state.directionalShadow,Ke.spotLights.value=ee.state.spot,Ke.spotLightShadows.value=ee.state.spotShadow,Ke.rectAreaLights.value=ee.state.rectArea,Ke.ltc_1.value=ee.state.rectAreaLTC1,Ke.ltc_2.value=ee.state.rectAreaLTC2,Ke.pointLights.value=ee.state.point,Ke.pointLightShadows.value=ee.state.pointShadow,Ke.hemisphereLights.value=ee.state.hemi,Ke.directionalShadowMap.value=ee.state.directionalShadowMap,Ke.directionalShadowMatrix.value=ee.state.directionalShadowMatrix,Ke.spotShadowMap.value=ee.state.spotShadowMap,Ke.spotLightMatrix.value=ee.state.spotLightMatrix,Ke.spotLightMap.value=ee.state.spotLightMap,Ke.pointShadowMap.value=ee.state.pointShadowMap,Ke.pointShadowMatrix.value=ee.state.pointShadowMatrix),ue.currentProgram=at,ue.uniformsList=null,at}function bt(I){if(I.uniformsList===null){let K=I.currentProgram.getUniforms();I.uniformsList=qr.seqWithValue(K.seq,I.uniforms)}return I.uniformsList}function qt(I,K){let oe=Se.get(I);oe.outputColorSpace=K.outputColorSpace,oe.batching=K.batching,oe.batchingColor=K.batchingColor,oe.instancing=K.instancing,oe.instancingColor=K.instancingColor,oe.instancingMorph=K.instancingMorph,oe.skinning=K.skinning,oe.morphTargets=K.morphTargets,oe.morphNormals=K.morphNormals,oe.morphColors=K.morphColors,oe.morphTargetsCount=K.morphTargetsCount,oe.numClippingPlanes=K.numClippingPlanes,oe.numIntersection=K.numClipIntersection,oe.vertexAlphas=K.vertexAlphas,oe.vertexTangents=K.vertexTangents,oe.toneMapping=K.toneMapping}function an(I,K,oe,ue,ee){K.isScene!==!0&&(K=Ce),U.resetTextureUnits();let Le=K.fog,We=ue.isMeshStandardMaterial?K.environment:null,je=T===null?y.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:zs,et=(ue.isMeshStandardMaterial?j:b).get(ue.envMap||We),ot=ue.vertexColors===!0&&!!oe.attributes.color&&oe.attributes.color.itemSize===4,at=!!oe.attributes.tangent&&(!!ue.normalMap||ue.anisotropy>0),Ke=!!oe.morphAttributes.position,Tt=!!oe.morphAttributes.normal,xt=!!oe.morphAttributes.color,Bt=Ls;ue.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(Bt=y.toneMapping);let Cn=oe.morphAttributes.position||oe.morphAttributes.normal||oe.morphAttributes.color,Ht=Cn!==void 0?Cn.length:0,it=Se.get(ue),zt=m.state.lights;if(F===!0&&(re===!0||I!==O)){let jn=I===O&&ue.id===P;De.setState(ue,I,jn)}let He=!1;ue.version===it.__version?(it.needsLights&&it.lightsStateVersion!==zt.state.version||it.outputColorSpace!==je||ee.isBatchedMesh&&it.batching===!1||!ee.isBatchedMesh&&it.batching===!0||ee.isBatchedMesh&&it.batchingColor===!0&&ee.colorTexture===null||ee.isBatchedMesh&&it.batchingColor===!1&&ee.colorTexture!==null||ee.isInstancedMesh&&it.instancing===!1||!ee.isInstancedMesh&&it.instancing===!0||ee.isSkinnedMesh&&it.skinning===!1||!ee.isSkinnedMesh&&it.skinning===!0||ee.isInstancedMesh&&it.instancingColor===!0&&ee.instanceColor===null||ee.isInstancedMesh&&it.instancingColor===!1&&ee.instanceColor!==null||ee.isInstancedMesh&&it.instancingMorph===!0&&ee.morphTexture===null||ee.isInstancedMesh&&it.instancingMorph===!1&&ee.morphTexture!==null||it.envMap!==et||ue.fog===!0&&it.fog!==Le||it.numClippingPlanes!==void 0&&(it.numClippingPlanes!==De.numPlanes||it.numIntersection!==De.numIntersection)||it.vertexAlphas!==ot||it.vertexTangents!==at||it.morphTargets!==Ke||it.morphNormals!==Tt||it.morphColors!==xt||it.toneMapping!==Bt||it.morphTargetsCount!==Ht)&&(He=!0):(He=!0,it.__version=ue.version);let qe=it.currentProgram;He===!0&&(qe=Qe(ue,K,ee));let Mn=!1,nn=!1,Qn=!1,cn=qe.getUniforms(),si=it.uniforms;if(de.useProgram(qe.program)&&(Mn=!0,nn=!0,Qn=!0),ue.id!==P&&(P=ue.id,nn=!0),Mn||O!==I){he.reverseDepthBuffer?(X.copy(I.projectionMatrix),X1(X),q1(X),cn.setValue(L,"projectionMatrix",X)):cn.setValue(L,"projectionMatrix",I.projectionMatrix),cn.setValue(L,"viewMatrix",I.matrixWorldInverse);let jn=cn.map.cameraPosition;jn!==void 0&&jn.setValue(L,$.setFromMatrixPosition(I.matrixWorld)),he.logarithmicDepthBuffer&&cn.setValue(L,"logDepthBufFC",2/(Math.log(I.far+1)/Math.LN2)),(ue.isMeshPhongMaterial||ue.isMeshToonMaterial||ue.isMeshLambertMaterial||ue.isMeshBasicMaterial||ue.isMeshStandardMaterial||ue.isShaderMaterial)&&cn.setValue(L,"isOrthographic",I.isOrthographicCamera===!0),O!==I&&(O=I,nn=!0,Qn=!0)}if(ee.isSkinnedMesh){cn.setOptional(L,ee,"bindMatrix"),cn.setOptional(L,ee,"bindMatrixInverse");let jn=ee.skeleton;jn&&(jn.boneTexture===null&&jn.computeBoneTexture(),cn.setValue(L,"boneTexture",jn.boneTexture,U))}ee.isBatchedMesh&&(cn.setOptional(L,ee,"batchingTexture"),cn.setValue(L,"batchingTexture",ee._matricesTexture,U),cn.setOptional(L,ee,"batchingIdTexture"),cn.setValue(L,"batchingIdTexture",ee._indirectTexture,U),cn.setOptional(L,ee,"batchingColorTexture"),ee._colorsTexture!==null&&cn.setValue(L,"batchingColorTexture",ee._colorsTexture,U));let vr=oe.morphAttributes;if((vr.position!==void 0||vr.normal!==void 0||vr.color!==void 0)&&Ie.update(ee,oe,qe),(nn||it.receiveShadow!==ee.receiveShadow)&&(it.receiveShadow=ee.receiveShadow,cn.setValue(L,"receiveShadow",ee.receiveShadow)),ue.isMeshGouraudMaterial&&ue.envMap!==null&&(si.envMap.value=et,si.flipEnvMap.value=et.isCubeTexture&&et.isRenderTargetTexture===!1?-1:1),ue.isMeshStandardMaterial&&ue.envMap===null&&K.environment!==null&&(si.envMapIntensity.value=K.environmentIntensity),nn&&(cn.setValue(L,"toneMappingExposure",y.toneMappingExposure),it.needsLights&&gn(si,Qn),Le&&ue.fog===!0&&Oe.refreshFogUniforms(si,Le),Oe.refreshMaterialUniforms(si,ue,me,Z,m.state.transmissionRenderTarget[I.id]),qr.upload(L,bt(it),si,U)),ue.isShaderMaterial&&ue.uniformsNeedUpdate===!0&&(qr.upload(L,bt(it),si,U),ue.uniformsNeedUpdate=!1),ue.isSpriteMaterial&&cn.setValue(L,"center",ee.center),cn.setValue(L,"modelViewMatrix",ee.modelViewMatrix),cn.setValue(L,"normalMatrix",ee.normalMatrix),cn.setValue(L,"modelMatrix",ee.matrixWorld),ue.isShaderMaterial||ue.isRawShaderMaterial){let jn=ue.uniformsGroups;for(let ri=0,Dl=jn.length;ri<Dl;ri++){let To=jn[ri];q.update(To,qe),q.bind(To,qe)}}return qe}function gn(I,K){I.ambientLightColor.needsUpdate=K,I.lightProbe.needsUpdate=K,I.directionalLights.needsUpdate=K,I.directionalLightShadows.needsUpdate=K,I.pointLights.needsUpdate=K,I.pointLightShadows.needsUpdate=K,I.spotLights.needsUpdate=K,I.spotLightShadows.needsUpdate=K,I.rectAreaLights.needsUpdate=K,I.hemisphereLights.needsUpdate=K}function Gt(I){return I.isMeshLambertMaterial||I.isMeshToonMaterial||I.isMeshPhongMaterial||I.isMeshStandardMaterial||I.isShadowMaterial||I.isShaderMaterial&&I.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(I,K,oe){Se.get(I.texture).__webglTexture=K,Se.get(I.depthTexture).__webglTexture=oe;let ue=Se.get(I);ue.__hasExternalTextures=!0,ue.__autoAllocateDepthBuffer=oe===void 0,ue.__autoAllocateDepthBuffer||se.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),ue.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(I,K){let oe=Se.get(I);oe.__webglFramebuffer=K,oe.__useDefaultFramebuffer=K===void 0},this.setRenderTarget=function(I,K=0,oe=0){T=I,C=K,A=oe;let ue=!0,ee=null,Le=!1,We=!1;if(I){let et=Se.get(I);if(et.__useDefaultFramebuffer!==void 0)de.bindFramebuffer(L.FRAMEBUFFER,null),ue=!1;else if(et.__webglFramebuffer===void 0)U.setupRenderTarget(I);else if(et.__hasExternalTextures)U.rebindTextures(I,Se.get(I.texture).__webglTexture,Se.get(I.depthTexture).__webglTexture);else if(I.depthBuffer){let Ke=I.depthTexture;if(et.__boundDepthTexture!==Ke){if(Ke!==null&&Se.has(Ke)&&(I.width!==Ke.image.width||I.height!==Ke.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");U.setupDepthRenderbuffer(I)}}let ot=I.texture;(ot.isData3DTexture||ot.isDataArrayTexture||ot.isCompressedArrayTexture)&&(We=!0);let at=Se.get(I).__webglFramebuffer;I.isWebGLCubeRenderTarget?(Array.isArray(at[K])?ee=at[K][oe]:ee=at[K],Le=!0):I.samples>0&&U.useMultisampledRTT(I)===!1?ee=Se.get(I).__webglMultisampledFramebuffer:Array.isArray(at)?ee=at[oe]:ee=at,v.copy(I.viewport),w.copy(I.scissor),W=I.scissorTest}else v.copy(N).multiplyScalar(me).floor(),w.copy(ae).multiplyScalar(me).floor(),W=ne;if(de.bindFramebuffer(L.FRAMEBUFFER,ee)&&ue&&de.drawBuffers(I,ee),de.viewport(v),de.scissor(w),de.setScissorTest(W),Le){let et=Se.get(I.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+K,et.__webglTexture,oe)}else if(We){let et=Se.get(I.texture),ot=K||0;L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,et.__webglTexture,oe||0,ot)}P=-1},this.readRenderTargetPixels=function(I,K,oe,ue,ee,Le,We){if(!(I&&I.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let je=Se.get(I).__webglFramebuffer;if(I.isWebGLCubeRenderTarget&&We!==void 0&&(je=je[We]),je){de.bindFramebuffer(L.FRAMEBUFFER,je);try{let et=I.texture,ot=et.format,at=et.type;if(!he.textureFormatReadable(ot)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!he.textureTypeReadable(at)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}K>=0&&K<=I.width-ue&&oe>=0&&oe<=I.height-ee&&L.readPixels(K,oe,ue,ee,le.convert(ot),le.convert(at),Le)}finally{let et=T!==null?Se.get(T).__webglFramebuffer:null;de.bindFramebuffer(L.FRAMEBUFFER,et)}}},this.readRenderTargetPixelsAsync=async function(I,K,oe,ue,ee,Le,We){if(!(I&&I.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let je=Se.get(I).__webglFramebuffer;if(I.isWebGLCubeRenderTarget&&We!==void 0&&(je=je[We]),je){let et=I.texture,ot=et.format,at=et.type;if(!he.textureFormatReadable(ot))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!he.textureTypeReadable(at))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(K>=0&&K<=I.width-ue&&oe>=0&&oe<=I.height-ee){de.bindFramebuffer(L.FRAMEBUFFER,je);let Ke=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,Ke),L.bufferData(L.PIXEL_PACK_BUFFER,Le.byteLength,L.STREAM_READ),L.readPixels(K,oe,ue,ee,le.convert(ot),le.convert(at),0);let Tt=T!==null?Se.get(T).__webglFramebuffer:null;de.bindFramebuffer(L.FRAMEBUFFER,Tt);let xt=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await W1(L,xt,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,Ke),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,Le),L.deleteBuffer(Ke),L.deleteSync(xt),Le}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(I,K=null,oe=0){I.isTexture!==!0&&(_c("WebGLRenderer: copyFramebufferToTexture function signature has changed."),K=arguments[0]||null,I=arguments[1]);let ue=Math.pow(2,-oe),ee=Math.floor(I.image.width*ue),Le=Math.floor(I.image.height*ue),We=K!==null?K.x:0,je=K!==null?K.y:0;U.setTexture2D(I,0),L.copyTexSubImage2D(L.TEXTURE_2D,oe,0,0,We,je,ee,Le),de.unbindTexture()},this.copyTextureToTexture=function(I,K,oe=null,ue=null,ee=0){I.isTexture!==!0&&(_c("WebGLRenderer: copyTextureToTexture function signature has changed."),ue=arguments[0]||null,I=arguments[1],K=arguments[2],ee=arguments[3]||0,oe=null);let Le,We,je,et,ot,at;oe!==null?(Le=oe.max.x-oe.min.x,We=oe.max.y-oe.min.y,je=oe.min.x,et=oe.min.y):(Le=I.image.width,We=I.image.height,je=0,et=0),ue!==null?(ot=ue.x,at=ue.y):(ot=0,at=0);let Ke=le.convert(K.format),Tt=le.convert(K.type);U.setTexture2D(K,0),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,K.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,K.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,K.unpackAlignment);let xt=L.getParameter(L.UNPACK_ROW_LENGTH),Bt=L.getParameter(L.UNPACK_IMAGE_HEIGHT),Cn=L.getParameter(L.UNPACK_SKIP_PIXELS),Ht=L.getParameter(L.UNPACK_SKIP_ROWS),it=L.getParameter(L.UNPACK_SKIP_IMAGES),zt=I.isCompressedTexture?I.mipmaps[ee]:I.image;L.pixelStorei(L.UNPACK_ROW_LENGTH,zt.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,zt.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,je),L.pixelStorei(L.UNPACK_SKIP_ROWS,et),I.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,ee,ot,at,Le,We,Ke,Tt,zt.data):I.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,ee,ot,at,zt.width,zt.height,Ke,zt.data):L.texSubImage2D(L.TEXTURE_2D,ee,ot,at,Le,We,Ke,Tt,zt),L.pixelStorei(L.UNPACK_ROW_LENGTH,xt),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Bt),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Cn),L.pixelStorei(L.UNPACK_SKIP_ROWS,Ht),L.pixelStorei(L.UNPACK_SKIP_IMAGES,it),ee===0&&K.generateMipmaps&&L.generateMipmap(L.TEXTURE_2D),de.unbindTexture()},this.copyTextureToTexture3D=function(I,K,oe=null,ue=null,ee=0){I.isTexture!==!0&&(_c("WebGLRenderer: copyTextureToTexture3D function signature has changed."),oe=arguments[0]||null,ue=arguments[1]||null,I=arguments[2],K=arguments[3],ee=arguments[4]||0);let Le,We,je,et,ot,at,Ke,Tt,xt,Bt=I.isCompressedTexture?I.mipmaps[ee]:I.image;oe!==null?(Le=oe.max.x-oe.min.x,We=oe.max.y-oe.min.y,je=oe.max.z-oe.min.z,et=oe.min.x,ot=oe.min.y,at=oe.min.z):(Le=Bt.width,We=Bt.height,je=Bt.depth,et=0,ot=0,at=0),ue!==null?(Ke=ue.x,Tt=ue.y,xt=ue.z):(Ke=0,Tt=0,xt=0);let Cn=le.convert(K.format),Ht=le.convert(K.type),it;if(K.isData3DTexture)U.setTexture3D(K,0),it=L.TEXTURE_3D;else if(K.isDataArrayTexture||K.isCompressedArrayTexture)U.setTexture2DArray(K,0),it=L.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,K.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,K.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,K.unpackAlignment);let zt=L.getParameter(L.UNPACK_ROW_LENGTH),He=L.getParameter(L.UNPACK_IMAGE_HEIGHT),qe=L.getParameter(L.UNPACK_SKIP_PIXELS),Mn=L.getParameter(L.UNPACK_SKIP_ROWS),nn=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,Bt.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Bt.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,et),L.pixelStorei(L.UNPACK_SKIP_ROWS,ot),L.pixelStorei(L.UNPACK_SKIP_IMAGES,at),I.isDataTexture||I.isData3DTexture?L.texSubImage3D(it,ee,Ke,Tt,xt,Le,We,je,Cn,Ht,Bt.data):K.isCompressedArrayTexture?L.compressedTexSubImage3D(it,ee,Ke,Tt,xt,Le,We,je,Cn,Bt.data):L.texSubImage3D(it,ee,Ke,Tt,xt,Le,We,je,Cn,Ht,Bt),L.pixelStorei(L.UNPACK_ROW_LENGTH,zt),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,He),L.pixelStorei(L.UNPACK_SKIP_PIXELS,qe),L.pixelStorei(L.UNPACK_SKIP_ROWS,Mn),L.pixelStorei(L.UNPACK_SKIP_IMAGES,nn),ee===0&&K.generateMipmaps&&L.generateMipmap(it),de.unbindTexture()},this.initRenderTarget=function(I){Se.get(I).__webglFramebuffer===void 0&&U.setupRenderTarget(I)},this.initTexture=function(I){I.isCubeTexture?U.setTextureCube(I,0):I.isData3DTexture?U.setTexture3D(I,0):I.isDataArrayTexture||I.isCompressedArrayTexture?U.setTexture2DArray(I,0):U.setTexture2D(I,0),de.unbindTexture()},this.resetState=function(){C=0,A=0,T=null,de.reset(),Ve.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ds}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=e===hd?"display-p3":"srgb",t.unpackColorSpace=Xt.workingColorSpace===Qc?"display-p3":"srgb"}};var Nc=class i{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new dt(e),this.near=t,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Fc=class extends At{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new vi,this.environmentIntensity=1,this.environmentRotation=new vi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}};var Qi=class extends $n{constructor(e=null,t=1,n=1,s,r,o,a,c,l=ti,h=ti,p,f){super(null,o,a,c,l,h,s,r,p,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var cr=class extends un{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Br=new wt,bp=new wt,cc=[],Tp=new Ln,k2=new wt,ko=new ht,Vo=new Hs,vn=class extends ht{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new cr(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,k2)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Ln),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Br),Tp.copy(e.boundingBox).applyMatrix4(Br),this.boundingBox.union(Tp)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Hs),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Br),Vo.copy(e.boundingSphere).applyMatrix4(Br),this.boundingSphere.union(Vo)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(e,t){let n=this.matrixWorld,s=this.count;if(ko.geometry=this.geometry,ko.material=this.material,ko.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Vo.copy(this.boundingSphere),Vo.applyMatrix4(n),e.ray.intersectsSphere(Vo)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Br),bp.multiplyMatrices(n,Br),ko.matrixWorld=bp,ko.raycast(e,cc);for(let o=0,a=cc.length;o<a;o++){let c=cc[o];c.instanceId=r,c.object=this,t.push(c)}cc.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new cr(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){let n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Qi(new Float32Array(s*this.count),s,this.count,rd,$i));let r=this.morphTexture.source.data.data,o=0;for(let l=0;l<n.length;l++)o+=n[l];let a=this.geometry.morphTargetsRelative?1:1-o,c=s*e;r[c]=a,r.set(n,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var lr=class extends Ns{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new dt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Oc=new S,Bc=new S,Rp=new wt,Go=new ea,lc=new Hs,Ah=new S,Ap=new S,Du=class extends At{constructor(e=new Ct,t=new lr){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)Oc.fromBufferAttribute(t,s-1),Bc.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=Oc.distanceTo(Bc);e.setAttribute("lineDistance",new ct(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),lc.copy(n.boundingSphere),lc.applyMatrix4(s),lc.radius+=r,e.ray.intersectsSphere(lc)===!1)return;Rp.copy(s).invert(),Go.copy(e.ray).applyMatrix4(Rp);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,h=n.index,f=n.attributes.position;if(h!==null){let d=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let x=d,m=g-1;x<m;x+=l){let u=h.getX(x),E=h.getX(x+1),y=hc(this,e,Go,c,u,E);y&&t.push(y)}if(this.isLineLoop){let x=h.getX(g-1),m=h.getX(d),u=hc(this,e,Go,c,x,m);u&&t.push(u)}}else{let d=Math.max(0,o.start),g=Math.min(f.count,o.start+o.count);for(let x=d,m=g-1;x<m;x+=l){let u=hc(this,e,Go,c,x,x+1);u&&t.push(u)}if(this.isLineLoop){let x=hc(this,e,Go,c,g-1,d);x&&t.push(x)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function hc(i,e,t,n,s,r){let o=i.geometry.attributes.position;if(Oc.fromBufferAttribute(o,s),Bc.fromBufferAttribute(o,r),t.distanceSqToSegment(Oc,Bc,Ah,Ap)>n)return;Ah.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(Ah);if(!(c<e.near||c>e.far))return{distance:c,point:Ap.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}var Cp=new S,Pp=new S,to=class extends Du{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)Cp.fromBufferAttribute(t,s),Pp.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Cp.distanceTo(Pp);e.setAttribute("lineDistance",new ct(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var Ft=class extends $n{constructor(e,t,n,s,r,o,a,c,l){super(e,t,n,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}},_i=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let n=this.getLengths(),s=0,r=n.length,o;t?o=t:o=e*n[r-1];let a=0,c=r-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=n[s]-o,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===o)return s/(r-1);let h=n[s],f=n[s+1]-h,d=(o-h)/f;return(s+d)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),c=t||(o.isVector2?new Ne:new S);return c.copy(a).sub(o).normalize(),c}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){let n=new S,s=[],r=[],o=[],a=new S,c=new wt;for(let d=0;d<=e;d++){let g=d/e;s[d]=this.getTangentAt(g,new S)}r[0]=new S,o[0]=new S;let l=Number.MAX_VALUE,h=Math.abs(s[0].x),p=Math.abs(s[0].y),f=Math.abs(s[0].z);h<=l&&(l=h,n.set(1,0,0)),p<=l&&(l=p,n.set(0,1,0)),f<=l&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let d=1;d<=e;d++){if(r[d]=r[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(s[d-1],s[d]),a.length()>Number.EPSILON){a.normalize();let g=Math.acos(Sn(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(c.makeRotationAxis(a,g))}o[d].crossVectors(s[d],r[d])}if(t===!0){let d=Math.acos(Sn(r[0].dot(r[e]),-1,1));d/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(d=-d);for(let g=1;g<=e;g++)r[g].applyMatrix4(c.makeRotationAxis(s[g],d*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},sa=class extends _i{constructor(e=0,t=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(e,t=new Ne){let n=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+e*r,c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),p=Math.sin(this.aRotation),f=c-this.aX,d=l-this.aY;c=f*h-d*p+this.aX,l=f*p+d*h+this.aY}return n.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Uu=class extends sa{constructor(e,t,n,s,r,o){super(e,t,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function fd(){let i=0,e=0,t=0,n=0;function s(r,o,a,c){i=r,e=a,t=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){s(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,h,p){let f=(o-r)/l-(a-r)/(l+h)+(a-o)/h,d=(a-o)/h-(c-o)/(h+p)+(c-a)/p;f*=h,d*=h,s(o,a,f,d)},calc:function(r){let o=r*r,a=o*r;return i+e*r+t*o+n*a}}}var uc=new S,Ch=new fd,Ph=new fd,Ih=new fd,Jt=class extends _i{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new S){let n=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e,a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,h;this.closed||a>0?l=s[(a-1)%r]:(uc.subVectors(s[0],s[1]).add(s[0]),l=uc);let p=s[a%r],f=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(uc.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=uc),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,g=Math.pow(l.distanceToSquared(p),d),x=Math.pow(p.distanceToSquared(f),d),m=Math.pow(f.distanceToSquared(h),d);x<1e-4&&(x=1),g<1e-4&&(g=x),m<1e-4&&(m=x),Ch.initNonuniformCatmullRom(l.x,p.x,f.x,h.x,g,x,m),Ph.initNonuniformCatmullRom(l.y,p.y,f.y,h.y,g,x,m),Ih.initNonuniformCatmullRom(l.z,p.z,f.z,h.z,g,x,m)}else this.curveType==="catmullrom"&&(Ch.initCatmullRom(l.x,p.x,f.x,h.x,this.tension),Ph.initCatmullRom(l.y,p.y,f.y,h.y,this.tension),Ih.initCatmullRom(l.z,p.z,f.z,h.z,this.tension));return n.set(Ch.calc(c),Ph.calc(c),Ih.calc(c)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new S().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Ip(i,e,t,n,s){let r=(n-e)*.5,o=(s-t)*.5,a=i*i,c=i*a;return(2*t-2*n+r+o)*c+(-3*t+3*n-2*r-o)*a+r*i+t}function V2(i,e){let t=1-i;return t*t*e}function G2(i,e){return 2*(1-i)*i*e}function W2(i,e){return i*i*e}function $o(i,e,t,n){return V2(i,e)+G2(i,t)+W2(i,n)}function X2(i,e){let t=1-i;return t*t*t*e}function q2(i,e){let t=1-i;return 3*t*t*i*e}function Y2(i,e){return 3*(1-i)*i*i*e}function Z2(i,e){return i*i*i*e}function Ko(i,e,t,n,s){return X2(i,e)+q2(i,t)+Y2(i,n)+Z2(i,s)}var zc=class extends _i{constructor(e=new Ne,t=new Ne,n=new Ne,s=new Ne){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new Ne){let n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Ko(e,s.x,r.x,o.x,a.x),Ko(e,s.y,r.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},ra=class extends _i{constructor(e=new S,t=new S,n=new S,s=new S){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new S){let n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Ko(e,s.x,r.x,o.x,a.x),Ko(e,s.y,r.y,o.y,a.y),Ko(e,s.z,r.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},kc=class extends _i{constructor(e=new Ne,t=new Ne){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Ne){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Ne){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Hu=class extends _i{constructor(e=new S,t=new S){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new S){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new S){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Vc=class extends _i{constructor(e=new Ne,t=new Ne,n=new Ne){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new Ne){let n=t,s=this.v0,r=this.v1,o=this.v2;return n.set($o(e,s.x,r.x,o.x),$o(e,s.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Gc=class extends _i{constructor(e=new S,t=new S,n=new S){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new S){let n=t,s=this.v0,r=this.v1,o=this.v2;return n.set($o(e,s.x,r.x,o.x),$o(e,s.y,r.y,o.y),$o(e,s.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Wc=class extends _i{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Ne){let n=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,c=s[o===0?o:o-1],l=s[o],h=s[o>s.length-2?s.length-1:o+1],p=s[o>s.length-3?s.length-1:o+2];return n.set(Ip(a,c.x,l.x,h.x,p.x),Ip(a,c.y,l.y,h.y,p.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new Ne().fromArray(s))}return this}},Xc=Object.freeze({__proto__:null,ArcCurve:Uu,CatmullRomCurve3:Jt,CubicBezierCurve:zc,CubicBezierCurve3:ra,EllipseCurve:sa,LineCurve:kc,LineCurve3:Hu,QuadraticBezierCurve:Vc,QuadraticBezierCurve3:Gc,SplineCurve:Wc}),Nu=class extends _i{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Xc[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let o=s[r]-n,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,c=o.getPoints(a);for(let l=0;l<c.length;l++){let h=c[l];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(new Xc[s.type]().fromJSON(s))}return this}},Mi=class extends Nu{constructor(e){super(),this.type="Path",this.currentPoint=new Ne,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new kc(this.currentPoint.clone(),new Ne(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){let r=new Vc(this.currentPoint.clone(),new Ne(e,t),new Ne(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,o){let a=new zc(this.currentPoint.clone(),new Ne(e,t),new Ne(n,s),new Ne(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new Wc(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,o){let a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+a,t+c,n,s,r,o),this}absarc(e,t,n,s,r,o){return this.absellipse(e,t,n,n,s,r,o),this}ellipse(e,t,n,s,r,o,a,c){let l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+l,t+h,n,s,r,o,a,c),this}absellipse(e,t,n,s,r,o,a,c){let l=new sa(e,t,n,s,r,o,a,c);if(this.curves.length>0){let p=l.getPoint(0);p.equals(this.currentPoint)||this.lineTo(p.x,p.y)}this.curves.push(l);let h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},Fs=class i extends Ct{constructor(e=[new Ne(0,-.5),new Ne(.5,0),new Ne(0,.5)],t=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:s},t=Math.floor(t),s=Sn(s,0,Math.PI*2);let r=[],o=[],a=[],c=[],l=[],h=1/t,p=new S,f=new Ne,d=new S,g=new S,x=new S,m=0,u=0;for(let E=0;E<=e.length-1;E++)switch(E){case 0:m=e[E+1].x-e[E].x,u=e[E+1].y-e[E].y,d.x=u*1,d.y=-m,d.z=u*0,x.copy(d),d.normalize(),c.push(d.x,d.y,d.z);break;case e.length-1:c.push(x.x,x.y,x.z);break;default:m=e[E+1].x-e[E].x,u=e[E+1].y-e[E].y,d.x=u*1,d.y=-m,d.z=u*0,g.copy(d),d.x+=x.x,d.y+=x.y,d.z+=x.z,d.normalize(),c.push(d.x,d.y,d.z),x.copy(g)}for(let E=0;E<=t;E++){let y=n+E*h*s,M=Math.sin(y),C=Math.cos(y);for(let A=0;A<=e.length-1;A++){p.x=e[A].x*M,p.y=e[A].y,p.z=e[A].x*C,o.push(p.x,p.y,p.z),f.x=E/t,f.y=A/(e.length-1),a.push(f.x,f.y);let T=c[3*A+0]*M,P=c[3*A+1],O=c[3*A+0]*C;l.push(T,P,O)}}for(let E=0;E<t;E++)for(let y=0;y<e.length-1;y++){let M=y+E*e.length,C=M,A=M+e.length,T=M+e.length+1,P=M+1;r.push(C,A,P),r.push(T,P,A)}this.setIndex(r),this.setAttribute("position",new ct(o,3)),this.setAttribute("uv",new ct(a,2)),this.setAttribute("normal",new ct(l,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.points,e.segments,e.phiStart,e.phiLength)}};var Ei=class i extends Ct{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);let r=[],o=[],a=[],c=[],l=new S,h=new Ne;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let p=0,f=3;p<=t;p++,f+=3){let d=n+p/t*s;l.x=e*Math.cos(d),l.y=e*Math.sin(d),o.push(l.x,l.y,l.z),a.push(0,0,1),h.x=(o[f]/e+1)/2,h.y=(o[f+1]/e+1)/2,c.push(h.x,h.y)}for(let p=1;p<=t;p++)r.push(p,p+1,0);this.setIndex(r),this.setAttribute("position",new ct(o,3)),this.setAttribute("normal",new ct(a,3)),this.setAttribute("uv",new ct(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.segments,e.thetaStart,e.thetaLength)}},Yt=class i extends Ct{constructor(e=1,t=1,n=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};let l=this;s=Math.floor(s),r=Math.floor(r);let h=[],p=[],f=[],d=[],g=0,x=[],m=n/2,u=0;E(),o===!1&&(e>0&&y(!0),t>0&&y(!1)),this.setIndex(h),this.setAttribute("position",new ct(p,3)),this.setAttribute("normal",new ct(f,3)),this.setAttribute("uv",new ct(d,2));function E(){let M=new S,C=new S,A=0,T=(t-e)/n;for(let P=0;P<=r;P++){let O=[],v=P/r,w=v*(t-e)+e;for(let W=0;W<=s;W++){let z=W/s,B=z*c+a,H=Math.sin(B),Z=Math.cos(B);C.x=w*H,C.y=-v*n+m,C.z=w*Z,p.push(C.x,C.y,C.z),M.set(H,T,Z).normalize(),f.push(M.x,M.y,M.z),d.push(z,1-v),O.push(g++)}x.push(O)}for(let P=0;P<s;P++)for(let O=0;O<r;O++){let v=x[O][P],w=x[O+1][P],W=x[O+1][P+1],z=x[O][P+1];e>0&&(h.push(v,w,z),A+=3),t>0&&(h.push(w,W,z),A+=3)}l.addGroup(u,A,0),u+=A}function y(M){let C=g,A=new Ne,T=new S,P=0,O=M===!0?e:t,v=M===!0?1:-1;for(let W=1;W<=s;W++)p.push(0,m*v,0),f.push(0,v,0),d.push(.5,.5),g++;let w=g;for(let W=0;W<=s;W++){let B=W/s*c+a,H=Math.cos(B),Z=Math.sin(B);T.x=O*Z,T.y=m*v,T.z=O*H,p.push(T.x,T.y,T.z),f.push(0,v,0),A.x=H*.5+.5,A.y=Z*.5*v+.5,d.push(A.x,A.y),g++}for(let W=0;W<s;W++){let z=C+W,B=w+W;M===!0?h.push(B,B+1,z):h.push(B+1,B,z),P+=3}l.addGroup(u,P,M===!0?1:2),u+=P}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Os=class i extends Yt{constructor(e=1,t=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Fu=class i extends Ct{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};let r=[],o=[];a(s),l(n),h(),this.setAttribute("position",new ct(r,3)),this.setAttribute("normal",new ct(r.slice(),3)),this.setAttribute("uv",new ct(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(E){let y=new S,M=new S,C=new S;for(let A=0;A<t.length;A+=3)d(t[A+0],y),d(t[A+1],M),d(t[A+2],C),c(y,M,C,E)}function c(E,y,M,C){let A=C+1,T=[];for(let P=0;P<=A;P++){T[P]=[];let O=E.clone().lerp(M,P/A),v=y.clone().lerp(M,P/A),w=A-P;for(let W=0;W<=w;W++)W===0&&P===A?T[P][W]=O:T[P][W]=O.clone().lerp(v,W/w)}for(let P=0;P<A;P++)for(let O=0;O<2*(A-P)-1;O++){let v=Math.floor(O/2);O%2===0?(f(T[P][v+1]),f(T[P+1][v]),f(T[P][v])):(f(T[P][v+1]),f(T[P+1][v+1]),f(T[P+1][v]))}}function l(E){let y=new S;for(let M=0;M<r.length;M+=3)y.x=r[M+0],y.y=r[M+1],y.z=r[M+2],y.normalize().multiplyScalar(E),r[M+0]=y.x,r[M+1]=y.y,r[M+2]=y.z}function h(){let E=new S;for(let y=0;y<r.length;y+=3){E.x=r[y+0],E.y=r[y+1],E.z=r[y+2];let M=m(E)/2/Math.PI+.5,C=u(E)/Math.PI+.5;o.push(M,1-C)}g(),p()}function p(){for(let E=0;E<o.length;E+=6){let y=o[E+0],M=o[E+2],C=o[E+4],A=Math.max(y,M,C),T=Math.min(y,M,C);A>.9&&T<.1&&(y<.2&&(o[E+0]+=1),M<.2&&(o[E+2]+=1),C<.2&&(o[E+4]+=1))}}function f(E){r.push(E.x,E.y,E.z)}function d(E,y){let M=E*3;y.x=e[M+0],y.y=e[M+1],y.z=e[M+2]}function g(){let E=new S,y=new S,M=new S,C=new S,A=new Ne,T=new Ne,P=new Ne;for(let O=0,v=0;O<r.length;O+=9,v+=6){E.set(r[O+0],r[O+1],r[O+2]),y.set(r[O+3],r[O+4],r[O+5]),M.set(r[O+6],r[O+7],r[O+8]),A.set(o[v+0],o[v+1]),T.set(o[v+2],o[v+3]),P.set(o[v+4],o[v+5]),C.copy(E).add(y).add(M).divideScalar(3);let w=m(C);x(A,v+0,E,w),x(T,v+2,y,w),x(P,v+4,M,w)}}function x(E,y,M,C){C<0&&E.x===1&&(o[y]=E.x-1),M.x===0&&M.z===0&&(o[y]=C/2/Math.PI+.5)}function m(E){return Math.atan2(E.z,-E.x)}function u(E){return Math.atan2(-E.y,Math.sqrt(E.x*E.x+E.z*E.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.vertices,e.indices,e.radius,e.details)}};var St=class extends Mi{constructor(e){super(e),this.uuid=fr(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(new Mi().fromJSON(s))}return this}},$2={triangulate:function(i,e,t=2){let n=e&&e.length,s=n?e[0]*t:i.length,r=h0(i,0,s,t,!0),o=[];if(!r||r.next===r.prev)return o;let a,c,l,h,p,f,d;if(n&&(r=eM(i,e,r,t)),i.length>80*t){a=l=i[0],c=h=i[1];for(let g=t;g<s;g+=t)p=i[g],f=i[g+1],p<a&&(a=p),f<c&&(c=f),p>l&&(l=p),f>h&&(h=f);d=Math.max(l-a,h-c),d=d!==0?32767/d:0}return oa(r,o,t,a,c,d,0),o}};function h0(i,e,t,n,s){let r,o;if(s===uM(i,e,t,n)>0)for(r=e;r<t;r+=n)o=Lp(r,i[r],i[r+1],o);else for(r=t-n;r>=e;r-=n)o=Lp(r,i[r],i[r+1],o);return o&&el(o,o.next)&&(ca(o),o=o.next),o}function hr(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(el(t,t.next)||hn(t.prev,t,t.next)===0)){if(ca(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function oa(i,e,t,n,s,r,o){if(!i)return;!o&&r&&rM(i,n,s,r);let a=i,c,l;for(;i.prev!==i.next;){if(c=i.prev,l=i.next,r?J2(i,n,s,r):K2(i)){e.push(c.i/t|0),e.push(i.i/t|0),e.push(l.i/t|0),ca(i),i=l.next,a=l.next;continue}if(i=l,i===a){o?o===1?(i=Q2(hr(i),e,t),oa(i,e,t,n,s,r,2)):o===2&&j2(i,e,t,n,s,r):oa(hr(i),e,t,n,s,r,1);break}}}function K2(i){let e=i.prev,t=i,n=i.next;if(hn(e,t,n)>=0)return!1;let s=e.x,r=t.x,o=n.x,a=e.y,c=t.y,l=n.y,h=s<r?s<o?s:o:r<o?r:o,p=a<c?a<l?a:l:c<l?c:l,f=s>r?s>o?s:o:r>o?r:o,d=a>c?a>l?a:l:c>l?c:l,g=n.next;for(;g!==e;){if(g.x>=h&&g.x<=f&&g.y>=p&&g.y<=d&&Vr(s,a,r,c,o,l,g.x,g.y)&&hn(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function J2(i,e,t,n){let s=i.prev,r=i,o=i.next;if(hn(s,r,o)>=0)return!1;let a=s.x,c=r.x,l=o.x,h=s.y,p=r.y,f=o.y,d=a<c?a<l?a:l:c<l?c:l,g=h<p?h<f?h:f:p<f?p:f,x=a>c?a>l?a:l:c>l?c:l,m=h>p?h>f?h:f:p>f?p:f,u=Ou(d,g,e,t,n),E=Ou(x,m,e,t,n),y=i.prevZ,M=i.nextZ;for(;y&&y.z>=u&&M&&M.z<=E;){if(y.x>=d&&y.x<=x&&y.y>=g&&y.y<=m&&y!==s&&y!==o&&Vr(a,h,c,p,l,f,y.x,y.y)&&hn(y.prev,y,y.next)>=0||(y=y.prevZ,M.x>=d&&M.x<=x&&M.y>=g&&M.y<=m&&M!==s&&M!==o&&Vr(a,h,c,p,l,f,M.x,M.y)&&hn(M.prev,M,M.next)>=0))return!1;M=M.nextZ}for(;y&&y.z>=u;){if(y.x>=d&&y.x<=x&&y.y>=g&&y.y<=m&&y!==s&&y!==o&&Vr(a,h,c,p,l,f,y.x,y.y)&&hn(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;M&&M.z<=E;){if(M.x>=d&&M.x<=x&&M.y>=g&&M.y<=m&&M!==s&&M!==o&&Vr(a,h,c,p,l,f,M.x,M.y)&&hn(M.prev,M,M.next)>=0)return!1;M=M.nextZ}return!0}function Q2(i,e,t){let n=i;do{let s=n.prev,r=n.next.next;!el(s,r)&&u0(s,n,n.next,r)&&aa(s,r)&&aa(r,s)&&(e.push(s.i/t|0),e.push(n.i/t|0),e.push(r.i/t|0),ca(n),ca(n.next),n=i=r),n=n.next}while(n!==i);return hr(n)}function j2(i,e,t,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&cM(o,a)){let c=d0(o,a);o=hr(o,o.next),c=hr(c,c.next),oa(o,e,t,n,s,r,0),oa(c,e,t,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function eM(i,e,t,n){let s=[],r,o,a,c,l;for(r=0,o=e.length;r<o;r++)a=e[r]*n,c=r<o-1?e[r+1]*n:i.length,l=h0(i,a,c,n,!1),l===l.next&&(l.steiner=!0),s.push(aM(l));for(s.sort(tM),r=0;r<s.length;r++)t=nM(s[r],t);return t}function tM(i,e){return i.x-e.x}function nM(i,e){let t=iM(i,e);if(!t)return e;let n=d0(t,i);return hr(n,n.next),hr(t,t.next)}function iM(i,e){let t=e,n=-1/0,s,r=i.x,o=i.y;do{if(o<=t.y&&o>=t.next.y&&t.next.y!==t.y){let f=t.x+(o-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(f<=r&&f>n&&(n=f,s=t.x<t.next.x?t:t.next,f===r))return s}t=t.next}while(t!==e);if(!s)return null;let a=s,c=s.x,l=s.y,h=1/0,p;t=s;do r>=t.x&&t.x>=c&&r!==t.x&&Vr(o<l?r:n,o,c,l,o<l?n:r,o,t.x,t.y)&&(p=Math.abs(o-t.y)/(r-t.x),aa(t,i)&&(p<h||p===h&&(t.x>s.x||t.x===s.x&&sM(s,t)))&&(s=t,h=p)),t=t.next;while(t!==a);return s}function sM(i,e){return hn(i.prev,i,e.prev)<0&&hn(e.next,i,i.next)<0}function rM(i,e,t,n){let s=i;do s.z===0&&(s.z=Ou(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,oM(s)}function oM(i){let e,t,n,s,r,o,a,c,l=1;do{for(t=i,i=null,r=null,o=0;t;){for(o++,n=t,a=0,e=0;e<l&&(a++,n=n.nextZ,!!n);e++);for(c=l;a>0||c>0&&n;)a!==0&&(c===0||!n||t.z<=n.z)?(s=t,t=t.nextZ,a--):(s=n,n=n.nextZ,c--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;t=n}r.nextZ=null,l*=2}while(o>1);return i}function Ou(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function aM(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function Vr(i,e,t,n,s,r,o,a){return(s-o)*(e-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(s-o)*(n-a)}function cM(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!lM(i,e)&&(aa(i,e)&&aa(e,i)&&hM(i,e)&&(hn(i.prev,i,e.prev)||hn(i,e.prev,e))||el(i,e)&&hn(i.prev,i,i.next)>0&&hn(e.prev,e,e.next)>0)}function hn(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function el(i,e){return i.x===e.x&&i.y===e.y}function u0(i,e,t,n){let s=fc(hn(i,e,t)),r=fc(hn(i,e,n)),o=fc(hn(t,n,i)),a=fc(hn(t,n,e));return!!(s!==r&&o!==a||s===0&&dc(i,t,e)||r===0&&dc(i,n,e)||o===0&&dc(t,i,n)||a===0&&dc(t,e,n))}function dc(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function fc(i){return i>0?1:i<0?-1:0}function lM(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&u0(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function aa(i,e){return hn(i.prev,i,i.next)<0?hn(i,e,i.next)>=0&&hn(i,i.prev,e)>=0:hn(i,e,i.prev)<0||hn(i,i.next,e)<0}function hM(i,e){let t=i,n=!1,s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function d0(i,e){let t=new Bu(i.i,i.x,i.y),n=new Bu(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function Lp(i,e,t,n){let s=new Bu(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function ca(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Bu(i,e,t){this.i=i,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function uM(i,e,t,n){let s=0;for(let r=e,o=t-n;r<t;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}var Ds=class i{static area(e){let t=e.length,n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],s=[],r=[];Dp(e),Up(n,e);let o=e.length;t.forEach(Dp);for(let c=0;c<t.length;c++)s.push(o),o+=t[c].length,Up(n,t[c]);let a=$2.triangulate(n,s);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}};function Dp(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function Up(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}var on=class i extends Ct{constructor(e=new St([new Ne(.5,.5),new Ne(-.5,.5),new Ne(-.5,-.5),new Ne(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,s=[],r=[];for(let a=0,c=e.length;a<c;a++){let l=e[a];o(l)}this.setAttribute("position",new ct(s,3)),this.setAttribute("uv",new ct(r,2)),this.computeVertexNormals();function o(a){let c=[],l=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,p=t.depth!==void 0?t.depth:1,f=t.bevelEnabled!==void 0?t.bevelEnabled:!0,d=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:d-.1,x=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3,u=t.extrudePath,E=t.UVGenerator!==void 0?t.UVGenerator:dM,y,M=!1,C,A,T,P;u&&(y=u.getSpacedPoints(h),M=!0,f=!1,C=u.computeFrenetFrames(h,!1),A=new S,T=new S,P=new S),f||(m=0,d=0,g=0,x=0);let O=a.extractPoints(l),v=O.shape,w=O.holes;if(!Ds.isClockWise(v)){v=v.reverse();for(let te=0,L=w.length;te<L;te++){let _e=w[te];Ds.isClockWise(_e)&&(w[te]=_e.reverse())}}let z=Ds.triangulateShape(v,w),B=v;for(let te=0,L=w.length;te<L;te++){let _e=w[te];v=v.concat(_e)}function H(te,L,_e){return L||console.error("THREE.ExtrudeGeometry: vec does not exist"),te.clone().addScaledVector(L,_e)}let Z=v.length,me=z.length;function Q(te,L,_e){let se,he,de,Me=te.x-L.x,Se=te.y-L.y,U=_e.x-te.x,b=_e.y-te.y,j=Me*Me+Se*Se,pe=Me*b-Se*U;if(Math.abs(pe)>Number.EPSILON){let Te=Math.sqrt(j),Ee=Math.sqrt(U*U+b*b),Xe=L.x-Se/Te,Oe=L.y+Me/Te,ke=_e.x-b/Ee,vt=_e.y+U/Ee,De=((ke-Xe)*b-(vt-Oe)*U)/(Me*b-Se*U);se=Xe+Me*De-te.x,he=Oe+Se*De-te.y;let J=se*se+he*he;if(J<=2)return new Ne(se,he);de=Math.sqrt(J/2)}else{let Te=!1;Me>Number.EPSILON?U>Number.EPSILON&&(Te=!0):Me<-Number.EPSILON?U<-Number.EPSILON&&(Te=!0):Math.sign(Se)===Math.sign(b)&&(Te=!0),Te?(se=-Se,he=Me,de=Math.sqrt(j)):(se=Me,he=Se,de=Math.sqrt(j/2))}return new Ne(se/de,he/de)}let ge=[];for(let te=0,L=B.length,_e=L-1,se=te+1;te<L;te++,_e++,se++)_e===L&&(_e=0),se===L&&(se=0),ge[te]=Q(B[te],B[_e],B[se]);let N=[],ae,ne=ge.concat();for(let te=0,L=w.length;te<L;te++){let _e=w[te];ae=[];for(let se=0,he=_e.length,de=he-1,Me=se+1;se<he;se++,de++,Me++)de===he&&(de=0),Me===he&&(Me=0),ae[se]=Q(_e[se],_e[de],_e[Me]);N.push(ae),ne=ne.concat(ae)}for(let te=0;te<m;te++){let L=te/m,_e=d*Math.cos(L*Math.PI/2),se=g*Math.sin(L*Math.PI/2)+x;for(let he=0,de=B.length;he<de;he++){let Me=H(B[he],ge[he],se);V(Me.x,Me.y,-_e)}for(let he=0,de=w.length;he<de;he++){let Me=w[he];ae=N[he];for(let Se=0,U=Me.length;Se<U;Se++){let b=H(Me[Se],ae[Se],se);V(b.x,b.y,-_e)}}}let ie=g+x;for(let te=0;te<Z;te++){let L=f?H(v[te],ne[te],ie):v[te];M?(T.copy(C.normals[0]).multiplyScalar(L.x),A.copy(C.binormals[0]).multiplyScalar(L.y),P.copy(y[0]).add(T).add(A),V(P.x,P.y,P.z)):V(L.x,L.y,0)}for(let te=1;te<=h;te++)for(let L=0;L<Z;L++){let _e=f?H(v[L],ne[L],ie):v[L];M?(T.copy(C.normals[te]).multiplyScalar(_e.x),A.copy(C.binormals[te]).multiplyScalar(_e.y),P.copy(y[te]).add(T).add(A),V(P.x,P.y,P.z)):V(_e.x,_e.y,p/h*te)}for(let te=m-1;te>=0;te--){let L=te/m,_e=d*Math.cos(L*Math.PI/2),se=g*Math.sin(L*Math.PI/2)+x;for(let he=0,de=B.length;he<de;he++){let Me=H(B[he],ge[he],se);V(Me.x,Me.y,p+_e)}for(let he=0,de=w.length;he<de;he++){let Me=w[he];ae=N[he];for(let Se=0,U=Me.length;Se<U;Se++){let b=H(Me[Se],ae[Se],se);M?V(b.x,b.y+y[h-1].y,y[h-1].x+_e):V(b.x,b.y,p+_e)}}}F(),re();function F(){let te=s.length/3;if(f){let L=0,_e=Z*L;for(let se=0;se<me;se++){let he=z[se];$(he[2]+_e,he[1]+_e,he[0]+_e)}L=h+m*2,_e=Z*L;for(let se=0;se<me;se++){let he=z[se];$(he[0]+_e,he[1]+_e,he[2]+_e)}}else{for(let L=0;L<me;L++){let _e=z[L];$(_e[2],_e[1],_e[0])}for(let L=0;L<me;L++){let _e=z[L];$(_e[0]+Z*h,_e[1]+Z*h,_e[2]+Z*h)}}n.addGroup(te,s.length/3-te,0)}function re(){let te=s.length/3,L=0;X(B,L),L+=B.length;for(let _e=0,se=w.length;_e<se;_e++){let he=w[_e];X(he,L),L+=he.length}n.addGroup(te,s.length/3-te,1)}function X(te,L){let _e=te.length;for(;--_e>=0;){let se=_e,he=_e-1;he<0&&(he=te.length-1);for(let de=0,Me=h+m*2;de<Me;de++){let Se=Z*de,U=Z*(de+1),b=L+se+Se,j=L+he+Se,pe=L+he+U,Te=L+se+U;xe(b,j,pe,Te)}}}function V(te,L,_e){c.push(te),c.push(L),c.push(_e)}function $(te,L,_e){Ce(te),Ce(L),Ce(_e);let se=s.length/3,he=E.generateTopUV(n,s,se-3,se-2,se-1);ve(he[0]),ve(he[1]),ve(he[2])}function xe(te,L,_e,se){Ce(te),Ce(L),Ce(se),Ce(L),Ce(_e),Ce(se);let he=s.length/3,de=E.generateSideWallUV(n,s,he-6,he-3,he-2,he-1);ve(de[0]),ve(de[1]),ve(de[3]),ve(de[1]),ve(de[2]),ve(de[3])}function Ce(te){s.push(c[te*3+0]),s.push(c[te*3+1]),s.push(c[te*3+2])}function ve(te){r.push(te.x),r.push(te.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return fM(t,n,e)}static fromJSON(e,t){let n=[];for(let r=0,o=e.shapes.length;r<o;r++){let a=t[e.shapes[r]];n.push(a)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new Xc[s.type]().fromJSON(s)),new i(n,e.options)}},dM={generateTopUV:function(i,e,t,n,s){let r=e[t*3],o=e[t*3+1],a=e[n*3],c=e[n*3+1],l=e[s*3],h=e[s*3+1];return[new Ne(r,o),new Ne(a,c),new Ne(l,h)]},generateSideWallUV:function(i,e,t,n,s,r){let o=e[t*3],a=e[t*3+1],c=e[t*3+2],l=e[n*3],h=e[n*3+1],p=e[n*3+2],f=e[s*3],d=e[s*3+1],g=e[s*3+2],x=e[r*3],m=e[r*3+1],u=e[r*3+2];return Math.abs(a-h)<Math.abs(o-l)?[new Ne(o,1-c),new Ne(l,1-p),new Ne(f,1-g),new Ne(x,1-u)]:[new Ne(a,1-c),new Ne(h,1-p),new Ne(d,1-g),new Ne(m,1-u)]}};function fM(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];t.shapes.push(r.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var qc=class i extends Fu{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}};var Bs=class i extends Ct{constructor(e=.5,t=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);let a=[],c=[],l=[],h=[],p=e,f=(t-e)/s,d=new S,g=new Ne;for(let x=0;x<=s;x++){for(let m=0;m<=n;m++){let u=r+m/n*o;d.x=p*Math.cos(u),d.y=p*Math.sin(u),c.push(d.x,d.y,d.z),l.push(0,0,1),g.x=(d.x/t+1)/2,g.y=(d.y/t+1)/2,h.push(g.x,g.y)}p+=f}for(let x=0;x<s;x++){let m=x*(n+1);for(let u=0;u<n;u++){let E=u+m,y=E,M=E+n+1,C=E+n+2,A=E+1;a.push(y,M,A),a.push(M,C,A)}}this.setIndex(a),this.setAttribute("position",new ct(c,3)),this.setAttribute("normal",new ct(l,3)),this.setAttribute("uv",new ct(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}},Bi=class i extends Ct{constructor(e=new St([new Ne(0,.5),new Ne(-.5,-.5),new Ne(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let n=[],s=[],r=[],o=[],a=0,c=0;if(Array.isArray(e)===!1)l(e);else for(let h=0;h<e.length;h++)l(e[h]),this.addGroup(a,c,h),a+=c,c=0;this.setIndex(n),this.setAttribute("position",new ct(s,3)),this.setAttribute("normal",new ct(r,3)),this.setAttribute("uv",new ct(o,2));function l(h){let p=s.length/3,f=h.extractPoints(t),d=f.shape,g=f.holes;Ds.isClockWise(d)===!1&&(d=d.reverse());for(let m=0,u=g.length;m<u;m++){let E=g[m];Ds.isClockWise(E)===!0&&(g[m]=E.reverse())}let x=Ds.triangulateShape(d,g);for(let m=0,u=g.length;m<u;m++){let E=g[m];d=d.concat(E)}for(let m=0,u=d.length;m<u;m++){let E=d[m];s.push(E.x,E.y,0),r.push(0,0,1),o.push(E.x,E.y)}for(let m=0,u=x.length;m<u;m++){let E=x[m],y=E[0]+p,M=E[1]+p,C=E[2]+p;n.push(y,M,C),c+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return pM(t,e)}static fromJSON(e,t){let n=[];for(let s=0,r=e.shapes.length;s<r;s++){let o=t[e.shapes[s]];n.push(o)}return new i(n,e.curveSegments)}};function pM(i,e){if(e.shapes=[],Array.isArray(i))for(let t=0,n=i.length;t<n;t++){let s=i[t];e.shapes.push(s.uuid)}else e.shapes.push(i.uuid);return e}var Zt=class i extends Ct{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let c=Math.min(o+a,Math.PI),l=0,h=[],p=new S,f=new S,d=[],g=[],x=[],m=[];for(let u=0;u<=n;u++){let E=[],y=u/n,M=0;u===0&&o===0?M=.5/t:u===n&&c===Math.PI&&(M=-.5/t);for(let C=0;C<=t;C++){let A=C/t;p.x=-e*Math.cos(s+A*r)*Math.sin(o+y*a),p.y=e*Math.cos(o+y*a),p.z=e*Math.sin(s+A*r)*Math.sin(o+y*a),g.push(p.x,p.y,p.z),f.copy(p).normalize(),x.push(f.x,f.y,f.z),m.push(A+M,1-y),E.push(l++)}h.push(E)}for(let u=0;u<n;u++)for(let E=0;E<t;E++){let y=h[u][E+1],M=h[u][E],C=h[u+1][E],A=h[u+1][E+1];(u!==0||o>0)&&d.push(y,M,A),(u!==n-1||c<Math.PI)&&d.push(M,C,A)}this.setIndex(d),this.setAttribute("position",new ct(g,3)),this.setAttribute("normal",new ct(x,3)),this.setAttribute("uv",new ct(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Qt=class i extends Ct{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);let o=[],a=[],c=[],l=[],h=new S,p=new S,f=new S;for(let d=0;d<=n;d++)for(let g=0;g<=s;g++){let x=g/s*r,m=d/n*Math.PI*2;p.x=(e+t*Math.cos(m))*Math.cos(x),p.y=(e+t*Math.cos(m))*Math.sin(x),p.z=t*Math.sin(m),a.push(p.x,p.y,p.z),h.x=e*Math.cos(x),h.y=e*Math.sin(x),f.subVectors(p,h).normalize(),c.push(f.x,f.y,f.z),l.push(g/s),l.push(d/n)}for(let d=1;d<=n;d++)for(let g=1;g<=s;g++){let x=(s+1)*d+g-1,m=(s+1)*(d-1)+g-1,u=(s+1)*(d-1)+g,E=(s+1)*d+g;o.push(x,m,E),o.push(m,u,E)}this.setIndex(o),this.setAttribute("position",new ct(a,3)),this.setAttribute("normal",new ct(c,3)),this.setAttribute("uv",new ct(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}};var dn=class i extends Ct{constructor(e=new Gc(new S(-1,-1,0),new S(-1,1,0),new S(1,1,0)),t=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:s,closed:r};let o=e.computeFrenetFrames(t,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new S,c=new S,l=new Ne,h=new S,p=[],f=[],d=[],g=[];x(),this.setIndex(g),this.setAttribute("position",new ct(p,3)),this.setAttribute("normal",new ct(f,3)),this.setAttribute("uv",new ct(d,2));function x(){for(let y=0;y<t;y++)m(y);m(r===!1?t:0),E(),u()}function m(y){h=e.getPointAt(y/t,h);let M=o.normals[y],C=o.binormals[y];for(let A=0;A<=s;A++){let T=A/s*Math.PI*2,P=Math.sin(T),O=-Math.cos(T);c.x=O*M.x+P*C.x,c.y=O*M.y+P*C.y,c.z=O*M.z+P*C.z,c.normalize(),f.push(c.x,c.y,c.z),a.x=h.x+n*c.x,a.y=h.y+n*c.y,a.z=h.z+n*c.z,p.push(a.x,a.y,a.z)}}function u(){for(let y=1;y<=t;y++)for(let M=1;M<=s;M++){let C=(s+1)*(y-1)+(M-1),A=(s+1)*y+(M-1),T=(s+1)*y+M,P=(s+1)*(y-1)+M;g.push(C,A,P),g.push(A,T,P)}}function E(){for(let y=0;y<=t;y++)for(let M=0;M<=s;M++)l.x=y/t,l.y=M/s,d.push(l.x,l.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new i(new Xc[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}};var Be=class extends Ns{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new dt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new dt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=e0,this.normalScale=new Ne(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new vi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Vt=class extends Be{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ne(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Sn(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new dt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new dt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new dt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};function pc(i,e,t){return!i||!t&&i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function mM(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var no=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=t[++n],e<s)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(n=2,r=a);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},zu=class extends no{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Lf,endingEnd:Lf}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],c=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Df:r=e,a=2*t-n;break;case Uf:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Df:o=e,c=2*n-t;break;case Uf:o=1,c=n+s[1]-s[0];break;default:o=e-1,c=t}let l=(n-t)*.5,h=this.valueSize;this._weightPrev=l/(t-a),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=this._offsetPrev,p=this._offsetNext,f=this._weightPrev,d=this._weightNext,g=(n-t)/(s-t),x=g*g,m=x*g,u=-f*m+2*f*x-f*g,E=(1+f)*m+(-1.5-2*f)*x+(-.5+f)*g+1,y=(-1-d)*m+(1.5+d)*x+.5*g,M=d*m-d*x;for(let C=0;C!==a;++C)r[C]=u*o[h+C]+E*o[l+C]+y*o[c+C]+M*o[p+C];return r}},ku=class extends no{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=(n-t)/(s-t),p=1-h;for(let f=0;f!==a;++f)r[f]=o[l+f]*p+o[c+f]*h;return r}},Vu=class extends no{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},zi=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=pc(t,this.TimeBufferType),this.values=pc(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:pc(e.times,Array),values:pc(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Vu(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new ku(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new zu(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Ec:t=this.InterpolantFactoryMethodDiscrete;break;case xu:t=this.InterpolantFactoryMethodLinear;break;case eh:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ec;case this.InterpolantFactoryMethodLinear:return xu;case this.InterpolantFactoryMethodSmooth:return eh}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let c=n[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),e=!1;break}o=c}if(s!==void 0&&mM(s))for(let a=0,c=s.length;a!==c;++a){let l=s[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===eh,r=e.length-1,o=1;for(let a=1;a<r;++a){let c=!1,l=e[a],h=e[a+1];if(l!==h&&(a!==1||l!==e[0]))if(s)c=!0;else{let p=a*n,f=p-n,d=p+n;for(let g=0;g!==n;++g){let x=t[p+g];if(x!==t[f+g]||x!==t[d+g]){c=!0;break}}}if(c){if(a!==o){e[o]=e[a];let p=a*n,f=o*n;for(let d=0;d!==n;++d)t[f+d]=t[p+d]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,c=o*n,l=0;l!==n;++l)t[c+l]=t[a+l];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};zi.prototype.TimeBufferType=Float32Array;zi.prototype.ValueBufferType=Float32Array;zi.prototype.DefaultInterpolation=xu;var ur=class extends zi{constructor(e,t,n){super(e,t,n)}};ur.prototype.ValueTypeName="bool";ur.prototype.ValueBufferType=Array;ur.prototype.DefaultInterpolation=Ec;ur.prototype.InterpolantFactoryMethodLinear=void 0;ur.prototype.InterpolantFactoryMethodSmooth=void 0;var Gu=class extends zi{};Gu.prototype.ValueTypeName="color";var Wu=class extends zi{};Wu.prototype.ValueTypeName="number";var Xu=class extends no{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-t)/(s-t),l=e*a;for(let h=l+a;l!==h;l+=4)pt.slerpFlat(r,0,o,l-a,o,l,c);return r}},Yc=class extends zi{InterpolantFactoryMethodLinear(e){return new Xu(this.times,this.values,this.getValueSize(),e)}};Yc.prototype.ValueTypeName="quaternion";Yc.prototype.InterpolantFactoryMethodSmooth=void 0;var dr=class extends zi{constructor(e,t,n){super(e,t,n)}};dr.prototype.ValueTypeName="string";dr.prototype.ValueBufferType=Array;dr.prototype.DefaultInterpolation=Ec;dr.prototype.InterpolantFactoryMethodLinear=void 0;dr.prototype.InterpolantFactoryMethodSmooth=void 0;var qu=class extends zi{};qu.prototype.ValueTypeName="vector";var Hp={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}},Yu=class{constructor(e,t,n){let s=this,r=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,p){return l.push(h,p),this},this.removeHandler=function(h){let p=l.indexOf(h);return p!==-1&&l.splice(p,2),this},this.getHandler=function(h){for(let p=0,f=l.length;p<f;p+=2){let d=l[p],g=l[p+1];if(d.global&&(d.lastIndex=0),d.test(h))return g}return null}}},gM=new Yu,la=class{constructor(e){this.manager=e!==void 0?e:gM,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};la.DEFAULT_MATERIAL_NAME="__DEFAULT";var Zu=class extends la{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=Hp.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;let a=jo("img");function c(){h(),Hp.add(e,this),t&&t(this),r.manager.itemEnd(e)}function l(p){h(),s&&s(p),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}};var io=class extends la{constructor(e){super(e)}load(e,t,n,s){let r=new $n,o=new Zu(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}},so=class extends At{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new dt(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},Zc=class extends so{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(At.DEFAULT_UP),this.updateMatrix(),this.groundColor=new dt(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},Lh=new wt,Np=new S,Fp=new S,ha=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ne(512,512),this.map=null,this.mapPass=null,this.matrix=new wt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new na,this._frameExtents=new Ne(1,1),this._viewportCount=1,this._viewports=[new Kt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;Np.setFromMatrixPosition(e.matrixWorld),t.position.copy(Np),Fp.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Fp),t.updateMatrixWorld(),Lh.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Lh),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Lh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},$u=class extends ha{constructor(){super(new Hn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){let t=this.camera,n=Qr*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},ro=class extends so{constructor(e,t,n=0,s=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(At.DEFAULT_UP),this.updateMatrix(),this.target=new At,this.distance=n,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new $u}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},Op=new wt,Wo=new S,Dh=new S,Ku=class extends ha{constructor(){super(new Hn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ne(4,2),this._viewportCount=6,this._viewports=[new Kt(2,1,1,1),new Kt(0,1,1,1),new Kt(3,1,1,1),new Kt(1,1,1,1),new Kt(3,0,1,1),new Kt(1,0,1,1)],this._cubeDirections=[new S(1,0,0),new S(-1,0,0),new S(0,0,1),new S(0,0,-1),new S(0,1,0),new S(0,-1,0)],this._cubeUps=[new S(0,1,0),new S(0,1,0),new S(0,1,0),new S(0,1,0),new S(0,0,1),new S(0,0,-1)]}updateMatrices(e,t=0){let n=this.camera,s=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Wo.setFromMatrixPosition(e.matrixWorld),n.position.copy(Wo),Dh.copy(n.position),Dh.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Dh),n.updateMatrixWorld(),s.makeTranslation(-Wo.x,-Wo.y,-Wo.z),Op.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Op)}},Nn=class extends so{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Ku}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},Ju=class extends ha{constructor(){super(new Dc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},$c=class extends so{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(At.DEFAULT_UP),this.updateMatrix(),this.target=new At,this.shadow=new Ju}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var Kc=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Bp(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=Bp();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};function Bp(){return performance.now()}var pd="\\[\\]\\.:\\/",xM=new RegExp("["+pd+"]","g"),md="[^"+pd+"]",yM="[^"+pd.replace("\\.","")+"]",vM=/((?:WC+[\/:])*)/.source.replace("WC",md),_M=/(WCOD+)?/.source.replace("WCOD",yM),MM=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",md),EM=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",md),SM=new RegExp("^"+vM+_M+MM+EM+"$"),wM=["material","materials","bones","map"],Qu=class{constructor(e,t,n){let s=n||ln.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},ln=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(xM,"")}static parseTrackName(e){let t=SM.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);wM.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let c=n(a.children);if(c)return c}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let o=e[s];if(o===void 0){let l=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ln.Composite=Qu;ln.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ln.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ln.prototype.GetterByBindingType=[ln.prototype._getValue_direct,ln.prototype._getValue_array,ln.prototype._getValue_arrayElement,ln.prototype._getValue_toArray];ln.prototype.SetterByBindingTypeAndVersioning=[[ln.prototype._setValue_direct,ln.prototype._setValue_direct_setNeedsUpdate,ln.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ln.prototype._setValue_array,ln.prototype._setValue_array_setNeedsUpdate,ln.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ln.prototype._setValue_arrayElement,ln.prototype._setValue_arrayElement_setNeedsUpdate,ln.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ln.prototype._setValue_fromArray,ln.prototype._setValue_fromArray_setNeedsUpdate,ln.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var ME=new Float32Array(1);var zp=new wt,ua=class{constructor(e,t,n=0,s=1/0){this.ray=new ea(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new ta,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return zp.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(zp),this}intersectObject(e,t=!0,n=[]){return ju(e,this,n,t),n.sort(kp),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)ju(e[s],this,n,t);return n.sort(kp),n}};function kp(i,e){return i.distance-e.distance}function ju(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let o=0,a=r.length;o<a;o++)ju(r[o],e,t,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"169"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="169");function bM({coarse:i=!1,width:e=1280,cores:t=8,memory:n=8,dpr:s=1}={}){let r=i||e<700||t<=4||n<=4;return Object.freeze({mobile:r,pixelRatio:Math.min(s,r?1.25:1.5),minPixelRatio:Math.min(s,r?.75:1),maxFps:r?30:1/0,shadowSize:r?1024:1536,shadowHz:r?12:24,textureSize:r?256:512,chainSegments:r?16:24,chainRadialSegments:r?4:5,effectsHz:r?24:40,targetFrameMs:r?33.3:22})}var TM=typeof window>"u"?{}:{coarse:matchMedia("(pointer:coarse)").matches,width:innerWidth,cores:navigator.hardwareConcurrency||8,memory:navigator.deviceMemory||8,dpr:devicePixelRatio||1},Ut=bM(TM);function f0(i,{exclude:e=[]}={}){let t=new Set(e),n=new Map,s=new Set,r=new S,o=new S,a=new yt;i.updateWorldMatrix(!0,!0);let c=i.matrixWorld.clone().invert();function l(d){if(!(!d.visible||t.has(d)||d.userData.chargingAction||d.userData.keyAction||Number.isInteger(d.userData.hoistIndex)||Number.isInteger(d.userData.valveIndex))){if(d.isMesh&&!d.isInstancedMesh&&!d.isSkinnedMesh&&!d.children.length){let g=d.geometry,x=d.material,m=g.attributes;if(x&&!Array.isArray(x)&&!x.transparent&&!g.morphAttributes.position&&g.drawRange.start===0&&g.drawRange.count===1/0&&m.position&&Object.keys(m).every(u=>["position","normal","uv"].includes(u))){d.getWorldPosition(r);let u=`${Math.floor(r.x/3)},${Math.floor(r.z/3)}`,E=[x.uuid,d.castShadow,d.receiveShadow,d.renderOrder,Object.keys(m).sort().join(","),u].join("|");n.has(E)||n.set(E,[]),n.get(E).push(d)}}for(let g of d.children)l(g)}}l(i);let h=0,p=0;for(let d of n.values()){if(d.length<3)continue;let g=Object.keys(d[0].geometry.attributes),x=d.reduce((P,O)=>P+O.geometry.attributes.position.count,0),m=d.reduce((P,O)=>P+(O.geometry.index?.count||O.geometry.attributes.position.count),0),u=new Ct,E={};for(let P of g){let O=d[0].geometry.attributes[P].itemSize;E[P]=new Float32Array(x*O),u.setAttribute(P,new un(E[P],O))}let y=new Uint32Array(m),M=0,C=0;for(let P of d){let O=P.geometry,v=new wt().multiplyMatrices(c,P.matrixWorld);a.getNormalMatrix(v);for(let W=0;W<O.attributes.position.count;W++)r.fromBufferAttribute(O.attributes.position,W).applyMatrix4(v),r.toArray(E.position,(M+W)*3),E.normal&&(o.fromBufferAttribute(O.attributes.normal,W).applyMatrix3(a).normalize(),o.toArray(E.normal,(M+W)*3)),E.uv&&(E.uv[(M+W)*2]=O.attributes.uv.getX(W),E.uv[(M+W)*2+1]=O.attributes.uv.getY(W));let w=O.index?.count||O.attributes.position.count;for(let W=0;W<w;W++)y[C++]=M+(O.index?O.index.getX(W):W);if(v.determinant()<0)for(let W=C-w;W<C;W+=3){let z=y[W+1];y[W+1]=y[W+2],y[W+2]=z}M+=O.attributes.position.count,s.add(O),P.removeFromParent(),h++}u.setIndex(new un(y,1)),u.computeBoundingBox(),u.computeBoundingSphere();let A=d[0],T=new ht(u,A.material);T.name="Batched static office scenery",T.castShadow=A.castShadow,T.receiveShadow=A.receiveShadow,T.renderOrder=A.renderOrder,T.matrixAutoUpdate=!1,i.add(T),p++}let f=new Set;i.traverse(d=>{d.geometry&&f.add(d.geometry)});for(let d of s)f.has(d)||d.dispose();return{removed:h,batches:p}}function p0(i){let e=document.createElement("canvas");e.width=256,e.height=128;let t=e.getContext("2d"),n=t.createLinearGradient(0,0,0,128);n.addColorStop(0,"#111812"),n.addColorStop(.48,"#3a4636"),n.addColorStop(1,"#171d12"),t.fillStyle=n,t.fillRect(0,0,256,128),t.fillStyle="#a9b7a3",t.fillRect(78,19,72,3),t.fillStyle="#596e68",t.fillRect(190,38,29,25),t.fillStyle="#435827",t.fillRect(25,64,34,15);let s=new Ft(e);s.colorSpace=ft,s.mapping=Jo;let r=new eo(i),o=r.fromEquirectangular(s);return r.dispose(),s.dispose(),o}function m0(i,e){if(!new URLSearchParams(location.search).has("profile"))return{mark(){},frame(){}};let t=document.createElement("output");t.id="performance-report",t.hidden=!0,document.body.append(t);let n=performance.now(),s={},r=[],o=0,a=0,c=0;function l(h){s[h]=Math.round(performance.now()-n)}return{mark:l,frame(h){let p=performance.now();if(o||(o=p-n),a&&(r.push(p-a),r.length>90&&r.shift()),a=p,c++,c===1||c%30===0){let f=0;e.traverse(d=>{d.isMesh&&f++}),t.textContent=JSON.stringify({firstFrameMs:Math.round(o),stages:s,frameMs:r.length?Math.round(r.reduce((d,g)=>d+g,0)/r.length*10)/10:0,renderCpuMs:Math.round((p-h)*10)/10,frames:c,calls:i.info.render.calls,triangles:i.info.render.triangles,geometries:i.info.memory.geometries,textures:i.info.memory.textures,meshes:f,pixelRatio:i.getPixelRatio()})}}}}function g0(i){let n=[],s=new Map,r=0,o=new Et(.735,.41);function a(){let p=document.createElement("canvas");return p.width=1024,p.height=576,[p,p.getContext("2d")]}function c(p,f=!0){let d=new Ft(p);return f&&(d.colorSpace=ft),d.anisotropy=Math.min(8,i.capabilities.getMaxAnisotropy()),d}function l(p,f){let d=13817+f*7319+(p==="hole"?20001:p==="live"?481:0),g=()=>(d=d*1664525+1013904223>>>0,d/4294967296),x=(N,ae)=>N+(ae-N)*g(),[m,u]=a(),[E,y]=a(),[M,C]=a(),[A,T]=a();u.fillStyle="#080d10",u.fillRect(0,0,1024,576),C.fillStyle="#545454",C.fillRect(0,0,1024,576),T.fillStyle="#777",T.fillRect(0,0,1024,576);let P=p==="live"||p==="cracked"&&f%2===0,O=u.createLinearGradient(0,0,1024,576);if(O.addColorStop(0,"#1b262a"),O.addColorStop(.45,"#0b1217"),O.addColorStop(1,"#040709"),u.fillStyle=O,u.fillRect(0,0,1024,576),P){u.fillStyle="#253438",u.fillRect(0,0,1024,27),u.fillRect(0,27,150,576);for(let N=0;N<28;N++){let ae=174;for(let ne=0;ne<x(3,10);ne++){u.fillStyle=["#365b51","#47615d","#354847"][Math.floor(g()*3)];let ie=x(9,93);u.fillRect(ae,53+N*17,ie,2),ae+=ie+x(5,15)}}for(let N=0;N<576;N+=3)u.fillStyle="rgba(0,0,0,.18)",u.fillRect(0,N,1024,1)}let v={x:x(1024*.2,1024*.78),y:x(576*.22,576*.78)};function w(N,ae,ne,ie,F=0,re=0){ae.strokeStyle=ne,ae.lineWidth=ie,ae.beginPath(),N.forEach(([X,V],$)=>$?ae.lineTo(X+F,V+re):ae.moveTo(X+F,V+re)),ae.stroke()}function W(N,ae=1){w(N,y,"rgba(0,3,6,.86)",ae*1.9),w(N,y,`rgba(185,212,216,${x(.45,.9)})`,ae*.7,-.7,.35),g()<.3&&w(N,y,"rgba(113,153,163,.35)",.5,.75,-.35),w(N,T,"#242424",ae*1.6),w(N,T,"#bfbfbf",ae*.7,-.7,.35),w(N,C,"#b9b9b9",ae*1.5)}let z=[];if(p!=="live"){let ie=function(X,V,$=1){u.fillStyle=V,u.beginPath(),X.forEach(([xe,Ce],ve)=>{xe=v.x+(xe-v.x)*$,Ce=v.y+(Ce-v.y)*$,ve?u.lineTo(xe,Ce):u.moveTo(xe,Ce)}),u.closePath(),u.fill()},N=[],ae=p==="hole"?x(68,107):x(42,78),ne=ae*x(.42,.75);for(let X=0;X<72;X++){let V=X/72*Math.PI*2,$=1+.13*Math.sin(V*5+f)+.07*Math.sin(V*13);N.push([v.x+Math.cos(V)*ae*$,v.y+Math.sin(V)*ne*$])}for(let[X,V]of[[1.18,"rgba(56,39,73,.46)"],[1.1,"rgba(36,72,74,.55)"],[1.05,"#151c2a"],[1,"#010204"]])ie(N,V,X);if(P||p==="hole"&&f===1){for(let $=0;$<61;$++){let xe=v.x+x(-ae*1.7,ae*1.7),Ce=$%3?0:v.y,ve=$%3?v.y:576;u.fillStyle=["rgba(85,129,115,.65)","rgba(130,62,94,.6)","rgba(70,103,146,.60)","rgba(172,177,161,.48)"][$%4],u.fillRect(xe,Ce,x(.4,2),ve-Ce)}let X=v.x+ae*.4,V=x(35,108);u.fillStyle="rgba(130,151,153,.23)",u.fillRect(X,0,V,v.y);for(let $=0;$<v.y;$+=3)u.fillStyle=`rgba(15,28,32,${x(.15,.65)})`,u.fillRect(X,$,V,1);for(let $=0;$<9;$++)u.fillStyle=$%3?"rgba(2,5,8,.85)":"rgba(129,156,153,.45)",u.fillRect(0,v.y+x(-15,18),1024,x(.5,2.4));ie(N,"#010204",.98)}let F=12+f%4,re=Array.from({length:F},(X,V)=>V/F*Math.PI*2+x(-.11,.11));for(let X of re){let V=[[v.x+Math.cos(X)*3,v.y+Math.sin(X)*3]],$=x(7,13);for(;$<1300;){let xe=x(-.021,.021),Ce=v.x+Math.cos(X+xe)*$,ve=v.y+Math.sin(X+xe)*$;if(V.push([Ce,ve]),$+=x(16,47),Ce<0||Ce>1024||ve<0||ve>576)break}W(V,x(.55,1.2));for(let xe=2;xe<V.length-1;xe++)if(g()<.33){let[Ce,ve]=V[xe],te=g()<.5?-1:1,L=X+te*x(.18,.65),_e=x(28,145),se=[[Ce,ve]];for(let he=1;he<=5;he++)se.push([Ce+Math.cos(L)*_e*he/5+x(-3,3),ve+Math.sin(L)*_e*he/5+x(-3,3)]);W(se,x(.3,.64))}}for(let X of[18,35,61,101,155])for(let V=0;V<F;V++){if(g()<.28||X>70&&g()<.45)continue;let $=re[V],xe=V===F-1?re[0]+Math.PI*2:re[V+1],Ce=X*x(.8,1.12),ve=[];for(let te=0;te<=4;te++){let L=$+(xe-$)*te/4;ve.push([v.x+Math.cos(L)*Ce+x(-3,3),v.y+Math.sin(L)*Ce*.84+x(-2,2)])}W(ve,x(.35,.75))}for(let X=0;X<90;X++){let V=g()*Math.PI*2,$=x(2,25),xe=v.x+Math.cos(V)*$,Ce=v.y+Math.sin(V)*$*.7;W([[xe,Ce],[xe+x(-6,6),Ce+x(-5,5)]],x(.3,.8))}if(p==="hole")for(let X=0;X<7;X++){let V=X/7*Math.PI*2,$=x(8,26),xe=v.x+Math.cos(V)*$,Ce=v.y+Math.sin(V)*$*.7,ve=[[xe,Ce],[xe+x(4,11),Ce+x(-6,2)],[xe+x(-3,5),Ce+x(4,13)]];z.push(ve),u.fillStyle="#000102",u.beginPath(),ve.forEach(([te,L],_e)=>_e?u.lineTo(te,L):u.moveTo(te,L)),u.closePath(),u.fill(),W([...ve,ve[0]],1)}}for(let N=0;N<35;N++){let ae=g()*1024,ne=g()*576,ie=x(20,115),F=C.createRadialGradient(ae,ne,0,ae,ne,ie);F.addColorStop(0,"rgba(205,205,205,.20)"),F.addColorStop(1,"rgba(160,160,160,0)"),C.fillStyle=F,C.fillRect(ae-ie,ne-ie,ie*2,ie*2)}for(let N=0;N<3800;N++){let ae=g()*1024,ne=g()*576;C.fillStyle=`rgba(230,230,230,${x(.06,.4)})`,C.fillRect(ae,ne,x(.4,1.3),x(.4,1.1)),N%9===0&&(y.fillStyle="rgba(135,149,146,.13)",y.fillRect(ae,ne,.65,.65))}for(let N=0;N<70;N++){let ae=g()*1024,ne=g()*576;w([[ae,ne],[ae+x(3,31),ne+x(-8,8)]],C,"rgba(189,189,189,.35)",.7)}y.strokeStyle="rgba(89,93,83,.50)",y.lineWidth=2.4,y.strokeRect(1,1,1022,574);let B=c(m),H=c(M,!1),Z=c(A,!1),me=new Be({map:B,roughness:.62,metalness:0,emissiveMap:B,emissive:16777215,emissiveIntensity:p==="live"?.52:P?.28:.025}),Q=new Vt({color:10137267,metalness:.08,roughness:.36,roughnessMap:H,bumpMap:Z,bumpScale:38e-5,transparent:!0,opacity:.27,depthWrite:!1,clearcoat:1,clearcoatRoughness:.19,clearcoatRoughnessMap:H,ior:1.52,envMapIntensity:.85,side:Ki});n.push(Q);let ge=new Be({map:c(E),transparent:!0,depthWrite:!1,roughness:.38,metalness:.12,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1});return{lcdMaterial:me,glass:Q,cracksMaterial:ge,holes:z}}function h(p,f){let d=r++%3,g=`${f}-${d}`;s.has(g)||s.set(g,l(f,d));let x=s.get(g);for(let[m,u,E]of[[x.lcdMaterial,.019,"Damaged liquid-crystal panel"],[x.glass,.0205,"Reflective laminated screen glass"],[x.cracksMaterial,.0213,"Fine branching glass fractures"]]){let y=new ht(o,m);y.position.set(0,.381,u),y.name=E,y.castShadow=!1,y.receiveShadow=!0,p.add(y)}for(let m of x.holes){let u=m.flatMap(([M,C],A)=>[(M/1024-.5)*.735,(.5-C/576)*.41+.381,.0215+(A===1?.0018:0)]),E=new Ct;E.setAttribute("position",new ct(u,3)),E.computeVertexNormals();let y=new ht(E,x.glass);y.castShadow=!1,p.add(y)}}return{add:h,setEnvironment(p){for(let f of n)f.envMap=p,f.needsUpdate=!0}}}var il=(i,e=0,t=1)=>Math.min(t,Math.max(e,i)),ms=i=>(i=il(i),i*i*(3-2*i));function tl(i,e){let t=Math.imul(i,374761393)+Math.imul(e,668265263);return t=Math.imul(t^t>>>13,1274126177),((t^t>>>16)>>>0)/4294967295}function ui(i,e){let t=Math.floor(i),n=Math.floor(e),s=ms(i-t),r=ms(e-n);return Ze.lerp(Ze.lerp(tl(t,n),tl(t+1,n),s),Ze.lerp(tl(t,n+1),tl(t+1,n+1),s),r)}function nl(i,e){return ui(i*5,e*5)*.48+ui(i*17+3,e*17)*.29+ui(i*61,e*61+9)*.15+ui(i*187,e*187)*.08}function ao(i,e=Ut.textureSize,t=!1){let n=new Uint8Array(e*e*4);for(let r=0;r<e;r++)for(let o=0;o<e;o++){let a=i(o/e,r/e,o,r),c=(r*e+o)*4;for(let l=0;l<4;l++)n[c+l]=Math.round(il(a[l]??1)*255)}let s=new Qi(n,e,e,hi);return s.wrapS=s.wrapT=or,s.magFilter=mn,s.minFilter=Oi,s.generateMipmaps=!0,s.anisotropy=4,t&&(s.colorSpace=ft),s.needsUpdate=!0,s}var gd;function ni(i=16777215){if(!gd){let e=(c,l)=>{let h=nl(c,l),p=ui(c*48,l*3),f=ms((h+p*.13-.51)*9),d=ms((ui(c*150,l*150)-.64)*8);return{n:h,rust:f,pit:d}},t=new Float32Array(Ut.textureSize*Ut.textureSize*3),n=ao((c,l,h,p)=>{let{n:f,rust:d,pit:g}=e(c,l),x=Math.pow(ui(c*4,l*260),18)*.24,m=(p*Ut.textureSize+h)*3;return t[m]=.45+d*.21+f*.18-g*.25,t[m+1]=.35+d*.57+g*.07,t[m+2]=.88-d*.86,[.39+f*.34,.42+f*.34,.39+f*.32].map((u,E)=>Ze.lerp(u,[.35+f*.3,.12+f*.19,.045+f*.1][E],d)-g*.1+x)},Ut.textureSize,!0),s=ao((c,l,h,p)=>{let f=(p*Ut.textureSize+h)*3;return[t[f],t[f+1],t[f+2]]});gd={map:n,roughnessMap:s,metalnessMap:s,bumpMap:s}}return new Be({color:i,...gd,roughness:1,metalness:1,bumpScale:.0035,envMapIntensity:.7})}function x0(){let i=(x,m)=>{let u=nl(x+3,m+2),E=ui(x*70,m*2.3)*ui(x*19,m*6),y=ui(x*170,m*190),M=(1-ms(m/.23))*.78,C=ms((m-.86)/.14)*.34,A=Math.exp(-(((m-.844)*75)**2))*(.2+ui(x*38,1)*.8),T=il(M+C+A*.52+ms((u-.49)*7)*.45+E*.2),P=ms((u-.37)*4)*.7;return{dirt:T,fog:P,runs:E,scale:y,tide:A}},e=new Float32Array(Ut.textureSize*Ut.textureSize*2),t=ao((x,m,u,E)=>{let{dirt:y,fog:M,runs:C,scale:A,tide:T}=i(x,m),P=Math.pow(ui(x*105,m*69),12)*.65,O=(E*Ut.textureSize+u)*2;return e[O]=.4+y*.1+C*.09+A*.025+P,e[O+1]=.08+M*.36+y*.43+C*.1,[.59-y*.3,.63-y*.3,.48-y*.3,il(.03+M*.23+y*.55+T*.12+A*.025)]},Ut.textureSize,!0),n=ao((x,m,u,E)=>{let y=(E*Ut.textureSize+u)*2;return[e[y],e[y+1],0]}),s=n,r=new Vt({color:14542029,roughness:.7,roughnessMap:s,metalness:0,transparent:!0,opacity:.17,depthWrite:!1,clearcoat:1,clearcoatRoughness:.14,bumpMap:n,bumpScale:.003,side:Dt,envMapIntensity:.85}),o=new Be({map:t,roughness:.9,bumpMap:n,bumpScale:.002,transparent:!0,depthWrite:!1,side:Dt}),a=ao((x,m)=>{let u=nl(x+11,m+7),E=ui(x*12,m*9);return[.11+u*.19,.24+u*.35,.026+E*.08]},Ut.textureSize/2,!0),c=ao((x,m)=>{let u=nl(x+5,m+3),E=ms(m);return[.1+u*.12+E*.06,.17+u*.22+E*.12,.025+u*.055,.93-E*.43]},Ut.textureSize/2,!0),l=new Vt({map:c,color:13228945,roughness:.26,transparent:!0,opacity:.76,depthWrite:!1,side:Dt,emissive:1981189,emissiveIntensity:.48,envMapIntensity:.35}),h=new Vt({map:a,color:16777215,roughness:.17,metalness:0,ior:1.333,clearcoat:1,clearcoatRoughness:.12,side:Dt,emissive:2374407,emissiveIntensity:.3,envMapIntensity:1.15}),p={value:0};h.onBeforeCompile=x=>{x.uniforms.waterTime=p,x.fragmentShader=`uniform float waterTime;
`+x.fragmentShader,x.fragmentShader=x.fragmentShader.replace("#include <map_fragment>",`#ifdef USE_MAP
 vec2 flowUv=vMapUv+vec2(sin(vMapUv.y*10.0+waterTime*.17),cos(vMapUv.x*9.0-waterTime*.13))*.025;
 diffuseColor*=texture2D(map,flowUv);
 #endif`)},h.customProgramCacheKey=()=>"slow-water-currents-v1";let f=new Be({color:9546090,roughness:.79,transparent:!0,opacity:.75,depthWrite:!1,emissive:2503177,emissiveIntensity:.12}),d=new Vt({color:13097881,roughness:.07,metalness:0,transparent:!0,opacity:.23,depthWrite:!1,clearcoat:1,clearcoatRoughness:.04,envMapIntensity:1.25}),g=new gt({color:12505482,transparent:!0,opacity:.18,depthWrite:!1,side:Dt});return{glass:r,haze:o,fluid:l,liquidTop:h,foam:f,bubble:d,ripple:g,waterTime:p}}var RM=i=>Math.max(0,Math.min(1,i)),yd=i=>{let e=RM(i);return e*e*(3-2*e)};function xd(i,e,t,n,s){if(i<e)return 0;let r=i-e;return r<t?yd(r/t):r<t+n?1:1-yd((r-t-n)/s)}var AM=[{at:5,head:-.32,eye:-.52,pitch:.035,hold:1.7},{at:17.4,head:.36,eye:.55,pitch:-.065,hold:2.1},{at:31.1,head:-.23,eye:-.4,pitch:-.1,hold:1.3}];function y0(i,e=!1,t={}){if(t.headYaw=0,t.gazeYaw=0,t.gazePitch=0,e||i<0)return t;let n=i%43.7;for(let s of AM){let r=xd(n,s.at,.24,s.hold+1,.65),o=xd(n,s.at+.38,.95,s.hold,1.25);t.headYaw+=s.head*o,t.gazeYaw+=s.eye*r,t.gazePitch+=s.pitch*r}return t.gazePitch-=.12*xd(n,25.2,.22,.8,.5),t}function v0(i,e,t,n,s=!1,r={}){let o=yd((e-1.08)/.42),a=1.1+n*.055,c=s?0:o*.105*(Math.sin(i*a+n)+.12*Math.sin(i*.47+n*.6))/1.12,l=t-.1-e;return r.angle=c,r.x=Math.sin(c)*l,r.y=t-.1-Math.cos(c)*l,r.hookX=r.x-Math.sin(c)*.52,r.hookY=r.y+Math.cos(c)*.52,r}var sl;function CM(){if(sl)return sl;let i=128,e=new Uint8Array(i*i*4),t=new Uint8Array(i*i*4),n=8817,s=()=>(n=n*1664525+1013904223>>>0,n/4294967296);for(let a=0;a<i;a++)for(let c=0;c<i;c++){let l=(a*i+c)*4,h=s(),p=Math.max(0,Math.sin(c*.056+Math.sin(a*.05)*2)*Math.cos(a*.041)-.15),f=h>.965?.22:0;e[l]=223-p*67-h*16-f*140,e[l+1]=219-p*49-h*15-f*130,e[l+2]=186-p*72-h*17-f*130,e[l+3]=255,t[l]=t[l+1]=t[l+2]=145+h*24-f*255,t[l+3]=255}let r=new Qi(e,i,i),o=new Qi(t,i,i);for(let a of[r,o])a.wrapS=a.wrapT=or,a.magFilter=mn,a.minFilter=Oi,a.generateMipmaps=!0,a.needsUpdate=!0;return r.colorSpace=ft,sl=new Be({map:r,bumpMap:o,bumpScale:.0011,color:16052183,roughness:.72,emissive:12563852,emissiveIntensity:.28}),sl}var PM=new Zt(1,20,14),fa=new Be({color:1580302,roughness:1});function ii(i,e,t=CM()){let n=new ht(i,t);return n.castShadow=!0,n.receiveShadow=!0,e.add(n),n}function wi(i,e,t,n){let s=ii(PM,i,n);return s.position.set(...e),s.scale.set(...t),s}function Si(i,e,t=.012){return ii(new dn(new Jt(e.map(n=>new S(...n))),32,t,8,!1),i)}function rl(i,e,t,n=.012){let s=new S(...e),r=new S(...t),o=r.clone().sub(s),a=ii(new Yt(n*.82,n,o.length(),10),i);return a.position.copy(s).add(r).multiplyScalar(.5),a.quaternion.setFromUnitVectors(new S(0,1,0),o.normalize()),a}function vd(i=!1){let e=new be;e.name=i?"Slender forearm bone":"Worn femur";let t=[[0,-.161],[.023,-.16],[.028,-.13],[.019,-.1],[.014,-.04],[.015,.025],[.019,.085],[.028,.122],[.026,.145],[0,.155]],n=new Fs(t.map(r=>new Ne(r[0]*(i?.62:1),r[1])),20),s=n.attributes.position;for(let r=0;r<s.count;r++)s.setX(r,s.getX(r)+.009*Math.sin((s.getY(r)+.16)*Math.PI/.315));return n.computeVertexNormals(),ii(n,e),wi(e,[.022,.14,0],[.043,.038,.039]),wi(e,[-.015,-.147,.002],[.028,.03,.034]),wi(e,[.02,-.15,-.002],[.029,.032,.032]),i&&e.scale.set(.75,1,.8),e}function _0(){let i=new be;i.name="Curved rib fragment";let e=[];for(let t=0;t<=20;t++){let n=-.85+t/20*2.9;e.push([Math.cos(n)*.123-.018,Math.sin(n)*.123,.018*Math.sin(n*1.3)])}return Si(i,e),wi(i,e[0],[.017,.015,.018]),i}function M0(){let i=new be;i.name="Detached jaw with uneven teeth",Si(i,[[-.088,.045,-.035],[-.08,-.025,.035],[-.043,-.05,.071],[0,-.054,.082],[.043,-.05,.071],[.08,-.025,.035],[.088,.045,-.035]],.013);for(let e=0;e<8;e++){let t=(e-3.5)*.017,n=.078-Math.abs(t)*.3,s=ii(new Mt(.013,.02+e%3*.002,.013),i);s.position.set(t,-.041,n),s.rotation.y=-t*3}return i}function IM(){let i=new be;i.name="Goofy buck-toothed skull with wonky eye sockets";let e=new St;e.moveTo(-.076,-.061),e.quadraticCurveTo(-.133,-.035,-.121,.067),e.bezierCurveTo(-.119,.171,.123,.165,.12,.06),e.quadraticCurveTo(.136,-.029,.077,-.061),e.lineTo(.047,-.071),e.lineTo(-.047,-.073),e.closePath();for(let[r,o,a,c,l]of[[-.052,.019,.039,.043,-.2],[.052,.011,.033,.035,.18]]){let h=new Mi;h.absellipse(r,o,a,c,0,Math.PI*2,!0,l),e.holes.push(h)}let t=new Mi;t.moveTo(.001,-.026),t.lineTo(-.012,-.05),t.quadraticCurveTo(.001,-.045,.013,-.05),t.closePath(),e.holes.push(t);let n=ii(new on(e,{depth:.022,bevelEnabled:!0,bevelSize:.004,bevelThickness:.004,bevelSegments:2,steps:1,curveSegments:20}),i);n.position.z=.043,wi(i,[0,.04,-.055],[.12,.121,.077]),wi(i,[0,.012,.027],[.109,.093,.01],fa);for(let r of[-1,1])wi(i,[r*.093,-.042,.047],[.028,.022,.025]);for(let[r,o,a,c,l]of[[-.019,-.084,.028,.042,-.11],[.017,-.08,.027,.036,.17],[-.06,-.073,.014,.018,-.28],[.06,-.071,.012,.015,.23]]){let h=ii(new Mt(a,c,.018),i);h.position.set(r,o,.064),h.rotation.z=l}let s=new be;s.name="Lopsided cartoon jaw",s.position.set(.004,-.071,-.003),s.rotation.z=-.12,i.add(s),Si(s,[[-.087,.04,-.025],[-.083,-.025,.037],[-.047,-.053,.071],[0,-.056,.079],[.051,-.048,.068],[.085,-.022,.033],[.087,.04,-.025]],.014);for(let[r,o]of[[-.052,-.04],[.038,-.041],[.057,-.036]]){let a=ii(new Mt(.015,.016,.015),s);a.position.set(r,o,.071),a.rotation.z=r*3}return Si(i,[[-.009,.154,-.016],[.003,.15,.003],[-.004,.141,.025],[.005,.126,.042]],.0016).material=fa,i}function _d(){let i=new be;i.name="Short articulated spine";for(let e=0;e<6;e++){let t=(e-2.5)*.038,n=.01*Math.sin(e*.7);wi(i,[0,t,n],[.025,.016,.02]);for(let s of[-1,1])rl(i,[s*.012,t,n],[s*.045,t-.009,n-.008],.007);rl(i,[0,t,n],[0,t+.008,n-.043],.006)}return i}function E0(){let i=new be;i.name="Broken rib cage",i.add(_d());for(let e=0;e<5;e++)for(let t of[-1,1]){if(e===4&&t===1)continue;let n=.08-e*.043,s=.08+Math.sin(e/5*Math.PI)*.038;Si(i,[[0,n,-.02],[t*s*.65,n+.018,-.045],[t*s,n-.004,.008],[t*s*.82,n-.031,.065],[t*.018,n-.044,.08]],.0085)}return rl(i,[0,.06,.081],[0,-.12,.079],.01),i}function LM(i){let e=i===0,t=new be;t.name=e?"Pudding-shaped skull with bony party hat":"Sushi-shaped skull with bony beanie";let n=new St;if(e)n.moveTo(-.3,-.27),n.bezierCurveTo(-.42,-.19,-.38,.12,-.29,.24),n.quadraticCurveTo(0,.34,.29,.24),n.bezierCurveTo(.38,.12,.42,-.19,.3,-.27),n.quadraticCurveTo(0,-.34,-.3,-.27);else{n.moveTo(-.31,-.225),n.quadraticCurveTo(-.39,-.16,-.34,-.025),n.lineTo(-.41,.17),n.quadraticCurveTo(-.4,.22,-.21,.29),n.quadraticCurveTo(0,.33,.21,.29),n.quadraticCurveTo(.4,.22,.41,.17),n.lineTo(.34,-.025),n.quadraticCurveTo(.39,-.16,.31,-.225);for(let l=7;l>=0;l--){let h=-.31+l*.0775;n.quadraticCurveTo(h+.038,-.285,h,-.225)}}n.closePath();let s=e?.015:-.055,r=e?.13:.14;for(let l of[-1,1]){let h=new Mi;h.absellipse(l*r,s,.07,l<0?.065:.057,0,Math.PI*2,!0,l*.18),n.holes.push(h)}let o=new Mi;o.moveTo(0,s-.037),o.lineTo(-.023,s-.083),o.quadraticCurveTo(0,s-.075,.023,s-.083),o.closePath(),n.holes.push(o);let a=new Mi;a.absellipse(0,e?-.19:-.192,e?.208:.227,e?.064:.042,0,Math.PI*2,!0),n.holes.push(a);let c=ii(new on(n,{depth:.055,bevelEnabled:!0,bevelSize:.008,bevelThickness:.008,bevelSegments:3,curveSegments:24}),t);c.position.z=.135,wi(t,[0,.012,-.035],[e?.355:.37,.235,.16]),wi(t,[0,-.025,.126],[.325,.265,.008],fa);for(let l=0;l<7;l++){if(l===1||l===5)continue;let h=ii(new Mt(.039,l%2?.037:.05,.035),t);h.position.set((l-3)*.053,e?-.147:-.169,.175),h.rotation.z=(l%3-1)*.12}if(e){Si(t,[[-.3,.19,.19],[-.24,.13,.2],[-.18,.195,.21],[-.11,.095,.21],[-.045,.17,.21],[.025,.085,.21],[.09,.17,.21],[.16,.105,.21],[.23,.19,.2],[.3,.15,.19]],.015);let l=new be;l.name="Ivory party-hat crest",l.position.set(.02,.285,0),l.rotation.z=-.12,t.add(l);let h=ii(new Os(.123,.3,32),l);h.position.y=.15;let p=ii(new Qt(.12,.012,8,32),l);p.rotation.x=Math.PI/2;for(let f=0;f<5;f++){let d=f/5*Math.PI*2;Si(l,[[Math.cos(d)*.12,.005,Math.sin(d)*.12],[Math.cos(d)*.065,.15,Math.sin(d)*.065],[0,.3,0]],.004)}wi(l,[0,.314,0],[.028,.03,.028]),Si(t,[[-.2,.27,.15],[-.18,.23,.195],[-.205,.2,.2],[-.18,.17,.2]],.0025).material=fa}else{for(let f of[-1,1])Si(t,[[f*.115,.027,.197],[f*.12,.16,.198],[f*.13,.292,.16]],.0035).material=fa;Si(t,[[-.37,.01,.17],[-.2,.036,.199],[0,.048,.2],[.2,.036,.199],[.37,.01,.17]],.012);let l=new be;l.name="Ribbed ivory beanie crest",l.position.y=.3,t.add(l),ii(new Zt(1,32,16,0,Math.PI*2,0,Math.PI/2),l).scale.set(.235,.235,.2);let p=ii(new Qt(.238,.02,10,40),l);p.rotation.x=Math.PI/2,p.scale.y=.86;for(let f=0;f<10;f++){let d=f/10*Math.PI*2,g=[];for(let x=0;x<=8;x++){let m=x/8*Math.PI/2;g.push([Math.cos(d)*.238*Math.cos(m),.237*Math.sin(m),Math.sin(d)*.203*Math.cos(m)])}Si(l,g,.006)}}return t}function S0(i){let e=new be;if(e.name=["Pudding Figpal skeleton","Sushi Figpal skeleton","Pufferfish skeleton"][i],i===2){let t=IM();t.scale.set(1.25,1.35,1.05),t.position.set(-.16,.035,.055),e.add(t);for(let n=0;n<7;n++){let s=-.05+n*.055;if(wi(e,[s,0,0],[.028,.021,.02]),n<5)for(let r of[-1,1])Si(e,[[s,0,0],[s+.026,r*.09,-.01],[s+.014,r*(.22-n*.023),.015]],.01)}for(let n of[-.16,-.08,0,.08,.16])rl(e,[.29,0,0],[.47,n,0],.009)}else e.add(LM(i));return e}var DM=[[{kind:"femur",x:.14,y:.46,z:.15,tilt:1.1,yaw:-.3,scale:.9}],[{kind:"ribs",x:.02,y:.4,z:.1,tilt:.3,yaw:-.2,scale:.78},{kind:"spine",x:-.16,y:.4,z:-.08,tilt:-.5,yaw:.4,scale:.75},{kind:"rib",x:.16,y:.34,z:.17,tilt:.9,yaw:-.4,scale:.64}],[{kind:"forearm",x:-.13,y:.42,z:.16,tilt:-.68,yaw:.2,scale:.88},{kind:"jaw",x:.09,y:.32,z:.16,tilt:-.18,yaw:.6,scale:1.04}]],UM={femur:vd,forearm:()=>vd(!0),rib:_0,ribs:E0,spine:_d,jaw:M0};function w0(i){let e=new be;e.name=`Bones floating in canister ${i+1}`;let t=DM[i].map((s,r)=>{let o=UM[s.kind]();return o.scale.multiplyScalar(s.scale),e.add(o),{...s,object:o,phase:i*1.91+r*2.3}});function n(s,r=!1){let o=r?0:s;for(let a of t){let c=a.phase,l=.022,h=.46;a.object.position.set(a.x+l*Math.sin(o*.27+c),a.y+.014*Math.sin(o*.57+c),a.z+.018*Math.cos(o*.23+c)),a.object.rotation.set(.1*Math.sin(o*.19+c),a.yaw+h*Math.sin(o*.17+c),a.tilt+.11*Math.sin(o*.31+c),"YXZ")}}return n(0),{group:e,update:n}}function b0(i,e){let t=S0(e);t.position.copy(i.position),t.quaternion.copy(i.quaternion),t.scale.copy(i.scale),i.parent.add(t),i.updateWorldMatrix(!0,!0);let n=i.matrixWorld.clone().invert(),s=new Ln,r=new Ln;i.traverse(g=>{g.isMesh&&(g.geometry.computeBoundingBox(),r.copy(g.geometry.boundingBox).applyMatrix4(new wt().multiplyMatrices(n,g.matrixWorld)),s.union(r))});let o=new yi,a=new yi;function c(g,x){let m=new Map;g.traverse(u=>{if(!u.isMesh)return;let E=y=>{if(!m.has(y)){let M=y.clone();M.onBeforeCompile=y.onBeforeCompile,M.customProgramCacheKey=y.customProgramCacheKey,M.clippingPlanes=[x],M.clipShadows=!0,m.set(y,M)}return m.get(y)};u.material=Array.isArray(u.material)?u.material.map(E):E(u.material)})}c(i,o),c(t,a);let l=s.min.y-.04,h=!1,p=new S;function f(g){i.updateWorldMatrix(!0,!1),p.setFromMatrixPosition(i.matrixWorld),p.y=g,i.worldToLocal(p),l=Math.max(l,Math.min(s.max.y+.04,p.y)),o.set(new S(0,1,0),-l).applyMatrix4(i.matrixWorld),a.copy(o).negate(),h=l>=s.max.y+.015,i.visible=!h,t.visible=l>s.min.y}f(-100);function d(){l=s.min.y-.04,h=!1,f(-100)}return{skeleton:t,update:f,reset:d,get transformed(){return h},get cutHeight(){return l}}}function T0(){let i=new io().load(new URL("./assets/open-to-work.png",import.meta.url).href);i.colorSpace=ft,i.anisotropy=4;let e=new Be({map:i,transparent:!0,alphaTest:.025,depthWrite:!1,roughness:.86,metalness:0,emissiveMap:i,emissive:16777215,emissiveIntensity:.18}),t=new Et(.78,.78,48,2),n=t.attributes.position;for(let s=0;s<n.count;s++)n.setZ(s,Math.sqrt(.49**2-n.getX(s)**2));return t.computeVertexNormals(),t.computeBoundingSphere(),()=>{let s=new ht(t,e);return s.name="#OPENTOWORK decal on curved tank glass",s.position.y=.7,s.renderOrder=8,s}}function R0(){let i=new be;i.name="Three suspended Figpals over bubbling green canisters";let e=Math.PI*2,t=193108,n=()=>(t=t*1664525+1013904223>>>0,t/4294967296),s=(J,ye=.78,Ie=.005)=>new Be({color:J,roughness:ye,emissive:J,emissiveIntensity:Ie}),r=s(1184789,.85,0),o=s(16772534),a=s(16184551),c=s(36072),l=s(15226636),h=s(11022601),p=s(16755746),f=s(16754855),d=s(10214644),g=s(294108),x=s(16765992),m=new gt({color:1053459,side:yn});m.onBeforeCompile=J=>{J.vertexShader=J.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
transformed += normal * 0.009;`)},m.customProgramCacheKey=()=>"figpal-outline-v1";function u(J,ye,Ie=i,Pe=!1){let Re=new ht(J,ye);if(Re.castShadow=!0,Re.receiveShadow=!0,Ie.add(Re),Pe){let le=new ht(J,m);le.name="Ink outline",Re.add(le)}return Re}function E(J,ye,Ie,Pe,Re=!1){let le=u(new Zt(1,24,16),Ie,Pe,Re);return le.position.set(...J),le.scale.set(...ye),le}function y(J,ye,Ie,Pe=i){let Re=u(new Mt(...J),Ie,Pe);return Re.position.set(...ye),Re}function M(J,ye,Ie,Pe,Re=i,le=!1){let Ve=u(new Yt(J,J,ye,48,1,le),Pe,Re);return Ve.position.set(...Ie),Ve}function C(J,ye,Ie,Pe=i){let Re=new Jt(J.map(le=>new S(...le)));return u(new dn(Re,Math.max(16,J.length*5),ye,6,!1),Ie,Pe)}function A(J,ye,Ie,Pe,Re=i){let le=new S(...J),Ve=new S(...ye),q=Ve.clone().sub(le),Ae=M(Ie,q.length(),le.clone().add(Ve).multiplyScalar(.5).toArray(),Pe,Re);return Ae.quaternion.setFromUnitVectors(new S(0,1,0),q.normalize()),Ae}function T(J,ye,Ie,Pe,Re=i){let le=u(new Qt(J,ye,8,64),Pe,Re);return le.rotation.x=Math.PI/2,le.position.y=Ie,le}function P(J,ye,Ie,Pe,Re=.035){let le=new on(J,{depth:ye-Re*2,bevelEnabled:!0,bevelSize:Re,bevelThickness:Re,bevelSegments:3,steps:1,curveSegments:16});return le.translate(0,0,-ye/2+Re),u(le,Ie,Pe,!0)}function O(J,ye,Ie,Pe=.105,Re="worried"){let le=new be;le.name=`${Re} expression`,J.add(le);for(let Ve of[-1,1])E([Ve*Pe,ye,Ie],[.022,.031,.013],r,le),C([[Ve*(Pe+.035),ye+.041,Ie+.004],[Ve*Pe,ye+.055,Ie+.007],[Ve*(Pe-.035),ye+.074,Ie+.007]],.01,r,le);Re==="afraid"?E([0,ye-.075,Ie+.003],[.026,.038,.012],r,le):C([[-.052,ye-.091,Ie],[0,ye-.06,Ie+.005],[.052,ye-.091,Ie]],.012,r,le)}function v(){let J=new be;J.name="Party-hat pudding Figpal";let ye=new St;ye.moveTo(-.3,-.27),ye.bezierCurveTo(-.42,-.19,-.38,.12,-.29,.24),ye.quadraticCurveTo(0,.34,.29,.24),ye.bezierCurveTo(.38,.12,.42,-.19,.3,-.27),ye.quadraticCurveTo(0,-.34,-.3,-.27),P(ye,.37,p,J,.035);let Ie=new St;Ie.moveTo(-.29,.25),Ie.quadraticCurveTo(0,.34,.29,.25),Ie.lineTo(.3,.13),Ie.quadraticCurveTo(.28,.1,.22,.16),Ie.lineTo(.15,.055),Ie.quadraticCurveTo(.13,.035,.08,.115),Ie.lineTo(.01,.045),Ie.quadraticCurveTo(-.02,.028,-.09,.12),Ie.lineTo(-.17,.065),Ie.quadraticCurveTo(-.2,.05,-.22,.16),Ie.lineTo(-.3,.13),Ie.closePath();let Pe=P(Ie,.025,o,J,.006);Pe.position.z=.191,O(J,-.045,.222);for(let we of[-1,1])E([we*.24,-.085,.206],[.045,.028,.012],f,J);let Re=new be;Re.position.set(.02,.285,0),Re.rotation.z=-.12,Re.scale.setScalar(.6),J.add(Re);let le=document.createElement("canvas");le.width=512,le.height=256;let Ve=le.getContext("2d");Ve.fillStyle="#ffd62d",Ve.fillRect(0,0,512,256),Ve.fillStyle="#0088ea";for(let we=0;we<4;we++)for(let Ue=0;Ue<7;Ue++)Ve.beginPath(),Ve.ellipse(Ue*85+we%2*42,30+we*67,18,14,0,0,e),Ve.fill();let q=new Ft(le);q.colorSpace=ft;let Ae=new Be({map:q,roughness:.82}),ce=u(new Os(.205,.5,48),Ae,Re,!0);ce.position.y=.25,T(.205,.009,0,r,Re),E([0,.515,0],[.042,.045,.041],c,Re);for(let we=0;we<8;we++){let Ue=we/8*e;A([0,.515,.005],[Math.cos(Ue)*.07,.515+Math.sin(Ue)*.07,.006],.012,c,Re)}return{object:J}}function w(){let J=new be;J.name="Orange-beanie sushi Figpal";let ye=new St;ye.moveTo(-.32,-.035),ye.quadraticCurveTo(-.38,-.11,-.31,-.2);for(let Ae=0;Ae<8;Ae++){let ce=-.31+Ae*.0775;ye.quadraticCurveTo(ce+.038,-.285,ce+.0775,-.225)}ye.quadraticCurveTo(.39,-.13,.32,-.035),ye.quadraticCurveTo(0,.035,-.32,-.035),P(ye,.43,a,J,.025);let Ie=new St;Ie.moveTo(-.37,-.015),Ie.lineTo(-.41,.17),Ie.quadraticCurveTo(-.4,.22,-.21,.29),Ie.quadraticCurveTo(0,.33,.21,.29),Ie.quadraticCurveTo(.4,.22,.41,.17),Ie.lineTo(.37,-.015),Ie.quadraticCurveTo(0,.055,-.37,-.015),P(Ie,.43,x,J,.022);let Pe=new St;Pe.moveTo(-.12,.022),Pe.lineTo(-.13,.31),Pe.quadraticCurveTo(0,.33,.13,.31),Pe.lineTo(.12,.022),Pe.closePath();let Re=P(Pe,.44,r,J,.006);Re.position.z=.008,O(J,-.1,.253,.1,"afraid");for(let Ae=0;Ae<16;Ae++){let ce=Ae/16*e;E([Math.cos(ce)*.29,-.18+Math.sin(ce)*.025,Math.sin(ce)*.17],[.031,.022,.015],a,J)}let le=new be;le.position.y=.3,J.add(le),u(new Zt(1,32,16,0,e,0,Math.PI/2),l,le,!0).scale.set(.235,.235,.2);for(let Ae=0;Ae<10;Ae++){let ce=Ae/10*e,we=[];for(let Ue=0;Ue<=14;Ue++){let Fe=.08+Ue/14*(Math.PI/2-.08);we.push([Math.sin(Fe)*Math.cos(ce)*.238,Math.cos(Fe)*.237,Math.sin(Fe)*Math.sin(ce)*.204])}C(we,.006,h,le)}let q=M(.258,.065,[0,.002,0],l,le);q.scale.z=.86,T(.26,.009,-.03,r,le).scale.y=.86,T(.26,.008,.034,r,le).scale.y=.86;for(let Ae=0;Ae<30;Ae++){let ce=Ae/30*e;A([Math.cos(ce)*.259,-.025,Math.sin(ce)*.224],[Math.cos(ce)*.259,.027,Math.sin(ce)*.224],.0045,h,le)}return{object:J}}function W(){let J=new be;J.name="Propeller-hat pufferfish Figpal",E([0,0,0],[.335,.33,.25],d,J,!0);let ye=new St;ye.moveTo(.26,.03),ye.quadraticCurveTo(.34,.06,.4,.16),ye.quadraticCurveTo(.49,.23,.5,.06),ye.quadraticCurveTo(.51,-.11,.43,-.13),ye.lineTo(.33,-.05),ye.closePath(),P(ye,.11,d,J,.02);for(let le=0;le<3;le++)C([[.38,-.025+le*.04,.078],[.465,-.075+le*.085,.078]],.012,g,J);for(let le of[-1,1]){let Ve=E([le*.303,-.02,.13],[.065,.1,.035],d,J,!0);Ve.rotation.z=le*.25;for(let q=0;q<3;q++)C([[le*.3,-.06+q*.04,.168],[le*.338,-.075+q*.05,.16]],.01,g,J)}O(J,.015,.252,.09,"worried");for(let le=0;le<11;le++){let Ve=Math.PI*1.03+le/10*Math.PI*.9,q=Math.cos(Ve)*.26,Ae=Math.sin(Ve)*.25,ce=.25*Math.sqrt(Math.max(.04,1-(q/.335)**2-(Ae/.33)**2))+.008;C([[q,Ae,ce],[q+.008,Ae-.027,ce]],.011,g,J)}for(let le=0;le<7;le++){let Ve=.15+le/6*Math.PI*.88;A([Math.cos(Ve)*.31,Math.sin(Ve)*.31,0],[Math.cos(Ve)*.37,Math.sin(Ve)*.37,0],.012,g,J)}let Ie=new be;Ie.position.set(0,.275,0),J.add(Ie);let Pe=[s(15746581),x,s(4802281),x];for(let le=0;le<4;le++)u(new Zt(1,12,12,le*e/4,e/4,0,Math.PI/2),Pe[le],Ie).scale.set(.215,.2,.215);T(.218,.011,0,r,Ie),A([0,.2,0],[0,.27,0],.012,a,Ie);let Re=new be;Re.position.y=.275,Ie.add(Re),E([0,0,0],[.025,.018,.025],a,Re);for(let le of[-1,1])E([le*.066,0,0],[.083,.012,.029],a,Re);return{object:J,propeller:Re}}let z=ni(14802384),B=ni(9606540),H=ni(15065300),Z=ni(14012614);Z.bumpScale=7e-4,Z.envMapIntensity=.85;let me=new Be({color:1382417,roughness:.29,metalness:.08}),Q=[];for(let J=0;J<=12;J++){let ye=J/12*Math.PI;Q.push(new S(Math.cos(ye)*.015,.01+Math.sin(ye)*.015,0))}for(let J=0;J<=12;J++){let ye=Math.PI+J/12*Math.PI;Q.push(new S(Math.cos(ye)*.015,-.01+Math.sin(ye)*.015,0))}let ge=new dn(new Jt(Q,!0),Ut.chainSegments,.0048,Ut.chainRadialSegments,!0),N=new At,ae=new S(0,1,0),ne=new pt;function ie(J,ye,Ie=null){let Pe=new Jt(J.map(Ae=>new S(...Ae))),Re=Pe.getLength(),le=Ie??Math.max(2,Math.ceil(Re/.033)),Ve=new vn(ge,Z,le);Ve.name="Interlocking steel chain links",Ve.castShadow=!0,Ve.receiveShadow=!0,Ve.frustumCulled=!1,ye.add(Ve);for(let Ae=0;Ae<le;Ae++)Ve.setColorAt(Ae,new dt().setRGB(.67+n()*.3,.58+n()*.3,.45+n()*.34));function q(Ae,ce){let we=new S(...Ae),Ue=new S(...ce),Fe=Ue.clone().sub(we),ut=Fe.length(),Pt=Math.min(le,Math.max(2,Math.ceil(ut/.033)));Ve.count=Pt,Fe.normalize();for(let Ot=0;Ot<Pt;Ot++)N.position.copy(we).lerp(Ue,Ot/(Pt-1)),N.quaternion.setFromUnitVectors(ae,Fe),ne.setFromAxisAngle(ae,(Ot%2?Math.PI/2:0)+Math.sin(Ot*7.17)*.07),N.quaternion.multiply(ne),N.scale.setScalar(1),N.updateMatrix(),Ve.setMatrixAt(Ot,N.matrix);Ve.instanceMatrix.needsUpdate=!0}if(Ie)Ve.instanceMatrix.setUsage(Dn),q(J[0],J.at(-1));else for(let Ae=0;Ae<le;Ae++){let ce=Ae/(le-1);N.position.copy(Pe.getPointAt(ce)),N.quaternion.setFromUnitVectors(ae,Pe.getTangentAt(ce)),ne.setFromAxisAngle(ae,(Ae%2?Math.PI/2:0)+Math.sin(Ae*7.17)*.07),N.quaternion.multiply(ne),N.scale.setScalar(1),N.updateMatrix(),Ve.setMatrixAt(Ae,N.matrix)}return{object:Ve,setPoints:q}}let F=x0(),re=T0(),{glass:X,haze:V,fluid:$,liquidTop:xe,foam:Ce,bubble:ve,ripple:te,waterTime:L}=F,_e=[],se=[],he=[],de=[],Me=new At,Se=[{x:-3.05,z:-1.05,height:2.02,winchY:2.8},{x:-2.85,z:.3,height:1.84,winchY:2.65},{x:-2.15,z:1.45,height:1.6,winchY:2.38}];for(let J=0;J<Se.length-1;J++){let ye=Se[J],Ie=Se[J+1];A([ye.x,3.065,ye.z],[Ie.x,3.065,Ie.z],.052,z)}let U=[v,w,W];for(let J=0;J<3;J++){let{x:ye,z:Ie,height:Pe,winchY:Re}=Se[J],le=new be;le.position.set(ye,.012,Ie),le.name=`Green bubbling canister ${J+1}`,i.add(le),M(.515,.16,[0,.1,0],z,le),M(.46,.035,[0,.025,0],B,le);for(let He=0;He<8;He++){let qe=He/8*e;E([Math.cos(qe)*.49,.15,Math.sin(qe)*.49],[.022,.022,.022],H,le)}let Ve=M(.485,1.02,[0,.72,0],X,le,!0);Ve.castShadow=!1,Ve.renderOrder=6;let q=M(.487,1.02,[0,.72,0],V,le,!0);q.name="Condensation, mineral streaks and algae tide marks",q.castShadow=!1,q.renderOrder=7,le.add(re());let Ae=M(.444,.865,[0,.64,0],$,le,!0);Ae.castShadow=!1,Ae.renderOrder=2;let ce=w0(J);le.add(ce.group),M(.444,.018,[0,.215,0],xe,le);for(let He of[.225,1.235])T(.484,.036,He,z,le),T(.454,.01,He-.018,B,le);for(let He of[.15,2.24,4.34]){let qe=Math.cos(He)*.485,Mn=Math.sin(He)*.485;A([qe,.22,Mn],[qe,1.23,Mn],.021,z,le)}for(let He of[-1,1])C([[He*.47,.96,0],[He*.58,.96,0],[He*.58,.74,0],[He*.48,.74,0]],.022,z,le);let we=new Bs(0,.444,Ut.mobile?32:48,Ut.mobile?6:10);we.rotateX(-Math.PI/2);let Ue=u(we,xe,le);Ue.position.y=1.074,Ue.castShadow=!1,Ue.renderOrder=4,T(.441,.006,1.075,xe,le).renderOrder=4;let Fe=Array.from({length:48},()=>({x:(n()-.5)*.61,z:(n()-.5)*.61,r:.007+n()**2*.023,phase:n(),speed:.15+n()*.17})),ut=new vn(new Zt(1,12,8),ve,Fe.length);ut.name="Rising liquid bubbles",ut.instanceMatrix.setUsage(Dn),ut.frustumCulled=!1,ut.renderOrder=3,le.add(ut);let Pt=[];for(let He=0;He<24;He++){let qe=n()*e,Mn=He<18?.4+n()*.025:n()*.34,nn=.006+n()*.016,Qn=E([Math.cos(qe)*Mn,1.074,Math.sin(qe)*Mn],[nn,nn*.65,nn],Ce,le);Qn.castShadow=!1,Qn.renderOrder=5,Pt.push({mesh:Qn,baseRadius:nn,phase:n()*e})}let Ot=[];for(let He=0;He<5;He++){let qe=u(new Bs(.96,1,40),te.clone(),le);qe.rotation.x=-Math.PI/2,qe.position.set((n()-.5)*.45,1.078,(n()-.5)*.45),qe.castShadow=!1,qe.renderOrder=5,Ot.push({mesh:qe,phase:n()})}let lt=document.createElement("canvas");lt.width=256,lt.height=128;let It=lt.getContext("2d");It.fillStyle="#bec39f",It.fillRect(0,0,256,128),It.fillStyle="#242c22",It.font="bold 67px monospace",It.textAlign="center",It.fillText(`0${J+1}`,128,87);let Xn=new Ft(lt);Xn.colorSpace=ft;let mi=u(new Et(.17,.085),new Be({map:Xn,roughness:.9}),le);mi.position.set(0,.115,.517),mi.castShadow=!1;for(let He=0;He<5;He++){let qe=y([.065,.065,.007],[-.23+He*.115,.12,.5],He%2?r:s(10064462,.85,0),le);qe.rotation.z=-.45}mi.position.z=.52;let ss=M(.064,.03,[.32,1.19,.37],z,le);ss.rotation.x=Math.PI/2,u(new Ei(.052,24),o,le).position.set(.32,1.19,.391),C([[.32,1.19,.395],[.3,1.219,.395]],.003,r,le);let Je=new be;Je.name=`Tank ${J+1} drain valve`,Je.position.set(.3,.29,.43),Je.userData.valveIndex=J,le.add(Je);let st=M(.042,.19,[0,0,0],z,Je);st.rotation.x=Math.PI/2,C([[0,0,.045],[0,-.035,.16],[0,-.1,.23]],.033,z,Je);let nt=new At;nt.position.set(0,-.1,.23),Je.add(nt);let rt=u(new Bs(.024,.034,20),z,Je);rt.position.copy(nt.position),rt.rotation.x=.6;let ze=u(new Ei(.024,20),B,Je);ze.position.copy(nt.position),ze.position.z-=.001,ze.rotation.x=.6,A([0,0,.01],[0,.075,.11],.012,z,Je);let Qe=new be;Qe.name="Spinning red drain handwheel",Qe.position.set(0,.075,.12),Je.add(Qe),u(new Qt(.088,.01,8,32),h,Qe);for(let He=0;He<3;He++){let qe=He/3*e;A([0,0,0],[Math.cos(qe)*.084,Math.sin(qe)*.084,0],.007,h,Qe)}let bt=M(.018,.028,[0,0,0],H,Qe);bt.rotation.x=Math.PI/2;let qt=u(new Zt(.102,12,8),new gt({transparent:!0,opacity:0,depthWrite:!1,colorWrite:!1}),Qe);qt.castShadow=!1,he.push({object:Je,outlet:nt,setOpen(He){Qe.rotation.z=-He*Math.PI*4,Qe.position.z=.12+He*.018}});let an=new Nn(7052325,.58,1.7,2);an.position.set(0,.85,0),le.add(an),se.push({surface:Ue,bubbles:ut,bubbleData:Fe,foam:Pt,ripples:Ot,floatingBones:ce,phase:J*1.7});let gn=Math.atan2(1.85221-ye,3.1149-Ie);le.rotation.y=gn;let Gt=new be;Gt.name=`Chain hoist ${J+1}`,Gt.position.set(ye,0,Ie),Gt.rotation.y=gn,i.add(Gt),y([.4,.05,.34],[0,3.13,0],z,Gt);for(let He of[-1,1])A([He*.16,3.12,0],[He*.16,Re+.1,0],.023,z,Gt),E([He*.16,3.12,.08],[.026,.026,.026],H,Gt);let I=new be;I.name=`Winch ${J+1}: lower or raise Figpal`,I.position.y=Re,I.userData.hoistIndex=J,Gt.add(I),y([.46,.12,.3],[0,.1,-.03],z,I);for(let He of[-1,1]){y([.035,.22,.27],[He*.191,.012,-.01],z,I);let qe=M(.057,.055,[He*.205,0,0],me,I);qe.rotation.z=Math.PI/2;for(let Mn of[-.073,.093])for(let nn of[-.106,.096]){let Qn=u(new Yt(.013,.013,.018,6),H,I);Qn.position.set(He*.215,Mn,nn),Qn.rotation.z=Math.PI/2}}y([.105,.09,.11],[.3,.15,-.035],B,I),C([[.3,.18,.01],[.38,.21,.06],[.43,.12,.1],[.4,-.04,.07]],.008,me,I);let K=document.createElement("canvas");K.width=256,K.height=128;let oe=K.getContext("2d");oe.fillStyle="#817653",oe.fillRect(0,0,256,128),oe.fillStyle="#2a2b24",oe.font="bold 22px monospace",oe.fillText("CHAIN HOIST",15,30),oe.font="18px monospace",oe.fillText("250 KG / 1978",15,62),oe.fillText("SERVICE OVERDUE",15,103);for(let He=0;He<90;He++)oe.fillStyle=He%2?"rgba(42,25,12,.48)":"rgba(170,156,116,.7)",oe.fillRect(n()*256,n()*128,n()*17,n()*3);let ue=new Ft(K);ue.colorSpace=ft;let ee=u(new Et(.25,.1),new Be({map:ue,roughness:.87}),I);ee.position.set(-.005,.1,.124),ee.rotation.z=.028;let Le=new be;Le.rotation.z=Math.PI/2,I.add(Le);let We=new be;We.name="Rotating chain sprocket",Le.add(We),M(.1,.28,[0,0,0],B,We);for(let He of[-1,1]){M(.136,.026,[0,He*.16,0],z,We);for(let qe=0;qe<12;qe++){let Mn=qe/12*e;y([.026,.03,.032],[Math.cos(Mn)*.13,He*.16,Math.sin(Mn)*.13],H,We)}}let je=[];for(let He=0;He<=120;He++){let qe=He/120*e*4;je.push([Math.cos(qe)*.106,-.1+He/120*.2,Math.sin(qe)*.106])}ie(je,We).object.name="Greasy chain wound around the drum";let et=M(.105,.24,[.3,.015,-.04],B,I);et.rotation.z=Math.PI/2;for(let He=0;He<6;He++){let qe=M(.115,.009,[.215+He*.033,.015,-.04],z,I);qe.rotation.z=Math.PI/2}let ot=new be;ot.position.set(-.22,0,0),I.add(ot),A([0,0,0],[0,-.13,0],.014,z,ot),A([0,-.13,0],[-.09,-.13,0],.021,B,ot);let at=new Nn(12371885,.4,.85,2);at.position.set(-.24,.12,.36),I.add(at),E([0,.17,.28],[.018,.011,.012],new gt({color:7767659}),I);let Ke=new be;Ke.name=`Suspended Figpal ${J+1}`,Ke.position.y=Pe,Gt.add(Ke);let Tt=U[J]();Tt.object.scale.setScalar(.62),Tt.object.rotation.z=(J-1)*.035,Ke.add(Tt.object);let xt=b0(Tt.object,J),Bt=new At;Bt.position.set(0,.5,0),Ke.add(Bt),de.push(Bt),A([-.22,.45,0],[.22,.45,0],.019,z,Ke);let Cn=u(new Qt(.045,.01,6,18,Math.PI*1.65),H,Ke);Cn.position.set(0,.49,0),Cn.rotation.z=-.5,A([-.028,.476,.008],[.016,.511,.008],.004,B,Ke);for(let He of[-1,1])ie([[He*.21,.45,0],[He*.245,.11,0],[He*.23,-.12,.015],[He*.16,-.205,.04],[0,-.222,.045]],Ke);let Ht=ie([[0,Re-.1,.025],[0,Pe+.52,0]],Gt,72),it=ie([[-.1,Re-.01,-.11],[-.11,Re-.36,-.12],[-.16,Re-.4,-.1],[-.2,Re-.05,-.08]],Gt);it.object.name="Winch return chain loop";let zt=new be;zt.name=`Canister ${J+1} winch control`,zt.position.set(.39,.85,.4),zt.rotation.y=.35,zt.userData.hoistIndex=J,le.add(zt),y([.12,.21,.07],[0,0,0],B,zt),E([0,.047,.047],[.024,.024,.015],s(8072739,.6,0),zt),E([0,-.047,.047],[.024,.024,.015],s(6913097,.6,0),zt),C([[.39,.95,.4],[.44,1.02,.35],[.46,1.27,.12],[.44,Re-.13,.06],[.24,Re,0]],.007,B,Gt),_e.push({rig:Gt,hanger:Ke,transformation:xt,captive:Tt.object,propeller:Tt.propeller,drum:We,crank:ot,loadChain:Ht,height:Pe,homeHeight:Pe,targetHeight:Pe,winchY:Re,phase:J*2.1,lowered:!1})}let b=new Nn(11712685,.75,3.8,2);b.position.set(-1.75,2.75,-.2),i.add(b);function j(J){let ye=_e[J];return ye?(ye.lowered=!ye.lowered,ye.targetHeight=ye.lowered?.65:ye.homeHeight,`Figpal ${J+1}${ye.transformation.transformed?"'s bones":""} ${ye.lowered?"lowering into the canister":"rising above the canister"}.`):null}function pe(){for(let J of _e)J.lowered=!0,J.targetHeight=.65}function Te(){for(let J of _e)J.lowered=!1,J.height=J.targetHeight=J.homeHeight,J.hanger.position.set(0,J.homeHeight,0),J.hanger.rotation.z=0,J.loadChain.setPoints([0,J.winchY-.1,.025],[0,J.homeHeight+.52,0]),J.drum.rotation.y=J.crank.rotation.x=0,J.transformation.reset()}let Ee=0,Xe={};function Oe(J,ye=!1){let Ie=Math.max(0,Math.min(.05,J-Ee));Ee=J;let Pe=ye?0:J;L.value=Pe;for(let Re of _e){let le=Re.targetHeight-Re.height;Re.height=ye?Re.targetHeight:Re.height+Math.sign(le)*Math.min(Math.abs(le),Ie*.15),v0(J,Re.height,Re.winchY,Re.phase,ye,Xe),Re.hanger.position.set(Xe.x,Xe.y,0),Re.hanger.rotation.z=Xe.angle,Re.loadChain.setPoints([0,Re.winchY-.1,.025],[Xe.hookX,Xe.hookY,0]),Re.drum.rotation.y=(Re.homeHeight-Re.height)/.1,Re.crank.rotation.x=(Re.homeHeight-Re.height)/.1,Re.transformation.update(1.086),Re.propeller&&(Re.propeller.rotation.y=Pe*.18)}for(let Re of se){Re.floatingBones.update(J,ye);let le=Re.surface.geometry.attributes.position,Ve=Re.surface.geometry.attributes.normal;for(let q=0;q<le.count;q++){let Ae=le.getX(q),ce=le.getZ(q),we=Ae*17+Pe*1.4+Re.phase,Ue=ce*14-Pe*1.1,Fe=(Ae+ce)*28-Pe*2.1;le.setY(q,Math.sin(we)*Math.cos(Ue)*.0035+Math.sin(Fe)*.0012);let ut=Math.cos(we)*Math.cos(Ue)*.0595+Math.cos(Fe)*.0336,Pt=-Math.sin(we)*Math.sin(Ue)*.049+Math.cos(Fe)*.0336,Ot=Math.hypot(ut,1,Pt);Ve.setXYZ(q,-ut/Ot,1/Ot,-Pt/Ot)}le.needsUpdate=!0,Ve.needsUpdate=!0,Re.bubbleData.forEach((q,Ae)=>{let ce=(Pe*q.speed+q.phase)%1;Me.position.set(q.x+Math.sin(Pe*1.3+Ae)*.012,.25+ce*.84,q.z+Math.cos(Pe+Ae)*.009),Me.scale.setScalar(q.r*(.65+ce*.5)),Me.updateMatrix(),Re.bubbles.setMatrixAt(Ae,Me.matrix)}),Re.bubbles.instanceMatrix.needsUpdate=!0;for(let q of Re.foam){let Ae=(Math.sin(Pe*2.4+q.phase)+1)*.5;q.mesh.scale.set(q.baseRadius,q.baseRadius*(.12+Ae*.28),q.baseRadius)}for(let q of Re.ripples){let Ae=(Pe*.48+q.phase)%1,ce=.012+Ae*.075;q.mesh.scale.setScalar(ce),q.mesh.visible=Ae<.88,q.mesh.material.opacity=(1-Ae)*.16}}}Oe(0);function ke(J){for(let ye of[z,B,H,Z,X,$,xe,ve])ye.envMap=J,ye.needsUpdate=!0}function vt(J){let ye=_e[J];return!!ye&&!ye.transformation.transformed}function De(J){let ye=_e[J];return vt(J)&&!ye.lowered&&Math.abs(ye.height-ye.homeHeight)<.025}return{group:i,update:Oe,valves:he,toggleHoist:j,isLowered:J=>_e[J]?.lowered??!1,canSpeak:vt,isHanging:De,lowerAll:pe,reset:Te,speechAnchors:de,setEnvironment:ke}}function A0(i=[]){let e=i.map(n=>(n.updateWorldMatrix(!0,!1),{inverse:n.matrixWorld.clone().invert(),width:n.geometry.parameters.width/2,depth:n.geometry.parameters.depth/2,top:n.getWorldPosition(new S).y+n.geometry.parameters.height/2})),t=new S;return(n,s)=>{let r=.003;for(let o of e)t.set(n,0,s).applyMatrix4(o.inverse),Math.abs(t.x)<=o.width&&Math.abs(t.z)<=o.depth&&(r=Math.max(r,o.top));return r}}function Md(i,e){i.updateWorldMatrix(!0,!0);let t=1/0,n=new S,s=new wt,r=new wt;function o(a){if(a.userData.ignoreFloorContact)return;let c=a.isMesh&&a.geometry.attributes.position;if(c)for(let l=0;l<(a.isInstancedMesh?a.count:1);l++){a.isInstancedMesh?(a.getMatrixAt(l,s),r.multiplyMatrices(a.matrixWorld,s)):r.copy(a.matrixWorld);for(let h=0;h<c.count;h++)n.fromBufferAttribute(c,h).applyMatrix4(r),t=Math.min(t,n.y-e(n.x,n.z))}for(let l of a.children)o(l)}return o(i),t}function pr(i,e=()=>.003){let t=Md(i,e);if(!Number.isFinite(t))return i;let n=i.getWorldPosition(new S);return n.y+=6e-4-t,i.parent&&i.parent.worldToLocal(n),i.position.copy(n),i.updateWorldMatrix(!1,!0),i.userData.floorProp=!0,i}function ol(i,e){i.updateWorldMatrix(!0,!1);let t=i.geometry,n=t.attributes.position,s=t.parameters.radialSegments+1,r=i.matrixWorld.clone().invert(),o=new S,a=new S,c=t.parameters.radius;for(let l=0;l<n.count;l+=s){o.set(0,0,0);for(let x=0;x<s-1;x++)o.add(a.fromBufferAttribute(n,l+x).applyMatrix4(i.matrixWorld));o.divideScalar(s-1);let h=e(o.x,o.z),p=1-Ze.smoothstep(o.y-h,.055,.15),f=i.userData.anchorStart?Ze.smoothstep(l/s,0,3):1,d=i.userData.anchorEnd?Ze.smoothstep((n.count-s-l)/s,0,3):1,g=(h+c+6e-4-o.y)*p*f*d;for(let x=0;x<s;x++)a.fromBufferAttribute(n,l+x).applyMatrix4(i.matrixWorld),a.y+=g,a.applyMatrix4(r),n.setXYZ(l+x,a.x,a.y,a.z)}n.needsUpdate=!0,t.computeVertexNormals(),t.computeBoundingBox(),t.computeBoundingSphere()}function C0(i,e=()=>.003){let t=new be;t.name="Fallen nursery mobile with four soft animals",t.position.set(-1.05,0,.55);let n=48319,s=()=>(n=n*1664525+1013904223>>>0,n/4294967296),r=document.createElement("canvas");r.width=r.height=512;let o=r.getContext("2d");o.fillStyle="#c6c1ac",o.fillRect(0,0,512,512);for(let X=0;X<7e3;X++){let V=s()*512,$=s()*512;o.strokeStyle=X%2?"rgba(58,52,36,.12)":"rgba(246,236,212,.28)",o.lineWidth=.6,o.beginPath(),o.moveTo(V,$),o.lineTo(V+2,$+3),o.stroke()}for(let X=0;X<45;X++){let V=s()*512,$=s()*512,xe=8+s()*70,Ce=o.createRadialGradient(V,$,0,V,$,xe);Ce.addColorStop(0,"rgba(63,52,31,.15)"),Ce.addColorStop(1,"rgba(63,52,31,0)"),o.fillStyle=Ce,o.fillRect(V-xe,$-xe,xe*2,xe*2)}function a(X){let V=new Ft(X);return V.colorSpace=ft,V.anisotropy=4,V}let c=a(r);function l(X,V=c){return new Vt({color:X,map:V,bumpMap:c,bumpScale:.0012,roughness:.96,sheen:.32,sheenColor:12433832,sheenRoughness:.95})}let h=l(13801630),p=l(14792108),f=l(7839145),d=l(5270656),g=l(14132309),x=l(15128233),m=l(3420203),u=new Be({color:6313803,roughness:1}),E=new Be({color:10525568,roughness:1}),y=new Be({color:1645337,roughness:.48}),M=new Be({color:12762273,map:c,roughness:.68,bumpMap:c,bumpScale:.001}),C=new Be({color:8159861,metalness:.65,roughness:.56}),A=document.createElement("canvas");A.width=A.height=512;let T=A.getContext("2d");T.drawImage(r,0,0),T.fillStyle="#343027";for(let X=0;X<12;X++){let V=X*45-15,$=X%2*30;T.beginPath(),T.moveTo(V,$),T.bezierCurveTo(V+55,105,V+8,180,V+51,268),T.lineTo(V+23,238),T.bezierCurveTo(V-12,148,V+26,93,V-9,$),T.fill(),T.beginPath(),T.moveTo(V+25,512),T.bezierCurveTo(V+69,417,V+6,367,V+45,285),T.lineTo(V+24,314),T.bezierCurveTo(V-11,395,V+41,438,V-3,512),T.fill()}let P=l(14262365,a(A)),O=new Zt(1,24,16);function v(X,V,$=t){let xe=new ht(X,V);return xe.castShadow=!0,xe.receiveShadow=!0,$.add(xe),xe}function w(X,V,$,xe){let Ce=v(O,$,xe);return Ce.position.set(...X),Ce.scale.set(...V),Ce}function W(X,V,$,xe=t){return v(new dn(new Jt(X.map(Ce=>new S(...Ce))),Math.max(20,X.length*6),V,6,!1),$,xe)}function z(X,V,$,xe,Ce=t){let ve=new S(...X),te=new S(...V),L=te.clone().sub(ve),_e=v(new Yt($,$,L.length(),12),xe,Ce);return _e.position.copy(ve).add(te).multiplyScalar(.5),_e.quaternion.setFromUnitVectors(new S(0,1,0),L.normalize()),_e}function B(X,V,$,xe=t){let Ce=v(new Mt(...X),$,xe);return Ce.position.set(...V),Ce}function H(X,V,$,xe){let Ce=new St;Ce.moveTo(-.5,0),Ce.quadraticCurveTo(-.48,.44,0,1),Ce.quadraticCurveTo(.49,.49,.5,0),Ce.quadraticCurveTo(0,-.1,-.5,0);let ve=new on(Ce,{depth:.18,bevelEnabled:!0,bevelSize:.06,bevelThickness:.05,bevelSegments:2,curveSegments:8,steps:1});ve.translate(0,0,-.09);let te=v(ve,$,xe);return te.scale.set(...V),te.position.set(...X),te}function Z(X,V,$=.092,xe=.047){for(let Ce of[-1,1])w([Ce*xe,$,V],[.009,.012,.007],y,X)}function me(X){let V=new be;V.name=`${X} mobile animal`;let $=X==="Pig"?h:X==="Elephant"?f:X==="Tiger"?P:g,xe=w([0,.065,-.025],[.112,.091,.154],$,V);xe.name="Soft body resting on the floor";for(let te of[-1,1])w([te*.047,.073,.08],[.077,.09,.09],$,V);W([[0,.13,.116],[0,.092,.166],[0,.036,.16],[0,.008,.136]],.0018,u,V);for(let te of[-1,1])for(let L of[-.106,.1]){let _e=w([te*.11,.002,L],[.043,.043,.062],$,V);if(_e.rotation.z=te*.28,w([te*.134,-.007,L+.015],[.021,.03,.041],X==="Pig"?m:X==="Elephant"?d:p,V),X==="Tiger"||X==="Fox")for(let se=0;se<3;se++)w([te*.151,-.012+(se-1)*.014,L+.034],[.004,.004,.006],m,V)}let Ce=w([0,.102,-.17],X==="Elephant"?[.097,.094,.094]:[.09,.083,.083],$,V);if(X==="Pig"){w([0,.08,-.244],[.049,.032,.024],p,V);for(let L of[-1,1])w([L*.019,.082,-.267],[.006,.009,.003],m,V);for(let L of[-1,1]){let _e=H([L*.061,.153,-.177],[.072,.083,.09],h,V);_e.rotation.z=-L*.35}let te=[];for(let L=0;L<=45;L++){let _e=L/45*Math.PI*3.9,se=.025*(1-L/70);te.push([Math.sin(_e)*se,.115+Math.cos(_e)*se,.167+L/45*.028])}W(te,.0065,p,V),Z(V,-.242,.122)}else if(X==="Elephant"){for(let te of[-1,1])w([te*.098,.098,-.16],[.071,.08,.027],f,V),w([te*.113,.101,-.184],[.047,.055,.009],d,V);W([[0,.099,-.24],[0,.055,-.273],[0,-.006,-.268],[.018,-.031,-.304],[.032,-.006,-.317]],.022,f,V),Z(V,-.248,.127,.043),W([[0,.122,.15],[.025,.115,.185],[.042,.08,.199]],.006,d,V),w([.044,.077,.2],[.013,.018,.012],d,V)}else{for(let te of[-1,1]){let L=H([te*.057,.155,-.172],[.067,.071,.1],$,V);L.rotation.z=-te*.26,H([te*.057,.162,-.184],[.038,.045,.055],p,V)}for(let te of[-1,1])w([te*.025,.076,-.235],[.035,.027,.023],x,V);if(w([0,.091,-.26],[.015,.011,.011],m,V),Z(V,-.241,.124,.044),X==="Tiger")W([[0,.134,.15],[.035,.162,.193],[.067,.155,.201],[.075,.129,.182]],.012,P,V),w([.075,.129,.182],[.014,.015,.016],m,V);else{let te=w([.042,.13,.191],[.058,.061,.131],g,V);te.rotation.x=-.45,te.rotation.z=-.25;let L=w([.039,.182,.271],[.045,.046,.061],x,V);L.rotation.x=-.45}}for(let te of[-1,1])W([[te*.1,.1,.07],[te*.113,.065,-.02],[te*.094,.092,-.1]],.0015,u,V);let ve=v(new Qt(.014,.004,6,16,Math.PI*1.75),E,V);return ve.position.set(0,.158,-.065),ve.rotation.x=Math.PI/2,{object:V,tab:ve,body:xe}}function Q(X,V){X.updateWorldMatrix(!0,!0);let $=X.getWorldPosition(new S);$.y-=Md(V,e)+.006,X.parent.worldToLocal($),X.position.copy($),X.updateWorldMatrix(!0,!0);let xe=new S,Ce=new wt;X.traverse(ve=>{if(!ve.isMesh)return;let te=ve.geometry.clone(),L=te.attributes.position;Ce.copy(ve.matrixWorld).invert();let _e=!1;for(let se=0;se<L.count;se++){xe.fromBufferAttribute(L,se).applyMatrix4(ve.matrixWorld);let he=e(xe.x,xe.z)+6e-4;xe.y>=he||(xe.y=he,xe.applyMatrix4(Ce),L.setXYZ(se,xe.x,xe.y,xe.z),_e=!0)}_e?(L.needsUpdate=!0,te.computeVertexNormals(),te.computeBoundingBox(),te.computeBoundingSphere(),ve.geometry=te):te.dispose()}),X.userData.floorProp=!0}let ge=new be;ge.name="Toppled mobile support",t.add(ge),B([.16,.055,.12],[-.6,.0305,.48],M,ge),B([.12,.028,.1],[-.6,.0765,.48],M,ge),z([-.6,.0565,.48],[-.6,.1425,.48],.012,C,ge),w([-.6,.1455,.48],[.043,.012,.02],M,ge),W([[-.59,.039,.44],[-.63,.017,.1],[-.48,.017,-.3],[-.2,.02,-.47],[.12,.019,-.39],[.19,.017,-.13],[.04,.052,0]],.013,M,ge),pr(ge,e);let N=new be;N.name="Scuffed mobile music box",N.position.set(0,.116,0),N.rotation.set(.21,0,-.18),t.add(N);let ae=v(new Yt(.103,.103,.068,40),M,N),ne=v(new Qt(.103,.002,6,40),u,N);ne.rotation.x=Math.PI/2;let ie=w([0,.039,0],[.034,.009,.034],g,N);for(let X=0;X<5;X++)B([.03,.002,.002],[-.049+X*.019,.035,.041],u,N);z([0,-.02,-.093],[0,-.02,-.145],.005,C,N),w([0,-.02,-.15],[.026,.012,.005],C,N),t.updateMatrixWorld(!0),pr(N,e);let F=[[-.37,.068,.035],[.34,.103,-.025],[.018,.058,-.33],[-.025,.075,.34]];for(let X of F)X[1]=e(t.position.x+X[0],t.position.z+X[2])+.0076,z([0,N.position.y,0],X,.007,C);for(let X of F){let V=v(new Qt(.014,.003,6,16),C);V.rotation.x=Math.PI/2,V.position.set(X[0],X[1]-.004,X[2])}let re=[{kind:"Pig",x:.29,z:.35,rear:!0,yaw:-.12,roll:.08,arm:3},{kind:"Tiger",x:-.38,z:.17,rear:!0,yaw:.36,roll:-.12,arm:0},{kind:"Elephant",x:.34,z:-.29,rear:!1,yaw:-.28,roll:-.24,arm:1},{kind:"Fox",x:-.27,z:-.43,rear:!0,yaw:1.12,roll:.2,arm:2}];for(let X of re){let{object:V,tab:$,body:xe}=me(X.kind);V.position.set(X.x,0,X.z),V.scale.setScalar(.88);let Ce=Math.atan2(i.x-(t.position.x+X.x),i.z-(t.position.z+X.z));V.rotation.set(X.kind==="Pig"?-.06:.03,Ce+(X.rear?0:Math.PI)+X.yaw,X.roll,"YXZ"),t.add(V),t.updateMatrixWorld(!0),Q(V,xe),t.updateMatrixWorld(!0);let ve=t.worldToLocal($.getWorldPosition(new S)),te=F[X.arm],L=W([te,[te[0]+.06,.024,te[2]+.08],[(te[0]+ve.x)/2-.05,.023,(te[2]+ve.z)/2+.08],[ve.x-.04,.025,ve.z+.035],ve.toArray()],.0021,E);L.userData.anchorStart=L.userData.anchorEnd=!0,ol(L,e);let _e=document.createElement("canvas");_e.width=_e.height=64;let se=_e.getContext("2d"),he=se.createRadialGradient(32,32,5,32,32,32);he.addColorStop(0,"rgba(0,0,0,.65)"),he.addColorStop(.48,"rgba(0,0,0,.32)"),he.addColorStop(1,"rgba(0,0,0,0)"),se.fillStyle=he,se.fillRect(0,0,64,64);let de=new Ln().setFromObject(V),Me=de.getSize(new S),Se=t.worldToLocal(de.getCenter(new S)),U=new Et(Me.x+.05,Me.z+.05,12,12);U.rotateX(-Math.PI/2),U.translate(Se.x,0,Se.z);let b=U.attributes.position;for(let pe=0;pe<b.count;pe++)b.setY(pe,e(t.position.x+b.getX(pe),t.position.z+b.getZ(pe))+2e-4);U.computeVertexNormals();let j=v(U,new gt({map:new Ft(_e),transparent:!0,depthWrite:!1}));j.name=`${X.kind} floor contact shadow`,j.castShadow=!1,j.userData.ignoreFloorContact=!0}return t}var co=new Map,Ed=31.7;function HM(i){if(co.has(i))return co.get(i);let e=9678115+Math.imul(i,2654435761)>>>0,t=()=>(e=Math.imul(e,1664525)+1013904223>>>0,e/4294967296),n=[],s=.65+t()*1.4;for(;s<Ed-2;){let r=2+Math.floor(t()*5);for(let o=0;o<r;o++){let a=.028+t()*.072;n.push([s,a,t()*.045,t()>.23]),s+=a+.045+t()*.16}t()<.42&&(n.push([s,.22+t()*.4,.005,!0]),s+=.75),s+=1.3+t()*4.2}return co.size>4&&co.delete(co.keys().next().value),co.set(i,n),n}function NM(i,e=!1){if(e)return[.88,.79];let t=Math.floor(i/Ed),n=i-t*Ed,s=HM(t);return[0,1].map(r=>{let o=r?.79:.88;for(let a=0;a<s.length;a++){let[c,l,h,p]=s[a];if(r===1&&!p)continue;let f=c+(r?(a%3-1)*.013:0),d=f+l;if(n>=f&&n<d){let g=Math.min((n-f)/.003,(d-n)/.005,1);o=Ze.lerp(o,h,Math.max(0,g))}else n>=d&&n<d+.025&&(o*=1+.16*(1-(n-d)/.025))}return o*(.985+.015*Math.sin(i*8.7+r))})}function P0(){let i=new be;i.name="Crooked failing fluorescent fixture",i.position.set(.22,2.98,-.55),i.rotation.set(.02,.12,-.075);let e=ni(9673098),t=ni(15065545),n=new Be({color:2369569,roughness:.9}),s=new Be({color:11183498,roughness:.72});function r(g,x,m=[0,0,0]){let u=new ht(g,x);return u.position.set(...m),u.castShadow=!0,u.receiveShadow=!0,i.add(u),u}let o=(g,x,m=e)=>r(new Mt(...g),m,x);function a(g,x,m,u=e){return r(new Yt(g,g,x,16),u,m)}function c(g,x=n,m=.004){return r(new dn(new Jt(g.map(u=>new S(...u))),24,m,5,!1),x)}o([1.53,.055,.32],[0,.012,0],t);for(let g of[-1,1]){let x=o([1.53,.08,.016],[0,-.033,g*.157],t);x.rotation.x=g*.25,o([1.46,.006,.012],[0,-.017,g*.121],n)}o([.38,.045,.085],[.12,.055,0],n);for(let g of[-.69,.69]){o([.065,.05,.275],[g,-.02,0],e);for(let x of[-.132,.132]){let m=a(.012,.012,[g,-.051,x]);o([.016,.002,.003],[g,-.058,x],n),m.rotation.z=.05}}let l=[];for(let[g,x]of[-.078,.078].entries()){let m=document.createElement("canvas");m.width=512,m.height=64;let u=m.getContext("2d"),E=u.createLinearGradient(0,0,512,0);E.addColorStop(0,"#29271f"),E.addColorStop(.035,"#5a5948"),E.addColorStop(.09,"#b4b9a0"),E.addColorStop(.19,"#d9dfc4"),E.addColorStop(.77,"#d0d8bd"),E.addColorStop(.93,"#92977e"),E.addColorStop(.98,"#383c32"),E.addColorStop(1,"#272b22"),u.fillStyle=E,u.fillRect(0,0,512,64);for(let A=0;A<170;A++){let T=A*73.29%512,P=A*23.87%64;u.fillStyle="rgba(35,36,24,.12)",u.fillRect(T,P,1+A%5,1)}let y=new Ft(m);y.colorSpace=ft,y.center.set(.5,.5),y.rotation=Math.PI/2;let M=new Be({map:y,emissiveMap:y,emissive:15003084,emissiveIntensity:2,roughness:.27});l.push(M);let C=a(.019,1.34,[0,-.073,x],M);C.rotation.z=Math.PI/2,C.castShadow=!1;for(let A of[-1,1]){let T=a(.021,.035,[A*.657,-.073,x],e);T.rotation.z=Math.PI/2,o([.037,.075,.056],[A*.704,-.045,x],s);for(let P of[-.007,.007]){let O=a(.0025,.024,[A*.684,-.073,x+P],e);O.rotation.z=Math.PI/2}}c([[-.73,.03,x],[-.77,-.01,x],[-.72,-.04,x+.025]],g?n:new Be({color:7031093,roughness:.8}))}let h=a(.015,.034,[.54,-.035,0],s);h.rotation.x=.08,c([[.57,-.02,.15],[.59,-.15,.17],[.68,-.13,.18],[.68,-.035,.15]],e,.004),c([[.72,.04,0],[.82,.09,.03],[.89,.19,.04],[1.02,.31,.03]],n,.006);let p=new Nn(11647895,.25,1.2,2);p.position.set(0,.1,0),i.add(p);function f(g,x){let m=NM(g,x);return l.forEach((u,E)=>u.emissiveIntensity=m[E]*2.9),p.intensity=(m[0]+m[1])*.2,(m[0]+m[1])/1.67}function d(g){for(let x of[e,t])x.envMap=g,x.needsUpdate=!0}return f(0,!1),{group:i,update:f,setEnvironment:d}}function al(i){let e=Math.max(0,Math.ceil(i));return`${String(Math.floor(e/60)).padStart(2,"0")}:${String(e%60).padStart(2,"0")}`}function I0(i=300,e=()=>performance.now()/1e3){let t=null;return{start(){return t!==null?!1:(t=e()+i,!0)},reset(){t=null},get remainingSeconds(){return t===null?i:Math.max(0,Math.ceil(t-e()))},get status(){return t===null?"waiting":e()>=t?"finished":"running"}}}function L0(i,e){let t=new be;t.name="Five-minute red LED countdown timer",t.position.copy(e),t.position.y=.006,t.rotation.y=Math.atan2(i.x-e.x,i.z-e.z)-Ze.degToRad(16),t.scale.setScalar(.72);let n=I0(),s=new be;s.position.y=.13,s.rotation.x=-.24,t.add(s);let r=document.createElement("canvas");r.width=512,r.height=256;let o=r.getContext("2d");o.fillStyle="#555951",o.fillRect(0,0,512,256);let a=7418,c=()=>(a=a*1664525+1013904223>>>0,a/4294967296);for(let ie=0;ie<1800;ie++)o.fillStyle=ie%4?"rgba(13,16,12,.18)":"rgba(180,171,142,.26)",o.fillRect(c()*512,c()*256,1+c()*4,1+c()*2);for(let ie=0;ie<35;ie++){o.strokeStyle="rgba(194,190,163,.24)",o.lineWidth=.6;let F=c()*512,re=c()*256;o.beginPath(),o.moveTo(F,re),o.lineTo(F+8+c()*39,re+c()*5),o.stroke()}let l=new Ft(r);l.colorSpace=ft;let h=new Be({color:3619894,map:l,bumpMap:l,bumpScale:7e-4,roughness:.82}),p=new Be({color:527113,roughness:.66}),f=new Be({color:7828326,metalness:.65,roughness:.68});function d(ie,F,re=s){let X=new ht(ie,F);return X.castShadow=!0,X.receiveShadow=!0,re.add(X),X}function g(ie,F,re,X=s){let V=d(new Mt(...ie),re,X);return V.position.set(...F),V}let x=new St,m=.59,u=.19,E=.022;x.moveTo(-m/2+E,-u/2),x.lineTo(m/2-E,-u/2),x.quadraticCurveTo(m/2,-u/2,m/2,-u/2+E),x.lineTo(m/2,u/2-E),x.quadraticCurveTo(m/2,u/2,m/2-E,u/2),x.lineTo(-m/2+E,u/2),x.quadraticCurveTo(-m/2,u/2,-m/2,u/2-E),x.lineTo(-m/2,-u/2+E),x.quadraticCurveTo(-m/2,-u/2,-m/2+E,-u/2);let y=new on(x,{depth:.174,bevelEnabled:!0,bevelSize:.006,bevelThickness:.006,bevelSegments:3,steps:1,curveSegments:10});y.translate(0,0,-.087),d(y,h),g([.538,.16,.01],[0,0,.096],p);let M=g([.518,.143,.002],[0,0,.11],new Vt({color:5511450,transparent:!0,opacity:.09,depthWrite:!1,roughness:.22,clearcoat:1,clearcoatRoughness:.1}));M.castShadow=!1;for(let ie of[-.279,.279])for(let F of[-.071,.071]){let re=d(new Yt(.008,.008,.006,12),f);re.rotation.x=Math.PI/2,re.position.set(ie,F,.098),g([.01,.0015,.001],[ie,F,.102],p)}for(let ie of[-.23,.23])for(let F of[-.06,.06])g([.052,.016,.052],[ie,.008,F],p,t);for(let ie of[-1,1])for(let F=0;F<6;F++)g([.002,.04,.006],[ie*.301,-.018,-.061+F*.019],p);let C=document.createElement("canvas");C.width=512,C.height=64;let A=C.getContext("2d");A.font="500 20px monospace",A.fillStyle="#8e8b7a",A.textAlign="center",A.fillText("MIN",128,42),A.fillText("SEC",384,42);let T=new Ft(C);T.colorSpace=ft;let P=d(new Et(.43,.018),new gt({map:T,transparent:!0,depthWrite:!1}));P.position.set(0,.069,.104),P.castShadow=!1;let O=new gt({color:16721943,toneMapped:!1}),v=new gt({color:2295557,toneMapped:!1}),w=new gt({color:16718087,transparent:!0,opacity:.12,depthWrite:!1,blending:Mc,toneMapped:!1}),W=new St,z=.066,B=.01,H=.005;W.moveTo(-z/2,0),W.lineTo(-z/2+H,B/2),W.lineTo(z/2-H,B/2),W.lineTo(z/2,0),W.lineTo(z/2-H,-B/2),W.lineTo(-z/2+H,-B/2),W.closePath();let Z=new Bi(W),me=["abcdef","bc","abdeg","abcdg","bcfg","acdfg","acdefg","abc","abcdefg","abcdfg"],Q={a:[0,.058,0],b:[.036,.029,1],c:[.036,-.029,1],d:[0,-.058,0],e:[-.036,-.029,1],f:[-.036,.029,1],g:[0,0,0]},ge=[];for(let ie of[-.187,-.081,.081,.187]){let F=new be;F.position.set(ie,-.005,.106),s.add(F);let re=[];for(let[X,[V,$,xe]]of Object.entries(Q)){let Ce=d(Z,v,F);Ce.position.set(V,$,0),Ce.rotation.z=xe?Math.PI/2:0,Ce.scale.x=xe?.76:1,Ce.castShadow=!1;let ve=d(Z,w,F);ve.position.set(V,$,-2e-4),ve.rotation.z=Ce.rotation.z,ve.scale.set(Ce.scale.x*1.12,1.9,1),ve.castShadow=!1,re.push({key:X,segment:Ce,glow:ve})}ge.push(re)}for(let ie of[-.025,.015]){let F=d(new Ei(.005,16),O);F.position.set(0,ie,.106),F.castShadow=!1}let N=new Nn(16718344,.12,.7,2);N.position.set(0,.06,.16),s.add(N);let ae=-1;function ne(){let ie=n.remainingSeconds;if(ie!==ae){let F=al(ie).replace(":","");ge.forEach((re,X)=>{let V=me[Number(F[X])];for(let $ of re){let xe=V.includes($.key);$.segment.material=xe?O:v,$.glow.visible=xe}}),ae=ie}return ie}return ne(),{group:t,start:()=>n.start(),reset(){n.reset(),ne()},update:ne,get status(){return n.status}}}function Sd(i,e,t,n){let s=n/2,r=s/2;i.save(),i.translate(e,t);function o(a,c){i.fillStyle=c,i.beginPath(),i.moveTo(s,a),i.lineTo(r,a),i.arc(r,a+r,r,-Math.PI/2,Math.PI/2,!0),i.lineTo(s,a+s),i.closePath(),i.fill()}o(0,"#f24e1e"),o(s,"#a259ff"),i.fillStyle="#ff7262",i.beginPath(),i.moveTo(s,0),i.lineTo(s+r,0),i.arc(s+r,r,r,-Math.PI/2,Math.PI/2),i.lineTo(s,s),i.closePath(),i.fill(),i.fillStyle="#1abcfe",i.beginPath(),i.arc(s+r,s+r,r,0,Math.PI*2),i.fill(),i.fillStyle="#0acf83",i.beginPath(),i.moveTo(s,2*s),i.lineTo(s,2*s+r),i.arc(r,2*s+r,r,0,Math.PI*1.5),i.closePath(),i.fill(),i.restore()}function D0(i){let e=new be;e.name="Worn handsaw beside the countdown timer",e.position.copy(i).add(new S(-.34,0,.25)),e.position.y=0,e.rotation.y=-.12,e.rotation.z=.026;let t=new be;t.rotation.x=-Math.PI/2,e.add(t);let n=ni(12963014);n.bumpScale=45e-5;let s=new Be({color:11121068,metalness:.72,roughness:.38}),r=new Be({color:10258264,metalness:.68,roughness:.62}),o=new Be({color:3156253,roughness:1}),a=new Uint8Array(256*256*4),c=1903;for(let y=0;y<256;y++)for(let M=0;M<256;M++){c=1664525*c+1013904223>>>0;let C=Math.sin(y*.54+Math.sin(M*.026)*2)*5+Math.sin(y*1.4+M*.012)*3,A=(c>>>24)/255,T=A>.99?28:0,P=(y*256+M)*4;a[P]=98+C+A*12+T,a[P+1]=57+C*.7+A*9+T,a[P+2]=30+C*.3+A*6+T,a[P+3]=255}let l=new Qi(a,256,256);l.colorSpace=ft,l.needsUpdate=!0,l.magFilter=mn;let h=new Be({map:l,roughness:.83,bumpMap:l,bumpScale:5e-4});function p(y,M,C=t){let A=new ht(y,M);return A.castShadow=!0,A.receiveShadow=!0,C.add(A),A}function f(y,M,C,A){let T=new on(y,{depth:M,bevelEnabled:C>0,bevelSize:C,bevelThickness:C,bevelSegments:2,curveSegments:24});T.translate(0,0,-M/2);let P=T.attributes.uv;for(let O=0;O<P.count;O++)P.setXY(O,(P.getX(O)+.37)/.72,(P.getY(O)+.115)/.23);return p(T,A)}let d=new St;d.moveTo(-.36,.035),d.lineTo(.19,.081),d.lineTo(.205,-.083);let g=38;for(let y=g;y>=0;y--){let M=-.36+y/g*.55,C=-.035-(M+.36)/.55*.048;d.lineTo(M,C),y>0&&d.lineTo(M-.55/g*.4,C-.009)}d.lineTo(-.365,.025),d.closePath();let x=f(d,.0028,35e-5,[n,s]);x.name="Tapered pitted steel blade with saw teeth";let m=new St;m.moveTo(.145,.092),m.bezierCurveTo(.19,.119,.31,.116,.338,.079),m.lineTo(.326,-.079),m.quadraticCurveTo(.314,-.111,.278,-.102),m.lineTo(.172,-.085),m.quadraticCurveTo(.153,-.07,.157,-.047),m.lineTo(.17,.046),m.closePath();let u=new Mi;u.moveTo(.214,.055),u.quadraticCurveTo(.24,.072,.283,.055),u.lineTo(.283,-.057),u.quadraticCurveTo(.253,-.065,.226,-.052),u.lineTo(.209,.032),u.closePath(),m.holes.push(u);let E=f(m,.026,.006,h);E.name="Worn wooden open grip";for(let[y,M]of[[.176,.055],[.183,-.053],[.199,.003]])for(let C of[-1,1]){let A=p(new Yt(.006,.006,.0035,18),r);A.rotation.x=Math.PI/2,A.position.set(y,M,C*.02);let T=p(new Mt(.007,.0012,6e-4),o);T.position.set(y,M,C*.022),T.rotation.z=.35}return{group:e,setEnvironment(y){n.envMap=s.envMap=r.envMap=y;for(let M of[n,s,r])M.envMapIntensity=.9,M.needsUpdate=!0}}}function cl({flies:i=10,moths:e=5,spread:t=[.82,.17,.47],seed:n=29,sizeScale:s=1,dive:r=0}={}){let o=new be;o.name="Flies and moths circling the light";let a=new Zt(1,8,6),c=new Be({color:1382678,roughness:.65}),l=new Be({color:5589814,roughness:1}),h=new Be({color:12899016,roughness:.35,transparent:!0,opacity:.58,depthWrite:!1,side:Dt}),p=document.createElement("canvas");p.width=p.height=128;let f=p.getContext("2d");f.fillStyle="#b8aa83",f.fillRect(0,0,128,128);for(let ge=0;ge<190;ge++)f.fillStyle=ge%2?"#89795255":"#e2d3ab66",f.fillRect(ge*47%128,ge*73%128,2,1);f.strokeStyle="#695c3d",f.lineWidth=4,f.beginPath(),f.moveTo(76,0),f.quadraticCurveTo(99,60,76,128),f.stroke(),f.fillStyle="#5b5039",f.beginPath(),f.ellipse(57,68,13,18,.25,0,Math.PI*2),f.fill(),f.fillStyle="#d5c59a",f.beginPath(),f.ellipse(57,68,6,9,.25,0,Math.PI*2),f.fill(),f.strokeStyle="#75684788",f.lineWidth=1;for(let ge=0;ge<5;ge++)f.beginPath(),f.moveTo(0,64),f.lineTo(128,12+ge*26),f.stroke();let d=new Ft(p);d.colorSpace=ft;let g=new Be({map:d,roughness:.9,side:Dt,emissive:10127718,emissiveMap:d,emissiveIntensity:.15});function x(ge){let N=new St;N.moveTo(0,-.008),ge?(N.bezierCurveTo(.02,-.031,.052,-.036,.058,-.018),N.bezierCurveTo(.06,-.007,.044,.004,.039,.009),N.bezierCurveTo(.047,.026,.023,.034,.013,.019)):(N.bezierCurveTo(.008,-.021,.03,-.024,.033,-.013),N.bezierCurveTo(.035,-.003,.015,.016,.005,.012)),N.lineTo(0,.008),N.closePath();let ae=new Bi(N,10),ne=ae.attributes.position,ie=ae.attributes.uv;for(let F=0;F<ne.count;F++)ie.setXY(F,ne.getX(F)/.06,(ne.getY(F)+.036)/.07);return ae.rotateX(-Math.PI/2),ae}function m(ge,N,ae,ne){let ie=new vn(ge,N,ae);return ie.name=ne,ie.instanceMatrix.setUsage(Dn),ie.frustumCulled=!1,ie.raycast=()=>{},o.add(ie),ie}let u=m(a,c,i*2,"Small dark flies"),E=m(a,l,e*2,"Moth bodies"),y=m(x(!1),h,i*2,"Translucent fly wings"),M=m(x(!0),g,e*2,"Dusty patterned moth wings"),C=new At,A=new S,T=new S,P=new S,O=new S(0,0,-1),v=new S(0,0,1),w=new S(0,1,0),W=new S,z=new pt,B=new pt,H=new pt().setFromAxisAngle(w,Math.PI),Z=Array.from({length:i+e},(ge,N)=>({moth:N>=i,index:N>=i?N-i:N,phase:N*2.399+n*.17,size:s*(.72+(N*17+n)%13/28),speed:N>=i?.95+N%3*.23:1.8+N%4*.46}));function me(ge,N,ae){let ne=ge*N.speed+N.phase,ie=N.phase,F=N.moth?.72:.46;return ae.set(t[0]*(F*Math.cos(ne)+.17*Math.sin(ne*2.37+ie)),t[1]*(.7*Math.sin(ne*1.73+ie)+.23*Math.cos(ne*4.13)),t[2]*(F*Math.sin(ne*.91)+.18*Math.cos(ne*2.71-ie))),ae.y-=r*(N.moth?1:.38)*Math.pow(.5+.5*Math.sin(ne*.43+ie),6),N.moth||(ae.x+=.035*Math.sin(ne*7.3),ae.y+=.014*Math.cos(ne*9.7)),ae}function Q(ge,N=!1,ae=1){let ne=N?0:ge;for(let ie of Z){let{moth:F,index:re,phase:X,size:V}=ie,$=F?E:u,xe=F?M:y;me(ne,ie,A),me(ne+.012,ie,T),P.copy(T).sub(A).normalize(),z.setFromUnitVectors(O,P),B.setFromAxisAngle(v,.25*Math.sin(ne*2.1+X)),z.multiply(B),C.position.copy(A),C.quaternion.copy(z),C.scale.set(F?.006:.0065,F?.007:.0055,F?.021:.011).multiplyScalar(V),C.updateMatrix(),$.setMatrixAt(re*2,C.matrix),W.set(0,0,F?-.022:-.013).applyQuaternion(z),C.position.copy(A).addScaledVector(W,V),C.scale.setScalar((F?.006:.0068)*V),C.updateMatrix(),$.setMatrixAt(re*2+1,C.matrix);let Ce=N?.42:.18+Math.sin(ne*(F?39:92)+X)*(F?.9:.74);for(let[ve,te]of[-1,1].entries())W.set(te*.004,0,0).applyQuaternion(z),C.position.copy(A).addScaledVector(W,V),B.setFromAxisAngle(v,te*Ce),C.quaternion.copy(z).multiply(B),te<0&&C.quaternion.multiply(H),C.scale.setScalar(V),C.updateMatrix(),xe.setMatrixAt(re*2+ve,C.matrix)}g.emissiveIntensity=.055+.14*Math.max(0,ae);for(let ie of[u,E,y,M])ie.instanceMatrix.needsUpdate=!0}return Q(0),{group:o,update:Q}}var lo=3,FM=2.8;function OM(i,e){return e<-1.55||Math.abs(i)>2.55&&e<.45}var mr=(i,e)=>Math.hypot(i.x-e.x,i.z-e.z);function BM(i){let o=[],a=new Ln,c=new S;i.updateWorldMatrix(!0,!0);function l(g){if(g.visible){g.isMesh&&!g.isInstancedMesh&&g.geometry&&(g.geometry.computeBoundingBox(),a.copy(g.geometry.boundingBox).applyMatrix4(g.matrixWorld),a.getSize(c),a.min.y<.13&&a.max.y>.1&&c.y>.065&&Math.min(c.x,c.z)>.018&&o.push({x0:a.min.x-.15,x1:a.max.x+.15,z0:a.min.z-.15,z1:a.max.z+.15}));for(let x of g.children)l(x)}}for(let g of i.children)l(g);let h=Array.from({length:1763},(g,x)=>{let m=x%41,u=Math.floor(x/41),E=-3.6+m*.18,y=-3.65+u*.18;return{id:x,col:m,row:u,x:E,z:y,free:OM(E,y)&&!o.some(M=>E>=M.x0&&E<=M.x1&&y>=M.z0&&y<=M.z1),neighbors:[]}});for(let g of h)if(g.free)for(let x=-1;x<=1;x++)for(let m=-1;m<=1;m++){if(!m&&!x)continue;let u=g.col+m,E=g.row+x;if(u<0||u>=41||E<0||E>=43)continue;let y=h[E*41+u];y.free&&(!m||!x||h[g.row*41+u].free&&h[E*41+g.col].free)&&g.neighbors.push(y.id)}let p=h.filter(g=>g.free&&g.neighbors.length);function f(g,x,m){return(m?p.filter(E=>mr(E,m)>=lo):p).reduce((E,y)=>!E||(y.x-g)**2+(y.z-x)**2<(E.x-g)**2+(E.z-x)**2?y:E,null)}function d(g,x,m){let u=new Int32Array(h.length).fill(-1),E=[g];u[g]=g;for(let T=0;T<E.length;T++){let P=h[E[T]],O=mr(P,m);for(let v of P.neighbors){let w=mr(h[v],m);u[v]<0&&(w>=lo||w>O+.001)&&(u[v]=P.id,E.push(v))}}let y=h[g],M=E.filter(T=>{let P=h[T],O=Math.hypot(P.x-y.x,P.z-y.z);return O>.8&&O<2.8&&mr(P,m)>=lo});if(!M.length)return[];let C=M[Math.floor(x()*M.length)],A=[];for(;C!==g;)A.push(h[C]),C=u[C];return A.reverse()}return{closest:f,path:d}}function U0({room:i,floorSupport:e,viewerPosition:t,seed:n=Math.floor(Math.random()*4294967295)}){let s=new be;s.name="Tiny mice and rats darting through distant shadows",s.userData.ignoreAcid=!0;let r=n>>>0,o=()=>(r=r*1664525+1013904223>>>0,r/4294967296),a=BM(i),c=new At,l=new S,h=new S,p=new S,f=new S(0,1,0),d=document.createElement("canvas");d.width=d.height=128;let g=d.getContext("2d");g.fillStyle="#e8e3d9",g.fillRect(0,0,128,128);for(let ne=0;ne<1400;ne++){g.strokeStyle=ne%3?"#7d766f30":"#ffffff66";let ie=o()*128,F=o()*128;g.beginPath(),g.moveTo(ie,F),g.lineTo(ie+(o()-.5)*2,F+3+o()*5),g.stroke()}let x=new Ft(d);x.colorSpace=ft;let m=new Be({map:x,roughness:.96}),u=new Be({roughness:.72}),E=new Be({roughness:.88});function y(ne,ie,F,re){let X=new vn(ne,ie,F);return X.name=re,X.instanceMatrix.setUsage(Dn),X.frustumCulled=!1,X.castShadow=!0,X.receiveShadow=!0,X.raycast=()=>{},s.add(X),X}let M=[[-2.75,-2.75],[-3.1,-.55],[2.65,-2.85]],C=M.length,A=new Zt(1,14,9),T=y(A,m,C*6,"Furry rat and mouse bodies"),P=y(A,u,C*9,"Ears, eyes, noses and running paws"),O=y(new Yt(1,1,1,7),E,C*9,"Long tapered swishing tails"),v=new Float32Array(C*4*2*3),w=new Ct;w.setAttribute("position",new un(v,3).setUsage(Dn));let W=new to(w,new lr({color:12300704,transparent:!0,opacity:.45}));W.frustumCulled=!1,W.raycast=()=>{},s.add(W);let z=[5327684,5854283,4539454],B=M.map(([ne,ie],F)=>{let re=a.closest(ne,ie,t)||a.closest(ne,ie),X=F!==0;return{mouse:X,cell:re.id,x:re.x,z:re.z,yaw:o()*Math.PI*2,size:.28*(X?.58+o()*.08:.92+o()*.12),color:new dt(z[F]),phase:o()*6.28,speed:3.6*(X?1.05+o()*.3:.88+o()*.25),route:[],pause:1.2+F*1.6+o()*2,gait:0,moving:!1,visibility:1}}),H=new dt(7889757),Z=new dt(6771019),me=new dt(1118478),Q=null;function ge(ne,ie,F,re,X=l){let V=Math.cos(ne.yaw),$=Math.sin(ne.yaw),xe=ne.size*ne.visibility;return X.set(ne.x+(ie*V+re*$)*xe,e(ne.x,ne.z)+F*xe,ne.z+(-ie*$+re*V)*xe)}function N(ne,ie,F,re,X,V,$=0){ge(F,...re),c.position.copy(l),c.rotation.set(0,F.yaw,$),c.scale.set(...X).multiplyScalar(F.size*F.visibility),c.updateMatrix(),ne.setMatrixAt(ie,c.matrix),ne.setColorAt(ie,V)}function ae(ne,ie=!1,F=t){let re=Q===null?0:Math.min(.1,Math.max(0,ne-Q));Q=ne;let X=0;for(let[V,$]of B.entries()){let he=function(de,Me){let Se=de/9;return ge($,Math.sin(Se*3.5+Ce*($.moving?8:1.6)+$.phase)*.045*Se,.026*(1-Se)+.009,.126+se*Se,Me)};$.moving=!1;let xe=mr($,F);if($.visibility=Ze.smoothstep(xe,FM,lo+.25),!ie){let de=$.route[0];if(de&&mr(de,F)<lo&&mr(de,F)<=xe&&($.route=[]),xe<lo+.35&&($.pause=0),$.pause>0)$.pause-=re;else{$.route.length||($.route=a.path($.cell,o,F));let Me=$.speed*re;for(;$.route.length&&Me>0;){let Se=$.route[0],U=Se.x-$.x,b=Se.z-$.z,j=Math.hypot(U,b),pe=Math.min(j,Me);if($.moving=!0,$.gait+=pe*45,Me-=pe,j>1e-4){$.x+=U/j*pe,$.z+=b/j*pe;let Te=Math.atan2(-U,-b),Ee=Ze.euclideanModulo(Te-$.yaw+Math.PI,Math.PI*2)-Math.PI;$.yaw+=Ee*(1-Math.exp(-re*28))}pe>=j-1e-4&&($.x=Se.x,$.z=Se.z,$.cell=Se.id,$.route.shift(),$.route.length||($.pause=3+o()*5))}!$.route.length&&!$.moving&&($.pause=1)}}let Ce=ie?0:ne,ve=$.moving?Math.abs(Math.sin($.gait))*.005:Math.sin(Ce*3+$.phase)*.0015,te=$.moving?0:Math.sin(Ce*12+$.phase)*.002,L=V*6,_e=V*9;N(T,L,$,[0,.077+ve,0],[.068,.063,.125],$.color),N(T,L+1,$,[0,.081+ve,.068],[.07,.069,.071],$.color),N(T,L+2,$,[0,.078+ve,-.115],[.046,.044,.066],$.color),N(T,L+3,$,[0,.057+ve+te,-.177],[.03,.024,.05],$.color);for(let[de,Me]of[-1,1].entries()){let Se=$.mouse?1.23:.88;N(T,L+4+de,$,[Me*.044,.126+ve,-.102],[.03*Se,.038*Se,.012],$.color,Me*.2),N(P,_e+de,$,[Me*.044,.128+ve,-.113],[.022*Se,.028*Se,.004],H,Me*.2),N(P,_e+2+de,$,[Me*.032,.094+ve,-.149],[.007,.008,.007],me)}N(P,_e+4,$,[0,.057+ve+te,-.221],[.011,.009,.009],Z);for(let de=0;de<4;de++){let Me=de%2?-1:1,Se=de>1,U=$.gait+(de===0||de===3?0:Math.PI),b=$.moving?Math.max(0,Math.sin(U))*.023:0,j=$.moving?Math.cos(U)*.027:0;N(P,_e+5+de,$,[Me*(Se?.055:.043),.01+b,(Se?.08:-.087)+j],[.018,.01,.031],H)}let se=$.mouse?.23:.29;for(let de=0;de<9;de++){he(de,l),he(de+1,h),p.copy(h).sub(l);let Me=p.length();c.position.copy(l).add(h).multiplyScalar(.5),c.quaternion.setFromUnitVectors(f,p.normalize());let Se=(.009*(1-de/9)+.001)*$.size*$.visibility;c.scale.set(Se,Me,Se),c.updateMatrix(),O.setMatrixAt(V*9+de,c.matrix),O.setColorAt(V*9+de,H)}for(let de of[-1,1])for(let Me=0;Me<2;Me++)ge($,de*.018,.061+ve,-.195),l.toArray(v,X),X+=3,ge($,de*.08,.062+ve+te,-.2+Me*.027),l.toArray(v,X),X+=3}for(let V of[T,P,O])V.instanceMatrix.needsUpdate=!0,V.instanceColor.needsUpdate=!0;w.attributes.position.needsUpdate=!0}return ae(0),{group:s,update:ae}}function H0(){let i="drawer",e=!1,t=8;function n(s,r=!1){return r?"Detach your shackle before using the charger.":s==="drawer"?(e=!e,e?"Drawer opened. Take the MacBook charger and cable.":"Drawer closed."):s==="charger"?i!=="drawer"?"You already collected the charger.":e?(i="carrying","Charger collected. Plug it into the power strip behind you."):"Open the rear drawer first.":s==="strip"?i==="drawer"?"The power strip is on. Find the charger in the rear drawer.":i==="carrying"?(i="powered","Charger plugged in. Connect its cable to the MacBook."):i==="charging"?"The MacBook is charging.":"The charger has power. Connect the MacBook.":s==="laptop"?i==="powered"?(i="charging","Cable connected. The MacBook is charging."):i==="charging"?`MacBook battery: ${Math.floor(t)}%.`:i==="carrying"?"Plug the charger into the power strip first.":"Find the charger in the rear drawer.":""}return{use:n,update(s){i==="charging"&&(t=Math.min(100,t+Math.max(0,s)*.65))},reset(){i="drawer",e=!1,t=8},get phase(){return i},get drawerOpen(){return e},get battery(){return t},get nextAction(){return i==="drawer"?e?"charger":"drawer":i==="carrying"?"strip":i==="powered"?"laptop":null}}}function N0({filing:i,laptop:e,floorSupport:t,drawerMaterial:n}){let s=new be;s.name="Interactive MacBook charging kit";let r=new Nn(10794149,1.5,2.8,2);r.position.set(1.55,1.25,3.25),s.add(r);let o=H0(),a=new Be({color:14275780,roughness:.51}),c=new Be({color:15131609,roughness:.42}),l=new Be({color:2435105,roughness:.88}),h=new Be({color:9082261,roughness:.4,metalness:.7}),p=new gt({color:16757557}),f=new gt({color:9422728});function d(se,he,de=s){let Me=new ht(se,he);return Me.castShadow=!0,Me.receiveShadow=!0,de.add(Me),Me}function g(se,he,de,Me){let Se=d(new Mt(...se),de,Me);return Se.position.set(...he),Se}function x(se,he,de,Me){let[Se,U,b]=se,j=Math.min(.012,U*.24),pe=new St,Te=Se/2,Ee=U/2;pe.moveTo(-Te+j,-Ee),pe.lineTo(Te-j,-Ee),pe.quadraticCurveTo(Te,-Ee,Te,-Ee+j),pe.lineTo(Te,Ee-j),pe.quadraticCurveTo(Te,Ee,Te-j,Ee),pe.lineTo(-Te+j,Ee),pe.quadraticCurveTo(-Te,Ee,-Te,Ee-j),pe.lineTo(-Te,-Ee+j),pe.quadraticCurveTo(-Te,-Ee,-Te+j,-Ee);let Xe=Math.min(.004,b/6),Oe=new on(pe,{depth:b-2*Xe,bevelEnabled:!0,bevelSize:Xe,bevelThickness:Xe,bevelSegments:2,curveSegments:5});Oe.translate(0,0,-b/2+Xe);let ke=d(Oe,de,Me);return ke.position.set(...he),ke}function m(se,he,de,Me=s){return d(new dn(new Jt(se.map(Se=>Se.isVector3?Se:new S(...Se))),48,he,7,!1),de,Me)}function u(se,he,de,Me,Se){let U=document.createElement("canvas");U.width=512,U.height=128;let b=U.getContext("2d");b.fillStyle="#c4c4b6",b.fillRect(0,0,512,128),b.fillStyle="#353b35",b.font="600 58px Arial",b.textAlign="center",b.fillText(se,256,85,480);let j=new Ft(U);j.colorSpace=ft;let pe=d(new Et(he,de),new Be({map:j,roughness:.9}),Se);return pe.position.set(...Me),pe}let E=new be;E.name="Rear drawer containing the MacBook charger",E.userData.chargingAction="drawer",E.position.set(-.38,.56,0),i.add(E),g([.71,.32,.025],[0,0,.231],n,E),x([.22,.022,.028],[0,.04,.264],h,E),u("CHARGERS",.2,.047,[0,-.065,.246],E),g([.66,.018,.36],[0,-.145,.025],n,E);for(let se of[-.33,.33])g([.015,.27,.36],[se,-.01,.025],n,E);g([.66,.27,.015],[0,-.01,-.155],n,E);for(let se of[-.348,.348])g([.013,.027,.43],[se,-.08,.015],h,E);let y=new be;y.name="MacBook USB-C power adapter",y.userData.chargingAction="charger",E.add(y),y.position.set(.105,-.097,.045),x([.145,.075,.145],[0,0,0],c,y),g([.147,.001,.147],[0,-.009,0],a,y);for(let se of[-.016,.016])g([.005,.025,.015],[se,-.049,0],h,y);g([.003,.015,.027],[.074,.006,0],l,y),u("96W USB-C",.086,.022,[0,.009,.075],y).material.color.setHex(10066834);let C=new be;C.name="Coiled charger cable",C.userData.chargingAction="charger",E.add(C),C.position.set(-.145,-.127,.06);let A=[];for(let se=0;se<=120;se++){let he=se/120*Math.PI*6;A.push([Math.cos(he)*(.086+se*12e-5),se*45e-6,Math.sin(he)*.06])}m(A,.0045,c,C),x([.041,.014,.019],[.12,.01,0],c,C),g([.014,.009,.014],[.145,.01,0],h,C);let T=new be;T.name="Powered floor power strip",T.userData.chargingAction="strip",T.position.set(1.94,t(1.94,3.72)+.032,3.72),T.rotation.y=-.16,s.add(T),x([.51,.055,.12],[0,0,0],a,T);for(let se of[-.16,-.055,.05,.155]){g([.079,.001,.082],[se,.029,0],c,T);for(let de of[-.02,.02])g([.021,.002,.006],[se-.009,.031,de],l,T);let he=d(new Ei(.007,12),l,T);he.rotation.x=-Math.PI/2,he.position.set(se+.022,.031,0)}let P=x([.035,.011,.057],[.224,.032,0],new Be({color:10303786,roughness:.4}),T);P.rotation.z=.07,g([.008,.002,.02],[.224,.039,0],f,T);let O=x([.12,.16,.018],[2.15,.27,4.424],a,s);for(let se of[.235,.3]){g([.065,.042,.006],[2.15,se,4.411],c,s);for(let he of[2.136,2.164])g([.005,.016,.003],[he,se+.004,4.406],l,s)}x([.054,.043,.055],[2.15,.3,4.383],l,s);let v=T.localToWorld(new S(-.265,0,0));m([v,[1.57,.018,3.8],[1.61,.015,4.04],[1.98,.015,4.25],[2.16,.07,4.34],[2.15,.3,4.35]],.007,l).raycast=()=>{};let w=new be;w.name="MacBook charging port",w.userData.chargingAction="laptop",w.position.set(-.453,.002,-.18),e.object.add(w),g([.005,.01,.035],[0,0,0],l,w);let W=d(new Mt(.045,.048,.085),new gt({transparent:!0,opacity:0,colorWrite:!1,depthWrite:!1}),w);W.castShadow=!1;let z=new be;z.name="Connected MacBook charging cable",z.visible=!1,s.add(z),x([.051,.018,.032],[0,0,0],c,z),g([.013,.01,.026],[.03,0,0],h,z);let B=g([.01,.003,.007],[.005,.011,0],p,z);B.castShadow=!1;let H=document.createElement("canvas");H.width=512,H.height=96;let Z=H.getContext("2d"),me=new Ft(H);me.colorSpace=ft;let Q=d(new Et(.245,.046),new gt({map:me}),e.screen);Q.name="MacBook battery charge readout",Q.position.set(.282,.235,.001),Q.visible=!1,Q.castShadow=!1;let ge=0,N=-1/0,ae=-1/0,ne=null,ie=-1,F="",re=null,X=new S,V=new S,$=new S;function xe(se,he){return new S(se,t(se,he)+.008,he)}function Ce(se){let he=ne?.geometry;y.getWorldPosition(V),V.x+=.08,V.y+=.005,z.getWorldPosition(X);let de=[V.clone(),xe(1.86,3.5),xe(1.53,3.27),xe(1.33,2.99),xe(.83,2.82),xe(X.x-.13,X.z+.12),X.clone().add(new S(-.031,0,0).applyAxisAngle(new S(0,1,0),e.object.rotation.y))],Me=new dn(new Jt(de),80,.0045,7,!1),Se=Me.attributes.position;for(let U=0;U<Se.count;U++)Se.setY(U,Math.max(Se.getY(U),t(Se.getX(U),Se.getZ(U))+.002));Me.computeVertexNormals(),ne?(ne.geometry=Me,he.dispose()):(ne=d(Me,c),ne.name="Charging cable resting across the floor",ne.raycast=()=>{}),ie=se}function ve(se,he,de=!1){let Me=o.phase,Se=o.use(se,de);return de||(Me==="drawer"&&o.phase==="carrying"&&(y.visible=!1,C.visible=!1),Me==="carrying"&&o.phase==="powered"&&(T.add(y),y.visible=!0,y.rotation.set(0,0,0),y.position.set(-.16,.075,0),N=he,s.add(C),C.visible=!0,C.rotation.set(0,.4,0),C.position.set(1.7,t(1.7,3.42)+.008,3.42)),Me==="powered"&&o.phase==="charging"&&(ae=he,z.visible=!0,C.visible=!1)),Se}function te(se,he=!1){let de=re===null?0:Math.max(0,Math.min(.05,se-re));re=se,o.update(de);let Me=o.drawerOpen?1:0;if(ge=he?Me:Ze.damp(ge,Me,8,de),E.position.z=ge*.43,(o.phase==="powered"||o.phase==="charging")&&(y.position.y=.075+(he?0:.19*(1-Ze.smootherstep(se-N,0,.65)))),o.phase==="charging"){let j=he?1:Ze.smootherstep(se-ae,0,.65);w.getWorldPosition($),z.quaternion.copy(e.object.getWorldQuaternion(new pt)),X.set(-.04-(1-j)*.12,(1-j)*.045,0).applyQuaternion(z.quaternion),z.position.copy($).add(X),(Math.abs(j-ie)>.02||j===1&&ie!==1)&&Ce(j),B.material=o.battery>=100?f:p}Q.visible=e.openProgress>.35;let Se=Math.floor(o.battery),U=o.phase==="charging",b=`${U?"\u26A1 ":""}${Se}%`;b!==F&&(F=b,Z.fillStyle="#222e36",Z.fillRect(0,0,512,96),Z.fillStyle=U?"#93dba3":"#e3b36d",Z.font="500 44px Arial",Z.textAlign="right",Z.fillText(b,385,63),Z.strokeStyle=U?"#93dba3":"#e3b36d",Z.lineWidth=5,Z.strokeRect(405,25,72,44),Z.fillRect(480,37,7,19),Z.fillRect(413,33,56*Se/100,28),me.needsUpdate=!0)}function L(){o.reset(),ge=0,E.position.z=0,E.add(y,C),y.visible=C.visible=!0,y.position.set(.105,-.097,.045),y.rotation.set(0,0,0),C.position.set(-.145,-.127,.06),C.rotation.set(0,0,0),z.visible=!1,ne&&(s.remove(ne),ne.geometry.dispose(),ne=null),ie=-1,F="",re=null}function _e(se){return se==="drawer"?o.drawerOpen?"Close charger drawer":"Open charger drawer":se==="charger"?"Take MacBook charger + cable":se==="strip"?o.phase==="carrying"?"Plug charger into power strip":"Powered power strip":se==="laptop"?o.phase==="powered"?"Connect charger to MacBook":`MacBook battery \xB7 ${Math.floor(o.battery)}%`:o.phase==="carrying"?"Charger collected \xB7 Plug into the power strip [F]":o.phase==="powered"?"Charger powered \xB7 Connect the MacBook [F]":o.phase==="charging"?`${o.battery>=100?"Fully charged":"Charging"} \xB7 ${Math.floor(o.battery)}%`:""}return te(0),{group:s,use:ve,update:te,reset:L,hint:_e,get phase(){return o.phase},get nextAction(){return o.nextAction},get drawerReady(){return ge>.85},get battery(){return o.battery}}}function F0(){let i="sealed",e=-1/0;return{get phase(){return i},get hasKey(){return i==="collected"},get startedAt(){return e},pour(t){return i!=="sealed"?!1:(i="pouring",e=t,!0)},update(t){i==="pouring"&&t-e>=3.4&&(i="revealed")},collect(){return i!=="revealed"?!1:(i="collected",!0)},reset(){i="sealed",e=-1/0}}}function O0(i){let e=i.geometry,t=e.attributes.position,n=t.array.slice(),s=e.parameters.points,r=e.parameters.segments,o=s.length,a=s.filter(m=>m.x>0),c=a[0].y,l=a.at(-1).y,h=new Float32Array(r+1),p=new Float32Array(r+1),f=!1;function d(m){for(let u=1;u<a.length;u++)if(m<=a[u].y){let E=a[u-1],y=a[u],M=(m-E.y)/(y.y-E.y||1);return E.x+(y.x-E.x)*M}return a.at(-1).x}function g(){t.array.set(n),t.needsUpdate=!0,e.computeVertexNormals(),i.visible=!0,f=!1}function x(m){if(m>=.999){i.visible=!1,f=!0;return}if(f)return;i.updateWorldMatrix(!0,!1);let u=i.matrixWorld.elements;if(u[5]>=-.3||m<=0)return;let E=c+(l-c)*m,y=u[5]*E;for(let M=0;M<=r;M++){let C=M/r*Math.PI*2,A=Math.sin(C),T=Math.cos(C),P=c,O=l;for(let v=0;v<18;v++){let w=(P+O)/2,W=d(w);(u[1]*A+u[9]*T)*W+u[5]*w>y?P=w:O=w}h[M]=(P+O)/2,p[M]=d(h[M]);for(let v=0;v<o;v++){let w=M*o+v,W=w*3,z=n[W+1];if(z<h[M]){let B=s[v].x===0;t.setXYZ(w,B?0:A*p[M],B?E:h[M],B?0:T*p[M])}else t.setXYZ(w,n[W],z,n[W+2])}}t.needsUpdate=!0,e.computeVertexNormals()}return{update:x,reset:g}}function B0({bottle:i,contents:e,cap:t,floorSupport:n}){let s=new be;s.name="Ketchup spill and hidden shackle key";let r=F0(),o=i.position.clone(),a=i.quaternion.clone();i.userData.keyAction="pour";let c=new S(0,1,0).applyQuaternion(a),l=new pt().setFromUnitVectors(c,new S(-.12,-.99,.06).normalize()).multiply(a),h=o.clone().add(new S(-.32,.42,-.04)),p=O0(e),f=new S(0,.469,0).applyMatrix4(i.children[0].matrix).multiply(i.scale).applyQuaternion(l).add(h);f.y=n(f.x,f.z)+.009;let d=t.position.clone(),g=t.quaternion.clone();t.updateWorldMatrix(!0,!1);let x=t.getWorldPosition(new S),m=t.getWorldQuaternion(new pt),u=x.clone().add(new S(-.13,0,.1));u.y=n(u.x,u.z)+.016;let E=new Be({color:13674833,metalness:.72,roughness:.27,emissive:7161877,emissiveIntensity:.18}),y=new be;y.name="Brass shackle key",y.userData.keyAction="collect",s.add(y),y.visible=!1;function M(ne,ie,F){let re=new ht(ne,ie);return re.castShadow=!0,re.receiveShadow=!0,F.add(re),re}let C=M(new Qt(.025,.0055,8,24),E,y);C.rotation.x=Math.PI/2,C.position.x=-.042;let A=M(new Mt(.078,.009,.01),E,y);A.position.x=.013;for(let ne of[.027,.047])M(new Mt(.01,.009,.022),E,y).position.set(ne,0,.01);let T=M(new Mt(.15,.04,.1),new gt({transparent:!0,opacity:0,depthWrite:!1,colorWrite:!1}),y);T.castShadow=!1,T.receiveShadow=!1;let P=new Vt({color:12001548,roughness:.28,clearcoat:1,clearcoatRoughness:.18}),O=new be;O.position.copy(f),O.position.y-=.006,s.add(O),O.visible=!1;let v=new St;for(let ne=0;ne<=64;ne++){let ie=ne/64*Math.PI*2,F=1+.1*Math.sin(ie*5)+.07*Math.cos(ie*9),re=Math.cos(ie)*.2*F,X=Math.sin(ie)*.13*F;ne===0?v.moveTo(re,X):v.lineTo(re,X)}let w=M(new Bi(v,32),P,O);w.rotation.x=-Math.PI/2,w.castShadow=!1;let W=[];for(let ne=0;ne<7;ne++){let ie=ne*2.4,F=.05+ne*.016,re=M(new Zt(1,12,8),P,O);re.position.set(Math.cos(ie)*F,.003,Math.sin(ie)*F*.6),re.scale.set(.015+ne%3*.005,.004,.012),W.push(re)}let z=M(new Yt(.7,1,1,10),P,s);z.name="Downward ketchup stream",z.visible=!1,z.castShadow=!1;let B=new S,H=new S,Z=new S,me=new S(0,1,0),Q=ne=>{let ie=Ze.clamp(ne,0,1);return ie*ie*(3-2*ie)},ge=!1;function N(){r.reset(),i.position.copy(o),i.quaternion.copy(a),p.reset(),i.children[0].add(t),t.position.copy(d),t.quaternion.copy(g),t.scale.setScalar(1),ge=!1,y.visible=!1,O.visible=!1,z.visible=!1}function ae(ne,ie){if(r.update(ne),r.phase==="sealed")return;let F=ne-r.startedAt,re=Q(F/.8)*(1-Q((F-3.35)/.8));i.position.copy(o).lerp(h,re),i.quaternion.copy(a).slerp(l,re),ge||(s.attach(t),ge=!0),t.position.copy(x).lerp(u,Q(F/.55)),t.position.y+=Math.sin(Math.min(1,F/.55)*Math.PI)*.08,t.quaternion.copy(m).multiply(new pt().setFromAxisAngle(new S(0,0,1),Q(F/.55)*2));let X=Q((F-.8)/2.5);if(p.update(X),O.visible=F>.75,O.scale.setScalar(Math.max(.01,X)),i.updateWorldMatrix(!0,!0),i.children[0].localToWorld(B.set(0,.469,0)),z.visible=F>.8&&F<3.3,z.visible){H.copy(B).add(f).multiplyScalar(.5),Z.subVectors(B,f),z.position.copy(H),z.quaternion.setFromUnitVectors(me,Z.clone().normalize());let V=ie?1:1+Math.sin(F*21)*.12;z.scale.set(.012*V,Z.length(),.012*V)}if(y.visible=F>=2.5&&!r.hasKey,y.visible){let V=Q((F-2.5)/.9);y.position.copy(B).lerp(f,V),y.position.y+=Math.sin(V*Math.PI)*.065,y.rotation.set((1-V)*2,V*.5,(1-V)*3),E.emissiveIntensity=ie?.22:.22+.1*Math.sin(ne*3)}}return{group:s,bottle:i,key:y,update:ae,reset:N,get hasKey(){return r.hasKey},get phase(){return r.phase},pour:ne=>r.pour(ne),collect:()=>r.collect(),hint(ne){return ne==="collect"&&!r.hasKey?r.phase==="revealed"?"Pick up the shackle key":"A key is sliding out\u2026":ne==="pour"?r.phase==="sealed"?"Pour out the ketchup":r.phase==="pouring"?"Pouring ketchup\u2026":r.hasKey?"The bottle is empty":"Pick up the key in the ketchup":""}}}var ll=(i,e,t)=>Math.max(e,Math.min(t,i));function z0({speed:i=.38,maxPoints:e=180}={}){let t=[],n=null,s=!1;function r(a,c,l,h=!1){return h||n!==null||t.some(p=>p.index===a)?!1:(t.push({index:a,openedAt:l,progress:0,origin:{...c},head:{x:c.x,z:c.z},points:[]}),!0)}function o(a,c,l){if(s)return!1;for(let h of t){if(h.progress=ll((a-h.openedAt)/1.35,0,1),a-h.openedAt<.48)continue;h.points.length||h.points.push({...h.head,born:a,radius:.13});let p=l.x-h.head.x,f=l.z-h.head.z,d=Math.hypot(p,f),g=Math.min(d,i*ll(c,0,.08));if(d>.001){let m=.18*Math.sin((a-h.openedAt)*.85+h.index*1.9),u=Math.sqrt(1+m*m);h.head.x+=(p/d-f/d*m)*g/u,h.head.z+=(f/d+p/d*m)*g/u}let x=h.points.at(-1);Math.hypot(x.x-h.head.x,x.z-h.head.z)>.075&&(h.points.push({...h.head,born:a,radius:.13}),h.points.length>e&&h.points.splice(1,1));for(let[m,u]of h.points.entries()){let E=ll((a-u.born)/3,0,1);u.radius=m===0?.16+.23*E:.12+(.13+.025*Math.sin(u.born*1.8+h.index))*E,n===null&&Math.hypot(l.x-u.x,l.z-u.z)<u.radius+.15&&(n=a)}}return n!==null&&a-n>=.85?(s=!0,!0):!1}return{open:r,update:o,leaks:t,reset(){t.length=0,n=null,s=!1},get dying(){return n!==null},get finished(){return s},blackout(a){return n===null?0:ll((a-n)/.7,0,1)}}}function k0(i,e,t){let n=Ut.textureSize,s=document.createElement("canvas");s.width=s.height=n;let r=s.getContext("2d"),o=new Ft(s);o.flipY=!1,o.generateMipmaps=!1,o.minFilter=mn;let a={value:o};function c(y){let M=new Vt({color:6519843,roughness:.12,metalness:0,ior:1.333,clearcoat:1,clearcoatRoughness:.08,emissive:2571784,emissiveIntensity:.15,transparent:y,opacity:y?.92:1,depthWrite:!y,side:Dt,envMapIntensity:1.4});return M.onBeforeCompile=C=>{C.uniforms.acidTime=t,C.uniforms.acidWet=a,C.vertexShader=`varying vec3 vWetWorld;
`+C.vertexShader,C.vertexShader=C.vertexShader.replace("#include <worldpos_vertex>",`#include <worldpos_vertex>
    vec4 wetVertex=vec4(transformed,1.0);
    #ifdef USE_INSTANCING
     wetVertex=instanceMatrix*wetVertex;
    #endif
    vWetWorld=(modelMatrix*wetVertex).xyz;`),C.fragmentShader=`uniform float acidTime;uniform sampler2D acidWet;varying vec3 vWetWorld;
`+C.fragmentShader,C.fragmentShader=C.fragmentShader.replace("#include <color_fragment>",`#include <color_fragment>
    vec2 flowUV=vWetWorld.xz;
    float eddy=sin(flowUV.x*14.0+sin(flowUV.y*9.0-acidTime*.7)+acidTime*.35)*sin(flowUV.y*17.0-acidTime*.8);
    float fine=sin(flowUV.x*71.0+flowUV.y*43.0-acidTime*2.5)*sin(flowUV.y*81.0-flowUV.x*29.0+acidTime*1.8);
    ${y?`float wet=texture2D(acidWet,(flowUV+vec2(4.1,4.2))/vec2(8.2,8.8)).r;
    wet-=.035*eddy+.018*fine;
    if(wet<.055)discard;
    float depth=smoothstep(.12,.95,wet);
    diffuseColor.rgb=mix(vec3(.31,.42,.085),diffuseColor.rgb*.62,depth);
    diffuseColor.a*=smoothstep(.055,.22,wet)*mix(.48,1.0,depth);`:""}
    diffuseColor.rgb*=.94+.07*eddy+.025*fine;`),C.fragmentShader=C.fragmentShader.replace("#include <normal_fragment_begin>",`#include <normal_fragment_begin>
    float dx=.045*cos(vWetWorld.x*24.0+vWetWorld.z*12.0-acidTime*2.1)+.018*cos(vWetWorld.x*83.0-vWetWorld.z*36.0+acidTime*3.0);
    float dz=.035*sin(vWetWorld.z*27.0-vWetWorld.x*9.0+acidTime*1.7)+.012*sin(vWetWorld.z*79.0+acidTime*3.4);
    normal=normalize(normal+mat3(viewMatrix)*vec3(dx,0.0,dz));`)},M.customProgramCacheKey=()=>`acid-water-${y?"surface":"jet"}-v2`,M}let l=c(!0),h=c(!1),p=Ut.mobile?48:72,f=new Et(8.2,8.8,p,p);f.rotateX(-Math.PI/2),f.translate(0,0,.2);let d=f.attributes.position,g=f.attributes.uv;for(let y=0;y<d.count;y++){let M=d.getX(y),C=d.getZ(y);d.setY(y,i(M,C)+.006),g.setXY(y,(M+4.1)/8.2,(C+4.2)/8.8)}d.needsUpdate=!0,g.needsUpdate=!0,f.computeVertexNormals();let x=new ht(f,l);x.name="Continuous reflective acid film",x.renderOrder=4,x.receiveShadow=!0;let m=new ht(f,new gt({color:1053961,alphaMap:e,transparent:!0,opacity:.44,depthWrite:!1,alphaTest:.01}));m.name="Damp corroded edge beneath acid",m.position.y=-.002,m.renderOrder=3;let u=-1/0;function E(y,M){if(!(y-u<.1)){u=y,r.globalCompositeOperation="source-over",r.fillStyle="#000",r.fillRect(0,0,n,n),r.globalCompositeOperation="lighten";for(let C of M)for(let A of C.points){let T=(A.x+4.1)/8.2*n,P=(A.z+4.2)/8.8*n,O=A.radius*n/8.2,v=r.createRadialGradient(T,P,0,T,P,O);v.addColorStop(0,"#fff"),v.addColorStop(.62,"#fff"),v.addColorStop(.85,"#999"),v.addColorStop(1,"#000"),r.fillStyle=v,r.fillRect(T-O,P-O,O*2,O*2)}o.needsUpdate=!0}}return{pool:x,scorch:m,jetMaterial:h,update:E,reset(){u=-1/0,r.globalCompositeOperation="source-over",r.fillStyle="#000",r.fillRect(0,0,n,n),o.needsUpdate=!0},setEnvironment(y){for(let M of[l,h])M.envMap=y,M.needsUpdate=!0}}}function V0(i,e,t){let n=new S,s=new pt;i.getWorldPosition(n),i.getWorldQuaternion(s);let r=new S(0,-.25,.6).applyQuaternion(s),o=9.81,a=e(n.x,n.z)+.009,c=Math.max(.01,n.y-a),l=(r.y+Math.sqrt(r.y*r.y+2*o*c))/o,h=n.clone().addScaledVector(r,l);h.y=e(h.x,h.z)+.009;let p=20,f=10,d=new Ct,g=new Float32Array((p+1)*(f+1)*3),x=new Float32Array(g.length),m=[];for(let P=1;P<=p;P++)for(let O=1;O<=f;O++){let v=P*(f+1)+O;m.push(v,v-f-2,v-1,v,v-f-1,v-f-2)}d.setAttribute("position",new un(g,3).setUsage(Dn)),d.setAttribute("normal",new un(x,3).setUsage(Dn)),d.setIndex(m);let u=new ht(d,t);u.name="Gravity-fed wavering drain stream",u.frustumCulled=!1,u.raycast=()=>{};let E=new S,y=new S,M=new S,C=new S,A=new S;function T(P,O){let v=Ze.smoothstep(O,0,.65);for(let w=0;w<=p;w++){let W=w/p,z=W*l;E.copy(n).addScaledVector(r,z),E.y-=.5*o*z*z,E.x+=Math.sin(P*19-W*13)*.002*W,E.z+=Math.sin(P*16-W*11)*.0015*W,y.copy(r),y.y-=o*z,y.normalize(),M.set(1,0,0).addScaledVector(y,-y.x).normalize(),C.crossVectors(M,y);let B=(.021-.01*W)*(1+.12*Math.sin(W*25-P*23))*v;for(let H=0;H<=f;H++){let Z=H/f*Math.PI*2,me=(w*(f+1)+H)*3;A.copy(M).multiplyScalar(Math.cos(Z)).addScaledVector(C,Math.sin(Z)),A.toArray(x,me),g[me]=E.x+A.x*B,g[me+1]=E.y+A.y*B,g[me+2]=E.z+A.z*B}}d.attributes.position.needsUpdate=d.attributes.normal.needsUpdate=!0}return T(0,1),{mesh:u,origin:h,update:T}}function G0({valves:i,floorSupport:e}){let t=new be;t.name="Corrosive green liquid, bubbles and contact smoke",t.userData.ignoreAcid=!0,t.visible=!1;let n=z0(),s=new At,r=new pt,o={value:0},a=new Map,c=new Map,l=[],h=-1/0,p=document.createElement("canvas");p.width=p.height=512;let f=p.getContext("2d");f.fillStyle="#000",f.fillRect(0,0,512,512);let d=new Ft(p);d.generateMipmaps=!1,d.minFilter=mn,d.flipY=!1;let g={value:d};function x(N){if(c.has(N))return c.get(N);let ae=N.clone(),ne=N.onBeforeCompile,ie=N.customProgramCacheKey();return ae.onBeforeCompile=F=>{ne.call(N,F),F.uniforms.acidBurn=g,F.vertexShader=`varying vec3 vAcidWorld;
`+F.vertexShader,F.vertexShader=F.vertexShader.replace("#include <worldpos_vertex>",`#include <worldpos_vertex>
    vec4 acidVertex=vec4(transformed,1.0);
    #ifdef USE_INSTANCING
     acidVertex=instanceMatrix*acidVertex;
    #endif
    vAcidWorld=(modelMatrix*acidVertex).xyz;`),F.fragmentShader=`uniform sampler2D acidBurn;varying vec3 vAcidWorld;
`+F.fragmentShader,F.fragmentShader=F.fragmentShader.replace("#include <color_fragment>",`#include <color_fragment>
    vec2 acidUV=(vAcidWorld.xz+vec2(4.1,4.2))/vec2(8.2,8.8);
    float burned=texture2D(acidBurn,clamp(acidUV,0.0,1.0)).r*(1.0-smoothstep(.035,.32,vAcidWorld.y));
    float pitting=fract(sin(dot(floor(vAcidWorld*145.0),vec3(17.17,83.23,39.71)))*43758.5453);
    diffuseColor.rgb=mix(diffuseColor.rgb,vec3(.075,.063,.025)+pitting*.035,burned*.94);
    if(burned>.48&&pitting<(burned-.48)*.55)discard;`)},ae.customProgramCacheKey=()=>ie+"-acid-corrosion-v1",c.set(N,ae),ae}function m(N){let ae=new Ln;function ne(ie){if(!ie.userData.ignoreAcid){if(ie.isMesh&&ie.material&&(ae.setFromObject(ie),ae.min.y<.4&&ae.max.y>-.01)){ae.max.y>.02&&ae.max.y<.65&&l.push(ae.clone());let F=re=>re.isMeshStandardMaterial||re.isMeshBasicMaterial||re.isMeshToonMaterial?x(re):re;ie.material=Array.isArray(ie.material)?ie.material.map(F):F(ie.material)}for(let F of ie.children)ne(F)}}for(let ie of N)ie.updateWorldMatrix(!0,!0),ne(ie)}let u=k0(e,d,o);t.add(u.scorch,u.pool);let E=new vn(new Zt(1,10,7),new Vt({color:10530404,roughness:.13,clearcoat:1,transparent:!0,opacity:.72,depthWrite:!1}),54);E.instanceMatrix.setUsage(Dn),E.frustumCulled=!1,E.count=0,t.add(E);let y=new vn(new Zt(1,8,6),u.jetMaterial,42);y.instanceMatrix.setUsage(Dn),y.frustumCulled=!1,y.count=0,y.name="Small falling splash droplets",t.add(y);let M=new Bs(.9,1,32);M.rotateX(-Math.PI/2);let C=new cr(new Float32Array(12),1);M.setAttribute("rippleAlpha",C);let A=new gt({color:11978123,transparent:!0,opacity:.32,depthWrite:!1,side:Dt});A.onBeforeCompile=N=>{N.vertexShader=`attribute float rippleAlpha;varying float vRippleAlpha;
`+N.vertexShader,N.vertexShader=N.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
vRippleAlpha=rippleAlpha;`),N.fragmentShader=`varying float vRippleAlpha;
`+N.fragmentShader,N.fragmentShader=N.fragmentShader.replace("#include <color_fragment>",`#include <color_fragment>
diffuseColor.a*=vRippleAlpha;`)};let T=new vn(M,A,12);T.instanceMatrix.setUsage(Dn),T.frustumCulled=!1,T.count=0,T.renderOrder=6,T.name="Expanding impact rings",t.add(T);let P=document.createElement("canvas");P.width=P.height=128;let O=P.getContext("2d");for(let N=0;N<7;N++){let ae=64+Math.sin(N*2.4)*23,ne=64+Math.cos(N*3.1)*21,ie=O.createRadialGradient(ae,ne,0,ae,ne,36);ie.addColorStop(0,"rgba(220,231,199,.3)"),ie.addColorStop(1,"rgba(220,231,199,0)"),O.fillStyle=ie,O.fillRect(0,0,128,128)}let v=new Ft(P),w=new Et(1,1),W=new cr(new Float32Array(84),1);w.setAttribute("smokeAlpha",W);let z=new gt({map:v,transparent:!0,opacity:.27,depthWrite:!1,color:12699827,side:Dt});z.onBeforeCompile=N=>{N.vertexShader=`attribute float smokeAlpha;varying float vSmokeAlpha;
`+N.vertexShader,N.vertexShader=N.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
vSmokeAlpha=smokeAlpha;`),N.fragmentShader=`varying float vSmokeAlpha;
`+N.fragmentShader,N.fragmentShader=N.fragmentShader.replace("#include <color_fragment>",`#include <color_fragment>
diffuseColor.a*=vSmokeAlpha;`)};let B=new vn(w,z,84);B.name="Smoke rising from corroding surfaces",B.instanceMatrix.setUsage(Dn),B.frustumCulled=!1,B.count=0,B.renderOrder=12,t.add(B),t.traverse(N=>{N.isMesh&&(N.raycast=()=>{})});function H(N,ae){let ne=e(N,ae);for(let ie of l)N>=ie.min.x&&N<=ie.max.x&&ae>=ie.min.z&&ae<=ie.max.z&&(ne=Math.max(ne,Math.min(.27,ie.max.y)));return ne}function Z(N,ae,ne=!1){let ie=i[N];if(!ie||ne||n.dying||n.leaks.some(re=>re.index===N))return!1;let F=V0(ie.outlet,e,u.jetMaterial);return n.open(N,F.origin,ae,ne)?(F.mesh.visible=!1,t.add(F.mesh),a.set(N,F),t.visible=!0,!0):(F.mesh.geometry.dispose(),!1)}function me(N){if(!(N-h<.1)){h=N;for(let ae of n.leaks)for(let ne of ae.points){let ie=(ne.x+4.1)/8.2*512,F=(ne.z+4.2)/8.8*512,re=ne.radius*512/8.2*1.18,X=f.createRadialGradient(ie,F,re*.45,ie,F,re);X.addColorStop(0,"rgba(255,255,255,.13)"),X.addColorStop(1,"rgba(255,255,255,0)"),f.fillStyle=X,f.fillRect(ie-re,F-re,re*2,re*2)}d.needsUpdate=!0}}function Q(N,ae,ne,ie,F=!1){if(!n.leaks.length)return!1;let re=n.update(N,ae,ne),X=F?0:N;o.value=X,ie.getWorldQuaternion(r);let V=0,$=0,xe=0,Ce=0;for(let ve of n.leaks){i[ve.index].setOpen(F?1:Ze.smootherstep(ve.progress,0,1));let te=a.get(ve.index);if(te.mesh.visible=ve.points.length>0,te.update(X,ve.progress),!!ve.points.length){for(let L=0;L<18;L++){let _e=ve.points[(L*17+ve.index*5)%ve.points.length],se=(X*.9+L*.618)%1,he=L*2.399,de=_e.radius*.57;s.position.set(_e.x+Math.cos(he)*de,e(_e.x,_e.z)+.008+Math.sin(se*Math.PI)*.005,_e.z+Math.sin(he)*de);let Me=(.005+L%4*.0025)*Math.sin(se*Math.PI);s.scale.set(Me,Me*.45,Me),s.quaternion.identity(),s.updateMatrix(),E.setMatrixAt(V++,s.matrix)}for(let L=0;L<14;L++){let _e=(X*2.7+L*.618)%1,se=L*2.399+ve.index,he=.015+_e*(.07+L%3*.02),de=.045+L%4*.012;s.position.set(ve.origin.x+Math.cos(se)*he,ve.origin.y+4*de*_e*(1-_e),ve.origin.z+Math.sin(se)*he);let Me=(.003+L%3*.0015)*(1-_e*.45);s.scale.set(Me,Me*(1.3+_e),Me),s.quaternion.identity(),s.updateMatrix(),y.setMatrixAt(xe++,s.matrix)}for(let L=0;L<4;L++){let _e=(X*1.6+L*.25)%1,se=.018+_e*.16;s.position.set(ve.origin.x,e(ve.origin.x,ve.origin.z)+.01,ve.origin.z),s.quaternion.identity(),s.scale.set(se,1,se*.92),s.updateMatrix(),T.setMatrixAt(Ce,s.matrix),C.setX(Ce++,Math.sin(_e*Math.PI)*(1-_e))}for(let L=0;L<16;L++){let _e=L*7%Math.min(35,ve.points.length),se=ve.points[Math.max(0,ve.points.length-1-_e)],he=(X*.46+L*.381)%1,de=L*2.4+ve.index,Me=se.radius*(.45+he*.5),Se=.075+he*.22;s.position.set(se.x+Math.cos(de)*Me+Math.sin(X+L)*he*.06,H(se.x,se.z)+.015+he*.34,se.z+Math.sin(de)*Me),s.quaternion.copy(r),s.rotateZ(L*.9+he*.4),s.scale.set(Se,Se*1.5,1),s.updateMatrix(),B.setMatrixAt($,s.matrix),W.setX($++,Math.sin(he*Math.PI)*.58)}}}E.count=V,B.count=$,y.count=xe,T.count=Ce;for(let ve of[E,B,y,T])ve.instanceMatrix.needsUpdate=!0;return W.needsUpdate=!0,C.needsUpdate=!0,u.update(N,n.leaks),me(N),re}function ge(){n.reset(),u.reset(),t.visible=!1,E.count=B.count=y.count=T.count=0;for(let N of a.values())t.remove(N.mesh),N.mesh.geometry.dispose();a.clear();for(let N of i)N.setOpen(0);f.clearRect(0,0,512,512),f.fillStyle="#000",f.fillRect(0,0,512,512),d.needsUpdate=!0,h=-1/0}return{group:t,open:Z,update:Q,reset:ge,bindTargets:m,setEnvironment:u.setEnvironment,blackout:N=>n.blackout(N),get dying(){return n.dying},get active(){return n.leaks.length>0}}}function W0(i,e){let t=new be;t.name="Abandoned technology office";let n=[],s=[],r=_=>(n.push(_),_),o=87021,a=()=>(o=o*1664525+1013904223>>>0,o/4294967296),c=(_,R)=>_+(R-_)*a();function l(_=512){let R=document.createElement("canvas");return R.width=R.height=_,[R,R.getContext("2d")]}function h(_){let R=new Ft(_);return R.colorSpace=ft,R.anisotropy=Math.min(8,i.capabilities.getMaxAnisotropy()),R}function p(_,R,D,k,G,Y){let fe=_.createRadialGradient(R,D,0,R,D,k);fe.addColorStop(0,`rgba(${G},${Y})`),fe.addColorStop(1,`rgba(${G},0)`),_.fillStyle=fe,_.fillRect(R-k,D-k,k*2,k*2)}function f(_,R,D,k,G){for(let Y=0;Y<D;Y++)_.fillStyle=`rgba(${k},${a()*G})`,_.fillRect(a()*R,a()*R,c(.4,2.2),c(.4,2))}function d(_,R="paint"){let[D,k]=l();k.fillStyle=_,k.fillRect(0,0,512,512);for(let G=0;G<210;G++)p(k,a()*512,a()*512,c(4,70),G%3?"27,33,23":"110,83,48",c(.025,.15));if(f(k,512,12e3,"18,25,18",.24),f(k,512,4e3,"200,192,159",.18),R==="wood")for(let G=0;G<550;G++){k.strokeStyle=`rgba(36,29,17,${c(.02,.16)})`,k.lineWidth=c(.4,2);let Y=a()*512;k.beginPath(),k.moveTo(0,Y),k.bezierCurveTo(170,Y+c(-12,12),340,Y+c(-12,12),512,Y),k.stroke()}if(R==="metal")for(let G=0;G<250;G++)p(k,a()*512,a()*512,c(2,18),"112,56,24",c(.1,.5));for(let G=0;G<80;G++){k.strokeStyle=`rgba(197,190,160,${c(.08,.3)})`,k.lineWidth=c(.3,1.3);let Y=a()*512,fe=a()*512;k.beginPath(),k.moveTo(Y,fe),k.lineTo(Y+c(3,50),fe+c(-2,4)),k.stroke()}return h(D)}let g=d("#8b8c77"),x=d("#b2b09a"),m=d("#817157","wood"),u=d("#4e5550","metal"),E=d("#44534b"),y=d("#66695a"),M=(_,R=.88,D=null,k=0)=>new Be({color:_,roughness:R,map:D,bumpMap:D,bumpScale:D?.008:0,metalness:k}),C=M(16777215,.98,g),A=M(16777215,.86,m),T=M(16777215,.8,x),P=M(16777215,.73,u,.42),O=M(16777215,.95,E),v=M(1514521,.86),w=M(1053970,.95),W=M(16777215,.98,y),z=M(8555654,.4,null,.8);function B(_,R,D=t){let k=new ht(_,R);return k.castShadow=!0,k.receiveShadow=!0,D.add(k),k}function H(_,R,D=P,k=t){let G=B(new Mt(..._),D,k);return G.position.set(...R),G}let Z=new Zt(1,20,12);function me(_,R,D,k=t){let G=B(Z,D,k);return G.scale.set(..._),G.position.set(...R),G}function Q(_,R,D,k=P,G=t,Y=12){let fe=B(new Yt(_,_,R,Y),k,G);return fe.position.set(...D),fe}function ge(_,R,D=.015,k=P,G=t){let Y=new S(..._),fe=new S(...R),Ge=fe.clone().sub(Y),tt=Q(D,Ge.length(),Y.clone().add(fe).multiplyScalar(.5).toArray(),k,G);return tt.quaternion.setFromUnitVectors(new S(0,1,0),Ge.normalize()),tt}function N(_,R=.008,D=v,k=t){let G=new Jt(_.map(fe=>new S(...fe))),Y=B(new dn(G,Math.max(20,_.length*8),R,6,!1),D,k);return k===t&&_.some(fe=>fe[1]<.06)&&s.push(Y),Y}function ae(_,R,D,k=.025){k=Math.min(k,_*.45,R*.45);let G=new St,Y=_/2,fe=R/2;G.moveTo(-Y+k,-fe),G.lineTo(Y-k,-fe),G.quadraticCurveTo(Y,-fe,Y,-fe+k),G.lineTo(Y,fe-k),G.quadraticCurveTo(Y,fe,Y-k,fe),G.lineTo(-Y+k,fe),G.quadraticCurveTo(-Y,fe,-Y,fe-k),G.lineTo(-Y,-fe+k),G.quadraticCurveTo(-Y,-fe,-Y+k,-fe);let Ge=Math.min(.012,_/6,R/6,D/6),tt=new on(G,{depth:D-Ge*2,bevelEnabled:!0,bevelSize:Ge,bevelThickness:Ge,bevelSegments:2,steps:1,curveSegments:4});return tt.translate(0,0,-D/2+Ge),tt}function ne(_,R,D,k=t){let G=B(ae(..._),D,k);return G.position.set(...R),G}function ie(_,R,D,k=!1){let[G,Y]=l(1024);for(let Ge=0;Ge<290;Ge++)p(Y,a()*1024,k?a()*1024:a()<.6?c(600,1060):a()*1024,c(12,140),"24,30,19",c(.03,.26));if(!k){let Ge=Y.createLinearGradient(0,0,0,1024);Ge.addColorStop(0,"rgba(29,35,24,.4)"),Ge.addColorStop(.3,"rgba(29,35,24,0)"),Ge.addColorStop(.75,"rgba(29,35,24,.07)"),Ge.addColorStop(1,"rgba(23,30,21,.72)"),Y.fillStyle=Ge,Y.fillRect(0,0,1024,1024);for(let tt=0;tt<80;tt++){let Lt=a()*1024,sn=a()*220;Y.strokeStyle=`rgba(62,51,30,${c(.03,.26)})`,Y.lineWidth=c(1,6),Y.beginPath(),Y.moveTo(Lt,sn),Y.lineTo(Lt+c(-8,8),sn+c(80,750)),Y.stroke()}}f(Y,1024,17e3,"16,25,17",.28);let fe=B(new Et(_,R),new Be({map:h(G),transparent:!0,depthWrite:!1,roughness:1}),D);return fe.castShadow=!1,fe}H([7.8,.15,8.6],[0,-.075,.2],W);let F=ie(7.8,8.6,t,!0);F.rotation.x=-Math.PI/2,F.position.set(0,.003,.2);let re=H([7.8,3.35,.16],[0,1.675,-4.08],C),X=H([.16,3.35,8.6],[-3.98,1.675,.2],M(8556677,.98,g));H([.16,1.1,8.6],[3.98,.55,.2],C),H([.16,.65,8.6],[3.98,3.025,.2],C),H([.16,1.6,1.2],[3.98,1.9,-3.4],C),H([.16,1.6,4.8],[3.98,1.9,2.1],C),ie(7.8,3.35,t).position.set(0,1.675,-3.99);let $=ie(8.6,3.35,t);$.rotation.y=Math.PI/2,$.position.set(-3.89,1.675,.2);for(let _=0;_<9;_++)H([.012,2.2,.014],[-3.85+_*.96,1.66,-3.977],P);H([7.8,.045,.035],[0,.58,-3.96],P),H([7.8,.045,.035],[0,2.76,-3.96],P);for(let _ of[-3.86,3.86])H([.045,.13,8.6],[_,.065,.2],v);H([7.8,.13,.04],[0,.065,-3.95],v);for(let _=0;_<26;_++){let R=new St,D=c(-3.65,3.65),k=c(.24,3.1),G=c(.05,.22),Y=c(.05,.26);for(let Ge=0;Ge<9;Ge++){let tt=Ge/9*Math.PI*2,Lt=c(.6,1),sn=D+Math.cos(tt)*G*Lt,Wt=k+Math.sin(tt)*Y*Lt;Ge?R.lineTo(sn,Wt):R.moveTo(sn,Wt)}R.closePath();let fe=B(new Bi(R),M(_%3?5199175:11644305,.99));fe.position.z=-3.972,fe.castShadow=!1}let xe=H([7.8,.1,8.6],[0,3.36,.2],v);for(let _=-3.6;_<3.9;_+=1.2)H([.028,.032,8.6],[_,3.12,.2],P);for(let _=-3.9;_<4.5;_+=1.2)H([7.8,.032,.028],[0,3.12,_],P);let Ce=M(10132616,.98,g);for(let _=-3;_<3.9;_+=1.2)for(let R=-3.3;R<4.5;R+=1.2){if(a()<.25)continue;let D=H([1.15,.035,1.15],[_,3.145,R],Ce);a()<.12&&(D.rotation.z=c(-.13,.13),D.position.y-=.06)}for(let _=0;_<5;_++)N([[-2+_*.45,3.3,-1.6],[-1.9+_*.45,2.8,-1.5],[-1.7+_*.4,2.53,-1.6],[-1.3+_*.35,3.29,-1.8]],.009,v);let ve=new be;ve.position.set(3.88,1.9,-1.5),ve.rotation.y=-Math.PI/2,t.add(ve);let[te,L]=l();L.fillStyle="#778c88",L.fillRect(0,0,512,512);for(let _=0;_<15;_++){let R=_*43,D=c(25,60),k=c(70,290);L.fillStyle=_%2?"#4b5d58":"#526560",L.fillRect(R,512-k,D,k);for(let G=0;G<5;G++)L.fillStyle="#879186",L.fillRect(R+8,512-k+18+G*34,4,10)}let _e=B(new Et(2.8,1.6),new gt({map:h(te),color:3622209}),ve);_e.position.z=-.13,_e.castShadow=!1;for(let _ of[-1.43,0,1.43])H([.055,1.7,.09],[_,0,.025],P,ve);for(let _ of[-.83,.83])H([2.92,.055,.09],[0,_,.025],P,ve);let se=M(10336426,.25,null,.25);se.transparent=!0,se.opacity=.18,se.side=Dt;for(let _ of[-.72,.72]){let R=H([1.37,1.55,.008],[_,0,.04],se,ve);R.castShadow=!1}for(let _=0;_<17;_++){if([5,9,14].includes(_))continue;let R=H([2.77,.047,.015],[0,.73-_*.086,.11],M(8160114,.82,x),ve);R.rotation.x=.35,(_===7||_===12)&&(R.rotation.z=_===7?.035:-.05,R.rotation.x=.9)}for(let _ of[-.86,.86])N([[_,.8,.15],[_,.12,.16],[_,-.77,.15]],.005,v,ve);N([[1.35,.83,.12],[1.4,-.7,.14],[1.32,-1.1,.18]],.006,v,ve);let he=g0(i);o=577513849;let de=ae(.77,.45,.035,.012),Me=M(7042164,.38,null,.7);function Se(_,R,D=0,k="cracked",G=1){let Y=new be;Y.position.set(...R),Y.rotation.y=D,Y.scale.setScalar(G),_.add(Y),Y.name="Damaged widescreen monitor",B(de,v,Y).position.set(0,.375,0),ne([.31,.018,.2],[0,.013,-.025],Me,Y),H([.055,.24,.025],[0,.14,-.035],Me,Y),he.add(Y,k),H([.18,.16,.032],[0,.36,-.03],Me,Y),me([.004,.004,.003],[.35,.163,.022],k==="live"?new gt({color:9223008}):v,Y);for(let tt=0;tt<11;tt++)H([.015,.002,.003],[-.25+tt*.05,.585,-.02],P,Y);let Ge=N([[.1,.23,-.05],[.15,.04,-.08],[.23,-.31,-.18]],.006,v,Y);return Ge.name="Monitor power cable",Ge.userData.ignoreFloorContact=!0,Y}let U=new Mt(.023,.008,.023);function b(_,R,D=0){let k=new be;k.position.set(...R),k.rotation.y=D,_.add(k),ne([.47,.035,.18],[0,0,0],T,k);let G=new vn(U,M(6844e3,.8),56);for(let Y=0;Y<56;Y++){let fe=new At;fe.position.set(-.206+Y%14*.031,.024,-.065+Math.floor(Y/14)*.036),fe.updateMatrix(),G.setMatrixAt(Y,fe.matrix)}return k.add(G),H([.14,.008,.022],[0,.024,.07],v,k),k}function j(_,R,D=0,k=!1){let G=new be;G.position.set(...R),G.rotation.y=D,_.add(G),ne([.25,.53,.46],[0,.265,0],T,G);for(let Y=.32;Y<.49;Y+=.065)H([.195,.042,.012],[0,Y,.239],v,G);for(let Y=0;Y<7;Y++)H([.16,.008,.012],[0,.055+Y*.025,.239],P,G);if(k){H([.012,.42,.35],[.139,.27,0],v,G);for(let Y=0;Y<3;Y++)H([.015,.09,.25],[.15,.16+Y*.105,-.02],M(2706228,.83),G)}return G}function pe(_,R,D,k=0){let G=new be;G.position.set(_,0,R),G.rotation.y=k,t.add(G),H([D,.075,.86],[0,.82,0],A,G),H([D,.035,.025],[0,.794,.443],P,G);for(let Y of[-D/2+.08,D/2-.08])H([.048,.79,.68],[Y,.39,0],P,G),H([.24,.035,.74],[Y,.018,0],v,G);return H([D-.16,.19,.035],[0,.45,-.35],P,G),G}let Te=pe(-1,-3.37,5.4);for(let _=0;_<6;_++){let R=-2.24+_*.84;Se(Te,[R,.86,-.05],c(-.13,.13),_===3?"live":_%2?"hole":"cracked",c(.88,1.04)),b(Te,[R+.03,.87,.3],c(-.16,.16)),_%2===0&&j(Te,[R+.18,0,-.1],c(-.1,.1),!0)}let Ee=pe(-1.1,-2.25,2.6,0);for(let _=0;_<3;_++)Se(Ee,[-.84+_*.83,.86,-.1],c(-.2,.2),_===0?"live":"hole",.9),b(Ee,[-.84+_*.83,.87,.3],c(-.2,.2));let Xe=Se(t,[-.8,.31,-1.45],.42,"hole",.95);Xe.rotation.set(-1.38,.42,.21),r(Xe);let Oe=Se(t,[-2.72,.24,2.58],-.45,"cracked",.73);Oe.rotation.x=-.56,Oe.rotation.z=.24,r(Oe);let ke=j(t,[-2.22,.13,-.72],.35,!0);ke.rotation.z=Math.PI/2,r(ke);for(let _=0;_<3;_++)r(j(t,[-3.32,0,-2.45+_*.31],-.18,!0)).scale.setScalar(.9);let vt=o,De=M(16777215,.78,d("#afb4a9","metal"),.22),J=M(6449762,.7,null,.25),ye=M(3225908,.86,E),Ie=M(11383205,.82),Pe=M(6845548,.46,null,.73);function Re(_=0){let[R,D]=l(512);D.lineWidth=1.8;for(let k=0;k<512;k+=7)D.strokeStyle=k%21?"#a0a59a":"#686f65",D.beginPath(),D.moveTo(k,0),D.lineTo(k,512),D.stroke();for(let k=0;k<512;k+=6)D.strokeStyle=k%18?"#7f897e":"#b0b4a5",D.lineWidth=k%18?1.6:2.1,D.beginPath(),D.moveTo(0,k),D.lineTo(512,k),D.stroke();if(_){D.globalCompositeOperation="destination-out",D.fillStyle="#000",D.beginPath();let k=_===1?[[126,180],[187,210],[203,182],[229,265],[204,288],[236,339],[183,360],[154,302],[113,321],[137,257],[102,232]]:[[275,256],[315,209],[333,270],[377,253],[353,315],[386,375],[328,354],[300,399],[287,332],[248,309]];k.forEach(([G,Y],fe)=>fe?D.lineTo(G,Y):D.moveTo(G,Y)),D.closePath(),D.fill(),D.lineWidth=3;for(let G=0;G<16;G++){let[Y,fe]=k[G%k.length];D.beginPath(),D.moveTo(Y,fe),D.lineTo(Y+c(-24,24),fe+c(-18,18)),D.stroke()}}return new Be({map:h(R),color:14803929,roughness:.93,side:Dt,alphaTest:.3,alphaToCoverage:!0})}let le=[Re(),Re(1),Re(2)];function Ve(_,R,D,k,G=0){let fe=new Jt(_.map(pn=>new S(pn[0],pn[1],0)),!0,"centripetal").getSpacedPoints(96).slice(0,-1),Ge=[],tt=[],Lt=[],sn=12,Wt=fe.length,ai=Math.min(...fe.map(pn=>pn.x)),Ui=Math.max(...fe.map(pn=>pn.x)),Lo=Math.min(...fe.map(pn=>pn.y)),kg=Math.max(...fe.map(pn=>pn.y));for(let pn=0;pn<=sn;pn++)for(let Ss=0;Ss<Wt;Ss++){let Uo=pn/sn,za=R[0]+(fe[Ss].x-R[0])*Uo,Ho=R[1]+(fe[Ss].y-R[1])*Uo;if(Ge.push(...D(za,Ho,Uo)),tt.push((za-ai)/(Ui-ai),(Ho-Lo)/(kg-Lo)),pn<sn){let Jl=pn*Wt+Ss,Ql=pn*Wt+(Ss+1)%Wt;Lt.push(Jl,Ql,Jl+Wt,Ql,Ql+Wt,Jl+Wt)}}let Do=new Ct;Do.setAttribute("position",new ct(Ge,3)),Do.setAttribute("uv",new ct(tt,2)),Do.setIndex(Lt),Do.computeVertexNormals();let Vg=B(Do,le[G],k);Vg.customDepthMaterial=new ia({depthPacking:ld,map:le[G].map,alphaTest:.3,side:Dt});for(let[pn,Ss,Uo]of[[1,.025,De],[.925,.007,J]]){let za=fe.map(Ho=>new S(...D(R[0]+(Ho.x-R[0])*pn,R[1]+(Ho.y-R[1])*pn,pn)));B(new dn(new Jt(za,!0),96,Ss,8,!0),Uo,k)}}function q(_,R=1){let D=new be;D.name="Torn mesh back and lumbar support",_.add(D),Ve([[-.18,0],[-.224,.08],[-.235,.26],[-.28,.46],[-.264,.55],[-.17,.6],[0,.615],[.17,.6],[.264,.55],[.28,.46],[.235,.26],[.224,.08],[.18,0],[0,-.014]],[0,.3],(G,Y,fe)=>[G,Y,-.11*Y/.615+.035*(1-fe*fe)],D,R),N([[0,-.09,-.07],[0,.13,-.08],[-.17,.3,-.09],[-.23,.37,-.09]],.018,De,D),N([[0,.08,-.08],[.08,.22,-.085],[.23,.37,-.09]],.018,De,D);for(let G of[.12,.235])me([.048,.073,.024],[0,G,-.055],ye,D);if(N([[-.21,.175,-.06],[0,.19,-.035],[.21,.175,-.06]],.014,J,D),R)for(let G=0;G<5;G++)N([[-.13+G*.012,.2,-.015],[-.12+G*.012,.15,.001],[-.14+G*.012,.1,-.02]],.0016,le[0],D);return D}function Ae(_,R,D=!1){let k=new be;_.add(k);let G=R*.295;if(N([[R*.22,.46,-.17],[G,.53,-.2],[G,.67,-.17],[G,.72,-.07]],.023,De,k),D)return me([.025,.011,.026],[G,.72,-.07],Ie,k),k;let Y=me([.058,.034,.15],[G,.745,.01],ye,k);return Y.rotation.z=R*.06,ge([G,.68,-.085],[G,.734,.045],.019,J,k),k}function ce(_,R,D,k,G=0){let Y=new be;Y.position.set(R,D,k),Y.rotation.y=G,_.add(Y),ge([0,.028,0],[0,.078,.015],.012,Pe,Y);for(let fe of[-1,1]){let Ge=Q(.039,.022,[fe*.021,0,0],w,Y,16);Ge.rotation.z=Math.PI/2,me([.002,.018,.018],[fe*.033,0,0],J,Y)}return Y}function we(_,R=-1){let D=new be;D.name="Five-spoke caster base",_.add(D),Q(.057,.09,[0,.16,0],De,D,16),Q(.031,.2,[0,.28,0],Pe,D,16);for(let k=0;k<5;k++){let G=k/5*Math.PI*2+.25,Y=Math.cos(G),fe=Math.sin(G);if(k===R){ge([0,.16,0],[Y*.13,.135,fe*.13],.025,De,D),me([.024,.014,.018],[Y*.13,.135,fe*.13],Ie,D);continue}N([[0,.18,0],[Y*.14,.145,fe*.14],[Y*.31,.092,fe*.31]],.022,De,D),ce(D,Y*.31,.04,fe*.31,G)}return D}function Ue(_,R,D,k){return _.position.set(R,0,D),_.rotation.set(...k),_.updateMatrixWorld(!0),r(_)}function Fe(_,R,D,k={}){let G=new be;G.name="Broken Aeron-style mesh chair",t.add(G),k.noBase||we(G,k.missingSpoke??-1),ne([.24,.095,.27],[0,.405,-.035],J,G),Q(.045,.13,[0,.405,0],De,G,16),ge([-.14,.41,.015],[-.245,.405,.05],.012,Pe,G),me([.035,.016,.055],[-.25,.405,.055],ye,G),me([.055,.025,.04],[.18,.407,-.04],ye,G),Ve([[-.2,-.23],[-.26,-.16],[-.283,.08],[-.25,.22],[0,.25],[.25,.22],[.283,.08],[.26,-.16],[.2,-.23],[0,-.25]],[0,0],(fe,Ge,tt)=>[fe,.51-.035*(1-tt*tt)-.025*Math.max(0,Ge/.25),Ge],G,k.seatTear??1);for(let fe of[-1,1])N([[fe*.12,.41,-.14],[fe*.22,.46,-.2],[fe*.24,.49,-.15]],.023,De,G),Ae(G,fe,fe===k.brokenArm);if(!k.noBack){let fe=q(G,k.backTear??1);fe.position.set(0,.55,-.22),fe.rotation.set(k.backLean??0,0,k.backTwist??0)}return Ue(G,_,R,D)}Fe(-2.85,-2.48,[0,.35,-.035],{brokenArm:1,backTear:2}),Fe(-.3,3.35,[-.08,-.28,.08],{brokenArm:-1,missingSpoke:3,backLean:-.16}),Fe(2.75,3.3,[-.55,-.8,1.39],{brokenArm:-1,missingSpoke:2,backTwist:.2}),Fe(-.55,-3.42,[1.65,.65,.32],{brokenArm:1,noBack:!0}),Fe(1.35,1.42,[-.3,-.5,-1.28],{noBase:!0,brokenArm:-1,backTwist:-.14,backTear:2});let ut=we(t,1);ut.name="Detached chair base",Ue(ut,2.35,2.53,[2.7,.36,.22]);let Pt=q(t,2);Pt.name="Snapped mesh backrest",Ue(Pt,-.75,2.3,[-1.6,.22,-.4]);let Ot=Ae(t,1);Ot.name="Broken chair arm",Ue(Ot,1.4,2.62,[1.48,.71,.15]),r(ce(t,2.37,.045,2.84,.7)),r(ce(t,-2.15,.045,.95,-.4)),o=vt;for(let _=0;_<11;_++){let R=c(-3.3,.9),D=c(-3,-1);N([[R,.83,D],[R+.15,.52,D+.2],[R-.12,.04,D+.45],[R+.31,.022,D+.83],[R+.62,.02,D+.47]],.009,v)}N([[-3.25,.026,.8],[-2,.023,1.45],[-1.25,.022,1.78],[-.85,.022,1.47],[-.67,.022,2.5],[.45,.022,2.83],[1.25,.022,2.44]],.012,v),N([[2.8,.027,-2.9],[2.05,.025,-1.5],[1.64,.024,-.4],[1.8,.022,.1],[.98,.022,.6]],.008,M(6446139,.9));let lt=pe(2.55,-3.38,1.92);H([1.7,.72,.72],[0,.4,-.025],M(6713960,.94,m),lt);for(let _ of[-.42,.42]){let R=H([.77,.24,.045],[_,.66,.37],A,lt);_>0&&(R.position.z=.51,R.rotation.z=-.04),ge([_-.13,.66,.41],[_+.13,.66,.41],.014,P,lt)}let It=new be;It.position.set(-.27,.87,-.04),lt.add(It),ne([.49,.6,.37],[0,.3,0],P,It),H([.4,.35,.025],[0,.26,.2],v,It),ne([.34,.15,.06],[0,.5,.2],T,It),H([.12,.05,.008],[-.07,.515,.236],M(2243883,.4),It);for(let _ of[-.08,.08])ge([_,.38,.21],[_,.31,.26],.018,z,It);H([.37,.04,.23],[0,.045,.22],v,It);for(let _=0;_<7;_++)H([.017,.012,.19],[-.14+_*.047,.07,.22],z,It);let Xn=Q(.12,.17,[0,.68,-.015],new Be({color:5069384,transparent:!0,opacity:.55,roughness:.45}),It,24),mi=H([.27,.022,.25],[.025,.78,-.015],v,It);mi.rotation.z=.13;let ss=M(12039066,.7,x);function Jn(_,R,D=0){let k=new be;k.position.set(...R),k.rotation.z=D,_.add(k);let G=[[.052,0],[.055,.014],[.059,.12],[.054,.128],[.047,.12],[.047,.018]].map(fe=>new Ne(...fe));B(new Fs(G,24,0,Math.PI*1.9),ss,k);let Y=B(new Qt(.036,.008,8,20,Math.PI*1.6),ss,k);return Y.rotation.x=Math.PI/2,Y.position.set(.066,.07,0),k}Jn(It,[0,.07,.23]),Jn(lt,[.46,.87,.25],1.25),Jn(lt,[.64,.87,-.02]);let Je=M(3877398,.33),st=B(new Ei(.18,32),Je,lt);st.rotation.x=-Math.PI/2,st.position.set(.48,.862,.19),st.scale.y=.65,st.castShadow=!1,ne([.52,.83,.54],[3.28,.42,-2.4],T);let nt=H([.49,.78,.045],[3.21,.43,-2.1],T);nt.rotation.y=.24,H([.035,.23,.04],[3.04,.56,-2.065],P),H([.36,.8,.36],[3.39,.4,-1.72],T);let rt=Q(.16,.4,[3.39,1.04,-1.72],new Be({color:7378315,transparent:!0,opacity:.38,roughness:.34}),t,24);rt.rotation.z=.08;let ze=new be;ze.name="Broken lopsided foosball table",ze.position.set(2.24,-.104,.03),ze.rotation.set(0,-.18,-.22),t.add(ze);let Qe=M(13812642,.87,m),bt=M(8099956,.92,E);H([1.18,.25,1.91],[0,.91,0],Qe,ze),H([1.04,.025,1.74],[0,1.048,0],bt,ze);for(let _ of[-.61,.61])H([.1,.18,2.02],[_,1.12,0],Qe,ze);H([1.14,.18,.08],[0,1.12,-.99],Qe,ze);let qt=new St;qt.moveTo(-.57,1.03),qt.lineTo(.57,1.03),qt.lineTo(.57,1.21),qt.lineTo(.23,1.21),qt.lineTo(.12,1.07),qt.lineTo(.02,1.15),qt.lineTo(-.09,1.07),qt.lineTo(-.16,1.21),qt.lineTo(-.57,1.21),qt.closePath();let an=B(new on(qt,{depth:.08,bevelEnabled:!1}),Qe,ze);an.position.z=.95;for(let _ of[-.99,.99])H([.3,.1,.012],[0,1.085,_+(_>0?-.045:.045)],v,ze);for(let _ of[-.47,.47])for(let R of[-.8,.8]){let D=_>0&&R>0,k=_>0;if(H([.11,D?.24:k?.57:.8,.12],[_,D?.68:k?.515:.4,R],P,ze),D)for(let G=0;G<4;G++)H([.012,.09,.018],[_-.04+G*.023,.555,R+c(-.04,.04)],A,ze).rotation.z=c(-.2,.2)}let gn=H([.11,.57,.12],[2.89,.09,.98],P);gn.rotation.set(.05,.37,1.42);let Gt=H([.45,.045,.08],[2.55,.045,1.32],Qe);Gt.rotation.y=.4;let I=[];function K(_,R){I.push(..._,...R)}for(let _ of[-.8,.8])K([-.48,1.065,_],[.48,1.065,_]);for(let _ of[-.48,.48])K([_,1.065,-.8],[_,1.065,.8]);K([-.48,1.065,0],[.48,1.065,0]);for(let _=0;_<48;_++){let R=_/48*Math.PI*2,D=(_+1)/48*Math.PI*2;K([Math.cos(R)*.19,1.065,Math.sin(R)*.19],[Math.cos(D)*.19,1.065,Math.sin(D)*.19])}let oe=new Ct;oe.setAttribute("position",new ct(I,3)),ze.add(new to(oe,new lr({color:9674366})));let ue=[M(9124144,.8),M(10658186,.8)];for(let _=0;_<8;_++){let R=-.78+_*.223,D=_%2?1:-1;_===5?N([[-.91,1.21,R],[-.24,1.21,R],[.18,1.36,R+.13],[.91,1.17,R+.08]],.012,z,ze):ge([-.91,1.21,R],[.91,1.21,R],.012,z,ze),_!==4&&ge([D*.8,1.21,R],[D*1.02,1.21,R],.034,v,ze);let k=_===0||_===7?1:_===1||_===6?2:3;for(let G=0;G<k;G++){if(_===3&&G===0||_===6&&G===1)continue;let Y=(G-(k-1)/2)*.29;H([.055,.1,.037],[Y,1.195,R],ue[_%2],ze),me([.031,.035,.031],[Y,1.28,R],ue[_%2],ze),H([.06,.045,.045],[Y,1.11,R],ue[_%2],ze)}}me([.024,.024,.024],[.46,1.09,.69],T,ze),N([[-.46,1.068,.29],[-.2,1.068,.21],[-.08,1.068,.3],[.12,1.068,.23],[.48,1.068,.37]],.007,v,ze);let ee=H([.055,.13,.04],[.38,1.09,.51],ue[0],ze);ee.rotation.z=Math.PI/2;for(let _ of[-1.07,1.07]){ge([-.32,1.27,_],[.32,1.27,_],.008,z,ze);for(let R=0;R<5;R++)me([.025,.03,.025],[-.25+R*.07,1.27,_],ue[_>0?1:0],ze)}let Le=new be;Le.name="MacBook Pro on the floor",Le.position.set(.45,.027,2.18),Le.rotation.y=Math.atan2(e.x-Le.position.x,e.z-Le.position.z),t.add(Le);let We=Le.position.clone().add(new S(1.18,0,0).applyAxisAngle(new S(0,1,0),Le.rotation.y)),je=L0(e,We);t.add(je.group);let et=D0(We);t.add(et.group),r(et.group);let ot=M(8884628,.35,null,.72),at=M(1053975,.7);function Ke(_,R,D,k,G,Y,fe=!1){let Ge=Math.min(.012,_/6,R/6,D/6),tt=B(ae(_-2*Ge,R-2*Ge,D,.026-Ge),G,Y);return tt.position.set(...k),fe&&(tt.rotation.x=-Math.PI/2),tt}Ke(.88,.59,.026,[0,0,0],ot,Le,!0),Ke(.66,.275,.003,[0,.0145,-.065],at,Le,!0);let Tt=Q(.013,.77,[0,.02,-.281],v,Le,20);Tt.rotation.z=Math.PI/2;let xt=new be;xt.position.set(0,.034,-.295),xt.rotation.x=Math.PI/2,Le.add(xt),Ke(.88,.59,.018,[0,.295,0],ot,xt),Ke(.856,.566,.005,[0,.295,.01],at,xt);for(let _ of[-.34,.34])for(let R of[-.21,.21])me([.025,.006,.025],[_,-.014,R],w,Le);let Bt=document.createElement("canvas");Bt.width=256,Bt.height=384;let Cn=Bt.getContext("2d");Sd(Cn,28,42,200);let Ht=h(Bt),it=new Be({map:Ht,transparent:!0,alphaTest:.1,roughness:.64,metalness:.03,emissiveMap:Ht,emissive:16777215,emissiveIntensity:.14}),zt=B(new Et(.115,.1725),it,xt);zt.name="Off-center Figma vinyl sticker",zt.position.set(.265,.365,-.0108),zt.rotation.set(0,Math.PI,-.14),zt.castShadow=!1;let[He,qe]=l(1024);He.height=640,qe.fillStyle="#111b22",qe.fillRect(0,0,1024,640),qe.fillStyle="#222e36",qe.fillRect(0,0,1024,38),qe.fillRect(0,38,140,602),qe.fillRect(894,38,130,602),Sd(qe,15,6,17),qe.font="13px sans-serif",qe.fillStyle="#bac6ca",qe.fillText("Figma / Wireframes",44,25);for(let _=0;_<7;_++)qe.fillStyle=_===2?"#48616b":"#657a80",qe.fillRect(18,85+_*34,85-_%3*18,3);for(let _=0;_<3;_++){let R=181+_*231;qe.fillStyle="#b2bfbb",qe.fillRect(R,118,197,390),qe.fillStyle="#465b62",qe.fillRect(R+12,137,173,19),qe.fillRect(R+12,175,173,86),qe.strokeStyle="#53696d",qe.lineWidth=2,qe.beginPath(),qe.moveTo(R+12,175),qe.lineTo(R+185,261),qe.moveTo(R+185,175),qe.lineTo(R+12,261),qe.stroke();for(let D=0;D<5;D++)qe.fillStyle="#82918f",qe.fillRect(R+13,278+D*20,c(75,170),4);qe.fillStyle="#526c72",qe.fillRect(R+14,401,169,28),qe.strokeStyle="#788c8d",qe.strokeRect(R+14,447,78,39),qe.strokeRect(R+105,447,78,39)}for(let _=0;_<12;_++)qe.fillStyle="#50666e",qe.fillRect(912,84+_*31,c(35,90),3);let Mn=h(He),nn=new gt({map:Mn,color:8360598}),Qn=B(new Et(.823,.525),nn,xt);Qn.position.set(0,.3,.013),Qn.castShadow=!1,H([.076,.014,.002],[0,.556,.014],at,xt),me([.003,.003,.001],[0,.553,.0155],M(1978424,.2),xt);let[cn,si]=l(512);cn.height=64,si.font="22px sans-serif",si.textAlign="center",si.fillStyle="#9ca5a6",si.fillText("MacBook Pro",256,40);let vr=B(new Et(.14,.018),new gt({map:h(cn),transparent:!0}),xt);vr.position.set(0,.025,.013),vr.castShadow=!1;let[jn,ri]=l(1024);ri.fillStyle="#151b1e",ri.fillRect(0,0,1024,1024),ri.strokeStyle="#3e494d",ri.fillStyle="#9ca5a6",ri.font="25px sans-serif",ri.textAlign="center";let Dl=["1234567890-=","QWERTYUIOP[]","ASDFGHJKL;\u2019","ZXCVBNM,./"];for(let _=0;_<4;_++)for(let R=0;R<12;R++){let D=18+R*83,k=74+_*181;ri.strokeRect(D,k,72,145),ri.fillText(Dl[_][R]||"",D+36,k+86)}ri.strokeRect(250,825,524,125);let To=B(new Et(.635,.257),new Be({map:h(jn),roughness:.7}),Le);To.rotation.x=-Math.PI/2,To.position.set(0,.0165,-.065);let mE=Ke(.34,.17,.001,[0,.0135,.174],M(6714488,.44,null,.62),Le,!0),ef=new vn(new Ei(.0012,5),v,480);for(let _=0;_<480;_++){let R=new At,D=_<240?-1:1,k=_%240;R.position.set(D*(.355+k%8*.006),.017,-.196+Math.floor(k/8)*.0085),R.rotation.x=-Math.PI/2,R.updateMatrix(),ef.setMatrixAt(_,R.matrix)}Le.add(ef);for(let _ of[-1,1])for(let R=0;R<3;R++)H([.003,.006,.035],[_*.444,.001,-.18+R*.065],at,Le);let Ul=new Nn(9285310,0,1.4,2);Ul.position.set(0,.29,.14),xt.add(Ul);let lg=nn.color.clone();nn.color.setScalar(0);let _r=!1,qi=0,Ra=!1;function Hl(_){xt.rotation.x=Ze.lerp(Math.PI/2,-.2,_);let R=Ze.smoothstep(_,.22,.72);nn.color.copy(lg).multiplyScalar(R),Ul.intensity=.6*R}let tf={object:Le,screen:Qn,get isReady(){return qi===1},get isOpen(){return _r},get openProgress(){return qi},getLidGrip(_){return xt.updateWorldMatrix(!0,!1),xt.localToWorld(_.set(.12,.6,-.004))},setOpenProgress(_){Ra=!0,qi=Ze.clamp(_,0,1),_r=qi>0,Hl(qi)},open(){return _r?!1:(Ra=!1,_r=!0,!0)},close(){Ra=!1,_r=!1,qi=0,Hl(0)},update(_,R=!1){Ra||!_r||qi===1||(qi=R?1:Math.min(1,qi+_/.95),Hl(Ze.smootherstep(qi,0,1)))}};function hg(){let[_,R]=l();R.fillStyle="#b2af94",R.fillRect(0,0,512,512),R.fillStyle="#4f584c";for(let D=0;D<35;D++){let k=35+D*12;R.fillRect(30,k,c(100,430),c(1,3))}return R.strokeStyle="rgba(64,54,28,.4)",R.lineWidth=4,R.beginPath(),R.arc(345,130,61,0,Math.PI*2),R.stroke(),f(R,512,8e3,"49,45,27",.16),h(_)}let ug=M(16777215,.99,hg()),dg=M(2836532,.88),fg=[T,P,A,M(8619381,.97)],Nl=[],Fl=[];for(let _=0;_<82;_++){let R=c(-3.62,3.58),D=c(-3.75,4);Math.abs(R)<.65&&D<.8&&D>-.9&&(R-=1.2);let k=B(new Et(c(.13,.29),c(.17,.37),4,4),ug),G=c(-.1,.1),Y=c(-.07,.07),fe=a()*Math.PI*2,Ge=c(.012,.038);k.rotation.set(-Math.PI/2,0,fe),k.position.set(R,.005,D),k.material.side=Dt,k.name="Paper resting on the floor";let tt=k.geometry.attributes.position;for(let Lt=0;Lt<tt.count;Lt++)tt.setZ(Lt,Math.abs(Math.sin(tt.getX(Lt)*33+G)*Math.sin(tt.getY(Lt)*24+Y))*.0015+Ge*.008);Nl.push(k)}for(let _=0;_<95;_++){let R=c(-3.65,3.65),D=c(-3.7,4);Math.abs(R)<.8&&D>-.8&&D<1.3&&(R-=1.7);let k=H([c(.025,.17),c(.015,.065),c(.035,.2)],[R,c(.025,.055),D],fg[_%4]);k.rotation.set(c(-.13,.13),a()*Math.PI*2,c(-.13,.13)),k.name="Fallen casing fragment",r(k)}for(let _=0;_<9;_++){let R=new be;R.position.set(c(-3,3),.028,c(-2,3)),R.rotation.y=a()*6,t.add(R),R.name="Loose circuit board",r(R),H([.18,.012,.24],[0,0,0],dg,R);for(let D=0;D<4;D++)H([.035,.017,.05],[-.055+D%2*.1,.013,-.07+Math.floor(D/2)*.12],v,R)}for(let _=0;_<12;_++){let R=H([.09,.018,.09],[c(-3.5,3.5),.03,c(-3.4,3.7)],v);R.rotation.y=a()*6,H([.06,.003,.03],[0,.011,0],T,R),R.name="Broken key cap",r(R)}for(let _=0;_<14;_++){let R=H([c(.3,.7),.012,c(.3,.8)],[c(-3.4,3.4),.007,c(-3.5,3.7)],M(_%2?8948860:10197637,.98,E));R.rotation.y=c(-.15,.15),Fl.push(R)}let zn=A0(Fl);function nf(_,R,D){_.save(),_.lineCap="round";for(let[G,Y,fe,Ge]of D){for(let tt=0;tt<13;tt++){let Lt=Y+tt*Ge/12;_.strokeStyle=R,_.globalAlpha=c(.65,.94),_.lineWidth=c(12,27),_.beginPath(),_.moveTo(G+c(-18,35),Lt),_.quadraticCurveTo(G+fe*.45,Lt+c(-12,12),G+fe+c(-35,18),Lt+c(-8,8)),_.stroke()}_.globalAlpha=1;for(let tt=0;tt<8;tt++)p(_,G+a()*fe,Y+a()*Ge,c(13,43),"54,66,61",c(.035,.09))}_.globalAlpha=1;for(let G=0;G<95;G++){let Y=a()*1024,fe=a()<.55?c(800,1045):a()*1024;p(_,Y,fe,c(14,95),G%3?"44,49,38":"103,77,42",c(.045,.16))}let k=_.createLinearGradient(0,0,0,1024);k.addColorStop(0,"rgba(43,44,32,.30)"),k.addColorStop(.13,"rgba(43,44,32,0)"),k.addColorStop(.77,"rgba(43,44,32,0)"),k.addColorStop(1,"rgba(44,40,27,.38)"),_.fillStyle=k,_.fillRect(0,0,1024,1024);for(let G=0;G<23;G++){let Y=a()*1024,fe=c(8,105);_.strokeStyle=`rgba(86,67,38,${c(.06,.17)})`,_.lineWidth=c(1.5,6),_.beginPath(),_.moveTo(Y,fe),_.bezierCurveTo(Y+4,fe+60,Y-3,fe+125,Y+c(-5,5),fe+c(130,460)),_.stroke()}f(_,1024,12e3,"36,42,30",.21),_.restore()}function Ol(_){let[R,D]=l(1024);D.fillStyle="#bfc4b6",D.fillRect(0,0,1024,1024),D.strokeStyle="#304a4d",D.fillStyle="#304a4d",D.lineWidth=4,D.font="28px sans-serif",D.fillText(_?"ONBOARDING / FIRST RUN":"WORKSPACE / DASHBOARD",45,67);function k(G,Y){D.beginPath(),D.moveTo(G,Y),D.lineTo(G+50,Y),D.lineTo(G+37,Y-11),D.moveTo(G+50,Y),D.lineTo(G+37,Y+11),D.stroke()}if(_)for(let G=0;G<3;G++){let Y=48+G*330;D.strokeRect(Y,154,253,593),D.strokeRect(Y+14,174,225,544),D.fillRect(Y+80,187,91,5),D.strokeRect(Y+32,225,189,130),D.beginPath(),D.moveTo(Y+32,225),D.lineTo(Y+221,355),D.moveTo(Y+221,225),D.lineTo(Y+32,355),D.stroke();for(let fe=0;fe<4;fe++)D.fillRect(Y+31,397+fe*25,170-fe%2*41,4);D.strokeRect(Y+32,524,188,54),D.strokeRect(Y+32,602,188,54),G<2&&k(Y+266,451),D.font="23px sans-serif",D.fillText(["01 / welcome","02 / connect","03 / explore"][G],Y+23,803)}else for(let G=0;G<2;G++){let Y=45+G*498;D.strokeRect(Y,165,436,525),D.strokeRect(Y,165,436,44),D.strokeRect(Y+14,223,87,448);for(let fe=0;fe<5;fe++)D.fillRect(Y+25,246+fe*40,59-fe%2*17,4);D.strokeRect(Y+118,230,297,133),D.beginPath(),D.moveTo(Y+135,343),D.lineTo(Y+171,300),D.lineTo(Y+212,325),D.lineTo(Y+270,265),D.lineTo(Y+328,293),D.lineTo(Y+397,248),D.stroke();for(let fe=0;fe<2;fe++)for(let Ge=0;Ge<2;Ge++){D.strokeRect(Y+118+Ge*154,385+fe*145,139,124),D.fillRect(Y+131+Ge*154,404+fe*145,92,5);for(let tt=0;tt<3;tt++)D.fillRect(Y+131+Ge*154,431+fe*145+tt*18,103-tt*13,3)}}return D.strokeStyle="#7d453b",D.lineWidth=3,D.beginPath(),D.ellipse(510,905,357,48,-.02,0,Math.PI*2),D.stroke(),D.font="25px sans-serif",D.fillStyle="#7d453b",D.fillText(_?"simplify the first step / test again":"less noise \u2014 keep the primary action visible",180,915),nf(D,"#bfc4b6",_?[[345,225,290,290],[65,570,220,170],[660,765,280,130]]:[[570,215,350,235],[145,500,280,200],[220,855,430,95]]),h(R)}for(let _=0;_<2;_++){let R=new be;R.name="Whiteboard with interface wireframes",R.position.set(_?2.25:.12,2.2,-3.94),R.rotation.z=_?-.025:.012,t.add(R),H([1.78,1.12,.04],[0,0,0],z,R);let D=Ol(!_),k=B(new Et(1.7,1.04),new Be({map:D,roughness:.75,emissive:16777215,emissiveMap:D,emissiveIntensity:.025}),R);k.position.z=.024,H([1.7,.023,.09],[0,-.57,.025],z,R);for(let G=0;G<3;G++)ge([-.58+G*.18,-.546,.057],[-.46+G*.18,-.546,.057],.013,G?v:M(3755626,.7),R)}let qn=new be;qn.name="Planning whiteboard covered in sticky notes",qn.position.set(1.9,0,-3),qn.rotation.y=0,t.add(qn);for(let _ of[-1.12,1.12]){H([.045,.98,.055],[_,.49,0],P,qn),H([.11,.06,.65],[_,.06,0],P,qn);for(let R of[-.25,.25])me([.047,.045,.032],[_,.035,R],v,qn)}H([2.68,1.94,.05],[0,1.85,0],z,qn);let sf=new Set([1,4,7,9,13,17,20,22,24]),[pg,kt]=l(1024);kt.fillStyle="#c2c7ba",kt.fillRect(0,0,1024,1024);for(let _=0;_<65;_++)p(kt,a()*1024,a()*1024,c(15,110),"60,69,55",.065);kt.strokeStyle="rgba(38,62,63,.65)",kt.fillStyle="rgba(38,62,63,.65)",kt.lineWidth=3;for(let _=0;_<3;_++){let R=170+_*245;kt.strokeRect(R,560,190,335),kt.strokeRect(R+12,579,166,28),kt.strokeRect(R+12,625,166,102),kt.beginPath(),kt.moveTo(R+12,625),kt.lineTo(R+178,727),kt.moveTo(R+178,625),kt.lineTo(R+12,727),kt.stroke();for(let D=0;D<4;D++)kt.fillRect(R+15,753+D*19,137-D%2*39,3);kt.strokeRect(R+15,843,160,28),_<2&&(kt.beginPath(),kt.moveTo(R+198,727),kt.lineTo(R+235,727),kt.lineTo(R+222,717),kt.moveTo(R+235,727),kt.lineTo(R+222,737),kt.stroke())}nf(kt,"#c2c7ba",[[130,620,285,170],[407,735,280,165],[685,530,190,150]]);for(let _ of sf){let R=(-1.1+_%9*.273)/2.6*1024+512,D=(.5-(2.63-Math.floor(_/9)*.28-1.85)/1.86)*1024;kt.fillStyle="rgba(203,203,175,.20)",kt.fillRect(R-40,D-59,80,118),kt.fillStyle="rgba(111,96,51,.17)",kt.fillRect(R-34,D-56,68,8);for(let k=0;k<9;k++)kt.fillStyle="rgba(77,67,39,.15)",kt.fillRect(R+c(-33,33),D-53+c(-2,6),c(1,3),c(2,5))}let rf=h(pg);B(new Et(2.6,1.86),new Be({map:rf,roughness:.75,emissive:16777215,emissiveMap:rf,emissiveIntensity:.025}),qn).position.set(0,1.85,.027),H([2.58,.025,.13],[0,.87,.045],z,qn);for(let _=0;_<3;_++)ge([-.63+_*.23,.899,.09],[-.48+_*.23,.899,.09],.017,_===0?M(3428197,.75):v,qn);H([.18,.045,.07],[.62,.906,.075],v,qn);let mg=["#c3b25e","#b38488","#7faaa9","#a4b081"];function Aa(_,R,D,k,G){let[Y,fe]=l(128);fe.fillStyle=mg[G%4],fe.fillRect(0,0,128,128),fe.fillStyle="rgba(42,49,37,.16)",fe.fillRect(0,0,128,14),fe.strokeStyle="rgba(39,52,47,.68)",fe.lineWidth=2.6;for(let Wt=0;Wt<3+G%3;Wt++){fe.beginPath();let ai=30+Wt*16;fe.moveTo(16,ai);for(let Ui=1;Ui<8;Ui++)fe.lineTo(16+Ui*c(8,12),ai+c(-2.4,2.4));fe.stroke()}G%4===0&&(fe.strokeRect(19,75,35,27),fe.strokeRect(72,75,35,27));let Ge=new Et(.205,.215,3,5),tt=Ge.attributes.position;for(let Wt=0;Wt<tt.count;Wt++){let ai=tt.getY(Wt);tt.setZ(Wt,Math.max(0,-ai-.015)**2*3.3)}Ge.computeVertexNormals();let Lt=h(Y),sn=B(Ge,new Be({map:Lt,roughness:.96,side:Dt,emissive:16777215,emissiveMap:Lt,emissiveIntensity:.025}),_);return sn.position.set(R,D,k),sn.rotation.z=c(-.13,.13),sn}for(let _=0;_<3;_++)for(let R=0;R<9;R++)sf.has(_*9+R)||Aa(qn,-1.1+R*.273+c(-.018,.018),2.63-_*.28+c(-.014,.014),.04,_*9+R);for(let _=0;_<5;_++)_===1||_===4||Aa(qn,_<3?-1.1:1.09,1.75-_%3*.29,.04,28+_);for(let _=0;_<4;_++){let R=Aa(t,-1.7-_*.3,.005,-.38+_*.26,33+_);R.rotation.set(-Math.PI/2,0,.6+_*.73);let D=R.geometry.attributes.position;for(let k=0;k<D.count;k++)D.setZ(k,D.getZ(k)*.1);Nl.push(R)}let Ca=P0();t.add(Ca.group);let Bl=cl({flies:14,moths:7,spread:[.88,.23,.5],sizeScale:.55,dive:.65});Bl.group.position.y=-.4,Ca.group.add(Bl.group);for(let _ of[-.66,.66])ge([_,3.3,-.55],[_,2.98,-.55],.006,v);N([[.85,3.3,-.6],[1.03,2.8,-.65],[1.26,2.86,-.7],[1.3,3.3,-.7]],.007,v);let Ys=new be;Ys.position.set(-2.1,.88,-3.2),Te.parent.add(Ys),Q(.11,.035,[0,0,0],v,Ys),ge([0,0,0],[.05,.31,0],.016,P,Ys),ge([.05,.31,0],[.22,.4,.02],.013,P,Ys),B(new Os(.12,.13,20,1,!0),P,Ys).position.set(.23,.37,.02),me([.04,.025,.04],[.23,.32,.02],new gt({color:15122820}),Ys);let of=new Nn(15121790,1.2,2.5,2);of.position.set(-1.87,1.19,-3.18),t.add(of);let zl=cl({flies:5,moths:3,spread:[.28,.1,.22],seed:113,sizeScale:.55,dive:.1});zl.group.position.set(-1.87,1.14,-3.02),t.add(zl.group);let af=new Vt({color:14102035,roughness:.31,clearcoat:1,clearcoatRoughness:.18}),cf=new Vt({color:15790556,roughness:.13,transparent:!0,opacity:.16,depthWrite:!1,clearcoat:1,clearcoatRoughness:.08}),kl=M(14081488,.49),Pa=M(9016713,.69),gg=new io;function Vl(_){let R=gg.load(new URL(`./labels/${_}.svg`,import.meta.url).href);return R.colorSpace=ft,R.anisotropy=Math.min(8,i.capabilities.getMaxAnisotropy()),new Be({map:R,transparent:!0,alphaTest:.15,roughness:.72,side:Dt})}let xg=Vl("ketchup-glass"),yg=Vl("ketchup-squeeze"),vg=Vl("ketchup-neck");for(let _=0;_<8140;_++)a();function _g(_,R){for(let D=1;D<_.length;D++)if(_[D][1]>=R){let[k,G]=_[D-1],[Y,fe]=_[D];return Ze.lerp(k,Y,(R-G)/(fe-G||1))}return _.at(-1)[0]}function Gl(_,R,D,k,G,Y=1,fe=1.02){let Ge=new Et(1,1,24,16),tt=Ge.attributes.position,Lt=Ge.attributes.uv;for(let Wt=0;Wt<tt.count;Wt++){let ai=(Lt.getX(Wt)*2-1)*fe,Ui=Ze.lerp(D,k,Lt.getY(Wt)),Lo=_g(R,Ui)+.0018;tt.setXYZ(Wt,Math.sin(ai)*Lo,Ui,Math.cos(ai)*Lo*Y+8e-4)}Ge.computeVertexNormals();let sn=B(Ge,G,_);return sn.castShadow=!1,sn}function Wl(_,R,D,k=1){let G=B(new Fs(_.map(Y=>new Ne(...Y)),48),R,D);return G.scale.z=k,G}function lf(_,R,D,k,G,Y){let fe=new be;return fe.name=_.name,fe.add(_),_.position.y=-G,t.add(fe),fe.position.set(R,0,D),fe.rotation.set(...k),fe.scale.setScalar(Y),fe.updateMatrixWorld(!0),pr(fe,zn)}let rs=new be;rs.name="Discarded glass ketchup bottle";let Ia=[[0,0],[.063,0],[.076,.014],[.08,.047],[.079,.19],[.069,.267],[.049,.342],[.03,.41],[.029,.447],[.033,.454],[.032,.471],[0,.471]],hf=Ia.filter(_=>_[1]<.44).map(([_,R])=>[Math.max(0,_-.0035),R+.004]);hf.push([.026,.469],[0,.469]);let Mg=Wl(hf,af,rs),Eg=Wl(Ia,cf,rs);Eg.castShadow=!1,Gl(rs,Ia,.047,.24,xg),Gl(rs,Ia,.365,.432,vg,1,.95);let Ro=new be;Ro.position.y=.48,rs.add(Ro),Q(.037,.036,[0,0,0],kl,Ro,32),Q(.0365,.006,[0,.461,0],Pa,rs,32);for(let _=0;_<30;_++){let R=_/30*Math.PI*2;ge([Math.cos(R)*.037,-.013,Math.sin(R)*.037],[Math.cos(R)*.037,.014,Math.sin(R)*.037],.0011,Pa,Ro)}let uf=B(new Qt(.07,.003,6,32),cf,rs);uf.rotation.x=Math.PI/2,uf.position.y=.016;let Sg=lf(rs,.98,2.82,[-.25,.45,Math.PI/2],.25,.82),Ms=new be;Ms.name="Discarded squeeze ketchup bottle";let df=[[0,.058],[.055,.058],[.065,.075],[.098,.105],[.115,.15],[.109,.25],[.118,.36],[.112,.415],[.092,.438],[0,.438]];Wl(df,af,Ms,.62),Gl(Ms,df,.122,.403,yg,.62,1.04);let wg=Q(.069,.06,[0,.034,0],kl,Ms,40);wg.scale.z=.73;let bg=Q(.0694,.003,[0,.014,0],Pa,Ms,40);bg.scale.z=.73,ne([.042,.012,.01],[0,.014,.051],kl,Ms),H([.031,.018,.008],[0,.04,-.05],Pa,Ms),lf(Ms,1.95,2.45,[-Math.PI/2,0,-.45],.225,.8);let[ff,Rt]=l(1024);ff.height=512,Rt.fillStyle="#86b0b2",Rt.fillRect(0,0,1024,512);for(let _=0;_<180;_++)p(Rt,a()*1024,a()*512,c(5,55),_%2?"225,229,207":"83,125,129",c(.035,.14));Rt.lineCap="round";for(let _=0;_<260;_++){let R=a()*1024,D=a()*512;Rt.strokeStyle=`rgba(44,57,53,${c(.3,.65)})`,Rt.lineWidth=c(2,4),Rt.beginPath(),Rt.moveTo(R,D),Rt.quadraticCurveTo(R-3,D+7,R+c(-2,3),D+c(7,15)),Rt.stroke()}Rt.fillStyle="#eee2c3",Rt.beginPath(),Rt.moveTo(512,176),Rt.bezierCurveTo(459,117,386,112,350,169),Rt.bezierCurveTo(313,243,337,421,410,466),Rt.bezierCurveTo(460,493,565,493,615,466),Rt.bezierCurveTo(687,421,711,243,675,169),Rt.bezierCurveTo(639,112,565,117,512,176),Rt.fill();for(let _ of[433,591])p(Rt,_,271,29,"197,123,110",.2),Rt.fillStyle="#3d3630",Rt.beginPath(),Rt.ellipse(_,215,7,4,-.2,0,Math.PI*2),Rt.fill();Rt.strokeStyle="#52443a",Rt.lineWidth=3,Rt.beginPath(),Rt.moveTo(512,274),Rt.lineTo(512,316),Rt.bezierCurveTo(501,335,482,337,472,326),Rt.moveTo(512,316),Rt.bezierCurveTo(523,335,542,337,552,326),Rt.stroke();for(let _ of[-1,1])for(let R=0;R<3;R++)Rt.fillStyle="#6e5b46",Rt.beginPath(),Rt.arc(512+_*(25+R*9),300+R%2*12,1.8,0,Math.PI*2),Rt.fill();f(Rt,512,2300,"112,124,109",.07);let Tg=new Vt({map:h(ff),roughness:.29,clearcoat:1,clearcoatRoughness:.16}),pf=new Vt({color:9091001,roughness:.25,clearcoat:1,clearcoatRoughness:.14}),[mf,oi]=l(1024);mf.height=512,oi.fillStyle="#e8dcba",oi.fillRect(0,0,1024,512);for(let _=0;_<18;_++){let R=_*1024/18;oi.fillStyle=_%2?"#93b8ae":"#7ca6a5",oi.beginPath(),oi.moveTo(R-12,0),oi.bezierCurveTo(R-20,170,R+4,310,R-12,512),oi.lineTo(R+12,512),oi.bezierCurveTo(R+26,310,R+8,170,R+17,0),oi.closePath(),oi.fill()}let La=oi.createLinearGradient(0,220,0,512);La.addColorStop(0,"rgba(103,62,27,0)"),La.addColorStop(.7,"rgba(103,62,27,.09)"),La.addColorStop(1,"rgba(74,39,14,.48)"),oi.fillStyle=La,oi.fillRect(0,0,1024,512);let gf=new Vt({map:h(mf),roughness:.34,clearcoat:.8,side:Dt}),Pi=new be;Pi.name="Blue pointy-eared mug tipped on its side";function xf(_,R){let D=new Fs(_.map(Y=>new Ne(...Y)),64),k=D.attributes.uv,G=D.attributes.position;for(let Y=0;Y<G.count;Y++)k.setY(Y,G.getY(Y)/.258);return D.rotateY(Math.PI),B(D,R,Pi)}xf([[0,.008],[.085,.008],[.113,.018],[.126,.043],[.139,.138],[.144,.236],[.14,.257]],Tg),xf([[.127,.257],[.128,.237],[.121,.09],[.106,.034],[0,.034]],gf);let yf=B(new Qt(.134,.008,10,64),pf,Pi);yf.rotation.x=Math.PI/2,yf.position.y=.254;let vf=B(new Qt(.102,.004,8,48),gf,Pi);vf.rotation.x=Math.PI/2,vf.position.y=.012;for(let _ of[-1,1]){let R=new be;R.position.set(_*.095,.235,.103),R.rotation.set(-.06,_*Math.atan2(.095,.103),-_*.1),Pi.add(R);let D=new At;D.name=_<0?"Mug left ear tip":"Mug right ear tip",D.position.y=.142,R.add(D);let k=new St;k.moveTo(-.047,0),k.bezierCurveTo(-.044,.046,-.015,.112,0,.142),k.bezierCurveTo(.018,.125,.046,.045,.047,0),k.closePath();let G=new on(k,{depth:.013,bevelEnabled:!0,bevelSegments:3,steps:1,bevelSize:.005,bevelThickness:.005,curveSegments:12});G.translate(0,0,-.0065),B(G,pf,R),N([[-.028,.018,.014],[-.025,.057,.014],[0,.113,.014],[.027,.036,.014]],.0019,M(5005659,.62),R)}let[Rg,Da]=l(256);Da.fillStyle="#e8dfc6",Da.fillRect(0,0,256,256),Da.fillStyle="#84adb0";for(let _ of[0,95,200])Da.fillRect(_,0,47,256);let Ag=new Vt({map:h(Rg),roughness:.28,clearcoat:1});N([[-.129,.211,0],[-.195,.222,0],[-.249,.188,0],[-.257,.13,0],[-.229,.075,0],[-.178,.057,0],[-.125,.076,0]],.014,Ag,Pi);let Xl=new At;Xl.name="Mug handle grip",Xl.position.set(-.249,.141,0),Pi.add(Xl);let Ao=new St;Ao.moveTo(-.021,.01),Ao.quadraticCurveTo(0,.021,.021,.01),Ao.quadraticCurveTo(.021,-.003,0,-.019),Ao.quadraticCurveTo(-.022,-.004,-.021,.01),B(new on(Ao,{depth:.012,bevelEnabled:!0,bevelSize:.003,bevelThickness:.003,bevelSegments:2,curveSegments:8}),new Vt({color:2697251,roughness:.3,clearcoat:1}),Pi).position.set(0,.129,.142);let Yi=new be;Yi.name="Spilled animal mug in the left foreground",Yi.add(Pi),Pi.position.y=-.135,t.add(Yi);let Mr=new S(-.55,-.05,.83).normalize(),Er=new S(.54,.66,.39);Er.addScaledVector(Mr,-Er.dot(Mr)).normalize();let ql=new S().crossVectors(Mr,Er).normalize();Yi.quaternion.setFromRotationMatrix(new wt().makeBasis(ql,Mr,Er)),Yi.scale.setScalar(.72),Yi.position.set(.24,0,3.02),Yi.updateMatrixWorld(!0),pr(Yi,zn),Yi.updateMatrixWorld(!0);let _f=Math.hypot(ql.y,Er.y),Ua=Pi.localToWorld(new S(-.134*ql.y/_f,.254,-.134*Er.y/_f)),Co=new S(Mr.x,0,Mr.z).normalize(),Sr=Ua.clone().addScaledVector(Co,.23);Sr.y=zn(Sr.x,Sr.z)+.001;let Mf=new Vt({color:5324843,roughness:.13,metalness:.04,clearcoat:1,clearcoatRoughness:.08,transparent:!0,opacity:.94,side:Dt}),Cg=new Be({color:9072713,roughness:.4,transparent:!0,opacity:.68,depthWrite:!1,side:Dt});function Ef(_,R,D,k,G=0){let Y=new St;for(let Lt=0;Lt<=80;Lt++){let sn=Lt/80*Math.PI*2,Wt=1+.11*Math.sin(sn*3+G)+.065*Math.sin(sn*7-.3)+.025*Math.cos(sn*13),ai=Math.cos(sn)*D*Wt,Ui=Math.sin(sn)*k*Wt;Lt?Y.lineTo(ai,Ui):Y.moveTo(ai,Ui)}Y.closePath();let fe=new Bi(Y,32),Ge=B(fe,Cg);Ge.rotation.x=-Math.PI/2,Ge.scale.setScalar(1.045),Ge.position.set(_,zn(_,R)+5e-4,R),Ge.castShadow=!1;let tt=B(fe,Mf);return tt.rotation.x=-Math.PI/2,tt.position.set(_,zn(_,R)+.001,R),tt.castShadow=!1,tt}Ef(Sr.x,Sr.z,.23,.145,.4);let Po=Ua.clone();Po.y=zn(Po.x,Po.z)+.008,N([Ua.toArray(),Po.toArray(),Po.clone().addScaledVector(Co,.09).toArray(),Sr.toArray()],.008,Mf);for(let[_,R,D]of[[.45,.1,.018],[.51,-.07,.012],[.37,-.18,.022],[.29,.21,.009]]){let k=Ua.clone().addScaledVector(Co,_).add(new S(-Co.z*R,0,Co.x*R));Ef(k.x,k.z,D,D*.65,_*3)}t.updateMatrixWorld(!0);for(let _ of Nl){let R=_.geometry.attributes.position;for(let D=0;D<R.count;D++){let k=_.localToWorld(new S(R.getX(D),R.getY(D),0)),G=.003;for(let Y of Fl){let fe=Y.worldToLocal(k.clone()),Ge=Y.geometry.parameters;Math.abs(fe.x)<Ge.width/2&&Math.abs(fe.z)<Ge.depth/2&&(G=Math.max(G,.013))}R.setZ(D,R.getZ(D)+G+.002-_.position.y)}R.needsUpdate=!0,_.geometry.computeVertexNormals(),_.geometry.computeBoundingSphere()}for(let[_,R,D,k,G]of[[-2.53,2.13,1.52,1.08,!0],[-.62,2.13,1.78,1.1,!1]]){let Y=new be;Y.name="Left-wall design whiteboard",Y.position.set(-3.86,R,_),Y.rotation.y=Math.PI/2,t.add(Y),H([D,k,.045],[0,0,0],z,Y);let fe=Ol(G),Ge=B(new Et(D-.07,k-.07),new Be({map:fe,roughness:.85,emissive:16777215,emissiveMap:fe,emissiveIntensity:.025}),Y);Ge.position.z=.026,H([D-.07,.025,.1],[0,-k/2,.035],z,Y),ge([-.4,-k/2+.025,.06],[-.23,-k/2+.025,.06],.011,v,Y),H([.13,.035,.065],[D*.29,-k/2+.029,.045],O,Y),Aa(Y,D*.35,k*.21,.034,G?6:9)}let gi=new be;gi.name="Worn bookshelf of design books",gi.position.set(-3.65,0,1.65),gi.rotation.y=Math.PI/2,t.add(gi);let Ha=M(11643027,.92,m),Pg=M(10920589,.98);H([1.56,2.38,.035],[0,1.19,-.185],Ha,gi);for(let _ of[-.765,.765])H([.045,2.42,.42],[_,1.21,.015],Ha,gi);for(let _ of[.12,.66,1.2,1.74,2.28])H([1.5,.035,.42],[0,_,.015],Ha,gi);H([1.51,.1,.045],[0,.05,.19],Ha,gi);let Na=[["The Design of Everyday Things","#b5ad86"],["Don't Make Me Think","#bd8b36"],["Thinking with Type","#9f392f"],["Grid Systems","#adaf9a"],["Designing Interfaces","#54796f"],["About Face","#393e3e"],["The Elements of User Experience","#758b9d"],["Sprint","#b3a847"],["Universal Principles of Design","#b8b5a4"],["Designing for Interaction","#80665b"],["Sketching User Experiences","#456976"],["The Shape of Design","#bcb296"]],Ig=Na.map(([_,R],D)=>{let[k,G]=l(128);k.height=1024,G.fillStyle=R,G.fillRect(0,0,128,1024);let Y=G.createLinearGradient(0,0,128,0);return Y.addColorStop(0,"rgba(0,0,0,.35)"),Y.addColorStop(.25,"rgba(0,0,0,0)"),Y.addColorStop(.86,"rgba(230,219,175,.12)"),Y.addColorStop(1,"rgba(0,0,0,.2)"),G.fillStyle=Y,G.fillRect(0,0,128,1024),G.save(),G.translate(76,70),G.rotate(Math.PI/2),G.fillStyle=[2,4,5,6,9,10].includes(D)?"#ded9c5":"#262b26",G.font="600 47px Georgia,serif",G.fillText(_,0,0,820),G.restore(),G.fillStyle="rgba(217,210,181,.55)",G.fillRect(14,947,100,3),G.fillRect(14,963,100,3),f(G,128,400,"22,24,17",.22),new Be({map:h(k),roughness:.96})});for(let _=0;_<4;_++){let R=-.69;for(let D=0;D<16;D++){let k=(D+_*5)%Na.length,G=c(.045,.085),Y=c(.3,.44),fe=c(.22,.3);if(R+G>.68)break;if(D===7||_===2&&D===11){R+=.1;continue}let Ge=new be;Ge.name=Na[k][0],gi.add(Ge);let tt=D%6===5?-.12:c(-.025,.025);Ge.rotation.z=tt,Ge.position.set(R+G/2,.12+_*.54+.018+Math.abs(Math.sin(tt))*G/2,.18-fe/2),H([G-.008,Y-.009,fe-.007],[0,Y/2,0],Pg,Ge);let Lt=M(Na[k][1],.93);for(let Wt of[-1,1])H([.004,Y,fe],[Wt*(G/2-.002),Y/2,0],Lt,Ge);H([G,Y,.007],[0,Y/2,fe/2],Lt,Ge);let sn=B(new Et(G-.002,Y-.004),Ig[k],Ge);sn.position.set(0,Y/2,fe/2+.004),sn.castShadow=!1,R+=G+.008}}for(let _ of[.14,.68,1.22,1.76,2.3])H([1.44,.002,.035],[0,_,.196],M(7171673,.99),gi);let Lg=H([.32,.055,.24],[.41,2.327,.03],M(6964536,.95),gi);Lg.rotation.y=.17;let[Dg,Nt]=l(2048);Nt.fillStyle="#66695d",Nt.fillRect(0,0,2048,2048);for(let _=0;_<1250;_++)p(Nt,a()*2048,a()*2048,c(4,125),_%4?"34,31,21":"135,131,110",c(.035,.22));for(let _=0;_<160;_++){let R=_%4,D=R<2?(R?2048:0)+c(-45,90):a()*2048,k=R<2?a()*2048:(R===2?0:2048)+c(-45,90);p(Nt,D,k,c(60,190),"20,26,19",c(.15,.4))}for(let _=0;_<75;_++){let R=c(80,1968),D=c(80,1968),k=c(14,70);p(Nt,R,D,k*1.7,"57,35,15",c(.13,.35)),Nt.strokeStyle=`rgba(48,35,18,${c(.12,.36)})`,Nt.lineWidth=c(1,4),Nt.beginPath(),Nt.ellipse(R,D,k,k*c(.6,1.2),a()*Math.PI,0,Math.PI*c(1.1,2)),Nt.stroke()}Nt.lineCap="round";for(let _=0;_<340;_++){let R=c(100,1950),D=c(100,1950);Nt.save(),Nt.translate(R,D),Nt.rotate(a()*Math.PI*2),Nt.strokeStyle=`rgba(16,23,19,${c(.1,.3)})`,Nt.lineWidth=c(1,4),Nt.beginPath(),Nt.moveTo(0,0),Nt.quadraticCurveTo(c(15,50),c(-12,12),c(55,160),c(-20,20)),Nt.stroke(),Nt.restore()}for(let _=0;_<17;_++){let R=a()*2048,D=a()*2048;Nt.beginPath(),Nt.moveTo(R,D);for(let k=0;k<9;k++)R+=c(-20,25),D+=c(6,27),Nt.lineTo(R,D);Nt.strokeStyle="rgba(18,23,18,.42)",Nt.lineWidth=2.2,Nt.stroke()}for(let _=0;_<1900;_++){let R=a()*2048,D=a()*2048;Nt.strokeStyle=`rgba(167,163,137,${c(.03,.22)})`,Nt.lineWidth=c(.4,1.3),Nt.beginPath(),Nt.moveTo(R,D),Nt.lineTo(R+c(3,28),D+c(-5,5)),Nt.stroke()}f(Nt,2048,9e4,"16,22,15",.26),f(Nt,2048,3e4,"166,161,135",.2);let Sf=h(Dg);W.map=Sf,W.bumpMap=Sf,W.bumpScale=.006,W.needsUpdate=!0;let tn=new be;tn.name="Weathered entrance wall behind the viewer",tn.position.z=4.48,tn.rotation.y=Math.PI,t.add(tn),H([7.8,3.35,.16],[0,1.675,-.08],M(10068367,.99,g),tn),ie(7.8,3.35,tn).position.set(0,1.675,.004),H([7.8,.14,.045],[0,.07,.024],v,tn),H([7.8,.026,.023],[0,2.87,.03],P,tn);let[Ug,Pn]=l(1024);for(let _=0;_<62;_++){let R=a()*1024,D=c(0,180);Pn.strokeStyle=`rgba(43,36,22,${c(.1,.32)})`,Pn.lineWidth=c(.5,5),Pn.beginPath(),Pn.moveTo(R,D),Pn.bezierCurveTo(R+6,D+80,R-4,D+170,R+c(-6,9),D+c(210,650)),Pn.stroke()}for(let _=0;_<21;_++){let R=a()*1024,D=a()*1024;Pn.beginPath();for(let k=0;k<12;k++){let G=k/12*Math.PI*2,Y=c(9,27),fe=R+Math.cos(G)*Y,Ge=D+Math.sin(G)*Y*1.7;k?Pn.lineTo(fe,Ge):Pn.moveTo(fe,Ge)}Pn.closePath(),Pn.fillStyle=_%3?"rgba(61,65,52,.75)":"rgba(149,144,118,.6)",Pn.fill()}for(let _=0;_<10;_++){let R=a()*1024,D=c(60,850);Pn.strokeStyle="rgba(28,34,26,.75)",Pn.lineWidth=.8,Pn.beginPath(),Pn.moveTo(R,D);for(let k=0;k<8;k++)R+=c(-9,12),D+=c(5,16),Pn.lineTo(R,D);Pn.stroke()}let wf=B(new Et(7.8,3.35),new Be({map:h(Ug),transparent:!0,depthWrite:!1,roughness:1}),tn);wf.position.set(0,1.675,.007),wf.castShadow=!1;let En=new be;En.name="Scuffed service door and failing exit sign",En.position.set(1.2,0,.05),tn.add(En);let Fa=M(6910824,.88,u,.22);H([1.12,2.34,.042],[0,1.17,0],v,En),H([1.035,2.27,.048],[0,1.153,.022],Fa,En);for(let _ of[-.565,.565])H([.065,2.4,.1],[_,1.2,.035],P,En);H([1.19,.065,.1],[0,2.4,.035],P,En),H([1.1,.025,.13],[0,.016,.045],z,En),H([.85,.28,.009],[0,.25,.052],M(7239276,.7,u,.55),En);for(let _ of[-1,1])for(let R of[.14,.35])me([.008,.008,.003],[_*.39,R,.059],z,En);H([.68,.73,.032],[0,1.69,.055],P,En);let[Hg,Ii]=l(512);Ii.fillStyle="#293c39",Ii.fillRect(0,0,512,512);for(let _=0;_<170;_++)p(Ii,a()*512,a()*512,c(4,45),"7,14,11",c(.08,.3));Ii.strokeStyle="rgba(100,118,105,.32)",Ii.lineWidth=1.4;for(let _=-512;_<1024;_+=36)Ii.beginPath(),Ii.moveTo(_,0),Ii.lineTo(_+512,512),Ii.moveTo(_,0),Ii.lineTo(_-512,512),Ii.stroke();B(new Et(.6,.65),new Vt({map:h(Hg),roughness:.32,clearcoat:.8,metalness:.12}),En).position.set(0,1.69,.074),ge([.36,.9,.095],[.36,1.05,.095],.017,z,En),ge([.36,1.03,.095],[.2,1.03,.12],.015,z,En);for(let _ of[.35,1.2,2.07])H([.07,.1,.034],[-.515,_,.064],P,En),Q(.012,.12,[-.53,_,.08],z,En);function wr(_,R,D,k,G,Y="#74796b",fe="#d0cdb8"){let[Ge,tt]=l(512);Ge.height=128,tt.fillStyle=Y,tt.fillRect(0,0,512,128),tt.fillStyle=fe,tt.font="600 50px Arial,sans-serif",tt.textAlign="center",tt.fillText(_,256,82,470),f(tt,512,1500,"14,20,15",.2);let Lt=B(new Et(R,D),new Be({map:h(Ge),roughness:.9}),k);return Lt.position.set(...G),Lt.castShadow=!1,Lt}wr("STAFF ONLY",.4,.1,En,[0,1.12,.055]),H([.54,.21,.1],[0,2.66,.08],P,En);let Oa=wr("EXIT  \u2192",.48,.15,En,[0,2.66,.133],"#263b30","#a8b593");Oa.material.emissive.set(5994071),Oa.material.emissiveMap=Oa.material.map,Oa.material.emissiveIntensity=.25;let Li=new be;Li.name="Abandoned critique pinboard",Li.position.set(-.95,1.94,.055),Li.rotation.z=-.018,tn.add(Li);let Ng=M(8417362,.99,m);H([1.86,1.25,.045],[0,0,0],Ng,Li);for(let _ of[-.94,.94])H([.035,1.3,.055],[_,0,.01],P,Li);for(let _ of[-.64,.64])H([1.91,.035,.055],[0,_,.01],P,Li);for(let _=0;_<7;_++){let R=-.68+_%4*.44,D=_<4?.28:-.26,k=Ol(_%2===0),G=B(new Et(.35,.43),new Be({map:k,color:_%2?12170400:13026996,roughness:1,side:Dt}),Li);G.position.set(R,D,.028+_%3*.001),G.rotation.z=c(-.1,.1),G.castShadow=!1,me([.008,.008,.005],[R,D+.195,.039],_%2?v:M(7814963,.8),Li);let Y=H([.11,.033,.001],[R-.06,D+.2,.031],M(10001011,.98),Li);Y.rotation.z=c(-.2,.2)}wr("DESIGN / CRITIQUE",1.1,.1,Li,[-.11,.56,.028],"#77765a","#252d27"),H([.94,.065,.13],[-.95,2.78,.11],P,tn);let bf=Q(.013,.82,[-.95,2.741,.14],new gt({color:7572357}),tn,12);bf.rotation.z=Math.PI/2,bf.castShadow=!1;let Ba=new ro(9611936,3.4,3.6,1,.85,2);Ba.position.set(-.95,2.72,.36),Ba.target.position.set(-1.12,1.35,.04),tn.add(Ba,Ba.target);let Yl=cl({flies:7,moths:3,spread:[.48,.14,.22],seed:71,sizeScale:.5,dive:.22});Yl.group.position.set(-.95,2.52,.43),tn.add(Yl.group);let ei=new be;ei.name="Damaged filing cabinets",ei.position.set(-1.12,0,.26),tn.add(ei),H([1.52,.77,.028],[0,.385,-.2],Fa,ei),H([1.56,.035,.46],[0,.795,0],P,ei);for(let _ of[-.745,0,.745])H([.025,.77,.43],[_,.385,0],Fa,ei);for(let _ of[.018,.385])H([1.52,.025,.43],[0,_,0],P,ei);for(let _ of[-.38,.38])for(let R of[.2,.56]){if(_<0&&R>.4)continue;let D=0;H([.71,.32,.025],[_,R,.231+D],P,ei),ge([_-.1,R+.04,.26+D],[_+.1,R+.04,.26+D],.011,z,ei),H([.16,.055,.004],[_,R-.06,.248+D],T,ei),D&&(H([.68,.014,.35],[_,R-.16,.2],P,ei),H([.012,.28,.34],[_-.34,R,.2],P,ei))}let Fg=H([.47,.29,.36],[-1.3,.96,.29],M(11573869,.99,m),tn);Fg.rotation.y=.14,wr("ARCHIVE",.25,.075,tn,[-1.3,.97,.483],"#a49471","#3b3d30");let Og=H([.5,.014,.19],[-1.3,1.116,.39],A,tn);Og.rotation.x=.2;let Es=new be;Es.name="Neglected network and electrical cabinet",Es.position.set(-2.96,1.6,.08),tn.add(Es),H([.64,.97,.12],[0,0,0],P,Es),H([.56,.88,.014],[0,0,.066],v,Es);for(let _=0;_<4;_++)for(let R=0;R<5;R++)H([.072,.09,.035],[-.2+R*.1,.28-_*.16,.09],Fa,Es),H([.017,.035,.01],[-.2+R*.1,.28-_*.16,.113],_===1?T:v,Es);let Io=new be;Io.position.set(-.32,0,.06),Io.rotation.y=-.65,Es.add(Io),H([.62,.96,.025],[.31,0,0],P,Io),wr("CAUTION",.3,.1,Io,[.32,.26,.014],"#a08d52","#252b24");for(let _=0;_<4;_++)N([[-3.12+_*.08,2.1,.12],[-3.15+_*.08,2.5,.12],[-3.15+_*.08,2.88,.12],[-2.1+_*.08,2.88,.12]],.012,P,tn);for(let _=0;_<6;_++)N([[-3.18+_*.08,1.15,.16],[-3.2+_*.06,.71,.21],[-3.13+_*.1,.32,.17],[-2.85+_*.06,.15,.3]],.005,_%2?v:M(5858907,.9),tn);H([.2,.13,.022],[2.2,.35,.047],T,tn),H([.11,.085,.025],[2.2,.35,.065],v,tn),N([[2.2,.35,.09],[2.24,.12,.13],[2.47,.023,.28],[2.9,.023,.42],[3.1,.023,.3]],.007,v,tn);let Di=new be;Di.name="Dusty fire extinguisher",Di.position.set(2.16,.25,.17),tn.add(Di);let Zl=M(8271401,.78,u,.23);Q(.095,.42,[0,.25,0],Zl,Di,24),me([.095,.065,.095],[0,.47,0],Zl,Di),me([.093,.045,.093],[0,.04,0],Zl,Di),H([.11,.025,.055],[.015,.56,0],v,Di),ge([0,.51,0],[0,.57,0],.018,z,Di),N([[.035,.52,0],[.12,.47,.02],[.13,.19,.06]],.012,v,Di),wr("FIRE",.12,.14,Di,[0,.27,.097],"#b4ac8c","#33382d"),n.push(Te,Ee,lt,ze,gn,Gt,Le,je.group,qn,gi,ei,Di);for(let _ of n)pr(_,zn);for(let _ of[Xe,Oe]){let R=_.getObjectByName("Monitor power cable");_.remove(R),R.geometry.dispose();let D=_.localToWorld(new S(.1,.23,-.05)),k=D.x,G=D.z,Y=N([D.toArray(),[k+.09,Math.max(zn(k+.09,G+.1)+.008,D.y*.45),G+.1],[k+.2,zn(k+.2,G+.2)+.007,G+.2],[k+.38,zn(k+.38,G+.11)+.007,G+.11]],.006,v);Y.userData.ignoreFloorContact=!0,Y.userData.anchorStart=!0}for(let _ of s)ol(_,zn);t.add(C0(e,zn));let Zs=R0();Zs.group.userData.ignoreAcid=!0,t.add(Zs.group);let $l=G0({valves:Zs.valves,floorSupport:zn});t.add($l.group);let Tf=N0({filing:ei,laptop:tf,floorSupport:zn,drawerMaterial:P});t.add(Tf.group);let Kl=B0({bottle:Sg,contents:Mg,cap:Ro,floorSupport:zn});t.add(Kl.group);let Rf=U0({room:t,floorSupport:zn,viewerPosition:e});t.add(Rf.group);function Bg(_){$l.setEnvironment(_),et.setEnvironment(_),he.setEnvironment(_),Zs.setEnvironment(_),Ca.setEnvironment(_)}let Af=-1/0;function zg(_,R,D=e){Kl.update(_,R);let k=Ca.update(_,R);return _-Af>=1/Ut.effectsHz&&(Af=_,Rf.update(_,R,D),Zs.update(_,R),Bl.update(_,R,k),Yl.update(_,R,.65),zl.update(_,R,.78)),k}return{group:t,laptop:tf,catMug:Yi,acidLeaks:$l,chargingKit:Tf,ketchupKey:Kl,countdown:je,setDisplayEnvironment:Bg,update:zg,figpalHoists:Zs,toggleHoist:Zs.toggleHoist}}var pa=["Nooo!!!!","Tell my wife that I love her!","Delete my browser history!"],wd=["help","I have a family","I swear I didn't detach the component!"];function X0(i,e,t=Math.random){let n=18,s=-1,r=Math.floor(t()*wd.length);return{update(o,a=!1){if(o<n)return!1;if(a||e.isActive(o))return n=o+2,!1;let c=[0,1,2].filter(h=>i.isHanging(h));if(!c.length)return n=o+2,!1;c.length>1&&(c=c.filter(h=>h!==s));let l=c[Math.floor(t()*c.length)];return e.show(l,o,wd[r],6),s=l,r=(r+1)%wd.length,n=o+20+t()*15,!0},reset(o=0){n=o+18,s=-1}}}function q0(i){let e=null;return{update(t,n){return t!=="finished"||e!==null?!1:(e=n,i.lowerAll(),!0)},reset(){e!==null&&i.reset(),e=null},get active(){return e!==null},elapsed(t){return e===null?-1:Math.max(0,t-e)}}}function Y0(i,e,t=()=>!0){let n=document.querySelector("#figpal-dialogues"),s=pa.map((d,g)=>{let x=document.createElement("div");x.className="figpal-speech",x.hidden=!0,x.dataset.figpal=String(g+1);let m=document.createElement("span");m.className="figpal-speech-text",m.textContent=d;let u=document.createElementNS("http://www.w3.org/2000/svg","svg");u.classList.add("figpal-speech-tail"),u.setAttribute("aria-hidden","true");let E=document.createElementNS("http://www.w3.org/2000/svg","path");return u.append(E),x.append(m,u),n.append(x),x}),r=new S,o=s.map(()=>null),a=s.map(()=>15);function c(d,g,x=pa[d],m=15){if(s[d]){if(!t(d)){p(d);return}o[d]=g,a[d]=m,s[d].children[0].textContent=x}}function l(d){return o.some((g,x)=>t(x)&&g!==null&&d>=g&&d<g+a[x])}function h(d){for(let g=0;g<s.length;g++)c(g,d)}function p(d){if(Number.isInteger(d)){s[d]&&(o[d]=null,s[d].hidden=!0);return}n.hidden=!0;for(let g=0;g<s.length;g++)o[g]=null,s[g].hidden=!0}function f(d,g){n.hidden=!1;let x=e.getBoundingClientRect(),m=0;for(let u=0;u<i.length;u++){if(!t(u)){p(u);continue}let E=s[u],y=o[u]===null?-1:g-o[u],M=a[u];if(y<0||y>=M){E.hidden=!0,y>=M&&(o[u]=null);continue}if(E.style.opacity=String(1-Ze.smoothstep(y,M-1,M)),i[u].getWorldPosition(r),r.y=Math.max(r.y,1.32),r.project(d),r.z<-1||r.z>1||Math.abs(r.x)>1.04||Math.abs(r.y)>1.1){E.hidden=!0;continue}E.hidden=!1;let C=x.left+(r.x*.5+.5)*x.width,A=x.top+(-r.y*.5+.5)*x.height;E.style.transform=`translate3d(${C}px,${A-14}px,0) translate(-50%,-100%)`;let T=E.offsetWidth/2;E.querySelector("path").setAttribute("d",`M ${T-5} 0 L ${T+6} 0 L ${T} 15 Z`),m++}n.hidden=m===0}return p(),{update:f,hide:p,show:c,showAll:h,isActive:l}}var gs=i=>(i=Math.max(0,Math.min(1,i)),i*i*(3-2*i));function Z0({canDetach:i=()=>!0}={}){let e=!0,t=-1/0,n=-1/0,s=!1,r=-1/0;return{get locked(){return e},requestReach(o){return o-t<1.65||!e&&o-n<.85?!1:(t=o,r=o+5.2,s=!e,!0)},detach(o){return!e||!i()?!1:(e=!1,n=o,r=o+2.4,s=!1,!0)},endReach(){r=-1/0,s=!1},sample(o,a=!1){a&&Number.isFinite(t)&&(r=Math.max(r,o+.8));let c=o-t,l=c<.52?gs(c/.52):c<.86?1:1-gs((c-.86)/.79),h=!1;!e&&s&&c>=.55&&(h=!0,s=!1);let p=o-n,f=e?0:gs(p/.14),d=e?0:gs((p-.12)/.42),g=e?0:gs((p-.56)/.28),x=e?0:gs((p-.9)/.65),m=o<r,u=m?Math.min(gs(c/.24),gs((r-o)/.45)):0;return{locked:e,reach:l,visible:m,reveal:u,releaseElapsed:p,unlatch:f,hingeOpen:d,handFree:g,cuffDrop:x,release:e?0:gs((o-n)/.85),strain:e&&c>.45&&c<.86?Math.sin(c*64)*.003:0,openLaptop:h}},reset(){e=!0,t=-1/0,n=-1/0,s=!1,r=-1/0}}}function $0(i,e,t,n=.43,s=.49){let r=new S().subVectors(e,i),o=r.length();r.normalize(),o>n+s-.015&&i.addScaledVector(r,o-(n+s-.015));let a=Math.max(.001,i.distanceTo(e)),c=Ze.clamp((n*n-s*s+a*a)/(2*a),-n,n),l=new S(.55,-1,.08).addScaledVector(r,-new S(.55,-1,.08).dot(r)).normalize();return t.copy(i).addScaledVector(r,c).addScaledVector(l,Math.sqrt(Math.max(0,n*n-c*c))),t}function K0(i,e){let s=new Ct,r=new Float32Array(609*3),o=[];for(let M=1;M<=20;M++)for(let C=1;C<=28;C++){let A=M*29+C;o.push(A,A-28-2,A-1,A,A-28-1,A-28-2)}s.setAttribute("position",new un(r,3).setUsage(Dn)),s.setIndex(o);let a=new ht(s,i);a.name="Full curved forearm",a.castShadow=a.receiveShadow=!0,a.frustumCulled=!1;let c=s.clone(),l=new ht(c,e);l.name="Forearm ink silhouette",l.raycast=()=>{},l.frustumCulled=!1,a.add(l);let h=new ra,p=new S,f=new S,d=new S,g=new S,x=new S,m=new S,u=new S,E=[[0,.076,.061],[.18,.081,.063],[.4,.073,.055],[.65,.059,.043],[.8,.047,.033],[1,.038,.026]];function y(M,C,A){p.set(0,0,1).applyQuaternion(A),h.v0.copy(M),h.v1.lerpVectors(M,C,.31),h.v1.x+=.018,h.v3.copy(C).addScaledVector(p,.075),h.v2.copy(h.v3).addScaledVector(p,.065),m.set(1,0,0).applyQuaternion(A);for(let O=0;O<=20;O++){let v=O/20;v<.8?(h.getPoint(v/.8,f),h.getTangent(v/.8,d)):(f.copy(C).addScaledVector(p,.075*(1-v)/.2),d.copy(p).negate()),g.copy(m).addScaledVector(d,-m.dot(d)).normalize(),x.crossVectors(g,d).normalize();let w=E.findIndex(me=>me[0]>=v),W=E[Math.max(0,w-1)],z=E[w],B=W===z?0:Ze.smoothstep(v,W[0],z[0]),H=Ze.lerp(W[1],z[1],B),Z=Ze.lerp(W[2],z[2],B);for(let me=0;me<=28;me++){let Q=me/28*Math.PI*2;u.copy(f).addScaledVector(g,Math.cos(Q)*H).addScaledVector(x,Math.sin(Q)*Z),u.toArray(r,(O*29+me)*3)}}s.attributes.position.needsUpdate=!0,s.computeVertexNormals();let T=s.attributes.normal,P=c.attributes.position;for(let O=0;O<P.count;O++)P.setXYZ(O,r[O*3]+T.getX(O)*.0015,r[O*3+1]+T.getY(O)*.0015,r[O*3+2]+T.getZ(O)*.0015);P.needsUpdate=!0}return{mesh:a,update:y}}function J0(i,e){let t=i.geometry,n=t.attributes.position,s=t.clone(),r=s.attributes.position,o=1.9/e;for(let c=0;c<r.count;c++){let l=n.getX(c),h=n.getY(c),p=n.getZ(c),f=Math.max(0,-p)*o;p>=0||r.setXYZ(c,l,h*Math.cos(f)-(1-Math.cos(f))/o,-Math.sin(f)/o-h*Math.sin(f))}s.computeVertexNormals(),t.morphAttributes.position=[r],t.morphAttributes.normal=[s.attributes.normal],i.updateMorphTargets();let a=i.children.find(c=>c.name==="Ink silhouette");if(a){let c=r.clone(),l=s.attributes.normal;for(let h=0;h<c.count;h++)c.setXYZ(h,r.getX(h)+l.getX(h)*.002,r.getY(h)+l.getY(h)*.002,r.getZ(h)+l.getZ(h)*.002);a.geometry.morphAttributes.position=[c],a.updateMorphTargets()}return c=>{i.morphTargetInfluences[0]=Ze.clamp(c,0,1),a&&(a.morphTargetInfluences[0]=i.morphTargetInfluences[0])}}var Q0=new S(0,1,0);function j0(i,e={}){let t=new be;t.name="Player forearm chained to the rear pipes";let n=new be;n.name="Camera-relative reaching hand",t.add(n);let s=Z0(e),r=new Zt(1,24,16),o=new Be({color:13871751,roughness:.86,metalness:0,emissive:6832947,emissiveIntensity:.025}),a=new gt({color:2104345,side:yn}),c=ni(10857122),l=ni(12568e3),h=new Be({color:1382166,roughness:.9}),p=ni(9872814);p.map=null,p.metalnessMap=null,p.metalness=.86,p.roughness=.66,p.bumpScale=35e-5;let f=new Be({color:11517381,metalness:.92,roughness:.29}),d=new gt({transparent:!0,opacity:0,depthWrite:!1,colorWrite:!1});function g(Je,st,nt=n){let rt=new ht(Je,st);return rt.castShadow=!0,rt.receiveShadow=!0,nt.add(rt),rt}function x(Je,st,nt,rt=o){let ze=g(r,rt,Je);return ze.position.set(...st),ze.scale.set(...nt),ze}function m(Je,st,nt,rt,ze){st=new S(...st),nt=new S(...nt);let Qe=nt.clone().sub(st),bt=g(new Yt(rt,rt,Qe.length(),20),ze,Je);return bt.position.copy(st).add(nt).multiplyScalar(.5),bt.quaternion.setFromUnitVectors(Q0,Qe.normalize()),bt}function u(Je,st,nt,rt){return g(new dn(new Jt(st.map(ze=>new S(...ze))),24,nt,7,!1),rt,Je)}let E=new be;E.name="Cartoon forearm and right hand",n.add(E);function y(Je,st=.002){let nt=Je.geometry.clone(),rt=nt.attributes.position,ze=nt.attributes.normal;for(let bt=0;bt<rt.count;bt++)rt.setXYZ(bt,rt.getX(bt)+ze.getX(bt)*st,rt.getY(bt)+ze.getY(bt)*st,rt.getZ(bt)+ze.getZ(bt)*st);rt.needsUpdate=!0,nt.computeBoundingSphere();let Qe=new ht(nt,a);Qe.name="Ink silhouette",Qe.raycast=()=>{},Je.add(Qe)}function M(Je,st,nt=28){let rt=st.map(([gn,Gt,I,K,oe])=>({z:gn,x:Gt,y:I,rx:K,ry:oe})),ze=[],Qe=[],bt=[];for(let gn=0;gn<rt.length;gn++){let Gt=rt[gn];for(let I=0;I<=nt;I++){let K=I/nt*Math.PI*2,oe=Math.cos(K),ue=Math.sin(K);if(ze.push(Gt.x+Gt.rx*oe,Gt.y+Gt.ry*ue,Gt.z),Qe.push(I/nt,gn/(rt.length-1)),gn&&I){let ee=gn*(nt+1)+I;bt.push(ee,ee-nt-2,ee-1,ee,ee-nt-1,ee-nt-2)}}}let qt=new Ct;qt.setAttribute("position",new ct(ze,3)),qt.setAttribute("uv",new ct(Qe,2)),qt.setIndex(bt),qt.computeVertexNormals();let an=g(qt,o,Je);return y(an),an}let C=M(E,[[0,0,0,.097,.078],[-.18,.004,0,.099,.077],[-.42,.008,.003,.092,.073],[-.7,.006,.002,.084,.066],[-1,0,0,.076,.061]],40);C.name="Upper arm";let A=x(E,[0,0,0],[.076,.061,.068]);A.name="Bent elbow";let T=K0(o,a);E.add(T.mesh);let P=new pt,O=new be;O.name="Cartoon right hand",E.add(O);let v=new At;v.name="Mug handle contact",v.position.set(0,-.036,-.145),O.add(v),M(O,[[.025,0,0,.037,.025],[0,0,0,.04,.026],[-.03,-.005,0,.059,.036],[-.066,-.005,0,.071,.04],[-.108,-.002,-.002,.071,.037],[-.14,.002,-.003,.065,.031],[-.16,.004,-.004,.051,.022],[-.17,.004,-.004,.006,.004]],40);let w=[],W=[];for(let[Je,st,nt,rt]of[[0,-.056,.12,.19],[1,-.018,.136,.055],[2,.023,.128,-.08],[3,.06,.1,-.23]]){let ze=new be;ze.position.set(st,-.002,-.137+(Je===3?.013:0)),ze.rotation.y=rt,O.add(ze),w.push(ze);let Qe=Je===3?.0175:.02,bt=M(ze,[[.014,0,0,Qe*.92,Qe*.9],[0,0,0,Qe,Qe],[-nt*.22,0,-.002,Qe,Qe*.98],[-nt*.48,0,-.005,Qe*.96,Qe*.94],[-nt*.7,0,-.009,Qe*.92,Qe*.9],[-nt*.84,0,-.012,Qe*.86,Qe*.84],[-nt*.94,0,-.014,Qe*.64,Qe*.64],[-nt*.985,0,-.014,Qe*.3,Qe*.3],[-nt,0,-.014,3e-4,3e-4]]);bt.name=`Finger ${Je+1}`,W.push(J0(bt,nt)),ze.userData.spread=rt}let z=new At;z.name="Lid contact fingertip",z.position.set(0,-.014,-.136),w[1].add(z);let B=new be;B.position.set(-.049,-.008,-.041),B.rotation.y=.88,B.rotation.z=-.26,O.add(B),M(B,[[.018,0,0,.033,.03],[0,0,0,.032,.03],[-.027,-.003,0,.029,.027],[-.051,-.005,.002,.026,.025],[-.072,-.006,.002,.025,.024],[-.089,-.006,.001,.021,.02],[-.101,-.006,0,.012,.012],[-.107,-.006,0,3e-4,3e-4]]);let H=new be;H.name="Wrist cuff and chain \u2014 right-click to detach",H.userData.playerChain=!0,n.add(H);let Z=new be;Z.name="Close-fitting oval wrist cuff",H.add(Z);let me=new S(0,0,.033),Q=-.056;function ge(Je,st,nt){let rt=new St;rt.absellipse(0,0,.061,.049,Je,st,!1),rt.lineTo(Math.cos(st)*.05,Math.sin(st)*.038),rt.absellipse(0,0,.05,.038,st,Je,!0),rt.closePath();let ze=new on(rt,{depth:.044,bevelEnabled:!0,bevelSize:6e-4,bevelThickness:6e-4,bevelSegments:2,curveSegments:28}),Qe=g(ze,p,nt);Qe.position.z=-.022;for(let bt of[0,.044]){let qt=Array.from({length:25},(gn,Gt)=>{let I=Je+(st-Je)*Gt/24;return[.0608*Math.cos(I),.0488*Math.sin(I),bt]}),an=u(Qe,qt,.0016,f);an.name="Polished shackle rim"}return Qe}let N=ge(Math.PI,Math.PI*2,Z);N.name="Fixed lower cuff";let ae=new be;ae.name="Hinged upper cuff",ae.position.x=Q,Z.add(ae);let ne=ge(0,Math.PI,ae);ne.position.x=-Q,m(Z,[Q,0,-.03],[Q,0,.03],.008,f);for(let Je of[-.029,.029])x(Z,[Q,0,Je],[.009,.009,.003],f);g(new Mt(.021,.027,.043),p,Z).position.set(.064,-.01,0);let F=new be;F.name="Spring-loaded locking clip",F.position.set(.064-Q,.012,0),ae.add(F),g(new Mt(.013,.027,.036),f,F).position.set(.003,-.008,0),x(Z,[.064,-.006,-.0225],[.0038,.0038,.001],h),g(new Mt(.003,.008,.0015),h,Z).position.set(.064,-.011,-.0225);for(let Je of[-.015,.015])x(F,[.01,-.007,Je],[.002,.003,.003],f);let V=g(new Qt(.014,.0048,8,24),f,Z);V.name="Welded chain attachment",V.position.set(.076,-.019,0),V.rotation.y=Math.PI/2;let $=g(new Yt(.078,.078,.08,16),d,Z);$.rotation.x=Math.PI/2,$.castShadow=!1;let xe=new be;xe.name="Rusted rear pipe anchoring the wrist chain",t.add(xe),u(xe,[[3.3,.13,4.16],[3.3,.42,4.16],[3.3,2.16,4.16],[3.27,2.32,4.16],[2.78,2.34,4.16]],.045,c);for(let Je of[.3,1.25,2.08]){g(new Mt(.2,.16,.025),c,xe).position.set(3.3,Je,4.37);for(let rt of[3.23,3.37]){m(xe,[rt,Je,4.35],[rt,Je,4.14],.008,l);let ze=g(new Yt(.017,.017,.018,6),l,xe);ze.rotation.x=Math.PI/2,ze.position.set(rt,Je,4.12)}let nt=g(new Qt(.058,.01,8,32),l,xe);nt.rotation.x=Math.PI/2,nt.position.set(3.3,Je,4.16)}let Ce=new S(3.3,.28,4.1),ve=new S,te=g(new Qt(.055,.009,8,24),l,xe);te.position.set(3.3,.28,4.1),te.rotation.y=Math.PI/2;let L=[];for(let Je=0;Je<48;Je++){let st=Je/48*Math.PI*2;L.push(new S(Math.cos(st)*.017,Math.sin(st)*.028,0))}let _e=new dn(new Jt(L,!0),32,.0055,6,!0),se=new vn(_e,f,360);se.name="Heavy interlocking wrist chain",se.castShadow=!0,se.receiveShadow=!0,se.frustumCulled=!1,H.add(se);let he=new vn(new Zt(1,8,6),d,360);he.frustumCulled=!1,H.add(he);let de=new S,Me=new S,Se=new S,U=new S,b=new S,j=new S,pe=new At,Te=new S(.29,-.36,-.73),Ee=new S(.45,-.65,-.5),Xe=new S(.15,-.31,-.77),Oe=new S(-.08,-.32,-.83),ke=new S,vt=new S(.43,-.66,-.54),De=new S(.22,-.68,-.58),J=new S(.12,-.34,-.05),ye=new S(0,0,-1),Ie=new S,Pe=new S,Re=new S,le=new pt,Ve=new pt,q=!1,Ae=new S,ce=new S,we=new S,Ue=new S,Fe=new pt,ut=new pt,Pt=3,Ot=new S(1,0,0),lt=Array.from({length:49},()=>new S);function It(Je,st,nt){return nt.copy(U).lerp(ve,Je),nt.addScaledVector(Ot,Math.sin(Math.PI*Je)*st),nt.y-=Math.sin(Math.PI*Je)*st*.9,ke.copy(nt),n.localToWorld(ke),ke.y=Math.max(.032,ke.y),n.worldToLocal(ke),nt.copy(ke),nt}function Xn(){let Je=0,st=1.5;for(let Qe=0;Qe<9;Qe++){let bt=(Je+st)/2,qt=0;for(let an=0;an<lt.length;an++)It(an/(lt.length-1),bt,lt[an]),an&&(qt+=lt[an].distanceTo(lt[an-1]));qt>Pt?st=bt:Je=bt}let nt=new Jt(lt),rt=nt.getLength(),ze=Math.min(360,Math.max(2,Math.ceil(rt/.043)));se.count=he.count=ze;for(let Qe=0;Qe<ze;Qe++){let bt=Qe/(ze-1);nt.getPointAt(bt,pe.position),nt.getTangentAt(bt,j),pe.quaternion.setFromUnitVectors(Q0,j),Qe%2&&pe.rotateY(Math.PI/2),pe.scale.set(1,1,1),pe.updateMatrix(),se.setMatrixAt(Qe,pe.matrix),pe.scale.set(.032,.026,.032),pe.updateMatrix(),he.setMatrixAt(Qe,pe.matrix)}se.instanceMatrix.needsUpdate=!0,he.instanceMatrix.needsUpdate=!0}function mi(Je,st=!1,nt=!1,rt=null){let ze=s.sample(Je,nt),Qe=ze.reach;n.position.copy(i.position),n.quaternion.copy(i.quaternion);let bt=Math.tan(Ze.degToRad(i.fov/2))/Math.tan(Ze.degToRad(62/2));if(n.scale.set(bt,bt,1),n.updateWorldMatrix(!0,!1),n.visible=ze.visible,!ze.visible)return ze.openLaptop;ve.copy(Ce),n.worldToLocal(ve);let qt=rt?rt.reveal:st?1:ze.reveal,an=(1-qt)*.55;de.copy(Te).lerp(ze.locked?Xe:Oe,Qe),ze.locked&&(de.y+=st?0:ze.strain),Me.copy(Ee).lerp(ze.locked?vt:De,Qe);let gn=!ze.locked&&ze.releaseElapsed<1.8&&q,Gt=st&&!ze.locked?1:ze.hingeOpen,I=st&&!ze.locked?1:ze.cuffDrop;if(gn){de.copy(Ie),Me.copy(Re);let K=st?1:ze.handFree;de.y+=K*.055,de.z+=K*.025}if(de.y-=an,Me.y-=an,b.copy(Me).sub(de).setLength(.35),Me.copy(de).add(b),Se.copy(Me).add(J),C.position.copy(Se),b.copy(Me).sub(Se),C.quaternion.setFromUnitVectors(ye,b.clone().normalize()),C.scale.z=b.length(),b.copy(de).sub(Me),P.setFromUnitVectors(ye,b.clone().normalize()),A.position.copy(Me),A.quaternion.copy(P),O.position.copy(de),O.quaternion.copy(P),O.rotateX(-.12+Qe*.08),O.rotateY(.13-Qe*.06),O.rotateZ(-.04),gn&&O.quaternion.slerp(le,1-ze.handFree),w.forEach((K,oe)=>{K.rotation.x=-.06+(1-Qe)*(.11+oe*.015)}),B.rotation.x=0,B.rotation.y=.88,B.rotation.z=-.26,W.forEach(K=>K(0)),rt){let K=rt.blend,oe=rt.grip,ue=rt.gripKind==="handle";w.forEach((ee,Le)=>{ee.rotation.x=Ze.lerp(ee.rotation.x,(ue?-.16:-.46)+(Le===0?.08:0),oe),ee.rotation.y=Ze.lerp(ee.userData.spread,ee.userData.spread*.3,oe)}),B.rotation.x=(ue?.42:.28)*oe,B.rotation.y=.88-(ue?.58:.28)*oe,ue&&(W.forEach(ee=>ee(oe)),B.rotation.z=-.26+.18*oe),w[1].updateMatrix(),ue?ce.copy(v.position):ce.copy(z.position).applyMatrix4(w[1].matrix),ut.copy(i.quaternion).invert(),Fe.copy(ut).multiply(rt.quaternion),Ae.copy(rt.position),n.worldToLocal(Ae),we.copy(Ae).sub(ce.applyQuaternion(Fe)),O.position.lerp(we,K),O.quaternion.slerp(Fe,K),de.copy(O.position),Se.set(.34,-.66-an,-.09),$0(Se,de,Ue),Me.lerp(Ue,K),C.position.copy(Se),b.copy(Me).sub(Se),C.quaternion.setFromUnitVectors(ye,b.clone().normalize()),C.scale.z=b.length(),b.copy(de).sub(Me),P.setFromUnitVectors(ye,b.clone().normalize()),A.position.copy(Me),A.quaternion.copy(P)}else w.forEach(K=>{K.rotation.y=K.userData.spread});return T.update(Me,O.position,O.quaternion),ze.locked?(Z.position.copy(me).applyQuaternion(O.quaternion).add(de),Z.quaternion.copy(O.quaternion),ae.rotation.z=0,F.rotation.z=0):(Z.position.copy(Pe),Z.position.y-=an+I*.32,Z.position.x+=I*.08,Z.quaternion.copy(Ve),Z.rotateX(I*.8),Z.rotateZ(I*.42),ae.rotation.z=Gt*1.95,F.rotation.z=-(st?1:ze.unlatch)*.85),Z.updateMatrix(),U.copy(V.position).applyMatrix4(Z.matrix),Pt=U.distanceTo(ve)+(ze.locked?.24*(1-Qe)+.018:.42),Xn(),ze.openLaptop}function ss(Je){return s.locked?(Ie.copy(de),Re.copy(Me),le.copy(O.quaternion),Ve.copy(Z.quaternion),Pe.copy(Z.position),q=!0,s.detach(Je)):!1}function Jn(){s.reset(),q=!1,ae.rotation.z=0,F.rotation.z=0,mi(0,!0)}return mi(0,!0),{group:t,target:H,state:s,update:mi,reset:Jn,endReach:()=>s.endReach(),setEnvironment(Je){for(let st of[c,l,p,f])st.envMap=Je,st.envMapIntensity=st===f?1.65:1.15,st.needsUpdate=!0},get locked(){return s.locked},requestReach:Je=>s.requestReach(Je),detach:ss}}function em(i,{canDetach:e=()=>!0,onBlocked:t=()=>{}}={}){let n=document.querySelector("#chain-menu"),s=n.querySelector("button"),r=document.querySelector("#scene");function o(l=!1){n.hidden=!0,l&&r.focus({preventScroll:!0})}function a(l,h){s.setAttribute("aria-disabled",String(!e())),s.title=e()?"Unlock the shackle with the key":"Find the shackle key first",n.hidden=!1,n.style.left=`${Math.max(8,Math.min(l,innerWidth-n.offsetWidth-8))}px`,n.style.top=`${Math.max(8,Math.min(h,innerHeight-n.offsetHeight-8))}px`,s.focus({preventScroll:!0})}function c(){if(!e()){t();return}o(!0),i()}return s.addEventListener("click",c),n.addEventListener("contextmenu",l=>l.preventDefault()),document.addEventListener("pointerdown",l=>{!n.hidden&&!n.contains(l.target)&&o()},!0),document.addEventListener("keydown",l=>{n.hidden||(l.code==="Escape"?(l.preventDefault(),l.stopPropagation(),o(!0)):l.code==="KeyB"&&l.altKey&&l.metaKey&&!l.ctrlKey&&!l.shiftKey&&(l.preventDefault(),l.stopPropagation(),l.repeat||c()))},!0),window.addEventListener("blur",()=>o()),{show:a,hide:o,get active(){return!n.hidden}}}function tm(i,e){let t=i.match(/[\p{L}\p{N}'’]+[^\p{L}\p{N}'’]*/gu)||[],n=[],s=.1;for(let r of t){let o=r.replace(/[^\p{L}\p{N}'’]/gu,""),a=(o.toLowerCase().replace(/e$/,"").match(/[aeiouy]+/g)||[]).length,c=Math.max(1,Math.min(4,a)),l=.24+Math.min(o.length,10)*.025+(c-1)*.09;for(let h=0;h<c;h++){let p=l/c;n.push({start:s+h*p,end:s+(h+.87)*p,amount:.78+Math.min(o.length,6)*.025})}s+=l+(/[.!?…]/u.test(r)?.4:/[,;:]/.test(r)?.24:.11)}return{startTime:e,cues:n,duration:s}}function nm(i,e){if(!i)return 0;let t=e-i.startTime;for(let n of i.cues){if(t<n.start)return 0;if(t<=n.end){let s=(t-n.start)/(n.end-n.start),r=Math.min(1,s/.22),o=Math.min(1,(1-s)/.35),a=Math.min(r,o);return n.amount*a*a*(3-2*a)}}return 0}var bd={position:[1.85221,.821615,3.1149],lookAt:[1.155084,.748275,2.401713],fov:48.36},zM=i=>Ze.euclideanModulo(i+Math.PI,Math.PI*2)-Math.PI;function im(i){let e=new S(...bd.position),t=new S(...bd.lookAt).sub(e).normalize(),n={yaw:Math.atan2(-t.x,-t.z),pitch:Math.asin(t.y),zoom:bd.fov/i},s=null;return{start(r,o,a){s={time:r,position:o.clone(),yaw:a.yaw,pitch:a.pitch,zoom:a.zoom}},cancel(){s=null},get active(){return s!==null},update(r,o,a,c=!1){if(!s)return;let l=c?1:Ze.clamp((r-s.time)/1.4,0,1),h=l*l*(3-2*l);o.lerpVectors(s.position,e,h),a.yaw=s.yaw+zM(n.yaw-s.yaw)*h,a.pitch=Ze.lerp(s.pitch,n.pitch,h),a.zoom=Ze.lerp(s.zoom,n.zoom,h),l===1&&(o.copy(e),Object.assign(a,n),s=null)}}}var xs=(i,e,t)=>Ze.smootherstep(i,e,t),sm=i=>Ze.euclideanModulo(i+Math.PI,Math.PI*2)-Math.PI;function rm({laptop:i,restraint:e,cameraPosition:t,state:n}){let s=null,r=new S,o=new S,a=new S,c=new S,l=new pt,h=new pt,p=new vi,f=0,d=0,g=1,x=0,m=0,u={position:new S,quaternion:new pt,blend:0,grip:0,reveal:0};function E(C){return s!==null||e.locked||i.isOpen||!e.requestReach(C)?!1:(s=C,r.copy(t),f=n.yaw,d=n.pitch,g=n.zoom??1,i.object.updateWorldMatrix(!0,!1),i.object.localToWorld(o.set(.16,.78,1)),i.object.localToWorld(a.set(0,.32,-.02)),c.copy(a).sub(o).normalize(),x=Math.atan2(-c.x,-c.z),m=Math.asin(c.y),u.blend=u.grip=u.reveal=0,!0)}function y(C,A=!1){if(s===null)return!1;let T=C-s;if(A)return i.setOpenProgress(1),e.endReach(),s=null,!0;let P=xs(T,0,.7)*(1-xs(T,2.7,3.4));t.lerpVectors(r,o,P),n.zoom=Ze.lerp(g,1,P),n.yaw=sm(f+sm(x-f)*P),n.pitch=Ze.lerp(d,m,P);let O=xs(T,.96,2.21);return i.setOpenProgress(O),i.getLidGrip(u.position),i.object.getWorldQuaternion(l),h.setFromEuler(p.set(-.1-.28*O,0,-.1)),u.quaternion.copy(l).multiply(h),u.blend=xs(T,0,.8)*(1-xs(T,2.38,3.02)),u.grip=xs(T,.7,.92)*(1-xs(T,2.21,2.38)),u.reveal=xs(T,0,.18)*(1-xs(T,2.64,3.12)),T<3.4?!1:(t.copy(r),n.yaw=f,n.pitch=d,n.zoom=g,e.endReach(),s=null,!0)}function M(){s!==null&&(t.copy(r),n.yaw=f,n.pitch=d,n.zoom=g,e.endReach(),s=null)}return{start:E,update:y,cancel:M,get active(){return s!==null},get handPose(){return s===null?null:u}}}var ji=(i,e,t)=>Ze.smootherstep(i,e,t);function om({mug:i,camera:e,restraint:t}){let n=i.position.clone(),s=i.quaternion.clone(),r=new S,o=new pt,a=new S,c=new pt,l=new S,h=new S,p=new S,f=new S,d=new pt,g=new pt,x=new pt,m=new pt,u=new pt().setFromAxisAngle(new S(0,1,0),Math.PI),E=new pt().setFromAxisAngle(new S(0,0,1),-Math.PI/2),y=i.getObjectByName("Mug handle grip"),M=["Mug left ear tip","Mug right ear tip"].map(Z=>i.getObjectByName(Z)),C=new S,A=new S,T=new S,P={position:new S,quaternion:new pt,blend:0,grip:0,reveal:0,gripKind:"handle"},O=null,v=!1,w=0,W=0;function z(Z){if(t.locked||O!==null||v||!t.requestReach(Z))return!1;i.updateWorldMatrix(!0,!1),i.getWorldPosition(r),i.getWorldQuaternion(o),e.updateWorldMatrix(!0,!1),e.getWorldPosition(a),e.getWorldQuaternion(c),f.set(0,-.22,-.12).applyQuaternion(c),l.set(.03,-.25,-.52).applyQuaternion(c).add(a),C.set(0,0,0);for(let me of M)me.getWorldPosition(A),i.worldToLocal(A),C.add(A);return C.multiplyScalar(.5),i.getWorldScale(T),m.setFromAxisAngle(new S(1,0,0),.82),g.copy(c).multiply(m).multiply(u),h.set(0,0,-.055).applyQuaternion(c).add(a).sub(C.multiply(T).applyQuaternion(g)),O=Z,w=W=0,P.blend=P.grip=P.reveal=0,!0}function B(Z,me=!1){if(O===null||v)return!1;let Q=Z-O;if(me){if(W=ji(Q,.15,.2),w=ji(Q,.65,1.15),Q<1.25)return!1}else{let ge=ji(Q,.82,2.12),N=ji(Q,2.28,3.36);if(p.lerpVectors(r,l,ge),p.y+=Math.sin(Math.PI*ge)*.13,p.lerp(h,N),p.addScaledVector(f,ji(Q,3.42,3.8)),m.setFromAxisAngle(new S(1,0,0),.82*N),g.copy(c).multiply(m).multiply(u),d.slerpQuaternions(o,g,ge),i.position.copy(p),i.parent.worldToLocal(i.position),i.parent.getWorldQuaternion(x),i.quaternion.copy(x.invert()).multiply(d),i.updateWorldMatrix(!0,!1),y.getWorldPosition(P.position),P.quaternion.copy(d).multiply(u).multiply(E),P.blend=ji(Q,0,.72),P.grip=ji(Q,.48,.8),P.reveal=ji(Q,0,.22),W=ji(Q,3.36,3.4),w=ji(Q,3.95,4.55),Q<4.65)return!1}return v=!0,w=1,t.endReach(),!0}function H(){O=null,v=!1,w=W=0,i.position.copy(n),i.quaternion.copy(s),i.updateWorldMatrix(!0,!1),P.blend=P.grip=P.reveal=0,t.endReach()}return{start:z,update:B,reset:H,get active(){return O!==null&&!v},get finished(){return v},get blackout(){return w},get eyeImpact(){return W},get handPose(){return O!==null&&!v?P:null}}}var mt=document.querySelector("#scene"),kM=mt.getAttribute("aria-label"),bi=matchMedia("(prefers-reduced-motion: reduce)").matches,Eo={position:[1.85221,.821615,3.1149],lookAt:[1.293346,.717709,2.292176],fov:62},Vs=new S(...Eo.position),Td=new S(...Eo.lookAt).sub(Vs).normalize(),ks={yaw:Math.atan2(-Td.x,-Td.z),pitch:Math.asin(Td.y)},$e={yaw:ks.yaw,pitch:ks.pitch,zoom:1,jaw:0,space:!1,time:0,talkUntil:0},An=new Hc({canvas:mt,antialias:!Ut.mobile,alpha:!1,powerPreference:"high-performance"});An.setPixelRatio(Ut.pixelRatio);An.localClippingEnabled=!0;An.shadowMap.enabled=!0;An.shadowMap.autoUpdate=!1;An.shadowMap.type=ed;An.outputColorSpace=ft;An.toneMapping=td;An.toneMappingExposure=.76;var pi=new Fc;pi.background=new dt(1449240);pi.fog=new Nc(2305314,11,26);var wa=m0(An,pi),en=new Hn(Eo.fov,1,.06,35),Tn=Vs.clone(),Fn=im(Eo.fov),am=new S,cm=new S,Rd=new S,VM=new Zc(9545120,2370600,.62);pi.add(VM);var Sm=17.5,Xi=new ro(12898992,Sm,12,1.25,.72,2);Xi.position.set(.22,2.83,-.55);Xi.target.position.set(0,0,-.1);Xi.castShadow=!0;Xi.shadow.mapSize.set(Ut.shadowSize,Ut.shadowSize);Xi.shadow.camera.near=.1;Xi.shadow.camera.far=11;Xi.shadow.normalBias=.0025;Xi.shadow.bias=-5e-5;pi.add(Xi,Xi.target);var Ri=new $c(10269877,.85);Ri.position.set(6.2,4.1,-1.6);Ri.target.position.set(-1,.35,-.3);Ri.castShadow=!Ut.mobile;Ri.shadow.mapSize.set(1024,1024);Ri.shadow.camera.left=-6;Ri.shadow.camera.right=6;Ri.shadow.camera.top=5;Ri.shadow.camera.bottom=-5;Ri.shadow.normalBias=.003;Ri.shadow.bias=-6e-5;pi.add(Ri,Ri.target);var wm=new Nn(9348772,2.2,10,2);wm.position.set(-1,2.6,4);pi.add(wm);var Ti=Ze.lerp;function ns(i,e=.9){return new Be({color:i,roughness:e})}function Un(i,e,t=pi){let n=new ht(i,e);return n.castShadow=!0,n.receiveShadow=!0,t.add(n),n}function Gs(i,e,t,n,s=3){let r=Un(new qc(1,s),typeof e=="string"||typeof e=="number"?ns(e):e,i);return r.position.set(...t),r.scale.set(...n),r}function So(i,e,t,n,s=!1){let r=new Jt(i.map(o=>o.isVector3?o:new S(...o)),s);return Un(new dn(r,Math.max(24,i.length*2),e,8,s),t,n)}function GM(){let i=document.createElement("canvas");i.width=i.height=1024;let e=i.getContext("2d"),t=2718,n=()=>(t=t*1664525+1013904223>>>0,t/4294967296),s=([l,h])=>[(l+2)/4*i.width,(1-h/3)*i.height];function r(l,h,p=["rgba(211,12,57,.66)","rgba(227,17,62,.50)"]){let f=l.map(s);e.lineCap="round",e.lineJoin="round";for(let d=0;d<3;d++){e.strokeStyle=p[d===0?0:1];for(let g=1;g<f.length;g++){let x=Math.sin(g*1.37+d)*.08+Math.sin(g*.42)*.1;e.lineWidth=h*i.width/4*(1+x)*(d===0?1.13:.77);let m=(n()-.5)*1.5,u=(n()-.5)*1.5;e.beginPath(),e.moveTo(f[g-1][0]+m,f[g-1][1]+u),e.lineTo(f[g][0]+m,f[g][1]+u),e.stroke()}}}let o=[];for(let l=0;l<=140;l++){let h=l/140,p=Ti(-1.65,1.23,h),f=.16*Math.exp(-Math.pow((p+1.65)/.26,2))+.06*Math.pow(Math.max(0,(p-.42)/.81),2);o.push([p,1.45-f+.006*Math.sin(h*12)])}r(o,.075,["rgba(23,25,24,.98)","rgba(23,25,24,.94)"]);let a=[];for(let l=0;l<=80;l++){let h=l/80;a.push([Ti(-.68,.42,h),1.452+.009*Math.sin(h*15)+.012*Math.sin(h*7)])}r(a,.18);for(let l of[-1,1]){let h=[],p=l===-1?-1.13:1.15,f=1.68;for(let d=0;d<=240;d++){let g=d/240,x=g*Math.PI*6.1,m=.017+g*.272+.003*Math.sin(g*39+l);h.push([p+Math.cos(x)*m,f+Math.sin(x)*m*.92+.003*Math.sin(g*43)])}r(h,.047)}e.globalCompositeOperation="destination-out";for(let l=0;l<14e3;l++){e.fillStyle=`rgba(0,0,0,${.08+n()*.48})`;let h=n()*i.width,p=n()*i.height;e.fillRect(h,p,.35+n()*1.2,.4+n()*1.8)}for(let l=0;l<1600;l++){e.strokeStyle=`rgba(0,0,0,${.05+n()*.17})`,e.lineWidth=.4+n()*.7;let h=n()*i.width,p=n()*i.height;e.beginPath(),e.moveTo(h,p),e.lineTo(h+2+n()*6,p+n()*2-1),e.stroke()}let c=new Ft(i);return c.colorSpace=ft,c.anisotropy=An.capabilities.getMaxAnisotropy(),c}var WM=GM(),Tl=new Be({color:13882826,roughness:.94});Tl.onBeforeCompile=i=>{i.uniforms.lipstickPaint={value:WM},i.vertexShader=`varying vec3 vStone;
`+i.vertexShader,i.vertexShader=i.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
vStone = position;`),i.fragmentShader=`varying vec3 vStone;
 uniform sampler2D lipstickPaint;
 float hash3(vec3 p){return fract(sin(dot(p,vec3(127.1,311.7,74.7)))*43758.5453);}
 float stoneNoise(vec3 p){vec3 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);return mix(mix(mix(hash3(i),hash3(i+vec3(1,0,0)),f.x),mix(hash3(i+vec3(0,1,0)),hash3(i+vec3(1,1,0)),f.x),f.y),mix(mix(hash3(i+vec3(0,0,1)),hash3(i+vec3(1,0,1)),f.x),mix(hash3(i+vec3(0,1,1)),hash3(i+vec3(1,1,1)),f.x),f.y),f.z);}
 `+i.fragmentShader,i.fragmentShader=i.fragmentShader.replace("#include <color_fragment>",`#include <color_fragment>
 float grain=stoneNoise(vStone*53.);float fleck=stoneNoise(vStone*142.);float mottled=stoneNoise(vStone*5.);
 float edge=.43 + vStone.x*.53 + .21*sin(vStone.z*5.+vStone.x*3.)+(stoneNoise(vStone*4.)-.5)*.34;
 float moss=1.-smoothstep(-.045,.045,vStone.y-edge);
 vec2 mossSpot=(vStone.xy-vec2(-.13,.88))/vec2(.31,.20);
 float mossPatch=(1.-smoothstep(.94,1.08,length(mossSpot)+(mottled-.5)*.16))*smoothstep(.70,.95,vStone.z);
 moss=max(moss,mossPatch*.97);
 vec3 stone=diffuseColor.rgb*(.79+mottled*.17+grain*.12);
 vec3 green=mix(vec3(.20,.32,.075),vec3(.40,.53,.17),grain*.6+mottled*.4);
 diffuseColor.rgb=mix(stone,green,moss);
 diffuseColor.rgb*=.91+fleck*.17;
 vec4 paint=texture2D(lipstickPaint,vec2((vStone.x+2.)/4.,vStone.y/3.));
 float pigmentMask=paint.a*smoothstep(.40,.65,vStone.z);
 diffuseColor.rgb=mix(diffuseColor.rgb,paint.rgb*(.84+grain*.19),pigmentMask);
 `)};var XM=ns(2104866,.98),qM=ns(7350072,.98),bm=new gt({color:525833,side:Dt}),Vi=new be;Vi.name="Figsaw and tricycle";pi.add(Vi);var _n=new be;_n.name="Figsaw\u2019s red tricycle";Vi.add(_n);var wo=new Be({color:13185848,roughness:.44,metalness:.28}),Xs=new Be({color:11449779,roughness:.34,metalness:.72}),_a=new Be({color:5462617,roughness:.46,metalness:.65}),Tm=ns(8856619,.86),kd=ns(1514523,.93),Rm=ns(2369317,.85);function is(i,e,t,n,s){let r=new S(...e),o=new S(...t),a=o.clone().sub(r),c=Un(new Yt(n,n,a.length(),16),s,i);return c.position.copy(r).add(o).multiplyScalar(.5),c.quaternion.setFromUnitVectors(new S(0,1,0),a.normalize()),c}var Am=[];function Vd(i,e,t,n,s){let r=new be;r.position.set(i,e,t),r.rotation.y=Math.PI/2,r.name=s===8?"Large front wheel":"Small rear wheel",_n.add(r),r.userData.radius=n,Am.push(r);let o=n>.7?.045:.033;Un(new Qt(n-o,o,12,80),kd,r),Un(new Qt(n-o*2,.018,10,80),_a,r);for(let a of[-1,1]){let c=Un(new Qt(n-o*1.65,.006,6,80),Xs,r);c.position.z=a*.024}for(let a=0;a<s;a++){let c=a/s*Math.PI*2+.16;is(r,[0,0,0],[Math.cos(c)*(n-o*2),Math.sin(c)*(n-o*2),0],n>.7?.013:.011,_a)}is(r,[0,0,-.14],[0,0,.14],.082,wo);for(let a of[-1,1])Gs(r,Xs,[0,0,a*.15],[.061,.061,.027],2);return r}var Gd=1.39,Wd=1.52,gl=.89,yo=-1.23;Vd(0,Gd,Wd,.86,8);Vd(-1.05,gl,yo,.36,6);Vd(1.05,gl,yo,.36,6);is(_n,[-1.16,gl,yo],[1.16,gl,yo],.045,_a);var lm=new Jt([[0,.89,-1.23],[0,1.24,-1.03],[0,1.65,-.55],[0,1.95,.05],[0,2.14,.73],[0,2.19,1.22]].map(i=>new S(...i))),Cm=[],Rl=[],ma=64;for(let i=0;i<=ma;i++){let e=lm.getPoint(i/ma),t=lm.getTangent(i/ma),n=new S(0,-t.z,t.y).normalize();for(let[s,r]of[[-.055,-1],[.055,-1],[.055,1],[-.055,1]])Cm.push(e.x+s,e.y+n.y*.074*r,e.z+n.z*.074*r);if(i<ma)for(let s=0;s<4;s++){let r=i*4+s,o=i*4+(s+1)%4;Rl.push(r,o+4,o,r,r+4,o+4)}}Rl.push(0,1,2,0,2,3);var ho=ma*4;Rl.push(ho,ho+2,ho+1,ho,ho+3,ho+2);var Al=new Ct;Al.setAttribute("position",new ct(Cm,3));Al.setIndex(Rl);Al.computeVertexNormals();Un(Al,wo,_n);is(_n,[0,1.72,-.45],[0,2.02,-.45],.064,wo);var YM=Un(new Mt(1.91,.07,.29),wo,_n);YM.position.set(0,.99,yo);for(let i=-5;i<=5;i++)Un(new Mt(.012,.006,.24),Tm,_n).position.set(i*.16,1.028,yo);var bo=new St;bo.moveTo(-.2,-.58);bo.bezierCurveTo(-.3,-.18,-.72,.02,-.7,.34);bo.bezierCurveTo(-.66,.57,.66,.57,.7,.34);bo.bezierCurveTo(.72,.02,.3,-.18,.2,-.58);bo.quadraticCurveTo(0,-.7,-.2,-.58);var Pm=Un(new on(bo,{depth:.08,bevelEnabled:!0,bevelSize:.035,bevelThickness:.025,bevelSegments:3,steps:1,curveSegments:20}),Rm,_n);Pm.rotation.x=-Math.PI/2;Pm.position.set(0,2,-.45);for(let i of[-1,1])So([[i*.16,Gd,Wd],[i*.18,1.76,1.48],[i*.17,2.1,1.29],[i*.1,2.27,1.2]],.046,wo,_n);is(_n,[0,2.15,1.22],[0,2.43,1.17],.084,wo);So([[0,2.36,1.18],[0,2.52,1.18],[0,2.63,1.34],[0,2.69,1.43]],.046,Xs,_n);So([[-1.11,2.99,.86],[-1.1,2.98,1.12],[-1.04,2.88,1.35],[-.87,2.71,1.46],[-.6,2.69,1.45],[0,2.69,1.43],[.6,2.69,1.45],[.87,2.71,1.46],[1.04,2.88,1.35],[1.1,2.98,1.12],[1.11,2.99,.86]],.048,Xs,_n);is(_n,[-.1,2.69,1.43],[.1,2.69,1.43],.064,Xs);Gs(_n,_a,[0,2.69,1.491],[.027,.027,.015],2);for(let i of[-1,1])is(_n,[i*1.1,2.98,1.12],[i*1.11,2.99,.86],.061,Tm),Gs(_n,_a,[i*1.11,2.99,.85],[.061,.061,.022],2);var Ws=new be;Ws.name="Rotating pedal crank";Ws.position.set(0,Gd,Wd);_n.add(Ws);var Im=[];for(let i of[-1,1]){let e=i*.17,t=-i*.19;is(Ws,[i*.17,0,0],[i*.3,e,t],.025,Xs),is(Ws,[i*.3,e,t],[i*.53,e,t],.023,Xs);let n=new be;n.position.set(i*.44,e,t),Ws.add(n),Im.push(n),Un(new Mt(.27,.075,.19),kd,n);for(let s=-1;s<=1;s++)Un(new Mt(.24,.008,.012),Rm,n).position.set(0,.041,s*.05)}function ZM(i){for(let e of Am)e.rotation.z=i/e.userData.radius;Ws.rotation.x=i/.86;for(let e of Im)e.rotation.x=-Ws.rotation.x}Gs(_n,Xs,[-.47,2.76,1.45],[.085,.055,.085]);is(_n,[-.47,2.75,1.45],[-.57,2.77,1.45],.016,kd);var Lm=.72,Dm=2.08,Bn=new be;Bn.scale.setScalar(Lm);Bn.position.set(0,Dm,-.45);Vi.add(Bn);var Cl=2.8,fi=64,Um=160,Gn=32,Rn=8*Math.PI*2/Um,Ud=-.13,$M=.05+Gn/fi*Cl,hm=.12;function KM(i){return 2.05*Math.pow(Math.max(0,Math.sin(Math.PI*i)),.4)*(1.19-.45*i)}function Ma(i,e){let t=KM(i),n=1+.018*Math.sin(e*5+i*9)+.012*Math.cos(e*9-i*7),s=Ze.clamp(i/(Gn/fi),0,1),r=i<Gn/fi?.2*Math.pow(Math.sin(Math.PI*s),.8)*Math.pow(Math.max(0,Math.cos(e)),3):0,o=new S(Math.sin(e)*t*n-.28*i,.05+i*Cl,Math.cos(e)*t*.68*n+r),a=Ze.smoothstep(Math.cos(e),.25,.65);for(let c of[-1.13,1.15]){let l=((o.x-c)/.36)**2+((o.y-1.68)/.33)**2;l<1&&(o.z+=.09*(1-l)**2*a)}return o}function Hd(i,e){let t=-Math.PI/2,n=Math.PI/2;for(let s=0;s<22;s++){let r=(t+n)/2;Ma(i,r).x<e?t=r:n=r}return(t+n)/2}var um=[Ma(Gn/fi,-Rn).x,Ma(Gn/fi,Rn).x],Ad=new Map;function JM(i){if(i===0||i>=Gn/fi)return[-Rn,Rn];let e=i.toFixed(7);if(Ad.has(e))return Ad.get(e);let t=i/(Gn/fi),n=Math.sin(Math.PI*t),s=[Hd(i,um[0]-.018*n),Hd(i,um[1]+.018*n)];return Ad.set(e,s),s}function Pl(i,e){if(i<=Gn/fi){let[t,n]=JM(i);e<-Rn?e=Ti(-Math.PI,t,(e+Math.PI)/(Math.PI-Rn)):e<=Rn?e=Ti(t,n,(e+Rn)/(Rn*2)):e=Ti(n,Math.PI,(e-Rn)/(Math.PI-Rn))}return Ma(i,e)}function Hm(i,e){let t=(e-.05)/Cl;return Ma(t,Hd(t,i)).z}function Xd(i=!1,e=!1){let t=[],n=[],s=i?-Rn:-Math.PI,r=i?Rn:Math.PI,o=i?20:Um,a=i?Gn:fi;for(let l=0;l<=a;l++)for(let h=0;h<=o;h++){let p=Pl(l/fi,Ti(s,r,h/o));e&&(p.z=Math.min(p.z-.24,.72)),t.push(p.x,p.y,p.z)}for(let l=0;l<a;l++)for(let h=0;h<o;h++){let p=Ti(s,r,(h+.5)/o);if(!i&&l<Gn&&Math.abs(p)<Rn-1e-4)continue;let f=l*(o+1)+h,d=f+1,g=f+o+2,x=f+o+1;n.push(f,d,x,d,g,x)}let c=new Ct;return c.setAttribute("position",new ct(t,3)),c.setIndex(n),c.computeVertexNormals(),c}var Nm=new gt({color:1513752,side:yn});Nm.onBeforeCompile=i=>{i.vertexShader=i.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
transformed += normal * 0.058;`)};function Fm(i,e){let t=new ht(i,Nm);return t.name="Black stone outline",e.add(t),t}var Om=Xd(),QM=Un(Om,Tl,Bn);QM.name="Figsaw";Fm(Om,Bn);var jM=Un(Xd(!0,!0),bm,Bn);jM.castShadow=!1;function Bm(i,e=!1){let t=[],n=[];for(let o=0;o<=40;o++){let a=Pl(Gn/fi,Ti(-Rn,Rn,o/40)),c=a.y+(e?-.008:.008);if(t.push(a.x,c,a.z-.075,a.x,c,.7),o<40){let l=o*2;n.push(l,l+1,l+2,l+1,l+3,l+2)}}let s=new Ct;s.setAttribute("position",new ct(t,3)),s.setIndex(n),s.computeVertexNormals();let r=Un(s,bm,i);r.castShadow=!1}Bm(Bn);var yr=new be;Bn.add(yr);function eE(){let i=Xd(!0),e=Array.from(i.attributes.position.array),t=Array.from(i.index.array),n=i.attributes.position.count;for(let o=0;o<n;o++)e.push(e[o*3],e[o*3+1],e[o*3+2]-.14);let s=t.slice();for(let o=0;o<s.length;o+=3)t.push(s[o]+n,s[o+2]+n,s[o+1]+n);let r=[];for(let o=0;o<=20;o++)r.push(o);for(let o=1;o<=Gn;o++)r.push(o*21+20);for(let o=19;o>=0;o--)r.push(Gn*21+o);for(let o=Gn-1;o>0;o--)r.push(o*21);for(let o=0;o<r.length;o++){let a=r[o],c=r[(o+1)%r.length];t.push(a,a+n,c,c,a+n,c+n)}return i.setAttribute("position",new ct(e,3)),i.setIndex(t),i.deleteAttribute("normal"),i.computeVertexNormals(),i}var zm=eE(),km=Tl.clone();km.onBeforeCompile=Tl.onBeforeCompile;Un(zm,km,yr);Fm(zm,yr);Bm(yr,!0);Gs(yr,qM,[Ud,$M-.025,.83],[.25,.016,.055]);var Vm=[];for(let i=0;i<=30;i++){let e=Pl(Gn/fi,Ti(-Rn,Rn,i/30));e.z+=.002,Vm.push(e)}So(Vm,.008,XM,Bn);for(let i of[-1,1]){let e=[];for(let t=4;t<=Gn;t++){let n=Pl(t/fi,i*Rn);n.z+=.009,e.push(n)}So(e,.033,new gt({color:1513752}),Bn)}var Gm=[],qd=ns(16061736,.36);qd.emissive.set(12127514);qd.emissiveIntensity=.12;var xl={headYaw:0,gazeYaw:0,gazePitch:0},Cd=new S,uo=new S,dm=new S,tE=new S(0,1,0),fm=new pt;for(let i of[-1,1]){let e=i*.42-.09,t=1.84+(i===-1?.045:0),n=Hm(e,t)+.044,s=new be;s.position.set(e,t,n),Bn.add(s),Gm.push(s),Gs(s,ns(1052693,.25),[0,0,0],[.156,.156,.075]),Gs(s,qd,[0,0,.055],[.084,.084,.029]),Gs(s,ns(657676,.32),[0,0,.074],[.039,.039,.016])}var vo=new be;vo.name="Red bow tie";vo.position.set(Ud,.4,Hm(Ud,.4)+.065);yr.add(vo);var Wm=new Vt({color:13046566,roughness:.76,sheen:.55,sheenColor:15747667,sheenRoughness:.82}),qs=new St;qs.moveTo(.055,.065);qs.bezierCurveTo(.18,.085,.32,.185,.43,.19);qs.quadraticCurveTo(.49,.19,.485,.12);qs.bezierCurveTo(.47,.03,.5,-.075,.48,-.14);qs.quadraticCurveTo(.47,-.195,.4,-.175);qs.bezierCurveTo(.27,-.14,.15,-.07,.055,-.06);qs.closePath();var nE=new on(qs,{depth:.055,bevelEnabled:!0,bevelSize:.018,bevelThickness:.018,bevelSegments:3,steps:1,curveSegments:18});for(let i of[-1,1]){let e=Un(nE,Wm,vo);e.scale.x=i,e.rotation.y=-i*.1;let t=ns(9965598,.9);for(let n of[-1,1])So([[i*.09,n*.026,.08],[i*.19,n*.055,.087],[i*.34,n*.11,.088]],.005,t,vo)}var Xm=Un(new Zt(1,24,16),Wm,vo);Xm.position.set(0,0,.07);Xm.scale.set(.105,.12,.075);var Yd=.26,fo=-.53*Yd+.0036;Vi.scale.setScalar(Yd);var yl=new Jt([[2.45,fo,-2.4],[2.05,fo,-1.7],[1.05,fo,-1.28],[.35,fo,-1.1],[.24,fo,-.66],[.12,fo,.1]].map(i=>new S(...i)),!1,"centripetal");yl.arcLengthDivisions=240;var qm=1,Ym=8.5,iE=yl.getLength(),hl=new S,Pd=new S,ki=document.querySelector("#figsaw-dialogue"),Zm=document.querySelector("#dialogue-announcement"),$m=document.querySelector("#game-countdown"),xa=document.querySelector("#countdown-announcement"),ya=null,Nd=300,vl=["I want to play a game...","Those who don't appreciate design do not deserve it.","Complete the design challenges to escape... but every 5 minutes one of your Figpals will be dropped into the tank of acid.","Let the games begin..."],_l=-1,Zd=1/0,ul=new S,gr=new S,dl=new ua,Id=new S,Km=0,po=!1,Fd=0,pm=!1,Od=0,$d=null;function Jm(i){let e=vl[i];_l=i,ki.classList.toggle("long-dialogue",e.length>80),ki.querySelector(".dialogue-bubble span").textContent=e,Zm.textContent=`Figsaw. ${e}`;let t=tm(e,$e.time);$d=bi?null:t,Zd=i<vl.length-1?t.startTime+t.duration+1:1/0,i===0&&(ya=t.startTime+t.duration)}function Kd(i){let e=i-Km-qm,t=bi?1:Ze.smoothstep(e,0,Ym);yl.getPointAt(t,hl),yl.getTangentAt(t,Pd),Vi.position.copy(hl),Vi.rotation.y=Math.atan2(Pd.x,Pd.z);let n=Math.atan2(Vs.x-hl.x,Vs.z-hl.z),s=Ze.euclideanModulo(n-Vi.rotation.y+Math.PI,Math.PI*2)-Math.PI;ZM(t*iE/Yd),t===1&&!po&&(po=!0,Fd=i,Fn.start($e.time,Tn,$e),Jm(0)),y0(po?i-Fd:-1,bi,xl),Bn.rotation.y=Ze.clamp(s*.58,-.7,.7)+xl.headYaw}Kd(0);wa.mark("characterBuilt");var{group:ba,laptop:Gi,catMug:Ta,acidLeaks:On,chargingKit:Wi,ketchupKey:ts,countdown:mo,setDisplayEnvironment:sE,update:rE,figpalHoists:ys,toggleHoist:oE}=W0(An,Vs);pi.add(ba);wa.mark("officeBuilt");var jt=j0(en,{canDetach:()=>ts.hasKey});pi.add(jt.group);var Kn=rm({laptop:Gi,restraint:jt,cameraPosition:Tn,state:$e}),fn=om({mug:Ta,camera:en,restraint:jt}),Ea=document.querySelector("#game-over"),Qm=Ea.querySelector(".game-over-content"),jm=document.querySelector("#restart-game"),Ml=document.querySelector("#mug-eye-impact"),Wn=!1;jm.addEventListener("click",()=>{Bd({skipIntro:!0}),mt.focus({preventScroll:!0})});var Ai=document.querySelector("#restraint-status"),pl=document.querySelector("#charging-hint"),_o=null,Mo=null,go="",Il=0,vs=em(()=>{if(!ts.hasKey){va("The shackle is locked. Find its key first.");return}jt.detach($e.time)&&(Ai.textContent="Instance detached. Your wrist is free. You can open the laptop, drink from the cat mug, or turn a tank drain valve.",mt.classList.remove("over-chain"),mt.setAttribute("aria-label",mt.getAttribute("aria-label").replace("Your wrist is chained to the rear pipes. Pour the glass ketchup bottle beside the cat mug, collect the key, then click or right-click the shackle and choose Detach instance to free your hand.","Your wrist is free. Click the laptop, cat mug, or a red tank drain valve to use it.")))},{canDetach:()=>ts.hasKey,onBlocked:()=>va("The shackle is locked. Find its key first.")}),El=q0(ys),xr=Y0(ys.speechAnchors,mt,ys.canSpeak),eg=X0(ys,xr),tg=p0(An);sE(tg.texture);jt.setEnvironment(tg.texture);On.bindTargets([ba,Vi]);f0(ba,{exclude:[Gi.object,Ta,ys.group,mo.group,Wi.group,ts.group]});wa.mark("scenePrepared");function aE(i){if(!po||El.active){ki.hidden=!0;return}Bn.localToWorld(ul.set(-.28,Cl+.24,0)),gr.copy(ul).project(en);let e=Math.min(.7,.4/(en.position.distanceTo(ul)*Math.tan(Ze.degToRad(en.fov/2))*en.aspect));if(gr.z<-1||gr.z>1||Math.abs(gr.x)>1+e||Math.abs(gr.y)>1){ki.hidden=!0;return}if(i>=Od){Od=i+.12,Id.copy(ul).sub(en.position);let r=Id.length();dl.set(en.position,Id.normalize()),dl.near=.06,dl.far=Math.max(.06,r-.035),pm=dl.intersectObject(ba,!0).length>0}if(pm){ki.hidden=!0;return}ki.hidden=!1;let t=mt.getBoundingClientRect(),n=t.left+(gr.x*.5+.5)*t.width,s=t.top+(-gr.y*.5+.5)*t.height;ki.style.transform=`translate3d(${n}px,${s-8}px,0) translate(-50%,-100%)`}var mm=new ua,gm=new Ne;function Jd(i){let e=mt.getBoundingClientRect();gm.set((i.clientX-e.left)/e.width*2-1,-(i.clientY-e.top)/e.height*2+1),mm.setFromCamera(gm,en);let t=mm.intersectObjects([ba,Vi,jt.group],!0).find(n=>{for(let s=n.object;s;s=s.parent)if(!s.visible)return!1;return!0});for(let n=t?.object;n;n=n.parent)if(n===jt.target||n===Gi.object||n===Ta||n===Bn||n.userData.chargingAction||n.userData.keyAction||Number.isInteger(n.userData.valveIndex)||Number.isInteger(n.userData.hoistIndex))return n;return null}function va(i){go=i,Il=$e.time+4.5,Ai.textContent=i}function cE(i){Kn.active||fn.active||Wn||On.dying||(Fn.cancel(),di=!1,i==="pour"?ts.pour($e.time)?va("You tip the bottle. Something metal is sliding through the ketchup\u2026"):va(ts.hint("pour")):i==="collect"&&ts.collect()&&(va("Shackle key collected. Click your shackle and choose Detach instance."),jt.requestReach($e.time)))}function Qd(i){!i||Kn.active||fn.active||Wn||On.dying||(jt.locked&&jt.requestReach($e.time),i==="charger"&&Wi.phase==="drawer"&&!Wi.drawerReady&&!jt.locked?go="Let the drawer finish opening.":go=Wi.use(i,$e.time,jt.locked),Il=$e.time+3.8,Ai.textContent=go,Fn.cancel(),di=!1)}function lE(){let i=$e.time<Il?go:_o?ts.hint(_o):Mo?Wi.hint(Mo):ts.hasKey&&jt.locked?"Shackle key collected \xB7 Click the shackle to unlock":Wi.hint(null);pl.textContent!==i&&(pl.textContent=i),pl.hidden=!i||Wn||fn.active||Kn.active}function ng(){if(!(Kn.active||fn.active||Wn||On.dying)){if(jt.locked){jt.requestReach($e.time),Ai.textContent="The chain pulls tight. You can't reach the laptop.";return}if(Wi.phase==="powered"){Qd("laptop");return}if(Gi.isOpen){ig();return}Kn.start($e.time)&&(_s(),Fn.cancel(),di=!1,Ai.textContent="You reach for the front edge of the laptop.")}}function ig(i=!1){!i&&!Gi.open()||(Ai.textContent="You lift the lid and let go. The laptop is open.",mt.classList.remove("over-laptop"),mt.setAttribute("aria-label",mt.getAttribute("aria-label").replace("a closed MacBook Pro","an open MacBook Pro").replace(" Click the laptop or press Enter to open it.","")))}function sg(){if(!(Kn.active||fn.active||Wn||On.dying)){if(jt.locked){jt.requestReach($e.time),Ai.textContent="The chain pulls tight. Detach the shackle before picking up the mug.";return}fn.start($e.time)&&(_s(),Fn.cancel(),di=!1,vs.hide(),mt.classList.remove("over-mug"),Ai.textContent="You pick up the cat mug by its handle and raise it for a drink.")}}function rg(i){if(!(Kn.active||fn.active||Wn||On.dying)){if(jt.locked){jt.requestReach($e.time),Ai.textContent="The chain pulls tight. Detach the shackle before turning a tank valve.";return}On.open(i,$e.time,jt.locked)&&(Fn.cancel(),di=!1,vs.hide(),Ai.textContent=`Tank ${i+1}'s valve spins open. Bubbling acid spills onto the floor and starts eating through everything it touches.`)}}function hE(){let i=0,e=1/0,t=new S;return ys.valves.forEach((n,s)=>{n.object.getWorldPosition(t);let r=t.distanceToSquared(Tn);r<e&&(e=r,i=s)}),i}function xm(i){Wn||(Wn=!0,_s(),vs.hide(),ki.hidden=!0,xr.hide(),document.body.classList.add("game-over"),mt.inert=!0,Qm.hidden=!1,jm.focus({preventScroll:!0}),Ai.textContent=i)}function og(i){if(fn.active||Wn||On.dying)return;let e=oE(i);if(!e)return;let t=ys.isLowered(i);t?xr.show(i,$e.time):xr.hide(i),document.querySelector("#hoist-status").textContent=t&&ys.canSpeak(i)?`${e} ${pa[i]}`:e}var di=!1,Ci=null,ml=null,Sl=0,uE=new Set(["KeyW","KeyA","KeyS","KeyD","KeyE","KeyQ"]),es=new Set,xo=i=>Ze.euclideanModulo(i+Math.PI,Math.PI*2)-Math.PI;function Bd({skipIntro:i=!1}={}){bl(),ts.reset(),_o=null,Wi.reset(),Mo=null,go="",Il=0,pl.hidden=!0,Wn=!1,On.reset(),fn.reset(),Ml.hidden=!0,Ml.style.opacity="0",Ea.hidden=!0,Ea.style.opacity="0",Qm.hidden=!0,document.body.classList.remove("game-over","mug-impact"),mt.inert=!1,Kn.cancel(),Fn.cancel(),jt.reset(),Gi.close(),vs.hide(),Ai.textContent="",mt.setAttribute("aria-label",kM),El.reset(),xr.hide(),eg.reset($e.time),_s(),di=!i,Km=$e.time-(i?qm+Ym:0),po=i,Fd=$e.time,ki.hidden=!0,ki.classList.remove("long-dialogue"),Zm.textContent="",$d=null,_l=i?vl.length-1:-1,Zd=1/0,$e.jaw=0,$e.talkUntil=0,Od=0,ya=null,mo.reset(),Nd=300,$m.textContent="05:00",xa.textContent="",i&&(ki.querySelector(".dialogue-bubble span").textContent=vl[_l],Fn.start($e.time,Tn,$e),Fn.update($e.time,Tn,$e,!0),Kd($e.time),mo.start(),xa.textContent="The five-minute countdown has started.")}function _s(){es.clear(),$e.space=!1,Ci=null}document.addEventListener("keydown",i=>{if(Wn){i.code==="KeyR"&&!i.repeat&&(i.preventDefault(),Bd(),mt.focus({preventScroll:!0}));return}if((Kn.active||fn.active||On.dying)&&i.code!=="KeyR"){i.preventDefault();return}if(!vs.active&&!(i.target.closest('input,textarea,select,[contenteditable="true"]')||i.metaKey||i.ctrlKey||i.altKey)){if(uE.has(i.code)){i.preventDefault(),Fn.cancel(),es.add(i.code),di=!1;return}i.target.closest("button")&&(i.code==="Space"||i.code==="Enter")||(i.code==="Enter"&&i.target===mt&&(i.preventDefault(),ng()),i.code==="KeyF"&&i.target===mt&&!i.repeat&&(i.preventDefault(),Qd(Wi.nextAction)),i.code==="KeyM"&&i.target===mt&&!i.repeat&&(i.preventDefault(),sg()),i.code==="KeyV"&&i.target===mt&&!i.repeat&&(i.preventDefault(),rg(hE())),/^Digit[1-3]$/.test(i.code)&&i.target===mt&&!i.repeat&&(i.preventDefault(),og(Number(i.code.slice(-1))-1)),i.code==="Space"&&(i.preventDefault(),$e.space=!0),i.code==="KeyR"&&!i.repeat&&Bd(),i.code.startsWith("Arrow")&&(i.preventDefault(),Fn.cancel(),di=!1,i.code==="ArrowLeft"&&($e.yaw=xo($e.yaw+.08)),i.code==="ArrowRight"&&($e.yaw=xo($e.yaw-.08)),i.code==="ArrowUp"&&($e.pitch=Ze.clamp($e.pitch+.05,-1.4,1.4)),i.code==="ArrowDown"&&($e.pitch=Ze.clamp($e.pitch-.05,-1.4,1.4))))}});document.addEventListener("keyup",i=>{es.delete(i.code),i.code==="Space"&&($e.space=!1)});window.addEventListener("blur",_s);document.addEventListener("visibilitychange",()=>{document.hidden&&_s()});mt.addEventListener("contextmenu",i=>{i.preventDefault(),_s(),!(fn.active||Wn||On.dying)&&(jt.locked&&Jd(i)===jt.target?vs.show(i.clientX,i.clientY):vs.hide())});mt.addEventListener("pointerdown",i=>{Kn.active||fn.active||Wn||On.dying||i.button===0&&Ci===null&&(mt.focus({preventScroll:!0}),Ci=i.pointerId,di=!1,Sl=0,ml={x:i.clientX,y:i.clientY},mt.setPointerCapture(i.pointerId))});mt.addEventListener("pointermove",i=>{if(Kn.active||fn.active||Wn||On.dying)return;if(Ci===null){let n=Jd(i);_o=n?.userData.keyAction||null,mt.classList.toggle("over-key",!!_o),Mo=n?.userData.chargingAction||(n===Gi.object&&Wi.phase==="powered"?"laptop":null),mt.classList.toggle("over-charging",!!Mo),mt.classList.toggle("over-laptop",n===Gi.object&&!Gi.isOpen),mt.classList.toggle("over-hoist",Number.isInteger(n?.userData.hoistIndex)),mt.classList.toggle("over-mug",n===Ta),mt.classList.toggle("over-valve",Number.isInteger(n?.userData.valveIndex)),mt.classList.toggle("over-chain",n===jt.target&&jt.locked);return}if(i.pointerId!==Ci)return;let e=i.clientX-ml.x,t=i.clientY-ml.y;Sl+=Math.abs(e)+Math.abs(t),Sl>=6&&Fn.cancel(),$e.yaw=xo($e.yaw-e*.004),$e.pitch=Ze.clamp($e.pitch+t*.003,-1.4,1.4),ml={x:i.clientX,y:i.clientY}});mt.addEventListener("pointerup",i=>{if(i.pointerId===Ci&&(Ci=null,Sl<6)){let e=Jd(i);e?.userData.keyAction?cE(e.userData.keyAction):e===jt.target&&jt.locked?vs.show(i.clientX,i.clientY):e?.userData.chargingAction?Qd(e.userData.chargingAction):e===Gi.object?ng():e===Ta?sg():Number.isInteger(e?.userData.valveIndex)?rg(e.userData.valveIndex):e===Bn?$e.talkUntil=$e.time+1.8:Number.isInteger(e?.userData.hoistIndex)&&og(e.userData.hoistIndex)}});mt.addEventListener("pointerleave",()=>{_o=null,Mo=null,mt.classList.remove("over-key","over-laptop","over-hoist","over-chain","over-mug","over-valve","over-charging")});mt.addEventListener("pointercancel",i=>{i.pointerId===Ci&&(Ci=null)});mt.addEventListener("lostpointercapture",i=>{i.pointerId===Ci&&(Ci=null)});mt.addEventListener("wheel",i=>{i.preventDefault(),!(Kn.active||fn.active||Wn||On.dying)&&(Fn.cancel(),di=!1,$e.zoom=Ze.clamp($e.zoom+i.deltaY*5e-4,.78,1))},{passive:!1});var Ll=document.querySelector("#copy-view"),ym=Ll.querySelector("span"),vm=document.querySelector("#copy-status"),zd=document.querySelector("#copy-fallback"),Ld=document.querySelector("#view-text"),_m;function dE(){let i=n=>n.toArray().map(s=>Number(s.toFixed(6))),e=en.getWorldDirection(new S),t={position:i(en.position),lookAt:i(en.position.clone().add(e)),fov:Number(en.fov.toFixed(4))};return`Set this as the default camera view for Figsaw:
${JSON.stringify(t,null,2)}`}function fE(i){let e=document.createElement("textarea");e.value=i,e.readOnly=!0,e.style.cssText="position:fixed;left:-9999px;top:0;font-size:16px",document.body.append(e),e.focus(),e.select(),e.setSelectionRange(0,i.length);let t=!1;try{t=document.execCommand("copy")}catch{}return e.remove(),Ll.focus({preventScroll:!0}),t}Ll.addEventListener("click",async()=>{let i=dE();Ld.value=i,clearTimeout(_m);let e=!1;try{navigator.clipboard?.writeText&&(await navigator.clipboard.writeText(i),e=!0)}catch{}e||(e=fE(i)),e?(zd.hidden=!0,ym.textContent="Copied",vm.textContent="View copied. Paste it into the chat to set the default view."):(zd.hidden=!1,Ld.focus(),Ld.select(),vm.textContent="Select and copy the view below, then paste it into the chat."),_m=setTimeout(()=>{ym.textContent="Copy view"},2200)});document.querySelector("#close-copy").addEventListener("click",()=>{zd.hidden=!0,Ll.focus()});function jd(){let{width:i,height:e}=mt.getBoundingClientRect();!i||!e||(An.setSize(i,e,!1),en.aspect=i/e,en.fov=Eo.fov*$e.zoom,en.updateProjectionMatrix())}var pE=new ResizeObserver(jd);pE.observe(mt);jd();var wl=new Kc,ag=!1,Sa=0,ga=0,Mm=-1/0,Em=0,Dd=0,fl=0;function bl(){ag&&!Sa&&!document.hidden&&(Sa=requestAnimationFrame(cg))}document.addEventListener("visibilitychange",()=>{document.hidden?(cancelAnimationFrame(Sa),Sa=0,_s()):(ga=0,wl.getDelta(),bl())});function cg(){if(Sa=0,document.hidden)return;if(Wn){wl.getDelta();return}let i=performance.now(),e=ga?i-ga:0;if(ga&&e<1e3/Ut.maxFps-1){bl();return}ga=i;let t=Math.min(wl.getDelta(),.04),n=$e.time+=t,s=1-Math.exp(-t*12);di&&($e.yaw=xo($e.yaw+xo(ks.yaw-$e.yaw)*s*.5),$e.pitch=Ti($e.pitch,ks.pitch,s*.5),$e.zoom=Ti($e.zoom,1,s*.5),Tn.lerp(Vs,s*.5),Math.abs(xo($e.yaw-ks.yaw))+Math.abs($e.pitch-ks.pitch)+Math.abs($e.zoom-1)+Tn.distanceTo(Vs)<.005&&($e.yaw=ks.yaw,$e.pitch=ks.pitch,$e.zoom=1,Tn.copy(Vs),di=!1)),Kd(n),po&&n>=Zd&&Jm(_l+1),Fn.active&&(di=!1),(es.size||Ci!==null)&&Fn.cancel(),(Kn.active||fn.active)&&Fn.cancel(),Fn.update(n,Tn,$e,bi),Kn.update(n,bi)&&ig(!0);let r=$e.yaw,o=Number(es.has("KeyW"))-Number(es.has("KeyS")),a=Number(es.has("KeyD"))-Number(es.has("KeyA")),c=Number(es.has("KeyE"))-Number(es.has("KeyQ"));Rd.set(-Math.sin(r)*o+Math.cos(r)*a,c,-Math.cos(r)*o-Math.sin(r)*a),Rd.lengthSq()>0&&(Tn.addScaledVector(Rd.normalize(),t*1.05),Tn.x=Ze.clamp(Tn.x,-3.72,3.72),Tn.y=Ze.clamp(Tn.y,.08,3),Tn.z=Ze.clamp(Tn.z,-3.78,4.25)),en.position.copy(Tn),cm.set(-Math.sin(r)*Math.cos($e.pitch),Math.sin($e.pitch),-Math.cos(r)*Math.cos($e.pitch)),am.copy(Tn).add(cm),en.lookAt(am);let l=Eo.fov*$e.zoom;Math.abs(en.fov-l)>.001&&(en.fov=l,en.updateProjectionMatrix()),ya!==null&&n>=ya&&(mo.start(),ya=null,xa.textContent="The five-minute countdown has started.");let h=mo.update();h!==Nd&&($m.textContent=al(h),Nd=h,h===0&&(xa.textContent="The countdown has reached zero.")),El.update(mo.status,n)&&(xr.showAll(n),xa.textContent=`Time is up. All three Figpals are lowering into the green liquid. ${pa.filter((y,M)=>ys.canSpeak(M)).join(" ")}`);let p=nm($d,n),f=n<$e.talkUntil?.16+.7*Math.sin(n*10)**2:0,d=$e.space?1:Math.max(p,f);$e.jaw=Ti($e.jaw,d,s),yr.position.y=-$e.jaw*hm,Bn.position.y=Dm+$e.jaw*hm*Lm;let g=On.update(n,t,Tn,en,bi);On.dying&&_s();let x=fn.update(n,bi),m=Math.max(fn.blackout,On.blackout(n));Ml.hidden=fn.eyeImpact<=0||m>=1,fn.eyeImpact>0&&(Ml.style.opacity=String(fn.eyeImpact),document.body.classList.add("mug-impact")),m>0&&(Ea.hidden=!1,Ea.style.opacity=String(m),document.body.classList.add("mug-impact")),g?xm("The corrosive green liquid reaches you. Game over."):x&&xm("The mug's pointed ears hit your eyes. Everything goes dark. Game over."),jt.update(n,bi,vs.active||fn.active,fn.handPose||Kn.handPose),Gi.update(t,bi),Wi.update(n,bi),lE(),Xi.intensity=Sm*rE(n,bi,en.position),Vi.updateMatrixWorld(!0),Bn.localToWorld(Cd.set(-.09,1.86,1)),uo.copy(en.position).sub(Cd);let u=Math.max(1,uo.length());uo.normalize().applyAxisAngle(tE,xl.gazeYaw),uo.y+=xl.gazePitch,uo.normalize(),dm.copy(Cd).addScaledVector(uo,u);for(let y of Gm)fm.copy(y.quaternion),y.lookAt(dm),bi||y.quaternion.copy(fm.slerp(y.quaternion,1-Math.exp(-t*16)));n-Mm>=1/Ut.shadowHz&&(An.shadowMap.needsUpdate=!0,Mm=n),An.render(pi,en),aE(n),eg.update(n,El.active),xr.update(en,n),wa.frame(i);let E=performance.now()-i;fl++,(E>Ut.targetFrameMs||e>Ut.targetFrameMs*1.4)&&Dd++,n-Em>4&&(fl>30&&Dd/fl>.65&&An.getPixelRatio()>Ut.minPixelRatio&&(An.setPixelRatio(Math.max(Ut.minPixelRatio,An.getPixelRatio()-.25)),jd()),Em=n,Dd=0,fl=0),bl()}An.compileAsync(pi,en).then(()=>{wa.mark("shadersReady"),ag=!0,wl.getDelta(),cg(),document.querySelector("#loading-status")?.remove()}).catch(i=>{console.error(i);let e=document.querySelector("#loading-status");e&&(e.textContent="The room could not load. Please reload to try again.")});mt.addEventListener("webglcontextlost",i=>i.preventDefault());mt.addEventListener("webglcontextrestored",()=>location.reload());
