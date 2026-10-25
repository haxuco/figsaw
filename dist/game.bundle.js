var Fg=0,wf=1,Og=2;var Fp=1,Ku=2,ls=3,Ji=0,yn=1,Lt=2,As=0,Gr=1,_c=2,bf=3,Tf=4,zg=5,tr=100,Bg=101,kg=102,Vg=103,Gg=104,Wg=200,Xg=201,qg=202,Yg=203,Ph=204,Ih=205,Zg=206,$g=207,Kg=208,Jg=209,Qg=210,jg=211,e1=212,t1=213,n1=214,Lh=0,Dh=1,Uh=2,Yr=3,Hh=4,Nh=5,Fh=6,Oh=7,Op=0,i1=1,s1=2,Cs=0,r1=1,o1=2,a1=3,Ju=4,c1=5,l1=6,h1=7;var zp=300,Zr=301,$r=302,Ko=303,zh=304,Kc=306,rr=1e3,sr=1001,Bh=1002,ni=1003,u1=1004;var Ba=1005;var gn=1006,$l=1007;var Fi=1008;var us=1009,Bp=1010,kp=1011,Jo=1012,Qu=1013,or=1014,Ki=1015,ua=1016,ju=1017,ed=1018,Kr=1020,Vp=35902,Gp=1021,Wp=1022,di=1023,Xp=1024,qp=1025,Wr=1026,Jr=1027,td=1028,nd=1029,Yp=1030,id=1031;var sd=1033,pc=33776,mc=33777,gc=33778,xc=33779,kh=35840,Vh=35841,Gh=35842,Wh=35843,Xh=36196,qh=37492,Yh=37496,Zh=37808,$h=37809,Kh=37810,Jh=37811,Qh=37812,jh=37813,eu=37814,tu=37815,nu=37816,iu=37817,su=37818,ru=37819,ou=37820,au=37821,yc=36492,cu=36494,lu=36495,Zp=36283,hu=36284,uu=36285,du=36286;var Mc=2300,fu=2301,Kl=2302,Rf=2400,Af=2401,Cf=2402;var d1=3200,rd=3201;var $p=0,f1=1,Rs="",pt="srgb",Fs="srgb-linear",od="display-p3",Jc="display-p3-linear",Ec="linear",on="srgb",Sc="rec709",wc="p3";var br=7680;var Pf=519,p1=512,m1=513,g1=514,Kp=515,x1=516,y1=517,v1=518,_1=519,If=35044,Un=35048;var Lf="300 es",hs=2e3,bc=2001,Is=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let s=this._listeners[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let n=this._listeners[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},Vn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Df=1234567,Xo=Math.PI/180,Qr=180/Math.PI;function dr(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Vn[i&255]+Vn[i>>8&255]+Vn[i>>16&255]+Vn[i>>24&255]+"-"+Vn[e&255]+Vn[e>>8&255]+"-"+Vn[e>>16&15|64]+Vn[e>>24&255]+"-"+Vn[t&63|128]+Vn[t>>8&255]+"-"+Vn[t>>16&255]+Vn[t>>24&255]+Vn[n&255]+Vn[n>>8&255]+Vn[n>>16&255]+Vn[n>>24&255]).toLowerCase()}function Sn(i,e,t){return Math.max(e,Math.min(t,i))}function ad(i,e){return(i%e+e)%e}function M1(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function E1(i,e,t){return i!==e?(t-i)/(e-i):0}function qo(i,e,t){return(1-t)*i+t*e}function S1(i,e,t,n){return qo(i,e,1-Math.exp(-t*n))}function w1(i,e=1){return e-Math.abs(ad(i,e*2)-e)}function b1(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function T1(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function R1(i,e){return i+Math.floor(Math.random()*(e-i+1))}function A1(i,e){return i+Math.random()*(e-i)}function C1(i){return i*(.5-Math.random())}function P1(i){i!==void 0&&(Df=i);let e=Df+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function I1(i){return i*Xo}function L1(i){return i*Qr}function D1(i){return(i&i-1)===0&&i!==0}function U1(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function H1(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function N1(i,e,t,n,s){let r=Math.cos,o=Math.sin,a=r(t/2),c=o(t/2),l=r((e+n)/2),h=o((e+n)/2),f=r((e-n)/2),p=o((e-n)/2),d=r((n-e)/2),g=o((n-e)/2);switch(s){case"XYX":i.set(a*h,c*f,c*p,a*l);break;case"YZY":i.set(c*p,a*h,c*f,a*l);break;case"ZXZ":i.set(c*f,c*p,a*h,a*l);break;case"XZX":i.set(a*h,c*g,c*d,a*l);break;case"YXY":i.set(c*d,a*h,c*g,a*l);break;case"ZYZ":i.set(c*g,c*d,a*h,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Br(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Zn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var Ze={DEG2RAD:Xo,RAD2DEG:Qr,generateUUID:dr,clamp:Sn,euclideanModulo:ad,mapLinear:M1,inverseLerp:E1,lerp:qo,damp:S1,pingpong:w1,smoothstep:b1,smootherstep:T1,randInt:R1,randFloat:A1,randFloatSpread:C1,seededRandom:P1,degToRad:I1,radToDeg:L1,isPowerOfTwo:D1,ceilPowerOfTwo:U1,floorPowerOfTwo:H1,setQuaternionFromProperEuler:N1,normalize:Zn,denormalize:Br},Ne=class i{constructor(e=0,t=0){i.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Sn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},vt=class i{constructor(e,t,n,s,r,o,a,c,l){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,c,l)}set(e,t,n,s,r,o,a,c,l){let h=this.elements;return h[0]=e,h[1]=s,h[2]=a,h[3]=t,h[4]=r,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],f=n[7],p=n[2],d=n[5],g=n[8],x=s[0],m=s[3],u=s[6],E=s[1],y=s[4],M=s[7],C=s[2],A=s[5],T=s[8];return r[0]=o*x+a*E+c*C,r[3]=o*m+a*y+c*A,r[6]=o*u+a*M+c*T,r[1]=l*x+h*E+f*C,r[4]=l*m+h*y+f*A,r[7]=l*u+h*M+f*T,r[2]=p*x+d*E+g*C,r[5]=p*m+d*y+g*A,r[8]=p*u+d*M+g*T,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8];return t*o*h-t*a*l-n*r*h+n*a*c+s*r*l-s*o*c}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],f=h*o-a*l,p=a*c-h*r,d=l*r-o*c,g=t*f+n*p+s*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/g;return e[0]=f*x,e[1]=(s*l-h*n)*x,e[2]=(a*n-s*o)*x,e[3]=p*x,e[4]=(h*t-s*c)*x,e[5]=(s*r-a*t)*x,e[6]=d*x,e[7]=(n*c-l*t)*x,e[8]=(o*t-n*r)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+e,-s*l,s*c,-s*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Jl.makeScale(e,t)),this}rotate(e){return this.premultiply(Jl.makeRotation(-e)),this}translate(e,t){return this.premultiply(Jl.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Jl=new vt;function Jp(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Qo(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function F1(){let i=Qo("canvas");return i.style.display="block",i}var Uf={};function vc(i){i in Uf||(Uf[i]=!0,console.warn(i))}function O1(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}function z1(i){let e=i.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function B1(i){let e=i.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}var Hf=new vt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Nf=new vt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Ho={[Fs]:{transfer:Ec,primaries:Sc,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i,fromReference:i=>i},[pt]:{transfer:on,primaries:Sc,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[Jc]:{transfer:Ec,primaries:wc,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.applyMatrix3(Nf),fromReference:i=>i.applyMatrix3(Hf)},[od]:{transfer:on,primaries:wc,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.convertSRGBToLinear().applyMatrix3(Nf),fromReference:i=>i.applyMatrix3(Hf).convertLinearToSRGB()}},k1=new Set([Fs,Jc]),qt={enabled:!0,_workingColorSpace:Fs,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!k1.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;let n=Ho[e].toReference,s=Ho[t].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this._workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this._workingColorSpace)},getPrimaries:function(i){return Ho[i].primaries},getTransfer:function(i){return i===Rs?Ec:Ho[i].transfer},getLuminanceCoefficients:function(i,e=this._workingColorSpace){return i.fromArray(Ho[e].luminanceCoefficients)}};function Xr(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ql(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Tr,pu=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Tr===void 0&&(Tr=Qo("canvas")),Tr.width=e.width,Tr.height=e.height;let n=Tr.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Tr}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Qo("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Xr(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Xr(t[n]/255)*255):t[n]=Xr(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},V1=0,Tc=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:V1++}),this.uuid=dr(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(jl(s[o].image)):r.push(jl(s[o]))}else r=jl(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function jl(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?pu.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var G1=0,Kn=class i extends Is{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=sr,s=sr,r=gn,o=Fi,a=di,c=us,l=i.DEFAULT_ANISOTROPY,h=Rs){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:G1++}),this.uuid=dr(),this.name="",this.source=new Tc(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Ne(0,0),this.repeat=new Ne(1,1),this.center=new Ne(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new vt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==zp)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case rr:e.x=e.x-Math.floor(e.x);break;case sr:e.x=e.x<0?0:1;break;case Bh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case rr:e.y=e.y-Math.floor(e.y);break;case sr:e.y=e.y<0?0:1;break;case Bh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Kn.DEFAULT_IMAGE=null;Kn.DEFAULT_MAPPING=zp;Kn.DEFAULT_ANISOTROPY=1;var Kt=class i{constructor(e=0,t=0,n=0,s=1){i.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,c=e.elements,l=c[0],h=c[4],f=c[8],p=c[1],d=c[5],g=c[9],x=c[2],m=c[6],u=c[10];if(Math.abs(h-p)<.01&&Math.abs(f-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+p)<.1&&Math.abs(f+x)<.1&&Math.abs(g+m)<.1&&Math.abs(l+d+u-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let y=(l+1)/2,M=(d+1)/2,C=(u+1)/2,A=(h+p)/4,T=(f+x)/4,P=(g+m)/4;return y>M&&y>C?y<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(y),s=A/n,r=T/n):M>C?M<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(M),n=A/s,r=P/s):C<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(C),n=T/r,s=P/r),this.set(n,s,r,t),this}let E=Math.sqrt((m-g)*(m-g)+(f-x)*(f-x)+(p-h)*(p-h));return Math.abs(E)<.001&&(E=1),this.x=(m-g)/E,this.y=(f-x)/E,this.z=(p-h)/E,this.w=Math.acos((l+d+u-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},mu=class extends Is{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Kt(0,0,e,t),this.scissorTest=!1,this.viewport=new Kt(0,0,e,t);let s={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:gn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let r=new Kn(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,s=e.textures.length;n<s;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new Tc(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},ds=class extends mu{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Rc=class extends Kn{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=ni,this.minFilter=ni,this.wrapR=sr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var gu=class extends Kn{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=ni,this.minFilter=ni,this.wrapR=sr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var mt=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let c=n[s+0],l=n[s+1],h=n[s+2],f=n[s+3],p=r[o+0],d=r[o+1],g=r[o+2],x=r[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=h,e[t+3]=f;return}if(a===1){e[t+0]=p,e[t+1]=d,e[t+2]=g,e[t+3]=x;return}if(f!==x||c!==p||l!==d||h!==g){let m=1-a,u=c*p+l*d+h*g+f*x,E=u>=0?1:-1,y=1-u*u;if(y>Number.EPSILON){let C=Math.sqrt(y),A=Math.atan2(C,u*E);m=Math.sin(m*A)/C,a=Math.sin(a*A)/C}let M=a*E;if(c=c*m+p*M,l=l*m+d*M,h=h*m+g*M,f=f*m+x*M,m===1-a){let C=1/Math.sqrt(c*c+l*l+h*h+f*f);c*=C,l*=C,h*=C,f*=C}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,s,r,o){let a=n[s],c=n[s+1],l=n[s+2],h=n[s+3],f=r[o],p=r[o+1],d=r[o+2],g=r[o+3];return e[t]=a*g+h*f+c*d-l*p,e[t+1]=c*g+h*p+l*f-a*d,e[t+2]=l*g+h*d+a*p-c*f,e[t+3]=h*g-a*f-c*p-l*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(s/2),f=a(r/2),p=c(n/2),d=c(s/2),g=c(r/2);switch(o){case"XYZ":this._x=p*h*f+l*d*g,this._y=l*d*f-p*h*g,this._z=l*h*g+p*d*f,this._w=l*h*f-p*d*g;break;case"YXZ":this._x=p*h*f+l*d*g,this._y=l*d*f-p*h*g,this._z=l*h*g-p*d*f,this._w=l*h*f+p*d*g;break;case"ZXY":this._x=p*h*f-l*d*g,this._y=l*d*f+p*h*g,this._z=l*h*g+p*d*f,this._w=l*h*f-p*d*g;break;case"ZYX":this._x=p*h*f-l*d*g,this._y=l*d*f+p*h*g,this._z=l*h*g-p*d*f,this._w=l*h*f+p*d*g;break;case"YZX":this._x=p*h*f+l*d*g,this._y=l*d*f+p*h*g,this._z=l*h*g-p*d*f,this._w=l*h*f-p*d*g;break;case"XZY":this._x=p*h*f-l*d*g,this._y=l*d*f-p*h*g,this._z=l*h*g+p*d*f,this._w=l*h*f+p*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],c=t[9],l=t[2],h=t[6],f=t[10],p=n+a+f;if(p>0){let d=.5/Math.sqrt(p+1);this._w=.25/d,this._x=(h-c)*d,this._y=(r-l)*d,this._z=(o-s)*d}else if(n>a&&n>f){let d=2*Math.sqrt(1+n-a-f);this._w=(h-c)/d,this._x=.25*d,this._y=(s+o)/d,this._z=(r+l)/d}else if(a>f){let d=2*Math.sqrt(1+a-n-f);this._w=(r-l)/d,this._x=(s+o)/d,this._y=.25*d,this._z=(c+h)/d}else{let d=2*Math.sqrt(1+f-n-a);this._w=(o-s)/d,this._x=(r+l)/d,this._y=(c+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Sn(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+o*a+s*l-r*c,this._y=s*h+o*c+r*a-n*l,this._z=r*h+o*l+n*c-s*a,this._w=o*h-n*a-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,s=this._y,r=this._z,o=this._w,a=o*e._w+n*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;let c=1-a*a;if(c<=Number.EPSILON){let d=1-t;return this._w=d*o+t*this._w,this._x=d*n+t*this._x,this._y=d*s+t*this._y,this._z=d*r+t*this._z,this.normalize(),this}let l=Math.sqrt(c),h=Math.atan2(l,a),f=Math.sin((1-t)*h)/l,p=Math.sin(t*h)/l;return this._w=o*f+this._w*p,this._x=n*f+this._x*p,this._y=s*f+this._y*p,this._z=r*f+this._z*p,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},S=class i{constructor(e=0,t=0,n=0){i.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Ff.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ff.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*s-a*n),h=2*(a*t-r*s),f=2*(r*n-o*t);return this.x=t+c*l+o*f-a*h,this.y=n+c*h+a*l-r*f,this.z=s+c*f+r*h-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,c=t.z;return this.x=s*c-r*a,this.y=r*o-n*c,this.z=n*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return eh.copy(this).projectOnVector(e),this.sub(eh)}reflect(e){return this.sub(eh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Sn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},eh=new S,Ff=new mt,Dn=class{constructor(e=new S(1/0,1/0,1/0),t=new S(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Ui.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Ui.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Ui.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Ui):Ui.fromBufferAttribute(r,o),Ui.applyMatrix4(e.matrixWorld),this.expandByPoint(Ui);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ka.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ka.copy(n.boundingBox)),ka.applyMatrix4(e.matrixWorld),this.union(ka)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ui),Ui.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(No),Va.subVectors(this.max,No),Rr.subVectors(e.a,No),Ar.subVectors(e.b,No),Cr.subVectors(e.c,No),Ms.subVectors(Ar,Rr),Es.subVectors(Cr,Ar),Zs.subVectors(Rr,Cr);let t=[0,-Ms.z,Ms.y,0,-Es.z,Es.y,0,-Zs.z,Zs.y,Ms.z,0,-Ms.x,Es.z,0,-Es.x,Zs.z,0,-Zs.x,-Ms.y,Ms.x,0,-Es.y,Es.x,0,-Zs.y,Zs.x,0];return!th(t,Rr,Ar,Cr,Va)||(t=[1,0,0,0,1,0,0,0,1],!th(t,Rr,Ar,Cr,Va))?!1:(Ga.crossVectors(Ms,Es),t=[Ga.x,Ga.y,Ga.z],th(t,Rr,Ar,Cr,Va))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ui).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ui).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ss[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ss[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ss[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ss[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ss[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ss[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ss[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ss[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ss),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},ss=[new S,new S,new S,new S,new S,new S,new S,new S],Ui=new S,ka=new Dn,Rr=new S,Ar=new S,Cr=new S,Ms=new S,Es=new S,Zs=new S,No=new S,Va=new S,Ga=new S,$s=new S;function th(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){$s.fromArray(i,r);let a=s.x*Math.abs($s.x)+s.y*Math.abs($s.y)+s.z*Math.abs($s.z),c=e.dot($s),l=t.dot($s),h=n.dot($s);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}var W1=new Dn,Fo=new S,nh=new S,Ls=class{constructor(e=new S,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):W1.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Fo.subVectors(e,this.center);let t=Fo.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Fo,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(nh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Fo.copy(e.center).add(nh)),this.expandByPoint(Fo.copy(e.center).sub(nh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},rs=new S,ih=new S,Wa=new S,Ss=new S,sh=new S,Xa=new S,rh=new S,jo=class{constructor(e=new S,t=new S(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,rs)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=rs.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(rs.copy(this.origin).addScaledVector(this.direction,t),rs.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){ih.copy(e).add(t).multiplyScalar(.5),Wa.copy(t).sub(e).normalize(),Ss.copy(this.origin).sub(ih);let r=e.distanceTo(t)*.5,o=-this.direction.dot(Wa),a=Ss.dot(this.direction),c=-Ss.dot(Wa),l=Ss.lengthSq(),h=Math.abs(1-o*o),f,p,d,g;if(h>0)if(f=o*c-a,p=o*a-c,g=r*h,f>=0)if(p>=-g)if(p<=g){let x=1/h;f*=x,p*=x,d=f*(f+o*p+2*a)+p*(o*f+p+2*c)+l}else p=r,f=Math.max(0,-(o*p+a)),d=-f*f+p*(p+2*c)+l;else p=-r,f=Math.max(0,-(o*p+a)),d=-f*f+p*(p+2*c)+l;else p<=-g?(f=Math.max(0,-(-o*r+a)),p=f>0?-r:Math.min(Math.max(-r,-c),r),d=-f*f+p*(p+2*c)+l):p<=g?(f=0,p=Math.min(Math.max(-r,-c),r),d=p*(p+2*c)+l):(f=Math.max(0,-(o*r+a)),p=f>0?r:Math.min(Math.max(-r,-c),r),d=-f*f+p*(p+2*c)+l);else p=o>0?-r:r,f=Math.max(0,-(o*p+a)),d=-f*f+p*(p+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(ih).addScaledVector(Wa,p),d}intersectSphere(e,t){rs.subVectors(e.center,this.origin);let n=rs.dot(this.direction),s=rs.dot(rs)-n*n,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,c,l=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,p=this.origin;return l>=0?(n=(e.min.x-p.x)*l,s=(e.max.x-p.x)*l):(n=(e.max.x-p.x)*l,s=(e.min.x-p.x)*l),h>=0?(r=(e.min.y-p.y)*h,o=(e.max.y-p.y)*h):(r=(e.max.y-p.y)*h,o=(e.min.y-p.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),f>=0?(a=(e.min.z-p.z)*f,c=(e.max.z-p.z)*f):(a=(e.max.z-p.z)*f,c=(e.min.z-p.z)*f),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,rs)!==null}intersectTriangle(e,t,n,s,r){sh.subVectors(t,e),Xa.subVectors(n,e),rh.crossVectors(sh,Xa);let o=this.direction.dot(rh),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ss.subVectors(this.origin,e);let c=a*this.direction.dot(Xa.crossVectors(Ss,Xa));if(c<0)return null;let l=a*this.direction.dot(sh.cross(Ss));if(l<0||c+l>o)return null;let h=-a*Ss.dot(rh);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Tt=class i{constructor(e,t,n,s,r,o,a,c,l,h,f,p,d,g,x,m){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,c,l,h,f,p,d,g,x,m)}set(e,t,n,s,r,o,a,c,l,h,f,p,d,g,x,m){let u=this.elements;return u[0]=e,u[4]=t,u[8]=n,u[12]=s,u[1]=r,u[5]=o,u[9]=a,u[13]=c,u[2]=l,u[6]=h,u[10]=f,u[14]=p,u[3]=d,u[7]=g,u[11]=x,u[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,s=1/Pr.setFromMatrixColumn(e,0).length(),r=1/Pr.setFromMatrixColumn(e,1).length(),o=1/Pr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),f=Math.sin(r);if(e.order==="XYZ"){let p=o*h,d=o*f,g=a*h,x=a*f;t[0]=c*h,t[4]=-c*f,t[8]=l,t[1]=d+g*l,t[5]=p-x*l,t[9]=-a*c,t[2]=x-p*l,t[6]=g+d*l,t[10]=o*c}else if(e.order==="YXZ"){let p=c*h,d=c*f,g=l*h,x=l*f;t[0]=p+x*a,t[4]=g*a-d,t[8]=o*l,t[1]=o*f,t[5]=o*h,t[9]=-a,t[2]=d*a-g,t[6]=x+p*a,t[10]=o*c}else if(e.order==="ZXY"){let p=c*h,d=c*f,g=l*h,x=l*f;t[0]=p-x*a,t[4]=-o*f,t[8]=g+d*a,t[1]=d+g*a,t[5]=o*h,t[9]=x-p*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){let p=o*h,d=o*f,g=a*h,x=a*f;t[0]=c*h,t[4]=g*l-d,t[8]=p*l+x,t[1]=c*f,t[5]=x*l+p,t[9]=d*l-g,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){let p=o*c,d=o*l,g=a*c,x=a*l;t[0]=c*h,t[4]=x-p*f,t[8]=g*f+d,t[1]=f,t[5]=o*h,t[9]=-a*h,t[2]=-l*h,t[6]=d*f+g,t[10]=p-x*f}else if(e.order==="XZY"){let p=o*c,d=o*l,g=a*c,x=a*l;t[0]=c*h,t[4]=-f,t[8]=l*h,t[1]=p*f+x,t[5]=o*h,t[9]=d*f-g,t[2]=g*f-d,t[6]=a*h,t[10]=x*f+p}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(X1,e,q1)}lookAt(e,t,n){let s=this.elements;return hi.subVectors(e,t),hi.lengthSq()===0&&(hi.z=1),hi.normalize(),ws.crossVectors(n,hi),ws.lengthSq()===0&&(Math.abs(n.z)===1?hi.x+=1e-4:hi.z+=1e-4,hi.normalize(),ws.crossVectors(n,hi)),ws.normalize(),qa.crossVectors(hi,ws),s[0]=ws.x,s[4]=qa.x,s[8]=hi.x,s[1]=ws.y,s[5]=qa.y,s[9]=hi.y,s[2]=ws.z,s[6]=qa.z,s[10]=hi.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],f=n[5],p=n[9],d=n[13],g=n[2],x=n[6],m=n[10],u=n[14],E=n[3],y=n[7],M=n[11],C=n[15],A=s[0],T=s[4],P=s[8],W=s[12],v=s[1],b=s[5],B=s[9],k=s[13],F=s[2],H=s[6],J=s[10],fe=s[14],ie=s[3],pe=s[7],N=s[11],j=s[15];return r[0]=o*A+a*v+c*F+l*ie,r[4]=o*T+a*b+c*H+l*pe,r[8]=o*P+a*B+c*J+l*N,r[12]=o*W+a*k+c*fe+l*j,r[1]=h*A+f*v+p*F+d*ie,r[5]=h*T+f*b+p*H+d*pe,r[9]=h*P+f*B+p*J+d*N,r[13]=h*W+f*k+p*fe+d*j,r[2]=g*A+x*v+m*F+u*ie,r[6]=g*T+x*b+m*H+u*pe,r[10]=g*P+x*B+m*J+u*N,r[14]=g*W+x*k+m*fe+u*j,r[3]=E*A+y*v+M*F+C*ie,r[7]=E*T+y*b+M*H+C*pe,r[11]=E*P+y*B+M*J+C*N,r[15]=E*W+y*k+M*fe+C*j,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],c=e[9],l=e[13],h=e[2],f=e[6],p=e[10],d=e[14],g=e[3],x=e[7],m=e[11],u=e[15];return g*(+r*c*f-s*l*f-r*a*p+n*l*p+s*a*d-n*c*d)+x*(+t*c*d-t*l*p+r*o*p-s*o*d+s*l*h-r*c*h)+m*(+t*l*f-t*a*d-r*o*f+n*o*d+r*a*h-n*l*h)+u*(-s*a*h-t*c*f+t*a*p+s*o*f-n*o*p+n*c*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],f=e[9],p=e[10],d=e[11],g=e[12],x=e[13],m=e[14],u=e[15],E=f*m*l-x*p*l+x*c*d-a*m*d-f*c*u+a*p*u,y=g*p*l-h*m*l-g*c*d+o*m*d+h*c*u-o*p*u,M=h*x*l-g*f*l+g*a*d-o*x*d-h*a*u+o*f*u,C=g*f*c-h*x*c-g*a*p+o*x*p+h*a*m-o*f*m,A=t*E+n*y+s*M+r*C;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let T=1/A;return e[0]=E*T,e[1]=(x*p*r-f*m*r-x*s*d+n*m*d+f*s*u-n*p*u)*T,e[2]=(a*m*r-x*c*r+x*s*l-n*m*l-a*s*u+n*c*u)*T,e[3]=(f*c*r-a*p*r-f*s*l+n*p*l+a*s*d-n*c*d)*T,e[4]=y*T,e[5]=(h*m*r-g*p*r+g*s*d-t*m*d-h*s*u+t*p*u)*T,e[6]=(g*c*r-o*m*r-g*s*l+t*m*l+o*s*u-t*c*u)*T,e[7]=(o*p*r-h*c*r+h*s*l-t*p*l-o*s*d+t*c*d)*T,e[8]=M*T,e[9]=(g*f*r-h*x*r-g*n*d+t*x*d+h*n*u-t*f*u)*T,e[10]=(o*x*r-g*a*r+g*n*l-t*x*l-o*n*u+t*a*u)*T,e[11]=(h*a*r-o*f*r-h*n*l+t*f*l+o*n*d-t*a*d)*T,e[12]=C*T,e[13]=(h*x*s-g*f*s+g*n*p-t*x*p-h*n*m+t*f*m)*T,e[14]=(g*a*s-o*x*s-g*n*c+t*x*c+o*n*m-t*a*m)*T,e[15]=(o*f*s-h*a*s+h*n*c-t*f*c-o*n*p+t*a*p)*T,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,c=e.z,l=r*o,h=r*a;return this.set(l*o+n,l*a-s*c,l*c+s*a,0,l*a+s*c,h*a+n,h*c-s*o,0,l*c-s*a,h*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,o=t._y,a=t._z,c=t._w,l=r+r,h=o+o,f=a+a,p=r*l,d=r*h,g=r*f,x=o*h,m=o*f,u=a*f,E=c*l,y=c*h,M=c*f,C=n.x,A=n.y,T=n.z;return s[0]=(1-(x+u))*C,s[1]=(d+M)*C,s[2]=(g-y)*C,s[3]=0,s[4]=(d-M)*A,s[5]=(1-(p+u))*A,s[6]=(m+E)*A,s[7]=0,s[8]=(g+y)*T,s[9]=(m-E)*T,s[10]=(1-(p+x))*T,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements,r=Pr.set(s[0],s[1],s[2]).length(),o=Pr.set(s[4],s[5],s[6]).length(),a=Pr.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],Hi.copy(this);let l=1/r,h=1/o,f=1/a;return Hi.elements[0]*=l,Hi.elements[1]*=l,Hi.elements[2]*=l,Hi.elements[4]*=h,Hi.elements[5]*=h,Hi.elements[6]*=h,Hi.elements[8]*=f,Hi.elements[9]*=f,Hi.elements[10]*=f,t.setFromRotationMatrix(Hi),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,s,r,o,a=hs){let c=this.elements,l=2*r/(t-e),h=2*r/(n-s),f=(t+e)/(t-e),p=(n+s)/(n-s),d,g;if(a===hs)d=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===bc)d=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=h,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=d,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,o,a=hs){let c=this.elements,l=1/(t-e),h=1/(n-s),f=1/(o-r),p=(t+e)*l,d=(n+s)*h,g,x;if(a===hs)g=(o+r)*f,x=-2*f;else if(a===bc)g=r*f,x=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-p,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-d,c[2]=0,c[6]=0,c[10]=x,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Pr=new S,Hi=new Tt,X1=new S(0,0,0),q1=new S(1,1,1),ws=new S,qa=new S,hi=new S,Of=new Tt,zf=new mt,ii=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],h=s[9],f=s[2],p=s[6],d=s[10];switch(t){case"XYZ":this._y=Math.asin(Sn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(p,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Sn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(Sn(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Sn(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(p,d),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Sn(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-Sn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(p,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Of.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Of,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return zf.setFromEuler(this),this.setFromQuaternion(zf,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};ii.DEFAULT_ORDER="XYZ";var ea=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Y1=0,Bf=new S,Ir=new mt,os=new Tt,Ya=new S,Oo=new S,Z1=new S,$1=new mt,kf=new S(1,0,0),Vf=new S(0,1,0),Gf=new S(0,0,1),Wf={type:"added"},K1={type:"removed"},Lr={type:"childadded",child:null},oh={type:"childremoved",child:null},Ft=class i extends Is{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Y1++}),this.uuid=dr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new S,t=new ii,n=new mt,s=new S(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Tt},normalMatrix:{value:new vt}}),this.matrix=new Tt,this.matrixWorld=new Tt,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ea,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ir.setFromAxisAngle(e,t),this.quaternion.multiply(Ir),this}rotateOnWorldAxis(e,t){return Ir.setFromAxisAngle(e,t),this.quaternion.premultiply(Ir),this}rotateX(e){return this.rotateOnAxis(kf,e)}rotateY(e){return this.rotateOnAxis(Vf,e)}rotateZ(e){return this.rotateOnAxis(Gf,e)}translateOnAxis(e,t){return Bf.copy(e).applyQuaternion(this.quaternion),this.position.add(Bf.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(kf,e)}translateY(e){return this.translateOnAxis(Vf,e)}translateZ(e){return this.translateOnAxis(Gf,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(os.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Ya.copy(e):Ya.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Oo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?os.lookAt(Oo,Ya,this.up):os.lookAt(Ya,Oo,this.up),this.quaternion.setFromRotationMatrix(os),s&&(os.extractRotation(s.matrixWorld),Ir.setFromRotationMatrix(os),this.quaternion.premultiply(Ir.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Wf),Lr.child=e,this.dispatchEvent(Lr),Lr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(K1),oh.child=e,this.dispatchEvent(oh),oh.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),os.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),os.multiply(e.parent.matrixWorld)),e.applyMatrix4(os),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Wf),Lr.child=e,this.dispatchEvent(Lr),Lr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Oo,e,Z1),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Oo,$1,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let f=c[l];r(e.shapes,f)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(e.materials,this.material[c]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];s.animations.push(r(e.animations,c))}}if(t){let a=o(e.geometries),c=o(e.materials),l=o(e.textures),h=o(e.images),f=o(e.shapes),p=o(e.skeletons),d=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),f.length>0&&(n.shapes=f),p.length>0&&(n.skeletons=p),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){let c=[];for(let l in a){let h=a[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}};Ft.DEFAULT_UP=new S(0,1,0);Ft.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ft.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Ni=new S,as=new S,ah=new S,cs=new S,Dr=new S,Ur=new S,Xf=new S,ch=new S,lh=new S,hh=new S,uh=new Kt,dh=new Kt,fh=new Kt,nr=class i{constructor(e=new S,t=new S,n=new S){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Ni.subVectors(e,t),s.cross(Ni);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){Ni.subVectors(s,t),as.subVectors(n,t),ah.subVectors(e,t);let o=Ni.dot(Ni),a=Ni.dot(as),c=Ni.dot(ah),l=as.dot(as),h=as.dot(ah),f=o*l-a*a;if(f===0)return r.set(0,0,0),null;let p=1/f,d=(l*c-a*h)*p,g=(o*h-a*c)*p;return r.set(1-d-g,g,d)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,cs)===null?!1:cs.x>=0&&cs.y>=0&&cs.x+cs.y<=1}static getInterpolation(e,t,n,s,r,o,a,c){return this.getBarycoord(e,t,n,s,cs)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,cs.x),c.addScaledVector(o,cs.y),c.addScaledVector(a,cs.z),c)}static getInterpolatedAttribute(e,t,n,s,r,o){return uh.setScalar(0),dh.setScalar(0),fh.setScalar(0),uh.fromBufferAttribute(e,t),dh.fromBufferAttribute(e,n),fh.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(uh,r.x),o.addScaledVector(dh,r.y),o.addScaledVector(fh,r.z),o}static isFrontFacing(e,t,n,s){return Ni.subVectors(n,t),as.subVectors(e,t),Ni.cross(as).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ni.subVectors(this.c,this.b),as.subVectors(this.a,this.b),Ni.cross(as).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,o,a;Dr.subVectors(s,n),Ur.subVectors(r,n),ch.subVectors(e,n);let c=Dr.dot(ch),l=Ur.dot(ch);if(c<=0&&l<=0)return t.copy(n);lh.subVectors(e,s);let h=Dr.dot(lh),f=Ur.dot(lh);if(h>=0&&f<=h)return t.copy(s);let p=c*f-h*l;if(p<=0&&c>=0&&h<=0)return o=c/(c-h),t.copy(n).addScaledVector(Dr,o);hh.subVectors(e,r);let d=Dr.dot(hh),g=Ur.dot(hh);if(g>=0&&d<=g)return t.copy(r);let x=d*l-c*g;if(x<=0&&l>=0&&g<=0)return a=l/(l-g),t.copy(n).addScaledVector(Ur,a);let m=h*g-d*f;if(m<=0&&f-h>=0&&d-g>=0)return Xf.subVectors(r,s),a=(f-h)/(f-h+(d-g)),t.copy(s).addScaledVector(Xf,a);let u=1/(m+x+p);return o=x*u,a=p*u,t.copy(n).addScaledVector(Dr,o).addScaledVector(Ur,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Qp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},bs={h:0,s:0,l:0},Za={h:0,s:0,l:0};function ph(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var dt=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=pt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,qt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=qt.workingColorSpace){return this.r=e,this.g=t,this.b=n,qt.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=qt.workingColorSpace){if(e=ad(e,1),t=Sn(t,0,1),n=Sn(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=ph(o,r,e+1/3),this.g=ph(o,r,e),this.b=ph(o,r,e-1/3)}return qt.toWorkingColorSpace(this,s),this}setStyle(e,t=pt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=pt){let n=Qp[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Xr(e.r),this.g=Xr(e.g),this.b=Xr(e.b),this}copyLinearToSRGB(e){return this.r=Ql(e.r),this.g=Ql(e.g),this.b=Ql(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=pt){return qt.fromWorkingColorSpace(Gn.copy(this),e),Math.round(Sn(Gn.r*255,0,255))*65536+Math.round(Sn(Gn.g*255,0,255))*256+Math.round(Sn(Gn.b*255,0,255))}getHexString(e=pt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=qt.workingColorSpace){qt.fromWorkingColorSpace(Gn.copy(this),t);let n=Gn.r,s=Gn.g,r=Gn.b,o=Math.max(n,s,r),a=Math.min(n,s,r),c,l,h=(a+o)/2;if(a===o)c=0,l=0;else{let f=o-a;switch(l=h<=.5?f/(o+a):f/(2-o-a),o){case n:c=(s-r)/f+(s<r?6:0);break;case s:c=(r-n)/f+2;break;case r:c=(n-s)/f+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=qt.workingColorSpace){return qt.fromWorkingColorSpace(Gn.copy(this),t),e.r=Gn.r,e.g=Gn.g,e.b=Gn.b,e}getStyle(e=pt){qt.fromWorkingColorSpace(Gn.copy(this),e);let t=Gn.r,n=Gn.g,s=Gn.b;return e!==pt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(bs),this.setHSL(bs.h+e,bs.s+t,bs.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(bs),e.getHSL(Za);let n=qo(bs.h,Za.h,t),s=qo(bs.s,Za.s,t),r=qo(bs.l,Za.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Gn=new dt;dt.NAMES=Qp;var J1=0,Ds=class extends Is{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:J1++}),this.uuid=dr(),this.name="",this.type="Material",this.blending=Gr,this.side=Ji,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ph,this.blendDst=Ih,this.blendEquation=tr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new dt(0,0,0),this.blendAlpha=0,this.depthFunc=Yr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Pf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=br,this.stencilZFail=br,this.stencilZPass=br,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Gr&&(n.blending=this.blending),this.side!==Ji&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ph&&(n.blendSrc=this.blendSrc),this.blendDst!==Ih&&(n.blendDst=this.blendDst),this.blendEquation!==tr&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Yr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Pf&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==br&&(n.stencilFail=this.stencilFail),this.stencilZFail!==br&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==br&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let c=r[a];delete c.metadata,o.push(c)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},xt=class extends Ds{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new dt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ii,this.combine=Op,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var xn=new S,$a=new Ne,fn=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=If,this.updateRanges=[],this.gpuType=Ki,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)$a.fromBufferAttribute(this,t),$a.applyMatrix3(e),this.setXY(t,$a.x,$a.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)xn.fromBufferAttribute(this,t),xn.applyMatrix3(e),this.setXYZ(t,xn.x,xn.y,xn.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)xn.fromBufferAttribute(this,t),xn.applyMatrix4(e),this.setXYZ(t,xn.x,xn.y,xn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)xn.fromBufferAttribute(this,t),xn.applyNormalMatrix(e),this.setXYZ(t,xn.x,xn.y,xn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)xn.fromBufferAttribute(this,t),xn.transformDirection(e),this.setXYZ(t,xn.x,xn.y,xn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Br(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Zn(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Br(t,this.array)),t}setX(e,t){return this.normalized&&(t=Zn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Br(t,this.array)),t}setY(e,t){return this.normalized&&(t=Zn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Br(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Zn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Br(t,this.array)),t}setW(e,t){return this.normalized&&(t=Zn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Zn(t,this.array),n=Zn(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=Zn(t,this.array),n=Zn(n,this.array),s=Zn(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=Zn(t,this.array),n=Zn(n,this.array),s=Zn(s,this.array),r=Zn(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==If&&(e.usage=this.usage),e}};var Ac=class extends fn{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Cc=class extends fn{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var lt=class extends fn{constructor(e,t,n){super(new Float32Array(e),t,n)}},Q1=0,yi=new Tt,mh=new Ft,Hr=new S,ui=new Dn,zo=new Dn,Ln=new S,Pt=class i extends Is{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Q1++}),this.uuid=dr(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Jp(e)?Cc:Ac)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new vt().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return yi.makeRotationFromQuaternion(e),this.applyMatrix4(yi),this}rotateX(e){return yi.makeRotationX(e),this.applyMatrix4(yi),this}rotateY(e){return yi.makeRotationY(e),this.applyMatrix4(yi),this}rotateZ(e){return yi.makeRotationZ(e),this.applyMatrix4(yi),this}translate(e,t,n){return yi.makeTranslation(e,t,n),this.applyMatrix4(yi),this}scale(e,t,n){return yi.makeScale(e,t,n),this.applyMatrix4(yi),this}lookAt(e){return mh.lookAt(e),mh.updateMatrix(),this.applyMatrix4(mh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Hr).negate(),this.translate(Hr.x,Hr.y,Hr.z),this}setFromPoints(e){let t=[];for(let n=0,s=e.length;n<s;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new lt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Dn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new S(-1/0,-1/0,-1/0),new S(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];ui.setFromBufferAttribute(r),this.morphTargetsRelative?(Ln.addVectors(this.boundingBox.min,ui.min),this.boundingBox.expandByPoint(Ln),Ln.addVectors(this.boundingBox.max,ui.max),this.boundingBox.expandByPoint(Ln)):(this.boundingBox.expandByPoint(ui.min),this.boundingBox.expandByPoint(ui.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ls);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new S,1/0);return}if(e){let n=this.boundingSphere.center;if(ui.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];zo.setFromBufferAttribute(a),this.morphTargetsRelative?(Ln.addVectors(ui.min,zo.min),ui.expandByPoint(Ln),Ln.addVectors(ui.max,zo.max),ui.expandByPoint(Ln)):(ui.expandByPoint(zo.min),ui.expandByPoint(zo.max))}ui.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)Ln.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Ln));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)Ln.fromBufferAttribute(a,l),c&&(Hr.fromBufferAttribute(e,l),Ln.add(Hr)),s=Math.max(s,n.distanceToSquared(Ln))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new fn(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],c=[];for(let P=0;P<n.count;P++)a[P]=new S,c[P]=new S;let l=new S,h=new S,f=new S,p=new Ne,d=new Ne,g=new Ne,x=new S,m=new S;function u(P,W,v){l.fromBufferAttribute(n,P),h.fromBufferAttribute(n,W),f.fromBufferAttribute(n,v),p.fromBufferAttribute(r,P),d.fromBufferAttribute(r,W),g.fromBufferAttribute(r,v),h.sub(l),f.sub(l),d.sub(p),g.sub(p);let b=1/(d.x*g.y-g.x*d.y);isFinite(b)&&(x.copy(h).multiplyScalar(g.y).addScaledVector(f,-d.y).multiplyScalar(b),m.copy(f).multiplyScalar(d.x).addScaledVector(h,-g.x).multiplyScalar(b),a[P].add(x),a[W].add(x),a[v].add(x),c[P].add(m),c[W].add(m),c[v].add(m))}let E=this.groups;E.length===0&&(E=[{start:0,count:e.count}]);for(let P=0,W=E.length;P<W;++P){let v=E[P],b=v.start,B=v.count;for(let k=b,F=b+B;k<F;k+=3)u(e.getX(k+0),e.getX(k+1),e.getX(k+2))}let y=new S,M=new S,C=new S,A=new S;function T(P){C.fromBufferAttribute(s,P),A.copy(C);let W=a[P];y.copy(W),y.sub(C.multiplyScalar(C.dot(W))).normalize(),M.crossVectors(A,W);let b=M.dot(c[P])<0?-1:1;o.setXYZW(P,y.x,y.y,y.z,b)}for(let P=0,W=E.length;P<W;++P){let v=E[P],b=v.start,B=v.count;for(let k=b,F=b+B;k<F;k+=3)T(e.getX(k+0)),T(e.getX(k+1)),T(e.getX(k+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new fn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let p=0,d=n.count;p<d;p++)n.setXYZ(p,0,0,0);let s=new S,r=new S,o=new S,a=new S,c=new S,l=new S,h=new S,f=new S;if(e)for(let p=0,d=e.count;p<d;p+=3){let g=e.getX(p+0),x=e.getX(p+1),m=e.getX(p+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,x),o.fromBufferAttribute(t,m),h.subVectors(o,r),f.subVectors(s,r),h.cross(f),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,x),l.fromBufferAttribute(n,m),a.add(h),c.add(h),l.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(x,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let p=0,d=t.count;p<d;p+=3)s.fromBufferAttribute(t,p+0),r.fromBufferAttribute(t,p+1),o.fromBufferAttribute(t,p+2),h.subVectors(o,r),f.subVectors(s,r),h.cross(f),n.setXYZ(p+0,h.x,h.y,h.z),n.setXYZ(p+1,h.x,h.y,h.z),n.setXYZ(p+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Ln.fromBufferAttribute(e,t),Ln.normalize(),e.setXYZ(t,Ln.x,Ln.y,Ln.z)}toNonIndexed(){function e(a,c){let l=a.array,h=a.itemSize,f=a.normalized,p=new l.constructor(c.length*h),d=0,g=0;for(let x=0,m=c.length;x<m;x++){a.isInterleavedBufferAttribute?d=c[x]*a.data.stride+a.offset:d=c[x]*h;for(let u=0;u<h;u++)p[g++]=l[d++]}return new fn(p,h,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let a in s){let c=s[a],l=e(c,n);t.setAttribute(a,l)}let r=this.morphAttributes;for(let a in r){let c=[],l=r[a];for(let h=0,f=l.length;h<f;h++){let p=l[h],d=e(p,n);c.push(d)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let c in n){let l=n[c];e.data.attributes[c]=l.toJSON(e.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let f=0,p=l.length;f<p;f++){let d=l[f];h.push(d.toJSON(e.data))}h.length>0&&(s[c]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let s=e.attributes;for(let l in s){let h=s[l];this.setAttribute(l,h.clone(t))}let r=e.morphAttributes;for(let l in r){let h=[],f=r[l];for(let p=0,d=f.length;p<d;p++)h.push(f[p].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let l=0,h=o.length;l<h;l++){let f=o[l];this.addGroup(f.start,f.count,f.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},qf=new Tt,Ks=new jo,Ka=new Ls,Yf=new S,Ja=new S,Qa=new S,ja=new S,gh=new S,ec=new S,Zf=new S,tc=new S,ht=class extends Ft{constructor(e=new Pt,t=new xt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){ec.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=a[c],f=r[c];h!==0&&(gh.fromBufferAttribute(f,e),o?ec.addScaledVector(gh,h):ec.addScaledVector(gh.sub(t),h))}t.add(ec)}return t}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ka.copy(n.boundingSphere),Ka.applyMatrix4(r),Ks.copy(e.ray).recast(e.near),!(Ka.containsPoint(Ks.origin)===!1&&(Ks.intersectSphere(Ka,Yf)===null||Ks.origin.distanceToSquared(Yf)>(e.far-e.near)**2))&&(qf.copy(r).invert(),Ks.copy(e.ray).applyMatrix4(qf),!(n.boundingBox!==null&&Ks.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Ks)))}_computeIntersections(e,t,n){let s,r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,f=r.attributes.normal,p=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,x=p.length;g<x;g++){let m=p[g],u=o[m.materialIndex],E=Math.max(m.start,d.start),y=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let M=E,C=y;M<C;M+=3){let A=a.getX(M),T=a.getX(M+1),P=a.getX(M+2);s=nc(this,u,e,n,l,h,f,A,T,P),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,d.start),x=Math.min(a.count,d.start+d.count);for(let m=g,u=x;m<u;m+=3){let E=a.getX(m),y=a.getX(m+1),M=a.getX(m+2);s=nc(this,o,e,n,l,h,f,E,y,M),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,x=p.length;g<x;g++){let m=p[g],u=o[m.materialIndex],E=Math.max(m.start,d.start),y=Math.min(c.count,Math.min(m.start+m.count,d.start+d.count));for(let M=E,C=y;M<C;M+=3){let A=M,T=M+1,P=M+2;s=nc(this,u,e,n,l,h,f,A,T,P),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,d.start),x=Math.min(c.count,d.start+d.count);for(let m=g,u=x;m<u;m+=3){let E=m,y=m+1,M=m+2;s=nc(this,o,e,n,l,h,f,E,y,M),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};function j1(i,e,t,n,s,r,o,a){let c;if(e.side===yn?c=n.intersectTriangle(o,r,s,!0,a):c=n.intersectTriangle(s,r,o,e.side===Ji,a),c===null)return null;tc.copy(a),tc.applyMatrix4(i.matrixWorld);let l=t.ray.origin.distanceTo(tc);return l<t.near||l>t.far?null:{distance:l,point:tc.clone(),object:i}}function nc(i,e,t,n,s,r,o,a,c,l){i.getVertexPosition(a,Ja),i.getVertexPosition(c,Qa),i.getVertexPosition(l,ja);let h=j1(i,e,t,n,Ja,Qa,ja,Zf);if(h){let f=new S;nr.getBarycoord(Zf,Ja,Qa,ja,f),s&&(h.uv=nr.getInterpolatedAttribute(s,a,c,l,f,new Ne)),r&&(h.uv1=nr.getInterpolatedAttribute(r,a,c,l,f,new Ne)),o&&(h.normal=nr.getInterpolatedAttribute(o,a,c,l,f,new S),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let p={a,b:c,c:l,normal:new S,materialIndex:0};nr.getNormal(Ja,Qa,ja,p.normal),h.face=p,h.barycoord=f}return h}var St=class i extends Pt{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let c=[],l=[],h=[],f=[],p=0,d=0;g("z","y","x",-1,-1,n,t,e,o,r,0),g("z","y","x",1,-1,n,t,-e,o,r,1),g("x","z","y",1,1,e,n,t,s,o,2),g("x","z","y",1,-1,e,n,-t,s,o,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new lt(l,3)),this.setAttribute("normal",new lt(h,3)),this.setAttribute("uv",new lt(f,2));function g(x,m,u,E,y,M,C,A,T,P,W){let v=M/T,b=C/P,B=M/2,k=C/2,F=A/2,H=T+1,J=P+1,fe=0,ie=0,pe=new S;for(let N=0;N<J;N++){let j=N*b-k;for(let se=0;se<H;se++){let te=se*v-B;pe[x]=te*E,pe[m]=j*y,pe[u]=F,l.push(pe.x,pe.y,pe.z),pe[x]=0,pe[m]=0,pe[u]=A>0?1:-1,h.push(pe.x,pe.y,pe.z),f.push(se/T),f.push(1-N/P),fe+=1}}for(let N=0;N<P;N++)for(let j=0;j<T;j++){let se=p+j+H*N,te=p+j+H*(N+1),O=p+(j+1)+H*(N+1),le=p+(j+1)+H*N;c.push(se,te,le),c.push(te,O,le),ie+=6}a.addGroup(d,ie,W),d+=ie,p+=fe}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function jr(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function $n(i){let e={};for(let t=0;t<i.length;t++){let n=jr(i[t]);for(let s in n)e[s]=n[s]}return e}function ex(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function jp(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:qt.workingColorSpace}var tx={clone:jr,merge:$n},nx=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ix=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Qi=class extends Ds{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=nx,this.fragmentShader=ix,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=jr(e.uniforms),this.uniformsGroups=ex(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},Pc=class extends Ft{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Tt,this.projectionMatrix=new Tt,this.projectionMatrixInverse=new Tt,this.coordinateSystem=hs}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Ts=new S,$f=new Ne,Kf=new Ne,Nn=class extends Pc{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Qr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Xo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Qr*2*Math.atan(Math.tan(Xo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Ts.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ts.x,Ts.y).multiplyScalar(-e/Ts.z),Ts.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ts.x,Ts.y).multiplyScalar(-e/Ts.z)}getViewSize(e,t){return this.getViewBounds(e,$f,Kf),t.subVectors(Kf,$f)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Xo*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,t-=o.offsetY*n/l,s*=o.width/c,n*=o.height/l}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Nr=-90,Fr=1,xu=class extends Ft{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Nn(Nr,Fr,e,t);s.layers=this.layers,this.add(s);let r=new Nn(Nr,Fr,e,t);r.layers=this.layers,this.add(r);let o=new Nn(Nr,Fr,e,t);o.layers=this.layers,this.add(o);let a=new Nn(Nr,Fr,e,t);a.layers=this.layers,this.add(a);let c=new Nn(Nr,Fr,e,t);c.layers=this.layers,this.add(c);let l=new Nn(Nr,Fr,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,a,c]=t;for(let l of t)this.remove(l);if(e===hs)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===bc)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,c,l,h]=this.children,f=e.getRenderTarget(),p=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,o),e.setRenderTarget(n,2,s),e.render(t,a),e.setRenderTarget(n,3,s),e.render(t,c),e.setRenderTarget(n,4,s),e.render(t,l),n.texture.generateMipmaps=x,e.setRenderTarget(n,5,s),e.render(t,h),e.setRenderTarget(f,p,d),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},Ic=class extends Kn{constructor(e,t,n,s,r,o,a,c,l,h){e=e!==void 0?e:[],t=t!==void 0?t:Zr,super(e,t,n,s,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},yu=class extends ds{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Ic(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:gn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new St(5,5,5),r=new Qi({name:"CubemapFromEquirect",uniforms:jr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:yn,blending:As});r.uniforms.tEquirect.value=t;let o=new ht(s,r),a=t.minFilter;return t.minFilter===Fi&&(t.minFilter=gn),new xu(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,s){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}},xh=new S,sx=new S,rx=new vt,vi=class{constructor(e=new S(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=xh.subVectors(n,t).cross(sx.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(xh),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||rx.getNormalMatrix(e),s=this.coplanarPoint(xh).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Js=new Ls,ic=new S,ta=class{constructor(e=new vi,t=new vi,n=new vi,s=new vi,r=new vi,o=new vi){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=hs){let n=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],c=s[3],l=s[4],h=s[5],f=s[6],p=s[7],d=s[8],g=s[9],x=s[10],m=s[11],u=s[12],E=s[13],y=s[14],M=s[15];if(n[0].setComponents(c-r,p-l,m-d,M-u).normalize(),n[1].setComponents(c+r,p+l,m+d,M+u).normalize(),n[2].setComponents(c+o,p+h,m+g,M+E).normalize(),n[3].setComponents(c-o,p-h,m-g,M-E).normalize(),n[4].setComponents(c-a,p-f,m-x,M-y).normalize(),t===hs)n[5].setComponents(c+a,p+f,m+x,M+y).normalize();else if(t===bc)n[5].setComponents(a,f,x,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Js.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Js.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Js)}intersectsSprite(e){return Js.center.set(0,0,0),Js.radius=.7071067811865476,Js.applyMatrix4(e.matrixWorld),this.intersectsSphere(Js)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(ic.x=s.normal.x>0?e.max.x:e.min.x,ic.y=s.normal.y>0?e.max.y:e.min.y,ic.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(ic)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function e0(){let i=null,e=!1,t=null,n=null;function s(r,o){t(r,o),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function ox(i){let e=new WeakMap;function t(a,c){let l=a.array,h=a.usage,f=l.byteLength,p=i.createBuffer();i.bindBuffer(c,p),i.bufferData(c,l,h),a.onUploadCallback();let d;if(l instanceof Float32Array)d=i.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)d=i.SHORT;else if(l instanceof Uint32Array)d=i.UNSIGNED_INT;else if(l instanceof Int32Array)d=i.INT;else if(l instanceof Int8Array)d=i.BYTE;else if(l instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:p,type:d,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:f}}function n(a,c,l){let h=c.array,f=c.updateRanges;if(i.bindBuffer(l,a),f.length===0)i.bufferSubData(l,0,h);else{f.sort((d,g)=>d.start-g.start);let p=0;for(let d=1;d<f.length;d++){let g=f[p],x=f[d];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++p,f[p]=x)}f.length=p+1;for(let d=0,g=f.length;d<g;d++){let x=f[d];i.bufferSubData(l,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let c=e.get(a);c&&(i.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}var wt=class i extends Pt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(n),c=Math.floor(s),l=a+1,h=c+1,f=e/a,p=t/c,d=[],g=[],x=[],m=[];for(let u=0;u<h;u++){let E=u*p-o;for(let y=0;y<l;y++){let M=y*f-r;g.push(M,-E,0),x.push(0,0,1),m.push(y/a),m.push(1-u/c)}}for(let u=0;u<c;u++)for(let E=0;E<a;E++){let y=E+l*u,M=E+l*(u+1),C=E+1+l*(u+1),A=E+1+l*u;d.push(y,M,A),d.push(M,C,A)}this.setIndex(d),this.setAttribute("position",new lt(g,3)),this.setAttribute("normal",new lt(x,3)),this.setAttribute("uv",new lt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}},ax=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,cx=`#ifdef USE_ALPHAHASH
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
#endif`,lx=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,hx=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ux=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,dx=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,fx=`#ifdef USE_AOMAP
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
#endif`,px=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,mx=`#ifdef USE_BATCHING
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
#endif`,gx=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,xx=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,yx=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,vx=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,_x=`#ifdef USE_IRIDESCENCE
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
#endif`,Mx=`#ifdef USE_BUMPMAP
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
#endif`,Ex=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Sx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,wx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,bx=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Tx=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Rx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Ax=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Cx=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Px=`#define PI 3.141592653589793
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
} // validated`,Ix=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Lx=`vec3 transformedNormal = objectNormal;
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
#endif`,Dx=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ux=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Hx=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Nx=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Fx="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ox=`
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
}`,zx=`#ifdef USE_ENVMAP
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
#endif`,Bx=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,kx=`#ifdef USE_ENVMAP
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
#endif`,Vx=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Gx=`#ifdef USE_ENVMAP
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
#endif`,Wx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Xx=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,qx=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Yx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Zx=`#ifdef USE_GRADIENTMAP
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
}`,$x=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Kx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Jx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Qx=`uniform bool receiveShadow;
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
#endif`,jx=`#ifdef USE_ENVMAP
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
#endif`,ey=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ty=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ny=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,iy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,sy=`PhysicalMaterial material;
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
#endif`,ry=`struct PhysicalMaterial {
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
}`,oy=`
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
#endif`,ay=`#if defined( RE_IndirectDiffuse )
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
#endif`,cy=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ly=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,hy=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,uy=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,dy=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,fy=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,py=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,my=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,gy=`#if defined( USE_POINTS_UV )
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
#endif`,xy=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,yy=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,vy=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,_y=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,My=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ey=`#ifdef USE_MORPHTARGETS
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
#endif`,Sy=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,wy=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,by=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Ty=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ry=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ay=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Cy=`#ifdef USE_NORMALMAP
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
#endif`,Py=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Iy=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Ly=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Dy=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Uy=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Hy=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Ny=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Fy=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Oy=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,zy=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,By=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ky=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Vy=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Gy=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Wy=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Xy=`float getShadowMask() {
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
}`,qy=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Yy=`#ifdef USE_SKINNING
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
#endif`,Zy=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,$y=`#ifdef USE_SKINNING
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
#endif`,Ky=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Jy=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Qy=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,jy=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,ev=`#ifdef USE_TRANSMISSION
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
#endif`,tv=`#ifdef USE_TRANSMISSION
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
#endif`,nv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,iv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,sv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,rv=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,ov=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,av=`uniform sampler2D t2D;
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
}`,cv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,lv=`#ifdef ENVMAP_TYPE_CUBE
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
}`,hv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,uv=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,dv=`#include <common>
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
}`,fv=`#if DEPTH_PACKING == 3200
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
}`,pv=`#define DISTANCE
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
}`,mv=`#define DISTANCE
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
}`,gv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,xv=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,yv=`uniform float scale;
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
}`,vv=`uniform vec3 diffuse;
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
}`,_v=`#include <common>
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
}`,Mv=`uniform vec3 diffuse;
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
}`,Ev=`#define LAMBERT
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
}`,Sv=`#define LAMBERT
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
}`,wv=`#define MATCAP
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
}`,bv=`#define MATCAP
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
}`,Tv=`#define NORMAL
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
}`,Rv=`#define NORMAL
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
}`,Av=`#define PHONG
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
}`,Cv=`#define PHONG
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
}`,Pv=`#define STANDARD
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
}`,Iv=`#define STANDARD
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
}`,Lv=`#define TOON
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
}`,Dv=`#define TOON
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
}`,Uv=`uniform float size;
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
}`,Hv=`uniform vec3 diffuse;
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
}`,Nv=`#include <common>
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
}`,Fv=`uniform vec3 color;
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
}`,Ov=`uniform float rotation;
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
}`,zv=`uniform vec3 diffuse;
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
}`,Et={alphahash_fragment:ax,alphahash_pars_fragment:cx,alphamap_fragment:lx,alphamap_pars_fragment:hx,alphatest_fragment:ux,alphatest_pars_fragment:dx,aomap_fragment:fx,aomap_pars_fragment:px,batching_pars_vertex:mx,batching_vertex:gx,begin_vertex:xx,beginnormal_vertex:yx,bsdfs:vx,iridescence_fragment:_x,bumpmap_pars_fragment:Mx,clipping_planes_fragment:Ex,clipping_planes_pars_fragment:Sx,clipping_planes_pars_vertex:wx,clipping_planes_vertex:bx,color_fragment:Tx,color_pars_fragment:Rx,color_pars_vertex:Ax,color_vertex:Cx,common:Px,cube_uv_reflection_fragment:Ix,defaultnormal_vertex:Lx,displacementmap_pars_vertex:Dx,displacementmap_vertex:Ux,emissivemap_fragment:Hx,emissivemap_pars_fragment:Nx,colorspace_fragment:Fx,colorspace_pars_fragment:Ox,envmap_fragment:zx,envmap_common_pars_fragment:Bx,envmap_pars_fragment:kx,envmap_pars_vertex:Vx,envmap_physical_pars_fragment:jx,envmap_vertex:Gx,fog_vertex:Wx,fog_pars_vertex:Xx,fog_fragment:qx,fog_pars_fragment:Yx,gradientmap_pars_fragment:Zx,lightmap_pars_fragment:$x,lights_lambert_fragment:Kx,lights_lambert_pars_fragment:Jx,lights_pars_begin:Qx,lights_toon_fragment:ey,lights_toon_pars_fragment:ty,lights_phong_fragment:ny,lights_phong_pars_fragment:iy,lights_physical_fragment:sy,lights_physical_pars_fragment:ry,lights_fragment_begin:oy,lights_fragment_maps:ay,lights_fragment_end:cy,logdepthbuf_fragment:ly,logdepthbuf_pars_fragment:hy,logdepthbuf_pars_vertex:uy,logdepthbuf_vertex:dy,map_fragment:fy,map_pars_fragment:py,map_particle_fragment:my,map_particle_pars_fragment:gy,metalnessmap_fragment:xy,metalnessmap_pars_fragment:yy,morphinstance_vertex:vy,morphcolor_vertex:_y,morphnormal_vertex:My,morphtarget_pars_vertex:Ey,morphtarget_vertex:Sy,normal_fragment_begin:wy,normal_fragment_maps:by,normal_pars_fragment:Ty,normal_pars_vertex:Ry,normal_vertex:Ay,normalmap_pars_fragment:Cy,clearcoat_normal_fragment_begin:Py,clearcoat_normal_fragment_maps:Iy,clearcoat_pars_fragment:Ly,iridescence_pars_fragment:Dy,opaque_fragment:Uy,packing:Hy,premultiplied_alpha_fragment:Ny,project_vertex:Fy,dithering_fragment:Oy,dithering_pars_fragment:zy,roughnessmap_fragment:By,roughnessmap_pars_fragment:ky,shadowmap_pars_fragment:Vy,shadowmap_pars_vertex:Gy,shadowmap_vertex:Wy,shadowmask_pars_fragment:Xy,skinbase_vertex:qy,skinning_pars_vertex:Yy,skinning_vertex:Zy,skinnormal_vertex:$y,specularmap_fragment:Ky,specularmap_pars_fragment:Jy,tonemapping_fragment:Qy,tonemapping_pars_fragment:jy,transmission_fragment:ev,transmission_pars_fragment:tv,uv_pars_fragment:nv,uv_pars_vertex:iv,uv_vertex:sv,worldpos_vertex:rv,background_vert:ov,background_frag:av,backgroundCube_vert:cv,backgroundCube_frag:lv,cube_vert:hv,cube_frag:uv,depth_vert:dv,depth_frag:fv,distanceRGBA_vert:pv,distanceRGBA_frag:mv,equirect_vert:gv,equirect_frag:xv,linedashed_vert:yv,linedashed_frag:vv,meshbasic_vert:_v,meshbasic_frag:Mv,meshlambert_vert:Ev,meshlambert_frag:Sv,meshmatcap_vert:wv,meshmatcap_frag:bv,meshnormal_vert:Tv,meshnormal_frag:Rv,meshphong_vert:Av,meshphong_frag:Cv,meshphysical_vert:Pv,meshphysical_frag:Iv,meshtoon_vert:Lv,meshtoon_frag:Dv,points_vert:Uv,points_frag:Hv,shadow_vert:Nv,shadow_frag:Fv,sprite_vert:Ov,sprite_frag:zv},qe={common:{diffuse:{value:new dt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new vt},alphaMap:{value:null},alphaMapTransform:{value:new vt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new vt}},envmap:{envMap:{value:null},envMapRotation:{value:new vt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new vt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new vt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new vt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new vt},normalScale:{value:new Ne(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new vt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new vt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new vt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new vt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new dt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new dt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new vt},alphaTest:{value:0},uvTransform:{value:new vt}},sprite:{diffuse:{value:new dt(16777215)},opacity:{value:1},center:{value:new Ne(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new vt},alphaMap:{value:null},alphaMapTransform:{value:new vt},alphaTest:{value:0}}},$i={basic:{uniforms:$n([qe.common,qe.specularmap,qe.envmap,qe.aomap,qe.lightmap,qe.fog]),vertexShader:Et.meshbasic_vert,fragmentShader:Et.meshbasic_frag},lambert:{uniforms:$n([qe.common,qe.specularmap,qe.envmap,qe.aomap,qe.lightmap,qe.emissivemap,qe.bumpmap,qe.normalmap,qe.displacementmap,qe.fog,qe.lights,{emissive:{value:new dt(0)}}]),vertexShader:Et.meshlambert_vert,fragmentShader:Et.meshlambert_frag},phong:{uniforms:$n([qe.common,qe.specularmap,qe.envmap,qe.aomap,qe.lightmap,qe.emissivemap,qe.bumpmap,qe.normalmap,qe.displacementmap,qe.fog,qe.lights,{emissive:{value:new dt(0)},specular:{value:new dt(1118481)},shininess:{value:30}}]),vertexShader:Et.meshphong_vert,fragmentShader:Et.meshphong_frag},standard:{uniforms:$n([qe.common,qe.envmap,qe.aomap,qe.lightmap,qe.emissivemap,qe.bumpmap,qe.normalmap,qe.displacementmap,qe.roughnessmap,qe.metalnessmap,qe.fog,qe.lights,{emissive:{value:new dt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Et.meshphysical_vert,fragmentShader:Et.meshphysical_frag},toon:{uniforms:$n([qe.common,qe.aomap,qe.lightmap,qe.emissivemap,qe.bumpmap,qe.normalmap,qe.displacementmap,qe.gradientmap,qe.fog,qe.lights,{emissive:{value:new dt(0)}}]),vertexShader:Et.meshtoon_vert,fragmentShader:Et.meshtoon_frag},matcap:{uniforms:$n([qe.common,qe.bumpmap,qe.normalmap,qe.displacementmap,qe.fog,{matcap:{value:null}}]),vertexShader:Et.meshmatcap_vert,fragmentShader:Et.meshmatcap_frag},points:{uniforms:$n([qe.points,qe.fog]),vertexShader:Et.points_vert,fragmentShader:Et.points_frag},dashed:{uniforms:$n([qe.common,qe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Et.linedashed_vert,fragmentShader:Et.linedashed_frag},depth:{uniforms:$n([qe.common,qe.displacementmap]),vertexShader:Et.depth_vert,fragmentShader:Et.depth_frag},normal:{uniforms:$n([qe.common,qe.bumpmap,qe.normalmap,qe.displacementmap,{opacity:{value:1}}]),vertexShader:Et.meshnormal_vert,fragmentShader:Et.meshnormal_frag},sprite:{uniforms:$n([qe.sprite,qe.fog]),vertexShader:Et.sprite_vert,fragmentShader:Et.sprite_frag},background:{uniforms:{uvTransform:{value:new vt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Et.background_vert,fragmentShader:Et.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new vt}},vertexShader:Et.backgroundCube_vert,fragmentShader:Et.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Et.cube_vert,fragmentShader:Et.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Et.equirect_vert,fragmentShader:Et.equirect_frag},distanceRGBA:{uniforms:$n([qe.common,qe.displacementmap,{referencePosition:{value:new S},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Et.distanceRGBA_vert,fragmentShader:Et.distanceRGBA_frag},shadow:{uniforms:$n([qe.lights,qe.fog,{color:{value:new dt(0)},opacity:{value:1}}]),vertexShader:Et.shadow_vert,fragmentShader:Et.shadow_frag}};$i.physical={uniforms:$n([$i.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new vt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new vt},clearcoatNormalScale:{value:new Ne(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new vt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new vt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new vt},sheen:{value:0},sheenColor:{value:new dt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new vt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new vt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new vt},transmissionSamplerSize:{value:new Ne},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new vt},attenuationDistance:{value:0},attenuationColor:{value:new dt(0)},specularColor:{value:new dt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new vt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new vt},anisotropyVector:{value:new Ne},anisotropyMap:{value:null},anisotropyMapTransform:{value:new vt}}]),vertexShader:Et.meshphysical_vert,fragmentShader:Et.meshphysical_frag};var sc={r:0,b:0,g:0},Qs=new ii,Bv=new Tt;function kv(i,e,t,n,s,r,o){let a=new dt(0),c=r===!0?0:1,l,h,f=null,p=0,d=null;function g(E){let y=E.isScene===!0?E.background:null;return y&&y.isTexture&&(y=(E.backgroundBlurriness>0?t:e).get(y)),y}function x(E){let y=!1,M=g(E);M===null?u(a,c):M&&M.isColor&&(u(M,1),y=!0);let C=i.xr.getEnvironmentBlendMode();C==="additive"?n.buffers.color.setClear(0,0,0,1,o):C==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||y)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(E,y){let M=g(y);M&&(M.isCubeTexture||M.mapping===Kc)?(h===void 0&&(h=new ht(new St(1,1,1),new Qi({name:"BackgroundCubeMaterial",uniforms:jr($i.backgroundCube.uniforms),vertexShader:$i.backgroundCube.vertexShader,fragmentShader:$i.backgroundCube.fragmentShader,side:yn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(C,A,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Qs.copy(y.backgroundRotation),Qs.x*=-1,Qs.y*=-1,Qs.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(Qs.y*=-1,Qs.z*=-1),h.material.uniforms.envMap.value=M,h.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Bv.makeRotationFromEuler(Qs)),h.material.toneMapped=qt.getTransfer(M.colorSpace)!==on,(f!==M||p!==M.version||d!==i.toneMapping)&&(h.material.needsUpdate=!0,f=M,p=M.version,d=i.toneMapping),h.layers.enableAll(),E.unshift(h,h.geometry,h.material,0,0,null)):M&&M.isTexture&&(l===void 0&&(l=new ht(new wt(2,2),new Qi({name:"BackgroundMaterial",uniforms:jr($i.background.uniforms),vertexShader:$i.background.vertexShader,fragmentShader:$i.background.fragmentShader,side:Ji,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=M,l.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,l.material.toneMapped=qt.getTransfer(M.colorSpace)!==on,M.matrixAutoUpdate===!0&&M.updateMatrix(),l.material.uniforms.uvTransform.value.copy(M.matrix),(f!==M||p!==M.version||d!==i.toneMapping)&&(l.material.needsUpdate=!0,f=M,p=M.version,d=i.toneMapping),l.layers.enableAll(),E.unshift(l,l.geometry,l.material,0,0,null))}function u(E,y){E.getRGB(sc,jp(i)),n.buffers.color.setClear(sc.r,sc.g,sc.b,y,o)}return{getClearColor:function(){return a},setClearColor:function(E,y=1){a.set(E),c=y,u(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(E){c=E,u(a,c)},render:x,addToRenderList:m}}function Vv(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=p(null),r=s,o=!1;function a(v,b,B,k,F){let H=!1,J=f(k,B,b);r!==J&&(r=J,l(r.object)),H=d(v,k,B,F),H&&g(v,k,B,F),F!==null&&e.update(F,i.ELEMENT_ARRAY_BUFFER),(H||o)&&(o=!1,M(v,b,B,k),F!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(F).buffer))}function c(){return i.createVertexArray()}function l(v){return i.bindVertexArray(v)}function h(v){return i.deleteVertexArray(v)}function f(v,b,B){let k=B.wireframe===!0,F=n[v.id];F===void 0&&(F={},n[v.id]=F);let H=F[b.id];H===void 0&&(H={},F[b.id]=H);let J=H[k];return J===void 0&&(J=p(c()),H[k]=J),J}function p(v){let b=[],B=[],k=[];for(let F=0;F<t;F++)b[F]=0,B[F]=0,k[F]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:b,enabledAttributes:B,attributeDivisors:k,object:v,attributes:{},index:null}}function d(v,b,B,k){let F=r.attributes,H=b.attributes,J=0,fe=B.getAttributes();for(let ie in fe)if(fe[ie].location>=0){let N=F[ie],j=H[ie];if(j===void 0&&(ie==="instanceMatrix"&&v.instanceMatrix&&(j=v.instanceMatrix),ie==="instanceColor"&&v.instanceColor&&(j=v.instanceColor)),N===void 0||N.attribute!==j||j&&N.data!==j.data)return!0;J++}return r.attributesNum!==J||r.index!==k}function g(v,b,B,k){let F={},H=b.attributes,J=0,fe=B.getAttributes();for(let ie in fe)if(fe[ie].location>=0){let N=H[ie];N===void 0&&(ie==="instanceMatrix"&&v.instanceMatrix&&(N=v.instanceMatrix),ie==="instanceColor"&&v.instanceColor&&(N=v.instanceColor));let j={};j.attribute=N,N&&N.data&&(j.data=N.data),F[ie]=j,J++}r.attributes=F,r.attributesNum=J,r.index=k}function x(){let v=r.newAttributes;for(let b=0,B=v.length;b<B;b++)v[b]=0}function m(v){u(v,0)}function u(v,b){let B=r.newAttributes,k=r.enabledAttributes,F=r.attributeDivisors;B[v]=1,k[v]===0&&(i.enableVertexAttribArray(v),k[v]=1),F[v]!==b&&(i.vertexAttribDivisor(v,b),F[v]=b)}function E(){let v=r.newAttributes,b=r.enabledAttributes;for(let B=0,k=b.length;B<k;B++)b[B]!==v[B]&&(i.disableVertexAttribArray(B),b[B]=0)}function y(v,b,B,k,F,H,J){J===!0?i.vertexAttribIPointer(v,b,B,F,H):i.vertexAttribPointer(v,b,B,k,F,H)}function M(v,b,B,k){x();let F=k.attributes,H=B.getAttributes(),J=b.defaultAttributeValues;for(let fe in H){let ie=H[fe];if(ie.location>=0){let pe=F[fe];if(pe===void 0&&(fe==="instanceMatrix"&&v.instanceMatrix&&(pe=v.instanceMatrix),fe==="instanceColor"&&v.instanceColor&&(pe=v.instanceColor)),pe!==void 0){let N=pe.normalized,j=pe.itemSize,se=e.get(pe);if(se===void 0)continue;let te=se.buffer,O=se.type,le=se.bytesPerElement,X=O===i.INT||O===i.UNSIGNED_INT||pe.gpuType===Qu;if(pe.isInterleavedBufferAttribute){let V=pe.data,Z=V.stride,xe=pe.offset;if(V.isInstancedInterleavedBuffer){for(let Ce=0;Ce<ie.locationSize;Ce++)u(ie.location+Ce,V.meshPerAttribute);v.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=V.meshPerAttribute*V.count)}else for(let Ce=0;Ce<ie.locationSize;Ce++)m(ie.location+Ce);i.bindBuffer(i.ARRAY_BUFFER,te);for(let Ce=0;Ce<ie.locationSize;Ce++)y(ie.location+Ce,j/ie.locationSize,O,N,Z*le,(xe+j/ie.locationSize*Ce)*le,X)}else{if(pe.isInstancedBufferAttribute){for(let V=0;V<ie.locationSize;V++)u(ie.location+V,pe.meshPerAttribute);v.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=pe.meshPerAttribute*pe.count)}else for(let V=0;V<ie.locationSize;V++)m(ie.location+V);i.bindBuffer(i.ARRAY_BUFFER,te);for(let V=0;V<ie.locationSize;V++)y(ie.location+V,j/ie.locationSize,O,N,j*le,j/ie.locationSize*V*le,X)}}else if(J!==void 0){let N=J[fe];if(N!==void 0)switch(N.length){case 2:i.vertexAttrib2fv(ie.location,N);break;case 3:i.vertexAttrib3fv(ie.location,N);break;case 4:i.vertexAttrib4fv(ie.location,N);break;default:i.vertexAttrib1fv(ie.location,N)}}}}E()}function C(){P();for(let v in n){let b=n[v];for(let B in b){let k=b[B];for(let F in k)h(k[F].object),delete k[F];delete b[B]}delete n[v]}}function A(v){if(n[v.id]===void 0)return;let b=n[v.id];for(let B in b){let k=b[B];for(let F in k)h(k[F].object),delete k[F];delete b[B]}delete n[v.id]}function T(v){for(let b in n){let B=n[b];if(B[v.id]===void 0)continue;let k=B[v.id];for(let F in k)h(k[F].object),delete k[F];delete B[v.id]}}function P(){W(),o=!0,r!==s&&(r=s,l(r.object))}function W(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:P,resetDefaultState:W,dispose:C,releaseStatesOfGeometry:A,releaseStatesOfProgram:T,initAttributes:x,enableAttribute:m,disableUnusedAttributes:E}}function Gv(i,e,t){let n;function s(l){n=l}function r(l,h){i.drawArrays(n,l,h),t.update(h,n,1)}function o(l,h,f){f!==0&&(i.drawArraysInstanced(n,l,h,f),t.update(h,n,f))}function a(l,h,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,f);let d=0;for(let g=0;g<f;g++)d+=h[g];t.update(d,n,1)}function c(l,h,f,p){if(f===0)return;let d=e.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<l.length;g++)o(l[g],h[g],p[g]);else{d.multiDrawArraysInstancedWEBGL(n,l,0,h,0,p,0,f);let g=0;for(let x=0;x<f;x++)g+=h[x];for(let x=0;x<p.length;x++)t.update(g,n,p[x])}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function Wv(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let T=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(T){return!(T!==di&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(T){let P=T===ua&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(T!==us&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==Ki&&!P)}function c(T){if(T==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp",h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let f=t.logarithmicDepthBuffer===!0,p=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control");if(p===!0){let T=e.get("EXT_clip_control");T.clipControlEXT(T.LOWER_LEFT_EXT,T.ZERO_TO_ONE_EXT)}let d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),u=i.getParameter(i.MAX_VERTEX_ATTRIBS),E=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),y=i.getParameter(i.MAX_VARYING_VECTORS),M=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),C=g>0,A=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:f,reverseDepthBuffer:p,maxTextures:d,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:m,maxAttributes:u,maxVertexUniforms:E,maxVaryings:y,maxFragmentUniforms:M,vertexTextures:C,maxSamples:A}}function Xv(i){let e=this,t=null,n=0,s=!1,r=!1,o=new vi,a=new vt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(f,p){let d=f.length!==0||p||n!==0||s;return s=p,n=f.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,p){t=h(f,p,0)},this.setState=function(f,p,d){let g=f.clippingPlanes,x=f.clipIntersection,m=f.clipShadows,u=i.get(f);if(!s||g===null||g.length===0||r&&!m)r?h(null):l();else{let E=r?0:n,y=E*4,M=u.clippingState||null;c.value=M,M=h(g,p,y,d);for(let C=0;C!==y;++C)M[C]=t[C];u.clippingState=M,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=E}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(f,p,d,g){let x=f!==null?f.length:0,m=null;if(x!==0){if(m=c.value,g!==!0||m===null){let u=d+x*4,E=p.matrixWorldInverse;a.getNormalMatrix(E),(m===null||m.length<u)&&(m=new Float32Array(u));for(let y=0,M=d;y!==x;++y,M+=4)o.copy(f[y]).applyMatrix4(E,a),o.normal.toArray(m,M),m[M+3]=o.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}function qv(i){let e=new WeakMap;function t(o,a){return a===Ko?o.mapping=Zr:a===zh&&(o.mapping=$r),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===Ko||a===zh)if(e.has(o)){let c=e.get(o).texture;return t(c,o.mapping)}else{let c=o.image;if(c&&c.height>0){let l=new yu(c.height);return l.fromEquirectangularTexture(i,o),e.set(o,l),o.addEventListener("dispose",s),t(l.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}var Lc=class extends Pc{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,o=n+e,a=s+t,c=s-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},kr=4,Jf=[.125,.215,.35,.446,.526,.582],ir=20,yh=new Lc,Qf=new dt,vh=null,_h=0,Mh=0,Eh=!1,er=(1+Math.sqrt(5))/2,Or=1/er,jf=[new S(-er,Or,0),new S(er,Or,0),new S(-Or,0,er),new S(Or,0,er),new S(0,er,-Or),new S(0,er,Or),new S(-1,1,-1),new S(1,1,-1),new S(-1,1,1),new S(1,1,1)],eo=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){vh=this._renderer.getRenderTarget(),_h=this._renderer.getActiveCubeFace(),Mh=this._renderer.getActiveMipmapLevel(),Eh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=np(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=tp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(vh,_h,Mh),this._renderer.xr.enabled=Eh,e.scissorTest=!1,rc(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Zr||e.mapping===$r?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),vh=this._renderer.getRenderTarget(),_h=this._renderer.getActiveCubeFace(),Mh=this._renderer.getActiveMipmapLevel(),Eh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:gn,minFilter:gn,generateMipmaps:!1,type:ua,format:di,colorSpace:Fs,depthBuffer:!1},s=ep(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ep(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Yv(r)),this._blurMaterial=Zv(r,e,t)}return s}_compileMaterial(e){let t=new ht(this._lodPlanes[0],e);this._renderer.compile(t,yh)}_sceneToCubeUV(e,t,n,s){let a=new Nn(90,1,t,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,p=h.toneMapping;h.getClearColor(Qf),h.toneMapping=Cs,h.autoClear=!1;let d=new xt({name:"PMREM.Background",side:yn,depthWrite:!1,depthTest:!1}),g=new ht(new St,d),x=!1,m=e.background;m?m.isColor&&(d.color.copy(m),e.background=null,x=!0):(d.color.copy(Qf),x=!0);for(let u=0;u<6;u++){let E=u%3;E===0?(a.up.set(0,c[u],0),a.lookAt(l[u],0,0)):E===1?(a.up.set(0,0,c[u]),a.lookAt(0,l[u],0)):(a.up.set(0,c[u],0),a.lookAt(0,0,l[u]));let y=this._cubeSize;rc(s,E*y,u>2?y:0,y,y),h.setRenderTarget(s),x&&h.render(g,a),h.render(e,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=p,h.autoClear=f,e.background=m}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===Zr||e.mapping===$r;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=np()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=tp());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new ht(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;let c=this._cubeSize;rc(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(o,yh)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=jf[(s-r-1)%jf.length];this._blur(e,r-1,r,o,a)}t.autoClear=n}_blur(e,t,n,s,r){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,s,"latitudinal",r),this._halfBlur(o,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,o,a){let c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,f=new ht(this._lodPlanes[s],l),p=l.uniforms,d=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*ir-1),x=r/g,m=isFinite(r)?1+Math.floor(h*x):ir;m>ir&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ir}`);let u=[],E=0;for(let T=0;T<ir;++T){let P=T/x,W=Math.exp(-P*P/2);u.push(W),T===0?E+=W:T<m&&(E+=2*W)}for(let T=0;T<u.length;T++)u[T]=u[T]/E;p.envMap.value=e.texture,p.samples.value=m,p.weights.value=u,p.latitudinal.value=o==="latitudinal",a&&(p.poleAxis.value=a);let{_lodMax:y}=this;p.dTheta.value=g,p.mipInt.value=y-n;let M=this._sizeLods[s],C=3*M*(s>y-kr?s-y+kr:0),A=4*(this._cubeSize-M);rc(t,C,A,3*M,2*M),c.setRenderTarget(t),c.render(f,yh)}};function Yv(i){let e=[],t=[],n=[],s=i,r=i-kr+1+Jf.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);t.push(a);let c=1/a;o>i-kr?c=Jf[o-i+kr-1]:o===0&&(c=0),n.push(c);let l=1/(a-2),h=-l,f=1+l,p=[h,h,f,h,f,f,h,h,f,f,h,f],d=6,g=6,x=3,m=2,u=1,E=new Float32Array(x*g*d),y=new Float32Array(m*g*d),M=new Float32Array(u*g*d);for(let A=0;A<d;A++){let T=A%3*2/3-1,P=A>2?0:-1,W=[T,P,0,T+2/3,P,0,T+2/3,P+1,0,T,P,0,T+2/3,P+1,0,T,P+1,0];E.set(W,x*g*A),y.set(p,m*g*A);let v=[A,A,A,A,A,A];M.set(v,u*g*A)}let C=new Pt;C.setAttribute("position",new fn(E,x)),C.setAttribute("uv",new fn(y,m)),C.setAttribute("faceIndex",new fn(M,u)),e.push(C),s>kr&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function ep(i,e,t){let n=new ds(i,e,t);return n.texture.mapping=Kc,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function rc(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function Zv(i,e,t){let n=new Float32Array(ir),s=new S(0,1,0);return new Qi({name:"SphericalGaussianBlur",defines:{n:ir,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:cd(),fragmentShader:`

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
		`,blending:As,depthTest:!1,depthWrite:!1})}function tp(){return new Qi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:cd(),fragmentShader:`

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
		`,blending:As,depthTest:!1,depthWrite:!1})}function np(){return new Qi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:cd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:As,depthTest:!1,depthWrite:!1})}function cd(){return`

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
	`}function $v(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){let c=a.mapping,l=c===Ko||c===zh,h=c===Zr||c===$r;if(l||h){let f=e.get(a),p=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==p)return t===null&&(t=new eo(i)),f=l?t.fromEquirectangular(a,f):t.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),f.texture;if(f!==void 0)return f.texture;{let d=a.image;return l&&d&&d.height>0||h&&d&&s(d)?(t===null&&(t=new eo(i)),f=l?t.fromEquirectangular(a):t.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),a.addEventListener("dispose",r),f.texture):null}}}return a}function s(a){let c=0,l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function r(a){let c=a.target;c.removeEventListener("dispose",r);let l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function Kv(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&vc("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Jv(i,e,t,n){let s={},r=new WeakMap;function o(f){let p=f.target;p.index!==null&&e.remove(p.index);for(let g in p.attributes)e.remove(p.attributes[g]);for(let g in p.morphAttributes){let x=p.morphAttributes[g];for(let m=0,u=x.length;m<u;m++)e.remove(x[m])}p.removeEventListener("dispose",o),delete s[p.id];let d=r.get(p);d&&(e.remove(d),r.delete(p)),n.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,t.memory.geometries--}function a(f,p){return s[p.id]===!0||(p.addEventListener("dispose",o),s[p.id]=!0,t.memory.geometries++),p}function c(f){let p=f.attributes;for(let g in p)e.update(p[g],i.ARRAY_BUFFER);let d=f.morphAttributes;for(let g in d){let x=d[g];for(let m=0,u=x.length;m<u;m++)e.update(x[m],i.ARRAY_BUFFER)}}function l(f){let p=[],d=f.index,g=f.attributes.position,x=0;if(d!==null){let E=d.array;x=d.version;for(let y=0,M=E.length;y<M;y+=3){let C=E[y+0],A=E[y+1],T=E[y+2];p.push(C,A,A,T,T,C)}}else if(g!==void 0){let E=g.array;x=g.version;for(let y=0,M=E.length/3-1;y<M;y+=3){let C=y+0,A=y+1,T=y+2;p.push(C,A,A,T,T,C)}}else return;let m=new(Jp(p)?Cc:Ac)(p,1);m.version=x;let u=r.get(f);u&&e.remove(u),r.set(f,m)}function h(f){let p=r.get(f);if(p){let d=f.index;d!==null&&p.version<d.version&&l(f)}else l(f);return r.get(f)}return{get:a,update:c,getWireframeAttribute:h}}function Qv(i,e,t){let n;function s(p){n=p}let r,o;function a(p){r=p.type,o=p.bytesPerElement}function c(p,d){i.drawElements(n,d,r,p*o),t.update(d,n,1)}function l(p,d,g){g!==0&&(i.drawElementsInstanced(n,d,r,p*o,g),t.update(d,n,g))}function h(p,d,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,p,0,g);let m=0;for(let u=0;u<g;u++)m+=d[u];t.update(m,n,1)}function f(p,d,g,x){if(g===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let u=0;u<p.length;u++)l(p[u]/o,d[u],x[u]);else{m.multiDrawElementsInstancedWEBGL(n,d,0,r,p,0,x,0,g);let u=0;for(let E=0;E<g;E++)u+=d[E];for(let E=0;E<x.length;E++)t.update(u,n,x[E])}}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=f}function jv(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(r/3);break;case i.LINES:t.lines+=a*(r/2);break;case i.LINE_STRIP:t.lines+=a*(r-1);break;case i.LINE_LOOP:t.lines+=a*r;break;case i.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function e_(i,e,t){let n=new WeakMap,s=new Kt;function r(o,a,c){let l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=h!==void 0?h.length:0,p=n.get(a);if(p===void 0||p.count!==f){let W=function(){T.dispose(),n.delete(a),a.removeEventListener("dispose",W)};p!==void 0&&p.texture.dispose();let d=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],u=a.morphAttributes.normal||[],E=a.morphAttributes.color||[],y=0;d===!0&&(y=1),g===!0&&(y=2),x===!0&&(y=3);let M=a.attributes.position.count*y,C=1;M>e.maxTextureSize&&(C=Math.ceil(M/e.maxTextureSize),M=e.maxTextureSize);let A=new Float32Array(M*C*4*f),T=new Rc(A,M,C,f);T.type=Ki,T.needsUpdate=!0;let P=y*4;for(let v=0;v<f;v++){let b=m[v],B=u[v],k=E[v],F=M*C*4*v;for(let H=0;H<b.count;H++){let J=H*P;d===!0&&(s.fromBufferAttribute(b,H),A[F+J+0]=s.x,A[F+J+1]=s.y,A[F+J+2]=s.z,A[F+J+3]=0),g===!0&&(s.fromBufferAttribute(B,H),A[F+J+4]=s.x,A[F+J+5]=s.y,A[F+J+6]=s.z,A[F+J+7]=0),x===!0&&(s.fromBufferAttribute(k,H),A[F+J+8]=s.x,A[F+J+9]=s.y,A[F+J+10]=s.z,A[F+J+11]=k.itemSize===4?s.w:1)}}p={count:f,texture:T,size:new Ne(M,C)},n.set(a,p),a.addEventListener("dispose",W)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let d=0;for(let x=0;x<l.length;x++)d+=l[x];let g=a.morphTargetsRelative?1:1-d;c.getUniforms().setValue(i,"morphTargetBaseInfluence",g),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",p.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",p.size)}return{update:r}}function t_(i,e,t,n){let s=new WeakMap;function r(c){let l=n.render.frame,h=c.geometry,f=e.get(c,h);if(s.get(f)!==l&&(e.update(f),s.set(f,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){let p=c.skeleton;s.get(p)!==l&&(p.update(),s.set(p,l))}return f}function o(){s=new WeakMap}function a(c){let l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:o}}var Dc=class extends Kn{constructor(e,t,n,s,r,o,a,c,l,h=Wr){if(h!==Wr&&h!==Jr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Wr&&(n=or),n===void 0&&h===Jr&&(n=Kr),super(null,s,r,o,a,c,h,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:ni,this.minFilter=c!==void 0?c:ni,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},t0=new Kn,ip=new Dc(1,1),n0=new Rc,i0=new gu,s0=new Ic,sp=[],rp=[],op=new Float32Array(16),ap=new Float32Array(9),cp=new Float32Array(4);function oo(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=sp[s];if(r===void 0&&(r=new Float32Array(s),sp[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function wn(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function bn(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Qc(i,e){let t=rp[e];t===void 0&&(t=new Int32Array(e),rp[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function n_(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function i_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(wn(t,e))return;i.uniform2fv(this.addr,e),bn(t,e)}}function s_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(wn(t,e))return;i.uniform3fv(this.addr,e),bn(t,e)}}function r_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(wn(t,e))return;i.uniform4fv(this.addr,e),bn(t,e)}}function o_(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(wn(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),bn(t,e)}else{if(wn(t,n))return;cp.set(n),i.uniformMatrix2fv(this.addr,!1,cp),bn(t,n)}}function a_(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(wn(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),bn(t,e)}else{if(wn(t,n))return;ap.set(n),i.uniformMatrix3fv(this.addr,!1,ap),bn(t,n)}}function c_(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(wn(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),bn(t,e)}else{if(wn(t,n))return;op.set(n),i.uniformMatrix4fv(this.addr,!1,op),bn(t,n)}}function l_(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function h_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(wn(t,e))return;i.uniform2iv(this.addr,e),bn(t,e)}}function u_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(wn(t,e))return;i.uniform3iv(this.addr,e),bn(t,e)}}function d_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(wn(t,e))return;i.uniform4iv(this.addr,e),bn(t,e)}}function f_(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function p_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(wn(t,e))return;i.uniform2uiv(this.addr,e),bn(t,e)}}function m_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(wn(t,e))return;i.uniform3uiv(this.addr,e),bn(t,e)}}function g_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(wn(t,e))return;i.uniform4uiv(this.addr,e),bn(t,e)}}function x_(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(ip.compareFunction=Kp,r=ip):r=t0,t.setTexture2D(e||r,s)}function y_(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||i0,s)}function v_(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||s0,s)}function __(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||n0,s)}function M_(i){switch(i){case 5126:return n_;case 35664:return i_;case 35665:return s_;case 35666:return r_;case 35674:return o_;case 35675:return a_;case 35676:return c_;case 5124:case 35670:return l_;case 35667:case 35671:return h_;case 35668:case 35672:return u_;case 35669:case 35673:return d_;case 5125:return f_;case 36294:return p_;case 36295:return m_;case 36296:return g_;case 35678:case 36198:case 36298:case 36306:case 35682:return x_;case 35679:case 36299:case 36307:return y_;case 35680:case 36300:case 36308:case 36293:return v_;case 36289:case 36303:case 36311:case 36292:return __}}function E_(i,e){i.uniform1fv(this.addr,e)}function S_(i,e){let t=oo(e,this.size,2);i.uniform2fv(this.addr,t)}function w_(i,e){let t=oo(e,this.size,3);i.uniform3fv(this.addr,t)}function b_(i,e){let t=oo(e,this.size,4);i.uniform4fv(this.addr,t)}function T_(i,e){let t=oo(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function R_(i,e){let t=oo(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function A_(i,e){let t=oo(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function C_(i,e){i.uniform1iv(this.addr,e)}function P_(i,e){i.uniform2iv(this.addr,e)}function I_(i,e){i.uniform3iv(this.addr,e)}function L_(i,e){i.uniform4iv(this.addr,e)}function D_(i,e){i.uniform1uiv(this.addr,e)}function U_(i,e){i.uniform2uiv(this.addr,e)}function H_(i,e){i.uniform3uiv(this.addr,e)}function N_(i,e){i.uniform4uiv(this.addr,e)}function F_(i,e,t){let n=this.cache,s=e.length,r=Qc(t,s);wn(n,r)||(i.uniform1iv(this.addr,r),bn(n,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||t0,r[o])}function O_(i,e,t){let n=this.cache,s=e.length,r=Qc(t,s);wn(n,r)||(i.uniform1iv(this.addr,r),bn(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||i0,r[o])}function z_(i,e,t){let n=this.cache,s=e.length,r=Qc(t,s);wn(n,r)||(i.uniform1iv(this.addr,r),bn(n,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||s0,r[o])}function B_(i,e,t){let n=this.cache,s=e.length,r=Qc(t,s);wn(n,r)||(i.uniform1iv(this.addr,r),bn(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||n0,r[o])}function k_(i){switch(i){case 5126:return E_;case 35664:return S_;case 35665:return w_;case 35666:return b_;case 35674:return T_;case 35675:return R_;case 35676:return A_;case 5124:case 35670:return C_;case 35667:case 35671:return P_;case 35668:case 35672:return I_;case 35669:case 35673:return L_;case 5125:return D_;case 36294:return U_;case 36295:return H_;case 36296:return N_;case 35678:case 36198:case 36298:case 36306:case 35682:return F_;case 35679:case 36299:case 36307:return O_;case 35680:case 36300:case 36308:case 36293:return z_;case 36289:case 36303:case 36311:case 36292:return B_}}var vu=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=M_(t.type)}},_u=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=k_(t.type)}},Mu=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],n)}}},Sh=/(\w+)(\])?(\[|\.)?/g;function lp(i,e){i.seq.push(e),i.map[e.id]=e}function V_(i,e,t){let n=i.name,s=n.length;for(Sh.lastIndex=0;;){let r=Sh.exec(n),o=Sh.lastIndex,a=r[1],c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){lp(t,l===void 0?new vu(a,i,e):new _u(a,i,e));break}else{let f=t.map[a];f===void 0&&(f=new Mu(a),lp(t,f)),t=f}}}var qr=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);V_(r,o,this)}}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&n.push(o)}return n}};function hp(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var G_=37297,W_=0;function X_(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function q_(i){let e=qt.getPrimaries(qt.workingColorSpace),t=qt.getPrimaries(i),n;switch(e===t?n="":e===wc&&t===Sc?n="LinearDisplayP3ToLinearSRGB":e===Sc&&t===wc&&(n="LinearSRGBToLinearDisplayP3"),i){case Fs:case Jc:return[n,"LinearTransferOETF"];case pt:case od:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function up(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+X_(i.getShaderSource(e),o)}else return s}function Y_(i,e){let t=q_(e);return`vec4 ${i}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function Z_(i,e){let t;switch(e){case r1:t="Linear";break;case o1:t="Reinhard";break;case a1:t="Cineon";break;case Ju:t="ACESFilmic";break;case l1:t="AgX";break;case h1:t="Neutral";break;case c1:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var oc=new S;function $_(){qt.getLuminanceCoefficients(oc);let i=oc.x.toFixed(4),e=oc.y.toFixed(4),t=oc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function K_(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Wo).join(`
`)}function J_(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Q_(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function Wo(i){return i!==""}function dp(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function fp(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var j_=/^[ \t]*#include +<([\w\d./]+)>/gm;function Eu(i){return i.replace(j_,t2)}var e2=new Map;function t2(i,e){let t=Et[e];if(t===void 0){let n=e2.get(e);if(n!==void 0)t=Et[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Eu(t)}var n2=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function pp(i){return i.replace(n2,i2)}function i2(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function mp(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}function s2(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Fp?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Ku?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===ls&&(e="SHADOWMAP_TYPE_VSM"),e}function r2(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Zr:case $r:e="ENVMAP_TYPE_CUBE";break;case Kc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function o2(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case $r:e="ENVMAP_MODE_REFRACTION";break}return e}function a2(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Op:e="ENVMAP_BLENDING_MULTIPLY";break;case i1:e="ENVMAP_BLENDING_MIX";break;case s1:e="ENVMAP_BLENDING_ADD";break}return e}function c2(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function l2(i,e,t,n){let s=i.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,c=s2(t),l=r2(t),h=o2(t),f=a2(t),p=c2(t),d=K_(t),g=J_(r),x=s.createProgram(),m,u,E=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Wo).join(`
`),m.length>0&&(m+=`
`),u=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Wo).join(`
`),u.length>0&&(u+=`
`)):(m=[mp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Wo).join(`
`),u=[mp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+f:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Cs?"#define TONE_MAPPING":"",t.toneMapping!==Cs?Et.tonemapping_pars_fragment:"",t.toneMapping!==Cs?Z_("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Et.colorspace_pars_fragment,Y_("linearToOutputTexel",t.outputColorSpace),$_(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Wo).join(`
`)),o=Eu(o),o=dp(o,t),o=fp(o,t),a=Eu(a),a=dp(a,t),a=fp(a,t),o=pp(o),a=pp(a),t.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,u=["#define varying in",t.glslVersion===Lf?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Lf?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);let y=E+m+o,M=E+u+a,C=hp(s,s.VERTEX_SHADER,y),A=hp(s,s.FRAGMENT_SHADER,M);s.attachShader(x,C),s.attachShader(x,A),t.index0AttributeName!==void 0?s.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function T(b){if(i.debug.checkShaderErrors){let B=s.getProgramInfoLog(x).trim(),k=s.getShaderInfoLog(C).trim(),F=s.getShaderInfoLog(A).trim(),H=!0,J=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(H=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,x,C,A);else{let fe=up(s,C,"vertex"),ie=up(s,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+b.name+`
Material Type: `+b.type+`

Program Info Log: `+B+`
`+fe+`
`+ie)}else B!==""?console.warn("THREE.WebGLProgram: Program Info Log:",B):(k===""||F==="")&&(J=!1);J&&(b.diagnostics={runnable:H,programLog:B,vertexShader:{log:k,prefix:m},fragmentShader:{log:F,prefix:u}})}s.deleteShader(C),s.deleteShader(A),P=new qr(s,x),W=Q_(s,x)}let P;this.getUniforms=function(){return P===void 0&&T(this),P};let W;this.getAttributes=function(){return W===void 0&&T(this),W};let v=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return v===!1&&(v=s.getProgramParameter(x,G_)),v},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=W_++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=C,this.fragmentShader=A,this}var h2=0,Su=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new wu(e),t.set(e,n)),n}},wu=class{constructor(e){this.id=h2++,this.code=e,this.usedTimes=0}};function u2(i,e,t,n,s,r,o){let a=new ea,c=new Su,l=new Set,h=[],f=s.logarithmicDepthBuffer,p=s.reverseDepthBuffer,d=s.vertexTextures,g=s.precision,x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(v){return l.add(v),v===0?"uv":`uv${v}`}function u(v,b,B,k,F){let H=k.fog,J=F.geometry,fe=v.isMeshStandardMaterial?k.environment:null,ie=(v.isMeshStandardMaterial?t:e).get(v.envMap||fe),pe=ie&&ie.mapping===Kc?ie.image.height:null,N=x[v.type];v.precision!==null&&(g=s.getMaxPrecision(v.precision),g!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",g,"instead."));let j=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,se=j!==void 0?j.length:0,te=0;J.morphAttributes.position!==void 0&&(te=1),J.morphAttributes.normal!==void 0&&(te=2),J.morphAttributes.color!==void 0&&(te=3);let O,le,X,V;if(N){let Rt=$i[N];O=Rt.vertexShader,le=Rt.fragmentShader}else O=v.vertexShader,le=v.fragmentShader,c.update(v),X=c.getVertexShaderID(v),V=c.getFragmentShaderID(v);let Z=i.getRenderTarget(),xe=F.isInstancedMesh===!0,Ce=F.isBatchedMesh===!0,_e=!!v.map,ne=!!v.matcap,I=!!ie,ye=!!v.aoMap,ee=!!v.lightMap,ae=!!v.bumpMap,me=!!v.normalMap,Ae=!!v.displacementMap,Me=!!v.emissiveMap,U=!!v.metalnessMap,w=!!v.roughnessMap,K=v.anisotropy>0,ge=v.clearcoat>0,be=v.dispersion>0,Ee=v.iridescence>0,Be=v.sheen>0,Oe=v.transmission>0,Xe=K&&!!v.anisotropyMap,_t=ge&&!!v.clearcoatMap,De=ge&&!!v.clearcoatNormalMap,$=ge&&!!v.clearcoatRoughnessMap,ve=Ee&&!!v.iridescenceMap,Ie=Ee&&!!v.iridescenceThicknessMap,Pe=Be&&!!v.sheenColorMap,Te=Be&&!!v.sheenRoughnessMap,he=!!v.specularMap,ke=!!v.specularColorMap,q=!!v.specularIntensityMap,Re=Oe&&!!v.transmissionMap,ce=Oe&&!!v.thicknessMap,Se=!!v.gradientMap,Ue=!!v.alphaMap,Fe=v.alphaTest>0,ut=!!v.alphaHash,Mt=!!v.extensions,zt=Cs;v.toneMapped&&(Z===null||Z.isXRRenderTarget===!0)&&(zt=i.toneMapping);let ft={shaderID:N,shaderType:v.type,shaderName:v.name,vertexShader:O,fragmentShader:le,defines:v.defines,customVertexShaderID:X,customFragmentShaderID:V,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:g,batching:Ce,batchingColor:Ce&&F._colorsTexture!==null,instancing:xe,instancingColor:xe&&F.instanceColor!==null,instancingMorph:xe&&F.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:Z===null?i.outputColorSpace:Z.isXRRenderTarget===!0?Z.texture.colorSpace:Fs,alphaToCoverage:!!v.alphaToCoverage,map:_e,matcap:ne,envMap:I,envMapMode:I&&ie.mapping,envMapCubeUVHeight:pe,aoMap:ye,lightMap:ee,bumpMap:ae,normalMap:me,displacementMap:d&&Ae,emissiveMap:Me,normalMapObjectSpace:me&&v.normalMapType===f1,normalMapTangentSpace:me&&v.normalMapType===$p,metalnessMap:U,roughnessMap:w,anisotropy:K,anisotropyMap:Xe,clearcoat:ge,clearcoatMap:_t,clearcoatNormalMap:De,clearcoatRoughnessMap:$,dispersion:be,iridescence:Ee,iridescenceMap:ve,iridescenceThicknessMap:Ie,sheen:Be,sheenColorMap:Pe,sheenRoughnessMap:Te,specularMap:he,specularColorMap:ke,specularIntensityMap:q,transmission:Oe,transmissionMap:Re,thicknessMap:ce,gradientMap:Se,opaque:v.transparent===!1&&v.blending===Gr&&v.alphaToCoverage===!1,alphaMap:Ue,alphaTest:Fe,alphaHash:ut,combine:v.combine,mapUv:_e&&m(v.map.channel),aoMapUv:ye&&m(v.aoMap.channel),lightMapUv:ee&&m(v.lightMap.channel),bumpMapUv:ae&&m(v.bumpMap.channel),normalMapUv:me&&m(v.normalMap.channel),displacementMapUv:Ae&&m(v.displacementMap.channel),emissiveMapUv:Me&&m(v.emissiveMap.channel),metalnessMapUv:U&&m(v.metalnessMap.channel),roughnessMapUv:w&&m(v.roughnessMap.channel),anisotropyMapUv:Xe&&m(v.anisotropyMap.channel),clearcoatMapUv:_t&&m(v.clearcoatMap.channel),clearcoatNormalMapUv:De&&m(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:$&&m(v.clearcoatRoughnessMap.channel),iridescenceMapUv:ve&&m(v.iridescenceMap.channel),iridescenceThicknessMapUv:Ie&&m(v.iridescenceThicknessMap.channel),sheenColorMapUv:Pe&&m(v.sheenColorMap.channel),sheenRoughnessMapUv:Te&&m(v.sheenRoughnessMap.channel),specularMapUv:he&&m(v.specularMap.channel),specularColorMapUv:ke&&m(v.specularColorMap.channel),specularIntensityMapUv:q&&m(v.specularIntensityMap.channel),transmissionMapUv:Re&&m(v.transmissionMap.channel),thicknessMapUv:ce&&m(v.thicknessMap.channel),alphaMapUv:Ue&&m(v.alphaMap.channel),vertexTangents:!!J.attributes.tangent&&(me||K),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!J.attributes.uv&&(_e||Ue),fog:!!H,useFog:v.fog===!0,fogExp2:!!H&&H.isFogExp2,flatShading:v.flatShading===!0,sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:p,skinning:F.isSkinnedMesh===!0,morphTargets:J.morphAttributes.position!==void 0,morphNormals:J.morphAttributes.normal!==void 0,morphColors:J.morphAttributes.color!==void 0,morphTargetsCount:se,morphTextureStride:te,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:v.dithering,shadowMapEnabled:i.shadowMap.enabled&&B.length>0,shadowMapType:i.shadowMap.type,toneMapping:zt,decodeVideoTexture:_e&&v.map.isVideoTexture===!0&&qt.getTransfer(v.map.colorSpace)===on,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===Lt,flipSided:v.side===yn,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:Mt&&v.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Mt&&v.extensions.multiDraw===!0||Ce)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return ft.vertexUv1s=l.has(1),ft.vertexUv2s=l.has(2),ft.vertexUv3s=l.has(3),l.clear(),ft}function E(v){let b=[];if(v.shaderID?b.push(v.shaderID):(b.push(v.customVertexShaderID),b.push(v.customFragmentShaderID)),v.defines!==void 0)for(let B in v.defines)b.push(B),b.push(v.defines[B]);return v.isRawShaderMaterial===!1&&(y(b,v),M(b,v),b.push(i.outputColorSpace)),b.push(v.customProgramCacheKey),b.join()}function y(v,b){v.push(b.precision),v.push(b.outputColorSpace),v.push(b.envMapMode),v.push(b.envMapCubeUVHeight),v.push(b.mapUv),v.push(b.alphaMapUv),v.push(b.lightMapUv),v.push(b.aoMapUv),v.push(b.bumpMapUv),v.push(b.normalMapUv),v.push(b.displacementMapUv),v.push(b.emissiveMapUv),v.push(b.metalnessMapUv),v.push(b.roughnessMapUv),v.push(b.anisotropyMapUv),v.push(b.clearcoatMapUv),v.push(b.clearcoatNormalMapUv),v.push(b.clearcoatRoughnessMapUv),v.push(b.iridescenceMapUv),v.push(b.iridescenceThicknessMapUv),v.push(b.sheenColorMapUv),v.push(b.sheenRoughnessMapUv),v.push(b.specularMapUv),v.push(b.specularColorMapUv),v.push(b.specularIntensityMapUv),v.push(b.transmissionMapUv),v.push(b.thicknessMapUv),v.push(b.combine),v.push(b.fogExp2),v.push(b.sizeAttenuation),v.push(b.morphTargetsCount),v.push(b.morphAttributeCount),v.push(b.numDirLights),v.push(b.numPointLights),v.push(b.numSpotLights),v.push(b.numSpotLightMaps),v.push(b.numHemiLights),v.push(b.numRectAreaLights),v.push(b.numDirLightShadows),v.push(b.numPointLightShadows),v.push(b.numSpotLightShadows),v.push(b.numSpotLightShadowsWithMaps),v.push(b.numLightProbes),v.push(b.shadowMapType),v.push(b.toneMapping),v.push(b.numClippingPlanes),v.push(b.numClipIntersection),v.push(b.depthPacking)}function M(v,b){a.disableAll(),b.supportsVertexTextures&&a.enable(0),b.instancing&&a.enable(1),b.instancingColor&&a.enable(2),b.instancingMorph&&a.enable(3),b.matcap&&a.enable(4),b.envMap&&a.enable(5),b.normalMapObjectSpace&&a.enable(6),b.normalMapTangentSpace&&a.enable(7),b.clearcoat&&a.enable(8),b.iridescence&&a.enable(9),b.alphaTest&&a.enable(10),b.vertexColors&&a.enable(11),b.vertexAlphas&&a.enable(12),b.vertexUv1s&&a.enable(13),b.vertexUv2s&&a.enable(14),b.vertexUv3s&&a.enable(15),b.vertexTangents&&a.enable(16),b.anisotropy&&a.enable(17),b.alphaHash&&a.enable(18),b.batching&&a.enable(19),b.dispersion&&a.enable(20),b.batchingColor&&a.enable(21),v.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.reverseDepthBuffer&&a.enable(4),b.skinning&&a.enable(5),b.morphTargets&&a.enable(6),b.morphNormals&&a.enable(7),b.morphColors&&a.enable(8),b.premultipliedAlpha&&a.enable(9),b.shadowMapEnabled&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),b.alphaToCoverage&&a.enable(20),v.push(a.mask)}function C(v){let b=x[v.type],B;if(b){let k=$i[b];B=tx.clone(k.uniforms)}else B=v.uniforms;return B}function A(v,b){let B;for(let k=0,F=h.length;k<F;k++){let H=h[k];if(H.cacheKey===b){B=H,++B.usedTimes;break}}return B===void 0&&(B=new l2(i,b,v,r),h.push(B)),B}function T(v){if(--v.usedTimes===0){let b=h.indexOf(v);h[b]=h[h.length-1],h.pop(),v.destroy()}}function P(v){c.remove(v)}function W(){c.dispose()}return{getParameters:u,getProgramCacheKey:E,getUniforms:C,acquireProgram:A,releaseProgram:T,releaseShaderCache:P,programs:h,dispose:W}}function d2(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,c){i.get(o)[a]=c}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function f2(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function gp(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function xp(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(f,p,d,g,x,m){let u=i[e];return u===void 0?(u={id:f.id,object:f,geometry:p,material:d,groupOrder:g,renderOrder:f.renderOrder,z:x,group:m},i[e]=u):(u.id=f.id,u.object=f,u.geometry=p,u.material=d,u.groupOrder=g,u.renderOrder=f.renderOrder,u.z=x,u.group=m),e++,u}function a(f,p,d,g,x,m){let u=o(f,p,d,g,x,m);d.transmission>0?n.push(u):d.transparent===!0?s.push(u):t.push(u)}function c(f,p,d,g,x,m){let u=o(f,p,d,g,x,m);d.transmission>0?n.unshift(u):d.transparent===!0?s.unshift(u):t.unshift(u)}function l(f,p){t.length>1&&t.sort(f||f2),n.length>1&&n.sort(p||gp),s.length>1&&s.sort(p||gp)}function h(){for(let f=e,p=i.length;f<p;f++){let d=i[f];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:a,unshift:c,finish:h,sort:l}}function p2(){let i=new WeakMap;function e(n,s){let r=i.get(n),o;return r===void 0?(o=new xp,i.set(n,[o])):s>=r.length?(o=new xp,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function m2(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new S,color:new dt};break;case"SpotLight":t={position:new S,direction:new S,color:new dt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new S,color:new dt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new S,skyColor:new dt,groundColor:new dt};break;case"RectAreaLight":t={color:new dt,position:new S,halfWidth:new S,halfHeight:new S};break}return i[e.id]=t,t}}}function g2(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ne};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ne};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ne,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var x2=0;function y2(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function v2(i){let e=new m2,t=g2(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new S);let s=new S,r=new Tt,o=new Tt;function a(l){let h=0,f=0,p=0;for(let W=0;W<9;W++)n.probe[W].set(0,0,0);let d=0,g=0,x=0,m=0,u=0,E=0,y=0,M=0,C=0,A=0,T=0;l.sort(y2);for(let W=0,v=l.length;W<v;W++){let b=l[W],B=b.color,k=b.intensity,F=b.distance,H=b.shadow&&b.shadow.map?b.shadow.map.texture:null;if(b.isAmbientLight)h+=B.r*k,f+=B.g*k,p+=B.b*k;else if(b.isLightProbe){for(let J=0;J<9;J++)n.probe[J].addScaledVector(b.sh.coefficients[J],k);T++}else if(b.isDirectionalLight){let J=e.get(b);if(J.color.copy(b.color).multiplyScalar(b.intensity),b.castShadow){let fe=b.shadow,ie=t.get(b);ie.shadowIntensity=fe.intensity,ie.shadowBias=fe.bias,ie.shadowNormalBias=fe.normalBias,ie.shadowRadius=fe.radius,ie.shadowMapSize=fe.mapSize,n.directionalShadow[d]=ie,n.directionalShadowMap[d]=H,n.directionalShadowMatrix[d]=b.shadow.matrix,E++}n.directional[d]=J,d++}else if(b.isSpotLight){let J=e.get(b);J.position.setFromMatrixPosition(b.matrixWorld),J.color.copy(B).multiplyScalar(k),J.distance=F,J.coneCos=Math.cos(b.angle),J.penumbraCos=Math.cos(b.angle*(1-b.penumbra)),J.decay=b.decay,n.spot[x]=J;let fe=b.shadow;if(b.map&&(n.spotLightMap[C]=b.map,C++,fe.updateMatrices(b),b.castShadow&&A++),n.spotLightMatrix[x]=fe.matrix,b.castShadow){let ie=t.get(b);ie.shadowIntensity=fe.intensity,ie.shadowBias=fe.bias,ie.shadowNormalBias=fe.normalBias,ie.shadowRadius=fe.radius,ie.shadowMapSize=fe.mapSize,n.spotShadow[x]=ie,n.spotShadowMap[x]=H,M++}x++}else if(b.isRectAreaLight){let J=e.get(b);J.color.copy(B).multiplyScalar(k),J.halfWidth.set(b.width*.5,0,0),J.halfHeight.set(0,b.height*.5,0),n.rectArea[m]=J,m++}else if(b.isPointLight){let J=e.get(b);if(J.color.copy(b.color).multiplyScalar(b.intensity),J.distance=b.distance,J.decay=b.decay,b.castShadow){let fe=b.shadow,ie=t.get(b);ie.shadowIntensity=fe.intensity,ie.shadowBias=fe.bias,ie.shadowNormalBias=fe.normalBias,ie.shadowRadius=fe.radius,ie.shadowMapSize=fe.mapSize,ie.shadowCameraNear=fe.camera.near,ie.shadowCameraFar=fe.camera.far,n.pointShadow[g]=ie,n.pointShadowMap[g]=H,n.pointShadowMatrix[g]=b.shadow.matrix,y++}n.point[g]=J,g++}else if(b.isHemisphereLight){let J=e.get(b);J.skyColor.copy(b.color).multiplyScalar(k),J.groundColor.copy(b.groundColor).multiplyScalar(k),n.hemi[u]=J,u++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=qe.LTC_FLOAT_1,n.rectAreaLTC2=qe.LTC_FLOAT_2):(n.rectAreaLTC1=qe.LTC_HALF_1,n.rectAreaLTC2=qe.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=f,n.ambient[2]=p;let P=n.hash;(P.directionalLength!==d||P.pointLength!==g||P.spotLength!==x||P.rectAreaLength!==m||P.hemiLength!==u||P.numDirectionalShadows!==E||P.numPointShadows!==y||P.numSpotShadows!==M||P.numSpotMaps!==C||P.numLightProbes!==T)&&(n.directional.length=d,n.spot.length=x,n.rectArea.length=m,n.point.length=g,n.hemi.length=u,n.directionalShadow.length=E,n.directionalShadowMap.length=E,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=M,n.spotShadowMap.length=M,n.directionalShadowMatrix.length=E,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=M+C-A,n.spotLightMap.length=C,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=T,P.directionalLength=d,P.pointLength=g,P.spotLength=x,P.rectAreaLength=m,P.hemiLength=u,P.numDirectionalShadows=E,P.numPointShadows=y,P.numSpotShadows=M,P.numSpotMaps=C,P.numLightProbes=T,n.version=x2++)}function c(l,h){let f=0,p=0,d=0,g=0,x=0,m=h.matrixWorldInverse;for(let u=0,E=l.length;u<E;u++){let y=l[u];if(y.isDirectionalLight){let M=n.directional[f];M.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(m),f++}else if(y.isSpotLight){let M=n.spot[d];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(m),M.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(m),d++}else if(y.isRectAreaLight){let M=n.rectArea[g];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(m),o.identity(),r.copy(y.matrixWorld),r.premultiply(m),o.extractRotation(r),M.halfWidth.set(y.width*.5,0,0),M.halfHeight.set(0,y.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),g++}else if(y.isPointLight){let M=n.point[p];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(m),p++}else if(y.isHemisphereLight){let M=n.hemi[x];M.direction.setFromMatrixPosition(y.matrixWorld),M.direction.transformDirection(m),x++}}}return{setup:a,setupView:c,state:n}}function yp(i){let e=new v2(i),t=[],n=[];function s(h){l.camera=h,t.length=0,n.length=0}function r(h){t.push(h)}function o(h){n.push(h)}function a(){e.setup(t)}function c(h){e.setupView(t,h)}let l={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function _2(i){let e=new WeakMap;function t(s,r=0){let o=e.get(s),a;return o===void 0?(a=new yp(i),e.set(s,[a])):r>=o.length?(a=new yp(i),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}var na=class extends Ds{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=d1,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},bu=class extends Ds{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},M2=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,E2=`uniform sampler2D shadow_pass;
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
}`;function S2(i,e,t){let n=new ta,s=new Ne,r=new Ne,o=new Kt,a=new na({depthPacking:rd}),c=new bu,l={},h=t.maxTextureSize,f={[Ji]:yn,[yn]:Ji,[Lt]:Lt},p=new Qi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ne},radius:{value:4}},vertexShader:M2,fragmentShader:E2}),d=p.clone();d.defines.HORIZONTAL_PASS=1;let g=new Pt;g.setAttribute("position",new fn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new ht(g,p),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Fp;let u=this.type;this.render=function(A,T,P){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;let W=i.getRenderTarget(),v=i.getActiveCubeFace(),b=i.getActiveMipmapLevel(),B=i.state;B.setBlending(As),B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);let k=u!==ls&&this.type===ls,F=u===ls&&this.type!==ls;for(let H=0,J=A.length;H<J;H++){let fe=A[H],ie=fe.shadow;if(ie===void 0){console.warn("THREE.WebGLShadowMap:",fe,"has no shadow.");continue}if(ie.autoUpdate===!1&&ie.needsUpdate===!1)continue;s.copy(ie.mapSize);let pe=ie.getFrameExtents();if(s.multiply(pe),r.copy(ie.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/pe.x),s.x=r.x*pe.x,ie.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/pe.y),s.y=r.y*pe.y,ie.mapSize.y=r.y)),ie.map===null||k===!0||F===!0){let j=this.type!==ls?{minFilter:ni,magFilter:ni}:{};ie.map!==null&&ie.map.dispose(),ie.map=new ds(s.x,s.y,j),ie.map.texture.name=fe.name+".shadowMap",ie.camera.updateProjectionMatrix()}i.setRenderTarget(ie.map),i.clear();let N=ie.getViewportCount();for(let j=0;j<N;j++){let se=ie.getViewport(j);o.set(r.x*se.x,r.y*se.y,r.x*se.z,r.y*se.w),B.viewport(o),ie.updateMatrices(fe,j),n=ie.getFrustum(),M(T,P,ie.camera,fe,this.type)}ie.isPointLightShadow!==!0&&this.type===ls&&E(ie,P),ie.needsUpdate=!1}u=this.type,m.needsUpdate=!1,i.setRenderTarget(W,v,b)};function E(A,T){let P=e.update(x);p.defines.VSM_SAMPLES!==A.blurSamples&&(p.defines.VSM_SAMPLES=A.blurSamples,d.defines.VSM_SAMPLES=A.blurSamples,p.needsUpdate=!0,d.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new ds(s.x,s.y)),p.uniforms.shadow_pass.value=A.map.texture,p.uniforms.resolution.value=A.mapSize,p.uniforms.radius.value=A.radius,i.setRenderTarget(A.mapPass),i.clear(),i.renderBufferDirect(T,null,P,p,x,null),d.uniforms.shadow_pass.value=A.mapPass.texture,d.uniforms.resolution.value=A.mapSize,d.uniforms.radius.value=A.radius,i.setRenderTarget(A.map),i.clear(),i.renderBufferDirect(T,null,P,d,x,null)}function y(A,T,P,W){let v=null,b=P.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(b!==void 0)v=b;else if(v=P.isPointLight===!0?c:a,i.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){let B=v.uuid,k=T.uuid,F=l[B];F===void 0&&(F={},l[B]=F);let H=F[k];H===void 0&&(H=v.clone(),F[k]=H,T.addEventListener("dispose",C)),v=H}if(v.visible=T.visible,v.wireframe=T.wireframe,W===ls?v.side=T.shadowSide!==null?T.shadowSide:T.side:v.side=T.shadowSide!==null?T.shadowSide:f[T.side],v.alphaMap=T.alphaMap,v.alphaTest=T.alphaTest,v.map=T.map,v.clipShadows=T.clipShadows,v.clippingPlanes=T.clippingPlanes,v.clipIntersection=T.clipIntersection,v.displacementMap=T.displacementMap,v.displacementScale=T.displacementScale,v.displacementBias=T.displacementBias,v.wireframeLinewidth=T.wireframeLinewidth,v.linewidth=T.linewidth,P.isPointLight===!0&&v.isMeshDistanceMaterial===!0){let B=i.properties.get(v);B.light=P}return v}function M(A,T,P,W,v){if(A.visible===!1)return;if(A.layers.test(T.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&v===ls)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,A.matrixWorld);let k=e.update(A),F=A.material;if(Array.isArray(F)){let H=k.groups;for(let J=0,fe=H.length;J<fe;J++){let ie=H[J],pe=F[ie.materialIndex];if(pe&&pe.visible){let N=y(A,pe,W,v);A.onBeforeShadow(i,A,T,P,k,N,ie),i.renderBufferDirect(P,null,k,N,A,ie),A.onAfterShadow(i,A,T,P,k,N,ie)}}}else if(F.visible){let H=y(A,F,W,v);A.onBeforeShadow(i,A,T,P,k,H,null),i.renderBufferDirect(P,null,k,H,A,null),A.onAfterShadow(i,A,T,P,k,H,null)}}let B=A.children;for(let k=0,F=B.length;k<F;k++)M(B[k],T,P,W,v)}function C(A){A.target.removeEventListener("dispose",C);for(let P in l){let W=l[P],v=A.target.uuid;v in W&&(W[v].dispose(),delete W[v])}}}var w2={[Lh]:Dh,[Uh]:Fh,[Hh]:Oh,[Yr]:Nh,[Dh]:Lh,[Fh]:Uh,[Oh]:Hh,[Nh]:Yr};function b2(i){function e(){let q=!1,Re=new Kt,ce=null,Se=new Kt(0,0,0,0);return{setMask:function(Ue){ce!==Ue&&!q&&(i.colorMask(Ue,Ue,Ue,Ue),ce=Ue)},setLocked:function(Ue){q=Ue},setClear:function(Ue,Fe,ut,Mt,zt){zt===!0&&(Ue*=Mt,Fe*=Mt,ut*=Mt),Re.set(Ue,Fe,ut,Mt),Se.equals(Re)===!1&&(i.clearColor(Ue,Fe,ut,Mt),Se.copy(Re))},reset:function(){q=!1,ce=null,Se.set(-1,0,0,0)}}}function t(){let q=!1,Re=!1,ce=null,Se=null,Ue=null;return{setReversed:function(Fe){Re=Fe},setTest:function(Fe){Fe?X(i.DEPTH_TEST):V(i.DEPTH_TEST)},setMask:function(Fe){ce!==Fe&&!q&&(i.depthMask(Fe),ce=Fe)},setFunc:function(Fe){if(Re&&(Fe=w2[Fe]),Se!==Fe){switch(Fe){case Lh:i.depthFunc(i.NEVER);break;case Dh:i.depthFunc(i.ALWAYS);break;case Uh:i.depthFunc(i.LESS);break;case Yr:i.depthFunc(i.LEQUAL);break;case Hh:i.depthFunc(i.EQUAL);break;case Nh:i.depthFunc(i.GEQUAL);break;case Fh:i.depthFunc(i.GREATER);break;case Oh:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Se=Fe}},setLocked:function(Fe){q=Fe},setClear:function(Fe){Ue!==Fe&&(i.clearDepth(Fe),Ue=Fe)},reset:function(){q=!1,ce=null,Se=null,Ue=null}}}function n(){let q=!1,Re=null,ce=null,Se=null,Ue=null,Fe=null,ut=null,Mt=null,zt=null;return{setTest:function(ft){q||(ft?X(i.STENCIL_TEST):V(i.STENCIL_TEST))},setMask:function(ft){Re!==ft&&!q&&(i.stencilMask(ft),Re=ft)},setFunc:function(ft,Rt,qn){(ce!==ft||Se!==Rt||Ue!==qn)&&(i.stencilFunc(ft,Rt,qn),ce=ft,Se=Rt,Ue=qn)},setOp:function(ft,Rt,qn){(Fe!==ft||ut!==Rt||Mt!==qn)&&(i.stencilOp(ft,Rt,qn),Fe=ft,ut=Rt,Mt=qn)},setLocked:function(ft){q=ft},setClear:function(ft){zt!==ft&&(i.clearStencil(ft),zt=ft)},reset:function(){q=!1,Re=null,ce=null,Se=null,Ue=null,Fe=null,ut=null,Mt=null,zt=null}}}let s=new e,r=new t,o=new n,a=new WeakMap,c=new WeakMap,l={},h={},f=new WeakMap,p=[],d=null,g=!1,x=null,m=null,u=null,E=null,y=null,M=null,C=null,A=new dt(0,0,0),T=0,P=!1,W=null,v=null,b=null,B=null,k=null,F=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),H=!1,J=0,fe=i.getParameter(i.VERSION);fe.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(fe)[1]),H=J>=1):fe.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(fe)[1]),H=J>=2);let ie=null,pe={},N=i.getParameter(i.SCISSOR_BOX),j=i.getParameter(i.VIEWPORT),se=new Kt().fromArray(N),te=new Kt().fromArray(j);function O(q,Re,ce,Se){let Ue=new Uint8Array(4),Fe=i.createTexture();i.bindTexture(q,Fe),i.texParameteri(q,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(q,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let ut=0;ut<ce;ut++)q===i.TEXTURE_3D||q===i.TEXTURE_2D_ARRAY?i.texImage3D(Re,0,i.RGBA,1,1,Se,0,i.RGBA,i.UNSIGNED_BYTE,Ue):i.texImage2D(Re+ut,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Ue);return Fe}let le={};le[i.TEXTURE_2D]=O(i.TEXTURE_2D,i.TEXTURE_2D,1),le[i.TEXTURE_CUBE_MAP]=O(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),le[i.TEXTURE_2D_ARRAY]=O(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),le[i.TEXTURE_3D]=O(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),r.setClear(1),o.setClear(0),X(i.DEPTH_TEST),r.setFunc(Yr),ee(!1),ae(wf),X(i.CULL_FACE),I(As);function X(q){l[q]!==!0&&(i.enable(q),l[q]=!0)}function V(q){l[q]!==!1&&(i.disable(q),l[q]=!1)}function Z(q,Re){return h[q]!==Re?(i.bindFramebuffer(q,Re),h[q]=Re,q===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=Re),q===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=Re),!0):!1}function xe(q,Re){let ce=p,Se=!1;if(q){ce=f.get(Re),ce===void 0&&(ce=[],f.set(Re,ce));let Ue=q.textures;if(ce.length!==Ue.length||ce[0]!==i.COLOR_ATTACHMENT0){for(let Fe=0,ut=Ue.length;Fe<ut;Fe++)ce[Fe]=i.COLOR_ATTACHMENT0+Fe;ce.length=Ue.length,Se=!0}}else ce[0]!==i.BACK&&(ce[0]=i.BACK,Se=!0);Se&&i.drawBuffers(ce)}function Ce(q){return d!==q?(i.useProgram(q),d=q,!0):!1}let _e={[tr]:i.FUNC_ADD,[Bg]:i.FUNC_SUBTRACT,[kg]:i.FUNC_REVERSE_SUBTRACT};_e[Vg]=i.MIN,_e[Gg]=i.MAX;let ne={[Wg]:i.ZERO,[Xg]:i.ONE,[qg]:i.SRC_COLOR,[Ph]:i.SRC_ALPHA,[Qg]:i.SRC_ALPHA_SATURATE,[Kg]:i.DST_COLOR,[Zg]:i.DST_ALPHA,[Yg]:i.ONE_MINUS_SRC_COLOR,[Ih]:i.ONE_MINUS_SRC_ALPHA,[Jg]:i.ONE_MINUS_DST_COLOR,[$g]:i.ONE_MINUS_DST_ALPHA,[jg]:i.CONSTANT_COLOR,[e1]:i.ONE_MINUS_CONSTANT_COLOR,[t1]:i.CONSTANT_ALPHA,[n1]:i.ONE_MINUS_CONSTANT_ALPHA};function I(q,Re,ce,Se,Ue,Fe,ut,Mt,zt,ft){if(q===As){g===!0&&(V(i.BLEND),g=!1);return}if(g===!1&&(X(i.BLEND),g=!0),q!==zg){if(q!==x||ft!==P){if((m!==tr||y!==tr)&&(i.blendEquation(i.FUNC_ADD),m=tr,y=tr),ft)switch(q){case Gr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case _c:i.blendFunc(i.ONE,i.ONE);break;case bf:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Tf:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",q);break}else switch(q){case Gr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case _c:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case bf:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Tf:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",q);break}u=null,E=null,M=null,C=null,A.set(0,0,0),T=0,x=q,P=ft}return}Ue=Ue||Re,Fe=Fe||ce,ut=ut||Se,(Re!==m||Ue!==y)&&(i.blendEquationSeparate(_e[Re],_e[Ue]),m=Re,y=Ue),(ce!==u||Se!==E||Fe!==M||ut!==C)&&(i.blendFuncSeparate(ne[ce],ne[Se],ne[Fe],ne[ut]),u=ce,E=Se,M=Fe,C=ut),(Mt.equals(A)===!1||zt!==T)&&(i.blendColor(Mt.r,Mt.g,Mt.b,zt),A.copy(Mt),T=zt),x=q,P=!1}function ye(q,Re){q.side===Lt?V(i.CULL_FACE):X(i.CULL_FACE);let ce=q.side===yn;Re&&(ce=!ce),ee(ce),q.blending===Gr&&q.transparent===!1?I(As):I(q.blending,q.blendEquation,q.blendSrc,q.blendDst,q.blendEquationAlpha,q.blendSrcAlpha,q.blendDstAlpha,q.blendColor,q.blendAlpha,q.premultipliedAlpha),r.setFunc(q.depthFunc),r.setTest(q.depthTest),r.setMask(q.depthWrite),s.setMask(q.colorWrite);let Se=q.stencilWrite;o.setTest(Se),Se&&(o.setMask(q.stencilWriteMask),o.setFunc(q.stencilFunc,q.stencilRef,q.stencilFuncMask),o.setOp(q.stencilFail,q.stencilZFail,q.stencilZPass)),Ae(q.polygonOffset,q.polygonOffsetFactor,q.polygonOffsetUnits),q.alphaToCoverage===!0?X(i.SAMPLE_ALPHA_TO_COVERAGE):V(i.SAMPLE_ALPHA_TO_COVERAGE)}function ee(q){W!==q&&(q?i.frontFace(i.CW):i.frontFace(i.CCW),W=q)}function ae(q){q!==Fg?(X(i.CULL_FACE),q!==v&&(q===wf?i.cullFace(i.BACK):q===Og?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):V(i.CULL_FACE),v=q}function me(q){q!==b&&(H&&i.lineWidth(q),b=q)}function Ae(q,Re,ce){q?(X(i.POLYGON_OFFSET_FILL),(B!==Re||k!==ce)&&(i.polygonOffset(Re,ce),B=Re,k=ce)):V(i.POLYGON_OFFSET_FILL)}function Me(q){q?X(i.SCISSOR_TEST):V(i.SCISSOR_TEST)}function U(q){q===void 0&&(q=i.TEXTURE0+F-1),ie!==q&&(i.activeTexture(q),ie=q)}function w(q,Re,ce){ce===void 0&&(ie===null?ce=i.TEXTURE0+F-1:ce=ie);let Se=pe[ce];Se===void 0&&(Se={type:void 0,texture:void 0},pe[ce]=Se),(Se.type!==q||Se.texture!==Re)&&(ie!==ce&&(i.activeTexture(ce),ie=ce),i.bindTexture(q,Re||le[q]),Se.type=q,Se.texture=Re)}function K(){let q=pe[ie];q!==void 0&&q.type!==void 0&&(i.bindTexture(q.type,null),q.type=void 0,q.texture=void 0)}function ge(){try{i.compressedTexImage2D.apply(i,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function be(){try{i.compressedTexImage3D.apply(i,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Ee(){try{i.texSubImage2D.apply(i,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Be(){try{i.texSubImage3D.apply(i,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Oe(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Xe(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function _t(){try{i.texStorage2D.apply(i,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function De(){try{i.texStorage3D.apply(i,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function $(){try{i.texImage2D.apply(i,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function ve(){try{i.texImage3D.apply(i,arguments)}catch(q){console.error("THREE.WebGLState:",q)}}function Ie(q){se.equals(q)===!1&&(i.scissor(q.x,q.y,q.z,q.w),se.copy(q))}function Pe(q){te.equals(q)===!1&&(i.viewport(q.x,q.y,q.z,q.w),te.copy(q))}function Te(q,Re){let ce=c.get(Re);ce===void 0&&(ce=new WeakMap,c.set(Re,ce));let Se=ce.get(q);Se===void 0&&(Se=i.getUniformBlockIndex(Re,q.name),ce.set(q,Se))}function he(q,Re){let Se=c.get(Re).get(q);a.get(Re)!==Se&&(i.uniformBlockBinding(Re,Se,q.__bindingPointIndex),a.set(Re,Se))}function ke(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),l={},ie=null,pe={},h={},f=new WeakMap,p=[],d=null,g=!1,x=null,m=null,u=null,E=null,y=null,M=null,C=null,A=new dt(0,0,0),T=0,P=!1,W=null,v=null,b=null,B=null,k=null,se.set(0,0,i.canvas.width,i.canvas.height),te.set(0,0,i.canvas.width,i.canvas.height),s.reset(),r.reset(),o.reset()}return{buffers:{color:s,depth:r,stencil:o},enable:X,disable:V,bindFramebuffer:Z,drawBuffers:xe,useProgram:Ce,setBlending:I,setMaterial:ye,setFlipSided:ee,setCullFace:ae,setLineWidth:me,setPolygonOffset:Ae,setScissorTest:Me,activeTexture:U,bindTexture:w,unbindTexture:K,compressedTexImage2D:ge,compressedTexImage3D:be,texImage2D:$,texImage3D:ve,updateUBOMapping:Te,uniformBlockBinding:he,texStorage2D:_t,texStorage3D:De,texSubImage2D:Ee,texSubImage3D:Be,compressedTexSubImage2D:Oe,compressedTexSubImage3D:Xe,scissor:Ie,viewport:Pe,reset:ke}}function vp(i,e,t,n){let s=T2(n);switch(t){case Gp:return i*e;case Xp:return i*e;case qp:return i*e*2;case td:return i*e/s.components*s.byteLength;case nd:return i*e/s.components*s.byteLength;case Yp:return i*e*2/s.components*s.byteLength;case id:return i*e*2/s.components*s.byteLength;case Wp:return i*e*3/s.components*s.byteLength;case di:return i*e*4/s.components*s.byteLength;case sd:return i*e*4/s.components*s.byteLength;case pc:case mc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case gc:case xc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Vh:case Wh:return Math.max(i,16)*Math.max(e,8)/4;case kh:case Gh:return Math.max(i,8)*Math.max(e,8)/2;case Xh:case qh:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Yh:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Zh:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case $h:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Kh:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Jh:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Qh:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case jh:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case eu:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case tu:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case nu:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case iu:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case su:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case ru:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case ou:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case au:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case yc:case cu:case lu:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Zp:case hu:return Math.ceil(i/4)*Math.ceil(e/4)*8;case uu:case du:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function T2(i){switch(i){case us:case Bp:return{byteLength:1,components:1};case Jo:case kp:case ua:return{byteLength:2,components:1};case ju:case ed:return{byteLength:2,components:4};case or:case Qu:case Ki:return{byteLength:4,components:1};case Vp:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function R2(i,e,t,n,s,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Ne,h=new WeakMap,f,p=new WeakMap,d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(U,w){return d?new OffscreenCanvas(U,w):Qo("canvas")}function x(U,w,K){let ge=1,be=Me(U);if((be.width>K||be.height>K)&&(ge=K/Math.max(be.width,be.height)),ge<1)if(typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&U instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&U instanceof ImageBitmap||typeof VideoFrame<"u"&&U instanceof VideoFrame){let Ee=Math.floor(ge*be.width),Be=Math.floor(ge*be.height);f===void 0&&(f=g(Ee,Be));let Oe=w?g(Ee,Be):f;return Oe.width=Ee,Oe.height=Be,Oe.getContext("2d").drawImage(U,0,0,Ee,Be),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+be.width+"x"+be.height+") to ("+Ee+"x"+Be+")."),Oe}else return"data"in U&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+be.width+"x"+be.height+")."),U;return U}function m(U){return U.generateMipmaps&&U.minFilter!==ni&&U.minFilter!==gn}function u(U){i.generateMipmap(U)}function E(U,w,K,ge,be=!1){if(U!==null){if(i[U]!==void 0)return i[U];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+U+"'")}let Ee=w;if(w===i.RED&&(K===i.FLOAT&&(Ee=i.R32F),K===i.HALF_FLOAT&&(Ee=i.R16F),K===i.UNSIGNED_BYTE&&(Ee=i.R8)),w===i.RED_INTEGER&&(K===i.UNSIGNED_BYTE&&(Ee=i.R8UI),K===i.UNSIGNED_SHORT&&(Ee=i.R16UI),K===i.UNSIGNED_INT&&(Ee=i.R32UI),K===i.BYTE&&(Ee=i.R8I),K===i.SHORT&&(Ee=i.R16I),K===i.INT&&(Ee=i.R32I)),w===i.RG&&(K===i.FLOAT&&(Ee=i.RG32F),K===i.HALF_FLOAT&&(Ee=i.RG16F),K===i.UNSIGNED_BYTE&&(Ee=i.RG8)),w===i.RG_INTEGER&&(K===i.UNSIGNED_BYTE&&(Ee=i.RG8UI),K===i.UNSIGNED_SHORT&&(Ee=i.RG16UI),K===i.UNSIGNED_INT&&(Ee=i.RG32UI),K===i.BYTE&&(Ee=i.RG8I),K===i.SHORT&&(Ee=i.RG16I),K===i.INT&&(Ee=i.RG32I)),w===i.RGB_INTEGER&&(K===i.UNSIGNED_BYTE&&(Ee=i.RGB8UI),K===i.UNSIGNED_SHORT&&(Ee=i.RGB16UI),K===i.UNSIGNED_INT&&(Ee=i.RGB32UI),K===i.BYTE&&(Ee=i.RGB8I),K===i.SHORT&&(Ee=i.RGB16I),K===i.INT&&(Ee=i.RGB32I)),w===i.RGBA_INTEGER&&(K===i.UNSIGNED_BYTE&&(Ee=i.RGBA8UI),K===i.UNSIGNED_SHORT&&(Ee=i.RGBA16UI),K===i.UNSIGNED_INT&&(Ee=i.RGBA32UI),K===i.BYTE&&(Ee=i.RGBA8I),K===i.SHORT&&(Ee=i.RGBA16I),K===i.INT&&(Ee=i.RGBA32I)),w===i.RGB&&K===i.UNSIGNED_INT_5_9_9_9_REV&&(Ee=i.RGB9_E5),w===i.RGBA){let Be=be?Ec:qt.getTransfer(ge);K===i.FLOAT&&(Ee=i.RGBA32F),K===i.HALF_FLOAT&&(Ee=i.RGBA16F),K===i.UNSIGNED_BYTE&&(Ee=Be===on?i.SRGB8_ALPHA8:i.RGBA8),K===i.UNSIGNED_SHORT_4_4_4_4&&(Ee=i.RGBA4),K===i.UNSIGNED_SHORT_5_5_5_1&&(Ee=i.RGB5_A1)}return(Ee===i.R16F||Ee===i.R32F||Ee===i.RG16F||Ee===i.RG32F||Ee===i.RGBA16F||Ee===i.RGBA32F)&&e.get("EXT_color_buffer_float"),Ee}function y(U,w){let K;return U?w===null||w===or||w===Kr?K=i.DEPTH24_STENCIL8:w===Ki?K=i.DEPTH32F_STENCIL8:w===Jo&&(K=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===or||w===Kr?K=i.DEPTH_COMPONENT24:w===Ki?K=i.DEPTH_COMPONENT32F:w===Jo&&(K=i.DEPTH_COMPONENT16),K}function M(U,w){return m(U)===!0||U.isFramebufferTexture&&U.minFilter!==ni&&U.minFilter!==gn?Math.log2(Math.max(w.width,w.height))+1:U.mipmaps!==void 0&&U.mipmaps.length>0?U.mipmaps.length:U.isCompressedTexture&&Array.isArray(U.image)?w.mipmaps.length:1}function C(U){let w=U.target;w.removeEventListener("dispose",C),T(w),w.isVideoTexture&&h.delete(w)}function A(U){let w=U.target;w.removeEventListener("dispose",A),W(w)}function T(U){let w=n.get(U);if(w.__webglInit===void 0)return;let K=U.source,ge=p.get(K);if(ge){let be=ge[w.__cacheKey];be.usedTimes--,be.usedTimes===0&&P(U),Object.keys(ge).length===0&&p.delete(K)}n.remove(U)}function P(U){let w=n.get(U);i.deleteTexture(w.__webglTexture);let K=U.source,ge=p.get(K);delete ge[w.__cacheKey],o.memory.textures--}function W(U){let w=n.get(U);if(U.depthTexture&&U.depthTexture.dispose(),U.isWebGLCubeRenderTarget)for(let ge=0;ge<6;ge++){if(Array.isArray(w.__webglFramebuffer[ge]))for(let be=0;be<w.__webglFramebuffer[ge].length;be++)i.deleteFramebuffer(w.__webglFramebuffer[ge][be]);else i.deleteFramebuffer(w.__webglFramebuffer[ge]);w.__webglDepthbuffer&&i.deleteRenderbuffer(w.__webglDepthbuffer[ge])}else{if(Array.isArray(w.__webglFramebuffer))for(let ge=0;ge<w.__webglFramebuffer.length;ge++)i.deleteFramebuffer(w.__webglFramebuffer[ge]);else i.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&i.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&i.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let ge=0;ge<w.__webglColorRenderbuffer.length;ge++)w.__webglColorRenderbuffer[ge]&&i.deleteRenderbuffer(w.__webglColorRenderbuffer[ge]);w.__webglDepthRenderbuffer&&i.deleteRenderbuffer(w.__webglDepthRenderbuffer)}let K=U.textures;for(let ge=0,be=K.length;ge<be;ge++){let Ee=n.get(K[ge]);Ee.__webglTexture&&(i.deleteTexture(Ee.__webglTexture),o.memory.textures--),n.remove(K[ge])}n.remove(U)}let v=0;function b(){v=0}function B(){let U=v;return U>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+U+" texture units while this GPU supports only "+s.maxTextures),v+=1,U}function k(U){let w=[];return w.push(U.wrapS),w.push(U.wrapT),w.push(U.wrapR||0),w.push(U.magFilter),w.push(U.minFilter),w.push(U.anisotropy),w.push(U.internalFormat),w.push(U.format),w.push(U.type),w.push(U.generateMipmaps),w.push(U.premultiplyAlpha),w.push(U.flipY),w.push(U.unpackAlignment),w.push(U.colorSpace),w.join()}function F(U,w){let K=n.get(U);if(U.isVideoTexture&&me(U),U.isRenderTargetTexture===!1&&U.version>0&&K.__version!==U.version){let ge=U.image;if(ge===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ge.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{te(K,U,w);return}}t.bindTexture(i.TEXTURE_2D,K.__webglTexture,i.TEXTURE0+w)}function H(U,w){let K=n.get(U);if(U.version>0&&K.__version!==U.version){te(K,U,w);return}t.bindTexture(i.TEXTURE_2D_ARRAY,K.__webglTexture,i.TEXTURE0+w)}function J(U,w){let K=n.get(U);if(U.version>0&&K.__version!==U.version){te(K,U,w);return}t.bindTexture(i.TEXTURE_3D,K.__webglTexture,i.TEXTURE0+w)}function fe(U,w){let K=n.get(U);if(U.version>0&&K.__version!==U.version){O(K,U,w);return}t.bindTexture(i.TEXTURE_CUBE_MAP,K.__webglTexture,i.TEXTURE0+w)}let ie={[rr]:i.REPEAT,[sr]:i.CLAMP_TO_EDGE,[Bh]:i.MIRRORED_REPEAT},pe={[ni]:i.NEAREST,[u1]:i.NEAREST_MIPMAP_NEAREST,[Ba]:i.NEAREST_MIPMAP_LINEAR,[gn]:i.LINEAR,[$l]:i.LINEAR_MIPMAP_NEAREST,[Fi]:i.LINEAR_MIPMAP_LINEAR},N={[p1]:i.NEVER,[_1]:i.ALWAYS,[m1]:i.LESS,[Kp]:i.LEQUAL,[g1]:i.EQUAL,[v1]:i.GEQUAL,[x1]:i.GREATER,[y1]:i.NOTEQUAL};function j(U,w){if(w.type===Ki&&e.has("OES_texture_float_linear")===!1&&(w.magFilter===gn||w.magFilter===$l||w.magFilter===Ba||w.magFilter===Fi||w.minFilter===gn||w.minFilter===$l||w.minFilter===Ba||w.minFilter===Fi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(U,i.TEXTURE_WRAP_S,ie[w.wrapS]),i.texParameteri(U,i.TEXTURE_WRAP_T,ie[w.wrapT]),(U===i.TEXTURE_3D||U===i.TEXTURE_2D_ARRAY)&&i.texParameteri(U,i.TEXTURE_WRAP_R,ie[w.wrapR]),i.texParameteri(U,i.TEXTURE_MAG_FILTER,pe[w.magFilter]),i.texParameteri(U,i.TEXTURE_MIN_FILTER,pe[w.minFilter]),w.compareFunction&&(i.texParameteri(U,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(U,i.TEXTURE_COMPARE_FUNC,N[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===ni||w.minFilter!==Ba&&w.minFilter!==Fi||w.type===Ki&&e.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||n.get(w).__currentAnisotropy){let K=e.get("EXT_texture_filter_anisotropic");i.texParameterf(U,K.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,s.getMaxAnisotropy())),n.get(w).__currentAnisotropy=w.anisotropy}}}function se(U,w){let K=!1;U.__webglInit===void 0&&(U.__webglInit=!0,w.addEventListener("dispose",C));let ge=w.source,be=p.get(ge);be===void 0&&(be={},p.set(ge,be));let Ee=k(w);if(Ee!==U.__cacheKey){be[Ee]===void 0&&(be[Ee]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,K=!0),be[Ee].usedTimes++;let Be=be[U.__cacheKey];Be!==void 0&&(be[U.__cacheKey].usedTimes--,Be.usedTimes===0&&P(w)),U.__cacheKey=Ee,U.__webglTexture=be[Ee].texture}return K}function te(U,w,K){let ge=i.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(ge=i.TEXTURE_2D_ARRAY),w.isData3DTexture&&(ge=i.TEXTURE_3D);let be=se(U,w),Ee=w.source;t.bindTexture(ge,U.__webglTexture,i.TEXTURE0+K);let Be=n.get(Ee);if(Ee.version!==Be.__version||be===!0){t.activeTexture(i.TEXTURE0+K);let Oe=qt.getPrimaries(qt.workingColorSpace),Xe=w.colorSpace===Rs?null:qt.getPrimaries(w.colorSpace),_t=w.colorSpace===Rs||Oe===Xe?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,w.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,w.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,_t);let De=x(w.image,!1,s.maxTextureSize);De=Ae(w,De);let $=r.convert(w.format,w.colorSpace),ve=r.convert(w.type),Ie=E(w.internalFormat,$,ve,w.colorSpace,w.isVideoTexture);j(ge,w);let Pe,Te=w.mipmaps,he=w.isVideoTexture!==!0,ke=Be.__version===void 0||be===!0,q=Ee.dataReady,Re=M(w,De);if(w.isDepthTexture)Ie=y(w.format===Jr,w.type),ke&&(he?t.texStorage2D(i.TEXTURE_2D,1,Ie,De.width,De.height):t.texImage2D(i.TEXTURE_2D,0,Ie,De.width,De.height,0,$,ve,null));else if(w.isDataTexture)if(Te.length>0){he&&ke&&t.texStorage2D(i.TEXTURE_2D,Re,Ie,Te[0].width,Te[0].height);for(let ce=0,Se=Te.length;ce<Se;ce++)Pe=Te[ce],he?q&&t.texSubImage2D(i.TEXTURE_2D,ce,0,0,Pe.width,Pe.height,$,ve,Pe.data):t.texImage2D(i.TEXTURE_2D,ce,Ie,Pe.width,Pe.height,0,$,ve,Pe.data);w.generateMipmaps=!1}else he?(ke&&t.texStorage2D(i.TEXTURE_2D,Re,Ie,De.width,De.height),q&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,De.width,De.height,$,ve,De.data)):t.texImage2D(i.TEXTURE_2D,0,Ie,De.width,De.height,0,$,ve,De.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){he&&ke&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Re,Ie,Te[0].width,Te[0].height,De.depth);for(let ce=0,Se=Te.length;ce<Se;ce++)if(Pe=Te[ce],w.format!==di)if($!==null)if(he){if(q)if(w.layerUpdates.size>0){let Ue=vp(Pe.width,Pe.height,w.format,w.type);for(let Fe of w.layerUpdates){let ut=Pe.data.subarray(Fe*Ue/Pe.data.BYTES_PER_ELEMENT,(Fe+1)*Ue/Pe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ce,0,0,Fe,Pe.width,Pe.height,1,$,ut,0,0)}w.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ce,0,0,0,Pe.width,Pe.height,De.depth,$,Pe.data,0,0)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ce,Ie,Pe.width,Pe.height,De.depth,0,Pe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else he?q&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,ce,0,0,0,Pe.width,Pe.height,De.depth,$,ve,Pe.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ce,Ie,Pe.width,Pe.height,De.depth,0,$,ve,Pe.data)}else{he&&ke&&t.texStorage2D(i.TEXTURE_2D,Re,Ie,Te[0].width,Te[0].height);for(let ce=0,Se=Te.length;ce<Se;ce++)Pe=Te[ce],w.format!==di?$!==null?he?q&&t.compressedTexSubImage2D(i.TEXTURE_2D,ce,0,0,Pe.width,Pe.height,$,Pe.data):t.compressedTexImage2D(i.TEXTURE_2D,ce,Ie,Pe.width,Pe.height,0,Pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):he?q&&t.texSubImage2D(i.TEXTURE_2D,ce,0,0,Pe.width,Pe.height,$,ve,Pe.data):t.texImage2D(i.TEXTURE_2D,ce,Ie,Pe.width,Pe.height,0,$,ve,Pe.data)}else if(w.isDataArrayTexture)if(he){if(ke&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Re,Ie,De.width,De.height,De.depth),q)if(w.layerUpdates.size>0){let ce=vp(De.width,De.height,w.format,w.type);for(let Se of w.layerUpdates){let Ue=De.data.subarray(Se*ce/De.data.BYTES_PER_ELEMENT,(Se+1)*ce/De.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Se,De.width,De.height,1,$,ve,Ue)}w.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,De.width,De.height,De.depth,$,ve,De.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Ie,De.width,De.height,De.depth,0,$,ve,De.data);else if(w.isData3DTexture)he?(ke&&t.texStorage3D(i.TEXTURE_3D,Re,Ie,De.width,De.height,De.depth),q&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,De.width,De.height,De.depth,$,ve,De.data)):t.texImage3D(i.TEXTURE_3D,0,Ie,De.width,De.height,De.depth,0,$,ve,De.data);else if(w.isFramebufferTexture){if(ke)if(he)t.texStorage2D(i.TEXTURE_2D,Re,Ie,De.width,De.height);else{let ce=De.width,Se=De.height;for(let Ue=0;Ue<Re;Ue++)t.texImage2D(i.TEXTURE_2D,Ue,Ie,ce,Se,0,$,ve,null),ce>>=1,Se>>=1}}else if(Te.length>0){if(he&&ke){let ce=Me(Te[0]);t.texStorage2D(i.TEXTURE_2D,Re,Ie,ce.width,ce.height)}for(let ce=0,Se=Te.length;ce<Se;ce++)Pe=Te[ce],he?q&&t.texSubImage2D(i.TEXTURE_2D,ce,0,0,$,ve,Pe):t.texImage2D(i.TEXTURE_2D,ce,Ie,$,ve,Pe);w.generateMipmaps=!1}else if(he){if(ke){let ce=Me(De);t.texStorage2D(i.TEXTURE_2D,Re,Ie,ce.width,ce.height)}q&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,$,ve,De)}else t.texImage2D(i.TEXTURE_2D,0,Ie,$,ve,De);m(w)&&u(ge),Be.__version=Ee.version,w.onUpdate&&w.onUpdate(w)}U.__version=w.version}function O(U,w,K){if(w.image.length!==6)return;let ge=se(U,w),be=w.source;t.bindTexture(i.TEXTURE_CUBE_MAP,U.__webglTexture,i.TEXTURE0+K);let Ee=n.get(be);if(be.version!==Ee.__version||ge===!0){t.activeTexture(i.TEXTURE0+K);let Be=qt.getPrimaries(qt.workingColorSpace),Oe=w.colorSpace===Rs?null:qt.getPrimaries(w.colorSpace),Xe=w.colorSpace===Rs||Be===Oe?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,w.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,w.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Xe);let _t=w.isCompressedTexture||w.image[0].isCompressedTexture,De=w.image[0]&&w.image[0].isDataTexture,$=[];for(let Se=0;Se<6;Se++)!_t&&!De?$[Se]=x(w.image[Se],!0,s.maxCubemapSize):$[Se]=De?w.image[Se].image:w.image[Se],$[Se]=Ae(w,$[Se]);let ve=$[0],Ie=r.convert(w.format,w.colorSpace),Pe=r.convert(w.type),Te=E(w.internalFormat,Ie,Pe,w.colorSpace),he=w.isVideoTexture!==!0,ke=Ee.__version===void 0||ge===!0,q=be.dataReady,Re=M(w,ve);j(i.TEXTURE_CUBE_MAP,w);let ce;if(_t){he&&ke&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Re,Te,ve.width,ve.height);for(let Se=0;Se<6;Se++){ce=$[Se].mipmaps;for(let Ue=0;Ue<ce.length;Ue++){let Fe=ce[Ue];w.format!==di?Ie!==null?he?q&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Ue,0,0,Fe.width,Fe.height,Ie,Fe.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Ue,Te,Fe.width,Fe.height,0,Fe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):he?q&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Ue,0,0,Fe.width,Fe.height,Ie,Pe,Fe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Ue,Te,Fe.width,Fe.height,0,Ie,Pe,Fe.data)}}}else{if(ce=w.mipmaps,he&&ke){ce.length>0&&Re++;let Se=Me($[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Re,Te,Se.width,Se.height)}for(let Se=0;Se<6;Se++)if(De){he?q&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,0,0,$[Se].width,$[Se].height,Ie,Pe,$[Se].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,Te,$[Se].width,$[Se].height,0,Ie,Pe,$[Se].data);for(let Ue=0;Ue<ce.length;Ue++){let ut=ce[Ue].image[Se].image;he?q&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Ue+1,0,0,ut.width,ut.height,Ie,Pe,ut.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Ue+1,Te,ut.width,ut.height,0,Ie,Pe,ut.data)}}else{he?q&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,0,0,Ie,Pe,$[Se]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,Te,Ie,Pe,$[Se]);for(let Ue=0;Ue<ce.length;Ue++){let Fe=ce[Ue];he?q&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Ue+1,0,0,Ie,Pe,Fe.image[Se]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Ue+1,Te,Ie,Pe,Fe.image[Se])}}}m(w)&&u(i.TEXTURE_CUBE_MAP),Ee.__version=be.version,w.onUpdate&&w.onUpdate(w)}U.__version=w.version}function le(U,w,K,ge,be,Ee){let Be=r.convert(K.format,K.colorSpace),Oe=r.convert(K.type),Xe=E(K.internalFormat,Be,Oe,K.colorSpace);if(!n.get(w).__hasExternalTextures){let De=Math.max(1,w.width>>Ee),$=Math.max(1,w.height>>Ee);be===i.TEXTURE_3D||be===i.TEXTURE_2D_ARRAY?t.texImage3D(be,Ee,Xe,De,$,w.depth,0,Be,Oe,null):t.texImage2D(be,Ee,Xe,De,$,0,Be,Oe,null)}t.bindFramebuffer(i.FRAMEBUFFER,U),ae(w)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ge,be,n.get(K).__webglTexture,0,ee(w)):(be===i.TEXTURE_2D||be>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&be<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ge,be,n.get(K).__webglTexture,Ee),t.bindFramebuffer(i.FRAMEBUFFER,null)}function X(U,w,K){if(i.bindRenderbuffer(i.RENDERBUFFER,U),w.depthBuffer){let ge=w.depthTexture,be=ge&&ge.isDepthTexture?ge.type:null,Ee=y(w.stencilBuffer,be),Be=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Oe=ee(w);ae(w)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Oe,Ee,w.width,w.height):K?i.renderbufferStorageMultisample(i.RENDERBUFFER,Oe,Ee,w.width,w.height):i.renderbufferStorage(i.RENDERBUFFER,Ee,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Be,i.RENDERBUFFER,U)}else{let ge=w.textures;for(let be=0;be<ge.length;be++){let Ee=ge[be],Be=r.convert(Ee.format,Ee.colorSpace),Oe=r.convert(Ee.type),Xe=E(Ee.internalFormat,Be,Oe,Ee.colorSpace),_t=ee(w);K&&ae(w)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,_t,Xe,w.width,w.height):ae(w)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,_t,Xe,w.width,w.height):i.renderbufferStorage(i.RENDERBUFFER,Xe,w.width,w.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function V(U,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,U),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(w.depthTexture).__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),F(w.depthTexture,0);let ge=n.get(w.depthTexture).__webglTexture,be=ee(w);if(w.depthTexture.format===Wr)ae(w)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ge,0,be):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ge,0);else if(w.depthTexture.format===Jr)ae(w)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ge,0,be):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ge,0);else throw new Error("Unknown depthTexture format")}function Z(U){let w=n.get(U),K=U.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==U.depthTexture){let ge=U.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),ge){let be=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,ge.removeEventListener("dispose",be)};ge.addEventListener("dispose",be),w.__depthDisposeCallback=be}w.__boundDepthTexture=ge}if(U.depthTexture&&!w.__autoAllocateDepthBuffer){if(K)throw new Error("target.depthTexture not supported in Cube render targets");V(w.__webglFramebuffer,U)}else if(K){w.__webglDepthbuffer=[];for(let ge=0;ge<6;ge++)if(t.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer[ge]),w.__webglDepthbuffer[ge]===void 0)w.__webglDepthbuffer[ge]=i.createRenderbuffer(),X(w.__webglDepthbuffer[ge],U,!1);else{let be=U.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ee=w.__webglDepthbuffer[ge];i.bindRenderbuffer(i.RENDERBUFFER,Ee),i.framebufferRenderbuffer(i.FRAMEBUFFER,be,i.RENDERBUFFER,Ee)}}else if(t.bindFramebuffer(i.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=i.createRenderbuffer(),X(w.__webglDepthbuffer,U,!1);else{let ge=U.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,be=w.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,be),i.framebufferRenderbuffer(i.FRAMEBUFFER,ge,i.RENDERBUFFER,be)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function xe(U,w,K){let ge=n.get(U);w!==void 0&&le(ge.__webglFramebuffer,U,U.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),K!==void 0&&Z(U)}function Ce(U){let w=U.texture,K=n.get(U),ge=n.get(w);U.addEventListener("dispose",A);let be=U.textures,Ee=U.isWebGLCubeRenderTarget===!0,Be=be.length>1;if(Be||(ge.__webglTexture===void 0&&(ge.__webglTexture=i.createTexture()),ge.__version=w.version,o.memory.textures++),Ee){K.__webglFramebuffer=[];for(let Oe=0;Oe<6;Oe++)if(w.mipmaps&&w.mipmaps.length>0){K.__webglFramebuffer[Oe]=[];for(let Xe=0;Xe<w.mipmaps.length;Xe++)K.__webglFramebuffer[Oe][Xe]=i.createFramebuffer()}else K.__webglFramebuffer[Oe]=i.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){K.__webglFramebuffer=[];for(let Oe=0;Oe<w.mipmaps.length;Oe++)K.__webglFramebuffer[Oe]=i.createFramebuffer()}else K.__webglFramebuffer=i.createFramebuffer();if(Be)for(let Oe=0,Xe=be.length;Oe<Xe;Oe++){let _t=n.get(be[Oe]);_t.__webglTexture===void 0&&(_t.__webglTexture=i.createTexture(),o.memory.textures++)}if(U.samples>0&&ae(U)===!1){K.__webglMultisampledFramebuffer=i.createFramebuffer(),K.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,K.__webglMultisampledFramebuffer);for(let Oe=0;Oe<be.length;Oe++){let Xe=be[Oe];K.__webglColorRenderbuffer[Oe]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,K.__webglColorRenderbuffer[Oe]);let _t=r.convert(Xe.format,Xe.colorSpace),De=r.convert(Xe.type),$=E(Xe.internalFormat,_t,De,Xe.colorSpace,U.isXRRenderTarget===!0),ve=ee(U);i.renderbufferStorageMultisample(i.RENDERBUFFER,ve,$,U.width,U.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Oe,i.RENDERBUFFER,K.__webglColorRenderbuffer[Oe])}i.bindRenderbuffer(i.RENDERBUFFER,null),U.depthBuffer&&(K.__webglDepthRenderbuffer=i.createRenderbuffer(),X(K.__webglDepthRenderbuffer,U,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Ee){t.bindTexture(i.TEXTURE_CUBE_MAP,ge.__webglTexture),j(i.TEXTURE_CUBE_MAP,w);for(let Oe=0;Oe<6;Oe++)if(w.mipmaps&&w.mipmaps.length>0)for(let Xe=0;Xe<w.mipmaps.length;Xe++)le(K.__webglFramebuffer[Oe][Xe],U,w,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Oe,Xe);else le(K.__webglFramebuffer[Oe],U,w,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Oe,0);m(w)&&u(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Be){for(let Oe=0,Xe=be.length;Oe<Xe;Oe++){let _t=be[Oe],De=n.get(_t);t.bindTexture(i.TEXTURE_2D,De.__webglTexture),j(i.TEXTURE_2D,_t),le(K.__webglFramebuffer,U,_t,i.COLOR_ATTACHMENT0+Oe,i.TEXTURE_2D,0),m(_t)&&u(i.TEXTURE_2D)}t.unbindTexture()}else{let Oe=i.TEXTURE_2D;if((U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(Oe=U.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Oe,ge.__webglTexture),j(Oe,w),w.mipmaps&&w.mipmaps.length>0)for(let Xe=0;Xe<w.mipmaps.length;Xe++)le(K.__webglFramebuffer[Xe],U,w,i.COLOR_ATTACHMENT0,Oe,Xe);else le(K.__webglFramebuffer,U,w,i.COLOR_ATTACHMENT0,Oe,0);m(w)&&u(Oe),t.unbindTexture()}U.depthBuffer&&Z(U)}function _e(U){let w=U.textures;for(let K=0,ge=w.length;K<ge;K++){let be=w[K];if(m(be)){let Ee=U.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,Be=n.get(be).__webglTexture;t.bindTexture(Ee,Be),u(Ee),t.unbindTexture()}}}let ne=[],I=[];function ye(U){if(U.samples>0){if(ae(U)===!1){let w=U.textures,K=U.width,ge=U.height,be=i.COLOR_BUFFER_BIT,Ee=U.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Be=n.get(U),Oe=w.length>1;if(Oe)for(let Xe=0;Xe<w.length;Xe++)t.bindFramebuffer(i.FRAMEBUFFER,Be.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Xe,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Be.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Xe,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Be.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Be.__webglFramebuffer);for(let Xe=0;Xe<w.length;Xe++){if(U.resolveDepthBuffer&&(U.depthBuffer&&(be|=i.DEPTH_BUFFER_BIT),U.stencilBuffer&&U.resolveStencilBuffer&&(be|=i.STENCIL_BUFFER_BIT)),Oe){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Be.__webglColorRenderbuffer[Xe]);let _t=n.get(w[Xe]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,_t,0)}i.blitFramebuffer(0,0,K,ge,0,0,K,ge,be,i.NEAREST),c===!0&&(ne.length=0,I.length=0,ne.push(i.COLOR_ATTACHMENT0+Xe),U.depthBuffer&&U.resolveDepthBuffer===!1&&(ne.push(Ee),I.push(Ee),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,I)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ne))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Oe)for(let Xe=0;Xe<w.length;Xe++){t.bindFramebuffer(i.FRAMEBUFFER,Be.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Xe,i.RENDERBUFFER,Be.__webglColorRenderbuffer[Xe]);let _t=n.get(w[Xe]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Be.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Xe,i.TEXTURE_2D,_t,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Be.__webglMultisampledFramebuffer)}else if(U.depthBuffer&&U.resolveDepthBuffer===!1&&c){let w=U.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[w])}}}function ee(U){return Math.min(s.maxSamples,U.samples)}function ae(U){let w=n.get(U);return U.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function me(U){let w=o.render.frame;h.get(U)!==w&&(h.set(U,w),U.update())}function Ae(U,w){let K=U.colorSpace,ge=U.format,be=U.type;return U.isCompressedTexture===!0||U.isVideoTexture===!0||K!==Fs&&K!==Rs&&(qt.getTransfer(K)===on?(ge!==di||be!==us)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",K)),w}function Me(U){return typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement?(l.width=U.naturalWidth||U.width,l.height=U.naturalHeight||U.height):typeof VideoFrame<"u"&&U instanceof VideoFrame?(l.width=U.displayWidth,l.height=U.displayHeight):(l.width=U.width,l.height=U.height),l}this.allocateTextureUnit=B,this.resetTextureUnits=b,this.setTexture2D=F,this.setTexture2DArray=H,this.setTexture3D=J,this.setTextureCube=fe,this.rebindTextures=xe,this.setupRenderTarget=Ce,this.updateRenderTargetMipmap=_e,this.updateMultisampleRenderTarget=ye,this.setupDepthRenderbuffer=Z,this.setupFrameBufferTexture=le,this.useMultisampledRTT=ae}function A2(i,e){function t(n,s=Rs){let r,o=qt.getTransfer(s);if(n===us)return i.UNSIGNED_BYTE;if(n===ju)return i.UNSIGNED_SHORT_4_4_4_4;if(n===ed)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Vp)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Bp)return i.BYTE;if(n===kp)return i.SHORT;if(n===Jo)return i.UNSIGNED_SHORT;if(n===Qu)return i.INT;if(n===or)return i.UNSIGNED_INT;if(n===Ki)return i.FLOAT;if(n===ua)return i.HALF_FLOAT;if(n===Gp)return i.ALPHA;if(n===Wp)return i.RGB;if(n===di)return i.RGBA;if(n===Xp)return i.LUMINANCE;if(n===qp)return i.LUMINANCE_ALPHA;if(n===Wr)return i.DEPTH_COMPONENT;if(n===Jr)return i.DEPTH_STENCIL;if(n===td)return i.RED;if(n===nd)return i.RED_INTEGER;if(n===Yp)return i.RG;if(n===id)return i.RG_INTEGER;if(n===sd)return i.RGBA_INTEGER;if(n===pc||n===mc||n===gc||n===xc)if(o===on)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===pc)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===mc)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===gc)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===xc)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===pc)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===mc)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===gc)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===xc)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===kh||n===Vh||n===Gh||n===Wh)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===kh)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Vh)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Gh)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Wh)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Xh||n===qh||n===Yh)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Xh||n===qh)return o===on?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Yh)return o===on?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Zh||n===$h||n===Kh||n===Jh||n===Qh||n===jh||n===eu||n===tu||n===nu||n===iu||n===su||n===ru||n===ou||n===au)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Zh)return o===on?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===$h)return o===on?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Kh)return o===on?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Jh)return o===on?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Qh)return o===on?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===jh)return o===on?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===eu)return o===on?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===tu)return o===on?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===nu)return o===on?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===iu)return o===on?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===su)return o===on?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ru)return o===on?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===ou)return o===on?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===au)return o===on?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===yc||n===cu||n===lu)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===yc)return o===on?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===cu)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===lu)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Zp||n===hu||n===uu||n===du)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===yc)return r.COMPRESSED_RED_RGTC1_EXT;if(n===hu)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===uu)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===du)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Kr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var Tu=class extends Nn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},we=class extends Ft{constructor(){super(),this.isGroup=!0,this.type="Group"}},C2={type:"move"},Yo=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new we,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new we,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new S,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new S),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new we,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new S,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new S),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(let x of e.hand.values()){let m=t.getJointPose(x,n),u=this._getHandJoint(l,x);m!==null&&(u.matrix.fromArray(m.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=m.radius),u.visible=m!==null}let h=l.joints["index-finger-tip"],f=l.joints["thumb-tip"],p=h.position.distanceTo(f.position),d=.02,g=.005;l.inputState.pinching&&p>d+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&p<=d-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(C2)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new we;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},P2=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,I2=`
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

}`,Ru=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){let s=new Kn,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Qi({vertexShader:P2,fragmentShader:I2,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ht(new wt(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Au=class extends Is{constructor(e,t){super();let n=this,s=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,f=null,p=null,d=null,g=null,x=new Ru,m=t.getContextAttributes(),u=null,E=null,y=[],M=[],C=new Ne,A=null,T=new Nn;T.layers.enable(1),T.viewport=new Kt;let P=new Nn;P.layers.enable(2),P.viewport=new Kt;let W=[T,P],v=new Tu;v.layers.enable(1),v.layers.enable(2);let b=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(O){let le=y[O];return le===void 0&&(le=new Yo,y[O]=le),le.getTargetRaySpace()},this.getControllerGrip=function(O){let le=y[O];return le===void 0&&(le=new Yo,y[O]=le),le.getGripSpace()},this.getHand=function(O){let le=y[O];return le===void 0&&(le=new Yo,y[O]=le),le.getHandSpace()};function k(O){let le=M.indexOf(O.inputSource);if(le===-1)return;let X=y[le];X!==void 0&&(X.update(O.inputSource,O.frame,l||o),X.dispatchEvent({type:O.type,data:O.inputSource}))}function F(){s.removeEventListener("select",k),s.removeEventListener("selectstart",k),s.removeEventListener("selectend",k),s.removeEventListener("squeeze",k),s.removeEventListener("squeezestart",k),s.removeEventListener("squeezeend",k),s.removeEventListener("end",F),s.removeEventListener("inputsourceschange",H);for(let O=0;O<y.length;O++){let le=M[O];le!==null&&(M[O]=null,y[O].disconnect(le))}b=null,B=null,x.reset(),e.setRenderTarget(u),d=null,p=null,f=null,s=null,E=null,te.stop(),n.isPresenting=!1,e.setPixelRatio(A),e.setSize(C.width,C.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(O){r=O,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(O){a=O,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(O){l=O},this.getBaseLayer=function(){return p!==null?p:d},this.getBinding=function(){return f},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(O){if(s=O,s!==null){if(u=e.getRenderTarget(),s.addEventListener("select",k),s.addEventListener("selectstart",k),s.addEventListener("selectend",k),s.addEventListener("squeeze",k),s.addEventListener("squeezestart",k),s.addEventListener("squeezeend",k),s.addEventListener("end",F),s.addEventListener("inputsourceschange",H),m.xrCompatible!==!0&&await t.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(C),s.renderState.layers===void 0){let le={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,t,le),s.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),E=new ds(d.framebufferWidth,d.framebufferHeight,{format:di,type:us,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let le=null,X=null,V=null;m.depth&&(V=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,le=m.stencil?Jr:Wr,X=m.stencil?Kr:or);let Z={colorFormat:t.RGBA8,depthFormat:V,scaleFactor:r};f=new XRWebGLBinding(s,t),p=f.createProjectionLayer(Z),s.updateRenderState({layers:[p]}),e.setPixelRatio(1),e.setSize(p.textureWidth,p.textureHeight,!1),E=new ds(p.textureWidth,p.textureHeight,{format:di,type:us,depthTexture:new Dc(p.textureWidth,p.textureHeight,X,void 0,void 0,void 0,void 0,void 0,void 0,le),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:p.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),te.setContext(s),te.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function H(O){for(let le=0;le<O.removed.length;le++){let X=O.removed[le],V=M.indexOf(X);V>=0&&(M[V]=null,y[V].disconnect(X))}for(let le=0;le<O.added.length;le++){let X=O.added[le],V=M.indexOf(X);if(V===-1){for(let xe=0;xe<y.length;xe++)if(xe>=M.length){M.push(X),V=xe;break}else if(M[xe]===null){M[xe]=X,V=xe;break}if(V===-1)break}let Z=y[V];Z&&Z.connect(X)}}let J=new S,fe=new S;function ie(O,le,X){J.setFromMatrixPosition(le.matrixWorld),fe.setFromMatrixPosition(X.matrixWorld);let V=J.distanceTo(fe),Z=le.projectionMatrix.elements,xe=X.projectionMatrix.elements,Ce=Z[14]/(Z[10]-1),_e=Z[14]/(Z[10]+1),ne=(Z[9]+1)/Z[5],I=(Z[9]-1)/Z[5],ye=(Z[8]-1)/Z[0],ee=(xe[8]+1)/xe[0],ae=Ce*ye,me=Ce*ee,Ae=V/(-ye+ee),Me=Ae*-ye;if(le.matrixWorld.decompose(O.position,O.quaternion,O.scale),O.translateX(Me),O.translateZ(Ae),O.matrixWorld.compose(O.position,O.quaternion,O.scale),O.matrixWorldInverse.copy(O.matrixWorld).invert(),Z[10]===-1)O.projectionMatrix.copy(le.projectionMatrix),O.projectionMatrixInverse.copy(le.projectionMatrixInverse);else{let U=Ce+Ae,w=_e+Ae,K=ae-Me,ge=me+(V-Me),be=ne*_e/w*U,Ee=I*_e/w*U;O.projectionMatrix.makePerspective(K,ge,be,Ee,U,w),O.projectionMatrixInverse.copy(O.projectionMatrix).invert()}}function pe(O,le){le===null?O.matrixWorld.copy(O.matrix):O.matrixWorld.multiplyMatrices(le.matrixWorld,O.matrix),O.matrixWorldInverse.copy(O.matrixWorld).invert()}this.updateCamera=function(O){if(s===null)return;let le=O.near,X=O.far;x.texture!==null&&(x.depthNear>0&&(le=x.depthNear),x.depthFar>0&&(X=x.depthFar)),v.near=P.near=T.near=le,v.far=P.far=T.far=X,(b!==v.near||B!==v.far)&&(s.updateRenderState({depthNear:v.near,depthFar:v.far}),b=v.near,B=v.far);let V=O.parent,Z=v.cameras;pe(v,V);for(let xe=0;xe<Z.length;xe++)pe(Z[xe],V);Z.length===2?ie(v,T,P):v.projectionMatrix.copy(T.projectionMatrix),N(O,v,V)};function N(O,le,X){X===null?O.matrix.copy(le.matrixWorld):(O.matrix.copy(X.matrixWorld),O.matrix.invert(),O.matrix.multiply(le.matrixWorld)),O.matrix.decompose(O.position,O.quaternion,O.scale),O.updateMatrixWorld(!0),O.projectionMatrix.copy(le.projectionMatrix),O.projectionMatrixInverse.copy(le.projectionMatrixInverse),O.isPerspectiveCamera&&(O.fov=Qr*2*Math.atan(1/O.projectionMatrix.elements[5]),O.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(p===null&&d===null))return c},this.setFoveation=function(O){c=O,p!==null&&(p.fixedFoveation=O),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=O)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(v)};let j=null;function se(O,le){if(h=le.getViewerPose(l||o),g=le,h!==null){let X=h.views;d!==null&&(e.setRenderTargetFramebuffer(E,d.framebuffer),e.setRenderTarget(E));let V=!1;X.length!==v.cameras.length&&(v.cameras.length=0,V=!0);for(let xe=0;xe<X.length;xe++){let Ce=X[xe],_e=null;if(d!==null)_e=d.getViewport(Ce);else{let I=f.getViewSubImage(p,Ce);_e=I.viewport,xe===0&&(e.setRenderTargetTextures(E,I.colorTexture,p.ignoreDepthValues?void 0:I.depthStencilTexture),e.setRenderTarget(E))}let ne=W[xe];ne===void 0&&(ne=new Nn,ne.layers.enable(xe),ne.viewport=new Kt,W[xe]=ne),ne.matrix.fromArray(Ce.transform.matrix),ne.matrix.decompose(ne.position,ne.quaternion,ne.scale),ne.projectionMatrix.fromArray(Ce.projectionMatrix),ne.projectionMatrixInverse.copy(ne.projectionMatrix).invert(),ne.viewport.set(_e.x,_e.y,_e.width,_e.height),xe===0&&(v.matrix.copy(ne.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),V===!0&&v.cameras.push(ne)}let Z=s.enabledFeatures;if(Z&&Z.includes("depth-sensing")){let xe=f.getDepthInformation(X[0]);xe&&xe.isValid&&xe.texture&&x.init(e,xe,s.renderState)}}for(let X=0;X<y.length;X++){let V=M[X],Z=y[X];V!==null&&Z!==void 0&&Z.update(V,le,l||o)}j&&j(O,le),le.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:le}),g=null}let te=new e0;te.setAnimationLoop(se),this.setAnimationLoop=function(O){j=O},this.dispose=function(){}}},js=new ii,L2=new Tt;function D2(i,e){function t(m,u){m.matrixAutoUpdate===!0&&m.updateMatrix(),u.value.copy(m.matrix)}function n(m,u){u.color.getRGB(m.fogColor.value,jp(i)),u.isFog?(m.fogNear.value=u.near,m.fogFar.value=u.far):u.isFogExp2&&(m.fogDensity.value=u.density)}function s(m,u,E,y,M){u.isMeshBasicMaterial||u.isMeshLambertMaterial?r(m,u):u.isMeshToonMaterial?(r(m,u),f(m,u)):u.isMeshPhongMaterial?(r(m,u),h(m,u)):u.isMeshStandardMaterial?(r(m,u),p(m,u),u.isMeshPhysicalMaterial&&d(m,u,M)):u.isMeshMatcapMaterial?(r(m,u),g(m,u)):u.isMeshDepthMaterial?r(m,u):u.isMeshDistanceMaterial?(r(m,u),x(m,u)):u.isMeshNormalMaterial?r(m,u):u.isLineBasicMaterial?(o(m,u),u.isLineDashedMaterial&&a(m,u)):u.isPointsMaterial?c(m,u,E,y):u.isSpriteMaterial?l(m,u):u.isShadowMaterial?(m.color.value.copy(u.color),m.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function r(m,u){m.opacity.value=u.opacity,u.color&&m.diffuse.value.copy(u.color),u.emissive&&m.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(m.map.value=u.map,t(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,t(u.alphaMap,m.alphaMapTransform)),u.bumpMap&&(m.bumpMap.value=u.bumpMap,t(u.bumpMap,m.bumpMapTransform),m.bumpScale.value=u.bumpScale,u.side===yn&&(m.bumpScale.value*=-1)),u.normalMap&&(m.normalMap.value=u.normalMap,t(u.normalMap,m.normalMapTransform),m.normalScale.value.copy(u.normalScale),u.side===yn&&m.normalScale.value.negate()),u.displacementMap&&(m.displacementMap.value=u.displacementMap,t(u.displacementMap,m.displacementMapTransform),m.displacementScale.value=u.displacementScale,m.displacementBias.value=u.displacementBias),u.emissiveMap&&(m.emissiveMap.value=u.emissiveMap,t(u.emissiveMap,m.emissiveMapTransform)),u.specularMap&&(m.specularMap.value=u.specularMap,t(u.specularMap,m.specularMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest);let E=e.get(u),y=E.envMap,M=E.envMapRotation;y&&(m.envMap.value=y,js.copy(M),js.x*=-1,js.y*=-1,js.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(js.y*=-1,js.z*=-1),m.envMapRotation.value.setFromMatrix4(L2.makeRotationFromEuler(js)),m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=u.reflectivity,m.ior.value=u.ior,m.refractionRatio.value=u.refractionRatio),u.lightMap&&(m.lightMap.value=u.lightMap,m.lightMapIntensity.value=u.lightMapIntensity,t(u.lightMap,m.lightMapTransform)),u.aoMap&&(m.aoMap.value=u.aoMap,m.aoMapIntensity.value=u.aoMapIntensity,t(u.aoMap,m.aoMapTransform))}function o(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,u.map&&(m.map.value=u.map,t(u.map,m.mapTransform))}function a(m,u){m.dashSize.value=u.dashSize,m.totalSize.value=u.dashSize+u.gapSize,m.scale.value=u.scale}function c(m,u,E,y){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.size.value=u.size*E,m.scale.value=y*.5,u.map&&(m.map.value=u.map,t(u.map,m.uvTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,t(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function l(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.rotation.value=u.rotation,u.map&&(m.map.value=u.map,t(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,t(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function h(m,u){m.specular.value.copy(u.specular),m.shininess.value=Math.max(u.shininess,1e-4)}function f(m,u){u.gradientMap&&(m.gradientMap.value=u.gradientMap)}function p(m,u){m.metalness.value=u.metalness,u.metalnessMap&&(m.metalnessMap.value=u.metalnessMap,t(u.metalnessMap,m.metalnessMapTransform)),m.roughness.value=u.roughness,u.roughnessMap&&(m.roughnessMap.value=u.roughnessMap,t(u.roughnessMap,m.roughnessMapTransform)),u.envMap&&(m.envMapIntensity.value=u.envMapIntensity)}function d(m,u,E){m.ior.value=u.ior,u.sheen>0&&(m.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),m.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(m.sheenColorMap.value=u.sheenColorMap,t(u.sheenColorMap,m.sheenColorMapTransform)),u.sheenRoughnessMap&&(m.sheenRoughnessMap.value=u.sheenRoughnessMap,t(u.sheenRoughnessMap,m.sheenRoughnessMapTransform))),u.clearcoat>0&&(m.clearcoat.value=u.clearcoat,m.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(m.clearcoatMap.value=u.clearcoatMap,t(u.clearcoatMap,m.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,t(u.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(m.clearcoatNormalMap.value=u.clearcoatNormalMap,t(u.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===yn&&m.clearcoatNormalScale.value.negate())),u.dispersion>0&&(m.dispersion.value=u.dispersion),u.iridescence>0&&(m.iridescence.value=u.iridescence,m.iridescenceIOR.value=u.iridescenceIOR,m.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(m.iridescenceMap.value=u.iridescenceMap,t(u.iridescenceMap,m.iridescenceMapTransform)),u.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=u.iridescenceThicknessMap,t(u.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),u.transmission>0&&(m.transmission.value=u.transmission,m.transmissionSamplerMap.value=E.texture,m.transmissionSamplerSize.value.set(E.width,E.height),u.transmissionMap&&(m.transmissionMap.value=u.transmissionMap,t(u.transmissionMap,m.transmissionMapTransform)),m.thickness.value=u.thickness,u.thicknessMap&&(m.thicknessMap.value=u.thicknessMap,t(u.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=u.attenuationDistance,m.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(m.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(m.anisotropyMap.value=u.anisotropyMap,t(u.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=u.specularIntensity,m.specularColor.value.copy(u.specularColor),u.specularColorMap&&(m.specularColorMap.value=u.specularColorMap,t(u.specularColorMap,m.specularColorMapTransform)),u.specularIntensityMap&&(m.specularIntensityMap.value=u.specularIntensityMap,t(u.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,u){u.matcap&&(m.matcap.value=u.matcap)}function x(m,u){let E=e.get(u).light;m.referencePosition.value.setFromMatrixPosition(E.matrixWorld),m.nearDistance.value=E.shadow.camera.near,m.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function U2(i,e,t,n){let s={},r={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(E,y){let M=y.program;n.uniformBlockBinding(E,M)}function l(E,y){let M=s[E.id];M===void 0&&(g(E),M=h(E),s[E.id]=M,E.addEventListener("dispose",m));let C=y.program;n.updateUBOMapping(E,C);let A=e.render.frame;r[E.id]!==A&&(p(E),r[E.id]=A)}function h(E){let y=f();E.__bindingPointIndex=y;let M=i.createBuffer(),C=E.__size,A=E.usage;return i.bindBuffer(i.UNIFORM_BUFFER,M),i.bufferData(i.UNIFORM_BUFFER,C,A),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,y,M),M}function f(){for(let E=0;E<a;E++)if(o.indexOf(E)===-1)return o.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(E){let y=s[E.id],M=E.uniforms,C=E.__cache;i.bindBuffer(i.UNIFORM_BUFFER,y);for(let A=0,T=M.length;A<T;A++){let P=Array.isArray(M[A])?M[A]:[M[A]];for(let W=0,v=P.length;W<v;W++){let b=P[W];if(d(b,A,W,C)===!0){let B=b.__offset,k=Array.isArray(b.value)?b.value:[b.value],F=0;for(let H=0;H<k.length;H++){let J=k[H],fe=x(J);typeof J=="number"||typeof J=="boolean"?(b.__data[0]=J,i.bufferSubData(i.UNIFORM_BUFFER,B+F,b.__data)):J.isMatrix3?(b.__data[0]=J.elements[0],b.__data[1]=J.elements[1],b.__data[2]=J.elements[2],b.__data[3]=0,b.__data[4]=J.elements[3],b.__data[5]=J.elements[4],b.__data[6]=J.elements[5],b.__data[7]=0,b.__data[8]=J.elements[6],b.__data[9]=J.elements[7],b.__data[10]=J.elements[8],b.__data[11]=0):(J.toArray(b.__data,F),F+=fe.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,B,b.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(E,y,M,C){let A=E.value,T=y+"_"+M;if(C[T]===void 0)return typeof A=="number"||typeof A=="boolean"?C[T]=A:C[T]=A.clone(),!0;{let P=C[T];if(typeof A=="number"||typeof A=="boolean"){if(P!==A)return C[T]=A,!0}else if(P.equals(A)===!1)return P.copy(A),!0}return!1}function g(E){let y=E.uniforms,M=0,C=16;for(let T=0,P=y.length;T<P;T++){let W=Array.isArray(y[T])?y[T]:[y[T]];for(let v=0,b=W.length;v<b;v++){let B=W[v],k=Array.isArray(B.value)?B.value:[B.value];for(let F=0,H=k.length;F<H;F++){let J=k[F],fe=x(J),ie=M%C,pe=ie%fe.boundary,N=ie+pe;M+=pe,N!==0&&C-N<fe.storage&&(M+=C-N),B.__data=new Float32Array(fe.storage/Float32Array.BYTES_PER_ELEMENT),B.__offset=M,M+=fe.storage}}}let A=M%C;return A>0&&(M+=C-A),E.__size=M,E.__cache={},this}function x(E){let y={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(y.boundary=4,y.storage=4):E.isVector2?(y.boundary=8,y.storage=8):E.isVector3||E.isColor?(y.boundary=16,y.storage=12):E.isVector4?(y.boundary=16,y.storage=16):E.isMatrix3?(y.boundary=48,y.storage=48):E.isMatrix4?(y.boundary=64,y.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),y}function m(E){let y=E.target;y.removeEventListener("dispose",m);let M=o.indexOf(y.__bindingPointIndex);o.splice(M,1),i.deleteBuffer(s[y.id]),delete s[y.id],delete r[y.id]}function u(){for(let E in s)i.deleteBuffer(s[E]);o=[],s={},r={}}return{bind:c,update:l,dispose:u}}var Uc=class{constructor(e={}){let{canvas:t=F1(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;let d=new Uint32Array(4),g=new Int32Array(4),x=null,m=null,u=[],E=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=pt,this.toneMapping=Cs,this.toneMappingExposure=1;let y=this,M=!1,C=0,A=0,T=null,P=-1,W=null,v=new Kt,b=new Kt,B=null,k=new dt(0),F=0,H=t.width,J=t.height,fe=1,ie=null,pe=null,N=new Kt(0,0,H,J),j=new Kt(0,0,H,J),se=!1,te=new ta,O=!1,le=!1,X=new Tt,V=new Tt,Z=new S,xe=new Kt,Ce={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},_e=!1;function ne(){return T===null?fe:1}let I=n;function ye(L,Q){return t.getContext(L,Q)}try{let L={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine","three.js r169"),t.addEventListener("webglcontextlost",Se,!1),t.addEventListener("webglcontextrestored",Ue,!1),t.addEventListener("webglcontextcreationerror",Fe,!1),I===null){let Q="webgl2";if(I=ye(Q,L),I===null)throw ye(Q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(L){throw console.error("THREE.WebGLRenderer: "+L.message),L}let ee,ae,me,Ae,Me,U,w,K,ge,be,Ee,Be,Oe,Xe,_t,De,$,ve,Ie,Pe,Te,he,ke,q;function Re(){ee=new Kv(I),ee.init(),he=new A2(I,ee),ae=new Wv(I,ee,e,he),me=new b2(I),ae.reverseDepthBuffer&&me.buffers.depth.setReversed(!0),Ae=new jv(I),Me=new d2,U=new R2(I,ee,me,Me,ae,he,Ae),w=new qv(y),K=new $v(y),ge=new ox(I),ke=new Vv(I,ge),be=new Jv(I,ge,Ae,ke),Ee=new t_(I,be,ge,Ae),Ie=new e_(I,ae,U),De=new Xv(Me),Be=new u2(y,w,K,ee,ae,ke,De),Oe=new D2(y,Me),Xe=new p2,_t=new _2(ee),ve=new kv(y,w,K,me,Ee,p,c),$=new S2(y,Ee,ae),q=new U2(I,Ae,ae,me),Pe=new Gv(I,ee,Ae),Te=new Qv(I,ee,Ae),Ae.programs=Be.programs,y.capabilities=ae,y.extensions=ee,y.properties=Me,y.renderLists=Xe,y.shadowMap=$,y.state=me,y.info=Ae}Re();let ce=new Au(y,I);this.xr=ce,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){let L=ee.get("WEBGL_lose_context");L&&L.loseContext()},this.forceContextRestore=function(){let L=ee.get("WEBGL_lose_context");L&&L.restoreContext()},this.getPixelRatio=function(){return fe},this.setPixelRatio=function(L){L!==void 0&&(fe=L,this.setSize(H,J,!1))},this.getSize=function(L){return L.set(H,J)},this.setSize=function(L,Q,oe=!0){if(ce.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}H=L,J=Q,t.width=Math.floor(L*fe),t.height=Math.floor(Q*fe),oe===!0&&(t.style.width=L+"px",t.style.height=Q+"px"),this.setViewport(0,0,L,Q)},this.getDrawingBufferSize=function(L){return L.set(H*fe,J*fe).floor()},this.setDrawingBufferSize=function(L,Q,oe){H=L,J=Q,fe=oe,t.width=Math.floor(L*oe),t.height=Math.floor(Q*oe),this.setViewport(0,0,L,Q)},this.getCurrentViewport=function(L){return L.copy(v)},this.getViewport=function(L){return L.copy(N)},this.setViewport=function(L,Q,oe,de){L.isVector4?N.set(L.x,L.y,L.z,L.w):N.set(L,Q,oe,de),me.viewport(v.copy(N).multiplyScalar(fe).round())},this.getScissor=function(L){return L.copy(j)},this.setScissor=function(L,Q,oe,de){L.isVector4?j.set(L.x,L.y,L.z,L.w):j.set(L,Q,oe,de),me.scissor(b.copy(j).multiplyScalar(fe).round())},this.getScissorTest=function(){return se},this.setScissorTest=function(L){me.setScissorTest(se=L)},this.setOpaqueSort=function(L){ie=L},this.setTransparentSort=function(L){pe=L},this.getClearColor=function(L){return L.copy(ve.getClearColor())},this.setClearColor=function(){ve.setClearColor.apply(ve,arguments)},this.getClearAlpha=function(){return ve.getClearAlpha()},this.setClearAlpha=function(){ve.setClearAlpha.apply(ve,arguments)},this.clear=function(L=!0,Q=!0,oe=!0){let de=0;if(L){let re=!1;if(T!==null){let Le=T.texture.format;re=Le===sd||Le===id||Le===nd}if(re){let Le=T.texture.type,Ge=Le===us||Le===or||Le===Jo||Le===Kr||Le===ju||Le===ed,Ke=ve.getClearColor(),Qe=ve.getClearAlpha(),at=Ke.r,ct=Ke.g,Ye=Ke.b;Ge?(d[0]=at,d[1]=ct,d[2]=Ye,d[3]=Qe,I.clearBufferuiv(I.COLOR,0,d)):(g[0]=at,g[1]=ct,g[2]=Ye,g[3]=Qe,I.clearBufferiv(I.COLOR,0,g))}else de|=I.COLOR_BUFFER_BIT}Q&&(de|=I.DEPTH_BUFFER_BIT,I.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),oe&&(de|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(de)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Se,!1),t.removeEventListener("webglcontextrestored",Ue,!1),t.removeEventListener("webglcontextcreationerror",Fe,!1),Xe.dispose(),_t.dispose(),Me.dispose(),w.dispose(),K.dispose(),Ee.dispose(),ke.dispose(),q.dispose(),Be.dispose(),ce.dispose(),ce.removeEventListener("sessionstart",Xi),ce.removeEventListener("sessionend",st),nt.stop()};function Se(L){L.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),M=!0}function Ue(){console.log("THREE.WebGLRenderer: Context Restored."),M=!1;let L=Ae.autoReset,Q=$.enabled,oe=$.autoUpdate,de=$.needsUpdate,re=$.type;Re(),Ae.autoReset=L,$.enabled=Q,$.autoUpdate=oe,$.needsUpdate=de,$.type=re}function Fe(L){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",L.statusMessage)}function ut(L){let Q=L.target;Q.removeEventListener("dispose",ut),Mt(Q)}function Mt(L){zt(L),Me.remove(L)}function zt(L){let Q=Me.get(L).programs;Q!==void 0&&(Q.forEach(function(oe){Be.releaseProgram(oe)}),L.isShaderMaterial&&Be.releaseShaderCache(L))}this.renderBufferDirect=function(L,Q,oe,de,re,Le){Q===null&&(Q=Ce);let Ge=re.isMesh&&re.matrixWorld.determinant()<0,Ke=Cn(L,Q,oe,de,re);me.setMaterial(de,Ge);let Qe=oe.index,at=1;if(de.wireframe===!0){if(Qe=be.getWireframeAttribute(oe),Qe===void 0)return;at=2}let ct=oe.drawRange,Ye=oe.attributes.position,At=ct.start*at,yt=(ct.start+ct.count)*at;Le!==null&&(At=Math.max(At,Le.start*at),yt=Math.min(yt,(Le.start+Le.count)*at)),Qe!==null?(At=Math.max(At,0),yt=Math.min(yt,Qe.count)):Ye!=null&&(At=Math.max(At,0),yt=Math.min(yt,Ye.count));let kt=yt-At;if(kt<0||kt===1/0)return;ke.setup(re,de,Ke,oe,Qe);let Pn,Ht=Pe;if(Qe!==null&&(Pn=ge.get(Qe),Ht=Te,Ht.setIndex(Pn)),re.isMesh)de.wireframe===!0?(me.setLineWidth(de.wireframeLinewidth*ne()),Ht.setMode(I.LINES)):Ht.setMode(I.TRIANGLES);else if(re.isLine){let it=de.linewidth;it===void 0&&(it=1),me.setLineWidth(it*ne()),re.isLineSegments?Ht.setMode(I.LINES):re.isLineLoop?Ht.setMode(I.LINE_LOOP):Ht.setMode(I.LINE_STRIP)}else re.isPoints?Ht.setMode(I.POINTS):re.isSprite&&Ht.setMode(I.TRIANGLES);if(re.isBatchedMesh)if(re._multiDrawInstances!==null)Ht.renderMultiDrawInstances(re._multiDrawStarts,re._multiDrawCounts,re._multiDrawCount,re._multiDrawInstances);else if(ee.get("WEBGL_multi_draw"))Ht.renderMultiDraw(re._multiDrawStarts,re._multiDrawCounts,re._multiDrawCount);else{let it=re._multiDrawStarts,Vt=re._multiDrawCounts,He=re._multiDrawCount,We=Qe?ge.get(Qe).bytesPerElement:1,Mn=Me.get(de).currentProgram.getUniforms();for(let sn=0;sn<He;sn++)Mn.setValue(I,"_gl_DrawID",sn),Ht.render(it[sn]/We,Vt[sn])}else if(re.isInstancedMesh)Ht.renderInstances(At,kt,re.count);else if(oe.isInstancedBufferGeometry){let it=oe._maxInstanceCount!==void 0?oe._maxInstanceCount:1/0,Vt=Math.min(oe.instanceCount,it);Ht.renderInstances(At,kt,Vt)}else Ht.render(At,kt)};function ft(L,Q,oe){L.transparent===!0&&L.side===Lt&&L.forceSinglePass===!1?(L.side=yn,L.needsUpdate=!0,Bt(L,Q,oe),L.side=Ji,L.needsUpdate=!0,Bt(L,Q,oe),L.side=Lt):Bt(L,Q,oe)}this.compile=function(L,Q,oe=null){oe===null&&(oe=L),m=_t.get(oe),m.init(Q),E.push(m),oe.traverseVisible(function(re){re.isLight&&re.layers.test(Q.layers)&&(m.pushLight(re),re.castShadow&&m.pushShadow(re))}),L!==oe&&L.traverseVisible(function(re){re.isLight&&re.layers.test(Q.layers)&&(m.pushLight(re),re.castShadow&&m.pushShadow(re))}),m.setupLights();let de=new Set;return L.traverse(function(re){if(!(re.isMesh||re.isPoints||re.isLine||re.isSprite))return;let Le=re.material;if(Le)if(Array.isArray(Le))for(let Ge=0;Ge<Le.length;Ge++){let Ke=Le[Ge];ft(Ke,oe,re),de.add(Ke)}else ft(Le,oe,re),de.add(Le)}),E.pop(),m=null,de},this.compileAsync=function(L,Q,oe=null){let de=this.compile(L,Q,oe);return new Promise(re=>{function Le(){if(de.forEach(function(Ge){Me.get(Ge).currentProgram.isReady()&&de.delete(Ge)}),de.size===0){re(L);return}setTimeout(Le,10)}ee.get("KHR_parallel_shader_compile")!==null?Le():setTimeout(Le,10)})};let Rt=null;function qn(L){Rt&&Rt(L)}function Xi(){nt.stop()}function st(){nt.start()}let nt=new e0;nt.setAnimationLoop(qn),typeof self<"u"&&nt.setContext(self),this.setAnimationLoop=function(L){Rt=L,ce.setAnimationLoop(L),L===null?nt.stop():nt.start()},ce.addEventListener("sessionstart",Xi),ce.addEventListener("sessionend",st),this.render=function(L,Q){if(Q!==void 0&&Q.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(M===!0)return;if(L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),Q.parent===null&&Q.matrixWorldAutoUpdate===!0&&Q.updateMatrixWorld(),ce.enabled===!0&&ce.isPresenting===!0&&(ce.cameraAutoUpdate===!0&&ce.updateCamera(Q),Q=ce.getCamera()),L.isScene===!0&&L.onBeforeRender(y,L,Q,T),m=_t.get(L,E.length),m.init(Q),E.push(m),V.multiplyMatrices(Q.projectionMatrix,Q.matrixWorldInverse),te.setFromProjectionMatrix(V),le=this.localClippingEnabled,O=De.init(this.clippingPlanes,le),x=Xe.get(L,u.length),x.init(),u.push(x),ce.enabled===!0&&ce.isPresenting===!0){let Le=y.xr.getDepthSensingMesh();Le!==null&&$e(Le,Q,-1/0,y.sortObjects)}$e(L,Q,0,y.sortObjects),x.finish(),y.sortObjects===!0&&x.sort(ie,pe),_e=ce.enabled===!1||ce.isPresenting===!1||ce.hasDepthSensing()===!1,_e&&ve.addToRenderList(x,L),this.info.render.frame++,O===!0&&De.beginShadows();let oe=m.state.shadowsArray;$.render(oe,L,Q),O===!0&&De.endShadows(),this.info.autoReset===!0&&this.info.reset();let de=x.opaque,re=x.transmissive;if(m.setupLights(),Q.isArrayCamera){let Le=Q.cameras;if(re.length>0)for(let Ge=0,Ke=Le.length;Ge<Ke;Ge++){let Qe=Le[Ge];et(de,re,L,Qe)}_e&&ve.render(L);for(let Ge=0,Ke=Le.length;Ge<Ke;Ge++){let Qe=Le[Ge];ot(x,L,Qe,Qe.viewport)}}else re.length>0&&et(de,re,L,Q),_e&&ve.render(L),ot(x,L,Q);T!==null&&(U.updateMultisampleRenderTarget(T),U.updateRenderTargetMipmap(T)),L.isScene===!0&&L.onAfterRender(y,L,Q),ke.resetDefaultState(),P=-1,W=null,E.pop(),E.length>0?(m=E[E.length-1],O===!0&&De.setGlobalState(y.clippingPlanes,m.state.camera)):m=null,u.pop(),u.length>0?x=u[u.length-1]:x=null};function $e(L,Q,oe,de){if(L.visible===!1)return;if(L.layers.test(Q.layers)){if(L.isGroup)oe=L.renderOrder;else if(L.isLOD)L.autoUpdate===!0&&L.update(Q);else if(L.isLight)m.pushLight(L),L.castShadow&&m.pushShadow(L);else if(L.isSprite){if(!L.frustumCulled||te.intersectsSprite(L)){de&&xe.setFromMatrixPosition(L.matrixWorld).applyMatrix4(V);let Ge=Ee.update(L),Ke=L.material;Ke.visible&&x.push(L,Ge,Ke,oe,xe.z,null)}}else if((L.isMesh||L.isLine||L.isPoints)&&(!L.frustumCulled||te.intersectsObject(L))){let Ge=Ee.update(L),Ke=L.material;if(de&&(L.boundingSphere!==void 0?(L.boundingSphere===null&&L.computeBoundingSphere(),xe.copy(L.boundingSphere.center)):(Ge.boundingSphere===null&&Ge.computeBoundingSphere(),xe.copy(Ge.boundingSphere.center)),xe.applyMatrix4(L.matrixWorld).applyMatrix4(V)),Array.isArray(Ke)){let Qe=Ge.groups;for(let at=0,ct=Qe.length;at<ct;at++){let Ye=Qe[at],At=Ke[Ye.materialIndex];At&&At.visible&&x.push(L,Ge,At,oe,xe.z,Ye)}}else Ke.visible&&x.push(L,Ge,Ke,oe,xe.z,null)}}let Le=L.children;for(let Ge=0,Ke=Le.length;Ge<Ke;Ge++)$e(Le[Ge],Q,oe,de)}function ot(L,Q,oe,de){let re=L.opaque,Le=L.transmissive,Ge=L.transparent;m.setupLightsView(oe),O===!0&&De.setGlobalState(y.clippingPlanes,oe),de&&me.viewport(v.copy(de)),re.length>0&&rt(re,Q,oe),Le.length>0&&rt(Le,Q,oe),Ge.length>0&&rt(Ge,Q,oe),me.buffers.depth.setTest(!0),me.buffers.depth.setMask(!0),me.buffers.color.setMask(!0),me.setPolygonOffset(!1)}function et(L,Q,oe,de){if((oe.isScene===!0?oe.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[de.id]===void 0&&(m.state.transmissionRenderTarget[de.id]=new ds(1,1,{generateMipmaps:!0,type:ee.has("EXT_color_buffer_half_float")||ee.has("EXT_color_buffer_float")?ua:us,minFilter:Fi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:qt.workingColorSpace}));let Le=m.state.transmissionRenderTarget[de.id],Ge=de.viewport||v;Le.setSize(Ge.z,Ge.w);let Ke=y.getRenderTarget();y.setRenderTarget(Le),y.getClearColor(k),F=y.getClearAlpha(),F<1&&y.setClearColor(16777215,.5),y.clear(),_e&&ve.render(oe);let Qe=y.toneMapping;y.toneMapping=Cs;let at=de.viewport;if(de.viewport!==void 0&&(de.viewport=void 0),m.setupLightsView(de),O===!0&&De.setGlobalState(y.clippingPlanes,de),rt(L,oe,de),U.updateMultisampleRenderTarget(Le),U.updateRenderTargetMipmap(Le),ee.has("WEBGL_multisampled_render_to_texture")===!1){let ct=!1;for(let Ye=0,At=Q.length;Ye<At;Ye++){let yt=Q[Ye],kt=yt.object,Pn=yt.geometry,Ht=yt.material,it=yt.group;if(Ht.side===Lt&&kt.layers.test(de.layers)){let Vt=Ht.side;Ht.side=yn,Ht.needsUpdate=!0,tt(kt,oe,de,Pn,Ht,it),Ht.side=Vt,Ht.needsUpdate=!0,ct=!0}}ct===!0&&(U.updateMultisampleRenderTarget(Le),U.updateRenderTargetMipmap(Le))}y.setRenderTarget(Ke),y.setClearColor(k,F),at!==void 0&&(de.viewport=at),y.toneMapping=Qe}function rt(L,Q,oe){let de=Q.isScene===!0?Q.overrideMaterial:null;for(let re=0,Le=L.length;re<Le;re++){let Ge=L[re],Ke=Ge.object,Qe=Ge.geometry,at=de===null?Ge.material:de,ct=Ge.group;Ke.layers.test(oe.layers)&&tt(Ke,Q,oe,Qe,at,ct)}}function tt(L,Q,oe,de,re,Le){L.onBeforeRender(y,Q,oe,de,re,Le),L.modelViewMatrix.multiplyMatrices(oe.matrixWorldInverse,L.matrixWorld),L.normalMatrix.getNormalMatrix(L.modelViewMatrix),re.onBeforeRender(y,Q,oe,de,L,Le),re.transparent===!0&&re.side===Lt&&re.forceSinglePass===!1?(re.side=yn,re.needsUpdate=!0,y.renderBufferDirect(oe,Q,de,re,L,Le),re.side=Ji,re.needsUpdate=!0,y.renderBufferDirect(oe,Q,de,re,L,Le),re.side=Lt):y.renderBufferDirect(oe,Q,de,re,L,Le),L.onAfterRender(y,Q,oe,de,re,Le)}function Bt(L,Q,oe){Q.isScene!==!0&&(Q=Ce);let de=Me.get(L),re=m.state.lights,Le=m.state.shadowsArray,Ge=re.state.version,Ke=Be.getParameters(L,re.state,Le,Q,oe),Qe=Be.getProgramCacheKey(Ke),at=de.programs;de.environment=L.isMeshStandardMaterial?Q.environment:null,de.fog=Q.fog,de.envMap=(L.isMeshStandardMaterial?K:w).get(L.envMap||de.environment),de.envMapRotation=de.environment!==null&&L.envMap===null?Q.environmentRotation:L.envMapRotation,at===void 0&&(L.addEventListener("dispose",ut),at=new Map,de.programs=at);let ct=at.get(Qe);if(ct!==void 0){if(de.currentProgram===ct&&de.lightsStateVersion===Ge)return Yt(L,Ke),ct}else Ke.uniforms=Be.getUniforms(L),L.onBeforeCompile(Ke,y),ct=Be.acquireProgram(Ke,Qe),at.set(Qe,ct),de.uniforms=Ke.uniforms;let Ye=de.uniforms;return(!L.isShaderMaterial&&!L.isRawShaderMaterial||L.clipping===!0)&&(Ye.clippingPlanes=De.uniform),Yt(L,Ke),de.needsLights=Ut(L),de.lightsStateVersion=Ge,de.needsLights&&(Ye.ambientLightColor.value=re.state.ambient,Ye.lightProbe.value=re.state.probe,Ye.directionalLights.value=re.state.directional,Ye.directionalLightShadows.value=re.state.directionalShadow,Ye.spotLights.value=re.state.spot,Ye.spotLightShadows.value=re.state.spotShadow,Ye.rectAreaLights.value=re.state.rectArea,Ye.ltc_1.value=re.state.rectAreaLTC1,Ye.ltc_2.value=re.state.rectAreaLTC2,Ye.pointLights.value=re.state.point,Ye.pointLightShadows.value=re.state.pointShadow,Ye.hemisphereLights.value=re.state.hemi,Ye.directionalShadowMap.value=re.state.directionalShadowMap,Ye.directionalShadowMatrix.value=re.state.directionalShadowMatrix,Ye.spotShadowMap.value=re.state.spotShadowMap,Ye.spotLightMatrix.value=re.state.spotLightMatrix,Ye.spotLightMap.value=re.state.spotLightMap,Ye.pointShadowMap.value=re.state.pointShadowMap,Ye.pointShadowMatrix.value=re.state.pointShadowMatrix),de.currentProgram=ct,de.uniformsList=null,ct}function cn(L){if(L.uniformsList===null){let Q=L.currentProgram.getUniforms();L.uniformsList=qr.seqWithValue(Q.seq,L.uniforms)}return L.uniformsList}function Yt(L,Q){let oe=Me.get(L);oe.outputColorSpace=Q.outputColorSpace,oe.batching=Q.batching,oe.batchingColor=Q.batchingColor,oe.instancing=Q.instancing,oe.instancingColor=Q.instancingColor,oe.instancingMorph=Q.instancingMorph,oe.skinning=Q.skinning,oe.morphTargets=Q.morphTargets,oe.morphNormals=Q.morphNormals,oe.morphColors=Q.morphColors,oe.morphTargetsCount=Q.morphTargetsCount,oe.numClippingPlanes=Q.numClippingPlanes,oe.numIntersection=Q.numClipIntersection,oe.vertexAlphas=Q.vertexAlphas,oe.vertexTangents=Q.vertexTangents,oe.toneMapping=Q.toneMapping}function Cn(L,Q,oe,de,re){Q.isScene!==!0&&(Q=Ce),U.resetTextureUnits();let Le=Q.fog,Ge=de.isMeshStandardMaterial?Q.environment:null,Ke=T===null?y.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:Fs,Qe=(de.isMeshStandardMaterial?K:w).get(de.envMap||Ge),at=de.vertexColors===!0&&!!oe.attributes.color&&oe.attributes.color.itemSize===4,ct=!!oe.attributes.tangent&&(!!de.normalMap||de.anisotropy>0),Ye=!!oe.morphAttributes.position,At=!!oe.morphAttributes.normal,yt=!!oe.morphAttributes.color,kt=Cs;de.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(kt=y.toneMapping);let Pn=oe.morphAttributes.position||oe.morphAttributes.normal||oe.morphAttributes.color,Ht=Pn!==void 0?Pn.length:0,it=Me.get(de),Vt=m.state.lights;if(O===!0&&(le===!0||L!==W)){let ei=L===W&&de.id===P;De.setState(de,L,ei)}let He=!1;de.version===it.__version?(it.needsLights&&it.lightsStateVersion!==Vt.state.version||it.outputColorSpace!==Ke||re.isBatchedMesh&&it.batching===!1||!re.isBatchedMesh&&it.batching===!0||re.isBatchedMesh&&it.batchingColor===!0&&re.colorTexture===null||re.isBatchedMesh&&it.batchingColor===!1&&re.colorTexture!==null||re.isInstancedMesh&&it.instancing===!1||!re.isInstancedMesh&&it.instancing===!0||re.isSkinnedMesh&&it.skinning===!1||!re.isSkinnedMesh&&it.skinning===!0||re.isInstancedMesh&&it.instancingColor===!0&&re.instanceColor===null||re.isInstancedMesh&&it.instancingColor===!1&&re.instanceColor!==null||re.isInstancedMesh&&it.instancingMorph===!0&&re.morphTexture===null||re.isInstancedMesh&&it.instancingMorph===!1&&re.morphTexture!==null||it.envMap!==Qe||de.fog===!0&&it.fog!==Le||it.numClippingPlanes!==void 0&&(it.numClippingPlanes!==De.numPlanes||it.numIntersection!==De.numIntersection)||it.vertexAlphas!==at||it.vertexTangents!==ct||it.morphTargets!==Ye||it.morphNormals!==At||it.morphColors!==yt||it.toneMapping!==kt||it.morphTargetsCount!==Ht)&&(He=!0):(He=!0,it.__version=de.version);let We=it.currentProgram;He===!0&&(We=Bt(de,Q,re));let Mn=!1,sn=!1,jn=!1,hn=We.getUniforms(),oi=it.uniforms;if(me.useProgram(We.program)&&(Mn=!0,sn=!0,jn=!0),de.id!==P&&(P=de.id,sn=!0),Mn||W!==L){ae.reverseDepthBuffer?(X.copy(L.projectionMatrix),z1(X),B1(X),hn.setValue(I,"projectionMatrix",X)):hn.setValue(I,"projectionMatrix",L.projectionMatrix),hn.setValue(I,"viewMatrix",L.matrixWorldInverse);let ei=hn.map.cameraPosition;ei!==void 0&&ei.setValue(I,Z.setFromMatrixPosition(L.matrixWorld)),ae.logarithmicDepthBuffer&&hn.setValue(I,"logDepthBufFC",2/(Math.log(L.far+1)/Math.LN2)),(de.isMeshPhongMaterial||de.isMeshToonMaterial||de.isMeshLambertMaterial||de.isMeshBasicMaterial||de.isMeshStandardMaterial||de.isShaderMaterial)&&hn.setValue(I,"isOrthographic",L.isOrthographicCamera===!0),W!==L&&(W=L,sn=!0,jn=!0)}if(re.isSkinnedMesh){hn.setOptional(I,re,"bindMatrix"),hn.setOptional(I,re,"bindMatrixInverse");let ei=re.skeleton;ei&&(ei.boneTexture===null&&ei.computeBoneTexture(),hn.setValue(I,"boneTexture",ei.boneTexture,U))}re.isBatchedMesh&&(hn.setOptional(I,re,"batchingTexture"),hn.setValue(I,"batchingTexture",re._matricesTexture,U),hn.setOptional(I,re,"batchingIdTexture"),hn.setValue(I,"batchingIdTexture",re._indirectTexture,U),hn.setOptional(I,re,"batchingColorTexture"),re._colorsTexture!==null&&hn.setValue(I,"batchingColorTexture",re._colorsTexture,U));let vr=oe.morphAttributes;if((vr.position!==void 0||vr.normal!==void 0||vr.color!==void 0)&&Ie.update(re,oe,We),(sn||it.receiveShadow!==re.receiveShadow)&&(it.receiveShadow=re.receiveShadow,hn.setValue(I,"receiveShadow",re.receiveShadow)),de.isMeshGouraudMaterial&&de.envMap!==null&&(oi.envMap.value=Qe,oi.flipEnvMap.value=Qe.isCubeTexture&&Qe.isRenderTargetTexture===!1?-1:1),de.isMeshStandardMaterial&&de.envMap===null&&Q.environment!==null&&(oi.envMapIntensity.value=Q.environmentIntensity),sn&&(hn.setValue(I,"toneMappingExposure",y.toneMappingExposure),it.needsLights&&ln(oi,jn),Le&&de.fog===!0&&Oe.refreshFogUniforms(oi,Le),Oe.refreshMaterialUniforms(oi,de,fe,J,m.state.transmissionRenderTarget[L.id]),qr.upload(I,cn(it),oi,U)),de.isShaderMaterial&&de.uniformsNeedUpdate===!0&&(qr.upload(I,cn(it),oi,U),de.uniformsNeedUpdate=!1),de.isSpriteMaterial&&hn.setValue(I,"center",re.center),hn.setValue(I,"modelViewMatrix",re.modelViewMatrix),hn.setValue(I,"normalMatrix",re.normalMatrix),hn.setValue(I,"modelMatrix",re.matrixWorld),de.isShaderMaterial||de.isRawShaderMaterial){let ei=de.uniformsGroups;for(let ai=0,Pl=ei.length;ai<Pl;ai++){let bo=ei[ai];q.update(bo,We),q.bind(bo,We)}}return We}function ln(L,Q){L.ambientLightColor.needsUpdate=Q,L.lightProbe.needsUpdate=Q,L.directionalLights.needsUpdate=Q,L.directionalLightShadows.needsUpdate=Q,L.pointLights.needsUpdate=Q,L.pointLightShadows.needsUpdate=Q,L.spotLights.needsUpdate=Q,L.spotLightShadows.needsUpdate=Q,L.rectAreaLights.needsUpdate=Q,L.hemisphereLights.needsUpdate=Q}function Ut(L){return L.isMeshLambertMaterial||L.isMeshToonMaterial||L.isMeshPhongMaterial||L.isMeshStandardMaterial||L.isShadowMaterial||L.isShaderMaterial&&L.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(L,Q,oe){Me.get(L.texture).__webglTexture=Q,Me.get(L.depthTexture).__webglTexture=oe;let de=Me.get(L);de.__hasExternalTextures=!0,de.__autoAllocateDepthBuffer=oe===void 0,de.__autoAllocateDepthBuffer||ee.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),de.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(L,Q){let oe=Me.get(L);oe.__webglFramebuffer=Q,oe.__useDefaultFramebuffer=Q===void 0},this.setRenderTarget=function(L,Q=0,oe=0){T=L,C=Q,A=oe;let de=!0,re=null,Le=!1,Ge=!1;if(L){let Qe=Me.get(L);if(Qe.__useDefaultFramebuffer!==void 0)me.bindFramebuffer(I.FRAMEBUFFER,null),de=!1;else if(Qe.__webglFramebuffer===void 0)U.setupRenderTarget(L);else if(Qe.__hasExternalTextures)U.rebindTextures(L,Me.get(L.texture).__webglTexture,Me.get(L.depthTexture).__webglTexture);else if(L.depthBuffer){let Ye=L.depthTexture;if(Qe.__boundDepthTexture!==Ye){if(Ye!==null&&Me.has(Ye)&&(L.width!==Ye.image.width||L.height!==Ye.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");U.setupDepthRenderbuffer(L)}}let at=L.texture;(at.isData3DTexture||at.isDataArrayTexture||at.isCompressedArrayTexture)&&(Ge=!0);let ct=Me.get(L).__webglFramebuffer;L.isWebGLCubeRenderTarget?(Array.isArray(ct[Q])?re=ct[Q][oe]:re=ct[Q],Le=!0):L.samples>0&&U.useMultisampledRTT(L)===!1?re=Me.get(L).__webglMultisampledFramebuffer:Array.isArray(ct)?re=ct[oe]:re=ct,v.copy(L.viewport),b.copy(L.scissor),B=L.scissorTest}else v.copy(N).multiplyScalar(fe).floor(),b.copy(j).multiplyScalar(fe).floor(),B=se;if(me.bindFramebuffer(I.FRAMEBUFFER,re)&&de&&me.drawBuffers(L,re),me.viewport(v),me.scissor(b),me.setScissorTest(B),Le){let Qe=Me.get(L.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+Q,Qe.__webglTexture,oe)}else if(Ge){let Qe=Me.get(L.texture),at=Q||0;I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,Qe.__webglTexture,oe||0,at)}P=-1},this.readRenderTargetPixels=function(L,Q,oe,de,re,Le,Ge){if(!(L&&L.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ke=Me.get(L).__webglFramebuffer;if(L.isWebGLCubeRenderTarget&&Ge!==void 0&&(Ke=Ke[Ge]),Ke){me.bindFramebuffer(I.FRAMEBUFFER,Ke);try{let Qe=L.texture,at=Qe.format,ct=Qe.type;if(!ae.textureFormatReadable(at)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ae.textureTypeReadable(ct)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Q>=0&&Q<=L.width-de&&oe>=0&&oe<=L.height-re&&I.readPixels(Q,oe,de,re,he.convert(at),he.convert(ct),Le)}finally{let Qe=T!==null?Me.get(T).__webglFramebuffer:null;me.bindFramebuffer(I.FRAMEBUFFER,Qe)}}},this.readRenderTargetPixelsAsync=async function(L,Q,oe,de,re,Le,Ge){if(!(L&&L.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ke=Me.get(L).__webglFramebuffer;if(L.isWebGLCubeRenderTarget&&Ge!==void 0&&(Ke=Ke[Ge]),Ke){let Qe=L.texture,at=Qe.format,ct=Qe.type;if(!ae.textureFormatReadable(at))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ae.textureTypeReadable(ct))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(Q>=0&&Q<=L.width-de&&oe>=0&&oe<=L.height-re){me.bindFramebuffer(I.FRAMEBUFFER,Ke);let Ye=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,Ye),I.bufferData(I.PIXEL_PACK_BUFFER,Le.byteLength,I.STREAM_READ),I.readPixels(Q,oe,de,re,he.convert(at),he.convert(ct),0);let At=T!==null?Me.get(T).__webglFramebuffer:null;me.bindFramebuffer(I.FRAMEBUFFER,At);let yt=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await O1(I,yt,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,Ye),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,Le),I.deleteBuffer(Ye),I.deleteSync(yt),Le}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(L,Q=null,oe=0){L.isTexture!==!0&&(vc("WebGLRenderer: copyFramebufferToTexture function signature has changed."),Q=arguments[0]||null,L=arguments[1]);let de=Math.pow(2,-oe),re=Math.floor(L.image.width*de),Le=Math.floor(L.image.height*de),Ge=Q!==null?Q.x:0,Ke=Q!==null?Q.y:0;U.setTexture2D(L,0),I.copyTexSubImage2D(I.TEXTURE_2D,oe,0,0,Ge,Ke,re,Le),me.unbindTexture()},this.copyTextureToTexture=function(L,Q,oe=null,de=null,re=0){L.isTexture!==!0&&(vc("WebGLRenderer: copyTextureToTexture function signature has changed."),de=arguments[0]||null,L=arguments[1],Q=arguments[2],re=arguments[3]||0,oe=null);let Le,Ge,Ke,Qe,at,ct;oe!==null?(Le=oe.max.x-oe.min.x,Ge=oe.max.y-oe.min.y,Ke=oe.min.x,Qe=oe.min.y):(Le=L.image.width,Ge=L.image.height,Ke=0,Qe=0),de!==null?(at=de.x,ct=de.y):(at=0,ct=0);let Ye=he.convert(Q.format),At=he.convert(Q.type);U.setTexture2D(Q,0),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,Q.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Q.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,Q.unpackAlignment);let yt=I.getParameter(I.UNPACK_ROW_LENGTH),kt=I.getParameter(I.UNPACK_IMAGE_HEIGHT),Pn=I.getParameter(I.UNPACK_SKIP_PIXELS),Ht=I.getParameter(I.UNPACK_SKIP_ROWS),it=I.getParameter(I.UNPACK_SKIP_IMAGES),Vt=L.isCompressedTexture?L.mipmaps[re]:L.image;I.pixelStorei(I.UNPACK_ROW_LENGTH,Vt.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Vt.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Ke),I.pixelStorei(I.UNPACK_SKIP_ROWS,Qe),L.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,re,at,ct,Le,Ge,Ye,At,Vt.data):L.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,re,at,ct,Vt.width,Vt.height,Ye,Vt.data):I.texSubImage2D(I.TEXTURE_2D,re,at,ct,Le,Ge,Ye,At,Vt),I.pixelStorei(I.UNPACK_ROW_LENGTH,yt),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,kt),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Pn),I.pixelStorei(I.UNPACK_SKIP_ROWS,Ht),I.pixelStorei(I.UNPACK_SKIP_IMAGES,it),re===0&&Q.generateMipmaps&&I.generateMipmap(I.TEXTURE_2D),me.unbindTexture()},this.copyTextureToTexture3D=function(L,Q,oe=null,de=null,re=0){L.isTexture!==!0&&(vc("WebGLRenderer: copyTextureToTexture3D function signature has changed."),oe=arguments[0]||null,de=arguments[1]||null,L=arguments[2],Q=arguments[3],re=arguments[4]||0);let Le,Ge,Ke,Qe,at,ct,Ye,At,yt,kt=L.isCompressedTexture?L.mipmaps[re]:L.image;oe!==null?(Le=oe.max.x-oe.min.x,Ge=oe.max.y-oe.min.y,Ke=oe.max.z-oe.min.z,Qe=oe.min.x,at=oe.min.y,ct=oe.min.z):(Le=kt.width,Ge=kt.height,Ke=kt.depth,Qe=0,at=0,ct=0),de!==null?(Ye=de.x,At=de.y,yt=de.z):(Ye=0,At=0,yt=0);let Pn=he.convert(Q.format),Ht=he.convert(Q.type),it;if(Q.isData3DTexture)U.setTexture3D(Q,0),it=I.TEXTURE_3D;else if(Q.isDataArrayTexture||Q.isCompressedArrayTexture)U.setTexture2DArray(Q,0),it=I.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,Q.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Q.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,Q.unpackAlignment);let Vt=I.getParameter(I.UNPACK_ROW_LENGTH),He=I.getParameter(I.UNPACK_IMAGE_HEIGHT),We=I.getParameter(I.UNPACK_SKIP_PIXELS),Mn=I.getParameter(I.UNPACK_SKIP_ROWS),sn=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,kt.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,kt.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Qe),I.pixelStorei(I.UNPACK_SKIP_ROWS,at),I.pixelStorei(I.UNPACK_SKIP_IMAGES,ct),L.isDataTexture||L.isData3DTexture?I.texSubImage3D(it,re,Ye,At,yt,Le,Ge,Ke,Pn,Ht,kt.data):Q.isCompressedArrayTexture?I.compressedTexSubImage3D(it,re,Ye,At,yt,Le,Ge,Ke,Pn,kt.data):I.texSubImage3D(it,re,Ye,At,yt,Le,Ge,Ke,Pn,Ht,kt),I.pixelStorei(I.UNPACK_ROW_LENGTH,Vt),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,He),I.pixelStorei(I.UNPACK_SKIP_PIXELS,We),I.pixelStorei(I.UNPACK_SKIP_ROWS,Mn),I.pixelStorei(I.UNPACK_SKIP_IMAGES,sn),re===0&&Q.generateMipmaps&&I.generateMipmap(it),me.unbindTexture()},this.initRenderTarget=function(L){Me.get(L).__webglFramebuffer===void 0&&U.setupRenderTarget(L)},this.initTexture=function(L){L.isCubeTexture?U.setTextureCube(L,0):L.isData3DTexture?U.setTexture3D(L,0):L.isDataArrayTexture||L.isCompressedArrayTexture?U.setTexture2DArray(L,0):U.setTexture2D(L,0),me.unbindTexture()},this.resetState=function(){C=0,A=0,T=null,me.reset(),ke.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return hs}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=e===od?"display-p3":"srgb",t.unpackColorSpace=qt.workingColorSpace===Jc?"display-p3":"srgb"}};var Hc=class i{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new dt(e),this.near=t,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Nc=class extends Ft{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ii,this.environmentIntensity=1,this.environmentRotation=new ii,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}};var ji=class extends Kn{constructor(e=null,t=1,n=1,s,r,o,a,c,l=ni,h=ni,f,p){super(null,o,a,c,l,h,s,r,f,p),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var ar=class extends fn{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},zr=new Tt,_p=new Tt,ac=[],Mp=new Dn,H2=new Tt,Bo=new ht,ko=new Ls,vn=class extends ht{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new ar(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,H2)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Dn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,zr),Mp.copy(e.boundingBox).applyMatrix4(zr),this.boundingBox.union(Mp)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ls),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,zr),ko.copy(e.boundingSphere).applyMatrix4(zr),this.boundingSphere.union(ko)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(e,t){let n=this.matrixWorld,s=this.count;if(Bo.geometry=this.geometry,Bo.material=this.material,Bo.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ko.copy(this.boundingSphere),ko.applyMatrix4(n),e.ray.intersectsSphere(ko)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,zr),_p.multiplyMatrices(n,zr),Bo.matrixWorld=_p,Bo.raycast(e,ac);for(let o=0,a=ac.length;o<a;o++){let c=ac[o];c.instanceId=r,c.object=this,t.push(c)}ac.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new ar(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){let n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new ji(new Float32Array(s*this.count),s,this.count,td,Ki));let r=this.morphTexture.source.data.data,o=0;for(let l=0;l<n.length;l++)o+=n[l];let a=this.geometry.morphTargetsRelative?1:1-o,c=s*e;r[c]=a,r.set(n,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var cr=class extends Ds{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new dt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Fc=new S,Oc=new S,Ep=new Tt,Vo=new jo,cc=new Ls,wh=new S,Sp=new S,Cu=class extends Ft{constructor(e=new Pt,t=new cr){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)Fc.fromBufferAttribute(t,s-1),Oc.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=Fc.distanceTo(Oc);e.setAttribute("lineDistance",new lt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),cc.copy(n.boundingSphere),cc.applyMatrix4(s),cc.radius+=r,e.ray.intersectsSphere(cc)===!1)return;Ep.copy(s).invert(),Vo.copy(e.ray).applyMatrix4(Ep);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,h=n.index,p=n.attributes.position;if(h!==null){let d=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let x=d,m=g-1;x<m;x+=l){let u=h.getX(x),E=h.getX(x+1),y=lc(this,e,Vo,c,u,E);y&&t.push(y)}if(this.isLineLoop){let x=h.getX(g-1),m=h.getX(d),u=lc(this,e,Vo,c,x,m);u&&t.push(u)}}else{let d=Math.max(0,o.start),g=Math.min(p.count,o.start+o.count);for(let x=d,m=g-1;x<m;x+=l){let u=lc(this,e,Vo,c,x,x+1);u&&t.push(u)}if(this.isLineLoop){let x=lc(this,e,Vo,c,g-1,d);x&&t.push(x)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function lc(i,e,t,n,s,r){let o=i.geometry.attributes.position;if(Fc.fromBufferAttribute(o,s),Oc.fromBufferAttribute(o,r),t.distanceSqToSegment(Fc,Oc,wh,Sp)>n)return;wh.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(wh);if(!(c<e.near||c>e.far))return{distance:c,point:Sp.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}var wp=new S,bp=new S,to=class extends Cu{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)wp.fromBufferAttribute(t,s),bp.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+wp.distanceTo(bp);e.setAttribute("lineDistance",new lt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var Ot=class extends Kn{constructor(e,t,n,s,r,o,a,c,l){super(e,t,n,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}},_i=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let n=this.getLengths(),s=0,r=n.length,o;t?o=t:o=e*n[r-1];let a=0,c=r-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=n[s]-o,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===o)return s/(r-1);let h=n[s],p=n[s+1]-h,d=(o-h)/p;return(s+d)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),c=t||(o.isVector2?new Ne:new S);return c.copy(a).sub(o).normalize(),c}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){let n=new S,s=[],r=[],o=[],a=new S,c=new Tt;for(let d=0;d<=e;d++){let g=d/e;s[d]=this.getTangentAt(g,new S)}r[0]=new S,o[0]=new S;let l=Number.MAX_VALUE,h=Math.abs(s[0].x),f=Math.abs(s[0].y),p=Math.abs(s[0].z);h<=l&&(l=h,n.set(1,0,0)),f<=l&&(l=f,n.set(0,1,0)),p<=l&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let d=1;d<=e;d++){if(r[d]=r[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(s[d-1],s[d]),a.length()>Number.EPSILON){a.normalize();let g=Math.acos(Sn(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(c.makeRotationAxis(a,g))}o[d].crossVectors(s[d],r[d])}if(t===!0){let d=Math.acos(Sn(r[0].dot(r[e]),-1,1));d/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(d=-d);for(let g=1;g<=e;g++)r[g].applyMatrix4(c.makeRotationAxis(s[g],d*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},ia=class extends _i{constructor(e=0,t=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(e,t=new Ne){let n=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+e*r,c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),f=Math.sin(this.aRotation),p=c-this.aX,d=l-this.aY;c=p*h-d*f+this.aX,l=p*f+d*h+this.aY}return n.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Pu=class extends ia{constructor(e,t,n,s,r,o){super(e,t,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function ld(){let i=0,e=0,t=0,n=0;function s(r,o,a,c){i=r,e=a,t=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){s(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,h,f){let p=(o-r)/l-(a-r)/(l+h)+(a-o)/h,d=(a-o)/h-(c-o)/(h+f)+(c-a)/f;p*=h,d*=h,s(o,a,p,d)},calc:function(r){let o=r*r,a=o*r;return i+e*r+t*o+n*a}}}var hc=new S,bh=new ld,Th=new ld,Rh=new ld,Jt=class extends _i{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new S){let n=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e,a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,h;this.closed||a>0?l=s[(a-1)%r]:(hc.subVectors(s[0],s[1]).add(s[0]),l=hc);let f=s[a%r],p=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(hc.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=hc),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,g=Math.pow(l.distanceToSquared(f),d),x=Math.pow(f.distanceToSquared(p),d),m=Math.pow(p.distanceToSquared(h),d);x<1e-4&&(x=1),g<1e-4&&(g=x),m<1e-4&&(m=x),bh.initNonuniformCatmullRom(l.x,f.x,p.x,h.x,g,x,m),Th.initNonuniformCatmullRom(l.y,f.y,p.y,h.y,g,x,m),Rh.initNonuniformCatmullRom(l.z,f.z,p.z,h.z,g,x,m)}else this.curveType==="catmullrom"&&(bh.initCatmullRom(l.x,f.x,p.x,h.x,this.tension),Th.initCatmullRom(l.y,f.y,p.y,h.y,this.tension),Rh.initCatmullRom(l.z,f.z,p.z,h.z,this.tension));return n.set(bh.calc(c),Th.calc(c),Rh.calc(c)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new S().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Tp(i,e,t,n,s){let r=(n-e)*.5,o=(s-t)*.5,a=i*i,c=i*a;return(2*t-2*n+r+o)*c+(-3*t+3*n-2*r-o)*a+r*i+t}function N2(i,e){let t=1-i;return t*t*e}function F2(i,e){return 2*(1-i)*i*e}function O2(i,e){return i*i*e}function Zo(i,e,t,n){return N2(i,e)+F2(i,t)+O2(i,n)}function z2(i,e){let t=1-i;return t*t*t*e}function B2(i,e){let t=1-i;return 3*t*t*i*e}function k2(i,e){return 3*(1-i)*i*i*e}function V2(i,e){return i*i*i*e}function $o(i,e,t,n,s){return z2(i,e)+B2(i,t)+k2(i,n)+V2(i,s)}var zc=class extends _i{constructor(e=new Ne,t=new Ne,n=new Ne,s=new Ne){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new Ne){let n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set($o(e,s.x,r.x,o.x,a.x),$o(e,s.y,r.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},sa=class extends _i{constructor(e=new S,t=new S,n=new S,s=new S){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new S){let n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set($o(e,s.x,r.x,o.x,a.x),$o(e,s.y,r.y,o.y,a.y),$o(e,s.z,r.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Bc=class extends _i{constructor(e=new Ne,t=new Ne){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Ne){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Ne){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Iu=class extends _i{constructor(e=new S,t=new S){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new S){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new S){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},kc=class extends _i{constructor(e=new Ne,t=new Ne,n=new Ne){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new Ne){let n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(Zo(e,s.x,r.x,o.x),Zo(e,s.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Vc=class extends _i{constructor(e=new S,t=new S,n=new S){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new S){let n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(Zo(e,s.x,r.x,o.x),Zo(e,s.y,r.y,o.y),Zo(e,s.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Gc=class extends _i{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Ne){let n=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,c=s[o===0?o:o-1],l=s[o],h=s[o>s.length-2?s.length-1:o+1],f=s[o>s.length-3?s.length-1:o+2];return n.set(Tp(a,c.x,l.x,h.x,f.x),Tp(a,c.y,l.y,h.y,f.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new Ne().fromArray(s))}return this}},Wc=Object.freeze({__proto__:null,ArcCurve:Pu,CatmullRomCurve3:Jt,CubicBezierCurve:zc,CubicBezierCurve3:sa,EllipseCurve:ia,LineCurve:Bc,LineCurve3:Iu,QuadraticBezierCurve:kc,QuadraticBezierCurve3:Vc,SplineCurve:Gc}),Lu=class extends _i{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Wc[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let o=s[r]-n,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,c=o.getPoints(a);for(let l=0;l<c.length;l++){let h=c[l];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(new Wc[s.type]().fromJSON(s))}return this}},Mi=class extends Lu{constructor(e){super(),this.type="Path",this.currentPoint=new Ne,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new Bc(this.currentPoint.clone(),new Ne(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){let r=new kc(this.currentPoint.clone(),new Ne(e,t),new Ne(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,o){let a=new zc(this.currentPoint.clone(),new Ne(e,t),new Ne(n,s),new Ne(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new Gc(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,o){let a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+a,t+c,n,s,r,o),this}absarc(e,t,n,s,r,o){return this.absellipse(e,t,n,n,s,r,o),this}ellipse(e,t,n,s,r,o,a,c){let l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+l,t+h,n,s,r,o,a,c),this}absellipse(e,t,n,s,r,o,a,c){let l=new ia(e,t,n,s,r,o,a,c);if(this.curves.length>0){let f=l.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(l);let h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},Us=class i extends Pt{constructor(e=[new Ne(0,-.5),new Ne(.5,0),new Ne(0,.5)],t=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:s},t=Math.floor(t),s=Sn(s,0,Math.PI*2);let r=[],o=[],a=[],c=[],l=[],h=1/t,f=new S,p=new Ne,d=new S,g=new S,x=new S,m=0,u=0;for(let E=0;E<=e.length-1;E++)switch(E){case 0:m=e[E+1].x-e[E].x,u=e[E+1].y-e[E].y,d.x=u*1,d.y=-m,d.z=u*0,x.copy(d),d.normalize(),c.push(d.x,d.y,d.z);break;case e.length-1:c.push(x.x,x.y,x.z);break;default:m=e[E+1].x-e[E].x,u=e[E+1].y-e[E].y,d.x=u*1,d.y=-m,d.z=u*0,g.copy(d),d.x+=x.x,d.y+=x.y,d.z+=x.z,d.normalize(),c.push(d.x,d.y,d.z),x.copy(g)}for(let E=0;E<=t;E++){let y=n+E*h*s,M=Math.sin(y),C=Math.cos(y);for(let A=0;A<=e.length-1;A++){f.x=e[A].x*M,f.y=e[A].y,f.z=e[A].x*C,o.push(f.x,f.y,f.z),p.x=E/t,p.y=A/(e.length-1),a.push(p.x,p.y);let T=c[3*A+0]*M,P=c[3*A+1],W=c[3*A+0]*C;l.push(T,P,W)}}for(let E=0;E<t;E++)for(let y=0;y<e.length-1;y++){let M=y+E*e.length,C=M,A=M+e.length,T=M+e.length+1,P=M+1;r.push(C,A,P),r.push(T,P,A)}this.setIndex(r),this.setAttribute("position",new lt(o,3)),this.setAttribute("uv",new lt(a,2)),this.setAttribute("normal",new lt(l,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.points,e.segments,e.phiStart,e.phiLength)}};var Ei=class i extends Pt{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);let r=[],o=[],a=[],c=[],l=new S,h=new Ne;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let f=0,p=3;f<=t;f++,p+=3){let d=n+f/t*s;l.x=e*Math.cos(d),l.y=e*Math.sin(d),o.push(l.x,l.y,l.z),a.push(0,0,1),h.x=(o[p]/e+1)/2,h.y=(o[p+1]/e+1)/2,c.push(h.x,h.y)}for(let f=1;f<=t;f++)r.push(f,f+1,0);this.setIndex(r),this.setAttribute("position",new lt(o,3)),this.setAttribute("normal",new lt(a,3)),this.setAttribute("uv",new lt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.segments,e.thetaStart,e.thetaLength)}},Zt=class i extends Pt{constructor(e=1,t=1,n=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};let l=this;s=Math.floor(s),r=Math.floor(r);let h=[],f=[],p=[],d=[],g=0,x=[],m=n/2,u=0;E(),o===!1&&(e>0&&y(!0),t>0&&y(!1)),this.setIndex(h),this.setAttribute("position",new lt(f,3)),this.setAttribute("normal",new lt(p,3)),this.setAttribute("uv",new lt(d,2));function E(){let M=new S,C=new S,A=0,T=(t-e)/n;for(let P=0;P<=r;P++){let W=[],v=P/r,b=v*(t-e)+e;for(let B=0;B<=s;B++){let k=B/s,F=k*c+a,H=Math.sin(F),J=Math.cos(F);C.x=b*H,C.y=-v*n+m,C.z=b*J,f.push(C.x,C.y,C.z),M.set(H,T,J).normalize(),p.push(M.x,M.y,M.z),d.push(k,1-v),W.push(g++)}x.push(W)}for(let P=0;P<s;P++)for(let W=0;W<r;W++){let v=x[W][P],b=x[W+1][P],B=x[W+1][P+1],k=x[W][P+1];e>0&&(h.push(v,b,k),A+=3),t>0&&(h.push(b,B,k),A+=3)}l.addGroup(u,A,0),u+=A}function y(M){let C=g,A=new Ne,T=new S,P=0,W=M===!0?e:t,v=M===!0?1:-1;for(let B=1;B<=s;B++)f.push(0,m*v,0),p.push(0,v,0),d.push(.5,.5),g++;let b=g;for(let B=0;B<=s;B++){let F=B/s*c+a,H=Math.cos(F),J=Math.sin(F);T.x=W*J,T.y=m*v,T.z=W*H,f.push(T.x,T.y,T.z),p.push(0,v,0),A.x=H*.5+.5,A.y=J*.5*v+.5,d.push(A.x,A.y),g++}for(let B=0;B<s;B++){let k=C+B,F=b+B;M===!0?h.push(F,F+1,k):h.push(F+1,F,k),P+=3}l.addGroup(u,P,M===!0?1:2),u+=P}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Hs=class i extends Zt{constructor(e=1,t=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Du=class i extends Pt{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};let r=[],o=[];a(s),l(n),h(),this.setAttribute("position",new lt(r,3)),this.setAttribute("normal",new lt(r.slice(),3)),this.setAttribute("uv",new lt(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(E){let y=new S,M=new S,C=new S;for(let A=0;A<t.length;A+=3)d(t[A+0],y),d(t[A+1],M),d(t[A+2],C),c(y,M,C,E)}function c(E,y,M,C){let A=C+1,T=[];for(let P=0;P<=A;P++){T[P]=[];let W=E.clone().lerp(M,P/A),v=y.clone().lerp(M,P/A),b=A-P;for(let B=0;B<=b;B++)B===0&&P===A?T[P][B]=W:T[P][B]=W.clone().lerp(v,B/b)}for(let P=0;P<A;P++)for(let W=0;W<2*(A-P)-1;W++){let v=Math.floor(W/2);W%2===0?(p(T[P][v+1]),p(T[P+1][v]),p(T[P][v])):(p(T[P][v+1]),p(T[P+1][v+1]),p(T[P+1][v]))}}function l(E){let y=new S;for(let M=0;M<r.length;M+=3)y.x=r[M+0],y.y=r[M+1],y.z=r[M+2],y.normalize().multiplyScalar(E),r[M+0]=y.x,r[M+1]=y.y,r[M+2]=y.z}function h(){let E=new S;for(let y=0;y<r.length;y+=3){E.x=r[y+0],E.y=r[y+1],E.z=r[y+2];let M=m(E)/2/Math.PI+.5,C=u(E)/Math.PI+.5;o.push(M,1-C)}g(),f()}function f(){for(let E=0;E<o.length;E+=6){let y=o[E+0],M=o[E+2],C=o[E+4],A=Math.max(y,M,C),T=Math.min(y,M,C);A>.9&&T<.1&&(y<.2&&(o[E+0]+=1),M<.2&&(o[E+2]+=1),C<.2&&(o[E+4]+=1))}}function p(E){r.push(E.x,E.y,E.z)}function d(E,y){let M=E*3;y.x=e[M+0],y.y=e[M+1],y.z=e[M+2]}function g(){let E=new S,y=new S,M=new S,C=new S,A=new Ne,T=new Ne,P=new Ne;for(let W=0,v=0;W<r.length;W+=9,v+=6){E.set(r[W+0],r[W+1],r[W+2]),y.set(r[W+3],r[W+4],r[W+5]),M.set(r[W+6],r[W+7],r[W+8]),A.set(o[v+0],o[v+1]),T.set(o[v+2],o[v+3]),P.set(o[v+4],o[v+5]),C.copy(E).add(y).add(M).divideScalar(3);let b=m(C);x(A,v+0,E,b),x(T,v+2,y,b),x(P,v+4,M,b)}}function x(E,y,M,C){C<0&&E.x===1&&(o[y]=E.x-1),M.x===0&&M.z===0&&(o[y]=C/2/Math.PI+.5)}function m(E){return Math.atan2(E.z,-E.x)}function u(E){return Math.atan2(-E.y,Math.sqrt(E.x*E.x+E.z*E.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.vertices,e.indices,e.radius,e.details)}};var bt=class extends Mi{constructor(e){super(e),this.uuid=dr(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(new Mi().fromJSON(s))}return this}},G2={triangulate:function(i,e,t=2){let n=e&&e.length,s=n?e[0]*t:i.length,r=r0(i,0,s,t,!0),o=[];if(!r||r.next===r.prev)return o;let a,c,l,h,f,p,d;if(n&&(r=Z2(i,e,r,t)),i.length>80*t){a=l=i[0],c=h=i[1];for(let g=t;g<s;g+=t)f=i[g],p=i[g+1],f<a&&(a=f),p<c&&(c=p),f>l&&(l=f),p>h&&(h=p);d=Math.max(l-a,h-c),d=d!==0?32767/d:0}return ra(r,o,t,a,c,d,0),o}};function r0(i,e,t,n,s){let r,o;if(s===rM(i,e,t,n)>0)for(r=e;r<t;r+=n)o=Rp(r,i[r],i[r+1],o);else for(r=t-n;r>=e;r-=n)o=Rp(r,i[r],i[r+1],o);return o&&jc(o,o.next)&&(aa(o),o=o.next),o}function lr(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(jc(t,t.next)||dn(t.prev,t,t.next)===0)){if(aa(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function ra(i,e,t,n,s,r,o){if(!i)return;!o&&r&&j2(i,n,s,r);let a=i,c,l;for(;i.prev!==i.next;){if(c=i.prev,l=i.next,r?X2(i,n,s,r):W2(i)){e.push(c.i/t|0),e.push(i.i/t|0),e.push(l.i/t|0),aa(i),i=l.next,a=l.next;continue}if(i=l,i===a){o?o===1?(i=q2(lr(i),e,t),ra(i,e,t,n,s,r,2)):o===2&&Y2(i,e,t,n,s,r):ra(lr(i),e,t,n,s,r,1);break}}}function W2(i){let e=i.prev,t=i,n=i.next;if(dn(e,t,n)>=0)return!1;let s=e.x,r=t.x,o=n.x,a=e.y,c=t.y,l=n.y,h=s<r?s<o?s:o:r<o?r:o,f=a<c?a<l?a:l:c<l?c:l,p=s>r?s>o?s:o:r>o?r:o,d=a>c?a>l?a:l:c>l?c:l,g=n.next;for(;g!==e;){if(g.x>=h&&g.x<=p&&g.y>=f&&g.y<=d&&Vr(s,a,r,c,o,l,g.x,g.y)&&dn(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function X2(i,e,t,n){let s=i.prev,r=i,o=i.next;if(dn(s,r,o)>=0)return!1;let a=s.x,c=r.x,l=o.x,h=s.y,f=r.y,p=o.y,d=a<c?a<l?a:l:c<l?c:l,g=h<f?h<p?h:p:f<p?f:p,x=a>c?a>l?a:l:c>l?c:l,m=h>f?h>p?h:p:f>p?f:p,u=Uu(d,g,e,t,n),E=Uu(x,m,e,t,n),y=i.prevZ,M=i.nextZ;for(;y&&y.z>=u&&M&&M.z<=E;){if(y.x>=d&&y.x<=x&&y.y>=g&&y.y<=m&&y!==s&&y!==o&&Vr(a,h,c,f,l,p,y.x,y.y)&&dn(y.prev,y,y.next)>=0||(y=y.prevZ,M.x>=d&&M.x<=x&&M.y>=g&&M.y<=m&&M!==s&&M!==o&&Vr(a,h,c,f,l,p,M.x,M.y)&&dn(M.prev,M,M.next)>=0))return!1;M=M.nextZ}for(;y&&y.z>=u;){if(y.x>=d&&y.x<=x&&y.y>=g&&y.y<=m&&y!==s&&y!==o&&Vr(a,h,c,f,l,p,y.x,y.y)&&dn(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;M&&M.z<=E;){if(M.x>=d&&M.x<=x&&M.y>=g&&M.y<=m&&M!==s&&M!==o&&Vr(a,h,c,f,l,p,M.x,M.y)&&dn(M.prev,M,M.next)>=0)return!1;M=M.nextZ}return!0}function q2(i,e,t){let n=i;do{let s=n.prev,r=n.next.next;!jc(s,r)&&o0(s,n,n.next,r)&&oa(s,r)&&oa(r,s)&&(e.push(s.i/t|0),e.push(n.i/t|0),e.push(r.i/t|0),aa(n),aa(n.next),n=i=r),n=n.next}while(n!==i);return lr(n)}function Y2(i,e,t,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&nM(o,a)){let c=a0(o,a);o=lr(o,o.next),c=lr(c,c.next),ra(o,e,t,n,s,r,0),ra(c,e,t,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function Z2(i,e,t,n){let s=[],r,o,a,c,l;for(r=0,o=e.length;r<o;r++)a=e[r]*n,c=r<o-1?e[r+1]*n:i.length,l=r0(i,a,c,n,!1),l===l.next&&(l.steiner=!0),s.push(tM(l));for(s.sort($2),r=0;r<s.length;r++)t=K2(s[r],t);return t}function $2(i,e){return i.x-e.x}function K2(i,e){let t=J2(i,e);if(!t)return e;let n=a0(t,i);return lr(n,n.next),lr(t,t.next)}function J2(i,e){let t=e,n=-1/0,s,r=i.x,o=i.y;do{if(o<=t.y&&o>=t.next.y&&t.next.y!==t.y){let p=t.x+(o-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(p<=r&&p>n&&(n=p,s=t.x<t.next.x?t:t.next,p===r))return s}t=t.next}while(t!==e);if(!s)return null;let a=s,c=s.x,l=s.y,h=1/0,f;t=s;do r>=t.x&&t.x>=c&&r!==t.x&&Vr(o<l?r:n,o,c,l,o<l?n:r,o,t.x,t.y)&&(f=Math.abs(o-t.y)/(r-t.x),oa(t,i)&&(f<h||f===h&&(t.x>s.x||t.x===s.x&&Q2(s,t)))&&(s=t,h=f)),t=t.next;while(t!==a);return s}function Q2(i,e){return dn(i.prev,i,e.prev)<0&&dn(e.next,i,i.next)<0}function j2(i,e,t,n){let s=i;do s.z===0&&(s.z=Uu(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,eM(s)}function eM(i){let e,t,n,s,r,o,a,c,l=1;do{for(t=i,i=null,r=null,o=0;t;){for(o++,n=t,a=0,e=0;e<l&&(a++,n=n.nextZ,!!n);e++);for(c=l;a>0||c>0&&n;)a!==0&&(c===0||!n||t.z<=n.z)?(s=t,t=t.nextZ,a--):(s=n,n=n.nextZ,c--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;t=n}r.nextZ=null,l*=2}while(o>1);return i}function Uu(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function tM(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function Vr(i,e,t,n,s,r,o,a){return(s-o)*(e-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(s-o)*(n-a)}function nM(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!iM(i,e)&&(oa(i,e)&&oa(e,i)&&sM(i,e)&&(dn(i.prev,i,e.prev)||dn(i,e.prev,e))||jc(i,e)&&dn(i.prev,i,i.next)>0&&dn(e.prev,e,e.next)>0)}function dn(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function jc(i,e){return i.x===e.x&&i.y===e.y}function o0(i,e,t,n){let s=dc(dn(i,e,t)),r=dc(dn(i,e,n)),o=dc(dn(t,n,i)),a=dc(dn(t,n,e));return!!(s!==r&&o!==a||s===0&&uc(i,t,e)||r===0&&uc(i,n,e)||o===0&&uc(t,i,n)||a===0&&uc(t,e,n))}function uc(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function dc(i){return i>0?1:i<0?-1:0}function iM(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&o0(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function oa(i,e){return dn(i.prev,i,i.next)<0?dn(i,e,i.next)>=0&&dn(i,i.prev,e)>=0:dn(i,e,i.prev)<0||dn(i,i.next,e)<0}function sM(i,e){let t=i,n=!1,s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function a0(i,e){let t=new Hu(i.i,i.x,i.y),n=new Hu(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function Rp(i,e,t,n){let s=new Hu(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function aa(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Hu(i,e,t){this.i=i,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function rM(i,e,t,n){let s=0;for(let r=e,o=t-n;r<t;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}var Ps=class i{static area(e){let t=e.length,n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],s=[],r=[];Ap(e),Cp(n,e);let o=e.length;t.forEach(Ap);for(let c=0;c<t.length;c++)s.push(o),o+=t[c].length,Cp(n,t[c]);let a=G2.triangulate(n,s);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}};function Ap(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function Cp(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}var an=class i extends Pt{constructor(e=new bt([new Ne(.5,.5),new Ne(-.5,.5),new Ne(-.5,-.5),new Ne(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,s=[],r=[];for(let a=0,c=e.length;a<c;a++){let l=e[a];o(l)}this.setAttribute("position",new lt(s,3)),this.setAttribute("uv",new lt(r,2)),this.computeVertexNormals();function o(a){let c=[],l=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,f=t.depth!==void 0?t.depth:1,p=t.bevelEnabled!==void 0?t.bevelEnabled:!0,d=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:d-.1,x=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3,u=t.extrudePath,E=t.UVGenerator!==void 0?t.UVGenerator:oM,y,M=!1,C,A,T,P;u&&(y=u.getSpacedPoints(h),M=!0,p=!1,C=u.computeFrenetFrames(h,!1),A=new S,T=new S,P=new S),p||(m=0,d=0,g=0,x=0);let W=a.extractPoints(l),v=W.shape,b=W.holes;if(!Ps.isClockWise(v)){v=v.reverse();for(let ne=0,I=b.length;ne<I;ne++){let ye=b[ne];Ps.isClockWise(ye)&&(b[ne]=ye.reverse())}}let k=Ps.triangulateShape(v,b),F=v;for(let ne=0,I=b.length;ne<I;ne++){let ye=b[ne];v=v.concat(ye)}function H(ne,I,ye){return I||console.error("THREE.ExtrudeGeometry: vec does not exist"),ne.clone().addScaledVector(I,ye)}let J=v.length,fe=k.length;function ie(ne,I,ye){let ee,ae,me,Ae=ne.x-I.x,Me=ne.y-I.y,U=ye.x-ne.x,w=ye.y-ne.y,K=Ae*Ae+Me*Me,ge=Ae*w-Me*U;if(Math.abs(ge)>Number.EPSILON){let be=Math.sqrt(K),Ee=Math.sqrt(U*U+w*w),Be=I.x-Me/be,Oe=I.y+Ae/be,Xe=ye.x-w/Ee,_t=ye.y+U/Ee,De=((Xe-Be)*w-(_t-Oe)*U)/(Ae*w-Me*U);ee=Be+Ae*De-ne.x,ae=Oe+Me*De-ne.y;let $=ee*ee+ae*ae;if($<=2)return new Ne(ee,ae);me=Math.sqrt($/2)}else{let be=!1;Ae>Number.EPSILON?U>Number.EPSILON&&(be=!0):Ae<-Number.EPSILON?U<-Number.EPSILON&&(be=!0):Math.sign(Me)===Math.sign(w)&&(be=!0),be?(ee=-Me,ae=Ae,me=Math.sqrt(K)):(ee=Ae,ae=Me,me=Math.sqrt(K/2))}return new Ne(ee/me,ae/me)}let pe=[];for(let ne=0,I=F.length,ye=I-1,ee=ne+1;ne<I;ne++,ye++,ee++)ye===I&&(ye=0),ee===I&&(ee=0),pe[ne]=ie(F[ne],F[ye],F[ee]);let N=[],j,se=pe.concat();for(let ne=0,I=b.length;ne<I;ne++){let ye=b[ne];j=[];for(let ee=0,ae=ye.length,me=ae-1,Ae=ee+1;ee<ae;ee++,me++,Ae++)me===ae&&(me=0),Ae===ae&&(Ae=0),j[ee]=ie(ye[ee],ye[me],ye[Ae]);N.push(j),se=se.concat(j)}for(let ne=0;ne<m;ne++){let I=ne/m,ye=d*Math.cos(I*Math.PI/2),ee=g*Math.sin(I*Math.PI/2)+x;for(let ae=0,me=F.length;ae<me;ae++){let Ae=H(F[ae],pe[ae],ee);V(Ae.x,Ae.y,-ye)}for(let ae=0,me=b.length;ae<me;ae++){let Ae=b[ae];j=N[ae];for(let Me=0,U=Ae.length;Me<U;Me++){let w=H(Ae[Me],j[Me],ee);V(w.x,w.y,-ye)}}}let te=g+x;for(let ne=0;ne<J;ne++){let I=p?H(v[ne],se[ne],te):v[ne];M?(T.copy(C.normals[0]).multiplyScalar(I.x),A.copy(C.binormals[0]).multiplyScalar(I.y),P.copy(y[0]).add(T).add(A),V(P.x,P.y,P.z)):V(I.x,I.y,0)}for(let ne=1;ne<=h;ne++)for(let I=0;I<J;I++){let ye=p?H(v[I],se[I],te):v[I];M?(T.copy(C.normals[ne]).multiplyScalar(ye.x),A.copy(C.binormals[ne]).multiplyScalar(ye.y),P.copy(y[ne]).add(T).add(A),V(P.x,P.y,P.z)):V(ye.x,ye.y,f/h*ne)}for(let ne=m-1;ne>=0;ne--){let I=ne/m,ye=d*Math.cos(I*Math.PI/2),ee=g*Math.sin(I*Math.PI/2)+x;for(let ae=0,me=F.length;ae<me;ae++){let Ae=H(F[ae],pe[ae],ee);V(Ae.x,Ae.y,f+ye)}for(let ae=0,me=b.length;ae<me;ae++){let Ae=b[ae];j=N[ae];for(let Me=0,U=Ae.length;Me<U;Me++){let w=H(Ae[Me],j[Me],ee);M?V(w.x,w.y+y[h-1].y,y[h-1].x+ye):V(w.x,w.y,f+ye)}}}O(),le();function O(){let ne=s.length/3;if(p){let I=0,ye=J*I;for(let ee=0;ee<fe;ee++){let ae=k[ee];Z(ae[2]+ye,ae[1]+ye,ae[0]+ye)}I=h+m*2,ye=J*I;for(let ee=0;ee<fe;ee++){let ae=k[ee];Z(ae[0]+ye,ae[1]+ye,ae[2]+ye)}}else{for(let I=0;I<fe;I++){let ye=k[I];Z(ye[2],ye[1],ye[0])}for(let I=0;I<fe;I++){let ye=k[I];Z(ye[0]+J*h,ye[1]+J*h,ye[2]+J*h)}}n.addGroup(ne,s.length/3-ne,0)}function le(){let ne=s.length/3,I=0;X(F,I),I+=F.length;for(let ye=0,ee=b.length;ye<ee;ye++){let ae=b[ye];X(ae,I),I+=ae.length}n.addGroup(ne,s.length/3-ne,1)}function X(ne,I){let ye=ne.length;for(;--ye>=0;){let ee=ye,ae=ye-1;ae<0&&(ae=ne.length-1);for(let me=0,Ae=h+m*2;me<Ae;me++){let Me=J*me,U=J*(me+1),w=I+ee+Me,K=I+ae+Me,ge=I+ae+U,be=I+ee+U;xe(w,K,ge,be)}}}function V(ne,I,ye){c.push(ne),c.push(I),c.push(ye)}function Z(ne,I,ye){Ce(ne),Ce(I),Ce(ye);let ee=s.length/3,ae=E.generateTopUV(n,s,ee-3,ee-2,ee-1);_e(ae[0]),_e(ae[1]),_e(ae[2])}function xe(ne,I,ye,ee){Ce(ne),Ce(I),Ce(ee),Ce(I),Ce(ye),Ce(ee);let ae=s.length/3,me=E.generateSideWallUV(n,s,ae-6,ae-3,ae-2,ae-1);_e(me[0]),_e(me[1]),_e(me[3]),_e(me[1]),_e(me[2]),_e(me[3])}function Ce(ne){s.push(c[ne*3+0]),s.push(c[ne*3+1]),s.push(c[ne*3+2])}function _e(ne){r.push(ne.x),r.push(ne.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return aM(t,n,e)}static fromJSON(e,t){let n=[];for(let r=0,o=e.shapes.length;r<o;r++){let a=t[e.shapes[r]];n.push(a)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new Wc[s.type]().fromJSON(s)),new i(n,e.options)}},oM={generateTopUV:function(i,e,t,n,s){let r=e[t*3],o=e[t*3+1],a=e[n*3],c=e[n*3+1],l=e[s*3],h=e[s*3+1];return[new Ne(r,o),new Ne(a,c),new Ne(l,h)]},generateSideWallUV:function(i,e,t,n,s,r){let o=e[t*3],a=e[t*3+1],c=e[t*3+2],l=e[n*3],h=e[n*3+1],f=e[n*3+2],p=e[s*3],d=e[s*3+1],g=e[s*3+2],x=e[r*3],m=e[r*3+1],u=e[r*3+2];return Math.abs(a-h)<Math.abs(o-l)?[new Ne(o,1-c),new Ne(l,1-f),new Ne(p,1-g),new Ne(x,1-u)]:[new Ne(a,1-c),new Ne(h,1-f),new Ne(d,1-g),new Ne(m,1-u)]}};function aM(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];t.shapes.push(r.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var Xc=class i extends Du{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}};var Ns=class i extends Pt{constructor(e=.5,t=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);let a=[],c=[],l=[],h=[],f=e,p=(t-e)/s,d=new S,g=new Ne;for(let x=0;x<=s;x++){for(let m=0;m<=n;m++){let u=r+m/n*o;d.x=f*Math.cos(u),d.y=f*Math.sin(u),c.push(d.x,d.y,d.z),l.push(0,0,1),g.x=(d.x/t+1)/2,g.y=(d.y/t+1)/2,h.push(g.x,g.y)}f+=p}for(let x=0;x<s;x++){let m=x*(n+1);for(let u=0;u<n;u++){let E=u+m,y=E,M=E+n+1,C=E+n+2,A=E+1;a.push(y,M,A),a.push(M,C,A)}}this.setIndex(a),this.setAttribute("position",new lt(c,3)),this.setAttribute("normal",new lt(l,3)),this.setAttribute("uv",new lt(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}},Oi=class i extends Pt{constructor(e=new bt([new Ne(0,.5),new Ne(-.5,-.5),new Ne(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let n=[],s=[],r=[],o=[],a=0,c=0;if(Array.isArray(e)===!1)l(e);else for(let h=0;h<e.length;h++)l(e[h]),this.addGroup(a,c,h),a+=c,c=0;this.setIndex(n),this.setAttribute("position",new lt(s,3)),this.setAttribute("normal",new lt(r,3)),this.setAttribute("uv",new lt(o,2));function l(h){let f=s.length/3,p=h.extractPoints(t),d=p.shape,g=p.holes;Ps.isClockWise(d)===!1&&(d=d.reverse());for(let m=0,u=g.length;m<u;m++){let E=g[m];Ps.isClockWise(E)===!0&&(g[m]=E.reverse())}let x=Ps.triangulateShape(d,g);for(let m=0,u=g.length;m<u;m++){let E=g[m];d=d.concat(E)}for(let m=0,u=d.length;m<u;m++){let E=d[m];s.push(E.x,E.y,0),r.push(0,0,1),o.push(E.x,E.y)}for(let m=0,u=x.length;m<u;m++){let E=x[m],y=E[0]+f,M=E[1]+f,C=E[2]+f;n.push(y,M,C),c+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return cM(t,e)}static fromJSON(e,t){let n=[];for(let s=0,r=e.shapes.length;s<r;s++){let o=t[e.shapes[s]];n.push(o)}return new i(n,e.curveSegments)}};function cM(i,e){if(e.shapes=[],Array.isArray(i))for(let t=0,n=i.length;t<n;t++){let s=i[t];e.shapes.push(s.uuid)}else e.shapes.push(i.uuid);return e}var $t=class i extends Pt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let c=Math.min(o+a,Math.PI),l=0,h=[],f=new S,p=new S,d=[],g=[],x=[],m=[];for(let u=0;u<=n;u++){let E=[],y=u/n,M=0;u===0&&o===0?M=.5/t:u===n&&c===Math.PI&&(M=-.5/t);for(let C=0;C<=t;C++){let A=C/t;f.x=-e*Math.cos(s+A*r)*Math.sin(o+y*a),f.y=e*Math.cos(o+y*a),f.z=e*Math.sin(s+A*r)*Math.sin(o+y*a),g.push(f.x,f.y,f.z),p.copy(f).normalize(),x.push(p.x,p.y,p.z),m.push(A+M,1-y),E.push(l++)}h.push(E)}for(let u=0;u<n;u++)for(let E=0;E<t;E++){let y=h[u][E+1],M=h[u][E],C=h[u+1][E],A=h[u+1][E+1];(u!==0||o>0)&&d.push(y,M,A),(u!==n-1||c<Math.PI)&&d.push(M,C,A)}this.setIndex(d),this.setAttribute("position",new lt(g,3)),this.setAttribute("normal",new lt(x,3)),this.setAttribute("uv",new lt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Qt=class i extends Pt{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);let o=[],a=[],c=[],l=[],h=new S,f=new S,p=new S;for(let d=0;d<=n;d++)for(let g=0;g<=s;g++){let x=g/s*r,m=d/n*Math.PI*2;f.x=(e+t*Math.cos(m))*Math.cos(x),f.y=(e+t*Math.cos(m))*Math.sin(x),f.z=t*Math.sin(m),a.push(f.x,f.y,f.z),h.x=e*Math.cos(x),h.y=e*Math.sin(x),p.subVectors(f,h).normalize(),c.push(p.x,p.y,p.z),l.push(g/s),l.push(d/n)}for(let d=1;d<=n;d++)for(let g=1;g<=s;g++){let x=(s+1)*d+g-1,m=(s+1)*(d-1)+g-1,u=(s+1)*(d-1)+g,E=(s+1)*d+g;o.push(x,m,E),o.push(m,u,E)}this.setIndex(o),this.setAttribute("position",new lt(a,3)),this.setAttribute("normal",new lt(c,3)),this.setAttribute("uv",new lt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}};var pn=class i extends Pt{constructor(e=new Vc(new S(-1,-1,0),new S(-1,1,0),new S(1,1,0)),t=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:s,closed:r};let o=e.computeFrenetFrames(t,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new S,c=new S,l=new Ne,h=new S,f=[],p=[],d=[],g=[];x(),this.setIndex(g),this.setAttribute("position",new lt(f,3)),this.setAttribute("normal",new lt(p,3)),this.setAttribute("uv",new lt(d,2));function x(){for(let y=0;y<t;y++)m(y);m(r===!1?t:0),E(),u()}function m(y){h=e.getPointAt(y/t,h);let M=o.normals[y],C=o.binormals[y];for(let A=0;A<=s;A++){let T=A/s*Math.PI*2,P=Math.sin(T),W=-Math.cos(T);c.x=W*M.x+P*C.x,c.y=W*M.y+P*C.y,c.z=W*M.z+P*C.z,c.normalize(),p.push(c.x,c.y,c.z),a.x=h.x+n*c.x,a.y=h.y+n*c.y,a.z=h.z+n*c.z,f.push(a.x,a.y,a.z)}}function u(){for(let y=1;y<=t;y++)for(let M=1;M<=s;M++){let C=(s+1)*(y-1)+(M-1),A=(s+1)*y+(M-1),T=(s+1)*y+M,P=(s+1)*(y-1)+M;g.push(C,A,P),g.push(A,T,P)}}function E(){for(let y=0;y<=t;y++)for(let M=0;M<=s;M++)l.x=y/t,l.y=M/s,d.push(l.x,l.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new i(new Wc[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}};var ze=class extends Ds{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new dt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new dt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=$p,this.normalScale=new Ne(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ii,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Wt=class extends ze{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ne(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Sn(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new dt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new dt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new dt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};function fc(i,e,t){return!i||!t&&i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function lM(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var no=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=t[++n],e<s)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(n=2,r=a);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Nu=class extends no{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Rf,endingEnd:Rf}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],c=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Af:r=e,a=2*t-n;break;case Cf:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Af:o=e,c=2*n-t;break;case Cf:o=1,c=n+s[1]-s[0];break;default:o=e-1,c=t}let l=(n-t)*.5,h=this.valueSize;this._weightPrev=l/(t-a),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=this._offsetPrev,f=this._offsetNext,p=this._weightPrev,d=this._weightNext,g=(n-t)/(s-t),x=g*g,m=x*g,u=-p*m+2*p*x-p*g,E=(1+p)*m+(-1.5-2*p)*x+(-.5+p)*g+1,y=(-1-d)*m+(1.5+d)*x+.5*g,M=d*m-d*x;for(let C=0;C!==a;++C)r[C]=u*o[h+C]+E*o[l+C]+y*o[c+C]+M*o[f+C];return r}},Fu=class extends no{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=(n-t)/(s-t),f=1-h;for(let p=0;p!==a;++p)r[p]=o[l+p]*f+o[c+p]*h;return r}},Ou=class extends no{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},zi=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=fc(t,this.TimeBufferType),this.values=fc(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:fc(e.times,Array),values:fc(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Ou(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Fu(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Nu(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Mc:t=this.InterpolantFactoryMethodDiscrete;break;case fu:t=this.InterpolantFactoryMethodLinear;break;case Kl:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Mc;case this.InterpolantFactoryMethodLinear:return fu;case this.InterpolantFactoryMethodSmooth:return Kl}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let c=n[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),e=!1;break}o=c}if(s!==void 0&&lM(s))for(let a=0,c=s.length;a!==c;++a){let l=s[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Kl,r=e.length-1,o=1;for(let a=1;a<r;++a){let c=!1,l=e[a],h=e[a+1];if(l!==h&&(a!==1||l!==e[0]))if(s)c=!0;else{let f=a*n,p=f-n,d=f+n;for(let g=0;g!==n;++g){let x=t[f+g];if(x!==t[p+g]||x!==t[d+g]){c=!0;break}}}if(c){if(a!==o){e[o]=e[a];let f=a*n,p=o*n;for(let d=0;d!==n;++d)t[p+d]=t[f+d]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,c=o*n,l=0;l!==n;++l)t[c+l]=t[a+l];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};zi.prototype.TimeBufferType=Float32Array;zi.prototype.ValueBufferType=Float32Array;zi.prototype.DefaultInterpolation=fu;var hr=class extends zi{constructor(e,t,n){super(e,t,n)}};hr.prototype.ValueTypeName="bool";hr.prototype.ValueBufferType=Array;hr.prototype.DefaultInterpolation=Mc;hr.prototype.InterpolantFactoryMethodLinear=void 0;hr.prototype.InterpolantFactoryMethodSmooth=void 0;var zu=class extends zi{};zu.prototype.ValueTypeName="color";var Bu=class extends zi{};Bu.prototype.ValueTypeName="number";var ku=class extends no{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-t)/(s-t),l=e*a;for(let h=l+a;l!==h;l+=4)mt.slerpFlat(r,0,o,l-a,o,l,c);return r}},qc=class extends zi{InterpolantFactoryMethodLinear(e){return new ku(this.times,this.values,this.getValueSize(),e)}};qc.prototype.ValueTypeName="quaternion";qc.prototype.InterpolantFactoryMethodSmooth=void 0;var ur=class extends zi{constructor(e,t,n){super(e,t,n)}};ur.prototype.ValueTypeName="string";ur.prototype.ValueBufferType=Array;ur.prototype.DefaultInterpolation=Mc;ur.prototype.InterpolantFactoryMethodLinear=void 0;ur.prototype.InterpolantFactoryMethodSmooth=void 0;var Vu=class extends zi{};Vu.prototype.ValueTypeName="vector";var Pp={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}},Gu=class{constructor(e,t,n){let s=this,r=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,f){return l.push(h,f),this},this.removeHandler=function(h){let f=l.indexOf(h);return f!==-1&&l.splice(f,2),this},this.getHandler=function(h){for(let f=0,p=l.length;f<p;f+=2){let d=l[f],g=l[f+1];if(d.global&&(d.lastIndex=0),d.test(h))return g}return null}}},hM=new Gu,ca=class{constructor(e){this.manager=e!==void 0?e:hM,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};ca.DEFAULT_MATERIAL_NAME="__DEFAULT";var Wu=class extends ca{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=Pp.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;let a=Qo("img");function c(){h(),Pp.add(e,this),t&&t(this),r.manager.itemEnd(e)}function l(f){h(),s&&s(f),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}};var io=class extends ca{constructor(e){super(e)}load(e,t,n,s){let r=new Kn,o=new Wu(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}},so=class extends Ft{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new dt(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},Yc=class extends so{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ft.DEFAULT_UP),this.updateMatrix(),this.groundColor=new dt(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},Ah=new Tt,Ip=new S,Lp=new S,la=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ne(512,512),this.map=null,this.mapPass=null,this.matrix=new Tt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ta,this._frameExtents=new Ne(1,1),this._viewportCount=1,this._viewports=[new Kt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;Ip.setFromMatrixPosition(e.matrixWorld),t.position.copy(Ip),Lp.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Lp),t.updateMatrixWorld(),Ah.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ah),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ah)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Xu=class extends la{constructor(){super(new Nn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){let t=this.camera,n=Qr*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},ro=class extends so{constructor(e,t,n=0,s=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Ft.DEFAULT_UP),this.updateMatrix(),this.target=new Ft,this.distance=n,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new Xu}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},Dp=new Tt,Go=new S,Ch=new S,qu=class extends la{constructor(){super(new Nn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ne(4,2),this._viewportCount=6,this._viewports=[new Kt(2,1,1,1),new Kt(0,1,1,1),new Kt(3,1,1,1),new Kt(1,1,1,1),new Kt(3,0,1,1),new Kt(1,0,1,1)],this._cubeDirections=[new S(1,0,0),new S(-1,0,0),new S(0,0,1),new S(0,0,-1),new S(0,1,0),new S(0,-1,0)],this._cubeUps=[new S(0,1,0),new S(0,1,0),new S(0,1,0),new S(0,1,0),new S(0,0,1),new S(0,0,-1)]}updateMatrices(e,t=0){let n=this.camera,s=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Go.setFromMatrixPosition(e.matrixWorld),n.position.copy(Go),Ch.copy(n.position),Ch.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Ch),n.updateMatrixWorld(),s.makeTranslation(-Go.x,-Go.y,-Go.z),Dp.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Dp)}},Fn=class extends so{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new qu}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},Yu=class extends la{constructor(){super(new Lc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Zc=class extends so{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ft.DEFAULT_UP),this.updateMatrix(),this.target=new Ft,this.shadow=new Yu}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var $c=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Up(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=Up();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};function Up(){return performance.now()}var hd="\\[\\]\\.:\\/",uM=new RegExp("["+hd+"]","g"),ud="[^"+hd+"]",dM="[^"+hd.replace("\\.","")+"]",fM=/((?:WC+[\/:])*)/.source.replace("WC",ud),pM=/(WCOD+)?/.source.replace("WCOD",dM),mM=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",ud),gM=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",ud),xM=new RegExp("^"+fM+pM+mM+gM+"$"),yM=["material","materials","bones","map"],Zu=class{constructor(e,t,n){let s=n||un.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},un=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(uM,"")}static parseTrackName(e){let t=xM.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);yM.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let c=n(a.children);if(c)return c}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let o=e[s];if(o===void 0){let l=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};un.Composite=Zu;un.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};un.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};un.prototype.GetterByBindingType=[un.prototype._getValue_direct,un.prototype._getValue_array,un.prototype._getValue_arrayElement,un.prototype._getValue_toArray];un.prototype.SetterByBindingTypeAndVersioning=[[un.prototype._setValue_direct,un.prototype._setValue_direct_setNeedsUpdate,un.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[un.prototype._setValue_array,un.prototype._setValue_array_setNeedsUpdate,un.prototype._setValue_array_setMatrixWorldNeedsUpdate],[un.prototype._setValue_arrayElement,un.prototype._setValue_arrayElement_setNeedsUpdate,un.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[un.prototype._setValue_fromArray,un.prototype._setValue_fromArray_setNeedsUpdate,un.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var mE=new Float32Array(1);var Hp=new Tt,ha=class{constructor(e,t,n=0,s=1/0){this.ray=new jo(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new ea,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Hp.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Hp),this}intersectObject(e,t=!0,n=[]){return $u(e,this,n,t),n.sort(Np),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)$u(e[s],this,n,t);return n.sort(Np),n}};function Np(i,e){return i.distance-e.distance}function $u(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let o=0,a=r.length;o<a;o++)$u(r[o],e,t,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"169"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="169");function vM({coarse:i=!1,width:e=1280,cores:t=8,memory:n=8,dpr:s=1}={}){let r=i||e<700||t<=4||n<=4;return Object.freeze({mobile:r,pixelRatio:Math.min(s,r?1.25:1.5),minPixelRatio:Math.min(s,r?.75:1),maxFps:r?30:1/0,shadowSize:r?1024:1536,shadowHz:r?12:24,textureSize:r?256:512,chainSegments:r?16:24,chainRadialSegments:r?4:5,effectsHz:r?24:40,targetFrameMs:r?33.3:22})}var _M=typeof window>"u"?{}:{coarse:matchMedia("(pointer:coarse)").matches,width:innerWidth,cores:navigator.hardwareConcurrency||8,memory:navigator.deviceMemory||8,dpr:devicePixelRatio||1},Dt=vM(_M);function c0(i,{exclude:e=[]}={}){let t=new Set(e),n=new Map,s=new Set,r=new S,o=new S,a=new vt;i.updateWorldMatrix(!0,!0);let c=i.matrixWorld.clone().invert();function l(d){if(!(!d.visible||t.has(d)||d.userData.chargingAction||d.userData.keyAction||Number.isInteger(d.userData.hoistIndex)||Number.isInteger(d.userData.valveIndex))){if(d.isMesh&&!d.isInstancedMesh&&!d.isSkinnedMesh&&!d.children.length){let g=d.geometry,x=d.material,m=g.attributes;if(x&&!Array.isArray(x)&&!x.transparent&&!g.morphAttributes.position&&g.drawRange.start===0&&g.drawRange.count===1/0&&m.position&&Object.keys(m).every(u=>["position","normal","uv"].includes(u))){d.getWorldPosition(r);let u=`${Math.floor(r.x/3)},${Math.floor(r.z/3)}`,E=[x.uuid,d.castShadow,d.receiveShadow,d.renderOrder,Object.keys(m).sort().join(","),u].join("|");n.has(E)||n.set(E,[]),n.get(E).push(d)}}for(let g of d.children)l(g)}}l(i);let h=0,f=0;for(let d of n.values()){if(d.length<3)continue;let g=Object.keys(d[0].geometry.attributes),x=d.reduce((P,W)=>P+W.geometry.attributes.position.count,0),m=d.reduce((P,W)=>P+(W.geometry.index?.count||W.geometry.attributes.position.count),0),u=new Pt,E={};for(let P of g){let W=d[0].geometry.attributes[P].itemSize;E[P]=new Float32Array(x*W),u.setAttribute(P,new fn(E[P],W))}let y=new Uint32Array(m),M=0,C=0;for(let P of d){let W=P.geometry,v=new Tt().multiplyMatrices(c,P.matrixWorld);a.getNormalMatrix(v);for(let B=0;B<W.attributes.position.count;B++)r.fromBufferAttribute(W.attributes.position,B).applyMatrix4(v),r.toArray(E.position,(M+B)*3),E.normal&&(o.fromBufferAttribute(W.attributes.normal,B).applyMatrix3(a).normalize(),o.toArray(E.normal,(M+B)*3)),E.uv&&(E.uv[(M+B)*2]=W.attributes.uv.getX(B),E.uv[(M+B)*2+1]=W.attributes.uv.getY(B));let b=W.index?.count||W.attributes.position.count;for(let B=0;B<b;B++)y[C++]=M+(W.index?W.index.getX(B):B);if(v.determinant()<0)for(let B=C-b;B<C;B+=3){let k=y[B+1];y[B+1]=y[B+2],y[B+2]=k}M+=W.attributes.position.count,s.add(W),P.removeFromParent(),h++}u.setIndex(new fn(y,1)),u.computeBoundingBox(),u.computeBoundingSphere();let A=d[0],T=new ht(u,A.material);T.name="Batched static office scenery",T.castShadow=A.castShadow,T.receiveShadow=A.receiveShadow,T.renderOrder=A.renderOrder,T.matrixAutoUpdate=!1,i.add(T),f++}let p=new Set;i.traverse(d=>{d.geometry&&p.add(d.geometry)});for(let d of s)p.has(d)||d.dispose();return{removed:h,batches:f}}function l0(i){let e=document.createElement("canvas");e.width=256,e.height=128;let t=e.getContext("2d"),n=t.createLinearGradient(0,0,0,128);n.addColorStop(0,"#111812"),n.addColorStop(.48,"#3a4636"),n.addColorStop(1,"#171d12"),t.fillStyle=n,t.fillRect(0,0,256,128),t.fillStyle="#a9b7a3",t.fillRect(78,19,72,3),t.fillStyle="#596e68",t.fillRect(190,38,29,25),t.fillStyle="#435827",t.fillRect(25,64,34,15);let s=new Ot(e);s.colorSpace=pt,s.mapping=Ko;let r=new eo(i),o=r.fromEquirectangular(s);return r.dispose(),s.dispose(),o}function h0(i,e){if(!new URLSearchParams(location.search).has("profile"))return{mark(){},frame(){}};let t=document.createElement("output");t.id="performance-report",t.hidden=!0,document.body.append(t);let n=performance.now(),s={},r=[],o=0,a=0,c=0;function l(h){s[h]=Math.round(performance.now()-n)}return{mark:l,frame(h){let f=performance.now();if(o||(o=f-n),a&&(r.push(f-a),r.length>90&&r.shift()),a=f,c++,c===1||c%30===0){let p=0;e.traverse(d=>{d.isMesh&&p++}),t.textContent=JSON.stringify({firstFrameMs:Math.round(o),stages:s,frameMs:r.length?Math.round(r.reduce((d,g)=>d+g,0)/r.length*10)/10:0,renderCpuMs:Math.round((f-h)*10)/10,frames:c,calls:i.info.render.calls,triangles:i.info.render.triangles,geometries:i.info.memory.geometries,textures:i.info.memory.textures,meshes:p,pixelRatio:i.getPixelRatio()})}}}}function u0(i){let n=[],s=new Map,r=0,o=new wt(.735,.41);function a(){let f=document.createElement("canvas");return f.width=1024,f.height=576,[f,f.getContext("2d")]}function c(f,p=!0){let d=new Ot(f);return p&&(d.colorSpace=pt),d.anisotropy=Math.min(8,i.capabilities.getMaxAnisotropy()),d}function l(f,p){let d=13817+p*7319+(f==="hole"?20001:f==="live"?481:0),g=()=>(d=d*1664525+1013904223>>>0,d/4294967296),x=(N,j)=>N+(j-N)*g(),[m,u]=a(),[E,y]=a(),[M,C]=a(),[A,T]=a();u.fillStyle="#080d10",u.fillRect(0,0,1024,576),C.fillStyle="#545454",C.fillRect(0,0,1024,576),T.fillStyle="#777",T.fillRect(0,0,1024,576);let P=f==="live"||f==="cracked"&&p%2===0,W=u.createLinearGradient(0,0,1024,576);if(W.addColorStop(0,"#1b262a"),W.addColorStop(.45,"#0b1217"),W.addColorStop(1,"#040709"),u.fillStyle=W,u.fillRect(0,0,1024,576),P){u.fillStyle="#253438",u.fillRect(0,0,1024,27),u.fillRect(0,27,150,576);for(let N=0;N<28;N++){let j=174;for(let se=0;se<x(3,10);se++){u.fillStyle=["#365b51","#47615d","#354847"][Math.floor(g()*3)];let te=x(9,93);u.fillRect(j,53+N*17,te,2),j+=te+x(5,15)}}for(let N=0;N<576;N+=3)u.fillStyle="rgba(0,0,0,.18)",u.fillRect(0,N,1024,1)}let v={x:x(1024*.2,1024*.78),y:x(576*.22,576*.78)};function b(N,j,se,te,O=0,le=0){j.strokeStyle=se,j.lineWidth=te,j.beginPath(),N.forEach(([X,V],Z)=>Z?j.lineTo(X+O,V+le):j.moveTo(X+O,V+le)),j.stroke()}function B(N,j=1){b(N,y,"rgba(0,3,6,.86)",j*1.9),b(N,y,`rgba(185,212,216,${x(.45,.9)})`,j*.7,-.7,.35),g()<.3&&b(N,y,"rgba(113,153,163,.35)",.5,.75,-.35),b(N,T,"#242424",j*1.6),b(N,T,"#bfbfbf",j*.7,-.7,.35),b(N,C,"#b9b9b9",j*1.5)}let k=[];if(f!=="live"){let te=function(X,V,Z=1){u.fillStyle=V,u.beginPath(),X.forEach(([xe,Ce],_e)=>{xe=v.x+(xe-v.x)*Z,Ce=v.y+(Ce-v.y)*Z,_e?u.lineTo(xe,Ce):u.moveTo(xe,Ce)}),u.closePath(),u.fill()},N=[],j=f==="hole"?x(68,107):x(42,78),se=j*x(.42,.75);for(let X=0;X<72;X++){let V=X/72*Math.PI*2,Z=1+.13*Math.sin(V*5+p)+.07*Math.sin(V*13);N.push([v.x+Math.cos(V)*j*Z,v.y+Math.sin(V)*se*Z])}for(let[X,V]of[[1.18,"rgba(56,39,73,.46)"],[1.1,"rgba(36,72,74,.55)"],[1.05,"#151c2a"],[1,"#010204"]])te(N,V,X);if(P||f==="hole"&&p===1){for(let Z=0;Z<61;Z++){let xe=v.x+x(-j*1.7,j*1.7),Ce=Z%3?0:v.y,_e=Z%3?v.y:576;u.fillStyle=["rgba(85,129,115,.65)","rgba(130,62,94,.6)","rgba(70,103,146,.60)","rgba(172,177,161,.48)"][Z%4],u.fillRect(xe,Ce,x(.4,2),_e-Ce)}let X=v.x+j*.4,V=x(35,108);u.fillStyle="rgba(130,151,153,.23)",u.fillRect(X,0,V,v.y);for(let Z=0;Z<v.y;Z+=3)u.fillStyle=`rgba(15,28,32,${x(.15,.65)})`,u.fillRect(X,Z,V,1);for(let Z=0;Z<9;Z++)u.fillStyle=Z%3?"rgba(2,5,8,.85)":"rgba(129,156,153,.45)",u.fillRect(0,v.y+x(-15,18),1024,x(.5,2.4));te(N,"#010204",.98)}let O=12+p%4,le=Array.from({length:O},(X,V)=>V/O*Math.PI*2+x(-.11,.11));for(let X of le){let V=[[v.x+Math.cos(X)*3,v.y+Math.sin(X)*3]],Z=x(7,13);for(;Z<1300;){let xe=x(-.021,.021),Ce=v.x+Math.cos(X+xe)*Z,_e=v.y+Math.sin(X+xe)*Z;if(V.push([Ce,_e]),Z+=x(16,47),Ce<0||Ce>1024||_e<0||_e>576)break}B(V,x(.55,1.2));for(let xe=2;xe<V.length-1;xe++)if(g()<.33){let[Ce,_e]=V[xe],ne=g()<.5?-1:1,I=X+ne*x(.18,.65),ye=x(28,145),ee=[[Ce,_e]];for(let ae=1;ae<=5;ae++)ee.push([Ce+Math.cos(I)*ye*ae/5+x(-3,3),_e+Math.sin(I)*ye*ae/5+x(-3,3)]);B(ee,x(.3,.64))}}for(let X of[18,35,61,101,155])for(let V=0;V<O;V++){if(g()<.28||X>70&&g()<.45)continue;let Z=le[V],xe=V===O-1?le[0]+Math.PI*2:le[V+1],Ce=X*x(.8,1.12),_e=[];for(let ne=0;ne<=4;ne++){let I=Z+(xe-Z)*ne/4;_e.push([v.x+Math.cos(I)*Ce+x(-3,3),v.y+Math.sin(I)*Ce*.84+x(-2,2)])}B(_e,x(.35,.75))}for(let X=0;X<90;X++){let V=g()*Math.PI*2,Z=x(2,25),xe=v.x+Math.cos(V)*Z,Ce=v.y+Math.sin(V)*Z*.7;B([[xe,Ce],[xe+x(-6,6),Ce+x(-5,5)]],x(.3,.8))}if(f==="hole")for(let X=0;X<7;X++){let V=X/7*Math.PI*2,Z=x(8,26),xe=v.x+Math.cos(V)*Z,Ce=v.y+Math.sin(V)*Z*.7,_e=[[xe,Ce],[xe+x(4,11),Ce+x(-6,2)],[xe+x(-3,5),Ce+x(4,13)]];k.push(_e),u.fillStyle="#000102",u.beginPath(),_e.forEach(([ne,I],ye)=>ye?u.lineTo(ne,I):u.moveTo(ne,I)),u.closePath(),u.fill(),B([..._e,_e[0]],1)}}for(let N=0;N<35;N++){let j=g()*1024,se=g()*576,te=x(20,115),O=C.createRadialGradient(j,se,0,j,se,te);O.addColorStop(0,"rgba(205,205,205,.20)"),O.addColorStop(1,"rgba(160,160,160,0)"),C.fillStyle=O,C.fillRect(j-te,se-te,te*2,te*2)}for(let N=0;N<3800;N++){let j=g()*1024,se=g()*576;C.fillStyle=`rgba(230,230,230,${x(.06,.4)})`,C.fillRect(j,se,x(.4,1.3),x(.4,1.1)),N%9===0&&(y.fillStyle="rgba(135,149,146,.13)",y.fillRect(j,se,.65,.65))}for(let N=0;N<70;N++){let j=g()*1024,se=g()*576;b([[j,se],[j+x(3,31),se+x(-8,8)]],C,"rgba(189,189,189,.35)",.7)}y.strokeStyle="rgba(89,93,83,.50)",y.lineWidth=2.4,y.strokeRect(1,1,1022,574);let F=c(m),H=c(M,!1),J=c(A,!1),fe=new ze({map:F,roughness:.62,metalness:0,emissiveMap:F,emissive:16777215,emissiveIntensity:f==="live"?.52:P?.28:.025}),ie=new Wt({color:10137267,metalness:.08,roughness:.36,roughnessMap:H,bumpMap:J,bumpScale:38e-5,transparent:!0,opacity:.27,depthWrite:!1,clearcoat:1,clearcoatRoughness:.19,clearcoatRoughnessMap:H,ior:1.52,envMapIntensity:.85,side:Ji});n.push(ie);let pe=new ze({map:c(E),transparent:!0,depthWrite:!1,roughness:.38,metalness:.12,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1});return{lcdMaterial:fe,glass:ie,cracksMaterial:pe,holes:k}}function h(f,p){let d=r++%3,g=`${p}-${d}`;s.has(g)||s.set(g,l(p,d));let x=s.get(g);for(let[m,u,E]of[[x.lcdMaterial,.019,"Damaged liquid-crystal panel"],[x.glass,.0205,"Reflective laminated screen glass"],[x.cracksMaterial,.0213,"Fine branching glass fractures"]]){let y=new ht(o,m);y.position.set(0,.381,u),y.name=E,y.castShadow=!1,y.receiveShadow=!0,f.add(y)}for(let m of x.holes){let u=m.flatMap(([M,C],A)=>[(M/1024-.5)*.735,(.5-C/576)*.41+.381,.0215+(A===1?.0018:0)]),E=new Pt;E.setAttribute("position",new lt(u,3)),E.computeVertexNormals();let y=new ht(E,x.glass);y.castShadow=!1,f.add(y)}}return{add:h,setEnvironment(f){for(let p of n)p.envMap=f,p.needsUpdate=!0}}}var nl=(i,e=0,t=1)=>Math.min(t,Math.max(e,i)),fs=i=>(i=nl(i),i*i*(3-2*i));function el(i,e){let t=Math.imul(i,374761393)+Math.imul(e,668265263);return t=Math.imul(t^t>>>13,1274126177),((t^t>>>16)>>>0)/4294967295}function fi(i,e){let t=Math.floor(i),n=Math.floor(e),s=fs(i-t),r=fs(e-n);return Ze.lerp(Ze.lerp(el(t,n),el(t+1,n),s),Ze.lerp(el(t,n+1),el(t+1,n+1),s),r)}function tl(i,e){return fi(i*5,e*5)*.48+fi(i*17+3,e*17)*.29+fi(i*61,e*61+9)*.15+fi(i*187,e*187)*.08}function ao(i,e=Dt.textureSize,t=!1){let n=new Uint8Array(e*e*4);for(let r=0;r<e;r++)for(let o=0;o<e;o++){let a=i(o/e,r/e,o,r),c=(r*e+o)*4;for(let l=0;l<4;l++)n[c+l]=Math.round(nl(a[l]??1)*255)}let s=new ji(n,e,e,di);return s.wrapS=s.wrapT=rr,s.magFilter=gn,s.minFilter=Fi,s.generateMipmaps=!0,s.anisotropy=4,t&&(s.colorSpace=pt),s.needsUpdate=!0,s}var dd;function si(i=16777215){if(!dd){let e=(c,l)=>{let h=tl(c,l),f=fi(c*48,l*3),p=fs((h+f*.13-.51)*9),d=fs((fi(c*150,l*150)-.64)*8);return{n:h,rust:p,pit:d}},t=new Float32Array(Dt.textureSize*Dt.textureSize*3),n=ao((c,l,h,f)=>{let{n:p,rust:d,pit:g}=e(c,l),x=Math.pow(fi(c*4,l*260),18)*.24,m=(f*Dt.textureSize+h)*3;return t[m]=.45+d*.21+p*.18-g*.25,t[m+1]=.35+d*.57+g*.07,t[m+2]=.88-d*.86,[.39+p*.34,.42+p*.34,.39+p*.32].map((u,E)=>Ze.lerp(u,[.35+p*.3,.12+p*.19,.045+p*.1][E],d)-g*.1+x)},Dt.textureSize,!0),s=ao((c,l,h,f)=>{let p=(f*Dt.textureSize+h)*3;return[t[p],t[p+1],t[p+2]]});dd={map:n,roughnessMap:s,metalnessMap:s,bumpMap:s}}return new ze({color:i,...dd,roughness:1,metalness:1,bumpScale:.0035,envMapIntensity:.7})}function d0(){let i=(x,m)=>{let u=tl(x+3,m+2),E=fi(x*70,m*2.3)*fi(x*19,m*6),y=fi(x*170,m*190),M=(1-fs(m/.23))*.78,C=fs((m-.86)/.14)*.34,A=Math.exp(-(((m-.844)*75)**2))*(.2+fi(x*38,1)*.8),T=nl(M+C+A*.52+fs((u-.49)*7)*.45+E*.2),P=fs((u-.37)*4)*.7;return{dirt:T,fog:P,runs:E,scale:y,tide:A}},e=new Float32Array(Dt.textureSize*Dt.textureSize*2),t=ao((x,m,u,E)=>{let{dirt:y,fog:M,runs:C,scale:A,tide:T}=i(x,m),P=Math.pow(fi(x*105,m*69),12)*.65,W=(E*Dt.textureSize+u)*2;return e[W]=.4+y*.1+C*.09+A*.025+P,e[W+1]=.08+M*.36+y*.43+C*.1,[.59-y*.3,.63-y*.3,.48-y*.3,nl(.03+M*.23+y*.55+T*.12+A*.025)]},Dt.textureSize,!0),n=ao((x,m,u,E)=>{let y=(E*Dt.textureSize+u)*2;return[e[y],e[y+1],0]}),s=n,r=new Wt({color:14542029,roughness:.7,roughnessMap:s,metalness:0,transparent:!0,opacity:.17,depthWrite:!1,clearcoat:1,clearcoatRoughness:.14,bumpMap:n,bumpScale:.003,side:Lt,envMapIntensity:.85}),o=new ze({map:t,roughness:.9,bumpMap:n,bumpScale:.002,transparent:!0,depthWrite:!1,side:Lt}),a=ao((x,m)=>{let u=tl(x+11,m+7),E=fi(x*12,m*9);return[.11+u*.19,.24+u*.35,.026+E*.08]},Dt.textureSize/2,!0),c=ao((x,m)=>{let u=tl(x+5,m+3),E=fs(m);return[.1+u*.12+E*.06,.17+u*.22+E*.12,.025+u*.055,.93-E*.43]},Dt.textureSize/2,!0),l=new Wt({map:c,color:13228945,roughness:.26,transparent:!0,opacity:.76,depthWrite:!1,side:Lt,emissive:1981189,emissiveIntensity:.48,envMapIntensity:.35}),h=new Wt({map:a,color:16777215,roughness:.17,metalness:0,ior:1.333,clearcoat:1,clearcoatRoughness:.12,side:Lt,emissive:2374407,emissiveIntensity:.3,envMapIntensity:1.15}),f={value:0};h.onBeforeCompile=x=>{x.uniforms.waterTime=f,x.fragmentShader=`uniform float waterTime;
`+x.fragmentShader,x.fragmentShader=x.fragmentShader.replace("#include <map_fragment>",`#ifdef USE_MAP
 vec2 flowUv=vMapUv+vec2(sin(vMapUv.y*10.0+waterTime*.17),cos(vMapUv.x*9.0-waterTime*.13))*.025;
 diffuseColor*=texture2D(map,flowUv);
 #endif`)},h.customProgramCacheKey=()=>"slow-water-currents-v1";let p=new ze({color:9546090,roughness:.79,transparent:!0,opacity:.75,depthWrite:!1,emissive:2503177,emissiveIntensity:.12}),d=new Wt({color:13097881,roughness:.07,metalness:0,transparent:!0,opacity:.23,depthWrite:!1,clearcoat:1,clearcoatRoughness:.04,envMapIntensity:1.25}),g=new xt({color:12505482,transparent:!0,opacity:.18,depthWrite:!1,side:Lt});return{glass:r,haze:o,fluid:l,liquidTop:h,foam:p,bubble:d,ripple:g,waterTime:f}}var MM=i=>Math.max(0,Math.min(1,i)),pd=i=>{let e=MM(i);return e*e*(3-2*e)};function fd(i,e,t,n,s){if(i<e)return 0;let r=i-e;return r<t?pd(r/t):r<t+n?1:1-pd((r-t-n)/s)}var EM=[{at:5,head:-.32,eye:-.52,pitch:.035,hold:1.7},{at:17.4,head:.36,eye:.55,pitch:-.065,hold:2.1},{at:31.1,head:-.23,eye:-.4,pitch:-.1,hold:1.3}];function f0(i,e=!1,t={}){if(t.headYaw=0,t.gazeYaw=0,t.gazePitch=0,e||i<0)return t;let n=i%43.7;for(let s of EM){let r=fd(n,s.at,.24,s.hold+1,.65),o=fd(n,s.at+.38,.95,s.hold,1.25);t.headYaw+=s.head*o,t.gazeYaw+=s.eye*r,t.gazePitch+=s.pitch*r}return t.gazePitch-=.12*fd(n,25.2,.22,.8,.5),t}function p0(i,e,t,n,s=!1,r={}){let o=pd((e-1.08)/.42),a=1.1+n*.055,c=s?0:o*.105*(Math.sin(i*a+n)+.12*Math.sin(i*.47+n*.6))/1.12,l=t-.1-e;return r.angle=c,r.x=Math.sin(c)*l,r.y=t-.1-Math.cos(c)*l,r.hookX=r.x-Math.sin(c)*.52,r.hookY=r.y+Math.cos(c)*.52,r}var il;function SM(){if(il)return il;let i=128,e=new Uint8Array(i*i*4),t=new Uint8Array(i*i*4),n=8817,s=()=>(n=n*1664525+1013904223>>>0,n/4294967296);for(let a=0;a<i;a++)for(let c=0;c<i;c++){let l=(a*i+c)*4,h=s(),f=Math.max(0,Math.sin(c*.056+Math.sin(a*.05)*2)*Math.cos(a*.041)-.15),p=h>.965?.22:0;e[l]=223-f*67-h*16-p*140,e[l+1]=219-f*49-h*15-p*130,e[l+2]=186-f*72-h*17-p*130,e[l+3]=255,t[l]=t[l+1]=t[l+2]=145+h*24-p*255,t[l+3]=255}let r=new ji(e,i,i),o=new ji(t,i,i);for(let a of[r,o])a.wrapS=a.wrapT=rr,a.magFilter=gn,a.minFilter=Fi,a.generateMipmaps=!0,a.needsUpdate=!0;return r.colorSpace=pt,il=new ze({map:r,bumpMap:o,bumpScale:.0011,color:16052183,roughness:.72,emissive:12563852,emissiveIntensity:.28}),il}var wM=new $t(1,20,14),da=new ze({color:1580302,roughness:1});function ri(i,e,t=SM()){let n=new ht(i,t);return n.castShadow=!0,n.receiveShadow=!0,e.add(n),n}function wi(i,e,t,n){let s=ri(wM,i,n);return s.position.set(...e),s.scale.set(...t),s}function Si(i,e,t=.012){return ri(new pn(new Jt(e.map(n=>new S(...n))),32,t,8,!1),i)}function sl(i,e,t,n=.012){let s=new S(...e),r=new S(...t),o=r.clone().sub(s),a=ri(new Zt(n*.82,n,o.length(),10),i);return a.position.copy(s).add(r).multiplyScalar(.5),a.quaternion.setFromUnitVectors(new S(0,1,0),o.normalize()),a}function md(i=!1){let e=new we;e.name=i?"Slender forearm bone":"Worn femur";let t=[[0,-.161],[.023,-.16],[.028,-.13],[.019,-.1],[.014,-.04],[.015,.025],[.019,.085],[.028,.122],[.026,.145],[0,.155]],n=new Us(t.map(r=>new Ne(r[0]*(i?.62:1),r[1])),20),s=n.attributes.position;for(let r=0;r<s.count;r++)s.setX(r,s.getX(r)+.009*Math.sin((s.getY(r)+.16)*Math.PI/.315));return n.computeVertexNormals(),ri(n,e),wi(e,[.022,.14,0],[.043,.038,.039]),wi(e,[-.015,-.147,.002],[.028,.03,.034]),wi(e,[.02,-.15,-.002],[.029,.032,.032]),i&&e.scale.set(.75,1,.8),e}function m0(){let i=new we;i.name="Curved rib fragment";let e=[];for(let t=0;t<=20;t++){let n=-.85+t/20*2.9;e.push([Math.cos(n)*.123-.018,Math.sin(n)*.123,.018*Math.sin(n*1.3)])}return Si(i,e),wi(i,e[0],[.017,.015,.018]),i}function g0(){let i=new we;i.name="Detached jaw with uneven teeth",Si(i,[[-.088,.045,-.035],[-.08,-.025,.035],[-.043,-.05,.071],[0,-.054,.082],[.043,-.05,.071],[.08,-.025,.035],[.088,.045,-.035]],.013);for(let e=0;e<8;e++){let t=(e-3.5)*.017,n=.078-Math.abs(t)*.3,s=ri(new St(.013,.02+e%3*.002,.013),i);s.position.set(t,-.041,n),s.rotation.y=-t*3}return i}function bM(){let i=new we;i.name="Goofy buck-toothed skull with wonky eye sockets";let e=new bt;e.moveTo(-.076,-.061),e.quadraticCurveTo(-.133,-.035,-.121,.067),e.bezierCurveTo(-.119,.171,.123,.165,.12,.06),e.quadraticCurveTo(.136,-.029,.077,-.061),e.lineTo(.047,-.071),e.lineTo(-.047,-.073),e.closePath();for(let[r,o,a,c,l]of[[-.052,.019,.039,.043,-.2],[.052,.011,.033,.035,.18]]){let h=new Mi;h.absellipse(r,o,a,c,0,Math.PI*2,!0,l),e.holes.push(h)}let t=new Mi;t.moveTo(.001,-.026),t.lineTo(-.012,-.05),t.quadraticCurveTo(.001,-.045,.013,-.05),t.closePath(),e.holes.push(t);let n=ri(new an(e,{depth:.022,bevelEnabled:!0,bevelSize:.004,bevelThickness:.004,bevelSegments:2,steps:1,curveSegments:20}),i);n.position.z=.043,wi(i,[0,.04,-.055],[.12,.121,.077]),wi(i,[0,.012,.027],[.109,.093,.01],da);for(let r of[-1,1])wi(i,[r*.093,-.042,.047],[.028,.022,.025]);for(let[r,o,a,c,l]of[[-.019,-.084,.028,.042,-.11],[.017,-.08,.027,.036,.17],[-.06,-.073,.014,.018,-.28],[.06,-.071,.012,.015,.23]]){let h=ri(new St(a,c,.018),i);h.position.set(r,o,.064),h.rotation.z=l}let s=new we;s.name="Lopsided cartoon jaw",s.position.set(.004,-.071,-.003),s.rotation.z=-.12,i.add(s),Si(s,[[-.087,.04,-.025],[-.083,-.025,.037],[-.047,-.053,.071],[0,-.056,.079],[.051,-.048,.068],[.085,-.022,.033],[.087,.04,-.025]],.014);for(let[r,o]of[[-.052,-.04],[.038,-.041],[.057,-.036]]){let a=ri(new St(.015,.016,.015),s);a.position.set(r,o,.071),a.rotation.z=r*3}return Si(i,[[-.009,.154,-.016],[.003,.15,.003],[-.004,.141,.025],[.005,.126,.042]],.0016).material=da,i}function gd(){let i=new we;i.name="Short articulated spine";for(let e=0;e<6;e++){let t=(e-2.5)*.038,n=.01*Math.sin(e*.7);wi(i,[0,t,n],[.025,.016,.02]);for(let s of[-1,1])sl(i,[s*.012,t,n],[s*.045,t-.009,n-.008],.007);sl(i,[0,t,n],[0,t+.008,n-.043],.006)}return i}function x0(){let i=new we;i.name="Broken rib cage",i.add(gd());for(let e=0;e<5;e++)for(let t of[-1,1]){if(e===4&&t===1)continue;let n=.08-e*.043,s=.08+Math.sin(e/5*Math.PI)*.038;Si(i,[[0,n,-.02],[t*s*.65,n+.018,-.045],[t*s,n-.004,.008],[t*s*.82,n-.031,.065],[t*.018,n-.044,.08]],.0085)}return sl(i,[0,.06,.081],[0,-.12,.079],.01),i}function TM(i){let e=i===0,t=new we;t.name=e?"Pudding-shaped skull with bony party hat":"Sushi-shaped skull with bony beanie";let n=new bt;if(e)n.moveTo(-.3,-.27),n.bezierCurveTo(-.42,-.19,-.38,.12,-.29,.24),n.quadraticCurveTo(0,.34,.29,.24),n.bezierCurveTo(.38,.12,.42,-.19,.3,-.27),n.quadraticCurveTo(0,-.34,-.3,-.27);else{n.moveTo(-.31,-.225),n.quadraticCurveTo(-.39,-.16,-.34,-.025),n.lineTo(-.41,.17),n.quadraticCurveTo(-.4,.22,-.21,.29),n.quadraticCurveTo(0,.33,.21,.29),n.quadraticCurveTo(.4,.22,.41,.17),n.lineTo(.34,-.025),n.quadraticCurveTo(.39,-.16,.31,-.225);for(let l=7;l>=0;l--){let h=-.31+l*.0775;n.quadraticCurveTo(h+.038,-.285,h,-.225)}}n.closePath();let s=e?.015:-.055,r=e?.13:.14;for(let l of[-1,1]){let h=new Mi;h.absellipse(l*r,s,.07,l<0?.065:.057,0,Math.PI*2,!0,l*.18),n.holes.push(h)}let o=new Mi;o.moveTo(0,s-.037),o.lineTo(-.023,s-.083),o.quadraticCurveTo(0,s-.075,.023,s-.083),o.closePath(),n.holes.push(o);let a=new Mi;a.absellipse(0,e?-.19:-.192,e?.208:.227,e?.064:.042,0,Math.PI*2,!0),n.holes.push(a);let c=ri(new an(n,{depth:.055,bevelEnabled:!0,bevelSize:.008,bevelThickness:.008,bevelSegments:3,curveSegments:24}),t);c.position.z=.135,wi(t,[0,.012,-.035],[e?.355:.37,.235,.16]),wi(t,[0,-.025,.126],[.325,.265,.008],da);for(let l=0;l<7;l++){if(l===1||l===5)continue;let h=ri(new St(.039,l%2?.037:.05,.035),t);h.position.set((l-3)*.053,e?-.147:-.169,.175),h.rotation.z=(l%3-1)*.12}if(e){Si(t,[[-.3,.19,.19],[-.24,.13,.2],[-.18,.195,.21],[-.11,.095,.21],[-.045,.17,.21],[.025,.085,.21],[.09,.17,.21],[.16,.105,.21],[.23,.19,.2],[.3,.15,.19]],.015);let l=new we;l.name="Ivory party-hat crest",l.position.set(.02,.285,0),l.rotation.z=-.12,t.add(l);let h=ri(new Hs(.123,.3,32),l);h.position.y=.15;let f=ri(new Qt(.12,.012,8,32),l);f.rotation.x=Math.PI/2;for(let p=0;p<5;p++){let d=p/5*Math.PI*2;Si(l,[[Math.cos(d)*.12,.005,Math.sin(d)*.12],[Math.cos(d)*.065,.15,Math.sin(d)*.065],[0,.3,0]],.004)}wi(l,[0,.314,0],[.028,.03,.028]),Si(t,[[-.2,.27,.15],[-.18,.23,.195],[-.205,.2,.2],[-.18,.17,.2]],.0025).material=da}else{for(let p of[-1,1])Si(t,[[p*.115,.027,.197],[p*.12,.16,.198],[p*.13,.292,.16]],.0035).material=da;Si(t,[[-.37,.01,.17],[-.2,.036,.199],[0,.048,.2],[.2,.036,.199],[.37,.01,.17]],.012);let l=new we;l.name="Ribbed ivory beanie crest",l.position.y=.3,t.add(l),ri(new $t(1,32,16,0,Math.PI*2,0,Math.PI/2),l).scale.set(.235,.235,.2);let f=ri(new Qt(.238,.02,10,40),l);f.rotation.x=Math.PI/2,f.scale.y=.86;for(let p=0;p<10;p++){let d=p/10*Math.PI*2,g=[];for(let x=0;x<=8;x++){let m=x/8*Math.PI/2;g.push([Math.cos(d)*.238*Math.cos(m),.237*Math.sin(m),Math.sin(d)*.203*Math.cos(m)])}Si(l,g,.006)}}return t}function y0(i){let e=new we;if(e.name=["Pudding Figpal skeleton","Sushi Figpal skeleton","Pufferfish skeleton"][i],i===2){let t=bM();t.scale.set(1.25,1.35,1.05),t.position.set(-.16,.035,.055),e.add(t);for(let n=0;n<7;n++){let s=-.05+n*.055;if(wi(e,[s,0,0],[.028,.021,.02]),n<5)for(let r of[-1,1])Si(e,[[s,0,0],[s+.026,r*.09,-.01],[s+.014,r*(.22-n*.023),.015]],.01)}for(let n of[-.16,-.08,0,.08,.16])sl(e,[.29,0,0],[.47,n,0],.009)}else e.add(TM(i));return e}var RM=[[{kind:"femur",x:.14,y:.46,z:.15,tilt:1.1,yaw:-.3,scale:.9}],[{kind:"ribs",x:.02,y:.4,z:.1,tilt:.3,yaw:-.2,scale:.78},{kind:"spine",x:-.16,y:.4,z:-.08,tilt:-.5,yaw:.4,scale:.75},{kind:"rib",x:.16,y:.34,z:.17,tilt:.9,yaw:-.4,scale:.64}],[{kind:"forearm",x:-.13,y:.42,z:.16,tilt:-.68,yaw:.2,scale:.88},{kind:"jaw",x:.09,y:.32,z:.16,tilt:-.18,yaw:.6,scale:1.04}]],AM={femur:md,forearm:()=>md(!0),rib:m0,ribs:x0,spine:gd,jaw:g0};function v0(i){let e=new we;e.name=`Bones floating in canister ${i+1}`;let t=RM[i].map((s,r)=>{let o=AM[s.kind]();return o.scale.multiplyScalar(s.scale),e.add(o),{...s,object:o,phase:i*1.91+r*2.3}});function n(s,r=!1){let o=r?0:s;for(let a of t){let c=a.phase,l=.022,h=.46;a.object.position.set(a.x+l*Math.sin(o*.27+c),a.y+.014*Math.sin(o*.57+c),a.z+.018*Math.cos(o*.23+c)),a.object.rotation.set(.1*Math.sin(o*.19+c),a.yaw+h*Math.sin(o*.17+c),a.tilt+.11*Math.sin(o*.31+c),"YXZ")}}return n(0),{group:e,update:n}}function _0(i,e){let t=y0(e);t.position.copy(i.position),t.quaternion.copy(i.quaternion),t.scale.copy(i.scale),i.parent.add(t),i.updateWorldMatrix(!0,!0);let n=i.matrixWorld.clone().invert(),s=new Dn,r=new Dn;i.traverse(g=>{g.isMesh&&(g.geometry.computeBoundingBox(),r.copy(g.geometry.boundingBox).applyMatrix4(new Tt().multiplyMatrices(n,g.matrixWorld)),s.union(r))});let o=new vi,a=new vi;function c(g,x){let m=new Map;g.traverse(u=>{if(!u.isMesh)return;let E=y=>{if(!m.has(y)){let M=y.clone();M.onBeforeCompile=y.onBeforeCompile,M.customProgramCacheKey=y.customProgramCacheKey,M.clippingPlanes=[x],M.clipShadows=!0,m.set(y,M)}return m.get(y)};u.material=Array.isArray(u.material)?u.material.map(E):E(u.material)})}c(i,o),c(t,a);let l=s.min.y-.04,h=!1,f=new S;function p(g){i.updateWorldMatrix(!0,!1),f.setFromMatrixPosition(i.matrixWorld),f.y=g,i.worldToLocal(f),l=Math.max(l,Math.min(s.max.y+.04,f.y)),o.set(new S(0,1,0),-l).applyMatrix4(i.matrixWorld),a.copy(o).negate(),h=l>=s.max.y+.015,i.visible=!h,t.visible=l>s.min.y}p(-100);function d(){l=s.min.y-.04,h=!1,p(-100)}return{skeleton:t,update:p,reset:d,get transformed(){return h},get cutHeight(){return l}}}function M0(){let i=new io().load(new URL("./assets/open-to-work.png",import.meta.url).href);i.colorSpace=pt,i.anisotropy=4;let e=new ze({map:i,transparent:!0,alphaTest:.025,depthWrite:!1,roughness:.86,metalness:0,emissiveMap:i,emissive:16777215,emissiveIntensity:.18}),t=new wt(.78,.78,48,2),n=t.attributes.position;for(let s=0;s<n.count;s++)n.setZ(s,Math.sqrt(.49**2-n.getX(s)**2));return t.computeVertexNormals(),t.computeBoundingSphere(),()=>{let s=new ht(t,e);return s.name="#OPENTOWORK decal on curved tank glass",s.position.y=.7,s.renderOrder=8,s}}function E0(){let i=new we;i.name="Three suspended Figpals over bubbling green canisters";let e=Math.PI*2,t=193108,n=()=>(t=t*1664525+1013904223>>>0,t/4294967296),s=($,ve=.78,Ie=.005)=>new ze({color:$,roughness:ve,emissive:$,emissiveIntensity:Ie}),r=s(1184789,.85,0),o=s(16772534),a=s(16184551),c=s(36072),l=s(15226636),h=s(11022601),f=s(16755746),p=s(16754855),d=s(10214644),g=s(294108),x=s(16765992),m=new xt({color:1053459,side:yn});m.onBeforeCompile=$=>{$.vertexShader=$.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
transformed += normal * 0.009;`)},m.customProgramCacheKey=()=>"figpal-outline-v1";function u($,ve,Ie=i,Pe=!1){let Te=new ht($,ve);if(Te.castShadow=!0,Te.receiveShadow=!0,Ie.add(Te),Pe){let he=new ht($,m);he.name="Ink outline",Te.add(he)}return Te}function E($,ve,Ie,Pe,Te=!1){let he=u(new $t(1,24,16),Ie,Pe,Te);return he.position.set(...$),he.scale.set(...ve),he}function y($,ve,Ie,Pe=i){let Te=u(new St(...$),Ie,Pe);return Te.position.set(...ve),Te}function M($,ve,Ie,Pe,Te=i,he=!1){let ke=u(new Zt($,$,ve,48,1,he),Pe,Te);return ke.position.set(...Ie),ke}function C($,ve,Ie,Pe=i){let Te=new Jt($.map(he=>new S(...he)));return u(new pn(Te,Math.max(16,$.length*5),ve,6,!1),Ie,Pe)}function A($,ve,Ie,Pe,Te=i){let he=new S(...$),ke=new S(...ve),q=ke.clone().sub(he),Re=M(Ie,q.length(),he.clone().add(ke).multiplyScalar(.5).toArray(),Pe,Te);return Re.quaternion.setFromUnitVectors(new S(0,1,0),q.normalize()),Re}function T($,ve,Ie,Pe,Te=i){let he=u(new Qt($,ve,8,64),Pe,Te);return he.rotation.x=Math.PI/2,he.position.y=Ie,he}function P($,ve,Ie,Pe,Te=.035){let he=new an($,{depth:ve-Te*2,bevelEnabled:!0,bevelSize:Te,bevelThickness:Te,bevelSegments:3,steps:1,curveSegments:16});return he.translate(0,0,-ve/2+Te),u(he,Ie,Pe,!0)}function W($,ve,Ie,Pe=.105,Te="worried"){let he=new we;he.name=`${Te} expression`,$.add(he);for(let ke of[-1,1])E([ke*Pe,ve,Ie],[.022,.031,.013],r,he),C([[ke*(Pe+.035),ve+.041,Ie+.004],[ke*Pe,ve+.055,Ie+.007],[ke*(Pe-.035),ve+.074,Ie+.007]],.01,r,he);Te==="afraid"?E([0,ve-.075,Ie+.003],[.026,.038,.012],r,he):C([[-.052,ve-.091,Ie],[0,ve-.06,Ie+.005],[.052,ve-.091,Ie]],.012,r,he)}function v(){let $=new we;$.name="Party-hat pudding Figpal";let ve=new bt;ve.moveTo(-.3,-.27),ve.bezierCurveTo(-.42,-.19,-.38,.12,-.29,.24),ve.quadraticCurveTo(0,.34,.29,.24),ve.bezierCurveTo(.38,.12,.42,-.19,.3,-.27),ve.quadraticCurveTo(0,-.34,-.3,-.27),P(ve,.37,f,$,.035);let Ie=new bt;Ie.moveTo(-.29,.25),Ie.quadraticCurveTo(0,.34,.29,.25),Ie.lineTo(.3,.13),Ie.quadraticCurveTo(.28,.1,.22,.16),Ie.lineTo(.15,.055),Ie.quadraticCurveTo(.13,.035,.08,.115),Ie.lineTo(.01,.045),Ie.quadraticCurveTo(-.02,.028,-.09,.12),Ie.lineTo(-.17,.065),Ie.quadraticCurveTo(-.2,.05,-.22,.16),Ie.lineTo(-.3,.13),Ie.closePath();let Pe=P(Ie,.025,o,$,.006);Pe.position.z=.191,W($,-.045,.222);for(let Se of[-1,1])E([Se*.24,-.085,.206],[.045,.028,.012],p,$);let Te=new we;Te.position.set(.02,.285,0),Te.rotation.z=-.12,Te.scale.setScalar(.6),$.add(Te);let he=document.createElement("canvas");he.width=512,he.height=256;let ke=he.getContext("2d");ke.fillStyle="#ffd62d",ke.fillRect(0,0,512,256),ke.fillStyle="#0088ea";for(let Se=0;Se<4;Se++)for(let Ue=0;Ue<7;Ue++)ke.beginPath(),ke.ellipse(Ue*85+Se%2*42,30+Se*67,18,14,0,0,e),ke.fill();let q=new Ot(he);q.colorSpace=pt;let Re=new ze({map:q,roughness:.82}),ce=u(new Hs(.205,.5,48),Re,Te,!0);ce.position.y=.25,T(.205,.009,0,r,Te),E([0,.515,0],[.042,.045,.041],c,Te);for(let Se=0;Se<8;Se++){let Ue=Se/8*e;A([0,.515,.005],[Math.cos(Ue)*.07,.515+Math.sin(Ue)*.07,.006],.012,c,Te)}return{object:$}}function b(){let $=new we;$.name="Orange-beanie sushi Figpal";let ve=new bt;ve.moveTo(-.32,-.035),ve.quadraticCurveTo(-.38,-.11,-.31,-.2);for(let Re=0;Re<8;Re++){let ce=-.31+Re*.0775;ve.quadraticCurveTo(ce+.038,-.285,ce+.0775,-.225)}ve.quadraticCurveTo(.39,-.13,.32,-.035),ve.quadraticCurveTo(0,.035,-.32,-.035),P(ve,.43,a,$,.025);let Ie=new bt;Ie.moveTo(-.37,-.015),Ie.lineTo(-.41,.17),Ie.quadraticCurveTo(-.4,.22,-.21,.29),Ie.quadraticCurveTo(0,.33,.21,.29),Ie.quadraticCurveTo(.4,.22,.41,.17),Ie.lineTo(.37,-.015),Ie.quadraticCurveTo(0,.055,-.37,-.015),P(Ie,.43,x,$,.022);let Pe=new bt;Pe.moveTo(-.12,.022),Pe.lineTo(-.13,.31),Pe.quadraticCurveTo(0,.33,.13,.31),Pe.lineTo(.12,.022),Pe.closePath();let Te=P(Pe,.44,r,$,.006);Te.position.z=.008,W($,-.1,.253,.1,"afraid");for(let Re=0;Re<16;Re++){let ce=Re/16*e;E([Math.cos(ce)*.29,-.18+Math.sin(ce)*.025,Math.sin(ce)*.17],[.031,.022,.015],a,$)}let he=new we;he.position.y=.3,$.add(he),u(new $t(1,32,16,0,e,0,Math.PI/2),l,he,!0).scale.set(.235,.235,.2);for(let Re=0;Re<10;Re++){let ce=Re/10*e,Se=[];for(let Ue=0;Ue<=14;Ue++){let Fe=.08+Ue/14*(Math.PI/2-.08);Se.push([Math.sin(Fe)*Math.cos(ce)*.238,Math.cos(Fe)*.237,Math.sin(Fe)*Math.sin(ce)*.204])}C(Se,.006,h,he)}let q=M(.258,.065,[0,.002,0],l,he);q.scale.z=.86,T(.26,.009,-.03,r,he).scale.y=.86,T(.26,.008,.034,r,he).scale.y=.86;for(let Re=0;Re<30;Re++){let ce=Re/30*e;A([Math.cos(ce)*.259,-.025,Math.sin(ce)*.224],[Math.cos(ce)*.259,.027,Math.sin(ce)*.224],.0045,h,he)}return{object:$}}function B(){let $=new we;$.name="Propeller-hat pufferfish Figpal",E([0,0,0],[.335,.33,.25],d,$,!0);let ve=new bt;ve.moveTo(.26,.03),ve.quadraticCurveTo(.34,.06,.4,.16),ve.quadraticCurveTo(.49,.23,.5,.06),ve.quadraticCurveTo(.51,-.11,.43,-.13),ve.lineTo(.33,-.05),ve.closePath(),P(ve,.11,d,$,.02);for(let he=0;he<3;he++)C([[.38,-.025+he*.04,.078],[.465,-.075+he*.085,.078]],.012,g,$);for(let he of[-1,1]){let ke=E([he*.303,-.02,.13],[.065,.1,.035],d,$,!0);ke.rotation.z=he*.25;for(let q=0;q<3;q++)C([[he*.3,-.06+q*.04,.168],[he*.338,-.075+q*.05,.16]],.01,g,$)}W($,.015,.252,.09,"worried");for(let he=0;he<11;he++){let ke=Math.PI*1.03+he/10*Math.PI*.9,q=Math.cos(ke)*.26,Re=Math.sin(ke)*.25,ce=.25*Math.sqrt(Math.max(.04,1-(q/.335)**2-(Re/.33)**2))+.008;C([[q,Re,ce],[q+.008,Re-.027,ce]],.011,g,$)}for(let he=0;he<7;he++){let ke=.15+he/6*Math.PI*.88;A([Math.cos(ke)*.31,Math.sin(ke)*.31,0],[Math.cos(ke)*.37,Math.sin(ke)*.37,0],.012,g,$)}let Ie=new we;Ie.position.set(0,.275,0),$.add(Ie);let Pe=[s(15746581),x,s(4802281),x];for(let he=0;he<4;he++)u(new $t(1,12,12,he*e/4,e/4,0,Math.PI/2),Pe[he],Ie).scale.set(.215,.2,.215);T(.218,.011,0,r,Ie),A([0,.2,0],[0,.27,0],.012,a,Ie);let Te=new we;Te.position.y=.275,Ie.add(Te),E([0,0,0],[.025,.018,.025],a,Te);for(let he of[-1,1])E([he*.066,0,0],[.083,.012,.029],a,Te);return{object:$,propeller:Te}}let k=si(14802384),F=si(9606540),H=si(15065300),J=si(14012614);J.bumpScale=7e-4,J.envMapIntensity=.85;let fe=new ze({color:1382417,roughness:.29,metalness:.08}),ie=[];for(let $=0;$<=12;$++){let ve=$/12*Math.PI;ie.push(new S(Math.cos(ve)*.015,.01+Math.sin(ve)*.015,0))}for(let $=0;$<=12;$++){let ve=Math.PI+$/12*Math.PI;ie.push(new S(Math.cos(ve)*.015,-.01+Math.sin(ve)*.015,0))}let pe=new pn(new Jt(ie,!0),Dt.chainSegments,.0048,Dt.chainRadialSegments,!0),N=new Ft,j=new S(0,1,0),se=new mt;function te($,ve,Ie=null){let Pe=new Jt($.map(Re=>new S(...Re))),Te=Pe.getLength(),he=Ie??Math.max(2,Math.ceil(Te/.033)),ke=new vn(pe,J,he);ke.name="Interlocking steel chain links",ke.castShadow=!0,ke.receiveShadow=!0,ke.frustumCulled=!1,ve.add(ke);for(let Re=0;Re<he;Re++)ke.setColorAt(Re,new dt().setRGB(.67+n()*.3,.58+n()*.3,.45+n()*.34));function q(Re,ce){let Se=new S(...Re),Ue=new S(...ce),Fe=Ue.clone().sub(Se),ut=Fe.length(),Mt=Math.min(he,Math.max(2,Math.ceil(ut/.033)));ke.count=Mt,Fe.normalize();for(let zt=0;zt<Mt;zt++)N.position.copy(Se).lerp(Ue,zt/(Mt-1)),N.quaternion.setFromUnitVectors(j,Fe),se.setFromAxisAngle(j,(zt%2?Math.PI/2:0)+Math.sin(zt*7.17)*.07),N.quaternion.multiply(se),N.scale.setScalar(1),N.updateMatrix(),ke.setMatrixAt(zt,N.matrix);ke.instanceMatrix.needsUpdate=!0}if(Ie)ke.instanceMatrix.setUsage(Un),q($[0],$.at(-1));else for(let Re=0;Re<he;Re++){let ce=Re/(he-1);N.position.copy(Pe.getPointAt(ce)),N.quaternion.setFromUnitVectors(j,Pe.getTangentAt(ce)),se.setFromAxisAngle(j,(Re%2?Math.PI/2:0)+Math.sin(Re*7.17)*.07),N.quaternion.multiply(se),N.scale.setScalar(1),N.updateMatrix(),ke.setMatrixAt(Re,N.matrix)}return{object:ke,setPoints:q}}let O=d0(),le=M0(),{glass:X,haze:V,fluid:Z,liquidTop:xe,foam:Ce,bubble:_e,ripple:ne,waterTime:I}=O,ye=[],ee=[],ae=[],me=[],Ae=new Ft,Me=[{x:-3.05,z:-1.05,height:2.02,winchY:2.8},{x:-2.85,z:.3,height:1.84,winchY:2.65},{x:-2.15,z:1.45,height:1.6,winchY:2.38}];for(let $=0;$<Me.length-1;$++){let ve=Me[$],Ie=Me[$+1];A([ve.x,3.065,ve.z],[Ie.x,3.065,Ie.z],.052,k)}let U=[v,b,B];for(let $=0;$<3;$++){let{x:ve,z:Ie,height:Pe,winchY:Te}=Me[$],he=new we;he.position.set(ve,.012,Ie),he.name=`Green bubbling canister ${$+1}`,i.add(he),M(.515,.16,[0,.1,0],k,he),M(.46,.035,[0,.025,0],F,he);for(let He=0;He<8;He++){let We=He/8*e;E([Math.cos(We)*.49,.15,Math.sin(We)*.49],[.022,.022,.022],H,he)}let ke=M(.485,1.02,[0,.72,0],X,he,!0);ke.castShadow=!1,ke.renderOrder=6;let q=M(.487,1.02,[0,.72,0],V,he,!0);q.name="Condensation, mineral streaks and algae tide marks",q.castShadow=!1,q.renderOrder=7,he.add(le());let Re=M(.444,.865,[0,.64,0],Z,he,!0);Re.castShadow=!1,Re.renderOrder=2;let ce=v0($);he.add(ce.group),M(.444,.018,[0,.215,0],xe,he);for(let He of[.225,1.235])T(.484,.036,He,k,he),T(.454,.01,He-.018,F,he);for(let He of[.15,2.24,4.34]){let We=Math.cos(He)*.485,Mn=Math.sin(He)*.485;A([We,.22,Mn],[We,1.23,Mn],.021,k,he)}for(let He of[-1,1])C([[He*.47,.96,0],[He*.58,.96,0],[He*.58,.74,0],[He*.48,.74,0]],.022,k,he);let Se=new Ns(0,.444,Dt.mobile?32:48,Dt.mobile?6:10);Se.rotateX(-Math.PI/2);let Ue=u(Se,xe,he);Ue.position.y=1.074,Ue.castShadow=!1,Ue.renderOrder=4,T(.441,.006,1.075,xe,he).renderOrder=4;let Fe=Array.from({length:48},()=>({x:(n()-.5)*.61,z:(n()-.5)*.61,r:.007+n()**2*.023,phase:n(),speed:.15+n()*.17})),ut=new vn(new $t(1,12,8),_e,Fe.length);ut.name="Rising liquid bubbles",ut.instanceMatrix.setUsage(Un),ut.frustumCulled=!1,ut.renderOrder=3,he.add(ut);let Mt=[];for(let He=0;He<24;He++){let We=n()*e,Mn=He<18?.4+n()*.025:n()*.34,sn=.006+n()*.016,jn=E([Math.cos(We)*Mn,1.074,Math.sin(We)*Mn],[sn,sn*.65,sn],Ce,he);jn.castShadow=!1,jn.renderOrder=5,Mt.push({mesh:jn,baseRadius:sn,phase:n()*e})}let zt=[];for(let He=0;He<5;He++){let We=u(new Ns(.96,1,40),ne.clone(),he);We.rotation.x=-Math.PI/2,We.position.set((n()-.5)*.45,1.078,(n()-.5)*.45),We.castShadow=!1,We.renderOrder=5,zt.push({mesh:We,phase:n()})}let ft=document.createElement("canvas");ft.width=256,ft.height=128;let Rt=ft.getContext("2d");Rt.fillStyle="#bec39f",Rt.fillRect(0,0,256,128),Rt.fillStyle="#242c22",Rt.font="bold 67px monospace",Rt.textAlign="center",Rt.fillText(`0${$+1}`,128,87);let qn=new Ot(ft);qn.colorSpace=pt;let Xi=u(new wt(.17,.085),new ze({map:qn,roughness:.9}),he);Xi.position.set(0,.115,.517),Xi.castShadow=!1;for(let He=0;He<5;He++){let We=y([.065,.065,.007],[-.23+He*.115,.12,.5],He%2?r:s(10064462,.85,0),he);We.rotation.z=-.45}Xi.position.z=.52;let st=M(.064,.03,[.32,1.19,.37],k,he);st.rotation.x=Math.PI/2,u(new Ei(.052,24),o,he).position.set(.32,1.19,.391),C([[.32,1.19,.395],[.3,1.219,.395]],.003,r,he);let $e=new we;$e.name=`Tank ${$+1} drain valve`,$e.position.set(.3,.29,.43),$e.userData.valveIndex=$,he.add($e);let ot=M(.042,.19,[0,0,0],k,$e);ot.rotation.x=Math.PI/2,C([[0,0,.045],[0,-.035,.16],[0,-.1,.23]],.033,k,$e);let et=new Ft;et.position.set(0,-.1,.23),$e.add(et);let rt=u(new Ns(.024,.034,20),k,$e);rt.position.copy(et.position),rt.rotation.x=.6;let tt=u(new Ei(.024,20),F,$e);tt.position.copy(et.position),tt.position.z-=.001,tt.rotation.x=.6,A([0,0,.01],[0,.075,.11],.012,k,$e);let Bt=new we;Bt.name="Spinning red drain handwheel",Bt.position.set(0,.075,.12),$e.add(Bt),u(new Qt(.088,.01,8,32),h,Bt);for(let He=0;He<3;He++){let We=He/3*e;A([0,0,0],[Math.cos(We)*.084,Math.sin(We)*.084,0],.007,h,Bt)}let cn=M(.018,.028,[0,0,0],H,Bt);cn.rotation.x=Math.PI/2;let Yt=u(new $t(.102,12,8),new xt({transparent:!0,opacity:0,depthWrite:!1,colorWrite:!1}),Bt);Yt.castShadow=!1,ae.push({object:$e,outlet:et,setOpen(He){Bt.rotation.z=-He*Math.PI*4,Bt.position.z=.12+He*.018}});let Cn=new Fn(7052325,.58,1.7,2);Cn.position.set(0,.85,0),he.add(Cn),ee.push({surface:Ue,bubbles:ut,bubbleData:Fe,foam:Mt,ripples:zt,floatingBones:ce,phase:$*1.7});let ln=Math.atan2(1.85221-ve,3.1149-Ie);he.rotation.y=ln;let Ut=new we;Ut.name=`Chain hoist ${$+1}`,Ut.position.set(ve,0,Ie),Ut.rotation.y=ln,i.add(Ut),y([.4,.05,.34],[0,3.13,0],k,Ut);for(let He of[-1,1])A([He*.16,3.12,0],[He*.16,Te+.1,0],.023,k,Ut),E([He*.16,3.12,.08],[.026,.026,.026],H,Ut);let L=new we;L.name=`Winch ${$+1}: lower or raise Figpal`,L.position.y=Te,L.userData.hoistIndex=$,Ut.add(L),y([.46,.12,.3],[0,.1,-.03],k,L);for(let He of[-1,1]){y([.035,.22,.27],[He*.191,.012,-.01],k,L);let We=M(.057,.055,[He*.205,0,0],fe,L);We.rotation.z=Math.PI/2;for(let Mn of[-.073,.093])for(let sn of[-.106,.096]){let jn=u(new Zt(.013,.013,.018,6),H,L);jn.position.set(He*.215,Mn,sn),jn.rotation.z=Math.PI/2}}y([.105,.09,.11],[.3,.15,-.035],F,L),C([[.3,.18,.01],[.38,.21,.06],[.43,.12,.1],[.4,-.04,.07]],.008,fe,L);let Q=document.createElement("canvas");Q.width=256,Q.height=128;let oe=Q.getContext("2d");oe.fillStyle="#817653",oe.fillRect(0,0,256,128),oe.fillStyle="#2a2b24",oe.font="bold 22px monospace",oe.fillText("CHAIN HOIST",15,30),oe.font="18px monospace",oe.fillText("250 KG / 1978",15,62),oe.fillText("SERVICE OVERDUE",15,103);for(let He=0;He<90;He++)oe.fillStyle=He%2?"rgba(42,25,12,.48)":"rgba(170,156,116,.7)",oe.fillRect(n()*256,n()*128,n()*17,n()*3);let de=new Ot(Q);de.colorSpace=pt;let re=u(new wt(.25,.1),new ze({map:de,roughness:.87}),L);re.position.set(-.005,.1,.124),re.rotation.z=.028;let Le=new we;Le.rotation.z=Math.PI/2,L.add(Le);let Ge=new we;Ge.name="Rotating chain sprocket",Le.add(Ge),M(.1,.28,[0,0,0],F,Ge);for(let He of[-1,1]){M(.136,.026,[0,He*.16,0],k,Ge);for(let We=0;We<12;We++){let Mn=We/12*e;y([.026,.03,.032],[Math.cos(Mn)*.13,He*.16,Math.sin(Mn)*.13],H,Ge)}}let Ke=[];for(let He=0;He<=120;He++){let We=He/120*e*4;Ke.push([Math.cos(We)*.106,-.1+He/120*.2,Math.sin(We)*.106])}te(Ke,Ge).object.name="Greasy chain wound around the drum";let Qe=M(.105,.24,[.3,.015,-.04],F,L);Qe.rotation.z=Math.PI/2;for(let He=0;He<6;He++){let We=M(.115,.009,[.215+He*.033,.015,-.04],k,L);We.rotation.z=Math.PI/2}let at=new we;at.position.set(-.22,0,0),L.add(at),A([0,0,0],[0,-.13,0],.014,k,at),A([0,-.13,0],[-.09,-.13,0],.021,F,at);let ct=new Fn(12371885,.4,.85,2);ct.position.set(-.24,.12,.36),L.add(ct),E([0,.17,.28],[.018,.011,.012],new xt({color:7767659}),L);let Ye=new we;Ye.name=`Suspended Figpal ${$+1}`,Ye.position.y=Pe,Ut.add(Ye);let At=U[$]();At.object.scale.setScalar(.62),At.object.rotation.z=($-1)*.035,Ye.add(At.object);let yt=_0(At.object,$),kt=new Ft;kt.position.set(0,.5,0),Ye.add(kt),me.push(kt),A([-.22,.45,0],[.22,.45,0],.019,k,Ye);let Pn=u(new Qt(.045,.01,6,18,Math.PI*1.65),H,Ye);Pn.position.set(0,.49,0),Pn.rotation.z=-.5,A([-.028,.476,.008],[.016,.511,.008],.004,F,Ye);for(let He of[-1,1])te([[He*.21,.45,0],[He*.245,.11,0],[He*.23,-.12,.015],[He*.16,-.205,.04],[0,-.222,.045]],Ye);let Ht=te([[0,Te-.1,.025],[0,Pe+.52,0]],Ut,72),it=te([[-.1,Te-.01,-.11],[-.11,Te-.36,-.12],[-.16,Te-.4,-.1],[-.2,Te-.05,-.08]],Ut);it.object.name="Winch return chain loop";let Vt=new we;Vt.name=`Canister ${$+1} winch control`,Vt.position.set(.39,.85,.4),Vt.rotation.y=.35,Vt.userData.hoistIndex=$,he.add(Vt),y([.12,.21,.07],[0,0,0],F,Vt),E([0,.047,.047],[.024,.024,.015],s(8072739,.6,0),Vt),E([0,-.047,.047],[.024,.024,.015],s(6913097,.6,0),Vt),C([[.39,.95,.4],[.44,1.02,.35],[.46,1.27,.12],[.44,Te-.13,.06],[.24,Te,0]],.007,F,Ut),ye.push({rig:Ut,hanger:Ye,transformation:yt,captive:At.object,propeller:At.propeller,drum:Ge,crank:at,loadChain:Ht,height:Pe,homeHeight:Pe,targetHeight:Pe,winchY:Te,phase:$*2.1,lowered:!1})}let w=new Fn(11712685,.75,3.8,2);w.position.set(-1.75,2.75,-.2),i.add(w);function K($){let ve=ye[$];return ve?(ve.lowered=!ve.lowered,ve.targetHeight=ve.lowered?.65:ve.homeHeight,`Figpal ${$+1}${ve.transformation.transformed?"'s bones":""} ${ve.lowered?"lowering into the canister":"rising above the canister"}.`):null}function ge(){for(let $ of ye)$.lowered=!0,$.targetHeight=.65}function be(){for(let $ of ye)$.lowered=!1,$.height=$.targetHeight=$.homeHeight,$.hanger.position.set(0,$.homeHeight,0),$.hanger.rotation.z=0,$.loadChain.setPoints([0,$.winchY-.1,.025],[0,$.homeHeight+.52,0]),$.drum.rotation.y=$.crank.rotation.x=0,$.transformation.reset()}let Ee=0,Be={};function Oe($,ve=!1){let Ie=Math.max(0,Math.min(.05,$-Ee));Ee=$;let Pe=ve?0:$;I.value=Pe;for(let Te of ye){let he=Te.targetHeight-Te.height;Te.height=ve?Te.targetHeight:Te.height+Math.sign(he)*Math.min(Math.abs(he),Ie*.15),p0($,Te.height,Te.winchY,Te.phase,ve,Be),Te.hanger.position.set(Be.x,Be.y,0),Te.hanger.rotation.z=Be.angle,Te.loadChain.setPoints([0,Te.winchY-.1,.025],[Be.hookX,Be.hookY,0]),Te.drum.rotation.y=(Te.homeHeight-Te.height)/.1,Te.crank.rotation.x=(Te.homeHeight-Te.height)/.1,Te.transformation.update(1.086),Te.propeller&&(Te.propeller.rotation.y=Pe*.18)}for(let Te of ee){Te.floatingBones.update($,ve);let he=Te.surface.geometry.attributes.position,ke=Te.surface.geometry.attributes.normal;for(let q=0;q<he.count;q++){let Re=he.getX(q),ce=he.getZ(q),Se=Re*17+Pe*1.4+Te.phase,Ue=ce*14-Pe*1.1,Fe=(Re+ce)*28-Pe*2.1;he.setY(q,Math.sin(Se)*Math.cos(Ue)*.0035+Math.sin(Fe)*.0012);let ut=Math.cos(Se)*Math.cos(Ue)*.0595+Math.cos(Fe)*.0336,Mt=-Math.sin(Se)*Math.sin(Ue)*.049+Math.cos(Fe)*.0336,zt=Math.hypot(ut,1,Mt);ke.setXYZ(q,-ut/zt,1/zt,-Mt/zt)}he.needsUpdate=!0,ke.needsUpdate=!0,Te.bubbleData.forEach((q,Re)=>{let ce=(Pe*q.speed+q.phase)%1;Ae.position.set(q.x+Math.sin(Pe*1.3+Re)*.012,.25+ce*.84,q.z+Math.cos(Pe+Re)*.009),Ae.scale.setScalar(q.r*(.65+ce*.5)),Ae.updateMatrix(),Te.bubbles.setMatrixAt(Re,Ae.matrix)}),Te.bubbles.instanceMatrix.needsUpdate=!0;for(let q of Te.foam){let Re=(Math.sin(Pe*2.4+q.phase)+1)*.5;q.mesh.scale.set(q.baseRadius,q.baseRadius*(.12+Re*.28),q.baseRadius)}for(let q of Te.ripples){let Re=(Pe*.48+q.phase)%1,ce=.012+Re*.075;q.mesh.scale.setScalar(ce),q.mesh.visible=Re<.88,q.mesh.material.opacity=(1-Re)*.16}}}Oe(0);function Xe($){for(let ve of[k,F,H,J,X,Z,xe,_e])ve.envMap=$,ve.needsUpdate=!0}function _t($){let ve=ye[$];return!!ve&&!ve.transformation.transformed}function De($){let ve=ye[$];return _t($)&&!ve.lowered&&Math.abs(ve.height-ve.homeHeight)<.025}return{group:i,update:Oe,valves:ae,toggleHoist:K,isLowered:$=>ye[$]?.lowered??!1,canSpeak:_t,isHanging:De,lowerAll:ge,reset:be,speechAnchors:me,setEnvironment:Xe}}function S0(i=[]){let e=i.map(n=>(n.updateWorldMatrix(!0,!1),{inverse:n.matrixWorld.clone().invert(),width:n.geometry.parameters.width/2,depth:n.geometry.parameters.depth/2,top:n.getWorldPosition(new S).y+n.geometry.parameters.height/2})),t=new S;return(n,s)=>{let r=.003;for(let o of e)t.set(n,0,s).applyMatrix4(o.inverse),Math.abs(t.x)<=o.width&&Math.abs(t.z)<=o.depth&&(r=Math.max(r,o.top));return r}}function xd(i,e){i.updateWorldMatrix(!0,!0);let t=1/0,n=new S,s=new Tt,r=new Tt;function o(a){if(a.userData.ignoreFloorContact)return;let c=a.isMesh&&a.geometry.attributes.position;if(c)for(let l=0;l<(a.isInstancedMesh?a.count:1);l++){a.isInstancedMesh?(a.getMatrixAt(l,s),r.multiplyMatrices(a.matrixWorld,s)):r.copy(a.matrixWorld);for(let h=0;h<c.count;h++)n.fromBufferAttribute(c,h).applyMatrix4(r),t=Math.min(t,n.y-e(n.x,n.z))}for(let l of a.children)o(l)}return o(i),t}function fr(i,e=()=>.003){let t=xd(i,e);if(!Number.isFinite(t))return i;let n=i.getWorldPosition(new S);return n.y+=6e-4-t,i.parent&&i.parent.worldToLocal(n),i.position.copy(n),i.updateWorldMatrix(!1,!0),i.userData.floorProp=!0,i}function rl(i,e){i.updateWorldMatrix(!0,!1);let t=i.geometry,n=t.attributes.position,s=t.parameters.radialSegments+1,r=i.matrixWorld.clone().invert(),o=new S,a=new S,c=t.parameters.radius;for(let l=0;l<n.count;l+=s){o.set(0,0,0);for(let x=0;x<s-1;x++)o.add(a.fromBufferAttribute(n,l+x).applyMatrix4(i.matrixWorld));o.divideScalar(s-1);let h=e(o.x,o.z),f=1-Ze.smoothstep(o.y-h,.055,.15),p=i.userData.anchorStart?Ze.smoothstep(l/s,0,3):1,d=i.userData.anchorEnd?Ze.smoothstep((n.count-s-l)/s,0,3):1,g=(h+c+6e-4-o.y)*f*p*d;for(let x=0;x<s;x++)a.fromBufferAttribute(n,l+x).applyMatrix4(i.matrixWorld),a.y+=g,a.applyMatrix4(r),n.setXYZ(l+x,a.x,a.y,a.z)}n.needsUpdate=!0,t.computeVertexNormals(),t.computeBoundingBox(),t.computeBoundingSphere()}function w0(i,e=()=>.003){let t=new we;t.name="Fallen nursery mobile with four soft animals",t.position.set(-1.05,0,.55);let n=48319,s=()=>(n=n*1664525+1013904223>>>0,n/4294967296),r=document.createElement("canvas");r.width=r.height=512;let o=r.getContext("2d");o.fillStyle="#c6c1ac",o.fillRect(0,0,512,512);for(let X=0;X<7e3;X++){let V=s()*512,Z=s()*512;o.strokeStyle=X%2?"rgba(58,52,36,.12)":"rgba(246,236,212,.28)",o.lineWidth=.6,o.beginPath(),o.moveTo(V,Z),o.lineTo(V+2,Z+3),o.stroke()}for(let X=0;X<45;X++){let V=s()*512,Z=s()*512,xe=8+s()*70,Ce=o.createRadialGradient(V,Z,0,V,Z,xe);Ce.addColorStop(0,"rgba(63,52,31,.15)"),Ce.addColorStop(1,"rgba(63,52,31,0)"),o.fillStyle=Ce,o.fillRect(V-xe,Z-xe,xe*2,xe*2)}function a(X){let V=new Ot(X);return V.colorSpace=pt,V.anisotropy=4,V}let c=a(r);function l(X,V=c){return new Wt({color:X,map:V,bumpMap:c,bumpScale:.0012,roughness:.96,sheen:.32,sheenColor:12433832,sheenRoughness:.95})}let h=l(13801630),f=l(14792108),p=l(7839145),d=l(5270656),g=l(14132309),x=l(15128233),m=l(3420203),u=new ze({color:6313803,roughness:1}),E=new ze({color:10525568,roughness:1}),y=new ze({color:1645337,roughness:.48}),M=new ze({color:12762273,map:c,roughness:.68,bumpMap:c,bumpScale:.001}),C=new ze({color:8159861,metalness:.65,roughness:.56}),A=document.createElement("canvas");A.width=A.height=512;let T=A.getContext("2d");T.drawImage(r,0,0),T.fillStyle="#343027";for(let X=0;X<12;X++){let V=X*45-15,Z=X%2*30;T.beginPath(),T.moveTo(V,Z),T.bezierCurveTo(V+55,105,V+8,180,V+51,268),T.lineTo(V+23,238),T.bezierCurveTo(V-12,148,V+26,93,V-9,Z),T.fill(),T.beginPath(),T.moveTo(V+25,512),T.bezierCurveTo(V+69,417,V+6,367,V+45,285),T.lineTo(V+24,314),T.bezierCurveTo(V-11,395,V+41,438,V-3,512),T.fill()}let P=l(14262365,a(A)),W=new $t(1,24,16);function v(X,V,Z=t){let xe=new ht(X,V);return xe.castShadow=!0,xe.receiveShadow=!0,Z.add(xe),xe}function b(X,V,Z,xe){let Ce=v(W,Z,xe);return Ce.position.set(...X),Ce.scale.set(...V),Ce}function B(X,V,Z,xe=t){return v(new pn(new Jt(X.map(Ce=>new S(...Ce))),Math.max(20,X.length*6),V,6,!1),Z,xe)}function k(X,V,Z,xe,Ce=t){let _e=new S(...X),ne=new S(...V),I=ne.clone().sub(_e),ye=v(new Zt(Z,Z,I.length(),12),xe,Ce);return ye.position.copy(_e).add(ne).multiplyScalar(.5),ye.quaternion.setFromUnitVectors(new S(0,1,0),I.normalize()),ye}function F(X,V,Z,xe=t){let Ce=v(new St(...X),Z,xe);return Ce.position.set(...V),Ce}function H(X,V,Z,xe){let Ce=new bt;Ce.moveTo(-.5,0),Ce.quadraticCurveTo(-.48,.44,0,1),Ce.quadraticCurveTo(.49,.49,.5,0),Ce.quadraticCurveTo(0,-.1,-.5,0);let _e=new an(Ce,{depth:.18,bevelEnabled:!0,bevelSize:.06,bevelThickness:.05,bevelSegments:2,curveSegments:8,steps:1});_e.translate(0,0,-.09);let ne=v(_e,Z,xe);return ne.scale.set(...V),ne.position.set(...X),ne}function J(X,V,Z=.092,xe=.047){for(let Ce of[-1,1])b([Ce*xe,Z,V],[.009,.012,.007],y,X)}function fe(X){let V=new we;V.name=`${X} mobile animal`;let Z=X==="Pig"?h:X==="Elephant"?p:X==="Tiger"?P:g,xe=b([0,.065,-.025],[.112,.091,.154],Z,V);xe.name="Soft body resting on the floor";for(let ne of[-1,1])b([ne*.047,.073,.08],[.077,.09,.09],Z,V);B([[0,.13,.116],[0,.092,.166],[0,.036,.16],[0,.008,.136]],.0018,u,V);for(let ne of[-1,1])for(let I of[-.106,.1]){let ye=b([ne*.11,.002,I],[.043,.043,.062],Z,V);if(ye.rotation.z=ne*.28,b([ne*.134,-.007,I+.015],[.021,.03,.041],X==="Pig"?m:X==="Elephant"?d:f,V),X==="Tiger"||X==="Fox")for(let ee=0;ee<3;ee++)b([ne*.151,-.012+(ee-1)*.014,I+.034],[.004,.004,.006],m,V)}let Ce=b([0,.102,-.17],X==="Elephant"?[.097,.094,.094]:[.09,.083,.083],Z,V);if(X==="Pig"){b([0,.08,-.244],[.049,.032,.024],f,V);for(let I of[-1,1])b([I*.019,.082,-.267],[.006,.009,.003],m,V);for(let I of[-1,1]){let ye=H([I*.061,.153,-.177],[.072,.083,.09],h,V);ye.rotation.z=-I*.35}let ne=[];for(let I=0;I<=45;I++){let ye=I/45*Math.PI*3.9,ee=.025*(1-I/70);ne.push([Math.sin(ye)*ee,.115+Math.cos(ye)*ee,.167+I/45*.028])}B(ne,.0065,f,V),J(V,-.242,.122)}else if(X==="Elephant"){for(let ne of[-1,1])b([ne*.098,.098,-.16],[.071,.08,.027],p,V),b([ne*.113,.101,-.184],[.047,.055,.009],d,V);B([[0,.099,-.24],[0,.055,-.273],[0,-.006,-.268],[.018,-.031,-.304],[.032,-.006,-.317]],.022,p,V),J(V,-.248,.127,.043),B([[0,.122,.15],[.025,.115,.185],[.042,.08,.199]],.006,d,V),b([.044,.077,.2],[.013,.018,.012],d,V)}else{for(let ne of[-1,1]){let I=H([ne*.057,.155,-.172],[.067,.071,.1],Z,V);I.rotation.z=-ne*.26,H([ne*.057,.162,-.184],[.038,.045,.055],f,V)}for(let ne of[-1,1])b([ne*.025,.076,-.235],[.035,.027,.023],x,V);if(b([0,.091,-.26],[.015,.011,.011],m,V),J(V,-.241,.124,.044),X==="Tiger")B([[0,.134,.15],[.035,.162,.193],[.067,.155,.201],[.075,.129,.182]],.012,P,V),b([.075,.129,.182],[.014,.015,.016],m,V);else{let ne=b([.042,.13,.191],[.058,.061,.131],g,V);ne.rotation.x=-.45,ne.rotation.z=-.25;let I=b([.039,.182,.271],[.045,.046,.061],x,V);I.rotation.x=-.45}}for(let ne of[-1,1])B([[ne*.1,.1,.07],[ne*.113,.065,-.02],[ne*.094,.092,-.1]],.0015,u,V);let _e=v(new Qt(.014,.004,6,16,Math.PI*1.75),E,V);return _e.position.set(0,.158,-.065),_e.rotation.x=Math.PI/2,{object:V,tab:_e,body:xe}}function ie(X,V){X.updateWorldMatrix(!0,!0);let Z=X.getWorldPosition(new S);Z.y-=xd(V,e)+.006,X.parent.worldToLocal(Z),X.position.copy(Z),X.updateWorldMatrix(!0,!0);let xe=new S,Ce=new Tt;X.traverse(_e=>{if(!_e.isMesh)return;let ne=_e.geometry.clone(),I=ne.attributes.position;Ce.copy(_e.matrixWorld).invert();let ye=!1;for(let ee=0;ee<I.count;ee++){xe.fromBufferAttribute(I,ee).applyMatrix4(_e.matrixWorld);let ae=e(xe.x,xe.z)+6e-4;xe.y>=ae||(xe.y=ae,xe.applyMatrix4(Ce),I.setXYZ(ee,xe.x,xe.y,xe.z),ye=!0)}ye?(I.needsUpdate=!0,ne.computeVertexNormals(),ne.computeBoundingBox(),ne.computeBoundingSphere(),_e.geometry=ne):ne.dispose()}),X.userData.floorProp=!0}let pe=new we;pe.name="Toppled mobile support",t.add(pe),F([.16,.055,.12],[-.6,.0305,.48],M,pe),F([.12,.028,.1],[-.6,.0765,.48],M,pe),k([-.6,.0565,.48],[-.6,.1425,.48],.012,C,pe),b([-.6,.1455,.48],[.043,.012,.02],M,pe),B([[-.59,.039,.44],[-.63,.017,.1],[-.48,.017,-.3],[-.2,.02,-.47],[.12,.019,-.39],[.19,.017,-.13],[.04,.052,0]],.013,M,pe),fr(pe,e);let N=new we;N.name="Scuffed mobile music box",N.position.set(0,.116,0),N.rotation.set(.21,0,-.18),t.add(N);let j=v(new Zt(.103,.103,.068,40),M,N),se=v(new Qt(.103,.002,6,40),u,N);se.rotation.x=Math.PI/2;let te=b([0,.039,0],[.034,.009,.034],g,N);for(let X=0;X<5;X++)F([.03,.002,.002],[-.049+X*.019,.035,.041],u,N);k([0,-.02,-.093],[0,-.02,-.145],.005,C,N),b([0,-.02,-.15],[.026,.012,.005],C,N),t.updateMatrixWorld(!0),fr(N,e);let O=[[-.37,.068,.035],[.34,.103,-.025],[.018,.058,-.33],[-.025,.075,.34]];for(let X of O)X[1]=e(t.position.x+X[0],t.position.z+X[2])+.0076,k([0,N.position.y,0],X,.007,C);for(let X of O){let V=v(new Qt(.014,.003,6,16),C);V.rotation.x=Math.PI/2,V.position.set(X[0],X[1]-.004,X[2])}let le=[{kind:"Pig",x:.29,z:.35,rear:!0,yaw:-.12,roll:.08,arm:3},{kind:"Tiger",x:-.38,z:.17,rear:!0,yaw:.36,roll:-.12,arm:0},{kind:"Elephant",x:.34,z:-.29,rear:!1,yaw:-.28,roll:-.24,arm:1},{kind:"Fox",x:-.27,z:-.43,rear:!0,yaw:1.12,roll:.2,arm:2}];for(let X of le){let{object:V,tab:Z,body:xe}=fe(X.kind);V.position.set(X.x,0,X.z),V.scale.setScalar(.88);let Ce=Math.atan2(i.x-(t.position.x+X.x),i.z-(t.position.z+X.z));V.rotation.set(X.kind==="Pig"?-.06:.03,Ce+(X.rear?0:Math.PI)+X.yaw,X.roll,"YXZ"),t.add(V),t.updateMatrixWorld(!0),ie(V,xe),t.updateMatrixWorld(!0);let _e=t.worldToLocal(Z.getWorldPosition(new S)),ne=O[X.arm],I=B([ne,[ne[0]+.06,.024,ne[2]+.08],[(ne[0]+_e.x)/2-.05,.023,(ne[2]+_e.z)/2+.08],[_e.x-.04,.025,_e.z+.035],_e.toArray()],.0021,E);I.userData.anchorStart=I.userData.anchorEnd=!0,rl(I,e);let ye=document.createElement("canvas");ye.width=ye.height=64;let ee=ye.getContext("2d"),ae=ee.createRadialGradient(32,32,5,32,32,32);ae.addColorStop(0,"rgba(0,0,0,.65)"),ae.addColorStop(.48,"rgba(0,0,0,.32)"),ae.addColorStop(1,"rgba(0,0,0,0)"),ee.fillStyle=ae,ee.fillRect(0,0,64,64);let me=new Dn().setFromObject(V),Ae=me.getSize(new S),Me=t.worldToLocal(me.getCenter(new S)),U=new wt(Ae.x+.05,Ae.z+.05,12,12);U.rotateX(-Math.PI/2),U.translate(Me.x,0,Me.z);let w=U.attributes.position;for(let ge=0;ge<w.count;ge++)w.setY(ge,e(t.position.x+w.getX(ge),t.position.z+w.getZ(ge))+2e-4);U.computeVertexNormals();let K=v(U,new xt({map:new Ot(ye),transparent:!0,depthWrite:!1}));K.name=`${X.kind} floor contact shadow`,K.castShadow=!1,K.userData.ignoreFloorContact=!0}return t}var co=new Map,yd=31.7;function CM(i){if(co.has(i))return co.get(i);let e=9678115+Math.imul(i,2654435761)>>>0,t=()=>(e=Math.imul(e,1664525)+1013904223>>>0,e/4294967296),n=[],s=.65+t()*1.4;for(;s<yd-2;){let r=2+Math.floor(t()*5);for(let o=0;o<r;o++){let a=.028+t()*.072;n.push([s,a,t()*.045,t()>.23]),s+=a+.045+t()*.16}t()<.42&&(n.push([s,.22+t()*.4,.005,!0]),s+=.75),s+=1.3+t()*4.2}return co.size>4&&co.delete(co.keys().next().value),co.set(i,n),n}function PM(i,e=!1){if(e)return[.88,.79];let t=Math.floor(i/yd),n=i-t*yd,s=CM(t);return[0,1].map(r=>{let o=r?.79:.88;for(let a=0;a<s.length;a++){let[c,l,h,f]=s[a];if(r===1&&!f)continue;let p=c+(r?(a%3-1)*.013:0),d=p+l;if(n>=p&&n<d){let g=Math.min((n-p)/.003,(d-n)/.005,1);o=Ze.lerp(o,h,Math.max(0,g))}else n>=d&&n<d+.025&&(o*=1+.16*(1-(n-d)/.025))}return o*(.985+.015*Math.sin(i*8.7+r))})}function b0(){let i=new we;i.name="Crooked failing fluorescent fixture",i.position.set(.22,2.98,-.55),i.rotation.set(.02,.12,-.075);let e=si(9673098),t=si(15065545),n=new ze({color:2369569,roughness:.9}),s=new ze({color:11183498,roughness:.72});function r(g,x,m=[0,0,0]){let u=new ht(g,x);return u.position.set(...m),u.castShadow=!0,u.receiveShadow=!0,i.add(u),u}let o=(g,x,m=e)=>r(new St(...g),m,x);function a(g,x,m,u=e){return r(new Zt(g,g,x,16),u,m)}function c(g,x=n,m=.004){return r(new pn(new Jt(g.map(u=>new S(...u))),24,m,5,!1),x)}o([1.53,.055,.32],[0,.012,0],t);for(let g of[-1,1]){let x=o([1.53,.08,.016],[0,-.033,g*.157],t);x.rotation.x=g*.25,o([1.46,.006,.012],[0,-.017,g*.121],n)}o([.38,.045,.085],[.12,.055,0],n);for(let g of[-.69,.69]){o([.065,.05,.275],[g,-.02,0],e);for(let x of[-.132,.132]){let m=a(.012,.012,[g,-.051,x]);o([.016,.002,.003],[g,-.058,x],n),m.rotation.z=.05}}let l=[];for(let[g,x]of[-.078,.078].entries()){let m=document.createElement("canvas");m.width=512,m.height=64;let u=m.getContext("2d"),E=u.createLinearGradient(0,0,512,0);E.addColorStop(0,"#29271f"),E.addColorStop(.035,"#5a5948"),E.addColorStop(.09,"#b4b9a0"),E.addColorStop(.19,"#d9dfc4"),E.addColorStop(.77,"#d0d8bd"),E.addColorStop(.93,"#92977e"),E.addColorStop(.98,"#383c32"),E.addColorStop(1,"#272b22"),u.fillStyle=E,u.fillRect(0,0,512,64);for(let A=0;A<170;A++){let T=A*73.29%512,P=A*23.87%64;u.fillStyle="rgba(35,36,24,.12)",u.fillRect(T,P,1+A%5,1)}let y=new Ot(m);y.colorSpace=pt,y.center.set(.5,.5),y.rotation=Math.PI/2;let M=new ze({map:y,emissiveMap:y,emissive:15003084,emissiveIntensity:2,roughness:.27});l.push(M);let C=a(.019,1.34,[0,-.073,x],M);C.rotation.z=Math.PI/2,C.castShadow=!1;for(let A of[-1,1]){let T=a(.021,.035,[A*.657,-.073,x],e);T.rotation.z=Math.PI/2,o([.037,.075,.056],[A*.704,-.045,x],s);for(let P of[-.007,.007]){let W=a(.0025,.024,[A*.684,-.073,x+P],e);W.rotation.z=Math.PI/2}}c([[-.73,.03,x],[-.77,-.01,x],[-.72,-.04,x+.025]],g?n:new ze({color:7031093,roughness:.8}))}let h=a(.015,.034,[.54,-.035,0],s);h.rotation.x=.08,c([[.57,-.02,.15],[.59,-.15,.17],[.68,-.13,.18],[.68,-.035,.15]],e,.004),c([[.72,.04,0],[.82,.09,.03],[.89,.19,.04],[1.02,.31,.03]],n,.006);let f=new Fn(11647895,.25,1.2,2);f.position.set(0,.1,0),i.add(f);function p(g,x){let m=PM(g,x);return l.forEach((u,E)=>u.emissiveIntensity=m[E]*2.9),f.intensity=(m[0]+m[1])*.2,(m[0]+m[1])/1.67}function d(g){for(let x of[e,t])x.envMap=g,x.needsUpdate=!0}return p(0,!1),{group:i,update:p,setEnvironment:d}}function ol(i){let e=Math.max(0,Math.ceil(i));return`${String(Math.floor(e/60)).padStart(2,"0")}:${String(e%60).padStart(2,"0")}`}function T0(i=300,e=()=>performance.now()/1e3){let t=null;return{start(){return t!==null?!1:(t=e()+i,!0)},reset(){t=null},get remainingSeconds(){return t===null?i:Math.max(0,Math.ceil(t-e()))},get status(){return t===null?"waiting":e()>=t?"finished":"running"}}}function R0(i,e){let t=new we;t.name="Five-minute red LED countdown timer",t.position.copy(e),t.position.y=.006,t.rotation.y=Math.atan2(i.x-e.x,i.z-e.z)-Ze.degToRad(16),t.scale.setScalar(.72);let n=T0(),s=new we;s.position.y=.13,s.rotation.x=-.24,t.add(s);let r=document.createElement("canvas");r.width=512,r.height=256;let o=r.getContext("2d");o.fillStyle="#555951",o.fillRect(0,0,512,256);let a=7418,c=()=>(a=a*1664525+1013904223>>>0,a/4294967296);for(let te=0;te<1800;te++)o.fillStyle=te%4?"rgba(13,16,12,.18)":"rgba(180,171,142,.26)",o.fillRect(c()*512,c()*256,1+c()*4,1+c()*2);for(let te=0;te<35;te++){o.strokeStyle="rgba(194,190,163,.24)",o.lineWidth=.6;let O=c()*512,le=c()*256;o.beginPath(),o.moveTo(O,le),o.lineTo(O+8+c()*39,le+c()*5),o.stroke()}let l=new Ot(r);l.colorSpace=pt;let h=new ze({color:3619894,map:l,bumpMap:l,bumpScale:7e-4,roughness:.82}),f=new ze({color:527113,roughness:.66}),p=new ze({color:7828326,metalness:.65,roughness:.68});function d(te,O,le=s){let X=new ht(te,O);return X.castShadow=!0,X.receiveShadow=!0,le.add(X),X}function g(te,O,le,X=s){let V=d(new St(...te),le,X);return V.position.set(...O),V}let x=new bt,m=.59,u=.19,E=.022;x.moveTo(-m/2+E,-u/2),x.lineTo(m/2-E,-u/2),x.quadraticCurveTo(m/2,-u/2,m/2,-u/2+E),x.lineTo(m/2,u/2-E),x.quadraticCurveTo(m/2,u/2,m/2-E,u/2),x.lineTo(-m/2+E,u/2),x.quadraticCurveTo(-m/2,u/2,-m/2,u/2-E),x.lineTo(-m/2,-u/2+E),x.quadraticCurveTo(-m/2,-u/2,-m/2+E,-u/2);let y=new an(x,{depth:.174,bevelEnabled:!0,bevelSize:.006,bevelThickness:.006,bevelSegments:3,steps:1,curveSegments:10});y.translate(0,0,-.087),d(y,h),g([.538,.16,.01],[0,0,.096],f);let M=g([.518,.143,.002],[0,0,.11],new Wt({color:5511450,transparent:!0,opacity:.09,depthWrite:!1,roughness:.22,clearcoat:1,clearcoatRoughness:.1}));M.castShadow=!1;for(let te of[-.279,.279])for(let O of[-.071,.071]){let le=d(new Zt(.008,.008,.006,12),p);le.rotation.x=Math.PI/2,le.position.set(te,O,.098),g([.01,.0015,.001],[te,O,.102],f)}for(let te of[-.23,.23])for(let O of[-.06,.06])g([.052,.016,.052],[te,.008,O],f,t);for(let te of[-1,1])for(let O=0;O<6;O++)g([.002,.04,.006],[te*.301,-.018,-.061+O*.019],f);let C=document.createElement("canvas");C.width=512,C.height=64;let A=C.getContext("2d");A.font="500 20px monospace",A.fillStyle="#8e8b7a",A.textAlign="center",A.fillText("MIN",128,42),A.fillText("SEC",384,42);let T=new Ot(C);T.colorSpace=pt;let P=d(new wt(.43,.018),new xt({map:T,transparent:!0,depthWrite:!1}));P.position.set(0,.069,.104),P.castShadow=!1;let W=new xt({color:16721943,toneMapped:!1}),v=new xt({color:2295557,toneMapped:!1}),b=new xt({color:16718087,transparent:!0,opacity:.12,depthWrite:!1,blending:_c,toneMapped:!1}),B=new bt,k=.066,F=.01,H=.005;B.moveTo(-k/2,0),B.lineTo(-k/2+H,F/2),B.lineTo(k/2-H,F/2),B.lineTo(k/2,0),B.lineTo(k/2-H,-F/2),B.lineTo(-k/2+H,-F/2),B.closePath();let J=new Oi(B),fe=["abcdef","bc","abdeg","abcdg","bcfg","acdfg","acdefg","abc","abcdefg","abcdfg"],ie={a:[0,.058,0],b:[.036,.029,1],c:[.036,-.029,1],d:[0,-.058,0],e:[-.036,-.029,1],f:[-.036,.029,1],g:[0,0,0]},pe=[];for(let te of[-.187,-.081,.081,.187]){let O=new we;O.position.set(te,-.005,.106),s.add(O);let le=[];for(let[X,[V,Z,xe]]of Object.entries(ie)){let Ce=d(J,v,O);Ce.position.set(V,Z,0),Ce.rotation.z=xe?Math.PI/2:0,Ce.scale.x=xe?.76:1,Ce.castShadow=!1;let _e=d(J,b,O);_e.position.set(V,Z,-2e-4),_e.rotation.z=Ce.rotation.z,_e.scale.set(Ce.scale.x*1.12,1.9,1),_e.castShadow=!1,le.push({key:X,segment:Ce,glow:_e})}pe.push(le)}for(let te of[-.025,.015]){let O=d(new Ei(.005,16),W);O.position.set(0,te,.106),O.castShadow=!1}let N=new Fn(16718344,.12,.7,2);N.position.set(0,.06,.16),s.add(N);let j=-1;function se(){let te=n.remainingSeconds;if(te!==j){let O=ol(te).replace(":","");pe.forEach((le,X)=>{let V=fe[Number(O[X])];for(let Z of le){let xe=V.includes(Z.key);Z.segment.material=xe?W:v,Z.glow.visible=xe}}),j=te}return te}return se(),{group:t,start:()=>n.start(),reset(){n.reset(),se()},update:se,get status(){return n.status}}}function vd(i,e,t,n){let s=n/2,r=s/2;i.save(),i.translate(e,t);function o(a,c){i.fillStyle=c,i.beginPath(),i.moveTo(s,a),i.lineTo(r,a),i.arc(r,a+r,r,-Math.PI/2,Math.PI/2,!0),i.lineTo(s,a+s),i.closePath(),i.fill()}o(0,"#f24e1e"),o(s,"#a259ff"),i.fillStyle="#ff7262",i.beginPath(),i.moveTo(s,0),i.lineTo(s+r,0),i.arc(s+r,r,r,-Math.PI/2,Math.PI/2),i.lineTo(s,s),i.closePath(),i.fill(),i.fillStyle="#1abcfe",i.beginPath(),i.arc(s+r,s+r,r,0,Math.PI*2),i.fill(),i.fillStyle="#0acf83",i.beginPath(),i.moveTo(s,2*s),i.lineTo(s,2*s+r),i.arc(r,2*s+r,r,0,Math.PI*1.5),i.closePath(),i.fill(),i.restore()}function A0(i){let e=new we;e.name="Worn handsaw beside the countdown timer",e.position.copy(i).add(new S(-.34,0,.25)),e.position.y=0,e.rotation.y=-.12,e.rotation.z=.026;let t=new we;t.rotation.x=-Math.PI/2,e.add(t);let n=si(12963014);n.bumpScale=45e-5;let s=new ze({color:11121068,metalness:.72,roughness:.38}),r=new ze({color:10258264,metalness:.68,roughness:.62}),o=new ze({color:3156253,roughness:1}),a=new Uint8Array(256*256*4),c=1903;for(let y=0;y<256;y++)for(let M=0;M<256;M++){c=1664525*c+1013904223>>>0;let C=Math.sin(y*.54+Math.sin(M*.026)*2)*5+Math.sin(y*1.4+M*.012)*3,A=(c>>>24)/255,T=A>.99?28:0,P=(y*256+M)*4;a[P]=98+C+A*12+T,a[P+1]=57+C*.7+A*9+T,a[P+2]=30+C*.3+A*6+T,a[P+3]=255}let l=new ji(a,256,256);l.colorSpace=pt,l.needsUpdate=!0,l.magFilter=gn;let h=new ze({map:l,roughness:.83,bumpMap:l,bumpScale:5e-4});function f(y,M,C=t){let A=new ht(y,M);return A.castShadow=!0,A.receiveShadow=!0,C.add(A),A}function p(y,M,C,A){let T=new an(y,{depth:M,bevelEnabled:C>0,bevelSize:C,bevelThickness:C,bevelSegments:2,curveSegments:24});T.translate(0,0,-M/2);let P=T.attributes.uv;for(let W=0;W<P.count;W++)P.setXY(W,(P.getX(W)+.37)/.72,(P.getY(W)+.115)/.23);return f(T,A)}let d=new bt;d.moveTo(-.36,.035),d.lineTo(.19,.081),d.lineTo(.205,-.083);let g=38;for(let y=g;y>=0;y--){let M=-.36+y/g*.55,C=-.035-(M+.36)/.55*.048;d.lineTo(M,C),y>0&&d.lineTo(M-.55/g*.4,C-.009)}d.lineTo(-.365,.025),d.closePath();let x=p(d,.0028,35e-5,[n,s]);x.name="Tapered pitted steel blade with saw teeth";let m=new bt;m.moveTo(.145,.092),m.bezierCurveTo(.19,.119,.31,.116,.338,.079),m.lineTo(.326,-.079),m.quadraticCurveTo(.314,-.111,.278,-.102),m.lineTo(.172,-.085),m.quadraticCurveTo(.153,-.07,.157,-.047),m.lineTo(.17,.046),m.closePath();let u=new Mi;u.moveTo(.214,.055),u.quadraticCurveTo(.24,.072,.283,.055),u.lineTo(.283,-.057),u.quadraticCurveTo(.253,-.065,.226,-.052),u.lineTo(.209,.032),u.closePath(),m.holes.push(u);let E=p(m,.026,.006,h);E.name="Worn wooden open grip";for(let[y,M]of[[.176,.055],[.183,-.053],[.199,.003]])for(let C of[-1,1]){let A=f(new Zt(.006,.006,.0035,18),r);A.rotation.x=Math.PI/2,A.position.set(y,M,C*.02);let T=f(new St(.007,.0012,6e-4),o);T.position.set(y,M,C*.022),T.rotation.z=.35}return{group:e,setEnvironment(y){n.envMap=s.envMap=r.envMap=y;for(let M of[n,s,r])M.envMapIntensity=.9,M.needsUpdate=!0}}}function al({flies:i=10,moths:e=5,spread:t=[.82,.17,.47],seed:n=29,sizeScale:s=1,dive:r=0}={}){let o=new we;o.name="Flies and moths circling the light";let a=new $t(1,8,6),c=new ze({color:1382678,roughness:.65}),l=new ze({color:5589814,roughness:1}),h=new ze({color:12899016,roughness:.35,transparent:!0,opacity:.58,depthWrite:!1,side:Lt}),f=document.createElement("canvas");f.width=f.height=128;let p=f.getContext("2d");p.fillStyle="#b8aa83",p.fillRect(0,0,128,128);for(let pe=0;pe<190;pe++)p.fillStyle=pe%2?"#89795255":"#e2d3ab66",p.fillRect(pe*47%128,pe*73%128,2,1);p.strokeStyle="#695c3d",p.lineWidth=4,p.beginPath(),p.moveTo(76,0),p.quadraticCurveTo(99,60,76,128),p.stroke(),p.fillStyle="#5b5039",p.beginPath(),p.ellipse(57,68,13,18,.25,0,Math.PI*2),p.fill(),p.fillStyle="#d5c59a",p.beginPath(),p.ellipse(57,68,6,9,.25,0,Math.PI*2),p.fill(),p.strokeStyle="#75684788",p.lineWidth=1;for(let pe=0;pe<5;pe++)p.beginPath(),p.moveTo(0,64),p.lineTo(128,12+pe*26),p.stroke();let d=new Ot(f);d.colorSpace=pt;let g=new ze({map:d,roughness:.9,side:Lt,emissive:10127718,emissiveMap:d,emissiveIntensity:.15});function x(pe){let N=new bt;N.moveTo(0,-.008),pe?(N.bezierCurveTo(.02,-.031,.052,-.036,.058,-.018),N.bezierCurveTo(.06,-.007,.044,.004,.039,.009),N.bezierCurveTo(.047,.026,.023,.034,.013,.019)):(N.bezierCurveTo(.008,-.021,.03,-.024,.033,-.013),N.bezierCurveTo(.035,-.003,.015,.016,.005,.012)),N.lineTo(0,.008),N.closePath();let j=new Oi(N,10),se=j.attributes.position,te=j.attributes.uv;for(let O=0;O<se.count;O++)te.setXY(O,se.getX(O)/.06,(se.getY(O)+.036)/.07);return j.rotateX(-Math.PI/2),j}function m(pe,N,j,se){let te=new vn(pe,N,j);return te.name=se,te.instanceMatrix.setUsage(Un),te.frustumCulled=!1,te.raycast=()=>{},o.add(te),te}let u=m(a,c,i*2,"Small dark flies"),E=m(a,l,e*2,"Moth bodies"),y=m(x(!1),h,i*2,"Translucent fly wings"),M=m(x(!0),g,e*2,"Dusty patterned moth wings"),C=new Ft,A=new S,T=new S,P=new S,W=new S(0,0,-1),v=new S(0,0,1),b=new S(0,1,0),B=new S,k=new mt,F=new mt,H=new mt().setFromAxisAngle(b,Math.PI),J=Array.from({length:i+e},(pe,N)=>({moth:N>=i,index:N>=i?N-i:N,phase:N*2.399+n*.17,size:s*(.72+(N*17+n)%13/28),speed:N>=i?.95+N%3*.23:1.8+N%4*.46}));function fe(pe,N,j){let se=pe*N.speed+N.phase,te=N.phase,O=N.moth?.72:.46;return j.set(t[0]*(O*Math.cos(se)+.17*Math.sin(se*2.37+te)),t[1]*(.7*Math.sin(se*1.73+te)+.23*Math.cos(se*4.13)),t[2]*(O*Math.sin(se*.91)+.18*Math.cos(se*2.71-te))),j.y-=r*(N.moth?1:.38)*Math.pow(.5+.5*Math.sin(se*.43+te),6),N.moth||(j.x+=.035*Math.sin(se*7.3),j.y+=.014*Math.cos(se*9.7)),j}function ie(pe,N=!1,j=1){let se=N?0:pe;for(let te of J){let{moth:O,index:le,phase:X,size:V}=te,Z=O?E:u,xe=O?M:y;fe(se,te,A),fe(se+.012,te,T),P.copy(T).sub(A).normalize(),k.setFromUnitVectors(W,P),F.setFromAxisAngle(v,.25*Math.sin(se*2.1+X)),k.multiply(F),C.position.copy(A),C.quaternion.copy(k),C.scale.set(O?.006:.0065,O?.007:.0055,O?.021:.011).multiplyScalar(V),C.updateMatrix(),Z.setMatrixAt(le*2,C.matrix),B.set(0,0,O?-.022:-.013).applyQuaternion(k),C.position.copy(A).addScaledVector(B,V),C.scale.setScalar((O?.006:.0068)*V),C.updateMatrix(),Z.setMatrixAt(le*2+1,C.matrix);let Ce=N?.42:.18+Math.sin(se*(O?39:92)+X)*(O?.9:.74);for(let[_e,ne]of[-1,1].entries())B.set(ne*.004,0,0).applyQuaternion(k),C.position.copy(A).addScaledVector(B,V),F.setFromAxisAngle(v,ne*Ce),C.quaternion.copy(k).multiply(F),ne<0&&C.quaternion.multiply(H),C.scale.setScalar(V),C.updateMatrix(),xe.setMatrixAt(le*2+_e,C.matrix)}g.emissiveIntensity=.055+.14*Math.max(0,j);for(let te of[u,E,y,M])te.instanceMatrix.needsUpdate=!0}return ie(0),{group:o,update:ie}}var lo=3,IM=2.8;function LM(i,e){return e<-1.55||Math.abs(i)>2.55&&e<.45}var pr=(i,e)=>Math.hypot(i.x-e.x,i.z-e.z);function DM(i){let o=[],a=new Dn,c=new S;i.updateWorldMatrix(!0,!0);function l(g){if(g.visible){g.isMesh&&!g.isInstancedMesh&&g.geometry&&(g.geometry.computeBoundingBox(),a.copy(g.geometry.boundingBox).applyMatrix4(g.matrixWorld),a.getSize(c),a.min.y<.13&&a.max.y>.1&&c.y>.065&&Math.min(c.x,c.z)>.018&&o.push({x0:a.min.x-.15,x1:a.max.x+.15,z0:a.min.z-.15,z1:a.max.z+.15}));for(let x of g.children)l(x)}}for(let g of i.children)l(g);let h=Array.from({length:1763},(g,x)=>{let m=x%41,u=Math.floor(x/41),E=-3.6+m*.18,y=-3.65+u*.18;return{id:x,col:m,row:u,x:E,z:y,free:LM(E,y)&&!o.some(M=>E>=M.x0&&E<=M.x1&&y>=M.z0&&y<=M.z1),neighbors:[]}});for(let g of h)if(g.free)for(let x=-1;x<=1;x++)for(let m=-1;m<=1;m++){if(!m&&!x)continue;let u=g.col+m,E=g.row+x;if(u<0||u>=41||E<0||E>=43)continue;let y=h[E*41+u];y.free&&(!m||!x||h[g.row*41+u].free&&h[E*41+g.col].free)&&g.neighbors.push(y.id)}let f=h.filter(g=>g.free&&g.neighbors.length);function p(g,x,m){return(m?f.filter(E=>pr(E,m)>=lo):f).reduce((E,y)=>!E||(y.x-g)**2+(y.z-x)**2<(E.x-g)**2+(E.z-x)**2?y:E,null)}function d(g,x,m){let u=new Int32Array(h.length).fill(-1),E=[g];u[g]=g;for(let T=0;T<E.length;T++){let P=h[E[T]],W=pr(P,m);for(let v of P.neighbors){let b=pr(h[v],m);u[v]<0&&(b>=lo||b>W+.001)&&(u[v]=P.id,E.push(v))}}let y=h[g],M=E.filter(T=>{let P=h[T],W=Math.hypot(P.x-y.x,P.z-y.z);return W>.8&&W<2.8&&pr(P,m)>=lo});if(!M.length)return[];let C=M[Math.floor(x()*M.length)],A=[];for(;C!==g;)A.push(h[C]),C=u[C];return A.reverse()}return{closest:p,path:d}}function C0({room:i,floorSupport:e,viewerPosition:t,seed:n=Math.floor(Math.random()*4294967295)}){let s=new we;s.name="Tiny mice and rats darting through distant shadows",s.userData.ignoreAcid=!0;let r=n>>>0,o=()=>(r=r*1664525+1013904223>>>0,r/4294967296),a=DM(i),c=new Ft,l=new S,h=new S,f=new S,p=new S(0,1,0),d=document.createElement("canvas");d.width=d.height=128;let g=d.getContext("2d");g.fillStyle="#e8e3d9",g.fillRect(0,0,128,128);for(let se=0;se<1400;se++){g.strokeStyle=se%3?"#7d766f30":"#ffffff66";let te=o()*128,O=o()*128;g.beginPath(),g.moveTo(te,O),g.lineTo(te+(o()-.5)*2,O+3+o()*5),g.stroke()}let x=new Ot(d);x.colorSpace=pt;let m=new ze({map:x,roughness:.96}),u=new ze({roughness:.72}),E=new ze({roughness:.88});function y(se,te,O,le){let X=new vn(se,te,O);return X.name=le,X.instanceMatrix.setUsage(Un),X.frustumCulled=!1,X.castShadow=!0,X.receiveShadow=!0,X.raycast=()=>{},s.add(X),X}let M=[[-2.75,-2.75],[-3.1,-.55],[2.65,-2.85]],C=M.length,A=new $t(1,14,9),T=y(A,m,C*6,"Furry rat and mouse bodies"),P=y(A,u,C*9,"Ears, eyes, noses and running paws"),W=y(new Zt(1,1,1,7),E,C*9,"Long tapered swishing tails"),v=new Float32Array(C*4*2*3),b=new Pt;b.setAttribute("position",new fn(v,3).setUsage(Un));let B=new to(b,new cr({color:12300704,transparent:!0,opacity:.45}));B.frustumCulled=!1,B.raycast=()=>{},s.add(B);let k=[5327684,5854283,4539454],F=M.map(([se,te],O)=>{let le=a.closest(se,te,t)||a.closest(se,te),X=O!==0;return{mouse:X,cell:le.id,x:le.x,z:le.z,yaw:o()*Math.PI*2,size:.28*(X?.58+o()*.08:.92+o()*.12),color:new dt(k[O]),phase:o()*6.28,speed:3.6*(X?1.05+o()*.3:.88+o()*.25),route:[],pause:1.2+O*1.6+o()*2,gait:0,moving:!1,visibility:1}}),H=new dt(7889757),J=new dt(6771019),fe=new dt(1118478),ie=null;function pe(se,te,O,le,X=l){let V=Math.cos(se.yaw),Z=Math.sin(se.yaw),xe=se.size*se.visibility;return X.set(se.x+(te*V+le*Z)*xe,e(se.x,se.z)+O*xe,se.z+(-te*Z+le*V)*xe)}function N(se,te,O,le,X,V,Z=0){pe(O,...le),c.position.copy(l),c.rotation.set(0,O.yaw,Z),c.scale.set(...X).multiplyScalar(O.size*O.visibility),c.updateMatrix(),se.setMatrixAt(te,c.matrix),se.setColorAt(te,V)}function j(se,te=!1,O=t){let le=ie===null?0:Math.min(.1,Math.max(0,se-ie));ie=se;let X=0;for(let[V,Z]of F.entries()){let ae=function(me,Ae){let Me=me/9;return pe(Z,Math.sin(Me*3.5+Ce*(Z.moving?8:1.6)+Z.phase)*.045*Me,.026*(1-Me)+.009,.126+ee*Me,Ae)};Z.moving=!1;let xe=pr(Z,O);if(Z.visibility=Ze.smoothstep(xe,IM,lo+.25),!te){let me=Z.route[0];if(me&&pr(me,O)<lo&&pr(me,O)<=xe&&(Z.route=[]),xe<lo+.35&&(Z.pause=0),Z.pause>0)Z.pause-=le;else{Z.route.length||(Z.route=a.path(Z.cell,o,O));let Ae=Z.speed*le;for(;Z.route.length&&Ae>0;){let Me=Z.route[0],U=Me.x-Z.x,w=Me.z-Z.z,K=Math.hypot(U,w),ge=Math.min(K,Ae);if(Z.moving=!0,Z.gait+=ge*45,Ae-=ge,K>1e-4){Z.x+=U/K*ge,Z.z+=w/K*ge;let be=Math.atan2(-U,-w),Ee=Ze.euclideanModulo(be-Z.yaw+Math.PI,Math.PI*2)-Math.PI;Z.yaw+=Ee*(1-Math.exp(-le*28))}ge>=K-1e-4&&(Z.x=Me.x,Z.z=Me.z,Z.cell=Me.id,Z.route.shift(),Z.route.length||(Z.pause=3+o()*5))}!Z.route.length&&!Z.moving&&(Z.pause=1)}}let Ce=te?0:se,_e=Z.moving?Math.abs(Math.sin(Z.gait))*.005:Math.sin(Ce*3+Z.phase)*.0015,ne=Z.moving?0:Math.sin(Ce*12+Z.phase)*.002,I=V*6,ye=V*9;N(T,I,Z,[0,.077+_e,0],[.068,.063,.125],Z.color),N(T,I+1,Z,[0,.081+_e,.068],[.07,.069,.071],Z.color),N(T,I+2,Z,[0,.078+_e,-.115],[.046,.044,.066],Z.color),N(T,I+3,Z,[0,.057+_e+ne,-.177],[.03,.024,.05],Z.color);for(let[me,Ae]of[-1,1].entries()){let Me=Z.mouse?1.23:.88;N(T,I+4+me,Z,[Ae*.044,.126+_e,-.102],[.03*Me,.038*Me,.012],Z.color,Ae*.2),N(P,ye+me,Z,[Ae*.044,.128+_e,-.113],[.022*Me,.028*Me,.004],H,Ae*.2),N(P,ye+2+me,Z,[Ae*.032,.094+_e,-.149],[.007,.008,.007],fe)}N(P,ye+4,Z,[0,.057+_e+ne,-.221],[.011,.009,.009],J);for(let me=0;me<4;me++){let Ae=me%2?-1:1,Me=me>1,U=Z.gait+(me===0||me===3?0:Math.PI),w=Z.moving?Math.max(0,Math.sin(U))*.023:0,K=Z.moving?Math.cos(U)*.027:0;N(P,ye+5+me,Z,[Ae*(Me?.055:.043),.01+w,(Me?.08:-.087)+K],[.018,.01,.031],H)}let ee=Z.mouse?.23:.29;for(let me=0;me<9;me++){ae(me,l),ae(me+1,h),f.copy(h).sub(l);let Ae=f.length();c.position.copy(l).add(h).multiplyScalar(.5),c.quaternion.setFromUnitVectors(p,f.normalize());let Me=(.009*(1-me/9)+.001)*Z.size*Z.visibility;c.scale.set(Me,Ae,Me),c.updateMatrix(),W.setMatrixAt(V*9+me,c.matrix),W.setColorAt(V*9+me,H)}for(let me of[-1,1])for(let Ae=0;Ae<2;Ae++)pe(Z,me*.018,.061+_e,-.195),l.toArray(v,X),X+=3,pe(Z,me*.08,.062+_e+ne,-.2+Ae*.027),l.toArray(v,X),X+=3}for(let V of[T,P,W])V.instanceMatrix.needsUpdate=!0,V.instanceColor.needsUpdate=!0;b.attributes.position.needsUpdate=!0}return j(0),{group:s,update:j}}function P0(){let i="drawer",e=!1,t=8;function n(s,r=!1){return r?"Detach your shackle before using the charger.":s==="drawer"?(e=!e,e?"Drawer opened. Take the MacBook charger and cable.":"Drawer closed."):s==="charger"?i!=="drawer"?"You already collected the charger.":e?(i="carrying","Charger collected. Plug it into the power strip behind you."):"Open the rear drawer first.":s==="strip"?i==="drawer"?"The power strip is on. Find the charger in the rear drawer.":i==="carrying"?(i="powered","Charger plugged in. Connect its cable to the MacBook."):i==="charging"?"The MacBook is charging.":"The charger has power. Connect the MacBook.":s==="laptop"?i==="powered"?(i="charging","Cable connected. The MacBook is charging."):i==="charging"?`MacBook battery: ${Math.floor(t)}%.`:i==="carrying"?"Plug the charger into the power strip first.":"Find the charger in the rear drawer.":""}return{use:n,update(s){i==="charging"&&(t=Math.min(100,t+Math.max(0,s)*.65))},reset(){i="drawer",e=!1,t=8},get phase(){return i},get drawerOpen(){return e},get battery(){return t},get nextAction(){return i==="drawer"?e?"charger":"drawer":i==="carrying"?"strip":i==="powered"?"laptop":null}}}function I0({filing:i,laptop:e,floorSupport:t,drawerMaterial:n}){let s=new we;s.name="Interactive MacBook charging kit";let r=new Fn(10794149,1.5,2.8,2);r.position.set(1.55,1.25,3.25),s.add(r);let o=P0(),a=new ze({color:14275780,roughness:.51}),c=new ze({color:15131609,roughness:.42}),l=new ze({color:2435105,roughness:.88}),h=new ze({color:9082261,roughness:.4,metalness:.7}),f=new xt({color:16757557}),p=new xt({color:9422728});function d(ee,ae,me=s){let Ae=new ht(ee,ae);return Ae.castShadow=!0,Ae.receiveShadow=!0,me.add(Ae),Ae}function g(ee,ae,me,Ae){let Me=d(new St(...ee),me,Ae);return Me.position.set(...ae),Me}function x(ee,ae,me,Ae){let[Me,U,w]=ee,K=Math.min(.012,U*.24),ge=new bt,be=Me/2,Ee=U/2;ge.moveTo(-be+K,-Ee),ge.lineTo(be-K,-Ee),ge.quadraticCurveTo(be,-Ee,be,-Ee+K),ge.lineTo(be,Ee-K),ge.quadraticCurveTo(be,Ee,be-K,Ee),ge.lineTo(-be+K,Ee),ge.quadraticCurveTo(-be,Ee,-be,Ee-K),ge.lineTo(-be,-Ee+K),ge.quadraticCurveTo(-be,-Ee,-be+K,-Ee);let Be=Math.min(.004,w/6),Oe=new an(ge,{depth:w-2*Be,bevelEnabled:!0,bevelSize:Be,bevelThickness:Be,bevelSegments:2,curveSegments:5});Oe.translate(0,0,-w/2+Be);let Xe=d(Oe,me,Ae);return Xe.position.set(...ae),Xe}function m(ee,ae,me,Ae=s){return d(new pn(new Jt(ee.map(Me=>Me.isVector3?Me:new S(...Me))),48,ae,7,!1),me,Ae)}function u(ee,ae,me,Ae,Me){let U=document.createElement("canvas");U.width=512,U.height=128;let w=U.getContext("2d");w.fillStyle="#c4c4b6",w.fillRect(0,0,512,128),w.fillStyle="#353b35",w.font="600 58px Arial",w.textAlign="center",w.fillText(ee,256,85,480);let K=new Ot(U);K.colorSpace=pt;let ge=d(new wt(ae,me),new ze({map:K,roughness:.9}),Me);return ge.position.set(...Ae),ge}let E=new we;E.name="Rear drawer containing the MacBook charger",E.userData.chargingAction="drawer",E.position.set(-.38,.56,0),i.add(E),g([.71,.32,.025],[0,0,.231],n,E),x([.22,.022,.028],[0,.04,.264],h,E),u("CHARGERS",.2,.047,[0,-.065,.246],E),g([.66,.018,.36],[0,-.145,.025],n,E);for(let ee of[-.33,.33])g([.015,.27,.36],[ee,-.01,.025],n,E);g([.66,.27,.015],[0,-.01,-.155],n,E);for(let ee of[-.348,.348])g([.013,.027,.43],[ee,-.08,.015],h,E);let y=new we;y.name="MacBook USB-C power adapter",y.userData.chargingAction="charger",E.add(y),y.position.set(.105,-.097,.045),x([.145,.075,.145],[0,0,0],c,y),g([.147,.001,.147],[0,-.009,0],a,y);for(let ee of[-.016,.016])g([.005,.025,.015],[ee,-.049,0],h,y);g([.003,.015,.027],[.074,.006,0],l,y),u("96W USB-C",.086,.022,[0,.009,.075],y).material.color.setHex(10066834);let C=new we;C.name="Coiled charger cable",C.userData.chargingAction="charger",E.add(C),C.position.set(-.145,-.127,.06);let A=[];for(let ee=0;ee<=120;ee++){let ae=ee/120*Math.PI*6;A.push([Math.cos(ae)*(.086+ee*12e-5),ee*45e-6,Math.sin(ae)*.06])}m(A,.0045,c,C),x([.041,.014,.019],[.12,.01,0],c,C),g([.014,.009,.014],[.145,.01,0],h,C);let T=new we;T.name="Powered floor power strip",T.userData.chargingAction="strip",T.position.set(1.94,t(1.94,3.72)+.032,3.72),T.rotation.y=-.16,s.add(T),x([.51,.055,.12],[0,0,0],a,T);for(let ee of[-.16,-.055,.05,.155]){g([.079,.001,.082],[ee,.029,0],c,T);for(let me of[-.02,.02])g([.021,.002,.006],[ee-.009,.031,me],l,T);let ae=d(new Ei(.007,12),l,T);ae.rotation.x=-Math.PI/2,ae.position.set(ee+.022,.031,0)}let P=x([.035,.011,.057],[.224,.032,0],new ze({color:10303786,roughness:.4}),T);P.rotation.z=.07,g([.008,.002,.02],[.224,.039,0],p,T);let W=x([.12,.16,.018],[2.15,.27,4.424],a,s);for(let ee of[.235,.3]){g([.065,.042,.006],[2.15,ee,4.411],c,s);for(let ae of[2.136,2.164])g([.005,.016,.003],[ae,ee+.004,4.406],l,s)}x([.054,.043,.055],[2.15,.3,4.383],l,s);let v=T.localToWorld(new S(-.265,0,0));m([v,[1.57,.018,3.8],[1.61,.015,4.04],[1.98,.015,4.25],[2.16,.07,4.34],[2.15,.3,4.35]],.007,l).raycast=()=>{};let b=new we;b.name="MacBook charging port",b.userData.chargingAction="laptop",b.position.set(-.453,.002,-.18),e.object.add(b),g([.005,.01,.035],[0,0,0],l,b);let B=d(new St(.045,.048,.085),new xt({transparent:!0,opacity:0,colorWrite:!1,depthWrite:!1}),b);B.castShadow=!1;let k=new we;k.name="Connected MacBook charging cable",k.visible=!1,s.add(k),x([.051,.018,.032],[0,0,0],c,k),g([.013,.01,.026],[.03,0,0],h,k);let F=g([.01,.003,.007],[.005,.011,0],f,k);F.castShadow=!1;let H=document.createElement("canvas");H.width=512,H.height=96;let J=H.getContext("2d"),fe=new Ot(H);fe.colorSpace=pt;let ie=d(new wt(.245,.046),new xt({map:fe}),e.screen);ie.name="MacBook battery charge readout",ie.position.set(.282,.235,.001),ie.visible=!1,ie.castShadow=!1;let pe=0,N=-1/0,j=-1/0,se=null,te=-1,O="",le=null,X=new S,V=new S,Z=new S;function xe(ee,ae){return new S(ee,t(ee,ae)+.008,ae)}function Ce(ee){let ae=se?.geometry;y.getWorldPosition(V),V.x+=.08,V.y+=.005,k.getWorldPosition(X);let me=[V.clone(),xe(1.86,3.5),xe(1.53,3.27),xe(1.33,2.99),xe(.83,2.82),xe(X.x-.13,X.z+.12),X.clone().add(new S(-.031,0,0).applyAxisAngle(new S(0,1,0),e.object.rotation.y))],Ae=new pn(new Jt(me),80,.0045,7,!1),Me=Ae.attributes.position;for(let U=0;U<Me.count;U++)Me.setY(U,Math.max(Me.getY(U),t(Me.getX(U),Me.getZ(U))+.002));Ae.computeVertexNormals(),se?(se.geometry=Ae,ae.dispose()):(se=d(Ae,c),se.name="Charging cable resting across the floor",se.raycast=()=>{}),te=ee}function _e(ee,ae,me=!1){let Ae=o.phase,Me=o.use(ee,me);return me||(Ae==="drawer"&&o.phase==="carrying"&&(y.visible=!1,C.visible=!1),Ae==="carrying"&&o.phase==="powered"&&(T.add(y),y.visible=!0,y.rotation.set(0,0,0),y.position.set(-.16,.075,0),N=ae,s.add(C),C.visible=!0,C.rotation.set(0,.4,0),C.position.set(1.7,t(1.7,3.42)+.008,3.42)),Ae==="powered"&&o.phase==="charging"&&(j=ae,k.visible=!0,C.visible=!1)),Me}function ne(ee,ae=!1){let me=le===null?0:Math.max(0,Math.min(.05,ee-le));le=ee,o.update(me);let Ae=o.drawerOpen?1:0;if(pe=ae?Ae:Ze.damp(pe,Ae,8,me),E.position.z=pe*.43,(o.phase==="powered"||o.phase==="charging")&&(y.position.y=.075+(ae?0:.19*(1-Ze.smootherstep(ee-N,0,.65)))),o.phase==="charging"){let K=ae?1:Ze.smootherstep(ee-j,0,.65);b.getWorldPosition(Z),k.quaternion.copy(e.object.getWorldQuaternion(new mt)),X.set(-.04-(1-K)*.12,(1-K)*.045,0).applyQuaternion(k.quaternion),k.position.copy(Z).add(X),(Math.abs(K-te)>.02||K===1&&te!==1)&&Ce(K),F.material=o.battery>=100?p:f}ie.visible=e.openProgress>.35;let Me=Math.floor(o.battery),U=o.phase==="charging",w=`${U?"\u26A1 ":""}${Me}%`;w!==O&&(O=w,J.fillStyle="#222e36",J.fillRect(0,0,512,96),J.fillStyle=U?"#93dba3":"#e3b36d",J.font="500 44px Arial",J.textAlign="right",J.fillText(w,385,63),J.strokeStyle=U?"#93dba3":"#e3b36d",J.lineWidth=5,J.strokeRect(405,25,72,44),J.fillRect(480,37,7,19),J.fillRect(413,33,56*Me/100,28),fe.needsUpdate=!0)}function I(){o.reset(),pe=0,E.position.z=0,E.add(y,C),y.visible=C.visible=!0,y.position.set(.105,-.097,.045),y.rotation.set(0,0,0),C.position.set(-.145,-.127,.06),C.rotation.set(0,0,0),k.visible=!1,se&&(s.remove(se),se.geometry.dispose(),se=null),te=-1,O="",le=null}function ye(ee){return ee==="drawer"?o.drawerOpen?"Close charger drawer":"Open charger drawer":ee==="charger"?"Take MacBook charger + cable":ee==="strip"?o.phase==="carrying"?"Plug charger into power strip":"Powered power strip":ee==="laptop"?o.phase==="powered"?"Connect charger to MacBook":`MacBook battery \xB7 ${Math.floor(o.battery)}%`:o.phase==="carrying"?"Charger collected \xB7 Plug into the power strip [F]":o.phase==="powered"?"Charger powered \xB7 Connect the MacBook [F]":o.phase==="charging"?`${o.battery>=100?"Fully charged":"Charging"} \xB7 ${Math.floor(o.battery)}%`:""}return ne(0),{group:s,use:_e,update:ne,reset:I,hint:ye,get phase(){return o.phase},get nextAction(){return o.nextAction},get drawerReady(){return pe>.85},get battery(){return o.battery}}}function L0(){let i="sealed",e=-1/0;return{get phase(){return i},get hasKey(){return i==="collected"},get startedAt(){return e},pour(t){return i!=="sealed"?!1:(i="pouring",e=t,!0)},update(t){i==="pouring"&&t-e>=3.4&&(i="revealed")},collect(){return i!=="revealed"?!1:(i="collected",!0)},reset(){i="sealed",e=-1/0}}}function D0({bottle:i,contents:e,cap:t,floorSupport:n}){let s=new we;s.name="Ketchup spill and hidden shackle key";let r=L0(),o=i.position.clone(),a=i.quaternion.clone();i.userData.keyAction="pour";let c=new S(0,1,0).applyQuaternion(a),l=new mt().setFromUnitVectors(c,new S(-.25,-.94,.23).normalize()).multiply(a),h=o.clone().add(new S(.72,.32,.38)),f=h.clone().add(new S(-.045,0,.045));f.y=n(f.x,f.z)+.009;let p=t.position.clone(),d=t.quaternion.clone();t.updateWorldMatrix(!0,!1);let g=t.getWorldPosition(new S),x=t.getWorldQuaternion(new mt),m=g.clone().add(new S(-.13,0,.1));m.y=n(m.x,m.z)+.016;let u=new ze({color:13674833,metalness:.72,roughness:.27,emissive:7161877,emissiveIntensity:.18}),E=new we;E.name="Brass shackle key",E.userData.keyAction="collect",s.add(E),E.visible=!1;function y(j,se,te){let O=new ht(j,se);return O.castShadow=!0,O.receiveShadow=!0,te.add(O),O}let M=y(new Qt(.025,.0055,8,24),u,E);M.rotation.x=Math.PI/2,M.position.x=-.042;let C=y(new St(.078,.009,.01),u,E);C.position.x=.013;for(let j of[.027,.047])y(new St(.01,.009,.022),u,E).position.set(j,0,.01);let A=y(new St(.15,.04,.1),new xt({transparent:!0,opacity:0,depthWrite:!1,colorWrite:!1}),E);A.castShadow=!1,A.receiveShadow=!1;let T=new Wt({color:12001548,roughness:.28,clearcoat:1,clearcoatRoughness:.18}),P=new we;P.position.copy(f),P.position.y-=.006,s.add(P),P.visible=!1;let W=new bt;for(let j=0;j<=64;j++){let se=j/64*Math.PI*2,te=1+.1*Math.sin(se*5)+.07*Math.cos(se*9),O=Math.cos(se)*.2*te,le=Math.sin(se)*.13*te;j===0?W.moveTo(O,le):W.lineTo(O,le)}let v=y(new Oi(W,32),T,P);v.rotation.x=-Math.PI/2,v.castShadow=!1;let b=[];for(let j=0;j<7;j++){let se=j*2.4,te=.05+j*.016,O=y(new $t(1,12,8),T,P);O.position.set(Math.cos(se)*te,.003,Math.sin(se)*te*.6),O.scale.set(.015+j%3*.005,.004,.012),b.push(O)}let B=y(new Zt(1,1,1,10),T,s);B.visible=!1,B.castShadow=!1;let k=new S,F=new S,H=new S,J=new S(0,1,0),fe=j=>{let se=Ze.clamp(j,0,1);return se*se*(3-2*se)},ie=!1;function pe(){r.reset(),i.position.copy(o),i.quaternion.copy(a),e.scale.y=1,i.children[0].add(t),t.position.copy(p),t.quaternion.copy(d),t.scale.setScalar(1),ie=!1,E.visible=!1,P.visible=!1,B.visible=!1}function N(j,se){if(r.update(j),r.phase==="sealed")return;let te=j-r.startedAt,O=fe(te/.8)*(1-fe((te-3.35)/.8));i.position.copy(o).lerp(h,O),i.quaternion.copy(a).slerp(l,O),ie||(s.attach(t),ie=!0),t.position.copy(g).lerp(m,fe(te/.55)),t.position.y+=Math.sin(Math.min(1,te/.55)*Math.PI)*.08,t.quaternion.copy(x).multiply(new mt().setFromAxisAngle(new S(0,0,1),fe(te/.55)*2));let le=fe((te-.75)/2.5);if(e.scale.y=Math.max(.025,1-le),P.visible=te>.75,P.scale.setScalar(Math.max(.01,le)),i.updateWorldMatrix(!0,!0),i.children[0].localToWorld(k.set(0,.469,0)),B.visible=te>.8&&te<3.3,B.visible){F.copy(k).add(f).multiplyScalar(.5),H.subVectors(k,f),B.position.copy(F),B.quaternion.setFromUnitVectors(J,H.clone().normalize());let X=se?1:1+Math.sin(te*21)*.12;B.scale.set(.012*X,H.length(),.012*X)}if(E.visible=te>=2.5&&!r.hasKey,E.visible){let X=fe((te-2.5)/.9);E.position.copy(k).lerp(f,X),E.position.y+=Math.sin(X*Math.PI)*.065,E.rotation.set((1-X)*2,X*.5,(1-X)*3),u.emissiveIntensity=se?.22:.22+.1*Math.sin(j*3)}}return{group:s,bottle:i,key:E,update:N,reset:pe,get hasKey(){return r.hasKey},get phase(){return r.phase},pour:j=>r.pour(j),collect:()=>r.collect(),hint(j){return j==="collect"&&!r.hasKey?r.phase==="revealed"?"Pick up the shackle key":"A key is sliding out\u2026":j==="pour"?r.phase==="sealed"?"Pour out the ketchup":r.phase==="pouring"?"Pouring ketchup\u2026":r.hasKey?"The bottle is empty":"Pick up the key in the ketchup":""}}}var cl=(i,e,t)=>Math.max(e,Math.min(t,i));function U0({speed:i=.38,maxPoints:e=180}={}){let t=[],n=null,s=!1;function r(a,c,l,h=!1){return h||n!==null||t.some(f=>f.index===a)?!1:(t.push({index:a,openedAt:l,progress:0,origin:{...c},head:{x:c.x,z:c.z},points:[]}),!0)}function o(a,c,l){if(s)return!1;for(let h of t){if(h.progress=cl((a-h.openedAt)/1.35,0,1),a-h.openedAt<.48)continue;h.points.length||h.points.push({...h.head,born:a,radius:.13});let f=l.x-h.head.x,p=l.z-h.head.z,d=Math.hypot(f,p),g=Math.min(d,i*cl(c,0,.08));if(d>.001){let m=.18*Math.sin((a-h.openedAt)*.85+h.index*1.9),u=Math.sqrt(1+m*m);h.head.x+=(f/d-p/d*m)*g/u,h.head.z+=(p/d+f/d*m)*g/u}let x=h.points.at(-1);Math.hypot(x.x-h.head.x,x.z-h.head.z)>.075&&(h.points.push({...h.head,born:a,radius:.13}),h.points.length>e&&h.points.splice(1,1));for(let[m,u]of h.points.entries()){let E=cl((a-u.born)/3,0,1);u.radius=m===0?.16+.23*E:.12+(.13+.025*Math.sin(u.born*1.8+h.index))*E,n===null&&Math.hypot(l.x-u.x,l.z-u.z)<u.radius+.15&&(n=a)}}return n!==null&&a-n>=.85?(s=!0,!0):!1}return{open:r,update:o,leaks:t,reset(){t.length=0,n=null,s=!1},get dying(){return n!==null},get finished(){return s},blackout(a){return n===null?0:cl((a-n)/.7,0,1)}}}function H0(i,e,t){let n=Dt.textureSize,s=document.createElement("canvas");s.width=s.height=n;let r=s.getContext("2d"),o=new Ot(s);o.flipY=!1,o.generateMipmaps=!1,o.minFilter=gn;let a={value:o};function c(y){let M=new Wt({color:6519843,roughness:.12,metalness:0,ior:1.333,clearcoat:1,clearcoatRoughness:.08,emissive:2571784,emissiveIntensity:.15,transparent:y,opacity:y?.92:1,depthWrite:!y,side:Lt,envMapIntensity:1.4});return M.onBeforeCompile=C=>{C.uniforms.acidTime=t,C.uniforms.acidWet=a,C.vertexShader=`varying vec3 vWetWorld;
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
    normal=normalize(normal+mat3(viewMatrix)*vec3(dx,0.0,dz));`)},M.customProgramCacheKey=()=>`acid-water-${y?"surface":"jet"}-v2`,M}let l=c(!0),h=c(!1),f=Dt.mobile?48:72,p=new wt(8.2,8.8,f,f);p.rotateX(-Math.PI/2),p.translate(0,0,.2);let d=p.attributes.position,g=p.attributes.uv;for(let y=0;y<d.count;y++){let M=d.getX(y),C=d.getZ(y);d.setY(y,i(M,C)+.006),g.setXY(y,(M+4.1)/8.2,(C+4.2)/8.8)}d.needsUpdate=!0,g.needsUpdate=!0,p.computeVertexNormals();let x=new ht(p,l);x.name="Continuous reflective acid film",x.renderOrder=4,x.receiveShadow=!0;let m=new ht(p,new xt({color:1053961,alphaMap:e,transparent:!0,opacity:.44,depthWrite:!1,alphaTest:.01}));m.name="Damp corroded edge beneath acid",m.position.y=-.002,m.renderOrder=3;let u=-1/0;function E(y,M){if(!(y-u<.1)){u=y,r.globalCompositeOperation="source-over",r.fillStyle="#000",r.fillRect(0,0,n,n),r.globalCompositeOperation="lighten";for(let C of M)for(let A of C.points){let T=(A.x+4.1)/8.2*n,P=(A.z+4.2)/8.8*n,W=A.radius*n/8.2,v=r.createRadialGradient(T,P,0,T,P,W);v.addColorStop(0,"#fff"),v.addColorStop(.62,"#fff"),v.addColorStop(.85,"#999"),v.addColorStop(1,"#000"),r.fillStyle=v,r.fillRect(T-W,P-W,W*2,W*2)}o.needsUpdate=!0}}return{pool:x,scorch:m,jetMaterial:h,update:E,reset(){u=-1/0,r.globalCompositeOperation="source-over",r.fillStyle="#000",r.fillRect(0,0,n,n),o.needsUpdate=!0},setEnvironment(y){for(let M of[l,h])M.envMap=y,M.needsUpdate=!0}}}function N0(i,e,t){let n=new S,s=new mt;i.getWorldPosition(n),i.getWorldQuaternion(s);let r=new S(0,-.25,.6).applyQuaternion(s),o=9.81,a=e(n.x,n.z)+.009,c=Math.max(.01,n.y-a),l=(r.y+Math.sqrt(r.y*r.y+2*o*c))/o,h=n.clone().addScaledVector(r,l);h.y=e(h.x,h.z)+.009;let f=20,p=10,d=new Pt,g=new Float32Array((f+1)*(p+1)*3),x=new Float32Array(g.length),m=[];for(let P=1;P<=f;P++)for(let W=1;W<=p;W++){let v=P*(p+1)+W;m.push(v,v-p-2,v-1,v,v-p-1,v-p-2)}d.setAttribute("position",new fn(g,3).setUsage(Un)),d.setAttribute("normal",new fn(x,3).setUsage(Un)),d.setIndex(m);let u=new ht(d,t);u.name="Gravity-fed wavering drain stream",u.frustumCulled=!1,u.raycast=()=>{};let E=new S,y=new S,M=new S,C=new S,A=new S;function T(P,W){let v=Ze.smoothstep(W,0,.65);for(let b=0;b<=f;b++){let B=b/f,k=B*l;E.copy(n).addScaledVector(r,k),E.y-=.5*o*k*k,E.x+=Math.sin(P*19-B*13)*.002*B,E.z+=Math.sin(P*16-B*11)*.0015*B,y.copy(r),y.y-=o*k,y.normalize(),M.set(1,0,0).addScaledVector(y,-y.x).normalize(),C.crossVectors(M,y);let F=(.021-.01*B)*(1+.12*Math.sin(B*25-P*23))*v;for(let H=0;H<=p;H++){let J=H/p*Math.PI*2,fe=(b*(p+1)+H)*3;A.copy(M).multiplyScalar(Math.cos(J)).addScaledVector(C,Math.sin(J)),A.toArray(x,fe),g[fe]=E.x+A.x*F,g[fe+1]=E.y+A.y*F,g[fe+2]=E.z+A.z*F}}d.attributes.position.needsUpdate=d.attributes.normal.needsUpdate=!0}return T(0,1),{mesh:u,origin:h,update:T}}function F0({valves:i,floorSupport:e}){let t=new we;t.name="Corrosive green liquid, bubbles and contact smoke",t.userData.ignoreAcid=!0,t.visible=!1;let n=U0(),s=new Ft,r=new mt,o={value:0},a=new Map,c=new Map,l=[],h=-1/0,f=document.createElement("canvas");f.width=f.height=512;let p=f.getContext("2d");p.fillStyle="#000",p.fillRect(0,0,512,512);let d=new Ot(f);d.generateMipmaps=!1,d.minFilter=gn,d.flipY=!1;let g={value:d};function x(N){if(c.has(N))return c.get(N);let j=N.clone(),se=N.onBeforeCompile,te=N.customProgramCacheKey();return j.onBeforeCompile=O=>{se.call(N,O),O.uniforms.acidBurn=g,O.vertexShader=`varying vec3 vAcidWorld;
`+O.vertexShader,O.vertexShader=O.vertexShader.replace("#include <worldpos_vertex>",`#include <worldpos_vertex>
    vec4 acidVertex=vec4(transformed,1.0);
    #ifdef USE_INSTANCING
     acidVertex=instanceMatrix*acidVertex;
    #endif
    vAcidWorld=(modelMatrix*acidVertex).xyz;`),O.fragmentShader=`uniform sampler2D acidBurn;varying vec3 vAcidWorld;
`+O.fragmentShader,O.fragmentShader=O.fragmentShader.replace("#include <color_fragment>",`#include <color_fragment>
    vec2 acidUV=(vAcidWorld.xz+vec2(4.1,4.2))/vec2(8.2,8.8);
    float burned=texture2D(acidBurn,clamp(acidUV,0.0,1.0)).r*(1.0-smoothstep(.035,.32,vAcidWorld.y));
    float pitting=fract(sin(dot(floor(vAcidWorld*145.0),vec3(17.17,83.23,39.71)))*43758.5453);
    diffuseColor.rgb=mix(diffuseColor.rgb,vec3(.075,.063,.025)+pitting*.035,burned*.94);
    if(burned>.48&&pitting<(burned-.48)*.55)discard;`)},j.customProgramCacheKey=()=>te+"-acid-corrosion-v1",c.set(N,j),j}function m(N){let j=new Dn;function se(te){if(!te.userData.ignoreAcid){if(te.isMesh&&te.material&&(j.setFromObject(te),j.min.y<.4&&j.max.y>-.01)){j.max.y>.02&&j.max.y<.65&&l.push(j.clone());let O=le=>le.isMeshStandardMaterial||le.isMeshBasicMaterial||le.isMeshToonMaterial?x(le):le;te.material=Array.isArray(te.material)?te.material.map(O):O(te.material)}for(let O of te.children)se(O)}}for(let te of N)te.updateWorldMatrix(!0,!0),se(te)}let u=H0(e,d,o);t.add(u.scorch,u.pool);let E=new vn(new $t(1,10,7),new Wt({color:10530404,roughness:.13,clearcoat:1,transparent:!0,opacity:.72,depthWrite:!1}),54);E.instanceMatrix.setUsage(Un),E.frustumCulled=!1,E.count=0,t.add(E);let y=new vn(new $t(1,8,6),u.jetMaterial,42);y.instanceMatrix.setUsage(Un),y.frustumCulled=!1,y.count=0,y.name="Small falling splash droplets",t.add(y);let M=new Ns(.9,1,32);M.rotateX(-Math.PI/2);let C=new ar(new Float32Array(12),1);M.setAttribute("rippleAlpha",C);let A=new xt({color:11978123,transparent:!0,opacity:.32,depthWrite:!1,side:Lt});A.onBeforeCompile=N=>{N.vertexShader=`attribute float rippleAlpha;varying float vRippleAlpha;
`+N.vertexShader,N.vertexShader=N.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
vRippleAlpha=rippleAlpha;`),N.fragmentShader=`varying float vRippleAlpha;
`+N.fragmentShader,N.fragmentShader=N.fragmentShader.replace("#include <color_fragment>",`#include <color_fragment>
diffuseColor.a*=vRippleAlpha;`)};let T=new vn(M,A,12);T.instanceMatrix.setUsage(Un),T.frustumCulled=!1,T.count=0,T.renderOrder=6,T.name="Expanding impact rings",t.add(T);let P=document.createElement("canvas");P.width=P.height=128;let W=P.getContext("2d");for(let N=0;N<7;N++){let j=64+Math.sin(N*2.4)*23,se=64+Math.cos(N*3.1)*21,te=W.createRadialGradient(j,se,0,j,se,36);te.addColorStop(0,"rgba(220,231,199,.3)"),te.addColorStop(1,"rgba(220,231,199,0)"),W.fillStyle=te,W.fillRect(0,0,128,128)}let v=new Ot(P),b=new wt(1,1),B=new ar(new Float32Array(84),1);b.setAttribute("smokeAlpha",B);let k=new xt({map:v,transparent:!0,opacity:.27,depthWrite:!1,color:12699827,side:Lt});k.onBeforeCompile=N=>{N.vertexShader=`attribute float smokeAlpha;varying float vSmokeAlpha;
`+N.vertexShader,N.vertexShader=N.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
vSmokeAlpha=smokeAlpha;`),N.fragmentShader=`varying float vSmokeAlpha;
`+N.fragmentShader,N.fragmentShader=N.fragmentShader.replace("#include <color_fragment>",`#include <color_fragment>
diffuseColor.a*=vSmokeAlpha;`)};let F=new vn(b,k,84);F.name="Smoke rising from corroding surfaces",F.instanceMatrix.setUsage(Un),F.frustumCulled=!1,F.count=0,F.renderOrder=12,t.add(F),t.traverse(N=>{N.isMesh&&(N.raycast=()=>{})});function H(N,j){let se=e(N,j);for(let te of l)N>=te.min.x&&N<=te.max.x&&j>=te.min.z&&j<=te.max.z&&(se=Math.max(se,Math.min(.27,te.max.y)));return se}function J(N,j,se=!1){let te=i[N];if(!te||se||n.dying||n.leaks.some(le=>le.index===N))return!1;let O=N0(te.outlet,e,u.jetMaterial);return n.open(N,O.origin,j,se)?(O.mesh.visible=!1,t.add(O.mesh),a.set(N,O),t.visible=!0,!0):(O.mesh.geometry.dispose(),!1)}function fe(N){if(!(N-h<.1)){h=N;for(let j of n.leaks)for(let se of j.points){let te=(se.x+4.1)/8.2*512,O=(se.z+4.2)/8.8*512,le=se.radius*512/8.2*1.18,X=p.createRadialGradient(te,O,le*.45,te,O,le);X.addColorStop(0,"rgba(255,255,255,.13)"),X.addColorStop(1,"rgba(255,255,255,0)"),p.fillStyle=X,p.fillRect(te-le,O-le,le*2,le*2)}d.needsUpdate=!0}}function ie(N,j,se,te,O=!1){if(!n.leaks.length)return!1;let le=n.update(N,j,se),X=O?0:N;o.value=X,te.getWorldQuaternion(r);let V=0,Z=0,xe=0,Ce=0;for(let _e of n.leaks){i[_e.index].setOpen(O?1:Ze.smootherstep(_e.progress,0,1));let ne=a.get(_e.index);if(ne.mesh.visible=_e.points.length>0,ne.update(X,_e.progress),!!_e.points.length){for(let I=0;I<18;I++){let ye=_e.points[(I*17+_e.index*5)%_e.points.length],ee=(X*.9+I*.618)%1,ae=I*2.399,me=ye.radius*.57;s.position.set(ye.x+Math.cos(ae)*me,e(ye.x,ye.z)+.008+Math.sin(ee*Math.PI)*.005,ye.z+Math.sin(ae)*me);let Ae=(.005+I%4*.0025)*Math.sin(ee*Math.PI);s.scale.set(Ae,Ae*.45,Ae),s.quaternion.identity(),s.updateMatrix(),E.setMatrixAt(V++,s.matrix)}for(let I=0;I<14;I++){let ye=(X*2.7+I*.618)%1,ee=I*2.399+_e.index,ae=.015+ye*(.07+I%3*.02),me=.045+I%4*.012;s.position.set(_e.origin.x+Math.cos(ee)*ae,_e.origin.y+4*me*ye*(1-ye),_e.origin.z+Math.sin(ee)*ae);let Ae=(.003+I%3*.0015)*(1-ye*.45);s.scale.set(Ae,Ae*(1.3+ye),Ae),s.quaternion.identity(),s.updateMatrix(),y.setMatrixAt(xe++,s.matrix)}for(let I=0;I<4;I++){let ye=(X*1.6+I*.25)%1,ee=.018+ye*.16;s.position.set(_e.origin.x,e(_e.origin.x,_e.origin.z)+.01,_e.origin.z),s.quaternion.identity(),s.scale.set(ee,1,ee*.92),s.updateMatrix(),T.setMatrixAt(Ce,s.matrix),C.setX(Ce++,Math.sin(ye*Math.PI)*(1-ye))}for(let I=0;I<16;I++){let ye=I*7%Math.min(35,_e.points.length),ee=_e.points[Math.max(0,_e.points.length-1-ye)],ae=(X*.46+I*.381)%1,me=I*2.4+_e.index,Ae=ee.radius*(.45+ae*.5),Me=.075+ae*.22;s.position.set(ee.x+Math.cos(me)*Ae+Math.sin(X+I)*ae*.06,H(ee.x,ee.z)+.015+ae*.34,ee.z+Math.sin(me)*Ae),s.quaternion.copy(r),s.rotateZ(I*.9+ae*.4),s.scale.set(Me,Me*1.5,1),s.updateMatrix(),F.setMatrixAt(Z,s.matrix),B.setX(Z++,Math.sin(ae*Math.PI)*.58)}}}E.count=V,F.count=Z,y.count=xe,T.count=Ce;for(let _e of[E,F,y,T])_e.instanceMatrix.needsUpdate=!0;return B.needsUpdate=!0,C.needsUpdate=!0,u.update(N,n.leaks),fe(N),le}function pe(){n.reset(),u.reset(),t.visible=!1,E.count=F.count=y.count=T.count=0;for(let N of a.values())t.remove(N.mesh),N.mesh.geometry.dispose();a.clear();for(let N of i)N.setOpen(0);p.clearRect(0,0,512,512),p.fillStyle="#000",p.fillRect(0,0,512,512),d.needsUpdate=!0,h=-1/0}return{group:t,open:J,update:ie,reset:pe,bindTargets:m,setEnvironment:u.setEnvironment,blackout:N=>n.blackout(N),get dying(){return n.dying},get active(){return n.leaks.length>0}}}function O0(i,e){let t=new we;t.name="Abandoned technology office";let n=[],s=[],r=_=>(n.push(_),_),o=87021,a=()=>(o=o*1664525+1013904223>>>0,o/4294967296),c=(_,R)=>_+(R-_)*a();function l(_=512){let R=document.createElement("canvas");return R.width=R.height=_,[R,R.getContext("2d")]}function h(_){let R=new Ot(_);return R.colorSpace=pt,R.anisotropy=Math.min(8,i.capabilities.getMaxAnisotropy()),R}function f(_,R,D,z,G,Y){let ue=_.createRadialGradient(R,D,0,R,D,z);ue.addColorStop(0,`rgba(${G},${Y})`),ue.addColorStop(1,`rgba(${G},0)`),_.fillStyle=ue,_.fillRect(R-z,D-z,z*2,z*2)}function p(_,R,D,z,G){for(let Y=0;Y<D;Y++)_.fillStyle=`rgba(${z},${a()*G})`,_.fillRect(a()*R,a()*R,c(.4,2.2),c(.4,2))}function d(_,R="paint"){let[D,z]=l();z.fillStyle=_,z.fillRect(0,0,512,512);for(let G=0;G<210;G++)f(z,a()*512,a()*512,c(4,70),G%3?"27,33,23":"110,83,48",c(.025,.15));if(p(z,512,12e3,"18,25,18",.24),p(z,512,4e3,"200,192,159",.18),R==="wood")for(let G=0;G<550;G++){z.strokeStyle=`rgba(36,29,17,${c(.02,.16)})`,z.lineWidth=c(.4,2);let Y=a()*512;z.beginPath(),z.moveTo(0,Y),z.bezierCurveTo(170,Y+c(-12,12),340,Y+c(-12,12),512,Y),z.stroke()}if(R==="metal")for(let G=0;G<250;G++)f(z,a()*512,a()*512,c(2,18),"112,56,24",c(.1,.5));for(let G=0;G<80;G++){z.strokeStyle=`rgba(197,190,160,${c(.08,.3)})`,z.lineWidth=c(.3,1.3);let Y=a()*512,ue=a()*512;z.beginPath(),z.moveTo(Y,ue),z.lineTo(Y+c(3,50),ue+c(-2,4)),z.stroke()}return h(D)}let g=d("#8b8c77"),x=d("#b2b09a"),m=d("#817157","wood"),u=d("#4e5550","metal"),E=d("#44534b"),y=d("#66695a"),M=(_,R=.88,D=null,z=0)=>new ze({color:_,roughness:R,map:D,bumpMap:D,bumpScale:D?.008:0,metalness:z}),C=M(16777215,.98,g),A=M(16777215,.86,m),T=M(16777215,.8,x),P=M(16777215,.73,u,.42),W=M(16777215,.95,E),v=M(1514521,.86),b=M(1053970,.95),B=M(16777215,.98,y),k=M(8555654,.4,null,.8);function F(_,R,D=t){let z=new ht(_,R);return z.castShadow=!0,z.receiveShadow=!0,D.add(z),z}function H(_,R,D=P,z=t){let G=F(new St(..._),D,z);return G.position.set(...R),G}let J=new $t(1,20,12);function fe(_,R,D,z=t){let G=F(J,D,z);return G.scale.set(..._),G.position.set(...R),G}function ie(_,R,D,z=P,G=t,Y=12){let ue=F(new Zt(_,_,R,Y),z,G);return ue.position.set(...D),ue}function pe(_,R,D=.015,z=P,G=t){let Y=new S(..._),ue=new S(...R),Ve=ue.clone().sub(Y),je=ie(D,Ve.length(),Y.clone().add(ue).multiplyScalar(.5).toArray(),z,G);return je.quaternion.setFromUnitVectors(new S(0,1,0),Ve.normalize()),je}function N(_,R=.008,D=v,z=t){let G=new Jt(_.map(ue=>new S(...ue))),Y=F(new pn(G,Math.max(20,_.length*8),R,6,!1),D,z);return z===t&&_.some(ue=>ue[1]<.06)&&s.push(Y),Y}function j(_,R,D,z=.025){z=Math.min(z,_*.45,R*.45);let G=new bt,Y=_/2,ue=R/2;G.moveTo(-Y+z,-ue),G.lineTo(Y-z,-ue),G.quadraticCurveTo(Y,-ue,Y,-ue+z),G.lineTo(Y,ue-z),G.quadraticCurveTo(Y,ue,Y-z,ue),G.lineTo(-Y+z,ue),G.quadraticCurveTo(-Y,ue,-Y,ue-z),G.lineTo(-Y,-ue+z),G.quadraticCurveTo(-Y,-ue,-Y+z,-ue);let Ve=Math.min(.012,_/6,R/6,D/6),je=new an(G,{depth:D-Ve*2,bevelEnabled:!0,bevelSize:Ve,bevelThickness:Ve,bevelSegments:2,steps:1,curveSegments:4});return je.translate(0,0,-D/2+Ve),je}function se(_,R,D,z=t){let G=F(j(..._),D,z);return G.position.set(...R),G}function te(_,R,D,z=!1){let[G,Y]=l(1024);for(let Ve=0;Ve<290;Ve++)f(Y,a()*1024,z?a()*1024:a()<.6?c(600,1060):a()*1024,c(12,140),"24,30,19",c(.03,.26));if(!z){let Ve=Y.createLinearGradient(0,0,0,1024);Ve.addColorStop(0,"rgba(29,35,24,.4)"),Ve.addColorStop(.3,"rgba(29,35,24,0)"),Ve.addColorStop(.75,"rgba(29,35,24,.07)"),Ve.addColorStop(1,"rgba(23,30,21,.72)"),Y.fillStyle=Ve,Y.fillRect(0,0,1024,1024);for(let je=0;je<80;je++){let It=a()*1024,rn=a()*220;Y.strokeStyle=`rgba(62,51,30,${c(.03,.26)})`,Y.lineWidth=c(1,6),Y.beginPath(),Y.moveTo(It,rn),Y.lineTo(It+c(-8,8),rn+c(80,750)),Y.stroke()}}p(Y,1024,17e3,"16,25,17",.28);let ue=F(new wt(_,R),new ze({map:h(G),transparent:!0,depthWrite:!1,roughness:1}),D);return ue.castShadow=!1,ue}H([7.8,.15,8.6],[0,-.075,.2],B);let O=te(7.8,8.6,t,!0);O.rotation.x=-Math.PI/2,O.position.set(0,.003,.2);let le=H([7.8,3.35,.16],[0,1.675,-4.08],C),X=H([.16,3.35,8.6],[-3.98,1.675,.2],M(8556677,.98,g));H([.16,1.1,8.6],[3.98,.55,.2],C),H([.16,.65,8.6],[3.98,3.025,.2],C),H([.16,1.6,1.2],[3.98,1.9,-3.4],C),H([.16,1.6,4.8],[3.98,1.9,2.1],C),te(7.8,3.35,t).position.set(0,1.675,-3.99);let Z=te(8.6,3.35,t);Z.rotation.y=Math.PI/2,Z.position.set(-3.89,1.675,.2);for(let _=0;_<9;_++)H([.012,2.2,.014],[-3.85+_*.96,1.66,-3.977],P);H([7.8,.045,.035],[0,.58,-3.96],P),H([7.8,.045,.035],[0,2.76,-3.96],P);for(let _ of[-3.86,3.86])H([.045,.13,8.6],[_,.065,.2],v);H([7.8,.13,.04],[0,.065,-3.95],v);for(let _=0;_<26;_++){let R=new bt,D=c(-3.65,3.65),z=c(.24,3.1),G=c(.05,.22),Y=c(.05,.26);for(let Ve=0;Ve<9;Ve++){let je=Ve/9*Math.PI*2,It=c(.6,1),rn=D+Math.cos(je)*G*It,Xt=z+Math.sin(je)*Y*It;Ve?R.lineTo(rn,Xt):R.moveTo(rn,Xt)}R.closePath();let ue=F(new Oi(R),M(_%3?5199175:11644305,.99));ue.position.z=-3.972,ue.castShadow=!1}let xe=H([7.8,.1,8.6],[0,3.36,.2],v);for(let _=-3.6;_<3.9;_+=1.2)H([.028,.032,8.6],[_,3.12,.2],P);for(let _=-3.9;_<4.5;_+=1.2)H([7.8,.032,.028],[0,3.12,_],P);let Ce=M(10132616,.98,g);for(let _=-3;_<3.9;_+=1.2)for(let R=-3.3;R<4.5;R+=1.2){if(a()<.25)continue;let D=H([1.15,.035,1.15],[_,3.145,R],Ce);a()<.12&&(D.rotation.z=c(-.13,.13),D.position.y-=.06)}for(let _=0;_<5;_++)N([[-2+_*.45,3.3,-1.6],[-1.9+_*.45,2.8,-1.5],[-1.7+_*.4,2.53,-1.6],[-1.3+_*.35,3.29,-1.8]],.009,v);let _e=new we;_e.position.set(3.88,1.9,-1.5),_e.rotation.y=-Math.PI/2,t.add(_e);let[ne,I]=l();I.fillStyle="#778c88",I.fillRect(0,0,512,512);for(let _=0;_<15;_++){let R=_*43,D=c(25,60),z=c(70,290);I.fillStyle=_%2?"#4b5d58":"#526560",I.fillRect(R,512-z,D,z);for(let G=0;G<5;G++)I.fillStyle="#879186",I.fillRect(R+8,512-z+18+G*34,4,10)}let ye=F(new wt(2.8,1.6),new xt({map:h(ne),color:3622209}),_e);ye.position.z=-.13,ye.castShadow=!1;for(let _ of[-1.43,0,1.43])H([.055,1.7,.09],[_,0,.025],P,_e);for(let _ of[-.83,.83])H([2.92,.055,.09],[0,_,.025],P,_e);let ee=M(10336426,.25,null,.25);ee.transparent=!0,ee.opacity=.18,ee.side=Lt;for(let _ of[-.72,.72]){let R=H([1.37,1.55,.008],[_,0,.04],ee,_e);R.castShadow=!1}for(let _=0;_<17;_++){if([5,9,14].includes(_))continue;let R=H([2.77,.047,.015],[0,.73-_*.086,.11],M(8160114,.82,x),_e);R.rotation.x=.35,(_===7||_===12)&&(R.rotation.z=_===7?.035:-.05,R.rotation.x=.9)}for(let _ of[-.86,.86])N([[_,.8,.15],[_,.12,.16],[_,-.77,.15]],.005,v,_e);N([[1.35,.83,.12],[1.4,-.7,.14],[1.32,-1.1,.18]],.006,v,_e);let ae=u0(i);o=577513849;let me=j(.77,.45,.035,.012),Ae=M(7042164,.38,null,.7);function Me(_,R,D=0,z="cracked",G=1){let Y=new we;Y.position.set(...R),Y.rotation.y=D,Y.scale.setScalar(G),_.add(Y),Y.name="Damaged widescreen monitor",F(me,v,Y).position.set(0,.375,0),se([.31,.018,.2],[0,.013,-.025],Ae,Y),H([.055,.24,.025],[0,.14,-.035],Ae,Y),ae.add(Y,z),H([.18,.16,.032],[0,.36,-.03],Ae,Y),fe([.004,.004,.003],[.35,.163,.022],z==="live"?new xt({color:9223008}):v,Y);for(let je=0;je<11;je++)H([.015,.002,.003],[-.25+je*.05,.585,-.02],P,Y);let Ve=N([[.1,.23,-.05],[.15,.04,-.08],[.23,-.31,-.18]],.006,v,Y);return Ve.name="Monitor power cable",Ve.userData.ignoreFloorContact=!0,Y}let U=new St(.023,.008,.023);function w(_,R,D=0){let z=new we;z.position.set(...R),z.rotation.y=D,_.add(z),se([.47,.035,.18],[0,0,0],T,z);let G=new vn(U,M(6844e3,.8),56);for(let Y=0;Y<56;Y++){let ue=new Ft;ue.position.set(-.206+Y%14*.031,.024,-.065+Math.floor(Y/14)*.036),ue.updateMatrix(),G.setMatrixAt(Y,ue.matrix)}return z.add(G),H([.14,.008,.022],[0,.024,.07],v,z),z}function K(_,R,D=0,z=!1){let G=new we;G.position.set(...R),G.rotation.y=D,_.add(G),se([.25,.53,.46],[0,.265,0],T,G);for(let Y=.32;Y<.49;Y+=.065)H([.195,.042,.012],[0,Y,.239],v,G);for(let Y=0;Y<7;Y++)H([.16,.008,.012],[0,.055+Y*.025,.239],P,G);if(z){H([.012,.42,.35],[.139,.27,0],v,G);for(let Y=0;Y<3;Y++)H([.015,.09,.25],[.15,.16+Y*.105,-.02],M(2706228,.83),G)}return G}function ge(_,R,D,z=0){let G=new we;G.position.set(_,0,R),G.rotation.y=z,t.add(G),H([D,.075,.86],[0,.82,0],A,G),H([D,.035,.025],[0,.794,.443],P,G);for(let Y of[-D/2+.08,D/2-.08])H([.048,.79,.68],[Y,.39,0],P,G),H([.24,.035,.74],[Y,.018,0],v,G);return H([D-.16,.19,.035],[0,.45,-.35],P,G),G}let be=ge(-1,-3.37,5.4);for(let _=0;_<6;_++){let R=-2.24+_*.84;Me(be,[R,.86,-.05],c(-.13,.13),_===3?"live":_%2?"hole":"cracked",c(.88,1.04)),w(be,[R+.03,.87,.3],c(-.16,.16)),_%2===0&&K(be,[R+.18,0,-.1],c(-.1,.1),!0)}let Ee=ge(-1.1,-2.25,2.6,0);for(let _=0;_<3;_++)Me(Ee,[-.84+_*.83,.86,-.1],c(-.2,.2),_===0?"live":"hole",.9),w(Ee,[-.84+_*.83,.87,.3],c(-.2,.2));let Be=Me(t,[-.8,.31,-1.45],.42,"hole",.95);Be.rotation.set(-1.38,.42,.21),r(Be);let Oe=Me(t,[-2.72,.24,2.58],-.45,"cracked",.73);Oe.rotation.x=-.56,Oe.rotation.z=.24,r(Oe);let Xe=K(t,[-2.22,.13,-.72],.35,!0);Xe.rotation.z=Math.PI/2,r(Xe);for(let _=0;_<3;_++)r(K(t,[-3.32,0,-2.45+_*.31],-.18,!0)).scale.setScalar(.9);let _t=o,De=M(16777215,.78,d("#afb4a9","metal"),.22),$=M(6449762,.7,null,.25),ve=M(3225908,.86,E),Ie=M(11383205,.82),Pe=M(6845548,.46,null,.73);function Te(_=0){let[R,D]=l(512);D.lineWidth=1.8;for(let z=0;z<512;z+=7)D.strokeStyle=z%21?"#a0a59a":"#686f65",D.beginPath(),D.moveTo(z,0),D.lineTo(z,512),D.stroke();for(let z=0;z<512;z+=6)D.strokeStyle=z%18?"#7f897e":"#b0b4a5",D.lineWidth=z%18?1.6:2.1,D.beginPath(),D.moveTo(0,z),D.lineTo(512,z),D.stroke();if(_){D.globalCompositeOperation="destination-out",D.fillStyle="#000",D.beginPath();let z=_===1?[[126,180],[187,210],[203,182],[229,265],[204,288],[236,339],[183,360],[154,302],[113,321],[137,257],[102,232]]:[[275,256],[315,209],[333,270],[377,253],[353,315],[386,375],[328,354],[300,399],[287,332],[248,309]];z.forEach(([G,Y],ue)=>ue?D.lineTo(G,Y):D.moveTo(G,Y)),D.closePath(),D.fill(),D.lineWidth=3;for(let G=0;G<16;G++){let[Y,ue]=z[G%z.length];D.beginPath(),D.moveTo(Y,ue),D.lineTo(Y+c(-24,24),ue+c(-18,18)),D.stroke()}}return new ze({map:h(R),color:14803929,roughness:.93,side:Lt,alphaTest:.3,alphaToCoverage:!0})}let he=[Te(),Te(1),Te(2)];function ke(_,R,D,z,G=0){let ue=new Jt(_.map(mn=>new S(mn[0],mn[1],0)),!0,"centripetal").getSpacedPoints(96).slice(0,-1),Ve=[],je=[],It=[],rn=12,Xt=ue.length,li=Math.min(...ue.map(mn=>mn.x)),Di=Math.max(...ue.map(mn=>mn.x)),Io=Math.min(...ue.map(mn=>mn.y)),Hg=Math.max(...ue.map(mn=>mn.y));for(let mn=0;mn<=rn;mn++)for(let _s=0;_s<Xt;_s++){let Do=mn/rn,za=R[0]+(ue[_s].x-R[0])*Do,Uo=R[1]+(ue[_s].y-R[1])*Do;if(Ve.push(...D(za,Uo,Do)),je.push((za-li)/(Di-li),(Uo-Io)/(Hg-Io)),mn<rn){let Yl=mn*Xt+_s,Zl=mn*Xt+(_s+1)%Xt;It.push(Yl,Zl,Yl+Xt,Zl,Zl+Xt,Yl+Xt)}}let Lo=new Pt;Lo.setAttribute("position",new lt(Ve,3)),Lo.setAttribute("uv",new lt(je,2)),Lo.setIndex(It),Lo.computeVertexNormals();let Ng=F(Lo,he[G],z);Ng.customDepthMaterial=new na({depthPacking:rd,map:he[G].map,alphaTest:.3,side:Lt});for(let[mn,_s,Do]of[[1,.025,De],[.925,.007,$]]){let za=ue.map(Uo=>new S(...D(R[0]+(Uo.x-R[0])*mn,R[1]+(Uo.y-R[1])*mn,mn)));F(new pn(new Jt(za,!0),96,_s,8,!0),Do,z)}}function q(_,R=1){let D=new we;D.name="Torn mesh back and lumbar support",_.add(D),ke([[-.18,0],[-.224,.08],[-.235,.26],[-.28,.46],[-.264,.55],[-.17,.6],[0,.615],[.17,.6],[.264,.55],[.28,.46],[.235,.26],[.224,.08],[.18,0],[0,-.014]],[0,.3],(G,Y,ue)=>[G,Y,-.11*Y/.615+.035*(1-ue*ue)],D,R),N([[0,-.09,-.07],[0,.13,-.08],[-.17,.3,-.09],[-.23,.37,-.09]],.018,De,D),N([[0,.08,-.08],[.08,.22,-.085],[.23,.37,-.09]],.018,De,D);for(let G of[.12,.235])fe([.048,.073,.024],[0,G,-.055],ve,D);if(N([[-.21,.175,-.06],[0,.19,-.035],[.21,.175,-.06]],.014,$,D),R)for(let G=0;G<5;G++)N([[-.13+G*.012,.2,-.015],[-.12+G*.012,.15,.001],[-.14+G*.012,.1,-.02]],.0016,he[0],D);return D}function Re(_,R,D=!1){let z=new we;_.add(z);let G=R*.295;if(N([[R*.22,.46,-.17],[G,.53,-.2],[G,.67,-.17],[G,.72,-.07]],.023,De,z),D)return fe([.025,.011,.026],[G,.72,-.07],Ie,z),z;let Y=fe([.058,.034,.15],[G,.745,.01],ve,z);return Y.rotation.z=R*.06,pe([G,.68,-.085],[G,.734,.045],.019,$,z),z}function ce(_,R,D,z,G=0){let Y=new we;Y.position.set(R,D,z),Y.rotation.y=G,_.add(Y),pe([0,.028,0],[0,.078,.015],.012,Pe,Y);for(let ue of[-1,1]){let Ve=ie(.039,.022,[ue*.021,0,0],b,Y,16);Ve.rotation.z=Math.PI/2,fe([.002,.018,.018],[ue*.033,0,0],$,Y)}return Y}function Se(_,R=-1){let D=new we;D.name="Five-spoke caster base",_.add(D),ie(.057,.09,[0,.16,0],De,D,16),ie(.031,.2,[0,.28,0],Pe,D,16);for(let z=0;z<5;z++){let G=z/5*Math.PI*2+.25,Y=Math.cos(G),ue=Math.sin(G);if(z===R){pe([0,.16,0],[Y*.13,.135,ue*.13],.025,De,D),fe([.024,.014,.018],[Y*.13,.135,ue*.13],Ie,D);continue}N([[0,.18,0],[Y*.14,.145,ue*.14],[Y*.31,.092,ue*.31]],.022,De,D),ce(D,Y*.31,.04,ue*.31,G)}return D}function Ue(_,R,D,z){return _.position.set(R,0,D),_.rotation.set(...z),_.updateMatrixWorld(!0),r(_)}function Fe(_,R,D,z={}){let G=new we;G.name="Broken Aeron-style mesh chair",t.add(G),z.noBase||Se(G,z.missingSpoke??-1),se([.24,.095,.27],[0,.405,-.035],$,G),ie(.045,.13,[0,.405,0],De,G,16),pe([-.14,.41,.015],[-.245,.405,.05],.012,Pe,G),fe([.035,.016,.055],[-.25,.405,.055],ve,G),fe([.055,.025,.04],[.18,.407,-.04],ve,G),ke([[-.2,-.23],[-.26,-.16],[-.283,.08],[-.25,.22],[0,.25],[.25,.22],[.283,.08],[.26,-.16],[.2,-.23],[0,-.25]],[0,0],(ue,Ve,je)=>[ue,.51-.035*(1-je*je)-.025*Math.max(0,Ve/.25),Ve],G,z.seatTear??1);for(let ue of[-1,1])N([[ue*.12,.41,-.14],[ue*.22,.46,-.2],[ue*.24,.49,-.15]],.023,De,G),Re(G,ue,ue===z.brokenArm);if(!z.noBack){let ue=q(G,z.backTear??1);ue.position.set(0,.55,-.22),ue.rotation.set(z.backLean??0,0,z.backTwist??0)}return Ue(G,_,R,D)}Fe(-2.85,-2.48,[0,.35,-.035],{brokenArm:1,backTear:2}),Fe(-.3,3.35,[-.08,-.28,.08],{brokenArm:-1,missingSpoke:3,backLean:-.16}),Fe(2.75,3.3,[-.55,-.8,1.39],{brokenArm:-1,missingSpoke:2,backTwist:.2}),Fe(-.55,-3.42,[1.65,.65,.32],{brokenArm:1,noBack:!0}),Fe(1.35,1.42,[-.3,-.5,-1.28],{noBase:!0,brokenArm:-1,backTwist:-.14,backTear:2});let ut=Se(t,1);ut.name="Detached chair base",Ue(ut,2.35,2.53,[2.7,.36,.22]);let Mt=q(t,2);Mt.name="Snapped mesh backrest",Ue(Mt,-.75,2.3,[-1.6,.22,-.4]);let zt=Re(t,1);zt.name="Broken chair arm",Ue(zt,1.4,2.62,[1.48,.71,.15]),r(ce(t,2.37,.045,2.84,.7)),r(ce(t,-2.15,.045,.95,-.4)),o=_t;for(let _=0;_<11;_++){let R=c(-3.3,.9),D=c(-3,-1);N([[R,.83,D],[R+.15,.52,D+.2],[R-.12,.04,D+.45],[R+.31,.022,D+.83],[R+.62,.02,D+.47]],.009,v)}N([[-3.25,.026,.8],[-2,.023,1.45],[-1.25,.022,1.78],[-.85,.022,1.47],[-.67,.022,2.5],[.45,.022,2.83],[1.25,.022,2.44]],.012,v),N([[2.8,.027,-2.9],[2.05,.025,-1.5],[1.64,.024,-.4],[1.8,.022,.1],[.98,.022,.6]],.008,M(6446139,.9));let ft=ge(2.55,-3.38,1.92);H([1.7,.72,.72],[0,.4,-.025],M(6713960,.94,m),ft);for(let _ of[-.42,.42]){let R=H([.77,.24,.045],[_,.66,.37],A,ft);_>0&&(R.position.z=.51,R.rotation.z=-.04),pe([_-.13,.66,.41],[_+.13,.66,.41],.014,P,ft)}let Rt=new we;Rt.position.set(-.27,.87,-.04),ft.add(Rt),se([.49,.6,.37],[0,.3,0],P,Rt),H([.4,.35,.025],[0,.26,.2],v,Rt),se([.34,.15,.06],[0,.5,.2],T,Rt),H([.12,.05,.008],[-.07,.515,.236],M(2243883,.4),Rt);for(let _ of[-.08,.08])pe([_,.38,.21],[_,.31,.26],.018,k,Rt);H([.37,.04,.23],[0,.045,.22],v,Rt);for(let _=0;_<7;_++)H([.017,.012,.19],[-.14+_*.047,.07,.22],k,Rt);let qn=ie(.12,.17,[0,.68,-.015],new ze({color:5069384,transparent:!0,opacity:.55,roughness:.45}),Rt,24),Xi=H([.27,.022,.25],[.025,.78,-.015],v,Rt);Xi.rotation.z=.13;let st=M(12039066,.7,x);function nt(_,R,D=0){let z=new we;z.position.set(...R),z.rotation.z=D,_.add(z);let G=[[.052,0],[.055,.014],[.059,.12],[.054,.128],[.047,.12],[.047,.018]].map(ue=>new Ne(...ue));F(new Us(G,24,0,Math.PI*1.9),st,z);let Y=F(new Qt(.036,.008,8,20,Math.PI*1.6),st,z);return Y.rotation.x=Math.PI/2,Y.position.set(.066,.07,0),z}nt(Rt,[0,.07,.23]),nt(ft,[.46,.87,.25],1.25),nt(ft,[.64,.87,-.02]);let $e=M(3877398,.33),ot=F(new Ei(.18,32),$e,ft);ot.rotation.x=-Math.PI/2,ot.position.set(.48,.862,.19),ot.scale.y=.65,ot.castShadow=!1,se([.52,.83,.54],[3.28,.42,-2.4],T);let et=H([.49,.78,.045],[3.21,.43,-2.1],T);et.rotation.y=.24,H([.035,.23,.04],[3.04,.56,-2.065],P),H([.36,.8,.36],[3.39,.4,-1.72],T);let rt=ie(.16,.4,[3.39,1.04,-1.72],new ze({color:7378315,transparent:!0,opacity:.38,roughness:.34}),t,24);rt.rotation.z=.08;let tt=new we;tt.name="Broken lopsided foosball table",tt.position.set(2.24,-.104,.03),tt.rotation.set(0,-.18,-.22),t.add(tt);let Bt=M(13812642,.87,m),cn=M(8099956,.92,E);H([1.18,.25,1.91],[0,.91,0],Bt,tt),H([1.04,.025,1.74],[0,1.048,0],cn,tt);for(let _ of[-.61,.61])H([.1,.18,2.02],[_,1.12,0],Bt,tt);H([1.14,.18,.08],[0,1.12,-.99],Bt,tt);let Yt=new bt;Yt.moveTo(-.57,1.03),Yt.lineTo(.57,1.03),Yt.lineTo(.57,1.21),Yt.lineTo(.23,1.21),Yt.lineTo(.12,1.07),Yt.lineTo(.02,1.15),Yt.lineTo(-.09,1.07),Yt.lineTo(-.16,1.21),Yt.lineTo(-.57,1.21),Yt.closePath();let Cn=F(new an(Yt,{depth:.08,bevelEnabled:!1}),Bt,tt);Cn.position.z=.95;for(let _ of[-.99,.99])H([.3,.1,.012],[0,1.085,_+(_>0?-.045:.045)],v,tt);for(let _ of[-.47,.47])for(let R of[-.8,.8]){let D=_>0&&R>0,z=_>0;if(H([.11,D?.24:z?.57:.8,.12],[_,D?.68:z?.515:.4,R],P,tt),D)for(let G=0;G<4;G++)H([.012,.09,.018],[_-.04+G*.023,.555,R+c(-.04,.04)],A,tt).rotation.z=c(-.2,.2)}let ln=H([.11,.57,.12],[2.89,.09,.98],P);ln.rotation.set(.05,.37,1.42);let Ut=H([.45,.045,.08],[2.55,.045,1.32],Bt);Ut.rotation.y=.4;let L=[];function Q(_,R){L.push(..._,...R)}for(let _ of[-.8,.8])Q([-.48,1.065,_],[.48,1.065,_]);for(let _ of[-.48,.48])Q([_,1.065,-.8],[_,1.065,.8]);Q([-.48,1.065,0],[.48,1.065,0]);for(let _=0;_<48;_++){let R=_/48*Math.PI*2,D=(_+1)/48*Math.PI*2;Q([Math.cos(R)*.19,1.065,Math.sin(R)*.19],[Math.cos(D)*.19,1.065,Math.sin(D)*.19])}let oe=new Pt;oe.setAttribute("position",new lt(L,3)),tt.add(new to(oe,new cr({color:9674366})));let de=[M(9124144,.8),M(10658186,.8)];for(let _=0;_<8;_++){let R=-.78+_*.223,D=_%2?1:-1;_===5?N([[-.91,1.21,R],[-.24,1.21,R],[.18,1.36,R+.13],[.91,1.17,R+.08]],.012,k,tt):pe([-.91,1.21,R],[.91,1.21,R],.012,k,tt),_!==4&&pe([D*.8,1.21,R],[D*1.02,1.21,R],.034,v,tt);let z=_===0||_===7?1:_===1||_===6?2:3;for(let G=0;G<z;G++){if(_===3&&G===0||_===6&&G===1)continue;let Y=(G-(z-1)/2)*.29;H([.055,.1,.037],[Y,1.195,R],de[_%2],tt),fe([.031,.035,.031],[Y,1.28,R],de[_%2],tt),H([.06,.045,.045],[Y,1.11,R],de[_%2],tt)}}fe([.024,.024,.024],[.46,1.09,.69],T,tt),N([[-.46,1.068,.29],[-.2,1.068,.21],[-.08,1.068,.3],[.12,1.068,.23],[.48,1.068,.37]],.007,v,tt);let re=H([.055,.13,.04],[.38,1.09,.51],de[0],tt);re.rotation.z=Math.PI/2;for(let _ of[-1.07,1.07]){pe([-.32,1.27,_],[.32,1.27,_],.008,k,tt);for(let R=0;R<5;R++)fe([.025,.03,.025],[-.25+R*.07,1.27,_],de[_>0?1:0],tt)}let Le=new we;Le.name="MacBook Pro on the floor",Le.position.set(.45,.027,2.18),Le.rotation.y=Math.atan2(e.x-Le.position.x,e.z-Le.position.z),t.add(Le);let Ge=Le.position.clone().add(new S(1.18,0,0).applyAxisAngle(new S(0,1,0),Le.rotation.y)),Ke=R0(e,Ge);t.add(Ke.group);let Qe=A0(Ge);t.add(Qe.group),r(Qe.group);let at=M(8884628,.35,null,.72),ct=M(1053975,.7);function Ye(_,R,D,z,G,Y,ue=!1){let Ve=Math.min(.012,_/6,R/6,D/6),je=F(j(_-2*Ve,R-2*Ve,D,.026-Ve),G,Y);return je.position.set(...z),ue&&(je.rotation.x=-Math.PI/2),je}Ye(.88,.59,.026,[0,0,0],at,Le,!0),Ye(.66,.275,.003,[0,.0145,-.065],ct,Le,!0);let At=ie(.013,.77,[0,.02,-.281],v,Le,20);At.rotation.z=Math.PI/2;let yt=new we;yt.position.set(0,.034,-.295),yt.rotation.x=Math.PI/2,Le.add(yt),Ye(.88,.59,.018,[0,.295,0],at,yt),Ye(.856,.566,.005,[0,.295,.01],ct,yt);for(let _ of[-.34,.34])for(let R of[-.21,.21])fe([.025,.006,.025],[_,-.014,R],b,Le);let kt=document.createElement("canvas");kt.width=256,kt.height=384;let Pn=kt.getContext("2d");vd(Pn,28,42,200);let Ht=h(kt),it=new ze({map:Ht,transparent:!0,alphaTest:.1,roughness:.64,metalness:.03,emissiveMap:Ht,emissive:16777215,emissiveIntensity:.14}),Vt=F(new wt(.115,.1725),it,yt);Vt.name="Off-center Figma vinyl sticker",Vt.position.set(.265,.365,-.0108),Vt.rotation.set(0,Math.PI,-.14),Vt.castShadow=!1;let[He,We]=l(1024);He.height=640,We.fillStyle="#111b22",We.fillRect(0,0,1024,640),We.fillStyle="#222e36",We.fillRect(0,0,1024,38),We.fillRect(0,38,140,602),We.fillRect(894,38,130,602),vd(We,15,6,17),We.font="13px sans-serif",We.fillStyle="#bac6ca",We.fillText("Figma / Wireframes",44,25);for(let _=0;_<7;_++)We.fillStyle=_===2?"#48616b":"#657a80",We.fillRect(18,85+_*34,85-_%3*18,3);for(let _=0;_<3;_++){let R=181+_*231;We.fillStyle="#b2bfbb",We.fillRect(R,118,197,390),We.fillStyle="#465b62",We.fillRect(R+12,137,173,19),We.fillRect(R+12,175,173,86),We.strokeStyle="#53696d",We.lineWidth=2,We.beginPath(),We.moveTo(R+12,175),We.lineTo(R+185,261),We.moveTo(R+185,175),We.lineTo(R+12,261),We.stroke();for(let D=0;D<5;D++)We.fillStyle="#82918f",We.fillRect(R+13,278+D*20,c(75,170),4);We.fillStyle="#526c72",We.fillRect(R+14,401,169,28),We.strokeStyle="#788c8d",We.strokeRect(R+14,447,78,39),We.strokeRect(R+105,447,78,39)}for(let _=0;_<12;_++)We.fillStyle="#50666e",We.fillRect(912,84+_*31,c(35,90),3);let Mn=h(He),sn=new xt({map:Mn,color:8360598}),jn=F(new wt(.823,.525),sn,yt);jn.position.set(0,.3,.013),jn.castShadow=!1,H([.076,.014,.002],[0,.556,.014],ct,yt),fe([.003,.003,.001],[0,.553,.0155],M(1978424,.2),yt);let[hn,oi]=l(512);hn.height=64,oi.font="22px sans-serif",oi.textAlign="center",oi.fillStyle="#9ca5a6",oi.fillText("MacBook Pro",256,40);let vr=F(new wt(.14,.018),new xt({map:h(hn),transparent:!0}),yt);vr.position.set(0,.025,.013),vr.castShadow=!1;let[ei,ai]=l(1024);ai.fillStyle="#151b1e",ai.fillRect(0,0,1024,1024),ai.strokeStyle="#3e494d",ai.fillStyle="#9ca5a6",ai.font="25px sans-serif",ai.textAlign="center";let Pl=["1234567890-=","QWERTYUIOP[]","ASDFGHJKL;\u2019","ZXCVBNM,./"];for(let _=0;_<4;_++)for(let R=0;R<12;R++){let D=18+R*83,z=74+_*181;ai.strokeRect(D,z,72,145),ai.fillText(Pl[_][R]||"",D+36,z+86)}ai.strokeRect(250,825,524,125);let bo=F(new wt(.635,.257),new ze({map:h(ei),roughness:.7}),Le);bo.rotation.x=-Math.PI/2,bo.position.set(0,.0165,-.065);let lE=Ye(.34,.17,.001,[0,.0135,.174],M(6714488,.44,null,.62),Le,!0),$d=new vn(new Ei(.0012,5),v,480);for(let _=0;_<480;_++){let R=new Ft,D=_<240?-1:1,z=_%240;R.position.set(D*(.355+z%8*.006),.017,-.196+Math.floor(z/8)*.0085),R.rotation.x=-Math.PI/2,R.updateMatrix(),$d.setMatrixAt(_,R.matrix)}Le.add($d);for(let _ of[-1,1])for(let R=0;R<3;R++)H([.003,.006,.035],[_*.444,.001,-.18+R*.065],ct,Le);let Il=new Fn(9285310,0,1.4,2);Il.position.set(0,.29,.14),yt.add(Il);let ig=sn.color.clone();sn.color.setScalar(0);let _r=!1,qi=0,Ta=!1;function Ll(_){yt.rotation.x=Ze.lerp(Math.PI/2,-.2,_);let R=Ze.smoothstep(_,.22,.72);sn.color.copy(ig).multiplyScalar(R),Il.intensity=.6*R}let Kd={object:Le,screen:jn,get isReady(){return qi===1},get isOpen(){return _r},get openProgress(){return qi},getLidGrip(_){return yt.updateWorldMatrix(!0,!1),yt.localToWorld(_.set(.12,.6,-.004))},setOpenProgress(_){Ta=!0,qi=Ze.clamp(_,0,1),_r=qi>0,Ll(qi)},open(){return _r?!1:(Ta=!1,_r=!0,!0)},close(){Ta=!1,_r=!1,qi=0,Ll(0)},update(_,R=!1){Ta||!_r||qi===1||(qi=R?1:Math.min(1,qi+_/.95),Ll(Ze.smootherstep(qi,0,1)))}};function sg(){let[_,R]=l();R.fillStyle="#b2af94",R.fillRect(0,0,512,512),R.fillStyle="#4f584c";for(let D=0;D<35;D++){let z=35+D*12;R.fillRect(30,z,c(100,430),c(1,3))}return R.strokeStyle="rgba(64,54,28,.4)",R.lineWidth=4,R.beginPath(),R.arc(345,130,61,0,Math.PI*2),R.stroke(),p(R,512,8e3,"49,45,27",.16),h(_)}let rg=M(16777215,.99,sg()),og=M(2836532,.88),ag=[T,P,A,M(8619381,.97)],Dl=[],Ul=[];for(let _=0;_<82;_++){let R=c(-3.62,3.58),D=c(-3.75,4);Math.abs(R)<.65&&D<.8&&D>-.9&&(R-=1.2);let z=F(new wt(c(.13,.29),c(.17,.37),4,4),rg),G=c(-.1,.1),Y=c(-.07,.07),ue=a()*Math.PI*2,Ve=c(.012,.038);z.rotation.set(-Math.PI/2,0,ue),z.position.set(R,.005,D),z.material.side=Lt,z.name="Paper resting on the floor";let je=z.geometry.attributes.position;for(let It=0;It<je.count;It++)je.setZ(It,Math.abs(Math.sin(je.getX(It)*33+G)*Math.sin(je.getY(It)*24+Y))*.0015+Ve*.008);Dl.push(z)}for(let _=0;_<95;_++){let R=c(-3.65,3.65),D=c(-3.7,4);Math.abs(R)<.8&&D>-.8&&D<1.3&&(R-=1.7);let z=H([c(.025,.17),c(.015,.065),c(.035,.2)],[R,c(.025,.055),D],ag[_%4]);z.rotation.set(c(-.13,.13),a()*Math.PI*2,c(-.13,.13)),z.name="Fallen casing fragment",r(z)}for(let _=0;_<9;_++){let R=new we;R.position.set(c(-3,3),.028,c(-2,3)),R.rotation.y=a()*6,t.add(R),R.name="Loose circuit board",r(R),H([.18,.012,.24],[0,0,0],og,R);for(let D=0;D<4;D++)H([.035,.017,.05],[-.055+D%2*.1,.013,-.07+Math.floor(D/2)*.12],v,R)}for(let _=0;_<12;_++){let R=H([.09,.018,.09],[c(-3.5,3.5),.03,c(-3.4,3.7)],v);R.rotation.y=a()*6,H([.06,.003,.03],[0,.011,0],T,R),R.name="Broken key cap",r(R)}for(let _=0;_<14;_++){let R=H([c(.3,.7),.012,c(.3,.8)],[c(-3.4,3.4),.007,c(-3.5,3.7)],M(_%2?8948860:10197637,.98,E));R.rotation.y=c(-.15,.15),Ul.push(R)}let kn=S0(Ul);function Jd(_,R,D){_.save(),_.lineCap="round";for(let[G,Y,ue,Ve]of D){for(let je=0;je<13;je++){let It=Y+je*Ve/12;_.strokeStyle=R,_.globalAlpha=c(.65,.94),_.lineWidth=c(12,27),_.beginPath(),_.moveTo(G+c(-18,35),It),_.quadraticCurveTo(G+ue*.45,It+c(-12,12),G+ue+c(-35,18),It+c(-8,8)),_.stroke()}_.globalAlpha=1;for(let je=0;je<8;je++)f(_,G+a()*ue,Y+a()*Ve,c(13,43),"54,66,61",c(.035,.09))}_.globalAlpha=1;for(let G=0;G<95;G++){let Y=a()*1024,ue=a()<.55?c(800,1045):a()*1024;f(_,Y,ue,c(14,95),G%3?"44,49,38":"103,77,42",c(.045,.16))}let z=_.createLinearGradient(0,0,0,1024);z.addColorStop(0,"rgba(43,44,32,.30)"),z.addColorStop(.13,"rgba(43,44,32,0)"),z.addColorStop(.77,"rgba(43,44,32,0)"),z.addColorStop(1,"rgba(44,40,27,.38)"),_.fillStyle=z,_.fillRect(0,0,1024,1024);for(let G=0;G<23;G++){let Y=a()*1024,ue=c(8,105);_.strokeStyle=`rgba(86,67,38,${c(.06,.17)})`,_.lineWidth=c(1.5,6),_.beginPath(),_.moveTo(Y,ue),_.bezierCurveTo(Y+4,ue+60,Y-3,ue+125,Y+c(-5,5),ue+c(130,460)),_.stroke()}p(_,1024,12e3,"36,42,30",.21),_.restore()}function Hl(_){let[R,D]=l(1024);D.fillStyle="#bfc4b6",D.fillRect(0,0,1024,1024),D.strokeStyle="#304a4d",D.fillStyle="#304a4d",D.lineWidth=4,D.font="28px sans-serif",D.fillText(_?"ONBOARDING / FIRST RUN":"WORKSPACE / DASHBOARD",45,67);function z(G,Y){D.beginPath(),D.moveTo(G,Y),D.lineTo(G+50,Y),D.lineTo(G+37,Y-11),D.moveTo(G+50,Y),D.lineTo(G+37,Y+11),D.stroke()}if(_)for(let G=0;G<3;G++){let Y=48+G*330;D.strokeRect(Y,154,253,593),D.strokeRect(Y+14,174,225,544),D.fillRect(Y+80,187,91,5),D.strokeRect(Y+32,225,189,130),D.beginPath(),D.moveTo(Y+32,225),D.lineTo(Y+221,355),D.moveTo(Y+221,225),D.lineTo(Y+32,355),D.stroke();for(let ue=0;ue<4;ue++)D.fillRect(Y+31,397+ue*25,170-ue%2*41,4);D.strokeRect(Y+32,524,188,54),D.strokeRect(Y+32,602,188,54),G<2&&z(Y+266,451),D.font="23px sans-serif",D.fillText(["01 / welcome","02 / connect","03 / explore"][G],Y+23,803)}else for(let G=0;G<2;G++){let Y=45+G*498;D.strokeRect(Y,165,436,525),D.strokeRect(Y,165,436,44),D.strokeRect(Y+14,223,87,448);for(let ue=0;ue<5;ue++)D.fillRect(Y+25,246+ue*40,59-ue%2*17,4);D.strokeRect(Y+118,230,297,133),D.beginPath(),D.moveTo(Y+135,343),D.lineTo(Y+171,300),D.lineTo(Y+212,325),D.lineTo(Y+270,265),D.lineTo(Y+328,293),D.lineTo(Y+397,248),D.stroke();for(let ue=0;ue<2;ue++)for(let Ve=0;Ve<2;Ve++){D.strokeRect(Y+118+Ve*154,385+ue*145,139,124),D.fillRect(Y+131+Ve*154,404+ue*145,92,5);for(let je=0;je<3;je++)D.fillRect(Y+131+Ve*154,431+ue*145+je*18,103-je*13,3)}}return D.strokeStyle="#7d453b",D.lineWidth=3,D.beginPath(),D.ellipse(510,905,357,48,-.02,0,Math.PI*2),D.stroke(),D.font="25px sans-serif",D.fillStyle="#7d453b",D.fillText(_?"simplify the first step / test again":"less noise \u2014 keep the primary action visible",180,915),Jd(D,"#bfc4b6",_?[[345,225,290,290],[65,570,220,170],[660,765,280,130]]:[[570,215,350,235],[145,500,280,200],[220,855,430,95]]),h(R)}for(let _=0;_<2;_++){let R=new we;R.name="Whiteboard with interface wireframes",R.position.set(_?2.25:.12,2.2,-3.94),R.rotation.z=_?-.025:.012,t.add(R),H([1.78,1.12,.04],[0,0,0],k,R);let D=Hl(!_),z=F(new wt(1.7,1.04),new ze({map:D,roughness:.75,emissive:16777215,emissiveMap:D,emissiveIntensity:.025}),R);z.position.z=.024,H([1.7,.023,.09],[0,-.57,.025],k,R);for(let G=0;G<3;G++)pe([-.58+G*.18,-.546,.057],[-.46+G*.18,-.546,.057],.013,G?v:M(3755626,.7),R)}let Yn=new we;Yn.name="Planning whiteboard covered in sticky notes",Yn.position.set(1.9,0,-3),Yn.rotation.y=0,t.add(Yn);for(let _ of[-1.12,1.12]){H([.045,.98,.055],[_,.49,0],P,Yn),H([.11,.06,.65],[_,.06,0],P,Yn);for(let R of[-.25,.25])fe([.047,.045,.032],[_,.035,R],v,Yn)}H([2.68,1.94,.05],[0,1.85,0],k,Yn);let Qd=new Set([1,4,7,9,13,17,20,22,24]),[cg,Gt]=l(1024);Gt.fillStyle="#c2c7ba",Gt.fillRect(0,0,1024,1024);for(let _=0;_<65;_++)f(Gt,a()*1024,a()*1024,c(15,110),"60,69,55",.065);Gt.strokeStyle="rgba(38,62,63,.65)",Gt.fillStyle="rgba(38,62,63,.65)",Gt.lineWidth=3;for(let _=0;_<3;_++){let R=170+_*245;Gt.strokeRect(R,560,190,335),Gt.strokeRect(R+12,579,166,28),Gt.strokeRect(R+12,625,166,102),Gt.beginPath(),Gt.moveTo(R+12,625),Gt.lineTo(R+178,727),Gt.moveTo(R+178,625),Gt.lineTo(R+12,727),Gt.stroke();for(let D=0;D<4;D++)Gt.fillRect(R+15,753+D*19,137-D%2*39,3);Gt.strokeRect(R+15,843,160,28),_<2&&(Gt.beginPath(),Gt.moveTo(R+198,727),Gt.lineTo(R+235,727),Gt.lineTo(R+222,717),Gt.moveTo(R+235,727),Gt.lineTo(R+222,737),Gt.stroke())}Jd(Gt,"#c2c7ba",[[130,620,285,170],[407,735,280,165],[685,530,190,150]]);for(let _ of Qd){let R=(-1.1+_%9*.273)/2.6*1024+512,D=(.5-(2.63-Math.floor(_/9)*.28-1.85)/1.86)*1024;Gt.fillStyle="rgba(203,203,175,.20)",Gt.fillRect(R-40,D-59,80,118),Gt.fillStyle="rgba(111,96,51,.17)",Gt.fillRect(R-34,D-56,68,8);for(let z=0;z<9;z++)Gt.fillStyle="rgba(77,67,39,.15)",Gt.fillRect(R+c(-33,33),D-53+c(-2,6),c(1,3),c(2,5))}let jd=h(cg);F(new wt(2.6,1.86),new ze({map:jd,roughness:.75,emissive:16777215,emissiveMap:jd,emissiveIntensity:.025}),Yn).position.set(0,1.85,.027),H([2.58,.025,.13],[0,.87,.045],k,Yn);for(let _=0;_<3;_++)pe([-.63+_*.23,.899,.09],[-.48+_*.23,.899,.09],.017,_===0?M(3428197,.75):v,Yn);H([.18,.045,.07],[.62,.906,.075],v,Yn);let lg=["#c3b25e","#b38488","#7faaa9","#a4b081"];function Ra(_,R,D,z,G){let[Y,ue]=l(128);ue.fillStyle=lg[G%4],ue.fillRect(0,0,128,128),ue.fillStyle="rgba(42,49,37,.16)",ue.fillRect(0,0,128,14),ue.strokeStyle="rgba(39,52,47,.68)",ue.lineWidth=2.6;for(let Xt=0;Xt<3+G%3;Xt++){ue.beginPath();let li=30+Xt*16;ue.moveTo(16,li);for(let Di=1;Di<8;Di++)ue.lineTo(16+Di*c(8,12),li+c(-2.4,2.4));ue.stroke()}G%4===0&&(ue.strokeRect(19,75,35,27),ue.strokeRect(72,75,35,27));let Ve=new wt(.205,.215,3,5),je=Ve.attributes.position;for(let Xt=0;Xt<je.count;Xt++){let li=je.getY(Xt);je.setZ(Xt,Math.max(0,-li-.015)**2*3.3)}Ve.computeVertexNormals();let It=h(Y),rn=F(Ve,new ze({map:It,roughness:.96,side:Lt,emissive:16777215,emissiveMap:It,emissiveIntensity:.025}),_);return rn.position.set(R,D,z),rn.rotation.z=c(-.13,.13),rn}for(let _=0;_<3;_++)for(let R=0;R<9;R++)Qd.has(_*9+R)||Ra(Yn,-1.1+R*.273+c(-.018,.018),2.63-_*.28+c(-.014,.014),.04,_*9+R);for(let _=0;_<5;_++)_===1||_===4||Ra(Yn,_<3?-1.1:1.09,1.75-_%3*.29,.04,28+_);for(let _=0;_<4;_++){let R=Ra(t,-1.7-_*.3,.005,-.38+_*.26,33+_);R.rotation.set(-Math.PI/2,0,.6+_*.73);let D=R.geometry.attributes.position;for(let z=0;z<D.count;z++)D.setZ(z,D.getZ(z)*.1);Dl.push(R)}let Aa=b0();t.add(Aa.group);let Nl=al({flies:14,moths:7,spread:[.88,.23,.5],sizeScale:.55,dive:.65});Nl.group.position.y=-.4,Aa.group.add(Nl.group);for(let _ of[-.66,.66])pe([_,3.3,-.55],[_,2.98,-.55],.006,v);N([[.85,3.3,-.6],[1.03,2.8,-.65],[1.26,2.86,-.7],[1.3,3.3,-.7]],.007,v);let qs=new we;qs.position.set(-2.1,.88,-3.2),be.parent.add(qs),ie(.11,.035,[0,0,0],v,qs),pe([0,0,0],[.05,.31,0],.016,P,qs),pe([.05,.31,0],[.22,.4,.02],.013,P,qs),F(new Hs(.12,.13,20,1,!0),P,qs).position.set(.23,.37,.02),fe([.04,.025,.04],[.23,.32,.02],new xt({color:15122820}),qs);let ef=new Fn(15121790,1.2,2.5,2);ef.position.set(-1.87,1.19,-3.18),t.add(ef);let Fl=al({flies:5,moths:3,spread:[.28,.1,.22],seed:113,sizeScale:.55,dive:.1});Fl.group.position.set(-1.87,1.14,-3.02),t.add(Fl.group);let tf=new Wt({color:14102035,roughness:.31,clearcoat:1,clearcoatRoughness:.18}),nf=new Wt({color:15790556,roughness:.13,transparent:!0,opacity:.16,depthWrite:!1,clearcoat:1,clearcoatRoughness:.08}),Ol=M(14081488,.49),Ca=M(9016713,.69),hg=new io;function zl(_){let R=hg.load(new URL(`./labels/${_}.svg`,import.meta.url).href);return R.colorSpace=pt,R.anisotropy=Math.min(8,i.capabilities.getMaxAnisotropy()),new ze({map:R,transparent:!0,alphaTest:.15,roughness:.72,side:Lt})}let ug=zl("ketchup-glass"),dg=zl("ketchup-squeeze"),fg=zl("ketchup-neck");for(let _=0;_<8140;_++)a();function pg(_,R){for(let D=1;D<_.length;D++)if(_[D][1]>=R){let[z,G]=_[D-1],[Y,ue]=_[D];return Ze.lerp(z,Y,(R-G)/(ue-G||1))}return _.at(-1)[0]}function Bl(_,R,D,z,G,Y=1,ue=1.02){let Ve=new wt(1,1,24,16),je=Ve.attributes.position,It=Ve.attributes.uv;for(let Xt=0;Xt<je.count;Xt++){let li=(It.getX(Xt)*2-1)*ue,Di=Ze.lerp(D,z,It.getY(Xt)),Io=pg(R,Di)+.0018;je.setXYZ(Xt,Math.sin(li)*Io,Di,Math.cos(li)*Io*Y+8e-4)}Ve.computeVertexNormals();let rn=F(Ve,G,_);return rn.castShadow=!1,rn}function kl(_,R,D,z=1){let G=F(new Us(_.map(Y=>new Ne(...Y)),48),R,D);return G.scale.z=z,G}function sf(_,R,D,z,G,Y){let ue=new we;return ue.name=_.name,ue.add(_),_.position.y=-G,t.add(ue),ue.position.set(R,0,D),ue.rotation.set(...z),ue.scale.setScalar(Y),ue.updateMatrixWorld(!0),fr(ue,kn)}let is=new we;is.name="Discarded glass ketchup bottle";let Pa=[[0,0],[.063,0],[.076,.014],[.08,.047],[.079,.19],[.069,.267],[.049,.342],[.03,.41],[.029,.447],[.033,.454],[.032,.471],[0,.471]],rf=Pa.filter(_=>_[1]<.44).map(([_,R])=>[Math.max(0,_-.0035),R+.004]);rf.push([.026,.443],[0,.443]);let mg=kl(rf,tf,is),gg=kl(Pa,nf,is);gg.castShadow=!1,Bl(is,Pa,.047,.24,ug),Bl(is,Pa,.365,.432,fg,1,.95);let To=new we;To.position.y=.48,is.add(To),ie(.037,.036,[0,0,0],Ol,To,32),ie(.0365,.006,[0,.461,0],Ca,is,32);for(let _=0;_<30;_++){let R=_/30*Math.PI*2;pe([Math.cos(R)*.037,-.013,Math.sin(R)*.037],[Math.cos(R)*.037,.014,Math.sin(R)*.037],.0011,Ca,To)}let of=F(new Qt(.07,.003,6,32),nf,is);of.rotation.x=Math.PI/2,of.position.y=.016;let xg=sf(is,-.28,2.92,[-.25,.45,Math.PI/2],.25,.82),ys=new we;ys.name="Discarded squeeze ketchup bottle";let af=[[0,.058],[.055,.058],[.065,.075],[.098,.105],[.115,.15],[.109,.25],[.118,.36],[.112,.415],[.092,.438],[0,.438]];kl(af,tf,ys,.62),Bl(ys,af,.122,.403,dg,.62,1.04);let yg=ie(.069,.06,[0,.034,0],Ol,ys,40);yg.scale.z=.73;let vg=ie(.0694,.003,[0,.014,0],Ca,ys,40);vg.scale.z=.73,se([.042,.012,.01],[0,.014,.051],Ol,ys),H([.031,.018,.008],[0,.04,-.05],Ca,ys),sf(ys,1.95,2.45,[-Math.PI/2,0,-.45],.225,.8);let[cf,Ct]=l(1024);cf.height=512,Ct.fillStyle="#86b0b2",Ct.fillRect(0,0,1024,512);for(let _=0;_<180;_++)f(Ct,a()*1024,a()*512,c(5,55),_%2?"225,229,207":"83,125,129",c(.035,.14));Ct.lineCap="round";for(let _=0;_<260;_++){let R=a()*1024,D=a()*512;Ct.strokeStyle=`rgba(44,57,53,${c(.3,.65)})`,Ct.lineWidth=c(2,4),Ct.beginPath(),Ct.moveTo(R,D),Ct.quadraticCurveTo(R-3,D+7,R+c(-2,3),D+c(7,15)),Ct.stroke()}Ct.fillStyle="#eee2c3",Ct.beginPath(),Ct.moveTo(512,176),Ct.bezierCurveTo(459,117,386,112,350,169),Ct.bezierCurveTo(313,243,337,421,410,466),Ct.bezierCurveTo(460,493,565,493,615,466),Ct.bezierCurveTo(687,421,711,243,675,169),Ct.bezierCurveTo(639,112,565,117,512,176),Ct.fill();for(let _ of[433,591])f(Ct,_,271,29,"197,123,110",.2),Ct.fillStyle="#3d3630",Ct.beginPath(),Ct.ellipse(_,215,7,4,-.2,0,Math.PI*2),Ct.fill();Ct.strokeStyle="#52443a",Ct.lineWidth=3,Ct.beginPath(),Ct.moveTo(512,274),Ct.lineTo(512,316),Ct.bezierCurveTo(501,335,482,337,472,326),Ct.moveTo(512,316),Ct.bezierCurveTo(523,335,542,337,552,326),Ct.stroke();for(let _ of[-1,1])for(let R=0;R<3;R++)Ct.fillStyle="#6e5b46",Ct.beginPath(),Ct.arc(512+_*(25+R*9),300+R%2*12,1.8,0,Math.PI*2),Ct.fill();p(Ct,512,2300,"112,124,109",.07);let _g=new Wt({map:h(cf),roughness:.29,clearcoat:1,clearcoatRoughness:.16}),lf=new Wt({color:9091001,roughness:.25,clearcoat:1,clearcoatRoughness:.14}),[hf,ci]=l(1024);hf.height=512,ci.fillStyle="#e8dcba",ci.fillRect(0,0,1024,512);for(let _=0;_<18;_++){let R=_*1024/18;ci.fillStyle=_%2?"#93b8ae":"#7ca6a5",ci.beginPath(),ci.moveTo(R-12,0),ci.bezierCurveTo(R-20,170,R+4,310,R-12,512),ci.lineTo(R+12,512),ci.bezierCurveTo(R+26,310,R+8,170,R+17,0),ci.closePath(),ci.fill()}let Ia=ci.createLinearGradient(0,220,0,512);Ia.addColorStop(0,"rgba(103,62,27,0)"),Ia.addColorStop(.7,"rgba(103,62,27,.09)"),Ia.addColorStop(1,"rgba(74,39,14,.48)"),ci.fillStyle=Ia,ci.fillRect(0,0,1024,512);let uf=new Wt({map:h(hf),roughness:.34,clearcoat:.8,side:Lt}),Yi=new we;Yi.name="Blue pointy-eared mug tipped on its side";function df(_,R){let D=new Us(_.map(Y=>new Ne(...Y)),64),z=D.attributes.uv,G=D.attributes.position;for(let Y=0;Y<G.count;Y++)z.setY(Y,G.getY(Y)/.258);return D.rotateY(Math.PI),F(D,R,Yi)}df([[0,.008],[.085,.008],[.113,.018],[.126,.043],[.139,.138],[.144,.236],[.14,.257]],_g),df([[.127,.257],[.128,.237],[.121,.09],[.106,.034],[0,.034]],uf);let ff=F(new Qt(.134,.008,10,64),lf,Yi);ff.rotation.x=Math.PI/2,ff.position.y=.254;let pf=F(new Qt(.102,.004,8,48),uf,Yi);pf.rotation.x=Math.PI/2,pf.position.y=.012;for(let _ of[-1,1]){let R=new we;R.position.set(_*.095,.235,.103),R.rotation.set(-.06,_*Math.atan2(.095,.103),-_*.1),Yi.add(R);let D=new bt;D.moveTo(-.047,0),D.bezierCurveTo(-.044,.046,-.015,.112,0,.142),D.bezierCurveTo(.018,.125,.046,.045,.047,0),D.closePath();let z=new an(D,{depth:.013,bevelEnabled:!0,bevelSegments:3,steps:1,bevelSize:.005,bevelThickness:.005,curveSegments:12});z.translate(0,0,-.0065),F(z,lf,R),N([[-.028,.018,.014],[-.025,.057,.014],[0,.113,.014],[.027,.036,.014]],.0019,M(5005659,.62),R)}let[Mg,La]=l(256);La.fillStyle="#e8dfc6",La.fillRect(0,0,256,256),La.fillStyle="#84adb0";for(let _ of[0,95,200])La.fillRect(_,0,47,256);let Eg=new Wt({map:h(Mg),roughness:.28,clearcoat:1});N([[.129,.211,0],[.195,.222,0],[.249,.188,0],[.257,.13,0],[.229,.075,0],[.178,.057,0],[.125,.076,0]],.014,Eg,Yi);let Ro=new bt;Ro.moveTo(-.021,.01),Ro.quadraticCurveTo(0,.021,.021,.01),Ro.quadraticCurveTo(.021,-.003,0,-.019),Ro.quadraticCurveTo(-.022,-.004,-.021,.01),F(new an(Ro,{depth:.012,bevelEnabled:!0,bevelSize:.003,bevelThickness:.003,bevelSegments:2,curveSegments:8}),new Wt({color:2697251,roughness:.3,clearcoat:1}),Yi).position.set(0,.129,.142);let Zi=new we;Zi.name="Spilled animal mug in the left foreground",Zi.add(Yi),Yi.position.y=-.135,t.add(Zi);let Mr=new S(-.55,-.05,.83).normalize(),Er=new S(.54,.66,.39);Er.addScaledVector(Mr,-Er.dot(Mr)).normalize();let Vl=new S().crossVectors(Mr,Er).normalize();Zi.quaternion.setFromRotationMatrix(new Tt().makeBasis(Vl,Mr,Er)),Zi.scale.setScalar(.72),Zi.position.set(.24,0,3.02),Zi.updateMatrixWorld(!0),fr(Zi,kn),Zi.updateMatrixWorld(!0);let mf=Math.hypot(Vl.y,Er.y),Da=Yi.localToWorld(new S(-.134*Vl.y/mf,.254,-.134*Er.y/mf)),Ao=new S(Mr.x,0,Mr.z).normalize(),Sr=Da.clone().addScaledVector(Ao,.23);Sr.y=kn(Sr.x,Sr.z)+.001;let gf=new Wt({color:5324843,roughness:.13,metalness:.04,clearcoat:1,clearcoatRoughness:.08,transparent:!0,opacity:.94,side:Lt}),Sg=new ze({color:9072713,roughness:.4,transparent:!0,opacity:.68,depthWrite:!1,side:Lt});function xf(_,R,D,z,G=0){let Y=new bt;for(let It=0;It<=80;It++){let rn=It/80*Math.PI*2,Xt=1+.11*Math.sin(rn*3+G)+.065*Math.sin(rn*7-.3)+.025*Math.cos(rn*13),li=Math.cos(rn)*D*Xt,Di=Math.sin(rn)*z*Xt;It?Y.lineTo(li,Di):Y.moveTo(li,Di)}Y.closePath();let ue=new Oi(Y,32),Ve=F(ue,Sg);Ve.rotation.x=-Math.PI/2,Ve.scale.setScalar(1.045),Ve.position.set(_,kn(_,R)+5e-4,R),Ve.castShadow=!1;let je=F(ue,gf);return je.rotation.x=-Math.PI/2,je.position.set(_,kn(_,R)+.001,R),je.castShadow=!1,je}xf(Sr.x,Sr.z,.23,.145,.4);let Co=Da.clone();Co.y=kn(Co.x,Co.z)+.008,N([Da.toArray(),Co.toArray(),Co.clone().addScaledVector(Ao,.09).toArray(),Sr.toArray()],.008,gf);for(let[_,R,D]of[[.45,.1,.018],[.51,-.07,.012],[.37,-.18,.022],[.29,.21,.009]]){let z=Da.clone().addScaledVector(Ao,_).add(new S(-Ao.z*R,0,Ao.x*R));xf(z.x,z.z,D,D*.65,_*3)}t.updateMatrixWorld(!0);for(let _ of Dl){let R=_.geometry.attributes.position;for(let D=0;D<R.count;D++){let z=_.localToWorld(new S(R.getX(D),R.getY(D),0)),G=.003;for(let Y of Ul){let ue=Y.worldToLocal(z.clone()),Ve=Y.geometry.parameters;Math.abs(ue.x)<Ve.width/2&&Math.abs(ue.z)<Ve.depth/2&&(G=Math.max(G,.013))}R.setZ(D,R.getZ(D)+G+.002-_.position.y)}R.needsUpdate=!0,_.geometry.computeVertexNormals(),_.geometry.computeBoundingSphere()}for(let[_,R,D,z,G]of[[-2.53,2.13,1.52,1.08,!0],[-.62,2.13,1.78,1.1,!1]]){let Y=new we;Y.name="Left-wall design whiteboard",Y.position.set(-3.86,R,_),Y.rotation.y=Math.PI/2,t.add(Y),H([D,z,.045],[0,0,0],k,Y);let ue=Hl(G),Ve=F(new wt(D-.07,z-.07),new ze({map:ue,roughness:.85,emissive:16777215,emissiveMap:ue,emissiveIntensity:.025}),Y);Ve.position.z=.026,H([D-.07,.025,.1],[0,-z/2,.035],k,Y),pe([-.4,-z/2+.025,.06],[-.23,-z/2+.025,.06],.011,v,Y),H([.13,.035,.065],[D*.29,-z/2+.029,.045],W,Y),Ra(Y,D*.35,z*.21,.034,G?6:9)}let xi=new we;xi.name="Worn bookshelf of design books",xi.position.set(-3.65,0,1.65),xi.rotation.y=Math.PI/2,t.add(xi);let Ua=M(11643027,.92,m),wg=M(10920589,.98);H([1.56,2.38,.035],[0,1.19,-.185],Ua,xi);for(let _ of[-.765,.765])H([.045,2.42,.42],[_,1.21,.015],Ua,xi);for(let _ of[.12,.66,1.2,1.74,2.28])H([1.5,.035,.42],[0,_,.015],Ua,xi);H([1.51,.1,.045],[0,.05,.19],Ua,xi);let Ha=[["The Design of Everyday Things","#b5ad86"],["Don't Make Me Think","#bd8b36"],["Thinking with Type","#9f392f"],["Grid Systems","#adaf9a"],["Designing Interfaces","#54796f"],["About Face","#393e3e"],["The Elements of User Experience","#758b9d"],["Sprint","#b3a847"],["Universal Principles of Design","#b8b5a4"],["Designing for Interaction","#80665b"],["Sketching User Experiences","#456976"],["The Shape of Design","#bcb296"]],bg=Ha.map(([_,R],D)=>{let[z,G]=l(128);z.height=1024,G.fillStyle=R,G.fillRect(0,0,128,1024);let Y=G.createLinearGradient(0,0,128,0);return Y.addColorStop(0,"rgba(0,0,0,.35)"),Y.addColorStop(.25,"rgba(0,0,0,0)"),Y.addColorStop(.86,"rgba(230,219,175,.12)"),Y.addColorStop(1,"rgba(0,0,0,.2)"),G.fillStyle=Y,G.fillRect(0,0,128,1024),G.save(),G.translate(76,70),G.rotate(Math.PI/2),G.fillStyle=[2,4,5,6,9,10].includes(D)?"#ded9c5":"#262b26",G.font="600 47px Georgia,serif",G.fillText(_,0,0,820),G.restore(),G.fillStyle="rgba(217,210,181,.55)",G.fillRect(14,947,100,3),G.fillRect(14,963,100,3),p(G,128,400,"22,24,17",.22),new ze({map:h(z),roughness:.96})});for(let _=0;_<4;_++){let R=-.69;for(let D=0;D<16;D++){let z=(D+_*5)%Ha.length,G=c(.045,.085),Y=c(.3,.44),ue=c(.22,.3);if(R+G>.68)break;if(D===7||_===2&&D===11){R+=.1;continue}let Ve=new we;Ve.name=Ha[z][0],xi.add(Ve);let je=D%6===5?-.12:c(-.025,.025);Ve.rotation.z=je,Ve.position.set(R+G/2,.12+_*.54+.018+Math.abs(Math.sin(je))*G/2,.18-ue/2),H([G-.008,Y-.009,ue-.007],[0,Y/2,0],wg,Ve);let It=M(Ha[z][1],.93);for(let Xt of[-1,1])H([.004,Y,ue],[Xt*(G/2-.002),Y/2,0],It,Ve);H([G,Y,.007],[0,Y/2,ue/2],It,Ve);let rn=F(new wt(G-.002,Y-.004),bg[z],Ve);rn.position.set(0,Y/2,ue/2+.004),rn.castShadow=!1,R+=G+.008}}for(let _ of[.14,.68,1.22,1.76,2.3])H([1.44,.002,.035],[0,_,.196],M(7171673,.99),xi);let Tg=H([.32,.055,.24],[.41,2.327,.03],M(6964536,.95),xi);Tg.rotation.y=.17;let[Rg,Nt]=l(2048);Nt.fillStyle="#66695d",Nt.fillRect(0,0,2048,2048);for(let _=0;_<1250;_++)f(Nt,a()*2048,a()*2048,c(4,125),_%4?"34,31,21":"135,131,110",c(.035,.22));for(let _=0;_<160;_++){let R=_%4,D=R<2?(R?2048:0)+c(-45,90):a()*2048,z=R<2?a()*2048:(R===2?0:2048)+c(-45,90);f(Nt,D,z,c(60,190),"20,26,19",c(.15,.4))}for(let _=0;_<75;_++){let R=c(80,1968),D=c(80,1968),z=c(14,70);f(Nt,R,D,z*1.7,"57,35,15",c(.13,.35)),Nt.strokeStyle=`rgba(48,35,18,${c(.12,.36)})`,Nt.lineWidth=c(1,4),Nt.beginPath(),Nt.ellipse(R,D,z,z*c(.6,1.2),a()*Math.PI,0,Math.PI*c(1.1,2)),Nt.stroke()}Nt.lineCap="round";for(let _=0;_<340;_++){let R=c(100,1950),D=c(100,1950);Nt.save(),Nt.translate(R,D),Nt.rotate(a()*Math.PI*2),Nt.strokeStyle=`rgba(16,23,19,${c(.1,.3)})`,Nt.lineWidth=c(1,4),Nt.beginPath(),Nt.moveTo(0,0),Nt.quadraticCurveTo(c(15,50),c(-12,12),c(55,160),c(-20,20)),Nt.stroke(),Nt.restore()}for(let _=0;_<17;_++){let R=a()*2048,D=a()*2048;Nt.beginPath(),Nt.moveTo(R,D);for(let z=0;z<9;z++)R+=c(-20,25),D+=c(6,27),Nt.lineTo(R,D);Nt.strokeStyle="rgba(18,23,18,.42)",Nt.lineWidth=2.2,Nt.stroke()}for(let _=0;_<1900;_++){let R=a()*2048,D=a()*2048;Nt.strokeStyle=`rgba(167,163,137,${c(.03,.22)})`,Nt.lineWidth=c(.4,1.3),Nt.beginPath(),Nt.moveTo(R,D),Nt.lineTo(R+c(3,28),D+c(-5,5)),Nt.stroke()}p(Nt,2048,9e4,"16,22,15",.26),p(Nt,2048,3e4,"166,161,135",.2);let yf=h(Rg);B.map=yf,B.bumpMap=yf,B.bumpScale=.006,B.needsUpdate=!0;let nn=new we;nn.name="Weathered entrance wall behind the viewer",nn.position.z=4.48,nn.rotation.y=Math.PI,t.add(nn),H([7.8,3.35,.16],[0,1.675,-.08],M(10068367,.99,g),nn),te(7.8,3.35,nn).position.set(0,1.675,.004),H([7.8,.14,.045],[0,.07,.024],v,nn),H([7.8,.026,.023],[0,2.87,.03],P,nn);let[Ag,In]=l(1024);for(let _=0;_<62;_++){let R=a()*1024,D=c(0,180);In.strokeStyle=`rgba(43,36,22,${c(.1,.32)})`,In.lineWidth=c(.5,5),In.beginPath(),In.moveTo(R,D),In.bezierCurveTo(R+6,D+80,R-4,D+170,R+c(-6,9),D+c(210,650)),In.stroke()}for(let _=0;_<21;_++){let R=a()*1024,D=a()*1024;In.beginPath();for(let z=0;z<12;z++){let G=z/12*Math.PI*2,Y=c(9,27),ue=R+Math.cos(G)*Y,Ve=D+Math.sin(G)*Y*1.7;z?In.lineTo(ue,Ve):In.moveTo(ue,Ve)}In.closePath(),In.fillStyle=_%3?"rgba(61,65,52,.75)":"rgba(149,144,118,.6)",In.fill()}for(let _=0;_<10;_++){let R=a()*1024,D=c(60,850);In.strokeStyle="rgba(28,34,26,.75)",In.lineWidth=.8,In.beginPath(),In.moveTo(R,D);for(let z=0;z<8;z++)R+=c(-9,12),D+=c(5,16),In.lineTo(R,D);In.stroke()}let vf=F(new wt(7.8,3.35),new ze({map:h(Ag),transparent:!0,depthWrite:!1,roughness:1}),nn);vf.position.set(0,1.675,.007),vf.castShadow=!1;let En=new we;En.name="Scuffed service door and failing exit sign",En.position.set(1.2,0,.05),nn.add(En);let Na=M(6910824,.88,u,.22);H([1.12,2.34,.042],[0,1.17,0],v,En),H([1.035,2.27,.048],[0,1.153,.022],Na,En);for(let _ of[-.565,.565])H([.065,2.4,.1],[_,1.2,.035],P,En);H([1.19,.065,.1],[0,2.4,.035],P,En),H([1.1,.025,.13],[0,.016,.045],k,En),H([.85,.28,.009],[0,.25,.052],M(7239276,.7,u,.55),En);for(let _ of[-1,1])for(let R of[.14,.35])fe([.008,.008,.003],[_*.39,R,.059],k,En);H([.68,.73,.032],[0,1.69,.055],P,En);let[Cg,Pi]=l(512);Pi.fillStyle="#293c39",Pi.fillRect(0,0,512,512);for(let _=0;_<170;_++)f(Pi,a()*512,a()*512,c(4,45),"7,14,11",c(.08,.3));Pi.strokeStyle="rgba(100,118,105,.32)",Pi.lineWidth=1.4;for(let _=-512;_<1024;_+=36)Pi.beginPath(),Pi.moveTo(_,0),Pi.lineTo(_+512,512),Pi.moveTo(_,0),Pi.lineTo(_-512,512),Pi.stroke();F(new wt(.6,.65),new Wt({map:h(Cg),roughness:.32,clearcoat:.8,metalness:.12}),En).position.set(0,1.69,.074),pe([.36,.9,.095],[.36,1.05,.095],.017,k,En),pe([.36,1.03,.095],[.2,1.03,.12],.015,k,En);for(let _ of[.35,1.2,2.07])H([.07,.1,.034],[-.515,_,.064],P,En),ie(.012,.12,[-.53,_,.08],k,En);function wr(_,R,D,z,G,Y="#74796b",ue="#d0cdb8"){let[Ve,je]=l(512);Ve.height=128,je.fillStyle=Y,je.fillRect(0,0,512,128),je.fillStyle=ue,je.font="600 50px Arial,sans-serif",je.textAlign="center",je.fillText(_,256,82,470),p(je,512,1500,"14,20,15",.2);let It=F(new wt(R,D),new ze({map:h(Ve),roughness:.9}),z);return It.position.set(...G),It.castShadow=!1,It}wr("STAFF ONLY",.4,.1,En,[0,1.12,.055]),H([.54,.21,.1],[0,2.66,.08],P,En);let Fa=wr("EXIT  \u2192",.48,.15,En,[0,2.66,.133],"#263b30","#a8b593");Fa.material.emissive.set(5994071),Fa.material.emissiveMap=Fa.material.map,Fa.material.emissiveIntensity=.25;let Ii=new we;Ii.name="Abandoned critique pinboard",Ii.position.set(-.95,1.94,.055),Ii.rotation.z=-.018,nn.add(Ii);let Pg=M(8417362,.99,m);H([1.86,1.25,.045],[0,0,0],Pg,Ii);for(let _ of[-.94,.94])H([.035,1.3,.055],[_,0,.01],P,Ii);for(let _ of[-.64,.64])H([1.91,.035,.055],[0,_,.01],P,Ii);for(let _=0;_<7;_++){let R=-.68+_%4*.44,D=_<4?.28:-.26,z=Hl(_%2===0),G=F(new wt(.35,.43),new ze({map:z,color:_%2?12170400:13026996,roughness:1,side:Lt}),Ii);G.position.set(R,D,.028+_%3*.001),G.rotation.z=c(-.1,.1),G.castShadow=!1,fe([.008,.008,.005],[R,D+.195,.039],_%2?v:M(7814963,.8),Ii);let Y=H([.11,.033,.001],[R-.06,D+.2,.031],M(10001011,.98),Ii);Y.rotation.z=c(-.2,.2)}wr("DESIGN / CRITIQUE",1.1,.1,Ii,[-.11,.56,.028],"#77765a","#252d27"),H([.94,.065,.13],[-.95,2.78,.11],P,nn);let _f=ie(.013,.82,[-.95,2.741,.14],new xt({color:7572357}),nn,12);_f.rotation.z=Math.PI/2,_f.castShadow=!1;let Oa=new ro(9611936,3.4,3.6,1,.85,2);Oa.position.set(-.95,2.72,.36),Oa.target.position.set(-1.12,1.35,.04),nn.add(Oa,Oa.target);let Gl=al({flies:7,moths:3,spread:[.48,.14,.22],seed:71,sizeScale:.5,dive:.22});Gl.group.position.set(-.95,2.52,.43),nn.add(Gl.group);let ti=new we;ti.name="Damaged filing cabinets",ti.position.set(-1.12,0,.26),nn.add(ti),H([1.52,.77,.028],[0,.385,-.2],Na,ti),H([1.56,.035,.46],[0,.795,0],P,ti);for(let _ of[-.745,0,.745])H([.025,.77,.43],[_,.385,0],Na,ti);for(let _ of[.018,.385])H([1.52,.025,.43],[0,_,0],P,ti);for(let _ of[-.38,.38])for(let R of[.2,.56]){if(_<0&&R>.4)continue;let D=0;H([.71,.32,.025],[_,R,.231+D],P,ti),pe([_-.1,R+.04,.26+D],[_+.1,R+.04,.26+D],.011,k,ti),H([.16,.055,.004],[_,R-.06,.248+D],T,ti),D&&(H([.68,.014,.35],[_,R-.16,.2],P,ti),H([.012,.28,.34],[_-.34,R,.2],P,ti))}let Ig=H([.47,.29,.36],[-1.3,.96,.29],M(11573869,.99,m),nn);Ig.rotation.y=.14,wr("ARCHIVE",.25,.075,nn,[-1.3,.97,.483],"#a49471","#3b3d30");let Lg=H([.5,.014,.19],[-1.3,1.116,.39],A,nn);Lg.rotation.x=.2;let vs=new we;vs.name="Neglected network and electrical cabinet",vs.position.set(-2.96,1.6,.08),nn.add(vs),H([.64,.97,.12],[0,0,0],P,vs),H([.56,.88,.014],[0,0,.066],v,vs);for(let _=0;_<4;_++)for(let R=0;R<5;R++)H([.072,.09,.035],[-.2+R*.1,.28-_*.16,.09],Na,vs),H([.017,.035,.01],[-.2+R*.1,.28-_*.16,.113],_===1?T:v,vs);let Po=new we;Po.position.set(-.32,0,.06),Po.rotation.y=-.65,vs.add(Po),H([.62,.96,.025],[.31,0,0],P,Po),wr("CAUTION",.3,.1,Po,[.32,.26,.014],"#a08d52","#252b24");for(let _=0;_<4;_++)N([[-3.12+_*.08,2.1,.12],[-3.15+_*.08,2.5,.12],[-3.15+_*.08,2.88,.12],[-2.1+_*.08,2.88,.12]],.012,P,nn);for(let _=0;_<6;_++)N([[-3.18+_*.08,1.15,.16],[-3.2+_*.06,.71,.21],[-3.13+_*.1,.32,.17],[-2.85+_*.06,.15,.3]],.005,_%2?v:M(5858907,.9),nn);H([.2,.13,.022],[2.2,.35,.047],T,nn),H([.11,.085,.025],[2.2,.35,.065],v,nn),N([[2.2,.35,.09],[2.24,.12,.13],[2.47,.023,.28],[2.9,.023,.42],[3.1,.023,.3]],.007,v,nn);let Li=new we;Li.name="Dusty fire extinguisher",Li.position.set(2.16,.25,.17),nn.add(Li);let Wl=M(8271401,.78,u,.23);ie(.095,.42,[0,.25,0],Wl,Li,24),fe([.095,.065,.095],[0,.47,0],Wl,Li),fe([.093,.045,.093],[0,.04,0],Wl,Li),H([.11,.025,.055],[.015,.56,0],v,Li),pe([0,.51,0],[0,.57,0],.018,k,Li),N([[.035,.52,0],[.12,.47,.02],[.13,.19,.06]],.012,v,Li),wr("FIRE",.12,.14,Li,[0,.27,.097],"#b4ac8c","#33382d"),n.push(be,Ee,ft,tt,ln,Ut,Le,Ke.group,Yn,xi,ti,Li);for(let _ of n)fr(_,kn);for(let _ of[Be,Oe]){let R=_.getObjectByName("Monitor power cable");_.remove(R),R.geometry.dispose();let D=_.localToWorld(new S(.1,.23,-.05)),z=D.x,G=D.z,Y=N([D.toArray(),[z+.09,Math.max(kn(z+.09,G+.1)+.008,D.y*.45),G+.1],[z+.2,kn(z+.2,G+.2)+.007,G+.2],[z+.38,kn(z+.38,G+.11)+.007,G+.11]],.006,v);Y.userData.ignoreFloorContact=!0,Y.userData.anchorStart=!0}for(let _ of s)rl(_,kn);t.add(w0(e,kn));let Ys=E0();Ys.group.userData.ignoreAcid=!0,t.add(Ys.group);let Xl=F0({valves:Ys.valves,floorSupport:kn});t.add(Xl.group);let Mf=I0({filing:ti,laptop:Kd,floorSupport:kn,drawerMaterial:P});t.add(Mf.group);let ql=D0({bottle:xg,contents:mg,cap:To,floorSupport:kn});t.add(ql.group);let Ef=C0({room:t,floorSupport:kn,viewerPosition:e});t.add(Ef.group);function Dg(_){Xl.setEnvironment(_),Qe.setEnvironment(_),ae.setEnvironment(_),Ys.setEnvironment(_),Aa.setEnvironment(_)}let Sf=-1/0;function Ug(_,R,D=e){ql.update(_,R);let z=Aa.update(_,R);return _-Sf>=1/Dt.effectsHz&&(Sf=_,Ef.update(_,R,D),Ys.update(_,R),Nl.update(_,R,z),Gl.update(_,R,.65),Fl.update(_,R,.78)),z}return{group:t,laptop:Kd,catMug:Zi,acidLeaks:Xl,chargingKit:Mf,ketchupKey:ql,countdown:Ke,setDisplayEnvironment:Dg,update:Ug,figpalHoists:Ys,toggleHoist:Ys.toggleHoist}}var fa=["Nooo!!!!","Tell my wife that I love her!","Delete my browser history!"],_d=["help","I have a family","I swear I didn't detach the component!"];function z0(i,e,t=Math.random){let n=18,s=-1,r=Math.floor(t()*_d.length);return{update(o,a=!1){if(o<n)return!1;if(a||e.isActive(o))return n=o+2,!1;let c=[0,1,2].filter(h=>i.isHanging(h));if(!c.length)return n=o+2,!1;c.length>1&&(c=c.filter(h=>h!==s));let l=c[Math.floor(t()*c.length)];return e.show(l,o,_d[r],6),s=l,r=(r+1)%_d.length,n=o+20+t()*15,!0},reset(o=0){n=o+18,s=-1}}}function B0(i){let e=null;return{update(t,n){return t!=="finished"||e!==null?!1:(e=n,i.lowerAll(),!0)},reset(){e!==null&&i.reset(),e=null},get active(){return e!==null},elapsed(t){return e===null?-1:Math.max(0,t-e)}}}function k0(i,e,t=()=>!0){let n=document.querySelector("#figpal-dialogues"),s=fa.map((d,g)=>{let x=document.createElement("div");x.className="figpal-speech",x.hidden=!0,x.dataset.figpal=String(g+1);let m=document.createElement("span");m.className="figpal-speech-text",m.textContent=d;let u=document.createElementNS("http://www.w3.org/2000/svg","svg");u.classList.add("figpal-speech-tail"),u.setAttribute("aria-hidden","true");let E=document.createElementNS("http://www.w3.org/2000/svg","path");return u.append(E),x.append(m,u),n.append(x),x}),r=new S,o=s.map(()=>null),a=s.map(()=>15);function c(d,g,x=fa[d],m=15){if(s[d]){if(!t(d)){f(d);return}o[d]=g,a[d]=m,s[d].children[0].textContent=x}}function l(d){return o.some((g,x)=>t(x)&&g!==null&&d>=g&&d<g+a[x])}function h(d){for(let g=0;g<s.length;g++)c(g,d)}function f(d){if(Number.isInteger(d)){s[d]&&(o[d]=null,s[d].hidden=!0);return}n.hidden=!0;for(let g=0;g<s.length;g++)o[g]=null,s[g].hidden=!0}function p(d,g){n.hidden=!1;let x=e.getBoundingClientRect(),m=0;for(let u=0;u<i.length;u++){if(!t(u)){f(u);continue}let E=s[u],y=o[u]===null?-1:g-o[u],M=a[u];if(y<0||y>=M){E.hidden=!0,y>=M&&(o[u]=null);continue}if(E.style.opacity=String(1-Ze.smoothstep(y,M-1,M)),i[u].getWorldPosition(r),r.y=Math.max(r.y,1.32),r.project(d),r.z<-1||r.z>1||Math.abs(r.x)>1.04||Math.abs(r.y)>1.1){E.hidden=!0;continue}E.hidden=!1;let C=x.left+(r.x*.5+.5)*x.width,A=x.top+(-r.y*.5+.5)*x.height;E.style.transform=`translate3d(${C}px,${A-14}px,0) translate(-50%,-100%)`;let T=E.offsetWidth/2;E.querySelector("path").setAttribute("d",`M ${T-5} 0 L ${T+6} 0 L ${T} 15 Z`),m++}n.hidden=m===0}return f(),{update:p,hide:f,show:c,showAll:h,isActive:l}}var ps=i=>(i=Math.max(0,Math.min(1,i)),i*i*(3-2*i));function V0({canDetach:i=()=>!0}={}){let e=!0,t=-1/0,n=-1/0,s=!1,r=-1/0;return{get locked(){return e},requestReach(o){return o-t<1.65||!e&&o-n<.85?!1:(t=o,r=o+5.2,s=!e,!0)},detach(o){return!e||!i()?!1:(e=!1,n=o,r=o+2.4,s=!1,!0)},endReach(){r=-1/0,s=!1},sample(o,a=!1){a&&Number.isFinite(t)&&(r=Math.max(r,o+.8));let c=o-t,l=c<.52?ps(c/.52):c<.86?1:1-ps((c-.86)/.79),h=!1;!e&&s&&c>=.55&&(h=!0,s=!1);let f=o-n,p=e?0:ps(f/.14),d=e?0:ps((f-.12)/.42),g=e?0:ps((f-.56)/.28),x=e?0:ps((f-.9)/.65),m=o<r,u=m?Math.min(ps(c/.24),ps((r-o)/.45)):0;return{locked:e,reach:l,visible:m,reveal:u,releaseElapsed:f,unlatch:p,hingeOpen:d,handFree:g,cuffDrop:x,release:e?0:ps((o-n)/.85),strain:e&&c>.45&&c<.86?Math.sin(c*64)*.003:0,openLaptop:h}},reset(){e=!0,t=-1/0,n=-1/0,s=!1,r=-1/0}}}function G0(i,e,t,n=.43,s=.49){let r=new S().subVectors(e,i),o=r.length();r.normalize(),o>n+s-.015&&i.addScaledVector(r,o-(n+s-.015));let a=Math.max(.001,i.distanceTo(e)),c=Ze.clamp((n*n-s*s+a*a)/(2*a),-n,n),l=new S(.55,-1,.08).addScaledVector(r,-new S(.55,-1,.08).dot(r)).normalize();return t.copy(i).addScaledVector(r,c).addScaledVector(l,Math.sqrt(Math.max(0,n*n-c*c))),t}function W0(i,e){let s=new Pt,r=new Float32Array(609*3),o=[];for(let M=1;M<=20;M++)for(let C=1;C<=28;C++){let A=M*29+C;o.push(A,A-28-2,A-1,A,A-28-1,A-28-2)}s.setAttribute("position",new fn(r,3).setUsage(Un)),s.setIndex(o);let a=new ht(s,i);a.name="Full curved forearm",a.castShadow=a.receiveShadow=!0,a.frustumCulled=!1;let c=s.clone(),l=new ht(c,e);l.name="Forearm ink silhouette",l.raycast=()=>{},l.frustumCulled=!1,a.add(l);let h=new sa,f=new S,p=new S,d=new S,g=new S,x=new S,m=new S,u=new S,E=[[0,.076,.061],[.18,.081,.063],[.4,.073,.055],[.65,.059,.043],[.8,.047,.033],[1,.038,.026]];function y(M,C,A){f.set(0,0,1).applyQuaternion(A),h.v0.copy(M),h.v1.lerpVectors(M,C,.31),h.v1.x+=.018,h.v3.copy(C).addScaledVector(f,.075),h.v2.copy(h.v3).addScaledVector(f,.065),m.set(1,0,0).applyQuaternion(A);for(let W=0;W<=20;W++){let v=W/20;v<.8?(h.getPoint(v/.8,p),h.getTangent(v/.8,d)):(p.copy(C).addScaledVector(f,.075*(1-v)/.2),d.copy(f).negate()),g.copy(m).addScaledVector(d,-m.dot(d)).normalize(),x.crossVectors(g,d).normalize();let b=E.findIndex(fe=>fe[0]>=v),B=E[Math.max(0,b-1)],k=E[b],F=B===k?0:Ze.smoothstep(v,B[0],k[0]),H=Ze.lerp(B[1],k[1],F),J=Ze.lerp(B[2],k[2],F);for(let fe=0;fe<=28;fe++){let ie=fe/28*Math.PI*2;u.copy(p).addScaledVector(g,Math.cos(ie)*H).addScaledVector(x,Math.sin(ie)*J),u.toArray(r,(W*29+fe)*3)}}s.attributes.position.needsUpdate=!0,s.computeVertexNormals();let T=s.attributes.normal,P=c.attributes.position;for(let W=0;W<P.count;W++)P.setXYZ(W,r[W*3]+T.getX(W)*.0015,r[W*3+1]+T.getY(W)*.0015,r[W*3+2]+T.getZ(W)*.0015);P.needsUpdate=!0}return{mesh:a,update:y}}var X0=new S(0,1,0);function q0(i,e={}){let t=new we;t.name="Player forearm chained to the rear pipes";let n=new we;n.name="Camera-relative reaching hand",t.add(n);let s=V0(e),r=new $t(1,24,16),o=new ze({color:13871751,roughness:.86,metalness:0,emissive:6832947,emissiveIntensity:.025}),a=new xt({color:2104345,side:yn}),c=si(10857122),l=si(12568e3),h=new ze({color:1382166,roughness:.9}),f=si(9872814);f.map=null,f.metalnessMap=null,f.metalness=.86,f.roughness=.66,f.bumpScale=35e-5;let p=new ze({color:11517381,metalness:.92,roughness:.29}),d=new xt({transparent:!0,opacity:0,depthWrite:!1,colorWrite:!1});function g(st,nt,$e=n){let ot=new ht(st,nt);return ot.castShadow=!0,ot.receiveShadow=!0,$e.add(ot),ot}function x(st,nt,$e,ot=o){let et=g(r,ot,st);return et.position.set(...nt),et.scale.set(...$e),et}function m(st,nt,$e,ot,et){nt=new S(...nt),$e=new S(...$e);let rt=$e.clone().sub(nt),tt=g(new Zt(ot,ot,rt.length(),20),et,st);return tt.position.copy(nt).add($e).multiplyScalar(.5),tt.quaternion.setFromUnitVectors(X0,rt.normalize()),tt}function u(st,nt,$e,ot){return g(new pn(new Jt(nt.map(et=>new S(...et))),24,$e,7,!1),ot,st)}let E=new we;E.name="Cartoon forearm and right hand",n.add(E);function y(st,nt=.002){let $e=st.geometry.clone(),ot=$e.attributes.position,et=$e.attributes.normal;for(let tt=0;tt<ot.count;tt++)ot.setXYZ(tt,ot.getX(tt)+et.getX(tt)*nt,ot.getY(tt)+et.getY(tt)*nt,ot.getZ(tt)+et.getZ(tt)*nt);ot.needsUpdate=!0,$e.computeBoundingSphere();let rt=new ht($e,a);rt.name="Ink silhouette",rt.raycast=()=>{},st.add(rt)}function M(st,nt,$e=28){let ot=nt.map(([Yt,Cn,ln,Ut,L])=>({z:Yt,x:Cn,y:ln,rx:Ut,ry:L})),et=[],rt=[],tt=[];for(let Yt=0;Yt<ot.length;Yt++){let Cn=ot[Yt];for(let ln=0;ln<=$e;ln++){let Ut=ln/$e*Math.PI*2,L=Math.cos(Ut),Q=Math.sin(Ut);if(et.push(Cn.x+Cn.rx*L,Cn.y+Cn.ry*Q,Cn.z),rt.push(ln/$e,Yt/(ot.length-1)),Yt&&ln){let oe=Yt*($e+1)+ln;tt.push(oe,oe-$e-2,oe-1,oe,oe-$e-1,oe-$e-2)}}}let Bt=new Pt;Bt.setAttribute("position",new lt(et,3)),Bt.setAttribute("uv",new lt(rt,2)),Bt.setIndex(tt),Bt.computeVertexNormals();let cn=g(Bt,o,st);return y(cn),cn}let C=M(E,[[0,0,0,.097,.078],[-.18,.004,0,.099,.077],[-.42,.008,.003,.092,.073],[-.7,.006,.002,.084,.066],[-1,0,0,.076,.061]],40);C.name="Upper arm";let A=x(E,[0,0,0],[.076,.061,.068]);A.name="Bent elbow";let T=W0(o,a);E.add(T.mesh);let P=new mt,W=new we;W.name="Cartoon right hand",E.add(W),M(W,[[.025,0,0,.037,.025],[0,0,0,.04,.026],[-.03,-.005,0,.059,.036],[-.066,-.005,0,.071,.04],[-.108,-.002,-.002,.071,.037],[-.14,.002,-.003,.065,.031],[-.16,.004,-.004,.051,.022],[-.17,.004,-.004,.006,.004]],40);let v=[];for(let[st,nt,$e,ot]of[[0,-.056,.12,.19],[1,-.018,.136,.055],[2,.023,.128,-.08],[3,.06,.1,-.23]]){let et=new we;et.position.set(nt,-.002,-.137+(st===3?.013:0)),et.rotation.y=ot,W.add(et),v.push(et);let rt=st===3?.0175:.02;M(et,[[.014,0,0,rt*.92,rt*.9],[0,0,0,rt,rt],[-$e*.22,0,-.002,rt,rt*.98],[-$e*.48,0,-.005,rt*.96,rt*.94],[-$e*.7,0,-.009,rt*.92,rt*.9],[-$e*.84,0,-.012,rt*.86,rt*.84],[-$e*.94,0,-.014,rt*.64,rt*.64],[-$e*.985,0,-.014,rt*.3,rt*.3],[-$e,0,-.014,3e-4,3e-4]]),et.userData.spread=ot}let b=new Ft;b.name="Lid contact fingertip",b.position.set(0,-.014,-.136),v[1].add(b);let B=new we;B.position.set(-.049,-.008,-.041),B.rotation.y=.88,B.rotation.z=-.26,W.add(B),M(B,[[.018,0,0,.033,.03],[0,0,0,.032,.03],[-.027,-.003,0,.029,.027],[-.051,-.005,.002,.026,.025],[-.072,-.006,.002,.025,.024],[-.089,-.006,.001,.021,.02],[-.101,-.006,0,.012,.012],[-.107,-.006,0,3e-4,3e-4]]);let k=new we;k.name="Wrist cuff and chain \u2014 right-click to detach",k.userData.playerChain=!0,n.add(k);let F=new we;F.name="Close-fitting oval wrist cuff",k.add(F);let H=new S(0,0,.033),J=-.056;function fe(st,nt,$e){let ot=new bt;ot.absellipse(0,0,.061,.049,st,nt,!1),ot.lineTo(Math.cos(nt)*.05,Math.sin(nt)*.038),ot.absellipse(0,0,.05,.038,nt,st,!0),ot.closePath();let et=new an(ot,{depth:.044,bevelEnabled:!0,bevelSize:6e-4,bevelThickness:6e-4,bevelSegments:2,curveSegments:28}),rt=g(et,f,$e);rt.position.z=-.022;for(let tt of[0,.044]){let Bt=Array.from({length:25},(Yt,Cn)=>{let ln=st+(nt-st)*Cn/24;return[.0608*Math.cos(ln),.0488*Math.sin(ln),tt]}),cn=u(rt,Bt,.0016,p);cn.name="Polished shackle rim"}return rt}let ie=fe(Math.PI,Math.PI*2,F);ie.name="Fixed lower cuff";let pe=new we;pe.name="Hinged upper cuff",pe.position.x=J,F.add(pe);let N=fe(0,Math.PI,pe);N.position.x=-J,m(F,[J,0,-.03],[J,0,.03],.008,p);for(let st of[-.029,.029])x(F,[J,0,st],[.009,.009,.003],p);g(new St(.021,.027,.043),f,F).position.set(.064,-.01,0);let se=new we;se.name="Spring-loaded locking clip",se.position.set(.064-J,.012,0),pe.add(se),g(new St(.013,.027,.036),p,se).position.set(.003,-.008,0),x(F,[.064,-.006,-.0225],[.0038,.0038,.001],h),g(new St(.003,.008,.0015),h,F).position.set(.064,-.011,-.0225);for(let st of[-.015,.015])x(se,[.01,-.007,st],[.002,.003,.003],p);let le=g(new Qt(.014,.0048,8,24),p,F);le.name="Welded chain attachment",le.position.set(.076,-.019,0),le.rotation.y=Math.PI/2;let X=g(new Zt(.078,.078,.08,16),d,F);X.rotation.x=Math.PI/2,X.castShadow=!1;let V=new we;V.name="Rusted rear pipe anchoring the wrist chain",t.add(V),u(V,[[3.3,.13,4.16],[3.3,.42,4.16],[3.3,2.16,4.16],[3.27,2.32,4.16],[2.78,2.34,4.16]],.045,c);for(let st of[.3,1.25,2.08]){g(new St(.2,.16,.025),c,V).position.set(3.3,st,4.37);for(let ot of[3.23,3.37]){m(V,[ot,st,4.35],[ot,st,4.14],.008,l);let et=g(new Zt(.017,.017,.018,6),l,V);et.rotation.x=Math.PI/2,et.position.set(ot,st,4.12)}let $e=g(new Qt(.058,.01,8,32),l,V);$e.rotation.x=Math.PI/2,$e.position.set(3.3,st,4.16)}let Z=new S(3.3,.28,4.1),xe=new S,Ce=g(new Qt(.055,.009,8,24),l,V);Ce.position.set(3.3,.28,4.1),Ce.rotation.y=Math.PI/2;let _e=[];for(let st=0;st<48;st++){let nt=st/48*Math.PI*2;_e.push(new S(Math.cos(nt)*.017,Math.sin(nt)*.028,0))}let ne=new pn(new Jt(_e,!0),32,.0055,6,!0),I=new vn(ne,p,360);I.name="Heavy interlocking wrist chain",I.castShadow=!0,I.receiveShadow=!0,I.frustumCulled=!1,k.add(I);let ye=new vn(new $t(1,8,6),d,360);ye.frustumCulled=!1,k.add(ye);let ee=new S,ae=new S,me=new S,Ae=new S,Me=new S,U=new S,w=new Ft,K=new S(.29,-.36,-.73),ge=new S(.45,-.65,-.5),be=new S(.15,-.31,-.77),Ee=new S(-.08,-.32,-.83),Be=new S,Oe=new S(.43,-.66,-.54),Xe=new S(.22,-.68,-.58),_t=new S(.12,-.34,-.05),De=new S(0,0,-1),$=new S,ve=new S,Ie=new S,Pe=new mt,Te=new mt,he=!1,ke=new S,q=new S,Re=new S,ce=new S,Se=new mt,Ue=new mt,Fe=3,ut=new S(1,0,0),Mt=Array.from({length:49},()=>new S);function zt(st,nt,$e){return $e.copy(Ae).lerp(xe,st),$e.addScaledVector(ut,Math.sin(Math.PI*st)*nt),$e.y-=Math.sin(Math.PI*st)*nt*.9,Be.copy($e),n.localToWorld(Be),Be.y=Math.max(.032,Be.y),n.worldToLocal(Be),$e.copy(Be),$e}function ft(){let st=0,nt=1.5;for(let rt=0;rt<9;rt++){let tt=(st+nt)/2,Bt=0;for(let cn=0;cn<Mt.length;cn++)zt(cn/(Mt.length-1),tt,Mt[cn]),cn&&(Bt+=Mt[cn].distanceTo(Mt[cn-1]));Bt>Fe?nt=tt:st=tt}let $e=new Jt(Mt),ot=$e.getLength(),et=Math.min(360,Math.max(2,Math.ceil(ot/.043)));I.count=ye.count=et;for(let rt=0;rt<et;rt++){let tt=rt/(et-1);$e.getPointAt(tt,w.position),$e.getTangentAt(tt,U),w.quaternion.setFromUnitVectors(X0,U),rt%2&&w.rotateY(Math.PI/2),w.scale.set(1,1,1),w.updateMatrix(),I.setMatrixAt(rt,w.matrix),w.scale.set(.032,.026,.032),w.updateMatrix(),ye.setMatrixAt(rt,w.matrix)}I.instanceMatrix.needsUpdate=!0,ye.instanceMatrix.needsUpdate=!0}function Rt(st,nt=!1,$e=!1,ot=null){let et=s.sample(st,$e),rt=et.reach;n.position.copy(i.position),n.quaternion.copy(i.quaternion);let tt=Math.tan(Ze.degToRad(i.fov/2))/Math.tan(Ze.degToRad(62/2));if(n.scale.set(tt,tt,1),n.updateWorldMatrix(!0,!1),n.visible=et.visible,!et.visible)return et.openLaptop;xe.copy(Z),n.worldToLocal(xe);let Bt=ot?ot.reveal:nt?1:et.reveal,cn=(1-Bt)*.55;ee.copy(K).lerp(et.locked?be:Ee,rt),et.locked&&(ee.y+=nt?0:et.strain),ae.copy(ge).lerp(et.locked?Oe:Xe,rt);let Yt=!et.locked&&et.releaseElapsed<1.8&&he,Cn=nt&&!et.locked?1:et.hingeOpen,ln=nt&&!et.locked?1:et.cuffDrop;if(Yt){ee.copy($),ae.copy(Ie);let Ut=nt?1:et.handFree;ee.y+=Ut*.055,ee.z+=Ut*.025}if(ee.y-=cn,ae.y-=cn,Me.copy(ae).sub(ee).setLength(.35),ae.copy(ee).add(Me),me.copy(ae).add(_t),C.position.copy(me),Me.copy(ae).sub(me),C.quaternion.setFromUnitVectors(De,Me.clone().normalize()),C.scale.z=Me.length(),Me.copy(ee).sub(ae),P.setFromUnitVectors(De,Me.clone().normalize()),A.position.copy(ae),A.quaternion.copy(P),W.position.copy(ee),W.quaternion.copy(P),W.rotateX(-.12+rt*.08),W.rotateY(.13-rt*.06),W.rotateZ(-.04),Yt&&W.quaternion.slerp(Pe,1-et.handFree),v.forEach((Ut,L)=>{Ut.rotation.x=-.06+(1-rt)*(.11+L*.015)}),B.rotation.x=0,B.rotation.y=.88,ot){let Ut=ot.blend,L=ot.grip,Q=ot.gripKind==="handle";v.forEach((oe,de)=>{oe.rotation.x=Ze.lerp(oe.rotation.x,(Q?-.96:-.46)+(de===0?.08:0),L),oe.rotation.y=Ze.lerp(oe.userData.spread,oe.userData.spread*.3,L)}),B.rotation.x=.28*L,B.rotation.y=.88-.28*L,v[1].updateMatrix(),Q?q.set(0,-.008,-.18):q.copy(b.position).applyMatrix4(v[1].matrix),Ue.copy(i.quaternion).invert(),Se.copy(Ue).multiply(ot.quaternion),ke.copy(ot.position),n.worldToLocal(ke),Re.copy(ke).sub(q.applyQuaternion(Se)),W.position.lerp(Re,Ut),W.quaternion.slerp(Se,Ut),ee.copy(W.position),me.set(.34,-.66-cn,-.09),G0(me,ee,ce),ae.lerp(ce,Ut),C.position.copy(me),Me.copy(ae).sub(me),C.quaternion.setFromUnitVectors(De,Me.clone().normalize()),C.scale.z=Me.length(),Me.copy(ee).sub(ae),P.setFromUnitVectors(De,Me.clone().normalize()),A.position.copy(ae),A.quaternion.copy(P)}else v.forEach(Ut=>{Ut.rotation.y=Ut.userData.spread});return T.update(ae,W.position,W.quaternion),et.locked?(F.position.copy(H).applyQuaternion(W.quaternion).add(ee),F.quaternion.copy(W.quaternion),pe.rotation.z=0,se.rotation.z=0):(F.position.copy(ve),F.position.y-=cn+ln*.32,F.position.x+=ln*.08,F.quaternion.copy(Te),F.rotateX(ln*.8),F.rotateZ(ln*.42),pe.rotation.z=Cn*1.95,se.rotation.z=-(nt?1:et.unlatch)*.85),F.updateMatrix(),Ae.copy(le.position).applyMatrix4(F.matrix),Fe=Ae.distanceTo(xe)+(et.locked?.24*(1-rt)+.018:.42),ft(),et.openLaptop}function qn(st){return s.locked?($.copy(ee),Ie.copy(ae),Pe.copy(W.quaternion),Te.copy(F.quaternion),ve.copy(F.position),he=!0,s.detach(st)):!1}function Xi(){s.reset(),he=!1,pe.rotation.z=0,se.rotation.z=0,Rt(0,!0)}return Rt(0,!0),{group:t,target:k,state:s,update:Rt,reset:Xi,endReach:()=>s.endReach(),setEnvironment(st){for(let nt of[c,l,f,p])nt.envMap=st,nt.envMapIntensity=nt===p?1.65:1.15,nt.needsUpdate=!0},get locked(){return s.locked},requestReach:st=>s.requestReach(st),detach:qn}}function Y0(i,{canDetach:e=()=>!0,onBlocked:t=()=>{}}={}){let n=document.querySelector("#chain-menu"),s=n.querySelector("button"),r=document.querySelector("#scene");function o(l=!1){n.hidden=!0,l&&r.focus({preventScroll:!0})}function a(l,h){s.setAttribute("aria-disabled",String(!e())),s.title=e()?"Unlock the shackle with the key":"Find the shackle key first",n.hidden=!1,n.style.left=`${Math.max(8,Math.min(l,innerWidth-n.offsetWidth-8))}px`,n.style.top=`${Math.max(8,Math.min(h,innerHeight-n.offsetHeight-8))}px`,s.focus({preventScroll:!0})}function c(){if(!e()){t();return}o(!0),i()}return s.addEventListener("click",c),n.addEventListener("contextmenu",l=>l.preventDefault()),document.addEventListener("pointerdown",l=>{!n.hidden&&!n.contains(l.target)&&o()},!0),document.addEventListener("keydown",l=>{n.hidden||(l.code==="Escape"?(l.preventDefault(),l.stopPropagation(),o(!0)):l.code==="KeyB"&&l.altKey&&l.metaKey&&!l.ctrlKey&&!l.shiftKey&&(l.preventDefault(),l.stopPropagation(),l.repeat||c()))},!0),window.addEventListener("blur",()=>o()),{show:a,hide:o,get active(){return!n.hidden}}}function Z0(i,e){let t=i.match(/[\p{L}\p{N}'’]+[^\p{L}\p{N}'’]*/gu)||[],n=[],s=.1;for(let r of t){let o=r.replace(/[^\p{L}\p{N}'’]/gu,""),a=(o.toLowerCase().replace(/e$/,"").match(/[aeiouy]+/g)||[]).length,c=Math.max(1,Math.min(4,a)),l=.24+Math.min(o.length,10)*.025+(c-1)*.09;for(let h=0;h<c;h++){let f=l/c;n.push({start:s+h*f,end:s+(h+.87)*f,amount:.78+Math.min(o.length,6)*.025})}s+=l+(/[.!?…]/u.test(r)?.4:/[,;:]/.test(r)?.24:.11)}return{startTime:e,cues:n,duration:s}}function $0(i,e){if(!i)return 0;let t=e-i.startTime;for(let n of i.cues){if(t<n.start)return 0;if(t<=n.end){let s=(t-n.start)/(n.end-n.start),r=Math.min(1,s/.22),o=Math.min(1,(1-s)/.35),a=Math.min(r,o);return n.amount*a*a*(3-2*a)}}return 0}var Md={position:[1.85221,.821615,3.1149],lookAt:[1.155084,.748275,2.401713],fov:48.36},UM=i=>Ze.euclideanModulo(i+Math.PI,Math.PI*2)-Math.PI;function K0(i){let e=new S(...Md.position),t=new S(...Md.lookAt).sub(e).normalize(),n={yaw:Math.atan2(-t.x,-t.z),pitch:Math.asin(t.y),zoom:Md.fov/i},s=null;return{start(r,o,a){s={time:r,position:o.clone(),yaw:a.yaw,pitch:a.pitch,zoom:a.zoom}},cancel(){s=null},get active(){return s!==null},update(r,o,a,c=!1){if(!s)return;let l=c?1:Ze.clamp((r-s.time)/1.4,0,1),h=l*l*(3-2*l);o.lerpVectors(s.position,e,h),a.yaw=s.yaw+UM(n.yaw-s.yaw)*h,a.pitch=Ze.lerp(s.pitch,n.pitch,h),a.zoom=Ze.lerp(s.zoom,n.zoom,h),l===1&&(o.copy(e),Object.assign(a,n),s=null)}}}var ms=(i,e,t)=>Ze.smootherstep(i,e,t),J0=i=>Ze.euclideanModulo(i+Math.PI,Math.PI*2)-Math.PI;function Q0({laptop:i,restraint:e,cameraPosition:t,state:n}){let s=null,r=new S,o=new S,a=new S,c=new S,l=new mt,h=new mt,f=new ii,p=0,d=0,g=1,x=0,m=0,u={position:new S,quaternion:new mt,blend:0,grip:0,reveal:0};function E(C){return s!==null||e.locked||i.isOpen||!e.requestReach(C)?!1:(s=C,r.copy(t),p=n.yaw,d=n.pitch,g=n.zoom??1,i.object.updateWorldMatrix(!0,!1),i.object.localToWorld(o.set(.16,.78,1)),i.object.localToWorld(a.set(0,.32,-.02)),c.copy(a).sub(o).normalize(),x=Math.atan2(-c.x,-c.z),m=Math.asin(c.y),u.blend=u.grip=u.reveal=0,!0)}function y(C,A=!1){if(s===null)return!1;let T=C-s;if(A)return i.setOpenProgress(1),e.endReach(),s=null,!0;let P=ms(T,0,.7)*(1-ms(T,2.7,3.4));t.lerpVectors(r,o,P),n.zoom=Ze.lerp(g,1,P),n.yaw=J0(p+J0(x-p)*P),n.pitch=Ze.lerp(d,m,P);let W=ms(T,.96,2.21);return i.setOpenProgress(W),i.getLidGrip(u.position),i.object.getWorldQuaternion(l),h.setFromEuler(f.set(-.1-.28*W,0,-.1)),u.quaternion.copy(l).multiply(h),u.blend=ms(T,0,.8)*(1-ms(T,2.38,3.02)),u.grip=ms(T,.7,.92)*(1-ms(T,2.21,2.38)),u.reveal=ms(T,0,.18)*(1-ms(T,2.64,3.12)),T<3.4?!1:(t.copy(r),n.yaw=p,n.pitch=d,n.zoom=g,e.endReach(),s=null,!0)}function M(){s!==null&&(t.copy(r),n.yaw=p,n.pitch=d,n.zoom=g,e.endReach(),s=null)}return{start:E,update:y,cancel:M,get active(){return s!==null},get handPose(){return s===null?null:u}}}var mr=(i,e,t)=>Ze.smootherstep(i,e,t);function j0({mug:i,camera:e,restraint:t}){let n=i.position.clone(),s=i.quaternion.clone(),r=new S,o=new mt,a=new S,c=new mt,l=new S,h=new S,f=new S,p=new mt,d=new mt,g=new mt,x=new mt,m=new mt().setFromEuler(new ii(0,Math.PI/2,-.12)),u={position:new S,quaternion:new mt,blend:0,grip:0,reveal:0,gripKind:"handle"},E=null,y=!1,M=0;function C(P){return t.locked||E!==null||y||!t.requestReach(P)?!1:(i.updateWorldMatrix(!0,!1),i.getWorldPosition(r),i.getWorldQuaternion(o),e.updateWorldMatrix(!0,!1),e.getWorldPosition(a),e.getWorldQuaternion(c),l.set(.03,-.25,-.52).applyQuaternion(c).add(a),h.set(0,-.082,-.205).applyQuaternion(c).add(a),E=P,M=0,u.blend=u.grip=u.reveal=0,!0)}function A(P,W=!1){if(E===null||y)return!1;let v=P-E;if(W){if(M=mr(v,.15,.45),v<.6)return!1}else{let b=mr(v,.82,2.12),B=mr(v,2.28,3.36);if(f.lerpVectors(r,l,b),f.y+=Math.sin(Math.PI*b)*.13,f.lerp(h,B),x.setFromAxisAngle(new S(1,0,0),.82*B),d.copy(c).multiply(x),p.slerpQuaternions(o,d,b),i.position.copy(f),i.parent.worldToLocal(i.position),i.parent.getWorldQuaternion(g),i.quaternion.copy(g.invert()).multiply(p),i.updateWorldMatrix(!0,!1),i.localToWorld(u.position.set(.235,0,0)),u.quaternion.copy(p).multiply(m),u.blend=mr(v,0,.72),u.grip=mr(v,.48,.8),u.reveal=mr(v,0,.22),M=mr(v,3.26,3.52),v<3.72)return!1}return y=!0,M=1,t.endReach(),!0}function T(){E=null,y=!1,M=0,i.position.copy(n),i.quaternion.copy(s),i.updateWorldMatrix(!0,!1),u.blend=u.grip=u.reveal=0,t.endReach()}return{start:C,update:A,reset:T,get active(){return E!==null&&!y},get finished(){return y},get blackout(){return M},get handPose(){return E!==null&&!y?u:null}}}var gt=document.querySelector("#scene"),HM=gt.getAttribute("aria-label"),bi=matchMedia("(prefers-reduced-motion: reduce)").matches,Mo={position:[1.85221,.821615,3.1149],lookAt:[1.293346,.717709,2.292176],fov:62},Bs=new S(...Mo.position),Ed=new S(...Mo.lookAt).sub(Bs).normalize(),Os={yaw:Math.atan2(-Ed.x,-Ed.z),pitch:Math.asin(Ed.y)},Je={yaw:Os.yaw,pitch:Os.pitch,zoom:1,jaw:0,space:!1,time:0,talkUntil:0},Rn=new Uc({canvas:gt,antialias:!Dt.mobile,alpha:!1,powerPreference:"high-performance"});Rn.setPixelRatio(Dt.pixelRatio);Rn.localClippingEnabled=!0;Rn.shadowMap.enabled=!0;Rn.shadowMap.autoUpdate=!1;Rn.shadowMap.type=Ku;Rn.outputColorSpace=pt;Rn.toneMapping=Ju;Rn.toneMappingExposure=.76;var gi=new Nc;gi.background=new dt(1449240);gi.fog=new Hc(2305314,11,26);var Sa=h0(Rn,gi),tn=new Nn(Mo.fov,1,.06,35),On=Bs.clone(),Jn=K0(Mo.fov),em=new S,tm=new S,Sd=new S,NM=new Yc(9545120,2370600,.62);gi.add(NM);var ym=17.5,Wi=new ro(12898992,ym,12,1.25,.72,2);Wi.position.set(.22,2.83,-.55);Wi.target.position.set(0,0,-.1);Wi.castShadow=!0;Wi.shadow.mapSize.set(Dt.shadowSize,Dt.shadowSize);Wi.shadow.camera.near=.1;Wi.shadow.camera.far=11;Wi.shadow.normalBias=.0025;Wi.shadow.bias=-5e-5;gi.add(Wi,Wi.target);var Ri=new Zc(10269877,.85);Ri.position.set(6.2,4.1,-1.6);Ri.target.position.set(-1,.35,-.3);Ri.castShadow=!Dt.mobile;Ri.shadow.mapSize.set(1024,1024);Ri.shadow.camera.left=-6;Ri.shadow.camera.right=6;Ri.shadow.camera.top=5;Ri.shadow.camera.bottom=-5;Ri.shadow.normalBias=.003;Ri.shadow.bias=-6e-5;gi.add(Ri,Ri.target);var vm=new Fn(9348772,2.2,10,2);vm.position.set(-1,2.6,4);gi.add(vm);var Ti=Ze.lerp;function ts(i,e=.9){return new ze({color:i,roughness:e})}function Hn(i,e,t=gi){let n=new ht(i,e);return n.castShadow=!0,n.receiveShadow=!0,t.add(n),n}function ks(i,e,t,n,s=3){let r=Hn(new Xc(1,s),typeof e=="string"||typeof e=="number"?ts(e):e,i);return r.position.set(...t),r.scale.set(...n),r}function Eo(i,e,t,n,s=!1){let r=new Jt(i.map(o=>o.isVector3?o:new S(...o)),s);return Hn(new pn(r,Math.max(24,i.length*2),e,8,s),t,n)}function FM(){let i=document.createElement("canvas");i.width=i.height=1024;let e=i.getContext("2d"),t=2718,n=()=>(t=t*1664525+1013904223>>>0,t/4294967296),s=([l,h])=>[(l+2)/4*i.width,(1-h/3)*i.height];function r(l,h,f=["rgba(211,12,57,.66)","rgba(227,17,62,.50)"]){let p=l.map(s);e.lineCap="round",e.lineJoin="round";for(let d=0;d<3;d++){e.strokeStyle=f[d===0?0:1];for(let g=1;g<p.length;g++){let x=Math.sin(g*1.37+d)*.08+Math.sin(g*.42)*.1;e.lineWidth=h*i.width/4*(1+x)*(d===0?1.13:.77);let m=(n()-.5)*1.5,u=(n()-.5)*1.5;e.beginPath(),e.moveTo(p[g-1][0]+m,p[g-1][1]+u),e.lineTo(p[g][0]+m,p[g][1]+u),e.stroke()}}}let o=[];for(let l=0;l<=140;l++){let h=l/140,f=Ti(-1.65,1.23,h),p=.16*Math.exp(-Math.pow((f+1.65)/.26,2))+.06*Math.pow(Math.max(0,(f-.42)/.81),2);o.push([f,1.45-p+.006*Math.sin(h*12)])}r(o,.075,["rgba(23,25,24,.98)","rgba(23,25,24,.94)"]);let a=[];for(let l=0;l<=80;l++){let h=l/80;a.push([Ti(-.68,.42,h),1.452+.009*Math.sin(h*15)+.012*Math.sin(h*7)])}r(a,.18);for(let l of[-1,1]){let h=[],f=l===-1?-1.13:1.15,p=1.68;for(let d=0;d<=240;d++){let g=d/240,x=g*Math.PI*6.1,m=.017+g*.272+.003*Math.sin(g*39+l);h.push([f+Math.cos(x)*m,p+Math.sin(x)*m*.92+.003*Math.sin(g*43)])}r(h,.047)}e.globalCompositeOperation="destination-out";for(let l=0;l<14e3;l++){e.fillStyle=`rgba(0,0,0,${.08+n()*.48})`;let h=n()*i.width,f=n()*i.height;e.fillRect(h,f,.35+n()*1.2,.4+n()*1.8)}for(let l=0;l<1600;l++){e.strokeStyle=`rgba(0,0,0,${.05+n()*.17})`,e.lineWidth=.4+n()*.7;let h=n()*i.width,f=n()*i.height;e.beginPath(),e.moveTo(h,f),e.lineTo(h+2+n()*6,f+n()*2-1),e.stroke()}let c=new Ot(i);return c.colorSpace=pt,c.anisotropy=Rn.capabilities.getMaxAnisotropy(),c}var OM=FM(),Sl=new ze({color:13882826,roughness:.94});Sl.onBeforeCompile=i=>{i.uniforms.lipstickPaint={value:OM},i.vertexShader=`varying vec3 vStone;
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
 `)};var zM=ts(2104866,.98),BM=ts(7350072,.98),_m=new xt({color:525833,side:Lt}),ki=new we;ki.name="Figsaw and tricycle";gi.add(ki);var _n=new we;_n.name="Figsaw\u2019s red tricycle";ki.add(_n);var So=new ze({color:13185848,roughness:.44,metalness:.28}),Gs=new ze({color:11449779,roughness:.34,metalness:.72}),va=new ze({color:5462617,roughness:.46,metalness:.65}),Mm=ts(8856619,.86),Nd=ts(1514523,.93),Em=ts(2369317,.85);function ns(i,e,t,n,s){let r=new S(...e),o=new S(...t),a=o.clone().sub(r),c=Hn(new Zt(n,n,a.length(),16),s,i);return c.position.copy(r).add(o).multiplyScalar(.5),c.quaternion.setFromUnitVectors(new S(0,1,0),a.normalize()),c}var Sm=[];function Fd(i,e,t,n,s){let r=new we;r.position.set(i,e,t),r.rotation.y=Math.PI/2,r.name=s===8?"Large front wheel":"Small rear wheel",_n.add(r),r.userData.radius=n,Sm.push(r);let o=n>.7?.045:.033;Hn(new Qt(n-o,o,12,80),Nd,r),Hn(new Qt(n-o*2,.018,10,80),va,r);for(let a of[-1,1]){let c=Hn(new Qt(n-o*1.65,.006,6,80),Gs,r);c.position.z=a*.024}for(let a=0;a<s;a++){let c=a/s*Math.PI*2+.16;ns(r,[0,0,0],[Math.cos(c)*(n-o*2),Math.sin(c)*(n-o*2),0],n>.7?.013:.011,va)}ns(r,[0,0,-.14],[0,0,.14],.082,So);for(let a of[-1,1])ks(r,Gs,[0,0,a*.15],[.061,.061,.027],2);return r}var Od=1.39,zd=1.52,gl=.89,xo=-1.23;Fd(0,Od,zd,.86,8);Fd(-1.05,gl,xo,.36,6);Fd(1.05,gl,xo,.36,6);ns(_n,[-1.16,gl,xo],[1.16,gl,xo],.045,va);var nm=new Jt([[0,.89,-1.23],[0,1.24,-1.03],[0,1.65,-.55],[0,1.95,.05],[0,2.14,.73],[0,2.19,1.22]].map(i=>new S(...i))),wm=[],wl=[],pa=64;for(let i=0;i<=pa;i++){let e=nm.getPoint(i/pa),t=nm.getTangent(i/pa),n=new S(0,-t.z,t.y).normalize();for(let[s,r]of[[-.055,-1],[.055,-1],[.055,1],[-.055,1]])wm.push(e.x+s,e.y+n.y*.074*r,e.z+n.z*.074*r);if(i<pa)for(let s=0;s<4;s++){let r=i*4+s,o=i*4+(s+1)%4;wl.push(r,o+4,o,r,r+4,o+4)}}wl.push(0,1,2,0,2,3);var ho=pa*4;wl.push(ho,ho+2,ho+1,ho,ho+3,ho+2);var bl=new Pt;bl.setAttribute("position",new lt(wm,3));bl.setIndex(wl);bl.computeVertexNormals();Hn(bl,So,_n);ns(_n,[0,1.72,-.45],[0,2.02,-.45],.064,So);var kM=Hn(new St(1.91,.07,.29),So,_n);kM.position.set(0,.99,xo);for(let i=-5;i<=5;i++)Hn(new St(.012,.006,.24),Mm,_n).position.set(i*.16,1.028,xo);var wo=new bt;wo.moveTo(-.2,-.58);wo.bezierCurveTo(-.3,-.18,-.72,.02,-.7,.34);wo.bezierCurveTo(-.66,.57,.66,.57,.7,.34);wo.bezierCurveTo(.72,.02,.3,-.18,.2,-.58);wo.quadraticCurveTo(0,-.7,-.2,-.58);var bm=Hn(new an(wo,{depth:.08,bevelEnabled:!0,bevelSize:.035,bevelThickness:.025,bevelSegments:3,steps:1,curveSegments:20}),Em,_n);bm.rotation.x=-Math.PI/2;bm.position.set(0,2,-.45);for(let i of[-1,1])Eo([[i*.16,Od,zd],[i*.18,1.76,1.48],[i*.17,2.1,1.29],[i*.1,2.27,1.2]],.046,So,_n);ns(_n,[0,2.15,1.22],[0,2.43,1.17],.084,So);Eo([[0,2.36,1.18],[0,2.52,1.18],[0,2.63,1.34],[0,2.69,1.43]],.046,Gs,_n);Eo([[-1.11,2.99,.86],[-1.1,2.98,1.12],[-1.04,2.88,1.35],[-.87,2.71,1.46],[-.6,2.69,1.45],[0,2.69,1.43],[.6,2.69,1.45],[.87,2.71,1.46],[1.04,2.88,1.35],[1.1,2.98,1.12],[1.11,2.99,.86]],.048,Gs,_n);ns(_n,[-.1,2.69,1.43],[.1,2.69,1.43],.064,Gs);ks(_n,va,[0,2.69,1.491],[.027,.027,.015],2);for(let i of[-1,1])ns(_n,[i*1.1,2.98,1.12],[i*1.11,2.99,.86],.061,Mm),ks(_n,va,[i*1.11,2.99,.85],[.061,.061,.022],2);var Vs=new we;Vs.name="Rotating pedal crank";Vs.position.set(0,Od,zd);_n.add(Vs);var Tm=[];for(let i of[-1,1]){let e=i*.17,t=-i*.19;ns(Vs,[i*.17,0,0],[i*.3,e,t],.025,Gs),ns(Vs,[i*.3,e,t],[i*.53,e,t],.023,Gs);let n=new we;n.position.set(i*.44,e,t),Vs.add(n),Tm.push(n),Hn(new St(.27,.075,.19),Nd,n);for(let s=-1;s<=1;s++)Hn(new St(.24,.008,.012),Em,n).position.set(0,.041,s*.05)}function VM(i){for(let e of Sm)e.rotation.z=i/e.userData.radius;Vs.rotation.x=i/.86;for(let e of Tm)e.rotation.x=-Vs.rotation.x}ks(_n,Gs,[-.47,2.76,1.45],[.085,.055,.085]);ns(_n,[-.47,2.75,1.45],[-.57,2.77,1.45],.016,Nd);var Rm=.72,Am=2.08,Bn=new we;Bn.scale.setScalar(Rm);Bn.position.set(0,Am,-.45);ki.add(Bn);var Tl=2.8,mi=64,Cm=160,Wn=32,Tn=8*Math.PI*2/Cm,Pd=-.13,GM=.05+Wn/mi*Tl,im=.12;function WM(i){return 2.05*Math.pow(Math.max(0,Math.sin(Math.PI*i)),.4)*(1.19-.45*i)}function _a(i,e){let t=WM(i),n=1+.018*Math.sin(e*5+i*9)+.012*Math.cos(e*9-i*7),s=Ze.clamp(i/(Wn/mi),0,1),r=i<Wn/mi?.2*Math.pow(Math.sin(Math.PI*s),.8)*Math.pow(Math.max(0,Math.cos(e)),3):0,o=new S(Math.sin(e)*t*n-.28*i,.05+i*Tl,Math.cos(e)*t*.68*n+r),a=Ze.smoothstep(Math.cos(e),.25,.65);for(let c of[-1.13,1.15]){let l=((o.x-c)/.36)**2+((o.y-1.68)/.33)**2;l<1&&(o.z+=.09*(1-l)**2*a)}return o}function Id(i,e){let t=-Math.PI/2,n=Math.PI/2;for(let s=0;s<22;s++){let r=(t+n)/2;_a(i,r).x<e?t=r:n=r}return(t+n)/2}var sm=[_a(Wn/mi,-Tn).x,_a(Wn/mi,Tn).x],wd=new Map;function XM(i){if(i===0||i>=Wn/mi)return[-Tn,Tn];let e=i.toFixed(7);if(wd.has(e))return wd.get(e);let t=i/(Wn/mi),n=Math.sin(Math.PI*t),s=[Id(i,sm[0]-.018*n),Id(i,sm[1]+.018*n)];return wd.set(e,s),s}function Rl(i,e){if(i<=Wn/mi){let[t,n]=XM(i);e<-Tn?e=Ti(-Math.PI,t,(e+Math.PI)/(Math.PI-Tn)):e<=Tn?e=Ti(t,n,(e+Tn)/(Tn*2)):e=Ti(n,Math.PI,(e-Tn)/(Math.PI-Tn))}return _a(i,e)}function Pm(i,e){let t=(e-.05)/Tl;return _a(t,Id(t,i)).z}function Bd(i=!1,e=!1){let t=[],n=[],s=i?-Tn:-Math.PI,r=i?Tn:Math.PI,o=i?20:Cm,a=i?Wn:mi;for(let l=0;l<=a;l++)for(let h=0;h<=o;h++){let f=Rl(l/mi,Ti(s,r,h/o));e&&(f.z=Math.min(f.z-.24,.72)),t.push(f.x,f.y,f.z)}for(let l=0;l<a;l++)for(let h=0;h<o;h++){let f=Ti(s,r,(h+.5)/o);if(!i&&l<Wn&&Math.abs(f)<Tn-1e-4)continue;let p=l*(o+1)+h,d=p+1,g=p+o+2,x=p+o+1;n.push(p,d,x,d,g,x)}let c=new Pt;return c.setAttribute("position",new lt(t,3)),c.setIndex(n),c.computeVertexNormals(),c}var Im=new xt({color:1513752,side:yn});Im.onBeforeCompile=i=>{i.vertexShader=i.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
transformed += normal * 0.058;`)};function Lm(i,e){let t=new ht(i,Im);return t.name="Black stone outline",e.add(t),t}var Dm=Bd(),qM=Hn(Dm,Sl,Bn);qM.name="Figsaw";Lm(Dm,Bn);var YM=Hn(Bd(!0,!0),_m,Bn);YM.castShadow=!1;function Um(i,e=!1){let t=[],n=[];for(let o=0;o<=40;o++){let a=Rl(Wn/mi,Ti(-Tn,Tn,o/40)),c=a.y+(e?-.008:.008);if(t.push(a.x,c,a.z-.075,a.x,c,.7),o<40){let l=o*2;n.push(l,l+1,l+2,l+1,l+3,l+2)}}let s=new Pt;s.setAttribute("position",new lt(t,3)),s.setIndex(n),s.computeVertexNormals();let r=Hn(s,_m,i);r.castShadow=!1}Um(Bn);var yr=new we;Bn.add(yr);function ZM(){let i=Bd(!0),e=Array.from(i.attributes.position.array),t=Array.from(i.index.array),n=i.attributes.position.count;for(let o=0;o<n;o++)e.push(e[o*3],e[o*3+1],e[o*3+2]-.14);let s=t.slice();for(let o=0;o<s.length;o+=3)t.push(s[o]+n,s[o+2]+n,s[o+1]+n);let r=[];for(let o=0;o<=20;o++)r.push(o);for(let o=1;o<=Wn;o++)r.push(o*21+20);for(let o=19;o>=0;o--)r.push(Wn*21+o);for(let o=Wn-1;o>0;o--)r.push(o*21);for(let o=0;o<r.length;o++){let a=r[o],c=r[(o+1)%r.length];t.push(a,a+n,c,c,a+n,c+n)}return i.setAttribute("position",new lt(e,3)),i.setIndex(t),i.deleteAttribute("normal"),i.computeVertexNormals(),i}var Hm=ZM(),Nm=Sl.clone();Nm.onBeforeCompile=Sl.onBeforeCompile;Hn(Hm,Nm,yr);Lm(Hm,yr);Um(yr,!0);ks(yr,BM,[Pd,GM-.025,.83],[.25,.016,.055]);var Fm=[];for(let i=0;i<=30;i++){let e=Rl(Wn/mi,Ti(-Tn,Tn,i/30));e.z+=.002,Fm.push(e)}Eo(Fm,.008,zM,Bn);for(let i of[-1,1]){let e=[];for(let t=4;t<=Wn;t++){let n=Rl(t/mi,i*Tn);n.z+=.009,e.push(n)}Eo(e,.033,new xt({color:1513752}),Bn)}var Om=[],kd=ts(16061736,.36);kd.emissive.set(12127514);kd.emissiveIntensity=.12;var xl={headYaw:0,gazeYaw:0,gazePitch:0},bd=new S,uo=new S,rm=new S,$M=new S(0,1,0),om=new mt;for(let i of[-1,1]){let e=i*.42-.09,t=1.84+(i===-1?.045:0),n=Pm(e,t)+.044,s=new we;s.position.set(e,t,n),Bn.add(s),Om.push(s),ks(s,ts(1052693,.25),[0,0,0],[.156,.156,.075]),ks(s,kd,[0,0,.055],[.084,.084,.029]),ks(s,ts(657676,.32),[0,0,.074],[.039,.039,.016])}var yo=new we;yo.name="Red bow tie";yo.position.set(Pd,.4,Pm(Pd,.4)+.065);yr.add(yo);var zm=new Wt({color:13046566,roughness:.76,sheen:.55,sheenColor:15747667,sheenRoughness:.82}),Ws=new bt;Ws.moveTo(.055,.065);Ws.bezierCurveTo(.18,.085,.32,.185,.43,.19);Ws.quadraticCurveTo(.49,.19,.485,.12);Ws.bezierCurveTo(.47,.03,.5,-.075,.48,-.14);Ws.quadraticCurveTo(.47,-.195,.4,-.175);Ws.bezierCurveTo(.27,-.14,.15,-.07,.055,-.06);Ws.closePath();var KM=new an(Ws,{depth:.055,bevelEnabled:!0,bevelSize:.018,bevelThickness:.018,bevelSegments:3,steps:1,curveSegments:18});for(let i of[-1,1]){let e=Hn(KM,zm,yo);e.scale.x=i,e.rotation.y=-i*.1;let t=ts(9965598,.9);for(let n of[-1,1])Eo([[i*.09,n*.026,.08],[i*.19,n*.055,.087],[i*.34,n*.11,.088]],.005,t,yo)}var Bm=Hn(new $t(1,24,16),zm,yo);Bm.position.set(0,0,.07);Bm.scale.set(.105,.12,.075);var Vd=.26,fo=-.53*Vd+.0036;ki.scale.setScalar(Vd);var yl=new Jt([[2.45,fo,-2.4],[2.05,fo,-1.7],[1.05,fo,-1.28],[.35,fo,-1.1],[.24,fo,-.66],[.12,fo,.1]].map(i=>new S(...i)),!1,"centripetal");yl.arcLengthDivisions=240;var JM=yl.getLength(),ll=new S,Td=new S,zs=document.querySelector("#figsaw-dialogue"),km=document.querySelector("#dialogue-announcement"),Vm=document.querySelector("#game-countdown"),fl=document.querySelector("#countdown-announcement"),ga=null,Ld=300,am=["I want to play a game...","Those who don't appreciate design do not deserve it.","Let the games begin..."],Gd=-1,Wd=1/0,hl=new S,gr=new S,ul=new ha,Rd=new S,Gm=0,po=!1,cm=0,lm=!1,Dd=0,Xd=null;function Wm(i){let e=am[i];Gd=i,zs.querySelector(".dialogue-bubble span").textContent=e,km.textContent=`Figsaw. ${e}`;let t=Z0(e,Je.time);Xd=bi?null:t,Wd=i<am.length-1?t.startTime+t.duration+1:1/0,i===0&&(ga=t.startTime+t.duration)}function Xm(i){let e=i-Gm-1,t=bi?1:Ze.smoothstep(e,0,8.5);yl.getPointAt(t,ll),yl.getTangentAt(t,Td),ki.position.copy(ll),ki.rotation.y=Math.atan2(Td.x,Td.z);let n=Math.atan2(Bs.x-ll.x,Bs.z-ll.z),s=Ze.euclideanModulo(n-ki.rotation.y+Math.PI,Math.PI*2)-Math.PI;VM(t*JM/Vd),t===1&&!po&&(po=!0,cm=i,Jn.start(Je.time,On,Je),Wm(0)),f0(po?i-cm:-1,bi,xl),Bn.rotation.y=Ze.clamp(s*.58,-.7,.7)+xl.headYaw}Xm(0);Sa.mark("characterBuilt");var{group:wa,laptop:Vi,catMug:ba,acidLeaks:zn,chargingKit:Gi,ketchupKey:es,countdown:xa,setDisplayEnvironment:QM,update:jM,figpalHoists:gs,toggleHoist:eE}=O0(Rn,Bs);gi.add(wa);Sa.mark("officeBuilt");var en=q0(tn,{canDetach:()=>es.hasKey});gi.add(en.group);var Qn=Q0({laptop:Vi,restraint:en,cameraPosition:On,state:Je}),An=j0({mug:ba,camera:tn,restraint:en}),Ma=document.querySelector("#game-over"),qm=Ma.querySelector(".game-over-content"),Ym=document.querySelector("#restart-game"),Xn=!1;Ym.addEventListener("click",()=>{Ud(),gt.focus({preventScroll:!0})});var Ai=document.querySelector("#restraint-status"),pl=document.querySelector("#charging-hint"),vo=null,_o=null,mo="",Al=0,xs=Y0(()=>{if(!es.hasKey){ya("The shackle is locked. Find its key first.");return}en.detach(Je.time)&&(Ai.textContent="Instance detached. Your wrist is free. You can open the laptop, drink from the cat mug, or turn a tank drain valve.",gt.classList.remove("over-chain"),gt.setAttribute("aria-label",gt.getAttribute("aria-label").replace("Your wrist is chained to the rear pipes. Pour the glass ketchup bottle beside the cat mug, collect the key, then click or right-click the shackle and choose Detach instance to free your hand.","Your wrist is free. Click the laptop, cat mug, or a red tank drain valve to use it.")))},{canDetach:()=>es.hasKey,onBlocked:()=>ya("The shackle is locked. Find its key first.")}),vl=B0(gs),xr=k0(gs.speechAnchors,gt,gs.canSpeak),Zm=z0(gs,xr),$m=l0(Rn);QM($m.texture);en.setEnvironment($m.texture);zn.bindTargets([wa,ki]);c0(wa,{exclude:[Vi.object,ba,gs.group,xa.group,Gi.group,es.group]});Sa.mark("scenePrepared");function tE(i){if(!po||vl.active){zs.hidden=!0;return}Bn.localToWorld(hl.set(-.28,Tl+.24,0)),gr.copy(hl).project(tn);let e=Math.min(.7,.4/(tn.position.distanceTo(hl)*Math.tan(Ze.degToRad(tn.fov/2))*tn.aspect));if(gr.z<-1||gr.z>1||Math.abs(gr.x)>1+e||Math.abs(gr.y)>1){zs.hidden=!0;return}if(i>=Dd){Dd=i+.12,Rd.copy(hl).sub(tn.position);let r=Rd.length();ul.set(tn.position,Rd.normalize()),ul.near=.06,ul.far=Math.max(.06,r-.035),lm=ul.intersectObject(wa,!0).length>0}if(lm){zs.hidden=!0;return}zs.hidden=!1;let t=gt.getBoundingClientRect(),n=t.left+(gr.x*.5+.5)*t.width,s=t.top+(-gr.y*.5+.5)*t.height;zs.style.transform=`translate3d(${n}px,${s-8}px,0) translate(-50%,-100%)`}var hm=new ha,um=new Ne;function qd(i){let e=gt.getBoundingClientRect();um.set((i.clientX-e.left)/e.width*2-1,-(i.clientY-e.top)/e.height*2+1),hm.setFromCamera(um,tn);let t=hm.intersectObjects([wa,ki,en.group],!0).find(n=>{for(let s=n.object;s;s=s.parent)if(!s.visible)return!1;return!0});for(let n=t?.object;n;n=n.parent)if(n===en.target||n===Vi.object||n===ba||n===Bn||n.userData.chargingAction||n.userData.keyAction||Number.isInteger(n.userData.valveIndex)||Number.isInteger(n.userData.hoistIndex))return n;return null}function ya(i){mo=i,Al=Je.time+4.5,Ai.textContent=i}function nE(i){Qn.active||An.active||Xn||zn.dying||(Jn.cancel(),pi=!1,i==="pour"?es.pour(Je.time)?ya("You tip the bottle. Something metal is sliding through the ketchup\u2026"):ya(es.hint("pour")):i==="collect"&&es.collect()&&(ya("Shackle key collected. Click your shackle and choose Detach instance."),en.requestReach(Je.time)))}function Yd(i){!i||Qn.active||An.active||Xn||zn.dying||(en.locked&&en.requestReach(Je.time),i==="charger"&&Gi.phase==="drawer"&&!Gi.drawerReady&&!en.locked?mo="Let the drawer finish opening.":mo=Gi.use(i,Je.time,en.locked),Al=Je.time+3.8,Ai.textContent=mo,Jn.cancel(),pi=!1)}function iE(){let i=Je.time<Al?mo:vo?es.hint(vo):_o?Gi.hint(_o):es.hasKey&&en.locked?"Shackle key collected \xB7 Click the shackle to unlock":Gi.hint(null);pl.textContent!==i&&(pl.textContent=i),pl.hidden=!i||Xn||An.active||Qn.active}function Km(){if(!(Qn.active||An.active||Xn||zn.dying)){if(en.locked){en.requestReach(Je.time),Ai.textContent="The chain pulls tight. You can't reach the laptop.";return}if(Gi.phase==="powered"){Yd("laptop");return}if(Vi.isOpen){Jm();return}Qn.start(Je.time)&&(Xs(),Jn.cancel(),pi=!1,Ai.textContent="You reach for the front edge of the laptop.")}}function Jm(i=!1){!i&&!Vi.open()||(Ai.textContent="You lift the lid and let go. The laptop is open.",gt.classList.remove("over-laptop"),gt.setAttribute("aria-label",gt.getAttribute("aria-label").replace("a closed MacBook Pro","an open MacBook Pro").replace(" Click the laptop or press Enter to open it.","")))}function Qm(){if(!(Qn.active||An.active||Xn||zn.dying)){if(en.locked){en.requestReach(Je.time),Ai.textContent="The chain pulls tight. Detach the shackle before picking up the mug.";return}An.start(Je.time)&&(Xs(),Jn.cancel(),pi=!1,xs.hide(),gt.classList.remove("over-mug"),Ai.textContent="You pick up the cat mug by its handle and raise it for a drink.")}}function jm(i){if(!(Qn.active||An.active||Xn||zn.dying)){if(en.locked){en.requestReach(Je.time),Ai.textContent="The chain pulls tight. Detach the shackle before turning a tank valve.";return}zn.open(i,Je.time,en.locked)&&(Jn.cancel(),pi=!1,xs.hide(),Ai.textContent=`Tank ${i+1}'s valve spins open. Bubbling acid spills onto the floor and starts eating through everything it touches.`)}}function sE(){let i=0,e=1/0,t=new S;return gs.valves.forEach((n,s)=>{n.object.getWorldPosition(t);let r=t.distanceToSquared(On);r<e&&(e=r,i=s)}),i}function dm(i){Xn||(Xn=!0,Xs(),xs.hide(),zs.hidden=!0,xr.hide(),document.body.classList.add("game-over"),gt.inert=!0,qm.hidden=!1,Ym.focus({preventScroll:!0}),Ai.textContent=i)}function eg(i){if(An.active||Xn||zn.dying)return;let e=eE(i);if(!e)return;let t=gs.isLowered(i);t?xr.show(i,Je.time):xr.hide(i),document.querySelector("#hoist-status").textContent=t&&gs.canSpeak(i)?`${e} ${fa[i]}`:e}var pi=!1,Ci=null,ml=null,_l=0,rE=new Set(["KeyW","KeyA","KeyS","KeyD","KeyE","KeyQ"]),Bi=new Set,go=i=>Ze.euclideanModulo(i+Math.PI,Math.PI*2)-Math.PI;function Ud(){El(),es.reset(),vo=null,Gi.reset(),_o=null,mo="",Al=0,pl.hidden=!0,Xn=!1,zn.reset(),An.reset(),Ma.hidden=!0,Ma.style.opacity="0",qm.hidden=!0,document.body.classList.remove("game-over","mug-impact"),gt.inert=!1,Qn.cancel(),Jn.cancel(),en.reset(),Vi.close(),xs.hide(),Ai.textContent="",gt.setAttribute("aria-label",HM),vl.reset(),xr.hide(),Zm.reset(Je.time),Bi.clear(),pi=!0,Gm=Je.time,po=!1,zs.hidden=!0,km.textContent="",Xd=null,Gd=-1,Wd=1/0,Je.talkUntil=0,Dd=0,ga=null,xa.reset(),Ld=300,Vm.textContent="05:00",fl.textContent=""}function Xs(){Bi.clear(),Je.space=!1,Ci=null}document.addEventListener("keydown",i=>{if(Xn){i.code==="KeyR"&&!i.repeat&&(i.preventDefault(),Ud(),gt.focus({preventScroll:!0}));return}if((Qn.active||An.active||zn.dying)&&i.code!=="KeyR"){i.preventDefault();return}if(!xs.active&&!(i.target.closest('input,textarea,select,[contenteditable="true"]')||i.metaKey||i.ctrlKey||i.altKey)){if(rE.has(i.code)){i.preventDefault(),Jn.cancel(),Bi.add(i.code),pi=!1;return}i.target.closest("button")&&(i.code==="Space"||i.code==="Enter")||(i.code==="Enter"&&i.target===gt&&(i.preventDefault(),Km()),i.code==="KeyF"&&i.target===gt&&!i.repeat&&(i.preventDefault(),Yd(Gi.nextAction)),i.code==="KeyM"&&i.target===gt&&!i.repeat&&(i.preventDefault(),Qm()),i.code==="KeyV"&&i.target===gt&&!i.repeat&&(i.preventDefault(),jm(sE())),/^Digit[1-3]$/.test(i.code)&&i.target===gt&&!i.repeat&&(i.preventDefault(),eg(Number(i.code.slice(-1))-1)),i.code==="Space"&&(i.preventDefault(),Je.space=!0),i.code==="KeyR"&&!i.repeat&&Ud(),i.code.startsWith("Arrow")&&(i.preventDefault(),Jn.cancel(),pi=!1,i.code==="ArrowLeft"&&(Je.yaw=go(Je.yaw+.08)),i.code==="ArrowRight"&&(Je.yaw=go(Je.yaw-.08)),i.code==="ArrowUp"&&(Je.pitch=Ze.clamp(Je.pitch+.05,-1.4,1.4)),i.code==="ArrowDown"&&(Je.pitch=Ze.clamp(Je.pitch-.05,-1.4,1.4))))}});document.addEventListener("keyup",i=>{Bi.delete(i.code),i.code==="Space"&&(Je.space=!1)});window.addEventListener("blur",Xs);document.addEventListener("visibilitychange",()=>{document.hidden&&Xs()});gt.addEventListener("contextmenu",i=>{i.preventDefault(),Xs(),!(An.active||Xn||zn.dying)&&(en.locked&&qd(i)===en.target?xs.show(i.clientX,i.clientY):xs.hide())});gt.addEventListener("pointerdown",i=>{Qn.active||An.active||Xn||zn.dying||i.button===0&&Ci===null&&(gt.focus({preventScroll:!0}),Ci=i.pointerId,pi=!1,_l=0,ml={x:i.clientX,y:i.clientY},gt.setPointerCapture(i.pointerId))});gt.addEventListener("pointermove",i=>{if(Qn.active||An.active||Xn||zn.dying)return;if(Ci===null){let n=qd(i);vo=n?.userData.keyAction||null,gt.classList.toggle("over-key",!!vo),_o=n?.userData.chargingAction||(n===Vi.object&&Gi.phase==="powered"?"laptop":null),gt.classList.toggle("over-charging",!!_o),gt.classList.toggle("over-laptop",n===Vi.object&&!Vi.isOpen),gt.classList.toggle("over-hoist",Number.isInteger(n?.userData.hoistIndex)),gt.classList.toggle("over-mug",n===ba),gt.classList.toggle("over-valve",Number.isInteger(n?.userData.valveIndex)),gt.classList.toggle("over-chain",n===en.target&&en.locked);return}if(i.pointerId!==Ci)return;let e=i.clientX-ml.x,t=i.clientY-ml.y;_l+=Math.abs(e)+Math.abs(t),_l>=6&&Jn.cancel(),Je.yaw=go(Je.yaw-e*.004),Je.pitch=Ze.clamp(Je.pitch+t*.003,-1.4,1.4),ml={x:i.clientX,y:i.clientY}});gt.addEventListener("pointerup",i=>{if(i.pointerId===Ci&&(Ci=null,_l<6)){let e=qd(i);e?.userData.keyAction?nE(e.userData.keyAction):e===en.target&&en.locked?xs.show(i.clientX,i.clientY):e?.userData.chargingAction?Yd(e.userData.chargingAction):e===Vi.object?Km():e===ba?Qm():Number.isInteger(e?.userData.valveIndex)?jm(e.userData.valveIndex):e===Bn?Je.talkUntil=Je.time+1.8:Number.isInteger(e?.userData.hoistIndex)&&eg(e.userData.hoistIndex)}});gt.addEventListener("pointerleave",()=>{vo=null,_o=null,gt.classList.remove("over-key","over-laptop","over-hoist","over-chain","over-mug","over-valve","over-charging")});gt.addEventListener("pointercancel",i=>{i.pointerId===Ci&&(Ci=null)});gt.addEventListener("lostpointercapture",i=>{i.pointerId===Ci&&(Ci=null)});gt.addEventListener("wheel",i=>{i.preventDefault(),!(Qn.active||An.active||Xn||zn.dying)&&(Jn.cancel(),pi=!1,Je.zoom=Ze.clamp(Je.zoom+i.deltaY*5e-4,.78,1))},{passive:!1});var Cl=document.querySelector("#copy-view"),fm=Cl.querySelector("span"),pm=document.querySelector("#copy-status"),Hd=document.querySelector("#copy-fallback"),Ad=document.querySelector("#view-text"),mm;function oE(){let i=n=>n.toArray().map(s=>Number(s.toFixed(6))),e=tn.getWorldDirection(new S),t={position:i(tn.position),lookAt:i(tn.position.clone().add(e)),fov:Number(tn.fov.toFixed(4))};return`Set this as the default camera view for Figsaw:
${JSON.stringify(t,null,2)}`}function aE(i){let e=document.createElement("textarea");e.value=i,e.readOnly=!0,e.style.cssText="position:fixed;left:-9999px;top:0;font-size:16px",document.body.append(e),e.focus(),e.select(),e.setSelectionRange(0,i.length);let t=!1;try{t=document.execCommand("copy")}catch{}return e.remove(),Cl.focus({preventScroll:!0}),t}Cl.addEventListener("click",async()=>{let i=oE();Ad.value=i,clearTimeout(mm);let e=!1;try{navigator.clipboard?.writeText&&(await navigator.clipboard.writeText(i),e=!0)}catch{}e||(e=aE(i)),e?(Hd.hidden=!0,fm.textContent="Copied",pm.textContent="View copied. Paste it into the chat to set the default view."):(Hd.hidden=!1,Ad.focus(),Ad.select(),pm.textContent="Select and copy the view below, then paste it into the chat."),mm=setTimeout(()=>{fm.textContent="Copy view"},2200)});document.querySelector("#close-copy").addEventListener("click",()=>{Hd.hidden=!0,Cl.focus()});function Zd(){let{width:i,height:e}=gt.getBoundingClientRect();!i||!e||(Rn.setSize(i,e,!1),tn.aspect=i/e,tn.fov=Mo.fov*Je.zoom,tn.updateProjectionMatrix())}var cE=new ResizeObserver(Zd);cE.observe(gt);Zd();var Ml=new $c,tg=!1,Ea=0,ma=0,gm=-1/0,xm=0,Cd=0,dl=0;function El(){tg&&!Ea&&!document.hidden&&(Ea=requestAnimationFrame(ng))}document.addEventListener("visibilitychange",()=>{document.hidden?(cancelAnimationFrame(Ea),Ea=0,Xs()):(ma=0,Ml.getDelta(),El())});function ng(){if(Ea=0,document.hidden)return;if(Xn){Ml.getDelta();return}let i=performance.now(),e=ma?i-ma:0;if(ma&&e<1e3/Dt.maxFps-1){El();return}ma=i;let t=Math.min(Ml.getDelta(),.04),n=Je.time+=t,s=1-Math.exp(-t*12);pi&&(Je.yaw=go(Je.yaw+go(Os.yaw-Je.yaw)*s*.5),Je.pitch=Ti(Je.pitch,Os.pitch,s*.5),Je.zoom=Ti(Je.zoom,1,s*.5),On.lerp(Bs,s*.5),Math.abs(go(Je.yaw-Os.yaw))+Math.abs(Je.pitch-Os.pitch)+Math.abs(Je.zoom-1)+On.distanceTo(Bs)<.005&&(Je.yaw=Os.yaw,Je.pitch=Os.pitch,Je.zoom=1,On.copy(Bs),pi=!1)),Xm(n),po&&n>=Wd&&Wm(Gd+1),Jn.active&&(pi=!1),(Bi.size||Ci!==null)&&Jn.cancel(),(Qn.active||An.active)&&Jn.cancel(),Jn.update(n,On,Je,bi),Qn.update(n,bi)&&Jm(!0);let r=Je.yaw,o=Number(Bi.has("KeyW"))-Number(Bi.has("KeyS")),a=Number(Bi.has("KeyD"))-Number(Bi.has("KeyA")),c=Number(Bi.has("KeyE"))-Number(Bi.has("KeyQ"));Sd.set(-Math.sin(r)*o+Math.cos(r)*a,c,-Math.cos(r)*o-Math.sin(r)*a),Sd.lengthSq()>0&&(On.addScaledVector(Sd.normalize(),t*1.05),On.x=Ze.clamp(On.x,-3.72,3.72),On.y=Ze.clamp(On.y,.08,3),On.z=Ze.clamp(On.z,-3.78,4.25)),tn.position.copy(On),tm.set(-Math.sin(r)*Math.cos(Je.pitch),Math.sin(Je.pitch),-Math.cos(r)*Math.cos(Je.pitch)),em.copy(On).add(tm),tn.lookAt(em);let l=Mo.fov*Je.zoom;Math.abs(tn.fov-l)>.001&&(tn.fov=l,tn.updateProjectionMatrix()),ga!==null&&n>=ga&&(xa.start(),ga=null,fl.textContent="The five-minute countdown has started.");let h=xa.update();h!==Ld&&(Vm.textContent=ol(h),Ld=h,h===0&&(fl.textContent="The countdown has reached zero.")),vl.update(xa.status,n)&&(xr.showAll(n),fl.textContent=`Time is up. All three Figpals are lowering into the green liquid. ${fa.filter((y,M)=>gs.canSpeak(M)).join(" ")}`);let f=$0(Xd,n),p=n<Je.talkUntil?.16+.7*Math.sin(n*10)**2:0,d=Je.space?1:Math.max(f,p);Je.jaw=Ti(Je.jaw,d,s),yr.position.y=-Je.jaw*im,Bn.position.y=Am+Je.jaw*im*Rm;let g=zn.update(n,t,On,tn,bi);zn.dying&&Xs();let x=An.update(n,bi),m=Math.max(An.blackout,zn.blackout(n));m>0&&(Ma.hidden=!1,Ma.style.opacity=String(m),document.body.classList.add("mug-impact")),g?dm("The corrosive green liquid reaches you. Game over."):x&&dm("The mug's pointed ears hit your eyes. Everything goes dark. Game over."),en.update(n,bi,xs.active||An.active,An.handPose||Qn.handPose),Vi.update(t,bi),Gi.update(n,bi),iE(),Wi.intensity=ym*jM(n,bi,tn.position),ki.updateMatrixWorld(!0),Bn.localToWorld(bd.set(-.09,1.86,1)),uo.copy(tn.position).sub(bd);let u=Math.max(1,uo.length());uo.normalize().applyAxisAngle($M,xl.gazeYaw),uo.y+=xl.gazePitch,uo.normalize(),rm.copy(bd).addScaledVector(uo,u);for(let y of Om)om.copy(y.quaternion),y.lookAt(rm),bi||y.quaternion.copy(om.slerp(y.quaternion,1-Math.exp(-t*16)));n-gm>=1/Dt.shadowHz&&(Rn.shadowMap.needsUpdate=!0,gm=n),Rn.render(gi,tn),tE(n),Zm.update(n,vl.active),xr.update(tn,n),Sa.frame(i);let E=performance.now()-i;dl++,(E>Dt.targetFrameMs||e>Dt.targetFrameMs*1.4)&&Cd++,n-xm>4&&(dl>30&&Cd/dl>.65&&Rn.getPixelRatio()>Dt.minPixelRatio&&(Rn.setPixelRatio(Math.max(Dt.minPixelRatio,Rn.getPixelRatio()-.25)),Zd()),xm=n,Cd=0,dl=0),El()}Rn.compileAsync(gi,tn).then(()=>{Sa.mark("shadersReady"),tg=!0,Ml.getDelta(),ng(),document.querySelector("#loading-status")?.remove()}).catch(i=>{console.error(i);let e=document.querySelector("#loading-status");e&&(e.textContent="The room could not load. Please reload to try again.")});gt.addEventListener("webglcontextlost",i=>i.preventDefault());gt.addEventListener("webglcontextrestored",()=>location.reload());
