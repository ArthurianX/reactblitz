"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("react"),t=require("styled-components"),n=require("react-dom");function r(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var a=r(e),o=r(t);function i(e,t,n,r){return new(n||(n=Promise))((function(a,o){function i(e){try{l(r.next(e))}catch(e){o(e)}}function s(e){try{l(r.throw(e))}catch(e){o(e)}}function l(e){var t;e.done?a(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,s)}l((r=r.apply(e,t||[])).next())}))}var s=["angular-cli","create-react-app","html","javascript","node","polymer","typescript","vue"],l={clickToLoad:function(e){return d("ctl",e)},devToolsHeight:function(e){return p("devToolsHeight",e)},forceEmbedLayout:function(e){return d("embed",e)},hideDevTools:function(e){return d("hideDevTools",e)},hideExplorer:function(e){return d("hideExplorer",e)},hideNavigation:function(e){return d("hideNavigation",e)},showSidebar:function(e){return function(e,t){return"boolean"==typeof t?"showSidebar="+(t?"1":"0"):""}(0,e)},openFile:function(e){return function(e,t){return(Array.isArray(t)?t:[t]).filter((function(e){return"string"==typeof e&&""!==e.trim()})).map((function(e){return"file="+encodeURIComponent(e.trim())}))}(0,e).join("&")},terminalHeight:function(e){return p("terminalHeight",e)},theme:function(e){return f("theme",["light","dark"],e)},view:function(e){return f("view",["preview","editor"],e)}};function u(e){void 0===e&&(e={});var t=Object.entries(e).map((function(e){var t=e[0],n=e[1];return null!=n&&l.hasOwnProperty(t)?l[t](n):""})).filter(Boolean);return t.length?"?"+t.join("&"):""}function d(e,t){return!0===t?e+"=1":""}function p(e,t){return"number"==typeof t&&t>=0&&t<=100?e+"="+Math.round(t):""}function f(e,t,n){return"string"==typeof n&&t.includes(n)?e+"="+n:""}function c(){return Math.random().toString(36).slice(2,6)+Math.random().toString(36).slice(2,6)}function h(e,t){var n={forceEmbedLayout:!0};return t&&"object"==typeof t&&Object.assign(n,t),""+m(n)+e+u(n)}function m(e){return void 0===e&&(e={}),"string"==typeof e.origin?e.origin:"https://stackblitz.com"}function g(e,t,n){if(!t||!e||!e.parentNode)throw new Error("Invalid Element");e.id&&(t.id=e.id),e.className&&(t.className=e.className),function(e,t){t&&"object"==typeof t&&(Object.hasOwnProperty.call(t,"height")&&(e.height=""+t.height),Object.hasOwnProperty.call(t,"width")&&(e.width=""+t.width)),e.height||(e.height="300"),e.width||e.setAttribute("style","width:100%;")}(t,n),e.parentNode.replaceChild(t,e)}function b(e){if("string"==typeof e){var t=document.getElementById(e);if(!t)throw new Error("Could not find element with id '"+e+"'");return t}if(e instanceof HTMLElement)return e;throw new Error("Invalid element: "+e)}function v(){return v=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},v.apply(this,arguments)}var y=function(){function e(e){this.port=void 0,this.pending={},this.port=e,this.port.onmessage=this.messageListener.bind(this)}var t=e.prototype;return t.request=function(e){var t=this,n=e.type,r=e.payload,a=c();return new Promise((function(e,o){t.pending[a]={resolve:e,reject:o},t.port.postMessage({type:n,payload:v({},r,{__reqid:a})})}))},t.messageListener=function(e){var t;if("string"==typeof(null==(t=e.data.payload)?void 0:t.__reqid)){var n=e.data,r=n.type,a=n.payload,o=a.__reqid,i=a.__error;this.pending[o]&&(a.__success?this.pending[o].resolve(function(e){var t=v({},e);return delete t.__reqid,delete t.__success,delete t.__error,Object.keys(t).length?t:null}(a)):this.pending[o].reject(i?r+": "+i:r),delete this.pending[o])}},e}(),w=function(){function e(e,t){var n=this;this._rdc=void 0,this.editor={openFile:function(e){return n._rdc.request({type:"SDK_OPEN_FILE",payload:{path:e}})},setCurrentFile:function(e){return n._rdc.request({type:"SDK_SET_CURRENT_FILE",payload:{path:e}})},setTheme:function(e){return n._rdc.request({type:"SDK_SET_UI_THEME",payload:{theme:e}})},setView:function(e){return n._rdc.request({type:"SDK_SET_UI_VIEW",payload:{view:e}})},showSidebar:function(e){return void 0===e&&(e=!0),n._rdc.request({type:"SDK_TOGGLE_SIDEBAR",payload:{visible:e}})}},this.preview={origin:"",getUrl:function(){return n._rdc.request({type:"SDK_GET_PREVIEW_URL",payload:{}}).then((function(e){var t;return null!=(t=null==e?void 0:e.url)?t:null}))},setUrl:function(e){if(void 0===e&&(e="/"),"string"!=typeof e||!e.startsWith("/"))throw new Error("Invalid argument: expected a path starting with '/', got '"+e+"'");return n._rdc.request({type:"SDK_SET_PREVIEW_URL",payload:{path:e}})}},this._rdc=new y(e),Object.defineProperty(this.preview,"origin",{value:"string"==typeof t.previewOrigin?t.previewOrigin:null,writable:!1})}var t=e.prototype;return t.applyFsDiff=function(e){var t=function(e){return null!==e&&"object"==typeof e};if(!t(e)||!t(e.create))throw new Error("Invalid diff object: expected diff.create to be an object.");if(!Array.isArray(e.destroy))throw new Error("Invalid diff object: expected diff.create to be an array.");return this._rdc.request({type:"SDK_APPLY_FS_DIFF",payload:e})},t.getDependencies=function(){return this._rdc.request({type:"SDK_GET_DEPS_SNAPSHOT",payload:{}})},t.getFsSnapshot=function(){return this._rdc.request({type:"SDK_GET_FS_SNAPSHOT",payload:{}})},e}(),S=[],j=function(e){var t=this;this.element=void 0,this.id=void 0,this.pending=void 0,this.vm=void 0,this.id=c(),this.element=e,this.pending=new Promise((function(e,n){var r=function(n){var r=n.data;"SDK_INIT_SUCCESS"===(null==r?void 0:r.action)&&r.id===t.id&&(t.vm=new w(n.ports[0],r.payload),e(t.vm),o())},a=function(){var e;null==(e=t.element.contentWindow)||e.postMessage({action:"SDK_INIT",id:t.id},"*")};function o(){window.clearInterval(s),window.removeEventListener("message",r)}window.addEventListener("message",r),a();var i=0,s=window.setInterval((function(){if(t.vm)o();else{if(i>=20)return o(),n("Timeout: Unable to establish a connection with the StackBlitz VM"),void S.forEach((function(e,n){e.id===t.id&&S.splice(n,1)}));i++,a()}}),500)})),S.push(this)};function x(e,t){var n=document.createElement("input");return n.type="hidden",n.name=e,n.value=t,n}function _(e){if(!s.includes(e.template)){var t=s.map((function(e){return"'"+e+"'"})).join(", ");console.warn("Unsupported project.template: must be one of "+t)}var n="node"===e.template,r=document.createElement("form");return r.method="POST",r.setAttribute("style","display:none!important;"),r.appendChild(x("project[title]",e.title)),r.appendChild(x("project[description]",e.description)),r.appendChild(x("project[template]",e.template)),e.dependencies&&(n?console.warn("Invalid project.dependencies: dependencies must be provided as a 'package.json' file when using the 'node' template."):r.appendChild(x("project[dependencies]",JSON.stringify(e.dependencies)))),e.settings&&r.appendChild(x("project[settings]",JSON.stringify(e.settings))),Object.keys(e.files).forEach((function(t){"string"==typeof e.files[t]&&r.appendChild(x("project[files]["+t+"]",e.files[t]))})),r}function E(e){var t,n,r,a;return null!=e&&e.contentWindow?(null!=(a=(n=e)instanceof Element?"element":"id",t=null!=(r=S.find((function(e){return e[a]===n})))?r:null)?t:new j(e)).pending:Promise.reject("Provided element is not an iframe.")}var I=function(e,t,n){var r,a=b(e),o=function(e,t){var n=_(e);return n.action=h("/run",t),n.id="sb","<html><head><title></title></head><body>"+n.outerHTML+"<script>document.getElementById('"+n.id+"').submit();<\/script></body></html>"}(t,n),i=document.createElement("iframe");return g(a,i,n),null==(r=i.contentDocument)||r.write(o),E(i)};function P(){return P=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},P.apply(this,arguments)}function k(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function O(e,t){return O=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},O(e,t)}function F(e){return F=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},F(e)}function T(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}function C(e,t,n){return C=T()?Reflect.construct.bind():function(e,t,n){var r=[null];r.push.apply(r,t);var a=new(Function.bind.apply(e,r));return n&&O(a,n.prototype),a},C.apply(null,arguments)}function q(e){var t="function"==typeof Map?new Map:void 0;return q=function(e){if(null===e||(n=e,-1===Function.toString.call(n).indexOf("[native code]")))return e;var n;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(e))return t.get(e);t.set(e,r)}function r(){return C(e,arguments,F(this).constructor)}return r.prototype=Object.create(e.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),O(r,e)},q(e)}var z={1:"Passed invalid arguments to hsl, please pass multiple numbers e.g. hsl(360, 0.75, 0.4) or an object e.g. rgb({ hue: 255, saturation: 0.4, lightness: 0.75 }).\n\n",2:"Passed invalid arguments to hsla, please pass multiple numbers e.g. hsla(360, 0.75, 0.4, 0.7) or an object e.g. rgb({ hue: 255, saturation: 0.4, lightness: 0.75, alpha: 0.7 }).\n\n",3:"Passed an incorrect argument to a color function, please pass a string representation of a color.\n\n",4:"Couldn't generate valid rgb string from %s, it returned %s.\n\n",5:"Couldn't parse the color string. Please provide the color as a string in hex, rgb, rgba, hsl or hsla notation.\n\n",6:"Passed invalid arguments to rgb, please pass multiple numbers e.g. rgb(255, 205, 100) or an object e.g. rgb({ red: 255, green: 205, blue: 100 }).\n\n",7:"Passed invalid arguments to rgba, please pass multiple numbers e.g. rgb(255, 205, 100, 0.75) or an object e.g. rgb({ red: 255, green: 205, blue: 100, alpha: 0.75 }).\n\n",8:"Passed invalid argument to toColorString, please pass a RgbColor, RgbaColor, HslColor or HslaColor object.\n\n",9:"Please provide a number of steps to the modularScale helper.\n\n",10:"Please pass a number or one of the predefined scales to the modularScale helper as the ratio.\n\n",11:'Invalid value passed as base to modularScale, expected number or em string but got "%s"\n\n',12:'Expected a string ending in "px" or a number passed as the first argument to %s(), got "%s" instead.\n\n',13:'Expected a string ending in "px" or a number passed as the second argument to %s(), got "%s" instead.\n\n',14:'Passed invalid pixel value ("%s") to %s(), please pass a value like "12px" or 12.\n\n',15:'Passed invalid base value ("%s") to %s(), please pass a value like "12px" or 12.\n\n',16:"You must provide a template to this method.\n\n",17:"You passed an unsupported selector state to this method.\n\n",18:"minScreen and maxScreen must be provided as stringified numbers with the same units.\n\n",19:"fromSize and toSize must be provided as stringified numbers with the same units.\n\n",20:"expects either an array of objects or a single object with the properties prop, fromSize, and toSize.\n\n",21:"expects the objects in the first argument array to have the properties `prop`, `fromSize`, and `toSize`.\n\n",22:"expects the first argument object to have the properties `prop`, `fromSize`, and `toSize`.\n\n",23:"fontFace expects a name of a font-family.\n\n",24:"fontFace expects either the path to the font file(s) or a name of a local copy.\n\n",25:"fontFace expects localFonts to be an array.\n\n",26:"fontFace expects fileFormats to be an array.\n\n",27:"radialGradient requries at least 2 color-stops to properly render.\n\n",28:"Please supply a filename to retinaImage() as the first argument.\n\n",29:"Passed invalid argument to triangle, please pass correct pointingDirection e.g. 'right'.\n\n",30:"Passed an invalid value to `height` or `width`. Please provide a pixel based unit.\n\n",31:"The animation shorthand only takes 8 arguments. See the specification for more information: http://mdn.io/animation\n\n",32:"To pass multiple animations please supply them in arrays, e.g. animation(['rotate', '2s'], ['move', '1s'])\nTo pass a single animation please supply them in simple values, e.g. animation('rotate', '2s')\n\n",33:"The animation shorthand arrays can only have 8 elements. See the specification for more information: http://mdn.io/animation\n\n",34:"borderRadius expects a radius value as a string or number as the second argument.\n\n",35:'borderRadius expects one of "top", "bottom", "left" or "right" as the first argument.\n\n',36:"Property must be a string value.\n\n",37:"Syntax Error at %s.\n\n",38:"Formula contains a function that needs parentheses at %s.\n\n",39:"Formula is missing closing parenthesis at %s.\n\n",40:"Formula has too many closing parentheses at %s.\n\n",41:"All values in a formula must have the same unit or be unitless.\n\n",42:"Please provide a number of steps to the modularScale helper.\n\n",43:"Please pass a number or one of the predefined scales to the modularScale helper as the ratio.\n\n",44:"Invalid value passed as base to modularScale, expected number or em/rem string but got %s.\n\n",45:"Passed invalid argument to hslToColorString, please pass a HslColor or HslaColor object.\n\n",46:"Passed invalid argument to rgbToColorString, please pass a RgbColor or RgbaColor object.\n\n",47:"minScreen and maxScreen must be provided as stringified numbers with the same units.\n\n",48:"fromSize and toSize must be provided as stringified numbers with the same units.\n\n",49:"Expects either an array of objects or a single object with the properties prop, fromSize, and toSize.\n\n",50:"Expects the objects in the first argument array to have the properties prop, fromSize, and toSize.\n\n",51:"Expects the first argument object to have the properties prop, fromSize, and toSize.\n\n",52:"fontFace expects either the path to the font file(s) or a name of a local copy.\n\n",53:"fontFace expects localFonts to be an array.\n\n",54:"fontFace expects fileFormats to be an array.\n\n",55:"fontFace expects a name of a font-family.\n\n",56:"linearGradient requries at least 2 color-stops to properly render.\n\n",57:"radialGradient requries at least 2 color-stops to properly render.\n\n",58:"Please supply a filename to retinaImage() as the first argument.\n\n",59:"Passed invalid argument to triangle, please pass correct pointingDirection e.g. 'right'.\n\n",60:"Passed an invalid value to `height` or `width`. Please provide a pixel based unit.\n\n",61:"Property must be a string value.\n\n",62:"borderRadius expects a radius value as a string or number as the second argument.\n\n",63:'borderRadius expects one of "top", "bottom", "left" or "right" as the first argument.\n\n',64:"The animation shorthand only takes 8 arguments. See the specification for more information: http://mdn.io/animation.\n\n",65:"To pass multiple animations please supply them in arrays, e.g. animation(['rotate', '2s'], ['move', '1s'])\\nTo pass a single animation please supply them in simple values, e.g. animation('rotate', '2s').\n\n",66:"The animation shorthand arrays can only have 8 elements. See the specification for more information: http://mdn.io/animation.\n\n",67:"You must provide a template to this method.\n\n",68:"You passed an unsupported selector state to this method.\n\n",69:'Expected a string ending in "px" or a number passed as the first argument to %s(), got %s instead.\n\n',70:'Expected a string ending in "px" or a number passed as the second argument to %s(), got %s instead.\n\n',71:'Passed invalid pixel value %s to %s(), please pass a value like "12px" or 12.\n\n',72:'Passed invalid base value %s to %s(), please pass a value like "12px" or 12.\n\n',73:"Please provide a valid CSS variable.\n\n",74:"CSS variable not found and no default was provided.\n\n",75:"important requires a valid style object, got a %s instead.\n\n",76:"fromSize and toSize must be provided as stringified numbers with the same units as minScreen and maxScreen.\n\n",77:'remToPx expects a value in "rem" but you provided it in "%s".\n\n',78:'base must be set in "px" or "%" but you set it in "%s".\n'};function R(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];var r,a=t[0],o=[];for(r=1;r<t.length;r+=1)o.push(t[r]);return o.forEach((function(e){a=a.replace(/%[a-z]/,e)})),a}var D=function(e){var t,n;function r(t){var n;if("production"===process.env.NODE_ENV)n=e.call(this,"An error occurred. See https://github.com/styled-components/polished/blob/main/src/internalHelpers/errors.md#"+t+" for more information.")||this;else{for(var r=arguments.length,a=new Array(r>1?r-1:0),o=1;o<r;o++)a[o-1]=arguments[o];n=e.call(this,R.apply(void 0,[z[t]].concat(a)))||this}return k(n)}return n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,O(t,n),r}(q(Error));function A(e){return Math.round(255*e)}function M(e,t,n){return A(e)+","+A(t)+","+A(n)}function N(e,t,n,r){if(void 0===r&&(r=M),0===t)return r(n,n,n);var a=(e%360+360)%360/60,o=(1-Math.abs(2*n-1))*t,i=o*(1-Math.abs(a%2-1)),s=0,l=0,u=0;a>=0&&a<1?(s=o,l=i):a>=1&&a<2?(s=i,l=o):a>=2&&a<3?(l=o,u=i):a>=3&&a<4?(l=i,u=o):a>=4&&a<5?(s=i,u=o):a>=5&&a<6&&(s=o,u=i);var d=n-o/2;return r(s+d,l+d,u+d)}var L={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"00ffff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"0000ff",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"00ffff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"ff00ff",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"639",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"};var H=/^#[a-fA-F0-9]{6}$/,B=/^#[a-fA-F0-9]{8}$/,$=/^#[a-fA-F0-9]{3}$/,K=/^#[a-fA-F0-9]{4}$/,U=/^rgb\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*\)$/i,G=/^rgb(?:a)?\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i,V=/^hsl\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*\)$/i,W=/^hsl(?:a)?\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i;function Y(e){if("string"!=typeof e)throw new D(3);var t=function(e){if("string"!=typeof e)return e;var t=e.toLowerCase();return L[t]?"#"+L[t]:e}(e);if(t.match(H))return{red:parseInt(""+t[1]+t[2],16),green:parseInt(""+t[3]+t[4],16),blue:parseInt(""+t[5]+t[6],16)};if(t.match(B)){var n=parseFloat((parseInt(""+t[7]+t[8],16)/255).toFixed(2));return{red:parseInt(""+t[1]+t[2],16),green:parseInt(""+t[3]+t[4],16),blue:parseInt(""+t[5]+t[6],16),alpha:n}}if(t.match($))return{red:parseInt(""+t[1]+t[1],16),green:parseInt(""+t[2]+t[2],16),blue:parseInt(""+t[3]+t[3],16)};if(t.match(K)){var r=parseFloat((parseInt(""+t[4]+t[4],16)/255).toFixed(2));return{red:parseInt(""+t[1]+t[1],16),green:parseInt(""+t[2]+t[2],16),blue:parseInt(""+t[3]+t[3],16),alpha:r}}var a=U.exec(t);if(a)return{red:parseInt(""+a[1],10),green:parseInt(""+a[2],10),blue:parseInt(""+a[3],10)};var o=G.exec(t.substring(0,50));if(o)return{red:parseInt(""+o[1],10),green:parseInt(""+o[2],10),blue:parseInt(""+o[3],10),alpha:parseFloat(""+o[4])>1?parseFloat(""+o[4])/100:parseFloat(""+o[4])};var i=V.exec(t);if(i){var s="rgb("+N(parseInt(""+i[1],10),parseInt(""+i[2],10)/100,parseInt(""+i[3],10)/100)+")",l=U.exec(s);if(!l)throw new D(4,t,s);return{red:parseInt(""+l[1],10),green:parseInt(""+l[2],10),blue:parseInt(""+l[3],10)}}var u=W.exec(t.substring(0,50));if(u){var d="rgb("+N(parseInt(""+u[1],10),parseInt(""+u[2],10)/100,parseInt(""+u[3],10)/100)+")",p=U.exec(d);if(!p)throw new D(4,t,d);return{red:parseInt(""+p[1],10),green:parseInt(""+p[2],10),blue:parseInt(""+p[3],10),alpha:parseFloat(""+u[4])>1?parseFloat(""+u[4])/100:parseFloat(""+u[4])}}throw new D(5)}function J(e){return function(e){var t,n=e.red/255,r=e.green/255,a=e.blue/255,o=Math.max(n,r,a),i=Math.min(n,r,a),s=(o+i)/2;if(o===i)return void 0!==e.alpha?{hue:0,saturation:0,lightness:s,alpha:e.alpha}:{hue:0,saturation:0,lightness:s};var l=o-i,u=s>.5?l/(2-o-i):l/(o+i);switch(o){case n:t=(r-a)/l+(r<a?6:0);break;case r:t=(a-n)/l+2;break;default:t=(n-r)/l+4}return t*=60,void 0!==e.alpha?{hue:t,saturation:u,lightness:s,alpha:e.alpha}:{hue:t,saturation:u,lightness:s}}(Y(e))}var Q=function(e){return 7===e.length&&e[1]===e[2]&&e[3]===e[4]&&e[5]===e[6]?"#"+e[1]+e[3]+e[5]:e};function X(e){var t=e.toString(16);return 1===t.length?"0"+t:t}function Z(e){return X(Math.round(255*e))}function ee(e,t,n){return Q("#"+Z(e)+Z(t)+Z(n))}function te(e,t,n){return N(e,t,n,ee)}function ne(e,t,n){if("number"==typeof e&&"number"==typeof t&&"number"==typeof n)return Q("#"+X(e)+X(t)+X(n));if("object"==typeof e&&void 0===t&&void 0===n)return Q("#"+X(e.red)+X(e.green)+X(e.blue));throw new D(6)}function re(e){if("object"!=typeof e)throw new D(8);if(function(e){return"number"==typeof e.red&&"number"==typeof e.green&&"number"==typeof e.blue&&"number"==typeof e.alpha}(e))return function(e,t,n,r){if("string"==typeof e&&"number"==typeof t){var a=Y(e);return"rgba("+a.red+","+a.green+","+a.blue+","+t+")"}if("number"==typeof e&&"number"==typeof t&&"number"==typeof n&&"number"==typeof r)return r>=1?ne(e,t,n):"rgba("+e+","+t+","+n+","+r+")";if("object"==typeof e&&void 0===t&&void 0===n&&void 0===r)return e.alpha>=1?ne(e.red,e.green,e.blue):"rgba("+e.red+","+e.green+","+e.blue+","+e.alpha+")";throw new D(7)}(e);if(function(e){return"number"==typeof e.red&&"number"==typeof e.green&&"number"==typeof e.blue&&("number"!=typeof e.alpha||void 0===e.alpha)}(e))return ne(e);if(function(e){return"number"==typeof e.hue&&"number"==typeof e.saturation&&"number"==typeof e.lightness&&"number"==typeof e.alpha}(e))return function(e,t,n,r){if("number"==typeof e&&"number"==typeof t&&"number"==typeof n&&"number"==typeof r)return r>=1?te(e,t,n):"rgba("+N(e,t,n)+","+r+")";if("object"==typeof e&&void 0===t&&void 0===n&&void 0===r)return e.alpha>=1?te(e.hue,e.saturation,e.lightness):"rgba("+N(e.hue,e.saturation,e.lightness)+","+e.alpha+")";throw new D(2)}(e);if(function(e){return"number"==typeof e.hue&&"number"==typeof e.saturation&&"number"==typeof e.lightness&&("number"!=typeof e.alpha||void 0===e.alpha)}(e))return function(e,t,n){if("number"==typeof e&&"number"==typeof t&&"number"==typeof n)return te(e,t,n);if("object"==typeof e&&void 0===t&&void 0===n)return te(e.hue,e.saturation,e.lightness);throw new D(1)}(e);throw new D(8)}function ae(e,t,n){return function(){var r=n.concat(Array.prototype.slice.call(arguments));return r.length>=t?e.apply(this,r):ae(e,t,r)}}function oe(e){return ae(e,e.length,[])}function ie(e,t){if("transparent"===t)return t;var n,r,a,o=J(t);return re(P({},o,{lightness:(n=0,r=1,a=o.lightness-parseFloat(e),Math.max(n,Math.min(r,a)))}))}var se=oe(ie);const le=o.default.div`
    border: 0;
    //line-height: 1;
    //font-size: 15px;
    //cursor: pointer;
    //font-weight: 700;
    //font-weight: bold;
    border-radius: 3px;
    overflow: hidden;
    display: inline-block;
    position: relative;
    background-color: ${e=>{var t,n;return(null===(t=null==e?void 0:e.options)||void 0===t?void 0:t.accentColor)?null===(n=null==e?void 0:e.options)||void 0===n?void 0:n.accentColor:"#6bedb5"}};
    width: ${e=>{var t;return(null===(t=null==e?void 0:e.options)||void 0===t?void 0:t.width)||"100%"}};
    height: ${e=>{var t,n;return(null===(t=null==e?void 0:e.options)||void 0===t?void 0:t.height)||(null===(n=null==e?void 0:e.options)||void 0===n?void 0:n.accentBorder)?"358px":"354px"}};
    padding-top: ${e=>{var t;return(null===(t=null==e?void 0:e.options)||void 0===t?void 0:t.accentBorder)?"4px":"0px"}};
    &:hover {
      background-color: ${e=>{var t,n;return(null===(t=null==e?void 0:e.options)||void 0===t?void 0:t.accentColor)?se(.2,null===(n=null==e?void 0:e.options)||void 0===n?void 0:n.accentColor):se(.2,"#6bedb5")}};
    }
    & iframe {
      margin: 0;
      padding: 0;,
      outline: none;
      border: 0px solid transparent;
    }
