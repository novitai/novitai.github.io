(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{413:function(r,o,t){var content=t(426);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[r.i,content,""]]),content.locals&&(r.exports=content.locals);(0,t(21).default)("04db12bc",content,!0,{sourceMap:!1})},425:function(r,o,t){"use strict";t(413)},426:function(r,o,t){var e=t(20)(!1);e.push([r.i,'.post-card{background-color:var(--color__body--overlay);border:1px solid var(--color__primary--muted);border-radius:.3rem;box-shadow:var(--box-shadow--small);position:relative;transition:box-shadow 150ms cubic-bezier(0.445, 0.05, 0.55, 0.95),border-color 150ms cubic-bezier(0.445, 0.05, 0.55, 0.95)}.post-card:hover{border:1px solid var(--color__primary);box-shadow:var(--box-shadow)}.post-card::before{background-image:linear-gradient(to right, var(--color__body) 2rem, var(--color__transparent));border-radius:.3rem;content:"";inset:-1rem 0 -1rem -1rem;pointer-events:none;position:absolute}.post-card__content{padding:1.5rem;padding-top:1rem;padding-left:0;position:relative}.post-card__title{font-size:calc(1.2rem + 1vw);margin-bottom:1.5rem;margin-bottom:.5rem}@media(min-width: 1280px){.post-card__title{font-size:calc(1.2rem + 1280px / 100)}}.post-card__link{background-image:linear-gradient(var(--color__primary--muted), var(--color__primary--muted)),linear-gradient(var(--color__primary), var(--color__primary));background-size:100% 1px,0% 1px;background-repeat:no-repeat;color:var(--color__primary);transition:background-size 300ms cubic-bezier(0.77, 0, 0.175, 1);background-position:bottom .2rem left}.post-card__link:hover{background-size:100% 1px}.post-card__link::after{position:absolute;width:100%;height:100%;left:0;content:"";top:0}.post-card__details{color:var(--color__text--muted);display:block;margin-bottom:.5rem}',""]),r.exports=e},450:function(r,o,t){"use strict";t.r(o);var e={props:{post:{type:Object,required:!0}},computed:{date:function(){return this.post.date.toLocaleString("en-GB",{day:"numeric",month:"short",year:"numeric"})}}},n=(t(425),t(5)),component=Object(n.a)(e,(function(){var r=this,o=r.$createElement,t=r._self._c||o;return t("li",{staticClass:"post-card"},[t("div",{staticClass:"post-card__content"},[t("h2",{staticClass:"post-card__title"},[t("nuxt-link",{staticClass:"post-card__link",attrs:{to:r.post.link}},[r._v("\n        "+r._s(r.post.title)+"\n      ")])],1),r._v(" "),t("small",{staticClass:"post-card__details"},[r._v("\n      "+r._s(r.date)+" • "+r._s(r.post.mins)+" minute read\n    ")]),r._v(" "),t("p",{staticClass:"post-card__description"},[r._v(r._s(r.post.description))])])])}),[],!1,null,null,null);o.default=component.exports}}]);