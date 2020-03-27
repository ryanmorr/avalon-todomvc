(function(){'use strict';function a(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a}function b(a,b){var c=Object.keys(a);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(a);b&&(d=d.filter(function(b){return Object.getOwnPropertyDescriptor(a,b).enumerable})),c.push.apply(c,d)}return c}function c(c){for(var d,e=1;e<arguments.length;e++)d=null==arguments[e]?{}:arguments[e],e%2?b(Object(d),!0).forEach(function(b){a(c,b,d[b])}):Object.getOwnPropertyDescriptors?Object.defineProperties(c,Object.getOwnPropertyDescriptors(d)):b(Object(d)).forEach(function(a){Object.defineProperty(c,a,Object.getOwnPropertyDescriptor(d,a))});return c}function d(a,b){return b||(b=a.slice(0)),Object.freeze(Object.defineProperties(a,{raw:{value:Object.freeze(b)}}))}/*! @ryanmorr/avalon v0.1.0 | https://github.com/ryanmorr/avalon */function f(b){"@babel/helpers - typeof";return f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(b){return typeof b}:function(b){return b&&"function"==typeof Symbol&&b.constructor===Symbol&&b!==Symbol.prototype?"symbol":typeof b},f(b)}function g(c,a){if(!(c instanceof a))throw new TypeError("Cannot call a class as a function")}function i(e,a){for(var b,f=0;f<a.length;f++)b=a[f],b.enumerable=b.enumerable||!1,b.configurable=!0,"value"in b&&(b.writable=!0),Object.defineProperty(e,b.key,b)}function j(d,a,b){return a&&i(d.prototype,a),b&&i(d,b),d}function o(c,a){return p(c)||q(c,a)||r()}function p(b){if(Array.isArray(b))return b}function q(i,a){if(Symbol.iterator in Object(i)||"[object Arguments]"===Object.prototype.toString.call(i)){var b,j=[],c=!0,k=!1;try{for(var l,m=i[Symbol.iterator]();!(c=(l=m.next()).done)&&(j.push(l.value),!(a&&j.length===a));c=!0);}catch(c){k=!0,b=c}finally{try{c||null==m["return"]||m["return"]()}finally{if(k)throw b}}return j}}function r(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function s(c){var a=e.get(this);return a||(a=new Map,e.set(this,a)),1<(a=ia(this,a.get(c)||(a.set(c,a=function(a){for(var b,e,h=1,l="",o="",p=[0],q=function(b){1===h&&(b||(l=l.replace(/^\s*\n\s*|\s*\n\s*$/g,"")))?p.push(0,b,l):3===h&&(b||l)?(p.push(3,b,l),h=2):2===h&&"..."===l&&b?p.push(4,b,0):2===h&&l&&!b?p.push(5,0,!0,l):5<=h&&((l||!b&&5===h)&&(p.push(h,0,l,e),h=6),b&&(p.push(h,b,0,e),h=6)),l=""},k=0;k<a.length;k++){k&&(1===h&&q(),q(k));for(var r=0;r<a[k].length;r++)b=a[k][r],1===h?"<"===b?(q(),p=[p],h=3):l+=b:4===h?"--"===l&&">"===b?(h=1,l=""):l=b+l[0]:o?b===o?o="":l+=b:"\""===b||"'"===b?o=b:">"===b?(q(),h=1):h&&("="===b?(h=5,e=l,l=""):"/"===b&&(5>h||">"===a[k][r+1])?(q(),3===h&&(p=p[0]),h=p,(p=p[0]).push(2,0,h),h=0):" "===b||"\t"===b||"\n"===b||"\r"===b?(q(),h=2):l+=b),3===h&&"!--"===l&&(h=4,p=p[0])}return q(),p}(c)),a),arguments,[])).length?a:a[0]}/*! carbon v0.1.0 | https://github.com/ryanmorr/carbon */function u(a){return u="function"==typeof Symbol&&"symbol"==f(Symbol.iterator)?function(a){return f(a)}:function(a){return a&&"function"==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":f(a)},u(a)}function v(a){return v="function"==typeof Symbol&&"symbol"===u(Symbol.iterator)?function(a){return u(a)}:function(a){return a&&"function"==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":u(a)},v(a)}function w(a){return x(a)||y(a)||z()}function x(b){if(Array.isArray(b)){for(var c=0,d=Array(b.length);c<b.length;c++)d[c]=b[c];return d}}function y(a){if(Symbol.iterator in Object(a)||"[object Arguments]"===Object.prototype.toString.call(a))return Array.from(a)}function z(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function A(b){for(var c,d=0;d<b.length;)c=b[d],Array.isArray(c)?0<c.length?(c.unshift(d,1),b.splice.apply(b,c),c.splice(0,2)):b.splice(d,1):d++;return b}function B(b){var c="";if("string"==typeof b)return b;if(Array.isArray(b)&&0<b.length)for(var d,f=0,g=b.length;f<g;f++)""!==(d=B(b[f]))&&(c+=(c&&" ")+d);else for(var j in b)b[j]&&(c+=(c&&" ")+j);return c}function C(){for(var c=arguments.length,d=Array(c),a=0;a<c;a++)d[a]=arguments[a];return Object.assign.apply(Object,[{}].concat(d))}function E(a){return a.attributes&&a.attributes.key||null}function F(a){return null!=a&&"boolean"!=typeof a}function G(a,b){return a.nodeName===b.nodeName&&E(a)===E(b)}function H(a,b){return a.nodeType===b.nodeType&&(a.nodeType!==3||a.text===b.text)&&a.nodeName===b.nodeName}function I(e,g,a){for(var b={},c=g;c<=a;++c){var h=e[c],i=h&&E(h);null!=i&&(b[i]=c)}return b}function J(b){var c=v(b);return"boolean"===c?null:"string"===c||"number"===c?M(b):Array.isArray(b)?A(b).reduce(function(b,c){return F(c)&&b.push(J(c)),b},[]):b}function K(e){return 3===e.nodeType?M(e.data,e):1===e.nodeType?L(e.nodeName.toLowerCase(),Array.from(e.attributes).reduce(function(f,a){var b=a.name,c=a.value;return"style"!==b&&(f[b]=c),"key"===b&&e.removeAttribute("key"),f},{}),Array.from(e.childNodes).map(K),e):void 0}function L(d,e,a){var b=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return{nodeType:1,node:b,nodeName:d,attributes:e,children:a}}function M(b){var c=1<arguments.length&&void 0!==arguments[1]?arguments[1]:null;return{nodeType:3,node:c,text:b}}function N(b){var c,e=!!(1<arguments.length&&void 0!==arguments[1])&&arguments[1];if(b.nodeType===3)c=document.createTextNode(b.text);else{var f=b.nodeName;e=e||"svg"===f,c=e?document.createElementNS("http://www.w3.org/2000/svg",f):document.createElement(f);var a=b.attributes;Object.keys(a).forEach(function(d){return O(c,d,null,a[d],e)}),b.children.forEach(function(a){return c.appendChild(N(a,e))})}return b.node=c,c}function O(b,d,g,h){var i=!!(4<arguments.length&&void 0!==arguments[4])&&arguments[4];if("key"!==d&&"children"!==d)if(i?"className"===d&&(d="class"):"class"===d&&(d="className"),("class"===d||"className"===d)&&(h=B(h)),"style"!==d)d.startsWith("on")&&("function"==typeof g||"function"==typeof h)?(d=d.slice(2).toLowerCase(),h&&b.addEventListener(d,h),g&&b.removeEventListener(d,g)):!i&&"list"!==d&&"form"!==d&&d in b?b[d]=null==h?"":h:null==h||!1===h?b.removeAttribute(d):"function"!=typeof h&&b.setAttribute(d,h);else if("string"==typeof h)b.style.cssText=h;else for(var j in C(h,g)){var e=null==h||null==h[j]?"":h[j];j.includes("-")?b.style.setProperty(j,e):b.style[j]=e}}function P(e,f,a,b){for(var c,g=0,h=f.length-1,i=f[0],j=f[h],k=0,l=a.length-1,m=a[0],n=a[l];g<=h&&k<=l;)if(!i)i=f[++g];else if(!j)j=f[--h];else if(G(i,m))Q(e,i,m,b),i=f[++g],m=a[++k];else if(G(j,n))Q(e,j,n,b),j=f[--h],n=a[--l];else if(G(i,n))Q(e,i,n,b),e.insertBefore(i.node,j.node.nextSibling),i=f[++g],n=a[--l];else if(G(j,m))Q(e,j,m,b),e.insertBefore(j.node,i.node),j=f[--h],m=a[++k];else{c||(c=I(f,g,h));var s=E(m),t=s?c[s]:null;if(null==t)e.insertBefore(N(m,b),i.node),m=a[++k];else{var o=f[t];Q(e,o,m,b),f[t]=void 0,e.insertBefore(o.node,i.node),m=a[++k]}}if(g>h)for(var p=a[l+1]?a[l+1].node:null,q=k;q<=l;q++)e.insertBefore(N(a[q],b),p);else if(k>l)for(var u,D=g;D<=h;D++)u=f[D],u&&u.node&&e.removeChild(u.node);return a}function Q(d,e,a){var b=!!(3<arguments.length&&void 0!==arguments[3])&&arguments[3];if(e===a)return null==e?null:e.node;if(null==e)return d.appendChild(N(a,b));var i=e.node;if(null==a)return d.removeChild(i)&&null;if(3===e.nodeType&&3===a.nodeType)e.text!==a.text&&(i.data=a.text);else if(!H(a,e)){var j=N(a,b);d.replaceChild(j,i),i=j}else{b=b||"svg"===a.nodeName;// const activeElement = document.activeElement;
var l=e.attributes,f=a.attributes;for(var g in C(f,l))("value"==g||"selected"===g||"checked"===g?i[g]:l[g])!==f[g]&&O(i,g,l[g],f[g],b);P(i,e.children,a.children,b)}return a.node=i,i}function R(b,d){for(var e=arguments.length,f=Array(2<e?e-2:0),g=2;g<e;g++)f[g-2]=arguments[g];if(!d||d.nodeType||"function"==typeof d.concat){var h;f=(h=[]).concat.apply(h,[d||[]].concat(w(f))),d={}}return L(b,d||{},J(f))}function h(b,c){c=J(c);var f=b.vdom||(0<b.childNodes.length?Array.from(b.childNodes).map(K):null),g=Array.isArray(f),i=Array.isArray(c);if(b.vdom=c,g||i){f=(g?f:[f]).filter(F),c=(i?c:[c]).filter(F);var d=P(b,f,c);return 0===d.length?null:1===d.length?d[0].node:d.map(function(a){return a.node})}return Q(b,f,c)}/*! @ryanmorr/schedule-render v2.0.1 | https://github.com/ryanmorr/schedule-render */function k(){for(ha=null;0<n.length;)n.shift().render()}function l(b){return new Promise(function(c,a){ha||(ha=requestAnimationFrame(k)),n.push({render:function(){return c(b())},cancel:a})})}function m(b){return!Number.isNaN(parseFloat(b))&&isFinite(b)}function D(b){return"true"===b||"false"!==b&&("undefined"===b?null:m(b)?+b:b)}function S(c){if(!c||"object"!==f(c))return!1;var a=Object.getPrototypeOf(c);return null===a||a===Object.getPrototypeOf({})}function T(c){return null==c||Object.isFrozen(c)?c:(Object.freeze(c),Array.isArray(c)?c.forEach(function(b){return T(b)}):S(c)&&Object.getOwnPropertyNames(c).forEach(function(a){return T(c[a])}),c)}function U(){for(var d=arguments.length,a=Array(d),b=0;b<d;b++)a[b]=arguments[b];return T(Object.assign.apply(Object,[Object.create(null)].concat(a)))}function V(b){return"/"===b.charAt(0)}function W(d){var a=new URL(d,window.location.toString()),b=window.location;return b.protocol===a.protocol&&b.hostname===a.hostname&&(b.port===a.port||""===b.port&&(80==a.port||443==a.port))}function X(b){return b=b.trim(),"/"===b?b:b.replace(t,"")}function Y(e,a,b){if(S(e))for(var c in e)b(c,e[c]);else b(e,a)}function Z(h,c){if(h===c)return!0;if(null===h||null===c)return!1;var a=Object.prototype.toString.call(h),b=Object.prototype.toString.call(c);if(a!=b)return!1;switch(a){case"[object Date]":case"[object Number]":return+h==+c||+h!=+h&&+c!=+c;case"[object Function]":case"[object String]":case"[object Boolean]":return""+h==""+c;case"[object Array]":if(h.length!=c.length)return!1;for(var d=0;d<h.length;d++)if(!Z(h[d],c[d]))return!1;return!0;case"[object Object]":{var i=Object.keys(h),f=Object.keys(c);return i.length==f.length&&i.every(function(a){return Z(h[a],c[a])})}default:return!1;}}function $(e){var f=[],a=e.split("/").map(function(b){if(!b)return b;var a=b.length,c=b.charCodeAt(0);if(42===c)return f.push("wildcard"),"/(.*)";if(58===c){var d=63===b.charCodeAt(a-1);return f.push(b.substring(1,d?a-1:a)),d?"(?:/([^/]+?))?":"/([^/]+?)"}return"/"+b}),b=new RegExp("^"+a.join("")+"/?$","i");return function(d){var a=b.exec(d);return a&&a[0]?a.slice(1).map(decodeURI).map(D).reduce(function(b,a,c){return b[f[c]]=a,b},{}):null}}function _(){var a=d(["<button class=\"clear-completed\" onclick=",">Clear completed</button>"]);return _=function(){return a},a}function aa(){var a=d(["\n            <footer class=\"footer\">\n                <span class=\"todo-count\">\n                    <strong>","</strong> "," left\n                </span>\n                ","\n            </footer>\n        "]);return aa=function(){return a},a}function ba(){var a=d(["\n                                <input\n                                    class=\"edit\"\n                                    value=","\n                                    onblur=","\n                                    oninput=","\n                                    onkeydown=","\n                                />\n                            "]);return ba=function(){return a},a}function ca(){var a=d(["\n                        <li class="," key=",">\n                            <div class=\"view\">\n                                <input class=\"toggle\" type=\"checkbox\" checked="," onchange="," />\n                                <label ondblclick=",">","</label>\n                                <button class=\"destroy\" onclick="," />\n                            </div>\n                            ","\n                        </li>\n                    "]);return ca=function(){return a},a}function da(){var a=d(["\n            <section class=\"main\">\n                <input\n                    id=\"toggle-all\"\n                    class=\"toggle-all\"\n                    type=\"checkbox\"\n                    onChange=","\n                    checked=","\n                />\n                <label for=\"toggle-all\">Mark all as complete</label>\n                <ul class=\"todo-list\">\n                    ","\n                </ul>\n            </section>\n        "]);return da=function(){return a},a}function ea(){var a=d(["\n        <div>\n            <header class=\"header\">\n                <h1>todos</h1>\n                <input\n                    class=\"new-todo\"\n                    placeholder=\"What needs to be done?\"\n                    value=","\n                    onkeydown=","\n                    oninput=","\n                    autofocus=","\n                />\n            </header>\n        </div>\n\n        ","\n        \n        ","\n    "]);return ea=function(){return a},a}function fa(){return Math.random().toString(36).substr(2,9)}function ga(a,b){return a.find(function(a){return a.id===b})}var ha,ia=function a(h,b,c,d){var f;b[0]=0;for(var k=1;k<b.length;k++){var l=b[k++],i=b[k]?(b[0]|=l?1:2,c[b[k++]]):b[++k];3===l?d[0]=i:4===l?d[1]=Object.assign(d[1]||{},i):5===l?(d[1]=d[1]||{})[b[++k]]=i:6===l?d[1][b[++k]]+=i+"":l?(f=h.apply(i,a(h,i,c,["",null])),d.push(f),i[0]?b[0]|=2:(b[k-2]=0,b[k]=f)):d.push(i)}return d},e=new Map,n=[],t=/\/$/,ja=/*#__PURE__*/function(){function e(){var h=this,a=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};g(this,e),"title"in a?document.title=a.title:a.title=document.title,this._state=U(a),this._mutators=Object.create(null),this._actions=new Map,this._events=new Map,this._views=[],this._committer=this.commit.bind(this),this._dispatcher=this.dispatch.bind(this),this._dispatchers=new Map,this._emitter=this.emit.bind(this);var b=this._handleEvent.bind(this);document.documentElement.addEventListener("click",b,!1),document.documentElement.addEventListener("submit",b,!1),this.html=s.bind(function(b,a){a=a||{};for(var g=arguments.length,d=Array(2<g?g-2:0),e=2;e<g;e++)d[e-2]=arguments[e];return"function"==typeof b?(a.children=d,b(h.html,a,h._getEventDispatcher())):R.apply(void 0,[b,a].concat(d))}),this.on("mutate",function(b,a,c){a.title!==c.title&&(document.title=a.title),h._views.forEach(function(b){return b()})})}return j(e,[{key:"use",value:function(b){return b(this,this.state())}},{key:"state",value:function(){return this._state}},{key:"path",value:function(){return X(window.location.pathname)}},{key:"on",value:function(e,a){var b=this,c=this._events.get(e);return void 0===c&&(c=new Set,this._events.set(e,c)),c.add(a),function(){return b._events.get(e)["delete"](a)}}},{key:"emit",value:function(f){for(var a=arguments.length,b=Array(1<a?a-1:0),c=1;c<a;c++)b[c-1]=arguments[c];var g=this._events.get(f);void 0!==g&&0<g.size&&g.forEach(function(c){return c.apply(void 0,b)})}},{key:"mutate",value:function(d,a){var e=this;Y(d,a,function(c,a){e._mutators[c]=a})}},{key:"commit",value:function(f){var a=1<arguments.length&&void 0!==arguments[1]?arguments[1]:null,b=this._mutators[f];if(b){var c=this.state(),d=b(c,a);return this._state=U(c,d),this.emit("mutate",f,this._state,c,d),d}return null}},{key:"action",value:function(d,a){var e=this;Y(d,a,function(c,a){e._actions.set(c,a)})}},{key:"route",value:function(d,a){var e=this;this._onPopState||(this._onPopState=this._handlePopState.bind(this),window.addEventListener("popstate",this._onPopState,!1)),Y(d,a,function(c,a){e._actions.set($(c),a)})}},{key:"dispatch",value:function d(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:this.path(),b=1<arguments.length&&void 0!==arguments[1]?arguments[1]:null,d=this._getDispatcher(e,b);return d?d():null}},{key:"navigate",value:function(b){return this._modifyHistory(b,"navigate")}},{key:"redirect",value:function(b){return this._modifyHistory(b,"redirect")}},{key:"view",value:function(g,i){var b=this;"string"==typeof g&&(g=document.querySelector(g));var c,f=function(){return c?c:c=l(function(){var a=i(b.html,b.state(),b._getEventDispatcher()),d=h(g,a);c=null,b.emit("render",d)})};this._views.push(f),f()}},{key:"_modifyHistory",value:function(d){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:"navigate";if(d=X(d),d!==this.path()){var b=this._getDispatcher(d);return b?(history["redirect"===e?"replaceState":"pushState"](null,"",d),this.emit("pathchange",e,d),b()):null}}},{key:"_getDispatcher",value:function(n){var m,p=this,a=1<arguments.length&&void 0!==arguments[1]?arguments[1]:null,b=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null,d=this.state(),e=!0,q=!1;try{for(var r,s,t=function c(){var e=o(r.value,2),f=e[0],g=e[1],h=null,c=null;if(V(n)&&"string"!=typeof f){var i=X(n);a=f(i),a&&(h=i,0===Object.keys(a).length&&(a=null))}else f===n&&(c=n);if(c||h){var l={route:h,action:c,state:d,params:a,event:b};return{v:function(){var d=Object.assign({commit:p._committer,dispatch:p._dispatcher,emit:p._emitter},l),a=2>g.length?g(d):new Promise(function(a,b){return g(d,a,b)});return p.emit("dispatch",l,a),a}}}},k=this._actions[Symbol.iterator]();!(e=(r=k.next()).done);e=!0)if(s=t(),"object"===f(s))return s.v}catch(b){q=!0,m=b}finally{try{e||null==k["return"]||k["return"]()}finally{if(q)throw m}}return null}},{key:"_getEventDispatcher",value:function(){var m=this;return function(a){var b,n=1<arguments.length&&void 0!==arguments[1]?arguments[1]:null,c=!0,p=!1;try{for(var q,r=m._dispatchers[Symbol.iterator]();!(c=(q=r.next()).done);c=!0){var h=o(q.value,2),i=h[0],j=h[1];if(i[0]===a&&Z(n,i[1]))return j}}catch(c){p=!0,b=c}finally{try{c||null==r["return"]||r["return"]()}finally{if(p)throw b}}var k=function(b){var c=m._getDispatcher(a,n,b instanceof Event?b:null);return c?c():null};return m._dispatchers.set([a,n],k),k}}},{key:"_handlePopState",value:function(){var b=this.path();this.dispatch(b),this.emit("pathchange","pop",b)}},{key:"_handleEvent",value:function(g){if(!g.defaultPrevented){var a;if("submit"===g.type)a=g.target.getAttribute("action");else{if(g.button||g.ctrlKey||g.metaKey||g.altKey||g.shiftKey)return;var h=g.target.closest("a");if(!h)return;var c="object"===f(h.href)&&"SVGAnimatedString"===h.href.constructor.name;if("_blank"===h.getAttribute("target"))return;if("external"===h.getAttribute("rel"))return;if(h.hasAttribute("download"))return;if(!c&&!W(h))return;if(a=c?h.href.baseVal:h.getAttribute("href"),-1<a.indexOf("mailto:"))return}if(a){var d=V(a);if(d&&(a=X(a)),!(d&&a===this.path())){var e=this._getDispatcher(a,null,g);e&&(g.preventDefault(),d&&(history.pushState(null,"",a),this.emit("pathchange","navigate",a)),e())}}}}}]),e}(),ka="avalon-todos",la=13,ma=localStorage[ka],na=ma&&JSON.parse(ma)||{todos:[],newTodo:null,editing:null,editText:null},oa=function(b){return new ja(b)}(na);oa.mutate({newTodo:function(a,b){return{newTodo:b}},addTodo:function(a,b){return{newTodo:"",todos:a.todos.concat({id:fa(),title:b,completed:!1})}},toggleTodo:function(a,b){return{todos:a.todos.map(function(a){return a.id===b?c({},a,{completed:!a.completed}):a})}},toggleAllTodos:function(a,b){return{todos:a.todos.map(function(a){return c({},a,{completed:b})})}},editTodo:function(a,b){return{editing:b.id,editText:b.title}},editTodoText:function(a,b){return{editText:b}},saveTodo:function(a,b){var d=b.todo,e=b.title;return{editing:null,editText:null,todos:a.todos.map(function(a){return a===d?c({},a,{title:e}):a})}},destroyTodo:function(a,b){return{todos:a.todos.filter(function(a){return a!==b})}},cancelEdit:function(){return{editing:null}},clearCompletedTodos:function(a){return{todos:a.todos.filter(function(a){return!a.completed})}}}),oa.action({onNewTodoKeyDown:function(a){var b=a.state,c=a.event,d=a.commit;if(c.keyCode===la){c.preventDefault();var e=b.newTodo.trim();e&&d("addTodo",e)}},onNewTodoInput:function(a){var b=a.event,c=a.commit;c("newTodo",b.target.value)},toggle:function(a){var b=a.params,c=a.commit;c("toggleTodo",b.id)},toggleAll:function(a){var b=a.event,c=a.commit;c("toggleAllTodos",b.target.checked)},destroy:function(a){var b=a.state,c=a.params,d=a.commit;d("destroyTodo",ga(b.todos,c.id))},edit:function(a){var b=a.state,c=a.params,d=a.commit;d("editTodo",ga(b.todos,c.id))},onEditTodoSubmit:function(a){var b=a.state,c=a.params,d=a.commit,e=a.dispatch,f=ga(b.todos,c.id),g=b.editText.trim();g?d("saveTodo",{todo:f,title:g}):e("destroy",{id:f.id})},onEditTodoInput:function(a){var b=a.state,c=a.params,d=a.event,e=a.commit;e("editTodoText",d.target.value)},onEditTodoKeyDown:function(a){var b=a.state,c=a.params,d=a.event,e=a.commit,f=a.dispatch;d.which===27?(e("editTodoText",d.target.value),e("cancelEdit")):d.which===la&&f("onEditTodoSubmit",{id:c.id})},clearCompleted:function(a){var b=a.commit;b("clearCompletedTodos")}}),oa.on("mutate",function(a,b){localStorage[ka]=JSON.stringify(b)}),oa.on("render",function(){var a=document.querySelector(".edit");a&&a.focus()}),oa.view(".todoapp",function(a,b,c){var d=b.todos,e=b.newTodo,f=b.editing,g=b.editText,h=d.reduce(function(b,a){return b+(a.completed?0:1)},0),i=d.length-h;return a(ea(),e,c("onNewTodoKeyDown"),c("onNewTodoInput"),!0,0<d.length&&a(da(),c("toggleAll"),0===h,d.map(function(b){var d=b.id,e=b.title,h=b.completed;return a(ca(),{completed:h,editing:f===d},d,h,c("toggle",{id:d}),c("edit",{id:d}),e,c("destroy",{id:d}),f===d&&a(ba(),g,c("onEditTodoSubmit",{id:d}),c("onEditTodoInput",{id:d}),c("onEditTodoKeyDown",{id:d})))})),(0<h||0<i)&&a(aa(),h,1===h?"item":"items",0<i&&a(_(),c("clearCompleted"))))})})();