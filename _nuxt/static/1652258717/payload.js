__NUXT_JSONP__("/", (function(a,b,c,d){return {data:[{markdown:{vue:{render:"return function render() { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _vm._m(0) }",staticRenderFns:"return [function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:\"markdown\"},[_c('p',[_vm._v(\"We are Novit ai works on \"),_c('a',{attrs:{\"href\":\"https:\u002F\u002Fblogs.nvidia.com\u002Fblog\u002F2022\u002F02\u002F17\u002Fwhat-is-edge-ai\u002F\"}},[_vm._v(\"Edge ai\")]),_vm._v(\", currently located in \"),_c('a',{attrs:{\"href\":\"https:\u002F\u002Fwww.google.com\u002Fmaps\u002Fplace\u002FLondon\"}},[_vm._v(\"London\")]),_vm._v(\". We help customers to build and deploy intelligent solutions for their business. Ai is the next big thing in the world. We are a team of AI experts, with a passion for AI.\")])]) }]"}},posts:[{title:"Nuxt, Netlify Forms and reCAPTCHA",date:new Date(1640563200000),description:"How to integrate Netlify Forms and reCAPTCHA into a Nuxt application",tags:[],slug:"nuxt-netlify-forms-and-recaptcha",link:"\u002Fblog\u002Fnuxt-netlify-forms-and-recaptcha\u002F",mins:14,tableOfContents:"\u003Cnav class=\"table-of-contents\"\u003E\u003Col\u003E\u003Cli\u003E\u003Ca href=\"#netlify-forms\"\u003ENetlify Forms\u003C\u002Fa\u003E\u003Col\u003E\u003Cli\u003E\u003Ca href=\"#how-netlify-forms-works\"\u003EHow Netlify Forms Works\u003C\u002Fa\u003E\u003C\u002Fli\u003E\u003Cli\u003E\u003Ca href=\"#javascript-rendered-forms\"\u003EJavaScript-Rendered Forms\u003C\u002Fa\u003E\u003C\u002Fli\u003E\u003C\u002Fol\u003E\u003C\u002Fli\u003E\u003Cli\u003E\u003Ca href=\"#a-basic-form-using-netlify-forms-and-nuxt\"\u003EA Basic Form Using Netlify Forms and Nuxt\u003C\u002Fa\u003E\u003Col\u003E\u003Cli\u003E\u003Ca href=\"#using-your-own-success-message\"\u003EUsing Your Own Success Message\u003C\u002Fa\u003E\u003C\u002Fli\u003E\u003C\u002Fol\u003E\u003C\u002Fli\u003E\u003Cli\u003E\u003Ca href=\"#adding-recaptcha-to-your-form\"\u003EAdding reCAPTCHA to Your Form\u003C\u002Fa\u003E\u003Col\u003E\u003Cli\u003E\u003Ca href=\"#getting-a-site-key-and-secret-key\"\u003EGetting a Site Key and Secret Key\u003C\u002Fa\u003E\u003C\u002Fli\u003E\u003Cli\u003E\u003Ca href=\"#setting-up-the-environment-variables\"\u003ESetting up the Environment Variables\u003C\u002Fa\u003E\u003C\u002Fli\u003E\u003Cli\u003E\u003Ca href=\"#adding-the-recaptcha-widget\"\u003EAdding the reCAPTCHA Widget\u003C\u002Fa\u003E\u003C\u002Fli\u003E\u003C\u002Fol\u003E\u003C\u002Fli\u003E\u003Cli\u003E\u003Ca href=\"#making-the-recaptcha-widget-invisible\"\u003EMaking the reCAPTCHA Widget Invisible\u003C\u002Fa\u003E\u003C\u002Fli\u003E\u003Cli\u003E\u003Ca href=\"#sending-the-form-using-ajax\"\u003ESending the Form Using AJAX\u003C\u002Fa\u003E\u003C\u002Fli\u003E\u003C\u002Fol\u003E\u003C\u002Fnav\u003E"},{title:"Interpolating Colour with CSS",date:new Date(1620518400000),description:"Different methods of interpolating colour in CSS including negative animation‑delay",tags:[],slug:"interpolating-colour-with-css",link:"\u002Fblog\u002Finterpolating-colour-with-css\u002F",mins:7,tableOfContents:"\u003Cnav class=\"table-of-contents\"\u003E\u003Col\u003E\u003Cli\u003E\u003Ca href=\"#using-css-variables\"\u003EUsing CSS Variables\u003C\u002Fa\u003E\u003Col\u003E\u003Cli\u003E\u003Ca href=\"#interpolating-between-any-two-colours\"\u003EInterpolating Between Any Two Colours\u003C\u002Fa\u003E\u003C\u002Fli\u003E\u003C\u002Fol\u003E\u003C\u002Fli\u003E\u003Cli\u003E\u003Ca href=\"#interpolating-colour-using-animation\"\u003EInterpolating Colour Using Animation\u003C\u002Fa\u003E\u003Col\u003E\u003Cli\u003E\u003Ca href=\"#negative-animation-delay\"\u003ENegative animation-delay\u003C\u002Fa\u003E\u003C\u002Fli\u003E\u003C\u002Fol\u003E\u003C\u002Fli\u003E\u003Cli\u003E\u003Ca href=\"#combining-css-variables-and-animation\"\u003ECombining CSS Variables and Animation\u003C\u002Fa\u003E\u003C\u002Fli\u003E\u003Cli\u003E\u003Ca href=\"#which-method-is-best%3F\"\u003EWhich Method Is Best?\u003C\u002Fa\u003E\u003C\u002Fli\u003E\u003C\u002Fol\u003E\u003C\u002Fnav\u003E"},{title:"Optimising the Fonts on My Website",date:new Date(1586476800000),description:"How I changed my font loading strategy and reduced the first stage fonts by over 100 kB",tags:[],slug:"optimising-the-fonts-on-my-website",link:"\u002Fblog\u002Foptimising-the-fonts-on-my-website\u002F",mins:11,tableOfContents:"\u003Cnav class=\"table-of-contents\"\u003E\u003Col\u003E\u003Cli\u003E\u003Ca href=\"#before-optimising-the-fonts\"\u003EBefore Optimising the Fonts\u003C\u002Fa\u003E\u003C\u002Fli\u003E\u003Cli\u003E\u003Ca href=\"#font-loading-strategies\"\u003EFont Loading Strategies\u003C\u002Fa\u003E\u003Col\u003E\u003Cli\u003E\u003Ca href=\"#flash-of-invisible-text\"\u003EFlash of Invisible Text\u003C\u002Fa\u003E\u003C\u002Fli\u003E\u003Cli\u003E\u003Ca href=\"#flash-of-unstyled-text\"\u003EFlash of Unstyled Text\u003C\u002Fa\u003E\u003C\u002Fli\u003E\u003Cli\u003E\u003Ca href=\"#flash-of-faux-text\"\u003EFlash of Faux Text\u003C\u002Fa\u003E\u003C\u002Fli\u003E\u003C\u002Fol\u003E\u003C\u002Fli\u003E\u003Cli\u003E\u003Ca href=\"#do-i-really-need-this-many-web-fonts%3F\"\u003EDo I Really Need This Many Web Fonts?\u003C\u002Fa\u003E\u003C\u002Fli\u003E\u003Cli\u003E\u003Ca href=\"#implementing-a-foft-font-loading-strategy\"\u003EImplementing a FOFT Font Loading Strategy\u003C\u002Fa\u003E\u003Col\u003E\u003Cli\u003E\u003Ca href=\"#picking-a-font\"\u003EPicking a Font\u003C\u002Fa\u003E\u003C\u002Fli\u003E\u003Cli\u003E\u003Ca href=\"#subsetting-a-font\"\u003ESubsetting a Font\u003C\u002Fa\u003E\u003Col\u003E\u003C\u002Fol\u003E\u003C\u002Fli\u003E\u003Cli\u003E\u003Ca href=\"#preloading-the-first-stage-font\"\u003EPreloading the First Stage Font\u003C\u002Fa\u003E\u003C\u002Fli\u003E\u003Cli\u003E\u003Ca href=\"#loading-the-second-stage-fonts-with-javascript\"\u003ELoading the Second Stage Fonts with JavaScript\u003C\u002Fa\u003E\u003C\u002Fli\u003E\u003C\u002Fol\u003E\u003C\u002Fli\u003E\u003Cli\u003E\u003Ca href=\"#after-optimising-the-fonts\"\u003EAfter Optimising the Fonts\u003C\u002Fa\u003E\u003C\u002Fli\u003E\u003C\u002Fol\u003E\u003C\u002Fnav\u003E"},{title:"Choosing a CMS for Your Website",date:new Date(1585353600000),description:"Why I decided to use a CMS for my website and why I chose to use Forestry.io",tags:[],slug:"choosing-a-cms-for-your-website",link:"\u002Fblog\u002Fchoosing-a-cms-for-your-website\u002F",mins:4,tableOfContents:"\u003Cnav class=\"table-of-contents\"\u003E\u003Col\u003E\u003Cli\u003E\u003Ca href=\"#why-use-a-content-management-system%3F\"\u003EWhy Use a Content Management System?\u003C\u002Fa\u003E\u003C\u002Fli\u003E\u003Cli\u003E\u003Ca href=\"#which-type-of-cms-is-right-for-you%3F\"\u003EWhich Type of CMS Is Right for You?\u003C\u002Fa\u003E\u003Col\u003E\u003Cli\u003E\u003Ca href=\"#git-based-cmss\"\u003EGit-Based CMSs\u003C\u002Fa\u003E\u003C\u002Fli\u003E\u003Cli\u003E\u003Ca href=\"#api-based-cmss\"\u003EAPI-Based CMSs\u003C\u002Fa\u003E\u003C\u002Fli\u003E\u003C\u002Fol\u003E\u003C\u002Fli\u003E\u003Cli\u003E\u003Ca href=\"#why-i-chose-forestry.io\"\u003EWhy I Chose Forestry.io\u003C\u002Fa\u003E\u003Col\u003E\u003Cli\u003E\u003Ca href=\"#setting-up-forestry.io\"\u003ESetting up Forestry.io\u003C\u002Fa\u003E\u003C\u002Fli\u003E\u003C\u002Fol\u003E\u003C\u002Fli\u003E\u003C\u002Fol\u003E\u003C\u002Fnav\u003E"}],projects:[{title:"Asset Tracking",titleShort:a,date:new Date(1612742400000),image:"\u002Fassets\u002Fimages\u002Fdynamic\u002Fasset-tracking.png",description:"Tap in to the world of New Space and IoT with AI to know where exactly in the world your assets are now, and where they're likely to be later",slug:"asset-tracking",link:"\u002Fservices\u002Fasset-tracking\u002F",mins:b,tableOfContents:c},{title:"Development Tracking",titleShort:a,date:new Date(1602979200000),image:"\u002Fassets\u002Fimages\u002Fdynamic\u002Fdevelopment-tracking.gif",description:"Know how far along your competitors are in construction, or verify the claims of your remote crew with our AI looking through clouds with radar satellites",tags:["Eleventy","Starter project","Components","Critical CSS","Minify"],slug:"development-tracking",link:"\u002Fservices\u002Fdevelopment-tracking\u002F",mins:b,tableOfContents:c},{title:"Renewable Insights",titleShort:a,date:new Date(1556668800000),image:"\u002Fassets\u002Fimages\u002Fdynamic\u002Frenewable-insights.png",description:"Get verifiable and up-to-date counts of renewable energy assets in any region with our global AI working through satellite constellations",tags:["Python","OpenCV","scikit-learn","Flask",d],slug:"renewable-insights",link:"\u002Fservices\u002Frenewable-insights\u002F",mins:5,tableOfContents:"\u003Cnav class=\"table-of-contents\"\u003E\u003Col\u003E\u003Cli\u003E\u003Ca href=\"#impetus\"\u003EImpetus\u003C\u002Fa\u003E\u003C\u002Fli\u003E\u003Cli\u003E\u003Ca href=\"#how-it-works\"\u003EHow It Works\u003C\u002Fa\u003E\u003C\u002Fli\u003E\u003Cli\u003E\u003Ca href=\"#designing-the-user-interface\"\u003EDesigning the User Interface\u003C\u002Fa\u003E\u003C\u002Fli\u003E\u003Cli\u003E\u003Ca href=\"#conclusion-of-the-report\"\u003EConclusion of the Report\u003C\u002Fa\u003E\u003C\u002Fli\u003E\u003C\u002Fol\u003E\u003C\u002Fnav\u003E"},{title:"Density Analysis",titleShort:a,date:new Date(1554076800000),image:"\u002Fassets\u002Fimages\u002Fdynamic\u002Fdensity-analysis.png",description:"Get time-series information on the utilisation of airports, shopping malls and ports with our AI aggregating all the data for you",tags:["Node.js","Express","socket.io","MongoDB","Passport",d,"Mapbox"],type:"hidden",slug:"density-analysis",link:"\u002Fservices\u002Fdensity-analysis\u002F",mins:b,tableOfContents:c}]}],fetch:{},mutations:void 0}}("",1,null,"Vue")));