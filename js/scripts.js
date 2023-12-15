/*! jQuery v3.3.1 | (c) JS Foundation and other contributors | jquery.org/license */
!function(e,t){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=e.document?t(e,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document");return t(e)}:t(e)}("undefined"!=typeof window?window:this,function(e,t){"use strict";var n=[],r=e.document,i=Object.getPrototypeOf,o=n.slice,a=n.concat,s=n.push,u=n.indexOf,l={},c=l.toString,f=l.hasOwnProperty,p=f.toString,d=p.call(Object),h={},g=function e(t){return"function"==typeof t&&"number"!=typeof t.nodeType},y=function e(t){return null!=t&&t===t.window},v={type:!0,src:!0,noModule:!0};function m(e,t,n){var i,o=(t=t||r).createElement("script");if(o.text=e,n)for(i in v)n[i]&&(o[i]=n[i]);t.head.appendChild(o).parentNode.removeChild(o)}function x(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?l[c.call(e)]||"object":typeof e}var b="3.3.1",w=function(e,t){return new w.fn.init(e,t)},T=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;w.fn=w.prototype={jquery:"3.3.1",constructor:w,length:0,toArray:function(){return o.call(this)},get:function(e){return null==e?o.call(this):e<0?this[e+this.length]:this[e]},pushStack:function(e){var t=w.merge(this.constructor(),e);return t.prevObject=this,t},each:function(e){return w.each(this,e)},map:function(e){return this.pushStack(w.map(this,function(t,n){return e.call(t,n,t)}))},slice:function(){return this.pushStack(o.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(e<0?t:0);return this.pushStack(n>=0&&n<t?[this[n]]:[])},end:function(){return this.prevObject||this.constructor()},push:s,sort:n.sort,splice:n.splice},w.extend=w.fn.extend=function(){var e,t,n,r,i,o,a=arguments[0]||{},s=1,u=arguments.length,l=!1;for("boolean"==typeof a&&(l=a,a=arguments[s]||{},s++),"object"==typeof a||g(a)||(a={}),s===u&&(a=this,s--);s<u;s++)if(null!=(e=arguments[s]))for(t in e)n=a[t],a!==(r=e[t])&&(l&&r&&(w.isPlainObject(r)||(i=Array.isArray(r)))?(i?(i=!1,o=n&&Array.isArray(n)?n:[]):o=n&&w.isPlainObject(n)?n:{},a[t]=w.extend(l,o,r)):void 0!==r&&(a[t]=r));return a},w.extend({expando:"jQuery"+("3.3.1"+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isPlainObject:function(e){var t,n;return!(!e||"[object Object]"!==c.call(e))&&(!(t=i(e))||"function"==typeof(n=f.call(t,"constructor")&&t.constructor)&&p.call(n)===d)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},globalEval:function(e){m(e)},each:function(e,t){var n,r=0;if(C(e)){for(n=e.length;r<n;r++)if(!1===t.call(e[r],r,e[r]))break}else for(r in e)if(!1===t.call(e[r],r,e[r]))break;return e},trim:function(e){return null==e?"":(e+"").replace(T,"")},makeArray:function(e,t){var n=t||[];return null!=e&&(C(Object(e))?w.merge(n,"string"==typeof e?[e]:e):s.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:u.call(t,e,n)},merge:function(e,t){for(var n=+t.length,r=0,i=e.length;r<n;r++)e[i++]=t[r];return e.length=i,e},grep:function(e,t,n){for(var r,i=[],o=0,a=e.length,s=!n;o<a;o++)(r=!t(e[o],o))!==s&&i.push(e[o]);return i},map:function(e,t,n){var r,i,o=0,s=[];if(C(e))for(r=e.length;o<r;o++)null!=(i=t(e[o],o,n))&&s.push(i);else for(o in e)null!=(i=t(e[o],o,n))&&s.push(i);return a.apply([],s)},guid:1,support:h}),"function"==typeof Symbol&&(w.fn[Symbol.iterator]=n[Symbol.iterator]),w.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,t){l["[object "+t+"]"]=t.toLowerCase()});function C(e){var t=!!e&&"length"in e&&e.length,n=x(e);return!g(e)&&!y(e)&&("array"===n||0===t||"number"==typeof t&&t>0&&t-1 in e)}var E=function(e){var t,n,r,i,o,a,s,u,l,c,f,p,d,h,g,y,v,m,x,b="sizzle"+1*new Date,w=e.document,T=0,C=0,E=ae(),k=ae(),S=ae(),D=function(e,t){return e===t&&(f=!0),0},N={}.hasOwnProperty,A=[],j=A.pop,q=A.push,L=A.push,H=A.slice,O=function(e,t){for(var n=0,r=e.length;n<r;n++)if(e[n]===t)return n;return-1},P="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",M="[\\x20\\t\\r\\n\\f]",R="(?:\\\\.|[\\w-]|[^\0-\\xa0])+",I="\\["+M+"*("+R+")(?:"+M+"*([*^$|!~]?=)"+M+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+R+"))|)"+M+"*\\]",W=":("+R+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+I+")*)|.*)\\)|)",$=new RegExp(M+"+","g"),B=new RegExp("^"+M+"+|((?:^|[^\\\\])(?:\\\\.)*)"+M+"+$","g"),F=new RegExp("^"+M+"*,"+M+"*"),_=new RegExp("^"+M+"*([>+~]|"+M+")"+M+"*"),z=new RegExp("="+M+"*([^\\]'\"]*?)"+M+"*\\]","g"),X=new RegExp(W),U=new RegExp("^"+R+"$"),V={ID:new RegExp("^#("+R+")"),CLASS:new RegExp("^\\.("+R+")"),TAG:new RegExp("^("+R+"|[*])"),ATTR:new RegExp("^"+I),PSEUDO:new RegExp("^"+W),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+M+"*(even|odd|(([+-]|)(\\d*)n|)"+M+"*(?:([+-]|)"+M+"*(\\d+)|))"+M+"*\\)|)","i"),bool:new RegExp("^(?:"+P+")$","i"),needsContext:new RegExp("^"+M+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+M+"*((?:-\\d)?\\d*)"+M+"*\\)|)(?=[^-]|$)","i")},G=/^(?:input|select|textarea|button)$/i,Y=/^h\d$/i,Q=/^[^{]+\{\s*\[native \w/,J=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,K=/[+~]/,Z=new RegExp("\\\\([\\da-f]{1,6}"+M+"?|("+M+")|.)","ig"),ee=function(e,t,n){var r="0x"+t-65536;return r!==r||n?t:r<0?String.fromCharCode(r+65536):String.fromCharCode(r>>10|55296,1023&r|56320)},te=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,ne=function(e,t){return t?"\0"===e?"\ufffd":e.slice(0,-1)+"\\"+e.charCodeAt(e.length-1).toString(16)+" ":"\\"+e},re=function(){p()},ie=me(function(e){return!0===e.disabled&&("form"in e||"label"in e)},{dir:"parentNode",next:"legend"});try{L.apply(A=H.call(w.childNodes),w.childNodes),A[w.childNodes.length].nodeType}catch(e){L={apply:A.length?function(e,t){q.apply(e,H.call(t))}:function(e,t){var n=e.length,r=0;while(e[n++]=t[r++]);e.length=n-1}}}function oe(e,t,r,i){var o,s,l,c,f,h,v,m=t&&t.ownerDocument,T=t?t.nodeType:9;if(r=r||[],"string"!=typeof e||!e||1!==T&&9!==T&&11!==T)return r;if(!i&&((t?t.ownerDocument||t:w)!==d&&p(t),t=t||d,g)){if(11!==T&&(f=J.exec(e)))if(o=f[1]){if(9===T){if(!(l=t.getElementById(o)))return r;if(l.id===o)return r.push(l),r}else if(m&&(l=m.getElementById(o))&&x(t,l)&&l.id===o)return r.push(l),r}else{if(f[2])return L.apply(r,t.getElementsByTagName(e)),r;if((o=f[3])&&n.getElementsByClassName&&t.getElementsByClassName)return L.apply(r,t.getElementsByClassName(o)),r}if(n.qsa&&!S[e+" "]&&(!y||!y.test(e))){if(1!==T)m=t,v=e;else if("object"!==t.nodeName.toLowerCase()){(c=t.getAttribute("id"))?c=c.replace(te,ne):t.setAttribute("id",c=b),s=(h=a(e)).length;while(s--)h[s]="#"+c+" "+ve(h[s]);v=h.join(","),m=K.test(e)&&ge(t.parentNode)||t}if(v)try{return L.apply(r,m.querySelectorAll(v)),r}catch(e){}finally{c===b&&t.removeAttribute("id")}}}return u(e.replace(B,"$1"),t,r,i)}function ae(){var e=[];function t(n,i){return e.push(n+" ")>r.cacheLength&&delete t[e.shift()],t[n+" "]=i}return t}function se(e){return e[b]=!0,e}function ue(e){var t=d.createElement("fieldset");try{return!!e(t)}catch(e){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function le(e,t){var n=e.split("|"),i=n.length;while(i--)r.attrHandle[n[i]]=t}function ce(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&e.sourceIndex-t.sourceIndex;if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function fe(e){return function(t){return"input"===t.nodeName.toLowerCase()&&t.type===e}}function pe(e){return function(t){var n=t.nodeName.toLowerCase();return("input"===n||"button"===n)&&t.type===e}}function de(e){return function(t){return"form"in t?t.parentNode&&!1===t.disabled?"label"in t?"label"in t.parentNode?t.parentNode.disabled===e:t.disabled===e:t.isDisabled===e||t.isDisabled!==!e&&ie(t)===e:t.disabled===e:"label"in t&&t.disabled===e}}function he(e){return se(function(t){return t=+t,se(function(n,r){var i,o=e([],n.length,t),a=o.length;while(a--)n[i=o[a]]&&(n[i]=!(r[i]=n[i]))})})}function ge(e){return e&&"undefined"!=typeof e.getElementsByTagName&&e}n=oe.support={},o=oe.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement;return!!t&&"HTML"!==t.nodeName},p=oe.setDocument=function(e){var t,i,a=e?e.ownerDocument||e:w;return a!==d&&9===a.nodeType&&a.documentElement?(d=a,h=d.documentElement,g=!o(d),w!==d&&(i=d.defaultView)&&i.top!==i&&(i.addEventListener?i.addEventListener("unload",re,!1):i.attachEvent&&i.attachEvent("onunload",re)),n.attributes=ue(function(e){return e.className="i",!e.getAttribute("className")}),n.getElementsByTagName=ue(function(e){return e.appendChild(d.createComment("")),!e.getElementsByTagName("*").length}),n.getElementsByClassName=Q.test(d.getElementsByClassName),n.getById=ue(function(e){return h.appendChild(e).id=b,!d.getElementsByName||!d.getElementsByName(b).length}),n.getById?(r.filter.ID=function(e){var t=e.replace(Z,ee);return function(e){return e.getAttribute("id")===t}},r.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&g){var n=t.getElementById(e);return n?[n]:[]}}):(r.filter.ID=function(e){var t=e.replace(Z,ee);return function(e){var n="undefined"!=typeof e.getAttributeNode&&e.getAttributeNode("id");return n&&n.value===t}},r.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&g){var n,r,i,o=t.getElementById(e);if(o){if((n=o.getAttributeNode("id"))&&n.value===e)return[o];i=t.getElementsByName(e),r=0;while(o=i[r++])if((n=o.getAttributeNode("id"))&&n.value===e)return[o]}return[]}}),r.find.TAG=n.getElementsByTagName?function(e,t){return"undefined"!=typeof t.getElementsByTagName?t.getElementsByTagName(e):n.qsa?t.querySelectorAll(e):void 0}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},r.find.CLASS=n.getElementsByClassName&&function(e,t){if("undefined"!=typeof t.getElementsByClassName&&g)return t.getElementsByClassName(e)},v=[],y=[],(n.qsa=Q.test(d.querySelectorAll))&&(ue(function(e){h.appendChild(e).innerHTML="<a id='"+b+"'></a><select id='"+b+"-\r\\' msallowcapture=''><option selected=''></option></select>",e.querySelectorAll("[msallowcapture^='']").length&&y.push("[*^$]="+M+"*(?:''|\"\")"),e.querySelectorAll("[selected]").length||y.push("\\["+M+"*(?:value|"+P+")"),e.querySelectorAll("[id~="+b+"-]").length||y.push("~="),e.querySelectorAll(":checked").length||y.push(":checked"),e.querySelectorAll("a#"+b+"+*").length||y.push(".#.+[+~]")}),ue(function(e){e.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var t=d.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),e.querySelectorAll("[name=d]").length&&y.push("name"+M+"*[*^$|!~]?="),2!==e.querySelectorAll(":enabled").length&&y.push(":enabled",":disabled"),h.appendChild(e).disabled=!0,2!==e.querySelectorAll(":disabled").length&&y.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),y.push(",.*:")})),(n.matchesSelector=Q.test(m=h.matches||h.webkitMatchesSelector||h.mozMatchesSelector||h.oMatchesSelector||h.msMatchesSelector))&&ue(function(e){n.disconnectedMatch=m.call(e,"*"),m.call(e,"[s!='']:x"),v.push("!=",W)}),y=y.length&&new RegExp(y.join("|")),v=v.length&&new RegExp(v.join("|")),t=Q.test(h.compareDocumentPosition),x=t||Q.test(h.contains)?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},D=t?function(e,t){if(e===t)return f=!0,0;var r=!e.compareDocumentPosition-!t.compareDocumentPosition;return r||(1&(r=(e.ownerDocument||e)===(t.ownerDocument||t)?e.compareDocumentPosition(t):1)||!n.sortDetached&&t.compareDocumentPosition(e)===r?e===d||e.ownerDocument===w&&x(w,e)?-1:t===d||t.ownerDocument===w&&x(w,t)?1:c?O(c,e)-O(c,t):0:4&r?-1:1)}:function(e,t){if(e===t)return f=!0,0;var n,r=0,i=e.parentNode,o=t.parentNode,a=[e],s=[t];if(!i||!o)return e===d?-1:t===d?1:i?-1:o?1:c?O(c,e)-O(c,t):0;if(i===o)return ce(e,t);n=e;while(n=n.parentNode)a.unshift(n);n=t;while(n=n.parentNode)s.unshift(n);while(a[r]===s[r])r++;return r?ce(a[r],s[r]):a[r]===w?-1:s[r]===w?1:0},d):d},oe.matches=function(e,t){return oe(e,null,null,t)},oe.matchesSelector=function(e,t){if((e.ownerDocument||e)!==d&&p(e),t=t.replace(z,"='$1']"),n.matchesSelector&&g&&!S[t+" "]&&(!v||!v.test(t))&&(!y||!y.test(t)))try{var r=m.call(e,t);if(r||n.disconnectedMatch||e.document&&11!==e.document.nodeType)return r}catch(e){}return oe(t,d,null,[e]).length>0},oe.contains=function(e,t){return(e.ownerDocument||e)!==d&&p(e),x(e,t)},oe.attr=function(e,t){(e.ownerDocument||e)!==d&&p(e);var i=r.attrHandle[t.toLowerCase()],o=i&&N.call(r.attrHandle,t.toLowerCase())?i(e,t,!g):void 0;return void 0!==o?o:n.attributes||!g?e.getAttribute(t):(o=e.getAttributeNode(t))&&o.specified?o.value:null},oe.escape=function(e){return(e+"").replace(te,ne)},oe.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},oe.uniqueSort=function(e){var t,r=[],i=0,o=0;if(f=!n.detectDuplicates,c=!n.sortStable&&e.slice(0),e.sort(D),f){while(t=e[o++])t===e[o]&&(i=r.push(o));while(i--)e.splice(r[i],1)}return c=null,e},i=oe.getText=function(e){var t,n="",r=0,o=e.nodeType;if(o){if(1===o||9===o||11===o){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=i(e)}else if(3===o||4===o)return e.nodeValue}else while(t=e[r++])n+=i(t);return n},(r=oe.selectors={cacheLength:50,createPseudo:se,match:V,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(Z,ee),e[3]=(e[3]||e[4]||e[5]||"").replace(Z,ee),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||oe.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&oe.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2];return V.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&X.test(n)&&(t=a(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(Z,ee).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=E[e+" "];return t||(t=new RegExp("(^|"+M+")"+e+"("+M+"|$)"))&&E(e,function(e){return t.test("string"==typeof e.className&&e.className||"undefined"!=typeof e.getAttribute&&e.getAttribute("class")||"")})},ATTR:function(e,t,n){return function(r){var i=oe.attr(r,e);return null==i?"!="===t:!t||(i+="","="===t?i===n:"!="===t?i!==n:"^="===t?n&&0===i.indexOf(n):"*="===t?n&&i.indexOf(n)>-1:"$="===t?n&&i.slice(-n.length)===n:"~="===t?(" "+i.replace($," ")+" ").indexOf(n)>-1:"|="===t&&(i===n||i.slice(0,n.length+1)===n+"-"))}},CHILD:function(e,t,n,r,i){var o="nth"!==e.slice(0,3),a="last"!==e.slice(-4),s="of-type"===t;return 1===r&&0===i?function(e){return!!e.parentNode}:function(t,n,u){var l,c,f,p,d,h,g=o!==a?"nextSibling":"previousSibling",y=t.parentNode,v=s&&t.nodeName.toLowerCase(),m=!u&&!s,x=!1;if(y){if(o){while(g){p=t;while(p=p[g])if(s?p.nodeName.toLowerCase()===v:1===p.nodeType)return!1;h=g="only"===e&&!h&&"nextSibling"}return!0}if(h=[a?y.firstChild:y.lastChild],a&&m){x=(d=(l=(c=(f=(p=y)[b]||(p[b]={}))[p.uniqueID]||(f[p.uniqueID]={}))[e]||[])[0]===T&&l[1])&&l[2],p=d&&y.childNodes[d];while(p=++d&&p&&p[g]||(x=d=0)||h.pop())if(1===p.nodeType&&++x&&p===t){c[e]=[T,d,x];break}}else if(m&&(x=d=(l=(c=(f=(p=t)[b]||(p[b]={}))[p.uniqueID]||(f[p.uniqueID]={}))[e]||[])[0]===T&&l[1]),!1===x)while(p=++d&&p&&p[g]||(x=d=0)||h.pop())if((s?p.nodeName.toLowerCase()===v:1===p.nodeType)&&++x&&(m&&((c=(f=p[b]||(p[b]={}))[p.uniqueID]||(f[p.uniqueID]={}))[e]=[T,x]),p===t))break;return(x-=i)===r||x%r==0&&x/r>=0}}},PSEUDO:function(e,t){var n,i=r.pseudos[e]||r.setFilters[e.toLowerCase()]||oe.error("unsupported pseudo: "+e);return i[b]?i(t):i.length>1?(n=[e,e,"",t],r.setFilters.hasOwnProperty(e.toLowerCase())?se(function(e,n){var r,o=i(e,t),a=o.length;while(a--)e[r=O(e,o[a])]=!(n[r]=o[a])}):function(e){return i(e,0,n)}):i}},pseudos:{not:se(function(e){var t=[],n=[],r=s(e.replace(B,"$1"));return r[b]?se(function(e,t,n,i){var o,a=r(e,null,i,[]),s=e.length;while(s--)(o=a[s])&&(e[s]=!(t[s]=o))}):function(e,i,o){return t[0]=e,r(t,null,o,n),t[0]=null,!n.pop()}}),has:se(function(e){return function(t){return oe(e,t).length>0}}),contains:se(function(e){return e=e.replace(Z,ee),function(t){return(t.textContent||t.innerText||i(t)).indexOf(e)>-1}}),lang:se(function(e){return U.test(e||"")||oe.error("unsupported lang: "+e),e=e.replace(Z,ee).toLowerCase(),function(t){var n;do{if(n=g?t.lang:t.getAttribute("xml:lang")||t.getAttribute("lang"))return(n=n.toLowerCase())===e||0===n.indexOf(e+"-")}while((t=t.parentNode)&&1===t.nodeType);return!1}}),target:function(t){var n=e.location&&e.location.hash;return n&&n.slice(1)===t.id},root:function(e){return e===h},focus:function(e){return e===d.activeElement&&(!d.hasFocus||d.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:de(!1),disabled:de(!0),checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,!0===e.selected},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!r.pseudos.empty(e)},header:function(e){return Y.test(e.nodeName)},input:function(e){return G.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:he(function(){return[0]}),last:he(function(e,t){return[t-1]}),eq:he(function(e,t,n){return[n<0?n+t:n]}),even:he(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e}),odd:he(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e}),lt:he(function(e,t,n){for(var r=n<0?n+t:n;--r>=0;)e.push(r);return e}),gt:he(function(e,t,n){for(var r=n<0?n+t:n;++r<t;)e.push(r);return e})}}).pseudos.nth=r.pseudos.eq;for(t in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})r.pseudos[t]=fe(t);for(t in{submit:!0,reset:!0})r.pseudos[t]=pe(t);function ye(){}ye.prototype=r.filters=r.pseudos,r.setFilters=new ye,a=oe.tokenize=function(e,t){var n,i,o,a,s,u,l,c=k[e+" "];if(c)return t?0:c.slice(0);s=e,u=[],l=r.preFilter;while(s){n&&!(i=F.exec(s))||(i&&(s=s.slice(i[0].length)||s),u.push(o=[])),n=!1,(i=_.exec(s))&&(n=i.shift(),o.push({value:n,type:i[0].replace(B," ")}),s=s.slice(n.length));for(a in r.filter)!(i=V[a].exec(s))||l[a]&&!(i=l[a](i))||(n=i.shift(),o.push({value:n,type:a,matches:i}),s=s.slice(n.length));if(!n)break}return t?s.length:s?oe.error(e):k(e,u).slice(0)};function ve(e){for(var t=0,n=e.length,r="";t<n;t++)r+=e[t].value;return r}function me(e,t,n){var r=t.dir,i=t.next,o=i||r,a=n&&"parentNode"===o,s=C++;return t.first?function(t,n,i){while(t=t[r])if(1===t.nodeType||a)return e(t,n,i);return!1}:function(t,n,u){var l,c,f,p=[T,s];if(u){while(t=t[r])if((1===t.nodeType||a)&&e(t,n,u))return!0}else while(t=t[r])if(1===t.nodeType||a)if(f=t[b]||(t[b]={}),c=f[t.uniqueID]||(f[t.uniqueID]={}),i&&i===t.nodeName.toLowerCase())t=t[r]||t;else{if((l=c[o])&&l[0]===T&&l[1]===s)return p[2]=l[2];if(c[o]=p,p[2]=e(t,n,u))return!0}return!1}}function xe(e){return e.length>1?function(t,n,r){var i=e.length;while(i--)if(!e[i](t,n,r))return!1;return!0}:e[0]}function be(e,t,n){for(var r=0,i=t.length;r<i;r++)oe(e,t[r],n);return n}function we(e,t,n,r,i){for(var o,a=[],s=0,u=e.length,l=null!=t;s<u;s++)(o=e[s])&&(n&&!n(o,r,i)||(a.push(o),l&&t.push(s)));return a}function Te(e,t,n,r,i,o){return r&&!r[b]&&(r=Te(r)),i&&!i[b]&&(i=Te(i,o)),se(function(o,a,s,u){var l,c,f,p=[],d=[],h=a.length,g=o||be(t||"*",s.nodeType?[s]:s,[]),y=!e||!o&&t?g:we(g,p,e,s,u),v=n?i||(o?e:h||r)?[]:a:y;if(n&&n(y,v,s,u),r){l=we(v,d),r(l,[],s,u),c=l.length;while(c--)(f=l[c])&&(v[d[c]]=!(y[d[c]]=f))}if(o){if(i||e){if(i){l=[],c=v.length;while(c--)(f=v[c])&&l.push(y[c]=f);i(null,v=[],l,u)}c=v.length;while(c--)(f=v[c])&&(l=i?O(o,f):p[c])>-1&&(o[l]=!(a[l]=f))}}else v=we(v===a?v.splice(h,v.length):v),i?i(null,a,v,u):L.apply(a,v)})}function Ce(e){for(var t,n,i,o=e.length,a=r.relative[e[0].type],s=a||r.relative[" "],u=a?1:0,c=me(function(e){return e===t},s,!0),f=me(function(e){return O(t,e)>-1},s,!0),p=[function(e,n,r){var i=!a&&(r||n!==l)||((t=n).nodeType?c(e,n,r):f(e,n,r));return t=null,i}];u<o;u++)if(n=r.relative[e[u].type])p=[me(xe(p),n)];else{if((n=r.filter[e[u].type].apply(null,e[u].matches))[b]){for(i=++u;i<o;i++)if(r.relative[e[i].type])break;return Te(u>1&&xe(p),u>1&&ve(e.slice(0,u-1).concat({value:" "===e[u-2].type?"*":""})).replace(B,"$1"),n,u<i&&Ce(e.slice(u,i)),i<o&&Ce(e=e.slice(i)),i<o&&ve(e))}p.push(n)}return xe(p)}function Ee(e,t){var n=t.length>0,i=e.length>0,o=function(o,a,s,u,c){var f,h,y,v=0,m="0",x=o&&[],b=[],w=l,C=o||i&&r.find.TAG("*",c),E=T+=null==w?1:Math.random()||.1,k=C.length;for(c&&(l=a===d||a||c);m!==k&&null!=(f=C[m]);m++){if(i&&f){h=0,a||f.ownerDocument===d||(p(f),s=!g);while(y=e[h++])if(y(f,a||d,s)){u.push(f);break}c&&(T=E)}n&&((f=!y&&f)&&v--,o&&x.push(f))}if(v+=m,n&&m!==v){h=0;while(y=t[h++])y(x,b,a,s);if(o){if(v>0)while(m--)x[m]||b[m]||(b[m]=j.call(u));b=we(b)}L.apply(u,b),c&&!o&&b.length>0&&v+t.length>1&&oe.uniqueSort(u)}return c&&(T=E,l=w),x};return n?se(o):o}return s=oe.compile=function(e,t){var n,r=[],i=[],o=S[e+" "];if(!o){t||(t=a(e)),n=t.length;while(n--)(o=Ce(t[n]))[b]?r.push(o):i.push(o);(o=S(e,Ee(i,r))).selector=e}return o},u=oe.select=function(e,t,n,i){var o,u,l,c,f,p="function"==typeof e&&e,d=!i&&a(e=p.selector||e);if(n=n||[],1===d.length){if((u=d[0]=d[0].slice(0)).length>2&&"ID"===(l=u[0]).type&&9===t.nodeType&&g&&r.relative[u[1].type]){if(!(t=(r.find.ID(l.matches[0].replace(Z,ee),t)||[])[0]))return n;p&&(t=t.parentNode),e=e.slice(u.shift().value.length)}o=V.needsContext.test(e)?0:u.length;while(o--){if(l=u[o],r.relative[c=l.type])break;if((f=r.find[c])&&(i=f(l.matches[0].replace(Z,ee),K.test(u[0].type)&&ge(t.parentNode)||t))){if(u.splice(o,1),!(e=i.length&&ve(u)))return L.apply(n,i),n;break}}}return(p||s(e,d))(i,t,!g,n,!t||K.test(e)&&ge(t.parentNode)||t),n},n.sortStable=b.split("").sort(D).join("")===b,n.detectDuplicates=!!f,p(),n.sortDetached=ue(function(e){return 1&e.compareDocumentPosition(d.createElement("fieldset"))}),ue(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||le("type|href|height|width",function(e,t,n){if(!n)return e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),n.attributes&&ue(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||le("value",function(e,t,n){if(!n&&"input"===e.nodeName.toLowerCase())return e.defaultValue}),ue(function(e){return null==e.getAttribute("disabled")})||le(P,function(e,t,n){var r;if(!n)return!0===e[t]?t.toLowerCase():(r=e.getAttributeNode(t))&&r.specified?r.value:null}),oe}(e);w.find=E,w.expr=E.selectors,w.expr[":"]=w.expr.pseudos,w.uniqueSort=w.unique=E.uniqueSort,w.text=E.getText,w.isXMLDoc=E.isXML,w.contains=E.contains,w.escapeSelector=E.escape;var k=function(e,t,n){var r=[],i=void 0!==n;while((e=e[t])&&9!==e.nodeType)if(1===e.nodeType){if(i&&w(e).is(n))break;r.push(e)}return r},S=function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n},D=w.expr.match.needsContext;function N(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()}var A=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function j(e,t,n){return g(t)?w.grep(e,function(e,r){return!!t.call(e,r,e)!==n}):t.nodeType?w.grep(e,function(e){return e===t!==n}):"string"!=typeof t?w.grep(e,function(e){return u.call(t,e)>-1!==n}):w.filter(t,e,n)}w.filter=function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?w.find.matchesSelector(r,e)?[r]:[]:w.find.matches(e,w.grep(t,function(e){return 1===e.nodeType}))},w.fn.extend({find:function(e){var t,n,r=this.length,i=this;if("string"!=typeof e)return this.pushStack(w(e).filter(function(){for(t=0;t<r;t++)if(w.contains(i[t],this))return!0}));for(n=this.pushStack([]),t=0;t<r;t++)w.find(e,i[t],n);return r>1?w.uniqueSort(n):n},filter:function(e){return this.pushStack(j(this,e||[],!1))},not:function(e){return this.pushStack(j(this,e||[],!0))},is:function(e){return!!j(this,"string"==typeof e&&D.test(e)?w(e):e||[],!1).length}});var q,L=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;(w.fn.init=function(e,t,n){var i,o;if(!e)return this;if(n=n||q,"string"==typeof e){if(!(i="<"===e[0]&&">"===e[e.length-1]&&e.length>=3?[null,e,null]:L.exec(e))||!i[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);if(i[1]){if(t=t instanceof w?t[0]:t,w.merge(this,w.parseHTML(i[1],t&&t.nodeType?t.ownerDocument||t:r,!0)),A.test(i[1])&&w.isPlainObject(t))for(i in t)g(this[i])?this[i](t[i]):this.attr(i,t[i]);return this}return(o=r.getElementById(i[2]))&&(this[0]=o,this.length=1),this}return e.nodeType?(this[0]=e,this.length=1,this):g(e)?void 0!==n.ready?n.ready(e):e(w):w.makeArray(e,this)}).prototype=w.fn,q=w(r);var H=/^(?:parents|prev(?:Until|All))/,O={children:!0,contents:!0,next:!0,prev:!0};w.fn.extend({has:function(e){var t=w(e,this),n=t.length;return this.filter(function(){for(var e=0;e<n;e++)if(w.contains(this,t[e]))return!0})},closest:function(e,t){var n,r=0,i=this.length,o=[],a="string"!=typeof e&&w(e);if(!D.test(e))for(;r<i;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(a?a.index(n)>-1:1===n.nodeType&&w.find.matchesSelector(n,e))){o.push(n);break}return this.pushStack(o.length>1?w.uniqueSort(o):o)},index:function(e){return e?"string"==typeof e?u.call(w(e),this[0]):u.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(w.uniqueSort(w.merge(this.get(),w(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}});function P(e,t){while((e=e[t])&&1!==e.nodeType);return e}w.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return k(e,"parentNode")},parentsUntil:function(e,t,n){return k(e,"parentNode",n)},next:function(e){return P(e,"nextSibling")},prev:function(e){return P(e,"previousSibling")},nextAll:function(e){return k(e,"nextSibling")},prevAll:function(e){return k(e,"previousSibling")},nextUntil:function(e,t,n){return k(e,"nextSibling",n)},prevUntil:function(e,t,n){return k(e,"previousSibling",n)},siblings:function(e){return S((e.parentNode||{}).firstChild,e)},children:function(e){return S(e.firstChild)},contents:function(e){return N(e,"iframe")?e.contentDocument:(N(e,"template")&&(e=e.content||e),w.merge([],e.childNodes))}},function(e,t){w.fn[e]=function(n,r){var i=w.map(this,t,n);return"Until"!==e.slice(-5)&&(r=n),r&&"string"==typeof r&&(i=w.filter(r,i)),this.length>1&&(O[e]||w.uniqueSort(i),H.test(e)&&i.reverse()),this.pushStack(i)}});var M=/[^\x20\t\r\n\f]+/g;function R(e){var t={};return w.each(e.match(M)||[],function(e,n){t[n]=!0}),t}w.Callbacks=function(e){e="string"==typeof e?R(e):w.extend({},e);var t,n,r,i,o=[],a=[],s=-1,u=function(){for(i=i||e.once,r=t=!0;a.length;s=-1){n=a.shift();while(++s<o.length)!1===o[s].apply(n[0],n[1])&&e.stopOnFalse&&(s=o.length,n=!1)}e.memory||(n=!1),t=!1,i&&(o=n?[]:"")},l={add:function(){return o&&(n&&!t&&(s=o.length-1,a.push(n)),function t(n){w.each(n,function(n,r){g(r)?e.unique&&l.has(r)||o.push(r):r&&r.length&&"string"!==x(r)&&t(r)})}(arguments),n&&!t&&u()),this},remove:function(){return w.each(arguments,function(e,t){var n;while((n=w.inArray(t,o,n))>-1)o.splice(n,1),n<=s&&s--}),this},has:function(e){return e?w.inArray(e,o)>-1:o.length>0},empty:function(){return o&&(o=[]),this},disable:function(){return i=a=[],o=n="",this},disabled:function(){return!o},lock:function(){return i=a=[],n||t||(o=n=""),this},locked:function(){return!!i},fireWith:function(e,n){return i||(n=[e,(n=n||[]).slice?n.slice():n],a.push(n),t||u()),this},fire:function(){return l.fireWith(this,arguments),this},fired:function(){return!!r}};return l};function I(e){return e}function W(e){throw e}function $(e,t,n,r){var i;try{e&&g(i=e.promise)?i.call(e).done(t).fail(n):e&&g(i=e.then)?i.call(e,t,n):t.apply(void 0,[e].slice(r))}catch(e){n.apply(void 0,[e])}}w.extend({Deferred:function(t){var n=[["notify","progress",w.Callbacks("memory"),w.Callbacks("memory"),2],["resolve","done",w.Callbacks("once memory"),w.Callbacks("once memory"),0,"resolved"],["reject","fail",w.Callbacks("once memory"),w.Callbacks("once memory"),1,"rejected"]],r="pending",i={state:function(){return r},always:function(){return o.done(arguments).fail(arguments),this},"catch":function(e){return i.then(null,e)},pipe:function(){var e=arguments;return w.Deferred(function(t){w.each(n,function(n,r){var i=g(e[r[4]])&&e[r[4]];o[r[1]](function(){var e=i&&i.apply(this,arguments);e&&g(e.promise)?e.promise().progress(t.notify).done(t.resolve).fail(t.reject):t[r[0]+"With"](this,i?[e]:arguments)})}),e=null}).promise()},then:function(t,r,i){var o=0;function a(t,n,r,i){return function(){var s=this,u=arguments,l=function(){var e,l;if(!(t<o)){if((e=r.apply(s,u))===n.promise())throw new TypeError("Thenable self-resolution");l=e&&("object"==typeof e||"function"==typeof e)&&e.then,g(l)?i?l.call(e,a(o,n,I,i),a(o,n,W,i)):(o++,l.call(e,a(o,n,I,i),a(o,n,W,i),a(o,n,I,n.notifyWith))):(r!==I&&(s=void 0,u=[e]),(i||n.resolveWith)(s,u))}},c=i?l:function(){try{l()}catch(e){w.Deferred.exceptionHook&&w.Deferred.exceptionHook(e,c.stackTrace),t+1>=o&&(r!==W&&(s=void 0,u=[e]),n.rejectWith(s,u))}};t?c():(w.Deferred.getStackHook&&(c.stackTrace=w.Deferred.getStackHook()),e.setTimeout(c))}}return w.Deferred(function(e){n[0][3].add(a(0,e,g(i)?i:I,e.notifyWith)),n[1][3].add(a(0,e,g(t)?t:I)),n[2][3].add(a(0,e,g(r)?r:W))}).promise()},promise:function(e){return null!=e?w.extend(e,i):i}},o={};return w.each(n,function(e,t){var a=t[2],s=t[5];i[t[1]]=a.add,s&&a.add(function(){r=s},n[3-e][2].disable,n[3-e][3].disable,n[0][2].lock,n[0][3].lock),a.add(t[3].fire),o[t[0]]=function(){return o[t[0]+"With"](this===o?void 0:this,arguments),this},o[t[0]+"With"]=a.fireWith}),i.promise(o),t&&t.call(o,o),o},when:function(e){var t=arguments.length,n=t,r=Array(n),i=o.call(arguments),a=w.Deferred(),s=function(e){return function(n){r[e]=this,i[e]=arguments.length>1?o.call(arguments):n,--t||a.resolveWith(r,i)}};if(t<=1&&($(e,a.done(s(n)).resolve,a.reject,!t),"pending"===a.state()||g(i[n]&&i[n].then)))return a.then();while(n--)$(i[n],s(n),a.reject);return a.promise()}});var B=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;w.Deferred.exceptionHook=function(t,n){e.console&&e.console.warn&&t&&B.test(t.name)&&e.console.warn("jQuery.Deferred exception: "+t.message,t.stack,n)},w.readyException=function(t){e.setTimeout(function(){throw t})};var F=w.Deferred();w.fn.ready=function(e){return F.then(e)["catch"](function(e){w.readyException(e)}),this},w.extend({isReady:!1,readyWait:1,ready:function(e){(!0===e?--w.readyWait:w.isReady)||(w.isReady=!0,!0!==e&&--w.readyWait>0||F.resolveWith(r,[w]))}}),w.ready.then=F.then;function _(){r.removeEventListener("DOMContentLoaded",_),e.removeEventListener("load",_),w.ready()}"complete"===r.readyState||"loading"!==r.readyState&&!r.documentElement.doScroll?e.setTimeout(w.ready):(r.addEventListener("DOMContentLoaded",_),e.addEventListener("load",_));var z=function(e,t,n,r,i,o,a){var s=0,u=e.length,l=null==n;if("object"===x(n)){i=!0;for(s in n)z(e,t,s,n[s],!0,o,a)}else if(void 0!==r&&(i=!0,g(r)||(a=!0),l&&(a?(t.call(e,r),t=null):(l=t,t=function(e,t,n){return l.call(w(e),n)})),t))for(;s<u;s++)t(e[s],n,a?r:r.call(e[s],s,t(e[s],n)));return i?e:l?t.call(e):u?t(e[0],n):o},X=/^-ms-/,U=/-([a-z])/g;function V(e,t){return t.toUpperCase()}function G(e){return e.replace(X,"ms-").replace(U,V)}var Y=function(e){return 1===e.nodeType||9===e.nodeType||!+e.nodeType};function Q(){this.expando=w.expando+Q.uid++}Q.uid=1,Q.prototype={cache:function(e){var t=e[this.expando];return t||(t={},Y(e)&&(e.nodeType?e[this.expando]=t:Object.defineProperty(e,this.expando,{value:t,configurable:!0}))),t},set:function(e,t,n){var r,i=this.cache(e);if("string"==typeof t)i[G(t)]=n;else for(r in t)i[G(r)]=t[r];return i},get:function(e,t){return void 0===t?this.cache(e):e[this.expando]&&e[this.expando][G(t)]},access:function(e,t,n){return void 0===t||t&&"string"==typeof t&&void 0===n?this.get(e,t):(this.set(e,t,n),void 0!==n?n:t)},remove:function(e,t){var n,r=e[this.expando];if(void 0!==r){if(void 0!==t){n=(t=Array.isArray(t)?t.map(G):(t=G(t))in r?[t]:t.match(M)||[]).length;while(n--)delete r[t[n]]}(void 0===t||w.isEmptyObject(r))&&(e.nodeType?e[this.expando]=void 0:delete e[this.expando])}},hasData:function(e){var t=e[this.expando];return void 0!==t&&!w.isEmptyObject(t)}};var J=new Q,K=new Q,Z=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,ee=/[A-Z]/g;function te(e){return"true"===e||"false"!==e&&("null"===e?null:e===+e+""?+e:Z.test(e)?JSON.parse(e):e)}function ne(e,t,n){var r;if(void 0===n&&1===e.nodeType)if(r="data-"+t.replace(ee,"-$&").toLowerCase(),"string"==typeof(n=e.getAttribute(r))){try{n=te(n)}catch(e){}K.set(e,t,n)}else n=void 0;return n}w.extend({hasData:function(e){return K.hasData(e)||J.hasData(e)},data:function(e,t,n){return K.access(e,t,n)},removeData:function(e,t){K.remove(e,t)},_data:function(e,t,n){return J.access(e,t,n)},_removeData:function(e,t){J.remove(e,t)}}),w.fn.extend({data:function(e,t){var n,r,i,o=this[0],a=o&&o.attributes;if(void 0===e){if(this.length&&(i=K.get(o),1===o.nodeType&&!J.get(o,"hasDataAttrs"))){n=a.length;while(n--)a[n]&&0===(r=a[n].name).indexOf("data-")&&(r=G(r.slice(5)),ne(o,r,i[r]));J.set(o,"hasDataAttrs",!0)}return i}return"object"==typeof e?this.each(function(){K.set(this,e)}):z(this,function(t){var n;if(o&&void 0===t){if(void 0!==(n=K.get(o,e)))return n;if(void 0!==(n=ne(o,e)))return n}else this.each(function(){K.set(this,e,t)})},null,t,arguments.length>1,null,!0)},removeData:function(e){return this.each(function(){K.remove(this,e)})}}),w.extend({queue:function(e,t,n){var r;if(e)return t=(t||"fx")+"queue",r=J.get(e,t),n&&(!r||Array.isArray(n)?r=J.access(e,t,w.makeArray(n)):r.push(n)),r||[]},dequeue:function(e,t){t=t||"fx";var n=w.queue(e,t),r=n.length,i=n.shift(),o=w._queueHooks(e,t),a=function(){w.dequeue(e,t)};"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,a,o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return J.get(e,n)||J.access(e,n,{empty:w.Callbacks("once memory").add(function(){J.remove(e,[t+"queue",n])})})}}),w.fn.extend({queue:function(e,t){var n=2;return"string"!=typeof e&&(t=e,e="fx",n--),arguments.length<n?w.queue(this[0],e):void 0===t?this:this.each(function(){var n=w.queue(this,e,t);w._queueHooks(this,e),"fx"===e&&"inprogress"!==n[0]&&w.dequeue(this,e)})},dequeue:function(e){return this.each(function(){w.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,r=1,i=w.Deferred(),o=this,a=this.length,s=function(){--r||i.resolveWith(o,[o])};"string"!=typeof e&&(t=e,e=void 0),e=e||"fx";while(a--)(n=J.get(o[a],e+"queueHooks"))&&n.empty&&(r++,n.empty.add(s));return s(),i.promise(t)}});var re=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,ie=new RegExp("^(?:([+-])=|)("+re+")([a-z%]*)$","i"),oe=["Top","Right","Bottom","Left"],ae=function(e,t){return"none"===(e=t||e).style.display||""===e.style.display&&w.contains(e.ownerDocument,e)&&"none"===w.css(e,"display")},se=function(e,t,n,r){var i,o,a={};for(o in t)a[o]=e.style[o],e.style[o]=t[o];i=n.apply(e,r||[]);for(o in t)e.style[o]=a[o];return i};function ue(e,t,n,r){var i,o,a=20,s=r?function(){return r.cur()}:function(){return w.css(e,t,"")},u=s(),l=n&&n[3]||(w.cssNumber[t]?"":"px"),c=(w.cssNumber[t]||"px"!==l&&+u)&&ie.exec(w.css(e,t));if(c&&c[3]!==l){u/=2,l=l||c[3],c=+u||1;while(a--)w.style(e,t,c+l),(1-o)*(1-(o=s()/u||.5))<=0&&(a=0),c/=o;c*=2,w.style(e,t,c+l),n=n||[]}return n&&(c=+c||+u||0,i=n[1]?c+(n[1]+1)*n[2]:+n[2],r&&(r.unit=l,r.start=c,r.end=i)),i}var le={};function ce(e){var t,n=e.ownerDocument,r=e.nodeName,i=le[r];return i||(t=n.body.appendChild(n.createElement(r)),i=w.css(t,"display"),t.parentNode.removeChild(t),"none"===i&&(i="block"),le[r]=i,i)}function fe(e,t){for(var n,r,i=[],o=0,a=e.length;o<a;o++)(r=e[o]).style&&(n=r.style.display,t?("none"===n&&(i[o]=J.get(r,"display")||null,i[o]||(r.style.display="")),""===r.style.display&&ae(r)&&(i[o]=ce(r))):"none"!==n&&(i[o]="none",J.set(r,"display",n)));for(o=0;o<a;o++)null!=i[o]&&(e[o].style.display=i[o]);return e}w.fn.extend({show:function(){return fe(this,!0)},hide:function(){return fe(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){ae(this)?w(this).show():w(this).hide()})}});var pe=/^(?:checkbox|radio)$/i,de=/<([a-z][^\/\0>\x20\t\r\n\f]+)/i,he=/^$|^module$|\/(?:java|ecma)script/i,ge={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ge.optgroup=ge.option,ge.tbody=ge.tfoot=ge.colgroup=ge.caption=ge.thead,ge.th=ge.td;function ye(e,t){var n;return n="undefined"!=typeof e.getElementsByTagName?e.getElementsByTagName(t||"*"):"undefined"!=typeof e.querySelectorAll?e.querySelectorAll(t||"*"):[],void 0===t||t&&N(e,t)?w.merge([e],n):n}function ve(e,t){for(var n=0,r=e.length;n<r;n++)J.set(e[n],"globalEval",!t||J.get(t[n],"globalEval"))}var me=/<|&#?\w+;/;function xe(e,t,n,r,i){for(var o,a,s,u,l,c,f=t.createDocumentFragment(),p=[],d=0,h=e.length;d<h;d++)if((o=e[d])||0===o)if("object"===x(o))w.merge(p,o.nodeType?[o]:o);else if(me.test(o)){a=a||f.appendChild(t.createElement("div")),s=(de.exec(o)||["",""])[1].toLowerCase(),u=ge[s]||ge._default,a.innerHTML=u[1]+w.htmlPrefilter(o)+u[2],c=u[0];while(c--)a=a.lastChild;w.merge(p,a.childNodes),(a=f.firstChild).textContent=""}else p.push(t.createTextNode(o));f.textContent="",d=0;while(o=p[d++])if(r&&w.inArray(o,r)>-1)i&&i.push(o);else if(l=w.contains(o.ownerDocument,o),a=ye(f.appendChild(o),"script"),l&&ve(a),n){c=0;while(o=a[c++])he.test(o.type||"")&&n.push(o)}return f}!function(){var e=r.createDocumentFragment().appendChild(r.createElement("div")),t=r.createElement("input");t.setAttribute("type","radio"),t.setAttribute("checked","checked"),t.setAttribute("name","t"),e.appendChild(t),h.checkClone=e.cloneNode(!0).cloneNode(!0).lastChild.checked,e.innerHTML="<textarea>x</textarea>",h.noCloneChecked=!!e.cloneNode(!0).lastChild.defaultValue}();var be=r.documentElement,we=/^key/,Te=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,Ce=/^([^.]*)(?:\.(.+)|)/;function Ee(){return!0}function ke(){return!1}function Se(){try{return r.activeElement}catch(e){}}function De(e,t,n,r,i,o){var a,s;if("object"==typeof t){"string"!=typeof n&&(r=r||n,n=void 0);for(s in t)De(e,s,n,r,t[s],o);return e}if(null==r&&null==i?(i=n,r=n=void 0):null==i&&("string"==typeof n?(i=r,r=void 0):(i=r,r=n,n=void 0)),!1===i)i=ke;else if(!i)return e;return 1===o&&(a=i,(i=function(e){return w().off(e),a.apply(this,arguments)}).guid=a.guid||(a.guid=w.guid++)),e.each(function(){w.event.add(this,t,i,r,n)})}w.event={global:{},add:function(e,t,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,y=J.get(e);if(y){n.handler&&(n=(o=n).handler,i=o.selector),i&&w.find.matchesSelector(be,i),n.guid||(n.guid=w.guid++),(u=y.events)||(u=y.events={}),(a=y.handle)||(a=y.handle=function(t){return"undefined"!=typeof w&&w.event.triggered!==t.type?w.event.dispatch.apply(e,arguments):void 0}),l=(t=(t||"").match(M)||[""]).length;while(l--)d=g=(s=Ce.exec(t[l])||[])[1],h=(s[2]||"").split(".").sort(),d&&(f=w.event.special[d]||{},d=(i?f.delegateType:f.bindType)||d,f=w.event.special[d]||{},c=w.extend({type:d,origType:g,data:r,handler:n,guid:n.guid,selector:i,needsContext:i&&w.expr.match.needsContext.test(i),namespace:h.join(".")},o),(p=u[d])||((p=u[d]=[]).delegateCount=0,f.setup&&!1!==f.setup.call(e,r,h,a)||e.addEventListener&&e.addEventListener(d,a)),f.add&&(f.add.call(e,c),c.handler.guid||(c.handler.guid=n.guid)),i?p.splice(p.delegateCount++,0,c):p.push(c),w.event.global[d]=!0)}},remove:function(e,t,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,y=J.hasData(e)&&J.get(e);if(y&&(u=y.events)){l=(t=(t||"").match(M)||[""]).length;while(l--)if(s=Ce.exec(t[l])||[],d=g=s[1],h=(s[2]||"").split(".").sort(),d){f=w.event.special[d]||{},p=u[d=(r?f.delegateType:f.bindType)||d]||[],s=s[2]&&new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),a=o=p.length;while(o--)c=p[o],!i&&g!==c.origType||n&&n.guid!==c.guid||s&&!s.test(c.namespace)||r&&r!==c.selector&&("**"!==r||!c.selector)||(p.splice(o,1),c.selector&&p.delegateCount--,f.remove&&f.remove.call(e,c));a&&!p.length&&(f.teardown&&!1!==f.teardown.call(e,h,y.handle)||w.removeEvent(e,d,y.handle),delete u[d])}else for(d in u)w.event.remove(e,d+t[l],n,r,!0);w.isEmptyObject(u)&&J.remove(e,"handle events")}},dispatch:function(e){var t=w.event.fix(e),n,r,i,o,a,s,u=new Array(arguments.length),l=(J.get(this,"events")||{})[t.type]||[],c=w.event.special[t.type]||{};for(u[0]=t,n=1;n<arguments.length;n++)u[n]=arguments[n];if(t.delegateTarget=this,!c.preDispatch||!1!==c.preDispatch.call(this,t)){s=w.event.handlers.call(this,t,l),n=0;while((o=s[n++])&&!t.isPropagationStopped()){t.currentTarget=o.elem,r=0;while((a=o.handlers[r++])&&!t.isImmediatePropagationStopped())t.rnamespace&&!t.rnamespace.test(a.namespace)||(t.handleObj=a,t.data=a.data,void 0!==(i=((w.event.special[a.origType]||{}).handle||a.handler).apply(o.elem,u))&&!1===(t.result=i)&&(t.preventDefault(),t.stopPropagation()))}return c.postDispatch&&c.postDispatch.call(this,t),t.result}},handlers:function(e,t){var n,r,i,o,a,s=[],u=t.delegateCount,l=e.target;if(u&&l.nodeType&&!("click"===e.type&&e.button>=1))for(;l!==this;l=l.parentNode||this)if(1===l.nodeType&&("click"!==e.type||!0!==l.disabled)){for(o=[],a={},n=0;n<u;n++)void 0===a[i=(r=t[n]).selector+" "]&&(a[i]=r.needsContext?w(i,this).index(l)>-1:w.find(i,this,null,[l]).length),a[i]&&o.push(r);o.length&&s.push({elem:l,handlers:o})}return l=this,u<t.length&&s.push({elem:l,handlers:t.slice(u)}),s},addProp:function(e,t){Object.defineProperty(w.Event.prototype,e,{enumerable:!0,configurable:!0,get:g(t)?function(){if(this.originalEvent)return t(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[e]},set:function(t){Object.defineProperty(this,e,{enumerable:!0,configurable:!0,writable:!0,value:t})}})},fix:function(e){return e[w.expando]?e:new w.Event(e)},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==Se()&&this.focus)return this.focus(),!1},delegateType:"focusin"},blur:{trigger:function(){if(this===Se()&&this.blur)return this.blur(),!1},delegateType:"focusout"},click:{trigger:function(){if("checkbox"===this.type&&this.click&&N(this,"input"))return this.click(),!1},_default:function(e){return N(e.target,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}}},w.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n)},w.Event=function(e,t){if(!(this instanceof w.Event))return new w.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&!1===e.returnValue?Ee:ke,this.target=e.target&&3===e.target.nodeType?e.target.parentNode:e.target,this.currentTarget=e.currentTarget,this.relatedTarget=e.relatedTarget):this.type=e,t&&w.extend(this,t),this.timeStamp=e&&e.timeStamp||Date.now(),this[w.expando]=!0},w.Event.prototype={constructor:w.Event,isDefaultPrevented:ke,isPropagationStopped:ke,isImmediatePropagationStopped:ke,isSimulated:!1,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=Ee,e&&!this.isSimulated&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=Ee,e&&!this.isSimulated&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=Ee,e&&!this.isSimulated&&e.stopImmediatePropagation(),this.stopPropagation()}},w.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,"char":!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:function(e){var t=e.button;return null==e.which&&we.test(e.type)?null!=e.charCode?e.charCode:e.keyCode:!e.which&&void 0!==t&&Te.test(e.type)?1&t?1:2&t?3:4&t?2:0:e.which}},w.event.addProp),w.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,t){w.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,r=this,i=e.relatedTarget,o=e.handleObj;return i&&(i===r||w.contains(r,i))||(e.type=o.origType,n=o.handler.apply(this,arguments),e.type=t),n}}}),w.fn.extend({on:function(e,t,n,r){return De(this,e,t,n,r)},one:function(e,t,n,r){return De(this,e,t,n,r,1)},off:function(e,t,n){var r,i;if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,w(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this;if("object"==typeof e){for(i in e)this.off(i,t,e[i]);return this}return!1!==t&&"function"!=typeof t||(n=t,t=void 0),!1===n&&(n=ke),this.each(function(){w.event.remove(this,e,n,t)})}});var Ne=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,Ae=/<script|<style|<link/i,je=/checked\s*(?:[^=]|=\s*.checked.)/i,qe=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function Le(e,t){return N(e,"table")&&N(11!==t.nodeType?t:t.firstChild,"tr")?w(e).children("tbody")[0]||e:e}function He(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function Oe(e){return"true/"===(e.type||"").slice(0,5)?e.type=e.type.slice(5):e.removeAttribute("type"),e}function Pe(e,t){var n,r,i,o,a,s,u,l;if(1===t.nodeType){if(J.hasData(e)&&(o=J.access(e),a=J.set(t,o),l=o.events)){delete a.handle,a.events={};for(i in l)for(n=0,r=l[i].length;n<r;n++)w.event.add(t,i,l[i][n])}K.hasData(e)&&(s=K.access(e),u=w.extend({},s),K.set(t,u))}}function Me(e,t){var n=t.nodeName.toLowerCase();"input"===n&&pe.test(e.type)?t.checked=e.checked:"input"!==n&&"textarea"!==n||(t.defaultValue=e.defaultValue)}function Re(e,t,n,r){t=a.apply([],t);var i,o,s,u,l,c,f=0,p=e.length,d=p-1,y=t[0],v=g(y);if(v||p>1&&"string"==typeof y&&!h.checkClone&&je.test(y))return e.each(function(i){var o=e.eq(i);v&&(t[0]=y.call(this,i,o.html())),Re(o,t,n,r)});if(p&&(i=xe(t,e[0].ownerDocument,!1,e,r),o=i.firstChild,1===i.childNodes.length&&(i=o),o||r)){for(u=(s=w.map(ye(i,"script"),He)).length;f<p;f++)l=i,f!==d&&(l=w.clone(l,!0,!0),u&&w.merge(s,ye(l,"script"))),n.call(e[f],l,f);if(u)for(c=s[s.length-1].ownerDocument,w.map(s,Oe),f=0;f<u;f++)l=s[f],he.test(l.type||"")&&!J.access(l,"globalEval")&&w.contains(c,l)&&(l.src&&"module"!==(l.type||"").toLowerCase()?w._evalUrl&&w._evalUrl(l.src):m(l.textContent.replace(qe,""),c,l))}return e}function Ie(e,t,n){for(var r,i=t?w.filter(t,e):e,o=0;null!=(r=i[o]);o++)n||1!==r.nodeType||w.cleanData(ye(r)),r.parentNode&&(n&&w.contains(r.ownerDocument,r)&&ve(ye(r,"script")),r.parentNode.removeChild(r));return e}w.extend({htmlPrefilter:function(e){return e.replace(Ne,"<$1></$2>")},clone:function(e,t,n){var r,i,o,a,s=e.cloneNode(!0),u=w.contains(e.ownerDocument,e);if(!(h.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||w.isXMLDoc(e)))for(a=ye(s),r=0,i=(o=ye(e)).length;r<i;r++)Me(o[r],a[r]);if(t)if(n)for(o=o||ye(e),a=a||ye(s),r=0,i=o.length;r<i;r++)Pe(o[r],a[r]);else Pe(e,s);return(a=ye(s,"script")).length>0&&ve(a,!u&&ye(e,"script")),s},cleanData:function(e){for(var t,n,r,i=w.event.special,o=0;void 0!==(n=e[o]);o++)if(Y(n)){if(t=n[J.expando]){if(t.events)for(r in t.events)i[r]?w.event.remove(n,r):w.removeEvent(n,r,t.handle);n[J.expando]=void 0}n[K.expando]&&(n[K.expando]=void 0)}}}),w.fn.extend({detach:function(e){return Ie(this,e,!0)},remove:function(e){return Ie(this,e)},text:function(e){return z(this,function(e){return void 0===e?w.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=e)})},null,e,arguments.length)},append:function(){return Re(this,arguments,function(e){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||Le(this,e).appendChild(e)})},prepend:function(){return Re(this,arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=Le(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return Re(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return Re(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(w.cleanData(ye(e,!1)),e.textContent="");return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map(function(){return w.clone(this,e,t)})},html:function(e){return z(this,function(e){var t=this[0]||{},n=0,r=this.length;if(void 0===e&&1===t.nodeType)return t.innerHTML;if("string"==typeof e&&!Ae.test(e)&&!ge[(de.exec(e)||["",""])[1].toLowerCase()]){e=w.htmlPrefilter(e);try{for(;n<r;n++)1===(t=this[n]||{}).nodeType&&(w.cleanData(ye(t,!1)),t.innerHTML=e);t=0}catch(e){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var e=[];return Re(this,arguments,function(t){var n=this.parentNode;w.inArray(this,e)<0&&(w.cleanData(ye(this)),n&&n.replaceChild(t,this))},e)}}),w.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){w.fn[e]=function(e){for(var n,r=[],i=w(e),o=i.length-1,a=0;a<=o;a++)n=a===o?this:this.clone(!0),w(i[a])[t](n),s.apply(r,n.get());return this.pushStack(r)}});var We=new RegExp("^("+re+")(?!px)[a-z%]+$","i"),$e=function(t){var n=t.ownerDocument.defaultView;return n&&n.opener||(n=e),n.getComputedStyle(t)},Be=new RegExp(oe.join("|"),"i");!function(){function t(){if(c){l.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",c.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",be.appendChild(l).appendChild(c);var t=e.getComputedStyle(c);i="1%"!==t.top,u=12===n(t.marginLeft),c.style.right="60%",s=36===n(t.right),o=36===n(t.width),c.style.position="absolute",a=36===c.offsetWidth||"absolute",be.removeChild(l),c=null}}function n(e){return Math.round(parseFloat(e))}var i,o,a,s,u,l=r.createElement("div"),c=r.createElement("div");c.style&&(c.style.backgroundClip="content-box",c.cloneNode(!0).style.backgroundClip="",h.clearCloneStyle="content-box"===c.style.backgroundClip,w.extend(h,{boxSizingReliable:function(){return t(),o},pixelBoxStyles:function(){return t(),s},pixelPosition:function(){return t(),i},reliableMarginLeft:function(){return t(),u},scrollboxSize:function(){return t(),a}}))}();function Fe(e,t,n){var r,i,o,a,s=e.style;return(n=n||$e(e))&&(""!==(a=n.getPropertyValue(t)||n[t])||w.contains(e.ownerDocument,e)||(a=w.style(e,t)),!h.pixelBoxStyles()&&We.test(a)&&Be.test(t)&&(r=s.width,i=s.minWidth,o=s.maxWidth,s.minWidth=s.maxWidth=s.width=a,a=n.width,s.width=r,s.minWidth=i,s.maxWidth=o)),void 0!==a?a+"":a}function _e(e,t){return{get:function(){if(!e())return(this.get=t).apply(this,arguments);delete this.get}}}var ze=/^(none|table(?!-c[ea]).+)/,Xe=/^--/,Ue={position:"absolute",visibility:"hidden",display:"block"},Ve={letterSpacing:"0",fontWeight:"400"},Ge=["Webkit","Moz","ms"],Ye=r.createElement("div").style;function Qe(e){if(e in Ye)return e;var t=e[0].toUpperCase()+e.slice(1),n=Ge.length;while(n--)if((e=Ge[n]+t)in Ye)return e}function Je(e){var t=w.cssProps[e];return t||(t=w.cssProps[e]=Qe(e)||e),t}function Ke(e,t,n){var r=ie.exec(t);return r?Math.max(0,r[2]-(n||0))+(r[3]||"px"):t}function Ze(e,t,n,r,i,o){var a="width"===t?1:0,s=0,u=0;if(n===(r?"border":"content"))return 0;for(;a<4;a+=2)"margin"===n&&(u+=w.css(e,n+oe[a],!0,i)),r?("content"===n&&(u-=w.css(e,"padding"+oe[a],!0,i)),"margin"!==n&&(u-=w.css(e,"border"+oe[a]+"Width",!0,i))):(u+=w.css(e,"padding"+oe[a],!0,i),"padding"!==n?u+=w.css(e,"border"+oe[a]+"Width",!0,i):s+=w.css(e,"border"+oe[a]+"Width",!0,i));return!r&&o>=0&&(u+=Math.max(0,Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-o-u-s-.5))),u}function et(e,t,n){var r=$e(e),i=Fe(e,t,r),o="border-box"===w.css(e,"boxSizing",!1,r),a=o;if(We.test(i)){if(!n)return i;i="auto"}return a=a&&(h.boxSizingReliable()||i===e.style[t]),("auto"===i||!parseFloat(i)&&"inline"===w.css(e,"display",!1,r))&&(i=e["offset"+t[0].toUpperCase()+t.slice(1)],a=!0),(i=parseFloat(i)||0)+Ze(e,t,n||(o?"border":"content"),a,r,i)+"px"}w.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=Fe(e,"opacity");return""===n?"1":n}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{},style:function(e,t,n,r){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var i,o,a,s=G(t),u=Xe.test(t),l=e.style;if(u||(t=Je(s)),a=w.cssHooks[t]||w.cssHooks[s],void 0===n)return a&&"get"in a&&void 0!==(i=a.get(e,!1,r))?i:l[t];"string"==(o=typeof n)&&(i=ie.exec(n))&&i[1]&&(n=ue(e,t,i),o="number"),null!=n&&n===n&&("number"===o&&(n+=i&&i[3]||(w.cssNumber[s]?"":"px")),h.clearCloneStyle||""!==n||0!==t.indexOf("background")||(l[t]="inherit"),a&&"set"in a&&void 0===(n=a.set(e,n,r))||(u?l.setProperty(t,n):l[t]=n))}},css:function(e,t,n,r){var i,o,a,s=G(t);return Xe.test(t)||(t=Je(s)),(a=w.cssHooks[t]||w.cssHooks[s])&&"get"in a&&(i=a.get(e,!0,n)),void 0===i&&(i=Fe(e,t,r)),"normal"===i&&t in Ve&&(i=Ve[t]),""===n||n?(o=parseFloat(i),!0===n||isFinite(o)?o||0:i):i}}),w.each(["height","width"],function(e,t){w.cssHooks[t]={get:function(e,n,r){if(n)return!ze.test(w.css(e,"display"))||e.getClientRects().length&&e.getBoundingClientRect().width?et(e,t,r):se(e,Ue,function(){return et(e,t,r)})},set:function(e,n,r){var i,o=$e(e),a="border-box"===w.css(e,"boxSizing",!1,o),s=r&&Ze(e,t,r,a,o);return a&&h.scrollboxSize()===o.position&&(s-=Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-parseFloat(o[t])-Ze(e,t,"border",!1,o)-.5)),s&&(i=ie.exec(n))&&"px"!==(i[3]||"px")&&(e.style[t]=n,n=w.css(e,t)),Ke(e,n,s)}}}),w.cssHooks.marginLeft=_e(h.reliableMarginLeft,function(e,t){if(t)return(parseFloat(Fe(e,"marginLeft"))||e.getBoundingClientRect().left-se(e,{marginLeft:0},function(){return e.getBoundingClientRect().left}))+"px"}),w.each({margin:"",padding:"",border:"Width"},function(e,t){w.cssHooks[e+t]={expand:function(n){for(var r=0,i={},o="string"==typeof n?n.split(" "):[n];r<4;r++)i[e+oe[r]+t]=o[r]||o[r-2]||o[0];return i}},"margin"!==e&&(w.cssHooks[e+t].set=Ke)}),w.fn.extend({css:function(e,t){return z(this,function(e,t,n){var r,i,o={},a=0;if(Array.isArray(t)){for(r=$e(e),i=t.length;a<i;a++)o[t[a]]=w.css(e,t[a],!1,r);return o}return void 0!==n?w.style(e,t,n):w.css(e,t)},e,t,arguments.length>1)}});function tt(e,t,n,r,i){return new tt.prototype.init(e,t,n,r,i)}w.Tween=tt,tt.prototype={constructor:tt,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||w.easing._default,this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(w.cssNumber[n]?"":"px")},cur:function(){var e=tt.propHooks[this.prop];return e&&e.get?e.get(this):tt.propHooks._default.get(this)},run:function(e){var t,n=tt.propHooks[this.prop];return this.options.duration?this.pos=t=w.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):tt.propHooks._default.set(this),this}},tt.prototype.init.prototype=tt.prototype,tt.propHooks={_default:{get:function(e){var t;return 1!==e.elem.nodeType||null!=e.elem[e.prop]&&null==e.elem.style[e.prop]?e.elem[e.prop]:(t=w.css(e.elem,e.prop,""))&&"auto"!==t?t:0},set:function(e){w.fx.step[e.prop]?w.fx.step[e.prop](e):1!==e.elem.nodeType||null==e.elem.style[w.cssProps[e.prop]]&&!w.cssHooks[e.prop]?e.elem[e.prop]=e.now:w.style(e.elem,e.prop,e.now+e.unit)}}},tt.propHooks.scrollTop=tt.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},w.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},_default:"swing"},w.fx=tt.prototype.init,w.fx.step={};var nt,rt,it=/^(?:toggle|show|hide)$/,ot=/queueHooks$/;function at(){rt&&(!1===r.hidden&&e.requestAnimationFrame?e.requestAnimationFrame(at):e.setTimeout(at,w.fx.interval),w.fx.tick())}function st(){return e.setTimeout(function(){nt=void 0}),nt=Date.now()}function ut(e,t){var n,r=0,i={height:e};for(t=t?1:0;r<4;r+=2-t)i["margin"+(n=oe[r])]=i["padding"+n]=e;return t&&(i.opacity=i.width=e),i}function lt(e,t,n){for(var r,i=(pt.tweeners[t]||[]).concat(pt.tweeners["*"]),o=0,a=i.length;o<a;o++)if(r=i[o].call(n,t,e))return r}function ct(e,t,n){var r,i,o,a,s,u,l,c,f="width"in t||"height"in t,p=this,d={},h=e.style,g=e.nodeType&&ae(e),y=J.get(e,"fxshow");n.queue||(null==(a=w._queueHooks(e,"fx")).unqueued&&(a.unqueued=0,s=a.empty.fire,a.empty.fire=function(){a.unqueued||s()}),a.unqueued++,p.always(function(){p.always(function(){a.unqueued--,w.queue(e,"fx").length||a.empty.fire()})}));for(r in t)if(i=t[r],it.test(i)){if(delete t[r],o=o||"toggle"===i,i===(g?"hide":"show")){if("show"!==i||!y||void 0===y[r])continue;g=!0}d[r]=y&&y[r]||w.style(e,r)}if((u=!w.isEmptyObject(t))||!w.isEmptyObject(d)){f&&1===e.nodeType&&(n.overflow=[h.overflow,h.overflowX,h.overflowY],null==(l=y&&y.display)&&(l=J.get(e,"display")),"none"===(c=w.css(e,"display"))&&(l?c=l:(fe([e],!0),l=e.style.display||l,c=w.css(e,"display"),fe([e]))),("inline"===c||"inline-block"===c&&null!=l)&&"none"===w.css(e,"float")&&(u||(p.done(function(){h.display=l}),null==l&&(c=h.display,l="none"===c?"":c)),h.display="inline-block")),n.overflow&&(h.overflow="hidden",p.always(function(){h.overflow=n.overflow[0],h.overflowX=n.overflow[1],h.overflowY=n.overflow[2]})),u=!1;for(r in d)u||(y?"hidden"in y&&(g=y.hidden):y=J.access(e,"fxshow",{display:l}),o&&(y.hidden=!g),g&&fe([e],!0),p.done(function(){g||fe([e]),J.remove(e,"fxshow");for(r in d)w.style(e,r,d[r])})),u=lt(g?y[r]:0,r,p),r in y||(y[r]=u.start,g&&(u.end=u.start,u.start=0))}}function ft(e,t){var n,r,i,o,a;for(n in e)if(r=G(n),i=t[r],o=e[n],Array.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),(a=w.cssHooks[r])&&"expand"in a){o=a.expand(o),delete e[r];for(n in o)n in e||(e[n]=o[n],t[n]=i)}else t[r]=i}function pt(e,t,n){var r,i,o=0,a=pt.prefilters.length,s=w.Deferred().always(function(){delete u.elem}),u=function(){if(i)return!1;for(var t=nt||st(),n=Math.max(0,l.startTime+l.duration-t),r=1-(n/l.duration||0),o=0,a=l.tweens.length;o<a;o++)l.tweens[o].run(r);return s.notifyWith(e,[l,r,n]),r<1&&a?n:(a||s.notifyWith(e,[l,1,0]),s.resolveWith(e,[l]),!1)},l=s.promise({elem:e,props:w.extend({},t),opts:w.extend(!0,{specialEasing:{},easing:w.easing._default},n),originalProperties:t,originalOptions:n,startTime:nt||st(),duration:n.duration,tweens:[],createTween:function(t,n){var r=w.Tween(e,l.opts,t,n,l.opts.specialEasing[t]||l.opts.easing);return l.tweens.push(r),r},stop:function(t){var n=0,r=t?l.tweens.length:0;if(i)return this;for(i=!0;n<r;n++)l.tweens[n].run(1);return t?(s.notifyWith(e,[l,1,0]),s.resolveWith(e,[l,t])):s.rejectWith(e,[l,t]),this}}),c=l.props;for(ft(c,l.opts.specialEasing);o<a;o++)if(r=pt.prefilters[o].call(l,e,c,l.opts))return g(r.stop)&&(w._queueHooks(l.elem,l.opts.queue).stop=r.stop.bind(r)),r;return w.map(c,lt,l),g(l.opts.start)&&l.opts.start.call(e,l),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always),w.fx.timer(w.extend(u,{elem:e,anim:l,queue:l.opts.queue})),l}w.Animation=w.extend(pt,{tweeners:{"*":[function(e,t){var n=this.createTween(e,t);return ue(n.elem,e,ie.exec(t),n),n}]},tweener:function(e,t){g(e)?(t=e,e=["*"]):e=e.match(M);for(var n,r=0,i=e.length;r<i;r++)n=e[r],pt.tweeners[n]=pt.tweeners[n]||[],pt.tweeners[n].unshift(t)},prefilters:[ct],prefilter:function(e,t){t?pt.prefilters.unshift(e):pt.prefilters.push(e)}}),w.speed=function(e,t,n){var r=e&&"object"==typeof e?w.extend({},e):{complete:n||!n&&t||g(e)&&e,duration:e,easing:n&&t||t&&!g(t)&&t};return w.fx.off?r.duration=0:"number"!=typeof r.duration&&(r.duration in w.fx.speeds?r.duration=w.fx.speeds[r.duration]:r.duration=w.fx.speeds._default),null!=r.queue&&!0!==r.queue||(r.queue="fx"),r.old=r.complete,r.complete=function(){g(r.old)&&r.old.call(this),r.queue&&w.dequeue(this,r.queue)},r},w.fn.extend({fadeTo:function(e,t,n,r){return this.filter(ae).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(e,t,n,r){var i=w.isEmptyObject(e),o=w.speed(t,n,r),a=function(){var t=pt(this,w.extend({},e),o);(i||J.get(this,"finish"))&&t.stop(!0)};return a.finish=a,i||!1===o.queue?this.each(a):this.queue(o.queue,a)},stop:function(e,t,n){var r=function(e){var t=e.stop;delete e.stop,t(n)};return"string"!=typeof e&&(n=t,t=e,e=void 0),t&&!1!==e&&this.queue(e||"fx",[]),this.each(function(){var t=!0,i=null!=e&&e+"queueHooks",o=w.timers,a=J.get(this);if(i)a[i]&&a[i].stop&&r(a[i]);else for(i in a)a[i]&&a[i].stop&&ot.test(i)&&r(a[i]);for(i=o.length;i--;)o[i].elem!==this||null!=e&&o[i].queue!==e||(o[i].anim.stop(n),t=!1,o.splice(i,1));!t&&n||w.dequeue(this,e)})},finish:function(e){return!1!==e&&(e=e||"fx"),this.each(function(){var t,n=J.get(this),r=n[e+"queue"],i=n[e+"queueHooks"],o=w.timers,a=r?r.length:0;for(n.finish=!0,w.queue(this,e,[]),i&&i.stop&&i.stop.call(this,!0),t=o.length;t--;)o[t].elem===this&&o[t].queue===e&&(o[t].anim.stop(!0),o.splice(t,1));for(t=0;t<a;t++)r[t]&&r[t].finish&&r[t].finish.call(this);delete n.finish})}}),w.each(["toggle","show","hide"],function(e,t){var n=w.fn[t];w.fn[t]=function(e,r,i){return null==e||"boolean"==typeof e?n.apply(this,arguments):this.animate(ut(t,!0),e,r,i)}}),w.each({slideDown:ut("show"),slideUp:ut("hide"),slideToggle:ut("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){w.fn[e]=function(e,n,r){return this.animate(t,e,n,r)}}),w.timers=[],w.fx.tick=function(){var e,t=0,n=w.timers;for(nt=Date.now();t<n.length;t++)(e=n[t])()||n[t]!==e||n.splice(t--,1);n.length||w.fx.stop(),nt=void 0},w.fx.timer=function(e){w.timers.push(e),w.fx.start()},w.fx.interval=13,w.fx.start=function(){rt||(rt=!0,at())},w.fx.stop=function(){rt=null},w.fx.speeds={slow:600,fast:200,_default:400},w.fn.delay=function(t,n){return t=w.fx?w.fx.speeds[t]||t:t,n=n||"fx",this.queue(n,function(n,r){var i=e.setTimeout(n,t);r.stop=function(){e.clearTimeout(i)}})},function(){var e=r.createElement("input"),t=r.createElement("select").appendChild(r.createElement("option"));e.type="checkbox",h.checkOn=""!==e.value,h.optSelected=t.selected,(e=r.createElement("input")).value="t",e.type="radio",h.radioValue="t"===e.value}();var dt,ht=w.expr.attrHandle;w.fn.extend({attr:function(e,t){return z(this,w.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){w.removeAttr(this,e)})}}),w.extend({attr:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return"undefined"==typeof e.getAttribute?w.prop(e,t,n):(1===o&&w.isXMLDoc(e)||(i=w.attrHooks[t.toLowerCase()]||(w.expr.match.bool.test(t)?dt:void 0)),void 0!==n?null===n?void w.removeAttr(e,t):i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:(e.setAttribute(t,n+""),n):i&&"get"in i&&null!==(r=i.get(e,t))?r:null==(r=w.find.attr(e,t))?void 0:r)},attrHooks:{type:{set:function(e,t){if(!h.radioValue&&"radio"===t&&N(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},removeAttr:function(e,t){var n,r=0,i=t&&t.match(M);if(i&&1===e.nodeType)while(n=i[r++])e.removeAttribute(n)}}),dt={set:function(e,t,n){return!1===t?w.removeAttr(e,n):e.setAttribute(n,n),n}},w.each(w.expr.match.bool.source.match(/\w+/g),function(e,t){var n=ht[t]||w.find.attr;ht[t]=function(e,t,r){var i,o,a=t.toLowerCase();return r||(o=ht[a],ht[a]=i,i=null!=n(e,t,r)?a:null,ht[a]=o),i}});var gt=/^(?:input|select|textarea|button)$/i,yt=/^(?:a|area)$/i;w.fn.extend({prop:function(e,t){return z(this,w.prop,e,t,arguments.length>1)},removeProp:function(e){return this.each(function(){delete this[w.propFix[e]||e]})}}),w.extend({prop:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return 1===o&&w.isXMLDoc(e)||(t=w.propFix[t]||t,i=w.propHooks[t]),void 0!==n?i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){var t=w.find.attr(e,"tabindex");return t?parseInt(t,10):gt.test(e.nodeName)||yt.test(e.nodeName)&&e.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),h.optSelected||(w.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null},set:function(e){var t=e.parentNode;t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex)}}),w.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){w.propFix[this.toLowerCase()]=this});function vt(e){return(e.match(M)||[]).join(" ")}function mt(e){return e.getAttribute&&e.getAttribute("class")||""}function xt(e){return Array.isArray(e)?e:"string"==typeof e?e.match(M)||[]:[]}w.fn.extend({addClass:function(e){var t,n,r,i,o,a,s,u=0;if(g(e))return this.each(function(t){w(this).addClass(e.call(this,t,mt(this)))});if((t=xt(e)).length)while(n=this[u++])if(i=mt(n),r=1===n.nodeType&&" "+vt(i)+" "){a=0;while(o=t[a++])r.indexOf(" "+o+" ")<0&&(r+=o+" ");i!==(s=vt(r))&&n.setAttribute("class",s)}return this},removeClass:function(e){var t,n,r,i,o,a,s,u=0;if(g(e))return this.each(function(t){w(this).removeClass(e.call(this,t,mt(this)))});if(!arguments.length)return this.attr("class","");if((t=xt(e)).length)while(n=this[u++])if(i=mt(n),r=1===n.nodeType&&" "+vt(i)+" "){a=0;while(o=t[a++])while(r.indexOf(" "+o+" ")>-1)r=r.replace(" "+o+" "," ");i!==(s=vt(r))&&n.setAttribute("class",s)}return this},toggleClass:function(e,t){var n=typeof e,r="string"===n||Array.isArray(e);return"boolean"==typeof t&&r?t?this.addClass(e):this.removeClass(e):g(e)?this.each(function(n){w(this).toggleClass(e.call(this,n,mt(this),t),t)}):this.each(function(){var t,i,o,a;if(r){i=0,o=w(this),a=xt(e);while(t=a[i++])o.hasClass(t)?o.removeClass(t):o.addClass(t)}else void 0!==e&&"boolean"!==n||((t=mt(this))&&J.set(this,"__className__",t),this.setAttribute&&this.setAttribute("class",t||!1===e?"":J.get(this,"__className__")||""))})},hasClass:function(e){var t,n,r=0;t=" "+e+" ";while(n=this[r++])if(1===n.nodeType&&(" "+vt(mt(n))+" ").indexOf(t)>-1)return!0;return!1}});var bt=/\r/g;w.fn.extend({val:function(e){var t,n,r,i=this[0];{if(arguments.length)return r=g(e),this.each(function(n){var i;1===this.nodeType&&(null==(i=r?e.call(this,n,w(this).val()):e)?i="":"number"==typeof i?i+="":Array.isArray(i)&&(i=w.map(i,function(e){return null==e?"":e+""})),(t=w.valHooks[this.type]||w.valHooks[this.nodeName.toLowerCase()])&&"set"in t&&void 0!==t.set(this,i,"value")||(this.value=i))});if(i)return(t=w.valHooks[i.type]||w.valHooks[i.nodeName.toLowerCase()])&&"get"in t&&void 0!==(n=t.get(i,"value"))?n:"string"==typeof(n=i.value)?n.replace(bt,""):null==n?"":n}}}),w.extend({valHooks:{option:{get:function(e){var t=w.find.attr(e,"value");return null!=t?t:vt(w.text(e))}},select:{get:function(e){var t,n,r,i=e.options,o=e.selectedIndex,a="select-one"===e.type,s=a?null:[],u=a?o+1:i.length;for(r=o<0?u:a?o:0;r<u;r++)if(((n=i[r]).selected||r===o)&&!n.disabled&&(!n.parentNode.disabled||!N(n.parentNode,"optgroup"))){if(t=w(n).val(),a)return t;s.push(t)}return s},set:function(e,t){var n,r,i=e.options,o=w.makeArray(t),a=i.length;while(a--)((r=i[a]).selected=w.inArray(w.valHooks.option.get(r),o)>-1)&&(n=!0);return n||(e.selectedIndex=-1),o}}}}),w.each(["radio","checkbox"],function(){w.valHooks[this]={set:function(e,t){if(Array.isArray(t))return e.checked=w.inArray(w(e).val(),t)>-1}},h.checkOn||(w.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})}),h.focusin="onfocusin"in e;var wt=/^(?:focusinfocus|focusoutblur)$/,Tt=function(e){e.stopPropagation()};w.extend(w.event,{trigger:function(t,n,i,o){var a,s,u,l,c,p,d,h,v=[i||r],m=f.call(t,"type")?t.type:t,x=f.call(t,"namespace")?t.namespace.split("."):[];if(s=h=u=i=i||r,3!==i.nodeType&&8!==i.nodeType&&!wt.test(m+w.event.triggered)&&(m.indexOf(".")>-1&&(m=(x=m.split(".")).shift(),x.sort()),c=m.indexOf(":")<0&&"on"+m,t=t[w.expando]?t:new w.Event(m,"object"==typeof t&&t),t.isTrigger=o?2:3,t.namespace=x.join("."),t.rnamespace=t.namespace?new RegExp("(^|\\.)"+x.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,t.result=void 0,t.target||(t.target=i),n=null==n?[t]:w.makeArray(n,[t]),d=w.event.special[m]||{},o||!d.trigger||!1!==d.trigger.apply(i,n))){if(!o&&!d.noBubble&&!y(i)){for(l=d.delegateType||m,wt.test(l+m)||(s=s.parentNode);s;s=s.parentNode)v.push(s),u=s;u===(i.ownerDocument||r)&&v.push(u.defaultView||u.parentWindow||e)}a=0;while((s=v[a++])&&!t.isPropagationStopped())h=s,t.type=a>1?l:d.bindType||m,(p=(J.get(s,"events")||{})[t.type]&&J.get(s,"handle"))&&p.apply(s,n),(p=c&&s[c])&&p.apply&&Y(s)&&(t.result=p.apply(s,n),!1===t.result&&t.preventDefault());return t.type=m,o||t.isDefaultPrevented()||d._default&&!1!==d._default.apply(v.pop(),n)||!Y(i)||c&&g(i[m])&&!y(i)&&((u=i[c])&&(i[c]=null),w.event.triggered=m,t.isPropagationStopped()&&h.addEventListener(m,Tt),i[m](),t.isPropagationStopped()&&h.removeEventListener(m,Tt),w.event.triggered=void 0,u&&(i[c]=u)),t.result}},simulate:function(e,t,n){var r=w.extend(new w.Event,n,{type:e,isSimulated:!0});w.event.trigger(r,null,t)}}),w.fn.extend({trigger:function(e,t){return this.each(function(){w.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];if(n)return w.event.trigger(e,t,n,!0)}}),h.focusin||w.each({focus:"focusin",blur:"focusout"},function(e,t){var n=function(e){w.event.simulate(t,e.target,w.event.fix(e))};w.event.special[t]={setup:function(){var r=this.ownerDocument||this,i=J.access(r,t);i||r.addEventListener(e,n,!0),J.access(r,t,(i||0)+1)},teardown:function(){var r=this.ownerDocument||this,i=J.access(r,t)-1;i?J.access(r,t,i):(r.removeEventListener(e,n,!0),J.remove(r,t))}}});var Ct=e.location,Et=Date.now(),kt=/\?/;w.parseXML=function(t){var n;if(!t||"string"!=typeof t)return null;try{n=(new e.DOMParser).parseFromString(t,"text/xml")}catch(e){n=void 0}return n&&!n.getElementsByTagName("parsererror").length||w.error("Invalid XML: "+t),n};var St=/\[\]$/,Dt=/\r?\n/g,Nt=/^(?:submit|button|image|reset|file)$/i,At=/^(?:input|select|textarea|keygen)/i;function jt(e,t,n,r){var i;if(Array.isArray(t))w.each(t,function(t,i){n||St.test(e)?r(e,i):jt(e+"["+("object"==typeof i&&null!=i?t:"")+"]",i,n,r)});else if(n||"object"!==x(t))r(e,t);else for(i in t)jt(e+"["+i+"]",t[i],n,r)}w.param=function(e,t){var n,r=[],i=function(e,t){var n=g(t)?t():t;r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(null==n?"":n)};if(Array.isArray(e)||e.jquery&&!w.isPlainObject(e))w.each(e,function(){i(this.name,this.value)});else for(n in e)jt(n,e[n],t,i);return r.join("&")},w.fn.extend({serialize:function(){return w.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=w.prop(this,"elements");return e?w.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!w(this).is(":disabled")&&At.test(this.nodeName)&&!Nt.test(e)&&(this.checked||!pe.test(e))}).map(function(e,t){var n=w(this).val();return null==n?null:Array.isArray(n)?w.map(n,function(e){return{name:t.name,value:e.replace(Dt,"\r\n")}}):{name:t.name,value:n.replace(Dt,"\r\n")}}).get()}});var qt=/%20/g,Lt=/#.*$/,Ht=/([?&])_=[^&]*/,Ot=/^(.*?):[ \t]*([^\r\n]*)$/gm,Pt=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Mt=/^(?:GET|HEAD)$/,Rt=/^\/\//,It={},Wt={},$t="*/".concat("*"),Bt=r.createElement("a");Bt.href=Ct.href;function Ft(e){return function(t,n){"string"!=typeof t&&(n=t,t="*");var r,i=0,o=t.toLowerCase().match(M)||[];if(g(n))while(r=o[i++])"+"===r[0]?(r=r.slice(1)||"*",(e[r]=e[r]||[]).unshift(n)):(e[r]=e[r]||[]).push(n)}}function _t(e,t,n,r){var i={},o=e===Wt;function a(s){var u;return i[s]=!0,w.each(e[s]||[],function(e,s){var l=s(t,n,r);return"string"!=typeof l||o||i[l]?o?!(u=l):void 0:(t.dataTypes.unshift(l),a(l),!1)}),u}return a(t.dataTypes[0])||!i["*"]&&a("*")}function zt(e,t){var n,r,i=w.ajaxSettings.flatOptions||{};for(n in t)void 0!==t[n]&&((i[n]?e:r||(r={}))[n]=t[n]);return r&&w.extend(!0,e,r),e}function Xt(e,t,n){var r,i,o,a,s=e.contents,u=e.dataTypes;while("*"===u[0])u.shift(),void 0===r&&(r=e.mimeType||t.getResponseHeader("Content-Type"));if(r)for(i in s)if(s[i]&&s[i].test(r)){u.unshift(i);break}if(u[0]in n)o=u[0];else{for(i in n){if(!u[0]||e.converters[i+" "+u[0]]){o=i;break}a||(a=i)}o=o||a}if(o)return o!==u[0]&&u.unshift(o),n[o]}function Ut(e,t,n,r){var i,o,a,s,u,l={},c=e.dataTypes.slice();if(c[1])for(a in e.converters)l[a.toLowerCase()]=e.converters[a];o=c.shift();while(o)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!u&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u=o,o=c.shift())if("*"===o)o=u;else if("*"!==u&&u!==o){if(!(a=l[u+" "+o]||l["* "+o]))for(i in l)if((s=i.split(" "))[1]===o&&(a=l[u+" "+s[0]]||l["* "+s[0]])){!0===a?a=l[i]:!0!==l[i]&&(o=s[0],c.unshift(s[1]));break}if(!0!==a)if(a&&e["throws"])t=a(t);else try{t=a(t)}catch(e){return{state:"parsererror",error:a?e:"No conversion from "+u+" to "+o}}}return{state:"success",data:t}}w.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Ct.href,type:"GET",isLocal:Pt.test(Ct.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":$t,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":w.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?zt(zt(e,w.ajaxSettings),t):zt(w.ajaxSettings,e)},ajaxPrefilter:Ft(It),ajaxTransport:Ft(Wt),ajax:function(t,n){"object"==typeof t&&(n=t,t=void 0),n=n||{};var i,o,a,s,u,l,c,f,p,d,h=w.ajaxSetup({},n),g=h.context||h,y=h.context&&(g.nodeType||g.jquery)?w(g):w.event,v=w.Deferred(),m=w.Callbacks("once memory"),x=h.statusCode||{},b={},T={},C="canceled",E={readyState:0,getResponseHeader:function(e){var t;if(c){if(!s){s={};while(t=Ot.exec(a))s[t[1].toLowerCase()]=t[2]}t=s[e.toLowerCase()]}return null==t?null:t},getAllResponseHeaders:function(){return c?a:null},setRequestHeader:function(e,t){return null==c&&(e=T[e.toLowerCase()]=T[e.toLowerCase()]||e,b[e]=t),this},overrideMimeType:function(e){return null==c&&(h.mimeType=e),this},statusCode:function(e){var t;if(e)if(c)E.always(e[E.status]);else for(t in e)x[t]=[x[t],e[t]];return this},abort:function(e){var t=e||C;return i&&i.abort(t),k(0,t),this}};if(v.promise(E),h.url=((t||h.url||Ct.href)+"").replace(Rt,Ct.protocol+"//"),h.type=n.method||n.type||h.method||h.type,h.dataTypes=(h.dataType||"*").toLowerCase().match(M)||[""],null==h.crossDomain){l=r.createElement("a");try{l.href=h.url,l.href=l.href,h.crossDomain=Bt.protocol+"//"+Bt.host!=l.protocol+"//"+l.host}catch(e){h.crossDomain=!0}}if(h.data&&h.processData&&"string"!=typeof h.data&&(h.data=w.param(h.data,h.traditional)),_t(It,h,n,E),c)return E;(f=w.event&&h.global)&&0==w.active++&&w.event.trigger("ajaxStart"),h.type=h.type.toUpperCase(),h.hasContent=!Mt.test(h.type),o=h.url.replace(Lt,""),h.hasContent?h.data&&h.processData&&0===(h.contentType||"").indexOf("application/x-www-form-urlencoded")&&(h.data=h.data.replace(qt,"+")):(d=h.url.slice(o.length),h.data&&(h.processData||"string"==typeof h.data)&&(o+=(kt.test(o)?"&":"?")+h.data,delete h.data),!1===h.cache&&(o=o.replace(Ht,"$1"),d=(kt.test(o)?"&":"?")+"_="+Et+++d),h.url=o+d),h.ifModified&&(w.lastModified[o]&&E.setRequestHeader("If-Modified-Since",w.lastModified[o]),w.etag[o]&&E.setRequestHeader("If-None-Match",w.etag[o])),(h.data&&h.hasContent&&!1!==h.contentType||n.contentType)&&E.setRequestHeader("Content-Type",h.contentType),E.setRequestHeader("Accept",h.dataTypes[0]&&h.accepts[h.dataTypes[0]]?h.accepts[h.dataTypes[0]]+("*"!==h.dataTypes[0]?", "+$t+"; q=0.01":""):h.accepts["*"]);for(p in h.headers)E.setRequestHeader(p,h.headers[p]);if(h.beforeSend&&(!1===h.beforeSend.call(g,E,h)||c))return E.abort();if(C="abort",m.add(h.complete),E.done(h.success),E.fail(h.error),i=_t(Wt,h,n,E)){if(E.readyState=1,f&&y.trigger("ajaxSend",[E,h]),c)return E;h.async&&h.timeout>0&&(u=e.setTimeout(function(){E.abort("timeout")},h.timeout));try{c=!1,i.send(b,k)}catch(e){if(c)throw e;k(-1,e)}}else k(-1,"No Transport");function k(t,n,r,s){var l,p,d,b,T,C=n;c||(c=!0,u&&e.clearTimeout(u),i=void 0,a=s||"",E.readyState=t>0?4:0,l=t>=200&&t<300||304===t,r&&(b=Xt(h,E,r)),b=Ut(h,b,E,l),l?(h.ifModified&&((T=E.getResponseHeader("Last-Modified"))&&(w.lastModified[o]=T),(T=E.getResponseHeader("etag"))&&(w.etag[o]=T)),204===t||"HEAD"===h.type?C="nocontent":304===t?C="notmodified":(C=b.state,p=b.data,l=!(d=b.error))):(d=C,!t&&C||(C="error",t<0&&(t=0))),E.status=t,E.statusText=(n||C)+"",l?v.resolveWith(g,[p,C,E]):v.rejectWith(g,[E,C,d]),E.statusCode(x),x=void 0,f&&y.trigger(l?"ajaxSuccess":"ajaxError",[E,h,l?p:d]),m.fireWith(g,[E,C]),f&&(y.trigger("ajaxComplete",[E,h]),--w.active||w.event.trigger("ajaxStop")))}return E},getJSON:function(e,t,n){return w.get(e,t,n,"json")},getScript:function(e,t){return w.get(e,void 0,t,"script")}}),w.each(["get","post"],function(e,t){w[t]=function(e,n,r,i){return g(n)&&(i=i||r,r=n,n=void 0),w.ajax(w.extend({url:e,type:t,dataType:i,data:n,success:r},w.isPlainObject(e)&&e))}}),w._evalUrl=function(e){return w.ajax({url:e,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,"throws":!0})},w.fn.extend({wrapAll:function(e){var t;return this[0]&&(g(e)&&(e=e.call(this[0])),t=w(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstElementChild)e=e.firstElementChild;return e}).append(this)),this},wrapInner:function(e){return g(e)?this.each(function(t){w(this).wrapInner(e.call(this,t))}):this.each(function(){var t=w(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)})},wrap:function(e){var t=g(e);return this.each(function(n){w(this).wrapAll(t?e.call(this,n):e)})},unwrap:function(e){return this.parent(e).not("body").each(function(){w(this).replaceWith(this.childNodes)}),this}}),w.expr.pseudos.hidden=function(e){return!w.expr.pseudos.visible(e)},w.expr.pseudos.visible=function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)},w.ajaxSettings.xhr=function(){try{return new e.XMLHttpRequest}catch(e){}};var Vt={0:200,1223:204},Gt=w.ajaxSettings.xhr();h.cors=!!Gt&&"withCredentials"in Gt,h.ajax=Gt=!!Gt,w.ajaxTransport(function(t){var n,r;if(h.cors||Gt&&!t.crossDomain)return{send:function(i,o){var a,s=t.xhr();if(s.open(t.type,t.url,t.async,t.username,t.password),t.xhrFields)for(a in t.xhrFields)s[a]=t.xhrFields[a];t.mimeType&&s.overrideMimeType&&s.overrideMimeType(t.mimeType),t.crossDomain||i["X-Requested-With"]||(i["X-Requested-With"]="XMLHttpRequest");for(a in i)s.setRequestHeader(a,i[a]);n=function(e){return function(){n&&(n=r=s.onload=s.onerror=s.onabort=s.ontimeout=s.onreadystatechange=null,"abort"===e?s.abort():"error"===e?"number"!=typeof s.status?o(0,"error"):o(s.status,s.statusText):o(Vt[s.status]||s.status,s.statusText,"text"!==(s.responseType||"text")||"string"!=typeof s.responseText?{binary:s.response}:{text:s.responseText},s.getAllResponseHeaders()))}},s.onload=n(),r=s.onerror=s.ontimeout=n("error"),void 0!==s.onabort?s.onabort=r:s.onreadystatechange=function(){4===s.readyState&&e.setTimeout(function(){n&&r()})},n=n("abort");try{s.send(t.hasContent&&t.data||null)}catch(e){if(n)throw e}},abort:function(){n&&n()}}}),w.ajaxPrefilter(function(e){e.crossDomain&&(e.contents.script=!1)}),w.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(e){return w.globalEval(e),e}}}),w.ajaxPrefilter("script",function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),w.ajaxTransport("script",function(e){if(e.crossDomain){var t,n;return{send:function(i,o){t=w("<script>").prop({charset:e.scriptCharset,src:e.url}).on("load error",n=function(e){t.remove(),n=null,e&&o("error"===e.type?404:200,e.type)}),r.head.appendChild(t[0])},abort:function(){n&&n()}}}});var Yt=[],Qt=/(=)\?(?=&|$)|\?\?/;w.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Yt.pop()||w.expando+"_"+Et++;return this[e]=!0,e}}),w.ajaxPrefilter("json jsonp",function(t,n,r){var i,o,a,s=!1!==t.jsonp&&(Qt.test(t.url)?"url":"string"==typeof t.data&&0===(t.contentType||"").indexOf("application/x-www-form-urlencoded")&&Qt.test(t.data)&&"data");if(s||"jsonp"===t.dataTypes[0])return i=t.jsonpCallback=g(t.jsonpCallback)?t.jsonpCallback():t.jsonpCallback,s?t[s]=t[s].replace(Qt,"$1"+i):!1!==t.jsonp&&(t.url+=(kt.test(t.url)?"&":"?")+t.jsonp+"="+i),t.converters["script json"]=function(){return a||w.error(i+" was not called"),a[0]},t.dataTypes[0]="json",o=e[i],e[i]=function(){a=arguments},r.always(function(){void 0===o?w(e).removeProp(i):e[i]=o,t[i]&&(t.jsonpCallback=n.jsonpCallback,Yt.push(i)),a&&g(o)&&o(a[0]),a=o=void 0}),"script"}),h.createHTMLDocument=function(){var e=r.implementation.createHTMLDocument("").body;return e.innerHTML="<form></form><form></form>",2===e.childNodes.length}(),w.parseHTML=function(e,t,n){if("string"!=typeof e)return[];"boolean"==typeof t&&(n=t,t=!1);var i,o,a;return t||(h.createHTMLDocument?((i=(t=r.implementation.createHTMLDocument("")).createElement("base")).href=r.location.href,t.head.appendChild(i)):t=r),o=A.exec(e),a=!n&&[],o?[t.createElement(o[1])]:(o=xe([e],t,a),a&&a.length&&w(a).remove(),w.merge([],o.childNodes))},w.fn.load=function(e,t,n){var r,i,o,a=this,s=e.indexOf(" ");return s>-1&&(r=vt(e.slice(s)),e=e.slice(0,s)),g(t)?(n=t,t=void 0):t&&"object"==typeof t&&(i="POST"),a.length>0&&w.ajax({url:e,type:i||"GET",dataType:"html",data:t}).done(function(e){o=arguments,a.html(r?w("<div>").append(w.parseHTML(e)).find(r):e)}).always(n&&function(e,t){a.each(function(){n.apply(this,o||[e.responseText,t,e])})}),this},w.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){w.fn[t]=function(e){return this.on(t,e)}}),w.expr.pseudos.animated=function(e){return w.grep(w.timers,function(t){return e===t.elem}).length},w.offset={setOffset:function(e,t,n){var r,i,o,a,s,u,l,c=w.css(e,"position"),f=w(e),p={};"static"===c&&(e.style.position="relative"),s=f.offset(),o=w.css(e,"top"),u=w.css(e,"left"),(l=("absolute"===c||"fixed"===c)&&(o+u).indexOf("auto")>-1)?(a=(r=f.position()).top,i=r.left):(a=parseFloat(o)||0,i=parseFloat(u)||0),g(t)&&(t=t.call(e,n,w.extend({},s))),null!=t.top&&(p.top=t.top-s.top+a),null!=t.left&&(p.left=t.left-s.left+i),"using"in t?t.using.call(e,p):f.css(p)}},w.fn.extend({offset:function(e){if(arguments.length)return void 0===e?this:this.each(function(t){w.offset.setOffset(this,e,t)});var t,n,r=this[0];if(r)return r.getClientRects().length?(t=r.getBoundingClientRect(),n=r.ownerDocument.defaultView,{top:t.top+n.pageYOffset,left:t.left+n.pageXOffset}):{top:0,left:0}},position:function(){if(this[0]){var e,t,n,r=this[0],i={top:0,left:0};if("fixed"===w.css(r,"position"))t=r.getBoundingClientRect();else{t=this.offset(),n=r.ownerDocument,e=r.offsetParent||n.documentElement;while(e&&(e===n.body||e===n.documentElement)&&"static"===w.css(e,"position"))e=e.parentNode;e&&e!==r&&1===e.nodeType&&((i=w(e).offset()).top+=w.css(e,"borderTopWidth",!0),i.left+=w.css(e,"borderLeftWidth",!0))}return{top:t.top-i.top-w.css(r,"marginTop",!0),left:t.left-i.left-w.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent;while(e&&"static"===w.css(e,"position"))e=e.offsetParent;return e||be})}}),w.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(e,t){var n="pageYOffset"===t;w.fn[e]=function(r){return z(this,function(e,r,i){var o;if(y(e)?o=e:9===e.nodeType&&(o=e.defaultView),void 0===i)return o?o[t]:e[r];o?o.scrollTo(n?o.pageXOffset:i,n?i:o.pageYOffset):e[r]=i},e,r,arguments.length)}}),w.each(["top","left"],function(e,t){w.cssHooks[t]=_e(h.pixelPosition,function(e,n){if(n)return n=Fe(e,t),We.test(n)?w(e).position()[t]+"px":n})}),w.each({Height:"height",Width:"width"},function(e,t){w.each({padding:"inner"+e,content:t,"":"outer"+e},function(n,r){w.fn[r]=function(i,o){var a=arguments.length&&(n||"boolean"!=typeof i),s=n||(!0===i||!0===o?"margin":"border");return z(this,function(t,n,i){var o;return y(t)?0===r.indexOf("outer")?t["inner"+e]:t.document.documentElement["client"+e]:9===t.nodeType?(o=t.documentElement,Math.max(t.body["scroll"+e],o["scroll"+e],t.body["offset"+e],o["offset"+e],o["client"+e])):void 0===i?w.css(t,n,s):w.style(t,n,i,s)},t,a?i:void 0,a)}})}),w.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(e,t){w.fn[t]=function(e,n){return arguments.length>0?this.on(t,null,e,n):this.trigger(t)}}),w.fn.extend({hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}}),w.fn.extend({bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)}}),w.proxy=function(e,t){var n,r,i;if("string"==typeof t&&(n=e[t],t=e,e=n),g(e))return r=o.call(arguments,2),i=function(){return e.apply(t||this,r.concat(o.call(arguments)))},i.guid=e.guid=e.guid||w.guid++,i},w.holdReady=function(e){e?w.readyWait++:w.ready(!0)},w.isArray=Array.isArray,w.parseJSON=JSON.parse,w.nodeName=N,w.isFunction=g,w.isWindow=y,w.camelCase=G,w.type=x,w.now=Date.now,w.isNumeric=function(e){var t=w.type(e);return("number"===t||"string"===t)&&!isNaN(e-parseFloat(e))},"function"==typeof define&&define.amd&&define("jquery",[],function(){return w});var Jt=e.jQuery,Kt=e.$;return w.noConflict=function(t){return e.$===w&&(e.$=Kt),t&&e.jQuery===w&&(e.jQuery=Jt),w},t||(e.jQuery=e.$=w),w});

/*
 Copyright (C) Federico Zivolo 2017
 Distributed under the MIT License (license terms are at http://opensource.org/licenses/MIT).
 */(function(e,t){'object'==typeof exports&&'undefined'!=typeof module?module.exports=t():'function'==typeof define&&define.amd?define(t):e.Popper=t()})(this,function(){'use strict';function e(e){return e&&'[object Function]'==={}.toString.call(e)}function t(e,t){if(1!==e.nodeType)return[];var o=getComputedStyle(e,null);return t?o[t]:o}function o(e){return'HTML'===e.nodeName?e:e.parentNode||e.host}function n(e){if(!e)return document.body;switch(e.nodeName){case'HTML':case'BODY':return e.ownerDocument.body;case'#document':return e.body;}var i=t(e),r=i.overflow,p=i.overflowX,s=i.overflowY;return /(auto|scroll)/.test(r+s+p)?e:n(o(e))}function r(e){var o=e&&e.offsetParent,i=o&&o.nodeName;return i&&'BODY'!==i&&'HTML'!==i?-1!==['TD','TABLE'].indexOf(o.nodeName)&&'static'===t(o,'position')?r(o):o:e?e.ownerDocument.documentElement:document.documentElement}function p(e){var t=e.nodeName;return'BODY'!==t&&('HTML'===t||r(e.firstElementChild)===e)}function s(e){return null===e.parentNode?e:s(e.parentNode)}function d(e,t){if(!e||!e.nodeType||!t||!t.nodeType)return document.documentElement;var o=e.compareDocumentPosition(t)&Node.DOCUMENT_POSITION_FOLLOWING,i=o?e:t,n=o?t:e,a=document.createRange();a.setStart(i,0),a.setEnd(n,0);var l=a.commonAncestorContainer;if(e!==l&&t!==l||i.contains(n))return p(l)?l:r(l);var f=s(e);return f.host?d(f.host,t):d(e,s(t).host)}function a(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:'top',o='top'===t?'scrollTop':'scrollLeft',i=e.nodeName;if('BODY'===i||'HTML'===i){var n=e.ownerDocument.documentElement,r=e.ownerDocument.scrollingElement||n;return r[o]}return e[o]}function l(e,t){var o=2<arguments.length&&void 0!==arguments[2]&&arguments[2],i=a(t,'top'),n=a(t,'left'),r=o?-1:1;return e.top+=i*r,e.bottom+=i*r,e.left+=n*r,e.right+=n*r,e}function f(e,t){var o='x'===t?'Left':'Top',i='Left'==o?'Right':'Bottom';return parseFloat(e['border'+o+'Width'],10)+parseFloat(e['border'+i+'Width'],10)}function m(e,t,o,i){return J(t['offset'+e],t['scroll'+e],o['client'+e],o['offset'+e],o['scroll'+e],ie()?o['offset'+e]+i['margin'+('Height'===e?'Top':'Left')]+i['margin'+('Height'===e?'Bottom':'Right')]:0)}function h(){var e=document.body,t=document.documentElement,o=ie()&&getComputedStyle(t);return{height:m('Height',e,t,o),width:m('Width',e,t,o)}}function c(e){return se({},e,{right:e.left+e.width,bottom:e.top+e.height})}function g(e){var o={};if(ie())try{o=e.getBoundingClientRect();var i=a(e,'top'),n=a(e,'left');o.top+=i,o.left+=n,o.bottom+=i,o.right+=n}catch(e){}else o=e.getBoundingClientRect();var r={left:o.left,top:o.top,width:o.right-o.left,height:o.bottom-o.top},p='HTML'===e.nodeName?h():{},s=p.width||e.clientWidth||r.right-r.left,d=p.height||e.clientHeight||r.bottom-r.top,l=e.offsetWidth-s,m=e.offsetHeight-d;if(l||m){var g=t(e);l-=f(g,'x'),m-=f(g,'y'),r.width-=l,r.height-=m}return c(r)}function u(e,o){var i=ie(),r='HTML'===o.nodeName,p=g(e),s=g(o),d=n(e),a=t(o),f=parseFloat(a.borderTopWidth,10),m=parseFloat(a.borderLeftWidth,10),h=c({top:p.top-s.top-f,left:p.left-s.left-m,width:p.width,height:p.height});if(h.marginTop=0,h.marginLeft=0,!i&&r){var u=parseFloat(a.marginTop,10),b=parseFloat(a.marginLeft,10);h.top-=f-u,h.bottom-=f-u,h.left-=m-b,h.right-=m-b,h.marginTop=u,h.marginLeft=b}return(i?o.contains(d):o===d&&'BODY'!==d.nodeName)&&(h=l(h,o)),h}function b(e){var t=e.ownerDocument.documentElement,o=u(e,t),i=J(t.clientWidth,window.innerWidth||0),n=J(t.clientHeight,window.innerHeight||0),r=a(t),p=a(t,'left'),s={top:r-o.top+o.marginTop,left:p-o.left+o.marginLeft,width:i,height:n};return c(s)}function w(e){var i=e.nodeName;return'BODY'===i||'HTML'===i?!1:'fixed'===t(e,'position')||w(o(e))}function y(e,t,i,r){var p={top:0,left:0},s=d(e,t);if('viewport'===r)p=b(s);else{var a;'scrollParent'===r?(a=n(o(t)),'BODY'===a.nodeName&&(a=e.ownerDocument.documentElement)):'window'===r?a=e.ownerDocument.documentElement:a=r;var l=u(a,s);if('HTML'===a.nodeName&&!w(s)){var f=h(),m=f.height,c=f.width;p.top+=l.top-l.marginTop,p.bottom=m+l.top,p.left+=l.left-l.marginLeft,p.right=c+l.left}else p=l}return p.left+=i,p.top+=i,p.right-=i,p.bottom-=i,p}function E(e){var t=e.width,o=e.height;return t*o}function v(e,t,o,i,n){var r=5<arguments.length&&void 0!==arguments[5]?arguments[5]:0;if(-1===e.indexOf('auto'))return e;var p=y(o,i,r,n),s={top:{width:p.width,height:t.top-p.top},right:{width:p.right-t.right,height:p.height},bottom:{width:p.width,height:p.bottom-t.bottom},left:{width:t.left-p.left,height:p.height}},d=Object.keys(s).map(function(e){return se({key:e},s[e],{area:E(s[e])})}).sort(function(e,t){return t.area-e.area}),a=d.filter(function(e){var t=e.width,i=e.height;return t>=o.clientWidth&&i>=o.clientHeight}),l=0<a.length?a[0].key:d[0].key,f=e.split('-')[1];return l+(f?'-'+f:'')}function O(e,t,o){var i=d(t,o);return u(o,i)}function L(e){var t=getComputedStyle(e),o=parseFloat(t.marginTop)+parseFloat(t.marginBottom),i=parseFloat(t.marginLeft)+parseFloat(t.marginRight),n={width:e.offsetWidth+i,height:e.offsetHeight+o};return n}function x(e){var t={left:'right',right:'left',bottom:'top',top:'bottom'};return e.replace(/left|right|bottom|top/g,function(e){return t[e]})}function S(e,t,o){o=o.split('-')[0];var i=L(e),n={width:i.width,height:i.height},r=-1!==['right','left'].indexOf(o),p=r?'top':'left',s=r?'left':'top',d=r?'height':'width',a=r?'width':'height';return n[p]=t[p]+t[d]/2-i[d]/2,n[s]=o===s?t[s]-i[a]:t[x(s)],n}function T(e,t){return Array.prototype.find?e.find(t):e.filter(t)[0]}function D(e,t,o){if(Array.prototype.findIndex)return e.findIndex(function(e){return e[t]===o});var i=T(e,function(e){return e[t]===o});return e.indexOf(i)}function C(t,o,i){var n=void 0===i?t:t.slice(0,D(t,'name',i));return n.forEach(function(t){t['function']&&console.warn('`modifier.function` is deprecated, use `modifier.fn`!');var i=t['function']||t.fn;t.enabled&&e(i)&&(o.offsets.popper=c(o.offsets.popper),o.offsets.reference=c(o.offsets.reference),o=i(o,t))}),o}function N(){if(!this.state.isDestroyed){var e={instance:this,styles:{},arrowStyles:{},attributes:{},flipped:!1,offsets:{}};e.offsets.reference=O(this.state,this.popper,this.reference),e.placement=v(this.options.placement,e.offsets.reference,this.popper,this.reference,this.options.modifiers.flip.boundariesElement,this.options.modifiers.flip.padding),e.originalPlacement=e.placement,e.offsets.popper=S(this.popper,e.offsets.reference,e.placement),e.offsets.popper.position='absolute',e=C(this.modifiers,e),this.state.isCreated?this.options.onUpdate(e):(this.state.isCreated=!0,this.options.onCreate(e))}}function k(e,t){return e.some(function(e){var o=e.name,i=e.enabled;return i&&o===t})}function W(e){for(var t=[!1,'ms','Webkit','Moz','O'],o=e.charAt(0).toUpperCase()+e.slice(1),n=0;n<t.length-1;n++){var i=t[n],r=i?''+i+o:e;if('undefined'!=typeof document.body.style[r])return r}return null}function P(){return this.state.isDestroyed=!0,k(this.modifiers,'applyStyle')&&(this.popper.removeAttribute('x-placement'),this.popper.style.left='',this.popper.style.position='',this.popper.style.top='',this.popper.style[W('transform')]=''),this.disableEventListeners(),this.options.removeOnDestroy&&this.popper.parentNode.removeChild(this.popper),this}function B(e){var t=e.ownerDocument;return t?t.defaultView:window}function H(e,t,o,i){var r='BODY'===e.nodeName,p=r?e.ownerDocument.defaultView:e;p.addEventListener(t,o,{passive:!0}),r||H(n(p.parentNode),t,o,i),i.push(p)}function A(e,t,o,i){o.updateBound=i,B(e).addEventListener('resize',o.updateBound,{passive:!0});var r=n(e);return H(r,'scroll',o.updateBound,o.scrollParents),o.scrollElement=r,o.eventsEnabled=!0,o}function I(){this.state.eventsEnabled||(this.state=A(this.reference,this.options,this.state,this.scheduleUpdate))}function M(e,t){return B(e).removeEventListener('resize',t.updateBound),t.scrollParents.forEach(function(e){e.removeEventListener('scroll',t.updateBound)}),t.updateBound=null,t.scrollParents=[],t.scrollElement=null,t.eventsEnabled=!1,t}function R(){this.state.eventsEnabled&&(cancelAnimationFrame(this.scheduleUpdate),this.state=M(this.reference,this.state))}function U(e){return''!==e&&!isNaN(parseFloat(e))&&isFinite(e)}function Y(e,t){Object.keys(t).forEach(function(o){var i='';-1!==['width','height','top','right','bottom','left'].indexOf(o)&&U(t[o])&&(i='px'),e.style[o]=t[o]+i})}function j(e,t){Object.keys(t).forEach(function(o){var i=t[o];!1===i?e.removeAttribute(o):e.setAttribute(o,t[o])})}function F(e,t,o){var i=T(e,function(e){var o=e.name;return o===t}),n=!!i&&e.some(function(e){return e.name===o&&e.enabled&&e.order<i.order});if(!n){var r='`'+t+'`';console.warn('`'+o+'`'+' modifier is required by '+r+' modifier in order to work, be sure to include it before '+r+'!')}return n}function K(e){return'end'===e?'start':'start'===e?'end':e}function q(e){var t=1<arguments.length&&void 0!==arguments[1]&&arguments[1],o=ae.indexOf(e),i=ae.slice(o+1).concat(ae.slice(0,o));return t?i.reverse():i}function V(e,t,o,i){var n=e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),r=+n[1],p=n[2];if(!r)return e;if(0===p.indexOf('%')){var s;switch(p){case'%p':s=o;break;case'%':case'%r':default:s=i;}var d=c(s);return d[t]/100*r}if('vh'===p||'vw'===p){var a;return a='vh'===p?J(document.documentElement.clientHeight,window.innerHeight||0):J(document.documentElement.clientWidth,window.innerWidth||0),a/100*r}return r}function z(e,t,o,i){var n=[0,0],r=-1!==['right','left'].indexOf(i),p=e.split(/(\+|\-)/).map(function(e){return e.trim()}),s=p.indexOf(T(p,function(e){return-1!==e.search(/,|\s/)}));p[s]&&-1===p[s].indexOf(',')&&console.warn('Offsets separated by white space(s) are deprecated, use a comma (,) instead.');var d=/\s*,\s*|\s+/,a=-1===s?[p]:[p.slice(0,s).concat([p[s].split(d)[0]]),[p[s].split(d)[1]].concat(p.slice(s+1))];return a=a.map(function(e,i){var n=(1===i?!r:r)?'height':'width',p=!1;return e.reduce(function(e,t){return''===e[e.length-1]&&-1!==['+','-'].indexOf(t)?(e[e.length-1]=t,p=!0,e):p?(e[e.length-1]+=t,p=!1,e):e.concat(t)},[]).map(function(e){return V(e,n,t,o)})}),a.forEach(function(e,t){e.forEach(function(o,i){U(o)&&(n[t]+=o*('-'===e[i-1]?-1:1))})}),n}function G(e,t){var o,i=t.offset,n=e.placement,r=e.offsets,p=r.popper,s=r.reference,d=n.split('-')[0];return o=U(+i)?[+i,0]:z(i,p,s,d),'left'===d?(p.top+=o[0],p.left-=o[1]):'right'===d?(p.top+=o[0],p.left+=o[1]):'top'===d?(p.left+=o[0],p.top-=o[1]):'bottom'===d&&(p.left+=o[0],p.top+=o[1]),e.popper=p,e}for(var _=Math.min,X=Math.floor,J=Math.max,Q='undefined'!=typeof window&&'undefined'!=typeof document,Z=['Edge','Trident','Firefox'],$=0,ee=0;ee<Z.length;ee+=1)if(Q&&0<=navigator.userAgent.indexOf(Z[ee])){$=1;break}var i,te=Q&&window.Promise,oe=te?function(e){var t=!1;return function(){t||(t=!0,window.Promise.resolve().then(function(){t=!1,e()}))}}:function(e){var t=!1;return function(){t||(t=!0,setTimeout(function(){t=!1,e()},$))}},ie=function(){return void 0==i&&(i=-1!==navigator.appVersion.indexOf('MSIE 10')),i},ne=function(e,t){if(!(e instanceof t))throw new TypeError('Cannot call a class as a function')},re=function(){function e(e,t){for(var o,n=0;n<t.length;n++)o=t[n],o.enumerable=o.enumerable||!1,o.configurable=!0,'value'in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}return function(t,o,i){return o&&e(t.prototype,o),i&&e(t,i),t}}(),pe=function(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e},se=Object.assign||function(e){for(var t,o=1;o<arguments.length;o++)for(var i in t=arguments[o],t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},de=['auto-start','auto','auto-end','top-start','top','top-end','right-start','right','right-end','bottom-end','bottom','bottom-start','left-end','left','left-start'],ae=de.slice(3),le={FLIP:'flip',CLOCKWISE:'clockwise',COUNTERCLOCKWISE:'counterclockwise'},fe=function(){function t(o,i){var n=this,r=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{};ne(this,t),this.scheduleUpdate=function(){return requestAnimationFrame(n.update)},this.update=oe(this.update.bind(this)),this.options=se({},t.Defaults,r),this.state={isDestroyed:!1,isCreated:!1,scrollParents:[]},this.reference=o&&o.jquery?o[0]:o,this.popper=i&&i.jquery?i[0]:i,this.options.modifiers={},Object.keys(se({},t.Defaults.modifiers,r.modifiers)).forEach(function(e){n.options.modifiers[e]=se({},t.Defaults.modifiers[e]||{},r.modifiers?r.modifiers[e]:{})}),this.modifiers=Object.keys(this.options.modifiers).map(function(e){return se({name:e},n.options.modifiers[e])}).sort(function(e,t){return e.order-t.order}),this.modifiers.forEach(function(t){t.enabled&&e(t.onLoad)&&t.onLoad(n.reference,n.popper,n.options,t,n.state)}),this.update();var p=this.options.eventsEnabled;p&&this.enableEventListeners(),this.state.eventsEnabled=p}return re(t,[{key:'update',value:function(){return N.call(this)}},{key:'destroy',value:function(){return P.call(this)}},{key:'enableEventListeners',value:function(){return I.call(this)}},{key:'disableEventListeners',value:function(){return R.call(this)}}]),t}();return fe.Utils=('undefined'==typeof window?global:window).PopperUtils,fe.placements=de,fe.Defaults={placement:'bottom',eventsEnabled:!0,removeOnDestroy:!1,onCreate:function(){},onUpdate:function(){},modifiers:{shift:{order:100,enabled:!0,fn:function(e){var t=e.placement,o=t.split('-')[0],i=t.split('-')[1];if(i){var n=e.offsets,r=n.reference,p=n.popper,s=-1!==['bottom','top'].indexOf(o),d=s?'left':'top',a=s?'width':'height',l={start:pe({},d,r[d]),end:pe({},d,r[d]+r[a]-p[a])};e.offsets.popper=se({},p,l[i])}return e}},offset:{order:200,enabled:!0,fn:G,offset:0},preventOverflow:{order:300,enabled:!0,fn:function(e,t){var o=t.boundariesElement||r(e.instance.popper);e.instance.reference===o&&(o=r(o));var i=y(e.instance.popper,e.instance.reference,t.padding,o);t.boundaries=i;var n=t.priority,p=e.offsets.popper,s={primary:function(e){var o=p[e];return p[e]<i[e]&&!t.escapeWithReference&&(o=J(p[e],i[e])),pe({},e,o)},secondary:function(e){var o='right'===e?'left':'top',n=p[o];return p[e]>i[e]&&!t.escapeWithReference&&(n=_(p[o],i[e]-('right'===e?p.width:p.height))),pe({},o,n)}};return n.forEach(function(e){var t=-1===['left','top'].indexOf(e)?'secondary':'primary';p=se({},p,s[t](e))}),e.offsets.popper=p,e},priority:['left','right','top','bottom'],padding:5,boundariesElement:'scrollParent'},keepTogether:{order:400,enabled:!0,fn:function(e){var t=e.offsets,o=t.popper,i=t.reference,n=e.placement.split('-')[0],r=X,p=-1!==['top','bottom'].indexOf(n),s=p?'right':'bottom',d=p?'left':'top',a=p?'width':'height';return o[s]<r(i[d])&&(e.offsets.popper[d]=r(i[d])-o[a]),o[d]>r(i[s])&&(e.offsets.popper[d]=r(i[s])),e}},arrow:{order:500,enabled:!0,fn:function(e,o){var i;if(!F(e.instance.modifiers,'arrow','keepTogether'))return e;var n=o.element;if('string'==typeof n){if(n=e.instance.popper.querySelector(n),!n)return e;}else if(!e.instance.popper.contains(n))return console.warn('WARNING: `arrow.element` must be child of its popper element!'),e;var r=e.placement.split('-')[0],p=e.offsets,s=p.popper,d=p.reference,a=-1!==['left','right'].indexOf(r),l=a?'height':'width',f=a?'Top':'Left',m=f.toLowerCase(),h=a?'left':'top',g=a?'bottom':'right',u=L(n)[l];d[g]-u<s[m]&&(e.offsets.popper[m]-=s[m]-(d[g]-u)),d[m]+u>s[g]&&(e.offsets.popper[m]+=d[m]+u-s[g]),e.offsets.popper=c(e.offsets.popper);var b=d[m]+d[l]/2-u/2,w=t(e.instance.popper),y=parseFloat(w['margin'+f],10),E=parseFloat(w['border'+f+'Width'],10),v=b-e.offsets.popper[m]-y-E;return v=J(_(s[l]-u,v),0),e.arrowElement=n,e.offsets.arrow=(i={},pe(i,m,Math.round(v)),pe(i,h,''),i),e},element:'[x-arrow]'},flip:{order:600,enabled:!0,fn:function(e,t){if(k(e.instance.modifiers,'inner'))return e;if(e.flipped&&e.placement===e.originalPlacement)return e;var o=y(e.instance.popper,e.instance.reference,t.padding,t.boundariesElement),i=e.placement.split('-')[0],n=x(i),r=e.placement.split('-')[1]||'',p=[];switch(t.behavior){case le.FLIP:p=[i,n];break;case le.CLOCKWISE:p=q(i);break;case le.COUNTERCLOCKWISE:p=q(i,!0);break;default:p=t.behavior;}return p.forEach(function(s,d){if(i!==s||p.length===d+1)return e;i=e.placement.split('-')[0],n=x(i);var a=e.offsets.popper,l=e.offsets.reference,f=X,m='left'===i&&f(a.right)>f(l.left)||'right'===i&&f(a.left)<f(l.right)||'top'===i&&f(a.bottom)>f(l.top)||'bottom'===i&&f(a.top)<f(l.bottom),h=f(a.left)<f(o.left),c=f(a.right)>f(o.right),g=f(a.top)<f(o.top),u=f(a.bottom)>f(o.bottom),b='left'===i&&h||'right'===i&&c||'top'===i&&g||'bottom'===i&&u,w=-1!==['top','bottom'].indexOf(i),y=!!t.flipVariations&&(w&&'start'===r&&h||w&&'end'===r&&c||!w&&'start'===r&&g||!w&&'end'===r&&u);(m||b||y)&&(e.flipped=!0,(m||b)&&(i=p[d+1]),y&&(r=K(r)),e.placement=i+(r?'-'+r:''),e.offsets.popper=se({},e.offsets.popper,S(e.instance.popper,e.offsets.reference,e.placement)),e=C(e.instance.modifiers,e,'flip'))}),e},behavior:'flip',padding:5,boundariesElement:'viewport'},inner:{order:700,enabled:!1,fn:function(e){var t=e.placement,o=t.split('-')[0],i=e.offsets,n=i.popper,r=i.reference,p=-1!==['left','right'].indexOf(o),s=-1===['top','left'].indexOf(o);return n[p?'left':'top']=r[o]-(s?n[p?'width':'height']:0),e.placement=x(t),e.offsets.popper=c(n),e}},hide:{order:800,enabled:!0,fn:function(e){if(!F(e.instance.modifiers,'hide','preventOverflow'))return e;var t=e.offsets.reference,o=T(e.instance.modifiers,function(e){return'preventOverflow'===e.name}).boundaries;if(t.bottom<o.top||t.left>o.right||t.top>o.bottom||t.right<o.left){if(!0===e.hide)return e;e.hide=!0,e.attributes['x-out-of-boundaries']=''}else{if(!1===e.hide)return e;e.hide=!1,e.attributes['x-out-of-boundaries']=!1}return e}},computeStyle:{order:850,enabled:!0,fn:function(e,t){var o=t.x,i=t.y,n=e.offsets.popper,p=T(e.instance.modifiers,function(e){return'applyStyle'===e.name}).gpuAcceleration;void 0!==p&&console.warn('WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!');var s,d,a=void 0===p?t.gpuAcceleration:p,l=r(e.instance.popper),f=g(l),m={position:n.position},h={left:X(n.left),top:X(n.top),bottom:X(n.bottom),right:X(n.right)},c='bottom'===o?'top':'bottom',u='right'===i?'left':'right',b=W('transform');if(d='bottom'==c?-f.height+h.bottom:h.top,s='right'==u?-f.width+h.right:h.left,a&&b)m[b]='translate3d('+s+'px, '+d+'px, 0)',m[c]=0,m[u]=0,m.willChange='transform';else{var w='bottom'==c?-1:1,y='right'==u?-1:1;m[c]=d*w,m[u]=s*y,m.willChange=c+', '+u}var E={"x-placement":e.placement};return e.attributes=se({},E,e.attributes),e.styles=se({},m,e.styles),e.arrowStyles=se({},e.offsets.arrow,e.arrowStyles),e},gpuAcceleration:!0,x:'bottom',y:'right'},applyStyle:{order:900,enabled:!0,fn:function(e){return Y(e.instance.popper,e.styles),j(e.instance.popper,e.attributes),e.arrowElement&&Object.keys(e.arrowStyles).length&&Y(e.arrowElement,e.arrowStyles),e},onLoad:function(e,t,o,i,n){var r=O(n,t,e),p=v(o.placement,r,t,e,o.modifiers.flip.boundariesElement,o.modifiers.flip.padding);return t.setAttribute('x-placement',p),Y(t,{position:'absolute'}),o},gpuAcceleration:void 0}}},fe});
//# sourceMappingURL=popper.min.js.map

/*!
  * Bootstrap v4.2.1 (https://getbootstrap.com/)
  * Copyright 2011-2018 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
  */
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports,require("popper.js"),require("jquery")):"function"==typeof define&&define.amd?define(["exports","popper.js","jquery"],e):e(t.bootstrap={},t.Popper,t.jQuery)}(this,function(t,u,g){"use strict";function i(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function s(t,e,n){return e&&i(t.prototype,e),n&&i(t,n),t}function l(o){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},e=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(e=e.concat(Object.getOwnPropertySymbols(r).filter(function(t){return Object.getOwnPropertyDescriptor(r,t).enumerable}))),e.forEach(function(t){var e,n,i;e=o,i=r[n=t],n in e?Object.defineProperty(e,n,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[n]=i})}return o}u=u&&u.hasOwnProperty("default")?u.default:u,g=g&&g.hasOwnProperty("default")?g.default:g;var e="transitionend";function n(t){var e=this,n=!1;return g(this).one(_.TRANSITION_END,function(){n=!0}),setTimeout(function(){n||_.triggerTransitionEnd(e)},t),this}var _={TRANSITION_END:"bsTransitionEnd",getUID:function(t){for(;t+=~~(1e6*Math.random()),document.getElementById(t););return t},getSelectorFromElement:function(t){var e=t.getAttribute("data-target");if(!e||"#"===e){var n=t.getAttribute("href");e=n&&"#"!==n?n.trim():""}return e&&document.querySelector(e)?e:null},getTransitionDurationFromElement:function(t){if(!t)return 0;var e=g(t).css("transition-duration"),n=g(t).css("transition-delay"),i=parseFloat(e),o=parseFloat(n);return i||o?(e=e.split(",")[0],n=n.split(",")[0],1e3*(parseFloat(e)+parseFloat(n))):0},reflow:function(t){return t.offsetHeight},triggerTransitionEnd:function(t){g(t).trigger(e)},supportsTransitionEnd:function(){return Boolean(e)},isElement:function(t){return(t[0]||t).nodeType},typeCheckConfig:function(t,e,n){for(var i in n)if(Object.prototype.hasOwnProperty.call(n,i)){var o=n[i],r=e[i],s=r&&_.isElement(r)?"element":(a=r,{}.toString.call(a).match(/\s([a-z]+)/i)[1].toLowerCase());if(!new RegExp(o).test(s))throw new Error(t.toUpperCase()+': Option "'+i+'" provided type "'+s+'" but expected type "'+o+'".')}var a},findShadowRoot:function(t){if(!document.documentElement.attachShadow)return null;if("function"!=typeof t.getRootNode)return t instanceof ShadowRoot?t:t.parentNode?_.findShadowRoot(t.parentNode):null;var e=t.getRootNode();return e instanceof ShadowRoot?e:null}};g.fn.emulateTransitionEnd=n,g.event.special[_.TRANSITION_END]={bindType:e,delegateType:e,handle:function(t){if(g(t.target).is(this))return t.handleObj.handler.apply(this,arguments)}};var o="alert",r="bs.alert",a="."+r,c=g.fn[o],h={CLOSE:"close"+a,CLOSED:"closed"+a,CLICK_DATA_API:"click"+a+".data-api"},f="alert",d="fade",m="show",p=function(){function i(t){this._element=t}var t=i.prototype;return t.close=function(t){var e=this._element;t&&(e=this._getRootElement(t)),this._triggerCloseEvent(e).isDefaultPrevented()||this._removeElement(e)},t.dispose=function(){g.removeData(this._element,r),this._element=null},t._getRootElement=function(t){var e=_.getSelectorFromElement(t),n=!1;return e&&(n=document.querySelector(e)),n||(n=g(t).closest("."+f)[0]),n},t._triggerCloseEvent=function(t){var e=g.Event(h.CLOSE);return g(t).trigger(e),e},t._removeElement=function(e){var n=this;if(g(e).removeClass(m),g(e).hasClass(d)){var t=_.getTransitionDurationFromElement(e);g(e).one(_.TRANSITION_END,function(t){return n._destroyElement(e,t)}).emulateTransitionEnd(t)}else this._destroyElement(e)},t._destroyElement=function(t){g(t).detach().trigger(h.CLOSED).remove()},i._jQueryInterface=function(n){return this.each(function(){var t=g(this),e=t.data(r);e||(e=new i(this),t.data(r,e)),"close"===n&&e[n](this)})},i._handleDismiss=function(e){return function(t){t&&t.preventDefault(),e.close(this)}},s(i,null,[{key:"VERSION",get:function(){return"4.2.1"}}]),i}();g(document).on(h.CLICK_DATA_API,'[data-dismiss="alert"]',p._handleDismiss(new p)),g.fn[o]=p._jQueryInterface,g.fn[o].Constructor=p,g.fn[o].noConflict=function(){return g.fn[o]=c,p._jQueryInterface};var v="button",E="bs.button",y="."+E,C=".data-api",T=g.fn[v],S="active",b="btn",I="focus",D='[data-toggle^="button"]',w='[data-toggle="buttons"]',A='input:not([type="hidden"])',N=".active",O=".btn",k={CLICK_DATA_API:"click"+y+C,FOCUS_BLUR_DATA_API:"focus"+y+C+" blur"+y+C},P=function(){function n(t){this._element=t}var t=n.prototype;return t.toggle=function(){var t=!0,e=!0,n=g(this._element).closest(w)[0];if(n){var i=this._element.querySelector(A);if(i){if("radio"===i.type)if(i.checked&&this._element.classList.contains(S))t=!1;else{var o=n.querySelector(N);o&&g(o).removeClass(S)}if(t){if(i.hasAttribute("disabled")||n.hasAttribute("disabled")||i.classList.contains("disabled")||n.classList.contains("disabled"))return;i.checked=!this._element.classList.contains(S),g(i).trigger("change")}i.focus(),e=!1}}e&&this._element.setAttribute("aria-pressed",!this._element.classList.contains(S)),t&&g(this._element).toggleClass(S)},t.dispose=function(){g.removeData(this._element,E),this._element=null},n._jQueryInterface=function(e){return this.each(function(){var t=g(this).data(E);t||(t=new n(this),g(this).data(E,t)),"toggle"===e&&t[e]()})},s(n,null,[{key:"VERSION",get:function(){return"4.2.1"}}]),n}();g(document).on(k.CLICK_DATA_API,D,function(t){t.preventDefault();var e=t.target;g(e).hasClass(b)||(e=g(e).closest(O)),P._jQueryInterface.call(g(e),"toggle")}).on(k.FOCUS_BLUR_DATA_API,D,function(t){var e=g(t.target).closest(O)[0];g(e).toggleClass(I,/^focus(in)?$/.test(t.type))}),g.fn[v]=P._jQueryInterface,g.fn[v].Constructor=P,g.fn[v].noConflict=function(){return g.fn[v]=T,P._jQueryInterface};var L="carousel",j="bs.carousel",H="."+j,R=".data-api",U=g.fn[L],W={interval:5e3,keyboard:!0,slide:!1,pause:"hover",wrap:!0,touch:!0},x={interval:"(number|boolean)",keyboard:"boolean",slide:"(boolean|string)",pause:"(string|boolean)",wrap:"boolean",touch:"boolean"},F="next",q="prev",M="left",K="right",Q={SLIDE:"slide"+H,SLID:"slid"+H,KEYDOWN:"keydown"+H,MOUSEENTER:"mouseenter"+H,MOUSELEAVE:"mouseleave"+H,TOUCHSTART:"touchstart"+H,TOUCHMOVE:"touchmove"+H,TOUCHEND:"touchend"+H,POINTERDOWN:"pointerdown"+H,POINTERUP:"pointerup"+H,DRAG_START:"dragstart"+H,LOAD_DATA_API:"load"+H+R,CLICK_DATA_API:"click"+H+R},B="carousel",V="active",Y="slide",X="carousel-item-right",z="carousel-item-left",G="carousel-item-next",J="carousel-item-prev",Z="pointer-event",$=".active",tt=".active.carousel-item",et=".carousel-item",nt=".carousel-item img",it=".carousel-item-next, .carousel-item-prev",ot=".carousel-indicators",rt="[data-slide], [data-slide-to]",st='[data-ride="carousel"]',at={TOUCH:"touch",PEN:"pen"},lt=function(){function r(t,e){this._items=null,this._interval=null,this._activeElement=null,this._isPaused=!1,this._isSliding=!1,this.touchTimeout=null,this.touchStartX=0,this.touchDeltaX=0,this._config=this._getConfig(e),this._element=t,this._indicatorsElement=this._element.querySelector(ot),this._touchSupported="ontouchstart"in document.documentElement||0<navigator.maxTouchPoints,this._pointerEvent=Boolean(window.PointerEvent||window.MSPointerEvent),this._addEventListeners()}var t=r.prototype;return t.next=function(){this._isSliding||this._slide(F)},t.nextWhenVisible=function(){!document.hidden&&g(this._element).is(":visible")&&"hidden"!==g(this._element).css("visibility")&&this.next()},t.prev=function(){this._isSliding||this._slide(q)},t.pause=function(t){t||(this._isPaused=!0),this._element.querySelector(it)&&(_.triggerTransitionEnd(this._element),this.cycle(!0)),clearInterval(this._interval),this._interval=null},t.cycle=function(t){t||(this._isPaused=!1),this._interval&&(clearInterval(this._interval),this._interval=null),this._config.interval&&!this._isPaused&&(this._interval=setInterval((document.visibilityState?this.nextWhenVisible:this.next).bind(this),this._config.interval))},t.to=function(t){var e=this;this._activeElement=this._element.querySelector(tt);var n=this._getItemIndex(this._activeElement);if(!(t>this._items.length-1||t<0))if(this._isSliding)g(this._element).one(Q.SLID,function(){return e.to(t)});else{if(n===t)return this.pause(),void this.cycle();var i=n<t?F:q;this._slide(i,this._items[t])}},t.dispose=function(){g(this._element).off(H),g.removeData(this._element,j),this._items=null,this._config=null,this._element=null,this._interval=null,this._isPaused=null,this._isSliding=null,this._activeElement=null,this._indicatorsElement=null},t._getConfig=function(t){return t=l({},W,t),_.typeCheckConfig(L,t,x),t},t._handleSwipe=function(){var t=Math.abs(this.touchDeltaX);if(!(t<=40)){var e=t/this.touchDeltaX;0<e&&this.prev(),e<0&&this.next()}},t._addEventListeners=function(){var e=this;this._config.keyboard&&g(this._element).on(Q.KEYDOWN,function(t){return e._keydown(t)}),"hover"===this._config.pause&&g(this._element).on(Q.MOUSEENTER,function(t){return e.pause(t)}).on(Q.MOUSELEAVE,function(t){return e.cycle(t)}),this._addTouchEventListeners()},t._addTouchEventListeners=function(){var n=this;if(this._touchSupported){var e=function(t){n._pointerEvent&&at[t.originalEvent.pointerType.toUpperCase()]?n.touchStartX=t.originalEvent.clientX:n._pointerEvent||(n.touchStartX=t.originalEvent.touches[0].clientX)},i=function(t){n._pointerEvent&&at[t.originalEvent.pointerType.toUpperCase()]&&(n.touchDeltaX=t.originalEvent.clientX-n.touchStartX),n._handleSwipe(),"hover"===n._config.pause&&(n.pause(),n.touchTimeout&&clearTimeout(n.touchTimeout),n.touchTimeout=setTimeout(function(t){return n.cycle(t)},500+n._config.interval))};g(this._element.querySelectorAll(nt)).on(Q.DRAG_START,function(t){return t.preventDefault()}),this._pointerEvent?(g(this._element).on(Q.POINTERDOWN,function(t){return e(t)}),g(this._element).on(Q.POINTERUP,function(t){return i(t)}),this._element.classList.add(Z)):(g(this._element).on(Q.TOUCHSTART,function(t){return e(t)}),g(this._element).on(Q.TOUCHMOVE,function(t){var e;(e=t).originalEvent.touches&&1<e.originalEvent.touches.length?n.touchDeltaX=0:n.touchDeltaX=e.originalEvent.touches[0].clientX-n.touchStartX}),g(this._element).on(Q.TOUCHEND,function(t){return i(t)}))}},t._keydown=function(t){if(!/input|textarea/i.test(t.target.tagName))switch(t.which){case 37:t.preventDefault(),this.prev();break;case 39:t.preventDefault(),this.next()}},t._getItemIndex=function(t){return this._items=t&&t.parentNode?[].slice.call(t.parentNode.querySelectorAll(et)):[],this._items.indexOf(t)},t._getItemByDirection=function(t,e){var n=t===F,i=t===q,o=this._getItemIndex(e),r=this._items.length-1;if((i&&0===o||n&&o===r)&&!this._config.wrap)return e;var s=(o+(t===q?-1:1))%this._items.length;return-1===s?this._items[this._items.length-1]:this._items[s]},t._triggerSlideEvent=function(t,e){var n=this._getItemIndex(t),i=this._getItemIndex(this._element.querySelector(tt)),o=g.Event(Q.SLIDE,{relatedTarget:t,direction:e,from:i,to:n});return g(this._element).trigger(o),o},t._setActiveIndicatorElement=function(t){if(this._indicatorsElement){var e=[].slice.call(this._indicatorsElement.querySelectorAll($));g(e).removeClass(V);var n=this._indicatorsElement.children[this._getItemIndex(t)];n&&g(n).addClass(V)}},t._slide=function(t,e){var n,i,o,r=this,s=this._element.querySelector(tt),a=this._getItemIndex(s),l=e||s&&this._getItemByDirection(t,s),c=this._getItemIndex(l),h=Boolean(this._interval);if(o=t===F?(n=z,i=G,M):(n=X,i=J,K),l&&g(l).hasClass(V))this._isSliding=!1;else if(!this._triggerSlideEvent(l,o).isDefaultPrevented()&&s&&l){this._isSliding=!0,h&&this.pause(),this._setActiveIndicatorElement(l);var u=g.Event(Q.SLID,{relatedTarget:l,direction:o,from:a,to:c});if(g(this._element).hasClass(Y)){g(l).addClass(i),_.reflow(l),g(s).addClass(n),g(l).addClass(n);var f=parseInt(l.getAttribute("data-interval"),10);this._config.interval=f?(this._config.defaultInterval=this._config.defaultInterval||this._config.interval,f):this._config.defaultInterval||this._config.interval;var d=_.getTransitionDurationFromElement(s);g(s).one(_.TRANSITION_END,function(){g(l).removeClass(n+" "+i).addClass(V),g(s).removeClass(V+" "+i+" "+n),r._isSliding=!1,setTimeout(function(){return g(r._element).trigger(u)},0)}).emulateTransitionEnd(d)}else g(s).removeClass(V),g(l).addClass(V),this._isSliding=!1,g(this._element).trigger(u);h&&this.cycle()}},r._jQueryInterface=function(i){return this.each(function(){var t=g(this).data(j),e=l({},W,g(this).data());"object"==typeof i&&(e=l({},e,i));var n="string"==typeof i?i:e.slide;if(t||(t=new r(this,e),g(this).data(j,t)),"number"==typeof i)t.to(i);else if("string"==typeof n){if("undefined"==typeof t[n])throw new TypeError('No method named "'+n+'"');t[n]()}else e.interval&&(t.pause(),t.cycle())})},r._dataApiClickHandler=function(t){var e=_.getSelectorFromElement(this);if(e){var n=g(e)[0];if(n&&g(n).hasClass(B)){var i=l({},g(n).data(),g(this).data()),o=this.getAttribute("data-slide-to");o&&(i.interval=!1),r._jQueryInterface.call(g(n),i),o&&g(n).data(j).to(o),t.preventDefault()}}},s(r,null,[{key:"VERSION",get:function(){return"4.2.1"}},{key:"Default",get:function(){return W}}]),r}();g(document).on(Q.CLICK_DATA_API,rt,lt._dataApiClickHandler),g(window).on(Q.LOAD_DATA_API,function(){for(var t=[].slice.call(document.querySelectorAll(st)),e=0,n=t.length;e<n;e++){var i=g(t[e]);lt._jQueryInterface.call(i,i.data())}}),g.fn[L]=lt._jQueryInterface,g.fn[L].Constructor=lt,g.fn[L].noConflict=function(){return g.fn[L]=U,lt._jQueryInterface};var ct="collapse",ht="bs.collapse",ut="."+ht,ft=g.fn[ct],dt={toggle:!0,parent:""},gt={toggle:"boolean",parent:"(string|element)"},_t={SHOW:"show"+ut,SHOWN:"shown"+ut,HIDE:"hide"+ut,HIDDEN:"hidden"+ut,CLICK_DATA_API:"click"+ut+".data-api"},mt="show",pt="collapse",vt="collapsing",Et="collapsed",yt="width",Ct="height",Tt=".show, .collapsing",St='[data-toggle="collapse"]',bt=function(){function a(e,t){this._isTransitioning=!1,this._element=e,this._config=this._getConfig(t),this._triggerArray=[].slice.call(document.querySelectorAll('[data-toggle="collapse"][href="#'+e.id+'"],[data-toggle="collapse"][data-target="#'+e.id+'"]'));for(var n=[].slice.call(document.querySelectorAll(St)),i=0,o=n.length;i<o;i++){var r=n[i],s=_.getSelectorFromElement(r),a=[].slice.call(document.querySelectorAll(s)).filter(function(t){return t===e});null!==s&&0<a.length&&(this._selector=s,this._triggerArray.push(r))}this._parent=this._config.parent?this._getParent():null,this._config.parent||this._addAriaAndCollapsedClass(this._element,this._triggerArray),this._config.toggle&&this.toggle()}var t=a.prototype;return t.toggle=function(){g(this._element).hasClass(mt)?this.hide():this.show()},t.show=function(){var t,e,n=this;if(!this._isTransitioning&&!g(this._element).hasClass(mt)&&(this._parent&&0===(t=[].slice.call(this._parent.querySelectorAll(Tt)).filter(function(t){return"string"==typeof n._config.parent?t.getAttribute("data-parent")===n._config.parent:t.classList.contains(pt)})).length&&(t=null),!(t&&(e=g(t).not(this._selector).data(ht))&&e._isTransitioning))){var i=g.Event(_t.SHOW);if(g(this._element).trigger(i),!i.isDefaultPrevented()){t&&(a._jQueryInterface.call(g(t).not(this._selector),"hide"),e||g(t).data(ht,null));var o=this._getDimension();g(this._element).removeClass(pt).addClass(vt),this._element.style[o]=0,this._triggerArray.length&&g(this._triggerArray).removeClass(Et).attr("aria-expanded",!0),this.setTransitioning(!0);var r="scroll"+(o[0].toUpperCase()+o.slice(1)),s=_.getTransitionDurationFromElement(this._element);g(this._element).one(_.TRANSITION_END,function(){g(n._element).removeClass(vt).addClass(pt).addClass(mt),n._element.style[o]="",n.setTransitioning(!1),g(n._element).trigger(_t.SHOWN)}).emulateTransitionEnd(s),this._element.style[o]=this._element[r]+"px"}}},t.hide=function(){var t=this;if(!this._isTransitioning&&g(this._element).hasClass(mt)){var e=g.Event(_t.HIDE);if(g(this._element).trigger(e),!e.isDefaultPrevented()){var n=this._getDimension();this._element.style[n]=this._element.getBoundingClientRect()[n]+"px",_.reflow(this._element),g(this._element).addClass(vt).removeClass(pt).removeClass(mt);var i=this._triggerArray.length;if(0<i)for(var o=0;o<i;o++){var r=this._triggerArray[o],s=_.getSelectorFromElement(r);if(null!==s)g([].slice.call(document.querySelectorAll(s))).hasClass(mt)||g(r).addClass(Et).attr("aria-expanded",!1)}this.setTransitioning(!0);this._element.style[n]="";var a=_.getTransitionDurationFromElement(this._element);g(this._element).one(_.TRANSITION_END,function(){t.setTransitioning(!1),g(t._element).removeClass(vt).addClass(pt).trigger(_t.HIDDEN)}).emulateTransitionEnd(a)}}},t.setTransitioning=function(t){this._isTransitioning=t},t.dispose=function(){g.removeData(this._element,ht),this._config=null,this._parent=null,this._element=null,this._triggerArray=null,this._isTransitioning=null},t._getConfig=function(t){return(t=l({},dt,t)).toggle=Boolean(t.toggle),_.typeCheckConfig(ct,t,gt),t},t._getDimension=function(){return g(this._element).hasClass(yt)?yt:Ct},t._getParent=function(){var t,n=this;_.isElement(this._config.parent)?(t=this._config.parent,"undefined"!=typeof this._config.parent.jquery&&(t=this._config.parent[0])):t=document.querySelector(this._config.parent);var e='[data-toggle="collapse"][data-parent="'+this._config.parent+'"]',i=[].slice.call(t.querySelectorAll(e));return g(i).each(function(t,e){n._addAriaAndCollapsedClass(a._getTargetFromElement(e),[e])}),t},t._addAriaAndCollapsedClass=function(t,e){var n=g(t).hasClass(mt);e.length&&g(e).toggleClass(Et,!n).attr("aria-expanded",n)},a._getTargetFromElement=function(t){var e=_.getSelectorFromElement(t);return e?document.querySelector(e):null},a._jQueryInterface=function(i){return this.each(function(){var t=g(this),e=t.data(ht),n=l({},dt,t.data(),"object"==typeof i&&i?i:{});if(!e&&n.toggle&&/show|hide/.test(i)&&(n.toggle=!1),e||(e=new a(this,n),t.data(ht,e)),"string"==typeof i){if("undefined"==typeof e[i])throw new TypeError('No method named "'+i+'"');e[i]()}})},s(a,null,[{key:"VERSION",get:function(){return"4.2.1"}},{key:"Default",get:function(){return dt}}]),a}();g(document).on(_t.CLICK_DATA_API,St,function(t){"A"===t.currentTarget.tagName&&t.preventDefault();var n=g(this),e=_.getSelectorFromElement(this),i=[].slice.call(document.querySelectorAll(e));g(i).each(function(){var t=g(this),e=t.data(ht)?"toggle":n.data();bt._jQueryInterface.call(t,e)})}),g.fn[ct]=bt._jQueryInterface,g.fn[ct].Constructor=bt,g.fn[ct].noConflict=function(){return g.fn[ct]=ft,bt._jQueryInterface};var It="dropdown",Dt="bs.dropdown",wt="."+Dt,At=".data-api",Nt=g.fn[It],Ot=new RegExp("38|40|27"),kt={HIDE:"hide"+wt,HIDDEN:"hidden"+wt,SHOW:"show"+wt,SHOWN:"shown"+wt,CLICK:"click"+wt,CLICK_DATA_API:"click"+wt+At,KEYDOWN_DATA_API:"keydown"+wt+At,KEYUP_DATA_API:"keyup"+wt+At},Pt="disabled",Lt="show",jt="dropup",Ht="dropright",Rt="dropleft",Ut="dropdown-menu-right",Wt="position-static",xt='[data-toggle="dropdown"]',Ft=".dropdown form",qt=".dropdown-menu",Mt=".navbar-nav",Kt=".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",Qt="top-start",Bt="top-end",Vt="bottom-start",Yt="bottom-end",Xt="right-start",zt="left-start",Gt={offset:0,flip:!0,boundary:"scrollParent",reference:"toggle",display:"dynamic"},Jt={offset:"(number|string|function)",flip:"boolean",boundary:"(string|element)",reference:"(string|element)",display:"string"},Zt=function(){function c(t,e){this._element=t,this._popper=null,this._config=this._getConfig(e),this._menu=this._getMenuElement(),this._inNavbar=this._detectNavbar(),this._addEventListeners()}var t=c.prototype;return t.toggle=function(){if(!this._element.disabled&&!g(this._element).hasClass(Pt)){var t=c._getParentFromElement(this._element),e=g(this._menu).hasClass(Lt);if(c._clearMenus(),!e){var n={relatedTarget:this._element},i=g.Event(kt.SHOW,n);if(g(t).trigger(i),!i.isDefaultPrevented()){if(!this._inNavbar){if("undefined"==typeof u)throw new TypeError("Bootstrap's dropdowns require Popper.js (https://popper.js.org/)");var o=this._element;"parent"===this._config.reference?o=t:_.isElement(this._config.reference)&&(o=this._config.reference,"undefined"!=typeof this._config.reference.jquery&&(o=this._config.reference[0])),"scrollParent"!==this._config.boundary&&g(t).addClass(Wt),this._popper=new u(o,this._menu,this._getPopperConfig())}"ontouchstart"in document.documentElement&&0===g(t).closest(Mt).length&&g(document.body).children().on("mouseover",null,g.noop),this._element.focus(),this._element.setAttribute("aria-expanded",!0),g(this._menu).toggleClass(Lt),g(t).toggleClass(Lt).trigger(g.Event(kt.SHOWN,n))}}}},t.show=function(){if(!(this._element.disabled||g(this._element).hasClass(Pt)||g(this._menu).hasClass(Lt))){var t={relatedTarget:this._element},e=g.Event(kt.SHOW,t),n=c._getParentFromElement(this._element);g(n).trigger(e),e.isDefaultPrevented()||(g(this._menu).toggleClass(Lt),g(n).toggleClass(Lt).trigger(g.Event(kt.SHOWN,t)))}},t.hide=function(){if(!this._element.disabled&&!g(this._element).hasClass(Pt)&&g(this._menu).hasClass(Lt)){var t={relatedTarget:this._element},e=g.Event(kt.HIDE,t),n=c._getParentFromElement(this._element);g(n).trigger(e),e.isDefaultPrevented()||(g(this._menu).toggleClass(Lt),g(n).toggleClass(Lt).trigger(g.Event(kt.HIDDEN,t)))}},t.dispose=function(){g.removeData(this._element,Dt),g(this._element).off(wt),this._element=null,(this._menu=null)!==this._popper&&(this._popper.destroy(),this._popper=null)},t.update=function(){this._inNavbar=this._detectNavbar(),null!==this._popper&&this._popper.scheduleUpdate()},t._addEventListeners=function(){var e=this;g(this._element).on(kt.CLICK,function(t){t.preventDefault(),t.stopPropagation(),e.toggle()})},t._getConfig=function(t){return t=l({},this.constructor.Default,g(this._element).data(),t),_.typeCheckConfig(It,t,this.constructor.DefaultType),t},t._getMenuElement=function(){if(!this._menu){var t=c._getParentFromElement(this._element);t&&(this._menu=t.querySelector(qt))}return this._menu},t._getPlacement=function(){var t=g(this._element.parentNode),e=Vt;return t.hasClass(jt)?(e=Qt,g(this._menu).hasClass(Ut)&&(e=Bt)):t.hasClass(Ht)?e=Xt:t.hasClass(Rt)?e=zt:g(this._menu).hasClass(Ut)&&(e=Yt),e},t._detectNavbar=function(){return 0<g(this._element).closest(".navbar").length},t._getPopperConfig=function(){var e=this,t={};"function"==typeof this._config.offset?t.fn=function(t){return t.offsets=l({},t.offsets,e._config.offset(t.offsets)||{}),t}:t.offset=this._config.offset;var n={placement:this._getPlacement(),modifiers:{offset:t,flip:{enabled:this._config.flip},preventOverflow:{boundariesElement:this._config.boundary}}};return"static"===this._config.display&&(n.modifiers.applyStyle={enabled:!1}),n},c._jQueryInterface=function(e){return this.each(function(){var t=g(this).data(Dt);if(t||(t=new c(this,"object"==typeof e?e:null),g(this).data(Dt,t)),"string"==typeof e){if("undefined"==typeof t[e])throw new TypeError('No method named "'+e+'"');t[e]()}})},c._clearMenus=function(t){if(!t||3!==t.which&&("keyup"!==t.type||9===t.which))for(var e=[].slice.call(document.querySelectorAll(xt)),n=0,i=e.length;n<i;n++){var o=c._getParentFromElement(e[n]),r=g(e[n]).data(Dt),s={relatedTarget:e[n]};if(t&&"click"===t.type&&(s.clickEvent=t),r){var a=r._menu;if(g(o).hasClass(Lt)&&!(t&&("click"===t.type&&/input|textarea/i.test(t.target.tagName)||"keyup"===t.type&&9===t.which)&&g.contains(o,t.target))){var l=g.Event(kt.HIDE,s);g(o).trigger(l),l.isDefaultPrevented()||("ontouchstart"in document.documentElement&&g(document.body).children().off("mouseover",null,g.noop),e[n].setAttribute("aria-expanded","false"),g(a).removeClass(Lt),g(o).removeClass(Lt).trigger(g.Event(kt.HIDDEN,s)))}}}},c._getParentFromElement=function(t){var e,n=_.getSelectorFromElement(t);return n&&(e=document.querySelector(n)),e||t.parentNode},c._dataApiKeydownHandler=function(t){if((/input|textarea/i.test(t.target.tagName)?!(32===t.which||27!==t.which&&(40!==t.which&&38!==t.which||g(t.target).closest(qt).length)):Ot.test(t.which))&&(t.preventDefault(),t.stopPropagation(),!this.disabled&&!g(this).hasClass(Pt))){var e=c._getParentFromElement(this),n=g(e).hasClass(Lt);if(n&&(!n||27!==t.which&&32!==t.which)){var i=[].slice.call(e.querySelectorAll(Kt));if(0!==i.length){var o=i.indexOf(t.target);38===t.which&&0<o&&o--,40===t.which&&o<i.length-1&&o++,o<0&&(o=0),i[o].focus()}}else{if(27===t.which){var r=e.querySelector(xt);g(r).trigger("focus")}g(this).trigger("click")}}},s(c,null,[{key:"VERSION",get:function(){return"4.2.1"}},{key:"Default",get:function(){return Gt}},{key:"DefaultType",get:function(){return Jt}}]),c}();g(document).on(kt.KEYDOWN_DATA_API,xt,Zt._dataApiKeydownHandler).on(kt.KEYDOWN_DATA_API,qt,Zt._dataApiKeydownHandler).on(kt.CLICK_DATA_API+" "+kt.KEYUP_DATA_API,Zt._clearMenus).on(kt.CLICK_DATA_API,xt,function(t){t.preventDefault(),t.stopPropagation(),Zt._jQueryInterface.call(g(this),"toggle")}).on(kt.CLICK_DATA_API,Ft,function(t){t.stopPropagation()}),g.fn[It]=Zt._jQueryInterface,g.fn[It].Constructor=Zt,g.fn[It].noConflict=function(){return g.fn[It]=Nt,Zt._jQueryInterface};var $t="modal",te="bs.modal",ee="."+te,ne=g.fn[$t],ie={backdrop:!0,keyboard:!0,focus:!0,show:!0},oe={backdrop:"(boolean|string)",keyboard:"boolean",focus:"boolean",show:"boolean"},re={HIDE:"hide"+ee,HIDDEN:"hidden"+ee,SHOW:"show"+ee,SHOWN:"shown"+ee,FOCUSIN:"focusin"+ee,RESIZE:"resize"+ee,CLICK_DISMISS:"click.dismiss"+ee,KEYDOWN_DISMISS:"keydown.dismiss"+ee,MOUSEUP_DISMISS:"mouseup.dismiss"+ee,MOUSEDOWN_DISMISS:"mousedown.dismiss"+ee,CLICK_DATA_API:"click"+ee+".data-api"},se="modal-scrollbar-measure",ae="modal-backdrop",le="modal-open",ce="fade",he="show",ue=".modal-dialog",fe='[data-toggle="modal"]',de='[data-dismiss="modal"]',ge=".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",_e=".sticky-top",me=function(){function o(t,e){this._config=this._getConfig(e),this._element=t,this._dialog=t.querySelector(ue),this._backdrop=null,this._isShown=!1,this._isBodyOverflowing=!1,this._ignoreBackdropClick=!1,this._isTransitioning=!1,this._scrollbarWidth=0}var t=o.prototype;return t.toggle=function(t){return this._isShown?this.hide():this.show(t)},t.show=function(t){var e=this;if(!this._isShown&&!this._isTransitioning){g(this._element).hasClass(ce)&&(this._isTransitioning=!0);var n=g.Event(re.SHOW,{relatedTarget:t});g(this._element).trigger(n),this._isShown||n.isDefaultPrevented()||(this._isShown=!0,this._checkScrollbar(),this._setScrollbar(),this._adjustDialog(),this._setEscapeEvent(),this._setResizeEvent(),g(this._element).on(re.CLICK_DISMISS,de,function(t){return e.hide(t)}),g(this._dialog).on(re.MOUSEDOWN_DISMISS,function(){g(e._element).one(re.MOUSEUP_DISMISS,function(t){g(t.target).is(e._element)&&(e._ignoreBackdropClick=!0)})}),this._showBackdrop(function(){return e._showElement(t)}))}},t.hide=function(t){var e=this;if(t&&t.preventDefault(),this._isShown&&!this._isTransitioning){var n=g.Event(re.HIDE);if(g(this._element).trigger(n),this._isShown&&!n.isDefaultPrevented()){this._isShown=!1;var i=g(this._element).hasClass(ce);if(i&&(this._isTransitioning=!0),this._setEscapeEvent(),this._setResizeEvent(),g(document).off(re.FOCUSIN),g(this._element).removeClass(he),g(this._element).off(re.CLICK_DISMISS),g(this._dialog).off(re.MOUSEDOWN_DISMISS),i){var o=_.getTransitionDurationFromElement(this._element);g(this._element).one(_.TRANSITION_END,function(t){return e._hideModal(t)}).emulateTransitionEnd(o)}else this._hideModal()}}},t.dispose=function(){[window,this._element,this._dialog].forEach(function(t){return g(t).off(ee)}),g(document).off(re.FOCUSIN),g.removeData(this._element,te),this._config=null,this._element=null,this._dialog=null,this._backdrop=null,this._isShown=null,this._isBodyOverflowing=null,this._ignoreBackdropClick=null,this._isTransitioning=null,this._scrollbarWidth=null},t.handleUpdate=function(){this._adjustDialog()},t._getConfig=function(t){return t=l({},ie,t),_.typeCheckConfig($t,t,oe),t},t._showElement=function(t){var e=this,n=g(this._element).hasClass(ce);this._element.parentNode&&this._element.parentNode.nodeType===Node.ELEMENT_NODE||document.body.appendChild(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.setAttribute("aria-modal",!0),this._element.scrollTop=0,n&&_.reflow(this._element),g(this._element).addClass(he),this._config.focus&&this._enforceFocus();var i=g.Event(re.SHOWN,{relatedTarget:t}),o=function(){e._config.focus&&e._element.focus(),e._isTransitioning=!1,g(e._element).trigger(i)};if(n){var r=_.getTransitionDurationFromElement(this._dialog);g(this._dialog).one(_.TRANSITION_END,o).emulateTransitionEnd(r)}else o()},t._enforceFocus=function(){var e=this;g(document).off(re.FOCUSIN).on(re.FOCUSIN,function(t){document!==t.target&&e._element!==t.target&&0===g(e._element).has(t.target).length&&e._element.focus()})},t._setEscapeEvent=function(){var e=this;this._isShown&&this._config.keyboard?g(this._element).on(re.KEYDOWN_DISMISS,function(t){27===t.which&&(t.preventDefault(),e.hide())}):this._isShown||g(this._element).off(re.KEYDOWN_DISMISS)},t._setResizeEvent=function(){var e=this;this._isShown?g(window).on(re.RESIZE,function(t){return e.handleUpdate(t)}):g(window).off(re.RESIZE)},t._hideModal=function(){var t=this;this._element.style.display="none",this._element.setAttribute("aria-hidden",!0),this._element.removeAttribute("aria-modal"),this._isTransitioning=!1,this._showBackdrop(function(){g(document.body).removeClass(le),t._resetAdjustments(),t._resetScrollbar(),g(t._element).trigger(re.HIDDEN)})},t._removeBackdrop=function(){this._backdrop&&(g(this._backdrop).remove(),this._backdrop=null)},t._showBackdrop=function(t){var e=this,n=g(this._element).hasClass(ce)?ce:"";if(this._isShown&&this._config.backdrop){if(this._backdrop=document.createElement("div"),this._backdrop.className=ae,n&&this._backdrop.classList.add(n),g(this._backdrop).appendTo(document.body),g(this._element).on(re.CLICK_DISMISS,function(t){e._ignoreBackdropClick?e._ignoreBackdropClick=!1:t.target===t.currentTarget&&("static"===e._config.backdrop?e._element.focus():e.hide())}),n&&_.reflow(this._backdrop),g(this._backdrop).addClass(he),!t)return;if(!n)return void t();var i=_.getTransitionDurationFromElement(this._backdrop);g(this._backdrop).one(_.TRANSITION_END,t).emulateTransitionEnd(i)}else if(!this._isShown&&this._backdrop){g(this._backdrop).removeClass(he);var o=function(){e._removeBackdrop(),t&&t()};if(g(this._element).hasClass(ce)){var r=_.getTransitionDurationFromElement(this._backdrop);g(this._backdrop).one(_.TRANSITION_END,o).emulateTransitionEnd(r)}else o()}else t&&t()},t._adjustDialog=function(){var t=this._element.scrollHeight>document.documentElement.clientHeight;!this._isBodyOverflowing&&t&&(this._element.style.paddingLeft=this._scrollbarWidth+"px"),this._isBodyOverflowing&&!t&&(this._element.style.paddingRight=this._scrollbarWidth+"px")},t._resetAdjustments=function(){this._element.style.paddingLeft="",this._element.style.paddingRight=""},t._checkScrollbar=function(){var t=document.body.getBoundingClientRect();this._isBodyOverflowing=t.left+t.right<window.innerWidth,this._scrollbarWidth=this._getScrollbarWidth()},t._setScrollbar=function(){var o=this;if(this._isBodyOverflowing){var t=[].slice.call(document.querySelectorAll(ge)),e=[].slice.call(document.querySelectorAll(_e));g(t).each(function(t,e){var n=e.style.paddingRight,i=g(e).css("padding-right");g(e).data("padding-right",n).css("padding-right",parseFloat(i)+o._scrollbarWidth+"px")}),g(e).each(function(t,e){var n=e.style.marginRight,i=g(e).css("margin-right");g(e).data("margin-right",n).css("margin-right",parseFloat(i)-o._scrollbarWidth+"px")});var n=document.body.style.paddingRight,i=g(document.body).css("padding-right");g(document.body).data("padding-right",n).css("padding-right",parseFloat(i)+this._scrollbarWidth+"px")}g(document.body).addClass(le)},t._resetScrollbar=function(){var t=[].slice.call(document.querySelectorAll(ge));g(t).each(function(t,e){var n=g(e).data("padding-right");g(e).removeData("padding-right"),e.style.paddingRight=n||""});var e=[].slice.call(document.querySelectorAll(""+_e));g(e).each(function(t,e){var n=g(e).data("margin-right");"undefined"!=typeof n&&g(e).css("margin-right",n).removeData("margin-right")});var n=g(document.body).data("padding-right");g(document.body).removeData("padding-right"),document.body.style.paddingRight=n||""},t._getScrollbarWidth=function(){var t=document.createElement("div");t.className=se,document.body.appendChild(t);var e=t.getBoundingClientRect().width-t.clientWidth;return document.body.removeChild(t),e},o._jQueryInterface=function(n,i){return this.each(function(){var t=g(this).data(te),e=l({},ie,g(this).data(),"object"==typeof n&&n?n:{});if(t||(t=new o(this,e),g(this).data(te,t)),"string"==typeof n){if("undefined"==typeof t[n])throw new TypeError('No method named "'+n+'"');t[n](i)}else e.show&&t.show(i)})},s(o,null,[{key:"VERSION",get:function(){return"4.2.1"}},{key:"Default",get:function(){return ie}}]),o}();g(document).on(re.CLICK_DATA_API,fe,function(t){var e,n=this,i=_.getSelectorFromElement(this);i&&(e=document.querySelector(i));var o=g(e).data(te)?"toggle":l({},g(e).data(),g(this).data());"A"!==this.tagName&&"AREA"!==this.tagName||t.preventDefault();var r=g(e).one(re.SHOW,function(t){t.isDefaultPrevented()||r.one(re.HIDDEN,function(){g(n).is(":visible")&&n.focus()})});me._jQueryInterface.call(g(e),o,this)}),g.fn[$t]=me._jQueryInterface,g.fn[$t].Constructor=me,g.fn[$t].noConflict=function(){return g.fn[$t]=ne,me._jQueryInterface};var pe="tooltip",ve="bs.tooltip",Ee="."+ve,ye=g.fn[pe],Ce="bs-tooltip",Te=new RegExp("(^|\\s)"+Ce+"\\S+","g"),Se={animation:"boolean",template:"string",title:"(string|element|function)",trigger:"string",delay:"(number|object)",html:"boolean",selector:"(string|boolean)",placement:"(string|function)",offset:"(number|string)",container:"(string|element|boolean)",fallbackPlacement:"(string|array)",boundary:"(string|element)"},be={AUTO:"auto",TOP:"top",RIGHT:"right",BOTTOM:"bottom",LEFT:"left"},Ie={animation:!0,template:'<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,selector:!1,placement:"top",offset:0,container:!1,fallbackPlacement:"flip",boundary:"scrollParent"},De="show",we="out",Ae={HIDE:"hide"+Ee,HIDDEN:"hidden"+Ee,SHOW:"show"+Ee,SHOWN:"shown"+Ee,INSERTED:"inserted"+Ee,CLICK:"click"+Ee,FOCUSIN:"focusin"+Ee,FOCUSOUT:"focusout"+Ee,MOUSEENTER:"mouseenter"+Ee,MOUSELEAVE:"mouseleave"+Ee},Ne="fade",Oe="show",ke=".tooltip-inner",Pe=".arrow",Le="hover",je="focus",He="click",Re="manual",Ue=function(){function i(t,e){if("undefined"==typeof u)throw new TypeError("Bootstrap's tooltips require Popper.js (https://popper.js.org/)");this._isEnabled=!0,this._timeout=0,this._hoverState="",this._activeTrigger={},this._popper=null,this.element=t,this.config=this._getConfig(e),this.tip=null,this._setListeners()}var t=i.prototype;return t.enable=function(){this._isEnabled=!0},t.disable=function(){this._isEnabled=!1},t.toggleEnabled=function(){this._isEnabled=!this._isEnabled},t.toggle=function(t){if(this._isEnabled)if(t){var e=this.constructor.DATA_KEY,n=g(t.currentTarget).data(e);n||(n=new this.constructor(t.currentTarget,this._getDelegateConfig()),g(t.currentTarget).data(e,n)),n._activeTrigger.click=!n._activeTrigger.click,n._isWithActiveTrigger()?n._enter(null,n):n._leave(null,n)}else{if(g(this.getTipElement()).hasClass(Oe))return void this._leave(null,this);this._enter(null,this)}},t.dispose=function(){clearTimeout(this._timeout),g.removeData(this.element,this.constructor.DATA_KEY),g(this.element).off(this.constructor.EVENT_KEY),g(this.element).closest(".modal").off("hide.bs.modal"),this.tip&&g(this.tip).remove(),this._isEnabled=null,this._timeout=null,this._hoverState=null,(this._activeTrigger=null)!==this._popper&&this._popper.destroy(),this._popper=null,this.element=null,this.config=null,this.tip=null},t.show=function(){var e=this;if("none"===g(this.element).css("display"))throw new Error("Please use show on visible elements");var t=g.Event(this.constructor.Event.SHOW);if(this.isWithContent()&&this._isEnabled){g(this.element).trigger(t);var n=_.findShadowRoot(this.element),i=g.contains(null!==n?n:this.element.ownerDocument.documentElement,this.element);if(t.isDefaultPrevented()||!i)return;var o=this.getTipElement(),r=_.getUID(this.constructor.NAME);o.setAttribute("id",r),this.element.setAttribute("aria-describedby",r),this.setContent(),this.config.animation&&g(o).addClass(Ne);var s="function"==typeof this.config.placement?this.config.placement.call(this,o,this.element):this.config.placement,a=this._getAttachment(s);this.addAttachmentClass(a);var l=this._getContainer();g(o).data(this.constructor.DATA_KEY,this),g.contains(this.element.ownerDocument.documentElement,this.tip)||g(o).appendTo(l),g(this.element).trigger(this.constructor.Event.INSERTED),this._popper=new u(this.element,o,{placement:a,modifiers:{offset:{offset:this.config.offset},flip:{behavior:this.config.fallbackPlacement},arrow:{element:Pe},preventOverflow:{boundariesElement:this.config.boundary}},onCreate:function(t){t.originalPlacement!==t.placement&&e._handlePopperPlacementChange(t)},onUpdate:function(t){return e._handlePopperPlacementChange(t)}}),g(o).addClass(Oe),"ontouchstart"in document.documentElement&&g(document.body).children().on("mouseover",null,g.noop);var c=function(){e.config.animation&&e._fixTransition();var t=e._hoverState;e._hoverState=null,g(e.element).trigger(e.constructor.Event.SHOWN),t===we&&e._leave(null,e)};if(g(this.tip).hasClass(Ne)){var h=_.getTransitionDurationFromElement(this.tip);g(this.tip).one(_.TRANSITION_END,c).emulateTransitionEnd(h)}else c()}},t.hide=function(t){var e=this,n=this.getTipElement(),i=g.Event(this.constructor.Event.HIDE),o=function(){e._hoverState!==De&&n.parentNode&&n.parentNode.removeChild(n),e._cleanTipClass(),e.element.removeAttribute("aria-describedby"),g(e.element).trigger(e.constructor.Event.HIDDEN),null!==e._popper&&e._popper.destroy(),t&&t()};if(g(this.element).trigger(i),!i.isDefaultPrevented()){if(g(n).removeClass(Oe),"ontouchstart"in document.documentElement&&g(document.body).children().off("mouseover",null,g.noop),this._activeTrigger[He]=!1,this._activeTrigger[je]=!1,this._activeTrigger[Le]=!1,g(this.tip).hasClass(Ne)){var r=_.getTransitionDurationFromElement(n);g(n).one(_.TRANSITION_END,o).emulateTransitionEnd(r)}else o();this._hoverState=""}},t.update=function(){null!==this._popper&&this._popper.scheduleUpdate()},t.isWithContent=function(){return Boolean(this.getTitle())},t.addAttachmentClass=function(t){g(this.getTipElement()).addClass(Ce+"-"+t)},t.getTipElement=function(){return this.tip=this.tip||g(this.config.template)[0],this.tip},t.setContent=function(){var t=this.getTipElement();this.setElementContent(g(t.querySelectorAll(ke)),this.getTitle()),g(t).removeClass(Ne+" "+Oe)},t.setElementContent=function(t,e){var n=this.config.html;"object"==typeof e&&(e.nodeType||e.jquery)?n?g(e).parent().is(t)||t.empty().append(e):t.text(g(e).text()):t[n?"html":"text"](e)},t.getTitle=function(){var t=this.element.getAttribute("data-original-title");return t||(t="function"==typeof this.config.title?this.config.title.call(this.element):this.config.title),t},t._getContainer=function(){return!1===this.config.container?document.body:_.isElement(this.config.container)?g(this.config.container):g(document).find(this.config.container)},t._getAttachment=function(t){return be[t.toUpperCase()]},t._setListeners=function(){var i=this;this.config.trigger.split(" ").forEach(function(t){if("click"===t)g(i.element).on(i.constructor.Event.CLICK,i.config.selector,function(t){return i.toggle(t)});else if(t!==Re){var e=t===Le?i.constructor.Event.MOUSEENTER:i.constructor.Event.FOCUSIN,n=t===Le?i.constructor.Event.MOUSELEAVE:i.constructor.Event.FOCUSOUT;g(i.element).on(e,i.config.selector,function(t){return i._enter(t)}).on(n,i.config.selector,function(t){return i._leave(t)})}}),g(this.element).closest(".modal").on("hide.bs.modal",function(){i.element&&i.hide()}),this.config.selector?this.config=l({},this.config,{trigger:"manual",selector:""}):this._fixTitle()},t._fixTitle=function(){var t=typeof this.element.getAttribute("data-original-title");(this.element.getAttribute("title")||"string"!==t)&&(this.element.setAttribute("data-original-title",this.element.getAttribute("title")||""),this.element.setAttribute("title",""))},t._enter=function(t,e){var n=this.constructor.DATA_KEY;(e=e||g(t.currentTarget).data(n))||(e=new this.constructor(t.currentTarget,this._getDelegateConfig()),g(t.currentTarget).data(n,e)),t&&(e._activeTrigger["focusin"===t.type?je:Le]=!0),g(e.getTipElement()).hasClass(Oe)||e._hoverState===De?e._hoverState=De:(clearTimeout(e._timeout),e._hoverState=De,e.config.delay&&e.config.delay.show?e._timeout=setTimeout(function(){e._hoverState===De&&e.show()},e.config.delay.show):e.show())},t._leave=function(t,e){var n=this.constructor.DATA_KEY;(e=e||g(t.currentTarget).data(n))||(e=new this.constructor(t.currentTarget,this._getDelegateConfig()),g(t.currentTarget).data(n,e)),t&&(e._activeTrigger["focusout"===t.type?je:Le]=!1),e._isWithActiveTrigger()||(clearTimeout(e._timeout),e._hoverState=we,e.config.delay&&e.config.delay.hide?e._timeout=setTimeout(function(){e._hoverState===we&&e.hide()},e.config.delay.hide):e.hide())},t._isWithActiveTrigger=function(){for(var t in this._activeTrigger)if(this._activeTrigger[t])return!0;return!1},t._getConfig=function(t){return"number"==typeof(t=l({},this.constructor.Default,g(this.element).data(),"object"==typeof t&&t?t:{})).delay&&(t.delay={show:t.delay,hide:t.delay}),"number"==typeof t.title&&(t.title=t.title.toString()),"number"==typeof t.content&&(t.content=t.content.toString()),_.typeCheckConfig(pe,t,this.constructor.DefaultType),t},t._getDelegateConfig=function(){var t={};if(this.config)for(var e in this.config)this.constructor.Default[e]!==this.config[e]&&(t[e]=this.config[e]);return t},t._cleanTipClass=function(){var t=g(this.getTipElement()),e=t.attr("class").match(Te);null!==e&&e.length&&t.removeClass(e.join(""))},t._handlePopperPlacementChange=function(t){var e=t.instance;this.tip=e.popper,this._cleanTipClass(),this.addAttachmentClass(this._getAttachment(t.placement))},t._fixTransition=function(){var t=this.getTipElement(),e=this.config.animation;null===t.getAttribute("x-placement")&&(g(t).removeClass(Ne),this.config.animation=!1,this.hide(),this.show(),this.config.animation=e)},i._jQueryInterface=function(n){return this.each(function(){var t=g(this).data(ve),e="object"==typeof n&&n;if((t||!/dispose|hide/.test(n))&&(t||(t=new i(this,e),g(this).data(ve,t)),"string"==typeof n)){if("undefined"==typeof t[n])throw new TypeError('No method named "'+n+'"');t[n]()}})},s(i,null,[{key:"VERSION",get:function(){return"4.2.1"}},{key:"Default",get:function(){return Ie}},{key:"NAME",get:function(){return pe}},{key:"DATA_KEY",get:function(){return ve}},{key:"Event",get:function(){return Ae}},{key:"EVENT_KEY",get:function(){return Ee}},{key:"DefaultType",get:function(){return Se}}]),i}();g.fn[pe]=Ue._jQueryInterface,g.fn[pe].Constructor=Ue,g.fn[pe].noConflict=function(){return g.fn[pe]=ye,Ue._jQueryInterface};var We="popover",xe="bs.popover",Fe="."+xe,qe=g.fn[We],Me="bs-popover",Ke=new RegExp("(^|\\s)"+Me+"\\S+","g"),Qe=l({},Ue.Default,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'}),Be=l({},Ue.DefaultType,{content:"(string|element|function)"}),Ve="fade",Ye="show",Xe=".popover-header",ze=".popover-body",Ge={HIDE:"hide"+Fe,HIDDEN:"hidden"+Fe,SHOW:"show"+Fe,SHOWN:"shown"+Fe,INSERTED:"inserted"+Fe,CLICK:"click"+Fe,FOCUSIN:"focusin"+Fe,FOCUSOUT:"focusout"+Fe,MOUSEENTER:"mouseenter"+Fe,MOUSELEAVE:"mouseleave"+Fe},Je=function(t){var e,n;function i(){return t.apply(this,arguments)||this}n=t,(e=i).prototype=Object.create(n.prototype),(e.prototype.constructor=e).__proto__=n;var o=i.prototype;return o.isWithContent=function(){return this.getTitle()||this._getContent()},o.addAttachmentClass=function(t){g(this.getTipElement()).addClass(Me+"-"+t)},o.getTipElement=function(){return this.tip=this.tip||g(this.config.template)[0],this.tip},o.setContent=function(){var t=g(this.getTipElement());this.setElementContent(t.find(Xe),this.getTitle());var e=this._getContent();"function"==typeof e&&(e=e.call(this.element)),this.setElementContent(t.find(ze),e),t.removeClass(Ve+" "+Ye)},o._getContent=function(){return this.element.getAttribute("data-content")||this.config.content},o._cleanTipClass=function(){var t=g(this.getTipElement()),e=t.attr("class").match(Ke);null!==e&&0<e.length&&t.removeClass(e.join(""))},i._jQueryInterface=function(n){return this.each(function(){var t=g(this).data(xe),e="object"==typeof n?n:null;if((t||!/dispose|hide/.test(n))&&(t||(t=new i(this,e),g(this).data(xe,t)),"string"==typeof n)){if("undefined"==typeof t[n])throw new TypeError('No method named "'+n+'"');t[n]()}})},s(i,null,[{key:"VERSION",get:function(){return"4.2.1"}},{key:"Default",get:function(){return Qe}},{key:"NAME",get:function(){return We}},{key:"DATA_KEY",get:function(){return xe}},{key:"Event",get:function(){return Ge}},{key:"EVENT_KEY",get:function(){return Fe}},{key:"DefaultType",get:function(){return Be}}]),i}(Ue);g.fn[We]=Je._jQueryInterface,g.fn[We].Constructor=Je,g.fn[We].noConflict=function(){return g.fn[We]=qe,Je._jQueryInterface};var Ze="scrollspy",$e="bs.scrollspy",tn="."+$e,en=g.fn[Ze],nn={offset:10,method:"auto",target:""},on={offset:"number",method:"string",target:"(string|element)"},rn={ACTIVATE:"activate"+tn,SCROLL:"scroll"+tn,LOAD_DATA_API:"load"+tn+".data-api"},sn="dropdown-item",an="active",ln='[data-spy="scroll"]',cn=".nav, .list-group",hn=".nav-link",un=".nav-item",fn=".list-group-item",dn=".dropdown",gn=".dropdown-item",_n=".dropdown-toggle",mn="offset",pn="position",vn=function(){function n(t,e){var n=this;this._element=t,this._scrollElement="BODY"===t.tagName?window:t,this._config=this._getConfig(e),this._selector=this._config.target+" "+hn+","+this._config.target+" "+fn+","+this._config.target+" "+gn,this._offsets=[],this._targets=[],this._activeTarget=null,this._scrollHeight=0,g(this._scrollElement).on(rn.SCROLL,function(t){return n._process(t)}),this.refresh(),this._process()}var t=n.prototype;return t.refresh=function(){var e=this,t=this._scrollElement===this._scrollElement.window?mn:pn,o="auto"===this._config.method?t:this._config.method,r=o===pn?this._getScrollTop():0;this._offsets=[],this._targets=[],this._scrollHeight=this._getScrollHeight(),[].slice.call(document.querySelectorAll(this._selector)).map(function(t){var e,n=_.getSelectorFromElement(t);if(n&&(e=document.querySelector(n)),e){var i=e.getBoundingClientRect();if(i.width||i.height)return[g(e)[o]().top+r,n]}return null}).filter(function(t){return t}).sort(function(t,e){return t[0]-e[0]}).forEach(function(t){e._offsets.push(t[0]),e._targets.push(t[1])})},t.dispose=function(){g.removeData(this._element,$e),g(this._scrollElement).off(tn),this._element=null,this._scrollElement=null,this._config=null,this._selector=null,this._offsets=null,this._targets=null,this._activeTarget=null,this._scrollHeight=null},t._getConfig=function(t){if("string"!=typeof(t=l({},nn,"object"==typeof t&&t?t:{})).target){var e=g(t.target).attr("id");e||(e=_.getUID(Ze),g(t.target).attr("id",e)),t.target="#"+e}return _.typeCheckConfig(Ze,t,on),t},t._getScrollTop=function(){return this._scrollElement===window?this._scrollElement.pageYOffset:this._scrollElement.scrollTop},t._getScrollHeight=function(){return this._scrollElement.scrollHeight||Math.max(document.body.scrollHeight,document.documentElement.scrollHeight)},t._getOffsetHeight=function(){return this._scrollElement===window?window.innerHeight:this._scrollElement.getBoundingClientRect().height},t._process=function(){var t=this._getScrollTop()+this._config.offset,e=this._getScrollHeight(),n=this._config.offset+e-this._getOffsetHeight();if(this._scrollHeight!==e&&this.refresh(),n<=t){var i=this._targets[this._targets.length-1];this._activeTarget!==i&&this._activate(i)}else{if(this._activeTarget&&t<this._offsets[0]&&0<this._offsets[0])return this._activeTarget=null,void this._clear();for(var o=this._offsets.length;o--;){this._activeTarget!==this._targets[o]&&t>=this._offsets[o]&&("undefined"==typeof this._offsets[o+1]||t<this._offsets[o+1])&&this._activate(this._targets[o])}}},t._activate=function(e){this._activeTarget=e,this._clear();var t=this._selector.split(",").map(function(t){return t+'[data-target="'+e+'"],'+t+'[href="'+e+'"]'}),n=g([].slice.call(document.querySelectorAll(t.join(","))));n.hasClass(sn)?(n.closest(dn).find(_n).addClass(an),n.addClass(an)):(n.addClass(an),n.parents(cn).prev(hn+", "+fn).addClass(an),n.parents(cn).prev(un).children(hn).addClass(an)),g(this._scrollElement).trigger(rn.ACTIVATE,{relatedTarget:e})},t._clear=function(){[].slice.call(document.querySelectorAll(this._selector)).filter(function(t){return t.classList.contains(an)}).forEach(function(t){return t.classList.remove(an)})},n._jQueryInterface=function(e){return this.each(function(){var t=g(this).data($e);if(t||(t=new n(this,"object"==typeof e&&e),g(this).data($e,t)),"string"==typeof e){if("undefined"==typeof t[e])throw new TypeError('No method named "'+e+'"');t[e]()}})},s(n,null,[{key:"VERSION",get:function(){return"4.2.1"}},{key:"Default",get:function(){return nn}}]),n}();g(window).on(rn.LOAD_DATA_API,function(){for(var t=[].slice.call(document.querySelectorAll(ln)),e=t.length;e--;){var n=g(t[e]);vn._jQueryInterface.call(n,n.data())}}),g.fn[Ze]=vn._jQueryInterface,g.fn[Ze].Constructor=vn,g.fn[Ze].noConflict=function(){return g.fn[Ze]=en,vn._jQueryInterface};var En="bs.tab",yn="."+En,Cn=g.fn.tab,Tn={HIDE:"hide"+yn,HIDDEN:"hidden"+yn,SHOW:"show"+yn,SHOWN:"shown"+yn,CLICK_DATA_API:"click"+yn+".data-api"},Sn="dropdown-menu",bn="active",In="disabled",Dn="fade",wn="show",An=".dropdown",Nn=".nav, .list-group",On=".active",kn="> li > .active",Pn='[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]',Ln=".dropdown-toggle",jn="> .dropdown-menu .active",Hn=function(){function i(t){this._element=t}var t=i.prototype;return t.show=function(){var n=this;if(!(this._element.parentNode&&this._element.parentNode.nodeType===Node.ELEMENT_NODE&&g(this._element).hasClass(bn)||g(this._element).hasClass(In))){var t,i,e=g(this._element).closest(Nn)[0],o=_.getSelectorFromElement(this._element);if(e){var r="UL"===e.nodeName||"OL"===e.nodeName?kn:On;i=(i=g.makeArray(g(e).find(r)))[i.length-1]}var s=g.Event(Tn.HIDE,{relatedTarget:this._element}),a=g.Event(Tn.SHOW,{relatedTarget:i});if(i&&g(i).trigger(s),g(this._element).trigger(a),!a.isDefaultPrevented()&&!s.isDefaultPrevented()){o&&(t=document.querySelector(o)),this._activate(this._element,e);var l=function(){var t=g.Event(Tn.HIDDEN,{relatedTarget:n._element}),e=g.Event(Tn.SHOWN,{relatedTarget:i});g(i).trigger(t),g(n._element).trigger(e)};t?this._activate(t,t.parentNode,l):l()}}},t.dispose=function(){g.removeData(this._element,En),this._element=null},t._activate=function(t,e,n){var i=this,o=(!e||"UL"!==e.nodeName&&"OL"!==e.nodeName?g(e).children(On):g(e).find(kn))[0],r=n&&o&&g(o).hasClass(Dn),s=function(){return i._transitionComplete(t,o,n)};if(o&&r){var a=_.getTransitionDurationFromElement(o);g(o).removeClass(wn).one(_.TRANSITION_END,s).emulateTransitionEnd(a)}else s()},t._transitionComplete=function(t,e,n){if(e){g(e).removeClass(bn);var i=g(e.parentNode).find(jn)[0];i&&g(i).removeClass(bn),"tab"===e.getAttribute("role")&&e.setAttribute("aria-selected",!1)}if(g(t).addClass(bn),"tab"===t.getAttribute("role")&&t.setAttribute("aria-selected",!0),_.reflow(t),g(t).addClass(wn),t.parentNode&&g(t.parentNode).hasClass(Sn)){var o=g(t).closest(An)[0];if(o){var r=[].slice.call(o.querySelectorAll(Ln));g(r).addClass(bn)}t.setAttribute("aria-expanded",!0)}n&&n()},i._jQueryInterface=function(n){return this.each(function(){var t=g(this),e=t.data(En);if(e||(e=new i(this),t.data(En,e)),"string"==typeof n){if("undefined"==typeof e[n])throw new TypeError('No method named "'+n+'"');e[n]()}})},s(i,null,[{key:"VERSION",get:function(){return"4.2.1"}}]),i}();g(document).on(Tn.CLICK_DATA_API,Pn,function(t){t.preventDefault(),Hn._jQueryInterface.call(g(this),"show")}),g.fn.tab=Hn._jQueryInterface,g.fn.tab.Constructor=Hn,g.fn.tab.noConflict=function(){return g.fn.tab=Cn,Hn._jQueryInterface};var Rn="toast",Un="bs.toast",Wn="."+Un,xn=g.fn[Rn],Fn={CLICK_DISMISS:"click.dismiss"+Wn,HIDE:"hide"+Wn,HIDDEN:"hidden"+Wn,SHOW:"show"+Wn,SHOWN:"shown"+Wn},qn="fade",Mn="hide",Kn="show",Qn="showing",Bn={animation:"boolean",autohide:"boolean",delay:"number"},Vn={animation:!0,autohide:!0,delay:500},Yn='[data-dismiss="toast"]',Xn=function(){function i(t,e){this._element=t,this._config=this._getConfig(e),this._timeout=null,this._setListeners()}var t=i.prototype;return t.show=function(){var t=this;g(this._element).trigger(Fn.SHOW),this._config.animation&&this._element.classList.add(qn);var e=function(){t._element.classList.remove(Qn),t._element.classList.add(Kn),g(t._element).trigger(Fn.SHOWN),t._config.autohide&&t.hide()};if(this._element.classList.remove(Mn),this._element.classList.add(Qn),this._config.animation){var n=_.getTransitionDurationFromElement(this._element);g(this._element).one(_.TRANSITION_END,e).emulateTransitionEnd(n)}else e()},t.hide=function(t){var e=this;this._element.classList.contains(Kn)&&(g(this._element).trigger(Fn.HIDE),t?this._close():this._timeout=setTimeout(function(){e._close()},this._config.delay))},t.dispose=function(){clearTimeout(this._timeout),this._timeout=null,this._element.classList.contains(Kn)&&this._element.classList.remove(Kn),g(this._element).off(Fn.CLICK_DISMISS),g.removeData(this._element,Un),this._element=null,this._config=null},t._getConfig=function(t){return t=l({},Vn,g(this._element).data(),"object"==typeof t&&t?t:{}),_.typeCheckConfig(Rn,t,this.constructor.DefaultType),t},t._setListeners=function(){var t=this;g(this._element).on(Fn.CLICK_DISMISS,Yn,function(){return t.hide(!0)})},t._close=function(){var t=this,e=function(){t._element.classList.add(Mn),g(t._element).trigger(Fn.HIDDEN)};if(this._element.classList.remove(Kn),this._config.animation){var n=_.getTransitionDurationFromElement(this._element);g(this._element).one(_.TRANSITION_END,e).emulateTransitionEnd(n)}else e()},i._jQueryInterface=function(n){return this.each(function(){var t=g(this),e=t.data(Un);if(e||(e=new i(this,"object"==typeof n&&n),t.data(Un,e)),"string"==typeof n){if("undefined"==typeof e[n])throw new TypeError('No method named "'+n+'"');e[n](this)}})},s(i,null,[{key:"VERSION",get:function(){return"4.2.1"}},{key:"DefaultType",get:function(){return Bn}}]),i}();g.fn[Rn]=Xn._jQueryInterface,g.fn[Rn].Constructor=Xn,g.fn[Rn].noConflict=function(){return g.fn[Rn]=xn,Xn._jQueryInterface},function(){if("undefined"==typeof g)throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");var t=g.fn.jquery.split(" ")[0].split(".");if(t[0]<2&&t[1]<9||1===t[0]&&9===t[1]&&t[2]<1||4<=t[0])throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0")}(),t.Util=_,t.Alert=p,t.Button=P,t.Carousel=lt,t.Collapse=bt,t.Dropdown=Zt,t.Modal=me,t.Popover=Je,t.Scrollspy=vn,t.Tab=Hn,t.Toast=Xn,t.Tooltip=Ue,Object.defineProperty(t,"__esModule",{value:!0})});
//# sourceMappingURL=bootstrap.min.js.map
/*!
Waypoints - 4.0.0
Copyright © 2011-2015 Caleb Troughton
Licensed under the MIT license.
https://github.com/imakewebthings/waypoints/blob/master/licenses.txt
*/
!function(){"use strict";function t(o){if(!o)throw new Error("No options passed to Waypoint constructor");if(!o.element)throw new Error("No element option passed to Waypoint constructor");if(!o.handler)throw new Error("No handler option passed to Waypoint constructor");this.key="waypoint-"+e,this.options=t.Adapter.extend({},t.defaults,o),this.element=this.options.element,this.adapter=new t.Adapter(this.element),this.callback=o.handler,this.axis=this.options.horizontal?"horizontal":"vertical",this.enabled=this.options.enabled,this.triggerPoint=null,this.group=t.Group.findOrCreate({name:this.options.group,axis:this.axis}),this.context=t.Context.findOrCreateByElement(this.options.context),t.offsetAliases[this.options.offset]&&(this.options.offset=t.offsetAliases[this.options.offset]),this.group.add(this),this.context.add(this),i[this.key]=this,e+=1}var e=0,i={};t.prototype.queueTrigger=function(t){this.group.queueTrigger(this,t)},t.prototype.trigger=function(t){this.enabled&&this.callback&&this.callback.apply(this,t)},t.prototype.destroy=function(){this.context.remove(this),this.group.remove(this),delete i[this.key]},t.prototype.disable=function(){return this.enabled=!1,this},t.prototype.enable=function(){return this.context.refresh(),this.enabled=!0,this},t.prototype.next=function(){return this.group.next(this)},t.prototype.previous=function(){return this.group.previous(this)},t.invokeAll=function(t){var e=[];for(var o in i)e.push(i[o]);for(var n=0,r=e.length;r>n;n++)e[n][t]()},t.destroyAll=function(){t.invokeAll("destroy")},t.disableAll=function(){t.invokeAll("disable")},t.enableAll=function(){t.invokeAll("enable")},t.refreshAll=function(){t.Context.refreshAll()},t.viewportHeight=function(){return window.innerHeight||document.documentElement.clientHeight},t.viewportWidth=function(){return document.documentElement.clientWidth},t.adapters=[],t.defaults={context:window,continuous:!0,enabled:!0,group:"default",horizontal:!1,offset:0},t.offsetAliases={"bottom-in-view":function(){return this.context.innerHeight()-this.adapter.outerHeight()},"right-in-view":function(){return this.context.innerWidth()-this.adapter.outerWidth()}},window.Waypoint=t}(),function(){"use strict";function t(t){window.setTimeout(t,1e3/60)}function e(t){this.element=t,this.Adapter=n.Adapter,this.adapter=new this.Adapter(t),this.key="waypoint-context-"+i,this.didScroll=!1,this.didResize=!1,this.oldScroll={x:this.adapter.scrollLeft(),y:this.adapter.scrollTop()},this.waypoints={vertical:{},horizontal:{}},t.waypointContextKey=this.key,o[t.waypointContextKey]=this,i+=1,this.createThrottledScrollHandler(),this.createThrottledResizeHandler()}var i=0,o={},n=window.Waypoint,r=window.onload;e.prototype.add=function(t){var e=t.options.horizontal?"horizontal":"vertical";this.waypoints[e][t.key]=t,this.refresh()},e.prototype.checkEmpty=function(){var t=this.Adapter.isEmptyObject(this.waypoints.horizontal),e=this.Adapter.isEmptyObject(this.waypoints.vertical);t&&e&&(this.adapter.off(".waypoints"),delete o[this.key])},e.prototype.createThrottledResizeHandler=function(){function t(){e.handleResize(),e.didResize=!1}var e=this;this.adapter.on("resize.waypoints",function(){e.didResize||(e.didResize=!0,n.requestAnimationFrame(t))})},e.prototype.createThrottledScrollHandler=function(){function t(){e.handleScroll(),e.didScroll=!1}var e=this;this.adapter.on("scroll.waypoints",function(){(!e.didScroll||n.isTouch)&&(e.didScroll=!0,n.requestAnimationFrame(t))})},e.prototype.handleResize=function(){n.Context.refreshAll()},e.prototype.handleScroll=function(){var t={},e={horizontal:{newScroll:this.adapter.scrollLeft(),oldScroll:this.oldScroll.x,forward:"right",backward:"left"},vertical:{newScroll:this.adapter.scrollTop(),oldScroll:this.oldScroll.y,forward:"down",backward:"up"}};for(var i in e){var o=e[i],n=o.newScroll>o.oldScroll,r=n?o.forward:o.backward;for(var s in this.waypoints[i]){var a=this.waypoints[i][s],l=o.oldScroll<a.triggerPoint,h=o.newScroll>=a.triggerPoint,p=l&&h,u=!l&&!h;(p||u)&&(a.queueTrigger(r),t[a.group.id]=a.group)}}for(var c in t)t[c].flushTriggers();this.oldScroll={x:e.horizontal.newScroll,y:e.vertical.newScroll}},e.prototype.innerHeight=function(){return this.element==this.element.window?n.viewportHeight():this.adapter.innerHeight()},e.prototype.remove=function(t){delete this.waypoints[t.axis][t.key],this.checkEmpty()},e.prototype.innerWidth=function(){return this.element==this.element.window?n.viewportWidth():this.adapter.innerWidth()},e.prototype.destroy=function(){var t=[];for(var e in this.waypoints)for(var i in this.waypoints[e])t.push(this.waypoints[e][i]);for(var o=0,n=t.length;n>o;o++)t[o].destroy()},e.prototype.refresh=function(){var t,e=this.element==this.element.window,i=e?void 0:this.adapter.offset(),o={};this.handleScroll(),t={horizontal:{contextOffset:e?0:i.left,contextScroll:e?0:this.oldScroll.x,contextDimension:this.innerWidth(),oldScroll:this.oldScroll.x,forward:"right",backward:"left",offsetProp:"left"},vertical:{contextOffset:e?0:i.top,contextScroll:e?0:this.oldScroll.y,contextDimension:this.innerHeight(),oldScroll:this.oldScroll.y,forward:"down",backward:"up",offsetProp:"top"}};for(var r in t){var s=t[r];for(var a in this.waypoints[r]){var l,h,p,u,c,d=this.waypoints[r][a],f=d.options.offset,w=d.triggerPoint,y=0,g=null==w;d.element!==d.element.window&&(y=d.adapter.offset()[s.offsetProp]),"function"==typeof f?f=f.apply(d):"string"==typeof f&&(f=parseFloat(f),d.options.offset.indexOf("%")>-1&&(f=Math.ceil(s.contextDimension*f/100))),l=s.contextScroll-s.contextOffset,d.triggerPoint=y+l-f,h=w<s.oldScroll,p=d.triggerPoint>=s.oldScroll,u=h&&p,c=!h&&!p,!g&&u?(d.queueTrigger(s.backward),o[d.group.id]=d.group):!g&&c?(d.queueTrigger(s.forward),o[d.group.id]=d.group):g&&s.oldScroll>=d.triggerPoint&&(d.queueTrigger(s.forward),o[d.group.id]=d.group)}}return n.requestAnimationFrame(function(){for(var t in o)o[t].flushTriggers()}),this},e.findOrCreateByElement=function(t){return e.findByElement(t)||new e(t)},e.refreshAll=function(){for(var t in o)o[t].refresh()},e.findByElement=function(t){return o[t.waypointContextKey]},window.onload=function(){r&&r(),e.refreshAll()},n.requestAnimationFrame=function(e){var i=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||t;i.call(window,e)},n.Context=e}(),function(){"use strict";function t(t,e){return t.triggerPoint-e.triggerPoint}function e(t,e){return e.triggerPoint-t.triggerPoint}function i(t){this.name=t.name,this.axis=t.axis,this.id=this.name+"-"+this.axis,this.waypoints=[],this.clearTriggerQueues(),o[this.axis][this.name]=this}var o={vertical:{},horizontal:{}},n=window.Waypoint;i.prototype.add=function(t){this.waypoints.push(t)},i.prototype.clearTriggerQueues=function(){this.triggerQueues={up:[],down:[],left:[],right:[]}},i.prototype.flushTriggers=function(){for(var i in this.triggerQueues){var o=this.triggerQueues[i],n="up"===i||"left"===i;o.sort(n?e:t);for(var r=0,s=o.length;s>r;r+=1){var a=o[r];(a.options.continuous||r===o.length-1)&&a.trigger([i])}}this.clearTriggerQueues()},i.prototype.next=function(e){this.waypoints.sort(t);var i=n.Adapter.inArray(e,this.waypoints),o=i===this.waypoints.length-1;return o?null:this.waypoints[i+1]},i.prototype.previous=function(e){this.waypoints.sort(t);var i=n.Adapter.inArray(e,this.waypoints);return i?this.waypoints[i-1]:null},i.prototype.queueTrigger=function(t,e){this.triggerQueues[e].push(t)},i.prototype.remove=function(t){var e=n.Adapter.inArray(t,this.waypoints);e>-1&&this.waypoints.splice(e,1)},i.prototype.first=function(){return this.waypoints[0]},i.prototype.last=function(){return this.waypoints[this.waypoints.length-1]},i.findOrCreate=function(t){return o[t.axis][t.name]||new i(t)},n.Group=i}(),function(){"use strict";function t(t){this.$element=e(t)}var e=window.jQuery,i=window.Waypoint;e.each(["innerHeight","innerWidth","off","offset","on","outerHeight","outerWidth","scrollLeft","scrollTop"],function(e,i){t.prototype[i]=function(){var t=Array.prototype.slice.call(arguments);return this.$element[i].apply(this.$element,t)}}),e.each(["extend","inArray","isEmptyObject"],function(i,o){t[o]=e[o]}),i.adapters.push({name:"jquery",Adapter:t}),i.Adapter=t}(),function(){"use strict";function t(t){return function(){var i=[],o=arguments[0];return t.isFunction(arguments[0])&&(o=t.extend({},arguments[1]),o.handler=arguments[0]),this.each(function(){var n=t.extend({},o,{element:this});"string"==typeof n.context&&(n.context=t(this).closest(n.context)[0]),i.push(new e(n))}),i}}var e=window.Waypoint;window.jQuery&&(window.jQuery.fn.waypoint=t(window.jQuery)),window.Zepto&&(window.Zepto.fn.waypoint=t(window.Zepto))}();
/*! WOW - v1.1.2 - 2015-04-07
* Copyright (c) 2015 Matthieu Aussaguel; Licensed MIT */(function(){var a,b,c,d,e,f=function(a,b){return function(){return a.apply(b,arguments)}},g=[].indexOf||function(a){for(var b=0,c=this.length;c>b;b++)if(b in this&&this[b]===a)return b;return-1};b=function(){function a(){}return a.prototype.extend=function(a,b){var c,d;for(c in b)d=b[c],null==a[c]&&(a[c]=d);return a},a.prototype.isMobile=function(a){return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(a)},a.prototype.createEvent=function(a,b,c,d){var e;return null==b&&(b=!1),null==c&&(c=!1),null==d&&(d=null),null!=document.createEvent?(e=document.createEvent("CustomEvent"),e.initCustomEvent(a,b,c,d)):null!=document.createEventObject?(e=document.createEventObject(),e.eventType=a):e.eventName=a,e},a.prototype.emitEvent=function(a,b){return null!=a.dispatchEvent?a.dispatchEvent(b):b in(null!=a)?a[b]():"on"+b in(null!=a)?a["on"+b]():void 0},a.prototype.addEvent=function(a,b,c){return null!=a.addEventListener?a.addEventListener(b,c,!1):null!=a.attachEvent?a.attachEvent("on"+b,c):a[b]=c},a.prototype.removeEvent=function(a,b,c){return null!=a.removeEventListener?a.removeEventListener(b,c,!1):null!=a.detachEvent?a.detachEvent("on"+b,c):delete a[b]},a.prototype.innerHeight=function(){return"innerHeight"in window?window.innerHeight:document.documentElement.clientHeight},a}(),c=this.WeakMap||this.MozWeakMap||(c=function(){function a(){this.keys=[],this.values=[]}return a.prototype.get=function(a){var b,c,d,e,f;for(f=this.keys,b=d=0,e=f.length;e>d;b=++d)if(c=f[b],c===a)return this.values[b]},a.prototype.set=function(a,b){var c,d,e,f,g;for(g=this.keys,c=e=0,f=g.length;f>e;c=++e)if(d=g[c],d===a)return void(this.values[c]=b);return this.keys.push(a),this.values.push(b)},a}()),a=this.MutationObserver||this.WebkitMutationObserver||this.MozMutationObserver||(a=function(){function a(){"undefined"!=typeof console&&null!==console&&console.warn("MutationObserver is not supported by your browser."),"undefined"!=typeof console&&null!==console&&console.warn("WOW.js cannot detect dom mutations, please call .sync() after loading new content.")}return a.notSupported=!0,a.prototype.observe=function(){},a}()),d=this.getComputedStyle||function(a){return this.getPropertyValue=function(b){var c;return"float"===b&&(b="styleFloat"),e.test(b)&&b.replace(e,function(a,b){return b.toUpperCase()}),(null!=(c=a.currentStyle)?c[b]:void 0)||null},this},e=/(\-([a-z]){1})/g,this.WOW=function(){function e(a){null==a&&(a={}),this.scrollCallback=f(this.scrollCallback,this),this.scrollHandler=f(this.scrollHandler,this),this.resetAnimation=f(this.resetAnimation,this),this.start=f(this.start,this),this.scrolled=!0,this.config=this.util().extend(a,this.defaults),this.animationNameCache=new c,this.wowEvent=this.util().createEvent(this.config.boxClass)}return e.prototype.defaults={boxClass:"wow",animateClass:"animated",offset:0,mobile:!0,live:!0,callback:null},e.prototype.init=function(){var a;return this.element=window.document.documentElement,"interactive"===(a=document.readyState)||"complete"===a?this.start():this.util().addEvent(document,"DOMContentLoaded",this.start),this.finished=[]},e.prototype.start=function(){var b,c,d,e;if(this.stopped=!1,this.boxes=function(){var a,c,d,e;for(d=this.element.querySelectorAll("."+this.config.boxClass),e=[],a=0,c=d.length;c>a;a++)b=d[a],e.push(b);return e}.call(this),this.all=function(){var a,c,d,e;for(d=this.boxes,e=[],a=0,c=d.length;c>a;a++)b=d[a],e.push(b);return e}.call(this),this.boxes.length)if(this.disabled())this.resetStyle();else for(e=this.boxes,c=0,d=e.length;d>c;c++)b=e[c],this.applyStyle(b,!0);return this.disabled()||(this.util().addEvent(window,"scroll",this.scrollHandler),this.util().addEvent(window,"resize",this.scrollHandler),this.interval=setInterval(this.scrollCallback,50)),this.config.live?new a(function(a){return function(b){var c,d,e,f,g;for(g=[],c=0,d=b.length;d>c;c++)f=b[c],g.push(function(){var a,b,c,d;for(c=f.addedNodes||[],d=[],a=0,b=c.length;b>a;a++)e=c[a],d.push(this.doSync(e));return d}.call(a));return g}}(this)).observe(document.body,{childList:!0,subtree:!0}):void 0},e.prototype.stop=function(){return this.stopped=!0,this.util().removeEvent(window,"scroll",this.scrollHandler),this.util().removeEvent(window,"resize",this.scrollHandler),null!=this.interval?clearInterval(this.interval):void 0},e.prototype.sync=function(){return a.notSupported?this.doSync(this.element):void 0},e.prototype.doSync=function(a){var b,c,d,e,f;if(null==a&&(a=this.element),1===a.nodeType){for(a=a.parentNode||a,e=a.querySelectorAll("."+this.config.boxClass),f=[],c=0,d=e.length;d>c;c++)b=e[c],g.call(this.all,b)<0?(this.boxes.push(b),this.all.push(b),this.stopped||this.disabled()?this.resetStyle():this.applyStyle(b,!0),f.push(this.scrolled=!0)):f.push(void 0);return f}},e.prototype.show=function(a){return this.applyStyle(a),a.className=a.className+" "+this.config.animateClass,null!=this.config.callback&&this.config.callback(a),this.util().emitEvent(a,this.wowEvent),this.util().addEvent(a,"animationend",this.resetAnimation),this.util().addEvent(a,"oanimationend",this.resetAnimation),this.util().addEvent(a,"webkitAnimationEnd",this.resetAnimation),this.util().addEvent(a,"MSAnimationEnd",this.resetAnimation),a},e.prototype.applyStyle=function(a,b){var c,d,e;return d=a.getAttribute("data-wow-duration"),c=a.getAttribute("data-wow-delay"),e=a.getAttribute("data-wow-iteration"),this.animate(function(f){return function(){return f.customStyle(a,b,d,c,e)}}(this))},e.prototype.animate=function(){return"requestAnimationFrame"in window?function(a){return window.requestAnimationFrame(a)}:function(a){return a()}}(),e.prototype.resetStyle=function(){var a,b,c,d,e;for(d=this.boxes,e=[],b=0,c=d.length;c>b;b++)a=d[b],e.push(a.style.visibility="visible");return e},e.prototype.resetAnimation=function(a){var b;return a.type.toLowerCase().indexOf("animationend")>=0?(b=a.target||a.srcElement,b.className=b.className.replace(this.config.animateClass,"").trim()):void 0},e.prototype.customStyle=function(a,b,c,d,e){return b&&this.cacheAnimationName(a),a.style.visibility=b?"hidden":"visible",c&&this.vendorSet(a.style,{animationDuration:c}),d&&this.vendorSet(a.style,{animationDelay:d}),e&&this.vendorSet(a.style,{animationIterationCount:e}),this.vendorSet(a.style,{animationName:b?"none":this.cachedAnimationName(a)}),a},e.prototype.vendors=["moz","webkit"],e.prototype.vendorSet=function(a,b){var c,d,e,f;d=[];for(c in b)e=b[c],a[""+c]=e,d.push(function(){var b,d,g,h;for(g=this.vendors,h=[],b=0,d=g.length;d>b;b++)f=g[b],h.push(a[""+f+c.charAt(0).toUpperCase()+c.substr(1)]=e);return h}.call(this));return d},e.prototype.vendorCSS=function(a,b){var c,e,f,g,h,i;for(h=d(a),g=h.getPropertyCSSValue(b),f=this.vendors,c=0,e=f.length;e>c;c++)i=f[c],g=g||h.getPropertyCSSValue("-"+i+"-"+b);return g},e.prototype.animationName=function(a){var b;try{b=this.vendorCSS(a,"animation-name").cssText}catch(c){b=d(a).getPropertyValue("animation-name")}return"none"===b?"":b},e.prototype.cacheAnimationName=function(a){return this.animationNameCache.set(a,this.animationName(a))},e.prototype.cachedAnimationName=function(a){return this.animationNameCache.get(a)},e.prototype.scrollHandler=function(){return this.scrolled=!0},e.prototype.scrollCallback=function(){var a;return!this.scrolled||(this.scrolled=!1,this.boxes=function(){var b,c,d,e;for(d=this.boxes,e=[],b=0,c=d.length;c>b;b++)a=d[b],a&&(this.isVisible(a)?this.show(a):e.push(a));return e}.call(this),this.boxes.length||this.config.live)?void 0:this.stop()},e.prototype.offsetTop=function(a){for(var b;void 0===a.offsetTop;)a=a.parentNode;for(b=a.offsetTop;a=a.offsetParent;)b+=a.offsetTop;return b},e.prototype.isVisible=function(a){var b,c,d,e,f;return c=a.getAttribute("data-wow-offset")||this.config.offset,f=window.pageYOffset,e=f+Math.min(this.element.clientHeight,this.util().innerHeight())-c,d=this.offsetTop(a),b=d+a.clientHeight,e>=d&&b>=f},e.prototype.util=function(){return null!=this._util?this._util:this._util=new b},e.prototype.disabled=function(){return!this.config.mobile&&this.util().isMobile(navigator.userAgent)},e}()}).call(this);
/* UItoTop jQuery Plugin 1.2 | Matt Varone | http://www.mattvarone.com/web-design/uitotop-jquery-plugin */
(function($){$.fn.UItoTop=function(options){var defaults={text:'To Top',min:200,inDelay:600,outDelay:400,containerID:'toTop',containerHoverID:'toTopHover',scrollSpeed:1200,easingType:'linear'},settings=$.extend(defaults,options),containerIDhash='#'+settings.containerID,containerHoverIDHash='#'+settings.containerHoverID;$('body').append('<a href="#" id="'+settings.containerID+'">'+settings.text+'</a>');$(containerIDhash).hide().on('click.UItoTop',function(){$('html, body').animate({scrollTop:0},settings.scrollSpeed,settings.easingType);$('#'+settings.containerHoverID,this).stop().animate({'opacity':0},settings.inDelay,settings.easingType);return false;}).prepend('<span id="'+settings.containerHoverID+'"></span>').hover(function(){$(containerHoverIDHash,this).stop().animate({'opacity':1},600,'linear');},function(){$(containerHoverIDHash,this).stop().animate({'opacity':0},700,'linear');});$(window).scroll(function(){var sd=$(window).scrollTop();if(typeof document.body.style.maxHeight==="undefined"){$(containerIDhash).css({'position':'absolute','top':sd+$(window).height()-50});}
if(sd>settings.min)
$(containerIDhash).fadeIn(settings.inDelay);else
$(containerIDhash).fadeOut(settings.Outdelay);});};})(jQuery);
/*! lazysizes - v4.0.2 */
!function(a,b){var c=function(){b(a.lazySizes),a.removeEventListener("lazyunveilread",c,!0)};b=b.bind(null,a,a.document),"object"==typeof module&&module.exports?b(require("lazysizes")):a.lazySizes?c():a.addEventListener("lazyunveilread",c,!0)}(window,function(a,b,c){"use strict";function d(a,c){if(!g[a]){var d=b.createElement(c?"link":"script"),e=b.getElementsByTagName("script")[0];c?(d.rel="stylesheet",d.href=a):d.src=a,g[a]=!0,g[d.src||d.href]=!0,e.parentNode.insertBefore(d,e)}}var e,f,g={};b.addEventListener&&(f=/\(|\)|\s|'/,e=function(a,c){var d=b.createElement("img");d.onload=function(){d.onload=null,d.onerror=null,d=null,c()},d.onerror=d.onload,d.src=a,d&&d.complete&&d.onload&&d.onload()},addEventListener("lazybeforeunveil",function(a){if(a.detail.instance==c){var b,g,h,i;a.defaultPrevented||("none"==a.target.preload&&(a.target.preload="auto"),b=a.target.getAttribute("data-link"),b&&d(b,!0),b=a.target.getAttribute("data-script"),b&&d(b),b=a.target.getAttribute("data-require"),b&&(c.cfg.requireJs?c.cfg.requireJs([b]):d(b)),h=a.target.getAttribute("data-bg"),h&&(a.detail.firesLoad=!0,g=function(){a.target.style.backgroundImage="url("+(f.test(h)?JSON.stringify(h):h)+")",a.detail.firesLoad=!1,c.fire(a.target,"_lazyloaded",{},!0,!0)},e(h,g)),i=a.target.getAttribute("data-poster"),i&&(a.detail.firesLoad=!0,g=function(){a.target.poster=i,a.detail.firesLoad=!1,c.fire(a.target,"_lazyloaded",{},!0,!0)},e(i,g)))}},!1))});
/*! lazysizes - v4.0.2 */
!function(a,b){var c=b(a,a.document);a.lazySizes=c,"object"==typeof module&&module.exports&&(module.exports=c)}(window,function(a,b){"use strict";if(b.getElementsByClassName){var c,d,e=b.documentElement,f=a.Date,g=a.HTMLPictureElement,h="addEventListener",i="getAttribute",j=a[h],k=a.setTimeout,l=a.requestAnimationFrame||k,m=a.requestIdleCallback,n=/^picture$/i,o=["load","error","lazyincluded","_lazyloaded"],p={},q=Array.prototype.forEach,r=function(a,b){return p[b]||(p[b]=new RegExp("(\\s|^)"+b+"(\\s|$)")),p[b].test(a[i]("class")||"")&&p[b]},s=function(a,b){r(a,b)||a.setAttribute("class",(a[i]("class")||"").trim()+" "+b)},t=function(a,b){var c;(c=r(a,b))&&a.setAttribute("class",(a[i]("class")||"").replace(c," "))},u=function(a,b,c){var d=c?h:"removeEventListener";c&&u(a,b),o.forEach(function(c){a[d](c,b)})},v=function(a,d,e,f,g){var h=b.createEvent("CustomEvent");return e||(e={}),e.instance=c,h.initCustomEvent(d,!f,!g,e),a.dispatchEvent(h),h},w=function(b,c){var e;!g&&(e=a.picturefill||d.pf)?e({reevaluate:!0,elements:[b]}):c&&c.src&&(b.src=c.src)},x=function(a,b){return(getComputedStyle(a,null)||{})[b]},y=function(a,b,c){for(c=c||a.offsetWidth;c<d.minSize&&b&&!a._lazysizesWidth;)c=b.offsetWidth,b=b.parentNode;return c},z=function(){var a,c,d=[],e=[],f=d,g=function(){var b=f;for(f=d.length?e:d,a=!0,c=!1;b.length;)b.shift()();a=!1},h=function(d,e){a&&!e?d.apply(this,arguments):(f.push(d),c||(c=!0,(b.hidden?k:l)(g)))};return h._lsFlush=g,h}(),A=function(a,b){return b?function(){z(a)}:function(){var b=this,c=arguments;z(function(){a.apply(b,c)})}},B=function(a){var b,c=0,e=d.throttleDelay,g=d.ricTimeout,h=function(){b=!1,c=f.now(),a()},i=m&&g>49?function(){m(h,{timeout:g}),g!==d.ricTimeout&&(g=d.ricTimeout)}:A(function(){k(h)},!0);return function(a){var d;(a=a===!0)&&(g=33),b||(b=!0,d=e-(f.now()-c),0>d&&(d=0),a||9>d?i():k(i,d))}},C=function(a){var b,c,d=99,e=function(){b=null,a()},g=function(){var a=f.now()-c;d>a?k(g,d-a):(m||e)(e)};return function(){c=f.now(),b||(b=k(g,d))}};!function(){var b,c={lazyClass:"lazyload",loadedClass:"lazyloaded",loadingClass:"lazyloading",preloadClass:"lazypreload",errorClass:"lazyerror",autosizesClass:"lazyautosizes",srcAttr:"data-src",srcsetAttr:"data-srcset",sizesAttr:"data-sizes",minSize:40,customMedia:{},init:!0,expFactor:1.5,hFac:.8,loadMode:2,loadHidden:!0,ricTimeout:0,throttleDelay:125};d=a.lazySizesConfig||a.lazysizesConfig||{};for(b in c)b in d||(d[b]=c[b]);a.lazySizesConfig=d,k(function(){d.init&&F()})}();var D=function(){var g,l,m,o,p,y,D,F,G,H,I,J,K,L,M=/^img$/i,N=/^iframe$/i,O="onscroll"in a&&!/glebot/.test(navigator.userAgent),P=0,Q=0,R=0,S=-1,T=function(a){R--,a&&a.target&&u(a.target,T),(!a||0>R||!a.target)&&(R=0)},U=function(a,c){var d,f=a,g="hidden"==x(b.body,"visibility")||"hidden"!=x(a,"visibility");for(F-=c,I+=c,G-=c,H+=c;g&&(f=f.offsetParent)&&f!=b.body&&f!=e;)g=(x(f,"opacity")||1)>0,g&&"visible"!=x(f,"overflow")&&(d=f.getBoundingClientRect(),g=H>d.left&&G<d.right&&I>d.top-1&&F<d.bottom+1);return g},V=function(){var a,f,h,j,k,m,n,p,q,r=c.elements;if((o=d.loadMode)&&8>R&&(a=r.length)){f=0,S++,null==K&&("expand"in d||(d.expand=e.clientHeight>500&&e.clientWidth>500?500:370),J=d.expand,K=J*d.expFactor),K>Q&&1>R&&S>2&&o>2&&!b.hidden?(Q=K,S=0):Q=o>1&&S>1&&6>R?J:P;for(;a>f;f++)if(r[f]&&!r[f]._lazyRace)if(O)if((p=r[f][i]("data-expand"))&&(m=1*p)||(m=Q),q!==m&&(y=innerWidth+m*L,D=innerHeight+m,n=-1*m,q=m),h=r[f].getBoundingClientRect(),(I=h.bottom)>=n&&(F=h.top)<=D&&(H=h.right)>=n*L&&(G=h.left)<=y&&(I||H||G||F)&&(d.loadHidden||"hidden"!=x(r[f],"visibility"))&&(l&&3>R&&!p&&(3>o||4>S)||U(r[f],m))){if(ba(r[f]),k=!0,R>9)break}else!k&&l&&!j&&4>R&&4>S&&o>2&&(g[0]||d.preloadAfterLoad)&&(g[0]||!p&&(I||H||G||F||"auto"!=r[f][i](d.sizesAttr)))&&(j=g[0]||r[f]);else ba(r[f]);j&&!k&&ba(j)}},W=B(V),X=function(a){s(a.target,d.loadedClass),t(a.target,d.loadingClass),u(a.target,Z),v(a.target,"lazyloaded")},Y=A(X),Z=function(a){Y({target:a.target})},$=function(a,b){try{a.contentWindow.location.replace(b)}catch(c){a.src=b}},_=function(a){var b,c=a[i](d.srcsetAttr);(b=d.customMedia[a[i]("data-media")||a[i]("media")])&&a.setAttribute("media",b),c&&a.setAttribute("srcset",c)},aa=A(function(a,b,c,e,f){var g,h,j,l,o,p;(o=v(a,"lazybeforeunveil",b)).defaultPrevented||(e&&(c?s(a,d.autosizesClass):a.setAttribute("sizes",e)),h=a[i](d.srcsetAttr),g=a[i](d.srcAttr),f&&(j=a.parentNode,l=j&&n.test(j.nodeName||"")),p=b.firesLoad||"src"in a&&(h||g||l),o={target:a},p&&(u(a,T,!0),clearTimeout(m),m=k(T,2500),s(a,d.loadingClass),u(a,Z,!0)),l&&q.call(j.getElementsByTagName("source"),_),h?a.setAttribute("srcset",h):g&&!l&&(N.test(a.nodeName)?$(a,g):a.src=g),f&&(h||l)&&w(a,{src:g})),a._lazyRace&&delete a._lazyRace,t(a,d.lazyClass),z(function(){(!p||a.complete&&a.naturalWidth>1)&&(p?T(o):R--,X(o))},!0)}),ba=function(a){var b,c=M.test(a.nodeName),e=c&&(a[i](d.sizesAttr)||a[i]("sizes")),f="auto"==e;(!f&&l||!c||!a[i]("src")&&!a.srcset||a.complete||r(a,d.errorClass)||!r(a,d.lazyClass))&&(b=v(a,"lazyunveilread").detail,f&&E.updateElem(a,!0,a.offsetWidth),a._lazyRace=!0,R++,aa(a,b,f,e,c))},ca=function(){if(!l){if(f.now()-p<999)return void k(ca,999);var a=C(function(){d.loadMode=3,W()});l=!0,d.loadMode=3,W(),j("scroll",function(){3==d.loadMode&&(d.loadMode=2),a()},!0)}};return{_:function(){p=f.now(),c.elements=b.getElementsByClassName(d.lazyClass),g=b.getElementsByClassName(d.lazyClass+" "+d.preloadClass),L=d.hFac,j("scroll",W,!0),j("resize",W,!0),a.MutationObserver?new MutationObserver(W).observe(e,{childList:!0,subtree:!0,attributes:!0}):(e[h]("DOMNodeInserted",W,!0),e[h]("DOMAttrModified",W,!0),setInterval(W,999)),j("hashchange",W,!0),["focus","mouseover","click","load","transitionend","animationend","webkitAnimationEnd"].forEach(function(a){b[h](a,W,!0)}),/d$|^c/.test(b.readyState)?ca():(j("load",ca),b[h]("DOMContentLoaded",W),k(ca,2e4)),c.elements.length?(V(),z._lsFlush()):W()},checkElems:W,unveil:ba}}(),E=function(){var a,c=A(function(a,b,c,d){var e,f,g;if(a._lazysizesWidth=d,d+="px",a.setAttribute("sizes",d),n.test(b.nodeName||""))for(e=b.getElementsByTagName("source"),f=0,g=e.length;g>f;f++)e[f].setAttribute("sizes",d);c.detail.dataAttr||w(a,c.detail)}),e=function(a,b,d){var e,f=a.parentNode;f&&(d=y(a,f,d),e=v(a,"lazybeforesizes",{width:d,dataAttr:!!b}),e.defaultPrevented||(d=e.detail.width,d&&d!==a._lazysizesWidth&&c(a,f,e,d)))},f=function(){var b,c=a.length;if(c)for(b=0;c>b;b++)e(a[b])},g=C(f);return{_:function(){a=b.getElementsByClassName(d.autosizesClass),j("resize",g)},checkElems:g,updateElem:e}}(),F=function(){F.i||(F.i=!0,E._(),D._())};return c={cfg:d,autoSizer:E,loader:D,init:F,uP:w,aC:s,rC:t,hC:r,fire:v,gW:y,rAF:z}}});


document.addEventListener('lazybeforeunveil', (function(){
  var parent = document.createElement('div');

  return function(e){
    var set, image, load;

    if(e.defaultPrevented || !(set = e.target.getAttribute('data-bgset'))){return;}
    image = document.createElement('img');
    image.setAttribute('sizes', e.target.getAttribute('data-sizes') || (e.target.offsetWidth +'px'));

    load = function(){
      var bg = image.currentSrc || image.src;
      if(bg){
        e.target.style.backgroundImage = 'url('+ bg +')';
      }
      if(lazySizes.cfg.clearAttr){
        e.target.removeAttribute('data-bgset');
      }
      image.removeEventListener('load', load);
      parent.removeChild(image);
      image = null;
    };

    image.addEventListener('load', load);

    image.setAttribute('srcset', set);
    parent.appendChild(image);
    if(!window.HTMLPictureElement){
      if(window.respimage){
        respimage({elements: [image]});
      } else if(window.picturefill) {
        picturefill({elements: [image]});
      }
    }

    if(image.complete && (image.src || image.currentSrc)){
      load();
    }
  };
})());
/* jQuery Form Styler v2.0.2 | (c) Dimox | https://github.com/Dimox/jQueryFormStyler */
!function(e){"function"==typeof define&&define.amd?define(["jquery"],e):"object"==typeof exports?module.exports=e($||require("jquery")):e(jQuery)}(function(e){"use strict";function t(t,s){this.element=t,this.options=e.extend({},l,s);var i=this.options.locale;void 0!==this.options.locales[i]&&e.extend(this.options,this.options.locales[i]),this.init()}function s(t){if(!e(t.target).parents().hasClass("jq-selectbox")&&"OPTION"!=t.target.nodeName&&e("div.jq-selectbox.opened").length){var s=e("div.jq-selectbox.opened"),l=e("div.jq-selectbox__search input",s),o=e("div.jq-selectbox__dropdown",s);s.find("select").data("_"+i).options.onSelectClosed.call(s),l.length&&l.val("").keyup(),o.hide().find("li.sel").addClass("selected"),s.removeClass("focused opened dropup dropdown")}}var i="styler",l={idSuffix:"-styler",filePlaceholder:"Файл не выбран",fileBrowse:"Обзор...",fileNumber:"Выбрано файлов: %s",selectPlaceholder:"Выберите...",selectSearch:!1,selectSearchLimit:10,selectSearchNotFound:"Совпадений не найдено",selectSearchPlaceholder:"Поиск...",selectVisibleOptions:0,selectSmartPositioning:!0,locale:"ru",locales:{en:{filePlaceholder:"No file selected",fileBrowse:"Browse...",fileNumber:"Selected files: %s",selectPlaceholder:"Select...",selectSearchNotFound:"No matches found",selectSearchPlaceholder:"Search..."}},onSelectOpened:function(){},onSelectClosed:function(){},onFormStyled:function(){}};t.prototype={init:function(){function t(){void 0!==i.attr("id")&&""!==i.attr("id")&&(this.id=i.attr("id")+l.idSuffix),this.title=i.attr("title"),this.classes=i.attr("class"),this.data=i.data()}var i=e(this.element),l=this.options,o=!(!navigator.userAgent.match(/(iPad|iPhone|iPod)/i)||navigator.userAgent.match(/(Windows\sPhone)/i)),a=!(!navigator.userAgent.match(/Android/i)||navigator.userAgent.match(/(Windows\sPhone)/i));if(i.is(":checkbox")){var d=function(){var s=new t,l=e('<div class="jq-checkbox"><div class="jq-checkbox__div"></div></div>').attr({id:s.id,title:s.title}).addClass(s.classes).data(s.data);i.after(l).prependTo(l),i.is(":checked")&&l.addClass("checked"),i.is(":disabled")&&l.addClass("disabled"),l.click(function(e){e.preventDefault(),i.triggerHandler("click"),l.is(".disabled")||(i.is(":checked")?(i.prop("checked",!1),l.removeClass("checked")):(i.prop("checked",!0),l.addClass("checked")),i.focus().change())}),i.closest("label").add('label[for="'+i.attr("id")+'"]').on("click.styler",function(t){e(t.target).is("a")||e(t.target).closest(l).length||(l.triggerHandler("click"),t.preventDefault())}),i.on("change.styler",function(){i.is(":checked")?l.addClass("checked"):l.removeClass("checked")}).on("keydown.styler",function(e){32==e.which&&l.click()}).on("focus.styler",function(){l.is(".disabled")||l.addClass("focused")}).on("blur.styler",function(){l.removeClass("focused")})};d(),i.on("refresh",function(){i.closest("label").add('label[for="'+i.attr("id")+'"]').off(".styler"),i.off(".styler").parent().before(i).remove(),d()})}else if(i.is(":radio")){var r=function(){var s=new t,l=e('<div class="jq-radio"><div class="jq-radio__div"></div></div>').attr({id:s.id,title:s.title}).addClass(s.classes).data(s.data);i.after(l).prependTo(l),i.is(":checked")&&l.addClass("checked"),i.is(":disabled")&&l.addClass("disabled"),e.fn.commonParents=function(){var t=this;return t.first().parents().filter(function(){return e(this).find(t).length===t.length})},e.fn.commonParent=function(){return e(this).commonParents().first()},l.click(function(t){if(t.preventDefault(),i.triggerHandler("click"),!l.is(".disabled")){var s=e('input[name="'+i.attr("name")+'"]');s.commonParent().find(s).prop("checked",!1).parent().removeClass("checked"),i.prop("checked",!0).parent().addClass("checked"),i.focus().change()}}),i.closest("label").add('label[for="'+i.attr("id")+'"]').on("click.styler",function(t){e(t.target).is("a")||e(t.target).closest(l).length||(l.triggerHandler("click"),t.preventDefault())}),i.on("change.styler",function(){i.parent().addClass("checked")}).on("focus.styler",function(){l.is(".disabled")||l.addClass("focused")}).on("blur.styler",function(){l.removeClass("focused")})};r(),i.on("refresh",function(){i.closest("label").add('label[for="'+i.attr("id")+'"]').off(".styler"),i.off(".styler").parent().before(i).remove(),r()})}else if(i.is(":file")){var c=function(){var s=new t,o=i.data("placeholder");void 0===o&&(o=l.filePlaceholder);var a=i.data("browse");void 0!==a&&""!==a||(a=l.fileBrowse);var d=e('<div class="jq-file"><div class="jq-file__name">'+o+'</div><div class="jq-file__browse">'+a+"</div></div>").attr({id:s.id,title:s.title}).addClass(s.classes).data(s.data);i.after(d).appendTo(d),i.is(":disabled")&&d.addClass("disabled");var r=i.val(),c=e("div.jq-file__name",d);r&&c.text(r.replace(/.+[\\\/]/,"")),i.on("change.styler",function(){var e=i.val();if(i.is("[multiple]")){e="";var t=i[0].files.length;if(t>0){var s=i.data("number");void 0===s&&(s=l.fileNumber),s=s.replace("%s",t),e=s}}c.text(e.replace(/.+[\\\/]/,"")),""===e?(c.text(o),d.removeClass("changed")):d.addClass("changed")}).on("focus.styler",function(){d.addClass("focused")}).on("blur.styler",function(){d.removeClass("focused")}).on("click.styler",function(){d.removeClass("focused")})};c(),i.on("refresh",function(){i.off(".styler").parent().before(i).remove(),c()})}else if(i.is('input[type="number"]')){var n=function(){var s=new t,l=e('<div class="jq-number"><div class="jq-number__spin minus"></div><div class="jq-number__spin plus"></div></div>').attr({id:s.id,title:s.title}).addClass(s.classes).data(s.data);i.after(l).prependTo(l).wrap('<div class="jq-number__field"></div>'),i.is(":disabled")&&l.addClass("disabled");var o,a,d,r=null,c=null;void 0!==i.attr("min")&&(o=i.attr("min")),void 0!==i.attr("max")&&(a=i.attr("max")),d=void 0!==i.attr("step")&&e.isNumeric(i.attr("step"))?Number(i.attr("step")):Number(1);var n=function(t){var s,l=i.val();e.isNumeric(l)||(l=0,i.val("0")),t.is(".minus")?s=Number(l)-d:t.is(".plus")&&(s=Number(l)+d);var r=(d.toString().split(".")[1]||[]).length;if(r>0){for(var c="1";c.length<=r;)c+="0";s=Math.round(s*c)/c}e.isNumeric(o)&&e.isNumeric(a)?s>=o&&s<=a&&i.val(s):e.isNumeric(o)&&!e.isNumeric(a)?s>=o&&i.val(s):!e.isNumeric(o)&&e.isNumeric(a)?s<=a&&i.val(s):i.val(s)};l.is(".disabled")||(l.on("mousedown","div.jq-number__spin",function(){var t=e(this);n(t),r=setTimeout(function(){c=setInterval(function(){n(t)},40)},350)}).on("mouseup mouseout","div.jq-number__spin",function(){clearTimeout(r),clearInterval(c)}).on("mouseup","div.jq-number__spin",function(){i.change().trigger("input")}),i.on("focus.styler",function(){l.addClass("focused")}).on("blur.styler",function(){l.removeClass("focused")}))};n(),i.on("refresh",function(){i.off(".styler").closest(".jq-number").before(i).remove(),n()})}else if(i.is("select")){var f=function(){function d(e){var t=e.prop("scrollHeight")-e.outerHeight(),s=null,i=null;e.off("mousewheel DOMMouseScroll").on("mousewheel DOMMouseScroll",function(l){s=l.originalEvent.detail<0||l.originalEvent.wheelDelta>0?1:-1,((i=e.scrollTop())>=t&&s<0||i<=0&&s>0)&&(l.stopPropagation(),l.preventDefault())})}function r(){for(var e=0;e<c.length;e++){var t=c.eq(e),s="",i="",o="",a="",d="",r="",f="",h="",u="";t.prop("selected")&&(i="selected sel"),t.is(":disabled")&&(i="disabled"),t.is(":selected:disabled")&&(i="selected sel disabled"),void 0!==t.attr("id")&&""!==t.attr("id")&&(a=' id="'+t.attr("id")+l.idSuffix+'"'),void 0!==t.attr("title")&&""!==c.attr("title")&&(d=' title="'+t.attr("title")+'"'),void 0!==t.attr("class")&&(f=" "+t.attr("class"),u=' data-jqfs-class="'+t.attr("class")+'"');var p=t.data();for(var v in p)""!==p[v]&&(r+=" data-"+v+'="'+p[v]+'"');i+f!==""&&(o=' class="'+i+f+'"'),s="<li"+u+r+o+d+a+">"+t.html()+"</li>",t.parent().is("optgroup")&&(void 0!==t.parent().attr("class")&&(h=" "+t.parent().attr("class")),s="<li"+u+r+' class="'+i+f+" option"+h+'"'+d+a+">"+t.html()+"</li>",t.is(":first-child")&&(s='<li class="optgroup'+h+'">'+t.parent().attr("label")+"</li>"+s)),n+=s}}var c=e("option",i),n="";if(i.is("[multiple]")){if(a||o)return;!function(){var s=new t,l=e('<div class="jq-select-multiple jqselect"></div>').attr({id:s.id,title:s.title}).addClass(s.classes).data(s.data);i.after(l),r(),l.append("<ul>"+n+"</ul>");var o=e("ul",l),a=e("li",l),f=i.attr("size"),h=o.outerHeight(),u=a.outerHeight();void 0!==f&&f>0?o.css({height:u*f}):o.css({height:4*u}),h>l.height()&&(o.css("overflowY","scroll"),d(o),a.filter(".selected").length&&o.scrollTop(o.scrollTop()+a.filter(".selected").position().top)),i.prependTo(l),i.is(":disabled")?(l.addClass("disabled"),c.each(function(){e(this).is(":selected")&&a.eq(e(this).index()).addClass("selected")})):(a.filter(":not(.disabled):not(.optgroup)").click(function(t){i.focus();var s=e(this);if(t.ctrlKey||t.metaKey||s.addClass("selected"),t.shiftKey||s.addClass("first"),t.ctrlKey||t.metaKey||t.shiftKey||s.siblings().removeClass("selected first"),(t.ctrlKey||t.metaKey)&&(s.is(".selected")?s.removeClass("selected first"):s.addClass("selected first"),s.siblings().removeClass("first")),t.shiftKey){var l=!1,o=!1;s.siblings().removeClass("selected").siblings(".first").addClass("selected"),s.prevAll().each(function(){e(this).is(".first")&&(l=!0)}),s.nextAll().each(function(){e(this).is(".first")&&(o=!0)}),l&&s.prevAll().each(function(){if(e(this).is(".selected"))return!1;e(this).not(".disabled, .optgroup").addClass("selected")}),o&&s.nextAll().each(function(){if(e(this).is(".selected"))return!1;e(this).not(".disabled, .optgroup").addClass("selected")}),1==a.filter(".selected").length&&s.addClass("first")}c.prop("selected",!1),a.filter(".selected").each(function(){var t=e(this),s=t.index();t.is(".option")&&(s-=t.prevAll(".optgroup").length),c.eq(s).prop("selected",!0)}),i.change()}),c.each(function(t){e(this).data("optionIndex",t)}),i.on("change.styler",function(){a.removeClass("selected");var t=[];c.filter(":selected").each(function(){t.push(e(this).data("optionIndex"))}),a.not(".optgroup").filter(function(s){return e.inArray(s,t)>-1}).addClass("selected")}).on("focus.styler",function(){l.addClass("focused")}).on("blur.styler",function(){l.removeClass("focused")}),h>l.height()&&i.on("keydown.styler",function(e){38!=e.which&&37!=e.which&&33!=e.which||o.scrollTop(o.scrollTop()+a.filter(".selected").position().top-u),40!=e.which&&39!=e.which&&34!=e.which||o.scrollTop(o.scrollTop()+a.filter(".selected:last").position().top-o.innerHeight()+2*u)}))}()}else!function(){var a=new t,f="",h=i.data("placeholder"),u=i.data("search"),p=i.data("search-limit"),v=i.data("search-not-found"),m=i.data("search-placeholder"),g=i.data("smart-positioning");void 0===h&&(h=l.selectPlaceholder),void 0!==u&&""!==u||(u=l.selectSearch),void 0!==p&&""!==p||(p=l.selectSearchLimit),void 0!==v&&""!==v||(v=l.selectSearchNotFound),void 0===m&&(m=l.selectSearchPlaceholder),void 0!==g&&""!==g||(g=l.selectSmartPositioning);var b=e('<div class="jq-selectbox jqselect"><div class="jq-selectbox__select"><div class="jq-selectbox__select-text"></div><div class="jq-selectbox__trigger"><div class="jq-selectbox__trigger-arrow"></div></div></div></div>').attr({id:a.id,title:a.title}).addClass(a.classes).data(a.data);i.after(b).prependTo(b);var C=b.css("z-index");C=C>0?C:1;var x=e("div.jq-selectbox__select",b),y=e("div.jq-selectbox__select-text",b),w=c.filter(":selected");r(),u&&(f='<div class="jq-selectbox__search"><input type="search" autocomplete="off" placeholder="'+m+'"></div><div class="jq-selectbox__not-found">'+v+"</div>");var q=e('<div class="jq-selectbox__dropdown">'+f+"<ul>"+n+"</ul></div>");b.append(q);var _=e("ul",q),j=e("li",q),k=e("input",q),S=e("div.jq-selectbox__not-found",q).hide();j.length<p&&k.parent().hide(),""===c.first().text()&&c.first().is(":selected")&&!1!==h?y.text(h).addClass("placeholder"):y.text(w.text());var T=0,N=0;if(j.css({display:"inline-block"}),j.each(function(){var t=e(this);t.innerWidth()>T&&(T=t.innerWidth(),N=t.width())}),j.css({display:""}),y.is(".placeholder")&&y.width()>T)y.width(y.width());else{var P=b.clone().appendTo("body").width("auto"),H=P.outerWidth();P.remove(),H==b.outerWidth()&&y.width(N)}T>b.width()&&q.width(T),""===c.first().text()&&""!==i.data("placeholder")&&j.first().hide();var A=b.outerHeight(!0),D=k.parent().outerHeight(!0)||0,I=_.css("max-height"),K=j.filter(".selected");if(K.length<1&&j.first().addClass("selected sel"),void 0===j.data("li-height")){var O=j.outerHeight();!1!==h&&(O=j.eq(1).outerHeight()),j.data("li-height",O)}var M=q.css("top");if("auto"==q.css("left")&&q.css({left:0}),"auto"==q.css("top")&&(q.css({top:A}),M=A),q.hide(),K.length&&(c.first().text()!=w.text()&&b.addClass("changed"),b.data("jqfs-class",K.data("jqfs-class")),b.addClass(K.data("jqfs-class"))),i.is(":disabled"))return b.addClass("disabled"),!1;x.click(function(){if(e("div.jq-selectbox").filter(".opened").length&&l.onSelectClosed.call(e("div.jq-selectbox").filter(".opened")),i.focus(),!o){var t=e(window),s=j.data("li-height"),a=b.offset().top,r=t.height()-A-(a-t.scrollTop()),n=i.data("visible-options");void 0!==n&&""!==n||(n=l.selectVisibleOptions);var f=5*s,h=s*n;n>0&&n<6&&(f=h),0===n&&(h="auto");var u=function(){q.height("auto").css({bottom:"auto",top:M});var e=function(){_.css("max-height",Math.floor((r-20-D)/s)*s)};e(),_.css("max-height",h),"none"!=I&&_.css("max-height",I),r<q.outerHeight()+20&&e()};!0===g||1===g?r>f+D+20?(u(),b.removeClass("dropup").addClass("dropdown")):(function(){q.height("auto").css({top:"auto",bottom:M});var e=function(){_.css("max-height",Math.floor((a-t.scrollTop()-20-D)/s)*s)};e(),_.css("max-height",h),"none"!=I&&_.css("max-height",I),a-t.scrollTop()-20<q.outerHeight()+20&&e()}(),b.removeClass("dropdown").addClass("dropup")):!1===g||0===g?r>f+D+20&&(u(),b.removeClass("dropup").addClass("dropdown")):(q.height("auto").css({bottom:"auto",top:M}),_.css("max-height",h),"none"!=I&&_.css("max-height",I)),b.offset().left+q.outerWidth()>t.width()&&q.css({left:"auto",right:0}),e("div.jqselect").css({zIndex:C-1}).removeClass("opened"),b.css({zIndex:C}),q.is(":hidden")?(e("div.jq-selectbox__dropdown:visible").hide(),q.show(),b.addClass("opened focused"),l.onSelectOpened.call(b)):(q.hide(),b.removeClass("opened dropup dropdown"),e("div.jq-selectbox").filter(".opened").length&&l.onSelectClosed.call(b)),k.length&&(k.val("").keyup(),S.hide(),k.keyup(function(){var t=e(this).val();j.each(function(){e(this).html().match(new RegExp(".*?"+t+".*?","i"))?e(this).show():e(this).hide()}),""===c.first().text()&&""!==i.data("placeholder")&&j.first().hide(),j.filter(":visible").length<1?S.show():S.hide()})),j.filter(".selected").length&&(""===i.val()?_.scrollTop(0):(_.innerHeight()/s%2!=0&&(s/=2),_.scrollTop(_.scrollTop()+j.filter(".selected").position().top-_.innerHeight()/2+s))),d(_)}}),j.hover(function(){e(this).siblings().removeClass("selected")});var W=j.filter(".selected").text();j.filter(":not(.disabled):not(.optgroup)").click(function(){i.focus();var t=e(this),s=t.text();if(!t.is(".selected")){var o=t.index();o-=t.prevAll(".optgroup").length,t.addClass("selected sel").siblings().removeClass("selected sel"),c.prop("selected",!1).eq(o).prop("selected",!0),W=s,y.text(s),b.data("jqfs-class")&&b.removeClass(b.data("jqfs-class")),b.data("jqfs-class",t.data("jqfs-class")),b.addClass(t.data("jqfs-class")),i.change()}q.hide(),b.removeClass("opened dropup dropdown"),l.onSelectClosed.call(b)}),q.mouseout(function(){e("li.sel",q).addClass("selected")}),i.on("change.styler",function(){y.text(c.filter(":selected").text()).removeClass("placeholder"),j.removeClass("selected sel").not(".optgroup").eq(i[0].selectedIndex).addClass("selected sel"),c.first().text()!=j.filter(".selected").text()?b.addClass("changed"):b.removeClass("changed")}).on("focus.styler",function(){b.addClass("focused"),e("div.jqselect").not(".focused").removeClass("opened dropup dropdown").find("div.jq-selectbox__dropdown").hide()}).on("blur.styler",function(){b.removeClass("focused")}).on("keydown.styler keyup.styler",function(e){var t=j.data("li-height");""===i.val()?y.text(h).addClass("placeholder"):y.text(c.filter(":selected").text()),j.removeClass("selected sel").not(".optgroup").eq(i[0].selectedIndex).addClass("selected sel"),38!=e.which&&37!=e.which&&33!=e.which&&36!=e.which||(""===i.val()?_.scrollTop(0):_.scrollTop(_.scrollTop()+j.filter(".selected").position().top)),40!=e.which&&39!=e.which&&34!=e.which&&35!=e.which||_.scrollTop(_.scrollTop()+j.filter(".selected").position().top-_.innerHeight()+t),13==e.which&&(e.preventDefault(),q.hide(),b.removeClass("opened dropup dropdown"),l.onSelectClosed.call(b))}).on("keydown.styler",function(e){32==e.which&&(e.preventDefault(),x.click())}),s.registered||(e(document).on("click",s),s.registered=!0)}()};f(),i.on("refresh",function(){i.off(".styler").parent().before(i).remove(),f()})}else i.is(":reset")&&i.on("click",function(){setTimeout(function(){i.closest("form").find("input, select").trigger("refresh")},1)})},destroy:function(){var t=e(this.element);t.is(":checkbox")||t.is(":radio")?(t.removeData("_"+i).off(".styler refresh").removeAttr("style").parent().before(t).remove(),t.closest("label").add('label[for="'+t.attr("id")+'"]').off(".styler")):t.is('input[type="number"]')?t.removeData("_"+i).off(".styler refresh").closest(".jq-number").before(t).remove():(t.is(":file")||t.is("select"))&&t.removeData("_"+i).off(".styler refresh").removeAttr("style").parent().before(t).remove()}},e.fn[i]=function(s){var l=arguments;if(void 0===s||"object"==typeof s)return this.each(function(){e.data(this,"_"+i)||e.data(this,"_"+i,new t(this,s))}).promise().done(function(){var t=e(this[0]).data("_"+i);t&&t.options.onFormStyled.call()}),this;if("string"==typeof s&&"_"!==s[0]&&"init"!==s){var o;return this.each(function(){var a=e.data(this,"_"+i);a instanceof t&&"function"==typeof a[s]&&(o=a[s].apply(a,Array.prototype.slice.call(l,1)))}),void 0!==o?o:this}},s.registered=!1});
'use strict';

var Berserk = Berserk || {'settings': {timeout_delay: 200}, 'behaviors': {}};

var brk_xmode = false;
// Put your google maps api key here
Berserk.settings.gmap_api_key = typeof brk !== 'undefined' && typeof brk.gmap_api_key !== 'undefined' ? brk.gmap_api_key : "AIzaSyDEE4w3qmvL1fF91KiHhySPYZNiULI0YRo";
// Put your Re-Captcha key here
Berserk.settings.recaptcha_api_key = typeof brk !== 'undefined' && typeof brk.recaptcha_api_key !== 'undefined' ? brk.recaptcha_api_key : "6Lfsu3QUAAAAAO6j2iAsncliNSQqISfipl0DjPAp";
// Advanced: If your real project path is different then in the URL
Berserk.settings.project_prefix = typeof brk !== 'undefined' && typeof brk.shorcodesurl !== 'undefined' ? brk.shorcodesurl : '';


// Allow other JavaScript libraries to use $.
jQuery.noConflict();

window.lazySizesConfig = window.lazySizesConfig || {};
window.lazySizesConfig.expand = 500;

function isSafari() {
  var ua = window.navigator.userAgent;
  var iOS = !!ua.match(/iP(ad|od|hone)/i);
  var hasSafariInUa = !!ua.match(/Safari/i);
  var noOtherBrowsersInUa = !ua.match(/Chrome|CriOS|OPiOS|mercury|FxiOS|Firefox/i);
  var result = false;
  if(iOS) { //detecting Safari in IOS mobile browsers
    var webkit = !!ua.match(/WebKit/i);
    result = webkit && hasSafariInUa && noOtherBrowsersInUa
  } else if(window.safari !== undefined){ //detecting Safari in Desktop Browsers
    result = true;
  } else { // detecting Safari in other platforms
    result = hasSafariInUa && noOtherBrowsersInUa
  }
  return result;
}


/* RTL Detect */
(function () {
  if(!brk_xmode) {
    var brkDirectionBootstrap = document.getElementById('brk-direction-bootstrap'),
        brkDirectionOffsets   = document.getElementById('brk-direction-offsets'),
        revSlider             = document.getElementsByClassName('rev_slider_wrapper');

    if (location.search.indexOf('dir=rtl') + 1) {
      document.documentElement.setAttribute('dir', 'rtl');

      brkDirectionBootstrap.setAttribute('href', 'css/assets/bootstrap-rtl.css');
      brkDirectionOffsets.setAttribute('href', 'css/assets/offsets-rtl.css');

      if(revSlider.length){
        revSlider[0].style.direction = 'ltr';
      }
    } else if(location.search.indexOf('dir=ltr') + 1) {
      document.documentElement.setAttribute('dir', 'ltr');

      brkDirectionBootstrap.setAttribute('href', 'css/assets/bootstrap.css');
      brkDirectionOffsets.setAttribute('href', 'css/assets/offsets.css');
    }
  }
})();
/* End RTL Detect */

(function ($) {

  if(isSafari()) {
    $('html').addClass('brk-safari')
  }

  jQuery.cachedScript = function (url, options) {

    // Allow user to set any option except for dataType, cache, and url
    options = $.extend(options || {}, {
      crossDomain: true,
      dataType: "script",
      cache: true,
      url: url
    });

    // Use $.ajax() since it is more flexible than $.getScript
    // Return the jqXHR object so we can chain callbacks
    return jQuery.ajax(options);
  };

  /*
  * Behaviors engine
  */
  Berserk.attachBehaviors = function (context, settings) {
    context = context || document;
    settings = settings || Berserk.settings;
    // Execute all of them.
    $.each(Berserk.behaviors, function () {
      if ($.isFunction(this.attach)) {
        this.attach(context, settings);
      }
    });
  };


  /*
  * Attach all behaviors.
  */
  $(function () {

    // Run behaviors, because some scripts is already in the scripts.js and they should be runned
    Berserk.attachBehaviors($('body'), Berserk.settings);
    // Add all libraries to the page, the behaviors also will be runned for each script
    brs_add_libraries();

    $(document).on('trigger-behaviors', function (e) {
      Berserk.attachBehaviors($('.trigger-behaviors'), Berserk.settings);
      $('.trigger-behaviors').removeClass('trigger-behaviors');
    });

  });

  // Google Fonts async
  $(function () {

    var fonts = {
      '.font__family-oxygen': 'Oxygen:300,400,700',
      '.font__family-montserrat': 'Montserrat:100,200,300,400,500,600,700',
      '.font__family-open-sans': 'Open+Sans:200,300,400,600,700',
      '.font__family-playfair': 'Playfair+Display:400,400i,700',
      '.font__family-roboto': 'Roboto:100,300,400,700',
      '.font__family-roboto-slab': 'Roboto+Slab:100,300,400,700',
      '.font__family-poppins': 'Poppins:100,200,300,400,600,700',
      '.font__family-pacifico': 'Pacifico:300,400,700',
      '.font__family-montserrat-alt': 'Montserrat+Alternates:400,700'
    };

    var fontValue = [],
      i = 0;
    $.each(fonts, function (index, value) {
      if ($(index).length) {
        fontValue[i] = value;
        i++;
      }
    });

    var strFont = fontValue.join('|');
    $('head').append('<link id = "css-google-fonts" href="https://fonts.googleapis.com/css?family=' + strFont + '" rel="stylesheet">');
  });

  // variables
  var $html = $('html'),
    $document = $(document),
    $window = $(window),
    i = 0;
  
  $.fn.isOnScreen = function (test) {
    var height = this.outerHeight();
    var width = this.outerWidth();
    if (!width || !height) {
      return false;
    }

    var win = $(window);

    var viewport = {
      top: win.scrollTop(),
      left: win.scrollLeft()
    };
    viewport.right = viewport.left + win.width();
    viewport.bottom = viewport.top + win.height();

    var bounds = this.offset();
    bounds.right = bounds.left + width;
    bounds.bottom = bounds.top + height;

    var showing = {
      top: viewport.bottom - bounds.top,
      left: viewport.right - bounds.left,
      bottom: bounds.bottom - viewport.top,
      right: bounds.right - viewport.left
    };

    /*        if (showing.top > 0 && showing.left > 0 && showing.right > 0 && showing.bottom > 0){
     $(this).trigger('inscreen');
     }else{
     $(this).trigger('outscreen');
     }*/

    if (typeof test == 'function') {
      return test(showing);
    }

    return showing.top - height > 0 &&
      showing.left > 0 &&
      showing.right > 0 &&
      showing.bottom - height > 0;
  };
  $.fn.isAppearOnScreen = function (test) {
    var height = this.outerHeight();
    var width = this.outerWidth();
    if (!width || !height) {
      return false;
    }

    var win = $(window);

    var viewport = {
      top: win.scrollTop(),
      left: win.scrollLeft()
    };
    viewport.right = viewport.left + win.width();
    viewport.bottom = viewport.top + win.height();

    var bounds = this.offset();
    bounds.right = bounds.left + width;
    bounds.bottom = bounds.top + height;

    var showing = {
      top: viewport.bottom - bounds.top,
      left: viewport.right - bounds.left,
      bottom: bounds.bottom - viewport.top,
      right: bounds.right - viewport.left
    };

    /*        if (showing.top > 0 && showing.left > 0 && showing.right > 0 && showing.bottom > 0){
     $(this).trigger('inscreen');
     }else{
     $(this).trigger('outscreen');
     }*/

    if (typeof test == 'function') {
      return test(showing);
    }

    return showing.top > 0 &&
      showing.left > 0 &&
      showing.right > 0 &&
      showing.bottom > 0;
  };
  $.fn.rotate = function (degrees) {
    $(this).css({
      '-webkit-transform': 'rotate(' + degrees + 'deg)',
      '-moz-transform': 'rotate(' + degrees + 'deg)',
      '-ms-transform': 'rotate(' + degrees + 'deg)',
      'transform': 'rotate(' + degrees + 'deg)'
    });
    return $(this);
  };
  $.fn.setGradientBackground = function (color) {
    if (color.end) {
      $(this).css({
        'background': color.start,
        'background': '-moz-linear-gradient(top, ' + color.start + ' 0%, ' + color.end + ' 100%)',
        'background': '-webkit-gradient(left top, left bottom, color-stop(0%, ' + color.start + '), color-stop(100%, ' + color.end + '))',
        'background': '-webkit-linear-gradient(top, ' + color.start + ' 0%, ' + color.end + ' 100%)',
        'background': '-o-linear-gradient(top, ' + color.start + ' 0%, ' + color.end + ' 100%)',
        'background': '-ms-linear-gradient(top, ' + color.start + ' 0%, ' + color.end + ' 100%)',
        'background': 'linear-gradient(to bottom, ' + color.start + ' 0%, ' + color.end + ' 100%)',
        'filter': 'progid:DXImageTransform.Microsoft.gradient( startColorstr=' + color.start + ', endColorstr=' + color.end + ', GradientType=0 )'
      });
    } else {
      $(this).css({
        'background': color.start
      });
    }
    return $(this);
  };
  $.fn.addClassDelay = function (className, delay, condition) {
    condition = typeof condition != "undefined" ? condition : true;
    //console.log(condition);
    $(this).each(function (i) {
      if (condition) {
        $(this).delay(i * delay).queue(function (next) {
          $(this).addClass(className);
          next();
        });
      }
    });
  };

  /**
   * location on the screen
   */

  var icon__wrap_main = $(".active__effect-main");
  if (icon__wrap_main.length) {
    icon__wrap_main.each(function () {
      var icon__wrap = $(this).find(".active__effect");
      var icon__wrap_act = $(this).find(".active");
      icon__wrap.on("mouseenter", function () {
        icon__wrap.removeClass("current");
        icon__wrap.trigger("hover");
      });
      $(".active__effect-main").on("mouseleave", function () {
        icon__wrap.removeClass("current");
        icon__wrap_act.addClass("current");
      });
    });
  }

  window.addEventListener("load", function() {
    // Scroll to anchor
    $("a:not(.nohash-animat)").on('click', function (event) {
      var $href = $(this).attr('href');
      if (this.hash !== "" &&
        this.hash !== "#top" &&
        this.getAttribute("data-toggle") !== "collapse" &&
        this.getAttribute("data-toggle") !== "tab" &&
        !$(this).hasClass('fancybox') &&
        !$(this).parent().parent().get(0).getAttribute("data-tabgroup") &&
        $href[0] === '#'
      ) {
        event.preventDefault();
        var hash = this.hash;
        if($(hash).length) {
          $('html, body').animate({
            scrollTop: $(hash).offset().top
          }, 800, 'swing', function () {
            window.location.hash = hash;
          });
        }
      }
    });
    if(window.location.hash) { 
      window.scrollTo(0,0);
      setTimeout(function() {
        $('html, body').animate({
            scrollTop: $(window.location.hash).offset().top
        }, 800, 'swing');
      }, 800)
    }
  });

  // Scroll to top
  Berserk.behaviors.smooth_scroll_top = {
    attach: function (context, settings) {
      var top_show = 150,
        delay = 300,
        toTop = $('a[href="#top"]');

      toTop.each(function () {
        var $this = $(this);

        $(window).on('scroll', function () {
          if($this.is('[id="toTop"]')) {
            if ($(this).scrollTop() > top_show) $this.fadeIn();
            else $this.fadeOut();
          }
        });
        $this.on('click', function () {
          $('body, html').animate({
            scrollTop: 0
          }, delay);
          return false;
        });
      })
    }
  };

  // Bordered theme
  Berserk.behaviors.border_theme_init = {
    attach: function (context, settings) {
      if ($('body').hasClass('brk-bordered-theme')) {
        $(':root').attr('style',  '--b-radius: ' + $('body').attr('data-border') + 'px;');
      } else {
        $(':root').attr('style',  '--b-radius:;');
      }
    }
  };

  // Jquery Counter
  Berserk.behaviors.counter_lib_init = {
    attach: function (context, settings) {
      (function (b) {
        b.fn.counter = function (a) {
          function d(b, e, c) {
            var f = parseInt(b.html(), 10) + e;
            f >= c ? (b.html(Math.round(c)), a.callback()) : (b.html(Math.round(f)), setTimeout(function () {
              d(b, e, c)
            }, a.step))
          }

          a = b.extend({
            start: 0,
            end: 10,
            time: 10,
            step: 1E3,
            callback: function () {
            }
          }, a);
          var g = b(this);
          b(this).html(Math.round(a.start));
          var h = (a.end - a.start) / (1E3 / a.step * a.time);
          setTimeout(function () {
            d(g, h, a.end)
          }, a.step)
        }
      })(jQuery);
    }
  };
  // jQuery counter end

  // WOW init
  $(document).ready(function () {
  if (typeof(WOW) !== 'undefined') {
    var wow = new WOW();
      wow.init();
    }
  });
  // WOW init end

  // Fancy box 
  Berserk.behaviors.fancybox_init = {
    attach: function (context, settings) {

      if($('.fancybox:not(.rendered), .fancybox-media:not(.rendered)').length < 1) {
        return;
      }

      // If element is lazyloaded but library still loading, then wait a little
      if (typeof $.fn.fancybox === 'undefined') {
        console.log('Waiting for the fancybox library');
        setTimeout(Berserk.behaviors.fancybox_init.attach, 200, context, settings);
        return;
      }

      var fancybox = $('.fancybox:not(.rendered)', context);
      var fancybox_media = $('.fancybox-media:not(.rendered)', context);

      if (fancybox.length) {
        fancybox.fancybox({
          openEffect: 'elastic',
          closeEffect: 'elastic'
        }).addClass('rendered');
      }

      if (fancybox_media.length) {
        fancybox_media.fancybox({
          openEffect: 'fade',
          closeEffect: 'fade',
          helpers: {
            media: {}
          }
        }).addClass('rendered');
      }
    }
  };
  // Fancy box end


  // scrollbar-inner
  Berserk.behaviors.scrollbar_init = {
    attach: function (context, settings) {

      $(context).parent().find('.scrollbar-inner:not(.rendered)').addClass('rendered').each(function () {
        if ($(this).length) {
          // If element is lazyloaded but library still loading, then wait a little
          if (typeof $.fn.scrollbar === 'undefined') {
            console.log('Waiting for the scrollbar library');
            setTimeout(Berserk.behaviors.scrollbar_init.attach, 200, context, settings);
            return;
          }

          $(this).scrollbar();
        }
      });

    }
  };
  // end scrollbar-inner

  // =================================================================================
  // UIToTop
  // =================================================================================
  if (typeof $.UItoTop === 'function') {
    $().UItoTop({
      text: '',
      min: 200,
      inDelay: 0,
      outDelay: 0
    });
  }
  // UIToTop end

  var adds = {
      'css': {},
      'js': {}
  },
  brk_added_libraries = {},
  uniqueUrls = {
    // CSS
    "css/assets/brk-header-elements.css": true,
    "css/components/theme-options.css": true,
    "css/components/accordions.css": true,
    "css/components/tabs.css": true,
    "css/components/buttons.css": true,
    "css/components/pricing-tables.css": true,
    "css/components/testimonials.css": true,
    "css/components/CFA.css": true,
    "css/components/form-controls.css": true,
    "css/components/flip-boxes.css": true,
    "css/components/elements.css": true,
    "css/components/titles.css": true,
    "vendor/fancybox/css/jquery.fancybox.min.css": true,
    // JS
    "js/assets/brk-customizer.js": true,
    "js/assets/brk-header.js": true,
    "js/components/accordions.js": true,
    "js/components/tabs.js": true,
    "js/components/buttons.js": true,
    "js/components/form-controls.js": true,
    "vendor/formStyler/js/jquery.formstyler.min.js": true,
    // TEST
    "css/components/footer.css": true,
    "css/components/image-map.css": true,
    "css/components/media-embeds.css": true,
    // TEST JS
    "js/components/media-embeds.js": true,
    "js/components/image-map.js": true,
    "js/components/footer.js": true,
    "js/components/portfolio-masonry.js": true,
    "js/components/progress-bars.js": true,
    "js/components/portfolio-rows.js": true,
    "js/components/steps.js": true,
    "js/components/parallax-video.js": true,
    "js/components/counter.js": true,
    "js/components/sliders.js": true,
    "js/components/breadcrumbs.js": true,
    "js/components/info-box.js": true,
    "js/components/shop-components-tiles.js": true,
    "js/components/blog-page.js": true,
  },
  lazyUrls = {
    "component__map": {
      "js": [
        "https://maps.googleapis.com/maps/api/js?key=" + Berserk.settings.gmap_api_key,
        "js/components/google-maps.js"
      ]
    },
    "twitter_init": {
      "js": [
        "js/assets/twitter-init.js"
      ]
    },
    "recaptcha": {
      "js": [
        "https://www.google.com/recaptcha/api.js?render=" + Berserk.settings.recaptcha_api_key,
        "js/assets/recaptcha.js"
      ]
    }
  },
  uniqueLazyUrls = {};

  // Attach lazyload
  function brk_lazyload() {
    $.each(lazyUrls, function (i, v) {
      $('[data-brk-library*="' + i + '"]:not(.lazyloaded):not(.lazyload)').addClass('lazyload');
    });
  }

  $(document).ready(function() {
    brk_lazyload();
  });

  function brs_add_libraries_lazy(data_library) {
    var required_libs = data_library.split(','), prefix = '';

    for(var j in required_libs) {
      if(lazyUrls[required_libs[j]]) {


        if(typeof lazyUrls[required_libs[j]].js !== 'undefined') {

          for(var i in lazyUrls[required_libs[j]].js) {
            if(!uniqueLazyUrls[lazyUrls[required_libs[j]].js[i]]) {
              uniqueLazyUrls[lazyUrls[required_libs[j]].js[i]] = true;

              prefix = Berserk.settings.project_prefix && lazyUrls[required_libs[j]].js[i].indexOf('//') === -1 ? Berserk.settings.project_prefix : '';
              console.log('JS added: ' + prefix + lazyUrls[required_libs[j]].js[i]);
              $.cachedScript(prefix + lazyUrls[required_libs[j]].js[i]).done(function (script, textStatus) {
                Berserk.attachBehaviors($('body'), Berserk.settings);
              });
            }
          }
        }

        if(typeof lazyUrls[required_libs[j]].css !== 'undefined') {
          for(i in lazyUrls[required_libs[j]].css) {
            if(!uniqueLazyUrls[lazyUrls[required_libs[j]].css[i]]) {
              uniqueLazyUrls[lazyUrls[required_libs[j]].css[i]] = true;

              prefix = Berserk.settings.project_prefix && lazyUrls[required_libs[j]].css[i].indexOf('//') === -1 ? Berserk.settings.project_prefix : '';
              console.log('CSS added: ' + prefix + lazyUrls[required_libs[j]].css[i]);
              $('head').append('<link rel="stylesheet"  href="' + prefix + lazyUrls[required_libs[j]].css[i] + '">');
            }
          }
        }

      }
    }
  }

  addEventListener('lazybeforeunveil', function(e){
    var library = e.target.getAttribute('data-brk-library');
    if (library) {
      brs_add_libraries_lazy(library)
    }
  });

  /*
  Test this method for novi project - force lazyload-libraries to loads immediatly without lazyload script
  $(document).ready(function() {
    if (typeof window.lazySizes !== 'undefined') {
      $('[data-brk-library]').each(function() {
        brs_add_libraries_lazy($(this).data('brk-library'));
      });
    }  
  });
  */

  function brs_add_libraries_enqueue(library) {
    if (typeof libraries[library] == 'undefined') {
      return;
    }
    if (typeof libraries[library].dependency !== 'undefined') {
      for (i in libraries[library].dependency) {
        if (typeof brk_added_libraries[libraries[library].dependency[i]] === 'undefined') {
          brk_added_libraries[libraries[library].dependency[i]] = 1;
          brs_add_libraries_enqueue(libraries[library].dependency[i]);
        }
      }
    }
    if (typeof libraries[library].css !== 'undefined') {
      for (i in libraries[library].css) {
        if (!uniqueUrls[libraries[library].css[i]]) {
          uniqueUrls[libraries[library].css[i]] = true;
          adds.css[libraries[library].css[i]] = libraries[library].css[i];
        }
      }
    }
    if (typeof libraries[library].js !== 'undefined') {
      for (i in libraries[library].js) {
        if (!uniqueUrls[libraries[library].js[i]]) {
          uniqueUrls[libraries[library].js[i]] = true;
          adds.js[libraries[library].js[i]] = libraries[library].js[i];
        }
      }
    }
  }

  function brs_add_libraries() {
    $('[data-brk-library]:not(.brk-library-rendered)').addClass('brk-library-rendered').each(function () {
      // Support for multiple libraries devided by comma
      var required_libs = $(this).data('brk-library').split(',');
      for (i in required_libs) {
        if (typeof brk_added_libraries[required_libs[i]] === 'undefined') {
          brk_added_libraries[required_libs[i]] = 1;
          brs_add_libraries_enqueue(required_libs[i]);
        }
      }
    });

    if (Object.keys(adds.css).length) {
      var css   = '',
        addClass = '',
        prefix = '';
      if (brk_xmode) {
        addClass = 'class="brk-css-add" '
      }

      for (i in adds.css) {
        prefix = Berserk.settings.project_prefix && adds.css[i].indexOf('//') === -1 ? Berserk.settings.project_prefix : '';
        console.log('CSS added: ' + prefix + adds.css[i]);
        css += '<link ' + addClass + 'rel="stylesheet"  href="' + prefix + adds.css[i] + '">';
      }
      $('head').append(css);
    }

    if (Object.keys(adds.js).length) {
      var loaded_js = 0;
      for (i in adds.js) {
        prefix = Berserk.settings.project_prefix && adds.js[i].indexOf('//') === -1 ? Berserk.settings.project_prefix : '';
        console.log('JS added: ' + prefix + adds.js[i]);
        $.cachedScript(prefix + adds.js[i]).done(function (script, textStatus) {
          loaded_js = loaded_js + 1;
          if (Object.keys(adds.js).length === loaded_js) {
            Berserk.attachBehaviors($('body'), Berserk.settings);
            // Clear all global elements - prepear for next calls
            adds = {
              'css': {},
              'js': {}
            };
          }
        });

      }
    }
  }


  var libraries = {
    "font_awesome__5": {
      "js": [
        "//use.fontawesome.com/releases/v5.0.1/js/all.js"
      ]
    },
    "waypoints": {
      "js": [
        "vendor/waypoints/js/jquery.waypoints.min.js"
      ]
    },
    "pe-icon-7": {
      "css": [
        "vendor/pe-icon-7-stroke/css/pe-icon-7-stroke.css"
      ]
    },
    "slider__swiper": {
      "dependency": [
        "component__sliders_css"
      ],
      "css": [
        "vendor/swiper/css/swiper.min.css"
      ],
      "js": [
        "vendor/swiper/js/swiper.min.js",
        "js/assets/swiper-skin.js"
      ]
    },
    "slider__slick": {
      "css": [
        "vendor/slickCarousel/css/slick.css",
        "css/components/sliders.css"
      ],
      "js": [
        "vendor/slickCarousel/js/slick.min.js",
        "js/assets/sliders-skin.js"
      ]
    },
    "slider__rotator": {
      "js": [
        "js/assets/rotation-slider.js"
      ]
    },
    "jquerySlider": {
      "js": [
        "vendor/jquerySlider/js/jquery-ui.min.js"
      ]
    },
    "isotope": {
      "js": [
        "vendor/isotope/js/isotope.pkgd.min.js"
      ]
    },
    "datatables_js": {
      "js": [
        "vendor/datatables/js/jquery.dataTables.min.js"
      ]
    },
    "scrollbar": {
      "css": [
        "vendor/jquery.scrollbar/css/jquery.scrollbar.css"
      ],
      "js": [
        "vendor/jquery.scrollbar/js/jquery.scrollbar.min.js"
      ]
    },
    "assets_particleground": {
      "js": [
        "js/assets/jquery.particleground.min.js"
      ]
    },
    "assets_fss": {
      "js": [
        "js/assets/fss.min.js"
      ]
    },
    "assets_skrollr": {
      "js": [
        "js/assets/skrollr.min.js"
      ]
    },
    "paper": {
      "js": [
        "vendor/paper/js/paper-full.js"
      ]
    },
    "anime": {
      "js": [
        "vendor/animejs/js/anime.min.js",
        "js/assets/brk-hover3d.js"
      ]
    },
    "fancybox": {
      "css": [
        "vendor/fancybox/css/jquery.fancybox.min.css"
      ],
      "js": [
        "vendor/fancybox/js/jquery.fancybox.min.js"
      ]
    },
    "odometer": {
      "js": [
        "vendor/odometer/js/odometer.min.js"
      ]
    },
    "typewriter": {
      "js": [
        "vendor/typewriter/js/core.js"
      ]
    },
    "jqueryAutocomplete": {
      "css": [
        "vendor/jqueryAutocomplete/css/jquery-ui.css"
      ],
      "js": [
        "vendor/jqueryAutocomplete/js/jquery-ui.min.js"
      ]
    },
    "assets__typing_rotator": {
      "js": [
        "js/assets/typing-rotator.js"
      ]
    },
    "assets__image_caption": {
      "dependency": [
        "anime"
      ],
      "js": [
        "js/components/image-caption-parallax.js"
      ]
    },
    "brk-customizer": {
      "dependency": [
        "component__accordions"
      ],
      "css": [
        "css/components/theme-options.css"
      ],
      "js": [
        "js/assets/brk-customizer.js"
      ]
    },
    "flexmenu": {
      "js": [
        "js/assets/flexmenu.js"
      ]
    },
    "component__social_links": {
      "css": [
        "css/components/social-links.css"
      ]
    },
    "component__breadcrumbs_css": {
      "css": [
        "css/components/breadcrumbs.css"
      ]
    },
    "component__breadcrumbs_js": {
      "js": [
        "js/components/breadcrumbs.js"
      ]
    },
    "component__breadcrumbs": {
      "js": [
        "js/components/breadcrumbs.js"
      ],
      "dependency": [
        "jquerySlider",
        "component__breadcrumbs_css"
      ]
    },
    "component__accordions": {
      "css": [
        "css/components/accordions.css"
      ],
      "js": [
        "js/components/accordions.js"
      ]
    },
    "component__sliders": {
      "js": [
        "js/components/sliders.js"
      ],
      "dependency": [
        "component__sliders_css"
      ]
    },
    "component__sliders_css": {
      "css": [
        "css/components/sliders.css"
      ]
    },
    "component__content_slider": {
      "css": [
        "css/components/content-sliders.css"
      ]
    },
    "component__team": {
      "css": [
        "css/components/team.css"
      ],
      "js": [
        "js/components/team.js"
      ]
    },
    "component__social_block": {
      "css": [
        "css/components/social.css"
      ]
    },
    "component__flip_box_css": {
      "css": [
        "css/components/flip-boxes.css"
      ]
    },
    "component__flip_box": {
      "dependency": [
        "component__flip_box_css"
      ]
    },
    "component__app_showcase": {
      "css": [
        "css/components/flip-boxes.css"
      ]
    },
    "component__title": {
      "css": [
        "css/components/titles.css"
      ]
    },
    "component__typing_rotator": {
      "css": [
        "css/components/typing-rotator.css"
      ]
    },
    "component__dividers": {
      "css": [
        "css/components/dividers.css"
      ]
    },
    "component__progress_circle": {
      "css": [
        "css/components/progress-circles.css"
      ],
      "js": [
        "js/components/progress-circles.js"
      ]
    },
    "component__counter": {
      "css": [
        "css/components/counter.css"
      ],
      "js": [
        "js/components/counter.js"
      ],
      "dependency": [
        "waypoints"
      ]
    },
    "component__button": {
      "css": [
        "css/components/buttons.css"
      ],
      "js": [
        "js/components/buttons.js"
      ]
    },
    "component__alert": {
      "css": [
        "css/components/alerts.css"
      ],
      "js": [
        "js/components/alerts.js"
      ]
    },
    "component__form": {
      "css": [
        "css/components/form-controls.css"
      ],
      "js": [
        "vendor/formStyler/js/jquery.formstyler.min.js",
        "js/components/form-controls.js"
      ]
    },
    "component__forum_post": {
      "css": [
        "css/components/forum-post.css"
      ]
    },
    "component__forum_main": {
      "css": [
        "css/components/forum-main.css"
      ]
    },
    "component__forum_author": {
      "css": [
        "css/components/forum-author.css"
      ]
    },
    "component__countdown": {
      "css": [
        "css/components/countdown.css"
      ],
      "js": [
        "vendor/jqueryCountdown/js/jquery.countdown.min.js",
        "vendor/underscore/js/underscore-min.js",
        "js/components/countdown.js"
      ]
    },
    "component__image_frames": {
      "css": [
        "css/components/image-frames.css"
      ]
    },
    "component__info_box": {
      "css": [
        "css/components/info-box.css"
      ],
      "js": [
        "js/components/info-box.js"
      ],
      "dependency": [
        "waypoints"
      ]
    },
    "component__call_to_action": {
      "css": [
        "css/components/CFA.css"
      ],
      "js": [
        "js/components/CFA.js"
      ]
    },
    "component__list": {
      "css": [
        "css/components/lists.css"
      ]
    },
    "component__panel": {
      "css": [
        "css/components/panels.css"
      ]
    },
    "component__pricing_table": {
      "css": [
        "css/components/pricing-tables.css"
      ]
    },
    "component__blog_css": {
      "css": [
        "css/components/blog.css"
      ]
    },
    "component__blog_js": {
      "js": [
        "js/components/blog.js"
      ]
    },
    "component__blog": {
      "js": [
        "js/components/blog.js"
      ],
      "dependency": [
        "slider__slick",
        "component__blog_css"
      ]
    },
    "component__blog_grid": {
      "css": [
        "css/components/blog-grid.css"
      ]
    },
    "component__blog_page_css": {
      "css": [
        "css/components/blog-page.css"
      ]
    },
    "component__blog_page": {
      "js": [
        "js/components/blog-page.js"
      ],
      "dependency": [
        "component__social_links",
        "component__blog",
        "component__blog_page_css"
      ]
    },
    "component__cta": {
      "css": [
        "css/components/cta.css"
      ],
      "js": [
        "js/components/cta.js"
      ]
    },
    "component__widgets_css": {
      "css": [
        "css/components/widgets.css"
      ]
    },
    "component__widgets": {
      "js": [
        "js/components/widgets.js"
      ],
      "dependency": [
        "component__widgets_css",
        "slider__slick"
      ]
    },
    "component__winter": {
      "css": [
        "css/components/winter.css"
      ]
    },
    "component__media_embeds": {
      "css": [
        "css/components/media-embeds.css"
      ],
      "js": [
        "js/components/media-embeds.js"
      ]
    },
    "component__pagination": {
      "css": [
        "css/components/pagination.css"
      ],
      "js": [
        "js/components/pagination.js"
      ]
    },
    "component__index": {
      "css": [
        "css/components/index.css"
      ],
      "js": [
        "js/components/index.js"
      ],
      "dependency": [
        "jqueryAutocomplete",
        "isotope"
      ]
    },
    "component__team_page_css": {
      "css": [
        "css/components/team-member.css"
      ]
    },
    "component__team_page": {
      "dependency": [
        "component__social_links",
        "component__team_page_css"
      ]
    },
    "component__portfolio_page-styles": {
      "css": [
        "css/components/portfolio-page.css"
      ]
    },
    "component__portfolio_page": {
      "dependency": [
        "component__portfolio_page-styles",
        "anime"
      ]
    },
    "component__portfolio_list": {
      "css": [
        "css/components/portfolio-list.css"
      ]
    },
    "component__portfolio_grid": {
      "css": [
        "css/components/portfolio-grid.css"
      ],
      "js": [
        "js/components/portfolio-grid.js"
      ],
      "dependency": [
        "anime"
      ]
    },
    "component__portfolio_row": {
      "css": [
        "css/components/portfolio-rows.css"
      ],
      "js": [
        "js/components/portfolio-rows.js"
      ],
      "dependency": [
        "isotope",
        "anime"
      ]
    },
    "component__portfolio_isotope_css": {
      "css": [
        "css/components/portfolio-isotope.css"
      ]
    },
    "component__portfolio_isotope": {
      "js": [
        "js/components/portfolio-isotope.js"
      ],
      "dependency": [
        "component__portfolio_isotope_css",
        "isotope",
        "anime"
      ]
    },
    "component__portfolio_category": {
      "css": [
        "css/components/portfolio-categories.css"
      ],
      "js": [
        "js/components/portfolio-categories.js"
      ]
    },
    "component__portfolio_galleries": {
      "css": [
        "css/components/portfolio-galleries.css"
      ],
      "dependency": [
        "component__social_links"
      ]
    },
    "component__portfolio_masonry": {
      "css": [
        "css/components/portfolio-masonry.css"
      ],
      "js": [
        "js/components/portfolio-masonry.js"
      ],
      "dependency": [
        "component__media_embeds",
        "isotope",
        "component__content_slider"
      ]
    },
    "component__portfolio_masonry-2": {
      "css": [
        "css/components/portfolio-masonry-2.css"
      ],
      "dependency": [
        "component__portfolio_isotope"
      ]
    },
    "component__progress_bar": {
      "css": [
        "css/components/progress-bars.css"
      ],
      "js": [
        "js/components/progress-bars.js"
      ]
    },
    "component__promo": {
      "css": [
        "css/components/promo.css"
      ],
      "js": [
        "js/components/promo.js"
      ]
    },
    "component__sequence": {
      "css": [
        "css/components/sequence.css"
      ]
    },
    "component__services": {
      "css": [
        "css/components/services.css"
      ]
    },
    "component__shape_box": {
      "css": [
        "css/components/shape-box.css"
      ],
      "js": [
        "js/components/shape-box.js"
      ]
    },
    "component__steps": {
      "css": [
        "css/components/steps.css"
      ],
      "js": [
        "js/components/steps.js"
      ]
    },
    "component__tabs": {
      "css": [
        "css/components/tabs.css"
      ],
      "js": [
        "js/components/tabs.js"
      ]
    },
    "component__tabbed_contents": {
      "css": [
        "css/components/tabbed-contents.css"
      ],
      "js": [
        "js/components/tabs.js"
      ]
    },
    "component__testimonials": {
      "css": [
        "css/components/testimonials.css"
      ]
    },
    "component__tiles": {
      "css": [
        "css/components/tiles.css"
      ]
    },
    "component__icons": {
      "css": [
        "css/components/icons.css"
      ],
      "js": [
        "js/components/icons.js"
      ]
    },
    "component__title_section": {
      "css": [
        "css/components/section-titles.css"
      ]
    },
    "component__delimiters": {
      "css": [
        "css/components/delimiters.css"
      ]
    },
    "component__backgrounds_css": {
      "css": [
        "css/components/backgrounds.css"
      ]
    },
    "component__backgrounds_js": {
      "js": [
        "js/components/backgrounds.js"
      ]
    },
    "component__backgrounds": {
      "dependency": [
        "component__backgrounds_css",
        "component__backgrounds_js",
        "assets_particleground",
        "assets_skrollr",
        "assets_fss",
        "paper"
      ]
    },
    "component__image_caption_css": {
      "css": [
        "css/components/image-caption-parallax.css"
      ]
    },
    "component__image_caption": {
      "dependency": [
        "component__image_caption_css",
        "assets__image_caption"
      ]
    },
    "component__tags": {
      "css": [
        "css/components/tags.css"
      ]
    },
    "component__tags_js": {
      "js": [
        "js/components/tags.js"
      ]
    },
    "component__timelines_css": {
      "css": [
        "css/components/timelines.css"
      ]
    },
    "component__timelines": {
      "dependency": [
        "component__timelines_css",
        "component__content_slider"
      ]
    },
    "component__timelines_js": {
      "js": [
        "js/components/timelines.js"
      ]
    },
    "component__gallery_sliders_css": {
      "css": [
        "css/components/gallery-sliders.css"
      ]
    },
    "component__gallery_sliders": {
      "js": [
        "js/components/gallery-sliders.js"
      ],
      "dependency": [
        "slider__slick",
        "component__gallery_sliders_css"
      ]
    },
    "component__tables": {
      "css": [
        "css/components/tables.css"
      ],
      "js": [
        "js/components/tables.js"
      ]
    },
    "component__shop_row": {
      "css": [
        "css/components/shop-components-row.css"
      ]
    },
    "component__shop_tiles": {
      "css": [
        "css/components/shop-components-tiles.css"
      ],
      "js": [
        "js/components/shop-components-tiles.js"
      ],
      "dependency": [
        "component__shop_row"
      ]
    },
    "component__shop_masonry": {
      "css": [
        "css/components/shop-components-masonry.css"
      ],
      "dependency": [
        "component__shop_row"
      ]
    },
    "component__shop_grid_filter": {
      "css": [
        "css/components/shop-components-grid-filter.css"
      ],
      "js": [
        "js/components/shop-components-grid-filter.js"
      ],
      "dependency": [
        "isotope"
      ]
    },
    "component__shop_honeycomb": {
      "css": [
        "css/components/shop-components-honeycomb.css"
      ]
    },
    "component__shop_product_row": {
      "css": [
        "css/components/shop-components-row.css"
      ]
    },
    "component__shop_grid": {
      "dependency": [
        "component__flip_box"
      ]
    },
    "component__shop_cards": {
      "css": [
        "css/components/shop-components-cards.css"
      ]
    },
    "component__shop_flip": {
      "css": [
        "css/components/shop-components-flip.css"
      ],
      "js": [
        "js/components/shop-components-flip.js"
      ],
      "dependency": [
        "scrollbar"
      ]
    },
    "component__shop_item_page_sidebar": {
      "css": [
        "css/components/shop-components-item-sidebar.css"
      ]
    },
    "component__elements": {
      "css": [
        "css/components/elements.css"
      ],
      "js": [
        "js/components/elements.js"
      ]
    },
    "component__header": {
      "dependency": [
        "flexmenu"
      ],
      "css": [
        "css/assets/brk-header-elements.css"
      ],
      "js": [
        "js/assets/brk-header.js"
      ]
    },
    "component__footer": {
      "css": [
        "css/components/footer.css"
      ],
      "js": [
        "js/components/footer.js"
      ]
    },
    "component__svg_pattern": {
      "css": [
        "css/components/svg-pattern.css"
      ]
    },
    "component__gallery": {
      "css": [
        "css/components/gallery-cols.css"
      ],
      "dependency": [
        "fancybox"
      ]
    },
    "component__image_map": {
      "css": [
        "css/assets/image-map-pro.css",
        "css/components/image-map.css"
      ],
      "js": [
        "js/assets/image-map-pro.min.js",
        "js/components/image-map.js"
      ],
      "dependency": [
        "component__title"
      ]
    },
    "component__parallax": {
      "css": [
        "css/components/parallax.css"
      ],
      "js": [
        "vendor/paraxify/js/paraxify.min.js",
        "js/components/parallax.js"
      ],
      "dependency": [
        "waypoints"
      ]
    },
    "component__parallax-video": {
      "dependency": [
        "component__parallax"
      ],
      "css": [
        "vendor/jqueryMbYT_player/css/jquery.mb.YTPlayer.min.css",
        "vendor/jqueryMbVimeo_player/css/jquery.mb.vimeo_player.min.css",
        "css/components/parallax-video.css"
      ],
      "js": [
        "vendor/jqueryMbYT_player/js/jquery.mb.YTPlayer.min.js",
        "vendor/jqueryMbVimeo_player/js/jquery.mb.vimeo_player.min.js",
        "js/components/parallax-video.js"
      ]
    },
    "component__cart": {
      "css": [
        "css/components/cart.css"
      ],
      "js": [
        "js/components/cart.js"
      ]
    },
    "component__checkout": {
      "css": [
        "css/components/checkout.css"
      ]
    },
    "component__map": {
      "css" : [
        'css/components/google-maps.css'
      ]
    }
  };

  // Brk-preloader
  if(!window.xMode) {
    window.addEventListener('load', function () {
      $('html').addClass('brk-preloader-remove');
      setTimeout(function () {
        $('html').removeClass('brk-preloader brk-preloader-remove');
        $('.brk-header:not(.brk-header_vertical)').css('display', '').addClass('d-flex');
      }, 1500)
    });

    setTimeout(function () {
      $('html').addClass('brk-preloader-remove');
      setTimeout(function () {
        $('html').removeClass('brk-preloader brk-preloader-remove');
        $('.brk-header:not(.brk-header_vertical)').css('display', '').addClass('d-flex');
      }, 1500)
    }, 5000);
  } else {
    $('html').removeClass('brk-preloader');
    $('.brk-header:not(.brk-header_vertical)').css('display', '').addClass('d-flex');
  }
  // End Brk-preloader

  /* Novi Builder */
  if (brk_xmode) {

    window.addEventListener('load', function () {
      var idAdd = $('.brk-css-add'),
          dataHtmlSkin = $('html').data('brk-skin').replace(/\b.css\b/g, '');

      idAdd.each(function () {
        var $this = $(this),
          idAddHref = $this.attr('href');

        if((!idAddHref.indexOf('css/' + dataHtmlSkin + '/') + 1) && (idAddHref.indexOf('css/') + 1)) {
          var idAddHrefN = idAddHref.replace(/^\bcss\/\b/g, 'css/' + dataHtmlSkin + '/');
          $this.attr('href', idAddHrefN);

          console.log(idAddHrefN);
        }
      });
    })
  }

  if(window.xMode) {
    $('head').append('<link rel="stylesheet" href="css/assets/novi.css">');

    $('.flip-box').on('dblclick', function () {
      $(this).toggleClass('flip-box-xmode-active');
    });

    $('.btn').on('click', function (e) {e.preventDefault()});
    $('.btn').on('dblclick', function () {
      $(this).toggleClass('btn-xmode-active');
    });

  }
  /* End Novi Builder */


})(jQuery);
(function($){
  'use strict';

  $( document ).ready(function() {

  /* Open/Close customizer */
	var $options 		= $('.brk-theme-options'),
			$panelOpen	= $options.find('.panel-open'),
			$panelClose	= $options.find('.panel-close');

	$panelOpen.on('click', function (e) {
		e.preventDefault();
		var $this = $(this);

		$this.toggleClass('checked');
		$options.toggleClass('active');
	});

	$panelClose.on('click', function () {
		$panelOpen.removeClass('checked');
		$options.removeClass('active');
	});

  $(document).on('click', function (e) {
    if (!$options.is(e.target) && $options.has(e.target).length === 0) {
      $panelOpen.removeClass('checked');
      $options.removeClass('active');
    }
  });
  /* Open/Close customizer */

  /* Load bg */
  var brkBgCheck = $('[data-brk-bg-check]');
  $panelOpen.on('click', function (e) {
    e.preventDefault();

    brkBgCheck.each(function () {
      var $this   = $(this),
          bgCheck = $this.data('brk-bg-check');

      $this.attr('style', 'background-image: url('+ bgCheck +')');
    })
  });
  /* End Load bg */

	var themeOptionsColor 			    = $('.brk-theme-options__color'),
			themeOptionsColorButton	    = themeOptionsColor.find('.brk-theme-options__color-radio'),
			//brkSkinColor						    = $('#brk-skin-color'),
      brkSkinColor                = $('link[id^="brk-skin-color"]'), // WordPress
      dataHtmlSkin                = $('html').data('brk-skin');

	themeOptionsColorButton.each(function () {
		var $this 									= $(this),
				themeOptionsColorData		= $this.data('skin');

    if(dataHtmlSkin.indexOf(themeOptionsColorData + '.css') + 1) {
      $this.addClass('checked');
    }

		$this.on('click', function () {
      //brkSkinColor.attr('href', 'css/skins/' + themeOptionsColorData + '.css');
      brkSkinColor.attr('href', Berserk.settings.project_prefix + 'css/skins/' + themeOptionsColorData + '.css'); // WordPress
			themeOptionsColorButton.removeClass('checked');
			$this.addClass('checked');
      $('html').data('brk-skin', themeOptionsColorData + '.css');
		});

	});


	/* direction */
	var $elDir = $('[data-brk-direction]'),
			$optionsCheckGlobal = $elDir.find('.brk-theme-options__check');

  $elDir.each(function () {
    var $this 				= $(this),
        dir           = $this.data('brk-direction'),
        $optionsCheck = $this.find('.brk-theme-options__check');

    if(dir === $('html').attr('dir')) {
      $optionsCheckGlobal.removeClass('brk-theme-options__check_active');
      $optionsCheck.addClass('brk-theme-options__check_active');
    }

  });
  /* end direction */
  
	/* options border */
	var $optBorder 								= $('[data-brk-options-border]'),
			$optionsBorderCheckGlobal = $optBorder.find('.brk-theme-options__check');

	$optBorder.each(function () {
		var $this 							= $(this),
				$optionsBorderCheck = $this.find('.brk-theme-options__check');

		$this.on('click', function (e) {
			e.preventDefault();
			var $dataBorder = $this.data('brk-options-border');

			$optionsBorderCheckGlobal.removeClass('brk-theme-options__check_active');
			$optionsBorderCheck.addClass('brk-theme-options__check_active');

			if($dataBorder !== 0) {
				$('body').addClass('brk-bordered-theme').attr('data-border', $dataBorder);
				Berserk.behaviors.border_theme_init.attach($(document));
			} else {
				$('body').removeClass('brk-bordered-theme').removeAttr('data-border');
				Berserk.behaviors.border_theme_init.attach($(document));
			}
		})
	});
	/* end options border */

  /* Layout */
  var $brkLayout              = $('[data-brk-layout]'),
      $optionsBrkLayoutGlobal = $brkLayout.find('.brk-theme-options__check');

  $brkLayout.each(function () {
    var $this 					= $(this),
      $optionsBrkLayout = $this.find('.brk-theme-options__check');

    $this.on('click', function (e) {
      e.preventDefault();
      var $dataLayout = $this.data('brk-layout');

      $optionsBrkLayoutGlobal.removeClass('brk-theme-options__check_active');
      $optionsBrkLayout.addClass('brk-theme-options__check_active');

      if($dataLayout === 'boxed') {
        $('body').addClass('brk-boxed');
      } else {
        $('body').removeClass('brk-boxed');
      }
    })
  });
  /* end Layout */

  /* Layouts & Skins */
  var $brkPathname  = $('.brk-theme-options-pathname'),
      $brkLocation  = window.location.pathname.replace(/\//g,'');

  $brkPathname.each(function () {
    var $this 					  = $(this),
        $brkPathnameLink  = $this.attr('href').replace(/\//g,''),
        $brkPathnameCheck = $this.find('.brk-theme-options__check');

    if($brkPathnameLink === $brkLocation) {
      $brkPathnameCheck.addClass('brk-theme-options__check_active');
    }
  })
  /* End Layouts & Skins */

  });
})(jQuery);
(function ($) {
  'use strict';

  Berserk.behaviors.header_init = {
    attach: function (context, settings) {

      /**
       * Global var
       */
      $(context).parent().find('.brk-header:not(.rendered)').addClass('rendered').each(function () {

        var header_one = $(this),
          main_bar = header_one.find('.brk-header__main-bar'),
          main_barData = main_bar.data('height-scroll'),
          widthDoc = 992,
          stickyHide = header_one.data('sticky-hide'),
          bodyWidth = $('body').width();

        /*if (header_one.hasClass('brk-header_not-fixed')) {
          var windowWidth = window.innerWidth || $(window).width();
          if (windowWidth > 992) {
            $('body').css('padding-top', main_bar.height());
          }
        }*/

        /**
         * Header TOP BAR
         */
        if ($('.brk-header__top-bar').length) {
          var top_bar = header_one.find('.brk-header__top-bar_hide'),
            top_bar_scroll = header_one.find('.brk-header__top-bar_scroll'),
            dataTop = header_one.find('.brk-header__top-bar').data('top');

          dataTop = dataTop ? dataTop : 0;

          var topBar = function (widthDoc) {
            var windowWidth = window.innerWidth || $(window).width();

            if (windowWidth >= widthDoc) {
              if (top_bar.length) {
                var h = top_bar.innerHeight() - dataTop;
                if($('body').hasClass('admin-bar')) {
                  var hNew = h - 32;
                  header_one.css('top', '-' + hNew + 'px');
                } else {
                  header_one.css('top', '-' + h + 'px');
                }
              }
            } else {
              header_one.css('top', '0');
            }
          };

          var topBarScroll = function (widthDoc) {
            if (stickyHide !== 1) {
              var windowWidth = window.innerWidth || $(window).width();

              if (windowWidth >= widthDoc) {
                if (top_bar_scroll.length) {
                  var hsc = top_bar_scroll.innerHeight() - dataTop;

                  if ($(window).scrollTop() > 0) {
                    if($('.brk-open-top-bar').length) {
                      header_one.find('.brk-open-top-bar').removeClass('active');
                    }

                    if($('body').hasClass('admin-bar')) {
                      var hNew = hsc - 32;
                      header_one.css('top', '-' + hNew + 'px');
                    } else {
                      header_one.css('top', '-' + hsc + 'px');
                    }
                  } else if ($(window).scrollTop() <= 0) {
                    if($('.brk-open-top-bar').length) {
                      header_one.find('.brk-open-top-bar').addClass('active');
                    }

                    if($('body').hasClass('admin-bar')) {
                      header_one.css('top', '32px');
                    } else {
                      header_one.css('top', '0');
                    }
                  }
                }
              } else {
                header_one.css('top', '0');
              }
            }
          };

          /* Init Function */
          setTimeout(function () {
            topBar(widthDoc)
          }, 2000);

          topBarScroll(widthDoc);

          $(window).on('resize scroll', function () {
            topBar(widthDoc);
            topBarScroll(widthDoc);
          });
        }

        if($('.brk-open-top-bar').length) {
          var openTopBar = header_one.find('.brk-open-top-bar');

          openTopBar.on('click', function () {
            openTopBar.toggleClass('active');
            header_one.toggleClass('top-bar-active');
          })
        }
        /**
         * End Header TOP BAR
         */

        /**
         * Header SCROLL
         */
        //if(header_one.not('.brk-header_vertical')[0]) {
        if (!!main_barData) {
          main_bar.data('height-temp', main_bar.height());
        }

        function headerScroll(widthDoc) {
          var windowWidth = window.innerWidth || $(window).width();

          if (!!main_barData) {
            var height_temp = main_bar.data('height-temp');
            //main_barHeightNew	= height_temp - main_barData;
          }

          if(!header_one.hasClass('brk-header_not-fixed')) {
            if (windowWidth >= widthDoc) {

              if ($(window).scrollTop() > 0) {
                header_one.addClass("brk-header_scroll");

                if (!!main_barData) {
                  main_bar.css('height', main_barData + 'px');
                }
              } else if ($(window).scrollTop() <= 0) {
                header_one.removeClass("brk-header_scroll");

                if (!!main_barData) {
                  main_bar.css('height', height_temp + 'px');
                }
              }
            }
          }

          /* Header scroll mobile */
          if ($(window).scrollTop() > 0) {
            $('.brk-header-mobile').addClass("brk-header-mobile_scroll");
          } else if ($(window).scrollTop() <= 0) {
            $('.brk-header-mobile').removeClass("brk-header-mobile_scroll");
          }
          /* End Header scroll mobile */
        }

        headerScroll(widthDoc);
        $(window).on('scroll', function () {
          headerScroll(widthDoc);
        });
        //}
        /**
         * End Header SCROLL
         */


        /**
         * Sticky Hide
         */
        if (stickyHide === 1) {
          var scrollPrev = 0;

          setTimeout(function () {
            $(window).on('scroll', function () {
              var scrolled = $(this).scrollTop(),
                firstScrollUp = false,
                firstScrollDown = false;

              if (scrolled > 0) {

                if (scrolled > scrollPrev) {
                  firstScrollUp = false;

                  if (scrolled < header_one.height() + header_one.offset().top) {
                    if (firstScrollDown === false) {
                      header_one.addClass('brk-header_sticky-hide');

                      firstScrollDown = true;
                    }
                  }
                } else {
                  firstScrollDown = false;

                  if (scrolled > header_one.offset().top) {
                    if (firstScrollUp === false) {
                      header_one.removeClass('brk-header_sticky-hide');

                      firstScrollUp = true;
                    }
                  }
                }
                scrollPrev = scrolled;
              }

            });
          }, 2500);
        }
        /**
         * End Sticky Hide
         */


        /**
         * brk-header-mobile
         */
        /**
         * Wrap: .brk-header-mobile-wrap
         * Wrap header: .brk-header-mobile-wrap__header
         * Wrap logo: .brk-header-mobile-wrap__logo
         * Wrap close: .brk-header-mobile-wrap__close
         */

        var fnlogic = false;

        function headerMobile(widthDoc) {
          var windowWidth = window.innerWidth || $(window).width(),
            wrapMobile = 'brk-header-mobile-wrap',
            wrapMobileBody = 'brk-header-mobile-wrap__body';

          if (windowWidth < widthDoc && !fnlogic) {

            header_one.wrap('<div class="' + wrapMobile + '"><div class="' + wrapMobileBody + '"></div></div>');

            var wrapMobileClass = $('.brk-header-mobile-wrap'),
              wrapMobileClassBody = $('.brk-header-mobile-wrap__body'),
              wrapMobileData = header_one.data('logo-src'),
              bgMobile = header_one.data('bg-mobile');

            wrapMobileClassBody.prepend('<div class="brk-before"></div><div class="brk-header-mobile-wrap__header">' +
              '<div class="brk-header-mobile-wrap__close"><span></span></div>' +
              '</div>');

            if (wrapMobileData !== '') {
              $('.brk-header-mobile-wrap__header').prepend('<div class="brk-header-mobile-wrap__logo"><img src="' + wrapMobileData + '" alt=""></div>')
            }
            if (bgMobile !== '' && bgMobile !== undefined) {
              wrapMobileClass.css('background-image', 'url(' + bgMobile + ')');
            }
            wrapMobileClass.before('<div class="brk-header-mobile-wrap-layer"></div>');

            /* ------------------- fnlogic ---------------------*/
            fnlogic = true;
          } else if (windowWidth >= widthDoc && fnlogic) {
            $('.brk-header-mobile-wrap__header').detach();
            $('.brk-header-mobile-wrap-layer').remove();

            $('.brk-before, .brk-header-mobile-wrap__header').remove();

            header_one.unwrap();
            header_one.unwrap();

            /* ------------------- fnlogic ---------------------*/
            fnlogic = false;
          }

          /* Open-Close menu mobile */
          var brkHeaderMobile = $('.brk-header-mobile'),
            brkHeaderMobileOpen = brkHeaderMobile.find('.brk-header-mobile__open'),
            wrapMobileClass = $('.brk-header-mobile-wrap'),
            brkHeaderMobileClose = wrapMobileClass.find('.brk-header-mobile-wrap__close'),
            mobileWrapLayer = $('.brk-header-mobile-wrap-layer');

          if (brkHeaderMobile.length) {
            brkHeaderMobileOpen.on('click', function () {
              $('body').addClass('modal-open');
              wrapMobileClass.addClass('is-active');
              mobileWrapLayer.addClass('is-active');
            });
          }

          if (wrapMobileClass.length) {
            brkHeaderMobileClose.on('click', function () {
              $('body').removeClass('modal-open');
              wrapMobileClass.removeClass('is-active');
              mobileWrapLayer.removeClass('is-active');
            })
          }
          /* Open-Close menu mobile */
        }

        headerMobile(widthDoc);

        $(window).on('resize', function () {
          headerMobile(widthDoc);
        });
        /**
         * End brk-header-mobile
         */

        /**
         * Mobile menu
         */
        var fnlogicMob = false;

        function mobileMenu(widthDoc) {
          var $brkNav = $('.brk-nav, .brk-header-popup-menu'),
            $brkNavChildren = $brkNav.find('.brk-nav__children'),
            $brkNavLi = $brkNav.find('.brk-nav__menu > li'),
            $link = $brkNavLi.children('a'),
            $linkHash = $brkNav.find('a'),
            windowWidth = window.innerWidth || $(window).width();

          if (windowWidth < widthDoc && !fnlogicMob) {
            $brkNavChildren.prepend('<div class="brk-nav__link-open"><i class="fa fa-angle-right"></i></div>');

            if ($('.brk-nav__link-open').length) {
              var $openLink = $('.brk-nav__link-open');

              if ($openLink.length > 0) {
                $openLink.on('click', function () {
                  var $this = $(this),
                    $parent = $this.parent(),
                    $thisDropDown = $parent.children('.brk-nav-drop-down');

                  $parent.toggleClass('children-active');
                  $this.toggleClass('is-active');
                  $thisDropDown.slideToggle(400);
                });
              }

              // linck #
              $link.each(function () {
                var $this = $(this),
                  $linkHref = $this.attr('href');

                if($linkHref !== '/') {
                  if (($linkHref[0] === '#' && $linkHref.length === 1) || $linkHref === 'javascript:void(0)' || !$linkHref.length) {
                    $this.on('click', function (e) {
                      
                      e.preventDefault();
                      var $this = $(this),
                        $parent = $this.parent(),
                        $thisDropDown = $parent.children('.brk-nav-drop-down'),
                        $linkOpen = $parent.children('.brk-nav__link-open');

                      $parent.toggleClass('children-active');
                      $linkOpen.toggleClass('is-active');
                      $thisDropDown.slideToggle(400);

                    })
                  }
                }

              });
            }

            $linkHash.each(function () {
              var $this = $(this),
                  $linkHref = $this.attr('href');

              if($linkHref[0] === '#') {
                $this.on('click', function (e) {
                  e.preventDefault();

                  if($($linkHref).length) {
                    var $this = $(this),
                      $linkParent = $this.parents('.brk-header-mobile-wrap');

                    /*$('html, body').animate({
                      scrollTop: $($linkHref).offset().top
                    }, 800, 'swing', function () {
                      window.location.hash = $linkHref;
                    });*/

                    $('body').removeClass('modal-open');
                    $linkParent.removeClass('is-active');
                    $('.brk-header-mobile-wrap-layer').removeClass('is-active');
                  }
                })
              }
            });

            /* fologicMob */
            fnlogicMob = true;
          } else if ($('.brk-nav__link-open').length > 0 && windowWidth >= widthDoc && fnlogicMob) {
            $('.brk-nav__link-open').remove();

            $brkNavChildren.removeClass('children-active');

            /* fologicMob */
            fnlogicMob = false;
          }

        }

        $(window).on('load', function () {
          mobileMenu(widthDoc);
        });

        $(window).on('resize', function () {
          mobileMenu(widthDoc);
        });

        /**
         * End Mobile menu
         */


        function dropDownEffect(e, s, d) {
          var e = (d === 'left') ? $(e.get().reverse()) : e,
            b = (d === 'left') ? {opacity: 0, left: 10} : {opacity: 0, left: -10};

          e.css(b).each(function (i) {
            $(this).delay(s * i).animate({opacity: 1, left: 0});
          });
        }

        $('.brk-nav__drop-down-effect').each(function () {
          var $this = $(this),
            $dd_effect = $this.find('.dd-effect');
          $this.on('mouseenter', function () {
            dropDownEffect($dd_effect, 10);
          });
        });

        /**
         * quantityProducts
         */
        (function quantityProducts() {
          $(".brk-quantity").find(".brk-quantity__arrows").on('click', function () {
            var calc = $(this).parent().find(".brk-quantity__value");
            var calcText = calc.val();
            if ($(this).hasClass("minus") && calcText > 1) {
              calc.val(+calcText - 1);
            } else if ($(this).hasClass("plus")) {
              calc.val(+calcText + 1);
            }
          });
        })();
        /**
         * End quantityProducts
         */

        /**
         * BRK info-menu
         */
        var infoMenu = $('.brk-info-menu'),
          infoMenuOpen = $('.brk-info-menu-open'),
          infoMenuClose = infoMenu.find('.brk-info-menu__close'),
          windowWidth = window.innerWidth || $(window).width();

        infoMenuOpen.on('click', function () {
          infoMenu.toggleClass('active');
          infoMenuOpen.toggleClass('open-active');
          if (windowWidth >= widthDoc) {
            $('body').toggleClass('modal-open');
          }

        });

        infoMenuClose.on('click', function () {
          if (infoMenu.hasClass('active')) {
            infoMenu.removeClass('active');
          }
          if (infoMenuOpen.hasClass('open-active')) {
            infoMenuOpen.removeClass('open-active');
          }
          if (windowWidth >= widthDoc) {
            if ($('body').hasClass('modal-open')) {
              $('body').removeClass('modal-open');
            }
          }
        });

        $(document).on('click', function (e) {
          if (!$(e.target).closest(".brk-info-menu").length && !$(e.target).closest(".brk-info-menu-open").length) {
            if (infoMenu.hasClass('active')) {
              infoMenu.removeClass('active');
            }
            if (infoMenuOpen.hasClass('open-active')) {
              infoMenuOpen.removeClass('open-active');
            }
            if (windowWidth >= widthDoc) {
              if ($('body').hasClass('modal-open')) {
                $('body').removeClass('modal-open');
              }
            }
          }
          e.stopPropagation();
        });

        /**
         * End BRK info-menu
         */


        /**
         * element mobile
         */
        function elementMobile(parentId, openEl, contentEl, widthDoc) {
          var parentId = $(parentId),
            openEl = parentId.find(openEl),
            contentEl = parentId.find(contentEl),
            windowWidth = window.innerWidth || $(window).width();

          if (windowWidth < widthDoc) {
            openEl.unbind('click').on('click', function () {
              contentEl.slideToggle(400);
            });
          } else if (windowWidth >= widthDoc) {
            openEl.unbind('click');
            contentEl.css('display', '');
          }
        }

        elementMobile('.brk-mini-cart', '.brk-mini-cart__open, .brk-mini-cart__info-open', '.brk-mini-cart__menu', widthDoc);
        elementMobile('.brk-social-links', '.brk-social-links__open', '.brk-social-links__block', widthDoc);
        elementMobile('.brk-search', '.brk-search__open', '.brk-search__block', widthDoc);

        $(window).on('resize', function () {
          elementMobile('.brk-mini-cart', '.brk-mini-cart__open, .brk-mini-cart__info-open', '.brk-mini-cart__menu', widthDoc);
          elementMobile('.brk-social-links', '.brk-social-links__open', '.brk-social-links__block', widthDoc);
          elementMobile('.brk-search', '.brk-search__open', '.brk-search__block', widthDoc);
        });
        /**
         * End element mobile
         */


        /**
         * brk-search
         */
        (function () {
          var windowWidth = window.innerWidth || $(window).width();

          if (windowWidth >= widthDoc) {
            $('.brk-search_interactive').each(function () {
              var $this = $(this),
                $parent = $this.parents('.brk-header__main-bar'),
                $container = $parent.children('.container-fluid, .container'),
                $open = $this.find('.brk-search__open'),
                $close = $this.find('.brk-search__close'),
                $block = $this.find('.brk-search__block'),
                $form = $block.find('[type="search"]'),
                $item = $parent.find('.brk-header__item:not(.brk-search_interactive)'),
                $col = $item.parents('[class*="col"]'),
                delay = 0;

              $open.on('click', function () {
                $block.addClass('active');
                $container.addClass('position-relative');
                $item.hide(delay);
                $(this).hide(delay);
                if (!$('div').is('.brk-overlay')) {
                  header_one.after('<div class="brk-overlay"></div>');
                }
                setTimeout(function () {
                  $form.focus();
                }, 150);
                $col.css('border', '0');
              });

              $close.on('click', function () {
                $block.removeClass('active');
                $item.show(delay);
                $open.show(delay);
                $container.removeClass('position-relative');
                if ($('div').is('.brk-overlay')) {
                  $('.brk-overlay').remove();
                }
                $col.css('border', '');
              });

              $(document).on('click', function (e) {
                if (!$(e.target).closest(".brk-header").length) {
                  $block.removeClass('active');
                  $item.show(delay);
                  $open.show(delay);
                  $container.removeClass('position-relative');
                  if ($('div').is('.brk-overlay')) {
                    $('.brk-overlay').remove();
                  }
                  $col.css('border', '');
                }
                e.stopPropagation();
              });
            });
          }
        })();
        /**
         * End brk-search
         */

        /**
         * brk-lang_interactive
         */
        function brkLangInt(widthDoc) {
          var windowWidth = window.innerWidth || $(window).width();

          if (windowWidth < widthDoc) {
            $('.brk-lang:not(.brk-lang-rendered)').addClass('brk-lang-rendered').each(function () {
              var $this = $(this),
                $open = $this.find('.brk-lang__open'),
                $option = $this.find('.brk-lang__option');

              $this.unbind();

              $open.on('click', function () {
                $option.slideToggle(300);
              })
            }).removeClass('brk-lang_interactive-rendered');

          } else if (windowWidth >= widthDoc) {
            $('.brk-lang_interactive:not(.brk-lang_interactive-rendered)').addClass('brk-lang_interactive-rendered').each(function () {
              var $this = $(this),
                $parent = $this.closest('.brk-header__top-bar, .brk-header__main-bar'),
                $container = $parent.find('.container-fluid, .container'),
                $item = $parent.find('.brk-header__item:not(.brk-lang_interactive)'),
                $col = $item.parents('[class*="col"]');

              $parent.css({'height': $parent.outerHeight(), 'transition': 'height .3s'});

              $this.on({
                mouseenter: function () {
                  $item.css('opacity', '0');
                  $container.css('background', 'transparent !important');
                  $parent.addClass('top-bar-bg');
                  if (!$('div').is('.brk-overlay')) {
                    header_one.after('<div class="brk-overlay"></div>');
                  }
                  $col.css('border', '0');
                },
                mouseleave: function () {
                  $item.css('opacity', '1');
                  $container.removeAttr('style');
                  $parent.removeClass('top-bar-bg');
                  if ($('div').is('.brk-overlay')) {
                    $('.brk-overlay').remove();
                  }
                  $col.css('border', '');
                }
              });

            }).removeClass('brk-lang-rendered');
            $('.brk-lang__option').css('display', '');

            $('.brk-lang').find('.brk-lang__open').unbind('click');
          }
        }

        window.addEventListener('load', function () {
          brkLangInt(widthDoc)
        });

        $(window).on('resize', function () {
          brkLangInt(widthDoc)
        });
        /**
         * End brk-lang_interactive
         */

        /**
         * brk-header-popup-menu
         */
        (function () {
          if ($('.brk-header-popup-menu').length > 0) {
            //$('body').append('<div class="brk-header-popup-menu-layer"></div>');
            header_one.after('<div class="brk-header-popup-menu-layer"></div>');

            var $popuMenu = $('.brk-header-popup-menu'),
              $openClose = $popuMenu.find('.brk-header-popup-menu__open-close'),
              $menu = $('.brk-header-popup-menu__menu'),
              $layer = $('.brk-header-popup-menu-layer'),
              $menuLink = $menu.find('a');

            if ($('.brk-header_vertical').length > 0) {
              $('.brk-header').append($menu);
              $menu.addClass('brk-moved-by-js');
            }

            $openClose.on('click', function () {
              var $this = $(this);

              $this.toggleClass('is-active');
              $menu.fadeToggle(300);
              $layer.fadeToggle(500);
            });

            $layer.on('click', function () {
              var $this = $(this);

              $openClose.toggleClass('is-active');
              $menu.fadeToggle(300);
              $this.fadeToggle(500);
            });

            $menuLink.each(function () {
              var $this = $(this),
                  $linkHref = $this.attr('href');

              if($linkHref[0] === '#' && $linkHref.length > 1 && $($linkHref).length) {
                $menuLink.on('click', function () {
                  $openClose.removeClass('is-active');
                  $menu.fadeOut(300);
                  $layer.fadeOut(500);
                })
              }
            })

          }
        })();
        /**
         * End brk-header-popup-menu
         */

        $('.brk-totop').on('click', function () {
          $('html, body').stop().animate({scrollTop: 0}, 500);
        });

        function locationScreen() {
          var windowWidth = window.innerWidth || $(window).width();
          if (windowWidth < 992) {return}

          var brk_element_header = '.brk-mini-cart, .brk-social-links, .brk-search, .brk-lang, .brk-nav__sub-menu, .flexMenu-popup';
          $(brk_element_header).each(function () {
            var $this = $(this),
              widthOffset = (windowWidth / 2) + 350,
              offset = $this.offset().left + ($this.width()/2);

            if (offset < widthOffset) {
              $this.removeClass('brk-location-screen-left brk-location-screen-right').addClass('brk-location-screen-left');
            } else {
              $this.removeClass('brk-location-screen-left brk-location-screen-right').addClass('brk-location-screen-right');
            }
          });
        }

        locationScreen();

        $(window).on('load resize', function () {
          setTimeout(function () {
            locationScreen();
          }, 300)
        });
        /**
         * END location on the screen
         */

      });

    }
  };

  Berserk.behaviors.header_init_menu_flex = {
    attach: function (context, settings) {

      if($('.brk-nav:not(.rendered)').length < 1) {
        return;
      }

      if (typeof $.fn.flexMenu !== 'function') {
        console.log('Waiting for the flexMenu library');
        setTimeout(Berserk.behaviors.header_init_menu_flex.attach, settings.timeout_delay, context, settings);
        return;
      }

      var fnlogic_flexmenu = true;
      function initFlexMenu(brkNavMenu, linkText) {
        var windowWidth = window.innerWidth || $(window).width(),
            widthDoc    = 992;

        if (windowWidth < widthDoc && !fnlogic_flexmenu) {

          brkNavMenu.flexMenu({
            undo: true
          });

          /* ------------------- fnlogic_flexmenu ---------------------*/
          fnlogic_flexmenu = true;
        } else if (windowWidth >= widthDoc && fnlogic_flexmenu) {

          brkNavMenu.flexMenu({
            linkText: linkText
          });

          setTimeout(function () {
            if($('.flexMenu-viewMore').length) {
              var offset          = $('.flexMenu-popup').offset().left + 80,
                brkNavMegaMenu  = brkNavMenu.find('.flexMenu-viewMore .brk-nav__mega-menu');

              brkNavMegaMenu.attr('style', 'width: calc(100vw - ' + offset + 'px)')
            }
          }, 500);

          /* ------------------- fnlogic_flexmenu ---------------------*/
          fnlogic_flexmenu = false;
        }
      }

      $(context).parent().find('.brk-nav:not(.rendered)').addClass('rendered').each(function () {
        var $this           = $(this),
          brkNavMenu      = $this.find('.brk-nav__menu'),
          linkText        = $this.data('flexmenu-link-text'),
          navParent       = $this.closest('.brk-header_vertical');

        if(navParent.length === 0) {
          linkText = linkText ? linkText : 'More';

          $(window).on('load resize', function () {
            initFlexMenu(brkNavMenu, linkText);
          })
        }
      })
    }
  }

})(jQuery);
(function ($) {
  'use strict';

  Berserk.behaviors.accordions_init = {
    attach: function (context, settings) {

      $('.accordion:not(.rendered)', context).addClass("rendered").each(function () {
        var collapse = $(this).find('.collapse');

        collapse.each(function () {

          $(this).on('show.bs.collapse', function () {
            var curId = $(this).attr('id');
            collapse.each(function () {
              if ($(this).attr('id') !== curId) {
                $(this).collapse('hide');
              }
            })
          });

          $(this).on('shown.bs.collapse', function () {
            $(this).parents('.card').addClass('expanded');
            var sliders = $(this).find(".slick-slider");
            if(sliders.length){
              sliders.each(function () {
                var _this = $(this);
                setTimeout(_this.slick("setPosition", 0), 200); 
              })
            }
          });

          $(this).on('hide.bs.collapse', function () {
            $(this).parents('.card').removeClass('expanded');
          });
        })
      })
    }
  }
})(jQuery);

(function ($) {
  'use strict';

  Berserk.behaviors.tabs_init = {
    attach: function (context, settings) {

      function setSlickPosition(slider) {
        setTimeout(function () {
          slider.slick("setPosition", 0);
        }, 200)
      }

      $('.brk-tabs:not(.rendered)', context).addClass('rendered').each(function () {
        if (!$(this).hasClass('brk-tabs-hovers')) {
          var _ = $(this),
            tab = _.find('.brk-tab'),
            tabItem = _.find('.brk-tab-item'),
            index = _.data('index'),
            hash = _.data('hash'),
            tabIndex = window.location.hash;

          index = index ? index : 0;

          $(window).on('load', function () {
            tabItem.hide().eq(index).fadeIn();
          });

          tab.on('click', function () {
            $(this).addClass('active').siblings('.active').removeClass('active no-hover');
            tabItem.hide().eq($(this).index()).fadeIn();
                        
            var sliders = tabItem.eq($(this).index()).find(".slick-slider");
            if(sliders.length){
              sliders.each(function () {
                var _this = $(this);
                setSlickPosition(_this);
              })
            }
            
          }).eq(index).addClass("active");

        } else {

          var _ = $(this),
            tabsNav = _.find('.brk-tabs-nav'),
            tab = _.find('.brk-tab'),
            tabItem = _.find('.brk-tab-item'),
            index = _.data('index'),
            headerStyle_1 = _.closest('.brk-header_style-1'),
            headerStyle_2 = _.closest('.brk-header_style-2'),
            headerStyle_3 = _.closest('.brk-header_style-3');

          index = index ? index : 0;

          if (headerStyle_1[0]) {
            _.addClass('brk-tabs-hovers_style-1');
          } else if (headerStyle_2[0]) {
            _.addClass('brk-tabs-hovers_style-2')
          } else if (headerStyle_3[0]) {
            _.addClass('brk-tabs-hovers_style-3')
          }

          if (headerStyle_1[0]) {
            tabsNav.append('<div class="brk-tabs-hovers__duplicate-icon"></div>');
          }

          $(window).on('load', function () {
            tabItem.hide().eq(index).fadeIn();
            tab.eq(index).addClass('current');
          });

          if (headerStyle_1[0]) {
            var currentTab = _.find('.current'),
              icon = currentTab.children('[class*="fa-"]'),
              duplicateIcon = tabsNav.find('.brk-tabs-hovers__duplicate-icon');

            icon.clone().appendTo(duplicateIcon);
          }


          var tabHover = function(widthDoc) {
            var windowWidth = window.innerWidth || $(window).width();

            if (windowWidth < widthDoc) {

              tab.on('click', function () {
                var $this = $(this),
                  $icon = $this.children('[class*="fa-"]');

                if (headerStyle_1[0]) {
                  duplicateIcon.empty();
                  $icon.clone().appendTo(duplicateIcon);
                }

                if (!$this.hasClass('current')) {
                  tab.removeClass('current').eq($(this).index()).addClass('current');
                  tabItem.hide().eq($(this).index()).fadeIn();
                }
              }).unbind('mouseenter');

            } else if (windowWidth >= widthDoc) {

              tab.on('mouseenter', function () {
                var $this = $(this),
                  $icon = $this.children('[class*="fa-"]');

                if (headerStyle_1[0]) {
                  duplicateIcon.empty();
                  $icon.clone().appendTo(duplicateIcon);
                }

                if (!$this.hasClass('current')) {
                  tab.removeClass('current').eq($(this).index()).addClass('current');
                  tabItem.hide().eq($(this).index()).fadeIn();
                }
              }).unbind('click');

            }
          };

          tabHover(992);

          $(window).on('resize', function () {
            tabHover(992);
          });


          /*$(this).on('mouseleave', function () {
            tab.removeClass('current').eq(index).addClass('current');
            item.hide().eq(index).fadeIn();
          });*/
        }

        if ($(this).hasClass('brk-tabs-simple-top') || $(this).hasClass('brk-tabs-simple-bottom') || $(this).hasClass('brk-tabs-bottom-top') || $(this).hasClass('brk-tabs-bottom-bottom') || $(this).hasClass('brk-tabs-parallax') || $(this).hasClass('brk-tabs_tabbed-filter')) {

          var _ = $(this),
            nav = _.find('.brk-tabs-nav'),
            tab = _.find('.brk-tab'),
            tabActive = _.find('.brk-tab.active');
          nav.append("<span class='magic-line'></span>");

          var magicLine = _.find(".magic-line");

          window.addEventListener('load', function () {
            setTimeout(function () {
              magicLineFunc(magicLine, tabActive)
            }, 500)
          });

          $(window).on('resize', function () {
            magicLineFunc(magicLine, tabActive);
          });

          tab.on('click', function () {
            if (tab.hasClass('active')) {
              var tabActive = _.find('.brk-tab.active');
              magicLine
                .width(tabActive.innerWidth())
                .css("left", tabActive.position().left)
                .data("origLeft", magicLine.position().left)
                .data("origWidth", magicLine.innerWidth());
            }
          });

          tab.on({
            mouseenter: function () {
              var el = $(this);
              var leftPos = el.position().left;
              var newWidth = el.innerWidth();

              magicLine.stop().animate({
                left: leftPos,
                width: newWidth
              });

              var tabActive = _.find('.brk-tab.active');
              if (el.hasClass('active') === false) {
                tabActive.addClass('no-hover');
              }
            },
            mouseleave: function () {
              magicLine.stop().animate({
                left: magicLine.data("origLeft"),
                width: magicLine.data("origWidth")
              });
              var tabActive = _.find('.brk-tab.active');
              tabActive.removeClass('no-hover');
            }
          });

        }

      });

      function magicLineFunc(magicLine, tabActive) {
        magicLine
          .width(tabActive.innerWidth())
          .css("left", tabActive.position().left)
          .data("origLeft", magicLine.position().left)
          .data("origWidth", magicLine.innerWidth());
      }

    }
  };


  Berserk.behaviors.tabs_slider_init = {
    attach: function (context, settings) {

      if ($('.brk-slider').length) {

        if (typeof $.fn.slick === 'undefined') {
          console.log('Waiting for the slick library');
          setTimeout(Berserk.behaviors.tabs_slider_init.attach, settings.timeout_delay, context, settings);
          return;
        }

        $(context).parent().find('.brk-slider:not(.rendered)').addClass('rendered').each(function () {
          var container   = $(this),
            carousel      = container.find('.brk-slider__items'),
            prev          = $(this).find('.brk-slider__prev'),
            next          = $(this).find('.brk-slider__next'),
            sliderControl = container.find('.brk-slider__control');

          carousel.on('init', function (event, slick, currentSlide, nextSlide) {
            var slider = $(this);
            prev.on('click', function () {
              slider.slick('slickPrev')
            });
            next.on('click', function () {
              slider.slick('slickNext')
            });
          });

          carousel.on('init reInit', function(event, slick, currentSlide, nextSlide){
            if(slick.slideCount <= slick.options.slidesToShow) {
              sliderControl.remove();
              sliderControl = '';
            }
          });

          carousel.slick({
            appendDots: sliderControl,
            responsive: [{
                breakpoint: 1024,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1,
                }
              },
              {
                breakpoint: 600,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 2
                }
              }
            ]
          });
        })

      }
    }
  }

})(jQuery);
// =================================================================================
// Dropdown effect
// =================================================================================

(function ($) {
  'use strict';

  Berserk.behaviors.buttons_js = {
    attach: function (context, settings) {

      function btn_dropdown_wrap() {
        var dropdownHeight;

        $(context).parent().find('.btn__dropdown_wrap:not(.rendered)').addClass('rendered').each(function () {
          if (!$(this).hasClass('open')) {
            $(this).css({
              'height': $(this).children('li:first-child').innerHeight(),
            });
          } else {
            dropdownHeight = 0;

            $(this).children().each(function () {
              dropdownHeight += $(this).outerHeight();
            });

            $(this).css({
              'height': dropdownHeight,
            });
          }


          $(this).on('click', function (e) {
            if (e.target !== this) {
              return;
            } else {
              dropdownHeight = 0;

              $(this).children().each(function () {
                dropdownHeight += $(this).outerHeight();
              });

              $(this).toggleClass('open');

              if (!$(this).hasClass('open')) {
                $(this).css({
                  'height': $(this).children('li:first-child').innerHeight(),
                });
              } else {
                $(this).css({
                  'height': dropdownHeight,
                });
              }
            }
          })
        });
      }

      function btn_inside_out() {
        $(context).parent().find('.btn-inside-out:not(.rendered)').addClass('rendered').each(function(){
          var 
            textTag = $(this).find(".text"),
            text = textTag.text(),
            textBefore = $(this).find(".before").text(),
            isIconRight = $(this).hasClass(".btn-icon-right");

            if(textBefore.length > text.length) {
              textTag.text(textBefore).css("min-width", function(){
                return  isIconRight ? textTag.outerWidth() + 30 : textTag.outerWidth()
              }).text(text);
            }
        });
      }

      $(window).on('load', function () {
        btn_dropdown_wrap();
        btn_inside_out();
      });


      // btn-pos
      $(context).parent().find('.btn-pos:not(.rendered)').addClass('rendered').each(function () {
        $(this).on('mouseenter', function (e) {
          var parentOffset = $(this).offset(),
            relX = e.pageX - parentOffset.left,
            relY = e.pageY - parentOffset.top;
          $(this).find('span').css({top: relY, left: relX})
        })
          .on('mouseout', function (e) {
            var parentOffset = $(this).offset(),
              relX = e.pageX - parentOffset.left,
              relY = e.pageY - parentOffset.top;
            $(this).find('span').css({top: relY, left: relX})
          })
      });


      // slide-bg-wrap
      $(context).parent().find('.slide-bg-wrap:not(.rendered)').addClass('rendered').each(function () {
        $(this).on('mouseenter', function (e) {
          var parentOffset = $(this).offset(),
            relX = e.pageX - parentOffset.left,
            relY = e.pageY - parentOffset.top;
          $(this).find('.slide-bg').css({top: relY, left: relX})
        })
          .on('mouseout', function (e) {
            var parentOffset = $(this).offset(),
              relX = e.pageX - parentOffset.left,
              relY = e.pageY - parentOffset.top;
            $(this).find('.slide-bg').css({top: relY, left: relX})
          })
      });


      $(context).parent().find('.btn-gradient:not(.rendered)').addClass('rendered').each(function () {
        var $this   = $(this),
          btnStyle  = $this.attr('style') || '',
          dataStyle = '';

        if(btnStyle) {
          $this.data('brk-btn-style', btnStyle);
          dataStyle = $this.data('brk-btn-style');
        }

        $this.on('mousemove', function (event) {
          var parentOffset = $(this).offset();
          var x = event.pageX - parentOffset.left;
          var y = event.pageY - parentOffset.top;

          $(this).attr('style', '--x:' + x + 'px;--y:' + y + 'px;' + dataStyle)
        });
      });

    }
  }

})(jQuery);
(function ($) {
  'use strict';

  $.fn.berserkforms = function (params) {
    var defaults = {
      formWrap: 'brk-form-wrap',
      formWrapActive: 'brk-form-wrap-active',
      inputLabel: 'input-label'
    },
      options = $.extend({}, defaults, params);

    var _ = this,
      i = 0;

    _.each(function () {
      var _ = $(this),
        textPlaceholder = null,
        imputId = null;

      $(this).addClass("rendered");

      if (_.attr('placeholder') !== undefined) {
        textPlaceholder = _.attr('placeholder');
      } else {
        textPlaceholder = false;
      }
      _.removeAttr('placeholder');

      if (_.attr('id') !== undefined) {
        imputId = _.attr('id');
      } else {
        imputId = 'brkin-' + i;
        _.attr('id', imputId);
      }

      _.wrap(function () {
        return '<div class="' + options.formWrap + '"></div>';
      });

      if (_.attr('readonly') === undefined) {
        if (textPlaceholder !== false) {
          _.parent().append('<label class="' + options.inputLabel + '" for="' + imputId + '">' + textPlaceholder + '</label>');
        }
      }

      if (_.val() !== '') {
        if (_.attr('readonly') === undefined) {
          _.parent().addClass(options.formWrapActive);
        }
      }

      _.on('focus', function () {
        if (_.attr('readonly') === undefined) {
          _.parent().addClass(options.formWrapActive);
        }
      });

      _.on('blur', function () {
        if (_.val() === '') {
          _.parent().removeClass(options.formWrapActive);
        }
      });

      i++;
    });

    return _;
  };
})(jQuery);

(function ($) {
  Berserk.behaviors.form_controls = {
    attach: function (context, settings) {

      var brkForms = '.brk-form-strict [type="text"]:not(.rendered), .brk-form-strict [type="search"]:not(.rendered), .brk-form-strict [type="password"]:not(.rendered), .brk-form-strict [type="email"]:not(.rendered), .brk-form-strict [type="tel"]:not(.rendered), .brk-form-strict textarea:not(.rendered)';
      $(brkForms).berserkforms();

      if (typeof $.fn.styler === 'undefined') {
        console.log('Waiting for the styler library');
        setTimeout(Berserk.behaviors.form_controls.attach, settings.timeout_delay, context, settings);
        return;
      }

      var brkSelect     = $('select'),
          wpDataTables  = $('.wpDataTables select');

      if ((brkSelect.length !== 0) && (wpDataTables.length === 0)) {
        $(context).parent().find('select:not(.rendered)').styler();
      }

      // Date
      (function () {
        var _ = $(context).parent().find('[type="date"]:not(.rendered)'),
          wrap = 'brk-form-date-wrap';

        _.each(function () {
          var _ = $(this);
          $(this).addClass("rendered");
          _.wrap(function () {
            return '<div class="' + wrap + '"></div>';
          });
        });

        _.parent().append('<span class="icon-before"><i class="fa fa-calendar" aria-hidden="true"></i></span>');

      })();


      // File
      $(context).parent().find('.brk-form [type="file"]:not(.rendered)').each(function () {
        var _ = $(this),
          wrap = 'brk-form-file-wrap',
          wrapTr = 'brk-form-file-wrap-transparent';
        
        $(this).addClass("rendered");

        if (_.attr('type') === 'file') {
          if (_.parents().hasClass('brk-form-strict')) {
            _.wrap(function () {
              return '<label class="' + wrap + '"></label>';
            });
            _.parent().append('<span class="file-info">Choose file</span><span class="icon-before"><i class="fa fa-upload" aria-hidden="true"></i></span>');
          } else if (_.parents().hasClass('brk-form-round')) {
            _.wrap(function () {
              return '<label class="' + wrap + '"></label>';
            });
            _.parent().append('<span class="file-info">Choose file</span><span class="icon-before"><i class="fal fa-upload" aria-hidden="true"></i></span>');
          } else if (_.parents().hasClass('brk-form-transparent')) {
            _.wrap(function () {
              return '<label class="' + wrapTr + '"></label>';
            });
            _.parent().append('<span class="file-info">Choose file</span><span class="icon-before"><i class="fa fa-upload" aria-hidden="true"></i></span>');
          }

        }

        _.on('change', function () {
          var file = _.val(),
            fileInfo = $('.file-info');
          file = file.replace(/\\/g, "/").split('/').pop();
          fileInfo.html(file);
        });
      });

      // checkbox
      $("body").find('.brk-form [type="checkbox"]:not(.rendered)').each(function () {
        var _ = $(this),
          wrap = 'brk-form-checkbox';
        $(this).addClass("rendered");
        if (_.attr('type') === 'checkbox') {
          _.wrap(function () {
            return '<label class="' + wrap + '"></label>';
          });

          _.parent().append('<span class="checkbox-custom"><i class="fa fa-check" aria-hidden="true"></i></span>');
        }
      });

      // radio
      $(context).parent().find('.brk-form [type="radio"]:not(.rendered)').each(function () {
        var _ = $(this),
          wrap = 'brk-form-radio';
        $(this).addClass("rendered");
        if (_.attr('type') === 'radio') {
          _.wrap(function () {
            return '<label class="' + wrap + '"></label>';
          });

          if (_.parents().hasClass('brk-form-transparent')) {
            _.parent().append('<span class="radio-custom"><i class="fa fa-check" aria-hidden="true"></i></span>');
          } else {
            _.parent().append('<span class="radio-custom"></span>');
          }

        }
      });

      $('.brk-subscribe-mail:not(.rendered)').addClass('rendered').each(function () {
        var $form = $(this);
        $form.on('submit', function (e) {
          e.preventDefault();
          var formData = $(this).serialize();
          $.getJSON('php/subscribe.php', formData, function (data) {
            var messageStatus = "<span class='brk-subscribe-message font__family-open-sans font__size-14 line__height-21 opacity-80'>" + data.status + "</span>";
            $form.append(messageStatus);
            setTimeout(function () {
              $form.find('.brk-subscribe-message').fadeOut();
              $form.trigger("reset");
            }, 3000);
          });
        });
      });


      /* --------------- Deleting placeholder focus --------------- */
      // var placeholderInput = $('input,textarea');
      // placeholderInput.on('focus', function () {
      //   $(this).data('placeholder', $(this).attr('placeholder'));
      //   $(this).attr('placeholder', '');
      // });
      // placeholderInput.on('blur', function () {
      //   $(this).attr('placeholder', $(this).data('placeholder'));
      // });
      /* ------------- End Deleting placeholder focus ------------- */

    }
  }
})(jQuery);
(function ($) {
  'use strict';

  Berserk.behaviors.media_embeds_init = {
    attach: function (context, settings) {

      // To use the Embedded Posts Plugin, or any other Social Plugin, you need
      // to add the Facebook JavaScript SDK to your website.

      function facebookSDK(d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s);
        js.id = id;
        js.src = 'https://connect.facebook.net/uk_UA/sdk.js#xfbml=1&version=v2.11';
        fjs.parentNode.insertBefore(js, fjs);
      }

      //if page has fb-element , init sdk
      var fbElement = $('.fb-video:not(.rendered)',context).addClass("rendered");
      if(fbElement.length){
        facebookSDK(document, 'script', 'facebook-jssdk');
      }

      var hostedVideo = $('.brk-hosted-video:not(.rendered)', context).addClass('rendered');
      hostedVideo.each(function (index) {
        var playButton = $(this).find('.brk-hosted-video__btn'),
          video = $(this).find('video');

        if ($(this).hasClass('brk-hosted-video_inner')) {
          playButton.attr('href', '#' + 'brk-hosted-video-' + index);
          video.attr('id', 'brk-hosted-video-' + index)
        }
      })
    }
  }
})(jQuery);

(function ($) {
  'use strict';

  Berserk.behaviors.image_map_init = {
    attach: function (context, settings) {      

      if($('.brk-image-map:not(.rendered)').length < 1) {
        return;
      }

      if (typeof $.fn.imageMapPro !== 'function') {
        console.log('Waiting for the imageMapPro library');
        setTimeout(Berserk.behaviors.image_map_init.attach, settings.timeout_delay, context, settings);
        return;
      }

      $(context).parent().find('.brk-image-map:not(.rendered)').each(function() { 
        var $this 	= $(this),
            imData	= $this.data('brk-image-map');            
    
        setTimeout(function () {
          $this.imageMapPro(imData);
        }, 100);
      }).addClass("rendered");

      var absoluteTopIM = function(){
        var absoluteTop       = $('.brk-image-map_absolute-top'),
            absoluteTopHeight = absoluteTop.height(),
            absoluteTopParent = absoluteTop.parent();

        absoluteTopParent.css('min-height', absoluteTopHeight);
      };

      $(window).on('load', function() {
        setTimeout(function () {
          absoluteTopIM();
        }, 500);
      });

      $(window).on('resize', function(){
        absoluteTopIM();
      });
    }
  }
})(jQuery); 

(function ($) {
  'use strict';

  Berserk.behaviors.footer_init = {
    attach: function (context, settings) {

      // animated footer
      var footerWraps = $('.brk-footer__wrapper:not(.rendered)', context);
      footerWraps.each(function () {
        if ($(this).hasClass('brk-footer__wrapper_animated')) {

          var wrapper = $(this),
            footer = $(this).parent(),
            prevEl = footer.prev(),
            viewportHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);

          var setFooterStyles = function () {
            footer.css('height', wrapper.outerHeight(true)).addClass('brk-footer_animated');
            prevEl
              .css('margin-bottom', wrapper.outerHeight(true))
              .css('background-color', "#fff")
              .css('position', 'relative')
              .css('z-index', '2');
          };

          if (viewportHeight >= wrapper.outerHeight(true)) {
            setFooterStyles();
          }

          $(this).on("DOMSubtreeModified", function () {
            if (wrapper.outerHeight(true) !== footer.outerHeight(true) && (viewportHeight >= wrapper.outerHeight(true))) {
              setFooterStyles();
            }
          });

          $(document).on('scroll', function(){
            if (wrapper.outerHeight(true) !== footer.outerHeight(true) && (viewportHeight >= wrapper.outerHeight(true))) {
              setFooterStyles();
            }
          });

        }
        $(this).addClass("rendered")
      });
      // animated footer end

      // Footer shop slider
      if ($('.brk-slider_shop-footer:not(.rendered)').length) {
        if (typeof $.fn.slick === 'undefined') {
          console.log('Waiting for the slick library');
          setTimeout(Berserk.behaviors.footer_init.attach, settings.timeout_delay, context, settings);
          return;
        }

        var htmlRtl = $('html').attr('dir') === 'rtl';

        var footer_slider = $('.brk-slider_shop-footer:not(.rendered)', context);
        footer_slider.each(function () {
          var nav_prev = $(this).find('.brk-slider__nav-prev');
          var nav_next = $(this).find('.brk-slider__nav-next');
          var items = $(this).find('.brk-slider__items');

          nav_prev.on('click', function () {
            items.slick("slickPrev");
          });

          nav_next.on('click', function () {
            items.slick("slickNext");
          });

          items.slick({
            accessibility: false,
            arrows: false,
            dots: false,
            slidesToShow: 2,
            slidesToScroll: 2,
            rtl: htmlRtl,
            responsive: [{
              breakpoint: 850,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            },]
          });

          $(this).addClass("rendered");
        })
      }
      //footer shop slider end 
      
    }
  };

  Berserk.behaviors.footer_scrollr_init = {
    attach: function (context, settings) {
      if($('[data-skrollr]:not(.skrollr-rendered)').length){
        if (typeof skrollr === 'undefined') {
          console.log('Waiting for the skrollr library');
          setTimeout(Berserk.behaviors.footer_scrollr_init.attach, settings.timeout_delay, context, settings);
          return;
        }

        var windowWidth = window.innerWidth || $(window).width();
        if (windowWidth >= 992) {
          $('[data-skrollr]:not(.skrollr-rendered)').addClass("skrollr-rendered");
          setTimeout(function() {
            var s = skrollr.init({forceHeight: false});
          }, 1500)
        }

      }
    }
  }

})(jQuery);

(function ($) {
  'use strict';

  Berserk.behaviors.portfolio_masonry_init = {
    attach: function (context, settings) {

      if($('.brk-grid:not(.rendered):not(.brk-grid-sorted)').length < 1){
        return;
      }

      if (typeof Isotope !== 'function') {
        console.log('Waiting for the Isotope library');
        setTimeout(Berserk.behaviors.portfolio_masonry_init.attach, settings.timeout_delay, context, settings);
        return;
      }

      var $grid = $('.brk-grid:not(.rendered):not(.brk-grid-sorted)', context).addClass("rendered");
      if ($grid.length) {
        $grid.each(function () {
          var $grid = $(this);

          var $gridCols = $grid.attr('data-grid-cols');
          var $tabletGridCols,
            $gridWidth,
            $doubleGridWidth;
          var $currentWidth = $(window).width();

          if ($grid.attr('data-grid-cols-tablet')) {
            $tabletGridCols = $grid.attr('data-grid-cols-tablet')
          }

          function setCols(windowSize) {
            if (windowSize > 992) {
              $gridWidth = 100 / $gridCols + '%';
              $doubleGridWidth = 100 / $gridCols * 2 + '%';
              $grid.find('.brk-grid__sizer').css('width', $gridWidth);
              $grid.find('.brk-grid__item').css('width', $gridWidth);
              $grid.find('.brk-grid__item_width-2').css('width', $doubleGridWidth);
            } else if (windowSize <= 992 && $tabletGridCols) {
              $gridWidth = 100 / $tabletGridCols + '%';
              $doubleGridWidth = 100 / $tabletGridCols * 2 + '%';
              $grid.find('.brk-grid__sizer').css('width', $gridWidth);
              $grid.find('.brk-grid__item').css('width', $gridWidth);
              $grid.find('.brk-grid__item_width-2').css('width', $doubleGridWidth);
            } else if (windowSize <= 992 && !$tabletGridCols) {
              $gridWidth = 100 / $gridCols + '%';
              $doubleGridWidth = 100 / $gridCols * 2 + '%';
              $grid.find('.brk-grid__sizer').css('width', $gridWidth);
              $grid.find('.brk-grid__item').css('width', $gridWidth);
              $grid.find('.brk-grid__item_width-2').css('width', $doubleGridWidth);
            }
          }

          setTimeout(function () {
            setCols($currentWidth);
          }, 300);

          $(window).on('resize', function () {
            setCols($(window).width());
          });

          var iso;
          setTimeout(function() {
            if ($("html").attr("dir") === "rtl") {
              iso = $grid.isotope({
                itemSelector: ".brk-grid__item",
                percentPosition: true,
                originLeft: false,
                masonry: {
                  columnWidth: ".brk-grid__sizer",
                  rowHeight: ".brk-grid__sizer"
                },
                getSortData: {
                  category_data: '[data-category]',
                  name: '.brk-simple-card__title',
                  category_name: '.brk-simple-card__category',
                }
              });
            }
            else {
              iso = $grid.isotope({
                itemSelector: ".brk-grid__item",
                percentPosition: true,
                masonry: {
                  columnWidth: ".brk-grid__sizer",
                  rowHeight: ".brk-grid__sizer"
                },
                getSortData: {
                  category_data: '[data-category]',
                  name: '.brk-simple-card__title',
                  category_name: '.brk-simple-card__category',
                }
              });
            }  
          },400);
          // each filter count


          $('.brk-filters:not(.rendered)',context).find('.brk-filters__item').each(function () {
            var filterElem = $(this),
                filterName = filterElem.attr('data-filter'),
                elemCount;

            if (filterName && filterName !== '*') {
              elemCount = $grid.find(filterName).length;
              filterElem.find('.brk-filters__count').html(elemCount);
            }
            if (filterName && filterName === '*') {
              elemCount = $grid.find('.brk-grid__item').length;
              filterElem.find('.brk-filters__count').html(elemCount);
            }
          });

          $(".brk-filters:not(.rendered)", context).on("click", "li", function () {
            var filterValue = $(this).attr("data-filter");
            iso.isotope({
              filter: filterValue
            });
          });

          $(".brk-filters:not(.rendered)", context).each(function (i, buttonGroup) {
            var $buttonGroup = $(buttonGroup);
            $buttonGroup.on("click", "li", function () {
              $buttonGroup.find(".active").removeClass("active");
              $(this).addClass("active");
            });
          });

          $(".brk-filters:not(.rendered)", context).addClass('rendered');


          $(context).parent().find('.brk-load-button:not(.rendered)').addClass('rendered').each(function () {

            $(this).on('click', function () {
              $.ajax({
                url: 'ajax-portfolio-masonry.html',
                type: 'GET',
                beforeSend:function(xhr){},
                success:function(data){
                  var $content = $(data);
                  $grid.append( $content );
                  setCols($currentWidth);
                  $grid.isotope( 'appended', $content );
                }
              });
            })

          })

        });

      }
    }
  };
})(jQuery);

(function ($) {
  'use strict';

  Berserk.behaviors.progressbar_init = {
    attach: function (context, settings) {

      if($('.progress__bar:not(.rendered), .progress__curve:not(.rendered), .progress__count:not(.rendered)').length < 1){
        return;
      }

      var progressBar = $(".progress__bar:not(.rendered)", context).addClass("rendered");
      if (progressBar.length) {
        $(document).on("scroll", function () {
          progressBar.not('.scrolled').each(function () {
            var position = $(this).offset().top;
            var item_offset = $(window).scrollTop() + $(window).height();
            if (item_offset > position) {
              var item = $(this);
              var start = item.attr("data-valuemin");
              var end = item.attr("data-valuenow");
              item.css({
                width: end + '%'
              });
              item.parent().parent().find('.progress__bar-counter')
                .removeClass("hide")
                .counter({
                  start: start,
                  end: end,
                  time: 0.7,
                  step: 50
                });
              item.addClass('scrolled');

              // Stripe progress bar
              var ps = $(".progress__stripe");
              if (ps.length) {
                ps.each(function () {
                  var it = $(this);
                  setTimeout(function () {
                    var ps_counter = it.find(".progress__bar-counter");
                    var ps_progress_w = it.find(".progress").width();
                    var ps_bar_w = it.find(".progress__bar").width();
                    var ps_counter_w = ps_counter.width();
                    if (ps_bar_w > ps_progress_w / 2 - 10) {
                      ps_counter.css({
                        "color": "#fff"
                      });
                    }
                  }, 1000);

                });
              }
            }
          });
        }).trigger("scroll");
      }

      // Curve progress bar
      var p_curve = $(".progress__curve:not(.rendered)", context).addClass("rendered");
      if (p_curve.length) {
        $(window).on("resize", function () {
          p_curve.each(function () {
            var it = $(this);
            var p_curve_perc = it.data("value") / 100;
            var path = it.find("path");
            var svg_wrap_w = it.width();
            var svg_wrap_h = it.height();
            var svg_wrap_w_alt = 65 * svg_wrap_w / 100;
            var svg_wrap_curve_point = 90 * svg_wrap_w / 100;

            path.attr("d", "M 0 " + svg_wrap_h + " L " + svg_wrap_w_alt + " " + svg_wrap_h + " Q " + svg_wrap_curve_point + " " + svg_wrap_h + " " + svg_wrap_w + " 0");
          });
        });
        $(window).on("scroll", function () {
          p_curve.not('.scrolled').each(function () {
            var pos = $(this).offset().top;
            var item_off = $(window).scrollTop() + $(window).height();
            var it = $(this);
            var p_curve_perc = it.data("value") / 100;
            var path = it.find("path");
            if (item_off > pos) {
              path.css({
                "stroke-dashoffset": 153 - (p_curve_perc * 153) + "%",
              });
              it.addClass('scrolled');
            }
          });
        });
        window.addEventListener('load', function () {
          setTimeout(function () {
            $(window).trigger("resize");
          }, 300)
        })
      }

      // Count progress bar
      var p_count = $(".progress__count:not(.rendered)", context).addClass("rendered");
      if (p_count.length) {
        $(window).on("scroll", function () {
          p_count.not('.scrolled').each(function () {
            var pos = $(this).offset().top;
            var item_off = $(window).scrollTop() + $(window).height();
            var it = $(this);
            var count_value = parseInt(it.find(".count-value").text());
            var count_amount = parseInt(it.find(".count-amount").text());
            var pc_bar = it.find(".progress__bar");
            var pc_bar_w = count_value * 100 / count_amount + "%";
            if (item_off > pos) {
              pc_bar.css({
                width: pc_bar_w
              });
              it.addClass('scrolled');
            }
          });
        });
      }

    }
  }
})(jQuery);
(function ($) {
  'use strict';

  Berserk.behaviors.portfolio_rows_init = {
    attach: function (context, settings) {

      if($('.brk-grid-fitrows:not(.rendered), .brk-simple-card-2:not(.rendered)').length < 1){
        return;
      }

      if (typeof Isotope !== 'function' && typeof $.fn.brk_hover3d !== 'function' || typeof anime !== 'function') {
        console.log('Waiting for the Isotope || brk-hover-3d || anime library');
        setTimeout(Berserk.behaviors.portfolio_rows_init.attach, settings.timeout_delay, context, settings);
        return;
      }

      var $grid = $(".brk-grid-fitrows:not(.rendered)").addClass("rendered");
      $grid.each(function () {
        var $gridCols = $grid.attr('data-grid-cols');
        var $tabletGridCols,
          $gridWidth,
          $doubleGridWidth,
          iso;
        var $currentWidth = window.innerWidth || $(window).width();
        var $gridHeight = $grid.attr('data-grid-height') + 'px';


        if ($grid.attr('data-grid-cols-tablet')) {
          $tabletGridCols = $grid.attr('data-grid-cols-tablet')
        }

        var setCols = function (windowSize) {
          if (windowSize > 992) {
            $gridWidth = 100 / $gridCols + '%';
            $doubleGridWidth = 100 / $gridCols * 2 + '%';
            $grid.find('.brk-grid-fitrows__item').css('width', $gridWidth);
            $grid.find('.brk-grid-fitrows__item_width-2').css('width', $doubleGridWidth);
          } else if (windowSize <= 992 && $tabletGridCols) {
            $gridWidth = 100 / $tabletGridCols + '%';
            $doubleGridWidth = 100 / $tabletGridCols * 2 + '%';
            $grid.find('.brk-grid-fitrows__item').css('width', $gridWidth);
            $grid.find('.brk-grid-fitrows__item_width-2').css('width', $doubleGridWidth);
          } else if (windowSize <= 992 && !$tabletGridCols) {
            $gridWidth = 100 / $gridCols + '%';
            $doubleGridWidth = 100 / $gridCols * 2 + '%';
            $grid.find('.brk-grid-fitrows__item').css('width', $gridWidth);
            $grid.find('.brk-grid-fitrows__item_width-2').css('width', $doubleGridWidth);
          }
        };
        setCols($currentWidth);

        $(window).on('resize', function () {
          setCols(window.innerWidth || $(window).width());
        });


        $grid.find('.brk-grid-fitrows__item').css('height', $gridHeight);

        setTimeout(function () {
          iso = new Isotope($grid.get(0), {
            itemSelector: ".brk-grid-fitrows__item",
            percentPosition: true
          });
        }, 400)
      });

      $(".brk-simple-card-2:not(.rendered)", context)
        .brk_hover3d("animation2", {
          imgWrapper: ".brk-simple-card-2__animation-wrapper",
          caption: ".brk-simple-card-2__info"
        })
        .addClass("rendered");

    }
  };
})(jQuery);
(function ($) {
  'use strict';

  Berserk.behaviors.steps_init = {
    attach: function (context, settings) {

      var tabs =  $(context).parent().find('.tabs').addClass("rendered");
      if (tabs.length) {
        tabs.each(function () {
          var it = $(this);
          var steps_wrap_main = it.parents(".steps__wrapper-main");
          var steps_wrap_light = it.parents(".steps__wrapper-light");
    
          function steps_wrap_main_func() {
            var steps_wrap = steps_wrap_main.width();
            var steps_count = steps_wrap_main.find("li").length - 1;
            var steps_compl_count = steps_wrap_main.find("li.complete").length - 1;
            var steps_prog = steps_wrap_main.find(".steps__progress");
            var steps_w = steps_compl_count * 100 / steps_count;
            steps_prog.css({width: steps_w + "%",});
          }
    
          if (steps_wrap_main.length) {
            steps_wrap_main_func();
          }
          $(window).on("resize", steps_wrap_main_func);
    
          function steps_wrap_light_func() {
            var sw_light_compl = steps_wrap_light.find(".complete");
            var steps_prog = steps_wrap_light.find(".steps__progress");
            var totalWidth = 0;
            sw_light_compl.each(function () {
              var it = $(this);
              totalWidth += parseInt(it.width(), 10);
            });
            steps_prog.css({width: totalWidth,});
          }

          setTimeout(function () {
            if (steps_wrap_light.length) {
              steps_wrap_light_func();
            }
          },300);

          $(window).on("resize", steps_wrap_light_func);
    
          var tabsgroup = it.parent().siblings(".tabgroup");
          var tab_links = it.find(">li>a");
          tabsgroup.find(">div").hide();
          tabsgroup.find($(it.find(">li>a.active").attr("href"))).show();
          tab_links.on("click", function (e) {
            
            var $this = $(this);
            var tabgroup = "#" + $this.parents(".tabs").data("tabgroup");
            var others = $this.closest("li").siblings().children("a");
            var target = $this.attr("href") || null;
            
            if(target === null || target.length === 0 || target[0] === "#"){
              e.preventDefault();
              tab_links.parent().removeClass("complete");
              $this.parent().prevAll().addClass("complete");
              $this.parent().nextAll().removeClass("complete");
              $this.parent().addClass("complete");
      
              others.removeClass("active");
              $this.addClass("active");
              $(tabgroup).children("div").hide();
              $(target).show();
      
              if (steps_wrap_main.length) {
                steps_wrap_main_func();
              }
              if (steps_wrap_light.length) {
                steps_wrap_light_func();
              }
            }
          });
        });
      }
    
    }
  }

})(jQuery);
(function ($) {
  'use strict';

  Berserk.behaviors.parallax_video_init = {
    attach: function (context, settings) {

      if($('.vimeo-video:not(.rendered), .player-yt:not(.rendered), .player-vimeo:not(.rendered)').length < 1){
        return;
      }

      if (typeof jQuery.mbYTPlayer === 'undefined' || typeof jQuery.vimeo_player === 'undefined') {
        console.log('Waiting for the MBYTP library');
        setTimeout(Berserk.behaviors.parallax_video_init.attach, settings.timeout_delay, context, settings);
        return;
      }

      function setVimeoVolume() {
        var player = [];
        $('.vimeo-video:not(.rendered) iframe').each(function () {
          player[i] = new Vimeo.Player($(this));
          player[i].setVolume(0);
        });
        $('.vimeo-video').addClass("rendered");
      }

      setVimeoVolume();
      
      window.addEventListener('load', function () {
        $(function () {
          $('.player-yt:not(.rendered)', context).addClass("rendered").each(function () {
            $(this).YTPlayer($(this).data('options'));

            $(this)
              .on('YTPPlay', function () {
                $(this).find('.mb_YTPPlaypause').addClass('active')
              })
              .on('YTPPause', function () {
                $(this).find('.mb_YTPPlaypause').removeClass('active')
              })
              .on('YTPMuted', function () {
                $(this).find('.mb_YTPMuteUnmute').removeClass('active')
              })
              .on('YTPUnmuted', function () {
                $(this).find('.mb_YTPMuteUnmute').addClass('active')
              });
          });
        });

        $(function () {
          $('.player-vimeo:not(.rendered)', context).addClass("rendered").each(function () {
            $(this).vimeo_player($(this).data('options'));

            $(this)
              .on('VPPlay', function () {
                $(this).find('.vimeo_player_pause').addClass('active');
              })
              .on('VPPause', function () {
                $(this).find('.vimeo_player_pause').removeClass('active');
              })
              .on('VPMuted', function () {
                $(this).find('.vimeo_player_muteUnmute').removeClass('active')
              })
              .on('VPUnmuted', function () {
                $(this).find('.vimeo_player_muteUnmute').addClass('active')
              });
          });
        });
      })

    }
  }
})(jQuery);
// var vimeoAPIUrl = new url

(function ($) {
  'use strict';

  Berserk.behaviors.counter_init = {
    attach: function (context, settings) {

      var counter = $(".counter:not(.rendered)", context); 
      
      if (counter.length) {
        counter.each(function () {
          var it = $(this);
          var countMax = it.attr("data-count-max");
          var countTo = it.attr("data-count-to");
          var countDur = parseInt(it.attr("data-count-speed"));
          var countText = it.attr("data-count-from");

          // Counter filled
          if (it.parents(".counter__wrapper-filled").length) {
            var countCircle = it.parents(".counter__wrapper-filled").find("svg circle");
            var countTri = it.parents(".counter__wrapper-filled").find(".counter-tri");
            var countVal = countTo * 100 / countMax;
            var countTriVal = countVal * 360 / 100;
            var circleStroke = 584 - (countVal * 584 / 100);
          } // end

          it.waypoint({
            handler: function () {
              if (!it.hasClass("init")) {

                // Counter filled
                if (it.parents(".counter__wrapper-filled").length) {
                  countCircle.css({
                    "stroke-dashoffset": circleStroke,
                    "transition": "stroke-dashoffset " + countDur / 1000 + "s ease",
                  });
                }
                if (it.parents(".counter__wrapper-filled").length) {
                  countTri.css({
                    "transform": "rotate(" + countTriVal + "deg)",
                    "transition": "all " + countDur / 1000 + "s ease",
                  });
                }
                // end

                $({
                  countNum: countText
                }).animate({
                  countNum: countTo
                }, {
                  duration: countDur,
                  easing: "linear",
                  step: function () {
                    it.html(Math.floor(this.countNum));
                    it.html(function (i, v) {
                      return v.replace(/(\d)/g, "<span>$1</span>");
                    });
                  },
                  complete: function () {
                    it.html(this.countNum);
                    it.html(function (i, v) {
                      return v.replace(/(\d)/g, "<span>$1</span>");
                    });
                    it.addClass("init");
                  }
                });
              }
            },
            offset: "100%"
          });
          $(this).addClass("rendered");
        });
      }
    }
  }
})(jQuery);
(function ($) {
  'use strict';

  Berserk.behaviors.sliders_page_init = {
    attach: function (context, settings) {

      if($('.brk-carousel_project:not(.rendered)').length < 1){
        return;
      }

      if (typeof  $.fn.slick === 'undefined') {
        console.log('Waiting for the slick library');
        setTimeout(Berserk.behaviors.sliders_page_init.attach, settings.timeout_delay, context, settings);
        return;
      }

      $(context).parent().find('.brk-carousel_project:not(.rendered)').addClass('rendered').each(function () {
        var $this     = $(this),
          carousel    = $this.find(".brk-carousel__items"),
          currentStep = $this.find(".brk-carousel__current"),
          stepsCount  = $this.find(".brk-carousel__count"),
          prevBtn     = $this.find(".brk-carousel__btn-prev"),
          nextBtn     = $this.find(".brk-carousel__btn-next");

        prevBtn.on('click', function () {
          carousel.slick("slickPrev");
        });

        nextBtn.on('click', function () {
          carousel.slick("slickNext");
        });

        carousel.on("init reInit", function (event, slick, currentSlide, nextSlide) {
          stepsCount.text(slick.slideCount);
          currentStep.text(slick.currentSlide + 1);
        });

        carousel.on("init afterChange", function (event, slick, currentSlide, nextSlide) {
          currentStep.text(slick.currentSlide + 1);

          if (slick.currentSlide === 0) {
            prevBtn.addClass("brk-carousel__btn-prev_disabled")
          } else {
            prevBtn.removeClass("brk-carousel__btn-prev_disabled")
          }


          if (slick.currentSlide + 1 === slick.slideCount) {
            nextBtn.addClass("brk-carousel__btn-next_disabled")
          } else {
            nextBtn.removeClass("brk-carousel__btn-next_disabled")
          }

        });

        carousel.slick({
          dots: false,
          prevArrow: false,
          nextArrow: false,
          infinite: false
        });
      });

    }
  };
})(jQuery);

(function ($) {
  'use strict';

  Berserk.behaviors.ranged_slider_init = {
    attach: function (context, settings) {

      if($('#slider:not(.rendered)').length < 1){
        return;
      }

      if (typeof $.fn.slider === 'undefined') {
        console.log('Waiting for the slider library');
        setTimeout(Berserk.behaviors.ranged_slider_init.attach, settings.timeout_delay, context, settings);
        return;
      }

      $(context).parent().find('#slider:not(.rendered)').addClass('rendered').slider({
        range: true,
        min: 1990,
        max: 2018,
        step: 1,
        values: [1996, 2011],
        slide: function (event, ui) {
          for (var i = 0; i < ui.values.length; ++i) {
            $("input.sliderValue[data-index=" + i + "]").val(ui.values[i]);
          }
        }
      });

      $("input.sliderValue").on('change', function () {
        var $this = $(this);
        $("#slider").slider("values", $this.data("index"), $this.val());
      });

    }
  };

  function filterTrigger() {
    $('#filter-trigger').each(function () {
      var $this = $(this);

      $this.on('click', function () {
        $(this).toggleClass('closed');
        $(this).next().toggleClass('closed');
      });
    });
  }

  function categoriesListTrigger() {
    $('button#categories-list-trigger').on('click', function () {
      var filtersContainer = this.parentNode.parentNode;
      filtersContainer.querySelector('#filter-trigger').classList.add('closed');
      filtersContainer.querySelector('.filter').classList.add('closed');
    });
  }

  $(window).on('load', function(){
    filterTrigger();
    categoriesListTrigger();
  });

})(jQuery);

(function ($) {
  'use strict';

  Berserk.behaviors.info_box_init = {
    attach: function (context, settings) {

      var wave_hover = $(context).parent().find(".wave-hover:not(.rendered)").addClass("rendered");
      if (wave_hover.length) {
        wave_hover.each(function () {
          var it = $(this),
            wh_delay_attr = it.data("wh-delay") * 1000,
            wh_speed_attr = it.data("wh-speed") * 1000,
            wh_delay, wh_speed;

          wh_delay = !isNaN(parseFloat(wh_delay_attr)) ? wh_delay_attr : 1000;

          wh_speed = !isNaN(parseFloat(wh_speed_attr)) ? wh_speed_attr : 1000;

          var wh_repeat = it.data("wh-repeat");
          var wh = it.find(".wpb_column");
          var wh_len = wh.length;
          var wh_num = 0;

          function startCycle() {
            var time_it = setInterval(function () {
              var wh_cur = wh.eq(wh_num);
              wh.removeClass("current");
              wh_cur.addClass("current");
              wh_num++;
              if (wh_num > wh_len) {
                wh_num = 0;
                clearInterval(time_it);
              }
            }, wh_speed);
          }

          if (wh_repeat === true) {
            setInterval(function () {
              startCycle();
            }, wh_delay + wh_len * wh_speed);
          }
          it.waypoint({
            handler: function (direction) {
              startCycle();
            },
            offset: "70%"
          });
        });
      }

      if ($(context).parent().find(".info-box__wrapper-icon:not(.rendered)").length) {
        $(".info-box__wrapper-icon").each(function () {
          $(this).addClass("rendered");
          var it = $(this);
          var it_svg = it.find("svg").clone();
          it.find(".icon-after").append(it_svg);
        });
      }
    }
  }
})(jQuery);
(function ($) {
  'use strict';

  Berserk.behaviors.tiles_angle_init = {
    attach: function (context, settings) {

      if($('.brk-sc-tiles-angle:not(.rendered)').length < 1) {
        return;
      }

      var windowWidth = window.innerWidth || $(window).width();

      if (windowWidth >= 992) {

        $(context).parent().find('.brk-sc-tiles-angle:not(.rendered)').addClass('rendered').each(function() {
          var $this           = $(this),
              loading         = '.brk-sc-tiles-angle__loading',
              angleTop        = '.brk-sc-tiles-angle__top',
              angleBottom     = '.brk-sc-tiles-angle__bottom',
              $angleTopObj    = $this.find(angleTop),
              $angleBottomObj = $this.find(angleBottom);

          $angleTopObj.on({
            mouseenter: function () {
              $(this).siblings(angleBottom).addClass('no-active');
              $(this).siblings(loading).addClass('top-active');
            },
            mouseleave: function () {
              $(this).siblings(angleBottom).removeClass('no-active');
              $(this).siblings(loading).removeClass('top-active');
            }
          });

          $angleBottomObj.on({
            mouseenter: function () {
              $(this).siblings(angleTop).addClass('no-active');
              $(this).siblings(loading).addClass('bottom-active');
            },
            mouseleave: function () {
              $(this).siblings(angleTop).removeClass('no-active');
              $(this).siblings(loading).removeClass('bottom-active');
            }
          });

        })
      }
    }
  }

})(jQuery);
(function ($) {
  'use strict';

  Berserk.behaviors.blog__page_init = {
    attach: function (context, settings) {

    }
  }
})(jQuery);