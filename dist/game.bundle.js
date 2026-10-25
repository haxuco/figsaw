var Fg=0,wf=1,Og=2;var Fp=1,Ku=2,ls=3,Ki=0,gn=1,It=2,As=0,Gr=1,_c=2,bf=3,Tf=4,zg=5,tr=100,Bg=101,kg=102,Vg=103,Gg=104,Wg=200,Xg=201,qg=202,Yg=203,Ph=204,Ih=205,Zg=206,$g=207,Kg=208,Jg=209,Qg=210,jg=211,e1=212,t1=213,n1=214,Lh=0,Dh=1,Uh=2,Yr=3,Hh=4,Nh=5,Fh=6,Oh=7,Op=0,i1=1,s1=2,Cs=0,r1=1,o1=2,a1=3,Ju=4,c1=5,l1=6,h1=7;var zp=300,Zr=301,$r=302,Ko=303,zh=304,Kc=306,rr=1e3,sr=1001,Bh=1002,ni=1003,u1=1004;var Ba=1005;var pn=1006,$l=1007;var Fi=1008;var us=1009,Bp=1010,kp=1011,Jo=1012,Qu=1013,or=1014,$i=1015,ua=1016,ju=1017,ed=1018,Kr=1020,Vp=35902,Gp=1021,Wp=1022,ui=1023,Xp=1024,qp=1025,Wr=1026,Jr=1027,td=1028,nd=1029,Yp=1030,id=1031;var sd=1033,pc=33776,mc=33777,gc=33778,xc=33779,kh=35840,Vh=35841,Gh=35842,Wh=35843,Xh=36196,qh=37492,Yh=37496,Zh=37808,$h=37809,Kh=37810,Jh=37811,Qh=37812,jh=37813,eu=37814,tu=37815,nu=37816,iu=37817,su=37818,ru=37819,ou=37820,au=37821,yc=36492,cu=36494,lu=36495,Zp=36283,hu=36284,uu=36285,du=36286;var Mc=2300,fu=2301,Kl=2302,Rf=2400,Af=2401,Cf=2402;var d1=3200,rd=3201;var $p=0,f1=1,Rs="",ft="srgb",Fs="srgb-linear",od="display-p3",Jc="display-p3-linear",Ec="linear",sn="srgb",Sc="rec709",wc="p3";var br=7680;var Pf=519,p1=512,m1=513,g1=514,Kp=515,x1=516,y1=517,v1=518,_1=519,If=35044,Un=35048;var Lf="300 es",hs=2e3,bc=2001,Is=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let s=this._listeners[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let n=this._listeners[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},Gn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Df=1234567,Xo=Math.PI/180,Qr=180/Math.PI;function dr(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Gn[i&255]+Gn[i>>8&255]+Gn[i>>16&255]+Gn[i>>24&255]+"-"+Gn[e&255]+Gn[e>>8&255]+"-"+Gn[e>>16&15|64]+Gn[e>>24&255]+"-"+Gn[t&63|128]+Gn[t>>8&255]+"-"+Gn[t>>16&255]+Gn[t>>24&255]+Gn[n&255]+Gn[n>>8&255]+Gn[n>>16&255]+Gn[n>>24&255]).toLowerCase()}function Sn(i,e,t){return Math.max(e,Math.min(t,i))}function ad(i,e){return(i%e+e)%e}function M1(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function E1(i,e,t){return i!==e?(t-i)/(e-i):0}function qo(i,e,t){return(1-t)*i+t*e}function S1(i,e,t,n){return qo(i,e,1-Math.exp(-t*n))}function w1(i,e=1){return e-Math.abs(ad(i,e*2)-e)}function b1(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function T1(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function R1(i,e){return i+Math.floor(Math.random()*(e-i+1))}function A1(i,e){return i+Math.random()*(e-i)}function C1(i){return i*(.5-Math.random())}function P1(i){i!==void 0&&(Df=i);let e=Df+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function I1(i){return i*Xo}function L1(i){return i*Qr}function D1(i){return(i&i-1)===0&&i!==0}function U1(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function H1(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function N1(i,e,t,n,s){let r=Math.cos,o=Math.sin,a=r(t/2),c=o(t/2),l=r((e+n)/2),h=o((e+n)/2),p=r((e-n)/2),f=o((e-n)/2),d=r((n-e)/2),g=o((n-e)/2);switch(s){case"XYX":i.set(a*h,c*p,c*f,a*l);break;case"YZY":i.set(c*f,a*h,c*p,a*l);break;case"ZXZ":i.set(c*p,c*f,a*h,a*l);break;case"XZX":i.set(a*h,c*g,c*d,a*l);break;case"YXY":i.set(c*d,a*h,c*g,a*l);break;case"ZYZ":i.set(c*g,c*d,a*h,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Br(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Zn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var Je={DEG2RAD:Xo,RAD2DEG:Qr,generateUUID:dr,clamp:Sn,euclideanModulo:ad,mapLinear:M1,inverseLerp:E1,lerp:qo,damp:S1,pingpong:w1,smoothstep:b1,smootherstep:T1,randInt:R1,randFloat:A1,randFloatSpread:C1,seededRandom:P1,degToRad:I1,radToDeg:L1,isPowerOfTwo:D1,ceilPowerOfTwo:U1,floorPowerOfTwo:H1,setQuaternionFromProperEuler:N1,normalize:Zn,denormalize:Br},Ne=class i{constructor(e=0,t=0){i.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Sn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},vt=class i{constructor(e,t,n,s,r,o,a,c,l){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,c,l)}set(e,t,n,s,r,o,a,c,l){let h=this.elements;return h[0]=e,h[1]=s,h[2]=a,h[3]=t,h[4]=r,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],p=n[7],f=n[2],d=n[5],g=n[8],x=s[0],m=s[3],u=s[6],E=s[1],y=s[4],M=s[7],I=s[2],A=s[5],S=s[8];return r[0]=o*x+a*E+c*I,r[3]=o*m+a*y+c*A,r[6]=o*u+a*M+c*S,r[1]=l*x+h*E+p*I,r[4]=l*m+h*y+p*A,r[7]=l*u+h*M+p*S,r[2]=f*x+d*E+g*I,r[5]=f*m+d*y+g*A,r[8]=f*u+d*M+g*S,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8];return t*o*h-t*a*l-n*r*h+n*a*c+s*r*l-s*o*c}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],p=h*o-a*l,f=a*c-h*r,d=l*r-o*c,g=t*p+n*f+s*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/g;return e[0]=p*x,e[1]=(s*l-h*n)*x,e[2]=(a*n-s*o)*x,e[3]=f*x,e[4]=(h*t-s*c)*x,e[5]=(s*r-a*t)*x,e[6]=d*x,e[7]=(n*c-l*t)*x,e[8]=(o*t-n*r)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+e,-s*l,s*c,-s*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Jl.makeScale(e,t)),this}rotate(e){return this.premultiply(Jl.makeRotation(-e)),this}translate(e,t){return this.premultiply(Jl.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Jl=new vt;function Jp(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Qo(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function F1(){let i=Qo("canvas");return i.style.display="block",i}var Uf={};function vc(i){i in Uf||(Uf[i]=!0,console.warn(i))}function O1(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}function z1(i){let e=i.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function B1(i){let e=i.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}var Hf=new vt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Nf=new vt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Ho={[Fs]:{transfer:Ec,primaries:Sc,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i,fromReference:i=>i},[ft]:{transfer:sn,primaries:Sc,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[Jc]:{transfer:Ec,primaries:wc,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.applyMatrix3(Nf),fromReference:i=>i.applyMatrix3(Hf)},[od]:{transfer:sn,primaries:wc,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.convertSRGBToLinear().applyMatrix3(Nf),fromReference:i=>i.applyMatrix3(Hf).convertLinearToSRGB()}},k1=new Set([Fs,Jc]),Gt={enabled:!0,_workingColorSpace:Fs,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!k1.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;let n=Ho[e].toReference,s=Ho[t].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this._workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this._workingColorSpace)},getPrimaries:function(i){return Ho[i].primaries},getTransfer:function(i){return i===Rs?Ec:Ho[i].transfer},getLuminanceCoefficients:function(i,e=this._workingColorSpace){return i.fromArray(Ho[e].luminanceCoefficients)}};function Xr(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ql(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Tr,pu=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Tr===void 0&&(Tr=Qo("canvas")),Tr.width=e.width,Tr.height=e.height;let n=Tr.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Tr}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Qo("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Xr(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Xr(t[n]/255)*255):t[n]=Xr(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},V1=0,Tc=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:V1++}),this.uuid=dr(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(jl(s[o].image)):r.push(jl(s[o]))}else r=jl(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function jl(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?pu.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var G1=0,Kn=class i extends Is{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=sr,s=sr,r=pn,o=Fi,a=ui,c=us,l=i.DEFAULT_ANISOTROPY,h=Rs){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:G1++}),this.uuid=dr(),this.name="",this.source=new Tc(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Ne(0,0),this.repeat=new Ne(1,1),this.center=new Ne(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new vt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==zp)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case rr:e.x=e.x-Math.floor(e.x);break;case sr:e.x=e.x<0?0:1;break;case Bh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case rr:e.y=e.y-Math.floor(e.y);break;case sr:e.y=e.y<0?0:1;break;case Bh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Kn.DEFAULT_IMAGE=null;Kn.DEFAULT_MAPPING=zp;Kn.DEFAULT_ANISOTROPY=1;var Yt=class i{constructor(e=0,t=0,n=0,s=1){i.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,c=e.elements,l=c[0],h=c[4],p=c[8],f=c[1],d=c[5],g=c[9],x=c[2],m=c[6],u=c[10];if(Math.abs(h-f)<.01&&Math.abs(p-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(p+x)<.1&&Math.abs(g+m)<.1&&Math.abs(l+d+u-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let y=(l+1)/2,M=(d+1)/2,I=(u+1)/2,A=(h+f)/4,S=(p+x)/4,C=(g+m)/4;return y>M&&y>I?y<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(y),s=A/n,r=S/n):M>I?M<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(M),n=A/s,r=C/s):I<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(I),n=S/r,s=C/r),this.set(n,s,r,t),this}let E=Math.sqrt((m-g)*(m-g)+(p-x)*(p-x)+(f-h)*(f-h));return Math.abs(E)<.001&&(E=1),this.x=(m-g)/E,this.y=(p-x)/E,this.z=(f-h)/E,this.w=Math.acos((l+d+u-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},mu=class extends Is{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Yt(0,0,e,t),this.scissorTest=!1,this.viewport=new Yt(0,0,e,t);let s={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:pn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let r=new Kn(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,s=e.textures.length;n<s;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new Tc(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},ds=class extends mu{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Rc=class extends Kn{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=ni,this.minFilter=ni,this.wrapR=sr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var gu=class extends Kn{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=ni,this.minFilter=ni,this.wrapR=sr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var pt=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let c=n[s+0],l=n[s+1],h=n[s+2],p=n[s+3],f=r[o+0],d=r[o+1],g=r[o+2],x=r[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=h,e[t+3]=p;return}if(a===1){e[t+0]=f,e[t+1]=d,e[t+2]=g,e[t+3]=x;return}if(p!==x||c!==f||l!==d||h!==g){let m=1-a,u=c*f+l*d+h*g+p*x,E=u>=0?1:-1,y=1-u*u;if(y>Number.EPSILON){let I=Math.sqrt(y),A=Math.atan2(I,u*E);m=Math.sin(m*A)/I,a=Math.sin(a*A)/I}let M=a*E;if(c=c*m+f*M,l=l*m+d*M,h=h*m+g*M,p=p*m+x*M,m===1-a){let I=1/Math.sqrt(c*c+l*l+h*h+p*p);c*=I,l*=I,h*=I,p*=I}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=p}static multiplyQuaternionsFlat(e,t,n,s,r,o){let a=n[s],c=n[s+1],l=n[s+2],h=n[s+3],p=r[o],f=r[o+1],d=r[o+2],g=r[o+3];return e[t]=a*g+h*p+c*d-l*f,e[t+1]=c*g+h*f+l*p-a*d,e[t+2]=l*g+h*d+a*f-c*p,e[t+3]=h*g-a*p-c*f-l*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(s/2),p=a(r/2),f=c(n/2),d=c(s/2),g=c(r/2);switch(o){case"XYZ":this._x=f*h*p+l*d*g,this._y=l*d*p-f*h*g,this._z=l*h*g+f*d*p,this._w=l*h*p-f*d*g;break;case"YXZ":this._x=f*h*p+l*d*g,this._y=l*d*p-f*h*g,this._z=l*h*g-f*d*p,this._w=l*h*p+f*d*g;break;case"ZXY":this._x=f*h*p-l*d*g,this._y=l*d*p+f*h*g,this._z=l*h*g+f*d*p,this._w=l*h*p-f*d*g;break;case"ZYX":this._x=f*h*p-l*d*g,this._y=l*d*p+f*h*g,this._z=l*h*g-f*d*p,this._w=l*h*p+f*d*g;break;case"YZX":this._x=f*h*p+l*d*g,this._y=l*d*p+f*h*g,this._z=l*h*g-f*d*p,this._w=l*h*p-f*d*g;break;case"XZY":this._x=f*h*p-l*d*g,this._y=l*d*p-f*h*g,this._z=l*h*g+f*d*p,this._w=l*h*p+f*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],c=t[9],l=t[2],h=t[6],p=t[10],f=n+a+p;if(f>0){let d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-c)*d,this._y=(r-l)*d,this._z=(o-s)*d}else if(n>a&&n>p){let d=2*Math.sqrt(1+n-a-p);this._w=(h-c)/d,this._x=.25*d,this._y=(s+o)/d,this._z=(r+l)/d}else if(a>p){let d=2*Math.sqrt(1+a-n-p);this._w=(r-l)/d,this._x=(s+o)/d,this._y=.25*d,this._z=(c+h)/d}else{let d=2*Math.sqrt(1+p-n-a);this._w=(o-s)/d,this._x=(r+l)/d,this._y=(c+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Sn(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+o*a+s*l-r*c,this._y=s*h+o*c+r*a-n*l,this._z=r*h+o*l+n*c-s*a,this._w=o*h-n*a-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,s=this._y,r=this._z,o=this._w,a=o*e._w+n*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;let c=1-a*a;if(c<=Number.EPSILON){let d=1-t;return this._w=d*o+t*this._w,this._x=d*n+t*this._x,this._y=d*s+t*this._y,this._z=d*r+t*this._z,this.normalize(),this}let l=Math.sqrt(c),h=Math.atan2(l,a),p=Math.sin((1-t)*h)/l,f=Math.sin(t*h)/l;return this._w=o*p+this._w*f,this._x=n*p+this._x*f,this._y=s*p+this._y*f,this._z=r*p+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},w=class i{constructor(e=0,t=0,n=0){i.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Ff.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ff.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*s-a*n),h=2*(a*t-r*s),p=2*(r*n-o*t);return this.x=t+c*l+o*p-a*h,this.y=n+c*h+a*l-r*p,this.z=s+c*p+r*h-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,c=t.z;return this.x=s*c-r*a,this.y=r*o-n*c,this.z=n*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return eh.copy(this).projectOnVector(e),this.sub(eh)}reflect(e){return this.sub(eh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Sn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},eh=new w,Ff=new pt,Dn=class{constructor(e=new w(1/0,1/0,1/0),t=new w(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Ui.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Ui.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Ui.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Ui):Ui.fromBufferAttribute(r,o),Ui.applyMatrix4(e.matrixWorld),this.expandByPoint(Ui);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ka.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ka.copy(n.boundingBox)),ka.applyMatrix4(e.matrixWorld),this.union(ka)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ui),Ui.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(No),Va.subVectors(this.max,No),Rr.subVectors(e.a,No),Ar.subVectors(e.b,No),Cr.subVectors(e.c,No),Ms.subVectors(Ar,Rr),Es.subVectors(Cr,Ar),Zs.subVectors(Rr,Cr);let t=[0,-Ms.z,Ms.y,0,-Es.z,Es.y,0,-Zs.z,Zs.y,Ms.z,0,-Ms.x,Es.z,0,-Es.x,Zs.z,0,-Zs.x,-Ms.y,Ms.x,0,-Es.y,Es.x,0,-Zs.y,Zs.x,0];return!th(t,Rr,Ar,Cr,Va)||(t=[1,0,0,0,1,0,0,0,1],!th(t,Rr,Ar,Cr,Va))?!1:(Ga.crossVectors(Ms,Es),t=[Ga.x,Ga.y,Ga.z],th(t,Rr,Ar,Cr,Va))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ui).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ui).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ss[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ss[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ss[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ss[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ss[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ss[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ss[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ss[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ss),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},ss=[new w,new w,new w,new w,new w,new w,new w,new w],Ui=new w,ka=new Dn,Rr=new w,Ar=new w,Cr=new w,Ms=new w,Es=new w,Zs=new w,No=new w,Va=new w,Ga=new w,$s=new w;function th(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){$s.fromArray(i,r);let a=s.x*Math.abs($s.x)+s.y*Math.abs($s.y)+s.z*Math.abs($s.z),c=e.dot($s),l=t.dot($s),h=n.dot($s);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}var W1=new Dn,Fo=new w,nh=new w,Ls=class{constructor(e=new w,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):W1.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Fo.subVectors(e,this.center);let t=Fo.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Fo,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(nh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Fo.copy(e.center).add(nh)),this.expandByPoint(Fo.copy(e.center).sub(nh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},rs=new w,ih=new w,Wa=new w,Ss=new w,sh=new w,Xa=new w,rh=new w,jo=class{constructor(e=new w,t=new w(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,rs)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=rs.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(rs.copy(this.origin).addScaledVector(this.direction,t),rs.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){ih.copy(e).add(t).multiplyScalar(.5),Wa.copy(t).sub(e).normalize(),Ss.copy(this.origin).sub(ih);let r=e.distanceTo(t)*.5,o=-this.direction.dot(Wa),a=Ss.dot(this.direction),c=-Ss.dot(Wa),l=Ss.lengthSq(),h=Math.abs(1-o*o),p,f,d,g;if(h>0)if(p=o*c-a,f=o*a-c,g=r*h,p>=0)if(f>=-g)if(f<=g){let x=1/h;p*=x,f*=x,d=p*(p+o*f+2*a)+f*(o*p+f+2*c)+l}else f=r,p=Math.max(0,-(o*f+a)),d=-p*p+f*(f+2*c)+l;else f=-r,p=Math.max(0,-(o*f+a)),d=-p*p+f*(f+2*c)+l;else f<=-g?(p=Math.max(0,-(-o*r+a)),f=p>0?-r:Math.min(Math.max(-r,-c),r),d=-p*p+f*(f+2*c)+l):f<=g?(p=0,f=Math.min(Math.max(-r,-c),r),d=f*(f+2*c)+l):(p=Math.max(0,-(o*r+a)),f=p>0?r:Math.min(Math.max(-r,-c),r),d=-p*p+f*(f+2*c)+l);else f=o>0?-r:r,p=Math.max(0,-(o*f+a)),d=-p*p+f*(f+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,p),s&&s.copy(ih).addScaledVector(Wa,f),d}intersectSphere(e,t){rs.subVectors(e.center,this.origin);let n=rs.dot(this.direction),s=rs.dot(rs)-n*n,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,c,l=1/this.direction.x,h=1/this.direction.y,p=1/this.direction.z,f=this.origin;return l>=0?(n=(e.min.x-f.x)*l,s=(e.max.x-f.x)*l):(n=(e.max.x-f.x)*l,s=(e.min.x-f.x)*l),h>=0?(r=(e.min.y-f.y)*h,o=(e.max.y-f.y)*h):(r=(e.max.y-f.y)*h,o=(e.min.y-f.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),p>=0?(a=(e.min.z-f.z)*p,c=(e.max.z-f.z)*p):(a=(e.max.z-f.z)*p,c=(e.min.z-f.z)*p),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,rs)!==null}intersectTriangle(e,t,n,s,r){sh.subVectors(t,e),Xa.subVectors(n,e),rh.crossVectors(sh,Xa);let o=this.direction.dot(rh),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ss.subVectors(this.origin,e);let c=a*this.direction.dot(Xa.crossVectors(Ss,Xa));if(c<0)return null;let l=a*this.direction.dot(sh.cross(Ss));if(l<0||c+l>o)return null;let h=-a*Ss.dot(rh);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},wt=class i{constructor(e,t,n,s,r,o,a,c,l,h,p,f,d,g,x,m){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,c,l,h,p,f,d,g,x,m)}set(e,t,n,s,r,o,a,c,l,h,p,f,d,g,x,m){let u=this.elements;return u[0]=e,u[4]=t,u[8]=n,u[12]=s,u[1]=r,u[5]=o,u[9]=a,u[13]=c,u[2]=l,u[6]=h,u[10]=p,u[14]=f,u[3]=d,u[7]=g,u[11]=x,u[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,s=1/Pr.setFromMatrixColumn(e,0).length(),r=1/Pr.setFromMatrixColumn(e,1).length(),o=1/Pr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),p=Math.sin(r);if(e.order==="XYZ"){let f=o*h,d=o*p,g=a*h,x=a*p;t[0]=c*h,t[4]=-c*p,t[8]=l,t[1]=d+g*l,t[5]=f-x*l,t[9]=-a*c,t[2]=x-f*l,t[6]=g+d*l,t[10]=o*c}else if(e.order==="YXZ"){let f=c*h,d=c*p,g=l*h,x=l*p;t[0]=f+x*a,t[4]=g*a-d,t[8]=o*l,t[1]=o*p,t[5]=o*h,t[9]=-a,t[2]=d*a-g,t[6]=x+f*a,t[10]=o*c}else if(e.order==="ZXY"){let f=c*h,d=c*p,g=l*h,x=l*p;t[0]=f-x*a,t[4]=-o*p,t[8]=g+d*a,t[1]=d+g*a,t[5]=o*h,t[9]=x-f*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){let f=o*h,d=o*p,g=a*h,x=a*p;t[0]=c*h,t[4]=g*l-d,t[8]=f*l+x,t[1]=c*p,t[5]=x*l+f,t[9]=d*l-g,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){let f=o*c,d=o*l,g=a*c,x=a*l;t[0]=c*h,t[4]=x-f*p,t[8]=g*p+d,t[1]=p,t[5]=o*h,t[9]=-a*h,t[2]=-l*h,t[6]=d*p+g,t[10]=f-x*p}else if(e.order==="XZY"){let f=o*c,d=o*l,g=a*c,x=a*l;t[0]=c*h,t[4]=-p,t[8]=l*h,t[1]=f*p+x,t[5]=o*h,t[9]=d*p-g,t[2]=g*p-d,t[6]=a*h,t[10]=x*p+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(X1,e,q1)}lookAt(e,t,n){let s=this.elements;return li.subVectors(e,t),li.lengthSq()===0&&(li.z=1),li.normalize(),ws.crossVectors(n,li),ws.lengthSq()===0&&(Math.abs(n.z)===1?li.x+=1e-4:li.z+=1e-4,li.normalize(),ws.crossVectors(n,li)),ws.normalize(),qa.crossVectors(li,ws),s[0]=ws.x,s[4]=qa.x,s[8]=li.x,s[1]=ws.y,s[5]=qa.y,s[9]=li.y,s[2]=ws.z,s[6]=qa.z,s[10]=li.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],p=n[5],f=n[9],d=n[13],g=n[2],x=n[6],m=n[10],u=n[14],E=n[3],y=n[7],M=n[11],I=n[15],A=s[0],S=s[4],C=s[8],Y=s[12],v=s[1],b=s[5],F=s[9],B=s[13],G=s[2],H=s[6],J=s[10],ye=s[14],ie=s[3],fe=s[7],N=s[11],ee=s[15];return r[0]=o*A+a*v+c*G+l*ie,r[4]=o*S+a*b+c*H+l*fe,r[8]=o*C+a*F+c*J+l*N,r[12]=o*Y+a*B+c*ye+l*ee,r[1]=h*A+p*v+f*G+d*ie,r[5]=h*S+p*b+f*H+d*fe,r[9]=h*C+p*F+f*J+d*N,r[13]=h*Y+p*B+f*ye+d*ee,r[2]=g*A+x*v+m*G+u*ie,r[6]=g*S+x*b+m*H+u*fe,r[10]=g*C+x*F+m*J+u*N,r[14]=g*Y+x*B+m*ye+u*ee,r[3]=E*A+y*v+M*G+I*ie,r[7]=E*S+y*b+M*H+I*fe,r[11]=E*C+y*F+M*J+I*N,r[15]=E*Y+y*B+M*ye+I*ee,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],c=e[9],l=e[13],h=e[2],p=e[6],f=e[10],d=e[14],g=e[3],x=e[7],m=e[11],u=e[15];return g*(+r*c*p-s*l*p-r*a*f+n*l*f+s*a*d-n*c*d)+x*(+t*c*d-t*l*f+r*o*f-s*o*d+s*l*h-r*c*h)+m*(+t*l*p-t*a*d-r*o*p+n*o*d+r*a*h-n*l*h)+u*(-s*a*h-t*c*p+t*a*f+s*o*p-n*o*f+n*c*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],p=e[9],f=e[10],d=e[11],g=e[12],x=e[13],m=e[14],u=e[15],E=p*m*l-x*f*l+x*c*d-a*m*d-p*c*u+a*f*u,y=g*f*l-h*m*l-g*c*d+o*m*d+h*c*u-o*f*u,M=h*x*l-g*p*l+g*a*d-o*x*d-h*a*u+o*p*u,I=g*p*c-h*x*c-g*a*f+o*x*f+h*a*m-o*p*m,A=t*E+n*y+s*M+r*I;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let S=1/A;return e[0]=E*S,e[1]=(x*f*r-p*m*r-x*s*d+n*m*d+p*s*u-n*f*u)*S,e[2]=(a*m*r-x*c*r+x*s*l-n*m*l-a*s*u+n*c*u)*S,e[3]=(p*c*r-a*f*r-p*s*l+n*f*l+a*s*d-n*c*d)*S,e[4]=y*S,e[5]=(h*m*r-g*f*r+g*s*d-t*m*d-h*s*u+t*f*u)*S,e[6]=(g*c*r-o*m*r-g*s*l+t*m*l+o*s*u-t*c*u)*S,e[7]=(o*f*r-h*c*r+h*s*l-t*f*l-o*s*d+t*c*d)*S,e[8]=M*S,e[9]=(g*p*r-h*x*r-g*n*d+t*x*d+h*n*u-t*p*u)*S,e[10]=(o*x*r-g*a*r+g*n*l-t*x*l-o*n*u+t*a*u)*S,e[11]=(h*a*r-o*p*r-h*n*l+t*p*l+o*n*d-t*a*d)*S,e[12]=I*S,e[13]=(h*x*s-g*p*s+g*n*f-t*x*f-h*n*m+t*p*m)*S,e[14]=(g*a*s-o*x*s-g*n*c+t*x*c+o*n*m-t*a*m)*S,e[15]=(o*p*s-h*a*s+h*n*c-t*p*c-o*n*f+t*a*f)*S,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,c=e.z,l=r*o,h=r*a;return this.set(l*o+n,l*a-s*c,l*c+s*a,0,l*a+s*c,h*a+n,h*c-s*o,0,l*c-s*a,h*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,o=t._y,a=t._z,c=t._w,l=r+r,h=o+o,p=a+a,f=r*l,d=r*h,g=r*p,x=o*h,m=o*p,u=a*p,E=c*l,y=c*h,M=c*p,I=n.x,A=n.y,S=n.z;return s[0]=(1-(x+u))*I,s[1]=(d+M)*I,s[2]=(g-y)*I,s[3]=0,s[4]=(d-M)*A,s[5]=(1-(f+u))*A,s[6]=(m+E)*A,s[7]=0,s[8]=(g+y)*S,s[9]=(m-E)*S,s[10]=(1-(f+x))*S,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements,r=Pr.set(s[0],s[1],s[2]).length(),o=Pr.set(s[4],s[5],s[6]).length(),a=Pr.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],Hi.copy(this);let l=1/r,h=1/o,p=1/a;return Hi.elements[0]*=l,Hi.elements[1]*=l,Hi.elements[2]*=l,Hi.elements[4]*=h,Hi.elements[5]*=h,Hi.elements[6]*=h,Hi.elements[8]*=p,Hi.elements[9]*=p,Hi.elements[10]*=p,t.setFromRotationMatrix(Hi),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,s,r,o,a=hs){let c=this.elements,l=2*r/(t-e),h=2*r/(n-s),p=(t+e)/(t-e),f=(n+s)/(n-s),d,g;if(a===hs)d=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===bc)d=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=p,c[12]=0,c[1]=0,c[5]=h,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=d,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,o,a=hs){let c=this.elements,l=1/(t-e),h=1/(n-s),p=1/(o-r),f=(t+e)*l,d=(n+s)*h,g,x;if(a===hs)g=(o+r)*p,x=-2*p;else if(a===bc)g=r*p,x=-1*p;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-f,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-d,c[2]=0,c[6]=0,c[10]=x,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Pr=new w,Hi=new wt,X1=new w(0,0,0),q1=new w(1,1,1),ws=new w,qa=new w,li=new w,Of=new wt,zf=new pt,ii=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],h=s[9],p=s[2],f=s[6],d=s[10];switch(t){case"XYZ":this._y=Math.asin(Sn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Sn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-p,r),this._z=0);break;case"ZXY":this._x=Math.asin(Sn(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-p,d),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Sn(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Sn(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-p,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-Sn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Of.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Of,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return zf.setFromEuler(this),this.setFromQuaternion(zf,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};ii.DEFAULT_ORDER="XYZ";var ea=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Y1=0,Bf=new w,Ir=new pt,os=new wt,Ya=new w,Oo=new w,Z1=new w,$1=new pt,kf=new w(1,0,0),Vf=new w(0,1,0),Gf=new w(0,0,1),Wf={type:"added"},K1={type:"removed"},Lr={type:"childadded",child:null},oh={type:"childremoved",child:null},Nt=class i extends Is{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Y1++}),this.uuid=dr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new w,t=new ii,n=new pt,s=new w(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new wt},normalMatrix:{value:new vt}}),this.matrix=new wt,this.matrixWorld=new wt,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ea,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ir.setFromAxisAngle(e,t),this.quaternion.multiply(Ir),this}rotateOnWorldAxis(e,t){return Ir.setFromAxisAngle(e,t),this.quaternion.premultiply(Ir),this}rotateX(e){return this.rotateOnAxis(kf,e)}rotateY(e){return this.rotateOnAxis(Vf,e)}rotateZ(e){return this.rotateOnAxis(Gf,e)}translateOnAxis(e,t){return Bf.copy(e).applyQuaternion(this.quaternion),this.position.add(Bf.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(kf,e)}translateY(e){return this.translateOnAxis(Vf,e)}translateZ(e){return this.translateOnAxis(Gf,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(os.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Ya.copy(e):Ya.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Oo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?os.lookAt(Oo,Ya,this.up):os.lookAt(Ya,Oo,this.up),this.quaternion.setFromRotationMatrix(os),s&&(os.extractRotation(s.matrixWorld),Ir.setFromRotationMatrix(os),this.quaternion.premultiply(Ir.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Wf),Lr.child=e,this.dispatchEvent(Lr),Lr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(K1),oh.child=e,this.dispatchEvent(oh),oh.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),os.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),os.multiply(e.parent.matrixWorld)),e.applyMatrix4(os),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Wf),Lr.child=e,this.dispatchEvent(Lr),Lr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Oo,e,Z1),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Oo,$1,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let p=c[l];r(e.shapes,p)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(e.materials,this.material[c]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];s.animations.push(r(e.animations,c))}}if(t){let a=o(e.geometries),c=o(e.materials),l=o(e.textures),h=o(e.images),p=o(e.shapes),f=o(e.skeletons),d=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),p.length>0&&(n.shapes=p),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){let c=[];for(let l in a){let h=a[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}};Nt.DEFAULT_UP=new w(0,1,0);Nt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Nt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Ni=new w,as=new w,ah=new w,cs=new w,Dr=new w,Ur=new w,Xf=new w,ch=new w,lh=new w,hh=new w,uh=new Yt,dh=new Yt,fh=new Yt,nr=class i{constructor(e=new w,t=new w,n=new w){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Ni.subVectors(e,t),s.cross(Ni);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){Ni.subVectors(s,t),as.subVectors(n,t),ah.subVectors(e,t);let o=Ni.dot(Ni),a=Ni.dot(as),c=Ni.dot(ah),l=as.dot(as),h=as.dot(ah),p=o*l-a*a;if(p===0)return r.set(0,0,0),null;let f=1/p,d=(l*c-a*h)*f,g=(o*h-a*c)*f;return r.set(1-d-g,g,d)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,cs)===null?!1:cs.x>=0&&cs.y>=0&&cs.x+cs.y<=1}static getInterpolation(e,t,n,s,r,o,a,c){return this.getBarycoord(e,t,n,s,cs)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,cs.x),c.addScaledVector(o,cs.y),c.addScaledVector(a,cs.z),c)}static getInterpolatedAttribute(e,t,n,s,r,o){return uh.setScalar(0),dh.setScalar(0),fh.setScalar(0),uh.fromBufferAttribute(e,t),dh.fromBufferAttribute(e,n),fh.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(uh,r.x),o.addScaledVector(dh,r.y),o.addScaledVector(fh,r.z),o}static isFrontFacing(e,t,n,s){return Ni.subVectors(n,t),as.subVectors(e,t),Ni.cross(as).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ni.subVectors(this.c,this.b),as.subVectors(this.a,this.b),Ni.cross(as).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,o,a;Dr.subVectors(s,n),Ur.subVectors(r,n),ch.subVectors(e,n);let c=Dr.dot(ch),l=Ur.dot(ch);if(c<=0&&l<=0)return t.copy(n);lh.subVectors(e,s);let h=Dr.dot(lh),p=Ur.dot(lh);if(h>=0&&p<=h)return t.copy(s);let f=c*p-h*l;if(f<=0&&c>=0&&h<=0)return o=c/(c-h),t.copy(n).addScaledVector(Dr,o);hh.subVectors(e,r);let d=Dr.dot(hh),g=Ur.dot(hh);if(g>=0&&d<=g)return t.copy(r);let x=d*l-c*g;if(x<=0&&l>=0&&g<=0)return a=l/(l-g),t.copy(n).addScaledVector(Ur,a);let m=h*g-d*p;if(m<=0&&p-h>=0&&d-g>=0)return Xf.subVectors(r,s),a=(p-h)/(p-h+(d-g)),t.copy(s).addScaledVector(Xf,a);let u=1/(m+x+f);return o=x*u,a=f*u,t.copy(n).addScaledVector(Dr,o).addScaledVector(Ur,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Qp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},bs={h:0,s:0,l:0},Za={h:0,s:0,l:0};function ph(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var ut=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ft){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Gt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=Gt.workingColorSpace){return this.r=e,this.g=t,this.b=n,Gt.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=Gt.workingColorSpace){if(e=ad(e,1),t=Sn(t,0,1),n=Sn(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=ph(o,r,e+1/3),this.g=ph(o,r,e),this.b=ph(o,r,e-1/3)}return Gt.toWorkingColorSpace(this,s),this}setStyle(e,t=ft){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=ft){let n=Qp[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Xr(e.r),this.g=Xr(e.g),this.b=Xr(e.b),this}copyLinearToSRGB(e){return this.r=Ql(e.r),this.g=Ql(e.g),this.b=Ql(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ft){return Gt.fromWorkingColorSpace(Wn.copy(this),e),Math.round(Sn(Wn.r*255,0,255))*65536+Math.round(Sn(Wn.g*255,0,255))*256+Math.round(Sn(Wn.b*255,0,255))}getHexString(e=ft){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Gt.workingColorSpace){Gt.fromWorkingColorSpace(Wn.copy(this),t);let n=Wn.r,s=Wn.g,r=Wn.b,o=Math.max(n,s,r),a=Math.min(n,s,r),c,l,h=(a+o)/2;if(a===o)c=0,l=0;else{let p=o-a;switch(l=h<=.5?p/(o+a):p/(2-o-a),o){case n:c=(s-r)/p+(s<r?6:0);break;case s:c=(r-n)/p+2;break;case r:c=(n-s)/p+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=Gt.workingColorSpace){return Gt.fromWorkingColorSpace(Wn.copy(this),t),e.r=Wn.r,e.g=Wn.g,e.b=Wn.b,e}getStyle(e=ft){Gt.fromWorkingColorSpace(Wn.copy(this),e);let t=Wn.r,n=Wn.g,s=Wn.b;return e!==ft?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(bs),this.setHSL(bs.h+e,bs.s+t,bs.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(bs),e.getHSL(Za);let n=qo(bs.h,Za.h,t),s=qo(bs.s,Za.s,t),r=qo(bs.l,Za.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Wn=new ut;ut.NAMES=Qp;var J1=0,Ds=class extends Is{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:J1++}),this.uuid=dr(),this.name="",this.type="Material",this.blending=Gr,this.side=Ki,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ph,this.blendDst=Ih,this.blendEquation=tr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ut(0,0,0),this.blendAlpha=0,this.depthFunc=Yr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Pf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=br,this.stencilZFail=br,this.stencilZPass=br,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Gr&&(n.blending=this.blending),this.side!==Ki&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ph&&(n.blendSrc=this.blendSrc),this.blendDst!==Ih&&(n.blendDst=this.blendDst),this.blendEquation!==tr&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Yr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Pf&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==br&&(n.stencilFail=this.stencilFail),this.stencilZFail!==br&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==br&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let c=r[a];delete c.metadata,o.push(c)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},gt=class extends Ds{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ut(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ii,this.combine=Op,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var mn=new w,$a=new Ne,ln=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=If,this.updateRanges=[],this.gpuType=$i,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)$a.fromBufferAttribute(this,t),$a.applyMatrix3(e),this.setXY(t,$a.x,$a.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)mn.fromBufferAttribute(this,t),mn.applyMatrix3(e),this.setXYZ(t,mn.x,mn.y,mn.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)mn.fromBufferAttribute(this,t),mn.applyMatrix4(e),this.setXYZ(t,mn.x,mn.y,mn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)mn.fromBufferAttribute(this,t),mn.applyNormalMatrix(e),this.setXYZ(t,mn.x,mn.y,mn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)mn.fromBufferAttribute(this,t),mn.transformDirection(e),this.setXYZ(t,mn.x,mn.y,mn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Br(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Zn(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Br(t,this.array)),t}setX(e,t){return this.normalized&&(t=Zn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Br(t,this.array)),t}setY(e,t){return this.normalized&&(t=Zn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Br(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Zn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Br(t,this.array)),t}setW(e,t){return this.normalized&&(t=Zn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Zn(t,this.array),n=Zn(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=Zn(t,this.array),n=Zn(n,this.array),s=Zn(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=Zn(t,this.array),n=Zn(n,this.array),s=Zn(s,this.array),r=Zn(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==If&&(e.usage=this.usage),e}};var Ac=class extends ln{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Cc=class extends ln{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var ct=class extends ln{constructor(e,t,n){super(new Float32Array(e),t,n)}},Q1=0,yi=new wt,mh=new Nt,Hr=new w,hi=new Dn,zo=new Dn,Ln=new w,Ct=class i extends Is{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Q1++}),this.uuid=dr(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Jp(e)?Cc:Ac)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new vt().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return yi.makeRotationFromQuaternion(e),this.applyMatrix4(yi),this}rotateX(e){return yi.makeRotationX(e),this.applyMatrix4(yi),this}rotateY(e){return yi.makeRotationY(e),this.applyMatrix4(yi),this}rotateZ(e){return yi.makeRotationZ(e),this.applyMatrix4(yi),this}translate(e,t,n){return yi.makeTranslation(e,t,n),this.applyMatrix4(yi),this}scale(e,t,n){return yi.makeScale(e,t,n),this.applyMatrix4(yi),this}lookAt(e){return mh.lookAt(e),mh.updateMatrix(),this.applyMatrix4(mh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Hr).negate(),this.translate(Hr.x,Hr.y,Hr.z),this}setFromPoints(e){let t=[];for(let n=0,s=e.length;n<s;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new ct(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Dn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new w(-1/0,-1/0,-1/0),new w(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];hi.setFromBufferAttribute(r),this.morphTargetsRelative?(Ln.addVectors(this.boundingBox.min,hi.min),this.boundingBox.expandByPoint(Ln),Ln.addVectors(this.boundingBox.max,hi.max),this.boundingBox.expandByPoint(Ln)):(this.boundingBox.expandByPoint(hi.min),this.boundingBox.expandByPoint(hi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ls);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new w,1/0);return}if(e){let n=this.boundingSphere.center;if(hi.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];zo.setFromBufferAttribute(a),this.morphTargetsRelative?(Ln.addVectors(hi.min,zo.min),hi.expandByPoint(Ln),Ln.addVectors(hi.max,zo.max),hi.expandByPoint(Ln)):(hi.expandByPoint(zo.min),hi.expandByPoint(zo.max))}hi.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)Ln.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Ln));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)Ln.fromBufferAttribute(a,l),c&&(Hr.fromBufferAttribute(e,l),Ln.add(Hr)),s=Math.max(s,n.distanceToSquared(Ln))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ln(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],c=[];for(let C=0;C<n.count;C++)a[C]=new w,c[C]=new w;let l=new w,h=new w,p=new w,f=new Ne,d=new Ne,g=new Ne,x=new w,m=new w;function u(C,Y,v){l.fromBufferAttribute(n,C),h.fromBufferAttribute(n,Y),p.fromBufferAttribute(n,v),f.fromBufferAttribute(r,C),d.fromBufferAttribute(r,Y),g.fromBufferAttribute(r,v),h.sub(l),p.sub(l),d.sub(f),g.sub(f);let b=1/(d.x*g.y-g.x*d.y);isFinite(b)&&(x.copy(h).multiplyScalar(g.y).addScaledVector(p,-d.y).multiplyScalar(b),m.copy(p).multiplyScalar(d.x).addScaledVector(h,-g.x).multiplyScalar(b),a[C].add(x),a[Y].add(x),a[v].add(x),c[C].add(m),c[Y].add(m),c[v].add(m))}let E=this.groups;E.length===0&&(E=[{start:0,count:e.count}]);for(let C=0,Y=E.length;C<Y;++C){let v=E[C],b=v.start,F=v.count;for(let B=b,G=b+F;B<G;B+=3)u(e.getX(B+0),e.getX(B+1),e.getX(B+2))}let y=new w,M=new w,I=new w,A=new w;function S(C){I.fromBufferAttribute(s,C),A.copy(I);let Y=a[C];y.copy(Y),y.sub(I.multiplyScalar(I.dot(Y))).normalize(),M.crossVectors(A,Y);let b=M.dot(c[C])<0?-1:1;o.setXYZW(C,y.x,y.y,y.z,b)}for(let C=0,Y=E.length;C<Y;++C){let v=E[C],b=v.start,F=v.count;for(let B=b,G=b+F;B<G;B+=3)S(e.getX(B+0)),S(e.getX(B+1)),S(e.getX(B+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new ln(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);let s=new w,r=new w,o=new w,a=new w,c=new w,l=new w,h=new w,p=new w;if(e)for(let f=0,d=e.count;f<d;f+=3){let g=e.getX(f+0),x=e.getX(f+1),m=e.getX(f+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,x),o.fromBufferAttribute(t,m),h.subVectors(o,r),p.subVectors(s,r),h.cross(p),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,x),l.fromBufferAttribute(n,m),a.add(h),c.add(h),l.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(x,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let f=0,d=t.count;f<d;f+=3)s.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),h.subVectors(o,r),p.subVectors(s,r),h.cross(p),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Ln.fromBufferAttribute(e,t),Ln.normalize(),e.setXYZ(t,Ln.x,Ln.y,Ln.z)}toNonIndexed(){function e(a,c){let l=a.array,h=a.itemSize,p=a.normalized,f=new l.constructor(c.length*h),d=0,g=0;for(let x=0,m=c.length;x<m;x++){a.isInterleavedBufferAttribute?d=c[x]*a.data.stride+a.offset:d=c[x]*h;for(let u=0;u<h;u++)f[g++]=l[d++]}return new ln(f,h,p)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let a in s){let c=s[a],l=e(c,n);t.setAttribute(a,l)}let r=this.morphAttributes;for(let a in r){let c=[],l=r[a];for(let h=0,p=l.length;h<p;h++){let f=l[h],d=e(f,n);c.push(d)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let c in n){let l=n[c];e.data.attributes[c]=l.toJSON(e.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let p=0,f=l.length;p<f;p++){let d=l[p];h.push(d.toJSON(e.data))}h.length>0&&(s[c]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let s=e.attributes;for(let l in s){let h=s[l];this.setAttribute(l,h.clone(t))}let r=e.morphAttributes;for(let l in r){let h=[],p=r[l];for(let f=0,d=p.length;f<d;f++)h.push(p[f].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let l=0,h=o.length;l<h;l++){let p=o[l];this.addGroup(p.start,p.count,p.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},qf=new wt,Ks=new jo,Ka=new Ls,Yf=new w,Ja=new w,Qa=new w,ja=new w,gh=new w,ec=new w,Zf=new w,tc=new w,lt=class extends Nt{constructor(e=new Ct,t=new gt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){ec.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=a[c],p=r[c];h!==0&&(gh.fromBufferAttribute(p,e),o?ec.addScaledVector(gh,h):ec.addScaledVector(gh.sub(t),h))}t.add(ec)}return t}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ka.copy(n.boundingSphere),Ka.applyMatrix4(r),Ks.copy(e.ray).recast(e.near),!(Ka.containsPoint(Ks.origin)===!1&&(Ks.intersectSphere(Ka,Yf)===null||Ks.origin.distanceToSquared(Yf)>(e.far-e.near)**2))&&(qf.copy(r).invert(),Ks.copy(e.ray).applyMatrix4(qf),!(n.boundingBox!==null&&Ks.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Ks)))}_computeIntersections(e,t,n){let s,r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,p=r.attributes.normal,f=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,x=f.length;g<x;g++){let m=f[g],u=o[m.materialIndex],E=Math.max(m.start,d.start),y=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let M=E,I=y;M<I;M+=3){let A=a.getX(M),S=a.getX(M+1),C=a.getX(M+2);s=nc(this,u,e,n,l,h,p,A,S,C),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,d.start),x=Math.min(a.count,d.start+d.count);for(let m=g,u=x;m<u;m+=3){let E=a.getX(m),y=a.getX(m+1),M=a.getX(m+2);s=nc(this,o,e,n,l,h,p,E,y,M),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,x=f.length;g<x;g++){let m=f[g],u=o[m.materialIndex],E=Math.max(m.start,d.start),y=Math.min(c.count,Math.min(m.start+m.count,d.start+d.count));for(let M=E,I=y;M<I;M+=3){let A=M,S=M+1,C=M+2;s=nc(this,u,e,n,l,h,p,A,S,C),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,d.start),x=Math.min(c.count,d.start+d.count);for(let m=g,u=x;m<u;m+=3){let E=m,y=m+1,M=m+2;s=nc(this,o,e,n,l,h,p,E,y,M),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};function j1(i,e,t,n,s,r,o,a){let c;if(e.side===gn?c=n.intersectTriangle(o,r,s,!0,a):c=n.intersectTriangle(s,r,o,e.side===Ki,a),c===null)return null;tc.copy(a),tc.applyMatrix4(i.matrixWorld);let l=t.ray.origin.distanceTo(tc);return l<t.near||l>t.far?null:{distance:l,point:tc.clone(),object:i}}function nc(i,e,t,n,s,r,o,a,c,l){i.getVertexPosition(a,Ja),i.getVertexPosition(c,Qa),i.getVertexPosition(l,ja);let h=j1(i,e,t,n,Ja,Qa,ja,Zf);if(h){let p=new w;nr.getBarycoord(Zf,Ja,Qa,ja,p),s&&(h.uv=nr.getInterpolatedAttribute(s,a,c,l,p,new Ne)),r&&(h.uv1=nr.getInterpolatedAttribute(r,a,c,l,p,new Ne)),o&&(h.normal=nr.getInterpolatedAttribute(o,a,c,l,p,new w),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let f={a,b:c,c:l,normal:new w,materialIndex:0};nr.getNormal(Ja,Qa,ja,f.normal),h.face=f,h.barycoord=p}return h}var bt=class i extends Ct{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let c=[],l=[],h=[],p=[],f=0,d=0;g("z","y","x",-1,-1,n,t,e,o,r,0),g("z","y","x",1,-1,n,t,-e,o,r,1),g("x","z","y",1,1,e,n,t,s,o,2),g("x","z","y",1,-1,e,n,-t,s,o,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new ct(l,3)),this.setAttribute("normal",new ct(h,3)),this.setAttribute("uv",new ct(p,2));function g(x,m,u,E,y,M,I,A,S,C,Y){let v=M/S,b=I/C,F=M/2,B=I/2,G=A/2,H=S+1,J=C+1,ye=0,ie=0,fe=new w;for(let N=0;N<J;N++){let ee=N*b-B;for(let oe=0;oe<H;oe++){let j=oe*v-F;fe[x]=j*E,fe[m]=ee*y,fe[u]=G,l.push(fe.x,fe.y,fe.z),fe[x]=0,fe[m]=0,fe[u]=A>0?1:-1,h.push(fe.x,fe.y,fe.z),p.push(oe/S),p.push(1-N/C),ye+=1}}for(let N=0;N<C;N++)for(let ee=0;ee<S;ee++){let oe=f+ee+H*N,j=f+ee+H*(N+1),O=f+(ee+1)+H*(N+1),ae=f+(ee+1)+H*N;c.push(oe,j,ae),c.push(j,O,ae),ie+=6}a.addGroup(d,ie,Y),d+=ie,f+=ye}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function jr(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function $n(i){let e={};for(let t=0;t<i.length;t++){let n=jr(i[t]);for(let s in n)e[s]=n[s]}return e}function ex(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function jp(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Gt.workingColorSpace}var tx={clone:jr,merge:$n},nx=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ix=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Ji=class extends Ds{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=nx,this.fragmentShader=ix,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=jr(e.uniforms),this.uniformsGroups=ex(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},Pc=class extends Nt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new wt,this.projectionMatrix=new wt,this.projectionMatrixInverse=new wt,this.coordinateSystem=hs}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Ts=new w,$f=new Ne,Kf=new Ne,Fn=class extends Pc{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Qr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Xo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Qr*2*Math.atan(Math.tan(Xo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Ts.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ts.x,Ts.y).multiplyScalar(-e/Ts.z),Ts.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ts.x,Ts.y).multiplyScalar(-e/Ts.z)}getViewSize(e,t){return this.getViewBounds(e,$f,Kf),t.subVectors(Kf,$f)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Xo*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,t-=o.offsetY*n/l,s*=o.width/c,n*=o.height/l}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Nr=-90,Fr=1,xu=class extends Nt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Fn(Nr,Fr,e,t);s.layers=this.layers,this.add(s);let r=new Fn(Nr,Fr,e,t);r.layers=this.layers,this.add(r);let o=new Fn(Nr,Fr,e,t);o.layers=this.layers,this.add(o);let a=new Fn(Nr,Fr,e,t);a.layers=this.layers,this.add(a);let c=new Fn(Nr,Fr,e,t);c.layers=this.layers,this.add(c);let l=new Fn(Nr,Fr,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,a,c]=t;for(let l of t)this.remove(l);if(e===hs)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===bc)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,c,l,h]=this.children,p=e.getRenderTarget(),f=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,o),e.setRenderTarget(n,2,s),e.render(t,a),e.setRenderTarget(n,3,s),e.render(t,c),e.setRenderTarget(n,4,s),e.render(t,l),n.texture.generateMipmaps=x,e.setRenderTarget(n,5,s),e.render(t,h),e.setRenderTarget(p,f,d),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},Ic=class extends Kn{constructor(e,t,n,s,r,o,a,c,l,h){e=e!==void 0?e:[],t=t!==void 0?t:Zr,super(e,t,n,s,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},yu=class extends ds{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Ic(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:pn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new bt(5,5,5),r=new Ji({name:"CubemapFromEquirect",uniforms:jr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:gn,blending:As});r.uniforms.tEquirect.value=t;let o=new lt(s,r),a=t.minFilter;return t.minFilter===Fi&&(t.minFilter=pn),new xu(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,s){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}},xh=new w,sx=new w,rx=new vt,vi=class{constructor(e=new w(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=xh.subVectors(n,t).cross(sx.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(xh),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||rx.getNormalMatrix(e),s=this.coplanarPoint(xh).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Js=new Ls,ic=new w,ta=class{constructor(e=new vi,t=new vi,n=new vi,s=new vi,r=new vi,o=new vi){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=hs){let n=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],c=s[3],l=s[4],h=s[5],p=s[6],f=s[7],d=s[8],g=s[9],x=s[10],m=s[11],u=s[12],E=s[13],y=s[14],M=s[15];if(n[0].setComponents(c-r,f-l,m-d,M-u).normalize(),n[1].setComponents(c+r,f+l,m+d,M+u).normalize(),n[2].setComponents(c+o,f+h,m+g,M+E).normalize(),n[3].setComponents(c-o,f-h,m-g,M-E).normalize(),n[4].setComponents(c-a,f-p,m-x,M-y).normalize(),t===hs)n[5].setComponents(c+a,f+p,m+x,M+y).normalize();else if(t===bc)n[5].setComponents(a,p,x,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Js.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Js.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Js)}intersectsSprite(e){return Js.center.set(0,0,0),Js.radius=.7071067811865476,Js.applyMatrix4(e.matrixWorld),this.intersectsSphere(Js)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(ic.x=s.normal.x>0?e.max.x:e.min.x,ic.y=s.normal.y>0?e.max.y:e.min.y,ic.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(ic)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function e0(){let i=null,e=!1,t=null,n=null;function s(r,o){t(r,o),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function ox(i){let e=new WeakMap;function t(a,c){let l=a.array,h=a.usage,p=l.byteLength,f=i.createBuffer();i.bindBuffer(c,f),i.bufferData(c,l,h),a.onUploadCallback();let d;if(l instanceof Float32Array)d=i.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)d=i.SHORT;else if(l instanceof Uint32Array)d=i.UNSIGNED_INT;else if(l instanceof Int32Array)d=i.INT;else if(l instanceof Int8Array)d=i.BYTE;else if(l instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:d,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:p}}function n(a,c,l){let h=c.array,p=c.updateRanges;if(i.bindBuffer(l,a),p.length===0)i.bufferSubData(l,0,h);else{p.sort((d,g)=>d.start-g.start);let f=0;for(let d=1;d<p.length;d++){let g=p[f],x=p[d];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++f,p[f]=x)}p.length=f+1;for(let d=0,g=p.length;d<g;d++){let x=p[d];i.bufferSubData(l,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let c=e.get(a);c&&(i.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}var Mt=class i extends Ct{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(n),c=Math.floor(s),l=a+1,h=c+1,p=e/a,f=t/c,d=[],g=[],x=[],m=[];for(let u=0;u<h;u++){let E=u*f-o;for(let y=0;y<l;y++){let M=y*p-r;g.push(M,-E,0),x.push(0,0,1),m.push(y/a),m.push(1-u/c)}}for(let u=0;u<c;u++)for(let E=0;E<a;E++){let y=E+l*u,M=E+l*(u+1),I=E+1+l*(u+1),A=E+1+l*u;d.push(y,M,A),d.push(M,I,A)}this.setIndex(d),this.setAttribute("position",new ct(g,3)),this.setAttribute("normal",new ct(x,3)),this.setAttribute("uv",new ct(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}},ax=`#ifdef USE_ALPHAHASH
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
}`,_t={alphahash_fragment:ax,alphahash_pars_fragment:cx,alphamap_fragment:lx,alphamap_pars_fragment:hx,alphatest_fragment:ux,alphatest_pars_fragment:dx,aomap_fragment:fx,aomap_pars_fragment:px,batching_pars_vertex:mx,batching_vertex:gx,begin_vertex:xx,beginnormal_vertex:yx,bsdfs:vx,iridescence_fragment:_x,bumpmap_pars_fragment:Mx,clipping_planes_fragment:Ex,clipping_planes_pars_fragment:Sx,clipping_planes_pars_vertex:wx,clipping_planes_vertex:bx,color_fragment:Tx,color_pars_fragment:Rx,color_pars_vertex:Ax,color_vertex:Cx,common:Px,cube_uv_reflection_fragment:Ix,defaultnormal_vertex:Lx,displacementmap_pars_vertex:Dx,displacementmap_vertex:Ux,emissivemap_fragment:Hx,emissivemap_pars_fragment:Nx,colorspace_fragment:Fx,colorspace_pars_fragment:Ox,envmap_fragment:zx,envmap_common_pars_fragment:Bx,envmap_pars_fragment:kx,envmap_pars_vertex:Vx,envmap_physical_pars_fragment:jx,envmap_vertex:Gx,fog_vertex:Wx,fog_pars_vertex:Xx,fog_fragment:qx,fog_pars_fragment:Yx,gradientmap_pars_fragment:Zx,lightmap_pars_fragment:$x,lights_lambert_fragment:Kx,lights_lambert_pars_fragment:Jx,lights_pars_begin:Qx,lights_toon_fragment:ey,lights_toon_pars_fragment:ty,lights_phong_fragment:ny,lights_phong_pars_fragment:iy,lights_physical_fragment:sy,lights_physical_pars_fragment:ry,lights_fragment_begin:oy,lights_fragment_maps:ay,lights_fragment_end:cy,logdepthbuf_fragment:ly,logdepthbuf_pars_fragment:hy,logdepthbuf_pars_vertex:uy,logdepthbuf_vertex:dy,map_fragment:fy,map_pars_fragment:py,map_particle_fragment:my,map_particle_pars_fragment:gy,metalnessmap_fragment:xy,metalnessmap_pars_fragment:yy,morphinstance_vertex:vy,morphcolor_vertex:_y,morphnormal_vertex:My,morphtarget_pars_vertex:Ey,morphtarget_vertex:Sy,normal_fragment_begin:wy,normal_fragment_maps:by,normal_pars_fragment:Ty,normal_pars_vertex:Ry,normal_vertex:Ay,normalmap_pars_fragment:Cy,clearcoat_normal_fragment_begin:Py,clearcoat_normal_fragment_maps:Iy,clearcoat_pars_fragment:Ly,iridescence_pars_fragment:Dy,opaque_fragment:Uy,packing:Hy,premultiplied_alpha_fragment:Ny,project_vertex:Fy,dithering_fragment:Oy,dithering_pars_fragment:zy,roughnessmap_fragment:By,roughnessmap_pars_fragment:ky,shadowmap_pars_fragment:Vy,shadowmap_pars_vertex:Gy,shadowmap_vertex:Wy,shadowmask_pars_fragment:Xy,skinbase_vertex:qy,skinning_pars_vertex:Yy,skinning_vertex:Zy,skinnormal_vertex:$y,specularmap_fragment:Ky,specularmap_pars_fragment:Jy,tonemapping_fragment:Qy,tonemapping_pars_fragment:jy,transmission_fragment:ev,transmission_pars_fragment:tv,uv_pars_fragment:nv,uv_pars_vertex:iv,uv_vertex:sv,worldpos_vertex:rv,background_vert:ov,background_frag:av,backgroundCube_vert:cv,backgroundCube_frag:lv,cube_vert:hv,cube_frag:uv,depth_vert:dv,depth_frag:fv,distanceRGBA_vert:pv,distanceRGBA_frag:mv,equirect_vert:gv,equirect_frag:xv,linedashed_vert:yv,linedashed_frag:vv,meshbasic_vert:_v,meshbasic_frag:Mv,meshlambert_vert:Ev,meshlambert_frag:Sv,meshmatcap_vert:wv,meshmatcap_frag:bv,meshnormal_vert:Tv,meshnormal_frag:Rv,meshphong_vert:Av,meshphong_frag:Cv,meshphysical_vert:Pv,meshphysical_frag:Iv,meshtoon_vert:Lv,meshtoon_frag:Dv,points_vert:Uv,points_frag:Hv,shadow_vert:Nv,shadow_frag:Fv,sprite_vert:Ov,sprite_frag:zv},$e={common:{diffuse:{value:new ut(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new vt},alphaMap:{value:null},alphaMapTransform:{value:new vt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new vt}},envmap:{envMap:{value:null},envMapRotation:{value:new vt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new vt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new vt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new vt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new vt},normalScale:{value:new Ne(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new vt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new vt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new vt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new vt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ut(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ut(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new vt},alphaTest:{value:0},uvTransform:{value:new vt}},sprite:{diffuse:{value:new ut(16777215)},opacity:{value:1},center:{value:new Ne(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new vt},alphaMap:{value:null},alphaMapTransform:{value:new vt},alphaTest:{value:0}}},Zi={basic:{uniforms:$n([$e.common,$e.specularmap,$e.envmap,$e.aomap,$e.lightmap,$e.fog]),vertexShader:_t.meshbasic_vert,fragmentShader:_t.meshbasic_frag},lambert:{uniforms:$n([$e.common,$e.specularmap,$e.envmap,$e.aomap,$e.lightmap,$e.emissivemap,$e.bumpmap,$e.normalmap,$e.displacementmap,$e.fog,$e.lights,{emissive:{value:new ut(0)}}]),vertexShader:_t.meshlambert_vert,fragmentShader:_t.meshlambert_frag},phong:{uniforms:$n([$e.common,$e.specularmap,$e.envmap,$e.aomap,$e.lightmap,$e.emissivemap,$e.bumpmap,$e.normalmap,$e.displacementmap,$e.fog,$e.lights,{emissive:{value:new ut(0)},specular:{value:new ut(1118481)},shininess:{value:30}}]),vertexShader:_t.meshphong_vert,fragmentShader:_t.meshphong_frag},standard:{uniforms:$n([$e.common,$e.envmap,$e.aomap,$e.lightmap,$e.emissivemap,$e.bumpmap,$e.normalmap,$e.displacementmap,$e.roughnessmap,$e.metalnessmap,$e.fog,$e.lights,{emissive:{value:new ut(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:_t.meshphysical_vert,fragmentShader:_t.meshphysical_frag},toon:{uniforms:$n([$e.common,$e.aomap,$e.lightmap,$e.emissivemap,$e.bumpmap,$e.normalmap,$e.displacementmap,$e.gradientmap,$e.fog,$e.lights,{emissive:{value:new ut(0)}}]),vertexShader:_t.meshtoon_vert,fragmentShader:_t.meshtoon_frag},matcap:{uniforms:$n([$e.common,$e.bumpmap,$e.normalmap,$e.displacementmap,$e.fog,{matcap:{value:null}}]),vertexShader:_t.meshmatcap_vert,fragmentShader:_t.meshmatcap_frag},points:{uniforms:$n([$e.points,$e.fog]),vertexShader:_t.points_vert,fragmentShader:_t.points_frag},dashed:{uniforms:$n([$e.common,$e.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:_t.linedashed_vert,fragmentShader:_t.linedashed_frag},depth:{uniforms:$n([$e.common,$e.displacementmap]),vertexShader:_t.depth_vert,fragmentShader:_t.depth_frag},normal:{uniforms:$n([$e.common,$e.bumpmap,$e.normalmap,$e.displacementmap,{opacity:{value:1}}]),vertexShader:_t.meshnormal_vert,fragmentShader:_t.meshnormal_frag},sprite:{uniforms:$n([$e.sprite,$e.fog]),vertexShader:_t.sprite_vert,fragmentShader:_t.sprite_frag},background:{uniforms:{uvTransform:{value:new vt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:_t.background_vert,fragmentShader:_t.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new vt}},vertexShader:_t.backgroundCube_vert,fragmentShader:_t.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:_t.cube_vert,fragmentShader:_t.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:_t.equirect_vert,fragmentShader:_t.equirect_frag},distanceRGBA:{uniforms:$n([$e.common,$e.displacementmap,{referencePosition:{value:new w},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:_t.distanceRGBA_vert,fragmentShader:_t.distanceRGBA_frag},shadow:{uniforms:$n([$e.lights,$e.fog,{color:{value:new ut(0)},opacity:{value:1}}]),vertexShader:_t.shadow_vert,fragmentShader:_t.shadow_frag}};Zi.physical={uniforms:$n([Zi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new vt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new vt},clearcoatNormalScale:{value:new Ne(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new vt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new vt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new vt},sheen:{value:0},sheenColor:{value:new ut(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new vt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new vt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new vt},transmissionSamplerSize:{value:new Ne},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new vt},attenuationDistance:{value:0},attenuationColor:{value:new ut(0)},specularColor:{value:new ut(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new vt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new vt},anisotropyVector:{value:new Ne},anisotropyMap:{value:null},anisotropyMapTransform:{value:new vt}}]),vertexShader:_t.meshphysical_vert,fragmentShader:_t.meshphysical_frag};var sc={r:0,b:0,g:0},Qs=new ii,Bv=new wt;function kv(i,e,t,n,s,r,o){let a=new ut(0),c=r===!0?0:1,l,h,p=null,f=0,d=null;function g(E){let y=E.isScene===!0?E.background:null;return y&&y.isTexture&&(y=(E.backgroundBlurriness>0?t:e).get(y)),y}function x(E){let y=!1,M=g(E);M===null?u(a,c):M&&M.isColor&&(u(M,1),y=!0);let I=i.xr.getEnvironmentBlendMode();I==="additive"?n.buffers.color.setClear(0,0,0,1,o):I==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||y)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(E,y){let M=g(y);M&&(M.isCubeTexture||M.mapping===Kc)?(h===void 0&&(h=new lt(new bt(1,1,1),new Ji({name:"BackgroundCubeMaterial",uniforms:jr(Zi.backgroundCube.uniforms),vertexShader:Zi.backgroundCube.vertexShader,fragmentShader:Zi.backgroundCube.fragmentShader,side:gn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(I,A,S){this.matrixWorld.copyPosition(S.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Qs.copy(y.backgroundRotation),Qs.x*=-1,Qs.y*=-1,Qs.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(Qs.y*=-1,Qs.z*=-1),h.material.uniforms.envMap.value=M,h.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Bv.makeRotationFromEuler(Qs)),h.material.toneMapped=Gt.getTransfer(M.colorSpace)!==sn,(p!==M||f!==M.version||d!==i.toneMapping)&&(h.material.needsUpdate=!0,p=M,f=M.version,d=i.toneMapping),h.layers.enableAll(),E.unshift(h,h.geometry,h.material,0,0,null)):M&&M.isTexture&&(l===void 0&&(l=new lt(new Mt(2,2),new Ji({name:"BackgroundMaterial",uniforms:jr(Zi.background.uniforms),vertexShader:Zi.background.vertexShader,fragmentShader:Zi.background.fragmentShader,side:Ki,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=M,l.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,l.material.toneMapped=Gt.getTransfer(M.colorSpace)!==sn,M.matrixAutoUpdate===!0&&M.updateMatrix(),l.material.uniforms.uvTransform.value.copy(M.matrix),(p!==M||f!==M.version||d!==i.toneMapping)&&(l.material.needsUpdate=!0,p=M,f=M.version,d=i.toneMapping),l.layers.enableAll(),E.unshift(l,l.geometry,l.material,0,0,null))}function u(E,y){E.getRGB(sc,jp(i)),n.buffers.color.setClear(sc.r,sc.g,sc.b,y,o)}return{getClearColor:function(){return a},setClearColor:function(E,y=1){a.set(E),c=y,u(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(E){c=E,u(a,c)},render:x,addToRenderList:m}}function Vv(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null),r=s,o=!1;function a(v,b,F,B,G){let H=!1,J=p(B,F,b);r!==J&&(r=J,l(r.object)),H=d(v,B,F,G),H&&g(v,B,F,G),G!==null&&e.update(G,i.ELEMENT_ARRAY_BUFFER),(H||o)&&(o=!1,M(v,b,F,B),G!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(G).buffer))}function c(){return i.createVertexArray()}function l(v){return i.bindVertexArray(v)}function h(v){return i.deleteVertexArray(v)}function p(v,b,F){let B=F.wireframe===!0,G=n[v.id];G===void 0&&(G={},n[v.id]=G);let H=G[b.id];H===void 0&&(H={},G[b.id]=H);let J=H[B];return J===void 0&&(J=f(c()),H[B]=J),J}function f(v){let b=[],F=[],B=[];for(let G=0;G<t;G++)b[G]=0,F[G]=0,B[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:b,enabledAttributes:F,attributeDivisors:B,object:v,attributes:{},index:null}}function d(v,b,F,B){let G=r.attributes,H=b.attributes,J=0,ye=F.getAttributes();for(let ie in ye)if(ye[ie].location>=0){let N=G[ie],ee=H[ie];if(ee===void 0&&(ie==="instanceMatrix"&&v.instanceMatrix&&(ee=v.instanceMatrix),ie==="instanceColor"&&v.instanceColor&&(ee=v.instanceColor)),N===void 0||N.attribute!==ee||ee&&N.data!==ee.data)return!0;J++}return r.attributesNum!==J||r.index!==B}function g(v,b,F,B){let G={},H=b.attributes,J=0,ye=F.getAttributes();for(let ie in ye)if(ye[ie].location>=0){let N=H[ie];N===void 0&&(ie==="instanceMatrix"&&v.instanceMatrix&&(N=v.instanceMatrix),ie==="instanceColor"&&v.instanceColor&&(N=v.instanceColor));let ee={};ee.attribute=N,N&&N.data&&(ee.data=N.data),G[ie]=ee,J++}r.attributes=G,r.attributesNum=J,r.index=B}function x(){let v=r.newAttributes;for(let b=0,F=v.length;b<F;b++)v[b]=0}function m(v){u(v,0)}function u(v,b){let F=r.newAttributes,B=r.enabledAttributes,G=r.attributeDivisors;F[v]=1,B[v]===0&&(i.enableVertexAttribArray(v),B[v]=1),G[v]!==b&&(i.vertexAttribDivisor(v,b),G[v]=b)}function E(){let v=r.newAttributes,b=r.enabledAttributes;for(let F=0,B=b.length;F<B;F++)b[F]!==v[F]&&(i.disableVertexAttribArray(F),b[F]=0)}function y(v,b,F,B,G,H,J){J===!0?i.vertexAttribIPointer(v,b,F,G,H):i.vertexAttribPointer(v,b,F,B,G,H)}function M(v,b,F,B){x();let G=B.attributes,H=F.getAttributes(),J=b.defaultAttributeValues;for(let ye in H){let ie=H[ye];if(ie.location>=0){let fe=G[ye];if(fe===void 0&&(ye==="instanceMatrix"&&v.instanceMatrix&&(fe=v.instanceMatrix),ye==="instanceColor"&&v.instanceColor&&(fe=v.instanceColor)),fe!==void 0){let N=fe.normalized,ee=fe.itemSize,oe=e.get(fe);if(oe===void 0)continue;let j=oe.buffer,O=oe.type,ae=oe.bytesPerElement,V=O===i.INT||O===i.UNSIGNED_INT||fe.gpuType===Qu;if(fe.isInterleavedBufferAttribute){let W=fe.data,Z=W.stride,ge=fe.offset;if(W.isInstancedInterleavedBuffer){for(let Ae=0;Ae<ie.locationSize;Ae++)u(ie.location+Ae,W.meshPerAttribute);v.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=W.meshPerAttribute*W.count)}else for(let Ae=0;Ae<ie.locationSize;Ae++)m(ie.location+Ae);i.bindBuffer(i.ARRAY_BUFFER,j);for(let Ae=0;Ae<ie.locationSize;Ae++)y(ie.location+Ae,ee/ie.locationSize,O,N,Z*ae,(ge+ee/ie.locationSize*Ae)*ae,V)}else{if(fe.isInstancedBufferAttribute){for(let W=0;W<ie.locationSize;W++)u(ie.location+W,fe.meshPerAttribute);v.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=fe.meshPerAttribute*fe.count)}else for(let W=0;W<ie.locationSize;W++)m(ie.location+W);i.bindBuffer(i.ARRAY_BUFFER,j);for(let W=0;W<ie.locationSize;W++)y(ie.location+W,ee/ie.locationSize,O,N,ee*ae,ee/ie.locationSize*W*ae,V)}}else if(J!==void 0){let N=J[ye];if(N!==void 0)switch(N.length){case 2:i.vertexAttrib2fv(ie.location,N);break;case 3:i.vertexAttrib3fv(ie.location,N);break;case 4:i.vertexAttrib4fv(ie.location,N);break;default:i.vertexAttrib1fv(ie.location,N)}}}}E()}function I(){C();for(let v in n){let b=n[v];for(let F in b){let B=b[F];for(let G in B)h(B[G].object),delete B[G];delete b[F]}delete n[v]}}function A(v){if(n[v.id]===void 0)return;let b=n[v.id];for(let F in b){let B=b[F];for(let G in B)h(B[G].object),delete B[G];delete b[F]}delete n[v.id]}function S(v){for(let b in n){let F=n[b];if(F[v.id]===void 0)continue;let B=F[v.id];for(let G in B)h(B[G].object),delete B[G];delete F[v.id]}}function C(){Y(),o=!0,r!==s&&(r=s,l(r.object))}function Y(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:C,resetDefaultState:Y,dispose:I,releaseStatesOfGeometry:A,releaseStatesOfProgram:S,initAttributes:x,enableAttribute:m,disableUnusedAttributes:E}}function Gv(i,e,t){let n;function s(l){n=l}function r(l,h){i.drawArrays(n,l,h),t.update(h,n,1)}function o(l,h,p){p!==0&&(i.drawArraysInstanced(n,l,h,p),t.update(h,n,p))}function a(l,h,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,p);let d=0;for(let g=0;g<p;g++)d+=h[g];t.update(d,n,1)}function c(l,h,p,f){if(p===0)return;let d=e.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<l.length;g++)o(l[g],h[g],f[g]);else{d.multiDrawArraysInstancedWEBGL(n,l,0,h,0,f,0,p);let g=0;for(let x=0;x<p;x++)g+=h[x];for(let x=0;x<f.length;x++)t.update(g,n,f[x])}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function Wv(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let S=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(S.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(S){return!(S!==ui&&n.convert(S)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(S){let C=S===ua&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(S!==us&&n.convert(S)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&S!==$i&&!C)}function c(S){if(S==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";S="mediump"}return S==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp",h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let p=t.logarithmicDepthBuffer===!0,f=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control");if(f===!0){let S=e.get("EXT_clip_control");S.clipControlEXT(S.LOWER_LEFT_EXT,S.ZERO_TO_ONE_EXT)}let d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),u=i.getParameter(i.MAX_VERTEX_ATTRIBS),E=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),y=i.getParameter(i.MAX_VARYING_VECTORS),M=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),I=g>0,A=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:p,reverseDepthBuffer:f,maxTextures:d,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:m,maxAttributes:u,maxVertexUniforms:E,maxVaryings:y,maxFragmentUniforms:M,vertexTextures:I,maxSamples:A}}function Xv(i){let e=this,t=null,n=0,s=!1,r=!1,o=new vi,a=new vt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(p,f){let d=p.length!==0||f||n!==0||s;return s=f,n=p.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(p,f){t=h(p,f,0)},this.setState=function(p,f,d){let g=p.clippingPlanes,x=p.clipIntersection,m=p.clipShadows,u=i.get(p);if(!s||g===null||g.length===0||r&&!m)r?h(null):l();else{let E=r?0:n,y=E*4,M=u.clippingState||null;c.value=M,M=h(g,f,y,d);for(let I=0;I!==y;++I)M[I]=t[I];u.clippingState=M,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=E}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(p,f,d,g){let x=p!==null?p.length:0,m=null;if(x!==0){if(m=c.value,g!==!0||m===null){let u=d+x*4,E=f.matrixWorldInverse;a.getNormalMatrix(E),(m===null||m.length<u)&&(m=new Float32Array(u));for(let y=0,M=d;y!==x;++y,M+=4)o.copy(p[y]).applyMatrix4(E,a),o.normal.toArray(m,M),m[M+3]=o.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}function qv(i){let e=new WeakMap;function t(o,a){return a===Ko?o.mapping=Zr:a===zh&&(o.mapping=$r),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===Ko||a===zh)if(e.has(o)){let c=e.get(o).texture;return t(c,o.mapping)}else{let c=o.image;if(c&&c.height>0){let l=new yu(c.height);return l.fromEquirectangularTexture(i,o),e.set(o,l),o.addEventListener("dispose",s),t(l.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}var Lc=class extends Pc{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,o=n+e,a=s+t,c=s-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},kr=4,Jf=[.125,.215,.35,.446,.526,.582],ir=20,yh=new Lc,Qf=new ut,vh=null,_h=0,Mh=0,Eh=!1,er=(1+Math.sqrt(5))/2,Or=1/er,jf=[new w(-er,Or,0),new w(er,Or,0),new w(-Or,0,er),new w(Or,0,er),new w(0,er,-Or),new w(0,er,Or),new w(-1,1,-1),new w(1,1,-1),new w(-1,1,1),new w(1,1,1)],eo=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){vh=this._renderer.getRenderTarget(),_h=this._renderer.getActiveCubeFace(),Mh=this._renderer.getActiveMipmapLevel(),Eh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=np(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=tp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(vh,_h,Mh),this._renderer.xr.enabled=Eh,e.scissorTest=!1,rc(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Zr||e.mapping===$r?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),vh=this._renderer.getRenderTarget(),_h=this._renderer.getActiveCubeFace(),Mh=this._renderer.getActiveMipmapLevel(),Eh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:pn,minFilter:pn,generateMipmaps:!1,type:ua,format:ui,colorSpace:Fs,depthBuffer:!1},s=ep(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ep(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Yv(r)),this._blurMaterial=Zv(r,e,t)}return s}_compileMaterial(e){let t=new lt(this._lodPlanes[0],e);this._renderer.compile(t,yh)}_sceneToCubeUV(e,t,n,s){let a=new Fn(90,1,t,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,p=h.autoClear,f=h.toneMapping;h.getClearColor(Qf),h.toneMapping=Cs,h.autoClear=!1;let d=new gt({name:"PMREM.Background",side:gn,depthWrite:!1,depthTest:!1}),g=new lt(new bt,d),x=!1,m=e.background;m?m.isColor&&(d.color.copy(m),e.background=null,x=!0):(d.color.copy(Qf),x=!0);for(let u=0;u<6;u++){let E=u%3;E===0?(a.up.set(0,c[u],0),a.lookAt(l[u],0,0)):E===1?(a.up.set(0,0,c[u]),a.lookAt(0,l[u],0)):(a.up.set(0,c[u],0),a.lookAt(0,0,l[u]));let y=this._cubeSize;rc(s,E*y,u>2?y:0,y,y),h.setRenderTarget(s),x&&h.render(g,a),h.render(e,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=f,h.autoClear=p,e.background=m}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===Zr||e.mapping===$r;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=np()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=tp());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new lt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;let c=this._cubeSize;rc(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(o,yh)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=jf[(s-r-1)%jf.length];this._blur(e,r-1,r,o,a)}t.autoClear=n}_blur(e,t,n,s,r){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,s,"latitudinal",r),this._halfBlur(o,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,o,a){let c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,p=new lt(this._lodPlanes[s],l),f=l.uniforms,d=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*ir-1),x=r/g,m=isFinite(r)?1+Math.floor(h*x):ir;m>ir&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ir}`);let u=[],E=0;for(let S=0;S<ir;++S){let C=S/x,Y=Math.exp(-C*C/2);u.push(Y),S===0?E+=Y:S<m&&(E+=2*Y)}for(let S=0;S<u.length;S++)u[S]=u[S]/E;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=u,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);let{_lodMax:y}=this;f.dTheta.value=g,f.mipInt.value=y-n;let M=this._sizeLods[s],I=3*M*(s>y-kr?s-y+kr:0),A=4*(this._cubeSize-M);rc(t,I,A,3*M,2*M),c.setRenderTarget(t),c.render(p,yh)}};function Yv(i){let e=[],t=[],n=[],s=i,r=i-kr+1+Jf.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);t.push(a);let c=1/a;o>i-kr?c=Jf[o-i+kr-1]:o===0&&(c=0),n.push(c);let l=1/(a-2),h=-l,p=1+l,f=[h,h,p,h,p,p,h,h,p,p,h,p],d=6,g=6,x=3,m=2,u=1,E=new Float32Array(x*g*d),y=new Float32Array(m*g*d),M=new Float32Array(u*g*d);for(let A=0;A<d;A++){let S=A%3*2/3-1,C=A>2?0:-1,Y=[S,C,0,S+2/3,C,0,S+2/3,C+1,0,S,C,0,S+2/3,C+1,0,S,C+1,0];E.set(Y,x*g*A),y.set(f,m*g*A);let v=[A,A,A,A,A,A];M.set(v,u*g*A)}let I=new Ct;I.setAttribute("position",new ln(E,x)),I.setAttribute("uv",new ln(y,m)),I.setAttribute("faceIndex",new ln(M,u)),e.push(I),s>kr&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function ep(i,e,t){let n=new ds(i,e,t);return n.texture.mapping=Kc,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function rc(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function Zv(i,e,t){let n=new Float32Array(ir),s=new w(0,1,0);return new Ji({name:"SphericalGaussianBlur",defines:{n:ir,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:cd(),fragmentShader:`

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
		`,blending:As,depthTest:!1,depthWrite:!1})}function tp(){return new Ji({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:cd(),fragmentShader:`

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
		`,blending:As,depthTest:!1,depthWrite:!1})}function np(){return new Ji({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:cd(),fragmentShader:`

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
	`}function $v(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){let c=a.mapping,l=c===Ko||c===zh,h=c===Zr||c===$r;if(l||h){let p=e.get(a),f=p!==void 0?p.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return t===null&&(t=new eo(i)),p=l?t.fromEquirectangular(a,p):t.fromCubemap(a,p),p.texture.pmremVersion=a.pmremVersion,e.set(a,p),p.texture;if(p!==void 0)return p.texture;{let d=a.image;return l&&d&&d.height>0||h&&d&&s(d)?(t===null&&(t=new eo(i)),p=l?t.fromEquirectangular(a):t.fromCubemap(a),p.texture.pmremVersion=a.pmremVersion,e.set(a,p),a.addEventListener("dispose",r),p.texture):null}}}return a}function s(a){let c=0,l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function r(a){let c=a.target;c.removeEventListener("dispose",r);let l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function Kv(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&vc("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Jv(i,e,t,n){let s={},r=new WeakMap;function o(p){let f=p.target;f.index!==null&&e.remove(f.index);for(let g in f.attributes)e.remove(f.attributes[g]);for(let g in f.morphAttributes){let x=f.morphAttributes[g];for(let m=0,u=x.length;m<u;m++)e.remove(x[m])}f.removeEventListener("dispose",o),delete s[f.id];let d=r.get(f);d&&(e.remove(d),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(p,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,t.memory.geometries++),f}function c(p){let f=p.attributes;for(let g in f)e.update(f[g],i.ARRAY_BUFFER);let d=p.morphAttributes;for(let g in d){let x=d[g];for(let m=0,u=x.length;m<u;m++)e.update(x[m],i.ARRAY_BUFFER)}}function l(p){let f=[],d=p.index,g=p.attributes.position,x=0;if(d!==null){let E=d.array;x=d.version;for(let y=0,M=E.length;y<M;y+=3){let I=E[y+0],A=E[y+1],S=E[y+2];f.push(I,A,A,S,S,I)}}else if(g!==void 0){let E=g.array;x=g.version;for(let y=0,M=E.length/3-1;y<M;y+=3){let I=y+0,A=y+1,S=y+2;f.push(I,A,A,S,S,I)}}else return;let m=new(Jp(f)?Cc:Ac)(f,1);m.version=x;let u=r.get(p);u&&e.remove(u),r.set(p,m)}function h(p){let f=r.get(p);if(f){let d=p.index;d!==null&&f.version<d.version&&l(p)}else l(p);return r.get(p)}return{get:a,update:c,getWireframeAttribute:h}}function Qv(i,e,t){let n;function s(f){n=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function c(f,d){i.drawElements(n,d,r,f*o),t.update(d,n,1)}function l(f,d,g){g!==0&&(i.drawElementsInstanced(n,d,r,f*o,g),t.update(d,n,g))}function h(f,d,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,f,0,g);let m=0;for(let u=0;u<g;u++)m+=d[u];t.update(m,n,1)}function p(f,d,g,x){if(g===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let u=0;u<f.length;u++)l(f[u]/o,d[u],x[u]);else{m.multiDrawElementsInstancedWEBGL(n,d,0,r,f,0,x,0,g);let u=0;for(let E=0;E<g;E++)u+=d[E];for(let E=0;E<x.length;E++)t.update(u,n,x[E])}}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=p}function jv(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(r/3);break;case i.LINES:t.lines+=a*(r/2);break;case i.LINE_STRIP:t.lines+=a*(r-1);break;case i.LINE_LOOP:t.lines+=a*r;break;case i.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function e_(i,e,t){let n=new WeakMap,s=new Yt;function r(o,a,c){let l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,p=h!==void 0?h.length:0,f=n.get(a);if(f===void 0||f.count!==p){let Y=function(){S.dispose(),n.delete(a),a.removeEventListener("dispose",Y)};f!==void 0&&f.texture.dispose();let d=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],u=a.morphAttributes.normal||[],E=a.morphAttributes.color||[],y=0;d===!0&&(y=1),g===!0&&(y=2),x===!0&&(y=3);let M=a.attributes.position.count*y,I=1;M>e.maxTextureSize&&(I=Math.ceil(M/e.maxTextureSize),M=e.maxTextureSize);let A=new Float32Array(M*I*4*p),S=new Rc(A,M,I,p);S.type=$i,S.needsUpdate=!0;let C=y*4;for(let v=0;v<p;v++){let b=m[v],F=u[v],B=E[v],G=M*I*4*v;for(let H=0;H<b.count;H++){let J=H*C;d===!0&&(s.fromBufferAttribute(b,H),A[G+J+0]=s.x,A[G+J+1]=s.y,A[G+J+2]=s.z,A[G+J+3]=0),g===!0&&(s.fromBufferAttribute(F,H),A[G+J+4]=s.x,A[G+J+5]=s.y,A[G+J+6]=s.z,A[G+J+7]=0),x===!0&&(s.fromBufferAttribute(B,H),A[G+J+8]=s.x,A[G+J+9]=s.y,A[G+J+10]=s.z,A[G+J+11]=B.itemSize===4?s.w:1)}}f={count:p,texture:S,size:new Ne(M,I)},n.set(a,f),a.addEventListener("dispose",Y)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let d=0;for(let x=0;x<l.length;x++)d+=l[x];let g=a.morphTargetsRelative?1:1-d;c.getUniforms().setValue(i,"morphTargetBaseInfluence",g),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",f.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function t_(i,e,t,n){let s=new WeakMap;function r(c){let l=n.render.frame,h=c.geometry,p=e.get(c,h);if(s.get(p)!==l&&(e.update(p),s.set(p,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){let f=c.skeleton;s.get(f)!==l&&(f.update(),s.set(f,l))}return p}function o(){s=new WeakMap}function a(c){let l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:o}}var Dc=class extends Kn{constructor(e,t,n,s,r,o,a,c,l,h=Wr){if(h!==Wr&&h!==Jr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Wr&&(n=or),n===void 0&&h===Jr&&(n=Kr),super(null,s,r,o,a,c,h,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:ni,this.minFilter=c!==void 0?c:ni,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},t0=new Kn,ip=new Dc(1,1),n0=new Rc,i0=new gu,s0=new Ic,sp=[],rp=[],op=new Float32Array(16),ap=new Float32Array(9),cp=new Float32Array(4);function oo(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=sp[s];if(r===void 0&&(r=new Float32Array(s),sp[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function wn(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function bn(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Qc(i,e){let t=rp[e];t===void 0&&(t=new Int32Array(e),rp[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function n_(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function i_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(wn(t,e))return;i.uniform2fv(this.addr,e),bn(t,e)}}function s_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(wn(t,e))return;i.uniform3fv(this.addr,e),bn(t,e)}}function r_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(wn(t,e))return;i.uniform4fv(this.addr,e),bn(t,e)}}function o_(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(wn(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),bn(t,e)}else{if(wn(t,n))return;cp.set(n),i.uniformMatrix2fv(this.addr,!1,cp),bn(t,n)}}function a_(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(wn(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),bn(t,e)}else{if(wn(t,n))return;ap.set(n),i.uniformMatrix3fv(this.addr,!1,ap),bn(t,n)}}function c_(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(wn(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),bn(t,e)}else{if(wn(t,n))return;op.set(n),i.uniformMatrix4fv(this.addr,!1,op),bn(t,n)}}function l_(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function h_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(wn(t,e))return;i.uniform2iv(this.addr,e),bn(t,e)}}function u_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(wn(t,e))return;i.uniform3iv(this.addr,e),bn(t,e)}}function d_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(wn(t,e))return;i.uniform4iv(this.addr,e),bn(t,e)}}function f_(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function p_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(wn(t,e))return;i.uniform2uiv(this.addr,e),bn(t,e)}}function m_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(wn(t,e))return;i.uniform3uiv(this.addr,e),bn(t,e)}}function g_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(wn(t,e))return;i.uniform4uiv(this.addr,e),bn(t,e)}}function x_(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(ip.compareFunction=Kp,r=ip):r=t0,t.setTexture2D(e||r,s)}function y_(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||i0,s)}function v_(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||s0,s)}function __(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||n0,s)}function M_(i){switch(i){case 5126:return n_;case 35664:return i_;case 35665:return s_;case 35666:return r_;case 35674:return o_;case 35675:return a_;case 35676:return c_;case 5124:case 35670:return l_;case 35667:case 35671:return h_;case 35668:case 35672:return u_;case 35669:case 35673:return d_;case 5125:return f_;case 36294:return p_;case 36295:return m_;case 36296:return g_;case 35678:case 36198:case 36298:case 36306:case 35682:return x_;case 35679:case 36299:case 36307:return y_;case 35680:case 36300:case 36308:case 36293:return v_;case 36289:case 36303:case 36311:case 36292:return __}}function E_(i,e){i.uniform1fv(this.addr,e)}function S_(i,e){let t=oo(e,this.size,2);i.uniform2fv(this.addr,t)}function w_(i,e){let t=oo(e,this.size,3);i.uniform3fv(this.addr,t)}function b_(i,e){let t=oo(e,this.size,4);i.uniform4fv(this.addr,t)}function T_(i,e){let t=oo(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function R_(i,e){let t=oo(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function A_(i,e){let t=oo(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function C_(i,e){i.uniform1iv(this.addr,e)}function P_(i,e){i.uniform2iv(this.addr,e)}function I_(i,e){i.uniform3iv(this.addr,e)}function L_(i,e){i.uniform4iv(this.addr,e)}function D_(i,e){i.uniform1uiv(this.addr,e)}function U_(i,e){i.uniform2uiv(this.addr,e)}function H_(i,e){i.uniform3uiv(this.addr,e)}function N_(i,e){i.uniform4uiv(this.addr,e)}function F_(i,e,t){let n=this.cache,s=e.length,r=Qc(t,s);wn(n,r)||(i.uniform1iv(this.addr,r),bn(n,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||t0,r[o])}function O_(i,e,t){let n=this.cache,s=e.length,r=Qc(t,s);wn(n,r)||(i.uniform1iv(this.addr,r),bn(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||i0,r[o])}function z_(i,e,t){let n=this.cache,s=e.length,r=Qc(t,s);wn(n,r)||(i.uniform1iv(this.addr,r),bn(n,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||s0,r[o])}function B_(i,e,t){let n=this.cache,s=e.length,r=Qc(t,s);wn(n,r)||(i.uniform1iv(this.addr,r),bn(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||n0,r[o])}function k_(i){switch(i){case 5126:return E_;case 35664:return S_;case 35665:return w_;case 35666:return b_;case 35674:return T_;case 35675:return R_;case 35676:return A_;case 5124:case 35670:return C_;case 35667:case 35671:return P_;case 35668:case 35672:return I_;case 35669:case 35673:return L_;case 5125:return D_;case 36294:return U_;case 36295:return H_;case 36296:return N_;case 35678:case 36198:case 36298:case 36306:case 35682:return F_;case 35679:case 36299:case 36307:return O_;case 35680:case 36300:case 36308:case 36293:return z_;case 36289:case 36303:case 36311:case 36292:return B_}}var vu=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=M_(t.type)}},_u=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=k_(t.type)}},Mu=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],n)}}},Sh=/(\w+)(\])?(\[|\.)?/g;function lp(i,e){i.seq.push(e),i.map[e.id]=e}function V_(i,e,t){let n=i.name,s=n.length;for(Sh.lastIndex=0;;){let r=Sh.exec(n),o=Sh.lastIndex,a=r[1],c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){lp(t,l===void 0?new vu(a,i,e):new _u(a,i,e));break}else{let p=t.map[a];p===void 0&&(p=new Mu(a),lp(t,p)),t=p}}}var qr=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);V_(r,o,this)}}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&n.push(o)}return n}};function hp(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var G_=37297,W_=0;function X_(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function q_(i){let e=Gt.getPrimaries(Gt.workingColorSpace),t=Gt.getPrimaries(i),n;switch(e===t?n="":e===wc&&t===Sc?n="LinearDisplayP3ToLinearSRGB":e===Sc&&t===wc&&(n="LinearSRGBToLinearDisplayP3"),i){case Fs:case Jc:return[n,"LinearTransferOETF"];case ft:case od:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function up(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+X_(i.getShaderSource(e),o)}else return s}function Y_(i,e){let t=q_(e);return`vec4 ${i}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function Z_(i,e){let t;switch(e){case r1:t="Linear";break;case o1:t="Reinhard";break;case a1:t="Cineon";break;case Ju:t="ACESFilmic";break;case l1:t="AgX";break;case h1:t="Neutral";break;case c1:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var oc=new w;function $_(){Gt.getLuminanceCoefficients(oc);let i=oc.x.toFixed(4),e=oc.y.toFixed(4),t=oc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function K_(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Wo).join(`
`)}function J_(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Q_(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function Wo(i){return i!==""}function dp(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function fp(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var j_=/^[ \t]*#include +<([\w\d./]+)>/gm;function Eu(i){return i.replace(j_,t2)}var e2=new Map;function t2(i,e){let t=_t[e];if(t===void 0){let n=e2.get(e);if(n!==void 0)t=_t[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Eu(t)}var n2=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function pp(i){return i.replace(n2,i2)}function i2(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function mp(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}function s2(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Fp?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Ku?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===ls&&(e="SHADOWMAP_TYPE_VSM"),e}function r2(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Zr:case $r:e="ENVMAP_TYPE_CUBE";break;case Kc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function o2(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case $r:e="ENVMAP_MODE_REFRACTION";break}return e}function a2(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Op:e="ENVMAP_BLENDING_MULTIPLY";break;case i1:e="ENVMAP_BLENDING_MIX";break;case s1:e="ENVMAP_BLENDING_ADD";break}return e}function c2(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function l2(i,e,t,n){let s=i.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,c=s2(t),l=r2(t),h=o2(t),p=a2(t),f=c2(t),d=K_(t),g=J_(r),x=s.createProgram(),m,u,E=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Wo).join(`
`),m.length>0&&(m+=`
`),u=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Wo).join(`
`),u.length>0&&(u+=`
`)):(m=[mp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Wo).join(`
`),u=[mp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+p:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Cs?"#define TONE_MAPPING":"",t.toneMapping!==Cs?_t.tonemapping_pars_fragment:"",t.toneMapping!==Cs?Z_("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",_t.colorspace_pars_fragment,Y_("linearToOutputTexel",t.outputColorSpace),$_(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Wo).join(`
`)),o=Eu(o),o=dp(o,t),o=fp(o,t),a=Eu(a),a=dp(a,t),a=fp(a,t),o=pp(o),a=pp(a),t.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,u=["#define varying in",t.glslVersion===Lf?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Lf?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);let y=E+m+o,M=E+u+a,I=hp(s,s.VERTEX_SHADER,y),A=hp(s,s.FRAGMENT_SHADER,M);s.attachShader(x,I),s.attachShader(x,A),t.index0AttributeName!==void 0?s.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function S(b){if(i.debug.checkShaderErrors){let F=s.getProgramInfoLog(x).trim(),B=s.getShaderInfoLog(I).trim(),G=s.getShaderInfoLog(A).trim(),H=!0,J=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(H=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,x,I,A);else{let ye=up(s,I,"vertex"),ie=up(s,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+b.name+`
Material Type: `+b.type+`

Program Info Log: `+F+`
`+ye+`
`+ie)}else F!==""?console.warn("THREE.WebGLProgram: Program Info Log:",F):(B===""||G==="")&&(J=!1);J&&(b.diagnostics={runnable:H,programLog:F,vertexShader:{log:B,prefix:m},fragmentShader:{log:G,prefix:u}})}s.deleteShader(I),s.deleteShader(A),C=new qr(s,x),Y=Q_(s,x)}let C;this.getUniforms=function(){return C===void 0&&S(this),C};let Y;this.getAttributes=function(){return Y===void 0&&S(this),Y};let v=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return v===!1&&(v=s.getProgramParameter(x,G_)),v},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=W_++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=I,this.fragmentShader=A,this}var h2=0,Su=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new wu(e),t.set(e,n)),n}},wu=class{constructor(e){this.id=h2++,this.code=e,this.usedTimes=0}};function u2(i,e,t,n,s,r,o){let a=new ea,c=new Su,l=new Set,h=[],p=s.logarithmicDepthBuffer,f=s.reverseDepthBuffer,d=s.vertexTextures,g=s.precision,x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(v){return l.add(v),v===0?"uv":`uv${v}`}function u(v,b,F,B,G){let H=B.fog,J=G.geometry,ye=v.isMeshStandardMaterial?B.environment:null,ie=(v.isMeshStandardMaterial?t:e).get(v.envMap||ye),fe=ie&&ie.mapping===Kc?ie.image.height:null,N=x[v.type];v.precision!==null&&(g=s.getMaxPrecision(v.precision),g!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",g,"instead."));let ee=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,oe=ee!==void 0?ee.length:0,j=0;J.morphAttributes.position!==void 0&&(j=1),J.morphAttributes.normal!==void 0&&(j=2),J.morphAttributes.color!==void 0&&(j=3);let O,ae,V,W;if(N){let ke=Zi[N];O=ke.vertexShader,ae=ke.fragmentShader}else O=v.vertexShader,ae=v.fragmentShader,c.update(v),V=c.getVertexShaderID(v),W=c.getFragmentShaderID(v);let Z=i.getRenderTarget(),ge=G.isInstancedMesh===!0,Ae=G.isBatchedMesh===!0,de=!!v.map,Q=!!v.matcap,P=!!ie,_e=!!v.aoMap,ne=!!v.lightMap,he=!!v.bumpMap,me=!!v.normalMap,Ce=!!v.displacementMap,we=!!v.emissiveMap,U=!!v.metalnessMap,T=!!v.roughnessMap,K=v.anisotropy>0,xe=v.clearcoat>0,be=v.dispersion>0,Me=v.iridescence>0,We=v.sheen>0,Oe=v.transmission>0,qe=K&&!!v.anisotropyMap,xt=xe&&!!v.clearcoatMap,De=xe&&!!v.clearcoatNormalMap,$=xe&&!!v.clearcoatRoughnessMap,ve=Me&&!!v.iridescenceMap,Ie=Me&&!!v.iridescenceThicknessMap,Pe=We&&!!v.sheenColorMap,Te=We&&!!v.sheenRoughnessMap,ce=!!v.specularMap,Ve=!!v.specularColorMap,X=!!v.specularIntensityMap,Re=Oe&&!!v.transmissionMap,re=Oe&&!!v.thicknessMap,Ee=!!v.gradientMap,Ue=!!v.alphaMap,Fe=v.alphaTest>0,ht=!!v.alphaHash,Dt=!!v.extensions,Ye=Cs;v.toneMapped&&(Z===null||Z.isXRRenderTarget===!0)&&(Ye=i.toneMapping);let ze={shaderID:N,shaderType:v.type,shaderName:v.name,vertexShader:O,fragmentShader:ae,defines:v.defines,customVertexShaderID:V,customFragmentShaderID:W,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:g,batching:Ae,batchingColor:Ae&&G._colorsTexture!==null,instancing:ge,instancingColor:ge&&G.instanceColor!==null,instancingMorph:ge&&G.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:Z===null?i.outputColorSpace:Z.isXRRenderTarget===!0?Z.texture.colorSpace:Fs,alphaToCoverage:!!v.alphaToCoverage,map:de,matcap:Q,envMap:P,envMapMode:P&&ie.mapping,envMapCubeUVHeight:fe,aoMap:_e,lightMap:ne,bumpMap:he,normalMap:me,displacementMap:d&&Ce,emissiveMap:we,normalMapObjectSpace:me&&v.normalMapType===f1,normalMapTangentSpace:me&&v.normalMapType===$p,metalnessMap:U,roughnessMap:T,anisotropy:K,anisotropyMap:qe,clearcoat:xe,clearcoatMap:xt,clearcoatNormalMap:De,clearcoatRoughnessMap:$,dispersion:be,iridescence:Me,iridescenceMap:ve,iridescenceThicknessMap:Ie,sheen:We,sheenColorMap:Pe,sheenRoughnessMap:Te,specularMap:ce,specularColorMap:Ve,specularIntensityMap:X,transmission:Oe,transmissionMap:Re,thicknessMap:re,gradientMap:Ee,opaque:v.transparent===!1&&v.blending===Gr&&v.alphaToCoverage===!1,alphaMap:Ue,alphaTest:Fe,alphaHash:ht,combine:v.combine,mapUv:de&&m(v.map.channel),aoMapUv:_e&&m(v.aoMap.channel),lightMapUv:ne&&m(v.lightMap.channel),bumpMapUv:he&&m(v.bumpMap.channel),normalMapUv:me&&m(v.normalMap.channel),displacementMapUv:Ce&&m(v.displacementMap.channel),emissiveMapUv:we&&m(v.emissiveMap.channel),metalnessMapUv:U&&m(v.metalnessMap.channel),roughnessMapUv:T&&m(v.roughnessMap.channel),anisotropyMapUv:qe&&m(v.anisotropyMap.channel),clearcoatMapUv:xt&&m(v.clearcoatMap.channel),clearcoatNormalMapUv:De&&m(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:$&&m(v.clearcoatRoughnessMap.channel),iridescenceMapUv:ve&&m(v.iridescenceMap.channel),iridescenceThicknessMapUv:Ie&&m(v.iridescenceThicknessMap.channel),sheenColorMapUv:Pe&&m(v.sheenColorMap.channel),sheenRoughnessMapUv:Te&&m(v.sheenRoughnessMap.channel),specularMapUv:ce&&m(v.specularMap.channel),specularColorMapUv:Ve&&m(v.specularColorMap.channel),specularIntensityMapUv:X&&m(v.specularIntensityMap.channel),transmissionMapUv:Re&&m(v.transmissionMap.channel),thicknessMapUv:re&&m(v.thicknessMap.channel),alphaMapUv:Ue&&m(v.alphaMap.channel),vertexTangents:!!J.attributes.tangent&&(me||K),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,pointsUvs:G.isPoints===!0&&!!J.attributes.uv&&(de||Ue),fog:!!H,useFog:v.fog===!0,fogExp2:!!H&&H.isFogExp2,flatShading:v.flatShading===!0,sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:p,reverseDepthBuffer:f,skinning:G.isSkinnedMesh===!0,morphTargets:J.morphAttributes.position!==void 0,morphNormals:J.morphAttributes.normal!==void 0,morphColors:J.morphAttributes.color!==void 0,morphTargetsCount:oe,morphTextureStride:j,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:v.dithering,shadowMapEnabled:i.shadowMap.enabled&&F.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ye,decodeVideoTexture:de&&v.map.isVideoTexture===!0&&Gt.getTransfer(v.map.colorSpace)===sn,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===It,flipSided:v.side===gn,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:Dt&&v.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Dt&&v.extensions.multiDraw===!0||Ae)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return ze.vertexUv1s=l.has(1),ze.vertexUv2s=l.has(2),ze.vertexUv3s=l.has(3),l.clear(),ze}function E(v){let b=[];if(v.shaderID?b.push(v.shaderID):(b.push(v.customVertexShaderID),b.push(v.customFragmentShaderID)),v.defines!==void 0)for(let F in v.defines)b.push(F),b.push(v.defines[F]);return v.isRawShaderMaterial===!1&&(y(b,v),M(b,v),b.push(i.outputColorSpace)),b.push(v.customProgramCacheKey),b.join()}function y(v,b){v.push(b.precision),v.push(b.outputColorSpace),v.push(b.envMapMode),v.push(b.envMapCubeUVHeight),v.push(b.mapUv),v.push(b.alphaMapUv),v.push(b.lightMapUv),v.push(b.aoMapUv),v.push(b.bumpMapUv),v.push(b.normalMapUv),v.push(b.displacementMapUv),v.push(b.emissiveMapUv),v.push(b.metalnessMapUv),v.push(b.roughnessMapUv),v.push(b.anisotropyMapUv),v.push(b.clearcoatMapUv),v.push(b.clearcoatNormalMapUv),v.push(b.clearcoatRoughnessMapUv),v.push(b.iridescenceMapUv),v.push(b.iridescenceThicknessMapUv),v.push(b.sheenColorMapUv),v.push(b.sheenRoughnessMapUv),v.push(b.specularMapUv),v.push(b.specularColorMapUv),v.push(b.specularIntensityMapUv),v.push(b.transmissionMapUv),v.push(b.thicknessMapUv),v.push(b.combine),v.push(b.fogExp2),v.push(b.sizeAttenuation),v.push(b.morphTargetsCount),v.push(b.morphAttributeCount),v.push(b.numDirLights),v.push(b.numPointLights),v.push(b.numSpotLights),v.push(b.numSpotLightMaps),v.push(b.numHemiLights),v.push(b.numRectAreaLights),v.push(b.numDirLightShadows),v.push(b.numPointLightShadows),v.push(b.numSpotLightShadows),v.push(b.numSpotLightShadowsWithMaps),v.push(b.numLightProbes),v.push(b.shadowMapType),v.push(b.toneMapping),v.push(b.numClippingPlanes),v.push(b.numClipIntersection),v.push(b.depthPacking)}function M(v,b){a.disableAll(),b.supportsVertexTextures&&a.enable(0),b.instancing&&a.enable(1),b.instancingColor&&a.enable(2),b.instancingMorph&&a.enable(3),b.matcap&&a.enable(4),b.envMap&&a.enable(5),b.normalMapObjectSpace&&a.enable(6),b.normalMapTangentSpace&&a.enable(7),b.clearcoat&&a.enable(8),b.iridescence&&a.enable(9),b.alphaTest&&a.enable(10),b.vertexColors&&a.enable(11),b.vertexAlphas&&a.enable(12),b.vertexUv1s&&a.enable(13),b.vertexUv2s&&a.enable(14),b.vertexUv3s&&a.enable(15),b.vertexTangents&&a.enable(16),b.anisotropy&&a.enable(17),b.alphaHash&&a.enable(18),b.batching&&a.enable(19),b.dispersion&&a.enable(20),b.batchingColor&&a.enable(21),v.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.reverseDepthBuffer&&a.enable(4),b.skinning&&a.enable(5),b.morphTargets&&a.enable(6),b.morphNormals&&a.enable(7),b.morphColors&&a.enable(8),b.premultipliedAlpha&&a.enable(9),b.shadowMapEnabled&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),b.alphaToCoverage&&a.enable(20),v.push(a.mask)}function I(v){let b=x[v.type],F;if(b){let B=Zi[b];F=tx.clone(B.uniforms)}else F=v.uniforms;return F}function A(v,b){let F;for(let B=0,G=h.length;B<G;B++){let H=h[B];if(H.cacheKey===b){F=H,++F.usedTimes;break}}return F===void 0&&(F=new l2(i,b,v,r),h.push(F)),F}function S(v){if(--v.usedTimes===0){let b=h.indexOf(v);h[b]=h[h.length-1],h.pop(),v.destroy()}}function C(v){c.remove(v)}function Y(){c.dispose()}return{getParameters:u,getProgramCacheKey:E,getUniforms:I,acquireProgram:A,releaseProgram:S,releaseShaderCache:C,programs:h,dispose:Y}}function d2(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,c){i.get(o)[a]=c}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function f2(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function gp(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function xp(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(p,f,d,g,x,m){let u=i[e];return u===void 0?(u={id:p.id,object:p,geometry:f,material:d,groupOrder:g,renderOrder:p.renderOrder,z:x,group:m},i[e]=u):(u.id=p.id,u.object=p,u.geometry=f,u.material=d,u.groupOrder=g,u.renderOrder=p.renderOrder,u.z=x,u.group=m),e++,u}function a(p,f,d,g,x,m){let u=o(p,f,d,g,x,m);d.transmission>0?n.push(u):d.transparent===!0?s.push(u):t.push(u)}function c(p,f,d,g,x,m){let u=o(p,f,d,g,x,m);d.transmission>0?n.unshift(u):d.transparent===!0?s.unshift(u):t.unshift(u)}function l(p,f){t.length>1&&t.sort(p||f2),n.length>1&&n.sort(f||gp),s.length>1&&s.sort(f||gp)}function h(){for(let p=e,f=i.length;p<f;p++){let d=i[p];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:a,unshift:c,finish:h,sort:l}}function p2(){let i=new WeakMap;function e(n,s){let r=i.get(n),o;return r===void 0?(o=new xp,i.set(n,[o])):s>=r.length?(o=new xp,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function m2(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new w,color:new ut};break;case"SpotLight":t={position:new w,direction:new w,color:new ut,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new w,color:new ut,distance:0,decay:0};break;case"HemisphereLight":t={direction:new w,skyColor:new ut,groundColor:new ut};break;case"RectAreaLight":t={color:new ut,position:new w,halfWidth:new w,halfHeight:new w};break}return i[e.id]=t,t}}}function g2(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ne};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ne};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ne,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var x2=0;function y2(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function v2(i){let e=new m2,t=g2(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new w);let s=new w,r=new wt,o=new wt;function a(l){let h=0,p=0,f=0;for(let Y=0;Y<9;Y++)n.probe[Y].set(0,0,0);let d=0,g=0,x=0,m=0,u=0,E=0,y=0,M=0,I=0,A=0,S=0;l.sort(y2);for(let Y=0,v=l.length;Y<v;Y++){let b=l[Y],F=b.color,B=b.intensity,G=b.distance,H=b.shadow&&b.shadow.map?b.shadow.map.texture:null;if(b.isAmbientLight)h+=F.r*B,p+=F.g*B,f+=F.b*B;else if(b.isLightProbe){for(let J=0;J<9;J++)n.probe[J].addScaledVector(b.sh.coefficients[J],B);S++}else if(b.isDirectionalLight){let J=e.get(b);if(J.color.copy(b.color).multiplyScalar(b.intensity),b.castShadow){let ye=b.shadow,ie=t.get(b);ie.shadowIntensity=ye.intensity,ie.shadowBias=ye.bias,ie.shadowNormalBias=ye.normalBias,ie.shadowRadius=ye.radius,ie.shadowMapSize=ye.mapSize,n.directionalShadow[d]=ie,n.directionalShadowMap[d]=H,n.directionalShadowMatrix[d]=b.shadow.matrix,E++}n.directional[d]=J,d++}else if(b.isSpotLight){let J=e.get(b);J.position.setFromMatrixPosition(b.matrixWorld),J.color.copy(F).multiplyScalar(B),J.distance=G,J.coneCos=Math.cos(b.angle),J.penumbraCos=Math.cos(b.angle*(1-b.penumbra)),J.decay=b.decay,n.spot[x]=J;let ye=b.shadow;if(b.map&&(n.spotLightMap[I]=b.map,I++,ye.updateMatrices(b),b.castShadow&&A++),n.spotLightMatrix[x]=ye.matrix,b.castShadow){let ie=t.get(b);ie.shadowIntensity=ye.intensity,ie.shadowBias=ye.bias,ie.shadowNormalBias=ye.normalBias,ie.shadowRadius=ye.radius,ie.shadowMapSize=ye.mapSize,n.spotShadow[x]=ie,n.spotShadowMap[x]=H,M++}x++}else if(b.isRectAreaLight){let J=e.get(b);J.color.copy(F).multiplyScalar(B),J.halfWidth.set(b.width*.5,0,0),J.halfHeight.set(0,b.height*.5,0),n.rectArea[m]=J,m++}else if(b.isPointLight){let J=e.get(b);if(J.color.copy(b.color).multiplyScalar(b.intensity),J.distance=b.distance,J.decay=b.decay,b.castShadow){let ye=b.shadow,ie=t.get(b);ie.shadowIntensity=ye.intensity,ie.shadowBias=ye.bias,ie.shadowNormalBias=ye.normalBias,ie.shadowRadius=ye.radius,ie.shadowMapSize=ye.mapSize,ie.shadowCameraNear=ye.camera.near,ie.shadowCameraFar=ye.camera.far,n.pointShadow[g]=ie,n.pointShadowMap[g]=H,n.pointShadowMatrix[g]=b.shadow.matrix,y++}n.point[g]=J,g++}else if(b.isHemisphereLight){let J=e.get(b);J.skyColor.copy(b.color).multiplyScalar(B),J.groundColor.copy(b.groundColor).multiplyScalar(B),n.hemi[u]=J,u++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=$e.LTC_FLOAT_1,n.rectAreaLTC2=$e.LTC_FLOAT_2):(n.rectAreaLTC1=$e.LTC_HALF_1,n.rectAreaLTC2=$e.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=p,n.ambient[2]=f;let C=n.hash;(C.directionalLength!==d||C.pointLength!==g||C.spotLength!==x||C.rectAreaLength!==m||C.hemiLength!==u||C.numDirectionalShadows!==E||C.numPointShadows!==y||C.numSpotShadows!==M||C.numSpotMaps!==I||C.numLightProbes!==S)&&(n.directional.length=d,n.spot.length=x,n.rectArea.length=m,n.point.length=g,n.hemi.length=u,n.directionalShadow.length=E,n.directionalShadowMap.length=E,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=M,n.spotShadowMap.length=M,n.directionalShadowMatrix.length=E,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=M+I-A,n.spotLightMap.length=I,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=S,C.directionalLength=d,C.pointLength=g,C.spotLength=x,C.rectAreaLength=m,C.hemiLength=u,C.numDirectionalShadows=E,C.numPointShadows=y,C.numSpotShadows=M,C.numSpotMaps=I,C.numLightProbes=S,n.version=x2++)}function c(l,h){let p=0,f=0,d=0,g=0,x=0,m=h.matrixWorldInverse;for(let u=0,E=l.length;u<E;u++){let y=l[u];if(y.isDirectionalLight){let M=n.directional[p];M.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(m),p++}else if(y.isSpotLight){let M=n.spot[d];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(m),M.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(m),d++}else if(y.isRectAreaLight){let M=n.rectArea[g];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(m),o.identity(),r.copy(y.matrixWorld),r.premultiply(m),o.extractRotation(r),M.halfWidth.set(y.width*.5,0,0),M.halfHeight.set(0,y.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),g++}else if(y.isPointLight){let M=n.point[f];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(m),f++}else if(y.isHemisphereLight){let M=n.hemi[x];M.direction.setFromMatrixPosition(y.matrixWorld),M.direction.transformDirection(m),x++}}}return{setup:a,setupView:c,state:n}}function yp(i){let e=new v2(i),t=[],n=[];function s(h){l.camera=h,t.length=0,n.length=0}function r(h){t.push(h)}function o(h){n.push(h)}function a(){e.setup(t)}function c(h){e.setupView(t,h)}let l={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function _2(i){let e=new WeakMap;function t(s,r=0){let o=e.get(s),a;return o===void 0?(a=new yp(i),e.set(s,[a])):r>=o.length?(a=new yp(i),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}var na=class extends Ds{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=d1,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},bu=class extends Ds{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},M2=`void main() {
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
}`;function S2(i,e,t){let n=new ta,s=new Ne,r=new Ne,o=new Yt,a=new na({depthPacking:rd}),c=new bu,l={},h=t.maxTextureSize,p={[Ki]:gn,[gn]:Ki,[It]:It},f=new Ji({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ne},radius:{value:4}},vertexShader:M2,fragmentShader:E2}),d=f.clone();d.defines.HORIZONTAL_PASS=1;let g=new Ct;g.setAttribute("position",new ln(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new lt(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Fp;let u=this.type;this.render=function(A,S,C){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;let Y=i.getRenderTarget(),v=i.getActiveCubeFace(),b=i.getActiveMipmapLevel(),F=i.state;F.setBlending(As),F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);let B=u!==ls&&this.type===ls,G=u===ls&&this.type!==ls;for(let H=0,J=A.length;H<J;H++){let ye=A[H],ie=ye.shadow;if(ie===void 0){console.warn("THREE.WebGLShadowMap:",ye,"has no shadow.");continue}if(ie.autoUpdate===!1&&ie.needsUpdate===!1)continue;s.copy(ie.mapSize);let fe=ie.getFrameExtents();if(s.multiply(fe),r.copy(ie.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/fe.x),s.x=r.x*fe.x,ie.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/fe.y),s.y=r.y*fe.y,ie.mapSize.y=r.y)),ie.map===null||B===!0||G===!0){let ee=this.type!==ls?{minFilter:ni,magFilter:ni}:{};ie.map!==null&&ie.map.dispose(),ie.map=new ds(s.x,s.y,ee),ie.map.texture.name=ye.name+".shadowMap",ie.camera.updateProjectionMatrix()}i.setRenderTarget(ie.map),i.clear();let N=ie.getViewportCount();for(let ee=0;ee<N;ee++){let oe=ie.getViewport(ee);o.set(r.x*oe.x,r.y*oe.y,r.x*oe.z,r.y*oe.w),F.viewport(o),ie.updateMatrices(ye,ee),n=ie.getFrustum(),M(S,C,ie.camera,ye,this.type)}ie.isPointLightShadow!==!0&&this.type===ls&&E(ie,C),ie.needsUpdate=!1}u=this.type,m.needsUpdate=!1,i.setRenderTarget(Y,v,b)};function E(A,S){let C=e.update(x);f.defines.VSM_SAMPLES!==A.blurSamples&&(f.defines.VSM_SAMPLES=A.blurSamples,d.defines.VSM_SAMPLES=A.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new ds(s.x,s.y)),f.uniforms.shadow_pass.value=A.map.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,i.setRenderTarget(A.mapPass),i.clear(),i.renderBufferDirect(S,null,C,f,x,null),d.uniforms.shadow_pass.value=A.mapPass.texture,d.uniforms.resolution.value=A.mapSize,d.uniforms.radius.value=A.radius,i.setRenderTarget(A.map),i.clear(),i.renderBufferDirect(S,null,C,d,x,null)}function y(A,S,C,Y){let v=null,b=C.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(b!==void 0)v=b;else if(v=C.isPointLight===!0?c:a,i.localClippingEnabled&&S.clipShadows===!0&&Array.isArray(S.clippingPlanes)&&S.clippingPlanes.length!==0||S.displacementMap&&S.displacementScale!==0||S.alphaMap&&S.alphaTest>0||S.map&&S.alphaTest>0){let F=v.uuid,B=S.uuid,G=l[F];G===void 0&&(G={},l[F]=G);let H=G[B];H===void 0&&(H=v.clone(),G[B]=H,S.addEventListener("dispose",I)),v=H}if(v.visible=S.visible,v.wireframe=S.wireframe,Y===ls?v.side=S.shadowSide!==null?S.shadowSide:S.side:v.side=S.shadowSide!==null?S.shadowSide:p[S.side],v.alphaMap=S.alphaMap,v.alphaTest=S.alphaTest,v.map=S.map,v.clipShadows=S.clipShadows,v.clippingPlanes=S.clippingPlanes,v.clipIntersection=S.clipIntersection,v.displacementMap=S.displacementMap,v.displacementScale=S.displacementScale,v.displacementBias=S.displacementBias,v.wireframeLinewidth=S.wireframeLinewidth,v.linewidth=S.linewidth,C.isPointLight===!0&&v.isMeshDistanceMaterial===!0){let F=i.properties.get(v);F.light=C}return v}function M(A,S,C,Y,v){if(A.visible===!1)return;if(A.layers.test(S.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&v===ls)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,A.matrixWorld);let B=e.update(A),G=A.material;if(Array.isArray(G)){let H=B.groups;for(let J=0,ye=H.length;J<ye;J++){let ie=H[J],fe=G[ie.materialIndex];if(fe&&fe.visible){let N=y(A,fe,Y,v);A.onBeforeShadow(i,A,S,C,B,N,ie),i.renderBufferDirect(C,null,B,N,A,ie),A.onAfterShadow(i,A,S,C,B,N,ie)}}}else if(G.visible){let H=y(A,G,Y,v);A.onBeforeShadow(i,A,S,C,B,H,null),i.renderBufferDirect(C,null,B,H,A,null),A.onAfterShadow(i,A,S,C,B,H,null)}}let F=A.children;for(let B=0,G=F.length;B<G;B++)M(F[B],S,C,Y,v)}function I(A){A.target.removeEventListener("dispose",I);for(let C in l){let Y=l[C],v=A.target.uuid;v in Y&&(Y[v].dispose(),delete Y[v])}}}var w2={[Lh]:Dh,[Uh]:Fh,[Hh]:Oh,[Yr]:Nh,[Dh]:Lh,[Fh]:Uh,[Oh]:Hh,[Nh]:Yr};function b2(i){function e(){let X=!1,Re=new Yt,re=null,Ee=new Yt(0,0,0,0);return{setMask:function(Ue){re!==Ue&&!X&&(i.colorMask(Ue,Ue,Ue,Ue),re=Ue)},setLocked:function(Ue){X=Ue},setClear:function(Ue,Fe,ht,Dt,Ye){Ye===!0&&(Ue*=Dt,Fe*=Dt,ht*=Dt),Re.set(Ue,Fe,ht,Dt),Ee.equals(Re)===!1&&(i.clearColor(Ue,Fe,ht,Dt),Ee.copy(Re))},reset:function(){X=!1,re=null,Ee.set(-1,0,0,0)}}}function t(){let X=!1,Re=!1,re=null,Ee=null,Ue=null;return{setReversed:function(Fe){Re=Fe},setTest:function(Fe){Fe?V(i.DEPTH_TEST):W(i.DEPTH_TEST)},setMask:function(Fe){re!==Fe&&!X&&(i.depthMask(Fe),re=Fe)},setFunc:function(Fe){if(Re&&(Fe=w2[Fe]),Ee!==Fe){switch(Fe){case Lh:i.depthFunc(i.NEVER);break;case Dh:i.depthFunc(i.ALWAYS);break;case Uh:i.depthFunc(i.LESS);break;case Yr:i.depthFunc(i.LEQUAL);break;case Hh:i.depthFunc(i.EQUAL);break;case Nh:i.depthFunc(i.GEQUAL);break;case Fh:i.depthFunc(i.GREATER);break;case Oh:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Ee=Fe}},setLocked:function(Fe){X=Fe},setClear:function(Fe){Ue!==Fe&&(i.clearDepth(Fe),Ue=Fe)},reset:function(){X=!1,re=null,Ee=null,Ue=null}}}function n(){let X=!1,Re=null,re=null,Ee=null,Ue=null,Fe=null,ht=null,Dt=null,Ye=null;return{setTest:function(ze){X||(ze?V(i.STENCIL_TEST):W(i.STENCIL_TEST))},setMask:function(ze){Re!==ze&&!X&&(i.stencilMask(ze),Re=ze)},setFunc:function(ze,ke,it){(re!==ze||Ee!==ke||Ue!==it)&&(i.stencilFunc(ze,ke,it),re=ze,Ee=ke,Ue=it)},setOp:function(ze,ke,it){(Fe!==ze||ht!==ke||Dt!==it)&&(i.stencilOp(ze,ke,it),Fe=ze,ht=ke,Dt=it)},setLocked:function(ze){X=ze},setClear:function(ze){Ye!==ze&&(i.clearStencil(ze),Ye=ze)},reset:function(){X=!1,Re=null,re=null,Ee=null,Ue=null,Fe=null,ht=null,Dt=null,Ye=null}}}let s=new e,r=new t,o=new n,a=new WeakMap,c=new WeakMap,l={},h={},p=new WeakMap,f=[],d=null,g=!1,x=null,m=null,u=null,E=null,y=null,M=null,I=null,A=new ut(0,0,0),S=0,C=!1,Y=null,v=null,b=null,F=null,B=null,G=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),H=!1,J=0,ye=i.getParameter(i.VERSION);ye.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(ye)[1]),H=J>=1):ye.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(ye)[1]),H=J>=2);let ie=null,fe={},N=i.getParameter(i.SCISSOR_BOX),ee=i.getParameter(i.VIEWPORT),oe=new Yt().fromArray(N),j=new Yt().fromArray(ee);function O(X,Re,re,Ee){let Ue=new Uint8Array(4),Fe=i.createTexture();i.bindTexture(X,Fe),i.texParameteri(X,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(X,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let ht=0;ht<re;ht++)X===i.TEXTURE_3D||X===i.TEXTURE_2D_ARRAY?i.texImage3D(Re,0,i.RGBA,1,1,Ee,0,i.RGBA,i.UNSIGNED_BYTE,Ue):i.texImage2D(Re+ht,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Ue);return Fe}let ae={};ae[i.TEXTURE_2D]=O(i.TEXTURE_2D,i.TEXTURE_2D,1),ae[i.TEXTURE_CUBE_MAP]=O(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),ae[i.TEXTURE_2D_ARRAY]=O(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ae[i.TEXTURE_3D]=O(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),r.setClear(1),o.setClear(0),V(i.DEPTH_TEST),r.setFunc(Yr),ne(!1),he(wf),V(i.CULL_FACE),P(As);function V(X){l[X]!==!0&&(i.enable(X),l[X]=!0)}function W(X){l[X]!==!1&&(i.disable(X),l[X]=!1)}function Z(X,Re){return h[X]!==Re?(i.bindFramebuffer(X,Re),h[X]=Re,X===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=Re),X===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=Re),!0):!1}function ge(X,Re){let re=f,Ee=!1;if(X){re=p.get(Re),re===void 0&&(re=[],p.set(Re,re));let Ue=X.textures;if(re.length!==Ue.length||re[0]!==i.COLOR_ATTACHMENT0){for(let Fe=0,ht=Ue.length;Fe<ht;Fe++)re[Fe]=i.COLOR_ATTACHMENT0+Fe;re.length=Ue.length,Ee=!0}}else re[0]!==i.BACK&&(re[0]=i.BACK,Ee=!0);Ee&&i.drawBuffers(re)}function Ae(X){return d!==X?(i.useProgram(X),d=X,!0):!1}let de={[tr]:i.FUNC_ADD,[Bg]:i.FUNC_SUBTRACT,[kg]:i.FUNC_REVERSE_SUBTRACT};de[Vg]=i.MIN,de[Gg]=i.MAX;let Q={[Wg]:i.ZERO,[Xg]:i.ONE,[qg]:i.SRC_COLOR,[Ph]:i.SRC_ALPHA,[Qg]:i.SRC_ALPHA_SATURATE,[Kg]:i.DST_COLOR,[Zg]:i.DST_ALPHA,[Yg]:i.ONE_MINUS_SRC_COLOR,[Ih]:i.ONE_MINUS_SRC_ALPHA,[Jg]:i.ONE_MINUS_DST_COLOR,[$g]:i.ONE_MINUS_DST_ALPHA,[jg]:i.CONSTANT_COLOR,[e1]:i.ONE_MINUS_CONSTANT_COLOR,[t1]:i.CONSTANT_ALPHA,[n1]:i.ONE_MINUS_CONSTANT_ALPHA};function P(X,Re,re,Ee,Ue,Fe,ht,Dt,Ye,ze){if(X===As){g===!0&&(W(i.BLEND),g=!1);return}if(g===!1&&(V(i.BLEND),g=!0),X!==zg){if(X!==x||ze!==C){if((m!==tr||y!==tr)&&(i.blendEquation(i.FUNC_ADD),m=tr,y=tr),ze)switch(X){case Gr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case _c:i.blendFunc(i.ONE,i.ONE);break;case bf:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Tf:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",X);break}else switch(X){case Gr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case _c:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case bf:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Tf:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",X);break}u=null,E=null,M=null,I=null,A.set(0,0,0),S=0,x=X,C=ze}return}Ue=Ue||Re,Fe=Fe||re,ht=ht||Ee,(Re!==m||Ue!==y)&&(i.blendEquationSeparate(de[Re],de[Ue]),m=Re,y=Ue),(re!==u||Ee!==E||Fe!==M||ht!==I)&&(i.blendFuncSeparate(Q[re],Q[Ee],Q[Fe],Q[ht]),u=re,E=Ee,M=Fe,I=ht),(Dt.equals(A)===!1||Ye!==S)&&(i.blendColor(Dt.r,Dt.g,Dt.b,Ye),A.copy(Dt),S=Ye),x=X,C=!1}function _e(X,Re){X.side===It?W(i.CULL_FACE):V(i.CULL_FACE);let re=X.side===gn;Re&&(re=!re),ne(re),X.blending===Gr&&X.transparent===!1?P(As):P(X.blending,X.blendEquation,X.blendSrc,X.blendDst,X.blendEquationAlpha,X.blendSrcAlpha,X.blendDstAlpha,X.blendColor,X.blendAlpha,X.premultipliedAlpha),r.setFunc(X.depthFunc),r.setTest(X.depthTest),r.setMask(X.depthWrite),s.setMask(X.colorWrite);let Ee=X.stencilWrite;o.setTest(Ee),Ee&&(o.setMask(X.stencilWriteMask),o.setFunc(X.stencilFunc,X.stencilRef,X.stencilFuncMask),o.setOp(X.stencilFail,X.stencilZFail,X.stencilZPass)),Ce(X.polygonOffset,X.polygonOffsetFactor,X.polygonOffsetUnits),X.alphaToCoverage===!0?V(i.SAMPLE_ALPHA_TO_COVERAGE):W(i.SAMPLE_ALPHA_TO_COVERAGE)}function ne(X){Y!==X&&(X?i.frontFace(i.CW):i.frontFace(i.CCW),Y=X)}function he(X){X!==Fg?(V(i.CULL_FACE),X!==v&&(X===wf?i.cullFace(i.BACK):X===Og?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):W(i.CULL_FACE),v=X}function me(X){X!==b&&(H&&i.lineWidth(X),b=X)}function Ce(X,Re,re){X?(V(i.POLYGON_OFFSET_FILL),(F!==Re||B!==re)&&(i.polygonOffset(Re,re),F=Re,B=re)):W(i.POLYGON_OFFSET_FILL)}function we(X){X?V(i.SCISSOR_TEST):W(i.SCISSOR_TEST)}function U(X){X===void 0&&(X=i.TEXTURE0+G-1),ie!==X&&(i.activeTexture(X),ie=X)}function T(X,Re,re){re===void 0&&(ie===null?re=i.TEXTURE0+G-1:re=ie);let Ee=fe[re];Ee===void 0&&(Ee={type:void 0,texture:void 0},fe[re]=Ee),(Ee.type!==X||Ee.texture!==Re)&&(ie!==re&&(i.activeTexture(re),ie=re),i.bindTexture(X,Re||ae[X]),Ee.type=X,Ee.texture=Re)}function K(){let X=fe[ie];X!==void 0&&X.type!==void 0&&(i.bindTexture(X.type,null),X.type=void 0,X.texture=void 0)}function xe(){try{i.compressedTexImage2D.apply(i,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function be(){try{i.compressedTexImage3D.apply(i,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Me(){try{i.texSubImage2D.apply(i,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function We(){try{i.texSubImage3D.apply(i,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Oe(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function qe(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function xt(){try{i.texStorage2D.apply(i,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function De(){try{i.texStorage3D.apply(i,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function $(){try{i.texImage2D.apply(i,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function ve(){try{i.texImage3D.apply(i,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Ie(X){oe.equals(X)===!1&&(i.scissor(X.x,X.y,X.z,X.w),oe.copy(X))}function Pe(X){j.equals(X)===!1&&(i.viewport(X.x,X.y,X.z,X.w),j.copy(X))}function Te(X,Re){let re=c.get(Re);re===void 0&&(re=new WeakMap,c.set(Re,re));let Ee=re.get(X);Ee===void 0&&(Ee=i.getUniformBlockIndex(Re,X.name),re.set(X,Ee))}function ce(X,Re){let Ee=c.get(Re).get(X);a.get(Re)!==Ee&&(i.uniformBlockBinding(Re,Ee,X.__bindingPointIndex),a.set(Re,Ee))}function Ve(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),l={},ie=null,fe={},h={},p=new WeakMap,f=[],d=null,g=!1,x=null,m=null,u=null,E=null,y=null,M=null,I=null,A=new ut(0,0,0),S=0,C=!1,Y=null,v=null,b=null,F=null,B=null,oe.set(0,0,i.canvas.width,i.canvas.height),j.set(0,0,i.canvas.width,i.canvas.height),s.reset(),r.reset(),o.reset()}return{buffers:{color:s,depth:r,stencil:o},enable:V,disable:W,bindFramebuffer:Z,drawBuffers:ge,useProgram:Ae,setBlending:P,setMaterial:_e,setFlipSided:ne,setCullFace:he,setLineWidth:me,setPolygonOffset:Ce,setScissorTest:we,activeTexture:U,bindTexture:T,unbindTexture:K,compressedTexImage2D:xe,compressedTexImage3D:be,texImage2D:$,texImage3D:ve,updateUBOMapping:Te,uniformBlockBinding:ce,texStorage2D:xt,texStorage3D:De,texSubImage2D:Me,texSubImage3D:We,compressedTexSubImage2D:Oe,compressedTexSubImage3D:qe,scissor:Ie,viewport:Pe,reset:Ve}}function vp(i,e,t,n){let s=T2(n);switch(t){case Gp:return i*e;case Xp:return i*e;case qp:return i*e*2;case td:return i*e/s.components*s.byteLength;case nd:return i*e/s.components*s.byteLength;case Yp:return i*e*2/s.components*s.byteLength;case id:return i*e*2/s.components*s.byteLength;case Wp:return i*e*3/s.components*s.byteLength;case ui:return i*e*4/s.components*s.byteLength;case sd:return i*e*4/s.components*s.byteLength;case pc:case mc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case gc:case xc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Vh:case Wh:return Math.max(i,16)*Math.max(e,8)/4;case kh:case Gh:return Math.max(i,8)*Math.max(e,8)/2;case Xh:case qh:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Yh:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Zh:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case $h:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Kh:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Jh:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Qh:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case jh:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case eu:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case tu:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case nu:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case iu:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case su:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case ru:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case ou:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case au:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case yc:case cu:case lu:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Zp:case hu:return Math.ceil(i/4)*Math.ceil(e/4)*8;case uu:case du:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function T2(i){switch(i){case us:case Bp:return{byteLength:1,components:1};case Jo:case kp:case ua:return{byteLength:2,components:1};case ju:case ed:return{byteLength:2,components:4};case or:case Qu:case $i:return{byteLength:4,components:1};case Vp:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function R2(i,e,t,n,s,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Ne,h=new WeakMap,p,f=new WeakMap,d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(U,T){return d?new OffscreenCanvas(U,T):Qo("canvas")}function x(U,T,K){let xe=1,be=we(U);if((be.width>K||be.height>K)&&(xe=K/Math.max(be.width,be.height)),xe<1)if(typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&U instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&U instanceof ImageBitmap||typeof VideoFrame<"u"&&U instanceof VideoFrame){let Me=Math.floor(xe*be.width),We=Math.floor(xe*be.height);p===void 0&&(p=g(Me,We));let Oe=T?g(Me,We):p;return Oe.width=Me,Oe.height=We,Oe.getContext("2d").drawImage(U,0,0,Me,We),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+be.width+"x"+be.height+") to ("+Me+"x"+We+")."),Oe}else return"data"in U&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+be.width+"x"+be.height+")."),U;return U}function m(U){return U.generateMipmaps&&U.minFilter!==ni&&U.minFilter!==pn}function u(U){i.generateMipmap(U)}function E(U,T,K,xe,be=!1){if(U!==null){if(i[U]!==void 0)return i[U];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+U+"'")}let Me=T;if(T===i.RED&&(K===i.FLOAT&&(Me=i.R32F),K===i.HALF_FLOAT&&(Me=i.R16F),K===i.UNSIGNED_BYTE&&(Me=i.R8)),T===i.RED_INTEGER&&(K===i.UNSIGNED_BYTE&&(Me=i.R8UI),K===i.UNSIGNED_SHORT&&(Me=i.R16UI),K===i.UNSIGNED_INT&&(Me=i.R32UI),K===i.BYTE&&(Me=i.R8I),K===i.SHORT&&(Me=i.R16I),K===i.INT&&(Me=i.R32I)),T===i.RG&&(K===i.FLOAT&&(Me=i.RG32F),K===i.HALF_FLOAT&&(Me=i.RG16F),K===i.UNSIGNED_BYTE&&(Me=i.RG8)),T===i.RG_INTEGER&&(K===i.UNSIGNED_BYTE&&(Me=i.RG8UI),K===i.UNSIGNED_SHORT&&(Me=i.RG16UI),K===i.UNSIGNED_INT&&(Me=i.RG32UI),K===i.BYTE&&(Me=i.RG8I),K===i.SHORT&&(Me=i.RG16I),K===i.INT&&(Me=i.RG32I)),T===i.RGB_INTEGER&&(K===i.UNSIGNED_BYTE&&(Me=i.RGB8UI),K===i.UNSIGNED_SHORT&&(Me=i.RGB16UI),K===i.UNSIGNED_INT&&(Me=i.RGB32UI),K===i.BYTE&&(Me=i.RGB8I),K===i.SHORT&&(Me=i.RGB16I),K===i.INT&&(Me=i.RGB32I)),T===i.RGBA_INTEGER&&(K===i.UNSIGNED_BYTE&&(Me=i.RGBA8UI),K===i.UNSIGNED_SHORT&&(Me=i.RGBA16UI),K===i.UNSIGNED_INT&&(Me=i.RGBA32UI),K===i.BYTE&&(Me=i.RGBA8I),K===i.SHORT&&(Me=i.RGBA16I),K===i.INT&&(Me=i.RGBA32I)),T===i.RGB&&K===i.UNSIGNED_INT_5_9_9_9_REV&&(Me=i.RGB9_E5),T===i.RGBA){let We=be?Ec:Gt.getTransfer(xe);K===i.FLOAT&&(Me=i.RGBA32F),K===i.HALF_FLOAT&&(Me=i.RGBA16F),K===i.UNSIGNED_BYTE&&(Me=We===sn?i.SRGB8_ALPHA8:i.RGBA8),K===i.UNSIGNED_SHORT_4_4_4_4&&(Me=i.RGBA4),K===i.UNSIGNED_SHORT_5_5_5_1&&(Me=i.RGB5_A1)}return(Me===i.R16F||Me===i.R32F||Me===i.RG16F||Me===i.RG32F||Me===i.RGBA16F||Me===i.RGBA32F)&&e.get("EXT_color_buffer_float"),Me}function y(U,T){let K;return U?T===null||T===or||T===Kr?K=i.DEPTH24_STENCIL8:T===$i?K=i.DEPTH32F_STENCIL8:T===Jo&&(K=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===or||T===Kr?K=i.DEPTH_COMPONENT24:T===$i?K=i.DEPTH_COMPONENT32F:T===Jo&&(K=i.DEPTH_COMPONENT16),K}function M(U,T){return m(U)===!0||U.isFramebufferTexture&&U.minFilter!==ni&&U.minFilter!==pn?Math.log2(Math.max(T.width,T.height))+1:U.mipmaps!==void 0&&U.mipmaps.length>0?U.mipmaps.length:U.isCompressedTexture&&Array.isArray(U.image)?T.mipmaps.length:1}function I(U){let T=U.target;T.removeEventListener("dispose",I),S(T),T.isVideoTexture&&h.delete(T)}function A(U){let T=U.target;T.removeEventListener("dispose",A),Y(T)}function S(U){let T=n.get(U);if(T.__webglInit===void 0)return;let K=U.source,xe=f.get(K);if(xe){let be=xe[T.__cacheKey];be.usedTimes--,be.usedTimes===0&&C(U),Object.keys(xe).length===0&&f.delete(K)}n.remove(U)}function C(U){let T=n.get(U);i.deleteTexture(T.__webglTexture);let K=U.source,xe=f.get(K);delete xe[T.__cacheKey],o.memory.textures--}function Y(U){let T=n.get(U);if(U.depthTexture&&U.depthTexture.dispose(),U.isWebGLCubeRenderTarget)for(let xe=0;xe<6;xe++){if(Array.isArray(T.__webglFramebuffer[xe]))for(let be=0;be<T.__webglFramebuffer[xe].length;be++)i.deleteFramebuffer(T.__webglFramebuffer[xe][be]);else i.deleteFramebuffer(T.__webglFramebuffer[xe]);T.__webglDepthbuffer&&i.deleteRenderbuffer(T.__webglDepthbuffer[xe])}else{if(Array.isArray(T.__webglFramebuffer))for(let xe=0;xe<T.__webglFramebuffer.length;xe++)i.deleteFramebuffer(T.__webglFramebuffer[xe]);else i.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&i.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&i.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let xe=0;xe<T.__webglColorRenderbuffer.length;xe++)T.__webglColorRenderbuffer[xe]&&i.deleteRenderbuffer(T.__webglColorRenderbuffer[xe]);T.__webglDepthRenderbuffer&&i.deleteRenderbuffer(T.__webglDepthRenderbuffer)}let K=U.textures;for(let xe=0,be=K.length;xe<be;xe++){let Me=n.get(K[xe]);Me.__webglTexture&&(i.deleteTexture(Me.__webglTexture),o.memory.textures--),n.remove(K[xe])}n.remove(U)}let v=0;function b(){v=0}function F(){let U=v;return U>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+U+" texture units while this GPU supports only "+s.maxTextures),v+=1,U}function B(U){let T=[];return T.push(U.wrapS),T.push(U.wrapT),T.push(U.wrapR||0),T.push(U.magFilter),T.push(U.minFilter),T.push(U.anisotropy),T.push(U.internalFormat),T.push(U.format),T.push(U.type),T.push(U.generateMipmaps),T.push(U.premultiplyAlpha),T.push(U.flipY),T.push(U.unpackAlignment),T.push(U.colorSpace),T.join()}function G(U,T){let K=n.get(U);if(U.isVideoTexture&&me(U),U.isRenderTargetTexture===!1&&U.version>0&&K.__version!==U.version){let xe=U.image;if(xe===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(xe.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{j(K,U,T);return}}t.bindTexture(i.TEXTURE_2D,K.__webglTexture,i.TEXTURE0+T)}function H(U,T){let K=n.get(U);if(U.version>0&&K.__version!==U.version){j(K,U,T);return}t.bindTexture(i.TEXTURE_2D_ARRAY,K.__webglTexture,i.TEXTURE0+T)}function J(U,T){let K=n.get(U);if(U.version>0&&K.__version!==U.version){j(K,U,T);return}t.bindTexture(i.TEXTURE_3D,K.__webglTexture,i.TEXTURE0+T)}function ye(U,T){let K=n.get(U);if(U.version>0&&K.__version!==U.version){O(K,U,T);return}t.bindTexture(i.TEXTURE_CUBE_MAP,K.__webglTexture,i.TEXTURE0+T)}let ie={[rr]:i.REPEAT,[sr]:i.CLAMP_TO_EDGE,[Bh]:i.MIRRORED_REPEAT},fe={[ni]:i.NEAREST,[u1]:i.NEAREST_MIPMAP_NEAREST,[Ba]:i.NEAREST_MIPMAP_LINEAR,[pn]:i.LINEAR,[$l]:i.LINEAR_MIPMAP_NEAREST,[Fi]:i.LINEAR_MIPMAP_LINEAR},N={[p1]:i.NEVER,[_1]:i.ALWAYS,[m1]:i.LESS,[Kp]:i.LEQUAL,[g1]:i.EQUAL,[v1]:i.GEQUAL,[x1]:i.GREATER,[y1]:i.NOTEQUAL};function ee(U,T){if(T.type===$i&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===pn||T.magFilter===$l||T.magFilter===Ba||T.magFilter===Fi||T.minFilter===pn||T.minFilter===$l||T.minFilter===Ba||T.minFilter===Fi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(U,i.TEXTURE_WRAP_S,ie[T.wrapS]),i.texParameteri(U,i.TEXTURE_WRAP_T,ie[T.wrapT]),(U===i.TEXTURE_3D||U===i.TEXTURE_2D_ARRAY)&&i.texParameteri(U,i.TEXTURE_WRAP_R,ie[T.wrapR]),i.texParameteri(U,i.TEXTURE_MAG_FILTER,fe[T.magFilter]),i.texParameteri(U,i.TEXTURE_MIN_FILTER,fe[T.minFilter]),T.compareFunction&&(i.texParameteri(U,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(U,i.TEXTURE_COMPARE_FUNC,N[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===ni||T.minFilter!==Ba&&T.minFilter!==Fi||T.type===$i&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||n.get(T).__currentAnisotropy){let K=e.get("EXT_texture_filter_anisotropic");i.texParameterf(U,K.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,s.getMaxAnisotropy())),n.get(T).__currentAnisotropy=T.anisotropy}}}function oe(U,T){let K=!1;U.__webglInit===void 0&&(U.__webglInit=!0,T.addEventListener("dispose",I));let xe=T.source,be=f.get(xe);be===void 0&&(be={},f.set(xe,be));let Me=B(T);if(Me!==U.__cacheKey){be[Me]===void 0&&(be[Me]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,K=!0),be[Me].usedTimes++;let We=be[U.__cacheKey];We!==void 0&&(be[U.__cacheKey].usedTimes--,We.usedTimes===0&&C(T)),U.__cacheKey=Me,U.__webglTexture=be[Me].texture}return K}function j(U,T,K){let xe=i.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(xe=i.TEXTURE_2D_ARRAY),T.isData3DTexture&&(xe=i.TEXTURE_3D);let be=oe(U,T),Me=T.source;t.bindTexture(xe,U.__webglTexture,i.TEXTURE0+K);let We=n.get(Me);if(Me.version!==We.__version||be===!0){t.activeTexture(i.TEXTURE0+K);let Oe=Gt.getPrimaries(Gt.workingColorSpace),qe=T.colorSpace===Rs?null:Gt.getPrimaries(T.colorSpace),xt=T.colorSpace===Rs||Oe===qe?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,T.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,T.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,xt);let De=x(T.image,!1,s.maxTextureSize);De=Ce(T,De);let $=r.convert(T.format,T.colorSpace),ve=r.convert(T.type),Ie=E(T.internalFormat,$,ve,T.colorSpace,T.isVideoTexture);ee(xe,T);let Pe,Te=T.mipmaps,ce=T.isVideoTexture!==!0,Ve=We.__version===void 0||be===!0,X=Me.dataReady,Re=M(T,De);if(T.isDepthTexture)Ie=y(T.format===Jr,T.type),Ve&&(ce?t.texStorage2D(i.TEXTURE_2D,1,Ie,De.width,De.height):t.texImage2D(i.TEXTURE_2D,0,Ie,De.width,De.height,0,$,ve,null));else if(T.isDataTexture)if(Te.length>0){ce&&Ve&&t.texStorage2D(i.TEXTURE_2D,Re,Ie,Te[0].width,Te[0].height);for(let re=0,Ee=Te.length;re<Ee;re++)Pe=Te[re],ce?X&&t.texSubImage2D(i.TEXTURE_2D,re,0,0,Pe.width,Pe.height,$,ve,Pe.data):t.texImage2D(i.TEXTURE_2D,re,Ie,Pe.width,Pe.height,0,$,ve,Pe.data);T.generateMipmaps=!1}else ce?(Ve&&t.texStorage2D(i.TEXTURE_2D,Re,Ie,De.width,De.height),X&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,De.width,De.height,$,ve,De.data)):t.texImage2D(i.TEXTURE_2D,0,Ie,De.width,De.height,0,$,ve,De.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){ce&&Ve&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Re,Ie,Te[0].width,Te[0].height,De.depth);for(let re=0,Ee=Te.length;re<Ee;re++)if(Pe=Te[re],T.format!==ui)if($!==null)if(ce){if(X)if(T.layerUpdates.size>0){let Ue=vp(Pe.width,Pe.height,T.format,T.type);for(let Fe of T.layerUpdates){let ht=Pe.data.subarray(Fe*Ue/Pe.data.BYTES_PER_ELEMENT,(Fe+1)*Ue/Pe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,re,0,0,Fe,Pe.width,Pe.height,1,$,ht,0,0)}T.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,re,0,0,0,Pe.width,Pe.height,De.depth,$,Pe.data,0,0)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,re,Ie,Pe.width,Pe.height,De.depth,0,Pe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ce?X&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,re,0,0,0,Pe.width,Pe.height,De.depth,$,ve,Pe.data):t.texImage3D(i.TEXTURE_2D_ARRAY,re,Ie,Pe.width,Pe.height,De.depth,0,$,ve,Pe.data)}else{ce&&Ve&&t.texStorage2D(i.TEXTURE_2D,Re,Ie,Te[0].width,Te[0].height);for(let re=0,Ee=Te.length;re<Ee;re++)Pe=Te[re],T.format!==ui?$!==null?ce?X&&t.compressedTexSubImage2D(i.TEXTURE_2D,re,0,0,Pe.width,Pe.height,$,Pe.data):t.compressedTexImage2D(i.TEXTURE_2D,re,Ie,Pe.width,Pe.height,0,Pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ce?X&&t.texSubImage2D(i.TEXTURE_2D,re,0,0,Pe.width,Pe.height,$,ve,Pe.data):t.texImage2D(i.TEXTURE_2D,re,Ie,Pe.width,Pe.height,0,$,ve,Pe.data)}else if(T.isDataArrayTexture)if(ce){if(Ve&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Re,Ie,De.width,De.height,De.depth),X)if(T.layerUpdates.size>0){let re=vp(De.width,De.height,T.format,T.type);for(let Ee of T.layerUpdates){let Ue=De.data.subarray(Ee*re/De.data.BYTES_PER_ELEMENT,(Ee+1)*re/De.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Ee,De.width,De.height,1,$,ve,Ue)}T.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,De.width,De.height,De.depth,$,ve,De.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Ie,De.width,De.height,De.depth,0,$,ve,De.data);else if(T.isData3DTexture)ce?(Ve&&t.texStorage3D(i.TEXTURE_3D,Re,Ie,De.width,De.height,De.depth),X&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,De.width,De.height,De.depth,$,ve,De.data)):t.texImage3D(i.TEXTURE_3D,0,Ie,De.width,De.height,De.depth,0,$,ve,De.data);else if(T.isFramebufferTexture){if(Ve)if(ce)t.texStorage2D(i.TEXTURE_2D,Re,Ie,De.width,De.height);else{let re=De.width,Ee=De.height;for(let Ue=0;Ue<Re;Ue++)t.texImage2D(i.TEXTURE_2D,Ue,Ie,re,Ee,0,$,ve,null),re>>=1,Ee>>=1}}else if(Te.length>0){if(ce&&Ve){let re=we(Te[0]);t.texStorage2D(i.TEXTURE_2D,Re,Ie,re.width,re.height)}for(let re=0,Ee=Te.length;re<Ee;re++)Pe=Te[re],ce?X&&t.texSubImage2D(i.TEXTURE_2D,re,0,0,$,ve,Pe):t.texImage2D(i.TEXTURE_2D,re,Ie,$,ve,Pe);T.generateMipmaps=!1}else if(ce){if(Ve){let re=we(De);t.texStorage2D(i.TEXTURE_2D,Re,Ie,re.width,re.height)}X&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,$,ve,De)}else t.texImage2D(i.TEXTURE_2D,0,Ie,$,ve,De);m(T)&&u(xe),We.__version=Me.version,T.onUpdate&&T.onUpdate(T)}U.__version=T.version}function O(U,T,K){if(T.image.length!==6)return;let xe=oe(U,T),be=T.source;t.bindTexture(i.TEXTURE_CUBE_MAP,U.__webglTexture,i.TEXTURE0+K);let Me=n.get(be);if(be.version!==Me.__version||xe===!0){t.activeTexture(i.TEXTURE0+K);let We=Gt.getPrimaries(Gt.workingColorSpace),Oe=T.colorSpace===Rs?null:Gt.getPrimaries(T.colorSpace),qe=T.colorSpace===Rs||We===Oe?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,T.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,T.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,qe);let xt=T.isCompressedTexture||T.image[0].isCompressedTexture,De=T.image[0]&&T.image[0].isDataTexture,$=[];for(let Ee=0;Ee<6;Ee++)!xt&&!De?$[Ee]=x(T.image[Ee],!0,s.maxCubemapSize):$[Ee]=De?T.image[Ee].image:T.image[Ee],$[Ee]=Ce(T,$[Ee]);let ve=$[0],Ie=r.convert(T.format,T.colorSpace),Pe=r.convert(T.type),Te=E(T.internalFormat,Ie,Pe,T.colorSpace),ce=T.isVideoTexture!==!0,Ve=Me.__version===void 0||xe===!0,X=be.dataReady,Re=M(T,ve);ee(i.TEXTURE_CUBE_MAP,T);let re;if(xt){ce&&Ve&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Re,Te,ve.width,ve.height);for(let Ee=0;Ee<6;Ee++){re=$[Ee].mipmaps;for(let Ue=0;Ue<re.length;Ue++){let Fe=re[Ue];T.format!==ui?Ie!==null?ce?X&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,Ue,0,0,Fe.width,Fe.height,Ie,Fe.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,Ue,Te,Fe.width,Fe.height,0,Fe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ce?X&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,Ue,0,0,Fe.width,Fe.height,Ie,Pe,Fe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,Ue,Te,Fe.width,Fe.height,0,Ie,Pe,Fe.data)}}}else{if(re=T.mipmaps,ce&&Ve){re.length>0&&Re++;let Ee=we($[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Re,Te,Ee.width,Ee.height)}for(let Ee=0;Ee<6;Ee++)if(De){ce?X&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0,0,0,$[Ee].width,$[Ee].height,Ie,Pe,$[Ee].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0,Te,$[Ee].width,$[Ee].height,0,Ie,Pe,$[Ee].data);for(let Ue=0;Ue<re.length;Ue++){let ht=re[Ue].image[Ee].image;ce?X&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,Ue+1,0,0,ht.width,ht.height,Ie,Pe,ht.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,Ue+1,Te,ht.width,ht.height,0,Ie,Pe,ht.data)}}else{ce?X&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0,0,0,Ie,Pe,$[Ee]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0,Te,Ie,Pe,$[Ee]);for(let Ue=0;Ue<re.length;Ue++){let Fe=re[Ue];ce?X&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,Ue+1,0,0,Ie,Pe,Fe.image[Ee]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,Ue+1,Te,Ie,Pe,Fe.image[Ee])}}}m(T)&&u(i.TEXTURE_CUBE_MAP),Me.__version=be.version,T.onUpdate&&T.onUpdate(T)}U.__version=T.version}function ae(U,T,K,xe,be,Me){let We=r.convert(K.format,K.colorSpace),Oe=r.convert(K.type),qe=E(K.internalFormat,We,Oe,K.colorSpace);if(!n.get(T).__hasExternalTextures){let De=Math.max(1,T.width>>Me),$=Math.max(1,T.height>>Me);be===i.TEXTURE_3D||be===i.TEXTURE_2D_ARRAY?t.texImage3D(be,Me,qe,De,$,T.depth,0,We,Oe,null):t.texImage2D(be,Me,qe,De,$,0,We,Oe,null)}t.bindFramebuffer(i.FRAMEBUFFER,U),he(T)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,xe,be,n.get(K).__webglTexture,0,ne(T)):(be===i.TEXTURE_2D||be>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&be<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,xe,be,n.get(K).__webglTexture,Me),t.bindFramebuffer(i.FRAMEBUFFER,null)}function V(U,T,K){if(i.bindRenderbuffer(i.RENDERBUFFER,U),T.depthBuffer){let xe=T.depthTexture,be=xe&&xe.isDepthTexture?xe.type:null,Me=y(T.stencilBuffer,be),We=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Oe=ne(T);he(T)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Oe,Me,T.width,T.height):K?i.renderbufferStorageMultisample(i.RENDERBUFFER,Oe,Me,T.width,T.height):i.renderbufferStorage(i.RENDERBUFFER,Me,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,We,i.RENDERBUFFER,U)}else{let xe=T.textures;for(let be=0;be<xe.length;be++){let Me=xe[be],We=r.convert(Me.format,Me.colorSpace),Oe=r.convert(Me.type),qe=E(Me.internalFormat,We,Oe,Me.colorSpace),xt=ne(T);K&&he(T)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,xt,qe,T.width,T.height):he(T)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,xt,qe,T.width,T.height):i.renderbufferStorage(i.RENDERBUFFER,qe,T.width,T.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function W(U,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,U),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(T.depthTexture).__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),G(T.depthTexture,0);let xe=n.get(T.depthTexture).__webglTexture,be=ne(T);if(T.depthTexture.format===Wr)he(T)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,xe,0,be):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,xe,0);else if(T.depthTexture.format===Jr)he(T)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,xe,0,be):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,xe,0);else throw new Error("Unknown depthTexture format")}function Z(U){let T=n.get(U),K=U.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==U.depthTexture){let xe=U.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),xe){let be=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,xe.removeEventListener("dispose",be)};xe.addEventListener("dispose",be),T.__depthDisposeCallback=be}T.__boundDepthTexture=xe}if(U.depthTexture&&!T.__autoAllocateDepthBuffer){if(K)throw new Error("target.depthTexture not supported in Cube render targets");W(T.__webglFramebuffer,U)}else if(K){T.__webglDepthbuffer=[];for(let xe=0;xe<6;xe++)if(t.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer[xe]),T.__webglDepthbuffer[xe]===void 0)T.__webglDepthbuffer[xe]=i.createRenderbuffer(),V(T.__webglDepthbuffer[xe],U,!1);else{let be=U.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Me=T.__webglDepthbuffer[xe];i.bindRenderbuffer(i.RENDERBUFFER,Me),i.framebufferRenderbuffer(i.FRAMEBUFFER,be,i.RENDERBUFFER,Me)}}else if(t.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=i.createRenderbuffer(),V(T.__webglDepthbuffer,U,!1);else{let xe=U.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,be=T.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,be),i.framebufferRenderbuffer(i.FRAMEBUFFER,xe,i.RENDERBUFFER,be)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function ge(U,T,K){let xe=n.get(U);T!==void 0&&ae(xe.__webglFramebuffer,U,U.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),K!==void 0&&Z(U)}function Ae(U){let T=U.texture,K=n.get(U),xe=n.get(T);U.addEventListener("dispose",A);let be=U.textures,Me=U.isWebGLCubeRenderTarget===!0,We=be.length>1;if(We||(xe.__webglTexture===void 0&&(xe.__webglTexture=i.createTexture()),xe.__version=T.version,o.memory.textures++),Me){K.__webglFramebuffer=[];for(let Oe=0;Oe<6;Oe++)if(T.mipmaps&&T.mipmaps.length>0){K.__webglFramebuffer[Oe]=[];for(let qe=0;qe<T.mipmaps.length;qe++)K.__webglFramebuffer[Oe][qe]=i.createFramebuffer()}else K.__webglFramebuffer[Oe]=i.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){K.__webglFramebuffer=[];for(let Oe=0;Oe<T.mipmaps.length;Oe++)K.__webglFramebuffer[Oe]=i.createFramebuffer()}else K.__webglFramebuffer=i.createFramebuffer();if(We)for(let Oe=0,qe=be.length;Oe<qe;Oe++){let xt=n.get(be[Oe]);xt.__webglTexture===void 0&&(xt.__webglTexture=i.createTexture(),o.memory.textures++)}if(U.samples>0&&he(U)===!1){K.__webglMultisampledFramebuffer=i.createFramebuffer(),K.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,K.__webglMultisampledFramebuffer);for(let Oe=0;Oe<be.length;Oe++){let qe=be[Oe];K.__webglColorRenderbuffer[Oe]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,K.__webglColorRenderbuffer[Oe]);let xt=r.convert(qe.format,qe.colorSpace),De=r.convert(qe.type),$=E(qe.internalFormat,xt,De,qe.colorSpace,U.isXRRenderTarget===!0),ve=ne(U);i.renderbufferStorageMultisample(i.RENDERBUFFER,ve,$,U.width,U.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Oe,i.RENDERBUFFER,K.__webglColorRenderbuffer[Oe])}i.bindRenderbuffer(i.RENDERBUFFER,null),U.depthBuffer&&(K.__webglDepthRenderbuffer=i.createRenderbuffer(),V(K.__webglDepthRenderbuffer,U,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Me){t.bindTexture(i.TEXTURE_CUBE_MAP,xe.__webglTexture),ee(i.TEXTURE_CUBE_MAP,T);for(let Oe=0;Oe<6;Oe++)if(T.mipmaps&&T.mipmaps.length>0)for(let qe=0;qe<T.mipmaps.length;qe++)ae(K.__webglFramebuffer[Oe][qe],U,T,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Oe,qe);else ae(K.__webglFramebuffer[Oe],U,T,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Oe,0);m(T)&&u(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(We){for(let Oe=0,qe=be.length;Oe<qe;Oe++){let xt=be[Oe],De=n.get(xt);t.bindTexture(i.TEXTURE_2D,De.__webglTexture),ee(i.TEXTURE_2D,xt),ae(K.__webglFramebuffer,U,xt,i.COLOR_ATTACHMENT0+Oe,i.TEXTURE_2D,0),m(xt)&&u(i.TEXTURE_2D)}t.unbindTexture()}else{let Oe=i.TEXTURE_2D;if((U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(Oe=U.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Oe,xe.__webglTexture),ee(Oe,T),T.mipmaps&&T.mipmaps.length>0)for(let qe=0;qe<T.mipmaps.length;qe++)ae(K.__webglFramebuffer[qe],U,T,i.COLOR_ATTACHMENT0,Oe,qe);else ae(K.__webglFramebuffer,U,T,i.COLOR_ATTACHMENT0,Oe,0);m(T)&&u(Oe),t.unbindTexture()}U.depthBuffer&&Z(U)}function de(U){let T=U.textures;for(let K=0,xe=T.length;K<xe;K++){let be=T[K];if(m(be)){let Me=U.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,We=n.get(be).__webglTexture;t.bindTexture(Me,We),u(Me),t.unbindTexture()}}}let Q=[],P=[];function _e(U){if(U.samples>0){if(he(U)===!1){let T=U.textures,K=U.width,xe=U.height,be=i.COLOR_BUFFER_BIT,Me=U.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,We=n.get(U),Oe=T.length>1;if(Oe)for(let qe=0;qe<T.length;qe++)t.bindFramebuffer(i.FRAMEBUFFER,We.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+qe,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,We.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+qe,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,We.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,We.__webglFramebuffer);for(let qe=0;qe<T.length;qe++){if(U.resolveDepthBuffer&&(U.depthBuffer&&(be|=i.DEPTH_BUFFER_BIT),U.stencilBuffer&&U.resolveStencilBuffer&&(be|=i.STENCIL_BUFFER_BIT)),Oe){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,We.__webglColorRenderbuffer[qe]);let xt=n.get(T[qe]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,xt,0)}i.blitFramebuffer(0,0,K,xe,0,0,K,xe,be,i.NEAREST),c===!0&&(Q.length=0,P.length=0,Q.push(i.COLOR_ATTACHMENT0+qe),U.depthBuffer&&U.resolveDepthBuffer===!1&&(Q.push(Me),P.push(Me),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,P)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Q))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Oe)for(let qe=0;qe<T.length;qe++){t.bindFramebuffer(i.FRAMEBUFFER,We.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+qe,i.RENDERBUFFER,We.__webglColorRenderbuffer[qe]);let xt=n.get(T[qe]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,We.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+qe,i.TEXTURE_2D,xt,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,We.__webglMultisampledFramebuffer)}else if(U.depthBuffer&&U.resolveDepthBuffer===!1&&c){let T=U.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[T])}}}function ne(U){return Math.min(s.maxSamples,U.samples)}function he(U){let T=n.get(U);return U.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function me(U){let T=o.render.frame;h.get(U)!==T&&(h.set(U,T),U.update())}function Ce(U,T){let K=U.colorSpace,xe=U.format,be=U.type;return U.isCompressedTexture===!0||U.isVideoTexture===!0||K!==Fs&&K!==Rs&&(Gt.getTransfer(K)===sn?(xe!==ui||be!==us)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",K)),T}function we(U){return typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement?(l.width=U.naturalWidth||U.width,l.height=U.naturalHeight||U.height):typeof VideoFrame<"u"&&U instanceof VideoFrame?(l.width=U.displayWidth,l.height=U.displayHeight):(l.width=U.width,l.height=U.height),l}this.allocateTextureUnit=F,this.resetTextureUnits=b,this.setTexture2D=G,this.setTexture2DArray=H,this.setTexture3D=J,this.setTextureCube=ye,this.rebindTextures=ge,this.setupRenderTarget=Ae,this.updateRenderTargetMipmap=de,this.updateMultisampleRenderTarget=_e,this.setupDepthRenderbuffer=Z,this.setupFrameBufferTexture=ae,this.useMultisampledRTT=he}function A2(i,e){function t(n,s=Rs){let r,o=Gt.getTransfer(s);if(n===us)return i.UNSIGNED_BYTE;if(n===ju)return i.UNSIGNED_SHORT_4_4_4_4;if(n===ed)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Vp)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Bp)return i.BYTE;if(n===kp)return i.SHORT;if(n===Jo)return i.UNSIGNED_SHORT;if(n===Qu)return i.INT;if(n===or)return i.UNSIGNED_INT;if(n===$i)return i.FLOAT;if(n===ua)return i.HALF_FLOAT;if(n===Gp)return i.ALPHA;if(n===Wp)return i.RGB;if(n===ui)return i.RGBA;if(n===Xp)return i.LUMINANCE;if(n===qp)return i.LUMINANCE_ALPHA;if(n===Wr)return i.DEPTH_COMPONENT;if(n===Jr)return i.DEPTH_STENCIL;if(n===td)return i.RED;if(n===nd)return i.RED_INTEGER;if(n===Yp)return i.RG;if(n===id)return i.RG_INTEGER;if(n===sd)return i.RGBA_INTEGER;if(n===pc||n===mc||n===gc||n===xc)if(o===sn)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===pc)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===mc)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===gc)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===xc)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===pc)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===mc)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===gc)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===xc)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===kh||n===Vh||n===Gh||n===Wh)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===kh)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Vh)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Gh)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Wh)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Xh||n===qh||n===Yh)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Xh||n===qh)return o===sn?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Yh)return o===sn?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Zh||n===$h||n===Kh||n===Jh||n===Qh||n===jh||n===eu||n===tu||n===nu||n===iu||n===su||n===ru||n===ou||n===au)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Zh)return o===sn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===$h)return o===sn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Kh)return o===sn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Jh)return o===sn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Qh)return o===sn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===jh)return o===sn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===eu)return o===sn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===tu)return o===sn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===nu)return o===sn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===iu)return o===sn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===su)return o===sn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ru)return o===sn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===ou)return o===sn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===au)return o===sn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===yc||n===cu||n===lu)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===yc)return o===sn?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===cu)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===lu)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Zp||n===hu||n===uu||n===du)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===yc)return r.COMPRESSED_RED_RGTC1_EXT;if(n===hu)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===uu)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===du)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Kr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var Tu=class extends Fn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},Se=class extends Nt{constructor(){super(),this.isGroup=!0,this.type="Group"}},C2={type:"move"},Yo=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Se,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Se,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new w,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new w),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Se,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new w,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new w),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(let x of e.hand.values()){let m=t.getJointPose(x,n),u=this._getHandJoint(l,x);m!==null&&(u.matrix.fromArray(m.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=m.radius),u.visible=m!==null}let h=l.joints["index-finger-tip"],p=l.joints["thumb-tip"],f=h.position.distanceTo(p.position),d=.02,g=.005;l.inputState.pinching&&f>d+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&f<=d-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(C2)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Se;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},P2=`
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

}`,Ru=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){let s=new Kn,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Ji({vertexShader:P2,fragmentShader:I2,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new lt(new Mt(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Au=class extends Is{constructor(e,t){super();let n=this,s=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,p=null,f=null,d=null,g=null,x=new Ru,m=t.getContextAttributes(),u=null,E=null,y=[],M=[],I=new Ne,A=null,S=new Fn;S.layers.enable(1),S.viewport=new Yt;let C=new Fn;C.layers.enable(2),C.viewport=new Yt;let Y=[S,C],v=new Tu;v.layers.enable(1),v.layers.enable(2);let b=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(O){let ae=y[O];return ae===void 0&&(ae=new Yo,y[O]=ae),ae.getTargetRaySpace()},this.getControllerGrip=function(O){let ae=y[O];return ae===void 0&&(ae=new Yo,y[O]=ae),ae.getGripSpace()},this.getHand=function(O){let ae=y[O];return ae===void 0&&(ae=new Yo,y[O]=ae),ae.getHandSpace()};function B(O){let ae=M.indexOf(O.inputSource);if(ae===-1)return;let V=y[ae];V!==void 0&&(V.update(O.inputSource,O.frame,l||o),V.dispatchEvent({type:O.type,data:O.inputSource}))}function G(){s.removeEventListener("select",B),s.removeEventListener("selectstart",B),s.removeEventListener("selectend",B),s.removeEventListener("squeeze",B),s.removeEventListener("squeezestart",B),s.removeEventListener("squeezeend",B),s.removeEventListener("end",G),s.removeEventListener("inputsourceschange",H);for(let O=0;O<y.length;O++){let ae=M[O];ae!==null&&(M[O]=null,y[O].disconnect(ae))}b=null,F=null,x.reset(),e.setRenderTarget(u),d=null,f=null,p=null,s=null,E=null,j.stop(),n.isPresenting=!1,e.setPixelRatio(A),e.setSize(I.width,I.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(O){r=O,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(O){a=O,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(O){l=O},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return p},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(O){if(s=O,s!==null){if(u=e.getRenderTarget(),s.addEventListener("select",B),s.addEventListener("selectstart",B),s.addEventListener("selectend",B),s.addEventListener("squeeze",B),s.addEventListener("squeezestart",B),s.addEventListener("squeezeend",B),s.addEventListener("end",G),s.addEventListener("inputsourceschange",H),m.xrCompatible!==!0&&await t.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(I),s.renderState.layers===void 0){let ae={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,t,ae),s.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),E=new ds(d.framebufferWidth,d.framebufferHeight,{format:ui,type:us,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let ae=null,V=null,W=null;m.depth&&(W=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ae=m.stencil?Jr:Wr,V=m.stencil?Kr:or);let Z={colorFormat:t.RGBA8,depthFormat:W,scaleFactor:r};p=new XRWebGLBinding(s,t),f=p.createProjectionLayer(Z),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),E=new ds(f.textureWidth,f.textureHeight,{format:ui,type:us,depthTexture:new Dc(f.textureWidth,f.textureHeight,V,void 0,void 0,void 0,void 0,void 0,void 0,ae),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),j.setContext(s),j.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function H(O){for(let ae=0;ae<O.removed.length;ae++){let V=O.removed[ae],W=M.indexOf(V);W>=0&&(M[W]=null,y[W].disconnect(V))}for(let ae=0;ae<O.added.length;ae++){let V=O.added[ae],W=M.indexOf(V);if(W===-1){for(let ge=0;ge<y.length;ge++)if(ge>=M.length){M.push(V),W=ge;break}else if(M[ge]===null){M[ge]=V,W=ge;break}if(W===-1)break}let Z=y[W];Z&&Z.connect(V)}}let J=new w,ye=new w;function ie(O,ae,V){J.setFromMatrixPosition(ae.matrixWorld),ye.setFromMatrixPosition(V.matrixWorld);let W=J.distanceTo(ye),Z=ae.projectionMatrix.elements,ge=V.projectionMatrix.elements,Ae=Z[14]/(Z[10]-1),de=Z[14]/(Z[10]+1),Q=(Z[9]+1)/Z[5],P=(Z[9]-1)/Z[5],_e=(Z[8]-1)/Z[0],ne=(ge[8]+1)/ge[0],he=Ae*_e,me=Ae*ne,Ce=W/(-_e+ne),we=Ce*-_e;if(ae.matrixWorld.decompose(O.position,O.quaternion,O.scale),O.translateX(we),O.translateZ(Ce),O.matrixWorld.compose(O.position,O.quaternion,O.scale),O.matrixWorldInverse.copy(O.matrixWorld).invert(),Z[10]===-1)O.projectionMatrix.copy(ae.projectionMatrix),O.projectionMatrixInverse.copy(ae.projectionMatrixInverse);else{let U=Ae+Ce,T=de+Ce,K=he-we,xe=me+(W-we),be=Q*de/T*U,Me=P*de/T*U;O.projectionMatrix.makePerspective(K,xe,be,Me,U,T),O.projectionMatrixInverse.copy(O.projectionMatrix).invert()}}function fe(O,ae){ae===null?O.matrixWorld.copy(O.matrix):O.matrixWorld.multiplyMatrices(ae.matrixWorld,O.matrix),O.matrixWorldInverse.copy(O.matrixWorld).invert()}this.updateCamera=function(O){if(s===null)return;let ae=O.near,V=O.far;x.texture!==null&&(x.depthNear>0&&(ae=x.depthNear),x.depthFar>0&&(V=x.depthFar)),v.near=C.near=S.near=ae,v.far=C.far=S.far=V,(b!==v.near||F!==v.far)&&(s.updateRenderState({depthNear:v.near,depthFar:v.far}),b=v.near,F=v.far);let W=O.parent,Z=v.cameras;fe(v,W);for(let ge=0;ge<Z.length;ge++)fe(Z[ge],W);Z.length===2?ie(v,S,C):v.projectionMatrix.copy(S.projectionMatrix),N(O,v,W)};function N(O,ae,V){V===null?O.matrix.copy(ae.matrixWorld):(O.matrix.copy(V.matrixWorld),O.matrix.invert(),O.matrix.multiply(ae.matrixWorld)),O.matrix.decompose(O.position,O.quaternion,O.scale),O.updateMatrixWorld(!0),O.projectionMatrix.copy(ae.projectionMatrix),O.projectionMatrixInverse.copy(ae.projectionMatrixInverse),O.isPerspectiveCamera&&(O.fov=Qr*2*Math.atan(1/O.projectionMatrix.elements[5]),O.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(f===null&&d===null))return c},this.setFoveation=function(O){c=O,f!==null&&(f.fixedFoveation=O),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=O)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(v)};let ee=null;function oe(O,ae){if(h=ae.getViewerPose(l||o),g=ae,h!==null){let V=h.views;d!==null&&(e.setRenderTargetFramebuffer(E,d.framebuffer),e.setRenderTarget(E));let W=!1;V.length!==v.cameras.length&&(v.cameras.length=0,W=!0);for(let ge=0;ge<V.length;ge++){let Ae=V[ge],de=null;if(d!==null)de=d.getViewport(Ae);else{let P=p.getViewSubImage(f,Ae);de=P.viewport,ge===0&&(e.setRenderTargetTextures(E,P.colorTexture,f.ignoreDepthValues?void 0:P.depthStencilTexture),e.setRenderTarget(E))}let Q=Y[ge];Q===void 0&&(Q=new Fn,Q.layers.enable(ge),Q.viewport=new Yt,Y[ge]=Q),Q.matrix.fromArray(Ae.transform.matrix),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.projectionMatrix.fromArray(Ae.projectionMatrix),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert(),Q.viewport.set(de.x,de.y,de.width,de.height),ge===0&&(v.matrix.copy(Q.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),W===!0&&v.cameras.push(Q)}let Z=s.enabledFeatures;if(Z&&Z.includes("depth-sensing")){let ge=p.getDepthInformation(V[0]);ge&&ge.isValid&&ge.texture&&x.init(e,ge,s.renderState)}}for(let V=0;V<y.length;V++){let W=M[V],Z=y[V];W!==null&&Z!==void 0&&Z.update(W,ae,l||o)}ee&&ee(O,ae),ae.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ae}),g=null}let j=new e0;j.setAnimationLoop(oe),this.setAnimationLoop=function(O){ee=O},this.dispose=function(){}}},js=new ii,L2=new wt;function D2(i,e){function t(m,u){m.matrixAutoUpdate===!0&&m.updateMatrix(),u.value.copy(m.matrix)}function n(m,u){u.color.getRGB(m.fogColor.value,jp(i)),u.isFog?(m.fogNear.value=u.near,m.fogFar.value=u.far):u.isFogExp2&&(m.fogDensity.value=u.density)}function s(m,u,E,y,M){u.isMeshBasicMaterial||u.isMeshLambertMaterial?r(m,u):u.isMeshToonMaterial?(r(m,u),p(m,u)):u.isMeshPhongMaterial?(r(m,u),h(m,u)):u.isMeshStandardMaterial?(r(m,u),f(m,u),u.isMeshPhysicalMaterial&&d(m,u,M)):u.isMeshMatcapMaterial?(r(m,u),g(m,u)):u.isMeshDepthMaterial?r(m,u):u.isMeshDistanceMaterial?(r(m,u),x(m,u)):u.isMeshNormalMaterial?r(m,u):u.isLineBasicMaterial?(o(m,u),u.isLineDashedMaterial&&a(m,u)):u.isPointsMaterial?c(m,u,E,y):u.isSpriteMaterial?l(m,u):u.isShadowMaterial?(m.color.value.copy(u.color),m.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function r(m,u){m.opacity.value=u.opacity,u.color&&m.diffuse.value.copy(u.color),u.emissive&&m.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(m.map.value=u.map,t(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,t(u.alphaMap,m.alphaMapTransform)),u.bumpMap&&(m.bumpMap.value=u.bumpMap,t(u.bumpMap,m.bumpMapTransform),m.bumpScale.value=u.bumpScale,u.side===gn&&(m.bumpScale.value*=-1)),u.normalMap&&(m.normalMap.value=u.normalMap,t(u.normalMap,m.normalMapTransform),m.normalScale.value.copy(u.normalScale),u.side===gn&&m.normalScale.value.negate()),u.displacementMap&&(m.displacementMap.value=u.displacementMap,t(u.displacementMap,m.displacementMapTransform),m.displacementScale.value=u.displacementScale,m.displacementBias.value=u.displacementBias),u.emissiveMap&&(m.emissiveMap.value=u.emissiveMap,t(u.emissiveMap,m.emissiveMapTransform)),u.specularMap&&(m.specularMap.value=u.specularMap,t(u.specularMap,m.specularMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest);let E=e.get(u),y=E.envMap,M=E.envMapRotation;y&&(m.envMap.value=y,js.copy(M),js.x*=-1,js.y*=-1,js.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(js.y*=-1,js.z*=-1),m.envMapRotation.value.setFromMatrix4(L2.makeRotationFromEuler(js)),m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=u.reflectivity,m.ior.value=u.ior,m.refractionRatio.value=u.refractionRatio),u.lightMap&&(m.lightMap.value=u.lightMap,m.lightMapIntensity.value=u.lightMapIntensity,t(u.lightMap,m.lightMapTransform)),u.aoMap&&(m.aoMap.value=u.aoMap,m.aoMapIntensity.value=u.aoMapIntensity,t(u.aoMap,m.aoMapTransform))}function o(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,u.map&&(m.map.value=u.map,t(u.map,m.mapTransform))}function a(m,u){m.dashSize.value=u.dashSize,m.totalSize.value=u.dashSize+u.gapSize,m.scale.value=u.scale}function c(m,u,E,y){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.size.value=u.size*E,m.scale.value=y*.5,u.map&&(m.map.value=u.map,t(u.map,m.uvTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,t(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function l(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.rotation.value=u.rotation,u.map&&(m.map.value=u.map,t(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,t(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function h(m,u){m.specular.value.copy(u.specular),m.shininess.value=Math.max(u.shininess,1e-4)}function p(m,u){u.gradientMap&&(m.gradientMap.value=u.gradientMap)}function f(m,u){m.metalness.value=u.metalness,u.metalnessMap&&(m.metalnessMap.value=u.metalnessMap,t(u.metalnessMap,m.metalnessMapTransform)),m.roughness.value=u.roughness,u.roughnessMap&&(m.roughnessMap.value=u.roughnessMap,t(u.roughnessMap,m.roughnessMapTransform)),u.envMap&&(m.envMapIntensity.value=u.envMapIntensity)}function d(m,u,E){m.ior.value=u.ior,u.sheen>0&&(m.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),m.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(m.sheenColorMap.value=u.sheenColorMap,t(u.sheenColorMap,m.sheenColorMapTransform)),u.sheenRoughnessMap&&(m.sheenRoughnessMap.value=u.sheenRoughnessMap,t(u.sheenRoughnessMap,m.sheenRoughnessMapTransform))),u.clearcoat>0&&(m.clearcoat.value=u.clearcoat,m.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(m.clearcoatMap.value=u.clearcoatMap,t(u.clearcoatMap,m.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,t(u.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(m.clearcoatNormalMap.value=u.clearcoatNormalMap,t(u.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===gn&&m.clearcoatNormalScale.value.negate())),u.dispersion>0&&(m.dispersion.value=u.dispersion),u.iridescence>0&&(m.iridescence.value=u.iridescence,m.iridescenceIOR.value=u.iridescenceIOR,m.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(m.iridescenceMap.value=u.iridescenceMap,t(u.iridescenceMap,m.iridescenceMapTransform)),u.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=u.iridescenceThicknessMap,t(u.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),u.transmission>0&&(m.transmission.value=u.transmission,m.transmissionSamplerMap.value=E.texture,m.transmissionSamplerSize.value.set(E.width,E.height),u.transmissionMap&&(m.transmissionMap.value=u.transmissionMap,t(u.transmissionMap,m.transmissionMapTransform)),m.thickness.value=u.thickness,u.thicknessMap&&(m.thicknessMap.value=u.thicknessMap,t(u.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=u.attenuationDistance,m.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(m.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(m.anisotropyMap.value=u.anisotropyMap,t(u.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=u.specularIntensity,m.specularColor.value.copy(u.specularColor),u.specularColorMap&&(m.specularColorMap.value=u.specularColorMap,t(u.specularColorMap,m.specularColorMapTransform)),u.specularIntensityMap&&(m.specularIntensityMap.value=u.specularIntensityMap,t(u.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,u){u.matcap&&(m.matcap.value=u.matcap)}function x(m,u){let E=e.get(u).light;m.referencePosition.value.setFromMatrixPosition(E.matrixWorld),m.nearDistance.value=E.shadow.camera.near,m.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function U2(i,e,t,n){let s={},r={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(E,y){let M=y.program;n.uniformBlockBinding(E,M)}function l(E,y){let M=s[E.id];M===void 0&&(g(E),M=h(E),s[E.id]=M,E.addEventListener("dispose",m));let I=y.program;n.updateUBOMapping(E,I);let A=e.render.frame;r[E.id]!==A&&(f(E),r[E.id]=A)}function h(E){let y=p();E.__bindingPointIndex=y;let M=i.createBuffer(),I=E.__size,A=E.usage;return i.bindBuffer(i.UNIFORM_BUFFER,M),i.bufferData(i.UNIFORM_BUFFER,I,A),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,y,M),M}function p(){for(let E=0;E<a;E++)if(o.indexOf(E)===-1)return o.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(E){let y=s[E.id],M=E.uniforms,I=E.__cache;i.bindBuffer(i.UNIFORM_BUFFER,y);for(let A=0,S=M.length;A<S;A++){let C=Array.isArray(M[A])?M[A]:[M[A]];for(let Y=0,v=C.length;Y<v;Y++){let b=C[Y];if(d(b,A,Y,I)===!0){let F=b.__offset,B=Array.isArray(b.value)?b.value:[b.value],G=0;for(let H=0;H<B.length;H++){let J=B[H],ye=x(J);typeof J=="number"||typeof J=="boolean"?(b.__data[0]=J,i.bufferSubData(i.UNIFORM_BUFFER,F+G,b.__data)):J.isMatrix3?(b.__data[0]=J.elements[0],b.__data[1]=J.elements[1],b.__data[2]=J.elements[2],b.__data[3]=0,b.__data[4]=J.elements[3],b.__data[5]=J.elements[4],b.__data[6]=J.elements[5],b.__data[7]=0,b.__data[8]=J.elements[6],b.__data[9]=J.elements[7],b.__data[10]=J.elements[8],b.__data[11]=0):(J.toArray(b.__data,G),G+=ye.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,F,b.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(E,y,M,I){let A=E.value,S=y+"_"+M;if(I[S]===void 0)return typeof A=="number"||typeof A=="boolean"?I[S]=A:I[S]=A.clone(),!0;{let C=I[S];if(typeof A=="number"||typeof A=="boolean"){if(C!==A)return I[S]=A,!0}else if(C.equals(A)===!1)return C.copy(A),!0}return!1}function g(E){let y=E.uniforms,M=0,I=16;for(let S=0,C=y.length;S<C;S++){let Y=Array.isArray(y[S])?y[S]:[y[S]];for(let v=0,b=Y.length;v<b;v++){let F=Y[v],B=Array.isArray(F.value)?F.value:[F.value];for(let G=0,H=B.length;G<H;G++){let J=B[G],ye=x(J),ie=M%I,fe=ie%ye.boundary,N=ie+fe;M+=fe,N!==0&&I-N<ye.storage&&(M+=I-N),F.__data=new Float32Array(ye.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=M,M+=ye.storage}}}let A=M%I;return A>0&&(M+=I-A),E.__size=M,E.__cache={},this}function x(E){let y={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(y.boundary=4,y.storage=4):E.isVector2?(y.boundary=8,y.storage=8):E.isVector3||E.isColor?(y.boundary=16,y.storage=12):E.isVector4?(y.boundary=16,y.storage=16):E.isMatrix3?(y.boundary=48,y.storage=48):E.isMatrix4?(y.boundary=64,y.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),y}function m(E){let y=E.target;y.removeEventListener("dispose",m);let M=o.indexOf(y.__bindingPointIndex);o.splice(M,1),i.deleteBuffer(s[y.id]),delete s[y.id],delete r[y.id]}function u(){for(let E in s)i.deleteBuffer(s[E]);o=[],s={},r={}}return{bind:c,update:l,dispose:u}}var Uc=class{constructor(e={}){let{canvas:t=F1(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:p=!1}=e;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;let d=new Uint32Array(4),g=new Int32Array(4),x=null,m=null,u=[],E=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ft,this.toneMapping=Cs,this.toneMappingExposure=1;let y=this,M=!1,I=0,A=0,S=null,C=-1,Y=null,v=new Yt,b=new Yt,F=null,B=new ut(0),G=0,H=t.width,J=t.height,ye=1,ie=null,fe=null,N=new Yt(0,0,H,J),ee=new Yt(0,0,H,J),oe=!1,j=new ta,O=!1,ae=!1,V=new wt,W=new wt,Z=new w,ge=new Yt,Ae={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},de=!1;function Q(){return S===null?ye:1}let P=n;function _e(L,te){return t.getContext(L,te)}try{let L={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:p};if("setAttribute"in t&&t.setAttribute("data-engine","three.js r169"),t.addEventListener("webglcontextlost",Ee,!1),t.addEventListener("webglcontextrestored",Ue,!1),t.addEventListener("webglcontextcreationerror",Fe,!1),P===null){let te="webgl2";if(P=_e(te,L),P===null)throw _e(te)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(L){throw console.error("THREE.WebGLRenderer: "+L.message),L}let ne,he,me,Ce,we,U,T,K,xe,be,Me,We,Oe,qe,xt,De,$,ve,Ie,Pe,Te,ce,Ve,X;function Re(){ne=new Kv(P),ne.init(),ce=new A2(P,ne),he=new Wv(P,ne,e,ce),me=new b2(P),he.reverseDepthBuffer&&me.buffers.depth.setReversed(!0),Ce=new jv(P),we=new d2,U=new R2(P,ne,me,we,he,ce,Ce),T=new qv(y),K=new $v(y),xe=new ox(P),Ve=new Vv(P,xe),be=new Jv(P,xe,Ce,Ve),Me=new t_(P,be,xe,Ce),Ie=new e_(P,he,U),De=new Xv(we),We=new u2(y,T,K,ne,he,Ve,De),Oe=new D2(y,we),qe=new p2,xt=new _2(ne),ve=new kv(y,T,K,me,Me,f,c),$=new S2(y,Me,he),X=new U2(P,Ce,he,me),Pe=new Gv(P,ne,Ce),Te=new Qv(P,ne,Ce),Ce.programs=We.programs,y.capabilities=he,y.extensions=ne,y.properties=we,y.renderLists=qe,y.shadowMap=$,y.state=me,y.info=Ce}Re();let re=new Au(y,P);this.xr=re,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){let L=ne.get("WEBGL_lose_context");L&&L.loseContext()},this.forceContextRestore=function(){let L=ne.get("WEBGL_lose_context");L&&L.restoreContext()},this.getPixelRatio=function(){return ye},this.setPixelRatio=function(L){L!==void 0&&(ye=L,this.setSize(H,J,!1))},this.getSize=function(L){return L.set(H,J)},this.setSize=function(L,te,le=!0){if(re.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}H=L,J=te,t.width=Math.floor(L*ye),t.height=Math.floor(te*ye),le===!0&&(t.style.width=L+"px",t.style.height=te+"px"),this.setViewport(0,0,L,te)},this.getDrawingBufferSize=function(L){return L.set(H*ye,J*ye).floor()},this.setDrawingBufferSize=function(L,te,le){H=L,J=te,ye=le,t.width=Math.floor(L*le),t.height=Math.floor(te*le),this.setViewport(0,0,L,te)},this.getCurrentViewport=function(L){return L.copy(v)},this.getViewport=function(L){return L.copy(N)},this.setViewport=function(L,te,le,pe){L.isVector4?N.set(L.x,L.y,L.z,L.w):N.set(L,te,le,pe),me.viewport(v.copy(N).multiplyScalar(ye).round())},this.getScissor=function(L){return L.copy(ee)},this.setScissor=function(L,te,le,pe){L.isVector4?ee.set(L.x,L.y,L.z,L.w):ee.set(L,te,le,pe),me.scissor(b.copy(ee).multiplyScalar(ye).round())},this.getScissorTest=function(){return oe},this.setScissorTest=function(L){me.setScissorTest(oe=L)},this.setOpaqueSort=function(L){ie=L},this.setTransparentSort=function(L){fe=L},this.getClearColor=function(L){return L.copy(ve.getClearColor())},this.setClearColor=function(){ve.setClearColor.apply(ve,arguments)},this.getClearAlpha=function(){return ve.getClearAlpha()},this.setClearAlpha=function(){ve.setClearAlpha.apply(ve,arguments)},this.clear=function(L=!0,te=!0,le=!0){let pe=0;if(L){let se=!1;if(S!==null){let Le=S.texture.format;se=Le===sd||Le===id||Le===nd}if(se){let Le=S.texture.type,Xe=Le===us||Le===or||Le===Jo||Le===Kr||Le===ju||Le===ed,Qe=ve.getClearColor(),et=ve.getClearAlpha(),rt=Qe.r,at=Qe.g,Ke=Qe.b;Xe?(d[0]=rt,d[1]=at,d[2]=Ke,d[3]=et,P.clearBufferuiv(P.COLOR,0,d)):(g[0]=rt,g[1]=at,g[2]=Ke,g[3]=et,P.clearBufferiv(P.COLOR,0,g))}else pe|=P.COLOR_BUFFER_BIT}te&&(pe|=P.DEPTH_BUFFER_BIT,P.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),le&&(pe|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),P.clear(pe)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Ee,!1),t.removeEventListener("webglcontextrestored",Ue,!1),t.removeEventListener("webglcontextcreationerror",Fe,!1),qe.dispose(),xt.dispose(),we.dispose(),T.dispose(),K.dispose(),Me.dispose(),Ve.dispose(),X.dispose(),We.dispose(),re.dispose(),re.removeEventListener("sessionstart",nt),re.removeEventListener("sessionend",ot),St.stop()};function Ee(L){L.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),M=!0}function Ue(){console.log("THREE.WebGLRenderer: Context Restored."),M=!1;let L=Ce.autoReset,te=$.enabled,le=$.autoUpdate,pe=$.needsUpdate,se=$.type;Re(),Ce.autoReset=L,$.enabled=te,$.autoUpdate=le,$.needsUpdate=pe,$.type=se}function Fe(L){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",L.statusMessage)}function ht(L){let te=L.target;te.removeEventListener("dispose",ht),Dt(te)}function Dt(L){Ye(L),we.remove(L)}function Ye(L){let te=we.get(L).programs;te!==void 0&&(te.forEach(function(le){We.releaseProgram(le)}),L.isShaderMaterial&&We.releaseShaderCache(L))}this.renderBufferDirect=function(L,te,le,pe,se,Le){te===null&&(te=Ae);let Xe=se.isMesh&&se.matrixWorld.determinant()<0,Qe=_n(L,te,le,pe,se);me.setMaterial(pe,Xe);let et=le.index,rt=1;if(pe.wireframe===!0){if(et=be.getWireframeAttribute(le),et===void 0)return;rt=2}let at=le.drawRange,Ke=le.attributes.position,Tt=at.start*rt,yt=(at.start+at.count)*rt;Le!==null&&(Tt=Math.max(Tt,Le.start*rt),yt=Math.min(yt,(Le.start+Le.count)*rt)),et!==null?(Tt=Math.max(Tt,0),yt=Math.min(yt,et.count)):Ke!=null&&(Tt=Math.max(Tt,0),yt=Math.min(yt,Ke.count));let Ot=yt-Tt;if(Ot<0||Ot===1/0)return;Ve.setup(se,pe,Qe,le,et);let Pn,Ut=Pe;if(et!==null&&(Pn=xe.get(et),Ut=Te,Ut.setIndex(Pn)),se.isMesh)pe.wireframe===!0?(me.setLineWidth(pe.wireframeLinewidth*Q()),Ut.setMode(P.LINES)):Ut.setMode(P.TRIANGLES);else if(se.isLine){let st=pe.linewidth;st===void 0&&(st=1),me.setLineWidth(st*Q()),se.isLineSegments?Ut.setMode(P.LINES):se.isLineLoop?Ut.setMode(P.LINE_LOOP):Ut.setMode(P.LINE_STRIP)}else se.isPoints?Ut.setMode(P.POINTS):se.isSprite&&Ut.setMode(P.TRIANGLES);if(se.isBatchedMesh)if(se._multiDrawInstances!==null)Ut.renderMultiDrawInstances(se._multiDrawStarts,se._multiDrawCounts,se._multiDrawCount,se._multiDrawInstances);else if(ne.get("WEBGL_multi_draw"))Ut.renderMultiDraw(se._multiDrawStarts,se._multiDrawCounts,se._multiDrawCount);else{let st=se._multiDrawStarts,zt=se._multiDrawCounts,He=se._multiDrawCount,Ze=et?xe.get(et).bytesPerElement:1,Mn=we.get(pe).currentProgram.getUniforms();for(let tn=0;tn<He;tn++)Mn.setValue(P,"_gl_DrawID",tn),Ut.render(st[tn]/Ze,zt[tn])}else if(se.isInstancedMesh)Ut.renderInstances(Tt,Ot,se.count);else if(le.isInstancedBufferGeometry){let st=le._maxInstanceCount!==void 0?le._maxInstanceCount:1/0,zt=Math.min(le.instanceCount,st);Ut.renderInstances(Tt,Ot,zt)}else Ut.render(Tt,Ot)};function ze(L,te,le){L.transparent===!0&&L.side===It&&L.forceSinglePass===!1?(L.side=gn,L.needsUpdate=!0,At(L,te,le),L.side=Ki,L.needsUpdate=!0,At(L,te,le),L.side=It):At(L,te,le)}this.compile=function(L,te,le=null){le===null&&(le=L),m=xt.get(le),m.init(te),E.push(m),le.traverseVisible(function(se){se.isLight&&se.layers.test(te.layers)&&(m.pushLight(se),se.castShadow&&m.pushShadow(se))}),L!==le&&L.traverseVisible(function(se){se.isLight&&se.layers.test(te.layers)&&(m.pushLight(se),se.castShadow&&m.pushShadow(se))}),m.setupLights();let pe=new Set;return L.traverse(function(se){if(!(se.isMesh||se.isPoints||se.isLine||se.isSprite))return;let Le=se.material;if(Le)if(Array.isArray(Le))for(let Xe=0;Xe<Le.length;Xe++){let Qe=Le[Xe];ze(Qe,le,se),pe.add(Qe)}else ze(Le,le,se),pe.add(Le)}),E.pop(),m=null,pe},this.compileAsync=function(L,te,le=null){let pe=this.compile(L,te,le);return new Promise(se=>{function Le(){if(pe.forEach(function(Xe){we.get(Xe).currentProgram.isReady()&&pe.delete(Xe)}),pe.size===0){se(L);return}setTimeout(Le,10)}ne.get("KHR_parallel_shader_compile")!==null?Le():setTimeout(Le,10)})};let ke=null;function it(L){ke&&ke(L)}function nt(){St.stop()}function ot(){St.start()}let St=new e0;St.setAnimationLoop(it),typeof self<"u"&&St.setContext(self),this.setAnimationLoop=function(L){ke=L,re.setAnimationLoop(L),L===null?St.stop():St.start()},re.addEventListener("sessionstart",nt),re.addEventListener("sessionend",ot),this.render=function(L,te){if(te!==void 0&&te.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(M===!0)return;if(L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),te.parent===null&&te.matrixWorldAutoUpdate===!0&&te.updateMatrixWorld(),re.enabled===!0&&re.isPresenting===!0&&(re.cameraAutoUpdate===!0&&re.updateCamera(te),te=re.getCamera()),L.isScene===!0&&L.onBeforeRender(y,L,te,S),m=xt.get(L,E.length),m.init(te),E.push(m),W.multiplyMatrices(te.projectionMatrix,te.matrixWorldInverse),j.setFromProjectionMatrix(W),ae=this.localClippingEnabled,O=De.init(this.clippingPlanes,ae),x=qe.get(L,u.length),x.init(),u.push(x),re.enabled===!0&&re.isPresenting===!0){let Le=y.xr.getDepthSensingMesh();Le!==null&&Wt(Le,te,-1/0,y.sortObjects)}Wt(L,te,0,y.sortObjects),x.finish(),y.sortObjects===!0&&x.sort(ie,fe),de=re.enabled===!1||re.isPresenting===!1||re.hasDepthSensing()===!1,de&&ve.addToRenderList(x,L),this.info.render.frame++,O===!0&&De.beginShadows();let le=m.state.shadowsArray;$.render(le,L,te),O===!0&&De.endShadows(),this.info.autoReset===!0&&this.info.reset();let pe=x.opaque,se=x.transmissive;if(m.setupLights(),te.isArrayCamera){let Le=te.cameras;if(se.length>0)for(let Xe=0,Qe=Le.length;Xe<Qe;Xe++){let et=Le[Xe];hn(pe,se,L,et)}de&&ve.render(L);for(let Xe=0,Qe=Le.length;Xe<Qe;Xe++){let et=Le[Xe];en(x,L,et,et.viewport)}}else se.length>0&&hn(pe,se,L,te),de&&ve.render(L),en(x,L,te);S!==null&&(U.updateMultisampleRenderTarget(S),U.updateRenderTargetMipmap(S)),L.isScene===!0&&L.onAfterRender(y,L,te),Ve.resetDefaultState(),C=-1,Y=null,E.pop(),E.length>0?(m=E[E.length-1],O===!0&&De.setGlobalState(y.clippingPlanes,m.state.camera)):m=null,u.pop(),u.length>0?x=u[u.length-1]:x=null};function Wt(L,te,le,pe){if(L.visible===!1)return;if(L.layers.test(te.layers)){if(L.isGroup)le=L.renderOrder;else if(L.isLOD)L.autoUpdate===!0&&L.update(te);else if(L.isLight)m.pushLight(L),L.castShadow&&m.pushShadow(L);else if(L.isSprite){if(!L.frustumCulled||j.intersectsSprite(L)){pe&&ge.setFromMatrixPosition(L.matrixWorld).applyMatrix4(W);let Xe=Me.update(L),Qe=L.material;Qe.visible&&x.push(L,Xe,Qe,le,ge.z,null)}}else if((L.isMesh||L.isLine||L.isPoints)&&(!L.frustumCulled||j.intersectsObject(L))){let Xe=Me.update(L),Qe=L.material;if(pe&&(L.boundingSphere!==void 0?(L.boundingSphere===null&&L.computeBoundingSphere(),ge.copy(L.boundingSphere.center)):(Xe.boundingSphere===null&&Xe.computeBoundingSphere(),ge.copy(Xe.boundingSphere.center)),ge.applyMatrix4(L.matrixWorld).applyMatrix4(W)),Array.isArray(Qe)){let et=Xe.groups;for(let rt=0,at=et.length;rt<at;rt++){let Ke=et[rt],Tt=Qe[Ke.materialIndex];Tt&&Tt.visible&&x.push(L,Xe,Tt,le,ge.z,Ke)}}else Qe.visible&&x.push(L,Xe,Qe,le,ge.z,null)}}let Le=L.children;for(let Xe=0,Qe=Le.length;Xe<Qe;Xe++)Wt(Le[Xe],te,le,pe)}function en(L,te,le,pe){let se=L.opaque,Le=L.transmissive,Xe=L.transparent;m.setupLightsView(le),O===!0&&De.setGlobalState(y.clippingPlanes,le),pe&&me.viewport(v.copy(pe)),se.length>0&&vn(se,te,le),Le.length>0&&vn(Le,te,le),Xe.length>0&&vn(Xe,te,le),me.buffers.depth.setTest(!0),me.buffers.depth.setMask(!0),me.buffers.color.setMask(!0),me.setPolygonOffset(!1)}function hn(L,te,le,pe){if((le.isScene===!0?le.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[pe.id]===void 0&&(m.state.transmissionRenderTarget[pe.id]=new ds(1,1,{generateMipmaps:!0,type:ne.has("EXT_color_buffer_half_float")||ne.has("EXT_color_buffer_float")?ua:us,minFilter:Fi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Gt.workingColorSpace}));let Le=m.state.transmissionRenderTarget[pe.id],Xe=pe.viewport||v;Le.setSize(Xe.z,Xe.w);let Qe=y.getRenderTarget();y.setRenderTarget(Le),y.getClearColor(B),G=y.getClearAlpha(),G<1&&y.setClearColor(16777215,.5),y.clear(),de&&ve.render(le);let et=y.toneMapping;y.toneMapping=Cs;let rt=pe.viewport;if(pe.viewport!==void 0&&(pe.viewport=void 0),m.setupLightsView(pe),O===!0&&De.setGlobalState(y.clippingPlanes,pe),vn(L,le,pe),U.updateMultisampleRenderTarget(Le),U.updateRenderTargetMipmap(Le),ne.has("WEBGL_multisampled_render_to_texture")===!1){let at=!1;for(let Ke=0,Tt=te.length;Ke<Tt;Ke++){let yt=te[Ke],Ot=yt.object,Pn=yt.geometry,Ut=yt.material,st=yt.group;if(Ut.side===It&&Ot.layers.test(pe.layers)){let zt=Ut.side;Ut.side=gn,Ut.needsUpdate=!0,dt(Ot,le,pe,Pn,Ut,st),Ut.side=zt,Ut.needsUpdate=!0,at=!0}}at===!0&&(U.updateMultisampleRenderTarget(Le),U.updateRenderTargetMipmap(Le))}y.setRenderTarget(Qe),y.setClearColor(B,G),rt!==void 0&&(pe.viewport=rt),y.toneMapping=et}function vn(L,te,le){let pe=te.isScene===!0?te.overrideMaterial:null;for(let se=0,Le=L.length;se<Le;se++){let Xe=L[se],Qe=Xe.object,et=Xe.geometry,rt=pe===null?Xe.material:pe,at=Xe.group;Qe.layers.test(le.layers)&&dt(Qe,te,le,et,rt,at)}}function dt(L,te,le,pe,se,Le){L.onBeforeRender(y,te,le,pe,se,Le),L.modelViewMatrix.multiplyMatrices(le.matrixWorldInverse,L.matrixWorld),L.normalMatrix.getNormalMatrix(L.modelViewMatrix),se.onBeforeRender(y,te,le,pe,L,Le),se.transparent===!0&&se.side===It&&se.forceSinglePass===!1?(se.side=gn,se.needsUpdate=!0,y.renderBufferDirect(le,te,pe,se,L,Le),se.side=Ki,se.needsUpdate=!0,y.renderBufferDirect(le,te,pe,se,L,Le),se.side=It):y.renderBufferDirect(le,te,pe,se,L,Le),L.onAfterRender(y,te,le,pe,se,Le)}function At(L,te,le){te.isScene!==!0&&(te=Ae);let pe=we.get(L),se=m.state.lights,Le=m.state.shadowsArray,Xe=se.state.version,Qe=We.getParameters(L,se.state,Le,te,le),et=We.getProgramCacheKey(Qe),rt=pe.programs;pe.environment=L.isMeshStandardMaterial?te.environment:null,pe.fog=te.fog,pe.envMap=(L.isMeshStandardMaterial?K:T).get(L.envMap||pe.environment),pe.envMapRotation=pe.environment!==null&&L.envMap===null?te.environmentRotation:L.envMapRotation,rt===void 0&&(L.addEventListener("dispose",ht),rt=new Map,pe.programs=rt);let at=rt.get(et);if(at!==void 0){if(pe.currentProgram===at&&pe.lightsStateVersion===Xe)return dn(L,Qe),at}else Qe.uniforms=We.getUniforms(L),L.onBeforeCompile(Qe,y),at=We.acquireProgram(Qe,et),rt.set(et,at),pe.uniforms=Qe.uniforms;let Ke=pe.uniforms;return(!L.isShaderMaterial&&!L.isRawShaderMaterial||L.clipping===!0)&&(Ke.clippingPlanes=De.uniform),dn(L,Qe),pe.needsLights=Cn(L),pe.lightsStateVersion=Xe,pe.needsLights&&(Ke.ambientLightColor.value=se.state.ambient,Ke.lightProbe.value=se.state.probe,Ke.directionalLights.value=se.state.directional,Ke.directionalLightShadows.value=se.state.directionalShadow,Ke.spotLights.value=se.state.spot,Ke.spotLightShadows.value=se.state.spotShadow,Ke.rectAreaLights.value=se.state.rectArea,Ke.ltc_1.value=se.state.rectAreaLTC1,Ke.ltc_2.value=se.state.rectAreaLTC2,Ke.pointLights.value=se.state.point,Ke.pointLightShadows.value=se.state.pointShadow,Ke.hemisphereLights.value=se.state.hemi,Ke.directionalShadowMap.value=se.state.directionalShadowMap,Ke.directionalShadowMatrix.value=se.state.directionalShadowMatrix,Ke.spotShadowMap.value=se.state.spotShadowMap,Ke.spotLightMatrix.value=se.state.spotLightMatrix,Ke.spotLightMap.value=se.state.spotLightMap,Ke.pointShadowMap.value=se.state.pointShadowMap,Ke.pointShadowMatrix.value=se.state.pointShadowMatrix),pe.currentProgram=at,pe.uniformsList=null,at}function Nn(L){if(L.uniformsList===null){let te=L.currentProgram.getUniforms();L.uniformsList=qr.seqWithValue(te.seq,L.uniforms)}return L.uniformsList}function dn(L,te){let le=we.get(L);le.outputColorSpace=te.outputColorSpace,le.batching=te.batching,le.batchingColor=te.batchingColor,le.instancing=te.instancing,le.instancingColor=te.instancingColor,le.instancingMorph=te.instancingMorph,le.skinning=te.skinning,le.morphTargets=te.morphTargets,le.morphNormals=te.morphNormals,le.morphColors=te.morphColors,le.morphTargetsCount=te.morphTargetsCount,le.numClippingPlanes=te.numClippingPlanes,le.numIntersection=te.numClipIntersection,le.vertexAlphas=te.vertexAlphas,le.vertexTangents=te.vertexTangents,le.toneMapping=te.toneMapping}function _n(L,te,le,pe,se){te.isScene!==!0&&(te=Ae),U.resetTextureUnits();let Le=te.fog,Xe=pe.isMeshStandardMaterial?te.environment:null,Qe=S===null?y.outputColorSpace:S.isXRRenderTarget===!0?S.texture.colorSpace:Fs,et=(pe.isMeshStandardMaterial?K:T).get(pe.envMap||Xe),rt=pe.vertexColors===!0&&!!le.attributes.color&&le.attributes.color.itemSize===4,at=!!le.attributes.tangent&&(!!pe.normalMap||pe.anisotropy>0),Ke=!!le.morphAttributes.position,Tt=!!le.morphAttributes.normal,yt=!!le.morphAttributes.color,Ot=Cs;pe.toneMapped&&(S===null||S.isXRRenderTarget===!0)&&(Ot=y.toneMapping);let Pn=le.morphAttributes.position||le.morphAttributes.normal||le.morphAttributes.color,Ut=Pn!==void 0?Pn.length:0,st=we.get(pe),zt=m.state.lights;if(O===!0&&(ae===!0||L!==Y)){let ei=L===Y&&pe.id===C;De.setState(pe,L,ei)}let He=!1;pe.version===st.__version?(st.needsLights&&st.lightsStateVersion!==zt.state.version||st.outputColorSpace!==Qe||se.isBatchedMesh&&st.batching===!1||!se.isBatchedMesh&&st.batching===!0||se.isBatchedMesh&&st.batchingColor===!0&&se.colorTexture===null||se.isBatchedMesh&&st.batchingColor===!1&&se.colorTexture!==null||se.isInstancedMesh&&st.instancing===!1||!se.isInstancedMesh&&st.instancing===!0||se.isSkinnedMesh&&st.skinning===!1||!se.isSkinnedMesh&&st.skinning===!0||se.isInstancedMesh&&st.instancingColor===!0&&se.instanceColor===null||se.isInstancedMesh&&st.instancingColor===!1&&se.instanceColor!==null||se.isInstancedMesh&&st.instancingMorph===!0&&se.morphTexture===null||se.isInstancedMesh&&st.instancingMorph===!1&&se.morphTexture!==null||st.envMap!==et||pe.fog===!0&&st.fog!==Le||st.numClippingPlanes!==void 0&&(st.numClippingPlanes!==De.numPlanes||st.numIntersection!==De.numIntersection)||st.vertexAlphas!==rt||st.vertexTangents!==at||st.morphTargets!==Ke||st.morphNormals!==Tt||st.morphColors!==yt||st.toneMapping!==Ot||st.morphTargetsCount!==Ut)&&(He=!0):(He=!0,st.__version=pe.version);let Ze=st.currentProgram;He===!0&&(Ze=At(pe,te,se));let Mn=!1,tn=!1,jn=!1,on=Ze.getUniforms(),ri=st.uniforms;if(me.useProgram(Ze.program)&&(Mn=!0,tn=!0,jn=!0),pe.id!==C&&(C=pe.id,tn=!0),Mn||Y!==L){he.reverseDepthBuffer?(V.copy(L.projectionMatrix),z1(V),B1(V),on.setValue(P,"projectionMatrix",V)):on.setValue(P,"projectionMatrix",L.projectionMatrix),on.setValue(P,"viewMatrix",L.matrixWorldInverse);let ei=on.map.cameraPosition;ei!==void 0&&ei.setValue(P,Z.setFromMatrixPosition(L.matrixWorld)),he.logarithmicDepthBuffer&&on.setValue(P,"logDepthBufFC",2/(Math.log(L.far+1)/Math.LN2)),(pe.isMeshPhongMaterial||pe.isMeshToonMaterial||pe.isMeshLambertMaterial||pe.isMeshBasicMaterial||pe.isMeshStandardMaterial||pe.isShaderMaterial)&&on.setValue(P,"isOrthographic",L.isOrthographicCamera===!0),Y!==L&&(Y=L,tn=!0,jn=!0)}if(se.isSkinnedMesh){on.setOptional(P,se,"bindMatrix"),on.setOptional(P,se,"bindMatrixInverse");let ei=se.skeleton;ei&&(ei.boneTexture===null&&ei.computeBoneTexture(),on.setValue(P,"boneTexture",ei.boneTexture,U))}se.isBatchedMesh&&(on.setOptional(P,se,"batchingTexture"),on.setValue(P,"batchingTexture",se._matricesTexture,U),on.setOptional(P,se,"batchingIdTexture"),on.setValue(P,"batchingIdTexture",se._indirectTexture,U),on.setOptional(P,se,"batchingColorTexture"),se._colorsTexture!==null&&on.setValue(P,"batchingColorTexture",se._colorsTexture,U));let vr=le.morphAttributes;if((vr.position!==void 0||vr.normal!==void 0||vr.color!==void 0)&&Ie.update(se,le,Ze),(tn||st.receiveShadow!==se.receiveShadow)&&(st.receiveShadow=se.receiveShadow,on.setValue(P,"receiveShadow",se.receiveShadow)),pe.isMeshGouraudMaterial&&pe.envMap!==null&&(ri.envMap.value=et,ri.flipEnvMap.value=et.isCubeTexture&&et.isRenderTargetTexture===!1?-1:1),pe.isMeshStandardMaterial&&pe.envMap===null&&te.environment!==null&&(ri.envMapIntensity.value=te.environmentIntensity),tn&&(on.setValue(P,"toneMappingExposure",y.toneMappingExposure),st.needsLights&&ns(ri,jn),Le&&pe.fog===!0&&Oe.refreshFogUniforms(ri,Le),Oe.refreshMaterialUniforms(ri,pe,ye,J,m.state.transmissionRenderTarget[L.id]),qr.upload(P,Nn(st),ri,U)),pe.isShaderMaterial&&pe.uniformsNeedUpdate===!0&&(qr.upload(P,Nn(st),ri,U),pe.uniformsNeedUpdate=!1),pe.isSpriteMaterial&&on.setValue(P,"center",se.center),on.setValue(P,"modelViewMatrix",se.modelViewMatrix),on.setValue(P,"normalMatrix",se.normalMatrix),on.setValue(P,"modelMatrix",se.matrixWorld),pe.isShaderMaterial||pe.isRawShaderMaterial){let ei=pe.uniformsGroups;for(let oi=0,Pl=ei.length;oi<Pl;oi++){let bo=ei[oi];X.update(bo,Ze),X.bind(bo,Ze)}}return Ze}function ns(L,te){L.ambientLightColor.needsUpdate=te,L.lightProbe.needsUpdate=te,L.directionalLights.needsUpdate=te,L.directionalLightShadows.needsUpdate=te,L.pointLights.needsUpdate=te,L.pointLightShadows.needsUpdate=te,L.spotLights.needsUpdate=te,L.spotLightShadows.needsUpdate=te,L.rectAreaLights.needsUpdate=te,L.hemisphereLights.needsUpdate=te}function Cn(L){return L.isMeshLambertMaterial||L.isMeshToonMaterial||L.isMeshPhongMaterial||L.isMeshStandardMaterial||L.isShadowMaterial||L.isShaderMaterial&&L.lights===!0}this.getActiveCubeFace=function(){return I},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return S},this.setRenderTargetTextures=function(L,te,le){we.get(L.texture).__webglTexture=te,we.get(L.depthTexture).__webglTexture=le;let pe=we.get(L);pe.__hasExternalTextures=!0,pe.__autoAllocateDepthBuffer=le===void 0,pe.__autoAllocateDepthBuffer||ne.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),pe.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(L,te){let le=we.get(L);le.__webglFramebuffer=te,le.__useDefaultFramebuffer=te===void 0},this.setRenderTarget=function(L,te=0,le=0){S=L,I=te,A=le;let pe=!0,se=null,Le=!1,Xe=!1;if(L){let et=we.get(L);if(et.__useDefaultFramebuffer!==void 0)me.bindFramebuffer(P.FRAMEBUFFER,null),pe=!1;else if(et.__webglFramebuffer===void 0)U.setupRenderTarget(L);else if(et.__hasExternalTextures)U.rebindTextures(L,we.get(L.texture).__webglTexture,we.get(L.depthTexture).__webglTexture);else if(L.depthBuffer){let Ke=L.depthTexture;if(et.__boundDepthTexture!==Ke){if(Ke!==null&&we.has(Ke)&&(L.width!==Ke.image.width||L.height!==Ke.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");U.setupDepthRenderbuffer(L)}}let rt=L.texture;(rt.isData3DTexture||rt.isDataArrayTexture||rt.isCompressedArrayTexture)&&(Xe=!0);let at=we.get(L).__webglFramebuffer;L.isWebGLCubeRenderTarget?(Array.isArray(at[te])?se=at[te][le]:se=at[te],Le=!0):L.samples>0&&U.useMultisampledRTT(L)===!1?se=we.get(L).__webglMultisampledFramebuffer:Array.isArray(at)?se=at[le]:se=at,v.copy(L.viewport),b.copy(L.scissor),F=L.scissorTest}else v.copy(N).multiplyScalar(ye).floor(),b.copy(ee).multiplyScalar(ye).floor(),F=oe;if(me.bindFramebuffer(P.FRAMEBUFFER,se)&&pe&&me.drawBuffers(L,se),me.viewport(v),me.scissor(b),me.setScissorTest(F),Le){let et=we.get(L.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+te,et.__webglTexture,le)}else if(Xe){let et=we.get(L.texture),rt=te||0;P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,et.__webglTexture,le||0,rt)}C=-1},this.readRenderTargetPixels=function(L,te,le,pe,se,Le,Xe){if(!(L&&L.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Qe=we.get(L).__webglFramebuffer;if(L.isWebGLCubeRenderTarget&&Xe!==void 0&&(Qe=Qe[Xe]),Qe){me.bindFramebuffer(P.FRAMEBUFFER,Qe);try{let et=L.texture,rt=et.format,at=et.type;if(!he.textureFormatReadable(rt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!he.textureTypeReadable(at)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}te>=0&&te<=L.width-pe&&le>=0&&le<=L.height-se&&P.readPixels(te,le,pe,se,ce.convert(rt),ce.convert(at),Le)}finally{let et=S!==null?we.get(S).__webglFramebuffer:null;me.bindFramebuffer(P.FRAMEBUFFER,et)}}},this.readRenderTargetPixelsAsync=async function(L,te,le,pe,se,Le,Xe){if(!(L&&L.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Qe=we.get(L).__webglFramebuffer;if(L.isWebGLCubeRenderTarget&&Xe!==void 0&&(Qe=Qe[Xe]),Qe){let et=L.texture,rt=et.format,at=et.type;if(!he.textureFormatReadable(rt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!he.textureTypeReadable(at))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(te>=0&&te<=L.width-pe&&le>=0&&le<=L.height-se){me.bindFramebuffer(P.FRAMEBUFFER,Qe);let Ke=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,Ke),P.bufferData(P.PIXEL_PACK_BUFFER,Le.byteLength,P.STREAM_READ),P.readPixels(te,le,pe,se,ce.convert(rt),ce.convert(at),0);let Tt=S!==null?we.get(S).__webglFramebuffer:null;me.bindFramebuffer(P.FRAMEBUFFER,Tt);let yt=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await O1(P,yt,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,Ke),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,Le),P.deleteBuffer(Ke),P.deleteSync(yt),Le}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(L,te=null,le=0){L.isTexture!==!0&&(vc("WebGLRenderer: copyFramebufferToTexture function signature has changed."),te=arguments[0]||null,L=arguments[1]);let pe=Math.pow(2,-le),se=Math.floor(L.image.width*pe),Le=Math.floor(L.image.height*pe),Xe=te!==null?te.x:0,Qe=te!==null?te.y:0;U.setTexture2D(L,0),P.copyTexSubImage2D(P.TEXTURE_2D,le,0,0,Xe,Qe,se,Le),me.unbindTexture()},this.copyTextureToTexture=function(L,te,le=null,pe=null,se=0){L.isTexture!==!0&&(vc("WebGLRenderer: copyTextureToTexture function signature has changed."),pe=arguments[0]||null,L=arguments[1],te=arguments[2],se=arguments[3]||0,le=null);let Le,Xe,Qe,et,rt,at;le!==null?(Le=le.max.x-le.min.x,Xe=le.max.y-le.min.y,Qe=le.min.x,et=le.min.y):(Le=L.image.width,Xe=L.image.height,Qe=0,et=0),pe!==null?(rt=pe.x,at=pe.y):(rt=0,at=0);let Ke=ce.convert(te.format),Tt=ce.convert(te.type);U.setTexture2D(te,0),P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,te.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,te.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,te.unpackAlignment);let yt=P.getParameter(P.UNPACK_ROW_LENGTH),Ot=P.getParameter(P.UNPACK_IMAGE_HEIGHT),Pn=P.getParameter(P.UNPACK_SKIP_PIXELS),Ut=P.getParameter(P.UNPACK_SKIP_ROWS),st=P.getParameter(P.UNPACK_SKIP_IMAGES),zt=L.isCompressedTexture?L.mipmaps[se]:L.image;P.pixelStorei(P.UNPACK_ROW_LENGTH,zt.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,zt.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Qe),P.pixelStorei(P.UNPACK_SKIP_ROWS,et),L.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,se,rt,at,Le,Xe,Ke,Tt,zt.data):L.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,se,rt,at,zt.width,zt.height,Ke,zt.data):P.texSubImage2D(P.TEXTURE_2D,se,rt,at,Le,Xe,Ke,Tt,zt),P.pixelStorei(P.UNPACK_ROW_LENGTH,yt),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,Ot),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Pn),P.pixelStorei(P.UNPACK_SKIP_ROWS,Ut),P.pixelStorei(P.UNPACK_SKIP_IMAGES,st),se===0&&te.generateMipmaps&&P.generateMipmap(P.TEXTURE_2D),me.unbindTexture()},this.copyTextureToTexture3D=function(L,te,le=null,pe=null,se=0){L.isTexture!==!0&&(vc("WebGLRenderer: copyTextureToTexture3D function signature has changed."),le=arguments[0]||null,pe=arguments[1]||null,L=arguments[2],te=arguments[3],se=arguments[4]||0);let Le,Xe,Qe,et,rt,at,Ke,Tt,yt,Ot=L.isCompressedTexture?L.mipmaps[se]:L.image;le!==null?(Le=le.max.x-le.min.x,Xe=le.max.y-le.min.y,Qe=le.max.z-le.min.z,et=le.min.x,rt=le.min.y,at=le.min.z):(Le=Ot.width,Xe=Ot.height,Qe=Ot.depth,et=0,rt=0,at=0),pe!==null?(Ke=pe.x,Tt=pe.y,yt=pe.z):(Ke=0,Tt=0,yt=0);let Pn=ce.convert(te.format),Ut=ce.convert(te.type),st;if(te.isData3DTexture)U.setTexture3D(te,0),st=P.TEXTURE_3D;else if(te.isDataArrayTexture||te.isCompressedArrayTexture)U.setTexture2DArray(te,0),st=P.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,te.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,te.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,te.unpackAlignment);let zt=P.getParameter(P.UNPACK_ROW_LENGTH),He=P.getParameter(P.UNPACK_IMAGE_HEIGHT),Ze=P.getParameter(P.UNPACK_SKIP_PIXELS),Mn=P.getParameter(P.UNPACK_SKIP_ROWS),tn=P.getParameter(P.UNPACK_SKIP_IMAGES);P.pixelStorei(P.UNPACK_ROW_LENGTH,Ot.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,Ot.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,et),P.pixelStorei(P.UNPACK_SKIP_ROWS,rt),P.pixelStorei(P.UNPACK_SKIP_IMAGES,at),L.isDataTexture||L.isData3DTexture?P.texSubImage3D(st,se,Ke,Tt,yt,Le,Xe,Qe,Pn,Ut,Ot.data):te.isCompressedArrayTexture?P.compressedTexSubImage3D(st,se,Ke,Tt,yt,Le,Xe,Qe,Pn,Ot.data):P.texSubImage3D(st,se,Ke,Tt,yt,Le,Xe,Qe,Pn,Ut,Ot),P.pixelStorei(P.UNPACK_ROW_LENGTH,zt),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,He),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Ze),P.pixelStorei(P.UNPACK_SKIP_ROWS,Mn),P.pixelStorei(P.UNPACK_SKIP_IMAGES,tn),se===0&&te.generateMipmaps&&P.generateMipmap(st),me.unbindTexture()},this.initRenderTarget=function(L){we.get(L).__webglFramebuffer===void 0&&U.setupRenderTarget(L)},this.initTexture=function(L){L.isCubeTexture?U.setTextureCube(L,0):L.isData3DTexture?U.setTexture3D(L,0):L.isDataArrayTexture||L.isCompressedArrayTexture?U.setTexture2DArray(L,0):U.setTexture2D(L,0),me.unbindTexture()},this.resetState=function(){I=0,A=0,S=null,me.reset(),Ve.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return hs}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=e===od?"display-p3":"srgb",t.unpackColorSpace=Gt.workingColorSpace===Jc?"display-p3":"srgb"}};var Hc=class i{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new ut(e),this.near=t,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Nc=class extends Nt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ii,this.environmentIntensity=1,this.environmentRotation=new ii,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}};var Qi=class extends Kn{constructor(e=null,t=1,n=1,s,r,o,a,c,l=ni,h=ni,p,f){super(null,o,a,c,l,h,s,r,p,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var ar=class extends ln{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},zr=new wt,_p=new wt,ac=[],Mp=new Dn,H2=new wt,Bo=new lt,ko=new Ls,xn=class extends lt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new ar(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,H2)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Dn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,zr),Mp.copy(e.boundingBox).applyMatrix4(zr),this.boundingBox.union(Mp)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ls),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,zr),ko.copy(e.boundingSphere).applyMatrix4(zr),this.boundingSphere.union(ko)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(e,t){let n=this.matrixWorld,s=this.count;if(Bo.geometry=this.geometry,Bo.material=this.material,Bo.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ko.copy(this.boundingSphere),ko.applyMatrix4(n),e.ray.intersectsSphere(ko)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,zr),_p.multiplyMatrices(n,zr),Bo.matrixWorld=_p,Bo.raycast(e,ac);for(let o=0,a=ac.length;o<a;o++){let c=ac[o];c.instanceId=r,c.object=this,t.push(c)}ac.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new ar(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){let n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Qi(new Float32Array(s*this.count),s,this.count,td,$i));let r=this.morphTexture.source.data.data,o=0;for(let l=0;l<n.length;l++)o+=n[l];let a=this.geometry.morphTargetsRelative?1:1-o,c=s*e;r[c]=a,r.set(n,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var cr=class extends Ds{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ut(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Fc=new w,Oc=new w,Ep=new wt,Vo=new jo,cc=new Ls,wh=new w,Sp=new w,Cu=class extends Nt{constructor(e=new Ct,t=new cr){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)Fc.fromBufferAttribute(t,s-1),Oc.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=Fc.distanceTo(Oc);e.setAttribute("lineDistance",new ct(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),cc.copy(n.boundingSphere),cc.applyMatrix4(s),cc.radius+=r,e.ray.intersectsSphere(cc)===!1)return;Ep.copy(s).invert(),Vo.copy(e.ray).applyMatrix4(Ep);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,h=n.index,f=n.attributes.position;if(h!==null){let d=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let x=d,m=g-1;x<m;x+=l){let u=h.getX(x),E=h.getX(x+1),y=lc(this,e,Vo,c,u,E);y&&t.push(y)}if(this.isLineLoop){let x=h.getX(g-1),m=h.getX(d),u=lc(this,e,Vo,c,x,m);u&&t.push(u)}}else{let d=Math.max(0,o.start),g=Math.min(f.count,o.start+o.count);for(let x=d,m=g-1;x<m;x+=l){let u=lc(this,e,Vo,c,x,x+1);u&&t.push(u)}if(this.isLineLoop){let x=lc(this,e,Vo,c,g-1,d);x&&t.push(x)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function lc(i,e,t,n,s,r){let o=i.geometry.attributes.position;if(Fc.fromBufferAttribute(o,s),Oc.fromBufferAttribute(o,r),t.distanceSqToSegment(Fc,Oc,wh,Sp)>n)return;wh.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(wh);if(!(c<e.near||c>e.far))return{distance:c,point:Sp.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}var wp=new w,bp=new w,to=class extends Cu{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)wp.fromBufferAttribute(t,s),bp.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+wp.distanceTo(bp);e.setAttribute("lineDistance",new ct(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var Ft=class extends Kn{constructor(e,t,n,s,r,o,a,c,l){super(e,t,n,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}},_i=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let n=this.getLengths(),s=0,r=n.length,o;t?o=t:o=e*n[r-1];let a=0,c=r-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=n[s]-o,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===o)return s/(r-1);let h=n[s],f=n[s+1]-h,d=(o-h)/f;return(s+d)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),c=t||(o.isVector2?new Ne:new w);return c.copy(a).sub(o).normalize(),c}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){let n=new w,s=[],r=[],o=[],a=new w,c=new wt;for(let d=0;d<=e;d++){let g=d/e;s[d]=this.getTangentAt(g,new w)}r[0]=new w,o[0]=new w;let l=Number.MAX_VALUE,h=Math.abs(s[0].x),p=Math.abs(s[0].y),f=Math.abs(s[0].z);h<=l&&(l=h,n.set(1,0,0)),p<=l&&(l=p,n.set(0,1,0)),f<=l&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let d=1;d<=e;d++){if(r[d]=r[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(s[d-1],s[d]),a.length()>Number.EPSILON){a.normalize();let g=Math.acos(Sn(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(c.makeRotationAxis(a,g))}o[d].crossVectors(s[d],r[d])}if(t===!0){let d=Math.acos(Sn(r[0].dot(r[e]),-1,1));d/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(d=-d);for(let g=1;g<=e;g++)r[g].applyMatrix4(c.makeRotationAxis(s[g],d*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},ia=class extends _i{constructor(e=0,t=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(e,t=new Ne){let n=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+e*r,c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),p=Math.sin(this.aRotation),f=c-this.aX,d=l-this.aY;c=f*h-d*p+this.aX,l=f*p+d*h+this.aY}return n.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Pu=class extends ia{constructor(e,t,n,s,r,o){super(e,t,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function ld(){let i=0,e=0,t=0,n=0;function s(r,o,a,c){i=r,e=a,t=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){s(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,h,p){let f=(o-r)/l-(a-r)/(l+h)+(a-o)/h,d=(a-o)/h-(c-o)/(h+p)+(c-a)/p;f*=h,d*=h,s(o,a,f,d)},calc:function(r){let o=r*r,a=o*r;return i+e*r+t*o+n*a}}}var hc=new w,bh=new ld,Th=new ld,Rh=new ld,Zt=class extends _i{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new w){let n=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e,a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,h;this.closed||a>0?l=s[(a-1)%r]:(hc.subVectors(s[0],s[1]).add(s[0]),l=hc);let p=s[a%r],f=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(hc.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=hc),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,g=Math.pow(l.distanceToSquared(p),d),x=Math.pow(p.distanceToSquared(f),d),m=Math.pow(f.distanceToSquared(h),d);x<1e-4&&(x=1),g<1e-4&&(g=x),m<1e-4&&(m=x),bh.initNonuniformCatmullRom(l.x,p.x,f.x,h.x,g,x,m),Th.initNonuniformCatmullRom(l.y,p.y,f.y,h.y,g,x,m),Rh.initNonuniformCatmullRom(l.z,p.z,f.z,h.z,g,x,m)}else this.curveType==="catmullrom"&&(bh.initCatmullRom(l.x,p.x,f.x,h.x,this.tension),Th.initCatmullRom(l.y,p.y,f.y,h.y,this.tension),Rh.initCatmullRom(l.z,p.z,f.z,h.z,this.tension));return n.set(bh.calc(c),Th.calc(c),Rh.calc(c)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new w().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Tp(i,e,t,n,s){let r=(n-e)*.5,o=(s-t)*.5,a=i*i,c=i*a;return(2*t-2*n+r+o)*c+(-3*t+3*n-2*r-o)*a+r*i+t}function N2(i,e){let t=1-i;return t*t*e}function F2(i,e){return 2*(1-i)*i*e}function O2(i,e){return i*i*e}function Zo(i,e,t,n){return N2(i,e)+F2(i,t)+O2(i,n)}function z2(i,e){let t=1-i;return t*t*t*e}function B2(i,e){let t=1-i;return 3*t*t*i*e}function k2(i,e){return 3*(1-i)*i*i*e}function V2(i,e){return i*i*i*e}function $o(i,e,t,n,s){return z2(i,e)+B2(i,t)+k2(i,n)+V2(i,s)}var zc=class extends _i{constructor(e=new Ne,t=new Ne,n=new Ne,s=new Ne){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new Ne){let n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set($o(e,s.x,r.x,o.x,a.x),$o(e,s.y,r.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},sa=class extends _i{constructor(e=new w,t=new w,n=new w,s=new w){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new w){let n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set($o(e,s.x,r.x,o.x,a.x),$o(e,s.y,r.y,o.y,a.y),$o(e,s.z,r.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Bc=class extends _i{constructor(e=new Ne,t=new Ne){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Ne){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Ne){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Iu=class extends _i{constructor(e=new w,t=new w){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new w){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new w){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},kc=class extends _i{constructor(e=new Ne,t=new Ne,n=new Ne){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new Ne){let n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(Zo(e,s.x,r.x,o.x),Zo(e,s.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Vc=class extends _i{constructor(e=new w,t=new w,n=new w){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new w){let n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(Zo(e,s.x,r.x,o.x),Zo(e,s.y,r.y,o.y),Zo(e,s.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Gc=class extends _i{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Ne){let n=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,c=s[o===0?o:o-1],l=s[o],h=s[o>s.length-2?s.length-1:o+1],p=s[o>s.length-3?s.length-1:o+2];return n.set(Tp(a,c.x,l.x,h.x,p.x),Tp(a,c.y,l.y,h.y,p.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new Ne().fromArray(s))}return this}},Wc=Object.freeze({__proto__:null,ArcCurve:Pu,CatmullRomCurve3:Zt,CubicBezierCurve:zc,CubicBezierCurve3:sa,EllipseCurve:ia,LineCurve:Bc,LineCurve3:Iu,QuadraticBezierCurve:kc,QuadraticBezierCurve3:Vc,SplineCurve:Gc}),Lu=class extends _i{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Wc[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let o=s[r]-n,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,c=o.getPoints(a);for(let l=0;l<c.length;l++){let h=c[l];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(new Wc[s.type]().fromJSON(s))}return this}},Mi=class extends Lu{constructor(e){super(),this.type="Path",this.currentPoint=new Ne,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new Bc(this.currentPoint.clone(),new Ne(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){let r=new kc(this.currentPoint.clone(),new Ne(e,t),new Ne(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,o){let a=new zc(this.currentPoint.clone(),new Ne(e,t),new Ne(n,s),new Ne(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new Gc(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,o){let a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+a,t+c,n,s,r,o),this}absarc(e,t,n,s,r,o){return this.absellipse(e,t,n,n,s,r,o),this}ellipse(e,t,n,s,r,o,a,c){let l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+l,t+h,n,s,r,o,a,c),this}absellipse(e,t,n,s,r,o,a,c){let l=new ia(e,t,n,s,r,o,a,c);if(this.curves.length>0){let p=l.getPoint(0);p.equals(this.currentPoint)||this.lineTo(p.x,p.y)}this.curves.push(l);let h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},Us=class i extends Ct{constructor(e=[new Ne(0,-.5),new Ne(.5,0),new Ne(0,.5)],t=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:s},t=Math.floor(t),s=Sn(s,0,Math.PI*2);let r=[],o=[],a=[],c=[],l=[],h=1/t,p=new w,f=new Ne,d=new w,g=new w,x=new w,m=0,u=0;for(let E=0;E<=e.length-1;E++)switch(E){case 0:m=e[E+1].x-e[E].x,u=e[E+1].y-e[E].y,d.x=u*1,d.y=-m,d.z=u*0,x.copy(d),d.normalize(),c.push(d.x,d.y,d.z);break;case e.length-1:c.push(x.x,x.y,x.z);break;default:m=e[E+1].x-e[E].x,u=e[E+1].y-e[E].y,d.x=u*1,d.y=-m,d.z=u*0,g.copy(d),d.x+=x.x,d.y+=x.y,d.z+=x.z,d.normalize(),c.push(d.x,d.y,d.z),x.copy(g)}for(let E=0;E<=t;E++){let y=n+E*h*s,M=Math.sin(y),I=Math.cos(y);for(let A=0;A<=e.length-1;A++){p.x=e[A].x*M,p.y=e[A].y,p.z=e[A].x*I,o.push(p.x,p.y,p.z),f.x=E/t,f.y=A/(e.length-1),a.push(f.x,f.y);let S=c[3*A+0]*M,C=c[3*A+1],Y=c[3*A+0]*I;l.push(S,C,Y)}}for(let E=0;E<t;E++)for(let y=0;y<e.length-1;y++){let M=y+E*e.length,I=M,A=M+e.length,S=M+e.length+1,C=M+1;r.push(I,A,C),r.push(S,C,A)}this.setIndex(r),this.setAttribute("position",new ct(o,3)),this.setAttribute("uv",new ct(a,2)),this.setAttribute("normal",new ct(l,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.points,e.segments,e.phiStart,e.phiLength)}};var Ei=class i extends Ct{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);let r=[],o=[],a=[],c=[],l=new w,h=new Ne;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let p=0,f=3;p<=t;p++,f+=3){let d=n+p/t*s;l.x=e*Math.cos(d),l.y=e*Math.sin(d),o.push(l.x,l.y,l.z),a.push(0,0,1),h.x=(o[f]/e+1)/2,h.y=(o[f+1]/e+1)/2,c.push(h.x,h.y)}for(let p=1;p<=t;p++)r.push(p,p+1,0);this.setIndex(r),this.setAttribute("position",new ct(o,3)),this.setAttribute("normal",new ct(a,3)),this.setAttribute("uv",new ct(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.segments,e.thetaStart,e.thetaLength)}},Xt=class i extends Ct{constructor(e=1,t=1,n=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};let l=this;s=Math.floor(s),r=Math.floor(r);let h=[],p=[],f=[],d=[],g=0,x=[],m=n/2,u=0;E(),o===!1&&(e>0&&y(!0),t>0&&y(!1)),this.setIndex(h),this.setAttribute("position",new ct(p,3)),this.setAttribute("normal",new ct(f,3)),this.setAttribute("uv",new ct(d,2));function E(){let M=new w,I=new w,A=0,S=(t-e)/n;for(let C=0;C<=r;C++){let Y=[],v=C/r,b=v*(t-e)+e;for(let F=0;F<=s;F++){let B=F/s,G=B*c+a,H=Math.sin(G),J=Math.cos(G);I.x=b*H,I.y=-v*n+m,I.z=b*J,p.push(I.x,I.y,I.z),M.set(H,S,J).normalize(),f.push(M.x,M.y,M.z),d.push(B,1-v),Y.push(g++)}x.push(Y)}for(let C=0;C<s;C++)for(let Y=0;Y<r;Y++){let v=x[Y][C],b=x[Y+1][C],F=x[Y+1][C+1],B=x[Y][C+1];e>0&&(h.push(v,b,B),A+=3),t>0&&(h.push(b,F,B),A+=3)}l.addGroup(u,A,0),u+=A}function y(M){let I=g,A=new Ne,S=new w,C=0,Y=M===!0?e:t,v=M===!0?1:-1;for(let F=1;F<=s;F++)p.push(0,m*v,0),f.push(0,v,0),d.push(.5,.5),g++;let b=g;for(let F=0;F<=s;F++){let G=F/s*c+a,H=Math.cos(G),J=Math.sin(G);S.x=Y*J,S.y=m*v,S.z=Y*H,p.push(S.x,S.y,S.z),f.push(0,v,0),A.x=H*.5+.5,A.y=J*.5*v+.5,d.push(A.x,A.y),g++}for(let F=0;F<s;F++){let B=I+F,G=b+F;M===!0?h.push(G,G+1,B):h.push(G+1,G,B),C+=3}l.addGroup(u,C,M===!0?1:2),u+=C}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Hs=class i extends Xt{constructor(e=1,t=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Du=class i extends Ct{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};let r=[],o=[];a(s),l(n),h(),this.setAttribute("position",new ct(r,3)),this.setAttribute("normal",new ct(r.slice(),3)),this.setAttribute("uv",new ct(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(E){let y=new w,M=new w,I=new w;for(let A=0;A<t.length;A+=3)d(t[A+0],y),d(t[A+1],M),d(t[A+2],I),c(y,M,I,E)}function c(E,y,M,I){let A=I+1,S=[];for(let C=0;C<=A;C++){S[C]=[];let Y=E.clone().lerp(M,C/A),v=y.clone().lerp(M,C/A),b=A-C;for(let F=0;F<=b;F++)F===0&&C===A?S[C][F]=Y:S[C][F]=Y.clone().lerp(v,F/b)}for(let C=0;C<A;C++)for(let Y=0;Y<2*(A-C)-1;Y++){let v=Math.floor(Y/2);Y%2===0?(f(S[C][v+1]),f(S[C+1][v]),f(S[C][v])):(f(S[C][v+1]),f(S[C+1][v+1]),f(S[C+1][v]))}}function l(E){let y=new w;for(let M=0;M<r.length;M+=3)y.x=r[M+0],y.y=r[M+1],y.z=r[M+2],y.normalize().multiplyScalar(E),r[M+0]=y.x,r[M+1]=y.y,r[M+2]=y.z}function h(){let E=new w;for(let y=0;y<r.length;y+=3){E.x=r[y+0],E.y=r[y+1],E.z=r[y+2];let M=m(E)/2/Math.PI+.5,I=u(E)/Math.PI+.5;o.push(M,1-I)}g(),p()}function p(){for(let E=0;E<o.length;E+=6){let y=o[E+0],M=o[E+2],I=o[E+4],A=Math.max(y,M,I),S=Math.min(y,M,I);A>.9&&S<.1&&(y<.2&&(o[E+0]+=1),M<.2&&(o[E+2]+=1),I<.2&&(o[E+4]+=1))}}function f(E){r.push(E.x,E.y,E.z)}function d(E,y){let M=E*3;y.x=e[M+0],y.y=e[M+1],y.z=e[M+2]}function g(){let E=new w,y=new w,M=new w,I=new w,A=new Ne,S=new Ne,C=new Ne;for(let Y=0,v=0;Y<r.length;Y+=9,v+=6){E.set(r[Y+0],r[Y+1],r[Y+2]),y.set(r[Y+3],r[Y+4],r[Y+5]),M.set(r[Y+6],r[Y+7],r[Y+8]),A.set(o[v+0],o[v+1]),S.set(o[v+2],o[v+3]),C.set(o[v+4],o[v+5]),I.copy(E).add(y).add(M).divideScalar(3);let b=m(I);x(A,v+0,E,b),x(S,v+2,y,b),x(C,v+4,M,b)}}function x(E,y,M,I){I<0&&E.x===1&&(o[y]=E.x-1),M.x===0&&M.z===0&&(o[y]=I/2/Math.PI+.5)}function m(E){return Math.atan2(E.z,-E.x)}function u(E){return Math.atan2(-E.y,Math.sqrt(E.x*E.x+E.z*E.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.vertices,e.indices,e.radius,e.details)}};var Et=class extends Mi{constructor(e){super(e),this.uuid=dr(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(new Mi().fromJSON(s))}return this}},G2={triangulate:function(i,e,t=2){let n=e&&e.length,s=n?e[0]*t:i.length,r=r0(i,0,s,t,!0),o=[];if(!r||r.next===r.prev)return o;let a,c,l,h,p,f,d;if(n&&(r=Z2(i,e,r,t)),i.length>80*t){a=l=i[0],c=h=i[1];for(let g=t;g<s;g+=t)p=i[g],f=i[g+1],p<a&&(a=p),f<c&&(c=f),p>l&&(l=p),f>h&&(h=f);d=Math.max(l-a,h-c),d=d!==0?32767/d:0}return ra(r,o,t,a,c,d,0),o}};function r0(i,e,t,n,s){let r,o;if(s===rM(i,e,t,n)>0)for(r=e;r<t;r+=n)o=Rp(r,i[r],i[r+1],o);else for(r=t-n;r>=e;r-=n)o=Rp(r,i[r],i[r+1],o);return o&&jc(o,o.next)&&(aa(o),o=o.next),o}function lr(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(jc(t,t.next)||cn(t.prev,t,t.next)===0)){if(aa(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function ra(i,e,t,n,s,r,o){if(!i)return;!o&&r&&j2(i,n,s,r);let a=i,c,l;for(;i.prev!==i.next;){if(c=i.prev,l=i.next,r?X2(i,n,s,r):W2(i)){e.push(c.i/t|0),e.push(i.i/t|0),e.push(l.i/t|0),aa(i),i=l.next,a=l.next;continue}if(i=l,i===a){o?o===1?(i=q2(lr(i),e,t),ra(i,e,t,n,s,r,2)):o===2&&Y2(i,e,t,n,s,r):ra(lr(i),e,t,n,s,r,1);break}}}function W2(i){let e=i.prev,t=i,n=i.next;if(cn(e,t,n)>=0)return!1;let s=e.x,r=t.x,o=n.x,a=e.y,c=t.y,l=n.y,h=s<r?s<o?s:o:r<o?r:o,p=a<c?a<l?a:l:c<l?c:l,f=s>r?s>o?s:o:r>o?r:o,d=a>c?a>l?a:l:c>l?c:l,g=n.next;for(;g!==e;){if(g.x>=h&&g.x<=f&&g.y>=p&&g.y<=d&&Vr(s,a,r,c,o,l,g.x,g.y)&&cn(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function X2(i,e,t,n){let s=i.prev,r=i,o=i.next;if(cn(s,r,o)>=0)return!1;let a=s.x,c=r.x,l=o.x,h=s.y,p=r.y,f=o.y,d=a<c?a<l?a:l:c<l?c:l,g=h<p?h<f?h:f:p<f?p:f,x=a>c?a>l?a:l:c>l?c:l,m=h>p?h>f?h:f:p>f?p:f,u=Uu(d,g,e,t,n),E=Uu(x,m,e,t,n),y=i.prevZ,M=i.nextZ;for(;y&&y.z>=u&&M&&M.z<=E;){if(y.x>=d&&y.x<=x&&y.y>=g&&y.y<=m&&y!==s&&y!==o&&Vr(a,h,c,p,l,f,y.x,y.y)&&cn(y.prev,y,y.next)>=0||(y=y.prevZ,M.x>=d&&M.x<=x&&M.y>=g&&M.y<=m&&M!==s&&M!==o&&Vr(a,h,c,p,l,f,M.x,M.y)&&cn(M.prev,M,M.next)>=0))return!1;M=M.nextZ}for(;y&&y.z>=u;){if(y.x>=d&&y.x<=x&&y.y>=g&&y.y<=m&&y!==s&&y!==o&&Vr(a,h,c,p,l,f,y.x,y.y)&&cn(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;M&&M.z<=E;){if(M.x>=d&&M.x<=x&&M.y>=g&&M.y<=m&&M!==s&&M!==o&&Vr(a,h,c,p,l,f,M.x,M.y)&&cn(M.prev,M,M.next)>=0)return!1;M=M.nextZ}return!0}function q2(i,e,t){let n=i;do{let s=n.prev,r=n.next.next;!jc(s,r)&&o0(s,n,n.next,r)&&oa(s,r)&&oa(r,s)&&(e.push(s.i/t|0),e.push(n.i/t|0),e.push(r.i/t|0),aa(n),aa(n.next),n=i=r),n=n.next}while(n!==i);return lr(n)}function Y2(i,e,t,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&nM(o,a)){let c=a0(o,a);o=lr(o,o.next),c=lr(c,c.next),ra(o,e,t,n,s,r,0),ra(c,e,t,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function Z2(i,e,t,n){let s=[],r,o,a,c,l;for(r=0,o=e.length;r<o;r++)a=e[r]*n,c=r<o-1?e[r+1]*n:i.length,l=r0(i,a,c,n,!1),l===l.next&&(l.steiner=!0),s.push(tM(l));for(s.sort($2),r=0;r<s.length;r++)t=K2(s[r],t);return t}function $2(i,e){return i.x-e.x}function K2(i,e){let t=J2(i,e);if(!t)return e;let n=a0(t,i);return lr(n,n.next),lr(t,t.next)}function J2(i,e){let t=e,n=-1/0,s,r=i.x,o=i.y;do{if(o<=t.y&&o>=t.next.y&&t.next.y!==t.y){let f=t.x+(o-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(f<=r&&f>n&&(n=f,s=t.x<t.next.x?t:t.next,f===r))return s}t=t.next}while(t!==e);if(!s)return null;let a=s,c=s.x,l=s.y,h=1/0,p;t=s;do r>=t.x&&t.x>=c&&r!==t.x&&Vr(o<l?r:n,o,c,l,o<l?n:r,o,t.x,t.y)&&(p=Math.abs(o-t.y)/(r-t.x),oa(t,i)&&(p<h||p===h&&(t.x>s.x||t.x===s.x&&Q2(s,t)))&&(s=t,h=p)),t=t.next;while(t!==a);return s}function Q2(i,e){return cn(i.prev,i,e.prev)<0&&cn(e.next,i,i.next)<0}function j2(i,e,t,n){let s=i;do s.z===0&&(s.z=Uu(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,eM(s)}function eM(i){let e,t,n,s,r,o,a,c,l=1;do{for(t=i,i=null,r=null,o=0;t;){for(o++,n=t,a=0,e=0;e<l&&(a++,n=n.nextZ,!!n);e++);for(c=l;a>0||c>0&&n;)a!==0&&(c===0||!n||t.z<=n.z)?(s=t,t=t.nextZ,a--):(s=n,n=n.nextZ,c--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;t=n}r.nextZ=null,l*=2}while(o>1);return i}function Uu(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function tM(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function Vr(i,e,t,n,s,r,o,a){return(s-o)*(e-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(s-o)*(n-a)}function nM(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!iM(i,e)&&(oa(i,e)&&oa(e,i)&&sM(i,e)&&(cn(i.prev,i,e.prev)||cn(i,e.prev,e))||jc(i,e)&&cn(i.prev,i,i.next)>0&&cn(e.prev,e,e.next)>0)}function cn(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function jc(i,e){return i.x===e.x&&i.y===e.y}function o0(i,e,t,n){let s=dc(cn(i,e,t)),r=dc(cn(i,e,n)),o=dc(cn(t,n,i)),a=dc(cn(t,n,e));return!!(s!==r&&o!==a||s===0&&uc(i,t,e)||r===0&&uc(i,n,e)||o===0&&uc(t,i,n)||a===0&&uc(t,e,n))}function uc(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function dc(i){return i>0?1:i<0?-1:0}function iM(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&o0(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function oa(i,e){return cn(i.prev,i,i.next)<0?cn(i,e,i.next)>=0&&cn(i,i.prev,e)>=0:cn(i,e,i.prev)<0||cn(i,i.next,e)<0}function sM(i,e){let t=i,n=!1,s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function a0(i,e){let t=new Hu(i.i,i.x,i.y),n=new Hu(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function Rp(i,e,t,n){let s=new Hu(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function aa(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Hu(i,e,t){this.i=i,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function rM(i,e,t,n){let s=0;for(let r=e,o=t-n;r<t;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}var Ps=class i{static area(e){let t=e.length,n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],s=[],r=[];Ap(e),Cp(n,e);let o=e.length;t.forEach(Ap);for(let c=0;c<t.length;c++)s.push(o),o+=t[c].length,Cp(n,t[c]);let a=G2.triangulate(n,s);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}};function Ap(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function Cp(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}var rn=class i extends Ct{constructor(e=new Et([new Ne(.5,.5),new Ne(-.5,.5),new Ne(-.5,-.5),new Ne(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,s=[],r=[];for(let a=0,c=e.length;a<c;a++){let l=e[a];o(l)}this.setAttribute("position",new ct(s,3)),this.setAttribute("uv",new ct(r,2)),this.computeVertexNormals();function o(a){let c=[],l=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,p=t.depth!==void 0?t.depth:1,f=t.bevelEnabled!==void 0?t.bevelEnabled:!0,d=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:d-.1,x=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3,u=t.extrudePath,E=t.UVGenerator!==void 0?t.UVGenerator:oM,y,M=!1,I,A,S,C;u&&(y=u.getSpacedPoints(h),M=!0,f=!1,I=u.computeFrenetFrames(h,!1),A=new w,S=new w,C=new w),f||(m=0,d=0,g=0,x=0);let Y=a.extractPoints(l),v=Y.shape,b=Y.holes;if(!Ps.isClockWise(v)){v=v.reverse();for(let Q=0,P=b.length;Q<P;Q++){let _e=b[Q];Ps.isClockWise(_e)&&(b[Q]=_e.reverse())}}let B=Ps.triangulateShape(v,b),G=v;for(let Q=0,P=b.length;Q<P;Q++){let _e=b[Q];v=v.concat(_e)}function H(Q,P,_e){return P||console.error("THREE.ExtrudeGeometry: vec does not exist"),Q.clone().addScaledVector(P,_e)}let J=v.length,ye=B.length;function ie(Q,P,_e){let ne,he,me,Ce=Q.x-P.x,we=Q.y-P.y,U=_e.x-Q.x,T=_e.y-Q.y,K=Ce*Ce+we*we,xe=Ce*T-we*U;if(Math.abs(xe)>Number.EPSILON){let be=Math.sqrt(K),Me=Math.sqrt(U*U+T*T),We=P.x-we/be,Oe=P.y+Ce/be,qe=_e.x-T/Me,xt=_e.y+U/Me,De=((qe-We)*T-(xt-Oe)*U)/(Ce*T-we*U);ne=We+Ce*De-Q.x,he=Oe+we*De-Q.y;let $=ne*ne+he*he;if($<=2)return new Ne(ne,he);me=Math.sqrt($/2)}else{let be=!1;Ce>Number.EPSILON?U>Number.EPSILON&&(be=!0):Ce<-Number.EPSILON?U<-Number.EPSILON&&(be=!0):Math.sign(we)===Math.sign(T)&&(be=!0),be?(ne=-we,he=Ce,me=Math.sqrt(K)):(ne=Ce,he=we,me=Math.sqrt(K/2))}return new Ne(ne/me,he/me)}let fe=[];for(let Q=0,P=G.length,_e=P-1,ne=Q+1;Q<P;Q++,_e++,ne++)_e===P&&(_e=0),ne===P&&(ne=0),fe[Q]=ie(G[Q],G[_e],G[ne]);let N=[],ee,oe=fe.concat();for(let Q=0,P=b.length;Q<P;Q++){let _e=b[Q];ee=[];for(let ne=0,he=_e.length,me=he-1,Ce=ne+1;ne<he;ne++,me++,Ce++)me===he&&(me=0),Ce===he&&(Ce=0),ee[ne]=ie(_e[ne],_e[me],_e[Ce]);N.push(ee),oe=oe.concat(ee)}for(let Q=0;Q<m;Q++){let P=Q/m,_e=d*Math.cos(P*Math.PI/2),ne=g*Math.sin(P*Math.PI/2)+x;for(let he=0,me=G.length;he<me;he++){let Ce=H(G[he],fe[he],ne);W(Ce.x,Ce.y,-_e)}for(let he=0,me=b.length;he<me;he++){let Ce=b[he];ee=N[he];for(let we=0,U=Ce.length;we<U;we++){let T=H(Ce[we],ee[we],ne);W(T.x,T.y,-_e)}}}let j=g+x;for(let Q=0;Q<J;Q++){let P=f?H(v[Q],oe[Q],j):v[Q];M?(S.copy(I.normals[0]).multiplyScalar(P.x),A.copy(I.binormals[0]).multiplyScalar(P.y),C.copy(y[0]).add(S).add(A),W(C.x,C.y,C.z)):W(P.x,P.y,0)}for(let Q=1;Q<=h;Q++)for(let P=0;P<J;P++){let _e=f?H(v[P],oe[P],j):v[P];M?(S.copy(I.normals[Q]).multiplyScalar(_e.x),A.copy(I.binormals[Q]).multiplyScalar(_e.y),C.copy(y[Q]).add(S).add(A),W(C.x,C.y,C.z)):W(_e.x,_e.y,p/h*Q)}for(let Q=m-1;Q>=0;Q--){let P=Q/m,_e=d*Math.cos(P*Math.PI/2),ne=g*Math.sin(P*Math.PI/2)+x;for(let he=0,me=G.length;he<me;he++){let Ce=H(G[he],fe[he],ne);W(Ce.x,Ce.y,p+_e)}for(let he=0,me=b.length;he<me;he++){let Ce=b[he];ee=N[he];for(let we=0,U=Ce.length;we<U;we++){let T=H(Ce[we],ee[we],ne);M?W(T.x,T.y+y[h-1].y,y[h-1].x+_e):W(T.x,T.y,p+_e)}}}O(),ae();function O(){let Q=s.length/3;if(f){let P=0,_e=J*P;for(let ne=0;ne<ye;ne++){let he=B[ne];Z(he[2]+_e,he[1]+_e,he[0]+_e)}P=h+m*2,_e=J*P;for(let ne=0;ne<ye;ne++){let he=B[ne];Z(he[0]+_e,he[1]+_e,he[2]+_e)}}else{for(let P=0;P<ye;P++){let _e=B[P];Z(_e[2],_e[1],_e[0])}for(let P=0;P<ye;P++){let _e=B[P];Z(_e[0]+J*h,_e[1]+J*h,_e[2]+J*h)}}n.addGroup(Q,s.length/3-Q,0)}function ae(){let Q=s.length/3,P=0;V(G,P),P+=G.length;for(let _e=0,ne=b.length;_e<ne;_e++){let he=b[_e];V(he,P),P+=he.length}n.addGroup(Q,s.length/3-Q,1)}function V(Q,P){let _e=Q.length;for(;--_e>=0;){let ne=_e,he=_e-1;he<0&&(he=Q.length-1);for(let me=0,Ce=h+m*2;me<Ce;me++){let we=J*me,U=J*(me+1),T=P+ne+we,K=P+he+we,xe=P+he+U,be=P+ne+U;ge(T,K,xe,be)}}}function W(Q,P,_e){c.push(Q),c.push(P),c.push(_e)}function Z(Q,P,_e){Ae(Q),Ae(P),Ae(_e);let ne=s.length/3,he=E.generateTopUV(n,s,ne-3,ne-2,ne-1);de(he[0]),de(he[1]),de(he[2])}function ge(Q,P,_e,ne){Ae(Q),Ae(P),Ae(ne),Ae(P),Ae(_e),Ae(ne);let he=s.length/3,me=E.generateSideWallUV(n,s,he-6,he-3,he-2,he-1);de(me[0]),de(me[1]),de(me[3]),de(me[1]),de(me[2]),de(me[3])}function Ae(Q){s.push(c[Q*3+0]),s.push(c[Q*3+1]),s.push(c[Q*3+2])}function de(Q){r.push(Q.x),r.push(Q.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return aM(t,n,e)}static fromJSON(e,t){let n=[];for(let r=0,o=e.shapes.length;r<o;r++){let a=t[e.shapes[r]];n.push(a)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new Wc[s.type]().fromJSON(s)),new i(n,e.options)}},oM={generateTopUV:function(i,e,t,n,s){let r=e[t*3],o=e[t*3+1],a=e[n*3],c=e[n*3+1],l=e[s*3],h=e[s*3+1];return[new Ne(r,o),new Ne(a,c),new Ne(l,h)]},generateSideWallUV:function(i,e,t,n,s,r){let o=e[t*3],a=e[t*3+1],c=e[t*3+2],l=e[n*3],h=e[n*3+1],p=e[n*3+2],f=e[s*3],d=e[s*3+1],g=e[s*3+2],x=e[r*3],m=e[r*3+1],u=e[r*3+2];return Math.abs(a-h)<Math.abs(o-l)?[new Ne(o,1-c),new Ne(l,1-p),new Ne(f,1-g),new Ne(x,1-u)]:[new Ne(a,1-c),new Ne(h,1-p),new Ne(d,1-g),new Ne(m,1-u)]}};function aM(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];t.shapes.push(r.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var Xc=class i extends Du{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}};var Ns=class i extends Ct{constructor(e=.5,t=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);let a=[],c=[],l=[],h=[],p=e,f=(t-e)/s,d=new w,g=new Ne;for(let x=0;x<=s;x++){for(let m=0;m<=n;m++){let u=r+m/n*o;d.x=p*Math.cos(u),d.y=p*Math.sin(u),c.push(d.x,d.y,d.z),l.push(0,0,1),g.x=(d.x/t+1)/2,g.y=(d.y/t+1)/2,h.push(g.x,g.y)}p+=f}for(let x=0;x<s;x++){let m=x*(n+1);for(let u=0;u<n;u++){let E=u+m,y=E,M=E+n+1,I=E+n+2,A=E+1;a.push(y,M,A),a.push(M,I,A)}}this.setIndex(a),this.setAttribute("position",new ct(c,3)),this.setAttribute("normal",new ct(l,3)),this.setAttribute("uv",new ct(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}},Oi=class i extends Ct{constructor(e=new Et([new Ne(0,.5),new Ne(-.5,-.5),new Ne(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let n=[],s=[],r=[],o=[],a=0,c=0;if(Array.isArray(e)===!1)l(e);else for(let h=0;h<e.length;h++)l(e[h]),this.addGroup(a,c,h),a+=c,c=0;this.setIndex(n),this.setAttribute("position",new ct(s,3)),this.setAttribute("normal",new ct(r,3)),this.setAttribute("uv",new ct(o,2));function l(h){let p=s.length/3,f=h.extractPoints(t),d=f.shape,g=f.holes;Ps.isClockWise(d)===!1&&(d=d.reverse());for(let m=0,u=g.length;m<u;m++){let E=g[m];Ps.isClockWise(E)===!0&&(g[m]=E.reverse())}let x=Ps.triangulateShape(d,g);for(let m=0,u=g.length;m<u;m++){let E=g[m];d=d.concat(E)}for(let m=0,u=d.length;m<u;m++){let E=d[m];s.push(E.x,E.y,0),r.push(0,0,1),o.push(E.x,E.y)}for(let m=0,u=x.length;m<u;m++){let E=x[m],y=E[0]+p,M=E[1]+p,I=E[2]+p;n.push(y,M,I),c+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return cM(t,e)}static fromJSON(e,t){let n=[];for(let s=0,r=e.shapes.length;s<r;s++){let o=t[e.shapes[s]];n.push(o)}return new i(n,e.curveSegments)}};function cM(i,e){if(e.shapes=[],Array.isArray(i))for(let t=0,n=i.length;t<n;t++){let s=i[t];e.shapes.push(s.uuid)}else e.shapes.push(i.uuid);return e}var qt=class i extends Ct{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let c=Math.min(o+a,Math.PI),l=0,h=[],p=new w,f=new w,d=[],g=[],x=[],m=[];for(let u=0;u<=n;u++){let E=[],y=u/n,M=0;u===0&&o===0?M=.5/t:u===n&&c===Math.PI&&(M=-.5/t);for(let I=0;I<=t;I++){let A=I/t;p.x=-e*Math.cos(s+A*r)*Math.sin(o+y*a),p.y=e*Math.cos(o+y*a),p.z=e*Math.sin(s+A*r)*Math.sin(o+y*a),g.push(p.x,p.y,p.z),f.copy(p).normalize(),x.push(f.x,f.y,f.z),m.push(A+M,1-y),E.push(l++)}h.push(E)}for(let u=0;u<n;u++)for(let E=0;E<t;E++){let y=h[u][E+1],M=h[u][E],I=h[u+1][E],A=h[u+1][E+1];(u!==0||o>0)&&d.push(y,M,A),(u!==n-1||c<Math.PI)&&d.push(M,I,A)}this.setIndex(d),this.setAttribute("position",new ct(g,3)),this.setAttribute("normal",new ct(x,3)),this.setAttribute("uv",new ct(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var $t=class i extends Ct{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);let o=[],a=[],c=[],l=[],h=new w,p=new w,f=new w;for(let d=0;d<=n;d++)for(let g=0;g<=s;g++){let x=g/s*r,m=d/n*Math.PI*2;p.x=(e+t*Math.cos(m))*Math.cos(x),p.y=(e+t*Math.cos(m))*Math.sin(x),p.z=t*Math.sin(m),a.push(p.x,p.y,p.z),h.x=e*Math.cos(x),h.y=e*Math.sin(x),f.subVectors(p,h).normalize(),c.push(f.x,f.y,f.z),l.push(g/s),l.push(d/n)}for(let d=1;d<=n;d++)for(let g=1;g<=s;g++){let x=(s+1)*d+g-1,m=(s+1)*(d-1)+g-1,u=(s+1)*(d-1)+g,E=(s+1)*d+g;o.push(x,m,E),o.push(m,u,E)}this.setIndex(o),this.setAttribute("position",new ct(a,3)),this.setAttribute("normal",new ct(c,3)),this.setAttribute("uv",new ct(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}};var un=class i extends Ct{constructor(e=new Vc(new w(-1,-1,0),new w(-1,1,0),new w(1,1,0)),t=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:s,closed:r};let o=e.computeFrenetFrames(t,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new w,c=new w,l=new Ne,h=new w,p=[],f=[],d=[],g=[];x(),this.setIndex(g),this.setAttribute("position",new ct(p,3)),this.setAttribute("normal",new ct(f,3)),this.setAttribute("uv",new ct(d,2));function x(){for(let y=0;y<t;y++)m(y);m(r===!1?t:0),E(),u()}function m(y){h=e.getPointAt(y/t,h);let M=o.normals[y],I=o.binormals[y];for(let A=0;A<=s;A++){let S=A/s*Math.PI*2,C=Math.sin(S),Y=-Math.cos(S);c.x=Y*M.x+C*I.x,c.y=Y*M.y+C*I.y,c.z=Y*M.z+C*I.z,c.normalize(),f.push(c.x,c.y,c.z),a.x=h.x+n*c.x,a.y=h.y+n*c.y,a.z=h.z+n*c.z,p.push(a.x,a.y,a.z)}}function u(){for(let y=1;y<=t;y++)for(let M=1;M<=s;M++){let I=(s+1)*(y-1)+(M-1),A=(s+1)*y+(M-1),S=(s+1)*y+M,C=(s+1)*(y-1)+M;g.push(I,A,C),g.push(A,S,C)}}function E(){for(let y=0;y<=t;y++)for(let M=0;M<=s;M++)l.x=y/t,l.y=M/s,d.push(l.x,l.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new i(new Wc[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}};var Be=class extends Ds{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new ut(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ut(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=$p,this.normalScale=new Ne(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ii,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},kt=class extends Be{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ne(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Sn(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new ut(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ut(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ut(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};function fc(i,e,t){return!i||!t&&i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function lM(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var no=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=t[++n],e<s)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(n=2,r=a);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Nu=class extends no{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Rf,endingEnd:Rf}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],c=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Af:r=e,a=2*t-n;break;case Cf:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Af:o=e,c=2*n-t;break;case Cf:o=1,c=n+s[1]-s[0];break;default:o=e-1,c=t}let l=(n-t)*.5,h=this.valueSize;this._weightPrev=l/(t-a),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=this._offsetPrev,p=this._offsetNext,f=this._weightPrev,d=this._weightNext,g=(n-t)/(s-t),x=g*g,m=x*g,u=-f*m+2*f*x-f*g,E=(1+f)*m+(-1.5-2*f)*x+(-.5+f)*g+1,y=(-1-d)*m+(1.5+d)*x+.5*g,M=d*m-d*x;for(let I=0;I!==a;++I)r[I]=u*o[h+I]+E*o[l+I]+y*o[c+I]+M*o[p+I];return r}},Fu=class extends no{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=(n-t)/(s-t),p=1-h;for(let f=0;f!==a;++f)r[f]=o[l+f]*p+o[c+f]*h;return r}},Ou=class extends no{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},zi=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=fc(t,this.TimeBufferType),this.values=fc(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:fc(e.times,Array),values:fc(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Ou(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Fu(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Nu(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Mc:t=this.InterpolantFactoryMethodDiscrete;break;case fu:t=this.InterpolantFactoryMethodLinear;break;case Kl:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Mc;case this.InterpolantFactoryMethodLinear:return fu;case this.InterpolantFactoryMethodSmooth:return Kl}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let c=n[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),e=!1;break}o=c}if(s!==void 0&&lM(s))for(let a=0,c=s.length;a!==c;++a){let l=s[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Kl,r=e.length-1,o=1;for(let a=1;a<r;++a){let c=!1,l=e[a],h=e[a+1];if(l!==h&&(a!==1||l!==e[0]))if(s)c=!0;else{let p=a*n,f=p-n,d=p+n;for(let g=0;g!==n;++g){let x=t[p+g];if(x!==t[f+g]||x!==t[d+g]){c=!0;break}}}if(c){if(a!==o){e[o]=e[a];let p=a*n,f=o*n;for(let d=0;d!==n;++d)t[f+d]=t[p+d]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,c=o*n,l=0;l!==n;++l)t[c+l]=t[a+l];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};zi.prototype.TimeBufferType=Float32Array;zi.prototype.ValueBufferType=Float32Array;zi.prototype.DefaultInterpolation=fu;var hr=class extends zi{constructor(e,t,n){super(e,t,n)}};hr.prototype.ValueTypeName="bool";hr.prototype.ValueBufferType=Array;hr.prototype.DefaultInterpolation=Mc;hr.prototype.InterpolantFactoryMethodLinear=void 0;hr.prototype.InterpolantFactoryMethodSmooth=void 0;var zu=class extends zi{};zu.prototype.ValueTypeName="color";var Bu=class extends zi{};Bu.prototype.ValueTypeName="number";var ku=class extends no{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-t)/(s-t),l=e*a;for(let h=l+a;l!==h;l+=4)pt.slerpFlat(r,0,o,l-a,o,l,c);return r}},qc=class extends zi{InterpolantFactoryMethodLinear(e){return new ku(this.times,this.values,this.getValueSize(),e)}};qc.prototype.ValueTypeName="quaternion";qc.prototype.InterpolantFactoryMethodSmooth=void 0;var ur=class extends zi{constructor(e,t,n){super(e,t,n)}};ur.prototype.ValueTypeName="string";ur.prototype.ValueBufferType=Array;ur.prototype.DefaultInterpolation=Mc;ur.prototype.InterpolantFactoryMethodLinear=void 0;ur.prototype.InterpolantFactoryMethodSmooth=void 0;var Vu=class extends zi{};Vu.prototype.ValueTypeName="vector";var Pp={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}},Gu=class{constructor(e,t,n){let s=this,r=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,p){return l.push(h,p),this},this.removeHandler=function(h){let p=l.indexOf(h);return p!==-1&&l.splice(p,2),this},this.getHandler=function(h){for(let p=0,f=l.length;p<f;p+=2){let d=l[p],g=l[p+1];if(d.global&&(d.lastIndex=0),d.test(h))return g}return null}}},hM=new Gu,ca=class{constructor(e){this.manager=e!==void 0?e:hM,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};ca.DEFAULT_MATERIAL_NAME="__DEFAULT";var Wu=class extends ca{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=Pp.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;let a=Qo("img");function c(){h(),Pp.add(e,this),t&&t(this),r.manager.itemEnd(e)}function l(p){h(),s&&s(p),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}};var io=class extends ca{constructor(e){super(e)}load(e,t,n,s){let r=new Kn,o=new Wu(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}},so=class extends Nt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ut(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},Yc=class extends so{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Nt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ut(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},Ah=new wt,Ip=new w,Lp=new w,la=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ne(512,512),this.map=null,this.mapPass=null,this.matrix=new wt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ta,this._frameExtents=new Ne(1,1),this._viewportCount=1,this._viewports=[new Yt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;Ip.setFromMatrixPosition(e.matrixWorld),t.position.copy(Ip),Lp.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Lp),t.updateMatrixWorld(),Ah.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ah),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ah)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Xu=class extends la{constructor(){super(new Fn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){let t=this.camera,n=Qr*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},ro=class extends so{constructor(e,t,n=0,s=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Nt.DEFAULT_UP),this.updateMatrix(),this.target=new Nt,this.distance=n,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new Xu}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},Dp=new wt,Go=new w,Ch=new w,qu=class extends la{constructor(){super(new Fn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ne(4,2),this._viewportCount=6,this._viewports=[new Yt(2,1,1,1),new Yt(0,1,1,1),new Yt(3,1,1,1),new Yt(1,1,1,1),new Yt(3,0,1,1),new Yt(1,0,1,1)],this._cubeDirections=[new w(1,0,0),new w(-1,0,0),new w(0,0,1),new w(0,0,-1),new w(0,1,0),new w(0,-1,0)],this._cubeUps=[new w(0,1,0),new w(0,1,0),new w(0,1,0),new w(0,1,0),new w(0,0,1),new w(0,0,-1)]}updateMatrices(e,t=0){let n=this.camera,s=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Go.setFromMatrixPosition(e.matrixWorld),n.position.copy(Go),Ch.copy(n.position),Ch.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Ch),n.updateMatrixWorld(),s.makeTranslation(-Go.x,-Go.y,-Go.z),Dp.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Dp)}},On=class extends so{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new qu}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},Yu=class extends la{constructor(){super(new Lc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Zc=class extends so{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Nt.DEFAULT_UP),this.updateMatrix(),this.target=new Nt,this.shadow=new Yu}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var $c=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Up(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=Up();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};function Up(){return performance.now()}var hd="\\[\\]\\.:\\/",uM=new RegExp("["+hd+"]","g"),ud="[^"+hd+"]",dM="[^"+hd.replace("\\.","")+"]",fM=/((?:WC+[\/:])*)/.source.replace("WC",ud),pM=/(WCOD+)?/.source.replace("WCOD",dM),mM=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",ud),gM=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",ud),xM=new RegExp("^"+fM+pM+mM+gM+"$"),yM=["material","materials","bones","map"],Zu=class{constructor(e,t,n){let s=n||an.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},an=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(uM,"")}static parseTrackName(e){let t=xM.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);yM.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let c=n(a.children);if(c)return c}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let o=e[s];if(o===void 0){let l=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};an.Composite=Zu;an.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};an.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};an.prototype.GetterByBindingType=[an.prototype._getValue_direct,an.prototype._getValue_array,an.prototype._getValue_arrayElement,an.prototype._getValue_toArray];an.prototype.SetterByBindingTypeAndVersioning=[[an.prototype._setValue_direct,an.prototype._setValue_direct_setNeedsUpdate,an.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[an.prototype._setValue_array,an.prototype._setValue_array_setNeedsUpdate,an.prototype._setValue_array_setMatrixWorldNeedsUpdate],[an.prototype._setValue_arrayElement,an.prototype._setValue_arrayElement_setNeedsUpdate,an.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[an.prototype._setValue_fromArray,an.prototype._setValue_fromArray_setNeedsUpdate,an.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var mE=new Float32Array(1);var Hp=new wt,ha=class{constructor(e,t,n=0,s=1/0){this.ray=new jo(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new ea,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Hp.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Hp),this}intersectObject(e,t=!0,n=[]){return $u(e,this,n,t),n.sort(Np),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)$u(e[s],this,n,t);return n.sort(Np),n}};function Np(i,e){return i.distance-e.distance}function $u(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let o=0,a=r.length;o<a;o++)$u(r[o],e,t,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"169"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="169");function vM({coarse:i=!1,width:e=1280,cores:t=8,memory:n=8,dpr:s=1}={}){let r=i||e<700||t<=4||n<=4;return Object.freeze({mobile:r,pixelRatio:Math.min(s,r?1.25:1.5),minPixelRatio:Math.min(s,r?.75:1),maxFps:r?30:1/0,shadowSize:r?1024:1536,shadowHz:r?12:24,textureSize:r?256:512,chainSegments:r?16:24,chainRadialSegments:r?4:5,effectsHz:r?24:40,targetFrameMs:r?33.3:22})}var _M=typeof window>"u"?{}:{coarse:matchMedia("(pointer:coarse)").matches,width:innerWidth,cores:navigator.hardwareConcurrency||8,memory:navigator.deviceMemory||8,dpr:devicePixelRatio||1},Lt=vM(_M);function c0(i,{exclude:e=[]}={}){let t=new Set(e),n=new Map,s=new Set,r=new w,o=new w,a=new vt;i.updateWorldMatrix(!0,!0);let c=i.matrixWorld.clone().invert();function l(d){if(!(!d.visible||t.has(d)||d.userData.chargingAction||d.userData.keyAction||Number.isInteger(d.userData.hoistIndex)||Number.isInteger(d.userData.valveIndex))){if(d.isMesh&&!d.isInstancedMesh&&!d.isSkinnedMesh&&!d.children.length){let g=d.geometry,x=d.material,m=g.attributes;if(x&&!Array.isArray(x)&&!x.transparent&&!g.morphAttributes.position&&g.drawRange.start===0&&g.drawRange.count===1/0&&m.position&&Object.keys(m).every(u=>["position","normal","uv"].includes(u))){d.getWorldPosition(r);let u=`${Math.floor(r.x/3)},${Math.floor(r.z/3)}`,E=[x.uuid,d.castShadow,d.receiveShadow,d.renderOrder,Object.keys(m).sort().join(","),u].join("|");n.has(E)||n.set(E,[]),n.get(E).push(d)}}for(let g of d.children)l(g)}}l(i);let h=0,p=0;for(let d of n.values()){if(d.length<3)continue;let g=Object.keys(d[0].geometry.attributes),x=d.reduce((C,Y)=>C+Y.geometry.attributes.position.count,0),m=d.reduce((C,Y)=>C+(Y.geometry.index?.count||Y.geometry.attributes.position.count),0),u=new Ct,E={};for(let C of g){let Y=d[0].geometry.attributes[C].itemSize;E[C]=new Float32Array(x*Y),u.setAttribute(C,new ln(E[C],Y))}let y=new Uint32Array(m),M=0,I=0;for(let C of d){let Y=C.geometry,v=new wt().multiplyMatrices(c,C.matrixWorld);a.getNormalMatrix(v);for(let F=0;F<Y.attributes.position.count;F++)r.fromBufferAttribute(Y.attributes.position,F).applyMatrix4(v),r.toArray(E.position,(M+F)*3),E.normal&&(o.fromBufferAttribute(Y.attributes.normal,F).applyMatrix3(a).normalize(),o.toArray(E.normal,(M+F)*3)),E.uv&&(E.uv[(M+F)*2]=Y.attributes.uv.getX(F),E.uv[(M+F)*2+1]=Y.attributes.uv.getY(F));let b=Y.index?.count||Y.attributes.position.count;for(let F=0;F<b;F++)y[I++]=M+(Y.index?Y.index.getX(F):F);if(v.determinant()<0)for(let F=I-b;F<I;F+=3){let B=y[F+1];y[F+1]=y[F+2],y[F+2]=B}M+=Y.attributes.position.count,s.add(Y),C.removeFromParent(),h++}u.setIndex(new ln(y,1)),u.computeBoundingBox(),u.computeBoundingSphere();let A=d[0],S=new lt(u,A.material);S.name="Batched static office scenery",S.castShadow=A.castShadow,S.receiveShadow=A.receiveShadow,S.renderOrder=A.renderOrder,S.matrixAutoUpdate=!1,i.add(S),p++}let f=new Set;i.traverse(d=>{d.geometry&&f.add(d.geometry)});for(let d of s)f.has(d)||d.dispose();return{removed:h,batches:p}}function l0(i){let e=document.createElement("canvas");e.width=256,e.height=128;let t=e.getContext("2d"),n=t.createLinearGradient(0,0,0,128);n.addColorStop(0,"#111812"),n.addColorStop(.48,"#3a4636"),n.addColorStop(1,"#171d12"),t.fillStyle=n,t.fillRect(0,0,256,128),t.fillStyle="#a9b7a3",t.fillRect(78,19,72,3),t.fillStyle="#596e68",t.fillRect(190,38,29,25),t.fillStyle="#435827",t.fillRect(25,64,34,15);let s=new Ft(e);s.colorSpace=ft,s.mapping=Ko;let r=new eo(i),o=r.fromEquirectangular(s);return r.dispose(),s.dispose(),o}function h0(i,e){if(!new URLSearchParams(location.search).has("profile"))return{mark(){},frame(){}};let t=document.createElement("output");t.id="performance-report",t.hidden=!0,document.body.append(t);let n=performance.now(),s={},r=[],o=0,a=0,c=0;function l(h){s[h]=Math.round(performance.now()-n)}return{mark:l,frame(h){let p=performance.now();if(o||(o=p-n),a&&(r.push(p-a),r.length>90&&r.shift()),a=p,c++,c===1||c%30===0){let f=0;e.traverse(d=>{d.isMesh&&f++}),t.textContent=JSON.stringify({firstFrameMs:Math.round(o),stages:s,frameMs:r.length?Math.round(r.reduce((d,g)=>d+g,0)/r.length*10)/10:0,renderCpuMs:Math.round((p-h)*10)/10,frames:c,calls:i.info.render.calls,triangles:i.info.render.triangles,geometries:i.info.memory.geometries,textures:i.info.memory.textures,meshes:f,pixelRatio:i.getPixelRatio()})}}}}function u0(i){let n=[],s=new Map,r=0,o=new Mt(.735,.41);function a(){let p=document.createElement("canvas");return p.width=1024,p.height=576,[p,p.getContext("2d")]}function c(p,f=!0){let d=new Ft(p);return f&&(d.colorSpace=ft),d.anisotropy=Math.min(8,i.capabilities.getMaxAnisotropy()),d}function l(p,f){let d=13817+f*7319+(p==="hole"?20001:p==="live"?481:0),g=()=>(d=d*1664525+1013904223>>>0,d/4294967296),x=(N,ee)=>N+(ee-N)*g(),[m,u]=a(),[E,y]=a(),[M,I]=a(),[A,S]=a();u.fillStyle="#080d10",u.fillRect(0,0,1024,576),I.fillStyle="#545454",I.fillRect(0,0,1024,576),S.fillStyle="#777",S.fillRect(0,0,1024,576);let C=p==="live"||p==="cracked"&&f%2===0,Y=u.createLinearGradient(0,0,1024,576);if(Y.addColorStop(0,"#1b262a"),Y.addColorStop(.45,"#0b1217"),Y.addColorStop(1,"#040709"),u.fillStyle=Y,u.fillRect(0,0,1024,576),C){u.fillStyle="#253438",u.fillRect(0,0,1024,27),u.fillRect(0,27,150,576);for(let N=0;N<28;N++){let ee=174;for(let oe=0;oe<x(3,10);oe++){u.fillStyle=["#365b51","#47615d","#354847"][Math.floor(g()*3)];let j=x(9,93);u.fillRect(ee,53+N*17,j,2),ee+=j+x(5,15)}}for(let N=0;N<576;N+=3)u.fillStyle="rgba(0,0,0,.18)",u.fillRect(0,N,1024,1)}let v={x:x(1024*.2,1024*.78),y:x(576*.22,576*.78)};function b(N,ee,oe,j,O=0,ae=0){ee.strokeStyle=oe,ee.lineWidth=j,ee.beginPath(),N.forEach(([V,W],Z)=>Z?ee.lineTo(V+O,W+ae):ee.moveTo(V+O,W+ae)),ee.stroke()}function F(N,ee=1){b(N,y,"rgba(0,3,6,.86)",ee*1.9),b(N,y,`rgba(185,212,216,${x(.45,.9)})`,ee*.7,-.7,.35),g()<.3&&b(N,y,"rgba(113,153,163,.35)",.5,.75,-.35),b(N,S,"#242424",ee*1.6),b(N,S,"#bfbfbf",ee*.7,-.7,.35),b(N,I,"#b9b9b9",ee*1.5)}let B=[];if(p!=="live"){let j=function(V,W,Z=1){u.fillStyle=W,u.beginPath(),V.forEach(([ge,Ae],de)=>{ge=v.x+(ge-v.x)*Z,Ae=v.y+(Ae-v.y)*Z,de?u.lineTo(ge,Ae):u.moveTo(ge,Ae)}),u.closePath(),u.fill()},N=[],ee=p==="hole"?x(68,107):x(42,78),oe=ee*x(.42,.75);for(let V=0;V<72;V++){let W=V/72*Math.PI*2,Z=1+.13*Math.sin(W*5+f)+.07*Math.sin(W*13);N.push([v.x+Math.cos(W)*ee*Z,v.y+Math.sin(W)*oe*Z])}for(let[V,W]of[[1.18,"rgba(56,39,73,.46)"],[1.1,"rgba(36,72,74,.55)"],[1.05,"#151c2a"],[1,"#010204"]])j(N,W,V);if(C||p==="hole"&&f===1){for(let Z=0;Z<61;Z++){let ge=v.x+x(-ee*1.7,ee*1.7),Ae=Z%3?0:v.y,de=Z%3?v.y:576;u.fillStyle=["rgba(85,129,115,.65)","rgba(130,62,94,.6)","rgba(70,103,146,.60)","rgba(172,177,161,.48)"][Z%4],u.fillRect(ge,Ae,x(.4,2),de-Ae)}let V=v.x+ee*.4,W=x(35,108);u.fillStyle="rgba(130,151,153,.23)",u.fillRect(V,0,W,v.y);for(let Z=0;Z<v.y;Z+=3)u.fillStyle=`rgba(15,28,32,${x(.15,.65)})`,u.fillRect(V,Z,W,1);for(let Z=0;Z<9;Z++)u.fillStyle=Z%3?"rgba(2,5,8,.85)":"rgba(129,156,153,.45)",u.fillRect(0,v.y+x(-15,18),1024,x(.5,2.4));j(N,"#010204",.98)}let O=12+f%4,ae=Array.from({length:O},(V,W)=>W/O*Math.PI*2+x(-.11,.11));for(let V of ae){let W=[[v.x+Math.cos(V)*3,v.y+Math.sin(V)*3]],Z=x(7,13);for(;Z<1300;){let ge=x(-.021,.021),Ae=v.x+Math.cos(V+ge)*Z,de=v.y+Math.sin(V+ge)*Z;if(W.push([Ae,de]),Z+=x(16,47),Ae<0||Ae>1024||de<0||de>576)break}F(W,x(.55,1.2));for(let ge=2;ge<W.length-1;ge++)if(g()<.33){let[Ae,de]=W[ge],Q=g()<.5?-1:1,P=V+Q*x(.18,.65),_e=x(28,145),ne=[[Ae,de]];for(let he=1;he<=5;he++)ne.push([Ae+Math.cos(P)*_e*he/5+x(-3,3),de+Math.sin(P)*_e*he/5+x(-3,3)]);F(ne,x(.3,.64))}}for(let V of[18,35,61,101,155])for(let W=0;W<O;W++){if(g()<.28||V>70&&g()<.45)continue;let Z=ae[W],ge=W===O-1?ae[0]+Math.PI*2:ae[W+1],Ae=V*x(.8,1.12),de=[];for(let Q=0;Q<=4;Q++){let P=Z+(ge-Z)*Q/4;de.push([v.x+Math.cos(P)*Ae+x(-3,3),v.y+Math.sin(P)*Ae*.84+x(-2,2)])}F(de,x(.35,.75))}for(let V=0;V<90;V++){let W=g()*Math.PI*2,Z=x(2,25),ge=v.x+Math.cos(W)*Z,Ae=v.y+Math.sin(W)*Z*.7;F([[ge,Ae],[ge+x(-6,6),Ae+x(-5,5)]],x(.3,.8))}if(p==="hole")for(let V=0;V<7;V++){let W=V/7*Math.PI*2,Z=x(8,26),ge=v.x+Math.cos(W)*Z,Ae=v.y+Math.sin(W)*Z*.7,de=[[ge,Ae],[ge+x(4,11),Ae+x(-6,2)],[ge+x(-3,5),Ae+x(4,13)]];B.push(de),u.fillStyle="#000102",u.beginPath(),de.forEach(([Q,P],_e)=>_e?u.lineTo(Q,P):u.moveTo(Q,P)),u.closePath(),u.fill(),F([...de,de[0]],1)}}for(let N=0;N<35;N++){let ee=g()*1024,oe=g()*576,j=x(20,115),O=I.createRadialGradient(ee,oe,0,ee,oe,j);O.addColorStop(0,"rgba(205,205,205,.20)"),O.addColorStop(1,"rgba(160,160,160,0)"),I.fillStyle=O,I.fillRect(ee-j,oe-j,j*2,j*2)}for(let N=0;N<3800;N++){let ee=g()*1024,oe=g()*576;I.fillStyle=`rgba(230,230,230,${x(.06,.4)})`,I.fillRect(ee,oe,x(.4,1.3),x(.4,1.1)),N%9===0&&(y.fillStyle="rgba(135,149,146,.13)",y.fillRect(ee,oe,.65,.65))}for(let N=0;N<70;N++){let ee=g()*1024,oe=g()*576;b([[ee,oe],[ee+x(3,31),oe+x(-8,8)]],I,"rgba(189,189,189,.35)",.7)}y.strokeStyle="rgba(89,93,83,.50)",y.lineWidth=2.4,y.strokeRect(1,1,1022,574);let G=c(m),H=c(M,!1),J=c(A,!1),ye=new Be({map:G,roughness:.62,metalness:0,emissiveMap:G,emissive:16777215,emissiveIntensity:p==="live"?.52:C?.28:.025}),ie=new kt({color:10137267,metalness:.08,roughness:.36,roughnessMap:H,bumpMap:J,bumpScale:38e-5,transparent:!0,opacity:.27,depthWrite:!1,clearcoat:1,clearcoatRoughness:.19,clearcoatRoughnessMap:H,ior:1.52,envMapIntensity:.85,side:Ki});n.push(ie);let fe=new Be({map:c(E),transparent:!0,depthWrite:!1,roughness:.38,metalness:.12,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1});return{lcdMaterial:ye,glass:ie,cracksMaterial:fe,holes:B}}function h(p,f){let d=r++%3,g=`${f}-${d}`;s.has(g)||s.set(g,l(f,d));let x=s.get(g);for(let[m,u,E]of[[x.lcdMaterial,.019,"Damaged liquid-crystal panel"],[x.glass,.0205,"Reflective laminated screen glass"],[x.cracksMaterial,.0213,"Fine branching glass fractures"]]){let y=new lt(o,m);y.position.set(0,.381,u),y.name=E,y.castShadow=!1,y.receiveShadow=!0,p.add(y)}for(let m of x.holes){let u=m.flatMap(([M,I],A)=>[(M/1024-.5)*.735,(.5-I/576)*.41+.381,.0215+(A===1?.0018:0)]),E=new Ct;E.setAttribute("position",new ct(u,3)),E.computeVertexNormals();let y=new lt(E,x.glass);y.castShadow=!1,p.add(y)}}return{add:h,setEnvironment(p){for(let f of n)f.envMap=p,f.needsUpdate=!0}}}var nl=(i,e=0,t=1)=>Math.min(t,Math.max(e,i)),fs=i=>(i=nl(i),i*i*(3-2*i));function el(i,e){let t=Math.imul(i,374761393)+Math.imul(e,668265263);return t=Math.imul(t^t>>>13,1274126177),((t^t>>>16)>>>0)/4294967295}function di(i,e){let t=Math.floor(i),n=Math.floor(e),s=fs(i-t),r=fs(e-n);return Je.lerp(Je.lerp(el(t,n),el(t+1,n),s),Je.lerp(el(t,n+1),el(t+1,n+1),s),r)}function tl(i,e){return di(i*5,e*5)*.48+di(i*17+3,e*17)*.29+di(i*61,e*61+9)*.15+di(i*187,e*187)*.08}function ao(i,e=Lt.textureSize,t=!1){let n=new Uint8Array(e*e*4);for(let r=0;r<e;r++)for(let o=0;o<e;o++){let a=i(o/e,r/e,o,r),c=(r*e+o)*4;for(let l=0;l<4;l++)n[c+l]=Math.round(nl(a[l]??1)*255)}let s=new Qi(n,e,e,ui);return s.wrapS=s.wrapT=rr,s.magFilter=pn,s.minFilter=Fi,s.generateMipmaps=!0,s.anisotropy=4,t&&(s.colorSpace=ft),s.needsUpdate=!0,s}var dd;function fi(i=16777215){if(!dd){let e=(c,l)=>{let h=tl(c,l),p=di(c*48,l*3),f=fs((h+p*.13-.51)*9),d=fs((di(c*150,l*150)-.64)*8);return{n:h,rust:f,pit:d}},t=new Float32Array(Lt.textureSize*Lt.textureSize*3),n=ao((c,l,h,p)=>{let{n:f,rust:d,pit:g}=e(c,l),x=Math.pow(di(c*4,l*260),18)*.24,m=(p*Lt.textureSize+h)*3;return t[m]=.45+d*.21+f*.18-g*.25,t[m+1]=.35+d*.57+g*.07,t[m+2]=.88-d*.86,[.39+f*.34,.42+f*.34,.39+f*.32].map((u,E)=>Je.lerp(u,[.35+f*.3,.12+f*.19,.045+f*.1][E],d)-g*.1+x)},Lt.textureSize,!0),s=ao((c,l,h,p)=>{let f=(p*Lt.textureSize+h)*3;return[t[f],t[f+1],t[f+2]]});dd={map:n,roughnessMap:s,metalnessMap:s,bumpMap:s}}return new Be({color:i,...dd,roughness:1,metalness:1,bumpScale:.0035,envMapIntensity:.7})}function d0(){let i=(x,m)=>{let u=tl(x+3,m+2),E=di(x*70,m*2.3)*di(x*19,m*6),y=di(x*170,m*190),M=(1-fs(m/.23))*.78,I=fs((m-.86)/.14)*.34,A=Math.exp(-(((m-.844)*75)**2))*(.2+di(x*38,1)*.8),S=nl(M+I+A*.52+fs((u-.49)*7)*.45+E*.2),C=fs((u-.37)*4)*.7;return{dirt:S,fog:C,runs:E,scale:y,tide:A}},e=new Float32Array(Lt.textureSize*Lt.textureSize*2),t=ao((x,m,u,E)=>{let{dirt:y,fog:M,runs:I,scale:A,tide:S}=i(x,m),C=Math.pow(di(x*105,m*69),12)*.65,Y=(E*Lt.textureSize+u)*2;return e[Y]=.4+y*.1+I*.09+A*.025+C,e[Y+1]=.08+M*.36+y*.43+I*.1,[.59-y*.3,.63-y*.3,.48-y*.3,nl(.03+M*.23+y*.55+S*.12+A*.025)]},Lt.textureSize,!0),n=ao((x,m,u,E)=>{let y=(E*Lt.textureSize+u)*2;return[e[y],e[y+1],0]}),s=n,r=new kt({color:14542029,roughness:.7,roughnessMap:s,metalness:0,transparent:!0,opacity:.17,depthWrite:!1,clearcoat:1,clearcoatRoughness:.14,bumpMap:n,bumpScale:.003,side:It,envMapIntensity:.85}),o=new Be({map:t,roughness:.9,bumpMap:n,bumpScale:.002,transparent:!0,depthWrite:!1,side:It}),a=ao((x,m)=>{let u=tl(x+11,m+7),E=di(x*12,m*9);return[.11+u*.19,.24+u*.35,.026+E*.08]},Lt.textureSize/2,!0),c=ao((x,m)=>{let u=tl(x+5,m+3),E=fs(m);return[.1+u*.12+E*.06,.17+u*.22+E*.12,.025+u*.055,.93-E*.43]},Lt.textureSize/2,!0),l=new kt({map:c,color:13228945,roughness:.26,transparent:!0,opacity:.76,depthWrite:!1,side:It,emissive:1981189,emissiveIntensity:.48,envMapIntensity:.35}),h=new kt({map:a,color:16777215,roughness:.17,metalness:0,ior:1.333,clearcoat:1,clearcoatRoughness:.12,side:It,emissive:2374407,emissiveIntensity:.3,envMapIntensity:1.15}),p={value:0};h.onBeforeCompile=x=>{x.uniforms.waterTime=p,x.fragmentShader=`uniform float waterTime;
`+x.fragmentShader,x.fragmentShader=x.fragmentShader.replace("#include <map_fragment>",`#ifdef USE_MAP
 vec2 flowUv=vMapUv+vec2(sin(vMapUv.y*10.0+waterTime*.17),cos(vMapUv.x*9.0-waterTime*.13))*.025;
 diffuseColor*=texture2D(map,flowUv);
 #endif`)},h.customProgramCacheKey=()=>"slow-water-currents-v1";let f=new Be({color:9546090,roughness:.79,transparent:!0,opacity:.75,depthWrite:!1,emissive:2503177,emissiveIntensity:.12}),d=new kt({color:13097881,roughness:.07,metalness:0,transparent:!0,opacity:.23,depthWrite:!1,clearcoat:1,clearcoatRoughness:.04,envMapIntensity:1.25}),g=new gt({color:12505482,transparent:!0,opacity:.18,depthWrite:!1,side:It});return{glass:r,haze:o,fluid:l,liquidTop:h,foam:f,bubble:d,ripple:g,waterTime:p}}var MM=i=>Math.max(0,Math.min(1,i)),pd=i=>{let e=MM(i);return e*e*(3-2*e)};function fd(i,e,t,n,s){if(i<e)return 0;let r=i-e;return r<t?pd(r/t):r<t+n?1:1-pd((r-t-n)/s)}var EM=[{at:5,head:-.32,eye:-.52,pitch:.035,hold:1.7},{at:17.4,head:.36,eye:.55,pitch:-.065,hold:2.1},{at:31.1,head:-.23,eye:-.4,pitch:-.1,hold:1.3}];function f0(i,e=!1,t={}){if(t.headYaw=0,t.gazeYaw=0,t.gazePitch=0,e||i<0)return t;let n=i%43.7;for(let s of EM){let r=fd(n,s.at,.24,s.hold+1,.65),o=fd(n,s.at+.38,.95,s.hold,1.25);t.headYaw+=s.head*o,t.gazeYaw+=s.eye*r,t.gazePitch+=s.pitch*r}return t.gazePitch-=.12*fd(n,25.2,.22,.8,.5),t}function p0(i,e,t,n,s=!1,r={}){let o=pd((e-1.08)/.42),a=1.1+n*.055,c=s?0:o*.105*(Math.sin(i*a+n)+.12*Math.sin(i*.47+n*.6))/1.12,l=t-.1-e;return r.angle=c,r.x=Math.sin(c)*l,r.y=t-.1-Math.cos(c)*l,r.hookX=r.x-Math.sin(c)*.52,r.hookY=r.y+Math.cos(c)*.52,r}var il;function SM(){if(il)return il;let i=128,e=new Uint8Array(i*i*4),t=new Uint8Array(i*i*4),n=8817,s=()=>(n=n*1664525+1013904223>>>0,n/4294967296);for(let a=0;a<i;a++)for(let c=0;c<i;c++){let l=(a*i+c)*4,h=s(),p=Math.max(0,Math.sin(c*.056+Math.sin(a*.05)*2)*Math.cos(a*.041)-.15),f=h>.965?.22:0;e[l]=223-p*67-h*16-f*140,e[l+1]=219-p*49-h*15-f*130,e[l+2]=186-p*72-h*17-f*130,e[l+3]=255,t[l]=t[l+1]=t[l+2]=145+h*24-f*255,t[l+3]=255}let r=new Qi(e,i,i),o=new Qi(t,i,i);for(let a of[r,o])a.wrapS=a.wrapT=rr,a.magFilter=pn,a.minFilter=Fi,a.generateMipmaps=!0,a.needsUpdate=!0;return r.colorSpace=ft,il=new Be({map:r,bumpMap:o,bumpScale:.0011,color:16052183,roughness:.72,emissive:12563852,emissiveIntensity:.28}),il}var wM=new qt(1,20,14),da=new Be({color:1580302,roughness:1});function si(i,e,t=SM()){let n=new lt(i,t);return n.castShadow=!0,n.receiveShadow=!0,e.add(n),n}function wi(i,e,t,n){let s=si(wM,i,n);return s.position.set(...e),s.scale.set(...t),s}function Si(i,e,t=.012){return si(new un(new Zt(e.map(n=>new w(...n))),32,t,8,!1),i)}function sl(i,e,t,n=.012){let s=new w(...e),r=new w(...t),o=r.clone().sub(s),a=si(new Xt(n*.82,n,o.length(),10),i);return a.position.copy(s).add(r).multiplyScalar(.5),a.quaternion.setFromUnitVectors(new w(0,1,0),o.normalize()),a}function md(i=!1){let e=new Se;e.name=i?"Slender forearm bone":"Worn femur";let t=[[0,-.161],[.023,-.16],[.028,-.13],[.019,-.1],[.014,-.04],[.015,.025],[.019,.085],[.028,.122],[.026,.145],[0,.155]],n=new Us(t.map(r=>new Ne(r[0]*(i?.62:1),r[1])),20),s=n.attributes.position;for(let r=0;r<s.count;r++)s.setX(r,s.getX(r)+.009*Math.sin((s.getY(r)+.16)*Math.PI/.315));return n.computeVertexNormals(),si(n,e),wi(e,[.022,.14,0],[.043,.038,.039]),wi(e,[-.015,-.147,.002],[.028,.03,.034]),wi(e,[.02,-.15,-.002],[.029,.032,.032]),i&&e.scale.set(.75,1,.8),e}function m0(){let i=new Se;i.name="Curved rib fragment";let e=[];for(let t=0;t<=20;t++){let n=-.85+t/20*2.9;e.push([Math.cos(n)*.123-.018,Math.sin(n)*.123,.018*Math.sin(n*1.3)])}return Si(i,e),wi(i,e[0],[.017,.015,.018]),i}function g0(){let i=new Se;i.name="Detached jaw with uneven teeth",Si(i,[[-.088,.045,-.035],[-.08,-.025,.035],[-.043,-.05,.071],[0,-.054,.082],[.043,-.05,.071],[.08,-.025,.035],[.088,.045,-.035]],.013);for(let e=0;e<8;e++){let t=(e-3.5)*.017,n=.078-Math.abs(t)*.3,s=si(new bt(.013,.02+e%3*.002,.013),i);s.position.set(t,-.041,n),s.rotation.y=-t*3}return i}function bM(){let i=new Se;i.name="Goofy buck-toothed skull with wonky eye sockets";let e=new Et;e.moveTo(-.076,-.061),e.quadraticCurveTo(-.133,-.035,-.121,.067),e.bezierCurveTo(-.119,.171,.123,.165,.12,.06),e.quadraticCurveTo(.136,-.029,.077,-.061),e.lineTo(.047,-.071),e.lineTo(-.047,-.073),e.closePath();for(let[r,o,a,c,l]of[[-.052,.019,.039,.043,-.2],[.052,.011,.033,.035,.18]]){let h=new Mi;h.absellipse(r,o,a,c,0,Math.PI*2,!0,l),e.holes.push(h)}let t=new Mi;t.moveTo(.001,-.026),t.lineTo(-.012,-.05),t.quadraticCurveTo(.001,-.045,.013,-.05),t.closePath(),e.holes.push(t);let n=si(new rn(e,{depth:.022,bevelEnabled:!0,bevelSize:.004,bevelThickness:.004,bevelSegments:2,steps:1,curveSegments:20}),i);n.position.z=.043,wi(i,[0,.04,-.055],[.12,.121,.077]),wi(i,[0,.012,.027],[.109,.093,.01],da);for(let r of[-1,1])wi(i,[r*.093,-.042,.047],[.028,.022,.025]);for(let[r,o,a,c,l]of[[-.019,-.084,.028,.042,-.11],[.017,-.08,.027,.036,.17],[-.06,-.073,.014,.018,-.28],[.06,-.071,.012,.015,.23]]){let h=si(new bt(a,c,.018),i);h.position.set(r,o,.064),h.rotation.z=l}let s=new Se;s.name="Lopsided cartoon jaw",s.position.set(.004,-.071,-.003),s.rotation.z=-.12,i.add(s),Si(s,[[-.087,.04,-.025],[-.083,-.025,.037],[-.047,-.053,.071],[0,-.056,.079],[.051,-.048,.068],[.085,-.022,.033],[.087,.04,-.025]],.014);for(let[r,o]of[[-.052,-.04],[.038,-.041],[.057,-.036]]){let a=si(new bt(.015,.016,.015),s);a.position.set(r,o,.071),a.rotation.z=r*3}return Si(i,[[-.009,.154,-.016],[.003,.15,.003],[-.004,.141,.025],[.005,.126,.042]],.0016).material=da,i}function gd(){let i=new Se;i.name="Short articulated spine";for(let e=0;e<6;e++){let t=(e-2.5)*.038,n=.01*Math.sin(e*.7);wi(i,[0,t,n],[.025,.016,.02]);for(let s of[-1,1])sl(i,[s*.012,t,n],[s*.045,t-.009,n-.008],.007);sl(i,[0,t,n],[0,t+.008,n-.043],.006)}return i}function x0(){let i=new Se;i.name="Broken rib cage",i.add(gd());for(let e=0;e<5;e++)for(let t of[-1,1]){if(e===4&&t===1)continue;let n=.08-e*.043,s=.08+Math.sin(e/5*Math.PI)*.038;Si(i,[[0,n,-.02],[t*s*.65,n+.018,-.045],[t*s,n-.004,.008],[t*s*.82,n-.031,.065],[t*.018,n-.044,.08]],.0085)}return sl(i,[0,.06,.081],[0,-.12,.079],.01),i}function TM(i){let e=i===0,t=new Se;t.name=e?"Pudding-shaped skull with bony party hat":"Sushi-shaped skull with bony beanie";let n=new Et;if(e)n.moveTo(-.3,-.27),n.bezierCurveTo(-.42,-.19,-.38,.12,-.29,.24),n.quadraticCurveTo(0,.34,.29,.24),n.bezierCurveTo(.38,.12,.42,-.19,.3,-.27),n.quadraticCurveTo(0,-.34,-.3,-.27);else{n.moveTo(-.31,-.225),n.quadraticCurveTo(-.39,-.16,-.34,-.025),n.lineTo(-.41,.17),n.quadraticCurveTo(-.4,.22,-.21,.29),n.quadraticCurveTo(0,.33,.21,.29),n.quadraticCurveTo(.4,.22,.41,.17),n.lineTo(.34,-.025),n.quadraticCurveTo(.39,-.16,.31,-.225);for(let l=7;l>=0;l--){let h=-.31+l*.0775;n.quadraticCurveTo(h+.038,-.285,h,-.225)}}n.closePath();let s=e?.015:-.055,r=e?.13:.14;for(let l of[-1,1]){let h=new Mi;h.absellipse(l*r,s,.07,l<0?.065:.057,0,Math.PI*2,!0,l*.18),n.holes.push(h)}let o=new Mi;o.moveTo(0,s-.037),o.lineTo(-.023,s-.083),o.quadraticCurveTo(0,s-.075,.023,s-.083),o.closePath(),n.holes.push(o);let a=new Mi;a.absellipse(0,e?-.19:-.192,e?.208:.227,e?.064:.042,0,Math.PI*2,!0),n.holes.push(a);let c=si(new rn(n,{depth:.055,bevelEnabled:!0,bevelSize:.008,bevelThickness:.008,bevelSegments:3,curveSegments:24}),t);c.position.z=.135,wi(t,[0,.012,-.035],[e?.355:.37,.235,.16]),wi(t,[0,-.025,.126],[.325,.265,.008],da);for(let l=0;l<7;l++){if(l===1||l===5)continue;let h=si(new bt(.039,l%2?.037:.05,.035),t);h.position.set((l-3)*.053,e?-.147:-.169,.175),h.rotation.z=(l%3-1)*.12}if(e){Si(t,[[-.3,.19,.19],[-.24,.13,.2],[-.18,.195,.21],[-.11,.095,.21],[-.045,.17,.21],[.025,.085,.21],[.09,.17,.21],[.16,.105,.21],[.23,.19,.2],[.3,.15,.19]],.015);let l=new Se;l.name="Ivory party-hat crest",l.position.set(.02,.285,0),l.rotation.z=-.12,t.add(l);let h=si(new Hs(.123,.3,32),l);h.position.y=.15;let p=si(new $t(.12,.012,8,32),l);p.rotation.x=Math.PI/2;for(let f=0;f<5;f++){let d=f/5*Math.PI*2;Si(l,[[Math.cos(d)*.12,.005,Math.sin(d)*.12],[Math.cos(d)*.065,.15,Math.sin(d)*.065],[0,.3,0]],.004)}wi(l,[0,.314,0],[.028,.03,.028]),Si(t,[[-.2,.27,.15],[-.18,.23,.195],[-.205,.2,.2],[-.18,.17,.2]],.0025).material=da}else{for(let f of[-1,1])Si(t,[[f*.115,.027,.197],[f*.12,.16,.198],[f*.13,.292,.16]],.0035).material=da;Si(t,[[-.37,.01,.17],[-.2,.036,.199],[0,.048,.2],[.2,.036,.199],[.37,.01,.17]],.012);let l=new Se;l.name="Ribbed ivory beanie crest",l.position.y=.3,t.add(l),si(new qt(1,32,16,0,Math.PI*2,0,Math.PI/2),l).scale.set(.235,.235,.2);let p=si(new $t(.238,.02,10,40),l);p.rotation.x=Math.PI/2,p.scale.y=.86;for(let f=0;f<10;f++){let d=f/10*Math.PI*2,g=[];for(let x=0;x<=8;x++){let m=x/8*Math.PI/2;g.push([Math.cos(d)*.238*Math.cos(m),.237*Math.sin(m),Math.sin(d)*.203*Math.cos(m)])}Si(l,g,.006)}}return t}function y0(i){let e=new Se;if(e.name=["Pudding Figpal skeleton","Sushi Figpal skeleton","Pufferfish skeleton"][i],i===2){let t=bM();t.scale.set(1.25,1.35,1.05),t.position.set(-.16,.035,.055),e.add(t);for(let n=0;n<7;n++){let s=-.05+n*.055;if(wi(e,[s,0,0],[.028,.021,.02]),n<5)for(let r of[-1,1])Si(e,[[s,0,0],[s+.026,r*.09,-.01],[s+.014,r*(.22-n*.023),.015]],.01)}for(let n of[-.16,-.08,0,.08,.16])sl(e,[.29,0,0],[.47,n,0],.009)}else e.add(TM(i));return e}var RM=[[{kind:"femur",x:.14,y:.46,z:.15,tilt:1.1,yaw:-.3,scale:.9}],[{kind:"ribs",x:.02,y:.4,z:.1,tilt:.3,yaw:-.2,scale:.78},{kind:"spine",x:-.16,y:.4,z:-.08,tilt:-.5,yaw:.4,scale:.75},{kind:"rib",x:.16,y:.34,z:.17,tilt:.9,yaw:-.4,scale:.64}],[{kind:"forearm",x:-.13,y:.42,z:.16,tilt:-.68,yaw:.2,scale:.88},{kind:"jaw",x:.09,y:.32,z:.16,tilt:-.18,yaw:.6,scale:1.04}]],AM={femur:md,forearm:()=>md(!0),rib:m0,ribs:x0,spine:gd,jaw:g0};function v0(i){let e=new Se;e.name=`Bones floating in canister ${i+1}`;let t=RM[i].map((s,r)=>{let o=AM[s.kind]();return o.scale.multiplyScalar(s.scale),e.add(o),{...s,object:o,phase:i*1.91+r*2.3}});function n(s,r=!1){let o=r?0:s;for(let a of t){let c=a.phase,l=.022,h=.46;a.object.position.set(a.x+l*Math.sin(o*.27+c),a.y+.014*Math.sin(o*.57+c),a.z+.018*Math.cos(o*.23+c)),a.object.rotation.set(.1*Math.sin(o*.19+c),a.yaw+h*Math.sin(o*.17+c),a.tilt+.11*Math.sin(o*.31+c),"YXZ")}}return n(0),{group:e,update:n}}function _0(i,e){let t=y0(e);t.position.copy(i.position),t.quaternion.copy(i.quaternion),t.scale.copy(i.scale),i.parent.add(t),i.updateWorldMatrix(!0,!0);let n=i.matrixWorld.clone().invert(),s=new Dn,r=new Dn;i.traverse(g=>{g.isMesh&&(g.geometry.computeBoundingBox(),r.copy(g.geometry.boundingBox).applyMatrix4(new wt().multiplyMatrices(n,g.matrixWorld)),s.union(r))});let o=new vi,a=new vi;function c(g,x){let m=new Map;g.traverse(u=>{if(!u.isMesh)return;let E=y=>{if(!m.has(y)){let M=y.clone();M.onBeforeCompile=y.onBeforeCompile,M.customProgramCacheKey=y.customProgramCacheKey,M.clippingPlanes=[x],M.clipShadows=!0,m.set(y,M)}return m.get(y)};u.material=Array.isArray(u.material)?u.material.map(E):E(u.material)})}c(i,o),c(t,a);let l=s.min.y-.04,h=!1,p=new w;function f(g){i.updateWorldMatrix(!0,!1),p.setFromMatrixPosition(i.matrixWorld),p.y=g,i.worldToLocal(p),l=Math.max(l,Math.min(s.max.y+.04,p.y)),o.set(new w(0,1,0),-l).applyMatrix4(i.matrixWorld),a.copy(o).negate(),h=l>=s.max.y+.015,i.visible=!h,t.visible=l>s.min.y}f(-100);function d(){l=s.min.y-.04,h=!1,f(-100)}return{skeleton:t,update:f,reset:d,get transformed(){return h},get cutHeight(){return l}}}function M0(){let i=new io().load(new URL("./assets/open-to-work.png",import.meta.url).href);i.colorSpace=ft,i.anisotropy=4;let e=new Be({map:i,transparent:!0,alphaTest:.025,depthWrite:!1,roughness:.86,metalness:0,emissiveMap:i,emissive:16777215,emissiveIntensity:.18}),t=new Mt(.78,.78,48,2),n=t.attributes.position;for(let s=0;s<n.count;s++)n.setZ(s,Math.sqrt(.49**2-n.getX(s)**2));return t.computeVertexNormals(),t.computeBoundingSphere(),()=>{let s=new lt(t,e);return s.name="#OPENTOWORK decal on curved tank glass",s.position.y=.7,s.renderOrder=8,s}}function E0(){let i=new Se;i.name="Three suspended Figpals over bubbling green canisters";let e=Math.PI*2,t=193108,n=()=>(t=t*1664525+1013904223>>>0,t/4294967296),s=($,ve=.78,Ie=.005)=>new Be({color:$,roughness:ve,emissive:$,emissiveIntensity:Ie}),r=s(1184789,.85,0),o=s(16772534),a=s(16184551),c=s(36072),l=s(15226636),h=s(11022601),p=s(16755746),f=s(16754855),d=s(10214644),g=s(294108),x=s(16765992),m=new gt({color:1053459,side:gn});m.onBeforeCompile=$=>{$.vertexShader=$.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
transformed += normal * 0.009;`)},m.customProgramCacheKey=()=>"figpal-outline-v1";function u($,ve,Ie=i,Pe=!1){let Te=new lt($,ve);if(Te.castShadow=!0,Te.receiveShadow=!0,Ie.add(Te),Pe){let ce=new lt($,m);ce.name="Ink outline",Te.add(ce)}return Te}function E($,ve,Ie,Pe,Te=!1){let ce=u(new qt(1,24,16),Ie,Pe,Te);return ce.position.set(...$),ce.scale.set(...ve),ce}function y($,ve,Ie,Pe=i){let Te=u(new bt(...$),Ie,Pe);return Te.position.set(...ve),Te}function M($,ve,Ie,Pe,Te=i,ce=!1){let Ve=u(new Xt($,$,ve,48,1,ce),Pe,Te);return Ve.position.set(...Ie),Ve}function I($,ve,Ie,Pe=i){let Te=new Zt($.map(ce=>new w(...ce)));return u(new un(Te,Math.max(16,$.length*5),ve,6,!1),Ie,Pe)}function A($,ve,Ie,Pe,Te=i){let ce=new w(...$),Ve=new w(...ve),X=Ve.clone().sub(ce),Re=M(Ie,X.length(),ce.clone().add(Ve).multiplyScalar(.5).toArray(),Pe,Te);return Re.quaternion.setFromUnitVectors(new w(0,1,0),X.normalize()),Re}function S($,ve,Ie,Pe,Te=i){let ce=u(new $t($,ve,8,64),Pe,Te);return ce.rotation.x=Math.PI/2,ce.position.y=Ie,ce}function C($,ve,Ie,Pe,Te=.035){let ce=new rn($,{depth:ve-Te*2,bevelEnabled:!0,bevelSize:Te,bevelThickness:Te,bevelSegments:3,steps:1,curveSegments:16});return ce.translate(0,0,-ve/2+Te),u(ce,Ie,Pe,!0)}function Y($,ve,Ie,Pe=.105,Te="worried"){let ce=new Se;ce.name=`${Te} expression`,$.add(ce);for(let Ve of[-1,1])E([Ve*Pe,ve,Ie],[.022,.031,.013],r,ce),I([[Ve*(Pe+.035),ve+.041,Ie+.004],[Ve*Pe,ve+.055,Ie+.007],[Ve*(Pe-.035),ve+.074,Ie+.007]],.01,r,ce);Te==="afraid"?E([0,ve-.075,Ie+.003],[.026,.038,.012],r,ce):I([[-.052,ve-.091,Ie],[0,ve-.06,Ie+.005],[.052,ve-.091,Ie]],.012,r,ce)}function v(){let $=new Se;$.name="Party-hat pudding Figpal";let ve=new Et;ve.moveTo(-.3,-.27),ve.bezierCurveTo(-.42,-.19,-.38,.12,-.29,.24),ve.quadraticCurveTo(0,.34,.29,.24),ve.bezierCurveTo(.38,.12,.42,-.19,.3,-.27),ve.quadraticCurveTo(0,-.34,-.3,-.27),C(ve,.37,p,$,.035);let Ie=new Et;Ie.moveTo(-.29,.25),Ie.quadraticCurveTo(0,.34,.29,.25),Ie.lineTo(.3,.13),Ie.quadraticCurveTo(.28,.1,.22,.16),Ie.lineTo(.15,.055),Ie.quadraticCurveTo(.13,.035,.08,.115),Ie.lineTo(.01,.045),Ie.quadraticCurveTo(-.02,.028,-.09,.12),Ie.lineTo(-.17,.065),Ie.quadraticCurveTo(-.2,.05,-.22,.16),Ie.lineTo(-.3,.13),Ie.closePath();let Pe=C(Ie,.025,o,$,.006);Pe.position.z=.191,Y($,-.045,.222);for(let Ee of[-1,1])E([Ee*.24,-.085,.206],[.045,.028,.012],f,$);let Te=new Se;Te.position.set(.02,.285,0),Te.rotation.z=-.12,Te.scale.setScalar(.6),$.add(Te);let ce=document.createElement("canvas");ce.width=512,ce.height=256;let Ve=ce.getContext("2d");Ve.fillStyle="#ffd62d",Ve.fillRect(0,0,512,256),Ve.fillStyle="#0088ea";for(let Ee=0;Ee<4;Ee++)for(let Ue=0;Ue<7;Ue++)Ve.beginPath(),Ve.ellipse(Ue*85+Ee%2*42,30+Ee*67,18,14,0,0,e),Ve.fill();let X=new Ft(ce);X.colorSpace=ft;let Re=new Be({map:X,roughness:.82}),re=u(new Hs(.205,.5,48),Re,Te,!0);re.position.y=.25,S(.205,.009,0,r,Te),E([0,.515,0],[.042,.045,.041],c,Te);for(let Ee=0;Ee<8;Ee++){let Ue=Ee/8*e;A([0,.515,.005],[Math.cos(Ue)*.07,.515+Math.sin(Ue)*.07,.006],.012,c,Te)}return{object:$}}function b(){let $=new Se;$.name="Orange-beanie sushi Figpal";let ve=new Et;ve.moveTo(-.32,-.035),ve.quadraticCurveTo(-.38,-.11,-.31,-.2);for(let Re=0;Re<8;Re++){let re=-.31+Re*.0775;ve.quadraticCurveTo(re+.038,-.285,re+.0775,-.225)}ve.quadraticCurveTo(.39,-.13,.32,-.035),ve.quadraticCurveTo(0,.035,-.32,-.035),C(ve,.43,a,$,.025);let Ie=new Et;Ie.moveTo(-.37,-.015),Ie.lineTo(-.41,.17),Ie.quadraticCurveTo(-.4,.22,-.21,.29),Ie.quadraticCurveTo(0,.33,.21,.29),Ie.quadraticCurveTo(.4,.22,.41,.17),Ie.lineTo(.37,-.015),Ie.quadraticCurveTo(0,.055,-.37,-.015),C(Ie,.43,x,$,.022);let Pe=new Et;Pe.moveTo(-.12,.022),Pe.lineTo(-.13,.31),Pe.quadraticCurveTo(0,.33,.13,.31),Pe.lineTo(.12,.022),Pe.closePath();let Te=C(Pe,.44,r,$,.006);Te.position.z=.008,Y($,-.1,.253,.1,"afraid");for(let Re=0;Re<16;Re++){let re=Re/16*e;E([Math.cos(re)*.29,-.18+Math.sin(re)*.025,Math.sin(re)*.17],[.031,.022,.015],a,$)}let ce=new Se;ce.position.y=.3,$.add(ce),u(new qt(1,32,16,0,e,0,Math.PI/2),l,ce,!0).scale.set(.235,.235,.2);for(let Re=0;Re<10;Re++){let re=Re/10*e,Ee=[];for(let Ue=0;Ue<=14;Ue++){let Fe=.08+Ue/14*(Math.PI/2-.08);Ee.push([Math.sin(Fe)*Math.cos(re)*.238,Math.cos(Fe)*.237,Math.sin(Fe)*Math.sin(re)*.204])}I(Ee,.006,h,ce)}let X=M(.258,.065,[0,.002,0],l,ce);X.scale.z=.86,S(.26,.009,-.03,r,ce).scale.y=.86,S(.26,.008,.034,r,ce).scale.y=.86;for(let Re=0;Re<30;Re++){let re=Re/30*e;A([Math.cos(re)*.259,-.025,Math.sin(re)*.224],[Math.cos(re)*.259,.027,Math.sin(re)*.224],.0045,h,ce)}return{object:$}}function F(){let $=new Se;$.name="Propeller-hat pufferfish Figpal",E([0,0,0],[.335,.33,.25],d,$,!0);let ve=new Et;ve.moveTo(.26,.03),ve.quadraticCurveTo(.34,.06,.4,.16),ve.quadraticCurveTo(.49,.23,.5,.06),ve.quadraticCurveTo(.51,-.11,.43,-.13),ve.lineTo(.33,-.05),ve.closePath(),C(ve,.11,d,$,.02);for(let ce=0;ce<3;ce++)I([[.38,-.025+ce*.04,.078],[.465,-.075+ce*.085,.078]],.012,g,$);for(let ce of[-1,1]){let Ve=E([ce*.303,-.02,.13],[.065,.1,.035],d,$,!0);Ve.rotation.z=ce*.25;for(let X=0;X<3;X++)I([[ce*.3,-.06+X*.04,.168],[ce*.338,-.075+X*.05,.16]],.01,g,$)}Y($,.015,.252,.09,"worried");for(let ce=0;ce<11;ce++){let Ve=Math.PI*1.03+ce/10*Math.PI*.9,X=Math.cos(Ve)*.26,Re=Math.sin(Ve)*.25,re=.25*Math.sqrt(Math.max(.04,1-(X/.335)**2-(Re/.33)**2))+.008;I([[X,Re,re],[X+.008,Re-.027,re]],.011,g,$)}for(let ce=0;ce<7;ce++){let Ve=.15+ce/6*Math.PI*.88;A([Math.cos(Ve)*.31,Math.sin(Ve)*.31,0],[Math.cos(Ve)*.37,Math.sin(Ve)*.37,0],.012,g,$)}let Ie=new Se;Ie.position.set(0,.275,0),$.add(Ie);let Pe=[s(15746581),x,s(4802281),x];for(let ce=0;ce<4;ce++)u(new qt(1,12,12,ce*e/4,e/4,0,Math.PI/2),Pe[ce],Ie).scale.set(.215,.2,.215);S(.218,.011,0,r,Ie),A([0,.2,0],[0,.27,0],.012,a,Ie);let Te=new Se;Te.position.y=.275,Ie.add(Te),E([0,0,0],[.025,.018,.025],a,Te);for(let ce of[-1,1])E([ce*.066,0,0],[.083,.012,.029],a,Te);return{object:$,propeller:Te}}let B=fi(14802384),G=fi(9606540),H=fi(15065300),J=fi(14012614);J.bumpScale=7e-4,J.envMapIntensity=.85;let ye=new Be({color:1382417,roughness:.29,metalness:.08}),ie=[];for(let $=0;$<=12;$++){let ve=$/12*Math.PI;ie.push(new w(Math.cos(ve)*.015,.01+Math.sin(ve)*.015,0))}for(let $=0;$<=12;$++){let ve=Math.PI+$/12*Math.PI;ie.push(new w(Math.cos(ve)*.015,-.01+Math.sin(ve)*.015,0))}let fe=new un(new Zt(ie,!0),Lt.chainSegments,.0048,Lt.chainRadialSegments,!0),N=new Nt,ee=new w(0,1,0),oe=new pt;function j($,ve,Ie=null){let Pe=new Zt($.map(Re=>new w(...Re))),Te=Pe.getLength(),ce=Ie??Math.max(2,Math.ceil(Te/.033)),Ve=new xn(fe,J,ce);Ve.name="Interlocking steel chain links",Ve.castShadow=!0,Ve.receiveShadow=!0,Ve.frustumCulled=!1,ve.add(Ve);for(let Re=0;Re<ce;Re++)Ve.setColorAt(Re,new ut().setRGB(.67+n()*.3,.58+n()*.3,.45+n()*.34));function X(Re,re){let Ee=new w(...Re),Ue=new w(...re),Fe=Ue.clone().sub(Ee),ht=Fe.length(),Dt=Math.min(ce,Math.max(2,Math.ceil(ht/.033)));Ve.count=Dt,Fe.normalize();for(let Ye=0;Ye<Dt;Ye++)N.position.copy(Ee).lerp(Ue,Ye/(Dt-1)),N.quaternion.setFromUnitVectors(ee,Fe),oe.setFromAxisAngle(ee,(Ye%2?Math.PI/2:0)+Math.sin(Ye*7.17)*.07),N.quaternion.multiply(oe),N.scale.setScalar(1),N.updateMatrix(),Ve.setMatrixAt(Ye,N.matrix);Ve.instanceMatrix.needsUpdate=!0}if(Ie)Ve.instanceMatrix.setUsage(Un),X($[0],$.at(-1));else for(let Re=0;Re<ce;Re++){let re=Re/(ce-1);N.position.copy(Pe.getPointAt(re)),N.quaternion.setFromUnitVectors(ee,Pe.getTangentAt(re)),oe.setFromAxisAngle(ee,(Re%2?Math.PI/2:0)+Math.sin(Re*7.17)*.07),N.quaternion.multiply(oe),N.scale.setScalar(1),N.updateMatrix(),Ve.setMatrixAt(Re,N.matrix)}return{object:Ve,setPoints:X}}let O=d0(),ae=M0(),{glass:V,haze:W,fluid:Z,liquidTop:ge,foam:Ae,bubble:de,ripple:Q,waterTime:P}=O,_e=[],ne=[],he=[],me=[],Ce=new Nt,we=[{x:-3.05,z:-1.05,height:2.02,winchY:2.8},{x:-2.85,z:.3,height:1.84,winchY:2.65},{x:-2.15,z:1.45,height:1.6,winchY:2.38}];for(let $=0;$<we.length-1;$++){let ve=we[$],Ie=we[$+1];A([ve.x,3.065,ve.z],[Ie.x,3.065,Ie.z],.052,B)}let U=[v,b,F];for(let $=0;$<3;$++){let{x:ve,z:Ie,height:Pe,winchY:Te}=we[$],ce=new Se;ce.position.set(ve,.012,Ie),ce.name=`Green bubbling canister ${$+1}`,i.add(ce),M(.515,.16,[0,.1,0],B,ce),M(.46,.035,[0,.025,0],G,ce);for(let He=0;He<8;He++){let Ze=He/8*e;E([Math.cos(Ze)*.49,.15,Math.sin(Ze)*.49],[.022,.022,.022],H,ce)}let Ve=M(.485,1.02,[0,.72,0],V,ce,!0);Ve.castShadow=!1,Ve.renderOrder=6;let X=M(.487,1.02,[0,.72,0],W,ce,!0);X.name="Condensation, mineral streaks and algae tide marks",X.castShadow=!1,X.renderOrder=7,ce.add(ae());let Re=M(.444,.865,[0,.64,0],Z,ce,!0);Re.castShadow=!1,Re.renderOrder=2;let re=v0($);ce.add(re.group),M(.444,.018,[0,.215,0],ge,ce);for(let He of[.225,1.235])S(.484,.036,He,B,ce),S(.454,.01,He-.018,G,ce);for(let He of[.15,2.24,4.34]){let Ze=Math.cos(He)*.485,Mn=Math.sin(He)*.485;A([Ze,.22,Mn],[Ze,1.23,Mn],.021,B,ce)}for(let He of[-1,1])I([[He*.47,.96,0],[He*.58,.96,0],[He*.58,.74,0],[He*.48,.74,0]],.022,B,ce);let Ee=new Ns(0,.444,Lt.mobile?32:48,Lt.mobile?6:10);Ee.rotateX(-Math.PI/2);let Ue=u(Ee,ge,ce);Ue.position.y=1.074,Ue.castShadow=!1,Ue.renderOrder=4,S(.441,.006,1.075,ge,ce).renderOrder=4;let Fe=Array.from({length:48},()=>({x:(n()-.5)*.61,z:(n()-.5)*.61,r:.007+n()**2*.023,phase:n(),speed:.15+n()*.17})),ht=new xn(new qt(1,12,8),de,Fe.length);ht.name="Rising liquid bubbles",ht.instanceMatrix.setUsage(Un),ht.frustumCulled=!1,ht.renderOrder=3,ce.add(ht);let Dt=[];for(let He=0;He<24;He++){let Ze=n()*e,Mn=He<18?.4+n()*.025:n()*.34,tn=.006+n()*.016,jn=E([Math.cos(Ze)*Mn,1.074,Math.sin(Ze)*Mn],[tn,tn*.65,tn],Ae,ce);jn.castShadow=!1,jn.renderOrder=5,Dt.push({mesh:jn,baseRadius:tn,phase:n()*e})}let Ye=[];for(let He=0;He<5;He++){let Ze=u(new Ns(.96,1,40),Q.clone(),ce);Ze.rotation.x=-Math.PI/2,Ze.position.set((n()-.5)*.45,1.078,(n()-.5)*.45),Ze.castShadow=!1,Ze.renderOrder=5,Ye.push({mesh:Ze,phase:n()})}let ze=document.createElement("canvas");ze.width=256,ze.height=128;let ke=ze.getContext("2d");ke.fillStyle="#bec39f",ke.fillRect(0,0,256,128),ke.fillStyle="#242c22",ke.font="bold 67px monospace",ke.textAlign="center",ke.fillText(`0${$+1}`,128,87);let it=new Ft(ze);it.colorSpace=ft;let nt=u(new Mt(.17,.085),new Be({map:it,roughness:.9}),ce);nt.position.set(0,.115,.517),nt.castShadow=!1;for(let He=0;He<5;He++){let Ze=y([.065,.065,.007],[-.23+He*.115,.12,.5],He%2?r:s(10064462,.85,0),ce);Ze.rotation.z=-.45}nt.position.z=.52;let ot=M(.064,.03,[.32,1.19,.37],B,ce);ot.rotation.x=Math.PI/2,u(new Ei(.052,24),o,ce).position.set(.32,1.19,.391),I([[.32,1.19,.395],[.3,1.219,.395]],.003,r,ce);let Wt=new Se;Wt.name=`Tank ${$+1} drain valve`,Wt.position.set(.3,.29,.43),Wt.userData.valveIndex=$,ce.add(Wt);let en=M(.042,.19,[0,0,0],B,Wt);en.rotation.x=Math.PI/2,I([[0,0,.045],[0,-.035,.16],[0,-.1,.23]],.033,B,Wt);let hn=new Nt;hn.position.set(0,-.1,.23),Wt.add(hn);let vn=u(new Ns(.024,.034,20),B,Wt);vn.position.copy(hn.position),vn.rotation.x=.6;let dt=u(new Ei(.024,20),G,Wt);dt.position.copy(hn.position),dt.position.z-=.001,dt.rotation.x=.6,A([0,0,.01],[0,.075,.11],.012,B,Wt);let At=new Se;At.name="Spinning red drain handwheel",At.position.set(0,.075,.12),Wt.add(At),u(new $t(.088,.01,8,32),h,At);for(let He=0;He<3;He++){let Ze=He/3*e;A([0,0,0],[Math.cos(Ze)*.084,Math.sin(Ze)*.084,0],.007,h,At)}let Nn=M(.018,.028,[0,0,0],H,At);Nn.rotation.x=Math.PI/2;let dn=u(new qt(.102,12,8),new gt({transparent:!0,opacity:0,depthWrite:!1,colorWrite:!1}),At);dn.castShadow=!1,he.push({object:Wt,outlet:hn,setOpen(He){At.rotation.z=-He*Math.PI*4,At.position.z=.12+He*.018}});let _n=new On(7052325,.58,1.7,2);_n.position.set(0,.85,0),ce.add(_n),ne.push({surface:Ue,bubbles:ht,bubbleData:Fe,foam:Dt,ripples:Ye,floatingBones:re,phase:$*1.7});let ns=Math.atan2(1.85221-ve,3.1149-Ie);ce.rotation.y=ns;let Cn=new Se;Cn.name=`Chain hoist ${$+1}`,Cn.position.set(ve,0,Ie),Cn.rotation.y=ns,i.add(Cn),y([.4,.05,.34],[0,3.13,0],B,Cn);for(let He of[-1,1])A([He*.16,3.12,0],[He*.16,Te+.1,0],.023,B,Cn),E([He*.16,3.12,.08],[.026,.026,.026],H,Cn);let L=new Se;L.name=`Winch ${$+1}: lower or raise Figpal`,L.position.y=Te,L.userData.hoistIndex=$,Cn.add(L),y([.46,.12,.3],[0,.1,-.03],B,L);for(let He of[-1,1]){y([.035,.22,.27],[He*.191,.012,-.01],B,L);let Ze=M(.057,.055,[He*.205,0,0],ye,L);Ze.rotation.z=Math.PI/2;for(let Mn of[-.073,.093])for(let tn of[-.106,.096]){let jn=u(new Xt(.013,.013,.018,6),H,L);jn.position.set(He*.215,Mn,tn),jn.rotation.z=Math.PI/2}}y([.105,.09,.11],[.3,.15,-.035],G,L),I([[.3,.18,.01],[.38,.21,.06],[.43,.12,.1],[.4,-.04,.07]],.008,ye,L);let te=document.createElement("canvas");te.width=256,te.height=128;let le=te.getContext("2d");le.fillStyle="#817653",le.fillRect(0,0,256,128),le.fillStyle="#2a2b24",le.font="bold 22px monospace",le.fillText("CHAIN HOIST",15,30),le.font="18px monospace",le.fillText("250 KG / 1978",15,62),le.fillText("SERVICE OVERDUE",15,103);for(let He=0;He<90;He++)le.fillStyle=He%2?"rgba(42,25,12,.48)":"rgba(170,156,116,.7)",le.fillRect(n()*256,n()*128,n()*17,n()*3);let pe=new Ft(te);pe.colorSpace=ft;let se=u(new Mt(.25,.1),new Be({map:pe,roughness:.87}),L);se.position.set(-.005,.1,.124),se.rotation.z=.028;let Le=new Se;Le.rotation.z=Math.PI/2,L.add(Le);let Xe=new Se;Xe.name="Rotating chain sprocket",Le.add(Xe),M(.1,.28,[0,0,0],G,Xe);for(let He of[-1,1]){M(.136,.026,[0,He*.16,0],B,Xe);for(let Ze=0;Ze<12;Ze++){let Mn=Ze/12*e;y([.026,.03,.032],[Math.cos(Mn)*.13,He*.16,Math.sin(Mn)*.13],H,Xe)}}let Qe=[];for(let He=0;He<=120;He++){let Ze=He/120*e*4;Qe.push([Math.cos(Ze)*.106,-.1+He/120*.2,Math.sin(Ze)*.106])}j(Qe,Xe).object.name="Greasy chain wound around the drum";let et=M(.105,.24,[.3,.015,-.04],G,L);et.rotation.z=Math.PI/2;for(let He=0;He<6;He++){let Ze=M(.115,.009,[.215+He*.033,.015,-.04],B,L);Ze.rotation.z=Math.PI/2}let rt=new Se;rt.position.set(-.22,0,0),L.add(rt),A([0,0,0],[0,-.13,0],.014,B,rt),A([0,-.13,0],[-.09,-.13,0],.021,G,rt);let at=new On(12371885,.4,.85,2);at.position.set(-.24,.12,.36),L.add(at),E([0,.17,.28],[.018,.011,.012],new gt({color:7767659}),L);let Ke=new Se;Ke.name=`Suspended Figpal ${$+1}`,Ke.position.y=Pe,Cn.add(Ke);let Tt=U[$]();Tt.object.scale.setScalar(.62),Tt.object.rotation.z=($-1)*.035,Ke.add(Tt.object);let yt=_0(Tt.object,$),Ot=new Nt;Ot.position.set(0,.5,0),Ke.add(Ot),me.push(Ot),A([-.22,.45,0],[.22,.45,0],.019,B,Ke);let Pn=u(new $t(.045,.01,6,18,Math.PI*1.65),H,Ke);Pn.position.set(0,.49,0),Pn.rotation.z=-.5,A([-.028,.476,.008],[.016,.511,.008],.004,G,Ke);for(let He of[-1,1])j([[He*.21,.45,0],[He*.245,.11,0],[He*.23,-.12,.015],[He*.16,-.205,.04],[0,-.222,.045]],Ke);let Ut=j([[0,Te-.1,.025],[0,Pe+.52,0]],Cn,72),st=j([[-.1,Te-.01,-.11],[-.11,Te-.36,-.12],[-.16,Te-.4,-.1],[-.2,Te-.05,-.08]],Cn);st.object.name="Winch return chain loop";let zt=new Se;zt.name=`Canister ${$+1} winch control`,zt.position.set(.39,.85,.4),zt.rotation.y=.35,zt.userData.hoistIndex=$,ce.add(zt),y([.12,.21,.07],[0,0,0],G,zt),E([0,.047,.047],[.024,.024,.015],s(8072739,.6,0),zt),E([0,-.047,.047],[.024,.024,.015],s(6913097,.6,0),zt),I([[.39,.95,.4],[.44,1.02,.35],[.46,1.27,.12],[.44,Te-.13,.06],[.24,Te,0]],.007,G,Cn),_e.push({rig:Cn,hanger:Ke,transformation:yt,captive:Tt.object,propeller:Tt.propeller,drum:Xe,crank:rt,loadChain:Ut,height:Pe,homeHeight:Pe,targetHeight:Pe,winchY:Te,phase:$*2.1,lowered:!1})}let T=new On(11712685,.75,3.8,2);T.position.set(-1.75,2.75,-.2),i.add(T);function K($){let ve=_e[$];return ve?(ve.lowered=!ve.lowered,ve.targetHeight=ve.lowered?.65:ve.homeHeight,`Figpal ${$+1}${ve.transformation.transformed?"'s bones":""} ${ve.lowered?"lowering into the canister":"rising above the canister"}.`):null}function xe(){for(let $ of _e)$.lowered=!0,$.targetHeight=.65}function be(){for(let $ of _e)$.lowered=!1,$.height=$.targetHeight=$.homeHeight,$.hanger.position.set(0,$.homeHeight,0),$.hanger.rotation.z=0,$.loadChain.setPoints([0,$.winchY-.1,.025],[0,$.homeHeight+.52,0]),$.drum.rotation.y=$.crank.rotation.x=0,$.transformation.reset()}let Me=0,We={};function Oe($,ve=!1){let Ie=Math.max(0,Math.min(.05,$-Me));Me=$;let Pe=ve?0:$;P.value=Pe;for(let Te of _e){let ce=Te.targetHeight-Te.height;Te.height=ve?Te.targetHeight:Te.height+Math.sign(ce)*Math.min(Math.abs(ce),Ie*.15),p0($,Te.height,Te.winchY,Te.phase,ve,We),Te.hanger.position.set(We.x,We.y,0),Te.hanger.rotation.z=We.angle,Te.loadChain.setPoints([0,Te.winchY-.1,.025],[We.hookX,We.hookY,0]),Te.drum.rotation.y=(Te.homeHeight-Te.height)/.1,Te.crank.rotation.x=(Te.homeHeight-Te.height)/.1,Te.transformation.update(1.086),Te.propeller&&(Te.propeller.rotation.y=Pe*.18)}for(let Te of ne){Te.floatingBones.update($,ve);let ce=Te.surface.geometry.attributes.position,Ve=Te.surface.geometry.attributes.normal;for(let X=0;X<ce.count;X++){let Re=ce.getX(X),re=ce.getZ(X),Ee=Re*17+Pe*1.4+Te.phase,Ue=re*14-Pe*1.1,Fe=(Re+re)*28-Pe*2.1;ce.setY(X,Math.sin(Ee)*Math.cos(Ue)*.0035+Math.sin(Fe)*.0012);let ht=Math.cos(Ee)*Math.cos(Ue)*.0595+Math.cos(Fe)*.0336,Dt=-Math.sin(Ee)*Math.sin(Ue)*.049+Math.cos(Fe)*.0336,Ye=Math.hypot(ht,1,Dt);Ve.setXYZ(X,-ht/Ye,1/Ye,-Dt/Ye)}ce.needsUpdate=!0,Ve.needsUpdate=!0,Te.bubbleData.forEach((X,Re)=>{let re=(Pe*X.speed+X.phase)%1;Ce.position.set(X.x+Math.sin(Pe*1.3+Re)*.012,.25+re*.84,X.z+Math.cos(Pe+Re)*.009),Ce.scale.setScalar(X.r*(.65+re*.5)),Ce.updateMatrix(),Te.bubbles.setMatrixAt(Re,Ce.matrix)}),Te.bubbles.instanceMatrix.needsUpdate=!0;for(let X of Te.foam){let Re=(Math.sin(Pe*2.4+X.phase)+1)*.5;X.mesh.scale.set(X.baseRadius,X.baseRadius*(.12+Re*.28),X.baseRadius)}for(let X of Te.ripples){let Re=(Pe*.48+X.phase)%1,re=.012+Re*.075;X.mesh.scale.setScalar(re),X.mesh.visible=Re<.88,X.mesh.material.opacity=(1-Re)*.16}}}Oe(0);function qe($){for(let ve of[B,G,H,J,V,Z,ge,de])ve.envMap=$,ve.needsUpdate=!0}function xt($){let ve=_e[$];return!!ve&&!ve.transformation.transformed}function De($){let ve=_e[$];return xt($)&&!ve.lowered&&Math.abs(ve.height-ve.homeHeight)<.025}return{group:i,update:Oe,valves:he,toggleHoist:K,isLowered:$=>_e[$]?.lowered??!1,canSpeak:xt,isHanging:De,lowerAll:xe,reset:be,speechAnchors:me,setEnvironment:qe}}function S0(i=[]){let e=i.map(n=>(n.updateWorldMatrix(!0,!1),{inverse:n.matrixWorld.clone().invert(),width:n.geometry.parameters.width/2,depth:n.geometry.parameters.depth/2,top:n.getWorldPosition(new w).y+n.geometry.parameters.height/2})),t=new w;return(n,s)=>{let r=.003;for(let o of e)t.set(n,0,s).applyMatrix4(o.inverse),Math.abs(t.x)<=o.width&&Math.abs(t.z)<=o.depth&&(r=Math.max(r,o.top));return r}}function xd(i,e){i.updateWorldMatrix(!0,!0);let t=1/0,n=new w,s=new wt,r=new wt;function o(a){if(a.userData.ignoreFloorContact)return;let c=a.isMesh&&a.geometry.attributes.position;if(c)for(let l=0;l<(a.isInstancedMesh?a.count:1);l++){a.isInstancedMesh?(a.getMatrixAt(l,s),r.multiplyMatrices(a.matrixWorld,s)):r.copy(a.matrixWorld);for(let h=0;h<c.count;h++)n.fromBufferAttribute(c,h).applyMatrix4(r),t=Math.min(t,n.y-e(n.x,n.z))}for(let l of a.children)o(l)}return o(i),t}function fr(i,e=()=>.003){let t=xd(i,e);if(!Number.isFinite(t))return i;let n=i.getWorldPosition(new w);return n.y+=6e-4-t,i.parent&&i.parent.worldToLocal(n),i.position.copy(n),i.updateWorldMatrix(!1,!0),i.userData.floorProp=!0,i}function rl(i,e){i.updateWorldMatrix(!0,!1);let t=i.geometry,n=t.attributes.position,s=t.parameters.radialSegments+1,r=i.matrixWorld.clone().invert(),o=new w,a=new w,c=t.parameters.radius;for(let l=0;l<n.count;l+=s){o.set(0,0,0);for(let x=0;x<s-1;x++)o.add(a.fromBufferAttribute(n,l+x).applyMatrix4(i.matrixWorld));o.divideScalar(s-1);let h=e(o.x,o.z),p=1-Je.smoothstep(o.y-h,.055,.15),f=i.userData.anchorStart?Je.smoothstep(l/s,0,3):1,d=i.userData.anchorEnd?Je.smoothstep((n.count-s-l)/s,0,3):1,g=(h+c+6e-4-o.y)*p*f*d;for(let x=0;x<s;x++)a.fromBufferAttribute(n,l+x).applyMatrix4(i.matrixWorld),a.y+=g,a.applyMatrix4(r),n.setXYZ(l+x,a.x,a.y,a.z)}n.needsUpdate=!0,t.computeVertexNormals(),t.computeBoundingBox(),t.computeBoundingSphere()}function w0(i,e=()=>.003){let t=new Se;t.name="Fallen nursery mobile with four soft animals",t.position.set(-1.05,0,.55);let n=48319,s=()=>(n=n*1664525+1013904223>>>0,n/4294967296),r=document.createElement("canvas");r.width=r.height=512;let o=r.getContext("2d");o.fillStyle="#c6c1ac",o.fillRect(0,0,512,512);for(let V=0;V<7e3;V++){let W=s()*512,Z=s()*512;o.strokeStyle=V%2?"rgba(58,52,36,.12)":"rgba(246,236,212,.28)",o.lineWidth=.6,o.beginPath(),o.moveTo(W,Z),o.lineTo(W+2,Z+3),o.stroke()}for(let V=0;V<45;V++){let W=s()*512,Z=s()*512,ge=8+s()*70,Ae=o.createRadialGradient(W,Z,0,W,Z,ge);Ae.addColorStop(0,"rgba(63,52,31,.15)"),Ae.addColorStop(1,"rgba(63,52,31,0)"),o.fillStyle=Ae,o.fillRect(W-ge,Z-ge,ge*2,ge*2)}function a(V){let W=new Ft(V);return W.colorSpace=ft,W.anisotropy=4,W}let c=a(r);function l(V,W=c){return new kt({color:V,map:W,bumpMap:c,bumpScale:.0012,roughness:.96,sheen:.32,sheenColor:12433832,sheenRoughness:.95})}let h=l(13801630),p=l(14792108),f=l(7839145),d=l(5270656),g=l(14132309),x=l(15128233),m=l(3420203),u=new Be({color:6313803,roughness:1}),E=new Be({color:10525568,roughness:1}),y=new Be({color:1645337,roughness:.48}),M=new Be({color:12762273,map:c,roughness:.68,bumpMap:c,bumpScale:.001}),I=new Be({color:8159861,metalness:.65,roughness:.56}),A=document.createElement("canvas");A.width=A.height=512;let S=A.getContext("2d");S.drawImage(r,0,0),S.fillStyle="#343027";for(let V=0;V<12;V++){let W=V*45-15,Z=V%2*30;S.beginPath(),S.moveTo(W,Z),S.bezierCurveTo(W+55,105,W+8,180,W+51,268),S.lineTo(W+23,238),S.bezierCurveTo(W-12,148,W+26,93,W-9,Z),S.fill(),S.beginPath(),S.moveTo(W+25,512),S.bezierCurveTo(W+69,417,W+6,367,W+45,285),S.lineTo(W+24,314),S.bezierCurveTo(W-11,395,W+41,438,W-3,512),S.fill()}let C=l(14262365,a(A)),Y=new qt(1,24,16);function v(V,W,Z=t){let ge=new lt(V,W);return ge.castShadow=!0,ge.receiveShadow=!0,Z.add(ge),ge}function b(V,W,Z,ge){let Ae=v(Y,Z,ge);return Ae.position.set(...V),Ae.scale.set(...W),Ae}function F(V,W,Z,ge=t){return v(new un(new Zt(V.map(Ae=>new w(...Ae))),Math.max(20,V.length*6),W,6,!1),Z,ge)}function B(V,W,Z,ge,Ae=t){let de=new w(...V),Q=new w(...W),P=Q.clone().sub(de),_e=v(new Xt(Z,Z,P.length(),12),ge,Ae);return _e.position.copy(de).add(Q).multiplyScalar(.5),_e.quaternion.setFromUnitVectors(new w(0,1,0),P.normalize()),_e}function G(V,W,Z,ge=t){let Ae=v(new bt(...V),Z,ge);return Ae.position.set(...W),Ae}function H(V,W,Z,ge){let Ae=new Et;Ae.moveTo(-.5,0),Ae.quadraticCurveTo(-.48,.44,0,1),Ae.quadraticCurveTo(.49,.49,.5,0),Ae.quadraticCurveTo(0,-.1,-.5,0);let de=new rn(Ae,{depth:.18,bevelEnabled:!0,bevelSize:.06,bevelThickness:.05,bevelSegments:2,curveSegments:8,steps:1});de.translate(0,0,-.09);let Q=v(de,Z,ge);return Q.scale.set(...W),Q.position.set(...V),Q}function J(V,W,Z=.092,ge=.047){for(let Ae of[-1,1])b([Ae*ge,Z,W],[.009,.012,.007],y,V)}function ye(V){let W=new Se;W.name=`${V} mobile animal`;let Z=V==="Pig"?h:V==="Elephant"?f:V==="Tiger"?C:g,ge=b([0,.065,-.025],[.112,.091,.154],Z,W);ge.name="Soft body resting on the floor";for(let Q of[-1,1])b([Q*.047,.073,.08],[.077,.09,.09],Z,W);F([[0,.13,.116],[0,.092,.166],[0,.036,.16],[0,.008,.136]],.0018,u,W);for(let Q of[-1,1])for(let P of[-.106,.1]){let _e=b([Q*.11,.002,P],[.043,.043,.062],Z,W);if(_e.rotation.z=Q*.28,b([Q*.134,-.007,P+.015],[.021,.03,.041],V==="Pig"?m:V==="Elephant"?d:p,W),V==="Tiger"||V==="Fox")for(let ne=0;ne<3;ne++)b([Q*.151,-.012+(ne-1)*.014,P+.034],[.004,.004,.006],m,W)}let Ae=b([0,.102,-.17],V==="Elephant"?[.097,.094,.094]:[.09,.083,.083],Z,W);if(V==="Pig"){b([0,.08,-.244],[.049,.032,.024],p,W);for(let P of[-1,1])b([P*.019,.082,-.267],[.006,.009,.003],m,W);for(let P of[-1,1]){let _e=H([P*.061,.153,-.177],[.072,.083,.09],h,W);_e.rotation.z=-P*.35}let Q=[];for(let P=0;P<=45;P++){let _e=P/45*Math.PI*3.9,ne=.025*(1-P/70);Q.push([Math.sin(_e)*ne,.115+Math.cos(_e)*ne,.167+P/45*.028])}F(Q,.0065,p,W),J(W,-.242,.122)}else if(V==="Elephant"){for(let Q of[-1,1])b([Q*.098,.098,-.16],[.071,.08,.027],f,W),b([Q*.113,.101,-.184],[.047,.055,.009],d,W);F([[0,.099,-.24],[0,.055,-.273],[0,-.006,-.268],[.018,-.031,-.304],[.032,-.006,-.317]],.022,f,W),J(W,-.248,.127,.043),F([[0,.122,.15],[.025,.115,.185],[.042,.08,.199]],.006,d,W),b([.044,.077,.2],[.013,.018,.012],d,W)}else{for(let Q of[-1,1]){let P=H([Q*.057,.155,-.172],[.067,.071,.1],Z,W);P.rotation.z=-Q*.26,H([Q*.057,.162,-.184],[.038,.045,.055],p,W)}for(let Q of[-1,1])b([Q*.025,.076,-.235],[.035,.027,.023],x,W);if(b([0,.091,-.26],[.015,.011,.011],m,W),J(W,-.241,.124,.044),V==="Tiger")F([[0,.134,.15],[.035,.162,.193],[.067,.155,.201],[.075,.129,.182]],.012,C,W),b([.075,.129,.182],[.014,.015,.016],m,W);else{let Q=b([.042,.13,.191],[.058,.061,.131],g,W);Q.rotation.x=-.45,Q.rotation.z=-.25;let P=b([.039,.182,.271],[.045,.046,.061],x,W);P.rotation.x=-.45}}for(let Q of[-1,1])F([[Q*.1,.1,.07],[Q*.113,.065,-.02],[Q*.094,.092,-.1]],.0015,u,W);let de=v(new $t(.014,.004,6,16,Math.PI*1.75),E,W);return de.position.set(0,.158,-.065),de.rotation.x=Math.PI/2,{object:W,tab:de,body:ge}}function ie(V,W){V.updateWorldMatrix(!0,!0);let Z=V.getWorldPosition(new w);Z.y-=xd(W,e)+.006,V.parent.worldToLocal(Z),V.position.copy(Z),V.updateWorldMatrix(!0,!0);let ge=new w,Ae=new wt;V.traverse(de=>{if(!de.isMesh)return;let Q=de.geometry.clone(),P=Q.attributes.position;Ae.copy(de.matrixWorld).invert();let _e=!1;for(let ne=0;ne<P.count;ne++){ge.fromBufferAttribute(P,ne).applyMatrix4(de.matrixWorld);let he=e(ge.x,ge.z)+6e-4;ge.y>=he||(ge.y=he,ge.applyMatrix4(Ae),P.setXYZ(ne,ge.x,ge.y,ge.z),_e=!0)}_e?(P.needsUpdate=!0,Q.computeVertexNormals(),Q.computeBoundingBox(),Q.computeBoundingSphere(),de.geometry=Q):Q.dispose()}),V.userData.floorProp=!0}let fe=new Se;fe.name="Toppled mobile support",t.add(fe),G([.16,.055,.12],[-.6,.0305,.48],M,fe),G([.12,.028,.1],[-.6,.0765,.48],M,fe),B([-.6,.0565,.48],[-.6,.1425,.48],.012,I,fe),b([-.6,.1455,.48],[.043,.012,.02],M,fe),F([[-.59,.039,.44],[-.63,.017,.1],[-.48,.017,-.3],[-.2,.02,-.47],[.12,.019,-.39],[.19,.017,-.13],[.04,.052,0]],.013,M,fe),fr(fe,e);let N=new Se;N.name="Scuffed mobile music box",N.position.set(0,.116,0),N.rotation.set(.21,0,-.18),t.add(N);let ee=v(new Xt(.103,.103,.068,40),M,N),oe=v(new $t(.103,.002,6,40),u,N);oe.rotation.x=Math.PI/2;let j=b([0,.039,0],[.034,.009,.034],g,N);for(let V=0;V<5;V++)G([.03,.002,.002],[-.049+V*.019,.035,.041],u,N);B([0,-.02,-.093],[0,-.02,-.145],.005,I,N),b([0,-.02,-.15],[.026,.012,.005],I,N),t.updateMatrixWorld(!0),fr(N,e);let O=[[-.37,.068,.035],[.34,.103,-.025],[.018,.058,-.33],[-.025,.075,.34]];for(let V of O)V[1]=e(t.position.x+V[0],t.position.z+V[2])+.0076,B([0,N.position.y,0],V,.007,I);for(let V of O){let W=v(new $t(.014,.003,6,16),I);W.rotation.x=Math.PI/2,W.position.set(V[0],V[1]-.004,V[2])}let ae=[{kind:"Pig",x:.29,z:.35,rear:!0,yaw:-.12,roll:.08,arm:3},{kind:"Tiger",x:-.38,z:.17,rear:!0,yaw:.36,roll:-.12,arm:0},{kind:"Elephant",x:.34,z:-.29,rear:!1,yaw:-.28,roll:-.24,arm:1},{kind:"Fox",x:-.27,z:-.43,rear:!0,yaw:1.12,roll:.2,arm:2}];for(let V of ae){let{object:W,tab:Z,body:ge}=ye(V.kind);W.position.set(V.x,0,V.z),W.scale.setScalar(.88);let Ae=Math.atan2(i.x-(t.position.x+V.x),i.z-(t.position.z+V.z));W.rotation.set(V.kind==="Pig"?-.06:.03,Ae+(V.rear?0:Math.PI)+V.yaw,V.roll,"YXZ"),t.add(W),t.updateMatrixWorld(!0),ie(W,ge),t.updateMatrixWorld(!0);let de=t.worldToLocal(Z.getWorldPosition(new w)),Q=O[V.arm],P=F([Q,[Q[0]+.06,.024,Q[2]+.08],[(Q[0]+de.x)/2-.05,.023,(Q[2]+de.z)/2+.08],[de.x-.04,.025,de.z+.035],de.toArray()],.0021,E);P.userData.anchorStart=P.userData.anchorEnd=!0,rl(P,e);let _e=document.createElement("canvas");_e.width=_e.height=64;let ne=_e.getContext("2d"),he=ne.createRadialGradient(32,32,5,32,32,32);he.addColorStop(0,"rgba(0,0,0,.65)"),he.addColorStop(.48,"rgba(0,0,0,.32)"),he.addColorStop(1,"rgba(0,0,0,0)"),ne.fillStyle=he,ne.fillRect(0,0,64,64);let me=new Dn().setFromObject(W),Ce=me.getSize(new w),we=t.worldToLocal(me.getCenter(new w)),U=new Mt(Ce.x+.05,Ce.z+.05,12,12);U.rotateX(-Math.PI/2),U.translate(we.x,0,we.z);let T=U.attributes.position;for(let xe=0;xe<T.count;xe++)T.setY(xe,e(t.position.x+T.getX(xe),t.position.z+T.getZ(xe))+2e-4);U.computeVertexNormals();let K=v(U,new gt({map:new Ft(_e),transparent:!0,depthWrite:!1}));K.name=`${V.kind} floor contact shadow`,K.castShadow=!1,K.userData.ignoreFloorContact=!0}return t}var co=new Map,yd=31.7;function CM(i){if(co.has(i))return co.get(i);let e=9678115+Math.imul(i,2654435761)>>>0,t=()=>(e=Math.imul(e,1664525)+1013904223>>>0,e/4294967296),n=[],s=.65+t()*1.4;for(;s<yd-2;){let r=2+Math.floor(t()*5);for(let o=0;o<r;o++){let a=.028+t()*.072;n.push([s,a,t()*.045,t()>.23]),s+=a+.045+t()*.16}t()<.42&&(n.push([s,.22+t()*.4,.005,!0]),s+=.75),s+=1.3+t()*4.2}return co.size>4&&co.delete(co.keys().next().value),co.set(i,n),n}function PM(i,e=!1){if(e)return[.88,.79];let t=Math.floor(i/yd),n=i-t*yd,s=CM(t);return[0,1].map(r=>{let o=r?.79:.88;for(let a=0;a<s.length;a++){let[c,l,h,p]=s[a];if(r===1&&!p)continue;let f=c+(r?(a%3-1)*.013:0),d=f+l;if(n>=f&&n<d){let g=Math.min((n-f)/.003,(d-n)/.005,1);o=Je.lerp(o,h,Math.max(0,g))}else n>=d&&n<d+.025&&(o*=1+.16*(1-(n-d)/.025))}return o*(.985+.015*Math.sin(i*8.7+r))})}function b0(){let i=new Se;i.name="Crooked failing fluorescent fixture",i.position.set(.22,2.98,-.55),i.rotation.set(.02,.12,-.075);let e=fi(9673098),t=fi(15065545),n=new Be({color:2369569,roughness:.9}),s=new Be({color:11183498,roughness:.72});function r(g,x,m=[0,0,0]){let u=new lt(g,x);return u.position.set(...m),u.castShadow=!0,u.receiveShadow=!0,i.add(u),u}let o=(g,x,m=e)=>r(new bt(...g),m,x);function a(g,x,m,u=e){return r(new Xt(g,g,x,16),u,m)}function c(g,x=n,m=.004){return r(new un(new Zt(g.map(u=>new w(...u))),24,m,5,!1),x)}o([1.53,.055,.32],[0,.012,0],t);for(let g of[-1,1]){let x=o([1.53,.08,.016],[0,-.033,g*.157],t);x.rotation.x=g*.25,o([1.46,.006,.012],[0,-.017,g*.121],n)}o([.38,.045,.085],[.12,.055,0],n);for(let g of[-.69,.69]){o([.065,.05,.275],[g,-.02,0],e);for(let x of[-.132,.132]){let m=a(.012,.012,[g,-.051,x]);o([.016,.002,.003],[g,-.058,x],n),m.rotation.z=.05}}let l=[];for(let[g,x]of[-.078,.078].entries()){let m=document.createElement("canvas");m.width=512,m.height=64;let u=m.getContext("2d"),E=u.createLinearGradient(0,0,512,0);E.addColorStop(0,"#29271f"),E.addColorStop(.035,"#5a5948"),E.addColorStop(.09,"#b4b9a0"),E.addColorStop(.19,"#d9dfc4"),E.addColorStop(.77,"#d0d8bd"),E.addColorStop(.93,"#92977e"),E.addColorStop(.98,"#383c32"),E.addColorStop(1,"#272b22"),u.fillStyle=E,u.fillRect(0,0,512,64);for(let A=0;A<170;A++){let S=A*73.29%512,C=A*23.87%64;u.fillStyle="rgba(35,36,24,.12)",u.fillRect(S,C,1+A%5,1)}let y=new Ft(m);y.colorSpace=ft,y.center.set(.5,.5),y.rotation=Math.PI/2;let M=new Be({map:y,emissiveMap:y,emissive:15003084,emissiveIntensity:2,roughness:.27});l.push(M);let I=a(.019,1.34,[0,-.073,x],M);I.rotation.z=Math.PI/2,I.castShadow=!1;for(let A of[-1,1]){let S=a(.021,.035,[A*.657,-.073,x],e);S.rotation.z=Math.PI/2,o([.037,.075,.056],[A*.704,-.045,x],s);for(let C of[-.007,.007]){let Y=a(.0025,.024,[A*.684,-.073,x+C],e);Y.rotation.z=Math.PI/2}}c([[-.73,.03,x],[-.77,-.01,x],[-.72,-.04,x+.025]],g?n:new Be({color:7031093,roughness:.8}))}let h=a(.015,.034,[.54,-.035,0],s);h.rotation.x=.08,c([[.57,-.02,.15],[.59,-.15,.17],[.68,-.13,.18],[.68,-.035,.15]],e,.004),c([[.72,.04,0],[.82,.09,.03],[.89,.19,.04],[1.02,.31,.03]],n,.006);let p=new On(11647895,.25,1.2,2);p.position.set(0,.1,0),i.add(p);function f(g,x){let m=PM(g,x);return l.forEach((u,E)=>u.emissiveIntensity=m[E]*2.9),p.intensity=(m[0]+m[1])*.2,(m[0]+m[1])/1.67}function d(g){for(let x of[e,t])x.envMap=g,x.needsUpdate=!0}return f(0,!1),{group:i,update:f,setEnvironment:d}}function ol(i){let e=Math.max(0,Math.ceil(i));return`${String(Math.floor(e/60)).padStart(2,"0")}:${String(e%60).padStart(2,"0")}`}function T0(i=300,e=()=>performance.now()/1e3){let t=null;return{start(){return t!==null?!1:(t=e()+i,!0)},reset(){t=null},get remainingSeconds(){return t===null?i:Math.max(0,Math.ceil(t-e()))},get status(){return t===null?"waiting":e()>=t?"finished":"running"}}}function R0(i,e){let t=new Se;t.name="Five-minute red LED countdown timer",t.position.copy(e),t.position.y=.006,t.rotation.y=Math.atan2(i.x-e.x,i.z-e.z)-Je.degToRad(16),t.scale.setScalar(.72);let n=T0(),s=new Se;s.position.y=.13,s.rotation.x=-.24,t.add(s);let r=document.createElement("canvas");r.width=512,r.height=256;let o=r.getContext("2d");o.fillStyle="#555951",o.fillRect(0,0,512,256);let a=7418,c=()=>(a=a*1664525+1013904223>>>0,a/4294967296);for(let j=0;j<1800;j++)o.fillStyle=j%4?"rgba(13,16,12,.18)":"rgba(180,171,142,.26)",o.fillRect(c()*512,c()*256,1+c()*4,1+c()*2);for(let j=0;j<35;j++){o.strokeStyle="rgba(194,190,163,.24)",o.lineWidth=.6;let O=c()*512,ae=c()*256;o.beginPath(),o.moveTo(O,ae),o.lineTo(O+8+c()*39,ae+c()*5),o.stroke()}let l=new Ft(r);l.colorSpace=ft;let h=new Be({color:3619894,map:l,bumpMap:l,bumpScale:7e-4,roughness:.82}),p=new Be({color:527113,roughness:.66}),f=new Be({color:7828326,metalness:.65,roughness:.68});function d(j,O,ae=s){let V=new lt(j,O);return V.castShadow=!0,V.receiveShadow=!0,ae.add(V),V}function g(j,O,ae,V=s){let W=d(new bt(...j),ae,V);return W.position.set(...O),W}let x=new Et,m=.59,u=.19,E=.022;x.moveTo(-m/2+E,-u/2),x.lineTo(m/2-E,-u/2),x.quadraticCurveTo(m/2,-u/2,m/2,-u/2+E),x.lineTo(m/2,u/2-E),x.quadraticCurveTo(m/2,u/2,m/2-E,u/2),x.lineTo(-m/2+E,u/2),x.quadraticCurveTo(-m/2,u/2,-m/2,u/2-E),x.lineTo(-m/2,-u/2+E),x.quadraticCurveTo(-m/2,-u/2,-m/2+E,-u/2);let y=new rn(x,{depth:.174,bevelEnabled:!0,bevelSize:.006,bevelThickness:.006,bevelSegments:3,steps:1,curveSegments:10});y.translate(0,0,-.087),d(y,h),g([.538,.16,.01],[0,0,.096],p);let M=g([.518,.143,.002],[0,0,.11],new kt({color:5511450,transparent:!0,opacity:.09,depthWrite:!1,roughness:.22,clearcoat:1,clearcoatRoughness:.1}));M.castShadow=!1;for(let j of[-.279,.279])for(let O of[-.071,.071]){let ae=d(new Xt(.008,.008,.006,12),f);ae.rotation.x=Math.PI/2,ae.position.set(j,O,.098),g([.01,.0015,.001],[j,O,.102],p)}for(let j of[-.23,.23])for(let O of[-.06,.06])g([.052,.016,.052],[j,.008,O],p,t);for(let j of[-1,1])for(let O=0;O<6;O++)g([.002,.04,.006],[j*.301,-.018,-.061+O*.019],p);let I=document.createElement("canvas");I.width=512,I.height=64;let A=I.getContext("2d");A.font="500 20px monospace",A.fillStyle="#8e8b7a",A.textAlign="center",A.fillText("MIN",128,42),A.fillText("SEC",384,42);let S=new Ft(I);S.colorSpace=ft;let C=d(new Mt(.43,.018),new gt({map:S,transparent:!0,depthWrite:!1}));C.position.set(0,.069,.104),C.castShadow=!1;let Y=new gt({color:16721943,toneMapped:!1}),v=new gt({color:2295557,toneMapped:!1}),b=new gt({color:16718087,transparent:!0,opacity:.12,depthWrite:!1,blending:_c,toneMapped:!1}),F=new Et,B=.066,G=.01,H=.005;F.moveTo(-B/2,0),F.lineTo(-B/2+H,G/2),F.lineTo(B/2-H,G/2),F.lineTo(B/2,0),F.lineTo(B/2-H,-G/2),F.lineTo(-B/2+H,-G/2),F.closePath();let J=new Oi(F),ye=["abcdef","bc","abdeg","abcdg","bcfg","acdfg","acdefg","abc","abcdefg","abcdfg"],ie={a:[0,.058,0],b:[.036,.029,1],c:[.036,-.029,1],d:[0,-.058,0],e:[-.036,-.029,1],f:[-.036,.029,1],g:[0,0,0]},fe=[];for(let j of[-.187,-.081,.081,.187]){let O=new Se;O.position.set(j,-.005,.106),s.add(O);let ae=[];for(let[V,[W,Z,ge]]of Object.entries(ie)){let Ae=d(J,v,O);Ae.position.set(W,Z,0),Ae.rotation.z=ge?Math.PI/2:0,Ae.scale.x=ge?.76:1,Ae.castShadow=!1;let de=d(J,b,O);de.position.set(W,Z,-2e-4),de.rotation.z=Ae.rotation.z,de.scale.set(Ae.scale.x*1.12,1.9,1),de.castShadow=!1,ae.push({key:V,segment:Ae,glow:de})}fe.push(ae)}for(let j of[-.025,.015]){let O=d(new Ei(.005,16),Y);O.position.set(0,j,.106),O.castShadow=!1}let N=new On(16718344,.12,.7,2);N.position.set(0,.06,.16),s.add(N);let ee=-1;function oe(){let j=n.remainingSeconds;if(j!==ee){let O=ol(j).replace(":","");fe.forEach((ae,V)=>{let W=ye[Number(O[V])];for(let Z of ae){let ge=W.includes(Z.key);Z.segment.material=ge?Y:v,Z.glow.visible=ge}}),ee=j}return j}return oe(),{group:t,start:()=>n.start(),reset(){n.reset(),oe()},update:oe,get status(){return n.status}}}function vd(i,e,t,n){let s=n/2,r=s/2;i.save(),i.translate(e,t);function o(a,c){i.fillStyle=c,i.beginPath(),i.moveTo(s,a),i.lineTo(r,a),i.arc(r,a+r,r,-Math.PI/2,Math.PI/2,!0),i.lineTo(s,a+s),i.closePath(),i.fill()}o(0,"#f24e1e"),o(s,"#a259ff"),i.fillStyle="#ff7262",i.beginPath(),i.moveTo(s,0),i.lineTo(s+r,0),i.arc(s+r,r,r,-Math.PI/2,Math.PI/2),i.lineTo(s,s),i.closePath(),i.fill(),i.fillStyle="#1abcfe",i.beginPath(),i.arc(s+r,s+r,r,0,Math.PI*2),i.fill(),i.fillStyle="#0acf83",i.beginPath(),i.moveTo(s,2*s),i.lineTo(s,2*s+r),i.arc(r,2*s+r,r,0,Math.PI*1.5),i.closePath(),i.fill(),i.restore()}function A0(i){let e=new Se;e.name="Worn handsaw beside the countdown timer",e.position.copy(i).add(new w(-.34,0,.25)),e.position.y=0,e.rotation.y=-.12,e.rotation.z=.026;let t=new Se;t.rotation.x=-Math.PI/2,e.add(t);let n=fi(12963014);n.bumpScale=45e-5;let s=new Be({color:11121068,metalness:.72,roughness:.38}),r=new Be({color:10258264,metalness:.68,roughness:.62}),o=new Be({color:3156253,roughness:1}),a=new Uint8Array(256*256*4),c=1903;for(let y=0;y<256;y++)for(let M=0;M<256;M++){c=1664525*c+1013904223>>>0;let I=Math.sin(y*.54+Math.sin(M*.026)*2)*5+Math.sin(y*1.4+M*.012)*3,A=(c>>>24)/255,S=A>.99?28:0,C=(y*256+M)*4;a[C]=98+I+A*12+S,a[C+1]=57+I*.7+A*9+S,a[C+2]=30+I*.3+A*6+S,a[C+3]=255}let l=new Qi(a,256,256);l.colorSpace=ft,l.needsUpdate=!0,l.magFilter=pn;let h=new Be({map:l,roughness:.83,bumpMap:l,bumpScale:5e-4});function p(y,M,I=t){let A=new lt(y,M);return A.castShadow=!0,A.receiveShadow=!0,I.add(A),A}function f(y,M,I,A){let S=new rn(y,{depth:M,bevelEnabled:I>0,bevelSize:I,bevelThickness:I,bevelSegments:2,curveSegments:24});S.translate(0,0,-M/2);let C=S.attributes.uv;for(let Y=0;Y<C.count;Y++)C.setXY(Y,(C.getX(Y)+.37)/.72,(C.getY(Y)+.115)/.23);return p(S,A)}let d=new Et;d.moveTo(-.36,.035),d.lineTo(.19,.081),d.lineTo(.205,-.083);let g=38;for(let y=g;y>=0;y--){let M=-.36+y/g*.55,I=-.035-(M+.36)/.55*.048;d.lineTo(M,I),y>0&&d.lineTo(M-.55/g*.4,I-.009)}d.lineTo(-.365,.025),d.closePath();let x=f(d,.0028,35e-5,[n,s]);x.name="Tapered pitted steel blade with saw teeth";let m=new Et;m.moveTo(.145,.092),m.bezierCurveTo(.19,.119,.31,.116,.338,.079),m.lineTo(.326,-.079),m.quadraticCurveTo(.314,-.111,.278,-.102),m.lineTo(.172,-.085),m.quadraticCurveTo(.153,-.07,.157,-.047),m.lineTo(.17,.046),m.closePath();let u=new Mi;u.moveTo(.214,.055),u.quadraticCurveTo(.24,.072,.283,.055),u.lineTo(.283,-.057),u.quadraticCurveTo(.253,-.065,.226,-.052),u.lineTo(.209,.032),u.closePath(),m.holes.push(u);let E=f(m,.026,.006,h);E.name="Worn wooden open grip";for(let[y,M]of[[.176,.055],[.183,-.053],[.199,.003]])for(let I of[-1,1]){let A=p(new Xt(.006,.006,.0035,18),r);A.rotation.x=Math.PI/2,A.position.set(y,M,I*.02);let S=p(new bt(.007,.0012,6e-4),o);S.position.set(y,M,I*.022),S.rotation.z=.35}return{group:e,setEnvironment(y){n.envMap=s.envMap=r.envMap=y;for(let M of[n,s,r])M.envMapIntensity=.9,M.needsUpdate=!0}}}function al({flies:i=10,moths:e=5,spread:t=[.82,.17,.47],seed:n=29,sizeScale:s=1,dive:r=0}={}){let o=new Se;o.name="Flies and moths circling the light";let a=new qt(1,8,6),c=new Be({color:1382678,roughness:.65}),l=new Be({color:5589814,roughness:1}),h=new Be({color:12899016,roughness:.35,transparent:!0,opacity:.58,depthWrite:!1,side:It}),p=document.createElement("canvas");p.width=p.height=128;let f=p.getContext("2d");f.fillStyle="#b8aa83",f.fillRect(0,0,128,128);for(let fe=0;fe<190;fe++)f.fillStyle=fe%2?"#89795255":"#e2d3ab66",f.fillRect(fe*47%128,fe*73%128,2,1);f.strokeStyle="#695c3d",f.lineWidth=4,f.beginPath(),f.moveTo(76,0),f.quadraticCurveTo(99,60,76,128),f.stroke(),f.fillStyle="#5b5039",f.beginPath(),f.ellipse(57,68,13,18,.25,0,Math.PI*2),f.fill(),f.fillStyle="#d5c59a",f.beginPath(),f.ellipse(57,68,6,9,.25,0,Math.PI*2),f.fill(),f.strokeStyle="#75684788",f.lineWidth=1;for(let fe=0;fe<5;fe++)f.beginPath(),f.moveTo(0,64),f.lineTo(128,12+fe*26),f.stroke();let d=new Ft(p);d.colorSpace=ft;let g=new Be({map:d,roughness:.9,side:It,emissive:10127718,emissiveMap:d,emissiveIntensity:.15});function x(fe){let N=new Et;N.moveTo(0,-.008),fe?(N.bezierCurveTo(.02,-.031,.052,-.036,.058,-.018),N.bezierCurveTo(.06,-.007,.044,.004,.039,.009),N.bezierCurveTo(.047,.026,.023,.034,.013,.019)):(N.bezierCurveTo(.008,-.021,.03,-.024,.033,-.013),N.bezierCurveTo(.035,-.003,.015,.016,.005,.012)),N.lineTo(0,.008),N.closePath();let ee=new Oi(N,10),oe=ee.attributes.position,j=ee.attributes.uv;for(let O=0;O<oe.count;O++)j.setXY(O,oe.getX(O)/.06,(oe.getY(O)+.036)/.07);return ee.rotateX(-Math.PI/2),ee}function m(fe,N,ee,oe){let j=new xn(fe,N,ee);return j.name=oe,j.instanceMatrix.setUsage(Un),j.frustumCulled=!1,j.raycast=()=>{},o.add(j),j}let u=m(a,c,i*2,"Small dark flies"),E=m(a,l,e*2,"Moth bodies"),y=m(x(!1),h,i*2,"Translucent fly wings"),M=m(x(!0),g,e*2,"Dusty patterned moth wings"),I=new Nt,A=new w,S=new w,C=new w,Y=new w(0,0,-1),v=new w(0,0,1),b=new w(0,1,0),F=new w,B=new pt,G=new pt,H=new pt().setFromAxisAngle(b,Math.PI),J=Array.from({length:i+e},(fe,N)=>({moth:N>=i,index:N>=i?N-i:N,phase:N*2.399+n*.17,size:s*(.72+(N*17+n)%13/28),speed:N>=i?.95+N%3*.23:1.8+N%4*.46}));function ye(fe,N,ee){let oe=fe*N.speed+N.phase,j=N.phase,O=N.moth?.72:.46;return ee.set(t[0]*(O*Math.cos(oe)+.17*Math.sin(oe*2.37+j)),t[1]*(.7*Math.sin(oe*1.73+j)+.23*Math.cos(oe*4.13)),t[2]*(O*Math.sin(oe*.91)+.18*Math.cos(oe*2.71-j))),ee.y-=r*(N.moth?1:.38)*Math.pow(.5+.5*Math.sin(oe*.43+j),6),N.moth||(ee.x+=.035*Math.sin(oe*7.3),ee.y+=.014*Math.cos(oe*9.7)),ee}function ie(fe,N=!1,ee=1){let oe=N?0:fe;for(let j of J){let{moth:O,index:ae,phase:V,size:W}=j,Z=O?E:u,ge=O?M:y;ye(oe,j,A),ye(oe+.012,j,S),C.copy(S).sub(A).normalize(),B.setFromUnitVectors(Y,C),G.setFromAxisAngle(v,.25*Math.sin(oe*2.1+V)),B.multiply(G),I.position.copy(A),I.quaternion.copy(B),I.scale.set(O?.006:.0065,O?.007:.0055,O?.021:.011).multiplyScalar(W),I.updateMatrix(),Z.setMatrixAt(ae*2,I.matrix),F.set(0,0,O?-.022:-.013).applyQuaternion(B),I.position.copy(A).addScaledVector(F,W),I.scale.setScalar((O?.006:.0068)*W),I.updateMatrix(),Z.setMatrixAt(ae*2+1,I.matrix);let Ae=N?.42:.18+Math.sin(oe*(O?39:92)+V)*(O?.9:.74);for(let[de,Q]of[-1,1].entries())F.set(Q*.004,0,0).applyQuaternion(B),I.position.copy(A).addScaledVector(F,W),G.setFromAxisAngle(v,Q*Ae),I.quaternion.copy(B).multiply(G),Q<0&&I.quaternion.multiply(H),I.scale.setScalar(W),I.updateMatrix(),ge.setMatrixAt(ae*2+de,I.matrix)}g.emissiveIntensity=.055+.14*Math.max(0,ee);for(let j of[u,E,y,M])j.instanceMatrix.needsUpdate=!0}return ie(0),{group:o,update:ie}}var lo=3,IM=2.8;function LM(i,e){return e<-1.55||Math.abs(i)>2.55&&e<.45}var pr=(i,e)=>Math.hypot(i.x-e.x,i.z-e.z);function DM(i){let o=[],a=new Dn,c=new w;i.updateWorldMatrix(!0,!0);function l(g){if(g.visible){g.isMesh&&!g.isInstancedMesh&&g.geometry&&(g.geometry.computeBoundingBox(),a.copy(g.geometry.boundingBox).applyMatrix4(g.matrixWorld),a.getSize(c),a.min.y<.13&&a.max.y>.1&&c.y>.065&&Math.min(c.x,c.z)>.018&&o.push({x0:a.min.x-.15,x1:a.max.x+.15,z0:a.min.z-.15,z1:a.max.z+.15}));for(let x of g.children)l(x)}}for(let g of i.children)l(g);let h=Array.from({length:1763},(g,x)=>{let m=x%41,u=Math.floor(x/41),E=-3.6+m*.18,y=-3.65+u*.18;return{id:x,col:m,row:u,x:E,z:y,free:LM(E,y)&&!o.some(M=>E>=M.x0&&E<=M.x1&&y>=M.z0&&y<=M.z1),neighbors:[]}});for(let g of h)if(g.free)for(let x=-1;x<=1;x++)for(let m=-1;m<=1;m++){if(!m&&!x)continue;let u=g.col+m,E=g.row+x;if(u<0||u>=41||E<0||E>=43)continue;let y=h[E*41+u];y.free&&(!m||!x||h[g.row*41+u].free&&h[E*41+g.col].free)&&g.neighbors.push(y.id)}let p=h.filter(g=>g.free&&g.neighbors.length);function f(g,x,m){return(m?p.filter(E=>pr(E,m)>=lo):p).reduce((E,y)=>!E||(y.x-g)**2+(y.z-x)**2<(E.x-g)**2+(E.z-x)**2?y:E,null)}function d(g,x,m){let u=new Int32Array(h.length).fill(-1),E=[g];u[g]=g;for(let S=0;S<E.length;S++){let C=h[E[S]],Y=pr(C,m);for(let v of C.neighbors){let b=pr(h[v],m);u[v]<0&&(b>=lo||b>Y+.001)&&(u[v]=C.id,E.push(v))}}let y=h[g],M=E.filter(S=>{let C=h[S],Y=Math.hypot(C.x-y.x,C.z-y.z);return Y>.8&&Y<2.8&&pr(C,m)>=lo});if(!M.length)return[];let I=M[Math.floor(x()*M.length)],A=[];for(;I!==g;)A.push(h[I]),I=u[I];return A.reverse()}return{closest:f,path:d}}function C0({room:i,floorSupport:e,viewerPosition:t,seed:n=Math.floor(Math.random()*4294967295)}){let s=new Se;s.name="Tiny mice and rats darting through distant shadows",s.userData.ignoreAcid=!0;let r=n>>>0,o=()=>(r=r*1664525+1013904223>>>0,r/4294967296),a=DM(i),c=new Nt,l=new w,h=new w,p=new w,f=new w(0,1,0),d=document.createElement("canvas");d.width=d.height=128;let g=d.getContext("2d");g.fillStyle="#e8e3d9",g.fillRect(0,0,128,128);for(let oe=0;oe<1400;oe++){g.strokeStyle=oe%3?"#7d766f30":"#ffffff66";let j=o()*128,O=o()*128;g.beginPath(),g.moveTo(j,O),g.lineTo(j+(o()-.5)*2,O+3+o()*5),g.stroke()}let x=new Ft(d);x.colorSpace=ft;let m=new Be({map:x,roughness:.96}),u=new Be({roughness:.72}),E=new Be({roughness:.88});function y(oe,j,O,ae){let V=new xn(oe,j,O);return V.name=ae,V.instanceMatrix.setUsage(Un),V.frustumCulled=!1,V.castShadow=!0,V.receiveShadow=!0,V.raycast=()=>{},s.add(V),V}let M=[[-2.75,-2.75],[-3.1,-.55],[2.65,-2.85]],I=M.length,A=new qt(1,14,9),S=y(A,m,I*6,"Furry rat and mouse bodies"),C=y(A,u,I*9,"Ears, eyes, noses and running paws"),Y=y(new Xt(1,1,1,7),E,I*9,"Long tapered swishing tails"),v=new Float32Array(I*4*2*3),b=new Ct;b.setAttribute("position",new ln(v,3).setUsage(Un));let F=new to(b,new cr({color:12300704,transparent:!0,opacity:.45}));F.frustumCulled=!1,F.raycast=()=>{},s.add(F);let B=[5327684,5854283,4539454],G=M.map(([oe,j],O)=>{let ae=a.closest(oe,j,t)||a.closest(oe,j),V=O!==0;return{mouse:V,cell:ae.id,x:ae.x,z:ae.z,yaw:o()*Math.PI*2,size:.28*(V?.58+o()*.08:.92+o()*.12),color:new ut(B[O]),phase:o()*6.28,speed:3.6*(V?1.05+o()*.3:.88+o()*.25),route:[],pause:1.2+O*1.6+o()*2,gait:0,moving:!1,visibility:1}}),H=new ut(7889757),J=new ut(6771019),ye=new ut(1118478),ie=null;function fe(oe,j,O,ae,V=l){let W=Math.cos(oe.yaw),Z=Math.sin(oe.yaw),ge=oe.size*oe.visibility;return V.set(oe.x+(j*W+ae*Z)*ge,e(oe.x,oe.z)+O*ge,oe.z+(-j*Z+ae*W)*ge)}function N(oe,j,O,ae,V,W,Z=0){fe(O,...ae),c.position.copy(l),c.rotation.set(0,O.yaw,Z),c.scale.set(...V).multiplyScalar(O.size*O.visibility),c.updateMatrix(),oe.setMatrixAt(j,c.matrix),oe.setColorAt(j,W)}function ee(oe,j=!1,O=t){let ae=ie===null?0:Math.min(.1,Math.max(0,oe-ie));ie=oe;let V=0;for(let[W,Z]of G.entries()){let he=function(me,Ce){let we=me/9;return fe(Z,Math.sin(we*3.5+Ae*(Z.moving?8:1.6)+Z.phase)*.045*we,.026*(1-we)+.009,.126+ne*we,Ce)};Z.moving=!1;let ge=pr(Z,O);if(Z.visibility=Je.smoothstep(ge,IM,lo+.25),!j){let me=Z.route[0];if(me&&pr(me,O)<lo&&pr(me,O)<=ge&&(Z.route=[]),ge<lo+.35&&(Z.pause=0),Z.pause>0)Z.pause-=ae;else{Z.route.length||(Z.route=a.path(Z.cell,o,O));let Ce=Z.speed*ae;for(;Z.route.length&&Ce>0;){let we=Z.route[0],U=we.x-Z.x,T=we.z-Z.z,K=Math.hypot(U,T),xe=Math.min(K,Ce);if(Z.moving=!0,Z.gait+=xe*45,Ce-=xe,K>1e-4){Z.x+=U/K*xe,Z.z+=T/K*xe;let be=Math.atan2(-U,-T),Me=Je.euclideanModulo(be-Z.yaw+Math.PI,Math.PI*2)-Math.PI;Z.yaw+=Me*(1-Math.exp(-ae*28))}xe>=K-1e-4&&(Z.x=we.x,Z.z=we.z,Z.cell=we.id,Z.route.shift(),Z.route.length||(Z.pause=3+o()*5))}!Z.route.length&&!Z.moving&&(Z.pause=1)}}let Ae=j?0:oe,de=Z.moving?Math.abs(Math.sin(Z.gait))*.005:Math.sin(Ae*3+Z.phase)*.0015,Q=Z.moving?0:Math.sin(Ae*12+Z.phase)*.002,P=W*6,_e=W*9;N(S,P,Z,[0,.077+de,0],[.068,.063,.125],Z.color),N(S,P+1,Z,[0,.081+de,.068],[.07,.069,.071],Z.color),N(S,P+2,Z,[0,.078+de,-.115],[.046,.044,.066],Z.color),N(S,P+3,Z,[0,.057+de+Q,-.177],[.03,.024,.05],Z.color);for(let[me,Ce]of[-1,1].entries()){let we=Z.mouse?1.23:.88;N(S,P+4+me,Z,[Ce*.044,.126+de,-.102],[.03*we,.038*we,.012],Z.color,Ce*.2),N(C,_e+me,Z,[Ce*.044,.128+de,-.113],[.022*we,.028*we,.004],H,Ce*.2),N(C,_e+2+me,Z,[Ce*.032,.094+de,-.149],[.007,.008,.007],ye)}N(C,_e+4,Z,[0,.057+de+Q,-.221],[.011,.009,.009],J);for(let me=0;me<4;me++){let Ce=me%2?-1:1,we=me>1,U=Z.gait+(me===0||me===3?0:Math.PI),T=Z.moving?Math.max(0,Math.sin(U))*.023:0,K=Z.moving?Math.cos(U)*.027:0;N(C,_e+5+me,Z,[Ce*(we?.055:.043),.01+T,(we?.08:-.087)+K],[.018,.01,.031],H)}let ne=Z.mouse?.23:.29;for(let me=0;me<9;me++){he(me,l),he(me+1,h),p.copy(h).sub(l);let Ce=p.length();c.position.copy(l).add(h).multiplyScalar(.5),c.quaternion.setFromUnitVectors(f,p.normalize());let we=(.009*(1-me/9)+.001)*Z.size*Z.visibility;c.scale.set(we,Ce,we),c.updateMatrix(),Y.setMatrixAt(W*9+me,c.matrix),Y.setColorAt(W*9+me,H)}for(let me of[-1,1])for(let Ce=0;Ce<2;Ce++)fe(Z,me*.018,.061+de,-.195),l.toArray(v,V),V+=3,fe(Z,me*.08,.062+de+Q,-.2+Ce*.027),l.toArray(v,V),V+=3}for(let W of[S,C,Y])W.instanceMatrix.needsUpdate=!0,W.instanceColor.needsUpdate=!0;b.attributes.position.needsUpdate=!0}return ee(0),{group:s,update:ee}}function P0(){let i="drawer",e=!1,t=8;function n(s,r=!1){return r?"Detach your shackle before using the charger.":s==="drawer"?(e=!e,e?"Drawer opened. Take the MacBook charger and cable.":"Drawer closed."):s==="charger"?i!=="drawer"?"You already collected the charger.":e?(i="carrying","Charger collected. Plug it into the power strip behind you."):"Open the rear drawer first.":s==="strip"?i==="drawer"?"The power strip is on. Find the charger in the rear drawer.":i==="carrying"?(i="powered","Charger plugged in. Connect its cable to the MacBook."):i==="charging"?"The MacBook is charging.":"The charger has power. Connect the MacBook.":s==="laptop"?i==="powered"?(i="charging","Cable connected. The MacBook is charging."):i==="charging"?`MacBook battery: ${Math.floor(t)}%.`:i==="carrying"?"Plug the charger into the power strip first.":"Find the charger in the rear drawer.":""}return{use:n,update(s){i==="charging"&&(t=Math.min(100,t+Math.max(0,s)*.65))},reset(){i="drawer",e=!1,t=8},get phase(){return i},get drawerOpen(){return e},get battery(){return t},get nextAction(){return i==="drawer"?e?"charger":"drawer":i==="carrying"?"strip":i==="powered"?"laptop":null}}}function I0({filing:i,laptop:e,floorSupport:t,drawerMaterial:n}){let s=new Se;s.name="Interactive MacBook charging kit";let r=new On(10794149,1.5,2.8,2);r.position.set(1.55,1.25,3.25),s.add(r);let o=P0(),a=new Be({color:14275780,roughness:.51}),c=new Be({color:15131609,roughness:.42}),l=new Be({color:2435105,roughness:.88}),h=new Be({color:9082261,roughness:.4,metalness:.7}),p=new gt({color:16757557}),f=new gt({color:9422728});function d(ne,he,me=s){let Ce=new lt(ne,he);return Ce.castShadow=!0,Ce.receiveShadow=!0,me.add(Ce),Ce}function g(ne,he,me,Ce){let we=d(new bt(...ne),me,Ce);return we.position.set(...he),we}function x(ne,he,me,Ce){let[we,U,T]=ne,K=Math.min(.012,U*.24),xe=new Et,be=we/2,Me=U/2;xe.moveTo(-be+K,-Me),xe.lineTo(be-K,-Me),xe.quadraticCurveTo(be,-Me,be,-Me+K),xe.lineTo(be,Me-K),xe.quadraticCurveTo(be,Me,be-K,Me),xe.lineTo(-be+K,Me),xe.quadraticCurveTo(-be,Me,-be,Me-K),xe.lineTo(-be,-Me+K),xe.quadraticCurveTo(-be,-Me,-be+K,-Me);let We=Math.min(.004,T/6),Oe=new rn(xe,{depth:T-2*We,bevelEnabled:!0,bevelSize:We,bevelThickness:We,bevelSegments:2,curveSegments:5});Oe.translate(0,0,-T/2+We);let qe=d(Oe,me,Ce);return qe.position.set(...he),qe}function m(ne,he,me,Ce=s){return d(new un(new Zt(ne.map(we=>we.isVector3?we:new w(...we))),48,he,7,!1),me,Ce)}function u(ne,he,me,Ce,we){let U=document.createElement("canvas");U.width=512,U.height=128;let T=U.getContext("2d");T.fillStyle="#c4c4b6",T.fillRect(0,0,512,128),T.fillStyle="#353b35",T.font="600 58px Arial",T.textAlign="center",T.fillText(ne,256,85,480);let K=new Ft(U);K.colorSpace=ft;let xe=d(new Mt(he,me),new Be({map:K,roughness:.9}),we);return xe.position.set(...Ce),xe}let E=new Se;E.name="Rear drawer containing the MacBook charger",E.userData.chargingAction="drawer",E.position.set(-.38,.56,0),i.add(E),g([.71,.32,.025],[0,0,.231],n,E),x([.22,.022,.028],[0,.04,.264],h,E),u("CHARGERS",.2,.047,[0,-.065,.246],E),g([.66,.018,.36],[0,-.145,.025],n,E);for(let ne of[-.33,.33])g([.015,.27,.36],[ne,-.01,.025],n,E);g([.66,.27,.015],[0,-.01,-.155],n,E);for(let ne of[-.348,.348])g([.013,.027,.43],[ne,-.08,.015],h,E);let y=new Se;y.name="MacBook USB-C power adapter",y.userData.chargingAction="charger",E.add(y),y.position.set(.105,-.097,.045),x([.145,.075,.145],[0,0,0],c,y),g([.147,.001,.147],[0,-.009,0],a,y);for(let ne of[-.016,.016])g([.005,.025,.015],[ne,-.049,0],h,y);g([.003,.015,.027],[.074,.006,0],l,y),u("96W USB-C",.086,.022,[0,.009,.075],y).material.color.setHex(10066834);let I=new Se;I.name="Coiled charger cable",I.userData.chargingAction="charger",E.add(I),I.position.set(-.145,-.127,.06);let A=[];for(let ne=0;ne<=120;ne++){let he=ne/120*Math.PI*6;A.push([Math.cos(he)*(.086+ne*12e-5),ne*45e-6,Math.sin(he)*.06])}m(A,.0045,c,I),x([.041,.014,.019],[.12,.01,0],c,I),g([.014,.009,.014],[.145,.01,0],h,I);let S=new Se;S.name="Powered floor power strip",S.userData.chargingAction="strip",S.position.set(1.94,t(1.94,3.72)+.032,3.72),S.rotation.y=-.16,s.add(S),x([.51,.055,.12],[0,0,0],a,S);for(let ne of[-.16,-.055,.05,.155]){g([.079,.001,.082],[ne,.029,0],c,S);for(let me of[-.02,.02])g([.021,.002,.006],[ne-.009,.031,me],l,S);let he=d(new Ei(.007,12),l,S);he.rotation.x=-Math.PI/2,he.position.set(ne+.022,.031,0)}let C=x([.035,.011,.057],[.224,.032,0],new Be({color:10303786,roughness:.4}),S);C.rotation.z=.07,g([.008,.002,.02],[.224,.039,0],f,S);let Y=x([.12,.16,.018],[2.15,.27,4.424],a,s);for(let ne of[.235,.3]){g([.065,.042,.006],[2.15,ne,4.411],c,s);for(let he of[2.136,2.164])g([.005,.016,.003],[he,ne+.004,4.406],l,s)}x([.054,.043,.055],[2.15,.3,4.383],l,s);let v=S.localToWorld(new w(-.265,0,0));m([v,[1.57,.018,3.8],[1.61,.015,4.04],[1.98,.015,4.25],[2.16,.07,4.34],[2.15,.3,4.35]],.007,l).raycast=()=>{};let b=new Se;b.name="MacBook charging port",b.userData.chargingAction="laptop",b.position.set(-.453,.002,-.18),e.object.add(b),g([.005,.01,.035],[0,0,0],l,b);let F=d(new bt(.045,.048,.085),new gt({transparent:!0,opacity:0,colorWrite:!1,depthWrite:!1}),b);F.castShadow=!1;let B=new Se;B.name="Connected MacBook charging cable",B.visible=!1,s.add(B),x([.051,.018,.032],[0,0,0],c,B),g([.013,.01,.026],[.03,0,0],h,B);let G=g([.01,.003,.007],[.005,.011,0],p,B);G.castShadow=!1;let H=document.createElement("canvas");H.width=512,H.height=96;let J=H.getContext("2d"),ye=new Ft(H);ye.colorSpace=ft;let ie=d(new Mt(.245,.046),new gt({map:ye}),e.screen);ie.name="MacBook battery charge readout",ie.position.set(.282,.235,.001),ie.visible=!1,ie.castShadow=!1;let fe=0,N=-1/0,ee=-1/0,oe=null,j=-1,O="",ae=null,V=new w,W=new w,Z=new w;function ge(ne,he){return new w(ne,t(ne,he)+.008,he)}function Ae(ne){let he=oe?.geometry;y.getWorldPosition(W),W.x+=.08,W.y+=.005,B.getWorldPosition(V);let me=[W.clone(),ge(1.86,3.5),ge(1.53,3.27),ge(1.33,2.99),ge(.83,2.82),ge(V.x-.13,V.z+.12),V.clone().add(new w(-.031,0,0).applyAxisAngle(new w(0,1,0),e.object.rotation.y))],Ce=new un(new Zt(me),80,.0045,7,!1),we=Ce.attributes.position;for(let U=0;U<we.count;U++)we.setY(U,Math.max(we.getY(U),t(we.getX(U),we.getZ(U))+.002));Ce.computeVertexNormals(),oe?(oe.geometry=Ce,he.dispose()):(oe=d(Ce,c),oe.name="Charging cable resting across the floor",oe.raycast=()=>{}),j=ne}function de(ne,he,me=!1){let Ce=o.phase,we=o.use(ne,me);return me||(Ce==="drawer"&&o.phase==="carrying"&&(y.visible=!1,I.visible=!1),Ce==="carrying"&&o.phase==="powered"&&(S.add(y),y.visible=!0,y.rotation.set(0,0,0),y.position.set(-.16,.075,0),N=he,s.add(I),I.visible=!0,I.rotation.set(0,.4,0),I.position.set(1.7,t(1.7,3.42)+.008,3.42)),Ce==="powered"&&o.phase==="charging"&&(ee=he,B.visible=!0,I.visible=!1)),we}function Q(ne,he=!1){let me=ae===null?0:Math.max(0,Math.min(.05,ne-ae));ae=ne,o.update(me);let Ce=o.drawerOpen?1:0;if(fe=he?Ce:Je.damp(fe,Ce,8,me),E.position.z=fe*.43,(o.phase==="powered"||o.phase==="charging")&&(y.position.y=.075+(he?0:.19*(1-Je.smootherstep(ne-N,0,.65)))),o.phase==="charging"){let K=he?1:Je.smootherstep(ne-ee,0,.65);b.getWorldPosition(Z),B.quaternion.copy(e.object.getWorldQuaternion(new pt)),V.set(-.04-(1-K)*.12,(1-K)*.045,0).applyQuaternion(B.quaternion),B.position.copy(Z).add(V),(Math.abs(K-j)>.02||K===1&&j!==1)&&Ae(K),G.material=o.battery>=100?f:p}ie.visible=e.openProgress>.35;let we=Math.floor(o.battery),U=o.phase==="charging",T=`${U?"\u26A1 ":""}${we}%`;T!==O&&(O=T,J.fillStyle="#222e36",J.fillRect(0,0,512,96),J.fillStyle=U?"#93dba3":"#e3b36d",J.font="500 44px Arial",J.textAlign="right",J.fillText(T,385,63),J.strokeStyle=U?"#93dba3":"#e3b36d",J.lineWidth=5,J.strokeRect(405,25,72,44),J.fillRect(480,37,7,19),J.fillRect(413,33,56*we/100,28),ye.needsUpdate=!0)}function P(){o.reset(),fe=0,E.position.z=0,E.add(y,I),y.visible=I.visible=!0,y.position.set(.105,-.097,.045),y.rotation.set(0,0,0),I.position.set(-.145,-.127,.06),I.rotation.set(0,0,0),B.visible=!1,oe&&(s.remove(oe),oe.geometry.dispose(),oe=null),j=-1,O="",ae=null}function _e(ne){return ne==="drawer"?o.drawerOpen?"Close charger drawer":"Open charger drawer":ne==="charger"?"Take MacBook charger + cable":ne==="strip"?o.phase==="carrying"?"Plug charger into power strip":"Powered power strip":ne==="laptop"?o.phase==="powered"?"Connect charger to MacBook":`MacBook battery \xB7 ${Math.floor(o.battery)}%`:o.phase==="carrying"?"Charger collected \xB7 Plug into the power strip [F]":o.phase==="powered"?"Charger powered \xB7 Connect the MacBook [F]":o.phase==="charging"?`${o.battery>=100?"Fully charged":"Charging"} \xB7 ${Math.floor(o.battery)}%`:""}return Q(0),{group:s,use:de,update:Q,reset:P,hint:_e,get phase(){return o.phase},get nextAction(){return o.nextAction},get drawerReady(){return fe>.85},get battery(){return o.battery}}}function L0(){let i="sealed",e=-1/0;return{get phase(){return i},get hasKey(){return i==="collected"},get startedAt(){return e},pour(t){return i!=="sealed"?!1:(i="pouring",e=t,!0)},update(t){i==="pouring"&&t-e>=3.4&&(i="revealed")},collect(){return i!=="revealed"?!1:(i="collected",!0)},reset(){i="sealed",e=-1/0}}}function D0({bottle:i,contents:e,cap:t,floorSupport:n}){let s=new Se;s.name="Ketchup spill and hidden shackle key";let r=L0(),o=i.position.clone(),a=i.quaternion.clone();i.userData.keyAction="pour";let c=new w(0,1,0).applyQuaternion(a),l=new pt().setFromUnitVectors(c,new w(-.25,-.94,.23).normalize()).multiply(a),h=o.clone().add(new w(.72,.32,.38)),p=h.clone().add(new w(-.045,0,.045));p.y=n(p.x,p.z)+.009;let f=t.position.clone(),d=t.quaternion.clone();t.updateWorldMatrix(!0,!1);let g=t.getWorldPosition(new w),x=t.getWorldQuaternion(new pt),m=g.clone().add(new w(-.13,0,.1));m.y=n(m.x,m.z)+.016;let u=new Be({color:13674833,metalness:.72,roughness:.27,emissive:7161877,emissiveIntensity:.18}),E=new Se;E.name="Brass shackle key",E.userData.keyAction="collect",s.add(E),E.visible=!1;function y(ee,oe,j){let O=new lt(ee,oe);return O.castShadow=!0,O.receiveShadow=!0,j.add(O),O}let M=y(new $t(.025,.0055,8,24),u,E);M.rotation.x=Math.PI/2,M.position.x=-.042;let I=y(new bt(.078,.009,.01),u,E);I.position.x=.013;for(let ee of[.027,.047])y(new bt(.01,.009,.022),u,E).position.set(ee,0,.01);let A=y(new bt(.15,.04,.1),new gt({transparent:!0,opacity:0,depthWrite:!1,colorWrite:!1}),E);A.castShadow=!1,A.receiveShadow=!1;let S=new kt({color:12001548,roughness:.28,clearcoat:1,clearcoatRoughness:.18}),C=new Se;C.position.copy(p),C.position.y-=.006,s.add(C),C.visible=!1;let Y=new Et;for(let ee=0;ee<=64;ee++){let oe=ee/64*Math.PI*2,j=1+.1*Math.sin(oe*5)+.07*Math.cos(oe*9),O=Math.cos(oe)*.2*j,ae=Math.sin(oe)*.13*j;ee===0?Y.moveTo(O,ae):Y.lineTo(O,ae)}let v=y(new Oi(Y,32),S,C);v.rotation.x=-Math.PI/2,v.castShadow=!1;let b=[];for(let ee=0;ee<7;ee++){let oe=ee*2.4,j=.05+ee*.016,O=y(new qt(1,12,8),S,C);O.position.set(Math.cos(oe)*j,.003,Math.sin(oe)*j*.6),O.scale.set(.015+ee%3*.005,.004,.012),b.push(O)}let F=y(new Xt(1,1,1,10),S,s);F.visible=!1,F.castShadow=!1;let B=new w,G=new w,H=new w,J=new w(0,1,0),ye=ee=>{let oe=Je.clamp(ee,0,1);return oe*oe*(3-2*oe)},ie=!1;function fe(){r.reset(),i.position.copy(o),i.quaternion.copy(a),e.scale.y=1,i.children[0].add(t),t.position.copy(f),t.quaternion.copy(d),t.scale.setScalar(1),ie=!1,E.visible=!1,C.visible=!1,F.visible=!1}function N(ee,oe){if(r.update(ee),r.phase==="sealed")return;let j=ee-r.startedAt,O=ye(j/.8)*(1-ye((j-3.35)/.8));i.position.copy(o).lerp(h,O),i.quaternion.copy(a).slerp(l,O),ie||(s.attach(t),ie=!0),t.position.copy(g).lerp(m,ye(j/.55)),t.position.y+=Math.sin(Math.min(1,j/.55)*Math.PI)*.08,t.quaternion.copy(x).multiply(new pt().setFromAxisAngle(new w(0,0,1),ye(j/.55)*2));let ae=ye((j-.75)/2.5);if(e.scale.y=Math.max(.025,1-ae),C.visible=j>.75,C.scale.setScalar(Math.max(.01,ae)),i.updateWorldMatrix(!0,!0),i.children[0].localToWorld(B.set(0,.469,0)),F.visible=j>.8&&j<3.3,F.visible){G.copy(B).add(p).multiplyScalar(.5),H.subVectors(B,p),F.position.copy(G),F.quaternion.setFromUnitVectors(J,H.clone().normalize());let V=oe?1:1+Math.sin(j*21)*.12;F.scale.set(.012*V,H.length(),.012*V)}if(E.visible=j>=2.5&&!r.hasKey,E.visible){let V=ye((j-2.5)/.9);E.position.copy(B).lerp(p,V),E.position.y+=Math.sin(V*Math.PI)*.065,E.rotation.set((1-V)*2,V*.5,(1-V)*3),u.emissiveIntensity=oe?.22:.22+.1*Math.sin(ee*3)}}return{group:s,bottle:i,key:E,update:N,reset:fe,get hasKey(){return r.hasKey},get phase(){return r.phase},pour:ee=>r.pour(ee),collect:()=>r.collect(),hint(ee){return ee==="collect"&&!r.hasKey?r.phase==="revealed"?"Pick up the shackle key":"A key is sliding out\u2026":ee==="pour"?r.phase==="sealed"?"Pour out the ketchup":r.phase==="pouring"?"Pouring ketchup\u2026":r.hasKey?"The bottle is empty":"Pick up the key in the ketchup":""}}}var cl=(i,e,t)=>Math.max(e,Math.min(t,i));function U0({speed:i=.38,maxPoints:e=180}={}){let t=[],n=null,s=!1;function r(a,c,l,h=!1){return h||n!==null||t.some(p=>p.index===a)?!1:(t.push({index:a,openedAt:l,progress:0,origin:{...c},head:{x:c.x,z:c.z},points:[]}),!0)}function o(a,c,l){if(s)return!1;for(let h of t){if(h.progress=cl((a-h.openedAt)/1.35,0,1),a-h.openedAt<.48)continue;h.points.length||h.points.push({...h.head,born:a,radius:.13});let p=l.x-h.head.x,f=l.z-h.head.z,d=Math.hypot(p,f),g=Math.min(d,i*cl(c,0,.08));if(d>.001){let m=.18*Math.sin((a-h.openedAt)*.85+h.index*1.9),u=Math.sqrt(1+m*m);h.head.x+=(p/d-f/d*m)*g/u,h.head.z+=(f/d+p/d*m)*g/u}let x=h.points.at(-1);Math.hypot(x.x-h.head.x,x.z-h.head.z)>.075&&(h.points.push({...h.head,born:a,radius:.13}),h.points.length>e&&h.points.splice(1,1));for(let[m,u]of h.points.entries()){let E=cl((a-u.born)/3,0,1);u.radius=m===0?.16+.23*E:.12+(.13+.025*Math.sin(u.born*1.8+h.index))*E,n===null&&Math.hypot(l.x-u.x,l.z-u.z)<u.radius+.15&&(n=a)}}return n!==null&&a-n>=.85?(s=!0,!0):!1}return{open:r,update:o,leaks:t,reset(){t.length=0,n=null,s=!1},get dying(){return n!==null},get finished(){return s},blackout(a){return n===null?0:cl((a-n)/.7,0,1)}}}function H0(i,e,t){let n=Lt.textureSize,s=document.createElement("canvas");s.width=s.height=n;let r=s.getContext("2d"),o=new Ft(s);o.flipY=!1,o.generateMipmaps=!1,o.minFilter=pn;let a={value:o};function c(y){let M=new kt({color:6519843,roughness:.12,metalness:0,ior:1.333,clearcoat:1,clearcoatRoughness:.08,emissive:2571784,emissiveIntensity:.15,transparent:y,opacity:y?.92:1,depthWrite:!y,side:It,envMapIntensity:1.4});return M.onBeforeCompile=I=>{I.uniforms.acidTime=t,I.uniforms.acidWet=a,I.vertexShader=`varying vec3 vWetWorld;
`+I.vertexShader,I.vertexShader=I.vertexShader.replace("#include <worldpos_vertex>",`#include <worldpos_vertex>
    vec4 wetVertex=vec4(transformed,1.0);
    #ifdef USE_INSTANCING
     wetVertex=instanceMatrix*wetVertex;
    #endif
    vWetWorld=(modelMatrix*wetVertex).xyz;`),I.fragmentShader=`uniform float acidTime;uniform sampler2D acidWet;varying vec3 vWetWorld;
`+I.fragmentShader,I.fragmentShader=I.fragmentShader.replace("#include <color_fragment>",`#include <color_fragment>
    vec2 flowUV=vWetWorld.xz;
    float eddy=sin(flowUV.x*14.0+sin(flowUV.y*9.0-acidTime*.7)+acidTime*.35)*sin(flowUV.y*17.0-acidTime*.8);
    float fine=sin(flowUV.x*71.0+flowUV.y*43.0-acidTime*2.5)*sin(flowUV.y*81.0-flowUV.x*29.0+acidTime*1.8);
    ${y?`float wet=texture2D(acidWet,(flowUV+vec2(4.1,4.2))/vec2(8.2,8.8)).r;
    wet-=.035*eddy+.018*fine;
    if(wet<.055)discard;
    float depth=smoothstep(.12,.95,wet);
    diffuseColor.rgb=mix(vec3(.31,.42,.085),diffuseColor.rgb*.62,depth);
    diffuseColor.a*=smoothstep(.055,.22,wet)*mix(.48,1.0,depth);`:""}
    diffuseColor.rgb*=.94+.07*eddy+.025*fine;`),I.fragmentShader=I.fragmentShader.replace("#include <normal_fragment_begin>",`#include <normal_fragment_begin>
    float dx=.045*cos(vWetWorld.x*24.0+vWetWorld.z*12.0-acidTime*2.1)+.018*cos(vWetWorld.x*83.0-vWetWorld.z*36.0+acidTime*3.0);
    float dz=.035*sin(vWetWorld.z*27.0-vWetWorld.x*9.0+acidTime*1.7)+.012*sin(vWetWorld.z*79.0+acidTime*3.4);
    normal=normalize(normal+mat3(viewMatrix)*vec3(dx,0.0,dz));`)},M.customProgramCacheKey=()=>`acid-water-${y?"surface":"jet"}-v2`,M}let l=c(!0),h=c(!1),p=Lt.mobile?48:72,f=new Mt(8.2,8.8,p,p);f.rotateX(-Math.PI/2),f.translate(0,0,.2);let d=f.attributes.position,g=f.attributes.uv;for(let y=0;y<d.count;y++){let M=d.getX(y),I=d.getZ(y);d.setY(y,i(M,I)+.006),g.setXY(y,(M+4.1)/8.2,(I+4.2)/8.8)}d.needsUpdate=!0,g.needsUpdate=!0,f.computeVertexNormals();let x=new lt(f,l);x.name="Continuous reflective acid film",x.renderOrder=4,x.receiveShadow=!0;let m=new lt(f,new gt({color:1053961,alphaMap:e,transparent:!0,opacity:.44,depthWrite:!1,alphaTest:.01}));m.name="Damp corroded edge beneath acid",m.position.y=-.002,m.renderOrder=3;let u=-1/0;function E(y,M){if(!(y-u<.1)){u=y,r.globalCompositeOperation="source-over",r.fillStyle="#000",r.fillRect(0,0,n,n),r.globalCompositeOperation="lighten";for(let I of M)for(let A of I.points){let S=(A.x+4.1)/8.2*n,C=(A.z+4.2)/8.8*n,Y=A.radius*n/8.2,v=r.createRadialGradient(S,C,0,S,C,Y);v.addColorStop(0,"#fff"),v.addColorStop(.62,"#fff"),v.addColorStop(.85,"#999"),v.addColorStop(1,"#000"),r.fillStyle=v,r.fillRect(S-Y,C-Y,Y*2,Y*2)}o.needsUpdate=!0}}return{pool:x,scorch:m,jetMaterial:h,update:E,reset(){u=-1/0,r.globalCompositeOperation="source-over",r.fillStyle="#000",r.fillRect(0,0,n,n),o.needsUpdate=!0},setEnvironment(y){for(let M of[l,h])M.envMap=y,M.needsUpdate=!0}}}function N0(i,e,t){let n=new w,s=new pt;i.getWorldPosition(n),i.getWorldQuaternion(s);let r=new w(0,-.25,.6).applyQuaternion(s),o=9.81,a=e(n.x,n.z)+.009,c=Math.max(.01,n.y-a),l=(r.y+Math.sqrt(r.y*r.y+2*o*c))/o,h=n.clone().addScaledVector(r,l);h.y=e(h.x,h.z)+.009;let p=20,f=10,d=new Ct,g=new Float32Array((p+1)*(f+1)*3),x=new Float32Array(g.length),m=[];for(let C=1;C<=p;C++)for(let Y=1;Y<=f;Y++){let v=C*(f+1)+Y;m.push(v,v-f-2,v-1,v,v-f-1,v-f-2)}d.setAttribute("position",new ln(g,3).setUsage(Un)),d.setAttribute("normal",new ln(x,3).setUsage(Un)),d.setIndex(m);let u=new lt(d,t);u.name="Gravity-fed wavering drain stream",u.frustumCulled=!1,u.raycast=()=>{};let E=new w,y=new w,M=new w,I=new w,A=new w;function S(C,Y){let v=Je.smoothstep(Y,0,.65);for(let b=0;b<=p;b++){let F=b/p,B=F*l;E.copy(n).addScaledVector(r,B),E.y-=.5*o*B*B,E.x+=Math.sin(C*19-F*13)*.002*F,E.z+=Math.sin(C*16-F*11)*.0015*F,y.copy(r),y.y-=o*B,y.normalize(),M.set(1,0,0).addScaledVector(y,-y.x).normalize(),I.crossVectors(M,y);let G=(.021-.01*F)*(1+.12*Math.sin(F*25-C*23))*v;for(let H=0;H<=f;H++){let J=H/f*Math.PI*2,ye=(b*(f+1)+H)*3;A.copy(M).multiplyScalar(Math.cos(J)).addScaledVector(I,Math.sin(J)),A.toArray(x,ye),g[ye]=E.x+A.x*G,g[ye+1]=E.y+A.y*G,g[ye+2]=E.z+A.z*G}}d.attributes.position.needsUpdate=d.attributes.normal.needsUpdate=!0}return S(0,1),{mesh:u,origin:h,update:S}}function F0({valves:i,floorSupport:e}){let t=new Se;t.name="Corrosive green liquid, bubbles and contact smoke",t.userData.ignoreAcid=!0,t.visible=!1;let n=U0(),s=new Nt,r=new pt,o={value:0},a=new Map,c=new Map,l=[],h=-1/0,p=document.createElement("canvas");p.width=p.height=512;let f=p.getContext("2d");f.fillStyle="#000",f.fillRect(0,0,512,512);let d=new Ft(p);d.generateMipmaps=!1,d.minFilter=pn,d.flipY=!1;let g={value:d};function x(N){if(c.has(N))return c.get(N);let ee=N.clone(),oe=N.onBeforeCompile,j=N.customProgramCacheKey();return ee.onBeforeCompile=O=>{oe.call(N,O),O.uniforms.acidBurn=g,O.vertexShader=`varying vec3 vAcidWorld;
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
    if(burned>.48&&pitting<(burned-.48)*.55)discard;`)},ee.customProgramCacheKey=()=>j+"-acid-corrosion-v1",c.set(N,ee),ee}function m(N){let ee=new Dn;function oe(j){if(!j.userData.ignoreAcid){if(j.isMesh&&j.material&&(ee.setFromObject(j),ee.min.y<.4&&ee.max.y>-.01)){ee.max.y>.02&&ee.max.y<.65&&l.push(ee.clone());let O=ae=>ae.isMeshStandardMaterial||ae.isMeshBasicMaterial||ae.isMeshToonMaterial?x(ae):ae;j.material=Array.isArray(j.material)?j.material.map(O):O(j.material)}for(let O of j.children)oe(O)}}for(let j of N)j.updateWorldMatrix(!0,!0),oe(j)}let u=H0(e,d,o);t.add(u.scorch,u.pool);let E=new xn(new qt(1,10,7),new kt({color:10530404,roughness:.13,clearcoat:1,transparent:!0,opacity:.72,depthWrite:!1}),54);E.instanceMatrix.setUsage(Un),E.frustumCulled=!1,E.count=0,t.add(E);let y=new xn(new qt(1,8,6),u.jetMaterial,42);y.instanceMatrix.setUsage(Un),y.frustumCulled=!1,y.count=0,y.name="Small falling splash droplets",t.add(y);let M=new Ns(.9,1,32);M.rotateX(-Math.PI/2);let I=new ar(new Float32Array(12),1);M.setAttribute("rippleAlpha",I);let A=new gt({color:11978123,transparent:!0,opacity:.32,depthWrite:!1,side:It});A.onBeforeCompile=N=>{N.vertexShader=`attribute float rippleAlpha;varying float vRippleAlpha;
`+N.vertexShader,N.vertexShader=N.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
vRippleAlpha=rippleAlpha;`),N.fragmentShader=`varying float vRippleAlpha;
`+N.fragmentShader,N.fragmentShader=N.fragmentShader.replace("#include <color_fragment>",`#include <color_fragment>
diffuseColor.a*=vRippleAlpha;`)};let S=new xn(M,A,12);S.instanceMatrix.setUsage(Un),S.frustumCulled=!1,S.count=0,S.renderOrder=6,S.name="Expanding impact rings",t.add(S);let C=document.createElement("canvas");C.width=C.height=128;let Y=C.getContext("2d");for(let N=0;N<7;N++){let ee=64+Math.sin(N*2.4)*23,oe=64+Math.cos(N*3.1)*21,j=Y.createRadialGradient(ee,oe,0,ee,oe,36);j.addColorStop(0,"rgba(220,231,199,.3)"),j.addColorStop(1,"rgba(220,231,199,0)"),Y.fillStyle=j,Y.fillRect(0,0,128,128)}let v=new Ft(C),b=new Mt(1,1),F=new ar(new Float32Array(84),1);b.setAttribute("smokeAlpha",F);let B=new gt({map:v,transparent:!0,opacity:.27,depthWrite:!1,color:12699827,side:It});B.onBeforeCompile=N=>{N.vertexShader=`attribute float smokeAlpha;varying float vSmokeAlpha;
`+N.vertexShader,N.vertexShader=N.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
vSmokeAlpha=smokeAlpha;`),N.fragmentShader=`varying float vSmokeAlpha;
`+N.fragmentShader,N.fragmentShader=N.fragmentShader.replace("#include <color_fragment>",`#include <color_fragment>
diffuseColor.a*=vSmokeAlpha;`)};let G=new xn(b,B,84);G.name="Smoke rising from corroding surfaces",G.instanceMatrix.setUsage(Un),G.frustumCulled=!1,G.count=0,G.renderOrder=12,t.add(G),t.traverse(N=>{N.isMesh&&(N.raycast=()=>{})});function H(N,ee){let oe=e(N,ee);for(let j of l)N>=j.min.x&&N<=j.max.x&&ee>=j.min.z&&ee<=j.max.z&&(oe=Math.max(oe,Math.min(.27,j.max.y)));return oe}function J(N,ee,oe=!1){let j=i[N];if(!j||oe||n.dying||n.leaks.some(ae=>ae.index===N))return!1;let O=N0(j.outlet,e,u.jetMaterial);return n.open(N,O.origin,ee,oe)?(O.mesh.visible=!1,t.add(O.mesh),a.set(N,O),t.visible=!0,!0):(O.mesh.geometry.dispose(),!1)}function ye(N){if(!(N-h<.1)){h=N;for(let ee of n.leaks)for(let oe of ee.points){let j=(oe.x+4.1)/8.2*512,O=(oe.z+4.2)/8.8*512,ae=oe.radius*512/8.2*1.18,V=f.createRadialGradient(j,O,ae*.45,j,O,ae);V.addColorStop(0,"rgba(255,255,255,.13)"),V.addColorStop(1,"rgba(255,255,255,0)"),f.fillStyle=V,f.fillRect(j-ae,O-ae,ae*2,ae*2)}d.needsUpdate=!0}}function ie(N,ee,oe,j,O=!1){if(!n.leaks.length)return!1;let ae=n.update(N,ee,oe),V=O?0:N;o.value=V,j.getWorldQuaternion(r);let W=0,Z=0,ge=0,Ae=0;for(let de of n.leaks){i[de.index].setOpen(O?1:Je.smootherstep(de.progress,0,1));let Q=a.get(de.index);if(Q.mesh.visible=de.points.length>0,Q.update(V,de.progress),!!de.points.length){for(let P=0;P<18;P++){let _e=de.points[(P*17+de.index*5)%de.points.length],ne=(V*.9+P*.618)%1,he=P*2.399,me=_e.radius*.57;s.position.set(_e.x+Math.cos(he)*me,e(_e.x,_e.z)+.008+Math.sin(ne*Math.PI)*.005,_e.z+Math.sin(he)*me);let Ce=(.005+P%4*.0025)*Math.sin(ne*Math.PI);s.scale.set(Ce,Ce*.45,Ce),s.quaternion.identity(),s.updateMatrix(),E.setMatrixAt(W++,s.matrix)}for(let P=0;P<14;P++){let _e=(V*2.7+P*.618)%1,ne=P*2.399+de.index,he=.015+_e*(.07+P%3*.02),me=.045+P%4*.012;s.position.set(de.origin.x+Math.cos(ne)*he,de.origin.y+4*me*_e*(1-_e),de.origin.z+Math.sin(ne)*he);let Ce=(.003+P%3*.0015)*(1-_e*.45);s.scale.set(Ce,Ce*(1.3+_e),Ce),s.quaternion.identity(),s.updateMatrix(),y.setMatrixAt(ge++,s.matrix)}for(let P=0;P<4;P++){let _e=(V*1.6+P*.25)%1,ne=.018+_e*.16;s.position.set(de.origin.x,e(de.origin.x,de.origin.z)+.01,de.origin.z),s.quaternion.identity(),s.scale.set(ne,1,ne*.92),s.updateMatrix(),S.setMatrixAt(Ae,s.matrix),I.setX(Ae++,Math.sin(_e*Math.PI)*(1-_e))}for(let P=0;P<16;P++){let _e=P*7%Math.min(35,de.points.length),ne=de.points[Math.max(0,de.points.length-1-_e)],he=(V*.46+P*.381)%1,me=P*2.4+de.index,Ce=ne.radius*(.45+he*.5),we=.075+he*.22;s.position.set(ne.x+Math.cos(me)*Ce+Math.sin(V+P)*he*.06,H(ne.x,ne.z)+.015+he*.34,ne.z+Math.sin(me)*Ce),s.quaternion.copy(r),s.rotateZ(P*.9+he*.4),s.scale.set(we,we*1.5,1),s.updateMatrix(),G.setMatrixAt(Z,s.matrix),F.setX(Z++,Math.sin(he*Math.PI)*.58)}}}E.count=W,G.count=Z,y.count=ge,S.count=Ae;for(let de of[E,G,y,S])de.instanceMatrix.needsUpdate=!0;return F.needsUpdate=!0,I.needsUpdate=!0,u.update(N,n.leaks),ye(N),ae}function fe(){n.reset(),u.reset(),t.visible=!1,E.count=G.count=y.count=S.count=0;for(let N of a.values())t.remove(N.mesh),N.mesh.geometry.dispose();a.clear();for(let N of i)N.setOpen(0);f.clearRect(0,0,512,512),f.fillStyle="#000",f.fillRect(0,0,512,512),d.needsUpdate=!0,h=-1/0}return{group:t,open:J,update:ie,reset:fe,bindTargets:m,setEnvironment:u.setEnvironment,blackout:N=>n.blackout(N),get dying(){return n.dying},get active(){return n.leaks.length>0}}}function O0(i,e){let t=new Se;t.name="Abandoned technology office";let n=[],s=[],r=_=>(n.push(_),_),o=87021,a=()=>(o=o*1664525+1013904223>>>0,o/4294967296),c=(_,R)=>_+(R-_)*a();function l(_=512){let R=document.createElement("canvas");return R.width=R.height=_,[R,R.getContext("2d")]}function h(_){let R=new Ft(_);return R.colorSpace=ft,R.anisotropy=Math.min(8,i.capabilities.getMaxAnisotropy()),R}function p(_,R,D,z,k,q){let ue=_.createRadialGradient(R,D,0,R,D,z);ue.addColorStop(0,`rgba(${k},${q})`),ue.addColorStop(1,`rgba(${k},0)`),_.fillStyle=ue,_.fillRect(R-z,D-z,z*2,z*2)}function f(_,R,D,z,k){for(let q=0;q<D;q++)_.fillStyle=`rgba(${z},${a()*k})`,_.fillRect(a()*R,a()*R,c(.4,2.2),c(.4,2))}function d(_,R="paint"){let[D,z]=l();z.fillStyle=_,z.fillRect(0,0,512,512);for(let k=0;k<210;k++)p(z,a()*512,a()*512,c(4,70),k%3?"27,33,23":"110,83,48",c(.025,.15));if(f(z,512,12e3,"18,25,18",.24),f(z,512,4e3,"200,192,159",.18),R==="wood")for(let k=0;k<550;k++){z.strokeStyle=`rgba(36,29,17,${c(.02,.16)})`,z.lineWidth=c(.4,2);let q=a()*512;z.beginPath(),z.moveTo(0,q),z.bezierCurveTo(170,q+c(-12,12),340,q+c(-12,12),512,q),z.stroke()}if(R==="metal")for(let k=0;k<250;k++)p(z,a()*512,a()*512,c(2,18),"112,56,24",c(.1,.5));for(let k=0;k<80;k++){z.strokeStyle=`rgba(197,190,160,${c(.08,.3)})`,z.lineWidth=c(.3,1.3);let q=a()*512,ue=a()*512;z.beginPath(),z.moveTo(q,ue),z.lineTo(q+c(3,50),ue+c(-2,4)),z.stroke()}return h(D)}let g=d("#8b8c77"),x=d("#b2b09a"),m=d("#817157","wood"),u=d("#4e5550","metal"),E=d("#44534b"),y=d("#66695a"),M=(_,R=.88,D=null,z=0)=>new Be({color:_,roughness:R,map:D,bumpMap:D,bumpScale:D?.008:0,metalness:z}),I=M(16777215,.98,g),A=M(16777215,.86,m),S=M(16777215,.8,x),C=M(16777215,.73,u,.42),Y=M(16777215,.95,E),v=M(1514521,.86),b=M(1053970,.95),F=M(16777215,.98,y),B=M(8555654,.4,null,.8);function G(_,R,D=t){let z=new lt(_,R);return z.castShadow=!0,z.receiveShadow=!0,D.add(z),z}function H(_,R,D=C,z=t){let k=G(new bt(..._),D,z);return k.position.set(...R),k}let J=new qt(1,20,12);function ye(_,R,D,z=t){let k=G(J,D,z);return k.scale.set(..._),k.position.set(...R),k}function ie(_,R,D,z=C,k=t,q=12){let ue=G(new Xt(_,_,R,q),z,k);return ue.position.set(...D),ue}function fe(_,R,D=.015,z=C,k=t){let q=new w(..._),ue=new w(...R),Ge=ue.clone().sub(q),tt=ie(D,Ge.length(),q.clone().add(ue).multiplyScalar(.5).toArray(),z,k);return tt.quaternion.setFromUnitVectors(new w(0,1,0),Ge.normalize()),tt}function N(_,R=.008,D=v,z=t){let k=new Zt(_.map(ue=>new w(...ue))),q=G(new un(k,Math.max(20,_.length*8),R,6,!1),D,z);return z===t&&_.some(ue=>ue[1]<.06)&&s.push(q),q}function ee(_,R,D,z=.025){z=Math.min(z,_*.45,R*.45);let k=new Et,q=_/2,ue=R/2;k.moveTo(-q+z,-ue),k.lineTo(q-z,-ue),k.quadraticCurveTo(q,-ue,q,-ue+z),k.lineTo(q,ue-z),k.quadraticCurveTo(q,ue,q-z,ue),k.lineTo(-q+z,ue),k.quadraticCurveTo(-q,ue,-q,ue-z),k.lineTo(-q,-ue+z),k.quadraticCurveTo(-q,-ue,-q+z,-ue);let Ge=Math.min(.012,_/6,R/6,D/6),tt=new rn(k,{depth:D-Ge*2,bevelEnabled:!0,bevelSize:Ge,bevelThickness:Ge,bevelSegments:2,steps:1,curveSegments:4});return tt.translate(0,0,-D/2+Ge),tt}function oe(_,R,D,z=t){let k=G(ee(..._),D,z);return k.position.set(...R),k}function j(_,R,D,z=!1){let[k,q]=l(1024);for(let Ge=0;Ge<290;Ge++)p(q,a()*1024,z?a()*1024:a()<.6?c(600,1060):a()*1024,c(12,140),"24,30,19",c(.03,.26));if(!z){let Ge=q.createLinearGradient(0,0,0,1024);Ge.addColorStop(0,"rgba(29,35,24,.4)"),Ge.addColorStop(.3,"rgba(29,35,24,0)"),Ge.addColorStop(.75,"rgba(29,35,24,.07)"),Ge.addColorStop(1,"rgba(23,30,21,.72)"),q.fillStyle=Ge,q.fillRect(0,0,1024,1024);for(let tt=0;tt<80;tt++){let Pt=a()*1024,nn=a()*220;q.strokeStyle=`rgba(62,51,30,${c(.03,.26)})`,q.lineWidth=c(1,6),q.beginPath(),q.moveTo(Pt,nn),q.lineTo(Pt+c(-8,8),nn+c(80,750)),q.stroke()}}f(q,1024,17e3,"16,25,17",.28);let ue=G(new Mt(_,R),new Be({map:h(k),transparent:!0,depthWrite:!1,roughness:1}),D);return ue.castShadow=!1,ue}H([7.8,.15,8.6],[0,-.075,.2],F);let O=j(7.8,8.6,t,!0);O.rotation.x=-Math.PI/2,O.position.set(0,.003,.2);let ae=H([7.8,3.35,.16],[0,1.675,-4.08],I),V=H([.16,3.35,8.6],[-3.98,1.675,.2],M(8556677,.98,g));H([.16,1.1,8.6],[3.98,.55,.2],I),H([.16,.65,8.6],[3.98,3.025,.2],I),H([.16,1.6,1.2],[3.98,1.9,-3.4],I),H([.16,1.6,4.8],[3.98,1.9,2.1],I),j(7.8,3.35,t).position.set(0,1.675,-3.99);let Z=j(8.6,3.35,t);Z.rotation.y=Math.PI/2,Z.position.set(-3.89,1.675,.2);for(let _=0;_<9;_++)H([.012,2.2,.014],[-3.85+_*.96,1.66,-3.977],C);H([7.8,.045,.035],[0,.58,-3.96],C),H([7.8,.045,.035],[0,2.76,-3.96],C);for(let _ of[-3.86,3.86])H([.045,.13,8.6],[_,.065,.2],v);H([7.8,.13,.04],[0,.065,-3.95],v);for(let _=0;_<26;_++){let R=new Et,D=c(-3.65,3.65),z=c(.24,3.1),k=c(.05,.22),q=c(.05,.26);for(let Ge=0;Ge<9;Ge++){let tt=Ge/9*Math.PI*2,Pt=c(.6,1),nn=D+Math.cos(tt)*k*Pt,Vt=z+Math.sin(tt)*q*Pt;Ge?R.lineTo(nn,Vt):R.moveTo(nn,Vt)}R.closePath();let ue=G(new Oi(R),M(_%3?5199175:11644305,.99));ue.position.z=-3.972,ue.castShadow=!1}let ge=H([7.8,.1,8.6],[0,3.36,.2],v);for(let _=-3.6;_<3.9;_+=1.2)H([.028,.032,8.6],[_,3.12,.2],C);for(let _=-3.9;_<4.5;_+=1.2)H([7.8,.032,.028],[0,3.12,_],C);let Ae=M(10132616,.98,g);for(let _=-3;_<3.9;_+=1.2)for(let R=-3.3;R<4.5;R+=1.2){if(a()<.25)continue;let D=H([1.15,.035,1.15],[_,3.145,R],Ae);a()<.12&&(D.rotation.z=c(-.13,.13),D.position.y-=.06)}for(let _=0;_<5;_++)N([[-2+_*.45,3.3,-1.6],[-1.9+_*.45,2.8,-1.5],[-1.7+_*.4,2.53,-1.6],[-1.3+_*.35,3.29,-1.8]],.009,v);let de=new Se;de.position.set(3.88,1.9,-1.5),de.rotation.y=-Math.PI/2,t.add(de);let[Q,P]=l();P.fillStyle="#778c88",P.fillRect(0,0,512,512);for(let _=0;_<15;_++){let R=_*43,D=c(25,60),z=c(70,290);P.fillStyle=_%2?"#4b5d58":"#526560",P.fillRect(R,512-z,D,z);for(let k=0;k<5;k++)P.fillStyle="#879186",P.fillRect(R+8,512-z+18+k*34,4,10)}let _e=G(new Mt(2.8,1.6),new gt({map:h(Q),color:3622209}),de);_e.position.z=-.13,_e.castShadow=!1;for(let _ of[-1.43,0,1.43])H([.055,1.7,.09],[_,0,.025],C,de);for(let _ of[-.83,.83])H([2.92,.055,.09],[0,_,.025],C,de);let ne=M(10336426,.25,null,.25);ne.transparent=!0,ne.opacity=.18,ne.side=It;for(let _ of[-.72,.72]){let R=H([1.37,1.55,.008],[_,0,.04],ne,de);R.castShadow=!1}for(let _=0;_<17;_++){if([5,9,14].includes(_))continue;let R=H([2.77,.047,.015],[0,.73-_*.086,.11],M(8160114,.82,x),de);R.rotation.x=.35,(_===7||_===12)&&(R.rotation.z=_===7?.035:-.05,R.rotation.x=.9)}for(let _ of[-.86,.86])N([[_,.8,.15],[_,.12,.16],[_,-.77,.15]],.005,v,de);N([[1.35,.83,.12],[1.4,-.7,.14],[1.32,-1.1,.18]],.006,v,de);let he=u0(i);o=577513849;let me=ee(.77,.45,.035,.012),Ce=M(7042164,.38,null,.7);function we(_,R,D=0,z="cracked",k=1){let q=new Se;q.position.set(...R),q.rotation.y=D,q.scale.setScalar(k),_.add(q),q.name="Damaged widescreen monitor",G(me,v,q).position.set(0,.375,0),oe([.31,.018,.2],[0,.013,-.025],Ce,q),H([.055,.24,.025],[0,.14,-.035],Ce,q),he.add(q,z),H([.18,.16,.032],[0,.36,-.03],Ce,q),ye([.004,.004,.003],[.35,.163,.022],z==="live"?new gt({color:9223008}):v,q);for(let tt=0;tt<11;tt++)H([.015,.002,.003],[-.25+tt*.05,.585,-.02],C,q);let Ge=N([[.1,.23,-.05],[.15,.04,-.08],[.23,-.31,-.18]],.006,v,q);return Ge.name="Monitor power cable",Ge.userData.ignoreFloorContact=!0,q}let U=new bt(.023,.008,.023);function T(_,R,D=0){let z=new Se;z.position.set(...R),z.rotation.y=D,_.add(z),oe([.47,.035,.18],[0,0,0],S,z);let k=new xn(U,M(6844e3,.8),56);for(let q=0;q<56;q++){let ue=new Nt;ue.position.set(-.206+q%14*.031,.024,-.065+Math.floor(q/14)*.036),ue.updateMatrix(),k.setMatrixAt(q,ue.matrix)}return z.add(k),H([.14,.008,.022],[0,.024,.07],v,z),z}function K(_,R,D=0,z=!1){let k=new Se;k.position.set(...R),k.rotation.y=D,_.add(k),oe([.25,.53,.46],[0,.265,0],S,k);for(let q=.32;q<.49;q+=.065)H([.195,.042,.012],[0,q,.239],v,k);for(let q=0;q<7;q++)H([.16,.008,.012],[0,.055+q*.025,.239],C,k);if(z){H([.012,.42,.35],[.139,.27,0],v,k);for(let q=0;q<3;q++)H([.015,.09,.25],[.15,.16+q*.105,-.02],M(2706228,.83),k)}return k}function xe(_,R,D,z=0){let k=new Se;k.position.set(_,0,R),k.rotation.y=z,t.add(k),H([D,.075,.86],[0,.82,0],A,k),H([D,.035,.025],[0,.794,.443],C,k);for(let q of[-D/2+.08,D/2-.08])H([.048,.79,.68],[q,.39,0],C,k),H([.24,.035,.74],[q,.018,0],v,k);return H([D-.16,.19,.035],[0,.45,-.35],C,k),k}let be=xe(-1,-3.37,5.4);for(let _=0;_<6;_++){let R=-2.24+_*.84;we(be,[R,.86,-.05],c(-.13,.13),_===3?"live":_%2?"hole":"cracked",c(.88,1.04)),T(be,[R+.03,.87,.3],c(-.16,.16)),_%2===0&&K(be,[R+.18,0,-.1],c(-.1,.1),!0)}let Me=xe(-1.1,-2.25,2.6,0);for(let _=0;_<3;_++)we(Me,[-.84+_*.83,.86,-.1],c(-.2,.2),_===0?"live":"hole",.9),T(Me,[-.84+_*.83,.87,.3],c(-.2,.2));let We=we(t,[-.8,.31,-1.45],.42,"hole",.95);We.rotation.set(-1.38,.42,.21),r(We);let Oe=we(t,[-2.72,.24,2.58],-.45,"cracked",.73);Oe.rotation.x=-.56,Oe.rotation.z=.24,r(Oe);let qe=K(t,[-2.22,.13,-.72],.35,!0);qe.rotation.z=Math.PI/2,r(qe);for(let _=0;_<3;_++)r(K(t,[-3.32,0,-2.45+_*.31],-.18,!0)).scale.setScalar(.9);let xt=o,De=M(16777215,.78,d("#afb4a9","metal"),.22),$=M(6449762,.7,null,.25),ve=M(3225908,.86,E),Ie=M(11383205,.82),Pe=M(6845548,.46,null,.73);function Te(_=0){let[R,D]=l(512);D.lineWidth=1.8;for(let z=0;z<512;z+=7)D.strokeStyle=z%21?"#a0a59a":"#686f65",D.beginPath(),D.moveTo(z,0),D.lineTo(z,512),D.stroke();for(let z=0;z<512;z+=6)D.strokeStyle=z%18?"#7f897e":"#b0b4a5",D.lineWidth=z%18?1.6:2.1,D.beginPath(),D.moveTo(0,z),D.lineTo(512,z),D.stroke();if(_){D.globalCompositeOperation="destination-out",D.fillStyle="#000",D.beginPath();let z=_===1?[[126,180],[187,210],[203,182],[229,265],[204,288],[236,339],[183,360],[154,302],[113,321],[137,257],[102,232]]:[[275,256],[315,209],[333,270],[377,253],[353,315],[386,375],[328,354],[300,399],[287,332],[248,309]];z.forEach(([k,q],ue)=>ue?D.lineTo(k,q):D.moveTo(k,q)),D.closePath(),D.fill(),D.lineWidth=3;for(let k=0;k<16;k++){let[q,ue]=z[k%z.length];D.beginPath(),D.moveTo(q,ue),D.lineTo(q+c(-24,24),ue+c(-18,18)),D.stroke()}}return new Be({map:h(R),color:14803929,roughness:.93,side:It,alphaTest:.3,alphaToCoverage:!0})}let ce=[Te(),Te(1),Te(2)];function Ve(_,R,D,z,k=0){let ue=new Zt(_.map(fn=>new w(fn[0],fn[1],0)),!0,"centripetal").getSpacedPoints(96).slice(0,-1),Ge=[],tt=[],Pt=[],nn=12,Vt=ue.length,ci=Math.min(...ue.map(fn=>fn.x)),Di=Math.max(...ue.map(fn=>fn.x)),Io=Math.min(...ue.map(fn=>fn.y)),Hg=Math.max(...ue.map(fn=>fn.y));for(let fn=0;fn<=nn;fn++)for(let _s=0;_s<Vt;_s++){let Do=fn/nn,za=R[0]+(ue[_s].x-R[0])*Do,Uo=R[1]+(ue[_s].y-R[1])*Do;if(Ge.push(...D(za,Uo,Do)),tt.push((za-ci)/(Di-ci),(Uo-Io)/(Hg-Io)),fn<nn){let Yl=fn*Vt+_s,Zl=fn*Vt+(_s+1)%Vt;Pt.push(Yl,Zl,Yl+Vt,Zl,Zl+Vt,Yl+Vt)}}let Lo=new Ct;Lo.setAttribute("position",new ct(Ge,3)),Lo.setAttribute("uv",new ct(tt,2)),Lo.setIndex(Pt),Lo.computeVertexNormals();let Ng=G(Lo,ce[k],z);Ng.customDepthMaterial=new na({depthPacking:rd,map:ce[k].map,alphaTest:.3,side:It});for(let[fn,_s,Do]of[[1,.025,De],[.925,.007,$]]){let za=ue.map(Uo=>new w(...D(R[0]+(Uo.x-R[0])*fn,R[1]+(Uo.y-R[1])*fn,fn)));G(new un(new Zt(za,!0),96,_s,8,!0),Do,z)}}function X(_,R=1){let D=new Se;D.name="Torn mesh back and lumbar support",_.add(D),Ve([[-.18,0],[-.224,.08],[-.235,.26],[-.28,.46],[-.264,.55],[-.17,.6],[0,.615],[.17,.6],[.264,.55],[.28,.46],[.235,.26],[.224,.08],[.18,0],[0,-.014]],[0,.3],(k,q,ue)=>[k,q,-.11*q/.615+.035*(1-ue*ue)],D,R),N([[0,-.09,-.07],[0,.13,-.08],[-.17,.3,-.09],[-.23,.37,-.09]],.018,De,D),N([[0,.08,-.08],[.08,.22,-.085],[.23,.37,-.09]],.018,De,D);for(let k of[.12,.235])ye([.048,.073,.024],[0,k,-.055],ve,D);if(N([[-.21,.175,-.06],[0,.19,-.035],[.21,.175,-.06]],.014,$,D),R)for(let k=0;k<5;k++)N([[-.13+k*.012,.2,-.015],[-.12+k*.012,.15,.001],[-.14+k*.012,.1,-.02]],.0016,ce[0],D);return D}function Re(_,R,D=!1){let z=new Se;_.add(z);let k=R*.295;if(N([[R*.22,.46,-.17],[k,.53,-.2],[k,.67,-.17],[k,.72,-.07]],.023,De,z),D)return ye([.025,.011,.026],[k,.72,-.07],Ie,z),z;let q=ye([.058,.034,.15],[k,.745,.01],ve,z);return q.rotation.z=R*.06,fe([k,.68,-.085],[k,.734,.045],.019,$,z),z}function re(_,R,D,z,k=0){let q=new Se;q.position.set(R,D,z),q.rotation.y=k,_.add(q),fe([0,.028,0],[0,.078,.015],.012,Pe,q);for(let ue of[-1,1]){let Ge=ie(.039,.022,[ue*.021,0,0],b,q,16);Ge.rotation.z=Math.PI/2,ye([.002,.018,.018],[ue*.033,0,0],$,q)}return q}function Ee(_,R=-1){let D=new Se;D.name="Five-spoke caster base",_.add(D),ie(.057,.09,[0,.16,0],De,D,16),ie(.031,.2,[0,.28,0],Pe,D,16);for(let z=0;z<5;z++){let k=z/5*Math.PI*2+.25,q=Math.cos(k),ue=Math.sin(k);if(z===R){fe([0,.16,0],[q*.13,.135,ue*.13],.025,De,D),ye([.024,.014,.018],[q*.13,.135,ue*.13],Ie,D);continue}N([[0,.18,0],[q*.14,.145,ue*.14],[q*.31,.092,ue*.31]],.022,De,D),re(D,q*.31,.04,ue*.31,k)}return D}function Ue(_,R,D,z){return _.position.set(R,0,D),_.rotation.set(...z),_.updateMatrixWorld(!0),r(_)}function Fe(_,R,D,z={}){let k=new Se;k.name="Broken Aeron-style mesh chair",t.add(k),z.noBase||Ee(k,z.missingSpoke??-1),oe([.24,.095,.27],[0,.405,-.035],$,k),ie(.045,.13,[0,.405,0],De,k,16),fe([-.14,.41,.015],[-.245,.405,.05],.012,Pe,k),ye([.035,.016,.055],[-.25,.405,.055],ve,k),ye([.055,.025,.04],[.18,.407,-.04],ve,k),Ve([[-.2,-.23],[-.26,-.16],[-.283,.08],[-.25,.22],[0,.25],[.25,.22],[.283,.08],[.26,-.16],[.2,-.23],[0,-.25]],[0,0],(ue,Ge,tt)=>[ue,.51-.035*(1-tt*tt)-.025*Math.max(0,Ge/.25),Ge],k,z.seatTear??1);for(let ue of[-1,1])N([[ue*.12,.41,-.14],[ue*.22,.46,-.2],[ue*.24,.49,-.15]],.023,De,k),Re(k,ue,ue===z.brokenArm);if(!z.noBack){let ue=X(k,z.backTear??1);ue.position.set(0,.55,-.22),ue.rotation.set(z.backLean??0,0,z.backTwist??0)}return Ue(k,_,R,D)}Fe(-2.85,-2.48,[0,.35,-.035],{brokenArm:1,backTear:2}),Fe(-.3,3.35,[-.08,-.28,.08],{brokenArm:-1,missingSpoke:3,backLean:-.16}),Fe(2.75,3.3,[-.55,-.8,1.39],{brokenArm:-1,missingSpoke:2,backTwist:.2}),Fe(-.55,-3.42,[1.65,.65,.32],{brokenArm:1,noBack:!0}),Fe(1.35,1.42,[-.3,-.5,-1.28],{noBase:!0,brokenArm:-1,backTwist:-.14,backTear:2});let ht=Ee(t,1);ht.name="Detached chair base",Ue(ht,2.35,2.53,[2.7,.36,.22]);let Dt=X(t,2);Dt.name="Snapped mesh backrest",Ue(Dt,-.75,2.3,[-1.6,.22,-.4]);let Ye=Re(t,1);Ye.name="Broken chair arm",Ue(Ye,1.4,2.62,[1.48,.71,.15]),r(re(t,2.37,.045,2.84,.7)),r(re(t,-2.15,.045,.95,-.4)),o=xt;for(let _=0;_<11;_++){let R=c(-3.3,.9),D=c(-3,-1);N([[R,.83,D],[R+.15,.52,D+.2],[R-.12,.04,D+.45],[R+.31,.022,D+.83],[R+.62,.02,D+.47]],.009,v)}N([[-3.25,.026,.8],[-2,.023,1.45],[-1.25,.022,1.78],[-.85,.022,1.47],[-.67,.022,2.5],[.45,.022,2.83],[1.25,.022,2.44]],.012,v),N([[2.8,.027,-2.9],[2.05,.025,-1.5],[1.64,.024,-.4],[1.8,.022,.1],[.98,.022,.6]],.008,M(6446139,.9));let ze=xe(2.55,-3.38,1.92);H([1.7,.72,.72],[0,.4,-.025],M(6713960,.94,m),ze);for(let _ of[-.42,.42]){let R=H([.77,.24,.045],[_,.66,.37],A,ze);_>0&&(R.position.z=.51,R.rotation.z=-.04),fe([_-.13,.66,.41],[_+.13,.66,.41],.014,C,ze)}let ke=new Se;ke.position.set(-.27,.87,-.04),ze.add(ke),oe([.49,.6,.37],[0,.3,0],C,ke),H([.4,.35,.025],[0,.26,.2],v,ke),oe([.34,.15,.06],[0,.5,.2],S,ke),H([.12,.05,.008],[-.07,.515,.236],M(2243883,.4),ke);for(let _ of[-.08,.08])fe([_,.38,.21],[_,.31,.26],.018,B,ke);H([.37,.04,.23],[0,.045,.22],v,ke);for(let _=0;_<7;_++)H([.017,.012,.19],[-.14+_*.047,.07,.22],B,ke);let it=ie(.12,.17,[0,.68,-.015],new Be({color:5069384,transparent:!0,opacity:.55,roughness:.45}),ke,24),nt=H([.27,.022,.25],[.025,.78,-.015],v,ke);nt.rotation.z=.13;let ot=M(12039066,.7,x);function St(_,R,D=0){let z=new Se;z.position.set(...R),z.rotation.z=D,_.add(z);let k=[[.052,0],[.055,.014],[.059,.12],[.054,.128],[.047,.12],[.047,.018]].map(ue=>new Ne(...ue));G(new Us(k,24,0,Math.PI*1.9),ot,z);let q=G(new $t(.036,.008,8,20,Math.PI*1.6),ot,z);return q.rotation.x=Math.PI/2,q.position.set(.066,.07,0),z}St(ke,[0,.07,.23]),St(ze,[.46,.87,.25],1.25),St(ze,[.64,.87,-.02]);let Wt=M(3877398,.33),en=G(new Ei(.18,32),Wt,ze);en.rotation.x=-Math.PI/2,en.position.set(.48,.862,.19),en.scale.y=.65,en.castShadow=!1,oe([.52,.83,.54],[3.28,.42,-2.4],S);let hn=H([.49,.78,.045],[3.21,.43,-2.1],S);hn.rotation.y=.24,H([.035,.23,.04],[3.04,.56,-2.065],C),H([.36,.8,.36],[3.39,.4,-1.72],S);let vn=ie(.16,.4,[3.39,1.04,-1.72],new Be({color:7378315,transparent:!0,opacity:.38,roughness:.34}),t,24);vn.rotation.z=.08;let dt=new Se;dt.name="Broken lopsided foosball table",dt.position.set(2.24,-.104,.03),dt.rotation.set(0,-.18,-.22),t.add(dt);let At=M(13812642,.87,m),Nn=M(8099956,.92,E);H([1.18,.25,1.91],[0,.91,0],At,dt),H([1.04,.025,1.74],[0,1.048,0],Nn,dt);for(let _ of[-.61,.61])H([.1,.18,2.02],[_,1.12,0],At,dt);H([1.14,.18,.08],[0,1.12,-.99],At,dt);let dn=new Et;dn.moveTo(-.57,1.03),dn.lineTo(.57,1.03),dn.lineTo(.57,1.21),dn.lineTo(.23,1.21),dn.lineTo(.12,1.07),dn.lineTo(.02,1.15),dn.lineTo(-.09,1.07),dn.lineTo(-.16,1.21),dn.lineTo(-.57,1.21),dn.closePath();let _n=G(new rn(dn,{depth:.08,bevelEnabled:!1}),At,dt);_n.position.z=.95;for(let _ of[-.99,.99])H([.3,.1,.012],[0,1.085,_+(_>0?-.045:.045)],v,dt);for(let _ of[-.47,.47])for(let R of[-.8,.8]){let D=_>0&&R>0,z=_>0;if(H([.11,D?.24:z?.57:.8,.12],[_,D?.68:z?.515:.4,R],C,dt),D)for(let k=0;k<4;k++)H([.012,.09,.018],[_-.04+k*.023,.555,R+c(-.04,.04)],A,dt).rotation.z=c(-.2,.2)}let ns=H([.11,.57,.12],[2.89,.09,.98],C);ns.rotation.set(.05,.37,1.42);let Cn=H([.45,.045,.08],[2.55,.045,1.32],At);Cn.rotation.y=.4;let L=[];function te(_,R){L.push(..._,...R)}for(let _ of[-.8,.8])te([-.48,1.065,_],[.48,1.065,_]);for(let _ of[-.48,.48])te([_,1.065,-.8],[_,1.065,.8]);te([-.48,1.065,0],[.48,1.065,0]);for(let _=0;_<48;_++){let R=_/48*Math.PI*2,D=(_+1)/48*Math.PI*2;te([Math.cos(R)*.19,1.065,Math.sin(R)*.19],[Math.cos(D)*.19,1.065,Math.sin(D)*.19])}let le=new Ct;le.setAttribute("position",new ct(L,3)),dt.add(new to(le,new cr({color:9674366})));let pe=[M(9124144,.8),M(10658186,.8)];for(let _=0;_<8;_++){let R=-.78+_*.223,D=_%2?1:-1;_===5?N([[-.91,1.21,R],[-.24,1.21,R],[.18,1.36,R+.13],[.91,1.17,R+.08]],.012,B,dt):fe([-.91,1.21,R],[.91,1.21,R],.012,B,dt),_!==4&&fe([D*.8,1.21,R],[D*1.02,1.21,R],.034,v,dt);let z=_===0||_===7?1:_===1||_===6?2:3;for(let k=0;k<z;k++){if(_===3&&k===0||_===6&&k===1)continue;let q=(k-(z-1)/2)*.29;H([.055,.1,.037],[q,1.195,R],pe[_%2],dt),ye([.031,.035,.031],[q,1.28,R],pe[_%2],dt),H([.06,.045,.045],[q,1.11,R],pe[_%2],dt)}}ye([.024,.024,.024],[.46,1.09,.69],S,dt),N([[-.46,1.068,.29],[-.2,1.068,.21],[-.08,1.068,.3],[.12,1.068,.23],[.48,1.068,.37]],.007,v,dt);let se=H([.055,.13,.04],[.38,1.09,.51],pe[0],dt);se.rotation.z=Math.PI/2;for(let _ of[-1.07,1.07]){fe([-.32,1.27,_],[.32,1.27,_],.008,B,dt);for(let R=0;R<5;R++)ye([.025,.03,.025],[-.25+R*.07,1.27,_],pe[_>0?1:0],dt)}let Le=new Se;Le.name="MacBook Pro on the floor",Le.position.set(.45,.027,2.18),Le.rotation.y=Math.atan2(e.x-Le.position.x,e.z-Le.position.z),t.add(Le);let Xe=Le.position.clone().add(new w(1.18,0,0).applyAxisAngle(new w(0,1,0),Le.rotation.y)),Qe=R0(e,Xe);t.add(Qe.group);let et=A0(Xe);t.add(et.group),r(et.group);let rt=M(8884628,.35,null,.72),at=M(1053975,.7);function Ke(_,R,D,z,k,q,ue=!1){let Ge=Math.min(.012,_/6,R/6,D/6),tt=G(ee(_-2*Ge,R-2*Ge,D,.026-Ge),k,q);return tt.position.set(...z),ue&&(tt.rotation.x=-Math.PI/2),tt}Ke(.88,.59,.026,[0,0,0],rt,Le,!0),Ke(.66,.275,.003,[0,.0145,-.065],at,Le,!0);let Tt=ie(.013,.77,[0,.02,-.281],v,Le,20);Tt.rotation.z=Math.PI/2;let yt=new Se;yt.position.set(0,.034,-.295),yt.rotation.x=Math.PI/2,Le.add(yt),Ke(.88,.59,.018,[0,.295,0],rt,yt),Ke(.856,.566,.005,[0,.295,.01],at,yt);for(let _ of[-.34,.34])for(let R of[-.21,.21])ye([.025,.006,.025],[_,-.014,R],b,Le);let Ot=document.createElement("canvas");Ot.width=256,Ot.height=384;let Pn=Ot.getContext("2d");vd(Pn,28,42,200);let Ut=h(Ot),st=new Be({map:Ut,transparent:!0,alphaTest:.1,roughness:.64,metalness:.03,emissiveMap:Ut,emissive:16777215,emissiveIntensity:.14}),zt=G(new Mt(.115,.1725),st,yt);zt.name="Off-center Figma vinyl sticker",zt.position.set(.265,.365,-.0108),zt.rotation.set(0,Math.PI,-.14),zt.castShadow=!1;let[He,Ze]=l(1024);He.height=640,Ze.fillStyle="#111b22",Ze.fillRect(0,0,1024,640),Ze.fillStyle="#222e36",Ze.fillRect(0,0,1024,38),Ze.fillRect(0,38,140,602),Ze.fillRect(894,38,130,602),vd(Ze,15,6,17),Ze.font="13px sans-serif",Ze.fillStyle="#bac6ca",Ze.fillText("Figma / Wireframes",44,25);for(let _=0;_<7;_++)Ze.fillStyle=_===2?"#48616b":"#657a80",Ze.fillRect(18,85+_*34,85-_%3*18,3);for(let _=0;_<3;_++){let R=181+_*231;Ze.fillStyle="#b2bfbb",Ze.fillRect(R,118,197,390),Ze.fillStyle="#465b62",Ze.fillRect(R+12,137,173,19),Ze.fillRect(R+12,175,173,86),Ze.strokeStyle="#53696d",Ze.lineWidth=2,Ze.beginPath(),Ze.moveTo(R+12,175),Ze.lineTo(R+185,261),Ze.moveTo(R+185,175),Ze.lineTo(R+12,261),Ze.stroke();for(let D=0;D<5;D++)Ze.fillStyle="#82918f",Ze.fillRect(R+13,278+D*20,c(75,170),4);Ze.fillStyle="#526c72",Ze.fillRect(R+14,401,169,28),Ze.strokeStyle="#788c8d",Ze.strokeRect(R+14,447,78,39),Ze.strokeRect(R+105,447,78,39)}for(let _=0;_<12;_++)Ze.fillStyle="#50666e",Ze.fillRect(912,84+_*31,c(35,90),3);let Mn=h(He),tn=new gt({map:Mn,color:8360598}),jn=G(new Mt(.823,.525),tn,yt);jn.position.set(0,.3,.013),jn.castShadow=!1,H([.076,.014,.002],[0,.556,.014],at,yt),ye([.003,.003,.001],[0,.553,.0155],M(1978424,.2),yt);let[on,ri]=l(512);on.height=64,ri.font="22px sans-serif",ri.textAlign="center",ri.fillStyle="#9ca5a6",ri.fillText("MacBook Pro",256,40);let vr=G(new Mt(.14,.018),new gt({map:h(on),transparent:!0}),yt);vr.position.set(0,.025,.013),vr.castShadow=!1;let[ei,oi]=l(1024);oi.fillStyle="#151b1e",oi.fillRect(0,0,1024,1024),oi.strokeStyle="#3e494d",oi.fillStyle="#9ca5a6",oi.font="25px sans-serif",oi.textAlign="center";let Pl=["1234567890-=","QWERTYUIOP[]","ASDFGHJKL;\u2019","ZXCVBNM,./"];for(let _=0;_<4;_++)for(let R=0;R<12;R++){let D=18+R*83,z=74+_*181;oi.strokeRect(D,z,72,145),oi.fillText(Pl[_][R]||"",D+36,z+86)}oi.strokeRect(250,825,524,125);let bo=G(new Mt(.635,.257),new Be({map:h(ei),roughness:.7}),Le);bo.rotation.x=-Math.PI/2,bo.position.set(0,.0165,-.065);let lE=Ke(.34,.17,.001,[0,.0135,.174],M(6714488,.44,null,.62),Le,!0),$d=new xn(new Ei(.0012,5),v,480);for(let _=0;_<480;_++){let R=new Nt,D=_<240?-1:1,z=_%240;R.position.set(D*(.355+z%8*.006),.017,-.196+Math.floor(z/8)*.0085),R.rotation.x=-Math.PI/2,R.updateMatrix(),$d.setMatrixAt(_,R.matrix)}Le.add($d);for(let _ of[-1,1])for(let R=0;R<3;R++)H([.003,.006,.035],[_*.444,.001,-.18+R*.065],at,Le);let Il=new On(9285310,0,1.4,2);Il.position.set(0,.29,.14),yt.add(Il);let ig=tn.color.clone();tn.color.setScalar(0);let _r=!1,Xi=0,Ta=!1;function Ll(_){yt.rotation.x=Je.lerp(Math.PI/2,-.2,_);let R=Je.smoothstep(_,.22,.72);tn.color.copy(ig).multiplyScalar(R),Il.intensity=.6*R}let Kd={object:Le,screen:jn,get isReady(){return Xi===1},get isOpen(){return _r},get openProgress(){return Xi},getLidGrip(_){return yt.updateWorldMatrix(!0,!1),yt.localToWorld(_.set(.12,.6,-.004))},setOpenProgress(_){Ta=!0,Xi=Je.clamp(_,0,1),_r=Xi>0,Ll(Xi)},open(){return _r?!1:(Ta=!1,_r=!0,!0)},close(){Ta=!1,_r=!1,Xi=0,Ll(0)},update(_,R=!1){Ta||!_r||Xi===1||(Xi=R?1:Math.min(1,Xi+_/.95),Ll(Je.smootherstep(Xi,0,1)))}};function sg(){let[_,R]=l();R.fillStyle="#b2af94",R.fillRect(0,0,512,512),R.fillStyle="#4f584c";for(let D=0;D<35;D++){let z=35+D*12;R.fillRect(30,z,c(100,430),c(1,3))}return R.strokeStyle="rgba(64,54,28,.4)",R.lineWidth=4,R.beginPath(),R.arc(345,130,61,0,Math.PI*2),R.stroke(),f(R,512,8e3,"49,45,27",.16),h(_)}let rg=M(16777215,.99,sg()),og=M(2836532,.88),ag=[S,C,A,M(8619381,.97)],Dl=[],Ul=[];for(let _=0;_<82;_++){let R=c(-3.62,3.58),D=c(-3.75,4);Math.abs(R)<.65&&D<.8&&D>-.9&&(R-=1.2);let z=G(new Mt(c(.13,.29),c(.17,.37),4,4),rg),k=c(-.1,.1),q=c(-.07,.07),ue=a()*Math.PI*2,Ge=c(.012,.038);z.rotation.set(-Math.PI/2,0,ue),z.position.set(R,.005,D),z.material.side=It,z.name="Paper resting on the floor";let tt=z.geometry.attributes.position;for(let Pt=0;Pt<tt.count;Pt++)tt.setZ(Pt,Math.abs(Math.sin(tt.getX(Pt)*33+k)*Math.sin(tt.getY(Pt)*24+q))*.0015+Ge*.008);Dl.push(z)}for(let _=0;_<95;_++){let R=c(-3.65,3.65),D=c(-3.7,4);Math.abs(R)<.8&&D>-.8&&D<1.3&&(R-=1.7);let z=H([c(.025,.17),c(.015,.065),c(.035,.2)],[R,c(.025,.055),D],ag[_%4]);z.rotation.set(c(-.13,.13),a()*Math.PI*2,c(-.13,.13)),z.name="Fallen casing fragment",r(z)}for(let _=0;_<9;_++){let R=new Se;R.position.set(c(-3,3),.028,c(-2,3)),R.rotation.y=a()*6,t.add(R),R.name="Loose circuit board",r(R),H([.18,.012,.24],[0,0,0],og,R);for(let D=0;D<4;D++)H([.035,.017,.05],[-.055+D%2*.1,.013,-.07+Math.floor(D/2)*.12],v,R)}for(let _=0;_<12;_++){let R=H([.09,.018,.09],[c(-3.5,3.5),.03,c(-3.4,3.7)],v);R.rotation.y=a()*6,H([.06,.003,.03],[0,.011,0],S,R),R.name="Broken key cap",r(R)}for(let _=0;_<14;_++){let R=H([c(.3,.7),.012,c(.3,.8)],[c(-3.4,3.4),.007,c(-3.5,3.7)],M(_%2?8948860:10197637,.98,E));R.rotation.y=c(-.15,.15),Ul.push(R)}let Vn=S0(Ul);function Jd(_,R,D){_.save(),_.lineCap="round";for(let[k,q,ue,Ge]of D){for(let tt=0;tt<13;tt++){let Pt=q+tt*Ge/12;_.strokeStyle=R,_.globalAlpha=c(.65,.94),_.lineWidth=c(12,27),_.beginPath(),_.moveTo(k+c(-18,35),Pt),_.quadraticCurveTo(k+ue*.45,Pt+c(-12,12),k+ue+c(-35,18),Pt+c(-8,8)),_.stroke()}_.globalAlpha=1;for(let tt=0;tt<8;tt++)p(_,k+a()*ue,q+a()*Ge,c(13,43),"54,66,61",c(.035,.09))}_.globalAlpha=1;for(let k=0;k<95;k++){let q=a()*1024,ue=a()<.55?c(800,1045):a()*1024;p(_,q,ue,c(14,95),k%3?"44,49,38":"103,77,42",c(.045,.16))}let z=_.createLinearGradient(0,0,0,1024);z.addColorStop(0,"rgba(43,44,32,.30)"),z.addColorStop(.13,"rgba(43,44,32,0)"),z.addColorStop(.77,"rgba(43,44,32,0)"),z.addColorStop(1,"rgba(44,40,27,.38)"),_.fillStyle=z,_.fillRect(0,0,1024,1024);for(let k=0;k<23;k++){let q=a()*1024,ue=c(8,105);_.strokeStyle=`rgba(86,67,38,${c(.06,.17)})`,_.lineWidth=c(1.5,6),_.beginPath(),_.moveTo(q,ue),_.bezierCurveTo(q+4,ue+60,q-3,ue+125,q+c(-5,5),ue+c(130,460)),_.stroke()}f(_,1024,12e3,"36,42,30",.21),_.restore()}function Hl(_){let[R,D]=l(1024);D.fillStyle="#bfc4b6",D.fillRect(0,0,1024,1024),D.strokeStyle="#304a4d",D.fillStyle="#304a4d",D.lineWidth=4,D.font="28px sans-serif",D.fillText(_?"ONBOARDING / FIRST RUN":"WORKSPACE / DASHBOARD",45,67);function z(k,q){D.beginPath(),D.moveTo(k,q),D.lineTo(k+50,q),D.lineTo(k+37,q-11),D.moveTo(k+50,q),D.lineTo(k+37,q+11),D.stroke()}if(_)for(let k=0;k<3;k++){let q=48+k*330;D.strokeRect(q,154,253,593),D.strokeRect(q+14,174,225,544),D.fillRect(q+80,187,91,5),D.strokeRect(q+32,225,189,130),D.beginPath(),D.moveTo(q+32,225),D.lineTo(q+221,355),D.moveTo(q+221,225),D.lineTo(q+32,355),D.stroke();for(let ue=0;ue<4;ue++)D.fillRect(q+31,397+ue*25,170-ue%2*41,4);D.strokeRect(q+32,524,188,54),D.strokeRect(q+32,602,188,54),k<2&&z(q+266,451),D.font="23px sans-serif",D.fillText(["01 / welcome","02 / connect","03 / explore"][k],q+23,803)}else for(let k=0;k<2;k++){let q=45+k*498;D.strokeRect(q,165,436,525),D.strokeRect(q,165,436,44),D.strokeRect(q+14,223,87,448);for(let ue=0;ue<5;ue++)D.fillRect(q+25,246+ue*40,59-ue%2*17,4);D.strokeRect(q+118,230,297,133),D.beginPath(),D.moveTo(q+135,343),D.lineTo(q+171,300),D.lineTo(q+212,325),D.lineTo(q+270,265),D.lineTo(q+328,293),D.lineTo(q+397,248),D.stroke();for(let ue=0;ue<2;ue++)for(let Ge=0;Ge<2;Ge++){D.strokeRect(q+118+Ge*154,385+ue*145,139,124),D.fillRect(q+131+Ge*154,404+ue*145,92,5);for(let tt=0;tt<3;tt++)D.fillRect(q+131+Ge*154,431+ue*145+tt*18,103-tt*13,3)}}return D.strokeStyle="#7d453b",D.lineWidth=3,D.beginPath(),D.ellipse(510,905,357,48,-.02,0,Math.PI*2),D.stroke(),D.font="25px sans-serif",D.fillStyle="#7d453b",D.fillText(_?"simplify the first step / test again":"less noise \u2014 keep the primary action visible",180,915),Jd(D,"#bfc4b6",_?[[345,225,290,290],[65,570,220,170],[660,765,280,130]]:[[570,215,350,235],[145,500,280,200],[220,855,430,95]]),h(R)}for(let _=0;_<2;_++){let R=new Se;R.name="Whiteboard with interface wireframes",R.position.set(_?2.25:.12,2.2,-3.94),R.rotation.z=_?-.025:.012,t.add(R),H([1.78,1.12,.04],[0,0,0],B,R);let D=Hl(!_),z=G(new Mt(1.7,1.04),new Be({map:D,roughness:.75,emissive:16777215,emissiveMap:D,emissiveIntensity:.025}),R);z.position.z=.024,H([1.7,.023,.09],[0,-.57,.025],B,R);for(let k=0;k<3;k++)fe([-.58+k*.18,-.546,.057],[-.46+k*.18,-.546,.057],.013,k?v:M(3755626,.7),R)}let Yn=new Se;Yn.name="Planning whiteboard covered in sticky notes",Yn.position.set(1.9,0,-3),Yn.rotation.y=0,t.add(Yn);for(let _ of[-1.12,1.12]){H([.045,.98,.055],[_,.49,0],C,Yn),H([.11,.06,.65],[_,.06,0],C,Yn);for(let R of[-.25,.25])ye([.047,.045,.032],[_,.035,R],v,Yn)}H([2.68,1.94,.05],[0,1.85,0],B,Yn);let Qd=new Set([1,4,7,9,13,17,20,22,24]),[cg,Bt]=l(1024);Bt.fillStyle="#c2c7ba",Bt.fillRect(0,0,1024,1024);for(let _=0;_<65;_++)p(Bt,a()*1024,a()*1024,c(15,110),"60,69,55",.065);Bt.strokeStyle="rgba(38,62,63,.65)",Bt.fillStyle="rgba(38,62,63,.65)",Bt.lineWidth=3;for(let _=0;_<3;_++){let R=170+_*245;Bt.strokeRect(R,560,190,335),Bt.strokeRect(R+12,579,166,28),Bt.strokeRect(R+12,625,166,102),Bt.beginPath(),Bt.moveTo(R+12,625),Bt.lineTo(R+178,727),Bt.moveTo(R+178,625),Bt.lineTo(R+12,727),Bt.stroke();for(let D=0;D<4;D++)Bt.fillRect(R+15,753+D*19,137-D%2*39,3);Bt.strokeRect(R+15,843,160,28),_<2&&(Bt.beginPath(),Bt.moveTo(R+198,727),Bt.lineTo(R+235,727),Bt.lineTo(R+222,717),Bt.moveTo(R+235,727),Bt.lineTo(R+222,737),Bt.stroke())}Jd(Bt,"#c2c7ba",[[130,620,285,170],[407,735,280,165],[685,530,190,150]]);for(let _ of Qd){let R=(-1.1+_%9*.273)/2.6*1024+512,D=(.5-(2.63-Math.floor(_/9)*.28-1.85)/1.86)*1024;Bt.fillStyle="rgba(203,203,175,.20)",Bt.fillRect(R-40,D-59,80,118),Bt.fillStyle="rgba(111,96,51,.17)",Bt.fillRect(R-34,D-56,68,8);for(let z=0;z<9;z++)Bt.fillStyle="rgba(77,67,39,.15)",Bt.fillRect(R+c(-33,33),D-53+c(-2,6),c(1,3),c(2,5))}let jd=h(cg);G(new Mt(2.6,1.86),new Be({map:jd,roughness:.75,emissive:16777215,emissiveMap:jd,emissiveIntensity:.025}),Yn).position.set(0,1.85,.027),H([2.58,.025,.13],[0,.87,.045],B,Yn);for(let _=0;_<3;_++)fe([-.63+_*.23,.899,.09],[-.48+_*.23,.899,.09],.017,_===0?M(3428197,.75):v,Yn);H([.18,.045,.07],[.62,.906,.075],v,Yn);let lg=["#c3b25e","#b38488","#7faaa9","#a4b081"];function Ra(_,R,D,z,k){let[q,ue]=l(128);ue.fillStyle=lg[k%4],ue.fillRect(0,0,128,128),ue.fillStyle="rgba(42,49,37,.16)",ue.fillRect(0,0,128,14),ue.strokeStyle="rgba(39,52,47,.68)",ue.lineWidth=2.6;for(let Vt=0;Vt<3+k%3;Vt++){ue.beginPath();let ci=30+Vt*16;ue.moveTo(16,ci);for(let Di=1;Di<8;Di++)ue.lineTo(16+Di*c(8,12),ci+c(-2.4,2.4));ue.stroke()}k%4===0&&(ue.strokeRect(19,75,35,27),ue.strokeRect(72,75,35,27));let Ge=new Mt(.205,.215,3,5),tt=Ge.attributes.position;for(let Vt=0;Vt<tt.count;Vt++){let ci=tt.getY(Vt);tt.setZ(Vt,Math.max(0,-ci-.015)**2*3.3)}Ge.computeVertexNormals();let Pt=h(q),nn=G(Ge,new Be({map:Pt,roughness:.96,side:It,emissive:16777215,emissiveMap:Pt,emissiveIntensity:.025}),_);return nn.position.set(R,D,z),nn.rotation.z=c(-.13,.13),nn}for(let _=0;_<3;_++)for(let R=0;R<9;R++)Qd.has(_*9+R)||Ra(Yn,-1.1+R*.273+c(-.018,.018),2.63-_*.28+c(-.014,.014),.04,_*9+R);for(let _=0;_<5;_++)_===1||_===4||Ra(Yn,_<3?-1.1:1.09,1.75-_%3*.29,.04,28+_);for(let _=0;_<4;_++){let R=Ra(t,-1.7-_*.3,.005,-.38+_*.26,33+_);R.rotation.set(-Math.PI/2,0,.6+_*.73);let D=R.geometry.attributes.position;for(let z=0;z<D.count;z++)D.setZ(z,D.getZ(z)*.1);Dl.push(R)}let Aa=b0();t.add(Aa.group);let Nl=al({flies:14,moths:7,spread:[.88,.23,.5],sizeScale:.55,dive:.65});Nl.group.position.y=-.4,Aa.group.add(Nl.group);for(let _ of[-.66,.66])fe([_,3.3,-.55],[_,2.98,-.55],.006,v);N([[.85,3.3,-.6],[1.03,2.8,-.65],[1.26,2.86,-.7],[1.3,3.3,-.7]],.007,v);let qs=new Se;qs.position.set(-2.1,.88,-3.2),be.parent.add(qs),ie(.11,.035,[0,0,0],v,qs),fe([0,0,0],[.05,.31,0],.016,C,qs),fe([.05,.31,0],[.22,.4,.02],.013,C,qs),G(new Hs(.12,.13,20,1,!0),C,qs).position.set(.23,.37,.02),ye([.04,.025,.04],[.23,.32,.02],new gt({color:15122820}),qs);let ef=new On(15121790,1.2,2.5,2);ef.position.set(-1.87,1.19,-3.18),t.add(ef);let Fl=al({flies:5,moths:3,spread:[.28,.1,.22],seed:113,sizeScale:.55,dive:.1});Fl.group.position.set(-1.87,1.14,-3.02),t.add(Fl.group);let tf=new kt({color:14102035,roughness:.31,clearcoat:1,clearcoatRoughness:.18}),nf=new kt({color:15790556,roughness:.13,transparent:!0,opacity:.16,depthWrite:!1,clearcoat:1,clearcoatRoughness:.08}),Ol=M(14081488,.49),Ca=M(9016713,.69),hg=new io;function zl(_){let R=hg.load(new URL(`./labels/${_}.svg`,import.meta.url).href);return R.colorSpace=ft,R.anisotropy=Math.min(8,i.capabilities.getMaxAnisotropy()),new Be({map:R,transparent:!0,alphaTest:.15,roughness:.72,side:It})}let ug=zl("ketchup-glass"),dg=zl("ketchup-squeeze"),fg=zl("ketchup-neck");for(let _=0;_<8140;_++)a();function pg(_,R){for(let D=1;D<_.length;D++)if(_[D][1]>=R){let[z,k]=_[D-1],[q,ue]=_[D];return Je.lerp(z,q,(R-k)/(ue-k||1))}return _.at(-1)[0]}function Bl(_,R,D,z,k,q=1,ue=1.02){let Ge=new Mt(1,1,24,16),tt=Ge.attributes.position,Pt=Ge.attributes.uv;for(let Vt=0;Vt<tt.count;Vt++){let ci=(Pt.getX(Vt)*2-1)*ue,Di=Je.lerp(D,z,Pt.getY(Vt)),Io=pg(R,Di)+.0018;tt.setXYZ(Vt,Math.sin(ci)*Io,Di,Math.cos(ci)*Io*q+8e-4)}Ge.computeVertexNormals();let nn=G(Ge,k,_);return nn.castShadow=!1,nn}function kl(_,R,D,z=1){let k=G(new Us(_.map(q=>new Ne(...q)),48),R,D);return k.scale.z=z,k}function sf(_,R,D,z,k,q){let ue=new Se;return ue.name=_.name,ue.add(_),_.position.y=-k,t.add(ue),ue.position.set(R,0,D),ue.rotation.set(...z),ue.scale.setScalar(q),ue.updateMatrixWorld(!0),fr(ue,Vn)}let is=new Se;is.name="Discarded glass ketchup bottle";let Pa=[[0,0],[.063,0],[.076,.014],[.08,.047],[.079,.19],[.069,.267],[.049,.342],[.03,.41],[.029,.447],[.033,.454],[.032,.471],[0,.471]],rf=Pa.filter(_=>_[1]<.44).map(([_,R])=>[Math.max(0,_-.0035),R+.004]);rf.push([.026,.443],[0,.443]);let mg=kl(rf,tf,is),gg=kl(Pa,nf,is);gg.castShadow=!1,Bl(is,Pa,.047,.24,ug),Bl(is,Pa,.365,.432,fg,1,.95);let To=new Se;To.position.y=.48,is.add(To),ie(.037,.036,[0,0,0],Ol,To,32),ie(.0365,.006,[0,.461,0],Ca,is,32);for(let _=0;_<30;_++){let R=_/30*Math.PI*2;fe([Math.cos(R)*.037,-.013,Math.sin(R)*.037],[Math.cos(R)*.037,.014,Math.sin(R)*.037],.0011,Ca,To)}let of=G(new $t(.07,.003,6,32),nf,is);of.rotation.x=Math.PI/2,of.position.y=.016;let xg=sf(is,-.28,2.92,[-.25,.45,Math.PI/2],.25,.82),ys=new Se;ys.name="Discarded squeeze ketchup bottle";let af=[[0,.058],[.055,.058],[.065,.075],[.098,.105],[.115,.15],[.109,.25],[.118,.36],[.112,.415],[.092,.438],[0,.438]];kl(af,tf,ys,.62),Bl(ys,af,.122,.403,dg,.62,1.04);let yg=ie(.069,.06,[0,.034,0],Ol,ys,40);yg.scale.z=.73;let vg=ie(.0694,.003,[0,.014,0],Ca,ys,40);vg.scale.z=.73,oe([.042,.012,.01],[0,.014,.051],Ol,ys),H([.031,.018,.008],[0,.04,-.05],Ca,ys),sf(ys,1.95,2.45,[-Math.PI/2,0,-.45],.225,.8);let[cf,Rt]=l(1024);cf.height=512,Rt.fillStyle="#86b0b2",Rt.fillRect(0,0,1024,512);for(let _=0;_<180;_++)p(Rt,a()*1024,a()*512,c(5,55),_%2?"225,229,207":"83,125,129",c(.035,.14));Rt.lineCap="round";for(let _=0;_<260;_++){let R=a()*1024,D=a()*512;Rt.strokeStyle=`rgba(44,57,53,${c(.3,.65)})`,Rt.lineWidth=c(2,4),Rt.beginPath(),Rt.moveTo(R,D),Rt.quadraticCurveTo(R-3,D+7,R+c(-2,3),D+c(7,15)),Rt.stroke()}Rt.fillStyle="#eee2c3",Rt.beginPath(),Rt.moveTo(512,176),Rt.bezierCurveTo(459,117,386,112,350,169),Rt.bezierCurveTo(313,243,337,421,410,466),Rt.bezierCurveTo(460,493,565,493,615,466),Rt.bezierCurveTo(687,421,711,243,675,169),Rt.bezierCurveTo(639,112,565,117,512,176),Rt.fill();for(let _ of[433,591])p(Rt,_,271,29,"197,123,110",.2),Rt.fillStyle="#3d3630",Rt.beginPath(),Rt.ellipse(_,215,7,4,-.2,0,Math.PI*2),Rt.fill();Rt.strokeStyle="#52443a",Rt.lineWidth=3,Rt.beginPath(),Rt.moveTo(512,274),Rt.lineTo(512,316),Rt.bezierCurveTo(501,335,482,337,472,326),Rt.moveTo(512,316),Rt.bezierCurveTo(523,335,542,337,552,326),Rt.stroke();for(let _ of[-1,1])for(let R=0;R<3;R++)Rt.fillStyle="#6e5b46",Rt.beginPath(),Rt.arc(512+_*(25+R*9),300+R%2*12,1.8,0,Math.PI*2),Rt.fill();f(Rt,512,2300,"112,124,109",.07);let _g=new kt({map:h(cf),roughness:.29,clearcoat:1,clearcoatRoughness:.16}),lf=new kt({color:9091001,roughness:.25,clearcoat:1,clearcoatRoughness:.14}),[hf,ai]=l(1024);hf.height=512,ai.fillStyle="#e8dcba",ai.fillRect(0,0,1024,512);for(let _=0;_<18;_++){let R=_*1024/18;ai.fillStyle=_%2?"#93b8ae":"#7ca6a5",ai.beginPath(),ai.moveTo(R-12,0),ai.bezierCurveTo(R-20,170,R+4,310,R-12,512),ai.lineTo(R+12,512),ai.bezierCurveTo(R+26,310,R+8,170,R+17,0),ai.closePath(),ai.fill()}let Ia=ai.createLinearGradient(0,220,0,512);Ia.addColorStop(0,"rgba(103,62,27,0)"),Ia.addColorStop(.7,"rgba(103,62,27,.09)"),Ia.addColorStop(1,"rgba(74,39,14,.48)"),ai.fillStyle=Ia,ai.fillRect(0,0,1024,512);let uf=new kt({map:h(hf),roughness:.34,clearcoat:.8,side:It}),qi=new Se;qi.name="Blue pointy-eared mug tipped on its side";function df(_,R){let D=new Us(_.map(q=>new Ne(...q)),64),z=D.attributes.uv,k=D.attributes.position;for(let q=0;q<k.count;q++)z.setY(q,k.getY(q)/.258);return D.rotateY(Math.PI),G(D,R,qi)}df([[0,.008],[.085,.008],[.113,.018],[.126,.043],[.139,.138],[.144,.236],[.14,.257]],_g),df([[.127,.257],[.128,.237],[.121,.09],[.106,.034],[0,.034]],uf);let ff=G(new $t(.134,.008,10,64),lf,qi);ff.rotation.x=Math.PI/2,ff.position.y=.254;let pf=G(new $t(.102,.004,8,48),uf,qi);pf.rotation.x=Math.PI/2,pf.position.y=.012;for(let _ of[-1,1]){let R=new Se;R.position.set(_*.095,.235,.103),R.rotation.set(-.06,_*Math.atan2(.095,.103),-_*.1),qi.add(R);let D=new Et;D.moveTo(-.047,0),D.bezierCurveTo(-.044,.046,-.015,.112,0,.142),D.bezierCurveTo(.018,.125,.046,.045,.047,0),D.closePath();let z=new rn(D,{depth:.013,bevelEnabled:!0,bevelSegments:3,steps:1,bevelSize:.005,bevelThickness:.005,curveSegments:12});z.translate(0,0,-.0065),G(z,lf,R),N([[-.028,.018,.014],[-.025,.057,.014],[0,.113,.014],[.027,.036,.014]],.0019,M(5005659,.62),R)}let[Mg,La]=l(256);La.fillStyle="#e8dfc6",La.fillRect(0,0,256,256),La.fillStyle="#84adb0";for(let _ of[0,95,200])La.fillRect(_,0,47,256);let Eg=new kt({map:h(Mg),roughness:.28,clearcoat:1});N([[.129,.211,0],[.195,.222,0],[.249,.188,0],[.257,.13,0],[.229,.075,0],[.178,.057,0],[.125,.076,0]],.014,Eg,qi);let Ro=new Et;Ro.moveTo(-.021,.01),Ro.quadraticCurveTo(0,.021,.021,.01),Ro.quadraticCurveTo(.021,-.003,0,-.019),Ro.quadraticCurveTo(-.022,-.004,-.021,.01),G(new rn(Ro,{depth:.012,bevelEnabled:!0,bevelSize:.003,bevelThickness:.003,bevelSegments:2,curveSegments:8}),new kt({color:2697251,roughness:.3,clearcoat:1}),qi).position.set(0,.129,.142);let Yi=new Se;Yi.name="Spilled animal mug in the left foreground",Yi.add(qi),qi.position.y=-.135,t.add(Yi);let Mr=new w(-.55,-.05,.83).normalize(),Er=new w(.54,.66,.39);Er.addScaledVector(Mr,-Er.dot(Mr)).normalize();let Vl=new w().crossVectors(Mr,Er).normalize();Yi.quaternion.setFromRotationMatrix(new wt().makeBasis(Vl,Mr,Er)),Yi.scale.setScalar(.72),Yi.position.set(.24,0,3.02),Yi.updateMatrixWorld(!0),fr(Yi,Vn),Yi.updateMatrixWorld(!0);let mf=Math.hypot(Vl.y,Er.y),Da=qi.localToWorld(new w(-.134*Vl.y/mf,.254,-.134*Er.y/mf)),Ao=new w(Mr.x,0,Mr.z).normalize(),Sr=Da.clone().addScaledVector(Ao,.23);Sr.y=Vn(Sr.x,Sr.z)+.001;let gf=new kt({color:5324843,roughness:.13,metalness:.04,clearcoat:1,clearcoatRoughness:.08,transparent:!0,opacity:.94,side:It}),Sg=new Be({color:9072713,roughness:.4,transparent:!0,opacity:.68,depthWrite:!1,side:It});function xf(_,R,D,z,k=0){let q=new Et;for(let Pt=0;Pt<=80;Pt++){let nn=Pt/80*Math.PI*2,Vt=1+.11*Math.sin(nn*3+k)+.065*Math.sin(nn*7-.3)+.025*Math.cos(nn*13),ci=Math.cos(nn)*D*Vt,Di=Math.sin(nn)*z*Vt;Pt?q.lineTo(ci,Di):q.moveTo(ci,Di)}q.closePath();let ue=new Oi(q,32),Ge=G(ue,Sg);Ge.rotation.x=-Math.PI/2,Ge.scale.setScalar(1.045),Ge.position.set(_,Vn(_,R)+5e-4,R),Ge.castShadow=!1;let tt=G(ue,gf);return tt.rotation.x=-Math.PI/2,tt.position.set(_,Vn(_,R)+.001,R),tt.castShadow=!1,tt}xf(Sr.x,Sr.z,.23,.145,.4);let Co=Da.clone();Co.y=Vn(Co.x,Co.z)+.008,N([Da.toArray(),Co.toArray(),Co.clone().addScaledVector(Ao,.09).toArray(),Sr.toArray()],.008,gf);for(let[_,R,D]of[[.45,.1,.018],[.51,-.07,.012],[.37,-.18,.022],[.29,.21,.009]]){let z=Da.clone().addScaledVector(Ao,_).add(new w(-Ao.z*R,0,Ao.x*R));xf(z.x,z.z,D,D*.65,_*3)}t.updateMatrixWorld(!0);for(let _ of Dl){let R=_.geometry.attributes.position;for(let D=0;D<R.count;D++){let z=_.localToWorld(new w(R.getX(D),R.getY(D),0)),k=.003;for(let q of Ul){let ue=q.worldToLocal(z.clone()),Ge=q.geometry.parameters;Math.abs(ue.x)<Ge.width/2&&Math.abs(ue.z)<Ge.depth/2&&(k=Math.max(k,.013))}R.setZ(D,R.getZ(D)+k+.002-_.position.y)}R.needsUpdate=!0,_.geometry.computeVertexNormals(),_.geometry.computeBoundingSphere()}for(let[_,R,D,z,k]of[[-2.53,2.13,1.52,1.08,!0],[-.62,2.13,1.78,1.1,!1]]){let q=new Se;q.name="Left-wall design whiteboard",q.position.set(-3.86,R,_),q.rotation.y=Math.PI/2,t.add(q),H([D,z,.045],[0,0,0],B,q);let ue=Hl(k),Ge=G(new Mt(D-.07,z-.07),new Be({map:ue,roughness:.85,emissive:16777215,emissiveMap:ue,emissiveIntensity:.025}),q);Ge.position.z=.026,H([D-.07,.025,.1],[0,-z/2,.035],B,q),fe([-.4,-z/2+.025,.06],[-.23,-z/2+.025,.06],.011,v,q),H([.13,.035,.065],[D*.29,-z/2+.029,.045],Y,q),Ra(q,D*.35,z*.21,.034,k?6:9)}let xi=new Se;xi.name="Worn bookshelf of design books",xi.position.set(-3.65,0,1.65),xi.rotation.y=Math.PI/2,t.add(xi);let Ua=M(11643027,.92,m),wg=M(10920589,.98);H([1.56,2.38,.035],[0,1.19,-.185],Ua,xi);for(let _ of[-.765,.765])H([.045,2.42,.42],[_,1.21,.015],Ua,xi);for(let _ of[.12,.66,1.2,1.74,2.28])H([1.5,.035,.42],[0,_,.015],Ua,xi);H([1.51,.1,.045],[0,.05,.19],Ua,xi);let Ha=[["The Design of Everyday Things","#b5ad86"],["Don't Make Me Think","#bd8b36"],["Thinking with Type","#9f392f"],["Grid Systems","#adaf9a"],["Designing Interfaces","#54796f"],["About Face","#393e3e"],["The Elements of User Experience","#758b9d"],["Sprint","#b3a847"],["Universal Principles of Design","#b8b5a4"],["Designing for Interaction","#80665b"],["Sketching User Experiences","#456976"],["The Shape of Design","#bcb296"]],bg=Ha.map(([_,R],D)=>{let[z,k]=l(128);z.height=1024,k.fillStyle=R,k.fillRect(0,0,128,1024);let q=k.createLinearGradient(0,0,128,0);return q.addColorStop(0,"rgba(0,0,0,.35)"),q.addColorStop(.25,"rgba(0,0,0,0)"),q.addColorStop(.86,"rgba(230,219,175,.12)"),q.addColorStop(1,"rgba(0,0,0,.2)"),k.fillStyle=q,k.fillRect(0,0,128,1024),k.save(),k.translate(76,70),k.rotate(Math.PI/2),k.fillStyle=[2,4,5,6,9,10].includes(D)?"#ded9c5":"#262b26",k.font="600 47px Georgia,serif",k.fillText(_,0,0,820),k.restore(),k.fillStyle="rgba(217,210,181,.55)",k.fillRect(14,947,100,3),k.fillRect(14,963,100,3),f(k,128,400,"22,24,17",.22),new Be({map:h(z),roughness:.96})});for(let _=0;_<4;_++){let R=-.69;for(let D=0;D<16;D++){let z=(D+_*5)%Ha.length,k=c(.045,.085),q=c(.3,.44),ue=c(.22,.3);if(R+k>.68)break;if(D===7||_===2&&D===11){R+=.1;continue}let Ge=new Se;Ge.name=Ha[z][0],xi.add(Ge);let tt=D%6===5?-.12:c(-.025,.025);Ge.rotation.z=tt,Ge.position.set(R+k/2,.12+_*.54+.018+Math.abs(Math.sin(tt))*k/2,.18-ue/2),H([k-.008,q-.009,ue-.007],[0,q/2,0],wg,Ge);let Pt=M(Ha[z][1],.93);for(let Vt of[-1,1])H([.004,q,ue],[Vt*(k/2-.002),q/2,0],Pt,Ge);H([k,q,.007],[0,q/2,ue/2],Pt,Ge);let nn=G(new Mt(k-.002,q-.004),bg[z],Ge);nn.position.set(0,q/2,ue/2+.004),nn.castShadow=!1,R+=k+.008}}for(let _ of[.14,.68,1.22,1.76,2.3])H([1.44,.002,.035],[0,_,.196],M(7171673,.99),xi);let Tg=H([.32,.055,.24],[.41,2.327,.03],M(6964536,.95),xi);Tg.rotation.y=.17;let[Rg,Ht]=l(2048);Ht.fillStyle="#66695d",Ht.fillRect(0,0,2048,2048);for(let _=0;_<1250;_++)p(Ht,a()*2048,a()*2048,c(4,125),_%4?"34,31,21":"135,131,110",c(.035,.22));for(let _=0;_<160;_++){let R=_%4,D=R<2?(R?2048:0)+c(-45,90):a()*2048,z=R<2?a()*2048:(R===2?0:2048)+c(-45,90);p(Ht,D,z,c(60,190),"20,26,19",c(.15,.4))}for(let _=0;_<75;_++){let R=c(80,1968),D=c(80,1968),z=c(14,70);p(Ht,R,D,z*1.7,"57,35,15",c(.13,.35)),Ht.strokeStyle=`rgba(48,35,18,${c(.12,.36)})`,Ht.lineWidth=c(1,4),Ht.beginPath(),Ht.ellipse(R,D,z,z*c(.6,1.2),a()*Math.PI,0,Math.PI*c(1.1,2)),Ht.stroke()}Ht.lineCap="round";for(let _=0;_<340;_++){let R=c(100,1950),D=c(100,1950);Ht.save(),Ht.translate(R,D),Ht.rotate(a()*Math.PI*2),Ht.strokeStyle=`rgba(16,23,19,${c(.1,.3)})`,Ht.lineWidth=c(1,4),Ht.beginPath(),Ht.moveTo(0,0),Ht.quadraticCurveTo(c(15,50),c(-12,12),c(55,160),c(-20,20)),Ht.stroke(),Ht.restore()}for(let _=0;_<17;_++){let R=a()*2048,D=a()*2048;Ht.beginPath(),Ht.moveTo(R,D);for(let z=0;z<9;z++)R+=c(-20,25),D+=c(6,27),Ht.lineTo(R,D);Ht.strokeStyle="rgba(18,23,18,.42)",Ht.lineWidth=2.2,Ht.stroke()}for(let _=0;_<1900;_++){let R=a()*2048,D=a()*2048;Ht.strokeStyle=`rgba(167,163,137,${c(.03,.22)})`,Ht.lineWidth=c(.4,1.3),Ht.beginPath(),Ht.moveTo(R,D),Ht.lineTo(R+c(3,28),D+c(-5,5)),Ht.stroke()}f(Ht,2048,9e4,"16,22,15",.26),f(Ht,2048,3e4,"166,161,135",.2);let yf=h(Rg);F.map=yf,F.bumpMap=yf,F.bumpScale=.006,F.needsUpdate=!0;let jt=new Se;jt.name="Weathered entrance wall behind the viewer",jt.position.z=4.48,jt.rotation.y=Math.PI,t.add(jt),H([7.8,3.35,.16],[0,1.675,-.08],M(10068367,.99,g),jt),j(7.8,3.35,jt).position.set(0,1.675,.004),H([7.8,.14,.045],[0,.07,.024],v,jt),H([7.8,.026,.023],[0,2.87,.03],C,jt);let[Ag,In]=l(1024);for(let _=0;_<62;_++){let R=a()*1024,D=c(0,180);In.strokeStyle=`rgba(43,36,22,${c(.1,.32)})`,In.lineWidth=c(.5,5),In.beginPath(),In.moveTo(R,D),In.bezierCurveTo(R+6,D+80,R-4,D+170,R+c(-6,9),D+c(210,650)),In.stroke()}for(let _=0;_<21;_++){let R=a()*1024,D=a()*1024;In.beginPath();for(let z=0;z<12;z++){let k=z/12*Math.PI*2,q=c(9,27),ue=R+Math.cos(k)*q,Ge=D+Math.sin(k)*q*1.7;z?In.lineTo(ue,Ge):In.moveTo(ue,Ge)}In.closePath(),In.fillStyle=_%3?"rgba(61,65,52,.75)":"rgba(149,144,118,.6)",In.fill()}for(let _=0;_<10;_++){let R=a()*1024,D=c(60,850);In.strokeStyle="rgba(28,34,26,.75)",In.lineWidth=.8,In.beginPath(),In.moveTo(R,D);for(let z=0;z<8;z++)R+=c(-9,12),D+=c(5,16),In.lineTo(R,D);In.stroke()}let vf=G(new Mt(7.8,3.35),new Be({map:h(Ag),transparent:!0,depthWrite:!1,roughness:1}),jt);vf.position.set(0,1.675,.007),vf.castShadow=!1;let En=new Se;En.name="Scuffed service door and failing exit sign",En.position.set(1.2,0,.05),jt.add(En);let Na=M(6910824,.88,u,.22);H([1.12,2.34,.042],[0,1.17,0],v,En),H([1.035,2.27,.048],[0,1.153,.022],Na,En);for(let _ of[-.565,.565])H([.065,2.4,.1],[_,1.2,.035],C,En);H([1.19,.065,.1],[0,2.4,.035],C,En),H([1.1,.025,.13],[0,.016,.045],B,En),H([.85,.28,.009],[0,.25,.052],M(7239276,.7,u,.55),En);for(let _ of[-1,1])for(let R of[.14,.35])ye([.008,.008,.003],[_*.39,R,.059],B,En);H([.68,.73,.032],[0,1.69,.055],C,En);let[Cg,Pi]=l(512);Pi.fillStyle="#293c39",Pi.fillRect(0,0,512,512);for(let _=0;_<170;_++)p(Pi,a()*512,a()*512,c(4,45),"7,14,11",c(.08,.3));Pi.strokeStyle="rgba(100,118,105,.32)",Pi.lineWidth=1.4;for(let _=-512;_<1024;_+=36)Pi.beginPath(),Pi.moveTo(_,0),Pi.lineTo(_+512,512),Pi.moveTo(_,0),Pi.lineTo(_-512,512),Pi.stroke();G(new Mt(.6,.65),new kt({map:h(Cg),roughness:.32,clearcoat:.8,metalness:.12}),En).position.set(0,1.69,.074),fe([.36,.9,.095],[.36,1.05,.095],.017,B,En),fe([.36,1.03,.095],[.2,1.03,.12],.015,B,En);for(let _ of[.35,1.2,2.07])H([.07,.1,.034],[-.515,_,.064],C,En),ie(.012,.12,[-.53,_,.08],B,En);function wr(_,R,D,z,k,q="#74796b",ue="#d0cdb8"){let[Ge,tt]=l(512);Ge.height=128,tt.fillStyle=q,tt.fillRect(0,0,512,128),tt.fillStyle=ue,tt.font="600 50px Arial,sans-serif",tt.textAlign="center",tt.fillText(_,256,82,470),f(tt,512,1500,"14,20,15",.2);let Pt=G(new Mt(R,D),new Be({map:h(Ge),roughness:.9}),z);return Pt.position.set(...k),Pt.castShadow=!1,Pt}wr("STAFF ONLY",.4,.1,En,[0,1.12,.055]),H([.54,.21,.1],[0,2.66,.08],C,En);let Fa=wr("EXIT  \u2192",.48,.15,En,[0,2.66,.133],"#263b30","#a8b593");Fa.material.emissive.set(5994071),Fa.material.emissiveMap=Fa.material.map,Fa.material.emissiveIntensity=.25;let Ii=new Se;Ii.name="Abandoned critique pinboard",Ii.position.set(-.95,1.94,.055),Ii.rotation.z=-.018,jt.add(Ii);let Pg=M(8417362,.99,m);H([1.86,1.25,.045],[0,0,0],Pg,Ii);for(let _ of[-.94,.94])H([.035,1.3,.055],[_,0,.01],C,Ii);for(let _ of[-.64,.64])H([1.91,.035,.055],[0,_,.01],C,Ii);for(let _=0;_<7;_++){let R=-.68+_%4*.44,D=_<4?.28:-.26,z=Hl(_%2===0),k=G(new Mt(.35,.43),new Be({map:z,color:_%2?12170400:13026996,roughness:1,side:It}),Ii);k.position.set(R,D,.028+_%3*.001),k.rotation.z=c(-.1,.1),k.castShadow=!1,ye([.008,.008,.005],[R,D+.195,.039],_%2?v:M(7814963,.8),Ii);let q=H([.11,.033,.001],[R-.06,D+.2,.031],M(10001011,.98),Ii);q.rotation.z=c(-.2,.2)}wr("DESIGN / CRITIQUE",1.1,.1,Ii,[-.11,.56,.028],"#77765a","#252d27"),H([.94,.065,.13],[-.95,2.78,.11],C,jt);let _f=ie(.013,.82,[-.95,2.741,.14],new gt({color:7572357}),jt,12);_f.rotation.z=Math.PI/2,_f.castShadow=!1;let Oa=new ro(9611936,3.4,3.6,1,.85,2);Oa.position.set(-.95,2.72,.36),Oa.target.position.set(-1.12,1.35,.04),jt.add(Oa,Oa.target);let Gl=al({flies:7,moths:3,spread:[.48,.14,.22],seed:71,sizeScale:.5,dive:.22});Gl.group.position.set(-.95,2.52,.43),jt.add(Gl.group);let ti=new Se;ti.name="Damaged filing cabinets",ti.position.set(-1.12,0,.26),jt.add(ti),H([1.52,.77,.028],[0,.385,-.2],Na,ti),H([1.56,.035,.46],[0,.795,0],C,ti);for(let _ of[-.745,0,.745])H([.025,.77,.43],[_,.385,0],Na,ti);for(let _ of[.018,.385])H([1.52,.025,.43],[0,_,0],C,ti);for(let _ of[-.38,.38])for(let R of[.2,.56]){if(_<0&&R>.4)continue;let D=0;H([.71,.32,.025],[_,R,.231+D],C,ti),fe([_-.1,R+.04,.26+D],[_+.1,R+.04,.26+D],.011,B,ti),H([.16,.055,.004],[_,R-.06,.248+D],S,ti),D&&(H([.68,.014,.35],[_,R-.16,.2],C,ti),H([.012,.28,.34],[_-.34,R,.2],C,ti))}let Ig=H([.47,.29,.36],[-1.3,.96,.29],M(11573869,.99,m),jt);Ig.rotation.y=.14,wr("ARCHIVE",.25,.075,jt,[-1.3,.97,.483],"#a49471","#3b3d30");let Lg=H([.5,.014,.19],[-1.3,1.116,.39],A,jt);Lg.rotation.x=.2;let vs=new Se;vs.name="Neglected network and electrical cabinet",vs.position.set(-2.96,1.6,.08),jt.add(vs),H([.64,.97,.12],[0,0,0],C,vs),H([.56,.88,.014],[0,0,.066],v,vs);for(let _=0;_<4;_++)for(let R=0;R<5;R++)H([.072,.09,.035],[-.2+R*.1,.28-_*.16,.09],Na,vs),H([.017,.035,.01],[-.2+R*.1,.28-_*.16,.113],_===1?S:v,vs);let Po=new Se;Po.position.set(-.32,0,.06),Po.rotation.y=-.65,vs.add(Po),H([.62,.96,.025],[.31,0,0],C,Po),wr("CAUTION",.3,.1,Po,[.32,.26,.014],"#a08d52","#252b24");for(let _=0;_<4;_++)N([[-3.12+_*.08,2.1,.12],[-3.15+_*.08,2.5,.12],[-3.15+_*.08,2.88,.12],[-2.1+_*.08,2.88,.12]],.012,C,jt);for(let _=0;_<6;_++)N([[-3.18+_*.08,1.15,.16],[-3.2+_*.06,.71,.21],[-3.13+_*.1,.32,.17],[-2.85+_*.06,.15,.3]],.005,_%2?v:M(5858907,.9),jt);H([.2,.13,.022],[2.2,.35,.047],S,jt),H([.11,.085,.025],[2.2,.35,.065],v,jt),N([[2.2,.35,.09],[2.24,.12,.13],[2.47,.023,.28],[2.9,.023,.42],[3.1,.023,.3]],.007,v,jt);let Li=new Se;Li.name="Dusty fire extinguisher",Li.position.set(2.16,.25,.17),jt.add(Li);let Wl=M(8271401,.78,u,.23);ie(.095,.42,[0,.25,0],Wl,Li,24),ye([.095,.065,.095],[0,.47,0],Wl,Li),ye([.093,.045,.093],[0,.04,0],Wl,Li),H([.11,.025,.055],[.015,.56,0],v,Li),fe([0,.51,0],[0,.57,0],.018,B,Li),N([[.035,.52,0],[.12,.47,.02],[.13,.19,.06]],.012,v,Li),wr("FIRE",.12,.14,Li,[0,.27,.097],"#b4ac8c","#33382d"),n.push(be,Me,ze,dt,ns,Cn,Le,Qe.group,Yn,xi,ti,Li);for(let _ of n)fr(_,Vn);for(let _ of[We,Oe]){let R=_.getObjectByName("Monitor power cable");_.remove(R),R.geometry.dispose();let D=_.localToWorld(new w(.1,.23,-.05)),z=D.x,k=D.z,q=N([D.toArray(),[z+.09,Math.max(Vn(z+.09,k+.1)+.008,D.y*.45),k+.1],[z+.2,Vn(z+.2,k+.2)+.007,k+.2],[z+.38,Vn(z+.38,k+.11)+.007,k+.11]],.006,v);q.userData.ignoreFloorContact=!0,q.userData.anchorStart=!0}for(let _ of s)rl(_,Vn);t.add(w0(e,Vn));let Ys=E0();Ys.group.userData.ignoreAcid=!0,t.add(Ys.group);let Xl=F0({valves:Ys.valves,floorSupport:Vn});t.add(Xl.group);let Mf=I0({filing:ti,laptop:Kd,floorSupport:Vn,drawerMaterial:C});t.add(Mf.group);let ql=D0({bottle:xg,contents:mg,cap:To,floorSupport:Vn});t.add(ql.group);let Ef=C0({room:t,floorSupport:Vn,viewerPosition:e});t.add(Ef.group);function Dg(_){Xl.setEnvironment(_),et.setEnvironment(_),he.setEnvironment(_),Ys.setEnvironment(_),Aa.setEnvironment(_)}let Sf=-1/0;function Ug(_,R,D=e){ql.update(_,R);let z=Aa.update(_,R);return _-Sf>=1/Lt.effectsHz&&(Sf=_,Ef.update(_,R,D),Ys.update(_,R),Nl.update(_,R,z),Gl.update(_,R,.65),Fl.update(_,R,.78)),z}return{group:t,laptop:Kd,catMug:Yi,acidLeaks:Xl,chargingKit:Mf,ketchupKey:ql,countdown:Qe,setDisplayEnvironment:Dg,update:Ug,figpalHoists:Ys,toggleHoist:Ys.toggleHoist}}var fa=["Nooo!!!!","Tell my wife that I love her!","Delete my browser history!"],_d=["help","I have a family","I swear I didn't detach the component!"];function z0(i,e,t=Math.random){let n=18,s=-1,r=Math.floor(t()*_d.length);return{update(o,a=!1){if(o<n)return!1;if(a||e.isActive(o))return n=o+2,!1;let c=[0,1,2].filter(h=>i.isHanging(h));if(!c.length)return n=o+2,!1;c.length>1&&(c=c.filter(h=>h!==s));let l=c[Math.floor(t()*c.length)];return e.show(l,o,_d[r],6),s=l,r=(r+1)%_d.length,n=o+20+t()*15,!0},reset(o=0){n=o+18,s=-1}}}function B0(i){let e=null;return{update(t,n){return t!=="finished"||e!==null?!1:(e=n,i.lowerAll(),!0)},reset(){e!==null&&i.reset(),e=null},get active(){return e!==null},elapsed(t){return e===null?-1:Math.max(0,t-e)}}}function k0(i,e,t=()=>!0){let n=document.querySelector("#figpal-dialogues"),s=fa.map((d,g)=>{let x=document.createElement("div");x.className="figpal-speech",x.hidden=!0,x.dataset.figpal=String(g+1);let m=document.createElement("span");m.className="figpal-speech-text",m.textContent=d;let u=document.createElementNS("http://www.w3.org/2000/svg","svg");u.classList.add("figpal-speech-tail"),u.setAttribute("aria-hidden","true");let E=document.createElementNS("http://www.w3.org/2000/svg","path");return u.append(E),x.append(m,u),n.append(x),x}),r=new w,o=s.map(()=>null),a=s.map(()=>15);function c(d,g,x=fa[d],m=15){if(s[d]){if(!t(d)){p(d);return}o[d]=g,a[d]=m,s[d].children[0].textContent=x}}function l(d){return o.some((g,x)=>t(x)&&g!==null&&d>=g&&d<g+a[x])}function h(d){for(let g=0;g<s.length;g++)c(g,d)}function p(d){if(Number.isInteger(d)){s[d]&&(o[d]=null,s[d].hidden=!0);return}n.hidden=!0;for(let g=0;g<s.length;g++)o[g]=null,s[g].hidden=!0}function f(d,g){n.hidden=!1;let x=e.getBoundingClientRect(),m=0;for(let u=0;u<i.length;u++){if(!t(u)){p(u);continue}let E=s[u],y=o[u]===null?-1:g-o[u],M=a[u];if(y<0||y>=M){E.hidden=!0,y>=M&&(o[u]=null);continue}if(E.style.opacity=String(1-Je.smoothstep(y,M-1,M)),i[u].getWorldPosition(r),r.y=Math.max(r.y,1.32),r.project(d),r.z<-1||r.z>1||Math.abs(r.x)>1.04||Math.abs(r.y)>1.1){E.hidden=!0;continue}E.hidden=!1;let I=x.left+(r.x*.5+.5)*x.width,A=x.top+(-r.y*.5+.5)*x.height;E.style.transform=`translate3d(${I}px,${A-14}px,0) translate(-50%,-100%)`;let S=E.offsetWidth/2;E.querySelector("path").setAttribute("d",`M ${S-5} 0 L ${S+6} 0 L ${S} 15 Z`),m++}n.hidden=m===0}return p(),{update:f,hide:p,show:c,showAll:h,isActive:l}}var ps=i=>(i=Math.max(0,Math.min(1,i)),i*i*(3-2*i));function V0({canDetach:i=()=>!0}={}){let e=!0,t=-1/0,n=-1/0,s=!1,r=-1/0;return{get locked(){return e},requestReach(o){return o-t<1.65||!e&&o-n<.85?!1:(t=o,r=o+5.2,s=!e,!0)},detach(o){return!e||!i()?!1:(e=!1,n=o,r=o+2.4,s=!1,!0)},endReach(){r=-1/0,s=!1},sample(o,a=!1){a&&Number.isFinite(t)&&(r=Math.max(r,o+.8));let c=o-t,l=c<.52?ps(c/.52):c<.86?1:1-ps((c-.86)/.79),h=!1;!e&&s&&c>=.55&&(h=!0,s=!1);let p=o-n,f=e?0:ps(p/.14),d=e?0:ps((p-.12)/.42),g=e?0:ps((p-.56)/.28),x=e?0:ps((p-.9)/.65),m=o<r,u=m?Math.min(ps(c/.24),ps((r-o)/.45)):0;return{locked:e,reach:l,visible:m,reveal:u,releaseElapsed:p,unlatch:f,hingeOpen:d,handFree:g,cuffDrop:x,release:e?0:ps((o-n)/.85),strain:e&&c>.45&&c<.86?Math.sin(c*64)*.003:0,openLaptop:h}},reset(){e=!0,t=-1/0,n=-1/0,s=!1,r=-1/0}}}function G0(i,e,t,n=.43,s=.49){let r=new w().subVectors(e,i),o=r.length();r.normalize(),o>n+s-.015&&i.addScaledVector(r,o-(n+s-.015));let a=Math.max(.001,i.distanceTo(e)),c=Je.clamp((n*n-s*s+a*a)/(2*a),-n,n),l=new w(.55,-1,.08).addScaledVector(r,-new w(.55,-1,.08).dot(r)).normalize();return t.copy(i).addScaledVector(r,c).addScaledVector(l,Math.sqrt(Math.max(0,n*n-c*c))),t}function W0(i,e){let s=new Ct,r=new Float32Array(609*3),o=[];for(let I=1;I<=20;I++)for(let A=1;A<=28;A++){let S=I*29+A;o.push(S,S-28-2,S-1,S,S-28-1,S-28-2)}s.setAttribute("position",new ln(r,3).setUsage(Un)),s.setIndex(o);let a=new lt(s,i);a.name="Full curved forearm",a.castShadow=a.receiveShadow=!0,a.frustumCulled=!1;let c=s.clone(),l=new lt(c,e);l.name="Forearm ink silhouette",l.raycast=()=>{},l.frustumCulled=!1,a.add(l);let h=new sa,p=new w,f=new w,d=new w,g=new w,x=new w,m=new w,u=new w,E=new w,y=[[0,.076,.061],[.18,.081,.063],[.4,.073,.055],[.65,.059,.043],[.84,.046,.032],[1,.038,.026]];function M(I,A,S){f.subVectors(I,A).normalize(),p.set(0,0,1).applyQuaternion(S),p.dot(f)<.25&&p.lerp(f,.65).normalize(),h.v0.copy(I),h.v1.lerpVectors(I,A,.31),h.v1.x+=.018,h.v2.copy(A).addScaledVector(p,Math.min(.12,I.distanceTo(A)*.24)),h.v3.copy(A),u.set(1,0,0).applyQuaternion(S);for(let v=0;v<=20;v++){let b=v/20;h.getPoint(b,d),h.getTangent(b,g),x.copy(u).addScaledVector(g,-u.dot(g)).normalize(),m.crossVectors(x,g).normalize();let F=y.findIndex(ie=>ie[0]>=b),B=y[Math.max(0,F-1)],G=y[F],H=B===G?0:Je.smoothstep(b,B[0],G[0]),J=Je.lerp(B[1],G[1],H),ye=Je.lerp(B[2],G[2],H);for(let ie=0;ie<=28;ie++){let fe=ie/28*Math.PI*2;E.copy(d).addScaledVector(x,Math.cos(fe)*J).addScaledVector(m,Math.sin(fe)*ye),E.toArray(r,(v*29+ie)*3)}}s.attributes.position.needsUpdate=!0,s.computeVertexNormals();let C=s.attributes.normal,Y=c.attributes.position;for(let v=0;v<Y.count;v++)Y.setXYZ(v,r[v*3]+C.getX(v)*.0015,r[v*3+1]+C.getY(v)*.0015,r[v*3+2]+C.getZ(v)*.0015);Y.needsUpdate=!0}return{mesh:a,update:M}}var X0=new w(0,1,0);function q0(i,e={}){let t=new Se;t.name="Player forearm chained to the rear pipes";let n=new Se;n.name="Camera-relative reaching hand",t.add(n);let s=V0(e),r=new qt(1,24,16),o=new Be({color:13871751,roughness:.86,metalness:0,emissive:6832947,emissiveIntensity:.025}),a=new gt({color:2104345,side:gn}),c=fi(10857122),l=fi(12568e3),h=new Be({color:1382166,roughness:.9}),p=new gt({transparent:!0,opacity:0,depthWrite:!1,colorWrite:!1});function f(Ye,ze,ke=n){let it=new lt(Ye,ze);return it.castShadow=!0,it.receiveShadow=!0,ke.add(it),it}function d(Ye,ze,ke,it=o){let nt=f(r,it,Ye);return nt.position.set(...ze),nt.scale.set(...ke),nt}function g(Ye,ze,ke,it,nt){ze=new w(...ze),ke=new w(...ke);let ot=ke.clone().sub(ze),St=f(new Xt(it,it,ot.length(),20),nt,Ye);return St.position.copy(ze).add(ke).multiplyScalar(.5),St.quaternion.setFromUnitVectors(X0,ot.normalize()),St}function x(Ye,ze,ke,it){return f(new un(new Zt(ze.map(nt=>new w(...nt))),24,ke,7,!1),it,Ye)}let m=new Se;m.name="Cartoon forearm and right hand",n.add(m);function u(Ye,ze=.002){let ke=Ye.geometry.clone(),it=ke.attributes.position,nt=ke.attributes.normal;for(let St=0;St<it.count;St++)it.setXYZ(St,it.getX(St)+nt.getX(St)*ze,it.getY(St)+nt.getY(St)*ze,it.getZ(St)+nt.getZ(St)*ze);it.needsUpdate=!0,ke.computeBoundingSphere();let ot=new lt(ke,a);ot.name="Ink silhouette",ot.raycast=()=>{},Ye.add(ot)}function E(Ye,ze,ke=28){let it=ze.map(([hn,vn,dt,At,Nn])=>({z:hn,x:vn,y:dt,rx:At,ry:Nn})),nt=[],ot=[],St=[];for(let hn=0;hn<it.length;hn++){let vn=it[hn];for(let dt=0;dt<=ke;dt++){let At=dt/ke*Math.PI*2,Nn=Math.cos(At),dn=Math.sin(At);if(nt.push(vn.x+vn.rx*Nn,vn.y+vn.ry*dn,vn.z),ot.push(dt/ke,hn/(it.length-1)),hn&&dt){let _n=hn*(ke+1)+dt;St.push(_n,_n-ke-2,_n-1,_n,_n-ke-1,_n-ke-2)}}}let Wt=new Ct;Wt.setAttribute("position",new ct(nt,3)),Wt.setAttribute("uv",new ct(ot,2)),Wt.setIndex(St),Wt.computeVertexNormals();let en=f(Wt,o,Ye);return u(en),en}let y=E(m,[[0,0,0,.097,.078],[-.18,.004,0,.099,.077],[-.42,.008,.003,.092,.073],[-.7,.006,.002,.084,.066],[-1,0,0,.076,.061]],40);y.name="Upper arm";let M=d(m,[0,0,0],[.076,.061,.068]);M.name="Bent elbow";let I=W0(o,a);m.add(I.mesh);let A=new pt,S=new Se;S.name="Cartoon right hand",m.add(S),E(S,[[.025,0,0,.037,.025],[0,0,0,.04,.026],[-.03,-.005,0,.059,.036],[-.066,-.005,0,.071,.04],[-.108,-.002,-.002,.071,.037],[-.14,.002,-.003,.065,.031],[-.16,.004,-.004,.051,.022],[-.17,.004,-.004,.006,.004]],40);let C=[];for(let[Ye,ze,ke,it]of[[0,-.056,.12,.19],[1,-.018,.136,.055],[2,.023,.128,-.08],[3,.06,.1,-.23]]){let nt=new Se;nt.position.set(ze,-.002,-.137+(Ye===3?.013:0)),nt.rotation.y=it,S.add(nt),C.push(nt);let ot=Ye===3?.0175:.02;E(nt,[[.014,0,0,ot*.92,ot*.9],[0,0,0,ot,ot],[-ke*.22,0,-.002,ot,ot*.98],[-ke*.48,0,-.005,ot*.96,ot*.94],[-ke*.7,0,-.009,ot*.92,ot*.9],[-ke*.84,0,-.012,ot*.86,ot*.84],[-ke*.94,0,-.014,ot*.64,ot*.64],[-ke*.985,0,-.014,ot*.3,ot*.3],[-ke,0,-.014,3e-4,3e-4]]),nt.userData.spread=it}let Y=new Nt;Y.name="Lid contact fingertip",Y.position.set(0,-.014,-.136),C[1].add(Y);let v=new Se;v.position.set(-.049,-.008,-.041),v.rotation.y=.88,v.rotation.z=-.26,S.add(v),E(v,[[.018,0,0,.033,.03],[0,0,0,.032,.03],[-.027,-.003,0,.029,.027],[-.051,-.005,.002,.026,.025],[-.072,-.006,.002,.025,.024],[-.089,-.006,.001,.021,.02],[-.101,-.006,0,.012,.012],[-.107,-.006,0,3e-4,3e-4]]);let b=new Se;b.name="Wrist cuff and chain \u2014 right-click to detach",b.userData.playerChain=!0,n.add(b);let F=new Se;F.name="Close-fitting oval wrist cuff",b.add(F);let B=-.044;function G(Ye,ze,ke){let it=new Et;it.absellipse(0,0,.047,.034,Ye,ze,!1),it.lineTo(Math.cos(ze)*.0405,Math.sin(ze)*.028),it.absellipse(0,0,.0405,.028,ze,Ye,!0),it.closePath();let nt=new rn(it,{depth:.03,bevelEnabled:!0,bevelSize:8e-4,bevelThickness:8e-4,bevelSegments:2,curveSegments:32}),ot=f(nt,c,ke);return ot.position.z=-.015,ot}let H=G(Math.PI,Math.PI*2,F);H.name="Fixed lower cuff";let J=new Se;J.name="Hinged upper cuff",J.position.x=B,F.add(J);let ye=G(0,Math.PI,J);ye.position.x=-B,g(F,[B,0,-.023],[B,0,.023],.0055,l);for(let Ye of[-.021,.021])d(F,[B,0,Ye],[.0065,.0065,.002],l);f(new bt(.013,.016,.033),c,F).position.set(.046,-.007,0);let fe=new Se;fe.name="Spring-loaded locking clip",fe.position.set(.045-B,.008,0),J.add(fe),f(new bt(.009,.021,.025),l,fe).position.set(.003,-.008,0),d(fe,[.008,-.006,.006],[.0018,.004,.0015],h);let ee=f(new $t(.01,.0032,8,20),l,F);ee.position.set(.051,-.019,0),ee.rotation.y=Math.PI/2;let oe=f(new Xt(.06,.06,.07,16),p,F);oe.rotation.x=Math.PI/2,oe.castShadow=!1;let j=new Se;j.name="Rusted rear pipe anchoring the wrist chain",t.add(j),x(j,[[3.3,.13,4.16],[3.3,.42,4.16],[3.3,2.16,4.16],[3.27,2.32,4.16],[2.78,2.34,4.16]],.045,c);for(let Ye of[.3,1.25,2.08]){f(new bt(.2,.16,.025),c,j).position.set(3.3,Ye,4.37);for(let it of[3.23,3.37]){g(j,[it,Ye,4.35],[it,Ye,4.14],.008,l);let nt=f(new Xt(.017,.017,.018,6),l,j);nt.rotation.x=Math.PI/2,nt.position.set(it,Ye,4.12)}let ke=f(new $t(.058,.01,8,32),l,j);ke.rotation.x=Math.PI/2,ke.position.set(3.3,Ye,4.16)}let O=new w(3.3,.28,4.1),ae=new w,V=f(new $t(.055,.009,8,24),l,j);V.position.set(3.3,.28,4.1),V.rotation.y=Math.PI/2;let W=[];for(let Ye=0;Ye<48;Ye++){let ze=Ye/48*Math.PI*2;W.push(new w(Math.cos(ze)*.015,Math.sin(ze)*.025,0))}let Z=new un(new Zt(W,!0),48,.0045,7,!0),ge=new xn(Z,l,360);ge.name="Heavy interlocking wrist chain",ge.castShadow=!0,ge.receiveShadow=!0,ge.frustumCulled=!1,b.add(ge);let Ae=new xn(new qt(1,8,6),p,360);Ae.frustumCulled=!1,b.add(Ae);let de=new w,Q=new w,P=new w,_e=new w,ne=new w,he=new w,me=new Nt,Ce=new w(.29,-.36,-.73),we=new w(.45,-.65,-.5),U=new w(.15,-.31,-.77),T=new w(-.08,-.32,-.83),K=new w,xe=new w(.43,-.66,-.54),be=new w(.22,-.68,-.58),Me=new w(.12,-.34,-.05),We=new w(0,0,-1),Oe=new w,qe=new w,xt=new pt,De=new pt,$=!1,ve=new w,Ie=new w,Pe=new w,Te=new w,ce=new pt,Ve=new pt,X=3,Re=new w(1,0,0),re=Array.from({length:49},()=>new w);function Ee(Ye,ze,ke){return ke.copy(_e).lerp(ae,Ye),ke.addScaledVector(Re,Math.sin(Math.PI*Ye)*ze),ke.y-=Math.sin(Math.PI*Ye)*ze*.9,K.copy(ke),n.localToWorld(K),K.y=Math.max(.032,K.y),n.worldToLocal(K),ke.copy(K),ke}function Ue(){let Ye=0,ze=1.5;for(let ot=0;ot<9;ot++){let St=(Ye+ze)/2,Wt=0;for(let en=0;en<re.length;en++)Ee(en/(re.length-1),St,re[en]),en&&(Wt+=re[en].distanceTo(re[en-1]));Wt>X?ze=St:Ye=St}let ke=new Zt(re),it=ke.getLength(),nt=Math.min(360,Math.max(2,Math.ceil(it/.038)));ge.count=Ae.count=nt;for(let ot=0;ot<nt;ot++){let St=ot/(nt-1);ke.getPointAt(St,me.position),ke.getTangentAt(St,he),me.quaternion.setFromUnitVectors(X0,he),ot%2&&me.rotateY(Math.PI/2),me.scale.set(1,1,1),me.updateMatrix(),ge.setMatrixAt(ot,me.matrix),me.scale.set(.032,.026,.032),me.updateMatrix(),Ae.setMatrixAt(ot,me.matrix)}ge.instanceMatrix.needsUpdate=!0,Ae.instanceMatrix.needsUpdate=!0}function Fe(Ye,ze=!1,ke=!1,it=null){let nt=s.sample(Ye,ke),ot=nt.reach;n.position.copy(i.position),n.quaternion.copy(i.quaternion);let St=Math.tan(Je.degToRad(i.fov/2))/Math.tan(Je.degToRad(62/2));if(n.scale.set(St,St,1),n.updateWorldMatrix(!0,!1),n.visible=nt.visible,!nt.visible)return nt.openLaptop;ae.copy(O),n.worldToLocal(ae);let Wt=it?it.reveal:ze?1:nt.reveal,en=(1-Wt)*.55;de.copy(Ce).lerp(nt.locked?U:T,ot),nt.locked&&(de.y+=ze?0:nt.strain),Q.copy(we).lerp(nt.locked?xe:be,ot);let hn=!nt.locked&&nt.releaseElapsed<1.8&&$,vn=ze&&!nt.locked?1:nt.hingeOpen,dt=ze&&!nt.locked?1:nt.cuffDrop;if(hn){de.copy(Oe),Q.copy(qe);let At=ze?1:nt.handFree;de.y+=At*.055,de.z+=At*.025}if(de.y-=en,Q.y-=en,ne.copy(Q).sub(de).setLength(.35),Q.copy(de).add(ne),P.copy(Q).add(Me),y.position.copy(P),ne.copy(Q).sub(P),y.quaternion.setFromUnitVectors(We,ne.clone().normalize()),y.scale.z=ne.length(),ne.copy(de).sub(Q),A.setFromUnitVectors(We,ne.clone().normalize()),M.position.copy(Q),M.quaternion.copy(A),S.position.copy(de),S.quaternion.copy(A),S.rotateX(-.12+ot*.08),S.rotateY(.13-ot*.06),S.rotateZ(-.04),hn&&S.quaternion.slerp(xt,1-nt.handFree),C.forEach((At,Nn)=>{At.rotation.x=-.06+(1-ot)*(.11+Nn*.015)}),v.rotation.x=0,v.rotation.y=.88,it){let At=it.blend,Nn=it.grip,dn=it.gripKind==="handle";C.forEach((_n,ns)=>{_n.rotation.x=Je.lerp(_n.rotation.x,(dn?-.96:-.46)+(ns===0?.08:0),Nn),_n.rotation.y=Je.lerp(_n.userData.spread,_n.userData.spread*.3,Nn)}),v.rotation.x=.28*Nn,v.rotation.y=.88-.28*Nn,C[1].updateMatrix(),dn?Ie.set(0,-.008,-.18):Ie.copy(Y.position).applyMatrix4(C[1].matrix),Ve.copy(i.quaternion).invert(),ce.copy(Ve).multiply(it.quaternion),ve.copy(it.position),n.worldToLocal(ve),Pe.copy(ve).sub(Ie.applyQuaternion(ce)),S.position.lerp(Pe,At),S.quaternion.slerp(ce,At),de.copy(S.position),P.set(.34,-.66-en,-.09),G0(P,de,Te),Q.lerp(Te,At),y.position.copy(P),ne.copy(Q).sub(P),y.quaternion.setFromUnitVectors(We,ne.clone().normalize()),y.scale.z=ne.length(),ne.copy(de).sub(Q),A.setFromUnitVectors(We,ne.clone().normalize()),M.position.copy(Q),M.quaternion.copy(A)}else C.forEach(At=>{At.rotation.y=At.userData.spread});return I.update(Q,S.position,S.quaternion),nt.locked?(F.position.copy(de),F.quaternion.copy(S.quaternion),J.rotation.z=0,fe.rotation.z=0):(F.position.copy(Oe),F.position.y-=en+dt*.32,F.position.x+=dt*.08,F.quaternion.copy(De),F.rotateX(dt*.8),F.rotateZ(dt*.42),J.rotation.z=vn*1.95,fe.rotation.z=-(ze?1:nt.unlatch)*.85),F.updateMatrix(),_e.set(.051,-.019,0).applyMatrix4(F.matrix),X=_e.distanceTo(ae)+(nt.locked?.24*(1-ot)+.018:.42),Ue(),nt.openLaptop}function ht(Ye){return s.locked?(Oe.copy(de),qe.copy(Q),xt.copy(S.quaternion),De.copy(F.quaternion),$=!0,s.detach(Ye)):!1}function Dt(){s.reset(),$=!1,J.rotation.z=0,fe.rotation.z=0,Fe(0,!0)}return Fe(0,!0),{group:t,target:b,state:s,update:Fe,reset:Dt,endReach:()=>s.endReach(),setEnvironment(Ye){for(let ze of[c,l])ze.envMap=Ye,ze.envMapIntensity=1.15,ze.needsUpdate=!0},get locked(){return s.locked},requestReach:Ye=>s.requestReach(Ye),detach:ht}}function Y0(i,{canDetach:e=()=>!0,onBlocked:t=()=>{}}={}){let n=document.querySelector("#chain-menu"),s=n.querySelector("button"),r=document.querySelector("#scene");function o(l=!1){n.hidden=!0,l&&r.focus({preventScroll:!0})}function a(l,h){s.setAttribute("aria-disabled",String(!e())),s.title=e()?"Unlock the shackle with the key":"Find the shackle key first",n.hidden=!1,n.style.left=`${Math.max(8,Math.min(l,innerWidth-n.offsetWidth-8))}px`,n.style.top=`${Math.max(8,Math.min(h,innerHeight-n.offsetHeight-8))}px`,s.focus({preventScroll:!0})}function c(){if(!e()){t();return}o(!0),i()}return s.addEventListener("click",c),n.addEventListener("contextmenu",l=>l.preventDefault()),document.addEventListener("pointerdown",l=>{!n.hidden&&!n.contains(l.target)&&o()},!0),document.addEventListener("keydown",l=>{n.hidden||(l.code==="Escape"?(l.preventDefault(),l.stopPropagation(),o(!0)):l.code==="KeyB"&&l.altKey&&l.metaKey&&!l.ctrlKey&&!l.shiftKey&&(l.preventDefault(),l.stopPropagation(),l.repeat||c()))},!0),window.addEventListener("blur",()=>o()),{show:a,hide:o,get active(){return!n.hidden}}}function Z0(i,e){let t=i.match(/[\p{L}\p{N}'’]+[^\p{L}\p{N}'’]*/gu)||[],n=[],s=.1;for(let r of t){let o=r.replace(/[^\p{L}\p{N}'’]/gu,""),a=(o.toLowerCase().replace(/e$/,"").match(/[aeiouy]+/g)||[]).length,c=Math.max(1,Math.min(4,a)),l=.24+Math.min(o.length,10)*.025+(c-1)*.09;for(let h=0;h<c;h++){let p=l/c;n.push({start:s+h*p,end:s+(h+.87)*p,amount:.78+Math.min(o.length,6)*.025})}s+=l+(/[.!?…]/u.test(r)?.4:/[,;:]/.test(r)?.24:.11)}return{startTime:e,cues:n,duration:s}}function $0(i,e){if(!i)return 0;let t=e-i.startTime;for(let n of i.cues){if(t<n.start)return 0;if(t<=n.end){let s=(t-n.start)/(n.end-n.start),r=Math.min(1,s/.22),o=Math.min(1,(1-s)/.35),a=Math.min(r,o);return n.amount*a*a*(3-2*a)}}return 0}var Md={position:[1.85221,.821615,3.1149],lookAt:[1.155084,.748275,2.401713],fov:48.36},UM=i=>Je.euclideanModulo(i+Math.PI,Math.PI*2)-Math.PI;function K0(i){let e=new w(...Md.position),t=new w(...Md.lookAt).sub(e).normalize(),n={yaw:Math.atan2(-t.x,-t.z),pitch:Math.asin(t.y),zoom:Md.fov/i},s=null;return{start(r,o,a){s={time:r,position:o.clone(),yaw:a.yaw,pitch:a.pitch,zoom:a.zoom}},cancel(){s=null},get active(){return s!==null},update(r,o,a,c=!1){if(!s)return;let l=c?1:Je.clamp((r-s.time)/1.4,0,1),h=l*l*(3-2*l);o.lerpVectors(s.position,e,h),a.yaw=s.yaw+UM(n.yaw-s.yaw)*h,a.pitch=Je.lerp(s.pitch,n.pitch,h),a.zoom=Je.lerp(s.zoom,n.zoom,h),l===1&&(o.copy(e),Object.assign(a,n),s=null)}}}var ms=(i,e,t)=>Je.smootherstep(i,e,t),J0=i=>Je.euclideanModulo(i+Math.PI,Math.PI*2)-Math.PI;function Q0({laptop:i,restraint:e,cameraPosition:t,state:n}){let s=null,r=new w,o=new w,a=new w,c=new w,l=new pt,h=new pt,p=new ii,f=0,d=0,g=1,x=0,m=0,u={position:new w,quaternion:new pt,blend:0,grip:0,reveal:0};function E(I){return s!==null||e.locked||i.isOpen||!e.requestReach(I)?!1:(s=I,r.copy(t),f=n.yaw,d=n.pitch,g=n.zoom??1,i.object.updateWorldMatrix(!0,!1),i.object.localToWorld(o.set(.16,.78,1)),i.object.localToWorld(a.set(0,.32,-.02)),c.copy(a).sub(o).normalize(),x=Math.atan2(-c.x,-c.z),m=Math.asin(c.y),u.blend=u.grip=u.reveal=0,!0)}function y(I,A=!1){if(s===null)return!1;let S=I-s;if(A)return i.setOpenProgress(1),e.endReach(),s=null,!0;let C=ms(S,0,.7)*(1-ms(S,2.7,3.4));t.lerpVectors(r,o,C),n.zoom=Je.lerp(g,1,C),n.yaw=J0(f+J0(x-f)*C),n.pitch=Je.lerp(d,m,C);let Y=ms(S,.96,2.21);return i.setOpenProgress(Y),i.getLidGrip(u.position),i.object.getWorldQuaternion(l),h.setFromEuler(p.set(-.1-.28*Y,0,-.1)),u.quaternion.copy(l).multiply(h),u.blend=ms(S,0,.8)*(1-ms(S,2.38,3.02)),u.grip=ms(S,.7,.92)*(1-ms(S,2.21,2.38)),u.reveal=ms(S,0,.18)*(1-ms(S,2.64,3.12)),S<3.4?!1:(t.copy(r),n.yaw=f,n.pitch=d,n.zoom=g,e.endReach(),s=null,!0)}function M(){s!==null&&(t.copy(r),n.yaw=f,n.pitch=d,n.zoom=g,e.endReach(),s=null)}return{start:E,update:y,cancel:M,get active(){return s!==null},get handPose(){return s===null?null:u}}}var mr=(i,e,t)=>Je.smootherstep(i,e,t);function j0({mug:i,camera:e,restraint:t}){let n=i.position.clone(),s=i.quaternion.clone(),r=new w,o=new pt,a=new w,c=new pt,l=new w,h=new w,p=new w,f=new pt,d=new pt,g=new pt,x=new pt,m=new pt().setFromEuler(new ii(0,Math.PI/2,-.12)),u={position:new w,quaternion:new pt,blend:0,grip:0,reveal:0,gripKind:"handle"},E=null,y=!1,M=0;function I(C){return t.locked||E!==null||y||!t.requestReach(C)?!1:(i.updateWorldMatrix(!0,!1),i.getWorldPosition(r),i.getWorldQuaternion(o),e.updateWorldMatrix(!0,!1),e.getWorldPosition(a),e.getWorldQuaternion(c),l.set(.03,-.25,-.52).applyQuaternion(c).add(a),h.set(0,-.082,-.205).applyQuaternion(c).add(a),E=C,M=0,u.blend=u.grip=u.reveal=0,!0)}function A(C,Y=!1){if(E===null||y)return!1;let v=C-E;if(Y){if(M=mr(v,.15,.45),v<.6)return!1}else{let b=mr(v,.82,2.12),F=mr(v,2.28,3.36);if(p.lerpVectors(r,l,b),p.y+=Math.sin(Math.PI*b)*.13,p.lerp(h,F),x.setFromAxisAngle(new w(1,0,0),.82*F),d.copy(c).multiply(x),f.slerpQuaternions(o,d,b),i.position.copy(p),i.parent.worldToLocal(i.position),i.parent.getWorldQuaternion(g),i.quaternion.copy(g.invert()).multiply(f),i.updateWorldMatrix(!0,!1),i.localToWorld(u.position.set(.235,0,0)),u.quaternion.copy(f).multiply(m),u.blend=mr(v,0,.72),u.grip=mr(v,.48,.8),u.reveal=mr(v,0,.22),M=mr(v,3.26,3.52),v<3.72)return!1}return y=!0,M=1,t.endReach(),!0}function S(){E=null,y=!1,M=0,i.position.copy(n),i.quaternion.copy(s),i.updateWorldMatrix(!0,!1),u.blend=u.grip=u.reveal=0,t.endReach()}return{start:I,update:A,reset:S,get active(){return E!==null&&!y},get finished(){return y},get blackout(){return M},get handPose(){return E!==null&&!y?u:null}}}var mt=document.querySelector("#scene"),HM=mt.getAttribute("aria-label"),bi=matchMedia("(prefers-reduced-motion: reduce)").matches,Mo={position:[1.85221,.821615,3.1149],lookAt:[1.293346,.717709,2.292176],fov:62},Bs=new w(...Mo.position),Ed=new w(...Mo.lookAt).sub(Bs).normalize(),Os={yaw:Math.atan2(-Ed.x,-Ed.z),pitch:Math.asin(Ed.y)},je={yaw:Os.yaw,pitch:Os.pitch,zoom:1,jaw:0,space:!1,time:0,talkUntil:0},Rn=new Uc({canvas:mt,antialias:!Lt.mobile,alpha:!1,powerPreference:"high-performance"});Rn.setPixelRatio(Lt.pixelRatio);Rn.localClippingEnabled=!0;Rn.shadowMap.enabled=!0;Rn.shadowMap.autoUpdate=!1;Rn.shadowMap.type=Ku;Rn.outputColorSpace=ft;Rn.toneMapping=Ju;Rn.toneMappingExposure=.76;var gi=new Nc;gi.background=new ut(1449240);gi.fog=new Hc(2305314,11,26);var Sa=h0(Rn,gi),Qt=new Fn(Mo.fov,1,.06,35),zn=Bs.clone(),Jn=K0(Mo.fov),em=new w,tm=new w,Sd=new w,NM=new Yc(9545120,2370600,.62);gi.add(NM);var ym=17.5,Wi=new ro(12898992,ym,12,1.25,.72,2);Wi.position.set(.22,2.83,-.55);Wi.target.position.set(0,0,-.1);Wi.castShadow=!0;Wi.shadow.mapSize.set(Lt.shadowSize,Lt.shadowSize);Wi.shadow.camera.near=.1;Wi.shadow.camera.far=11;Wi.shadow.normalBias=.0025;Wi.shadow.bias=-5e-5;gi.add(Wi,Wi.target);var Ri=new Zc(10269877,.85);Ri.position.set(6.2,4.1,-1.6);Ri.target.position.set(-1,.35,-.3);Ri.castShadow=!Lt.mobile;Ri.shadow.mapSize.set(1024,1024);Ri.shadow.camera.left=-6;Ri.shadow.camera.right=6;Ri.shadow.camera.top=5;Ri.shadow.camera.bottom=-5;Ri.shadow.normalBias=.003;Ri.shadow.bias=-6e-5;gi.add(Ri,Ri.target);var vm=new On(9348772,2.2,10,2);vm.position.set(-1,2.6,4);gi.add(vm);var Ti=Je.lerp;function es(i,e=.9){return new Be({color:i,roughness:e})}function Hn(i,e,t=gi){let n=new lt(i,e);return n.castShadow=!0,n.receiveShadow=!0,t.add(n),n}function ks(i,e,t,n,s=3){let r=Hn(new Xc(1,s),typeof e=="string"||typeof e=="number"?es(e):e,i);return r.position.set(...t),r.scale.set(...n),r}function Eo(i,e,t,n,s=!1){let r=new Zt(i.map(o=>o.isVector3?o:new w(...o)),s);return Hn(new un(r,Math.max(24,i.length*2),e,8,s),t,n)}function FM(){let i=document.createElement("canvas");i.width=i.height=1024;let e=i.getContext("2d"),t=2718,n=()=>(t=t*1664525+1013904223>>>0,t/4294967296),s=([l,h])=>[(l+2)/4*i.width,(1-h/3)*i.height];function r(l,h,p=["rgba(211,12,57,.66)","rgba(227,17,62,.50)"]){let f=l.map(s);e.lineCap="round",e.lineJoin="round";for(let d=0;d<3;d++){e.strokeStyle=p[d===0?0:1];for(let g=1;g<f.length;g++){let x=Math.sin(g*1.37+d)*.08+Math.sin(g*.42)*.1;e.lineWidth=h*i.width/4*(1+x)*(d===0?1.13:.77);let m=(n()-.5)*1.5,u=(n()-.5)*1.5;e.beginPath(),e.moveTo(f[g-1][0]+m,f[g-1][1]+u),e.lineTo(f[g][0]+m,f[g][1]+u),e.stroke()}}}let o=[];for(let l=0;l<=140;l++){let h=l/140,p=Ti(-1.65,1.23,h),f=.16*Math.exp(-Math.pow((p+1.65)/.26,2))+.06*Math.pow(Math.max(0,(p-.42)/.81),2);o.push([p,1.45-f+.006*Math.sin(h*12)])}r(o,.075,["rgba(23,25,24,.98)","rgba(23,25,24,.94)"]);let a=[];for(let l=0;l<=80;l++){let h=l/80;a.push([Ti(-.68,.42,h),1.452+.009*Math.sin(h*15)+.012*Math.sin(h*7)])}r(a,.18);for(let l of[-1,1]){let h=[],p=l===-1?-1.13:1.15,f=1.68;for(let d=0;d<=240;d++){let g=d/240,x=g*Math.PI*6.1,m=.017+g*.272+.003*Math.sin(g*39+l);h.push([p+Math.cos(x)*m,f+Math.sin(x)*m*.92+.003*Math.sin(g*43)])}r(h,.047)}e.globalCompositeOperation="destination-out";for(let l=0;l<14e3;l++){e.fillStyle=`rgba(0,0,0,${.08+n()*.48})`;let h=n()*i.width,p=n()*i.height;e.fillRect(h,p,.35+n()*1.2,.4+n()*1.8)}for(let l=0;l<1600;l++){e.strokeStyle=`rgba(0,0,0,${.05+n()*.17})`,e.lineWidth=.4+n()*.7;let h=n()*i.width,p=n()*i.height;e.beginPath(),e.moveTo(h,p),e.lineTo(h+2+n()*6,p+n()*2-1),e.stroke()}let c=new Ft(i);return c.colorSpace=ft,c.anisotropy=Rn.capabilities.getMaxAnisotropy(),c}var OM=FM(),Sl=new Be({color:13882826,roughness:.94});Sl.onBeforeCompile=i=>{i.uniforms.lipstickPaint={value:OM},i.vertexShader=`varying vec3 vStone;
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
 `)};var zM=es(2104866,.98),BM=es(7350072,.98),_m=new gt({color:525833,side:It}),ki=new Se;ki.name="Figsaw and tricycle";gi.add(ki);var yn=new Se;yn.name="Figsaw\u2019s red tricycle";ki.add(yn);var So=new Be({color:13185848,roughness:.44,metalness:.28}),Gs=new Be({color:11449779,roughness:.34,metalness:.72}),va=new Be({color:5462617,roughness:.46,metalness:.65}),Mm=es(8856619,.86),Nd=es(1514523,.93),Em=es(2369317,.85);function ts(i,e,t,n,s){let r=new w(...e),o=new w(...t),a=o.clone().sub(r),c=Hn(new Xt(n,n,a.length(),16),s,i);return c.position.copy(r).add(o).multiplyScalar(.5),c.quaternion.setFromUnitVectors(new w(0,1,0),a.normalize()),c}var Sm=[];function Fd(i,e,t,n,s){let r=new Se;r.position.set(i,e,t),r.rotation.y=Math.PI/2,r.name=s===8?"Large front wheel":"Small rear wheel",yn.add(r),r.userData.radius=n,Sm.push(r);let o=n>.7?.045:.033;Hn(new $t(n-o,o,12,80),Nd,r),Hn(new $t(n-o*2,.018,10,80),va,r);for(let a of[-1,1]){let c=Hn(new $t(n-o*1.65,.006,6,80),Gs,r);c.position.z=a*.024}for(let a=0;a<s;a++){let c=a/s*Math.PI*2+.16;ts(r,[0,0,0],[Math.cos(c)*(n-o*2),Math.sin(c)*(n-o*2),0],n>.7?.013:.011,va)}ts(r,[0,0,-.14],[0,0,.14],.082,So);for(let a of[-1,1])ks(r,Gs,[0,0,a*.15],[.061,.061,.027],2);return r}var Od=1.39,zd=1.52,gl=.89,xo=-1.23;Fd(0,Od,zd,.86,8);Fd(-1.05,gl,xo,.36,6);Fd(1.05,gl,xo,.36,6);ts(yn,[-1.16,gl,xo],[1.16,gl,xo],.045,va);var nm=new Zt([[0,.89,-1.23],[0,1.24,-1.03],[0,1.65,-.55],[0,1.95,.05],[0,2.14,.73],[0,2.19,1.22]].map(i=>new w(...i))),wm=[],wl=[],pa=64;for(let i=0;i<=pa;i++){let e=nm.getPoint(i/pa),t=nm.getTangent(i/pa),n=new w(0,-t.z,t.y).normalize();for(let[s,r]of[[-.055,-1],[.055,-1],[.055,1],[-.055,1]])wm.push(e.x+s,e.y+n.y*.074*r,e.z+n.z*.074*r);if(i<pa)for(let s=0;s<4;s++){let r=i*4+s,o=i*4+(s+1)%4;wl.push(r,o+4,o,r,r+4,o+4)}}wl.push(0,1,2,0,2,3);var ho=pa*4;wl.push(ho,ho+2,ho+1,ho,ho+3,ho+2);var bl=new Ct;bl.setAttribute("position",new ct(wm,3));bl.setIndex(wl);bl.computeVertexNormals();Hn(bl,So,yn);ts(yn,[0,1.72,-.45],[0,2.02,-.45],.064,So);var kM=Hn(new bt(1.91,.07,.29),So,yn);kM.position.set(0,.99,xo);for(let i=-5;i<=5;i++)Hn(new bt(.012,.006,.24),Mm,yn).position.set(i*.16,1.028,xo);var wo=new Et;wo.moveTo(-.2,-.58);wo.bezierCurveTo(-.3,-.18,-.72,.02,-.7,.34);wo.bezierCurveTo(-.66,.57,.66,.57,.7,.34);wo.bezierCurveTo(.72,.02,.3,-.18,.2,-.58);wo.quadraticCurveTo(0,-.7,-.2,-.58);var bm=Hn(new rn(wo,{depth:.08,bevelEnabled:!0,bevelSize:.035,bevelThickness:.025,bevelSegments:3,steps:1,curveSegments:20}),Em,yn);bm.rotation.x=-Math.PI/2;bm.position.set(0,2,-.45);for(let i of[-1,1])Eo([[i*.16,Od,zd],[i*.18,1.76,1.48],[i*.17,2.1,1.29],[i*.1,2.27,1.2]],.046,So,yn);ts(yn,[0,2.15,1.22],[0,2.43,1.17],.084,So);Eo([[0,2.36,1.18],[0,2.52,1.18],[0,2.63,1.34],[0,2.69,1.43]],.046,Gs,yn);Eo([[-1.11,2.99,.86],[-1.1,2.98,1.12],[-1.04,2.88,1.35],[-.87,2.71,1.46],[-.6,2.69,1.45],[0,2.69,1.43],[.6,2.69,1.45],[.87,2.71,1.46],[1.04,2.88,1.35],[1.1,2.98,1.12],[1.11,2.99,.86]],.048,Gs,yn);ts(yn,[-.1,2.69,1.43],[.1,2.69,1.43],.064,Gs);ks(yn,va,[0,2.69,1.491],[.027,.027,.015],2);for(let i of[-1,1])ts(yn,[i*1.1,2.98,1.12],[i*1.11,2.99,.86],.061,Mm),ks(yn,va,[i*1.11,2.99,.85],[.061,.061,.022],2);var Vs=new Se;Vs.name="Rotating pedal crank";Vs.position.set(0,Od,zd);yn.add(Vs);var Tm=[];for(let i of[-1,1]){let e=i*.17,t=-i*.19;ts(Vs,[i*.17,0,0],[i*.3,e,t],.025,Gs),ts(Vs,[i*.3,e,t],[i*.53,e,t],.023,Gs);let n=new Se;n.position.set(i*.44,e,t),Vs.add(n),Tm.push(n),Hn(new bt(.27,.075,.19),Nd,n);for(let s=-1;s<=1;s++)Hn(new bt(.24,.008,.012),Em,n).position.set(0,.041,s*.05)}function VM(i){for(let e of Sm)e.rotation.z=i/e.userData.radius;Vs.rotation.x=i/.86;for(let e of Tm)e.rotation.x=-Vs.rotation.x}ks(yn,Gs,[-.47,2.76,1.45],[.085,.055,.085]);ts(yn,[-.47,2.75,1.45],[-.57,2.77,1.45],.016,Nd);var Rm=.72,Am=2.08,kn=new Se;kn.scale.setScalar(Rm);kn.position.set(0,Am,-.45);ki.add(kn);var Tl=2.8,mi=64,Cm=160,Xn=32,Tn=8*Math.PI*2/Cm,Pd=-.13,GM=.05+Xn/mi*Tl,im=.12;function WM(i){return 2.05*Math.pow(Math.max(0,Math.sin(Math.PI*i)),.4)*(1.19-.45*i)}function _a(i,e){let t=WM(i),n=1+.018*Math.sin(e*5+i*9)+.012*Math.cos(e*9-i*7),s=Je.clamp(i/(Xn/mi),0,1),r=i<Xn/mi?.2*Math.pow(Math.sin(Math.PI*s),.8)*Math.pow(Math.max(0,Math.cos(e)),3):0,o=new w(Math.sin(e)*t*n-.28*i,.05+i*Tl,Math.cos(e)*t*.68*n+r),a=Je.smoothstep(Math.cos(e),.25,.65);for(let c of[-1.13,1.15]){let l=((o.x-c)/.36)**2+((o.y-1.68)/.33)**2;l<1&&(o.z+=.09*(1-l)**2*a)}return o}function Id(i,e){let t=-Math.PI/2,n=Math.PI/2;for(let s=0;s<22;s++){let r=(t+n)/2;_a(i,r).x<e?t=r:n=r}return(t+n)/2}var sm=[_a(Xn/mi,-Tn).x,_a(Xn/mi,Tn).x],wd=new Map;function XM(i){if(i===0||i>=Xn/mi)return[-Tn,Tn];let e=i.toFixed(7);if(wd.has(e))return wd.get(e);let t=i/(Xn/mi),n=Math.sin(Math.PI*t),s=[Id(i,sm[0]-.018*n),Id(i,sm[1]+.018*n)];return wd.set(e,s),s}function Rl(i,e){if(i<=Xn/mi){let[t,n]=XM(i);e<-Tn?e=Ti(-Math.PI,t,(e+Math.PI)/(Math.PI-Tn)):e<=Tn?e=Ti(t,n,(e+Tn)/(Tn*2)):e=Ti(n,Math.PI,(e-Tn)/(Math.PI-Tn))}return _a(i,e)}function Pm(i,e){let t=(e-.05)/Tl;return _a(t,Id(t,i)).z}function Bd(i=!1,e=!1){let t=[],n=[],s=i?-Tn:-Math.PI,r=i?Tn:Math.PI,o=i?20:Cm,a=i?Xn:mi;for(let l=0;l<=a;l++)for(let h=0;h<=o;h++){let p=Rl(l/mi,Ti(s,r,h/o));e&&(p.z=Math.min(p.z-.24,.72)),t.push(p.x,p.y,p.z)}for(let l=0;l<a;l++)for(let h=0;h<o;h++){let p=Ti(s,r,(h+.5)/o);if(!i&&l<Xn&&Math.abs(p)<Tn-1e-4)continue;let f=l*(o+1)+h,d=f+1,g=f+o+2,x=f+o+1;n.push(f,d,x,d,g,x)}let c=new Ct;return c.setAttribute("position",new ct(t,3)),c.setIndex(n),c.computeVertexNormals(),c}var Im=new gt({color:1513752,side:gn});Im.onBeforeCompile=i=>{i.vertexShader=i.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
transformed += normal * 0.058;`)};function Lm(i,e){let t=new lt(i,Im);return t.name="Black stone outline",e.add(t),t}var Dm=Bd(),qM=Hn(Dm,Sl,kn);qM.name="Figsaw";Lm(Dm,kn);var YM=Hn(Bd(!0,!0),_m,kn);YM.castShadow=!1;function Um(i,e=!1){let t=[],n=[];for(let o=0;o<=40;o++){let a=Rl(Xn/mi,Ti(-Tn,Tn,o/40)),c=a.y+(e?-.008:.008);if(t.push(a.x,c,a.z-.075,a.x,c,.7),o<40){let l=o*2;n.push(l,l+1,l+2,l+1,l+3,l+2)}}let s=new Ct;s.setAttribute("position",new ct(t,3)),s.setIndex(n),s.computeVertexNormals();let r=Hn(s,_m,i);r.castShadow=!1}Um(kn);var yr=new Se;kn.add(yr);function ZM(){let i=Bd(!0),e=Array.from(i.attributes.position.array),t=Array.from(i.index.array),n=i.attributes.position.count;for(let o=0;o<n;o++)e.push(e[o*3],e[o*3+1],e[o*3+2]-.14);let s=t.slice();for(let o=0;o<s.length;o+=3)t.push(s[o]+n,s[o+2]+n,s[o+1]+n);let r=[];for(let o=0;o<=20;o++)r.push(o);for(let o=1;o<=Xn;o++)r.push(o*21+20);for(let o=19;o>=0;o--)r.push(Xn*21+o);for(let o=Xn-1;o>0;o--)r.push(o*21);for(let o=0;o<r.length;o++){let a=r[o],c=r[(o+1)%r.length];t.push(a,a+n,c,c,a+n,c+n)}return i.setAttribute("position",new ct(e,3)),i.setIndex(t),i.deleteAttribute("normal"),i.computeVertexNormals(),i}var Hm=ZM(),Nm=Sl.clone();Nm.onBeforeCompile=Sl.onBeforeCompile;Hn(Hm,Nm,yr);Lm(Hm,yr);Um(yr,!0);ks(yr,BM,[Pd,GM-.025,.83],[.25,.016,.055]);var Fm=[];for(let i=0;i<=30;i++){let e=Rl(Xn/mi,Ti(-Tn,Tn,i/30));e.z+=.002,Fm.push(e)}Eo(Fm,.008,zM,kn);for(let i of[-1,1]){let e=[];for(let t=4;t<=Xn;t++){let n=Rl(t/mi,i*Tn);n.z+=.009,e.push(n)}Eo(e,.033,new gt({color:1513752}),kn)}var Om=[],kd=es(16061736,.36);kd.emissive.set(12127514);kd.emissiveIntensity=.12;var xl={headYaw:0,gazeYaw:0,gazePitch:0},bd=new w,uo=new w,rm=new w,$M=new w(0,1,0),om=new pt;for(let i of[-1,1]){let e=i*.42-.09,t=1.84+(i===-1?.045:0),n=Pm(e,t)+.044,s=new Se;s.position.set(e,t,n),kn.add(s),Om.push(s),ks(s,es(1052693,.25),[0,0,0],[.156,.156,.075]),ks(s,kd,[0,0,.055],[.084,.084,.029]),ks(s,es(657676,.32),[0,0,.074],[.039,.039,.016])}var yo=new Se;yo.name="Red bow tie";yo.position.set(Pd,.4,Pm(Pd,.4)+.065);yr.add(yo);var zm=new kt({color:13046566,roughness:.76,sheen:.55,sheenColor:15747667,sheenRoughness:.82}),Ws=new Et;Ws.moveTo(.055,.065);Ws.bezierCurveTo(.18,.085,.32,.185,.43,.19);Ws.quadraticCurveTo(.49,.19,.485,.12);Ws.bezierCurveTo(.47,.03,.5,-.075,.48,-.14);Ws.quadraticCurveTo(.47,-.195,.4,-.175);Ws.bezierCurveTo(.27,-.14,.15,-.07,.055,-.06);Ws.closePath();var KM=new rn(Ws,{depth:.055,bevelEnabled:!0,bevelSize:.018,bevelThickness:.018,bevelSegments:3,steps:1,curveSegments:18});for(let i of[-1,1]){let e=Hn(KM,zm,yo);e.scale.x=i,e.rotation.y=-i*.1;let t=es(9965598,.9);for(let n of[-1,1])Eo([[i*.09,n*.026,.08],[i*.19,n*.055,.087],[i*.34,n*.11,.088]],.005,t,yo)}var Bm=Hn(new qt(1,24,16),zm,yo);Bm.position.set(0,0,.07);Bm.scale.set(.105,.12,.075);var Vd=.26,fo=-.53*Vd+.0036;ki.scale.setScalar(Vd);var yl=new Zt([[2.45,fo,-2.4],[2.05,fo,-1.7],[1.05,fo,-1.28],[.35,fo,-1.1],[.24,fo,-.66],[.12,fo,.1]].map(i=>new w(...i)),!1,"centripetal");yl.arcLengthDivisions=240;var JM=yl.getLength(),ll=new w,Td=new w,zs=document.querySelector("#figsaw-dialogue"),km=document.querySelector("#dialogue-announcement"),Vm=document.querySelector("#game-countdown"),fl=document.querySelector("#countdown-announcement"),ga=null,Ld=300,am=["I want to play a game...","Those who don't appreciate design do not deserve it.","Let the games begin..."],Gd=-1,Wd=1/0,hl=new w,gr=new w,ul=new ha,Rd=new w,Gm=0,po=!1,cm=0,lm=!1,Dd=0,Xd=null;function Wm(i){let e=am[i];Gd=i,zs.querySelector(".dialogue-bubble span").textContent=e,km.textContent=`Figsaw. ${e}`;let t=Z0(e,je.time);Xd=bi?null:t,Wd=i<am.length-1?t.startTime+t.duration+1:1/0,i===0&&(ga=t.startTime+t.duration)}function Xm(i){let e=i-Gm-1,t=bi?1:Je.smoothstep(e,0,8.5);yl.getPointAt(t,ll),yl.getTangentAt(t,Td),ki.position.copy(ll),ki.rotation.y=Math.atan2(Td.x,Td.z);let n=Math.atan2(Bs.x-ll.x,Bs.z-ll.z),s=Je.euclideanModulo(n-ki.rotation.y+Math.PI,Math.PI*2)-Math.PI;VM(t*JM/Vd),t===1&&!po&&(po=!0,cm=i,Jn.start(je.time,zn,je),Wm(0)),f0(po?i-cm:-1,bi,xl),kn.rotation.y=Je.clamp(s*.58,-.7,.7)+xl.headYaw}Xm(0);Sa.mark("characterBuilt");var{group:wa,laptop:Vi,catMug:ba,acidLeaks:Bn,chargingKit:Gi,ketchupKey:ji,countdown:xa,setDisplayEnvironment:QM,update:jM,figpalHoists:gs,toggleHoist:eE}=O0(Rn,Bs);gi.add(wa);Sa.mark("officeBuilt");var Jt=q0(Qt,{canDetach:()=>ji.hasKey});gi.add(Jt.group);var Qn=Q0({laptop:Vi,restraint:Jt,cameraPosition:zn,state:je}),An=j0({mug:ba,camera:Qt,restraint:Jt}),Ma=document.querySelector("#game-over"),qm=Ma.querySelector(".game-over-content"),Ym=document.querySelector("#restart-game"),qn=!1;Ym.addEventListener("click",()=>{Ud(),mt.focus({preventScroll:!0})});var Ai=document.querySelector("#restraint-status"),pl=document.querySelector("#charging-hint"),vo=null,_o=null,mo="",Al=0,xs=Y0(()=>{if(!ji.hasKey){ya("The shackle is locked. Find its key first.");return}Jt.detach(je.time)&&(Ai.textContent="Instance detached. Your wrist is free. You can open the laptop, drink from the cat mug, or turn a tank drain valve.",mt.classList.remove("over-chain"),mt.setAttribute("aria-label",mt.getAttribute("aria-label").replace("Your wrist is chained to the rear pipes. Pour the glass ketchup bottle beside the cat mug, collect the key, then click or right-click the shackle and choose Detach instance to free your hand.","Your wrist is free. Click the laptop, cat mug, or a red tank drain valve to use it.")))},{canDetach:()=>ji.hasKey,onBlocked:()=>ya("The shackle is locked. Find its key first.")}),vl=B0(gs),xr=k0(gs.speechAnchors,mt,gs.canSpeak),Zm=z0(gs,xr),$m=l0(Rn);QM($m.texture);Jt.setEnvironment($m.texture);Bn.bindTargets([wa,ki]);c0(wa,{exclude:[Vi.object,ba,gs.group,xa.group,Gi.group,ji.group]});Sa.mark("scenePrepared");function tE(i){if(!po||vl.active){zs.hidden=!0;return}kn.localToWorld(hl.set(-.28,Tl+.24,0)),gr.copy(hl).project(Qt);let e=Math.min(.7,.4/(Qt.position.distanceTo(hl)*Math.tan(Je.degToRad(Qt.fov/2))*Qt.aspect));if(gr.z<-1||gr.z>1||Math.abs(gr.x)>1+e||Math.abs(gr.y)>1){zs.hidden=!0;return}if(i>=Dd){Dd=i+.12,Rd.copy(hl).sub(Qt.position);let r=Rd.length();ul.set(Qt.position,Rd.normalize()),ul.near=.06,ul.far=Math.max(.06,r-.035),lm=ul.intersectObject(wa,!0).length>0}if(lm){zs.hidden=!0;return}zs.hidden=!1;let t=mt.getBoundingClientRect(),n=t.left+(gr.x*.5+.5)*t.width,s=t.top+(-gr.y*.5+.5)*t.height;zs.style.transform=`translate3d(${n}px,${s-8}px,0) translate(-50%,-100%)`}var hm=new ha,um=new Ne;function qd(i){let e=mt.getBoundingClientRect();um.set((i.clientX-e.left)/e.width*2-1,-(i.clientY-e.top)/e.height*2+1),hm.setFromCamera(um,Qt);let t=hm.intersectObjects([wa,ki,Jt.group],!0).find(n=>{for(let s=n.object;s;s=s.parent)if(!s.visible)return!1;return!0});for(let n=t?.object;n;n=n.parent)if(n===Jt.target||n===Vi.object||n===ba||n===kn||n.userData.chargingAction||n.userData.keyAction||Number.isInteger(n.userData.valveIndex)||Number.isInteger(n.userData.hoistIndex))return n;return null}function ya(i){mo=i,Al=je.time+4.5,Ai.textContent=i}function nE(i){Qn.active||An.active||qn||Bn.dying||(Jn.cancel(),pi=!1,i==="pour"?ji.pour(je.time)?ya("You tip the bottle. Something metal is sliding through the ketchup\u2026"):ya(ji.hint("pour")):i==="collect"&&ji.collect()&&(ya("Shackle key collected. Click your shackle and choose Detach instance."),Jt.requestReach(je.time)))}function Yd(i){!i||Qn.active||An.active||qn||Bn.dying||(Jt.locked&&Jt.requestReach(je.time),i==="charger"&&Gi.phase==="drawer"&&!Gi.drawerReady&&!Jt.locked?mo="Let the drawer finish opening.":mo=Gi.use(i,je.time,Jt.locked),Al=je.time+3.8,Ai.textContent=mo,Jn.cancel(),pi=!1)}function iE(){let i=je.time<Al?mo:vo?ji.hint(vo):_o?Gi.hint(_o):ji.hasKey&&Jt.locked?"Shackle key collected \xB7 Click the shackle to unlock":Gi.hint(null);pl.textContent!==i&&(pl.textContent=i),pl.hidden=!i||qn||An.active||Qn.active}function Km(){if(!(Qn.active||An.active||qn||Bn.dying)){if(Jt.locked){Jt.requestReach(je.time),Ai.textContent="The chain pulls tight. You can't reach the laptop.";return}if(Gi.phase==="powered"){Yd("laptop");return}if(Vi.isOpen){Jm();return}Qn.start(je.time)&&(Xs(),Jn.cancel(),pi=!1,Ai.textContent="You reach for the front edge of the laptop.")}}function Jm(i=!1){!i&&!Vi.open()||(Ai.textContent="You lift the lid and let go. The laptop is open.",mt.classList.remove("over-laptop"),mt.setAttribute("aria-label",mt.getAttribute("aria-label").replace("a closed MacBook Pro","an open MacBook Pro").replace(" Click the laptop or press Enter to open it.","")))}function Qm(){if(!(Qn.active||An.active||qn||Bn.dying)){if(Jt.locked){Jt.requestReach(je.time),Ai.textContent="The chain pulls tight. Detach the shackle before picking up the mug.";return}An.start(je.time)&&(Xs(),Jn.cancel(),pi=!1,xs.hide(),mt.classList.remove("over-mug"),Ai.textContent="You pick up the cat mug by its handle and raise it for a drink.")}}function jm(i){if(!(Qn.active||An.active||qn||Bn.dying)){if(Jt.locked){Jt.requestReach(je.time),Ai.textContent="The chain pulls tight. Detach the shackle before turning a tank valve.";return}Bn.open(i,je.time,Jt.locked)&&(Jn.cancel(),pi=!1,xs.hide(),Ai.textContent=`Tank ${i+1}'s valve spins open. Bubbling acid spills onto the floor and starts eating through everything it touches.`)}}function sE(){let i=0,e=1/0,t=new w;return gs.valves.forEach((n,s)=>{n.object.getWorldPosition(t);let r=t.distanceToSquared(zn);r<e&&(e=r,i=s)}),i}function dm(i){qn||(qn=!0,Xs(),xs.hide(),zs.hidden=!0,xr.hide(),document.body.classList.add("game-over"),mt.inert=!0,qm.hidden=!1,Ym.focus({preventScroll:!0}),Ai.textContent=i)}function eg(i){if(An.active||qn||Bn.dying)return;let e=eE(i);if(!e)return;let t=gs.isLowered(i);t?xr.show(i,je.time):xr.hide(i),document.querySelector("#hoist-status").textContent=t&&gs.canSpeak(i)?`${e} ${fa[i]}`:e}var pi=!1,Ci=null,ml=null,_l=0,rE=new Set(["KeyW","KeyA","KeyS","KeyD","KeyE","KeyQ"]),Bi=new Set,go=i=>Je.euclideanModulo(i+Math.PI,Math.PI*2)-Math.PI;function Ud(){El(),ji.reset(),vo=null,Gi.reset(),_o=null,mo="",Al=0,pl.hidden=!0,qn=!1,Bn.reset(),An.reset(),Ma.hidden=!0,Ma.style.opacity="0",qm.hidden=!0,document.body.classList.remove("game-over","mug-impact"),mt.inert=!1,Qn.cancel(),Jn.cancel(),Jt.reset(),Vi.close(),xs.hide(),Ai.textContent="",mt.setAttribute("aria-label",HM),vl.reset(),xr.hide(),Zm.reset(je.time),Bi.clear(),pi=!0,Gm=je.time,po=!1,zs.hidden=!0,km.textContent="",Xd=null,Gd=-1,Wd=1/0,je.talkUntil=0,Dd=0,ga=null,xa.reset(),Ld=300,Vm.textContent="05:00",fl.textContent=""}function Xs(){Bi.clear(),je.space=!1,Ci=null}document.addEventListener("keydown",i=>{if(qn){i.code==="KeyR"&&!i.repeat&&(i.preventDefault(),Ud(),mt.focus({preventScroll:!0}));return}if((Qn.active||An.active||Bn.dying)&&i.code!=="KeyR"){i.preventDefault();return}if(!xs.active&&!(i.target.closest('input,textarea,select,[contenteditable="true"]')||i.metaKey||i.ctrlKey||i.altKey)){if(rE.has(i.code)){i.preventDefault(),Jn.cancel(),Bi.add(i.code),pi=!1;return}i.target.closest("button")&&(i.code==="Space"||i.code==="Enter")||(i.code==="Enter"&&i.target===mt&&(i.preventDefault(),Km()),i.code==="KeyF"&&i.target===mt&&!i.repeat&&(i.preventDefault(),Yd(Gi.nextAction)),i.code==="KeyM"&&i.target===mt&&!i.repeat&&(i.preventDefault(),Qm()),i.code==="KeyV"&&i.target===mt&&!i.repeat&&(i.preventDefault(),jm(sE())),/^Digit[1-3]$/.test(i.code)&&i.target===mt&&!i.repeat&&(i.preventDefault(),eg(Number(i.code.slice(-1))-1)),i.code==="Space"&&(i.preventDefault(),je.space=!0),i.code==="KeyR"&&!i.repeat&&Ud(),i.code.startsWith("Arrow")&&(i.preventDefault(),Jn.cancel(),pi=!1,i.code==="ArrowLeft"&&(je.yaw=go(je.yaw+.08)),i.code==="ArrowRight"&&(je.yaw=go(je.yaw-.08)),i.code==="ArrowUp"&&(je.pitch=Je.clamp(je.pitch+.05,-1.4,1.4)),i.code==="ArrowDown"&&(je.pitch=Je.clamp(je.pitch-.05,-1.4,1.4))))}});document.addEventListener("keyup",i=>{Bi.delete(i.code),i.code==="Space"&&(je.space=!1)});window.addEventListener("blur",Xs);document.addEventListener("visibilitychange",()=>{document.hidden&&Xs()});mt.addEventListener("contextmenu",i=>{i.preventDefault(),Xs(),!(An.active||qn||Bn.dying)&&(Jt.locked&&qd(i)===Jt.target?xs.show(i.clientX,i.clientY):xs.hide())});mt.addEventListener("pointerdown",i=>{Qn.active||An.active||qn||Bn.dying||i.button===0&&Ci===null&&(mt.focus({preventScroll:!0}),Ci=i.pointerId,pi=!1,_l=0,ml={x:i.clientX,y:i.clientY},mt.setPointerCapture(i.pointerId))});mt.addEventListener("pointermove",i=>{if(Qn.active||An.active||qn||Bn.dying)return;if(Ci===null){let n=qd(i);vo=n?.userData.keyAction||null,mt.classList.toggle("over-key",!!vo),_o=n?.userData.chargingAction||(n===Vi.object&&Gi.phase==="powered"?"laptop":null),mt.classList.toggle("over-charging",!!_o),mt.classList.toggle("over-laptop",n===Vi.object&&!Vi.isOpen),mt.classList.toggle("over-hoist",Number.isInteger(n?.userData.hoistIndex)),mt.classList.toggle("over-mug",n===ba),mt.classList.toggle("over-valve",Number.isInteger(n?.userData.valveIndex)),mt.classList.toggle("over-chain",n===Jt.target&&Jt.locked);return}if(i.pointerId!==Ci)return;let e=i.clientX-ml.x,t=i.clientY-ml.y;_l+=Math.abs(e)+Math.abs(t),_l>=6&&Jn.cancel(),je.yaw=go(je.yaw-e*.004),je.pitch=Je.clamp(je.pitch+t*.003,-1.4,1.4),ml={x:i.clientX,y:i.clientY}});mt.addEventListener("pointerup",i=>{if(i.pointerId===Ci&&(Ci=null,_l<6)){let e=qd(i);e?.userData.keyAction?nE(e.userData.keyAction):e===Jt.target&&Jt.locked?xs.show(i.clientX,i.clientY):e?.userData.chargingAction?Yd(e.userData.chargingAction):e===Vi.object?Km():e===ba?Qm():Number.isInteger(e?.userData.valveIndex)?jm(e.userData.valveIndex):e===kn?je.talkUntil=je.time+1.8:Number.isInteger(e?.userData.hoistIndex)&&eg(e.userData.hoistIndex)}});mt.addEventListener("pointerleave",()=>{vo=null,_o=null,mt.classList.remove("over-key","over-laptop","over-hoist","over-chain","over-mug","over-valve","over-charging")});mt.addEventListener("pointercancel",i=>{i.pointerId===Ci&&(Ci=null)});mt.addEventListener("lostpointercapture",i=>{i.pointerId===Ci&&(Ci=null)});mt.addEventListener("wheel",i=>{i.preventDefault(),!(Qn.active||An.active||qn||Bn.dying)&&(Jn.cancel(),pi=!1,je.zoom=Je.clamp(je.zoom+i.deltaY*5e-4,.78,1))},{passive:!1});var Cl=document.querySelector("#copy-view"),fm=Cl.querySelector("span"),pm=document.querySelector("#copy-status"),Hd=document.querySelector("#copy-fallback"),Ad=document.querySelector("#view-text"),mm;function oE(){let i=n=>n.toArray().map(s=>Number(s.toFixed(6))),e=Qt.getWorldDirection(new w),t={position:i(Qt.position),lookAt:i(Qt.position.clone().add(e)),fov:Number(Qt.fov.toFixed(4))};return`Set this as the default camera view for Figsaw:
${JSON.stringify(t,null,2)}`}function aE(i){let e=document.createElement("textarea");e.value=i,e.readOnly=!0,e.style.cssText="position:fixed;left:-9999px;top:0;font-size:16px",document.body.append(e),e.focus(),e.select(),e.setSelectionRange(0,i.length);let t=!1;try{t=document.execCommand("copy")}catch{}return e.remove(),Cl.focus({preventScroll:!0}),t}Cl.addEventListener("click",async()=>{let i=oE();Ad.value=i,clearTimeout(mm);let e=!1;try{navigator.clipboard?.writeText&&(await navigator.clipboard.writeText(i),e=!0)}catch{}e||(e=aE(i)),e?(Hd.hidden=!0,fm.textContent="Copied",pm.textContent="View copied. Paste it into the chat to set the default view."):(Hd.hidden=!1,Ad.focus(),Ad.select(),pm.textContent="Select and copy the view below, then paste it into the chat."),mm=setTimeout(()=>{fm.textContent="Copy view"},2200)});document.querySelector("#close-copy").addEventListener("click",()=>{Hd.hidden=!0,Cl.focus()});function Zd(){let{width:i,height:e}=mt.getBoundingClientRect();!i||!e||(Rn.setSize(i,e,!1),Qt.aspect=i/e,Qt.fov=Mo.fov*je.zoom,Qt.updateProjectionMatrix())}var cE=new ResizeObserver(Zd);cE.observe(mt);Zd();var Ml=new $c,tg=!1,Ea=0,ma=0,gm=-1/0,xm=0,Cd=0,dl=0;function El(){tg&&!Ea&&!document.hidden&&(Ea=requestAnimationFrame(ng))}document.addEventListener("visibilitychange",()=>{document.hidden?(cancelAnimationFrame(Ea),Ea=0,Xs()):(ma=0,Ml.getDelta(),El())});function ng(){if(Ea=0,document.hidden)return;if(qn){Ml.getDelta();return}let i=performance.now(),e=ma?i-ma:0;if(ma&&e<1e3/Lt.maxFps-1){El();return}ma=i;let t=Math.min(Ml.getDelta(),.04),n=je.time+=t,s=1-Math.exp(-t*12);pi&&(je.yaw=go(je.yaw+go(Os.yaw-je.yaw)*s*.5),je.pitch=Ti(je.pitch,Os.pitch,s*.5),je.zoom=Ti(je.zoom,1,s*.5),zn.lerp(Bs,s*.5),Math.abs(go(je.yaw-Os.yaw))+Math.abs(je.pitch-Os.pitch)+Math.abs(je.zoom-1)+zn.distanceTo(Bs)<.005&&(je.yaw=Os.yaw,je.pitch=Os.pitch,je.zoom=1,zn.copy(Bs),pi=!1)),Xm(n),po&&n>=Wd&&Wm(Gd+1),Jn.active&&(pi=!1),(Bi.size||Ci!==null)&&Jn.cancel(),(Qn.active||An.active)&&Jn.cancel(),Jn.update(n,zn,je,bi),Qn.update(n,bi)&&Jm(!0);let r=je.yaw,o=Number(Bi.has("KeyW"))-Number(Bi.has("KeyS")),a=Number(Bi.has("KeyD"))-Number(Bi.has("KeyA")),c=Number(Bi.has("KeyE"))-Number(Bi.has("KeyQ"));Sd.set(-Math.sin(r)*o+Math.cos(r)*a,c,-Math.cos(r)*o-Math.sin(r)*a),Sd.lengthSq()>0&&(zn.addScaledVector(Sd.normalize(),t*1.05),zn.x=Je.clamp(zn.x,-3.72,3.72),zn.y=Je.clamp(zn.y,.08,3),zn.z=Je.clamp(zn.z,-3.78,4.25)),Qt.position.copy(zn),tm.set(-Math.sin(r)*Math.cos(je.pitch),Math.sin(je.pitch),-Math.cos(r)*Math.cos(je.pitch)),em.copy(zn).add(tm),Qt.lookAt(em);let l=Mo.fov*je.zoom;Math.abs(Qt.fov-l)>.001&&(Qt.fov=l,Qt.updateProjectionMatrix()),ga!==null&&n>=ga&&(xa.start(),ga=null,fl.textContent="The five-minute countdown has started.");let h=xa.update();h!==Ld&&(Vm.textContent=ol(h),Ld=h,h===0&&(fl.textContent="The countdown has reached zero.")),vl.update(xa.status,n)&&(xr.showAll(n),fl.textContent=`Time is up. All three Figpals are lowering into the green liquid. ${fa.filter((y,M)=>gs.canSpeak(M)).join(" ")}`);let p=$0(Xd,n),f=n<je.talkUntil?.16+.7*Math.sin(n*10)**2:0,d=je.space?1:Math.max(p,f);je.jaw=Ti(je.jaw,d,s),yr.position.y=-je.jaw*im,kn.position.y=Am+je.jaw*im*Rm;let g=Bn.update(n,t,zn,Qt,bi);Bn.dying&&Xs();let x=An.update(n,bi),m=Math.max(An.blackout,Bn.blackout(n));m>0&&(Ma.hidden=!1,Ma.style.opacity=String(m),document.body.classList.add("mug-impact")),g?dm("The corrosive green liquid reaches you. Game over."):x&&dm("The mug's pointed ears hit your eyes. Everything goes dark. Game over."),Jt.update(n,bi,xs.active||An.active,An.handPose||Qn.handPose),Vi.update(t,bi),Gi.update(n,bi),iE(),Wi.intensity=ym*jM(n,bi,Qt.position),ki.updateMatrixWorld(!0),kn.localToWorld(bd.set(-.09,1.86,1)),uo.copy(Qt.position).sub(bd);let u=Math.max(1,uo.length());uo.normalize().applyAxisAngle($M,xl.gazeYaw),uo.y+=xl.gazePitch,uo.normalize(),rm.copy(bd).addScaledVector(uo,u);for(let y of Om)om.copy(y.quaternion),y.lookAt(rm),bi||y.quaternion.copy(om.slerp(y.quaternion,1-Math.exp(-t*16)));n-gm>=1/Lt.shadowHz&&(Rn.shadowMap.needsUpdate=!0,gm=n),Rn.render(gi,Qt),tE(n),Zm.update(n,vl.active),xr.update(Qt,n),Sa.frame(i);let E=performance.now()-i;dl++,(E>Lt.targetFrameMs||e>Lt.targetFrameMs*1.4)&&Cd++,n-xm>4&&(dl>30&&Cd/dl>.65&&Rn.getPixelRatio()>Lt.minPixelRatio&&(Rn.setPixelRatio(Math.max(Lt.minPixelRatio,Rn.getPixelRatio()-.25)),Zd()),xm=n,Cd=0,dl=0),El()}Rn.compileAsync(gi,Qt).then(()=>{Sa.mark("shadersReady"),tg=!0,Ml.getDelta(),ng(),document.querySelector("#loading-status")?.remove()}).catch(i=>{console.error(i);let e=document.querySelector("#loading-status");e&&(e.textContent="The room could not load. Please reload to try again.")});mt.addEventListener("webglcontextlost",i=>i.preventDefault());mt.addEventListener("webglcontextrestored",()=>location.reload());
