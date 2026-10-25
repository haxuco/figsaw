var Ug=0,Tf=1,Ng=2;var Bp=1,Ju=2,ls=3,Qi=0,mn=1,Ut=2,Cs=0,kr=1,_c=2,Rf=3,Af=4,Hg=5,er=100,Fg=101,Og=102,Bg=103,zg=104,kg=200,Vg=201,Gg=202,Wg=203,Ph=204,Ih=205,Xg=206,qg=207,Yg=208,Zg=209,$g=210,Kg=211,Jg=212,Qg=213,jg=214,Lh=0,Dh=1,Uh=2,Xr=3,Nh=4,Hh=5,Fh=6,Oh=7,zp=0,e1=1,t1=2,Ps=0,n1=1,i1=2,s1=3,Qu=4,r1=5,o1=6,a1=7;var kp=300,qr=301,Yr=302,Ko=303,Bh=304,Jc=306,sr=1e3,ir=1001,zh=1002,Wn=1003,c1=1004;var za=1005;var En=1006,$l=1007;var zi=1008;var us=1009,Vp=1010,Gp=1011,Jo=1012,ju=1013,rr=1014,Ji=1015,ha=1016,ed=1017,td=1018,Zr=1020,Wp=35902,Xp=1021,qp=1022,ui=1023,Yp=1024,Zp=1025,Vr=1026,$r=1027,ua=1028,nd=1029,$p=1030,id=1031;var sd=1033,pc=33776,mc=33777,gc=33778,xc=33779,kh=35840,Vh=35841,Gh=35842,Wh=35843,Xh=36196,qh=37492,Yh=37496,Zh=37808,$h=37809,Kh=37810,Jh=37811,Qh=37812,jh=37813,eu=37814,tu=37815,nu=37816,iu=37817,su=37818,ru=37819,ou=37820,au=37821,yc=36492,cu=36494,lu=36495,Kp=36283,hu=36284,uu=36285,du=36286;var Mc=2300,fu=2301,Kl=2302,Cf=2400,Pf=2401,If=2402;var l1=3200,rd=3201;var od=0,h1=1,As="",ft="srgb",Hs="srgb-linear",ad="display-p3",Qc="display-p3-linear",Ec="linear",nn="srgb",Sc="rec709",bc="p3";var Sr=7680;var Lf=519,u1=512,d1=513,f1=514,Jp=515,p1=516,m1=517,g1=518,x1=519,Df=35044,fi=35048;var Uf="300 es",hs=2e3,wc=2001,Ls=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let s=this._listeners[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let n=this._listeners[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},Vn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Nf=1234567,Xo=Math.PI/180,Kr=180/Math.PI;function hr(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Vn[i&255]+Vn[i>>8&255]+Vn[i>>16&255]+Vn[i>>24&255]+"-"+Vn[e&255]+Vn[e>>8&255]+"-"+Vn[e>>16&15|64]+Vn[e>>24&255]+"-"+Vn[t&63|128]+Vn[t>>8&255]+"-"+Vn[t>>16&255]+Vn[t>>24&255]+Vn[n&255]+Vn[n>>8&255]+Vn[n>>16&255]+Vn[n>>24&255]).toLowerCase()}function Mn(i,e,t){return Math.max(e,Math.min(t,i))}function cd(i,e){return(i%e+e)%e}function y1(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function v1(i,e,t){return i!==e?(t-i)/(e-i):0}function qo(i,e,t){return(1-t)*i+t*e}function _1(i,e,t,n){return qo(i,e,1-Math.exp(-t*n))}function M1(i,e=1){return e-Math.abs(cd(i,e*2)-e)}function E1(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function S1(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function b1(i,e){return i+Math.floor(Math.random()*(e-i+1))}function w1(i,e){return i+Math.random()*(e-i)}function T1(i){return i*(.5-Math.random())}function R1(i){i!==void 0&&(Nf=i);let e=Nf+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function A1(i){return i*Xo}function C1(i){return i*Kr}function P1(i){return(i&i-1)===0&&i!==0}function I1(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function L1(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function D1(i,e,t,n,s){let r=Math.cos,o=Math.sin,a=r(t/2),c=o(t/2),l=r((e+n)/2),h=o((e+n)/2),f=r((e-n)/2),m=o((e-n)/2),u=r((n-e)/2),g=o((n-e)/2);switch(s){case"XYX":i.set(a*h,c*f,c*m,a*l);break;case"YZY":i.set(c*m,a*h,c*f,a*l);break;case"ZXZ":i.set(c*f,c*m,a*h,a*l);break;case"XZX":i.set(a*h,c*g,c*u,a*l);break;case"YXY":i.set(c*u,a*h,c*g,a*l);break;case"ZYZ":i.set(c*g,c*u,a*h,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Or(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Zn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var je={DEG2RAD:Xo,RAD2DEG:Kr,generateUUID:hr,clamp:Mn,euclideanModulo:cd,mapLinear:y1,inverseLerp:v1,lerp:qo,damp:_1,pingpong:M1,smoothstep:E1,smootherstep:S1,randInt:b1,randFloat:w1,randFloatSpread:T1,seededRandom:R1,degToRad:A1,radToDeg:C1,isPowerOfTwo:P1,ceilPowerOfTwo:I1,floorPowerOfTwo:L1,setQuaternionFromProperEuler:D1,normalize:Zn,denormalize:Or},He=class i{constructor(e=0,t=0){i.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Mn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},xt=class i{constructor(e,t,n,s,r,o,a,c,l){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,c,l)}set(e,t,n,s,r,o,a,c,l){let h=this.elements;return h[0]=e,h[1]=s,h[2]=a,h[3]=t,h[4]=r,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],f=n[7],m=n[2],u=n[5],g=n[8],x=s[0],p=s[3],d=s[6],E=s[1],v=s[4],M=s[7],L=s[2],A=s[5],T=s[8];return r[0]=o*x+a*E+c*L,r[3]=o*p+a*v+c*A,r[6]=o*d+a*M+c*T,r[1]=l*x+h*E+f*L,r[4]=l*p+h*v+f*A,r[7]=l*d+h*M+f*T,r[2]=m*x+u*E+g*L,r[5]=m*p+u*v+g*A,r[8]=m*d+u*M+g*T,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8];return t*o*h-t*a*l-n*r*h+n*a*c+s*r*l-s*o*c}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],f=h*o-a*l,m=a*c-h*r,u=l*r-o*c,g=t*f+n*m+s*u;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/g;return e[0]=f*x,e[1]=(s*l-h*n)*x,e[2]=(a*n-s*o)*x,e[3]=m*x,e[4]=(h*t-s*c)*x,e[5]=(s*r-a*t)*x,e[6]=u*x,e[7]=(n*c-l*t)*x,e[8]=(o*t-n*r)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+e,-s*l,s*c,-s*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Jl.makeScale(e,t)),this}rotate(e){return this.premultiply(Jl.makeRotation(-e)),this}translate(e,t){return this.premultiply(Jl.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Jl=new xt;function Qp(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Qo(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function U1(){let i=Qo("canvas");return i.style.display="block",i}var Hf={};function vc(i){i in Hf||(Hf[i]=!0,console.warn(i))}function N1(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}function H1(i){let e=i.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function F1(i){let e=i.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}var Ff=new xt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Of=new xt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),No={[Hs]:{transfer:Ec,primaries:Sc,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i,fromReference:i=>i},[ft]:{transfer:nn,primaries:Sc,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[Qc]:{transfer:Ec,primaries:bc,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.applyMatrix3(Of),fromReference:i=>i.applyMatrix3(Ff)},[ad]:{transfer:nn,primaries:bc,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.convertSRGBToLinear().applyMatrix3(Of),fromReference:i=>i.applyMatrix3(Ff).convertLinearToSRGB()}},O1=new Set([Hs,Qc]),Vt={enabled:!0,_workingColorSpace:Hs,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!O1.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;let n=No[e].toReference,s=No[t].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this._workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this._workingColorSpace)},getPrimaries:function(i){return No[i].primaries},getTransfer:function(i){return i===As?Ec:No[i].transfer},getLuminanceCoefficients:function(i,e=this._workingColorSpace){return i.fromArray(No[e].luminanceCoefficients)}};function Gr(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ql(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var br,pu=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{br===void 0&&(br=Qo("canvas")),br.width=e.width,br.height=e.height;let n=br.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=br}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Qo("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Gr(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Gr(t[n]/255)*255):t[n]=Gr(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},B1=0,Tc=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:B1++}),this.uuid=hr(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(jl(s[o].image)):r.push(jl(s[o]))}else r=jl(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function jl(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?pu.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var z1=0,Kn=class i extends Ls{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=ir,s=ir,r=En,o=zi,a=ui,c=us,l=i.DEFAULT_ANISOTROPY,h=As){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:z1++}),this.uuid=hr(),this.name="",this.source=new Tc(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new He(0,0),this.repeat=new He(1,1),this.center=new He(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new xt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==kp)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case sr:e.x=e.x-Math.floor(e.x);break;case ir:e.x=e.x<0?0:1;break;case zh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case sr:e.y=e.y-Math.floor(e.y);break;case ir:e.y=e.y<0?0:1;break;case zh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Kn.DEFAULT_IMAGE=null;Kn.DEFAULT_MAPPING=kp;Kn.DEFAULT_ANISOTROPY=1;var Yt=class i{constructor(e=0,t=0,n=0,s=1){i.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,c=e.elements,l=c[0],h=c[4],f=c[8],m=c[1],u=c[5],g=c[9],x=c[2],p=c[6],d=c[10];if(Math.abs(h-m)<.01&&Math.abs(f-x)<.01&&Math.abs(g-p)<.01){if(Math.abs(h+m)<.1&&Math.abs(f+x)<.1&&Math.abs(g+p)<.1&&Math.abs(l+u+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let v=(l+1)/2,M=(u+1)/2,L=(d+1)/2,A=(h+m)/4,T=(f+x)/4,C=(g+p)/4;return v>M&&v>L?v<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(v),s=A/n,r=T/n):M>L?M<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(M),n=A/s,r=C/s):L<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(L),n=T/r,s=C/r),this.set(n,s,r,t),this}let E=Math.sqrt((p-g)*(p-g)+(f-x)*(f-x)+(m-h)*(m-h));return Math.abs(E)<.001&&(E=1),this.x=(p-g)/E,this.y=(f-x)/E,this.z=(m-h)/E,this.w=Math.acos((l+u+d-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},mu=class extends Ls{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Yt(0,0,e,t),this.scissorTest=!1,this.viewport=new Yt(0,0,e,t);let s={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:En,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let r=new Kn(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,s=e.textures.length;n<s;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new Tc(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},ds=class extends mu{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Rc=class extends Kn{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Wn,this.minFilter=Wn,this.wrapR=ir,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var gu=class extends Kn{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Wn,this.minFilter=Wn,this.wrapR=ir,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var yt=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let c=n[s+0],l=n[s+1],h=n[s+2],f=n[s+3],m=r[o+0],u=r[o+1],g=r[o+2],x=r[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=h,e[t+3]=f;return}if(a===1){e[t+0]=m,e[t+1]=u,e[t+2]=g,e[t+3]=x;return}if(f!==x||c!==m||l!==u||h!==g){let p=1-a,d=c*m+l*u+h*g+f*x,E=d>=0?1:-1,v=1-d*d;if(v>Number.EPSILON){let L=Math.sqrt(v),A=Math.atan2(L,d*E);p=Math.sin(p*A)/L,a=Math.sin(a*A)/L}let M=a*E;if(c=c*p+m*M,l=l*p+u*M,h=h*p+g*M,f=f*p+x*M,p===1-a){let L=1/Math.sqrt(c*c+l*l+h*h+f*f);c*=L,l*=L,h*=L,f*=L}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,s,r,o){let a=n[s],c=n[s+1],l=n[s+2],h=n[s+3],f=r[o],m=r[o+1],u=r[o+2],g=r[o+3];return e[t]=a*g+h*f+c*u-l*m,e[t+1]=c*g+h*m+l*f-a*u,e[t+2]=l*g+h*u+a*m-c*f,e[t+3]=h*g-a*f-c*m-l*u,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(s/2),f=a(r/2),m=c(n/2),u=c(s/2),g=c(r/2);switch(o){case"XYZ":this._x=m*h*f+l*u*g,this._y=l*u*f-m*h*g,this._z=l*h*g+m*u*f,this._w=l*h*f-m*u*g;break;case"YXZ":this._x=m*h*f+l*u*g,this._y=l*u*f-m*h*g,this._z=l*h*g-m*u*f,this._w=l*h*f+m*u*g;break;case"ZXY":this._x=m*h*f-l*u*g,this._y=l*u*f+m*h*g,this._z=l*h*g+m*u*f,this._w=l*h*f-m*u*g;break;case"ZYX":this._x=m*h*f-l*u*g,this._y=l*u*f+m*h*g,this._z=l*h*g-m*u*f,this._w=l*h*f+m*u*g;break;case"YZX":this._x=m*h*f+l*u*g,this._y=l*u*f+m*h*g,this._z=l*h*g-m*u*f,this._w=l*h*f-m*u*g;break;case"XZY":this._x=m*h*f-l*u*g,this._y=l*u*f-m*h*g,this._z=l*h*g+m*u*f,this._w=l*h*f+m*u*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],c=t[9],l=t[2],h=t[6],f=t[10],m=n+a+f;if(m>0){let u=.5/Math.sqrt(m+1);this._w=.25/u,this._x=(h-c)*u,this._y=(r-l)*u,this._z=(o-s)*u}else if(n>a&&n>f){let u=2*Math.sqrt(1+n-a-f);this._w=(h-c)/u,this._x=.25*u,this._y=(s+o)/u,this._z=(r+l)/u}else if(a>f){let u=2*Math.sqrt(1+a-n-f);this._w=(r-l)/u,this._x=(s+o)/u,this._y=.25*u,this._z=(c+h)/u}else{let u=2*Math.sqrt(1+f-n-a);this._w=(o-s)/u,this._x=(r+l)/u,this._y=(c+h)/u,this._z=.25*u}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Mn(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+o*a+s*l-r*c,this._y=s*h+o*c+r*a-n*l,this._z=r*h+o*l+n*c-s*a,this._w=o*h-n*a-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,s=this._y,r=this._z,o=this._w,a=o*e._w+n*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;let c=1-a*a;if(c<=Number.EPSILON){let u=1-t;return this._w=u*o+t*this._w,this._x=u*n+t*this._x,this._y=u*s+t*this._y,this._z=u*r+t*this._z,this.normalize(),this}let l=Math.sqrt(c),h=Math.atan2(l,a),f=Math.sin((1-t)*h)/l,m=Math.sin(t*h)/l;return this._w=o*f+this._w*m,this._x=n*f+this._x*m,this._y=s*f+this._y*m,this._z=r*f+this._z*m,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},w=class i{constructor(e=0,t=0,n=0){i.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Bf.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Bf.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*s-a*n),h=2*(a*t-r*s),f=2*(r*n-o*t);return this.x=t+c*l+o*f-a*h,this.y=n+c*h+a*l-r*f,this.z=s+c*f+r*h-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,c=t.z;return this.x=s*c-r*a,this.y=r*o-n*c,this.z=n*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return eh.copy(this).projectOnVector(e),this.sub(eh)}reflect(e){return this.sub(eh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Mn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},eh=new w,Bf=new yt,Ln=class{constructor(e=new w(1/0,1/0,1/0),t=new w(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Fi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Fi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Fi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Fi):Fi.fromBufferAttribute(r,o),Fi.applyMatrix4(e.matrixWorld),this.expandByPoint(Fi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ka.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ka.copy(n.boundingBox)),ka.applyMatrix4(e.matrixWorld),this.union(ka)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Fi),Fi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ho),Va.subVectors(this.max,Ho),wr.subVectors(e.a,Ho),Tr.subVectors(e.b,Ho),Rr.subVectors(e.c,Ho),Es.subVectors(Tr,wr),Ss.subVectors(Rr,Tr),Ys.subVectors(wr,Rr);let t=[0,-Es.z,Es.y,0,-Ss.z,Ss.y,0,-Ys.z,Ys.y,Es.z,0,-Es.x,Ss.z,0,-Ss.x,Ys.z,0,-Ys.x,-Es.y,Es.x,0,-Ss.y,Ss.x,0,-Ys.y,Ys.x,0];return!th(t,wr,Tr,Rr,Va)||(t=[1,0,0,0,1,0,0,0,1],!th(t,wr,Tr,Rr,Va))?!1:(Ga.crossVectors(Es,Ss),t=[Ga.x,Ga.y,Ga.z],th(t,wr,Tr,Rr,Va))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Fi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Fi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ss[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ss[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ss[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ss[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ss[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ss[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ss[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ss[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ss),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},ss=[new w,new w,new w,new w,new w,new w,new w,new w],Fi=new w,ka=new Ln,wr=new w,Tr=new w,Rr=new w,Es=new w,Ss=new w,Ys=new w,Ho=new w,Va=new w,Ga=new w,Zs=new w;function th(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Zs.fromArray(i,r);let a=s.x*Math.abs(Zs.x)+s.y*Math.abs(Zs.y)+s.z*Math.abs(Zs.z),c=e.dot(Zs),l=t.dot(Zs),h=n.dot(Zs);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}var k1=new Ln,Fo=new w,nh=new w,Ds=class{constructor(e=new w,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):k1.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Fo.subVectors(e,this.center);let t=Fo.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Fo,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(nh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Fo.copy(e.center).add(nh)),this.expandByPoint(Fo.copy(e.center).sub(nh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},rs=new w,ih=new w,Wa=new w,bs=new w,sh=new w,Xa=new w,rh=new w,jo=class{constructor(e=new w,t=new w(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,rs)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=rs.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(rs.copy(this.origin).addScaledVector(this.direction,t),rs.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){ih.copy(e).add(t).multiplyScalar(.5),Wa.copy(t).sub(e).normalize(),bs.copy(this.origin).sub(ih);let r=e.distanceTo(t)*.5,o=-this.direction.dot(Wa),a=bs.dot(this.direction),c=-bs.dot(Wa),l=bs.lengthSq(),h=Math.abs(1-o*o),f,m,u,g;if(h>0)if(f=o*c-a,m=o*a-c,g=r*h,f>=0)if(m>=-g)if(m<=g){let x=1/h;f*=x,m*=x,u=f*(f+o*m+2*a)+m*(o*f+m+2*c)+l}else m=r,f=Math.max(0,-(o*m+a)),u=-f*f+m*(m+2*c)+l;else m=-r,f=Math.max(0,-(o*m+a)),u=-f*f+m*(m+2*c)+l;else m<=-g?(f=Math.max(0,-(-o*r+a)),m=f>0?-r:Math.min(Math.max(-r,-c),r),u=-f*f+m*(m+2*c)+l):m<=g?(f=0,m=Math.min(Math.max(-r,-c),r),u=m*(m+2*c)+l):(f=Math.max(0,-(o*r+a)),m=f>0?r:Math.min(Math.max(-r,-c),r),u=-f*f+m*(m+2*c)+l);else m=o>0?-r:r,f=Math.max(0,-(o*m+a)),u=-f*f+m*(m+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(ih).addScaledVector(Wa,m),u}intersectSphere(e,t){rs.subVectors(e.center,this.origin);let n=rs.dot(this.direction),s=rs.dot(rs)-n*n,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,c,l=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,m=this.origin;return l>=0?(n=(e.min.x-m.x)*l,s=(e.max.x-m.x)*l):(n=(e.max.x-m.x)*l,s=(e.min.x-m.x)*l),h>=0?(r=(e.min.y-m.y)*h,o=(e.max.y-m.y)*h):(r=(e.max.y-m.y)*h,o=(e.min.y-m.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),f>=0?(a=(e.min.z-m.z)*f,c=(e.max.z-m.z)*f):(a=(e.max.z-m.z)*f,c=(e.min.z-m.z)*f),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,rs)!==null}intersectTriangle(e,t,n,s,r){sh.subVectors(t,e),Xa.subVectors(n,e),rh.crossVectors(sh,Xa);let o=this.direction.dot(rh),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;bs.subVectors(this.origin,e);let c=a*this.direction.dot(Xa.crossVectors(bs,Xa));if(c<0)return null;let l=a*this.direction.dot(sh.cross(bs));if(l<0||c+l>o)return null;let h=-a*bs.dot(rh);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},St=class i{constructor(e,t,n,s,r,o,a,c,l,h,f,m,u,g,x,p){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,c,l,h,f,m,u,g,x,p)}set(e,t,n,s,r,o,a,c,l,h,f,m,u,g,x,p){let d=this.elements;return d[0]=e,d[4]=t,d[8]=n,d[12]=s,d[1]=r,d[5]=o,d[9]=a,d[13]=c,d[2]=l,d[6]=h,d[10]=f,d[14]=m,d[3]=u,d[7]=g,d[11]=x,d[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,s=1/Ar.setFromMatrixColumn(e,0).length(),r=1/Ar.setFromMatrixColumn(e,1).length(),o=1/Ar.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),f=Math.sin(r);if(e.order==="XYZ"){let m=o*h,u=o*f,g=a*h,x=a*f;t[0]=c*h,t[4]=-c*f,t[8]=l,t[1]=u+g*l,t[5]=m-x*l,t[9]=-a*c,t[2]=x-m*l,t[6]=g+u*l,t[10]=o*c}else if(e.order==="YXZ"){let m=c*h,u=c*f,g=l*h,x=l*f;t[0]=m+x*a,t[4]=g*a-u,t[8]=o*l,t[1]=o*f,t[5]=o*h,t[9]=-a,t[2]=u*a-g,t[6]=x+m*a,t[10]=o*c}else if(e.order==="ZXY"){let m=c*h,u=c*f,g=l*h,x=l*f;t[0]=m-x*a,t[4]=-o*f,t[8]=g+u*a,t[1]=u+g*a,t[5]=o*h,t[9]=x-m*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){let m=o*h,u=o*f,g=a*h,x=a*f;t[0]=c*h,t[4]=g*l-u,t[8]=m*l+x,t[1]=c*f,t[5]=x*l+m,t[9]=u*l-g,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){let m=o*c,u=o*l,g=a*c,x=a*l;t[0]=c*h,t[4]=x-m*f,t[8]=g*f+u,t[1]=f,t[5]=o*h,t[9]=-a*h,t[2]=-l*h,t[6]=u*f+g,t[10]=m-x*f}else if(e.order==="XZY"){let m=o*c,u=o*l,g=a*c,x=a*l;t[0]=c*h,t[4]=-f,t[8]=l*h,t[1]=m*f+x,t[5]=o*h,t[9]=u*f-g,t[2]=g*f-u,t[6]=a*h,t[10]=x*f+m}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(V1,e,G1)}lookAt(e,t,n){let s=this.elements;return li.subVectors(e,t),li.lengthSq()===0&&(li.z=1),li.normalize(),ws.crossVectors(n,li),ws.lengthSq()===0&&(Math.abs(n.z)===1?li.x+=1e-4:li.z+=1e-4,li.normalize(),ws.crossVectors(n,li)),ws.normalize(),qa.crossVectors(li,ws),s[0]=ws.x,s[4]=qa.x,s[8]=li.x,s[1]=ws.y,s[5]=qa.y,s[9]=li.y,s[2]=ws.z,s[6]=qa.z,s[10]=li.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],f=n[5],m=n[9],u=n[13],g=n[2],x=n[6],p=n[10],d=n[14],E=n[3],v=n[7],M=n[11],L=n[15],A=s[0],T=s[4],C=s[8],J=s[12],_=s[1],b=s[5],B=s[9],W=s[13],X=s[2],H=s[6],ee=s[10],Me=s[14],se=s[3],me=s[7],N=s[11],Q=s[15];return r[0]=o*A+a*_+c*X+l*se,r[4]=o*T+a*b+c*H+l*me,r[8]=o*C+a*B+c*ee+l*N,r[12]=o*J+a*W+c*Me+l*Q,r[1]=h*A+f*_+m*X+u*se,r[5]=h*T+f*b+m*H+u*me,r[9]=h*C+f*B+m*ee+u*N,r[13]=h*J+f*W+m*Me+u*Q,r[2]=g*A+x*_+p*X+d*se,r[6]=g*T+x*b+p*H+d*me,r[10]=g*C+x*B+p*ee+d*N,r[14]=g*J+x*W+p*Me+d*Q,r[3]=E*A+v*_+M*X+L*se,r[7]=E*T+v*b+M*H+L*me,r[11]=E*C+v*B+M*ee+L*N,r[15]=E*J+v*W+M*Me+L*Q,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],c=e[9],l=e[13],h=e[2],f=e[6],m=e[10],u=e[14],g=e[3],x=e[7],p=e[11],d=e[15];return g*(+r*c*f-s*l*f-r*a*m+n*l*m+s*a*u-n*c*u)+x*(+t*c*u-t*l*m+r*o*m-s*o*u+s*l*h-r*c*h)+p*(+t*l*f-t*a*u-r*o*f+n*o*u+r*a*h-n*l*h)+d*(-s*a*h-t*c*f+t*a*m+s*o*f-n*o*m+n*c*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],f=e[9],m=e[10],u=e[11],g=e[12],x=e[13],p=e[14],d=e[15],E=f*p*l-x*m*l+x*c*u-a*p*u-f*c*d+a*m*d,v=g*m*l-h*p*l-g*c*u+o*p*u+h*c*d-o*m*d,M=h*x*l-g*f*l+g*a*u-o*x*u-h*a*d+o*f*d,L=g*f*c-h*x*c-g*a*m+o*x*m+h*a*p-o*f*p,A=t*E+n*v+s*M+r*L;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let T=1/A;return e[0]=E*T,e[1]=(x*m*r-f*p*r-x*s*u+n*p*u+f*s*d-n*m*d)*T,e[2]=(a*p*r-x*c*r+x*s*l-n*p*l-a*s*d+n*c*d)*T,e[3]=(f*c*r-a*m*r-f*s*l+n*m*l+a*s*u-n*c*u)*T,e[4]=v*T,e[5]=(h*p*r-g*m*r+g*s*u-t*p*u-h*s*d+t*m*d)*T,e[6]=(g*c*r-o*p*r-g*s*l+t*p*l+o*s*d-t*c*d)*T,e[7]=(o*m*r-h*c*r+h*s*l-t*m*l-o*s*u+t*c*u)*T,e[8]=M*T,e[9]=(g*f*r-h*x*r-g*n*u+t*x*u+h*n*d-t*f*d)*T,e[10]=(o*x*r-g*a*r+g*n*l-t*x*l-o*n*d+t*a*d)*T,e[11]=(h*a*r-o*f*r-h*n*l+t*f*l+o*n*u-t*a*u)*T,e[12]=L*T,e[13]=(h*x*s-g*f*s+g*n*m-t*x*m-h*n*p+t*f*p)*T,e[14]=(g*a*s-o*x*s-g*n*c+t*x*c+o*n*p-t*a*p)*T,e[15]=(o*f*s-h*a*s+h*n*c-t*f*c-o*n*m+t*a*m)*T,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,c=e.z,l=r*o,h=r*a;return this.set(l*o+n,l*a-s*c,l*c+s*a,0,l*a+s*c,h*a+n,h*c-s*o,0,l*c-s*a,h*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,o=t._y,a=t._z,c=t._w,l=r+r,h=o+o,f=a+a,m=r*l,u=r*h,g=r*f,x=o*h,p=o*f,d=a*f,E=c*l,v=c*h,M=c*f,L=n.x,A=n.y,T=n.z;return s[0]=(1-(x+d))*L,s[1]=(u+M)*L,s[2]=(g-v)*L,s[3]=0,s[4]=(u-M)*A,s[5]=(1-(m+d))*A,s[6]=(p+E)*A,s[7]=0,s[8]=(g+v)*T,s[9]=(p-E)*T,s[10]=(1-(m+x))*T,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements,r=Ar.set(s[0],s[1],s[2]).length(),o=Ar.set(s[4],s[5],s[6]).length(),a=Ar.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],Oi.copy(this);let l=1/r,h=1/o,f=1/a;return Oi.elements[0]*=l,Oi.elements[1]*=l,Oi.elements[2]*=l,Oi.elements[4]*=h,Oi.elements[5]*=h,Oi.elements[6]*=h,Oi.elements[8]*=f,Oi.elements[9]*=f,Oi.elements[10]*=f,t.setFromRotationMatrix(Oi),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,s,r,o,a=hs){let c=this.elements,l=2*r/(t-e),h=2*r/(n-s),f=(t+e)/(t-e),m=(n+s)/(n-s),u,g;if(a===hs)u=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===wc)u=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=h,c[9]=m,c[13]=0,c[2]=0,c[6]=0,c[10]=u,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,o,a=hs){let c=this.elements,l=1/(t-e),h=1/(n-s),f=1/(o-r),m=(t+e)*l,u=(n+s)*h,g,x;if(a===hs)g=(o+r)*f,x=-2*f;else if(a===wc)g=r*f,x=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-m,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-u,c[2]=0,c[6]=0,c[10]=x,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Ar=new w,Oi=new St,V1=new w(0,0,0),G1=new w(1,1,1),ws=new w,qa=new w,li=new w,zf=new St,kf=new yt,ni=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],h=s[9],f=s[2],m=s[6],u=s[10];switch(t){case"XYZ":this._y=Math.asin(Mn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,u),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(m,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Mn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,u),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(Mn(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(-f,u),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Mn(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(m,u),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Mn(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(a,u));break;case"XZY":this._z=Math.asin(-Mn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(m,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,u),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return zf.makeRotationFromQuaternion(e),this.setFromRotationMatrix(zf,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return kf.setFromEuler(this),this.setFromQuaternion(kf,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};ni.DEFAULT_ORDER="XYZ";var ea=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},W1=0,Vf=new w,Cr=new yt,os=new St,Ya=new w,Oo=new w,X1=new w,q1=new yt,Gf=new w(1,0,0),Wf=new w(0,1,0),Xf=new w(0,0,1),qf={type:"added"},Y1={type:"removed"},Pr={type:"childadded",child:null},oh={type:"childremoved",child:null},Dt=class i extends Ls{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:W1++}),this.uuid=hr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new w,t=new ni,n=new yt,s=new w(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new St},normalMatrix:{value:new xt}}),this.matrix=new St,this.matrixWorld=new St,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ea,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Cr.setFromAxisAngle(e,t),this.quaternion.multiply(Cr),this}rotateOnWorldAxis(e,t){return Cr.setFromAxisAngle(e,t),this.quaternion.premultiply(Cr),this}rotateX(e){return this.rotateOnAxis(Gf,e)}rotateY(e){return this.rotateOnAxis(Wf,e)}rotateZ(e){return this.rotateOnAxis(Xf,e)}translateOnAxis(e,t){return Vf.copy(e).applyQuaternion(this.quaternion),this.position.add(Vf.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Gf,e)}translateY(e){return this.translateOnAxis(Wf,e)}translateZ(e){return this.translateOnAxis(Xf,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(os.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Ya.copy(e):Ya.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Oo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?os.lookAt(Oo,Ya,this.up):os.lookAt(Ya,Oo,this.up),this.quaternion.setFromRotationMatrix(os),s&&(os.extractRotation(s.matrixWorld),Cr.setFromRotationMatrix(os),this.quaternion.premultiply(Cr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(qf),Pr.child=e,this.dispatchEvent(Pr),Pr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Y1),oh.child=e,this.dispatchEvent(oh),oh.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),os.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),os.multiply(e.parent.matrixWorld)),e.applyMatrix4(os),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(qf),Pr.child=e,this.dispatchEvent(Pr),Pr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Oo,e,X1),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Oo,q1,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let f=c[l];r(e.shapes,f)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(e.materials,this.material[c]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];s.animations.push(r(e.animations,c))}}if(t){let a=o(e.geometries),c=o(e.materials),l=o(e.textures),h=o(e.images),f=o(e.shapes),m=o(e.skeletons),u=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),f.length>0&&(n.shapes=f),m.length>0&&(n.skeletons=m),u.length>0&&(n.animations=u),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){let c=[];for(let l in a){let h=a[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}};Dt.DEFAULT_UP=new w(0,1,0);Dt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Dt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Bi=new w,as=new w,ah=new w,cs=new w,Ir=new w,Lr=new w,Yf=new w,ch=new w,lh=new w,hh=new w,uh=new Yt,dh=new Yt,fh=new Yt,tr=class i{constructor(e=new w,t=new w,n=new w){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Bi.subVectors(e,t),s.cross(Bi);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){Bi.subVectors(s,t),as.subVectors(n,t),ah.subVectors(e,t);let o=Bi.dot(Bi),a=Bi.dot(as),c=Bi.dot(ah),l=as.dot(as),h=as.dot(ah),f=o*l-a*a;if(f===0)return r.set(0,0,0),null;let m=1/f,u=(l*c-a*h)*m,g=(o*h-a*c)*m;return r.set(1-u-g,g,u)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,cs)===null?!1:cs.x>=0&&cs.y>=0&&cs.x+cs.y<=1}static getInterpolation(e,t,n,s,r,o,a,c){return this.getBarycoord(e,t,n,s,cs)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,cs.x),c.addScaledVector(o,cs.y),c.addScaledVector(a,cs.z),c)}static getInterpolatedAttribute(e,t,n,s,r,o){return uh.setScalar(0),dh.setScalar(0),fh.setScalar(0),uh.fromBufferAttribute(e,t),dh.fromBufferAttribute(e,n),fh.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(uh,r.x),o.addScaledVector(dh,r.y),o.addScaledVector(fh,r.z),o}static isFrontFacing(e,t,n,s){return Bi.subVectors(n,t),as.subVectors(e,t),Bi.cross(as).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Bi.subVectors(this.c,this.b),as.subVectors(this.a,this.b),Bi.cross(as).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,o,a;Ir.subVectors(s,n),Lr.subVectors(r,n),ch.subVectors(e,n);let c=Ir.dot(ch),l=Lr.dot(ch);if(c<=0&&l<=0)return t.copy(n);lh.subVectors(e,s);let h=Ir.dot(lh),f=Lr.dot(lh);if(h>=0&&f<=h)return t.copy(s);let m=c*f-h*l;if(m<=0&&c>=0&&h<=0)return o=c/(c-h),t.copy(n).addScaledVector(Ir,o);hh.subVectors(e,r);let u=Ir.dot(hh),g=Lr.dot(hh);if(g>=0&&u<=g)return t.copy(r);let x=u*l-c*g;if(x<=0&&l>=0&&g<=0)return a=l/(l-g),t.copy(n).addScaledVector(Lr,a);let p=h*g-u*f;if(p<=0&&f-h>=0&&u-g>=0)return Yf.subVectors(r,s),a=(f-h)/(f-h+(u-g)),t.copy(s).addScaledVector(Yf,a);let d=1/(p+x+m);return o=x*d,a=m*d,t.copy(n).addScaledVector(Ir,o).addScaledVector(Lr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},jp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ts={h:0,s:0,l:0},Za={h:0,s:0,l:0};function ph(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var ht=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ft){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Vt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=Vt.workingColorSpace){return this.r=e,this.g=t,this.b=n,Vt.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=Vt.workingColorSpace){if(e=cd(e,1),t=Mn(t,0,1),n=Mn(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=ph(o,r,e+1/3),this.g=ph(o,r,e),this.b=ph(o,r,e-1/3)}return Vt.toWorkingColorSpace(this,s),this}setStyle(e,t=ft){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=ft){let n=jp[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Gr(e.r),this.g=Gr(e.g),this.b=Gr(e.b),this}copyLinearToSRGB(e){return this.r=Ql(e.r),this.g=Ql(e.g),this.b=Ql(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ft){return Vt.fromWorkingColorSpace(Gn.copy(this),e),Math.round(Mn(Gn.r*255,0,255))*65536+Math.round(Mn(Gn.g*255,0,255))*256+Math.round(Mn(Gn.b*255,0,255))}getHexString(e=ft){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Vt.workingColorSpace){Vt.fromWorkingColorSpace(Gn.copy(this),t);let n=Gn.r,s=Gn.g,r=Gn.b,o=Math.max(n,s,r),a=Math.min(n,s,r),c,l,h=(a+o)/2;if(a===o)c=0,l=0;else{let f=o-a;switch(l=h<=.5?f/(o+a):f/(2-o-a),o){case n:c=(s-r)/f+(s<r?6:0);break;case s:c=(r-n)/f+2;break;case r:c=(n-s)/f+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=Vt.workingColorSpace){return Vt.fromWorkingColorSpace(Gn.copy(this),t),e.r=Gn.r,e.g=Gn.g,e.b=Gn.b,e}getStyle(e=ft){Vt.fromWorkingColorSpace(Gn.copy(this),e);let t=Gn.r,n=Gn.g,s=Gn.b;return e!==ft?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Ts),this.setHSL(Ts.h+e,Ts.s+t,Ts.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Ts),e.getHSL(Za);let n=qo(Ts.h,Za.h,t),s=qo(Ts.s,Za.s,t),r=qo(Ts.l,Za.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Gn=new ht;ht.NAMES=jp;var Z1=0,fs=class extends Ls{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Z1++}),this.uuid=hr(),this.name="",this.type="Material",this.blending=kr,this.side=Qi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ph,this.blendDst=Ih,this.blendEquation=er,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ht(0,0,0),this.blendAlpha=0,this.depthFunc=Xr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Lf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Sr,this.stencilZFail=Sr,this.stencilZPass=Sr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==kr&&(n.blending=this.blending),this.side!==Qi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ph&&(n.blendSrc=this.blendSrc),this.blendDst!==Ih&&(n.blendDst=this.blendDst),this.blendEquation!==er&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Xr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Lf&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Sr&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Sr&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Sr&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let c=r[a];delete c.metadata,o.push(c)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},_t=class extends fs{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ht(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ni,this.combine=zp,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var pn=new w,$a=new He,In=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Df,this.updateRanges=[],this.gpuType=Ji,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)$a.fromBufferAttribute(this,t),$a.applyMatrix3(e),this.setXY(t,$a.x,$a.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)pn.fromBufferAttribute(this,t),pn.applyMatrix3(e),this.setXYZ(t,pn.x,pn.y,pn.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)pn.fromBufferAttribute(this,t),pn.applyMatrix4(e),this.setXYZ(t,pn.x,pn.y,pn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)pn.fromBufferAttribute(this,t),pn.applyNormalMatrix(e),this.setXYZ(t,pn.x,pn.y,pn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)pn.fromBufferAttribute(this,t),pn.transformDirection(e),this.setXYZ(t,pn.x,pn.y,pn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Or(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Zn(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Or(t,this.array)),t}setX(e,t){return this.normalized&&(t=Zn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Or(t,this.array)),t}setY(e,t){return this.normalized&&(t=Zn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Or(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Zn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Or(t,this.array)),t}setW(e,t){return this.normalized&&(t=Zn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Zn(t,this.array),n=Zn(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=Zn(t,this.array),n=Zn(n,this.array),s=Zn(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=Zn(t,this.array),n=Zn(n,this.array),s=Zn(s,this.array),r=Zn(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Df&&(e.usage=this.usage),e}};var Ac=class extends In{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Cc=class extends In{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var ct=class extends In{constructor(e,t,n){super(new Float32Array(e),t,n)}},$1=0,_i=new St,mh=new Dt,Dr=new w,hi=new Ln,Bo=new Ln,Pn=new w,Nt=class i extends Ls{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:$1++}),this.uuid=hr(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Qp(e)?Cc:Ac)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new xt().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return _i.makeRotationFromQuaternion(e),this.applyMatrix4(_i),this}rotateX(e){return _i.makeRotationX(e),this.applyMatrix4(_i),this}rotateY(e){return _i.makeRotationY(e),this.applyMatrix4(_i),this}rotateZ(e){return _i.makeRotationZ(e),this.applyMatrix4(_i),this}translate(e,t,n){return _i.makeTranslation(e,t,n),this.applyMatrix4(_i),this}scale(e,t,n){return _i.makeScale(e,t,n),this.applyMatrix4(_i),this}lookAt(e){return mh.lookAt(e),mh.updateMatrix(),this.applyMatrix4(mh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Dr).negate(),this.translate(Dr.x,Dr.y,Dr.z),this}setFromPoints(e){let t=[];for(let n=0,s=e.length;n<s;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new ct(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ln);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new w(-1/0,-1/0,-1/0),new w(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];hi.setFromBufferAttribute(r),this.morphTargetsRelative?(Pn.addVectors(this.boundingBox.min,hi.min),this.boundingBox.expandByPoint(Pn),Pn.addVectors(this.boundingBox.max,hi.max),this.boundingBox.expandByPoint(Pn)):(this.boundingBox.expandByPoint(hi.min),this.boundingBox.expandByPoint(hi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ds);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new w,1/0);return}if(e){let n=this.boundingSphere.center;if(hi.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];Bo.setFromBufferAttribute(a),this.morphTargetsRelative?(Pn.addVectors(hi.min,Bo.min),hi.expandByPoint(Pn),Pn.addVectors(hi.max,Bo.max),hi.expandByPoint(Pn)):(hi.expandByPoint(Bo.min),hi.expandByPoint(Bo.max))}hi.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)Pn.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Pn));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)Pn.fromBufferAttribute(a,l),c&&(Dr.fromBufferAttribute(e,l),Pn.add(Dr)),s=Math.max(s,n.distanceToSquared(Pn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new In(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],c=[];for(let C=0;C<n.count;C++)a[C]=new w,c[C]=new w;let l=new w,h=new w,f=new w,m=new He,u=new He,g=new He,x=new w,p=new w;function d(C,J,_){l.fromBufferAttribute(n,C),h.fromBufferAttribute(n,J),f.fromBufferAttribute(n,_),m.fromBufferAttribute(r,C),u.fromBufferAttribute(r,J),g.fromBufferAttribute(r,_),h.sub(l),f.sub(l),u.sub(m),g.sub(m);let b=1/(u.x*g.y-g.x*u.y);isFinite(b)&&(x.copy(h).multiplyScalar(g.y).addScaledVector(f,-u.y).multiplyScalar(b),p.copy(f).multiplyScalar(u.x).addScaledVector(h,-g.x).multiplyScalar(b),a[C].add(x),a[J].add(x),a[_].add(x),c[C].add(p),c[J].add(p),c[_].add(p))}let E=this.groups;E.length===0&&(E=[{start:0,count:e.count}]);for(let C=0,J=E.length;C<J;++C){let _=E[C],b=_.start,B=_.count;for(let W=b,X=b+B;W<X;W+=3)d(e.getX(W+0),e.getX(W+1),e.getX(W+2))}let v=new w,M=new w,L=new w,A=new w;function T(C){L.fromBufferAttribute(s,C),A.copy(L);let J=a[C];v.copy(J),v.sub(L.multiplyScalar(L.dot(J))).normalize(),M.crossVectors(A,J);let b=M.dot(c[C])<0?-1:1;o.setXYZW(C,v.x,v.y,v.z,b)}for(let C=0,J=E.length;C<J;++C){let _=E[C],b=_.start,B=_.count;for(let W=b,X=b+B;W<X;W+=3)T(e.getX(W+0)),T(e.getX(W+1)),T(e.getX(W+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new In(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let m=0,u=n.count;m<u;m++)n.setXYZ(m,0,0,0);let s=new w,r=new w,o=new w,a=new w,c=new w,l=new w,h=new w,f=new w;if(e)for(let m=0,u=e.count;m<u;m+=3){let g=e.getX(m+0),x=e.getX(m+1),p=e.getX(m+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,x),o.fromBufferAttribute(t,p),h.subVectors(o,r),f.subVectors(s,r),h.cross(f),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,x),l.fromBufferAttribute(n,p),a.add(h),c.add(h),l.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(x,c.x,c.y,c.z),n.setXYZ(p,l.x,l.y,l.z)}else for(let m=0,u=t.count;m<u;m+=3)s.fromBufferAttribute(t,m+0),r.fromBufferAttribute(t,m+1),o.fromBufferAttribute(t,m+2),h.subVectors(o,r),f.subVectors(s,r),h.cross(f),n.setXYZ(m+0,h.x,h.y,h.z),n.setXYZ(m+1,h.x,h.y,h.z),n.setXYZ(m+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Pn.fromBufferAttribute(e,t),Pn.normalize(),e.setXYZ(t,Pn.x,Pn.y,Pn.z)}toNonIndexed(){function e(a,c){let l=a.array,h=a.itemSize,f=a.normalized,m=new l.constructor(c.length*h),u=0,g=0;for(let x=0,p=c.length;x<p;x++){a.isInterleavedBufferAttribute?u=c[x]*a.data.stride+a.offset:u=c[x]*h;for(let d=0;d<h;d++)m[g++]=l[u++]}return new In(m,h,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let a in s){let c=s[a],l=e(c,n);t.setAttribute(a,l)}let r=this.morphAttributes;for(let a in r){let c=[],l=r[a];for(let h=0,f=l.length;h<f;h++){let m=l[h],u=e(m,n);c.push(u)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let c in n){let l=n[c];e.data.attributes[c]=l.toJSON(e.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let f=0,m=l.length;f<m;f++){let u=l[f];h.push(u.toJSON(e.data))}h.length>0&&(s[c]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let s=e.attributes;for(let l in s){let h=s[l];this.setAttribute(l,h.clone(t))}let r=e.morphAttributes;for(let l in r){let h=[],f=r[l];for(let m=0,u=f.length;m<u;m++)h.push(f[m].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let l=0,h=o.length;l<h;l++){let f=o[l];this.addGroup(f.start,f.count,f.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Zf=new St,$s=new jo,Ka=new Ds,$f=new w,Ja=new w,Qa=new w,ja=new w,gh=new w,ec=new w,Kf=new w,tc=new w,ut=class extends Dt{constructor(e=new Nt,t=new _t){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){ec.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=a[c],f=r[c];h!==0&&(gh.fromBufferAttribute(f,e),o?ec.addScaledVector(gh,h):ec.addScaledVector(gh.sub(t),h))}t.add(ec)}return t}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ka.copy(n.boundingSphere),Ka.applyMatrix4(r),$s.copy(e.ray).recast(e.near),!(Ka.containsPoint($s.origin)===!1&&($s.intersectSphere(Ka,$f)===null||$s.origin.distanceToSquared($f)>(e.far-e.near)**2))&&(Zf.copy(r).invert(),$s.copy(e.ray).applyMatrix4(Zf),!(n.boundingBox!==null&&$s.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,$s)))}_computeIntersections(e,t,n){let s,r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,f=r.attributes.normal,m=r.groups,u=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,x=m.length;g<x;g++){let p=m[g],d=o[p.materialIndex],E=Math.max(p.start,u.start),v=Math.min(a.count,Math.min(p.start+p.count,u.start+u.count));for(let M=E,L=v;M<L;M+=3){let A=a.getX(M),T=a.getX(M+1),C=a.getX(M+2);s=nc(this,d,e,n,l,h,f,A,T,C),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{let g=Math.max(0,u.start),x=Math.min(a.count,u.start+u.count);for(let p=g,d=x;p<d;p+=3){let E=a.getX(p),v=a.getX(p+1),M=a.getX(p+2);s=nc(this,o,e,n,l,h,f,E,v,M),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,x=m.length;g<x;g++){let p=m[g],d=o[p.materialIndex],E=Math.max(p.start,u.start),v=Math.min(c.count,Math.min(p.start+p.count,u.start+u.count));for(let M=E,L=v;M<L;M+=3){let A=M,T=M+1,C=M+2;s=nc(this,d,e,n,l,h,f,A,T,C),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{let g=Math.max(0,u.start),x=Math.min(c.count,u.start+u.count);for(let p=g,d=x;p<d;p+=3){let E=p,v=p+1,M=p+2;s=nc(this,o,e,n,l,h,f,E,v,M),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}}};function K1(i,e,t,n,s,r,o,a){let c;if(e.side===mn?c=n.intersectTriangle(o,r,s,!0,a):c=n.intersectTriangle(s,r,o,e.side===Qi,a),c===null)return null;tc.copy(a),tc.applyMatrix4(i.matrixWorld);let l=t.ray.origin.distanceTo(tc);return l<t.near||l>t.far?null:{distance:l,point:tc.clone(),object:i}}function nc(i,e,t,n,s,r,o,a,c,l){i.getVertexPosition(a,Ja),i.getVertexPosition(c,Qa),i.getVertexPosition(l,ja);let h=K1(i,e,t,n,Ja,Qa,ja,Kf);if(h){let f=new w;tr.getBarycoord(Kf,Ja,Qa,ja,f),s&&(h.uv=tr.getInterpolatedAttribute(s,a,c,l,f,new He)),r&&(h.uv1=tr.getInterpolatedAttribute(r,a,c,l,f,new He)),o&&(h.normal=tr.getInterpolatedAttribute(o,a,c,l,f,new w),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let m={a,b:c,c:l,normal:new w,materialIndex:0};tr.getNormal(Ja,Qa,ja,m.normal),h.face=m,h.barycoord=f}return h}var bt=class i extends Nt{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let c=[],l=[],h=[],f=[],m=0,u=0;g("z","y","x",-1,-1,n,t,e,o,r,0),g("z","y","x",1,-1,n,t,-e,o,r,1),g("x","z","y",1,1,e,n,t,s,o,2),g("x","z","y",1,-1,e,n,-t,s,o,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new ct(l,3)),this.setAttribute("normal",new ct(h,3)),this.setAttribute("uv",new ct(f,2));function g(x,p,d,E,v,M,L,A,T,C,J){let _=M/T,b=L/C,B=M/2,W=L/2,X=A/2,H=T+1,ee=C+1,Me=0,se=0,me=new w;for(let N=0;N<ee;N++){let Q=N*b-W;for(let ie=0;ie<H;ie++){let j=ie*_-B;me[x]=j*E,me[p]=Q*v,me[d]=X,l.push(me.x,me.y,me.z),me[x]=0,me[p]=0,me[d]=A>0?1:-1,h.push(me.x,me.y,me.z),f.push(ie/T),f.push(1-N/C),Me+=1}}for(let N=0;N<C;N++)for(let Q=0;Q<T;Q++){let ie=m+Q+H*N,j=m+Q+H*(N+1),F=m+(Q+1)+H*(N+1),ae=m+(Q+1)+H*N;c.push(ie,j,ae),c.push(j,F,ae),se+=6}a.addGroup(u,se,J),u+=se,m+=Me}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function Jr(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function $n(i){let e={};for(let t=0;t<i.length;t++){let n=Jr(i[t]);for(let s in n)e[s]=n[s]}return e}function J1(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function e0(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Vt.workingColorSpace}var Q1={clone:Jr,merge:$n},j1=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ex=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,ji=class extends fs{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=j1,this.fragmentShader=ex,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Jr(e.uniforms),this.uniformsGroups=J1(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},Pc=class extends Dt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new St,this.projectionMatrix=new St,this.projectionMatrixInverse=new St,this.coordinateSystem=hs}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Rs=new w,Jf=new He,Qf=new He,Nn=class extends Pc{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Kr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Xo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Kr*2*Math.atan(Math.tan(Xo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Rs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Rs.x,Rs.y).multiplyScalar(-e/Rs.z),Rs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Rs.x,Rs.y).multiplyScalar(-e/Rs.z)}getViewSize(e,t){return this.getViewBounds(e,Jf,Qf),t.subVectors(Qf,Jf)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Xo*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,t-=o.offsetY*n/l,s*=o.width/c,n*=o.height/l}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Ur=-90,Nr=1,xu=class extends Dt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Nn(Ur,Nr,e,t);s.layers=this.layers,this.add(s);let r=new Nn(Ur,Nr,e,t);r.layers=this.layers,this.add(r);let o=new Nn(Ur,Nr,e,t);o.layers=this.layers,this.add(o);let a=new Nn(Ur,Nr,e,t);a.layers=this.layers,this.add(a);let c=new Nn(Ur,Nr,e,t);c.layers=this.layers,this.add(c);let l=new Nn(Ur,Nr,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,a,c]=t;for(let l of t)this.remove(l);if(e===hs)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===wc)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,c,l,h]=this.children,f=e.getRenderTarget(),m=e.getActiveCubeFace(),u=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,o),e.setRenderTarget(n,2,s),e.render(t,a),e.setRenderTarget(n,3,s),e.render(t,c),e.setRenderTarget(n,4,s),e.render(t,l),n.texture.generateMipmaps=x,e.setRenderTarget(n,5,s),e.render(t,h),e.setRenderTarget(f,m,u),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},Ic=class extends Kn{constructor(e,t,n,s,r,o,a,c,l,h){e=e!==void 0?e:[],t=t!==void 0?t:qr,super(e,t,n,s,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},yu=class extends ds{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Ic(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:En}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new bt(5,5,5),r=new ji({name:"CubemapFromEquirect",uniforms:Jr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:mn,blending:Cs});r.uniforms.tEquirect.value=t;let o=new ut(s,r),a=t.minFilter;return t.minFilter===zi&&(t.minFilter=En),new xu(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,s){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}},xh=new w,tx=new w,nx=new xt,Mi=class{constructor(e=new w(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=xh.subVectors(n,t).cross(tx.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(xh),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||nx.getNormalMatrix(e),s=this.coplanarPoint(xh).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Ks=new Ds,ic=new w,ta=class{constructor(e=new Mi,t=new Mi,n=new Mi,s=new Mi,r=new Mi,o=new Mi){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=hs){let n=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],c=s[3],l=s[4],h=s[5],f=s[6],m=s[7],u=s[8],g=s[9],x=s[10],p=s[11],d=s[12],E=s[13],v=s[14],M=s[15];if(n[0].setComponents(c-r,m-l,p-u,M-d).normalize(),n[1].setComponents(c+r,m+l,p+u,M+d).normalize(),n[2].setComponents(c+o,m+h,p+g,M+E).normalize(),n[3].setComponents(c-o,m-h,p-g,M-E).normalize(),n[4].setComponents(c-a,m-f,p-x,M-v).normalize(),t===hs)n[5].setComponents(c+a,m+f,p+x,M+v).normalize();else if(t===wc)n[5].setComponents(a,f,x,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ks.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ks.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ks)}intersectsSprite(e){return Ks.center.set(0,0,0),Ks.radius=.7071067811865476,Ks.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ks)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(ic.x=s.normal.x>0?e.max.x:e.min.x,ic.y=s.normal.y>0?e.max.y:e.min.y,ic.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(ic)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function t0(){let i=null,e=!1,t=null,n=null;function s(r,o){t(r,o),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function ix(i){let e=new WeakMap;function t(a,c){let l=a.array,h=a.usage,f=l.byteLength,m=i.createBuffer();i.bindBuffer(c,m),i.bufferData(c,l,h),a.onUploadCallback();let u;if(l instanceof Float32Array)u=i.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?u=i.HALF_FLOAT:u=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)u=i.SHORT;else if(l instanceof Uint32Array)u=i.UNSIGNED_INT;else if(l instanceof Int32Array)u=i.INT;else if(l instanceof Int8Array)u=i.BYTE;else if(l instanceof Uint8Array)u=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)u=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:m,type:u,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:f}}function n(a,c,l){let h=c.array,f=c.updateRanges;if(i.bindBuffer(l,a),f.length===0)i.bufferSubData(l,0,h);else{f.sort((u,g)=>u.start-g.start);let m=0;for(let u=1;u<f.length;u++){let g=f[m],x=f[u];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++m,f[m]=x)}f.length=m+1;for(let u=0,g=f.length;u<g;u++){let x=f[u];i.bufferSubData(l,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let c=e.get(a);c&&(i.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}var Rt=class i extends Nt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(n),c=Math.floor(s),l=a+1,h=c+1,f=e/a,m=t/c,u=[],g=[],x=[],p=[];for(let d=0;d<h;d++){let E=d*m-o;for(let v=0;v<l;v++){let M=v*f-r;g.push(M,-E,0),x.push(0,0,1),p.push(v/a),p.push(1-d/c)}}for(let d=0;d<c;d++)for(let E=0;E<a;E++){let v=E+l*d,M=E+l*(d+1),L=E+1+l*(d+1),A=E+1+l*d;u.push(v,M,A),u.push(M,L,A)}this.setIndex(u),this.setAttribute("position",new ct(g,3)),this.setAttribute("normal",new ct(x,3)),this.setAttribute("uv",new ct(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}},sx=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,rx=`#ifdef USE_ALPHAHASH
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
#endif`,ox=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ax=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,cx=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,lx=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,hx=`#ifdef USE_AOMAP
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
#endif`,ux=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,dx=`#ifdef USE_BATCHING
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
#endif`,fx=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,px=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,mx=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,gx=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,xx=`#ifdef USE_IRIDESCENCE
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
#endif`,yx=`#ifdef USE_BUMPMAP
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
#endif`,vx=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,_x=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Mx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ex=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Sx=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,bx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,wx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Tx=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Rx=`#define PI 3.141592653589793
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
} // validated`,Ax=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Cx=`vec3 transformedNormal = objectNormal;
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
#endif`,Px=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ix=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Lx=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Dx=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ux="gl_FragColor = linearToOutputTexel( gl_FragColor );",Nx=`
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
}`,Hx=`#ifdef USE_ENVMAP
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
#endif`,Fx=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Ox=`#ifdef USE_ENVMAP
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
#endif`,Bx=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,zx=`#ifdef USE_ENVMAP
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
#endif`,kx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Vx=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Gx=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Wx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Xx=`#ifdef USE_GRADIENTMAP
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
}`,qx=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Yx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Zx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,$x=`uniform bool receiveShadow;
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
#endif`,Kx=`#ifdef USE_ENVMAP
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
#endif`,Jx=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Qx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,jx=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ey=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ty=`PhysicalMaterial material;
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
#endif`,ny=`struct PhysicalMaterial {
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
}`,iy=`
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
#endif`,sy=`#if defined( RE_IndirectDiffuse )
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
#endif`,ry=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,oy=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ay=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,cy=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ly=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,hy=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,uy=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,dy=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,fy=`#if defined( USE_POINTS_UV )
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
#endif`,py=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,my=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,gy=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,xy=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,yy=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,vy=`#ifdef USE_MORPHTARGETS
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
#endif`,_y=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,My=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Ey=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Sy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,by=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,wy=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Ty=`#ifdef USE_NORMALMAP
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
#endif`,Ry=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Ay=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Cy=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Py=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Iy=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ly=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Dy=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Uy=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Ny=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Hy=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Fy=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Oy=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,By=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,zy=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ky=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Vy=`float getShadowMask() {
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
}`,Gy=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Wy=`#ifdef USE_SKINNING
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
#endif`,Xy=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,qy=`#ifdef USE_SKINNING
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
#endif`,Yy=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Zy=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,$y=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Ky=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Jy=`#ifdef USE_TRANSMISSION
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
#endif`,Qy=`#ifdef USE_TRANSMISSION
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
#endif`,jy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ev=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,tv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,nv=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,iv=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,sv=`uniform sampler2D t2D;
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
}`,rv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ov=`#ifdef ENVMAP_TYPE_CUBE
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
}`,av=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cv=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,lv=`#include <common>
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
}`,hv=`#if DEPTH_PACKING == 3200
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
}`,uv=`#define DISTANCE
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
}`,dv=`#define DISTANCE
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
}`,fv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,pv=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,mv=`uniform float scale;
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
}`,gv=`uniform vec3 diffuse;
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
}`,xv=`#include <common>
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
}`,yv=`uniform vec3 diffuse;
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
}`,vv=`#define LAMBERT
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
}`,_v=`#define LAMBERT
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
}`,Mv=`#define MATCAP
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
}`,Ev=`#define MATCAP
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
}`,Sv=`#define NORMAL
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
}`,bv=`#define NORMAL
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
}`,wv=`#define PHONG
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
}`,Tv=`#define PHONG
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
}`,Rv=`#define STANDARD
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
}`,Av=`#define STANDARD
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
}`,Cv=`#define TOON
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
}`,Pv=`#define TOON
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
}`,Iv=`uniform float size;
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
}`,Lv=`uniform vec3 diffuse;
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
}`,Dv=`#include <common>
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
}`,Uv=`uniform vec3 color;
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
}`,Nv=`uniform float rotation;
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
}`,Hv=`uniform vec3 diffuse;
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
}`,Mt={alphahash_fragment:sx,alphahash_pars_fragment:rx,alphamap_fragment:ox,alphamap_pars_fragment:ax,alphatest_fragment:cx,alphatest_pars_fragment:lx,aomap_fragment:hx,aomap_pars_fragment:ux,batching_pars_vertex:dx,batching_vertex:fx,begin_vertex:px,beginnormal_vertex:mx,bsdfs:gx,iridescence_fragment:xx,bumpmap_pars_fragment:yx,clipping_planes_fragment:vx,clipping_planes_pars_fragment:_x,clipping_planes_pars_vertex:Mx,clipping_planes_vertex:Ex,color_fragment:Sx,color_pars_fragment:bx,color_pars_vertex:wx,color_vertex:Tx,common:Rx,cube_uv_reflection_fragment:Ax,defaultnormal_vertex:Cx,displacementmap_pars_vertex:Px,displacementmap_vertex:Ix,emissivemap_fragment:Lx,emissivemap_pars_fragment:Dx,colorspace_fragment:Ux,colorspace_pars_fragment:Nx,envmap_fragment:Hx,envmap_common_pars_fragment:Fx,envmap_pars_fragment:Ox,envmap_pars_vertex:Bx,envmap_physical_pars_fragment:Kx,envmap_vertex:zx,fog_vertex:kx,fog_pars_vertex:Vx,fog_fragment:Gx,fog_pars_fragment:Wx,gradientmap_pars_fragment:Xx,lightmap_pars_fragment:qx,lights_lambert_fragment:Yx,lights_lambert_pars_fragment:Zx,lights_pars_begin:$x,lights_toon_fragment:Jx,lights_toon_pars_fragment:Qx,lights_phong_fragment:jx,lights_phong_pars_fragment:ey,lights_physical_fragment:ty,lights_physical_pars_fragment:ny,lights_fragment_begin:iy,lights_fragment_maps:sy,lights_fragment_end:ry,logdepthbuf_fragment:oy,logdepthbuf_pars_fragment:ay,logdepthbuf_pars_vertex:cy,logdepthbuf_vertex:ly,map_fragment:hy,map_pars_fragment:uy,map_particle_fragment:dy,map_particle_pars_fragment:fy,metalnessmap_fragment:py,metalnessmap_pars_fragment:my,morphinstance_vertex:gy,morphcolor_vertex:xy,morphnormal_vertex:yy,morphtarget_pars_vertex:vy,morphtarget_vertex:_y,normal_fragment_begin:My,normal_fragment_maps:Ey,normal_pars_fragment:Sy,normal_pars_vertex:by,normal_vertex:wy,normalmap_pars_fragment:Ty,clearcoat_normal_fragment_begin:Ry,clearcoat_normal_fragment_maps:Ay,clearcoat_pars_fragment:Cy,iridescence_pars_fragment:Py,opaque_fragment:Iy,packing:Ly,premultiplied_alpha_fragment:Dy,project_vertex:Uy,dithering_fragment:Ny,dithering_pars_fragment:Hy,roughnessmap_fragment:Fy,roughnessmap_pars_fragment:Oy,shadowmap_pars_fragment:By,shadowmap_pars_vertex:zy,shadowmap_vertex:ky,shadowmask_pars_fragment:Vy,skinbase_vertex:Gy,skinning_pars_vertex:Wy,skinning_vertex:Xy,skinnormal_vertex:qy,specularmap_fragment:Yy,specularmap_pars_fragment:Zy,tonemapping_fragment:$y,tonemapping_pars_fragment:Ky,transmission_fragment:Jy,transmission_pars_fragment:Qy,uv_pars_fragment:jy,uv_pars_vertex:ev,uv_vertex:tv,worldpos_vertex:nv,background_vert:iv,background_frag:sv,backgroundCube_vert:rv,backgroundCube_frag:ov,cube_vert:av,cube_frag:cv,depth_vert:lv,depth_frag:hv,distanceRGBA_vert:uv,distanceRGBA_frag:dv,equirect_vert:fv,equirect_frag:pv,linedashed_vert:mv,linedashed_frag:gv,meshbasic_vert:xv,meshbasic_frag:yv,meshlambert_vert:vv,meshlambert_frag:_v,meshmatcap_vert:Mv,meshmatcap_frag:Ev,meshnormal_vert:Sv,meshnormal_frag:bv,meshphong_vert:wv,meshphong_frag:Tv,meshphysical_vert:Rv,meshphysical_frag:Av,meshtoon_vert:Cv,meshtoon_frag:Pv,points_vert:Iv,points_frag:Lv,shadow_vert:Dv,shadow_frag:Uv,sprite_vert:Nv,sprite_frag:Hv},$e={common:{diffuse:{value:new ht(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new xt},alphaMap:{value:null},alphaMapTransform:{value:new xt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new xt}},envmap:{envMap:{value:null},envMapRotation:{value:new xt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new xt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new xt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new xt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new xt},normalScale:{value:new He(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new xt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new xt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new xt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new xt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ht(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ht(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new xt},alphaTest:{value:0},uvTransform:{value:new xt}},sprite:{diffuse:{value:new ht(16777215)},opacity:{value:1},center:{value:new He(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new xt},alphaMap:{value:null},alphaMapTransform:{value:new xt},alphaTest:{value:0}}},Ki={basic:{uniforms:$n([$e.common,$e.specularmap,$e.envmap,$e.aomap,$e.lightmap,$e.fog]),vertexShader:Mt.meshbasic_vert,fragmentShader:Mt.meshbasic_frag},lambert:{uniforms:$n([$e.common,$e.specularmap,$e.envmap,$e.aomap,$e.lightmap,$e.emissivemap,$e.bumpmap,$e.normalmap,$e.displacementmap,$e.fog,$e.lights,{emissive:{value:new ht(0)}}]),vertexShader:Mt.meshlambert_vert,fragmentShader:Mt.meshlambert_frag},phong:{uniforms:$n([$e.common,$e.specularmap,$e.envmap,$e.aomap,$e.lightmap,$e.emissivemap,$e.bumpmap,$e.normalmap,$e.displacementmap,$e.fog,$e.lights,{emissive:{value:new ht(0)},specular:{value:new ht(1118481)},shininess:{value:30}}]),vertexShader:Mt.meshphong_vert,fragmentShader:Mt.meshphong_frag},standard:{uniforms:$n([$e.common,$e.envmap,$e.aomap,$e.lightmap,$e.emissivemap,$e.bumpmap,$e.normalmap,$e.displacementmap,$e.roughnessmap,$e.metalnessmap,$e.fog,$e.lights,{emissive:{value:new ht(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Mt.meshphysical_vert,fragmentShader:Mt.meshphysical_frag},toon:{uniforms:$n([$e.common,$e.aomap,$e.lightmap,$e.emissivemap,$e.bumpmap,$e.normalmap,$e.displacementmap,$e.gradientmap,$e.fog,$e.lights,{emissive:{value:new ht(0)}}]),vertexShader:Mt.meshtoon_vert,fragmentShader:Mt.meshtoon_frag},matcap:{uniforms:$n([$e.common,$e.bumpmap,$e.normalmap,$e.displacementmap,$e.fog,{matcap:{value:null}}]),vertexShader:Mt.meshmatcap_vert,fragmentShader:Mt.meshmatcap_frag},points:{uniforms:$n([$e.points,$e.fog]),vertexShader:Mt.points_vert,fragmentShader:Mt.points_frag},dashed:{uniforms:$n([$e.common,$e.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Mt.linedashed_vert,fragmentShader:Mt.linedashed_frag},depth:{uniforms:$n([$e.common,$e.displacementmap]),vertexShader:Mt.depth_vert,fragmentShader:Mt.depth_frag},normal:{uniforms:$n([$e.common,$e.bumpmap,$e.normalmap,$e.displacementmap,{opacity:{value:1}}]),vertexShader:Mt.meshnormal_vert,fragmentShader:Mt.meshnormal_frag},sprite:{uniforms:$n([$e.sprite,$e.fog]),vertexShader:Mt.sprite_vert,fragmentShader:Mt.sprite_frag},background:{uniforms:{uvTransform:{value:new xt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Mt.background_vert,fragmentShader:Mt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new xt}},vertexShader:Mt.backgroundCube_vert,fragmentShader:Mt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Mt.cube_vert,fragmentShader:Mt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Mt.equirect_vert,fragmentShader:Mt.equirect_frag},distanceRGBA:{uniforms:$n([$e.common,$e.displacementmap,{referencePosition:{value:new w},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Mt.distanceRGBA_vert,fragmentShader:Mt.distanceRGBA_frag},shadow:{uniforms:$n([$e.lights,$e.fog,{color:{value:new ht(0)},opacity:{value:1}}]),vertexShader:Mt.shadow_vert,fragmentShader:Mt.shadow_frag}};Ki.physical={uniforms:$n([Ki.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new xt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new xt},clearcoatNormalScale:{value:new He(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new xt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new xt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new xt},sheen:{value:0},sheenColor:{value:new ht(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new xt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new xt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new xt},transmissionSamplerSize:{value:new He},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new xt},attenuationDistance:{value:0},attenuationColor:{value:new ht(0)},specularColor:{value:new ht(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new xt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new xt},anisotropyVector:{value:new He},anisotropyMap:{value:null},anisotropyMapTransform:{value:new xt}}]),vertexShader:Mt.meshphysical_vert,fragmentShader:Mt.meshphysical_frag};var sc={r:0,b:0,g:0},Js=new ni,Fv=new St;function Ov(i,e,t,n,s,r,o){let a=new ht(0),c=r===!0?0:1,l,h,f=null,m=0,u=null;function g(E){let v=E.isScene===!0?E.background:null;return v&&v.isTexture&&(v=(E.backgroundBlurriness>0?t:e).get(v)),v}function x(E){let v=!1,M=g(E);M===null?d(a,c):M&&M.isColor&&(d(M,1),v=!0);let L=i.xr.getEnvironmentBlendMode();L==="additive"?n.buffers.color.setClear(0,0,0,1,o):L==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||v)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function p(E,v){let M=g(v);M&&(M.isCubeTexture||M.mapping===Jc)?(h===void 0&&(h=new ut(new bt(1,1,1),new ji({name:"BackgroundCubeMaterial",uniforms:Jr(Ki.backgroundCube.uniforms),vertexShader:Ki.backgroundCube.vertexShader,fragmentShader:Ki.backgroundCube.fragmentShader,side:mn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(L,A,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Js.copy(v.backgroundRotation),Js.x*=-1,Js.y*=-1,Js.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(Js.y*=-1,Js.z*=-1),h.material.uniforms.envMap.value=M,h.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Fv.makeRotationFromEuler(Js)),h.material.toneMapped=Vt.getTransfer(M.colorSpace)!==nn,(f!==M||m!==M.version||u!==i.toneMapping)&&(h.material.needsUpdate=!0,f=M,m=M.version,u=i.toneMapping),h.layers.enableAll(),E.unshift(h,h.geometry,h.material,0,0,null)):M&&M.isTexture&&(l===void 0&&(l=new ut(new Rt(2,2),new ji({name:"BackgroundMaterial",uniforms:Jr(Ki.background.uniforms),vertexShader:Ki.background.vertexShader,fragmentShader:Ki.background.fragmentShader,side:Qi,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=M,l.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,l.material.toneMapped=Vt.getTransfer(M.colorSpace)!==nn,M.matrixAutoUpdate===!0&&M.updateMatrix(),l.material.uniforms.uvTransform.value.copy(M.matrix),(f!==M||m!==M.version||u!==i.toneMapping)&&(l.material.needsUpdate=!0,f=M,m=M.version,u=i.toneMapping),l.layers.enableAll(),E.unshift(l,l.geometry,l.material,0,0,null))}function d(E,v){E.getRGB(sc,e0(i)),n.buffers.color.setClear(sc.r,sc.g,sc.b,v,o)}return{getClearColor:function(){return a},setClearColor:function(E,v=1){a.set(E),c=v,d(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(E){c=E,d(a,c)},render:x,addToRenderList:p}}function Bv(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=m(null),r=s,o=!1;function a(_,b,B,W,X){let H=!1,ee=f(W,B,b);r!==ee&&(r=ee,l(r.object)),H=u(_,W,B,X),H&&g(_,W,B,X),X!==null&&e.update(X,i.ELEMENT_ARRAY_BUFFER),(H||o)&&(o=!1,M(_,b,B,W),X!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(X).buffer))}function c(){return i.createVertexArray()}function l(_){return i.bindVertexArray(_)}function h(_){return i.deleteVertexArray(_)}function f(_,b,B){let W=B.wireframe===!0,X=n[_.id];X===void 0&&(X={},n[_.id]=X);let H=X[b.id];H===void 0&&(H={},X[b.id]=H);let ee=H[W];return ee===void 0&&(ee=m(c()),H[W]=ee),ee}function m(_){let b=[],B=[],W=[];for(let X=0;X<t;X++)b[X]=0,B[X]=0,W[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:b,enabledAttributes:B,attributeDivisors:W,object:_,attributes:{},index:null}}function u(_,b,B,W){let X=r.attributes,H=b.attributes,ee=0,Me=B.getAttributes();for(let se in Me)if(Me[se].location>=0){let N=X[se],Q=H[se];if(Q===void 0&&(se==="instanceMatrix"&&_.instanceMatrix&&(Q=_.instanceMatrix),se==="instanceColor"&&_.instanceColor&&(Q=_.instanceColor)),N===void 0||N.attribute!==Q||Q&&N.data!==Q.data)return!0;ee++}return r.attributesNum!==ee||r.index!==W}function g(_,b,B,W){let X={},H=b.attributes,ee=0,Me=B.getAttributes();for(let se in Me)if(Me[se].location>=0){let N=H[se];N===void 0&&(se==="instanceMatrix"&&_.instanceMatrix&&(N=_.instanceMatrix),se==="instanceColor"&&_.instanceColor&&(N=_.instanceColor));let Q={};Q.attribute=N,N&&N.data&&(Q.data=N.data),X[se]=Q,ee++}r.attributes=X,r.attributesNum=ee,r.index=W}function x(){let _=r.newAttributes;for(let b=0,B=_.length;b<B;b++)_[b]=0}function p(_){d(_,0)}function d(_,b){let B=r.newAttributes,W=r.enabledAttributes,X=r.attributeDivisors;B[_]=1,W[_]===0&&(i.enableVertexAttribArray(_),W[_]=1),X[_]!==b&&(i.vertexAttribDivisor(_,b),X[_]=b)}function E(){let _=r.newAttributes,b=r.enabledAttributes;for(let B=0,W=b.length;B<W;B++)b[B]!==_[B]&&(i.disableVertexAttribArray(B),b[B]=0)}function v(_,b,B,W,X,H,ee){ee===!0?i.vertexAttribIPointer(_,b,B,X,H):i.vertexAttribPointer(_,b,B,W,X,H)}function M(_,b,B,W){x();let X=W.attributes,H=B.getAttributes(),ee=b.defaultAttributeValues;for(let Me in H){let se=H[Me];if(se.location>=0){let me=X[Me];if(me===void 0&&(Me==="instanceMatrix"&&_.instanceMatrix&&(me=_.instanceMatrix),Me==="instanceColor"&&_.instanceColor&&(me=_.instanceColor)),me!==void 0){let N=me.normalized,Q=me.itemSize,ie=e.get(me);if(ie===void 0)continue;let j=ie.buffer,F=ie.type,ae=ie.bytesPerElement,z=F===i.INT||F===i.UNSIGNED_INT||me.gpuType===ju;if(me.isInterleavedBufferAttribute){let V=me.data,Y=V.stride,pe=me.offset;if(V.isInstancedInterleavedBuffer){for(let ve=0;ve<se.locationSize;ve++)d(se.location+ve,V.meshPerAttribute);_.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=V.meshPerAttribute*V.count)}else for(let ve=0;ve<se.locationSize;ve++)p(se.location+ve);i.bindBuffer(i.ARRAY_BUFFER,j);for(let ve=0;ve<se.locationSize;ve++)v(se.location+ve,Q/se.locationSize,F,N,Y*ae,(pe+Q/se.locationSize*ve)*ae,z)}else{if(me.isInstancedBufferAttribute){for(let V=0;V<se.locationSize;V++)d(se.location+V,me.meshPerAttribute);_.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=me.meshPerAttribute*me.count)}else for(let V=0;V<se.locationSize;V++)p(se.location+V);i.bindBuffer(i.ARRAY_BUFFER,j);for(let V=0;V<se.locationSize;V++)v(se.location+V,Q/se.locationSize,F,N,Q*ae,Q/se.locationSize*V*ae,z)}}else if(ee!==void 0){let N=ee[Me];if(N!==void 0)switch(N.length){case 2:i.vertexAttrib2fv(se.location,N);break;case 3:i.vertexAttrib3fv(se.location,N);break;case 4:i.vertexAttrib4fv(se.location,N);break;default:i.vertexAttrib1fv(se.location,N)}}}}E()}function L(){C();for(let _ in n){let b=n[_];for(let B in b){let W=b[B];for(let X in W)h(W[X].object),delete W[X];delete b[B]}delete n[_]}}function A(_){if(n[_.id]===void 0)return;let b=n[_.id];for(let B in b){let W=b[B];for(let X in W)h(W[X].object),delete W[X];delete b[B]}delete n[_.id]}function T(_){for(let b in n){let B=n[b];if(B[_.id]===void 0)continue;let W=B[_.id];for(let X in W)h(W[X].object),delete W[X];delete B[_.id]}}function C(){J(),o=!0,r!==s&&(r=s,l(r.object))}function J(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:C,resetDefaultState:J,dispose:L,releaseStatesOfGeometry:A,releaseStatesOfProgram:T,initAttributes:x,enableAttribute:p,disableUnusedAttributes:E}}function zv(i,e,t){let n;function s(l){n=l}function r(l,h){i.drawArrays(n,l,h),t.update(h,n,1)}function o(l,h,f){f!==0&&(i.drawArraysInstanced(n,l,h,f),t.update(h,n,f))}function a(l,h,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,f);let u=0;for(let g=0;g<f;g++)u+=h[g];t.update(u,n,1)}function c(l,h,f,m){if(f===0)return;let u=e.get("WEBGL_multi_draw");if(u===null)for(let g=0;g<l.length;g++)o(l[g],h[g],m[g]);else{u.multiDrawArraysInstancedWEBGL(n,l,0,h,0,m,0,f);let g=0;for(let x=0;x<f;x++)g+=h[x];for(let x=0;x<m.length;x++)t.update(g,n,m[x])}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function kv(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let T=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(T){return!(T!==ui&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(T){let C=T===ha&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(T!==us&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==Ji&&!C)}function c(T){if(T==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp",h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let f=t.logarithmicDepthBuffer===!0,m=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control");if(m===!0){let T=e.get("EXT_clip_control");T.clipControlEXT(T.LOWER_LEFT_EXT,T.ZERO_TO_ONE_EXT)}let u=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),d=i.getParameter(i.MAX_VERTEX_ATTRIBS),E=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),v=i.getParameter(i.MAX_VARYING_VECTORS),M=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),L=g>0,A=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:f,reverseDepthBuffer:m,maxTextures:u,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:p,maxAttributes:d,maxVertexUniforms:E,maxVaryings:v,maxFragmentUniforms:M,vertexTextures:L,maxSamples:A}}function Vv(i){let e=this,t=null,n=0,s=!1,r=!1,o=new Mi,a=new xt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(f,m){let u=f.length!==0||m||n!==0||s;return s=m,n=f.length,u},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,m){t=h(f,m,0)},this.setState=function(f,m,u){let g=f.clippingPlanes,x=f.clipIntersection,p=f.clipShadows,d=i.get(f);if(!s||g===null||g.length===0||r&&!p)r?h(null):l();else{let E=r?0:n,v=E*4,M=d.clippingState||null;c.value=M,M=h(g,m,v,u);for(let L=0;L!==v;++L)M[L]=t[L];d.clippingState=M,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=E}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(f,m,u,g){let x=f!==null?f.length:0,p=null;if(x!==0){if(p=c.value,g!==!0||p===null){let d=u+x*4,E=m.matrixWorldInverse;a.getNormalMatrix(E),(p===null||p.length<d)&&(p=new Float32Array(d));for(let v=0,M=u;v!==x;++v,M+=4)o.copy(f[v]).applyMatrix4(E,a),o.normal.toArray(p,M),p[M+3]=o.constant}c.value=p,c.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,p}}function Gv(i){let e=new WeakMap;function t(o,a){return a===Ko?o.mapping=qr:a===Bh&&(o.mapping=Yr),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===Ko||a===Bh)if(e.has(o)){let c=e.get(o).texture;return t(c,o.mapping)}else{let c=o.image;if(c&&c.height>0){let l=new yu(c.height);return l.fromEquirectangularTexture(i,o),e.set(o,l),o.addEventListener("dispose",s),t(l.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}var Lc=class extends Pc{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,o=n+e,a=s+t,c=s-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Br=4,jf=[.125,.215,.35,.446,.526,.582],nr=20,yh=new Lc,ep=new ht,vh=null,_h=0,Mh=0,Eh=!1,js=(1+Math.sqrt(5))/2,Hr=1/js,tp=[new w(-js,Hr,0),new w(js,Hr,0),new w(-Hr,0,js),new w(Hr,0,js),new w(0,js,-Hr),new w(0,js,Hr),new w(-1,1,-1),new w(1,1,-1),new w(-1,1,1),new w(1,1,1)],Qr=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){vh=this._renderer.getRenderTarget(),_h=this._renderer.getActiveCubeFace(),Mh=this._renderer.getActiveMipmapLevel(),Eh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=sp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=ip(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(vh,_h,Mh),this._renderer.xr.enabled=Eh,e.scissorTest=!1,rc(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===qr||e.mapping===Yr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),vh=this._renderer.getRenderTarget(),_h=this._renderer.getActiveCubeFace(),Mh=this._renderer.getActiveMipmapLevel(),Eh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:En,minFilter:En,generateMipmaps:!1,type:ha,format:ui,colorSpace:Hs,depthBuffer:!1},s=np(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=np(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Wv(r)),this._blurMaterial=Xv(r,e,t)}return s}_compileMaterial(e){let t=new ut(this._lodPlanes[0],e);this._renderer.compile(t,yh)}_sceneToCubeUV(e,t,n,s){let a=new Nn(90,1,t,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,m=h.toneMapping;h.getClearColor(ep),h.toneMapping=Ps,h.autoClear=!1;let u=new _t({name:"PMREM.Background",side:mn,depthWrite:!1,depthTest:!1}),g=new ut(new bt,u),x=!1,p=e.background;p?p.isColor&&(u.color.copy(p),e.background=null,x=!0):(u.color.copy(ep),x=!0);for(let d=0;d<6;d++){let E=d%3;E===0?(a.up.set(0,c[d],0),a.lookAt(l[d],0,0)):E===1?(a.up.set(0,0,c[d]),a.lookAt(0,l[d],0)):(a.up.set(0,c[d],0),a.lookAt(0,0,l[d]));let v=this._cubeSize;rc(s,E*v,d>2?v:0,v,v),h.setRenderTarget(s),x&&h.render(g,a),h.render(e,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=m,h.autoClear=f,e.background=p}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===qr||e.mapping===Yr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=sp()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=ip());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new ut(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;let c=this._cubeSize;rc(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(o,yh)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=tp[(s-r-1)%tp.length];this._blur(e,r-1,r,o,a)}t.autoClear=n}_blur(e,t,n,s,r){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,s,"latitudinal",r),this._halfBlur(o,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,o,a){let c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,f=new ut(this._lodPlanes[s],l),m=l.uniforms,u=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*u):2*Math.PI/(2*nr-1),x=r/g,p=isFinite(r)?1+Math.floor(h*x):nr;p>nr&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${nr}`);let d=[],E=0;for(let T=0;T<nr;++T){let C=T/x,J=Math.exp(-C*C/2);d.push(J),T===0?E+=J:T<p&&(E+=2*J)}for(let T=0;T<d.length;T++)d[T]=d[T]/E;m.envMap.value=e.texture,m.samples.value=p,m.weights.value=d,m.latitudinal.value=o==="latitudinal",a&&(m.poleAxis.value=a);let{_lodMax:v}=this;m.dTheta.value=g,m.mipInt.value=v-n;let M=this._sizeLods[s],L=3*M*(s>v-Br?s-v+Br:0),A=4*(this._cubeSize-M);rc(t,L,A,3*M,2*M),c.setRenderTarget(t),c.render(f,yh)}};function Wv(i){let e=[],t=[],n=[],s=i,r=i-Br+1+jf.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);t.push(a);let c=1/a;o>i-Br?c=jf[o-i+Br-1]:o===0&&(c=0),n.push(c);let l=1/(a-2),h=-l,f=1+l,m=[h,h,f,h,f,f,h,h,f,f,h,f],u=6,g=6,x=3,p=2,d=1,E=new Float32Array(x*g*u),v=new Float32Array(p*g*u),M=new Float32Array(d*g*u);for(let A=0;A<u;A++){let T=A%3*2/3-1,C=A>2?0:-1,J=[T,C,0,T+2/3,C,0,T+2/3,C+1,0,T,C,0,T+2/3,C+1,0,T,C+1,0];E.set(J,x*g*A),v.set(m,p*g*A);let _=[A,A,A,A,A,A];M.set(_,d*g*A)}let L=new Nt;L.setAttribute("position",new In(E,x)),L.setAttribute("uv",new In(v,p)),L.setAttribute("faceIndex",new In(M,d)),e.push(L),s>Br&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function np(i,e,t){let n=new ds(i,e,t);return n.texture.mapping=Jc,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function rc(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function Xv(i,e,t){let n=new Float32Array(nr),s=new w(0,1,0);return new ji({name:"SphericalGaussianBlur",defines:{n:nr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:ld(),fragmentShader:`

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
		`,blending:Cs,depthTest:!1,depthWrite:!1})}function ip(){return new ji({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ld(),fragmentShader:`

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
		`,blending:Cs,depthTest:!1,depthWrite:!1})}function sp(){return new ji({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ld(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Cs,depthTest:!1,depthWrite:!1})}function ld(){return`

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
	`}function qv(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){let c=a.mapping,l=c===Ko||c===Bh,h=c===qr||c===Yr;if(l||h){let f=e.get(a),m=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==m)return t===null&&(t=new Qr(i)),f=l?t.fromEquirectangular(a,f):t.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),f.texture;if(f!==void 0)return f.texture;{let u=a.image;return l&&u&&u.height>0||h&&u&&s(u)?(t===null&&(t=new Qr(i)),f=l?t.fromEquirectangular(a):t.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),a.addEventListener("dispose",r),f.texture):null}}}return a}function s(a){let c=0,l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function r(a){let c=a.target;c.removeEventListener("dispose",r);let l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function Yv(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&vc("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Zv(i,e,t,n){let s={},r=new WeakMap;function o(f){let m=f.target;m.index!==null&&e.remove(m.index);for(let g in m.attributes)e.remove(m.attributes[g]);for(let g in m.morphAttributes){let x=m.morphAttributes[g];for(let p=0,d=x.length;p<d;p++)e.remove(x[p])}m.removeEventListener("dispose",o),delete s[m.id];let u=r.get(m);u&&(e.remove(u),r.delete(m)),n.releaseStatesOfGeometry(m),m.isInstancedBufferGeometry===!0&&delete m._maxInstanceCount,t.memory.geometries--}function a(f,m){return s[m.id]===!0||(m.addEventListener("dispose",o),s[m.id]=!0,t.memory.geometries++),m}function c(f){let m=f.attributes;for(let g in m)e.update(m[g],i.ARRAY_BUFFER);let u=f.morphAttributes;for(let g in u){let x=u[g];for(let p=0,d=x.length;p<d;p++)e.update(x[p],i.ARRAY_BUFFER)}}function l(f){let m=[],u=f.index,g=f.attributes.position,x=0;if(u!==null){let E=u.array;x=u.version;for(let v=0,M=E.length;v<M;v+=3){let L=E[v+0],A=E[v+1],T=E[v+2];m.push(L,A,A,T,T,L)}}else if(g!==void 0){let E=g.array;x=g.version;for(let v=0,M=E.length/3-1;v<M;v+=3){let L=v+0,A=v+1,T=v+2;m.push(L,A,A,T,T,L)}}else return;let p=new(Qp(m)?Cc:Ac)(m,1);p.version=x;let d=r.get(f);d&&e.remove(d),r.set(f,p)}function h(f){let m=r.get(f);if(m){let u=f.index;u!==null&&m.version<u.version&&l(f)}else l(f);return r.get(f)}return{get:a,update:c,getWireframeAttribute:h}}function $v(i,e,t){let n;function s(m){n=m}let r,o;function a(m){r=m.type,o=m.bytesPerElement}function c(m,u){i.drawElements(n,u,r,m*o),t.update(u,n,1)}function l(m,u,g){g!==0&&(i.drawElementsInstanced(n,u,r,m*o,g),t.update(u,n,g))}function h(m,u,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,r,m,0,g);let p=0;for(let d=0;d<g;d++)p+=u[d];t.update(p,n,1)}function f(m,u,g,x){if(g===0)return;let p=e.get("WEBGL_multi_draw");if(p===null)for(let d=0;d<m.length;d++)l(m[d]/o,u[d],x[d]);else{p.multiDrawElementsInstancedWEBGL(n,u,0,r,m,0,x,0,g);let d=0;for(let E=0;E<g;E++)d+=u[E];for(let E=0;E<x.length;E++)t.update(d,n,x[E])}}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=f}function Kv(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(r/3);break;case i.LINES:t.lines+=a*(r/2);break;case i.LINE_STRIP:t.lines+=a*(r-1);break;case i.LINE_LOOP:t.lines+=a*r;break;case i.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function Jv(i,e,t){let n=new WeakMap,s=new Yt;function r(o,a,c){let l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=h!==void 0?h.length:0,m=n.get(a);if(m===void 0||m.count!==f){let J=function(){T.dispose(),n.delete(a),a.removeEventListener("dispose",J)};m!==void 0&&m.texture.dispose();let u=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],d=a.morphAttributes.normal||[],E=a.morphAttributes.color||[],v=0;u===!0&&(v=1),g===!0&&(v=2),x===!0&&(v=3);let M=a.attributes.position.count*v,L=1;M>e.maxTextureSize&&(L=Math.ceil(M/e.maxTextureSize),M=e.maxTextureSize);let A=new Float32Array(M*L*4*f),T=new Rc(A,M,L,f);T.type=Ji,T.needsUpdate=!0;let C=v*4;for(let _=0;_<f;_++){let b=p[_],B=d[_],W=E[_],X=M*L*4*_;for(let H=0;H<b.count;H++){let ee=H*C;u===!0&&(s.fromBufferAttribute(b,H),A[X+ee+0]=s.x,A[X+ee+1]=s.y,A[X+ee+2]=s.z,A[X+ee+3]=0),g===!0&&(s.fromBufferAttribute(B,H),A[X+ee+4]=s.x,A[X+ee+5]=s.y,A[X+ee+6]=s.z,A[X+ee+7]=0),x===!0&&(s.fromBufferAttribute(W,H),A[X+ee+8]=s.x,A[X+ee+9]=s.y,A[X+ee+10]=s.z,A[X+ee+11]=W.itemSize===4?s.w:1)}}m={count:f,texture:T,size:new He(M,L)},n.set(a,m),a.addEventListener("dispose",J)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let u=0;for(let x=0;x<l.length;x++)u+=l[x];let g=a.morphTargetsRelative?1:1-u;c.getUniforms().setValue(i,"morphTargetBaseInfluence",g),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",m.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",m.size)}return{update:r}}function Qv(i,e,t,n){let s=new WeakMap;function r(c){let l=n.render.frame,h=c.geometry,f=e.get(c,h);if(s.get(f)!==l&&(e.update(f),s.set(f,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){let m=c.skeleton;s.get(m)!==l&&(m.update(),s.set(m,l))}return f}function o(){s=new WeakMap}function a(c){let l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:o}}var Dc=class extends Kn{constructor(e,t,n,s,r,o,a,c,l,h=Vr){if(h!==Vr&&h!==$r)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Vr&&(n=rr),n===void 0&&h===$r&&(n=Zr),super(null,s,r,o,a,c,h,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Wn,this.minFilter=c!==void 0?c:Wn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},n0=new Kn,rp=new Dc(1,1),i0=new Rc,s0=new gu,r0=new Ic,op=[],ap=[],cp=new Float32Array(16),lp=new Float32Array(9),hp=new Float32Array(4);function oo(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=op[s];if(r===void 0&&(r=new Float32Array(s),op[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function Sn(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function bn(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function jc(i,e){let t=ap[e];t===void 0&&(t=new Int32Array(e),ap[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function jv(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function e_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Sn(t,e))return;i.uniform2fv(this.addr,e),bn(t,e)}}function t_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Sn(t,e))return;i.uniform3fv(this.addr,e),bn(t,e)}}function n_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Sn(t,e))return;i.uniform4fv(this.addr,e),bn(t,e)}}function i_(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Sn(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),bn(t,e)}else{if(Sn(t,n))return;hp.set(n),i.uniformMatrix2fv(this.addr,!1,hp),bn(t,n)}}function s_(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Sn(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),bn(t,e)}else{if(Sn(t,n))return;lp.set(n),i.uniformMatrix3fv(this.addr,!1,lp),bn(t,n)}}function r_(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Sn(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),bn(t,e)}else{if(Sn(t,n))return;cp.set(n),i.uniformMatrix4fv(this.addr,!1,cp),bn(t,n)}}function o_(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function a_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Sn(t,e))return;i.uniform2iv(this.addr,e),bn(t,e)}}function c_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Sn(t,e))return;i.uniform3iv(this.addr,e),bn(t,e)}}function l_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Sn(t,e))return;i.uniform4iv(this.addr,e),bn(t,e)}}function h_(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function u_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Sn(t,e))return;i.uniform2uiv(this.addr,e),bn(t,e)}}function d_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Sn(t,e))return;i.uniform3uiv(this.addr,e),bn(t,e)}}function f_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Sn(t,e))return;i.uniform4uiv(this.addr,e),bn(t,e)}}function p_(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(rp.compareFunction=Jp,r=rp):r=n0,t.setTexture2D(e||r,s)}function m_(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||s0,s)}function g_(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||r0,s)}function x_(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||i0,s)}function y_(i){switch(i){case 5126:return jv;case 35664:return e_;case 35665:return t_;case 35666:return n_;case 35674:return i_;case 35675:return s_;case 35676:return r_;case 5124:case 35670:return o_;case 35667:case 35671:return a_;case 35668:case 35672:return c_;case 35669:case 35673:return l_;case 5125:return h_;case 36294:return u_;case 36295:return d_;case 36296:return f_;case 35678:case 36198:case 36298:case 36306:case 35682:return p_;case 35679:case 36299:case 36307:return m_;case 35680:case 36300:case 36308:case 36293:return g_;case 36289:case 36303:case 36311:case 36292:return x_}}function v_(i,e){i.uniform1fv(this.addr,e)}function __(i,e){let t=oo(e,this.size,2);i.uniform2fv(this.addr,t)}function M_(i,e){let t=oo(e,this.size,3);i.uniform3fv(this.addr,t)}function E_(i,e){let t=oo(e,this.size,4);i.uniform4fv(this.addr,t)}function S_(i,e){let t=oo(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function b_(i,e){let t=oo(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function w_(i,e){let t=oo(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function T_(i,e){i.uniform1iv(this.addr,e)}function R_(i,e){i.uniform2iv(this.addr,e)}function A_(i,e){i.uniform3iv(this.addr,e)}function C_(i,e){i.uniform4iv(this.addr,e)}function P_(i,e){i.uniform1uiv(this.addr,e)}function I_(i,e){i.uniform2uiv(this.addr,e)}function L_(i,e){i.uniform3uiv(this.addr,e)}function D_(i,e){i.uniform4uiv(this.addr,e)}function U_(i,e,t){let n=this.cache,s=e.length,r=jc(t,s);Sn(n,r)||(i.uniform1iv(this.addr,r),bn(n,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||n0,r[o])}function N_(i,e,t){let n=this.cache,s=e.length,r=jc(t,s);Sn(n,r)||(i.uniform1iv(this.addr,r),bn(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||s0,r[o])}function H_(i,e,t){let n=this.cache,s=e.length,r=jc(t,s);Sn(n,r)||(i.uniform1iv(this.addr,r),bn(n,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||r0,r[o])}function F_(i,e,t){let n=this.cache,s=e.length,r=jc(t,s);Sn(n,r)||(i.uniform1iv(this.addr,r),bn(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||i0,r[o])}function O_(i){switch(i){case 5126:return v_;case 35664:return __;case 35665:return M_;case 35666:return E_;case 35674:return S_;case 35675:return b_;case 35676:return w_;case 5124:case 35670:return T_;case 35667:case 35671:return R_;case 35668:case 35672:return A_;case 35669:case 35673:return C_;case 5125:return P_;case 36294:return I_;case 36295:return L_;case 36296:return D_;case 35678:case 36198:case 36298:case 36306:case 35682:return U_;case 35679:case 36299:case 36307:return N_;case 35680:case 36300:case 36308:case 36293:return H_;case 36289:case 36303:case 36311:case 36292:return F_}}var vu=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=y_(t.type)}},_u=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=O_(t.type)}},Mu=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],n)}}},Sh=/(\w+)(\])?(\[|\.)?/g;function up(i,e){i.seq.push(e),i.map[e.id]=e}function B_(i,e,t){let n=i.name,s=n.length;for(Sh.lastIndex=0;;){let r=Sh.exec(n),o=Sh.lastIndex,a=r[1],c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){up(t,l===void 0?new vu(a,i,e):new _u(a,i,e));break}else{let f=t.map[a];f===void 0&&(f=new Mu(a),up(t,f)),t=f}}}var Wr=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);B_(r,o,this)}}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&n.push(o)}return n}};function dp(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var z_=37297,k_=0;function V_(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function G_(i){let e=Vt.getPrimaries(Vt.workingColorSpace),t=Vt.getPrimaries(i),n;switch(e===t?n="":e===bc&&t===Sc?n="LinearDisplayP3ToLinearSRGB":e===Sc&&t===bc&&(n="LinearSRGBToLinearDisplayP3"),i){case Hs:case Qc:return[n,"LinearTransferOETF"];case ft:case ad:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function fp(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+V_(i.getShaderSource(e),o)}else return s}function W_(i,e){let t=G_(e);return`vec4 ${i}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function X_(i,e){let t;switch(e){case n1:t="Linear";break;case i1:t="Reinhard";break;case s1:t="Cineon";break;case Qu:t="ACESFilmic";break;case o1:t="AgX";break;case a1:t="Neutral";break;case r1:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var oc=new w;function q_(){Vt.getLuminanceCoefficients(oc);let i=oc.x.toFixed(4),e=oc.y.toFixed(4),t=oc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Y_(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Wo).join(`
`)}function Z_(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function $_(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function Wo(i){return i!==""}function pp(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function mp(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var K_=/^[ \t]*#include +<([\w\d./]+)>/gm;function Eu(i){return i.replace(K_,Q_)}var J_=new Map;function Q_(i,e){let t=Mt[e];if(t===void 0){let n=J_.get(e);if(n!==void 0)t=Mt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Eu(t)}var j_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function gp(i){return i.replace(j_,e2)}function e2(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function xp(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}function t2(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Bp?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Ju?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===ls&&(e="SHADOWMAP_TYPE_VSM"),e}function n2(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case qr:case Yr:e="ENVMAP_TYPE_CUBE";break;case Jc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function i2(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Yr:e="ENVMAP_MODE_REFRACTION";break}return e}function s2(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case zp:e="ENVMAP_BLENDING_MULTIPLY";break;case e1:e="ENVMAP_BLENDING_MIX";break;case t1:e="ENVMAP_BLENDING_ADD";break}return e}function r2(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function o2(i,e,t,n){let s=i.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,c=t2(t),l=n2(t),h=i2(t),f=s2(t),m=r2(t),u=Y_(t),g=Z_(r),x=s.createProgram(),p,d,E=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Wo).join(`
`),p.length>0&&(p+=`
`),d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Wo).join(`
`),d.length>0&&(d+=`
`)):(p=[xp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Wo).join(`
`),d=[xp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+f:"",m?"#define CUBEUV_TEXEL_WIDTH "+m.texelWidth:"",m?"#define CUBEUV_TEXEL_HEIGHT "+m.texelHeight:"",m?"#define CUBEUV_MAX_MIP "+m.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ps?"#define TONE_MAPPING":"",t.toneMapping!==Ps?Mt.tonemapping_pars_fragment:"",t.toneMapping!==Ps?X_("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Mt.colorspace_pars_fragment,W_("linearToOutputTexel",t.outputColorSpace),q_(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Wo).join(`
`)),o=Eu(o),o=pp(o,t),o=mp(o,t),a=Eu(a),a=pp(a,t),a=mp(a,t),o=gp(o),a=gp(a),t.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,p=[u,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,d=["#define varying in",t.glslVersion===Uf?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Uf?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);let v=E+p+o,M=E+d+a,L=dp(s,s.VERTEX_SHADER,v),A=dp(s,s.FRAGMENT_SHADER,M);s.attachShader(x,L),s.attachShader(x,A),t.index0AttributeName!==void 0?s.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function T(b){if(i.debug.checkShaderErrors){let B=s.getProgramInfoLog(x).trim(),W=s.getShaderInfoLog(L).trim(),X=s.getShaderInfoLog(A).trim(),H=!0,ee=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(H=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,x,L,A);else{let Me=fp(s,L,"vertex"),se=fp(s,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+b.name+`
Material Type: `+b.type+`

Program Info Log: `+B+`
`+Me+`
`+se)}else B!==""?console.warn("THREE.WebGLProgram: Program Info Log:",B):(W===""||X==="")&&(ee=!1);ee&&(b.diagnostics={runnable:H,programLog:B,vertexShader:{log:W,prefix:p},fragmentShader:{log:X,prefix:d}})}s.deleteShader(L),s.deleteShader(A),C=new Wr(s,x),J=$_(s,x)}let C;this.getUniforms=function(){return C===void 0&&T(this),C};let J;this.getAttributes=function(){return J===void 0&&T(this),J};let _=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return _===!1&&(_=s.getProgramParameter(x,z_)),_},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=k_++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=L,this.fragmentShader=A,this}var a2=0,Su=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new bu(e),t.set(e,n)),n}},bu=class{constructor(e){this.id=a2++,this.code=e,this.usedTimes=0}};function c2(i,e,t,n,s,r,o){let a=new ea,c=new Su,l=new Set,h=[],f=s.logarithmicDepthBuffer,m=s.reverseDepthBuffer,u=s.vertexTextures,g=s.precision,x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(_){return l.add(_),_===0?"uv":`uv${_}`}function d(_,b,B,W,X){let H=W.fog,ee=X.geometry,Me=_.isMeshStandardMaterial?W.environment:null,se=(_.isMeshStandardMaterial?t:e).get(_.envMap||Me),me=se&&se.mapping===Jc?se.image.height:null,N=x[_.type];_.precision!==null&&(g=s.getMaxPrecision(_.precision),g!==_.precision&&console.warn("THREE.WebGLProgram.getParameters:",_.precision,"not supported, using",g,"instead."));let Q=ee.morphAttributes.position||ee.morphAttributes.normal||ee.morphAttributes.color,ie=Q!==void 0?Q.length:0,j=0;ee.morphAttributes.position!==void 0&&(j=1),ee.morphAttributes.normal!==void 0&&(j=2),ee.morphAttributes.color!==void 0&&(j=3);let F,ae,z,V;if(N){let ke=Ki[N];F=ke.vertexShader,ae=ke.fragmentShader}else F=_.vertexShader,ae=_.fragmentShader,c.update(_),z=c.getVertexShaderID(_),V=c.getFragmentShaderID(_);let Y=i.getRenderTarget(),pe=X.isInstancedMesh===!0,ve=X.isBatchedMesh===!0,fe=!!_.map,$=!!_.matcap,I=!!se,Ee=!!_.aoMap,re=!!_.lightMap,ue=!!_.bumpMap,xe=!!_.normalMap,Ie=!!_.displacementMap,Ae=!!_.emissiveMap,U=!!_.metalnessMap,S=!!_.roughnessMap,K=_.anisotropy>0,ge=_.clearcoat>0,we=_.dispersion>0,_e=_.iridescence>0,We=_.sheen>0,Oe=_.transmission>0,qe=K&&!!_.anisotropyMap,mt=ge&&!!_.clearcoatMap,De=ge&&!!_.clearcoatNormalMap,Z=ge&&!!_.clearcoatRoughnessMap,ye=_e&&!!_.iridescenceMap,Pe=_e&&!!_.iridescenceThicknessMap,Ce=We&&!!_.sheenColorMap,Te=We&&!!_.sheenRoughnessMap,ce=!!_.specularMap,Ve=!!_.specularColorMap,G=!!_.specularIntensityMap,Re=Oe&&!!_.transmissionMap,oe=Oe&&!!_.thicknessMap,Se=!!_.gradientMap,Ue=!!_.alphaMap,Fe=_.alphaTest>0,lt=!!_.alphaHash,Pt=!!_.extensions,Ye=Ps;_.toneMapped&&(Y===null||Y.isXRRenderTarget===!0)&&(Ye=i.toneMapping);let Be={shaderID:N,shaderType:_.type,shaderName:_.name,vertexShader:F,fragmentShader:ae,defines:_.defines,customVertexShaderID:z,customFragmentShaderID:V,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:g,batching:ve,batchingColor:ve&&X._colorsTexture!==null,instancing:pe,instancingColor:pe&&X.instanceColor!==null,instancingMorph:pe&&X.morphTexture!==null,supportsVertexTextures:u,outputColorSpace:Y===null?i.outputColorSpace:Y.isXRRenderTarget===!0?Y.texture.colorSpace:Hs,alphaToCoverage:!!_.alphaToCoverage,map:fe,matcap:$,envMap:I,envMapMode:I&&se.mapping,envMapCubeUVHeight:me,aoMap:Ee,lightMap:re,bumpMap:ue,normalMap:xe,displacementMap:u&&Ie,emissiveMap:Ae,normalMapObjectSpace:xe&&_.normalMapType===h1,normalMapTangentSpace:xe&&_.normalMapType===od,metalnessMap:U,roughnessMap:S,anisotropy:K,anisotropyMap:qe,clearcoat:ge,clearcoatMap:mt,clearcoatNormalMap:De,clearcoatRoughnessMap:Z,dispersion:we,iridescence:_e,iridescenceMap:ye,iridescenceThicknessMap:Pe,sheen:We,sheenColorMap:Ce,sheenRoughnessMap:Te,specularMap:ce,specularColorMap:Ve,specularIntensityMap:G,transmission:Oe,transmissionMap:Re,thicknessMap:oe,gradientMap:Se,opaque:_.transparent===!1&&_.blending===kr&&_.alphaToCoverage===!1,alphaMap:Ue,alphaTest:Fe,alphaHash:lt,combine:_.combine,mapUv:fe&&p(_.map.channel),aoMapUv:Ee&&p(_.aoMap.channel),lightMapUv:re&&p(_.lightMap.channel),bumpMapUv:ue&&p(_.bumpMap.channel),normalMapUv:xe&&p(_.normalMap.channel),displacementMapUv:Ie&&p(_.displacementMap.channel),emissiveMapUv:Ae&&p(_.emissiveMap.channel),metalnessMapUv:U&&p(_.metalnessMap.channel),roughnessMapUv:S&&p(_.roughnessMap.channel),anisotropyMapUv:qe&&p(_.anisotropyMap.channel),clearcoatMapUv:mt&&p(_.clearcoatMap.channel),clearcoatNormalMapUv:De&&p(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Z&&p(_.clearcoatRoughnessMap.channel),iridescenceMapUv:ye&&p(_.iridescenceMap.channel),iridescenceThicknessMapUv:Pe&&p(_.iridescenceThicknessMap.channel),sheenColorMapUv:Ce&&p(_.sheenColorMap.channel),sheenRoughnessMapUv:Te&&p(_.sheenRoughnessMap.channel),specularMapUv:ce&&p(_.specularMap.channel),specularColorMapUv:Ve&&p(_.specularColorMap.channel),specularIntensityMapUv:G&&p(_.specularIntensityMap.channel),transmissionMapUv:Re&&p(_.transmissionMap.channel),thicknessMapUv:oe&&p(_.thicknessMap.channel),alphaMapUv:Ue&&p(_.alphaMap.channel),vertexTangents:!!ee.attributes.tangent&&(xe||K),vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!ee.attributes.color&&ee.attributes.color.itemSize===4,pointsUvs:X.isPoints===!0&&!!ee.attributes.uv&&(fe||Ue),fog:!!H,useFog:_.fog===!0,fogExp2:!!H&&H.isFogExp2,flatShading:_.flatShading===!0,sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:m,skinning:X.isSkinnedMesh===!0,morphTargets:ee.morphAttributes.position!==void 0,morphNormals:ee.morphAttributes.normal!==void 0,morphColors:ee.morphAttributes.color!==void 0,morphTargetsCount:ie,morphTextureStride:j,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:_.dithering,shadowMapEnabled:i.shadowMap.enabled&&B.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ye,decodeVideoTexture:fe&&_.map.isVideoTexture===!0&&Vt.getTransfer(_.map.colorSpace)===nn,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===Ut,flipSided:_.side===mn,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:Pt&&_.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Pt&&_.extensions.multiDraw===!0||ve)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return Be.vertexUv1s=l.has(1),Be.vertexUv2s=l.has(2),Be.vertexUv3s=l.has(3),l.clear(),Be}function E(_){let b=[];if(_.shaderID?b.push(_.shaderID):(b.push(_.customVertexShaderID),b.push(_.customFragmentShaderID)),_.defines!==void 0)for(let B in _.defines)b.push(B),b.push(_.defines[B]);return _.isRawShaderMaterial===!1&&(v(b,_),M(b,_),b.push(i.outputColorSpace)),b.push(_.customProgramCacheKey),b.join()}function v(_,b){_.push(b.precision),_.push(b.outputColorSpace),_.push(b.envMapMode),_.push(b.envMapCubeUVHeight),_.push(b.mapUv),_.push(b.alphaMapUv),_.push(b.lightMapUv),_.push(b.aoMapUv),_.push(b.bumpMapUv),_.push(b.normalMapUv),_.push(b.displacementMapUv),_.push(b.emissiveMapUv),_.push(b.metalnessMapUv),_.push(b.roughnessMapUv),_.push(b.anisotropyMapUv),_.push(b.clearcoatMapUv),_.push(b.clearcoatNormalMapUv),_.push(b.clearcoatRoughnessMapUv),_.push(b.iridescenceMapUv),_.push(b.iridescenceThicknessMapUv),_.push(b.sheenColorMapUv),_.push(b.sheenRoughnessMapUv),_.push(b.specularMapUv),_.push(b.specularColorMapUv),_.push(b.specularIntensityMapUv),_.push(b.transmissionMapUv),_.push(b.thicknessMapUv),_.push(b.combine),_.push(b.fogExp2),_.push(b.sizeAttenuation),_.push(b.morphTargetsCount),_.push(b.morphAttributeCount),_.push(b.numDirLights),_.push(b.numPointLights),_.push(b.numSpotLights),_.push(b.numSpotLightMaps),_.push(b.numHemiLights),_.push(b.numRectAreaLights),_.push(b.numDirLightShadows),_.push(b.numPointLightShadows),_.push(b.numSpotLightShadows),_.push(b.numSpotLightShadowsWithMaps),_.push(b.numLightProbes),_.push(b.shadowMapType),_.push(b.toneMapping),_.push(b.numClippingPlanes),_.push(b.numClipIntersection),_.push(b.depthPacking)}function M(_,b){a.disableAll(),b.supportsVertexTextures&&a.enable(0),b.instancing&&a.enable(1),b.instancingColor&&a.enable(2),b.instancingMorph&&a.enable(3),b.matcap&&a.enable(4),b.envMap&&a.enable(5),b.normalMapObjectSpace&&a.enable(6),b.normalMapTangentSpace&&a.enable(7),b.clearcoat&&a.enable(8),b.iridescence&&a.enable(9),b.alphaTest&&a.enable(10),b.vertexColors&&a.enable(11),b.vertexAlphas&&a.enable(12),b.vertexUv1s&&a.enable(13),b.vertexUv2s&&a.enable(14),b.vertexUv3s&&a.enable(15),b.vertexTangents&&a.enable(16),b.anisotropy&&a.enable(17),b.alphaHash&&a.enable(18),b.batching&&a.enable(19),b.dispersion&&a.enable(20),b.batchingColor&&a.enable(21),_.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.reverseDepthBuffer&&a.enable(4),b.skinning&&a.enable(5),b.morphTargets&&a.enable(6),b.morphNormals&&a.enable(7),b.morphColors&&a.enable(8),b.premultipliedAlpha&&a.enable(9),b.shadowMapEnabled&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),b.alphaToCoverage&&a.enable(20),_.push(a.mask)}function L(_){let b=x[_.type],B;if(b){let W=Ki[b];B=Q1.clone(W.uniforms)}else B=_.uniforms;return B}function A(_,b){let B;for(let W=0,X=h.length;W<X;W++){let H=h[W];if(H.cacheKey===b){B=H,++B.usedTimes;break}}return B===void 0&&(B=new o2(i,b,_,r),h.push(B)),B}function T(_){if(--_.usedTimes===0){let b=h.indexOf(_);h[b]=h[h.length-1],h.pop(),_.destroy()}}function C(_){c.remove(_)}function J(){c.dispose()}return{getParameters:d,getProgramCacheKey:E,getUniforms:L,acquireProgram:A,releaseProgram:T,releaseShaderCache:C,programs:h,dispose:J}}function l2(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,c){i.get(o)[a]=c}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function h2(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function yp(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function vp(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(f,m,u,g,x,p){let d=i[e];return d===void 0?(d={id:f.id,object:f,geometry:m,material:u,groupOrder:g,renderOrder:f.renderOrder,z:x,group:p},i[e]=d):(d.id=f.id,d.object=f,d.geometry=m,d.material=u,d.groupOrder=g,d.renderOrder=f.renderOrder,d.z=x,d.group=p),e++,d}function a(f,m,u,g,x,p){let d=o(f,m,u,g,x,p);u.transmission>0?n.push(d):u.transparent===!0?s.push(d):t.push(d)}function c(f,m,u,g,x,p){let d=o(f,m,u,g,x,p);u.transmission>0?n.unshift(d):u.transparent===!0?s.unshift(d):t.unshift(d)}function l(f,m){t.length>1&&t.sort(f||h2),n.length>1&&n.sort(m||yp),s.length>1&&s.sort(m||yp)}function h(){for(let f=e,m=i.length;f<m;f++){let u=i[f];if(u.id===null)break;u.id=null,u.object=null,u.geometry=null,u.material=null,u.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:a,unshift:c,finish:h,sort:l}}function u2(){let i=new WeakMap;function e(n,s){let r=i.get(n),o;return r===void 0?(o=new vp,i.set(n,[o])):s>=r.length?(o=new vp,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function d2(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new w,color:new ht};break;case"SpotLight":t={position:new w,direction:new w,color:new ht,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new w,color:new ht,distance:0,decay:0};break;case"HemisphereLight":t={direction:new w,skyColor:new ht,groundColor:new ht};break;case"RectAreaLight":t={color:new ht,position:new w,halfWidth:new w,halfHeight:new w};break}return i[e.id]=t,t}}}function f2(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new He};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new He};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new He,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var p2=0;function m2(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function g2(i){let e=new d2,t=f2(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new w);let s=new w,r=new St,o=new St;function a(l){let h=0,f=0,m=0;for(let J=0;J<9;J++)n.probe[J].set(0,0,0);let u=0,g=0,x=0,p=0,d=0,E=0,v=0,M=0,L=0,A=0,T=0;l.sort(m2);for(let J=0,_=l.length;J<_;J++){let b=l[J],B=b.color,W=b.intensity,X=b.distance,H=b.shadow&&b.shadow.map?b.shadow.map.texture:null;if(b.isAmbientLight)h+=B.r*W,f+=B.g*W,m+=B.b*W;else if(b.isLightProbe){for(let ee=0;ee<9;ee++)n.probe[ee].addScaledVector(b.sh.coefficients[ee],W);T++}else if(b.isDirectionalLight){let ee=e.get(b);if(ee.color.copy(b.color).multiplyScalar(b.intensity),b.castShadow){let Me=b.shadow,se=t.get(b);se.shadowIntensity=Me.intensity,se.shadowBias=Me.bias,se.shadowNormalBias=Me.normalBias,se.shadowRadius=Me.radius,se.shadowMapSize=Me.mapSize,n.directionalShadow[u]=se,n.directionalShadowMap[u]=H,n.directionalShadowMatrix[u]=b.shadow.matrix,E++}n.directional[u]=ee,u++}else if(b.isSpotLight){let ee=e.get(b);ee.position.setFromMatrixPosition(b.matrixWorld),ee.color.copy(B).multiplyScalar(W),ee.distance=X,ee.coneCos=Math.cos(b.angle),ee.penumbraCos=Math.cos(b.angle*(1-b.penumbra)),ee.decay=b.decay,n.spot[x]=ee;let Me=b.shadow;if(b.map&&(n.spotLightMap[L]=b.map,L++,Me.updateMatrices(b),b.castShadow&&A++),n.spotLightMatrix[x]=Me.matrix,b.castShadow){let se=t.get(b);se.shadowIntensity=Me.intensity,se.shadowBias=Me.bias,se.shadowNormalBias=Me.normalBias,se.shadowRadius=Me.radius,se.shadowMapSize=Me.mapSize,n.spotShadow[x]=se,n.spotShadowMap[x]=H,M++}x++}else if(b.isRectAreaLight){let ee=e.get(b);ee.color.copy(B).multiplyScalar(W),ee.halfWidth.set(b.width*.5,0,0),ee.halfHeight.set(0,b.height*.5,0),n.rectArea[p]=ee,p++}else if(b.isPointLight){let ee=e.get(b);if(ee.color.copy(b.color).multiplyScalar(b.intensity),ee.distance=b.distance,ee.decay=b.decay,b.castShadow){let Me=b.shadow,se=t.get(b);se.shadowIntensity=Me.intensity,se.shadowBias=Me.bias,se.shadowNormalBias=Me.normalBias,se.shadowRadius=Me.radius,se.shadowMapSize=Me.mapSize,se.shadowCameraNear=Me.camera.near,se.shadowCameraFar=Me.camera.far,n.pointShadow[g]=se,n.pointShadowMap[g]=H,n.pointShadowMatrix[g]=b.shadow.matrix,v++}n.point[g]=ee,g++}else if(b.isHemisphereLight){let ee=e.get(b);ee.skyColor.copy(b.color).multiplyScalar(W),ee.groundColor.copy(b.groundColor).multiplyScalar(W),n.hemi[d]=ee,d++}}p>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=$e.LTC_FLOAT_1,n.rectAreaLTC2=$e.LTC_FLOAT_2):(n.rectAreaLTC1=$e.LTC_HALF_1,n.rectAreaLTC2=$e.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=f,n.ambient[2]=m;let C=n.hash;(C.directionalLength!==u||C.pointLength!==g||C.spotLength!==x||C.rectAreaLength!==p||C.hemiLength!==d||C.numDirectionalShadows!==E||C.numPointShadows!==v||C.numSpotShadows!==M||C.numSpotMaps!==L||C.numLightProbes!==T)&&(n.directional.length=u,n.spot.length=x,n.rectArea.length=p,n.point.length=g,n.hemi.length=d,n.directionalShadow.length=E,n.directionalShadowMap.length=E,n.pointShadow.length=v,n.pointShadowMap.length=v,n.spotShadow.length=M,n.spotShadowMap.length=M,n.directionalShadowMatrix.length=E,n.pointShadowMatrix.length=v,n.spotLightMatrix.length=M+L-A,n.spotLightMap.length=L,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=T,C.directionalLength=u,C.pointLength=g,C.spotLength=x,C.rectAreaLength=p,C.hemiLength=d,C.numDirectionalShadows=E,C.numPointShadows=v,C.numSpotShadows=M,C.numSpotMaps=L,C.numLightProbes=T,n.version=p2++)}function c(l,h){let f=0,m=0,u=0,g=0,x=0,p=h.matrixWorldInverse;for(let d=0,E=l.length;d<E;d++){let v=l[d];if(v.isDirectionalLight){let M=n.directional[f];M.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(p),f++}else if(v.isSpotLight){let M=n.spot[u];M.position.setFromMatrixPosition(v.matrixWorld),M.position.applyMatrix4(p),M.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(p),u++}else if(v.isRectAreaLight){let M=n.rectArea[g];M.position.setFromMatrixPosition(v.matrixWorld),M.position.applyMatrix4(p),o.identity(),r.copy(v.matrixWorld),r.premultiply(p),o.extractRotation(r),M.halfWidth.set(v.width*.5,0,0),M.halfHeight.set(0,v.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),g++}else if(v.isPointLight){let M=n.point[m];M.position.setFromMatrixPosition(v.matrixWorld),M.position.applyMatrix4(p),m++}else if(v.isHemisphereLight){let M=n.hemi[x];M.direction.setFromMatrixPosition(v.matrixWorld),M.direction.transformDirection(p),x++}}}return{setup:a,setupView:c,state:n}}function _p(i){let e=new g2(i),t=[],n=[];function s(h){l.camera=h,t.length=0,n.length=0}function r(h){t.push(h)}function o(h){n.push(h)}function a(){e.setup(t)}function c(h){e.setupView(t,h)}let l={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function x2(i){let e=new WeakMap;function t(s,r=0){let o=e.get(s),a;return o===void 0?(a=new _p(i),e.set(s,[a])):r>=o.length?(a=new _p(i),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}var na=class extends fs{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=l1,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},wu=class extends fs{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},y2=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,v2=`uniform sampler2D shadow_pass;
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
}`;function _2(i,e,t){let n=new ta,s=new He,r=new He,o=new Yt,a=new na({depthPacking:rd}),c=new wu,l={},h=t.maxTextureSize,f={[Qi]:mn,[mn]:Qi,[Ut]:Ut},m=new ji({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new He},radius:{value:4}},vertexShader:y2,fragmentShader:v2}),u=m.clone();u.defines.HORIZONTAL_PASS=1;let g=new Nt;g.setAttribute("position",new In(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new ut(g,m),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Bp;let d=this.type;this.render=function(A,T,C){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||A.length===0)return;let J=i.getRenderTarget(),_=i.getActiveCubeFace(),b=i.getActiveMipmapLevel(),B=i.state;B.setBlending(Cs),B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);let W=d!==ls&&this.type===ls,X=d===ls&&this.type!==ls;for(let H=0,ee=A.length;H<ee;H++){let Me=A[H],se=Me.shadow;if(se===void 0){console.warn("THREE.WebGLShadowMap:",Me,"has no shadow.");continue}if(se.autoUpdate===!1&&se.needsUpdate===!1)continue;s.copy(se.mapSize);let me=se.getFrameExtents();if(s.multiply(me),r.copy(se.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/me.x),s.x=r.x*me.x,se.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/me.y),s.y=r.y*me.y,se.mapSize.y=r.y)),se.map===null||W===!0||X===!0){let Q=this.type!==ls?{minFilter:Wn,magFilter:Wn}:{};se.map!==null&&se.map.dispose(),se.map=new ds(s.x,s.y,Q),se.map.texture.name=Me.name+".shadowMap",se.camera.updateProjectionMatrix()}i.setRenderTarget(se.map),i.clear();let N=se.getViewportCount();for(let Q=0;Q<N;Q++){let ie=se.getViewport(Q);o.set(r.x*ie.x,r.y*ie.y,r.x*ie.z,r.y*ie.w),B.viewport(o),se.updateMatrices(Me,Q),n=se.getFrustum(),M(T,C,se.camera,Me,this.type)}se.isPointLightShadow!==!0&&this.type===ls&&E(se,C),se.needsUpdate=!1}d=this.type,p.needsUpdate=!1,i.setRenderTarget(J,_,b)};function E(A,T){let C=e.update(x);m.defines.VSM_SAMPLES!==A.blurSamples&&(m.defines.VSM_SAMPLES=A.blurSamples,u.defines.VSM_SAMPLES=A.blurSamples,m.needsUpdate=!0,u.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new ds(s.x,s.y)),m.uniforms.shadow_pass.value=A.map.texture,m.uniforms.resolution.value=A.mapSize,m.uniforms.radius.value=A.radius,i.setRenderTarget(A.mapPass),i.clear(),i.renderBufferDirect(T,null,C,m,x,null),u.uniforms.shadow_pass.value=A.mapPass.texture,u.uniforms.resolution.value=A.mapSize,u.uniforms.radius.value=A.radius,i.setRenderTarget(A.map),i.clear(),i.renderBufferDirect(T,null,C,u,x,null)}function v(A,T,C,J){let _=null,b=C.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(b!==void 0)_=b;else if(_=C.isPointLight===!0?c:a,i.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){let B=_.uuid,W=T.uuid,X=l[B];X===void 0&&(X={},l[B]=X);let H=X[W];H===void 0&&(H=_.clone(),X[W]=H,T.addEventListener("dispose",L)),_=H}if(_.visible=T.visible,_.wireframe=T.wireframe,J===ls?_.side=T.shadowSide!==null?T.shadowSide:T.side:_.side=T.shadowSide!==null?T.shadowSide:f[T.side],_.alphaMap=T.alphaMap,_.alphaTest=T.alphaTest,_.map=T.map,_.clipShadows=T.clipShadows,_.clippingPlanes=T.clippingPlanes,_.clipIntersection=T.clipIntersection,_.displacementMap=T.displacementMap,_.displacementScale=T.displacementScale,_.displacementBias=T.displacementBias,_.wireframeLinewidth=T.wireframeLinewidth,_.linewidth=T.linewidth,C.isPointLight===!0&&_.isMeshDistanceMaterial===!0){let B=i.properties.get(_);B.light=C}return _}function M(A,T,C,J,_){if(A.visible===!1)return;if(A.layers.test(T.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&_===ls)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,A.matrixWorld);let W=e.update(A),X=A.material;if(Array.isArray(X)){let H=W.groups;for(let ee=0,Me=H.length;ee<Me;ee++){let se=H[ee],me=X[se.materialIndex];if(me&&me.visible){let N=v(A,me,J,_);A.onBeforeShadow(i,A,T,C,W,N,se),i.renderBufferDirect(C,null,W,N,A,se),A.onAfterShadow(i,A,T,C,W,N,se)}}}else if(X.visible){let H=v(A,X,J,_);A.onBeforeShadow(i,A,T,C,W,H,null),i.renderBufferDirect(C,null,W,H,A,null),A.onAfterShadow(i,A,T,C,W,H,null)}}let B=A.children;for(let W=0,X=B.length;W<X;W++)M(B[W],T,C,J,_)}function L(A){A.target.removeEventListener("dispose",L);for(let C in l){let J=l[C],_=A.target.uuid;_ in J&&(J[_].dispose(),delete J[_])}}}var M2={[Lh]:Dh,[Uh]:Fh,[Nh]:Oh,[Xr]:Hh,[Dh]:Lh,[Fh]:Uh,[Oh]:Nh,[Hh]:Xr};function E2(i){function e(){let G=!1,Re=new Yt,oe=null,Se=new Yt(0,0,0,0);return{setMask:function(Ue){oe!==Ue&&!G&&(i.colorMask(Ue,Ue,Ue,Ue),oe=Ue)},setLocked:function(Ue){G=Ue},setClear:function(Ue,Fe,lt,Pt,Ye){Ye===!0&&(Ue*=Pt,Fe*=Pt,lt*=Pt),Re.set(Ue,Fe,lt,Pt),Se.equals(Re)===!1&&(i.clearColor(Ue,Fe,lt,Pt),Se.copy(Re))},reset:function(){G=!1,oe=null,Se.set(-1,0,0,0)}}}function t(){let G=!1,Re=!1,oe=null,Se=null,Ue=null;return{setReversed:function(Fe){Re=Fe},setTest:function(Fe){Fe?z(i.DEPTH_TEST):V(i.DEPTH_TEST)},setMask:function(Fe){oe!==Fe&&!G&&(i.depthMask(Fe),oe=Fe)},setFunc:function(Fe){if(Re&&(Fe=M2[Fe]),Se!==Fe){switch(Fe){case Lh:i.depthFunc(i.NEVER);break;case Dh:i.depthFunc(i.ALWAYS);break;case Uh:i.depthFunc(i.LESS);break;case Xr:i.depthFunc(i.LEQUAL);break;case Nh:i.depthFunc(i.EQUAL);break;case Hh:i.depthFunc(i.GEQUAL);break;case Fh:i.depthFunc(i.GREATER);break;case Oh:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Se=Fe}},setLocked:function(Fe){G=Fe},setClear:function(Fe){Ue!==Fe&&(i.clearDepth(Fe),Ue=Fe)},reset:function(){G=!1,oe=null,Se=null,Ue=null}}}function n(){let G=!1,Re=null,oe=null,Se=null,Ue=null,Fe=null,lt=null,Pt=null,Ye=null;return{setTest:function(Be){G||(Be?z(i.STENCIL_TEST):V(i.STENCIL_TEST))},setMask:function(Be){Re!==Be&&!G&&(i.stencilMask(Be),Re=Be)},setFunc:function(Be,ke,it){(oe!==Be||Se!==ke||Ue!==it)&&(i.stencilFunc(Be,ke,it),oe=Be,Se=ke,Ue=it)},setOp:function(Be,ke,it){(Fe!==Be||lt!==ke||Pt!==it)&&(i.stencilOp(Be,ke,it),Fe=Be,lt=ke,Pt=it)},setLocked:function(Be){G=Be},setClear:function(Be){Ye!==Be&&(i.clearStencil(Be),Ye=Be)},reset:function(){G=!1,Re=null,oe=null,Se=null,Ue=null,Fe=null,lt=null,Pt=null,Ye=null}}}let s=new e,r=new t,o=new n,a=new WeakMap,c=new WeakMap,l={},h={},f=new WeakMap,m=[],u=null,g=!1,x=null,p=null,d=null,E=null,v=null,M=null,L=null,A=new ht(0,0,0),T=0,C=!1,J=null,_=null,b=null,B=null,W=null,X=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),H=!1,ee=0,Me=i.getParameter(i.VERSION);Me.indexOf("WebGL")!==-1?(ee=parseFloat(/^WebGL (\d)/.exec(Me)[1]),H=ee>=1):Me.indexOf("OpenGL ES")!==-1&&(ee=parseFloat(/^OpenGL ES (\d)/.exec(Me)[1]),H=ee>=2);let se=null,me={},N=i.getParameter(i.SCISSOR_BOX),Q=i.getParameter(i.VIEWPORT),ie=new Yt().fromArray(N),j=new Yt().fromArray(Q);function F(G,Re,oe,Se){let Ue=new Uint8Array(4),Fe=i.createTexture();i.bindTexture(G,Fe),i.texParameteri(G,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(G,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let lt=0;lt<oe;lt++)G===i.TEXTURE_3D||G===i.TEXTURE_2D_ARRAY?i.texImage3D(Re,0,i.RGBA,1,1,Se,0,i.RGBA,i.UNSIGNED_BYTE,Ue):i.texImage2D(Re+lt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Ue);return Fe}let ae={};ae[i.TEXTURE_2D]=F(i.TEXTURE_2D,i.TEXTURE_2D,1),ae[i.TEXTURE_CUBE_MAP]=F(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),ae[i.TEXTURE_2D_ARRAY]=F(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ae[i.TEXTURE_3D]=F(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),r.setClear(1),o.setClear(0),z(i.DEPTH_TEST),r.setFunc(Xr),re(!1),ue(Tf),z(i.CULL_FACE),I(Cs);function z(G){l[G]!==!0&&(i.enable(G),l[G]=!0)}function V(G){l[G]!==!1&&(i.disable(G),l[G]=!1)}function Y(G,Re){return h[G]!==Re?(i.bindFramebuffer(G,Re),h[G]=Re,G===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=Re),G===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=Re),!0):!1}function pe(G,Re){let oe=m,Se=!1;if(G){oe=f.get(Re),oe===void 0&&(oe=[],f.set(Re,oe));let Ue=G.textures;if(oe.length!==Ue.length||oe[0]!==i.COLOR_ATTACHMENT0){for(let Fe=0,lt=Ue.length;Fe<lt;Fe++)oe[Fe]=i.COLOR_ATTACHMENT0+Fe;oe.length=Ue.length,Se=!0}}else oe[0]!==i.BACK&&(oe[0]=i.BACK,Se=!0);Se&&i.drawBuffers(oe)}function ve(G){return u!==G?(i.useProgram(G),u=G,!0):!1}let fe={[er]:i.FUNC_ADD,[Fg]:i.FUNC_SUBTRACT,[Og]:i.FUNC_REVERSE_SUBTRACT};fe[Bg]=i.MIN,fe[zg]=i.MAX;let $={[kg]:i.ZERO,[Vg]:i.ONE,[Gg]:i.SRC_COLOR,[Ph]:i.SRC_ALPHA,[$g]:i.SRC_ALPHA_SATURATE,[Yg]:i.DST_COLOR,[Xg]:i.DST_ALPHA,[Wg]:i.ONE_MINUS_SRC_COLOR,[Ih]:i.ONE_MINUS_SRC_ALPHA,[Zg]:i.ONE_MINUS_DST_COLOR,[qg]:i.ONE_MINUS_DST_ALPHA,[Kg]:i.CONSTANT_COLOR,[Jg]:i.ONE_MINUS_CONSTANT_COLOR,[Qg]:i.CONSTANT_ALPHA,[jg]:i.ONE_MINUS_CONSTANT_ALPHA};function I(G,Re,oe,Se,Ue,Fe,lt,Pt,Ye,Be){if(G===Cs){g===!0&&(V(i.BLEND),g=!1);return}if(g===!1&&(z(i.BLEND),g=!0),G!==Hg){if(G!==x||Be!==C){if((p!==er||v!==er)&&(i.blendEquation(i.FUNC_ADD),p=er,v=er),Be)switch(G){case kr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case _c:i.blendFunc(i.ONE,i.ONE);break;case Rf:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Af:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}else switch(G){case kr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case _c:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Rf:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Af:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}d=null,E=null,M=null,L=null,A.set(0,0,0),T=0,x=G,C=Be}return}Ue=Ue||Re,Fe=Fe||oe,lt=lt||Se,(Re!==p||Ue!==v)&&(i.blendEquationSeparate(fe[Re],fe[Ue]),p=Re,v=Ue),(oe!==d||Se!==E||Fe!==M||lt!==L)&&(i.blendFuncSeparate($[oe],$[Se],$[Fe],$[lt]),d=oe,E=Se,M=Fe,L=lt),(Pt.equals(A)===!1||Ye!==T)&&(i.blendColor(Pt.r,Pt.g,Pt.b,Ye),A.copy(Pt),T=Ye),x=G,C=!1}function Ee(G,Re){G.side===Ut?V(i.CULL_FACE):z(i.CULL_FACE);let oe=G.side===mn;Re&&(oe=!oe),re(oe),G.blending===kr&&G.transparent===!1?I(Cs):I(G.blending,G.blendEquation,G.blendSrc,G.blendDst,G.blendEquationAlpha,G.blendSrcAlpha,G.blendDstAlpha,G.blendColor,G.blendAlpha,G.premultipliedAlpha),r.setFunc(G.depthFunc),r.setTest(G.depthTest),r.setMask(G.depthWrite),s.setMask(G.colorWrite);let Se=G.stencilWrite;o.setTest(Se),Se&&(o.setMask(G.stencilWriteMask),o.setFunc(G.stencilFunc,G.stencilRef,G.stencilFuncMask),o.setOp(G.stencilFail,G.stencilZFail,G.stencilZPass)),Ie(G.polygonOffset,G.polygonOffsetFactor,G.polygonOffsetUnits),G.alphaToCoverage===!0?z(i.SAMPLE_ALPHA_TO_COVERAGE):V(i.SAMPLE_ALPHA_TO_COVERAGE)}function re(G){J!==G&&(G?i.frontFace(i.CW):i.frontFace(i.CCW),J=G)}function ue(G){G!==Ug?(z(i.CULL_FACE),G!==_&&(G===Tf?i.cullFace(i.BACK):G===Ng?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):V(i.CULL_FACE),_=G}function xe(G){G!==b&&(H&&i.lineWidth(G),b=G)}function Ie(G,Re,oe){G?(z(i.POLYGON_OFFSET_FILL),(B!==Re||W!==oe)&&(i.polygonOffset(Re,oe),B=Re,W=oe)):V(i.POLYGON_OFFSET_FILL)}function Ae(G){G?z(i.SCISSOR_TEST):V(i.SCISSOR_TEST)}function U(G){G===void 0&&(G=i.TEXTURE0+X-1),se!==G&&(i.activeTexture(G),se=G)}function S(G,Re,oe){oe===void 0&&(se===null?oe=i.TEXTURE0+X-1:oe=se);let Se=me[oe];Se===void 0&&(Se={type:void 0,texture:void 0},me[oe]=Se),(Se.type!==G||Se.texture!==Re)&&(se!==oe&&(i.activeTexture(oe),se=oe),i.bindTexture(G,Re||ae[G]),Se.type=G,Se.texture=Re)}function K(){let G=me[se];G!==void 0&&G.type!==void 0&&(i.bindTexture(G.type,null),G.type=void 0,G.texture=void 0)}function ge(){try{i.compressedTexImage2D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function we(){try{i.compressedTexImage3D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function _e(){try{i.texSubImage2D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function We(){try{i.texSubImage3D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Oe(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function qe(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function mt(){try{i.texStorage2D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function De(){try{i.texStorage3D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Z(){try{i.texImage2D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function ye(){try{i.texImage3D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Pe(G){ie.equals(G)===!1&&(i.scissor(G.x,G.y,G.z,G.w),ie.copy(G))}function Ce(G){j.equals(G)===!1&&(i.viewport(G.x,G.y,G.z,G.w),j.copy(G))}function Te(G,Re){let oe=c.get(Re);oe===void 0&&(oe=new WeakMap,c.set(Re,oe));let Se=oe.get(G);Se===void 0&&(Se=i.getUniformBlockIndex(Re,G.name),oe.set(G,Se))}function ce(G,Re){let Se=c.get(Re).get(G);a.get(Re)!==Se&&(i.uniformBlockBinding(Re,Se,G.__bindingPointIndex),a.set(Re,Se))}function Ve(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),l={},se=null,me={},h={},f=new WeakMap,m=[],u=null,g=!1,x=null,p=null,d=null,E=null,v=null,M=null,L=null,A=new ht(0,0,0),T=0,C=!1,J=null,_=null,b=null,B=null,W=null,ie.set(0,0,i.canvas.width,i.canvas.height),j.set(0,0,i.canvas.width,i.canvas.height),s.reset(),r.reset(),o.reset()}return{buffers:{color:s,depth:r,stencil:o},enable:z,disable:V,bindFramebuffer:Y,drawBuffers:pe,useProgram:ve,setBlending:I,setMaterial:Ee,setFlipSided:re,setCullFace:ue,setLineWidth:xe,setPolygonOffset:Ie,setScissorTest:Ae,activeTexture:U,bindTexture:S,unbindTexture:K,compressedTexImage2D:ge,compressedTexImage3D:we,texImage2D:Z,texImage3D:ye,updateUBOMapping:Te,uniformBlockBinding:ce,texStorage2D:mt,texStorage3D:De,texSubImage2D:_e,texSubImage3D:We,compressedTexSubImage2D:Oe,compressedTexSubImage3D:qe,scissor:Pe,viewport:Ce,reset:Ve}}function Mp(i,e,t,n){let s=S2(n);switch(t){case Xp:return i*e;case Yp:return i*e;case Zp:return i*e*2;case ua:return i*e/s.components*s.byteLength;case nd:return i*e/s.components*s.byteLength;case $p:return i*e*2/s.components*s.byteLength;case id:return i*e*2/s.components*s.byteLength;case qp:return i*e*3/s.components*s.byteLength;case ui:return i*e*4/s.components*s.byteLength;case sd:return i*e*4/s.components*s.byteLength;case pc:case mc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case gc:case xc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Vh:case Wh:return Math.max(i,16)*Math.max(e,8)/4;case kh:case Gh:return Math.max(i,8)*Math.max(e,8)/2;case Xh:case qh:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Yh:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Zh:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case $h:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Kh:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Jh:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Qh:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case jh:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case eu:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case tu:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case nu:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case iu:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case su:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case ru:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case ou:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case au:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case yc:case cu:case lu:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Kp:case hu:return Math.ceil(i/4)*Math.ceil(e/4)*8;case uu:case du:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function S2(i){switch(i){case us:case Vp:return{byteLength:1,components:1};case Jo:case Gp:case ha:return{byteLength:2,components:1};case ed:case td:return{byteLength:2,components:4};case rr:case ju:case Ji:return{byteLength:4,components:1};case Wp:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function b2(i,e,t,n,s,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new He,h=new WeakMap,f,m=new WeakMap,u=!1;try{u=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(U,S){return u?new OffscreenCanvas(U,S):Qo("canvas")}function x(U,S,K){let ge=1,we=Ae(U);if((we.width>K||we.height>K)&&(ge=K/Math.max(we.width,we.height)),ge<1)if(typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&U instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&U instanceof ImageBitmap||typeof VideoFrame<"u"&&U instanceof VideoFrame){let _e=Math.floor(ge*we.width),We=Math.floor(ge*we.height);f===void 0&&(f=g(_e,We));let Oe=S?g(_e,We):f;return Oe.width=_e,Oe.height=We,Oe.getContext("2d").drawImage(U,0,0,_e,We),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+we.width+"x"+we.height+") to ("+_e+"x"+We+")."),Oe}else return"data"in U&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+we.width+"x"+we.height+")."),U;return U}function p(U){return U.generateMipmaps&&U.minFilter!==Wn&&U.minFilter!==En}function d(U){i.generateMipmap(U)}function E(U,S,K,ge,we=!1){if(U!==null){if(i[U]!==void 0)return i[U];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+U+"'")}let _e=S;if(S===i.RED&&(K===i.FLOAT&&(_e=i.R32F),K===i.HALF_FLOAT&&(_e=i.R16F),K===i.UNSIGNED_BYTE&&(_e=i.R8)),S===i.RED_INTEGER&&(K===i.UNSIGNED_BYTE&&(_e=i.R8UI),K===i.UNSIGNED_SHORT&&(_e=i.R16UI),K===i.UNSIGNED_INT&&(_e=i.R32UI),K===i.BYTE&&(_e=i.R8I),K===i.SHORT&&(_e=i.R16I),K===i.INT&&(_e=i.R32I)),S===i.RG&&(K===i.FLOAT&&(_e=i.RG32F),K===i.HALF_FLOAT&&(_e=i.RG16F),K===i.UNSIGNED_BYTE&&(_e=i.RG8)),S===i.RG_INTEGER&&(K===i.UNSIGNED_BYTE&&(_e=i.RG8UI),K===i.UNSIGNED_SHORT&&(_e=i.RG16UI),K===i.UNSIGNED_INT&&(_e=i.RG32UI),K===i.BYTE&&(_e=i.RG8I),K===i.SHORT&&(_e=i.RG16I),K===i.INT&&(_e=i.RG32I)),S===i.RGB_INTEGER&&(K===i.UNSIGNED_BYTE&&(_e=i.RGB8UI),K===i.UNSIGNED_SHORT&&(_e=i.RGB16UI),K===i.UNSIGNED_INT&&(_e=i.RGB32UI),K===i.BYTE&&(_e=i.RGB8I),K===i.SHORT&&(_e=i.RGB16I),K===i.INT&&(_e=i.RGB32I)),S===i.RGBA_INTEGER&&(K===i.UNSIGNED_BYTE&&(_e=i.RGBA8UI),K===i.UNSIGNED_SHORT&&(_e=i.RGBA16UI),K===i.UNSIGNED_INT&&(_e=i.RGBA32UI),K===i.BYTE&&(_e=i.RGBA8I),K===i.SHORT&&(_e=i.RGBA16I),K===i.INT&&(_e=i.RGBA32I)),S===i.RGB&&K===i.UNSIGNED_INT_5_9_9_9_REV&&(_e=i.RGB9_E5),S===i.RGBA){let We=we?Ec:Vt.getTransfer(ge);K===i.FLOAT&&(_e=i.RGBA32F),K===i.HALF_FLOAT&&(_e=i.RGBA16F),K===i.UNSIGNED_BYTE&&(_e=We===nn?i.SRGB8_ALPHA8:i.RGBA8),K===i.UNSIGNED_SHORT_4_4_4_4&&(_e=i.RGBA4),K===i.UNSIGNED_SHORT_5_5_5_1&&(_e=i.RGB5_A1)}return(_e===i.R16F||_e===i.R32F||_e===i.RG16F||_e===i.RG32F||_e===i.RGBA16F||_e===i.RGBA32F)&&e.get("EXT_color_buffer_float"),_e}function v(U,S){let K;return U?S===null||S===rr||S===Zr?K=i.DEPTH24_STENCIL8:S===Ji?K=i.DEPTH32F_STENCIL8:S===Jo&&(K=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===rr||S===Zr?K=i.DEPTH_COMPONENT24:S===Ji?K=i.DEPTH_COMPONENT32F:S===Jo&&(K=i.DEPTH_COMPONENT16),K}function M(U,S){return p(U)===!0||U.isFramebufferTexture&&U.minFilter!==Wn&&U.minFilter!==En?Math.log2(Math.max(S.width,S.height))+1:U.mipmaps!==void 0&&U.mipmaps.length>0?U.mipmaps.length:U.isCompressedTexture&&Array.isArray(U.image)?S.mipmaps.length:1}function L(U){let S=U.target;S.removeEventListener("dispose",L),T(S),S.isVideoTexture&&h.delete(S)}function A(U){let S=U.target;S.removeEventListener("dispose",A),J(S)}function T(U){let S=n.get(U);if(S.__webglInit===void 0)return;let K=U.source,ge=m.get(K);if(ge){let we=ge[S.__cacheKey];we.usedTimes--,we.usedTimes===0&&C(U),Object.keys(ge).length===0&&m.delete(K)}n.remove(U)}function C(U){let S=n.get(U);i.deleteTexture(S.__webglTexture);let K=U.source,ge=m.get(K);delete ge[S.__cacheKey],o.memory.textures--}function J(U){let S=n.get(U);if(U.depthTexture&&U.depthTexture.dispose(),U.isWebGLCubeRenderTarget)for(let ge=0;ge<6;ge++){if(Array.isArray(S.__webglFramebuffer[ge]))for(let we=0;we<S.__webglFramebuffer[ge].length;we++)i.deleteFramebuffer(S.__webglFramebuffer[ge][we]);else i.deleteFramebuffer(S.__webglFramebuffer[ge]);S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer[ge])}else{if(Array.isArray(S.__webglFramebuffer))for(let ge=0;ge<S.__webglFramebuffer.length;ge++)i.deleteFramebuffer(S.__webglFramebuffer[ge]);else i.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&i.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let ge=0;ge<S.__webglColorRenderbuffer.length;ge++)S.__webglColorRenderbuffer[ge]&&i.deleteRenderbuffer(S.__webglColorRenderbuffer[ge]);S.__webglDepthRenderbuffer&&i.deleteRenderbuffer(S.__webglDepthRenderbuffer)}let K=U.textures;for(let ge=0,we=K.length;ge<we;ge++){let _e=n.get(K[ge]);_e.__webglTexture&&(i.deleteTexture(_e.__webglTexture),o.memory.textures--),n.remove(K[ge])}n.remove(U)}let _=0;function b(){_=0}function B(){let U=_;return U>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+U+" texture units while this GPU supports only "+s.maxTextures),_+=1,U}function W(U){let S=[];return S.push(U.wrapS),S.push(U.wrapT),S.push(U.wrapR||0),S.push(U.magFilter),S.push(U.minFilter),S.push(U.anisotropy),S.push(U.internalFormat),S.push(U.format),S.push(U.type),S.push(U.generateMipmaps),S.push(U.premultiplyAlpha),S.push(U.flipY),S.push(U.unpackAlignment),S.push(U.colorSpace),S.join()}function X(U,S){let K=n.get(U);if(U.isVideoTexture&&xe(U),U.isRenderTargetTexture===!1&&U.version>0&&K.__version!==U.version){let ge=U.image;if(ge===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ge.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{j(K,U,S);return}}t.bindTexture(i.TEXTURE_2D,K.__webglTexture,i.TEXTURE0+S)}function H(U,S){let K=n.get(U);if(U.version>0&&K.__version!==U.version){j(K,U,S);return}t.bindTexture(i.TEXTURE_2D_ARRAY,K.__webglTexture,i.TEXTURE0+S)}function ee(U,S){let K=n.get(U);if(U.version>0&&K.__version!==U.version){j(K,U,S);return}t.bindTexture(i.TEXTURE_3D,K.__webglTexture,i.TEXTURE0+S)}function Me(U,S){let K=n.get(U);if(U.version>0&&K.__version!==U.version){F(K,U,S);return}t.bindTexture(i.TEXTURE_CUBE_MAP,K.__webglTexture,i.TEXTURE0+S)}let se={[sr]:i.REPEAT,[ir]:i.CLAMP_TO_EDGE,[zh]:i.MIRRORED_REPEAT},me={[Wn]:i.NEAREST,[c1]:i.NEAREST_MIPMAP_NEAREST,[za]:i.NEAREST_MIPMAP_LINEAR,[En]:i.LINEAR,[$l]:i.LINEAR_MIPMAP_NEAREST,[zi]:i.LINEAR_MIPMAP_LINEAR},N={[u1]:i.NEVER,[x1]:i.ALWAYS,[d1]:i.LESS,[Jp]:i.LEQUAL,[f1]:i.EQUAL,[g1]:i.GEQUAL,[p1]:i.GREATER,[m1]:i.NOTEQUAL};function Q(U,S){if(S.type===Ji&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===En||S.magFilter===$l||S.magFilter===za||S.magFilter===zi||S.minFilter===En||S.minFilter===$l||S.minFilter===za||S.minFilter===zi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(U,i.TEXTURE_WRAP_S,se[S.wrapS]),i.texParameteri(U,i.TEXTURE_WRAP_T,se[S.wrapT]),(U===i.TEXTURE_3D||U===i.TEXTURE_2D_ARRAY)&&i.texParameteri(U,i.TEXTURE_WRAP_R,se[S.wrapR]),i.texParameteri(U,i.TEXTURE_MAG_FILTER,me[S.magFilter]),i.texParameteri(U,i.TEXTURE_MIN_FILTER,me[S.minFilter]),S.compareFunction&&(i.texParameteri(U,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(U,i.TEXTURE_COMPARE_FUNC,N[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===Wn||S.minFilter!==za&&S.minFilter!==zi||S.type===Ji&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){let K=e.get("EXT_texture_filter_anisotropic");i.texParameterf(U,K.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,s.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function ie(U,S){let K=!1;U.__webglInit===void 0&&(U.__webglInit=!0,S.addEventListener("dispose",L));let ge=S.source,we=m.get(ge);we===void 0&&(we={},m.set(ge,we));let _e=W(S);if(_e!==U.__cacheKey){we[_e]===void 0&&(we[_e]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,K=!0),we[_e].usedTimes++;let We=we[U.__cacheKey];We!==void 0&&(we[U.__cacheKey].usedTimes--,We.usedTimes===0&&C(S)),U.__cacheKey=_e,U.__webglTexture=we[_e].texture}return K}function j(U,S,K){let ge=i.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(ge=i.TEXTURE_2D_ARRAY),S.isData3DTexture&&(ge=i.TEXTURE_3D);let we=ie(U,S),_e=S.source;t.bindTexture(ge,U.__webglTexture,i.TEXTURE0+K);let We=n.get(_e);if(_e.version!==We.__version||we===!0){t.activeTexture(i.TEXTURE0+K);let Oe=Vt.getPrimaries(Vt.workingColorSpace),qe=S.colorSpace===As?null:Vt.getPrimaries(S.colorSpace),mt=S.colorSpace===As||Oe===qe?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,mt);let De=x(S.image,!1,s.maxTextureSize);De=Ie(S,De);let Z=r.convert(S.format,S.colorSpace),ye=r.convert(S.type),Pe=E(S.internalFormat,Z,ye,S.colorSpace,S.isVideoTexture);Q(ge,S);let Ce,Te=S.mipmaps,ce=S.isVideoTexture!==!0,Ve=We.__version===void 0||we===!0,G=_e.dataReady,Re=M(S,De);if(S.isDepthTexture)Pe=v(S.format===$r,S.type),Ve&&(ce?t.texStorage2D(i.TEXTURE_2D,1,Pe,De.width,De.height):t.texImage2D(i.TEXTURE_2D,0,Pe,De.width,De.height,0,Z,ye,null));else if(S.isDataTexture)if(Te.length>0){ce&&Ve&&t.texStorage2D(i.TEXTURE_2D,Re,Pe,Te[0].width,Te[0].height);for(let oe=0,Se=Te.length;oe<Se;oe++)Ce=Te[oe],ce?G&&t.texSubImage2D(i.TEXTURE_2D,oe,0,0,Ce.width,Ce.height,Z,ye,Ce.data):t.texImage2D(i.TEXTURE_2D,oe,Pe,Ce.width,Ce.height,0,Z,ye,Ce.data);S.generateMipmaps=!1}else ce?(Ve&&t.texStorage2D(i.TEXTURE_2D,Re,Pe,De.width,De.height),G&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,De.width,De.height,Z,ye,De.data)):t.texImage2D(i.TEXTURE_2D,0,Pe,De.width,De.height,0,Z,ye,De.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){ce&&Ve&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Re,Pe,Te[0].width,Te[0].height,De.depth);for(let oe=0,Se=Te.length;oe<Se;oe++)if(Ce=Te[oe],S.format!==ui)if(Z!==null)if(ce){if(G)if(S.layerUpdates.size>0){let Ue=Mp(Ce.width,Ce.height,S.format,S.type);for(let Fe of S.layerUpdates){let lt=Ce.data.subarray(Fe*Ue/Ce.data.BYTES_PER_ELEMENT,(Fe+1)*Ue/Ce.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,oe,0,0,Fe,Ce.width,Ce.height,1,Z,lt,0,0)}S.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,oe,0,0,0,Ce.width,Ce.height,De.depth,Z,Ce.data,0,0)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,oe,Pe,Ce.width,Ce.height,De.depth,0,Ce.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ce?G&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,oe,0,0,0,Ce.width,Ce.height,De.depth,Z,ye,Ce.data):t.texImage3D(i.TEXTURE_2D_ARRAY,oe,Pe,Ce.width,Ce.height,De.depth,0,Z,ye,Ce.data)}else{ce&&Ve&&t.texStorage2D(i.TEXTURE_2D,Re,Pe,Te[0].width,Te[0].height);for(let oe=0,Se=Te.length;oe<Se;oe++)Ce=Te[oe],S.format!==ui?Z!==null?ce?G&&t.compressedTexSubImage2D(i.TEXTURE_2D,oe,0,0,Ce.width,Ce.height,Z,Ce.data):t.compressedTexImage2D(i.TEXTURE_2D,oe,Pe,Ce.width,Ce.height,0,Ce.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ce?G&&t.texSubImage2D(i.TEXTURE_2D,oe,0,0,Ce.width,Ce.height,Z,ye,Ce.data):t.texImage2D(i.TEXTURE_2D,oe,Pe,Ce.width,Ce.height,0,Z,ye,Ce.data)}else if(S.isDataArrayTexture)if(ce){if(Ve&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Re,Pe,De.width,De.height,De.depth),G)if(S.layerUpdates.size>0){let oe=Mp(De.width,De.height,S.format,S.type);for(let Se of S.layerUpdates){let Ue=De.data.subarray(Se*oe/De.data.BYTES_PER_ELEMENT,(Se+1)*oe/De.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Se,De.width,De.height,1,Z,ye,Ue)}S.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,De.width,De.height,De.depth,Z,ye,De.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Pe,De.width,De.height,De.depth,0,Z,ye,De.data);else if(S.isData3DTexture)ce?(Ve&&t.texStorage3D(i.TEXTURE_3D,Re,Pe,De.width,De.height,De.depth),G&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,De.width,De.height,De.depth,Z,ye,De.data)):t.texImage3D(i.TEXTURE_3D,0,Pe,De.width,De.height,De.depth,0,Z,ye,De.data);else if(S.isFramebufferTexture){if(Ve)if(ce)t.texStorage2D(i.TEXTURE_2D,Re,Pe,De.width,De.height);else{let oe=De.width,Se=De.height;for(let Ue=0;Ue<Re;Ue++)t.texImage2D(i.TEXTURE_2D,Ue,Pe,oe,Se,0,Z,ye,null),oe>>=1,Se>>=1}}else if(Te.length>0){if(ce&&Ve){let oe=Ae(Te[0]);t.texStorage2D(i.TEXTURE_2D,Re,Pe,oe.width,oe.height)}for(let oe=0,Se=Te.length;oe<Se;oe++)Ce=Te[oe],ce?G&&t.texSubImage2D(i.TEXTURE_2D,oe,0,0,Z,ye,Ce):t.texImage2D(i.TEXTURE_2D,oe,Pe,Z,ye,Ce);S.generateMipmaps=!1}else if(ce){if(Ve){let oe=Ae(De);t.texStorage2D(i.TEXTURE_2D,Re,Pe,oe.width,oe.height)}G&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Z,ye,De)}else t.texImage2D(i.TEXTURE_2D,0,Pe,Z,ye,De);p(S)&&d(ge),We.__version=_e.version,S.onUpdate&&S.onUpdate(S)}U.__version=S.version}function F(U,S,K){if(S.image.length!==6)return;let ge=ie(U,S),we=S.source;t.bindTexture(i.TEXTURE_CUBE_MAP,U.__webglTexture,i.TEXTURE0+K);let _e=n.get(we);if(we.version!==_e.__version||ge===!0){t.activeTexture(i.TEXTURE0+K);let We=Vt.getPrimaries(Vt.workingColorSpace),Oe=S.colorSpace===As?null:Vt.getPrimaries(S.colorSpace),qe=S.colorSpace===As||We===Oe?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,qe);let mt=S.isCompressedTexture||S.image[0].isCompressedTexture,De=S.image[0]&&S.image[0].isDataTexture,Z=[];for(let Se=0;Se<6;Se++)!mt&&!De?Z[Se]=x(S.image[Se],!0,s.maxCubemapSize):Z[Se]=De?S.image[Se].image:S.image[Se],Z[Se]=Ie(S,Z[Se]);let ye=Z[0],Pe=r.convert(S.format,S.colorSpace),Ce=r.convert(S.type),Te=E(S.internalFormat,Pe,Ce,S.colorSpace),ce=S.isVideoTexture!==!0,Ve=_e.__version===void 0||ge===!0,G=we.dataReady,Re=M(S,ye);Q(i.TEXTURE_CUBE_MAP,S);let oe;if(mt){ce&&Ve&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Re,Te,ye.width,ye.height);for(let Se=0;Se<6;Se++){oe=Z[Se].mipmaps;for(let Ue=0;Ue<oe.length;Ue++){let Fe=oe[Ue];S.format!==ui?Pe!==null?ce?G&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Ue,0,0,Fe.width,Fe.height,Pe,Fe.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Ue,Te,Fe.width,Fe.height,0,Fe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ce?G&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Ue,0,0,Fe.width,Fe.height,Pe,Ce,Fe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Ue,Te,Fe.width,Fe.height,0,Pe,Ce,Fe.data)}}}else{if(oe=S.mipmaps,ce&&Ve){oe.length>0&&Re++;let Se=Ae(Z[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Re,Te,Se.width,Se.height)}for(let Se=0;Se<6;Se++)if(De){ce?G&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,0,0,Z[Se].width,Z[Se].height,Pe,Ce,Z[Se].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,Te,Z[Se].width,Z[Se].height,0,Pe,Ce,Z[Se].data);for(let Ue=0;Ue<oe.length;Ue++){let lt=oe[Ue].image[Se].image;ce?G&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Ue+1,0,0,lt.width,lt.height,Pe,Ce,lt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Ue+1,Te,lt.width,lt.height,0,Pe,Ce,lt.data)}}else{ce?G&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,0,0,Pe,Ce,Z[Se]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,Te,Pe,Ce,Z[Se]);for(let Ue=0;Ue<oe.length;Ue++){let Fe=oe[Ue];ce?G&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Ue+1,0,0,Pe,Ce,Fe.image[Se]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Se,Ue+1,Te,Pe,Ce,Fe.image[Se])}}}p(S)&&d(i.TEXTURE_CUBE_MAP),_e.__version=we.version,S.onUpdate&&S.onUpdate(S)}U.__version=S.version}function ae(U,S,K,ge,we,_e){let We=r.convert(K.format,K.colorSpace),Oe=r.convert(K.type),qe=E(K.internalFormat,We,Oe,K.colorSpace);if(!n.get(S).__hasExternalTextures){let De=Math.max(1,S.width>>_e),Z=Math.max(1,S.height>>_e);we===i.TEXTURE_3D||we===i.TEXTURE_2D_ARRAY?t.texImage3D(we,_e,qe,De,Z,S.depth,0,We,Oe,null):t.texImage2D(we,_e,qe,De,Z,0,We,Oe,null)}t.bindFramebuffer(i.FRAMEBUFFER,U),ue(S)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ge,we,n.get(K).__webglTexture,0,re(S)):(we===i.TEXTURE_2D||we>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&we<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ge,we,n.get(K).__webglTexture,_e),t.bindFramebuffer(i.FRAMEBUFFER,null)}function z(U,S,K){if(i.bindRenderbuffer(i.RENDERBUFFER,U),S.depthBuffer){let ge=S.depthTexture,we=ge&&ge.isDepthTexture?ge.type:null,_e=v(S.stencilBuffer,we),We=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Oe=re(S);ue(S)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Oe,_e,S.width,S.height):K?i.renderbufferStorageMultisample(i.RENDERBUFFER,Oe,_e,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,_e,S.width,S.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,We,i.RENDERBUFFER,U)}else{let ge=S.textures;for(let we=0;we<ge.length;we++){let _e=ge[we],We=r.convert(_e.format,_e.colorSpace),Oe=r.convert(_e.type),qe=E(_e.internalFormat,We,Oe,_e.colorSpace),mt=re(S);K&&ue(S)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,mt,qe,S.width,S.height):ue(S)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,mt,qe,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,qe,S.width,S.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function V(U,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,U),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(S.depthTexture).__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),X(S.depthTexture,0);let ge=n.get(S.depthTexture).__webglTexture,we=re(S);if(S.depthTexture.format===Vr)ue(S)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ge,0,we):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ge,0);else if(S.depthTexture.format===$r)ue(S)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ge,0,we):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ge,0);else throw new Error("Unknown depthTexture format")}function Y(U){let S=n.get(U),K=U.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==U.depthTexture){let ge=U.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),ge){let we=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,ge.removeEventListener("dispose",we)};ge.addEventListener("dispose",we),S.__depthDisposeCallback=we}S.__boundDepthTexture=ge}if(U.depthTexture&&!S.__autoAllocateDepthBuffer){if(K)throw new Error("target.depthTexture not supported in Cube render targets");V(S.__webglFramebuffer,U)}else if(K){S.__webglDepthbuffer=[];for(let ge=0;ge<6;ge++)if(t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[ge]),S.__webglDepthbuffer[ge]===void 0)S.__webglDepthbuffer[ge]=i.createRenderbuffer(),z(S.__webglDepthbuffer[ge],U,!1);else{let we=U.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,_e=S.__webglDepthbuffer[ge];i.bindRenderbuffer(i.RENDERBUFFER,_e),i.framebufferRenderbuffer(i.FRAMEBUFFER,we,i.RENDERBUFFER,_e)}}else if(t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=i.createRenderbuffer(),z(S.__webglDepthbuffer,U,!1);else{let ge=U.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,we=S.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,we),i.framebufferRenderbuffer(i.FRAMEBUFFER,ge,i.RENDERBUFFER,we)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function pe(U,S,K){let ge=n.get(U);S!==void 0&&ae(ge.__webglFramebuffer,U,U.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),K!==void 0&&Y(U)}function ve(U){let S=U.texture,K=n.get(U),ge=n.get(S);U.addEventListener("dispose",A);let we=U.textures,_e=U.isWebGLCubeRenderTarget===!0,We=we.length>1;if(We||(ge.__webglTexture===void 0&&(ge.__webglTexture=i.createTexture()),ge.__version=S.version,o.memory.textures++),_e){K.__webglFramebuffer=[];for(let Oe=0;Oe<6;Oe++)if(S.mipmaps&&S.mipmaps.length>0){K.__webglFramebuffer[Oe]=[];for(let qe=0;qe<S.mipmaps.length;qe++)K.__webglFramebuffer[Oe][qe]=i.createFramebuffer()}else K.__webglFramebuffer[Oe]=i.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){K.__webglFramebuffer=[];for(let Oe=0;Oe<S.mipmaps.length;Oe++)K.__webglFramebuffer[Oe]=i.createFramebuffer()}else K.__webglFramebuffer=i.createFramebuffer();if(We)for(let Oe=0,qe=we.length;Oe<qe;Oe++){let mt=n.get(we[Oe]);mt.__webglTexture===void 0&&(mt.__webglTexture=i.createTexture(),o.memory.textures++)}if(U.samples>0&&ue(U)===!1){K.__webglMultisampledFramebuffer=i.createFramebuffer(),K.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,K.__webglMultisampledFramebuffer);for(let Oe=0;Oe<we.length;Oe++){let qe=we[Oe];K.__webglColorRenderbuffer[Oe]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,K.__webglColorRenderbuffer[Oe]);let mt=r.convert(qe.format,qe.colorSpace),De=r.convert(qe.type),Z=E(qe.internalFormat,mt,De,qe.colorSpace,U.isXRRenderTarget===!0),ye=re(U);i.renderbufferStorageMultisample(i.RENDERBUFFER,ye,Z,U.width,U.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Oe,i.RENDERBUFFER,K.__webglColorRenderbuffer[Oe])}i.bindRenderbuffer(i.RENDERBUFFER,null),U.depthBuffer&&(K.__webglDepthRenderbuffer=i.createRenderbuffer(),z(K.__webglDepthRenderbuffer,U,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(_e){t.bindTexture(i.TEXTURE_CUBE_MAP,ge.__webglTexture),Q(i.TEXTURE_CUBE_MAP,S);for(let Oe=0;Oe<6;Oe++)if(S.mipmaps&&S.mipmaps.length>0)for(let qe=0;qe<S.mipmaps.length;qe++)ae(K.__webglFramebuffer[Oe][qe],U,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Oe,qe);else ae(K.__webglFramebuffer[Oe],U,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Oe,0);p(S)&&d(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(We){for(let Oe=0,qe=we.length;Oe<qe;Oe++){let mt=we[Oe],De=n.get(mt);t.bindTexture(i.TEXTURE_2D,De.__webglTexture),Q(i.TEXTURE_2D,mt),ae(K.__webglFramebuffer,U,mt,i.COLOR_ATTACHMENT0+Oe,i.TEXTURE_2D,0),p(mt)&&d(i.TEXTURE_2D)}t.unbindTexture()}else{let Oe=i.TEXTURE_2D;if((U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(Oe=U.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Oe,ge.__webglTexture),Q(Oe,S),S.mipmaps&&S.mipmaps.length>0)for(let qe=0;qe<S.mipmaps.length;qe++)ae(K.__webglFramebuffer[qe],U,S,i.COLOR_ATTACHMENT0,Oe,qe);else ae(K.__webglFramebuffer,U,S,i.COLOR_ATTACHMENT0,Oe,0);p(S)&&d(Oe),t.unbindTexture()}U.depthBuffer&&Y(U)}function fe(U){let S=U.textures;for(let K=0,ge=S.length;K<ge;K++){let we=S[K];if(p(we)){let _e=U.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,We=n.get(we).__webglTexture;t.bindTexture(_e,We),d(_e),t.unbindTexture()}}}let $=[],I=[];function Ee(U){if(U.samples>0){if(ue(U)===!1){let S=U.textures,K=U.width,ge=U.height,we=i.COLOR_BUFFER_BIT,_e=U.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,We=n.get(U),Oe=S.length>1;if(Oe)for(let qe=0;qe<S.length;qe++)t.bindFramebuffer(i.FRAMEBUFFER,We.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+qe,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,We.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+qe,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,We.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,We.__webglFramebuffer);for(let qe=0;qe<S.length;qe++){if(U.resolveDepthBuffer&&(U.depthBuffer&&(we|=i.DEPTH_BUFFER_BIT),U.stencilBuffer&&U.resolveStencilBuffer&&(we|=i.STENCIL_BUFFER_BIT)),Oe){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,We.__webglColorRenderbuffer[qe]);let mt=n.get(S[qe]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,mt,0)}i.blitFramebuffer(0,0,K,ge,0,0,K,ge,we,i.NEAREST),c===!0&&($.length=0,I.length=0,$.push(i.COLOR_ATTACHMENT0+qe),U.depthBuffer&&U.resolveDepthBuffer===!1&&($.push(_e),I.push(_e),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,I)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,$))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Oe)for(let qe=0;qe<S.length;qe++){t.bindFramebuffer(i.FRAMEBUFFER,We.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+qe,i.RENDERBUFFER,We.__webglColorRenderbuffer[qe]);let mt=n.get(S[qe]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,We.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+qe,i.TEXTURE_2D,mt,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,We.__webglMultisampledFramebuffer)}else if(U.depthBuffer&&U.resolveDepthBuffer===!1&&c){let S=U.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[S])}}}function re(U){return Math.min(s.maxSamples,U.samples)}function ue(U){let S=n.get(U);return U.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function xe(U){let S=o.render.frame;h.get(U)!==S&&(h.set(U,S),U.update())}function Ie(U,S){let K=U.colorSpace,ge=U.format,we=U.type;return U.isCompressedTexture===!0||U.isVideoTexture===!0||K!==Hs&&K!==As&&(Vt.getTransfer(K)===nn?(ge!==ui||we!==us)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",K)),S}function Ae(U){return typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement?(l.width=U.naturalWidth||U.width,l.height=U.naturalHeight||U.height):typeof VideoFrame<"u"&&U instanceof VideoFrame?(l.width=U.displayWidth,l.height=U.displayHeight):(l.width=U.width,l.height=U.height),l}this.allocateTextureUnit=B,this.resetTextureUnits=b,this.setTexture2D=X,this.setTexture2DArray=H,this.setTexture3D=ee,this.setTextureCube=Me,this.rebindTextures=pe,this.setupRenderTarget=ve,this.updateRenderTargetMipmap=fe,this.updateMultisampleRenderTarget=Ee,this.setupDepthRenderbuffer=Y,this.setupFrameBufferTexture=ae,this.useMultisampledRTT=ue}function w2(i,e){function t(n,s=As){let r,o=Vt.getTransfer(s);if(n===us)return i.UNSIGNED_BYTE;if(n===ed)return i.UNSIGNED_SHORT_4_4_4_4;if(n===td)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Wp)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Vp)return i.BYTE;if(n===Gp)return i.SHORT;if(n===Jo)return i.UNSIGNED_SHORT;if(n===ju)return i.INT;if(n===rr)return i.UNSIGNED_INT;if(n===Ji)return i.FLOAT;if(n===ha)return i.HALF_FLOAT;if(n===Xp)return i.ALPHA;if(n===qp)return i.RGB;if(n===ui)return i.RGBA;if(n===Yp)return i.LUMINANCE;if(n===Zp)return i.LUMINANCE_ALPHA;if(n===Vr)return i.DEPTH_COMPONENT;if(n===$r)return i.DEPTH_STENCIL;if(n===ua)return i.RED;if(n===nd)return i.RED_INTEGER;if(n===$p)return i.RG;if(n===id)return i.RG_INTEGER;if(n===sd)return i.RGBA_INTEGER;if(n===pc||n===mc||n===gc||n===xc)if(o===nn)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===pc)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===mc)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===gc)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===xc)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===pc)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===mc)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===gc)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===xc)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===kh||n===Vh||n===Gh||n===Wh)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===kh)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Vh)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Gh)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Wh)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Xh||n===qh||n===Yh)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Xh||n===qh)return o===nn?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Yh)return o===nn?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Zh||n===$h||n===Kh||n===Jh||n===Qh||n===jh||n===eu||n===tu||n===nu||n===iu||n===su||n===ru||n===ou||n===au)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Zh)return o===nn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===$h)return o===nn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Kh)return o===nn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Jh)return o===nn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Qh)return o===nn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===jh)return o===nn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===eu)return o===nn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===tu)return o===nn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===nu)return o===nn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===iu)return o===nn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===su)return o===nn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ru)return o===nn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===ou)return o===nn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===au)return o===nn?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===yc||n===cu||n===lu)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===yc)return o===nn?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===cu)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===lu)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Kp||n===hu||n===uu||n===du)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===yc)return r.COMPRESSED_RED_RGTC1_EXT;if(n===hu)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===uu)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===du)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Zr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var Tu=class extends Nn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},be=class extends Dt{constructor(){super(),this.isGroup=!0,this.type="Group"}},T2={type:"move"},Yo=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new be,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new be,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new w,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new w),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new be,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new w,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new w),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(let x of e.hand.values()){let p=t.getJointPose(x,n),d=this._getHandJoint(l,x);p!==null&&(d.matrix.fromArray(p.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=p.radius),d.visible=p!==null}let h=l.joints["index-finger-tip"],f=l.joints["thumb-tip"],m=h.position.distanceTo(f.position),u=.02,g=.005;l.inputState.pinching&&m>u+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&m<=u-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(T2)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new be;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},R2=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,A2=`
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

}`,Ru=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){let s=new Kn,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new ji({vertexShader:R2,fragmentShader:A2,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ut(new Rt(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Au=class extends Ls{constructor(e,t){super();let n=this,s=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,f=null,m=null,u=null,g=null,x=new Ru,p=t.getContextAttributes(),d=null,E=null,v=[],M=[],L=new He,A=null,T=new Nn;T.layers.enable(1),T.viewport=new Yt;let C=new Nn;C.layers.enable(2),C.viewport=new Yt;let J=[T,C],_=new Tu;_.layers.enable(1),_.layers.enable(2);let b=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(F){let ae=v[F];return ae===void 0&&(ae=new Yo,v[F]=ae),ae.getTargetRaySpace()},this.getControllerGrip=function(F){let ae=v[F];return ae===void 0&&(ae=new Yo,v[F]=ae),ae.getGripSpace()},this.getHand=function(F){let ae=v[F];return ae===void 0&&(ae=new Yo,v[F]=ae),ae.getHandSpace()};function W(F){let ae=M.indexOf(F.inputSource);if(ae===-1)return;let z=v[ae];z!==void 0&&(z.update(F.inputSource,F.frame,l||o),z.dispatchEvent({type:F.type,data:F.inputSource}))}function X(){s.removeEventListener("select",W),s.removeEventListener("selectstart",W),s.removeEventListener("selectend",W),s.removeEventListener("squeeze",W),s.removeEventListener("squeezestart",W),s.removeEventListener("squeezeend",W),s.removeEventListener("end",X),s.removeEventListener("inputsourceschange",H);for(let F=0;F<v.length;F++){let ae=M[F];ae!==null&&(M[F]=null,v[F].disconnect(ae))}b=null,B=null,x.reset(),e.setRenderTarget(d),u=null,m=null,f=null,s=null,E=null,j.stop(),n.isPresenting=!1,e.setPixelRatio(A),e.setSize(L.width,L.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(F){r=F,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(F){a=F,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(F){l=F},this.getBaseLayer=function(){return m!==null?m:u},this.getBinding=function(){return f},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(F){if(s=F,s!==null){if(d=e.getRenderTarget(),s.addEventListener("select",W),s.addEventListener("selectstart",W),s.addEventListener("selectend",W),s.addEventListener("squeeze",W),s.addEventListener("squeezestart",W),s.addEventListener("squeezeend",W),s.addEventListener("end",X),s.addEventListener("inputsourceschange",H),p.xrCompatible!==!0&&await t.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(L),s.renderState.layers===void 0){let ae={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:r};u=new XRWebGLLayer(s,t,ae),s.updateRenderState({baseLayer:u}),e.setPixelRatio(1),e.setSize(u.framebufferWidth,u.framebufferHeight,!1),E=new ds(u.framebufferWidth,u.framebufferHeight,{format:ui,type:us,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil})}else{let ae=null,z=null,V=null;p.depth&&(V=p.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ae=p.stencil?$r:Vr,z=p.stencil?Zr:rr);let Y={colorFormat:t.RGBA8,depthFormat:V,scaleFactor:r};f=new XRWebGLBinding(s,t),m=f.createProjectionLayer(Y),s.updateRenderState({layers:[m]}),e.setPixelRatio(1),e.setSize(m.textureWidth,m.textureHeight,!1),E=new ds(m.textureWidth,m.textureHeight,{format:ui,type:us,depthTexture:new Dc(m.textureWidth,m.textureHeight,z,void 0,void 0,void 0,void 0,void 0,void 0,ae),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:m.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),j.setContext(s),j.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function H(F){for(let ae=0;ae<F.removed.length;ae++){let z=F.removed[ae],V=M.indexOf(z);V>=0&&(M[V]=null,v[V].disconnect(z))}for(let ae=0;ae<F.added.length;ae++){let z=F.added[ae],V=M.indexOf(z);if(V===-1){for(let pe=0;pe<v.length;pe++)if(pe>=M.length){M.push(z),V=pe;break}else if(M[pe]===null){M[pe]=z,V=pe;break}if(V===-1)break}let Y=v[V];Y&&Y.connect(z)}}let ee=new w,Me=new w;function se(F,ae,z){ee.setFromMatrixPosition(ae.matrixWorld),Me.setFromMatrixPosition(z.matrixWorld);let V=ee.distanceTo(Me),Y=ae.projectionMatrix.elements,pe=z.projectionMatrix.elements,ve=Y[14]/(Y[10]-1),fe=Y[14]/(Y[10]+1),$=(Y[9]+1)/Y[5],I=(Y[9]-1)/Y[5],Ee=(Y[8]-1)/Y[0],re=(pe[8]+1)/pe[0],ue=ve*Ee,xe=ve*re,Ie=V/(-Ee+re),Ae=Ie*-Ee;if(ae.matrixWorld.decompose(F.position,F.quaternion,F.scale),F.translateX(Ae),F.translateZ(Ie),F.matrixWorld.compose(F.position,F.quaternion,F.scale),F.matrixWorldInverse.copy(F.matrixWorld).invert(),Y[10]===-1)F.projectionMatrix.copy(ae.projectionMatrix),F.projectionMatrixInverse.copy(ae.projectionMatrixInverse);else{let U=ve+Ie,S=fe+Ie,K=ue-Ae,ge=xe+(V-Ae),we=$*fe/S*U,_e=I*fe/S*U;F.projectionMatrix.makePerspective(K,ge,we,_e,U,S),F.projectionMatrixInverse.copy(F.projectionMatrix).invert()}}function me(F,ae){ae===null?F.matrixWorld.copy(F.matrix):F.matrixWorld.multiplyMatrices(ae.matrixWorld,F.matrix),F.matrixWorldInverse.copy(F.matrixWorld).invert()}this.updateCamera=function(F){if(s===null)return;let ae=F.near,z=F.far;x.texture!==null&&(x.depthNear>0&&(ae=x.depthNear),x.depthFar>0&&(z=x.depthFar)),_.near=C.near=T.near=ae,_.far=C.far=T.far=z,(b!==_.near||B!==_.far)&&(s.updateRenderState({depthNear:_.near,depthFar:_.far}),b=_.near,B=_.far);let V=F.parent,Y=_.cameras;me(_,V);for(let pe=0;pe<Y.length;pe++)me(Y[pe],V);Y.length===2?se(_,T,C):_.projectionMatrix.copy(T.projectionMatrix),N(F,_,V)};function N(F,ae,z){z===null?F.matrix.copy(ae.matrixWorld):(F.matrix.copy(z.matrixWorld),F.matrix.invert(),F.matrix.multiply(ae.matrixWorld)),F.matrix.decompose(F.position,F.quaternion,F.scale),F.updateMatrixWorld(!0),F.projectionMatrix.copy(ae.projectionMatrix),F.projectionMatrixInverse.copy(ae.projectionMatrixInverse),F.isPerspectiveCamera&&(F.fov=Kr*2*Math.atan(1/F.projectionMatrix.elements[5]),F.zoom=1)}this.getCamera=function(){return _},this.getFoveation=function(){if(!(m===null&&u===null))return c},this.setFoveation=function(F){c=F,m!==null&&(m.fixedFoveation=F),u!==null&&u.fixedFoveation!==void 0&&(u.fixedFoveation=F)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(_)};let Q=null;function ie(F,ae){if(h=ae.getViewerPose(l||o),g=ae,h!==null){let z=h.views;u!==null&&(e.setRenderTargetFramebuffer(E,u.framebuffer),e.setRenderTarget(E));let V=!1;z.length!==_.cameras.length&&(_.cameras.length=0,V=!0);for(let pe=0;pe<z.length;pe++){let ve=z[pe],fe=null;if(u!==null)fe=u.getViewport(ve);else{let I=f.getViewSubImage(m,ve);fe=I.viewport,pe===0&&(e.setRenderTargetTextures(E,I.colorTexture,m.ignoreDepthValues?void 0:I.depthStencilTexture),e.setRenderTarget(E))}let $=J[pe];$===void 0&&($=new Nn,$.layers.enable(pe),$.viewport=new Yt,J[pe]=$),$.matrix.fromArray(ve.transform.matrix),$.matrix.decompose($.position,$.quaternion,$.scale),$.projectionMatrix.fromArray(ve.projectionMatrix),$.projectionMatrixInverse.copy($.projectionMatrix).invert(),$.viewport.set(fe.x,fe.y,fe.width,fe.height),pe===0&&(_.matrix.copy($.matrix),_.matrix.decompose(_.position,_.quaternion,_.scale)),V===!0&&_.cameras.push($)}let Y=s.enabledFeatures;if(Y&&Y.includes("depth-sensing")){let pe=f.getDepthInformation(z[0]);pe&&pe.isValid&&pe.texture&&x.init(e,pe,s.renderState)}}for(let z=0;z<v.length;z++){let V=M[z],Y=v[z];V!==null&&Y!==void 0&&Y.update(V,ae,l||o)}Q&&Q(F,ae),ae.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ae}),g=null}let j=new t0;j.setAnimationLoop(ie),this.setAnimationLoop=function(F){Q=F},this.dispose=function(){}}},Qs=new ni,C2=new St;function P2(i,e){function t(p,d){p.matrixAutoUpdate===!0&&p.updateMatrix(),d.value.copy(p.matrix)}function n(p,d){d.color.getRGB(p.fogColor.value,e0(i)),d.isFog?(p.fogNear.value=d.near,p.fogFar.value=d.far):d.isFogExp2&&(p.fogDensity.value=d.density)}function s(p,d,E,v,M){d.isMeshBasicMaterial||d.isMeshLambertMaterial?r(p,d):d.isMeshToonMaterial?(r(p,d),f(p,d)):d.isMeshPhongMaterial?(r(p,d),h(p,d)):d.isMeshStandardMaterial?(r(p,d),m(p,d),d.isMeshPhysicalMaterial&&u(p,d,M)):d.isMeshMatcapMaterial?(r(p,d),g(p,d)):d.isMeshDepthMaterial?r(p,d):d.isMeshDistanceMaterial?(r(p,d),x(p,d)):d.isMeshNormalMaterial?r(p,d):d.isLineBasicMaterial?(o(p,d),d.isLineDashedMaterial&&a(p,d)):d.isPointsMaterial?c(p,d,E,v):d.isSpriteMaterial?l(p,d):d.isShadowMaterial?(p.color.value.copy(d.color),p.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(p,d){p.opacity.value=d.opacity,d.color&&p.diffuse.value.copy(d.color),d.emissive&&p.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(p.map.value=d.map,t(d.map,p.mapTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,t(d.alphaMap,p.alphaMapTransform)),d.bumpMap&&(p.bumpMap.value=d.bumpMap,t(d.bumpMap,p.bumpMapTransform),p.bumpScale.value=d.bumpScale,d.side===mn&&(p.bumpScale.value*=-1)),d.normalMap&&(p.normalMap.value=d.normalMap,t(d.normalMap,p.normalMapTransform),p.normalScale.value.copy(d.normalScale),d.side===mn&&p.normalScale.value.negate()),d.displacementMap&&(p.displacementMap.value=d.displacementMap,t(d.displacementMap,p.displacementMapTransform),p.displacementScale.value=d.displacementScale,p.displacementBias.value=d.displacementBias),d.emissiveMap&&(p.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,p.emissiveMapTransform)),d.specularMap&&(p.specularMap.value=d.specularMap,t(d.specularMap,p.specularMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest);let E=e.get(d),v=E.envMap,M=E.envMapRotation;v&&(p.envMap.value=v,Qs.copy(M),Qs.x*=-1,Qs.y*=-1,Qs.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(Qs.y*=-1,Qs.z*=-1),p.envMapRotation.value.setFromMatrix4(C2.makeRotationFromEuler(Qs)),p.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=d.reflectivity,p.ior.value=d.ior,p.refractionRatio.value=d.refractionRatio),d.lightMap&&(p.lightMap.value=d.lightMap,p.lightMapIntensity.value=d.lightMapIntensity,t(d.lightMap,p.lightMapTransform)),d.aoMap&&(p.aoMap.value=d.aoMap,p.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,p.aoMapTransform))}function o(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,d.map&&(p.map.value=d.map,t(d.map,p.mapTransform))}function a(p,d){p.dashSize.value=d.dashSize,p.totalSize.value=d.dashSize+d.gapSize,p.scale.value=d.scale}function c(p,d,E,v){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.size.value=d.size*E,p.scale.value=v*.5,d.map&&(p.map.value=d.map,t(d.map,p.uvTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,t(d.alphaMap,p.alphaMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest)}function l(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.rotation.value=d.rotation,d.map&&(p.map.value=d.map,t(d.map,p.mapTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,t(d.alphaMap,p.alphaMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest)}function h(p,d){p.specular.value.copy(d.specular),p.shininess.value=Math.max(d.shininess,1e-4)}function f(p,d){d.gradientMap&&(p.gradientMap.value=d.gradientMap)}function m(p,d){p.metalness.value=d.metalness,d.metalnessMap&&(p.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,p.metalnessMapTransform)),p.roughness.value=d.roughness,d.roughnessMap&&(p.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,p.roughnessMapTransform)),d.envMap&&(p.envMapIntensity.value=d.envMapIntensity)}function u(p,d,E){p.ior.value=d.ior,d.sheen>0&&(p.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),p.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(p.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,p.sheenColorMapTransform)),d.sheenRoughnessMap&&(p.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,p.sheenRoughnessMapTransform))),d.clearcoat>0&&(p.clearcoat.value=d.clearcoat,p.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(p.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,p.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(p.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===mn&&p.clearcoatNormalScale.value.negate())),d.dispersion>0&&(p.dispersion.value=d.dispersion),d.iridescence>0&&(p.iridescence.value=d.iridescence,p.iridescenceIOR.value=d.iridescenceIOR,p.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(p.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,p.iridescenceMapTransform)),d.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),d.transmission>0&&(p.transmission.value=d.transmission,p.transmissionSamplerMap.value=E.texture,p.transmissionSamplerSize.value.set(E.width,E.height),d.transmissionMap&&(p.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,p.transmissionMapTransform)),p.thickness.value=d.thickness,d.thicknessMap&&(p.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=d.attenuationDistance,p.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(p.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(p.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=d.specularIntensity,p.specularColor.value.copy(d.specularColor),d.specularColorMap&&(p.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,p.specularColorMapTransform)),d.specularIntensityMap&&(p.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,d){d.matcap&&(p.matcap.value=d.matcap)}function x(p,d){let E=e.get(d).light;p.referencePosition.value.setFromMatrixPosition(E.matrixWorld),p.nearDistance.value=E.shadow.camera.near,p.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function I2(i,e,t,n){let s={},r={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(E,v){let M=v.program;n.uniformBlockBinding(E,M)}function l(E,v){let M=s[E.id];M===void 0&&(g(E),M=h(E),s[E.id]=M,E.addEventListener("dispose",p));let L=v.program;n.updateUBOMapping(E,L);let A=e.render.frame;r[E.id]!==A&&(m(E),r[E.id]=A)}function h(E){let v=f();E.__bindingPointIndex=v;let M=i.createBuffer(),L=E.__size,A=E.usage;return i.bindBuffer(i.UNIFORM_BUFFER,M),i.bufferData(i.UNIFORM_BUFFER,L,A),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,v,M),M}function f(){for(let E=0;E<a;E++)if(o.indexOf(E)===-1)return o.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function m(E){let v=s[E.id],M=E.uniforms,L=E.__cache;i.bindBuffer(i.UNIFORM_BUFFER,v);for(let A=0,T=M.length;A<T;A++){let C=Array.isArray(M[A])?M[A]:[M[A]];for(let J=0,_=C.length;J<_;J++){let b=C[J];if(u(b,A,J,L)===!0){let B=b.__offset,W=Array.isArray(b.value)?b.value:[b.value],X=0;for(let H=0;H<W.length;H++){let ee=W[H],Me=x(ee);typeof ee=="number"||typeof ee=="boolean"?(b.__data[0]=ee,i.bufferSubData(i.UNIFORM_BUFFER,B+X,b.__data)):ee.isMatrix3?(b.__data[0]=ee.elements[0],b.__data[1]=ee.elements[1],b.__data[2]=ee.elements[2],b.__data[3]=0,b.__data[4]=ee.elements[3],b.__data[5]=ee.elements[4],b.__data[6]=ee.elements[5],b.__data[7]=0,b.__data[8]=ee.elements[6],b.__data[9]=ee.elements[7],b.__data[10]=ee.elements[8],b.__data[11]=0):(ee.toArray(b.__data,X),X+=Me.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,B,b.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function u(E,v,M,L){let A=E.value,T=v+"_"+M;if(L[T]===void 0)return typeof A=="number"||typeof A=="boolean"?L[T]=A:L[T]=A.clone(),!0;{let C=L[T];if(typeof A=="number"||typeof A=="boolean"){if(C!==A)return L[T]=A,!0}else if(C.equals(A)===!1)return C.copy(A),!0}return!1}function g(E){let v=E.uniforms,M=0,L=16;for(let T=0,C=v.length;T<C;T++){let J=Array.isArray(v[T])?v[T]:[v[T]];for(let _=0,b=J.length;_<b;_++){let B=J[_],W=Array.isArray(B.value)?B.value:[B.value];for(let X=0,H=W.length;X<H;X++){let ee=W[X],Me=x(ee),se=M%L,me=se%Me.boundary,N=se+me;M+=me,N!==0&&L-N<Me.storage&&(M+=L-N),B.__data=new Float32Array(Me.storage/Float32Array.BYTES_PER_ELEMENT),B.__offset=M,M+=Me.storage}}}let A=M%L;return A>0&&(M+=L-A),E.__size=M,E.__cache={},this}function x(E){let v={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(v.boundary=4,v.storage=4):E.isVector2?(v.boundary=8,v.storage=8):E.isVector3||E.isColor?(v.boundary=16,v.storage=12):E.isVector4?(v.boundary=16,v.storage=16):E.isMatrix3?(v.boundary=48,v.storage=48):E.isMatrix4?(v.boundary=64,v.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),v}function p(E){let v=E.target;v.removeEventListener("dispose",p);let M=o.indexOf(v.__bindingPointIndex);o.splice(M,1),i.deleteBuffer(s[v.id]),delete s[v.id],delete r[v.id]}function d(){for(let E in s)i.deleteBuffer(s[E]);o=[],s={},r={}}return{bind:c,update:l,dispose:d}}var Uc=class{constructor(e={}){let{canvas:t=U1(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=o;let u=new Uint32Array(4),g=new Int32Array(4),x=null,p=null,d=[],E=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ft,this.toneMapping=Ps,this.toneMappingExposure=1;let v=this,M=!1,L=0,A=0,T=null,C=-1,J=null,_=new Yt,b=new Yt,B=null,W=new ht(0),X=0,H=t.width,ee=t.height,Me=1,se=null,me=null,N=new Yt(0,0,H,ee),Q=new Yt(0,0,H,ee),ie=!1,j=new ta,F=!1,ae=!1,z=new St,V=new St,Y=new w,pe=new Yt,ve={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},fe=!1;function $(){return T===null?Me:1}let I=n;function Ee(P,te){return t.getContext(P,te)}try{let P={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine","three.js r169"),t.addEventListener("webglcontextlost",Se,!1),t.addEventListener("webglcontextrestored",Ue,!1),t.addEventListener("webglcontextcreationerror",Fe,!1),I===null){let te="webgl2";if(I=Ee(te,P),I===null)throw Ee(te)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(P){throw console.error("THREE.WebGLRenderer: "+P.message),P}let re,ue,xe,Ie,Ae,U,S,K,ge,we,_e,We,Oe,qe,mt,De,Z,ye,Pe,Ce,Te,ce,Ve,G;function Re(){re=new Yv(I),re.init(),ce=new w2(I,re),ue=new kv(I,re,e,ce),xe=new E2(I),ue.reverseDepthBuffer&&xe.buffers.depth.setReversed(!0),Ie=new Kv(I),Ae=new l2,U=new b2(I,re,xe,Ae,ue,ce,Ie),S=new Gv(v),K=new qv(v),ge=new ix(I),Ve=new Bv(I,ge),we=new Zv(I,ge,Ie,Ve),_e=new Qv(I,we,ge,Ie),Pe=new Jv(I,ue,U),De=new Vv(Ae),We=new c2(v,S,K,re,ue,Ve,De),Oe=new P2(v,Ae),qe=new u2,mt=new x2(re),ye=new Ov(v,S,K,xe,_e,m,c),Z=new _2(v,_e,ue),G=new I2(I,Ie,ue,xe),Ce=new zv(I,re,Ie),Te=new $v(I,re,Ie),Ie.programs=We.programs,v.capabilities=ue,v.extensions=re,v.properties=Ae,v.renderLists=qe,v.shadowMap=Z,v.state=xe,v.info=Ie}Re();let oe=new Au(v,I);this.xr=oe,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){let P=re.get("WEBGL_lose_context");P&&P.loseContext()},this.forceContextRestore=function(){let P=re.get("WEBGL_lose_context");P&&P.restoreContext()},this.getPixelRatio=function(){return Me},this.setPixelRatio=function(P){P!==void 0&&(Me=P,this.setSize(H,ee,!1))},this.getSize=function(P){return P.set(H,ee)},this.setSize=function(P,te,le=!0){if(oe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}H=P,ee=te,t.width=Math.floor(P*Me),t.height=Math.floor(te*Me),le===!0&&(t.style.width=P+"px",t.style.height=te+"px"),this.setViewport(0,0,P,te)},this.getDrawingBufferSize=function(P){return P.set(H*Me,ee*Me).floor()},this.setDrawingBufferSize=function(P,te,le){H=P,ee=te,Me=le,t.width=Math.floor(P*le),t.height=Math.floor(te*le),this.setViewport(0,0,P,te)},this.getCurrentViewport=function(P){return P.copy(_)},this.getViewport=function(P){return P.copy(N)},this.setViewport=function(P,te,le,de){P.isVector4?N.set(P.x,P.y,P.z,P.w):N.set(P,te,le,de),xe.viewport(_.copy(N).multiplyScalar(Me).round())},this.getScissor=function(P){return P.copy(Q)},this.setScissor=function(P,te,le,de){P.isVector4?Q.set(P.x,P.y,P.z,P.w):Q.set(P,te,le,de),xe.scissor(b.copy(Q).multiplyScalar(Me).round())},this.getScissorTest=function(){return ie},this.setScissorTest=function(P){xe.setScissorTest(ie=P)},this.setOpaqueSort=function(P){se=P},this.setTransparentSort=function(P){me=P},this.getClearColor=function(P){return P.copy(ye.getClearColor())},this.setClearColor=function(){ye.setClearColor.apply(ye,arguments)},this.getClearAlpha=function(){return ye.getClearAlpha()},this.setClearAlpha=function(){ye.setClearAlpha.apply(ye,arguments)},this.clear=function(P=!0,te=!0,le=!0){let de=0;if(P){let ne=!1;if(T!==null){let Le=T.texture.format;ne=Le===sd||Le===id||Le===nd}if(ne){let Le=T.texture.type,Xe=Le===us||Le===rr||Le===Jo||Le===Zr||Le===ed||Le===td,Je=ye.getClearColor(),et=ye.getClearAlpha(),rt=Je.r,at=Je.g,Ke=Je.b;Xe?(u[0]=rt,u[1]=at,u[2]=Ke,u[3]=et,I.clearBufferuiv(I.COLOR,0,u)):(g[0]=rt,g[1]=at,g[2]=Ke,g[3]=et,I.clearBufferiv(I.COLOR,0,g))}else de|=I.COLOR_BUFFER_BIT}te&&(de|=I.DEPTH_BUFFER_BIT,I.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),le&&(de|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(de)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Se,!1),t.removeEventListener("webglcontextrestored",Ue,!1),t.removeEventListener("webglcontextcreationerror",Fe,!1),qe.dispose(),mt.dispose(),Ae.dispose(),S.dispose(),K.dispose(),_e.dispose(),Ve.dispose(),G.dispose(),We.dispose(),oe.dispose(),oe.removeEventListener("sessionstart",nt),oe.removeEventListener("sessionend",ot),Et.stop()};function Se(P){P.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),M=!0}function Ue(){console.log("THREE.WebGLRenderer: Context Restored."),M=!1;let P=Ie.autoReset,te=Z.enabled,le=Z.autoUpdate,de=Z.needsUpdate,ne=Z.type;Re(),Ie.autoReset=P,Z.enabled=te,Z.autoUpdate=le,Z.needsUpdate=de,Z.type=ne}function Fe(P){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",P.statusMessage)}function lt(P){let te=P.target;te.removeEventListener("dispose",lt),Pt(te)}function Pt(P){Ye(P),Ae.remove(P)}function Ye(P){let te=Ae.get(P).programs;te!==void 0&&(te.forEach(function(le){We.releaseProgram(le)}),P.isShaderMaterial&&We.releaseShaderCache(P))}this.renderBufferDirect=function(P,te,le,de,ne,Le){te===null&&(te=ve);let Xe=ne.isMesh&&ne.matrixWorld.determinant()<0,Je=zn(P,te,le,de,ne);xe.setMaterial(de,Xe);let et=le.index,rt=1;if(de.wireframe===!0){if(et=we.getWireframeAttribute(le),et===void 0)return;rt=2}let at=le.drawRange,Ke=le.attributes.position,wt=at.start*rt,gt=(at.start+at.count)*rt;Le!==null&&(wt=Math.max(wt,Le.start*rt),gt=Math.min(gt,(Le.start+Le.count)*rt)),et!==null?(wt=Math.max(wt,0),gt=Math.min(gt,et.count)):Ke!=null&&(wt=Math.max(wt,0),gt=Math.min(gt,Ke.count));let Ot=gt-wt;if(Ot<0||Ot===1/0)return;Ve.setup(ne,de,Je,le,et);let An,It=Ce;if(et!==null&&(An=ge.get(et),It=Te,It.setIndex(An)),ne.isMesh)de.wireframe===!0?(xe.setLineWidth(de.wireframeLinewidth*$()),It.setMode(I.LINES)):It.setMode(I.TRIANGLES);else if(ne.isLine){let st=de.linewidth;st===void 0&&(st=1),xe.setLineWidth(st*$()),ne.isLineSegments?It.setMode(I.LINES):ne.isLineLoop?It.setMode(I.LINE_LOOP):It.setMode(I.LINE_STRIP)}else ne.isPoints?It.setMode(I.POINTS):ne.isSprite&&It.setMode(I.TRIANGLES);if(ne.isBatchedMesh)if(ne._multiDrawInstances!==null)It.renderMultiDrawInstances(ne._multiDrawStarts,ne._multiDrawCounts,ne._multiDrawCount,ne._multiDrawInstances);else if(re.get("WEBGL_multi_draw"))It.renderMultiDraw(ne._multiDrawStarts,ne._multiDrawCounts,ne._multiDrawCount);else{let st=ne._multiDrawStarts,Bt=ne._multiDrawCounts,Ne=ne._multiDrawCount,Ze=et?ge.get(et).bytesPerElement:1,vn=Ae.get(de).currentProgram.getUniforms();for(let en=0;en<Ne;en++)vn.setValue(I,"_gl_DrawID",en),It.render(st[en]/Ze,Bt[en])}else if(ne.isInstancedMesh)It.renderInstances(wt,Ot,ne.count);else if(le.isInstancedBufferGeometry){let st=le._maxInstanceCount!==void 0?le._maxInstanceCount:1/0,Bt=Math.min(le.instanceCount,st);It.renderInstances(wt,Ot,Bt)}else It.render(wt,Ot)};function Be(P,te,le){P.transparent===!0&&P.side===Ut&&P.forceSinglePass===!1?(P.side=mn,P.needsUpdate=!0,At(P,te,le),P.side=Qi,P.needsUpdate=!0,At(P,te,le),P.side=Ut):At(P,te,le)}this.compile=function(P,te,le=null){le===null&&(le=P),p=mt.get(le),p.init(te),E.push(p),le.traverseVisible(function(ne){ne.isLight&&ne.layers.test(te.layers)&&(p.pushLight(ne),ne.castShadow&&p.pushShadow(ne))}),P!==le&&P.traverseVisible(function(ne){ne.isLight&&ne.layers.test(te.layers)&&(p.pushLight(ne),ne.castShadow&&p.pushShadow(ne))}),p.setupLights();let de=new Set;return P.traverse(function(ne){if(!(ne.isMesh||ne.isPoints||ne.isLine||ne.isSprite))return;let Le=ne.material;if(Le)if(Array.isArray(Le))for(let Xe=0;Xe<Le.length;Xe++){let Je=Le[Xe];Be(Je,le,ne),de.add(Je)}else Be(Le,le,ne),de.add(Le)}),E.pop(),p=null,de},this.compileAsync=function(P,te,le=null){let de=this.compile(P,te,le);return new Promise(ne=>{function Le(){if(de.forEach(function(Xe){Ae.get(Xe).currentProgram.isReady()&&de.delete(Xe)}),de.size===0){ne(P);return}setTimeout(Le,10)}re.get("KHR_parallel_shader_compile")!==null?Le():setTimeout(Le,10)})};let ke=null;function it(P){ke&&ke(P)}function nt(){Et.stop()}function ot(){Et.start()}let Et=new t0;Et.setAnimationLoop(it),typeof self<"u"&&Et.setContext(self),this.setAnimationLoop=function(P){ke=P,oe.setAnimationLoop(P),P===null?Et.stop():Et.start()},oe.addEventListener("sessionstart",nt),oe.addEventListener("sessionend",ot),this.render=function(P,te){if(te!==void 0&&te.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(M===!0)return;if(P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),te.parent===null&&te.matrixWorldAutoUpdate===!0&&te.updateMatrixWorld(),oe.enabled===!0&&oe.isPresenting===!0&&(oe.cameraAutoUpdate===!0&&oe.updateCamera(te),te=oe.getCamera()),P.isScene===!0&&P.onBeforeRender(v,P,te,T),p=mt.get(P,E.length),p.init(te),E.push(p),V.multiplyMatrices(te.projectionMatrix,te.matrixWorldInverse),j.setFromProjectionMatrix(V),ae=this.localClippingEnabled,F=De.init(this.clippingPlanes,ae),x=qe.get(P,d.length),x.init(),d.push(x),oe.enabled===!0&&oe.isPresenting===!0){let Le=v.xr.getDepthSensingMesh();Le!==null&&Xt(Le,te,-1/0,v.sortObjects)}Xt(P,te,0,v.sortObjects),x.finish(),v.sortObjects===!0&&x.sort(se,me),fe=oe.enabled===!1||oe.isPresenting===!1||oe.hasDepthSensing()===!1,fe&&ye.addToRenderList(x,P),this.info.render.frame++,F===!0&&De.beginShadows();let le=p.state.shadowsArray;Z.render(le,P,te),F===!0&&De.endShadows(),this.info.autoReset===!0&&this.info.reset();let de=x.opaque,ne=x.transmissive;if(p.setupLights(),te.isArrayCamera){let Le=te.cameras;if(ne.length>0)for(let Xe=0,Je=Le.length;Xe<Je;Xe++){let et=Le[Xe];hn(de,ne,P,et)}fe&&ye.render(P);for(let Xe=0,Je=Le.length;Xe<Je;Xe++){let et=Le[Xe];rn(x,P,et,et.viewport)}}else ne.length>0&&hn(de,ne,P,te),fe&&ye.render(P),rn(x,P,te);T!==null&&(U.updateMultisampleRenderTarget(T),U.updateRenderTargetMipmap(T)),P.isScene===!0&&P.onAfterRender(v,P,te),Ve.resetDefaultState(),C=-1,J=null,E.pop(),E.length>0?(p=E[E.length-1],F===!0&&De.setGlobalState(v.clippingPlanes,p.state.camera)):p=null,d.pop(),d.length>0?x=d[d.length-1]:x=null};function Xt(P,te,le,de){if(P.visible===!1)return;if(P.layers.test(te.layers)){if(P.isGroup)le=P.renderOrder;else if(P.isLOD)P.autoUpdate===!0&&P.update(te);else if(P.isLight)p.pushLight(P),P.castShadow&&p.pushShadow(P);else if(P.isSprite){if(!P.frustumCulled||j.intersectsSprite(P)){de&&pe.setFromMatrixPosition(P.matrixWorld).applyMatrix4(V);let Xe=_e.update(P),Je=P.material;Je.visible&&x.push(P,Xe,Je,le,pe.z,null)}}else if((P.isMesh||P.isLine||P.isPoints)&&(!P.frustumCulled||j.intersectsObject(P))){let Xe=_e.update(P),Je=P.material;if(de&&(P.boundingSphere!==void 0?(P.boundingSphere===null&&P.computeBoundingSphere(),pe.copy(P.boundingSphere.center)):(Xe.boundingSphere===null&&Xe.computeBoundingSphere(),pe.copy(Xe.boundingSphere.center)),pe.applyMatrix4(P.matrixWorld).applyMatrix4(V)),Array.isArray(Je)){let et=Xe.groups;for(let rt=0,at=et.length;rt<at;rt++){let Ke=et[rt],wt=Je[Ke.materialIndex];wt&&wt.visible&&x.push(P,Xe,wt,le,pe.z,Ke)}}else Je.visible&&x.push(P,Xe,Je,le,pe.z,null)}}let Le=P.children;for(let Xe=0,Je=Le.length;Xe<Je;Xe++)Xt(Le[Xe],te,le,de)}function rn(P,te,le,de){let ne=P.opaque,Le=P.transmissive,Xe=P.transparent;p.setupLightsView(le),F===!0&&De.setGlobalState(v.clippingPlanes,le),de&&xe.viewport(_.copy(de)),ne.length>0&&yn(ne,te,le),Le.length>0&&yn(Le,te,le),Xe.length>0&&yn(Xe,te,le),xe.buffers.depth.setTest(!0),xe.buffers.depth.setMask(!0),xe.buffers.color.setMask(!0),xe.setPolygonOffset(!1)}function hn(P,te,le,de){if((le.isScene===!0?le.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[de.id]===void 0&&(p.state.transmissionRenderTarget[de.id]=new ds(1,1,{generateMipmaps:!0,type:re.has("EXT_color_buffer_half_float")||re.has("EXT_color_buffer_float")?ha:us,minFilter:zi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Vt.workingColorSpace}));let Le=p.state.transmissionRenderTarget[de.id],Xe=de.viewport||_;Le.setSize(Xe.z,Xe.w);let Je=v.getRenderTarget();v.setRenderTarget(Le),v.getClearColor(W),X=v.getClearAlpha(),X<1&&v.setClearColor(16777215,.5),v.clear(),fe&&ye.render(le);let et=v.toneMapping;v.toneMapping=Ps;let rt=de.viewport;if(de.viewport!==void 0&&(de.viewport=void 0),p.setupLightsView(de),F===!0&&De.setGlobalState(v.clippingPlanes,de),yn(P,le,de),U.updateMultisampleRenderTarget(Le),U.updateRenderTargetMipmap(Le),re.has("WEBGL_multisampled_render_to_texture")===!1){let at=!1;for(let Ke=0,wt=te.length;Ke<wt;Ke++){let gt=te[Ke],Ot=gt.object,An=gt.geometry,It=gt.material,st=gt.group;if(It.side===Ut&&Ot.layers.test(de.layers)){let Bt=It.side;It.side=mn,It.needsUpdate=!0,dt(Ot,le,de,An,It,st),It.side=Bt,It.needsUpdate=!0,at=!0}}at===!0&&(U.updateMultisampleRenderTarget(Le),U.updateRenderTargetMipmap(Le))}v.setRenderTarget(Je),v.setClearColor(W,X),rt!==void 0&&(de.viewport=rt),v.toneMapping=et}function yn(P,te,le){let de=te.isScene===!0?te.overrideMaterial:null;for(let ne=0,Le=P.length;ne<Le;ne++){let Xe=P[ne],Je=Xe.object,et=Xe.geometry,rt=de===null?Xe.material:de,at=Xe.group;Je.layers.test(le.layers)&&dt(Je,te,le,et,rt,at)}}function dt(P,te,le,de,ne,Le){P.onBeforeRender(v,te,le,de,ne,Le),P.modelViewMatrix.multiplyMatrices(le.matrixWorldInverse,P.matrixWorld),P.normalMatrix.getNormalMatrix(P.modelViewMatrix),ne.onBeforeRender(v,te,le,de,P,Le),ne.transparent===!0&&ne.side===Ut&&ne.forceSinglePass===!1?(ne.side=mn,ne.needsUpdate=!0,v.renderBufferDirect(le,te,de,ne,P,Le),ne.side=Qi,ne.needsUpdate=!0,v.renderBufferDirect(le,te,de,ne,P,Le),ne.side=Ut):v.renderBufferDirect(le,te,de,ne,P,Le),P.onAfterRender(v,te,le,de,ne,Le)}function At(P,te,le){te.isScene!==!0&&(te=ve);let de=Ae.get(P),ne=p.state.lights,Le=p.state.shadowsArray,Xe=ne.state.version,Je=We.getParameters(P,ne.state,Le,te,le),et=We.getProgramCacheKey(Je),rt=de.programs;de.environment=P.isMeshStandardMaterial?te.environment:null,de.fog=te.fog,de.envMap=(P.isMeshStandardMaterial?K:S).get(P.envMap||de.environment),de.envMapRotation=de.environment!==null&&P.envMap===null?te.environmentRotation:P.envMapRotation,rt===void 0&&(P.addEventListener("dispose",lt),rt=new Map,de.programs=rt);let at=rt.get(et);if(at!==void 0){if(de.currentProgram===at&&de.lightsStateVersion===Xe)return un(P,Je),at}else Je.uniforms=We.getUniforms(P),P.onBeforeCompile(Je,v),at=We.acquireProgram(Je,et),rt.set(et,at),de.uniforms=Je.uniforms;let Ke=de.uniforms;return(!P.isShaderMaterial&&!P.isRawShaderMaterial||P.clipping===!0)&&(Ke.clippingPlanes=De.uniform),un(P,Je),de.needsLights=fn(P),de.lightsStateVersion=Xe,de.needsLights&&(Ke.ambientLightColor.value=ne.state.ambient,Ke.lightProbe.value=ne.state.probe,Ke.directionalLights.value=ne.state.directional,Ke.directionalLightShadows.value=ne.state.directionalShadow,Ke.spotLights.value=ne.state.spot,Ke.spotLightShadows.value=ne.state.spotShadow,Ke.rectAreaLights.value=ne.state.rectArea,Ke.ltc_1.value=ne.state.rectAreaLTC1,Ke.ltc_2.value=ne.state.rectAreaLTC2,Ke.pointLights.value=ne.state.point,Ke.pointLightShadows.value=ne.state.pointShadow,Ke.hemisphereLights.value=ne.state.hemi,Ke.directionalShadowMap.value=ne.state.directionalShadowMap,Ke.directionalShadowMatrix.value=ne.state.directionalShadowMatrix,Ke.spotShadowMap.value=ne.state.spotShadowMap,Ke.spotLightMatrix.value=ne.state.spotLightMatrix,Ke.spotLightMap.value=ne.state.spotLightMap,Ke.pointShadowMap.value=ne.state.pointShadowMap,Ke.pointShadowMatrix.value=ne.state.pointShadowMatrix),de.currentProgram=at,de.uniformsList=null,at}function Un(P){if(P.uniformsList===null){let te=P.currentProgram.getUniforms();P.uniformsList=Wr.seqWithValue(te.seq,P.uniforms)}return P.uniformsList}function un(P,te){let le=Ae.get(P);le.outputColorSpace=te.outputColorSpace,le.batching=te.batching,le.batchingColor=te.batchingColor,le.instancing=te.instancing,le.instancingColor=te.instancingColor,le.instancingMorph=te.instancingMorph,le.skinning=te.skinning,le.morphTargets=te.morphTargets,le.morphNormals=te.morphNormals,le.morphColors=te.morphColors,le.morphTargetsCount=te.morphTargetsCount,le.numClippingPlanes=te.numClippingPlanes,le.numIntersection=te.numClipIntersection,le.vertexAlphas=te.vertexAlphas,le.vertexTangents=te.vertexTangents,le.toneMapping=te.toneMapping}function zn(P,te,le,de,ne){te.isScene!==!0&&(te=ve),U.resetTextureUnits();let Le=te.fog,Xe=de.isMeshStandardMaterial?te.environment:null,Je=T===null?v.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:Hs,et=(de.isMeshStandardMaterial?K:S).get(de.envMap||Xe),rt=de.vertexColors===!0&&!!le.attributes.color&&le.attributes.color.itemSize===4,at=!!le.attributes.tangent&&(!!de.normalMap||de.anisotropy>0),Ke=!!le.morphAttributes.position,wt=!!le.morphAttributes.normal,gt=!!le.morphAttributes.color,Ot=Ps;de.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(Ot=v.toneMapping);let An=le.morphAttributes.position||le.morphAttributes.normal||le.morphAttributes.color,It=An!==void 0?An.length:0,st=Ae.get(de),Bt=p.state.lights;if(F===!0&&(ae===!0||P!==J)){let ei=P===J&&de.id===C;De.setState(de,P,ei)}let Ne=!1;de.version===st.__version?(st.needsLights&&st.lightsStateVersion!==Bt.state.version||st.outputColorSpace!==Je||ne.isBatchedMesh&&st.batching===!1||!ne.isBatchedMesh&&st.batching===!0||ne.isBatchedMesh&&st.batchingColor===!0&&ne.colorTexture===null||ne.isBatchedMesh&&st.batchingColor===!1&&ne.colorTexture!==null||ne.isInstancedMesh&&st.instancing===!1||!ne.isInstancedMesh&&st.instancing===!0||ne.isSkinnedMesh&&st.skinning===!1||!ne.isSkinnedMesh&&st.skinning===!0||ne.isInstancedMesh&&st.instancingColor===!0&&ne.instanceColor===null||ne.isInstancedMesh&&st.instancingColor===!1&&ne.instanceColor!==null||ne.isInstancedMesh&&st.instancingMorph===!0&&ne.morphTexture===null||ne.isInstancedMesh&&st.instancingMorph===!1&&ne.morphTexture!==null||st.envMap!==et||de.fog===!0&&st.fog!==Le||st.numClippingPlanes!==void 0&&(st.numClippingPlanes!==De.numPlanes||st.numIntersection!==De.numIntersection)||st.vertexAlphas!==rt||st.vertexTangents!==at||st.morphTargets!==Ke||st.morphNormals!==wt||st.morphColors!==gt||st.toneMapping!==Ot||st.morphTargetsCount!==It)&&(Ne=!0):(Ne=!0,st.__version=de.version);let Ze=st.currentProgram;Ne===!0&&(Ze=At(de,te,ne));let vn=!1,en=!1,jn=!1,on=Ze.getUniforms(),ri=st.uniforms;if(xe.useProgram(Ze.program)&&(vn=!0,en=!0,jn=!0),de.id!==C&&(C=de.id,en=!0),vn||J!==P){ue.reverseDepthBuffer?(z.copy(P.projectionMatrix),H1(z),F1(z),on.setValue(I,"projectionMatrix",z)):on.setValue(I,"projectionMatrix",P.projectionMatrix),on.setValue(I,"viewMatrix",P.matrixWorldInverse);let ei=on.map.cameraPosition;ei!==void 0&&ei.setValue(I,Y.setFromMatrixPosition(P.matrixWorld)),ue.logarithmicDepthBuffer&&on.setValue(I,"logDepthBufFC",2/(Math.log(P.far+1)/Math.LN2)),(de.isMeshPhongMaterial||de.isMeshToonMaterial||de.isMeshLambertMaterial||de.isMeshBasicMaterial||de.isMeshStandardMaterial||de.isShaderMaterial)&&on.setValue(I,"isOrthographic",P.isOrthographicCamera===!0),J!==P&&(J=P,en=!0,jn=!0)}if(ne.isSkinnedMesh){on.setOptional(I,ne,"bindMatrix"),on.setOptional(I,ne,"bindMatrixInverse");let ei=ne.skeleton;ei&&(ei.boneTexture===null&&ei.computeBoneTexture(),on.setValue(I,"boneTexture",ei.boneTexture,U))}ne.isBatchedMesh&&(on.setOptional(I,ne,"batchingTexture"),on.setValue(I,"batchingTexture",ne._matricesTexture,U),on.setOptional(I,ne,"batchingIdTexture"),on.setValue(I,"batchingIdTexture",ne._indirectTexture,U),on.setOptional(I,ne,"batchingColorTexture"),ne._colorsTexture!==null&&on.setValue(I,"batchingColorTexture",ne._colorsTexture,U));let xr=le.morphAttributes;if((xr.position!==void 0||xr.normal!==void 0||xr.color!==void 0)&&Pe.update(ne,le,Ze),(en||st.receiveShadow!==ne.receiveShadow)&&(st.receiveShadow=ne.receiveShadow,on.setValue(I,"receiveShadow",ne.receiveShadow)),de.isMeshGouraudMaterial&&de.envMap!==null&&(ri.envMap.value=et,ri.flipEnvMap.value=et.isCubeTexture&&et.isRenderTargetTexture===!1?-1:1),de.isMeshStandardMaterial&&de.envMap===null&&te.environment!==null&&(ri.envMapIntensity.value=te.environmentIntensity),en&&(on.setValue(I,"toneMappingExposure",v.toneMappingExposure),st.needsLights&&si(ri,jn),Le&&de.fog===!0&&Oe.refreshFogUniforms(ri,Le),Oe.refreshMaterialUniforms(ri,de,Me,ee,p.state.transmissionRenderTarget[P.id]),Wr.upload(I,Un(st),ri,U)),de.isShaderMaterial&&de.uniformsNeedUpdate===!0&&(Wr.upload(I,Un(st),ri,U),de.uniformsNeedUpdate=!1),de.isSpriteMaterial&&on.setValue(I,"center",ne.center),on.setValue(I,"modelViewMatrix",ne.modelViewMatrix),on.setValue(I,"normalMatrix",ne.normalMatrix),on.setValue(I,"modelMatrix",ne.matrixWorld),de.isShaderMaterial||de.isRawShaderMaterial){let ei=de.uniformsGroups;for(let oi=0,Il=ei.length;oi<Il;oi++){let wo=ei[oi];G.update(wo,Ze),G.bind(wo,Ze)}}return Ze}function si(P,te){P.ambientLightColor.needsUpdate=te,P.lightProbe.needsUpdate=te,P.directionalLights.needsUpdate=te,P.directionalLightShadows.needsUpdate=te,P.pointLights.needsUpdate=te,P.pointLightShadows.needsUpdate=te,P.spotLights.needsUpdate=te,P.spotLightShadows.needsUpdate=te,P.rectAreaLights.needsUpdate=te,P.hemisphereLights.needsUpdate=te}function fn(P){return P.isMeshLambertMaterial||P.isMeshToonMaterial||P.isMeshPhongMaterial||P.isMeshStandardMaterial||P.isShadowMaterial||P.isShaderMaterial&&P.lights===!0}this.getActiveCubeFace=function(){return L},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(P,te,le){Ae.get(P.texture).__webglTexture=te,Ae.get(P.depthTexture).__webglTexture=le;let de=Ae.get(P);de.__hasExternalTextures=!0,de.__autoAllocateDepthBuffer=le===void 0,de.__autoAllocateDepthBuffer||re.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),de.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(P,te){let le=Ae.get(P);le.__webglFramebuffer=te,le.__useDefaultFramebuffer=te===void 0},this.setRenderTarget=function(P,te=0,le=0){T=P,L=te,A=le;let de=!0,ne=null,Le=!1,Xe=!1;if(P){let et=Ae.get(P);if(et.__useDefaultFramebuffer!==void 0)xe.bindFramebuffer(I.FRAMEBUFFER,null),de=!1;else if(et.__webglFramebuffer===void 0)U.setupRenderTarget(P);else if(et.__hasExternalTextures)U.rebindTextures(P,Ae.get(P.texture).__webglTexture,Ae.get(P.depthTexture).__webglTexture);else if(P.depthBuffer){let Ke=P.depthTexture;if(et.__boundDepthTexture!==Ke){if(Ke!==null&&Ae.has(Ke)&&(P.width!==Ke.image.width||P.height!==Ke.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");U.setupDepthRenderbuffer(P)}}let rt=P.texture;(rt.isData3DTexture||rt.isDataArrayTexture||rt.isCompressedArrayTexture)&&(Xe=!0);let at=Ae.get(P).__webglFramebuffer;P.isWebGLCubeRenderTarget?(Array.isArray(at[te])?ne=at[te][le]:ne=at[te],Le=!0):P.samples>0&&U.useMultisampledRTT(P)===!1?ne=Ae.get(P).__webglMultisampledFramebuffer:Array.isArray(at)?ne=at[le]:ne=at,_.copy(P.viewport),b.copy(P.scissor),B=P.scissorTest}else _.copy(N).multiplyScalar(Me).floor(),b.copy(Q).multiplyScalar(Me).floor(),B=ie;if(xe.bindFramebuffer(I.FRAMEBUFFER,ne)&&de&&xe.drawBuffers(P,ne),xe.viewport(_),xe.scissor(b),xe.setScissorTest(B),Le){let et=Ae.get(P.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+te,et.__webglTexture,le)}else if(Xe){let et=Ae.get(P.texture),rt=te||0;I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,et.__webglTexture,le||0,rt)}C=-1},this.readRenderTargetPixels=function(P,te,le,de,ne,Le,Xe){if(!(P&&P.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Je=Ae.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&Xe!==void 0&&(Je=Je[Xe]),Je){xe.bindFramebuffer(I.FRAMEBUFFER,Je);try{let et=P.texture,rt=et.format,at=et.type;if(!ue.textureFormatReadable(rt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ue.textureTypeReadable(at)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}te>=0&&te<=P.width-de&&le>=0&&le<=P.height-ne&&I.readPixels(te,le,de,ne,ce.convert(rt),ce.convert(at),Le)}finally{let et=T!==null?Ae.get(T).__webglFramebuffer:null;xe.bindFramebuffer(I.FRAMEBUFFER,et)}}},this.readRenderTargetPixelsAsync=async function(P,te,le,de,ne,Le,Xe){if(!(P&&P.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Je=Ae.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&Xe!==void 0&&(Je=Je[Xe]),Je){let et=P.texture,rt=et.format,at=et.type;if(!ue.textureFormatReadable(rt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ue.textureTypeReadable(at))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(te>=0&&te<=P.width-de&&le>=0&&le<=P.height-ne){xe.bindFramebuffer(I.FRAMEBUFFER,Je);let Ke=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,Ke),I.bufferData(I.PIXEL_PACK_BUFFER,Le.byteLength,I.STREAM_READ),I.readPixels(te,le,de,ne,ce.convert(rt),ce.convert(at),0);let wt=T!==null?Ae.get(T).__webglFramebuffer:null;xe.bindFramebuffer(I.FRAMEBUFFER,wt);let gt=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await N1(I,gt,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,Ke),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,Le),I.deleteBuffer(Ke),I.deleteSync(gt),Le}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(P,te=null,le=0){P.isTexture!==!0&&(vc("WebGLRenderer: copyFramebufferToTexture function signature has changed."),te=arguments[0]||null,P=arguments[1]);let de=Math.pow(2,-le),ne=Math.floor(P.image.width*de),Le=Math.floor(P.image.height*de),Xe=te!==null?te.x:0,Je=te!==null?te.y:0;U.setTexture2D(P,0),I.copyTexSubImage2D(I.TEXTURE_2D,le,0,0,Xe,Je,ne,Le),xe.unbindTexture()},this.copyTextureToTexture=function(P,te,le=null,de=null,ne=0){P.isTexture!==!0&&(vc("WebGLRenderer: copyTextureToTexture function signature has changed."),de=arguments[0]||null,P=arguments[1],te=arguments[2],ne=arguments[3]||0,le=null);let Le,Xe,Je,et,rt,at;le!==null?(Le=le.max.x-le.min.x,Xe=le.max.y-le.min.y,Je=le.min.x,et=le.min.y):(Le=P.image.width,Xe=P.image.height,Je=0,et=0),de!==null?(rt=de.x,at=de.y):(rt=0,at=0);let Ke=ce.convert(te.format),wt=ce.convert(te.type);U.setTexture2D(te,0),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,te.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,te.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,te.unpackAlignment);let gt=I.getParameter(I.UNPACK_ROW_LENGTH),Ot=I.getParameter(I.UNPACK_IMAGE_HEIGHT),An=I.getParameter(I.UNPACK_SKIP_PIXELS),It=I.getParameter(I.UNPACK_SKIP_ROWS),st=I.getParameter(I.UNPACK_SKIP_IMAGES),Bt=P.isCompressedTexture?P.mipmaps[ne]:P.image;I.pixelStorei(I.UNPACK_ROW_LENGTH,Bt.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Bt.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Je),I.pixelStorei(I.UNPACK_SKIP_ROWS,et),P.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,ne,rt,at,Le,Xe,Ke,wt,Bt.data):P.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,ne,rt,at,Bt.width,Bt.height,Ke,Bt.data):I.texSubImage2D(I.TEXTURE_2D,ne,rt,at,Le,Xe,Ke,wt,Bt),I.pixelStorei(I.UNPACK_ROW_LENGTH,gt),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Ot),I.pixelStorei(I.UNPACK_SKIP_PIXELS,An),I.pixelStorei(I.UNPACK_SKIP_ROWS,It),I.pixelStorei(I.UNPACK_SKIP_IMAGES,st),ne===0&&te.generateMipmaps&&I.generateMipmap(I.TEXTURE_2D),xe.unbindTexture()},this.copyTextureToTexture3D=function(P,te,le=null,de=null,ne=0){P.isTexture!==!0&&(vc("WebGLRenderer: copyTextureToTexture3D function signature has changed."),le=arguments[0]||null,de=arguments[1]||null,P=arguments[2],te=arguments[3],ne=arguments[4]||0);let Le,Xe,Je,et,rt,at,Ke,wt,gt,Ot=P.isCompressedTexture?P.mipmaps[ne]:P.image;le!==null?(Le=le.max.x-le.min.x,Xe=le.max.y-le.min.y,Je=le.max.z-le.min.z,et=le.min.x,rt=le.min.y,at=le.min.z):(Le=Ot.width,Xe=Ot.height,Je=Ot.depth,et=0,rt=0,at=0),de!==null?(Ke=de.x,wt=de.y,gt=de.z):(Ke=0,wt=0,gt=0);let An=ce.convert(te.format),It=ce.convert(te.type),st;if(te.isData3DTexture)U.setTexture3D(te,0),st=I.TEXTURE_3D;else if(te.isDataArrayTexture||te.isCompressedArrayTexture)U.setTexture2DArray(te,0),st=I.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,te.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,te.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,te.unpackAlignment);let Bt=I.getParameter(I.UNPACK_ROW_LENGTH),Ne=I.getParameter(I.UNPACK_IMAGE_HEIGHT),Ze=I.getParameter(I.UNPACK_SKIP_PIXELS),vn=I.getParameter(I.UNPACK_SKIP_ROWS),en=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,Ot.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Ot.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,et),I.pixelStorei(I.UNPACK_SKIP_ROWS,rt),I.pixelStorei(I.UNPACK_SKIP_IMAGES,at),P.isDataTexture||P.isData3DTexture?I.texSubImage3D(st,ne,Ke,wt,gt,Le,Xe,Je,An,It,Ot.data):te.isCompressedArrayTexture?I.compressedTexSubImage3D(st,ne,Ke,wt,gt,Le,Xe,Je,An,Ot.data):I.texSubImage3D(st,ne,Ke,wt,gt,Le,Xe,Je,An,It,Ot),I.pixelStorei(I.UNPACK_ROW_LENGTH,Bt),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Ne),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Ze),I.pixelStorei(I.UNPACK_SKIP_ROWS,vn),I.pixelStorei(I.UNPACK_SKIP_IMAGES,en),ne===0&&te.generateMipmaps&&I.generateMipmap(st),xe.unbindTexture()},this.initRenderTarget=function(P){Ae.get(P).__webglFramebuffer===void 0&&U.setupRenderTarget(P)},this.initTexture=function(P){P.isCubeTexture?U.setTextureCube(P,0):P.isData3DTexture?U.setTexture3D(P,0):P.isDataArrayTexture||P.isCompressedArrayTexture?U.setTexture2DArray(P,0):U.setTexture2D(P,0),xe.unbindTexture()},this.resetState=function(){L=0,A=0,T=null,xe.reset(),Ve.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return hs}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=e===ad?"display-p3":"srgb",t.unpackColorSpace=Vt.workingColorSpace===Qc?"display-p3":"srgb"}};var Nc=class i{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new ht(e),this.near=t,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Hc=class extends Dt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ni,this.environmentIntensity=1,this.environmentRotation=new ni,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}};var Ei=class extends Kn{constructor(e=null,t=1,n=1,s,r,o,a,c,l=Wn,h=Wn,f,m){super(null,o,a,c,l,h,s,r,f,m),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var jr=class extends In{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Fr=new St,Ep=new St,ac=[],Sp=new Ln,L2=new St,zo=new ut,ko=new Ds,gn=class extends ut{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new jr(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,L2)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Ln),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Fr),Sp.copy(e.boundingBox).applyMatrix4(Fr),this.boundingBox.union(Sp)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ds),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Fr),ko.copy(e.boundingSphere).applyMatrix4(Fr),this.boundingSphere.union(ko)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(e,t){let n=this.matrixWorld,s=this.count;if(zo.geometry=this.geometry,zo.material=this.material,zo.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ko.copy(this.boundingSphere),ko.applyMatrix4(n),e.ray.intersectsSphere(ko)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Fr),Ep.multiplyMatrices(n,Fr),zo.matrixWorld=Ep,zo.raycast(e,ac);for(let o=0,a=ac.length;o<a;o++){let c=ac[o];c.instanceId=r,c.object=this,t.push(c)}ac.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new jr(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){let n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Ei(new Float32Array(s*this.count),s,this.count,ua,Ji));let r=this.morphTexture.source.data.data,o=0;for(let l=0;l<n.length;l++)o+=n[l];let a=this.geometry.morphTargetsRelative?1:1-o,c=s*e;r[c]=a,r.set(n,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var or=class extends fs{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ht(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Fc=new w,Oc=new w,bp=new St,Vo=new jo,cc=new Ds,bh=new w,wp=new w,Cu=class extends Dt{constructor(e=new Nt,t=new or){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)Fc.fromBufferAttribute(t,s-1),Oc.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=Fc.distanceTo(Oc);e.setAttribute("lineDistance",new ct(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),cc.copy(n.boundingSphere),cc.applyMatrix4(s),cc.radius+=r,e.ray.intersectsSphere(cc)===!1)return;bp.copy(s).invert(),Vo.copy(e.ray).applyMatrix4(bp);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,h=n.index,m=n.attributes.position;if(h!==null){let u=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let x=u,p=g-1;x<p;x+=l){let d=h.getX(x),E=h.getX(x+1),v=lc(this,e,Vo,c,d,E);v&&t.push(v)}if(this.isLineLoop){let x=h.getX(g-1),p=h.getX(u),d=lc(this,e,Vo,c,x,p);d&&t.push(d)}}else{let u=Math.max(0,o.start),g=Math.min(m.count,o.start+o.count);for(let x=u,p=g-1;x<p;x+=l){let d=lc(this,e,Vo,c,x,x+1);d&&t.push(d)}if(this.isLineLoop){let x=lc(this,e,Vo,c,g-1,u);x&&t.push(x)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function lc(i,e,t,n,s,r){let o=i.geometry.attributes.position;if(Fc.fromBufferAttribute(o,s),Oc.fromBufferAttribute(o,r),t.distanceSqToSegment(Fc,Oc,bh,wp)>n)return;bh.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(bh);if(!(c<e.near||c>e.far))return{distance:c,point:wp.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}var Tp=new w,Rp=new w,eo=class extends Cu{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)Tp.fromBufferAttribute(t,s),Rp.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Tp.distanceTo(Rp);e.setAttribute("lineDistance",new ct(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var Ft=class extends Kn{constructor(e,t,n,s,r,o,a,c,l){super(e,t,n,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}},Si=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let n=this.getLengths(),s=0,r=n.length,o;t?o=t:o=e*n[r-1];let a=0,c=r-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=n[s]-o,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===o)return s/(r-1);let h=n[s],m=n[s+1]-h,u=(o-h)/m;return(s+u)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),c=t||(o.isVector2?new He:new w);return c.copy(a).sub(o).normalize(),c}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){let n=new w,s=[],r=[],o=[],a=new w,c=new St;for(let u=0;u<=e;u++){let g=u/e;s[u]=this.getTangentAt(g,new w)}r[0]=new w,o[0]=new w;let l=Number.MAX_VALUE,h=Math.abs(s[0].x),f=Math.abs(s[0].y),m=Math.abs(s[0].z);h<=l&&(l=h,n.set(1,0,0)),f<=l&&(l=f,n.set(0,1,0)),m<=l&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let u=1;u<=e;u++){if(r[u]=r[u-1].clone(),o[u]=o[u-1].clone(),a.crossVectors(s[u-1],s[u]),a.length()>Number.EPSILON){a.normalize();let g=Math.acos(Mn(s[u-1].dot(s[u]),-1,1));r[u].applyMatrix4(c.makeRotationAxis(a,g))}o[u].crossVectors(s[u],r[u])}if(t===!0){let u=Math.acos(Mn(r[0].dot(r[e]),-1,1));u/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(u=-u);for(let g=1;g<=e;g++)r[g].applyMatrix4(c.makeRotationAxis(s[g],u*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},ia=class extends Si{constructor(e=0,t=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(e,t=new He){let n=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+e*r,c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),f=Math.sin(this.aRotation),m=c-this.aX,u=l-this.aY;c=m*h-u*f+this.aX,l=m*f+u*h+this.aY}return n.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Pu=class extends ia{constructor(e,t,n,s,r,o){super(e,t,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function hd(){let i=0,e=0,t=0,n=0;function s(r,o,a,c){i=r,e=a,t=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){s(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,h,f){let m=(o-r)/l-(a-r)/(l+h)+(a-o)/h,u=(a-o)/h-(c-o)/(h+f)+(c-a)/f;m*=h,u*=h,s(o,a,m,u)},calc:function(r){let o=r*r,a=o*r;return i+e*r+t*o+n*a}}}var hc=new w,wh=new hd,Th=new hd,Rh=new hd,Gt=class extends Si{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new w){let n=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e,a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,h;this.closed||a>0?l=s[(a-1)%r]:(hc.subVectors(s[0],s[1]).add(s[0]),l=hc);let f=s[a%r],m=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(hc.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=hc),this.curveType==="centripetal"||this.curveType==="chordal"){let u=this.curveType==="chordal"?.5:.25,g=Math.pow(l.distanceToSquared(f),u),x=Math.pow(f.distanceToSquared(m),u),p=Math.pow(m.distanceToSquared(h),u);x<1e-4&&(x=1),g<1e-4&&(g=x),p<1e-4&&(p=x),wh.initNonuniformCatmullRom(l.x,f.x,m.x,h.x,g,x,p),Th.initNonuniformCatmullRom(l.y,f.y,m.y,h.y,g,x,p),Rh.initNonuniformCatmullRom(l.z,f.z,m.z,h.z,g,x,p)}else this.curveType==="catmullrom"&&(wh.initCatmullRom(l.x,f.x,m.x,h.x,this.tension),Th.initCatmullRom(l.y,f.y,m.y,h.y,this.tension),Rh.initCatmullRom(l.z,f.z,m.z,h.z,this.tension));return n.set(wh.calc(c),Th.calc(c),Rh.calc(c)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new w().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Ap(i,e,t,n,s){let r=(n-e)*.5,o=(s-t)*.5,a=i*i,c=i*a;return(2*t-2*n+r+o)*c+(-3*t+3*n-2*r-o)*a+r*i+t}function D2(i,e){let t=1-i;return t*t*e}function U2(i,e){return 2*(1-i)*i*e}function N2(i,e){return i*i*e}function Zo(i,e,t,n){return D2(i,e)+U2(i,t)+N2(i,n)}function H2(i,e){let t=1-i;return t*t*t*e}function F2(i,e){let t=1-i;return 3*t*t*i*e}function O2(i,e){return 3*(1-i)*i*i*e}function B2(i,e){return i*i*i*e}function $o(i,e,t,n,s){return H2(i,e)+F2(i,t)+O2(i,n)+B2(i,s)}var Bc=class extends Si{constructor(e=new He,t=new He,n=new He,s=new He){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new He){let n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set($o(e,s.x,r.x,o.x,a.x),$o(e,s.y,r.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Iu=class extends Si{constructor(e=new w,t=new w,n=new w,s=new w){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new w){let n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set($o(e,s.x,r.x,o.x,a.x),$o(e,s.y,r.y,o.y,a.y),$o(e,s.z,r.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},zc=class extends Si{constructor(e=new He,t=new He){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new He){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new He){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Lu=class extends Si{constructor(e=new w,t=new w){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new w){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new w){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},kc=class extends Si{constructor(e=new He,t=new He,n=new He){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new He){let n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(Zo(e,s.x,r.x,o.x),Zo(e,s.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Vc=class extends Si{constructor(e=new w,t=new w,n=new w){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new w){let n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(Zo(e,s.x,r.x,o.x),Zo(e,s.y,r.y,o.y),Zo(e,s.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Gc=class extends Si{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new He){let n=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,c=s[o===0?o:o-1],l=s[o],h=s[o>s.length-2?s.length-1:o+1],f=s[o>s.length-3?s.length-1:o+2];return n.set(Ap(a,c.x,l.x,h.x,f.x),Ap(a,c.y,l.y,h.y,f.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new He().fromArray(s))}return this}},Wc=Object.freeze({__proto__:null,ArcCurve:Pu,CatmullRomCurve3:Gt,CubicBezierCurve:Bc,CubicBezierCurve3:Iu,EllipseCurve:ia,LineCurve:zc,LineCurve3:Lu,QuadraticBezierCurve:kc,QuadraticBezierCurve3:Vc,SplineCurve:Gc}),Du=class extends Si{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Wc[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let o=s[r]-n,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,c=o.getPoints(a);for(let l=0;l<c.length;l++){let h=c[l];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(new Wc[s.type]().fromJSON(s))}return this}},bi=class extends Du{constructor(e){super(),this.type="Path",this.currentPoint=new He,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new zc(this.currentPoint.clone(),new He(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){let r=new kc(this.currentPoint.clone(),new He(e,t),new He(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,o){let a=new Bc(this.currentPoint.clone(),new He(e,t),new He(n,s),new He(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new Gc(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,o){let a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+a,t+c,n,s,r,o),this}absarc(e,t,n,s,r,o){return this.absellipse(e,t,n,n,s,r,o),this}ellipse(e,t,n,s,r,o,a,c){let l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+l,t+h,n,s,r,o,a,c),this}absellipse(e,t,n,s,r,o,a,c){let l=new ia(e,t,n,s,r,o,a,c);if(this.curves.length>0){let f=l.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(l);let h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},Us=class i extends Nt{constructor(e=[new He(0,-.5),new He(.5,0),new He(0,.5)],t=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:s},t=Math.floor(t),s=Mn(s,0,Math.PI*2);let r=[],o=[],a=[],c=[],l=[],h=1/t,f=new w,m=new He,u=new w,g=new w,x=new w,p=0,d=0;for(let E=0;E<=e.length-1;E++)switch(E){case 0:p=e[E+1].x-e[E].x,d=e[E+1].y-e[E].y,u.x=d*1,u.y=-p,u.z=d*0,x.copy(u),u.normalize(),c.push(u.x,u.y,u.z);break;case e.length-1:c.push(x.x,x.y,x.z);break;default:p=e[E+1].x-e[E].x,d=e[E+1].y-e[E].y,u.x=d*1,u.y=-p,u.z=d*0,g.copy(u),u.x+=x.x,u.y+=x.y,u.z+=x.z,u.normalize(),c.push(u.x,u.y,u.z),x.copy(g)}for(let E=0;E<=t;E++){let v=n+E*h*s,M=Math.sin(v),L=Math.cos(v);for(let A=0;A<=e.length-1;A++){f.x=e[A].x*M,f.y=e[A].y,f.z=e[A].x*L,o.push(f.x,f.y,f.z),m.x=E/t,m.y=A/(e.length-1),a.push(m.x,m.y);let T=c[3*A+0]*M,C=c[3*A+1],J=c[3*A+0]*L;l.push(T,C,J)}}for(let E=0;E<t;E++)for(let v=0;v<e.length-1;v++){let M=v+E*e.length,L=M,A=M+e.length,T=M+e.length+1,C=M+1;r.push(L,A,C),r.push(T,C,A)}this.setIndex(r),this.setAttribute("position",new ct(o,3)),this.setAttribute("uv",new ct(a,2)),this.setAttribute("normal",new ct(l,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.points,e.segments,e.phiStart,e.phiLength)}};var wi=class i extends Nt{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);let r=[],o=[],a=[],c=[],l=new w,h=new He;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let f=0,m=3;f<=t;f++,m+=3){let u=n+f/t*s;l.x=e*Math.cos(u),l.y=e*Math.sin(u),o.push(l.x,l.y,l.z),a.push(0,0,1),h.x=(o[m]/e+1)/2,h.y=(o[m+1]/e+1)/2,c.push(h.x,h.y)}for(let f=1;f<=t;f++)r.push(f,f+1,0);this.setIndex(r),this.setAttribute("position",new ct(o,3)),this.setAttribute("normal",new ct(a,3)),this.setAttribute("uv",new ct(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.segments,e.thetaStart,e.thetaLength)}},qt=class i extends Nt{constructor(e=1,t=1,n=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};let l=this;s=Math.floor(s),r=Math.floor(r);let h=[],f=[],m=[],u=[],g=0,x=[],p=n/2,d=0;E(),o===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(h),this.setAttribute("position",new ct(f,3)),this.setAttribute("normal",new ct(m,3)),this.setAttribute("uv",new ct(u,2));function E(){let M=new w,L=new w,A=0,T=(t-e)/n;for(let C=0;C<=r;C++){let J=[],_=C/r,b=_*(t-e)+e;for(let B=0;B<=s;B++){let W=B/s,X=W*c+a,H=Math.sin(X),ee=Math.cos(X);L.x=b*H,L.y=-_*n+p,L.z=b*ee,f.push(L.x,L.y,L.z),M.set(H,T,ee).normalize(),m.push(M.x,M.y,M.z),u.push(W,1-_),J.push(g++)}x.push(J)}for(let C=0;C<s;C++)for(let J=0;J<r;J++){let _=x[J][C],b=x[J+1][C],B=x[J+1][C+1],W=x[J][C+1];e>0&&(h.push(_,b,W),A+=3),t>0&&(h.push(b,B,W),A+=3)}l.addGroup(d,A,0),d+=A}function v(M){let L=g,A=new He,T=new w,C=0,J=M===!0?e:t,_=M===!0?1:-1;for(let B=1;B<=s;B++)f.push(0,p*_,0),m.push(0,_,0),u.push(.5,.5),g++;let b=g;for(let B=0;B<=s;B++){let X=B/s*c+a,H=Math.cos(X),ee=Math.sin(X);T.x=J*ee,T.y=p*_,T.z=J*H,f.push(T.x,T.y,T.z),m.push(0,_,0),A.x=H*.5+.5,A.y=ee*.5*_+.5,u.push(A.x,A.y),g++}for(let B=0;B<s;B++){let W=L+B,X=b+B;M===!0?h.push(X,X+1,W):h.push(X+1,X,W),C+=3}l.addGroup(d,C,M===!0?1:2),d+=C}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Ns=class i extends qt{constructor(e=1,t=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Uu=class i extends Nt{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};let r=[],o=[];a(s),l(n),h(),this.setAttribute("position",new ct(r,3)),this.setAttribute("normal",new ct(r.slice(),3)),this.setAttribute("uv",new ct(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(E){let v=new w,M=new w,L=new w;for(let A=0;A<t.length;A+=3)u(t[A+0],v),u(t[A+1],M),u(t[A+2],L),c(v,M,L,E)}function c(E,v,M,L){let A=L+1,T=[];for(let C=0;C<=A;C++){T[C]=[];let J=E.clone().lerp(M,C/A),_=v.clone().lerp(M,C/A),b=A-C;for(let B=0;B<=b;B++)B===0&&C===A?T[C][B]=J:T[C][B]=J.clone().lerp(_,B/b)}for(let C=0;C<A;C++)for(let J=0;J<2*(A-C)-1;J++){let _=Math.floor(J/2);J%2===0?(m(T[C][_+1]),m(T[C+1][_]),m(T[C][_])):(m(T[C][_+1]),m(T[C+1][_+1]),m(T[C+1][_]))}}function l(E){let v=new w;for(let M=0;M<r.length;M+=3)v.x=r[M+0],v.y=r[M+1],v.z=r[M+2],v.normalize().multiplyScalar(E),r[M+0]=v.x,r[M+1]=v.y,r[M+2]=v.z}function h(){let E=new w;for(let v=0;v<r.length;v+=3){E.x=r[v+0],E.y=r[v+1],E.z=r[v+2];let M=p(E)/2/Math.PI+.5,L=d(E)/Math.PI+.5;o.push(M,1-L)}g(),f()}function f(){for(let E=0;E<o.length;E+=6){let v=o[E+0],M=o[E+2],L=o[E+4],A=Math.max(v,M,L),T=Math.min(v,M,L);A>.9&&T<.1&&(v<.2&&(o[E+0]+=1),M<.2&&(o[E+2]+=1),L<.2&&(o[E+4]+=1))}}function m(E){r.push(E.x,E.y,E.z)}function u(E,v){let M=E*3;v.x=e[M+0],v.y=e[M+1],v.z=e[M+2]}function g(){let E=new w,v=new w,M=new w,L=new w,A=new He,T=new He,C=new He;for(let J=0,_=0;J<r.length;J+=9,_+=6){E.set(r[J+0],r[J+1],r[J+2]),v.set(r[J+3],r[J+4],r[J+5]),M.set(r[J+6],r[J+7],r[J+8]),A.set(o[_+0],o[_+1]),T.set(o[_+2],o[_+3]),C.set(o[_+4],o[_+5]),L.copy(E).add(v).add(M).divideScalar(3);let b=p(L);x(A,_+0,E,b),x(T,_+2,v,b),x(C,_+4,M,b)}}function x(E,v,M,L){L<0&&E.x===1&&(o[v]=E.x-1),M.x===0&&M.z===0&&(o[v]=L/2/Math.PI+.5)}function p(E){return Math.atan2(E.z,-E.x)}function d(E){return Math.atan2(-E.y,Math.sqrt(E.x*E.x+E.z*E.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.vertices,e.indices,e.radius,e.details)}};var vt=class extends bi{constructor(e){super(e),this.uuid=hr(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(new bi().fromJSON(s))}return this}},z2={triangulate:function(i,e,t=2){let n=e&&e.length,s=n?e[0]*t:i.length,r=o0(i,0,s,t,!0),o=[];if(!r||r.next===r.prev)return o;let a,c,l,h,f,m,u;if(n&&(r=X2(i,e,r,t)),i.length>80*t){a=l=i[0],c=h=i[1];for(let g=t;g<s;g+=t)f=i[g],m=i[g+1],f<a&&(a=f),m<c&&(c=m),f>l&&(l=f),m>h&&(h=m);u=Math.max(l-a,h-c),u=u!==0?32767/u:0}return sa(r,o,t,a,c,u,0),o}};function o0(i,e,t,n,s){let r,o;if(s===nM(i,e,t,n)>0)for(r=e;r<t;r+=n)o=Cp(r,i[r],i[r+1],o);else for(r=t-n;r>=e;r-=n)o=Cp(r,i[r],i[r+1],o);return o&&el(o,o.next)&&(oa(o),o=o.next),o}function ar(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(el(t,t.next)||ln(t.prev,t,t.next)===0)){if(oa(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function sa(i,e,t,n,s,r,o){if(!i)return;!o&&r&&K2(i,n,s,r);let a=i,c,l;for(;i.prev!==i.next;){if(c=i.prev,l=i.next,r?V2(i,n,s,r):k2(i)){e.push(c.i/t|0),e.push(i.i/t|0),e.push(l.i/t|0),oa(i),i=l.next,a=l.next;continue}if(i=l,i===a){o?o===1?(i=G2(ar(i),e,t),sa(i,e,t,n,s,r,2)):o===2&&W2(i,e,t,n,s,r):sa(ar(i),e,t,n,s,r,1);break}}}function k2(i){let e=i.prev,t=i,n=i.next;if(ln(e,t,n)>=0)return!1;let s=e.x,r=t.x,o=n.x,a=e.y,c=t.y,l=n.y,h=s<r?s<o?s:o:r<o?r:o,f=a<c?a<l?a:l:c<l?c:l,m=s>r?s>o?s:o:r>o?r:o,u=a>c?a>l?a:l:c>l?c:l,g=n.next;for(;g!==e;){if(g.x>=h&&g.x<=m&&g.y>=f&&g.y<=u&&zr(s,a,r,c,o,l,g.x,g.y)&&ln(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function V2(i,e,t,n){let s=i.prev,r=i,o=i.next;if(ln(s,r,o)>=0)return!1;let a=s.x,c=r.x,l=o.x,h=s.y,f=r.y,m=o.y,u=a<c?a<l?a:l:c<l?c:l,g=h<f?h<m?h:m:f<m?f:m,x=a>c?a>l?a:l:c>l?c:l,p=h>f?h>m?h:m:f>m?f:m,d=Nu(u,g,e,t,n),E=Nu(x,p,e,t,n),v=i.prevZ,M=i.nextZ;for(;v&&v.z>=d&&M&&M.z<=E;){if(v.x>=u&&v.x<=x&&v.y>=g&&v.y<=p&&v!==s&&v!==o&&zr(a,h,c,f,l,m,v.x,v.y)&&ln(v.prev,v,v.next)>=0||(v=v.prevZ,M.x>=u&&M.x<=x&&M.y>=g&&M.y<=p&&M!==s&&M!==o&&zr(a,h,c,f,l,m,M.x,M.y)&&ln(M.prev,M,M.next)>=0))return!1;M=M.nextZ}for(;v&&v.z>=d;){if(v.x>=u&&v.x<=x&&v.y>=g&&v.y<=p&&v!==s&&v!==o&&zr(a,h,c,f,l,m,v.x,v.y)&&ln(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;M&&M.z<=E;){if(M.x>=u&&M.x<=x&&M.y>=g&&M.y<=p&&M!==s&&M!==o&&zr(a,h,c,f,l,m,M.x,M.y)&&ln(M.prev,M,M.next)>=0)return!1;M=M.nextZ}return!0}function G2(i,e,t){let n=i;do{let s=n.prev,r=n.next.next;!el(s,r)&&a0(s,n,n.next,r)&&ra(s,r)&&ra(r,s)&&(e.push(s.i/t|0),e.push(n.i/t|0),e.push(r.i/t|0),oa(n),oa(n.next),n=i=r),n=n.next}while(n!==i);return ar(n)}function W2(i,e,t,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&j2(o,a)){let c=c0(o,a);o=ar(o,o.next),c=ar(c,c.next),sa(o,e,t,n,s,r,0),sa(c,e,t,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function X2(i,e,t,n){let s=[],r,o,a,c,l;for(r=0,o=e.length;r<o;r++)a=e[r]*n,c=r<o-1?e[r+1]*n:i.length,l=o0(i,a,c,n,!1),l===l.next&&(l.steiner=!0),s.push(Q2(l));for(s.sort(q2),r=0;r<s.length;r++)t=Y2(s[r],t);return t}function q2(i,e){return i.x-e.x}function Y2(i,e){let t=Z2(i,e);if(!t)return e;let n=c0(t,i);return ar(n,n.next),ar(t,t.next)}function Z2(i,e){let t=e,n=-1/0,s,r=i.x,o=i.y;do{if(o<=t.y&&o>=t.next.y&&t.next.y!==t.y){let m=t.x+(o-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(m<=r&&m>n&&(n=m,s=t.x<t.next.x?t:t.next,m===r))return s}t=t.next}while(t!==e);if(!s)return null;let a=s,c=s.x,l=s.y,h=1/0,f;t=s;do r>=t.x&&t.x>=c&&r!==t.x&&zr(o<l?r:n,o,c,l,o<l?n:r,o,t.x,t.y)&&(f=Math.abs(o-t.y)/(r-t.x),ra(t,i)&&(f<h||f===h&&(t.x>s.x||t.x===s.x&&$2(s,t)))&&(s=t,h=f)),t=t.next;while(t!==a);return s}function $2(i,e){return ln(i.prev,i,e.prev)<0&&ln(e.next,i,i.next)<0}function K2(i,e,t,n){let s=i;do s.z===0&&(s.z=Nu(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,J2(s)}function J2(i){let e,t,n,s,r,o,a,c,l=1;do{for(t=i,i=null,r=null,o=0;t;){for(o++,n=t,a=0,e=0;e<l&&(a++,n=n.nextZ,!!n);e++);for(c=l;a>0||c>0&&n;)a!==0&&(c===0||!n||t.z<=n.z)?(s=t,t=t.nextZ,a--):(s=n,n=n.nextZ,c--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;t=n}r.nextZ=null,l*=2}while(o>1);return i}function Nu(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function Q2(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function zr(i,e,t,n,s,r,o,a){return(s-o)*(e-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(s-o)*(n-a)}function j2(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!eM(i,e)&&(ra(i,e)&&ra(e,i)&&tM(i,e)&&(ln(i.prev,i,e.prev)||ln(i,e.prev,e))||el(i,e)&&ln(i.prev,i,i.next)>0&&ln(e.prev,e,e.next)>0)}function ln(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function el(i,e){return i.x===e.x&&i.y===e.y}function a0(i,e,t,n){let s=dc(ln(i,e,t)),r=dc(ln(i,e,n)),o=dc(ln(t,n,i)),a=dc(ln(t,n,e));return!!(s!==r&&o!==a||s===0&&uc(i,t,e)||r===0&&uc(i,n,e)||o===0&&uc(t,i,n)||a===0&&uc(t,e,n))}function uc(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function dc(i){return i>0?1:i<0?-1:0}function eM(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&a0(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function ra(i,e){return ln(i.prev,i,i.next)<0?ln(i,e,i.next)>=0&&ln(i,i.prev,e)>=0:ln(i,e,i.prev)<0||ln(i,i.next,e)<0}function tM(i,e){let t=i,n=!1,s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function c0(i,e){let t=new Hu(i.i,i.x,i.y),n=new Hu(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function Cp(i,e,t,n){let s=new Hu(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function oa(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Hu(i,e,t){this.i=i,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function nM(i,e,t,n){let s=0;for(let r=e,o=t-n;r<t;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}var Is=class i{static area(e){let t=e.length,n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],s=[],r=[];Pp(e),Ip(n,e);let o=e.length;t.forEach(Pp);for(let c=0;c<t.length;c++)s.push(o),o+=t[c].length,Ip(n,t[c]);let a=z2.triangulate(n,s);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}};function Pp(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function Ip(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}var sn=class i extends Nt{constructor(e=new vt([new He(.5,.5),new He(-.5,.5),new He(-.5,-.5),new He(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,s=[],r=[];for(let a=0,c=e.length;a<c;a++){let l=e[a];o(l)}this.setAttribute("position",new ct(s,3)),this.setAttribute("uv",new ct(r,2)),this.computeVertexNormals();function o(a){let c=[],l=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,f=t.depth!==void 0?t.depth:1,m=t.bevelEnabled!==void 0?t.bevelEnabled:!0,u=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:u-.1,x=t.bevelOffset!==void 0?t.bevelOffset:0,p=t.bevelSegments!==void 0?t.bevelSegments:3,d=t.extrudePath,E=t.UVGenerator!==void 0?t.UVGenerator:iM,v,M=!1,L,A,T,C;d&&(v=d.getSpacedPoints(h),M=!0,m=!1,L=d.computeFrenetFrames(h,!1),A=new w,T=new w,C=new w),m||(p=0,u=0,g=0,x=0);let J=a.extractPoints(l),_=J.shape,b=J.holes;if(!Is.isClockWise(_)){_=_.reverse();for(let $=0,I=b.length;$<I;$++){let Ee=b[$];Is.isClockWise(Ee)&&(b[$]=Ee.reverse())}}let W=Is.triangulateShape(_,b),X=_;for(let $=0,I=b.length;$<I;$++){let Ee=b[$];_=_.concat(Ee)}function H($,I,Ee){return I||console.error("THREE.ExtrudeGeometry: vec does not exist"),$.clone().addScaledVector(I,Ee)}let ee=_.length,Me=W.length;function se($,I,Ee){let re,ue,xe,Ie=$.x-I.x,Ae=$.y-I.y,U=Ee.x-$.x,S=Ee.y-$.y,K=Ie*Ie+Ae*Ae,ge=Ie*S-Ae*U;if(Math.abs(ge)>Number.EPSILON){let we=Math.sqrt(K),_e=Math.sqrt(U*U+S*S),We=I.x-Ae/we,Oe=I.y+Ie/we,qe=Ee.x-S/_e,mt=Ee.y+U/_e,De=((qe-We)*S-(mt-Oe)*U)/(Ie*S-Ae*U);re=We+Ie*De-$.x,ue=Oe+Ae*De-$.y;let Z=re*re+ue*ue;if(Z<=2)return new He(re,ue);xe=Math.sqrt(Z/2)}else{let we=!1;Ie>Number.EPSILON?U>Number.EPSILON&&(we=!0):Ie<-Number.EPSILON?U<-Number.EPSILON&&(we=!0):Math.sign(Ae)===Math.sign(S)&&(we=!0),we?(re=-Ae,ue=Ie,xe=Math.sqrt(K)):(re=Ie,ue=Ae,xe=Math.sqrt(K/2))}return new He(re/xe,ue/xe)}let me=[];for(let $=0,I=X.length,Ee=I-1,re=$+1;$<I;$++,Ee++,re++)Ee===I&&(Ee=0),re===I&&(re=0),me[$]=se(X[$],X[Ee],X[re]);let N=[],Q,ie=me.concat();for(let $=0,I=b.length;$<I;$++){let Ee=b[$];Q=[];for(let re=0,ue=Ee.length,xe=ue-1,Ie=re+1;re<ue;re++,xe++,Ie++)xe===ue&&(xe=0),Ie===ue&&(Ie=0),Q[re]=se(Ee[re],Ee[xe],Ee[Ie]);N.push(Q),ie=ie.concat(Q)}for(let $=0;$<p;$++){let I=$/p,Ee=u*Math.cos(I*Math.PI/2),re=g*Math.sin(I*Math.PI/2)+x;for(let ue=0,xe=X.length;ue<xe;ue++){let Ie=H(X[ue],me[ue],re);V(Ie.x,Ie.y,-Ee)}for(let ue=0,xe=b.length;ue<xe;ue++){let Ie=b[ue];Q=N[ue];for(let Ae=0,U=Ie.length;Ae<U;Ae++){let S=H(Ie[Ae],Q[Ae],re);V(S.x,S.y,-Ee)}}}let j=g+x;for(let $=0;$<ee;$++){let I=m?H(_[$],ie[$],j):_[$];M?(T.copy(L.normals[0]).multiplyScalar(I.x),A.copy(L.binormals[0]).multiplyScalar(I.y),C.copy(v[0]).add(T).add(A),V(C.x,C.y,C.z)):V(I.x,I.y,0)}for(let $=1;$<=h;$++)for(let I=0;I<ee;I++){let Ee=m?H(_[I],ie[I],j):_[I];M?(T.copy(L.normals[$]).multiplyScalar(Ee.x),A.copy(L.binormals[$]).multiplyScalar(Ee.y),C.copy(v[$]).add(T).add(A),V(C.x,C.y,C.z)):V(Ee.x,Ee.y,f/h*$)}for(let $=p-1;$>=0;$--){let I=$/p,Ee=u*Math.cos(I*Math.PI/2),re=g*Math.sin(I*Math.PI/2)+x;for(let ue=0,xe=X.length;ue<xe;ue++){let Ie=H(X[ue],me[ue],re);V(Ie.x,Ie.y,f+Ee)}for(let ue=0,xe=b.length;ue<xe;ue++){let Ie=b[ue];Q=N[ue];for(let Ae=0,U=Ie.length;Ae<U;Ae++){let S=H(Ie[Ae],Q[Ae],re);M?V(S.x,S.y+v[h-1].y,v[h-1].x+Ee):V(S.x,S.y,f+Ee)}}}F(),ae();function F(){let $=s.length/3;if(m){let I=0,Ee=ee*I;for(let re=0;re<Me;re++){let ue=W[re];Y(ue[2]+Ee,ue[1]+Ee,ue[0]+Ee)}I=h+p*2,Ee=ee*I;for(let re=0;re<Me;re++){let ue=W[re];Y(ue[0]+Ee,ue[1]+Ee,ue[2]+Ee)}}else{for(let I=0;I<Me;I++){let Ee=W[I];Y(Ee[2],Ee[1],Ee[0])}for(let I=0;I<Me;I++){let Ee=W[I];Y(Ee[0]+ee*h,Ee[1]+ee*h,Ee[2]+ee*h)}}n.addGroup($,s.length/3-$,0)}function ae(){let $=s.length/3,I=0;z(X,I),I+=X.length;for(let Ee=0,re=b.length;Ee<re;Ee++){let ue=b[Ee];z(ue,I),I+=ue.length}n.addGroup($,s.length/3-$,1)}function z($,I){let Ee=$.length;for(;--Ee>=0;){let re=Ee,ue=Ee-1;ue<0&&(ue=$.length-1);for(let xe=0,Ie=h+p*2;xe<Ie;xe++){let Ae=ee*xe,U=ee*(xe+1),S=I+re+Ae,K=I+ue+Ae,ge=I+ue+U,we=I+re+U;pe(S,K,ge,we)}}}function V($,I,Ee){c.push($),c.push(I),c.push(Ee)}function Y($,I,Ee){ve($),ve(I),ve(Ee);let re=s.length/3,ue=E.generateTopUV(n,s,re-3,re-2,re-1);fe(ue[0]),fe(ue[1]),fe(ue[2])}function pe($,I,Ee,re){ve($),ve(I),ve(re),ve(I),ve(Ee),ve(re);let ue=s.length/3,xe=E.generateSideWallUV(n,s,ue-6,ue-3,ue-2,ue-1);fe(xe[0]),fe(xe[1]),fe(xe[3]),fe(xe[1]),fe(xe[2]),fe(xe[3])}function ve($){s.push(c[$*3+0]),s.push(c[$*3+1]),s.push(c[$*3+2])}function fe($){r.push($.x),r.push($.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return sM(t,n,e)}static fromJSON(e,t){let n=[];for(let r=0,o=e.shapes.length;r<o;r++){let a=t[e.shapes[r]];n.push(a)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new Wc[s.type]().fromJSON(s)),new i(n,e.options)}},iM={generateTopUV:function(i,e,t,n,s){let r=e[t*3],o=e[t*3+1],a=e[n*3],c=e[n*3+1],l=e[s*3],h=e[s*3+1];return[new He(r,o),new He(a,c),new He(l,h)]},generateSideWallUV:function(i,e,t,n,s,r){let o=e[t*3],a=e[t*3+1],c=e[t*3+2],l=e[n*3],h=e[n*3+1],f=e[n*3+2],m=e[s*3],u=e[s*3+1],g=e[s*3+2],x=e[r*3],p=e[r*3+1],d=e[r*3+2];return Math.abs(a-h)<Math.abs(o-l)?[new He(o,1-c),new He(l,1-f),new He(m,1-g),new He(x,1-d)]:[new He(a,1-c),new He(h,1-f),new He(u,1-g),new He(p,1-d)]}};function sM(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];t.shapes.push(r.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var Xc=class i extends Uu{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}};var to=class i extends Nt{constructor(e=.5,t=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);let a=[],c=[],l=[],h=[],f=e,m=(t-e)/s,u=new w,g=new He;for(let x=0;x<=s;x++){for(let p=0;p<=n;p++){let d=r+p/n*o;u.x=f*Math.cos(d),u.y=f*Math.sin(d),c.push(u.x,u.y,u.z),l.push(0,0,1),g.x=(u.x/t+1)/2,g.y=(u.y/t+1)/2,h.push(g.x,g.y)}f+=m}for(let x=0;x<s;x++){let p=x*(n+1);for(let d=0;d<n;d++){let E=d+p,v=E,M=E+n+1,L=E+n+2,A=E+1;a.push(v,M,A),a.push(M,L,A)}}this.setIndex(a),this.setAttribute("position",new ct(c,3)),this.setAttribute("normal",new ct(l,3)),this.setAttribute("uv",new ct(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}},di=class i extends Nt{constructor(e=new vt([new He(0,.5),new He(-.5,-.5),new He(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let n=[],s=[],r=[],o=[],a=0,c=0;if(Array.isArray(e)===!1)l(e);else for(let h=0;h<e.length;h++)l(e[h]),this.addGroup(a,c,h),a+=c,c=0;this.setIndex(n),this.setAttribute("position",new ct(s,3)),this.setAttribute("normal",new ct(r,3)),this.setAttribute("uv",new ct(o,2));function l(h){let f=s.length/3,m=h.extractPoints(t),u=m.shape,g=m.holes;Is.isClockWise(u)===!1&&(u=u.reverse());for(let p=0,d=g.length;p<d;p++){let E=g[p];Is.isClockWise(E)===!0&&(g[p]=E.reverse())}let x=Is.triangulateShape(u,g);for(let p=0,d=g.length;p<d;p++){let E=g[p];u=u.concat(E)}for(let p=0,d=u.length;p<d;p++){let E=u[p];s.push(E.x,E.y,0),r.push(0,0,1),o.push(E.x,E.y)}for(let p=0,d=x.length;p<d;p++){let E=x[p],v=E[0]+f,M=E[1]+f,L=E[2]+f;n.push(v,M,L),c+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return rM(t,e)}static fromJSON(e,t){let n=[];for(let s=0,r=e.shapes.length;s<r;s++){let o=t[e.shapes[s]];n.push(o)}return new i(n,e.curveSegments)}};function rM(i,e){if(e.shapes=[],Array.isArray(i))for(let t=0,n=i.length;t<n;t++){let s=i[t];e.shapes.push(s.uuid)}else e.shapes.push(i.uuid);return e}var Zt=class i extends Nt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let c=Math.min(o+a,Math.PI),l=0,h=[],f=new w,m=new w,u=[],g=[],x=[],p=[];for(let d=0;d<=n;d++){let E=[],v=d/n,M=0;d===0&&o===0?M=.5/t:d===n&&c===Math.PI&&(M=-.5/t);for(let L=0;L<=t;L++){let A=L/t;f.x=-e*Math.cos(s+A*r)*Math.sin(o+v*a),f.y=e*Math.cos(o+v*a),f.z=e*Math.sin(s+A*r)*Math.sin(o+v*a),g.push(f.x,f.y,f.z),m.copy(f).normalize(),x.push(m.x,m.y,m.z),p.push(A+M,1-v),E.push(l++)}h.push(E)}for(let d=0;d<n;d++)for(let E=0;E<t;E++){let v=h[d][E+1],M=h[d][E],L=h[d+1][E],A=h[d+1][E+1];(d!==0||o>0)&&u.push(v,M,A),(d!==n-1||c<Math.PI)&&u.push(M,L,A)}this.setIndex(u),this.setAttribute("position",new ct(g,3)),this.setAttribute("normal",new ct(x,3)),this.setAttribute("uv",new ct(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var $t=class i extends Nt{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);let o=[],a=[],c=[],l=[],h=new w,f=new w,m=new w;for(let u=0;u<=n;u++)for(let g=0;g<=s;g++){let x=g/s*r,p=u/n*Math.PI*2;f.x=(e+t*Math.cos(p))*Math.cos(x),f.y=(e+t*Math.cos(p))*Math.sin(x),f.z=t*Math.sin(p),a.push(f.x,f.y,f.z),h.x=e*Math.cos(x),h.y=e*Math.sin(x),m.subVectors(f,h).normalize(),c.push(m.x,m.y,m.z),l.push(g/s),l.push(u/n)}for(let u=1;u<=n;u++)for(let g=1;g<=s;g++){let x=(s+1)*u+g-1,p=(s+1)*(u-1)+g-1,d=(s+1)*(u-1)+g,E=(s+1)*u+g;o.push(x,p,E),o.push(p,d,E)}this.setIndex(o),this.setAttribute("position",new ct(a,3)),this.setAttribute("normal",new ct(c,3)),this.setAttribute("uv",new ct(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}};var cn=class i extends Nt{constructor(e=new Vc(new w(-1,-1,0),new w(-1,1,0),new w(1,1,0)),t=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:s,closed:r};let o=e.computeFrenetFrames(t,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new w,c=new w,l=new He,h=new w,f=[],m=[],u=[],g=[];x(),this.setIndex(g),this.setAttribute("position",new ct(f,3)),this.setAttribute("normal",new ct(m,3)),this.setAttribute("uv",new ct(u,2));function x(){for(let v=0;v<t;v++)p(v);p(r===!1?t:0),E(),d()}function p(v){h=e.getPointAt(v/t,h);let M=o.normals[v],L=o.binormals[v];for(let A=0;A<=s;A++){let T=A/s*Math.PI*2,C=Math.sin(T),J=-Math.cos(T);c.x=J*M.x+C*L.x,c.y=J*M.y+C*L.y,c.z=J*M.z+C*L.z,c.normalize(),m.push(c.x,c.y,c.z),a.x=h.x+n*c.x,a.y=h.y+n*c.y,a.z=h.z+n*c.z,f.push(a.x,a.y,a.z)}}function d(){for(let v=1;v<=t;v++)for(let M=1;M<=s;M++){let L=(s+1)*(v-1)+(M-1),A=(s+1)*v+(M-1),T=(s+1)*v+M,C=(s+1)*(v-1)+M;g.push(L,A,C),g.push(A,T,C)}}function E(){for(let v=0;v<=t;v++)for(let M=0;M<=s;M++)l.x=v/t,l.y=M/s,u.push(l.x,l.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new i(new Wc[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}};var ze=class extends fs{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new ht(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ht(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=od,this.normalScale=new He(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ni,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Wt=class extends ze{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new He(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Mn(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new ht(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ht(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ht(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var qc=class extends fs{constructor(e){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new ht(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ht(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=od,this.normalScale=new He(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};function fc(i,e,t){return!i||!t&&i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function oM(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var no=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=t[++n],e<s)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(n=2,r=a);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Fu=class extends no{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Cf,endingEnd:Cf}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],c=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Pf:r=e,a=2*t-n;break;case If:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Pf:o=e,c=2*n-t;break;case If:o=1,c=n+s[1]-s[0];break;default:o=e-1,c=t}let l=(n-t)*.5,h=this.valueSize;this._weightPrev=l/(t-a),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=this._offsetPrev,f=this._offsetNext,m=this._weightPrev,u=this._weightNext,g=(n-t)/(s-t),x=g*g,p=x*g,d=-m*p+2*m*x-m*g,E=(1+m)*p+(-1.5-2*m)*x+(-.5+m)*g+1,v=(-1-u)*p+(1.5+u)*x+.5*g,M=u*p-u*x;for(let L=0;L!==a;++L)r[L]=d*o[h+L]+E*o[l+L]+v*o[c+L]+M*o[f+L];return r}},Ou=class extends no{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=(n-t)/(s-t),f=1-h;for(let m=0;m!==a;++m)r[m]=o[l+m]*f+o[c+m]*h;return r}},Bu=class extends no{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},ki=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=fc(t,this.TimeBufferType),this.values=fc(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:fc(e.times,Array),values:fc(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Bu(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Ou(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Fu(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Mc:t=this.InterpolantFactoryMethodDiscrete;break;case fu:t=this.InterpolantFactoryMethodLinear;break;case Kl:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Mc;case this.InterpolantFactoryMethodLinear:return fu;case this.InterpolantFactoryMethodSmooth:return Kl}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let c=n[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),e=!1;break}o=c}if(s!==void 0&&oM(s))for(let a=0,c=s.length;a!==c;++a){let l=s[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Kl,r=e.length-1,o=1;for(let a=1;a<r;++a){let c=!1,l=e[a],h=e[a+1];if(l!==h&&(a!==1||l!==e[0]))if(s)c=!0;else{let f=a*n,m=f-n,u=f+n;for(let g=0;g!==n;++g){let x=t[f+g];if(x!==t[m+g]||x!==t[u+g]){c=!0;break}}}if(c){if(a!==o){e[o]=e[a];let f=a*n,m=o*n;for(let u=0;u!==n;++u)t[m+u]=t[f+u]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,c=o*n,l=0;l!==n;++l)t[c+l]=t[a+l];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};ki.prototype.TimeBufferType=Float32Array;ki.prototype.ValueBufferType=Float32Array;ki.prototype.DefaultInterpolation=fu;var cr=class extends ki{constructor(e,t,n){super(e,t,n)}};cr.prototype.ValueTypeName="bool";cr.prototype.ValueBufferType=Array;cr.prototype.DefaultInterpolation=Mc;cr.prototype.InterpolantFactoryMethodLinear=void 0;cr.prototype.InterpolantFactoryMethodSmooth=void 0;var zu=class extends ki{};zu.prototype.ValueTypeName="color";var ku=class extends ki{};ku.prototype.ValueTypeName="number";var Vu=class extends no{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-t)/(s-t),l=e*a;for(let h=l+a;l!==h;l+=4)yt.slerpFlat(r,0,o,l-a,o,l,c);return r}},Yc=class extends ki{InterpolantFactoryMethodLinear(e){return new Vu(this.times,this.values,this.getValueSize(),e)}};Yc.prototype.ValueTypeName="quaternion";Yc.prototype.InterpolantFactoryMethodSmooth=void 0;var lr=class extends ki{constructor(e,t,n){super(e,t,n)}};lr.prototype.ValueTypeName="string";lr.prototype.ValueBufferType=Array;lr.prototype.DefaultInterpolation=Mc;lr.prototype.InterpolantFactoryMethodLinear=void 0;lr.prototype.InterpolantFactoryMethodSmooth=void 0;var Gu=class extends ki{};Gu.prototype.ValueTypeName="vector";var Lp={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}},Wu=class{constructor(e,t,n){let s=this,r=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,f){return l.push(h,f),this},this.removeHandler=function(h){let f=l.indexOf(h);return f!==-1&&l.splice(f,2),this},this.getHandler=function(h){for(let f=0,m=l.length;f<m;f+=2){let u=l[f],g=l[f+1];if(u.global&&(u.lastIndex=0),u.test(h))return g}return null}}},aM=new Wu,aa=class{constructor(e){this.manager=e!==void 0?e:aM,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};aa.DEFAULT_MATERIAL_NAME="__DEFAULT";var Xu=class extends aa{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=Lp.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;let a=Qo("img");function c(){h(),Lp.add(e,this),t&&t(this),r.manager.itemEnd(e)}function l(f){h(),s&&s(f),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}};var io=class extends aa{constructor(e){super(e)}load(e,t,n,s){let r=new Kn,o=new Xu(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}},so=class extends Dt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ht(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},Zc=class extends so{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Dt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ht(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},Ah=new St,Dp=new w,Up=new w,ca=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new He(512,512),this.map=null,this.mapPass=null,this.matrix=new St,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ta,this._frameExtents=new He(1,1),this._viewportCount=1,this._viewports=[new Yt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;Dp.setFromMatrixPosition(e.matrixWorld),t.position.copy(Dp),Up.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Up),t.updateMatrixWorld(),Ah.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ah),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ah)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},qu=class extends ca{constructor(){super(new Nn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){let t=this.camera,n=Kr*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},ro=class extends so{constructor(e,t,n=0,s=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Dt.DEFAULT_UP),this.updateMatrix(),this.target=new Dt,this.distance=n,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new qu}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},Np=new St,Go=new w,Ch=new w,Yu=class extends ca{constructor(){super(new Nn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new He(4,2),this._viewportCount=6,this._viewports=[new Yt(2,1,1,1),new Yt(0,1,1,1),new Yt(3,1,1,1),new Yt(1,1,1,1),new Yt(3,0,1,1),new Yt(1,0,1,1)],this._cubeDirections=[new w(1,0,0),new w(-1,0,0),new w(0,0,1),new w(0,0,-1),new w(0,1,0),new w(0,-1,0)],this._cubeUps=[new w(0,1,0),new w(0,1,0),new w(0,1,0),new w(0,1,0),new w(0,0,1),new w(0,0,-1)]}updateMatrices(e,t=0){let n=this.camera,s=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Go.setFromMatrixPosition(e.matrixWorld),n.position.copy(Go),Ch.copy(n.position),Ch.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Ch),n.updateMatrixWorld(),s.makeTranslation(-Go.x,-Go.y,-Go.z),Np.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Np)}},Hn=class extends so{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Yu}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},Zu=class extends ca{constructor(){super(new Lc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},$c=class extends so{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Dt.DEFAULT_UP),this.updateMatrix(),this.target=new Dt,this.shadow=new Zu}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var Kc=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Hp(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=Hp();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};function Hp(){return performance.now()}var ud="\\[\\]\\.:\\/",cM=new RegExp("["+ud+"]","g"),dd="[^"+ud+"]",lM="[^"+ud.replace("\\.","")+"]",hM=/((?:WC+[\/:])*)/.source.replace("WC",dd),uM=/(WCOD+)?/.source.replace("WCOD",lM),dM=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",dd),fM=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",dd),pM=new RegExp("^"+hM+uM+dM+fM+"$"),mM=["material","materials","bones","map"],$u=class{constructor(e,t,n){let s=n||an.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},an=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(cM,"")}static parseTrackName(e){let t=pM.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);mM.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let c=n(a.children);if(c)return c}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let o=e[s];if(o===void 0){let l=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};an.Composite=$u;an.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};an.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};an.prototype.GetterByBindingType=[an.prototype._getValue_direct,an.prototype._getValue_array,an.prototype._getValue_arrayElement,an.prototype._getValue_toArray];an.prototype.SetterByBindingTypeAndVersioning=[[an.prototype._setValue_direct,an.prototype._setValue_direct_setNeedsUpdate,an.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[an.prototype._setValue_array,an.prototype._setValue_array_setNeedsUpdate,an.prototype._setValue_array_setMatrixWorldNeedsUpdate],[an.prototype._setValue_arrayElement,an.prototype._setValue_arrayElement_setNeedsUpdate,an.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[an.prototype._setValue_fromArray,an.prototype._setValue_fromArray_setNeedsUpdate,an.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var dE=new Float32Array(1);var Fp=new St,la=class{constructor(e,t,n=0,s=1/0){this.ray=new jo(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new ea,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Fp.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Fp),this}intersectObject(e,t=!0,n=[]){return Ku(e,this,n,t),n.sort(Op),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)Ku(e[s],this,n,t);return n.sort(Op),n}};function Op(i,e){return i.distance-e.distance}function Ku(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let o=0,a=r.length;o<a;o++)Ku(r[o],e,t,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"169"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="169");function gM({coarse:i=!1,width:e=1280,cores:t=8,memory:n=8,dpr:s=1}={}){let r=i||e<700||t<=4||n<=4;return Object.freeze({mobile:r,pixelRatio:Math.min(s,r?1.25:1.5),minPixelRatio:Math.min(s,r?.75:1),maxFps:r?30:1/0,shadowSize:r?1024:1536,shadowHz:r?12:24,textureSize:r?256:512,chainSegments:r?16:24,chainRadialSegments:r?4:5,effectsHz:r?24:40,targetFrameMs:r?33.3:22})}var xM=typeof window>"u"?{}:{coarse:matchMedia("(pointer:coarse)").matches,width:innerWidth,cores:navigator.hardwareConcurrency||8,memory:navigator.deviceMemory||8,dpr:devicePixelRatio||1},Ht=gM(xM);function l0(i,{exclude:e=[]}={}){let t=new Set(e),n=new Map,s=new Set,r=new w,o=new w,a=new xt;i.updateWorldMatrix(!0,!0);let c=i.matrixWorld.clone().invert();function l(u){if(!(!u.visible||t.has(u)||u.userData.chargingAction||u.userData.keyAction||Number.isInteger(u.userData.hoistIndex)||Number.isInteger(u.userData.valveIndex))){if(u.isMesh&&!u.isInstancedMesh&&!u.isSkinnedMesh&&!u.children.length){let g=u.geometry,x=u.material,p=g.attributes;if(x&&!Array.isArray(x)&&!x.transparent&&!g.morphAttributes.position&&g.drawRange.start===0&&g.drawRange.count===1/0&&p.position&&Object.keys(p).every(d=>["position","normal","uv"].includes(d))){u.getWorldPosition(r);let d=`${Math.floor(r.x/3)},${Math.floor(r.z/3)}`,E=[x.uuid,u.castShadow,u.receiveShadow,u.renderOrder,Object.keys(p).sort().join(","),d].join("|");n.has(E)||n.set(E,[]),n.get(E).push(u)}}for(let g of u.children)l(g)}}l(i);let h=0,f=0;for(let u of n.values()){if(u.length<3)continue;let g=Object.keys(u[0].geometry.attributes),x=u.reduce((C,J)=>C+J.geometry.attributes.position.count,0),p=u.reduce((C,J)=>C+(J.geometry.index?.count||J.geometry.attributes.position.count),0),d=new Nt,E={};for(let C of g){let J=u[0].geometry.attributes[C].itemSize;E[C]=new Float32Array(x*J),d.setAttribute(C,new In(E[C],J))}let v=new Uint32Array(p),M=0,L=0;for(let C of u){let J=C.geometry,_=new St().multiplyMatrices(c,C.matrixWorld);a.getNormalMatrix(_);for(let B=0;B<J.attributes.position.count;B++)r.fromBufferAttribute(J.attributes.position,B).applyMatrix4(_),r.toArray(E.position,(M+B)*3),E.normal&&(o.fromBufferAttribute(J.attributes.normal,B).applyMatrix3(a).normalize(),o.toArray(E.normal,(M+B)*3)),E.uv&&(E.uv[(M+B)*2]=J.attributes.uv.getX(B),E.uv[(M+B)*2+1]=J.attributes.uv.getY(B));let b=J.index?.count||J.attributes.position.count;for(let B=0;B<b;B++)v[L++]=M+(J.index?J.index.getX(B):B);if(_.determinant()<0)for(let B=L-b;B<L;B+=3){let W=v[B+1];v[B+1]=v[B+2],v[B+2]=W}M+=J.attributes.position.count,s.add(J),C.removeFromParent(),h++}d.setIndex(new In(v,1)),d.computeBoundingBox(),d.computeBoundingSphere();let A=u[0],T=new ut(d,A.material);T.name="Batched static office scenery",T.castShadow=A.castShadow,T.receiveShadow=A.receiveShadow,T.renderOrder=A.renderOrder,T.matrixAutoUpdate=!1,i.add(T),f++}let m=new Set;i.traverse(u=>{u.geometry&&m.add(u.geometry)});for(let u of s)m.has(u)||u.dispose();return{removed:h,batches:f}}function h0(i){let e=document.createElement("canvas");e.width=256,e.height=128;let t=e.getContext("2d"),n=t.createLinearGradient(0,0,0,128);n.addColorStop(0,"#111812"),n.addColorStop(.48,"#3a4636"),n.addColorStop(1,"#171d12"),t.fillStyle=n,t.fillRect(0,0,256,128),t.fillStyle="#a9b7a3",t.fillRect(78,19,72,3),t.fillStyle="#596e68",t.fillRect(190,38,29,25),t.fillStyle="#435827",t.fillRect(25,64,34,15);let s=new Ft(e);s.colorSpace=ft,s.mapping=Ko;let r=new Qr(i),o=r.fromEquirectangular(s);return r.dispose(),s.dispose(),o}function u0(i,e){if(!new URLSearchParams(location.search).has("profile"))return{mark(){},frame(){}};let t=document.createElement("output");t.id="performance-report",t.hidden=!0,document.body.append(t);let n=performance.now(),s={},r=[],o=0,a=0,c=0;function l(h){s[h]=Math.round(performance.now()-n)}return{mark:l,frame(h){let f=performance.now();if(o||(o=f-n),a&&(r.push(f-a),r.length>90&&r.shift()),a=f,c++,c===1||c%30===0){let m=0;e.traverse(u=>{u.isMesh&&m++}),t.textContent=JSON.stringify({firstFrameMs:Math.round(o),stages:s,frameMs:r.length?Math.round(r.reduce((u,g)=>u+g,0)/r.length*10)/10:0,renderCpuMs:Math.round((f-h)*10)/10,frames:c,calls:i.info.render.calls,triangles:i.info.render.triangles,geometries:i.info.memory.geometries,textures:i.info.memory.textures,meshes:m,pixelRatio:i.getPixelRatio()})}}}}function d0(i){let n=[],s=new Map,r=0,o=new Rt(.735,.41);function a(){let f=document.createElement("canvas");return f.width=1024,f.height=576,[f,f.getContext("2d")]}function c(f,m=!0){let u=new Ft(f);return m&&(u.colorSpace=ft),u.anisotropy=Math.min(8,i.capabilities.getMaxAnisotropy()),u}function l(f,m){let u=13817+m*7319+(f==="hole"?20001:f==="live"?481:0),g=()=>(u=u*1664525+1013904223>>>0,u/4294967296),x=(N,Q)=>N+(Q-N)*g(),[p,d]=a(),[E,v]=a(),[M,L]=a(),[A,T]=a();d.fillStyle="#080d10",d.fillRect(0,0,1024,576),L.fillStyle="#545454",L.fillRect(0,0,1024,576),T.fillStyle="#777",T.fillRect(0,0,1024,576);let C=f==="live"||f==="cracked"&&m%2===0,J=d.createLinearGradient(0,0,1024,576);if(J.addColorStop(0,"#1b262a"),J.addColorStop(.45,"#0b1217"),J.addColorStop(1,"#040709"),d.fillStyle=J,d.fillRect(0,0,1024,576),C){d.fillStyle="#253438",d.fillRect(0,0,1024,27),d.fillRect(0,27,150,576);for(let N=0;N<28;N++){let Q=174;for(let ie=0;ie<x(3,10);ie++){d.fillStyle=["#365b51","#47615d","#354847"][Math.floor(g()*3)];let j=x(9,93);d.fillRect(Q,53+N*17,j,2),Q+=j+x(5,15)}}for(let N=0;N<576;N+=3)d.fillStyle="rgba(0,0,0,.18)",d.fillRect(0,N,1024,1)}let _={x:x(1024*.2,1024*.78),y:x(576*.22,576*.78)};function b(N,Q,ie,j,F=0,ae=0){Q.strokeStyle=ie,Q.lineWidth=j,Q.beginPath(),N.forEach(([z,V],Y)=>Y?Q.lineTo(z+F,V+ae):Q.moveTo(z+F,V+ae)),Q.stroke()}function B(N,Q=1){b(N,v,"rgba(0,3,6,.86)",Q*1.9),b(N,v,`rgba(185,212,216,${x(.45,.9)})`,Q*.7,-.7,.35),g()<.3&&b(N,v,"rgba(113,153,163,.35)",.5,.75,-.35),b(N,T,"#242424",Q*1.6),b(N,T,"#bfbfbf",Q*.7,-.7,.35),b(N,L,"#b9b9b9",Q*1.5)}let W=[];if(f!=="live"){let j=function(z,V,Y=1){d.fillStyle=V,d.beginPath(),z.forEach(([pe,ve],fe)=>{pe=_.x+(pe-_.x)*Y,ve=_.y+(ve-_.y)*Y,fe?d.lineTo(pe,ve):d.moveTo(pe,ve)}),d.closePath(),d.fill()},N=[],Q=f==="hole"?x(68,107):x(42,78),ie=Q*x(.42,.75);for(let z=0;z<72;z++){let V=z/72*Math.PI*2,Y=1+.13*Math.sin(V*5+m)+.07*Math.sin(V*13);N.push([_.x+Math.cos(V)*Q*Y,_.y+Math.sin(V)*ie*Y])}for(let[z,V]of[[1.18,"rgba(56,39,73,.46)"],[1.1,"rgba(36,72,74,.55)"],[1.05,"#151c2a"],[1,"#010204"]])j(N,V,z);if(C||f==="hole"&&m===1){for(let Y=0;Y<61;Y++){let pe=_.x+x(-Q*1.7,Q*1.7),ve=Y%3?0:_.y,fe=Y%3?_.y:576;d.fillStyle=["rgba(85,129,115,.65)","rgba(130,62,94,.6)","rgba(70,103,146,.60)","rgba(172,177,161,.48)"][Y%4],d.fillRect(pe,ve,x(.4,2),fe-ve)}let z=_.x+Q*.4,V=x(35,108);d.fillStyle="rgba(130,151,153,.23)",d.fillRect(z,0,V,_.y);for(let Y=0;Y<_.y;Y+=3)d.fillStyle=`rgba(15,28,32,${x(.15,.65)})`,d.fillRect(z,Y,V,1);for(let Y=0;Y<9;Y++)d.fillStyle=Y%3?"rgba(2,5,8,.85)":"rgba(129,156,153,.45)",d.fillRect(0,_.y+x(-15,18),1024,x(.5,2.4));j(N,"#010204",.98)}let F=12+m%4,ae=Array.from({length:F},(z,V)=>V/F*Math.PI*2+x(-.11,.11));for(let z of ae){let V=[[_.x+Math.cos(z)*3,_.y+Math.sin(z)*3]],Y=x(7,13);for(;Y<1300;){let pe=x(-.021,.021),ve=_.x+Math.cos(z+pe)*Y,fe=_.y+Math.sin(z+pe)*Y;if(V.push([ve,fe]),Y+=x(16,47),ve<0||ve>1024||fe<0||fe>576)break}B(V,x(.55,1.2));for(let pe=2;pe<V.length-1;pe++)if(g()<.33){let[ve,fe]=V[pe],$=g()<.5?-1:1,I=z+$*x(.18,.65),Ee=x(28,145),re=[[ve,fe]];for(let ue=1;ue<=5;ue++)re.push([ve+Math.cos(I)*Ee*ue/5+x(-3,3),fe+Math.sin(I)*Ee*ue/5+x(-3,3)]);B(re,x(.3,.64))}}for(let z of[18,35,61,101,155])for(let V=0;V<F;V++){if(g()<.28||z>70&&g()<.45)continue;let Y=ae[V],pe=V===F-1?ae[0]+Math.PI*2:ae[V+1],ve=z*x(.8,1.12),fe=[];for(let $=0;$<=4;$++){let I=Y+(pe-Y)*$/4;fe.push([_.x+Math.cos(I)*ve+x(-3,3),_.y+Math.sin(I)*ve*.84+x(-2,2)])}B(fe,x(.35,.75))}for(let z=0;z<90;z++){let V=g()*Math.PI*2,Y=x(2,25),pe=_.x+Math.cos(V)*Y,ve=_.y+Math.sin(V)*Y*.7;B([[pe,ve],[pe+x(-6,6),ve+x(-5,5)]],x(.3,.8))}if(f==="hole")for(let z=0;z<7;z++){let V=z/7*Math.PI*2,Y=x(8,26),pe=_.x+Math.cos(V)*Y,ve=_.y+Math.sin(V)*Y*.7,fe=[[pe,ve],[pe+x(4,11),ve+x(-6,2)],[pe+x(-3,5),ve+x(4,13)]];W.push(fe),d.fillStyle="#000102",d.beginPath(),fe.forEach(([$,I],Ee)=>Ee?d.lineTo($,I):d.moveTo($,I)),d.closePath(),d.fill(),B([...fe,fe[0]],1)}}for(let N=0;N<35;N++){let Q=g()*1024,ie=g()*576,j=x(20,115),F=L.createRadialGradient(Q,ie,0,Q,ie,j);F.addColorStop(0,"rgba(205,205,205,.20)"),F.addColorStop(1,"rgba(160,160,160,0)"),L.fillStyle=F,L.fillRect(Q-j,ie-j,j*2,j*2)}for(let N=0;N<3800;N++){let Q=g()*1024,ie=g()*576;L.fillStyle=`rgba(230,230,230,${x(.06,.4)})`,L.fillRect(Q,ie,x(.4,1.3),x(.4,1.1)),N%9===0&&(v.fillStyle="rgba(135,149,146,.13)",v.fillRect(Q,ie,.65,.65))}for(let N=0;N<70;N++){let Q=g()*1024,ie=g()*576;b([[Q,ie],[Q+x(3,31),ie+x(-8,8)]],L,"rgba(189,189,189,.35)",.7)}v.strokeStyle="rgba(89,93,83,.50)",v.lineWidth=2.4,v.strokeRect(1,1,1022,574);let X=c(p),H=c(M,!1),ee=c(A,!1),Me=new ze({map:X,roughness:.62,metalness:0,emissiveMap:X,emissive:16777215,emissiveIntensity:f==="live"?.52:C?.28:.025}),se=new Wt({color:10137267,metalness:.08,roughness:.36,roughnessMap:H,bumpMap:ee,bumpScale:38e-5,transparent:!0,opacity:.27,depthWrite:!1,clearcoat:1,clearcoatRoughness:.19,clearcoatRoughnessMap:H,ior:1.52,envMapIntensity:.85,side:Qi});n.push(se);let me=new ze({map:c(E),transparent:!0,depthWrite:!1,roughness:.38,metalness:.12,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1});return{lcdMaterial:Me,glass:se,cracksMaterial:me,holes:W}}function h(f,m){let u=r++%3,g=`${m}-${u}`;s.has(g)||s.set(g,l(m,u));let x=s.get(g);for(let[p,d,E]of[[x.lcdMaterial,.019,"Damaged liquid-crystal panel"],[x.glass,.0205,"Reflective laminated screen glass"],[x.cracksMaterial,.0213,"Fine branching glass fractures"]]){let v=new ut(o,p);v.position.set(0,.381,d),v.name=E,v.castShadow=!1,v.receiveShadow=!0,f.add(v)}for(let p of x.holes){let d=p.flatMap(([M,L],A)=>[(M/1024-.5)*.735,(.5-L/576)*.41+.381,.0215+(A===1?.0018:0)]),E=new Nt;E.setAttribute("position",new ct(d,3)),E.computeVertexNormals();let v=new ut(E,x.glass);v.castShadow=!1,f.add(v)}}return{add:h,setEnvironment(f){for(let m of n)m.envMap=f,m.needsUpdate=!0}}}var il=(i,e=0,t=1)=>Math.min(t,Math.max(e,i)),ps=i=>(i=il(i),i*i*(3-2*i));function tl(i,e){let t=Math.imul(i,374761393)+Math.imul(e,668265263);return t=Math.imul(t^t>>>13,1274126177),((t^t>>>16)>>>0)/4294967295}function pi(i,e){let t=Math.floor(i),n=Math.floor(e),s=ps(i-t),r=ps(e-n);return je.lerp(je.lerp(tl(t,n),tl(t+1,n),s),je.lerp(tl(t,n+1),tl(t+1,n+1),s),r)}function nl(i,e){return pi(i*5,e*5)*.48+pi(i*17+3,e*17)*.29+pi(i*61,e*61+9)*.15+pi(i*187,e*187)*.08}function ao(i,e=Ht.textureSize,t=!1){let n=new Uint8Array(e*e*4);for(let r=0;r<e;r++)for(let o=0;o<e;o++){let a=i(o/e,r/e,o,r),c=(r*e+o)*4;for(let l=0;l<4;l++)n[c+l]=Math.round(il(a[l]??1)*255)}let s=new Ei(n,e,e,ui);return s.wrapS=s.wrapT=sr,s.magFilter=En,s.minFilter=zi,s.generateMipmaps=!0,s.anisotropy=4,t&&(s.colorSpace=ft),s.needsUpdate=!0,s}var fd;function mi(i=16777215){if(!fd){let e=(c,l)=>{let h=nl(c,l),f=pi(c*48,l*3),m=ps((h+f*.13-.51)*9),u=ps((pi(c*150,l*150)-.64)*8);return{n:h,rust:m,pit:u}},t=new Float32Array(Ht.textureSize*Ht.textureSize*3),n=ao((c,l,h,f)=>{let{n:m,rust:u,pit:g}=e(c,l),x=Math.pow(pi(c*4,l*260),18)*.24,p=(f*Ht.textureSize+h)*3;return t[p]=.45+u*.21+m*.18-g*.25,t[p+1]=.35+u*.57+g*.07,t[p+2]=.88-u*.86,[.39+m*.34,.42+m*.34,.39+m*.32].map((d,E)=>je.lerp(d,[.35+m*.3,.12+m*.19,.045+m*.1][E],u)-g*.1+x)},Ht.textureSize,!0),s=ao((c,l,h,f)=>{let m=(f*Ht.textureSize+h)*3;return[t[m],t[m+1],t[m+2]]});fd={map:n,roughnessMap:s,metalnessMap:s,bumpMap:s}}return new ze({color:i,...fd,roughness:1,metalness:1,bumpScale:.0035,envMapIntensity:.7})}function f0(){let i=(x,p)=>{let d=nl(x+3,p+2),E=pi(x*70,p*2.3)*pi(x*19,p*6),v=pi(x*170,p*190),M=(1-ps(p/.23))*.78,L=ps((p-.86)/.14)*.34,A=Math.exp(-(((p-.844)*75)**2))*(.2+pi(x*38,1)*.8),T=il(M+L+A*.52+ps((d-.49)*7)*.45+E*.2),C=ps((d-.37)*4)*.7;return{dirt:T,fog:C,runs:E,scale:v,tide:A}},e=new Float32Array(Ht.textureSize*Ht.textureSize*2),t=ao((x,p,d,E)=>{let{dirt:v,fog:M,runs:L,scale:A,tide:T}=i(x,p),C=Math.pow(pi(x*105,p*69),12)*.65,J=(E*Ht.textureSize+d)*2;return e[J]=.4+v*.1+L*.09+A*.025+C,e[J+1]=.08+M*.36+v*.43+L*.1,[.59-v*.3,.63-v*.3,.48-v*.3,il(.03+M*.23+v*.55+T*.12+A*.025)]},Ht.textureSize,!0),n=ao((x,p,d,E)=>{let v=(E*Ht.textureSize+d)*2;return[e[v],e[v+1],0]}),s=n,r=new Wt({color:14542029,roughness:.7,roughnessMap:s,metalness:0,transparent:!0,opacity:.17,depthWrite:!1,clearcoat:1,clearcoatRoughness:.14,bumpMap:n,bumpScale:.003,side:Ut,envMapIntensity:.85}),o=new ze({map:t,roughness:.9,bumpMap:n,bumpScale:.002,transparent:!0,depthWrite:!1,side:Ut}),a=ao((x,p)=>{let d=nl(x+11,p+7),E=pi(x*12,p*9);return[.11+d*.19,.24+d*.35,.026+E*.08]},Ht.textureSize/2,!0),c=ao((x,p)=>{let d=nl(x+5,p+3),E=ps(p);return[.1+d*.12+E*.06,.17+d*.22+E*.12,.025+d*.055,.93-E*.43]},Ht.textureSize/2,!0),l=new Wt({map:c,color:13228945,roughness:.26,transparent:!0,opacity:.76,depthWrite:!1,side:Ut,emissive:1981189,emissiveIntensity:.48,envMapIntensity:.35}),h=new Wt({map:a,color:16777215,roughness:.17,metalness:0,ior:1.333,clearcoat:1,clearcoatRoughness:.12,side:Ut,emissive:2374407,emissiveIntensity:.3,envMapIntensity:1.15}),f={value:0};h.onBeforeCompile=x=>{x.uniforms.waterTime=f,x.fragmentShader=`uniform float waterTime;
`+x.fragmentShader,x.fragmentShader=x.fragmentShader.replace("#include <map_fragment>",`#ifdef USE_MAP
 vec2 flowUv=vMapUv+vec2(sin(vMapUv.y*10.0+waterTime*.17),cos(vMapUv.x*9.0-waterTime*.13))*.025;
 diffuseColor*=texture2D(map,flowUv);
 #endif`)},h.customProgramCacheKey=()=>"slow-water-currents-v1";let m=new ze({color:9546090,roughness:.79,transparent:!0,opacity:.75,depthWrite:!1,emissive:2503177,emissiveIntensity:.12}),u=new Wt({color:13097881,roughness:.07,metalness:0,transparent:!0,opacity:.23,depthWrite:!1,clearcoat:1,clearcoatRoughness:.04,envMapIntensity:1.25}),g=new _t({color:12505482,transparent:!0,opacity:.18,depthWrite:!1,side:Ut});return{glass:r,haze:o,fluid:l,liquidTop:h,foam:m,bubble:u,ripple:g,waterTime:f}}var yM=i=>Math.max(0,Math.min(1,i)),md=i=>{let e=yM(i);return e*e*(3-2*e)};function pd(i,e,t,n,s){if(i<e)return 0;let r=i-e;return r<t?md(r/t):r<t+n?1:1-md((r-t-n)/s)}var vM=[{at:5,head:-.32,eye:-.52,pitch:.035,hold:1.7},{at:17.4,head:.36,eye:.55,pitch:-.065,hold:2.1},{at:31.1,head:-.23,eye:-.4,pitch:-.1,hold:1.3}];function p0(i,e=!1,t={}){if(t.headYaw=0,t.gazeYaw=0,t.gazePitch=0,e||i<0)return t;let n=i%43.7;for(let s of vM){let r=pd(n,s.at,.24,s.hold+1,.65),o=pd(n,s.at+.38,.95,s.hold,1.25);t.headYaw+=s.head*o,t.gazeYaw+=s.eye*r,t.gazePitch+=s.pitch*r}return t.gazePitch-=.12*pd(n,25.2,.22,.8,.5),t}function m0(i,e,t,n,s=!1,r={}){let o=md((e-1.08)/.42),a=1.1+n*.055,c=s?0:o*.105*(Math.sin(i*a+n)+.12*Math.sin(i*.47+n*.6))/1.12,l=t-.1-e;return r.angle=c,r.x=Math.sin(c)*l,r.y=t-.1-Math.cos(c)*l,r.hookX=r.x-Math.sin(c)*.52,r.hookY=r.y+Math.cos(c)*.52,r}var sl;function _M(){if(sl)return sl;let i=128,e=new Uint8Array(i*i*4),t=new Uint8Array(i*i*4),n=8817,s=()=>(n=n*1664525+1013904223>>>0,n/4294967296);for(let a=0;a<i;a++)for(let c=0;c<i;c++){let l=(a*i+c)*4,h=s(),f=Math.max(0,Math.sin(c*.056+Math.sin(a*.05)*2)*Math.cos(a*.041)-.15),m=h>.965?.22:0;e[l]=223-f*67-h*16-m*140,e[l+1]=219-f*49-h*15-m*130,e[l+2]=186-f*72-h*17-m*130,e[l+3]=255,t[l]=t[l+1]=t[l+2]=145+h*24-m*255,t[l+3]=255}let r=new Ei(e,i,i),o=new Ei(t,i,i);for(let a of[r,o])a.wrapS=a.wrapT=sr,a.magFilter=En,a.minFilter=zi,a.generateMipmaps=!0,a.needsUpdate=!0;return r.colorSpace=ft,sl=new ze({map:r,bumpMap:o,bumpScale:.0011,color:16052183,roughness:.72,emissive:12563852,emissiveIntensity:.28}),sl}var MM=new Zt(1,20,14),da=new ze({color:1580302,roughness:1});function ii(i,e,t=_M()){let n=new ut(i,t);return n.castShadow=!0,n.receiveShadow=!0,e.add(n),n}function Ri(i,e,t,n){let s=ii(MM,i,n);return s.position.set(...e),s.scale.set(...t),s}function Ti(i,e,t=.012){return ii(new cn(new Gt(e.map(n=>new w(...n))),32,t,8,!1),i)}function rl(i,e,t,n=.012){let s=new w(...e),r=new w(...t),o=r.clone().sub(s),a=ii(new qt(n*.82,n,o.length(),10),i);return a.position.copy(s).add(r).multiplyScalar(.5),a.quaternion.setFromUnitVectors(new w(0,1,0),o.normalize()),a}function gd(i=!1){let e=new be;e.name=i?"Slender forearm bone":"Worn femur";let t=[[0,-.161],[.023,-.16],[.028,-.13],[.019,-.1],[.014,-.04],[.015,.025],[.019,.085],[.028,.122],[.026,.145],[0,.155]],n=new Us(t.map(r=>new He(r[0]*(i?.62:1),r[1])),20),s=n.attributes.position;for(let r=0;r<s.count;r++)s.setX(r,s.getX(r)+.009*Math.sin((s.getY(r)+.16)*Math.PI/.315));return n.computeVertexNormals(),ii(n,e),Ri(e,[.022,.14,0],[.043,.038,.039]),Ri(e,[-.015,-.147,.002],[.028,.03,.034]),Ri(e,[.02,-.15,-.002],[.029,.032,.032]),i&&e.scale.set(.75,1,.8),e}function g0(){let i=new be;i.name="Curved rib fragment";let e=[];for(let t=0;t<=20;t++){let n=-.85+t/20*2.9;e.push([Math.cos(n)*.123-.018,Math.sin(n)*.123,.018*Math.sin(n*1.3)])}return Ti(i,e),Ri(i,e[0],[.017,.015,.018]),i}function x0(){let i=new be;i.name="Detached jaw with uneven teeth",Ti(i,[[-.088,.045,-.035],[-.08,-.025,.035],[-.043,-.05,.071],[0,-.054,.082],[.043,-.05,.071],[.08,-.025,.035],[.088,.045,-.035]],.013);for(let e=0;e<8;e++){let t=(e-3.5)*.017,n=.078-Math.abs(t)*.3,s=ii(new bt(.013,.02+e%3*.002,.013),i);s.position.set(t,-.041,n),s.rotation.y=-t*3}return i}function EM(){let i=new be;i.name="Goofy buck-toothed skull with wonky eye sockets";let e=new vt;e.moveTo(-.076,-.061),e.quadraticCurveTo(-.133,-.035,-.121,.067),e.bezierCurveTo(-.119,.171,.123,.165,.12,.06),e.quadraticCurveTo(.136,-.029,.077,-.061),e.lineTo(.047,-.071),e.lineTo(-.047,-.073),e.closePath();for(let[r,o,a,c,l]of[[-.052,.019,.039,.043,-.2],[.052,.011,.033,.035,.18]]){let h=new bi;h.absellipse(r,o,a,c,0,Math.PI*2,!0,l),e.holes.push(h)}let t=new bi;t.moveTo(.001,-.026),t.lineTo(-.012,-.05),t.quadraticCurveTo(.001,-.045,.013,-.05),t.closePath(),e.holes.push(t);let n=ii(new sn(e,{depth:.022,bevelEnabled:!0,bevelSize:.004,bevelThickness:.004,bevelSegments:2,steps:1,curveSegments:20}),i);n.position.z=.043,Ri(i,[0,.04,-.055],[.12,.121,.077]),Ri(i,[0,.012,.027],[.109,.093,.01],da);for(let r of[-1,1])Ri(i,[r*.093,-.042,.047],[.028,.022,.025]);for(let[r,o,a,c,l]of[[-.019,-.084,.028,.042,-.11],[.017,-.08,.027,.036,.17],[-.06,-.073,.014,.018,-.28],[.06,-.071,.012,.015,.23]]){let h=ii(new bt(a,c,.018),i);h.position.set(r,o,.064),h.rotation.z=l}let s=new be;s.name="Lopsided cartoon jaw",s.position.set(.004,-.071,-.003),s.rotation.z=-.12,i.add(s),Ti(s,[[-.087,.04,-.025],[-.083,-.025,.037],[-.047,-.053,.071],[0,-.056,.079],[.051,-.048,.068],[.085,-.022,.033],[.087,.04,-.025]],.014);for(let[r,o]of[[-.052,-.04],[.038,-.041],[.057,-.036]]){let a=ii(new bt(.015,.016,.015),s);a.position.set(r,o,.071),a.rotation.z=r*3}return Ti(i,[[-.009,.154,-.016],[.003,.15,.003],[-.004,.141,.025],[.005,.126,.042]],.0016).material=da,i}function xd(){let i=new be;i.name="Short articulated spine";for(let e=0;e<6;e++){let t=(e-2.5)*.038,n=.01*Math.sin(e*.7);Ri(i,[0,t,n],[.025,.016,.02]);for(let s of[-1,1])rl(i,[s*.012,t,n],[s*.045,t-.009,n-.008],.007);rl(i,[0,t,n],[0,t+.008,n-.043],.006)}return i}function y0(){let i=new be;i.name="Broken rib cage",i.add(xd());for(let e=0;e<5;e++)for(let t of[-1,1]){if(e===4&&t===1)continue;let n=.08-e*.043,s=.08+Math.sin(e/5*Math.PI)*.038;Ti(i,[[0,n,-.02],[t*s*.65,n+.018,-.045],[t*s,n-.004,.008],[t*s*.82,n-.031,.065],[t*.018,n-.044,.08]],.0085)}return rl(i,[0,.06,.081],[0,-.12,.079],.01),i}function SM(i){let e=i===0,t=new be;t.name=e?"Pudding-shaped skull with bony party hat":"Sushi-shaped skull with bony beanie";let n=new vt;if(e)n.moveTo(-.3,-.27),n.bezierCurveTo(-.42,-.19,-.38,.12,-.29,.24),n.quadraticCurveTo(0,.34,.29,.24),n.bezierCurveTo(.38,.12,.42,-.19,.3,-.27),n.quadraticCurveTo(0,-.34,-.3,-.27);else{n.moveTo(-.31,-.225),n.quadraticCurveTo(-.39,-.16,-.34,-.025),n.lineTo(-.41,.17),n.quadraticCurveTo(-.4,.22,-.21,.29),n.quadraticCurveTo(0,.33,.21,.29),n.quadraticCurveTo(.4,.22,.41,.17),n.lineTo(.34,-.025),n.quadraticCurveTo(.39,-.16,.31,-.225);for(let l=7;l>=0;l--){let h=-.31+l*.0775;n.quadraticCurveTo(h+.038,-.285,h,-.225)}}n.closePath();let s=e?.015:-.055,r=e?.13:.14;for(let l of[-1,1]){let h=new bi;h.absellipse(l*r,s,.07,l<0?.065:.057,0,Math.PI*2,!0,l*.18),n.holes.push(h)}let o=new bi;o.moveTo(0,s-.037),o.lineTo(-.023,s-.083),o.quadraticCurveTo(0,s-.075,.023,s-.083),o.closePath(),n.holes.push(o);let a=new bi;a.absellipse(0,e?-.19:-.192,e?.208:.227,e?.064:.042,0,Math.PI*2,!0),n.holes.push(a);let c=ii(new sn(n,{depth:.055,bevelEnabled:!0,bevelSize:.008,bevelThickness:.008,bevelSegments:3,curveSegments:24}),t);c.position.z=.135,Ri(t,[0,.012,-.035],[e?.355:.37,.235,.16]),Ri(t,[0,-.025,.126],[.325,.265,.008],da);for(let l=0;l<7;l++){if(l===1||l===5)continue;let h=ii(new bt(.039,l%2?.037:.05,.035),t);h.position.set((l-3)*.053,e?-.147:-.169,.175),h.rotation.z=(l%3-1)*.12}if(e){Ti(t,[[-.3,.19,.19],[-.24,.13,.2],[-.18,.195,.21],[-.11,.095,.21],[-.045,.17,.21],[.025,.085,.21],[.09,.17,.21],[.16,.105,.21],[.23,.19,.2],[.3,.15,.19]],.015);let l=new be;l.name="Ivory party-hat crest",l.position.set(.02,.285,0),l.rotation.z=-.12,t.add(l);let h=ii(new Ns(.123,.3,32),l);h.position.y=.15;let f=ii(new $t(.12,.012,8,32),l);f.rotation.x=Math.PI/2;for(let m=0;m<5;m++){let u=m/5*Math.PI*2;Ti(l,[[Math.cos(u)*.12,.005,Math.sin(u)*.12],[Math.cos(u)*.065,.15,Math.sin(u)*.065],[0,.3,0]],.004)}Ri(l,[0,.314,0],[.028,.03,.028]),Ti(t,[[-.2,.27,.15],[-.18,.23,.195],[-.205,.2,.2],[-.18,.17,.2]],.0025).material=da}else{for(let m of[-1,1])Ti(t,[[m*.115,.027,.197],[m*.12,.16,.198],[m*.13,.292,.16]],.0035).material=da;Ti(t,[[-.37,.01,.17],[-.2,.036,.199],[0,.048,.2],[.2,.036,.199],[.37,.01,.17]],.012);let l=new be;l.name="Ribbed ivory beanie crest",l.position.y=.3,t.add(l),ii(new Zt(1,32,16,0,Math.PI*2,0,Math.PI/2),l).scale.set(.235,.235,.2);let f=ii(new $t(.238,.02,10,40),l);f.rotation.x=Math.PI/2,f.scale.y=.86;for(let m=0;m<10;m++){let u=m/10*Math.PI*2,g=[];for(let x=0;x<=8;x++){let p=x/8*Math.PI/2;g.push([Math.cos(u)*.238*Math.cos(p),.237*Math.sin(p),Math.sin(u)*.203*Math.cos(p)])}Ti(l,g,.006)}}return t}function v0(i){let e=new be;if(e.name=["Pudding Figpal skeleton","Sushi Figpal skeleton","Pufferfish skeleton"][i],i===2){let t=EM();t.scale.set(1.25,1.35,1.05),t.position.set(-.16,.035,.055),e.add(t);for(let n=0;n<7;n++){let s=-.05+n*.055;if(Ri(e,[s,0,0],[.028,.021,.02]),n<5)for(let r of[-1,1])Ti(e,[[s,0,0],[s+.026,r*.09,-.01],[s+.014,r*(.22-n*.023),.015]],.01)}for(let n of[-.16,-.08,0,.08,.16])rl(e,[.29,0,0],[.47,n,0],.009)}else e.add(SM(i));return e}var bM=[[{kind:"femur",x:.14,y:.46,z:.15,tilt:1.1,yaw:-.3,scale:.9}],[{kind:"ribs",x:.02,y:.4,z:.1,tilt:.3,yaw:-.2,scale:.78},{kind:"spine",x:-.16,y:.4,z:-.08,tilt:-.5,yaw:.4,scale:.75},{kind:"rib",x:.16,y:.34,z:.17,tilt:.9,yaw:-.4,scale:.64}],[{kind:"forearm",x:-.13,y:.42,z:.16,tilt:-.68,yaw:.2,scale:.88},{kind:"jaw",x:.09,y:.32,z:.16,tilt:-.18,yaw:.6,scale:1.04}]],wM={femur:gd,forearm:()=>gd(!0),rib:g0,ribs:y0,spine:xd,jaw:x0};function _0(i){let e=new be;e.name=`Bones floating in canister ${i+1}`;let t=bM[i].map((s,r)=>{let o=wM[s.kind]();return o.scale.multiplyScalar(s.scale),e.add(o),{...s,object:o,phase:i*1.91+r*2.3}});function n(s,r=!1){let o=r?0:s;for(let a of t){let c=a.phase,l=.022,h=.46;a.object.position.set(a.x+l*Math.sin(o*.27+c),a.y+.014*Math.sin(o*.57+c),a.z+.018*Math.cos(o*.23+c)),a.object.rotation.set(.1*Math.sin(o*.19+c),a.yaw+h*Math.sin(o*.17+c),a.tilt+.11*Math.sin(o*.31+c),"YXZ")}}return n(0),{group:e,update:n}}function M0(i,e){let t=v0(e);t.position.copy(i.position),t.quaternion.copy(i.quaternion),t.scale.copy(i.scale),i.parent.add(t),i.updateWorldMatrix(!0,!0);let n=i.matrixWorld.clone().invert(),s=new Ln,r=new Ln;i.traverse(g=>{g.isMesh&&(g.geometry.computeBoundingBox(),r.copy(g.geometry.boundingBox).applyMatrix4(new St().multiplyMatrices(n,g.matrixWorld)),s.union(r))});let o=new Mi,a=new Mi;function c(g,x){let p=new Map;g.traverse(d=>{if(!d.isMesh)return;let E=v=>{if(!p.has(v)){let M=v.clone();M.onBeforeCompile=v.onBeforeCompile,M.customProgramCacheKey=v.customProgramCacheKey,M.clippingPlanes=[x],M.clipShadows=!0,p.set(v,M)}return p.get(v)};d.material=Array.isArray(d.material)?d.material.map(E):E(d.material)})}c(i,o),c(t,a);let l=s.min.y-.04,h=!1,f=new w;function m(g){i.updateWorldMatrix(!0,!1),f.setFromMatrixPosition(i.matrixWorld),f.y=g,i.worldToLocal(f),l=Math.max(l,Math.min(s.max.y+.04,f.y)),o.set(new w(0,1,0),-l).applyMatrix4(i.matrixWorld),a.copy(o).negate(),h=l>=s.max.y+.015,i.visible=!h,t.visible=l>s.min.y}m(-100);function u(){l=s.min.y-.04,h=!1,m(-100)}return{skeleton:t,update:m,reset:u,get transformed(){return h},get cutHeight(){return l}}}function E0(){let i=new io().load(new URL("./assets/open-to-work.png",import.meta.url).href);i.colorSpace=ft,i.anisotropy=4;let e=new ze({map:i,transparent:!0,alphaTest:.025,depthWrite:!1,roughness:.86,metalness:0,emissiveMap:i,emissive:16777215,emissiveIntensity:.18}),t=new Rt(.78,.78,48,2),n=t.attributes.position;for(let s=0;s<n.count;s++)n.setZ(s,Math.sqrt(.49**2-n.getX(s)**2));return t.computeVertexNormals(),t.computeBoundingSphere(),()=>{let s=new ut(t,e);return s.name="#OPENTOWORK decal on curved tank glass",s.position.y=.7,s.renderOrder=8,s}}function S0(){let i=new be;i.name="Three suspended Figpals over bubbling green canisters";let e=Math.PI*2,t=193108,n=()=>(t=t*1664525+1013904223>>>0,t/4294967296),s=(Z,ye=.78,Pe=.005)=>new ze({color:Z,roughness:ye,emissive:Z,emissiveIntensity:Pe}),r=s(1184789,.85,0),o=s(16772534),a=s(16184551),c=s(36072),l=s(15226636),h=s(11022601),f=s(16755746),m=s(16754855),u=s(10214644),g=s(294108),x=s(16765992),p=new _t({color:1053459,side:mn});p.onBeforeCompile=Z=>{Z.vertexShader=Z.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
transformed += normal * 0.009;`)},p.customProgramCacheKey=()=>"figpal-outline-v1";function d(Z,ye,Pe=i,Ce=!1){let Te=new ut(Z,ye);if(Te.castShadow=!0,Te.receiveShadow=!0,Pe.add(Te),Ce){let ce=new ut(Z,p);ce.name="Ink outline",Te.add(ce)}return Te}function E(Z,ye,Pe,Ce,Te=!1){let ce=d(new Zt(1,24,16),Pe,Ce,Te);return ce.position.set(...Z),ce.scale.set(...ye),ce}function v(Z,ye,Pe,Ce=i){let Te=d(new bt(...Z),Pe,Ce);return Te.position.set(...ye),Te}function M(Z,ye,Pe,Ce,Te=i,ce=!1){let Ve=d(new qt(Z,Z,ye,48,1,ce),Ce,Te);return Ve.position.set(...Pe),Ve}function L(Z,ye,Pe,Ce=i){let Te=new Gt(Z.map(ce=>new w(...ce)));return d(new cn(Te,Math.max(16,Z.length*5),ye,6,!1),Pe,Ce)}function A(Z,ye,Pe,Ce,Te=i){let ce=new w(...Z),Ve=new w(...ye),G=Ve.clone().sub(ce),Re=M(Pe,G.length(),ce.clone().add(Ve).multiplyScalar(.5).toArray(),Ce,Te);return Re.quaternion.setFromUnitVectors(new w(0,1,0),G.normalize()),Re}function T(Z,ye,Pe,Ce,Te=i){let ce=d(new $t(Z,ye,8,64),Ce,Te);return ce.rotation.x=Math.PI/2,ce.position.y=Pe,ce}function C(Z,ye,Pe,Ce,Te=.035){let ce=new sn(Z,{depth:ye-Te*2,bevelEnabled:!0,bevelSize:Te,bevelThickness:Te,bevelSegments:3,steps:1,curveSegments:16});return ce.translate(0,0,-ye/2+Te),d(ce,Pe,Ce,!0)}function J(Z,ye,Pe,Ce=.105,Te="worried"){let ce=new be;ce.name=`${Te} expression`,Z.add(ce);for(let Ve of[-1,1])E([Ve*Ce,ye,Pe],[.022,.031,.013],r,ce),L([[Ve*(Ce+.035),ye+.041,Pe+.004],[Ve*Ce,ye+.055,Pe+.007],[Ve*(Ce-.035),ye+.074,Pe+.007]],.01,r,ce);Te==="afraid"?E([0,ye-.075,Pe+.003],[.026,.038,.012],r,ce):L([[-.052,ye-.091,Pe],[0,ye-.06,Pe+.005],[.052,ye-.091,Pe]],.012,r,ce)}function _(){let Z=new be;Z.name="Party-hat pudding Figpal";let ye=new vt;ye.moveTo(-.3,-.27),ye.bezierCurveTo(-.42,-.19,-.38,.12,-.29,.24),ye.quadraticCurveTo(0,.34,.29,.24),ye.bezierCurveTo(.38,.12,.42,-.19,.3,-.27),ye.quadraticCurveTo(0,-.34,-.3,-.27),C(ye,.37,f,Z,.035);let Pe=new vt;Pe.moveTo(-.29,.25),Pe.quadraticCurveTo(0,.34,.29,.25),Pe.lineTo(.3,.13),Pe.quadraticCurveTo(.28,.1,.22,.16),Pe.lineTo(.15,.055),Pe.quadraticCurveTo(.13,.035,.08,.115),Pe.lineTo(.01,.045),Pe.quadraticCurveTo(-.02,.028,-.09,.12),Pe.lineTo(-.17,.065),Pe.quadraticCurveTo(-.2,.05,-.22,.16),Pe.lineTo(-.3,.13),Pe.closePath();let Ce=C(Pe,.025,o,Z,.006);Ce.position.z=.191,J(Z,-.045,.222);for(let Se of[-1,1])E([Se*.24,-.085,.206],[.045,.028,.012],m,Z);let Te=new be;Te.position.set(.02,.285,0),Te.rotation.z=-.12,Te.scale.setScalar(.6),Z.add(Te);let ce=document.createElement("canvas");ce.width=512,ce.height=256;let Ve=ce.getContext("2d");Ve.fillStyle="#ffd62d",Ve.fillRect(0,0,512,256),Ve.fillStyle="#0088ea";for(let Se=0;Se<4;Se++)for(let Ue=0;Ue<7;Ue++)Ve.beginPath(),Ve.ellipse(Ue*85+Se%2*42,30+Se*67,18,14,0,0,e),Ve.fill();let G=new Ft(ce);G.colorSpace=ft;let Re=new ze({map:G,roughness:.82}),oe=d(new Ns(.205,.5,48),Re,Te,!0);oe.position.y=.25,T(.205,.009,0,r,Te),E([0,.515,0],[.042,.045,.041],c,Te);for(let Se=0;Se<8;Se++){let Ue=Se/8*e;A([0,.515,.005],[Math.cos(Ue)*.07,.515+Math.sin(Ue)*.07,.006],.012,c,Te)}return{object:Z}}function b(){let Z=new be;Z.name="Orange-beanie sushi Figpal";let ye=new vt;ye.moveTo(-.32,-.035),ye.quadraticCurveTo(-.38,-.11,-.31,-.2);for(let Re=0;Re<8;Re++){let oe=-.31+Re*.0775;ye.quadraticCurveTo(oe+.038,-.285,oe+.0775,-.225)}ye.quadraticCurveTo(.39,-.13,.32,-.035),ye.quadraticCurveTo(0,.035,-.32,-.035),C(ye,.43,a,Z,.025);let Pe=new vt;Pe.moveTo(-.37,-.015),Pe.lineTo(-.41,.17),Pe.quadraticCurveTo(-.4,.22,-.21,.29),Pe.quadraticCurveTo(0,.33,.21,.29),Pe.quadraticCurveTo(.4,.22,.41,.17),Pe.lineTo(.37,-.015),Pe.quadraticCurveTo(0,.055,-.37,-.015),C(Pe,.43,x,Z,.022);let Ce=new vt;Ce.moveTo(-.12,.022),Ce.lineTo(-.13,.31),Ce.quadraticCurveTo(0,.33,.13,.31),Ce.lineTo(.12,.022),Ce.closePath();let Te=C(Ce,.44,r,Z,.006);Te.position.z=.008,J(Z,-.1,.253,.1,"afraid");for(let Re=0;Re<16;Re++){let oe=Re/16*e;E([Math.cos(oe)*.29,-.18+Math.sin(oe)*.025,Math.sin(oe)*.17],[.031,.022,.015],a,Z)}let ce=new be;ce.position.y=.3,Z.add(ce),d(new Zt(1,32,16,0,e,0,Math.PI/2),l,ce,!0).scale.set(.235,.235,.2);for(let Re=0;Re<10;Re++){let oe=Re/10*e,Se=[];for(let Ue=0;Ue<=14;Ue++){let Fe=.08+Ue/14*(Math.PI/2-.08);Se.push([Math.sin(Fe)*Math.cos(oe)*.238,Math.cos(Fe)*.237,Math.sin(Fe)*Math.sin(oe)*.204])}L(Se,.006,h,ce)}let G=M(.258,.065,[0,.002,0],l,ce);G.scale.z=.86,T(.26,.009,-.03,r,ce).scale.y=.86,T(.26,.008,.034,r,ce).scale.y=.86;for(let Re=0;Re<30;Re++){let oe=Re/30*e;A([Math.cos(oe)*.259,-.025,Math.sin(oe)*.224],[Math.cos(oe)*.259,.027,Math.sin(oe)*.224],.0045,h,ce)}return{object:Z}}function B(){let Z=new be;Z.name="Propeller-hat pufferfish Figpal",E([0,0,0],[.335,.33,.25],u,Z,!0);let ye=new vt;ye.moveTo(.26,.03),ye.quadraticCurveTo(.34,.06,.4,.16),ye.quadraticCurveTo(.49,.23,.5,.06),ye.quadraticCurveTo(.51,-.11,.43,-.13),ye.lineTo(.33,-.05),ye.closePath(),C(ye,.11,u,Z,.02);for(let ce=0;ce<3;ce++)L([[.38,-.025+ce*.04,.078],[.465,-.075+ce*.085,.078]],.012,g,Z);for(let ce of[-1,1]){let Ve=E([ce*.303,-.02,.13],[.065,.1,.035],u,Z,!0);Ve.rotation.z=ce*.25;for(let G=0;G<3;G++)L([[ce*.3,-.06+G*.04,.168],[ce*.338,-.075+G*.05,.16]],.01,g,Z)}J(Z,.015,.252,.09,"worried");for(let ce=0;ce<11;ce++){let Ve=Math.PI*1.03+ce/10*Math.PI*.9,G=Math.cos(Ve)*.26,Re=Math.sin(Ve)*.25,oe=.25*Math.sqrt(Math.max(.04,1-(G/.335)**2-(Re/.33)**2))+.008;L([[G,Re,oe],[G+.008,Re-.027,oe]],.011,g,Z)}for(let ce=0;ce<7;ce++){let Ve=.15+ce/6*Math.PI*.88;A([Math.cos(Ve)*.31,Math.sin(Ve)*.31,0],[Math.cos(Ve)*.37,Math.sin(Ve)*.37,0],.012,g,Z)}let Pe=new be;Pe.position.set(0,.275,0),Z.add(Pe);let Ce=[s(15746581),x,s(4802281),x];for(let ce=0;ce<4;ce++)d(new Zt(1,12,12,ce*e/4,e/4,0,Math.PI/2),Ce[ce],Pe).scale.set(.215,.2,.215);T(.218,.011,0,r,Pe),A([0,.2,0],[0,.27,0],.012,a,Pe);let Te=new be;Te.position.y=.275,Pe.add(Te),E([0,0,0],[.025,.018,.025],a,Te);for(let ce of[-1,1])E([ce*.066,0,0],[.083,.012,.029],a,Te);return{object:Z,propeller:Te}}let W=mi(14802384),X=mi(9606540),H=mi(15065300),ee=mi(14012614);ee.bumpScale=7e-4,ee.envMapIntensity=.85;let Me=new ze({color:1382417,roughness:.29,metalness:.08}),se=[];for(let Z=0;Z<=12;Z++){let ye=Z/12*Math.PI;se.push(new w(Math.cos(ye)*.015,.01+Math.sin(ye)*.015,0))}for(let Z=0;Z<=12;Z++){let ye=Math.PI+Z/12*Math.PI;se.push(new w(Math.cos(ye)*.015,-.01+Math.sin(ye)*.015,0))}let me=new cn(new Gt(se,!0),Ht.chainSegments,.0048,Ht.chainRadialSegments,!0),N=new Dt,Q=new w(0,1,0),ie=new yt;function j(Z,ye,Pe=null){let Ce=new Gt(Z.map(Re=>new w(...Re))),Te=Ce.getLength(),ce=Pe??Math.max(2,Math.ceil(Te/.033)),Ve=new gn(me,ee,ce);Ve.name="Interlocking steel chain links",Ve.castShadow=!0,Ve.receiveShadow=!0,Ve.frustumCulled=!1,ye.add(Ve);for(let Re=0;Re<ce;Re++)Ve.setColorAt(Re,new ht().setRGB(.67+n()*.3,.58+n()*.3,.45+n()*.34));function G(Re,oe){let Se=new w(...Re),Ue=new w(...oe),Fe=Ue.clone().sub(Se),lt=Fe.length(),Pt=Math.min(ce,Math.max(2,Math.ceil(lt/.033)));Ve.count=Pt,Fe.normalize();for(let Ye=0;Ye<Pt;Ye++)N.position.copy(Se).lerp(Ue,Ye/(Pt-1)),N.quaternion.setFromUnitVectors(Q,Fe),ie.setFromAxisAngle(Q,(Ye%2?Math.PI/2:0)+Math.sin(Ye*7.17)*.07),N.quaternion.multiply(ie),N.scale.setScalar(1),N.updateMatrix(),Ve.setMatrixAt(Ye,N.matrix);Ve.instanceMatrix.needsUpdate=!0}if(Pe)Ve.instanceMatrix.setUsage(fi),G(Z[0],Z.at(-1));else for(let Re=0;Re<ce;Re++){let oe=Re/(ce-1);N.position.copy(Ce.getPointAt(oe)),N.quaternion.setFromUnitVectors(Q,Ce.getTangentAt(oe)),ie.setFromAxisAngle(Q,(Re%2?Math.PI/2:0)+Math.sin(Re*7.17)*.07),N.quaternion.multiply(ie),N.scale.setScalar(1),N.updateMatrix(),Ve.setMatrixAt(Re,N.matrix)}return{object:Ve,setPoints:G}}let F=f0(),ae=E0(),{glass:z,haze:V,fluid:Y,liquidTop:pe,foam:ve,bubble:fe,ripple:$,waterTime:I}=F,Ee=[],re=[],ue=[],xe=[],Ie=new Dt,Ae=[{x:-3.05,z:-1.05,height:2.02,winchY:2.8},{x:-2.85,z:.3,height:1.84,winchY:2.65},{x:-2.15,z:1.45,height:1.6,winchY:2.38}];for(let Z=0;Z<Ae.length-1;Z++){let ye=Ae[Z],Pe=Ae[Z+1];A([ye.x,3.065,ye.z],[Pe.x,3.065,Pe.z],.052,W)}let U=[_,b,B];for(let Z=0;Z<3;Z++){let{x:ye,z:Pe,height:Ce,winchY:Te}=Ae[Z],ce=new be;ce.position.set(ye,.012,Pe),ce.name=`Green bubbling canister ${Z+1}`,i.add(ce),M(.515,.16,[0,.1,0],W,ce),M(.46,.035,[0,.025,0],X,ce);for(let Ne=0;Ne<8;Ne++){let Ze=Ne/8*e;E([Math.cos(Ze)*.49,.15,Math.sin(Ze)*.49],[.022,.022,.022],H,ce)}let Ve=M(.485,1.02,[0,.72,0],z,ce,!0);Ve.castShadow=!1,Ve.renderOrder=6;let G=M(.487,1.02,[0,.72,0],V,ce,!0);G.name="Condensation, mineral streaks and algae tide marks",G.castShadow=!1,G.renderOrder=7,ce.add(ae());let Re=M(.444,.865,[0,.64,0],Y,ce,!0);Re.castShadow=!1,Re.renderOrder=2;let oe=_0(Z);ce.add(oe.group),M(.444,.018,[0,.215,0],pe,ce);for(let Ne of[.225,1.235])T(.484,.036,Ne,W,ce),T(.454,.01,Ne-.018,X,ce);for(let Ne of[.15,2.24,4.34]){let Ze=Math.cos(Ne)*.485,vn=Math.sin(Ne)*.485;A([Ze,.22,vn],[Ze,1.23,vn],.021,W,ce)}for(let Ne of[-1,1])L([[Ne*.47,.96,0],[Ne*.58,.96,0],[Ne*.58,.74,0],[Ne*.48,.74,0]],.022,W,ce);let Se=new to(0,.444,Ht.mobile?32:48,Ht.mobile?6:10);Se.rotateX(-Math.PI/2);let Ue=d(Se,pe,ce);Ue.position.y=1.074,Ue.castShadow=!1,Ue.renderOrder=4,T(.441,.006,1.075,pe,ce).renderOrder=4;let Fe=Array.from({length:48},()=>({x:(n()-.5)*.61,z:(n()-.5)*.61,r:.007+n()**2*.023,phase:n(),speed:.15+n()*.17})),lt=new gn(new Zt(1,12,8),fe,Fe.length);lt.name="Rising liquid bubbles",lt.instanceMatrix.setUsage(fi),lt.frustumCulled=!1,lt.renderOrder=3,ce.add(lt);let Pt=[];for(let Ne=0;Ne<24;Ne++){let Ze=n()*e,vn=Ne<18?.4+n()*.025:n()*.34,en=.006+n()*.016,jn=E([Math.cos(Ze)*vn,1.074,Math.sin(Ze)*vn],[en,en*.65,en],ve,ce);jn.castShadow=!1,jn.renderOrder=5,Pt.push({mesh:jn,baseRadius:en,phase:n()*e})}let Ye=[];for(let Ne=0;Ne<5;Ne++){let Ze=d(new to(.96,1,40),$.clone(),ce);Ze.rotation.x=-Math.PI/2,Ze.position.set((n()-.5)*.45,1.078,(n()-.5)*.45),Ze.castShadow=!1,Ze.renderOrder=5,Ye.push({mesh:Ze,phase:n()})}let Be=document.createElement("canvas");Be.width=256,Be.height=128;let ke=Be.getContext("2d");ke.fillStyle="#bec39f",ke.fillRect(0,0,256,128),ke.fillStyle="#242c22",ke.font="bold 67px monospace",ke.textAlign="center",ke.fillText(`0${Z+1}`,128,87);let it=new Ft(Be);it.colorSpace=ft;let nt=d(new Rt(.17,.085),new ze({map:it,roughness:.9}),ce);nt.position.set(0,.115,.517),nt.castShadow=!1;for(let Ne=0;Ne<5;Ne++){let Ze=v([.065,.065,.007],[-.23+Ne*.115,.12,.5],Ne%2?r:s(10064462,.85,0),ce);Ze.rotation.z=-.45}nt.position.z=.52;let ot=M(.064,.03,[.32,1.19,.37],W,ce);ot.rotation.x=Math.PI/2,d(new wi(.052,24),o,ce).position.set(.32,1.19,.391),L([[.32,1.19,.395],[.3,1.219,.395]],.003,r,ce);let Xt=new be;Xt.name=`Tank ${Z+1} drain valve`,Xt.position.set(.3,.29,.43),Xt.userData.valveIndex=Z,ce.add(Xt);let rn=M(.042,.19,[0,0,0],W,Xt);rn.rotation.x=Math.PI/2,L([[0,0,.045],[0,-.035,.16],[0,-.1,.23]],.033,W,Xt);let hn=new Dt;hn.position.set(0,-.1,.23),Xt.add(hn);let yn=d(new to(.024,.034,20),W,Xt);yn.position.copy(hn.position),yn.rotation.x=.6;let dt=d(new wi(.024,20),X,Xt);dt.position.copy(hn.position),dt.position.z-=.001,dt.rotation.x=.6,A([0,0,.01],[0,.075,.11],.012,W,Xt);let At=new be;At.name="Spinning red drain handwheel",At.position.set(0,.075,.12),Xt.add(At),d(new $t(.088,.01,8,32),h,At);for(let Ne=0;Ne<3;Ne++){let Ze=Ne/3*e;A([0,0,0],[Math.cos(Ze)*.084,Math.sin(Ze)*.084,0],.007,h,At)}let Un=M(.018,.028,[0,0,0],H,At);Un.rotation.x=Math.PI/2;let un=d(new Zt(.102,12,8),new _t({transparent:!0,opacity:0,depthWrite:!1,colorWrite:!1}),At);un.castShadow=!1,ue.push({object:Xt,outlet:hn,setOpen(Ne){At.rotation.z=-Ne*Math.PI*4,At.position.z=.12+Ne*.018}});let zn=new Hn(7052325,.58,1.7,2);zn.position.set(0,.85,0),ce.add(zn),re.push({surface:Ue,bubbles:lt,bubbleData:Fe,foam:Pt,ripples:Ye,floatingBones:oe,phase:Z*1.7});let si=Math.atan2(1.85221-ye,3.1149-Pe);ce.rotation.y=si;let fn=new be;fn.name=`Chain hoist ${Z+1}`,fn.position.set(ye,0,Pe),fn.rotation.y=si,i.add(fn),v([.4,.05,.34],[0,3.13,0],W,fn);for(let Ne of[-1,1])A([Ne*.16,3.12,0],[Ne*.16,Te+.1,0],.023,W,fn),E([Ne*.16,3.12,.08],[.026,.026,.026],H,fn);let P=new be;P.name=`Winch ${Z+1}: lower or raise Figpal`,P.position.y=Te,P.userData.hoistIndex=Z,fn.add(P),v([.46,.12,.3],[0,.1,-.03],W,P);for(let Ne of[-1,1]){v([.035,.22,.27],[Ne*.191,.012,-.01],W,P);let Ze=M(.057,.055,[Ne*.205,0,0],Me,P);Ze.rotation.z=Math.PI/2;for(let vn of[-.073,.093])for(let en of[-.106,.096]){let jn=d(new qt(.013,.013,.018,6),H,P);jn.position.set(Ne*.215,vn,en),jn.rotation.z=Math.PI/2}}v([.105,.09,.11],[.3,.15,-.035],X,P),L([[.3,.18,.01],[.38,.21,.06],[.43,.12,.1],[.4,-.04,.07]],.008,Me,P);let te=document.createElement("canvas");te.width=256,te.height=128;let le=te.getContext("2d");le.fillStyle="#817653",le.fillRect(0,0,256,128),le.fillStyle="#2a2b24",le.font="bold 22px monospace",le.fillText("CHAIN HOIST",15,30),le.font="18px monospace",le.fillText("250 KG / 1978",15,62),le.fillText("SERVICE OVERDUE",15,103);for(let Ne=0;Ne<90;Ne++)le.fillStyle=Ne%2?"rgba(42,25,12,.48)":"rgba(170,156,116,.7)",le.fillRect(n()*256,n()*128,n()*17,n()*3);let de=new Ft(te);de.colorSpace=ft;let ne=d(new Rt(.25,.1),new ze({map:de,roughness:.87}),P);ne.position.set(-.005,.1,.124),ne.rotation.z=.028;let Le=new be;Le.rotation.z=Math.PI/2,P.add(Le);let Xe=new be;Xe.name="Rotating chain sprocket",Le.add(Xe),M(.1,.28,[0,0,0],X,Xe);for(let Ne of[-1,1]){M(.136,.026,[0,Ne*.16,0],W,Xe);for(let Ze=0;Ze<12;Ze++){let vn=Ze/12*e;v([.026,.03,.032],[Math.cos(vn)*.13,Ne*.16,Math.sin(vn)*.13],H,Xe)}}let Je=[];for(let Ne=0;Ne<=120;Ne++){let Ze=Ne/120*e*4;Je.push([Math.cos(Ze)*.106,-.1+Ne/120*.2,Math.sin(Ze)*.106])}j(Je,Xe).object.name="Greasy chain wound around the drum";let et=M(.105,.24,[.3,.015,-.04],X,P);et.rotation.z=Math.PI/2;for(let Ne=0;Ne<6;Ne++){let Ze=M(.115,.009,[.215+Ne*.033,.015,-.04],W,P);Ze.rotation.z=Math.PI/2}let rt=new be;rt.position.set(-.22,0,0),P.add(rt),A([0,0,0],[0,-.13,0],.014,W,rt),A([0,-.13,0],[-.09,-.13,0],.021,X,rt);let at=new Hn(12371885,.4,.85,2);at.position.set(-.24,.12,.36),P.add(at),E([0,.17,.28],[.018,.011,.012],new _t({color:7767659}),P);let Ke=new be;Ke.name=`Suspended Figpal ${Z+1}`,Ke.position.y=Ce,fn.add(Ke);let wt=U[Z]();wt.object.scale.setScalar(.62),wt.object.rotation.z=(Z-1)*.035,Ke.add(wt.object);let gt=M0(wt.object,Z),Ot=new Dt;Ot.position.set(0,.5,0),Ke.add(Ot),xe.push(Ot),A([-.22,.45,0],[.22,.45,0],.019,W,Ke);let An=d(new $t(.045,.01,6,18,Math.PI*1.65),H,Ke);An.position.set(0,.49,0),An.rotation.z=-.5,A([-.028,.476,.008],[.016,.511,.008],.004,X,Ke);for(let Ne of[-1,1])j([[Ne*.21,.45,0],[Ne*.245,.11,0],[Ne*.23,-.12,.015],[Ne*.16,-.205,.04],[0,-.222,.045]],Ke);let It=j([[0,Te-.1,.025],[0,Ce+.52,0]],fn,72),st=j([[-.1,Te-.01,-.11],[-.11,Te-.36,-.12],[-.16,Te-.4,-.1],[-.2,Te-.05,-.08]],fn);st.object.name="Winch return chain loop";let Bt=new be;Bt.name=`Canister ${Z+1} winch control`,Bt.position.set(.39,.85,.4),Bt.rotation.y=.35,Bt.userData.hoistIndex=Z,ce.add(Bt),v([.12,.21,.07],[0,0,0],X,Bt),E([0,.047,.047],[.024,.024,.015],s(8072739,.6,0),Bt),E([0,-.047,.047],[.024,.024,.015],s(6913097,.6,0),Bt),L([[.39,.95,.4],[.44,1.02,.35],[.46,1.27,.12],[.44,Te-.13,.06],[.24,Te,0]],.007,X,fn),Ee.push({rig:fn,hanger:Ke,transformation:gt,captive:wt.object,propeller:wt.propeller,drum:Xe,crank:rt,loadChain:It,height:Ce,homeHeight:Ce,targetHeight:Ce,winchY:Te,phase:Z*2.1,lowered:!1})}let S=new Hn(11712685,.75,3.8,2);S.position.set(-1.75,2.75,-.2),i.add(S);function K(Z){let ye=Ee[Z];return ye?(ye.lowered=!ye.lowered,ye.targetHeight=ye.lowered?.65:ye.homeHeight,`Figpal ${Z+1}${ye.transformation.transformed?"'s bones":""} ${ye.lowered?"lowering into the canister":"rising above the canister"}.`):null}function ge(){for(let Z of Ee)Z.lowered=!0,Z.targetHeight=.65}function we(){for(let Z of Ee)Z.lowered=!1,Z.height=Z.targetHeight=Z.homeHeight,Z.hanger.position.set(0,Z.homeHeight,0),Z.hanger.rotation.z=0,Z.loadChain.setPoints([0,Z.winchY-.1,.025],[0,Z.homeHeight+.52,0]),Z.drum.rotation.y=Z.crank.rotation.x=0,Z.transformation.reset()}let _e=0,We={};function Oe(Z,ye=!1){let Pe=Math.max(0,Math.min(.05,Z-_e));_e=Z;let Ce=ye?0:Z;I.value=Ce;for(let Te of Ee){let ce=Te.targetHeight-Te.height;Te.height=ye?Te.targetHeight:Te.height+Math.sign(ce)*Math.min(Math.abs(ce),Pe*.15),m0(Z,Te.height,Te.winchY,Te.phase,ye,We),Te.hanger.position.set(We.x,We.y,0),Te.hanger.rotation.z=We.angle,Te.loadChain.setPoints([0,Te.winchY-.1,.025],[We.hookX,We.hookY,0]),Te.drum.rotation.y=(Te.homeHeight-Te.height)/.1,Te.crank.rotation.x=(Te.homeHeight-Te.height)/.1,Te.transformation.update(1.086),Te.propeller&&(Te.propeller.rotation.y=Ce*.18)}for(let Te of re){Te.floatingBones.update(Z,ye);let ce=Te.surface.geometry.attributes.position,Ve=Te.surface.geometry.attributes.normal;for(let G=0;G<ce.count;G++){let Re=ce.getX(G),oe=ce.getZ(G),Se=Re*17+Ce*1.4+Te.phase,Ue=oe*14-Ce*1.1,Fe=(Re+oe)*28-Ce*2.1;ce.setY(G,Math.sin(Se)*Math.cos(Ue)*.0035+Math.sin(Fe)*.0012);let lt=Math.cos(Se)*Math.cos(Ue)*.0595+Math.cos(Fe)*.0336,Pt=-Math.sin(Se)*Math.sin(Ue)*.049+Math.cos(Fe)*.0336,Ye=Math.hypot(lt,1,Pt);Ve.setXYZ(G,-lt/Ye,1/Ye,-Pt/Ye)}ce.needsUpdate=!0,Ve.needsUpdate=!0,Te.bubbleData.forEach((G,Re)=>{let oe=(Ce*G.speed+G.phase)%1;Ie.position.set(G.x+Math.sin(Ce*1.3+Re)*.012,.25+oe*.84,G.z+Math.cos(Ce+Re)*.009),Ie.scale.setScalar(G.r*(.65+oe*.5)),Ie.updateMatrix(),Te.bubbles.setMatrixAt(Re,Ie.matrix)}),Te.bubbles.instanceMatrix.needsUpdate=!0;for(let G of Te.foam){let Re=(Math.sin(Ce*2.4+G.phase)+1)*.5;G.mesh.scale.set(G.baseRadius,G.baseRadius*(.12+Re*.28),G.baseRadius)}for(let G of Te.ripples){let Re=(Ce*.48+G.phase)%1,oe=.012+Re*.075;G.mesh.scale.setScalar(oe),G.mesh.visible=Re<.88,G.mesh.material.opacity=(1-Re)*.16}}}Oe(0);function qe(Z){for(let ye of[W,X,H,ee,z,Y,pe,fe])ye.envMap=Z,ye.needsUpdate=!0}function mt(Z){let ye=Ee[Z];return!!ye&&!ye.transformation.transformed}function De(Z){let ye=Ee[Z];return mt(Z)&&!ye.lowered&&Math.abs(ye.height-ye.homeHeight)<.025}return{group:i,update:Oe,valves:ue,toggleHoist:K,isLowered:Z=>Ee[Z]?.lowered??!1,canSpeak:mt,isHanging:De,lowerAll:ge,reset:we,speechAnchors:xe,setEnvironment:qe}}function b0(i=[]){let e=i.map(n=>(n.updateWorldMatrix(!0,!1),{inverse:n.matrixWorld.clone().invert(),width:n.geometry.parameters.width/2,depth:n.geometry.parameters.depth/2,top:n.getWorldPosition(new w).y+n.geometry.parameters.height/2})),t=new w;return(n,s)=>{let r=.003;for(let o of e)t.set(n,0,s).applyMatrix4(o.inverse),Math.abs(t.x)<=o.width&&Math.abs(t.z)<=o.depth&&(r=Math.max(r,o.top));return r}}function yd(i,e){i.updateWorldMatrix(!0,!0);let t=1/0,n=new w,s=new St,r=new St;function o(a){if(a.userData.ignoreFloorContact)return;let c=a.isMesh&&a.geometry.attributes.position;if(c)for(let l=0;l<(a.isInstancedMesh?a.count:1);l++){a.isInstancedMesh?(a.getMatrixAt(l,s),r.multiplyMatrices(a.matrixWorld,s)):r.copy(a.matrixWorld);for(let h=0;h<c.count;h++)n.fromBufferAttribute(c,h).applyMatrix4(r),t=Math.min(t,n.y-e(n.x,n.z))}for(let l of a.children)o(l)}return o(i),t}function ur(i,e=()=>.003){let t=yd(i,e);if(!Number.isFinite(t))return i;let n=i.getWorldPosition(new w);return n.y+=6e-4-t,i.parent&&i.parent.worldToLocal(n),i.position.copy(n),i.updateWorldMatrix(!1,!0),i.userData.floorProp=!0,i}function ol(i,e){i.updateWorldMatrix(!0,!1);let t=i.geometry,n=t.attributes.position,s=t.parameters.radialSegments+1,r=i.matrixWorld.clone().invert(),o=new w,a=new w,c=t.parameters.radius;for(let l=0;l<n.count;l+=s){o.set(0,0,0);for(let x=0;x<s-1;x++)o.add(a.fromBufferAttribute(n,l+x).applyMatrix4(i.matrixWorld));o.divideScalar(s-1);let h=e(o.x,o.z),f=1-je.smoothstep(o.y-h,.055,.15),m=i.userData.anchorStart?je.smoothstep(l/s,0,3):1,u=i.userData.anchorEnd?je.smoothstep((n.count-s-l)/s,0,3):1,g=(h+c+6e-4-o.y)*f*m*u;for(let x=0;x<s;x++)a.fromBufferAttribute(n,l+x).applyMatrix4(i.matrixWorld),a.y+=g,a.applyMatrix4(r),n.setXYZ(l+x,a.x,a.y,a.z)}n.needsUpdate=!0,t.computeVertexNormals(),t.computeBoundingBox(),t.computeBoundingSphere()}function w0(i,e=()=>.003){let t=new be;t.name="Fallen nursery mobile with four soft animals",t.position.set(-1.05,0,.55);let n=48319,s=()=>(n=n*1664525+1013904223>>>0,n/4294967296),r=document.createElement("canvas");r.width=r.height=512;let o=r.getContext("2d");o.fillStyle="#c6c1ac",o.fillRect(0,0,512,512);for(let z=0;z<7e3;z++){let V=s()*512,Y=s()*512;o.strokeStyle=z%2?"rgba(58,52,36,.12)":"rgba(246,236,212,.28)",o.lineWidth=.6,o.beginPath(),o.moveTo(V,Y),o.lineTo(V+2,Y+3),o.stroke()}for(let z=0;z<45;z++){let V=s()*512,Y=s()*512,pe=8+s()*70,ve=o.createRadialGradient(V,Y,0,V,Y,pe);ve.addColorStop(0,"rgba(63,52,31,.15)"),ve.addColorStop(1,"rgba(63,52,31,0)"),o.fillStyle=ve,o.fillRect(V-pe,Y-pe,pe*2,pe*2)}function a(z){let V=new Ft(z);return V.colorSpace=ft,V.anisotropy=4,V}let c=a(r);function l(z,V=c){return new Wt({color:z,map:V,bumpMap:c,bumpScale:.0012,roughness:.96,sheen:.32,sheenColor:12433832,sheenRoughness:.95})}let h=l(13801630),f=l(14792108),m=l(7839145),u=l(5270656),g=l(14132309),x=l(15128233),p=l(3420203),d=new ze({color:6313803,roughness:1}),E=new ze({color:10525568,roughness:1}),v=new ze({color:1645337,roughness:.48}),M=new ze({color:12762273,map:c,roughness:.68,bumpMap:c,bumpScale:.001}),L=new ze({color:8159861,metalness:.65,roughness:.56}),A=document.createElement("canvas");A.width=A.height=512;let T=A.getContext("2d");T.drawImage(r,0,0),T.fillStyle="#343027";for(let z=0;z<12;z++){let V=z*45-15,Y=z%2*30;T.beginPath(),T.moveTo(V,Y),T.bezierCurveTo(V+55,105,V+8,180,V+51,268),T.lineTo(V+23,238),T.bezierCurveTo(V-12,148,V+26,93,V-9,Y),T.fill(),T.beginPath(),T.moveTo(V+25,512),T.bezierCurveTo(V+69,417,V+6,367,V+45,285),T.lineTo(V+24,314),T.bezierCurveTo(V-11,395,V+41,438,V-3,512),T.fill()}let C=l(14262365,a(A)),J=new Zt(1,24,16);function _(z,V,Y=t){let pe=new ut(z,V);return pe.castShadow=!0,pe.receiveShadow=!0,Y.add(pe),pe}function b(z,V,Y,pe){let ve=_(J,Y,pe);return ve.position.set(...z),ve.scale.set(...V),ve}function B(z,V,Y,pe=t){return _(new cn(new Gt(z.map(ve=>new w(...ve))),Math.max(20,z.length*6),V,6,!1),Y,pe)}function W(z,V,Y,pe,ve=t){let fe=new w(...z),$=new w(...V),I=$.clone().sub(fe),Ee=_(new qt(Y,Y,I.length(),12),pe,ve);return Ee.position.copy(fe).add($).multiplyScalar(.5),Ee.quaternion.setFromUnitVectors(new w(0,1,0),I.normalize()),Ee}function X(z,V,Y,pe=t){let ve=_(new bt(...z),Y,pe);return ve.position.set(...V),ve}function H(z,V,Y,pe){let ve=new vt;ve.moveTo(-.5,0),ve.quadraticCurveTo(-.48,.44,0,1),ve.quadraticCurveTo(.49,.49,.5,0),ve.quadraticCurveTo(0,-.1,-.5,0);let fe=new sn(ve,{depth:.18,bevelEnabled:!0,bevelSize:.06,bevelThickness:.05,bevelSegments:2,curveSegments:8,steps:1});fe.translate(0,0,-.09);let $=_(fe,Y,pe);return $.scale.set(...V),$.position.set(...z),$}function ee(z,V,Y=.092,pe=.047){for(let ve of[-1,1])b([ve*pe,Y,V],[.009,.012,.007],v,z)}function Me(z){let V=new be;V.name=`${z} mobile animal`;let Y=z==="Pig"?h:z==="Elephant"?m:z==="Tiger"?C:g,pe=b([0,.065,-.025],[.112,.091,.154],Y,V);pe.name="Soft body resting on the floor";for(let $ of[-1,1])b([$*.047,.073,.08],[.077,.09,.09],Y,V);B([[0,.13,.116],[0,.092,.166],[0,.036,.16],[0,.008,.136]],.0018,d,V);for(let $ of[-1,1])for(let I of[-.106,.1]){let Ee=b([$*.11,.002,I],[.043,.043,.062],Y,V);if(Ee.rotation.z=$*.28,b([$*.134,-.007,I+.015],[.021,.03,.041],z==="Pig"?p:z==="Elephant"?u:f,V),z==="Tiger"||z==="Fox")for(let re=0;re<3;re++)b([$*.151,-.012+(re-1)*.014,I+.034],[.004,.004,.006],p,V)}let ve=b([0,.102,-.17],z==="Elephant"?[.097,.094,.094]:[.09,.083,.083],Y,V);if(z==="Pig"){b([0,.08,-.244],[.049,.032,.024],f,V);for(let I of[-1,1])b([I*.019,.082,-.267],[.006,.009,.003],p,V);for(let I of[-1,1]){let Ee=H([I*.061,.153,-.177],[.072,.083,.09],h,V);Ee.rotation.z=-I*.35}let $=[];for(let I=0;I<=45;I++){let Ee=I/45*Math.PI*3.9,re=.025*(1-I/70);$.push([Math.sin(Ee)*re,.115+Math.cos(Ee)*re,.167+I/45*.028])}B($,.0065,f,V),ee(V,-.242,.122)}else if(z==="Elephant"){for(let $ of[-1,1])b([$*.098,.098,-.16],[.071,.08,.027],m,V),b([$*.113,.101,-.184],[.047,.055,.009],u,V);B([[0,.099,-.24],[0,.055,-.273],[0,-.006,-.268],[.018,-.031,-.304],[.032,-.006,-.317]],.022,m,V),ee(V,-.248,.127,.043),B([[0,.122,.15],[.025,.115,.185],[.042,.08,.199]],.006,u,V),b([.044,.077,.2],[.013,.018,.012],u,V)}else{for(let $ of[-1,1]){let I=H([$*.057,.155,-.172],[.067,.071,.1],Y,V);I.rotation.z=-$*.26,H([$*.057,.162,-.184],[.038,.045,.055],f,V)}for(let $ of[-1,1])b([$*.025,.076,-.235],[.035,.027,.023],x,V);if(b([0,.091,-.26],[.015,.011,.011],p,V),ee(V,-.241,.124,.044),z==="Tiger")B([[0,.134,.15],[.035,.162,.193],[.067,.155,.201],[.075,.129,.182]],.012,C,V),b([.075,.129,.182],[.014,.015,.016],p,V);else{let $=b([.042,.13,.191],[.058,.061,.131],g,V);$.rotation.x=-.45,$.rotation.z=-.25;let I=b([.039,.182,.271],[.045,.046,.061],x,V);I.rotation.x=-.45}}for(let $ of[-1,1])B([[$*.1,.1,.07],[$*.113,.065,-.02],[$*.094,.092,-.1]],.0015,d,V);let fe=_(new $t(.014,.004,6,16,Math.PI*1.75),E,V);return fe.position.set(0,.158,-.065),fe.rotation.x=Math.PI/2,{object:V,tab:fe,body:pe}}function se(z,V){z.updateWorldMatrix(!0,!0);let Y=z.getWorldPosition(new w);Y.y-=yd(V,e)+.006,z.parent.worldToLocal(Y),z.position.copy(Y),z.updateWorldMatrix(!0,!0);let pe=new w,ve=new St;z.traverse(fe=>{if(!fe.isMesh)return;let $=fe.geometry.clone(),I=$.attributes.position;ve.copy(fe.matrixWorld).invert();let Ee=!1;for(let re=0;re<I.count;re++){pe.fromBufferAttribute(I,re).applyMatrix4(fe.matrixWorld);let ue=e(pe.x,pe.z)+6e-4;pe.y>=ue||(pe.y=ue,pe.applyMatrix4(ve),I.setXYZ(re,pe.x,pe.y,pe.z),Ee=!0)}Ee?(I.needsUpdate=!0,$.computeVertexNormals(),$.computeBoundingBox(),$.computeBoundingSphere(),fe.geometry=$):$.dispose()}),z.userData.floorProp=!0}let me=new be;me.name="Toppled mobile support",t.add(me),X([.16,.055,.12],[-.6,.0305,.48],M,me),X([.12,.028,.1],[-.6,.0765,.48],M,me),W([-.6,.0565,.48],[-.6,.1425,.48],.012,L,me),b([-.6,.1455,.48],[.043,.012,.02],M,me),B([[-.59,.039,.44],[-.63,.017,.1],[-.48,.017,-.3],[-.2,.02,-.47],[.12,.019,-.39],[.19,.017,-.13],[.04,.052,0]],.013,M,me),ur(me,e);let N=new be;N.name="Scuffed mobile music box",N.position.set(0,.116,0),N.rotation.set(.21,0,-.18),t.add(N);let Q=_(new qt(.103,.103,.068,40),M,N),ie=_(new $t(.103,.002,6,40),d,N);ie.rotation.x=Math.PI/2;let j=b([0,.039,0],[.034,.009,.034],g,N);for(let z=0;z<5;z++)X([.03,.002,.002],[-.049+z*.019,.035,.041],d,N);W([0,-.02,-.093],[0,-.02,-.145],.005,L,N),b([0,-.02,-.15],[.026,.012,.005],L,N),t.updateMatrixWorld(!0),ur(N,e);let F=[[-.37,.068,.035],[.34,.103,-.025],[.018,.058,-.33],[-.025,.075,.34]];for(let z of F)z[1]=e(t.position.x+z[0],t.position.z+z[2])+.0076,W([0,N.position.y,0],z,.007,L);for(let z of F){let V=_(new $t(.014,.003,6,16),L);V.rotation.x=Math.PI/2,V.position.set(z[0],z[1]-.004,z[2])}let ae=[{kind:"Pig",x:.29,z:.35,rear:!0,yaw:-.12,roll:.08,arm:3},{kind:"Tiger",x:-.38,z:.17,rear:!0,yaw:.36,roll:-.12,arm:0},{kind:"Elephant",x:.34,z:-.29,rear:!1,yaw:-.28,roll:-.24,arm:1},{kind:"Fox",x:-.27,z:-.43,rear:!0,yaw:1.12,roll:.2,arm:2}];for(let z of ae){let{object:V,tab:Y,body:pe}=Me(z.kind);V.position.set(z.x,0,z.z),V.scale.setScalar(.88);let ve=Math.atan2(i.x-(t.position.x+z.x),i.z-(t.position.z+z.z));V.rotation.set(z.kind==="Pig"?-.06:.03,ve+(z.rear?0:Math.PI)+z.yaw,z.roll,"YXZ"),t.add(V),t.updateMatrixWorld(!0),se(V,pe),t.updateMatrixWorld(!0);let fe=t.worldToLocal(Y.getWorldPosition(new w)),$=F[z.arm],I=B([$,[$[0]+.06,.024,$[2]+.08],[($[0]+fe.x)/2-.05,.023,($[2]+fe.z)/2+.08],[fe.x-.04,.025,fe.z+.035],fe.toArray()],.0021,E);I.userData.anchorStart=I.userData.anchorEnd=!0,ol(I,e);let Ee=document.createElement("canvas");Ee.width=Ee.height=64;let re=Ee.getContext("2d"),ue=re.createRadialGradient(32,32,5,32,32,32);ue.addColorStop(0,"rgba(0,0,0,.65)"),ue.addColorStop(.48,"rgba(0,0,0,.32)"),ue.addColorStop(1,"rgba(0,0,0,0)"),re.fillStyle=ue,re.fillRect(0,0,64,64);let xe=new Ln().setFromObject(V),Ie=xe.getSize(new w),Ae=t.worldToLocal(xe.getCenter(new w)),U=new Rt(Ie.x+.05,Ie.z+.05,12,12);U.rotateX(-Math.PI/2),U.translate(Ae.x,0,Ae.z);let S=U.attributes.position;for(let ge=0;ge<S.count;ge++)S.setY(ge,e(t.position.x+S.getX(ge),t.position.z+S.getZ(ge))+2e-4);U.computeVertexNormals();let K=_(U,new _t({map:new Ft(Ee),transparent:!0,depthWrite:!1}));K.name=`${z.kind} floor contact shadow`,K.castShadow=!1,K.userData.ignoreFloorContact=!0}return t}var co=new Map,vd=31.7;function TM(i){if(co.has(i))return co.get(i);let e=9678115+Math.imul(i,2654435761)>>>0,t=()=>(e=Math.imul(e,1664525)+1013904223>>>0,e/4294967296),n=[],s=.65+t()*1.4;for(;s<vd-2;){let r=2+Math.floor(t()*5);for(let o=0;o<r;o++){let a=.028+t()*.072;n.push([s,a,t()*.045,t()>.23]),s+=a+.045+t()*.16}t()<.42&&(n.push([s,.22+t()*.4,.005,!0]),s+=.75),s+=1.3+t()*4.2}return co.size>4&&co.delete(co.keys().next().value),co.set(i,n),n}function RM(i,e=!1){if(e)return[.88,.79];let t=Math.floor(i/vd),n=i-t*vd,s=TM(t);return[0,1].map(r=>{let o=r?.79:.88;for(let a=0;a<s.length;a++){let[c,l,h,f]=s[a];if(r===1&&!f)continue;let m=c+(r?(a%3-1)*.013:0),u=m+l;if(n>=m&&n<u){let g=Math.min((n-m)/.003,(u-n)/.005,1);o=je.lerp(o,h,Math.max(0,g))}else n>=u&&n<u+.025&&(o*=1+.16*(1-(n-u)/.025))}return o*(.985+.015*Math.sin(i*8.7+r))})}function T0(){let i=new be;i.name="Crooked failing fluorescent fixture",i.position.set(.22,2.98,-.55),i.rotation.set(.02,.12,-.075);let e=mi(9673098),t=mi(15065545),n=new ze({color:2369569,roughness:.9}),s=new ze({color:11183498,roughness:.72});function r(g,x,p=[0,0,0]){let d=new ut(g,x);return d.position.set(...p),d.castShadow=!0,d.receiveShadow=!0,i.add(d),d}let o=(g,x,p=e)=>r(new bt(...g),p,x);function a(g,x,p,d=e){return r(new qt(g,g,x,16),d,p)}function c(g,x=n,p=.004){return r(new cn(new Gt(g.map(d=>new w(...d))),24,p,5,!1),x)}o([1.53,.055,.32],[0,.012,0],t);for(let g of[-1,1]){let x=o([1.53,.08,.016],[0,-.033,g*.157],t);x.rotation.x=g*.25,o([1.46,.006,.012],[0,-.017,g*.121],n)}o([.38,.045,.085],[.12,.055,0],n);for(let g of[-.69,.69]){o([.065,.05,.275],[g,-.02,0],e);for(let x of[-.132,.132]){let p=a(.012,.012,[g,-.051,x]);o([.016,.002,.003],[g,-.058,x],n),p.rotation.z=.05}}let l=[];for(let[g,x]of[-.078,.078].entries()){let p=document.createElement("canvas");p.width=512,p.height=64;let d=p.getContext("2d"),E=d.createLinearGradient(0,0,512,0);E.addColorStop(0,"#29271f"),E.addColorStop(.035,"#5a5948"),E.addColorStop(.09,"#b4b9a0"),E.addColorStop(.19,"#d9dfc4"),E.addColorStop(.77,"#d0d8bd"),E.addColorStop(.93,"#92977e"),E.addColorStop(.98,"#383c32"),E.addColorStop(1,"#272b22"),d.fillStyle=E,d.fillRect(0,0,512,64);for(let A=0;A<170;A++){let T=A*73.29%512,C=A*23.87%64;d.fillStyle="rgba(35,36,24,.12)",d.fillRect(T,C,1+A%5,1)}let v=new Ft(p);v.colorSpace=ft,v.center.set(.5,.5),v.rotation=Math.PI/2;let M=new ze({map:v,emissiveMap:v,emissive:15003084,emissiveIntensity:2,roughness:.27});l.push(M);let L=a(.019,1.34,[0,-.073,x],M);L.rotation.z=Math.PI/2,L.castShadow=!1;for(let A of[-1,1]){let T=a(.021,.035,[A*.657,-.073,x],e);T.rotation.z=Math.PI/2,o([.037,.075,.056],[A*.704,-.045,x],s);for(let C of[-.007,.007]){let J=a(.0025,.024,[A*.684,-.073,x+C],e);J.rotation.z=Math.PI/2}}c([[-.73,.03,x],[-.77,-.01,x],[-.72,-.04,x+.025]],g?n:new ze({color:7031093,roughness:.8}))}let h=a(.015,.034,[.54,-.035,0],s);h.rotation.x=.08,c([[.57,-.02,.15],[.59,-.15,.17],[.68,-.13,.18],[.68,-.035,.15]],e,.004),c([[.72,.04,0],[.82,.09,.03],[.89,.19,.04],[1.02,.31,.03]],n,.006);let f=new Hn(11647895,.25,1.2,2);f.position.set(0,.1,0),i.add(f);function m(g,x){let p=RM(g,x);return l.forEach((d,E)=>d.emissiveIntensity=p[E]*2.9),f.intensity=(p[0]+p[1])*.2,(p[0]+p[1])/1.67}function u(g){for(let x of[e,t])x.envMap=g,x.needsUpdate=!0}return m(0,!1),{group:i,update:m,setEnvironment:u}}function al(i){let e=Math.max(0,Math.ceil(i));return`${String(Math.floor(e/60)).padStart(2,"0")}:${String(e%60).padStart(2,"0")}`}function R0(i=300,e=()=>performance.now()/1e3){let t=null;return{start(){return t!==null?!1:(t=e()+i,!0)},reset(){t=null},get remainingSeconds(){return t===null?i:Math.max(0,Math.ceil(t-e()))},get status(){return t===null?"waiting":e()>=t?"finished":"running"}}}function A0(i,e){let t=new be;t.name="Five-minute red LED countdown timer",t.position.copy(e),t.position.y=.006,t.rotation.y=Math.atan2(i.x-e.x,i.z-e.z)-je.degToRad(16),t.scale.setScalar(.72);let n=R0(),s=new be;s.position.y=.13,s.rotation.x=-.24,t.add(s);let r=document.createElement("canvas");r.width=512,r.height=256;let o=r.getContext("2d");o.fillStyle="#555951",o.fillRect(0,0,512,256);let a=7418,c=()=>(a=a*1664525+1013904223>>>0,a/4294967296);for(let j=0;j<1800;j++)o.fillStyle=j%4?"rgba(13,16,12,.18)":"rgba(180,171,142,.26)",o.fillRect(c()*512,c()*256,1+c()*4,1+c()*2);for(let j=0;j<35;j++){o.strokeStyle="rgba(194,190,163,.24)",o.lineWidth=.6;let F=c()*512,ae=c()*256;o.beginPath(),o.moveTo(F,ae),o.lineTo(F+8+c()*39,ae+c()*5),o.stroke()}let l=new Ft(r);l.colorSpace=ft;let h=new ze({color:3619894,map:l,bumpMap:l,bumpScale:7e-4,roughness:.82}),f=new ze({color:527113,roughness:.66}),m=new ze({color:7828326,metalness:.65,roughness:.68});function u(j,F,ae=s){let z=new ut(j,F);return z.castShadow=!0,z.receiveShadow=!0,ae.add(z),z}function g(j,F,ae,z=s){let V=u(new bt(...j),ae,z);return V.position.set(...F),V}let x=new vt,p=.59,d=.19,E=.022;x.moveTo(-p/2+E,-d/2),x.lineTo(p/2-E,-d/2),x.quadraticCurveTo(p/2,-d/2,p/2,-d/2+E),x.lineTo(p/2,d/2-E),x.quadraticCurveTo(p/2,d/2,p/2-E,d/2),x.lineTo(-p/2+E,d/2),x.quadraticCurveTo(-p/2,d/2,-p/2,d/2-E),x.lineTo(-p/2,-d/2+E),x.quadraticCurveTo(-p/2,-d/2,-p/2+E,-d/2);let v=new sn(x,{depth:.174,bevelEnabled:!0,bevelSize:.006,bevelThickness:.006,bevelSegments:3,steps:1,curveSegments:10});v.translate(0,0,-.087),u(v,h),g([.538,.16,.01],[0,0,.096],f);let M=g([.518,.143,.002],[0,0,.11],new Wt({color:5511450,transparent:!0,opacity:.09,depthWrite:!1,roughness:.22,clearcoat:1,clearcoatRoughness:.1}));M.castShadow=!1;for(let j of[-.279,.279])for(let F of[-.071,.071]){let ae=u(new qt(.008,.008,.006,12),m);ae.rotation.x=Math.PI/2,ae.position.set(j,F,.098),g([.01,.0015,.001],[j,F,.102],f)}for(let j of[-.23,.23])for(let F of[-.06,.06])g([.052,.016,.052],[j,.008,F],f,t);for(let j of[-1,1])for(let F=0;F<6;F++)g([.002,.04,.006],[j*.301,-.018,-.061+F*.019],f);let L=document.createElement("canvas");L.width=512,L.height=64;let A=L.getContext("2d");A.font="500 20px monospace",A.fillStyle="#8e8b7a",A.textAlign="center",A.fillText("MIN",128,42),A.fillText("SEC",384,42);let T=new Ft(L);T.colorSpace=ft;let C=u(new Rt(.43,.018),new _t({map:T,transparent:!0,depthWrite:!1}));C.position.set(0,.069,.104),C.castShadow=!1;let J=new _t({color:16721943,toneMapped:!1}),_=new _t({color:2295557,toneMapped:!1}),b=new _t({color:16718087,transparent:!0,opacity:.12,depthWrite:!1,blending:_c,toneMapped:!1}),B=new vt,W=.066,X=.01,H=.005;B.moveTo(-W/2,0),B.lineTo(-W/2+H,X/2),B.lineTo(W/2-H,X/2),B.lineTo(W/2,0),B.lineTo(W/2-H,-X/2),B.lineTo(-W/2+H,-X/2),B.closePath();let ee=new di(B),Me=["abcdef","bc","abdeg","abcdg","bcfg","acdfg","acdefg","abc","abcdefg","abcdfg"],se={a:[0,.058,0],b:[.036,.029,1],c:[.036,-.029,1],d:[0,-.058,0],e:[-.036,-.029,1],f:[-.036,.029,1],g:[0,0,0]},me=[];for(let j of[-.187,-.081,.081,.187]){let F=new be;F.position.set(j,-.005,.106),s.add(F);let ae=[];for(let[z,[V,Y,pe]]of Object.entries(se)){let ve=u(ee,_,F);ve.position.set(V,Y,0),ve.rotation.z=pe?Math.PI/2:0,ve.scale.x=pe?.76:1,ve.castShadow=!1;let fe=u(ee,b,F);fe.position.set(V,Y,-2e-4),fe.rotation.z=ve.rotation.z,fe.scale.set(ve.scale.x*1.12,1.9,1),fe.castShadow=!1,ae.push({key:z,segment:ve,glow:fe})}me.push(ae)}for(let j of[-.025,.015]){let F=u(new wi(.005,16),J);F.position.set(0,j,.106),F.castShadow=!1}let N=new Hn(16718344,.12,.7,2);N.position.set(0,.06,.16),s.add(N);let Q=-1;function ie(){let j=n.remainingSeconds;if(j!==Q){let F=al(j).replace(":","");me.forEach((ae,z)=>{let V=Me[Number(F[z])];for(let Y of ae){let pe=V.includes(Y.key);Y.segment.material=pe?J:_,Y.glow.visible=pe}}),Q=j}return j}return ie(),{group:t,start:()=>n.start(),reset(){n.reset(),ie()},update:ie,get status(){return n.status}}}function _d(i,e,t,n){let s=n/2,r=s/2;i.save(),i.translate(e,t);function o(a,c){i.fillStyle=c,i.beginPath(),i.moveTo(s,a),i.lineTo(r,a),i.arc(r,a+r,r,-Math.PI/2,Math.PI/2,!0),i.lineTo(s,a+s),i.closePath(),i.fill()}o(0,"#f24e1e"),o(s,"#a259ff"),i.fillStyle="#ff7262",i.beginPath(),i.moveTo(s,0),i.lineTo(s+r,0),i.arc(s+r,r,r,-Math.PI/2,Math.PI/2),i.lineTo(s,s),i.closePath(),i.fill(),i.fillStyle="#1abcfe",i.beginPath(),i.arc(s+r,s+r,r,0,Math.PI*2),i.fill(),i.fillStyle="#0acf83",i.beginPath(),i.moveTo(s,2*s),i.lineTo(s,2*s+r),i.arc(r,2*s+r,r,0,Math.PI*1.5),i.closePath(),i.fill(),i.restore()}function C0(i){let e=new be;e.name="Worn handsaw beside the countdown timer",e.position.copy(i).add(new w(-.34,0,.25)),e.position.y=0,e.rotation.y=-.12,e.rotation.z=.026;let t=new be;t.rotation.x=-Math.PI/2,e.add(t);let n=mi(12963014);n.bumpScale=45e-5;let s=new ze({color:11121068,metalness:.72,roughness:.38}),r=new ze({color:10258264,metalness:.68,roughness:.62}),o=new ze({color:3156253,roughness:1}),a=new Uint8Array(256*256*4),c=1903;for(let v=0;v<256;v++)for(let M=0;M<256;M++){c=1664525*c+1013904223>>>0;let L=Math.sin(v*.54+Math.sin(M*.026)*2)*5+Math.sin(v*1.4+M*.012)*3,A=(c>>>24)/255,T=A>.99?28:0,C=(v*256+M)*4;a[C]=98+L+A*12+T,a[C+1]=57+L*.7+A*9+T,a[C+2]=30+L*.3+A*6+T,a[C+3]=255}let l=new Ei(a,256,256);l.colorSpace=ft,l.needsUpdate=!0,l.magFilter=En;let h=new ze({map:l,roughness:.83,bumpMap:l,bumpScale:5e-4});function f(v,M,L=t){let A=new ut(v,M);return A.castShadow=!0,A.receiveShadow=!0,L.add(A),A}function m(v,M,L,A){let T=new sn(v,{depth:M,bevelEnabled:L>0,bevelSize:L,bevelThickness:L,bevelSegments:2,curveSegments:24});T.translate(0,0,-M/2);let C=T.attributes.uv;for(let J=0;J<C.count;J++)C.setXY(J,(C.getX(J)+.37)/.72,(C.getY(J)+.115)/.23);return f(T,A)}let u=new vt;u.moveTo(-.36,.035),u.lineTo(.19,.081),u.lineTo(.205,-.083);let g=38;for(let v=g;v>=0;v--){let M=-.36+v/g*.55,L=-.035-(M+.36)/.55*.048;u.lineTo(M,L),v>0&&u.lineTo(M-.55/g*.4,L-.009)}u.lineTo(-.365,.025),u.closePath();let x=m(u,.0028,35e-5,[n,s]);x.name="Tapered pitted steel blade with saw teeth";let p=new vt;p.moveTo(.145,.092),p.bezierCurveTo(.19,.119,.31,.116,.338,.079),p.lineTo(.326,-.079),p.quadraticCurveTo(.314,-.111,.278,-.102),p.lineTo(.172,-.085),p.quadraticCurveTo(.153,-.07,.157,-.047),p.lineTo(.17,.046),p.closePath();let d=new bi;d.moveTo(.214,.055),d.quadraticCurveTo(.24,.072,.283,.055),d.lineTo(.283,-.057),d.quadraticCurveTo(.253,-.065,.226,-.052),d.lineTo(.209,.032),d.closePath(),p.holes.push(d);let E=m(p,.026,.006,h);E.name="Worn wooden open grip";for(let[v,M]of[[.176,.055],[.183,-.053],[.199,.003]])for(let L of[-1,1]){let A=f(new qt(.006,.006,.0035,18),r);A.rotation.x=Math.PI/2,A.position.set(v,M,L*.02);let T=f(new bt(.007,.0012,6e-4),o);T.position.set(v,M,L*.022),T.rotation.z=.35}return{group:e,setEnvironment(v){n.envMap=s.envMap=r.envMap=v;for(let M of[n,s,r])M.envMapIntensity=.9,M.needsUpdate=!0}}}function cl({flies:i=10,moths:e=5,spread:t=[.82,.17,.47],seed:n=29,sizeScale:s=1,dive:r=0}={}){let o=new be;o.name="Flies and moths circling the light";let a=new Zt(1,8,6),c=new ze({color:1382678,roughness:.65}),l=new ze({color:5589814,roughness:1}),h=new ze({color:12899016,roughness:.35,transparent:!0,opacity:.58,depthWrite:!1,side:Ut}),f=document.createElement("canvas");f.width=f.height=128;let m=f.getContext("2d");m.fillStyle="#b8aa83",m.fillRect(0,0,128,128);for(let me=0;me<190;me++)m.fillStyle=me%2?"#89795255":"#e2d3ab66",m.fillRect(me*47%128,me*73%128,2,1);m.strokeStyle="#695c3d",m.lineWidth=4,m.beginPath(),m.moveTo(76,0),m.quadraticCurveTo(99,60,76,128),m.stroke(),m.fillStyle="#5b5039",m.beginPath(),m.ellipse(57,68,13,18,.25,0,Math.PI*2),m.fill(),m.fillStyle="#d5c59a",m.beginPath(),m.ellipse(57,68,6,9,.25,0,Math.PI*2),m.fill(),m.strokeStyle="#75684788",m.lineWidth=1;for(let me=0;me<5;me++)m.beginPath(),m.moveTo(0,64),m.lineTo(128,12+me*26),m.stroke();let u=new Ft(f);u.colorSpace=ft;let g=new ze({map:u,roughness:.9,side:Ut,emissive:10127718,emissiveMap:u,emissiveIntensity:.15});function x(me){let N=new vt;N.moveTo(0,-.008),me?(N.bezierCurveTo(.02,-.031,.052,-.036,.058,-.018),N.bezierCurveTo(.06,-.007,.044,.004,.039,.009),N.bezierCurveTo(.047,.026,.023,.034,.013,.019)):(N.bezierCurveTo(.008,-.021,.03,-.024,.033,-.013),N.bezierCurveTo(.035,-.003,.015,.016,.005,.012)),N.lineTo(0,.008),N.closePath();let Q=new di(N,10),ie=Q.attributes.position,j=Q.attributes.uv;for(let F=0;F<ie.count;F++)j.setXY(F,ie.getX(F)/.06,(ie.getY(F)+.036)/.07);return Q.rotateX(-Math.PI/2),Q}function p(me,N,Q,ie){let j=new gn(me,N,Q);return j.name=ie,j.instanceMatrix.setUsage(fi),j.frustumCulled=!1,j.raycast=()=>{},o.add(j),j}let d=p(a,c,i*2,"Small dark flies"),E=p(a,l,e*2,"Moth bodies"),v=p(x(!1),h,i*2,"Translucent fly wings"),M=p(x(!0),g,e*2,"Dusty patterned moth wings"),L=new Dt,A=new w,T=new w,C=new w,J=new w(0,0,-1),_=new w(0,0,1),b=new w(0,1,0),B=new w,W=new yt,X=new yt,H=new yt().setFromAxisAngle(b,Math.PI),ee=Array.from({length:i+e},(me,N)=>({moth:N>=i,index:N>=i?N-i:N,phase:N*2.399+n*.17,size:s*(.72+(N*17+n)%13/28),speed:N>=i?.95+N%3*.23:1.8+N%4*.46}));function Me(me,N,Q){let ie=me*N.speed+N.phase,j=N.phase,F=N.moth?.72:.46;return Q.set(t[0]*(F*Math.cos(ie)+.17*Math.sin(ie*2.37+j)),t[1]*(.7*Math.sin(ie*1.73+j)+.23*Math.cos(ie*4.13)),t[2]*(F*Math.sin(ie*.91)+.18*Math.cos(ie*2.71-j))),Q.y-=r*(N.moth?1:.38)*Math.pow(.5+.5*Math.sin(ie*.43+j),6),N.moth||(Q.x+=.035*Math.sin(ie*7.3),Q.y+=.014*Math.cos(ie*9.7)),Q}function se(me,N=!1,Q=1){let ie=N?0:me;for(let j of ee){let{moth:F,index:ae,phase:z,size:V}=j,Y=F?E:d,pe=F?M:v;Me(ie,j,A),Me(ie+.012,j,T),C.copy(T).sub(A).normalize(),W.setFromUnitVectors(J,C),X.setFromAxisAngle(_,.25*Math.sin(ie*2.1+z)),W.multiply(X),L.position.copy(A),L.quaternion.copy(W),L.scale.set(F?.006:.0065,F?.007:.0055,F?.021:.011).multiplyScalar(V),L.updateMatrix(),Y.setMatrixAt(ae*2,L.matrix),B.set(0,0,F?-.022:-.013).applyQuaternion(W),L.position.copy(A).addScaledVector(B,V),L.scale.setScalar((F?.006:.0068)*V),L.updateMatrix(),Y.setMatrixAt(ae*2+1,L.matrix);let ve=N?.42:.18+Math.sin(ie*(F?39:92)+z)*(F?.9:.74);for(let[fe,$]of[-1,1].entries())B.set($*.004,0,0).applyQuaternion(W),L.position.copy(A).addScaledVector(B,V),X.setFromAxisAngle(_,$*ve),L.quaternion.copy(W).multiply(X),$<0&&L.quaternion.multiply(H),L.scale.setScalar(V),L.updateMatrix(),pe.setMatrixAt(ae*2+fe,L.matrix)}g.emissiveIntensity=.055+.14*Math.max(0,Q);for(let j of[d,E,v,M])j.instanceMatrix.needsUpdate=!0}return se(0),{group:o,update:se}}var lo=3,AM=2.8;function CM(i,e){return e<-1.55||Math.abs(i)>2.55&&e<.45}var dr=(i,e)=>Math.hypot(i.x-e.x,i.z-e.z);function PM(i){let o=[],a=new Ln,c=new w;i.updateWorldMatrix(!0,!0);function l(g){if(g.visible){g.isMesh&&!g.isInstancedMesh&&g.geometry&&(g.geometry.computeBoundingBox(),a.copy(g.geometry.boundingBox).applyMatrix4(g.matrixWorld),a.getSize(c),a.min.y<.13&&a.max.y>.1&&c.y>.065&&Math.min(c.x,c.z)>.018&&o.push({x0:a.min.x-.15,x1:a.max.x+.15,z0:a.min.z-.15,z1:a.max.z+.15}));for(let x of g.children)l(x)}}for(let g of i.children)l(g);let h=Array.from({length:1763},(g,x)=>{let p=x%41,d=Math.floor(x/41),E=-3.6+p*.18,v=-3.65+d*.18;return{id:x,col:p,row:d,x:E,z:v,free:CM(E,v)&&!o.some(M=>E>=M.x0&&E<=M.x1&&v>=M.z0&&v<=M.z1),neighbors:[]}});for(let g of h)if(g.free)for(let x=-1;x<=1;x++)for(let p=-1;p<=1;p++){if(!p&&!x)continue;let d=g.col+p,E=g.row+x;if(d<0||d>=41||E<0||E>=43)continue;let v=h[E*41+d];v.free&&(!p||!x||h[g.row*41+d].free&&h[E*41+g.col].free)&&g.neighbors.push(v.id)}let f=h.filter(g=>g.free&&g.neighbors.length);function m(g,x,p){return(p?f.filter(E=>dr(E,p)>=lo):f).reduce((E,v)=>!E||(v.x-g)**2+(v.z-x)**2<(E.x-g)**2+(E.z-x)**2?v:E,null)}function u(g,x,p){let d=new Int32Array(h.length).fill(-1),E=[g];d[g]=g;for(let T=0;T<E.length;T++){let C=h[E[T]],J=dr(C,p);for(let _ of C.neighbors){let b=dr(h[_],p);d[_]<0&&(b>=lo||b>J+.001)&&(d[_]=C.id,E.push(_))}}let v=h[g],M=E.filter(T=>{let C=h[T],J=Math.hypot(C.x-v.x,C.z-v.z);return J>.8&&J<2.8&&dr(C,p)>=lo});if(!M.length)return[];let L=M[Math.floor(x()*M.length)],A=[];for(;L!==g;)A.push(h[L]),L=d[L];return A.reverse()}return{closest:m,path:u}}function P0({room:i,floorSupport:e,viewerPosition:t,seed:n=Math.floor(Math.random()*4294967295)}){let s=new be;s.name="Tiny mice and rats darting through distant shadows",s.userData.ignoreAcid=!0;let r=n>>>0,o=()=>(r=r*1664525+1013904223>>>0,r/4294967296),a=PM(i),c=new Dt,l=new w,h=new w,f=new w,m=new w(0,1,0),u=document.createElement("canvas");u.width=u.height=128;let g=u.getContext("2d");g.fillStyle="#e8e3d9",g.fillRect(0,0,128,128);for(let ie=0;ie<1400;ie++){g.strokeStyle=ie%3?"#7d766f30":"#ffffff66";let j=o()*128,F=o()*128;g.beginPath(),g.moveTo(j,F),g.lineTo(j+(o()-.5)*2,F+3+o()*5),g.stroke()}let x=new Ft(u);x.colorSpace=ft;let p=new ze({map:x,roughness:.96}),d=new ze({roughness:.72}),E=new ze({roughness:.88});function v(ie,j,F,ae){let z=new gn(ie,j,F);return z.name=ae,z.instanceMatrix.setUsage(fi),z.frustumCulled=!1,z.castShadow=!0,z.receiveShadow=!0,z.raycast=()=>{},s.add(z),z}let M=[[-2.75,-2.75],[-3.1,-.55],[2.65,-2.85]],L=M.length,A=new Zt(1,14,9),T=v(A,p,L*6,"Furry rat and mouse bodies"),C=v(A,d,L*9,"Ears, eyes, noses and running paws"),J=v(new qt(1,1,1,7),E,L*9,"Long tapered swishing tails"),_=new Float32Array(L*4*2*3),b=new Nt;b.setAttribute("position",new In(_,3).setUsage(fi));let B=new eo(b,new or({color:12300704,transparent:!0,opacity:.45}));B.frustumCulled=!1,B.raycast=()=>{},s.add(B);let W=[5327684,5854283,4539454],X=M.map(([ie,j],F)=>{let ae=a.closest(ie,j,t)||a.closest(ie,j),z=F!==0;return{mouse:z,cell:ae.id,x:ae.x,z:ae.z,yaw:o()*Math.PI*2,size:.28*(z?.58+o()*.08:.92+o()*.12),color:new ht(W[F]),phase:o()*6.28,speed:3.6*(z?1.05+o()*.3:.88+o()*.25),route:[],pause:1.2+F*1.6+o()*2,gait:0,moving:!1,visibility:1}}),H=new ht(7889757),ee=new ht(6771019),Me=new ht(1118478),se=null;function me(ie,j,F,ae,z=l){let V=Math.cos(ie.yaw),Y=Math.sin(ie.yaw),pe=ie.size*ie.visibility;return z.set(ie.x+(j*V+ae*Y)*pe,e(ie.x,ie.z)+F*pe,ie.z+(-j*Y+ae*V)*pe)}function N(ie,j,F,ae,z,V,Y=0){me(F,...ae),c.position.copy(l),c.rotation.set(0,F.yaw,Y),c.scale.set(...z).multiplyScalar(F.size*F.visibility),c.updateMatrix(),ie.setMatrixAt(j,c.matrix),ie.setColorAt(j,V)}function Q(ie,j=!1,F=t){let ae=se===null?0:Math.min(.1,Math.max(0,ie-se));se=ie;let z=0;for(let[V,Y]of X.entries()){let ue=function(xe,Ie){let Ae=xe/9;return me(Y,Math.sin(Ae*3.5+ve*(Y.moving?8:1.6)+Y.phase)*.045*Ae,.026*(1-Ae)+.009,.126+re*Ae,Ie)};Y.moving=!1;let pe=dr(Y,F);if(Y.visibility=je.smoothstep(pe,AM,lo+.25),!j){let xe=Y.route[0];if(xe&&dr(xe,F)<lo&&dr(xe,F)<=pe&&(Y.route=[]),pe<lo+.35&&(Y.pause=0),Y.pause>0)Y.pause-=ae;else{Y.route.length||(Y.route=a.path(Y.cell,o,F));let Ie=Y.speed*ae;for(;Y.route.length&&Ie>0;){let Ae=Y.route[0],U=Ae.x-Y.x,S=Ae.z-Y.z,K=Math.hypot(U,S),ge=Math.min(K,Ie);if(Y.moving=!0,Y.gait+=ge*45,Ie-=ge,K>1e-4){Y.x+=U/K*ge,Y.z+=S/K*ge;let we=Math.atan2(-U,-S),_e=je.euclideanModulo(we-Y.yaw+Math.PI,Math.PI*2)-Math.PI;Y.yaw+=_e*(1-Math.exp(-ae*28))}ge>=K-1e-4&&(Y.x=Ae.x,Y.z=Ae.z,Y.cell=Ae.id,Y.route.shift(),Y.route.length||(Y.pause=3+o()*5))}!Y.route.length&&!Y.moving&&(Y.pause=1)}}let ve=j?0:ie,fe=Y.moving?Math.abs(Math.sin(Y.gait))*.005:Math.sin(ve*3+Y.phase)*.0015,$=Y.moving?0:Math.sin(ve*12+Y.phase)*.002,I=V*6,Ee=V*9;N(T,I,Y,[0,.077+fe,0],[.068,.063,.125],Y.color),N(T,I+1,Y,[0,.081+fe,.068],[.07,.069,.071],Y.color),N(T,I+2,Y,[0,.078+fe,-.115],[.046,.044,.066],Y.color),N(T,I+3,Y,[0,.057+fe+$,-.177],[.03,.024,.05],Y.color);for(let[xe,Ie]of[-1,1].entries()){let Ae=Y.mouse?1.23:.88;N(T,I+4+xe,Y,[Ie*.044,.126+fe,-.102],[.03*Ae,.038*Ae,.012],Y.color,Ie*.2),N(C,Ee+xe,Y,[Ie*.044,.128+fe,-.113],[.022*Ae,.028*Ae,.004],H,Ie*.2),N(C,Ee+2+xe,Y,[Ie*.032,.094+fe,-.149],[.007,.008,.007],Me)}N(C,Ee+4,Y,[0,.057+fe+$,-.221],[.011,.009,.009],ee);for(let xe=0;xe<4;xe++){let Ie=xe%2?-1:1,Ae=xe>1,U=Y.gait+(xe===0||xe===3?0:Math.PI),S=Y.moving?Math.max(0,Math.sin(U))*.023:0,K=Y.moving?Math.cos(U)*.027:0;N(C,Ee+5+xe,Y,[Ie*(Ae?.055:.043),.01+S,(Ae?.08:-.087)+K],[.018,.01,.031],H)}let re=Y.mouse?.23:.29;for(let xe=0;xe<9;xe++){ue(xe,l),ue(xe+1,h),f.copy(h).sub(l);let Ie=f.length();c.position.copy(l).add(h).multiplyScalar(.5),c.quaternion.setFromUnitVectors(m,f.normalize());let Ae=(.009*(1-xe/9)+.001)*Y.size*Y.visibility;c.scale.set(Ae,Ie,Ae),c.updateMatrix(),J.setMatrixAt(V*9+xe,c.matrix),J.setColorAt(V*9+xe,H)}for(let xe of[-1,1])for(let Ie=0;Ie<2;Ie++)me(Y,xe*.018,.061+fe,-.195),l.toArray(_,z),z+=3,me(Y,xe*.08,.062+fe+$,-.2+Ie*.027),l.toArray(_,z),z+=3}for(let V of[T,C,J])V.instanceMatrix.needsUpdate=!0,V.instanceColor.needsUpdate=!0;b.attributes.position.needsUpdate=!0}return Q(0),{group:s,update:Q}}function I0(){let i="drawer",e=!1,t=8;function n(s,r=!1){return r?"Detach your shackle before using the charger.":s==="drawer"?(e=!e,e?"Drawer opened. Take the MacBook charger and cable.":"Drawer closed."):s==="charger"?i!=="drawer"?"You already collected the charger.":e?(i="carrying","Charger collected. Plug it into the power strip behind you."):"Open the rear drawer first.":s==="strip"?i==="drawer"?"The power strip is on. Find the charger in the rear drawer.":i==="carrying"?(i="powered","Charger plugged in. Connect its cable to the MacBook."):i==="charging"?"The MacBook is charging.":"The charger has power. Connect the MacBook.":s==="laptop"?i==="powered"?(i="charging","Cable connected. The MacBook is charging."):i==="charging"?`MacBook battery: ${Math.floor(t)}%.`:i==="carrying"?"Plug the charger into the power strip first.":"Find the charger in the rear drawer.":""}return{use:n,update(s){i==="charging"&&(t=Math.min(100,t+Math.max(0,s)*.65))},reset(){i="drawer",e=!1,t=8},get phase(){return i},get drawerOpen(){return e},get battery(){return t},get nextAction(){return i==="drawer"?e?"charger":"drawer":i==="carrying"?"strip":i==="powered"?"laptop":null}}}function L0({filing:i,laptop:e,floorSupport:t,drawerMaterial:n}){let s=new be;s.name="Interactive MacBook charging kit";let r=new Hn(10794149,1.5,2.8,2);r.position.set(1.55,1.25,3.25),s.add(r);let o=I0(),a=new ze({color:14275780,roughness:.51}),c=new ze({color:15131609,roughness:.42}),l=new ze({color:2435105,roughness:.88}),h=new ze({color:9082261,roughness:.4,metalness:.7}),f=new _t({color:16757557}),m=new _t({color:9422728});function u(re,ue,xe=s){let Ie=new ut(re,ue);return Ie.castShadow=!0,Ie.receiveShadow=!0,xe.add(Ie),Ie}function g(re,ue,xe,Ie){let Ae=u(new bt(...re),xe,Ie);return Ae.position.set(...ue),Ae}function x(re,ue,xe,Ie){let[Ae,U,S]=re,K=Math.min(.012,U*.24),ge=new vt,we=Ae/2,_e=U/2;ge.moveTo(-we+K,-_e),ge.lineTo(we-K,-_e),ge.quadraticCurveTo(we,-_e,we,-_e+K),ge.lineTo(we,_e-K),ge.quadraticCurveTo(we,_e,we-K,_e),ge.lineTo(-we+K,_e),ge.quadraticCurveTo(-we,_e,-we,_e-K),ge.lineTo(-we,-_e+K),ge.quadraticCurveTo(-we,-_e,-we+K,-_e);let We=Math.min(.004,S/6),Oe=new sn(ge,{depth:S-2*We,bevelEnabled:!0,bevelSize:We,bevelThickness:We,bevelSegments:2,curveSegments:5});Oe.translate(0,0,-S/2+We);let qe=u(Oe,xe,Ie);return qe.position.set(...ue),qe}function p(re,ue,xe,Ie=s){return u(new cn(new Gt(re.map(Ae=>Ae.isVector3?Ae:new w(...Ae))),48,ue,7,!1),xe,Ie)}function d(re,ue,xe,Ie,Ae){let U=document.createElement("canvas");U.width=512,U.height=128;let S=U.getContext("2d");S.fillStyle="#c4c4b6",S.fillRect(0,0,512,128),S.fillStyle="#353b35",S.font="600 58px Arial",S.textAlign="center",S.fillText(re,256,85,480);let K=new Ft(U);K.colorSpace=ft;let ge=u(new Rt(ue,xe),new ze({map:K,roughness:.9}),Ae);return ge.position.set(...Ie),ge}let E=new be;E.name="Rear drawer containing the MacBook charger",E.userData.chargingAction="drawer",E.position.set(-.38,.56,0),i.add(E),g([.71,.32,.025],[0,0,.231],n,E),x([.22,.022,.028],[0,.04,.264],h,E),d("CHARGERS",.2,.047,[0,-.065,.246],E),g([.66,.018,.36],[0,-.145,.025],n,E);for(let re of[-.33,.33])g([.015,.27,.36],[re,-.01,.025],n,E);g([.66,.27,.015],[0,-.01,-.155],n,E);for(let re of[-.348,.348])g([.013,.027,.43],[re,-.08,.015],h,E);let v=new be;v.name="MacBook USB-C power adapter",v.userData.chargingAction="charger",E.add(v),v.position.set(.105,-.097,.045),x([.145,.075,.145],[0,0,0],c,v),g([.147,.001,.147],[0,-.009,0],a,v);for(let re of[-.016,.016])g([.005,.025,.015],[re,-.049,0],h,v);g([.003,.015,.027],[.074,.006,0],l,v),d("96W USB-C",.086,.022,[0,.009,.075],v).material.color.setHex(10066834);let L=new be;L.name="Coiled charger cable",L.userData.chargingAction="charger",E.add(L),L.position.set(-.145,-.127,.06);let A=[];for(let re=0;re<=120;re++){let ue=re/120*Math.PI*6;A.push([Math.cos(ue)*(.086+re*12e-5),re*45e-6,Math.sin(ue)*.06])}p(A,.0045,c,L),x([.041,.014,.019],[.12,.01,0],c,L),g([.014,.009,.014],[.145,.01,0],h,L);let T=new be;T.name="Powered floor power strip",T.userData.chargingAction="strip",T.position.set(1.94,t(1.94,3.72)+.032,3.72),T.rotation.y=-.16,s.add(T),x([.51,.055,.12],[0,0,0],a,T);for(let re of[-.16,-.055,.05,.155]){g([.079,.001,.082],[re,.029,0],c,T);for(let xe of[-.02,.02])g([.021,.002,.006],[re-.009,.031,xe],l,T);let ue=u(new wi(.007,12),l,T);ue.rotation.x=-Math.PI/2,ue.position.set(re+.022,.031,0)}let C=x([.035,.011,.057],[.224,.032,0],new ze({color:10303786,roughness:.4}),T);C.rotation.z=.07,g([.008,.002,.02],[.224,.039,0],m,T);let J=x([.12,.16,.018],[2.15,.27,4.424],a,s);for(let re of[.235,.3]){g([.065,.042,.006],[2.15,re,4.411],c,s);for(let ue of[2.136,2.164])g([.005,.016,.003],[ue,re+.004,4.406],l,s)}x([.054,.043,.055],[2.15,.3,4.383],l,s);let _=T.localToWorld(new w(-.265,0,0));p([_,[1.57,.018,3.8],[1.61,.015,4.04],[1.98,.015,4.25],[2.16,.07,4.34],[2.15,.3,4.35]],.007,l).raycast=()=>{};let b=new be;b.name="MacBook charging port",b.userData.chargingAction="laptop",b.position.set(-.453,.002,-.18),e.object.add(b),g([.005,.01,.035],[0,0,0],l,b);let B=u(new bt(.045,.048,.085),new _t({transparent:!0,opacity:0,colorWrite:!1,depthWrite:!1}),b);B.castShadow=!1;let W=new be;W.name="Connected MacBook charging cable",W.visible=!1,s.add(W),x([.051,.018,.032],[0,0,0],c,W),g([.013,.01,.026],[.03,0,0],h,W);let X=g([.01,.003,.007],[.005,.011,0],f,W);X.castShadow=!1;let H=document.createElement("canvas");H.width=512,H.height=96;let ee=H.getContext("2d"),Me=new Ft(H);Me.colorSpace=ft;let se=u(new Rt(.245,.046),new _t({map:Me}),e.screen);se.name="MacBook battery charge readout",se.position.set(.282,.235,.001),se.visible=!1,se.castShadow=!1;let me=0,N=-1/0,Q=-1/0,ie=null,j=-1,F="",ae=null,z=new w,V=new w,Y=new w;function pe(re,ue){return new w(re,t(re,ue)+.008,ue)}function ve(re){let ue=ie?.geometry;v.getWorldPosition(V),V.x+=.08,V.y+=.005,W.getWorldPosition(z);let xe=[V.clone(),pe(1.86,3.5),pe(1.53,3.27),pe(1.33,2.99),pe(.83,2.82),pe(z.x-.13,z.z+.12),z.clone().add(new w(-.031,0,0).applyAxisAngle(new w(0,1,0),e.object.rotation.y))],Ie=new cn(new Gt(xe),80,.0045,7,!1),Ae=Ie.attributes.position;for(let U=0;U<Ae.count;U++)Ae.setY(U,Math.max(Ae.getY(U),t(Ae.getX(U),Ae.getZ(U))+.002));Ie.computeVertexNormals(),ie?(ie.geometry=Ie,ue.dispose()):(ie=u(Ie,c),ie.name="Charging cable resting across the floor",ie.raycast=()=>{}),j=re}function fe(re,ue,xe=!1){let Ie=o.phase,Ae=o.use(re,xe);return xe||(Ie==="drawer"&&o.phase==="carrying"&&(v.visible=!1,L.visible=!1),Ie==="carrying"&&o.phase==="powered"&&(T.add(v),v.visible=!0,v.rotation.set(0,0,0),v.position.set(-.16,.075,0),N=ue,s.add(L),L.visible=!0,L.rotation.set(0,.4,0),L.position.set(1.7,t(1.7,3.42)+.008,3.42)),Ie==="powered"&&o.phase==="charging"&&(Q=ue,W.visible=!0,L.visible=!1)),Ae}function $(re,ue=!1){let xe=ae===null?0:Math.max(0,Math.min(.05,re-ae));ae=re,o.update(xe);let Ie=o.drawerOpen?1:0;if(me=ue?Ie:je.damp(me,Ie,8,xe),E.position.z=me*.43,(o.phase==="powered"||o.phase==="charging")&&(v.position.y=.075+(ue?0:.19*(1-je.smootherstep(re-N,0,.65)))),o.phase==="charging"){let K=ue?1:je.smootherstep(re-Q,0,.65);b.getWorldPosition(Y),W.quaternion.copy(e.object.getWorldQuaternion(new yt)),z.set(-.04-(1-K)*.12,(1-K)*.045,0).applyQuaternion(W.quaternion),W.position.copy(Y).add(z),(Math.abs(K-j)>.02||K===1&&j!==1)&&ve(K),X.material=o.battery>=100?m:f}se.visible=e.openProgress>.35;let Ae=Math.floor(o.battery),U=o.phase==="charging",S=`${U?"\u26A1 ":""}${Ae}%`;S!==F&&(F=S,ee.fillStyle="#222e36",ee.fillRect(0,0,512,96),ee.fillStyle=U?"#93dba3":"#e3b36d",ee.font="500 44px Arial",ee.textAlign="right",ee.fillText(S,385,63),ee.strokeStyle=U?"#93dba3":"#e3b36d",ee.lineWidth=5,ee.strokeRect(405,25,72,44),ee.fillRect(480,37,7,19),ee.fillRect(413,33,56*Ae/100,28),Me.needsUpdate=!0)}function I(){o.reset(),me=0,E.position.z=0,E.add(v,L),v.visible=L.visible=!0,v.position.set(.105,-.097,.045),v.rotation.set(0,0,0),L.position.set(-.145,-.127,.06),L.rotation.set(0,0,0),W.visible=!1,ie&&(s.remove(ie),ie.geometry.dispose(),ie=null),j=-1,F="",ae=null}function Ee(re){return re==="drawer"?o.drawerOpen?"Close charger drawer":"Open charger drawer":re==="charger"?"Take MacBook charger + cable":re==="strip"?o.phase==="carrying"?"Plug charger into power strip":"Powered power strip":re==="laptop"?o.phase==="powered"?"Connect charger to MacBook":`MacBook battery \xB7 ${Math.floor(o.battery)}%`:o.phase==="carrying"?"Charger collected \xB7 Plug into the power strip [F]":o.phase==="powered"?"Charger powered \xB7 Connect the MacBook [F]":o.phase==="charging"?`${o.battery>=100?"Fully charged":"Charging"} \xB7 ${Math.floor(o.battery)}%`:""}return $(0),{group:s,use:fe,update:$,reset:I,hint:Ee,get phase(){return o.phase},get nextAction(){return o.nextAction},get drawerReady(){return me>.85},get battery(){return o.battery}}}function D0(){let i="sealed",e=-1/0;return{get phase(){return i},get hasKey(){return i==="collected"},get startedAt(){return e},pour(t){return i!=="sealed"?!1:(i="pouring",e=t,!0)},update(t){i==="pouring"&&t-e>=3.4&&(i="revealed")},collect(){return i!=="revealed"?!1:(i="collected",!0)},reset(){i="sealed",e=-1/0}}}function U0({bottle:i,contents:e,cap:t,floorSupport:n}){let s=new be;s.name="Ketchup spill and hidden shackle key";let r=D0(),o=i.position.clone(),a=i.quaternion.clone();i.userData.keyAction="pour";let c=new w(0,1,0).applyQuaternion(a),l=new yt().setFromUnitVectors(c,new w(-.25,-.94,.23).normalize()).multiply(a),h=o.clone().add(new w(.72,.32,.38)),f=h.clone().add(new w(-.045,0,.045));f.y=n(f.x,f.z)+.009;let m=t.position.clone(),u=t.quaternion.clone();t.updateWorldMatrix(!0,!1);let g=t.getWorldPosition(new w),x=t.getWorldQuaternion(new yt),p=g.clone().add(new w(-.13,0,.1));p.y=n(p.x,p.z)+.016;let d=new ze({color:13674833,metalness:.72,roughness:.27,emissive:7161877,emissiveIntensity:.18}),E=new be;E.name="Brass shackle key",E.userData.keyAction="collect",s.add(E),E.visible=!1;function v(Q,ie,j){let F=new ut(Q,ie);return F.castShadow=!0,F.receiveShadow=!0,j.add(F),F}let M=v(new $t(.025,.0055,8,24),d,E);M.rotation.x=Math.PI/2,M.position.x=-.042;let L=v(new bt(.078,.009,.01),d,E);L.position.x=.013;for(let Q of[.027,.047])v(new bt(.01,.009,.022),d,E).position.set(Q,0,.01);let A=v(new bt(.15,.04,.1),new _t({transparent:!0,opacity:0,depthWrite:!1,colorWrite:!1}),E);A.castShadow=!1,A.receiveShadow=!1;let T=new Wt({color:12001548,roughness:.28,clearcoat:1,clearcoatRoughness:.18}),C=new be;C.position.copy(f),C.position.y-=.006,s.add(C),C.visible=!1;let J=new vt;for(let Q=0;Q<=64;Q++){let ie=Q/64*Math.PI*2,j=1+.1*Math.sin(ie*5)+.07*Math.cos(ie*9),F=Math.cos(ie)*.2*j,ae=Math.sin(ie)*.13*j;Q===0?J.moveTo(F,ae):J.lineTo(F,ae)}let _=v(new di(J,32),T,C);_.rotation.x=-Math.PI/2,_.castShadow=!1;let b=[];for(let Q=0;Q<7;Q++){let ie=Q*2.4,j=.05+Q*.016,F=v(new Zt(1,12,8),T,C);F.position.set(Math.cos(ie)*j,.003,Math.sin(ie)*j*.6),F.scale.set(.015+Q%3*.005,.004,.012),b.push(F)}let B=v(new qt(1,1,1,10),T,s);B.visible=!1,B.castShadow=!1;let W=new w,X=new w,H=new w,ee=new w(0,1,0),Me=Q=>{let ie=je.clamp(Q,0,1);return ie*ie*(3-2*ie)},se=!1;function me(){r.reset(),i.position.copy(o),i.quaternion.copy(a),e.scale.y=1,i.children[0].add(t),t.position.copy(m),t.quaternion.copy(u),t.scale.setScalar(1),se=!1,E.visible=!1,C.visible=!1,B.visible=!1}function N(Q,ie){if(r.update(Q),r.phase==="sealed")return;let j=Q-r.startedAt,F=Me(j/.8)*(1-Me((j-3.35)/.8));i.position.copy(o).lerp(h,F),i.quaternion.copy(a).slerp(l,F),se||(s.attach(t),se=!0),t.position.copy(g).lerp(p,Me(j/.55)),t.position.y+=Math.sin(Math.min(1,j/.55)*Math.PI)*.08,t.quaternion.copy(x).multiply(new yt().setFromAxisAngle(new w(0,0,1),Me(j/.55)*2));let ae=Me((j-.75)/2.5);if(e.scale.y=Math.max(.025,1-ae),C.visible=j>.75,C.scale.setScalar(Math.max(.01,ae)),i.updateWorldMatrix(!0,!0),i.children[0].localToWorld(W.set(0,.469,0)),B.visible=j>.8&&j<3.3,B.visible){X.copy(W).add(f).multiplyScalar(.5),H.subVectors(W,f),B.position.copy(X),B.quaternion.setFromUnitVectors(ee,H.clone().normalize());let z=ie?1:1+Math.sin(j*21)*.12;B.scale.set(.012*z,H.length(),.012*z)}if(E.visible=j>=2.5&&!r.hasKey,E.visible){let z=Me((j-2.5)/.9);E.position.copy(W).lerp(f,z),E.position.y+=Math.sin(z*Math.PI)*.065,E.rotation.set((1-z)*2,z*.5,(1-z)*3),d.emissiveIntensity=ie?.22:.22+.1*Math.sin(Q*3)}}return{group:s,bottle:i,key:E,update:N,reset:me,get hasKey(){return r.hasKey},get phase(){return r.phase},pour:Q=>r.pour(Q),collect:()=>r.collect(),hint(Q){return Q==="collect"&&!r.hasKey?r.phase==="revealed"?"Pick up the shackle key":"A key is sliding out\u2026":Q==="pour"?r.phase==="sealed"?"Pour out the ketchup":r.phase==="pouring"?"Pouring ketchup\u2026":r.hasKey?"The bottle is empty":"Pick up the key in the ketchup":""}}}var ll=(i,e,t)=>Math.max(e,Math.min(t,i));function N0({speed:i=.38,maxPoints:e=180}={}){let t=[],n=null,s=!1;function r(a,c,l,h=!1){return h||n!==null||t.some(f=>f.index===a)?!1:(t.push({index:a,openedAt:l,progress:0,origin:{...c},head:{x:c.x,z:c.z},points:[]}),!0)}function o(a,c,l){if(s)return!1;for(let h of t){if(h.progress=ll((a-h.openedAt)/1.35,0,1),a-h.openedAt<.48)continue;h.points.length||h.points.push({...h.head,born:a,radius:.13});let f=l.x-h.head.x,m=l.z-h.head.z,u=Math.hypot(f,m),g=Math.min(u,i*ll(c,0,.08));u>.001&&(h.head.x+=f/u*g,h.head.z+=m/u*g);let x=h.points.at(-1);Math.hypot(x.x-h.head.x,x.z-h.head.z)>.075&&(h.points.push({...h.head,born:a,radius:.13}),h.points.length>e&&h.points.splice(1,1));for(let p of h.points)p.radius=.13+.13*ll((a-p.born)/3,0,1),n===null&&Math.hypot(l.x-p.x,l.z-p.z)<p.radius+.15&&(n=a)}return n!==null&&a-n>=.85?(s=!0,!0):!1}return{open:r,update:o,leaks:t,reset(){t.length=0,n=null,s=!1},get dying(){return n!==null},get finished(){return s},blackout(a){return n===null?0:ll((a-n)/.7,0,1)}}}function H0({valves:i,floorSupport:e}){let t=new be;t.name="Corrosive green liquid, bubbles and contact smoke",t.userData.ignoreAcid=!0,t.visible=!1;let n=N0(),s=new Dt,r=new w,o=new yt,a={value:0},c=new Map,l=new Map,h=[],f=-1/0,m=document.createElement("canvas");m.width=m.height=512;let u=m.getContext("2d");u.fillStyle="#000",u.fillRect(0,0,512,512);let g=new Ft(m);g.generateMipmaps=!1,g.minFilter=En,g.flipY=!1;let x={value:g};function p(N){if(l.has(N))return l.get(N);let Q=N.clone(),ie=N.onBeforeCompile,j=N.customProgramCacheKey();return Q.onBeforeCompile=F=>{ie.call(N,F),F.uniforms.acidBurn=x,F.vertexShader=`varying vec3 vAcidWorld;
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
    if(burned>.48&&pitting<(burned-.48)*.55)discard;`)},Q.customProgramCacheKey=()=>j+"-acid-corrosion-v1",l.set(N,Q),Q}function d(N){let Q=new Ln;function ie(j){if(!j.userData.ignoreAcid){if(j.isMesh&&j.material&&(Q.setFromObject(j),Q.min.y<.4&&Q.max.y>-.01)){Q.max.y>.02&&Q.max.y<.65&&h.push(Q.clone());let F=ae=>ae.isMeshStandardMaterial||ae.isMeshBasicMaterial||ae.isMeshToonMaterial?p(ae):ae;j.material=Array.isArray(j.material)?j.material.map(F):F(j.material)}for(let F of j.children)ie(F)}}for(let j of N)j.updateWorldMatrix(!0,!0),ie(j)}let E=new Wt({color:6327062,roughness:.16,metalness:.06,clearcoat:1,clearcoatRoughness:.13,emissive:4353292,emissiveIntensity:.53,side:Ut});E.onBeforeCompile=N=>{N.uniforms.acidTime=a,N.vertexShader=`varying vec3 vWetWorld;
`+N.vertexShader,N.vertexShader=N.vertexShader.replace("#include <worldpos_vertex>",`#include <worldpos_vertex>
   vec4 wetVertex=vec4(transformed,1.0);
   #ifdef USE_INSTANCING
    wetVertex=instanceMatrix*wetVertex;
   #endif
   vWetWorld=(modelMatrix*wetVertex).xyz;`),N.fragmentShader=`uniform float acidTime;varying vec3 vWetWorld;
`+N.fragmentShader,N.fragmentShader=N.fragmentShader.replace("#include <color_fragment>",`#include <color_fragment>
   float streak=sin(vWetWorld.x*28.0+acidTime*1.9)*sin(vWetWorld.z*33.0-acidTime*2.8);
   float ripples=sin(length(vWetWorld.xz*17.0)+acidTime*3.2);
   diffuseColor.rgb*=.83+.18*streak+.09*ripples;`)};let v=new vt;for(let N=0;N<=48;N++){let Q=N/48*Math.PI*2,ie=1+.1*Math.sin(Q*5)+.045*Math.cos(Q*9),j=Math.cos(Q)*ie,F=Math.sin(Q)*ie;N?v.lineTo(j,F):v.moveTo(j,F)}v.closePath();let M=new di(v,1);M.rotateX(-Math.PI/2);let L=new gn(M,E,543);L.instanceMatrix.setUsage(fi),L.frustumCulled=!1,L.count=0,L.name="Advancing connected acid puddles",t.add(L);let A=new gn(M,new _t({color:1448712}),543);A.instanceMatrix.setUsage(fi),A.frustumCulled=!1,A.count=0,A.name="Etched and blackened floor",t.add(A);let T=new gn(new Zt(1,10,7),new Wt({color:10406211,roughness:.22,clearcoat:1,emissive:4878108,emissiveIntensity:.35}),108);T.instanceMatrix.setUsage(fi),T.frustumCulled=!1,T.count=0,t.add(T);let C=document.createElement("canvas");C.width=C.height=128;let J=C.getContext("2d");for(let N=0;N<7;N++){let Q=64+Math.sin(N*2.4)*23,ie=64+Math.cos(N*3.1)*21,j=J.createRadialGradient(Q,ie,0,Q,ie,36);j.addColorStop(0,"rgba(220,231,199,.3)"),j.addColorStop(1,"rgba(220,231,199,0)"),J.fillStyle=j,J.fillRect(0,0,128,128)}let _=new Ft(C),b=new Rt(1,1),B=new jr(new Float32Array(84),1);b.setAttribute("smokeAlpha",B);let W=new _t({map:_,transparent:!0,opacity:.62,depthWrite:!1,color:11782042,side:Ut});W.onBeforeCompile=N=>{N.vertexShader=`attribute float smokeAlpha;varying float vSmokeAlpha;
`+N.vertexShader,N.vertexShader=N.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
vSmokeAlpha=smokeAlpha;`),N.fragmentShader=`varying float vSmokeAlpha;
`+N.fragmentShader,N.fragmentShader=N.fragmentShader.replace("#include <color_fragment>",`#include <color_fragment>
diffuseColor.a*=vSmokeAlpha;`)};let X=new gn(b,W,84);X.name="Smoke rising from corroding surfaces",X.instanceMatrix.setUsage(fi),X.frustumCulled=!1,X.count=0,X.renderOrder=12,t.add(X),t.traverse(N=>{N.isMesh&&(N.raycast=()=>{})});function H(N,Q){let ie=e(N,Q);for(let j of h)N>=j.min.x&&N<=j.max.x&&Q>=j.min.z&&Q<=j.max.z&&(ie=Math.max(ie,Math.min(.27,j.max.y)));return ie}function ee(N,Q,ie=!1){let j=i[N];if(!j||ie)return!1;j.outlet.getWorldPosition(r);let F=r.clone();if(F.y=e(F.x,F.z)+.009,!n.open(N,F,Q,ie))return!1;let ae=new Gt([r.clone(),r.clone().add(new w(0,-.04,.025)),F.clone()]),z=new ut(new cn(ae,16,.018,8,!1),E);return z.name=`Tank ${N+1} acid escaping its drain`,z.raycast=()=>{},z.visible=!1,t.add(z),c.set(N,z),t.visible=!0,!0}function Me(N){if(!(N-f<.1)){f=N;for(let Q of n.leaks)for(let ie of Q.points){let j=(ie.x+4.1)/8.2*512,F=(ie.z+4.2)/8.8*512,ae=ie.radius*512/8.2*1.18,z=u.createRadialGradient(j,F,ae*.45,j,F,ae);z.addColorStop(0,"rgba(255,255,255,.13)"),z.addColorStop(1,"rgba(255,255,255,0)"),u.fillStyle=z,u.fillRect(j-ae,F-ae,ae*2,ae*2)}g.needsUpdate=!0}}function se(N,Q,ie,j,F=!1){if(!n.leaks.length)return!1;let ae=n.update(N,Q,ie),z=F?0:N;a.value=z,j.getWorldQuaternion(o);let V=0,Y=0,pe=0;for(let ve of n.leaks){i[ve.index].setOpen(F?1:je.smootherstep(ve.progress,0,1)),c.get(ve.index).visible=ve.points.length>0;for(let fe of ve.points)s.position.set(fe.x,e(fe.x,fe.z)+.009,fe.z),s.rotation.set(0,ve.index*.7,0),s.scale.set(fe.radius,1,fe.radius*.87),s.updateMatrix(),L.setMatrixAt(V,s.matrix),s.position.y-=.004,s.scale.x*=1.2,s.scale.z*=1.2,s.updateMatrix(),A.setMatrixAt(V++,s.matrix);if(ve.points.length){for(let fe=0;fe<36;fe++){let $=ve.points[(fe*17+ve.index*5)%ve.points.length],I=(z*.75+fe*.618)%1,Ee=fe*2.399,re=$.radius*.7;s.position.set($.x+Math.cos(Ee)*re,e($.x,$.z)+.013+Math.sin(I*Math.PI)*.026,$.z+Math.sin(Ee)*re);let ue=(.009+fe%4*.004)*Math.sin(I*Math.PI);s.scale.set(ue,ue*.65,ue),s.quaternion.identity(),s.updateMatrix(),T.setMatrixAt(Y++,s.matrix)}for(let fe=0;fe<28;fe++){let $=fe*7%Math.min(35,ve.points.length),I=ve.points[Math.max(0,ve.points.length-1-$)],Ee=(z*.46+fe*.381)%1,re=fe*2.4+ve.index,ue=I.radius*(.45+Ee*.5),xe=.11+Ee*.34;s.position.set(I.x+Math.cos(re)*ue+Math.sin(z+fe)*Ee*.06,H(I.x,I.z)+.025+Ee*.48,I.z+Math.sin(re)*ue),s.quaternion.copy(o),s.rotateZ(fe*.9+Ee*.4),s.scale.set(xe,xe*1.5,1),s.updateMatrix(),X.setMatrixAt(pe,s.matrix),B.setX(pe++,Math.sin(Ee*Math.PI)*.8)}}}L.count=A.count=V,T.count=Y,X.count=pe;for(let ve of[L,A,T,X])ve.instanceMatrix.needsUpdate=!0;return B.needsUpdate=!0,Me(N),ae}function me(){n.reset(),t.visible=!1,L.count=A.count=T.count=X.count=0;for(let N of c.values())t.remove(N),N.geometry.dispose();c.clear();for(let N of i)N.setOpen(0);u.clearRect(0,0,512,512),u.fillStyle="#000",u.fillRect(0,0,512,512),g.needsUpdate=!0,f=-1/0}return{group:t,open:ee,update:se,reset:me,bindTargets:d,blackout:N=>n.blackout(N),get dying(){return n.dying},get active(){return n.leaks.length>0}}}function F0(i,e){let t=new be;t.name="Abandoned technology office";let n=[],s=[],r=y=>(n.push(y),y),o=87021,a=()=>(o=o*1664525+1013904223>>>0,o/4294967296),c=(y,R)=>y+(R-y)*a();function l(y=512){let R=document.createElement("canvas");return R.width=R.height=y,[R,R.getContext("2d")]}function h(y){let R=new Ft(y);return R.colorSpace=ft,R.anisotropy=Math.min(8,i.capabilities.getMaxAnisotropy()),R}function f(y,R,D,O,k,q){let he=y.createRadialGradient(R,D,0,R,D,O);he.addColorStop(0,`rgba(${k},${q})`),he.addColorStop(1,`rgba(${k},0)`),y.fillStyle=he,y.fillRect(R-O,D-O,O*2,O*2)}function m(y,R,D,O,k){for(let q=0;q<D;q++)y.fillStyle=`rgba(${O},${a()*k})`,y.fillRect(a()*R,a()*R,c(.4,2.2),c(.4,2))}function u(y,R="paint"){let[D,O]=l();O.fillStyle=y,O.fillRect(0,0,512,512);for(let k=0;k<210;k++)f(O,a()*512,a()*512,c(4,70),k%3?"27,33,23":"110,83,48",c(.025,.15));if(m(O,512,12e3,"18,25,18",.24),m(O,512,4e3,"200,192,159",.18),R==="wood")for(let k=0;k<550;k++){O.strokeStyle=`rgba(36,29,17,${c(.02,.16)})`,O.lineWidth=c(.4,2);let q=a()*512;O.beginPath(),O.moveTo(0,q),O.bezierCurveTo(170,q+c(-12,12),340,q+c(-12,12),512,q),O.stroke()}if(R==="metal")for(let k=0;k<250;k++)f(O,a()*512,a()*512,c(2,18),"112,56,24",c(.1,.5));for(let k=0;k<80;k++){O.strokeStyle=`rgba(197,190,160,${c(.08,.3)})`,O.lineWidth=c(.3,1.3);let q=a()*512,he=a()*512;O.beginPath(),O.moveTo(q,he),O.lineTo(q+c(3,50),he+c(-2,4)),O.stroke()}return h(D)}let g=u("#8b8c77"),x=u("#b2b09a"),p=u("#817157","wood"),d=u("#4e5550","metal"),E=u("#44534b"),v=u("#66695a"),M=(y,R=.88,D=null,O=0)=>new ze({color:y,roughness:R,map:D,bumpMap:D,bumpScale:D?.008:0,metalness:O}),L=M(16777215,.98,g),A=M(16777215,.86,p),T=M(16777215,.8,x),C=M(16777215,.73,d,.42),J=M(16777215,.95,E),_=M(1514521,.86),b=M(1053970,.95),B=M(16777215,.98,v),W=M(8555654,.4,null,.8);function X(y,R,D=t){let O=new ut(y,R);return O.castShadow=!0,O.receiveShadow=!0,D.add(O),O}function H(y,R,D=C,O=t){let k=X(new bt(...y),D,O);return k.position.set(...R),k}let ee=new Zt(1,20,12);function Me(y,R,D,O=t){let k=X(ee,D,O);return k.scale.set(...y),k.position.set(...R),k}function se(y,R,D,O=C,k=t,q=12){let he=X(new qt(y,y,R,q),O,k);return he.position.set(...D),he}function me(y,R,D=.015,O=C,k=t){let q=new w(...y),he=new w(...R),Ge=he.clone().sub(q),tt=se(D,Ge.length(),q.clone().add(he).multiplyScalar(.5).toArray(),O,k);return tt.quaternion.setFromUnitVectors(new w(0,1,0),Ge.normalize()),tt}function N(y,R=.008,D=_,O=t){let k=new Gt(y.map(he=>new w(...he))),q=X(new cn(k,Math.max(20,y.length*8),R,6,!1),D,O);return O===t&&y.some(he=>he[1]<.06)&&s.push(q),q}function Q(y,R,D,O=.025){O=Math.min(O,y*.45,R*.45);let k=new vt,q=y/2,he=R/2;k.moveTo(-q+O,-he),k.lineTo(q-O,-he),k.quadraticCurveTo(q,-he,q,-he+O),k.lineTo(q,he-O),k.quadraticCurveTo(q,he,q-O,he),k.lineTo(-q+O,he),k.quadraticCurveTo(-q,he,-q,he-O),k.lineTo(-q,-he+O),k.quadraticCurveTo(-q,-he,-q+O,-he);let Ge=Math.min(.012,y/6,R/6,D/6),tt=new sn(k,{depth:D-Ge*2,bevelEnabled:!0,bevelSize:Ge,bevelThickness:Ge,bevelSegments:2,steps:1,curveSegments:4});return tt.translate(0,0,-D/2+Ge),tt}function ie(y,R,D,O=t){let k=X(Q(...y),D,O);return k.position.set(...R),k}function j(y,R,D,O=!1){let[k,q]=l(1024);for(let Ge=0;Ge<290;Ge++)f(q,a()*1024,O?a()*1024:a()<.6?c(600,1060):a()*1024,c(12,140),"24,30,19",c(.03,.26));if(!O){let Ge=q.createLinearGradient(0,0,0,1024);Ge.addColorStop(0,"rgba(29,35,24,.4)"),Ge.addColorStop(.3,"rgba(29,35,24,0)"),Ge.addColorStop(.75,"rgba(29,35,24,.07)"),Ge.addColorStop(1,"rgba(23,30,21,.72)"),q.fillStyle=Ge,q.fillRect(0,0,1024,1024);for(let tt=0;tt<80;tt++){let Ct=a()*1024,tn=a()*220;q.strokeStyle=`rgba(62,51,30,${c(.03,.26)})`,q.lineWidth=c(1,6),q.beginPath(),q.moveTo(Ct,tn),q.lineTo(Ct+c(-8,8),tn+c(80,750)),q.stroke()}}m(q,1024,17e3,"16,25,17",.28);let he=X(new Rt(y,R),new ze({map:h(k),transparent:!0,depthWrite:!1,roughness:1}),D);return he.castShadow=!1,he}H([7.8,.15,8.6],[0,-.075,.2],B);let F=j(7.8,8.6,t,!0);F.rotation.x=-Math.PI/2,F.position.set(0,.003,.2);let ae=H([7.8,3.35,.16],[0,1.675,-4.08],L),z=H([.16,3.35,8.6],[-3.98,1.675,.2],M(8556677,.98,g));H([.16,1.1,8.6],[3.98,.55,.2],L),H([.16,.65,8.6],[3.98,3.025,.2],L),H([.16,1.6,1.2],[3.98,1.9,-3.4],L),H([.16,1.6,4.8],[3.98,1.9,2.1],L),j(7.8,3.35,t).position.set(0,1.675,-3.99);let Y=j(8.6,3.35,t);Y.rotation.y=Math.PI/2,Y.position.set(-3.89,1.675,.2);for(let y=0;y<9;y++)H([.012,2.2,.014],[-3.85+y*.96,1.66,-3.977],C);H([7.8,.045,.035],[0,.58,-3.96],C),H([7.8,.045,.035],[0,2.76,-3.96],C);for(let y of[-3.86,3.86])H([.045,.13,8.6],[y,.065,.2],_);H([7.8,.13,.04],[0,.065,-3.95],_);for(let y=0;y<26;y++){let R=new vt,D=c(-3.65,3.65),O=c(.24,3.1),k=c(.05,.22),q=c(.05,.26);for(let Ge=0;Ge<9;Ge++){let tt=Ge/9*Math.PI*2,Ct=c(.6,1),tn=D+Math.cos(tt)*k*Ct,kt=O+Math.sin(tt)*q*Ct;Ge?R.lineTo(tn,kt):R.moveTo(tn,kt)}R.closePath();let he=X(new di(R),M(y%3?5199175:11644305,.99));he.position.z=-3.972,he.castShadow=!1}let pe=H([7.8,.1,8.6],[0,3.36,.2],_);for(let y=-3.6;y<3.9;y+=1.2)H([.028,.032,8.6],[y,3.12,.2],C);for(let y=-3.9;y<4.5;y+=1.2)H([7.8,.032,.028],[0,3.12,y],C);let ve=M(10132616,.98,g);for(let y=-3;y<3.9;y+=1.2)for(let R=-3.3;R<4.5;R+=1.2){if(a()<.25)continue;let D=H([1.15,.035,1.15],[y,3.145,R],ve);a()<.12&&(D.rotation.z=c(-.13,.13),D.position.y-=.06)}for(let y=0;y<5;y++)N([[-2+y*.45,3.3,-1.6],[-1.9+y*.45,2.8,-1.5],[-1.7+y*.4,2.53,-1.6],[-1.3+y*.35,3.29,-1.8]],.009,_);let fe=new be;fe.position.set(3.88,1.9,-1.5),fe.rotation.y=-Math.PI/2,t.add(fe);let[$,I]=l();I.fillStyle="#778c88",I.fillRect(0,0,512,512);for(let y=0;y<15;y++){let R=y*43,D=c(25,60),O=c(70,290);I.fillStyle=y%2?"#4b5d58":"#526560",I.fillRect(R,512-O,D,O);for(let k=0;k<5;k++)I.fillStyle="#879186",I.fillRect(R+8,512-O+18+k*34,4,10)}let Ee=X(new Rt(2.8,1.6),new _t({map:h($),color:3622209}),fe);Ee.position.z=-.13,Ee.castShadow=!1;for(let y of[-1.43,0,1.43])H([.055,1.7,.09],[y,0,.025],C,fe);for(let y of[-.83,.83])H([2.92,.055,.09],[0,y,.025],C,fe);let re=M(10336426,.25,null,.25);re.transparent=!0,re.opacity=.18,re.side=Ut;for(let y of[-.72,.72]){let R=H([1.37,1.55,.008],[y,0,.04],re,fe);R.castShadow=!1}for(let y=0;y<17;y++){if([5,9,14].includes(y))continue;let R=H([2.77,.047,.015],[0,.73-y*.086,.11],M(8160114,.82,x),fe);R.rotation.x=.35,(y===7||y===12)&&(R.rotation.z=y===7?.035:-.05,R.rotation.x=.9)}for(let y of[-.86,.86])N([[y,.8,.15],[y,.12,.16],[y,-.77,.15]],.005,_,fe);N([[1.35,.83,.12],[1.4,-.7,.14],[1.32,-1.1,.18]],.006,_,fe);let ue=d0(i);o=577513849;let xe=Q(.77,.45,.035,.012),Ie=M(7042164,.38,null,.7);function Ae(y,R,D=0,O="cracked",k=1){let q=new be;q.position.set(...R),q.rotation.y=D,q.scale.setScalar(k),y.add(q),q.name="Damaged widescreen monitor",X(xe,_,q).position.set(0,.375,0),ie([.31,.018,.2],[0,.013,-.025],Ie,q),H([.055,.24,.025],[0,.14,-.035],Ie,q),ue.add(q,O),H([.18,.16,.032],[0,.36,-.03],Ie,q),Me([.004,.004,.003],[.35,.163,.022],O==="live"?new _t({color:9223008}):_,q);for(let tt=0;tt<11;tt++)H([.015,.002,.003],[-.25+tt*.05,.585,-.02],C,q);let Ge=N([[.1,.23,-.05],[.15,.04,-.08],[.23,-.31,-.18]],.006,_,q);return Ge.name="Monitor power cable",Ge.userData.ignoreFloorContact=!0,q}let U=new bt(.023,.008,.023);function S(y,R,D=0){let O=new be;O.position.set(...R),O.rotation.y=D,y.add(O),ie([.47,.035,.18],[0,0,0],T,O);let k=new gn(U,M(6844e3,.8),56);for(let q=0;q<56;q++){let he=new Dt;he.position.set(-.206+q%14*.031,.024,-.065+Math.floor(q/14)*.036),he.updateMatrix(),k.setMatrixAt(q,he.matrix)}return O.add(k),H([.14,.008,.022],[0,.024,.07],_,O),O}function K(y,R,D=0,O=!1){let k=new be;k.position.set(...R),k.rotation.y=D,y.add(k),ie([.25,.53,.46],[0,.265,0],T,k);for(let q=.32;q<.49;q+=.065)H([.195,.042,.012],[0,q,.239],_,k);for(let q=0;q<7;q++)H([.16,.008,.012],[0,.055+q*.025,.239],C,k);if(O){H([.012,.42,.35],[.139,.27,0],_,k);for(let q=0;q<3;q++)H([.015,.09,.25],[.15,.16+q*.105,-.02],M(2706228,.83),k)}return k}function ge(y,R,D,O=0){let k=new be;k.position.set(y,0,R),k.rotation.y=O,t.add(k),H([D,.075,.86],[0,.82,0],A,k),H([D,.035,.025],[0,.794,.443],C,k);for(let q of[-D/2+.08,D/2-.08])H([.048,.79,.68],[q,.39,0],C,k),H([.24,.035,.74],[q,.018,0],_,k);return H([D-.16,.19,.035],[0,.45,-.35],C,k),k}let we=ge(-1,-3.37,5.4);for(let y=0;y<6;y++){let R=-2.24+y*.84;Ae(we,[R,.86,-.05],c(-.13,.13),y===3?"live":y%2?"hole":"cracked",c(.88,1.04)),S(we,[R+.03,.87,.3],c(-.16,.16)),y%2===0&&K(we,[R+.18,0,-.1],c(-.1,.1),!0)}let _e=ge(-1.1,-2.25,2.6,0);for(let y=0;y<3;y++)Ae(_e,[-.84+y*.83,.86,-.1],c(-.2,.2),y===0?"live":"hole",.9),S(_e,[-.84+y*.83,.87,.3],c(-.2,.2));let We=Ae(t,[-.8,.31,-1.45],.42,"hole",.95);We.rotation.set(-1.38,.42,.21),r(We);let Oe=Ae(t,[-2.72,.24,2.58],-.45,"cracked",.73);Oe.rotation.x=-.56,Oe.rotation.z=.24,r(Oe);let qe=K(t,[-2.22,.13,-.72],.35,!0);qe.rotation.z=Math.PI/2,r(qe);for(let y=0;y<3;y++)r(K(t,[-3.32,0,-2.45+y*.31],-.18,!0)).scale.setScalar(.9);let mt=o,De=M(16777215,.78,u("#afb4a9","metal"),.22),Z=M(6449762,.7,null,.25),ye=M(3225908,.86,E),Pe=M(11383205,.82),Ce=M(6845548,.46,null,.73);function Te(y=0){let[R,D]=l(512);D.lineWidth=1.8;for(let O=0;O<512;O+=7)D.strokeStyle=O%21?"#a0a59a":"#686f65",D.beginPath(),D.moveTo(O,0),D.lineTo(O,512),D.stroke();for(let O=0;O<512;O+=6)D.strokeStyle=O%18?"#7f897e":"#b0b4a5",D.lineWidth=O%18?1.6:2.1,D.beginPath(),D.moveTo(0,O),D.lineTo(512,O),D.stroke();if(y){D.globalCompositeOperation="destination-out",D.fillStyle="#000",D.beginPath();let O=y===1?[[126,180],[187,210],[203,182],[229,265],[204,288],[236,339],[183,360],[154,302],[113,321],[137,257],[102,232]]:[[275,256],[315,209],[333,270],[377,253],[353,315],[386,375],[328,354],[300,399],[287,332],[248,309]];O.forEach(([k,q],he)=>he?D.lineTo(k,q):D.moveTo(k,q)),D.closePath(),D.fill(),D.lineWidth=3;for(let k=0;k<16;k++){let[q,he]=O[k%O.length];D.beginPath(),D.moveTo(q,he),D.lineTo(q+c(-24,24),he+c(-18,18)),D.stroke()}}return new ze({map:h(R),color:14803929,roughness:.93,side:Ut,alphaTest:.3,alphaToCoverage:!0})}let ce=[Te(),Te(1),Te(2)];function Ve(y,R,D,O,k=0){let he=new Gt(y.map(dn=>new w(dn[0],dn[1],0)),!0,"centripetal").getSpacedPoints(96).slice(0,-1),Ge=[],tt=[],Ct=[],tn=12,kt=he.length,ci=Math.min(...he.map(dn=>dn.x)),Hi=Math.max(...he.map(dn=>dn.x)),Io=Math.min(...he.map(dn=>dn.y)),Lg=Math.max(...he.map(dn=>dn.y));for(let dn=0;dn<=tn;dn++)for(let Ms=0;Ms<kt;Ms++){let Do=dn/tn,Ba=R[0]+(he[Ms].x-R[0])*Do,Uo=R[1]+(he[Ms].y-R[1])*Do;if(Ge.push(...D(Ba,Uo,Do)),tt.push((Ba-ci)/(Hi-ci),(Uo-Io)/(Lg-Io)),dn<tn){let Yl=dn*kt+Ms,Zl=dn*kt+(Ms+1)%kt;Ct.push(Yl,Zl,Yl+kt,Zl,Zl+kt,Yl+kt)}}let Lo=new Nt;Lo.setAttribute("position",new ct(Ge,3)),Lo.setAttribute("uv",new ct(tt,2)),Lo.setIndex(Ct),Lo.computeVertexNormals();let Dg=X(Lo,ce[k],O);Dg.customDepthMaterial=new na({depthPacking:rd,map:ce[k].map,alphaTest:.3,side:Ut});for(let[dn,Ms,Do]of[[1,.025,De],[.925,.007,Z]]){let Ba=he.map(Uo=>new w(...D(R[0]+(Uo.x-R[0])*dn,R[1]+(Uo.y-R[1])*dn,dn)));X(new cn(new Gt(Ba,!0),96,Ms,8,!0),Do,O)}}function G(y,R=1){let D=new be;D.name="Torn mesh back and lumbar support",y.add(D),Ve([[-.18,0],[-.224,.08],[-.235,.26],[-.28,.46],[-.264,.55],[-.17,.6],[0,.615],[.17,.6],[.264,.55],[.28,.46],[.235,.26],[.224,.08],[.18,0],[0,-.014]],[0,.3],(k,q,he)=>[k,q,-.11*q/.615+.035*(1-he*he)],D,R),N([[0,-.09,-.07],[0,.13,-.08],[-.17,.3,-.09],[-.23,.37,-.09]],.018,De,D),N([[0,.08,-.08],[.08,.22,-.085],[.23,.37,-.09]],.018,De,D);for(let k of[.12,.235])Me([.048,.073,.024],[0,k,-.055],ye,D);if(N([[-.21,.175,-.06],[0,.19,-.035],[.21,.175,-.06]],.014,Z,D),R)for(let k=0;k<5;k++)N([[-.13+k*.012,.2,-.015],[-.12+k*.012,.15,.001],[-.14+k*.012,.1,-.02]],.0016,ce[0],D);return D}function Re(y,R,D=!1){let O=new be;y.add(O);let k=R*.295;if(N([[R*.22,.46,-.17],[k,.53,-.2],[k,.67,-.17],[k,.72,-.07]],.023,De,O),D)return Me([.025,.011,.026],[k,.72,-.07],Pe,O),O;let q=Me([.058,.034,.15],[k,.745,.01],ye,O);return q.rotation.z=R*.06,me([k,.68,-.085],[k,.734,.045],.019,Z,O),O}function oe(y,R,D,O,k=0){let q=new be;q.position.set(R,D,O),q.rotation.y=k,y.add(q),me([0,.028,0],[0,.078,.015],.012,Ce,q);for(let he of[-1,1]){let Ge=se(.039,.022,[he*.021,0,0],b,q,16);Ge.rotation.z=Math.PI/2,Me([.002,.018,.018],[he*.033,0,0],Z,q)}return q}function Se(y,R=-1){let D=new be;D.name="Five-spoke caster base",y.add(D),se(.057,.09,[0,.16,0],De,D,16),se(.031,.2,[0,.28,0],Ce,D,16);for(let O=0;O<5;O++){let k=O/5*Math.PI*2+.25,q=Math.cos(k),he=Math.sin(k);if(O===R){me([0,.16,0],[q*.13,.135,he*.13],.025,De,D),Me([.024,.014,.018],[q*.13,.135,he*.13],Pe,D);continue}N([[0,.18,0],[q*.14,.145,he*.14],[q*.31,.092,he*.31]],.022,De,D),oe(D,q*.31,.04,he*.31,k)}return D}function Ue(y,R,D,O){return y.position.set(R,0,D),y.rotation.set(...O),y.updateMatrixWorld(!0),r(y)}function Fe(y,R,D,O={}){let k=new be;k.name="Broken Aeron-style mesh chair",t.add(k),O.noBase||Se(k,O.missingSpoke??-1),ie([.24,.095,.27],[0,.405,-.035],Z,k),se(.045,.13,[0,.405,0],De,k,16),me([-.14,.41,.015],[-.245,.405,.05],.012,Ce,k),Me([.035,.016,.055],[-.25,.405,.055],ye,k),Me([.055,.025,.04],[.18,.407,-.04],ye,k),Ve([[-.2,-.23],[-.26,-.16],[-.283,.08],[-.25,.22],[0,.25],[.25,.22],[.283,.08],[.26,-.16],[.2,-.23],[0,-.25]],[0,0],(he,Ge,tt)=>[he,.51-.035*(1-tt*tt)-.025*Math.max(0,Ge/.25),Ge],k,O.seatTear??1);for(let he of[-1,1])N([[he*.12,.41,-.14],[he*.22,.46,-.2],[he*.24,.49,-.15]],.023,De,k),Re(k,he,he===O.brokenArm);if(!O.noBack){let he=G(k,O.backTear??1);he.position.set(0,.55,-.22),he.rotation.set(O.backLean??0,0,O.backTwist??0)}return Ue(k,y,R,D)}Fe(-2.85,-2.48,[0,.35,-.035],{brokenArm:1,backTear:2}),Fe(-.3,3.35,[-.08,-.28,.08],{brokenArm:-1,missingSpoke:3,backLean:-.16}),Fe(2.75,3.3,[-.55,-.8,1.39],{brokenArm:-1,missingSpoke:2,backTwist:.2}),Fe(-.55,-3.42,[1.65,.65,.32],{brokenArm:1,noBack:!0}),Fe(1.35,1.42,[-.3,-.5,-1.28],{noBase:!0,brokenArm:-1,backTwist:-.14,backTear:2});let lt=Se(t,1);lt.name="Detached chair base",Ue(lt,2.35,2.53,[2.7,.36,.22]);let Pt=G(t,2);Pt.name="Snapped mesh backrest",Ue(Pt,-.75,2.3,[-1.6,.22,-.4]);let Ye=Re(t,1);Ye.name="Broken chair arm",Ue(Ye,1.4,2.62,[1.48,.71,.15]),r(oe(t,2.37,.045,2.84,.7)),r(oe(t,-2.15,.045,.95,-.4)),o=mt;for(let y=0;y<11;y++){let R=c(-3.3,.9),D=c(-3,-1);N([[R,.83,D],[R+.15,.52,D+.2],[R-.12,.04,D+.45],[R+.31,.022,D+.83],[R+.62,.02,D+.47]],.009,_)}N([[-3.25,.026,.8],[-2,.023,1.45],[-1.25,.022,1.78],[-.85,.022,1.47],[-.67,.022,2.5],[.45,.022,2.83],[1.25,.022,2.44]],.012,_),N([[2.8,.027,-2.9],[2.05,.025,-1.5],[1.64,.024,-.4],[1.8,.022,.1],[.98,.022,.6]],.008,M(6446139,.9));let Be=ge(2.55,-3.38,1.92);H([1.7,.72,.72],[0,.4,-.025],M(6713960,.94,p),Be);for(let y of[-.42,.42]){let R=H([.77,.24,.045],[y,.66,.37],A,Be);y>0&&(R.position.z=.51,R.rotation.z=-.04),me([y-.13,.66,.41],[y+.13,.66,.41],.014,C,Be)}let ke=new be;ke.position.set(-.27,.87,-.04),Be.add(ke),ie([.49,.6,.37],[0,.3,0],C,ke),H([.4,.35,.025],[0,.26,.2],_,ke),ie([.34,.15,.06],[0,.5,.2],T,ke),H([.12,.05,.008],[-.07,.515,.236],M(2243883,.4),ke);for(let y of[-.08,.08])me([y,.38,.21],[y,.31,.26],.018,W,ke);H([.37,.04,.23],[0,.045,.22],_,ke);for(let y=0;y<7;y++)H([.017,.012,.19],[-.14+y*.047,.07,.22],W,ke);let it=se(.12,.17,[0,.68,-.015],new ze({color:5069384,transparent:!0,opacity:.55,roughness:.45}),ke,24),nt=H([.27,.022,.25],[.025,.78,-.015],_,ke);nt.rotation.z=.13;let ot=M(12039066,.7,x);function Et(y,R,D=0){let O=new be;O.position.set(...R),O.rotation.z=D,y.add(O);let k=[[.052,0],[.055,.014],[.059,.12],[.054,.128],[.047,.12],[.047,.018]].map(he=>new He(...he));X(new Us(k,24,0,Math.PI*1.9),ot,O);let q=X(new $t(.036,.008,8,20,Math.PI*1.6),ot,O);return q.rotation.x=Math.PI/2,q.position.set(.066,.07,0),O}Et(ke,[0,.07,.23]),Et(Be,[.46,.87,.25],1.25),Et(Be,[.64,.87,-.02]);let Xt=M(3877398,.33),rn=X(new wi(.18,32),Xt,Be);rn.rotation.x=-Math.PI/2,rn.position.set(.48,.862,.19),rn.scale.y=.65,rn.castShadow=!1,ie([.52,.83,.54],[3.28,.42,-2.4],T);let hn=H([.49,.78,.045],[3.21,.43,-2.1],T);hn.rotation.y=.24,H([.035,.23,.04],[3.04,.56,-2.065],C),H([.36,.8,.36],[3.39,.4,-1.72],T);let yn=se(.16,.4,[3.39,1.04,-1.72],new ze({color:7378315,transparent:!0,opacity:.38,roughness:.34}),t,24);yn.rotation.z=.08;let dt=new be;dt.name="Broken lopsided foosball table",dt.position.set(2.24,-.104,.03),dt.rotation.set(0,-.18,-.22),t.add(dt);let At=M(13812642,.87,p),Un=M(8099956,.92,E);H([1.18,.25,1.91],[0,.91,0],At,dt),H([1.04,.025,1.74],[0,1.048,0],Un,dt);for(let y of[-.61,.61])H([.1,.18,2.02],[y,1.12,0],At,dt);H([1.14,.18,.08],[0,1.12,-.99],At,dt);let un=new vt;un.moveTo(-.57,1.03),un.lineTo(.57,1.03),un.lineTo(.57,1.21),un.lineTo(.23,1.21),un.lineTo(.12,1.07),un.lineTo(.02,1.15),un.lineTo(-.09,1.07),un.lineTo(-.16,1.21),un.lineTo(-.57,1.21),un.closePath();let zn=X(new sn(un,{depth:.08,bevelEnabled:!1}),At,dt);zn.position.z=.95;for(let y of[-.99,.99])H([.3,.1,.012],[0,1.085,y+(y>0?-.045:.045)],_,dt);for(let y of[-.47,.47])for(let R of[-.8,.8]){let D=y>0&&R>0,O=y>0;if(H([.11,D?.24:O?.57:.8,.12],[y,D?.68:O?.515:.4,R],C,dt),D)for(let k=0;k<4;k++)H([.012,.09,.018],[y-.04+k*.023,.555,R+c(-.04,.04)],A,dt).rotation.z=c(-.2,.2)}let si=H([.11,.57,.12],[2.89,.09,.98],C);si.rotation.set(.05,.37,1.42);let fn=H([.45,.045,.08],[2.55,.045,1.32],At);fn.rotation.y=.4;let P=[];function te(y,R){P.push(...y,...R)}for(let y of[-.8,.8])te([-.48,1.065,y],[.48,1.065,y]);for(let y of[-.48,.48])te([y,1.065,-.8],[y,1.065,.8]);te([-.48,1.065,0],[.48,1.065,0]);for(let y=0;y<48;y++){let R=y/48*Math.PI*2,D=(y+1)/48*Math.PI*2;te([Math.cos(R)*.19,1.065,Math.sin(R)*.19],[Math.cos(D)*.19,1.065,Math.sin(D)*.19])}let le=new Nt;le.setAttribute("position",new ct(P,3)),dt.add(new eo(le,new or({color:9674366})));let de=[M(9124144,.8),M(10658186,.8)];for(let y=0;y<8;y++){let R=-.78+y*.223,D=y%2?1:-1;y===5?N([[-.91,1.21,R],[-.24,1.21,R],[.18,1.36,R+.13],[.91,1.17,R+.08]],.012,W,dt):me([-.91,1.21,R],[.91,1.21,R],.012,W,dt),y!==4&&me([D*.8,1.21,R],[D*1.02,1.21,R],.034,_,dt);let O=y===0||y===7?1:y===1||y===6?2:3;for(let k=0;k<O;k++){if(y===3&&k===0||y===6&&k===1)continue;let q=(k-(O-1)/2)*.29;H([.055,.1,.037],[q,1.195,R],de[y%2],dt),Me([.031,.035,.031],[q,1.28,R],de[y%2],dt),H([.06,.045,.045],[q,1.11,R],de[y%2],dt)}}Me([.024,.024,.024],[.46,1.09,.69],T,dt),N([[-.46,1.068,.29],[-.2,1.068,.21],[-.08,1.068,.3],[.12,1.068,.23],[.48,1.068,.37]],.007,_,dt);let ne=H([.055,.13,.04],[.38,1.09,.51],de[0],dt);ne.rotation.z=Math.PI/2;for(let y of[-1.07,1.07]){me([-.32,1.27,y],[.32,1.27,y],.008,W,dt);for(let R=0;R<5;R++)Me([.025,.03,.025],[-.25+R*.07,1.27,y],de[y>0?1:0],dt)}let Le=new be;Le.name="MacBook Pro on the floor",Le.position.set(.45,.027,2.18),Le.rotation.y=Math.atan2(e.x-Le.position.x,e.z-Le.position.z),t.add(Le);let Xe=Le.position.clone().add(new w(1.18,0,0).applyAxisAngle(new w(0,1,0),Le.rotation.y)),Je=A0(e,Xe);t.add(Je.group);let et=C0(Xe);t.add(et.group),r(et.group);let rt=M(8884628,.35,null,.72),at=M(1053975,.7);function Ke(y,R,D,O,k,q,he=!1){let Ge=Math.min(.012,y/6,R/6,D/6),tt=X(Q(y-2*Ge,R-2*Ge,D,.026-Ge),k,q);return tt.position.set(...O),he&&(tt.rotation.x=-Math.PI/2),tt}Ke(.88,.59,.026,[0,0,0],rt,Le,!0),Ke(.66,.275,.003,[0,.0145,-.065],at,Le,!0);let wt=se(.013,.77,[0,.02,-.281],_,Le,20);wt.rotation.z=Math.PI/2;let gt=new be;gt.position.set(0,.034,-.295),gt.rotation.x=Math.PI/2,Le.add(gt),Ke(.88,.59,.018,[0,.295,0],rt,gt),Ke(.856,.566,.005,[0,.295,.01],at,gt);for(let y of[-.34,.34])for(let R of[-.21,.21])Me([.025,.006,.025],[y,-.014,R],b,Le);let Ot=document.createElement("canvas");Ot.width=256,Ot.height=384;let An=Ot.getContext("2d");_d(An,28,42,200);let It=h(Ot),st=new ze({map:It,transparent:!0,alphaTest:.1,roughness:.64,metalness:.03,emissiveMap:It,emissive:16777215,emissiveIntensity:.14}),Bt=X(new Rt(.115,.1725),st,gt);Bt.name="Off-center Figma vinyl sticker",Bt.position.set(.265,.365,-.0108),Bt.rotation.set(0,Math.PI,-.14),Bt.castShadow=!1;let[Ne,Ze]=l(1024);Ne.height=640,Ze.fillStyle="#111b22",Ze.fillRect(0,0,1024,640),Ze.fillStyle="#222e36",Ze.fillRect(0,0,1024,38),Ze.fillRect(0,38,140,602),Ze.fillRect(894,38,130,602),_d(Ze,15,6,17),Ze.font="13px sans-serif",Ze.fillStyle="#bac6ca",Ze.fillText("Figma / Wireframes",44,25);for(let y=0;y<7;y++)Ze.fillStyle=y===2?"#48616b":"#657a80",Ze.fillRect(18,85+y*34,85-y%3*18,3);for(let y=0;y<3;y++){let R=181+y*231;Ze.fillStyle="#b2bfbb",Ze.fillRect(R,118,197,390),Ze.fillStyle="#465b62",Ze.fillRect(R+12,137,173,19),Ze.fillRect(R+12,175,173,86),Ze.strokeStyle="#53696d",Ze.lineWidth=2,Ze.beginPath(),Ze.moveTo(R+12,175),Ze.lineTo(R+185,261),Ze.moveTo(R+185,175),Ze.lineTo(R+12,261),Ze.stroke();for(let D=0;D<5;D++)Ze.fillStyle="#82918f",Ze.fillRect(R+13,278+D*20,c(75,170),4);Ze.fillStyle="#526c72",Ze.fillRect(R+14,401,169,28),Ze.strokeStyle="#788c8d",Ze.strokeRect(R+14,447,78,39),Ze.strokeRect(R+105,447,78,39)}for(let y=0;y<12;y++)Ze.fillStyle="#50666e",Ze.fillRect(912,84+y*31,c(35,90),3);let vn=h(Ne),en=new _t({map:vn,color:8360598}),jn=X(new Rt(.823,.525),en,gt);jn.position.set(0,.3,.013),jn.castShadow=!1,H([.076,.014,.002],[0,.556,.014],at,gt),Me([.003,.003,.001],[0,.553,.0155],M(1978424,.2),gt);let[on,ri]=l(512);on.height=64,ri.font="22px sans-serif",ri.textAlign="center",ri.fillStyle="#9ca5a6",ri.fillText("MacBook Pro",256,40);let xr=X(new Rt(.14,.018),new _t({map:h(on),transparent:!0}),gt);xr.position.set(0,.025,.013),xr.castShadow=!1;let[ei,oi]=l(1024);oi.fillStyle="#151b1e",oi.fillRect(0,0,1024,1024),oi.strokeStyle="#3e494d",oi.fillStyle="#9ca5a6",oi.font="25px sans-serif",oi.textAlign="center";let Il=["1234567890-=","QWERTYUIOP[]","ASDFGHJKL;\u2019","ZXCVBNM,./"];for(let y=0;y<4;y++)for(let R=0;R<12;R++){let D=18+R*83,O=74+y*181;oi.strokeRect(D,O,72,145),oi.fillText(Il[y][R]||"",D+36,O+86)}oi.strokeRect(250,825,524,125);let wo=X(new Rt(.635,.257),new ze({map:h(ei),roughness:.7}),Le);wo.rotation.x=-Math.PI/2,wo.position.set(0,.0165,-.065);let oE=Ke(.34,.17,.001,[0,.0135,.174],M(6714488,.44,null,.62),Le,!0),Kd=new gn(new wi(.0012,5),_,480);for(let y=0;y<480;y++){let R=new Dt,D=y<240?-1:1,O=y%240;R.position.set(D*(.355+O%8*.006),.017,-.196+Math.floor(O/8)*.0085),R.rotation.x=-Math.PI/2,R.updateMatrix(),Kd.setMatrixAt(y,R.matrix)}Le.add(Kd);for(let y of[-1,1])for(let R=0;R<3;R++)H([.003,.006,.035],[y*.444,.001,-.18+R*.065],at,Le);let Ll=new Hn(9285310,0,1.4,2);Ll.position.set(0,.29,.14),gt.add(Ll);let eg=en.color.clone();en.color.setScalar(0);let yr=!1,Yi=0,Ta=!1;function Dl(y){gt.rotation.x=je.lerp(Math.PI/2,-.2,y);let R=je.smoothstep(y,.22,.72);en.color.copy(eg).multiplyScalar(R),Ll.intensity=.6*R}let Jd={object:Le,screen:jn,get isReady(){return Yi===1},get isOpen(){return yr},get openProgress(){return Yi},getLidGrip(y){return gt.updateWorldMatrix(!0,!1),gt.localToWorld(y.set(.12,.6,-.004))},setOpenProgress(y){Ta=!0,Yi=je.clamp(y,0,1),yr=Yi>0,Dl(Yi)},open(){return yr?!1:(Ta=!1,yr=!0,!0)},close(){Ta=!1,yr=!1,Yi=0,Dl(0)},update(y,R=!1){Ta||!yr||Yi===1||(Yi=R?1:Math.min(1,Yi+y/.95),Dl(je.smootherstep(Yi,0,1)))}};function tg(){let[y,R]=l();R.fillStyle="#b2af94",R.fillRect(0,0,512,512),R.fillStyle="#4f584c";for(let D=0;D<35;D++){let O=35+D*12;R.fillRect(30,O,c(100,430),c(1,3))}return R.strokeStyle="rgba(64,54,28,.4)",R.lineWidth=4,R.beginPath(),R.arc(345,130,61,0,Math.PI*2),R.stroke(),m(R,512,8e3,"49,45,27",.16),h(y)}let ng=M(16777215,.99,tg()),ig=M(2836532,.88),sg=[T,C,A,M(8619381,.97)],Ul=[],Nl=[];for(let y=0;y<82;y++){let R=c(-3.62,3.58),D=c(-3.75,4);Math.abs(R)<.65&&D<.8&&D>-.9&&(R-=1.2);let O=X(new Rt(c(.13,.29),c(.17,.37),4,4),ng),k=c(-.1,.1),q=c(-.07,.07),he=a()*Math.PI*2,Ge=c(.012,.038);O.rotation.set(-Math.PI/2,0,he),O.position.set(R,.005,D),O.material.side=Ut,O.name="Paper resting on the floor";let tt=O.geometry.attributes.position;for(let Ct=0;Ct<tt.count;Ct++)tt.setZ(Ct,Math.abs(Math.sin(tt.getX(Ct)*33+k)*Math.sin(tt.getY(Ct)*24+q))*.0015+Ge*.008);Ul.push(O)}for(let y=0;y<95;y++){let R=c(-3.65,3.65),D=c(-3.7,4);Math.abs(R)<.8&&D>-.8&&D<1.3&&(R-=1.7);let O=H([c(.025,.17),c(.015,.065),c(.035,.2)],[R,c(.025,.055),D],sg[y%4]);O.rotation.set(c(-.13,.13),a()*Math.PI*2,c(-.13,.13)),O.name="Fallen casing fragment",r(O)}for(let y=0;y<9;y++){let R=new be;R.position.set(c(-3,3),.028,c(-2,3)),R.rotation.y=a()*6,t.add(R),R.name="Loose circuit board",r(R),H([.18,.012,.24],[0,0,0],ig,R);for(let D=0;D<4;D++)H([.035,.017,.05],[-.055+D%2*.1,.013,-.07+Math.floor(D/2)*.12],_,R)}for(let y=0;y<12;y++){let R=H([.09,.018,.09],[c(-3.5,3.5),.03,c(-3.4,3.7)],_);R.rotation.y=a()*6,H([.06,.003,.03],[0,.011,0],T,R),R.name="Broken key cap",r(R)}for(let y=0;y<14;y++){let R=H([c(.3,.7),.012,c(.3,.8)],[c(-3.4,3.4),.007,c(-3.5,3.7)],M(y%2?8948860:10197637,.98,E));R.rotation.y=c(-.15,.15),Nl.push(R)}let kn=b0(Nl);function Qd(y,R,D){y.save(),y.lineCap="round";for(let[k,q,he,Ge]of D){for(let tt=0;tt<13;tt++){let Ct=q+tt*Ge/12;y.strokeStyle=R,y.globalAlpha=c(.65,.94),y.lineWidth=c(12,27),y.beginPath(),y.moveTo(k+c(-18,35),Ct),y.quadraticCurveTo(k+he*.45,Ct+c(-12,12),k+he+c(-35,18),Ct+c(-8,8)),y.stroke()}y.globalAlpha=1;for(let tt=0;tt<8;tt++)f(y,k+a()*he,q+a()*Ge,c(13,43),"54,66,61",c(.035,.09))}y.globalAlpha=1;for(let k=0;k<95;k++){let q=a()*1024,he=a()<.55?c(800,1045):a()*1024;f(y,q,he,c(14,95),k%3?"44,49,38":"103,77,42",c(.045,.16))}let O=y.createLinearGradient(0,0,0,1024);O.addColorStop(0,"rgba(43,44,32,.30)"),O.addColorStop(.13,"rgba(43,44,32,0)"),O.addColorStop(.77,"rgba(43,44,32,0)"),O.addColorStop(1,"rgba(44,40,27,.38)"),y.fillStyle=O,y.fillRect(0,0,1024,1024);for(let k=0;k<23;k++){let q=a()*1024,he=c(8,105);y.strokeStyle=`rgba(86,67,38,${c(.06,.17)})`,y.lineWidth=c(1.5,6),y.beginPath(),y.moveTo(q,he),y.bezierCurveTo(q+4,he+60,q-3,he+125,q+c(-5,5),he+c(130,460)),y.stroke()}m(y,1024,12e3,"36,42,30",.21),y.restore()}function Hl(y){let[R,D]=l(1024);D.fillStyle="#bfc4b6",D.fillRect(0,0,1024,1024),D.strokeStyle="#304a4d",D.fillStyle="#304a4d",D.lineWidth=4,D.font="28px sans-serif",D.fillText(y?"ONBOARDING / FIRST RUN":"WORKSPACE / DASHBOARD",45,67);function O(k,q){D.beginPath(),D.moveTo(k,q),D.lineTo(k+50,q),D.lineTo(k+37,q-11),D.moveTo(k+50,q),D.lineTo(k+37,q+11),D.stroke()}if(y)for(let k=0;k<3;k++){let q=48+k*330;D.strokeRect(q,154,253,593),D.strokeRect(q+14,174,225,544),D.fillRect(q+80,187,91,5),D.strokeRect(q+32,225,189,130),D.beginPath(),D.moveTo(q+32,225),D.lineTo(q+221,355),D.moveTo(q+221,225),D.lineTo(q+32,355),D.stroke();for(let he=0;he<4;he++)D.fillRect(q+31,397+he*25,170-he%2*41,4);D.strokeRect(q+32,524,188,54),D.strokeRect(q+32,602,188,54),k<2&&O(q+266,451),D.font="23px sans-serif",D.fillText(["01 / welcome","02 / connect","03 / explore"][k],q+23,803)}else for(let k=0;k<2;k++){let q=45+k*498;D.strokeRect(q,165,436,525),D.strokeRect(q,165,436,44),D.strokeRect(q+14,223,87,448);for(let he=0;he<5;he++)D.fillRect(q+25,246+he*40,59-he%2*17,4);D.strokeRect(q+118,230,297,133),D.beginPath(),D.moveTo(q+135,343),D.lineTo(q+171,300),D.lineTo(q+212,325),D.lineTo(q+270,265),D.lineTo(q+328,293),D.lineTo(q+397,248),D.stroke();for(let he=0;he<2;he++)for(let Ge=0;Ge<2;Ge++){D.strokeRect(q+118+Ge*154,385+he*145,139,124),D.fillRect(q+131+Ge*154,404+he*145,92,5);for(let tt=0;tt<3;tt++)D.fillRect(q+131+Ge*154,431+he*145+tt*18,103-tt*13,3)}}return D.strokeStyle="#7d453b",D.lineWidth=3,D.beginPath(),D.ellipse(510,905,357,48,-.02,0,Math.PI*2),D.stroke(),D.font="25px sans-serif",D.fillStyle="#7d453b",D.fillText(y?"simplify the first step / test again":"less noise \u2014 keep the primary action visible",180,915),Qd(D,"#bfc4b6",y?[[345,225,290,290],[65,570,220,170],[660,765,280,130]]:[[570,215,350,235],[145,500,280,200],[220,855,430,95]]),h(R)}for(let y=0;y<2;y++){let R=new be;R.name="Whiteboard with interface wireframes",R.position.set(y?2.25:.12,2.2,-3.94),R.rotation.z=y?-.025:.012,t.add(R),H([1.78,1.12,.04],[0,0,0],W,R);let D=Hl(!y),O=X(new Rt(1.7,1.04),new ze({map:D,roughness:.75,emissive:16777215,emissiveMap:D,emissiveIntensity:.025}),R);O.position.z=.024,H([1.7,.023,.09],[0,-.57,.025],W,R);for(let k=0;k<3;k++)me([-.58+k*.18,-.546,.057],[-.46+k*.18,-.546,.057],.013,k?_:M(3755626,.7),R)}let Yn=new be;Yn.name="Planning whiteboard covered in sticky notes",Yn.position.set(1.9,0,-3),Yn.rotation.y=0,t.add(Yn);for(let y of[-1.12,1.12]){H([.045,.98,.055],[y,.49,0],C,Yn),H([.11,.06,.65],[y,.06,0],C,Yn);for(let R of[-.25,.25])Me([.047,.045,.032],[y,.035,R],_,Yn)}H([2.68,1.94,.05],[0,1.85,0],W,Yn);let jd=new Set([1,4,7,9,13,17,20,22,24]),[rg,zt]=l(1024);zt.fillStyle="#c2c7ba",zt.fillRect(0,0,1024,1024);for(let y=0;y<65;y++)f(zt,a()*1024,a()*1024,c(15,110),"60,69,55",.065);zt.strokeStyle="rgba(38,62,63,.65)",zt.fillStyle="rgba(38,62,63,.65)",zt.lineWidth=3;for(let y=0;y<3;y++){let R=170+y*245;zt.strokeRect(R,560,190,335),zt.strokeRect(R+12,579,166,28),zt.strokeRect(R+12,625,166,102),zt.beginPath(),zt.moveTo(R+12,625),zt.lineTo(R+178,727),zt.moveTo(R+178,625),zt.lineTo(R+12,727),zt.stroke();for(let D=0;D<4;D++)zt.fillRect(R+15,753+D*19,137-D%2*39,3);zt.strokeRect(R+15,843,160,28),y<2&&(zt.beginPath(),zt.moveTo(R+198,727),zt.lineTo(R+235,727),zt.lineTo(R+222,717),zt.moveTo(R+235,727),zt.lineTo(R+222,737),zt.stroke())}Qd(zt,"#c2c7ba",[[130,620,285,170],[407,735,280,165],[685,530,190,150]]);for(let y of jd){let R=(-1.1+y%9*.273)/2.6*1024+512,D=(.5-(2.63-Math.floor(y/9)*.28-1.85)/1.86)*1024;zt.fillStyle="rgba(203,203,175,.20)",zt.fillRect(R-40,D-59,80,118),zt.fillStyle="rgba(111,96,51,.17)",zt.fillRect(R-34,D-56,68,8);for(let O=0;O<9;O++)zt.fillStyle="rgba(77,67,39,.15)",zt.fillRect(R+c(-33,33),D-53+c(-2,6),c(1,3),c(2,5))}let ef=h(rg);X(new Rt(2.6,1.86),new ze({map:ef,roughness:.75,emissive:16777215,emissiveMap:ef,emissiveIntensity:.025}),Yn).position.set(0,1.85,.027),H([2.58,.025,.13],[0,.87,.045],W,Yn);for(let y=0;y<3;y++)me([-.63+y*.23,.899,.09],[-.48+y*.23,.899,.09],.017,y===0?M(3428197,.75):_,Yn);H([.18,.045,.07],[.62,.906,.075],_,Yn);let og=["#c3b25e","#b38488","#7faaa9","#a4b081"];function Ra(y,R,D,O,k){let[q,he]=l(128);he.fillStyle=og[k%4],he.fillRect(0,0,128,128),he.fillStyle="rgba(42,49,37,.16)",he.fillRect(0,0,128,14),he.strokeStyle="rgba(39,52,47,.68)",he.lineWidth=2.6;for(let kt=0;kt<3+k%3;kt++){he.beginPath();let ci=30+kt*16;he.moveTo(16,ci);for(let Hi=1;Hi<8;Hi++)he.lineTo(16+Hi*c(8,12),ci+c(-2.4,2.4));he.stroke()}k%4===0&&(he.strokeRect(19,75,35,27),he.strokeRect(72,75,35,27));let Ge=new Rt(.205,.215,3,5),tt=Ge.attributes.position;for(let kt=0;kt<tt.count;kt++){let ci=tt.getY(kt);tt.setZ(kt,Math.max(0,-ci-.015)**2*3.3)}Ge.computeVertexNormals();let Ct=h(q),tn=X(Ge,new ze({map:Ct,roughness:.96,side:Ut,emissive:16777215,emissiveMap:Ct,emissiveIntensity:.025}),y);return tn.position.set(R,D,O),tn.rotation.z=c(-.13,.13),tn}for(let y=0;y<3;y++)for(let R=0;R<9;R++)jd.has(y*9+R)||Ra(Yn,-1.1+R*.273+c(-.018,.018),2.63-y*.28+c(-.014,.014),.04,y*9+R);for(let y=0;y<5;y++)y===1||y===4||Ra(Yn,y<3?-1.1:1.09,1.75-y%3*.29,.04,28+y);for(let y=0;y<4;y++){let R=Ra(t,-1.7-y*.3,.005,-.38+y*.26,33+y);R.rotation.set(-Math.PI/2,0,.6+y*.73);let D=R.geometry.attributes.position;for(let O=0;O<D.count;O++)D.setZ(O,D.getZ(O)*.1);Ul.push(R)}let Aa=T0();t.add(Aa.group);let Fl=cl({flies:14,moths:7,spread:[.88,.23,.5],sizeScale:.55,dive:.65});Fl.group.position.y=-.4,Aa.group.add(Fl.group);for(let y of[-.66,.66])me([y,3.3,-.55],[y,2.98,-.55],.006,_);N([[.85,3.3,-.6],[1.03,2.8,-.65],[1.26,2.86,-.7],[1.3,3.3,-.7]],.007,_);let Xs=new be;Xs.position.set(-2.1,.88,-3.2),we.parent.add(Xs),se(.11,.035,[0,0,0],_,Xs),me([0,0,0],[.05,.31,0],.016,C,Xs),me([.05,.31,0],[.22,.4,.02],.013,C,Xs),X(new Ns(.12,.13,20,1,!0),C,Xs).position.set(.23,.37,.02),Me([.04,.025,.04],[.23,.32,.02],new _t({color:15122820}),Xs);let tf=new Hn(15121790,1.2,2.5,2);tf.position.set(-1.87,1.19,-3.18),t.add(tf);let Ol=cl({flies:5,moths:3,spread:[.28,.1,.22],seed:113,sizeScale:.55,dive:.1});Ol.group.position.set(-1.87,1.14,-3.02),t.add(Ol.group);let nf=new Wt({color:14102035,roughness:.31,clearcoat:1,clearcoatRoughness:.18}),sf=new Wt({color:15790556,roughness:.13,transparent:!0,opacity:.16,depthWrite:!1,clearcoat:1,clearcoatRoughness:.08}),Bl=M(14081488,.49),Ca=M(9016713,.69),ag=new io;function zl(y){let R=ag.load(new URL(`./labels/${y}.svg`,import.meta.url).href);return R.colorSpace=ft,R.anisotropy=Math.min(8,i.capabilities.getMaxAnisotropy()),new ze({map:R,transparent:!0,alphaTest:.15,roughness:.72,side:Ut})}let cg=zl("ketchup-glass"),lg=zl("ketchup-squeeze"),hg=zl("ketchup-neck");for(let y=0;y<8140;y++)a();function ug(y,R){for(let D=1;D<y.length;D++)if(y[D][1]>=R){let[O,k]=y[D-1],[q,he]=y[D];return je.lerp(O,q,(R-k)/(he-k||1))}return y.at(-1)[0]}function kl(y,R,D,O,k,q=1,he=1.02){let Ge=new Rt(1,1,24,16),tt=Ge.attributes.position,Ct=Ge.attributes.uv;for(let kt=0;kt<tt.count;kt++){let ci=(Ct.getX(kt)*2-1)*he,Hi=je.lerp(D,O,Ct.getY(kt)),Io=ug(R,Hi)+.0018;tt.setXYZ(kt,Math.sin(ci)*Io,Hi,Math.cos(ci)*Io*q+8e-4)}Ge.computeVertexNormals();let tn=X(Ge,k,y);return tn.castShadow=!1,tn}function Vl(y,R,D,O=1){let k=X(new Us(y.map(q=>new He(...q)),48),R,D);return k.scale.z=O,k}function rf(y,R,D,O,k,q){let he=new be;return he.name=y.name,he.add(y),y.position.y=-k,t.add(he),he.position.set(R,0,D),he.rotation.set(...O),he.scale.setScalar(q),he.updateMatrixWorld(!0),ur(he,kn)}let is=new be;is.name="Discarded glass ketchup bottle";let Pa=[[0,0],[.063,0],[.076,.014],[.08,.047],[.079,.19],[.069,.267],[.049,.342],[.03,.41],[.029,.447],[.033,.454],[.032,.471],[0,.471]],of=Pa.filter(y=>y[1]<.44).map(([y,R])=>[Math.max(0,y-.0035),R+.004]);of.push([.026,.443],[0,.443]);let dg=Vl(of,nf,is),fg=Vl(Pa,sf,is);fg.castShadow=!1,kl(is,Pa,.047,.24,cg),kl(is,Pa,.365,.432,hg,1,.95);let To=new be;To.position.y=.48,is.add(To),se(.037,.036,[0,0,0],Bl,To,32),se(.0365,.006,[0,.461,0],Ca,is,32);for(let y=0;y<30;y++){let R=y/30*Math.PI*2;me([Math.cos(R)*.037,-.013,Math.sin(R)*.037],[Math.cos(R)*.037,.014,Math.sin(R)*.037],.0011,Ca,To)}let af=X(new $t(.07,.003,6,32),sf,is);af.rotation.x=Math.PI/2,af.position.y=.016;let pg=rf(is,-.28,2.92,[-.25,.45,Math.PI/2],.25,.82),vs=new be;vs.name="Discarded squeeze ketchup bottle";let cf=[[0,.058],[.055,.058],[.065,.075],[.098,.105],[.115,.15],[.109,.25],[.118,.36],[.112,.415],[.092,.438],[0,.438]];Vl(cf,nf,vs,.62),kl(vs,cf,.122,.403,lg,.62,1.04);let mg=se(.069,.06,[0,.034,0],Bl,vs,40);mg.scale.z=.73;let gg=se(.0694,.003,[0,.014,0],Ca,vs,40);gg.scale.z=.73,ie([.042,.012,.01],[0,.014,.051],Bl,vs),H([.031,.018,.008],[0,.04,-.05],Ca,vs),rf(vs,1.95,2.45,[-Math.PI/2,0,-.45],.225,.8);let[lf,Tt]=l(1024);lf.height=512,Tt.fillStyle="#86b0b2",Tt.fillRect(0,0,1024,512);for(let y=0;y<180;y++)f(Tt,a()*1024,a()*512,c(5,55),y%2?"225,229,207":"83,125,129",c(.035,.14));Tt.lineCap="round";for(let y=0;y<260;y++){let R=a()*1024,D=a()*512;Tt.strokeStyle=`rgba(44,57,53,${c(.3,.65)})`,Tt.lineWidth=c(2,4),Tt.beginPath(),Tt.moveTo(R,D),Tt.quadraticCurveTo(R-3,D+7,R+c(-2,3),D+c(7,15)),Tt.stroke()}Tt.fillStyle="#eee2c3",Tt.beginPath(),Tt.moveTo(512,176),Tt.bezierCurveTo(459,117,386,112,350,169),Tt.bezierCurveTo(313,243,337,421,410,466),Tt.bezierCurveTo(460,493,565,493,615,466),Tt.bezierCurveTo(687,421,711,243,675,169),Tt.bezierCurveTo(639,112,565,117,512,176),Tt.fill();for(let y of[433,591])f(Tt,y,271,29,"197,123,110",.2),Tt.fillStyle="#3d3630",Tt.beginPath(),Tt.ellipse(y,215,7,4,-.2,0,Math.PI*2),Tt.fill();Tt.strokeStyle="#52443a",Tt.lineWidth=3,Tt.beginPath(),Tt.moveTo(512,274),Tt.lineTo(512,316),Tt.bezierCurveTo(501,335,482,337,472,326),Tt.moveTo(512,316),Tt.bezierCurveTo(523,335,542,337,552,326),Tt.stroke();for(let y of[-1,1])for(let R=0;R<3;R++)Tt.fillStyle="#6e5b46",Tt.beginPath(),Tt.arc(512+y*(25+R*9),300+R%2*12,1.8,0,Math.PI*2),Tt.fill();m(Tt,512,2300,"112,124,109",.07);let xg=new Wt({map:h(lf),roughness:.29,clearcoat:1,clearcoatRoughness:.16}),hf=new Wt({color:9091001,roughness:.25,clearcoat:1,clearcoatRoughness:.14}),[uf,ai]=l(1024);uf.height=512,ai.fillStyle="#e8dcba",ai.fillRect(0,0,1024,512);for(let y=0;y<18;y++){let R=y*1024/18;ai.fillStyle=y%2?"#93b8ae":"#7ca6a5",ai.beginPath(),ai.moveTo(R-12,0),ai.bezierCurveTo(R-20,170,R+4,310,R-12,512),ai.lineTo(R+12,512),ai.bezierCurveTo(R+26,310,R+8,170,R+17,0),ai.closePath(),ai.fill()}let Ia=ai.createLinearGradient(0,220,0,512);Ia.addColorStop(0,"rgba(103,62,27,0)"),Ia.addColorStop(.7,"rgba(103,62,27,.09)"),Ia.addColorStop(1,"rgba(74,39,14,.48)"),ai.fillStyle=Ia,ai.fillRect(0,0,1024,512);let df=new Wt({map:h(uf),roughness:.34,clearcoat:.8,side:Ut}),Zi=new be;Zi.name="Blue pointy-eared mug tipped on its side";function ff(y,R){let D=new Us(y.map(q=>new He(...q)),64),O=D.attributes.uv,k=D.attributes.position;for(let q=0;q<k.count;q++)O.setY(q,k.getY(q)/.258);return D.rotateY(Math.PI),X(D,R,Zi)}ff([[0,.008],[.085,.008],[.113,.018],[.126,.043],[.139,.138],[.144,.236],[.14,.257]],xg),ff([[.127,.257],[.128,.237],[.121,.09],[.106,.034],[0,.034]],df);let pf=X(new $t(.134,.008,10,64),hf,Zi);pf.rotation.x=Math.PI/2,pf.position.y=.254;let mf=X(new $t(.102,.004,8,48),df,Zi);mf.rotation.x=Math.PI/2,mf.position.y=.012;for(let y of[-1,1]){let R=new be;R.position.set(y*.095,.235,.103),R.rotation.set(-.06,y*Math.atan2(.095,.103),-y*.1),Zi.add(R);let D=new vt;D.moveTo(-.047,0),D.bezierCurveTo(-.044,.046,-.015,.112,0,.142),D.bezierCurveTo(.018,.125,.046,.045,.047,0),D.closePath();let O=new sn(D,{depth:.013,bevelEnabled:!0,bevelSegments:3,steps:1,bevelSize:.005,bevelThickness:.005,curveSegments:12});O.translate(0,0,-.0065),X(O,hf,R),N([[-.028,.018,.014],[-.025,.057,.014],[0,.113,.014],[.027,.036,.014]],.0019,M(5005659,.62),R)}let[yg,La]=l(256);La.fillStyle="#e8dfc6",La.fillRect(0,0,256,256),La.fillStyle="#84adb0";for(let y of[0,95,200])La.fillRect(y,0,47,256);let vg=new Wt({map:h(yg),roughness:.28,clearcoat:1});N([[.129,.211,0],[.195,.222,0],[.249,.188,0],[.257,.13,0],[.229,.075,0],[.178,.057,0],[.125,.076,0]],.014,vg,Zi);let Ro=new vt;Ro.moveTo(-.021,.01),Ro.quadraticCurveTo(0,.021,.021,.01),Ro.quadraticCurveTo(.021,-.003,0,-.019),Ro.quadraticCurveTo(-.022,-.004,-.021,.01),X(new sn(Ro,{depth:.012,bevelEnabled:!0,bevelSize:.003,bevelThickness:.003,bevelSegments:2,curveSegments:8}),new Wt({color:2697251,roughness:.3,clearcoat:1}),Zi).position.set(0,.129,.142);let $i=new be;$i.name="Spilled animal mug in the left foreground",$i.add(Zi),Zi.position.y=-.135,t.add($i);let vr=new w(-.55,-.05,.83).normalize(),_r=new w(.54,.66,.39);_r.addScaledVector(vr,-_r.dot(vr)).normalize();let Gl=new w().crossVectors(vr,_r).normalize();$i.quaternion.setFromRotationMatrix(new St().makeBasis(Gl,vr,_r)),$i.scale.setScalar(.72),$i.position.set(.24,0,3.02),$i.updateMatrixWorld(!0),ur($i,kn),$i.updateMatrixWorld(!0);let gf=Math.hypot(Gl.y,_r.y),Da=Zi.localToWorld(new w(-.134*Gl.y/gf,.254,-.134*_r.y/gf)),Ao=new w(vr.x,0,vr.z).normalize(),Mr=Da.clone().addScaledVector(Ao,.23);Mr.y=kn(Mr.x,Mr.z)+.001;let xf=new Wt({color:5324843,roughness:.13,metalness:.04,clearcoat:1,clearcoatRoughness:.08,transparent:!0,opacity:.94,side:Ut}),_g=new ze({color:9072713,roughness:.4,transparent:!0,opacity:.68,depthWrite:!1,side:Ut});function yf(y,R,D,O,k=0){let q=new vt;for(let Ct=0;Ct<=80;Ct++){let tn=Ct/80*Math.PI*2,kt=1+.11*Math.sin(tn*3+k)+.065*Math.sin(tn*7-.3)+.025*Math.cos(tn*13),ci=Math.cos(tn)*D*kt,Hi=Math.sin(tn)*O*kt;Ct?q.lineTo(ci,Hi):q.moveTo(ci,Hi)}q.closePath();let he=new di(q,32),Ge=X(he,_g);Ge.rotation.x=-Math.PI/2,Ge.scale.setScalar(1.045),Ge.position.set(y,kn(y,R)+5e-4,R),Ge.castShadow=!1;let tt=X(he,xf);return tt.rotation.x=-Math.PI/2,tt.position.set(y,kn(y,R)+.001,R),tt.castShadow=!1,tt}yf(Mr.x,Mr.z,.23,.145,.4);let Co=Da.clone();Co.y=kn(Co.x,Co.z)+.008,N([Da.toArray(),Co.toArray(),Co.clone().addScaledVector(Ao,.09).toArray(),Mr.toArray()],.008,xf);for(let[y,R,D]of[[.45,.1,.018],[.51,-.07,.012],[.37,-.18,.022],[.29,.21,.009]]){let O=Da.clone().addScaledVector(Ao,y).add(new w(-Ao.z*R,0,Ao.x*R));yf(O.x,O.z,D,D*.65,y*3)}t.updateMatrixWorld(!0);for(let y of Ul){let R=y.geometry.attributes.position;for(let D=0;D<R.count;D++){let O=y.localToWorld(new w(R.getX(D),R.getY(D),0)),k=.003;for(let q of Nl){let he=q.worldToLocal(O.clone()),Ge=q.geometry.parameters;Math.abs(he.x)<Ge.width/2&&Math.abs(he.z)<Ge.depth/2&&(k=Math.max(k,.013))}R.setZ(D,R.getZ(D)+k+.002-y.position.y)}R.needsUpdate=!0,y.geometry.computeVertexNormals(),y.geometry.computeBoundingSphere()}for(let[y,R,D,O,k]of[[-2.53,2.13,1.52,1.08,!0],[-.62,2.13,1.78,1.1,!1]]){let q=new be;q.name="Left-wall design whiteboard",q.position.set(-3.86,R,y),q.rotation.y=Math.PI/2,t.add(q),H([D,O,.045],[0,0,0],W,q);let he=Hl(k),Ge=X(new Rt(D-.07,O-.07),new ze({map:he,roughness:.85,emissive:16777215,emissiveMap:he,emissiveIntensity:.025}),q);Ge.position.z=.026,H([D-.07,.025,.1],[0,-O/2,.035],W,q),me([-.4,-O/2+.025,.06],[-.23,-O/2+.025,.06],.011,_,q),H([.13,.035,.065],[D*.29,-O/2+.029,.045],J,q),Ra(q,D*.35,O*.21,.034,k?6:9)}let vi=new be;vi.name="Worn bookshelf of design books",vi.position.set(-3.65,0,1.65),vi.rotation.y=Math.PI/2,t.add(vi);let Ua=M(11643027,.92,p),Mg=M(10920589,.98);H([1.56,2.38,.035],[0,1.19,-.185],Ua,vi);for(let y of[-.765,.765])H([.045,2.42,.42],[y,1.21,.015],Ua,vi);for(let y of[.12,.66,1.2,1.74,2.28])H([1.5,.035,.42],[0,y,.015],Ua,vi);H([1.51,.1,.045],[0,.05,.19],Ua,vi);let Na=[["The Design of Everyday Things","#b5ad86"],["Don't Make Me Think","#bd8b36"],["Thinking with Type","#9f392f"],["Grid Systems","#adaf9a"],["Designing Interfaces","#54796f"],["About Face","#393e3e"],["The Elements of User Experience","#758b9d"],["Sprint","#b3a847"],["Universal Principles of Design","#b8b5a4"],["Designing for Interaction","#80665b"],["Sketching User Experiences","#456976"],["The Shape of Design","#bcb296"]],Eg=Na.map(([y,R],D)=>{let[O,k]=l(128);O.height=1024,k.fillStyle=R,k.fillRect(0,0,128,1024);let q=k.createLinearGradient(0,0,128,0);return q.addColorStop(0,"rgba(0,0,0,.35)"),q.addColorStop(.25,"rgba(0,0,0,0)"),q.addColorStop(.86,"rgba(230,219,175,.12)"),q.addColorStop(1,"rgba(0,0,0,.2)"),k.fillStyle=q,k.fillRect(0,0,128,1024),k.save(),k.translate(76,70),k.rotate(Math.PI/2),k.fillStyle=[2,4,5,6,9,10].includes(D)?"#ded9c5":"#262b26",k.font="600 47px Georgia,serif",k.fillText(y,0,0,820),k.restore(),k.fillStyle="rgba(217,210,181,.55)",k.fillRect(14,947,100,3),k.fillRect(14,963,100,3),m(k,128,400,"22,24,17",.22),new ze({map:h(O),roughness:.96})});for(let y=0;y<4;y++){let R=-.69;for(let D=0;D<16;D++){let O=(D+y*5)%Na.length,k=c(.045,.085),q=c(.3,.44),he=c(.22,.3);if(R+k>.68)break;if(D===7||y===2&&D===11){R+=.1;continue}let Ge=new be;Ge.name=Na[O][0],vi.add(Ge);let tt=D%6===5?-.12:c(-.025,.025);Ge.rotation.z=tt,Ge.position.set(R+k/2,.12+y*.54+.018+Math.abs(Math.sin(tt))*k/2,.18-he/2),H([k-.008,q-.009,he-.007],[0,q/2,0],Mg,Ge);let Ct=M(Na[O][1],.93);for(let kt of[-1,1])H([.004,q,he],[kt*(k/2-.002),q/2,0],Ct,Ge);H([k,q,.007],[0,q/2,he/2],Ct,Ge);let tn=X(new Rt(k-.002,q-.004),Eg[O],Ge);tn.position.set(0,q/2,he/2+.004),tn.castShadow=!1,R+=k+.008}}for(let y of[.14,.68,1.22,1.76,2.3])H([1.44,.002,.035],[0,y,.196],M(7171673,.99),vi);let Sg=H([.32,.055,.24],[.41,2.327,.03],M(6964536,.95),vi);Sg.rotation.y=.17;let[bg,Lt]=l(2048);Lt.fillStyle="#66695d",Lt.fillRect(0,0,2048,2048);for(let y=0;y<1250;y++)f(Lt,a()*2048,a()*2048,c(4,125),y%4?"34,31,21":"135,131,110",c(.035,.22));for(let y=0;y<160;y++){let R=y%4,D=R<2?(R?2048:0)+c(-45,90):a()*2048,O=R<2?a()*2048:(R===2?0:2048)+c(-45,90);f(Lt,D,O,c(60,190),"20,26,19",c(.15,.4))}for(let y=0;y<75;y++){let R=c(80,1968),D=c(80,1968),O=c(14,70);f(Lt,R,D,O*1.7,"57,35,15",c(.13,.35)),Lt.strokeStyle=`rgba(48,35,18,${c(.12,.36)})`,Lt.lineWidth=c(1,4),Lt.beginPath(),Lt.ellipse(R,D,O,O*c(.6,1.2),a()*Math.PI,0,Math.PI*c(1.1,2)),Lt.stroke()}Lt.lineCap="round";for(let y=0;y<340;y++){let R=c(100,1950),D=c(100,1950);Lt.save(),Lt.translate(R,D),Lt.rotate(a()*Math.PI*2),Lt.strokeStyle=`rgba(16,23,19,${c(.1,.3)})`,Lt.lineWidth=c(1,4),Lt.beginPath(),Lt.moveTo(0,0),Lt.quadraticCurveTo(c(15,50),c(-12,12),c(55,160),c(-20,20)),Lt.stroke(),Lt.restore()}for(let y=0;y<17;y++){let R=a()*2048,D=a()*2048;Lt.beginPath(),Lt.moveTo(R,D);for(let O=0;O<9;O++)R+=c(-20,25),D+=c(6,27),Lt.lineTo(R,D);Lt.strokeStyle="rgba(18,23,18,.42)",Lt.lineWidth=2.2,Lt.stroke()}for(let y=0;y<1900;y++){let R=a()*2048,D=a()*2048;Lt.strokeStyle=`rgba(167,163,137,${c(.03,.22)})`,Lt.lineWidth=c(.4,1.3),Lt.beginPath(),Lt.moveTo(R,D),Lt.lineTo(R+c(3,28),D+c(-5,5)),Lt.stroke()}m(Lt,2048,9e4,"16,22,15",.26),m(Lt,2048,3e4,"166,161,135",.2);let vf=h(bg);B.map=vf,B.bumpMap=vf,B.bumpScale=.006,B.needsUpdate=!0;let Qt=new be;Qt.name="Weathered entrance wall behind the viewer",Qt.position.z=4.48,Qt.rotation.y=Math.PI,t.add(Qt),H([7.8,3.35,.16],[0,1.675,-.08],M(10068367,.99,g),Qt),j(7.8,3.35,Qt).position.set(0,1.675,.004),H([7.8,.14,.045],[0,.07,.024],_,Qt),H([7.8,.026,.023],[0,2.87,.03],C,Qt);let[wg,Cn]=l(1024);for(let y=0;y<62;y++){let R=a()*1024,D=c(0,180);Cn.strokeStyle=`rgba(43,36,22,${c(.1,.32)})`,Cn.lineWidth=c(.5,5),Cn.beginPath(),Cn.moveTo(R,D),Cn.bezierCurveTo(R+6,D+80,R-4,D+170,R+c(-6,9),D+c(210,650)),Cn.stroke()}for(let y=0;y<21;y++){let R=a()*1024,D=a()*1024;Cn.beginPath();for(let O=0;O<12;O++){let k=O/12*Math.PI*2,q=c(9,27),he=R+Math.cos(k)*q,Ge=D+Math.sin(k)*q*1.7;O?Cn.lineTo(he,Ge):Cn.moveTo(he,Ge)}Cn.closePath(),Cn.fillStyle=y%3?"rgba(61,65,52,.75)":"rgba(149,144,118,.6)",Cn.fill()}for(let y=0;y<10;y++){let R=a()*1024,D=c(60,850);Cn.strokeStyle="rgba(28,34,26,.75)",Cn.lineWidth=.8,Cn.beginPath(),Cn.moveTo(R,D);for(let O=0;O<8;O++)R+=c(-9,12),D+=c(5,16),Cn.lineTo(R,D);Cn.stroke()}let _f=X(new Rt(7.8,3.35),new ze({map:h(wg),transparent:!0,depthWrite:!1,roughness:1}),Qt);_f.position.set(0,1.675,.007),_f.castShadow=!1;let _n=new be;_n.name="Scuffed service door and failing exit sign",_n.position.set(1.2,0,.05),Qt.add(_n);let Ha=M(6910824,.88,d,.22);H([1.12,2.34,.042],[0,1.17,0],_,_n),H([1.035,2.27,.048],[0,1.153,.022],Ha,_n);for(let y of[-.565,.565])H([.065,2.4,.1],[y,1.2,.035],C,_n);H([1.19,.065,.1],[0,2.4,.035],C,_n),H([1.1,.025,.13],[0,.016,.045],W,_n),H([.85,.28,.009],[0,.25,.052],M(7239276,.7,d,.55),_n);for(let y of[-1,1])for(let R of[.14,.35])Me([.008,.008,.003],[y*.39,R,.059],W,_n);H([.68,.73,.032],[0,1.69,.055],C,_n);let[Tg,Di]=l(512);Di.fillStyle="#293c39",Di.fillRect(0,0,512,512);for(let y=0;y<170;y++)f(Di,a()*512,a()*512,c(4,45),"7,14,11",c(.08,.3));Di.strokeStyle="rgba(100,118,105,.32)",Di.lineWidth=1.4;for(let y=-512;y<1024;y+=36)Di.beginPath(),Di.moveTo(y,0),Di.lineTo(y+512,512),Di.moveTo(y,0),Di.lineTo(y-512,512),Di.stroke();X(new Rt(.6,.65),new Wt({map:h(Tg),roughness:.32,clearcoat:.8,metalness:.12}),_n).position.set(0,1.69,.074),me([.36,.9,.095],[.36,1.05,.095],.017,W,_n),me([.36,1.03,.095],[.2,1.03,.12],.015,W,_n);for(let y of[.35,1.2,2.07])H([.07,.1,.034],[-.515,y,.064],C,_n),se(.012,.12,[-.53,y,.08],W,_n);function Er(y,R,D,O,k,q="#74796b",he="#d0cdb8"){let[Ge,tt]=l(512);Ge.height=128,tt.fillStyle=q,tt.fillRect(0,0,512,128),tt.fillStyle=he,tt.font="600 50px Arial,sans-serif",tt.textAlign="center",tt.fillText(y,256,82,470),m(tt,512,1500,"14,20,15",.2);let Ct=X(new Rt(R,D),new ze({map:h(Ge),roughness:.9}),O);return Ct.position.set(...k),Ct.castShadow=!1,Ct}Er("STAFF ONLY",.4,.1,_n,[0,1.12,.055]),H([.54,.21,.1],[0,2.66,.08],C,_n);let Fa=Er("EXIT  \u2192",.48,.15,_n,[0,2.66,.133],"#263b30","#a8b593");Fa.material.emissive.set(5994071),Fa.material.emissiveMap=Fa.material.map,Fa.material.emissiveIntensity=.25;let Ui=new be;Ui.name="Abandoned critique pinboard",Ui.position.set(-.95,1.94,.055),Ui.rotation.z=-.018,Qt.add(Ui);let Rg=M(8417362,.99,p);H([1.86,1.25,.045],[0,0,0],Rg,Ui);for(let y of[-.94,.94])H([.035,1.3,.055],[y,0,.01],C,Ui);for(let y of[-.64,.64])H([1.91,.035,.055],[0,y,.01],C,Ui);for(let y=0;y<7;y++){let R=-.68+y%4*.44,D=y<4?.28:-.26,O=Hl(y%2===0),k=X(new Rt(.35,.43),new ze({map:O,color:y%2?12170400:13026996,roughness:1,side:Ut}),Ui);k.position.set(R,D,.028+y%3*.001),k.rotation.z=c(-.1,.1),k.castShadow=!1,Me([.008,.008,.005],[R,D+.195,.039],y%2?_:M(7814963,.8),Ui);let q=H([.11,.033,.001],[R-.06,D+.2,.031],M(10001011,.98),Ui);q.rotation.z=c(-.2,.2)}Er("DESIGN / CRITIQUE",1.1,.1,Ui,[-.11,.56,.028],"#77765a","#252d27"),H([.94,.065,.13],[-.95,2.78,.11],C,Qt);let Mf=se(.013,.82,[-.95,2.741,.14],new _t({color:7572357}),Qt,12);Mf.rotation.z=Math.PI/2,Mf.castShadow=!1;let Oa=new ro(9611936,3.4,3.6,1,.85,2);Oa.position.set(-.95,2.72,.36),Oa.target.position.set(-1.12,1.35,.04),Qt.add(Oa,Oa.target);let Wl=cl({flies:7,moths:3,spread:[.48,.14,.22],seed:71,sizeScale:.5,dive:.22});Wl.group.position.set(-.95,2.52,.43),Qt.add(Wl.group);let ti=new be;ti.name="Damaged filing cabinets",ti.position.set(-1.12,0,.26),Qt.add(ti),H([1.52,.77,.028],[0,.385,-.2],Ha,ti),H([1.56,.035,.46],[0,.795,0],C,ti);for(let y of[-.745,0,.745])H([.025,.77,.43],[y,.385,0],Ha,ti);for(let y of[.018,.385])H([1.52,.025,.43],[0,y,0],C,ti);for(let y of[-.38,.38])for(let R of[.2,.56]){if(y<0&&R>.4)continue;let D=0;H([.71,.32,.025],[y,R,.231+D],C,ti),me([y-.1,R+.04,.26+D],[y+.1,R+.04,.26+D],.011,W,ti),H([.16,.055,.004],[y,R-.06,.248+D],T,ti),D&&(H([.68,.014,.35],[y,R-.16,.2],C,ti),H([.012,.28,.34],[y-.34,R,.2],C,ti))}let Ag=H([.47,.29,.36],[-1.3,.96,.29],M(11573869,.99,p),Qt);Ag.rotation.y=.14,Er("ARCHIVE",.25,.075,Qt,[-1.3,.97,.483],"#a49471","#3b3d30");let Cg=H([.5,.014,.19],[-1.3,1.116,.39],A,Qt);Cg.rotation.x=.2;let _s=new be;_s.name="Neglected network and electrical cabinet",_s.position.set(-2.96,1.6,.08),Qt.add(_s),H([.64,.97,.12],[0,0,0],C,_s),H([.56,.88,.014],[0,0,.066],_,_s);for(let y=0;y<4;y++)for(let R=0;R<5;R++)H([.072,.09,.035],[-.2+R*.1,.28-y*.16,.09],Ha,_s),H([.017,.035,.01],[-.2+R*.1,.28-y*.16,.113],y===1?T:_,_s);let Po=new be;Po.position.set(-.32,0,.06),Po.rotation.y=-.65,_s.add(Po),H([.62,.96,.025],[.31,0,0],C,Po),Er("CAUTION",.3,.1,Po,[.32,.26,.014],"#a08d52","#252b24");for(let y=0;y<4;y++)N([[-3.12+y*.08,2.1,.12],[-3.15+y*.08,2.5,.12],[-3.15+y*.08,2.88,.12],[-2.1+y*.08,2.88,.12]],.012,C,Qt);for(let y=0;y<6;y++)N([[-3.18+y*.08,1.15,.16],[-3.2+y*.06,.71,.21],[-3.13+y*.1,.32,.17],[-2.85+y*.06,.15,.3]],.005,y%2?_:M(5858907,.9),Qt);H([.2,.13,.022],[2.2,.35,.047],T,Qt),H([.11,.085,.025],[2.2,.35,.065],_,Qt),N([[2.2,.35,.09],[2.24,.12,.13],[2.47,.023,.28],[2.9,.023,.42],[3.1,.023,.3]],.007,_,Qt);let Ni=new be;Ni.name="Dusty fire extinguisher",Ni.position.set(2.16,.25,.17),Qt.add(Ni);let Xl=M(8271401,.78,d,.23);se(.095,.42,[0,.25,0],Xl,Ni,24),Me([.095,.065,.095],[0,.47,0],Xl,Ni),Me([.093,.045,.093],[0,.04,0],Xl,Ni),H([.11,.025,.055],[.015,.56,0],_,Ni),me([0,.51,0],[0,.57,0],.018,W,Ni),N([[.035,.52,0],[.12,.47,.02],[.13,.19,.06]],.012,_,Ni),Er("FIRE",.12,.14,Ni,[0,.27,.097],"#b4ac8c","#33382d"),n.push(we,_e,Be,dt,si,fn,Le,Je.group,Yn,vi,ti,Ni);for(let y of n)ur(y,kn);for(let y of[We,Oe]){let R=y.getObjectByName("Monitor power cable");y.remove(R),R.geometry.dispose();let D=y.localToWorld(new w(.1,.23,-.05)),O=D.x,k=D.z,q=N([D.toArray(),[O+.09,Math.max(kn(O+.09,k+.1)+.008,D.y*.45),k+.1],[O+.2,kn(O+.2,k+.2)+.007,k+.2],[O+.38,kn(O+.38,k+.11)+.007,k+.11]],.006,_);q.userData.ignoreFloorContact=!0,q.userData.anchorStart=!0}for(let y of s)ol(y,kn);t.add(w0(e,kn));let qs=S0();qs.group.userData.ignoreAcid=!0,t.add(qs.group);let Ef=H0({valves:qs.valves,floorSupport:kn});t.add(Ef.group);let Sf=L0({filing:ti,laptop:Jd,floorSupport:kn,drawerMaterial:C});t.add(Sf.group);let ql=U0({bottle:pg,contents:dg,cap:To,floorSupport:kn});t.add(ql.group);let bf=P0({room:t,floorSupport:kn,viewerPosition:e});t.add(bf.group);function Pg(y){et.setEnvironment(y),ue.setEnvironment(y),qs.setEnvironment(y),Aa.setEnvironment(y)}let wf=-1/0;function Ig(y,R,D=e){ql.update(y,R);let O=Aa.update(y,R);return y-wf>=1/Ht.effectsHz&&(wf=y,bf.update(y,R,D),qs.update(y,R),Fl.update(y,R,O),Wl.update(y,R,.65),Ol.update(y,R,.78)),O}return{group:t,laptop:Jd,catMug:$i,acidLeaks:Ef,chargingKit:Sf,ketchupKey:ql,countdown:Je,setDisplayEnvironment:Pg,update:Ig,figpalHoists:qs,toggleHoist:qs.toggleHoist}}var fa=["Nooo!!!!","Tell my wife that I love her!","Delete my browser history!"],Md=["help","I have a family","I swear I didn't detach the component!"];function O0(i,e,t=Math.random){let n=18,s=-1,r=Math.floor(t()*Md.length);return{update(o,a=!1){if(o<n)return!1;if(a||e.isActive(o))return n=o+2,!1;let c=[0,1,2].filter(h=>i.isHanging(h));if(!c.length)return n=o+2,!1;c.length>1&&(c=c.filter(h=>h!==s));let l=c[Math.floor(t()*c.length)];return e.show(l,o,Md[r],6),s=l,r=(r+1)%Md.length,n=o+20+t()*15,!0},reset(o=0){n=o+18,s=-1}}}function B0(i){let e=null;return{update(t,n){return t!=="finished"||e!==null?!1:(e=n,i.lowerAll(),!0)},reset(){e!==null&&i.reset(),e=null},get active(){return e!==null},elapsed(t){return e===null?-1:Math.max(0,t-e)}}}function z0(i,e,t=()=>!0){let n=document.querySelector("#figpal-dialogues"),s=fa.map((u,g)=>{let x=document.createElement("div");x.className="figpal-speech",x.hidden=!0,x.dataset.figpal=String(g+1);let p=document.createElement("span");p.className="figpal-speech-text",p.textContent=u;let d=document.createElementNS("http://www.w3.org/2000/svg","svg");d.classList.add("figpal-speech-tail"),d.setAttribute("aria-hidden","true");let E=document.createElementNS("http://www.w3.org/2000/svg","path");return d.append(E),x.append(p,d),n.append(x),x}),r=new w,o=s.map(()=>null),a=s.map(()=>15);function c(u,g,x=fa[u],p=15){if(s[u]){if(!t(u)){f(u);return}o[u]=g,a[u]=p,s[u].children[0].textContent=x}}function l(u){return o.some((g,x)=>t(x)&&g!==null&&u>=g&&u<g+a[x])}function h(u){for(let g=0;g<s.length;g++)c(g,u)}function f(u){if(Number.isInteger(u)){s[u]&&(o[u]=null,s[u].hidden=!0);return}n.hidden=!0;for(let g=0;g<s.length;g++)o[g]=null,s[g].hidden=!0}function m(u,g){n.hidden=!1;let x=e.getBoundingClientRect(),p=0;for(let d=0;d<i.length;d++){if(!t(d)){f(d);continue}let E=s[d],v=o[d]===null?-1:g-o[d],M=a[d];if(v<0||v>=M){E.hidden=!0,v>=M&&(o[d]=null);continue}if(E.style.opacity=String(1-je.smoothstep(v,M-1,M)),i[d].getWorldPosition(r),r.y=Math.max(r.y,1.32),r.project(u),r.z<-1||r.z>1||Math.abs(r.x)>1.04||Math.abs(r.y)>1.1){E.hidden=!0;continue}E.hidden=!1;let L=x.left+(r.x*.5+.5)*x.width,A=x.top+(-r.y*.5+.5)*x.height;E.style.transform=`translate3d(${L}px,${A-14}px,0) translate(-50%,-100%)`;let T=E.offsetWidth/2;E.querySelector("path").setAttribute("d",`M ${T-5} 0 L ${T+6} 0 L ${T} 15 Z`),p++}n.hidden=p===0}return f(),{update:m,hide:f,show:c,showAll:h,isActive:l}}var ms=i=>(i=Math.max(0,Math.min(1,i)),i*i*(3-2*i));function k0({canDetach:i=()=>!0}={}){let e=!0,t=-1/0,n=-1/0,s=!1,r=-1/0;return{get locked(){return e},requestReach(o){return o-t<1.65||!e&&o-n<.85?!1:(t=o,r=o+5.2,s=!e,!0)},detach(o){return!e||!i()?!1:(e=!1,n=o,r=o+2.4,s=!1,!0)},endReach(){r=-1/0,s=!1},sample(o,a=!1){a&&Number.isFinite(t)&&(r=Math.max(r,o+.8));let c=o-t,l=c<.52?ms(c/.52):c<.86?1:1-ms((c-.86)/.79),h=!1;!e&&s&&c>=.55&&(h=!0,s=!1);let f=o-n,m=e?0:ms(f/.14),u=e?0:ms((f-.12)/.42),g=e?0:ms((f-.56)/.28),x=e?0:ms((f-.9)/.65),p=o<r,d=p?Math.min(ms(c/.24),ms((r-o)/.45)):0;return{locked:e,reach:l,visible:p,reveal:d,releaseElapsed:f,unlatch:m,hingeOpen:u,handFree:g,cuffDrop:x,release:e?0:ms((o-n)/.85),strain:e&&c>.45&&c<.86?Math.sin(c*64)*.003:0,openLaptop:h}},reset(){e=!0,t=-1/0,n=-1/0,s=!1,r=-1/0}}}var V0=new w(0,1,0);function G0(i,e={}){let t=new be;t.name="Player forearm chained to the rear pipes";let n=new be;n.name="Camera-relative reaching hand",t.add(n);let s=k0(e),r=new Zt(1,24,16),o=new Ei(new Uint8Array([75,145,205,255]),4,1,ua);o.minFilter=o.magFilter=Wn,o.generateMipmaps=!1,o.needsUpdate=!0;let a=new qc({color:13871751,gradientMap:o,emissive:6832947,emissiveIntensity:.025}),c=new _t({color:2104345,side:mn}),l=mi(10857122),h=mi(12568e3),f=new ze({color:1382166,roughness:.9}),m=new _t({transparent:!0,opacity:0,depthWrite:!1,colorWrite:!1});function u(Ye,Be,ke=n){let it=new ut(Ye,Be);return it.castShadow=!0,it.receiveShadow=!0,ke.add(it),it}function g(Ye,Be,ke,it=a){let nt=u(r,it,Ye);return nt.position.set(...Be),nt.scale.set(...ke),nt}function x(Ye,Be,ke,it,nt){Be=new w(...Be),ke=new w(...ke);let ot=ke.clone().sub(Be),Et=u(new qt(it,it,ot.length(),20),nt,Ye);return Et.position.copy(Be).add(ke).multiplyScalar(.5),Et.quaternion.setFromUnitVectors(V0,ot.normalize()),Et}function p(Ye,Be,ke,it){return u(new cn(new Gt(Be.map(nt=>new w(...nt))),24,ke,7,!1),it,Ye)}let d=new be;d.name="Cartoon forearm and right hand",n.add(d);function E(Ye,Be=.002){let ke=Ye.geometry.clone(),it=ke.attributes.position,nt=ke.attributes.normal;for(let Et=0;Et<it.count;Et++)it.setXYZ(Et,it.getX(Et)+nt.getX(Et)*Be,it.getY(Et)+nt.getY(Et)*Be,it.getZ(Et)+nt.getZ(Et)*Be);it.needsUpdate=!0,ke.computeBoundingSphere();let ot=new ut(ke,c);ot.name="Ink silhouette",ot.raycast=()=>{},Ye.add(ot)}function v(Ye,Be,ke=28){let it=Be.map(([hn,yn,dt,At,Un])=>({z:hn,x:yn,y:dt,rx:At,ry:Un})),nt=[],ot=[],Et=[];for(let hn=0;hn<it.length;hn++){let yn=it[hn];for(let dt=0;dt<=ke;dt++){let At=dt/ke*Math.PI*2,Un=Math.cos(At),un=Math.sin(At);if(nt.push(yn.x+yn.rx*Un,yn.y+yn.ry*un,yn.z),ot.push(dt/ke,hn/(it.length-1)),hn&&dt){let zn=hn*(ke+1)+dt;Et.push(zn,zn-ke-2,zn-1,zn,zn-ke-1,zn-ke-2)}}}let Xt=new Nt;Xt.setAttribute("position",new ct(nt,3)),Xt.setAttribute("uv",new ct(ot,2)),Xt.setIndex(Et),Xt.computeVertexNormals();let rn=u(Xt,a,Ye);return E(rn),rn}let M=v(d,[[0,0,0,.074,.058],[-.18,.004,0,.073,.056],[-.42,.008,.003,.069,.052],[-.7,.006,.002,.061,.047],[-1,0,0,.054,.042]],40);M.name="Upper arm";let L=g(d,[0,0,0],[.056,.046,.052]);L.name="Bent elbow";let A=v(d,[[0,0,0,.054,.042],[-.12,.004,.002,.058,.043],[-.3,.01,.004,.057,.041],[-.52,.012,.004,.051,.036],[-.73,.008,.002,.044,.03],[-.9,.003,0,.039,.027],[-1,0,0,.038,.026]],40);A.name="Tapered forearm";let T=new be;T.name="Cartoon right hand",d.add(T),v(T,[[.025,0,0,.037,.025],[0,0,0,.04,.026],[-.03,-.005,0,.059,.036],[-.066,-.005,0,.071,.04],[-.108,-.002,-.002,.071,.037],[-.14,.002,-.003,.065,.031],[-.16,.004,-.004,.051,.022],[-.17,.004,-.004,.006,.004]],40);let C=[];for(let[Ye,Be,ke,it]of[[0,-.056,.12,.19],[1,-.018,.136,.055],[2,.023,.128,-.08],[3,.06,.1,-.23]]){let nt=new be;nt.position.set(Be,-.002,-.137+(Ye===3?.013:0)),nt.rotation.y=it,T.add(nt),C.push(nt);let ot=Ye===3?.0175:.02;v(nt,[[.014,0,0,ot*.92,ot*.9],[0,0,0,ot,ot],[-ke*.22,0,-.002,ot,ot*.98],[-ke*.48,0,-.005,ot*.96,ot*.94],[-ke*.7,0,-.009,ot*.92,ot*.9],[-ke*.84,0,-.012,ot*.86,ot*.84],[-ke*.94,0,-.014,ot*.64,ot*.64],[-ke*.985,0,-.014,ot*.3,ot*.3],[-ke,0,-.014,3e-4,3e-4]]),nt.userData.spread=it}let J=new Dt;J.name="Lid contact fingertip",J.position.set(0,-.014,-.136),C[1].add(J);let _=new be;_.position.set(-.049,-.008,-.041),_.rotation.y=.88,_.rotation.z=-.26,T.add(_),v(_,[[.018,0,0,.033,.03],[0,0,0,.032,.03],[-.027,-.003,0,.029,.027],[-.051,-.005,.002,.026,.025],[-.072,-.006,.002,.025,.024],[-.089,-.006,.001,.021,.02],[-.101,-.006,0,.012,.012],[-.107,-.006,0,3e-4,3e-4]]);let b=new be;b.name="Wrist cuff and chain \u2014 right-click to detach",b.userData.playerChain=!0,n.add(b);let B=new be;B.name="Close-fitting oval wrist cuff",b.add(B);let W=-.044;function X(Ye,Be,ke){let it=new vt;it.absellipse(0,0,.047,.034,Ye,Be,!1),it.lineTo(Math.cos(Be)*.0405,Math.sin(Be)*.028),it.absellipse(0,0,.0405,.028,Be,Ye,!0),it.closePath();let nt=new sn(it,{depth:.03,bevelEnabled:!0,bevelSize:8e-4,bevelThickness:8e-4,bevelSegments:2,curveSegments:32}),ot=u(nt,l,ke);return ot.position.z=-.015,ot}let H=X(Math.PI,Math.PI*2,B);H.name="Fixed lower cuff";let ee=new be;ee.name="Hinged upper cuff",ee.position.x=W,B.add(ee);let Me=X(0,Math.PI,ee);Me.position.x=-W,x(B,[W,0,-.023],[W,0,.023],.0055,h);for(let Ye of[-.021,.021])g(B,[W,0,Ye],[.0065,.0065,.002],h);u(new bt(.013,.016,.033),l,B).position.set(.046,-.007,0);let me=new be;me.name="Spring-loaded locking clip",me.position.set(.045-W,.008,0),ee.add(me),u(new bt(.009,.021,.025),h,me).position.set(.003,-.008,0),g(me,[.008,-.006,.006],[.0018,.004,.0015],f);let Q=u(new $t(.01,.0032,8,20),h,B);Q.position.set(.051,-.019,0),Q.rotation.y=Math.PI/2;let ie=u(new qt(.06,.06,.07,16),m,B);ie.rotation.x=Math.PI/2,ie.castShadow=!1;let j=new be;j.name="Rusted rear pipe anchoring the wrist chain",t.add(j),p(j,[[3.3,.13,4.16],[3.3,.42,4.16],[3.3,2.16,4.16],[3.27,2.32,4.16],[2.78,2.34,4.16]],.045,l);for(let Ye of[.3,1.25,2.08]){u(new bt(.2,.16,.025),l,j).position.set(3.3,Ye,4.37);for(let it of[3.23,3.37]){x(j,[it,Ye,4.35],[it,Ye,4.14],.008,h);let nt=u(new qt(.017,.017,.018,6),h,j);nt.rotation.x=Math.PI/2,nt.position.set(it,Ye,4.12)}let ke=u(new $t(.058,.01,8,32),h,j);ke.rotation.x=Math.PI/2,ke.position.set(3.3,Ye,4.16)}let F=new w(3.3,.28,4.1),ae=new w,z=u(new $t(.055,.009,8,24),h,j);z.position.set(3.3,.28,4.1),z.rotation.y=Math.PI/2;let V=[];for(let Ye=0;Ye<48;Ye++){let Be=Ye/48*Math.PI*2;V.push(new w(Math.cos(Be)*.015,Math.sin(Be)*.025,0))}let Y=new cn(new Gt(V,!0),48,.0045,7,!0),pe=new gn(Y,h,360);pe.name="Heavy interlocking wrist chain",pe.castShadow=!0,pe.receiveShadow=!0,pe.frustumCulled=!1,b.add(pe);let ve=new gn(new Zt(1,8,6),m,360);ve.frustumCulled=!1,b.add(ve);let fe=new w,$=new w,I=new w,Ee=new w,re=new w,ue=new w,xe=new Dt,Ie=new w(.29,-.36,-.73),Ae=new w(.45,-.65,-.5),U=new w(.15,-.31,-.77),S=new w(-.08,-.32,-.83),K=new w,ge=new w(.43,-.66,-.54),we=new w(.22,-.68,-.58),_e=new w(.12,-.34,-.05),We=new w(0,0,-1),Oe=new w,qe=new w,mt=new yt,De=new yt,Z=!1,ye=new w,Pe=new w,Ce=new w,Te=new w,ce=new yt,Ve=new yt,G=3,Re=new w(1,0,0),oe=Array.from({length:49},()=>new w);function Se(Ye,Be,ke){return ke.copy(Ee).lerp(ae,Ye),ke.addScaledVector(Re,Math.sin(Math.PI*Ye)*Be),ke.y-=Math.sin(Math.PI*Ye)*Be*.9,K.copy(ke),n.localToWorld(K),K.y=Math.max(.032,K.y),n.worldToLocal(K),ke.copy(K),ke}function Ue(){let Ye=0,Be=1.5;for(let ot=0;ot<9;ot++){let Et=(Ye+Be)/2,Xt=0;for(let rn=0;rn<oe.length;rn++)Se(rn/(oe.length-1),Et,oe[rn]),rn&&(Xt+=oe[rn].distanceTo(oe[rn-1]));Xt>G?Be=Et:Ye=Et}let ke=new Gt(oe),it=ke.getLength(),nt=Math.min(360,Math.max(2,Math.ceil(it/.038)));pe.count=ve.count=nt;for(let ot=0;ot<nt;ot++){let Et=ot/(nt-1);ke.getPointAt(Et,xe.position),ke.getTangentAt(Et,ue),xe.quaternion.setFromUnitVectors(V0,ue),ot%2&&xe.rotateY(Math.PI/2),xe.scale.set(1,1,1),xe.updateMatrix(),pe.setMatrixAt(ot,xe.matrix),xe.scale.set(.032,.026,.032),xe.updateMatrix(),ve.setMatrixAt(ot,xe.matrix)}pe.instanceMatrix.needsUpdate=!0,ve.instanceMatrix.needsUpdate=!0}function Fe(Ye,Be=!1,ke=!1,it=null){let nt=s.sample(Ye,ke),ot=nt.reach;n.position.copy(i.position),n.quaternion.copy(i.quaternion);let Et=Math.tan(je.degToRad(i.fov/2))/Math.tan(je.degToRad(62/2));if(n.scale.set(Et,Et,1),n.updateWorldMatrix(!0,!1),n.visible=nt.visible,!nt.visible)return nt.openLaptop;ae.copy(F),n.worldToLocal(ae);let Xt=it?it.reveal:Be?1:nt.reveal,rn=(1-Xt)*.55;fe.copy(Ie).lerp(nt.locked?U:S,ot),nt.locked&&(fe.y+=Be?0:nt.strain),$.copy(Ae).lerp(nt.locked?ge:we,ot);let hn=!nt.locked&&nt.releaseElapsed<1.8&&Z,yn=Be&&!nt.locked?1:nt.hingeOpen,dt=Be&&!nt.locked?1:nt.cuffDrop;if(hn){fe.copy(Oe),$.copy(qe);let At=Be?1:nt.handFree;fe.y+=At*.055,fe.z+=At*.025}if(fe.y-=rn,$.y-=rn,re.copy($).sub(fe).setLength(.35),$.copy(fe).add(re),I.copy($).add(_e),M.position.copy(I),re.copy($).sub(I),M.quaternion.setFromUnitVectors(We,re.clone().normalize()),M.scale.z=re.length(),A.position.copy($),re.copy(fe).sub($),A.quaternion.setFromUnitVectors(We,re.clone().normalize()),A.scale.z=.35,L.position.copy($),L.quaternion.copy(A.quaternion),T.position.copy(fe),T.quaternion.copy(A.quaternion),T.rotateX(-.12+ot*.08),T.rotateY(.13-ot*.06),T.rotateZ(-.04),hn&&T.quaternion.slerp(mt,1-nt.handFree),C.forEach((At,Un)=>{At.rotation.x=-.06+(1-ot)*(.11+Un*.015)}),_.rotation.x=0,_.rotation.y=.88,it){let At=it.blend,Un=it.grip,un=it.gripKind==="handle";C.forEach((si,fn)=>{si.rotation.x=je.lerp(si.rotation.x,(un?-.96:-.46)+(fn===0?.08:0),Un),si.rotation.y=je.lerp(si.userData.spread,si.userData.spread*.3,Un)}),_.rotation.x=.28*Un,_.rotation.y=.88-.28*Un,C[1].updateMatrix(),un?Pe.set(0,-.008,-.18):Pe.copy(J.position).applyMatrix4(C[1].matrix),Ve.copy(i.quaternion).invert(),ce.copy(Ve).multiply(it.quaternion),ye.copy(it.position),n.worldToLocal(ye),Ce.copy(ye).sub(Pe.applyQuaternion(ce)),T.position.lerp(Ce,At),T.quaternion.slerp(ce,At);let zn=Math.min(.62,Math.max(.38,-T.position.z*.72));Te.set(T.position.x+.18,-zn*Math.tan(je.degToRad(31))-.15,-zn),$.lerp(Te,At),fe.copy(T.position),I.copy($).add(_e),M.position.copy(I),re.copy($).sub(I),M.quaternion.setFromUnitVectors(We,re.clone().normalize()),M.scale.z=re.length(),A.position.copy($),re.copy(fe).sub($),A.quaternion.setFromUnitVectors(We,re.clone().normalize()),A.scale.z=re.length(),L.position.copy($),L.quaternion.copy(A.quaternion)}else C.forEach(At=>{At.rotation.y=At.userData.spread});return nt.locked?(B.position.copy(fe),B.quaternion.copy(T.quaternion),ee.rotation.z=0,me.rotation.z=0):(B.position.copy(Oe),B.position.y-=rn+dt*.32,B.position.x+=dt*.08,B.quaternion.copy(De),B.rotateX(dt*.8),B.rotateZ(dt*.42),ee.rotation.z=yn*1.95,me.rotation.z=-(Be?1:nt.unlatch)*.85),B.updateMatrix(),Ee.set(.051,-.019,0).applyMatrix4(B.matrix),G=Ee.distanceTo(ae)+(nt.locked?.24*(1-ot)+.018:.42),Ue(),nt.openLaptop}function lt(Ye){return s.locked?(Oe.copy(fe),qe.copy($),mt.copy(T.quaternion),De.copy(B.quaternion),Z=!0,s.detach(Ye)):!1}function Pt(){s.reset(),Z=!1,ee.rotation.z=0,me.rotation.z=0,Fe(0,!0)}return Fe(0,!0),{group:t,target:b,state:s,update:Fe,reset:Pt,endReach:()=>s.endReach(),setEnvironment(Ye){for(let Be of[l,h])Be.envMap=Ye,Be.envMapIntensity=1.15,Be.needsUpdate=!0},get locked(){return s.locked},requestReach:Ye=>s.requestReach(Ye),detach:lt}}function W0(i,{canDetach:e=()=>!0,onBlocked:t=()=>{}}={}){let n=document.querySelector("#chain-menu"),s=n.querySelector("button"),r=document.querySelector("#scene");function o(l=!1){n.hidden=!0,l&&r.focus({preventScroll:!0})}function a(l,h){s.setAttribute("aria-disabled",String(!e())),s.title=e()?"Unlock the shackle with the key":"Find the shackle key first",n.hidden=!1,n.style.left=`${Math.max(8,Math.min(l,innerWidth-n.offsetWidth-8))}px`,n.style.top=`${Math.max(8,Math.min(h,innerHeight-n.offsetHeight-8))}px`,s.focus({preventScroll:!0})}function c(){if(!e()){t();return}o(!0),i()}return s.addEventListener("click",c),n.addEventListener("contextmenu",l=>l.preventDefault()),document.addEventListener("pointerdown",l=>{!n.hidden&&!n.contains(l.target)&&o()},!0),document.addEventListener("keydown",l=>{n.hidden||(l.code==="Escape"?(l.preventDefault(),l.stopPropagation(),o(!0)):l.code==="KeyB"&&l.altKey&&l.metaKey&&!l.ctrlKey&&!l.shiftKey&&(l.preventDefault(),l.stopPropagation(),l.repeat||c()))},!0),window.addEventListener("blur",()=>o()),{show:a,hide:o,get active(){return!n.hidden}}}function X0(i,e){let t=i.match(/[\p{L}\p{N}'’]+[^\p{L}\p{N}'’]*/gu)||[],n=[],s=.1;for(let r of t){let o=r.replace(/[^\p{L}\p{N}'’]/gu,""),a=(o.toLowerCase().replace(/e$/,"").match(/[aeiouy]+/g)||[]).length,c=Math.max(1,Math.min(4,a)),l=.24+Math.min(o.length,10)*.025+(c-1)*.09;for(let h=0;h<c;h++){let f=l/c;n.push({start:s+h*f,end:s+(h+.87)*f,amount:.78+Math.min(o.length,6)*.025})}s+=l+(/[.!?…]/u.test(r)?.4:/[,;:]/.test(r)?.24:.11)}return{startTime:e,cues:n,duration:s}}function q0(i,e){if(!i)return 0;let t=e-i.startTime;for(let n of i.cues){if(t<n.start)return 0;if(t<=n.end){let s=(t-n.start)/(n.end-n.start),r=Math.min(1,s/.22),o=Math.min(1,(1-s)/.35),a=Math.min(r,o);return n.amount*a*a*(3-2*a)}}return 0}var Ed={position:[1.85221,.821615,3.1149],lookAt:[1.155084,.748275,2.401713],fov:48.36},IM=i=>je.euclideanModulo(i+Math.PI,Math.PI*2)-Math.PI;function Y0(i){let e=new w(...Ed.position),t=new w(...Ed.lookAt).sub(e).normalize(),n={yaw:Math.atan2(-t.x,-t.z),pitch:Math.asin(t.y),zoom:Ed.fov/i},s=null;return{start(r,o,a){s={time:r,position:o.clone(),yaw:a.yaw,pitch:a.pitch,zoom:a.zoom}},cancel(){s=null},get active(){return s!==null},update(r,o,a,c=!1){if(!s)return;let l=c?1:je.clamp((r-s.time)/1.4,0,1),h=l*l*(3-2*l);o.lerpVectors(s.position,e,h),a.yaw=s.yaw+IM(n.yaw-s.yaw)*h,a.pitch=je.lerp(s.pitch,n.pitch,h),a.zoom=je.lerp(s.zoom,n.zoom,h),l===1&&(o.copy(e),Object.assign(a,n),s=null)}}}var gs=(i,e,t)=>je.smootherstep(i,e,t),Z0=i=>je.euclideanModulo(i+Math.PI,Math.PI*2)-Math.PI;function $0({laptop:i,restraint:e,cameraPosition:t,state:n}){let s=null,r=new w,o=new w,a=new w,c=new w,l=new yt,h=new yt,f=new ni,m=0,u=0,g=0,x=0,p={position:new w,quaternion:new yt,blend:0,grip:0,reveal:0};function d(M){return s!==null||e.locked||i.isOpen||!e.requestReach(M)?!1:(s=M,r.copy(t),m=n.yaw,u=n.pitch,i.object.updateWorldMatrix(!0,!1),i.object.localToWorld(o.set(.16,.87,1.12)),i.object.localToWorld(a.set(0,.46,0)),c.copy(a).sub(o).normalize(),g=Math.atan2(-c.x,-c.z),x=Math.asin(c.y),p.blend=p.grip=p.reveal=0,!0)}function E(M,L=!1){if(s===null)return!1;let A=M-s;if(L)return i.setOpenProgress(1),e.endReach(),s=null,!0;let T=gs(A,0,.7)*(1-gs(A,2.7,3.4));t.lerpVectors(r,o,T),n.yaw=Z0(m+Z0(g-m)*T),n.pitch=je.lerp(u,x,T);let C=gs(A,.96,2.21);return i.setOpenProgress(C),i.getLidGrip(p.position),i.object.getWorldQuaternion(l),h.setFromEuler(f.set(-.1-.28*C,0,-.1)),p.quaternion.copy(l).multiply(h),p.blend=gs(A,0,.8)*(1-gs(A,2.38,3.02)),p.grip=gs(A,.7,.92)*(1-gs(A,2.21,2.38)),p.reveal=gs(A,0,.18)*(1-gs(A,2.64,3.12)),A<3.4?!1:(t.copy(r),n.yaw=m,n.pitch=u,e.endReach(),s=null,!0)}function v(){s!==null&&(t.copy(r),n.yaw=m,n.pitch=u,e.endReach(),s=null)}return{start:d,update:E,cancel:v,get active(){return s!==null},get handPose(){return s===null?null:p}}}var fr=(i,e,t)=>je.smootherstep(i,e,t);function K0({mug:i,camera:e,restraint:t}){let n=i.position.clone(),s=i.quaternion.clone(),r=new w,o=new yt,a=new w,c=new yt,l=new w,h=new w,f=new w,m=new yt,u=new yt,g=new yt,x=new yt,p=new yt().setFromEuler(new ni(0,Math.PI/2,-.12)),d={position:new w,quaternion:new yt,blend:0,grip:0,reveal:0,gripKind:"handle"},E=null,v=!1,M=0;function L(C){return t.locked||E!==null||v||!t.requestReach(C)?!1:(i.updateWorldMatrix(!0,!1),i.getWorldPosition(r),i.getWorldQuaternion(o),e.updateWorldMatrix(!0,!1),e.getWorldPosition(a),e.getWorldQuaternion(c),l.set(.03,-.25,-.52).applyQuaternion(c).add(a),h.set(0,-.082,-.205).applyQuaternion(c).add(a),E=C,M=0,d.blend=d.grip=d.reveal=0,!0)}function A(C,J=!1){if(E===null||v)return!1;let _=C-E;if(J){if(M=fr(_,.15,.45),_<.6)return!1}else{let b=fr(_,.82,2.12),B=fr(_,2.28,3.36);if(f.lerpVectors(r,l,b),f.y+=Math.sin(Math.PI*b)*.13,f.lerp(h,B),x.setFromAxisAngle(new w(1,0,0),.82*B),u.copy(c).multiply(x),m.slerpQuaternions(o,u,b),i.position.copy(f),i.parent.worldToLocal(i.position),i.parent.getWorldQuaternion(g),i.quaternion.copy(g.invert()).multiply(m),i.updateWorldMatrix(!0,!1),i.localToWorld(d.position.set(.235,0,0)),d.quaternion.copy(m).multiply(p),d.blend=fr(_,0,.72),d.grip=fr(_,.48,.8),d.reveal=fr(_,0,.22),M=fr(_,3.26,3.52),_<3.72)return!1}return v=!0,M=1,t.endReach(),!0}function T(){E=null,v=!1,M=0,i.position.copy(n),i.quaternion.copy(s),i.updateWorldMatrix(!0,!1),d.blend=d.grip=d.reveal=0,t.endReach()}return{start:L,update:A,reset:T,get active(){return E!==null&&!v},get finished(){return v},get blackout(){return M},get handPose(){return E!==null&&!v?d:null}}}var pt=document.querySelector("#scene"),LM=pt.getAttribute("aria-label"),Ai=matchMedia("(prefers-reduced-motion: reduce)").matches,Mo={position:[1.85221,.821615,3.1149],lookAt:[1.293346,.717709,2.292176],fov:62},Bs=new w(...Mo.position),Sd=new w(...Mo.lookAt).sub(Bs).normalize(),Fs={yaw:Math.atan2(-Sd.x,-Sd.z),pitch:Math.asin(Sd.y)},Qe={yaw:Fs.yaw,pitch:Fs.pitch,zoom:1,jaw:0,space:!1,time:0,talkUntil:0},Tn=new Uc({canvas:pt,antialias:!Ht.mobile,alpha:!1,powerPreference:"high-performance"});Tn.setPixelRatio(Ht.pixelRatio);Tn.localClippingEnabled=!0;Tn.shadowMap.enabled=!0;Tn.shadowMap.autoUpdate=!1;Tn.shadowMap.type=Ju;Tn.outputColorSpace=ft;Tn.toneMapping=Qu;Tn.toneMappingExposure=.76;var yi=new Hc;yi.background=new ht(1449240);yi.fog=new Nc(2305314,11,26);var Sa=u0(Tn,yi),Jt=new Nn(Mo.fov,1,.06,35),Fn=Bs.clone(),Jn=Y0(Mo.fov),J0=new w,Q0=new w,bd=new w,DM=new Zc(9545120,2370600,.62);yi.add(DM);var mm=17.5,qi=new ro(12898992,mm,12,1.25,.72,2);qi.position.set(.22,2.83,-.55);qi.target.position.set(0,0,-.1);qi.castShadow=!0;qi.shadow.mapSize.set(Ht.shadowSize,Ht.shadowSize);qi.shadow.camera.near=.1;qi.shadow.camera.far=11;qi.shadow.normalBias=.0025;qi.shadow.bias=-5e-5;yi.add(qi,qi.target);var Pi=new $c(10269877,.85);Pi.position.set(6.2,4.1,-1.6);Pi.target.position.set(-1,.35,-.3);Pi.castShadow=!Ht.mobile;Pi.shadow.mapSize.set(1024,1024);Pi.shadow.camera.left=-6;Pi.shadow.camera.right=6;Pi.shadow.camera.top=5;Pi.shadow.camera.bottom=-5;Pi.shadow.normalBias=.003;Pi.shadow.bias=-6e-5;yi.add(Pi,Pi.target);var gm=new Hn(9348772,2.2,10,2);gm.position.set(-1,2.6,4);yi.add(gm);var Ci=je.lerp;function ts(i,e=.9){return new ze({color:i,roughness:e})}function Dn(i,e,t=yi){let n=new ut(i,e);return n.castShadow=!0,n.receiveShadow=!0,t.add(n),n}function zs(i,e,t,n,s=3){let r=Dn(new Xc(1,s),typeof e=="string"||typeof e=="number"?ts(e):e,i);return r.position.set(...t),r.scale.set(...n),r}function Eo(i,e,t,n,s=!1){let r=new Gt(i.map(o=>o.isVector3?o:new w(...o)),s);return Dn(new cn(r,Math.max(24,i.length*2),e,8,s),t,n)}function UM(){let i=document.createElement("canvas");i.width=i.height=1024;let e=i.getContext("2d"),t=2718,n=()=>(t=t*1664525+1013904223>>>0,t/4294967296),s=([l,h])=>[(l+2)/4*i.width,(1-h/3)*i.height];function r(l,h,f=["rgba(211,12,57,.66)","rgba(227,17,62,.50)"]){let m=l.map(s);e.lineCap="round",e.lineJoin="round";for(let u=0;u<3;u++){e.strokeStyle=f[u===0?0:1];for(let g=1;g<m.length;g++){let x=Math.sin(g*1.37+u)*.08+Math.sin(g*.42)*.1;e.lineWidth=h*i.width/4*(1+x)*(u===0?1.13:.77);let p=(n()-.5)*1.5,d=(n()-.5)*1.5;e.beginPath(),e.moveTo(m[g-1][0]+p,m[g-1][1]+d),e.lineTo(m[g][0]+p,m[g][1]+d),e.stroke()}}}let o=[];for(let l=0;l<=140;l++){let h=l/140,f=Ci(-1.65,1.23,h),m=.16*Math.exp(-Math.pow((f+1.65)/.26,2))+.06*Math.pow(Math.max(0,(f-.42)/.81),2);o.push([f,1.45-m+.006*Math.sin(h*12)])}r(o,.075,["rgba(23,25,24,.98)","rgba(23,25,24,.94)"]);let a=[];for(let l=0;l<=80;l++){let h=l/80;a.push([Ci(-.68,.42,h),1.452+.009*Math.sin(h*15)+.012*Math.sin(h*7)])}r(a,.18);for(let l of[-1,1]){let h=[],f=l===-1?-1.13:1.15,m=1.68;for(let u=0;u<=240;u++){let g=u/240,x=g*Math.PI*6.1,p=.017+g*.272+.003*Math.sin(g*39+l);h.push([f+Math.cos(x)*p,m+Math.sin(x)*p*.92+.003*Math.sin(g*43)])}r(h,.047)}e.globalCompositeOperation="destination-out";for(let l=0;l<14e3;l++){e.fillStyle=`rgba(0,0,0,${.08+n()*.48})`;let h=n()*i.width,f=n()*i.height;e.fillRect(h,f,.35+n()*1.2,.4+n()*1.8)}for(let l=0;l<1600;l++){e.strokeStyle=`rgba(0,0,0,${.05+n()*.17})`,e.lineWidth=.4+n()*.7;let h=n()*i.width,f=n()*i.height;e.beginPath(),e.moveTo(h,f),e.lineTo(h+2+n()*6,f+n()*2-1),e.stroke()}let c=new Ft(i);return c.colorSpace=ft,c.anisotropy=Tn.capabilities.getMaxAnisotropy(),c}var NM=UM(),bl=new ze({color:13882826,roughness:.94});bl.onBeforeCompile=i=>{i.uniforms.lipstickPaint={value:NM},i.vertexShader=`varying vec3 vStone;
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
 `)};var HM=ts(2104866,.98),FM=ts(7350072,.98),xm=new _t({color:525833,side:Ut}),Gi=new be;Gi.name="Figsaw and tricycle";yi.add(Gi);var xn=new be;xn.name="Figsaw\u2019s red tricycle";Gi.add(xn);var So=new ze({color:13185848,roughness:.44,metalness:.28}),Vs=new ze({color:11449779,roughness:.34,metalness:.72}),va=new ze({color:5462617,roughness:.46,metalness:.65}),ym=ts(8856619,.86),Fd=ts(1514523,.93),vm=ts(2369317,.85);function ns(i,e,t,n,s){let r=new w(...e),o=new w(...t),a=o.clone().sub(r),c=Dn(new qt(n,n,a.length(),16),s,i);return c.position.copy(r).add(o).multiplyScalar(.5),c.quaternion.setFromUnitVectors(new w(0,1,0),a.normalize()),c}var _m=[];function Od(i,e,t,n,s){let r=new be;r.position.set(i,e,t),r.rotation.y=Math.PI/2,r.name=s===8?"Large front wheel":"Small rear wheel",xn.add(r),r.userData.radius=n,_m.push(r);let o=n>.7?.045:.033;Dn(new $t(n-o,o,12,80),Fd,r),Dn(new $t(n-o*2,.018,10,80),va,r);for(let a of[-1,1]){let c=Dn(new $t(n-o*1.65,.006,6,80),Vs,r);c.position.z=a*.024}for(let a=0;a<s;a++){let c=a/s*Math.PI*2+.16;ns(r,[0,0,0],[Math.cos(c)*(n-o*2),Math.sin(c)*(n-o*2),0],n>.7?.013:.011,va)}ns(r,[0,0,-.14],[0,0,.14],.082,So);for(let a of[-1,1])zs(r,Vs,[0,0,a*.15],[.061,.061,.027],2);return r}var Bd=1.39,zd=1.52,xl=.89,xo=-1.23;Od(0,Bd,zd,.86,8);Od(-1.05,xl,xo,.36,6);Od(1.05,xl,xo,.36,6);ns(xn,[-1.16,xl,xo],[1.16,xl,xo],.045,va);var j0=new Gt([[0,.89,-1.23],[0,1.24,-1.03],[0,1.65,-.55],[0,1.95,.05],[0,2.14,.73],[0,2.19,1.22]].map(i=>new w(...i))),Mm=[],wl=[],pa=64;for(let i=0;i<=pa;i++){let e=j0.getPoint(i/pa),t=j0.getTangent(i/pa),n=new w(0,-t.z,t.y).normalize();for(let[s,r]of[[-.055,-1],[.055,-1],[.055,1],[-.055,1]])Mm.push(e.x+s,e.y+n.y*.074*r,e.z+n.z*.074*r);if(i<pa)for(let s=0;s<4;s++){let r=i*4+s,o=i*4+(s+1)%4;wl.push(r,o+4,o,r,r+4,o+4)}}wl.push(0,1,2,0,2,3);var ho=pa*4;wl.push(ho,ho+2,ho+1,ho,ho+3,ho+2);var Tl=new Nt;Tl.setAttribute("position",new ct(Mm,3));Tl.setIndex(wl);Tl.computeVertexNormals();Dn(Tl,So,xn);ns(xn,[0,1.72,-.45],[0,2.02,-.45],.064,So);var OM=Dn(new bt(1.91,.07,.29),So,xn);OM.position.set(0,.99,xo);for(let i=-5;i<=5;i++)Dn(new bt(.012,.006,.24),ym,xn).position.set(i*.16,1.028,xo);var bo=new vt;bo.moveTo(-.2,-.58);bo.bezierCurveTo(-.3,-.18,-.72,.02,-.7,.34);bo.bezierCurveTo(-.66,.57,.66,.57,.7,.34);bo.bezierCurveTo(.72,.02,.3,-.18,.2,-.58);bo.quadraticCurveTo(0,-.7,-.2,-.58);var Em=Dn(new sn(bo,{depth:.08,bevelEnabled:!0,bevelSize:.035,bevelThickness:.025,bevelSegments:3,steps:1,curveSegments:20}),vm,xn);Em.rotation.x=-Math.PI/2;Em.position.set(0,2,-.45);for(let i of[-1,1])Eo([[i*.16,Bd,zd],[i*.18,1.76,1.48],[i*.17,2.1,1.29],[i*.1,2.27,1.2]],.046,So,xn);ns(xn,[0,2.15,1.22],[0,2.43,1.17],.084,So);Eo([[0,2.36,1.18],[0,2.52,1.18],[0,2.63,1.34],[0,2.69,1.43]],.046,Vs,xn);Eo([[-1.11,2.99,.86],[-1.1,2.98,1.12],[-1.04,2.88,1.35],[-.87,2.71,1.46],[-.6,2.69,1.45],[0,2.69,1.43],[.6,2.69,1.45],[.87,2.71,1.46],[1.04,2.88,1.35],[1.1,2.98,1.12],[1.11,2.99,.86]],.048,Vs,xn);ns(xn,[-.1,2.69,1.43],[.1,2.69,1.43],.064,Vs);zs(xn,va,[0,2.69,1.491],[.027,.027,.015],2);for(let i of[-1,1])ns(xn,[i*1.1,2.98,1.12],[i*1.11,2.99,.86],.061,ym),zs(xn,va,[i*1.11,2.99,.85],[.061,.061,.022],2);var ks=new be;ks.name="Rotating pedal crank";ks.position.set(0,Bd,zd);xn.add(ks);var Sm=[];for(let i of[-1,1]){let e=i*.17,t=-i*.19;ns(ks,[i*.17,0,0],[i*.3,e,t],.025,Vs),ns(ks,[i*.3,e,t],[i*.53,e,t],.023,Vs);let n=new be;n.position.set(i*.44,e,t),ks.add(n),Sm.push(n),Dn(new bt(.27,.075,.19),Fd,n);for(let s=-1;s<=1;s++)Dn(new bt(.24,.008,.012),vm,n).position.set(0,.041,s*.05)}function BM(i){for(let e of _m)e.rotation.z=i/e.userData.radius;ks.rotation.x=i/.86;for(let e of Sm)e.rotation.x=-ks.rotation.x}zs(xn,Vs,[-.47,2.76,1.45],[.085,.055,.085]);ns(xn,[-.47,2.75,1.45],[-.57,2.77,1.45],.016,Fd);var bm=.72,wm=2.08,Bn=new be;Bn.scale.setScalar(bm);Bn.position.set(0,wm,-.45);Gi.add(Bn);var Rl=2.8,xi=64,Tm=160,Xn=32,wn=8*Math.PI*2/Tm,Id=-.13,zM=.05+Xn/xi*Rl,em=.12;function kM(i){return 2.05*Math.pow(Math.max(0,Math.sin(Math.PI*i)),.4)*(1.19-.45*i)}function _a(i,e){let t=kM(i),n=1+.018*Math.sin(e*5+i*9)+.012*Math.cos(e*9-i*7),s=je.clamp(i/(Xn/xi),0,1),r=i<Xn/xi?.2*Math.pow(Math.sin(Math.PI*s),.8)*Math.pow(Math.max(0,Math.cos(e)),3):0,o=new w(Math.sin(e)*t*n-.28*i,.05+i*Rl,Math.cos(e)*t*.68*n+r),a=je.smoothstep(Math.cos(e),.25,.65);for(let c of[-1.13,1.15]){let l=((o.x-c)/.36)**2+((o.y-1.68)/.33)**2;l<1&&(o.z+=.09*(1-l)**2*a)}return o}function Ld(i,e){let t=-Math.PI/2,n=Math.PI/2;for(let s=0;s<22;s++){let r=(t+n)/2;_a(i,r).x<e?t=r:n=r}return(t+n)/2}var tm=[_a(Xn/xi,-wn).x,_a(Xn/xi,wn).x],wd=new Map;function VM(i){if(i===0||i>=Xn/xi)return[-wn,wn];let e=i.toFixed(7);if(wd.has(e))return wd.get(e);let t=i/(Xn/xi),n=Math.sin(Math.PI*t),s=[Ld(i,tm[0]-.018*n),Ld(i,tm[1]+.018*n)];return wd.set(e,s),s}function Al(i,e){if(i<=Xn/xi){let[t,n]=VM(i);e<-wn?e=Ci(-Math.PI,t,(e+Math.PI)/(Math.PI-wn)):e<=wn?e=Ci(t,n,(e+wn)/(wn*2)):e=Ci(n,Math.PI,(e-wn)/(Math.PI-wn))}return _a(i,e)}function Rm(i,e){let t=(e-.05)/Rl;return _a(t,Ld(t,i)).z}function kd(i=!1,e=!1){let t=[],n=[],s=i?-wn:-Math.PI,r=i?wn:Math.PI,o=i?20:Tm,a=i?Xn:xi;for(let l=0;l<=a;l++)for(let h=0;h<=o;h++){let f=Al(l/xi,Ci(s,r,h/o));e&&(f.z=Math.min(f.z-.24,.72)),t.push(f.x,f.y,f.z)}for(let l=0;l<a;l++)for(let h=0;h<o;h++){let f=Ci(s,r,(h+.5)/o);if(!i&&l<Xn&&Math.abs(f)<wn-1e-4)continue;let m=l*(o+1)+h,u=m+1,g=m+o+2,x=m+o+1;n.push(m,u,x,u,g,x)}let c=new Nt;return c.setAttribute("position",new ct(t,3)),c.setIndex(n),c.computeVertexNormals(),c}var Am=new _t({color:1513752,side:mn});Am.onBeforeCompile=i=>{i.vertexShader=i.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
transformed += normal * 0.058;`)};function Cm(i,e){let t=new ut(i,Am);return t.name="Black stone outline",e.add(t),t}var Pm=kd(),GM=Dn(Pm,bl,Bn);GM.name="Figsaw";Cm(Pm,Bn);var WM=Dn(kd(!0,!0),xm,Bn);WM.castShadow=!1;function Im(i,e=!1){let t=[],n=[];for(let o=0;o<=40;o++){let a=Al(Xn/xi,Ci(-wn,wn,o/40)),c=a.y+(e?-.008:.008);if(t.push(a.x,c,a.z-.075,a.x,c,.7),o<40){let l=o*2;n.push(l,l+1,l+2,l+1,l+3,l+2)}}let s=new Nt;s.setAttribute("position",new ct(t,3)),s.setIndex(n),s.computeVertexNormals();let r=Dn(s,xm,i);r.castShadow=!1}Im(Bn);var gr=new be;Bn.add(gr);function XM(){let i=kd(!0),e=Array.from(i.attributes.position.array),t=Array.from(i.index.array),n=i.attributes.position.count;for(let o=0;o<n;o++)e.push(e[o*3],e[o*3+1],e[o*3+2]-.14);let s=t.slice();for(let o=0;o<s.length;o+=3)t.push(s[o]+n,s[o+2]+n,s[o+1]+n);let r=[];for(let o=0;o<=20;o++)r.push(o);for(let o=1;o<=Xn;o++)r.push(o*21+20);for(let o=19;o>=0;o--)r.push(Xn*21+o);for(let o=Xn-1;o>0;o--)r.push(o*21);for(let o=0;o<r.length;o++){let a=r[o],c=r[(o+1)%r.length];t.push(a,a+n,c,c,a+n,c+n)}return i.setAttribute("position",new ct(e,3)),i.setIndex(t),i.deleteAttribute("normal"),i.computeVertexNormals(),i}var Lm=XM(),Dm=bl.clone();Dm.onBeforeCompile=bl.onBeforeCompile;Dn(Lm,Dm,gr);Cm(Lm,gr);Im(gr,!0);zs(gr,FM,[Id,zM-.025,.83],[.25,.016,.055]);var Um=[];for(let i=0;i<=30;i++){let e=Al(Xn/xi,Ci(-wn,wn,i/30));e.z+=.002,Um.push(e)}Eo(Um,.008,HM,Bn);for(let i of[-1,1]){let e=[];for(let t=4;t<=Xn;t++){let n=Al(t/xi,i*wn);n.z+=.009,e.push(n)}Eo(e,.033,new _t({color:1513752}),Bn)}var Nm=[],Vd=ts(16061736,.36);Vd.emissive.set(12127514);Vd.emissiveIntensity=.12;var yl={headYaw:0,gazeYaw:0,gazePitch:0},Td=new w,uo=new w,nm=new w,qM=new w(0,1,0),im=new yt;for(let i of[-1,1]){let e=i*.42-.09,t=1.84+(i===-1?.045:0),n=Rm(e,t)+.044,s=new be;s.position.set(e,t,n),Bn.add(s),Nm.push(s),zs(s,ts(1052693,.25),[0,0,0],[.156,.156,.075]),zs(s,Vd,[0,0,.055],[.084,.084,.029]),zs(s,ts(657676,.32),[0,0,.074],[.039,.039,.016])}var yo=new be;yo.name="Red bow tie";yo.position.set(Id,.4,Rm(Id,.4)+.065);gr.add(yo);var Hm=new Wt({color:13046566,roughness:.76,sheen:.55,sheenColor:15747667,sheenRoughness:.82}),Gs=new vt;Gs.moveTo(.055,.065);Gs.bezierCurveTo(.18,.085,.32,.185,.43,.19);Gs.quadraticCurveTo(.49,.19,.485,.12);Gs.bezierCurveTo(.47,.03,.5,-.075,.48,-.14);Gs.quadraticCurveTo(.47,-.195,.4,-.175);Gs.bezierCurveTo(.27,-.14,.15,-.07,.055,-.06);Gs.closePath();var YM=new sn(Gs,{depth:.055,bevelEnabled:!0,bevelSize:.018,bevelThickness:.018,bevelSegments:3,steps:1,curveSegments:18});for(let i of[-1,1]){let e=Dn(YM,Hm,yo);e.scale.x=i,e.rotation.y=-i*.1;let t=ts(9965598,.9);for(let n of[-1,1])Eo([[i*.09,n*.026,.08],[i*.19,n*.055,.087],[i*.34,n*.11,.088]],.005,t,yo)}var Fm=Dn(new Zt(1,24,16),Hm,yo);Fm.position.set(0,0,.07);Fm.scale.set(.105,.12,.075);var Gd=.26,fo=-.53*Gd+.0036;Gi.scale.setScalar(Gd);var vl=new Gt([[2.45,fo,-2.4],[2.05,fo,-1.7],[1.05,fo,-1.28],[.35,fo,-1.1],[.24,fo,-.66],[.12,fo,.1]].map(i=>new w(...i)),!1,"centripetal");vl.arcLengthDivisions=240;var ZM=vl.getLength(),hl=new w,Rd=new w,Os=document.querySelector("#figsaw-dialogue"),Om=document.querySelector("#dialogue-announcement"),Bm=document.querySelector("#game-countdown"),pl=document.querySelector("#countdown-announcement"),ga=null,Dd=300,sm=["I want to play a game...","Those who don't appreciate design do not deserve it.","Let the games begin..."],Wd=-1,Xd=1/0,ul=new w,pr=new w,dl=new la,Ad=new w,zm=0,po=!1,rm=0,om=!1,Ud=0,qd=null;function km(i){let e=sm[i];Wd=i,Os.querySelector(".dialogue-bubble span").textContent=e,Om.textContent=`Figsaw. ${e}`;let t=X0(e,Qe.time);qd=Ai?null:t,Xd=i<sm.length-1?t.startTime+t.duration+1:1/0,i===0&&(ga=t.startTime+t.duration)}function Vm(i){let e=i-zm-1,t=Ai?1:je.smoothstep(e,0,8.5);vl.getPointAt(t,hl),vl.getTangentAt(t,Rd),Gi.position.copy(hl),Gi.rotation.y=Math.atan2(Rd.x,Rd.z);let n=Math.atan2(Bs.x-hl.x,Bs.z-hl.z),s=je.euclideanModulo(n-Gi.rotation.y+Math.PI,Math.PI*2)-Math.PI;BM(t*ZM/Gd),t===1&&!po&&(po=!0,rm=i,Jn.start(Qe.time,Fn,Qe),km(0)),p0(po?i-rm:-1,Ai,yl),Bn.rotation.y=je.clamp(s*.58,-.7,.7)+yl.headYaw}Vm(0);Sa.mark("characterBuilt");var{group:ba,laptop:Wi,catMug:wa,acidLeaks:On,chargingKit:Xi,ketchupKey:es,countdown:xa,setDisplayEnvironment:$M,update:KM,figpalHoists:xs,toggleHoist:JM}=F0(Tn,Bs);yi.add(ba);Sa.mark("officeBuilt");var Kt=G0(Jt,{canDetach:()=>es.hasKey});yi.add(Kt.group);var Qn=$0({laptop:Wi,restraint:Kt,cameraPosition:Fn,state:Qe}),Rn=K0({mug:wa,camera:Jt,restraint:Kt}),Ma=document.querySelector("#game-over"),Gm=Ma.querySelector(".game-over-content"),Wm=document.querySelector("#restart-game"),qn=!1;Wm.addEventListener("click",()=>{Nd(),pt.focus({preventScroll:!0})});var Ii=document.querySelector("#restraint-status"),ml=document.querySelector("#charging-hint"),vo=null,_o=null,mo="",Cl=0,ys=W0(()=>{if(!es.hasKey){ya("The shackle is locked. Find its key first.");return}Kt.detach(Qe.time)&&(Ii.textContent="Instance detached. Your wrist is free. You can open the laptop, drink from the cat mug, or turn a tank drain valve.",pt.classList.remove("over-chain"),pt.setAttribute("aria-label",pt.getAttribute("aria-label").replace("Your wrist is chained to the rear pipes. Pour the glass ketchup bottle beside the cat mug, collect the key, then click or right-click the shackle and choose Detach instance to free your hand.","Your wrist is free. Click the laptop, cat mug, or a red tank drain valve to use it.")))},{canDetach:()=>es.hasKey,onBlocked:()=>ya("The shackle is locked. Find its key first.")}),_l=B0(xs),mr=z0(xs.speechAnchors,pt,xs.canSpeak),Xm=O0(xs,mr),qm=h0(Tn);$M(qm.texture);Kt.setEnvironment(qm.texture);On.bindTargets([ba,Gi]);l0(ba,{exclude:[Wi.object,wa,xs.group,xa.group,Xi.group,es.group]});Sa.mark("scenePrepared");function QM(i){if(!po||_l.active){Os.hidden=!0;return}Bn.localToWorld(ul.set(-.28,Rl+.24,0)),pr.copy(ul).project(Jt);let e=Math.min(.7,.4/(Jt.position.distanceTo(ul)*Math.tan(je.degToRad(Jt.fov/2))*Jt.aspect));if(pr.z<-1||pr.z>1||Math.abs(pr.x)>1+e||Math.abs(pr.y)>1){Os.hidden=!0;return}if(i>=Ud){Ud=i+.12,Ad.copy(ul).sub(Jt.position);let r=Ad.length();dl.set(Jt.position,Ad.normalize()),dl.near=.06,dl.far=Math.max(.06,r-.035),om=dl.intersectObject(ba,!0).length>0}if(om){Os.hidden=!0;return}Os.hidden=!1;let t=pt.getBoundingClientRect(),n=t.left+(pr.x*.5+.5)*t.width,s=t.top+(-pr.y*.5+.5)*t.height;Os.style.transform=`translate3d(${n}px,${s-8}px,0) translate(-50%,-100%)`}var am=new la,cm=new He;function Yd(i){let e=pt.getBoundingClientRect();cm.set((i.clientX-e.left)/e.width*2-1,-(i.clientY-e.top)/e.height*2+1),am.setFromCamera(cm,Jt);let t=am.intersectObjects([ba,Gi,Kt.group],!0).find(n=>{for(let s=n.object;s;s=s.parent)if(!s.visible)return!1;return!0});for(let n=t?.object;n;n=n.parent)if(n===Kt.target||n===Wi.object||n===wa||n===Bn||n.userData.chargingAction||n.userData.keyAction||Number.isInteger(n.userData.valveIndex)||Number.isInteger(n.userData.hoistIndex))return n;return null}function ya(i){mo=i,Cl=Qe.time+4.5,Ii.textContent=i}function jM(i){Qn.active||Rn.active||qn||On.dying||(Jn.cancel(),gi=!1,i==="pour"?es.pour(Qe.time)?ya("You tip the bottle. Something metal is sliding through the ketchup\u2026"):ya(es.hint("pour")):i==="collect"&&es.collect()&&(ya("Shackle key collected. Click your shackle and choose Detach instance."),Kt.requestReach(Qe.time)))}function Zd(i){!i||Qn.active||Rn.active||qn||On.dying||(Kt.locked&&Kt.requestReach(Qe.time),i==="charger"&&Xi.phase==="drawer"&&!Xi.drawerReady&&!Kt.locked?mo="Let the drawer finish opening.":mo=Xi.use(i,Qe.time,Kt.locked),Cl=Qe.time+3.8,Ii.textContent=mo,Jn.cancel(),gi=!1)}function eE(){let i=Qe.time<Cl?mo:vo?es.hint(vo):_o?Xi.hint(_o):es.hasKey&&Kt.locked?"Shackle key collected \xB7 Click the shackle to unlock":Xi.hint(null);ml.textContent!==i&&(ml.textContent=i),ml.hidden=!i||qn||Rn.active||Qn.active}function Ym(){if(!(Qn.active||Rn.active||qn||On.dying)){if(Kt.locked){Kt.requestReach(Qe.time),Ii.textContent="The chain pulls tight. You can't reach the laptop.";return}if(Xi.phase==="powered"){Zd("laptop");return}if(Wi.isOpen){Zm();return}Qn.start(Qe.time)&&(Ws(),Jn.cancel(),gi=!1,Ii.textContent="You reach for the front edge of the laptop.")}}function Zm(i=!1){!i&&!Wi.open()||(Ii.textContent="You lift the lid and let go. The laptop is open.",pt.classList.remove("over-laptop"),pt.setAttribute("aria-label",pt.getAttribute("aria-label").replace("a closed MacBook Pro","an open MacBook Pro").replace(" Click the laptop or press Enter to open it.","")))}function $m(){if(!(Qn.active||Rn.active||qn||On.dying)){if(Kt.locked){Kt.requestReach(Qe.time),Ii.textContent="The chain pulls tight. Detach the shackle before picking up the mug.";return}Rn.start(Qe.time)&&(Ws(),Jn.cancel(),gi=!1,ys.hide(),pt.classList.remove("over-mug"),Ii.textContent="You pick up the cat mug by its handle and raise it for a drink.")}}function Km(i){if(!(Qn.active||Rn.active||qn||On.dying)){if(Kt.locked){Kt.requestReach(Qe.time),Ii.textContent="The chain pulls tight. Detach the shackle before turning a tank valve.";return}On.open(i,Qe.time,Kt.locked)&&(Jn.cancel(),gi=!1,ys.hide(),Ii.textContent=`Tank ${i+1}'s valve spins open. Bubbling acid spills onto the floor and starts eating through everything it touches.`)}}function tE(){let i=0,e=1/0,t=new w;return xs.valves.forEach((n,s)=>{n.object.getWorldPosition(t);let r=t.distanceToSquared(Fn);r<e&&(e=r,i=s)}),i}function lm(i){qn||(qn=!0,Ws(),ys.hide(),Os.hidden=!0,mr.hide(),document.body.classList.add("game-over"),pt.inert=!0,Gm.hidden=!1,Wm.focus({preventScroll:!0}),Ii.textContent=i)}function Jm(i){if(Rn.active||qn||On.dying)return;let e=JM(i);if(!e)return;let t=xs.isLowered(i);t?mr.show(i,Qe.time):mr.hide(i),document.querySelector("#hoist-status").textContent=t&&xs.canSpeak(i)?`${e} ${fa[i]}`:e}var gi=!1,Li=null,gl=null,Ml=0,nE=new Set(["KeyW","KeyA","KeyS","KeyD","KeyE","KeyQ"]),Vi=new Set,go=i=>je.euclideanModulo(i+Math.PI,Math.PI*2)-Math.PI;function Nd(){Sl(),es.reset(),vo=null,Xi.reset(),_o=null,mo="",Cl=0,ml.hidden=!0,qn=!1,On.reset(),Rn.reset(),Ma.hidden=!0,Ma.style.opacity="0",Gm.hidden=!0,document.body.classList.remove("game-over","mug-impact"),pt.inert=!1,Qn.cancel(),Jn.cancel(),Kt.reset(),Wi.close(),ys.hide(),Ii.textContent="",pt.setAttribute("aria-label",LM),_l.reset(),mr.hide(),Xm.reset(Qe.time),Vi.clear(),gi=!0,zm=Qe.time,po=!1,Os.hidden=!0,Om.textContent="",qd=null,Wd=-1,Xd=1/0,Qe.talkUntil=0,Ud=0,ga=null,xa.reset(),Dd=300,Bm.textContent="05:00",pl.textContent=""}function Ws(){Vi.clear(),Qe.space=!1,Li=null}document.addEventListener("keydown",i=>{if(qn){i.code==="KeyR"&&!i.repeat&&(i.preventDefault(),Nd(),pt.focus({preventScroll:!0}));return}if((Qn.active||Rn.active||On.dying)&&i.code!=="KeyR"){i.preventDefault();return}if(!ys.active&&!(i.target.closest('input,textarea,select,[contenteditable="true"]')||i.metaKey||i.ctrlKey||i.altKey)){if(nE.has(i.code)){i.preventDefault(),Jn.cancel(),Vi.add(i.code),gi=!1;return}i.target.closest("button")&&(i.code==="Space"||i.code==="Enter")||(i.code==="Enter"&&i.target===pt&&(i.preventDefault(),Ym()),i.code==="KeyF"&&i.target===pt&&!i.repeat&&(i.preventDefault(),Zd(Xi.nextAction)),i.code==="KeyM"&&i.target===pt&&!i.repeat&&(i.preventDefault(),$m()),i.code==="KeyV"&&i.target===pt&&!i.repeat&&(i.preventDefault(),Km(tE())),/^Digit[1-3]$/.test(i.code)&&i.target===pt&&!i.repeat&&(i.preventDefault(),Jm(Number(i.code.slice(-1))-1)),i.code==="Space"&&(i.preventDefault(),Qe.space=!0),i.code==="KeyR"&&!i.repeat&&Nd(),i.code.startsWith("Arrow")&&(i.preventDefault(),Jn.cancel(),gi=!1,i.code==="ArrowLeft"&&(Qe.yaw=go(Qe.yaw+.08)),i.code==="ArrowRight"&&(Qe.yaw=go(Qe.yaw-.08)),i.code==="ArrowUp"&&(Qe.pitch=je.clamp(Qe.pitch+.05,-1.4,1.4)),i.code==="ArrowDown"&&(Qe.pitch=je.clamp(Qe.pitch-.05,-1.4,1.4))))}});document.addEventListener("keyup",i=>{Vi.delete(i.code),i.code==="Space"&&(Qe.space=!1)});window.addEventListener("blur",Ws);document.addEventListener("visibilitychange",()=>{document.hidden&&Ws()});pt.addEventListener("contextmenu",i=>{i.preventDefault(),Ws(),!(Rn.active||qn||On.dying)&&(Kt.locked&&Yd(i)===Kt.target?ys.show(i.clientX,i.clientY):ys.hide())});pt.addEventListener("pointerdown",i=>{Qn.active||Rn.active||qn||On.dying||i.button===0&&Li===null&&(pt.focus({preventScroll:!0}),Li=i.pointerId,gi=!1,Ml=0,gl={x:i.clientX,y:i.clientY},pt.setPointerCapture(i.pointerId))});pt.addEventListener("pointermove",i=>{if(Qn.active||Rn.active||qn||On.dying)return;if(Li===null){let n=Yd(i);vo=n?.userData.keyAction||null,pt.classList.toggle("over-key",!!vo),_o=n?.userData.chargingAction||(n===Wi.object&&Xi.phase==="powered"?"laptop":null),pt.classList.toggle("over-charging",!!_o),pt.classList.toggle("over-laptop",n===Wi.object&&!Wi.isOpen),pt.classList.toggle("over-hoist",Number.isInteger(n?.userData.hoistIndex)),pt.classList.toggle("over-mug",n===wa),pt.classList.toggle("over-valve",Number.isInteger(n?.userData.valveIndex)),pt.classList.toggle("over-chain",n===Kt.target&&Kt.locked);return}if(i.pointerId!==Li)return;let e=i.clientX-gl.x,t=i.clientY-gl.y;Ml+=Math.abs(e)+Math.abs(t),Ml>=6&&Jn.cancel(),Qe.yaw=go(Qe.yaw-e*.004),Qe.pitch=je.clamp(Qe.pitch+t*.003,-1.4,1.4),gl={x:i.clientX,y:i.clientY}});pt.addEventListener("pointerup",i=>{if(i.pointerId===Li&&(Li=null,Ml<6)){let e=Yd(i);e?.userData.keyAction?jM(e.userData.keyAction):e===Kt.target&&Kt.locked?ys.show(i.clientX,i.clientY):e?.userData.chargingAction?Zd(e.userData.chargingAction):e===Wi.object?Ym():e===wa?$m():Number.isInteger(e?.userData.valveIndex)?Km(e.userData.valveIndex):e===Bn?Qe.talkUntil=Qe.time+1.8:Number.isInteger(e?.userData.hoistIndex)&&Jm(e.userData.hoistIndex)}});pt.addEventListener("pointerleave",()=>{vo=null,_o=null,pt.classList.remove("over-key","over-laptop","over-hoist","over-chain","over-mug","over-valve","over-charging")});pt.addEventListener("pointercancel",i=>{i.pointerId===Li&&(Li=null)});pt.addEventListener("lostpointercapture",i=>{i.pointerId===Li&&(Li=null)});pt.addEventListener("wheel",i=>{i.preventDefault(),!(Qn.active||Rn.active||qn||On.dying)&&(Jn.cancel(),gi=!1,Qe.zoom=je.clamp(Qe.zoom+i.deltaY*5e-4,.78,1))},{passive:!1});var Pl=document.querySelector("#copy-view"),hm=Pl.querySelector("span"),um=document.querySelector("#copy-status"),Hd=document.querySelector("#copy-fallback"),Cd=document.querySelector("#view-text"),dm;function iE(){let i=n=>n.toArray().map(s=>Number(s.toFixed(6))),e=Jt.getWorldDirection(new w),t={position:i(Jt.position),lookAt:i(Jt.position.clone().add(e)),fov:Number(Jt.fov.toFixed(4))};return`Set this as the default camera view for Figsaw:
${JSON.stringify(t,null,2)}`}function sE(i){let e=document.createElement("textarea");e.value=i,e.readOnly=!0,e.style.cssText="position:fixed;left:-9999px;top:0;font-size:16px",document.body.append(e),e.focus(),e.select(),e.setSelectionRange(0,i.length);let t=!1;try{t=document.execCommand("copy")}catch{}return e.remove(),Pl.focus({preventScroll:!0}),t}Pl.addEventListener("click",async()=>{let i=iE();Cd.value=i,clearTimeout(dm);let e=!1;try{navigator.clipboard?.writeText&&(await navigator.clipboard.writeText(i),e=!0)}catch{}e||(e=sE(i)),e?(Hd.hidden=!0,hm.textContent="Copied",um.textContent="View copied. Paste it into the chat to set the default view."):(Hd.hidden=!1,Cd.focus(),Cd.select(),um.textContent="Select and copy the view below, then paste it into the chat."),dm=setTimeout(()=>{hm.textContent="Copy view"},2200)});document.querySelector("#close-copy").addEventListener("click",()=>{Hd.hidden=!0,Pl.focus()});function $d(){let{width:i,height:e}=pt.getBoundingClientRect();!i||!e||(Tn.setSize(i,e,!1),Jt.aspect=i/e,Jt.fov=Mo.fov*Qe.zoom,Jt.updateProjectionMatrix())}var rE=new ResizeObserver($d);rE.observe(pt);$d();var El=new Kc,Qm=!1,Ea=0,ma=0,fm=-1/0,pm=0,Pd=0,fl=0;function Sl(){Qm&&!Ea&&!document.hidden&&(Ea=requestAnimationFrame(jm))}document.addEventListener("visibilitychange",()=>{document.hidden?(cancelAnimationFrame(Ea),Ea=0,Ws()):(ma=0,El.getDelta(),Sl())});function jm(){if(Ea=0,document.hidden)return;if(qn){El.getDelta();return}let i=performance.now(),e=ma?i-ma:0;if(ma&&e<1e3/Ht.maxFps-1){Sl();return}ma=i;let t=Math.min(El.getDelta(),.04),n=Qe.time+=t,s=1-Math.exp(-t*12);gi&&(Qe.yaw=go(Qe.yaw+go(Fs.yaw-Qe.yaw)*s*.5),Qe.pitch=Ci(Qe.pitch,Fs.pitch,s*.5),Qe.zoom=Ci(Qe.zoom,1,s*.5),Fn.lerp(Bs,s*.5),Math.abs(go(Qe.yaw-Fs.yaw))+Math.abs(Qe.pitch-Fs.pitch)+Math.abs(Qe.zoom-1)+Fn.distanceTo(Bs)<.005&&(Qe.yaw=Fs.yaw,Qe.pitch=Fs.pitch,Qe.zoom=1,Fn.copy(Bs),gi=!1)),Vm(n),po&&n>=Xd&&km(Wd+1),Jn.active&&(gi=!1),(Vi.size||Li!==null)&&Jn.cancel(),(Qn.active||Rn.active)&&Jn.cancel(),Jn.update(n,Fn,Qe,Ai),Qn.update(n,Ai)&&Zm(!0);let r=Qe.yaw,o=Number(Vi.has("KeyW"))-Number(Vi.has("KeyS")),a=Number(Vi.has("KeyD"))-Number(Vi.has("KeyA")),c=Number(Vi.has("KeyE"))-Number(Vi.has("KeyQ"));bd.set(-Math.sin(r)*o+Math.cos(r)*a,c,-Math.cos(r)*o-Math.sin(r)*a),bd.lengthSq()>0&&(Fn.addScaledVector(bd.normalize(),t*1.05),Fn.x=je.clamp(Fn.x,-3.72,3.72),Fn.y=je.clamp(Fn.y,.08,3),Fn.z=je.clamp(Fn.z,-3.78,4.25)),Jt.position.copy(Fn),Q0.set(-Math.sin(r)*Math.cos(Qe.pitch),Math.sin(Qe.pitch),-Math.cos(r)*Math.cos(Qe.pitch)),J0.copy(Fn).add(Q0),Jt.lookAt(J0);let l=Mo.fov*Qe.zoom;Math.abs(Jt.fov-l)>.001&&(Jt.fov=l,Jt.updateProjectionMatrix()),ga!==null&&n>=ga&&(xa.start(),ga=null,pl.textContent="The five-minute countdown has started.");let h=xa.update();h!==Dd&&(Bm.textContent=al(h),Dd=h,h===0&&(pl.textContent="The countdown has reached zero.")),_l.update(xa.status,n)&&(mr.showAll(n),pl.textContent=`Time is up. All three Figpals are lowering into the green liquid. ${fa.filter((v,M)=>xs.canSpeak(M)).join(" ")}`);let f=q0(qd,n),m=n<Qe.talkUntil?.16+.7*Math.sin(n*10)**2:0,u=Qe.space?1:Math.max(f,m);Qe.jaw=Ci(Qe.jaw,u,s),gr.position.y=-Qe.jaw*em,Bn.position.y=wm+Qe.jaw*em*bm;let g=On.update(n,t,Fn,Jt,Ai);On.dying&&Ws();let x=Rn.update(n,Ai),p=Math.max(Rn.blackout,On.blackout(n));p>0&&(Ma.hidden=!1,Ma.style.opacity=String(p),document.body.classList.add("mug-impact")),g?lm("The corrosive green liquid reaches you. Game over."):x&&lm("The mug's pointed ears hit your eyes. Everything goes dark. Game over."),Kt.update(n,Ai,ys.active||Rn.active,Rn.handPose||Qn.handPose),Wi.update(t,Ai),Xi.update(n,Ai),eE(),qi.intensity=mm*KM(n,Ai,Jt.position),Gi.updateMatrixWorld(!0),Bn.localToWorld(Td.set(-.09,1.86,1)),uo.copy(Jt.position).sub(Td);let d=Math.max(1,uo.length());uo.normalize().applyAxisAngle(qM,yl.gazeYaw),uo.y+=yl.gazePitch,uo.normalize(),nm.copy(Td).addScaledVector(uo,d);for(let v of Nm)im.copy(v.quaternion),v.lookAt(nm),Ai||v.quaternion.copy(im.slerp(v.quaternion,1-Math.exp(-t*16)));n-fm>=1/Ht.shadowHz&&(Tn.shadowMap.needsUpdate=!0,fm=n),Tn.render(yi,Jt),QM(n),Xm.update(n,_l.active),mr.update(Jt,n),Sa.frame(i);let E=performance.now()-i;fl++,(E>Ht.targetFrameMs||e>Ht.targetFrameMs*1.4)&&Pd++,n-pm>4&&(fl>30&&Pd/fl>.65&&Tn.getPixelRatio()>Ht.minPixelRatio&&(Tn.setPixelRatio(Math.max(Ht.minPixelRatio,Tn.getPixelRatio()-.25)),$d()),pm=n,Pd=0,fl=0),Sl()}Tn.compileAsync(yi,Jt).then(()=>{Sa.mark("shadersReady"),Qm=!0,El.getDelta(),jm(),document.querySelector("#loading-status")?.remove()}).catch(i=>{console.error(i);let e=document.querySelector("#loading-status");e&&(e.textContent="The room could not load. Please reload to try again.")});pt.addEventListener("webglcontextlost",i=>i.preventDefault());pt.addEventListener("webglcontextrestored",()=>location.reload());
