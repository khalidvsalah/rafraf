function ownKeys(e,t){var r,n=Object.keys(e);return Object.getOwnPropertySymbols&&(r=Object.getOwnPropertySymbols(e),t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)),n}function _objectSpread2(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(Object(r),!0).forEach(function(t){_defineProperty(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ownKeys(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function _regeneratorRuntime(){_regeneratorRuntime=function(){return s};var s={},t=Object.prototype,c=t.hasOwnProperty,u=Object.defineProperty||function(t,e,r){t[e]=r.value},e="function"==typeof Symbol?Symbol:{},n=e.iterator||"@@iterator",r=e.asyncIterator||"@@asyncIterator",o=e.toStringTag||"@@toStringTag";function i(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{i({},"")}catch(t){i=function(t,e,r){return t[e]=r}}function a(t,e,r,n){var o,i,s,a,e=e&&e.prototype instanceof h?e:h,e=Object.create(e.prototype),n=new _(n||[]);return u(e,"_invoke",{value:(o=t,i=r,s=n,a="suspendedStart",function(t,e){if("executing"===a)throw new Error("Generator is already running");if("completed"===a){if("throw"===t)throw e;return k()}for(s.method=t,s.arg=e;;){var r=s.delegate;if(r){r=function t(e,r){var n=r.method,o=e.iterator[n];if(void 0===o)return r.delegate=null,"throw"===n&&e.iterator.return&&(r.method="return",r.arg=void 0,t(e,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),p;n=l(o,e.iterator,r.arg);if("throw"===n.type)return r.method="throw",r.arg=n.arg,r.delegate=null,p;o=n.arg;return o?o.done?(r[e.resultName]=o.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=void 0),r.delegate=null,p):o:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,p)}(r,s);if(r){if(r===p)continue;return r}}if("next"===s.method)s.sent=s._sent=s.arg;else if("throw"===s.method){if("suspendedStart"===a)throw a="completed",s.arg;s.dispatchException(s.arg)}else"return"===s.method&&s.abrupt("return",s.arg);a="executing";r=l(o,i,s);if("normal"===r.type){if(a=s.done?"completed":"suspendedYield",r.arg===p)continue;return{value:r.arg,done:s.done}}"throw"===r.type&&(a="completed",s.method="throw",s.arg=r.arg)}})}),e}function l(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}s.wrap=a;var p={};function h(){}function f(){}function y(){}var e={},d=(i(e,n,function(){return this}),Object.getPrototypeOf),d=d&&d(d(x([]))),m=(d&&d!==t&&c.call(d,n)&&(e=d),y.prototype=h.prototype=Object.create(e));function v(t){["next","throw","return"].forEach(function(e){i(t,e,function(t){return this._invoke(e,t)})})}function b(s,a){var e;u(this,"_invoke",{value:function(r,n){function t(){return new a(function(t,e){!function e(t,r,n,o){var i,t=l(s[t],s,r);if("throw"!==t.type)return(r=(i=t.arg).value)&&"object"==typeof r&&c.call(r,"__await")?a.resolve(r.__await).then(function(t){e("next",t,n,o)},function(t){e("throw",t,n,o)}):a.resolve(r).then(function(t){i.value=t,n(i)},function(t){return e("throw",t,n,o)});o(t.arg)}(r,n,t,e)})}return e=e?e.then(t,t):t()}})}function g(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function w(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function _(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(g,this),this.reset(!0)}function x(e){if(e){var r,t=e[n];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length))return r=-1,(t=function t(){for(;++r<e.length;)if(c.call(e,r))return t.value=e[r],t.done=!1,t;return t.value=void 0,t.done=!0,t}).next=t}return{next:k}}function k(){return{value:void 0,done:!0}}return u(m,"constructor",{value:f.prototype=y,configurable:!0}),u(y,"constructor",{value:f,configurable:!0}),f.displayName=i(y,o,"GeneratorFunction"),s.isGeneratorFunction=function(t){t="function"==typeof t&&t.constructor;return!!t&&(t===f||"GeneratorFunction"===(t.displayName||t.name))},s.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,y):(t.__proto__=y,i(t,o,"GeneratorFunction")),t.prototype=Object.create(m),t},s.awrap=function(t){return{__await:t}},v(b.prototype),i(b.prototype,r,function(){return this}),s.AsyncIterator=b,s.async=function(t,e,r,n,o){void 0===o&&(o=Promise);var i=new b(a(t,e,r,n),o);return s.isGeneratorFunction(e)?i:i.next().then(function(t){return t.done?t.value:i.next()})},v(m),i(m,o,"Generator"),i(m,n,function(){return this}),i(m,"toString",function(){return"[object Generator]"}),s.keys=function(t){var e,r=Object(t),n=[];for(e in r)n.push(e);return n.reverse(),function t(){for(;n.length;){var e=n.pop();if(e in r)return t.value=e,t.done=!1,t}return t.done=!0,t}},s.values=x,_.prototype={constructor:_,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(w),!t)for(var e in this)"t"===e.charAt(0)&&c.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(r){if(this.done)throw r;var n=this;function t(t,e){return i.type="throw",i.arg=r,n.next=t,e&&(n.method="next",n.arg=void 0),!!e}for(var e=this.tryEntries.length-1;0<=e;--e){var o=this.tryEntries[e],i=o.completion;if("root"===o.tryLoc)return t("end");if(o.tryLoc<=this.prev){var s=c.call(o,"catchLoc"),a=c.call(o,"finallyLoc");if(s&&a){if(this.prev<o.catchLoc)return t(o.catchLoc,!0);if(this.prev<o.finallyLoc)return t(o.finallyLoc)}else if(s){if(this.prev<o.catchLoc)return t(o.catchLoc,!0)}else{if(!a)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return t(o.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;0<=r;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&c.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}var i=(o=o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc?null:o)?o.completion:{};return i.type=t,i.arg=e,o?(this.method="next",this.next=o.finallyLoc,p):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),p},finish:function(t){for(var e=this.tryEntries.length-1;0<=e;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),w(r),p}},catch:function(t){for(var e=this.tryEntries.length-1;0<=e;--e){var r,n,o=this.tryEntries[e];if(o.tryLoc===t)return"throw"===(r=o.completion).type&&(n=r.arg,w(o)),n}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:x(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),p}},s}function _typeof(t){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function asyncGeneratorStep(t,e,r,n,o,i,s){try{var a=t[i](s),c=a.value}catch(t){return void r(t)}a.done?e(c):Promise.resolve(c).then(n,o)}function _asyncToGenerator(a){return function(){var t=this,s=arguments;return new Promise(function(e,r){var n=a.apply(t,s);function o(t){asyncGeneratorStep(n,e,r,o,i,"next",t)}function i(t){asyncGeneratorStep(n,e,r,o,i,"throw",t)}o(void 0)})}}function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,_toPropertyKey(n.key),n)}}function _createClass(t,e,r){return e&&_defineProperties(t.prototype,e),r&&_defineProperties(t,r),Object.defineProperty(t,"prototype",{writable:!1}),t}function _defineProperty(t,e,r){return(e=_toPropertyKey(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function _setPrototypeOf(t,e){return(_setPrototypeOf=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t})(t,e)}function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(t){return!1}}function _construct(t,e,r){return(_construct=_isNativeReflectConstruct()?Reflect.construct.bind():function(t,e,r){var n=[null];n.push.apply(n,e);e=new(Function.bind.apply(t,n));return r&&_setPrototypeOf(e,r.prototype),e}).apply(null,arguments)}function _toConsumableArray(t){return _arrayWithoutHoles(t)||_iterableToArray(t)||_unsupportedIterableToArray(t)||_nonIterableSpread()}function _arrayWithoutHoles(t){if(Array.isArray(t))return _arrayLikeToArray(t)}function _iterableToArray(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}function _unsupportedIterableToArray(t,e){var r;if(t)return"string"==typeof t?_arrayLikeToArray(t,e):"Map"===(r="Object"===(r=Object.prototype.toString.call(t).slice(8,-1))&&t.constructor?t.constructor.name:r)||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?_arrayLikeToArray(t,e):void 0}function _arrayLikeToArray(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _toPrimitive(t,e){if("object"!=typeof t||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0===r)return("string"===e?String:Number)(t);r=r.call(t,e||"default");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}function _toPropertyKey(t){t=_toPrimitive(t,"string");return"symbol"==typeof t?t:String(t)}var _F=function(){function t(){_classCallCheck(this,t),this.items=[]}return _createClass(t,[{key:"push",value:function(t){var e=this;return Array.isArray(t)?t.map(function(t){return e.items.push(t),e.items.length-1}):"object"===_typeof(t)?(this.items.push(t),this.items.length-1):void console.error("Failed To Push Object")}},{key:"update",value:function(t){for(var e,r=0;r<this.items.length;r++)this.items[r].st?-1===this.items[r].d?this.items[r].cb(t):this.items[r].d||"number"==typeof this.items[r].d?(e=(t-this.items[r].st)/this.items[r].d,this.elapsed=ardor.Clamp(0,1,e),this.items[r].cb&&this.items[r].cb(this.elapsed)&&this.items.splice(r,1),1<=this.elapsed&&(this.items[r].completed&&this.items[r].completed(),this.items.splice(r,1))):(this.items[r].cb(1),this.items.splice(r,1)):(this.items[r].st=t,this.items[r].start&&this.items[r].start());this.play()}},{key:"kill",value:function(t){var e=this;Array.isArray(t)?t.map(function(t){e.items[t].cb&&e.items[t].cb(e.elapsed),e.items.splice(t,1)}):"number"==typeof t?(this.items[t].cb&&this.items[t].cb(this.elapsed),this.items.splice(t,1)):console.error("You Need To Pass Array or Number")}},{key:"play",value:function(){!1===this.items.length?this.on=!1:(this.on=!0,window.requestAnimationFrame(this.update.bind(this)))}}]),t}(),Raf=new _F,_R=function(){function t(){_classCallCheck(this,t),this.cache=new Map}var e;return _createClass(t,[{key:"xhr",value:(e=_asyncToGenerator(_regeneratorRuntime().mark(function t(e){var r,n,o,i,s,a,c,u;return _regeneratorRuntime().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(r=e.url,n=e.push,c=e.post,o=e.isText,i=e.compile,this.cache.get(r))t.next=30;else{if(t.prev=2,i)return c=new Request(r,{headers:new Headers({"Content-type":o?"application/x-ww-form-urlencodeed":"text/html"}),method:c?"POST":"GET",mode:"cors"}),t.next=7,fetch(c);t.next=18}break;case 7:if(a=t.sent,o)return t.next=11,a.json();t.next=14;break;case 11:t.t0=t.sent,t.next=17;break;case 14:return t.next=16,a.text();case 16:t.t0=t.sent;case 17:s=t.t0;case 18:return n&&window.history.pushState({},"",r),c=r.match(/(?:\w+:)?\/\/[^\/]+([^?#]+)/),u={url:c?c[1]:r,data:i?s:"",stored:!1},this.cache.set(r,u),t.abrupt("return",u);case 25:t.prev=25,t.t1=t.catch(2),console.error("Failed To Get The Data",t.t1.message);case 28:t.next=32;break;case 30:return n&&window.history.pushState({},"",r),t.abrupt("return",_objectSpread2(_objectSpread2({},this.cache.get(r)),{},{stored:!0}));case 32:case"end":return t.stop()}},t,this,[[2,25]])})),function(t){return e.apply(this,arguments)})}]),t}(),Route=new _R;function setProps(t,e){for(var r in e)r.match(/^on/)?t.addEventListener(r.match(/[A-Z](.*)/)[0].toLowerCase(),e[r]):t.setAttribute(r,e[r])}function create(t){var e;return"string"==typeof t||"number"==typeof t?e=document.createTextNode(t):(e=document.createElement(t.type),t.props&&setProps(e,t.props),t.children&&("string"==typeof t.children||"number"==typeof t.children?e.appendChild(create(t.children)):t.children.map(create).forEach(e.appendChild.bind(e)))),e}function _C(t,e){return t.appendChild(create(e))}var props={transform:function(t,e,r,n,o){var i,s=o.transform,s="none"!==s&&s.match(/\((.+)\)$/)[1].split(", "),a=s?(i={s:+s[4],e:t?"px"===t[2]?t[1]:t[1]/100*parseFloat(o.width):0,unit:"px"},{s:+s[5],e:e?"px"===e[2]?e[1]:e[1]/100*parseFloat(o.height):0,unit:"px"}):(i={s:t[0],e:t[1],unit:t[2]||"px"},{s:e[0],e:e[1],unit:e[2]||"px"}),c={s:s?+s[0]:r[0]||1,e:r[1]||1},u={s:s?+s[3]:n[0]||1,e:n[1]||1};return i.lerp=i.e-i.s,a.lerp=a.e-a.s,c.lerp=c.e-c.s,u.lerp=u.e-u.s,t&&e||s?function(t){return"translate3d(\n          ".concat(i.s+i.lerp*t).concat(i.unit,", \n          ").concat(a.s+a.lerp*t).concat(a.unit,",\n          0) scale(").concat(c.s+c.lerp*t,", ").concat(u.s+u.lerp*t,")")}:t?function(t){return"translateX(".concat(i.s+i.lerp*t).concat(i.unit,") scale(").concat(c.s+c.lerp*t,", ").concat(u.s+u.lerp*t,")")}:e?function(t){return"translateY(".concat(a.s+a.lerp*t).concat(a.unit,") scale(").concat(c.s+c.lerp*t,", ").concat(u.s+u.lerp*t,")")}:void 0},opacity:function(t,e){var r={s:e.opacity,e:t[1]};return r.lerp=r.e-r.s,function(t){return"".concat(r.s+r.lerp*t)}},pointer:function(t){return function(){return t}},display:function(t){return function(){return t}}};function checkProps(t){var r=this;if(this.results=[],t)for(var e=0;e<this.keys.length;e++){var n=this.keys[e],o=+this.elements[0][this.keys[e]];this.results.push({name:n,cb:function(){var e={s:o||r.props[n][0],e:r.props[n][1]};return e.lerp=r.props[n][1]-r.props[n][0],function(t){return e.s+e.lerp*t}}()})}else{var i=ardor.Has(this.props,"x")&&this.props.x,s=ardor.Has(this.props,"y")&&this.props.y,a=ardor.Has(this.props,"sx")&&this.props.sx,c=ardor.Has(this.props,"sy")&&this.props.sy,u=ardor.Has(this.props,"opacity")&&this.props.opacity,l=ardor.Has(this.props,"pointer")&&this.props.pointer,p=ardor.Has(this.props,"display")&&this.props.display;this.elements.map(function(t){var e=window.getComputedStyle(t);(i||s)&&r.results.push({name:"transform",element:t,cb:props.transform(i,s,a,c,e)}),u&&r.results.push({name:"opacity",element:t,cb:props.opacity(u,e)}),l&&r.results.push({name:"pointerEvents",element:t,cb:props.pointer(l)}),p&&r.results.push({name:"display",element:t,cb:props.display(p)})})}}var T=function(){function n(t,e,r){_classCallCheck(this,n),this.elements=t,this.stop=!1,this.o=e,r?this.wTo():this.to()}return _createClass(n,[{key:"to",value:function(){this.d=this.o.d||500,this.cbO={cb:this.run.bind(this),d:this.d,completed:this.o.completed},this.del=this.o.delay||0,this.delay=new ardor.Delay({delay:this.del,o:this.cbO}),this.ease=this.o.ease?ardor.Ease[this.o.ease]:ardor.Ease.l,this.props=this.o.p,this.keys=Object.keys(this.props),checkProps.call(this,this.w)}},{key:"wTo",value:function(){this.w=!0,this.to()}},{key:"set",value:function(t,e){checkElement.call(this,t,e);t={cb:this.run.bind(this)};this.delay=new ardor.Delay({delay:0,o:t}),this.ease=ardor.Ease.l,this.props=e.p,this.keys=Object.keys(e.p),checkProps.call(this),this.play()}},{key:"run",value:function(t){var e=this,r=this.ease(t);return this.results.map(function(t){e.w?e.elements[0][t.name]=t.cb(r):t.element.style[t.name]=t.cb(r)}),this.stop}},{key:"play",value:function(){this.delay.play()}}]),n}();function checkElement$1(t){var e,r=[];return"string"==typeof t?0===(e=document.querySelectorAll(t)).length?console.error("Found no element"):r=_construct(Array,_toConsumableArray(e)):(t instanceof window.HTMLElement||"object"===_typeof(t))&&r.push(t),r}function Element(){var e=this;Array.isArray(this.element)?this.element.map(function(t){e.selector.push(checkElement$1(t))}):this.selector.push(checkElement$1(this.element))}function push(e){var r=this,n=this.items.length&&this.items[this.items.length-1].d+this.items[this.items.length-1].del,o=this.o.delay+this.time;this.selector.map(function(t){r.items.push(new T(t,_objectSpread2(_objectSpread2({},r.o),{},{delay:n||o}),e))})}function initTL(t,e,r,n){this.element=t,this.o=e,this.time=r,Element.call(this,this.element),push.call(this,n),this.store.set(t,this.items[this.items.length-1])}var TL=function(){function t(){_classCallCheck(this,t),this.items=[],this.store=new Map}return _createClass(t,[{key:"to",value:function(t,e){var r=2<arguments.length&&void 0!==arguments[2]?arguments[2]:0;this.selector=[],t&&e?"object"!==_typeof(t)||Array.isArray(t)?initTL.call(this,t,e,r,!1):initTL.call(this,t,e,r,!0):console.error(t?"You need to pass Object":"You need to pass Element")}},{key:"kill",value:function(t){t?(t=this.store.get(t))&&(t.stop=!0):console.error("enter vailed element")}},{key:"play",value:function(){this.items.map(function(t){t.play()}),this.items=[],this.selector=[]}}]),t}(),Clamp=function(t,e,r){return Math.min(Math.max(t,r),e)},Lerp=function(t,e,r){return(1-r)*t+r*e},Round=function(t,e){e=e?Math.pow(10,e):100;return Math.round(t*e)/e},Has=function(t,e){return window.hasOwnProperty.call(t,e)},ardor={Raf:Raf,Route:Route,Create:_C,Timeline:TL,Has:Has,Round:Round,Lerp:Lerp,Clamp:Clamp};export{ardor as default};
