(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,803959,e=>{"use strict";var t=e.i(271645);let r=e=>{let t,r=new Set,n=(e,n)=>{let o="function"==typeof e?e(t):e;if(!Object.is(o,t)){let e=t;t=(null!=n?n:"object"!=typeof o||null===o)?o:Object.assign({},t,o),r.forEach(r=>r(t,e))}},o=()=>t,a={setState:n,getState:o,getInitialState:()=>i,subscribe:e=>(r.add(e),()=>r.delete(e))},i=t=e(n,o,a);return a},n=e=>{let n=e?r(e):r,o=e=>(function(e,r=e=>e){let n=t.default.useSyncExternalStore(e.subscribe,t.default.useCallback(()=>r(e.getState()),[e,r]),t.default.useCallback(()=>r(e.getInitialState()),[e,r]));return t.default.useDebugValue(n),n})(n,e);return Object.assign(o,n),o},o=e=>e?n(e):n;e.s(["create",()=>o],803959)},997053,e=>{"use strict";var t=e.i(247167),r=function(){return(r=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};function n(e,t,r){if(r||2==arguments.length)for(var n,o=0,a=t.length;o<a;o++)!n&&o in t||(n||(n=Array.prototype.slice.call(t,0,o)),n[o]=t[o]);return e.concat(n||Array.prototype.slice.call(t))}"function"==typeof SuppressedError&&SuppressedError;Object.create(null);var o=e.i(271645),a="-ms-",i="-moz-",s="-webkit-",l="comm",c="rule",d="decl",u="@keyframes",p=Math.abs,h=String.fromCharCode,f=Object.assign;function v(e,t){return(e=t.exec(e))?e[0]:e}function g(e,t,r){return e.replace(t,r)}function m(e,t,r){return e.indexOf(t,r)}function y(e,t){return 0|e.charCodeAt(t)}function b(e,t,r){return e.slice(t,r)}function w(e){return e.length}function x(e,t){return t.push(e),e}function k(e,t){return e.filter(function(e){return!v(e,t)})}var S=1,C=1,j=0,P=0,$=0,_="";function I(e,t,r,n,o,a,i,s){return{value:e,root:t,parent:r,type:n,props:o,children:a,line:S,column:C,length:i,return:"",siblings:s}}function A(e,t){return f(I("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function T(e){for(;e.root;)e=A(e.root,{children:[e]});x(e,e.siblings)}function E(){return $=P<j?y(_,P++):0,C++,10===$&&(C=1,S++),$}function z(){return y(_,P)}function N(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function O(e){var t,r;return(t=P-1,r=function e(t){for(;E();)switch($){case t:return P;case 34:case 39:34!==t&&39!==t&&e($);break;case 40:41===t&&e(t);break;case 92:E()}return P}(91===e?e+2:40===e?e+1:e),b(_,t,r)).trim()}function W(e,t){for(var r="",n=0;n<e.length;n++)r+=t(e[n],n,e,t)||"";return r}function M(e,t,r,n){switch(e.type){case"@layer":if(e.children.length)break;case"@import":case"@namespace":case d:return e.return=e.return||e.value;case l:return"";case u:return e.return=e.value+"{"+W(e.children,n)+"}";case c:if(!w(e.value=e.props.join(",")))return""}return w(r=W(e.children,n))?e.return=e.value+"{"+r+"}":""}function R(e,t,r,n){if(e.length>-1&&!e.return)switch(e.type){case d:e.return=function e(t,r,n){var o;switch(o=r,45^y(t,0)?(((o<<2^y(t,0))<<2^y(t,1))<<2^y(t,2))<<2^y(t,3):0){case 5103:return s+"print-"+t+t;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:case 6391:case 5879:case 5623:case 6135:case 4599:return s+t+t;case 4855:return s+t.replace("add","source-over").replace("substract","source-out").replace("intersect","source-in").replace("exclude","xor")+t;case 4789:return i+t+t;case 5349:case 4246:case 4810:case 6968:case 2756:return s+t+i+t+a+t+t;case 5936:switch(y(t,r+11)){case 114:return s+t+a+g(t,/[svh]\w+-[tblr]{2}/,"tb")+t;case 108:return s+t+a+g(t,/[svh]\w+-[tblr]{2}/,"tb-rl")+t;case 45:return s+t+a+g(t,/[svh]\w+-[tblr]{2}/,"lr")+t}case 6828:case 4268:case 2903:return s+t+a+t+t;case 6165:return s+t+a+"flex-"+t+t;case 5187:return s+t+g(t,/(\w+).+(:[^]+)/,s+"box-$1$2"+a+"flex-$1$2")+t;case 5443:return s+t+a+"flex-item-"+g(t,/flex-|-self/g,"")+(v(t,/flex-|baseline/)?"":a+"grid-row-"+g(t,/flex-|-self/g,""))+t;case 4675:return s+t+a+"flex-line-pack"+g(t,/align-content|flex-|-self/g,"")+t;case 5548:return s+t+a+g(t,"shrink","negative")+t;case 5292:return s+t+a+g(t,"basis","preferred-size")+t;case 6060:return s+"box-"+g(t,"-grow","")+s+t+a+g(t,"grow","positive")+t;case 4554:return s+g(t,/([^-])(transform)/g,"$1"+s+"$2")+t;case 6187:return g(g(g(t,/(zoom-|grab)/,s+"$1"),/(image-set)/,s+"$1"),t,"")+t;case 5495:case 3959:return g(t,/(image-set\([^]*)/,s+"$1$`$1");case 4968:return g(g(t,/(.+:)(flex-)?(.*)/,s+"box-pack:$3"+a+"flex-pack:$3"),/space-between/,"justify")+s+t+t;case 4200:if(!v(t,/flex-|baseline/))return a+"grid-column-align"+b(t,r)+t;break;case 2592:case 3360:return a+g(t,"template-","")+t;case 4384:case 3616:if(n&&n.some(function(e,t){return r=t,v(e.props,/grid-\w+-end/)}))return~m(t+(n=n[r].value),"span",0)?t:a+g(t,"-start","")+t+a+"grid-row-span:"+(~m(n,"span",0)?v(n,/\d+/):v(n,/\d+/)-v(t,/\d+/))+";";return a+g(t,"-start","")+t;case 4896:case 4128:return n&&n.some(function(e){return v(e.props,/grid-\w+-start/)})?t:a+g(g(t,"-end","-span"),"span ","")+t;case 4095:case 3583:case 4068:case 2532:return g(t,/(.+)-inline(.+)/,s+"$1$2")+t;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(w(t)-1-r>6)switch(y(t,r+1)){case 109:if(45!==y(t,r+4))break;case 102:return g(t,/(.+:)(.+)-([^]+)/,"$1"+s+"$2-$3$1"+i+(108==y(t,r+3)?"$3":"$2-$3"))+t;case 115:return~m(t,"stretch",0)?e(g(t,"stretch","fill-available"),r,n)+t:t}break;case 5152:case 5920:return g(t,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(e,r,n,o,i,s,l){return a+r+":"+n+l+(o?a+r+"-span:"+(i?s:s-n)+l:"")+t});case 4949:if(121===y(t,r+6))return g(t,":",":"+s)+t;break;case 6444:switch(y(t,45===y(t,14)?18:11)){case 120:return g(t,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+s+(45===y(t,14)?"inline-":"")+"box$3$1"+s+"$2$3$1"+a+"$2box$3")+t;case 100:return g(t,":",":"+a)+t}break;case 5719:case 2647:case 2135:case 3927:case 2391:return g(t,"scroll-","scroll-snap-")+t}return t}(e.value,e.length,r);return;case u:return W([A(e,{value:g(e.value,"@","@"+s)})],n);case c:if(e.length){var o,l;return o=r=e.props,l=function(t){switch(v(t,n=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":T(A(e,{props:[g(t,/:(read-\w+)/,":"+i+"$1")]})),T(A(e,{props:[t]})),f(e,{props:k(r,n)});break;case"::placeholder":T(A(e,{props:[g(t,/:(plac\w+)/,":"+s+"input-$1")]})),T(A(e,{props:[g(t,/:(plac\w+)/,":"+i+"$1")]})),T(A(e,{props:[g(t,/:(plac\w+)/,a+"input-$1")]})),T(A(e,{props:[t]})),f(e,{props:k(r,n)})}return""},o.map(l).join("")}}}function D(e,t,r,n,o,a,i,s,l,d,u,h){for(var f=o-1,v=0===o?a:[""],m=v.length,y=0,w=0,x=0;y<n;++y)for(var k=0,S=b(e,f+1,f=p(w=i[y])),C=e;k<m;++k)(C=(w>0?v[k]+" "+S:g(S,/&\f/g,v[k])).trim())&&(l[x++]=C);return I(e,t,r,0===o?c:s,l,d,u,h)}function F(e,t,r,n,o){return I(e,t,r,d,b(e,0,n),b(e,n+1,-1),n,o)}var L={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},B=void 0!==t.default&&void 0!==t.default.env&&(t.default.env.REACT_APP_SC_ATTR||t.default.env.SC_ATTR)||"data-styled",U="active",G="data-styled-version",Z="6.3.9",V="/*!sc*/\n",q="undefined"!=typeof window&&"undefined"!=typeof document,H=void 0===o.default.createContext,K=!!("boolean"==typeof SC_DISABLE_SPEEDY?SC_DISABLE_SPEEDY:void 0!==t.default&&void 0!==t.default.env&&void 0!==t.default.env.REACT_APP_SC_DISABLE_SPEEDY&&""!==t.default.env.REACT_APP_SC_DISABLE_SPEEDY?"false"!==t.default.env.REACT_APP_SC_DISABLE_SPEEDY&&t.default.env.REACT_APP_SC_DISABLE_SPEEDY:void 0!==t.default&&void 0!==t.default.env&&void 0!==t.default.env.SC_DISABLE_SPEEDY&&""!==t.default.env.SC_DISABLE_SPEEDY&&"false"!==t.default.env.SC_DISABLE_SPEEDY&&t.default.env.SC_DISABLE_SPEEDY),Y={},X=Object.freeze([]),J=Object.freeze({});function Q(e,t,r){return void 0===r&&(r=J),e.theme!==r.theme&&e.theme||t||r.theme}var ee=new Set(["a","abbr","address","area","article","aside","audio","b","bdi","bdo","blockquote","body","button","br","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","label","legend","li","main","map","mark","menu","meter","nav","object","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","search","section","select","slot","small","span","strong","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","switch","symbol","text","textPath","tspan","use"]),et=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,er=/(^-|-$)/g;function en(e){return e.replace(et,"-").replace(er,"")}var eo=/(a)(d)/gi,ea=function(e){return String.fromCharCode(e+(e>25?39:97))};function ei(e){var t,r="";for(t=Math.abs(e);t>52;t=t/52|0)r=ea(t%52)+r;return(ea(t%52)+r).replace(eo,"$1-$2")}var es,el=function(e,t){for(var r=t.length;r;)e=33*e^t.charCodeAt(--r);return e},ec=function(e){return el(5381,e)};function ed(e){return ei(ec(e)>>>0)}function eu(e){return"string"==typeof e}var ep="function"==typeof Symbol&&Symbol.for,eh=ep?Symbol.for("react.memo"):60115,ef=ep?Symbol.for("react.forward_ref"):60112,ev={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},eg={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},em={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},ey=((es={})[ef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},es[eh]=em,es);function eb(e){return("type"in e&&e.type.$$typeof)===eh?em:"$$typeof"in e?ey[e.$$typeof]:ev}var ew=Object.defineProperty,ex=Object.getOwnPropertyNames,ek=Object.getOwnPropertySymbols,eS=Object.getOwnPropertyDescriptor,eC=Object.getPrototypeOf,ej=Object.prototype;function eP(e){return"function"==typeof e}function e$(e){return"object"==typeof e&&"styledComponentId"in e}function e_(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function eI(e,t){return e.join(t||"")}function eA(e){return null!==e&&"object"==typeof e&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function eT(e,t){Object.defineProperty(e,"toString",{value:t})}function eE(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];return Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var ez=function(){function e(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e,this._cGroup=0,this._cIndex=0}return e.prototype.indexOfGroup=function(e){if(e===this._cGroup)return this._cIndex;var t=this._cIndex;if(e>this._cGroup)for(var r=this._cGroup;r<e;r++)t+=this.groupSizes[r];else for(r=this._cGroup-1;r>=e;r--)t-=this.groupSizes[r];return this._cGroup=e,this._cIndex=t,t},e.prototype.insertRules=function(e,t){if(e>=this.groupSizes.length){for(var r=this.groupSizes,n=r.length,o=n;e>=o;)if((o<<=1)<0)throw eE(16,"".concat(e));this.groupSizes=new Uint32Array(o),this.groupSizes.set(r),this.length=o;for(var a=n;a<o;a++)this.groupSizes[a]=0}for(var i=this.indexOfGroup(e+1),s=0,l=(a=0,t.length);a<l;a++)this.tag.insertRule(i,t[a])&&(this.groupSizes[e]++,i++,s++);s>0&&this._cGroup>e&&(this._cIndex+=s)},e.prototype.clearGroup=function(e){if(e<this.length){var t=this.groupSizes[e],r=this.indexOfGroup(e),n=r+t;this.groupSizes[e]=0;for(var o=r;o<n;o++)this.tag.deleteRule(r);t>0&&this._cGroup>e&&(this._cIndex-=t)}},e.prototype.getGroup=function(e){var t="";if(e>=this.length||0===this.groupSizes[e])return t;for(var r=this.groupSizes[e],n=this.indexOfGroup(e),o=n+r,a=n;a<o;a++)t+=this.tag.getRule(a)+V;return t},e}(),eN=new Map,eO=new Map,eW=1,eM=function(e){if(eN.has(e))return eN.get(e);for(;eO.has(eW);)eW++;var t=eW++;return eN.set(e,t),eO.set(t,e),t},eR=function(e,t){eW=t+1,eN.set(e,t),eO.set(t,e)},eD="style[".concat(B,"][").concat(G,'="').concat(Z,'"]'),eF=new RegExp("^".concat(B,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),eL=function(e){return"undefined"!=typeof ShadowRoot&&e instanceof ShadowRoot||"host"in e&&11===e.nodeType},eB=function(e){if(!e)return document;if(eL(e))return e;if("getRootNode"in e){var t=e.getRootNode();if(eL(t))return t}return document},eU=function(e,t,r){for(var n,o=r.split(","),a=0,i=o.length;a<i;a++)(n=o[a])&&e.registerName(t,n)},eG=function(e,t){for(var r,n=(null!=(r=t.textContent)?r:"").split(V),o=[],a=0,i=n.length;a<i;a++){var s=n[a].trim();if(s){var l=s.match(eF);if(l){var c=0|parseInt(l[1],10),d=l[2];0!==c&&(eR(d,c),eU(e,d,l[3]),e.getTag().insertRules(c,o)),o.length=0}else o.push(s)}}},eZ=function(e){for(var t=eB(e.options.target).querySelectorAll(eD),r=0,n=t.length;r<n;r++){var o=t[r];o&&o.getAttribute(B)!==U&&(eG(e,o),o.parentNode&&o.parentNode.removeChild(o))}};function eV(){return"undefined"!=typeof __webpack_nonce__?__webpack_nonce__:null}var eq=function(e){var t,r=document.head,n=e||r,o=document.createElement("style"),a=(t=Array.from(n.querySelectorAll("style[".concat(B,"]"))))[t.length-1],i=void 0!==a?a.nextSibling:null;o.setAttribute(B,U),o.setAttribute(G,Z);var s=eV();return s&&o.setAttribute("nonce",s),n.insertBefore(o,i),o},eH=function(){function e(e){this.element=eq(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(e){var t;if(e.sheet)return e.sheet;for(var r=null!=(t=e.getRootNode().styleSheets)?t:document.styleSheets,n=0,o=r.length;n<o;n++){var a=r[n];if(a.ownerNode===e)return a}throw eE(17)}(this.element),this.length=0}return e.prototype.insertRule=function(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch(e){return!1}},e.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},e.prototype.getRule=function(e){var t=this.sheet.cssRules[e];return t&&t.cssText?t.cssText:""},e}(),eK=function(){function e(e){this.element=eq(e),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(e,t){if(e<=this.length&&e>=0){var r=document.createTextNode(t);return this.element.insertBefore(r,this.nodes[e]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},e.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},e}(),eY=function(){function e(e){this.rules=[],this.length=0}return e.prototype.insertRule=function(e,t){return e<=this.length&&(e===this.length?this.rules.push(t):this.rules.splice(e,0,t),this.length++,!0)},e.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},e.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},e}(),eX=q,eJ={isServer:!q,useCSSOMInjection:!K},eQ=function(){function e(e,t,n){void 0===e&&(e=J),void 0===t&&(t={});var o=this;this.options=r(r({},eJ),e),this.gs=t,this.names=new Map(n),this.server=!!e.isServer,!this.server&&q&&eX&&(eX=!1,eZ(this)),eT(this,function(){for(var e=o.getTag(),t=e.length,r="",n=0;n<t;n++)!function(t){var n=eO.get(t);if(void 0===n)return;var a=o.names.get(n);if(void 0===a||!a.size)return;var i=e.getGroup(t);if(0!==i.length){var s=B+".g"+t+'[id="'+n+'"]',l="";a.forEach(function(e){e.length>0&&(l+=e+",")}),r+=i+s+'{content:"'+l+'"}'+V}}(n);return r})}return e.registerId=function(e){return eM(e)},e.prototype.rehydrate=function(){!this.server&&q&&eZ(this)},e.prototype.reconstructWithOptions=function(t,n){void 0===n&&(n=!0);var o=new e(r(r({},this.options),t),this.gs,n&&this.names||void 0);return!this.server&&q&&t.target!==this.options.target&&eB(this.options.target)!==eB(t.target)&&eZ(o),o},e.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},e.prototype.getTag=function(){var e,t,r;return this.tag||(this.tag=(t=(e=this.options).useCSSOMInjection,r=e.target,new ez(e.isServer?new eY(r):t?new eH(r):new eK(r))))},e.prototype.hasNameForId=function(e,t){var r,n;return null!=(n=null==(r=this.names.get(e))?void 0:r.has(t))&&n},e.prototype.registerName=function(e,t){eM(e);var r=this.names.get(e);r?r.add(t):this.names.set(e,new Set([t]))},e.prototype.insertRules=function(e,t,r){this.registerName(e,t),this.getTag().insertRules(eM(e),r)},e.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},e.prototype.clearRules=function(e){this.getTag().clearGroup(eM(e)),this.clearNames(e)},e.prototype.clearTag=function(){this.tag=void 0},e}(),e0=/&/g;function e1(e){if(-1===e.indexOf("}"))return!1;for(var t=e.length,r=0,n=0,o=!1,a=0;a<t;a++){var i=e.charCodeAt(a);if(0!==n||o||47!==i||42!==e.charCodeAt(a+1))if(o)42===i&&47===e.charCodeAt(a+1)&&(o=!1,a++);else if(34!==i&&39!==i||0!==a&&92===e.charCodeAt(a-1)){if(0===n){if(123===i)r++;else if(125===i&&--r<0)return!0}}else 0===n?n=i:n===i&&(n=0);else o=!0,a++}return 0!==r||0!==n}function e2(e){var t,r,n,o,a,i,s=void 0===e?J:e,d=s.options,u=void 0===d?J:d,f=s.plugins,v=void 0===f?X:f,k=function(e,t,r){return r.startsWith(a)&&r.endsWith(a)&&r.replaceAll(a,"").length>0?".".concat(o):e},A=v.slice();A.push(function(e){e.type===c&&e.value.includes("&")&&(i||(i=RegExp("\\".concat(a,"\\b"),"g")),e.props[0]=e.props[0].replace(e0,a).replace(i,k))}),u.prefix&&A.push(R),A.push(M);var T=[],L=(r=(t=A.concat((n=function(e){return T.push(e)},function(e){!e.root&&(e=e.return)&&n(e)}))).length,function(e,n,o,a){for(var i="",s=0;s<r;s++)i+=t[s](e,n,o,a)||"";return i}),B=function(e,t,r,n){void 0===t&&(t=""),void 0===r&&(r=""),void 0===n&&(n="&"),o=n,a=t,i=void 0;var s,c,d,f=function(e){if(!e1(e))return e;for(var t=e.length,r="",n=0,o=0,a=0,i=!1,s=0;s<t;s++){var l=e.charCodeAt(s);if(0!==a||i||47!==l||42!==e.charCodeAt(s+1))if(i)42===l&&47===e.charCodeAt(s+1)&&(i=!1,s++);else if(34!==l&&39!==l||0!==s&&92===e.charCodeAt(s-1)){if(0===a)if(123===l)o++;else if(125===l){if(--o<0){for(var c=s+1;c<t;){var d=e.charCodeAt(c);if(59===d||10===d)break;c++}c<t&&59===e.charCodeAt(c)&&c++,o=0,s=c-1,n=c;continue}0===o&&(r+=e.substring(n,s+1),n=s+1)}else 59===l&&0===o&&(r+=e.substring(n,s+1),n=s+1)}else 0===a?a=l:a===l&&(a=0);else i=!0,s++}if(n<t){var u=e.substring(n);e1(u)||(r+=u)}return r}(function(e){if(-1===e.indexOf("//"))return e;for(var t=e.length,r=[],n=0,o=0,a=0,i=0;o<t;){var s=e.charCodeAt(o);if(34!==s&&39!==s||0!==o&&92===e.charCodeAt(o-1))if(0===a)if(47===s&&o+1<t&&42===e.charCodeAt(o+1)){for(o+=2;o+1<t&&(42!==e.charCodeAt(o)||47!==e.charCodeAt(o+1));)o++;o+=2}else if(40===s&&o>=3&&108==(32|e.charCodeAt(o-1))&&114==(32|e.charCodeAt(o-2))&&117==(32|e.charCodeAt(o-3)))i=1,o++;else if(i>0)41===s?i--:40===s&&i++,o++;else if(42===s&&o+1<t&&47===e.charCodeAt(o+1))o>n&&r.push(e.substring(n,o)),n=o+=2;else if(47===s&&o+1<t&&47===e.charCodeAt(o+1)){for(o>n&&r.push(e.substring(n,o));o<t&&10!==e.charCodeAt(o);)o++;n=o}else o++;else o++;else 0===a?a=s:a===s&&(a=0),o++}return 0===n?e:(n<t&&r.push(e.substring(n)),r.join(""))}(e)),v=(d=function e(t,r,n,o,a,i,s,c,d){for(var u,f,v,k,j=0,A=0,T=s,W=0,M=0,R=0,L=1,B=1,U=1,G=0,Z="",V=a,q=i,H=o,K=Z;B;)switch(R=G,G=E()){case 40:if(108!=R&&58==y(K,T-1)){-1!=m(K+=g(O(G),"&","&\f"),"&\f",p(j?c[j-1]:0))&&(U=-1);break}case 34:case 39:case 91:K+=O(G);break;case 9:case 10:case 13:case 32:K+=function(e){for(;$=z();)if($<33)E();else break;return N(e)>2||N($)>3?"":" "}(R);break;case 92:K+=function(e,t){for(var r;--t&&E()&&!($<48)&&!($>102)&&(!($>57)||!($<65))&&(!($>70)||!($<97)););return r=P+(t<6&&32==z()&&32==E()),b(_,e,r)}(P-1,7);continue;case 47:switch(z()){case 42:case 47:x((u=function(e,t){for(;E();)if(e+$===57)break;else if(e+$===84&&47===z())break;return"/*"+b(_,t,P-1)+"*"+h(47===e?e:E())}(E(),P),f=r,v=n,k=d,I(u,f,v,l,h($),b(u,2,-2),0,k)),d),(5==N(R||1)||5==N(z()||1))&&w(K)&&" "!==b(K,-1,void 0)&&(K+=" ");break;default:K+="/"}break;case 123*L:c[j++]=w(K)*U;case 125*L:case 59:case 0:switch(G){case 0:case 125:B=0;case 59+A:-1==U&&(K=g(K,/\f/g,"")),M>0&&(w(K)-T||0===L&&47===R)&&x(M>32?F(K+";",o,n,T-1,d):F(g(K," ","")+";",o,n,T-2,d),d);break;case 59:K+=";";default:if(x(H=D(K,r,n,j,A,a,c,Z,V=[],q=[],T,i),i),123===G)if(0===A)e(K,r,H,H,V,i,T,c,q);else{switch(W){case 99:if(110===y(K,3))break;case 108:if(97===y(K,2))break;default:A=0;case 100:case 109:case 115:}A?e(t,H,H,o&&x(D(t,H,H,0,0,a,c,Z,a,V=[],T,q),q),a,q,T,c,o?V:q):e(K,H,H,H,[""],q,0,c,q)}}j=A=M=0,L=U=1,Z=K="",T=s;break;case 58:T=1+w(K),M=R;default:if(L<1){if(123==G)--L;else if(125==G&&0==L++&&125==($=P>0?y(_,--P):0,C--,10===$&&(C=1,S--),$))continue}switch(K+=h(G),G*L){case 38:U=A>0?1:(K+="\f",-1);break;case 44:c[j++]=(w(K)-1)*U,U=1;break;case 64:45===z()&&(K+=O(E())),W=z(),A=T=w(Z=K+=function(e){for(;!N(z());)E();return b(_,e,P)}(P)),G++;break;case 45:45===R&&2==w(K)&&(L=0)}}return i}("",null,null,null,[""],(c=s=r||t?"".concat(r," ").concat(t," { ").concat(f," }"):f,S=C=1,j=w(_=c),P=0,s=[]),0,[0],s),_="",d);return u.namespace&&(v=function e(t,r){return t.map(function(t){return"rule"===t.type&&(t.value="".concat(r," ").concat(t.value),t.value=t.value.replaceAll(",",",".concat(r," ")),t.props=t.props.map(function(e){return"".concat(r," ").concat(e)})),Array.isArray(t.children)&&"@keyframes"!==t.type&&(t.children=e(t.children,r)),t})}(v,u.namespace)),T=[],W(v,L),T};return B.hash=v.length?v.reduce(function(e,t){return t.name||eE(15),el(e,t.name)},5381).toString():"",B}var e3=new eQ,e5=e2(),e4={shouldForwardProp:void 0,styleSheet:e3,stylis:e5},e6=H?{Provider:function(e){return e.children},Consumer:function(e){return(0,e.children)(e4)}}:o.default.createContext(e4),e8=(e6.Consumer,H?{Provider:function(e){return e.children},Consumer:function(e){return(0,e.children)(void 0)}}:o.default.createContext(void 0));function e7(){return H?e4:o.default.useContext(e6)}function e9(e){if(H||!o.default.useMemo)return e.children;var t=e7().styleSheet,r=o.default.useMemo(function(){var r=t;return e.sheet?r=e.sheet:e.target&&(r=r.reconstructWithOptions({target:e.target},!1)),e.disableCSSOMInjection&&(r=r.reconstructWithOptions({useCSSOMInjection:!1})),r},[e.disableCSSOMInjection,e.sheet,e.target,t]),n=o.default.useMemo(function(){return e2({options:{namespace:e.namespace,prefix:e.enableVendorPrefixes},plugins:e.stylisPlugins})},[e.enableVendorPrefixes,e.namespace,e.stylisPlugins]),a=o.default.useMemo(function(){return{shouldForwardProp:e.shouldForwardProp,styleSheet:r,stylis:n}},[e.shouldForwardProp,r,n]);return o.default.createElement(e6.Provider,{value:a},o.default.createElement(e8.Provider,{value:n},e.children))}var te=function(){function e(e,t){var r=this;this.inject=function(e,t){void 0===t&&(t=e5);var n=r.name+t.hash;e.hasNameForId(r.id,n)||e.insertRules(r.id,n,t(r.rules,n,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=t,eT(this,function(){throw eE(12,String(r.name))})}return e.prototype.getName=function(e){return void 0===e&&(e=e5),this.name+e.hash},e}();function tt(e){for(var t="",r=0;r<e.length;r++){var n=e[r];if(1===r&&"-"===n&&"-"===e[0])return e;n>="A"&&n<="Z"?t+="-"+n.toLowerCase():t+=n}return t.startsWith("ms-")?"-"+t:t}var tr=function(e){return null==e||!1===e||""===e},tn=function(e){var t=[];for(var r in e){var o=e[r];e.hasOwnProperty(r)&&!tr(o)&&(Array.isArray(o)&&o.isCss||eP(o)?t.push("".concat(tt(r),":"),o,";"):eA(o)?t.push.apply(t,n(n(["".concat(r," {")],tn(o),!1),["}"],!1)):t.push("".concat(tt(r),": ").concat(null==o||"boolean"==typeof o||""===o?"":"number"!=typeof o||0===o||r in L||r.startsWith("--")?String(o).trim():"".concat(o,"px"),";")))}return t};function to(e,t,r,n,o){if(void 0===o&&(o=[]),"string"==typeof e)return e&&o.push(e),o;if(tr(e))return o;if(e$(e))return o.push(".".concat(e.styledComponentId)),o;if(eP(e))return!eP(e)||e.prototype&&e.prototype.isReactComponent||!t?(o.push(e),o):to(e(t),t,r,n,o);if(e instanceof te)return r?(e.inject(r,n),o.push(e.getName(n))):o.push(e),o;if(eA(e)){for(var a=tn(e),i=0;i<a.length;i++)o.push(a[i]);return o}if(!Array.isArray(e))return o.push(e.toString()),o;for(i=0;i<e.length;i++)to(e[i],t,r,n,o);return o}function ta(e){for(var t=0;t<e.length;t+=1){var r=e[t];if(eP(r)&&!e$(r))return!1}return!0}var ti=ec(Z),ts=function(){function e(e,t,r){this.rules=e,this.staticRulesId="",this.isStatic=(void 0===r||r.isStatic)&&ta(e),this.componentId=t,this.baseHash=el(ti,t),this.baseStyle=r,eQ.registerId(t)}return e.prototype.generateAndInjectStyles=function(e,t,r){var n=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,t,r).className:"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&t.hasNameForId(this.componentId,this.staticRulesId))n=e_(n,this.staticRulesId);else{var o=eI(to(this.rules,e,t,r)),a=ei(el(this.baseHash,o)>>>0);if(!t.hasNameForId(this.componentId,a)){var i=r(o,".".concat(a),void 0,this.componentId);t.insertRules(this.componentId,a,i)}n=e_(n,a),this.staticRulesId=a}else{for(var s=el(this.baseHash,r.hash),l="",c=0;c<this.rules.length;c++){var d=this.rules[c];if("string"==typeof d)l+=d;else if(d){var u=eI(to(d,e,t,r));s=el(el(s,String(c)),u),l+=u}}if(l){var p=ei(s>>>0);if(!t.hasNameForId(this.componentId,p)){var h=r(l,".".concat(p),void 0,this.componentId);t.insertRules(this.componentId,p,h)}n=e_(n,p)}}return{className:n,css:"undefined"==typeof window?t.getTag().getGroup(eM(this.componentId)):""}},e}(),tl=H?{Provider:function(e){return e.children},Consumer:function(e){return(0,e.children)(void 0)}}:o.default.createContext(void 0);tl.Consumer;var tc={};function td(e,t,n){var a,i,s,l,c=e$(e),d=!eu(e),u=t.attrs,p=void 0===u?X:u,h=t.componentId,f=void 0===h?(a=t.displayName,i=t.parentComponentId,tc[s="string"!=typeof a?"sc":en(a)]=(tc[s]||0)+1,l="".concat(s,"-").concat(ed(Z+s+tc[s])),i?"".concat(i,"-").concat(l):l):h,v=t.displayName,g=void 0===v?eu(e)?"styled.".concat(e):"Styled(".concat(e.displayName||e.name||"Component",")"):v,m=t.displayName&&t.componentId?"".concat(en(t.displayName),"-").concat(t.componentId):t.componentId||f,y=c&&e.attrs?e.attrs.concat(p).filter(Boolean):p,b=t.shouldForwardProp;if(c&&e.shouldForwardProp){var w=e.shouldForwardProp;if(t.shouldForwardProp){var x=t.shouldForwardProp;b=function(e,t){return w(e,t)&&x(e,t)}}else b=w}var k=new ts(n,m,c?e.componentStyle:void 0);function S(e,t){return function(e,t,n){var a,i=e.attrs,s=e.componentStyle,l=e.defaultProps,c=e.foldedComponentIds,d=e.styledComponentId,u=e.target,p=H?void 0:o.default.useContext(tl),h=e7(),f=e.shouldForwardProp||h.shouldForwardProp,v=Q(t,p,l)||(H?void 0:J),g=function(e,t,n){for(var o,a=r(r({},t),{className:void 0,theme:n}),i=0;i<e.length;i+=1){var s=eP(o=e[i])?o(a):o;for(var l in s)"className"===l?a.className=e_(a.className,s[l]):"style"===l?a.style=r(r({},a.style),s[l]):a[l]=s[l]}return"className"in t&&"string"==typeof t.className&&(a.className=e_(a.className,t.className)),a}(i,t,v),m=g.as||u,y={};for(var b in g)void 0===g[b]||"$"===b[0]||"as"===b||"theme"===b&&g.theme===v||("forwardedAs"===b?y.as=g.forwardedAs:f&&!f(b,m)||(y[b]=g[b]));var w=(a=e7(),s.generateAndInjectStyles(g,a.styleSheet,a.stylis)),x=w.className,k=w.css,S=e_(c,d);x&&(S+=" "+x),g.className&&(S+=" "+g.className),y[eu(m)&&!ee.has(m)?"class":"className"]=S,n&&(y.ref=n);var C=(0,o.createElement)(m,y);return H&&k?o.default.createElement(o.default.Fragment,null,o.default.createElement("style",{precedence:"styled-components",href:"sc-".concat(d,"-").concat(x),children:k}),C):C}(C,e,t)}S.displayName=g;var C=o.default.forwardRef(S);return C.attrs=y,C.componentStyle=k,C.displayName=g,C.shouldForwardProp=b,C.foldedComponentIds=c?e_(e.foldedComponentIds,e.styledComponentId):"",C.styledComponentId=m,C.target=c?e.target:e,Object.defineProperty(C,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(t){this._foldedDefaultProps=c?function(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];for(var n=0;n<t.length;n++)!function e(t,r,n){if(void 0===n&&(n=!1),!n&&!eA(t)&&!Array.isArray(t))return r;if(Array.isArray(r))for(var o=0;o<r.length;o++)t[o]=e(t[o],r[o]);else if(eA(r))for(var o in r)t[o]=e(t[o],r[o]);return t}(e,t[n],!0);return e}({},e.defaultProps,t):t}}),eT(C,function(){return".".concat(C.styledComponentId)}),d&&function e(t,r,n){if("string"!=typeof r){if(ej){var o=eC(r);o&&o!==ej&&e(t,o,n)}var a=ex(r);ek&&(a=a.concat(ek(r)));for(var i=eb(t),s=eb(r),l=0;l<a.length;++l){var c=a[l];if(!(c in eg||n&&n[c]||s&&c in s||i&&c in i)){var d=eS(r,c);try{ew(t,c,d)}catch(e){}}}}return t}(C,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),C}function tu(e,t){for(var r=[e[0]],n=0,o=t.length;n<o;n+=1)r.push(t[n],e[n+1]);return r}var tp=function(e){return Object.assign(e,{isCss:!0})};function th(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];return eP(e)||eA(e)?tp(to(tu(X,n([e],t,!0)))):0===t.length&&1===e.length&&"string"==typeof e[0]?to(e):tp(to(tu(e,t)))}var tf=function(e){return function e(t,o,a){if(void 0===a&&(a=J),!o)throw eE(1,o);var i=function(e){for(var r=[],i=1;i<arguments.length;i++)r[i-1]=arguments[i];return t(o,a,th.apply(void 0,n([e],r,!1)))};return i.attrs=function(n){return e(t,o,r(r({},a),{attrs:Array.prototype.concat(a.attrs,n).filter(Boolean)}))},i.withConfig=function(n){return e(t,o,r(r({},a),n))},i}(td,e)};ee.forEach(function(e){tf[e]=tf(e)});var tv=function(){function e(e,t){this.rules=e,this.componentId=t,this.isStatic=ta(e),eQ.registerId(this.componentId+1)}return e.prototype.createStyles=function(e,t,r,n){var o=n(eI(to(this.rules,t,r,n)),""),a=this.componentId+e;r.insertRules(a,a,o)},e.prototype.removeStyles=function(e,t){t.clearRules(this.componentId+e)},e.prototype.renderStyles=function(e,t,r,n){e>2&&eQ.registerId(this.componentId+e);var o=this.componentId+e;this.isStatic?r.hasNameForId(o,o)||this.createStyles(e,t,r,n):(this.removeStyles(e,r),this.createStyles(e,t,r,n))},e}();function tg(e){for(var t=[],a=1;a<arguments.length;a++)t[a-1]=arguments[a];var i=th.apply(void 0,n([e],t,!1)),s="sc-global-".concat(ed(JSON.stringify(i))),l=new tv(i,s),c=new WeakMap,d=function(e){var t=e7(),r=H?void 0:o.default.useContext(tl),n=c.get(t.styleSheet);if(void 0===n&&(n=t.styleSheet.allocateGSInstance(s),c.set(t.styleSheet,n)),"undefined"!=typeof window&&t.styleSheet.server||u(n,e,t.styleSheet,r,t.stylis),H||o.default.useLayoutEffect(function(){return t.styleSheet.server||u(n,e,t.styleSheet,r,t.stylis),function(){var e;l.removeStyles(n,t.styleSheet),e=t.styleSheet.options.target,"undefined"!=typeof document&&(null!=e?e:document).querySelectorAll('style[data-styled-global="'.concat(s,'"]')).forEach(function(e){return e.remove()})}},[n,e,t.styleSheet,r,t.stylis]),H){var a=s+n,i="undefined"==typeof window?t.styleSheet.getTag().getGroup(eM(a)):"";if(i)return o.default.createElement("style",{key:"".concat(s,"-").concat(n),"data-styled-global":s,children:i})}return null};function u(e,t,n,o,a){if(l.isStatic)l.renderStyles(e,Y,n,a);else{var i=r(r({},t),{theme:Q(t,o,d.defaultProps)});l.renderStyles(e,i,n,a)}}return o.default.memo(d)}function tm(e){for(var t=[],r=1;r<arguments.length;r++)t[r-1]=arguments[r];var o=eI(th.apply(void 0,n([e],t,!1)));return new te(ed(o),o)}function ty(){var e=this;this._emitSheetCSS=function(){var t=e.instance.toString();if(!t)return"";var r=eV(),n=eI([r&&'nonce="'.concat(r,'"'),"".concat(B,'="true"'),"".concat(G,'="').concat(Z,'"')].filter(Boolean)," ");return"<style ".concat(n,">").concat(t,"</style>")},this.getStyleTags=function(){if(e.sealed)throw eE(2);return e._emitSheetCSS()},this.getStyleElement=function(){if(e.sealed)throw eE(2);var t,n=e.instance.toString();if(!n)return[];var a=((t={})[B]="",t[G]=Z,t.dangerouslySetInnerHTML={__html:n},t),i=eV();return i&&(a.nonce=i),[o.default.createElement("style",r({},a,{key:"sc-0-0"}))]},this.seal=function(){e.sealed=!0},this.instance=new eQ({isServer:!0}),this.sealed=!1}ty.prototype.collectStyles=function(e){if(this.sealed)throw eE(2);return o.default.createElement(e9,{sheet:this.instance},e)},ty.prototype.interleaveWithNodeStream=function(e){throw eE(3)},e.s(["createGlobalStyle",()=>tg,"css",()=>th,"keyframes",()=>tm,"styled",()=>tf],997053)},656486,291842,e=>{"use strict";var t=e.i(271645),r=e.i(803959),n=e.i(625436),o=e.i(997053),a=e.i(843476),i=e.i(33750),s=e.i(511573),l=e.i(197845),c=e.i(796516),d=e.i(823838),u=e.i(675107),p=e.i(200316),h=e.i(309682),f=e.i(110163);let v=(e,t,r,n)=>{let o=Number(e),a=t.find(e=>e.id===o);if(!a)throw new p.P(`Unsupported chainId ${e}`,4901);return(0,h.createPublicClient)({transport:(0,f.http)(g(a,r,n.appId)),chain:a})},g=(e,t,r)=>{let n,o=e.id,a=Number(e.id);if(e.rpcUrls.privyWalletOverride&&e.rpcUrls.privyWalletOverride.http[0])n=e.rpcUrls.privyWalletOverride.http[0];else if(t.rpcUrls&&t.rpcUrls[a])n=t.rpcUrls[a];else if(e.rpcUrls.privy?.http[0]){let t=new URL(e.rpcUrls.privy.http[0]);t.searchParams.append("privyAppId",r),n=t.toString()}else n=e.rpcUrls.public?.http[0]?e.rpcUrls.public.http[0]:e.rpcUrls.default?.http[0];if(!n)throw new p.P(`No RPC url found for ${o}`);return n};e.s(["a",()=>g,"g",()=>v],291842);var m=e.i(550215),y=e.i(360414);let b=(0,r.create)(()=>({listings:[],loading:!1})),w=b.setState,x=e=>b.getState().listings.find(({slug:t})=>j(t)===j(e)),k=e=>{let t;try{t=new URL(e).hostname}catch(e){return}return b.getState().listings.find(({homepage:e})=>{let r;try{r=new URL(e).hostname}catch(e){return!1}return t.includes(r)})},S=(e=!0)=>{let r=(0,n.u)(),o=b(e=>e.listings),a=b(e=>e.loading),i=!!o.length;return(0,t.useEffect)(()=>{e&&!i&&(w({listings:[],loading:!0}),(async e=>{let t=new URL("v3/wallets","https://explorer-api.walletconnect.com");t.searchParams.append("projectId",e);let r=await fetch(t);return r.ok?Object.values((await r.json()).listings).sort(({slug:e},{slug:t})=>"rainbow"===e&&"metamask"===t?1:"metamask"===e||"rainbow"===e?-1:1):(console.debug(`Failed to fetch WalletConnect listings: ${await r.text().catch(()=>"No response.")}`),[])})(r.walletConnectCloudProjectId).then(e=>w({listings:e,loading:!1})).catch(e=>{console.error(e),w({listings:[],loading:!1})}))},[e,i,r.walletConnectCloudProjectId]),{listings:o,loading:a}},C=e=>{let{listings:t}=S();return t.find(({slug:t})=>j(t)===j(e))};function j(e){return"cryptocom"===e?"cryptocom-defi":"binance"===e?"binance-defi":e.replace(/[-_]wallet$/,"")}function P(e){return["wallet_connect","backpack","binance","binanceus","bitget_wallet","bybit_wallet","cryptocom","haha_wallet","jupiter","metamask","okx_wallet","phantom","rabby_wallet","rainbow","ronin_wallet","safe","solflare","uniswap","zerion","kraken_wallet"].some(t=>e?.includes(t))}let $=e=>e.isApexWallet?"Apex Wallet":e.isAvalanche?"Core Wallet":e.isBackpack?"Backpack":e.isBifrost?"Bifrost Wallet":e.isBitKeep?"BitKeep":e.isBitski?"Bitski":e.isBlockWallet?"BlockWallet":e.isBraveWallet?"Brave Wallet":e.isClover?"Clover":e.isCoin98?"Coin98 Wallet":e.isCoinbaseWallet?"Coinbase Wallet":e.isDawn?"Dawn Wallet":e.isDefiant?"Defiant":e.isDesig?"Desig Wallet":e.isEnkrypt?"Enkrypt":e.isExodus?"Exodus":e.isFordefi?"Fordefi":e.isFrame?"Frame":e.isFrontier?"Frontier Wallet":e.isGamestop?"GameStop Wallet":e.isHaqqWallet?"HAQQ Wallet":e.isHyperPay?"HyperPay Wallet":e.isImToken?"ImToken":e.isHaloWallet?"Halo Wallet":e.isKuCoinWallet?"KuCoin Wallet":e.isMathWallet?"MathWallet":e.isNovaWallet?"Nova Wallet":e.isOkxWallet||e.isOKExWallet?"OKX Wallet":e.isOneInchIOSWallet||e.isOneInchAndroidWallet?"1inch Wallet":e.isOneKey?"OneKey Wallet":e.isOpera?"Opera":e.isPhantom||"isPhantom"in e?"Phantom":e.isPortal?"Ripio Portal":e.isRabby?"Rabby Wallet":e.isRainbow?"Rainbow":e.isSafePal?"SafePal Wallet":e.isStatus?"Status":e.isSubWallet?"SubWallet":e.isTalisman?"Talisman":e.isTally||e.isTaho?"Taho":e.isTokenPocket?"TokenPocket":e.isTokenary?"Tokenary":e.isTrust||e.isTrustWallet?"Trust Wallet":e.isTTWallet?"TTWallet":e.isXDEFI?"XDEFI Wallet":e.isZeal?"Zeal":e.isZerion?"Zerion":e.isMetaMask?"MetaMask":void 0,_=(e,t)=>{if(!e.isMetaMask)return!1;if(e.isMetaMask&&!t)return!0;if(e.isBraveWallet&&!e._events&&!e._state||"MetaMask"!==$(e))return!1;if(e.providers){for(let t of e.providers)if(!_(t))return!1}return!0},I=()=>{let e=window;if(!e.ethereum)return!1;if(e.ethereum.isCoinbaseWallet)return!0;if(e.ethereum.providers){for(let t of e.ethereum.providers)if(t&&t.isCoinbaseWallet)return!0}return!1},A=(e,t)=>{let r=[],n=[];for(let[o,a]of e.entries())o<t?r.push(a):n.push(a);return[r,n]},T=e=>!!String(e).toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/),E=(e,t)=>{let r=e.slice(0),n=[];for(;r.length;)n.push(r.splice(0,t));return n},z=(e,t=3,r=4,n="ethereum")=>{if(!e)return"";let o=2*("ethereum"===n);return t+r+o+3>=e.length?e:`${e.slice(0,o+t)}...${e.slice(e.length-r,e.length)}`},N=(e,t=3,r=4)=>z(e,t,r,"solana"),O=e=>new Promise(t=>setTimeout(t,e));function W(e,{interval:t=100,timeout:r=5e3}={}){return new Promise((n,o)=>{let a,i=0,s=()=>{i>=r?o("Max attempts reached without result"):(a=e(),i+=t,null==a?setTimeout(s,t):n(a))};s()})}let M=(e,t={})=>{let r=t.delayMs||150,n=t.maxAttempts||270;return new Promise(async(o,a)=>{let i=!1,s=0;for(;!i&&s<n;){if(t.abortSignal?.aborted)return;e().then(e=>{i=!0,o(e)},(...e)=>{i=!0,a(...e)}),s+=1,await O(r)}i||a(Error("Exceeded max attempts before resolving function"))})},R=e=>e.replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g,""),D=e=>"string"==typeof e?e:"0x"+e.toString(16);async function F({store:e,walletList:t,externalWalletConfig:r,walletChainType:n,timeout:o=3e3}){let a=!1,i=window;return new Promise(s=>{function l(){if(a)return;a=!0,window.removeEventListener("ethereum#initialized",l);let o=e.getProviders();console.debug("Detected injected providers:",o.map(e=>e.info));let i=[];for(let e of o)t.includes("coinbase_wallet")&&"com.coinbase.wallet"===e.info.rdns||"solana-only"===n&&"app.phantom"===e.info.rdns||i.push({type:e.info.name.toLowerCase().replace(/\s/g,"_"),eip6963InjectedProvider:e});if("solana-only"!==n)for(let e of function(){let e=window,t=e.ethereum;if(!t)return[];let r=[];if(t.providers?.length)for(let e of t.providers)e&&r.push(e);return r.push(e.ethereum),r}()){let t=$(e);if(!o.some(e=>e.info.name===t)){if(_(e,!0)&&!i.find(e=>"metamask"===e.type)){i.push({type:"metamask",legacyInjectedProvider:e});continue}if("Phantom"===t&&!i.find(e=>"phantom"===e.type)){i.push({type:"phantom",legacyInjectedProvider:e});continue}if("Coinbase Wallet"===t&&!i.find(e=>"coinbase_wallet"===e.type&&"smartWalletOnly"!==r.coinbaseWallet?.config?.preference?.options)){i.push({type:"coinbase_wallet",legacyInjectedProvider:e});continue}i.find(e=>"unknown_browser_extension"===e.type)||i.push({type:"unknown_browser_extension",legacyInjectedProvider:e})}}s(i)}i.ethereum?l():(window.addEventListener("ethereum#initialized",l,{once:!0}),setTimeout(()=>{l()},o))})}function L(e){return`eip155:${String(Number(e))}`}let B=(e,t,r,n)=>{let o=Number(e),a=t.find(e=>e.id===o);if(!a)throw new p.P(`Unsupported chainId ${e}`,4901);return g(a,r,n)},U=(e,t)=>{let r=Number(e),n=t.find(e=>e.id===r);if(!n)throw new p.P(`Unsupported chainId ${e}`,4901);return n.blockExplorers?.default.url},G=e=>{let t={name:"string",version:"string",chainId:"uint256",verifyingContract:"address",salt:"bytes32"},r=e.types.EIP712Domain??Object.entries(e.domain).map(([e,r])=>{if(null!=r&&"string"==typeof e&&e in t)return{name:e,type:t[e]}}).filter(e=>void 0!==e);return{...e,types:{...e.types,EIP712Domain:r}}};function Z(e,{min:t,max:r}){return Math.min(Math.max(e,t),r)}let V=e=>e?.map(e=>({signer_id:e.signerId,override_policy_ids:e.policyIds}));function q(e){return"ethereum"===e.type}function H(e,t){if(e.length!==t.length)return!1;for(let r=0;r<e.length;r++){let n=e[r],o=t[r];if(n?.address!==o?.address||n&&o&&q(n)&&q(o)&&n?.chainId!==o?.chainId||n?.connectorType!==o?.connectorType||n?.connectedAt!==o?.connectedAt||n?.walletClientType!==o?.walletClientType||n?.isConnected!==o?.isConnected||n?.linked!==o?.linked)return!1}return!0}let K=(e,t)=>e.rpcTimeouts&&e.rpcTimeouts[t]||n.n;function Y(e){return"ethereum"===e.chainType}class X extends s.c{buildConnectedWallet(e,t,r,n){let o=async()=>!!this.wallets.find(t=>(0,d.getAddress)(t.address)===(0,d.getAddress)(e));return{type:"ethereum",address:(0,d.getAddress)(e),chainId:t,meta:r,imported:n,switchChain:async r=>{let n,o,a=this.wallets.find(t=>(0,d.getAddress)(t.address)===(0,d.getAddress)(e))?.chainId;if(!a)throw new p.P("Unable to determine current chainId.");if("number"==typeof r?(n=`0x${r.toString(16)}`,o=r):(n=r,o=Number(r)),a===L(n))return;let i=this.chains.find(e=>e.id===o);if(!i)throw new p.P(`Unsupported chainId: ${r}`);let s=async()=>{await this.proxyProvider.request({method:"wallet_switchEthereumChain",params:[{chainId:n}]})};try{return await s()}catch(e){if(((e,t)=>{switch(t){case"coinbase_wallet":case"base_account":return e.message.includes("addEthereumChain");case"rabby_wallet":return e.message.includes("Unrecognized chain ID");default:return 4902===e.code||e.message?.includes("4902")}})(e,this.walletClientType))return"rabby_wallet"===this.walletClientType&&await O(300),await this.proxyProvider.request({method:"wallet_addEthereumChain",params:[{chainId:n,chainName:i.name,nativeCurrency:i.nativeCurrency,rpcUrls:[i.rpcUrls.default?.http[0]??""],blockExplorerUrls:[i.blockExplorers?.default.url??""]}]}),s();if("rainbow"===this.walletClientType&&e.message?.includes("wallet_switchEthereumChain"))throw new p.P(`Rainbow does not support the chainId ${t}`);throw e}},connectedAt:Date.now(),walletClientType:this.walletClientType,connectorType:this.connectorType,isConnected:o,getEthereumProvider:async()=>{if(!await o())throw new p.P("Wallet is not currently connected.");return this.proxyProvider},sign:async e=>{if(!await o())throw new p.P("Wallet is not currently connected.");return await this.sign(e)},disconnect:()=>{this.disconnect()}}}async syncAccounts(e){let t,r=e;try{if(void 0===r){let e=await M(()=>this.proxyProvider.request({method:"eth_accounts"}),{maxAttempts:10,delayMs:500});console.debug(`eth_accounts for ${this.walletClientType}:`,e),Array.isArray(e)&&(r=e)}}catch(e){console.debug("Wallet did not respond to eth_accounts. Defaulting to prefetched accounts.",e)}if(!r||!Array.isArray(r)||r.length<=0||!r[0])return;let o=r[0];if(!(0,c.isAddress)(o))return void console.warn(`Invalid ethereum address reported by ${this.walletClientType}: ${o}`);let a=(0,d.getAddress)(o),i=[];if("privy"===this.walletClientType){let e=s.s.get((0,n.o)(a));this.chains.find(t=>t.id===Number(e))||(s.s.del((0,n.o)(a)),e=null),t=e||`0x${this.defaultChain.id.toString(16)}`;try{await this.proxyProvider.request({method:"wallet_switchEthereumChain",params:[{chainId:t}]})}catch(e){console.warn(`Unable to switch embedded wallet to chain ID ${t} on initialization`)}}else try{let e=await M(()=>this.proxyProvider.request({method:"eth_chainId"}),{maxAttempts:10,delayMs:500});if(console.debug(`eth_chainId for ${this.walletClientType}:`,e),"string"==typeof e)t=e;else{if("number"!=typeof e)throw Error("Invalid chainId returned from provider");t=`0x${e.toString(16)}`}}catch(e){console.warn(`Failed to get chainId from provider, defaulting to ${n.p}`,e),t=n.p}let l=L(t);if(!i.find(e=>(0,d.getAddress)(e.address)===a)){let e={name:this.walletBranding.name,icon:"string"==typeof this.walletBranding.icon?this.walletBranding.icon:void 0,id:this.walletBranding.id};i.push(this.buildConnectedWallet((0,d.getAddress)(o),l,e,"embedded_imported"===this.connectorType))}H(i,this.wallets)||(this.wallets=i,this.emit("walletsUpdated"))}async getConnectedWallet(){let e=await this.proxyProvider.request({method:"eth_accounts"});return this.wallets.sort((e,t)=>t.connectedAt-e.connectedAt).find(t=>e.find(e=>(0,d.getAddress)(e)===(0,d.getAddress)(t.address)))||null}async isConnected(){let e=await this.proxyProvider.request({method:"eth_accounts"});return Array.isArray(e)&&e.length>0}async sign(e){return await this.connect({showPrompt:!1}),this.proxyProvider.request({method:"personal_sign",params:[(0,u.toHex)(e),this.wallets[0]?.address]})}subscribeListeners(){this.proxyProvider.on("accountsChanged",this.onAccountsChanged),this.proxyProvider.on("chainChanged",this.onChainChanged),this.proxyProvider.on("disconnect",this.onDisconnect),this.proxyProvider.on("connect",this.onConnect)}unsubscribeListeners(){this.proxyProvider.removeListener("accountsChanged",this.onAccountsChanged),this.proxyProvider.removeListener("chainChanged",this.onChainChanged),this.proxyProvider.removeListener("disconnect",this.onDisconnect),this.proxyProvider.removeListener("connect",this.onConnect)}constructor(e,t,r,o){super(e),this.chainType="ethereum",this.onAccountsChanged=e=>{0===e.length?this.onDisconnect():this.syncAccounts(e)},this.onChainChanged=e=>{this.wallets.forEach(t=>{t.chainId=L(e),"privy"===this.walletClientType&&s.s.put((0,n.o)(t.address),e)}),this.emit("walletsUpdated")},this.onDisconnect=()=>{this.connected=!1,this.wallets=[],this.emit("walletsUpdated")},this.onConnect=async()=>{"base_account"===this.connectorType&&this.connected||(this.connected=!0,"coinbase_wallet"===this.connectorType&&await O(500),this.syncAccounts())},this.wallets=[],this.walletClientType=e,this.chains=t,this.defaultChain=r,this.rpcConfig=o,this.rpcTimeoutDuration=K(o,e),this.connected=!1,this.initialized=!1}}class J{on(e,t){if(this.walletProvider)return this.walletProvider.on(e,t);this._subscriptions.push({eventName:e,listener:t})}async request(e){if(!this.walletProvider)throw new p.P(`A wallet request of type ${e.method} was made before setting a wallet provider.`);return Promise.race([this.walletProvider.request(e),this.walletTimeout()]).catch(e=>{throw(0,s.f)(e)})}constructor(e,t){this.removeListener=(e,t)=>{if(this.walletProvider)try{return this.walletProvider.removeListener(e,t)}catch(e){console.warn("Unable to remove wallet provider listener")}},this.walletTimeout=(e=new s.d,t=this.rpcTimeoutDuration)=>new Promise((r,n)=>setTimeout(()=>{n(e)},t)),this.setWalletProvider=e=>{this.walletProvider&&this._subscriptions.forEach(e=>{this.removeListener(e.eventName,e.listener)}),this.walletProvider=e,this._subscriptions.forEach(e=>{this.walletProvider?.on(e.eventName,e.listener)})},this.walletProvider=e,this.rpcTimeoutDuration=t||n.n,this._subscriptions=[]}}let Q=e=>{let[r,n]=(0,t.useState)("auto");return(0,t.useEffect)(()=>{let t=new ResizeObserver(e=>{n(e[0]?.contentRect.height??"auto")});return e.current&&t.observe(e.current),()=>{e.current&&t.unobserve(e.current)}},[e.current]),r},ee=o.styled.div`
  text-align: left;
  flex-grow: 1;
`,et=o.styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  flex-grow: 1;
`,er=o.styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  /* for Internet Explorer, Edge */
  -ms-overflow-style: none;

  /* for Firefox */
  scrollbar-width: none;

  /* for Chrome, Safari, and Opera */
  &::-webkit-scrollbar {
    display: none;
  }
`,en=(0,o.styled)(er)`
  ${e=>"light"===e.$colorScheme?"background: linear-gradient(var(--privy-color-background), var(--privy-color-background) 70%) bottom, linear-gradient(rgba(0, 0, 0, 0) 20%, rgba(0, 0, 0, 0.06)) bottom;":"dark"===e.$colorScheme?"background: linear-gradient(var(--privy-color-background), var(--privy-color-background) 70%) bottom, linear-gradient(rgba(255, 255, 255, 0) 20%, rgba(255, 255, 255, 0.06)) bottom;":void 0}

  background-repeat: no-repeat;
  background-size:
    100% 32px,
    100% 16px;
  background-attachment: local, scroll;
  max-height: 400px;
  overflow-y: auto;
  scrollbar-width: none;
  padding: 3px;
`,eo=o.css`
  && {
    width: 100%;
    font-size: 16px;
    line-height: 24px;
    min-height: 56px;

    /* Tablet and Up */
    @media (min-width: 440px) {
      font-size: 14px;
    }

    display: flex;
    gap: 12px;
    align-items: center;
    color: var(--privy-color-foreground);

    padding: 10px 12px;
    border: 1px solid var(--privy-color-foreground-4) !important;
    border-radius: var(--privy-border-radius-md);
    transition: background-color 200ms ease;

    cursor: pointer;

    &:hover {
      background-color: var(--privy-color-background-2);
    }

    &:disabled {
      cursor: pointer;
      background-color: var(--privy-color-background-2);
    }
  }
`,ea=o.styled.div`
  text-align: center;
  font-size: 14px;
  margin-bottom: 24px;
`,ei=o.styled.button.attrs({className:"login-method-button"})`
  ${eo}
`;o.styled.a`
  ${eo}
`;let es=o.styled.div`
  width: 32px;
  height: 32px;
  border-radius: ${e=>e.$fullSize?"0":"4px"};
  background: ${e=>e.$fullSize?"transparent":"var(--privy-color-background-2)"};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;

  svg {
    width: ${e=>e.$fullSize?"32px":"18px"};
    height: ${e=>e.$fullSize?"32px":"18px"};
    color: ${e=>e.$fullSize?"inherit":"var(--privy-color-icon-muted)"};
  }
`,el=o.styled.div`
  width: 100%;
  height: 100%;
  min-height: inherit;
  display: flex;
  flex-direction: column;
  ${e=>e.$if?"display: none;":""}
`,ec=o.styled.div`
  width: 100%;
  height: 100%;
  padding: ${e=>e.$withPadding?"64px 0px":"0px"};
`,ed=o.styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 32px;
  gap: 12px;
  & h3 {
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: 24px;
  }
  & p {
    max-width: 300px;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px;
  }
`,eu=({success:e,fail:t})=>(0,a.jsxs)(eh,{children:[(0,a.jsx)(ep,{children:(0,a.jsx)(ev,{className:e?"success":t?"fail":""})}),(0,a.jsx)(ep,{children:(0,a.jsx)(ef,{className:e?"success":t?"fail":""})})]}),ep=o.styled.span`
  && {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
  }
`,eh=o.styled.span`
  position: relative;
  width: 82px;
  height: 82px;
  display: inline-block;
`,ef=o.styled.span`
  && {
    width: 82px;
    height: 82px;
    border-width: 4px;
    border-style: solid;
    border-color: ${e=>e.color??"var(--privy-color-icon-subtle)"};
    border-bottom-color: transparent;
    border-radius: 50%;
    display: inline-block;
    box-sizing: border-box;
    animation: rotation 1.2s linear infinite;
    transition: border-color 800ms;
  }

  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  &&&.success {
    border-color: var(--privy-color-icon-success);
    border-bottom-color: var(--privy-color-icon-success);
  }

  &&&.fail {
    border-color: var(--privy-color-icon-error);
    border-bottom-color: var(--privy-color-icon-error);
  }
`,ev=(0,o.styled)(ef)`
  && {
    border-bottom-color: ${e=>e.color??"var(--privy-color-border-default)"};
    border-color: ${e=>e.color??"var(--privy-color-border-default)"};
    animation: none;
    opacity: 0.5;
  }
`,eg=e=>(0,a.jsx)(em,{color:e.color||"var(--privy-color-foreground-3)"}),em=(0,o.styled)(ef)`
  && {
    height: 1rem;
    width: 1rem;
    margin: 2px 0;
    border-width: 1.5px;

    /* Override default Loader to match button transitions */
    transition: border-color 200ms ease;
  }
`,ey=["metamask","phantom","brave_wallet","rainbow","uniswap_wallet_extension","uniswap_extension","rabby_wallet","bybit_wallet","ronin_wallet","haha_wallet","crypto.com_wallet_extension","crypto.com_onchain","binance","bitget_wallet","coinbase_wallet","coinbase_smart_wallet","base_account","metamask","trust","safe","rainbow","uniswap","zerion","argent","spot","omni","cryptocom","blockchain","safepal","bitget_wallet","zengo","1inch","binance","exodus","mew_wallet","alphawallet","keyring_pro","mathwallet","unstoppable","obvious","ambire","internet_money_wallet","coin98","abc_wallet","arculus_wallet","haha","cling_wallet","broearn","copiosa","burrito_wallet","enjin_wallet","plasma_wallet","avacus","bee","pitaka","pltwallet","minerva","kryptogo","prema","slingshot","kriptonio","timeless","secux","bitizen","blocto","okx_wallet","safemoon","rabby_wallet","bybit_wallet","ronin_wallet","haha_wallet","privy","unknown","phantom","solflare","glow","backpack","jupiter","mobile_wallet_adapter"],eb=Object.freeze({phantom:{client:"phantom",name:"Phantom",installLink:i.isFirefox?"https://addons.mozilla.org/en-US/firefox/addon/phantom-app/":"https://chrome.google.com/webstore/detail/phantom/bfnaelmomeimhlpmgjnjophhpkkoljpa?hl=en",chainTypes:["ethereum","solana"],get isInstalled(){if("phantom"in window){let e=window;if(e?.phantom?.ethereum?.isPhantom&&e?.phantom?.ethereum?.chainId||e?.phantom?.solana?.isPhantom)return!0}return!1},getMobileRedirect({useUniversalLink:e,isSolana:t,connectOnly:r}){let n=ex({client:this.client,isSolana:t,connectOnly:r});return`${e?"phantom://":"https://phantom.app/ul/"}browse/${n}?ref=${n}`}},solflare:{client:"solflare",name:"Solflare",installLink:i.isFirefox?"https://addons.mozilla.org/es/firefox/addon/solflare-wallet/":"https://chromewebstore.google.com/detail/solflare-wallet/bhhhlbepdkbapadjdnnojkbgioiodbic",chainTypes:["solana"],get isInstalled(){return"solflare"in window&&!!window?.solflare?.isSolflare},getMobileRedirect({useUniversalLink:e,isSolana:t,connectOnly:r}){let n=ex({client:this.client,isSolana:t,connectOnly:r});return`${e?"solflare://ul/v1/":"https://solflare.com/ul/v1/"}browse/${n}?ref=${n}`}},jupiter:{client:"jupiter",name:"Jupiter Wallet",installLink:"https://chromewebstore.google.com/detail/jupiter-wallet/iledlaeogohbilgbfhmbgkgmpplbfboh",chainTypes:["solana"],get isInstalled(){return"jupiter"in window&&!!window?.jupiter?.isJupiter},getMobileRedirect({isSolana:e,connectOnly:t}){let r=ex({client:this.client,isSolana:e,connectOnly:t});return`jupjupjup://jup.ag/browse/${r}?ref=${r}`}},backpack:{client:"backpack",name:"Backpack",installLink:"https://chromewebstore.google.com/detail/backpack/aflkmfhebedbjioipglgcbcmnbpgliof",chainTypes:["ethereum","solana"],get isInstalled(){return!(!("backpack"in window)||!window?.backpack?.ethereum?.isBackpack&&!window?.backpack?.solana?.isBackpack)},getMobileRedirect({useUniversalLink:e,isSolana:t,connectOnly:r}){let n=ex({client:this.client,isSolana:t,connectOnly:r});return`${e?"backpack://ul/v1/":"https://backpack.app/ul/v1/"}browse/${n}?ref=${n}`}},okx_wallet:{client:"okx_wallet",name:"OKX Wallet",installLink:"https://chromewebstore.google.com/detail/okx-wallet/mcohilncbfahbmgdjkbpemcciiolgcge",chainTypes:["ethereum","solana"],get isInstalled(){return"okxwallet"in window&&!!window?.okxwallet?.isOkxWallet},getMobileRedirect({isSolana:e,connectOnly:t}){return`okx://wallet/dapp/url?dappUrl=${ex({client:this.client,isSolana:e,connectOnly:t})}`}}});function ew({connectorType:e,walletClientType:t}){for(let r of ey)if(e===r||t===r)return eb[r]}function ex({client:e,isSolana:t,connectOnly:r}){let n=new URL(window.location.href);return n.searchParams.set("privy_connector",t?"solana_adapter":"injected"),n.searchParams.set("privy_wallet_client",e),n.searchParams.set("privy_connect_only",String(r)),encodeURIComponent(n.href.replace(/\/$/g,""))}class ek extends s.S{get walletBranding(){return{id:this.id,name:this.name,icon:this.icon}}async initialize(){this.initialized=!0,this.emit("initialized")}async connect(){throw Error("connect called for an uninstalled wallet via the SolanaNullConnector")}constructor({id:e,name:t,icon:r}){super({name:t},!1),this.connectorType="null",this.proxyProvider=new J(void 0,n.n),this.disconnect=async()=>{throw Error("disconnect called for an uninstalled wallet via the SolanaNullConnector")},this.promptConnection=async()=>{throw Error("promptConnection called for an uninstalled wallet via the SolanaNullConnector")},this.id=e,this.name=t,this.icon=r}}function eS(e){return"solana"===e.chainType}function eC(e){return"solana"===e.type}let ej=(0,t.createContext)({}),eP=({children:e})=>{let r=(0,n.u)(),[o,i]=(0,t.useState)({});return(0,l.u)("login",{onComplete:({loginAccount:e})=>{e&&"passkey"!==e.type&&"cross_app"!==e.type&&("wallet"!==e.type||"privy"!==e.walletClientType)&&(s.s.put(e$(r.id),e.type),"wallet"===e.type?(s.s.put(e_(r.id),e.walletClientType),s.s.put(eI(r.id),e.chainType),i({accountType:e.type,walletClientType:e.walletClientType,chainType:e.chainType})):(s.s.del(e_(r.id)),s.s.del(eI(r.id)),i({accountType:e.type})))}}),(0,t.useEffect)(()=>{if(!r.id)return;let e=s.s.get(e$(r.id)),t=s.s.get(e_(r.id)),n=s.s.get(eI(r.id));e&&i("wallet"===e?{accountType:e,walletClientType:t,chainType:n}:{accountType:e})},[r.id]),(0,a.jsx)(ej.Provider,{value:o,children:e})},e$=e=>`privy:${e}:recent-login-method`,e_=e=>`privy:${e}:recent-login-wallet-client`,eI=e=>`privy:${e}:recent-login-chain-type`,eA=()=>(0,t.useContext)(ej);class eT extends X{get walletBranding(){return{id:this.id,name:this.name,icon:this.icon}}async initialize(){this.initialized=!0,this.emit("initialized")}async connect(){throw Error("connect called for an uninstalled wallet via the EthereumNullConnector")}disconnect(){throw Error("disconnect called for an uninstalled wallet via the EthereumNullConnector")}promptConnection(e){throw Error(`promptConnection called for an uninstalled wallet via the EthereumNullConnector for ${e}`)}constructor({id:e,name:t,icon:r,walletClientType:o,defaultChain:a}){super(o,[],a,{}),this.connectorType="null",this.proxyProvider=new J(void 0,n.n),this.id=e,this.name=t,this.icon=r}}let eE=({...e})=>(0,a.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"32",height:"32",viewBox:"0 0 32 32",fill:"none",...e,children:[(0,a.jsx)("rect",{width:"32",height:"32",rx:"6",fill:"#121314"}),(0,a.jsx)("g",{transform:"translate(4, 4)",children:(0,a.jsxs)("svg",{width:"24",height:"24",viewBox:"0 0 318.6 318.6",children:[(0,a.jsx)("style",{children:".s1{stroke-linecap:round;stroke-linejoin:round}.s2{fill:#e4761b;stroke:#e4761b}.s3{fill:#f6851b;stroke:#f6851b}"}),(0,a.jsx)("path",{fill:"#e2761b",stroke:"#e2761b",className:"s1",d:"m274.1 35.5-99.5 73.9L193 65.8z"}),(0,a.jsx)("path",{d:"m44.4 35.5 98.7 74.6-17.5-44.3zm193.9 171.3-26.5 40.6 56.7 15.6 16.3-55.3zm-204.4.9L50.1 263l56.7-15.6-26.5-40.6z",className:"s1 s2"}),(0,a.jsx)("path",{d:"m103.6 138.2-15.8 23.9 56.3 2.5-2-60.5zm111.3 0-39-34.8-1.3 61.2 56.2-2.5zM106.8 247.4l33.8-16.5-29.2-22.8zm71.1-16.5 33.9 16.5-4.7-39.3z",className:"s1 s2"}),(0,a.jsx)("path",{fill:"#d7c1b3",stroke:"#d7c1b3",className:"s1",d:"m211.8 247.4-33.9-16.5 2.7 22.1-.3 9.3zm-105 0 31.5 14.9-.2-9.3 2.5-22.1z"}),(0,a.jsx)("path",{fill:"#233447",stroke:"#233447",className:"s1",d:"m138.8 193.5-28.2-8.3 19.9-9.1zm40.9 0 8.3-17.4 20 9.1z"}),(0,a.jsx)("path",{fill:"#cd6116",stroke:"#cd6116",className:"s1",d:"m106.8 247.4 4.8-40.6-31.3.9zM207 206.8l4.8 40.6 26.5-39.7zm23.8-44.7-56.2 2.5 5.2 28.9 8.3-17.4 20 9.1zm-120.2 23.1 20-9.1 8.2 17.4 5.3-28.9-56.3-2.5z"}),(0,a.jsx)("path",{fill:"#e4751f",stroke:"#e4751f",className:"s1",d:"m87.8 162.1 23.6 46-.8-22.9zm120.3 23.1-1 22.9 23.7-46zm-64-20.6-5.3 28.9 6.6 34.1 1.5-44.9zm30.5 0-2.7 18 1.2 45 6.7-34.1z"}),(0,a.jsx)("path",{d:"m179.8 193.5-6.7 34.1 4.8 3.3 29.2-22.8 1-22.9zm-69.2-8.3.8 22.9 29.2 22.8 4.8-3.3-6.6-34.1z",className:"s3"}),(0,a.jsx)("path",{fill:"#c0ad9e",stroke:"#c0ad9e",className:"s1",d:"m180.3 262.3.3-9.3-2.5-2.2h-37.7l-2.3 2.2.2 9.3-31.5-14.9 11 9 22.3 15.5h38.3l22.4-15.5 11-9z"}),(0,a.jsx)("path",{fill:"#161616",stroke:"#161616",className:"s1",d:"m177.9 230.9-4.8-3.3h-27.7l-4.8 3.3-2.5 22.1 2.3-2.2h37.7l2.5 2.2z"}),(0,a.jsx)("path",{fill:"#763d16",stroke:"#763d16",className:"s1",d:"m278.3 114.2 8.5-40.8-12.7-37.9-96.2 71.4 37 31.3 52.3 15.3 11.6-13.5-5-3.6 8-7.3-6.2-4.8 8-6.1zM31.8 73.4l8.5 40.8-5.4 4 8 6.1-6.1 4.8 8 7.3-5 3.6 11.5 13.5 52.3-15.3 37-31.3-96.2-71.4z"}),(0,a.jsx)("path",{d:"m267.2 153.5-52.3-15.3 15.9 23.9-23.7 46 31.2-.4h46.5zm-163.6-15.3-52.3 15.3-17.4 54.2h46.4l31.1.4-23.6-46zm71 26.4 3.3-57.7 15.2-41.1h-67.5l15 41.1 3.5 57.7 1.2 18.2.1 44.8h27.7l.2-44.8z",className:"s3"})]})})]});function ez(e){let{login:r}=(0,t.useContext)(m.P);return(0,l.u)("login",e),{login:r}}function eN(e){let{logout:r}=(0,t.useContext)(m.P);return(0,l.u)("logout",e),{logout:r}}function eO(e){let{connectWallet:r}=(0,t.useContext)(m.P);return(0,l.u)("connectWallet",e),{connectWallet:r}}let eW=e=>{(0,l.u)("fundWallet",e);let{fundWallet:t}=(0,p.u)();return{fundWallet:({address:e,options:r})=>t(e,r)}},eM=(0,r.create)(()=>({isModalOpen:!1,resolvers:null})),eR=(0,r.create)(()=>({})),eD=(e,t)=>eR(r=>r[e]?.[t]),eF=(e,t,r)=>{eR.setState(n=>({[e]:{...n[e],[t]:r}}))},eL=async()=>{let e,t,r=new Promise((r,n)=>{e=r,t=n});return eR.setState({}),eM.setState({isModalOpen:!0,resolvers:{resolve:e,reject:t}}),await r},eB=()=>{let e=eM.getState().resolvers;e||console.warn("useActiveWalletStore: Called close while modal was not open"),eM.setState({isModalOpen:!1}),e?.resolve({wallet:eM.getState().wallet})},eU=({address:e,client:t,appId:r})=>{let n=`${t}:${e}`;r&&s.s.put(eZ(r),n),eM.setState({wallet:n})},eG=()=>eM(e=>e.isModalOpen),eZ=e=>`privy:${e}:active-wallet-connection`,eV=()=>{let e=(0,n.u)(),{wallets:r}=(0,y.u)(),{connectors:o}=(0,p.u)(),a=(0,t.useMemo)(()=>o.filter(eS).flatMap(e=>e.wallets),[o]),i=eM(e=>e.wallet);(0,t.useEffect)(()=>{if(!e.id)return;let t=s.s.get(eZ(e.id));eM.setState({wallet:t})},[e.id]);let l=(0,t.useMemo)(()=>{if(!i)return;let[,e]=i.split(":");return r.find(t=>t.address===e)||a.find(t=>t.address===e)},[i,r,a]),c=(0,t.useMemo)(()=>l?"ethereum"===l.type?l.chainId:"solana":void 0,[l]);return{connect:async t=>{t?.reset&&(s.s.del(eZ(e.id)),eM.setState({wallet:void 0}));let{wallet:n}=await eL();if(!n)return{};let[,o]=n.split(":"),i=r.find(e=>e.address===o);if(i)return{wallet:i,network:i.chainId};let l=a.find(e=>e.address===o);return l?{wallet:l,network:"solana"}:{}},setActiveWallet:(0,t.useCallback)(t=>{eU({address:t.address,client:t.walletClientType,appId:e.id})},[e.id]),wallet:l,network:c}};e.s(["$",()=>ea,"A",()=>eO,"B",()=>eW,"C",()=>eV,"D",()=>z,"E",()=>X,"F",()=>eA,"G",()=>eg,"H",()=>el,"I",()=>eD,"J",()=>eF,"K",()=>eU,"L",()=>ef,"M",()=>eE,"N",()=>eG,"O",()=>eB,"P",()=>J,"Q",()=>C,"R",()=>eP,"S",()=>ek,"T",()=>I,"U",()=>ei,"V",()=>es,"W",()=>ec,"X",()=>ed,"Y",()=>ee,"Z",()=>en,"_",()=>A,"a",()=>B,"a0",()=>et,"a1",()=>T,"a2",()=>Z,"a3",()=>E,"a4",()=>eu,"a5",()=>U,"a6",()=>N,"a7",()=>ev,"a8",()=>er,"b",()=>x,"c",()=>K,"d",()=>S,"e",()=>P,"f",()=>q,"g",()=>k,"h",()=>H,"i",()=>M,"j",()=>G,"k",()=>O,"l",()=>L,"m",()=>ew,"n",()=>eC,"o",()=>F,"p",()=>W,"q",()=>eb,"r",()=>Y,"s",()=>R,"t",()=>D,"u",()=>Q,"v",()=>eS,"w",()=>eT,"x",()=>V,"y",()=>ez,"z",()=>eN],656486)},993556,e=>{"use strict";var t=e.i(271645);let r=t.forwardRef(function({title:e,titleId:r,...n},o){return t.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:o,"aria-labelledby":r},n),e?t.createElement("title",{id:r},e):null,t.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"}))});e.s(["default",0,r])},974935,e=>{"use strict";var t=e.i(271645);let r=t.forwardRef(function({title:e,titleId:r,...n},o){return t.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:o,"aria-labelledby":r},n),e?t.createElement("title",{id:r},e):null,t.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z"}))});e.s(["default",0,r])},120016,e=>{"use strict";var t=e.i(843476),r=e.i(997053),n=e.i(625436),o=e.i(656486),a=e.i(993556),i=e.i(974935),s=e.i(271645);let l=s.forwardRef(function({title:e,titleId:t,...r},n){return s.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:n,"aria-labelledby":t},r),e?s.createElement("title",{id:t},e):null,s.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M6 18 18 6M6 6l12 12"}))});var c=e.i(200316);function d(e){return(0,t.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 460 40",...e,children:(0,t.jsx)("g",{fill:e.color||"var(--privy-color-foreground)",children:(0,t.jsx)("path",{d:"M0 15.4v15.38h4.64V19.96h3.58c2.47 0 3.63-.01 3.77-.02 1-.08 1.49-.15 2.18-.3a9.45 9.45 0 0 0 4.6-2.37c1.66-1.57 2.64-3.87 2.81-6.56.02-.3.02-1.19 0-1.49-.1-1.77-.56-3.35-1.36-4.72A8.84 8.84 0 0 0 15.14.57c-.93-.3-1.75-.43-3.09-.54C11.9.02 10.2 0 5.93 0H0ZM10.85 4c1.85.05 3.1.45 4.16 1.3.22.17.54.49.69.68a5.97 5.97 0 0 1 1.19 3.13c.04.35.04 1.36 0 1.71-.08.68-.23 1.3-.44 1.85a4.8 4.8 0 0 1-1.09 1.68A5.63 5.63 0 0 1 12 15.92c-.6.08-.4.08-4.01.09H4.64V3.98h2.9c1.6 0 3.08 0 3.31.02ZM187.65 5.71v5.72h-.27l-.09-.14a15.9 15.9 0 0 0-1.21-1.73c-.43-.5-1-.95-1.7-1.36-.54-.3-1.05-.5-1.73-.63a8.98 8.98 0 0 0-1.7-.17 8.84 8.84 0 0 0-7.8 4.03 12.95 12.95 0 0 0-2.03 6.39c-.07.98-.06 2.15.02 3.13.2 2.47.87 4.53 2.02 6.25a8.98 8.98 0 0 0 10.22 3.65 6.5 6.5 0 0 0 2.8-1.93c.41-.51.84-1.1 1.1-1.55l.1-.17h.37v3.58h4.38V0h-4.48Zm-5.24 5.54c1.3.14 2.3.6 3.17 1.48.9.9 1.5 2.09 1.85 3.64.36 1.6.39 3.72.06 5.43a8.13 8.13 0 0 1-1.54 3.62 5.1 5.1 0 0 1-3.93 1.96 6.13 6.13 0 0 1-2.32-.31 5.87 5.87 0 0 1-3.33-3.5c-.39-1-.62-2.05-.72-3.32-.03-.32-.04-1.35-.02-1.73.08-1.56.4-2.91.96-4.05a6.2 6.2 0 0 1 1.06-1.58 5.08 5.08 0 0 1 3.6-1.66c.25-.02.9 0 1.16.02ZM210.07 15.39l.01 15.38h4.38l.01-3.57h.37l.09.15c.24.44.84 1.26 1.21 1.7a6.79 6.79 0 0 0 2.57 1.75 9.3 9.3 0 0 0 6.86-.49 9.28 9.28 0 0 0 4.05-4.07A13.05 13.05 0 0 0 231 21.6c.21-1.73.18-3.7-.09-5.32a13.03 13.03 0 0 0-1.5-4.3 9.1 9.1 0 0 0-3.75-3.63 9.15 9.15 0 0 0-4.43-.96 7.46 7.46 0 0 0-2.8.5A7.07 7.07 0 0 0 216 9.7c-.4.52-.82 1.12-1.1 1.59l-.07.14h-.27V0h-4.5Zm11.13-4.14c1.07.1 1.94.44 2.7 1.04a6.1 6.1 0 0 1 1.64 1.98c.43.84.78 2 .94 3.11.15 1.16.16 2.4.02 3.54a9.34 9.34 0 0 1-1.39 4.03 5.33 5.33 0 0 1-2.69 2.15c-.9.3-2.04.38-3.06.2a5.14 5.14 0 0 1-3.45-2.37 6.03 6.03 0 0 1-.45-.8c-.5-1.03-.8-2.2-.92-3.58-.04-.49-.06-.89-.05-1.53.01-.76.05-1.23.13-1.85.38-2.53 1.47-4.38 3.15-5.31a5.46 5.46 0 0 1 2.3-.63 10 10 0 0 1 1.13.02ZM69.05 2.17l-.01 2.77V7.7h-3.36v3.6h3.36v6.8l.01 7.15c.06 1.4.4 2.44 1.1 3.37a5.8 5.8 0 0 0 2.97 2.07c.91.3 1.83.42 2.9.38a8.71 8.71 0 0 0 2.66-.48l-.8-3.7-.38.06a4.96 4.96 0 0 1-2.43-.06c-.33-.1-.56-.25-.8-.49-.4-.41-.6-.88-.7-1.67-.02-.2-.02-.62-.03-6.82v-6.6h4.73V7.7h-4.73V2.16h-4.49ZM133.34 2.17V7.7h-3.39v3.6h3.38v6.9l.01 7.17a5.66 5.66 0 0 0 2.36 4.49c.85.6 2.03 1.03 3.26 1.17.85.1 2.03.05 2.81-.1.3-.06.75-.18 1-.26l.2-.06v-.05l-.81-3.67-.37.06a4.99 4.99 0 0 1-1.8.09c-.85-.13-1.32-.4-1.7-.97a2.63 2.63 0 0 1-.39-1.04c-.06-.4-.06 0-.06-7.1V11.3h4.7V7.7h-4.7l-.01-2.77V2.16h-4.49ZM293.41 2.36a14.56 14.56 0 0 0-13.7 16.07 14.59 14.59 0 0 0 21.86 11.08 14.5 14.5 0 0 0 7.11-14.07 14.61 14.61 0 0 0-6.53-10.73 14.49 14.49 0 0 0-8.74-2.35ZM350.8 2.36a10.17 10.17 0 0 0-7.56 4.2c-.16.2-.45.63-.58.83l-.05.1h-.47l-.01-4.36h-7.36v36.4h7.82V27.27h.49l.05.07a11.3 11.3 0 0 0 7.49 4.15 10.52 10.52 0 0 0 9.38-4.1c1.66-2.1 2.73-4.9 3.07-8.06.1-.87.13-1.4.13-2.37 0-.8 0-1.1-.07-1.76a15.95 15.95 0 0 0-3.23-8.72 12.8 12.8 0 0 0-1.85-1.84 10.49 10.49 0 0 0-7.26-2.28Zm-.94 6.05c1.27.15 2.33.65 3.2 1.5.98.96 1.67 2.31 2.03 4 .34 1.57.38 3.68.12 5.39a9.78 9.78 0 0 1-1.04 3.25c-.14.25-.44.69-.6.89a5.35 5.35 0 0 1-4.31 2.07 5.25 5.25 0 0 1-4.41-1.9 7.35 7.35 0 0 1-1.26-2.32 14.09 14.09 0 0 1-.62-4.83c.05-1.98.38-3.53 1.02-4.85a5.63 5.63 0 0 1 2.5-2.65c.66-.34 1.3-.5 2.14-.58.18-.02 1.04 0 1.23.03ZM363.63 3.1l-.01 3.2v3.16h1.43c1.26.01 1.44.02 1.54.04.42.09.66.28.79.62.08.23.08.08.08 2.96a911.57 911.57 0 0 1 .03 10.18v7.54h7.82v-7.4l.01-7.83c.03-.94.11-1.63.27-2.28.46-1.9 1.54-2.93 3.35-3.23.52-.08.2-.08 5-.08h4.4V3.08h-3.1c-3.48 0-3.91.01-4.67.1-1.83.2-3.04.79-3.96 1.88-.5.6-.9 1.32-1.26 2.26l-.06.17h-.46V3.09h-5.6c-4.46 0-5.6 0-5.6.02ZM390.8 16.95V30.8h3.87l3.86-.01V3.09h-7.73ZM400.6 3.1l-.01.4v.38l4.66 13.4 4.69 13.47.02.05h10.3l.03-.05 4.67-13.45 4.67-13.4V3.1h-7.43l-6.7 19.26h-.5l-3.28-9.5-3.31-9.64-.05-.12h-3.88l-3.88.01ZM430.98 3.1c-.01 0-.02.19-.02.4v.39l5.08 14.59c2.8 8.02 5.08 14.6 5.08 14.61.01.02-.22.02-4.8.02h-4.82v6.42h4.95c5.09 0 5.23 0 5.87-.06 3.15-.28 5.29-1.63 6.63-4.15.28-.55.44-.95.87-2.16L459 6.78l1-2.89v-.8h-7.43l-6.69 19.26h-.5l-3.27-9.46-3.31-9.64-.06-.16h-3.88l-3.88.01ZM36.57 7.36c-1.36.1-2.6.6-3.62 1.45a5.65 5.65 0 0 0-1.67 2.42l-.05.13H31V7.7h-4.35v23.08h4.5v-7.3c0-8 0-7.34.08-7.82a4.89 4.89 0 0 1 2.06-3.18c.83-.58 1.74-.89 2.87-.98a11.87 11.87 0 0 1 2.8.25H39v-4.3l-.21-.02c-.61-.07-1.74-.1-2.22-.07ZM51.08 7.41c-2.33.12-4.3.84-5.95 2.16a9.89 9.89 0 0 0-2.03 2.2 12.5 12.5 0 0 0-2 5.78 18.04 18.04 0 0 0 0 3.65 12.13 12.13 0 0 0 2.26 6.05 9.74 9.74 0 0 0 5 3.52c2.11.64 4.7.64 6.8 0a9.78 9.78 0 0 0 4.88-3.37c1.38-1.78 2.19-4 2.4-6.58.13-1.46.06-3.06-.18-4.42a11.24 11.24 0 0 0-3.58-6.6 10 10 0 0 0-5.75-2.35c-.56-.06-1.31-.07-1.85-.04Zm1.42 3.78c.88.1 1.62.34 2.28.75a6.13 6.13 0 0 1 1.99 2.15 10.31 10.31 0 0 1 1.2 5c.02 1.23-.12 2.44-.42 3.51a7.14 7.14 0 0 1-1.81 3.32c-.61.6-1.2.98-1.95 1.24a6 6 0 0 1-2 .3 5.7 5.7 0 0 1-2.72-.6 5 5 0 0 1-1.28-.94A7.1 7.1 0 0 1 46 22.73c-.57-1.99-.6-4.46-.08-6.5a7.24 7.24 0 0 1 2.03-3.67 5.13 5.13 0 0 1 3.35-1.4 11 11 0 0 1 1.2.03ZM92.05 7.4c-.96.06-1.56.15-2.3.33a9.62 9.62 0 0 0-6.09 4.66 13.5 13.5 0 0 0-1.71 7c0 .83 0 1.04.06 1.6.16 1.77.58 3.32 1.29 4.7A9.72 9.72 0 0 0 90.28 31c1.84.37 4.08.32 5.85-.13a9.07 9.07 0 0 0 5.02-3.1A7.64 7.64 0 0 0 102.5 25l-2.11-.39-2.11-.38-.08.13a4.72 4.72 0 0 1-2.35 2.55 6.3 6.3 0 0 1-2.23.58c-.29.03-1.13.03-1.44 0a6.35 6.35 0 0 1-3.02-1.04 5.93 5.93 0 0 1-2.02-2.43 8.44 8.44 0 0 1-.72-3.18v-.26h16.38v-.81c0-1.83-.06-2.76-.25-3.87-.2-1.22-.53-2.24-1.05-3.28a8.9 8.9 0 0 0-2.66-3.26 10.1 10.1 0 0 0-5.34-1.94 18.3 18.3 0 0 0-1.46-.03Zm1.3 3.75c1.2.13 2.19.55 3.05 1.3a5.8 5.8 0 0 1 1.78 2.96c.13.51.21 1.17.21 1.66v.15H86.43v-.12c.08-.97.3-1.78.72-2.61.5-1 1.2-1.8 2.14-2.42a5.32 5.32 0 0 1 2.9-.95c.2-.01.97 0 1.17.03ZM116.79 7.41c-2 .1-3.73.65-5.22 1.65a10.7 10.7 0 0 0-4.25 6.06 16.1 16.1 0 0 0-.5 5.8c.2 2.17.84 4.13 1.88 5.76.58.9 1.32 1.73 2.15 2.4a9.37 9.37 0 0 0 3.6 1.8 12.06 12.06 0 0 0 3.92.34 10.2 10.2 0 0 0 3.84-.95 8.31 8.31 0 0 0 4.76-6.75l.01-.04h-4.37l-.05.16a4.87 4.87 0 0 1-4.24 3.75c-.59.07-1.32.06-1.93-.05a5.47 5.47 0 0 1-3.5-2.27c-.56-.75-1-1.73-1.26-2.79a13.8 13.8 0 0 1-.16-5.24 7.77 7.77 0 0 1 2.1-4.3 5.48 5.48 0 0 1 2.15-1.3 6.4 6.4 0 0 1 3.89.1c.59.21 1.03.5 1.5.96a5.32 5.32 0 0 1 1.46 2.5l.04.15h4.37v-.06a8.22 8.22 0 0 0-5.31-6.94 10.98 10.98 0 0 0-4.88-.74ZM156.2 7.41a9.87 9.87 0 0 0-6 2.29 11.02 11.02 0 0 0-3.41 5.43c-.52 1.78-.68 3.9-.48 5.97.17 1.8.63 3.38 1.37 4.8a9.68 9.68 0 0 0 5.91 4.86c1.65.48 3.63.61 5.53.36 3.72-.49 6.55-2.62 7.56-5.69.12-.39.13-.42.1-.43-.02 0-4.13-.75-4.19-.75-.03 0-.04 0-.1.16-.18.42-.45.9-.72 1.22-.16.2-.49.53-.7.7-.67.54-1.5.9-2.43 1.08-.48.08-.83.11-1.41.11-.64 0-1.07-.04-1.6-.15a5.76 5.76 0 0 1-3.93-2.83 8 8 0 0 1-.99-3.79v-.16h16.38v-1.11l-.02-1.43c-.1-2.25-.53-4-1.35-5.59a9.24 9.24 0 0 0-6.18-4.75c-1.04-.26-2.2-.36-3.33-.3Zm1.45 3.74a5.35 5.35 0 0 1 3.66 1.94 6.1 6.1 0 0 1 1.38 4.01v.12h-11.97v-.06c0-.02 0-.14.02-.25a6.6 6.6 0 0 1 2.15-4.32 5.73 5.73 0 0 1 3.5-1.46c.25-.02 1 0 1.26.02ZM233.58 7.82l8.37 23.22a49.22 49.22 0 0 1-.67 1.9 5.36 5.36 0 0 1-1.14 1.8c-.41.4-.82.58-1.48.69-.27.04-1.03.03-1.35 0a8.05 8.05 0 0 1-1.1-.23l-1.08 3.67c0 .02.32.14.66.22.83.21 1.57.29 2.56.28.56-.01.8-.03 1.24-.1 2.71-.4 4.66-2.09 5.86-5.08l9.64-26.44c0-.02-4.82-.06-4.83-.05l-2.93 8.96-2.91 8.94h-.24l-.22-.65-2.91-8.95-2.7-8.3H233.53ZM293.05 35.8c-1.18.04-1.93.09-2.8.16-2.52.24-4.53.69-5.43 1.23-.7.41-.76.86-.2 1.28.88.66 3.29 1.19 6.36 1.4a48.55 48.55 0 0 0 5.75.05c3.47-.19 6.24-.78 7.11-1.5.22-.19.3-.34.3-.53 0-.1 0-.12-.04-.22-.35-.69-2.32-1.3-5.25-1.63a41.09 41.09 0 0 0-5.8-.24Zm0 0"})})})}let u=r.styled.span`
  margin-top: 16px;
  font-size: 13px;
  text-align: center;
  color: var(--privy-color-foreground-3);
  display: block;

  && > a {
    color: var(--privy-color-accent);
  }
`;function p({app:{legal:{privacyPolicyUrl:e,termsAndConditionsUrl:r,requireUsersAcceptTerms:n}},alwaysShowImplicitConsent:o}){let a=!(!e||!r);return(!n||o)&&(r||e)?(0,t.jsxs)(u,{children:["By logging in I agree to the"," ",r&&(0,t.jsx)("a",{href:r,target:"_blank",children:a?"Terms":"Terms of Service"}),a&&" & ",e&&(0,t.jsx)("a",{href:e,target:"_blank",children:"Privacy Policy"})]}):(0,t.jsx)(u,{})}let h=({className:e})=>{let{appearance:r}=(0,n.u)();return(0,t.jsx)(v,{className:e,children:r.footerLogo??(0,t.jsx)(f,{href:"https://www.privy.io/",target:"_blank",id:"protected-by-privy",children:(0,t.jsx)(d,{color:"currentColor",height:13,width:150})})})},f=r.styled.a`
  && {
    padding: 0;
    color: var(--privy-color-foreground-3);
  }
`,v=r.styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 8px;
  padding-bottom: 12px;
  gap: 8px;

  font-size: 13px;

  && a {
    padding: 0.5rem 0;

    &:hover {
      text-decoration: none;
    }
  }

  @media all and (display-mode: standalone) {
    padding-bottom: 30px;
  }
