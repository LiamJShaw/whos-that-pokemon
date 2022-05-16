(()=>{"use strict";var n={28:(n,e,t)=>{t.d(e,{Z:()=>p});var r=t(81),o=t.n(r),a=t(645),i=t.n(a),c=t(667),s=t.n(c),d=new URL(t(666),t.b),u=i()(o()),l=s()(d);u.push([n.id,"@font-face {\n    font-family: 'Pokemon';\n  \n    src: url("+l+") format('woff'),\n         url("+l+") format('woff2');\n  }\n  \n  \n\n* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n\n    overflow: hidden;\n}\n\nbody {\n    height: 90vh;\n    max-height: 100vh;\n\n    /* Better way to sort this please */\n    /* width: 100%; */\n    /* max-width: 26rem; */\n\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    gap: 1rem;\n\n    margin: 1rem;\n\n    background-color: rgb(28, 28, 28);\n}\n\n#container {\n    height: 70%;\n    padding: 1rem;\n    border-radius: 10px;\n    border: 5px solid #3564AD;\n\n    display: flex;\n    flex-direction: column;\n\n    align-items: center;\n\n    justify-content: space-between;\n\n    background-color: red;\n}\n\n.title {\n    text-align: center;\n    width: 100%;\n    max-height: 20%;\n    object-fit: contain;\n}\n\n.pokemon-image {\n    object-fit: contain;\n    image-rendering: pixelated;\n    max-width: 100%;\n\n    width: 100%;\n}\n\n.hidden {\n    filter: brightness(0);\n}\n\n.guess-box {\n    user-select: none;\n    pointer-events: none; \n\n    font-family: 'Pokemon';\n\n    margin: 1rem;\n    padding: 1rem 2rem;\n\n    border: none;\n\n    background-color: #3563ad;\n    \n    color: white;\n    font-size: x-large;\n    font-weight: 800;\n    text-transform: uppercase;\n    text-align: center;\n}\n\n.guess-box:focus { \n    outline: none; \n} \n\n.guess-box::placeholder {\n\n    color: rgba(255, 255, 255, 0.395);\n}\n\n.submit-guess { \n    padding: 0.5rem 1.5rem;\n    border: none;\n    border-radius: 10px;\n    background-color: rgb(0, 0, 0);\n    color: white;\n}\n\n/* Keyboard */\n\n.keyboard {\n    display: grid;\n    grid-template-columns: repeat(20, minmax(auto, 1.25rem));\n    grid-auto-rows: 3rem;\n    gap: 0.25rem;\n    justify-content: center;\n\n    width: 100%;\n\n    user-select: none;\n}\n\n.key:hover {\n    opacity: 0.5;\n}\n\n.key:focus {\n    outline: 0;\n    box-shadow: none;\n\n    /* Stops mobile being weird, but causes quirks on desktop */\n    opacity: 1;\n  }\n\n.key {\n    font-size: inherit;\n    font-weight: 500;\n    border: none;\n    border-radius: 6px;\n    background-color: #3564AD;\n    color: #ffe031;\n    \n    display: flex;\n    align-items: center;\n    justify-content: center;\n\n    grid-column: span 2;\n\n    user-select: none;\n}\n\n.key.large {\n    grid-column: span 3;\n    fill: #ffe031; /* for the backspace SVG */\n}\n\n.spacer {\n    border: none;\n    background-color: transparent;\n}\n\nsvg {\n    pointer-events: none;\n}",""]);const p=u},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,o,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var d=0;d<n.length;d++){var u=[].concat(n[d]);r&&i[u[0]]||(void 0!==a&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=a),t&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=t):u[2]=t),o&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=o):u[4]="".concat(o)),e.push(u))}},e}},667:n=>{n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var a={},i=[],c=0;c<n.length;c++){var s=n[c],d=r.base?s[0]+r.base:s[0],u=a[d]||0,l="".concat(d," ").concat(u);a[d]=u+1;var p=t(l),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)e[p].references++,e[p].updater(f);else{var m=o(f,r);r.byIndex=c,e.splice(c,0,{identifier:l,updater:m,references:1})}i.push(l)}return i}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var a=r(n=n||[],o=o||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var c=t(a[i]);e[c].references--}for(var s=r(n,o),d=0;d<a.length;d++){var u=t(a[d]);0===e[u].references&&(e[u].updater(),e.splice(u,1))}a=s}}},569:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},666:(n,e,t)=>{n.exports=t.p+"84cc0c3ded298408a902.woff"}},e={};function t(r){var o=e[r];if(void 0!==o)return o.exports;var a=e[r]={id:r,exports:{}};return n[r](a,a.exports,t),a.exports}t.m=n,t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var r=e.getElementsByTagName("script");r.length&&(n=r[r.length-1].src)}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.b=document.baseURI||self.location.href,t.nc=void 0,(()=>{var n=t(379),e=t.n(n),r=t(795),o=t.n(r),a=t(569),i=t.n(a),c=t(565),s=t.n(c),d=t(216),u=t.n(d),l=t(589),p=t.n(l),f=t(28),m={};m.styleTagTransform=p(),m.setAttributes=s(),m.insert=i().bind(null,"head"),m.domAPI=o(),m.insertStyleElement=u(),e()(f.Z,m),f.Z&&f.Z.locals&&f.Z.locals;const h=t.p+"8f3d84d9059990371793.png";let g,v=0;const b=document.querySelector("#container"),y=n=>{const e=document.querySelector(".pokemon-image");switch(console.log("Turn: "+n),n){case 1:e.style.width="20%";break;case 2:e.style.width="40%";break;case 3:e.style.width="60%";break;default:e.style.width="100%"}},x=()=>{document.querySelector(".pokemon-image").classList.remove("hidden")};function w(){return document.querySelector(".guess-box")}const k=n=>{w().value=n};document.querySelector(".keyboard").addEventListener("click",(function(n){if(n.target.matches("[data-key]"))return e=n.target.dataset.key,void(w().value+=e);var e,t,r;n.target.matches("[data-enter]")&&(n=>{if(v<5){if(v++,y(v),(n=>n===g)(n))return x(),void y();if(5==v)x(),y(),k(g)}})(w().value),n.target.matches("[data-delete]")&&(r=(t=w().value).substring(0,t.length-1),w().value=r)})),(()=>{const n=new Image;n.classList.add("title"),n.src=h,b.append(n);const e=document.createElement("img");e.classList.add("pokemon-image"),e.style.width="10%",e.classList.add("hidden"),b.append(e);const t=document.createElement("input");t.type="text",t.classList.add("guess-box"),b.append(t)})(),v=0,async function(n){const e=await fetch(`https://pokeapi.co/api/v2/pokemon/${n}`,{mode:"cors"});return await e.json()}(Math.floor(151*Math.random())).then((function(n){var e;n&&(g=n.name,e=n.sprites.front_default,document.querySelector(".pokemon-image").src=e)}))})()})();