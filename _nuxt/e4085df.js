(window.webpackJsonp=window.webpackJsonp||[]).push([[10,0],{394:function(t,e,r){"use strict";var o=r(7),n=r(395);o({target:"String",proto:!0,forced:r(396)("link")},{link:function(t){return n(this,"a","href",t)}})},395:function(t,e,r){var o=r(3),n=r(22),c=r(14),l=/"/g,m=o("".replace);t.exports=function(t,e,r,o){var d=c(n(t)),_="<"+e;return""!==r&&(_+=" "+r+'="'+m(c(o),l,"&quot;")+'"'),_+">"+d+"</"+e+">"}},396:function(t,e,r){var o=r(4);t.exports=function(t){return o((function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3}))}},398:function(t,e,r){"use strict";r.d(e,"a",(function(){return n})),r.d(e,"b",(function(){return l}));var o=r(6);r(26),r(10),r(27),r(28),r(394);function n(t){return c.apply(this,arguments)}function c(){return(c=Object(o.a)(regeneratorRuntime.mark((function t(e){var o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,r(399)("./".concat(e,".md"));case 2:return(o=t.sent).attributes.slug=e,o.attributes.date=new Date(o.attributes.date),o.attributes.link="/blog/".concat(e,"/"),o.attributes.mins=Math.round(o.body.length/1250)||1,o.attributes.tableOfContents=function(){var t;(t=document.createElement("div")).innerHTML=o.html;var e=t.querySelector(".table-of-contents");return e&&e.outerHTML}(),t.abrupt("return",o);case 9:case"end":return t.stop()}}),t)})))).apply(this,arguments)}var l=["spaceborne-construction-detection-and-progress-tracking","novitai-background-pack"]},399:function(t,e,r){var map={"./README.md":[415,24],"./novitai-background-pack.md":[416,25],"./spaceborne-construction-detection-and-progress-tracking.md":[417,26]};function o(t){if(!r.o(map,t))return Promise.resolve().then((function(){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}));var e=map[t],o=e[0];return r.e(e[1]).then((function(){return r.t(o,7)}))}o.keys=function(){return Object.keys(map)},o.id=399,t.exports=o},400:function(t,e,r){"use strict";r.d(e,"a",(function(){return n})),r.d(e,"b",(function(){return l}));var o=r(6);r(26),r(10),r(27),r(28),r(394);function n(t){return c.apply(this,arguments)}function c(){return(c=Object(o.a)(regeneratorRuntime.mark((function t(e){var o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,r(401)("./".concat(e,".md"));case 2:return(o=t.sent).attributes.slug=e,o.attributes.date=new Date(o.attributes.date),o.attributes.link="/services/".concat(e,"/"),o.attributes.mins=Math.round(o.body.length/1250)||1,o.attributes.tableOfContents=function(){var t;(t=document.createElement("div")).innerHTML=o.html;var e=t.querySelector(".table-of-contents");return e&&e.outerHTML}(),t.abrupt("return",o);case 9:case"end":return t.stop()}}),t)})))).apply(this,arguments)}var l=["asset-tracking","development-tracking","renewable-insights","density-analysis","geospatial-analytics"]},401:function(t,e,r){var map={"./asset-tracking.md":[418,35],"./density-analysis.md":[419,36],"./development-tracking.md":[420,37],"./geospatial-analytics.md":[421,38],"./renewable-insights.md":[422,39]};function o(t){if(!r.o(map,t))return Promise.resolve().then((function(){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}));var e=map[t],o=e[0];return r.e(e[1]).then((function(){return r.t(o,7)}))}o.keys=function(){return Object.keys(map)},o.id=401,t.exports=o},403:function(t,e,r){"use strict";r(81);var o={name:"KeyboardBackspaceIcon",props:{title:{type:String},fillColor:{type:String,default:"currentColor"},size:{type:Number,default:24}}},n=r(5),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("span",t._b({staticClass:"material-design-icon keyboard-backspace-icon",attrs:{"aria-hidden":!t.title,"aria-label":t.title,role:"img"},on:{click:function(e){return t.$emit("click",e)}}},"span",t.$attrs,!1),[r("svg",{staticClass:"material-design-icon__svg",attrs:{fill:t.fillColor,width:t.size,height:t.size,viewBox:"0 0 24 24"}},[r("path",{attrs:{d:"M21,11H6.83L10.41,7.41L9,6L3,12L9,18L10.41,16.58L6.83,13H21V11Z"}},[t.title?r("title",[t._v(t._s(t.title))]):t._e()])])])}),[],!1,null,null,null);e.a=component.exports},404:function(t,e,r){"use strict";var o=r(7),n=r(3),c=r(66),l=r(29),m=r(38),d=r(14),_=r(4),f=r(214),h=r(145),v=r(405),y=r(406),x=r(82),w=r(407),k=[],j=n(k.sort),C=n(k.push),O=_((function(){k.sort(void 0)})),z=_((function(){k.sort(null)})),E=h("sort"),M=!_((function(){if(x)return x<70;if(!(v&&v>3)){if(y)return!0;if(w)return w<603;var code,t,e,r,o="";for(code=65;code<76;code++){switch(t=String.fromCharCode(code),code){case 66:case 69:case 70:case 72:e=3;break;case 68:case 71:e=4;break;default:e=2}for(r=0;r<47;r++)k.push({k:t+r,v:e})}for(k.sort((function(a,b){return b.v-a.v})),r=0;r<k.length;r++)t=k[r].k.charAt(0),o.charAt(o.length-1)!==t&&(o+=t);return"DGBEFHACIJK"!==o}}));o({target:"Array",proto:!0,forced:O||!z||!E||!M},{sort:function(t){void 0!==t&&c(t);var e=l(this);if(M)return void 0===t?j(e):j(e,t);var r,o,n=[],_=m(e);for(o=0;o<_;o++)o in e&&C(n,e[o]);for(f(n,function(t){return function(e,r){return void 0===r?-1:void 0===e?1:void 0!==t?+t(e,r)||0:d(e)>d(r)?1:-1}}(t)),r=n.length,o=0;o<r;)e[o]=n[o++];for(;o<_;)delete e[o++];return e}})},405:function(t,e,r){var o=r(65).match(/firefox\/(\d+)/i);t.exports=!!o&&+o[1]},406:function(t,e,r){var o=r(65);t.exports=/MSIE|Trident/.test(o)},407:function(t,e,r){var o=r(65).match(/AppleWebKit\/(\d+)\./);t.exports=!!o&&+o[1]},408:function(t,e,r){"use strict";r.d(e,"a",(function(){return n})),r.d(e,"b",(function(){return l}));var o=r(6);r(26),r(10),r(27),r(28),r(394);function n(t){return c.apply(this,arguments)}function c(){return(c=Object(o.a)(regeneratorRuntime.mark((function t(e){var o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,r(409)("./".concat(e,".md"));case 2:return(o=t.sent).attributes.slug=e,o.attributes.date=new Date(o.attributes.date),o.attributes.link="/career/".concat(e,"/"),o.attributes.mins=Math.round(o.body.length/1250)||1,o.attributes.tableOfContents=function(){var t;(t=document.createElement("div")).innerHTML=o.html;var e=t.querySelector(".table-of-contents");return e&&e.outerHTML}(),t.abrupt("return",o);case 9:case"end":return t.stop()}}),t)})))).apply(this,arguments)}var l=["senior-full-stack-dev","junior-machine-learning-engineer","sales-associate","senior-embedded-software-eng","graduate-scheme"]},409:function(t,e,r){var map={"./graduate-scheme.md":[427,27],"./junior-machine-learning-engineer.md":[428,28],"./sales-associate.md":[429,29],"./senior-embedded-software-eng.md":[430,30],"./senior-full-stack-dev.md":[431,31],"./senior-robotics-eng.md":[432,32]};function o(t){if(!r.o(map,t))return Promise.resolve().then((function(){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}));var e=map[t],o=e[0];return r.e(e[1]).then((function(){return r.t(o,7)}))}o.keys=function(){return Object.keys(map)},o.id=409,t.exports=o},410:function(t,e,r){var content=r(424);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(21).default)("2a3aa548",content,!0,{sourceMap:!1})},413:function(t,e,r){var content=r(426);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(21).default)("04db12bc",content,!0,{sourceMap:!1})},423:function(t,e,r){"use strict";r(410)},424:function(t,e,r){var o=r(20)(!1);o.push([t.i,'.project-card{display:flex;flex-direction:column;position:relative}.project-card:hover .project-card__image::after{opacity:.5}.project-card__image{background-color:var(--color__body);border-radius:.3rem;box-shadow:var(--box-shadow);overflow:hidden;padding-bottom:50%;position:relative;width:calc(100% - 1.5rem);z-index:-1}.project-card__image::after{background-image:linear-gradient(var(--color__primary--muted), var(--color__primary));content:"";inset:0;opacity:0;position:absolute;transition:opacity 150ms cubic-bezier(0.445, 0.05, 0.55, 0.95)}.project-card__image .lazy{inset:0;position:absolute}.project-card__image .lazy picture{height:100%;padding-bottom:0;width:100%}.project-card__image .lazy picture .lazy__image{object-position:top left}.project-card__content{background-color:var(--color__body--overlay);border:1px solid var(--color__primary--muted);border-radius:.3rem;box-shadow:var(--box-shadow--small);flex-grow:1;margin-top:-3rem;margin-left:1.5rem;padding:1.5rem;padding-top:1rem;transition:box-shadow 150ms cubic-bezier(0.445, 0.05, 0.55, 0.95),border-color 150ms cubic-bezier(0.445, 0.05, 0.55, 0.95)}.project-card__content:hover{border-color:var(--color__primary);box-shadow:var(--box-shadow)}.project-card__title{font-size:calc(1.2rem + 1vw);margin-bottom:1.5rem;display:inline-block;margin-bottom:.5rem}@media(min-width: 1280px){.project-card__title{font-size:calc(1.2rem + 1280px / 100)}}.project-card__link{background-image:linear-gradient(var(--color__primary--muted), var(--color__primary--muted)),linear-gradient(var(--color__primary), var(--color__primary));background-size:100% 1px,0% 1px;background-repeat:no-repeat;color:var(--color__primary);transition:background-size 300ms cubic-bezier(0.77, 0, 0.175, 1);background-position:bottom .2rem left}.project-card__link:hover{background-size:100% 1px}.project-card__link::after{content:"";inset:0;position:absolute}',""]),t.exports=o},425:function(t,e,r){"use strict";r(413)},426:function(t,e,r){var o=r(20)(!1);o.push([t.i,'.post-card{background-color:var(--color__body--overlay);border:1px solid var(--color__primary--muted);border-radius:.3rem;box-shadow:var(--box-shadow--small);position:relative;transition:box-shadow 150ms cubic-bezier(0.445, 0.05, 0.55, 0.95),border-color 150ms cubic-bezier(0.445, 0.05, 0.55, 0.95)}.post-card:hover{border:1px solid var(--color__primary);box-shadow:var(--box-shadow)}.post-card::before{background-image:linear-gradient(to right, var(--color__body) 2rem, var(--color__transparent));border-radius:.3rem;content:"";inset:-1rem 0 -1rem -1rem;pointer-events:none;position:absolute}.post-card__content{padding:1.5rem;padding-top:1rem;padding-left:0;position:relative}.post-card__title{font-size:calc(1.2rem + 1vw);margin-bottom:1.5rem;margin-bottom:.5rem}@media(min-width: 1280px){.post-card__title{font-size:calc(1.2rem + 1280px / 100)}}.post-card__link{background-image:linear-gradient(var(--color__primary--muted), var(--color__primary--muted)),linear-gradient(var(--color__primary), var(--color__primary));background-size:100% 1px,0% 1px;background-repeat:no-repeat;color:var(--color__primary);transition:background-size 300ms cubic-bezier(0.77, 0, 0.175, 1);background-position:bottom .2rem left}.post-card__link:hover{background-size:100% 1px}.post-card__link::after{position:absolute;width:100%;height:100%;left:0;content:"";top:0}.post-card__details{color:var(--color__text--muted);display:block;margin-bottom:.5rem}',""]),t.exports=o},433:function(t,e,r){"use strict";var o={props:{project:{type:Object,required:!0}},computed:{title:function(){return this.project.titleShort||this.project.title}}},n=(r(423),r(5)),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("li",{staticClass:"project-card"},[r("div",{staticClass:"project-card__image"},[r("lazy-image",{attrs:{src:t.project.image,alt:t.title,sizes:"(min-width: 768px) 50vw, 100vw"}})],1),t._v(" "),r("div",{staticClass:"project-card__content"},[r("h2",{staticClass:"project-card__title"},[r("nuxt-link",{staticClass:"project-card__link",attrs:{to:t.project.link}},[t._v("\n        "+t._s(t.title)+"\n      ")])],1),t._v(" "),r("p",{staticClass:"project-card__description"},[t._v(t._s(t.project.description))])])])}),[],!1,null,null,null);e.a=component.exports},446:function(t,e,r){var content=r(477);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(21).default)("71b95074",content,!0,{sourceMap:!1})},451:function(t,e,r){"use strict";r.r(e);var o={props:{post:{type:Object,required:!0}},computed:{date:function(){return this.post.date.toLocaleString("en-GB",{day:"numeric",month:"short",year:"numeric"})}}},n=(r(425),r(5)),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("li",{staticClass:"post-card"},[r("div",{staticClass:"post-card__content"},[r("h2",{staticClass:"post-card__title"},[r("nuxt-link",{staticClass:"post-card__link",attrs:{to:t.post.link}},[t._v("\n        "+t._s(t.post.title)+"\n      ")])],1),t._v(" "),r("small",{staticClass:"post-card__details"},[t._v("\n      "+t._s(t.date)+" • "+t._s(t.post.mins)+" minute read\n    ")]),t._v(" "),r("p",{staticClass:"post-card__description"},[t._v(t._s(t.post.description))])])])}),[],!1,null,null,null);e.default=component.exports},476:function(t,e,r){"use strict";r(446)},477:function(t,e,r){var o=r(20)(!1);o.push([t.i,'.home{margin:0 auto;max-width:1152px;position:relative;width:90%;min-height:calc(100vh - 6.5rem);min-height:calc(var(--vh, 1vh)*100 - 6.5rem);padding-top:7.5rem;padding-bottom:4.5rem}@media(min-width: 800px){.home{min-height:calc(100vh - 4rem);min-height:calc(var(--vh, 1vh)*100 - 4rem);padding-top:9rem}}@media print{.home{margin:0;padding:0;width:100%}}@supports(clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)){.home::before{background-image:radial-gradient(var(--color__primary--muted) 15%, transparent 15%),radial-gradient(var(--color__primary--muted) 15%, transparent 15%);background-size:.75rem .75rem;background-position:0 0,.375rem .375rem;clip-path:polygon(100% 15%, 50% 25%, 45% 35%, 100% 45%, 100% 100%, 50% 100%, 0% 70%, 0% 100%, 100% 100%);content:"";height:100%;left:50%;position:absolute;top:0;transform:translateX(-50%);width:100vw;z-index:-1}}.home__banner{min-height:calc(100vh - 11.5rem);min-height:calc(var(--vh, 1vh)*100 - 11.5rem);position:relative}@media(min-width: 800px){.home__banner{min-height:calc(100vh - 13rem);min-height:calc(var(--vh, 1vh)*100 - 13rem)}}.home__title{font-weight:400;text-shadow:.03em .03em var(--color__primary--muted);-webkit-font-smoothing:antialiased;-webkit-text-fill-color:transparent}.home__title--primary{color:var(--color__primary);font-size:110%;font-weight:700;line-height:1;-webkit-font-smoothing:auto;-webkit-text-stroke:0 currentColor;-webkit-text-fill-color:currentColor}.home__description{margin-bottom:3rem;width:100%}@media(min-width: 800px){.home__description{width:60%}}.home__actions{align-items:flex-start;display:flex;flex-direction:column}@media(min-width: 800px){.home__actions{flex-direction:row}}.home__stuff{background-color:var(--color__body--overlay);border:1px solid var(--color__primary);border-radius:.3rem !important;color:var(--color__primary);cursor:pointer;opacity:1;padding:.4rem 1rem;position:relative;transition:opacity 150ms cubic-bezier(0.445, 0.05, 0.55, 0.95),transform 150ms cubic-bezier(0.445, 0.05, 0.55, 0.95);background-color:var(--color__primary);color:var(--color__body);margin-right:1rem;margin-bottom:1rem}.home__stuff::before,.home__stuff::after{content:"";border-radius:.3rem;inset:-1px;pointer-events:none;position:absolute}.home__stuff::before{box-shadow:var(--box-shadow--primary-small);opacity:.5;transition:box-shadow 150ms cubic-bezier(0.445, 0.05, 0.55, 0.95);z-index:-1}.home__stuff::after{background-image:linear-gradient(var(--color__body--overlay), transparent 40%),linear-gradient(transparent 60%, var(--color__primary--muted));opacity:.2}.home__stuff:hover,.home__stuff:focus{opacity:.9}.home__stuff:hover::before,.home__stuff:focus::before{box-shadow:var(--box-shadow--primary)}.home__stuff:focus{outline:none !important;transform:scale(1.05)}.home__stuff:disabled{cursor:not-allowed;opacity:.5;transform:none}.home__stuff:disabled::before{box-shadow:var(--box-shadow--primary-small)}.home__stuff::before{opacity:1}.home__stuff .material-design-icon{display:inline-block;margin-left:-0.15rem;margin-right:-0.35rem;transform:scale(0.95) rotate(-90deg)}.home__contact{background-color:var(--color__body--overlay);border:1px solid var(--color__primary);border-radius:.3rem !important;color:var(--color__primary);cursor:pointer;opacity:1;padding:.4rem 1rem;position:relative;transition:opacity 150ms cubic-bezier(0.445, 0.05, 0.55, 0.95),transform 150ms cubic-bezier(0.445, 0.05, 0.55, 0.95);margin-bottom:1rem}.home__contact::before,.home__contact::after{content:"";border-radius:.3rem;inset:-1px;pointer-events:none;position:absolute}.home__contact::before{box-shadow:var(--box-shadow--primary-small);opacity:.5;transition:box-shadow 150ms cubic-bezier(0.445, 0.05, 0.55, 0.95);z-index:-1}.home__contact::after{background-image:linear-gradient(var(--color__body--overlay), transparent 40%),linear-gradient(transparent 60%, var(--color__primary--muted));opacity:.2}.home__contact:hover,.home__contact:focus{opacity:.9}.home__contact:hover::before,.home__contact:focus::before{box-shadow:var(--box-shadow--primary)}.home__contact:focus{outline:none !important;transform:scale(1.05)}.home__contact:disabled{cursor:not-allowed;opacity:.5;transform:none}.home__contact:disabled::before{box-shadow:var(--box-shadow--primary-small)}.home__posts{display:grid;grid-gap:1.5rem}.home__projects{display:grid;grid-template-columns:100%;grid-gap:3rem;margin-top:3rem}@media(min-width: 800px){.home__projects{grid-template-columns:minmax(0, 1fr) minmax(0, 1fr)}}.home__services-title{font-weight:400;text-shadow:.03em .03em var(--color__primary--muted);-webkit-font-smoothing:antialiased;-webkit-text-fill-color:transparent;margin-bottom:3rem;margin-top:3rem;text-align:center;text-transform:uppercase;font-size:3rem}.home__posts-more,.home__projects-more{margin-top:1rem;position:relative;text-align:right}.home__posts-more .material-design-icon,.home__projects-more .material-design-icon{pointer-events:none}.home__posts-more .material-design-icon svg,.home__projects-more .material-design-icon svg{color:var(--color__primary);transform:rotate(180deg)}.home__posts-more a,.home__projects-more a{background-image:linear-gradient(var(--color__primary--muted), var(--color__primary--muted)),linear-gradient(var(--color__primary), var(--color__primary));background-size:100% 1px,0% 1px;background-repeat:no-repeat;color:var(--color__primary);transition:background-size 300ms cubic-bezier(0.77, 0, 0.175, 1);background-position:bottom left}.home__posts-more a:hover,.home__projects-more a:hover{background-size:100% 1px}.home__posts-more a::after,.home__projects-more a::after{content:"";inset:0;position:absolute}',""]),t.exports=o},503:function(t,e,r){"use strict";r.r(e);r(46),r(32),r(37),r(50),r(33),r(51);var o=r(23),n=r(6),c=(r(26),r(10),r(27),r(28),r(52),r(404),r(68),r(403)),l=r(43),m=r(400),d=r(398),_=r(408),f=r(451),h=r(433);function v(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function y(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?v(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):v(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var x={components:{DownIcon:c.a,SeeMoreIcon:c.a,Headshots:Object(l.b)((function(){return Promise.resolve().then(r.bind(null,210))})),PostCard:f.default,ProjectCard:h.a},asyncData:function(){return Object(n.a)(regeneratorRuntime.mark((function t(){var e,o,c,l,f;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,r.e(34).then(r.t.bind(null,491,7));case 2:return e=t.sent,o=e.vue,t.next=6,Promise.all(d.b.map(function(){var t=Object(n.a)(regeneratorRuntime.mark((function t(e){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(d.a)(e);case 2:return r=t.sent,t.abrupt("return",y({},r.attributes));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()));case 6:return(c=t.sent).sort((function(t,e){return e.date-t.date})),t.next=10,Promise.all(_.b.map(function(){var t=Object(n.a)(regeneratorRuntime.mark((function t(e){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(_.a)(e);case 2:return r=t.sent,t.abrupt("return",y({},r.attributes));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()));case 10:return(l=t.sent).sort((function(t,e){return e.date-t.date})),t.next=14,Promise.all(m.b.map(function(){var t=Object(n.a)(regeneratorRuntime.mark((function t(e){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(m.a)(e);case 2:return r=t.sent,t.abrupt("return",y({},r.attributes));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()));case 14:return f=t.sent,t.abrupt("return",{markdown:{vue:o},allPosts:c,allProjects:f,allCareers:l,careers:l.slice(0,3),posts:c.slice(0,4),projects:f.slice(0,4)});case 16:case"end":return t.stop()}}),t)})))()},head:function(){return{title:"Home"}}},w=x,k=(r(476),r(5)),component=Object(k.a)(w,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("main",{staticClass:"home"},[r("div",{staticClass:"home__banner"},[t._m(0),t._v(" "),r("div",{staticClass:"home__description"},[r("markdown",{attrs:{markdown:t.markdown}})],1),t._v(" "),r("div",{staticClass:"home__actions"},[r("a",{staticClass:"home__stuff",attrs:{href:"#services"}},[t._v("How we can help you\n        "),r("down-icon")],1),t._v(" "),r("nuxt-link",{staticClass:"home__contact",attrs:{to:"/contact/"}},[t._v("Contact us")])],1),t._v(" "),r("headshots")],1),t._v(" "),t._m(1),t._v(" "),r("ol",{staticClass:"home__projects",attrs:{id:"services"}},t._l(t.projects,(function(t){return r("project-card",{key:t.title,attrs:{project:t}})})),1),t._v(" "),t.allProjects.length>4?r("div",{staticClass:"home__projects-more"},[r("nuxt-link",{attrs:{to:"/services/"}},[t._v("See all services")]),t._v(" "),r("see-more-icon")],1):t._e(),t._v(" "),t._m(2),t._v(" "),r("ol",{staticClass:"home__posts",attrs:{id:"stuff"}},t._l(t.posts,(function(t){return r("post-card",{key:t.title,attrs:{post:t}})})),1),t._v(" "),t.allPosts.length>4?r("div",{staticClass:"home__posts-more"},[r("nuxt-link",{attrs:{to:"/blog/"}},[t._v("See more blog posts")]),t._v(" "),r("see-more-icon")],1):t._e(),t._v(" "),t._m(3),t._v(" "),r("ol",{staticClass:"home__posts",attrs:{id:"stuff"}},t._l(t.careers,(function(t){return r("post-card",{key:t.title,attrs:{post:t}})})),1),t._v(" "),t.allCareers.length>4?r("div",{staticClass:"home__posts-more"},[r("nuxt-link",{attrs:{to:"/career/"}},[t._v("See more job listings")]),t._v(" "),r("see-more-icon")],1):t._e()])}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("h1",{staticClass:"home__title"},[t._v("\n      Hi, we are "),r("span",{staticClass:"home__title--primary"},[t._v("Novit.ai")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("p",{staticClass:"home__services-title"},[r("span",{staticClass:"home__services-title--primary"},[t._v("Services")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("p",{staticClass:"home__services-title"},[r("span",{staticClass:"home__services-title--primary"},[t._v("Blog")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("p",{staticClass:"home__services-title"},[r("span",{staticClass:"home__services-title--primary"},[t._v("Careers")])])}],!1,null,null,null);e.default=component.exports}}]);