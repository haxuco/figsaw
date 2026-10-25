var Kg=0,Df=1,Jg=2;var qp=1,id=2,mr=3,nr=0,yn=1,Dt=2,Dr=0,Ys=1,Tc=2,Uf=3,Hf=4,Qg=5,rs=100,jg=101,e1=102,t1=103,n1=104,i1=200,r1=201,s1=202,o1=203,Fh=204,Oh=205,a1=206,c1=207,l1=208,h1=209,u1=210,d1=211,f1=212,p1=213,m1=214,zh=0,Bh=1,kh=2,Js=3,Vh=4,Gh=5,Wh=6,Xh=7,Yp=0,g1=1,x1=2,Ur=0,y1=1,v1=2,_1=3,rd=4,M1=5,E1=6,S1=7;var Zp=300,Qs=301,js=302,ta=303,qh=304,nl=306,cs=1e3,as=1001,Yh=1002,si=1003,w1=1004;var qa=1005;var pn=1006,nh=1007;var Wi=1008;var xr=1009,$p=1010,Kp=1011,na=1012,sd=1013,ls=1014,tr=1015,ga=1016,od=1017,ad=1018,eo=1020,Jp=35902,Qp=1021,jp=1022,xi=1023,e0=1024,t0=1025,Zs=1026,to=1027,cd=1028,ld=1029,n0=1030,hd=1031;var ud=1033,_c=33776,Mc=33777,Ec=33778,Sc=33779,Zh=35840,$h=35841,Kh=35842,Jh=35843,Qh=36196,jh=37492,eu=37496,tu=37808,nu=37809,iu=37810,ru=37811,su=37812,ou=37813,au=37814,cu=37815,lu=37816,hu=37817,uu=37818,du=37819,fu=37820,pu=37821,wc=36492,mu=36494,gu=36495,i0=36283,xu=36284,yu=36285,vu=36286;var Rc=2300,_u=2301,ih=2302,Nf=2400,Ff=2401,Of=2402;var b1=3200,dd=3201;var r0=0,T1=1,Lr="",xt="srgb",Vr="srgb-linear",fd="display-p3",il="display-p3-linear",Ac="linear",rn="srgb",Cc="rec709",Pc="p3";var Cs=7680;var zf=519,R1=512,A1=513,C1=514,s0=515,P1=516,I1=517,L1=518,D1=519,Bf=35044,Un=35048;var kf="300 es",gr=2e3,Ic=2001,Nr=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let r=this._listeners[e];if(r!==void 0){let s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let n=this._listeners[e.type];if(n!==void 0){e.target=this;let r=n.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}},Wn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Vf=1234567,Ko=Math.PI/180,no=180/Math.PI;function ms(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Wn[i&255]+Wn[i>>8&255]+Wn[i>>16&255]+Wn[i>>24&255]+"-"+Wn[e&255]+Wn[e>>8&255]+"-"+Wn[e>>16&15|64]+Wn[e>>24&255]+"-"+Wn[t&63|128]+Wn[t>>8&255]+"-"+Wn[t>>16&255]+Wn[t>>24&255]+Wn[n&255]+Wn[n>>8&255]+Wn[n>>16&255]+Wn[n>>24&255]).toLowerCase()}function bn(i,e,t){return Math.max(e,Math.min(t,i))}function pd(i,e){return(i%e+e)%e}function U1(i,e,t,n,r){return n+(i-e)*(r-n)/(t-e)}function H1(i,e,t){return i!==e?(t-i)/(e-i):0}function Jo(i,e,t){return(1-t)*i+t*e}function N1(i,e,t,n){return Jo(i,e,1-Math.exp(-t*n))}function F1(i,e=1){return e-Math.abs(pd(i,e*2)-e)}function O1(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function z1(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function B1(i,e){return i+Math.floor(Math.random()*(e-i+1))}function k1(i,e){return i+Math.random()*(e-i)}function V1(i){return i*(.5-Math.random())}function G1(i){i!==void 0&&(Vf=i);let e=Vf+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function W1(i){return i*Ko}function X1(i){return i*no}function q1(i){return(i&i-1)===0&&i!==0}function Y1(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Z1(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function $1(i,e,t,n,r){let s=Math.cos,o=Math.sin,a=s(t/2),c=o(t/2),l=s((e+n)/2),h=o((e+n)/2),p=s((e-n)/2),f=o((e-n)/2),d=s((n-e)/2),g=o((n-e)/2);switch(r){case"XYX":i.set(a*h,c*p,c*f,a*l);break;case"YZY":i.set(c*f,a*h,c*p,a*l);break;case"ZXZ":i.set(c*p,c*f,a*h,a*l);break;case"XZX":i.set(a*h,c*g,c*d,a*l);break;case"YXY":i.set(c*d,a*h,c*g,a*l);break;case"ZYZ":i.set(c*g,c*d,a*h,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Ws(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Jn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var Ge={DEG2RAD:Ko,RAD2DEG:no,generateUUID:ms,clamp:bn,euclideanModulo:pd,mapLinear:U1,inverseLerp:H1,lerp:Jo,damp:N1,pingpong:F1,smoothstep:O1,smootherstep:z1,randInt:B1,randFloat:k1,randFloatSpread:V1,seededRandom:G1,degToRad:W1,radToDeg:X1,isPowerOfTwo:q1,ceilPowerOfTwo:Y1,floorPowerOfTwo:Z1,setQuaternionFromProperEuler:$1,normalize:Jn,denormalize:Ws},Fe=class i{constructor(e=0,t=0){i.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(bn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*r+e.x,this.y=s*r+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},_t=class i{constructor(e,t,n,r,s,o,a,c,l){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,o,a,c,l)}set(e,t,n,r,s,o,a,c,l){let h=this.elements;return h[0]=e,h[1]=r,h[2]=a,h[3]=t,h[4]=s,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],p=n[7],f=n[2],d=n[5],g=n[8],x=r[0],m=r[3],u=r[6],E=r[1],y=r[4],_=r[7],P=r[2],T=r[5],R=r[8];return s[0]=o*x+a*E+c*P,s[3]=o*m+a*y+c*T,s[6]=o*u+a*_+c*R,s[1]=l*x+h*E+p*P,s[4]=l*m+h*y+p*T,s[7]=l*u+h*_+p*R,s[2]=f*x+d*E+g*P,s[5]=f*m+d*y+g*T,s[8]=f*u+d*_+g*R,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8];return t*o*h-t*a*l-n*s*h+n*a*c+r*s*l-r*o*c}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],p=h*o-a*l,f=a*c-h*s,d=l*s-o*c,g=t*p+n*f+r*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/g;return e[0]=p*x,e[1]=(r*l-h*n)*x,e[2]=(a*n-r*o)*x,e[3]=f*x,e[4]=(h*t-r*c)*x,e[5]=(r*s-a*t)*x,e[6]=d*x,e[7]=(n*c-l*t)*x,e[8]=(o*t-n*s)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,o,a){let c=Math.cos(s),l=Math.sin(s);return this.set(n*c,n*l,-n*(c*o+l*a)+o+e,-r*l,r*c,-r*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(rh.makeScale(e,t)),this}rotate(e){return this.premultiply(rh.makeRotation(-e)),this}translate(e,t){return this.premultiply(rh.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},rh=new _t;function o0(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function ia(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function K1(){let i=ia("canvas");return i.style.display="block",i}var Gf={};function bc(i){i in Gf||(Gf[i]=!0,console.warn(i))}function J1(i,e,t){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}function Q1(i){let e=i.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function j1(i){let e=i.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}var Wf=new _t().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Xf=new _t().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Bo={[Vr]:{transfer:Ac,primaries:Cc,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i,fromReference:i=>i},[xt]:{transfer:rn,primaries:Cc,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[il]:{transfer:Ac,primaries:Pc,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.applyMatrix3(Xf),fromReference:i=>i.applyMatrix3(Wf)},[fd]:{transfer:rn,primaries:Pc,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.convertSRGBToLinear().applyMatrix3(Xf),fromReference:i=>i.applyMatrix3(Wf).convertLinearToSRGB()}},ex=new Set([Vr,il]),Yt={enabled:!0,_workingColorSpace:Vr,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!ex.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;let n=Bo[e].toReference,r=Bo[t].fromReference;return r(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this._workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this._workingColorSpace)},getPrimaries:function(i){return Bo[i].primaries},getTransfer:function(i){return i===Lr?Ac:Bo[i].transfer},getLuminanceCoefficients:function(i,e=this._workingColorSpace){return i.fromArray(Bo[e].luminanceCoefficients)}};function $s(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function sh(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Ps,Mu=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Ps===void 0&&(Ps=ia("canvas")),Ps.width=e.width,Ps.height=e.height;let n=Ps.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Ps}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=ia("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=$s(s[o]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor($s(t[n]/255)*255):t[n]=$s(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},tx=0,Lc=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:tx++}),this.uuid=ms(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(oh(r[o].image)):s.push(oh(r[o]))}else s=oh(r);n.url=s}return t||(e.images[this.uuid]=n),n}};function oh(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Mu.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var nx=0,jn=class i extends Nr{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=as,r=as,s=pn,o=Wi,a=xi,c=xr,l=i.DEFAULT_ANISOTROPY,h=Lr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:nx++}),this.uuid=ms(),this.name="",this.source=new Lc(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Fe(0,0),this.repeat=new Fe(1,1),this.center=new Fe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new _t,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Zp)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case cs:e.x=e.x-Math.floor(e.x);break;case as:e.x=e.x<0?0:1;break;case Yh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case cs:e.y=e.y-Math.floor(e.y);break;case as:e.y=e.y<0?0:1;break;case Yh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};jn.DEFAULT_IMAGE=null;jn.DEFAULT_MAPPING=Zp;jn.DEFAULT_ANISOTROPY=1;var Jt=class i{constructor(e=0,t=0,n=0,r=1){i.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s,c=e.elements,l=c[0],h=c[4],p=c[8],f=c[1],d=c[5],g=c[9],x=c[2],m=c[6],u=c[10];if(Math.abs(h-f)<.01&&Math.abs(p-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(p+x)<.1&&Math.abs(g+m)<.1&&Math.abs(l+d+u-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let y=(l+1)/2,_=(d+1)/2,P=(u+1)/2,T=(h+f)/4,R=(p+x)/4,A=(g+m)/4;return y>_&&y>P?y<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(y),r=T/n,s=R/n):_>P?_<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(_),n=T/r,s=A/r):P<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(P),n=R/s,r=A/s),this.set(n,r,s,t),this}let E=Math.sqrt((m-g)*(m-g)+(p-x)*(p-x)+(f-h)*(f-h));return Math.abs(E)<.001&&(E=1),this.x=(m-g)/E,this.y=(p-x)/E,this.z=(f-h)/E,this.w=Math.acos((l+d+u-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Eu=class extends Nr{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Jt(0,0,e,t),this.scissorTest=!1,this.viewport=new Jt(0,0,e,t);let r={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:pn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let s=new jn(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,r=e.textures.length;n<r;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new Lc(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},yr=class extends Eu{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Dc=class extends jn{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=si,this.minFilter=si,this.wrapR=as,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Su=class extends jn{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=si,this.minFilter=si,this.wrapR=as,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var ft=class{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,o,a){let c=n[r+0],l=n[r+1],h=n[r+2],p=n[r+3],f=s[o+0],d=s[o+1],g=s[o+2],x=s[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=h,e[t+3]=p;return}if(a===1){e[t+0]=f,e[t+1]=d,e[t+2]=g,e[t+3]=x;return}if(p!==x||c!==f||l!==d||h!==g){let m=1-a,u=c*f+l*d+h*g+p*x,E=u>=0?1:-1,y=1-u*u;if(y>Number.EPSILON){let P=Math.sqrt(y),T=Math.atan2(P,u*E);m=Math.sin(m*T)/P,a=Math.sin(a*T)/P}let _=a*E;if(c=c*m+f*_,l=l*m+d*_,h=h*m+g*_,p=p*m+x*_,m===1-a){let P=1/Math.sqrt(c*c+l*l+h*h+p*p);c*=P,l*=P,h*=P,p*=P}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=p}static multiplyQuaternionsFlat(e,t,n,r,s,o){let a=n[r],c=n[r+1],l=n[r+2],h=n[r+3],p=s[o],f=s[o+1],d=s[o+2],g=s[o+3];return e[t]=a*g+h*p+c*d-l*f,e[t+1]=c*g+h*f+l*p-a*d,e[t+2]=l*g+h*d+a*f-c*p,e[t+3]=h*g-a*p-c*f-l*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(r/2),p=a(s/2),f=c(n/2),d=c(r/2),g=c(s/2);switch(o){case"XYZ":this._x=f*h*p+l*d*g,this._y=l*d*p-f*h*g,this._z=l*h*g+f*d*p,this._w=l*h*p-f*d*g;break;case"YXZ":this._x=f*h*p+l*d*g,this._y=l*d*p-f*h*g,this._z=l*h*g-f*d*p,this._w=l*h*p+f*d*g;break;case"ZXY":this._x=f*h*p-l*d*g,this._y=l*d*p+f*h*g,this._z=l*h*g+f*d*p,this._w=l*h*p-f*d*g;break;case"ZYX":this._x=f*h*p-l*d*g,this._y=l*d*p+f*h*g,this._z=l*h*g-f*d*p,this._w=l*h*p+f*d*g;break;case"YZX":this._x=f*h*p+l*d*g,this._y=l*d*p+f*h*g,this._z=l*h*g-f*d*p,this._w=l*h*p-f*d*g;break;case"XZY":this._x=f*h*p-l*d*g,this._y=l*d*p-f*h*g,this._z=l*h*g+f*d*p,this._w=l*h*p+f*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],r=t[4],s=t[8],o=t[1],a=t[5],c=t[9],l=t[2],h=t[6],p=t[10],f=n+a+p;if(f>0){let d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-c)*d,this._y=(s-l)*d,this._z=(o-r)*d}else if(n>a&&n>p){let d=2*Math.sqrt(1+n-a-p);this._w=(h-c)/d,this._x=.25*d,this._y=(r+o)/d,this._z=(s+l)/d}else if(a>p){let d=2*Math.sqrt(1+a-n-p);this._w=(s-l)/d,this._x=(r+o)/d,this._y=.25*d,this._z=(c+h)/d}else{let d=2*Math.sqrt(1+p-n-a);this._w=(o-r)/d,this._x=(s+l)/d,this._y=(c+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(bn(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,r=e._y,s=e._z,o=e._w,a=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+o*a+r*l-s*c,this._y=r*h+o*c+s*a-n*l,this._z=s*h+o*l+n*c-r*a,this._w=o*h-n*a-r*c-s*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,r=this._y,s=this._z,o=this._w,a=o*e._w+n*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=r,this._z=s,this;let c=1-a*a;if(c<=Number.EPSILON){let d=1-t;return this._w=d*o+t*this._w,this._x=d*n+t*this._x,this._y=d*r+t*this._y,this._z=d*s+t*this._z,this.normalize(),this}let l=Math.sqrt(c),h=Math.atan2(l,a),p=Math.sin((1-t)*h)/l,f=Math.sin(t*h)/l;return this._w=o*p+this._w*f,this._x=n*p+this._x*f,this._y=r*p+this._y*f,this._z=s*p+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},S=class i{constructor(e=0,t=0,n=0){i.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(qf.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(qf.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,r=this.z,s=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*r-a*n),h=2*(a*t-s*r),p=2*(s*n-o*t);return this.x=t+c*l+o*p-a*h,this.y=n+c*h+a*l-s*p,this.z=r+c*p+s*h-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,r=e.y,s=e.z,o=t.x,a=t.y,c=t.z;return this.x=r*c-s*a,this.y=s*o-n*c,this.z=n*a-r*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return ah.copy(this).projectOnVector(e),this.sub(ah)}reflect(e){return this.sub(ah.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(bn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},ah=new S,qf=new ft,Dn=class{constructor(e=new S(1/0,1/0,1/0),t=new S(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(ki.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(ki.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=ki.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,ki):ki.fromBufferAttribute(s,o),ki.applyMatrix4(e.matrixWorld),this.expandByPoint(ki);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ya.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ya.copy(n.boundingBox)),Ya.applyMatrix4(e.matrixWorld),this.union(Ya)}let r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ki),ki.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ko),Za.subVectors(this.max,ko),Is.subVectors(e.a,ko),Ls.subVectors(e.b,ko),Ds.subVectors(e.c,ko),Tr.subVectors(Ls,Is),Rr.subVectors(Ds,Ls),Jr.subVectors(Is,Ds);let t=[0,-Tr.z,Tr.y,0,-Rr.z,Rr.y,0,-Jr.z,Jr.y,Tr.z,0,-Tr.x,Rr.z,0,-Rr.x,Jr.z,0,-Jr.x,-Tr.y,Tr.x,0,-Rr.y,Rr.x,0,-Jr.y,Jr.x,0];return!ch(t,Is,Ls,Ds,Za)||(t=[1,0,0,0,1,0,0,0,1],!ch(t,Is,Ls,Ds,Za))?!1:($a.crossVectors(Tr,Rr),t=[$a.x,$a.y,$a.z],ch(t,Is,Ls,Ds,Za))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ki).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ki).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(hr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),hr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),hr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),hr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),hr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),hr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),hr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),hr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(hr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},hr=[new S,new S,new S,new S,new S,new S,new S,new S],ki=new S,Ya=new Dn,Is=new S,Ls=new S,Ds=new S,Tr=new S,Rr=new S,Jr=new S,ko=new S,Za=new S,$a=new S,Qr=new S;function ch(i,e,t,n,r){for(let s=0,o=i.length-3;s<=o;s+=3){Qr.fromArray(i,s);let a=r.x*Math.abs(Qr.x)+r.y*Math.abs(Qr.y)+r.z*Math.abs(Qr.z),c=e.dot(Qr),l=t.dot(Qr),h=n.dot(Qr);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}var ix=new Dn,Vo=new S,lh=new S,Fr=class{constructor(e=new S,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):ix.setFromPoints(e).getCenter(n);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Vo.subVectors(e,this.center);let t=Vo.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(Vo,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(lh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Vo.copy(e.center).add(lh)),this.expandByPoint(Vo.copy(e.center).sub(lh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},ur=new S,hh=new S,Ka=new S,Ar=new S,uh=new S,Ja=new S,dh=new S,ra=class{constructor(e=new S,t=new S(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ur)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=ur.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ur.copy(this.origin).addScaledVector(this.direction,t),ur.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){hh.copy(e).add(t).multiplyScalar(.5),Ka.copy(t).sub(e).normalize(),Ar.copy(this.origin).sub(hh);let s=e.distanceTo(t)*.5,o=-this.direction.dot(Ka),a=Ar.dot(this.direction),c=-Ar.dot(Ka),l=Ar.lengthSq(),h=Math.abs(1-o*o),p,f,d,g;if(h>0)if(p=o*c-a,f=o*a-c,g=s*h,p>=0)if(f>=-g)if(f<=g){let x=1/h;p*=x,f*=x,d=p*(p+o*f+2*a)+f*(o*p+f+2*c)+l}else f=s,p=Math.max(0,-(o*f+a)),d=-p*p+f*(f+2*c)+l;else f=-s,p=Math.max(0,-(o*f+a)),d=-p*p+f*(f+2*c)+l;else f<=-g?(p=Math.max(0,-(-o*s+a)),f=p>0?-s:Math.min(Math.max(-s,-c),s),d=-p*p+f*(f+2*c)+l):f<=g?(p=0,f=Math.min(Math.max(-s,-c),s),d=f*(f+2*c)+l):(p=Math.max(0,-(o*s+a)),f=p>0?s:Math.min(Math.max(-s,-c),s),d=-p*p+f*(f+2*c)+l);else f=o>0?-s:s,p=Math.max(0,-(o*f+a)),d=-p*p+f*(f+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,p),r&&r.copy(hh).addScaledVector(Ka,f),d}intersectSphere(e,t){ur.subVectors(e.center,this.origin);let n=ur.dot(this.direction),r=ur.dot(ur)-n*n,s=e.radius*e.radius;if(r>s)return null;let o=Math.sqrt(s-r),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,o,a,c,l=1/this.direction.x,h=1/this.direction.y,p=1/this.direction.z,f=this.origin;return l>=0?(n=(e.min.x-f.x)*l,r=(e.max.x-f.x)*l):(n=(e.max.x-f.x)*l,r=(e.min.x-f.x)*l),h>=0?(s=(e.min.y-f.y)*h,o=(e.max.y-f.y)*h):(s=(e.max.y-f.y)*h,o=(e.min.y-f.y)*h),n>o||s>r||((s>n||isNaN(n))&&(n=s),(o<r||isNaN(r))&&(r=o),p>=0?(a=(e.min.z-f.z)*p,c=(e.max.z-f.z)*p):(a=(e.max.z-f.z)*p,c=(e.min.z-f.z)*p),n>c||a>r)||((a>n||n!==n)&&(n=a),(c<r||r!==r)&&(r=c),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,ur)!==null}intersectTriangle(e,t,n,r,s){uh.subVectors(t,e),Ja.subVectors(n,e),dh.crossVectors(uh,Ja);let o=this.direction.dot(dh),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ar.subVectors(this.origin,e);let c=a*this.direction.dot(Ja.crossVectors(Ar,Ja));if(c<0)return null;let l=a*this.direction.dot(uh.cross(Ar));if(l<0||c+l>o)return null;let h=-a*Ar.dot(dh);return h<0?null:this.at(h/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Rt=class i{constructor(e,t,n,r,s,o,a,c,l,h,p,f,d,g,x,m){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,o,a,c,l,h,p,f,d,g,x,m)}set(e,t,n,r,s,o,a,c,l,h,p,f,d,g,x,m){let u=this.elements;return u[0]=e,u[4]=t,u[8]=n,u[12]=r,u[1]=s,u[5]=o,u[9]=a,u[13]=c,u[2]=l,u[6]=h,u[10]=p,u[14]=f,u[3]=d,u[7]=g,u[11]=x,u[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,r=1/Us.setFromMatrixColumn(e,0).length(),s=1/Us.setFromMatrixColumn(e,1).length(),o=1/Us.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,r=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(r),l=Math.sin(r),h=Math.cos(s),p=Math.sin(s);if(e.order==="XYZ"){let f=o*h,d=o*p,g=a*h,x=a*p;t[0]=c*h,t[4]=-c*p,t[8]=l,t[1]=d+g*l,t[5]=f-x*l,t[9]=-a*c,t[2]=x-f*l,t[6]=g+d*l,t[10]=o*c}else if(e.order==="YXZ"){let f=c*h,d=c*p,g=l*h,x=l*p;t[0]=f+x*a,t[4]=g*a-d,t[8]=o*l,t[1]=o*p,t[5]=o*h,t[9]=-a,t[2]=d*a-g,t[6]=x+f*a,t[10]=o*c}else if(e.order==="ZXY"){let f=c*h,d=c*p,g=l*h,x=l*p;t[0]=f-x*a,t[4]=-o*p,t[8]=g+d*a,t[1]=d+g*a,t[5]=o*h,t[9]=x-f*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){let f=o*h,d=o*p,g=a*h,x=a*p;t[0]=c*h,t[4]=g*l-d,t[8]=f*l+x,t[1]=c*p,t[5]=x*l+f,t[9]=d*l-g,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){let f=o*c,d=o*l,g=a*c,x=a*l;t[0]=c*h,t[4]=x-f*p,t[8]=g*p+d,t[1]=p,t[5]=o*h,t[9]=-a*h,t[2]=-l*h,t[6]=d*p+g,t[10]=f-x*p}else if(e.order==="XZY"){let f=o*c,d=o*l,g=a*c,x=a*l;t[0]=c*h,t[4]=-p,t[8]=l*h,t[1]=f*p+x,t[5]=o*h,t[9]=d*p-g,t[2]=g*p-d,t[6]=a*h,t[10]=x*p+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(rx,e,sx)}lookAt(e,t,n){let r=this.elements;return mi.subVectors(e,t),mi.lengthSq()===0&&(mi.z=1),mi.normalize(),Cr.crossVectors(n,mi),Cr.lengthSq()===0&&(Math.abs(n.z)===1?mi.x+=1e-4:mi.z+=1e-4,mi.normalize(),Cr.crossVectors(n,mi)),Cr.normalize(),Qa.crossVectors(mi,Cr),r[0]=Cr.x,r[4]=Qa.x,r[8]=mi.x,r[1]=Cr.y,r[5]=Qa.y,r[9]=mi.y,r[2]=Cr.z,r[6]=Qa.z,r[10]=mi.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],p=n[5],f=n[9],d=n[13],g=n[2],x=n[6],m=n[10],u=n[14],E=n[3],y=n[7],_=n[11],P=n[15],T=r[0],R=r[4],A=r[8],O=r[12],v=r[1],w=r[5],V=r[9],G=r[13],z=r[2],H=r[6],Q=r[10],le=r[14],ie=r[3],fe=r[7],N=r[11],j=r[15];return s[0]=o*T+a*v+c*z+l*ie,s[4]=o*R+a*w+c*H+l*fe,s[8]=o*A+a*V+c*Q+l*N,s[12]=o*O+a*G+c*le+l*j,s[1]=h*T+p*v+f*z+d*ie,s[5]=h*R+p*w+f*H+d*fe,s[9]=h*A+p*V+f*Q+d*N,s[13]=h*O+p*G+f*le+d*j,s[2]=g*T+x*v+m*z+u*ie,s[6]=g*R+x*w+m*H+u*fe,s[10]=g*A+x*V+m*Q+u*N,s[14]=g*O+x*G+m*le+u*j,s[3]=E*T+y*v+_*z+P*ie,s[7]=E*R+y*w+_*H+P*fe,s[11]=E*A+y*V+_*Q+P*N,s[15]=E*O+y*G+_*le+P*j,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],o=e[1],a=e[5],c=e[9],l=e[13],h=e[2],p=e[6],f=e[10],d=e[14],g=e[3],x=e[7],m=e[11],u=e[15];return g*(+s*c*p-r*l*p-s*a*f+n*l*f+r*a*d-n*c*d)+x*(+t*c*d-t*l*f+s*o*f-r*o*d+r*l*h-s*c*h)+m*(+t*l*p-t*a*d-s*o*p+n*o*d+s*a*h-n*l*h)+u*(-r*a*h-t*c*p+t*a*f+r*o*p-n*o*f+n*c*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],p=e[9],f=e[10],d=e[11],g=e[12],x=e[13],m=e[14],u=e[15],E=p*m*l-x*f*l+x*c*d-a*m*d-p*c*u+a*f*u,y=g*f*l-h*m*l-g*c*d+o*m*d+h*c*u-o*f*u,_=h*x*l-g*p*l+g*a*d-o*x*d-h*a*u+o*p*u,P=g*p*c-h*x*c-g*a*f+o*x*f+h*a*m-o*p*m,T=t*E+n*y+r*_+s*P;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let R=1/T;return e[0]=E*R,e[1]=(x*f*s-p*m*s-x*r*d+n*m*d+p*r*u-n*f*u)*R,e[2]=(a*m*s-x*c*s+x*r*l-n*m*l-a*r*u+n*c*u)*R,e[3]=(p*c*s-a*f*s-p*r*l+n*f*l+a*r*d-n*c*d)*R,e[4]=y*R,e[5]=(h*m*s-g*f*s+g*r*d-t*m*d-h*r*u+t*f*u)*R,e[6]=(g*c*s-o*m*s-g*r*l+t*m*l+o*r*u-t*c*u)*R,e[7]=(o*f*s-h*c*s+h*r*l-t*f*l-o*r*d+t*c*d)*R,e[8]=_*R,e[9]=(g*p*s-h*x*s-g*n*d+t*x*d+h*n*u-t*p*u)*R,e[10]=(o*x*s-g*a*s+g*n*l-t*x*l-o*n*u+t*a*u)*R,e[11]=(h*a*s-o*p*s-h*n*l+t*p*l+o*n*d-t*a*d)*R,e[12]=P*R,e[13]=(h*x*r-g*p*r+g*n*f-t*x*f-h*n*m+t*p*m)*R,e[14]=(g*a*r-o*x*r-g*n*c+t*x*c+o*n*m-t*a*m)*R,e[15]=(o*p*r-h*a*r+h*n*c-t*p*c-o*n*f+t*a*f)*R,this}scale(e){let t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),r=Math.sin(t),s=1-n,o=e.x,a=e.y,c=e.z,l=s*o,h=s*a;return this.set(l*o+n,l*a-r*c,l*c+r*a,0,l*a+r*c,h*a+n,h*c-r*o,0,l*c-r*a,h*c+r*o,s*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,o){return this.set(1,n,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){let r=this.elements,s=t._x,o=t._y,a=t._z,c=t._w,l=s+s,h=o+o,p=a+a,f=s*l,d=s*h,g=s*p,x=o*h,m=o*p,u=a*p,E=c*l,y=c*h,_=c*p,P=n.x,T=n.y,R=n.z;return r[0]=(1-(x+u))*P,r[1]=(d+_)*P,r[2]=(g-y)*P,r[3]=0,r[4]=(d-_)*T,r[5]=(1-(f+u))*T,r[6]=(m+E)*T,r[7]=0,r[8]=(g+y)*R,r[9]=(m-E)*R,r[10]=(1-(f+x))*R,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){let r=this.elements,s=Us.set(r[0],r[1],r[2]).length(),o=Us.set(r[4],r[5],r[6]).length(),a=Us.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Vi.copy(this);let l=1/s,h=1/o,p=1/a;return Vi.elements[0]*=l,Vi.elements[1]*=l,Vi.elements[2]*=l,Vi.elements[4]*=h,Vi.elements[5]*=h,Vi.elements[6]*=h,Vi.elements[8]*=p,Vi.elements[9]*=p,Vi.elements[10]*=p,t.setFromRotationMatrix(Vi),n.x=s,n.y=o,n.z=a,this}makePerspective(e,t,n,r,s,o,a=gr){let c=this.elements,l=2*s/(t-e),h=2*s/(n-r),p=(t+e)/(t-e),f=(n+r)/(n-r),d,g;if(a===gr)d=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===Ic)d=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=p,c[12]=0,c[1]=0,c[5]=h,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=d,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,r,s,o,a=gr){let c=this.elements,l=1/(t-e),h=1/(n-r),p=1/(o-s),f=(t+e)*l,d=(n+r)*h,g,x;if(a===gr)g=(o+s)*p,x=-2*p;else if(a===Ic)g=s*p,x=-1*p;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-f,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-d,c[2]=0,c[6]=0,c[10]=x,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Us=new S,Vi=new Rt,rx=new S(0,0,0),sx=new S(1,1,1),Cr=new S,Qa=new S,mi=new S,Yf=new Rt,Zf=new ft,oi=class i{constructor(e=0,t=0,n=0,r=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let r=e.elements,s=r[0],o=r[4],a=r[8],c=r[1],l=r[5],h=r[9],p=r[2],f=r[6],d=r[10];switch(t){case"XYZ":this._y=Math.asin(bn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-bn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-p,s),this._z=0);break;case"ZXY":this._x=Math.asin(bn(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-p,d),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-bn(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(bn(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-p,s)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-bn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-h,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Yf.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Yf,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Zf.setFromEuler(this),this.setFromQuaternion(Zf,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};oi.DEFAULT_ORDER="XYZ";var sa=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},ox=0,$f=new S,Hs=new ft,dr=new Rt,ja=new S,Go=new S,ax=new S,cx=new ft,Kf=new S(1,0,0),Jf=new S(0,1,0),Qf=new S(0,0,1),jf={type:"added"},lx={type:"removed"},Ns={type:"childadded",child:null},fh={type:"childremoved",child:null},Mt=class i extends Nr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ox++}),this.uuid=ms(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new S,t=new oi,n=new ft,r=new S(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Rt},normalMatrix:{value:new _t}}),this.matrix=new Rt,this.matrixWorld=new Rt,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new sa,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Hs.setFromAxisAngle(e,t),this.quaternion.multiply(Hs),this}rotateOnWorldAxis(e,t){return Hs.setFromAxisAngle(e,t),this.quaternion.premultiply(Hs),this}rotateX(e){return this.rotateOnAxis(Kf,e)}rotateY(e){return this.rotateOnAxis(Jf,e)}rotateZ(e){return this.rotateOnAxis(Qf,e)}translateOnAxis(e,t){return $f.copy(e).applyQuaternion(this.quaternion),this.position.add($f.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Kf,e)}translateY(e){return this.translateOnAxis(Jf,e)}translateZ(e){return this.translateOnAxis(Qf,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(dr.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?ja.copy(e):ja.set(e,t,n);let r=this.parent;this.updateWorldMatrix(!0,!1),Go.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?dr.lookAt(Go,ja,this.up):dr.lookAt(ja,Go,this.up),this.quaternion.setFromRotationMatrix(dr),r&&(dr.extractRotation(r.matrixWorld),Hs.setFromRotationMatrix(dr),this.quaternion.premultiply(Hs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(jf),Ns.child=e,this.dispatchEvent(Ns),Ns.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(lx),fh.child=e,this.dispatchEvent(fh),fh.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),dr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),dr.multiply(e.parent.matrixWorld)),e.applyMatrix4(dr),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(jf),Ns.child=e,this.dispatchEvent(Ns),Ns.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Go,e,ax),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Go,cx,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let p=c[l];s(e.shapes,p)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(s(e.materials,this.material[c]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];r.animations.push(s(e.animations,c))}}if(t){let a=o(e.geometries),c=o(e.materials),l=o(e.textures),h=o(e.images),p=o(e.shapes),f=o(e.skeletons),d=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),p.length>0&&(n.shapes=p),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=r,n;function o(a){let c=[];for(let l in a){let h=a[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let r=e.children[n];this.add(r.clone())}return this}};Mt.DEFAULT_UP=new S(0,1,0);Mt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Mt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Gi=new S,fr=new S,ph=new S,pr=new S,Fs=new S,Os=new S,ep=new S,mh=new S,gh=new S,xh=new S,yh=new Jt,vh=new Jt,_h=new Jt,ss=class i{constructor(e=new S,t=new S,n=new S){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),Gi.subVectors(e,t),r.cross(Gi);let s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){Gi.subVectors(r,t),fr.subVectors(n,t),ph.subVectors(e,t);let o=Gi.dot(Gi),a=Gi.dot(fr),c=Gi.dot(ph),l=fr.dot(fr),h=fr.dot(ph),p=o*l-a*a;if(p===0)return s.set(0,0,0),null;let f=1/p,d=(l*c-a*h)*f,g=(o*h-a*c)*f;return s.set(1-d-g,g,d)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,pr)===null?!1:pr.x>=0&&pr.y>=0&&pr.x+pr.y<=1}static getInterpolation(e,t,n,r,s,o,a,c){return this.getBarycoord(e,t,n,r,pr)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,pr.x),c.addScaledVector(o,pr.y),c.addScaledVector(a,pr.z),c)}static getInterpolatedAttribute(e,t,n,r,s,o){return yh.setScalar(0),vh.setScalar(0),_h.setScalar(0),yh.fromBufferAttribute(e,t),vh.fromBufferAttribute(e,n),_h.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(yh,s.x),o.addScaledVector(vh,s.y),o.addScaledVector(_h,s.z),o}static isFrontFacing(e,t,n,r){return Gi.subVectors(n,t),fr.subVectors(e,t),Gi.cross(fr).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Gi.subVectors(this.c,this.b),fr.subVectors(this.a,this.b),Gi.cross(fr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,s){return i.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,r=this.b,s=this.c,o,a;Fs.subVectors(r,n),Os.subVectors(s,n),mh.subVectors(e,n);let c=Fs.dot(mh),l=Os.dot(mh);if(c<=0&&l<=0)return t.copy(n);gh.subVectors(e,r);let h=Fs.dot(gh),p=Os.dot(gh);if(h>=0&&p<=h)return t.copy(r);let f=c*p-h*l;if(f<=0&&c>=0&&h<=0)return o=c/(c-h),t.copy(n).addScaledVector(Fs,o);xh.subVectors(e,s);let d=Fs.dot(xh),g=Os.dot(xh);if(g>=0&&d<=g)return t.copy(s);let x=d*l-c*g;if(x<=0&&l>=0&&g<=0)return a=l/(l-g),t.copy(n).addScaledVector(Os,a);let m=h*g-d*p;if(m<=0&&p-h>=0&&d-g>=0)return ep.subVectors(s,r),a=(p-h)/(p-h+(d-g)),t.copy(r).addScaledVector(ep,a);let u=1/(m+x+f);return o=x*u,a=f*u,t.copy(n).addScaledVector(Fs,o).addScaledVector(Os,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},a0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Pr={h:0,s:0,l:0},ec={h:0,s:0,l:0};function Mh(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var pt=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=xt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Yt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,r=Yt.workingColorSpace){return this.r=e,this.g=t,this.b=n,Yt.toWorkingColorSpace(this,r),this}setHSL(e,t,n,r=Yt.workingColorSpace){if(e=pd(e,1),t=bn(t,0,1),n=bn(n,0,1),t===0)this.r=this.g=this.b=n;else{let s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=Mh(o,s,e+1/3),this.g=Mh(o,s,e),this.b=Mh(o,s,e-1/3)}return Yt.toWorkingColorSpace(this,r),this}setStyle(e,t=xt){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=xt){let n=a0[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=$s(e.r),this.g=$s(e.g),this.b=$s(e.b),this}copyLinearToSRGB(e){return this.r=sh(e.r),this.g=sh(e.g),this.b=sh(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=xt){return Yt.fromWorkingColorSpace(Xn.copy(this),e),Math.round(bn(Xn.r*255,0,255))*65536+Math.round(bn(Xn.g*255,0,255))*256+Math.round(bn(Xn.b*255,0,255))}getHexString(e=xt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Yt.workingColorSpace){Yt.fromWorkingColorSpace(Xn.copy(this),t);let n=Xn.r,r=Xn.g,s=Xn.b,o=Math.max(n,r,s),a=Math.min(n,r,s),c,l,h=(a+o)/2;if(a===o)c=0,l=0;else{let p=o-a;switch(l=h<=.5?p/(o+a):p/(2-o-a),o){case n:c=(r-s)/p+(r<s?6:0);break;case r:c=(s-n)/p+2;break;case s:c=(n-r)/p+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=Yt.workingColorSpace){return Yt.fromWorkingColorSpace(Xn.copy(this),t),e.r=Xn.r,e.g=Xn.g,e.b=Xn.b,e}getStyle(e=xt){Yt.fromWorkingColorSpace(Xn.copy(this),e);let t=Xn.r,n=Xn.g,r=Xn.b;return e!==xt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(Pr),this.setHSL(Pr.h+e,Pr.s+t,Pr.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Pr),e.getHSL(ec);let n=Jo(Pr.h,ec.h,t),r=Jo(Pr.s,ec.s,t),s=Jo(Pr.l,ec.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Xn=new pt;pt.NAMES=a0;var hx=0,Or=class extends Nr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:hx++}),this.uuid=ms(),this.name="",this.type="Material",this.blending=Ys,this.side=nr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Fh,this.blendDst=Oh,this.blendEquation=rs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new pt(0,0,0),this.blendAlpha=0,this.depthFunc=Js,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=zf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Cs,this.stencilZFail=Cs,this.stencilZPass=Cs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ys&&(n.blending=this.blending),this.side!==nr&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Fh&&(n.blendSrc=this.blendSrc),this.blendDst!==Oh&&(n.blendDst=this.blendDst),this.blendEquation!==rs&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Js&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==zf&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Cs&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Cs&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Cs&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){let o=[];for(let a in s){let c=s[a];delete c.metadata,o.push(c)}return o}if(t){let s=r(e.textures),o=r(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},yt=class extends Or{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new pt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new oi,this.combine=Yp,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var xn=new S,tc=new Fe,hn=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Bf,this.updateRanges=[],this.gpuType=tr,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)tc.fromBufferAttribute(this,t),tc.applyMatrix3(e),this.setXY(t,tc.x,tc.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)xn.fromBufferAttribute(this,t),xn.applyMatrix3(e),this.setXYZ(t,xn.x,xn.y,xn.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)xn.fromBufferAttribute(this,t),xn.applyMatrix4(e),this.setXYZ(t,xn.x,xn.y,xn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)xn.fromBufferAttribute(this,t),xn.applyNormalMatrix(e),this.setXYZ(t,xn.x,xn.y,xn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)xn.fromBufferAttribute(this,t),xn.transformDirection(e),this.setXYZ(t,xn.x,xn.y,xn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Ws(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Jn(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ws(t,this.array)),t}setX(e,t){return this.normalized&&(t=Jn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ws(t,this.array)),t}setY(e,t){return this.normalized&&(t=Jn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ws(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Jn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ws(t,this.array)),t}setW(e,t){return this.normalized&&(t=Jn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Jn(t,this.array),n=Jn(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=Jn(t,this.array),n=Jn(n,this.array),r=Jn(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=Jn(t,this.array),n=Jn(n,this.array),r=Jn(r,this.array),s=Jn(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Bf&&(e.usage=this.usage),e}};var Uc=class extends hn{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Hc=class extends hn{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var lt=class extends hn{constructor(e,t,n){super(new Float32Array(e),t,n)}},ux=0,Si=new Rt,Eh=new Mt,zs=new S,gi=new Dn,Wo=new Dn,Ln=new S,Pt=class i extends Nr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ux++}),this.uuid=ms(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(o0(e)?Hc:Uc)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let s=new _t().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}let r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Si.makeRotationFromQuaternion(e),this.applyMatrix4(Si),this}rotateX(e){return Si.makeRotationX(e),this.applyMatrix4(Si),this}rotateY(e){return Si.makeRotationY(e),this.applyMatrix4(Si),this}rotateZ(e){return Si.makeRotationZ(e),this.applyMatrix4(Si),this}translate(e,t,n){return Si.makeTranslation(e,t,n),this.applyMatrix4(Si),this}scale(e,t,n){return Si.makeScale(e,t,n),this.applyMatrix4(Si),this}lookAt(e){return Eh.lookAt(e),Eh.updateMatrix(),this.applyMatrix4(Eh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(zs).negate(),this.translate(zs.x,zs.y,zs.z),this}setFromPoints(e){let t=[];for(let n=0,r=e.length;n<r;n++){let s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new lt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Dn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new S(-1/0,-1/0,-1/0),new S(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){let s=t[n];gi.setFromBufferAttribute(s),this.morphTargetsRelative?(Ln.addVectors(this.boundingBox.min,gi.min),this.boundingBox.expandByPoint(Ln),Ln.addVectors(this.boundingBox.max,gi.max),this.boundingBox.expandByPoint(Ln)):(this.boundingBox.expandByPoint(gi.min),this.boundingBox.expandByPoint(gi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Fr);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new S,1/0);return}if(e){let n=this.boundingSphere.center;if(gi.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){let a=t[s];Wo.setFromBufferAttribute(a),this.morphTargetsRelative?(Ln.addVectors(gi.min,Wo.min),gi.expandByPoint(Ln),Ln.addVectors(gi.max,Wo.max),gi.expandByPoint(Ln)):(gi.expandByPoint(Wo.min),gi.expandByPoint(Wo.max))}gi.getCenter(n);let r=0;for(let s=0,o=e.count;s<o;s++)Ln.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(Ln));if(t)for(let s=0,o=t.length;s<o;s++){let a=t[s],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)Ln.fromBufferAttribute(a,l),c&&(zs.fromBufferAttribute(e,l),Ln.add(zs)),r=Math.max(r,n.distanceToSquared(Ln))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new hn(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],c=[];for(let A=0;A<n.count;A++)a[A]=new S,c[A]=new S;let l=new S,h=new S,p=new S,f=new Fe,d=new Fe,g=new Fe,x=new S,m=new S;function u(A,O,v){l.fromBufferAttribute(n,A),h.fromBufferAttribute(n,O),p.fromBufferAttribute(n,v),f.fromBufferAttribute(s,A),d.fromBufferAttribute(s,O),g.fromBufferAttribute(s,v),h.sub(l),p.sub(l),d.sub(f),g.sub(f);let w=1/(d.x*g.y-g.x*d.y);isFinite(w)&&(x.copy(h).multiplyScalar(g.y).addScaledVector(p,-d.y).multiplyScalar(w),m.copy(p).multiplyScalar(d.x).addScaledVector(h,-g.x).multiplyScalar(w),a[A].add(x),a[O].add(x),a[v].add(x),c[A].add(m),c[O].add(m),c[v].add(m))}let E=this.groups;E.length===0&&(E=[{start:0,count:e.count}]);for(let A=0,O=E.length;A<O;++A){let v=E[A],w=v.start,V=v.count;for(let G=w,z=w+V;G<z;G+=3)u(e.getX(G+0),e.getX(G+1),e.getX(G+2))}let y=new S,_=new S,P=new S,T=new S;function R(A){P.fromBufferAttribute(r,A),T.copy(P);let O=a[A];y.copy(O),y.sub(P.multiplyScalar(P.dot(O))).normalize(),_.crossVectors(T,O);let w=_.dot(c[A])<0?-1:1;o.setXYZW(A,y.x,y.y,y.z,w)}for(let A=0,O=E.length;A<O;++A){let v=E[A],w=v.start,V=v.count;for(let G=w,z=w+V;G<z;G+=3)R(e.getX(G+0)),R(e.getX(G+1)),R(e.getX(G+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new hn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);let r=new S,s=new S,o=new S,a=new S,c=new S,l=new S,h=new S,p=new S;if(e)for(let f=0,d=e.count;f<d;f+=3){let g=e.getX(f+0),x=e.getX(f+1),m=e.getX(f+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,x),o.fromBufferAttribute(t,m),h.subVectors(o,s),p.subVectors(r,s),h.cross(p),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,x),l.fromBufferAttribute(n,m),a.add(h),c.add(h),l.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(x,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let f=0,d=t.count;f<d;f+=3)r.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),h.subVectors(o,s),p.subVectors(r,s),h.cross(p),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Ln.fromBufferAttribute(e,t),Ln.normalize(),e.setXYZ(t,Ln.x,Ln.y,Ln.z)}toNonIndexed(){function e(a,c){let l=a.array,h=a.itemSize,p=a.normalized,f=new l.constructor(c.length*h),d=0,g=0;for(let x=0,m=c.length;x<m;x++){a.isInterleavedBufferAttribute?d=c[x]*a.data.stride+a.offset:d=c[x]*h;for(let u=0;u<h;u++)f[g++]=l[d++]}return new hn(f,h,p)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,r=this.attributes;for(let a in r){let c=r[a],l=e(c,n);t.setAttribute(a,l)}let s=this.morphAttributes;for(let a in s){let c=[],l=s[a];for(let h=0,p=l.length;h<p;h++){let f=l[h],d=e(f,n);c.push(d)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let c in n){let l=n[c];e.data.attributes[c]=l.toJSON(e.data)}let r={},s=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let p=0,f=l.length;p<f;p++){let d=l[p];h.push(d.toJSON(e.data))}h.length>0&&(r[c]=h,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let r=e.attributes;for(let l in r){let h=r[l];this.setAttribute(l,h.clone(t))}let s=e.morphAttributes;for(let l in s){let h=[],p=s[l];for(let f=0,d=p.length;f<d;f++)h.push(p[f].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let l=0,h=o.length;l<h;l++){let p=o[l];this.addGroup(p.start,p.count,p.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},tp=new Rt,jr=new ra,nc=new Fr,np=new S,ic=new S,rc=new S,sc=new S,Sh=new S,oc=new S,ip=new S,ac=new S,dt=class extends Mt{constructor(e=new Pt,t=new yt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){let n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(r,e);let a=this.morphTargetInfluences;if(s&&a){oc.set(0,0,0);for(let c=0,l=s.length;c<l;c++){let h=a[c],p=s[c];h!==0&&(Sh.fromBufferAttribute(p,e),o?oc.addScaledVector(Sh,h):oc.addScaledVector(Sh.sub(t),h))}t.add(oc)}return t}raycast(e,t){let n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),nc.copy(n.boundingSphere),nc.applyMatrix4(s),jr.copy(e.ray).recast(e.near),!(nc.containsPoint(jr.origin)===!1&&(jr.intersectSphere(nc,np)===null||jr.origin.distanceToSquared(np)>(e.far-e.near)**2))&&(tp.copy(s).invert(),jr.copy(e.ray).applyMatrix4(tp),!(n.boundingBox!==null&&jr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,jr)))}_computeIntersections(e,t,n){let r,s=this.geometry,o=this.material,a=s.index,c=s.attributes.position,l=s.attributes.uv,h=s.attributes.uv1,p=s.attributes.normal,f=s.groups,d=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,x=f.length;g<x;g++){let m=f[g],u=o[m.materialIndex],E=Math.max(m.start,d.start),y=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let _=E,P=y;_<P;_+=3){let T=a.getX(_),R=a.getX(_+1),A=a.getX(_+2);r=cc(this,u,e,n,l,h,p,T,R,A),r&&(r.faceIndex=Math.floor(_/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{let g=Math.max(0,d.start),x=Math.min(a.count,d.start+d.count);for(let m=g,u=x;m<u;m+=3){let E=a.getX(m),y=a.getX(m+1),_=a.getX(m+2);r=cc(this,o,e,n,l,h,p,E,y,_),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,x=f.length;g<x;g++){let m=f[g],u=o[m.materialIndex],E=Math.max(m.start,d.start),y=Math.min(c.count,Math.min(m.start+m.count,d.start+d.count));for(let _=E,P=y;_<P;_+=3){let T=_,R=_+1,A=_+2;r=cc(this,u,e,n,l,h,p,T,R,A),r&&(r.faceIndex=Math.floor(_/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{let g=Math.max(0,d.start),x=Math.min(c.count,d.start+d.count);for(let m=g,u=x;m<u;m+=3){let E=m,y=m+1,_=m+2;r=cc(this,o,e,n,l,h,p,E,y,_),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}};function dx(i,e,t,n,r,s,o,a){let c;if(e.side===yn?c=n.intersectTriangle(o,s,r,!0,a):c=n.intersectTriangle(r,s,o,e.side===nr,a),c===null)return null;ac.copy(a),ac.applyMatrix4(i.matrixWorld);let l=t.ray.origin.distanceTo(ac);return l<t.near||l>t.far?null:{distance:l,point:ac.clone(),object:i}}function cc(i,e,t,n,r,s,o,a,c,l){i.getVertexPosition(a,ic),i.getVertexPosition(c,rc),i.getVertexPosition(l,sc);let h=dx(i,e,t,n,ic,rc,sc,ip);if(h){let p=new S;ss.getBarycoord(ip,ic,rc,sc,p),r&&(h.uv=ss.getInterpolatedAttribute(r,a,c,l,p,new Fe)),s&&(h.uv1=ss.getInterpolatedAttribute(s,a,c,l,p,new Fe)),o&&(h.normal=ss.getInterpolatedAttribute(o,a,c,l,p,new S),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let f={a,b:c,c:l,normal:new S,materialIndex:0};ss.getNormal(ic,rc,sc,f.normal),h.face=f,h.barycoord=p}return h}var wt=class i extends Pt{constructor(e=1,t=1,n=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:o};let a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);let c=[],l=[],h=[],p=[],f=0,d=0;g("z","y","x",-1,-1,n,t,e,o,s,0),g("z","y","x",1,-1,n,t,-e,o,s,1),g("x","z","y",1,1,e,n,t,r,o,2),g("x","z","y",1,-1,e,n,-t,r,o,3),g("x","y","z",1,-1,e,t,n,r,s,4),g("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(c),this.setAttribute("position",new lt(l,3)),this.setAttribute("normal",new lt(h,3)),this.setAttribute("uv",new lt(p,2));function g(x,m,u,E,y,_,P,T,R,A,O){let v=_/R,w=P/A,V=_/2,G=P/2,z=T/2,H=R+1,Q=A+1,le=0,ie=0,fe=new S;for(let N=0;N<Q;N++){let j=N*w-G;for(let ne=0;ne<H;ne++){let ee=ne*v-V;fe[x]=ee*E,fe[m]=j*y,fe[u]=z,l.push(fe.x,fe.y,fe.z),fe[x]=0,fe[m]=0,fe[u]=T>0?1:-1,h.push(fe.x,fe.y,fe.z),p.push(ne/R),p.push(1-N/A),le+=1}}for(let N=0;N<A;N++)for(let j=0;j<R;j++){let ne=f+j+H*N,ee=f+j+H*(N+1),F=f+(j+1)+H*(N+1),se=f+(j+1)+H*N;c.push(ne,ee,se),c.push(ee,F,se),ie+=6}a.addGroup(d,ie,O),d+=ie,f+=le}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function io(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function Qn(i){let e={};for(let t=0;t<i.length;t++){let n=io(i[t]);for(let r in n)e[r]=n[r]}return e}function fx(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function c0(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Yt.workingColorSpace}var px={clone:io,merge:Qn},mx=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,gx=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,ir=class extends Or{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=mx,this.fragmentShader=gx,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=io(e.uniforms),this.uniformsGroups=fx(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let r in this.uniforms){let o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},Nc=class extends Mt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Rt,this.projectionMatrix=new Rt,this.projectionMatrixInverse=new Rt,this.coordinateSystem=gr}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Ir=new S,rp=new Fe,sp=new Fe,On=class extends Nc{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=no*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Ko*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return no*2*Math.atan(Math.tan(Ko*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Ir.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ir.x,Ir.y).multiplyScalar(-e/Ir.z),Ir.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ir.x,Ir.y).multiplyScalar(-e/Ir.z)}getViewSize(e,t){return this.getViewBounds(e,rp,sp),t.subVectors(sp,rp)}setViewOffset(e,t,n,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Ko*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;s+=o.offsetX*r/c,t-=o.offsetY*n/l,r*=o.width/c,n*=o.height/l}let a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Bs=-90,ks=1,wu=class extends Mt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let r=new On(Bs,ks,e,t);r.layers=this.layers,this.add(r);let s=new On(Bs,ks,e,t);s.layers=this.layers,this.add(s);let o=new On(Bs,ks,e,t);o.layers=this.layers,this.add(o);let a=new On(Bs,ks,e,t);a.layers=this.layers,this.add(a);let c=new On(Bs,ks,e,t);c.layers=this.layers,this.add(c);let l=new On(Bs,ks,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,r,s,o,a,c]=t;for(let l of t)this.remove(l);if(e===gr)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Ic)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[s,o,a,c,l,h]=this.children,p=e.getRenderTarget(),f=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,r),e.render(t,s),e.setRenderTarget(n,1,r),e.render(t,o),e.setRenderTarget(n,2,r),e.render(t,a),e.setRenderTarget(n,3,r),e.render(t,c),e.setRenderTarget(n,4,r),e.render(t,l),n.texture.generateMipmaps=x,e.setRenderTarget(n,5,r),e.render(t,h),e.setRenderTarget(p,f,d),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},Fc=class extends jn{constructor(e,t,n,r,s,o,a,c,l,h){e=e!==void 0?e:[],t=t!==void 0?t:Qs,super(e,t,n,r,s,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},bu=class extends yr{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new Fc(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:pn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new wt(5,5,5),s=new ir({name:"CubemapFromEquirect",uniforms:io(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:yn,blending:Dr});s.uniforms.tEquirect.value=t;let o=new dt(r,s),a=t.minFilter;return t.minFilter===Wi&&(t.minFilter=pn),new wu(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,r){let s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,r);e.setRenderTarget(s)}},wh=new S,xx=new S,yx=new _t,wi=class{constructor(e=new S(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let r=wh.subVectors(n,t).cross(xx.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(wh),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||yx.getNormalMatrix(e),r=this.coplanarPoint(wh).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},es=new Fr,lc=new S,oa=class{constructor(e=new wi,t=new wi,n=new wi,r=new wi,s=new wi,o=new wi){this.planes=[e,t,n,r,s,o]}set(e,t,n,r,s,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=gr){let n=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],c=r[3],l=r[4],h=r[5],p=r[6],f=r[7],d=r[8],g=r[9],x=r[10],m=r[11],u=r[12],E=r[13],y=r[14],_=r[15];if(n[0].setComponents(c-s,f-l,m-d,_-u).normalize(),n[1].setComponents(c+s,f+l,m+d,_+u).normalize(),n[2].setComponents(c+o,f+h,m+g,_+E).normalize(),n[3].setComponents(c-o,f-h,m-g,_-E).normalize(),n[4].setComponents(c-a,f-p,m-x,_-y).normalize(),t===gr)n[5].setComponents(c+a,f+p,m+x,_+y).normalize();else if(t===Ic)n[5].setComponents(a,p,x,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),es.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),es.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(es)}intersectsSprite(e){return es.center.set(0,0,0),es.radius=.7071067811865476,es.applyMatrix4(e.matrixWorld),this.intersectsSphere(es)}intersectsSphere(e){let t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let r=t[n];if(lc.x=r.normal.x>0?e.max.x:e.min.x,lc.y=r.normal.y>0?e.max.y:e.min.y,lc.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(lc)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function l0(){let i=null,e=!1,t=null,n=null;function r(s,o){t(s,o),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function vx(i){let e=new WeakMap;function t(a,c){let l=a.array,h=a.usage,p=l.byteLength,f=i.createBuffer();i.bindBuffer(c,f),i.bufferData(c,l,h),a.onUploadCallback();let d;if(l instanceof Float32Array)d=i.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)d=i.SHORT;else if(l instanceof Uint32Array)d=i.UNSIGNED_INT;else if(l instanceof Int32Array)d=i.INT;else if(l instanceof Int8Array)d=i.BYTE;else if(l instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:d,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:p}}function n(a,c,l){let h=c.array,p=c.updateRanges;if(i.bindBuffer(l,a),p.length===0)i.bufferSubData(l,0,h);else{p.sort((d,g)=>d.start-g.start);let f=0;for(let d=1;d<p.length;d++){let g=p[f],x=p[d];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++f,p[f]=x)}p.length=f+1;for(let d=0,g=p.length;d<g;d++){let x=p[d];i.bufferSubData(l,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);let c=e.get(a);c&&(i.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:r,remove:s,update:o}}var bt=class i extends Pt{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};let s=e/2,o=t/2,a=Math.floor(n),c=Math.floor(r),l=a+1,h=c+1,p=e/a,f=t/c,d=[],g=[],x=[],m=[];for(let u=0;u<h;u++){let E=u*f-o;for(let y=0;y<l;y++){let _=y*p-s;g.push(_,-E,0),x.push(0,0,1),m.push(y/a),m.push(1-u/c)}}for(let u=0;u<c;u++)for(let E=0;E<a;E++){let y=E+l*u,_=E+l*(u+1),P=E+1+l*(u+1),T=E+1+l*u;d.push(y,_,T),d.push(_,P,T)}this.setIndex(d),this.setAttribute("position",new lt(g,3)),this.setAttribute("normal",new lt(x,3)),this.setAttribute("uv",new lt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}},_x=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Mx=`#ifdef USE_ALPHAHASH
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
#endif`,Ex=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Sx=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,wx=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,bx=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Tx=`#ifdef USE_AOMAP
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
#endif`,Rx=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Ax=`#ifdef USE_BATCHING
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
#endif`,Cx=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Px=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Ix=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Lx=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Dx=`#ifdef USE_IRIDESCENCE
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
#endif`,Ux=`#ifdef USE_BUMPMAP
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
#endif`,Hx=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Nx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Fx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ox=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,zx=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Bx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,kx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Vx=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Gx=`#define PI 3.141592653589793
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
} // validated`,Wx=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Xx=`vec3 transformedNormal = objectNormal;
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
#endif`,qx=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Yx=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Zx=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,$x=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Kx="gl_FragColor = linearToOutputTexel( gl_FragColor );",Jx=`
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
}`,Qx=`#ifdef USE_ENVMAP
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
#endif`,jx=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,ey=`#ifdef USE_ENVMAP
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
#endif`,ty=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ny=`#ifdef USE_ENVMAP
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
#endif`,iy=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ry=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,sy=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,oy=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ay=`#ifdef USE_GRADIENTMAP
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
}`,cy=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ly=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,hy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,uy=`uniform bool receiveShadow;
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
#endif`,dy=`#ifdef USE_ENVMAP
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
#endif`,fy=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,py=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,my=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,gy=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,xy=`PhysicalMaterial material;
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
#endif`,yy=`struct PhysicalMaterial {
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
}`,vy=`
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
#endif`,_y=`#if defined( RE_IndirectDiffuse )
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
#endif`,My=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Ey=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Sy=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,wy=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,by=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Ty=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Ry=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Ay=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Cy=`#if defined( USE_POINTS_UV )
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
#endif`,Py=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Iy=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ly=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Dy=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Uy=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Hy=`#ifdef USE_MORPHTARGETS
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
#endif`,Ny=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Fy=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Oy=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,zy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,By=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ky=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Vy=`#ifdef USE_NORMALMAP
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
#endif`,Gy=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Wy=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Xy=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,qy=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Yy=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Zy=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,$y=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Ky=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Jy=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Qy=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,jy=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ev=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,tv=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,nv=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,iv=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,rv=`float getShadowMask() {
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
}`,sv=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ov=`#ifdef USE_SKINNING
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
#endif`,av=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,cv=`#ifdef USE_SKINNING
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
#endif`,lv=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,hv=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,uv=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,dv=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,fv=`#ifdef USE_TRANSMISSION
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
#endif`,pv=`#ifdef USE_TRANSMISSION
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
#endif`,mv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,gv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,xv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,yv=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,vv=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,_v=`uniform sampler2D t2D;
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
}`,Mv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ev=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Sv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,wv=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,bv=`#include <common>
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
}`,Tv=`#if DEPTH_PACKING == 3200
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
}`,Rv=`#define DISTANCE
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
}`,Av=`#define DISTANCE
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
}`,Cv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Pv=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Iv=`uniform float scale;
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
}`,Lv=`uniform vec3 diffuse;
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
}`,Dv=`#include <common>
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
}`,Uv=`uniform vec3 diffuse;
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
}`,Hv=`#define LAMBERT
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
}`,Nv=`#define LAMBERT
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
}`,Fv=`#define MATCAP
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
}`,Ov=`#define MATCAP
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
}`,zv=`#define NORMAL
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
}`,Bv=`#define NORMAL
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
}`,kv=`#define PHONG
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
}`,Vv=`#define PHONG
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
}`,Gv=`#define STANDARD
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
}`,Wv=`#define STANDARD
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
}`,Xv=`#define TOON
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
}`,qv=`#define TOON
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
}`,Yv=`uniform float size;
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
}`,Zv=`uniform vec3 diffuse;
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
}`,$v=`#include <common>
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
}`,Kv=`uniform vec3 color;
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
}`,Jv=`uniform float rotation;
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
}`,Qv=`uniform vec3 diffuse;
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
}`,St={alphahash_fragment:_x,alphahash_pars_fragment:Mx,alphamap_fragment:Ex,alphamap_pars_fragment:Sx,alphatest_fragment:wx,alphatest_pars_fragment:bx,aomap_fragment:Tx,aomap_pars_fragment:Rx,batching_pars_vertex:Ax,batching_vertex:Cx,begin_vertex:Px,beginnormal_vertex:Ix,bsdfs:Lx,iridescence_fragment:Dx,bumpmap_pars_fragment:Ux,clipping_planes_fragment:Hx,clipping_planes_pars_fragment:Nx,clipping_planes_pars_vertex:Fx,clipping_planes_vertex:Ox,color_fragment:zx,color_pars_fragment:Bx,color_pars_vertex:kx,color_vertex:Vx,common:Gx,cube_uv_reflection_fragment:Wx,defaultnormal_vertex:Xx,displacementmap_pars_vertex:qx,displacementmap_vertex:Yx,emissivemap_fragment:Zx,emissivemap_pars_fragment:$x,colorspace_fragment:Kx,colorspace_pars_fragment:Jx,envmap_fragment:Qx,envmap_common_pars_fragment:jx,envmap_pars_fragment:ey,envmap_pars_vertex:ty,envmap_physical_pars_fragment:dy,envmap_vertex:ny,fog_vertex:iy,fog_pars_vertex:ry,fog_fragment:sy,fog_pars_fragment:oy,gradientmap_pars_fragment:ay,lightmap_pars_fragment:cy,lights_lambert_fragment:ly,lights_lambert_pars_fragment:hy,lights_pars_begin:uy,lights_toon_fragment:fy,lights_toon_pars_fragment:py,lights_phong_fragment:my,lights_phong_pars_fragment:gy,lights_physical_fragment:xy,lights_physical_pars_fragment:yy,lights_fragment_begin:vy,lights_fragment_maps:_y,lights_fragment_end:My,logdepthbuf_fragment:Ey,logdepthbuf_pars_fragment:Sy,logdepthbuf_pars_vertex:wy,logdepthbuf_vertex:by,map_fragment:Ty,map_pars_fragment:Ry,map_particle_fragment:Ay,map_particle_pars_fragment:Cy,metalnessmap_fragment:Py,metalnessmap_pars_fragment:Iy,morphinstance_vertex:Ly,morphcolor_vertex:Dy,morphnormal_vertex:Uy,morphtarget_pars_vertex:Hy,morphtarget_vertex:Ny,normal_fragment_begin:Fy,normal_fragment_maps:Oy,normal_pars_fragment:zy,normal_pars_vertex:By,normal_vertex:ky,normalmap_pars_fragment:Vy,clearcoat_normal_fragment_begin:Gy,clearcoat_normal_fragment_maps:Wy,clearcoat_pars_fragment:Xy,iridescence_pars_fragment:qy,opaque_fragment:Yy,packing:Zy,premultiplied_alpha_fragment:$y,project_vertex:Ky,dithering_fragment:Jy,dithering_pars_fragment:Qy,roughnessmap_fragment:jy,roughnessmap_pars_fragment:ev,shadowmap_pars_fragment:tv,shadowmap_pars_vertex:nv,shadowmap_vertex:iv,shadowmask_pars_fragment:rv,skinbase_vertex:sv,skinning_pars_vertex:ov,skinning_vertex:av,skinnormal_vertex:cv,specularmap_fragment:lv,specularmap_pars_fragment:hv,tonemapping_fragment:uv,tonemapping_pars_fragment:dv,transmission_fragment:fv,transmission_pars_fragment:pv,uv_pars_fragment:mv,uv_pars_vertex:gv,uv_vertex:xv,worldpos_vertex:yv,background_vert:vv,background_frag:_v,backgroundCube_vert:Mv,backgroundCube_frag:Ev,cube_vert:Sv,cube_frag:wv,depth_vert:bv,depth_frag:Tv,distanceRGBA_vert:Rv,distanceRGBA_frag:Av,equirect_vert:Cv,equirect_frag:Pv,linedashed_vert:Iv,linedashed_frag:Lv,meshbasic_vert:Dv,meshbasic_frag:Uv,meshlambert_vert:Hv,meshlambert_frag:Nv,meshmatcap_vert:Fv,meshmatcap_frag:Ov,meshnormal_vert:zv,meshnormal_frag:Bv,meshphong_vert:kv,meshphong_frag:Vv,meshphysical_vert:Gv,meshphysical_frag:Wv,meshtoon_vert:Xv,meshtoon_frag:qv,points_vert:Yv,points_frag:Zv,shadow_vert:$v,shadow_frag:Kv,sprite_vert:Jv,sprite_frag:Qv},$e={common:{diffuse:{value:new pt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new _t},alphaMap:{value:null},alphaMapTransform:{value:new _t},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new _t}},envmap:{envMap:{value:null},envMapRotation:{value:new _t},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new _t}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new _t}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new _t},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new _t},normalScale:{value:new Fe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new _t},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new _t}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new _t}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new _t}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new pt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new pt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new _t},alphaTest:{value:0},uvTransform:{value:new _t}},sprite:{diffuse:{value:new pt(16777215)},opacity:{value:1},center:{value:new Fe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new _t},alphaMap:{value:null},alphaMapTransform:{value:new _t},alphaTest:{value:0}}},er={basic:{uniforms:Qn([$e.common,$e.specularmap,$e.envmap,$e.aomap,$e.lightmap,$e.fog]),vertexShader:St.meshbasic_vert,fragmentShader:St.meshbasic_frag},lambert:{uniforms:Qn([$e.common,$e.specularmap,$e.envmap,$e.aomap,$e.lightmap,$e.emissivemap,$e.bumpmap,$e.normalmap,$e.displacementmap,$e.fog,$e.lights,{emissive:{value:new pt(0)}}]),vertexShader:St.meshlambert_vert,fragmentShader:St.meshlambert_frag},phong:{uniforms:Qn([$e.common,$e.specularmap,$e.envmap,$e.aomap,$e.lightmap,$e.emissivemap,$e.bumpmap,$e.normalmap,$e.displacementmap,$e.fog,$e.lights,{emissive:{value:new pt(0)},specular:{value:new pt(1118481)},shininess:{value:30}}]),vertexShader:St.meshphong_vert,fragmentShader:St.meshphong_frag},standard:{uniforms:Qn([$e.common,$e.envmap,$e.aomap,$e.lightmap,$e.emissivemap,$e.bumpmap,$e.normalmap,$e.displacementmap,$e.roughnessmap,$e.metalnessmap,$e.fog,$e.lights,{emissive:{value:new pt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:St.meshphysical_vert,fragmentShader:St.meshphysical_frag},toon:{uniforms:Qn([$e.common,$e.aomap,$e.lightmap,$e.emissivemap,$e.bumpmap,$e.normalmap,$e.displacementmap,$e.gradientmap,$e.fog,$e.lights,{emissive:{value:new pt(0)}}]),vertexShader:St.meshtoon_vert,fragmentShader:St.meshtoon_frag},matcap:{uniforms:Qn([$e.common,$e.bumpmap,$e.normalmap,$e.displacementmap,$e.fog,{matcap:{value:null}}]),vertexShader:St.meshmatcap_vert,fragmentShader:St.meshmatcap_frag},points:{uniforms:Qn([$e.points,$e.fog]),vertexShader:St.points_vert,fragmentShader:St.points_frag},dashed:{uniforms:Qn([$e.common,$e.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:St.linedashed_vert,fragmentShader:St.linedashed_frag},depth:{uniforms:Qn([$e.common,$e.displacementmap]),vertexShader:St.depth_vert,fragmentShader:St.depth_frag},normal:{uniforms:Qn([$e.common,$e.bumpmap,$e.normalmap,$e.displacementmap,{opacity:{value:1}}]),vertexShader:St.meshnormal_vert,fragmentShader:St.meshnormal_frag},sprite:{uniforms:Qn([$e.sprite,$e.fog]),vertexShader:St.sprite_vert,fragmentShader:St.sprite_frag},background:{uniforms:{uvTransform:{value:new _t},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:St.background_vert,fragmentShader:St.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new _t}},vertexShader:St.backgroundCube_vert,fragmentShader:St.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:St.cube_vert,fragmentShader:St.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:St.equirect_vert,fragmentShader:St.equirect_frag},distanceRGBA:{uniforms:Qn([$e.common,$e.displacementmap,{referencePosition:{value:new S},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:St.distanceRGBA_vert,fragmentShader:St.distanceRGBA_frag},shadow:{uniforms:Qn([$e.lights,$e.fog,{color:{value:new pt(0)},opacity:{value:1}}]),vertexShader:St.shadow_vert,fragmentShader:St.shadow_frag}};er.physical={uniforms:Qn([er.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new _t},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new _t},clearcoatNormalScale:{value:new Fe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new _t},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new _t},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new _t},sheen:{value:0},sheenColor:{value:new pt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new _t},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new _t},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new _t},transmissionSamplerSize:{value:new Fe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new _t},attenuationDistance:{value:0},attenuationColor:{value:new pt(0)},specularColor:{value:new pt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new _t},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new _t},anisotropyVector:{value:new Fe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new _t}}]),vertexShader:St.meshphysical_vert,fragmentShader:St.meshphysical_frag};var hc={r:0,b:0,g:0},ts=new oi,jv=new Rt;function e_(i,e,t,n,r,s,o){let a=new pt(0),c=s===!0?0:1,l,h,p=null,f=0,d=null;function g(E){let y=E.isScene===!0?E.background:null;return y&&y.isTexture&&(y=(E.backgroundBlurriness>0?t:e).get(y)),y}function x(E){let y=!1,_=g(E);_===null?u(a,c):_&&_.isColor&&(u(_,1),y=!0);let P=i.xr.getEnvironmentBlendMode();P==="additive"?n.buffers.color.setClear(0,0,0,1,o):P==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||y)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(E,y){let _=g(y);_&&(_.isCubeTexture||_.mapping===nl)?(h===void 0&&(h=new dt(new wt(1,1,1),new ir({name:"BackgroundCubeMaterial",uniforms:io(er.backgroundCube.uniforms),vertexShader:er.backgroundCube.vertexShader,fragmentShader:er.backgroundCube.fragmentShader,side:yn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(P,T,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),ts.copy(y.backgroundRotation),ts.x*=-1,ts.y*=-1,ts.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(ts.y*=-1,ts.z*=-1),h.material.uniforms.envMap.value=_,h.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(jv.makeRotationFromEuler(ts)),h.material.toneMapped=Yt.getTransfer(_.colorSpace)!==rn,(p!==_||f!==_.version||d!==i.toneMapping)&&(h.material.needsUpdate=!0,p=_,f=_.version,d=i.toneMapping),h.layers.enableAll(),E.unshift(h,h.geometry,h.material,0,0,null)):_&&_.isTexture&&(l===void 0&&(l=new dt(new bt(2,2),new ir({name:"BackgroundMaterial",uniforms:io(er.background.uniforms),vertexShader:er.background.vertexShader,fragmentShader:er.background.fragmentShader,side:nr,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=_,l.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,l.material.toneMapped=Yt.getTransfer(_.colorSpace)!==rn,_.matrixAutoUpdate===!0&&_.updateMatrix(),l.material.uniforms.uvTransform.value.copy(_.matrix),(p!==_||f!==_.version||d!==i.toneMapping)&&(l.material.needsUpdate=!0,p=_,f=_.version,d=i.toneMapping),l.layers.enableAll(),E.unshift(l,l.geometry,l.material,0,0,null))}function u(E,y){E.getRGB(hc,c0(i)),n.buffers.color.setClear(hc.r,hc.g,hc.b,y,o)}return{getClearColor:function(){return a},setClearColor:function(E,y=1){a.set(E),c=y,u(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(E){c=E,u(a,c)},render:x,addToRenderList:m}}function t_(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=f(null),s=r,o=!1;function a(v,w,V,G,z){let H=!1,Q=p(G,V,w);s!==Q&&(s=Q,l(s.object)),H=d(v,G,V,z),H&&g(v,G,V,z),z!==null&&e.update(z,i.ELEMENT_ARRAY_BUFFER),(H||o)&&(o=!1,_(v,w,V,G),z!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(z).buffer))}function c(){return i.createVertexArray()}function l(v){return i.bindVertexArray(v)}function h(v){return i.deleteVertexArray(v)}function p(v,w,V){let G=V.wireframe===!0,z=n[v.id];z===void 0&&(z={},n[v.id]=z);let H=z[w.id];H===void 0&&(H={},z[w.id]=H);let Q=H[G];return Q===void 0&&(Q=f(c()),H[G]=Q),Q}function f(v){let w=[],V=[],G=[];for(let z=0;z<t;z++)w[z]=0,V[z]=0,G[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:w,enabledAttributes:V,attributeDivisors:G,object:v,attributes:{},index:null}}function d(v,w,V,G){let z=s.attributes,H=w.attributes,Q=0,le=V.getAttributes();for(let ie in le)if(le[ie].location>=0){let N=z[ie],j=H[ie];if(j===void 0&&(ie==="instanceMatrix"&&v.instanceMatrix&&(j=v.instanceMatrix),ie==="instanceColor"&&v.instanceColor&&(j=v.instanceColor)),N===void 0||N.attribute!==j||j&&N.data!==j.data)return!0;Q++}return s.attributesNum!==Q||s.index!==G}function g(v,w,V,G){let z={},H=w.attributes,Q=0,le=V.getAttributes();for(let ie in le)if(le[ie].location>=0){let N=H[ie];N===void 0&&(ie==="instanceMatrix"&&v.instanceMatrix&&(N=v.instanceMatrix),ie==="instanceColor"&&v.instanceColor&&(N=v.instanceColor));let j={};j.attribute=N,N&&N.data&&(j.data=N.data),z[ie]=j,Q++}s.attributes=z,s.attributesNum=Q,s.index=G}function x(){let v=s.newAttributes;for(let w=0,V=v.length;w<V;w++)v[w]=0}function m(v){u(v,0)}function u(v,w){let V=s.newAttributes,G=s.enabledAttributes,z=s.attributeDivisors;V[v]=1,G[v]===0&&(i.enableVertexAttribArray(v),G[v]=1),z[v]!==w&&(i.vertexAttribDivisor(v,w),z[v]=w)}function E(){let v=s.newAttributes,w=s.enabledAttributes;for(let V=0,G=w.length;V<G;V++)w[V]!==v[V]&&(i.disableVertexAttribArray(V),w[V]=0)}function y(v,w,V,G,z,H,Q){Q===!0?i.vertexAttribIPointer(v,w,V,z,H):i.vertexAttribPointer(v,w,V,G,z,H)}function _(v,w,V,G){x();let z=G.attributes,H=V.getAttributes(),Q=w.defaultAttributeValues;for(let le in H){let ie=H[le];if(ie.location>=0){let fe=z[le];if(fe===void 0&&(le==="instanceMatrix"&&v.instanceMatrix&&(fe=v.instanceMatrix),le==="instanceColor"&&v.instanceColor&&(fe=v.instanceColor)),fe!==void 0){let N=fe.normalized,j=fe.itemSize,ne=e.get(fe);if(ne===void 0)continue;let ee=ne.buffer,F=ne.type,se=ne.bytesPerElement,q=F===i.INT||F===i.UNSIGNED_INT||fe.gpuType===sd;if(fe.isInterleavedBufferAttribute){let k=fe.data,Z=k.stride,xe=fe.offset;if(k.isInstancedInterleavedBuffer){for(let Se=0;Se<ie.locationSize;Se++)u(ie.location+Se,k.meshPerAttribute);v.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=k.meshPerAttribute*k.count)}else for(let Se=0;Se<ie.locationSize;Se++)m(ie.location+Se);i.bindBuffer(i.ARRAY_BUFFER,ee);for(let Se=0;Se<ie.locationSize;Se++)y(ie.location+Se,j/ie.locationSize,F,N,Z*se,(xe+j/ie.locationSize*Se)*se,q)}else{if(fe.isInstancedBufferAttribute){for(let k=0;k<ie.locationSize;k++)u(ie.location+k,fe.meshPerAttribute);v.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=fe.meshPerAttribute*fe.count)}else for(let k=0;k<ie.locationSize;k++)m(ie.location+k);i.bindBuffer(i.ARRAY_BUFFER,ee);for(let k=0;k<ie.locationSize;k++)y(ie.location+k,j/ie.locationSize,F,N,j*se,j/ie.locationSize*k*se,q)}}else if(Q!==void 0){let N=Q[le];if(N!==void 0)switch(N.length){case 2:i.vertexAttrib2fv(ie.location,N);break;case 3:i.vertexAttrib3fv(ie.location,N);break;case 4:i.vertexAttrib4fv(ie.location,N);break;default:i.vertexAttrib1fv(ie.location,N)}}}}E()}function P(){A();for(let v in n){let w=n[v];for(let V in w){let G=w[V];for(let z in G)h(G[z].object),delete G[z];delete w[V]}delete n[v]}}function T(v){if(n[v.id]===void 0)return;let w=n[v.id];for(let V in w){let G=w[V];for(let z in G)h(G[z].object),delete G[z];delete w[V]}delete n[v.id]}function R(v){for(let w in n){let V=n[w];if(V[v.id]===void 0)continue;let G=V[v.id];for(let z in G)h(G[z].object),delete G[z];delete V[v.id]}}function A(){O(),o=!0,s!==r&&(s=r,l(s.object))}function O(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:A,resetDefaultState:O,dispose:P,releaseStatesOfGeometry:T,releaseStatesOfProgram:R,initAttributes:x,enableAttribute:m,disableUnusedAttributes:E}}function n_(i,e,t){let n;function r(l){n=l}function s(l,h){i.drawArrays(n,l,h),t.update(h,n,1)}function o(l,h,p){p!==0&&(i.drawArraysInstanced(n,l,h,p),t.update(h,n,p))}function a(l,h,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,p);let d=0;for(let g=0;g<p;g++)d+=h[g];t.update(d,n,1)}function c(l,h,p,f){if(p===0)return;let d=e.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<l.length;g++)o(l[g],h[g],f[g]);else{d.multiDrawArraysInstancedWEBGL(n,l,0,h,0,f,0,p);let g=0;for(let x=0;x<p;x++)g+=h[x];for(let x=0;x<f.length;x++)t.update(g,n,f[x])}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function i_(i,e,t,n){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){let R=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(R){return!(R!==xi&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(R){let A=R===ga&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==xr&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==tr&&!A)}function c(R){if(R==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp",h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let p=t.logarithmicDepthBuffer===!0,f=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control");if(f===!0){let R=e.get("EXT_clip_control");R.clipControlEXT(R.LOWER_LEFT_EXT,R.ZERO_TO_ONE_EXT)}let d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),u=i.getParameter(i.MAX_VERTEX_ATTRIBS),E=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),y=i.getParameter(i.MAX_VARYING_VECTORS),_=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),P=g>0,T=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:p,reverseDepthBuffer:f,maxTextures:d,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:m,maxAttributes:u,maxVertexUniforms:E,maxVaryings:y,maxFragmentUniforms:_,vertexTextures:P,maxSamples:T}}function r_(i){let e=this,t=null,n=0,r=!1,s=!1,o=new wi,a=new _t,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(p,f){let d=p.length!==0||f||n!==0||r;return r=f,n=p.length,d},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(p,f){t=h(p,f,0)},this.setState=function(p,f,d){let g=p.clippingPlanes,x=p.clipIntersection,m=p.clipShadows,u=i.get(p);if(!r||g===null||g.length===0||s&&!m)s?h(null):l();else{let E=s?0:n,y=E*4,_=u.clippingState||null;c.value=_,_=h(g,f,y,d);for(let P=0;P!==y;++P)_[P]=t[P];u.clippingState=_,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=E}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(p,f,d,g){let x=p!==null?p.length:0,m=null;if(x!==0){if(m=c.value,g!==!0||m===null){let u=d+x*4,E=f.matrixWorldInverse;a.getNormalMatrix(E),(m===null||m.length<u)&&(m=new Float32Array(u));for(let y=0,_=d;y!==x;++y,_+=4)o.copy(p[y]).applyMatrix4(E,a),o.normal.toArray(m,_),m[_+3]=o.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}function s_(i){let e=new WeakMap;function t(o,a){return a===ta?o.mapping=Qs:a===qh&&(o.mapping=js),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===ta||a===qh)if(e.has(o)){let c=e.get(o).texture;return t(c,o.mapping)}else{let c=o.image;if(c&&c.height>0){let l=new bu(c.height);return l.fromEquirectangularTexture(i,o),e.set(o,l),o.addEventListener("dispose",r),t(l.texture,o.mapping)}else return null}}return o}function r(o){let a=o.target;a.removeEventListener("dispose",r);let c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}var Oc=class extends Nc{constructor(e=-1,t=1,n=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2,s=n-e,o=n+e,a=r+t,c=r-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,o=s+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Xs=4,op=[.125,.215,.35,.446,.526,.582],os=20,bh=new Oc,ap=new pt,Th=null,Rh=0,Ah=0,Ch=!1,is=(1+Math.sqrt(5))/2,Vs=1/is,cp=[new S(-is,Vs,0),new S(is,Vs,0),new S(-Vs,0,is),new S(Vs,0,is),new S(0,is,-Vs),new S(0,is,Vs),new S(-1,1,-1),new S(1,1,-1),new S(-1,1,1),new S(1,1,1)],ro=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100){Th=this._renderer.getRenderTarget(),Rh=this._renderer.getActiveCubeFace(),Ah=this._renderer.getActiveMipmapLevel(),Ch=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=up(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=hp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Th,Rh,Ah),this._renderer.xr.enabled=Ch,e.scissorTest=!1,uc(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Qs||e.mapping===js?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Th=this._renderer.getRenderTarget(),Rh=this._renderer.getActiveCubeFace(),Ah=this._renderer.getActiveMipmapLevel(),Ch=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:pn,minFilter:pn,generateMipmaps:!1,type:ga,format:xi,colorSpace:Vr,depthBuffer:!1},r=lp(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=lp(e,t,n);let{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=o_(s)),this._blurMaterial=a_(s,e,t)}return r}_compileMaterial(e){let t=new dt(this._lodPlanes[0],e);this._renderer.compile(t,bh)}_sceneToCubeUV(e,t,n,r){let a=new On(90,1,t,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,p=h.autoClear,f=h.toneMapping;h.getClearColor(ap),h.toneMapping=Ur,h.autoClear=!1;let d=new yt({name:"PMREM.Background",side:yn,depthWrite:!1,depthTest:!1}),g=new dt(new wt,d),x=!1,m=e.background;m?m.isColor&&(d.color.copy(m),e.background=null,x=!0):(d.color.copy(ap),x=!0);for(let u=0;u<6;u++){let E=u%3;E===0?(a.up.set(0,c[u],0),a.lookAt(l[u],0,0)):E===1?(a.up.set(0,0,c[u]),a.lookAt(0,l[u],0)):(a.up.set(0,c[u],0),a.lookAt(0,0,l[u]));let y=this._cubeSize;uc(r,E*y,u>2?y:0,y,y),h.setRenderTarget(r),x&&h.render(g,a),h.render(e,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=f,h.autoClear=p,e.background=m}_textureToCubeUV(e,t){let n=this._renderer,r=e.mapping===Qs||e.mapping===js;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=up()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=hp());let s=r?this._cubemapMaterial:this._equirectMaterial,o=new dt(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;let c=this._cubeSize;uc(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(o,bh)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let r=this._lodPlanes.length;for(let s=1;s<r;s++){let o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=cp[(r-s-1)%cp.length];this._blur(e,s-1,s,o,a)}t.autoClear=n}_blur(e,t,n,r,s){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,r,"latitudinal",s),this._halfBlur(o,e,n,n,r,"longitudinal",s)}_halfBlur(e,t,n,r,s,o,a){let c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,p=new dt(this._lodPlanes[r],l),f=l.uniforms,d=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*os-1),x=s/g,m=isFinite(s)?1+Math.floor(h*x):os;m>os&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${os}`);let u=[],E=0;for(let R=0;R<os;++R){let A=R/x,O=Math.exp(-A*A/2);u.push(O),R===0?E+=O:R<m&&(E+=2*O)}for(let R=0;R<u.length;R++)u[R]=u[R]/E;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=u,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);let{_lodMax:y}=this;f.dTheta.value=g,f.mipInt.value=y-n;let _=this._sizeLods[r],P=3*_*(r>y-Xs?r-y+Xs:0),T=4*(this._cubeSize-_);uc(t,P,T,3*_,2*_),c.setRenderTarget(t),c.render(p,bh)}};function o_(i){let e=[],t=[],n=[],r=i,s=i-Xs+1+op.length;for(let o=0;o<s;o++){let a=Math.pow(2,r);t.push(a);let c=1/a;o>i-Xs?c=op[o-i+Xs-1]:o===0&&(c=0),n.push(c);let l=1/(a-2),h=-l,p=1+l,f=[h,h,p,h,p,p,h,h,p,p,h,p],d=6,g=6,x=3,m=2,u=1,E=new Float32Array(x*g*d),y=new Float32Array(m*g*d),_=new Float32Array(u*g*d);for(let T=0;T<d;T++){let R=T%3*2/3-1,A=T>2?0:-1,O=[R,A,0,R+2/3,A,0,R+2/3,A+1,0,R,A,0,R+2/3,A+1,0,R,A+1,0];E.set(O,x*g*T),y.set(f,m*g*T);let v=[T,T,T,T,T,T];_.set(v,u*g*T)}let P=new Pt;P.setAttribute("position",new hn(E,x)),P.setAttribute("uv",new hn(y,m)),P.setAttribute("faceIndex",new hn(_,u)),e.push(P),r>Xs&&r--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function lp(i,e,t){let n=new yr(i,e,t);return n.texture.mapping=nl,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function uc(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function a_(i,e,t){let n=new Float32Array(os),r=new S(0,1,0);return new ir({name:"SphericalGaussianBlur",defines:{n:os,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:md(),fragmentShader:`

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
		`,blending:Dr,depthTest:!1,depthWrite:!1})}function hp(){return new ir({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:md(),fragmentShader:`

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
		`,blending:Dr,depthTest:!1,depthWrite:!1})}function up(){return new ir({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:md(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Dr,depthTest:!1,depthWrite:!1})}function md(){return`

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
	`}function c_(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){let c=a.mapping,l=c===ta||c===qh,h=c===Qs||c===js;if(l||h){let p=e.get(a),f=p!==void 0?p.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return t===null&&(t=new ro(i)),p=l?t.fromEquirectangular(a,p):t.fromCubemap(a,p),p.texture.pmremVersion=a.pmremVersion,e.set(a,p),p.texture;if(p!==void 0)return p.texture;{let d=a.image;return l&&d&&d.height>0||h&&d&&r(d)?(t===null&&(t=new ro(i)),p=l?t.fromEquirectangular(a):t.fromCubemap(a),p.texture.pmremVersion=a.pmremVersion,e.set(a,p),a.addEventListener("dispose",s),p.texture):null}}}return a}function r(a){let c=0,l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function s(a){let c=a.target;c.removeEventListener("dispose",s);let l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function l_(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let r=t(n);return r===null&&bc("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function h_(i,e,t,n){let r={},s=new WeakMap;function o(p){let f=p.target;f.index!==null&&e.remove(f.index);for(let g in f.attributes)e.remove(f.attributes[g]);for(let g in f.morphAttributes){let x=f.morphAttributes[g];for(let m=0,u=x.length;m<u;m++)e.remove(x[m])}f.removeEventListener("dispose",o),delete r[f.id];let d=s.get(f);d&&(e.remove(d),s.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(p,f){return r[f.id]===!0||(f.addEventListener("dispose",o),r[f.id]=!0,t.memory.geometries++),f}function c(p){let f=p.attributes;for(let g in f)e.update(f[g],i.ARRAY_BUFFER);let d=p.morphAttributes;for(let g in d){let x=d[g];for(let m=0,u=x.length;m<u;m++)e.update(x[m],i.ARRAY_BUFFER)}}function l(p){let f=[],d=p.index,g=p.attributes.position,x=0;if(d!==null){let E=d.array;x=d.version;for(let y=0,_=E.length;y<_;y+=3){let P=E[y+0],T=E[y+1],R=E[y+2];f.push(P,T,T,R,R,P)}}else if(g!==void 0){let E=g.array;x=g.version;for(let y=0,_=E.length/3-1;y<_;y+=3){let P=y+0,T=y+1,R=y+2;f.push(P,T,T,R,R,P)}}else return;let m=new(o0(f)?Hc:Uc)(f,1);m.version=x;let u=s.get(p);u&&e.remove(u),s.set(p,m)}function h(p){let f=s.get(p);if(f){let d=p.index;d!==null&&f.version<d.version&&l(p)}else l(p);return s.get(p)}return{get:a,update:c,getWireframeAttribute:h}}function u_(i,e,t){let n;function r(f){n=f}let s,o;function a(f){s=f.type,o=f.bytesPerElement}function c(f,d){i.drawElements(n,d,s,f*o),t.update(d,n,1)}function l(f,d,g){g!==0&&(i.drawElementsInstanced(n,d,s,f*o,g),t.update(d,n,g))}function h(f,d,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,s,f,0,g);let m=0;for(let u=0;u<g;u++)m+=d[u];t.update(m,n,1)}function p(f,d,g,x){if(g===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let u=0;u<f.length;u++)l(f[u]/o,d[u],x[u]);else{m.multiDrawElementsInstancedWEBGL(n,d,0,s,f,0,x,0,g);let u=0;for(let E=0;E<g;E++)u+=d[E];for(let E=0;E<x.length;E++)t.update(u,n,x[E])}}this.setMode=r,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=p}function d_(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(s/3);break;case i.LINES:t.lines+=a*(s/2);break;case i.LINE_STRIP:t.lines+=a*(s-1);break;case i.LINE_LOOP:t.lines+=a*s;break;case i.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function f_(i,e,t){let n=new WeakMap,r=new Jt;function s(o,a,c){let l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,p=h!==void 0?h.length:0,f=n.get(a);if(f===void 0||f.count!==p){let O=function(){R.dispose(),n.delete(a),a.removeEventListener("dispose",O)};f!==void 0&&f.texture.dispose();let d=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],u=a.morphAttributes.normal||[],E=a.morphAttributes.color||[],y=0;d===!0&&(y=1),g===!0&&(y=2),x===!0&&(y=3);let _=a.attributes.position.count*y,P=1;_>e.maxTextureSize&&(P=Math.ceil(_/e.maxTextureSize),_=e.maxTextureSize);let T=new Float32Array(_*P*4*p),R=new Dc(T,_,P,p);R.type=tr,R.needsUpdate=!0;let A=y*4;for(let v=0;v<p;v++){let w=m[v],V=u[v],G=E[v],z=_*P*4*v;for(let H=0;H<w.count;H++){let Q=H*A;d===!0&&(r.fromBufferAttribute(w,H),T[z+Q+0]=r.x,T[z+Q+1]=r.y,T[z+Q+2]=r.z,T[z+Q+3]=0),g===!0&&(r.fromBufferAttribute(V,H),T[z+Q+4]=r.x,T[z+Q+5]=r.y,T[z+Q+6]=r.z,T[z+Q+7]=0),x===!0&&(r.fromBufferAttribute(G,H),T[z+Q+8]=r.x,T[z+Q+9]=r.y,T[z+Q+10]=r.z,T[z+Q+11]=G.itemSize===4?r.w:1)}}f={count:p,texture:R,size:new Fe(_,P)},n.set(a,f),a.addEventListener("dispose",O)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let d=0;for(let x=0;x<l.length;x++)d+=l[x];let g=a.morphTargetsRelative?1:1-d;c.getUniforms().setValue(i,"morphTargetBaseInfluence",g),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",f.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:s}}function p_(i,e,t,n){let r=new WeakMap;function s(c){let l=n.render.frame,h=c.geometry,p=e.get(c,h);if(r.get(p)!==l&&(e.update(p),r.set(p,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),r.get(c)!==l&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,l))),c.isSkinnedMesh){let f=c.skeleton;r.get(f)!==l&&(f.update(),r.set(f,l))}return p}function o(){r=new WeakMap}function a(c){let l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:s,dispose:o}}var zc=class extends jn{constructor(e,t,n,r,s,o,a,c,l,h=Zs){if(h!==Zs&&h!==to)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Zs&&(n=ls),n===void 0&&h===to&&(n=eo),super(null,r,s,o,a,c,h,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:si,this.minFilter=c!==void 0?c:si,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},h0=new jn,dp=new zc(1,1),u0=new Dc,d0=new Su,f0=new Fc,fp=[],pp=[],mp=new Float32Array(16),gp=new Float32Array(9),xp=new Float32Array(4);function ho(i,e,t){let n=i[0];if(n<=0||n>0)return i;let r=e*t,s=fp[r];if(s===void 0&&(s=new Float32Array(r),fp[r]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(s,a)}return s}function Tn(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Rn(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function rl(i,e){let t=pp[e];t===void 0&&(t=new Int32Array(e),pp[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function m_(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function g_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Tn(t,e))return;i.uniform2fv(this.addr,e),Rn(t,e)}}function x_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Tn(t,e))return;i.uniform3fv(this.addr,e),Rn(t,e)}}function y_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Tn(t,e))return;i.uniform4fv(this.addr,e),Rn(t,e)}}function v_(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Tn(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Rn(t,e)}else{if(Tn(t,n))return;xp.set(n),i.uniformMatrix2fv(this.addr,!1,xp),Rn(t,n)}}function __(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Tn(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Rn(t,e)}else{if(Tn(t,n))return;gp.set(n),i.uniformMatrix3fv(this.addr,!1,gp),Rn(t,n)}}function M_(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Tn(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Rn(t,e)}else{if(Tn(t,n))return;mp.set(n),i.uniformMatrix4fv(this.addr,!1,mp),Rn(t,n)}}function E_(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function S_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Tn(t,e))return;i.uniform2iv(this.addr,e),Rn(t,e)}}function w_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Tn(t,e))return;i.uniform3iv(this.addr,e),Rn(t,e)}}function b_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Tn(t,e))return;i.uniform4iv(this.addr,e),Rn(t,e)}}function T_(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function R_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Tn(t,e))return;i.uniform2uiv(this.addr,e),Rn(t,e)}}function A_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Tn(t,e))return;i.uniform3uiv(this.addr,e),Rn(t,e)}}function C_(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Tn(t,e))return;i.uniform4uiv(this.addr,e),Rn(t,e)}}function P_(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(dp.compareFunction=s0,s=dp):s=h0,t.setTexture2D(e||s,r)}function I_(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||d0,r)}function L_(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||f0,r)}function D_(i,e,t){let n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||u0,r)}function U_(i){switch(i){case 5126:return m_;case 35664:return g_;case 35665:return x_;case 35666:return y_;case 35674:return v_;case 35675:return __;case 35676:return M_;case 5124:case 35670:return E_;case 35667:case 35671:return S_;case 35668:case 35672:return w_;case 35669:case 35673:return b_;case 5125:return T_;case 36294:return R_;case 36295:return A_;case 36296:return C_;case 35678:case 36198:case 36298:case 36306:case 35682:return P_;case 35679:case 36299:case 36307:return I_;case 35680:case 36300:case 36308:case 36293:return L_;case 36289:case 36303:case 36311:case 36292:return D_}}function H_(i,e){i.uniform1fv(this.addr,e)}function N_(i,e){let t=ho(e,this.size,2);i.uniform2fv(this.addr,t)}function F_(i,e){let t=ho(e,this.size,3);i.uniform3fv(this.addr,t)}function O_(i,e){let t=ho(e,this.size,4);i.uniform4fv(this.addr,t)}function z_(i,e){let t=ho(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function B_(i,e){let t=ho(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function k_(i,e){let t=ho(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function V_(i,e){i.uniform1iv(this.addr,e)}function G_(i,e){i.uniform2iv(this.addr,e)}function W_(i,e){i.uniform3iv(this.addr,e)}function X_(i,e){i.uniform4iv(this.addr,e)}function q_(i,e){i.uniform1uiv(this.addr,e)}function Y_(i,e){i.uniform2uiv(this.addr,e)}function Z_(i,e){i.uniform3uiv(this.addr,e)}function $_(i,e){i.uniform4uiv(this.addr,e)}function K_(i,e,t){let n=this.cache,r=e.length,s=rl(t,r);Tn(n,s)||(i.uniform1iv(this.addr,s),Rn(n,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||h0,s[o])}function J_(i,e,t){let n=this.cache,r=e.length,s=rl(t,r);Tn(n,s)||(i.uniform1iv(this.addr,s),Rn(n,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||d0,s[o])}function Q_(i,e,t){let n=this.cache,r=e.length,s=rl(t,r);Tn(n,s)||(i.uniform1iv(this.addr,s),Rn(n,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||f0,s[o])}function j_(i,e,t){let n=this.cache,r=e.length,s=rl(t,r);Tn(n,s)||(i.uniform1iv(this.addr,s),Rn(n,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||u0,s[o])}function e2(i){switch(i){case 5126:return H_;case 35664:return N_;case 35665:return F_;case 35666:return O_;case 35674:return z_;case 35675:return B_;case 35676:return k_;case 5124:case 35670:return V_;case 35667:case 35671:return G_;case 35668:case 35672:return W_;case 35669:case 35673:return X_;case 5125:return q_;case 36294:return Y_;case 36295:return Z_;case 36296:return $_;case 35678:case 36198:case 36298:case 36306:case 35682:return K_;case 35679:case 36299:case 36307:return J_;case 35680:case 36300:case 36308:case 36293:return Q_;case 36289:case 36303:case 36311:case 36292:return j_}}var Tu=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=U_(t.type)}},Ru=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=e2(t.type)}},Au=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let r=this.seq;for(let s=0,o=r.length;s!==o;++s){let a=r[s];a.setValue(e,t[a.id],n)}}},Ph=/(\w+)(\])?(\[|\.)?/g;function yp(i,e){i.seq.push(e),i.map[e.id]=e}function t2(i,e,t){let n=i.name,r=n.length;for(Ph.lastIndex=0;;){let s=Ph.exec(n),o=Ph.lastIndex,a=s[1],c=s[2]==="]",l=s[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===r){yp(t,l===void 0?new Tu(a,i,e):new Ru(a,i,e));break}else{let p=t.map[a];p===void 0&&(p=new Au(a),yp(t,p)),t=p}}}var Ks=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){let s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);t2(s,o,this)}}setValue(e,t,n,r){let s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){let r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,o=t.length;s!==o;++s){let a=t[s],c=n[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,r)}}static seqWithValue(e,t){let n=[];for(let r=0,s=e.length;r!==s;++r){let o=e[r];o.id in t&&n.push(o)}return n}};function vp(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var n2=37297,i2=0;function r2(i,e){let t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function s2(i){let e=Yt.getPrimaries(Yt.workingColorSpace),t=Yt.getPrimaries(i),n;switch(e===t?n="":e===Pc&&t===Cc?n="LinearDisplayP3ToLinearSRGB":e===Cc&&t===Pc&&(n="LinearSRGBToLinearDisplayP3"),i){case Vr:case il:return[n,"LinearTransferOETF"];case xt:case fd:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function _p(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=i.getShaderInfoLog(e).trim();if(n&&r==="")return"";let s=/ERROR: 0:(\d+)/.exec(r);if(s){let o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+r2(i.getShaderSource(e),o)}else return r}function o2(i,e){let t=s2(e);return`vec4 ${i}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function a2(i,e){let t;switch(e){case y1:t="Linear";break;case v1:t="Reinhard";break;case _1:t="Cineon";break;case rd:t="ACESFilmic";break;case E1:t="AgX";break;case S1:t="Neutral";break;case M1:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var dc=new S;function c2(){Yt.getLuminanceCoefficients(dc);let i=dc.x.toFixed(4),e=dc.y.toFixed(4),t=dc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function l2(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter($o).join(`
`)}function h2(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function u2(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){let s=i.getActiveAttrib(e,r),o=s.name,a=1;s.type===i.FLOAT_MAT2&&(a=2),s.type===i.FLOAT_MAT3&&(a=3),s.type===i.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function $o(i){return i!==""}function Mp(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Ep(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var d2=/^[ \t]*#include +<([\w\d./]+)>/gm;function Cu(i){return i.replace(d2,p2)}var f2=new Map;function p2(i,e){let t=St[e];if(t===void 0){let n=f2.get(e);if(n!==void 0)t=St[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Cu(t)}var m2=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Sp(i){return i.replace(m2,g2)}function g2(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function wp(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}function x2(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===qp?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===id?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===mr&&(e="SHADOWMAP_TYPE_VSM"),e}function y2(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Qs:case js:e="ENVMAP_TYPE_CUBE";break;case nl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function v2(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case js:e="ENVMAP_MODE_REFRACTION";break}return e}function _2(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Yp:e="ENVMAP_BLENDING_MULTIPLY";break;case g1:e="ENVMAP_BLENDING_MIX";break;case x1:e="ENVMAP_BLENDING_ADD";break}return e}function M2(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function E2(i,e,t,n){let r=i.getContext(),s=t.defines,o=t.vertexShader,a=t.fragmentShader,c=x2(t),l=y2(t),h=v2(t),p=_2(t),f=M2(t),d=l2(t),g=h2(s),x=r.createProgram(),m,u,E=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter($o).join(`
`),m.length>0&&(m+=`
`),u=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter($o).join(`
`),u.length>0&&(u+=`
`)):(m=[wp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter($o).join(`
`),u=[wp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+p:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ur?"#define TONE_MAPPING":"",t.toneMapping!==Ur?St.tonemapping_pars_fragment:"",t.toneMapping!==Ur?a2("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",St.colorspace_pars_fragment,o2("linearToOutputTexel",t.outputColorSpace),c2(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter($o).join(`
`)),o=Cu(o),o=Mp(o,t),o=Ep(o,t),a=Cu(a),a=Mp(a,t),a=Ep(a,t),o=Sp(o),a=Sp(a),t.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,u=["#define varying in",t.glslVersion===kf?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===kf?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);let y=E+m+o,_=E+u+a,P=vp(r,r.VERTEX_SHADER,y),T=vp(r,r.FRAGMENT_SHADER,_);r.attachShader(x,P),r.attachShader(x,T),t.index0AttributeName!==void 0?r.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(x,0,"position"),r.linkProgram(x);function R(w){if(i.debug.checkShaderErrors){let V=r.getProgramInfoLog(x).trim(),G=r.getShaderInfoLog(P).trim(),z=r.getShaderInfoLog(T).trim(),H=!0,Q=!0;if(r.getProgramParameter(x,r.LINK_STATUS)===!1)if(H=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,x,P,T);else{let le=_p(r,P,"vertex"),ie=_p(r,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(x,r.VALIDATE_STATUS)+`

Material Name: `+w.name+`
Material Type: `+w.type+`

Program Info Log: `+V+`
`+le+`
`+ie)}else V!==""?console.warn("THREE.WebGLProgram: Program Info Log:",V):(G===""||z==="")&&(Q=!1);Q&&(w.diagnostics={runnable:H,programLog:V,vertexShader:{log:G,prefix:m},fragmentShader:{log:z,prefix:u}})}r.deleteShader(P),r.deleteShader(T),A=new Ks(r,x),O=u2(r,x)}let A;this.getUniforms=function(){return A===void 0&&R(this),A};let O;this.getAttributes=function(){return O===void 0&&R(this),O};let v=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return v===!1&&(v=r.getProgramParameter(x,n2)),v},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=i2++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=P,this.fragmentShader=T,this}var S2=0,Pu=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Iu(e),t.set(e,n)),n}},Iu=class{constructor(e){this.id=S2++,this.code=e,this.usedTimes=0}};function w2(i,e,t,n,r,s,o){let a=new sa,c=new Pu,l=new Set,h=[],p=r.logarithmicDepthBuffer,f=r.reverseDepthBuffer,d=r.vertexTextures,g=r.precision,x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(v){return l.add(v),v===0?"uv":`uv${v}`}function u(v,w,V,G,z){let H=G.fog,Q=z.geometry,le=v.isMeshStandardMaterial?G.environment:null,ie=(v.isMeshStandardMaterial?t:e).get(v.envMap||le),fe=ie&&ie.mapping===nl?ie.image.height:null,N=x[v.type];v.precision!==null&&(g=r.getMaxPrecision(v.precision),g!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",g,"instead."));let j=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,ne=j!==void 0?j.length:0,ee=0;Q.morphAttributes.position!==void 0&&(ee=1),Q.morphAttributes.normal!==void 0&&(ee=2),Q.morphAttributes.color!==void 0&&(ee=3);let F,se,q,k;if(N){let Et=er[N];F=Et.vertexShader,se=Et.fragmentShader}else F=v.vertexShader,se=v.fragmentShader,c.update(v),q=c.getVertexShaderID(v),k=c.getFragmentShaderID(v);let Z=i.getRenderTarget(),xe=z.isInstancedMesh===!0,Se=z.isBatchedMesh===!0,ge=!!v.map,re=!!v.matcap,L=!!ie,ye=!!v.aoMap,Ae=!!v.lightMap,_e=!!v.bumpMap,Re=!!v.normalMap,Le=!!v.displacementMap,he=!!v.emissiveMap,D=!!v.metalnessMap,b=!!v.roughnessMap,$=v.anisotropy>0,pe=v.clearcoat>0,Me=v.dispersion>0,ve=v.iridescence>0,Oe=v.sheen>0,He=v.transmission>0,ke=$&&!!v.anisotropyMap,nt=pe&&!!v.clearcoatMap,De=pe&&!!v.clearcoatNormalMap,K=pe&&!!v.clearcoatRoughnessMap,me=ve&&!!v.iridescenceMap,Pe=ve&&!!v.iridescenceThicknessMap,Ce=Oe&&!!v.sheenColorMap,be=Oe&&!!v.sheenRoughnessMap,ue=!!v.specularMap,We=!!v.specularColorMap,X=!!v.specularIntensityMap,Te=He&&!!v.transmissionMap,oe=He&&!!v.thicknessMap,Ee=!!v.gradientMap,Ue=!!v.alphaMap,ze=v.alphaTest>0,ht=!!v.alphaHash,It=!!v.extensions,Ft=Ur;v.toneMapped&&(Z===null||Z.isXRRenderTarget===!0)&&(Ft=i.toneMapping);let mt={shaderID:N,shaderType:v.type,shaderName:v.name,vertexShader:F,fragmentShader:se,defines:v.defines,customVertexShaderID:q,customFragmentShaderID:k,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:g,batching:Se,batchingColor:Se&&z._colorsTexture!==null,instancing:xe,instancingColor:xe&&z.instanceColor!==null,instancingMorph:xe&&z.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:Z===null?i.outputColorSpace:Z.isXRRenderTarget===!0?Z.texture.colorSpace:Vr,alphaToCoverage:!!v.alphaToCoverage,map:ge,matcap:re,envMap:L,envMapMode:L&&ie.mapping,envMapCubeUVHeight:fe,aoMap:ye,lightMap:Ae,bumpMap:_e,normalMap:Re,displacementMap:d&&Le,emissiveMap:he,normalMapObjectSpace:Re&&v.normalMapType===T1,normalMapTangentSpace:Re&&v.normalMapType===r0,metalnessMap:D,roughnessMap:b,anisotropy:$,anisotropyMap:ke,clearcoat:pe,clearcoatMap:nt,clearcoatNormalMap:De,clearcoatRoughnessMap:K,dispersion:Me,iridescence:ve,iridescenceMap:me,iridescenceThicknessMap:Pe,sheen:Oe,sheenColorMap:Ce,sheenRoughnessMap:be,specularMap:ue,specularColorMap:We,specularIntensityMap:X,transmission:He,transmissionMap:Te,thicknessMap:oe,gradientMap:Ee,opaque:v.transparent===!1&&v.blending===Ys&&v.alphaToCoverage===!1,alphaMap:Ue,alphaTest:ze,alphaHash:ht,combine:v.combine,mapUv:ge&&m(v.map.channel),aoMapUv:ye&&m(v.aoMap.channel),lightMapUv:Ae&&m(v.lightMap.channel),bumpMapUv:_e&&m(v.bumpMap.channel),normalMapUv:Re&&m(v.normalMap.channel),displacementMapUv:Le&&m(v.displacementMap.channel),emissiveMapUv:he&&m(v.emissiveMap.channel),metalnessMapUv:D&&m(v.metalnessMap.channel),roughnessMapUv:b&&m(v.roughnessMap.channel),anisotropyMapUv:ke&&m(v.anisotropyMap.channel),clearcoatMapUv:nt&&m(v.clearcoatMap.channel),clearcoatNormalMapUv:De&&m(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:K&&m(v.clearcoatRoughnessMap.channel),iridescenceMapUv:me&&m(v.iridescenceMap.channel),iridescenceThicknessMapUv:Pe&&m(v.iridescenceThicknessMap.channel),sheenColorMapUv:Ce&&m(v.sheenColorMap.channel),sheenRoughnessMapUv:be&&m(v.sheenRoughnessMap.channel),specularMapUv:ue&&m(v.specularMap.channel),specularColorMapUv:We&&m(v.specularColorMap.channel),specularIntensityMapUv:X&&m(v.specularIntensityMap.channel),transmissionMapUv:Te&&m(v.transmissionMap.channel),thicknessMapUv:oe&&m(v.thicknessMap.channel),alphaMapUv:Ue&&m(v.alphaMap.channel),vertexTangents:!!Q.attributes.tangent&&(Re||$),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!Q.attributes.uv&&(ge||Ue),fog:!!H,useFog:v.fog===!0,fogExp2:!!H&&H.isFogExp2,flatShading:v.flatShading===!0,sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:p,reverseDepthBuffer:f,skinning:z.isSkinnedMesh===!0,morphTargets:Q.morphAttributes.position!==void 0,morphNormals:Q.morphAttributes.normal!==void 0,morphColors:Q.morphAttributes.color!==void 0,morphTargetsCount:ne,morphTextureStride:ee,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:v.dithering,shadowMapEnabled:i.shadowMap.enabled&&V.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ft,decodeVideoTexture:ge&&v.map.isVideoTexture===!0&&Yt.getTransfer(v.map.colorSpace)===rn,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===Dt,flipSided:v.side===yn,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:It&&v.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(It&&v.extensions.multiDraw===!0||Se)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return mt.vertexUv1s=l.has(1),mt.vertexUv2s=l.has(2),mt.vertexUv3s=l.has(3),l.clear(),mt}function E(v){let w=[];if(v.shaderID?w.push(v.shaderID):(w.push(v.customVertexShaderID),w.push(v.customFragmentShaderID)),v.defines!==void 0)for(let V in v.defines)w.push(V),w.push(v.defines[V]);return v.isRawShaderMaterial===!1&&(y(w,v),_(w,v),w.push(i.outputColorSpace)),w.push(v.customProgramCacheKey),w.join()}function y(v,w){v.push(w.precision),v.push(w.outputColorSpace),v.push(w.envMapMode),v.push(w.envMapCubeUVHeight),v.push(w.mapUv),v.push(w.alphaMapUv),v.push(w.lightMapUv),v.push(w.aoMapUv),v.push(w.bumpMapUv),v.push(w.normalMapUv),v.push(w.displacementMapUv),v.push(w.emissiveMapUv),v.push(w.metalnessMapUv),v.push(w.roughnessMapUv),v.push(w.anisotropyMapUv),v.push(w.clearcoatMapUv),v.push(w.clearcoatNormalMapUv),v.push(w.clearcoatRoughnessMapUv),v.push(w.iridescenceMapUv),v.push(w.iridescenceThicknessMapUv),v.push(w.sheenColorMapUv),v.push(w.sheenRoughnessMapUv),v.push(w.specularMapUv),v.push(w.specularColorMapUv),v.push(w.specularIntensityMapUv),v.push(w.transmissionMapUv),v.push(w.thicknessMapUv),v.push(w.combine),v.push(w.fogExp2),v.push(w.sizeAttenuation),v.push(w.morphTargetsCount),v.push(w.morphAttributeCount),v.push(w.numDirLights),v.push(w.numPointLights),v.push(w.numSpotLights),v.push(w.numSpotLightMaps),v.push(w.numHemiLights),v.push(w.numRectAreaLights),v.push(w.numDirLightShadows),v.push(w.numPointLightShadows),v.push(w.numSpotLightShadows),v.push(w.numSpotLightShadowsWithMaps),v.push(w.numLightProbes),v.push(w.shadowMapType),v.push(w.toneMapping),v.push(w.numClippingPlanes),v.push(w.numClipIntersection),v.push(w.depthPacking)}function _(v,w){a.disableAll(),w.supportsVertexTextures&&a.enable(0),w.instancing&&a.enable(1),w.instancingColor&&a.enable(2),w.instancingMorph&&a.enable(3),w.matcap&&a.enable(4),w.envMap&&a.enable(5),w.normalMapObjectSpace&&a.enable(6),w.normalMapTangentSpace&&a.enable(7),w.clearcoat&&a.enable(8),w.iridescence&&a.enable(9),w.alphaTest&&a.enable(10),w.vertexColors&&a.enable(11),w.vertexAlphas&&a.enable(12),w.vertexUv1s&&a.enable(13),w.vertexUv2s&&a.enable(14),w.vertexUv3s&&a.enable(15),w.vertexTangents&&a.enable(16),w.anisotropy&&a.enable(17),w.alphaHash&&a.enable(18),w.batching&&a.enable(19),w.dispersion&&a.enable(20),w.batchingColor&&a.enable(21),v.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.reverseDepthBuffer&&a.enable(4),w.skinning&&a.enable(5),w.morphTargets&&a.enable(6),w.morphNormals&&a.enable(7),w.morphColors&&a.enable(8),w.premultipliedAlpha&&a.enable(9),w.shadowMapEnabled&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.transmission&&a.enable(15),w.sheen&&a.enable(16),w.opaque&&a.enable(17),w.pointsUvs&&a.enable(18),w.decodeVideoTexture&&a.enable(19),w.alphaToCoverage&&a.enable(20),v.push(a.mask)}function P(v){let w=x[v.type],V;if(w){let G=er[w];V=px.clone(G.uniforms)}else V=v.uniforms;return V}function T(v,w){let V;for(let G=0,z=h.length;G<z;G++){let H=h[G];if(H.cacheKey===w){V=H,++V.usedTimes;break}}return V===void 0&&(V=new E2(i,w,v,s),h.push(V)),V}function R(v){if(--v.usedTimes===0){let w=h.indexOf(v);h[w]=h[h.length-1],h.pop(),v.destroy()}}function A(v){c.remove(v)}function O(){c.dispose()}return{getParameters:u,getProgramCacheKey:E,getUniforms:P,acquireProgram:T,releaseProgram:R,releaseShaderCache:A,programs:h,dispose:O}}function b2(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function r(o,a,c){i.get(o)[a]=c}function s(){i=new WeakMap}return{has:e,get:t,remove:n,update:r,dispose:s}}function T2(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function bp(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Tp(){let i=[],e=0,t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function o(p,f,d,g,x,m){let u=i[e];return u===void 0?(u={id:p.id,object:p,geometry:f,material:d,groupOrder:g,renderOrder:p.renderOrder,z:x,group:m},i[e]=u):(u.id=p.id,u.object=p,u.geometry=f,u.material=d,u.groupOrder=g,u.renderOrder=p.renderOrder,u.z=x,u.group=m),e++,u}function a(p,f,d,g,x,m){let u=o(p,f,d,g,x,m);d.transmission>0?n.push(u):d.transparent===!0?r.push(u):t.push(u)}function c(p,f,d,g,x,m){let u=o(p,f,d,g,x,m);d.transmission>0?n.unshift(u):d.transparent===!0?r.unshift(u):t.unshift(u)}function l(p,f){t.length>1&&t.sort(p||T2),n.length>1&&n.sort(f||bp),r.length>1&&r.sort(f||bp)}function h(){for(let p=e,f=i.length;p<f;p++){let d=i[p];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:a,unshift:c,finish:h,sort:l}}function R2(){let i=new WeakMap;function e(n,r){let s=i.get(n),o;return s===void 0?(o=new Tp,i.set(n,[o])):r>=s.length?(o=new Tp,s.push(o)):o=s[r],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function A2(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new S,color:new pt};break;case"SpotLight":t={position:new S,direction:new S,color:new pt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new S,color:new pt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new S,skyColor:new pt,groundColor:new pt};break;case"RectAreaLight":t={color:new pt,position:new S,halfWidth:new S,halfHeight:new S};break}return i[e.id]=t,t}}}function C2(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Fe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Fe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Fe,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var P2=0;function I2(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function L2(i){let e=new A2,t=C2(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new S);let r=new S,s=new Rt,o=new Rt;function a(l){let h=0,p=0,f=0;for(let O=0;O<9;O++)n.probe[O].set(0,0,0);let d=0,g=0,x=0,m=0,u=0,E=0,y=0,_=0,P=0,T=0,R=0;l.sort(I2);for(let O=0,v=l.length;O<v;O++){let w=l[O],V=w.color,G=w.intensity,z=w.distance,H=w.shadow&&w.shadow.map?w.shadow.map.texture:null;if(w.isAmbientLight)h+=V.r*G,p+=V.g*G,f+=V.b*G;else if(w.isLightProbe){for(let Q=0;Q<9;Q++)n.probe[Q].addScaledVector(w.sh.coefficients[Q],G);R++}else if(w.isDirectionalLight){let Q=e.get(w);if(Q.color.copy(w.color).multiplyScalar(w.intensity),w.castShadow){let le=w.shadow,ie=t.get(w);ie.shadowIntensity=le.intensity,ie.shadowBias=le.bias,ie.shadowNormalBias=le.normalBias,ie.shadowRadius=le.radius,ie.shadowMapSize=le.mapSize,n.directionalShadow[d]=ie,n.directionalShadowMap[d]=H,n.directionalShadowMatrix[d]=w.shadow.matrix,E++}n.directional[d]=Q,d++}else if(w.isSpotLight){let Q=e.get(w);Q.position.setFromMatrixPosition(w.matrixWorld),Q.color.copy(V).multiplyScalar(G),Q.distance=z,Q.coneCos=Math.cos(w.angle),Q.penumbraCos=Math.cos(w.angle*(1-w.penumbra)),Q.decay=w.decay,n.spot[x]=Q;let le=w.shadow;if(w.map&&(n.spotLightMap[P]=w.map,P++,le.updateMatrices(w),w.castShadow&&T++),n.spotLightMatrix[x]=le.matrix,w.castShadow){let ie=t.get(w);ie.shadowIntensity=le.intensity,ie.shadowBias=le.bias,ie.shadowNormalBias=le.normalBias,ie.shadowRadius=le.radius,ie.shadowMapSize=le.mapSize,n.spotShadow[x]=ie,n.spotShadowMap[x]=H,_++}x++}else if(w.isRectAreaLight){let Q=e.get(w);Q.color.copy(V).multiplyScalar(G),Q.halfWidth.set(w.width*.5,0,0),Q.halfHeight.set(0,w.height*.5,0),n.rectArea[m]=Q,m++}else if(w.isPointLight){let Q=e.get(w);if(Q.color.copy(w.color).multiplyScalar(w.intensity),Q.distance=w.distance,Q.decay=w.decay,w.castShadow){let le=w.shadow,ie=t.get(w);ie.shadowIntensity=le.intensity,ie.shadowBias=le.bias,ie.shadowNormalBias=le.normalBias,ie.shadowRadius=le.radius,ie.shadowMapSize=le.mapSize,ie.shadowCameraNear=le.camera.near,ie.shadowCameraFar=le.camera.far,n.pointShadow[g]=ie,n.pointShadowMap[g]=H,n.pointShadowMatrix[g]=w.shadow.matrix,y++}n.point[g]=Q,g++}else if(w.isHemisphereLight){let Q=e.get(w);Q.skyColor.copy(w.color).multiplyScalar(G),Q.groundColor.copy(w.groundColor).multiplyScalar(G),n.hemi[u]=Q,u++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=$e.LTC_FLOAT_1,n.rectAreaLTC2=$e.LTC_FLOAT_2):(n.rectAreaLTC1=$e.LTC_HALF_1,n.rectAreaLTC2=$e.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=p,n.ambient[2]=f;let A=n.hash;(A.directionalLength!==d||A.pointLength!==g||A.spotLength!==x||A.rectAreaLength!==m||A.hemiLength!==u||A.numDirectionalShadows!==E||A.numPointShadows!==y||A.numSpotShadows!==_||A.numSpotMaps!==P||A.numLightProbes!==R)&&(n.directional.length=d,n.spot.length=x,n.rectArea.length=m,n.point.length=g,n.hemi.length=u,n.directionalShadow.length=E,n.directionalShadowMap.length=E,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=_,n.spotShadowMap.length=_,n.directionalShadowMatrix.length=E,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=_+P-T,n.spotLightMap.length=P,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=R,A.directionalLength=d,A.pointLength=g,A.spotLength=x,A.rectAreaLength=m,A.hemiLength=u,A.numDirectionalShadows=E,A.numPointShadows=y,A.numSpotShadows=_,A.numSpotMaps=P,A.numLightProbes=R,n.version=P2++)}function c(l,h){let p=0,f=0,d=0,g=0,x=0,m=h.matrixWorldInverse;for(let u=0,E=l.length;u<E;u++){let y=l[u];if(y.isDirectionalLight){let _=n.directional[p];_.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),_.direction.sub(r),_.direction.transformDirection(m),p++}else if(y.isSpotLight){let _=n.spot[d];_.position.setFromMatrixPosition(y.matrixWorld),_.position.applyMatrix4(m),_.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),_.direction.sub(r),_.direction.transformDirection(m),d++}else if(y.isRectAreaLight){let _=n.rectArea[g];_.position.setFromMatrixPosition(y.matrixWorld),_.position.applyMatrix4(m),o.identity(),s.copy(y.matrixWorld),s.premultiply(m),o.extractRotation(s),_.halfWidth.set(y.width*.5,0,0),_.halfHeight.set(0,y.height*.5,0),_.halfWidth.applyMatrix4(o),_.halfHeight.applyMatrix4(o),g++}else if(y.isPointLight){let _=n.point[f];_.position.setFromMatrixPosition(y.matrixWorld),_.position.applyMatrix4(m),f++}else if(y.isHemisphereLight){let _=n.hemi[x];_.direction.setFromMatrixPosition(y.matrixWorld),_.direction.transformDirection(m),x++}}}return{setup:a,setupView:c,state:n}}function Rp(i){let e=new L2(i),t=[],n=[];function r(h){l.camera=h,t.length=0,n.length=0}function s(h){t.push(h)}function o(h){n.push(h)}function a(){e.setup(t)}function c(h){e.setupView(t,h)}let l={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:l,setupLights:a,setupLightsView:c,pushLight:s,pushShadow:o}}function D2(i){let e=new WeakMap;function t(r,s=0){let o=e.get(r),a;return o===void 0?(a=new Rp(i),e.set(r,[a])):s>=o.length?(a=new Rp(i),o.push(a)):a=o[s],a}function n(){e=new WeakMap}return{get:t,dispose:n}}var aa=class extends Or{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=b1,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Lu=class extends Or{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},U2=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,H2=`uniform sampler2D shadow_pass;
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
}`;function N2(i,e,t){let n=new oa,r=new Fe,s=new Fe,o=new Jt,a=new aa({depthPacking:dd}),c=new Lu,l={},h=t.maxTextureSize,p={[nr]:yn,[yn]:nr,[Dt]:Dt},f=new ir({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Fe},radius:{value:4}},vertexShader:U2,fragmentShader:H2}),d=f.clone();d.defines.HORIZONTAL_PASS=1;let g=new Pt;g.setAttribute("position",new hn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new dt(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=qp;let u=this.type;this.render=function(T,R,A){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;let O=i.getRenderTarget(),v=i.getActiveCubeFace(),w=i.getActiveMipmapLevel(),V=i.state;V.setBlending(Dr),V.buffers.color.setClear(1,1,1,1),V.buffers.depth.setTest(!0),V.setScissorTest(!1);let G=u!==mr&&this.type===mr,z=u===mr&&this.type!==mr;for(let H=0,Q=T.length;H<Q;H++){let le=T[H],ie=le.shadow;if(ie===void 0){console.warn("THREE.WebGLShadowMap:",le,"has no shadow.");continue}if(ie.autoUpdate===!1&&ie.needsUpdate===!1)continue;r.copy(ie.mapSize);let fe=ie.getFrameExtents();if(r.multiply(fe),s.copy(ie.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/fe.x),r.x=s.x*fe.x,ie.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/fe.y),r.y=s.y*fe.y,ie.mapSize.y=s.y)),ie.map===null||G===!0||z===!0){let j=this.type!==mr?{minFilter:si,magFilter:si}:{};ie.map!==null&&ie.map.dispose(),ie.map=new yr(r.x,r.y,j),ie.map.texture.name=le.name+".shadowMap",ie.camera.updateProjectionMatrix()}i.setRenderTarget(ie.map),i.clear();let N=ie.getViewportCount();for(let j=0;j<N;j++){let ne=ie.getViewport(j);o.set(s.x*ne.x,s.y*ne.y,s.x*ne.z,s.y*ne.w),V.viewport(o),ie.updateMatrices(le,j),n=ie.getFrustum(),_(R,A,ie.camera,le,this.type)}ie.isPointLightShadow!==!0&&this.type===mr&&E(ie,A),ie.needsUpdate=!1}u=this.type,m.needsUpdate=!1,i.setRenderTarget(O,v,w)};function E(T,R){let A=e.update(x);f.defines.VSM_SAMPLES!==T.blurSamples&&(f.defines.VSM_SAMPLES=T.blurSamples,d.defines.VSM_SAMPLES=T.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new yr(r.x,r.y)),f.uniforms.shadow_pass.value=T.map.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(R,null,A,f,x,null),d.uniforms.shadow_pass.value=T.mapPass.texture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(R,null,A,d,x,null)}function y(T,R,A,O){let v=null,w=A.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(w!==void 0)v=w;else if(v=A.isPointLight===!0?c:a,i.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){let V=v.uuid,G=R.uuid,z=l[V];z===void 0&&(z={},l[V]=z);let H=z[G];H===void 0&&(H=v.clone(),z[G]=H,R.addEventListener("dispose",P)),v=H}if(v.visible=R.visible,v.wireframe=R.wireframe,O===mr?v.side=R.shadowSide!==null?R.shadowSide:R.side:v.side=R.shadowSide!==null?R.shadowSide:p[R.side],v.alphaMap=R.alphaMap,v.alphaTest=R.alphaTest,v.map=R.map,v.clipShadows=R.clipShadows,v.clippingPlanes=R.clippingPlanes,v.clipIntersection=R.clipIntersection,v.displacementMap=R.displacementMap,v.displacementScale=R.displacementScale,v.displacementBias=R.displacementBias,v.wireframeLinewidth=R.wireframeLinewidth,v.linewidth=R.linewidth,A.isPointLight===!0&&v.isMeshDistanceMaterial===!0){let V=i.properties.get(v);V.light=A}return v}function _(T,R,A,O,v){if(T.visible===!1)return;if(T.layers.test(R.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&v===mr)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,T.matrixWorld);let G=e.update(T),z=T.material;if(Array.isArray(z)){let H=G.groups;for(let Q=0,le=H.length;Q<le;Q++){let ie=H[Q],fe=z[ie.materialIndex];if(fe&&fe.visible){let N=y(T,fe,O,v);T.onBeforeShadow(i,T,R,A,G,N,ie),i.renderBufferDirect(A,null,G,N,T,ie),T.onAfterShadow(i,T,R,A,G,N,ie)}}}else if(z.visible){let H=y(T,z,O,v);T.onBeforeShadow(i,T,R,A,G,H,null),i.renderBufferDirect(A,null,G,H,T,null),T.onAfterShadow(i,T,R,A,G,H,null)}}let V=T.children;for(let G=0,z=V.length;G<z;G++)_(V[G],R,A,O,v)}function P(T){T.target.removeEventListener("dispose",P);for(let A in l){let O=l[A],v=T.target.uuid;v in O&&(O[v].dispose(),delete O[v])}}}var F2={[zh]:Bh,[kh]:Wh,[Vh]:Xh,[Js]:Gh,[Bh]:zh,[Wh]:kh,[Xh]:Vh,[Gh]:Js};function O2(i){function e(){let X=!1,Te=new Jt,oe=null,Ee=new Jt(0,0,0,0);return{setMask:function(Ue){oe!==Ue&&!X&&(i.colorMask(Ue,Ue,Ue,Ue),oe=Ue)},setLocked:function(Ue){X=Ue},setClear:function(Ue,ze,ht,It,Ft){Ft===!0&&(Ue*=It,ze*=It,ht*=It),Te.set(Ue,ze,ht,It),Ee.equals(Te)===!1&&(i.clearColor(Ue,ze,ht,It),Ee.copy(Te))},reset:function(){X=!1,oe=null,Ee.set(-1,0,0,0)}}}function t(){let X=!1,Te=!1,oe=null,Ee=null,Ue=null;return{setReversed:function(ze){Te=ze},setTest:function(ze){ze?q(i.DEPTH_TEST):k(i.DEPTH_TEST)},setMask:function(ze){oe!==ze&&!X&&(i.depthMask(ze),oe=ze)},setFunc:function(ze){if(Te&&(ze=F2[ze]),Ee!==ze){switch(ze){case zh:i.depthFunc(i.NEVER);break;case Bh:i.depthFunc(i.ALWAYS);break;case kh:i.depthFunc(i.LESS);break;case Js:i.depthFunc(i.LEQUAL);break;case Vh:i.depthFunc(i.EQUAL);break;case Gh:i.depthFunc(i.GEQUAL);break;case Wh:i.depthFunc(i.GREATER);break;case Xh:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Ee=ze}},setLocked:function(ze){X=ze},setClear:function(ze){Ue!==ze&&(i.clearDepth(ze),Ue=ze)},reset:function(){X=!1,oe=null,Ee=null,Ue=null}}}function n(){let X=!1,Te=null,oe=null,Ee=null,Ue=null,ze=null,ht=null,It=null,Ft=null;return{setTest:function(mt){X||(mt?q(i.STENCIL_TEST):k(i.STENCIL_TEST))},setMask:function(mt){Te!==mt&&!X&&(i.stencilMask(mt),Te=mt)},setFunc:function(mt,Et,$n){(oe!==mt||Ee!==Et||Ue!==$n)&&(i.stencilFunc(mt,Et,$n),oe=mt,Ee=Et,Ue=$n)},setOp:function(mt,Et,$n){(ze!==mt||ht!==Et||It!==$n)&&(i.stencilOp(mt,Et,$n),ze=mt,ht=Et,It=$n)},setLocked:function(mt){X=mt},setClear:function(mt){Ft!==mt&&(i.clearStencil(mt),Ft=mt)},reset:function(){X=!1,Te=null,oe=null,Ee=null,Ue=null,ze=null,ht=null,It=null,Ft=null}}}let r=new e,s=new t,o=new n,a=new WeakMap,c=new WeakMap,l={},h={},p=new WeakMap,f=[],d=null,g=!1,x=null,m=null,u=null,E=null,y=null,_=null,P=null,T=new pt(0,0,0),R=0,A=!1,O=null,v=null,w=null,V=null,G=null,z=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),H=!1,Q=0,le=i.getParameter(i.VERSION);le.indexOf("WebGL")!==-1?(Q=parseFloat(/^WebGL (\d)/.exec(le)[1]),H=Q>=1):le.indexOf("OpenGL ES")!==-1&&(Q=parseFloat(/^OpenGL ES (\d)/.exec(le)[1]),H=Q>=2);let ie=null,fe={},N=i.getParameter(i.SCISSOR_BOX),j=i.getParameter(i.VIEWPORT),ne=new Jt().fromArray(N),ee=new Jt().fromArray(j);function F(X,Te,oe,Ee){let Ue=new Uint8Array(4),ze=i.createTexture();i.bindTexture(X,ze),i.texParameteri(X,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(X,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let ht=0;ht<oe;ht++)X===i.TEXTURE_3D||X===i.TEXTURE_2D_ARRAY?i.texImage3D(Te,0,i.RGBA,1,1,Ee,0,i.RGBA,i.UNSIGNED_BYTE,Ue):i.texImage2D(Te+ht,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Ue);return ze}let se={};se[i.TEXTURE_2D]=F(i.TEXTURE_2D,i.TEXTURE_2D,1),se[i.TEXTURE_CUBE_MAP]=F(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),se[i.TEXTURE_2D_ARRAY]=F(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),se[i.TEXTURE_3D]=F(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),o.setClear(0),q(i.DEPTH_TEST),s.setFunc(Js),Ae(!1),_e(Df),q(i.CULL_FACE),L(Dr);function q(X){l[X]!==!0&&(i.enable(X),l[X]=!0)}function k(X){l[X]!==!1&&(i.disable(X),l[X]=!1)}function Z(X,Te){return h[X]!==Te?(i.bindFramebuffer(X,Te),h[X]=Te,X===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=Te),X===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=Te),!0):!1}function xe(X,Te){let oe=f,Ee=!1;if(X){oe=p.get(Te),oe===void 0&&(oe=[],p.set(Te,oe));let Ue=X.textures;if(oe.length!==Ue.length||oe[0]!==i.COLOR_ATTACHMENT0){for(let ze=0,ht=Ue.length;ze<ht;ze++)oe[ze]=i.COLOR_ATTACHMENT0+ze;oe.length=Ue.length,Ee=!0}}else oe[0]!==i.BACK&&(oe[0]=i.BACK,Ee=!0);Ee&&i.drawBuffers(oe)}function Se(X){return d!==X?(i.useProgram(X),d=X,!0):!1}let ge={[rs]:i.FUNC_ADD,[jg]:i.FUNC_SUBTRACT,[e1]:i.FUNC_REVERSE_SUBTRACT};ge[t1]=i.MIN,ge[n1]=i.MAX;let re={[i1]:i.ZERO,[r1]:i.ONE,[s1]:i.SRC_COLOR,[Fh]:i.SRC_ALPHA,[u1]:i.SRC_ALPHA_SATURATE,[l1]:i.DST_COLOR,[a1]:i.DST_ALPHA,[o1]:i.ONE_MINUS_SRC_COLOR,[Oh]:i.ONE_MINUS_SRC_ALPHA,[h1]:i.ONE_MINUS_DST_COLOR,[c1]:i.ONE_MINUS_DST_ALPHA,[d1]:i.CONSTANT_COLOR,[f1]:i.ONE_MINUS_CONSTANT_COLOR,[p1]:i.CONSTANT_ALPHA,[m1]:i.ONE_MINUS_CONSTANT_ALPHA};function L(X,Te,oe,Ee,Ue,ze,ht,It,Ft,mt){if(X===Dr){g===!0&&(k(i.BLEND),g=!1);return}if(g===!1&&(q(i.BLEND),g=!0),X!==Qg){if(X!==x||mt!==A){if((m!==rs||y!==rs)&&(i.blendEquation(i.FUNC_ADD),m=rs,y=rs),mt)switch(X){case Ys:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Tc:i.blendFunc(i.ONE,i.ONE);break;case Uf:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Hf:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",X);break}else switch(X){case Ys:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Tc:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Uf:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Hf:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",X);break}u=null,E=null,_=null,P=null,T.set(0,0,0),R=0,x=X,A=mt}return}Ue=Ue||Te,ze=ze||oe,ht=ht||Ee,(Te!==m||Ue!==y)&&(i.blendEquationSeparate(ge[Te],ge[Ue]),m=Te,y=Ue),(oe!==u||Ee!==E||ze!==_||ht!==P)&&(i.blendFuncSeparate(re[oe],re[Ee],re[ze],re[ht]),u=oe,E=Ee,_=ze,P=ht),(It.equals(T)===!1||Ft!==R)&&(i.blendColor(It.r,It.g,It.b,Ft),T.copy(It),R=Ft),x=X,A=!1}function ye(X,Te){X.side===Dt?k(i.CULL_FACE):q(i.CULL_FACE);let oe=X.side===yn;Te&&(oe=!oe),Ae(oe),X.blending===Ys&&X.transparent===!1?L(Dr):L(X.blending,X.blendEquation,X.blendSrc,X.blendDst,X.blendEquationAlpha,X.blendSrcAlpha,X.blendDstAlpha,X.blendColor,X.blendAlpha,X.premultipliedAlpha),s.setFunc(X.depthFunc),s.setTest(X.depthTest),s.setMask(X.depthWrite),r.setMask(X.colorWrite);let Ee=X.stencilWrite;o.setTest(Ee),Ee&&(o.setMask(X.stencilWriteMask),o.setFunc(X.stencilFunc,X.stencilRef,X.stencilFuncMask),o.setOp(X.stencilFail,X.stencilZFail,X.stencilZPass)),Le(X.polygonOffset,X.polygonOffsetFactor,X.polygonOffsetUnits),X.alphaToCoverage===!0?q(i.SAMPLE_ALPHA_TO_COVERAGE):k(i.SAMPLE_ALPHA_TO_COVERAGE)}function Ae(X){O!==X&&(X?i.frontFace(i.CW):i.frontFace(i.CCW),O=X)}function _e(X){X!==Kg?(q(i.CULL_FACE),X!==v&&(X===Df?i.cullFace(i.BACK):X===Jg?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):k(i.CULL_FACE),v=X}function Re(X){X!==w&&(H&&i.lineWidth(X),w=X)}function Le(X,Te,oe){X?(q(i.POLYGON_OFFSET_FILL),(V!==Te||G!==oe)&&(i.polygonOffset(Te,oe),V=Te,G=oe)):k(i.POLYGON_OFFSET_FILL)}function he(X){X?q(i.SCISSOR_TEST):k(i.SCISSOR_TEST)}function D(X){X===void 0&&(X=i.TEXTURE0+z-1),ie!==X&&(i.activeTexture(X),ie=X)}function b(X,Te,oe){oe===void 0&&(ie===null?oe=i.TEXTURE0+z-1:oe=ie);let Ee=fe[oe];Ee===void 0&&(Ee={type:void 0,texture:void 0},fe[oe]=Ee),(Ee.type!==X||Ee.texture!==Te)&&(ie!==oe&&(i.activeTexture(oe),ie=oe),i.bindTexture(X,Te||se[X]),Ee.type=X,Ee.texture=Te)}function $(){let X=fe[ie];X!==void 0&&X.type!==void 0&&(i.bindTexture(X.type,null),X.type=void 0,X.texture=void 0)}function pe(){try{i.compressedTexImage2D.apply(i,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Me(){try{i.compressedTexImage3D.apply(i,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function ve(){try{i.texSubImage2D.apply(i,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Oe(){try{i.texSubImage3D.apply(i,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function He(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function ke(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function nt(){try{i.texStorage2D.apply(i,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function De(){try{i.texStorage3D.apply(i,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function K(){try{i.texImage2D.apply(i,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function me(){try{i.texImage3D.apply(i,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Pe(X){ne.equals(X)===!1&&(i.scissor(X.x,X.y,X.z,X.w),ne.copy(X))}function Ce(X){ee.equals(X)===!1&&(i.viewport(X.x,X.y,X.z,X.w),ee.copy(X))}function be(X,Te){let oe=c.get(Te);oe===void 0&&(oe=new WeakMap,c.set(Te,oe));let Ee=oe.get(X);Ee===void 0&&(Ee=i.getUniformBlockIndex(Te,X.name),oe.set(X,Ee))}function ue(X,Te){let Ee=c.get(Te).get(X);a.get(Te)!==Ee&&(i.uniformBlockBinding(Te,Ee,X.__bindingPointIndex),a.set(Te,Ee))}function We(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),l={},ie=null,fe={},h={},p=new WeakMap,f=[],d=null,g=!1,x=null,m=null,u=null,E=null,y=null,_=null,P=null,T=new pt(0,0,0),R=0,A=!1,O=null,v=null,w=null,V=null,G=null,ne.set(0,0,i.canvas.width,i.canvas.height),ee.set(0,0,i.canvas.width,i.canvas.height),r.reset(),s.reset(),o.reset()}return{buffers:{color:r,depth:s,stencil:o},enable:q,disable:k,bindFramebuffer:Z,drawBuffers:xe,useProgram:Se,setBlending:L,setMaterial:ye,setFlipSided:Ae,setCullFace:_e,setLineWidth:Re,setPolygonOffset:Le,setScissorTest:he,activeTexture:D,bindTexture:b,unbindTexture:$,compressedTexImage2D:pe,compressedTexImage3D:Me,texImage2D:K,texImage3D:me,updateUBOMapping:be,uniformBlockBinding:ue,texStorage2D:nt,texStorage3D:De,texSubImage2D:ve,texSubImage3D:Oe,compressedTexSubImage2D:He,compressedTexSubImage3D:ke,scissor:Pe,viewport:Ce,reset:We}}function Ap(i,e,t,n){let r=z2(n);switch(t){case Qp:return i*e;case e0:return i*e;case t0:return i*e*2;case cd:return i*e/r.components*r.byteLength;case ld:return i*e/r.components*r.byteLength;case n0:return i*e*2/r.components*r.byteLength;case hd:return i*e*2/r.components*r.byteLength;case jp:return i*e*3/r.components*r.byteLength;case xi:return i*e*4/r.components*r.byteLength;case ud:return i*e*4/r.components*r.byteLength;case _c:case Mc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Ec:case Sc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case $h:case Jh:return Math.max(i,16)*Math.max(e,8)/4;case Zh:case Kh:return Math.max(i,8)*Math.max(e,8)/2;case Qh:case jh:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case eu:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case tu:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case nu:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case iu:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case ru:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case su:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case ou:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case au:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case cu:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case lu:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case hu:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case uu:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case du:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case fu:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case pu:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case wc:case mu:case gu:return Math.ceil(i/4)*Math.ceil(e/4)*16;case i0:case xu:return Math.ceil(i/4)*Math.ceil(e/4)*8;case yu:case vu:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function z2(i){switch(i){case xr:case $p:return{byteLength:1,components:1};case na:case Kp:case ga:return{byteLength:2,components:1};case od:case ad:return{byteLength:2,components:4};case ls:case sd:case tr:return{byteLength:4,components:1};case Jp:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function B2(i,e,t,n,r,s,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Fe,h=new WeakMap,p,f=new WeakMap,d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(D,b){return d?new OffscreenCanvas(D,b):ia("canvas")}function x(D,b,$){let pe=1,Me=he(D);if((Me.width>$||Me.height>$)&&(pe=$/Math.max(Me.width,Me.height)),pe<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){let ve=Math.floor(pe*Me.width),Oe=Math.floor(pe*Me.height);p===void 0&&(p=g(ve,Oe));let He=b?g(ve,Oe):p;return He.width=ve,He.height=Oe,He.getContext("2d").drawImage(D,0,0,ve,Oe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Me.width+"x"+Me.height+") to ("+ve+"x"+Oe+")."),He}else return"data"in D&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Me.width+"x"+Me.height+")."),D;return D}function m(D){return D.generateMipmaps&&D.minFilter!==si&&D.minFilter!==pn}function u(D){i.generateMipmap(D)}function E(D,b,$,pe,Me=!1){if(D!==null){if(i[D]!==void 0)return i[D];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let ve=b;if(b===i.RED&&($===i.FLOAT&&(ve=i.R32F),$===i.HALF_FLOAT&&(ve=i.R16F),$===i.UNSIGNED_BYTE&&(ve=i.R8)),b===i.RED_INTEGER&&($===i.UNSIGNED_BYTE&&(ve=i.R8UI),$===i.UNSIGNED_SHORT&&(ve=i.R16UI),$===i.UNSIGNED_INT&&(ve=i.R32UI),$===i.BYTE&&(ve=i.R8I),$===i.SHORT&&(ve=i.R16I),$===i.INT&&(ve=i.R32I)),b===i.RG&&($===i.FLOAT&&(ve=i.RG32F),$===i.HALF_FLOAT&&(ve=i.RG16F),$===i.UNSIGNED_BYTE&&(ve=i.RG8)),b===i.RG_INTEGER&&($===i.UNSIGNED_BYTE&&(ve=i.RG8UI),$===i.UNSIGNED_SHORT&&(ve=i.RG16UI),$===i.UNSIGNED_INT&&(ve=i.RG32UI),$===i.BYTE&&(ve=i.RG8I),$===i.SHORT&&(ve=i.RG16I),$===i.INT&&(ve=i.RG32I)),b===i.RGB_INTEGER&&($===i.UNSIGNED_BYTE&&(ve=i.RGB8UI),$===i.UNSIGNED_SHORT&&(ve=i.RGB16UI),$===i.UNSIGNED_INT&&(ve=i.RGB32UI),$===i.BYTE&&(ve=i.RGB8I),$===i.SHORT&&(ve=i.RGB16I),$===i.INT&&(ve=i.RGB32I)),b===i.RGBA_INTEGER&&($===i.UNSIGNED_BYTE&&(ve=i.RGBA8UI),$===i.UNSIGNED_SHORT&&(ve=i.RGBA16UI),$===i.UNSIGNED_INT&&(ve=i.RGBA32UI),$===i.BYTE&&(ve=i.RGBA8I),$===i.SHORT&&(ve=i.RGBA16I),$===i.INT&&(ve=i.RGBA32I)),b===i.RGB&&$===i.UNSIGNED_INT_5_9_9_9_REV&&(ve=i.RGB9_E5),b===i.RGBA){let Oe=Me?Ac:Yt.getTransfer(pe);$===i.FLOAT&&(ve=i.RGBA32F),$===i.HALF_FLOAT&&(ve=i.RGBA16F),$===i.UNSIGNED_BYTE&&(ve=Oe===rn?i.SRGB8_ALPHA8:i.RGBA8),$===i.UNSIGNED_SHORT_4_4_4_4&&(ve=i.RGBA4),$===i.UNSIGNED_SHORT_5_5_5_1&&(ve=i.RGB5_A1)}return(ve===i.R16F||ve===i.R32F||ve===i.RG16F||ve===i.RG32F||ve===i.RGBA16F||ve===i.RGBA32F)&&e.get("EXT_color_buffer_float"),ve}function y(D,b){let $;return D?b===null||b===ls||b===eo?$=i.DEPTH24_STENCIL8:b===tr?$=i.DEPTH32F_STENCIL8:b===na&&($=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===ls||b===eo?$=i.DEPTH_COMPONENT24:b===tr?$=i.DEPTH_COMPONENT32F:b===na&&($=i.DEPTH_COMPONENT16),$}function _(D,b){return m(D)===!0||D.isFramebufferTexture&&D.minFilter!==si&&D.minFilter!==pn?Math.log2(Math.max(b.width,b.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?b.mipmaps.length:1}function P(D){let b=D.target;b.removeEventListener("dispose",P),R(b),b.isVideoTexture&&h.delete(b)}function T(D){let b=D.target;b.removeEventListener("dispose",T),O(b)}function R(D){let b=n.get(D);if(b.__webglInit===void 0)return;let $=D.source,pe=f.get($);if(pe){let Me=pe[b.__cacheKey];Me.usedTimes--,Me.usedTimes===0&&A(D),Object.keys(pe).length===0&&f.delete($)}n.remove(D)}function A(D){let b=n.get(D);i.deleteTexture(b.__webglTexture);let $=D.source,pe=f.get($);delete pe[b.__cacheKey],o.memory.textures--}function O(D){let b=n.get(D);if(D.depthTexture&&D.depthTexture.dispose(),D.isWebGLCubeRenderTarget)for(let pe=0;pe<6;pe++){if(Array.isArray(b.__webglFramebuffer[pe]))for(let Me=0;Me<b.__webglFramebuffer[pe].length;Me++)i.deleteFramebuffer(b.__webglFramebuffer[pe][Me]);else i.deleteFramebuffer(b.__webglFramebuffer[pe]);b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer[pe])}else{if(Array.isArray(b.__webglFramebuffer))for(let pe=0;pe<b.__webglFramebuffer.length;pe++)i.deleteFramebuffer(b.__webglFramebuffer[pe]);else i.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&i.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&i.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let pe=0;pe<b.__webglColorRenderbuffer.length;pe++)b.__webglColorRenderbuffer[pe]&&i.deleteRenderbuffer(b.__webglColorRenderbuffer[pe]);b.__webglDepthRenderbuffer&&i.deleteRenderbuffer(b.__webglDepthRenderbuffer)}let $=D.textures;for(let pe=0,Me=$.length;pe<Me;pe++){let ve=n.get($[pe]);ve.__webglTexture&&(i.deleteTexture(ve.__webglTexture),o.memory.textures--),n.remove($[pe])}n.remove(D)}let v=0;function w(){v=0}function V(){let D=v;return D>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+r.maxTextures),v+=1,D}function G(D){let b=[];return b.push(D.wrapS),b.push(D.wrapT),b.push(D.wrapR||0),b.push(D.magFilter),b.push(D.minFilter),b.push(D.anisotropy),b.push(D.internalFormat),b.push(D.format),b.push(D.type),b.push(D.generateMipmaps),b.push(D.premultiplyAlpha),b.push(D.flipY),b.push(D.unpackAlignment),b.push(D.colorSpace),b.join()}function z(D,b){let $=n.get(D);if(D.isVideoTexture&&Re(D),D.isRenderTargetTexture===!1&&D.version>0&&$.__version!==D.version){let pe=D.image;if(pe===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(pe.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ee($,D,b);return}}t.bindTexture(i.TEXTURE_2D,$.__webglTexture,i.TEXTURE0+b)}function H(D,b){let $=n.get(D);if(D.version>0&&$.__version!==D.version){ee($,D,b);return}t.bindTexture(i.TEXTURE_2D_ARRAY,$.__webglTexture,i.TEXTURE0+b)}function Q(D,b){let $=n.get(D);if(D.version>0&&$.__version!==D.version){ee($,D,b);return}t.bindTexture(i.TEXTURE_3D,$.__webglTexture,i.TEXTURE0+b)}function le(D,b){let $=n.get(D);if(D.version>0&&$.__version!==D.version){F($,D,b);return}t.bindTexture(i.TEXTURE_CUBE_MAP,$.__webglTexture,i.TEXTURE0+b)}let ie={[cs]:i.REPEAT,[as]:i.CLAMP_TO_EDGE,[Yh]:i.MIRRORED_REPEAT},fe={[si]:i.NEAREST,[w1]:i.NEAREST_MIPMAP_NEAREST,[qa]:i.NEAREST_MIPMAP_LINEAR,[pn]:i.LINEAR,[nh]:i.LINEAR_MIPMAP_NEAREST,[Wi]:i.LINEAR_MIPMAP_LINEAR},N={[R1]:i.NEVER,[D1]:i.ALWAYS,[A1]:i.LESS,[s0]:i.LEQUAL,[C1]:i.EQUAL,[L1]:i.GEQUAL,[P1]:i.GREATER,[I1]:i.NOTEQUAL};function j(D,b){if(b.type===tr&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===pn||b.magFilter===nh||b.magFilter===qa||b.magFilter===Wi||b.minFilter===pn||b.minFilter===nh||b.minFilter===qa||b.minFilter===Wi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(D,i.TEXTURE_WRAP_S,ie[b.wrapS]),i.texParameteri(D,i.TEXTURE_WRAP_T,ie[b.wrapT]),(D===i.TEXTURE_3D||D===i.TEXTURE_2D_ARRAY)&&i.texParameteri(D,i.TEXTURE_WRAP_R,ie[b.wrapR]),i.texParameteri(D,i.TEXTURE_MAG_FILTER,fe[b.magFilter]),i.texParameteri(D,i.TEXTURE_MIN_FILTER,fe[b.minFilter]),b.compareFunction&&(i.texParameteri(D,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(D,i.TEXTURE_COMPARE_FUNC,N[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===si||b.minFilter!==qa&&b.minFilter!==Wi||b.type===tr&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||n.get(b).__currentAnisotropy){let $=e.get("EXT_texture_filter_anisotropic");i.texParameterf(D,$.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,r.getMaxAnisotropy())),n.get(b).__currentAnisotropy=b.anisotropy}}}function ne(D,b){let $=!1;D.__webglInit===void 0&&(D.__webglInit=!0,b.addEventListener("dispose",P));let pe=b.source,Me=f.get(pe);Me===void 0&&(Me={},f.set(pe,Me));let ve=G(b);if(ve!==D.__cacheKey){Me[ve]===void 0&&(Me[ve]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,$=!0),Me[ve].usedTimes++;let Oe=Me[D.__cacheKey];Oe!==void 0&&(Me[D.__cacheKey].usedTimes--,Oe.usedTimes===0&&A(b)),D.__cacheKey=ve,D.__webglTexture=Me[ve].texture}return $}function ee(D,b,$){let pe=i.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(pe=i.TEXTURE_2D_ARRAY),b.isData3DTexture&&(pe=i.TEXTURE_3D);let Me=ne(D,b),ve=b.source;t.bindTexture(pe,D.__webglTexture,i.TEXTURE0+$);let Oe=n.get(ve);if(ve.version!==Oe.__version||Me===!0){t.activeTexture(i.TEXTURE0+$);let He=Yt.getPrimaries(Yt.workingColorSpace),ke=b.colorSpace===Lr?null:Yt.getPrimaries(b.colorSpace),nt=b.colorSpace===Lr||He===ke?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,nt);let De=x(b.image,!1,r.maxTextureSize);De=Le(b,De);let K=s.convert(b.format,b.colorSpace),me=s.convert(b.type),Pe=E(b.internalFormat,K,me,b.colorSpace,b.isVideoTexture);j(pe,b);let Ce,be=b.mipmaps,ue=b.isVideoTexture!==!0,We=Oe.__version===void 0||Me===!0,X=ve.dataReady,Te=_(b,De);if(b.isDepthTexture)Pe=y(b.format===to,b.type),We&&(ue?t.texStorage2D(i.TEXTURE_2D,1,Pe,De.width,De.height):t.texImage2D(i.TEXTURE_2D,0,Pe,De.width,De.height,0,K,me,null));else if(b.isDataTexture)if(be.length>0){ue&&We&&t.texStorage2D(i.TEXTURE_2D,Te,Pe,be[0].width,be[0].height);for(let oe=0,Ee=be.length;oe<Ee;oe++)Ce=be[oe],ue?X&&t.texSubImage2D(i.TEXTURE_2D,oe,0,0,Ce.width,Ce.height,K,me,Ce.data):t.texImage2D(i.TEXTURE_2D,oe,Pe,Ce.width,Ce.height,0,K,me,Ce.data);b.generateMipmaps=!1}else ue?(We&&t.texStorage2D(i.TEXTURE_2D,Te,Pe,De.width,De.height),X&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,De.width,De.height,K,me,De.data)):t.texImage2D(i.TEXTURE_2D,0,Pe,De.width,De.height,0,K,me,De.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){ue&&We&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Te,Pe,be[0].width,be[0].height,De.depth);for(let oe=0,Ee=be.length;oe<Ee;oe++)if(Ce=be[oe],b.format!==xi)if(K!==null)if(ue){if(X)if(b.layerUpdates.size>0){let Ue=Ap(Ce.width,Ce.height,b.format,b.type);for(let ze of b.layerUpdates){let ht=Ce.data.subarray(ze*Ue/Ce.data.BYTES_PER_ELEMENT,(ze+1)*Ue/Ce.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,oe,0,0,ze,Ce.width,Ce.height,1,K,ht,0,0)}b.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,oe,0,0,0,Ce.width,Ce.height,De.depth,K,Ce.data,0,0)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,oe,Pe,Ce.width,Ce.height,De.depth,0,Ce.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ue?X&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,oe,0,0,0,Ce.width,Ce.height,De.depth,K,me,Ce.data):t.texImage3D(i.TEXTURE_2D_ARRAY,oe,Pe,Ce.width,Ce.height,De.depth,0,K,me,Ce.data)}else{ue&&We&&t.texStorage2D(i.TEXTURE_2D,Te,Pe,be[0].width,be[0].height);for(let oe=0,Ee=be.length;oe<Ee;oe++)Ce=be[oe],b.format!==xi?K!==null?ue?X&&t.compressedTexSubImage2D(i.TEXTURE_2D,oe,0,0,Ce.width,Ce.height,K,Ce.data):t.compressedTexImage2D(i.TEXTURE_2D,oe,Pe,Ce.width,Ce.height,0,Ce.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ue?X&&t.texSubImage2D(i.TEXTURE_2D,oe,0,0,Ce.width,Ce.height,K,me,Ce.data):t.texImage2D(i.TEXTURE_2D,oe,Pe,Ce.width,Ce.height,0,K,me,Ce.data)}else if(b.isDataArrayTexture)if(ue){if(We&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Te,Pe,De.width,De.height,De.depth),X)if(b.layerUpdates.size>0){let oe=Ap(De.width,De.height,b.format,b.type);for(let Ee of b.layerUpdates){let Ue=De.data.subarray(Ee*oe/De.data.BYTES_PER_ELEMENT,(Ee+1)*oe/De.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Ee,De.width,De.height,1,K,me,Ue)}b.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,De.width,De.height,De.depth,K,me,De.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Pe,De.width,De.height,De.depth,0,K,me,De.data);else if(b.isData3DTexture)ue?(We&&t.texStorage3D(i.TEXTURE_3D,Te,Pe,De.width,De.height,De.depth),X&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,De.width,De.height,De.depth,K,me,De.data)):t.texImage3D(i.TEXTURE_3D,0,Pe,De.width,De.height,De.depth,0,K,me,De.data);else if(b.isFramebufferTexture){if(We)if(ue)t.texStorage2D(i.TEXTURE_2D,Te,Pe,De.width,De.height);else{let oe=De.width,Ee=De.height;for(let Ue=0;Ue<Te;Ue++)t.texImage2D(i.TEXTURE_2D,Ue,Pe,oe,Ee,0,K,me,null),oe>>=1,Ee>>=1}}else if(be.length>0){if(ue&&We){let oe=he(be[0]);t.texStorage2D(i.TEXTURE_2D,Te,Pe,oe.width,oe.height)}for(let oe=0,Ee=be.length;oe<Ee;oe++)Ce=be[oe],ue?X&&t.texSubImage2D(i.TEXTURE_2D,oe,0,0,K,me,Ce):t.texImage2D(i.TEXTURE_2D,oe,Pe,K,me,Ce);b.generateMipmaps=!1}else if(ue){if(We){let oe=he(De);t.texStorage2D(i.TEXTURE_2D,Te,Pe,oe.width,oe.height)}X&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,K,me,De)}else t.texImage2D(i.TEXTURE_2D,0,Pe,K,me,De);m(b)&&u(pe),Oe.__version=ve.version,b.onUpdate&&b.onUpdate(b)}D.__version=b.version}function F(D,b,$){if(b.image.length!==6)return;let pe=ne(D,b),Me=b.source;t.bindTexture(i.TEXTURE_CUBE_MAP,D.__webglTexture,i.TEXTURE0+$);let ve=n.get(Me);if(Me.version!==ve.__version||pe===!0){t.activeTexture(i.TEXTURE0+$);let Oe=Yt.getPrimaries(Yt.workingColorSpace),He=b.colorSpace===Lr?null:Yt.getPrimaries(b.colorSpace),ke=b.colorSpace===Lr||Oe===He?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,b.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,b.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ke);let nt=b.isCompressedTexture||b.image[0].isCompressedTexture,De=b.image[0]&&b.image[0].isDataTexture,K=[];for(let Ee=0;Ee<6;Ee++)!nt&&!De?K[Ee]=x(b.image[Ee],!0,r.maxCubemapSize):K[Ee]=De?b.image[Ee].image:b.image[Ee],K[Ee]=Le(b,K[Ee]);let me=K[0],Pe=s.convert(b.format,b.colorSpace),Ce=s.convert(b.type),be=E(b.internalFormat,Pe,Ce,b.colorSpace),ue=b.isVideoTexture!==!0,We=ve.__version===void 0||pe===!0,X=Me.dataReady,Te=_(b,me);j(i.TEXTURE_CUBE_MAP,b);let oe;if(nt){ue&&We&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Te,be,me.width,me.height);for(let Ee=0;Ee<6;Ee++){oe=K[Ee].mipmaps;for(let Ue=0;Ue<oe.length;Ue++){let ze=oe[Ue];b.format!==xi?Pe!==null?ue?X&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,Ue,0,0,ze.width,ze.height,Pe,ze.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,Ue,be,ze.width,ze.height,0,ze.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ue?X&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,Ue,0,0,ze.width,ze.height,Pe,Ce,ze.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,Ue,be,ze.width,ze.height,0,Pe,Ce,ze.data)}}}else{if(oe=b.mipmaps,ue&&We){oe.length>0&&Te++;let Ee=he(K[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Te,be,Ee.width,Ee.height)}for(let Ee=0;Ee<6;Ee++)if(De){ue?X&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0,0,0,K[Ee].width,K[Ee].height,Pe,Ce,K[Ee].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0,be,K[Ee].width,K[Ee].height,0,Pe,Ce,K[Ee].data);for(let Ue=0;Ue<oe.length;Ue++){let ht=oe[Ue].image[Ee].image;ue?X&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,Ue+1,0,0,ht.width,ht.height,Pe,Ce,ht.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,Ue+1,be,ht.width,ht.height,0,Pe,Ce,ht.data)}}else{ue?X&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0,0,0,Pe,Ce,K[Ee]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0,be,Pe,Ce,K[Ee]);for(let Ue=0;Ue<oe.length;Ue++){let ze=oe[Ue];ue?X&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,Ue+1,0,0,Pe,Ce,ze.image[Ee]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,Ue+1,be,Pe,Ce,ze.image[Ee])}}}m(b)&&u(i.TEXTURE_CUBE_MAP),ve.__version=Me.version,b.onUpdate&&b.onUpdate(b)}D.__version=b.version}function se(D,b,$,pe,Me,ve){let Oe=s.convert($.format,$.colorSpace),He=s.convert($.type),ke=E($.internalFormat,Oe,He,$.colorSpace);if(!n.get(b).__hasExternalTextures){let De=Math.max(1,b.width>>ve),K=Math.max(1,b.height>>ve);Me===i.TEXTURE_3D||Me===i.TEXTURE_2D_ARRAY?t.texImage3D(Me,ve,ke,De,K,b.depth,0,Oe,He,null):t.texImage2D(Me,ve,ke,De,K,0,Oe,He,null)}t.bindFramebuffer(i.FRAMEBUFFER,D),_e(b)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,pe,Me,n.get($).__webglTexture,0,Ae(b)):(Me===i.TEXTURE_2D||Me>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Me<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,pe,Me,n.get($).__webglTexture,ve),t.bindFramebuffer(i.FRAMEBUFFER,null)}function q(D,b,$){if(i.bindRenderbuffer(i.RENDERBUFFER,D),b.depthBuffer){let pe=b.depthTexture,Me=pe&&pe.isDepthTexture?pe.type:null,ve=y(b.stencilBuffer,Me),Oe=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,He=Ae(b);_e(b)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,He,ve,b.width,b.height):$?i.renderbufferStorageMultisample(i.RENDERBUFFER,He,ve,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,ve,b.width,b.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Oe,i.RENDERBUFFER,D)}else{let pe=b.textures;for(let Me=0;Me<pe.length;Me++){let ve=pe[Me],Oe=s.convert(ve.format,ve.colorSpace),He=s.convert(ve.type),ke=E(ve.internalFormat,Oe,He,ve.colorSpace),nt=Ae(b);$&&_e(b)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,nt,ke,b.width,b.height):_e(b)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,nt,ke,b.width,b.height):i.renderbufferStorage(i.RENDERBUFFER,ke,b.width,b.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function k(D,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,D),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(b.depthTexture).__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),z(b.depthTexture,0);let pe=n.get(b.depthTexture).__webglTexture,Me=Ae(b);if(b.depthTexture.format===Zs)_e(b)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,pe,0,Me):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,pe,0);else if(b.depthTexture.format===to)_e(b)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,pe,0,Me):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,pe,0);else throw new Error("Unknown depthTexture format")}function Z(D){let b=n.get(D),$=D.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==D.depthTexture){let pe=D.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),pe){let Me=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,pe.removeEventListener("dispose",Me)};pe.addEventListener("dispose",Me),b.__depthDisposeCallback=Me}b.__boundDepthTexture=pe}if(D.depthTexture&&!b.__autoAllocateDepthBuffer){if($)throw new Error("target.depthTexture not supported in Cube render targets");k(b.__webglFramebuffer,D)}else if($){b.__webglDepthbuffer=[];for(let pe=0;pe<6;pe++)if(t.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer[pe]),b.__webglDepthbuffer[pe]===void 0)b.__webglDepthbuffer[pe]=i.createRenderbuffer(),q(b.__webglDepthbuffer[pe],D,!1);else{let Me=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ve=b.__webglDepthbuffer[pe];i.bindRenderbuffer(i.RENDERBUFFER,ve),i.framebufferRenderbuffer(i.FRAMEBUFFER,Me,i.RENDERBUFFER,ve)}}else if(t.bindFramebuffer(i.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=i.createRenderbuffer(),q(b.__webglDepthbuffer,D,!1);else{let pe=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Me=b.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,Me),i.framebufferRenderbuffer(i.FRAMEBUFFER,pe,i.RENDERBUFFER,Me)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function xe(D,b,$){let pe=n.get(D);b!==void 0&&se(pe.__webglFramebuffer,D,D.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),$!==void 0&&Z(D)}function Se(D){let b=D.texture,$=n.get(D),pe=n.get(b);D.addEventListener("dispose",T);let Me=D.textures,ve=D.isWebGLCubeRenderTarget===!0,Oe=Me.length>1;if(Oe||(pe.__webglTexture===void 0&&(pe.__webglTexture=i.createTexture()),pe.__version=b.version,o.memory.textures++),ve){$.__webglFramebuffer=[];for(let He=0;He<6;He++)if(b.mipmaps&&b.mipmaps.length>0){$.__webglFramebuffer[He]=[];for(let ke=0;ke<b.mipmaps.length;ke++)$.__webglFramebuffer[He][ke]=i.createFramebuffer()}else $.__webglFramebuffer[He]=i.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){$.__webglFramebuffer=[];for(let He=0;He<b.mipmaps.length;He++)$.__webglFramebuffer[He]=i.createFramebuffer()}else $.__webglFramebuffer=i.createFramebuffer();if(Oe)for(let He=0,ke=Me.length;He<ke;He++){let nt=n.get(Me[He]);nt.__webglTexture===void 0&&(nt.__webglTexture=i.createTexture(),o.memory.textures++)}if(D.samples>0&&_e(D)===!1){$.__webglMultisampledFramebuffer=i.createFramebuffer(),$.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,$.__webglMultisampledFramebuffer);for(let He=0;He<Me.length;He++){let ke=Me[He];$.__webglColorRenderbuffer[He]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,$.__webglColorRenderbuffer[He]);let nt=s.convert(ke.format,ke.colorSpace),De=s.convert(ke.type),K=E(ke.internalFormat,nt,De,ke.colorSpace,D.isXRRenderTarget===!0),me=Ae(D);i.renderbufferStorageMultisample(i.RENDERBUFFER,me,K,D.width,D.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+He,i.RENDERBUFFER,$.__webglColorRenderbuffer[He])}i.bindRenderbuffer(i.RENDERBUFFER,null),D.depthBuffer&&($.__webglDepthRenderbuffer=i.createRenderbuffer(),q($.__webglDepthRenderbuffer,D,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ve){t.bindTexture(i.TEXTURE_CUBE_MAP,pe.__webglTexture),j(i.TEXTURE_CUBE_MAP,b);for(let He=0;He<6;He++)if(b.mipmaps&&b.mipmaps.length>0)for(let ke=0;ke<b.mipmaps.length;ke++)se($.__webglFramebuffer[He][ke],D,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+He,ke);else se($.__webglFramebuffer[He],D,b,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+He,0);m(b)&&u(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Oe){for(let He=0,ke=Me.length;He<ke;He++){let nt=Me[He],De=n.get(nt);t.bindTexture(i.TEXTURE_2D,De.__webglTexture),j(i.TEXTURE_2D,nt),se($.__webglFramebuffer,D,nt,i.COLOR_ATTACHMENT0+He,i.TEXTURE_2D,0),m(nt)&&u(i.TEXTURE_2D)}t.unbindTexture()}else{let He=i.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(He=D.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(He,pe.__webglTexture),j(He,b),b.mipmaps&&b.mipmaps.length>0)for(let ke=0;ke<b.mipmaps.length;ke++)se($.__webglFramebuffer[ke],D,b,i.COLOR_ATTACHMENT0,He,ke);else se($.__webglFramebuffer,D,b,i.COLOR_ATTACHMENT0,He,0);m(b)&&u(He),t.unbindTexture()}D.depthBuffer&&Z(D)}function ge(D){let b=D.textures;for(let $=0,pe=b.length;$<pe;$++){let Me=b[$];if(m(Me)){let ve=D.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,Oe=n.get(Me).__webglTexture;t.bindTexture(ve,Oe),u(ve),t.unbindTexture()}}}let re=[],L=[];function ye(D){if(D.samples>0){if(_e(D)===!1){let b=D.textures,$=D.width,pe=D.height,Me=i.COLOR_BUFFER_BIT,ve=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Oe=n.get(D),He=b.length>1;if(He)for(let ke=0;ke<b.length;ke++)t.bindFramebuffer(i.FRAMEBUFFER,Oe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ke,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Oe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ke,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Oe.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Oe.__webglFramebuffer);for(let ke=0;ke<b.length;ke++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(Me|=i.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(Me|=i.STENCIL_BUFFER_BIT)),He){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Oe.__webglColorRenderbuffer[ke]);let nt=n.get(b[ke]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,nt,0)}i.blitFramebuffer(0,0,$,pe,0,0,$,pe,Me,i.NEAREST),c===!0&&(re.length=0,L.length=0,re.push(i.COLOR_ATTACHMENT0+ke),D.depthBuffer&&D.resolveDepthBuffer===!1&&(re.push(ve),L.push(ve),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,L)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,re))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),He)for(let ke=0;ke<b.length;ke++){t.bindFramebuffer(i.FRAMEBUFFER,Oe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ke,i.RENDERBUFFER,Oe.__webglColorRenderbuffer[ke]);let nt=n.get(b[ke]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Oe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ke,i.TEXTURE_2D,nt,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Oe.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.resolveDepthBuffer===!1&&c){let b=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[b])}}}function Ae(D){return Math.min(r.maxSamples,D.samples)}function _e(D){let b=n.get(D);return D.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function Re(D){let b=o.render.frame;h.get(D)!==b&&(h.set(D,b),D.update())}function Le(D,b){let $=D.colorSpace,pe=D.format,Me=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||$!==Vr&&$!==Lr&&(Yt.getTransfer($)===rn?(pe!==xi||Me!==xr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",$)),b}function he(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(l.width=D.naturalWidth||D.width,l.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(l.width=D.displayWidth,l.height=D.displayHeight):(l.width=D.width,l.height=D.height),l}this.allocateTextureUnit=V,this.resetTextureUnits=w,this.setTexture2D=z,this.setTexture2DArray=H,this.setTexture3D=Q,this.setTextureCube=le,this.rebindTextures=xe,this.setupRenderTarget=Se,this.updateRenderTargetMipmap=ge,this.updateMultisampleRenderTarget=ye,this.setupDepthRenderbuffer=Z,this.setupFrameBufferTexture=se,this.useMultisampledRTT=_e}function k2(i,e){function t(n,r=Lr){let s,o=Yt.getTransfer(r);if(n===xr)return i.UNSIGNED_BYTE;if(n===od)return i.UNSIGNED_SHORT_4_4_4_4;if(n===ad)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Jp)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===$p)return i.BYTE;if(n===Kp)return i.SHORT;if(n===na)return i.UNSIGNED_SHORT;if(n===sd)return i.INT;if(n===ls)return i.UNSIGNED_INT;if(n===tr)return i.FLOAT;if(n===ga)return i.HALF_FLOAT;if(n===Qp)return i.ALPHA;if(n===jp)return i.RGB;if(n===xi)return i.RGBA;if(n===e0)return i.LUMINANCE;if(n===t0)return i.LUMINANCE_ALPHA;if(n===Zs)return i.DEPTH_COMPONENT;if(n===to)return i.DEPTH_STENCIL;if(n===cd)return i.RED;if(n===ld)return i.RED_INTEGER;if(n===n0)return i.RG;if(n===hd)return i.RG_INTEGER;if(n===ud)return i.RGBA_INTEGER;if(n===_c||n===Mc||n===Ec||n===Sc)if(o===rn)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===_c)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Mc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ec)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Sc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===_c)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Mc)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ec)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Sc)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Zh||n===$h||n===Kh||n===Jh)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Zh)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===$h)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Kh)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Jh)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Qh||n===jh||n===eu)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Qh||n===jh)return o===rn?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===eu)return o===rn?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===tu||n===nu||n===iu||n===ru||n===su||n===ou||n===au||n===cu||n===lu||n===hu||n===uu||n===du||n===fu||n===pu)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===tu)return o===rn?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===nu)return o===rn?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===iu)return o===rn?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===ru)return o===rn?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===su)return o===rn?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===ou)return o===rn?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===au)return o===rn?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===cu)return o===rn?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===lu)return o===rn?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===hu)return o===rn?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===uu)return o===rn?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===du)return o===rn?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===fu)return o===rn?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===pu)return o===rn?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===wc||n===mu||n===gu)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===wc)return o===rn?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===mu)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===gu)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===i0||n===xu||n===yu||n===vu)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===wc)return s.COMPRESSED_RED_RGTC1_EXT;if(n===xu)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===yu)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===vu)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===eo?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var Du=class extends On{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},we=class extends Mt{constructor(){super(),this.isGroup=!0,this.type="Group"}},V2={type:"move"},Qo=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new we,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new we,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new S,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new S),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new we,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new S,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new S),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(let x of e.hand.values()){let m=t.getJointPose(x,n),u=this._getHandJoint(l,x);m!==null&&(u.matrix.fromArray(m.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=m.radius),u.visible=m!==null}let h=l.joints["index-finger-tip"],p=l.joints["thumb-tip"],f=h.position.distanceTo(p.position),d=.02,g=.005;l.inputState.pinching&&f>d+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&f<=d-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(V2)))}return a!==null&&(a.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new we;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},G2=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,W2=`
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

}`,Uu=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){let r=new jn,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new ir({vertexShader:G2,fragmentShader:W2,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new dt(new bt(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Hu=class extends Nr{constructor(e,t){super();let n=this,r=null,s=1,o=null,a="local-floor",c=1,l=null,h=null,p=null,f=null,d=null,g=null,x=new Uu,m=t.getContextAttributes(),u=null,E=null,y=[],_=[],P=new Fe,T=null,R=new On;R.layers.enable(1),R.viewport=new Jt;let A=new On;A.layers.enable(2),A.viewport=new Jt;let O=[R,A],v=new Du;v.layers.enable(1),v.layers.enable(2);let w=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(F){let se=y[F];return se===void 0&&(se=new Qo,y[F]=se),se.getTargetRaySpace()},this.getControllerGrip=function(F){let se=y[F];return se===void 0&&(se=new Qo,y[F]=se),se.getGripSpace()},this.getHand=function(F){let se=y[F];return se===void 0&&(se=new Qo,y[F]=se),se.getHandSpace()};function G(F){let se=_.indexOf(F.inputSource);if(se===-1)return;let q=y[se];q!==void 0&&(q.update(F.inputSource,F.frame,l||o),q.dispatchEvent({type:F.type,data:F.inputSource}))}function z(){r.removeEventListener("select",G),r.removeEventListener("selectstart",G),r.removeEventListener("selectend",G),r.removeEventListener("squeeze",G),r.removeEventListener("squeezestart",G),r.removeEventListener("squeezeend",G),r.removeEventListener("end",z),r.removeEventListener("inputsourceschange",H);for(let F=0;F<y.length;F++){let se=_[F];se!==null&&(_[F]=null,y[F].disconnect(se))}w=null,V=null,x.reset(),e.setRenderTarget(u),d=null,f=null,p=null,r=null,E=null,ee.stop(),n.isPresenting=!1,e.setPixelRatio(T),e.setSize(P.width,P.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(F){s=F,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(F){a=F,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(F){l=F},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return p},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(F){if(r=F,r!==null){if(u=e.getRenderTarget(),r.addEventListener("select",G),r.addEventListener("selectstart",G),r.addEventListener("selectend",G),r.addEventListener("squeeze",G),r.addEventListener("squeezestart",G),r.addEventListener("squeezeend",G),r.addEventListener("end",z),r.addEventListener("inputsourceschange",H),m.xrCompatible!==!0&&await t.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(P),r.renderState.layers===void 0){let se={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(r,t,se),r.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),E=new yr(d.framebufferWidth,d.framebufferHeight,{format:xi,type:xr,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let se=null,q=null,k=null;m.depth&&(k=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,se=m.stencil?to:Zs,q=m.stencil?eo:ls);let Z={colorFormat:t.RGBA8,depthFormat:k,scaleFactor:s};p=new XRWebGLBinding(r,t),f=p.createProjectionLayer(Z),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),E=new yr(f.textureWidth,f.textureHeight,{format:xi,type:xr,depthTexture:new zc(f.textureWidth,f.textureHeight,q,void 0,void 0,void 0,void 0,void 0,void 0,se),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await r.requestReferenceSpace(a),ee.setContext(r),ee.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function H(F){for(let se=0;se<F.removed.length;se++){let q=F.removed[se],k=_.indexOf(q);k>=0&&(_[k]=null,y[k].disconnect(q))}for(let se=0;se<F.added.length;se++){let q=F.added[se],k=_.indexOf(q);if(k===-1){for(let xe=0;xe<y.length;xe++)if(xe>=_.length){_.push(q),k=xe;break}else if(_[xe]===null){_[xe]=q,k=xe;break}if(k===-1)break}let Z=y[k];Z&&Z.connect(q)}}let Q=new S,le=new S;function ie(F,se,q){Q.setFromMatrixPosition(se.matrixWorld),le.setFromMatrixPosition(q.matrixWorld);let k=Q.distanceTo(le),Z=se.projectionMatrix.elements,xe=q.projectionMatrix.elements,Se=Z[14]/(Z[10]-1),ge=Z[14]/(Z[10]+1),re=(Z[9]+1)/Z[5],L=(Z[9]-1)/Z[5],ye=(Z[8]-1)/Z[0],Ae=(xe[8]+1)/xe[0],_e=Se*ye,Re=Se*Ae,Le=k/(-ye+Ae),he=Le*-ye;if(se.matrixWorld.decompose(F.position,F.quaternion,F.scale),F.translateX(he),F.translateZ(Le),F.matrixWorld.compose(F.position,F.quaternion,F.scale),F.matrixWorldInverse.copy(F.matrixWorld).invert(),Z[10]===-1)F.projectionMatrix.copy(se.projectionMatrix),F.projectionMatrixInverse.copy(se.projectionMatrixInverse);else{let D=Se+Le,b=ge+Le,$=_e-he,pe=Re+(k-he),Me=re*ge/b*D,ve=L*ge/b*D;F.projectionMatrix.makePerspective($,pe,Me,ve,D,b),F.projectionMatrixInverse.copy(F.projectionMatrix).invert()}}function fe(F,se){se===null?F.matrixWorld.copy(F.matrix):F.matrixWorld.multiplyMatrices(se.matrixWorld,F.matrix),F.matrixWorldInverse.copy(F.matrixWorld).invert()}this.updateCamera=function(F){if(r===null)return;let se=F.near,q=F.far;x.texture!==null&&(x.depthNear>0&&(se=x.depthNear),x.depthFar>0&&(q=x.depthFar)),v.near=A.near=R.near=se,v.far=A.far=R.far=q,(w!==v.near||V!==v.far)&&(r.updateRenderState({depthNear:v.near,depthFar:v.far}),w=v.near,V=v.far);let k=F.parent,Z=v.cameras;fe(v,k);for(let xe=0;xe<Z.length;xe++)fe(Z[xe],k);Z.length===2?ie(v,R,A):v.projectionMatrix.copy(R.projectionMatrix),N(F,v,k)};function N(F,se,q){q===null?F.matrix.copy(se.matrixWorld):(F.matrix.copy(q.matrixWorld),F.matrix.invert(),F.matrix.multiply(se.matrixWorld)),F.matrix.decompose(F.position,F.quaternion,F.scale),F.updateMatrixWorld(!0),F.projectionMatrix.copy(se.projectionMatrix),F.projectionMatrixInverse.copy(se.projectionMatrixInverse),F.isPerspectiveCamera&&(F.fov=no*2*Math.atan(1/F.projectionMatrix.elements[5]),F.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(f===null&&d===null))return c},this.setFoveation=function(F){c=F,f!==null&&(f.fixedFoveation=F),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=F)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(v)};let j=null;function ne(F,se){if(h=se.getViewerPose(l||o),g=se,h!==null){let q=h.views;d!==null&&(e.setRenderTargetFramebuffer(E,d.framebuffer),e.setRenderTarget(E));let k=!1;q.length!==v.cameras.length&&(v.cameras.length=0,k=!0);for(let xe=0;xe<q.length;xe++){let Se=q[xe],ge=null;if(d!==null)ge=d.getViewport(Se);else{let L=p.getViewSubImage(f,Se);ge=L.viewport,xe===0&&(e.setRenderTargetTextures(E,L.colorTexture,f.ignoreDepthValues?void 0:L.depthStencilTexture),e.setRenderTarget(E))}let re=O[xe];re===void 0&&(re=new On,re.layers.enable(xe),re.viewport=new Jt,O[xe]=re),re.matrix.fromArray(Se.transform.matrix),re.matrix.decompose(re.position,re.quaternion,re.scale),re.projectionMatrix.fromArray(Se.projectionMatrix),re.projectionMatrixInverse.copy(re.projectionMatrix).invert(),re.viewport.set(ge.x,ge.y,ge.width,ge.height),xe===0&&(v.matrix.copy(re.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),k===!0&&v.cameras.push(re)}let Z=r.enabledFeatures;if(Z&&Z.includes("depth-sensing")){let xe=p.getDepthInformation(q[0]);xe&&xe.isValid&&xe.texture&&x.init(e,xe,r.renderState)}}for(let q=0;q<y.length;q++){let k=_[q],Z=y[q];k!==null&&Z!==void 0&&Z.update(k,se,l||o)}j&&j(F,se),se.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:se}),g=null}let ee=new l0;ee.setAnimationLoop(ne),this.setAnimationLoop=function(F){j=F},this.dispose=function(){}}},ns=new oi,X2=new Rt;function q2(i,e){function t(m,u){m.matrixAutoUpdate===!0&&m.updateMatrix(),u.value.copy(m.matrix)}function n(m,u){u.color.getRGB(m.fogColor.value,c0(i)),u.isFog?(m.fogNear.value=u.near,m.fogFar.value=u.far):u.isFogExp2&&(m.fogDensity.value=u.density)}function r(m,u,E,y,_){u.isMeshBasicMaterial||u.isMeshLambertMaterial?s(m,u):u.isMeshToonMaterial?(s(m,u),p(m,u)):u.isMeshPhongMaterial?(s(m,u),h(m,u)):u.isMeshStandardMaterial?(s(m,u),f(m,u),u.isMeshPhysicalMaterial&&d(m,u,_)):u.isMeshMatcapMaterial?(s(m,u),g(m,u)):u.isMeshDepthMaterial?s(m,u):u.isMeshDistanceMaterial?(s(m,u),x(m,u)):u.isMeshNormalMaterial?s(m,u):u.isLineBasicMaterial?(o(m,u),u.isLineDashedMaterial&&a(m,u)):u.isPointsMaterial?c(m,u,E,y):u.isSpriteMaterial?l(m,u):u.isShadowMaterial?(m.color.value.copy(u.color),m.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function s(m,u){m.opacity.value=u.opacity,u.color&&m.diffuse.value.copy(u.color),u.emissive&&m.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(m.map.value=u.map,t(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,t(u.alphaMap,m.alphaMapTransform)),u.bumpMap&&(m.bumpMap.value=u.bumpMap,t(u.bumpMap,m.bumpMapTransform),m.bumpScale.value=u.bumpScale,u.side===yn&&(m.bumpScale.value*=-1)),u.normalMap&&(m.normalMap.value=u.normalMap,t(u.normalMap,m.normalMapTransform),m.normalScale.value.copy(u.normalScale),u.side===yn&&m.normalScale.value.negate()),u.displacementMap&&(m.displacementMap.value=u.displacementMap,t(u.displacementMap,m.displacementMapTransform),m.displacementScale.value=u.displacementScale,m.displacementBias.value=u.displacementBias),u.emissiveMap&&(m.emissiveMap.value=u.emissiveMap,t(u.emissiveMap,m.emissiveMapTransform)),u.specularMap&&(m.specularMap.value=u.specularMap,t(u.specularMap,m.specularMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest);let E=e.get(u),y=E.envMap,_=E.envMapRotation;y&&(m.envMap.value=y,ns.copy(_),ns.x*=-1,ns.y*=-1,ns.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(ns.y*=-1,ns.z*=-1),m.envMapRotation.value.setFromMatrix4(X2.makeRotationFromEuler(ns)),m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=u.reflectivity,m.ior.value=u.ior,m.refractionRatio.value=u.refractionRatio),u.lightMap&&(m.lightMap.value=u.lightMap,m.lightMapIntensity.value=u.lightMapIntensity,t(u.lightMap,m.lightMapTransform)),u.aoMap&&(m.aoMap.value=u.aoMap,m.aoMapIntensity.value=u.aoMapIntensity,t(u.aoMap,m.aoMapTransform))}function o(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,u.map&&(m.map.value=u.map,t(u.map,m.mapTransform))}function a(m,u){m.dashSize.value=u.dashSize,m.totalSize.value=u.dashSize+u.gapSize,m.scale.value=u.scale}function c(m,u,E,y){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.size.value=u.size*E,m.scale.value=y*.5,u.map&&(m.map.value=u.map,t(u.map,m.uvTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,t(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function l(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.rotation.value=u.rotation,u.map&&(m.map.value=u.map,t(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,t(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function h(m,u){m.specular.value.copy(u.specular),m.shininess.value=Math.max(u.shininess,1e-4)}function p(m,u){u.gradientMap&&(m.gradientMap.value=u.gradientMap)}function f(m,u){m.metalness.value=u.metalness,u.metalnessMap&&(m.metalnessMap.value=u.metalnessMap,t(u.metalnessMap,m.metalnessMapTransform)),m.roughness.value=u.roughness,u.roughnessMap&&(m.roughnessMap.value=u.roughnessMap,t(u.roughnessMap,m.roughnessMapTransform)),u.envMap&&(m.envMapIntensity.value=u.envMapIntensity)}function d(m,u,E){m.ior.value=u.ior,u.sheen>0&&(m.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),m.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(m.sheenColorMap.value=u.sheenColorMap,t(u.sheenColorMap,m.sheenColorMapTransform)),u.sheenRoughnessMap&&(m.sheenRoughnessMap.value=u.sheenRoughnessMap,t(u.sheenRoughnessMap,m.sheenRoughnessMapTransform))),u.clearcoat>0&&(m.clearcoat.value=u.clearcoat,m.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(m.clearcoatMap.value=u.clearcoatMap,t(u.clearcoatMap,m.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,t(u.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(m.clearcoatNormalMap.value=u.clearcoatNormalMap,t(u.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===yn&&m.clearcoatNormalScale.value.negate())),u.dispersion>0&&(m.dispersion.value=u.dispersion),u.iridescence>0&&(m.iridescence.value=u.iridescence,m.iridescenceIOR.value=u.iridescenceIOR,m.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(m.iridescenceMap.value=u.iridescenceMap,t(u.iridescenceMap,m.iridescenceMapTransform)),u.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=u.iridescenceThicknessMap,t(u.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),u.transmission>0&&(m.transmission.value=u.transmission,m.transmissionSamplerMap.value=E.texture,m.transmissionSamplerSize.value.set(E.width,E.height),u.transmissionMap&&(m.transmissionMap.value=u.transmissionMap,t(u.transmissionMap,m.transmissionMapTransform)),m.thickness.value=u.thickness,u.thicknessMap&&(m.thicknessMap.value=u.thicknessMap,t(u.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=u.attenuationDistance,m.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(m.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(m.anisotropyMap.value=u.anisotropyMap,t(u.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=u.specularIntensity,m.specularColor.value.copy(u.specularColor),u.specularColorMap&&(m.specularColorMap.value=u.specularColorMap,t(u.specularColorMap,m.specularColorMapTransform)),u.specularIntensityMap&&(m.specularIntensityMap.value=u.specularIntensityMap,t(u.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,u){u.matcap&&(m.matcap.value=u.matcap)}function x(m,u){let E=e.get(u).light;m.referencePosition.value.setFromMatrixPosition(E.matrixWorld),m.nearDistance.value=E.shadow.camera.near,m.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function Y2(i,e,t,n){let r={},s={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(E,y){let _=y.program;n.uniformBlockBinding(E,_)}function l(E,y){let _=r[E.id];_===void 0&&(g(E),_=h(E),r[E.id]=_,E.addEventListener("dispose",m));let P=y.program;n.updateUBOMapping(E,P);let T=e.render.frame;s[E.id]!==T&&(f(E),s[E.id]=T)}function h(E){let y=p();E.__bindingPointIndex=y;let _=i.createBuffer(),P=E.__size,T=E.usage;return i.bindBuffer(i.UNIFORM_BUFFER,_),i.bufferData(i.UNIFORM_BUFFER,P,T),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,y,_),_}function p(){for(let E=0;E<a;E++)if(o.indexOf(E)===-1)return o.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(E){let y=r[E.id],_=E.uniforms,P=E.__cache;i.bindBuffer(i.UNIFORM_BUFFER,y);for(let T=0,R=_.length;T<R;T++){let A=Array.isArray(_[T])?_[T]:[_[T]];for(let O=0,v=A.length;O<v;O++){let w=A[O];if(d(w,T,O,P)===!0){let V=w.__offset,G=Array.isArray(w.value)?w.value:[w.value],z=0;for(let H=0;H<G.length;H++){let Q=G[H],le=x(Q);typeof Q=="number"||typeof Q=="boolean"?(w.__data[0]=Q,i.bufferSubData(i.UNIFORM_BUFFER,V+z,w.__data)):Q.isMatrix3?(w.__data[0]=Q.elements[0],w.__data[1]=Q.elements[1],w.__data[2]=Q.elements[2],w.__data[3]=0,w.__data[4]=Q.elements[3],w.__data[5]=Q.elements[4],w.__data[6]=Q.elements[5],w.__data[7]=0,w.__data[8]=Q.elements[6],w.__data[9]=Q.elements[7],w.__data[10]=Q.elements[8],w.__data[11]=0):(Q.toArray(w.__data,z),z+=le.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,V,w.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(E,y,_,P){let T=E.value,R=y+"_"+_;if(P[R]===void 0)return typeof T=="number"||typeof T=="boolean"?P[R]=T:P[R]=T.clone(),!0;{let A=P[R];if(typeof T=="number"||typeof T=="boolean"){if(A!==T)return P[R]=T,!0}else if(A.equals(T)===!1)return A.copy(T),!0}return!1}function g(E){let y=E.uniforms,_=0,P=16;for(let R=0,A=y.length;R<A;R++){let O=Array.isArray(y[R])?y[R]:[y[R]];for(let v=0,w=O.length;v<w;v++){let V=O[v],G=Array.isArray(V.value)?V.value:[V.value];for(let z=0,H=G.length;z<H;z++){let Q=G[z],le=x(Q),ie=_%P,fe=ie%le.boundary,N=ie+fe;_+=fe,N!==0&&P-N<le.storage&&(_+=P-N),V.__data=new Float32Array(le.storage/Float32Array.BYTES_PER_ELEMENT),V.__offset=_,_+=le.storage}}}let T=_%P;return T>0&&(_+=P-T),E.__size=_,E.__cache={},this}function x(E){let y={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(y.boundary=4,y.storage=4):E.isVector2?(y.boundary=8,y.storage=8):E.isVector3||E.isColor?(y.boundary=16,y.storage=12):E.isVector4?(y.boundary=16,y.storage=16):E.isMatrix3?(y.boundary=48,y.storage=48):E.isMatrix4?(y.boundary=64,y.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),y}function m(E){let y=E.target;y.removeEventListener("dispose",m);let _=o.indexOf(y.__bindingPointIndex);o.splice(_,1),i.deleteBuffer(r[y.id]),delete r[y.id],delete s[y.id]}function u(){for(let E in r)i.deleteBuffer(r[E]);o=[],r={},s={}}return{bind:c,update:l,dispose:u}}var Bc=class{constructor(e={}){let{canvas:t=K1(),context:n=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:p=!1}=e;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;let d=new Uint32Array(4),g=new Int32Array(4),x=null,m=null,u=[],E=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=xt,this.toneMapping=Ur,this.toneMappingExposure=1;let y=this,_=!1,P=0,T=0,R=null,A=-1,O=null,v=new Jt,w=new Jt,V=null,G=new pt(0),z=0,H=t.width,Q=t.height,le=1,ie=null,fe=null,N=new Jt(0,0,H,Q),j=new Jt(0,0,H,Q),ne=!1,ee=new oa,F=!1,se=!1,q=new Rt,k=new Rt,Z=new S,xe=new Jt,Se={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},ge=!1;function re(){return R===null?le:1}let L=n;function ye(I,J){return t.getContext(I,J)}try{let I={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:p};if("setAttribute"in t&&t.setAttribute("data-engine","three.js r169"),t.addEventListener("webglcontextlost",Ee,!1),t.addEventListener("webglcontextrestored",Ue,!1),t.addEventListener("webglcontextcreationerror",ze,!1),L===null){let J="webgl2";if(L=ye(J,I),L===null)throw ye(J)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(I){throw console.error("THREE.WebGLRenderer: "+I.message),I}let Ae,_e,Re,Le,he,D,b,$,pe,Me,ve,Oe,He,ke,nt,De,K,me,Pe,Ce,be,ue,We,X;function Te(){Ae=new l_(L),Ae.init(),ue=new k2(L,Ae),_e=new i_(L,Ae,e,ue),Re=new O2(L),_e.reverseDepthBuffer&&Re.buffers.depth.setReversed(!0),Le=new d_(L),he=new b2,D=new B2(L,Ae,Re,he,_e,ue,Le),b=new s_(y),$=new c_(y),pe=new vx(L),We=new t_(L,pe),Me=new h_(L,pe,Le,We),ve=new p_(L,Me,pe,Le),Pe=new f_(L,_e,D),De=new r_(he),Oe=new w2(y,b,$,Ae,_e,We,De),He=new q2(y,he),ke=new R2,nt=new D2(Ae),me=new e_(y,b,$,Re,ve,f,c),K=new N2(y,ve,_e),X=new Y2(L,Le,_e,Re),Ce=new n_(L,Ae,Le),be=new u_(L,Ae,Le),Le.programs=Oe.programs,y.capabilities=_e,y.extensions=Ae,y.properties=he,y.renderLists=ke,y.shadowMap=K,y.state=Re,y.info=Le}Te();let oe=new Hu(y,L);this.xr=oe,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){let I=Ae.get("WEBGL_lose_context");I&&I.loseContext()},this.forceContextRestore=function(){let I=Ae.get("WEBGL_lose_context");I&&I.restoreContext()},this.getPixelRatio=function(){return le},this.setPixelRatio=function(I){I!==void 0&&(le=I,this.setSize(H,Q,!1))},this.getSize=function(I){return I.set(H,Q)},this.setSize=function(I,J,ae=!0){if(oe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}H=I,Q=J,t.width=Math.floor(I*le),t.height=Math.floor(J*le),ae===!0&&(t.style.width=I+"px",t.style.height=J+"px"),this.setViewport(0,0,I,J)},this.getDrawingBufferSize=function(I){return I.set(H*le,Q*le).floor()},this.setDrawingBufferSize=function(I,J,ae){H=I,Q=J,le=ae,t.width=Math.floor(I*ae),t.height=Math.floor(J*ae),this.setViewport(0,0,I,J)},this.getCurrentViewport=function(I){return I.copy(v)},this.getViewport=function(I){return I.copy(N)},this.setViewport=function(I,J,ae,ce){I.isVector4?N.set(I.x,I.y,I.z,I.w):N.set(I,J,ae,ce),Re.viewport(v.copy(N).multiplyScalar(le).round())},this.getScissor=function(I){return I.copy(j)},this.setScissor=function(I,J,ae,ce){I.isVector4?j.set(I.x,I.y,I.z,I.w):j.set(I,J,ae,ce),Re.scissor(w.copy(j).multiplyScalar(le).round())},this.getScissorTest=function(){return ne},this.setScissorTest=function(I){Re.setScissorTest(ne=I)},this.setOpaqueSort=function(I){ie=I},this.setTransparentSort=function(I){fe=I},this.getClearColor=function(I){return I.copy(me.getClearColor())},this.setClearColor=function(){me.setClearColor.apply(me,arguments)},this.getClearAlpha=function(){return me.getClearAlpha()},this.setClearAlpha=function(){me.setClearAlpha.apply(me,arguments)},this.clear=function(I=!0,J=!0,ae=!0){let ce=0;if(I){let te=!1;if(R!==null){let Ie=R.texture.format;te=Ie===ud||Ie===hd||Ie===ld}if(te){let Ie=R.texture.type,Be=Ie===xr||Ie===ls||Ie===na||Ie===eo||Ie===od||Ie===ad,Qe=me.getClearColor(),je=me.getClearAlpha(),ot=Qe.r,ct=Qe.g,Ke=Qe.b;Be?(d[0]=ot,d[1]=ct,d[2]=Ke,d[3]=je,L.clearBufferuiv(L.COLOR,0,d)):(g[0]=ot,g[1]=ct,g[2]=Ke,g[3]=je,L.clearBufferiv(L.COLOR,0,g))}else ce|=L.COLOR_BUFFER_BIT}J&&(ce|=L.DEPTH_BUFFER_BIT,L.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),ae&&(ce|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(ce)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Ee,!1),t.removeEventListener("webglcontextrestored",Ue,!1),t.removeEventListener("webglcontextcreationerror",ze,!1),ke.dispose(),nt.dispose(),he.dispose(),b.dispose(),$.dispose(),ve.dispose(),We.dispose(),X.dispose(),Oe.dispose(),oe.dispose(),oe.removeEventListener("sessionstart",Ji),oe.removeEventListener("sessionend",Hi),ti.stop()};function Ee(I){I.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),_=!0}function Ue(){console.log("THREE.WebGLRenderer: Context Restored."),_=!1;let I=Le.autoReset,J=K.enabled,ae=K.autoUpdate,ce=K.needsUpdate,te=K.type;Te(),Le.autoReset=I,K.enabled=J,K.autoUpdate=ae,K.needsUpdate=ce,K.type=te}function ze(I){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",I.statusMessage)}function ht(I){let J=I.target;J.removeEventListener("dispose",ht),It(J)}function It(I){Ft(I),he.remove(I)}function Ft(I){let J=he.get(I).programs;J!==void 0&&(J.forEach(function(ae){Oe.releaseProgram(ae)}),I.isShaderMaterial&&Oe.releaseShaderCache(I))}this.renderBufferDirect=function(I,J,ae,ce,te,Ie){J===null&&(J=Se);let Be=te.isMesh&&te.matrixWorld.determinant()<0,Qe=gn(I,J,ae,ce,te);Re.setMaterial(ce,Be);let je=ae.index,ot=1;if(ce.wireframe===!0){if(je=Me.getWireframeAttribute(ae),je===void 0)return;ot=2}let ct=ae.drawRange,Ke=ae.attributes.position,At=ct.start*ot,vt=(ct.start+ct.count)*ot;Ie!==null&&(At=Math.max(At,Ie.start*ot),vt=Math.min(vt,(Ie.start+Ie.count)*ot)),je!==null?(At=Math.max(At,0),vt=Math.min(vt,je.count)):Ke!=null&&(At=Math.max(At,0),vt=Math.min(vt,Ke.count));let Vt=vt-At;if(Vt<0||Vt===1/0)return;We.setup(te,ce,Qe,ae,je);let Pn,Ht=Ce;if(je!==null&&(Pn=pe.get(je),Ht=be,Ht.setIndex(Pn)),te.isMesh)ce.wireframe===!0?(Re.setLineWidth(ce.wireframeLinewidth*re()),Ht.setMode(L.LINES)):Ht.setMode(L.TRIANGLES);else if(te.isLine){let st=ce.linewidth;st===void 0&&(st=1),Re.setLineWidth(st*re()),te.isLineSegments?Ht.setMode(L.LINES):te.isLineLoop?Ht.setMode(L.LINE_LOOP):Ht.setMode(L.LINE_STRIP)}else te.isPoints?Ht.setMode(L.POINTS):te.isSprite&&Ht.setMode(L.TRIANGLES);if(te.isBatchedMesh)if(te._multiDrawInstances!==null)Ht.renderMultiDrawInstances(te._multiDrawStarts,te._multiDrawCounts,te._multiDrawCount,te._multiDrawInstances);else if(Ae.get("WEBGL_multi_draw"))Ht.renderMultiDraw(te._multiDrawStarts,te._multiDrawCounts,te._multiDrawCount);else{let st=te._multiDrawStarts,Gt=te._multiDrawCounts,Ne=te._multiDrawCount,Ze=je?pe.get(je).bytesPerElement:1,Sn=he.get(ce).currentProgram.getUniforms();for(let tn=0;tn<Ne;tn++)Sn.setValue(L,"_gl_DrawID",tn),Ht.render(st[tn]/Ze,Gt[tn])}else if(te.isInstancedMesh)Ht.renderInstances(At,Vt,te.count);else if(ae.isInstancedBufferGeometry){let st=ae._maxInstanceCount!==void 0?ae._maxInstanceCount:1/0,Gt=Math.min(ae.instanceCount,st);Ht.renderInstances(At,Vt,Gt)}else Ht.render(At,Vt)};function mt(I,J,ae){I.transparent===!0&&I.side===Dt&&I.forceSinglePass===!1?(I.side=yn,I.needsUpdate=!0,at(I,J,ae),I.side=nr,I.needsUpdate=!0,at(I,J,ae),I.side=Dt):at(I,J,ae)}this.compile=function(I,J,ae=null){ae===null&&(ae=I),m=nt.get(ae),m.init(J),E.push(m),ae.traverseVisible(function(te){te.isLight&&te.layers.test(J.layers)&&(m.pushLight(te),te.castShadow&&m.pushShadow(te))}),I!==ae&&I.traverseVisible(function(te){te.isLight&&te.layers.test(J.layers)&&(m.pushLight(te),te.castShadow&&m.pushShadow(te))}),m.setupLights();let ce=new Set;return I.traverse(function(te){if(!(te.isMesh||te.isPoints||te.isLine||te.isSprite))return;let Ie=te.material;if(Ie)if(Array.isArray(Ie))for(let Be=0;Be<Ie.length;Be++){let Qe=Ie[Be];mt(Qe,ae,te),ce.add(Qe)}else mt(Ie,ae,te),ce.add(Ie)}),E.pop(),m=null,ce},this.compileAsync=function(I,J,ae=null){let ce=this.compile(I,J,ae);return new Promise(te=>{function Ie(){if(ce.forEach(function(Be){he.get(Be).currentProgram.isReady()&&ce.delete(Be)}),ce.size===0){te(I);return}setTimeout(Ie,10)}Ae.get("KHR_parallel_shader_compile")!==null?Ie():setTimeout(Ie,10)})};let Et=null;function $n(I){Et&&Et(I)}function Ji(){ti.stop()}function Hi(){ti.start()}let ti=new l0;ti.setAnimationLoop($n),typeof self<"u"&&ti.setContext(self),this.setAnimationLoop=function(I){Et=I,oe.setAnimationLoop(I),I===null?ti.stop():ti.start()},oe.addEventListener("sessionstart",Ji),oe.addEventListener("sessionend",Hi),this.render=function(I,J){if(J!==void 0&&J.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(_===!0)return;if(I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),J.parent===null&&J.matrixWorldAutoUpdate===!0&&J.updateMatrixWorld(),oe.enabled===!0&&oe.isPresenting===!0&&(oe.cameraAutoUpdate===!0&&oe.updateCamera(J),J=oe.getCamera()),I.isScene===!0&&I.onBeforeRender(y,I,J,R),m=nt.get(I,E.length),m.init(J),E.push(m),k.multiplyMatrices(J.projectionMatrix,J.matrixWorldInverse),ee.setFromProjectionMatrix(k),se=this.localClippingEnabled,F=De.init(this.clippingPlanes,se),x=ke.get(I,u.length),x.init(),u.push(x),oe.enabled===!0&&oe.isPresenting===!0){let Ie=y.xr.getDepthSensingMesh();Ie!==null&&mn(Ie,J,-1/0,y.sortObjects)}mn(I,J,0,y.sortObjects),x.finish(),y.sortObjects===!0&&x.sort(ie,fe),ge=oe.enabled===!1||oe.isPresenting===!1||oe.hasDepthSensing()===!1,ge&&me.addToRenderList(x,I),this.info.render.frame++,F===!0&&De.beginShadows();let ae=m.state.shadowsArray;K.render(ae,I,J),F===!0&&De.endShadows(),this.info.autoReset===!0&&this.info.reset();let ce=x.opaque,te=x.transmissive;if(m.setupLights(),J.isArrayCamera){let Ie=J.cameras;if(te.length>0)for(let Be=0,Qe=Ie.length;Be<Qe;Be++){let je=Ie[Be];it(ce,te,I,je)}ge&&me.render(I);for(let Be=0,Qe=Ie.length;Be<Qe;Be++){let je=Ie[Be];tt(x,I,je,je.viewport)}}else te.length>0&&it(ce,te,I,J),ge&&me.render(I),tt(x,I,J);R!==null&&(D.updateMultisampleRenderTarget(R),D.updateRenderTargetMipmap(R)),I.isScene===!0&&I.onAfterRender(y,I,J),We.resetDefaultState(),A=-1,O=null,E.pop(),E.length>0?(m=E[E.length-1],F===!0&&De.setGlobalState(y.clippingPlanes,m.state.camera)):m=null,u.pop(),u.length>0?x=u[u.length-1]:x=null};function mn(I,J,ae,ce){if(I.visible===!1)return;if(I.layers.test(J.layers)){if(I.isGroup)ae=I.renderOrder;else if(I.isLOD)I.autoUpdate===!0&&I.update(J);else if(I.isLight)m.pushLight(I),I.castShadow&&m.pushShadow(I);else if(I.isSprite){if(!I.frustumCulled||ee.intersectsSprite(I)){ce&&xe.setFromMatrixPosition(I.matrixWorld).applyMatrix4(k);let Be=ve.update(I),Qe=I.material;Qe.visible&&x.push(I,Be,Qe,ae,xe.z,null)}}else if((I.isMesh||I.isLine||I.isPoints)&&(!I.frustumCulled||ee.intersectsObject(I))){let Be=ve.update(I),Qe=I.material;if(ce&&(I.boundingSphere!==void 0?(I.boundingSphere===null&&I.computeBoundingSphere(),xe.copy(I.boundingSphere.center)):(Be.boundingSphere===null&&Be.computeBoundingSphere(),xe.copy(Be.boundingSphere.center)),xe.applyMatrix4(I.matrixWorld).applyMatrix4(k)),Array.isArray(Qe)){let je=Be.groups;for(let ot=0,ct=je.length;ot<ct;ot++){let Ke=je[ot],At=Qe[Ke.materialIndex];At&&At.visible&&x.push(I,Be,At,ae,xe.z,Ke)}}else Qe.visible&&x.push(I,Be,Qe,ae,xe.z,null)}}let Ie=I.children;for(let Be=0,Qe=Ie.length;Be<Qe;Be++)mn(Ie[Be],J,ae,ce)}function tt(I,J,ae,ce){let te=I.opaque,Ie=I.transmissive,Be=I.transparent;m.setupLightsView(ae),F===!0&&De.setGlobalState(y.clippingPlanes,ae),ce&&Re.viewport(v.copy(ce)),te.length>0&&rt(te,J,ae),Ie.length>0&&rt(Ie,J,ae),Be.length>0&&rt(Be,J,ae),Re.buffers.depth.setTest(!0),Re.buffers.depth.setMask(!0),Re.buffers.color.setMask(!0),Re.setPolygonOffset(!1)}function it(I,J,ae,ce){if((ae.isScene===!0?ae.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[ce.id]===void 0&&(m.state.transmissionRenderTarget[ce.id]=new yr(1,1,{generateMipmaps:!0,type:Ae.has("EXT_color_buffer_half_float")||Ae.has("EXT_color_buffer_float")?ga:xr,minFilter:Wi,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Yt.workingColorSpace}));let Ie=m.state.transmissionRenderTarget[ce.id],Be=ce.viewport||v;Ie.setSize(Be.z,Be.w);let Qe=y.getRenderTarget();y.setRenderTarget(Ie),y.getClearColor(G),z=y.getClearAlpha(),z<1&&y.setClearColor(16777215,.5),y.clear(),ge&&me.render(ae);let je=y.toneMapping;y.toneMapping=Ur;let ot=ce.viewport;if(ce.viewport!==void 0&&(ce.viewport=void 0),m.setupLightsView(ce),F===!0&&De.setGlobalState(y.clippingPlanes,ce),rt(I,ae,ce),D.updateMultisampleRenderTarget(Ie),D.updateRenderTargetMipmap(Ie),Ae.has("WEBGL_multisampled_render_to_texture")===!1){let ct=!1;for(let Ke=0,At=J.length;Ke<At;Ke++){let vt=J[Ke],Vt=vt.object,Pn=vt.geometry,Ht=vt.material,st=vt.group;if(Ht.side===Dt&&Vt.layers.test(ce.layers)){let Gt=Ht.side;Ht.side=yn,Ht.needsUpdate=!0,Ye(Vt,ae,ce,Pn,Ht,st),Ht.side=Gt,Ht.needsUpdate=!0,ct=!0}}ct===!0&&(D.updateMultisampleRenderTarget(Ie),D.updateRenderTargetMipmap(Ie))}y.setRenderTarget(Qe),y.setClearColor(G,z),ot!==void 0&&(ce.viewport=ot),y.toneMapping=je}function rt(I,J,ae){let ce=J.isScene===!0?J.overrideMaterial:null;for(let te=0,Ie=I.length;te<Ie;te++){let Be=I[te],Qe=Be.object,je=Be.geometry,ot=ce===null?Be.material:ce,ct=Be.group;Qe.layers.test(ae.layers)&&Ye(Qe,J,ae,je,ot,ct)}}function Ye(I,J,ae,ce,te,Ie){I.onBeforeRender(y,J,ae,ce,te,Ie),I.modelViewMatrix.multiplyMatrices(ae.matrixWorldInverse,I.matrixWorld),I.normalMatrix.getNormalMatrix(I.modelViewMatrix),te.onBeforeRender(y,J,ae,ce,I,Ie),te.transparent===!0&&te.side===Dt&&te.forceSinglePass===!1?(te.side=yn,te.needsUpdate=!0,y.renderBufferDirect(ae,J,ce,te,I,Ie),te.side=nr,te.needsUpdate=!0,y.renderBufferDirect(ae,J,ce,te,I,Ie),te.side=Dt):y.renderBufferDirect(ae,J,ce,te,I,Ie),I.onAfterRender(y,J,ae,ce,te,Ie)}function at(I,J,ae){J.isScene!==!0&&(J=Se);let ce=he.get(I),te=m.state.lights,Ie=m.state.shadowsArray,Be=te.state.version,Qe=Oe.getParameters(I,te.state,Ie,J,ae),je=Oe.getProgramCacheKey(Qe),ot=ce.programs;ce.environment=I.isMeshStandardMaterial?J.environment:null,ce.fog=J.fog,ce.envMap=(I.isMeshStandardMaterial?$:b).get(I.envMap||ce.environment),ce.envMapRotation=ce.environment!==null&&I.envMap===null?J.environmentRotation:I.envMapRotation,ot===void 0&&(I.addEventListener("dispose",ht),ot=new Map,ce.programs=ot);let ct=ot.get(je);if(ct!==void 0){if(ce.currentProgram===ct&&ce.lightsStateVersion===Be)return ut(I,Qe),ct}else Qe.uniforms=Oe.getUniforms(I),I.onBeforeCompile(Qe,y),ct=Oe.acquireProgram(Qe,je),ot.set(je,ct),ce.uniforms=Qe.uniforms;let Ke=ce.uniforms;return(!I.isShaderMaterial&&!I.isRawShaderMaterial||I.clipping===!0)&&(Ke.clippingPlanes=De.uniform),ut(I,Qe),ce.needsLights=zt(I),ce.lightsStateVersion=Be,ce.needsLights&&(Ke.ambientLightColor.value=te.state.ambient,Ke.lightProbe.value=te.state.probe,Ke.directionalLights.value=te.state.directional,Ke.directionalLightShadows.value=te.state.directionalShadow,Ke.spotLights.value=te.state.spot,Ke.spotLightShadows.value=te.state.spotShadow,Ke.rectAreaLights.value=te.state.rectArea,Ke.ltc_1.value=te.state.rectAreaLTC1,Ke.ltc_2.value=te.state.rectAreaLTC2,Ke.pointLights.value=te.state.point,Ke.pointLightShadows.value=te.state.pointShadow,Ke.hemisphereLights.value=te.state.hemi,Ke.directionalShadowMap.value=te.state.directionalShadowMap,Ke.directionalShadowMatrix.value=te.state.directionalShadowMatrix,Ke.spotShadowMap.value=te.state.spotShadowMap,Ke.spotLightMatrix.value=te.state.spotLightMatrix,Ke.spotLightMap.value=te.state.spotLightMap,Ke.pointShadowMap.value=te.state.pointShadowMap,Ke.pointShadowMatrix.value=te.state.pointShadowMatrix),ce.currentProgram=ct,ce.uniformsList=null,ct}function Je(I){if(I.uniformsList===null){let J=I.currentProgram.getUniforms();I.uniformsList=Ks.seqWithValue(J.seq,I.uniforms)}return I.uniformsList}function ut(I,J){let ae=he.get(I);ae.outputColorSpace=J.outputColorSpace,ae.batching=J.batching,ae.batchingColor=J.batchingColor,ae.instancing=J.instancing,ae.instancingColor=J.instancingColor,ae.instancingMorph=J.instancingMorph,ae.skinning=J.skinning,ae.morphTargets=J.morphTargets,ae.morphNormals=J.morphNormals,ae.morphColors=J.morphColors,ae.morphTargetsCount=J.morphTargetsCount,ae.numClippingPlanes=J.numClippingPlanes,ae.numIntersection=J.numClipIntersection,ae.vertexAlphas=J.vertexAlphas,ae.vertexTangents=J.vertexTangents,ae.toneMapping=J.toneMapping}function gn(I,J,ae,ce,te){J.isScene!==!0&&(J=Se),D.resetTextureUnits();let Ie=J.fog,Be=ce.isMeshStandardMaterial?J.environment:null,Qe=R===null?y.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:Vr,je=(ce.isMeshStandardMaterial?$:b).get(ce.envMap||Be),ot=ce.vertexColors===!0&&!!ae.attributes.color&&ae.attributes.color.itemSize===4,ct=!!ae.attributes.tangent&&(!!ce.normalMap||ce.anisotropy>0),Ke=!!ae.morphAttributes.position,At=!!ae.morphAttributes.normal,vt=!!ae.morphAttributes.color,Vt=Ur;ce.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(Vt=y.toneMapping);let Pn=ae.morphAttributes.position||ae.morphAttributes.normal||ae.morphAttributes.color,Ht=Pn!==void 0?Pn.length:0,st=he.get(ce),Gt=m.state.lights;if(F===!0&&(se===!0||I!==O)){let ii=I===O&&ce.id===A;De.setState(ce,I,ii)}let Ne=!1;ce.version===st.__version?(st.needsLights&&st.lightsStateVersion!==Gt.state.version||st.outputColorSpace!==Qe||te.isBatchedMesh&&st.batching===!1||!te.isBatchedMesh&&st.batching===!0||te.isBatchedMesh&&st.batchingColor===!0&&te.colorTexture===null||te.isBatchedMesh&&st.batchingColor===!1&&te.colorTexture!==null||te.isInstancedMesh&&st.instancing===!1||!te.isInstancedMesh&&st.instancing===!0||te.isSkinnedMesh&&st.skinning===!1||!te.isSkinnedMesh&&st.skinning===!0||te.isInstancedMesh&&st.instancingColor===!0&&te.instanceColor===null||te.isInstancedMesh&&st.instancingColor===!1&&te.instanceColor!==null||te.isInstancedMesh&&st.instancingMorph===!0&&te.morphTexture===null||te.isInstancedMesh&&st.instancingMorph===!1&&te.morphTexture!==null||st.envMap!==je||ce.fog===!0&&st.fog!==Ie||st.numClippingPlanes!==void 0&&(st.numClippingPlanes!==De.numPlanes||st.numIntersection!==De.numIntersection)||st.vertexAlphas!==ot||st.vertexTangents!==ct||st.morphTargets!==Ke||st.morphNormals!==At||st.morphColors!==vt||st.toneMapping!==Vt||st.morphTargetsCount!==Ht)&&(Ne=!0):(Ne=!0,st.__version=ce.version);let Ze=st.currentProgram;Ne===!0&&(Ze=at(ce,J,te));let Sn=!1,tn=!1,ni=!1,on=Ze.getUniforms(),ui=st.uniforms;if(Re.useProgram(Ze.program)&&(Sn=!0,tn=!0,ni=!0),ce.id!==A&&(A=ce.id,tn=!0),Sn||O!==I){_e.reverseDepthBuffer?(q.copy(I.projectionMatrix),Q1(q),j1(q),on.setValue(L,"projectionMatrix",q)):on.setValue(L,"projectionMatrix",I.projectionMatrix),on.setValue(L,"viewMatrix",I.matrixWorldInverse);let ii=on.map.cameraPosition;ii!==void 0&&ii.setValue(L,Z.setFromMatrixPosition(I.matrixWorld)),_e.logarithmicDepthBuffer&&on.setValue(L,"logDepthBufFC",2/(Math.log(I.far+1)/Math.LN2)),(ce.isMeshPhongMaterial||ce.isMeshToonMaterial||ce.isMeshLambertMaterial||ce.isMeshBasicMaterial||ce.isMeshStandardMaterial||ce.isShaderMaterial)&&on.setValue(L,"isOrthographic",I.isOrthographicCamera===!0),O!==I&&(O=I,tn=!0,ni=!0)}if(te.isSkinnedMesh){on.setOptional(L,te,"bindMatrix"),on.setOptional(L,te,"bindMatrixInverse");let ii=te.skeleton;ii&&(ii.boneTexture===null&&ii.computeBoneTexture(),on.setValue(L,"boneTexture",ii.boneTexture,D))}te.isBatchedMesh&&(on.setOptional(L,te,"batchingTexture"),on.setValue(L,"batchingTexture",te._matricesTexture,D),on.setOptional(L,te,"batchingIdTexture"),on.setValue(L,"batchingIdTexture",te._indirectTexture,D),on.setOptional(L,te,"batchingColorTexture"),te._colorsTexture!==null&&on.setValue(L,"batchingColorTexture",te._colorsTexture,D));let Ss=ae.morphAttributes;if((Ss.position!==void 0||Ss.normal!==void 0||Ss.color!==void 0)&&Pe.update(te,ae,Ze),(tn||st.receiveShadow!==te.receiveShadow)&&(st.receiveShadow=te.receiveShadow,on.setValue(L,"receiveShadow",te.receiveShadow)),ce.isMeshGouraudMaterial&&ce.envMap!==null&&(ui.envMap.value=je,ui.flipEnvMap.value=je.isCubeTexture&&je.isRenderTargetTexture===!1?-1:1),ce.isMeshStandardMaterial&&ce.envMap===null&&J.environment!==null&&(ui.envMapIntensity.value=J.environmentIntensity),tn&&(on.setValue(L,"toneMappingExposure",y.toneMappingExposure),st.needsLights&&dn(ui,ni),Ie&&ce.fog===!0&&He.refreshFogUniforms(ui,Ie),He.refreshMaterialUniforms(ui,ce,le,Q,m.state.transmissionRenderTarget[I.id]),Ks.upload(L,Je(st),ui,D)),ce.isShaderMaterial&&ce.uniformsNeedUpdate===!0&&(Ks.upload(L,Je(st),ui,D),ce.uniformsNeedUpdate=!1),ce.isSpriteMaterial&&on.setValue(L,"center",te.center),on.setValue(L,"modelViewMatrix",te.modelViewMatrix),on.setValue(L,"normalMatrix",te.normalMatrix),on.setValue(L,"modelMatrix",te.matrixWorld),ce.isShaderMaterial||ce.isRawShaderMaterial){let ii=ce.uniformsGroups;for(let di=0,Nl=ii.length;di<Nl;di++){let Po=ii[di];X.update(Po,Ze),X.bind(Po,Ze)}}return Ze}function dn(I,J){I.ambientLightColor.needsUpdate=J,I.lightProbe.needsUpdate=J,I.directionalLights.needsUpdate=J,I.directionalLightShadows.needsUpdate=J,I.pointLights.needsUpdate=J,I.pointLightShadows.needsUpdate=J,I.spotLights.needsUpdate=J,I.spotLightShadows.needsUpdate=J,I.rectAreaLights.needsUpdate=J,I.hemisphereLights.needsUpdate=J}function zt(I){return I.isMeshLambertMaterial||I.isMeshToonMaterial||I.isMeshPhongMaterial||I.isMeshStandardMaterial||I.isShadowMaterial||I.isShaderMaterial&&I.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(I,J,ae){he.get(I.texture).__webglTexture=J,he.get(I.depthTexture).__webglTexture=ae;let ce=he.get(I);ce.__hasExternalTextures=!0,ce.__autoAllocateDepthBuffer=ae===void 0,ce.__autoAllocateDepthBuffer||Ae.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),ce.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(I,J){let ae=he.get(I);ae.__webglFramebuffer=J,ae.__useDefaultFramebuffer=J===void 0},this.setRenderTarget=function(I,J=0,ae=0){R=I,P=J,T=ae;let ce=!0,te=null,Ie=!1,Be=!1;if(I){let je=he.get(I);if(je.__useDefaultFramebuffer!==void 0)Re.bindFramebuffer(L.FRAMEBUFFER,null),ce=!1;else if(je.__webglFramebuffer===void 0)D.setupRenderTarget(I);else if(je.__hasExternalTextures)D.rebindTextures(I,he.get(I.texture).__webglTexture,he.get(I.depthTexture).__webglTexture);else if(I.depthBuffer){let Ke=I.depthTexture;if(je.__boundDepthTexture!==Ke){if(Ke!==null&&he.has(Ke)&&(I.width!==Ke.image.width||I.height!==Ke.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");D.setupDepthRenderbuffer(I)}}let ot=I.texture;(ot.isData3DTexture||ot.isDataArrayTexture||ot.isCompressedArrayTexture)&&(Be=!0);let ct=he.get(I).__webglFramebuffer;I.isWebGLCubeRenderTarget?(Array.isArray(ct[J])?te=ct[J][ae]:te=ct[J],Ie=!0):I.samples>0&&D.useMultisampledRTT(I)===!1?te=he.get(I).__webglMultisampledFramebuffer:Array.isArray(ct)?te=ct[ae]:te=ct,v.copy(I.viewport),w.copy(I.scissor),V=I.scissorTest}else v.copy(N).multiplyScalar(le).floor(),w.copy(j).multiplyScalar(le).floor(),V=ne;if(Re.bindFramebuffer(L.FRAMEBUFFER,te)&&ce&&Re.drawBuffers(I,te),Re.viewport(v),Re.scissor(w),Re.setScissorTest(V),Ie){let je=he.get(I.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+J,je.__webglTexture,ae)}else if(Be){let je=he.get(I.texture),ot=J||0;L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,je.__webglTexture,ae||0,ot)}A=-1},this.readRenderTargetPixels=function(I,J,ae,ce,te,Ie,Be){if(!(I&&I.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Qe=he.get(I).__webglFramebuffer;if(I.isWebGLCubeRenderTarget&&Be!==void 0&&(Qe=Qe[Be]),Qe){Re.bindFramebuffer(L.FRAMEBUFFER,Qe);try{let je=I.texture,ot=je.format,ct=je.type;if(!_e.textureFormatReadable(ot)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!_e.textureTypeReadable(ct)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}J>=0&&J<=I.width-ce&&ae>=0&&ae<=I.height-te&&L.readPixels(J,ae,ce,te,ue.convert(ot),ue.convert(ct),Ie)}finally{let je=R!==null?he.get(R).__webglFramebuffer:null;Re.bindFramebuffer(L.FRAMEBUFFER,je)}}},this.readRenderTargetPixelsAsync=async function(I,J,ae,ce,te,Ie,Be){if(!(I&&I.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Qe=he.get(I).__webglFramebuffer;if(I.isWebGLCubeRenderTarget&&Be!==void 0&&(Qe=Qe[Be]),Qe){let je=I.texture,ot=je.format,ct=je.type;if(!_e.textureFormatReadable(ot))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!_e.textureTypeReadable(ct))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(J>=0&&J<=I.width-ce&&ae>=0&&ae<=I.height-te){Re.bindFramebuffer(L.FRAMEBUFFER,Qe);let Ke=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,Ke),L.bufferData(L.PIXEL_PACK_BUFFER,Ie.byteLength,L.STREAM_READ),L.readPixels(J,ae,ce,te,ue.convert(ot),ue.convert(ct),0);let At=R!==null?he.get(R).__webglFramebuffer:null;Re.bindFramebuffer(L.FRAMEBUFFER,At);let vt=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await J1(L,vt,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,Ke),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,Ie),L.deleteBuffer(Ke),L.deleteSync(vt),Ie}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(I,J=null,ae=0){I.isTexture!==!0&&(bc("WebGLRenderer: copyFramebufferToTexture function signature has changed."),J=arguments[0]||null,I=arguments[1]);let ce=Math.pow(2,-ae),te=Math.floor(I.image.width*ce),Ie=Math.floor(I.image.height*ce),Be=J!==null?J.x:0,Qe=J!==null?J.y:0;D.setTexture2D(I,0),L.copyTexSubImage2D(L.TEXTURE_2D,ae,0,0,Be,Qe,te,Ie),Re.unbindTexture()},this.copyTextureToTexture=function(I,J,ae=null,ce=null,te=0){I.isTexture!==!0&&(bc("WebGLRenderer: copyTextureToTexture function signature has changed."),ce=arguments[0]||null,I=arguments[1],J=arguments[2],te=arguments[3]||0,ae=null);let Ie,Be,Qe,je,ot,ct;ae!==null?(Ie=ae.max.x-ae.min.x,Be=ae.max.y-ae.min.y,Qe=ae.min.x,je=ae.min.y):(Ie=I.image.width,Be=I.image.height,Qe=0,je=0),ce!==null?(ot=ce.x,ct=ce.y):(ot=0,ct=0);let Ke=ue.convert(J.format),At=ue.convert(J.type);D.setTexture2D(J,0),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,J.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,J.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,J.unpackAlignment);let vt=L.getParameter(L.UNPACK_ROW_LENGTH),Vt=L.getParameter(L.UNPACK_IMAGE_HEIGHT),Pn=L.getParameter(L.UNPACK_SKIP_PIXELS),Ht=L.getParameter(L.UNPACK_SKIP_ROWS),st=L.getParameter(L.UNPACK_SKIP_IMAGES),Gt=I.isCompressedTexture?I.mipmaps[te]:I.image;L.pixelStorei(L.UNPACK_ROW_LENGTH,Gt.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Gt.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Qe),L.pixelStorei(L.UNPACK_SKIP_ROWS,je),I.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,te,ot,ct,Ie,Be,Ke,At,Gt.data):I.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,te,ot,ct,Gt.width,Gt.height,Ke,Gt.data):L.texSubImage2D(L.TEXTURE_2D,te,ot,ct,Ie,Be,Ke,At,Gt),L.pixelStorei(L.UNPACK_ROW_LENGTH,vt),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Vt),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Pn),L.pixelStorei(L.UNPACK_SKIP_ROWS,Ht),L.pixelStorei(L.UNPACK_SKIP_IMAGES,st),te===0&&J.generateMipmaps&&L.generateMipmap(L.TEXTURE_2D),Re.unbindTexture()},this.copyTextureToTexture3D=function(I,J,ae=null,ce=null,te=0){I.isTexture!==!0&&(bc("WebGLRenderer: copyTextureToTexture3D function signature has changed."),ae=arguments[0]||null,ce=arguments[1]||null,I=arguments[2],J=arguments[3],te=arguments[4]||0);let Ie,Be,Qe,je,ot,ct,Ke,At,vt,Vt=I.isCompressedTexture?I.mipmaps[te]:I.image;ae!==null?(Ie=ae.max.x-ae.min.x,Be=ae.max.y-ae.min.y,Qe=ae.max.z-ae.min.z,je=ae.min.x,ot=ae.min.y,ct=ae.min.z):(Ie=Vt.width,Be=Vt.height,Qe=Vt.depth,je=0,ot=0,ct=0),ce!==null?(Ke=ce.x,At=ce.y,vt=ce.z):(Ke=0,At=0,vt=0);let Pn=ue.convert(J.format),Ht=ue.convert(J.type),st;if(J.isData3DTexture)D.setTexture3D(J,0),st=L.TEXTURE_3D;else if(J.isDataArrayTexture||J.isCompressedArrayTexture)D.setTexture2DArray(J,0),st=L.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,J.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,J.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,J.unpackAlignment);let Gt=L.getParameter(L.UNPACK_ROW_LENGTH),Ne=L.getParameter(L.UNPACK_IMAGE_HEIGHT),Ze=L.getParameter(L.UNPACK_SKIP_PIXELS),Sn=L.getParameter(L.UNPACK_SKIP_ROWS),tn=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,Vt.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Vt.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,je),L.pixelStorei(L.UNPACK_SKIP_ROWS,ot),L.pixelStorei(L.UNPACK_SKIP_IMAGES,ct),I.isDataTexture||I.isData3DTexture?L.texSubImage3D(st,te,Ke,At,vt,Ie,Be,Qe,Pn,Ht,Vt.data):J.isCompressedArrayTexture?L.compressedTexSubImage3D(st,te,Ke,At,vt,Ie,Be,Qe,Pn,Vt.data):L.texSubImage3D(st,te,Ke,At,vt,Ie,Be,Qe,Pn,Ht,Vt),L.pixelStorei(L.UNPACK_ROW_LENGTH,Gt),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Ne),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Ze),L.pixelStorei(L.UNPACK_SKIP_ROWS,Sn),L.pixelStorei(L.UNPACK_SKIP_IMAGES,tn),te===0&&J.generateMipmaps&&L.generateMipmap(st),Re.unbindTexture()},this.initRenderTarget=function(I){he.get(I).__webglFramebuffer===void 0&&D.setupRenderTarget(I)},this.initTexture=function(I){I.isCubeTexture?D.setTextureCube(I,0):I.isData3DTexture?D.setTexture3D(I,0):I.isDataArrayTexture||I.isCompressedArrayTexture?D.setTexture2DArray(I,0):D.setTexture2D(I,0),Re.unbindTexture()},this.resetState=function(){P=0,T=0,R=null,Re.reset(),We.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return gr}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=e===fd?"display-p3":"srgb",t.unpackColorSpace=Yt.workingColorSpace===il?"display-p3":"srgb"}};var kc=class i{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new pt(e),this.near=t,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Vc=class extends Mt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new oi,this.environmentIntensity=1,this.environmentRotation=new oi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}};var rr=class extends jn{constructor(e=null,t=1,n=1,r,s,o,a,c,l=si,h=si,p,f){super(null,o,a,c,l,h,r,s,p,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var hs=class extends hn{constructor(e,t,n,r=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Gs=new Rt,Cp=new Rt,fc=[],Pp=new Dn,Z2=new Rt,Xo=new dt,qo=new Fr,vn=class extends dt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new hs(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<n;r++)this.setMatrixAt(r,Z2)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Dn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Gs),Pp.copy(e.boundingBox).applyMatrix4(Gs),this.boundingBox.union(Pp)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Fr),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Gs),qo.copy(e.boundingSphere).applyMatrix4(Gs),this.boundingSphere.union(qo)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,r=this.morphTexture.source.data.data,s=n.length+1,o=e*s+1;for(let a=0;a<n.length;a++)n[a]=r[o+a]}raycast(e,t){let n=this.matrixWorld,r=this.count;if(Xo.geometry=this.geometry,Xo.material=this.material,Xo.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),qo.copy(this.boundingSphere),qo.applyMatrix4(n),e.ray.intersectsSphere(qo)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,Gs),Cp.multiplyMatrices(n,Gs),Xo.matrixWorld=Cp,Xo.raycast(e,fc);for(let o=0,a=fc.length;o<a;o++){let c=fc[o];c.instanceId=s,c.object=this,t.push(c)}fc.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new hs(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){let n=t.morphTargetInfluences,r=n.length+1;this.morphTexture===null&&(this.morphTexture=new rr(new Float32Array(r*this.count),r,this.count,cd,tr));let s=this.morphTexture.source.data.data,o=0;for(let l=0;l<n.length;l++)o+=n[l];let a=this.geometry.morphTargetsRelative?1:1-o,c=r*e;s[c]=a,s.set(n,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}};var us=class extends Or{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new pt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Gc=new S,Wc=new S,Ip=new Rt,Yo=new ra,pc=new Fr,Ih=new S,Lp=new S,Nu=class extends Mt{constructor(e=new Pt,t=new us){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let r=1,s=t.count;r<s;r++)Gc.fromBufferAttribute(t,r-1),Wc.fromBufferAttribute(t,r),n[r]=n[r-1],n[r]+=Gc.distanceTo(Wc);e.setAttribute("lineDistance",new lt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),pc.copy(n.boundingSphere),pc.applyMatrix4(r),pc.radius+=s,e.ray.intersectsSphere(pc)===!1)return;Ip.copy(r).invert(),Yo.copy(e.ray).applyMatrix4(Ip);let a=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,h=n.index,f=n.attributes.position;if(h!==null){let d=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let x=d,m=g-1;x<m;x+=l){let u=h.getX(x),E=h.getX(x+1),y=mc(this,e,Yo,c,u,E);y&&t.push(y)}if(this.isLineLoop){let x=h.getX(g-1),m=h.getX(d),u=mc(this,e,Yo,c,x,m);u&&t.push(u)}}else{let d=Math.max(0,o.start),g=Math.min(f.count,o.start+o.count);for(let x=d,m=g-1;x<m;x+=l){let u=mc(this,e,Yo,c,x,x+1);u&&t.push(u)}if(this.isLineLoop){let x=mc(this,e,Yo,c,g-1,d);x&&t.push(x)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){let a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}};function mc(i,e,t,n,r,s){let o=i.geometry.attributes.position;if(Gc.fromBufferAttribute(o,r),Wc.fromBufferAttribute(o,s),t.distanceSqToSegment(Gc,Wc,Ih,Lp)>n)return;Ih.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(Ih);if(!(c<e.near||c>e.far))return{distance:c,point:Lp.clone().applyMatrix4(i.matrixWorld),index:r,face:null,faceIndex:null,barycoord:null,object:i}}var Dp=new S,Up=new S,so=class extends Nu{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let r=0,s=t.count;r<s;r+=2)Dp.fromBufferAttribute(t,r),Up.fromBufferAttribute(t,r+1),n[r]=r===0?0:n[r-1],n[r+1]=n[r]+Dp.distanceTo(Up);e.setAttribute("lineDistance",new lt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var Ot=class extends jn{constructor(e,t,n,r,s,o,a,c,l){super(e,t,n,r,s,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}},ai=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,r=this.getPoint(0),s=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),s+=n.distanceTo(r),t.push(s),r=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let n=this.getLengths(),r=0,s=n.length,o;t?o=t:o=e*n[s-1];let a=0,c=s-1,l;for(;a<=c;)if(r=Math.floor(a+(c-a)/2),l=n[r]-o,l<0)a=r+1;else if(l>0)c=r-1;else{c=r;break}if(r=c,n[r]===o)return r/(s-1);let h=n[r],f=n[r+1]-h,d=(o-h)/f;return(r+d)/(s-1)}getTangent(e,t){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);let o=this.getPoint(r),a=this.getPoint(s),c=t||(o.isVector2?new Fe:new S);return c.copy(a).sub(o).normalize(),c}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){let n=new S,r=[],s=[],o=[],a=new S,c=new Rt;for(let d=0;d<=e;d++){let g=d/e;r[d]=this.getTangentAt(g,new S)}s[0]=new S,o[0]=new S;let l=Number.MAX_VALUE,h=Math.abs(r[0].x),p=Math.abs(r[0].y),f=Math.abs(r[0].z);h<=l&&(l=h,n.set(1,0,0)),p<=l&&(l=p,n.set(0,1,0)),f<=l&&n.set(0,0,1),a.crossVectors(r[0],n).normalize(),s[0].crossVectors(r[0],a),o[0].crossVectors(r[0],s[0]);for(let d=1;d<=e;d++){if(s[d]=s[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(r[d-1],r[d]),a.length()>Number.EPSILON){a.normalize();let g=Math.acos(bn(r[d-1].dot(r[d]),-1,1));s[d].applyMatrix4(c.makeRotationAxis(a,g))}o[d].crossVectors(r[d],s[d])}if(t===!0){let d=Math.acos(bn(s[0].dot(s[e]),-1,1));d/=e,r[0].dot(a.crossVectors(s[0],s[e]))>0&&(d=-d);for(let g=1;g<=e;g++)s[g].applyMatrix4(c.makeRotationAxis(r[g],d*g)),o[g].crossVectors(r[g],s[g])}return{tangents:r,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},ca=class extends ai{constructor(e=0,t=0,n=1,r=1,s=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(e,t=new Fe){let n=t,r=Math.PI*2,s=this.aEndAngle-this.aStartAngle,o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(o?s=0:s=r),this.aClockwise===!0&&!o&&(s===r?s=-r:s=s-r);let a=this.aStartAngle+e*s,c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),p=Math.sin(this.aRotation),f=c-this.aX,d=l-this.aY;c=f*h-d*p+this.aX,l=f*p+d*h+this.aY}return n.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Fu=class extends ca{constructor(e,t,n,r,s,o){super(e,t,n,n,r,s,o),this.isArcCurve=!0,this.type="ArcCurve"}};function gd(){let i=0,e=0,t=0,n=0;function r(s,o,a,c){i=s,e=a,t=-3*s+3*o-2*a-c,n=2*s-2*o+a+c}return{initCatmullRom:function(s,o,a,c,l){r(o,a,l*(a-s),l*(c-o))},initNonuniformCatmullRom:function(s,o,a,c,l,h,p){let f=(o-s)/l-(a-s)/(l+h)+(a-o)/h,d=(a-o)/h-(c-o)/(h+p)+(c-a)/p;f*=h,d*=h,r(o,a,f,d)},calc:function(s){let o=s*s,a=o*s;return i+e*s+t*o+n*a}}}var gc=new S,Lh=new gd,Dh=new gd,Uh=new gd,$t=class extends ai{constructor(e=[],t=!1,n="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=r}getPoint(e,t=new S){let n=t,r=this.points,s=r.length,o=(s-(this.closed?0:1))*e,a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:c===0&&a===s-1&&(a=s-2,c=1);let l,h;this.closed||a>0?l=r[(a-1)%s]:(gc.subVectors(r[0],r[1]).add(r[0]),l=gc);let p=r[a%s],f=r[(a+1)%s];if(this.closed||a+2<s?h=r[(a+2)%s]:(gc.subVectors(r[s-1],r[s-2]).add(r[s-1]),h=gc),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,g=Math.pow(l.distanceToSquared(p),d),x=Math.pow(p.distanceToSquared(f),d),m=Math.pow(f.distanceToSquared(h),d);x<1e-4&&(x=1),g<1e-4&&(g=x),m<1e-4&&(m=x),Lh.initNonuniformCatmullRom(l.x,p.x,f.x,h.x,g,x,m),Dh.initNonuniformCatmullRom(l.y,p.y,f.y,h.y,g,x,m),Uh.initNonuniformCatmullRom(l.z,p.z,f.z,h.z,g,x,m)}else this.curveType==="catmullrom"&&(Lh.initCatmullRom(l.x,p.x,f.x,h.x,this.tension),Dh.initCatmullRom(l.y,p.y,f.y,h.y,this.tension),Uh.initCatmullRom(l.z,p.z,f.z,h.z,this.tension));return n.set(Lh.calc(c),Dh.calc(c),Uh.calc(c)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let r=e.points[t];this.points.push(new S().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Hp(i,e,t,n,r){let s=(n-e)*.5,o=(r-t)*.5,a=i*i,c=i*a;return(2*t-2*n+s+o)*c+(-3*t+3*n-2*s-o)*a+s*i+t}function $2(i,e){let t=1-i;return t*t*e}function K2(i,e){return 2*(1-i)*i*e}function J2(i,e){return i*i*e}function jo(i,e,t,n){return $2(i,e)+K2(i,t)+J2(i,n)}function Q2(i,e){let t=1-i;return t*t*t*e}function j2(i,e){let t=1-i;return 3*t*t*i*e}function eM(i,e){return 3*(1-i)*i*i*e}function tM(i,e){return i*i*i*e}function ea(i,e,t,n,r){return Q2(i,e)+j2(i,t)+eM(i,n)+tM(i,r)}var Xc=class extends ai{constructor(e=new Fe,t=new Fe,n=new Fe,r=new Fe){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new Fe){let n=t,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(ea(e,r.x,s.x,o.x,a.x),ea(e,r.y,s.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},la=class extends ai{constructor(e=new S,t=new S,n=new S,r=new S){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new S){let n=t,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(ea(e,r.x,s.x,o.x,a.x),ea(e,r.y,s.y,o.y,a.y),ea(e,r.z,s.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},qc=class extends ai{constructor(e=new Fe,t=new Fe){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Fe){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Fe){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ou=class extends ai{constructor(e=new S,t=new S){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new S){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new S){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Yc=class extends ai{constructor(e=new Fe,t=new Fe,n=new Fe){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new Fe){let n=t,r=this.v0,s=this.v1,o=this.v2;return n.set(jo(e,r.x,s.x,o.x),jo(e,r.y,s.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Zc=class extends ai{constructor(e=new S,t=new S,n=new S){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new S){let n=t,r=this.v0,s=this.v1,o=this.v2;return n.set(jo(e,r.x,s.x,o.x),jo(e,r.y,s.y,o.y),jo(e,r.z,s.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},$c=class extends ai{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Fe){let n=t,r=this.points,s=(r.length-1)*e,o=Math.floor(s),a=s-o,c=r[o===0?o:o-1],l=r[o],h=r[o>r.length-2?r.length-1:o+1],p=r[o>r.length-3?r.length-1:o+2];return n.set(Hp(a,c.x,l.x,h.x,p.x),Hp(a,c.y,l.y,h.y,p.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let r=e.points[t];this.points.push(r.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let r=e.points[t];this.points.push(new Fe().fromArray(r))}return this}},Kc=Object.freeze({__proto__:null,ArcCurve:Fu,CatmullRomCurve3:$t,CubicBezierCurve:Xc,CubicBezierCurve3:la,EllipseCurve:ca,LineCurve:qc,LineCurve3:Ou,QuadraticBezierCurve:Yc,QuadraticBezierCurve3:Zc,SplineCurve:$c}),zu=class extends ai{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Kc[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),r=this.getCurveLengths(),s=0;for(;s<r.length;){if(r[s]>=n){let o=r[s]-n,a=this.curves[s],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,t)}s++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,r=this.curves.length;n<r;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let r=0,s=this.curves;r<s.length;r++){let o=s[r],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,c=o.getPoints(a);for(let l=0;l<c.length;l++){let h=c[l];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let r=e.curves[t];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let r=this.curves[t];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let r=e.curves[t];this.curves.push(new Kc[r.type]().fromJSON(r))}return this}},bi=class extends zu{constructor(e){super(),this.type="Path",this.currentPoint=new Fe,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new qc(this.currentPoint.clone(),new Fe(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,r){let s=new Yc(this.currentPoint.clone(),new Fe(e,t),new Fe(n,r));return this.curves.push(s),this.currentPoint.set(n,r),this}bezierCurveTo(e,t,n,r,s,o){let a=new Xc(this.currentPoint.clone(),new Fe(e,t),new Fe(n,r),new Fe(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new $c(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,r,s,o){let a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+a,t+c,n,r,s,o),this}absarc(e,t,n,r,s,o){return this.absellipse(e,t,n,n,r,s,o),this}ellipse(e,t,n,r,s,o,a,c){let l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+l,t+h,n,r,s,o,a,c),this}absellipse(e,t,n,r,s,o,a,c){let l=new ca(e,t,n,r,s,o,a,c);if(this.curves.length>0){let p=l.getPoint(0);p.equals(this.currentPoint)||this.lineTo(p.x,p.y)}this.curves.push(l);let h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},zr=class i extends Pt{constructor(e=[new Fe(0,-.5),new Fe(.5,0),new Fe(0,.5)],t=12,n=0,r=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:r},t=Math.floor(t),r=bn(r,0,Math.PI*2);let s=[],o=[],a=[],c=[],l=[],h=1/t,p=new S,f=new Fe,d=new S,g=new S,x=new S,m=0,u=0;for(let E=0;E<=e.length-1;E++)switch(E){case 0:m=e[E+1].x-e[E].x,u=e[E+1].y-e[E].y,d.x=u*1,d.y=-m,d.z=u*0,x.copy(d),d.normalize(),c.push(d.x,d.y,d.z);break;case e.length-1:c.push(x.x,x.y,x.z);break;default:m=e[E+1].x-e[E].x,u=e[E+1].y-e[E].y,d.x=u*1,d.y=-m,d.z=u*0,g.copy(d),d.x+=x.x,d.y+=x.y,d.z+=x.z,d.normalize(),c.push(d.x,d.y,d.z),x.copy(g)}for(let E=0;E<=t;E++){let y=n+E*h*r,_=Math.sin(y),P=Math.cos(y);for(let T=0;T<=e.length-1;T++){p.x=e[T].x*_,p.y=e[T].y,p.z=e[T].x*P,o.push(p.x,p.y,p.z),f.x=E/t,f.y=T/(e.length-1),a.push(f.x,f.y);let R=c[3*T+0]*_,A=c[3*T+1],O=c[3*T+0]*P;l.push(R,A,O)}}for(let E=0;E<t;E++)for(let y=0;y<e.length-1;y++){let _=y+E*e.length,P=_,T=_+e.length,R=_+e.length+1,A=_+1;s.push(P,T,A),s.push(R,A,T)}this.setIndex(s),this.setAttribute("position",new lt(o,3)),this.setAttribute("uv",new lt(a,2)),this.setAttribute("normal",new lt(l,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.points,e.segments,e.phiStart,e.phiLength)}};var Ti=class i extends Pt{constructor(e=1,t=32,n=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:r},t=Math.max(3,t);let s=[],o=[],a=[],c=[],l=new S,h=new Fe;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let p=0,f=3;p<=t;p++,f+=3){let d=n+p/t*r;l.x=e*Math.cos(d),l.y=e*Math.sin(d),o.push(l.x,l.y,l.z),a.push(0,0,1),h.x=(o[f]/e+1)/2,h.y=(o[f+1]/e+1)/2,c.push(h.x,h.y)}for(let p=1;p<=t;p++)s.push(p,p+1,0);this.setIndex(s),this.setAttribute("position",new lt(o,3)),this.setAttribute("normal",new lt(a,3)),this.setAttribute("uv",new lt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.segments,e.thetaStart,e.thetaLength)}},Bt=class i extends Pt{constructor(e=1,t=1,n=1,r=32,s=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:c};let l=this;r=Math.floor(r),s=Math.floor(s);let h=[],p=[],f=[],d=[],g=0,x=[],m=n/2,u=0;E(),o===!1&&(e>0&&y(!0),t>0&&y(!1)),this.setIndex(h),this.setAttribute("position",new lt(p,3)),this.setAttribute("normal",new lt(f,3)),this.setAttribute("uv",new lt(d,2));function E(){let _=new S,P=new S,T=0,R=(t-e)/n;for(let A=0;A<=s;A++){let O=[],v=A/s,w=v*(t-e)+e;for(let V=0;V<=r;V++){let G=V/r,z=G*c+a,H=Math.sin(z),Q=Math.cos(z);P.x=w*H,P.y=-v*n+m,P.z=w*Q,p.push(P.x,P.y,P.z),_.set(H,R,Q).normalize(),f.push(_.x,_.y,_.z),d.push(G,1-v),O.push(g++)}x.push(O)}for(let A=0;A<r;A++)for(let O=0;O<s;O++){let v=x[O][A],w=x[O+1][A],V=x[O+1][A+1],G=x[O][A+1];e>0&&(h.push(v,w,G),T+=3),t>0&&(h.push(w,V,G),T+=3)}l.addGroup(u,T,0),u+=T}function y(_){let P=g,T=new Fe,R=new S,A=0,O=_===!0?e:t,v=_===!0?1:-1;for(let V=1;V<=r;V++)p.push(0,m*v,0),f.push(0,v,0),d.push(.5,.5),g++;let w=g;for(let V=0;V<=r;V++){let z=V/r*c+a,H=Math.cos(z),Q=Math.sin(z);R.x=O*Q,R.y=m*v,R.z=O*H,p.push(R.x,R.y,R.z),f.push(0,v,0),T.x=H*.5+.5,T.y=Q*.5*v+.5,d.push(T.x,T.y),g++}for(let V=0;V<r;V++){let G=P+V,z=w+V;_===!0?h.push(z,z+1,G):h.push(z+1,z,G),A+=3}l.addGroup(u,A,_===!0?1:2),u+=A}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Br=class i extends Bt{constructor(e=1,t=1,n=32,r=1,s=!1,o=0,a=Math.PI*2){super(0,e,t,n,r,s,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:r,openEnded:s,thetaStart:o,thetaLength:a}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Bu=class i extends Pt{constructor(e=[],t=[],n=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:r};let s=[],o=[];a(r),l(n),h(),this.setAttribute("position",new lt(s,3)),this.setAttribute("normal",new lt(s.slice(),3)),this.setAttribute("uv",new lt(o,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function a(E){let y=new S,_=new S,P=new S;for(let T=0;T<t.length;T+=3)d(t[T+0],y),d(t[T+1],_),d(t[T+2],P),c(y,_,P,E)}function c(E,y,_,P){let T=P+1,R=[];for(let A=0;A<=T;A++){R[A]=[];let O=E.clone().lerp(_,A/T),v=y.clone().lerp(_,A/T),w=T-A;for(let V=0;V<=w;V++)V===0&&A===T?R[A][V]=O:R[A][V]=O.clone().lerp(v,V/w)}for(let A=0;A<T;A++)for(let O=0;O<2*(T-A)-1;O++){let v=Math.floor(O/2);O%2===0?(f(R[A][v+1]),f(R[A+1][v]),f(R[A][v])):(f(R[A][v+1]),f(R[A+1][v+1]),f(R[A+1][v]))}}function l(E){let y=new S;for(let _=0;_<s.length;_+=3)y.x=s[_+0],y.y=s[_+1],y.z=s[_+2],y.normalize().multiplyScalar(E),s[_+0]=y.x,s[_+1]=y.y,s[_+2]=y.z}function h(){let E=new S;for(let y=0;y<s.length;y+=3){E.x=s[y+0],E.y=s[y+1],E.z=s[y+2];let _=m(E)/2/Math.PI+.5,P=u(E)/Math.PI+.5;o.push(_,1-P)}g(),p()}function p(){for(let E=0;E<o.length;E+=6){let y=o[E+0],_=o[E+2],P=o[E+4],T=Math.max(y,_,P),R=Math.min(y,_,P);T>.9&&R<.1&&(y<.2&&(o[E+0]+=1),_<.2&&(o[E+2]+=1),P<.2&&(o[E+4]+=1))}}function f(E){s.push(E.x,E.y,E.z)}function d(E,y){let _=E*3;y.x=e[_+0],y.y=e[_+1],y.z=e[_+2]}function g(){let E=new S,y=new S,_=new S,P=new S,T=new Fe,R=new Fe,A=new Fe;for(let O=0,v=0;O<s.length;O+=9,v+=6){E.set(s[O+0],s[O+1],s[O+2]),y.set(s[O+3],s[O+4],s[O+5]),_.set(s[O+6],s[O+7],s[O+8]),T.set(o[v+0],o[v+1]),R.set(o[v+2],o[v+3]),A.set(o[v+4],o[v+5]),P.copy(E).add(y).add(_).divideScalar(3);let w=m(P);x(T,v+0,E,w),x(R,v+2,y,w),x(A,v+4,_,w)}}function x(E,y,_,P){P<0&&E.x===1&&(o[y]=E.x-1),_.x===0&&_.z===0&&(o[y]=P/2/Math.PI+.5)}function m(E){return Math.atan2(E.z,-E.x)}function u(E){return Math.atan2(-E.y,Math.sqrt(E.x*E.x+E.z*E.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.vertices,e.indices,e.radius,e.details)}};var Tt=class extends bi{constructor(e){super(e),this.uuid=ms(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,r=this.holes.length;n<r;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let r=e.holes[t];this.holes.push(r.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let r=this.holes[t];e.holes.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let r=e.holes[t];this.holes.push(new bi().fromJSON(r))}return this}},nM={triangulate:function(i,e,t=2){let n=e&&e.length,r=n?e[0]*t:i.length,s=p0(i,0,r,t,!0),o=[];if(!s||s.next===s.prev)return o;let a,c,l,h,p,f,d;if(n&&(s=aM(i,e,s,t)),i.length>80*t){a=l=i[0],c=h=i[1];for(let g=t;g<r;g+=t)p=i[g],f=i[g+1],p<a&&(a=p),f<c&&(c=f),p>l&&(l=p),f>h&&(h=f);d=Math.max(l-a,h-c),d=d!==0?32767/d:0}return ha(s,o,t,a,c,d,0),o}};function p0(i,e,t,n,r){let s,o;if(r===yM(i,e,t,n)>0)for(s=e;s<t;s+=n)o=Np(s,i[s],i[s+1],o);else for(s=t-n;s>=e;s-=n)o=Np(s,i[s],i[s+1],o);return o&&sl(o,o.next)&&(da(o),o=o.next),o}function ds(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(sl(t,t.next)||ln(t.prev,t,t.next)===0)){if(da(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function ha(i,e,t,n,r,s,o){if(!i)return;!o&&s&&dM(i,n,r,s);let a=i,c,l;for(;i.prev!==i.next;){if(c=i.prev,l=i.next,s?rM(i,n,r,s):iM(i)){e.push(c.i/t|0),e.push(i.i/t|0),e.push(l.i/t|0),da(i),i=l.next,a=l.next;continue}if(i=l,i===a){o?o===1?(i=sM(ds(i),e,t),ha(i,e,t,n,r,s,2)):o===2&&oM(i,e,t,n,r,s):ha(ds(i),e,t,n,r,s,1);break}}}function iM(i){let e=i.prev,t=i,n=i.next;if(ln(e,t,n)>=0)return!1;let r=e.x,s=t.x,o=n.x,a=e.y,c=t.y,l=n.y,h=r<s?r<o?r:o:s<o?s:o,p=a<c?a<l?a:l:c<l?c:l,f=r>s?r>o?r:o:s>o?s:o,d=a>c?a>l?a:l:c>l?c:l,g=n.next;for(;g!==e;){if(g.x>=h&&g.x<=f&&g.y>=p&&g.y<=d&&qs(r,a,s,c,o,l,g.x,g.y)&&ln(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function rM(i,e,t,n){let r=i.prev,s=i,o=i.next;if(ln(r,s,o)>=0)return!1;let a=r.x,c=s.x,l=o.x,h=r.y,p=s.y,f=o.y,d=a<c?a<l?a:l:c<l?c:l,g=h<p?h<f?h:f:p<f?p:f,x=a>c?a>l?a:l:c>l?c:l,m=h>p?h>f?h:f:p>f?p:f,u=ku(d,g,e,t,n),E=ku(x,m,e,t,n),y=i.prevZ,_=i.nextZ;for(;y&&y.z>=u&&_&&_.z<=E;){if(y.x>=d&&y.x<=x&&y.y>=g&&y.y<=m&&y!==r&&y!==o&&qs(a,h,c,p,l,f,y.x,y.y)&&ln(y.prev,y,y.next)>=0||(y=y.prevZ,_.x>=d&&_.x<=x&&_.y>=g&&_.y<=m&&_!==r&&_!==o&&qs(a,h,c,p,l,f,_.x,_.y)&&ln(_.prev,_,_.next)>=0))return!1;_=_.nextZ}for(;y&&y.z>=u;){if(y.x>=d&&y.x<=x&&y.y>=g&&y.y<=m&&y!==r&&y!==o&&qs(a,h,c,p,l,f,y.x,y.y)&&ln(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;_&&_.z<=E;){if(_.x>=d&&_.x<=x&&_.y>=g&&_.y<=m&&_!==r&&_!==o&&qs(a,h,c,p,l,f,_.x,_.y)&&ln(_.prev,_,_.next)>=0)return!1;_=_.nextZ}return!0}function sM(i,e,t){let n=i;do{let r=n.prev,s=n.next.next;!sl(r,s)&&m0(r,n,n.next,s)&&ua(r,s)&&ua(s,r)&&(e.push(r.i/t|0),e.push(n.i/t|0),e.push(s.i/t|0),da(n),da(n.next),n=i=s),n=n.next}while(n!==i);return ds(n)}function oM(i,e,t,n,r,s){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&mM(o,a)){let c=g0(o,a);o=ds(o,o.next),c=ds(c,c.next),ha(o,e,t,n,r,s,0),ha(c,e,t,n,r,s,0);return}a=a.next}o=o.next}while(o!==i)}function aM(i,e,t,n){let r=[],s,o,a,c,l;for(s=0,o=e.length;s<o;s++)a=e[s]*n,c=s<o-1?e[s+1]*n:i.length,l=p0(i,a,c,n,!1),l===l.next&&(l.steiner=!0),r.push(pM(l));for(r.sort(cM),s=0;s<r.length;s++)t=lM(r[s],t);return t}function cM(i,e){return i.x-e.x}function lM(i,e){let t=hM(i,e);if(!t)return e;let n=g0(t,i);return ds(n,n.next),ds(t,t.next)}function hM(i,e){let t=e,n=-1/0,r,s=i.x,o=i.y;do{if(o<=t.y&&o>=t.next.y&&t.next.y!==t.y){let f=t.x+(o-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(f<=s&&f>n&&(n=f,r=t.x<t.next.x?t:t.next,f===s))return r}t=t.next}while(t!==e);if(!r)return null;let a=r,c=r.x,l=r.y,h=1/0,p;t=r;do s>=t.x&&t.x>=c&&s!==t.x&&qs(o<l?s:n,o,c,l,o<l?n:s,o,t.x,t.y)&&(p=Math.abs(o-t.y)/(s-t.x),ua(t,i)&&(p<h||p===h&&(t.x>r.x||t.x===r.x&&uM(r,t)))&&(r=t,h=p)),t=t.next;while(t!==a);return r}function uM(i,e){return ln(i.prev,i,e.prev)<0&&ln(e.next,i,i.next)<0}function dM(i,e,t,n){let r=i;do r.z===0&&(r.z=ku(r.x,r.y,e,t,n)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==i);r.prevZ.nextZ=null,r.prevZ=null,fM(r)}function fM(i){let e,t,n,r,s,o,a,c,l=1;do{for(t=i,i=null,s=null,o=0;t;){for(o++,n=t,a=0,e=0;e<l&&(a++,n=n.nextZ,!!n);e++);for(c=l;a>0||c>0&&n;)a!==0&&(c===0||!n||t.z<=n.z)?(r=t,t=t.nextZ,a--):(r=n,n=n.nextZ,c--),s?s.nextZ=r:i=r,r.prevZ=s,s=r;t=n}s.nextZ=null,l*=2}while(o>1);return i}function ku(i,e,t,n,r){return i=(i-t)*r|0,e=(e-n)*r|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function pM(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function qs(i,e,t,n,r,s,o,a){return(r-o)*(e-a)>=(i-o)*(s-a)&&(i-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(s-a)>=(r-o)*(n-a)}function mM(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!gM(i,e)&&(ua(i,e)&&ua(e,i)&&xM(i,e)&&(ln(i.prev,i,e.prev)||ln(i,e.prev,e))||sl(i,e)&&ln(i.prev,i,i.next)>0&&ln(e.prev,e,e.next)>0)}function ln(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function sl(i,e){return i.x===e.x&&i.y===e.y}function m0(i,e,t,n){let r=yc(ln(i,e,t)),s=yc(ln(i,e,n)),o=yc(ln(t,n,i)),a=yc(ln(t,n,e));return!!(r!==s&&o!==a||r===0&&xc(i,t,e)||s===0&&xc(i,n,e)||o===0&&xc(t,i,n)||a===0&&xc(t,e,n))}function xc(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function yc(i){return i>0?1:i<0?-1:0}function gM(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&m0(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function ua(i,e){return ln(i.prev,i,i.next)<0?ln(i,e,i.next)>=0&&ln(i,i.prev,e)>=0:ln(i,e,i.prev)<0||ln(i,i.next,e)<0}function xM(i,e){let t=i,n=!1,r=(i.x+e.x)/2,s=(i.y+e.y)/2;do t.y>s!=t.next.y>s&&t.next.y!==t.y&&r<(t.next.x-t.x)*(s-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function g0(i,e){let t=new Vu(i.i,i.x,i.y),n=new Vu(e.i,e.x,e.y),r=i.next,s=e.prev;return i.next=e,e.prev=i,t.next=r,r.prev=t,n.next=t,t.prev=n,s.next=n,n.prev=s,n}function Np(i,e,t,n){let r=new Vu(i,e,t);return n?(r.next=n.next,r.prev=n,n.next.prev=r,n.next=r):(r.prev=r,r.next=r),r}function da(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Vu(i,e,t){this.i=i,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function yM(i,e,t,n){let r=0;for(let s=e,o=t-n;s<t;s+=n)r+=(i[o]-i[s])*(i[s+1]+i[o+1]),o=s;return r}var Hr=class i{static area(e){let t=e.length,n=0;for(let r=t-1,s=0;s<t;r=s++)n+=e[r].x*e[s].y-e[s].x*e[r].y;return n*.5}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],r=[],s=[];Fp(e),Op(n,e);let o=e.length;t.forEach(Fp);for(let c=0;c<t.length;c++)r.push(o),o+=t[c].length,Op(n,t[c]);let a=nM.triangulate(n,r);for(let c=0;c<a.length;c+=3)s.push(a.slice(c,c+3));return s}};function Fp(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function Op(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}var sn=class i extends Pt{constructor(e=new Tt([new Fe(.5,.5),new Fe(-.5,.5),new Fe(-.5,-.5),new Fe(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,r=[],s=[];for(let a=0,c=e.length;a<c;a++){let l=e[a];o(l)}this.setAttribute("position",new lt(r,3)),this.setAttribute("uv",new lt(s,2)),this.computeVertexNormals();function o(a){let c=[],l=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,p=t.depth!==void 0?t.depth:1,f=t.bevelEnabled!==void 0?t.bevelEnabled:!0,d=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:d-.1,x=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3,u=t.extrudePath,E=t.UVGenerator!==void 0?t.UVGenerator:vM,y,_=!1,P,T,R,A;u&&(y=u.getSpacedPoints(h),_=!0,f=!1,P=u.computeFrenetFrames(h,!1),T=new S,R=new S,A=new S),f||(m=0,d=0,g=0,x=0);let O=a.extractPoints(l),v=O.shape,w=O.holes;if(!Hr.isClockWise(v)){v=v.reverse();for(let re=0,L=w.length;re<L;re++){let ye=w[re];Hr.isClockWise(ye)&&(w[re]=ye.reverse())}}let G=Hr.triangulateShape(v,w),z=v;for(let re=0,L=w.length;re<L;re++){let ye=w[re];v=v.concat(ye)}function H(re,L,ye){return L||console.error("THREE.ExtrudeGeometry: vec does not exist"),re.clone().addScaledVector(L,ye)}let Q=v.length,le=G.length;function ie(re,L,ye){let Ae,_e,Re,Le=re.x-L.x,he=re.y-L.y,D=ye.x-re.x,b=ye.y-re.y,$=Le*Le+he*he,pe=Le*b-he*D;if(Math.abs(pe)>Number.EPSILON){let Me=Math.sqrt($),ve=Math.sqrt(D*D+b*b),Oe=L.x-he/Me,He=L.y+Le/Me,ke=ye.x-b/ve,nt=ye.y+D/ve,De=((ke-Oe)*b-(nt-He)*D)/(Le*b-he*D);Ae=Oe+Le*De-re.x,_e=He+he*De-re.y;let K=Ae*Ae+_e*_e;if(K<=2)return new Fe(Ae,_e);Re=Math.sqrt(K/2)}else{let Me=!1;Le>Number.EPSILON?D>Number.EPSILON&&(Me=!0):Le<-Number.EPSILON?D<-Number.EPSILON&&(Me=!0):Math.sign(he)===Math.sign(b)&&(Me=!0),Me?(Ae=-he,_e=Le,Re=Math.sqrt($)):(Ae=Le,_e=he,Re=Math.sqrt($/2))}return new Fe(Ae/Re,_e/Re)}let fe=[];for(let re=0,L=z.length,ye=L-1,Ae=re+1;re<L;re++,ye++,Ae++)ye===L&&(ye=0),Ae===L&&(Ae=0),fe[re]=ie(z[re],z[ye],z[Ae]);let N=[],j,ne=fe.concat();for(let re=0,L=w.length;re<L;re++){let ye=w[re];j=[];for(let Ae=0,_e=ye.length,Re=_e-1,Le=Ae+1;Ae<_e;Ae++,Re++,Le++)Re===_e&&(Re=0),Le===_e&&(Le=0),j[Ae]=ie(ye[Ae],ye[Re],ye[Le]);N.push(j),ne=ne.concat(j)}for(let re=0;re<m;re++){let L=re/m,ye=d*Math.cos(L*Math.PI/2),Ae=g*Math.sin(L*Math.PI/2)+x;for(let _e=0,Re=z.length;_e<Re;_e++){let Le=H(z[_e],fe[_e],Ae);k(Le.x,Le.y,-ye)}for(let _e=0,Re=w.length;_e<Re;_e++){let Le=w[_e];j=N[_e];for(let he=0,D=Le.length;he<D;he++){let b=H(Le[he],j[he],Ae);k(b.x,b.y,-ye)}}}let ee=g+x;for(let re=0;re<Q;re++){let L=f?H(v[re],ne[re],ee):v[re];_?(R.copy(P.normals[0]).multiplyScalar(L.x),T.copy(P.binormals[0]).multiplyScalar(L.y),A.copy(y[0]).add(R).add(T),k(A.x,A.y,A.z)):k(L.x,L.y,0)}for(let re=1;re<=h;re++)for(let L=0;L<Q;L++){let ye=f?H(v[L],ne[L],ee):v[L];_?(R.copy(P.normals[re]).multiplyScalar(ye.x),T.copy(P.binormals[re]).multiplyScalar(ye.y),A.copy(y[re]).add(R).add(T),k(A.x,A.y,A.z)):k(ye.x,ye.y,p/h*re)}for(let re=m-1;re>=0;re--){let L=re/m,ye=d*Math.cos(L*Math.PI/2),Ae=g*Math.sin(L*Math.PI/2)+x;for(let _e=0,Re=z.length;_e<Re;_e++){let Le=H(z[_e],fe[_e],Ae);k(Le.x,Le.y,p+ye)}for(let _e=0,Re=w.length;_e<Re;_e++){let Le=w[_e];j=N[_e];for(let he=0,D=Le.length;he<D;he++){let b=H(Le[he],j[he],Ae);_?k(b.x,b.y+y[h-1].y,y[h-1].x+ye):k(b.x,b.y,p+ye)}}}F(),se();function F(){let re=r.length/3;if(f){let L=0,ye=Q*L;for(let Ae=0;Ae<le;Ae++){let _e=G[Ae];Z(_e[2]+ye,_e[1]+ye,_e[0]+ye)}L=h+m*2,ye=Q*L;for(let Ae=0;Ae<le;Ae++){let _e=G[Ae];Z(_e[0]+ye,_e[1]+ye,_e[2]+ye)}}else{for(let L=0;L<le;L++){let ye=G[L];Z(ye[2],ye[1],ye[0])}for(let L=0;L<le;L++){let ye=G[L];Z(ye[0]+Q*h,ye[1]+Q*h,ye[2]+Q*h)}}n.addGroup(re,r.length/3-re,0)}function se(){let re=r.length/3,L=0;q(z,L),L+=z.length;for(let ye=0,Ae=w.length;ye<Ae;ye++){let _e=w[ye];q(_e,L),L+=_e.length}n.addGroup(re,r.length/3-re,1)}function q(re,L){let ye=re.length;for(;--ye>=0;){let Ae=ye,_e=ye-1;_e<0&&(_e=re.length-1);for(let Re=0,Le=h+m*2;Re<Le;Re++){let he=Q*Re,D=Q*(Re+1),b=L+Ae+he,$=L+_e+he,pe=L+_e+D,Me=L+Ae+D;xe(b,$,pe,Me)}}}function k(re,L,ye){c.push(re),c.push(L),c.push(ye)}function Z(re,L,ye){Se(re),Se(L),Se(ye);let Ae=r.length/3,_e=E.generateTopUV(n,r,Ae-3,Ae-2,Ae-1);ge(_e[0]),ge(_e[1]),ge(_e[2])}function xe(re,L,ye,Ae){Se(re),Se(L),Se(Ae),Se(L),Se(ye),Se(Ae);let _e=r.length/3,Re=E.generateSideWallUV(n,r,_e-6,_e-3,_e-2,_e-1);ge(Re[0]),ge(Re[1]),ge(Re[3]),ge(Re[1]),ge(Re[2]),ge(Re[3])}function Se(re){r.push(c[re*3+0]),r.push(c[re*3+1]),r.push(c[re*3+2])}function ge(re){s.push(re.x),s.push(re.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return _M(t,n,e)}static fromJSON(e,t){let n=[];for(let s=0,o=e.shapes.length;s<o;s++){let a=t[e.shapes[s]];n.push(a)}let r=e.options.extrudePath;return r!==void 0&&(e.options.extrudePath=new Kc[r.type]().fromJSON(r)),new i(n,e.options)}},vM={generateTopUV:function(i,e,t,n,r){let s=e[t*3],o=e[t*3+1],a=e[n*3],c=e[n*3+1],l=e[r*3],h=e[r*3+1];return[new Fe(s,o),new Fe(a,c),new Fe(l,h)]},generateSideWallUV:function(i,e,t,n,r,s){let o=e[t*3],a=e[t*3+1],c=e[t*3+2],l=e[n*3],h=e[n*3+1],p=e[n*3+2],f=e[r*3],d=e[r*3+1],g=e[r*3+2],x=e[s*3],m=e[s*3+1],u=e[s*3+2];return Math.abs(a-h)<Math.abs(o-l)?[new Fe(o,1-c),new Fe(l,1-p),new Fe(f,1-g),new Fe(x,1-u)]:[new Fe(a,1-c),new Fe(h,1-p),new Fe(d,1-g),new Fe(m,1-u)]}};function _M(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,r=i.length;n<r;n++){let s=i[n];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var Jc=class i extends Bu{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,r=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,s,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}};var kr=class i extends Pt{constructor(e=.5,t=1,n=32,r=1,s=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:r,thetaStart:s,thetaLength:o},n=Math.max(3,n),r=Math.max(1,r);let a=[],c=[],l=[],h=[],p=e,f=(t-e)/r,d=new S,g=new Fe;for(let x=0;x<=r;x++){for(let m=0;m<=n;m++){let u=s+m/n*o;d.x=p*Math.cos(u),d.y=p*Math.sin(u),c.push(d.x,d.y,d.z),l.push(0,0,1),g.x=(d.x/t+1)/2,g.y=(d.y/t+1)/2,h.push(g.x,g.y)}p+=f}for(let x=0;x<r;x++){let m=x*(n+1);for(let u=0;u<n;u++){let E=u+m,y=E,_=E+n+1,P=E+n+2,T=E+1;a.push(y,_,T),a.push(_,P,T)}}this.setIndex(a),this.setAttribute("position",new lt(c,3)),this.setAttribute("normal",new lt(l,3)),this.setAttribute("uv",new lt(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}},Xi=class i extends Pt{constructor(e=new Tt([new Fe(0,.5),new Fe(-.5,-.5),new Fe(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let n=[],r=[],s=[],o=[],a=0,c=0;if(Array.isArray(e)===!1)l(e);else for(let h=0;h<e.length;h++)l(e[h]),this.addGroup(a,c,h),a+=c,c=0;this.setIndex(n),this.setAttribute("position",new lt(r,3)),this.setAttribute("normal",new lt(s,3)),this.setAttribute("uv",new lt(o,2));function l(h){let p=r.length/3,f=h.extractPoints(t),d=f.shape,g=f.holes;Hr.isClockWise(d)===!1&&(d=d.reverse());for(let m=0,u=g.length;m<u;m++){let E=g[m];Hr.isClockWise(E)===!0&&(g[m]=E.reverse())}let x=Hr.triangulateShape(d,g);for(let m=0,u=g.length;m<u;m++){let E=g[m];d=d.concat(E)}for(let m=0,u=d.length;m<u;m++){let E=d[m];r.push(E.x,E.y,0),s.push(0,0,1),o.push(E.x,E.y)}for(let m=0,u=x.length;m<u;m++){let E=x[m],y=E[0]+p,_=E[1]+p,P=E[2]+p;n.push(y,_,P),c+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return MM(t,e)}static fromJSON(e,t){let n=[];for(let r=0,s=e.shapes.length;r<s;r++){let o=t[e.shapes[r]];n.push(o)}return new i(n,e.curveSegments)}};function MM(i,e){if(e.shapes=[],Array.isArray(i))for(let t=0,n=i.length;t<n;t++){let r=i[t];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e}var Kt=class i extends Pt{constructor(e=1,t=32,n=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let c=Math.min(o+a,Math.PI),l=0,h=[],p=new S,f=new S,d=[],g=[],x=[],m=[];for(let u=0;u<=n;u++){let E=[],y=u/n,_=0;u===0&&o===0?_=.5/t:u===n&&c===Math.PI&&(_=-.5/t);for(let P=0;P<=t;P++){let T=P/t;p.x=-e*Math.cos(r+T*s)*Math.sin(o+y*a),p.y=e*Math.cos(o+y*a),p.z=e*Math.sin(r+T*s)*Math.sin(o+y*a),g.push(p.x,p.y,p.z),f.copy(p).normalize(),x.push(f.x,f.y,f.z),m.push(T+_,1-y),E.push(l++)}h.push(E)}for(let u=0;u<n;u++)for(let E=0;E<t;E++){let y=h[u][E+1],_=h[u][E],P=h[u+1][E],T=h[u+1][E+1];(u!==0||o>0)&&d.push(y,_,T),(u!==n-1||c<Math.PI)&&d.push(_,P,T)}this.setIndex(d),this.setAttribute("position",new lt(g,3)),this.setAttribute("normal",new lt(x,3)),this.setAttribute("uv",new lt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Qt=class i extends Pt{constructor(e=1,t=.4,n=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:r,arc:s},n=Math.floor(n),r=Math.floor(r);let o=[],a=[],c=[],l=[],h=new S,p=new S,f=new S;for(let d=0;d<=n;d++)for(let g=0;g<=r;g++){let x=g/r*s,m=d/n*Math.PI*2;p.x=(e+t*Math.cos(m))*Math.cos(x),p.y=(e+t*Math.cos(m))*Math.sin(x),p.z=t*Math.sin(m),a.push(p.x,p.y,p.z),h.x=e*Math.cos(x),h.y=e*Math.sin(x),f.subVectors(p,h).normalize(),c.push(f.x,f.y,f.z),l.push(g/r),l.push(d/n)}for(let d=1;d<=n;d++)for(let g=1;g<=r;g++){let x=(r+1)*d+g-1,m=(r+1)*(d-1)+g-1,u=(r+1)*(d-1)+g,E=(r+1)*d+g;o.push(x,m,E),o.push(m,u,E)}this.setIndex(o),this.setAttribute("position",new lt(a,3)),this.setAttribute("normal",new lt(c,3)),this.setAttribute("uv",new lt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}};var un=class i extends Pt{constructor(e=new Zc(new S(-1,-1,0),new S(-1,1,0),new S(1,1,0)),t=64,n=1,r=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:r,closed:s};let o=e.computeFrenetFrames(t,s);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new S,c=new S,l=new Fe,h=new S,p=[],f=[],d=[],g=[];x(),this.setIndex(g),this.setAttribute("position",new lt(p,3)),this.setAttribute("normal",new lt(f,3)),this.setAttribute("uv",new lt(d,2));function x(){for(let y=0;y<t;y++)m(y);m(s===!1?t:0),E(),u()}function m(y){h=e.getPointAt(y/t,h);let _=o.normals[y],P=o.binormals[y];for(let T=0;T<=r;T++){let R=T/r*Math.PI*2,A=Math.sin(R),O=-Math.cos(R);c.x=O*_.x+A*P.x,c.y=O*_.y+A*P.y,c.z=O*_.z+A*P.z,c.normalize(),f.push(c.x,c.y,c.z),a.x=h.x+n*c.x,a.y=h.y+n*c.y,a.z=h.z+n*c.z,p.push(a.x,a.y,a.z)}}function u(){for(let y=1;y<=t;y++)for(let _=1;_<=r;_++){let P=(r+1)*(y-1)+(_-1),T=(r+1)*y+(_-1),R=(r+1)*y+_,A=(r+1)*(y-1)+_;g.push(P,T,A),g.push(T,R,A)}}function E(){for(let y=0;y<=t;y++)for(let _=0;_<=r;_++)l.x=y/t,l.y=_/r,d.push(l.x,l.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new i(new Kc[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}};var Ve=class extends Or{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new pt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new pt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=r0,this.normalScale=new Fe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new oi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Xt=class extends Ve{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Fe(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return bn(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new pt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new pt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new pt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};function vc(i,e,t){return!i||!t&&i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function EM(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var oo=class{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,r=t[n],s=t[n-1];n:{e:{let o;t:{i:if(!(e<r)){for(let a=n+2;;){if(r===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=r,r=t[++n],e<r)break e}o=t.length;break t}if(!(e>=s)){let a=t[1];e<a&&(n=2,s=a);for(let c=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(r=s,s=t[--n-1],e>=s)break e}o=n,n=0;break t}break n}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(r=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,r)}return this.interpolate_(n,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,s=e*r;for(let o=0;o!==r;++o)t[o]=n[s+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Gu=class extends oo{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Nf,endingEnd:Nf}}intervalChanged_(e,t,n){let r=this.parameterPositions,s=e-2,o=e+1,a=r[s],c=r[o];if(a===void 0)switch(this.getSettings_().endingStart){case Ff:s=e,a=2*t-n;break;case Of:s=r.length-2,a=t+r[s]-r[s+1];break;default:s=e,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Ff:o=e,c=2*n-t;break;case Of:o=1,c=n+r[1]-r[0];break;default:o=e-1,c=t}let l=(n-t)*.5,h=this.valueSize;this._weightPrev=l/(t-a),this._weightNext=l/(c-n),this._offsetPrev=s*h,this._offsetNext=o*h}interpolate_(e,t,n,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=this._offsetPrev,p=this._offsetNext,f=this._weightPrev,d=this._weightNext,g=(n-t)/(r-t),x=g*g,m=x*g,u=-f*m+2*f*x-f*g,E=(1+f)*m+(-1.5-2*f)*x+(-.5+f)*g+1,y=(-1-d)*m+(1.5+d)*x+.5*g,_=d*m-d*x;for(let P=0;P!==a;++P)s[P]=u*o[h+P]+E*o[l+P]+y*o[c+P]+_*o[p+P];return s}},Wu=class extends oo{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=(n-t)/(r-t),p=1-h;for(let f=0;f!==a;++f)s[f]=o[l+f]*p+o[c+f]*h;return s}},Xu=class extends oo{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}},qi=class{constructor(e,t,n,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=vc(t,this.TimeBufferType),this.values=vc(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:vc(e.times,Array),values:vc(e.values,Array)};let r=e.getInterpolation();r!==e.DefaultInterpolation&&(n.interpolation=r)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Xu(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Wu(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Gu(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Rc:t=this.InterpolantFactoryMethodDiscrete;break;case _u:t=this.InterpolantFactoryMethodLinear;break;case ih:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Rc;case this.InterpolantFactoryMethodLinear:return _u;case this.InterpolantFactoryMethodSmooth:return ih}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e}return this}trim(e,t){let n=this.times,r=n.length,s=0,o=r-1;for(;s!==r&&n[s]<e;)++s;for(;o!==-1&&n[o]>t;)--o;if(++o,s!==0||o!==r){s>=o&&(o=Math.max(o,1),s=o-1);let a=this.getValueSize();this.times=n.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,r=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){let c=n[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),e=!1;break}o=c}if(r!==void 0&&EM(r))for(let a=0,c=r.length;a!==c;++a){let l=r[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===ih,s=e.length-1,o=1;for(let a=1;a<s;++a){let c=!1,l=e[a],h=e[a+1];if(l!==h&&(a!==1||l!==e[0]))if(r)c=!0;else{let p=a*n,f=p-n,d=p+n;for(let g=0;g!==n;++g){let x=t[p+g];if(x!==t[f+g]||x!==t[d+g]){c=!0;break}}}if(c){if(a!==o){e[o]=e[a];let p=a*n,f=o*n;for(let d=0;d!==n;++d)t[f+d]=t[p+d]}++o}}if(s>0){e[o]=e[s];for(let a=s*n,c=o*n,l=0;l!==n;++l)t[c+l]=t[a+l];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}};qi.prototype.TimeBufferType=Float32Array;qi.prototype.ValueBufferType=Float32Array;qi.prototype.DefaultInterpolation=_u;var fs=class extends qi{constructor(e,t,n){super(e,t,n)}};fs.prototype.ValueTypeName="bool";fs.prototype.ValueBufferType=Array;fs.prototype.DefaultInterpolation=Rc;fs.prototype.InterpolantFactoryMethodLinear=void 0;fs.prototype.InterpolantFactoryMethodSmooth=void 0;var qu=class extends qi{};qu.prototype.ValueTypeName="color";var Yu=class extends qi{};Yu.prototype.ValueTypeName="number";var Zu=class extends oo{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-t)/(r-t),l=e*a;for(let h=l+a;l!==h;l+=4)ft.slerpFlat(s,0,o,l-a,o,l,c);return s}},Qc=class extends qi{InterpolantFactoryMethodLinear(e){return new Zu(this.times,this.values,this.getValueSize(),e)}};Qc.prototype.ValueTypeName="quaternion";Qc.prototype.InterpolantFactoryMethodSmooth=void 0;var ps=class extends qi{constructor(e,t,n){super(e,t,n)}};ps.prototype.ValueTypeName="string";ps.prototype.ValueBufferType=Array;ps.prototype.DefaultInterpolation=Rc;ps.prototype.InterpolantFactoryMethodLinear=void 0;ps.prototype.InterpolantFactoryMethodSmooth=void 0;var $u=class extends qi{};$u.prototype.ValueTypeName="vector";var zp={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}},Ku=class{constructor(e,t,n){let r=this,s=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){a++,s===!1&&r.onStart!==void 0&&r.onStart(h,o,a),s=!0},this.itemEnd=function(h){o++,r.onProgress!==void 0&&r.onProgress(h,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(h){r.onError!==void 0&&r.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,p){return l.push(h,p),this},this.removeHandler=function(h){let p=l.indexOf(h);return p!==-1&&l.splice(p,2),this},this.getHandler=function(h){for(let p=0,f=l.length;p<f;p+=2){let d=l[p],g=l[p+1];if(d.global&&(d.lastIndex=0),d.test(h))return g}return null}}},SM=new Ku,fa=class{constructor(e){this.manager=e!==void 0?e:SM,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(r,s){n.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};fa.DEFAULT_MATERIAL_NAME="__DEFAULT";var Ju=class extends fa{constructor(e){super(e)}load(e,t,n,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let s=this,o=zp.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;let a=ia("img");function c(){h(),zp.add(e,this),t&&t(this),s.manager.itemEnd(e)}function l(p){h(),r&&r(p),s.manager.itemError(e),s.manager.itemEnd(e)}function h(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}};var ao=class extends fa{constructor(e){super(e)}load(e,t,n,r){let s=new jn,o=new Ju(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},n,r),s}},co=class extends Mt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new pt(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},jc=class extends co{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Mt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new pt(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},Hh=new Rt,Bp=new S,kp=new S,pa=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Fe(512,512),this.map=null,this.mapPass=null,this.matrix=new Rt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new oa,this._frameExtents=new Fe(1,1),this._viewportCount=1,this._viewports=[new Jt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;Bp.setFromMatrixPosition(e.matrixWorld),t.position.copy(Bp),kp.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(kp),t.updateMatrixWorld(),Hh.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Hh),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Hh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Qu=class extends pa{constructor(){super(new On(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){let t=this.camera,n=no*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height,s=e.distance||t.far;(n!==t.fov||r!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=r,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},lo=class extends co{constructor(e,t,n=0,r=Math.PI/3,s=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Mt.DEFAULT_UP),this.updateMatrix(),this.target=new Mt,this.distance=n,this.angle=r,this.penumbra=s,this.decay=o,this.map=null,this.shadow=new Qu}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},Vp=new Rt,Zo=new S,Nh=new S,ju=class extends pa{constructor(){super(new On(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Fe(4,2),this._viewportCount=6,this._viewports=[new Jt(2,1,1,1),new Jt(0,1,1,1),new Jt(3,1,1,1),new Jt(1,1,1,1),new Jt(3,0,1,1),new Jt(1,0,1,1)],this._cubeDirections=[new S(1,0,0),new S(-1,0,0),new S(0,0,1),new S(0,0,-1),new S(0,1,0),new S(0,-1,0)],this._cubeUps=[new S(0,1,0),new S(0,1,0),new S(0,1,0),new S(0,1,0),new S(0,0,1),new S(0,0,-1)]}updateMatrices(e,t=0){let n=this.camera,r=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),Zo.setFromMatrixPosition(e.matrixWorld),n.position.copy(Zo),Nh.copy(n.position),Nh.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Nh),n.updateMatrixWorld(),r.makeTranslation(-Zo.x,-Zo.y,-Zo.z),Vp.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Vp)}},zn=class extends co{constructor(e,t,n=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=r,this.shadow=new ju}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},ed=class extends pa{constructor(){super(new Oc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},el=class extends co{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Mt.DEFAULT_UP),this.updateMatrix(),this.target=new Mt,this.shadow=new ed}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var tl=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Gp(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=Gp();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};function Gp(){return performance.now()}var xd="\\[\\]\\.:\\/",wM=new RegExp("["+xd+"]","g"),yd="[^"+xd+"]",bM="[^"+xd.replace("\\.","")+"]",TM=/((?:WC+[\/:])*)/.source.replace("WC",yd),RM=/(WCOD+)?/.source.replace("WCOD",bM),AM=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",yd),CM=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",yd),PM=new RegExp("^"+TM+RM+AM+CM+"$"),IM=["material","materials","bones","map"],td=class{constructor(e,t,n){let r=n||an.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=n.length;r!==s;++r)n[r].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},an=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(wM,"")}static parseTrackName(e){let t=PM.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){let s=n.nodeName.substring(r+1);IM.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(s){for(let o=0;o<s.length;o++){let a=s[o];if(a.name===t||a.uuid===t)return a;let c=n(a.children);if(c)return c}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,r=t.propertyName,s=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let o=e[r];if(o===void 0){let l=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+r+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=r;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};an.Composite=td;an.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};an.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};an.prototype.GetterByBindingType=[an.prototype._getValue_direct,an.prototype._getValue_array,an.prototype._getValue_arrayElement,an.prototype._getValue_toArray];an.prototype.SetterByBindingTypeAndVersioning=[[an.prototype._setValue_direct,an.prototype._setValue_direct_setNeedsUpdate,an.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[an.prototype._setValue_array,an.prototype._setValue_array_setNeedsUpdate,an.prototype._setValue_array_setMatrixWorldNeedsUpdate],[an.prototype._setValue_arrayElement,an.prototype._setValue_arrayElement_setNeedsUpdate,an.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[an.prototype._setValue_fromArray,an.prototype._setValue_fromArray_setNeedsUpdate,an.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var CE=new Float32Array(1);var Wp=new Rt,ma=class{constructor(e,t,n=0,r=1/0){this.ray=new ra(e,t),this.near=n,this.far=r,this.camera=null,this.layers=new sa,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Wp.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Wp),this}intersectObject(e,t=!0,n=[]){return nd(e,this,n,t),n.sort(Xp),n}intersectObjects(e,t=!0,n=[]){for(let r=0,s=e.length;r<s;r++)nd(e[r],this,n,t);return n.sort(Xp),n}};function Xp(i,e){return i.distance-e.distance}function nd(i,e,t,n){let r=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(r=!1),r===!0&&n===!0){let s=i.children;for(let o=0,a=s.length;o<a;o++)nd(s[o],e,t,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"169"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="169");function LM({coarse:i=!1,width:e=1280,cores:t=8,memory:n=8,dpr:r=1}={}){let s=i||e<700||t<=4||n<=4;return Object.freeze({mobile:s,pixelRatio:Math.min(r,s?1.25:1.5),minPixelRatio:Math.min(r,s?.75:1),maxFps:s?30:1/0,shadowSize:s?1024:1536,shadowHz:s?12:24,textureSize:s?256:512,chainSegments:s?16:24,chainRadialSegments:s?4:5,effectsHz:s?24:40,targetFrameMs:s?33.3:22})}var DM=typeof window>"u"?{}:{coarse:matchMedia("(pointer:coarse)").matches,width:innerWidth,cores:navigator.hardwareConcurrency||8,memory:navigator.deviceMemory||8,dpr:devicePixelRatio||1},Ut=LM(DM);function x0(i,{exclude:e=[]}={}){let t=new Set(e),n=new Map,r=new Set,s=new S,o=new S,a=new _t;i.updateWorldMatrix(!0,!0);let c=i.matrixWorld.clone().invert();function l(d){if(!(!d.visible||t.has(d)||d.userData.chargingAction||d.userData.keyAction||Number.isInteger(d.userData.hoistIndex)||Number.isInteger(d.userData.valveIndex))){if(d.isMesh&&!d.isInstancedMesh&&!d.isSkinnedMesh&&!d.children.length){let g=d.geometry,x=d.material,m=g.attributes;if(x&&!Array.isArray(x)&&!x.transparent&&!g.morphAttributes.position&&g.drawRange.start===0&&g.drawRange.count===1/0&&m.position&&Object.keys(m).every(u=>["position","normal","uv"].includes(u))){d.getWorldPosition(s);let u=`${Math.floor(s.x/3)},${Math.floor(s.z/3)}`,E=[x.uuid,d.castShadow,d.receiveShadow,d.renderOrder,Object.keys(m).sort().join(","),u].join("|");n.has(E)||n.set(E,[]),n.get(E).push(d)}}for(let g of d.children)l(g)}}l(i);let h=0,p=0;for(let d of n.values()){if(d.length<3)continue;let g=Object.keys(d[0].geometry.attributes),x=d.reduce((A,O)=>A+O.geometry.attributes.position.count,0),m=d.reduce((A,O)=>A+(O.geometry.index?.count||O.geometry.attributes.position.count),0),u=new Pt,E={};for(let A of g){let O=d[0].geometry.attributes[A].itemSize;E[A]=new Float32Array(x*O),u.setAttribute(A,new hn(E[A],O))}let y=new Uint32Array(m),_=0,P=0;for(let A of d){let O=A.geometry,v=new Rt().multiplyMatrices(c,A.matrixWorld);a.getNormalMatrix(v);for(let V=0;V<O.attributes.position.count;V++)s.fromBufferAttribute(O.attributes.position,V).applyMatrix4(v),s.toArray(E.position,(_+V)*3),E.normal&&(o.fromBufferAttribute(O.attributes.normal,V).applyMatrix3(a).normalize(),o.toArray(E.normal,(_+V)*3)),E.uv&&(E.uv[(_+V)*2]=O.attributes.uv.getX(V),E.uv[(_+V)*2+1]=O.attributes.uv.getY(V));let w=O.index?.count||O.attributes.position.count;for(let V=0;V<w;V++)y[P++]=_+(O.index?O.index.getX(V):V);if(v.determinant()<0)for(let V=P-w;V<P;V+=3){let G=y[V+1];y[V+1]=y[V+2],y[V+2]=G}_+=O.attributes.position.count,r.add(O),A.removeFromParent(),h++}u.setIndex(new hn(y,1)),u.computeBoundingBox(),u.computeBoundingSphere();let T=d[0],R=new dt(u,T.material);R.name="Batched static office scenery",R.castShadow=T.castShadow,R.receiveShadow=T.receiveShadow,R.renderOrder=T.renderOrder,R.matrixAutoUpdate=!1,i.add(R),p++}let f=new Set;i.traverse(d=>{d.geometry&&f.add(d.geometry)});for(let d of r)f.has(d)||d.dispose();return{removed:h,batches:p}}function y0(i){let e=document.createElement("canvas");e.width=256,e.height=128;let t=e.getContext("2d"),n=t.createLinearGradient(0,0,0,128);n.addColorStop(0,"#111812"),n.addColorStop(.48,"#3a4636"),n.addColorStop(1,"#171d12"),t.fillStyle=n,t.fillRect(0,0,256,128),t.fillStyle="#a9b7a3",t.fillRect(78,19,72,3),t.fillStyle="#596e68",t.fillRect(190,38,29,25),t.fillStyle="#435827",t.fillRect(25,64,34,15);let r=new Ot(e);r.colorSpace=xt,r.mapping=ta;let s=new ro(i),o=s.fromEquirectangular(r);return s.dispose(),r.dispose(),o}function v0(i,e){if(!new URLSearchParams(location.search).has("profile"))return{mark(){},frame(){}};let t=document.createElement("output");t.id="performance-report",t.hidden=!0,document.body.append(t);let n=performance.now(),r={},s=[],o=0,a=0,c=0;function l(h){r[h]=Math.round(performance.now()-n)}return{mark:l,frame(h){let p=performance.now();if(o||(o=p-n),a&&(s.push(p-a),s.length>90&&s.shift()),a=p,c++,c===1||c%30===0){let f=0;e.traverse(d=>{d.isMesh&&f++}),t.textContent=JSON.stringify({firstFrameMs:Math.round(o),stages:r,frameMs:s.length?Math.round(s.reduce((d,g)=>d+g,0)/s.length*10)/10:0,renderCpuMs:Math.round((p-h)*10)/10,frames:c,calls:i.info.render.calls,triangles:i.info.render.triangles,geometries:i.info.memory.geometries,textures:i.info.memory.textures,meshes:f,pixelRatio:i.getPixelRatio()})}}}}function _0(i){let n=[],r=new Map,s=0,o=new bt(.735,.41);function a(){let p=document.createElement("canvas");return p.width=1024,p.height=576,[p,p.getContext("2d")]}function c(p,f=!0){let d=new Ot(p);return f&&(d.colorSpace=xt),d.anisotropy=Math.min(8,i.capabilities.getMaxAnisotropy()),d}function l(p,f){let d=13817+f*7319+(p==="hole"?20001:p==="live"?481:0),g=()=>(d=d*1664525+1013904223>>>0,d/4294967296),x=(N,j)=>N+(j-N)*g(),[m,u]=a(),[E,y]=a(),[_,P]=a(),[T,R]=a();u.fillStyle="#080d10",u.fillRect(0,0,1024,576),P.fillStyle="#545454",P.fillRect(0,0,1024,576),R.fillStyle="#777",R.fillRect(0,0,1024,576);let A=p==="live"||p==="cracked"&&f%2===0,O=u.createLinearGradient(0,0,1024,576);if(O.addColorStop(0,"#1b262a"),O.addColorStop(.45,"#0b1217"),O.addColorStop(1,"#040709"),u.fillStyle=O,u.fillRect(0,0,1024,576),A){u.fillStyle="#253438",u.fillRect(0,0,1024,27),u.fillRect(0,27,150,576);for(let N=0;N<28;N++){let j=174;for(let ne=0;ne<x(3,10);ne++){u.fillStyle=["#365b51","#47615d","#354847"][Math.floor(g()*3)];let ee=x(9,93);u.fillRect(j,53+N*17,ee,2),j+=ee+x(5,15)}}for(let N=0;N<576;N+=3)u.fillStyle="rgba(0,0,0,.18)",u.fillRect(0,N,1024,1)}let v={x:x(1024*.2,1024*.78),y:x(576*.22,576*.78)};function w(N,j,ne,ee,F=0,se=0){j.strokeStyle=ne,j.lineWidth=ee,j.beginPath(),N.forEach(([q,k],Z)=>Z?j.lineTo(q+F,k+se):j.moveTo(q+F,k+se)),j.stroke()}function V(N,j=1){w(N,y,"rgba(0,3,6,.86)",j*1.9),w(N,y,`rgba(185,212,216,${x(.45,.9)})`,j*.7,-.7,.35),g()<.3&&w(N,y,"rgba(113,153,163,.35)",.5,.75,-.35),w(N,R,"#242424",j*1.6),w(N,R,"#bfbfbf",j*.7,-.7,.35),w(N,P,"#b9b9b9",j*1.5)}let G=[];if(p!=="live"){let ee=function(q,k,Z=1){u.fillStyle=k,u.beginPath(),q.forEach(([xe,Se],ge)=>{xe=v.x+(xe-v.x)*Z,Se=v.y+(Se-v.y)*Z,ge?u.lineTo(xe,Se):u.moveTo(xe,Se)}),u.closePath(),u.fill()},N=[],j=p==="hole"?x(68,107):x(42,78),ne=j*x(.42,.75);for(let q=0;q<72;q++){let k=q/72*Math.PI*2,Z=1+.13*Math.sin(k*5+f)+.07*Math.sin(k*13);N.push([v.x+Math.cos(k)*j*Z,v.y+Math.sin(k)*ne*Z])}for(let[q,k]of[[1.18,"rgba(56,39,73,.46)"],[1.1,"rgba(36,72,74,.55)"],[1.05,"#151c2a"],[1,"#010204"]])ee(N,k,q);if(A||p==="hole"&&f===1){for(let Z=0;Z<61;Z++){let xe=v.x+x(-j*1.7,j*1.7),Se=Z%3?0:v.y,ge=Z%3?v.y:576;u.fillStyle=["rgba(85,129,115,.65)","rgba(130,62,94,.6)","rgba(70,103,146,.60)","rgba(172,177,161,.48)"][Z%4],u.fillRect(xe,Se,x(.4,2),ge-Se)}let q=v.x+j*.4,k=x(35,108);u.fillStyle="rgba(130,151,153,.23)",u.fillRect(q,0,k,v.y);for(let Z=0;Z<v.y;Z+=3)u.fillStyle=`rgba(15,28,32,${x(.15,.65)})`,u.fillRect(q,Z,k,1);for(let Z=0;Z<9;Z++)u.fillStyle=Z%3?"rgba(2,5,8,.85)":"rgba(129,156,153,.45)",u.fillRect(0,v.y+x(-15,18),1024,x(.5,2.4));ee(N,"#010204",.98)}let F=12+f%4,se=Array.from({length:F},(q,k)=>k/F*Math.PI*2+x(-.11,.11));for(let q of se){let k=[[v.x+Math.cos(q)*3,v.y+Math.sin(q)*3]],Z=x(7,13);for(;Z<1300;){let xe=x(-.021,.021),Se=v.x+Math.cos(q+xe)*Z,ge=v.y+Math.sin(q+xe)*Z;if(k.push([Se,ge]),Z+=x(16,47),Se<0||Se>1024||ge<0||ge>576)break}V(k,x(.55,1.2));for(let xe=2;xe<k.length-1;xe++)if(g()<.33){let[Se,ge]=k[xe],re=g()<.5?-1:1,L=q+re*x(.18,.65),ye=x(28,145),Ae=[[Se,ge]];for(let _e=1;_e<=5;_e++)Ae.push([Se+Math.cos(L)*ye*_e/5+x(-3,3),ge+Math.sin(L)*ye*_e/5+x(-3,3)]);V(Ae,x(.3,.64))}}for(let q of[18,35,61,101,155])for(let k=0;k<F;k++){if(g()<.28||q>70&&g()<.45)continue;let Z=se[k],xe=k===F-1?se[0]+Math.PI*2:se[k+1],Se=q*x(.8,1.12),ge=[];for(let re=0;re<=4;re++){let L=Z+(xe-Z)*re/4;ge.push([v.x+Math.cos(L)*Se+x(-3,3),v.y+Math.sin(L)*Se*.84+x(-2,2)])}V(ge,x(.35,.75))}for(let q=0;q<90;q++){let k=g()*Math.PI*2,Z=x(2,25),xe=v.x+Math.cos(k)*Z,Se=v.y+Math.sin(k)*Z*.7;V([[xe,Se],[xe+x(-6,6),Se+x(-5,5)]],x(.3,.8))}if(p==="hole")for(let q=0;q<7;q++){let k=q/7*Math.PI*2,Z=x(8,26),xe=v.x+Math.cos(k)*Z,Se=v.y+Math.sin(k)*Z*.7,ge=[[xe,Se],[xe+x(4,11),Se+x(-6,2)],[xe+x(-3,5),Se+x(4,13)]];G.push(ge),u.fillStyle="#000102",u.beginPath(),ge.forEach(([re,L],ye)=>ye?u.lineTo(re,L):u.moveTo(re,L)),u.closePath(),u.fill(),V([...ge,ge[0]],1)}}for(let N=0;N<35;N++){let j=g()*1024,ne=g()*576,ee=x(20,115),F=P.createRadialGradient(j,ne,0,j,ne,ee);F.addColorStop(0,"rgba(205,205,205,.20)"),F.addColorStop(1,"rgba(160,160,160,0)"),P.fillStyle=F,P.fillRect(j-ee,ne-ee,ee*2,ee*2)}for(let N=0;N<3800;N++){let j=g()*1024,ne=g()*576;P.fillStyle=`rgba(230,230,230,${x(.06,.4)})`,P.fillRect(j,ne,x(.4,1.3),x(.4,1.1)),N%9===0&&(y.fillStyle="rgba(135,149,146,.13)",y.fillRect(j,ne,.65,.65))}for(let N=0;N<70;N++){let j=g()*1024,ne=g()*576;w([[j,ne],[j+x(3,31),ne+x(-8,8)]],P,"rgba(189,189,189,.35)",.7)}y.strokeStyle="rgba(89,93,83,.50)",y.lineWidth=2.4,y.strokeRect(1,1,1022,574);let z=c(m),H=c(_,!1),Q=c(T,!1),le=new Ve({map:z,roughness:.62,metalness:0,emissiveMap:z,emissive:16777215,emissiveIntensity:p==="live"?.52:A?.28:.025}),ie=new Xt({color:10137267,metalness:.08,roughness:.36,roughnessMap:H,bumpMap:Q,bumpScale:38e-5,transparent:!0,opacity:.27,depthWrite:!1,clearcoat:1,clearcoatRoughness:.19,clearcoatRoughnessMap:H,ior:1.52,envMapIntensity:.85,side:nr});n.push(ie);let fe=new Ve({map:c(E),transparent:!0,depthWrite:!1,roughness:.38,metalness:.12,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1});return{lcdMaterial:le,glass:ie,cracksMaterial:fe,holes:G}}function h(p,f){let d=s++%3,g=`${f}-${d}`;r.has(g)||r.set(g,l(f,d));let x=r.get(g);for(let[m,u,E]of[[x.lcdMaterial,.019,"Damaged liquid-crystal panel"],[x.glass,.0205,"Reflective laminated screen glass"],[x.cracksMaterial,.0213,"Fine branching glass fractures"]]){let y=new dt(o,m);y.position.set(0,.381,u),y.name=E,y.castShadow=!1,y.receiveShadow=!0,p.add(y)}for(let m of x.holes){let u=m.flatMap(([_,P],T)=>[(_/1024-.5)*.735,(.5-P/576)*.41+.381,.0215+(T===1?.0018:0)]),E=new Pt;E.setAttribute("position",new lt(u,3)),E.computeVertexNormals();let y=new dt(E,x.glass);y.castShadow=!1,p.add(y)}}return{add:h,setEnvironment(p){for(let f of n)f.envMap=p,f.needsUpdate=!0}}}var cl=(i,e=0,t=1)=>Math.min(t,Math.max(e,i)),vr=i=>(i=cl(i),i*i*(3-2*i));function ol(i,e){let t=Math.imul(i,374761393)+Math.imul(e,668265263);return t=Math.imul(t^t>>>13,1274126177),((t^t>>>16)>>>0)/4294967295}function yi(i,e){let t=Math.floor(i),n=Math.floor(e),r=vr(i-t),s=vr(e-n);return Ge.lerp(Ge.lerp(ol(t,n),ol(t+1,n),r),Ge.lerp(ol(t,n+1),ol(t+1,n+1),r),s)}function al(i,e){return yi(i*5,e*5)*.48+yi(i*17+3,e*17)*.29+yi(i*61,e*61+9)*.15+yi(i*187,e*187)*.08}function uo(i,e=Ut.textureSize,t=!1){let n=new Uint8Array(e*e*4);for(let s=0;s<e;s++)for(let o=0;o<e;o++){let a=i(o/e,s/e,o,s),c=(s*e+o)*4;for(let l=0;l<4;l++)n[c+l]=Math.round(cl(a[l]??1)*255)}let r=new rr(n,e,e,xi);return r.wrapS=r.wrapT=cs,r.magFilter=pn,r.minFilter=Wi,r.generateMipmaps=!0,r.anisotropy=4,t&&(r.colorSpace=xt),r.needsUpdate=!0,r}var vd;function ci(i=16777215){if(!vd){let e=(c,l)=>{let h=al(c,l),p=yi(c*48,l*3),f=vr((h+p*.13-.51)*9),d=vr((yi(c*150,l*150)-.64)*8);return{n:h,rust:f,pit:d}},t=new Float32Array(Ut.textureSize*Ut.textureSize*3),n=uo((c,l,h,p)=>{let{n:f,rust:d,pit:g}=e(c,l),x=Math.pow(yi(c*4,l*260),18)*.24,m=(p*Ut.textureSize+h)*3;return t[m]=.45+d*.21+f*.18-g*.25,t[m+1]=.35+d*.57+g*.07,t[m+2]=.88-d*.86,[.39+f*.34,.42+f*.34,.39+f*.32].map((u,E)=>Ge.lerp(u,[.35+f*.3,.12+f*.19,.045+f*.1][E],d)-g*.1+x)},Ut.textureSize,!0),r=uo((c,l,h,p)=>{let f=(p*Ut.textureSize+h)*3;return[t[f],t[f+1],t[f+2]]});vd={map:n,roughnessMap:r,metalnessMap:r,bumpMap:r}}return new Ve({color:i,...vd,roughness:1,metalness:1,bumpScale:.0035,envMapIntensity:.7})}function M0(){let i=(x,m)=>{let u=al(x+3,m+2),E=yi(x*70,m*2.3)*yi(x*19,m*6),y=yi(x*170,m*190),_=(1-vr(m/.23))*.78,P=vr((m-.86)/.14)*.34,T=Math.exp(-(((m-.844)*75)**2))*(.2+yi(x*38,1)*.8),R=cl(_+P+T*.52+vr((u-.49)*7)*.45+E*.2),A=vr((u-.37)*4)*.7;return{dirt:R,fog:A,runs:E,scale:y,tide:T}},e=new Float32Array(Ut.textureSize*Ut.textureSize*2),t=uo((x,m,u,E)=>{let{dirt:y,fog:_,runs:P,scale:T,tide:R}=i(x,m),A=Math.pow(yi(x*105,m*69),12)*.65,O=(E*Ut.textureSize+u)*2;return e[O]=.4+y*.1+P*.09+T*.025+A,e[O+1]=.08+_*.36+y*.43+P*.1,[.59-y*.3,.63-y*.3,.48-y*.3,cl(.03+_*.23+y*.55+R*.12+T*.025)]},Ut.textureSize,!0),n=uo((x,m,u,E)=>{let y=(E*Ut.textureSize+u)*2;return[e[y],e[y+1],0]}),r=n,s=new Xt({color:14542029,roughness:.7,roughnessMap:r,metalness:0,transparent:!0,opacity:.17,depthWrite:!1,clearcoat:1,clearcoatRoughness:.14,bumpMap:n,bumpScale:.003,side:Dt,envMapIntensity:.85}),o=new Ve({map:t,roughness:.9,bumpMap:n,bumpScale:.002,transparent:!0,depthWrite:!1,side:Dt}),a=uo((x,m)=>{let u=al(x+11,m+7),E=yi(x*12,m*9);return[.11+u*.19,.24+u*.35,.026+E*.08]},Ut.textureSize/2,!0),c=uo((x,m)=>{let u=al(x+5,m+3),E=vr(m);return[.1+u*.12+E*.06,.17+u*.22+E*.12,.025+u*.055,.93-E*.43]},Ut.textureSize/2,!0),l=new Xt({map:c,color:13228945,roughness:.26,transparent:!0,opacity:.76,depthWrite:!1,side:Dt,emissive:1981189,emissiveIntensity:.48,envMapIntensity:.35}),h=new Xt({map:a,color:16777215,roughness:.17,metalness:0,ior:1.333,clearcoat:1,clearcoatRoughness:.12,side:Dt,emissive:2374407,emissiveIntensity:.3,envMapIntensity:1.15}),p={value:0};h.onBeforeCompile=x=>{x.uniforms.waterTime=p,x.fragmentShader=`uniform float waterTime;
`+x.fragmentShader,x.fragmentShader=x.fragmentShader.replace("#include <map_fragment>",`#ifdef USE_MAP
 vec2 flowUv=vMapUv+vec2(sin(vMapUv.y*10.0+waterTime*.17),cos(vMapUv.x*9.0-waterTime*.13))*.025;
 diffuseColor*=texture2D(map,flowUv);
 #endif`)},h.customProgramCacheKey=()=>"slow-water-currents-v1";let f=new Ve({color:9546090,roughness:.79,transparent:!0,opacity:.75,depthWrite:!1,emissive:2503177,emissiveIntensity:.12}),d=new Xt({color:13097881,roughness:.07,metalness:0,transparent:!0,opacity:.23,depthWrite:!1,clearcoat:1,clearcoatRoughness:.04,envMapIntensity:1.25}),g=new yt({color:12505482,transparent:!0,opacity:.18,depthWrite:!1,side:Dt});return{glass:s,haze:o,fluid:l,liquidTop:h,foam:f,bubble:d,ripple:g,waterTime:p}}var UM=i=>Math.max(0,Math.min(1,i)),Md=i=>{let e=UM(i);return e*e*(3-2*e)};function _d(i,e,t,n,r){if(i<e)return 0;let s=i-e;return s<t?Md(s/t):s<t+n?1:1-Md((s-t-n)/r)}var HM=[{at:5,head:-.32,eye:-.52,pitch:.035,hold:1.7},{at:17.4,head:.36,eye:.55,pitch:-.065,hold:2.1},{at:31.1,head:-.23,eye:-.4,pitch:-.1,hold:1.3}];function E0(i,e=!1,t={}){if(t.headYaw=0,t.gazeYaw=0,t.gazePitch=0,e||i<0)return t;let n=i%43.7;for(let r of HM){let s=_d(n,r.at,.24,r.hold+1,.65),o=_d(n,r.at+.38,.95,r.hold,1.25);t.headYaw+=r.head*o,t.gazeYaw+=r.eye*s,t.gazePitch+=r.pitch*s}return t.gazePitch-=.12*_d(n,25.2,.22,.8,.5),t}function S0(i,e,t,n,r=!1,s={}){let o=Md((e-1.08)/.42),a=1.1+n*.055,c=r?0:o*.105*(Math.sin(i*a+n)+.12*Math.sin(i*.47+n*.6))/1.12,l=t-.1-e;return s.angle=c,s.x=Math.sin(c)*l,s.y=t-.1-Math.cos(c)*l,s.hookX=s.x-Math.sin(c)*.52,s.hookY=s.y+Math.cos(c)*.52,s}var ll;function NM(){if(ll)return ll;let i=128,e=new Uint8Array(i*i*4),t=new Uint8Array(i*i*4),n=8817,r=()=>(n=n*1664525+1013904223>>>0,n/4294967296);for(let a=0;a<i;a++)for(let c=0;c<i;c++){let l=(a*i+c)*4,h=r(),p=Math.max(0,Math.sin(c*.056+Math.sin(a*.05)*2)*Math.cos(a*.041)-.15),f=h>.965?.22:0;e[l]=223-p*67-h*16-f*140,e[l+1]=219-p*49-h*15-f*130,e[l+2]=186-p*72-h*17-f*130,e[l+3]=255,t[l]=t[l+1]=t[l+2]=145+h*24-f*255,t[l+3]=255}let s=new rr(e,i,i),o=new rr(t,i,i);for(let a of[s,o])a.wrapS=a.wrapT=cs,a.magFilter=pn,a.minFilter=Wi,a.generateMipmaps=!0,a.needsUpdate=!0;return s.colorSpace=xt,ll=new Ve({map:s,bumpMap:o,bumpScale:.0011,color:16052183,roughness:.72,emissive:12563852,emissiveIntensity:.28}),ll}var FM=new Kt(1,20,14),xa=new Ve({color:1580302,roughness:1});function li(i,e,t=NM()){let n=new dt(i,t);return n.castShadow=!0,n.receiveShadow=!0,e.add(n),n}function Ai(i,e,t,n){let r=li(FM,i,n);return r.position.set(...e),r.scale.set(...t),r}function Ri(i,e,t=.012){return li(new un(new $t(e.map(n=>new S(...n))),32,t,8,!1),i)}function hl(i,e,t,n=.012){let r=new S(...e),s=new S(...t),o=s.clone().sub(r),a=li(new Bt(n*.82,n,o.length(),10),i);return a.position.copy(r).add(s).multiplyScalar(.5),a.quaternion.setFromUnitVectors(new S(0,1,0),o.normalize()),a}function Ed(i=!1){let e=new we;e.name=i?"Slender forearm bone":"Worn femur";let t=[[0,-.161],[.023,-.16],[.028,-.13],[.019,-.1],[.014,-.04],[.015,.025],[.019,.085],[.028,.122],[.026,.145],[0,.155]],n=new zr(t.map(s=>new Fe(s[0]*(i?.62:1),s[1])),20),r=n.attributes.position;for(let s=0;s<r.count;s++)r.setX(s,r.getX(s)+.009*Math.sin((r.getY(s)+.16)*Math.PI/.315));return n.computeVertexNormals(),li(n,e),Ai(e,[.022,.14,0],[.043,.038,.039]),Ai(e,[-.015,-.147,.002],[.028,.03,.034]),Ai(e,[.02,-.15,-.002],[.029,.032,.032]),i&&e.scale.set(.75,1,.8),e}function w0(){let i=new we;i.name="Curved rib fragment";let e=[];for(let t=0;t<=20;t++){let n=-.85+t/20*2.9;e.push([Math.cos(n)*.123-.018,Math.sin(n)*.123,.018*Math.sin(n*1.3)])}return Ri(i,e),Ai(i,e[0],[.017,.015,.018]),i}function b0(){let i=new we;i.name="Detached jaw with uneven teeth",Ri(i,[[-.088,.045,-.035],[-.08,-.025,.035],[-.043,-.05,.071],[0,-.054,.082],[.043,-.05,.071],[.08,-.025,.035],[.088,.045,-.035]],.013);for(let e=0;e<8;e++){let t=(e-3.5)*.017,n=.078-Math.abs(t)*.3,r=li(new wt(.013,.02+e%3*.002,.013),i);r.position.set(t,-.041,n),r.rotation.y=-t*3}return i}function OM(){let i=new we;i.name="Goofy buck-toothed skull with wonky eye sockets";let e=new Tt;e.moveTo(-.076,-.061),e.quadraticCurveTo(-.133,-.035,-.121,.067),e.bezierCurveTo(-.119,.171,.123,.165,.12,.06),e.quadraticCurveTo(.136,-.029,.077,-.061),e.lineTo(.047,-.071),e.lineTo(-.047,-.073),e.closePath();for(let[s,o,a,c,l]of[[-.052,.019,.039,.043,-.2],[.052,.011,.033,.035,.18]]){let h=new bi;h.absellipse(s,o,a,c,0,Math.PI*2,!0,l),e.holes.push(h)}let t=new bi;t.moveTo(.001,-.026),t.lineTo(-.012,-.05),t.quadraticCurveTo(.001,-.045,.013,-.05),t.closePath(),e.holes.push(t);let n=li(new sn(e,{depth:.022,bevelEnabled:!0,bevelSize:.004,bevelThickness:.004,bevelSegments:2,steps:1,curveSegments:20}),i);n.position.z=.043,Ai(i,[0,.04,-.055],[.12,.121,.077]),Ai(i,[0,.012,.027],[.109,.093,.01],xa);for(let s of[-1,1])Ai(i,[s*.093,-.042,.047],[.028,.022,.025]);for(let[s,o,a,c,l]of[[-.019,-.084,.028,.042,-.11],[.017,-.08,.027,.036,.17],[-.06,-.073,.014,.018,-.28],[.06,-.071,.012,.015,.23]]){let h=li(new wt(a,c,.018),i);h.position.set(s,o,.064),h.rotation.z=l}let r=new we;r.name="Lopsided cartoon jaw",r.position.set(.004,-.071,-.003),r.rotation.z=-.12,i.add(r),Ri(r,[[-.087,.04,-.025],[-.083,-.025,.037],[-.047,-.053,.071],[0,-.056,.079],[.051,-.048,.068],[.085,-.022,.033],[.087,.04,-.025]],.014);for(let[s,o]of[[-.052,-.04],[.038,-.041],[.057,-.036]]){let a=li(new wt(.015,.016,.015),r);a.position.set(s,o,.071),a.rotation.z=s*3}return Ri(i,[[-.009,.154,-.016],[.003,.15,.003],[-.004,.141,.025],[.005,.126,.042]],.0016).material=xa,i}function Sd(){let i=new we;i.name="Short articulated spine";for(let e=0;e<6;e++){let t=(e-2.5)*.038,n=.01*Math.sin(e*.7);Ai(i,[0,t,n],[.025,.016,.02]);for(let r of[-1,1])hl(i,[r*.012,t,n],[r*.045,t-.009,n-.008],.007);hl(i,[0,t,n],[0,t+.008,n-.043],.006)}return i}function T0(){let i=new we;i.name="Broken rib cage",i.add(Sd());for(let e=0;e<5;e++)for(let t of[-1,1]){if(e===4&&t===1)continue;let n=.08-e*.043,r=.08+Math.sin(e/5*Math.PI)*.038;Ri(i,[[0,n,-.02],[t*r*.65,n+.018,-.045],[t*r,n-.004,.008],[t*r*.82,n-.031,.065],[t*.018,n-.044,.08]],.0085)}return hl(i,[0,.06,.081],[0,-.12,.079],.01),i}function zM(i){let e=i===0,t=new we;t.name=e?"Pudding-shaped skull with bony party hat":"Sushi-shaped skull with bony beanie";let n=new Tt;if(e)n.moveTo(-.3,-.27),n.bezierCurveTo(-.42,-.19,-.38,.12,-.29,.24),n.quadraticCurveTo(0,.34,.29,.24),n.bezierCurveTo(.38,.12,.42,-.19,.3,-.27),n.quadraticCurveTo(0,-.34,-.3,-.27);else{n.moveTo(-.31,-.225),n.quadraticCurveTo(-.39,-.16,-.34,-.025),n.lineTo(-.41,.17),n.quadraticCurveTo(-.4,.22,-.21,.29),n.quadraticCurveTo(0,.33,.21,.29),n.quadraticCurveTo(.4,.22,.41,.17),n.lineTo(.34,-.025),n.quadraticCurveTo(.39,-.16,.31,-.225);for(let l=7;l>=0;l--){let h=-.31+l*.0775;n.quadraticCurveTo(h+.038,-.285,h,-.225)}}n.closePath();let r=e?.015:-.055,s=e?.13:.14;for(let l of[-1,1]){let h=new bi;h.absellipse(l*s,r,.07,l<0?.065:.057,0,Math.PI*2,!0,l*.18),n.holes.push(h)}let o=new bi;o.moveTo(0,r-.037),o.lineTo(-.023,r-.083),o.quadraticCurveTo(0,r-.075,.023,r-.083),o.closePath(),n.holes.push(o);let a=new bi;a.absellipse(0,e?-.19:-.192,e?.208:.227,e?.064:.042,0,Math.PI*2,!0),n.holes.push(a);let c=li(new sn(n,{depth:.055,bevelEnabled:!0,bevelSize:.008,bevelThickness:.008,bevelSegments:3,curveSegments:24}),t);c.position.z=.135,Ai(t,[0,.012,-.035],[e?.355:.37,.235,.16]),Ai(t,[0,-.025,.126],[.325,.265,.008],xa);for(let l=0;l<7;l++){if(l===1||l===5)continue;let h=li(new wt(.039,l%2?.037:.05,.035),t);h.position.set((l-3)*.053,e?-.147:-.169,.175),h.rotation.z=(l%3-1)*.12}if(e){Ri(t,[[-.3,.19,.19],[-.24,.13,.2],[-.18,.195,.21],[-.11,.095,.21],[-.045,.17,.21],[.025,.085,.21],[.09,.17,.21],[.16,.105,.21],[.23,.19,.2],[.3,.15,.19]],.015);let l=new we;l.name="Ivory party-hat crest",l.position.set(.02,.285,0),l.rotation.z=-.12,t.add(l);let h=li(new Br(.123,.3,32),l);h.position.y=.15;let p=li(new Qt(.12,.012,8,32),l);p.rotation.x=Math.PI/2;for(let f=0;f<5;f++){let d=f/5*Math.PI*2;Ri(l,[[Math.cos(d)*.12,.005,Math.sin(d)*.12],[Math.cos(d)*.065,.15,Math.sin(d)*.065],[0,.3,0]],.004)}Ai(l,[0,.314,0],[.028,.03,.028]),Ri(t,[[-.2,.27,.15],[-.18,.23,.195],[-.205,.2,.2],[-.18,.17,.2]],.0025).material=xa}else{for(let f of[-1,1])Ri(t,[[f*.115,.027,.197],[f*.12,.16,.198],[f*.13,.292,.16]],.0035).material=xa;Ri(t,[[-.37,.01,.17],[-.2,.036,.199],[0,.048,.2],[.2,.036,.199],[.37,.01,.17]],.012);let l=new we;l.name="Ribbed ivory beanie crest",l.position.y=.3,t.add(l),li(new Kt(1,32,16,0,Math.PI*2,0,Math.PI/2),l).scale.set(.235,.235,.2);let p=li(new Qt(.238,.02,10,40),l);p.rotation.x=Math.PI/2,p.scale.y=.86;for(let f=0;f<10;f++){let d=f/10*Math.PI*2,g=[];for(let x=0;x<=8;x++){let m=x/8*Math.PI/2;g.push([Math.cos(d)*.238*Math.cos(m),.237*Math.sin(m),Math.sin(d)*.203*Math.cos(m)])}Ri(l,g,.006)}}return t}function R0(i){let e=new we;if(e.name=["Pudding Figpal skeleton","Sushi Figpal skeleton","Pufferfish skeleton"][i],i===2){let t=OM();t.scale.set(1.25,1.35,1.05),t.position.set(-.16,.035,.055),e.add(t);for(let n=0;n<7;n++){let r=-.05+n*.055;if(Ai(e,[r,0,0],[.028,.021,.02]),n<5)for(let s of[-1,1])Ri(e,[[r,0,0],[r+.026,s*.09,-.01],[r+.014,s*(.22-n*.023),.015]],.01)}for(let n of[-.16,-.08,0,.08,.16])hl(e,[.29,0,0],[.47,n,0],.009)}else e.add(zM(i));return e}var BM=[[{kind:"femur",x:.14,y:.46,z:.15,tilt:1.1,yaw:-.3,scale:.9}],[{kind:"ribs",x:.02,y:.4,z:.1,tilt:.3,yaw:-.2,scale:.78},{kind:"spine",x:-.16,y:.4,z:-.08,tilt:-.5,yaw:.4,scale:.75},{kind:"rib",x:.16,y:.34,z:.17,tilt:.9,yaw:-.4,scale:.64}],[{kind:"forearm",x:-.13,y:.42,z:.16,tilt:-.68,yaw:.2,scale:.88},{kind:"jaw",x:.09,y:.32,z:.16,tilt:-.18,yaw:.6,scale:1.04}]],kM={femur:Ed,forearm:()=>Ed(!0),rib:w0,ribs:T0,spine:Sd,jaw:b0};function A0(i){let e=new we;e.name=`Bones floating in canister ${i+1}`;let t=BM[i].map((r,s)=>{let o=kM[r.kind]();return o.scale.multiplyScalar(r.scale),e.add(o),{...r,object:o,phase:i*1.91+s*2.3}});function n(r,s=!1){let o=s?0:r;for(let a of t){let c=a.phase,l=.022,h=.46;a.object.position.set(a.x+l*Math.sin(o*.27+c),a.y+.014*Math.sin(o*.57+c),a.z+.018*Math.cos(o*.23+c)),a.object.rotation.set(.1*Math.sin(o*.19+c),a.yaw+h*Math.sin(o*.17+c),a.tilt+.11*Math.sin(o*.31+c),"YXZ")}}return n(0),{group:e,update:n}}function C0(i,e){let t=R0(e);t.position.copy(i.position),t.quaternion.copy(i.quaternion),t.scale.copy(i.scale),i.parent.add(t),i.updateWorldMatrix(!0,!0);let n=i.matrixWorld.clone().invert(),r=new Dn,s=new Dn;i.traverse(g=>{g.isMesh&&(g.geometry.computeBoundingBox(),s.copy(g.geometry.boundingBox).applyMatrix4(new Rt().multiplyMatrices(n,g.matrixWorld)),r.union(s))});let o=new wi,a=new wi;function c(g,x){let m=new Map;g.traverse(u=>{if(!u.isMesh)return;let E=y=>{if(!m.has(y)){let _=y.clone();_.onBeforeCompile=y.onBeforeCompile,_.customProgramCacheKey=y.customProgramCacheKey,_.clippingPlanes=[x],_.clipShadows=!0,m.set(y,_)}return m.get(y)};u.material=Array.isArray(u.material)?u.material.map(E):E(u.material)})}c(i,o),c(t,a);let l=r.min.y-.04,h=!1,p=new S;function f(g){i.updateWorldMatrix(!0,!1),p.setFromMatrixPosition(i.matrixWorld),p.y=g,i.worldToLocal(p),l=Math.max(l,Math.min(r.max.y+.04,p.y)),o.set(new S(0,1,0),-l).applyMatrix4(i.matrixWorld),a.copy(o).negate(),h=l>=r.max.y+.015,i.visible=!h,t.visible=l>r.min.y}f(-100);function d(){l=r.min.y-.04,h=!1,f(-100)}return{skeleton:t,update:f,reset:d,get transformed(){return h},get cutHeight(){return l}}}function P0(){let i=new ao().load(new URL("./assets/open-to-work.png",import.meta.url).href);i.colorSpace=xt,i.anisotropy=4;let e=new Ve({map:i,transparent:!0,alphaTest:.025,depthWrite:!1,roughness:.86,metalness:0,emissiveMap:i,emissive:16777215,emissiveIntensity:.18}),t=new bt(.78,.78,48,2),n=t.attributes.position;for(let r=0;r<n.count;r++)n.setZ(r,Math.sqrt(.49**2-n.getX(r)**2));return t.computeVertexNormals(),t.computeBoundingSphere(),()=>{let r=new dt(t,e);return r.name="#OPENTOWORK decal on curved tank glass",r.position.y=.7,r.renderOrder=8,r}}function I0(){let i=new we;i.name="Three suspended Figpals over bubbling green canisters";let e=Math.PI*2,t=193108,n=()=>(t=t*1664525+1013904223>>>0,t/4294967296),r=(K,me=.78,Pe=.005)=>new Ve({color:K,roughness:me,emissive:K,emissiveIntensity:Pe}),s=r(1184789,.85,0),o=r(16772534),a=r(16184551),c=r(36072),l=r(15226636),h=r(11022601),p=r(16755746),f=r(16754855),d=r(10214644),g=r(294108),x=r(16765992),m=new yt({color:1053459,side:yn});m.onBeforeCompile=K=>{K.vertexShader=K.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
transformed += normal * 0.009;`)},m.customProgramCacheKey=()=>"figpal-outline-v1";function u(K,me,Pe=i,Ce=!1){let be=new dt(K,me);if(be.castShadow=!0,be.receiveShadow=!0,Pe.add(be),Ce){let ue=new dt(K,m);ue.name="Ink outline",be.add(ue)}return be}function E(K,me,Pe,Ce,be=!1){let ue=u(new Kt(1,24,16),Pe,Ce,be);return ue.position.set(...K),ue.scale.set(...me),ue}function y(K,me,Pe,Ce=i){let be=u(new wt(...K),Pe,Ce);return be.position.set(...me),be}function _(K,me,Pe,Ce,be=i,ue=!1){let We=u(new Bt(K,K,me,48,1,ue),Ce,be);return We.position.set(...Pe),We}function P(K,me,Pe,Ce=i){let be=new $t(K.map(ue=>new S(...ue)));return u(new un(be,Math.max(16,K.length*5),me,6,!1),Pe,Ce)}function T(K,me,Pe,Ce,be=i){let ue=new S(...K),We=new S(...me),X=We.clone().sub(ue),Te=_(Pe,X.length(),ue.clone().add(We).multiplyScalar(.5).toArray(),Ce,be);return Te.quaternion.setFromUnitVectors(new S(0,1,0),X.normalize()),Te}function R(K,me,Pe,Ce,be=i){let ue=u(new Qt(K,me,8,64),Ce,be);return ue.rotation.x=Math.PI/2,ue.position.y=Pe,ue}function A(K,me,Pe,Ce,be=.035){let ue=new sn(K,{depth:me-be*2,bevelEnabled:!0,bevelSize:be,bevelThickness:be,bevelSegments:3,steps:1,curveSegments:16});return ue.translate(0,0,-me/2+be),u(ue,Pe,Ce,!0)}function O(K,me,Pe,Ce=.105,be="worried"){let ue=new we;ue.name=`${be} expression`,K.add(ue);for(let We of[-1,1])E([We*Ce,me,Pe],[.022,.031,.013],s,ue),P([[We*(Ce+.035),me+.041,Pe+.004],[We*Ce,me+.055,Pe+.007],[We*(Ce-.035),me+.074,Pe+.007]],.01,s,ue);be==="afraid"?E([0,me-.075,Pe+.003],[.026,.038,.012],s,ue):P([[-.052,me-.091,Pe],[0,me-.06,Pe+.005],[.052,me-.091,Pe]],.012,s,ue)}function v(){let K=new we;K.name="Party-hat pudding Figpal";let me=new Tt;me.moveTo(-.3,-.27),me.bezierCurveTo(-.42,-.19,-.38,.12,-.29,.24),me.quadraticCurveTo(0,.34,.29,.24),me.bezierCurveTo(.38,.12,.42,-.19,.3,-.27),me.quadraticCurveTo(0,-.34,-.3,-.27),A(me,.37,p,K,.035);let Pe=new Tt;Pe.moveTo(-.29,.25),Pe.quadraticCurveTo(0,.34,.29,.25),Pe.lineTo(.3,.13),Pe.quadraticCurveTo(.28,.1,.22,.16),Pe.lineTo(.15,.055),Pe.quadraticCurveTo(.13,.035,.08,.115),Pe.lineTo(.01,.045),Pe.quadraticCurveTo(-.02,.028,-.09,.12),Pe.lineTo(-.17,.065),Pe.quadraticCurveTo(-.2,.05,-.22,.16),Pe.lineTo(-.3,.13),Pe.closePath();let Ce=A(Pe,.025,o,K,.006);Ce.position.z=.191,O(K,-.045,.222);for(let Ee of[-1,1])E([Ee*.24,-.085,.206],[.045,.028,.012],f,K);let be=new we;be.position.set(.02,.285,0),be.rotation.z=-.12,be.scale.setScalar(.6),K.add(be);let ue=document.createElement("canvas");ue.width=512,ue.height=256;let We=ue.getContext("2d");We.fillStyle="#ffd62d",We.fillRect(0,0,512,256),We.fillStyle="#0088ea";for(let Ee=0;Ee<4;Ee++)for(let Ue=0;Ue<7;Ue++)We.beginPath(),We.ellipse(Ue*85+Ee%2*42,30+Ee*67,18,14,0,0,e),We.fill();let X=new Ot(ue);X.colorSpace=xt;let Te=new Ve({map:X,roughness:.82}),oe=u(new Br(.205,.5,48),Te,be,!0);oe.position.y=.25,R(.205,.009,0,s,be),E([0,.515,0],[.042,.045,.041],c,be);for(let Ee=0;Ee<8;Ee++){let Ue=Ee/8*e;T([0,.515,.005],[Math.cos(Ue)*.07,.515+Math.sin(Ue)*.07,.006],.012,c,be)}return{object:K}}function w(){let K=new we;K.name="Orange-beanie sushi Figpal";let me=new Tt;me.moveTo(-.32,-.035),me.quadraticCurveTo(-.38,-.11,-.31,-.2);for(let Te=0;Te<8;Te++){let oe=-.31+Te*.0775;me.quadraticCurveTo(oe+.038,-.285,oe+.0775,-.225)}me.quadraticCurveTo(.39,-.13,.32,-.035),me.quadraticCurveTo(0,.035,-.32,-.035),A(me,.43,a,K,.025);let Pe=new Tt;Pe.moveTo(-.37,-.015),Pe.lineTo(-.41,.17),Pe.quadraticCurveTo(-.4,.22,-.21,.29),Pe.quadraticCurveTo(0,.33,.21,.29),Pe.quadraticCurveTo(.4,.22,.41,.17),Pe.lineTo(.37,-.015),Pe.quadraticCurveTo(0,.055,-.37,-.015),A(Pe,.43,x,K,.022);let Ce=new Tt;Ce.moveTo(-.12,.022),Ce.lineTo(-.13,.31),Ce.quadraticCurveTo(0,.33,.13,.31),Ce.lineTo(.12,.022),Ce.closePath();let be=A(Ce,.44,s,K,.006);be.position.z=.008,O(K,-.1,.253,.1,"afraid");for(let Te=0;Te<16;Te++){let oe=Te/16*e;E([Math.cos(oe)*.29,-.18+Math.sin(oe)*.025,Math.sin(oe)*.17],[.031,.022,.015],a,K)}let ue=new we;ue.position.y=.3,K.add(ue),u(new Kt(1,32,16,0,e,0,Math.PI/2),l,ue,!0).scale.set(.235,.235,.2);for(let Te=0;Te<10;Te++){let oe=Te/10*e,Ee=[];for(let Ue=0;Ue<=14;Ue++){let ze=.08+Ue/14*(Math.PI/2-.08);Ee.push([Math.sin(ze)*Math.cos(oe)*.238,Math.cos(ze)*.237,Math.sin(ze)*Math.sin(oe)*.204])}P(Ee,.006,h,ue)}let X=_(.258,.065,[0,.002,0],l,ue);X.scale.z=.86,R(.26,.009,-.03,s,ue).scale.y=.86,R(.26,.008,.034,s,ue).scale.y=.86;for(let Te=0;Te<30;Te++){let oe=Te/30*e;T([Math.cos(oe)*.259,-.025,Math.sin(oe)*.224],[Math.cos(oe)*.259,.027,Math.sin(oe)*.224],.0045,h,ue)}return{object:K}}function V(){let K=new we;K.name="Propeller-hat pufferfish Figpal",E([0,0,0],[.335,.33,.25],d,K,!0);let me=new Tt;me.moveTo(.26,.03),me.quadraticCurveTo(.34,.06,.4,.16),me.quadraticCurveTo(.49,.23,.5,.06),me.quadraticCurveTo(.51,-.11,.43,-.13),me.lineTo(.33,-.05),me.closePath(),A(me,.11,d,K,.02);for(let ue=0;ue<3;ue++)P([[.38,-.025+ue*.04,.078],[.465,-.075+ue*.085,.078]],.012,g,K);for(let ue of[-1,1]){let We=E([ue*.303,-.02,.13],[.065,.1,.035],d,K,!0);We.rotation.z=ue*.25;for(let X=0;X<3;X++)P([[ue*.3,-.06+X*.04,.168],[ue*.338,-.075+X*.05,.16]],.01,g,K)}O(K,.015,.252,.09,"worried");for(let ue=0;ue<11;ue++){let We=Math.PI*1.03+ue/10*Math.PI*.9,X=Math.cos(We)*.26,Te=Math.sin(We)*.25,oe=.25*Math.sqrt(Math.max(.04,1-(X/.335)**2-(Te/.33)**2))+.008;P([[X,Te,oe],[X+.008,Te-.027,oe]],.011,g,K)}for(let ue=0;ue<7;ue++){let We=.15+ue/6*Math.PI*.88;T([Math.cos(We)*.31,Math.sin(We)*.31,0],[Math.cos(We)*.37,Math.sin(We)*.37,0],.012,g,K)}let Pe=new we;Pe.position.set(0,.275,0),K.add(Pe);let Ce=[r(15746581),x,r(4802281),x];for(let ue=0;ue<4;ue++)u(new Kt(1,12,12,ue*e/4,e/4,0,Math.PI/2),Ce[ue],Pe).scale.set(.215,.2,.215);R(.218,.011,0,s,Pe),T([0,.2,0],[0,.27,0],.012,a,Pe);let be=new we;be.position.y=.275,Pe.add(be),E([0,0,0],[.025,.018,.025],a,be);for(let ue of[-1,1])E([ue*.066,0,0],[.083,.012,.029],a,be);return{object:K,propeller:be}}let G=ci(14802384),z=ci(9606540),H=ci(15065300),Q=ci(14012614);Q.bumpScale=7e-4,Q.envMapIntensity=.85;let le=new Ve({color:1382417,roughness:.29,metalness:.08}),ie=[];for(let K=0;K<=12;K++){let me=K/12*Math.PI;ie.push(new S(Math.cos(me)*.015,.01+Math.sin(me)*.015,0))}for(let K=0;K<=12;K++){let me=Math.PI+K/12*Math.PI;ie.push(new S(Math.cos(me)*.015,-.01+Math.sin(me)*.015,0))}let fe=new un(new $t(ie,!0),Ut.chainSegments,.0048,Ut.chainRadialSegments,!0),N=new Mt,j=new S(0,1,0),ne=new ft;function ee(K,me,Pe=null){let Ce=new $t(K.map(Te=>new S(...Te))),be=Ce.getLength(),ue=Pe??Math.max(2,Math.ceil(be/.033)),We=new vn(fe,Q,ue);We.name="Interlocking steel chain links",We.castShadow=!0,We.receiveShadow=!0,We.frustumCulled=!1,me.add(We);for(let Te=0;Te<ue;Te++)We.setColorAt(Te,new pt().setRGB(.67+n()*.3,.58+n()*.3,.45+n()*.34));function X(Te,oe){let Ee=new S(...Te),Ue=new S(...oe),ze=Ue.clone().sub(Ee),ht=ze.length(),It=Math.min(ue,Math.max(2,Math.ceil(ht/.033)));We.count=It,ze.normalize();for(let Ft=0;Ft<It;Ft++)N.position.copy(Ee).lerp(Ue,Ft/(It-1)),N.quaternion.setFromUnitVectors(j,ze),ne.setFromAxisAngle(j,(Ft%2?Math.PI/2:0)+Math.sin(Ft*7.17)*.07),N.quaternion.multiply(ne),N.scale.setScalar(1),N.updateMatrix(),We.setMatrixAt(Ft,N.matrix);We.instanceMatrix.needsUpdate=!0}if(Pe)We.instanceMatrix.setUsage(Un),X(K[0],K.at(-1));else for(let Te=0;Te<ue;Te++){let oe=Te/(ue-1);N.position.copy(Ce.getPointAt(oe)),N.quaternion.setFromUnitVectors(j,Ce.getTangentAt(oe)),ne.setFromAxisAngle(j,(Te%2?Math.PI/2:0)+Math.sin(Te*7.17)*.07),N.quaternion.multiply(ne),N.scale.setScalar(1),N.updateMatrix(),We.setMatrixAt(Te,N.matrix)}return{object:We,setPoints:X}}let F=M0(),se=P0(),{glass:q,haze:k,fluid:Z,liquidTop:xe,foam:Se,bubble:ge,ripple:re,waterTime:L}=F,ye=[],Ae=[],_e=[],Re=[],Le=new Mt,he=[{x:-3.05,z:-1.05,height:2.02,winchY:2.8},{x:-2.85,z:.3,height:1.84,winchY:2.65},{x:-2.15,z:1.45,height:1.6,winchY:2.38}];for(let K=0;K<he.length-1;K++){let me=he[K],Pe=he[K+1];T([me.x,3.065,me.z],[Pe.x,3.065,Pe.z],.052,G)}let D=[v,w,V];for(let K=0;K<3;K++){let{x:me,z:Pe,height:Ce,winchY:be}=he[K],ue=new we;ue.position.set(me,.012,Pe),ue.name=`Green bubbling canister ${K+1}`,i.add(ue),_(.515,.16,[0,.1,0],G,ue),_(.46,.035,[0,.025,0],z,ue);for(let Ne=0;Ne<8;Ne++){let Ze=Ne/8*e;E([Math.cos(Ze)*.49,.15,Math.sin(Ze)*.49],[.022,.022,.022],H,ue)}let We=_(.485,1.02,[0,.72,0],q,ue,!0);We.castShadow=!1,We.renderOrder=6;let X=_(.487,1.02,[0,.72,0],k,ue,!0);X.name="Condensation, mineral streaks and algae tide marks",X.castShadow=!1,X.renderOrder=7,ue.add(se());let Te=_(.444,.865,[0,.64,0],Z,ue,!0);Te.castShadow=!1,Te.renderOrder=2;let oe=A0(K);ue.add(oe.group),_(.444,.018,[0,.215,0],xe,ue);for(let Ne of[.225,1.235])R(.484,.036,Ne,G,ue),R(.454,.01,Ne-.018,z,ue);for(let Ne of[.15,2.24,4.34]){let Ze=Math.cos(Ne)*.485,Sn=Math.sin(Ne)*.485;T([Ze,.22,Sn],[Ze,1.23,Sn],.021,G,ue)}for(let Ne of[-1,1])P([[Ne*.47,.96,0],[Ne*.58,.96,0],[Ne*.58,.74,0],[Ne*.48,.74,0]],.022,G,ue);let Ee=new kr(0,.444,Ut.mobile?32:48,Ut.mobile?6:10);Ee.rotateX(-Math.PI/2);let Ue=u(Ee,xe,ue);Ue.position.y=1.074,Ue.castShadow=!1,Ue.renderOrder=4,R(.441,.006,1.075,xe,ue).renderOrder=4;let ze=Array.from({length:48},()=>({x:(n()-.5)*.61,z:(n()-.5)*.61,r:.007+n()**2*.023,phase:n(),speed:.15+n()*.17})),ht=new vn(new Kt(1,12,8),ge,ze.length);ht.name="Rising liquid bubbles",ht.instanceMatrix.setUsage(Un),ht.frustumCulled=!1,ht.renderOrder=3,ue.add(ht);let It=[];for(let Ne=0;Ne<24;Ne++){let Ze=n()*e,Sn=Ne<18?.4+n()*.025:n()*.34,tn=.006+n()*.016,ni=E([Math.cos(Ze)*Sn,1.074,Math.sin(Ze)*Sn],[tn,tn*.65,tn],Se,ue);ni.castShadow=!1,ni.renderOrder=5,It.push({mesh:ni,baseRadius:tn,phase:n()*e})}let Ft=[];for(let Ne=0;Ne<5;Ne++){let Ze=u(new kr(.96,1,40),re.clone(),ue);Ze.rotation.x=-Math.PI/2,Ze.position.set((n()-.5)*.45,1.078,(n()-.5)*.45),Ze.castShadow=!1,Ze.renderOrder=5,Ft.push({mesh:Ze,phase:n()})}let mt=document.createElement("canvas");mt.width=256,mt.height=128;let Et=mt.getContext("2d");Et.fillStyle="#bec39f",Et.fillRect(0,0,256,128),Et.fillStyle="#242c22",Et.font="bold 67px monospace",Et.textAlign="center",Et.fillText(`0${K+1}`,128,87);let $n=new Ot(mt);$n.colorSpace=xt;let Ji=u(new bt(.17,.085),new Ve({map:$n,roughness:.9}),ue);Ji.position.set(0,.115,.517),Ji.castShadow=!1;for(let Ne=0;Ne<5;Ne++){let Ze=y([.065,.065,.007],[-.23+Ne*.115,.12,.5],Ne%2?s:r(10064462,.85,0),ue);Ze.rotation.z=-.45}Ji.position.z=.52;let Hi=_(.064,.03,[.32,1.19,.37],G,ue);Hi.rotation.x=Math.PI/2,u(new Ti(.052,24),o,ue).position.set(.32,1.19,.391),P([[.32,1.19,.395],[.3,1.219,.395]],.003,s,ue);let mn=new we;mn.name=`Tank ${K+1} drain valve`,mn.position.set(.3,.29,.43),mn.userData.valveIndex=K,ue.add(mn);let tt=_(.042,.19,[0,0,0],G,mn);tt.rotation.x=Math.PI/2,P([[0,0,.045],[0,-.035,.16],[0,-.1,.23]],.033,G,mn);let it=new Mt;it.position.set(0,-.1,.23),mn.add(it);let rt=u(new kr(.024,.034,20),G,mn);rt.position.copy(it.position),rt.rotation.x=.6;let Ye=u(new Ti(.024,20),z,mn);Ye.position.copy(it.position),Ye.position.z-=.001,Ye.rotation.x=.6,T([0,0,.01],[0,.075,.11],.012,G,mn);let at=new we;at.name="Spinning red drain handwheel",at.position.set(0,.075,.12),mn.add(at),u(new Qt(.088,.01,8,32),h,at);for(let Ne=0;Ne<3;Ne++){let Ze=Ne/3*e;T([0,0,0],[Math.cos(Ze)*.084,Math.sin(Ze)*.084,0],.007,h,at)}let Je=_(.018,.028,[0,0,0],H,at);Je.rotation.x=Math.PI/2;let ut=u(new Kt(.102,12,8),new yt({transparent:!0,opacity:0,depthWrite:!1,colorWrite:!1}),at);ut.castShadow=!1,_e.push({object:mn,outlet:it,setOpen(Ne){at.rotation.z=-Ne*Math.PI*4,at.position.z=.12+Ne*.018}});let gn=new zn(7052325,.58,1.7,2);gn.position.set(0,.85,0),ue.add(gn),Ae.push({surface:Ue,bubbles:ht,bubbleData:ze,foam:It,ripples:Ft,floatingBones:oe,phase:K*1.7});let dn=Math.atan2(1.85221-me,3.1149-Pe);ue.rotation.y=dn;let zt=new we;zt.name=`Chain hoist ${K+1}`,zt.position.set(me,0,Pe),zt.rotation.y=dn,i.add(zt),y([.4,.05,.34],[0,3.13,0],G,zt);for(let Ne of[-1,1])T([Ne*.16,3.12,0],[Ne*.16,be+.1,0],.023,G,zt),E([Ne*.16,3.12,.08],[.026,.026,.026],H,zt);let I=new we;I.name=`Winch ${K+1}: lower or raise Figpal`,I.position.y=be,I.userData.hoistIndex=K,zt.add(I),y([.46,.12,.3],[0,.1,-.03],G,I);for(let Ne of[-1,1]){y([.035,.22,.27],[Ne*.191,.012,-.01],G,I);let Ze=_(.057,.055,[Ne*.205,0,0],le,I);Ze.rotation.z=Math.PI/2;for(let Sn of[-.073,.093])for(let tn of[-.106,.096]){let ni=u(new Bt(.013,.013,.018,6),H,I);ni.position.set(Ne*.215,Sn,tn),ni.rotation.z=Math.PI/2}}y([.105,.09,.11],[.3,.15,-.035],z,I),P([[.3,.18,.01],[.38,.21,.06],[.43,.12,.1],[.4,-.04,.07]],.008,le,I);let J=document.createElement("canvas");J.width=256,J.height=128;let ae=J.getContext("2d");ae.fillStyle="#817653",ae.fillRect(0,0,256,128),ae.fillStyle="#2a2b24",ae.font="bold 22px monospace",ae.fillText("CHAIN HOIST",15,30),ae.font="18px monospace",ae.fillText("250 KG / 1978",15,62),ae.fillText("SERVICE OVERDUE",15,103);for(let Ne=0;Ne<90;Ne++)ae.fillStyle=Ne%2?"rgba(42,25,12,.48)":"rgba(170,156,116,.7)",ae.fillRect(n()*256,n()*128,n()*17,n()*3);let ce=new Ot(J);ce.colorSpace=xt;let te=u(new bt(.25,.1),new Ve({map:ce,roughness:.87}),I);te.position.set(-.005,.1,.124),te.rotation.z=.028;let Ie=new we;Ie.rotation.z=Math.PI/2,I.add(Ie);let Be=new we;Be.name="Rotating chain sprocket",Ie.add(Be),_(.1,.28,[0,0,0],z,Be);for(let Ne of[-1,1]){_(.136,.026,[0,Ne*.16,0],G,Be);for(let Ze=0;Ze<12;Ze++){let Sn=Ze/12*e;y([.026,.03,.032],[Math.cos(Sn)*.13,Ne*.16,Math.sin(Sn)*.13],H,Be)}}let Qe=[];for(let Ne=0;Ne<=120;Ne++){let Ze=Ne/120*e*4;Qe.push([Math.cos(Ze)*.106,-.1+Ne/120*.2,Math.sin(Ze)*.106])}ee(Qe,Be).object.name="Greasy chain wound around the drum";let je=_(.105,.24,[.3,.015,-.04],z,I);je.rotation.z=Math.PI/2;for(let Ne=0;Ne<6;Ne++){let Ze=_(.115,.009,[.215+Ne*.033,.015,-.04],G,I);Ze.rotation.z=Math.PI/2}let ot=new we;ot.position.set(-.22,0,0),I.add(ot),T([0,0,0],[0,-.13,0],.014,G,ot),T([0,-.13,0],[-.09,-.13,0],.021,z,ot);let ct=new zn(12371885,.4,.85,2);ct.position.set(-.24,.12,.36),I.add(ct),E([0,.17,.28],[.018,.011,.012],new yt({color:7767659}),I);let Ke=new we;Ke.name=`Suspended Figpal ${K+1}`,Ke.position.y=Ce,zt.add(Ke);let At=D[K]();At.object.scale.setScalar(.62),At.object.rotation.z=(K-1)*.035,Ke.add(At.object);let vt=C0(At.object,K),Vt=new Mt;Vt.position.set(0,.5,0),Ke.add(Vt),Re.push(Vt),T([-.22,.45,0],[.22,.45,0],.019,G,Ke);let Pn=u(new Qt(.045,.01,6,18,Math.PI*1.65),H,Ke);Pn.position.set(0,.49,0),Pn.rotation.z=-.5,T([-.028,.476,.008],[.016,.511,.008],.004,z,Ke);for(let Ne of[-1,1])ee([[Ne*.21,.45,0],[Ne*.245,.11,0],[Ne*.23,-.12,.015],[Ne*.16,-.205,.04],[0,-.222,.045]],Ke);let Ht=ee([[0,be-.1,.025],[0,Ce+.52,0]],zt,72),st=ee([[-.1,be-.01,-.11],[-.11,be-.36,-.12],[-.16,be-.4,-.1],[-.2,be-.05,-.08]],zt);st.object.name="Winch return chain loop";let Gt=new we;Gt.name=`Canister ${K+1} winch control`,Gt.position.set(.39,.85,.4),Gt.rotation.y=.35,Gt.userData.hoistIndex=K,ue.add(Gt),y([.12,.21,.07],[0,0,0],z,Gt),E([0,.047,.047],[.024,.024,.015],r(8072739,.6,0),Gt),E([0,-.047,.047],[.024,.024,.015],r(6913097,.6,0),Gt),P([[.39,.95,.4],[.44,1.02,.35],[.46,1.27,.12],[.44,be-.13,.06],[.24,be,0]],.007,z,zt),ye.push({rig:zt,hanger:Ke,transformation:vt,captive:At.object,propeller:At.propeller,drum:Be,crank:ot,loadChain:Ht,height:Ce,homeHeight:Ce,targetHeight:Ce,winchY:be,phase:K*2.1,lowered:!1})}let b=new zn(11712685,.75,3.8,2);b.position.set(-1.75,2.75,-.2),i.add(b);function $(K){let me=ye[K];return me?(me.lowered=!me.lowered,me.targetHeight=me.lowered?.65:me.homeHeight,`Figpal ${K+1}${me.transformation.transformed?"'s bones":""} ${me.lowered?"lowering into the canister":"rising above the canister"}.`):null}function pe(){for(let K of ye)K.lowered=!0,K.targetHeight=.65}function Me(){for(let K of ye)K.lowered=!1,K.height=K.targetHeight=K.homeHeight,K.hanger.position.set(0,K.homeHeight,0),K.hanger.rotation.z=0,K.loadChain.setPoints([0,K.winchY-.1,.025],[0,K.homeHeight+.52,0]),K.drum.rotation.y=K.crank.rotation.x=0,K.transformation.reset()}let ve=0,Oe={};function He(K,me=!1){let Pe=Math.max(0,Math.min(.05,K-ve));ve=K;let Ce=me?0:K;L.value=Ce;for(let be of ye){let ue=be.targetHeight-be.height;be.height=me?be.targetHeight:be.height+Math.sign(ue)*Math.min(Math.abs(ue),Pe*.15),S0(K,be.height,be.winchY,be.phase,me,Oe),be.hanger.position.set(Oe.x,Oe.y,0),be.hanger.rotation.z=Oe.angle,be.loadChain.setPoints([0,be.winchY-.1,.025],[Oe.hookX,Oe.hookY,0]),be.drum.rotation.y=(be.homeHeight-be.height)/.1,be.crank.rotation.x=(be.homeHeight-be.height)/.1,be.transformation.update(1.086),be.propeller&&(be.propeller.rotation.y=Ce*.18)}for(let be of Ae){be.floatingBones.update(K,me);let ue=be.surface.geometry.attributes.position,We=be.surface.geometry.attributes.normal;for(let X=0;X<ue.count;X++){let Te=ue.getX(X),oe=ue.getZ(X),Ee=Te*17+Ce*1.4+be.phase,Ue=oe*14-Ce*1.1,ze=(Te+oe)*28-Ce*2.1;ue.setY(X,Math.sin(Ee)*Math.cos(Ue)*.0035+Math.sin(ze)*.0012);let ht=Math.cos(Ee)*Math.cos(Ue)*.0595+Math.cos(ze)*.0336,It=-Math.sin(Ee)*Math.sin(Ue)*.049+Math.cos(ze)*.0336,Ft=Math.hypot(ht,1,It);We.setXYZ(X,-ht/Ft,1/Ft,-It/Ft)}ue.needsUpdate=!0,We.needsUpdate=!0,be.bubbleData.forEach((X,Te)=>{let oe=(Ce*X.speed+X.phase)%1;Le.position.set(X.x+Math.sin(Ce*1.3+Te)*.012,.25+oe*.84,X.z+Math.cos(Ce+Te)*.009),Le.scale.setScalar(X.r*(.65+oe*.5)),Le.updateMatrix(),be.bubbles.setMatrixAt(Te,Le.matrix)}),be.bubbles.instanceMatrix.needsUpdate=!0;for(let X of be.foam){let Te=(Math.sin(Ce*2.4+X.phase)+1)*.5;X.mesh.scale.set(X.baseRadius,X.baseRadius*(.12+Te*.28),X.baseRadius)}for(let X of be.ripples){let Te=(Ce*.48+X.phase)%1,oe=.012+Te*.075;X.mesh.scale.setScalar(oe),X.mesh.visible=Te<.88,X.mesh.material.opacity=(1-Te)*.16}}}He(0);function ke(K){for(let me of[G,z,H,Q,q,Z,xe,ge])me.envMap=K,me.needsUpdate=!0}function nt(K){let me=ye[K];return!!me&&!me.transformation.transformed}function De(K){let me=ye[K];return nt(K)&&!me.lowered&&Math.abs(me.height-me.homeHeight)<.025}return{group:i,update:He,valves:_e,toggleHoist:$,isLowered:K=>ye[K]?.lowered??!1,canSpeak:nt,isHanging:De,lowerAll:pe,reset:Me,speechAnchors:Re,setEnvironment:ke}}function L0(i=[]){let e=i.map(n=>(n.updateWorldMatrix(!0,!1),{inverse:n.matrixWorld.clone().invert(),width:n.geometry.parameters.width/2,depth:n.geometry.parameters.depth/2,top:n.getWorldPosition(new S).y+n.geometry.parameters.height/2})),t=new S;return(n,r)=>{let s=.003;for(let o of e)t.set(n,0,r).applyMatrix4(o.inverse),Math.abs(t.x)<=o.width&&Math.abs(t.z)<=o.depth&&(s=Math.max(s,o.top));return s}}function wd(i,e){i.updateWorldMatrix(!0,!0);let t=1/0,n=new S,r=new Rt,s=new Rt;function o(a){if(a.userData.ignoreFloorContact)return;let c=a.isMesh&&a.geometry.attributes.position;if(c)for(let l=0;l<(a.isInstancedMesh?a.count:1);l++){a.isInstancedMesh?(a.getMatrixAt(l,r),s.multiplyMatrices(a.matrixWorld,r)):s.copy(a.matrixWorld);for(let h=0;h<c.count;h++)n.fromBufferAttribute(c,h).applyMatrix4(s),t=Math.min(t,n.y-e(n.x,n.z))}for(let l of a.children)o(l)}return o(i),t}function gs(i,e=()=>.003){let t=wd(i,e);if(!Number.isFinite(t))return i;let n=i.getWorldPosition(new S);return n.y+=6e-4-t,i.parent&&i.parent.worldToLocal(n),i.position.copy(n),i.updateWorldMatrix(!1,!0),i.userData.floorProp=!0,i}function ul(i,e){i.updateWorldMatrix(!0,!1);let t=i.geometry,n=t.attributes.position,r=t.parameters.radialSegments+1,s=i.matrixWorld.clone().invert(),o=new S,a=new S,c=t.parameters.radius;for(let l=0;l<n.count;l+=r){o.set(0,0,0);for(let x=0;x<r-1;x++)o.add(a.fromBufferAttribute(n,l+x).applyMatrix4(i.matrixWorld));o.divideScalar(r-1);let h=e(o.x,o.z),p=1-Ge.smoothstep(o.y-h,.055,.15),f=i.userData.anchorStart?Ge.smoothstep(l/r,0,3):1,d=i.userData.anchorEnd?Ge.smoothstep((n.count-r-l)/r,0,3):1,g=(h+c+6e-4-o.y)*p*f*d;for(let x=0;x<r;x++)a.fromBufferAttribute(n,l+x).applyMatrix4(i.matrixWorld),a.y+=g,a.applyMatrix4(s),n.setXYZ(l+x,a.x,a.y,a.z)}n.needsUpdate=!0,t.computeVertexNormals(),t.computeBoundingBox(),t.computeBoundingSphere()}function D0(i,e=()=>.003){let t=new we;t.name="Fallen nursery mobile with four soft animals",t.position.set(-1.05,0,.55);let n=48319,r=()=>(n=n*1664525+1013904223>>>0,n/4294967296),s=document.createElement("canvas");s.width=s.height=512;let o=s.getContext("2d");o.fillStyle="#c6c1ac",o.fillRect(0,0,512,512);for(let q=0;q<7e3;q++){let k=r()*512,Z=r()*512;o.strokeStyle=q%2?"rgba(58,52,36,.12)":"rgba(246,236,212,.28)",o.lineWidth=.6,o.beginPath(),o.moveTo(k,Z),o.lineTo(k+2,Z+3),o.stroke()}for(let q=0;q<45;q++){let k=r()*512,Z=r()*512,xe=8+r()*70,Se=o.createRadialGradient(k,Z,0,k,Z,xe);Se.addColorStop(0,"rgba(63,52,31,.15)"),Se.addColorStop(1,"rgba(63,52,31,0)"),o.fillStyle=Se,o.fillRect(k-xe,Z-xe,xe*2,xe*2)}function a(q){let k=new Ot(q);return k.colorSpace=xt,k.anisotropy=4,k}let c=a(s);function l(q,k=c){return new Xt({color:q,map:k,bumpMap:c,bumpScale:.0012,roughness:.96,sheen:.32,sheenColor:12433832,sheenRoughness:.95})}let h=l(13801630),p=l(14792108),f=l(7839145),d=l(5270656),g=l(14132309),x=l(15128233),m=l(3420203),u=new Ve({color:6313803,roughness:1}),E=new Ve({color:10525568,roughness:1}),y=new Ve({color:1645337,roughness:.48}),_=new Ve({color:12762273,map:c,roughness:.68,bumpMap:c,bumpScale:.001}),P=new Ve({color:8159861,metalness:.65,roughness:.56}),T=document.createElement("canvas");T.width=T.height=512;let R=T.getContext("2d");R.drawImage(s,0,0),R.fillStyle="#343027";for(let q=0;q<12;q++){let k=q*45-15,Z=q%2*30;R.beginPath(),R.moveTo(k,Z),R.bezierCurveTo(k+55,105,k+8,180,k+51,268),R.lineTo(k+23,238),R.bezierCurveTo(k-12,148,k+26,93,k-9,Z),R.fill(),R.beginPath(),R.moveTo(k+25,512),R.bezierCurveTo(k+69,417,k+6,367,k+45,285),R.lineTo(k+24,314),R.bezierCurveTo(k-11,395,k+41,438,k-3,512),R.fill()}let A=l(14262365,a(T)),O=new Kt(1,24,16);function v(q,k,Z=t){let xe=new dt(q,k);return xe.castShadow=!0,xe.receiveShadow=!0,Z.add(xe),xe}function w(q,k,Z,xe){let Se=v(O,Z,xe);return Se.position.set(...q),Se.scale.set(...k),Se}function V(q,k,Z,xe=t){return v(new un(new $t(q.map(Se=>new S(...Se))),Math.max(20,q.length*6),k,6,!1),Z,xe)}function G(q,k,Z,xe,Se=t){let ge=new S(...q),re=new S(...k),L=re.clone().sub(ge),ye=v(new Bt(Z,Z,L.length(),12),xe,Se);return ye.position.copy(ge).add(re).multiplyScalar(.5),ye.quaternion.setFromUnitVectors(new S(0,1,0),L.normalize()),ye}function z(q,k,Z,xe=t){let Se=v(new wt(...q),Z,xe);return Se.position.set(...k),Se}function H(q,k,Z,xe){let Se=new Tt;Se.moveTo(-.5,0),Se.quadraticCurveTo(-.48,.44,0,1),Se.quadraticCurveTo(.49,.49,.5,0),Se.quadraticCurveTo(0,-.1,-.5,0);let ge=new sn(Se,{depth:.18,bevelEnabled:!0,bevelSize:.06,bevelThickness:.05,bevelSegments:2,curveSegments:8,steps:1});ge.translate(0,0,-.09);let re=v(ge,Z,xe);return re.scale.set(...k),re.position.set(...q),re}function Q(q,k,Z=.092,xe=.047){for(let Se of[-1,1])w([Se*xe,Z,k],[.009,.012,.007],y,q)}function le(q){let k=new we;k.name=`${q} mobile animal`;let Z=q==="Pig"?h:q==="Elephant"?f:q==="Tiger"?A:g,xe=w([0,.065,-.025],[.112,.091,.154],Z,k);xe.name="Soft body resting on the floor";for(let re of[-1,1])w([re*.047,.073,.08],[.077,.09,.09],Z,k);V([[0,.13,.116],[0,.092,.166],[0,.036,.16],[0,.008,.136]],.0018,u,k);for(let re of[-1,1])for(let L of[-.106,.1]){let ye=w([re*.11,.002,L],[.043,.043,.062],Z,k);if(ye.rotation.z=re*.28,w([re*.134,-.007,L+.015],[.021,.03,.041],q==="Pig"?m:q==="Elephant"?d:p,k),q==="Tiger"||q==="Fox")for(let Ae=0;Ae<3;Ae++)w([re*.151,-.012+(Ae-1)*.014,L+.034],[.004,.004,.006],m,k)}let Se=w([0,.102,-.17],q==="Elephant"?[.097,.094,.094]:[.09,.083,.083],Z,k);if(q==="Pig"){w([0,.08,-.244],[.049,.032,.024],p,k);for(let L of[-1,1])w([L*.019,.082,-.267],[.006,.009,.003],m,k);for(let L of[-1,1]){let ye=H([L*.061,.153,-.177],[.072,.083,.09],h,k);ye.rotation.z=-L*.35}let re=[];for(let L=0;L<=45;L++){let ye=L/45*Math.PI*3.9,Ae=.025*(1-L/70);re.push([Math.sin(ye)*Ae,.115+Math.cos(ye)*Ae,.167+L/45*.028])}V(re,.0065,p,k),Q(k,-.242,.122)}else if(q==="Elephant"){for(let re of[-1,1])w([re*.098,.098,-.16],[.071,.08,.027],f,k),w([re*.113,.101,-.184],[.047,.055,.009],d,k);V([[0,.099,-.24],[0,.055,-.273],[0,-.006,-.268],[.018,-.031,-.304],[.032,-.006,-.317]],.022,f,k),Q(k,-.248,.127,.043),V([[0,.122,.15],[.025,.115,.185],[.042,.08,.199]],.006,d,k),w([.044,.077,.2],[.013,.018,.012],d,k)}else{for(let re of[-1,1]){let L=H([re*.057,.155,-.172],[.067,.071,.1],Z,k);L.rotation.z=-re*.26,H([re*.057,.162,-.184],[.038,.045,.055],p,k)}for(let re of[-1,1])w([re*.025,.076,-.235],[.035,.027,.023],x,k);if(w([0,.091,-.26],[.015,.011,.011],m,k),Q(k,-.241,.124,.044),q==="Tiger")V([[0,.134,.15],[.035,.162,.193],[.067,.155,.201],[.075,.129,.182]],.012,A,k),w([.075,.129,.182],[.014,.015,.016],m,k);else{let re=w([.042,.13,.191],[.058,.061,.131],g,k);re.rotation.x=-.45,re.rotation.z=-.25;let L=w([.039,.182,.271],[.045,.046,.061],x,k);L.rotation.x=-.45}}for(let re of[-1,1])V([[re*.1,.1,.07],[re*.113,.065,-.02],[re*.094,.092,-.1]],.0015,u,k);let ge=v(new Qt(.014,.004,6,16,Math.PI*1.75),E,k);return ge.position.set(0,.158,-.065),ge.rotation.x=Math.PI/2,{object:k,tab:ge,body:xe}}function ie(q,k){q.updateWorldMatrix(!0,!0);let Z=q.getWorldPosition(new S);Z.y-=wd(k,e)+.006,q.parent.worldToLocal(Z),q.position.copy(Z),q.updateWorldMatrix(!0,!0);let xe=new S,Se=new Rt;q.traverse(ge=>{if(!ge.isMesh)return;let re=ge.geometry.clone(),L=re.attributes.position;Se.copy(ge.matrixWorld).invert();let ye=!1;for(let Ae=0;Ae<L.count;Ae++){xe.fromBufferAttribute(L,Ae).applyMatrix4(ge.matrixWorld);let _e=e(xe.x,xe.z)+6e-4;xe.y>=_e||(xe.y=_e,xe.applyMatrix4(Se),L.setXYZ(Ae,xe.x,xe.y,xe.z),ye=!0)}ye?(L.needsUpdate=!0,re.computeVertexNormals(),re.computeBoundingBox(),re.computeBoundingSphere(),ge.geometry=re):re.dispose()}),q.userData.floorProp=!0}let fe=new we;fe.name="Toppled mobile support",t.add(fe),z([.16,.055,.12],[-.6,.0305,.48],_,fe),z([.12,.028,.1],[-.6,.0765,.48],_,fe),G([-.6,.0565,.48],[-.6,.1425,.48],.012,P,fe),w([-.6,.1455,.48],[.043,.012,.02],_,fe),V([[-.59,.039,.44],[-.63,.017,.1],[-.48,.017,-.3],[-.2,.02,-.47],[.12,.019,-.39],[.19,.017,-.13],[.04,.052,0]],.013,_,fe),gs(fe,e);let N=new we;N.name="Scuffed mobile music box",N.position.set(0,.116,0),N.rotation.set(.21,0,-.18),t.add(N);let j=v(new Bt(.103,.103,.068,40),_,N),ne=v(new Qt(.103,.002,6,40),u,N);ne.rotation.x=Math.PI/2;let ee=w([0,.039,0],[.034,.009,.034],g,N);for(let q=0;q<5;q++)z([.03,.002,.002],[-.049+q*.019,.035,.041],u,N);G([0,-.02,-.093],[0,-.02,-.145],.005,P,N),w([0,-.02,-.15],[.026,.012,.005],P,N),t.updateMatrixWorld(!0),gs(N,e);let F=[[-.37,.068,.035],[.34,.103,-.025],[.018,.058,-.33],[-.025,.075,.34]];for(let q of F)q[1]=e(t.position.x+q[0],t.position.z+q[2])+.0076,G([0,N.position.y,0],q,.007,P);for(let q of F){let k=v(new Qt(.014,.003,6,16),P);k.rotation.x=Math.PI/2,k.position.set(q[0],q[1]-.004,q[2])}let se=[{kind:"Pig",x:.29,z:.35,rear:!0,yaw:-.12,roll:.08,arm:3},{kind:"Tiger",x:-.38,z:.17,rear:!0,yaw:.36,roll:-.12,arm:0},{kind:"Elephant",x:.34,z:-.29,rear:!1,yaw:-.28,roll:-.24,arm:1},{kind:"Fox",x:-.27,z:-.43,rear:!0,yaw:1.12,roll:.2,arm:2}];for(let q of se){let{object:k,tab:Z,body:xe}=le(q.kind);k.position.set(q.x,0,q.z),k.scale.setScalar(.88);let Se=Math.atan2(i.x-(t.position.x+q.x),i.z-(t.position.z+q.z));k.rotation.set(q.kind==="Pig"?-.06:.03,Se+(q.rear?0:Math.PI)+q.yaw,q.roll,"YXZ"),t.add(k),t.updateMatrixWorld(!0),ie(k,xe),t.updateMatrixWorld(!0);let ge=t.worldToLocal(Z.getWorldPosition(new S)),re=F[q.arm],L=V([re,[re[0]+.06,.024,re[2]+.08],[(re[0]+ge.x)/2-.05,.023,(re[2]+ge.z)/2+.08],[ge.x-.04,.025,ge.z+.035],ge.toArray()],.0021,E);L.userData.anchorStart=L.userData.anchorEnd=!0,ul(L,e);let ye=document.createElement("canvas");ye.width=ye.height=64;let Ae=ye.getContext("2d"),_e=Ae.createRadialGradient(32,32,5,32,32,32);_e.addColorStop(0,"rgba(0,0,0,.65)"),_e.addColorStop(.48,"rgba(0,0,0,.32)"),_e.addColorStop(1,"rgba(0,0,0,0)"),Ae.fillStyle=_e,Ae.fillRect(0,0,64,64);let Re=new Dn().setFromObject(k),Le=Re.getSize(new S),he=t.worldToLocal(Re.getCenter(new S)),D=new bt(Le.x+.05,Le.z+.05,12,12);D.rotateX(-Math.PI/2),D.translate(he.x,0,he.z);let b=D.attributes.position;for(let pe=0;pe<b.count;pe++)b.setY(pe,e(t.position.x+b.getX(pe),t.position.z+b.getZ(pe))+2e-4);D.computeVertexNormals();let $=v(D,new yt({map:new Ot(ye),transparent:!0,depthWrite:!1}));$.name=`${q.kind} floor contact shadow`,$.castShadow=!1,$.userData.ignoreFloorContact=!0}return t}var fo=new Map,bd=31.7;function VM(i){if(fo.has(i))return fo.get(i);let e=9678115+Math.imul(i,2654435761)>>>0,t=()=>(e=Math.imul(e,1664525)+1013904223>>>0,e/4294967296),n=[],r=.65+t()*1.4;for(;r<bd-2;){let s=2+Math.floor(t()*5);for(let o=0;o<s;o++){let a=.028+t()*.072;n.push([r,a,t()*.045,t()>.23]),r+=a+.045+t()*.16}t()<.42&&(n.push([r,.22+t()*.4,.005,!0]),r+=.75),r+=1.3+t()*4.2}return fo.size>4&&fo.delete(fo.keys().next().value),fo.set(i,n),n}function GM(i,e=!1){if(e)return[.88,.79];let t=Math.floor(i/bd),n=i-t*bd,r=VM(t);return[0,1].map(s=>{let o=s?.79:.88;for(let a=0;a<r.length;a++){let[c,l,h,p]=r[a];if(s===1&&!p)continue;let f=c+(s?(a%3-1)*.013:0),d=f+l;if(n>=f&&n<d){let g=Math.min((n-f)/.003,(d-n)/.005,1);o=Ge.lerp(o,h,Math.max(0,g))}else n>=d&&n<d+.025&&(o*=1+.16*(1-(n-d)/.025))}return o*(.985+.015*Math.sin(i*8.7+s))})}function U0(){let i=new we;i.name="Crooked failing fluorescent fixture",i.position.set(.22,2.98,-.55),i.rotation.set(.02,.12,-.075);let e=ci(9673098),t=ci(15065545),n=new Ve({color:2369569,roughness:.9}),r=new Ve({color:11183498,roughness:.72});function s(g,x,m=[0,0,0]){let u=new dt(g,x);return u.position.set(...m),u.castShadow=!0,u.receiveShadow=!0,i.add(u),u}let o=(g,x,m=e)=>s(new wt(...g),m,x);function a(g,x,m,u=e){return s(new Bt(g,g,x,16),u,m)}function c(g,x=n,m=.004){return s(new un(new $t(g.map(u=>new S(...u))),24,m,5,!1),x)}o([1.53,.055,.32],[0,.012,0],t);for(let g of[-1,1]){let x=o([1.53,.08,.016],[0,-.033,g*.157],t);x.rotation.x=g*.25,o([1.46,.006,.012],[0,-.017,g*.121],n)}o([.38,.045,.085],[.12,.055,0],n);for(let g of[-.69,.69]){o([.065,.05,.275],[g,-.02,0],e);for(let x of[-.132,.132]){let m=a(.012,.012,[g,-.051,x]);o([.016,.002,.003],[g,-.058,x],n),m.rotation.z=.05}}let l=[];for(let[g,x]of[-.078,.078].entries()){let m=document.createElement("canvas");m.width=512,m.height=64;let u=m.getContext("2d"),E=u.createLinearGradient(0,0,512,0);E.addColorStop(0,"#29271f"),E.addColorStop(.035,"#5a5948"),E.addColorStop(.09,"#b4b9a0"),E.addColorStop(.19,"#d9dfc4"),E.addColorStop(.77,"#d0d8bd"),E.addColorStop(.93,"#92977e"),E.addColorStop(.98,"#383c32"),E.addColorStop(1,"#272b22"),u.fillStyle=E,u.fillRect(0,0,512,64);for(let T=0;T<170;T++){let R=T*73.29%512,A=T*23.87%64;u.fillStyle="rgba(35,36,24,.12)",u.fillRect(R,A,1+T%5,1)}let y=new Ot(m);y.colorSpace=xt,y.center.set(.5,.5),y.rotation=Math.PI/2;let _=new Ve({map:y,emissiveMap:y,emissive:15003084,emissiveIntensity:2,roughness:.27});l.push(_);let P=a(.019,1.34,[0,-.073,x],_);P.rotation.z=Math.PI/2,P.castShadow=!1;for(let T of[-1,1]){let R=a(.021,.035,[T*.657,-.073,x],e);R.rotation.z=Math.PI/2,o([.037,.075,.056],[T*.704,-.045,x],r);for(let A of[-.007,.007]){let O=a(.0025,.024,[T*.684,-.073,x+A],e);O.rotation.z=Math.PI/2}}c([[-.73,.03,x],[-.77,-.01,x],[-.72,-.04,x+.025]],g?n:new Ve({color:7031093,roughness:.8}))}let h=a(.015,.034,[.54,-.035,0],r);h.rotation.x=.08,c([[.57,-.02,.15],[.59,-.15,.17],[.68,-.13,.18],[.68,-.035,.15]],e,.004),c([[.72,.04,0],[.82,.09,.03],[.89,.19,.04],[1.02,.31,.03]],n,.006);let p=new zn(11647895,.25,1.2,2);p.position.set(0,.1,0),i.add(p);function f(g,x){let m=GM(g,x);return l.forEach((u,E)=>u.emissiveIntensity=m[E]*2.9),p.intensity=(m[0]+m[1])*.2,(m[0]+m[1])/1.67}function d(g){for(let x of[e,t])x.envMap=g,x.needsUpdate=!0}return f(0,!1),{group:i,update:f,setEnvironment:d}}function dl(i){let e=Math.max(0,Math.ceil(i));return`${String(Math.floor(e/60)).padStart(2,"0")}:${String(e%60).padStart(2,"0")}`}function H0(i=300,e=()=>performance.now()/1e3){let t=null;return{start(){return t!==null?!1:(t=e()+i,!0)},reset(){t=null},get remainingSeconds(){return t===null?i:Math.max(0,Math.ceil(t-e()))},get status(){return t===null?"waiting":e()>=t?"finished":"running"}}}function N0(i,e){let t=new we;t.name="Five-minute red LED countdown timer",t.position.copy(e),t.position.y=.006,t.rotation.y=Math.atan2(i.x-e.x,i.z-e.z)-Ge.degToRad(16),t.scale.setScalar(.72);let n=H0(),r=new we;r.position.y=.13,r.rotation.x=-.24,t.add(r);let s=document.createElement("canvas");s.width=512,s.height=256;let o=s.getContext("2d");o.fillStyle="#555951",o.fillRect(0,0,512,256);let a=7418,c=()=>(a=a*1664525+1013904223>>>0,a/4294967296);for(let ee=0;ee<1800;ee++)o.fillStyle=ee%4?"rgba(13,16,12,.18)":"rgba(180,171,142,.26)",o.fillRect(c()*512,c()*256,1+c()*4,1+c()*2);for(let ee=0;ee<35;ee++){o.strokeStyle="rgba(194,190,163,.24)",o.lineWidth=.6;let F=c()*512,se=c()*256;o.beginPath(),o.moveTo(F,se),o.lineTo(F+8+c()*39,se+c()*5),o.stroke()}let l=new Ot(s);l.colorSpace=xt;let h=new Ve({color:3619894,map:l,bumpMap:l,bumpScale:7e-4,roughness:.82}),p=new Ve({color:527113,roughness:.66}),f=new Ve({color:7828326,metalness:.65,roughness:.68});function d(ee,F,se=r){let q=new dt(ee,F);return q.castShadow=!0,q.receiveShadow=!0,se.add(q),q}function g(ee,F,se,q=r){let k=d(new wt(...ee),se,q);return k.position.set(...F),k}let x=new Tt,m=.59,u=.19,E=.022;x.moveTo(-m/2+E,-u/2),x.lineTo(m/2-E,-u/2),x.quadraticCurveTo(m/2,-u/2,m/2,-u/2+E),x.lineTo(m/2,u/2-E),x.quadraticCurveTo(m/2,u/2,m/2-E,u/2),x.lineTo(-m/2+E,u/2),x.quadraticCurveTo(-m/2,u/2,-m/2,u/2-E),x.lineTo(-m/2,-u/2+E),x.quadraticCurveTo(-m/2,-u/2,-m/2+E,-u/2);let y=new sn(x,{depth:.174,bevelEnabled:!0,bevelSize:.006,bevelThickness:.006,bevelSegments:3,steps:1,curveSegments:10});y.translate(0,0,-.087),d(y,h),g([.538,.16,.01],[0,0,.096],p);let _=g([.518,.143,.002],[0,0,.11],new Xt({color:5511450,transparent:!0,opacity:.09,depthWrite:!1,roughness:.22,clearcoat:1,clearcoatRoughness:.1}));_.castShadow=!1;for(let ee of[-.279,.279])for(let F of[-.071,.071]){let se=d(new Bt(.008,.008,.006,12),f);se.rotation.x=Math.PI/2,se.position.set(ee,F,.098),g([.01,.0015,.001],[ee,F,.102],p)}for(let ee of[-.23,.23])for(let F of[-.06,.06])g([.052,.016,.052],[ee,.008,F],p,t);for(let ee of[-1,1])for(let F=0;F<6;F++)g([.002,.04,.006],[ee*.301,-.018,-.061+F*.019],p);let P=document.createElement("canvas");P.width=512,P.height=64;let T=P.getContext("2d");T.font="500 20px monospace",T.fillStyle="#8e8b7a",T.textAlign="center",T.fillText("MIN",128,42),T.fillText("SEC",384,42);let R=new Ot(P);R.colorSpace=xt;let A=d(new bt(.43,.018),new yt({map:R,transparent:!0,depthWrite:!1}));A.position.set(0,.069,.104),A.castShadow=!1;let O=new yt({color:16721943,toneMapped:!1}),v=new yt({color:2295557,toneMapped:!1}),w=new yt({color:16718087,transparent:!0,opacity:.12,depthWrite:!1,blending:Tc,toneMapped:!1}),V=new Tt,G=.066,z=.01,H=.005;V.moveTo(-G/2,0),V.lineTo(-G/2+H,z/2),V.lineTo(G/2-H,z/2),V.lineTo(G/2,0),V.lineTo(G/2-H,-z/2),V.lineTo(-G/2+H,-z/2),V.closePath();let Q=new Xi(V),le=["abcdef","bc","abdeg","abcdg","bcfg","acdfg","acdefg","abc","abcdefg","abcdfg"],ie={a:[0,.058,0],b:[.036,.029,1],c:[.036,-.029,1],d:[0,-.058,0],e:[-.036,-.029,1],f:[-.036,.029,1],g:[0,0,0]},fe=[];for(let ee of[-.187,-.081,.081,.187]){let F=new we;F.position.set(ee,-.005,.106),r.add(F);let se=[];for(let[q,[k,Z,xe]]of Object.entries(ie)){let Se=d(Q,v,F);Se.position.set(k,Z,0),Se.rotation.z=xe?Math.PI/2:0,Se.scale.x=xe?.76:1,Se.castShadow=!1;let ge=d(Q,w,F);ge.position.set(k,Z,-2e-4),ge.rotation.z=Se.rotation.z,ge.scale.set(Se.scale.x*1.12,1.9,1),ge.castShadow=!1,se.push({key:q,segment:Se,glow:ge})}fe.push(se)}for(let ee of[-.025,.015]){let F=d(new Ti(.005,16),O);F.position.set(0,ee,.106),F.castShadow=!1}let N=new zn(16718344,.12,.7,2);N.position.set(0,.06,.16),r.add(N);let j=-1;function ne(){let ee=n.remainingSeconds;if(ee!==j){let F=dl(ee).replace(":","");fe.forEach((se,q)=>{let k=le[Number(F[q])];for(let Z of se){let xe=k.includes(Z.key);Z.segment.material=xe?O:v,Z.glow.visible=xe}}),j=ee}return ee}return ne(),{group:t,start:()=>n.start(),reset(){n.reset(),ne()},update:ne,get status(){return n.status}}}function Td(i,e,t,n){let r=n/2,s=r/2;i.save(),i.translate(e,t);function o(a,c){i.fillStyle=c,i.beginPath(),i.moveTo(r,a),i.lineTo(s,a),i.arc(s,a+s,s,-Math.PI/2,Math.PI/2,!0),i.lineTo(r,a+r),i.closePath(),i.fill()}o(0,"#f24e1e"),o(r,"#a259ff"),i.fillStyle="#ff7262",i.beginPath(),i.moveTo(r,0),i.lineTo(r+s,0),i.arc(r+s,s,s,-Math.PI/2,Math.PI/2),i.lineTo(r,r),i.closePath(),i.fill(),i.fillStyle="#1abcfe",i.beginPath(),i.arc(r+s,r+s,s,0,Math.PI*2),i.fill(),i.fillStyle="#0acf83",i.beginPath(),i.moveTo(r,2*r),i.lineTo(r,2*r+s),i.arc(s,2*r+s,s,0,Math.PI*1.5),i.closePath(),i.fill(),i.restore()}function F0(i){let e=new we;e.name="Worn handsaw beside the countdown timer",e.position.copy(i).add(new S(-.34,0,.25)),e.position.y=0,e.rotation.y=-.12,e.rotation.z=.026;let t=new we;t.rotation.x=-Math.PI/2,e.add(t);let n=ci(12963014);n.bumpScale=45e-5;let r=new Ve({color:11121068,metalness:.72,roughness:.38}),s=new Ve({color:10258264,metalness:.68,roughness:.62}),o=new Ve({color:3156253,roughness:1}),a=new Uint8Array(256*256*4),c=1903;for(let y=0;y<256;y++)for(let _=0;_<256;_++){c=1664525*c+1013904223>>>0;let P=Math.sin(y*.54+Math.sin(_*.026)*2)*5+Math.sin(y*1.4+_*.012)*3,T=(c>>>24)/255,R=T>.99?28:0,A=(y*256+_)*4;a[A]=98+P+T*12+R,a[A+1]=57+P*.7+T*9+R,a[A+2]=30+P*.3+T*6+R,a[A+3]=255}let l=new rr(a,256,256);l.colorSpace=xt,l.needsUpdate=!0,l.magFilter=pn;let h=new Ve({map:l,roughness:.83,bumpMap:l,bumpScale:5e-4});function p(y,_,P=t){let T=new dt(y,_);return T.castShadow=!0,T.receiveShadow=!0,P.add(T),T}function f(y,_,P,T){let R=new sn(y,{depth:_,bevelEnabled:P>0,bevelSize:P,bevelThickness:P,bevelSegments:2,curveSegments:24});R.translate(0,0,-_/2);let A=R.attributes.uv;for(let O=0;O<A.count;O++)A.setXY(O,(A.getX(O)+.37)/.72,(A.getY(O)+.115)/.23);return p(R,T)}let d=new Tt;d.moveTo(-.36,.035),d.lineTo(.19,.081),d.lineTo(.205,-.083);let g=38;for(let y=g;y>=0;y--){let _=-.36+y/g*.55,P=-.035-(_+.36)/.55*.048;d.lineTo(_,P),y>0&&d.lineTo(_-.55/g*.4,P-.009)}d.lineTo(-.365,.025),d.closePath();let x=f(d,.0028,35e-5,[n,r]);x.name="Tapered pitted steel blade with saw teeth";let m=new Tt;m.moveTo(.145,.092),m.bezierCurveTo(.19,.119,.31,.116,.338,.079),m.lineTo(.326,-.079),m.quadraticCurveTo(.314,-.111,.278,-.102),m.lineTo(.172,-.085),m.quadraticCurveTo(.153,-.07,.157,-.047),m.lineTo(.17,.046),m.closePath();let u=new bi;u.moveTo(.214,.055),u.quadraticCurveTo(.24,.072,.283,.055),u.lineTo(.283,-.057),u.quadraticCurveTo(.253,-.065,.226,-.052),u.lineTo(.209,.032),u.closePath(),m.holes.push(u);let E=f(m,.026,.006,h);E.name="Worn wooden open grip";for(let[y,_]of[[.176,.055],[.183,-.053],[.199,.003]])for(let P of[-1,1]){let T=p(new Bt(.006,.006,.0035,18),s);T.rotation.x=Math.PI/2,T.position.set(y,_,P*.02);let R=p(new wt(.007,.0012,6e-4),o);R.position.set(y,_,P*.022),R.rotation.z=.35}return{group:e,setEnvironment(y){n.envMap=r.envMap=s.envMap=y;for(let _ of[n,r,s])_.envMapIntensity=.9,_.needsUpdate=!0}}}function fl({flies:i=10,moths:e=5,spread:t=[.82,.17,.47],seed:n=29,sizeScale:r=1,dive:s=0}={}){let o=new we;o.name="Flies and moths circling the light";let a=new Kt(1,8,6),c=new Ve({color:1382678,roughness:.65}),l=new Ve({color:5589814,roughness:1}),h=new Ve({color:12899016,roughness:.35,transparent:!0,opacity:.58,depthWrite:!1,side:Dt}),p=document.createElement("canvas");p.width=p.height=128;let f=p.getContext("2d");f.fillStyle="#b8aa83",f.fillRect(0,0,128,128);for(let fe=0;fe<190;fe++)f.fillStyle=fe%2?"#89795255":"#e2d3ab66",f.fillRect(fe*47%128,fe*73%128,2,1);f.strokeStyle="#695c3d",f.lineWidth=4,f.beginPath(),f.moveTo(76,0),f.quadraticCurveTo(99,60,76,128),f.stroke(),f.fillStyle="#5b5039",f.beginPath(),f.ellipse(57,68,13,18,.25,0,Math.PI*2),f.fill(),f.fillStyle="#d5c59a",f.beginPath(),f.ellipse(57,68,6,9,.25,0,Math.PI*2),f.fill(),f.strokeStyle="#75684788",f.lineWidth=1;for(let fe=0;fe<5;fe++)f.beginPath(),f.moveTo(0,64),f.lineTo(128,12+fe*26),f.stroke();let d=new Ot(p);d.colorSpace=xt;let g=new Ve({map:d,roughness:.9,side:Dt,emissive:10127718,emissiveMap:d,emissiveIntensity:.15});function x(fe){let N=new Tt;N.moveTo(0,-.008),fe?(N.bezierCurveTo(.02,-.031,.052,-.036,.058,-.018),N.bezierCurveTo(.06,-.007,.044,.004,.039,.009),N.bezierCurveTo(.047,.026,.023,.034,.013,.019)):(N.bezierCurveTo(.008,-.021,.03,-.024,.033,-.013),N.bezierCurveTo(.035,-.003,.015,.016,.005,.012)),N.lineTo(0,.008),N.closePath();let j=new Xi(N,10),ne=j.attributes.position,ee=j.attributes.uv;for(let F=0;F<ne.count;F++)ee.setXY(F,ne.getX(F)/.06,(ne.getY(F)+.036)/.07);return j.rotateX(-Math.PI/2),j}function m(fe,N,j,ne){let ee=new vn(fe,N,j);return ee.name=ne,ee.instanceMatrix.setUsage(Un),ee.frustumCulled=!1,ee.raycast=()=>{},o.add(ee),ee}let u=m(a,c,i*2,"Small dark flies"),E=m(a,l,e*2,"Moth bodies"),y=m(x(!1),h,i*2,"Translucent fly wings"),_=m(x(!0),g,e*2,"Dusty patterned moth wings"),P=new Mt,T=new S,R=new S,A=new S,O=new S(0,0,-1),v=new S(0,0,1),w=new S(0,1,0),V=new S,G=new ft,z=new ft,H=new ft().setFromAxisAngle(w,Math.PI),Q=Array.from({length:i+e},(fe,N)=>({moth:N>=i,index:N>=i?N-i:N,phase:N*2.399+n*.17,size:r*(.72+(N*17+n)%13/28),speed:N>=i?.95+N%3*.23:1.8+N%4*.46}));function le(fe,N,j){let ne=fe*N.speed+N.phase,ee=N.phase,F=N.moth?.72:.46;return j.set(t[0]*(F*Math.cos(ne)+.17*Math.sin(ne*2.37+ee)),t[1]*(.7*Math.sin(ne*1.73+ee)+.23*Math.cos(ne*4.13)),t[2]*(F*Math.sin(ne*.91)+.18*Math.cos(ne*2.71-ee))),j.y-=s*(N.moth?1:.38)*Math.pow(.5+.5*Math.sin(ne*.43+ee),6),N.moth||(j.x+=.035*Math.sin(ne*7.3),j.y+=.014*Math.cos(ne*9.7)),j}function ie(fe,N=!1,j=1){let ne=N?0:fe;for(let ee of Q){let{moth:F,index:se,phase:q,size:k}=ee,Z=F?E:u,xe=F?_:y;le(ne,ee,T),le(ne+.012,ee,R),A.copy(R).sub(T).normalize(),G.setFromUnitVectors(O,A),z.setFromAxisAngle(v,.25*Math.sin(ne*2.1+q)),G.multiply(z),P.position.copy(T),P.quaternion.copy(G),P.scale.set(F?.006:.0065,F?.007:.0055,F?.021:.011).multiplyScalar(k),P.updateMatrix(),Z.setMatrixAt(se*2,P.matrix),V.set(0,0,F?-.022:-.013).applyQuaternion(G),P.position.copy(T).addScaledVector(V,k),P.scale.setScalar((F?.006:.0068)*k),P.updateMatrix(),Z.setMatrixAt(se*2+1,P.matrix);let Se=N?.42:.18+Math.sin(ne*(F?39:92)+q)*(F?.9:.74);for(let[ge,re]of[-1,1].entries())V.set(re*.004,0,0).applyQuaternion(G),P.position.copy(T).addScaledVector(V,k),z.setFromAxisAngle(v,re*Se),P.quaternion.copy(G).multiply(z),re<0&&P.quaternion.multiply(H),P.scale.setScalar(k),P.updateMatrix(),xe.setMatrixAt(se*2+ge,P.matrix)}g.emissiveIntensity=.055+.14*Math.max(0,j);for(let ee of[u,E,y,_])ee.instanceMatrix.needsUpdate=!0}return ie(0),{group:o,update:ie}}var po=3,WM=2.8;function XM(i,e){return e<-1.55||Math.abs(i)>2.55&&e<.45}var xs=(i,e)=>Math.hypot(i.x-e.x,i.z-e.z);function qM(i){let o=[],a=new Dn,c=new S;i.updateWorldMatrix(!0,!0);function l(g){if(g.visible){g.isMesh&&!g.isInstancedMesh&&g.geometry&&(g.geometry.computeBoundingBox(),a.copy(g.geometry.boundingBox).applyMatrix4(g.matrixWorld),a.getSize(c),a.min.y<.13&&a.max.y>.1&&c.y>.065&&Math.min(c.x,c.z)>.018&&o.push({x0:a.min.x-.15,x1:a.max.x+.15,z0:a.min.z-.15,z1:a.max.z+.15}));for(let x of g.children)l(x)}}for(let g of i.children)l(g);let h=Array.from({length:1763},(g,x)=>{let m=x%41,u=Math.floor(x/41),E=-3.6+m*.18,y=-3.65+u*.18;return{id:x,col:m,row:u,x:E,z:y,free:XM(E,y)&&!o.some(_=>E>=_.x0&&E<=_.x1&&y>=_.z0&&y<=_.z1),neighbors:[]}});for(let g of h)if(g.free)for(let x=-1;x<=1;x++)for(let m=-1;m<=1;m++){if(!m&&!x)continue;let u=g.col+m,E=g.row+x;if(u<0||u>=41||E<0||E>=43)continue;let y=h[E*41+u];y.free&&(!m||!x||h[g.row*41+u].free&&h[E*41+g.col].free)&&g.neighbors.push(y.id)}let p=h.filter(g=>g.free&&g.neighbors.length);function f(g,x,m){return(m?p.filter(E=>xs(E,m)>=po):p).reduce((E,y)=>!E||(y.x-g)**2+(y.z-x)**2<(E.x-g)**2+(E.z-x)**2?y:E,null)}function d(g,x,m){let u=new Int32Array(h.length).fill(-1),E=[g];u[g]=g;for(let R=0;R<E.length;R++){let A=h[E[R]],O=xs(A,m);for(let v of A.neighbors){let w=xs(h[v],m);u[v]<0&&(w>=po||w>O+.001)&&(u[v]=A.id,E.push(v))}}let y=h[g],_=E.filter(R=>{let A=h[R],O=Math.hypot(A.x-y.x,A.z-y.z);return O>.8&&O<2.8&&xs(A,m)>=po});if(!_.length)return[];let P=_[Math.floor(x()*_.length)],T=[];for(;P!==g;)T.push(h[P]),P=u[P];return T.reverse()}return{closest:f,path:d}}function O0({room:i,floorSupport:e,viewerPosition:t,seed:n=Math.floor(Math.random()*4294967295)}){let r=new we;r.name="Tiny mice and rats darting through distant shadows",r.userData.ignoreAcid=!0;let s=n>>>0,o=()=>(s=s*1664525+1013904223>>>0,s/4294967296),a=qM(i),c=new Mt,l=new S,h=new S,p=new S,f=new S(0,1,0),d=document.createElement("canvas");d.width=d.height=128;let g=d.getContext("2d");g.fillStyle="#e8e3d9",g.fillRect(0,0,128,128);for(let ne=0;ne<1400;ne++){g.strokeStyle=ne%3?"#7d766f30":"#ffffff66";let ee=o()*128,F=o()*128;g.beginPath(),g.moveTo(ee,F),g.lineTo(ee+(o()-.5)*2,F+3+o()*5),g.stroke()}let x=new Ot(d);x.colorSpace=xt;let m=new Ve({map:x,roughness:.96}),u=new Ve({roughness:.72}),E=new Ve({roughness:.88});function y(ne,ee,F,se){let q=new vn(ne,ee,F);return q.name=se,q.instanceMatrix.setUsage(Un),q.frustumCulled=!1,q.castShadow=!0,q.receiveShadow=!0,q.raycast=()=>{},r.add(q),q}let _=[[-2.75,-2.75],[-3.1,-.55],[2.65,-2.85]],P=_.length,T=new Kt(1,14,9),R=y(T,m,P*6,"Furry rat and mouse bodies"),A=y(T,u,P*9,"Ears, eyes, noses and running paws"),O=y(new Bt(1,1,1,7),E,P*9,"Long tapered swishing tails"),v=new Float32Array(P*4*2*3),w=new Pt;w.setAttribute("position",new hn(v,3).setUsage(Un));let V=new so(w,new us({color:12300704,transparent:!0,opacity:.45}));V.frustumCulled=!1,V.raycast=()=>{},r.add(V);let G=[5327684,5854283,4539454],z=_.map(([ne,ee],F)=>{let se=a.closest(ne,ee,t)||a.closest(ne,ee),q=F!==0;return{mouse:q,cell:se.id,x:se.x,z:se.z,yaw:o()*Math.PI*2,size:.28*(q?.58+o()*.08:.92+o()*.12),color:new pt(G[F]),phase:o()*6.28,speed:3.6*(q?1.05+o()*.3:.88+o()*.25),route:[],pause:1.2+F*1.6+o()*2,gait:0,moving:!1,visibility:1}}),H=new pt(7889757),Q=new pt(6771019),le=new pt(1118478),ie=null;function fe(ne,ee,F,se,q=l){let k=Math.cos(ne.yaw),Z=Math.sin(ne.yaw),xe=ne.size*ne.visibility;return q.set(ne.x+(ee*k+se*Z)*xe,e(ne.x,ne.z)+F*xe,ne.z+(-ee*Z+se*k)*xe)}function N(ne,ee,F,se,q,k,Z=0){fe(F,...se),c.position.copy(l),c.rotation.set(0,F.yaw,Z),c.scale.set(...q).multiplyScalar(F.size*F.visibility),c.updateMatrix(),ne.setMatrixAt(ee,c.matrix),ne.setColorAt(ee,k)}function j(ne,ee=!1,F=t){let se=ie===null?0:Math.min(.1,Math.max(0,ne-ie));ie=ne;let q=0;for(let[k,Z]of z.entries()){let _e=function(Re,Le){let he=Re/9;return fe(Z,Math.sin(he*3.5+Se*(Z.moving?8:1.6)+Z.phase)*.045*he,.026*(1-he)+.009,.126+Ae*he,Le)};Z.moving=!1;let xe=xs(Z,F);if(Z.visibility=Ge.smoothstep(xe,WM,po+.25),!ee){let Re=Z.route[0];if(Re&&xs(Re,F)<po&&xs(Re,F)<=xe&&(Z.route=[]),xe<po+.35&&(Z.pause=0),Z.pause>0)Z.pause-=se;else{Z.route.length||(Z.route=a.path(Z.cell,o,F));let Le=Z.speed*se;for(;Z.route.length&&Le>0;){let he=Z.route[0],D=he.x-Z.x,b=he.z-Z.z,$=Math.hypot(D,b),pe=Math.min($,Le);if(Z.moving=!0,Z.gait+=pe*45,Le-=pe,$>1e-4){Z.x+=D/$*pe,Z.z+=b/$*pe;let Me=Math.atan2(-D,-b),ve=Ge.euclideanModulo(Me-Z.yaw+Math.PI,Math.PI*2)-Math.PI;Z.yaw+=ve*(1-Math.exp(-se*28))}pe>=$-1e-4&&(Z.x=he.x,Z.z=he.z,Z.cell=he.id,Z.route.shift(),Z.route.length||(Z.pause=3+o()*5))}!Z.route.length&&!Z.moving&&(Z.pause=1)}}let Se=ee?0:ne,ge=Z.moving?Math.abs(Math.sin(Z.gait))*.005:Math.sin(Se*3+Z.phase)*.0015,re=Z.moving?0:Math.sin(Se*12+Z.phase)*.002,L=k*6,ye=k*9;N(R,L,Z,[0,.077+ge,0],[.068,.063,.125],Z.color),N(R,L+1,Z,[0,.081+ge,.068],[.07,.069,.071],Z.color),N(R,L+2,Z,[0,.078+ge,-.115],[.046,.044,.066],Z.color),N(R,L+3,Z,[0,.057+ge+re,-.177],[.03,.024,.05],Z.color);for(let[Re,Le]of[-1,1].entries()){let he=Z.mouse?1.23:.88;N(R,L+4+Re,Z,[Le*.044,.126+ge,-.102],[.03*he,.038*he,.012],Z.color,Le*.2),N(A,ye+Re,Z,[Le*.044,.128+ge,-.113],[.022*he,.028*he,.004],H,Le*.2),N(A,ye+2+Re,Z,[Le*.032,.094+ge,-.149],[.007,.008,.007],le)}N(A,ye+4,Z,[0,.057+ge+re,-.221],[.011,.009,.009],Q);for(let Re=0;Re<4;Re++){let Le=Re%2?-1:1,he=Re>1,D=Z.gait+(Re===0||Re===3?0:Math.PI),b=Z.moving?Math.max(0,Math.sin(D))*.023:0,$=Z.moving?Math.cos(D)*.027:0;N(A,ye+5+Re,Z,[Le*(he?.055:.043),.01+b,(he?.08:-.087)+$],[.018,.01,.031],H)}let Ae=Z.mouse?.23:.29;for(let Re=0;Re<9;Re++){_e(Re,l),_e(Re+1,h),p.copy(h).sub(l);let Le=p.length();c.position.copy(l).add(h).multiplyScalar(.5),c.quaternion.setFromUnitVectors(f,p.normalize());let he=(.009*(1-Re/9)+.001)*Z.size*Z.visibility;c.scale.set(he,Le,he),c.updateMatrix(),O.setMatrixAt(k*9+Re,c.matrix),O.setColorAt(k*9+Re,H)}for(let Re of[-1,1])for(let Le=0;Le<2;Le++)fe(Z,Re*.018,.061+ge,-.195),l.toArray(v,q),q+=3,fe(Z,Re*.08,.062+ge+re,-.2+Le*.027),l.toArray(v,q),q+=3}for(let k of[R,A,O])k.instanceMatrix.needsUpdate=!0,k.instanceColor.needsUpdate=!0;w.attributes.position.needsUpdate=!0}return j(0),{group:r,update:j}}function z0(){let i="drawer",e=!1,t=8;function n(r,s=!1){return s?"Detach your shackle before using the charger.":r==="drawer"?(e=!e,e?"Drawer opened. Take the MacBook charger and cable.":"Drawer closed."):r==="charger"?i!=="drawer"?"You already collected the charger.":e?(i="carrying","Charger collected. Plug it into the power strip behind you."):"Open the rear drawer first.":r==="strip"?i==="drawer"?"The power strip is on. Find the charger in the rear drawer.":i==="carrying"?(i="powered","Charger plugged in. Connect its cable to the MacBook."):i==="charging"?"The MacBook is charging.":"The charger has power. Connect the MacBook.":r==="laptop"?i==="powered"?(i="charging","Cable connected. The MacBook is charging."):i==="charging"?`MacBook battery: ${Math.floor(t)}%.`:i==="carrying"?"Plug the charger into the power strip first.":"Find the charger in the rear drawer.":""}return{use:n,update(r){i==="charging"&&(t=Math.min(100,t+Math.max(0,r)*.65))},reset(){i="drawer",e=!1,t=8},get phase(){return i},get drawerOpen(){return e},get battery(){return t},get nextAction(){return i==="drawer"?e?"charger":"drawer":i==="carrying"?"strip":i==="powered"?"laptop":null}}}function B0({adapterExit:i,connectorExit:e,laptop:t,floorSupport:n}){let r=i.getWorldPosition(new S),s=e.getWorldPosition(new S),o=new S(1,0,0).transformDirection(i.matrixWorld),a=new S(-1,0,0).transformDirection(e.matrixWorld),c=d=>(d.y=n(d.x,d.z)+.0055,d),l=(d,g)=>c(t.localToWorld(new S(d,0,g))),h=[r,r.clone().addScaledVector(o,.065),c(r.clone().addScaledVector(o,.22)),l(-.32,1.45),l(-.61,1.12),l(-.85,.85),l(-.91,.48),l(-.9,.06),c(s.clone().addScaledVector(a,.23)),s.clone().addScaledVector(a,.09),s],p=new $t(h,!1,"centripetal"),f=new ai;return f.getPoint=(d,g=new S)=>(p.getPoint(d,g),g.y=Math.max(g.y,n(g.x,g.z)+.0055),g),new un(f,112,.0045,8,!1)}function k0({filing:i,laptop:e,floorSupport:t,drawerMaterial:n}){let r=new we;r.name="Interactive MacBook charging kit";let s=new zn(10794149,1.5,2.8,2);s.position.set(1.55,1.25,3.25),r.add(s);let o=z0(),a=new Ve({color:14275780,roughness:.51}),c=new Ve({color:15131609,roughness:.42}),l=new Ve({color:2435105,roughness:.88}),h=new Ve({color:9082261,roughness:.4,metalness:.7}),p=new yt({color:16757557}),f=new yt({color:9422728});function d(he,D,b=r){let $=new dt(he,D);return $.castShadow=!0,$.receiveShadow=!0,b.add($),$}function g(he,D,b,$){let pe=d(new wt(...he),b,$);return pe.position.set(...D),pe}function x(he,D,b,$){let[pe,Me,ve]=he,Oe=Math.min(.012,Me*.24),He=new Tt,ke=pe/2,nt=Me/2;He.moveTo(-ke+Oe,-nt),He.lineTo(ke-Oe,-nt),He.quadraticCurveTo(ke,-nt,ke,-nt+Oe),He.lineTo(ke,nt-Oe),He.quadraticCurveTo(ke,nt,ke-Oe,nt),He.lineTo(-ke+Oe,nt),He.quadraticCurveTo(-ke,nt,-ke,nt-Oe),He.lineTo(-ke,-nt+Oe),He.quadraticCurveTo(-ke,-nt,-ke+Oe,-nt);let De=Math.min(.004,ve/6),K=new sn(He,{depth:ve-2*De,bevelEnabled:!0,bevelSize:De,bevelThickness:De,bevelSegments:2,curveSegments:5});K.translate(0,0,-ve/2+De);let me=d(K,b,$);return me.position.set(...D),me}function m(he,D,b,$=r){return d(new un(new $t(he.map(pe=>pe.isVector3?pe:new S(...pe))),48,D,7,!1),b,$)}function u(he,D,b,$,pe){let Me=document.createElement("canvas");Me.width=512,Me.height=128;let ve=Me.getContext("2d");ve.fillStyle="#c4c4b6",ve.fillRect(0,0,512,128),ve.fillStyle="#353b35",ve.font="600 58px Arial",ve.textAlign="center",ve.fillText(he,256,85,480);let Oe=new Ot(Me);Oe.colorSpace=xt;let He=d(new bt(D,b),new Ve({map:Oe,roughness:.9}),pe);return He.position.set(...$),He}let E=new we;E.name="Rear drawer containing the MacBook charger",E.userData.chargingAction="drawer",E.position.set(-.38,.56,0),i.add(E),g([.71,.32,.025],[0,0,.231],n,E),x([.22,.022,.028],[0,.04,.264],h,E),u("CHARGERS",.2,.047,[0,-.065,.246],E),g([.66,.018,.36],[0,-.145,.025],n,E);for(let he of[-.33,.33])g([.015,.27,.36],[he,-.01,.025],n,E);g([.66,.27,.015],[0,-.01,-.155],n,E);for(let he of[-.348,.348])g([.013,.027,.43],[he,-.08,.015],h,E);let y=new we;y.name="MacBook USB-C power adapter",y.userData.chargingAction="charger",E.add(y),y.position.set(.105,-.097,.045),x([.145,.075,.145],[0,0,0],c,y),g([.147,.001,.147],[0,-.009,0],a,y);for(let he of[-.016,.016])g([.005,.025,.015],[he,-.049,0],h,y);g([.003,.015,.027],[.074,.006,0],l,y);let _=new we;_.visible=!1,y.add(_),x([.032,.016,.022],[.095,.006,0],c,_);let P=d(new Bt(.0048,.007,.024,12),a,_);P.rotation.z=-Math.PI/2,P.position.set(.121,.006,0);let T=new Mt;T.name="Adapter cable exit",T.position.set(.133,.006,0),y.add(T),u("96W USB-C",.086,.022,[0,.009,.075],y).material.color.setHex(10066834);let A=new we;A.name="Coiled charger cable",A.userData.chargingAction="charger",E.add(A),A.position.set(-.145,-.127,.06);let O=[];for(let he=0;he<=120;he++){let D=he/120*Math.PI*6;O.push([Math.cos(D)*(.086+he*12e-5),he*45e-6,Math.sin(D)*.06])}m(O,.0045,c,A),x([.041,.014,.019],[.12,.01,0],c,A),g([.014,.009,.014],[.145,.01,0],h,A);let v=new we;v.name="Powered floor power strip",v.userData.chargingAction="strip",v.position.set(1.94,t(1.94,3.72)+.032,3.72),v.rotation.y=-.16,r.add(v),x([.51,.055,.12],[0,0,0],a,v);for(let he of[-.16,-.055,.05,.155]){g([.079,.001,.082],[he,.029,0],c,v);for(let b of[-.02,.02])g([.021,.002,.006],[he-.009,.031,b],l,v);let D=d(new Ti(.007,12),l,v);D.rotation.x=-Math.PI/2,D.position.set(he+.022,.031,0)}let w=x([.035,.011,.057],[.224,.032,0],new Ve({color:10303786,roughness:.4}),v);w.rotation.z=.07,g([.008,.002,.02],[.224,.039,0],f,v);let V=x([.12,.16,.018],[2.15,.27,4.424],a,r);for(let he of[.235,.3]){g([.065,.042,.006],[2.15,he,4.411],c,r);for(let D of[2.136,2.164])g([.005,.016,.003],[D,he+.004,4.406],l,r)}x([.054,.043,.055],[2.15,.3,4.383],l,r);let G=v.localToWorld(new S(-.265,0,0));m([G,[1.57,.018,3.8],[1.61,.015,4.04],[1.98,.015,4.25],[2.16,.07,4.34],[2.15,.3,4.35]],.007,l).raycast=()=>{};let z=new we;z.name="MacBook charging port",z.userData.chargingAction="laptop",z.position.set(-.446,.002,-.18),e.object.add(z),g([.005,.01,.035],[0,0,0],l,z);let H=d(new wt(.045,.048,.085),new yt({transparent:!0,opacity:0,colorWrite:!1,depthWrite:!1}),z);H.castShadow=!1;let Q=new we;Q.name="Connected MacBook charging cable",Q.visible=!1,r.add(Q),x([.048,.018,.026],[0,0,0],c,Q),g([.014,.008,.022],[.03,0,0],h,Q);let le=d(new Bt(.0048,.008,.032,12),a,Q);le.rotation.z=Math.PI/2,le.position.x=-.041;let ie=new Mt;ie.name="Laptop cable exit",ie.position.x=-.057,Q.add(ie);let fe=g([.01,.003,.007],[.005,.011,0],p,Q);fe.castShadow=!1;let N=document.createElement("canvas");N.width=512,N.height=96;let j=N.getContext("2d"),ne=new Ot(N);ne.colorSpace=xt;let ee=d(new bt(.245,.046),new yt({map:ne}),e.screen);ee.name="MacBook battery charge readout",ee.position.set(.282,.235,.001),ee.visible=!1,ee.castShadow=!1;let F=0,se=-1/0,q=-1/0,k=null,Z=-1,xe="",Se=null,ge=new S,re=new S;function L(he){let D=k?.geometry,b=B0({adapterExit:T,connectorExit:ie,laptop:e.object,floorSupport:t});k?(k.geometry=b,D.dispose()):(k=d(b,c),k.name="Charging cable resting across the floor",k.raycast=()=>{}),Z=he}function ye(he,D,b=!1){let $=o.phase,pe=o.use(he,b);return b||($==="drawer"&&o.phase==="carrying"&&(y.visible=!1,A.visible=!1),$==="carrying"&&o.phase==="powered"&&(v.add(y),y.visible=!0,y.rotation.set(0,0,0),y.position.set(-.16,.075,0),se=D,r.add(A),A.visible=!0,A.rotation.set(0,.4,0),A.position.set(1.7,t(1.7,3.42)+.008,3.42)),$==="powered"&&o.phase==="charging"&&(q=D,Q.visible=!0,_.visible=!0,A.visible=!1)),pe}function Ae(he,D=!1){let b=Se===null?0:Math.max(0,Math.min(.05,he-Se));Se=he,o.update(b);let $=o.drawerOpen?1:0;if(F=D?$:Ge.damp(F,$,8,b),E.position.z=F*.43,(o.phase==="powered"||o.phase==="charging")&&(y.position.y=.075+(D?0:.19*(1-Ge.smootherstep(he-se,0,.65)))),o.phase==="charging"){let Oe=D?1:Ge.smootherstep(he-q,0,.65);z.getWorldPosition(re),Q.quaternion.copy(e.object.getWorldQuaternion(new ft)),ge.set(-.032-(1-Oe)*.12,(1-Oe)*.028,0).applyQuaternion(Q.quaternion),Q.position.copy(re).add(ge),(Math.abs(Oe-Z)>.02||Oe===1&&Z!==1)&&L(Oe),fe.material=o.battery>=100?f:p}ee.visible=e.openProgress>.35;let pe=Math.floor(o.battery),Me=o.phase==="charging",ve=`${Me?"\u26A1 ":""}${pe}%`;ve!==xe&&(xe=ve,j.fillStyle="#222e36",j.fillRect(0,0,512,96),j.fillStyle=Me?"#93dba3":"#e3b36d",j.font="500 44px Arial",j.textAlign="right",j.fillText(ve,385,63),j.strokeStyle=Me?"#93dba3":"#e3b36d",j.lineWidth=5,j.strokeRect(405,25,72,44),j.fillRect(480,37,7,19),j.fillRect(413,33,56*pe/100,28),ne.needsUpdate=!0)}function _e(){o.reset(),F=0,E.position.z=0,E.add(y,A),y.visible=A.visible=!0,y.position.set(.105,-.097,.045),y.rotation.set(0,0,0),A.position.set(-.145,-.127,.06),A.rotation.set(0,0,0),Q.visible=!1,_.visible=!1,k&&(r.remove(k),k.geometry.dispose(),k=null),Z=-1,xe="",Se=null}function Re(he){return he==="drawer"?o.drawerOpen?"Close charger drawer":"Open charger drawer":he==="charger"?"Take MacBook charger + cable":he==="strip"?o.phase==="carrying"?"Plug charger into power strip":"Powered power strip":he==="laptop"?o.phase==="powered"?"Connect charger to MacBook":`MacBook battery \xB7 ${Math.floor(o.battery)}%`:o.phase==="carrying"?"Charger collected \xB7 Plug into the power strip [F]":o.phase==="powered"?"Charger powered \xB7 Connect the MacBook [F]":o.phase==="charging"?`${o.battery>=100?"Fully charged":"Charging"} \xB7 ${Math.floor(o.battery)}%`:""}function Le(he,D){i.updateWorldMatrix(!0,!1),i.localToWorld(he.set(E.position.x,E.position.y+.94,1.08)),i.localToWorld(D.set(E.position.x,E.position.y-.085,.48))}return Ae(0),{group:r,use:ye,update:Ae,reset:_e,hint:Re,getDrawerView:Le,get drawerOpen(){return o.drawerOpen},get phase(){return o.phase},get nextAction(){return o.nextAction},get drawerReady(){return F>.85},get battery(){return o.battery}}}function V0(){let i="sealed",e=-1/0;return{get phase(){return i},get hasKey(){return i==="collected"},get startedAt(){return e},pour(t){return i!=="sealed"?!1:(i="pouring",e=t,!0)},update(t){i==="pouring"&&t-e>=3.4&&(i="revealed")},collect(){return i!=="revealed"?!1:(i="collected",!0)},reset(){i="sealed",e=-1/0}}}function G0(i){let e=i.geometry,t=e.attributes.position,n=t.array.slice(),r=e.parameters.points,s=e.parameters.segments,o=r.length,a=r.filter(m=>m.x>0),c=a[0].y,l=a.at(-1).y,h=new Float32Array(s+1),p=new Float32Array(s+1),f=!1;function d(m){for(let u=1;u<a.length;u++)if(m<=a[u].y){let E=a[u-1],y=a[u],_=(m-E.y)/(y.y-E.y||1);return E.x+(y.x-E.x)*_}return a.at(-1).x}function g(){t.array.set(n),t.needsUpdate=!0,e.computeVertexNormals(),i.visible=!0,f=!1}function x(m){if(m>=.999){i.visible=!1,f=!0;return}if(f)return;i.updateWorldMatrix(!0,!1);let u=i.matrixWorld.elements;if(u[5]>=-.3||m<=0)return;let E=c+(l-c)*m,y=u[5]*E;for(let _=0;_<=s;_++){let P=_/s*Math.PI*2,T=Math.sin(P),R=Math.cos(P),A=c,O=l;for(let v=0;v<18;v++){let w=(A+O)/2,V=d(w);(u[1]*T+u[9]*R)*V+u[5]*w>y?A=w:O=w}h[_]=(A+O)/2,p[_]=d(h[_]);for(let v=0;v<o;v++){let w=_*o+v,V=w*3,G=n[V+1];if(G<h[_]){let z=r[v].x===0;t.setXYZ(w,z?0:T*p[_],z?E:h[_],z?0:R*p[_])}else t.setXYZ(w,n[V],G,n[V+2])}}t.needsUpdate=!0,e.computeVertexNormals()}return{update:x,reset:g}}function W0({bottle:i,contents:e,cap:t,floorSupport:n}){let r=new we;r.name="Ketchup spill and hidden shackle key";let s=V0(),o=i.position.clone(),a=i.quaternion.clone();i.userData.keyAction="pour";let c=new S(0,1,0).applyQuaternion(a),l=new ft().setFromUnitVectors(c,new S(-.12,-.99,.06).normalize()).multiply(a),h=o.clone().add(new S(-.32,.42,-.04)),p=G0(e),f=new S(0,.469,0).applyMatrix4(i.children[0].matrix).multiply(i.scale).applyQuaternion(l).add(h);f.y=n(f.x,f.z)+.009;let d=t.position.clone(),g=t.quaternion.clone();t.updateWorldMatrix(!0,!1);let x=t.getWorldPosition(new S),m=t.getWorldQuaternion(new ft),u=x.clone().add(new S(-.13,0,.1));u.y=n(u.x,u.z)+.016;let E=new Ve({color:13674833,metalness:.72,roughness:.27,emissive:7161877,emissiveIntensity:.18}),y=new we;y.name="Brass shackle key",y.userData.keyAction="collect",r.add(y),y.visible=!1;function _(ne,ee,F){let se=new dt(ne,ee);return se.castShadow=!0,se.receiveShadow=!0,F.add(se),se}let P=_(new Qt(.025,.0055,8,24),E,y);P.rotation.x=Math.PI/2,P.position.x=-.042;let T=_(new wt(.078,.009,.01),E,y);T.position.x=.013;for(let ne of[.027,.047])_(new wt(.01,.009,.022),E,y).position.set(ne,0,.01);let R=_(new wt(.15,.04,.1),new yt({transparent:!0,opacity:0,depthWrite:!1,colorWrite:!1}),y);R.castShadow=!1,R.receiveShadow=!1;let A=new Xt({color:12001548,roughness:.28,clearcoat:1,clearcoatRoughness:.18}),O=new we;O.position.copy(f),O.position.y-=.006,r.add(O),O.visible=!1;let v=new Tt;for(let ne=0;ne<=64;ne++){let ee=ne/64*Math.PI*2,F=1+.1*Math.sin(ee*5)+.07*Math.cos(ee*9),se=Math.cos(ee)*.2*F,q=Math.sin(ee)*.13*F;ne===0?v.moveTo(se,q):v.lineTo(se,q)}let w=_(new Xi(v,32),A,O);w.rotation.x=-Math.PI/2,w.castShadow=!1;let V=[];for(let ne=0;ne<7;ne++){let ee=ne*2.4,F=.05+ne*.016,se=_(new Kt(1,12,8),A,O);se.position.set(Math.cos(ee)*F,.003,Math.sin(ee)*F*.6),se.scale.set(.015+ne%3*.005,.004,.012),V.push(se)}let G=_(new Bt(.7,1,1,10),A,r);G.name="Downward ketchup stream",G.visible=!1,G.castShadow=!1;let z=new S,H=new S,Q=new S,le=new S(0,1,0),ie=ne=>{let ee=Ge.clamp(ne,0,1);return ee*ee*(3-2*ee)},fe=!1;function N(){s.reset(),i.position.copy(o),i.quaternion.copy(a),p.reset(),i.children[0].add(t),t.position.copy(d),t.quaternion.copy(g),t.scale.setScalar(1),fe=!1,y.visible=!1,O.visible=!1,G.visible=!1}function j(ne,ee){if(s.update(ne),s.phase==="sealed")return;let F=ne-s.startedAt,se=ie(F/.8)*(1-ie((F-3.35)/.8));i.position.copy(o).lerp(h,se),i.quaternion.copy(a).slerp(l,se),fe||(r.attach(t),fe=!0),t.position.copy(x).lerp(u,ie(F/.55)),t.position.y+=Math.sin(Math.min(1,F/.55)*Math.PI)*.08,t.quaternion.copy(m).multiply(new ft().setFromAxisAngle(new S(0,0,1),ie(F/.55)*2));let q=ie((F-.8)/2.5);if(p.update(q),O.visible=F>.75,O.scale.setScalar(Math.max(.01,q)),i.updateWorldMatrix(!0,!0),i.children[0].localToWorld(z.set(0,.469,0)),G.visible=F>.8&&F<3.3,G.visible){H.copy(z).add(f).multiplyScalar(.5),Q.subVectors(z,f),G.position.copy(H),G.quaternion.setFromUnitVectors(le,Q.clone().normalize());let k=ee?1:1+Math.sin(F*21)*.12;G.scale.set(.012*k,Q.length(),.012*k)}if(y.visible=F>=2.5&&!s.hasKey,y.visible){let k=ie((F-2.5)/.9);y.position.copy(z).lerp(f,k),y.position.y+=Math.sin(k*Math.PI)*.065,y.rotation.set((1-k)*2,k*.5,(1-k)*3),E.emissiveIntensity=ee?.22:.22+.1*Math.sin(ne*3)}}return{group:r,bottle:i,key:y,update:j,reset:N,get hasKey(){return s.hasKey},get phase(){return s.phase},pour:ne=>s.pour(ne),collect:()=>s.collect(),hint(ne){return ne==="collect"&&!s.hasKey?s.phase==="revealed"?"Pick up the shackle key":"A key is sliding out\u2026":ne==="pour"?s.phase==="sealed"?"Pour out the ketchup":s.phase==="pouring"?"Pouring ketchup\u2026":s.hasKey?"The bottle is empty":"Pick up the key in the ketchup":""}}}var pl=(i,e,t)=>Math.max(e,Math.min(t,i));function X0({speed:i=.38,maxPoints:e=180}={}){let t=[],n=null,r=!1;function s(a,c,l,h=!1){return h||n!==null||t.some(p=>p.index===a)?!1:(t.push({index:a,openedAt:l,progress:0,origin:{...c},head:{x:c.x,z:c.z},points:[]}),!0)}function o(a,c,l){if(r)return!1;for(let h of t){if(h.progress=pl((a-h.openedAt)/1.35,0,1),a-h.openedAt<.48)continue;h.points.length||h.points.push({...h.head,born:a,radius:.13});let p=l.x-h.head.x,f=l.z-h.head.z,d=Math.hypot(p,f),g=Math.min(d,i*pl(c,0,.08));if(d>.001){let m=.18*Math.sin((a-h.openedAt)*.85+h.index*1.9),u=Math.sqrt(1+m*m);h.head.x+=(p/d-f/d*m)*g/u,h.head.z+=(f/d+p/d*m)*g/u}let x=h.points.at(-1);Math.hypot(x.x-h.head.x,x.z-h.head.z)>.075&&(h.points.push({...h.head,born:a,radius:.13}),h.points.length>e&&h.points.splice(1,1));for(let[m,u]of h.points.entries()){let E=pl((a-u.born)/3,0,1);u.radius=m===0?.16+.23*E:.12+(.13+.025*Math.sin(u.born*1.8+h.index))*E,n===null&&Math.hypot(l.x-u.x,l.z-u.z)<u.radius+.15&&(n=a)}}return n!==null&&a-n>=.85?(r=!0,!0):!1}return{open:s,update:o,leaks:t,reset(){t.length=0,n=null,r=!1},get dying(){return n!==null},get finished(){return r},blackout(a){return n===null?0:pl((a-n)/.7,0,1)}}}function q0(i,e,t){let n=Ut.textureSize,r=document.createElement("canvas");r.width=r.height=n;let s=r.getContext("2d"),o=new Ot(r);o.flipY=!1,o.generateMipmaps=!1,o.minFilter=pn;let a={value:o};function c(y){let _=new Xt({color:6519843,roughness:.12,metalness:0,ior:1.333,clearcoat:1,clearcoatRoughness:.08,emissive:2571784,emissiveIntensity:.15,transparent:y,opacity:y?.92:1,depthWrite:!y,side:Dt,envMapIntensity:1.4});return _.onBeforeCompile=P=>{P.uniforms.acidTime=t,P.uniforms.acidWet=a,P.vertexShader=`varying vec3 vWetWorld;
`+P.vertexShader,P.vertexShader=P.vertexShader.replace("#include <worldpos_vertex>",`#include <worldpos_vertex>
    vec4 wetVertex=vec4(transformed,1.0);
    #ifdef USE_INSTANCING
     wetVertex=instanceMatrix*wetVertex;
    #endif
    vWetWorld=(modelMatrix*wetVertex).xyz;`),P.fragmentShader=`uniform float acidTime;uniform sampler2D acidWet;varying vec3 vWetWorld;
`+P.fragmentShader,P.fragmentShader=P.fragmentShader.replace("#include <color_fragment>",`#include <color_fragment>
    vec2 flowUV=vWetWorld.xz;
    float eddy=sin(flowUV.x*14.0+sin(flowUV.y*9.0-acidTime*.7)+acidTime*.35)*sin(flowUV.y*17.0-acidTime*.8);
    float fine=sin(flowUV.x*71.0+flowUV.y*43.0-acidTime*2.5)*sin(flowUV.y*81.0-flowUV.x*29.0+acidTime*1.8);
    ${y?`float wet=texture2D(acidWet,(flowUV+vec2(4.1,4.2))/vec2(8.2,8.8)).r;
    wet-=.035*eddy+.018*fine;
    if(wet<.055)discard;
    float depth=smoothstep(.12,.95,wet);
    diffuseColor.rgb=mix(vec3(.31,.42,.085),diffuseColor.rgb*.62,depth);
    diffuseColor.a*=smoothstep(.055,.22,wet)*mix(.48,1.0,depth);`:""}
    diffuseColor.rgb*=.94+.07*eddy+.025*fine;`),P.fragmentShader=P.fragmentShader.replace("#include <normal_fragment_begin>",`#include <normal_fragment_begin>
    float dx=.045*cos(vWetWorld.x*24.0+vWetWorld.z*12.0-acidTime*2.1)+.018*cos(vWetWorld.x*83.0-vWetWorld.z*36.0+acidTime*3.0);
    float dz=.035*sin(vWetWorld.z*27.0-vWetWorld.x*9.0+acidTime*1.7)+.012*sin(vWetWorld.z*79.0+acidTime*3.4);
    normal=normalize(normal+mat3(viewMatrix)*vec3(dx,0.0,dz));`)},_.customProgramCacheKey=()=>`acid-water-${y?"surface":"jet"}-v2`,_}let l=c(!0),h=c(!1),p=Ut.mobile?48:72,f=new bt(8.2,8.8,p,p);f.rotateX(-Math.PI/2),f.translate(0,0,.2);let d=f.attributes.position,g=f.attributes.uv;for(let y=0;y<d.count;y++){let _=d.getX(y),P=d.getZ(y);d.setY(y,i(_,P)+.006),g.setXY(y,(_+4.1)/8.2,(P+4.2)/8.8)}d.needsUpdate=!0,g.needsUpdate=!0,f.computeVertexNormals();let x=new dt(f,l);x.name="Continuous reflective acid film",x.renderOrder=4,x.receiveShadow=!0;let m=new dt(f,new yt({color:1053961,alphaMap:e,transparent:!0,opacity:.44,depthWrite:!1,alphaTest:.01}));m.name="Damp corroded edge beneath acid",m.position.y=-.002,m.renderOrder=3;let u=-1/0;function E(y,_){if(!(y-u<.1)){u=y,s.globalCompositeOperation="source-over",s.fillStyle="#000",s.fillRect(0,0,n,n),s.globalCompositeOperation="lighten";for(let P of _)for(let T of P.points){let R=(T.x+4.1)/8.2*n,A=(T.z+4.2)/8.8*n,O=T.radius*n/8.2,v=s.createRadialGradient(R,A,0,R,A,O);v.addColorStop(0,"#fff"),v.addColorStop(.62,"#fff"),v.addColorStop(.85,"#999"),v.addColorStop(1,"#000"),s.fillStyle=v,s.fillRect(R-O,A-O,O*2,O*2)}o.needsUpdate=!0}}return{pool:x,scorch:m,jetMaterial:h,update:E,reset(){u=-1/0,s.globalCompositeOperation="source-over",s.fillStyle="#000",s.fillRect(0,0,n,n),o.needsUpdate=!0},setEnvironment(y){for(let _ of[l,h])_.envMap=y,_.needsUpdate=!0}}}function Y0(i,e,t){let n=new S,r=new ft;i.getWorldPosition(n),i.getWorldQuaternion(r);let s=new S(0,-.25,.6).applyQuaternion(r),o=9.81,a=e(n.x,n.z)+.009,c=Math.max(.01,n.y-a),l=(s.y+Math.sqrt(s.y*s.y+2*o*c))/o,h=n.clone().addScaledVector(s,l);h.y=e(h.x,h.z)+.009;let p=20,f=10,d=new Pt,g=new Float32Array((p+1)*(f+1)*3),x=new Float32Array(g.length),m=[];for(let A=1;A<=p;A++)for(let O=1;O<=f;O++){let v=A*(f+1)+O;m.push(v,v-f-2,v-1,v,v-f-1,v-f-2)}d.setAttribute("position",new hn(g,3).setUsage(Un)),d.setAttribute("normal",new hn(x,3).setUsage(Un)),d.setIndex(m);let u=new dt(d,t);u.name="Gravity-fed wavering drain stream",u.frustumCulled=!1,u.raycast=()=>{};let E=new S,y=new S,_=new S,P=new S,T=new S;function R(A,O){let v=Ge.smoothstep(O,0,.65);for(let w=0;w<=p;w++){let V=w/p,G=V*l;E.copy(n).addScaledVector(s,G),E.y-=.5*o*G*G,E.x+=Math.sin(A*19-V*13)*.002*V,E.z+=Math.sin(A*16-V*11)*.0015*V,y.copy(s),y.y-=o*G,y.normalize(),_.set(1,0,0).addScaledVector(y,-y.x).normalize(),P.crossVectors(_,y);let z=(.021-.01*V)*(1+.12*Math.sin(V*25-A*23))*v;for(let H=0;H<=f;H++){let Q=H/f*Math.PI*2,le=(w*(f+1)+H)*3;T.copy(_).multiplyScalar(Math.cos(Q)).addScaledVector(P,Math.sin(Q)),T.toArray(x,le),g[le]=E.x+T.x*z,g[le+1]=E.y+T.y*z,g[le+2]=E.z+T.z*z}}d.attributes.position.needsUpdate=d.attributes.normal.needsUpdate=!0}return R(0,1),{mesh:u,origin:h,update:R}}function Z0({valves:i,floorSupport:e}){let t=new we;t.name="Corrosive green liquid, bubbles and contact smoke",t.userData.ignoreAcid=!0,t.visible=!1;let n=X0(),r=new Mt,s=new ft,o={value:0},a=new Map,c=new Map,l=[],h=-1/0,p=document.createElement("canvas");p.width=p.height=512;let f=p.getContext("2d");f.fillStyle="#000",f.fillRect(0,0,512,512);let d=new Ot(p);d.generateMipmaps=!1,d.minFilter=pn,d.flipY=!1;let g={value:d};function x(N){if(c.has(N))return c.get(N);let j=N.clone(),ne=N.onBeforeCompile,ee=N.customProgramCacheKey();return j.onBeforeCompile=F=>{ne.call(N,F),F.uniforms.acidBurn=g,F.vertexShader=`varying vec3 vAcidWorld;
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
    if(burned>.48&&pitting<(burned-.48)*.55)discard;`)},j.customProgramCacheKey=()=>ee+"-acid-corrosion-v1",c.set(N,j),j}function m(N){let j=new Dn;function ne(ee){if(!ee.userData.ignoreAcid){if(ee.isMesh&&ee.material&&(j.setFromObject(ee),j.min.y<.4&&j.max.y>-.01)){j.max.y>.02&&j.max.y<.65&&l.push(j.clone());let F=se=>se.isMeshStandardMaterial||se.isMeshBasicMaterial||se.isMeshToonMaterial?x(se):se;ee.material=Array.isArray(ee.material)?ee.material.map(F):F(ee.material)}for(let F of ee.children)ne(F)}}for(let ee of N)ee.updateWorldMatrix(!0,!0),ne(ee)}let u=q0(e,d,o);t.add(u.scorch,u.pool);let E=new vn(new Kt(1,10,7),new Xt({color:10530404,roughness:.13,clearcoat:1,transparent:!0,opacity:.72,depthWrite:!1}),54);E.instanceMatrix.setUsage(Un),E.frustumCulled=!1,E.count=0,t.add(E);let y=new vn(new Kt(1,8,6),u.jetMaterial,42);y.instanceMatrix.setUsage(Un),y.frustumCulled=!1,y.count=0,y.name="Small falling splash droplets",t.add(y);let _=new kr(.9,1,32);_.rotateX(-Math.PI/2);let P=new hs(new Float32Array(12),1);_.setAttribute("rippleAlpha",P);let T=new yt({color:11978123,transparent:!0,opacity:.32,depthWrite:!1,side:Dt});T.onBeforeCompile=N=>{N.vertexShader=`attribute float rippleAlpha;varying float vRippleAlpha;
`+N.vertexShader,N.vertexShader=N.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
vRippleAlpha=rippleAlpha;`),N.fragmentShader=`varying float vRippleAlpha;
`+N.fragmentShader,N.fragmentShader=N.fragmentShader.replace("#include <color_fragment>",`#include <color_fragment>
diffuseColor.a*=vRippleAlpha;`)};let R=new vn(_,T,12);R.instanceMatrix.setUsage(Un),R.frustumCulled=!1,R.count=0,R.renderOrder=6,R.name="Expanding impact rings",t.add(R);let A=document.createElement("canvas");A.width=A.height=128;let O=A.getContext("2d");for(let N=0;N<7;N++){let j=64+Math.sin(N*2.4)*23,ne=64+Math.cos(N*3.1)*21,ee=O.createRadialGradient(j,ne,0,j,ne,36);ee.addColorStop(0,"rgba(220,231,199,.3)"),ee.addColorStop(1,"rgba(220,231,199,0)"),O.fillStyle=ee,O.fillRect(0,0,128,128)}let v=new Ot(A),w=new bt(1,1),V=new hs(new Float32Array(84),1);w.setAttribute("smokeAlpha",V);let G=new yt({map:v,transparent:!0,opacity:.27,depthWrite:!1,color:12699827,side:Dt});G.onBeforeCompile=N=>{N.vertexShader=`attribute float smokeAlpha;varying float vSmokeAlpha;
`+N.vertexShader,N.vertexShader=N.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
vSmokeAlpha=smokeAlpha;`),N.fragmentShader=`varying float vSmokeAlpha;
`+N.fragmentShader,N.fragmentShader=N.fragmentShader.replace("#include <color_fragment>",`#include <color_fragment>
diffuseColor.a*=vSmokeAlpha;`)};let z=new vn(w,G,84);z.name="Smoke rising from corroding surfaces",z.instanceMatrix.setUsage(Un),z.frustumCulled=!1,z.count=0,z.renderOrder=12,t.add(z),t.traverse(N=>{N.isMesh&&(N.raycast=()=>{})});function H(N,j){let ne=e(N,j);for(let ee of l)N>=ee.min.x&&N<=ee.max.x&&j>=ee.min.z&&j<=ee.max.z&&(ne=Math.max(ne,Math.min(.27,ee.max.y)));return ne}function Q(N,j,ne=!1){let ee=i[N];if(!ee||ne||n.dying||n.leaks.some(se=>se.index===N))return!1;let F=Y0(ee.outlet,e,u.jetMaterial);return n.open(N,F.origin,j,ne)?(F.mesh.visible=!1,t.add(F.mesh),a.set(N,F),t.visible=!0,!0):(F.mesh.geometry.dispose(),!1)}function le(N){if(!(N-h<.1)){h=N;for(let j of n.leaks)for(let ne of j.points){let ee=(ne.x+4.1)/8.2*512,F=(ne.z+4.2)/8.8*512,se=ne.radius*512/8.2*1.18,q=f.createRadialGradient(ee,F,se*.45,ee,F,se);q.addColorStop(0,"rgba(255,255,255,.13)"),q.addColorStop(1,"rgba(255,255,255,0)"),f.fillStyle=q,f.fillRect(ee-se,F-se,se*2,se*2)}d.needsUpdate=!0}}function ie(N,j,ne,ee,F=!1){if(!n.leaks.length)return!1;let se=n.update(N,j,ne),q=F?0:N;o.value=q,ee.getWorldQuaternion(s);let k=0,Z=0,xe=0,Se=0;for(let ge of n.leaks){i[ge.index].setOpen(F?1:Ge.smootherstep(ge.progress,0,1));let re=a.get(ge.index);if(re.mesh.visible=ge.points.length>0,re.update(q,ge.progress),!!ge.points.length){for(let L=0;L<18;L++){let ye=ge.points[(L*17+ge.index*5)%ge.points.length],Ae=(q*.9+L*.618)%1,_e=L*2.399,Re=ye.radius*.57;r.position.set(ye.x+Math.cos(_e)*Re,e(ye.x,ye.z)+.008+Math.sin(Ae*Math.PI)*.005,ye.z+Math.sin(_e)*Re);let Le=(.005+L%4*.0025)*Math.sin(Ae*Math.PI);r.scale.set(Le,Le*.45,Le),r.quaternion.identity(),r.updateMatrix(),E.setMatrixAt(k++,r.matrix)}for(let L=0;L<14;L++){let ye=(q*2.7+L*.618)%1,Ae=L*2.399+ge.index,_e=.015+ye*(.07+L%3*.02),Re=.045+L%4*.012;r.position.set(ge.origin.x+Math.cos(Ae)*_e,ge.origin.y+4*Re*ye*(1-ye),ge.origin.z+Math.sin(Ae)*_e);let Le=(.003+L%3*.0015)*(1-ye*.45);r.scale.set(Le,Le*(1.3+ye),Le),r.quaternion.identity(),r.updateMatrix(),y.setMatrixAt(xe++,r.matrix)}for(let L=0;L<4;L++){let ye=(q*1.6+L*.25)%1,Ae=.018+ye*.16;r.position.set(ge.origin.x,e(ge.origin.x,ge.origin.z)+.01,ge.origin.z),r.quaternion.identity(),r.scale.set(Ae,1,Ae*.92),r.updateMatrix(),R.setMatrixAt(Se,r.matrix),P.setX(Se++,Math.sin(ye*Math.PI)*(1-ye))}for(let L=0;L<16;L++){let ye=L*7%Math.min(35,ge.points.length),Ae=ge.points[Math.max(0,ge.points.length-1-ye)],_e=(q*.46+L*.381)%1,Re=L*2.4+ge.index,Le=Ae.radius*(.45+_e*.5),he=.075+_e*.22;r.position.set(Ae.x+Math.cos(Re)*Le+Math.sin(q+L)*_e*.06,H(Ae.x,Ae.z)+.015+_e*.34,Ae.z+Math.sin(Re)*Le),r.quaternion.copy(s),r.rotateZ(L*.9+_e*.4),r.scale.set(he,he*1.5,1),r.updateMatrix(),z.setMatrixAt(Z,r.matrix),V.setX(Z++,Math.sin(_e*Math.PI)*.58)}}}E.count=k,z.count=Z,y.count=xe,R.count=Se;for(let ge of[E,z,y,R])ge.instanceMatrix.needsUpdate=!0;return V.needsUpdate=!0,P.needsUpdate=!0,u.update(N,n.leaks),le(N),se}function fe(){n.reset(),u.reset(),t.visible=!1,E.count=z.count=y.count=R.count=0;for(let N of a.values())t.remove(N.mesh),N.mesh.geometry.dispose();a.clear();for(let N of i)N.setOpen(0);f.clearRect(0,0,512,512),f.fillStyle="#000",f.fillRect(0,0,512,512),d.needsUpdate=!0,h=-1/0}return{group:t,open:Q,update:ie,reset:fe,bindTargets:m,setEnvironment:u.setEnvironment,blackout:N=>n.blackout(N),get dying(){return n.dying},get active(){return n.leaks.length>0}}}function $0(i,e){let t=new we;t.name="Abandoned technology office";let n=[],r=[],s=M=>(n.push(M),M),o=87021,a=()=>(o=o*1664525+1013904223>>>0,o/4294967296),c=(M,C)=>M+(C-M)*a();function l(M=512){let C=document.createElement("canvas");return C.width=C.height=M,[C,C.getContext("2d")]}function h(M){let C=new Ot(M);return C.colorSpace=xt,C.anisotropy=Math.min(8,i.capabilities.getMaxAnisotropy()),C}function p(M,C,U,B,W,Y){let de=M.createRadialGradient(C,U,0,C,U,B);de.addColorStop(0,`rgba(${W},${Y})`),de.addColorStop(1,`rgba(${W},0)`),M.fillStyle=de,M.fillRect(C-B,U-B,B*2,B*2)}function f(M,C,U,B,W){for(let Y=0;Y<U;Y++)M.fillStyle=`rgba(${B},${a()*W})`,M.fillRect(a()*C,a()*C,c(.4,2.2),c(.4,2))}function d(M,C="paint"){let[U,B]=l();B.fillStyle=M,B.fillRect(0,0,512,512);for(let W=0;W<210;W++)p(B,a()*512,a()*512,c(4,70),W%3?"27,33,23":"110,83,48",c(.025,.15));if(f(B,512,12e3,"18,25,18",.24),f(B,512,4e3,"200,192,159",.18),C==="wood")for(let W=0;W<550;W++){B.strokeStyle=`rgba(36,29,17,${c(.02,.16)})`,B.lineWidth=c(.4,2);let Y=a()*512;B.beginPath(),B.moveTo(0,Y),B.bezierCurveTo(170,Y+c(-12,12),340,Y+c(-12,12),512,Y),B.stroke()}if(C==="metal")for(let W=0;W<250;W++)p(B,a()*512,a()*512,c(2,18),"112,56,24",c(.1,.5));for(let W=0;W<80;W++){B.strokeStyle=`rgba(197,190,160,${c(.08,.3)})`,B.lineWidth=c(.3,1.3);let Y=a()*512,de=a()*512;B.beginPath(),B.moveTo(Y,de),B.lineTo(Y+c(3,50),de+c(-2,4)),B.stroke()}return h(U)}let g=d("#8b8c77"),x=d("#b2b09a"),m=d("#817157","wood"),u=d("#4e5550","metal"),E=d("#44534b"),y=d("#66695a"),_=(M,C=.88,U=null,B=0)=>new Ve({color:M,roughness:C,map:U,bumpMap:U,bumpScale:U?.008:0,metalness:B}),P=_(16777215,.98,g),T=_(16777215,.86,m),R=_(16777215,.8,x),A=_(16777215,.73,u,.42),O=_(16777215,.95,E),v=_(1514521,.86),w=_(1053970,.95),V=_(16777215,.98,y),G=_(8555654,.4,null,.8);function z(M,C,U=t){let B=new dt(M,C);return B.castShadow=!0,B.receiveShadow=!0,U.add(B),B}function H(M,C,U=A,B=t){let W=z(new wt(...M),U,B);return W.position.set(...C),W}let Q=new Kt(1,20,12);function le(M,C,U,B=t){let W=z(Q,U,B);return W.scale.set(...M),W.position.set(...C),W}function ie(M,C,U,B=A,W=t,Y=12){let de=z(new Bt(M,M,C,Y),B,W);return de.position.set(...U),de}function fe(M,C,U=.015,B=A,W=t){let Y=new S(...M),de=new S(...C),Xe=de.clone().sub(Y),et=ie(U,Xe.length(),Y.clone().add(de).multiplyScalar(.5).toArray(),B,W);return et.quaternion.setFromUnitVectors(new S(0,1,0),Xe.normalize()),et}function N(M,C=.008,U=v,B=t){let W=new $t(M.map(de=>new S(...de))),Y=z(new un(W,Math.max(20,M.length*8),C,6,!1),U,B);return B===t&&M.some(de=>de[1]<.06)&&r.push(Y),Y}function j(M,C,U,B=.025){B=Math.min(B,M*.45,C*.45);let W=new Tt,Y=M/2,de=C/2;W.moveTo(-Y+B,-de),W.lineTo(Y-B,-de),W.quadraticCurveTo(Y,-de,Y,-de+B),W.lineTo(Y,de-B),W.quadraticCurveTo(Y,de,Y-B,de),W.lineTo(-Y+B,de),W.quadraticCurveTo(-Y,de,-Y,de-B),W.lineTo(-Y,-de+B),W.quadraticCurveTo(-Y,-de,-Y+B,-de);let Xe=Math.min(.012,M/6,C/6,U/6),et=new sn(W,{depth:U-Xe*2,bevelEnabled:!0,bevelSize:Xe,bevelThickness:Xe,bevelSegments:2,steps:1,curveSegments:4});return et.translate(0,0,-U/2+Xe),et}function ne(M,C,U,B=t){let W=z(j(...M),U,B);return W.position.set(...C),W}function ee(M,C,U,B=!1){let[W,Y]=l(1024);for(let Xe=0;Xe<290;Xe++)p(Y,a()*1024,B?a()*1024:a()<.6?c(600,1060):a()*1024,c(12,140),"24,30,19",c(.03,.26));if(!B){let Xe=Y.createLinearGradient(0,0,0,1024);Xe.addColorStop(0,"rgba(29,35,24,.4)"),Xe.addColorStop(.3,"rgba(29,35,24,0)"),Xe.addColorStop(.75,"rgba(29,35,24,.07)"),Xe.addColorStop(1,"rgba(23,30,21,.72)"),Y.fillStyle=Xe,Y.fillRect(0,0,1024,1024);for(let et=0;et<80;et++){let Lt=a()*1024,nn=a()*220;Y.strokeStyle=`rgba(62,51,30,${c(.03,.26)})`,Y.lineWidth=c(1,6),Y.beginPath(),Y.moveTo(Lt,nn),Y.lineTo(Lt+c(-8,8),nn+c(80,750)),Y.stroke()}}f(Y,1024,17e3,"16,25,17",.28);let de=z(new bt(M,C),new Ve({map:h(W),transparent:!0,depthWrite:!1,roughness:1}),U);return de.castShadow=!1,de}H([7.8,.15,8.6],[0,-.075,.2],V);let F=ee(7.8,8.6,t,!0);F.rotation.x=-Math.PI/2,F.position.set(0,.003,.2);let se=H([7.8,3.35,.16],[0,1.675,-4.08],P),q=H([.16,3.35,8.6],[-3.98,1.675,.2],_(8556677,.98,g));H([.16,1.1,8.6],[3.98,.55,.2],P),H([.16,.65,8.6],[3.98,3.025,.2],P),H([.16,1.6,1.2],[3.98,1.9,-3.4],P),H([.16,1.6,4.8],[3.98,1.9,2.1],P),ee(7.8,3.35,t).position.set(0,1.675,-3.99);let Z=ee(8.6,3.35,t);Z.rotation.y=Math.PI/2,Z.position.set(-3.89,1.675,.2);for(let M=0;M<9;M++)H([.012,2.2,.014],[-3.85+M*.96,1.66,-3.977],A);H([7.8,.045,.035],[0,.58,-3.96],A),H([7.8,.045,.035],[0,2.76,-3.96],A);for(let M of[-3.86,3.86])H([.045,.13,8.6],[M,.065,.2],v);H([7.8,.13,.04],[0,.065,-3.95],v);for(let M=0;M<26;M++){let C=new Tt,U=c(-3.65,3.65),B=c(.24,3.1),W=c(.05,.22),Y=c(.05,.26);for(let Xe=0;Xe<9;Xe++){let et=Xe/9*Math.PI*2,Lt=c(.6,1),nn=U+Math.cos(et)*W*Lt,qt=B+Math.sin(et)*Y*Lt;Xe?C.lineTo(nn,qt):C.moveTo(nn,qt)}C.closePath();let de=z(new Xi(C),_(M%3?5199175:11644305,.99));de.position.z=-3.972,de.castShadow=!1}let xe=H([7.8,.1,8.6],[0,3.36,.2],v);for(let M=-3.6;M<3.9;M+=1.2)H([.028,.032,8.6],[M,3.12,.2],A);for(let M=-3.9;M<4.5;M+=1.2)H([7.8,.032,.028],[0,3.12,M],A);let Se=_(10132616,.98,g);for(let M=-3;M<3.9;M+=1.2)for(let C=-3.3;C<4.5;C+=1.2){if(a()<.25)continue;let U=H([1.15,.035,1.15],[M,3.145,C],Se);a()<.12&&(U.rotation.z=c(-.13,.13),U.position.y-=.06)}for(let M=0;M<5;M++)N([[-2+M*.45,3.3,-1.6],[-1.9+M*.45,2.8,-1.5],[-1.7+M*.4,2.53,-1.6],[-1.3+M*.35,3.29,-1.8]],.009,v);let ge=new we;ge.position.set(3.88,1.9,-1.5),ge.rotation.y=-Math.PI/2,t.add(ge);let[re,L]=l();L.fillStyle="#778c88",L.fillRect(0,0,512,512);for(let M=0;M<15;M++){let C=M*43,U=c(25,60),B=c(70,290);L.fillStyle=M%2?"#4b5d58":"#526560",L.fillRect(C,512-B,U,B);for(let W=0;W<5;W++)L.fillStyle="#879186",L.fillRect(C+8,512-B+18+W*34,4,10)}let ye=z(new bt(2.8,1.6),new yt({map:h(re),color:3622209}),ge);ye.position.z=-.13,ye.castShadow=!1;for(let M of[-1.43,0,1.43])H([.055,1.7,.09],[M,0,.025],A,ge);for(let M of[-.83,.83])H([2.92,.055,.09],[0,M,.025],A,ge);let Ae=_(10336426,.25,null,.25);Ae.transparent=!0,Ae.opacity=.18,Ae.side=Dt;for(let M of[-.72,.72]){let C=H([1.37,1.55,.008],[M,0,.04],Ae,ge);C.castShadow=!1}for(let M=0;M<17;M++){if([5,9,14].includes(M))continue;let C=H([2.77,.047,.015],[0,.73-M*.086,.11],_(8160114,.82,x),ge);C.rotation.x=.35,(M===7||M===12)&&(C.rotation.z=M===7?.035:-.05,C.rotation.x=.9)}for(let M of[-.86,.86])N([[M,.8,.15],[M,.12,.16],[M,-.77,.15]],.005,v,ge);N([[1.35,.83,.12],[1.4,-.7,.14],[1.32,-1.1,.18]],.006,v,ge);let _e=_0(i);o=577513849;let Re=j(.77,.45,.035,.012),Le=_(7042164,.38,null,.7);function he(M,C,U=0,B="cracked",W=1){let Y=new we;Y.position.set(...C),Y.rotation.y=U,Y.scale.setScalar(W),M.add(Y),Y.name="Damaged widescreen monitor",z(Re,v,Y).position.set(0,.375,0),ne([.31,.018,.2],[0,.013,-.025],Le,Y),H([.055,.24,.025],[0,.14,-.035],Le,Y),_e.add(Y,B),H([.18,.16,.032],[0,.36,-.03],Le,Y),le([.004,.004,.003],[.35,.163,.022],B==="live"?new yt({color:9223008}):v,Y);for(let et=0;et<11;et++)H([.015,.002,.003],[-.25+et*.05,.585,-.02],A,Y);let Xe=N([[.1,.23,-.05],[.15,.04,-.08],[.23,-.31,-.18]],.006,v,Y);return Xe.name="Monitor power cable",Xe.userData.ignoreFloorContact=!0,Y}let D=new wt(.023,.008,.023);function b(M,C,U=0){let B=new we;B.position.set(...C),B.rotation.y=U,M.add(B),ne([.47,.035,.18],[0,0,0],R,B);let W=new vn(D,_(6844e3,.8),56);for(let Y=0;Y<56;Y++){let de=new Mt;de.position.set(-.206+Y%14*.031,.024,-.065+Math.floor(Y/14)*.036),de.updateMatrix(),W.setMatrixAt(Y,de.matrix)}return B.add(W),H([.14,.008,.022],[0,.024,.07],v,B),B}function $(M,C,U=0,B=!1){let W=new we;W.position.set(...C),W.rotation.y=U,M.add(W),ne([.25,.53,.46],[0,.265,0],R,W);for(let Y=.32;Y<.49;Y+=.065)H([.195,.042,.012],[0,Y,.239],v,W);for(let Y=0;Y<7;Y++)H([.16,.008,.012],[0,.055+Y*.025,.239],A,W);if(B){H([.012,.42,.35],[.139,.27,0],v,W);for(let Y=0;Y<3;Y++)H([.015,.09,.25],[.15,.16+Y*.105,-.02],_(2706228,.83),W)}return W}function pe(M,C,U,B=0){let W=new we;W.position.set(M,0,C),W.rotation.y=B,t.add(W),H([U,.075,.86],[0,.82,0],T,W),H([U,.035,.025],[0,.794,.443],A,W);for(let Y of[-U/2+.08,U/2-.08])H([.048,.79,.68],[Y,.39,0],A,W),H([.24,.035,.74],[Y,.018,0],v,W);return H([U-.16,.19,.035],[0,.45,-.35],A,W),W}let Me=pe(-1,-3.37,5.4);for(let M=0;M<6;M++){let C=-2.24+M*.84;he(Me,[C,.86,-.05],c(-.13,.13),M===3?"live":M%2?"hole":"cracked",c(.88,1.04)),b(Me,[C+.03,.87,.3],c(-.16,.16)),M%2===0&&$(Me,[C+.18,0,-.1],c(-.1,.1),!0)}let ve=pe(-1.1,-2.25,2.6,0);for(let M=0;M<3;M++)he(ve,[-.84+M*.83,.86,-.1],c(-.2,.2),M===0?"live":"hole",.9),b(ve,[-.84+M*.83,.87,.3],c(-.2,.2));let Oe=he(t,[-.8,.31,-1.45],.42,"hole",.95);Oe.rotation.set(-1.38,.42,.21),s(Oe);let He=he(t,[-2.72,.24,2.58],-.45,"cracked",.73);He.rotation.x=-.56,He.rotation.z=.24,s(He);let ke=$(t,[-2.22,.13,-.72],.35,!0);ke.rotation.z=Math.PI/2,s(ke);for(let M=0;M<3;M++)s($(t,[-3.32,0,-2.45+M*.31],-.18,!0)).scale.setScalar(.9);let nt=o,De=_(16777215,.78,d("#afb4a9","metal"),.22),K=_(6449762,.7,null,.25),me=_(3225908,.86,E),Pe=_(11383205,.82),Ce=_(6845548,.46,null,.73);function be(M=0){let[C,U]=l(512);U.lineWidth=1.8;for(let B=0;B<512;B+=7)U.strokeStyle=B%21?"#a0a59a":"#686f65",U.beginPath(),U.moveTo(B,0),U.lineTo(B,512),U.stroke();for(let B=0;B<512;B+=6)U.strokeStyle=B%18?"#7f897e":"#b0b4a5",U.lineWidth=B%18?1.6:2.1,U.beginPath(),U.moveTo(0,B),U.lineTo(512,B),U.stroke();if(M){U.globalCompositeOperation="destination-out",U.fillStyle="#000",U.beginPath();let B=M===1?[[126,180],[187,210],[203,182],[229,265],[204,288],[236,339],[183,360],[154,302],[113,321],[137,257],[102,232]]:[[275,256],[315,209],[333,270],[377,253],[353,315],[386,375],[328,354],[300,399],[287,332],[248,309]];B.forEach(([W,Y],de)=>de?U.lineTo(W,Y):U.moveTo(W,Y)),U.closePath(),U.fill(),U.lineWidth=3;for(let W=0;W<16;W++){let[Y,de]=B[W%B.length];U.beginPath(),U.moveTo(Y,de),U.lineTo(Y+c(-24,24),de+c(-18,18)),U.stroke()}}return new Ve({map:h(C),color:14803929,roughness:.93,side:Dt,alphaTest:.3,alphaToCoverage:!0})}let ue=[be(),be(1),be(2)];function We(M,C,U,B,W=0){let de=new $t(M.map(fn=>new S(fn[0],fn[1],0)),!0,"centripetal").getSpacedPoints(96).slice(0,-1),Xe=[],et=[],Lt=[],nn=12,qt=de.length,pi=Math.min(...de.map(fn=>fn.x)),Bi=Math.max(...de.map(fn=>fn.x)),No=Math.min(...de.map(fn=>fn.y)),Zg=Math.max(...de.map(fn=>fn.y));for(let fn=0;fn<=nn;fn++)for(let br=0;br<qt;br++){let Oo=fn/nn,Xa=C[0]+(de[br].x-C[0])*Oo,zo=C[1]+(de[br].y-C[1])*Oo;if(Xe.push(...U(Xa,zo,Oo)),et.push((Xa-pi)/(Bi-pi),(zo-No)/(Zg-No)),fn<nn){let eh=fn*qt+br,th=fn*qt+(br+1)%qt;Lt.push(eh,th,eh+qt,th,th+qt,eh+qt)}}let Fo=new Pt;Fo.setAttribute("position",new lt(Xe,3)),Fo.setAttribute("uv",new lt(et,2)),Fo.setIndex(Lt),Fo.computeVertexNormals();let $g=z(Fo,ue[W],B);$g.customDepthMaterial=new aa({depthPacking:dd,map:ue[W].map,alphaTest:.3,side:Dt});for(let[fn,br,Oo]of[[1,.025,De],[.925,.007,K]]){let Xa=de.map(zo=>new S(...U(C[0]+(zo.x-C[0])*fn,C[1]+(zo.y-C[1])*fn,fn)));z(new un(new $t(Xa,!0),96,br,8,!0),Oo,B)}}function X(M,C=1){let U=new we;U.name="Torn mesh back and lumbar support",M.add(U),We([[-.18,0],[-.224,.08],[-.235,.26],[-.28,.46],[-.264,.55],[-.17,.6],[0,.615],[.17,.6],[.264,.55],[.28,.46],[.235,.26],[.224,.08],[.18,0],[0,-.014]],[0,.3],(W,Y,de)=>[W,Y,-.11*Y/.615+.035*(1-de*de)],U,C),N([[0,-.09,-.07],[0,.13,-.08],[-.17,.3,-.09],[-.23,.37,-.09]],.018,De,U),N([[0,.08,-.08],[.08,.22,-.085],[.23,.37,-.09]],.018,De,U);for(let W of[.12,.235])le([.048,.073,.024],[0,W,-.055],me,U);if(N([[-.21,.175,-.06],[0,.19,-.035],[.21,.175,-.06]],.014,K,U),C)for(let W=0;W<5;W++)N([[-.13+W*.012,.2,-.015],[-.12+W*.012,.15,.001],[-.14+W*.012,.1,-.02]],.0016,ue[0],U);return U}function Te(M,C,U=!1){let B=new we;M.add(B);let W=C*.295;if(N([[C*.22,.46,-.17],[W,.53,-.2],[W,.67,-.17],[W,.72,-.07]],.023,De,B),U)return le([.025,.011,.026],[W,.72,-.07],Pe,B),B;let Y=le([.058,.034,.15],[W,.745,.01],me,B);return Y.rotation.z=C*.06,fe([W,.68,-.085],[W,.734,.045],.019,K,B),B}function oe(M,C,U,B,W=0){let Y=new we;Y.position.set(C,U,B),Y.rotation.y=W,M.add(Y),fe([0,.028,0],[0,.078,.015],.012,Ce,Y);for(let de of[-1,1]){let Xe=ie(.039,.022,[de*.021,0,0],w,Y,16);Xe.rotation.z=Math.PI/2,le([.002,.018,.018],[de*.033,0,0],K,Y)}return Y}function Ee(M,C=-1){let U=new we;U.name="Five-spoke caster base",M.add(U),ie(.057,.09,[0,.16,0],De,U,16),ie(.031,.2,[0,.28,0],Ce,U,16);for(let B=0;B<5;B++){let W=B/5*Math.PI*2+.25,Y=Math.cos(W),de=Math.sin(W);if(B===C){fe([0,.16,0],[Y*.13,.135,de*.13],.025,De,U),le([.024,.014,.018],[Y*.13,.135,de*.13],Pe,U);continue}N([[0,.18,0],[Y*.14,.145,de*.14],[Y*.31,.092,de*.31]],.022,De,U),oe(U,Y*.31,.04,de*.31,W)}return U}function Ue(M,C,U,B){return M.position.set(C,0,U),M.rotation.set(...B),M.updateMatrixWorld(!0),s(M)}function ze(M,C,U,B={}){let W=new we;W.name="Broken Aeron-style mesh chair",t.add(W),B.noBase||Ee(W,B.missingSpoke??-1),ne([.24,.095,.27],[0,.405,-.035],K,W),ie(.045,.13,[0,.405,0],De,W,16),fe([-.14,.41,.015],[-.245,.405,.05],.012,Ce,W),le([.035,.016,.055],[-.25,.405,.055],me,W),le([.055,.025,.04],[.18,.407,-.04],me,W),We([[-.2,-.23],[-.26,-.16],[-.283,.08],[-.25,.22],[0,.25],[.25,.22],[.283,.08],[.26,-.16],[.2,-.23],[0,-.25]],[0,0],(de,Xe,et)=>[de,.51-.035*(1-et*et)-.025*Math.max(0,Xe/.25),Xe],W,B.seatTear??1);for(let de of[-1,1])N([[de*.12,.41,-.14],[de*.22,.46,-.2],[de*.24,.49,-.15]],.023,De,W),Te(W,de,de===B.brokenArm);if(!B.noBack){let de=X(W,B.backTear??1);de.position.set(0,.55,-.22),de.rotation.set(B.backLean??0,0,B.backTwist??0)}return Ue(W,M,C,U)}ze(-2.85,-2.48,[0,.35,-.035],{brokenArm:1,backTear:2}),ze(-.3,3.35,[-.08,-.28,.08],{brokenArm:-1,missingSpoke:3,backLean:-.16}),ze(2.75,3.3,[-.55,-.8,1.39],{brokenArm:-1,missingSpoke:2,backTwist:.2}),ze(-.55,-3.42,[1.65,.65,.32],{brokenArm:1,noBack:!0}),ze(1.35,1.42,[-.3,-.5,-1.28],{noBase:!0,brokenArm:-1,backTwist:-.14,backTear:2});let ht=Ee(t,1);ht.name="Detached chair base",Ue(ht,2.35,2.53,[2.7,.36,.22]);let It=X(t,2);It.name="Snapped mesh backrest",Ue(It,-.75,2.3,[-1.6,.22,-.4]);let Ft=Te(t,1);Ft.name="Broken chair arm",Ue(Ft,1.4,2.62,[1.48,.71,.15]),s(oe(t,2.37,.045,2.84,.7)),s(oe(t,-2.15,.045,.95,-.4)),o=nt;for(let M=0;M<22;M++)a();let mt=pe(2.55,-3.38,1.92);H([1.7,.72,.72],[0,.4,-.025],_(6713960,.94,m),mt);for(let M of[-.42,.42]){let C=H([.77,.24,.045],[M,.66,.37],T,mt);M>0&&(C.position.z=.51,C.rotation.z=-.04),fe([M-.13,.66,.41],[M+.13,.66,.41],.014,A,mt)}let Et=new we;Et.position.set(-.27,.87,-.04),mt.add(Et),ne([.49,.6,.37],[0,.3,0],A,Et),H([.4,.35,.025],[0,.26,.2],v,Et),ne([.34,.15,.06],[0,.5,.2],R,Et),H([.12,.05,.008],[-.07,.515,.236],_(2243883,.4),Et);for(let M of[-.08,.08])fe([M,.38,.21],[M,.31,.26],.018,G,Et);H([.37,.04,.23],[0,.045,.22],v,Et);for(let M=0;M<7;M++)H([.017,.012,.19],[-.14+M*.047,.07,.22],G,Et);let $n=ie(.12,.17,[0,.68,-.015],new Ve({color:5069384,transparent:!0,opacity:.55,roughness:.45}),Et,24),Ji=H([.27,.022,.25],[.025,.78,-.015],v,Et);Ji.rotation.z=.13;let Hi=_(12039066,.7,x);function ti(M,C,U=0){let B=new we;B.position.set(...C),B.rotation.z=U,M.add(B);let W=[[.052,0],[.055,.014],[.059,.12],[.054,.128],[.047,.12],[.047,.018]].map(de=>new Fe(...de));z(new zr(W,24,0,Math.PI*1.9),Hi,B);let Y=z(new Qt(.036,.008,8,20,Math.PI*1.6),Hi,B);return Y.rotation.x=Math.PI/2,Y.position.set(.066,.07,0),B}ti(Et,[0,.07,.23]),ti(mt,[.46,.87,.25],1.25),ti(mt,[.64,.87,-.02]);let mn=_(3877398,.33),tt=z(new Ti(.18,32),mn,mt);tt.rotation.x=-Math.PI/2,tt.position.set(.48,.862,.19),tt.scale.y=.65,tt.castShadow=!1,ne([.52,.83,.54],[3.28,.42,-2.4],R);let it=H([.49,.78,.045],[3.21,.43,-2.1],R);it.rotation.y=.24,H([.035,.23,.04],[3.04,.56,-2.065],A),H([.36,.8,.36],[3.39,.4,-1.72],R);let rt=ie(.16,.4,[3.39,1.04,-1.72],new Ve({color:7378315,transparent:!0,opacity:.38,roughness:.34}),t,24);rt.rotation.z=.08;let Ye=new we;Ye.name="Broken lopsided foosball table",Ye.position.set(2.24,-.104,.03),Ye.rotation.set(0,-.18,-.22),t.add(Ye);let at=_(13812642,.87,m),Je=_(8099956,.92,E);H([1.18,.25,1.91],[0,.91,0],at,Ye),H([1.04,.025,1.74],[0,1.048,0],Je,Ye);for(let M of[-.61,.61])H([.1,.18,2.02],[M,1.12,0],at,Ye);H([1.14,.18,.08],[0,1.12,-.99],at,Ye);let ut=new Tt;ut.moveTo(-.57,1.03),ut.lineTo(.57,1.03),ut.lineTo(.57,1.21),ut.lineTo(.23,1.21),ut.lineTo(.12,1.07),ut.lineTo(.02,1.15),ut.lineTo(-.09,1.07),ut.lineTo(-.16,1.21),ut.lineTo(-.57,1.21),ut.closePath();let gn=z(new sn(ut,{depth:.08,bevelEnabled:!1}),at,Ye);gn.position.z=.95;for(let M of[-.99,.99])H([.3,.1,.012],[0,1.085,M+(M>0?-.045:.045)],v,Ye);for(let M of[-.47,.47])for(let C of[-.8,.8]){let U=M>0&&C>0,B=M>0;if(H([.11,U?.24:B?.57:.8,.12],[M,U?.68:B?.515:.4,C],A,Ye),U)for(let W=0;W<4;W++)H([.012,.09,.018],[M-.04+W*.023,.555,C+c(-.04,.04)],T,Ye).rotation.z=c(-.2,.2)}let dn=H([.11,.57,.12],[2.89,.09,.98],A);dn.rotation.set(.05,.37,1.42);let zt=H([.45,.045,.08],[2.55,.045,1.32],at);zt.rotation.y=.4;let I=[];function J(M,C){I.push(...M,...C)}for(let M of[-.8,.8])J([-.48,1.065,M],[.48,1.065,M]);for(let M of[-.48,.48])J([M,1.065,-.8],[M,1.065,.8]);J([-.48,1.065,0],[.48,1.065,0]);for(let M=0;M<48;M++){let C=M/48*Math.PI*2,U=(M+1)/48*Math.PI*2;J([Math.cos(C)*.19,1.065,Math.sin(C)*.19],[Math.cos(U)*.19,1.065,Math.sin(U)*.19])}let ae=new Pt;ae.setAttribute("position",new lt(I,3)),Ye.add(new so(ae,new us({color:9674366})));let ce=[_(9124144,.8),_(10658186,.8)];for(let M=0;M<8;M++){let C=-.78+M*.223,U=M%2?1:-1;M===5?N([[-.91,1.21,C],[-.24,1.21,C],[.18,1.36,C+.13],[.91,1.17,C+.08]],.012,G,Ye):fe([-.91,1.21,C],[.91,1.21,C],.012,G,Ye),M!==4&&fe([U*.8,1.21,C],[U*1.02,1.21,C],.034,v,Ye);let B=M===0||M===7?1:M===1||M===6?2:3;for(let W=0;W<B;W++){if(M===3&&W===0||M===6&&W===1)continue;let Y=(W-(B-1)/2)*.29;H([.055,.1,.037],[Y,1.195,C],ce[M%2],Ye),le([.031,.035,.031],[Y,1.28,C],ce[M%2],Ye),H([.06,.045,.045],[Y,1.11,C],ce[M%2],Ye)}}le([.024,.024,.024],[.46,1.09,.69],R,Ye),N([[-.46,1.068,.29],[-.2,1.068,.21],[-.08,1.068,.3],[.12,1.068,.23],[.48,1.068,.37]],.007,v,Ye);let te=H([.055,.13,.04],[.38,1.09,.51],ce[0],Ye);te.rotation.z=Math.PI/2;for(let M of[-1.07,1.07]){fe([-.32,1.27,M],[.32,1.27,M],.008,G,Ye);for(let C=0;C<5;C++)le([.025,.03,.025],[-.25+C*.07,1.27,M],ce[M>0?1:0],Ye)}let Ie=new we;Ie.name="MacBook Pro on the floor",Ie.position.set(.45,.027,2.18),Ie.rotation.y=Math.atan2(e.x-Ie.position.x,e.z-Ie.position.z),t.add(Ie);let Be=Ie.position.clone().add(new S(1.18,0,0).applyAxisAngle(new S(0,1,0),Ie.rotation.y)),Qe=N0(e,Be);t.add(Qe.group);let je=F0(Be);t.add(je.group),s(je.group);let ot=_(8884628,.35,null,.72),ct=_(1053975,.7);function Ke(M,C,U,B,W,Y,de=!1){let Xe=Math.min(.012,M/6,C/6,U/6),et=z(j(M-2*Xe,C-2*Xe,U,.026-Xe),W,Y);return et.position.set(...B),de&&(et.rotation.x=-Math.PI/2),et}Ke(.88,.59,.026,[0,0,0],ot,Ie,!0),Ke(.66,.275,.003,[0,.0145,-.065],ct,Ie,!0);let At=ie(.013,.77,[0,.02,-.281],v,Ie,20);At.rotation.z=Math.PI/2;let vt=new we;vt.position.set(0,.034,-.295),vt.rotation.x=Math.PI/2,Ie.add(vt),Ke(.88,.59,.018,[0,.295,0],ot,vt),Ke(.856,.566,.005,[0,.295,.01],ct,vt);for(let M of[-.34,.34])for(let C of[-.21,.21])le([.025,.006,.025],[M,-.014,C],w,Ie);let Vt=document.createElement("canvas");Vt.width=256,Vt.height=384;let Pn=Vt.getContext("2d");Td(Pn,28,42,200);let Ht=h(Vt),st=new Ve({map:Ht,transparent:!0,alphaTest:.1,roughness:.64,metalness:.03,emissiveMap:Ht,emissive:16777215,emissiveIntensity:.14}),Gt=z(new bt(.115,.1725),st,vt);Gt.name="Off-center Figma vinyl sticker",Gt.position.set(.265,.365,-.0108),Gt.rotation.set(0,Math.PI,-.14),Gt.castShadow=!1;let[Ne,Ze]=l(1024);Ne.height=640,Ze.fillStyle="#111b22",Ze.fillRect(0,0,1024,640),Ze.fillStyle="#222e36",Ze.fillRect(0,0,1024,38),Ze.fillRect(0,38,140,602),Ze.fillRect(894,38,130,602),Td(Ze,15,6,17),Ze.font="13px sans-serif",Ze.fillStyle="#bac6ca",Ze.fillText("Figma / Wireframes",44,25);for(let M=0;M<7;M++)Ze.fillStyle=M===2?"#48616b":"#657a80",Ze.fillRect(18,85+M*34,85-M%3*18,3);for(let M=0;M<3;M++){let C=181+M*231;Ze.fillStyle="#b2bfbb",Ze.fillRect(C,118,197,390),Ze.fillStyle="#465b62",Ze.fillRect(C+12,137,173,19),Ze.fillRect(C+12,175,173,86),Ze.strokeStyle="#53696d",Ze.lineWidth=2,Ze.beginPath(),Ze.moveTo(C+12,175),Ze.lineTo(C+185,261),Ze.moveTo(C+185,175),Ze.lineTo(C+12,261),Ze.stroke();for(let U=0;U<5;U++)Ze.fillStyle="#82918f",Ze.fillRect(C+13,278+U*20,c(75,170),4);Ze.fillStyle="#526c72",Ze.fillRect(C+14,401,169,28),Ze.strokeStyle="#788c8d",Ze.strokeRect(C+14,447,78,39),Ze.strokeRect(C+105,447,78,39)}for(let M=0;M<12;M++)Ze.fillStyle="#50666e",Ze.fillRect(912,84+M*31,c(35,90),3);let Sn=h(Ne),tn=new yt({map:Sn,color:8360598}),ni=z(new bt(.823,.525),tn,vt);ni.position.set(0,.3,.013),ni.castShadow=!1,H([.076,.014,.002],[0,.556,.014],ct,vt),le([.003,.003,.001],[0,.553,.0155],_(1978424,.2),vt);let[on,ui]=l(512);on.height=64,ui.font="22px sans-serif",ui.textAlign="center",ui.fillStyle="#9ca5a6",ui.fillText("MacBook Pro",256,40);let Ss=z(new bt(.14,.018),new yt({map:h(on),transparent:!0}),vt);Ss.position.set(0,.025,.013),Ss.castShadow=!1;let[ii,di]=l(1024);di.fillStyle="#151b1e",di.fillRect(0,0,1024,1024),di.strokeStyle="#3e494d",di.fillStyle="#9ca5a6",di.font="25px sans-serif",di.textAlign="center";let Nl=["1234567890-=","QWERTYUIOP[]","ASDFGHJKL;\u2019","ZXCVBNM,./"];for(let M=0;M<4;M++)for(let C=0;C<12;C++){let U=18+C*83,B=74+M*181;di.strokeRect(U,B,72,145),di.fillText(Nl[M][C]||"",U+36,B+86)}di.strokeRect(250,825,524,125);let Po=z(new bt(.635,.257),new Ve({map:h(ii),roughness:.7}),Ie);Po.rotation.x=-Math.PI/2,Po.position.set(0,.0165,-.065);let SE=Ke(.34,.17,.001,[0,.0135,.174],_(6714488,.44,null,.62),Ie,!0),sf=new vn(new Ti(.0012,5),v,480);for(let M=0;M<480;M++){let C=new Mt,U=M<240?-1:1,B=M%240;C.position.set(U*(.355+B%8*.006),.017,-.196+Math.floor(B/8)*.0085),C.rotation.x=-Math.PI/2,C.updateMatrix(),sf.setMatrixAt(M,C.matrix)}Ie.add(sf);for(let M of[-1,1])for(let C=0;C<3;C++)H([.003,.006,.035],[M*.444,.001,-.18+C*.065],ct,Ie);let Fl=new zn(9285310,0,1.4,2);Fl.position.set(0,.29,.14),vt.add(Fl);let gg=tn.color.clone();tn.color.setScalar(0);let ws=!1,Qi=0,La=!1;function Ol(M){vt.rotation.x=Ge.lerp(Math.PI/2,-.2,M);let C=Ge.smoothstep(M,.22,.72);tn.color.copy(gg).multiplyScalar(C),Fl.intensity=.6*C}let of={object:Ie,screen:ni,get isReady(){return Qi===1},get isOpen(){return ws},get openProgress(){return Qi},getLidGrip(M){return vt.updateWorldMatrix(!0,!1),vt.localToWorld(M.set(.12,.6,-.004))},setOpenProgress(M){La=!0,Qi=Ge.clamp(M,0,1),ws=Qi>0,Ol(Qi)},open(){return ws?!1:(La=!1,ws=!0,!0)},close(){La=!1,ws=!1,Qi=0,Ol(0)},update(M,C=!1){La||!ws||Qi===1||(Qi=C?1:Math.min(1,Qi+M/.95),Ol(Ge.smootherstep(Qi,0,1)))}};function xg(){let[M,C]=l();C.fillStyle="#b2af94",C.fillRect(0,0,512,512),C.fillStyle="#4f584c";for(let U=0;U<35;U++){let B=35+U*12;C.fillRect(30,B,c(100,430),c(1,3))}return C.strokeStyle="rgba(64,54,28,.4)",C.lineWidth=4,C.beginPath(),C.arc(345,130,61,0,Math.PI*2),C.stroke(),f(C,512,8e3,"49,45,27",.16),h(M)}let yg=_(16777215,.99,xg()),vg=_(2836532,.88),_g=[R,A,T,_(8619381,.97)],zl=[],Bl=[];for(let M=0;M<82;M++){let C=c(-3.62,3.58),U=c(-3.75,4);Math.abs(C)<.65&&U<.8&&U>-.9&&(C-=1.2);let B=z(new bt(c(.13,.29),c(.17,.37),4,4),yg),W=c(-.1,.1),Y=c(-.07,.07),de=a()*Math.PI*2,Xe=c(.012,.038);B.rotation.set(-Math.PI/2,0,de),B.position.set(C,.005,U),B.material.side=Dt,B.name="Paper resting on the floor";let et=B.geometry.attributes.position;for(let Lt=0;Lt<et.count;Lt++)et.setZ(Lt,Math.abs(Math.sin(et.getX(Lt)*33+W)*Math.sin(et.getY(Lt)*24+Y))*.0015+Xe*.008);zl.push(B)}for(let M=0;M<95;M++){let C=c(-3.65,3.65),U=c(-3.7,4);Math.abs(C)<.8&&U>-.8&&U<1.3&&(C-=1.7);let B=H([c(.025,.17),c(.015,.065),c(.035,.2)],[C,c(.025,.055),U],_g[M%4]);B.rotation.set(c(-.13,.13),a()*Math.PI*2,c(-.13,.13)),B.name="Fallen casing fragment",s(B)}for(let M=0;M<9;M++){let C=new we;C.position.set(c(-3,3),.028,c(-2,3)),C.rotation.y=a()*6,t.add(C),C.name="Loose circuit board",s(C),H([.18,.012,.24],[0,0,0],vg,C);for(let U=0;U<4;U++)H([.035,.017,.05],[-.055+U%2*.1,.013,-.07+Math.floor(U/2)*.12],v,C)}for(let M=0;M<12;M++){let C=H([.09,.018,.09],[c(-3.5,3.5),.03,c(-3.4,3.7)],v);C.rotation.y=a()*6,H([.06,.003,.03],[0,.011,0],R,C),C.name="Broken key cap",s(C)}for(let M=0;M<14;M++){let C=H([c(.3,.7),.012,c(.3,.8)],[c(-3.4,3.4),.007,c(-3.5,3.7)],_(M%2?8948860:10197637,.98,E));C.rotation.y=c(-.15,.15),Bl.push(C)}let Gn=L0(Bl);function af(M,C,U){M.save(),M.lineCap="round";for(let[W,Y,de,Xe]of U){for(let et=0;et<13;et++){let Lt=Y+et*Xe/12;M.strokeStyle=C,M.globalAlpha=c(.65,.94),M.lineWidth=c(12,27),M.beginPath(),M.moveTo(W+c(-18,35),Lt),M.quadraticCurveTo(W+de*.45,Lt+c(-12,12),W+de+c(-35,18),Lt+c(-8,8)),M.stroke()}M.globalAlpha=1;for(let et=0;et<8;et++)p(M,W+a()*de,Y+a()*Xe,c(13,43),"54,66,61",c(.035,.09))}M.globalAlpha=1;for(let W=0;W<95;W++){let Y=a()*1024,de=a()<.55?c(800,1045):a()*1024;p(M,Y,de,c(14,95),W%3?"44,49,38":"103,77,42",c(.045,.16))}let B=M.createLinearGradient(0,0,0,1024);B.addColorStop(0,"rgba(43,44,32,.30)"),B.addColorStop(.13,"rgba(43,44,32,0)"),B.addColorStop(.77,"rgba(43,44,32,0)"),B.addColorStop(1,"rgba(44,40,27,.38)"),M.fillStyle=B,M.fillRect(0,0,1024,1024);for(let W=0;W<23;W++){let Y=a()*1024,de=c(8,105);M.strokeStyle=`rgba(86,67,38,${c(.06,.17)})`,M.lineWidth=c(1.5,6),M.beginPath(),M.moveTo(Y,de),M.bezierCurveTo(Y+4,de+60,Y-3,de+125,Y+c(-5,5),de+c(130,460)),M.stroke()}f(M,1024,12e3,"36,42,30",.21),M.restore()}function kl(M){let[C,U]=l(1024);U.fillStyle="#bfc4b6",U.fillRect(0,0,1024,1024),U.strokeStyle="#304a4d",U.fillStyle="#304a4d",U.lineWidth=4,U.font="28px sans-serif",U.fillText(M?"ONBOARDING / FIRST RUN":"WORKSPACE / DASHBOARD",45,67);function B(W,Y){U.beginPath(),U.moveTo(W,Y),U.lineTo(W+50,Y),U.lineTo(W+37,Y-11),U.moveTo(W+50,Y),U.lineTo(W+37,Y+11),U.stroke()}if(M)for(let W=0;W<3;W++){let Y=48+W*330;U.strokeRect(Y,154,253,593),U.strokeRect(Y+14,174,225,544),U.fillRect(Y+80,187,91,5),U.strokeRect(Y+32,225,189,130),U.beginPath(),U.moveTo(Y+32,225),U.lineTo(Y+221,355),U.moveTo(Y+221,225),U.lineTo(Y+32,355),U.stroke();for(let de=0;de<4;de++)U.fillRect(Y+31,397+de*25,170-de%2*41,4);U.strokeRect(Y+32,524,188,54),U.strokeRect(Y+32,602,188,54),W<2&&B(Y+266,451),U.font="23px sans-serif",U.fillText(["01 / welcome","02 / connect","03 / explore"][W],Y+23,803)}else for(let W=0;W<2;W++){let Y=45+W*498;U.strokeRect(Y,165,436,525),U.strokeRect(Y,165,436,44),U.strokeRect(Y+14,223,87,448);for(let de=0;de<5;de++)U.fillRect(Y+25,246+de*40,59-de%2*17,4);U.strokeRect(Y+118,230,297,133),U.beginPath(),U.moveTo(Y+135,343),U.lineTo(Y+171,300),U.lineTo(Y+212,325),U.lineTo(Y+270,265),U.lineTo(Y+328,293),U.lineTo(Y+397,248),U.stroke();for(let de=0;de<2;de++)for(let Xe=0;Xe<2;Xe++){U.strokeRect(Y+118+Xe*154,385+de*145,139,124),U.fillRect(Y+131+Xe*154,404+de*145,92,5);for(let et=0;et<3;et++)U.fillRect(Y+131+Xe*154,431+de*145+et*18,103-et*13,3)}}return U.strokeStyle="#7d453b",U.lineWidth=3,U.beginPath(),U.ellipse(510,905,357,48,-.02,0,Math.PI*2),U.stroke(),U.font="25px sans-serif",U.fillStyle="#7d453b",U.fillText(M?"simplify the first step / test again":"less noise \u2014 keep the primary action visible",180,915),af(U,"#bfc4b6",M?[[345,225,290,290],[65,570,220,170],[660,765,280,130]]:[[570,215,350,235],[145,500,280,200],[220,855,430,95]]),h(C)}for(let M=0;M<2;M++){let C=new we;C.name="Whiteboard with interface wireframes",C.position.set(M?2.25:.12,2.2,-3.94),C.rotation.z=M?-.025:.012,t.add(C),H([1.78,1.12,.04],[0,0,0],G,C);let U=kl(!M),B=z(new bt(1.7,1.04),new Ve({map:U,roughness:.75,emissive:16777215,emissiveMap:U,emissiveIntensity:.025}),C);B.position.z=.024,H([1.7,.023,.09],[0,-.57,.025],G,C);for(let W=0;W<3;W++)fe([-.58+W*.18,-.546,.057],[-.46+W*.18,-.546,.057],.013,W?v:_(3755626,.7),C)}let Kn=new we;Kn.name="Planning whiteboard covered in sticky notes",Kn.position.set(1.9,0,-3),Kn.rotation.y=0,t.add(Kn);for(let M of[-1.12,1.12]){H([.045,.98,.055],[M,.49,0],A,Kn),H([.11,.06,.65],[M,.06,0],A,Kn);for(let C of[-.25,.25])le([.047,.045,.032],[M,.035,C],v,Kn)}H([2.68,1.94,.05],[0,1.85,0],G,Kn);let cf=new Set([1,4,7,9,13,17,20,22,24]),[Mg,Wt]=l(1024);Wt.fillStyle="#c2c7ba",Wt.fillRect(0,0,1024,1024);for(let M=0;M<65;M++)p(Wt,a()*1024,a()*1024,c(15,110),"60,69,55",.065);Wt.strokeStyle="rgba(38,62,63,.65)",Wt.fillStyle="rgba(38,62,63,.65)",Wt.lineWidth=3;for(let M=0;M<3;M++){let C=170+M*245;Wt.strokeRect(C,560,190,335),Wt.strokeRect(C+12,579,166,28),Wt.strokeRect(C+12,625,166,102),Wt.beginPath(),Wt.moveTo(C+12,625),Wt.lineTo(C+178,727),Wt.moveTo(C+178,625),Wt.lineTo(C+12,727),Wt.stroke();for(let U=0;U<4;U++)Wt.fillRect(C+15,753+U*19,137-U%2*39,3);Wt.strokeRect(C+15,843,160,28),M<2&&(Wt.beginPath(),Wt.moveTo(C+198,727),Wt.lineTo(C+235,727),Wt.lineTo(C+222,717),Wt.moveTo(C+235,727),Wt.lineTo(C+222,737),Wt.stroke())}af(Wt,"#c2c7ba",[[130,620,285,170],[407,735,280,165],[685,530,190,150]]);for(let M of cf){let C=(-1.1+M%9*.273)/2.6*1024+512,U=(.5-(2.63-Math.floor(M/9)*.28-1.85)/1.86)*1024;Wt.fillStyle="rgba(203,203,175,.20)",Wt.fillRect(C-40,U-59,80,118),Wt.fillStyle="rgba(111,96,51,.17)",Wt.fillRect(C-34,U-56,68,8);for(let B=0;B<9;B++)Wt.fillStyle="rgba(77,67,39,.15)",Wt.fillRect(C+c(-33,33),U-53+c(-2,6),c(1,3),c(2,5))}let lf=h(Mg);z(new bt(2.6,1.86),new Ve({map:lf,roughness:.75,emissive:16777215,emissiveMap:lf,emissiveIntensity:.025}),Kn).position.set(0,1.85,.027),H([2.58,.025,.13],[0,.87,.045],G,Kn);for(let M=0;M<3;M++)fe([-.63+M*.23,.899,.09],[-.48+M*.23,.899,.09],.017,M===0?_(3428197,.75):v,Kn);H([.18,.045,.07],[.62,.906,.075],v,Kn);let Eg=["#c3b25e","#b38488","#7faaa9","#a4b081"];function Da(M,C,U,B,W){let[Y,de]=l(128);de.fillStyle=Eg[W%4],de.fillRect(0,0,128,128),de.fillStyle="rgba(42,49,37,.16)",de.fillRect(0,0,128,14),de.strokeStyle="rgba(39,52,47,.68)",de.lineWidth=2.6;for(let qt=0;qt<3+W%3;qt++){de.beginPath();let pi=30+qt*16;de.moveTo(16,pi);for(let Bi=1;Bi<8;Bi++)de.lineTo(16+Bi*c(8,12),pi+c(-2.4,2.4));de.stroke()}W%4===0&&(de.strokeRect(19,75,35,27),de.strokeRect(72,75,35,27));let Xe=new bt(.205,.215,3,5),et=Xe.attributes.position;for(let qt=0;qt<et.count;qt++){let pi=et.getY(qt);et.setZ(qt,Math.max(0,-pi-.015)**2*3.3)}Xe.computeVertexNormals();let Lt=h(Y),nn=z(Xe,new Ve({map:Lt,roughness:.96,side:Dt,emissive:16777215,emissiveMap:Lt,emissiveIntensity:.025}),M);return nn.position.set(C,U,B),nn.rotation.z=c(-.13,.13),nn}for(let M=0;M<3;M++)for(let C=0;C<9;C++)cf.has(M*9+C)||Da(Kn,-1.1+C*.273+c(-.018,.018),2.63-M*.28+c(-.014,.014),.04,M*9+C);for(let M=0;M<5;M++)M===1||M===4||Da(Kn,M<3?-1.1:1.09,1.75-M%3*.29,.04,28+M);for(let M=0;M<4;M++){let C=Da(t,-1.7-M*.3,.005,-.38+M*.26,33+M);C.rotation.set(-Math.PI/2,0,.6+M*.73);let U=C.geometry.attributes.position;for(let B=0;B<U.count;B++)U.setZ(B,U.getZ(B)*.1);zl.push(C)}let Ua=U0();t.add(Ua.group);let Vl=fl({flies:14,moths:7,spread:[.88,.23,.5],sizeScale:.55,dive:.65});Vl.group.position.y=-.4,Ua.group.add(Vl.group);for(let M of[-.66,.66])fe([M,3.3,-.55],[M,2.98,-.55],.006,v);N([[.85,3.3,-.6],[1.03,2.8,-.65],[1.26,2.86,-.7],[1.3,3.3,-.7]],.007,v);let $r=new we;$r.position.set(-2.1,.88,-3.2),Me.parent.add($r),ie(.11,.035,[0,0,0],v,$r),fe([0,0,0],[.05,.31,0],.016,A,$r),fe([.05,.31,0],[.22,.4,.02],.013,A,$r),z(new Br(.12,.13,20,1,!0),A,$r).position.set(.23,.37,.02),le([.04,.025,.04],[.23,.32,.02],new yt({color:15122820}),$r);let hf=new zn(15121790,1.2,2.5,2);hf.position.set(-1.87,1.19,-3.18),t.add(hf);let Gl=fl({flies:5,moths:3,spread:[.28,.1,.22],seed:113,sizeScale:.55,dive:.1});Gl.group.position.set(-1.87,1.14,-3.02),t.add(Gl.group);let uf=new Xt({color:14102035,roughness:.31,clearcoat:1,clearcoatRoughness:.18}),df=new Xt({color:15790556,roughness:.13,transparent:!0,opacity:.16,depthWrite:!1,clearcoat:1,clearcoatRoughness:.08}),Wl=_(14081488,.49),Ha=_(9016713,.69),Sg=new ao;function Xl(M){let C=Sg.load(new URL(`./labels/${M}.svg`,import.meta.url).href);return C.colorSpace=xt,C.anisotropy=Math.min(8,i.capabilities.getMaxAnisotropy()),new Ve({map:C,transparent:!0,alphaTest:.15,roughness:.72,side:Dt})}let wg=Xl("ketchup-glass"),bg=Xl("ketchup-squeeze"),Tg=Xl("ketchup-neck");for(let M=0;M<8140;M++)a();function Rg(M,C){for(let U=1;U<M.length;U++)if(M[U][1]>=C){let[B,W]=M[U-1],[Y,de]=M[U];return Ge.lerp(B,Y,(C-W)/(de-W||1))}return M.at(-1)[0]}function ql(M,C,U,B,W,Y=1,de=1.02){let Xe=new bt(1,1,24,16),et=Xe.attributes.position,Lt=Xe.attributes.uv;for(let qt=0;qt<et.count;qt++){let pi=(Lt.getX(qt)*2-1)*de,Bi=Ge.lerp(U,B,Lt.getY(qt)),No=Rg(C,Bi)+.0018;et.setXYZ(qt,Math.sin(pi)*No,Bi,Math.cos(pi)*No*Y+8e-4)}Xe.computeVertexNormals();let nn=z(Xe,W,M);return nn.castShadow=!1,nn}function Yl(M,C,U,B=1){let W=z(new zr(M.map(Y=>new Fe(...Y)),48),C,U);return W.scale.z=B,W}function ff(M,C,U,B,W,Y){let de=new we;return de.name=M.name,de.add(M),M.position.y=-W,t.add(de),de.position.set(C,0,U),de.rotation.set(...B),de.scale.setScalar(Y),de.updateMatrixWorld(!0),gs(de,Gn)}let lr=new we;lr.name="Discarded glass ketchup bottle";let Na=[[0,0],[.063,0],[.076,.014],[.08,.047],[.079,.19],[.069,.267],[.049,.342],[.03,.41],[.029,.447],[.033,.454],[.032,.471],[0,.471]],pf=Na.filter(M=>M[1]<.44).map(([M,C])=>[Math.max(0,M-.0035),C+.004]);pf.push([.026,.469],[0,.469]);let Ag=Yl(pf,uf,lr),Cg=Yl(Na,df,lr);Cg.castShadow=!1,ql(lr,Na,.047,.24,wg),ql(lr,Na,.365,.432,Tg,1,.95);let Io=new we;Io.position.y=.48,lr.add(Io),ie(.037,.036,[0,0,0],Wl,Io,32),ie(.0365,.006,[0,.461,0],Ha,lr,32);for(let M=0;M<30;M++){let C=M/30*Math.PI*2;fe([Math.cos(C)*.037,-.013,Math.sin(C)*.037],[Math.cos(C)*.037,.014,Math.sin(C)*.037],.0011,Ha,Io)}let mf=z(new Qt(.07,.003,6,32),df,lr);mf.rotation.x=Math.PI/2,mf.position.y=.016;let Pg=ff(lr,.98,2.82,[-.25,.45,Math.PI/2],.25,.82),Sr=new we;Sr.name="Discarded squeeze ketchup bottle";let gf=[[0,.058],[.055,.058],[.065,.075],[.098,.105],[.115,.15],[.109,.25],[.118,.36],[.112,.415],[.092,.438],[0,.438]];Yl(gf,uf,Sr,.62),ql(Sr,gf,.122,.403,bg,.62,1.04);let Ig=ie(.069,.06,[0,.034,0],Wl,Sr,40);Ig.scale.z=.73;let Lg=ie(.0694,.003,[0,.014,0],Ha,Sr,40);Lg.scale.z=.73,ne([.042,.012,.01],[0,.014,.051],Wl,Sr),H([.031,.018,.008],[0,.04,-.05],Ha,Sr),ff(Sr,1.95,2.45,[-Math.PI/2,0,-.45],.225,.8);let[xf,Ct]=l(1024);xf.height=512,Ct.fillStyle="#86b0b2",Ct.fillRect(0,0,1024,512);for(let M=0;M<180;M++)p(Ct,a()*1024,a()*512,c(5,55),M%2?"225,229,207":"83,125,129",c(.035,.14));Ct.lineCap="round";for(let M=0;M<260;M++){let C=a()*1024,U=a()*512;Ct.strokeStyle=`rgba(44,57,53,${c(.3,.65)})`,Ct.lineWidth=c(2,4),Ct.beginPath(),Ct.moveTo(C,U),Ct.quadraticCurveTo(C-3,U+7,C+c(-2,3),U+c(7,15)),Ct.stroke()}Ct.fillStyle="#eee2c3",Ct.beginPath(),Ct.moveTo(512,176),Ct.bezierCurveTo(459,117,386,112,350,169),Ct.bezierCurveTo(313,243,337,421,410,466),Ct.bezierCurveTo(460,493,565,493,615,466),Ct.bezierCurveTo(687,421,711,243,675,169),Ct.bezierCurveTo(639,112,565,117,512,176),Ct.fill();for(let M of[433,591])p(Ct,M,271,29,"197,123,110",.2),Ct.fillStyle="#3d3630",Ct.beginPath(),Ct.ellipse(M,215,7,4,-.2,0,Math.PI*2),Ct.fill();Ct.strokeStyle="#52443a",Ct.lineWidth=3,Ct.beginPath(),Ct.moveTo(512,274),Ct.lineTo(512,316),Ct.bezierCurveTo(501,335,482,337,472,326),Ct.moveTo(512,316),Ct.bezierCurveTo(523,335,542,337,552,326),Ct.stroke();for(let M of[-1,1])for(let C=0;C<3;C++)Ct.fillStyle="#6e5b46",Ct.beginPath(),Ct.arc(512+M*(25+C*9),300+C%2*12,1.8,0,Math.PI*2),Ct.fill();f(Ct,512,2300,"112,124,109",.07);let Dg=new Xt({map:h(xf),roughness:.29,clearcoat:1,clearcoatRoughness:.16}),yf=new Xt({color:9091001,roughness:.25,clearcoat:1,clearcoatRoughness:.14}),[vf,fi]=l(1024);vf.height=512,fi.fillStyle="#e8dcba",fi.fillRect(0,0,1024,512);for(let M=0;M<18;M++){let C=M*1024/18;fi.fillStyle=M%2?"#93b8ae":"#7ca6a5",fi.beginPath(),fi.moveTo(C-12,0),fi.bezierCurveTo(C-20,170,C+4,310,C-12,512),fi.lineTo(C+12,512),fi.bezierCurveTo(C+26,310,C+8,170,C+17,0),fi.closePath(),fi.fill()}let Fa=fi.createLinearGradient(0,220,0,512);Fa.addColorStop(0,"rgba(103,62,27,0)"),Fa.addColorStop(.7,"rgba(103,62,27,.09)"),Fa.addColorStop(1,"rgba(74,39,14,.48)"),fi.fillStyle=Fa,fi.fillRect(0,0,1024,512);let _f=new Xt({map:h(vf),roughness:.34,clearcoat:.8,side:Dt}),Ni=new we;Ni.name="Blue pointy-eared mug tipped on its side";function Mf(M,C){let U=new zr(M.map(Y=>new Fe(...Y)),64),B=U.attributes.uv,W=U.attributes.position;for(let Y=0;Y<W.count;Y++)B.setY(Y,W.getY(Y)/.258);return U.rotateY(Math.PI),z(U,C,Ni)}Mf([[0,.008],[.085,.008],[.113,.018],[.126,.043],[.139,.138],[.144,.236],[.14,.257]],Dg),Mf([[.127,.257],[.128,.237],[.121,.09],[.106,.034],[0,.034]],_f);let Ef=z(new Qt(.134,.008,10,64),yf,Ni);Ef.rotation.x=Math.PI/2,Ef.position.y=.254;let Sf=z(new Qt(.102,.004,8,48),_f,Ni);Sf.rotation.x=Math.PI/2,Sf.position.y=.012;for(let M of[-1,1]){let C=new we;C.position.set(M*.095,.235,.103),C.rotation.set(-.06,M*Math.atan2(.095,.103),-M*.1),Ni.add(C);let U=new Mt;U.name=M<0?"Mug left ear tip":"Mug right ear tip",U.position.y=.142,C.add(U);let B=new Tt;B.moveTo(-.047,0),B.bezierCurveTo(-.044,.046,-.015,.112,0,.142),B.bezierCurveTo(.018,.125,.046,.045,.047,0),B.closePath();let W=new sn(B,{depth:.013,bevelEnabled:!0,bevelSegments:3,steps:1,bevelSize:.005,bevelThickness:.005,curveSegments:12});W.translate(0,0,-.0065),z(W,yf,C),N([[-.028,.018,.014],[-.025,.057,.014],[0,.113,.014],[.027,.036,.014]],.0019,_(5005659,.62),C)}let[Ug,Oa]=l(256);Oa.fillStyle="#e8dfc6",Oa.fillRect(0,0,256,256),Oa.fillStyle="#84adb0";for(let M of[0,95,200])Oa.fillRect(M,0,47,256);let Hg=new Xt({map:h(Ug),roughness:.28,clearcoat:1});N([[-.129,.211,0],[-.195,.222,0],[-.249,.188,0],[-.257,.13,0],[-.229,.075,0],[-.178,.057,0],[-.125,.076,0]],.014,Hg,Ni);let Zl=new Mt;Zl.name="Mug handle grip",Zl.position.set(-.249,.141,0),Ni.add(Zl);let Lo=new Tt;Lo.moveTo(-.021,.01),Lo.quadraticCurveTo(0,.021,.021,.01),Lo.quadraticCurveTo(.021,-.003,0,-.019),Lo.quadraticCurveTo(-.022,-.004,-.021,.01),z(new sn(Lo,{depth:.012,bevelEnabled:!0,bevelSize:.003,bevelThickness:.003,bevelSegments:2,curveSegments:8}),new Xt({color:2697251,roughness:.3,clearcoat:1}),Ni).position.set(0,.129,.142);let ji=new we;ji.name="Spilled animal mug in the left foreground",ji.add(Ni),Ni.position.y=-.135,t.add(ji);let bs=new S(-.55,-.05,.83).normalize(),Ts=new S(.54,.66,.39);Ts.addScaledVector(bs,-Ts.dot(bs)).normalize();let $l=new S().crossVectors(bs,Ts).normalize();ji.quaternion.setFromRotationMatrix(new Rt().makeBasis($l,bs,Ts)),ji.scale.setScalar(.72),ji.position.set(.24,0,3.02),ji.updateMatrixWorld(!0),gs(ji,Gn),ji.updateMatrixWorld(!0);let wf=Math.hypot($l.y,Ts.y),za=Ni.localToWorld(new S(-.134*$l.y/wf,.254,-.134*Ts.y/wf)),Do=new S(bs.x,0,bs.z).normalize(),Rs=za.clone().addScaledVector(Do,.23);Rs.y=Gn(Rs.x,Rs.z)+.001;let bf=new Xt({color:5324843,roughness:.13,metalness:.04,clearcoat:1,clearcoatRoughness:.08,transparent:!0,opacity:.94,side:Dt}),Ng=new Ve({color:9072713,roughness:.4,transparent:!0,opacity:.68,depthWrite:!1,side:Dt});function Tf(M,C,U,B,W=0){let Y=new Tt;for(let Lt=0;Lt<=80;Lt++){let nn=Lt/80*Math.PI*2,qt=1+.11*Math.sin(nn*3+W)+.065*Math.sin(nn*7-.3)+.025*Math.cos(nn*13),pi=Math.cos(nn)*U*qt,Bi=Math.sin(nn)*B*qt;Lt?Y.lineTo(pi,Bi):Y.moveTo(pi,Bi)}Y.closePath();let de=new Xi(Y,32),Xe=z(de,Ng);Xe.rotation.x=-Math.PI/2,Xe.scale.setScalar(1.045),Xe.position.set(M,Gn(M,C)+5e-4,C),Xe.castShadow=!1;let et=z(de,bf);return et.rotation.x=-Math.PI/2,et.position.set(M,Gn(M,C)+.001,C),et.castShadow=!1,et}Tf(Rs.x,Rs.z,.23,.145,.4);let Uo=za.clone();Uo.y=Gn(Uo.x,Uo.z)+.008,N([za.toArray(),Uo.toArray(),Uo.clone().addScaledVector(Do,.09).toArray(),Rs.toArray()],.008,bf);for(let[M,C,U]of[[.45,.1,.018],[.51,-.07,.012],[.37,-.18,.022],[.29,.21,.009]]){let B=za.clone().addScaledVector(Do,M).add(new S(-Do.z*C,0,Do.x*C));Tf(B.x,B.z,U,U*.65,M*3)}t.updateMatrixWorld(!0);for(let M of zl){let C=M.geometry.attributes.position;for(let U=0;U<C.count;U++){let B=M.localToWorld(new S(C.getX(U),C.getY(U),0)),W=.003;for(let Y of Bl){let de=Y.worldToLocal(B.clone()),Xe=Y.geometry.parameters;Math.abs(de.x)<Xe.width/2&&Math.abs(de.z)<Xe.depth/2&&(W=Math.max(W,.013))}C.setZ(U,C.getZ(U)+W+.002-M.position.y)}C.needsUpdate=!0,M.geometry.computeVertexNormals(),M.geometry.computeBoundingSphere()}for(let[M,C,U,B,W]of[[-2.53,2.13,1.52,1.08,!0],[-.62,2.13,1.78,1.1,!1]]){let Y=new we;Y.name="Left-wall design whiteboard",Y.position.set(-3.86,C,M),Y.rotation.y=Math.PI/2,t.add(Y),H([U,B,.045],[0,0,0],G,Y);let de=kl(W),Xe=z(new bt(U-.07,B-.07),new Ve({map:de,roughness:.85,emissive:16777215,emissiveMap:de,emissiveIntensity:.025}),Y);Xe.position.z=.026,H([U-.07,.025,.1],[0,-B/2,.035],G,Y),fe([-.4,-B/2+.025,.06],[-.23,-B/2+.025,.06],.011,v,Y),H([.13,.035,.065],[U*.29,-B/2+.029,.045],O,Y),Da(Y,U*.35,B*.21,.034,W?6:9)}let Ei=new we;Ei.name="Worn bookshelf of design books",Ei.position.set(-3.65,0,1.65),Ei.rotation.y=Math.PI/2,t.add(Ei);let Ba=_(11643027,.92,m),Fg=_(10920589,.98);H([1.56,2.38,.035],[0,1.19,-.185],Ba,Ei);for(let M of[-.765,.765])H([.045,2.42,.42],[M,1.21,.015],Ba,Ei);for(let M of[.12,.66,1.2,1.74,2.28])H([1.5,.035,.42],[0,M,.015],Ba,Ei);H([1.51,.1,.045],[0,.05,.19],Ba,Ei);let ka=[["The Design of Everyday Things","#b5ad86"],["Don't Make Me Think","#bd8b36"],["Thinking with Type","#9f392f"],["Grid Systems","#adaf9a"],["Designing Interfaces","#54796f"],["About Face","#393e3e"],["The Elements of User Experience","#758b9d"],["Sprint","#b3a847"],["Universal Principles of Design","#b8b5a4"],["Designing for Interaction","#80665b"],["Sketching User Experiences","#456976"],["The Shape of Design","#bcb296"]],Og=ka.map(([M,C],U)=>{let[B,W]=l(128);B.height=1024,W.fillStyle=C,W.fillRect(0,0,128,1024);let Y=W.createLinearGradient(0,0,128,0);return Y.addColorStop(0,"rgba(0,0,0,.35)"),Y.addColorStop(.25,"rgba(0,0,0,0)"),Y.addColorStop(.86,"rgba(230,219,175,.12)"),Y.addColorStop(1,"rgba(0,0,0,.2)"),W.fillStyle=Y,W.fillRect(0,0,128,1024),W.save(),W.translate(76,70),W.rotate(Math.PI/2),W.fillStyle=[2,4,5,6,9,10].includes(U)?"#ded9c5":"#262b26",W.font="600 47px Georgia,serif",W.fillText(M,0,0,820),W.restore(),W.fillStyle="rgba(217,210,181,.55)",W.fillRect(14,947,100,3),W.fillRect(14,963,100,3),f(W,128,400,"22,24,17",.22),new Ve({map:h(B),roughness:.96})});for(let M=0;M<4;M++){let C=-.69;for(let U=0;U<16;U++){let B=(U+M*5)%ka.length,W=c(.045,.085),Y=c(.3,.44),de=c(.22,.3);if(C+W>.68)break;if(U===7||M===2&&U===11){C+=.1;continue}let Xe=new we;Xe.name=ka[B][0],Ei.add(Xe);let et=U%6===5?-.12:c(-.025,.025);Xe.rotation.z=et,Xe.position.set(C+W/2,.12+M*.54+.018+Math.abs(Math.sin(et))*W/2,.18-de/2),H([W-.008,Y-.009,de-.007],[0,Y/2,0],Fg,Xe);let Lt=_(ka[B][1],.93);for(let qt of[-1,1])H([.004,Y,de],[qt*(W/2-.002),Y/2,0],Lt,Xe);H([W,Y,.007],[0,Y/2,de/2],Lt,Xe);let nn=z(new bt(W-.002,Y-.004),Og[B],Xe);nn.position.set(0,Y/2,de/2+.004),nn.castShadow=!1,C+=W+.008}}for(let M of[.14,.68,1.22,1.76,2.3])H([1.44,.002,.035],[0,M,.196],_(7171673,.99),Ei);let zg=H([.32,.055,.24],[.41,2.327,.03],_(6964536,.95),Ei);zg.rotation.y=.17;let[Bg,Nt]=l(2048);Nt.fillStyle="#66695d",Nt.fillRect(0,0,2048,2048);for(let M=0;M<1250;M++)p(Nt,a()*2048,a()*2048,c(4,125),M%4?"34,31,21":"135,131,110",c(.035,.22));for(let M=0;M<160;M++){let C=M%4,U=C<2?(C?2048:0)+c(-45,90):a()*2048,B=C<2?a()*2048:(C===2?0:2048)+c(-45,90);p(Nt,U,B,c(60,190),"20,26,19",c(.15,.4))}for(let M=0;M<75;M++){let C=c(80,1968),U=c(80,1968),B=c(14,70);p(Nt,C,U,B*1.7,"57,35,15",c(.13,.35)),Nt.strokeStyle=`rgba(48,35,18,${c(.12,.36)})`,Nt.lineWidth=c(1,4),Nt.beginPath(),Nt.ellipse(C,U,B,B*c(.6,1.2),a()*Math.PI,0,Math.PI*c(1.1,2)),Nt.stroke()}Nt.lineCap="round";for(let M=0;M<340;M++){let C=c(100,1950),U=c(100,1950);Nt.save(),Nt.translate(C,U),Nt.rotate(a()*Math.PI*2),Nt.strokeStyle=`rgba(16,23,19,${c(.1,.3)})`,Nt.lineWidth=c(1,4),Nt.beginPath(),Nt.moveTo(0,0),Nt.quadraticCurveTo(c(15,50),c(-12,12),c(55,160),c(-20,20)),Nt.stroke(),Nt.restore()}for(let M=0;M<17;M++){let C=a()*2048,U=a()*2048;Nt.beginPath(),Nt.moveTo(C,U);for(let B=0;B<9;B++)C+=c(-20,25),U+=c(6,27),Nt.lineTo(C,U);Nt.strokeStyle="rgba(18,23,18,.42)",Nt.lineWidth=2.2,Nt.stroke()}for(let M=0;M<1900;M++){let C=a()*2048,U=a()*2048;Nt.strokeStyle=`rgba(167,163,137,${c(.03,.22)})`,Nt.lineWidth=c(.4,1.3),Nt.beginPath(),Nt.moveTo(C,U),Nt.lineTo(C+c(3,28),U+c(-5,5)),Nt.stroke()}f(Nt,2048,9e4,"16,22,15",.26),f(Nt,2048,3e4,"166,161,135",.2);let Rf=h(Bg);V.map=Rf,V.bumpMap=Rf,V.bumpScale=.006,V.needsUpdate=!0;let en=new we;en.name="Weathered entrance wall behind the viewer",en.position.z=4.48,en.rotation.y=Math.PI,t.add(en),H([7.8,3.35,.16],[0,1.675,-.08],_(10068367,.99,g),en),ee(7.8,3.35,en).position.set(0,1.675,.004),H([7.8,.14,.045],[0,.07,.024],v,en),H([7.8,.026,.023],[0,2.87,.03],A,en);let[kg,In]=l(1024);for(let M=0;M<62;M++){let C=a()*1024,U=c(0,180);In.strokeStyle=`rgba(43,36,22,${c(.1,.32)})`,In.lineWidth=c(.5,5),In.beginPath(),In.moveTo(C,U),In.bezierCurveTo(C+6,U+80,C-4,U+170,C+c(-6,9),U+c(210,650)),In.stroke()}for(let M=0;M<21;M++){let C=a()*1024,U=a()*1024;In.beginPath();for(let B=0;B<12;B++){let W=B/12*Math.PI*2,Y=c(9,27),de=C+Math.cos(W)*Y,Xe=U+Math.sin(W)*Y*1.7;B?In.lineTo(de,Xe):In.moveTo(de,Xe)}In.closePath(),In.fillStyle=M%3?"rgba(61,65,52,.75)":"rgba(149,144,118,.6)",In.fill()}for(let M=0;M<10;M++){let C=a()*1024,U=c(60,850);In.strokeStyle="rgba(28,34,26,.75)",In.lineWidth=.8,In.beginPath(),In.moveTo(C,U);for(let B=0;B<8;B++)C+=c(-9,12),U+=c(5,16),In.lineTo(C,U);In.stroke()}let Af=z(new bt(7.8,3.35),new Ve({map:h(kg),transparent:!0,depthWrite:!1,roughness:1}),en);Af.position.set(0,1.675,.007),Af.castShadow=!1;let wn=new we;wn.name="Scuffed service door and failing exit sign",wn.position.set(1.2,0,.05),en.add(wn);let Va=_(6910824,.88,u,.22);H([1.12,2.34,.042],[0,1.17,0],v,wn),H([1.035,2.27,.048],[0,1.153,.022],Va,wn);for(let M of[-.565,.565])H([.065,2.4,.1],[M,1.2,.035],A,wn);H([1.19,.065,.1],[0,2.4,.035],A,wn),H([1.1,.025,.13],[0,.016,.045],G,wn),H([.85,.28,.009],[0,.25,.052],_(7239276,.7,u,.55),wn);for(let M of[-1,1])for(let C of[.14,.35])le([.008,.008,.003],[M*.39,C,.059],G,wn);H([.68,.73,.032],[0,1.69,.055],A,wn);let[Vg,Fi]=l(512);Fi.fillStyle="#293c39",Fi.fillRect(0,0,512,512);for(let M=0;M<170;M++)p(Fi,a()*512,a()*512,c(4,45),"7,14,11",c(.08,.3));Fi.strokeStyle="rgba(100,118,105,.32)",Fi.lineWidth=1.4;for(let M=-512;M<1024;M+=36)Fi.beginPath(),Fi.moveTo(M,0),Fi.lineTo(M+512,512),Fi.moveTo(M,0),Fi.lineTo(M-512,512),Fi.stroke();z(new bt(.6,.65),new Xt({map:h(Vg),roughness:.32,clearcoat:.8,metalness:.12}),wn).position.set(0,1.69,.074),fe([.36,.9,.095],[.36,1.05,.095],.017,G,wn),fe([.36,1.03,.095],[.2,1.03,.12],.015,G,wn);for(let M of[.35,1.2,2.07])H([.07,.1,.034],[-.515,M,.064],A,wn),ie(.012,.12,[-.53,M,.08],G,wn);function As(M,C,U,B,W,Y="#74796b",de="#d0cdb8"){let[Xe,et]=l(512);Xe.height=128,et.fillStyle=Y,et.fillRect(0,0,512,128),et.fillStyle=de,et.font="600 50px Arial,sans-serif",et.textAlign="center",et.fillText(M,256,82,470),f(et,512,1500,"14,20,15",.2);let Lt=z(new bt(C,U),new Ve({map:h(Xe),roughness:.9}),B);return Lt.position.set(...W),Lt.castShadow=!1,Lt}As("STAFF ONLY",.4,.1,wn,[0,1.12,.055]),H([.54,.21,.1],[0,2.66,.08],A,wn);let Ga=As("EXIT  \u2192",.48,.15,wn,[0,2.66,.133],"#263b30","#a8b593");Ga.material.emissive.set(5994071),Ga.material.emissiveMap=Ga.material.map,Ga.material.emissiveIntensity=.25;let Oi=new we;Oi.name="Abandoned critique pinboard",Oi.position.set(-.95,1.94,.055),Oi.rotation.z=-.018,en.add(Oi);let Gg=_(8417362,.99,m);H([1.86,1.25,.045],[0,0,0],Gg,Oi);for(let M of[-.94,.94])H([.035,1.3,.055],[M,0,.01],A,Oi);for(let M of[-.64,.64])H([1.91,.035,.055],[0,M,.01],A,Oi);for(let M=0;M<7;M++){let C=-.68+M%4*.44,U=M<4?.28:-.26,B=kl(M%2===0),W=z(new bt(.35,.43),new Ve({map:B,color:M%2?12170400:13026996,roughness:1,side:Dt}),Oi);W.position.set(C,U,.028+M%3*.001),W.rotation.z=c(-.1,.1),W.castShadow=!1,le([.008,.008,.005],[C,U+.195,.039],M%2?v:_(7814963,.8),Oi);let Y=H([.11,.033,.001],[C-.06,U+.2,.031],_(10001011,.98),Oi);Y.rotation.z=c(-.2,.2)}As("DESIGN / CRITIQUE",1.1,.1,Oi,[-.11,.56,.028],"#77765a","#252d27"),H([.94,.065,.13],[-.95,2.78,.11],A,en);let Cf=ie(.013,.82,[-.95,2.741,.14],new yt({color:7572357}),en,12);Cf.rotation.z=Math.PI/2,Cf.castShadow=!1;let Wa=new lo(9611936,3.4,3.6,1,.85,2);Wa.position.set(-.95,2.72,.36),Wa.target.position.set(-1.12,1.35,.04),en.add(Wa,Wa.target);let Kl=fl({flies:7,moths:3,spread:[.48,.14,.22],seed:71,sizeScale:.5,dive:.22});Kl.group.position.set(-.95,2.52,.43),en.add(Kl.group);let ri=new we;ri.name="Damaged filing cabinets",ri.position.set(-1.12,0,.26),en.add(ri),H([1.52,.77,.028],[0,.385,-.2],Va,ri),H([1.56,.035,.46],[0,.795,0],A,ri);for(let M of[-.745,0,.745])H([.025,.77,.43],[M,.385,0],Va,ri);for(let M of[.018,.385])H([1.52,.025,.43],[0,M,0],A,ri);for(let M of[-.38,.38])for(let C of[.2,.56]){if(M<0&&C>.4)continue;let U=0;H([.71,.32,.025],[M,C,.231+U],A,ri),fe([M-.1,C+.04,.26+U],[M+.1,C+.04,.26+U],.011,G,ri),H([.16,.055,.004],[M,C-.06,.248+U],R,ri),U&&(H([.68,.014,.35],[M,C-.16,.2],A,ri),H([.012,.28,.34],[M-.34,C,.2],A,ri))}let Wg=H([.47,.29,.36],[-1.3,.96,.29],_(11573869,.99,m),en);Wg.rotation.y=.14,As("ARCHIVE",.25,.075,en,[-1.3,.97,.483],"#a49471","#3b3d30");let Xg=H([.5,.014,.19],[-1.3,1.116,.39],T,en);Xg.rotation.x=.2;let wr=new we;wr.name="Neglected network and electrical cabinet",wr.position.set(-2.96,1.6,.08),en.add(wr),H([.64,.97,.12],[0,0,0],A,wr),H([.56,.88,.014],[0,0,.066],v,wr);for(let M=0;M<4;M++)for(let C=0;C<5;C++)H([.072,.09,.035],[-.2+C*.1,.28-M*.16,.09],Va,wr),H([.017,.035,.01],[-.2+C*.1,.28-M*.16,.113],M===1?R:v,wr);let Ho=new we;Ho.position.set(-.32,0,.06),Ho.rotation.y=-.65,wr.add(Ho),H([.62,.96,.025],[.31,0,0],A,Ho),As("CAUTION",.3,.1,Ho,[.32,.26,.014],"#a08d52","#252b24");for(let M=0;M<4;M++)N([[-3.12+M*.08,2.1,.12],[-3.15+M*.08,2.5,.12],[-3.15+M*.08,2.88,.12],[-2.1+M*.08,2.88,.12]],.012,A,en);for(let M=0;M<6;M++)N([[-3.18+M*.08,1.15,.16],[-3.2+M*.06,.71,.21],[-3.13+M*.1,.32,.17],[-2.85+M*.06,.15,.3]],.005,M%2?v:_(5858907,.9),en);H([.2,.13,.022],[2.2,.35,.047],R,en),H([.11,.085,.025],[2.2,.35,.065],v,en),N([[2.2,.35,.09],[2.24,.12,.13],[2.47,.023,.28],[2.9,.023,.42],[3.1,.023,.3]],.007,v,en);let zi=new we;zi.name="Dusty fire extinguisher",zi.position.set(2.16,.25,.17),en.add(zi);let Jl=_(8271401,.78,u,.23);ie(.095,.42,[0,.25,0],Jl,zi,24),le([.095,.065,.095],[0,.47,0],Jl,zi),le([.093,.045,.093],[0,.04,0],Jl,zi),H([.11,.025,.055],[.015,.56,0],v,zi),fe([0,.51,0],[0,.57,0],.018,G,zi),N([[.035,.52,0],[.12,.47,.02],[.13,.19,.06]],.012,v,zi),As("FIRE",.12,.14,zi,[0,.27,.097],"#b4ac8c","#33382d"),n.push(Me,ve,mt,Ye,dn,zt,Ie,Qe.group,Kn,Ei,ri,zi);for(let M of n)gs(M,Gn);for(let M of[Oe,He]){let C=M.getObjectByName("Monitor power cable");M.remove(C),C.geometry.dispose();let U=M.localToWorld(new S(.1,.23,-.05)),B=U.x,W=U.z,Y=N([U.toArray(),[B+.09,Math.max(Gn(B+.09,W+.1)+.008,U.y*.45),W+.1],[B+.2,Gn(B+.2,W+.2)+.007,W+.2],[B+.38,Gn(B+.38,W+.11)+.007,W+.11]],.006,v);Y.userData.ignoreFloorContact=!0,Y.userData.anchorStart=!0}for(let M of r)ul(M,Gn);t.add(D0(e,Gn));let Kr=I0();Kr.group.userData.ignoreAcid=!0,t.add(Kr.group);let Ql=Z0({valves:Kr.valves,floorSupport:Gn});t.add(Ql.group);let Pf=k0({filing:ri,laptop:of,floorSupport:Gn,drawerMaterial:A});t.add(Pf.group);let jl=W0({bottle:Pg,contents:Ag,cap:Io,floorSupport:Gn});t.add(jl.group);let If=O0({room:t,floorSupport:Gn,viewerPosition:e});t.add(If.group);function qg(M){Ql.setEnvironment(M),je.setEnvironment(M),_e.setEnvironment(M),Kr.setEnvironment(M),Ua.setEnvironment(M)}let Lf=-1/0;function Yg(M,C,U=e){jl.update(M,C);let B=Ua.update(M,C);return M-Lf>=1/Ut.effectsHz&&(Lf=M,If.update(M,C,U),Kr.update(M,C),Vl.update(M,C,B),Kl.update(M,C,.65),Gl.update(M,C,.78)),B}return{group:t,laptop:of,catMug:ji,handsaw:je.group,acidLeaks:Ql,chargingKit:Pf,ketchupKey:jl,countdown:Qe,setDisplayEnvironment:qg,update:Yg,figpalHoists:Kr,toggleHoist:Kr.toggleHoist}}var ya=["Nooo!!!!","Tell my wife that I love her!","Delete my browser history!"],Rd=["help","I have a family","I swear I didn't detach the component!"];function K0(i,e,t=Math.random){let n=18,r=-1,s=Math.floor(t()*Rd.length);return{update(o,a=!1){if(o<n)return!1;if(a||e.isActive(o))return n=o+2,!1;let c=[0,1,2].filter(h=>i.isHanging(h));if(!c.length)return n=o+2,!1;c.length>1&&(c=c.filter(h=>h!==r));let l=c[Math.floor(t()*c.length)];return e.show(l,o,Rd[s],6),r=l,s=(s+1)%Rd.length,n=o+20+t()*15,!0},reset(o=0){n=o+18,r=-1}}}function J0(i){let e=null;return{update(t,n){return t!=="finished"||e!==null?!1:(e=n,i.lowerAll(),!0)},reset(){e!==null&&i.reset(),e=null},get active(){return e!==null},elapsed(t){return e===null?-1:Math.max(0,t-e)}}}function Q0(i,e,t=()=>!0){let n=document.querySelector("#figpal-dialogues"),r=ya.map((d,g)=>{let x=document.createElement("div");x.className="figpal-speech",x.hidden=!0,x.dataset.figpal=String(g+1);let m=document.createElement("span");m.className="figpal-speech-text",m.textContent=d;let u=document.createElementNS("http://www.w3.org/2000/svg","svg");u.classList.add("figpal-speech-tail"),u.setAttribute("aria-hidden","true");let E=document.createElementNS("http://www.w3.org/2000/svg","path");return u.append(E),x.append(m,u),n.append(x),x}),s=new S,o=r.map(()=>null),a=r.map(()=>15);function c(d,g,x=ya[d],m=15){if(r[d]){if(!t(d)){p(d);return}o[d]=g,a[d]=m,r[d].children[0].textContent=x}}function l(d){return o.some((g,x)=>t(x)&&g!==null&&d>=g&&d<g+a[x])}function h(d){for(let g=0;g<r.length;g++)c(g,d)}function p(d){if(Number.isInteger(d)){r[d]&&(o[d]=null,r[d].hidden=!0);return}n.hidden=!0;for(let g=0;g<r.length;g++)o[g]=null,r[g].hidden=!0}function f(d,g){n.hidden=!1;let x=e.getBoundingClientRect(),m=0;for(let u=0;u<i.length;u++){if(!t(u)){p(u);continue}let E=r[u],y=o[u]===null?-1:g-o[u],_=a[u];if(y<0||y>=_){E.hidden=!0,y>=_&&(o[u]=null);continue}if(E.style.opacity=String(1-Ge.smoothstep(y,_-1,_)),i[u].getWorldPosition(s),s.y=Math.max(s.y,1.32),s.project(d),s.z<-1||s.z>1||Math.abs(s.x)>1.04||Math.abs(s.y)>1.1){E.hidden=!0;continue}E.hidden=!1;let P=x.left+(s.x*.5+.5)*x.width,T=x.top+(-s.y*.5+.5)*x.height;E.style.transform=`translate3d(${P}px,${T-14}px,0) translate(-50%,-100%)`;let R=E.offsetWidth/2;E.querySelector("path").setAttribute("d",`M ${R-5} 0 L ${R+6} 0 L ${R} 15 Z`),m++}n.hidden=m===0}return p(),{update:f,hide:p,show:c,showAll:h,isActive:l}}var _r=i=>(i=Math.max(0,Math.min(1,i)),i*i*(3-2*i));function j0({canDetach:i=()=>!0}={}){let e=!0,t=-1/0,n=-1/0,r=!1,s=-1/0;return{get locked(){return e},requestReach(o){return o-t<1.65||!e&&o-n<.85?!1:(t=o,s=o+5.2,r=!e,!0)},detach(o){return!e||!i()?!1:(e=!1,n=o,s=o+2.4,r=!1,!0)},endReach(){s=-1/0,r=!1},sample(o,a=!1){a&&Number.isFinite(t)&&(s=Math.max(s,o+.8));let c=o-t,l=c<.52?_r(c/.52):c<.86?1:1-_r((c-.86)/.79),h=!1;!e&&r&&c>=.55&&(h=!0,r=!1);let p=o-n,f=e?0:_r(p/.14),d=e?0:_r((p-.12)/.42),g=e?0:_r((p-.56)/.28),x=e?0:_r((p-.9)/.65),m=o<s&&(e||p<1.65),u=m?Math.min(_r(c/.24),_r((s-o)/.45)):0;return{locked:e,reach:l,visible:m,reveal:u,releaseElapsed:p,unlatch:f,hingeOpen:d,handFree:g,cuffDrop:x,release:e?0:_r((o-n)/.85),strain:e&&c>.45&&c<.86?Math.sin(c*64)*.003:0,openLaptop:h}},reset(){e=!0,t=-1/0,n=-1/0,r=!1,s=-1/0}}}function em(i,e,t,n=.43,r=.49){let s=new S().subVectors(e,i),o=s.length();s.normalize(),o>n+r-.015&&i.addScaledVector(s,o-(n+r-.015));let a=Math.max(.001,i.distanceTo(e)),c=Ge.clamp((n*n-r*r+a*a)/(2*a),-n,n),l=new S(.55,-1,.08).addScaledVector(s,-new S(.55,-1,.08).dot(s)).normalize();return t.copy(i).addScaledVector(s,c).addScaledVector(l,Math.sqrt(Math.max(0,n*n-c*c))),t}function tm(i,e){let r=new Pt,s=new Float32Array(609*3),o=[];for(let _=1;_<=20;_++)for(let P=1;P<=28;P++){let T=_*29+P;o.push(T,T-28-2,T-1,T,T-28-1,T-28-2)}r.setAttribute("position",new hn(s,3).setUsage(Un)),r.setIndex(o);let a=new dt(r,i);a.name="Full curved forearm",a.castShadow=a.receiveShadow=!0,a.frustumCulled=!1;let c=r.clone(),l=new dt(c,e);l.name="Forearm ink silhouette",l.raycast=()=>{},l.frustumCulled=!1,a.add(l);let h=new la,p=new S,f=new S,d=new S,g=new S,x=new S,m=new S,u=new S,E=[[0,.076,.061],[.18,.081,.063],[.4,.073,.055],[.65,.059,.043],[.8,.047,.033],[1,.038,.026]];function y(_,P,T){p.set(0,0,1).applyQuaternion(T),h.v0.copy(_),h.v1.lerpVectors(_,P,.31),h.v1.x+=.018,h.v3.copy(P).addScaledVector(p,.075),h.v2.copy(h.v3).addScaledVector(p,.065),m.set(1,0,0).applyQuaternion(T);for(let O=0;O<=20;O++){let v=O/20;v<.8?(h.getPoint(v/.8,f),h.getTangent(v/.8,d)):(f.copy(P).addScaledVector(p,.075*(1-v)/.2),d.copy(p).negate()),g.copy(m).addScaledVector(d,-m.dot(d)).normalize(),x.crossVectors(g,d).normalize();let w=E.findIndex(le=>le[0]>=v),V=E[Math.max(0,w-1)],G=E[w],z=V===G?0:Ge.smoothstep(v,V[0],G[0]),H=Ge.lerp(V[1],G[1],z),Q=Ge.lerp(V[2],G[2],z);for(let le=0;le<=28;le++){let ie=le/28*Math.PI*2;u.copy(f).addScaledVector(g,Math.cos(ie)*H).addScaledVector(x,Math.sin(ie)*Q),u.toArray(s,(O*29+le)*3)}}r.attributes.position.needsUpdate=!0,r.computeVertexNormals();let R=r.attributes.normal,A=c.attributes.position;for(let O=0;O<A.count;O++)A.setXYZ(O,s[O*3]+R.getX(O)*.0015,s[O*3+1]+R.getY(O)*.0015,s[O*3+2]+R.getZ(O)*.0015);A.needsUpdate=!0}return{mesh:a,update:y}}function nm(i,e){let t=i.geometry,n=t.attributes.position,r=t.clone(),s=r.attributes.position,o=1.9/e;for(let c=0;c<s.count;c++){let l=n.getX(c),h=n.getY(c),p=n.getZ(c),f=Math.max(0,-p)*o;p>=0||s.setXYZ(c,l,h*Math.cos(f)-(1-Math.cos(f))/o,-Math.sin(f)/o-h*Math.sin(f))}r.computeVertexNormals(),t.morphAttributes.position=[s],t.morphAttributes.normal=[r.attributes.normal],i.updateMorphTargets();let a=i.children.find(c=>c.name==="Ink silhouette");if(a){let c=s.clone(),l=r.attributes.normal;for(let h=0;h<c.count;h++)c.setXYZ(h,s.getX(h)+l.getX(h)*.002,s.getY(h)+l.getY(h)*.002,s.getZ(h)+l.getZ(h)*.002);a.geometry.morphAttributes.position=[c],a.updateMorphTargets()}return c=>{i.morphTargetInfluences[0]=Ge.clamp(c,0,1),a&&(a.morphTargetInfluences[0]=i.morphTargetInfluences[0])}}var im=new S(0,1,0);function rm(i,e={}){let t=new we;t.name="Player forearm chained to the rear pipes";let n=new we;n.name="Camera-relative reaching hand",t.add(n);let r=j0(e),s=new Kt(1,24,16),o=new Ve({color:13871751,roughness:.86,metalness:0,emissive:6832947,emissiveIntensity:.025}),a=new yt({color:2104345,side:yn}),c=ci(10857122),l=ci(12568e3),h=new Ve({color:1382166,roughness:.9}),p=ci(9872814);p.map=null,p.metalnessMap=null,p.metalness=.86,p.roughness=.66,p.bumpScale=35e-5;let f=new Ve({color:11517381,metalness:.92,roughness:.29}),d=new yt({transparent:!0,opacity:0,depthWrite:!1,colorWrite:!1});function g(tt,it,rt=n){let Ye=new dt(tt,it);return Ye.castShadow=!0,Ye.receiveShadow=!0,rt.add(Ye),Ye}function x(tt,it,rt,Ye=o){let at=g(s,Ye,tt);return at.position.set(...it),at.scale.set(...rt),at}function m(tt,it,rt,Ye,at){it=new S(...it),rt=new S(...rt);let Je=rt.clone().sub(it),ut=g(new Bt(Ye,Ye,Je.length(),20),at,tt);return ut.position.copy(it).add(rt).multiplyScalar(.5),ut.quaternion.setFromUnitVectors(im,Je.normalize()),ut}function u(tt,it,rt,Ye){return g(new un(new $t(it.map(at=>new S(...at))),24,rt,7,!1),Ye,tt)}let E=new we;E.name="Cartoon forearm and right hand",n.add(E);function y(tt,it=.002){let rt=tt.geometry.clone(),Ye=rt.attributes.position,at=rt.attributes.normal;for(let ut=0;ut<Ye.count;ut++)Ye.setXYZ(ut,Ye.getX(ut)+at.getX(ut)*it,Ye.getY(ut)+at.getY(ut)*it,Ye.getZ(ut)+at.getZ(ut)*it);Ye.needsUpdate=!0,rt.computeBoundingSphere();let Je=new dt(rt,a);Je.name="Ink silhouette",Je.raycast=()=>{},tt.add(Je)}function _(tt,it,rt=28){let Ye=it.map(([zt,I,J,ae,ce])=>({z:zt,x:I,y:J,rx:ae,ry:ce})),at=[],Je=[],ut=[];for(let zt=0;zt<Ye.length;zt++){let I=Ye[zt];for(let J=0;J<=rt;J++){let ae=J/rt*Math.PI*2,ce=Math.cos(ae),te=Math.sin(ae);if(at.push(I.x+I.rx*ce,I.y+I.ry*te,I.z),Je.push(J/rt,zt/(Ye.length-1)),zt&&J){let Ie=zt*(rt+1)+J;ut.push(Ie,Ie-rt-2,Ie-1,Ie,Ie-rt-1,Ie-rt-2)}}}let gn=new Pt;gn.setAttribute("position",new lt(at,3)),gn.setAttribute("uv",new lt(Je,2)),gn.setIndex(ut),gn.computeVertexNormals();let dn=g(gn,o,tt);return y(dn),dn}let P=_(E,[[0,0,0,.097,.078],[-.18,.004,0,.099,.077],[-.42,.008,.003,.092,.073],[-.7,.006,.002,.084,.066],[-1,0,0,.076,.061]],40);P.name="Upper arm";let T=x(E,[0,0,0],[.076,.061,.068]);T.name="Bent elbow";let R=tm(o,a);E.add(R.mesh);let A=new ft,O=new we;O.name="Cartoon right hand",E.add(O);let v=new Mt;v.name="Saw contact above wrist",v.position.set(0,.044,.095),O.add(v);let w=new Mt;w.name="Mug handle contact",w.position.set(0,-.036,-.145),O.add(w),_(O,[[.025,0,0,.037,.025],[0,0,0,.04,.026],[-.03,-.005,0,.059,.036],[-.066,-.005,0,.071,.04],[-.108,-.002,-.002,.071,.037],[-.14,.002,-.003,.065,.031],[-.16,.004,-.004,.051,.022],[-.17,.004,-.004,.006,.004]],40);let V=[],G=[];for(let[tt,it,rt,Ye]of[[0,-.056,.12,.19],[1,-.018,.136,.055],[2,.023,.128,-.08],[3,.06,.1,-.23]]){let at=new we;at.position.set(it,-.002,-.137+(tt===3?.013:0)),at.rotation.y=Ye,O.add(at),V.push(at);let Je=tt===3?.0175:.02,ut=_(at,[[.014,0,0,Je*.92,Je*.9],[0,0,0,Je,Je],[-rt*.22,0,-.002,Je,Je*.98],[-rt*.48,0,-.005,Je*.96,Je*.94],[-rt*.7,0,-.009,Je*.92,Je*.9],[-rt*.84,0,-.012,Je*.86,Je*.84],[-rt*.94,0,-.014,Je*.64,Je*.64],[-rt*.985,0,-.014,Je*.3,Je*.3],[-rt,0,-.014,3e-4,3e-4]]);ut.name=`Finger ${tt+1}`,G.push(nm(ut,rt)),at.userData.spread=Ye}let z=new Mt;z.name="Lid contact fingertip",z.position.set(0,-.014,-.136),V[1].add(z);let H=new we;H.position.set(-.049,-.008,-.041),H.rotation.y=.88,H.rotation.z=-.26,O.add(H),_(H,[[.018,0,0,.033,.03],[0,0,0,.032,.03],[-.027,-.003,0,.029,.027],[-.051,-.005,.002,.026,.025],[-.072,-.006,.002,.025,.024],[-.089,-.006,.001,.021,.02],[-.101,-.006,0,.012,.012],[-.107,-.006,0,3e-4,3e-4]]);let Q=new we;Q.name="Wrist cuff and chain \u2014 right-click to detach",Q.userData.playerChain=!0,n.add(Q);let le=new we;le.name="Close-fitting oval wrist cuff",Q.add(le);let ie=new S(0,0,.033),fe=-.056;function N(tt,it,rt){let Ye=new Tt;Ye.absellipse(0,0,.061,.049,tt,it,!1),Ye.lineTo(Math.cos(it)*.05,Math.sin(it)*.038),Ye.absellipse(0,0,.05,.038,it,tt,!0),Ye.closePath();let at=new sn(Ye,{depth:.044,bevelEnabled:!0,bevelSize:6e-4,bevelThickness:6e-4,bevelSegments:2,curveSegments:28}),Je=g(at,p,rt);Je.position.z=-.022;for(let ut of[0,.044]){let gn=Array.from({length:25},(zt,I)=>{let J=tt+(it-tt)*I/24;return[.0608*Math.cos(J),.0488*Math.sin(J),ut]}),dn=u(Je,gn,.0016,f);dn.name="Polished shackle rim"}return Je}let j=N(Math.PI,Math.PI*2,le);j.name="Fixed lower cuff";let ne=new we;ne.name="Hinged upper cuff",ne.position.x=fe,le.add(ne);let ee=N(0,Math.PI,ne);ee.position.x=-fe,m(le,[fe,0,-.03],[fe,0,.03],.008,f);for(let tt of[-.029,.029])x(le,[fe,0,tt],[.009,.009,.003],f);g(new wt(.021,.027,.043),p,le).position.set(.064,-.01,0);let se=new we;se.name="Spring-loaded locking clip",se.position.set(.064-fe,.012,0),ne.add(se),g(new wt(.013,.027,.036),f,se).position.set(.003,-.008,0),x(le,[.064,-.006,-.0225],[.0038,.0038,.001],h),g(new wt(.003,.008,.0015),h,le).position.set(.064,-.011,-.0225);for(let tt of[-.015,.015])x(se,[.01,-.007,tt],[.002,.003,.003],f);let Z=g(new Qt(.014,.0048,8,24),f,le);Z.name="Welded chain attachment",Z.position.set(.076,-.019,0),Z.rotation.y=Math.PI/2;let xe=g(new Bt(.078,.078,.08,16),d,le);xe.rotation.x=Math.PI/2,xe.castShadow=!1;let Se=new we;Se.name="Rusted rear pipe anchoring the wrist chain",t.add(Se),u(Se,[[3.3,.13,4.16],[3.3,.42,4.16],[3.3,2.16,4.16],[3.27,2.32,4.16],[2.78,2.34,4.16]],.045,c);for(let tt of[.3,1.25,2.08]){g(new wt(.2,.16,.025),c,Se).position.set(3.3,tt,4.37);for(let Ye of[3.23,3.37]){m(Se,[Ye,tt,4.35],[Ye,tt,4.14],.008,l);let at=g(new Bt(.017,.017,.018,6),l,Se);at.rotation.x=Math.PI/2,at.position.set(Ye,tt,4.12)}let rt=g(new Qt(.058,.01,8,32),l,Se);rt.rotation.x=Math.PI/2,rt.position.set(3.3,tt,4.16)}let ge=new S(3.3,2.08,4.1),re=new S,L=g(new Qt(.055,.009,8,24),l,Se);L.name="Raised wrist-chain pipe anchor",L.position.copy(ge),L.rotation.y=Math.PI/2;let ye=[];for(let tt=0;tt<48;tt++){let it=tt/48*Math.PI*2;ye.push(new S(Math.cos(it)*.017,Math.sin(it)*.028,0))}let Ae=new un(new $t(ye,!0),32,.0055,6,!0),_e=new vn(Ae,f,360);_e.name="Heavy interlocking wrist chain",_e.castShadow=!0,_e.receiveShadow=!0,_e.frustumCulled=!1,Q.add(_e);let Re=new vn(new Kt(1,8,6),d,360);Re.frustumCulled=!1,Q.add(Re);let Le=new S,he=new S,D=new S,b=new S,$=new S,pe=new S,Me=new Mt,ve=new S(.29,-.36,-.73),Oe=new S(.45,-.65,-.5),He=new S(.15,-.31,-.77),ke=new S(-.08,-.32,-.83),nt=new S,De=new S(.43,-.66,-.54),K=new S(.22,-.68,-.58),me=new S(.12,-.34,-.05),Pe=new S(0,0,-1),Ce=new S,be=new S,ue=new S,We=new ft,X=new ft,Te=!1,oe=new S,Ee=new S,Ue=new S,ze=new S,ht=new ft,It=new ft,Ft=3,mt=new S(1,0,0),Et=Array.from({length:49},()=>new S);function $n(tt,it,rt){return rt.copy(b).lerp(re,tt),rt.addScaledVector(mt,Math.sin(Math.PI*tt)*it),rt.y-=Math.sin(Math.PI*tt)*it*.9,nt.copy(rt),n.localToWorld(nt),nt.y=Math.max(.032,nt.y),n.worldToLocal(nt),rt.copy(nt),rt}function Ji(){let tt=0,it=1.5;for(let Je=0;Je<9;Je++){let ut=(tt+it)/2,gn=0;for(let dn=0;dn<Et.length;dn++)$n(dn/(Et.length-1),ut,Et[dn]),dn&&(gn+=Et[dn].distanceTo(Et[dn-1]));gn>Ft?it=ut:tt=ut}let rt=new $t(Et),Ye=rt.getLength(),at=Math.min(360,Math.max(2,Math.ceil(Ye/.043)));_e.count=Re.count=at;for(let Je=0;Je<at;Je++){let ut=Je/(at-1);rt.getPointAt(ut,Me.position),rt.getTangentAt(ut,pe),Me.quaternion.setFromUnitVectors(im,pe),Je%2&&Me.rotateY(Math.PI/2),Me.scale.set(1,1,1),Me.updateMatrix(),_e.setMatrixAt(Je,Me.matrix),Me.scale.set(.032,.026,.032),Me.updateMatrix(),Re.setMatrixAt(Je,Me.matrix)}_e.instanceMatrix.needsUpdate=!0,Re.instanceMatrix.needsUpdate=!0}function Hi(tt,it=!1,rt=!1,Ye=null,at=0){let Je=r.sample(tt,rt),ut=Je.reach;n.position.copy(i.position),n.quaternion.copy(i.quaternion);let gn=Math.tan(Ge.degToRad(i.fov/2))/Math.tan(Ge.degToRad(62/2));if(n.scale.set(gn,gn,1),n.updateWorldMatrix(!0,!1),n.visible=Je.visible,E.visible=Je.locked,!Je.visible)return Je.openLaptop;re.copy(ge),n.worldToLocal(re);let dn=Ye?Ye.reveal:it?1:Je.reveal,zt=(1-dn)*.55;Le.copy(ve).lerp(Je.locked?He:ke,ut),Le.y+=at*.18,Le.x-=at*.12,Je.locked&&(Le.y+=it?0:Je.strain),he.copy(Oe).lerp(Je.locked?De:K,ut);let I=!Je.locked&&Je.releaseElapsed<1.8&&Te,J=it&&!Je.locked?1:Je.hingeOpen,ae=it&&!Je.locked?1:Je.cuffDrop;if(I){Le.copy(Ce),he.copy(ue);let ce=it?1:Je.handFree;Le.y+=ce*.055,Le.z+=ce*.025}if(Le.y-=zt,he.y-=zt,$.copy(he).sub(Le).setLength(.35),he.copy(Le).add($),D.copy(he).add(me),P.position.copy(D),$.copy(he).sub(D),P.quaternion.setFromUnitVectors(Pe,$.clone().normalize()),P.scale.z=$.length(),$.copy(Le).sub(he),A.setFromUnitVectors(Pe,$.clone().normalize()),T.position.copy(he),T.quaternion.copy(A),O.position.copy(Le),O.quaternion.copy(A),O.rotateX(-.12+ut*.08),O.rotateY(.13-ut*.06),O.rotateZ(-.04),I&&O.quaternion.slerp(We,1-Je.handFree),V.forEach((ce,te)=>{ce.rotation.x=-.06+(1-ut)*(.11+te*.015)}),H.rotation.x=0,H.rotation.y=.88,H.rotation.z=-.26,G.forEach(ce=>ce(0)),Ye){let ce=Ye.blend,te=Ye.grip,Ie=Ye.gripKind==="handle";V.forEach((Be,Qe)=>{Be.rotation.x=Ge.lerp(Be.rotation.x,(Ie?-.16:-.46)+(Qe===0?.08:0),te),Be.rotation.y=Ge.lerp(Be.userData.spread,Be.userData.spread*.3,te)}),H.rotation.x=(Ie?.42:.28)*te,H.rotation.y=.88-(Ie?.58:.28)*te,Ie&&(G.forEach(Be=>Be(te)),H.rotation.z=-.26+.18*te),V[1].updateMatrix(),Ie?Ee.copy(w.position):Ee.copy(z.position).applyMatrix4(V[1].matrix),It.copy(i.quaternion).invert(),ht.copy(It).multiply(Ye.quaternion),oe.copy(Ye.position),n.worldToLocal(oe),Ue.copy(oe).sub(Ee.applyQuaternion(ht)),O.position.lerp(Ue,ce),O.quaternion.slerp(ht,ce),Le.copy(O.position),D.set(.34,-.66-zt,-.09),em(D,Le,ze),he.lerp(ze,ce),P.position.copy(D),$.copy(he).sub(D),P.quaternion.setFromUnitVectors(Pe,$.clone().normalize()),P.scale.z=$.length(),$.copy(Le).sub(he),A.setFromUnitVectors(Pe,$.clone().normalize()),T.position.copy(he),T.quaternion.copy(A)}else V.forEach(ce=>{ce.rotation.y=ce.userData.spread});return R.update(he,O.position,O.quaternion),Je.locked?(le.position.copy(ie).applyQuaternion(O.quaternion).add(Le),le.quaternion.copy(O.quaternion),ne.rotation.z=0,se.rotation.z=0):(le.position.copy(be),le.position.y-=zt+ae*.32,le.position.x+=ae*.08,le.quaternion.copy(X),le.rotateX(ae*.8),le.rotateZ(ae*.42),ne.rotation.z=J*1.95,se.rotation.z=-(it?1:Je.unlatch)*.85),le.updateMatrix(),b.copy(Z.position).applyMatrix4(le.matrix),Ft=b.distanceTo(re)+(Je.locked?.24*(1-ut)+.018:.42),Ji(),Je.openLaptop}function ti(tt){if(!r.locked)return!1;Ce.copy(Le),ue.copy(he),We.copy(O.quaternion),X.copy(le.quaternion),be.copy(le.position),Te=!0;let it=r.detach(tt);return it&&(E.visible=!1),it}function mn(){r.reset(),Te=!1,ne.rotation.z=0,se.rotation.z=0,Hi(0,!0)}return Hi(0,!0),{group:t,target:Q,state:r,update:Hi,reset:mn,getSawContact:tt=>v.getWorldPosition(tt),endReach:()=>r.endReach(),setEnvironment(tt){for(let it of[c,l,p,f])it.envMap=tt,it.envMapIntensity=it===f?1.65:1.15,it.needsUpdate=!0},get locked(){return r.locked},requestReach:tt=>r.requestReach(tt),detach:ti}}function sm(i,{canDetach:e=()=>!0,onBlocked:t=()=>{}}={}){let n=document.querySelector("#chain-menu"),r=n.querySelector("button"),s=document.querySelector("#scene");function o(l=!1){n.hidden=!0,l&&s.focus({preventScroll:!0})}function a(l,h){r.setAttribute("aria-disabled",String(!e())),r.title=e()?"Unlock the shackle with the key":"Find the shackle key first",n.hidden=!1,n.style.left=`${Math.max(8,Math.min(l,innerWidth-n.offsetWidth-8))}px`,n.style.top=`${Math.max(8,Math.min(h,innerHeight-n.offsetHeight-8))}px`,r.focus({preventScroll:!0})}function c(){if(!e()){t();return}o(!0),i()}return r.addEventListener("click",c),n.addEventListener("contextmenu",l=>l.preventDefault()),document.addEventListener("pointerdown",l=>{!n.hidden&&!n.contains(l.target)&&o()},!0),document.addEventListener("keydown",l=>{n.hidden||(l.code==="Escape"?(l.preventDefault(),l.stopPropagation(),o(!0)):l.code==="KeyB"&&l.altKey&&l.metaKey&&!l.ctrlKey&&!l.shiftKey&&(l.preventDefault(),l.stopPropagation(),l.repeat||c()))},!0),window.addEventListener("blur",()=>o()),{show:a,hide:o,get active(){return!n.hidden}}}function om(i,e){let t=i.match(/[\p{L}\p{N}'’]+[^\p{L}\p{N}'’]*/gu)||[],n=[],r=.1;for(let s of t){let o=s.replace(/[^\p{L}\p{N}'’]/gu,""),a=(o.toLowerCase().replace(/e$/,"").match(/[aeiouy]+/g)||[]).length,c=Math.max(1,Math.min(4,a)),l=.24+Math.min(o.length,10)*.025+(c-1)*.09;for(let h=0;h<c;h++){let p=l/c;n.push({start:r+h*p,end:r+(h+.87)*p,amount:.78+Math.min(o.length,6)*.025})}r+=l+(/[.!?…]/u.test(s)?.4:/[,;:]/.test(s)?.24:.11)}return{startTime:e,cues:n,duration:r}}function am(i,e){if(!i)return 0;let t=e-i.startTime;for(let n of i.cues){if(t<n.start)return 0;if(t<=n.end){let r=(t-n.start)/(n.end-n.start),s=Math.min(1,r/.22),o=Math.min(1,(1-r)/.35),a=Math.min(s,o);return n.amount*a*a*(3-2*a)}}return 0}var Ad={position:[1.85221,.821615,3.1149],lookAt:[1.155084,.748275,2.401713],fov:48.36},YM=i=>Ge.euclideanModulo(i+Math.PI,Math.PI*2)-Math.PI;function cm(i){let e=new S(...Ad.position),t=new S(...Ad.lookAt).sub(e).normalize(),n={yaw:Math.atan2(-t.x,-t.z),pitch:Math.asin(t.y),zoom:Ad.fov/i},r=null;return{start(s,o,a){r={time:s,position:o.clone(),yaw:a.yaw,pitch:a.pitch,zoom:a.zoom}},cancel(){r=null},get active(){return r!==null},update(s,o,a,c=!1){if(!r)return;let l=c?1:Ge.clamp((s-r.time)/1.4,0,1),h=l*l*(3-2*l);o.lerpVectors(r.position,e,h),a.yaw=r.yaw+YM(n.yaw-r.yaw)*h,a.pitch=Ge.lerp(r.pitch,n.pitch,h),a.zoom=Ge.lerp(r.zoom,n.zoom,h),l===1&&(o.copy(e),Object.assign(a,n),r=null)}}}var Mr=(i,e,t)=>Ge.smootherstep(i,e,t),lm=i=>Ge.euclideanModulo(i+Math.PI,Math.PI*2)-Math.PI;function hm({laptop:i,restraint:e,cameraPosition:t,state:n}){let r=null,s=new S,o=new S,a=new S,c=new S,l=new ft,h=new ft,p=new oi,f=0,d=0,g=1,x=0,m=0,u={position:new S,quaternion:new ft,blend:0,grip:0,reveal:0};function E(P){return r!==null||e.locked||i.isOpen||!e.requestReach(P)?!1:(r=P,s.copy(t),f=n.yaw,d=n.pitch,g=n.zoom??1,i.object.updateWorldMatrix(!0,!1),i.object.localToWorld(o.set(.16,.78,1)),i.object.localToWorld(a.set(0,.32,-.02)),c.copy(a).sub(o).normalize(),x=Math.atan2(-c.x,-c.z),m=Math.asin(c.y),u.blend=u.grip=u.reveal=0,!0)}function y(P,T=!1){if(r===null)return!1;let R=P-r;if(T)return i.setOpenProgress(1),e.endReach(),r=null,!0;let A=Mr(R,0,.7)*(1-Mr(R,2.7,3.4));t.lerpVectors(s,o,A),n.zoom=Ge.lerp(g,1,A),n.yaw=lm(f+lm(x-f)*A),n.pitch=Ge.lerp(d,m,A);let O=Mr(R,.96,2.21);return i.setOpenProgress(O),i.getLidGrip(u.position),i.object.getWorldQuaternion(l),h.setFromEuler(p.set(-.1-.28*O,0,-.1)),u.quaternion.copy(l).multiply(h),u.blend=Mr(R,0,.8)*(1-Mr(R,2.38,3.02)),u.grip=Mr(R,.7,.92)*(1-Mr(R,2.21,2.38)),u.reveal=Mr(R,0,.18)*(1-Mr(R,2.64,3.12)),R<3.4?!1:(t.copy(s),n.yaw=f,n.pitch=d,n.zoom=g,e.endReach(),r=null,!0)}function _(){r!==null&&(t.copy(s),n.yaw=f,n.pitch=d,n.zoom=g,e.endReach(),r=null)}return{start:E,update:y,cancel:_,get active(){return r!==null},get handPose(){return r===null?null:u}}}var um=i=>Ge.euclideanModulo(i+Math.PI,Math.PI*2)-Math.PI;function dm({position:i,state:e,getView:t}){let n=null,r=null,s=new S,o=new S,a=new S,c=()=>({position:i.clone(),yaw:e.yaw,pitch:e.pitch,zoom:e.zoom});function l(g,x,m){r={from:c(),to:g,time:x,returning:m}}function h(g){n||(n=c()),t(s,o),a.subVectors(o,s).normalize(),l({position:s.clone(),yaw:Math.atan2(-a.x,-a.z),pitch:Math.asin(a.y),zoom:.9},g,!1)}function p(g){n&&l(n,g,!0)}function f(){n=null,r=null}function d(g,x=!1){if(!r)return;let m=x?1:Ge.smootherstep(g-r.time,0,.85),{from:u,to:E,returning:y}=r;i.lerpVectors(u.position,E.position,m),e.yaw=um(u.yaw+um(E.yaw-u.yaw)*m),e.pitch=Ge.lerp(u.pitch,E.pitch,m),e.zoom=Ge.lerp(u.zoom,E.zoom,m),m===1&&(r=null,y&&(n=null))}return{start:h,restore:p,cancel:f,update:d,get active(){return n!==null}}}function fm({saw:i,camera:e,restraint:t,hasKey:n}){let r=i.position.clone(),s=i.quaternion.clone(),o=new S,a=new ft,c=new S,l=new S,h=new S,p=new ft,f=new ft,d=new ft,g=new ft().setFromEuler(new oi(Math.PI/2,0,-.16,"ZYX")),x=new S,m=null,u=!1,E=0;function y(T){return n()||!t.locked||m!==null?!1:(i.getWorldPosition(o),i.getWorldQuaternion(a),t.requestReach(T),m=T,!0)}function _(T,R=!1){if(m===null||u)return!1;let A=T-m;if(R)E=Ge.smootherstep(A,.55,1.1);else{let O=Ge.smootherstep(A,0,1.25),v=A<1.4?0:Math.sin((A-1.4)*Math.PI*6)*.085*Ge.smoothstep(A,1.4,1.7);t.getSawContact(c),f.copy(e.quaternion).multiply(g),h.set(-.06,0,.07).applyQuaternion(f),l.copy(c).sub(h),x.set(1,0,0).applyQuaternion(e.quaternion),l.addScaledVector(x,v),i.position.lerpVectors(o,l,O),i.parent.worldToLocal(i.position),p.slerpQuaternions(a,f,O),i.parent.getWorldQuaternion(d),i.quaternion.copy(d.invert()).multiply(p),E=Ge.smootherstep(A,2.75,3.55)}return A<(R?1.2:3.65)?!1:(u=!0,E=1,t.endReach(),!0)}function P(){m=null,u=!1,E=0,i.position.copy(r),i.quaternion.copy(s),t.endReach()}return{start:y,update:_,reset:P,armLift:(T,R=!1)=>m===null||R?0:Ge.smootherstep(T-m,.24,.95),get active(){return m!==null&&!u},get finished(){return u},get blackout(){return E}}}var Ci=(i,e,t)=>Ge.smootherstep(i,e,t);function pm({mug:i,camera:e,restraint:t}){let n=i.position.clone(),r=i.quaternion.clone(),s=new S,o=new ft,a=new S,c=new ft,l=new S,h=new S,p=new S,f=new S,d=new ft,g=new ft,x=new ft,m=new ft,u=new ft().setFromAxisAngle(new S(0,1,0),Math.PI),E=new ft().setFromAxisAngle(new S(0,0,1),-Math.PI/2),y=i.getObjectByName("Mug handle grip"),_=["Mug left ear tip","Mug right ear tip"].map(fe=>i.getObjectByName(fe)),P=new S,T=new S,R=new S,A=new S,O=new S,v={position:new S,quaternion:new ft,blend:0,grip:0,reveal:0,gripKind:"handle"},w=null,V=!1,G=0,z=0,H=0;function Q(fe){if(t.locked||w!==null||V||!t.requestReach(fe))return!1;i.updateWorldMatrix(!0,!1),i.getWorldQuaternion(o),e.updateWorldMatrix(!0,!1),e.getWorldPosition(a),e.getWorldQuaternion(c),f.set(0,-.22,-.12).applyQuaternion(c),P.set(0,0,0),A.set(0,0,0),_.forEach((ee,F)=>{ee.getWorldPosition(T),i.worldToLocal(T),P.add(T),A.addScaledVector(T,F?1:-1)}),P.multiplyScalar(.5),i.getWorldScale(O),s.copy(P),i.localToWorld(s),m.setFromAxisAngle(new S(1,0,0),.82),g.copy(m).multiply(u),A.multiply(O).applyQuaternion(g);let N=e.projectionMatrix.elements,j=Math.max(e.near*2,Math.abs(A.x)*.5*N[0]/.4);function ne(ee,F){return F.set(0,.08*ee/N[5],-ee).applyQuaternion(c).add(a)}return ne(j+.3,l),ne(j,h),w=fe,G=z=H=0,v.blend=v.grip=v.reveal=0,!0}function le(fe,N=!1){if(w===null||V)return!1;let j=fe-w;if(N){if(z=Ci(j,.15,.2),H=.12*Ci(j,.2,.65),G=Ci(j,.65,1.15),j<1.25)return!1}else{let ne=Ci(j,.82,2.12),ee=Ci(j,2.28,3.7);if(m.setFromAxisAngle(new S(1,0,0),.82*ee),g.copy(c).multiply(m).multiply(u),d.slerpQuaternions(o,g,ne),p.lerpVectors(l,h,ee).lerp(s,1-ne),p.y+=Math.sin(Math.PI*ne)*.08,R.copy(P).multiply(O).applyQuaternion(d),p.sub(R),p.addScaledVector(f,Ci(j,3.82,4.2)),i.position.copy(p),i.parent.worldToLocal(i.position),i.parent.getWorldQuaternion(x),i.quaternion.copy(x.invert()).multiply(d),i.updateWorldMatrix(!0,!1),y.getWorldPosition(v.position),v.quaternion.copy(d).multiply(u).multiply(E),v.blend=Ci(j,0,.72),v.grip=Ci(j,.48,.8),v.reveal=Ci(j,0,.22),z=Ci(j,3.7,3.76),H=Ci(j,3.76,5.2),G=Ci(j,4.85,5.5),j<5.6)return!1}return V=!0,G=1,t.endReach(),!0}function ie(){w=null,V=!1,G=z=H=0,i.position.copy(n),i.quaternion.copy(r),i.updateWorldMatrix(!0,!1),v.blend=v.grip=v.reveal=0,t.endReach()}return{start:Q,update:le,reset:ie,get active(){return w!==null&&!V},get finished(){return V},get blackout(){return G},get eyeImpact(){return z},get eyeGrowth(){return H},get handPose(){return w!==null&&!V?v:null}}}var gt=document.querySelector("#scene"),ZM=gt.getAttribute("aria-label"),ei=matchMedia("(prefers-reduced-motion: reduce)").matches,To={position:[1.85221,.821615,3.1149],lookAt:[1.293346,.717709,2.292176],fov:62},Wr=new S(...To.position),Cd=new S(...To.lookAt).sub(Wr).normalize(),Gr={yaw:Math.atan2(-Cd.x,-Cd.z),pitch:Math.asin(Cd.y)},qe={yaw:Gr.yaw,pitch:Gr.pitch,zoom:1,jaw:0,space:!1,time:0,talkUntil:0},Cn=new Bc({canvas:gt,antialias:!Ut.mobile,alpha:!1,powerPreference:"high-performance"});Cn.setPixelRatio(Ut.pixelRatio);Cn.localClippingEnabled=!0;Cn.shadowMap.enabled=!0;Cn.shadowMap.autoUpdate=!1;Cn.shadowMap.type=id;Cn.outputColorSpace=xt;Cn.toneMapping=rd;Cn.toneMappingExposure=.76;var Mi=new Vc;Mi.background=new pt(1449240);Mi.fog=new kc(2305314,11,26);var Aa=v0(Cn,Mi),jt=new On(To.fov,1,.06,35),_n=Wr.clone(),Hn=cm(To.fov),mm=new S,gm=new S,Pd=new S,$M=new jc(9545120,2370600,.62);Mi.add($M);var Pm=17.5,Ki=new lo(12898992,Pm,12,1.25,.72,2);Ki.position.set(.22,2.83,-.55);Ki.target.position.set(0,0,-.1);Ki.castShadow=!0;Ki.shadow.mapSize.set(Ut.shadowSize,Ut.shadowSize);Ki.shadow.camera.near=.1;Ki.shadow.camera.far=11;Ki.shadow.normalBias=.0025;Ki.shadow.bias=-5e-5;Mi.add(Ki,Ki.target);var Li=new el(10269877,.85);Li.position.set(6.2,4.1,-1.6);Li.target.position.set(-1,.35,-.3);Li.castShadow=!Ut.mobile;Li.shadow.mapSize.set(1024,1024);Li.shadow.camera.left=-6;Li.shadow.camera.right=6;Li.shadow.camera.top=5;Li.shadow.camera.bottom=-5;Li.shadow.normalBias=.003;Li.shadow.bias=-6e-5;Mi.add(Li,Li.target);var Im=new zn(9348772,2.2,10,2);Im.position.set(-1,2.6,4);Mi.add(Im);var Pi=Ge.lerp;function or(i,e=.9){return new Ve({color:i,roughness:e})}function Nn(i,e,t=Mi){let n=new dt(i,e);return n.castShadow=!0,n.receiveShadow=!0,t.add(n),n}function Xr(i,e,t,n,r=3){let s=Nn(new Jc(1,r),typeof e=="string"||typeof e=="number"?or(e):e,i);return s.position.set(...t),s.scale.set(...n),s}function Ro(i,e,t,n,r=!1){let s=new $t(i.map(o=>o.isVector3?o:new S(...o)),r);return Nn(new un(s,Math.max(24,i.length*2),e,8,r),t,n)}function KM(){let i=document.createElement("canvas");i.width=i.height=1024;let e=i.getContext("2d"),t=2718,n=()=>(t=t*1664525+1013904223>>>0,t/4294967296),r=([l,h])=>[(l+2)/4*i.width,(1-h/3)*i.height];function s(l,h,p=["rgba(211,12,57,.66)","rgba(227,17,62,.50)"]){let f=l.map(r);e.lineCap="round",e.lineJoin="round";for(let d=0;d<3;d++){e.strokeStyle=p[d===0?0:1];for(let g=1;g<f.length;g++){let x=Math.sin(g*1.37+d)*.08+Math.sin(g*.42)*.1;e.lineWidth=h*i.width/4*(1+x)*(d===0?1.13:.77);let m=(n()-.5)*1.5,u=(n()-.5)*1.5;e.beginPath(),e.moveTo(f[g-1][0]+m,f[g-1][1]+u),e.lineTo(f[g][0]+m,f[g][1]+u),e.stroke()}}}let o=[];for(let l=0;l<=140;l++){let h=l/140,p=Pi(-1.65,1.23,h),f=.16*Math.exp(-Math.pow((p+1.65)/.26,2))+.06*Math.pow(Math.max(0,(p-.42)/.81),2);o.push([p,1.45-f+.006*Math.sin(h*12)])}s(o,.075,["rgba(23,25,24,.98)","rgba(23,25,24,.94)"]);let a=[];for(let l=0;l<=80;l++){let h=l/80;a.push([Pi(-.68,.42,h),1.452+.009*Math.sin(h*15)+.012*Math.sin(h*7)])}s(a,.18);for(let l of[-1,1]){let h=[],p=l===-1?-1.13:1.15,f=1.68;for(let d=0;d<=240;d++){let g=d/240,x=g*Math.PI*6.1,m=.017+g*.272+.003*Math.sin(g*39+l);h.push([p+Math.cos(x)*m,f+Math.sin(x)*m*.92+.003*Math.sin(g*43)])}s(h,.047)}e.globalCompositeOperation="destination-out";for(let l=0;l<14e3;l++){e.fillStyle=`rgba(0,0,0,${.08+n()*.48})`;let h=n()*i.width,p=n()*i.height;e.fillRect(h,p,.35+n()*1.2,.4+n()*1.8)}for(let l=0;l<1600;l++){e.strokeStyle=`rgba(0,0,0,${.05+n()*.17})`,e.lineWidth=.4+n()*.7;let h=n()*i.width,p=n()*i.height;e.beginPath(),e.moveTo(h,p),e.lineTo(h+2+n()*6,p+n()*2-1),e.stroke()}let c=new Ot(i);return c.colorSpace=xt,c.anisotropy=Cn.capabilities.getMaxAnisotropy(),c}var JM=KM(),Cl=new Ve({color:13882826,roughness:.94});Cl.onBeforeCompile=i=>{i.uniforms.lipstickPaint={value:JM},i.vertexShader=`varying vec3 vStone;
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
 `)};var QM=or(2104866,.98),jM=or(7350072,.98),Lm=new yt({color:525833,side:Dt}),Zi=new we;Zi.name="Figsaw and tricycle";Mi.add(Zi);var En=new we;En.name="Figsaw\u2019s red tricycle";Zi.add(En);var Ao=new Ve({color:13185848,roughness:.44,metalness:.28}),Yr=new Ve({color:11449779,roughness:.34,metalness:.72}),wa=new Ve({color:5462617,roughness:.46,metalness:.65}),Dm=or(8856619,.86),Xd=or(1514523,.93),Um=or(2369317,.85);function ar(i,e,t,n,r){let s=new S(...e),o=new S(...t),a=o.clone().sub(s),c=Nn(new Bt(n,n,a.length(),16),r,i);return c.position.copy(s).add(o).multiplyScalar(.5),c.quaternion.setFromUnitVectors(new S(0,1,0),a.normalize()),c}var Hm=[];function qd(i,e,t,n,r){let s=new we;s.position.set(i,e,t),s.rotation.y=Math.PI/2,s.name=r===8?"Large front wheel":"Small rear wheel",En.add(s),s.userData.radius=n,Hm.push(s);let o=n>.7?.045:.033;Nn(new Qt(n-o,o,12,80),Xd,s),Nn(new Qt(n-o*2,.018,10,80),wa,s);for(let a of[-1,1]){let c=Nn(new Qt(n-o*1.65,.006,6,80),Yr,s);c.position.z=a*.024}for(let a=0;a<r;a++){let c=a/r*Math.PI*2+.16;ar(s,[0,0,0],[Math.cos(c)*(n-o*2),Math.sin(c)*(n-o*2),0],n>.7?.013:.011,wa)}ar(s,[0,0,-.14],[0,0,.14],.082,Ao);for(let a of[-1,1])Xr(s,Yr,[0,0,a*.15],[.061,.061,.027],2);return s}var Yd=1.39,Zd=1.52,_l=.89,So=-1.23;qd(0,Yd,Zd,.86,8);qd(-1.05,_l,So,.36,6);qd(1.05,_l,So,.36,6);ar(En,[-1.16,_l,So],[1.16,_l,So],.045,wa);var xm=new $t([[0,.89,-1.23],[0,1.24,-1.03],[0,1.65,-.55],[0,1.95,.05],[0,2.14,.73],[0,2.19,1.22]].map(i=>new S(...i))),Nm=[],Pl=[],va=64;for(let i=0;i<=va;i++){let e=xm.getPoint(i/va),t=xm.getTangent(i/va),n=new S(0,-t.z,t.y).normalize();for(let[r,s]of[[-.055,-1],[.055,-1],[.055,1],[-.055,1]])Nm.push(e.x+r,e.y+n.y*.074*s,e.z+n.z*.074*s);if(i<va)for(let r=0;r<4;r++){let s=i*4+r,o=i*4+(r+1)%4;Pl.push(s,o+4,o,s,s+4,o+4)}}Pl.push(0,1,2,0,2,3);var mo=va*4;Pl.push(mo,mo+2,mo+1,mo,mo+3,mo+2);var Il=new Pt;Il.setAttribute("position",new lt(Nm,3));Il.setIndex(Pl);Il.computeVertexNormals();Nn(Il,Ao,En);ar(En,[0,1.72,-.45],[0,2.02,-.45],.064,Ao);var eE=Nn(new wt(1.91,.07,.29),Ao,En);eE.position.set(0,.99,So);for(let i=-5;i<=5;i++)Nn(new wt(.012,.006,.24),Dm,En).position.set(i*.16,1.028,So);var Co=new Tt;Co.moveTo(-.2,-.58);Co.bezierCurveTo(-.3,-.18,-.72,.02,-.7,.34);Co.bezierCurveTo(-.66,.57,.66,.57,.7,.34);Co.bezierCurveTo(.72,.02,.3,-.18,.2,-.58);Co.quadraticCurveTo(0,-.7,-.2,-.58);var Fm=Nn(new sn(Co,{depth:.08,bevelEnabled:!0,bevelSize:.035,bevelThickness:.025,bevelSegments:3,steps:1,curveSegments:20}),Um,En);Fm.rotation.x=-Math.PI/2;Fm.position.set(0,2,-.45);for(let i of[-1,1])Ro([[i*.16,Yd,Zd],[i*.18,1.76,1.48],[i*.17,2.1,1.29],[i*.1,2.27,1.2]],.046,Ao,En);ar(En,[0,2.15,1.22],[0,2.43,1.17],.084,Ao);Ro([[0,2.36,1.18],[0,2.52,1.18],[0,2.63,1.34],[0,2.69,1.43]],.046,Yr,En);Ro([[-1.11,2.99,.86],[-1.1,2.98,1.12],[-1.04,2.88,1.35],[-.87,2.71,1.46],[-.6,2.69,1.45],[0,2.69,1.43],[.6,2.69,1.45],[.87,2.71,1.46],[1.04,2.88,1.35],[1.1,2.98,1.12],[1.11,2.99,.86]],.048,Yr,En);ar(En,[-.1,2.69,1.43],[.1,2.69,1.43],.064,Yr);Xr(En,wa,[0,2.69,1.491],[.027,.027,.015],2);for(let i of[-1,1])ar(En,[i*1.1,2.98,1.12],[i*1.11,2.99,.86],.061,Dm),Xr(En,wa,[i*1.11,2.99,.85],[.061,.061,.022],2);var qr=new we;qr.name="Rotating pedal crank";qr.position.set(0,Yd,Zd);En.add(qr);var Om=[];for(let i of[-1,1]){let e=i*.17,t=-i*.19;ar(qr,[i*.17,0,0],[i*.3,e,t],.025,Yr),ar(qr,[i*.3,e,t],[i*.53,e,t],.023,Yr);let n=new we;n.position.set(i*.44,e,t),qr.add(n),Om.push(n),Nn(new wt(.27,.075,.19),Xd,n);for(let r=-1;r<=1;r++)Nn(new wt(.24,.008,.012),Um,n).position.set(0,.041,r*.05)}function tE(i){for(let e of Hm)e.rotation.z=i/e.userData.radius;qr.rotation.x=i/.86;for(let e of Om)e.rotation.x=-qr.rotation.x}Xr(En,Yr,[-.47,2.76,1.45],[.085,.055,.085]);ar(En,[-.47,2.75,1.45],[-.57,2.77,1.45],.016,Xd);var zm=.72,Bm=2.08,kn=new we;kn.scale.setScalar(zm);kn.position.set(0,Bm,-.45);Zi.add(kn);var Ll=2.8,vi=64,km=160,Yn=32,An=8*Math.PI*2/km,Od=-.13,nE=.05+Yn/vi*Ll,ym=.12;function iE(i){return 2.05*Math.pow(Math.max(0,Math.sin(Math.PI*i)),.4)*(1.19-.45*i)}function ba(i,e){let t=iE(i),n=1+.018*Math.sin(e*5+i*9)+.012*Math.cos(e*9-i*7),r=Ge.clamp(i/(Yn/vi),0,1),s=i<Yn/vi?.2*Math.pow(Math.sin(Math.PI*r),.8)*Math.pow(Math.max(0,Math.cos(e)),3):0,o=new S(Math.sin(e)*t*n-.28*i,.05+i*Ll,Math.cos(e)*t*.68*n+s),a=Ge.smoothstep(Math.cos(e),.25,.65);for(let c of[-1.13,1.15]){let l=((o.x-c)/.36)**2+((o.y-1.68)/.33)**2;l<1&&(o.z+=.09*(1-l)**2*a)}return o}function zd(i,e){let t=-Math.PI/2,n=Math.PI/2;for(let r=0;r<22;r++){let s=(t+n)/2;ba(i,s).x<e?t=s:n=s}return(t+n)/2}var vm=[ba(Yn/vi,-An).x,ba(Yn/vi,An).x],Id=new Map;function rE(i){if(i===0||i>=Yn/vi)return[-An,An];let e=i.toFixed(7);if(Id.has(e))return Id.get(e);let t=i/(Yn/vi),n=Math.sin(Math.PI*t),r=[zd(i,vm[0]-.018*n),zd(i,vm[1]+.018*n)];return Id.set(e,r),r}function Dl(i,e){if(i<=Yn/vi){let[t,n]=rE(i);e<-An?e=Pi(-Math.PI,t,(e+Math.PI)/(Math.PI-An)):e<=An?e=Pi(t,n,(e+An)/(An*2)):e=Pi(n,Math.PI,(e-An)/(Math.PI-An))}return ba(i,e)}function Vm(i,e){let t=(e-.05)/Ll;return ba(t,zd(t,i)).z}function $d(i=!1,e=!1){let t=[],n=[],r=i?-An:-Math.PI,s=i?An:Math.PI,o=i?20:km,a=i?Yn:vi;for(let l=0;l<=a;l++)for(let h=0;h<=o;h++){let p=Dl(l/vi,Pi(r,s,h/o));e&&(p.z=Math.min(p.z-.24,.72)),t.push(p.x,p.y,p.z)}for(let l=0;l<a;l++)for(let h=0;h<o;h++){let p=Pi(r,s,(h+.5)/o);if(!i&&l<Yn&&Math.abs(p)<An-1e-4)continue;let f=l*(o+1)+h,d=f+1,g=f+o+2,x=f+o+1;n.push(f,d,x,d,g,x)}let c=new Pt;return c.setAttribute("position",new lt(t,3)),c.setIndex(n),c.computeVertexNormals(),c}var Gm=new yt({color:1513752,side:yn});Gm.onBeforeCompile=i=>{i.vertexShader=i.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
transformed += normal * 0.058;`)};function Wm(i,e){let t=new dt(i,Gm);return t.name="Black stone outline",e.add(t),t}var Xm=$d(),sE=Nn(Xm,Cl,kn);sE.name="Figsaw";Wm(Xm,kn);var oE=Nn($d(!0,!0),Lm,kn);oE.castShadow=!1;function qm(i,e=!1){let t=[],n=[];for(let o=0;o<=40;o++){let a=Dl(Yn/vi,Pi(-An,An,o/40)),c=a.y+(e?-.008:.008);if(t.push(a.x,c,a.z-.075,a.x,c,.7),o<40){let l=o*2;n.push(l,l+1,l+2,l+1,l+3,l+2)}}let r=new Pt;r.setAttribute("position",new lt(t,3)),r.setIndex(n),r.computeVertexNormals();let s=Nn(r,Lm,i);s.castShadow=!1}qm(kn);var Es=new we;kn.add(Es);function aE(){let i=$d(!0),e=Array.from(i.attributes.position.array),t=Array.from(i.index.array),n=i.attributes.position.count;for(let o=0;o<n;o++)e.push(e[o*3],e[o*3+1],e[o*3+2]-.14);let r=t.slice();for(let o=0;o<r.length;o+=3)t.push(r[o]+n,r[o+2]+n,r[o+1]+n);let s=[];for(let o=0;o<=20;o++)s.push(o);for(let o=1;o<=Yn;o++)s.push(o*21+20);for(let o=19;o>=0;o--)s.push(Yn*21+o);for(let o=Yn-1;o>0;o--)s.push(o*21);for(let o=0;o<s.length;o++){let a=s[o],c=s[(o+1)%s.length];t.push(a,a+n,c,c,a+n,c+n)}return i.setAttribute("position",new lt(e,3)),i.setIndex(t),i.deleteAttribute("normal"),i.computeVertexNormals(),i}var Ym=aE(),Zm=Cl.clone();Zm.onBeforeCompile=Cl.onBeforeCompile;Nn(Ym,Zm,Es);Wm(Ym,Es);qm(Es,!0);Xr(Es,jM,[Od,nE-.025,.83],[.25,.016,.055]);var $m=[];for(let i=0;i<=30;i++){let e=Dl(Yn/vi,Pi(-An,An,i/30));e.z+=.002,$m.push(e)}Ro($m,.008,QM,kn);for(let i of[-1,1]){let e=[];for(let t=4;t<=Yn;t++){let n=Dl(t/vi,i*An);n.z+=.009,e.push(n)}Ro(e,.033,new yt({color:1513752}),kn)}var Km=[],Kd=or(16061736,.36);Kd.emissive.set(12127514);Kd.emissiveIntensity=.12;var Ml={headYaw:0,gazeYaw:0,gazePitch:0},Ld=new S,go=new S,_m=new S,cE=new S(0,1,0),Mm=new ft;for(let i of[-1,1]){let e=i*.42-.09,t=1.84+(i===-1?.045:0),n=Vm(e,t)+.044,r=new we;r.position.set(e,t,n),kn.add(r),Km.push(r),Xr(r,or(1052693,.25),[0,0,0],[.156,.156,.075]),Xr(r,Kd,[0,0,.055],[.084,.084,.029]),Xr(r,or(657676,.32),[0,0,.074],[.039,.039,.016])}var wo=new we;wo.name="Red bow tie";wo.position.set(Od,.4,Vm(Od,.4)+.065);Es.add(wo);var Jm=new Xt({color:13046566,roughness:.76,sheen:.55,sheenColor:15747667,sheenRoughness:.82}),Zr=new Tt;Zr.moveTo(.055,.065);Zr.bezierCurveTo(.18,.085,.32,.185,.43,.19);Zr.quadraticCurveTo(.49,.19,.485,.12);Zr.bezierCurveTo(.47,.03,.5,-.075,.48,-.14);Zr.quadraticCurveTo(.47,-.195,.4,-.175);Zr.bezierCurveTo(.27,-.14,.15,-.07,.055,-.06);Zr.closePath();var lE=new sn(Zr,{depth:.055,bevelEnabled:!0,bevelSize:.018,bevelThickness:.018,bevelSegments:3,steps:1,curveSegments:18});for(let i of[-1,1]){let e=Nn(lE,Jm,wo);e.scale.x=i,e.rotation.y=-i*.1;let t=or(9965598,.9);for(let n of[-1,1])Ro([[i*.09,n*.026,.08],[i*.19,n*.055,.087],[i*.34,n*.11,.088]],.005,t,wo)}var Qm=Nn(new Kt(1,24,16),Jm,wo);Qm.position.set(0,0,.07);Qm.scale.set(.105,.12,.075);var Jd=.26,xo=-.53*Jd+.0036;Zi.scale.setScalar(Jd);var El=new $t([[2.45,xo,-2.4],[2.05,xo,-1.7],[1.05,xo,-1.28],[.35,xo,-1.1],[.24,xo,-.66],[.12,xo,.1]].map(i=>new S(...i)),!1,"centripetal");El.arcLengthDivisions=240;var jm=1,eg=8.5,hE=El.getLength(),ml=new S,Dd=new S,Yi=document.querySelector("#figsaw-dialogue"),tg=document.querySelector("#dialogue-announcement"),ng=document.querySelector("#game-countdown"),Ma=document.querySelector("#countdown-announcement"),Ea=null,Bd=300,Sl=["I want to play a game...","Those who don't appreciate design do not deserve it.","Complete the design challenges to escape... but every 5 minutes one of your Figpals will be dropped into the tank of acid.","Let the games begin..."],wl=-1,Qd=1/0,gl=new S,ys=new S,xl=new ma,Ud=new S,ig=0,yo=!1,kd=0,Em=!1,Vd=0,jd=null;function rg(i){let e=Sl[i];wl=i,Yi.classList.toggle("long-dialogue",e.length>80),Yi.querySelector(".dialogue-bubble span").textContent=e,tg.textContent=`Figsaw. ${e}`;let t=om(e,qe.time);jd=ei?null:t,Qd=i<Sl.length-1?t.startTime+t.duration+1:1/0,i===0&&(Ea=t.startTime+t.duration)}function ef(i){let e=i-ig-jm,t=ei?1:Ge.smoothstep(e,0,eg);El.getPointAt(t,ml),El.getTangentAt(t,Dd),Zi.position.copy(ml),Zi.rotation.y=Math.atan2(Dd.x,Dd.z);let n=Math.atan2(Wr.x-ml.x,Wr.z-ml.z),r=Ge.euclideanModulo(n-Zi.rotation.y+Math.PI,Math.PI*2)-Math.PI;tE(t*hE/Jd),t===1&&!yo&&(yo=!0,kd=i,Hn.start(qe.time,_n,qe),rg(0)),E0(yo?i-kd:-1,ei,Ml),kn.rotation.y=Ge.clamp(r*.58,-.7,.7)+Ml.headYaw}ef(0);Aa.mark("characterBuilt");var{group:Ca,laptop:$i,catMug:Pa,handsaw:Ia,acidLeaks:Fn,chargingKit:Bn,ketchupKey:Ii,countdown:vo,setDisplayEnvironment:uE,update:dE,figpalHoists:Er,toggleHoist:fE}=$0(Cn,Wr);Mi.add(Ca);Aa.mark("officeBuilt");var Zt=rm(jt,{canDetach:()=>Ii.hasKey});Mi.add(Zt.group);var Zn=hm({laptop:$i,restraint:Zt,cameraPosition:_n,state:qe}),qn=dm({position:_n,state:qe,getView:Bn.getDrawerView}),cn=pm({mug:Pa,camera:jt,restraint:Zt}),Mn=fm({saw:Ia,camera:jt,restraint:Zt,hasKey:()=>Ii.hasKey}),Ta=document.querySelector("#game-over"),sg=Ta.querySelector(".game-over-content"),og=document.querySelector("#restart-game"),_o=document.querySelector("#mug-eye-impact"),Vn=!1;og.addEventListener("click",()=>{Gd({skipIntro:!0}),gt.focus({preventScroll:!0})});var _i=document.querySelector("#restraint-status"),Sa=document.querySelector("#charging-hint"),bo=null,_s=null,vs="",Ul=0,cr=sm(()=>{if(!Ii.hasKey){Mo("The shackle is locked. Find its key first.");return}Zt.detach(qe.time)&&(_i.textContent="Instance detached. Your wrist is free. You can open the laptop, drink from the cat mug, or turn a tank drain valve.",gt.classList.remove("over-chain"),gt.setAttribute("aria-label",gt.getAttribute("aria-label").replace("Your wrist is chained to the rear pipes. Pour the glass ketchup bottle beside the cat mug, collect the key, then click or right-click the shackle and choose Detach instance to free your hand.","Your wrist is free. Click the laptop, cat mug, or a red tank drain valve to use it.")))},{canDetach:()=>Ii.hasKey,onBlocked:()=>Mo("The shackle is locked. Find its key first.")}),bl=J0(Er),Ms=Q0(Er.speechAnchors,gt,Er.canSpeak),ag=K0(Er,Ms),cg=y0(Cn);uE(cg.texture);Zt.setEnvironment(cg.texture);Fn.bindTargets([Ca,Zi]);x0(Ca,{exclude:[$i.object,Pa,Ia,Er.group,vo.group,Bn.group,Ii.group]});Aa.mark("scenePrepared");function pE(i){if(!yo||bl.active){Yi.hidden=!0;return}kn.localToWorld(gl.set(-.28,Ll+.24,0)),ys.copy(gl).project(jt);let e=Math.min(.7,.4/(jt.position.distanceTo(gl)*Math.tan(Ge.degToRad(jt.fov/2))*jt.aspect));if(ys.z<-1||ys.z>1||Math.abs(ys.x)>1+e||Math.abs(ys.y)>1){Yi.hidden=!0;return}if(i>=Vd){Vd=i+.12,Ud.copy(gl).sub(jt.position);let s=Ud.length();xl.set(jt.position,Ud.normalize()),xl.near=.06,xl.far=Math.max(.06,s-.035),Em=xl.intersectObject(Ca,!0).length>0}if(Em){Yi.hidden=!0;return}Yi.hidden=!1;let t=gt.getBoundingClientRect(),n=t.left+(ys.x*.5+.5)*t.width,r=t.top+(-ys.y*.5+.5)*t.height;Yi.style.transform=`translate3d(${n}px,${r-8}px,0) translate(-50%,-100%)`}var Sm=new ma,wm=new Fe;function tf(i){let e=gt.getBoundingClientRect();wm.set((i.clientX-e.left)/e.width*2-1,-(i.clientY-e.top)/e.height*2+1),Sm.setFromCamera(wm,jt);let t=Sm.intersectObjects([Ca,Zi,Zt.group],!0).find(n=>{for(let r=n.object;r;r=r.parent)if(!r.visible)return!1;return!0});for(let n=t?.object;n;n=n.parent)if(n===Zt.target||n===$i.object||n===Pa||n===Ia||n===kn||n.userData.chargingAction||n.userData.keyAction||Number.isInteger(n.userData.valveIndex)||Number.isInteger(n.userData.hoistIndex))return n;return null}function Mo(i){vs=i,Ul=qe.time+4.5,_i.textContent=i}function mE(i){Zn.active||cn.active||Mn.active||Vn||Fn.dying||(Hn.cancel(),hi=!1,i==="pour"?Ii.pour(qe.time)?Mo("You tip the bottle. Something metal is sliding through the ketchup\u2026"):Mo(Ii.hint("pour")):i==="collect"&&Ii.collect()&&(Mo("Shackle key collected. Click your shackle and choose Detach instance."),Zt.requestReach(qe.time)))}function nf(i){if(!i||Zn.active||cn.active||Mn.active||Vn||Fn.dying)return;let e=Bn.drawerOpen,t=Bn.phase;_s=null,gt.classList.remove("over-charging"),Zt.locked&&Zt.requestReach(qe.time),i==="charger"&&Bn.phase==="drawer"&&!Bn.drawerReady&&!Zt.locked?vs="Let the drawer finish opening.":vs=Bn.use(i,qe.time,Zt.locked),Ul=qe.time+3.8,_i.textContent=vs,Hn.cancel(),hi=!1,Zt.locked||(i==="drawer"&&!e&&Bn.drawerOpen?(Ui(),qn.start(qe.time)):(i==="drawer"&&e&&!Bn.drawerOpen||t==="drawer"&&Bn.phase==="carrying")&&(Ui(),qn.restore(qe.time)))}function gE(){let i=qe.time<Ul?vs:bo?Ii.hint(bo):_s?Bn.hint(_s):Ii.hasKey&&Zt.locked?"Shackle key collected \xB7 Click the shackle to unlock":Bn.hint(null);Sa.textContent!==i&&(Sa.textContent=i),Sa.hidden=!i||Vn||cn.active||Mn.active||Zn.active}function lg(){if(!(Zn.active||cn.active||Mn.active||Vn||Fn.dying)){if(Zt.locked){Zt.requestReach(qe.time),_i.textContent="The chain pulls tight. You can't reach the laptop.";return}if(Bn.phase==="powered"){nf("laptop");return}if($i.isOpen){hg();return}qn.cancel(),Zn.start(qe.time)&&(Ui(),Hn.cancel(),hi=!1,_i.textContent="You reach for the front edge of the laptop.")}}function hg(i=!1){!i&&!$i.open()||(_i.textContent="You lift the lid and let go. The laptop is open.",gt.classList.remove("over-laptop"),gt.setAttribute("aria-label",gt.getAttribute("aria-label").replace("a closed MacBook Pro","an open MacBook Pro").replace(" Click the laptop or press Enter to open it.","")))}function ug(){if(!(Zn.active||cn.active||Mn.active||Vn||Fn.dying)){if(Zt.locked){Zt.requestReach(qe.time),_i.textContent="The chain pulls tight. Detach the shackle before picking up the mug.";return}cn.start(qe.time)&&(qn.cancel(),Ui(),Hn.cancel(),hi=!1,cr.hide(),gt.classList.remove("over-mug"),_i.textContent="You pick up the cat mug by its handle and raise it for a drink.")}}function xE(){if(!(Zn.active||cn.active||Mn.active||Vn||Fn.dying)){if(Ii.hasKey){Mo("You already have the key. There is no need to use the saw.");return}Mn.start(qe.time)&&(qn.cancel(),Hn.cancel(),hi=!1,Ui(),cr.hide(),vs="",Sa.hidden=!0,gt.classList.remove("over-saw"),_i.textContent="You pick up the saw and start sawing at your chained wrist.")}}function dg(i){if(!(Zn.active||cn.active||Mn.active||Vn||Fn.dying)){if(Zt.locked){Zt.requestReach(qe.time),_i.textContent="The chain pulls tight. Detach the shackle before turning a tank valve.";return}Fn.open(i,qe.time,Zt.locked)&&(qn.cancel(),Hn.cancel(),hi=!1,cr.hide(),_i.textContent=`Tank ${i+1}'s valve spins open. Bubbling acid spills onto the floor and starts eating through everything it touches.`)}}function yE(){let i=0,e=1/0,t=new S;return Er.valves.forEach((n,r)=>{n.object.getWorldPosition(t);let s=t.distanceToSquared(_n);s<e&&(e=s,i=r)}),i}function Hd(i){Vn||(Vn=!0,qn.cancel(),Ui(),cr.hide(),Yi.hidden=!0,Ms.hide(),document.body.classList.add("game-over"),gt.inert=!0,sg.hidden=!1,og.focus({preventScroll:!0}),_i.textContent=i)}function fg(i){if(cn.active||Mn.active||Vn||Fn.dying)return;let e=fE(i);if(!e)return;let t=Er.isLowered(i);t?Ms.show(i,qe.time):Ms.hide(i),document.querySelector("#hoist-status").textContent=t&&Er.canSpeak(i)?`${e} ${ya[i]}`:e}var hi=!1,Di=null,vl=null,Tl=0,vE=new Set(["KeyW","KeyA","KeyS","KeyD","KeyE","KeyQ"]),sr=new Set,Eo=i=>Ge.euclideanModulo(i+Math.PI,Math.PI*2)-Math.PI;function Gd({skipIntro:i=!1}={}){Al(),Ii.reset(),bo=null,Bn.reset(),_s=null,vs="",Ul=0,Sa.hidden=!0,Vn=!1,Fn.reset(),cn.reset(),Mn.reset(),_o.hidden=!0,_o.style.opacity="0",_o.style.removeProperty("--eye-scale"),Ta.hidden=!0,Ta.style.opacity="0",sg.hidden=!0,document.body.classList.remove("game-over","mug-impact"),gt.inert=!1,Zn.cancel(),Hn.cancel(),qn.cancel(),Zt.reset(),$i.close(),cr.hide(),_i.textContent="",gt.setAttribute("aria-label",ZM),bl.reset(),Ms.hide(),ag.reset(qe.time),Ui(),hi=!i,ig=qe.time-(i?jm+eg:0),yo=i,kd=qe.time,Yi.hidden=!0,Yi.classList.remove("long-dialogue"),tg.textContent="",jd=null,wl=i?Sl.length-1:-1,Qd=1/0,qe.jaw=0,qe.talkUntil=0,Vd=0,Ea=null,vo.reset(),Bd=300,ng.textContent="05:00",Ma.textContent="",i&&(Yi.querySelector(".dialogue-bubble span").textContent=Sl[wl],Hn.start(qe.time,_n,qe),Hn.update(qe.time,_n,qe,!0),ef(qe.time),vo.start(),Ma.textContent="The five-minute countdown has started.")}function Ui(){sr.clear(),qe.space=!1,Di=null}document.addEventListener("keydown",i=>{if(Vn){i.code==="KeyR"&&!i.repeat&&(i.preventDefault(),Gd(),gt.focus({preventScroll:!0}));return}if((Zn.active||cn.active||Mn.active||Fn.dying)&&i.code!=="KeyR"){i.preventDefault();return}if(!cr.active&&!(i.target.closest('input,textarea,select,[contenteditable="true"]')||i.metaKey||i.ctrlKey||i.altKey)){if(vE.has(i.code)){i.preventDefault(),Hn.cancel(),qn.cancel(),sr.add(i.code),hi=!1;return}if(i.code==="Escape"&&qn.active){i.preventDefault(),qn.restore(qe.time);return}i.target.closest("button")&&(i.code==="Space"||i.code==="Enter")||(i.code==="Enter"&&i.target===gt&&(i.preventDefault(),lg()),i.code==="KeyF"&&i.target===gt&&!i.repeat&&(i.preventDefault(),nf(Bn.nextAction)),i.code==="KeyM"&&i.target===gt&&!i.repeat&&(i.preventDefault(),ug()),i.code==="KeyV"&&i.target===gt&&!i.repeat&&(i.preventDefault(),dg(yE())),/^Digit[1-3]$/.test(i.code)&&i.target===gt&&!i.repeat&&(i.preventDefault(),fg(Number(i.code.slice(-1))-1)),i.code==="Space"&&(i.preventDefault(),qe.space=!0),i.code==="KeyR"&&!i.repeat&&Gd(),i.code.startsWith("Arrow")&&(i.preventDefault(),Hn.cancel(),qn.cancel(),hi=!1,i.code==="ArrowLeft"&&(qe.yaw=Eo(qe.yaw+.08)),i.code==="ArrowRight"&&(qe.yaw=Eo(qe.yaw-.08)),i.code==="ArrowUp"&&(qe.pitch=Ge.clamp(qe.pitch+.05,-1.4,1.4)),i.code==="ArrowDown"&&(qe.pitch=Ge.clamp(qe.pitch-.05,-1.4,1.4))))}});document.addEventListener("keyup",i=>{sr.delete(i.code),i.code==="Space"&&(qe.space=!1)});window.addEventListener("blur",Ui);document.addEventListener("visibilitychange",()=>{document.hidden&&Ui()});gt.addEventListener("contextmenu",i=>{i.preventDefault(),Ui(),!(cn.active||Mn.active||Vn||Fn.dying)&&(Zt.locked&&tf(i)===Zt.target?cr.show(i.clientX,i.clientY):cr.hide())});gt.addEventListener("pointerdown",i=>{Zn.active||cn.active||Mn.active||Vn||Fn.dying||i.button===0&&Di===null&&(gt.focus({preventScroll:!0}),Di=i.pointerId,hi=!1,Tl=0,vl={x:i.clientX,y:i.clientY},gt.setPointerCapture(i.pointerId))});gt.addEventListener("pointermove",i=>{if(Zn.active||cn.active||Mn.active||Vn||Fn.dying)return;if(Di===null){let n=tf(i);bo=n?.userData.keyAction||null,gt.classList.toggle("over-key",!!bo),_s=n?.userData.chargingAction||(n===$i.object&&Bn.phase==="powered"?"laptop":null),gt.classList.toggle("over-charging",!!_s),gt.classList.toggle("over-laptop",n===$i.object&&!$i.isOpen),gt.classList.toggle("over-hoist",Number.isInteger(n?.userData.hoistIndex)),gt.classList.toggle("over-mug",n===Pa),gt.classList.toggle("over-saw",n===Ia),gt.classList.toggle("over-valve",Number.isInteger(n?.userData.valveIndex)),gt.classList.toggle("over-chain",n===Zt.target&&Zt.locked);return}if(i.pointerId!==Di)return;let e=i.clientX-vl.x,t=i.clientY-vl.y;Tl+=Math.abs(e)+Math.abs(t),Tl>=6&&(Hn.cancel(),qn.cancel()),qe.yaw=Eo(qe.yaw+e*.004),qe.pitch=Ge.clamp(qe.pitch+t*.003,-1.4,1.4),vl={x:i.clientX,y:i.clientY}});gt.addEventListener("pointerup",i=>{if(i.pointerId===Di&&(Di=null,Tl<6)){let e=tf(i);e?.userData.keyAction?mE(e.userData.keyAction):e===Zt.target&&Zt.locked?cr.show(i.clientX,i.clientY):e?.userData.chargingAction?nf(e.userData.chargingAction):e===$i.object?lg():e===Pa?ug():e===Ia?xE():Number.isInteger(e?.userData.valveIndex)?dg(e.userData.valveIndex):e===kn?qe.talkUntil=qe.time+1.8:Number.isInteger(e?.userData.hoistIndex)&&fg(e.userData.hoistIndex)}});gt.addEventListener("pointerleave",()=>{bo=null,_s=null,gt.classList.remove("over-key","over-laptop","over-hoist","over-chain","over-mug","over-saw","over-valve","over-charging")});gt.addEventListener("pointercancel",i=>{i.pointerId===Di&&(Di=null)});gt.addEventListener("lostpointercapture",i=>{i.pointerId===Di&&(Di=null)});gt.addEventListener("wheel",i=>{i.preventDefault(),!(Zn.active||cn.active||Mn.active||Vn||Fn.dying)&&(Hn.cancel(),qn.cancel(),hi=!1,qe.zoom=Ge.clamp(qe.zoom+i.deltaY*5e-4,.78,1))},{passive:!1});var Hl=document.querySelector("#copy-view"),bm=Hl.querySelector("span"),Tm=document.querySelector("#copy-status"),Wd=document.querySelector("#copy-fallback"),Nd=document.querySelector("#view-text"),Rm;function _E(){let i=n=>n.toArray().map(r=>Number(r.toFixed(6))),e=jt.getWorldDirection(new S),t={position:i(jt.position),lookAt:i(jt.position.clone().add(e)),fov:Number(jt.fov.toFixed(4))};return`Set this as the default camera view for Figsaw:
${JSON.stringify(t,null,2)}`}function ME(i){let e=document.createElement("textarea");e.value=i,e.readOnly=!0,e.style.cssText="position:fixed;left:-9999px;top:0;font-size:16px",document.body.append(e),e.focus(),e.select(),e.setSelectionRange(0,i.length);let t=!1;try{t=document.execCommand("copy")}catch{}return e.remove(),Hl.focus({preventScroll:!0}),t}Hl.addEventListener("click",async()=>{let i=_E();Nd.value=i,clearTimeout(Rm);let e=!1;try{navigator.clipboard?.writeText&&(await navigator.clipboard.writeText(i),e=!0)}catch{}e||(e=ME(i)),e?(Wd.hidden=!0,bm.textContent="Copied",Tm.textContent="View copied. Paste it into the chat to set the default view."):(Wd.hidden=!1,Nd.focus(),Nd.select(),Tm.textContent="Select and copy the view below, then paste it into the chat."),Rm=setTimeout(()=>{bm.textContent="Copy view"},2200)});document.querySelector("#close-copy").addEventListener("click",()=>{Wd.hidden=!0,Hl.focus()});function rf(){let{width:i,height:e}=gt.getBoundingClientRect();!i||!e||(Cn.setSize(i,e,!1),jt.aspect=i/e,jt.fov=To.fov*qe.zoom,jt.updateProjectionMatrix())}var EE=new ResizeObserver(rf);EE.observe(gt);rf();var Rl=new tl,pg=!1,Ra=0,_a=0,Am=-1/0,Cm=0,Fd=0,yl=0;function Al(){pg&&!Ra&&!document.hidden&&(Ra=requestAnimationFrame(mg))}document.addEventListener("visibilitychange",()=>{document.hidden?(cancelAnimationFrame(Ra),Ra=0,Ui()):(_a=0,Rl.getDelta(),Al())});function mg(){if(Ra=0,document.hidden)return;if(Vn){Rl.getDelta();return}let i=performance.now(),e=_a?i-_a:0;if(_a&&e<1e3/Ut.maxFps-1){Al();return}_a=i;let t=Math.min(Rl.getDelta(),.04),n=qe.time+=t,r=1-Math.exp(-t*12);hi&&(qe.yaw=Eo(qe.yaw+Eo(Gr.yaw-qe.yaw)*r*.5),qe.pitch=Pi(qe.pitch,Gr.pitch,r*.5),qe.zoom=Pi(qe.zoom,1,r*.5),_n.lerp(Wr,r*.5),Math.abs(Eo(qe.yaw-Gr.yaw))+Math.abs(qe.pitch-Gr.pitch)+Math.abs(qe.zoom-1)+_n.distanceTo(Wr)<.005&&(qe.yaw=Gr.yaw,qe.pitch=Gr.pitch,qe.zoom=1,_n.copy(Wr),hi=!1)),ef(n),yo&&n>=Qd&&rg(wl+1),Hn.active&&(hi=!1),(sr.size||Di!==null)&&Hn.cancel(),(Zn.active||cn.active||Mn.active||qn.active)&&Hn.cancel(),Hn.update(n,_n,qe,ei),qn.update(n,ei),Zn.update(n,ei)&&hg(!0);let s=qe.yaw,o=Number(sr.has("KeyW"))-Number(sr.has("KeyS")),a=Number(sr.has("KeyD"))-Number(sr.has("KeyA")),c=Number(sr.has("KeyE"))-Number(sr.has("KeyQ"));Pd.set(-Math.sin(s)*o+Math.cos(s)*a,c,-Math.cos(s)*o-Math.sin(s)*a),Pd.lengthSq()>0&&(_n.addScaledVector(Pd.normalize(),t*1.05),_n.x=Ge.clamp(_n.x,-3.72,3.72),_n.y=Ge.clamp(_n.y,.08,3),_n.z=Ge.clamp(_n.z,-3.78,4.25)),jt.position.copy(_n),gm.set(-Math.sin(s)*Math.cos(qe.pitch),Math.sin(qe.pitch),-Math.cos(s)*Math.cos(qe.pitch)),mm.copy(_n).add(gm),jt.lookAt(mm);let l=To.fov*qe.zoom;Math.abs(jt.fov-l)>.001&&(jt.fov=l,jt.updateProjectionMatrix()),Ea!==null&&n>=Ea&&(vo.start(),Ea=null,Ma.textContent="The five-minute countdown has started.");let h=vo.update();h!==Bd&&(ng.textContent=dl(h),Bd=h,h===0&&(Ma.textContent="The countdown has reached zero.")),bl.update(vo.status,n)&&(Ms.showAll(n),Ma.textContent=`Time is up. All three Figpals are lowering into the green liquid. ${ya.filter((_,P)=>Er.canSpeak(P)).join(" ")}`);let p=am(jd,n),f=n<qe.talkUntil?.16+.7*Math.sin(n*10)**2:0,d=qe.space?1:Math.max(p,f);qe.jaw=Pi(qe.jaw,d,r),Es.position.y=-qe.jaw*ym,kn.position.y=Bm+qe.jaw*ym*zm;let g=Fn.update(n,t,_n,jt,ei);Fn.dying&&Ui();let x=cn.update(n,ei);Zt.update(n,ei,cr.active||cn.active||Mn.active,cn.handPose||Zn.handPose,Mn.armLift(n,ei));let m=Mn.update(n,ei),u=Math.max(cn.blackout,Mn.blackout,Fn.blackout(n));_o.hidden=cn.eyeImpact<=0||u>=1,cn.eyeImpact>0&&(_o.style.opacity=String(cn.eyeImpact),_o.style.setProperty("--eye-scale",String(.035+.965*cn.eyeGrowth)),document.body.classList.add("mug-impact")),u>0&&(Ta.hidden=!1,Ta.style.opacity=String(u),document.body.classList.add("mug-impact")),m?Hd("You used the saw before finding the key. Your hand is lost. Game over."):g?Hd("The corrosive green liquid reaches you. Game over."):x&&Hd("The mug's pointed ears hit your eyes. Everything goes dark. Game over."),$i.update(t,ei),Bn.update(n,ei),gE(),Ki.intensity=Pm*dE(n,ei,jt.position),Zi.updateMatrixWorld(!0),kn.localToWorld(Ld.set(-.09,1.86,1)),go.copy(jt.position).sub(Ld);let E=Math.max(1,go.length());go.normalize().applyAxisAngle(cE,Ml.gazeYaw),go.y+=Ml.gazePitch,go.normalize(),_m.copy(Ld).addScaledVector(go,E);for(let _ of Km)Mm.copy(_.quaternion),_.lookAt(_m),ei||_.quaternion.copy(Mm.slerp(_.quaternion,1-Math.exp(-t*16)));n-Am>=1/Ut.shadowHz&&(Cn.shadowMap.needsUpdate=!0,Am=n),Cn.render(Mi,jt),pE(n),ag.update(n,bl.active),Ms.update(jt,n),Aa.frame(i);let y=performance.now()-i;yl++,(y>Ut.targetFrameMs||e>Ut.targetFrameMs*1.4)&&Fd++,n-Cm>4&&(yl>30&&Fd/yl>.65&&Cn.getPixelRatio()>Ut.minPixelRatio&&(Cn.setPixelRatio(Math.max(Ut.minPixelRatio,Cn.getPixelRatio()-.25)),rf()),Cm=n,Fd=0,yl=0),Al()}Cn.compileAsync(Mi,jt).then(()=>{Aa.mark("shadersReady"),pg=!0,Rl.getDelta(),mg(),document.querySelector("#loading-status")?.remove()}).catch(i=>{console.error(i);let e=document.querySelector("#loading-status");e&&(e.textContent="The room could not load. Please reload to try again.")});gt.addEventListener("webglcontextlost",i=>i.preventDefault());gt.addEventListener("webglcontextrestored",()=>location.reload());
