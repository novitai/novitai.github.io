(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{394:function(t,e,r){"use strict";var o=r(7),n=r(395);o({target:"String",proto:!0,forced:r(396)("link")},{link:function(t){return n(this,"a","href",t)}})},395:function(t,e,r){var o=r(3),n=r(22),c=r(14),l=/"/g,m=o("".replace);t.exports=function(t,e,r,o){var _=c(n(t)),d="<"+e;return""!==r&&(d+=" "+r+'="'+m(c(o),l,"&quot;")+'"'),d+">"+_+"</"+e+">"}},396:function(t,e,r){var o=r(4);t.exports=function(t){return o((function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3}))}},397:function(t,e,r){var content=r(412);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(21).default)("53cf1b88",content,!0,{sourceMap:!1})},402:function(t,e,r){"use strict";var o={name:"ContactForm",props:{jotform:{type:String,required:!0},height:{type:String,default:"700px"}}},n=r(5),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("iframe",{ref:"iframe",style:" min-width: 100%; height:"+t.height+"; border:none;",attrs:{id:"JotFormIFrame-221302827438958",title:"Form",onload:"window.parent.scrollTo(0,0)",allowtransparency:"true",allowfullscreen:"true",src:t.jotform,frameborder:"0",scrolling:"no"}})}),[],!1,null,null,null);e.a=component.exports},403:function(t,e,r){"use strict";r(81);var o={name:"KeyboardBackspaceIcon",props:{title:{type:String},fillColor:{type:String,default:"currentColor"},size:{type:Number,default:24}}},n=r(5),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("span",t._b({staticClass:"material-design-icon keyboard-backspace-icon",attrs:{"aria-hidden":!t.title,"aria-label":t.title,role:"img"},on:{click:function(e){return t.$emit("click",e)}}},"span",t.$attrs,!1),[r("svg",{staticClass:"material-design-icon__svg",attrs:{fill:t.fillColor,width:t.size,height:t.size,viewBox:"0 0 24 24"}},[r("path",{attrs:{d:"M21,11H6.83L10.41,7.41L9,6L3,12L9,18L10.41,16.58L6.83,13H21V11Z"}},[t.title?r("title",[t._v(t._s(t.title))]):t._e()])])])}),[],!1,null,null,null);e.a=component.exports},408:function(t,e,r){"use strict";r.d(e,"a",(function(){return n})),r.d(e,"b",(function(){return l}));var o=r(6);r(26),r(10),r(27),r(28),r(394);function n(t){return c.apply(this,arguments)}function c(){return(c=Object(o.a)(regeneratorRuntime.mark((function t(e){var o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,r(409)("./".concat(e,".md"));case 2:return(o=t.sent).attributes.slug=e,o.attributes.date=new Date(o.attributes.date),o.attributes.link="/career/".concat(e,"/"),o.attributes.mins=Math.round(o.body.length/1250)||1,o.attributes.tableOfContents=function(){var t;(t=document.createElement("div")).innerHTML=o.html;var e=t.querySelector(".table-of-contents");return e&&e.outerHTML}(),t.abrupt("return",o);case 9:case"end":return t.stop()}}),t)})))).apply(this,arguments)}var l=["operations-lead","senior-full-stack-dev","senior-embedded-software-eng","graduate-scheme","senior-robotics-eng"]},409:function(t,e,r){var map={"./graduate-scheme.md":[427,27],"./junior-machine-learning-engineer.md":[428,28],"./operations-lead.md":[429,29],"./sales-associate.md":[430,30],"./senior-embedded-software-eng.md":[431,31],"./senior-full-stack-dev.md":[432,32],"./senior-robotics-eng.md":[433,33]};function o(t){if(!r.o(map,t))return Promise.resolve().then((function(){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}));var e=map[t],o=e[0];return r.e(e[1]).then((function(){return r.t(o,7)}))}o.keys=function(){return Object.keys(map)},o.id=409,t.exports=o},411:function(t,e,r){"use strict";r(397)},412:function(t,e,r){var o=r(20)(!1);o.push([t.i,'.article{display:grid;grid-template-columns:100%}@media(min-width: 1024px){.article{grid-template-columns:minmax(0, 1fr) minmax(0, 2fr)}}.article__project{display:grid;grid-template-columns:100%}.article__title{margin-bottom:5rem;position:relative}@supports(clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)){.article__title::before{background-image:radial-gradient(var(--color__primary--muted) 15%, transparent 15%),radial-gradient(var(--color__primary--muted) 15%, transparent 15%);background-size:.75rem .75rem;background-position:0 0,.375rem .375rem;clip-path:polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%);content:"";height:100%;left:50%;position:absolute;top:0;transform:translateX(-50%);width:100vw;z-index:-1}}@media(min-width: 1024px){.article__title{grid-column:1/3;padding-left:33.3333333333%}}@media print{.article__title{margin-bottom:2rem}.article__title::before{display:none}}.article__title h1{font-size:calc(1.2rem + 2vw);margin-bottom:1.75rem;background-color:var(--color__body);box-shadow:.5rem 0 var(--color__body),-0.5rem 0 var(--color__body),.5rem .5rem var(--color__body),-0.5rem .5rem var(--color__body);display:inline}@media(min-width: 1280px){.article__title h1{font-size:calc(1.2rem + 2560px / 100)}}.article__title::before{top:-6rem;height:calc(100% + 9rem)}@media(min-width: 1024px){.article__sidebar{padding-right:3rem}}.article__contents{display:none;max-height:calc(100vh - 5.5rem);opacity:.4;overflow-y:auto;margin:-0.5rem -1rem;padding:.5rem 1rem;position:sticky;top:4.5rem;transition:opacity 150ms cubic-bezier(0.445, 0.05, 0.55, 0.95)}.article__contents:hover,.article__contents:focus-within{opacity:1}.article__contents::-webkit-scrollbar-track{background-color:var(--color__body)}@media(min-width: 1024px){.article__contents{display:block}}.article__contents .table-of-contents{font-size:80%;margin-top:1rem}.article__contents .table-of-contents ol ol{margin-left:1rem;font-size:90%}.article__contents .table-of-contents li{margin-top:.5rem}.article__contents .table-of-contents li a{background-image:linear-gradient(var(--color__primary--muted), var(--color__primary--muted)),linear-gradient(var(--color__primary), var(--color__primary));background-size:100% 1px,0% 1px;background-repeat:no-repeat;color:var(--color__primary);transition:background-size 300ms cubic-bezier(0.77, 0, 0.175, 1);background-position:bottom left;color:inherit}.article__contents .table-of-contents li a:hover{background-size:100% 1px}.article__body .markdown{margin-bottom:1.5rem}.article__footer{display:inline-block;position:relative}.article__footer .material-design-icon svg{color:var(--color__primary)}.article__back{background-image:linear-gradient(var(--color__primary--muted), var(--color__primary--muted)),linear-gradient(var(--color__primary), var(--color__primary));background-size:100% 1px,0% 1px;background-repeat:no-repeat;color:var(--color__primary);transition:background-size 300ms cubic-bezier(0.77, 0, 0.175, 1);background-position:bottom left}.article__back:hover{background-size:100% 1px}.article__back::after{content:"";inset:0;position:absolute}.article__details{color:var(--color__text--muted);margin-bottom:2rem}.article__mins{white-space:nowrap}.article__mins::before{content:"•"}.article__tags{display:none;margin-bottom:1rem;padding-left:1rem}@media(min-width: 1024px){.article__tags{display:block}}.article__tags li{color:var(--color__text--muted);position:relative}.article__tags li::before{color:var(--color__text--muted);content:"▷";font-size:60%;position:absolute;inset:.25rem calc(100% + .5rem) 0 auto;vertical-align:middle}@media(min-width: 1024px){.article__watch{max-height:calc(100vh - 5.5rem);overflow-y:auto;margin:-0.5rem -1rem;padding:.5rem 1rem;position:sticky;top:4.5rem}.article__watch::-webkit-scrollbar-track{background-color:var(--color__body)}}.article__purchase{background-color:var(--color__body--overlay);border:1px solid var(--color__primary);border-radius:.3rem !important;color:var(--color__primary);cursor:pointer;opacity:1;padding:.4rem 1rem;position:relative;transition:opacity 150ms cubic-bezier(0.445, 0.05, 0.55, 0.95),transform 150ms cubic-bezier(0.445, 0.05, 0.55, 0.95);background-color:var(--color__primary);color:var(--color__body);display:block;font-variant:small-caps;margin:1.5rem 0 3rem}.article__purchase::before,.article__purchase::after{content:"";border-radius:.3rem;inset:-1px;pointer-events:none;position:absolute}.article__purchase::before{box-shadow:var(--box-shadow--primary-small);opacity:.5;transition:box-shadow 150ms cubic-bezier(0.445, 0.05, 0.55, 0.95);z-index:-1}.article__purchase::after{background-image:linear-gradient(var(--color__body--overlay), transparent 40%),linear-gradient(transparent 60%, var(--color__primary--muted));opacity:.2}.article__purchase:hover,.article__purchase:focus{opacity:.9}.article__purchase:hover::before,.article__purchase:focus::before{box-shadow:var(--box-shadow--primary)}.article__purchase:focus{outline:none !important;transform:scale(1.05)}.article__purchase:disabled{cursor:not-allowed;opacity:.5;transform:none}.article__purchase:disabled::before{box-shadow:var(--box-shadow--primary-small)}.article__purchase::before{opacity:1}.article__purchase>span::after{content:" *";opacity:.6}@media(min-width: 1024px){.article__purchase{margin-bottom:0}}.article__affiliate-notice{color:var(--color__text--muted);font-size:70%;margin-top:2rem;margin-bottom:-0.5rem}.article__description{font-size:calc(1.2rem + .25vw);margin-bottom:1rem;color:var(--color__primary);font-weight:300;margin-bottom:3rem}@media(min-width: 1280px){.article__description{font-size:calc(1.2rem + 320px / 100)}}',""]),t.exports=o},414:function(t,e,r){"use strict";r(46),r(32),r(37),r(10),r(50),r(33),r(51);var o=r(23),n=r(403),c=r(402);function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function m(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var _={components:{BackIcon:n.a,JotForm:c.a},props:{post:{type:Object,required:!0},type:{type:String,required:!0}},computed:{date:function(){return this.post.date.toLocaleString("en-GB",m(m({},"post"===this.type&&{day:"numeric"}),{},{month:"short",year:"numeric"}))}}},d=(r(411),r(5)),component=Object(d.a)(_,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("article",{class:"project"===t.type?"article__project":"article"},[r("div",{staticClass:"article__title"},[r("h1",[t._v(t._s(t.post.title))])]),t._v(" "),"project"!==t.type?r("div",{staticClass:"article__sidebar"},["hidden"!==t.type?r("p",{staticClass:"article__details"},[r("small",{staticClass:"article__date"},[t._v(t._s(t.date))]),t._v(" "),"post"===t.type?r("small",{staticClass:"article__mins"},[t._v("\n        "+t._s(t.post.mins)+" minute read\n      ")]):t._e()]):t._e(),t._v(" "),t.post.tags?r("ul",{staticClass:"article__tags"},t._l(t.post.tags,(function(e){return r("li",{key:e},[t._v(t._s(e))])})),0):t._e(),t._v(" "),t.post.specs?r("div",{staticClass:"article__watch"},[r("watch-specs",{attrs:{specs:t.post.specs}}),t._v(" "),t.post.purchase?r("a",{staticClass:"article__purchase",attrs:{href:t.post.purchase}},[r("span",[t._v("Buy now")])]):t._e()],1):t._e(),t._v(" "),"watch"!==t.type&&t.post.tableOfContents?r("div",{staticClass:"article__contents"},[r("strong",[t._v("Table of Contents")]),t._v(" "),r("div",{domProps:{innerHTML:t._s(t.post.tableOfContents)}})]):t._e()]):t._e(),t._v(" "),r("div",{staticClass:"article__body"},["post"!==t.type&&"project"!==t.type||!t.post.description?t._e():r("p",{staticClass:"article__description"},[t._v("\n      "+t._s(t.post.description)+"\n    ")]),t._v(" "),r("markdown",{attrs:{markdown:t.post}}),t._v(" "),"career"===t.type?r("jot-form",{attrs:{jotform:"https://form.jotform.com/221312528166955",height:"220px"}}):t._e(),t._v(" "),"hidden"!==t.type?r("div",{staticClass:"article__footer"},[r("back-icon"),t._v(" "),"post"===t.type?r("nuxt-link",{staticClass:"article__back",attrs:{to:"/blog/"}},[t._v("\n        See all blog posts\n      ")]):t._e(),t._v(" "),"project"===t.type?r("nuxt-link",{staticClass:"article__back",attrs:{to:"/services/"}},[t._v("\n        See all services\n      ")]):t._e(),t._v(" "),"watch"===t.type?r("nuxt-link",{staticClass:"article__back",attrs:{to:"/watches/"}},[t._v("\n        See all watches\n      ")]):t._e(),t._v(" "),"career"===t.type?r("nuxt-link",{staticClass:"article__back",attrs:{to:"/career/"}},[t._v("\n        See all jobs\n      ")]):t._e()],1):t._e(),t._v(" "),t.post.specs?r("p",{staticClass:"article__affiliate-notice"},[t._v("\n      * Links with an asterisk are affiliate links, which means I get a\n      commission if you decide to buy anything. This won't cost you a penny\n      more but will help keep this blog going!\n    ")]):t._e()],1)])}),[],!1,null,null,null);e.a=component.exports},444:function(t,e,r){var content=r(472);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(21).default)("42864046",content,!0,{sourceMap:!1})},471:function(t,e,r){"use strict";r(444)},472:function(t,e,r){var o=r(20)(!1);o.push([t.i,".career{margin:0 auto;max-width:1152px;position:relative;width:90%;min-height:calc(100vh - 6.5rem);min-height:calc(var(--vh, 1vh)*100 - 6.5rem);padding-top:7.5rem;padding-bottom:4.5rem}@media(min-width: 800px){.career{min-height:calc(100vh - 4rem);min-height:calc(var(--vh, 1vh)*100 - 4rem);padding-top:9rem}}@media print{.career{margin:0;padding:0;width:100%}}.career .comments{margin-top:3rem}@media(min-width: 1024px){.career .comments{margin-left:33.3333333333%}}",""]),t.exports=o},501:function(t,e,r){"use strict";r.r(e);r(46),r(37),r(10),r(50),r(33),r(51);var o=r(23),n=r(6),c=(r(32),r(67),r(394),r(26),r(408));function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function m(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var _={components:{PostArticle:r(414).a},asyncData:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){var r,o,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.params,o=t.error,e.prev=1,e.next=4,Object(c.a)(r.post);case 4:return n=e.sent,e.abrupt("return",{post:m(m({},n.attributes),{},{vue:n.vue})});case 8:e.prev=8,e.t0=e.catch(1),o({statusCode:404,message:"This post could not be found"});case 11:case"end":return e.stop()}}),e,null,[[1,8]])})))()},head:function(){return{title:this.post.title,meta:[{hid:"description",name:"description",content:this.post.description},{hid:"og:title",property:"og:title",content:this.post.title},{hid:"og:description",property:"og:description",content:this.post.description},{hid:"og:url",property:"og:url",content:"https://novit.ai".concat(this.post.link)},{hid:"og:image",property:"og:image",content:"https://novit.ai".concat(this.post.link,"/og.png")}]}}},d=(r(471),r(5)),component=Object(d.a)(_,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("main",{staticClass:"career"},[r("post-article",{attrs:{post:t.post,type:"career"}})],1)}),[],!1,null,null,null);e.default=component.exports}}]);