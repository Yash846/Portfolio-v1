/*! For license information please see app.js.LICENSE.txt */
(()=>{var t={711:function(t){t.exports=function(t){function e(o){if(n[o])return n[o].exports;var i=n[o]={exports:{},id:o,loaded:!1};return t[o].call(i.exports,i,i.exports,e),i.loaded=!0,i.exports}var n={};return e.m=t,e.c=n,e.p="dist/",e(0)}([function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}var i=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},r=(o(n(1)),n(6)),s=o(r),a=o(n(7)),u=o(n(8)),c=o(n(9)),l=o(n(10)),d=o(n(11)),f=o(n(14)),p=[],h=!1,m={offset:120,delay:0,easing:"ease",duration:400,disable:!1,once:!1,startEvent:"DOMContentLoaded",throttleDelay:99,debounceDelay:50,disableMutationObserver:!1},y=function(){if(arguments.length>0&&void 0!==arguments[0]&&arguments[0]&&(h=!0),h)return p=(0,d.default)(p,m),(0,l.default)(p,m.once),p},v=function(){p=(0,f.default)(),y()};t.exports={init:function(t){m=i(m,t),p=(0,f.default)();var e=document.all&&!window.atob;return function(t){return!0===t||"mobile"===t&&c.default.mobile()||"phone"===t&&c.default.phone()||"tablet"===t&&c.default.tablet()||"function"==typeof t&&!0===t()}(m.disable)||e?void p.forEach((function(t,e){t.node.removeAttribute("data-aos"),t.node.removeAttribute("data-aos-easing"),t.node.removeAttribute("data-aos-duration"),t.node.removeAttribute("data-aos-delay")})):(m.disableMutationObserver||u.default.isSupported()||(console.info('\n      aos: MutationObserver is not supported on this browser,\n      code mutations observing has been disabled.\n      You may have to call "refreshHard()" by yourself.\n    '),m.disableMutationObserver=!0),document.querySelector("body").setAttribute("data-aos-easing",m.easing),document.querySelector("body").setAttribute("data-aos-duration",m.duration),document.querySelector("body").setAttribute("data-aos-delay",m.delay),"DOMContentLoaded"===m.startEvent&&["complete","interactive"].indexOf(document.readyState)>-1?y(!0):"load"===m.startEvent?window.addEventListener(m.startEvent,(function(){y(!0)})):document.addEventListener(m.startEvent,(function(){y(!0)})),window.addEventListener("resize",(0,a.default)(y,m.debounceDelay,!0)),window.addEventListener("orientationchange",(0,a.default)(y,m.debounceDelay,!0)),window.addEventListener("scroll",(0,s.default)((function(){(0,l.default)(p,m.once)}),m.throttleDelay)),m.disableMutationObserver||u.default.ready("[data-aos]",v),p)},refresh:y,refreshHard:v}},function(t,e){},,,,,function(t,e){(function(e){"use strict";function n(t,e,n){function i(e){var n=f,o=p;return f=p=void 0,b=e,m=t.apply(o,n)}function s(t){return b=t,y=setTimeout(c,e),O?i(t):m}function u(t){var n=t-v;return void 0===v||n>=e||n<0||x&&t-b>=h}function c(){var t=k();return u(t)?l(t):void(y=setTimeout(c,function(t){var n=e-(t-v);return x?w(n,h-(t-b)):n}(t)))}function l(t){return y=void 0,S&&f?i(t):(f=p=void 0,m)}function d(){var t=k(),n=u(t);if(f=arguments,p=this,v=t,n){if(void 0===y)return s(v);if(x)return y=setTimeout(c,e),i(v)}return void 0===y&&(y=setTimeout(c,e)),m}var f,p,h,m,y,v,b=0,O=!1,x=!1,S=!0;if("function"!=typeof t)throw new TypeError(a);return e=r(e)||0,o(n)&&(O=!!n.leading,h=(x="maxWait"in n)?g(r(n.maxWait)||0,e):h,S="trailing"in n?!!n.trailing:S),d.cancel=function(){void 0!==y&&clearTimeout(y),b=0,f=v=p=y=void 0},d.flush=function(){return void 0===y?m:l(k())},d}function o(t){var e=void 0===t?"undefined":s(t);return!!t&&("object"==e||"function"==e)}function i(t){return"symbol"==(void 0===t?"undefined":s(t))||function(t){return!!t&&"object"==(void 0===t?"undefined":s(t))}(t)&&b.call(t)==c}function r(t){if("number"==typeof t)return t;if(i(t))return u;if(o(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=o(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(l,"");var n=f.test(t);return n||p.test(t)?h(t.slice(2),n?2:8):d.test(t)?u:+t}var s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},a="Expected a function",u=NaN,c="[object Symbol]",l=/^\s+|\s+$/g,d=/^[-+]0x[0-9a-f]+$/i,f=/^0b[01]+$/i,p=/^0o[0-7]+$/i,h=parseInt,m="object"==(void 0===e?"undefined":s(e))&&e&&e.Object===Object&&e,y="object"==("undefined"==typeof self?"undefined":s(self))&&self&&self.Object===Object&&self,v=m||y||Function("return this")(),b=Object.prototype.toString,g=Math.max,w=Math.min,k=function(){return v.Date.now()};t.exports=function(t,e,i){var r=!0,s=!0;if("function"!=typeof t)throw new TypeError(a);return o(i)&&(r="leading"in i?!!i.leading:r,s="trailing"in i?!!i.trailing:s),n(t,e,{leading:r,maxWait:e,trailing:s})}}).call(e,function(){return this}())},function(t,e){(function(e){"use strict";function n(t){var e=void 0===t?"undefined":r(t);return!!t&&("object"==e||"function"==e)}function o(t){return"symbol"==(void 0===t?"undefined":r(t))||function(t){return!!t&&"object"==(void 0===t?"undefined":r(t))}(t)&&v.call(t)==u}function i(t){if("number"==typeof t)return t;if(o(t))return a;if(n(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=n(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(c,"");var i=d.test(t);return i||f.test(t)?p(t.slice(2),i?2:8):l.test(t)?a:+t}var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},s="Expected a function",a=NaN,u="[object Symbol]",c=/^\s+|\s+$/g,l=/^[-+]0x[0-9a-f]+$/i,d=/^0b[01]+$/i,f=/^0o[0-7]+$/i,p=parseInt,h="object"==(void 0===e?"undefined":r(e))&&e&&e.Object===Object&&e,m="object"==("undefined"==typeof self?"undefined":r(self))&&self&&self.Object===Object&&self,y=h||m||Function("return this")(),v=Object.prototype.toString,b=Math.max,g=Math.min,w=function(){return y.Date.now()};t.exports=function(t,e,o){function r(e){var n=f,o=p;return f=p=void 0,k=e,m=t.apply(o,n)}function a(t){return k=t,y=setTimeout(c,e),O?r(t):m}function u(t){var n=t-v;return void 0===v||n>=e||n<0||x&&t-k>=h}function c(){var t=w();return u(t)?l(t):void(y=setTimeout(c,function(t){var n=e-(t-v);return x?g(n,h-(t-k)):n}(t)))}function l(t){return y=void 0,S&&f?r(t):(f=p=void 0,m)}function d(){var t=w(),n=u(t);if(f=arguments,p=this,v=t,n){if(void 0===y)return a(v);if(x)return y=setTimeout(c,e),r(v)}return void 0===y&&(y=setTimeout(c,e)),m}var f,p,h,m,y,v,k=0,O=!1,x=!1,S=!0;if("function"!=typeof t)throw new TypeError(s);return e=i(e)||0,n(o)&&(O=!!o.leading,h=(x="maxWait"in o)?b(i(o.maxWait)||0,e):h,S="trailing"in o?!!o.trailing:S),d.cancel=function(){void 0!==y&&clearTimeout(y),k=0,f=v=p=y=void 0},d.flush=function(){return void 0===y?m:l(w())},d}}).call(e,function(){return this}())},function(t,e){"use strict";function n(t){var e=void 0,o=void 0;for(e=0;e<t.length;e+=1){if((o=t[e]).dataset&&o.dataset.aos)return!0;if(o.children&&n(o.children))return!0}return!1}function o(){return window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver}function i(t){t&&t.forEach((function(t){var e=Array.prototype.slice.call(t.addedNodes),o=Array.prototype.slice.call(t.removedNodes);if(n(e.concat(o)))return r()}))}Object.defineProperty(e,"__esModule",{value:!0});var r=function(){};e.default={isSupported:function(){return!!o()},ready:function(t,e){var n=window.document,s=new(o())(i);r=e,s.observe(n.documentElement,{childList:!0,subtree:!0,removedNodes:!0})}}},function(t,e){"use strict";function n(){return navigator.userAgent||navigator.vendor||window.opera||""}Object.defineProperty(e,"__esModule",{value:!0});var o=function(){function t(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}}(),i=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,r=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,s=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,a=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,u=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t)}return o(t,[{key:"phone",value:function(){var t=n();return!(!i.test(t)&&!r.test(t.substr(0,4)))}},{key:"mobile",value:function(){var t=n();return!(!s.test(t)&&!a.test(t.substr(0,4)))}},{key:"tablet",value:function(){return this.mobile()&&!this.phone()}}]),t}();e.default=new u},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.default=function(t,e){var n=window.pageYOffset,o=window.innerHeight;t.forEach((function(t,i){!function(t,e,n){var o=t.node.getAttribute("data-aos-once");e>t.position?t.node.classList.add("aos-animate"):void 0!==o&&("false"===o||!n&&"true"!==o)&&t.node.classList.remove("aos-animate")}(t,o+n,e)}))}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=function(t){return t&&t.__esModule?t:{default:t}}(n(12));e.default=function(t,e){return t.forEach((function(t,n){t.node.classList.add("aos-init"),t.position=(0,o.default)(t.node,e.offset)})),t}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=function(t){return t&&t.__esModule?t:{default:t}}(n(13));e.default=function(t,e){var n=0,i=0,r=window.innerHeight,s={offset:t.getAttribute("data-aos-offset"),anchor:t.getAttribute("data-aos-anchor"),anchorPlacement:t.getAttribute("data-aos-anchor-placement")};switch(s.offset&&!isNaN(s.offset)&&(i=parseInt(s.offset)),s.anchor&&document.querySelectorAll(s.anchor)&&(t=document.querySelectorAll(s.anchor)[0]),n=(0,o.default)(t).top,s.anchorPlacement){case"top-bottom":break;case"center-bottom":n+=t.offsetHeight/2;break;case"bottom-bottom":n+=t.offsetHeight;break;case"top-center":n+=r/2;break;case"bottom-center":n+=r/2+t.offsetHeight;break;case"center-center":n+=r/2+t.offsetHeight/2;break;case"top-top":n+=r;break;case"bottom-top":n+=t.offsetHeight+r;break;case"center-top":n+=t.offsetHeight/2+r}return s.anchorPlacement||s.offset||isNaN(e)||(i=e),n+i}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.default=function(t){for(var e=0,n=0;t&&!isNaN(t.offsetLeft)&&!isNaN(t.offsetTop);)e+=t.offsetLeft-("BODY"!=t.tagName?t.scrollLeft:0),n+=t.offsetTop-("BODY"!=t.tagName?t.scrollTop:0),t=t.offsetParent;return{top:n,left:e}}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.default=function(t){return t=t||document.querySelectorAll("[data-aos]"),Array.prototype.map.call(t,(function(t){return{node:t}}))}}])},614:function(t){var e;e=function(){return function(t){var e={};function n(o){if(e[o])return e[o].exports;var i=e[o]={exports:{},id:o,loaded:!1};return t[o].call(i.exports,i,i.exports,n),i.loaded=!0,i.exports}return n.m=t,n.c=e,n.p="",n(0)}([function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=function(){function t(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}}(),i=n(1),r=n(3),s=function(){function t(e,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),i.initializer.load(this,n,e),this.begin()}return o(t,[{key:"toggle",value:function(){this.pause.status?this.start():this.stop()}},{key:"stop",value:function(){this.typingComplete||this.pause.status||(this.toggleBlinking(!0),this.pause.status=!0,this.options.onStop(this.arrayPos,this))}},{key:"start",value:function(){this.typingComplete||this.pause.status&&(this.pause.status=!1,this.pause.typewrite?this.typewrite(this.pause.curString,this.pause.curStrPos):this.backspace(this.pause.curString,this.pause.curStrPos),this.options.onStart(this.arrayPos,this))}},{key:"destroy",value:function(){this.reset(!1),this.options.onDestroy(this)}},{key:"reset",value:function(){var t=arguments.length<=0||void 0===arguments[0]||arguments[0];clearInterval(this.timeout),this.replaceText(""),this.cursor&&this.cursor.parentNode&&(this.cursor.parentNode.removeChild(this.cursor),this.cursor=null),this.strPos=0,this.arrayPos=0,this.curLoop=0,t&&(this.insertCursor(),this.options.onReset(this),this.begin())}},{key:"begin",value:function(){var t=this;this.options.onBegin(this),this.typingComplete=!1,this.shuffleStringsIfNeeded(this),this.insertCursor(),this.bindInputFocusEvents&&this.bindFocusEvents(),this.timeout=setTimeout((function(){t.currentElContent&&0!==t.currentElContent.length?t.backspace(t.currentElContent,t.currentElContent.length):t.typewrite(t.strings[t.sequence[t.arrayPos]],t.strPos)}),this.startDelay)}},{key:"typewrite",value:function(t,e){var n=this;this.fadeOut&&this.el.classList.contains(this.fadeOutClass)&&(this.el.classList.remove(this.fadeOutClass),this.cursor&&this.cursor.classList.remove(this.fadeOutClass));var o=this.humanizer(this.typeSpeed),i=1;!0!==this.pause.status?this.timeout=setTimeout((function(){e=r.htmlParser.typeHtmlChars(t,e,n);var o=0,s=t.substr(e);if("^"===s.charAt(0)&&/^\^\d+/.test(s)){var a=1;a+=(s=/\d+/.exec(s)[0]).length,o=parseInt(s),n.temporaryPause=!0,n.options.onTypingPaused(n.arrayPos,n),t=t.substring(0,e)+t.substring(e+a),n.toggleBlinking(!0)}if("`"===s.charAt(0)){for(;"`"!==t.substr(e+i).charAt(0)&&(i++,!(e+i>t.length)););var u=t.substring(0,e),c=t.substring(u.length+1,e+i),l=t.substring(e+i+1);t=u+c+l,i--}n.timeout=setTimeout((function(){n.toggleBlinking(!1),e>=t.length?n.doneTyping(t,e):n.keepTyping(t,e,i),n.temporaryPause&&(n.temporaryPause=!1,n.options.onTypingResumed(n.arrayPos,n))}),o)}),o):this.setPauseStatus(t,e,!0)}},{key:"keepTyping",value:function(t,e,n){0===e&&(this.toggleBlinking(!1),this.options.preStringTyped(this.arrayPos,this)),e+=n;var o=t.substr(0,e);this.replaceText(o),this.typewrite(t,e)}},{key:"doneTyping",value:function(t,e){var n=this;this.options.onStringTyped(this.arrayPos,this),this.toggleBlinking(!0),this.arrayPos===this.strings.length-1&&(this.complete(),!1===this.loop||this.curLoop===this.loopCount)||(this.timeout=setTimeout((function(){n.backspace(t,e)}),this.backDelay))}},{key:"backspace",value:function(t,e){var n=this;if(!0!==this.pause.status){if(this.fadeOut)return this.initFadeOut();this.toggleBlinking(!1);var o=this.humanizer(this.backSpeed);this.timeout=setTimeout((function(){e=r.htmlParser.backSpaceHtmlChars(t,e,n);var o=t.substr(0,e);if(n.replaceText(o),n.smartBackspace){var i=n.strings[n.arrayPos+1];i&&o===i.substr(0,e)?n.stopNum=e:n.stopNum=0}e>n.stopNum?(e--,n.backspace(t,e)):e<=n.stopNum&&(n.arrayPos++,n.arrayPos===n.strings.length?(n.arrayPos=0,n.options.onLastStringBackspaced(),n.shuffleStringsIfNeeded(),n.begin()):n.typewrite(n.strings[n.sequence[n.arrayPos]],e))}),o)}else this.setPauseStatus(t,e,!1)}},{key:"complete",value:function(){this.options.onComplete(this),this.loop?this.curLoop++:this.typingComplete=!0}},{key:"setPauseStatus",value:function(t,e,n){this.pause.typewrite=n,this.pause.curString=t,this.pause.curStrPos=e}},{key:"toggleBlinking",value:function(t){this.cursor&&(this.pause.status||this.cursorBlinking!==t&&(this.cursorBlinking=t,t?this.cursor.classList.add("typed-cursor--blink"):this.cursor.classList.remove("typed-cursor--blink")))}},{key:"humanizer",value:function(t){return Math.round(Math.random()*t/2)+t}},{key:"shuffleStringsIfNeeded",value:function(){this.shuffle&&(this.sequence=this.sequence.sort((function(){return Math.random()-.5})))}},{key:"initFadeOut",value:function(){var t=this;return this.el.className+=" "+this.fadeOutClass,this.cursor&&(this.cursor.className+=" "+this.fadeOutClass),setTimeout((function(){t.arrayPos++,t.replaceText(""),t.strings.length>t.arrayPos?t.typewrite(t.strings[t.sequence[t.arrayPos]],0):(t.typewrite(t.strings[0],0),t.arrayPos=0)}),this.fadeOutDelay)}},{key:"replaceText",value:function(t){this.attr?this.el.setAttribute(this.attr,t):this.isInput?this.el.value=t:"html"===this.contentType?this.el.innerHTML=t:this.el.textContent=t}},{key:"bindFocusEvents",value:function(){var t=this;this.isInput&&(this.el.addEventListener("focus",(function(e){t.stop()})),this.el.addEventListener("blur",(function(e){t.el.value&&0!==t.el.value.length||t.start()})))}},{key:"insertCursor",value:function(){this.showCursor&&(this.cursor||(this.cursor=document.createElement("span"),this.cursor.className="typed-cursor",this.cursor.setAttribute("aria-hidden",!0),this.cursor.innerHTML=this.cursorChar,this.el.parentNode&&this.el.parentNode.insertBefore(this.cursor,this.el.nextSibling)))}}]),t}();e.default=s,t.exports=e.default},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o,i=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},r=function(){function t(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}}(),s=(o=n(2))&&o.__esModule?o:{default:o},a=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t)}return r(t,[{key:"load",value:function(t,e,n){if(t.el="string"==typeof n?document.querySelector(n):n,t.options=i({},s.default,e),t.isInput="input"===t.el.tagName.toLowerCase(),t.attr=t.options.attr,t.bindInputFocusEvents=t.options.bindInputFocusEvents,t.showCursor=!t.isInput&&t.options.showCursor,t.cursorChar=t.options.cursorChar,t.cursorBlinking=!0,t.elContent=t.attr?t.el.getAttribute(t.attr):t.el.textContent,t.contentType=t.options.contentType,t.typeSpeed=t.options.typeSpeed,t.startDelay=t.options.startDelay,t.backSpeed=t.options.backSpeed,t.smartBackspace=t.options.smartBackspace,t.backDelay=t.options.backDelay,t.fadeOut=t.options.fadeOut,t.fadeOutClass=t.options.fadeOutClass,t.fadeOutDelay=t.options.fadeOutDelay,t.isPaused=!1,t.strings=t.options.strings.map((function(t){return t.trim()})),"string"==typeof t.options.stringsElement?t.stringsElement=document.querySelector(t.options.stringsElement):t.stringsElement=t.options.stringsElement,t.stringsElement){t.strings=[],t.stringsElement.style.display="none";var o=Array.prototype.slice.apply(t.stringsElement.children),r=o.length;if(r)for(var a=0;a<r;a+=1){var u=o[a];t.strings.push(u.innerHTML.trim())}}for(var a in t.strPos=0,t.arrayPos=0,t.stopNum=0,t.loop=t.options.loop,t.loopCount=t.options.loopCount,t.curLoop=0,t.shuffle=t.options.shuffle,t.sequence=[],t.pause={status:!1,typewrite:!0,curString:"",curStrPos:0},t.typingComplete=!1,t.strings)t.sequence[a]=a;t.currentElContent=this.getCurrentElContent(t),t.autoInsertCss=t.options.autoInsertCss,this.appendAnimationCss(t)}},{key:"getCurrentElContent",value:function(t){return t.attr?t.el.getAttribute(t.attr):t.isInput?t.el.value:"html"===t.contentType?t.el.innerHTML:t.el.textContent}},{key:"appendAnimationCss",value:function(t){var e="data-typed-js-css";if(t.autoInsertCss&&(t.showCursor||t.fadeOut)&&!document.querySelector("["+e+"]")){var n=document.createElement("style");n.type="text/css",n.setAttribute(e,!0);var o="";t.showCursor&&(o+="\n        .typed-cursor{\n          opacity: 1;\n        }\n        .typed-cursor.typed-cursor--blink{\n          animation: typedjsBlink 0.7s infinite;\n          -webkit-animation: typedjsBlink 0.7s infinite;\n                  animation: typedjsBlink 0.7s infinite;\n        }\n        @keyframes typedjsBlink{\n          50% { opacity: 0.0; }\n        }\n        @-webkit-keyframes typedjsBlink{\n          0% { opacity: 1; }\n          50% { opacity: 0.0; }\n          100% { opacity: 1; }\n        }\n      "),t.fadeOut&&(o+="\n        .typed-fade-out{\n          opacity: 0;\n          transition: opacity .25s;\n        }\n        .typed-cursor.typed-cursor--blink.typed-fade-out{\n          -webkit-animation: 0;\n          animation: 0;\n        }\n      "),0!==n.length&&(n.innerHTML=o,document.body.appendChild(n))}}}]),t}();e.default=a;var u=new a;e.initializer=u},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.default={strings:["These are the default values...","You know what you should do?","Use your own!","Have a great day!"],stringsElement:null,typeSpeed:0,startDelay:0,backSpeed:0,smartBackspace:!0,shuffle:!1,backDelay:700,fadeOut:!1,fadeOutClass:"typed-fade-out",fadeOutDelay:500,loop:!1,loopCount:1/0,showCursor:!0,cursorChar:"|",autoInsertCss:!0,attr:null,bindInputFocusEvents:!1,contentType:"html",onBegin:function(t){},onComplete:function(t){},preStringTyped:function(t,e){},onStringTyped:function(t,e){},onLastStringBackspaced:function(t){},onTypingPaused:function(t,e){},onTypingResumed:function(t,e){},onReset:function(t){},onStop:function(t,e){},onStart:function(t,e){},onDestroy:function(t){}},t.exports=e.default},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=function(){function t(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(e,n,o){return n&&t(e.prototype,n),o&&t(e,o),e}}(),o=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t)}return n(t,[{key:"typeHtmlChars",value:function(t,e,n){if("html"!==n.contentType)return e;var o=t.substr(e).charAt(0);if("<"===o||"&"===o){var i;for(i="<"===o?">":";";t.substr(e+1).charAt(0)!==i&&!(1+ ++e>t.length););e++}return e}},{key:"backSpaceHtmlChars",value:function(t,e,n){if("html"!==n.contentType)return e;var o=t.substr(e).charAt(0);if(">"===o||";"===o){var i;for(i=">"===o?"<":"&";t.substr(e-1).charAt(0)!==i&&!(--e<0););e--}return e}}]),t}();e.default=o;var i=new o;e.htmlParser=i}])},t.exports=e()}},e={};function n(o){var i=e[o];if(void 0!==i)return i.exports;var r=e[o]={exports:{}};return t[o].call(r.exports,r,r.exports,n),r.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var o in e)n.o(e,o)&&!n.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{"use strict";var t=n(711),e=n.n(t),o=n(614),i=n.n(o);const r=document.querySelector(".loader"),s=document.querySelector(".main");function a(t=0){window.scrollTo(0,t),setTimeout((()=>{r.classList.add("exit"),setTimeout((()=>{r.style.display="none",document.body.style.overflowY="initial",s.style.display="block",window.scrollTo(0,t),setTimeout((()=>{s.style.opacity=1,e().init({easing:"ease-in-out"})}),50)}),500)}),5e3)}a(),document.getElementById("name-img").addEventListener("click",(()=>{const t=window.scrollY;s.style.opacity=0,s.style.display="none",r.classList.remove("exit"),r.style.display="block",a(t)}));let u=document.getElementById("typed").getAttribute("data-type-items");u=u.split(","),new(i())("#typed",{strings:u,loop:!0,typeSpeed:30,backSpeed:30,backDelay:1500});const c=document.querySelectorAll(".nav-item"),l=document.querySelector(".nav-toggle"),d=document.querySelector("#header");let f=!1;l.addEventListener("click",(()=>{f?(d.classList.remove("nav-active"),l.classList.remove("burger-transform"),f=!1):(d.classList.add("nav-active"),l.classList.add("burger-transform"),f=!0)})),c.forEach((t=>{t.addEventListener("click",(()=>{d.classList.remove("nav-active"),l.classList.remove("burger-transform"),f=!1}))}));const p=document.querySelectorAll("section"),h=document.querySelectorAll("nav li");window.addEventListener("scroll",(()=>{let t="";p.forEach((e=>{const n=e.offsetTop,o=e.clientHeight;pageYOffset>=n-o/3&&(t=e.getAttribute("id"))})),h.forEach((e=>{e.classList.remove("active"),e.dataset.name.includes(t)&&e.classList.add("active")}))}))})()})();