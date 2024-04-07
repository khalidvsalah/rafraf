/* @khalidvsalah | Stabraq | v1.0.0 | MIT License | https://github.com/khalidvsalah/stabraq | https://www.khalidsalah.com */var M=t=>3*t,K=(t,e)=>1-M(e)+M(t),Q=(t,e)=>M(e)-6*t,T=(t,e,s)=>((K(e,s)*t+Q(e,s))*t+M(e))*t;function U(t,e,s){return M(K(e,s))*Math.pow(t,2)+2*Q(e,s)*t+M(e)}var Tt=(t,e,s,i,r)=>{let o=0,l=0,n=0;do l=e+(s-e)/2,o=T(l,i,r)-t,o>0?s=l:e=l;while(Math.abs(o)>1e-7&&++n<10);return l},_t=(t,e,s,i)=>{for(let r=0;r<4;++r){let o=U(e,s,i);if(o===0)return e;e-=(T(e,s,i)-t)/o}return e},Yt=t=>{let e=t[0],s=t[1],i=t[2],r=t[3];if(e===s&&i===r)return L.l;let o=new Float32Array(11);for(let n=0;n<11;++n)o[n]=T(n*.1,e,i);function l(n){let h=0,p=1;for(;p!==10&&o[p]<=n;++p)h+=.1;--p;let m=(n-o[p])/(o[p+1]-o[p]),y=h+m*.1,f=U(y,e,i);return f>=.001?_t(n,y,e,i):f===0?y:Tt(n,h,h+.1,e,i)}return n=>n===0||n===1?n:T(l(n),s,r)},L={custom:Yt,l:t=>t,i1:t=>1-Math.cos(t*Math.PI/2),o1:t=>Math.sin(t*Math.PI/2),io1:t=>-(Math.cos(Math.PI*t)-1)/2,i2:t=>Math.pow(t,2),o2:t=>1-(1-t)*(1-t),io2:t=>t<.5?2*t*t:1-Math.pow(-2*t+2,2)/2,i3:t=>Math.pow(t,3),o3:t=>1-Math.pow(1-t,3),io3:t=>t<.5?4*t*t*t:1-Math.pow(-2*t+2,3)/2,i4:t=>Math.pow(t,4),o4:t=>1-Math.pow(1-t,4),io4:t=>t<.5?8*t*t*t*t:1-Math.pow(-2*t+2,4)/2,i5:t=>Math.pow(t,5),o5:t=>1-Math.pow(1-t,5),io5:t=>t<.5?16*Math.pow(t,5):1-Math.pow(-2*t+2,5)/2,i6:t=>t===0?0:Math.pow(2,10*t-10),o6:t=>t===1?1:1-Math.pow(2,-10*t),io6:t=>t===0?0:t===1?1:t<.5?Math.pow(2,20*t-10)/2:(2-Math.pow(2,-20*t+10))/2,i7:t=>1-Math.sqrt(1-Math.pow(t,2)),o7:t=>sqrt(1-Math.pow(t-1,2)),io7:t=>t<.5?(1-Math.sqrt(1-Math.pow(2*t,2)))/2:(Math.sqrt(1-Math.pow(-2*t+2,2))+1)/2},a=t=>typeof t=="object"?L.custom(t):L[t];var O=(t,e)=>Math.max(t,e),g=(t,e,s)=>Math.min(Math.max(t,s),e),d=(t,e,s)=>(1-s)*t+s*e,_=(t,e,s)=>g(0,1,(s-t)/(e-t)),Ft=(t,e,s,i,r)=>_(t,e,r)*(i-s)+s,$=(t,e)=>{let s=e?Math.pow(10,e):100;return Math.round(t*s)/s},Lt=(t,e)=>Math.sqrt(t**2+e**2),Ot=(t,e,s,i=.50399)=>d(t,e,1-Math.exp(-s*i));var Ct=(t,e)=>window.hasOwnProperty.call(t,e),z=t=>{let e=t.getBoundingClientRect();return{w:e.width,h:e.height,x:e.x,y:e.y,xE:e.right,yE:e.bottom}},E=t=>window.getComputedStyle(t),v={alpha:(t,e)=>t.style.opacity=e,display:(t,e)=>t.style.display=e,pointer:(t,e)=>t.style.pointerEvents=e,position:(t,e)=>t.style.position=e,visible:(t,e)=>t.style.visibility=e,form:(t,e,s,i)=>t.style.transform=`translate3d(${s+e},${i+e},0)`},u={id:t=>document.getElementById(t),el:t=>document.querySelector(t),els:t=>[...document.querySelectorAll(t)],sEl:(t,e)=>t.querySelector(e),sEls:(t,e)=>[...t.querySelectorAll(e)],node:t=>document.createElement(t),text:t=>document.createTextNode(t)},b={get size(){return{w:window.innerWidth,h:window.innerHeight}},string:t=>JSON.stringify(t)},k=class{constructor({d:e,cb:s}){this.d=e*1e3,this.cb=s,this.time=0}run(){clearTimeout(this.time),this.time=setTimeout(this.cb,this.d)}};var Nt=(t,{opacity:e,easing:s})=>{let i={s:+e,e:t[0],ease:t[1]?a(t[1]):s};return i.lerp=i.e-i.s,r=>`${i.s+i.lerp*i.ease(r)}`},Ht=(t,e)=>t.style.opacity=e,Z={cb:Nt,setValue:Ht};var It=(t,{filter:e,easing:s})=>{let i;return e==="none"?i={s:0,e:t[0]}:i={s:+e.match(/(\d.*)px/)[1],e:t[0]},i.lerp=i.e-i.s,i.ease=t[1]?a(t[1]):s,r=>i.s+i.lerp*i.ease(r)},jt=(t,e)=>t.style.filter=`blur(${e}px)`,tt={cb:It,setValue:jt};var C={a:7,c:6,h:1,l:2,m:2,q:4,s:4,t:2,v:1,z:0},Dt=/([astvzqmhlc])([^astvzqmhlc]*)/gi,Wt=/-?[0-9]*\.?[0-9]+(?:e[-+]?\d+)?/gi;function Bt(t){let e=t.match(Wt);return e?e.map(Number):[]}function et(t){let e=[];return t.replace(Dt,function(s,i,r){let o=i.toLowerCase();for(r=Bt(r),o==="m"&&r.length>2&&(e.push([i].concat(r.splice(0,2))),o="l",i=i==="m"?"l":"L");;){if(r.length===C[o])return r.unshift(i),e.push(r);if(r.length<C[o])throw new Error("malformed path data");e.push([i].concat(r.splice(0,C[o])))}}),e}var Xt=(t,{el:e,easing:s})=>{let i=et(e.getAttribute("d")),r=et(t[0]),o=t[1]?a(t[1]):s;return l=>{let n="",h="";for(let p=0;p<i.length;p++){let m=i[p],y=r[p];for(let f=0;f<m.length;f++)n+=(isNaN(m[f])?m[f]:d(m[f],y[f],o(l)))+" ";h=n.trim()}return h}},At=(t,e)=>t.setAttribute("d",e),st={cb:Xt,setValue:At};var Rt=(t,{el:e,easing:s})=>{let i=e.getTotalLength(),r={s:t[0]*i,e:t[1]*i,ease:t[2]?a(t[2]):s};return r.lerp=r.e-r.s,o=>`${r.s+r.lerp*r.ease(o)}`},Gt=(t,e)=>t.style.strokeDasharray=e,it={cb:Rt,setValue:Gt};var Jt=(t,{el:e,easing:s})=>{let i=e.getTotalLength();e.style.strokeDasharray=i;let r={s:t[1]*i,e:t[0]*i,ease:t[2]?a(t[2]):s};return r.lerp=r.e-r.s,o=>`${r.s+r.lerp*r.ease(o)}`},Kt=(t,e)=>t.style.strokeDashoffset=e,rt={cb:Jt,setValue:Kt};var ot=t=>{let e=[],s=t.split(" "),i=s.length;for(let r=0;r<i;r++){let o=s[r].split(","),l=o.length;for(let n=0;n<l;n++){let h=o[n];e.push(isNaN(h)?h:+h)}}return e},Qt=(t,{el:e,easing:s})=>{let i=ot(e.getAttribute("points")),r=ot(t[0]),o=t[1]?ease(t[1]):s;return l=>{let n="",h="";for(let p=0;p<i.length;p++)n+=d(i[p],r[p],o(l))+" ",h=n.trim();return h}},Ut=(t,e)=>t.setAttribute("points",e),nt={cb:Qt,setValue:Ut};var lt=(t,e,s,i)=>{let r={s:t?t[1]=="px"?e:e/parseFloat(s)*100:e,e:t?t[0]:e,unit:t&&t[1]?t[1]:"px"};return r.lerp=r.e-r.s,t?r.ease=t[2]?a(t[2]):i:r.ease=a("l"),o=>`${r.s+r.lerp*r.ease(o)}${r.unit}`},ht=(t,e,s)=>{let i={s:e,e:t?t[0]:e};return i.lerp=i.e-i.s,t?i.ease=t[1]?a(t[1]):s:i.ease=a("l"),r=>`${i.s+i.lerp*i.ease(r)}`},at=(t,e)=>{let s={s:t?t[0]:0,e:t?t[1]:0};return s.lerp=s.e-s.s,t?s.ease=t[1]?a(t[1]):e:s.ease=a("l"),i=>`${s.s+s.lerp*s.ease(i)}deg`},Zt=t=>{let e=t.match(/^matrix3d\((.+)\)$/),s=t.match(/\((.+)\)$/);return e?(s=e[1].split(", "),s=[s[0],s[1],s[4],s[5],s[12],s[13]]):s&&(s=s[1].split(", ")),s},te=(t,{transform:e,width:s,height:i,easing:r})=>{let o=Zt(e),l=lt(t.x,o?+o[4]:0,s,r),n=lt(t.y,o?+o[5]:0,i,r),h=ht(t.sx,o?+o[0]:1,r),p=ht(t.sy,o?+o[3]:1,r),m=at(t.rx,r),y=at(t.ry,r);return f=>`translate3d(${l(f)}, ${n(f)}, 0) scale(${h(f)}, ${p(f)}) rotateX(${m(f)}) rotateY(${y(f)})`},ee=(t,e)=>t.style.transform=e,pt={cb:te,setValue:ee};var se=(t,{parent:e,top:s,easing:i})=>{let r;if(s==="auto")r={s:0,e:t[0],unit:t[1]||"px"};else{let o=parseFloat(s);r={s:t[1]==="px"?o:o/z(e).h*100,e:t[0],unit:t[1]||"px"}}return r.lerp=r.e-r.s,r.ease=t[2]?a(t[2]):i,o=>`${r.s+r.lerp*r.ease(o)}${r.unit}`},ie=(t,e)=>t.style.top=e,ct={cb:se,setValue:ie};var re=(t,{parent:e,width:s,easing:i})=>{let r=parseFloat(s),o={s:t[1]==="px"?r:r/e.clientWidth*100,e:t[0],unit:t[1]==="px"?"px":"%",ease:t[2]?a(t[2]):i};return o.lerp=o.e-o.s,l=>`${o.s+o.lerp*o.ease(l)}${o.unit}`},oe=(t,e)=>t.style.width=e,ft={cb:re,setValue:oe};var ne=(t,{parent:e,height:s,easing:i})=>{let r=parseFloat(s),o={s:t[1]==="px"?r:r/e.clientHeight*100,e:t[0],unit:t[1]==="px"?"px":"%",ease:t[2]?a(t[2]):i};return o.lerp=o.e-o.s,l=>`${o.s+o.lerp*o.ease(l)}${o.unit}`},le=(t,e)=>t.style.height=e,dt={cb:ne,setValue:le};var he=(t,{clipPath:e,easing:s})=>{let i=e.match(/circle\((.*?) at/),r=e.match(/at (.*?)\)/),o=parseFloat(i[1]),l=r[1].split(" ").map(parseFloat),n={s:[o,l],e:[parseFloat(t[0]),t[1]],ease:t[2]?a(t[2]):s},h=n.e[0]-n.s[0],p=n.e[1][0]-n.s[1][0],m=n.e[1][1]-n.s[1][1];return y=>{let f=n.ease(y);return`circle(${n.s[0]+h*f}% at ${n.s[1][0]+p*f}% ${n.s[1][1]+m*f}%)`}},ae=(t,e)=>t.style.clipPath=e,ut={cb:he,setValue:ae};var mt=t=>t.replace(/^polygon\(|\)$/g,"").split(",").map(e=>e.trim().split(" ").map(parseFloat)),pe=(t,{clipPath:e,easing:s})=>{let i={s:mt(e),e:mt(t[0]),ease:t[1]?a(t[1]):s};return i.lerp=i.e.map((r,o)=>[r[0]-i.s[o][0],r[1]-i.s[o][1]]),r=>{let o=i.ease(r);return`${i.s.map((l,n)=>`${l[0]+i.lerp[n][0]*o}% ${l[1]+i.lerp[n][1]*o}%`).join(", ")}`}},ce=(t,e)=>t.style.clipPath=`polygon(${e})`,gt={cb:pe,setValue:ce};var fe=[[/^(form)$/,pt],[/^(a)$/,Z],[/^(width)$/,ft],[/^(height)$/,dt],[/^(top)$/,ct],[/^(blur)$/,tt],[/^(draw)$/,rt],[/^(dash)$/,it],[/^(points)$/,nt],[/^(d)$/,st],[/^(circle)$/,ut],[/^(polygon)$/,gt]],N=fe;function H(t){let e=N.length;for(let s=0;s<e;s++){let i=N[s];if(t.match(i[0]))return i[1]}}function de(t,e,s,i){let r=E(t);r.el=t,r.parent=t.parentNode,r.easing=i;for(let o of Object.entries(e)){let l=H(o[0]),n=l.cb(o[1],r);s.push({setV:l.setValue,cb:n})}}function ue(t,e,s,i){for(let r in e){let o={s:t[r],e:e[r][0],ease:e[r][1]?a(e[r][1]):i};o.lerp=o.e-o.s,s.push({setV:(l,n)=>l[r]=n,cb:l=>o.s+o.lerp*o.ease(l)})}}function me(t,e,s,i){let r=[];return e?ue(t,s,r,i):de(t,s,r,i),r}var P=me;var I=class{constructor(e){document.addEventListener("visibilitychange",this.change.bind(this)),this.raf=e}change(){let e=performance.now();document.hidden?this.hide=e:this.raf.items.map(s=>s.st+=e-this.hide)}},yt=I;var j=class{constructor(){this.items=[],this.id=-1}push(e){return e.id=++this.id,this.items.push(e),this.on||this.loop(),e.id}update(e){for(let s=0;s<this.items.length;s++){let i=this.items[s];if(i.d){i.st||(i.st=e);let r=(e-i.st)/(i.d*1e3),o=g(0,1,r);i.cb(o),o===1&&this.kill(i.id)}else i.cb(e)}this.loop()}kill(e){this.items.map((s,i)=>{s.id===e&&(s.id=null,s.st=null,this.items.splice(i,1))})}loop(){this.items.length===0?(this.on=!1,window.cancelAnimationFrame(this.raf)):(this.on=!0,this.raf=window.requestAnimationFrame(this.update.bind(this)))}},bt=new j;new yt(bt);var w=bt;var D=class{constructor(){this.observers={}}obs(e){this.observers[e]={items:[],id:0};function s(){let r=this[e],o=Array.prototype.slice.call(arguments);for(let l=0;l<r.items.length;l++)r.items[l].cb(...o)}let i=r=>{this.observers[r].items=[]};return{cb:s.bind(this.observers),name:e,r:i.bind(this,e)}}add(e,s){this.observers[e]||console.error(e);let i=this.observers[e].items,r=this.observers[e].id++,o={cb:s,id:r,on:!0};return i.push(o),{item:o,r:(n=>{for(let h=0;h<i.length;h++)i[h].id==n.id&&(i[h].on=!1,i.splice(h,1))}).bind({},o)}}check(e){return!!this.observers[e]}},c=new D;function wt(t){let e=document.createElement("section"),s={start:0,end:0,lerp:.75};e.style.cssText=` position: fixed; height: 32px; width: 32px; display: flex; align-items: center; justify-content: center; font-size: 12px; background: #333; color: #fff; border-radius: 50%; pointer-events: none; `,c.add("pointermove",i=>{let r=$(i.pageX/b.size.w);e.style.top=i.pageY+-30+"px",e.style.left=i.pageX+-30*r+"px",e.textContent=r,s.start=g(0,.99999,r)}),c.add("raf",()=>{s.end=d(s.start,s.end,s.lerp),t(s.end)}),document.body.appendChild(e)}var x=class{constructor({d:e,o:s,cb:i}){this.d=e||0,this.o=s,this.cb=i,this.on=!1}play(){this.on=!0,this.d===0?this.Elp():this.id=w.push({cb:this.loop.bind(this),d:this.d})}destroy(){w.kill(this.id),this.on=!1}loop(e){e===1&&this.Elp()}Elp(){this.on=!1,this.o&&w.push(this.o),this.cb&&this.cb()}};function W(t){this.isObj=!1,t instanceof Node?this.target=t:typeof t=="string"?this.target=u.el(t):(this.isObj=!0,this.target=t)}var vt=new Map;function B(t,e){let s=vt.get(t);return s||(vt.set(t,e),e.init(t),e)}var ge=(t,e)=>b.string(t)===b.string(e),xt=ge;var X=class{constructor(e){return B(e,this)}init(e){W.call(this,e),this.call=-1,this.props=[],this.queue=[],this.prog=0,this.elapsed=0}run(e){this.on=!0,this.elapsed=g(0,1,this.prog+e);let s=Math.abs(this.dir-this.elapsed);this.props.map(({setV:i,cb:r})=>i(this.target,r(s))),this.raf&&this.raf(s,this.target),this.elapsed===1&&this.finished()}push(e){this.destroy(),this.dir=e.dir,this.mode=e.mode,this.started&&(this.started(this.target),this.started=null),e.oProps?(this.oProps=e.oProps,this.props=P(this.target,this.isObj,e.oProps,a(e.ease)),this.prog=0):this.prog=1-this.elapsed,this.rafObj={cb:this.run.bind(this),d:e.d},this.id=w.push(this.rafObj)}control(){let e=this.queue[this.call];xt(this.oProps,e.oProps)?e.oProps=void 0:(this.late=new x({cb:this.push.bind(this,e),d:e.late}),this.late.play()),this.mode!==e.mode&&(this.late.on&&this.late.destroy(),this.late=new x({cb:this.push.bind(this,e),d:e.late}),this.late.play())}play(e,s){this.call++,this.started=e.started,this.completed=e.completed,this.raf=e.raf,this.queue.push({d:e.d,late:e.late,ease:e.ease,oProps:e.p,mode:s,dir:s==="r"?1:0}),this.control()}destroy(){this.on=!1,w.kill(this.id)}finished(){this.destroy(),this.completed&&(this.completed(this.target),this.completed=null,this.raf=null)}},Mt=X;var $t=(t,e,s)=>{let i={...t};return e!==0&&(i.started=null,i.raf=null),e!==s&&(i.completed=null),i.late=t.late+t.space*e,i},Vt=(t,e)=>{e.d=typeof t.d=="number"?t.d:e.d||.5,e.late=typeof t.late=="number"?t.late:e.late||0,e.space=typeof t.space=="number"?t.space:e.space||0,e.ease=t.ease?t.ease:e.ease||"l",e.p=t.p};function ye(t,e){let s;Array.isArray(t)&&!e.obj?s=t:s=[t];let i=s.map(l=>new Mt(l)),r=i.length-1,o={reverse:(l={})=>{Vt(l,e);for(let n=0;n<=r;n++){let h=r-n;i[n].play($t(e,h,r),"r")}},play:(l={})=>{Vt(l,e),i.map((n,h)=>n.play($t(e,h,r),"p"))},destroy:()=>i.map(l=>l.late.destroy()),tweens:i};return o.play(e),o}var A=ye;var V=(t,e)=>{let s=t.match(/(\+|\-)(.*)/);if(s){if(s[1]=="+")return e+ +s[2];if(s[1]=="-")return e-+s[2]}else return+t},R=class{constructor(e,s,i){this.el=e,this.target=s.target,this.o=s,this.from=s.from,this.dir=i,this.dirE=i=="y"?"yE":"xE",this.Init(s)}Init(e){e.target||(this.target=this.el),e.scroll&&(this.ps=e.p?P(this.target,!1,e.p):[]),e.pin&&(this.pin=e.pin,this.pin.target=e.pin.target||this.target),this.iresize=c.add("resize",this.resize.bind(this)),this.resize(),this.iraf=c.add(e.obsname,this.raf.bind(this))}resize(){let e=this.el.length?this.el[0]:this.el,s={y:e.offsetTop,yE:e.offsetTop+e.offsetHeight,x:e.offsetLeft,xE:e.offsetLeft+e.offsetWidth};this.o.scroll?(this.startpint=V(this.o.scroll.start||"+0",s[this.dir]),this.endpoint=V(this.o.scroll.end||"+0",s[this.dirE])):(this.startpint=V(this.o.start||"+0",s[this.dir]),this.endpoint=V(this.o.end||"+0",s[this.dirE])),this.o.pin&&(this.pin.start=V(this.pin.a||"+0",s[this.dir]),this.pin.end=V(this.pin.z||"+0",s[this.dirE]))}raf(e){if(this.coord=e[this.dir],this.o.scroll){let s=_(this.startpint,this.endpoint,this.coord);this.scroll(s),this.o.pin&&this.piner(),this.o.raf&&this.o.raf(s,this.target,this.coord)}else this.startpint<=this.coord&&this.fire()}scroll(e){let s=this.from?1-e:e;this.ps.map(i=>{this.target.length?this.target.forEach(r=>i.setV(r,i.cb(s))):i.setV(this.target,i.cb(s))})}fire(){this.o.tween&&A(this.target,this.o.tween),this.o.completed&&this.o.completed(this.target),this.destroy()}piner(){if(this.pined&&!(this.coord>=this.pin.end)){let e=O(0,this.coord-this.pin.pxS);this.pin.target.style.transform=`translate3d(${this.dir?"0px,"+e+"px":e+"px,0px"},0px)`}this.coord<this.pin.start?this.pined=!1:this.coord>=this.pin.start&&!this.pined&&(this.pin.pxS=this.coord,this.pined=!0)}destroy(){this.iraf.r(),this.iresize.r()}},kt=R;var zt=!1;function G(){if(!zt){history.scrollRestoration="manual",window.onpointerdown=c.obs("pointerdown").cb,window.onpointermove=c.obs("pointermove").cb,window.onpointerup=c.obs("pointerup").cb,window.onkeydown=c.obs("keydown").cb,window.onwheel=c.obs("wheel").cb,zt=!0;let t=u.node("div");t.id="overlay",t.style.cssText=` height: 100%; width: 100%; position: fixed; top: 0; left: 0; z-index: 999; pointer-events: none; `,document.body.appendChild(t)}}var S=class{constructor(e,s){this.options=s,this.attacher=e,this.target=s.target,this.dir=s.dir?s.dir:"y",this.isY=this.dir=="y",this.ePage=this.dir=="y"?"pageY":"pageX",this._init(s),this.chokeEl=u.id("overlay"),this.choke=new k({d:.3,cb:()=>v.pointer(this.chokeEl,"none")})}_init(e){G(),Object.is(this.attacher,window)?(e.drag!==!1&&(this.ipointerdown=c.add("pointerdown",this._down.bind(this)),this.ipointermove=c.add("pointermove",this._move.bind(this))),e.key!==!1&&(this.ikey=c.add("keydown",this._onkey.bind(this))),e.wheel!==!1&&(this.iwheel=c.add("wheel",this._wheel.bind(this))),this.globalevents=c.obs("globalevents").cb):(e.wheel!==!1&&(this.attacher.onwheel=this._wheel.bind(this)),e.drag!==!1&&(this.attacher.onpointerdown=this._down.bind(this),this.attacher.onpointermove=this._move.bind(this))),this.ipointerup=c.add("pointerup",this._up.bind(this)),this.dist=0,this.scroll={value:0,lerp:0,dir:1},this.speed={value:0,lerp:0}}_wheel(e){this.loop();let s=e.deltaMode==1?.83:.55,i=e.wheelDeltaY*s;this.scroll.value-=i,this.scroll.dir=Math.sign(i),this.globalevents&&this.globalevents(e,i)}_onkey(e){if(e.key==="Tab")e.preventDefault();else if(e.keyCode==40||e.keyCode==38){this.loop();let s=0;e.keyCode==40?s=-66.6:e.keyCode==38&&(s=66.6),this.scroll.value-=s,this.globalevents&&this.globalevents(e,s)}}_down(e){this.mousedown=!0,this.dist=e[this.ePage]}_move(e){if(this.mousedown){this.loop();let s=e[this.ePage]-this.dist;this.scroll.value-=s,this.dist=e[this.ePage],this.scroll.dir=Math.sign(s),this.globalevents&&(v.pointer(this.chokeEl,"all"),this.globalevents(e,s))}}_up(){this.mousedown=!1,this.choke.run()}_destroy(){this.iraf.r(),this.sub.r(),this.iresize.r(),Object.is(this.attacher,window)?(this.ipointerdown&&(this.ipointerdown.r(),this.ipointermove.r()),this.ikey&&this.ikey.r(),this.iwheel&&this.iwheel.r()):this.options!==!1&&(this.attacher.onpointerdown=null,this.attacher.onpointermove=null),this.ipointerup.r()}};var Y=(t,e,s)=>{s?v.form(t,"px",0,e):v.form(t,"px",e,0)},Et=(t,e,s,i,r,o)=>{t<=s.z&&e>=s.a?(Y(i,-o,r),s.out=!1):s.out||(Y(i,-o,r),s.out=!0)},J=class extends S{constructor(e,s){super(e,s),this.ease=s.ease||.09,this.infinite=s.infinite,this.sub=c.obs(s.obs||Symbol("foo")),this.speed={time:performance.now(),offset:0,value:0,ease:s.speed||.3},this.iresize=c.add("resize",this.resize.bind(this)),this.iraf=c.add("raf",this.raf.bind(this)),this.resize()}set target(e){this.target=e,this.resize(),this.scroll.lerp=0}loop(){this.iraf.item.on||(this.iraf=c.add("raf",this.raf.bind(this)))}add(e,s){s.obsname=this.sub.name;let i=new kt(e,s,this.dir);return this.loop(),i}raf(e){this.kids||(this.scroll.value=$(g(0,this.dim,this.scroll.value))),this.scroll.lerp=d(this.scroll.lerp,this.scroll.value,this.ease);let s=$(this.scroll.lerp);this.speed.time=e-this.speed.time,this.speed.offset=s-this.speed.offset,this.speed.value=d(this.speed.value,this.speed.offset/this.speed.time,this.speed.ease),this.kids?(s>this.dim?(this.scroll.value=this.scroll.value-this.dim,this.scroll.lerp=s-this.dim):s<0&&(this.scroll.value=this.dim+this.scroll.value,this.scroll.lerp=this.dim+s),this.kids.map(([i,r])=>{let o=s,l=o+this.s;if(s>this.dim-this.s){let n=s-(this.dim-this.s)-this.s,h=n+this.s;n<=r.z&&h>=r.a?Y(i,this.s-h,this.isY):Et(o,l,r,i,this.isY,s)}else Et(o,l,r,i,this.isY,s)})):Y(this.target,-s,this.isY),this.speed.time=e,this.speed.offset=s,this.sub&&this.sub.cb(this.scroll),s===this.scroll.value&&this.iraf.r()}resize(){if(this.bs=z(this.target),this.infinite){let s=[...this.target.children];this.kids=s.map(i=>{let r=this.isY?i.offsetTop:i.offsetLeft,o=this.isY?i.offsetHeight:i.offsetWidth;return[i,{a:r,z:r+o}]})}let e=this.isY?"h":"w";this.s=b.size[e],this.dim=this.bs[e]-(this.kids?0:this.s),this.loop()}},be=J;var F=" ";function we(t,e){document.body.append(t),t.style.visibility="hidden",t.style.position="absolute",t.style.whiteSpace="nowrap",t.style.fontFamily=e.getPropertyValue("font-family"),t.style.fontSize=e.getPropertyValue("font-size"),t.style.fontWeight=e.getPropertyValue("font-weight"),t.style.textTransform=e.getPropertyValue("text-transform"),t.style.letterSpacing=e.getPropertyValue("letter-spacing"),t.style.lineHeight=e.getPropertyValue("line-height")}function Pt(t){let e=t.childNodes,s=[];for(let i=0;i<e.length;i++)s.push(ve(e[i]));return s}function ve(t){let e;return t.nodeType===3?e={value:t.nodeValue.split(" "),type:3}:e={value:Pt(t),type:1,node:t},e}function St(t){for(let e=0;e<t.length;e++){let s=t[e];if(s.type===3){let i=[];for(let r=0;r<s.value.length;r++)s.value[r]=s.value[r].replace(/\n/g,""),s.value[r]!==""&&i.push(s.value[r]);s.value=i}else St(s.value)}}function qt(t,e,s){if(s.words){let i=t.words.length,r;s.ltrs?r=t.words.reduce((o,l,n)=>{let h="";for(let p=0;p<l.length;p++)h+=q(l[p],3);return o+q(h+(n==i-1?"":F),2)},""):r=t.words.reduce((o,l,n)=>o+q(l+(n==i-1?"":F),2),""),e.push({line:q(r,1)})}else e.push({line:q(t.value,1)})}function q(t,e){if(e===1)return`<div class="tfx"><span>${t}</span></div>`;if(e===2)return`<span class="word">${t}</span>`;if(e===3)return`<span class="ltr">${t}</span>`}function xe(t,e,s,i,r,o){for(let l=0;l<t.length;l++){let n=t[l];e.value+=n,s.innerHTML=e.value,e.words.push(n),s.offsetWidth>i&&(e.words.pop(),qt(e,r,o),e.value=n,e.words=[n+F]),e.value+=F}}function Me(t,e,s,i){let r={value:"",words:[]},o=[];for(let l=0;l<t.length;l++){let n=t[l];n.type===3&&xe(n.value,r,e,s,o,i)}return qt(r,o,i),o}function $e(t,e){let s=E(t),i=document.createElement("div");e.ltrs&&(e.words=!0),we(i,s);let r=t.offsetWidth,o=Pt(t);St(o);let l=Me(o,i,r,e);return t.innerHTML="",document.body.removeChild(i),l.map(({line:n})=>t.innerHTML+=n),{lines:u.sEls(t,".tfx"),words:u.sEls(t,".word"),ltrs:u.sEls(t,".ltr")}}var Ve=$e;export{z as bounds,k as choke,g as clamp,E as computed,v as cssSet,Ot as damp,Lt as dist,a as ease,Ct as has,b as iSet,x as late,d as lerp,Ve as line,_ as map,P as props,u as query,w as raf,Ft as remap,$ as round,be as scroll,wt as scrub,c as sub,A as tween,O as zero};
