(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{464:function(t,r,e){"use strict";var o=e(7),n=e(465);o({target:"String",proto:!0,forced:e(466)("link")},{link:function(t){return n(this,"a","href",t)}})},465:function(t,r,e){var o=e(3),n=e(22),c=e(14),l=/"/g,d=o("".replace);t.exports=function(t,r,e,o){var m=c(n(t)),_="<"+r;return""!==e&&(_+=" "+e+'="'+d(c(o),l,"&quot;")+'"'),_+">"+m+"</"+r+">"}},466:function(t,r,e){var o=e(4);t.exports=function(t){return o((function(){var r=""[t]('"');return r!==r.toLowerCase()||r.split('"').length>3}))}},470:function(t,r,e){"use strict";e.d(r,"a",(function(){return n})),e.d(r,"b",(function(){return l}));var o=e(6);e(26),e(10),e(27),e(28),e(464);function n(t){return c.apply(this,arguments)}function c(){return(c=Object(o.a)(regeneratorRuntime.mark((function t(r){var o;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e(471)("./".concat(r,".md"));case 2:return(o=t.sent).attributes.slug=r,o.attributes.date=new Date(o.attributes.date),o.attributes.link="/services/".concat(r,"/"),o.attributes.mins=Math.round(o.body.length/1250)||1,o.attributes.tableOfContents=function(){var t;(t=document.createElement("div")).innerHTML=o.html;var r=t.querySelector(".table-of-contents");return r&&r.outerHTML}(),t.abrupt("return",o);case 9:case"end":return t.stop()}}),t)})))).apply(this,arguments)}var l=["asset-tracking","development-tracking","renewable-insights","density-analysis","geospatial-analytics"]},471:function(t,r,e){var map={"./asset-tracking.md":[488,36],"./density-analysis.md":[489,37],"./development-tracking.md":[490,38],"./geospatial-analytics.md":[491,39],"./renewable-insights.md":[492,40]};function o(t){if(!e.o(map,t))return Promise.resolve().then((function(){var r=new Error("Cannot find module '"+t+"'");throw r.code="MODULE_NOT_FOUND",r}));var r=map[t],o=r[0];return e.e(r[1]).then((function(){return e.t(o,7)}))}o.keys=function(){return Object.keys(map)},o.id=471,t.exports=o},480:function(t,r,e){var content=e(494);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(21).default)("2a3aa548",content,!0,{sourceMap:!1})},493:function(t,r,e){"use strict";e(480)},494:function(t,r,e){var o=e(20)(!1);o.push([t.i,'.project-card{display:flex;flex-direction:column;position:relative}.project-card:hover .project-card__image::after{opacity:.5}.project-card__image{background-color:var(--color__body);border-radius:.3rem;box-shadow:var(--box-shadow);overflow:hidden;padding-bottom:50%;position:relative;width:calc(100% - 1.5rem);z-index:-1}.project-card__image::after{background-image:linear-gradient(var(--color__primary--muted), var(--color__primary));content:"";inset:0;opacity:0;position:absolute;transition:opacity 150ms cubic-bezier(0.445, 0.05, 0.55, 0.95)}.project-card__image .lazy{inset:0;position:absolute}.project-card__image .lazy picture{height:100%;padding-bottom:0;width:100%}.project-card__image .lazy picture .lazy__image{object-position:top left}.project-card__content{background-color:var(--color__body--overlay);border:1px solid var(--color__primary--muted);border-radius:.3rem;box-shadow:var(--box-shadow--small);flex-grow:1;margin-top:-3rem;margin-left:1.5rem;padding:1.5rem;padding-top:1rem;transition:box-shadow 150ms cubic-bezier(0.445, 0.05, 0.55, 0.95),border-color 150ms cubic-bezier(0.445, 0.05, 0.55, 0.95)}.project-card__content:hover{border-color:var(--color__primary);box-shadow:var(--box-shadow)}.project-card__title{font-size:calc(1.2rem + 1vw);margin-bottom:1.5rem;display:inline-block;margin-bottom:.5rem}@media(min-width: 1280px){.project-card__title{font-size:calc(1.2rem + 1280px / 100)}}.project-card__link{background-image:linear-gradient(var(--color__primary--muted), var(--color__primary--muted)),linear-gradient(var(--color__primary), var(--color__primary));background-size:100% 1px,0% 1px;background-repeat:no-repeat;color:var(--color__primary);transition:background-size 300ms cubic-bezier(0.77, 0, 0.175, 1);background-position:bottom .2rem left}.project-card__link:hover{background-size:100% 1px}.project-card__link::after{content:"";inset:0;position:absolute}',""]),t.exports=o},504:function(t,r,e){"use strict";var o={props:{project:{type:Object,required:!0}},computed:{title:function(){return this.project.titleShort||this.project.title}}},n=(e(493),e(5)),component=Object(n.a)(o,(function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("li",{staticClass:"project-card"},[e("div",{staticClass:"project-card__image"},[e("lazy-image",{attrs:{src:t.project.image,alt:t.title,sizes:"(min-width: 768px) 50vw, 100vw"}})],1),t._v(" "),e("div",{staticClass:"project-card__content"},[e("h2",{staticClass:"project-card__title"},[e("nuxt-link",{staticClass:"project-card__link",attrs:{to:t.project.link}},[t._v("\n        "+t._s(t.title)+"\n      ")])],1),t._v(" "),e("p",{staticClass:"project-card__description"},[t._v(t._s(t.project.description))])])])}),[],!1,null,null,null);r.a=component.exports},510:function(t,r,e){var content=e(534);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(21).default)("271378f4",content,!0,{sourceMap:!1})},533:function(t,r,e){"use strict";e(510)},534:function(t,r,e){var o=e(20)(!1);o.push([t.i,'.projects{margin:0 auto;max-width:1152px;position:relative;width:90%;min-height:calc(100vh - 6.5rem);min-height:calc(var(--vh, 1vh)*100 - 6.5rem);padding-top:7.5rem;padding-bottom:4.5rem}@media(min-width: 800px){.projects{min-height:calc(100vh - 4rem);min-height:calc(var(--vh, 1vh)*100 - 4rem);padding-top:9rem}}@media print{.projects{margin:0;padding:0;width:100%}}@supports(clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)){.projects::before{background-image:radial-gradient(var(--color__primary--muted) 15%, transparent 15%),radial-gradient(var(--color__primary--muted) 15%, transparent 15%);background-size:.75rem .75rem;background-position:0 0,.375rem .375rem;clip-path:polygon(0% 30%, 0% 20%, 100% 10%, 100% 20%, 100% 30%, 80% 50%, 100% 80%, 100% 100%, 60% 100%, 0% 70%, 0% 100%, 100% 100%, 100% 20%);content:"";height:100%;left:50%;position:absolute;top:0;transform:translateX(-50%);width:100vw;z-index:-1}}.projects__title{font-weight:400;text-shadow:.03em .03em var(--color__primary--muted);-webkit-font-smoothing:antialiased;-webkit-text-fill-color:transparent}.projects__title--primary{color:var(--color__primary);font-size:110%;font-weight:700;line-height:1;-webkit-font-smoothing:auto;-webkit-text-stroke:0 currentColor;-webkit-text-fill-color:currentColor}.projects__projects{display:grid;grid-template-columns:100%;grid-gap:3rem}@media(min-width: 800px){.projects__projects{grid-template-columns:minmax(0, 1fr) minmax(0, 1fr)}}',""]),t.exports=o},573:function(t,r,e){"use strict";e.r(r);var o=e(23),n=e(6),c=(e(26),e(10),e(27),e(28),e(52),e(46),e(32),e(37),e(50),e(33),e(51),e(470));function l(object,t){var r=Object.keys(object);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(object);t&&(e=e.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),r.push.apply(r,e)}return r}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(r){Object(o.a)(t,r,source[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(source,r))}))}return t}var m={components:{ProjectCard:e(504).a},asyncData:function(){return Object(n.a)(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Promise.all(c.b.map(function(){var t=Object(n.a)(regeneratorRuntime.mark((function t(r){var e;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(c.a)(r);case 2:return e=t.sent,t.abrupt("return",d({},e.attributes));case 4:case"end":return t.stop()}}),t)})));return function(r){return t.apply(this,arguments)}}()));case 2:return r=t.sent,t.abrupt("return",{projects:r});case 4:case"end":return t.stop()}}),t)})))()},head:function(){return{title:"Services"}}},_=m,f=(e(533),e(5)),component=Object(f.a)(_,(function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("main",{staticClass:"projects"},[t._m(0),t._v(" "),e("ol",{staticClass:"projects__projects"},t._l(t.projects,(function(t){return e("project-card",{key:t.title,attrs:{project:t}})})),1)])}),[function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("h1",{staticClass:"projects__title",attrs:{align:"center"}},[t._v("\n    Our "),e("span",{staticClass:"projects__title--primary"},[t._v("Services")])])}],!1,null,null,null);r.default=component.exports}}]);