`,ue=({options:t,project:n,getStackBlitzInstance:r})=>{e.useState((null==t?void 0:t.renderWhenVisible)||!1);const o=e.useRef(null);return e.useEffect((()=>{((e,t,n)=>i(void 0,void 0,void 0,(function*(){const r={options:{clickToLoad:!1,openFile:"index.js",terminalHeight:50,showSidebar:!1,devToolsHeight:100,hideExplorer:!0,height:354,width:"100%",accentBorder:!1,accentColor:"#6bedb5"},project:{title:"Node Starter",description:"A basic Node.js project",template:"typescript",files:{"index.html":'<div id="app"></div>',"style.css":"h1, h2 {font-family: Lato;}","index.ts":"\n    function* generator(limit) {\n      for (let i = 0; i < limit; i++) {\n        yield i\n      }\n    }\n\n    for (let i of generator(10)) {\n      console.log(i)\n    }\n","package.json":'{\n  "name": "typescript",\n  "version": "0.0.0",\n  "private": true,\n  "dependencies": {}\n}'}}};try{return yield I(e,Object.assign(Object.assign({},r.project),t),Object.assign(Object.assign({},r.options),n))}catch(e){}})))(o.current,n,t).then((e=>{"function"==typeof r&&r(e)}))}),[null!==o.current]),a.default.createElement(le,{options:t,project:n},a.default.createElement("div",{ref:o}))};exports.ReactBlitz=ue,exports.reactBlitzElement=(e,t,r,o)=>i(void 0,void 0,void 0,(function*(){n.createPortal(a.default.createElement(ue,{options:t,project:r,getStackBlitzInstance:o}),e)}));
//# sourceMappingURL=index.js.map
