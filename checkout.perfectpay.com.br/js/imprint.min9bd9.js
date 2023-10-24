!function(e){function t(){}function r(e,t){return function(){e.apply(t,arguments)}}function i(e){if("object"!=typeof this)throw new TypeError("Promises must be constructed via new");if("function"!=typeof e)throw new TypeError("not a function");this._state=0,this._handled=!1,this._value=void 0,this._deferreds=[],u(e,this)}function n(e,t){for(;3===e._state;)e=e._value;return 0===e._state?void e._deferreds.push(t):(e._handled=!0,void i._immediateFn(function(){var r=1===e._state?t.onFulfilled:t.onRejected;if(null===r)return void(1===e._state?a:o)(t.promise,e._value);var i;try{i=r(e._value)}catch(e){return void o(t.promise,e)}a(t.promise,i)}))}function a(e,t){try{if(t===e)throw new TypeError("A promise cannot be resolved with itself.");if(t&&("object"==typeof t||"function"==typeof t)){var n=t.then;if(t instanceof i)return e._state=3,e._value=t,void s(e);if("function"==typeof n)return void u(r(n,t),e)}e._state=1,e._value=t,s(e)}catch(t){o(e,t)}}function o(e,t){e._state=2,e._value=t,s(e)}function s(e){2===e._state&&0===e._deferreds.length&&i._immediateFn(function(){e._handled||i._unhandledRejectionFn(e._value)});for(var t=0,r=e._deferreds.length;t<r;t++)n(e,e._deferreds[t]);e._deferreds=null}function c(e,t,r){this.onFulfilled="function"==typeof e?e:null,this.onRejected="function"==typeof t?t:null,this.promise=r}function u(e,t){var r=!1;try{e(function(e){r||(r=!0,a(t,e))},function(e){r||(r=!0,o(t,e))})}catch(e){if(r)return;r=!0,o(t,e)}}var h=setTimeout;i.prototype.catch=function(e){return this.then(null,e)},i.prototype.then=function(e,r){var i=new this.constructor(t);return n(this,new c(e,r,i)),i},i.all=function(e){var t=Array.prototype.slice.call(e);return new i(function(e,r){function i(a,o){try{if(o&&("object"==typeof o||"function"==typeof o)){var s=o.then;if("function"==typeof s)return void s.call(o,function(e){i(a,e)},r)}t[a]=o,0===--n&&e(t)}catch(e){r(e)}}if(0===t.length)return e([]);for(var n=t.length,a=0;a<t.length;a++)i(a,t[a])})},i.resolve=function(e){return e&&"object"==typeof e&&e.constructor===i?e:new i(function(t){t(e)})},i.reject=function(e){return new i(function(t,r){r(e)})},i.race=function(e){return new i(function(t,r){for(var i=0,n=e.length;i<n;i++)e[i].then(t,r)})},i._immediateFn="function"==typeof setImmediate&&function(e){setImmediate(e)}||function(e){h(e,0)},i._unhandledRejectionFn=function(e){"undefined"!=typeof console&&console&&console.warn("Possible Unhandled Promise Rejection:",e)},i._setImmediateFn=function(e){i._immediateFn=e},i._setUnhandledRejectionFn=function(e){i._unhandledRejectionFn=e},"undefined"!=typeof module&&module.exports?module.exports=i:e.Promise||(e.Promise=i)}(this),function(e,t){function r(e,t){return(65535&e)*t+(((e>>>16)*t&65535)<<16)}function i(e,t){return e<<t|e>>>32-t}function n(e){return e=r(e^e>>>16,2246822507),e^=e>>>13,e=r(e,3266489909),e^=e>>>16}function a(e,t){e=[e[0]>>>16,65535&e[0],e[1]>>>16,65535&e[1]],t=[t[0]>>>16,65535&t[0],t[1]>>>16,65535&t[1]];var r=[0,0,0,0];return r[3]+=e[3]+t[3],r[2]+=r[3]>>>16,r[3]&=65535,r[2]+=e[2]+t[2],r[1]+=r[2]>>>16,r[2]&=65535,r[1]+=e[1]+t[1],r[0]+=r[1]>>>16,r[1]&=65535,r[0]+=e[0]+t[0],r[0]&=65535,[r[0]<<16|r[1],r[2]<<16|r[3]]}function o(e,t){e=[e[0]>>>16,65535&e[0],e[1]>>>16,65535&e[1]],t=[t[0]>>>16,65535&t[0],t[1]>>>16,65535&t[1]];var r=[0,0,0,0];return r[3]+=e[3]*t[3],r[2]+=r[3]>>>16,r[3]&=65535,r[2]+=e[2]*t[3],r[1]+=r[2]>>>16,r[2]&=65535,r[2]+=e[3]*t[2],r[1]+=r[2]>>>16,r[2]&=65535,r[1]+=e[1]*t[3],r[0]+=r[1]>>>16,r[1]&=65535,r[1]+=e[2]*t[2],r[0]+=r[1]>>>16,r[1]&=65535,r[1]+=e[3]*t[1],r[0]+=r[1]>>>16,r[1]&=65535,r[0]+=e[0]*t[3]+e[1]*t[2]+e[2]*t[1]+e[3]*t[0],r[0]&=65535,[r[0]<<16|r[1],r[2]<<16|r[3]]}function s(e,t){return t%=64,32===t?[e[1],e[0]]:32>t?[e[0]<<t|e[1]>>>32-t,e[1]<<t|e[0]>>>32-t]:(t-=32,[e[1]<<t|e[0]>>>32-t,e[0]<<t|e[1]>>>32-t])}function c(e,t){return t%=64,0===t?e:32>t?[e[0]<<t|e[1]>>>32-t,e[1]<<t]:[e[1]<<t-32,0]}function u(e,t){return[e[0]^t[0],e[1]^t[1]]}function h(e){return e=u(e,[0,e[0]>>>1]),e=o(e,[4283543511,3981806797]),e=u(e,[0,e[0]>>>1]),e=o(e,[3301882366,444984403]),e=u(e,[0,e[0]>>>1])}var d={version:"2.1.2",x86:{},x64:{}};d.x86.hash32=function(e,t){e=e||"";for(var a=e.length%4,o=e.length-a,s=t||0,c=0,u=0;u<o;u+=4)c=255&e.charCodeAt(u)|(255&e.charCodeAt(u+1))<<8|(255&e.charCodeAt(u+2))<<16|(255&e.charCodeAt(u+3))<<24,c=r(c,3432918353),c=i(c,15),c=r(c,461845907),s^=c,s=i(s,13),s=r(s,5)+3864292196;switch(c=0,a){case 3:c^=(255&e.charCodeAt(u+2))<<16;case 2:c^=(255&e.charCodeAt(u+1))<<8;case 1:c^=255&e.charCodeAt(u),c=r(c,3432918353),c=i(c,15),c=r(c,461845907),s^=c}return s^=e.length,s=n(s),s>>>0},d.x86.hash128=function(e,t){e=e||"",t=t||0;for(var a=e.length%16,o=e.length-a,s=t,c=t,u=t,h=t,d=0,l=0,g=0,m=0,f=0;f<o;f+=16)d=255&e.charCodeAt(f)|(255&e.charCodeAt(f+1))<<8|(255&e.charCodeAt(f+2))<<16|(255&e.charCodeAt(f+3))<<24,l=255&e.charCodeAt(f+4)|(255&e.charCodeAt(f+5))<<8|(255&e.charCodeAt(f+6))<<16|(255&e.charCodeAt(f+7))<<24,g=255&e.charCodeAt(f+8)|(255&e.charCodeAt(f+9))<<8|(255&e.charCodeAt(f+10))<<16|(255&e.charCodeAt(f+11))<<24,m=255&e.charCodeAt(f+12)|(255&e.charCodeAt(f+13))<<8|(255&e.charCodeAt(f+14))<<16|(255&e.charCodeAt(f+15))<<24,d=r(d,597399067),d=i(d,15),d=r(d,2869860233),s^=d,s=i(s,19),s+=c,s=r(s,5)+1444728091,l=r(l,2869860233),l=i(l,16),l=r(l,951274213),c^=l,c=i(c,17),c+=u,c=r(c,5)+197830471,g=r(g,951274213),g=i(g,17),g=r(g,2716044179),u^=g,u=i(u,15),u+=h,u=r(u,5)+2530024501,m=r(m,2716044179),m=i(m,18),m=r(m,597399067),h^=m,h=i(h,13),h+=s,h=r(h,5)+850148119;switch(m=g=l=d=0,a){case 15:m^=e.charCodeAt(f+14)<<16;case 14:m^=e.charCodeAt(f+13)<<8;case 13:m^=e.charCodeAt(f+12),m=r(m,2716044179),m=i(m,18),m=r(m,597399067),h^=m;case 12:g^=e.charCodeAt(f+11)<<24;case 11:g^=e.charCodeAt(f+10)<<16;case 10:g^=e.charCodeAt(f+9)<<8;case 9:g^=e.charCodeAt(f+8),g=r(g,951274213),g=i(g,17),g=r(g,2716044179),u^=g;case 8:l^=e.charCodeAt(f+7)<<24;case 7:l^=e.charCodeAt(f+6)<<16;case 6:l^=e.charCodeAt(f+5)<<8;case 5:l^=e.charCodeAt(f+4),l=r(l,2869860233),l=i(l,16),l=r(l,951274213),c^=l;case 4:d^=e.charCodeAt(f+3)<<24;case 3:d^=e.charCodeAt(f+2)<<16;case 2:d^=e.charCodeAt(f+1)<<8;case 1:d^=e.charCodeAt(f),d=r(d,597399067),d=i(d,15),d=r(d,2869860233),s^=d}return s^=e.length,c^=e.length,u^=e.length,h^=e.length,s=s+c+u,s+=h,c+=s,u+=s,h+=s,s=n(s),c=n(c),u=n(u),h=n(h),s+=c,s+=u,s+=h,c+=s,u+=s,h+=s,("00000000"+(s>>>0).toString(16)).slice(-8)+("00000000"+(c>>>0).toString(16)).slice(-8)+("00000000"+(u>>>0).toString(16)).slice(-8)+("00000000"+(h>>>0).toString(16)).slice(-8)},d.x64.hash128=function(e,t){e=e||"",t=t||0;for(var r=e.length%16,i=e.length-r,n=[0,t],d=[0,t],l=[0,0],g=[0,0],m=[2277735313,289559509],f=[1291169091,658871167],p=0;p<i;p+=16)l=[255&e.charCodeAt(p+4)|(255&e.charCodeAt(p+5))<<8|(255&e.charCodeAt(p+6))<<16|(255&e.charCodeAt(p+7))<<24,255&e.charCodeAt(p)|(255&e.charCodeAt(p+1))<<8|(255&e.charCodeAt(p+2))<<16|(255&e.charCodeAt(p+3))<<24],g=[255&e.charCodeAt(p+12)|(255&e.charCodeAt(p+13))<<8|(255&e.charCodeAt(p+14))<<16|(255&e.charCodeAt(p+15))<<24,255&e.charCodeAt(p+8)|(255&e.charCodeAt(p+9))<<8|(255&e.charCodeAt(p+10))<<16|(255&e.charCodeAt(p+11))<<24],l=o(l,m),l=s(l,31),l=o(l,f),n=u(n,l),n=s(n,27),n=a(n,d),n=a(o(n,[0,5]),[0,1390208809]),g=o(g,f),g=s(g,33),g=o(g,m),d=u(d,g),d=s(d,31),d=a(d,n),d=a(o(d,[0,5]),[0,944331445]);switch(l=[0,0],g=[0,0],r){case 15:g=u(g,c([0,e.charCodeAt(p+14)],48));case 14:g=u(g,c([0,e.charCodeAt(p+13)],40));case 13:g=u(g,c([0,e.charCodeAt(p+12)],32));case 12:g=u(g,c([0,e.charCodeAt(p+11)],24));case 11:g=u(g,c([0,e.charCodeAt(p+10)],16));case 10:g=u(g,c([0,e.charCodeAt(p+9)],8));case 9:g=u(g,[0,e.charCodeAt(p+8)]),g=o(g,f),g=s(g,33),g=o(g,m),d=u(d,g);case 8:l=u(l,c([0,e.charCodeAt(p+7)],56));case 7:l=u(l,c([0,e.charCodeAt(p+6)],48));case 6:l=u(l,c([0,e.charCodeAt(p+5)],40));case 5:l=u(l,c([0,e.charCodeAt(p+4)],32));case 4:l=u(l,c([0,e.charCodeAt(p+3)],24));case 3:l=u(l,c([0,e.charCodeAt(p+2)],16));case 2:l=u(l,c([0,e.charCodeAt(p+1)],8));case 1:l=u(l,[0,e.charCodeAt(p)]),l=o(l,m),l=s(l,31),l=o(l,f),n=u(n,l)}return n=u(n,[0,e.length]),d=u(d,[0,e.length]),n=a(n,d),d=a(d,n),n=h(n),d=h(d),n=a(n,d),d=a(d,n),("00000000"+(n[0]>>>0).toString(16)).slice(-8)+("00000000"+(n[1]>>>0).toString(16)).slice(-8)+("00000000"+(d[0]>>>0).toString(16)).slice(-8)+("00000000"+(d[1]>>>0).toString(16)).slice(-8)},"undefined"!=typeof exports?("undefined"!=typeof module&&module.exports&&(exports=module.exports=d),exports.murmurHash3=d):"function"==typeof define&&define.amd?define([],function(){return d}):(d._murmurHash3=e.murmurHash3,d.noConflict=function(){return e.murmurHash3=d._murmurHash3,d._murmurHash3=t,d.noConflict=t,d},e.murmurHash3=d)}(this),function(e){"use strict";var t={},r=e.imprint||{test:function(e){return Promise.all(e.map(function(e){if(!t.hasOwnProperty(e))throw"No test registered with the alias "+e;return t[e]()})).then(function(e){return murmurHash3.x86.hash128(e.join("~"))})},registerTest:function(e,r){t[e]=r}};"object"==typeof module&&"undefined"!=typeof exports&&(module.exports=imprint),e.imprint=r}(window),function(e){"use strict";imprint.registerTest("adBlocker",function(){return new Promise(function(e){var t=document.createElement("div");t.innerHTML="&nbsp;",t.className="adsbox",t.style.display="block",t.style.position="absolute",t.style.top="0px",t.style.left="-9999px";try{document.body.appendChild(t),window.setTimeout(function(){var r=0===t.offsetHeight;return document.body.removeChild(t),e(r)},10)}catch(t){return e(!1)}})})}(window),function(e){"use strict";imprint.registerTest("audio",function(){return new Promise(function(e){try{var t=new(window.AudioContext||window.webkitAudioContext),r=(t.createOscillator(),t.createAnalyser(),t.createGain(),t.createScriptProcessor(4096,1,1),t.destination),i=t.sampleRate.toString()+"_"+r.maxChannelCount+"_"+r.numberOfInputs+"_"+r.numberOfOutputs+"_"+r.channelCount+"_"+r.channelCountMode+"_"+r.channelInterpretation;return e(i)}catch(t){return e("")}})})}(window),function(e){"use strict";imprint.registerTest("availableScreenResolution",function(){return new Promise(function(e){var t=screen.availHeight>screen.availWidth?[screen.availHeight,screen.availWidth]:[screen.availWidth,screen.availHeight];return e(t.join("x"))})})}(window),function(e){"use strict";imprint.registerTest("canvas",function(){return new Promise(function(e){var t=[],r=document.createElement("canvas");r.width=2e3,r.height=200,r.style.display="inline";var i=r.getContext("2d");return i.rect(0,0,10,10),i.rect(2,2,6,6),t.push("canvas winding:"+(i.isPointInPath(5,5,"evenodd")===!1?"yes":"no")),i.textBaseline="alphabetic",i.fillStyle="#f60",i.fillRect(125,1,62,20),i.fillStyle="#069",i.font="11pt no-real-font-123",i.fillText("Cwm fjordbank glyphs vext quiz, 😃",2,15),i.fillStyle="rgba(102, 204, 0, 0.2)",i.font="18pt Arial",i.fillText("Cwm fjordbank glyphs vext quiz, 😃",4,45),i.globalCompositeOperation="multiply",i.fillStyle="rgb(255,0,255)",i.beginPath(),i.arc(50,50,50,0,2*Math.PI,!0),i.closePath(),i.fill(),i.fillStyle="rgb(0,255,255)",i.beginPath(),i.arc(100,50,50,0,2*Math.PI,!0),i.closePath(),i.fill(),i.fillStyle="rgb(255,255,0)",i.beginPath(),i.arc(75,100,50,0,2*Math.PI,!0),i.closePath(),i.fill(),i.fillStyle="rgb(255,0,255)",i.arc(75,75,75,0,2*Math.PI,!0),i.arc(75,75,25,0,2*Math.PI,!0),i.fill("evenodd"),t.push("canvas fp:"+r.toDataURL()),e(t.join("~"))})})}(window),function(e){"use strict";imprint.registerTest("colorDepth",function(){return new Promise(function(e){var t=screen.colorDepth;return 32===t&&(t=24),e(t||"")})})}(window),function(e){"use strict";imprint.registerTest("cookies",function(){return new Promise(function(e){return e(navigator.cookieEnabled)})})}(window),function(e){"use strict";imprint.registerTest("cpuClass",function(){return new Promise(function(e){return e(navigator.cpuClass||"")})})}(window),function(e){"use strict";imprint.registerTest("deviceDpi",function(){return new Promise(function(e){return e((screen.deviceXDPI||0)+"x"+(screen.deviceYDPI||0))})})}(window),function(e){"use strict";imprint.registerTest("doNotTrack",function(){return new Promise(function(e){return e(navigator.doNotTrack||navigator.msDoNotTrack||window.doNotTrack||"")})})}(window),function(e){"use strict";imprint.registerTest("indexedDb",function(){return new Promise(function(e){try{return e(!!window.indexedDB)}catch(t){return e(!0)}})})}(window);var FontDetector=function(){function e(e){var r=!0;for(var i in t){a.style.fontFamily=e+","+t[i],n.appendChild(a);var c=a.offsetWidth!=o[t[i]]||a.offsetHeight!=s[t[i]];n.removeChild(a),r=r&&c}return r}var t=["monospace","sans-serif","serif"],r="mmmmmmmmmmlli",i="201px",n=document.getElementsByTagName("body")[0],a=document.createElement("span");a.style.fontSize=i,a.innerHTML=r;var o={},s={};for(var c in t)a.style.fontFamily=t[c],n.appendChild(a),o[t[c]]=a.offsetWidth,s[t[c]]=a.offsetHeight,n.removeChild(a);this.detect=e};!function(e){"use strict";imprint.registerTest("installedFonts",function(){return new Promise(function(e){for(var t=new FontDetector,r=["ADOBE CASLON PRO","ADOBE GARAMOND PRO","AVENIR","Adobe Fangsong Std","Adobe Ming Std","Agency FB","Aharoni","Amazone BT","AngsanaUPC","Antique Olive","Apple Chancery","Apple Color Emoji","Apple SD Gothic Neo","Arab","Arial Baltic","Arial CE","Arial CYR","Arial Greek","Arial MT","Arial Unicode MS","Arrus BT","AvantGarde Bk BT","AvantGarde Md BT","Ayuthaya","Baskerville Old Face","Bell MT","Benguiat Bk BT","Berlin Sans FB","BernhardFashion BT","BernhardMod BT","Big Caslon","Bitstream Vera Sans Mono","Bitstream Vera Serif","BlairMdITC TT","Bodoni 72 Smallcaps","Bodoni MT Poster Compressed","Boulder","Bradley Hand","Broadway","Browallia New","BrowalliaUPC","Calisto MT","Cambria Math","Centaur","Chalkboard","Chalkboard SE","Chalkduster","Charter BT","ChelthmITC Bk BT","Chiller","Comic Sans MS","Constantia","Copperplate","Corbel","Cordia New","CordiaUPC","Coronet","Courier New Baltic","Courier New CE","Courier New CYR","Courier New TUR","Cuckoo","DFKai-SB","DaunPenh","Dauphin","David","DejaVu LGC Sans Mono","Denmark","Desdemona","DokChampa","Dotum","Ebrima","Edwardian Script ITC","Eras Bold ITC","EucrosiaUPC","Euphemia","Eurostile","FRUTIGER","FangSong","Felix Titling","Forte","Fransiscan","FreesiaUPC","French Script MT","FrnkGothITC Bk BT","Fruitger","Futura Bk BT","Futura Md BT","Futura ZBlk BT","FuturaBlack BT","Galliard BT","Garamond","Gautami","Geeza Pro","Geneva","GeoSlab 703 Lt BT","Geometr231 BT","Geometr231 Hv BT","Gigi","Gill Sans","GoudyOLSt BT","GulimChe","GungSeo","Gurmukhi MN","Harlow Solid Italic","Heather","HeiT","High Tower Text","Hiragino Kaku Gothic ProN","Hiragino Mincho ProN","Hiragino Sans GB","Hoefler Text","Humanst521 BT","Humanst521 Lt BT","Impact","Imprint MT Shadow","Incised901 BT","Incised901 Lt BT","Informal Roman","Informal011 BT","IrisUPC","Kabel Bk BT","KacstOne","KaiTi","Khmer UI","Kokila","LUCIDA GRANDE","Latha","Leelawadee","Lohit Gujarati","Long Island","Lucida Calligraphy","Lucida Console","Lucida Sans","Lucida Sans Typewriter","Lydian BT","MS Gothic","MS Mincho","MS PGothic","MS Reference Sans Serif","MS Reference Specialty","MS Serif","MUSEO","MYRIAD","Malgun Gothic","Mangal","Marigold","Market","Marlett","Meiryo","Meiryo UI","Menlo","Microsoft PhagsPa","Microsoft Uighur","MingLiU","MingLiU_HKSCS","Minion","Miriam Fixed","Mona Lisa Solid ITC TT","Monaco","Monotype Corsiva","NEVIS","News Gothic","News GothicMT","NewsGoth BT","Nyala","Old Century","Old English Text MT","Onyx","Oriya Sangam MN","PMingLiU","Palatino","Parchment","Pegasus","Perpetua","Perpetua Titling MT","Pickwick","Poster","Pristina","Raavi","Rage Italic","Rockwell","Roman","Sakkal Majalla","Savoye LET","Sawasdee","Segoe UI Symbol","Serifa BT","Serifa Th BT","Showcard Gothic","Shruti","Signboard","SimHei","SimSun","SimSun-ExtB","Simplified Arabic","Simplified Arabic Fixed","Sinhala Sangam MN","Sketch Rockwell","Socket","Stencil","Styllo","Swis721 BlkEx BT","Swiss911 XCm BT","Symbol","Synchro LET","System","TRAJAN PRO","Technical","Teletype","Tempus Sans ITC","Thonburi","Times","Times New Roman Baltic","Times New Roman CYR","Times New Roman PS","Trebuchet MS","Tubular","Tunga","Tw Cen MT","TypoUpright BT","Ubuntu","Unicorn","Utopia","Viner Hand ITC","Vivaldi","Vrinda","Westminster","Wide Latin","Zurich BlkEx BT"],i=[],n=0;n<r.length;n++)t.detect(r[n])&&i.push(r[n]);return e(i.join("~"))})})}(window),function(e){"use strict";var t,r;r=function(e){try{return JSON.parse(e)}catch(e){return!1}},t=function(){function e(){this.names=r('[ "Latin", "Chinese", "Arabic", "Devanagari", "Cyrillic", "Bengali/Assamese", "Kana", "Gurmukhi", "Javanese", "Hangul", "Telugu", "Tamil", "Malayalam", "Burmese", "Thai", "Sundanese", "Kannada", "Gujarati", "Lao", "Odia", "Ge-ez", "Sinhala", "Armenian", "Khmer", "Greek", "Lontara", "Hebrew", "Tibetan", "Georgian", "Modern Yi", "Mongolian", "Tifinagh", "Syriac", "Thaana", "Inuktitut", "Cherokee" ]'),this.codes=r("[[76,97,116,105,110], [27721,23383], [1575,1604,1593,1585,1576,1610,1577], [2342,2375,2357,2344,2366,2327,2352,2368], [1050,1080,1088,1080,1083,1080,1094,1072], [2476,2494,2434,2482,2494,32,47,32,2437,2488,2478,2496,2479,2492,2494], [20206,21517], [2583,2625,2608,2606,2625,2582,2624], [43415,43438], [54620,44544], [3108,3142,3122,3137,3095,3137], [2980,2990,3007,2996,3021], [3374,3378,3375,3390,3379,3330], [4121,4156,4116,4154,4121,4140], [3652,3607,3618], [7070,7077,7060,7082,7059], [3221,3240,3277,3240,3233], [2711,2753,2716,2736,2750,2724,2752], [3749,3762,3751], [2825,2852,2893,2837,2867], [4877,4821,4829], [3523,3538,3458,3524,3517], [1344,1377,1397,1400,1409], [6017,6098,6040,6082,6042], [917,955,955,951,957,953,954,972], [6674,6682,6664,6673], [1488,1500,1508,1489,1497,1514], [3926,3964,3921,3851], [4325,4304,4320,4311,4323,4314,4312], [41352,41760], [6190,6179,6185,6189,6179,6191], [11612,11593,11580,11593,11599,11568,11606], [1808,1834,1825,1821,1808], [1931,1960,1928,1964,1920,1960], [5123,5316,5251,5198,5200,5222], [5091,5043,5033], [55295, 7077]]"),this.fontSize=401,this.fontFace="Verdana",this.extraHeigth=15,this.res=[]}return e.prototype.begin=function(){var e,t,r,i,n,a,o,s,c,u,h,d,l,g,m,f,p,w,T,A,S,E,v,_,M,C,P,R;for(M=0,this.widths=[],this.heights=[],this.support=[],this.test_div=document.createElement("div"),document.body.appendChild(this.test_div),this.test_div.id="WritingTest",S=this.codes,n=0,c=S.length;n<c;n++){for(t=S[n],this.height=[],this.width=[],this.div=document.createElement("div"),this.test_div.appendChild(this.div),M+=1,this.div.id=M,this.div.style.display="inline-block",a=0,u=t.length;a<u;a++)e=t[a],this.div.innerHTML="<span style = 'font-family:"+this.fontFace+"; font-size:"+this.fontSize+"px;'>&#"+e+"</span>",this.height.push(document.getElementById(M).clientHeight),this.width.push(document.getElementById(M).clientWidth);for(this.div.innerHTML="",o=0,h=t.length;o<h;o++)e=t[o],this.div.innerHTML+="<span style = 'font-family:"+this.fontFace+"; font-size:"+this.fontSize+"px;'>&#"+e+"</span>";this.test_div.innerHTML+=this.height+";"+this.width+"<br>",this.heights.push(this.height),this.widths.push(this.width)}for(this.tw=this.widths.pop(),this.sw1=this.tw[0],this.sw2=this.tw[1],this.sh=this.heights.pop()[0],E=this.heights,s=0,d=E.length;s<d;s++){for(i=E[s],this.passed=0,p=0,l=i.length;p<l;p++)if(r=i[p],r!==this.sh){this.support.push(!0),this.passed=1;break}0===this.passed&&this.support.push(!1)}for(this.writing_scripts_index=0,v=this.widths,w=0,g=v.length;w<g;w++){for(R=v[w],T=0,m=R.length;T<m;T++)P=R[T],this.support[this.writing_scripts_index]===!1&&P!==this.sw1&&P!==this.sw2&&(this.support[this.writing_scripts_index]=!0);this.writing_scripts_index+=1}for(this.res=[],this.writing_scripts_index=0,_=this.support,A=0,f=_.length;A<f;A++)C=_[A],this.test_div.innerHTML+=this.names[this.writing_scripts_index]+": "+C+" <br>",C===!0&&this.res.push(this.names[this.writing_scripts_index]),this.writing_scripts_index+=1;return this.test_div.remove(),this.res},e}(),imprint.registerTest("installedLanguages",function(){return new Promise(function(e){try{var r=new t;return e(r.begin().join("~"))}catch(t){return e("")}})})}(window),function(e){"use strict";imprint.registerTest("language",function(){return new Promise(function(e){return e(navigator.language||navigator.userLanguage||navigator.browserLanguage||navigator.systemLanguage||"")})})}(window),function(e){"use strict";imprint.registerTest("localIp",function(){return new Promise(function(e){try{var t=window.RTCPeerConnection||window.mozRTCPeerConnection||window.webkitRTCPeerConnection,r=new t({iceServers:[]}),i=function(){};r.createDataChannel(""),r.createOffer(r.setLocalDescription.bind(r),i),r.onicecandidate=function(t){if(r.onicecandidate=i,!t||!t.candidate||!t.candidate.candidate)return e("");var n=/([0-9]{1,3}(\.[0-9]{1,3}){3}|[a-f0-9]{1,4}(:[a-f0-9]{1,4}){7})/.exec(t.candidate.candidate)[1];return e(n)}}catch(t){return e("")}})})}(window),function(e){"use strict";imprint.registerTest("localStorage",function(){return new Promise(function(e){try{return e(!!window.localStorage)}catch(t){return e(!0)}})})}(window),function(e){"use strict";imprint.registerTest("mediaDevices",function(){return new Promise(function(e){return navigator.mediaDevices&&navigator.mediaDevices.enumerateDevices?void navigator.mediaDevices.enumerateDevices().then(function(t){var r=t.map(function(e){return e.kind+":"+e.label+" id = "+e.deviceId});return e(r.join(","))}).catch(function(t){return e("")}):e(cd||"")})})}(window),function(e){"use strict";imprint.registerTest("pixelRatio",function(){return new Promise(function(e){return e(window.devicePixelRatio||"")})})}(window),function(e){"use strict";imprint.registerTest("platform",function(){return new Promise(function(e){return e(navigator.platform||"")})})}(window),function(e){"use strict";imprint.registerTest("plugins",function(){return new Promise(function(e){var t=[];if(Object.getOwnPropertyDescriptor&&Object.getOwnPropertyDescriptor(window,"ActiveXObject")||"ActiveXObject"in window){var r=["AcroPDF.PDF","Adodb.Stream","AgControl.AgControl","DevalVRXCtrl.DevalVRXCtrl.1","MacromediaFlashPaper.MacromediaFlashPaper","Msxml2.DOMDocument","Msxml2.XMLHTTP","PDF.PdfCtrl","QuickTime.QuickTime","QuickTimeCheckObject.QuickTimeCheck.1","RealPlayer","RealPlayer.RealPlayer(tm) ActiveX Control (32-bit)","RealVideo.RealVideo(tm) ActiveX Control (32-bit)","Scripting.Dictionary","SWCtl.SWCtl","Shell.UIHelper","ShockwaveFlash.ShockwaveFlash","Skype.Detection","TDCCtl.TDCCtl","WMPlayer.OCX","rmocx.RealPlayer G2 Control","rmocx.RealPlayer G2 Control.1"];t=r.map(function(e){try{return new ActiveXObject(e),e}catch(e){return null}})}if(navigator.plugins){for(var i=[],n=0,a=navigator.plugins.length;n<a;n++)i.push(navigator.plugins[n]);navigator.userAgent.match(/palemoon/i)&&(i=i.sort(function(e,t){return e.name>t.name?1:e.name<t.name?-1:0}));i.map(function(e){for(var r=[],i=0;i<e.length;i++){var n=e[i];r.push([n.type,n.suffixes].join("~"))}t.push([e.name,e.description,r.join(",")].join("::"))})}return e(t.join("~"))})})}(window),function(e){"use strict";imprint.registerTest("processorCores",function(){return new Promise(function(e){return e(navigator.hardwareConcurrency)})})}(window),function(e){"use strict";imprint.registerTest("publicIp",function(){return new Promise(function(e){var t=new XMLHttpRequest;t.onreadystatechange=function(){4==t.readyState&&200==t.status&&e(t.responseText)},t.open("GET","https://api.ipify.org",!0),t.send(null)})})}(window),function(e){"use strict";imprint.registerTest("screenResolution",function(){return new Promise(function(e){var t=screen.height>screen.width?[screen.height,screen.width]:[screen.width,screen.height];return e(t.join("x"))})})}(window),function(e){"use strict";imprint.registerTest("sessionStorage",function(){return new Promise(function(e){try{return e(!!window.sessionStorage)}catch(t){return e(!0)}})})}(window),function(e){"use strict";imprint.registerTest("timezoneOffset",function(){return new Promise(function(e){return e((new Date).getTimezoneOffset())})})}(window),function(e){"use strict";imprint.registerTest("touchSupport",function(){return new Promise(function(e){var t=0,r=!1;"undefined"!=typeof navigator.maxTouchPoints?t=navigator.maxTouchPoints:"undefined"!=typeof navigator.msMaxTouchPoints&&(t=navigator.msMaxTouchPoints);try{document.createEvent("TouchEvent"),r=!0}catch(e){}var i="ontouchstart"in window;return e([t,r,i].join("~"))})})}(window),function(e){"use strict";imprint.registerTest("userAgent",function(){return new Promise(function(e){return e(navigator.userAgent)})})}(window),function(e){"use strict";imprint.registerTest("webGl",function(){return new Promise(function(e){try{var t=function(e){return n.clearColor(0,0,0,1),n.enable(n.DEPTH_TEST),n.depthFunc(n.LEQUAL),n.clear(n.COLOR_BUFFER_BIT|n.DEPTH_BUFFER_BIT),"["+e[0]+", "+e[1]+"]"},r=function(e){var t,r=e.getExtension("EXT_texture_filter_anisotropic")||e.getExtension("WEBKIT_EXT_texture_filter_anisotropic")||e.getExtension("MOZ_EXT_texture_filter_anisotropic");return r?(t=e.getParameter(r.MAX_TEXTURE_MAX_ANISOTROPY_EXT),0===t&&(t=2),t):null},i=document.createElement("canvas"),n=null;try{n=i.getContext("webgl")||i.getContext("experimental-webgl")}catch(e){}if(!n)return e("");var a=[],o="attribute vec2 attrVertex;varying vec2 varyinTexCoordinate;uniform vec2 uniformOffset;void main(){varyinTexCoordinate=attrVertex+uniformOffset;gl_Position=vec4(attrVertex,0,1);}",s="precision mediump float;varying vec2 varyinTexCoordinate;void main() {gl_FragColor=vec4(varyinTexCoordinate,0,1);}",c=n.createBuffer();n.bindBuffer(n.ARRAY_BUFFER,c);var u=new Float32Array([-.2,-.9,0,.4,-.26,0,0,.732134444,0]);n.bufferData(n.ARRAY_BUFFER,u,n.STATIC_DRAW),c.itemSize=3,c.numItems=3;var h=n.createProgram(),d=n.createShader(n.VERTEX_SHADER);n.shaderSource(d,o),n.compileShader(d);var l=n.createShader(n.FRAGMENT_SHADER);n.shaderSource(l,s),n.compileShader(l),n.attachShader(h,d),n.attachShader(h,l),n.linkProgram(h),n.useProgram(h),h.vertexPosAttrib=n.getAttribLocation(h,"attrVertex"),h.offsetUniform=n.getUniformLocation(h,"uniformOffset"),n.enableVertexAttribArray(h.vertexPosArray),n.vertexAttribPointer(h.vertexPosAttrib,c.itemSize,n.FLOAT,!1,0,0),n.uniform2f(h.offsetUniform,1,1),n.drawArrays(n.TRIANGLE_STRIP,0,c.numItems),null!=n.canvas&&a.push(n.canvas.toDataURL()),a.push("extensions:"+n.getSupportedExtensions().join(";")),a.push("webgl aliased line width range:"+t(n.getParameter(n.ALIASED_LINE_WIDTH_RANGE))),a.push("webgl aliased point size range:"+t(n.getParameter(n.ALIASED_POINT_SIZE_RANGE))),a.push("webgl alpha bits:"+n.getParameter(n.ALPHA_BITS)),a.push("webgl antialiasing:"+(n.getContextAttributes().antialias?"yes":"no")),a.push("webgl blue bits:"+n.getParameter(n.BLUE_BITS)),a.push("webgl depth bits:"+n.getParameter(n.DEPTH_BITS)),a.push("webgl green bits:"+n.getParameter(n.GREEN_BITS)),a.push("webgl max anisotropy:"+r(n)),a.push("webgl max combined texture image units:"+n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS)),a.push("webgl max cube map texture size:"+n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE)),a.push("webgl max fragment uniform vectors:"+n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS)),a.push("webgl max render buffer size:"+n.getParameter(n.MAX_RENDERBUFFER_SIZE)),a.push("webgl max texture image units:"+n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS)),a.push("webgl max texture size:"+n.getParameter(n.MAX_TEXTURE_SIZE)),a.push("webgl max varying vectors:"+n.getParameter(n.MAX_VARYING_VECTORS)),a.push("webgl max vertex attribs:"+n.getParameter(n.MAX_VERTEX_ATTRIBS)),a.push("webgl max vertex texture image units:"+n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS)),a.push("webgl max vertex uniform vectors:"+n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS)),a.push("webgl max viewport dims:"+t(n.getParameter(n.MAX_VIEWPORT_DIMS))),a.push("webgl red bits:"+n.getParameter(n.RED_BITS)),a.push("webgl renderer:"+n.getParameter(n.RENDERER)),a.push("webgl shading language version:"+n.getParameter(n.SHADING_LANGUAGE_VERSION)),a.push("webgl stencil bits:"+n.getParameter(n.STENCIL_BITS)),a.push("webgl vendor:"+n.getParameter(n.VENDOR)),a.push("webgl version:"+n.getParameter(n.VERSION));try{var g=n.getExtension("WEBGL_debug_renderer_info");g&&(a.push("webgl unmasked vendor:"+n.getParameter(g.UNMASKED_VENDOR_WEBGL)),a.push("webgl unmasked renderer:"+n.getParameter(g.UNMASKED_RENDERER_WEBGL)))}catch(e){}return n.getShaderPrecisionFormat?(a.push("webgl vertex shader high float precision:"+n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision),a.push("webgl vertex shader high float precision rangeMin:"+n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).rangeMin),a.push("webgl vertex shader high float precision rangeMax:"+n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).rangeMax),a.push("webgl vertex shader medium float precision:"+n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision),a.push("webgl vertex shader medium float precision rangeMin:"+n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).rangeMin),a.push("webgl vertex shader medium float precision rangeMax:"+n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).rangeMax),a.push("webgl vertex shader low float precision:"+n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.LOW_FLOAT).precision),a.push("webgl vertex shader low float precision rangeMin:"+n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.LOW_FLOAT).rangeMin),a.push("webgl vertex shader low float precision rangeMax:"+n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.LOW_FLOAT).rangeMax),a.push("webgl fragment shader high float precision:"+n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision),a.push("webgl fragment shader high float precision rangeMin:"+n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).rangeMin),a.push("webgl fragment shader high float precision rangeMax:"+n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).rangeMax),a.push("webgl fragment shader medium float precision:"+n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision),a.push("webgl fragment shader medium float precision rangeMin:"+n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).rangeMin),a.push("webgl fragment shader medium float precision rangeMax:"+n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).rangeMax),a.push("webgl fragment shader low float precision:"+n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.LOW_FLOAT).precision),a.push("webgl fragment shader low float precision rangeMin:"+n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.LOW_FLOAT).rangeMin),a.push("webgl fragment shader low float precision rangeMax:"+n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.LOW_FLOAT).rangeMax),a.push("webgl vertex shader high int precision:"+n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_INT).precision),a.push("webgl vertex shader high int precision rangeMin:"+n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_INT).rangeMin),a.push("webgl vertex shader high int precision rangeMax:"+n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_INT).rangeMax),a.push("webgl vertex shader medium int precision:"+n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_INT).precision),a.push("webgl vertex shader medium int precision rangeMin:"+n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_INT).rangeMin),a.push("webgl vertex shader medium int precision rangeMax:"+n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_INT).rangeMax),a.push("webgl vertex shader low int precision:"+n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.LOW_INT).precision),a.push("webgl vertex shader low int precision rangeMin:"+n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.LOW_INT).rangeMin),a.push("webgl vertex shader low int precision rangeMax:"+n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.LOW_INT).rangeMax),a.push("webgl fragment shader high int precision:"+n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_INT).precision),a.push("webgl fragment shader high int precision rangeMin:"+n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_INT).rangeMin),a.push("webgl fragment shader high int precision rangeMax:"+n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_INT).rangeMax),
    a.push("webgl fragment shader medium int precision:"+n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_INT).precision),a.push("webgl fragment shader medium int precision rangeMin:"+n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_INT).rangeMin),a.push("webgl fragment shader medium int precision rangeMax:"+n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_INT).rangeMax),a.push("webgl fragment shader low int precision:"+n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.LOW_INT).precision),a.push("webgl fragment shader low int precision rangeMin:"+n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.LOW_INT).rangeMin),a.push("webgl fragment shader low int precision rangeMax:"+n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.LOW_INT).rangeMax),e(a.join("~"))):e(a.join("~"))}catch(t){return e("")}})})}(window);