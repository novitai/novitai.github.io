(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{544:function(t,e,r){var content=r(567);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(21).default)("6baea438",content,!0,{sourceMap:!1})},566:function(t,e,r){"use strict";r(544)},567:function(t,e,r){var o=r(20)(!1);o.push([t.i,'.policies{margin:0 auto;max-width:1152px;position:relative;width:90%;min-height:calc(100vh - 6.5rem);min-height:calc(var(--vh, 1vh)*100 - 6.5rem);padding-top:7.5rem;padding-bottom:4.5rem}@media(min-width: 800px){.policies{min-height:calc(100vh - 4rem);min-height:calc(var(--vh, 1vh)*100 - 4rem);padding-top:9rem}}@media print{.policies{margin:0;padding:0;width:100%}}@supports(clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)){.policies::before{background-image:radial-gradient(var(--color__primary--muted) 15%, transparent 15%),radial-gradient(var(--color__primary--muted) 15%, transparent 15%);background-size:.75rem .75rem;background-position:0 0,.375rem .375rem;clip-path:polygon(0% 30%, 0% 20%, 100% 10%, 100% 20%, 100% 30%, 80% 50%, 100% 80%, 100% 100%, 60% 100%, 0% 70%, 0% 100%, 100% 100%, 100% 20%);content:"";height:100%;left:50%;position:absolute;top:0;transform:translateX(-50%);width:100vw;z-index:-1}}.policies__title{font-weight:400;text-shadow:.03em .03em var(--color__primary--muted);-webkit-font-smoothing:antialiased;-webkit-text-fill-color:transparent}.policies__policy{color:var(--color__primary);font-size:110%;font-weight:700;line-height:1;-webkit-font-smoothing:auto;-webkit-text-stroke:0 currentColor;-webkit-text-fill-color:currentColor;text-transform:uppercase;padding-top:50px}.policies__title--primary{color:var(--color__primary);font-size:110%;font-weight:700;line-height:1;-webkit-font-smoothing:auto;-webkit-text-stroke:0 currentColor;-webkit-text-fill-color:currentColor}.policies__policies{display:grid;grid-template-columns:100%;grid-gap:3rem}.contact__social-icon:hover,.contact__social-icon:focus{color:var(--color__primary)}.contact__social-icon:hover .contact__social-text{background-size:100% 1px}.contact__social-icon span{margin-right:1rem}.contact__social-icon svg{height:2rem;width:2rem}.contact__social-icon[href*="devpost.com"] svg{transform:rotate(90deg)}.contact__social-text{background-image:linear-gradient(var(--color__primary--muted), var(--color__primary--muted)),linear-gradient(var(--color__primary), var(--color__primary));background-size:100% 1px,0% 1px;background-repeat:no-repeat;color:var(--color__primary);transition:background-size 300ms cubic-bezier(0.77, 0, 0.175, 1);background-position:bottom left}.contact__social-text:hover{background-size:100% 1px}',""]),t.exports=o},606:function(t,e,r){"use strict";r.r(e);var o=r(6),n=(r(26),r(81),{name:"FilePdfBoxIcon",props:{title:{type:String},fillColor:{type:String,default:"currentColor"},size:{type:Number,default:24}}}),c=r(5),l={components:{PdfIcon:Object(c.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("span",t._b({staticClass:"material-design-icon file-pdf-box-icon",attrs:{"aria-hidden":!t.title,"aria-label":t.title,role:"img"},on:{click:function(e){return t.$emit("click",e)}}},"span",t.$attrs,!1),[r("svg",{staticClass:"material-design-icon__svg",attrs:{fill:t.fillColor,width:t.size,height:t.size,viewBox:"0 0 24 24"}},[r("path",{attrs:{d:"M12,10.5H13V13.5H12V10.5M7,11.5H8V10.5H7V11.5M20,6V18A2,2 0 0,1 18,20H6A2,2 0 0,1 4,18V6A2,2 0 0,1 6,4H18A2,2 0 0,1 20,6M9.5,10.5A1.5,1.5 0 0,0 8,9H5.5V15H7V13H8A1.5,1.5 0 0,0 9.5,11.5V10.5M14.5,10.5A1.5,1.5 0 0,0 13,9H10.5V15H13A1.5,1.5 0 0,0 14.5,13.5V10.5M18.5,9H15.5V15H17V13H18.5V11.5H17V10.5H18.5V9Z"}},[t.title?r("title",[t._v(t._s(t.title))]):t._e()])])])}),[],!1,null,null,null).exports},asyncData:function(){return Object(o.a)(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,["equality-diversity-inclusion.pdf","modern-slavery-human-trafficking.pdf","environmental-management.pdf","health-and-safety.pdf"];case 2:return e=t.sent,t.abrupt("return",{policies:e});case 4:case"end":return t.stop()}}),t)})))()},head:function(){return{title:"Policies"}}},_=l,m=(r(566),Object(c.a)(_,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("main",{staticClass:"policies"},[t._m(0),t._v(" "),r("ol",{staticClass:"policies__policies"},[r("div",{staticStyle:{"text-align":"center"}},t._l(t.policies,(function(e){return r("li",{key:e,staticClass:"policies__policy"},[r("a",{staticClass:"contact__social-icon",attrs:{href:e}},[r("pdf-icon",{attrs:{title:"PDF"}}),t._v(" "),r("span",{staticClass:"contact__social-text"},[t._v(t._s(e.replace(".pdf","").split("-").join(" ")))])],1)])})),0)])])}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("h1",{staticClass:"policies__title",attrs:{align:"center"}},[t._v("\n    Our "),r("span",{staticClass:"policies__title--primary"},[t._v("Policies")])])}],!1,null,null,null));e.default=m.exports}}]);