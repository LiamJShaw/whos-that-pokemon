(()=>{"use strict";var n={28:(n,e,t)=>{t.d(e,{Z:()=>c});var r=t(81),o=t.n(r),a=t(645),i=t.n(a)()(o());i.push([n.id,"* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n\n    /* font-family: 'Courier New', Courier, monospace; */\n\n    overflow: hidden;\n}\n\nbody {\n    height: 90vh;\n    max-height: 100vh;\n\n    /* Better way to sort this please */\n    /* width: 100%; */\n    /* max-width: 26rem; */\n\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    gap: 1rem;\n\n    margin: 1rem;\n\n    background-color: rgb(28, 28, 28);\n}\n\n#container {\n    height: 70%;\n    padding: 1rem;\n    border-radius: 10px;\n    border: 5px solid #3564AD;\n\n    display: flex;\n    flex-direction: column;\n\n    align-items: center;\n\n    justify-content: space-between;\n\n    background-color: red;\n}\n\n.title {\n    text-align: center;\n    width: 100%;\n    object-fit: contain;\n}\n\n.pokemon-image {\n    object-fit: contain;\n    image-rendering: pixelated;\n    max-width: 100%;\n\n    width: 100%;\n\n    \n\n}\n\n.hidden {\n    filter: brightness(0);\n}\n\n.guess-box {\n\n    margin: 1rem;\n    padding: 0.5rem 1rem;\n\n    border: none;\n    /* border-bottom: 5px solid #3564AD;\n    border-radius: 10px;\n    */\n\n    background-color: #3563ad;\n    \n    color: white;\n    font-size: x-large;\n    font-weight: 800;\n    text-transform: uppercase;\n    text-align: center;\n}\n\n.guess-box:focus { \n    outline: none; \n} \n\n.guess-box::placeholder {\n\n    color: rgba(255, 255, 255, 0.395);\n}\n\n.submit-guess { \n    padding: 0.5rem 1.5rem;\n    border: none;\n    border-radius: 10px;\n    background-color: rgb(0, 0, 0);\n    color: white;\n}\n\n/* Keyboard */\n\n.keyboard {\n    display: grid;\n    grid-template-columns: repeat(20, minmax(auto, 1.25rem));\n    grid-auto-rows: 3rem;\n    gap: 0.25rem;\n    justify-content: center;\n\n    width: 100%;\n}\n\n.key:hover {\n    opacity: 0.5;\n}\n\n.key:focus {\n    outline: 0;\n    box-shadow: none;\n  }\n  \n\n.key {\n    font-size: inherit;\n    font-weight: 500;\n    border: none;\n    border-radius: 6px;\n    background-color: #3564AD;\n    color: #ffe031;\n    \n    display: flex;\n    align-items: center;\n    justify-content: center;\n\n    grid-column: span 2;\n\n    user-select: none;\n}\n\n.key.large {\n    grid-column: span 3;\n    fill: #ffe031; /* for the backspace SVG */\n}\n\n.spacer {\n    border: none;\n    background-color: transparent;\n}\n\nsvg {\n    pointer-events: none;\n}",""]);const c=i},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,o,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var d=0;d<n.length;d++){var l=[].concat(n[d]);r&&i[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),e.push(l))}},e}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var a={},i=[],c=0;c<n.length;c++){var s=n[c],d=r.base?s[0]+r.base:s[0],l=a[d]||0,u="".concat(d," ").concat(l);a[d]=l+1;var p=t(u),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)e[p].references++,e[p].updater(f);else{var m=o(f,r);r.byIndex=c,e.splice(c,0,{identifier:u,updater:m,references:1})}i.push(u)}return i}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var a=r(n=n||[],o=o||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var c=t(a[i]);e[c].references--}for(var s=r(n,o),d=0;d<a.length;d++){var l=t(a[d]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}a=s}}},569:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function t(r){var o=e[r];if(void 0!==o)return o.exports;var a=e[r]={id:r,exports:{}};return n[r](a,a.exports,t),a.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var r=e.getElementsByTagName("script");r.length&&(n=r[r.length-1].src)}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.nc=void 0,(()=>{var n=t(379),e=t.n(n),r=t(795),o=t.n(r),a=t(569),i=t.n(a),c=t(565),s=t.n(c),d=t(216),l=t.n(d),u=t(589),p=t.n(u),f=t(28),m={};m.styleTagTransform=p(),m.setAttributes=s(),m.insert=i().bind(null,"head"),m.domAPI=o(),m.insertStyleElement=l(),e()(f.Z,m),f.Z&&f.Z.locals&&f.Z.locals;const g=t.p+"8f3d84d9059990371793.png";let h;const v=document.querySelector("#container"),b=new Image;b.classList.add("title"),b.src=g,v.append(b);const y=document.createElement("img");y.classList.add("pokemon-image"),y.classList.add("hidden"),v.append(y),async function(n){const e=await fetch(`https://pokeapi.co/api/v2/pokemon/${n}`,{mode:"cors"});return await e.json()}(Math.floor(151*Math.random())).then((function(n){n&&(y.src=n.sprites.front_default,h=n.name)}));const x=document.createElement("input");x.type="text",x.classList.add("guess-box"),v.append(x),document.querySelector(".keyboard").addEventListener("click",(function(n){if(n.target.matches("[data-key]"))return e=n.target.dataset.key,void(x.value+=e);var e,t,r;n.target.matches("[data-enter]")&&function(n){(function(n){return console.log(h),n===h?(console.log("Correct!"),!0):(console.log("Incorrect!"),!1)})(n)&&y.classList.remove("hidden")}(x.value),n.target.matches("[data-delete]")&&(r=(t=x.value).substring(0,t.length-1),x.value=r)}))})()})();