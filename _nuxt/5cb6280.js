(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{393:function(e,r,o){"use strict";var t=o(7),c=o(394);t({target:"String",proto:!0,forced:o(395)("link")},{link:function(e){return c(this,"a","href",e)}})},394:function(e,r,o){var t=o(3),c=o(22),n=o(14),l=/"/g,_=t("".replace);e.exports=function(e,r,o,t){var m=n(c(e)),d="<"+r;return""!==o&&(d+=" "+o+'="'+_(n(t),l,"&quot;")+'"'),d+">"+m+"</"+r+">"}},395:function(e,r,o){var t=o(4);e.exports=function(e){return t((function(){var r=""[e]('"');return r!==r.toLowerCase()||r.split('"').length>3}))}},396:function(e,r,o){var content=o(410);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(21).default)("53cf1b88",content,!0,{sourceMap:!1})},399:function(e,r,o){"use strict";o.d(r,"a",(function(){return c})),o.d(r,"b",(function(){return l}));var t=o(6);o(26),o(10),o(27),o(28),o(393);function c(e){return n.apply(this,arguments)}function n(){return(n=Object(t.a)(regeneratorRuntime.mark((function e(r){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o(400)("./".concat(r,".md"));case 2:return(t=e.sent).attributes.slug=r,t.attributes.date=new Date(t.attributes.date),t.attributes.link="/services/".concat(r,"/"),t.attributes.mins=Math.round(t.body.length/1250)||1,t.attributes.tableOfContents=function(){var e;(e=document.createElement("div")).innerHTML=t.html;var r=e.querySelector(".table-of-contents");return r&&r.outerHTML}(),e.abrupt("return",t);case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var l=["asset-tracking","development-tracking","renewable-insights","density-analysis","geospatial-analytics"]},400:function(e,r,o){var map={"./asset-tracking.md":[416,34],"./density-analysis.md":[417,35],"./development-tracking.md":[418,36],"./geospatial-analytics.md":[419,37],"./renewable-insights.md":[420,38]};function t(e){if(!o.o(map,e))return Promise.resolve().then((function(){var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}));var r=map[e],t=r[0];return o.e(r[1]).then((function(){return o.t(t,7)}))}t.keys=function(){return Object.keys(map)},t.id=400,e.exports=t},401:function(e,r,o){"use strict";o(81);var t={name:"KeyboardBackspaceIcon",props:{title:{type:String},fillColor:{type:String,default:"currentColor"},size:{type:Number,default:24}}},c=o(5),component=Object(c.a)(t,(function(){var e=this,r=e.$createElement,o=e._self._c||r;return o("span",e._b({staticClass:"material-design-icon keyboard-backspace-icon",attrs:{"aria-hidden":!e.title,"aria-label":e.title,role:"img"},on:{click:function(r){return e.$emit("click",r)}}},"span",e.$attrs,!1),[o("svg",{staticClass:"material-design-icon__svg",attrs:{fill:e.fillColor,width:e.size,height:e.size,viewBox:"0 0 24 24"}},[o("path",{attrs:{d:"M21,11H6.83L10.41,7.41L9,6L3,12L9,18L10.41,16.58L6.83,13H21V11Z"}},[e.title?o("title",[e._v(e._s(e.title))]):e._e()])])])}),[],!1,null,null,null);r.a=component.exports},409:function(e,r,o){"use strict";o(396)},410:function(e,r,o){var t=o(20)(!1);t.push([e.i,'.article{display:grid;grid-template-columns:100%}@media(min-width: 1024px){.article{grid-template-columns:minmax(0, 1fr) minmax(0, 2fr)}}.article__project{display:grid;grid-template-columns:100%}.article__title{margin-bottom:5rem;position:relative}@supports(clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)){.article__title::before{background-image:radial-gradient(var(--color__primary--muted) 15%, transparent 15%),radial-gradient(var(--color__primary--muted) 15%, transparent 15%);background-size:.75rem .75rem;background-position:0 0,.375rem .375rem;clip-path:polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%);content:"";height:100%;left:50%;position:absolute;top:0;transform:translateX(-50%);width:100vw;z-index:-1}}@media(min-width: 1024px){.article__title{grid-column:1/3;padding-left:33.3333333333%}}@media print{.article__title{margin-bottom:2rem}.article__title::before{display:none}}.article__title h1{font-size:calc(1.2rem + 2vw);margin-bottom:1.75rem;background-color:var(--color__body);box-shadow:.5rem 0 var(--color__body),-0.5rem 0 var(--color__body),.5rem .5rem var(--color__body),-0.5rem .5rem var(--color__body);display:inline}@media(min-width: 1280px){.article__title h1{font-size:calc(1.2rem + 2560px / 100)}}.article__title::before{top:-6rem;height:calc(100% + 9rem)}@media(min-width: 1024px){.article__sidebar{padding-right:3rem}}.article__contents{display:none;max-height:calc(100vh - 5.5rem);opacity:.4;overflow-y:auto;margin:-0.5rem -1rem;padding:.5rem 1rem;position:sticky;top:4.5rem;transition:opacity 150ms cubic-bezier(0.445, 0.05, 0.55, 0.95)}.article__contents:hover,.article__contents:focus-within{opacity:1}.article__contents::-webkit-scrollbar-track{background-color:var(--color__body)}@media(min-width: 1024px){.article__contents{display:block}}.article__contents .table-of-contents{font-size:80%;margin-top:1rem}.article__contents .table-of-contents ol ol{margin-left:1rem;font-size:90%}.article__contents .table-of-contents li{margin-top:.5rem}.article__contents .table-of-contents li a{text-shadow:0 0 var(--color__body), -0.15ex -0.06em var(--color__body), -0.15ex -0.04em var(--color__body), -0.15ex -0.02em var(--color__body), -0.15ex 0em var(--color__body), -0.15ex 0.02em var(--color__body), -0.15ex 0.04em var(--color__body), -0.15ex 0.06em var(--color__body), -0.1ex -0.06em var(--color__body), -0.1ex -0.04em var(--color__body), -0.1ex -0.02em var(--color__body), -0.1ex 0em var(--color__body), -0.1ex 0.02em var(--color__body), -0.1ex 0.04em var(--color__body), -0.1ex 0.06em var(--color__body), -0.05ex -0.06em var(--color__body), -0.05ex -0.04em var(--color__body), -0.05ex -0.02em var(--color__body), -0.05ex 0em var(--color__body), -0.05ex 0.02em var(--color__body), -0.05ex 0.04em var(--color__body), -0.05ex 0.06em var(--color__body), 0ex -0.06em var(--color__body), 0ex -0.04em var(--color__body), 0ex -0.02em var(--color__body), 0ex 0em var(--color__body), 0ex 0.02em var(--color__body), 0ex 0.04em var(--color__body), 0ex 0.06em var(--color__body), 0.05ex -0.06em var(--color__body), 0.05ex -0.04em var(--color__body), 0.05ex -0.02em var(--color__body), 0.05ex 0em var(--color__body), 0.05ex 0.02em var(--color__body), 0.05ex 0.04em var(--color__body), 0.05ex 0.06em var(--color__body), 0.1ex -0.06em var(--color__body), 0.1ex -0.04em var(--color__body), 0.1ex -0.02em var(--color__body), 0.1ex 0em var(--color__body), 0.1ex 0.02em var(--color__body), 0.1ex 0.04em var(--color__body), 0.1ex 0.06em var(--color__body), 0.15ex -0.06em var(--color__body), 0.15ex -0.04em var(--color__body), 0.15ex -0.02em var(--color__body), 0.15ex 0em var(--color__body), 0.15ex 0.02em var(--color__body), 0.15ex 0.04em var(--color__body),0.15ex 0.06em var(--color__body);background-image:linear-gradient(var(--color__primary--muted), var(--color__primary--muted)),linear-gradient(var(--color__primary), var(--color__primary));background-size:100% 1px,0% 1px;background-repeat:no-repeat;color:var(--color__primary);transition:background-size 300ms cubic-bezier(0.77, 0, 0.175, 1);background-position:bottom left;color:inherit}.article__contents .table-of-contents li a:hover{background-size:100% 1px}.article__body .markdown{margin-bottom:1.5rem}.article__footer{display:inline-block;position:relative}.article__footer .material-design-icon svg{color:var(--color__primary)}.article__back{text-shadow:0 0 var(--color__body), -0.15ex -0.06em var(--color__body), -0.15ex -0.04em var(--color__body), -0.15ex -0.02em var(--color__body), -0.15ex 0em var(--color__body), -0.15ex 0.02em var(--color__body), -0.15ex 0.04em var(--color__body), -0.15ex 0.06em var(--color__body), -0.1ex -0.06em var(--color__body), -0.1ex -0.04em var(--color__body), -0.1ex -0.02em var(--color__body), -0.1ex 0em var(--color__body), -0.1ex 0.02em var(--color__body), -0.1ex 0.04em var(--color__body), -0.1ex 0.06em var(--color__body), -0.05ex -0.06em var(--color__body), -0.05ex -0.04em var(--color__body), -0.05ex -0.02em var(--color__body), -0.05ex 0em var(--color__body), -0.05ex 0.02em var(--color__body), -0.05ex 0.04em var(--color__body), -0.05ex 0.06em var(--color__body), 0ex -0.06em var(--color__body), 0ex -0.04em var(--color__body), 0ex -0.02em var(--color__body), 0ex 0em var(--color__body), 0ex 0.02em var(--color__body), 0ex 0.04em var(--color__body), 0ex 0.06em var(--color__body), 0.05ex -0.06em var(--color__body), 0.05ex -0.04em var(--color__body), 0.05ex -0.02em var(--color__body), 0.05ex 0em var(--color__body), 0.05ex 0.02em var(--color__body), 0.05ex 0.04em var(--color__body), 0.05ex 0.06em var(--color__body), 0.1ex -0.06em var(--color__body), 0.1ex -0.04em var(--color__body), 0.1ex -0.02em var(--color__body), 0.1ex 0em var(--color__body), 0.1ex 0.02em var(--color__body), 0.1ex 0.04em var(--color__body), 0.1ex 0.06em var(--color__body), 0.15ex -0.06em var(--color__body), 0.15ex -0.04em var(--color__body), 0.15ex -0.02em var(--color__body), 0.15ex 0em var(--color__body), 0.15ex 0.02em var(--color__body), 0.15ex 0.04em var(--color__body),0.15ex 0.06em var(--color__body);background-image:linear-gradient(var(--color__primary--muted), var(--color__primary--muted)),linear-gradient(var(--color__primary), var(--color__primary));background-size:100% 1px,0% 1px;background-repeat:no-repeat;color:var(--color__primary);transition:background-size 300ms cubic-bezier(0.77, 0, 0.175, 1);background-position:bottom left}.article__back:hover{background-size:100% 1px}.article__back::after{content:"";inset:0;position:absolute}.article__details{color:var(--color__text--muted);margin-bottom:2rem}.article__mins{white-space:nowrap}.article__mins::before{content:"•"}.article__tags{display:none;margin-bottom:1rem;padding-left:1rem}@media(min-width: 1024px){.article__tags{display:block}}.article__tags li{color:var(--color__text--muted);position:relative}.article__tags li::before{color:var(--color__text--muted);content:"▷";font-size:60%;position:absolute;inset:.25rem calc(100% + .5rem) 0 auto;vertical-align:middle}@media(min-width: 1024px){.article__watch{max-height:calc(100vh - 5.5rem);overflow-y:auto;margin:-0.5rem -1rem;padding:.5rem 1rem;position:sticky;top:4.5rem}.article__watch::-webkit-scrollbar-track{background-color:var(--color__body)}}.article__purchase{background-color:var(--color__body--overlay);border:1px solid var(--color__primary);border-radius:.3rem !important;color:var(--color__primary);cursor:pointer;opacity:1;padding:.4rem 1rem;position:relative;transition:opacity 150ms cubic-bezier(0.445, 0.05, 0.55, 0.95),transform 150ms cubic-bezier(0.445, 0.05, 0.55, 0.95);background-color:var(--color__primary);color:var(--color__body);display:block;font-variant:small-caps;margin:1.5rem 0 3rem}.article__purchase::before,.article__purchase::after{content:"";border-radius:.3rem;inset:-1px;pointer-events:none;position:absolute}.article__purchase::before{box-shadow:var(--box-shadow--primary-small);opacity:.5;transition:box-shadow 150ms cubic-bezier(0.445, 0.05, 0.55, 0.95);z-index:-1}.article__purchase::after{background-image:linear-gradient(var(--color__body--overlay), transparent 40%),linear-gradient(transparent 60%, var(--color__primary--muted));opacity:.2}.article__purchase:hover,.article__purchase:focus{opacity:.9}.article__purchase:hover::before,.article__purchase:focus::before{box-shadow:var(--box-shadow--primary)}.article__purchase:focus{outline:none !important;transform:scale(1.05)}.article__purchase:disabled{cursor:not-allowed;opacity:.5;transform:none}.article__purchase:disabled::before{box-shadow:var(--box-shadow--primary-small)}.article__purchase::before{opacity:1}.article__purchase>span::after{content:" *";opacity:.6}@media(min-width: 1024px){.article__purchase{margin-bottom:0}}.article__affiliate-notice{color:var(--color__text--muted);font-size:70%;margin-top:2rem;margin-bottom:-0.5rem}.article__description{font-size:calc(1.2rem + .25vw);margin-bottom:1rem;color:var(--color__primary);font-weight:300;margin-bottom:3rem}@media(min-width: 1280px){.article__description{font-size:calc(1.2rem + 320px / 100)}}',""]),e.exports=t},412:function(e,r,o){"use strict";o(46),o(32),o(37),o(10),o(50),o(33),o(51);var t=o(23);function c(object,e){var r=Object.keys(object);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(object);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),r.push.apply(r,o)}return r}function n(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(r){Object(t.a)(e,r,source[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(source,r))}))}return e}var l={components:{BackIcon:o(401).a},props:{post:{type:Object,required:!0},type:{type:String,required:!0}},computed:{date:function(){return this.post.date.toLocaleString("en-GB",n(n({},"post"===this.type&&{day:"numeric"}),{},{month:"short",year:"numeric"}))}}},_=(o(409),o(5)),component=Object(_.a)(l,(function(){var e=this,r=e.$createElement,o=e._self._c||r;return o("article",{class:"project"===e.type?"article__project":"article"},[o("div",{staticClass:"article__title"},[o("h1",[e._v(e._s(e.post.title))])]),e._v(" "),"project"!==e.type?o("div",{staticClass:"article__sidebar"},["hidden"!==e.type?o("p",{staticClass:"article__details"},[o("small",{staticClass:"article__date"},[e._v(e._s(e.date))]),e._v(" "),"post"===e.type?o("small",{staticClass:"article__mins"},[e._v("\n        "+e._s(e.post.mins)+" minute read\n      ")]):e._e()]):e._e(),e._v(" "),e.post.tags?o("ul",{staticClass:"article__tags"},e._l(e.post.tags,(function(r){return o("li",{key:r},[e._v(e._s(r))])})),0):e._e(),e._v(" "),e.post.specs?o("div",{staticClass:"article__watch"},[o("watch-specs",{attrs:{specs:e.post.specs}}),e._v(" "),e.post.purchase?o("a",{staticClass:"article__purchase",attrs:{href:e.post.purchase}},[o("span",[e._v("Buy now")])]):e._e()],1):e._e(),e._v(" "),"watch"!==e.type&&e.post.tableOfContents?o("div",{staticClass:"article__contents"},[o("strong",[e._v("Table of Contents")]),e._v(" "),o("div",{domProps:{innerHTML:e._s(e.post.tableOfContents)}})]):e._e()]):e._e(),e._v(" "),o("div",{staticClass:"article__body"},["post"!==e.type&&"project"!==e.type||!e.post.description?e._e():o("p",{staticClass:"article__description"},[e._v("\n      "+e._s(e.post.description)+"\n    ")]),e._v(" "),o("markdown",{attrs:{markdown:e.post}}),e._v(" "),"hidden"!==e.type?o("div",{staticClass:"article__footer"},[o("back-icon"),e._v(" "),"post"===e.type?o("nuxt-link",{staticClass:"article__back",attrs:{to:"/blog/"}},[e._v("\n        See all blog posts\n      ")]):e._e(),e._v(" "),"project"===e.type?o("nuxt-link",{staticClass:"article__back",attrs:{to:"/services/"}},[e._v("\n        See all services\n      ")]):e._e(),e._v(" "),"watch"===e.type?o("nuxt-link",{staticClass:"article__back",attrs:{to:"/watches/"}},[e._v("\n        See all watches\n      ")]):e._e(),e._v(" "),"career"===e.type?o("nuxt-link",{staticClass:"article__back",attrs:{to:"/career/"}},[e._v("\n        See all jobs\n      ")]):e._e()],1):e._e(),e._v(" "),e.post.specs?o("p",{staticClass:"article__affiliate-notice"},[e._v("\n      * Links with an asterisk are affiliate links, which means I get a\n      commission if you decide to buy anything. This won't cost you a penny\n      more but will help keep this blog going!\n    ")]):e._e()],1)])}),[],!1,null,null,null);r.a=component.exports},441:function(e,r,o){var content=o(470);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(21).default)("4d664e58",content,!0,{sourceMap:!1})},469:function(e,r,o){"use strict";o(441)},470:function(e,r,o){var t=o(20)(!1);t.push([e.i,".service{margin:0 auto;max-width:1152px;position:relative;width:90%;min-height:calc(100vh - 6.5rem);min-height:calc(var(--vh, 1vh)*100 - 6.5rem);padding-top:7.5rem;padding-bottom:4.5rem}@media(min-width: 800px){.service{min-height:calc(100vh - 4rem);min-height:calc(var(--vh, 1vh)*100 - 4rem);padding-top:9rem}}@media print{.service{margin:0;padding:0;width:100%}}",""]),e.exports=t},498:function(e,r,o){"use strict";o.r(r);o(46),o(37),o(10),o(50),o(33),o(51);var t=o(23),c=o(6),n=(o(32),o(67),o(393),o(26),o(399));function l(object,e){var r=Object.keys(object);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(object);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),r.push.apply(r,o)}return r}function _(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(r){Object(t.a)(e,r,source[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(source,r))}))}return e}var m={components:{PostArticle:o(412).a},asyncData:function(e){return Object(c.a)(regeneratorRuntime.mark((function r(){var o,t,c;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return o=e.params,t=e.error,r.prev=1,r.next=4,Object(n.a)(o.project);case 4:return c=r.sent,r.abrupt("return",{project:_(_({},c.attributes),{},{vue:c.vue})});case 8:r.prev=8,r.t0=r.catch(1),t({statusCode:404,message:"This project could not be found"});case 11:case"end":return r.stop()}}),r,null,[[1,8]])})))()},head:function(){return{title:this.project.title,meta:[{hid:"description",name:"description",content:this.project.description},{hid:"og:title",property:"og:title",content:this.project.title},{hid:"og:description",property:"og:description",content:this.project.description},{hid:"og:url",property:"og:url",content:"https://novit.ai".concat(this.project.link)},{hid:"og:image",property:"og:image",content:"https://novit.ai".concat(this.project.link,"/og.png")}]}}},d=(o(469),o(5)),component=Object(d.a)(m,(function(){var e=this,r=e.$createElement,o=e._self._c||r;return o("main",{staticClass:"service"},[o("post-article",{attrs:{post:e.project,type:"project"}})],1)}),[],!1,null,null,null);r.default=component.exports}}]);