`,g=({variant:e="primary",size:r="lg",children:n,success:o,...a})=>{switch(e){case"secondary":return(0,t.jsx)(k,{size:r,...a,children:n});case"error":return(0,t.jsx)(k,{$warn:!0,size:r,...a,children:n});case"muted":return(0,t.jsx)(S,{size:r,...a,children:n});default:return(0,t.jsx)(y,{size:r,success:o,...a,children:n})}},m=r.styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  user-select: none;

  & {
    width: auto;
    cursor: pointer;
    border-radius: ${({$size:e})=>"sm"===e?"6px":"var(--privy-border-radius-sm)"};

    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 22px;
    letter-spacing: -0.016px;
  }

  && {
    height: ${({$size:e})=>"sm"===e?"28px":"48px"};
    padding: 0 ${({$size:e})=>"sm"===e?"10px":"16px"};
  }
`,y=({children:e,loading:r,disabled:n,success:a,size:i="lg",loadingText:s="Loading...",as:l,onClick:c,...d})=>{let u="a"===l,p=!(!r&&!n);return(0,t.jsx)(x,{as:l,disabled:u?void 0:p,"aria-disabled":u?p:void 0,$success:a,$size:i,onClick:e=>{u&&p?e.preventDefault():c?.(e)},...d,children:r?(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(o.G,{}),s?(0,t.jsx)("span",{style:{marginLeft:"8px"},children:s}):null]}):e})},b=({children:e,loading:r,disabled:n,...a})=>(0,t.jsx)(w,{disabled:n,...a,children:r?(0,t.jsx)(o.G,{color:"var(--privy-color-foreground-accent)"}):e}),w=(0,r.styled)(m)`
  position: relative;

  && {
    background-color: var(--privy-color-accent);
    color: var(--privy-color-foreground-accent);

    transition: background-color 200ms ease;
  }

  &:hover {
    background-color: var(--privy-color-accent-dark);
  }

  &:active {
    background-color: var(--privy-color-accent-dark);
  }

  &:disabled,
  &:hover:disabled,
  &:active:disabled {
    cursor: not-allowed;
    color: var(--privy-color-foreground-disabled);
    background-color: var(--privy-color-accent-dark);
  }
`,x=(0,r.styled)(m)`
  position: relative;

  && {
    background-color: ${e=>e.$warn?"var(--privy-color-error-dark)":"var(--privy-color-accent)"};
    color: var(--privy-color-foreground-accent);

    transition: background-color 200ms ease;
  }

  &:hover {
    background-color: ${e=>e.$warn?"var(--privy-color-error-dark)":"var(--privy-color-accent-dark)"};
  }

  &:active {
    background-color: ${e=>e.$warn?"var(--privy-color-error-dark)":"var(--privy-color-accent-dark)"};
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px #949df9;
  }

  &:disabled {
    background-color: var(--privy-color-background-2);
    border: 1px solid var(--privy-color-border-default);
    color: var(--privy-color-foreground-disabled);
    cursor: not-allowed;
  }

  &:hover:disabled,
  &:active:disabled {
    background-color: var(--privy-color-background-2);
    border: 1px solid var(--privy-color-border-default);
    color: var(--privy-color-foreground-disabled);
    cursor: not-allowed;
  }

  /* Emulate disabled look for anchors via the prop */
  ${e=>e.disabled&&r.css`
      &&&,
      &&&:hover,
      &&&:active {
        background-color: var(--privy-color-background-2);
        border: 1px solid var(--privy-color-border-default);
        color: var(--privy-color-foreground-disabled);
        cursor: not-allowed;
      }
    `}
`,k=({children:e,loading:r,disabled:n,size:a="lg",loadingText:i="Loading...",as:s,onClick:l,...c})=>{let d="a"===s,u=!(!r&&!n);return(0,t.jsx)(C,{as:s,disabled:d?void 0:u,"aria-disabled":d?u:void 0,$size:a,onClick:e=>{d&&u?e.preventDefault():l?.(e)},...c,children:r?(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(o.G,{}),i?(0,t.jsx)("span",{style:{marginLeft:"8px"},children:i}):null]}):e})},S=({children:e,loading:r,disabled:n,size:a="lg",loadingText:i="Loading...",as:s,onClick:l,...c})=>{let d="a"===s,u=!(!r&&!n);return(0,t.jsx)(j,{as:s,disabled:d?void 0:u,"aria-disabled":d?u:void 0,$size:a,onClick:e=>{d&&u?e.preventDefault():l?.(e)},...c,children:r?(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(o.G,{}),i?(0,t.jsx)("span",{style:{marginLeft:"8px"},children:i}):null]}):e})},C=(0,r.styled)(m)`
  && {
    border-width: 1px;
    border-style: solid;
    border-color: ${e=>e.$warn?"var(--privy-color-border-error)":"var(--privy-color-accent)"};
    background-color: var(--privy-color-background);
    color: ${e=>e.$warn?"var(--privy-color-error-dark)":"var(--privy-color-accent)"};
    transition:
      border-color 200ms ease,
      color 200ms ease,
      background-color 200ms ease;
  }

  &:hover {
    border-color: ${e=>e.$warn?"var(--privy-color-border-error)":"var(--privy-color-border-interactive-hover)"};
    background-color: ${e=>e.$warn?"var(--privy-color-error-light)":"var(--privy-color-info-bg-hover)"};
    color: ${e=>e.$warn?"var(--privy-color-error-dark)":"var(--privy-color-accent)"};
  }

  &:active {
    border-color: ${e=>e.$warn?"var(--privy-color-border-error)":"var(--privy-color-border-interactive)"};
    background-color: ${e=>e.$warn?"var(--privy-color-error-bg-hover)":"var(--privy-color-info-bg)"};
    color: ${e=>e.$warn?"var(--privy-color-error-dark)":"var(--privy-color-accent)"};
  }

  &:disabled {
    border-color: var(--privy-color-border-default);
    background-color: var(--privy-color-background-2);
    color: var(--privy-color-foreground-disabled);
    cursor: not-allowed;
  }

  &:hover:disabled,
  &:active:disabled {
    border-color: var(--privy-color-border-default);
    background-color: var(--privy-color-background-2);
    color: var(--privy-color-foreground-disabled);
    cursor: not-allowed;
  }

  /* Anchor disabled look (prop-driven) */
  ${e=>e.disabled&&r.css`
      &&&,
      &&&:hover,
      &&&:active {
        border-color: var(--privy-color-border-default);
        background-color: var(--privy-color-background-2);
        color: var(--privy-color-foreground-disabled);
        cursor: not-allowed;
      }
    `}
`,j=(0,r.styled)(m)`
  && {
    border-width: 1px;
    border-style: solid;
    border-color: var(--privy-color-border-default);
    background-color: transparent;
    color: var(--privy-color-text-muted);

    transition:
      border-color 200ms ease,
      color 200ms ease,
      background-color 200ms ease;
  }

  &:hover {
    border-color: var(--privy-color-border-default);
    background-color: var(--privy-color-info-bg-hover);
    color: var(--privy-color-foreground-2);
  }

  &:active {
    border-color: var(--privy-color-border-default);
    background-color: var(--privy-color-info-bg);
    color: var(--privy-color-foreground-2);
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px #949df9;
  }

  &:disabled {
    border-color: var(--privy-color-border-default);
    background-color: var(--privy-color-background-2);
    color: var(--privy-color-foreground-disabled);
    cursor: not-allowed;
  }

  &:hover:disabled,
  &:active:disabled {
    border-color: var(--privy-color-border-default);
    background-color: var(--privy-color-background-2);
    color: var(--privy-color-foreground-disabled);
    cursor: not-allowed;
  }

  /* Anchor disabled look (prop-driven) */
  ${e=>e.disabled&&r.css`
      &&&,
      &&&:hover,
      &&&:active {
        border-color: var(--privy-color-border-default);
        background-color: var(--privy-color-background-2);
        color: var(--privy-color-foreground-disabled);
        cursor: not-allowed;
      }
    `}
`,P=r.styled.button`
  && {
    padding: 12px 16px;
    font-weight: 500;
    text-align: center;
    color: var(--privy-color-foreground-accent);
    background-color: var(--privy-color-accent);
    border-radius: var(--privy-border-radius-sm);
    min-width: 144px;
    opacity: ${e=>e.invisible?"0":"1"};
    transition:
      opacity 200ms ease,
      background-color 200ms ease,
      color 200ms ease;
    user-select: none;

    ${e=>e.invisible&&r.css`
        pointer-events: none;
      `}

    &:hover {
      background-color: var(--privy-color-accent-dark);
    }
    &:active {
      background-color: var(--privy-color-accent-dark);
    }

    &:hover:disabled,
    &:active:disabled {
      background-color: var(--privy-color-background-2);
      color: var(--privy-color-foreground-disabled);
      cursor: not-allowed;
    }
  }
`;r.styled.div`
  /* Set to match height of SoftCtaButton to avoid reflow if conditionally rendered */
  height: 44px;
`;let $=({children:e,onClick:r,disabled:n,isSubmitting:a,...i})=>(0,t.jsxs)(_,{$isSubmitting:a,onClick:r,disabled:n,...i,children:[(0,t.jsx)("span",{children:e}),(0,t.jsx)("span",{children:(0,t.jsx)(o.G,{})})]}),_=r.styled.button`
  && {
    color: var(--privy-color-accent);
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px;
    cursor: pointer;
    border-radius: 0px var(--privy-border-radius-mdlg) var(--privy-border-radius-mdlg) 0px;
    border: none;
    transition: color 200ms ease;

    /* Tablet and Up */
    @media (min-width: 441px) {
      font-size: 14px;
    }

    :hover {
      color: var(--privy-color-accent-dark);
    }

    && > :first-child {
      opacity: ${e=>+!e.$isSubmitting};
    }

    && > :last-child {
      position: absolute;
      display: flex;
      top: 50%;
      left: 50%;
      transform: translate3d(-50%, -50%, 0);

      /** Will map to the opposite of first span */
      opacity: ${e=>+!!e.$isSubmitting};
    }

    :disabled,
    :hover:disabled {
      color: var(--privy-color-foreground-disabled);
      cursor: not-allowed;
    }
  }
`,I=({backFn:e})=>(0,t.jsx)("div",{children:(0,t.jsx)(z,{onClick:e,children:(0,t.jsx)(a.default,{height:"16px",width:"16px",strokeWidth:2})})}),A=({infoFn:e})=>(0,t.jsx)("div",{children:(0,t.jsx)(N,{"aria-label":"info",onClick:e,children:(0,t.jsx)(i.default,{height:"22px",width:"22px",strokeWidth:2})})}),T=e=>(0,t.jsx)("div",{children:(0,t.jsx)(z,{"aria-label":"close modal",onClick:e.onClose,children:(0,t.jsx)(l,{height:"16px",width:"16px",strokeWidth:2})})}),E=({backFn:e,infoFn:r,onClose:o,title:a,closeable:i=!0,className:s})=>{let{closePrivyModal:l}=(0,c.u)(),d=(0,n.u)();return(0,t.jsxs)(O,{className:s,children:[(0,t.jsxs)(W,{children:[e&&(0,t.jsx)(I,{backFn:e}),(0,t.jsx)("div",{style:{height:24}}),r&&(0,t.jsx)(A,{infoFn:r})]}),a&&(0,t.jsx)(R,{id:"privy-dialog-title",children:a}),(0,t.jsx)(M,{children:!d.render.standalone&&i&&(0,t.jsx)(T,{onClose:o||(()=>l())})})]})},z=r.styled.button`
  && {
    cursor: pointer;
    display: flex;
    opacity: 0.6;

    background-color: var(--privy-color-background-2);
    border-radius: var(--privy-border-radius-full);
    padding: 4px;

    > svg {
      margin: auto;
      color: var(--privy-color-foreground);
    }

    :hover {
      opacity: 1;
    }
  }
`,N=(0,r.styled)(z)`
  && {
    background-color: transparent;
  }
`,O=r.styled.div`
  padding: 16px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;

  h2 {
    font-size: 16px;
    line-height: 24px;
    font-weight: 600;
    color: var(--privy-color-foreground);
  }
`,W=r.styled.div`
  flex: 1;
  align-items: center;
  display: flex;
  gap: 8px;
`,M=r.styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
`,R=r.styled.div`
  overflow: hidden;
  white-space: nowrap;
  max-width: 100%;
  text-overflow: ellipsis;
  text-align: center;
  color: var(--privy-color-foreground-2);
`;e.s(["B",()=>h,"E",()=>$,"M",()=>E,"P",()=>y,"S",()=>k,"T",()=>p,"a",()=>g,"b",()=>v,"c",()=>b,"d",()=>P],120016)}]);