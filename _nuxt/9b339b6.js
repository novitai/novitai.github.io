(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{625:function(e,t){e.exports={attributes:{title:"Choosing a CMS for Your Website",date:"2020-03-28T00:00:00.000Z",description:"Why I decided to use a CMS for my website and why I chose to use Forestry.io",tags:[]},html:'<nav class="table-of-contents"><ol><li><a href="#why-use-a-content-management-system%3F">Why Use a Content Management System?</a></li><li><a href="#which-type-of-cms-is-right-for-you%3F">Which Type of CMS Is Right for You?</a><ol><li><a href="#git-based-cmss">Git-Based CMSs</a></li><li><a href="#api-based-cmss">API-Based CMSs</a></li></ol></li><li><a href="#why-i-chose-forestry.io">Why I Chose Forestry.io</a><ol><li><a href="#setting-up-forestry.io">Setting up Forestry.io</a></li></ol></li></ol></nav><p>I’m writing this blog post on my phone and when I’m finished I’ll click save, which will automatically trigger a build of my website. I think that’s really cool! A few months ago, I didn’t see the appeal in content management systems — in this blog post I’m going to explain why I’ve changed my mind and how to choose the right CMS for you.</p>\n<h2 id="why-use-a-content-management-system%3F" tabindex="-1"><a class="header-anchor" href="#why-use-a-content-management-system%3F">Why Use a Content Management System?</a></h2>\n<p>In my opinion, a content management system is used to abstract the content of a website away from the code. Before I started using a CMS, everything was all squished together in a Git repository; when I wanted to make a new blog post, I would open up Visual Studio Code and create a new Markdown file for the blog post. Now I’ve started using a CMS, everything is still inside the repository (more on that later) but I write new content on Forestry.io, which provides me with an online dashboard <em>designed solely for my content</em>.</p>\n<p>This separation between code and content allows me to focus more on writing content, instead of getting distracted with menial code changes.</p>\n<h2 id="which-type-of-cms-is-right-for-you%3F" tabindex="-1"><a class="header-anchor" href="#which-type-of-cms-is-right-for-you%3F">Which Type of CMS Is Right for You?</a></h2>\n<p>When you think of a Content Management System, you’ll probably think of WordPress, which is used on a staggering <a href="https://w3techs.com/technologies/overview/content_management">36.2% of all websites</a> at the time of writing. If you used WordPress as your CMS of choice, you typically had to use WordPress to create your website as well as the content, this is known as a monolithic or traditional CMS. However, <strong>headless</strong> content management systems are becoming much more popular: headless CMSs allow you to manage your content on the CMS but <em>use your chosen technology</em>, for example, a static site generator like Gatsby or Hugo, to build your website.</p>\n<p>When I started thinking about using a CMS on my website, I’d already created my blog <nuxt-link to="/blog/build-a-blog-with-nuxt-and-markdown/">using Nuxt.js and Markdown</nuxt-link>, so I knew I needed to use a headless CMS. Which brought me to my next decision: should I use a Git-based or API-based headless CMS?</p>\n<p><lazy-image src="/assets/images/dynamic/which-cms/designs.png" alt="Diagram showing the architecture of different CMSs"></lazy-image></p>\n<h3 id="git-based-cmss" tabindex="-1"><a class="header-anchor" href="#git-based-cmss">Git-Based CMSs</a></h3>\n<p>After you edit content in your Git-based CMS, your changes will be pushed to the repository, which will trigger a build of your website (or application). Essentially, all of your content is stored in your Git repository.</p>\n<p><strong>Pros:</strong></p>\n<ul>\n<li>Version control straight out-of-the-box</li>\n<li>Easily revert changes (using your version control system)</li>\n<li>You can easily switch between Git-based CMSs</li>\n<li>No change to the workflow for developers</li>\n<li>It’s really simple!</li>\n</ul>\n<p><strong>Cons:</strong></p>\n<ul>\n<li>Flat-file storage like Markdown isn’t suited to lots of content</li>\n<li>New content will trigger a build every time</li>\n</ul>\n<h3 id="api-based-cmss" tabindex="-1"><a class="header-anchor" href="#api-based-cmss">API-Based CMSs</a></h3>\n<p>An API-based CMS stores all your content in their database. When you edit content, nothing implicitly changes, although you may want to send a webhook to your build process. When you build your website, you will make a request to the API (usually REST or GraphQL) to retrieve the content.</p>\n<p><strong>Pros:</strong></p>\n<ul>\n<li>You can use the content for multiple websites and/or applications</li>\n<li>It can easily handle large amounts of data</li>\n<li>Add new content as often as you want, without necessarily triggering a build</li>\n</ul>\n<p><strong>Cons:</strong></p>\n<ul>\n<li>Version control of your content is now down to the CMS</li>\n<li>API-based CMSs usually have storage and usage limits, which can cost</li>\n<li>Changing your API-based CMS will require changes to how you retrieve your content</li>\n</ul>\n<h2 id="why-i-chose-forestry.io" tabindex="-1"><a class="header-anchor" href="#why-i-chose-forestry.io">Why I Chose Forestry.io</a></h2>\n<p>As all of the content on my website was already stored in the <code>contents</code> directory of my Git repository, it seemed obvious to use a Git-based CMS. I found a number of options, including <a href="https://forestry.io/">Forestry.io</a>, <a href="https://getpublii.com/">Publii</a> and <a href="https://www.netlifycms.org/">Netlify CMS</a>. Each of these uses a different way of accessing the CMS:</p>\n<ul>\n<li>Forestry.io provides a hosted dashboard</li>\n<li>Publii needs to be downloaded as a local application</li>\n<li>Netlify CMS is hosted by you, on your website</li>\n</ul>\n<p>I wanted to be able to edit my content online but I didn’t want the hassle (although it’s probably very straightforward) of setting up Netlify CMS. So I decided to use Forestry.io!</p>\n<h3 id="setting-up-forestry.io" tabindex="-1"><a class="header-anchor" href="#setting-up-forestry.io">Setting up Forestry.io</a></h3>\n<p>Setting up Forestry.io was as simple as telling it where my content and media lived in my repository, and setting up the “sidebar”, essentially the pages on your website.</p>\n<p><lazy-image src="/assets/images/dynamic/which-cms/screenshot.png" alt="Screenshot of the Forestry.io editing panel and sidebar"></lazy-image></p>\n<p>I hope you found this blog post useful in deciding which CMS is right for you!</p>\n',body:"I'm writing this blog post on my phone and when I'm finished I'll click save, which will automatically trigger a build of my website. I think that's really cool! A few months ago, I didn't see the appeal in content management systems --- in this blog post I'm going to explain why I've changed my mind and how to choose the right CMS for you.\n\n## Why Use a Content Management System?\n\nIn my opinion, a content management system is used to abstract the content of a website away from the code. Before I started using a CMS, everything was all squished together in a Git repository; when I wanted to make a new blog post, I would open up Visual Studio Code and create a new Markdown file for the blog post. Now I've started using a CMS, everything is still inside the repository (more on that later) but I write new content on Forestry.io, which provides me with an online dashboard _designed solely for my content_.\n\nThis separation between code and content allows me to focus more on writing content, instead of getting distracted with menial code changes.\n\n## Which Type of CMS Is Right for You?\n\nWhen you think of a Content Management System, you'll probably think of WordPress, which is used on a staggering [36.2% of all websites](https://w3techs.com/technologies/overview/content_management) at the time of writing. If you used WordPress as your CMS of choice, you typically had to use WordPress to create your website as well as the content, this is known as a monolithic or traditional CMS. However, **headless** content management systems are becoming much more popular: headless CMSs allow you to manage your content on the CMS but _use your chosen technology_, for example, a static site generator like Gatsby or Hugo, to build your website.\n\nWhen I started thinking about using a CMS on my website, I'd already created my blog <nuxt-link to=\"/blog/build-a-blog-with-nuxt-and-markdown/\">using Nuxt.js and Markdown</nuxt-link>, so I knew I needed to use a headless CMS. Which brought me to my next decision: should I use a Git-based or API-based headless CMS?\n\n![Diagram showing the architecture of different CMSs](/assets/images/dynamic/which-cms/designs.png)\n\n### Git-Based CMSs\n\nAfter you edit content in your Git-based CMS, your changes will be pushed to the repository, which will trigger a build of your website (or application). Essentially, all of your content is stored in your Git repository.\n\n**Pros:**\n\n- Version control straight out-of-the-box\n- Easily revert changes (using your version control system)\n- You can easily switch between Git-based CMSs\n- No change to the workflow for developers\n- It's really simple!\n\n**Cons:**\n\n- Flat-file storage like Markdown isn't suited to lots of content\n- New content will trigger a build every time\n\n### API-Based CMSs\n\nAn API-based CMS stores all your content in their database. When you edit content, nothing implicitly changes, although you may want to send a webhook to your build process. When you build your website, you will make a request to the API (usually REST or GraphQL) to retrieve the content.\n\n**Pros:**\n\n- You can use the content for multiple websites and/or applications\n- It can easily handle large amounts of data\n- Add new content as often as you want, without necessarily triggering a build\n\n**Cons:**\n\n- Version control of your content is now down to the CMS\n- API-based CMSs usually have storage and usage limits, which can cost\n- Changing your API-based CMS will require changes to how you retrieve your content\n\n## Why I Chose Forestry.io\n\nAs all of the content on my website was already stored in the `contents` directory of my Git repository, it seemed obvious to use a Git-based CMS. I found a number of options, including [Forestry.io](https://forestry.io/), [Publii](https://getpublii.com/) and [Netlify CMS](https://www.netlifycms.org/). Each of these uses a different way of accessing the CMS:\n\n- Forestry.io provides a hosted dashboard\n- Publii needs to be downloaded as a local application\n- Netlify CMS is hosted by you, on your website\n\nI wanted to be able to edit my content online but I didn't want the hassle (although it's probably very straightforward) of setting up Netlify CMS. So I decided to use Forestry.io!\n\n### Setting up Forestry.io\n\nSetting up Forestry.io was as simple as telling it where my content and media lived in my repository, and setting up the \"sidebar\", essentially the pages on your website.\n\n![Screenshot of the Forestry.io editing panel and sidebar](/assets/images/dynamic/which-cms/screenshot.png)\n\nI hope you found this blog post useful in deciding which CMS is right for you!\n",vue:{render:'return function render() { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c(\'div\',{staticClass:"markdown"},[_vm._m(0),_c(\'p\',[_vm._v("I’m writing this blog post on my phone and when I’m finished I’ll click save, which will automatically trigger a build of my website. I think that’s really cool! A few months ago, I didn’t see the appeal in content management systems — in this blog post I’m going to explain why I’ve changed my mind and how to choose the right CMS for you.")]),_vm._v(" "),_vm._m(1),_vm._v(" "),_vm._m(2),_vm._v(" "),_c(\'p\',[_vm._v("This separation between code and content allows me to focus more on writing content, instead of getting distracted with menial code changes.")]),_vm._v(" "),_vm._m(3),_vm._v(" "),_vm._m(4),_vm._v(" "),_c(\'p\',[_vm._v("When I started thinking about using a CMS on my website, I’d already created my blog "),_c(\'nuxt-link\',{attrs:{"to":"/blog/build-a-blog-with-nuxt-and-markdown/"}},[_vm._v("using Nuxt.js and Markdown")]),_vm._v(", so I knew I needed to use a headless CMS. Which brought me to my next decision: should I use a Git-based or API-based headless CMS?")],1),_vm._v(" "),_c(\'p\',[_c(\'lazy-image\',{attrs:{"src":"/assets/images/dynamic/which-cms/designs.png","alt":"Diagram showing the architecture of different CMSs"}})],1),_vm._v(" "),_vm._m(5),_vm._v(" "),_c(\'p\',[_vm._v("After you edit content in your Git-based CMS, your changes will be pushed to the repository, which will trigger a build of your website (or application). Essentially, all of your content is stored in your Git repository.")]),_vm._v(" "),_vm._m(6),_vm._v(" "),_vm._m(7),_vm._v(" "),_vm._m(8),_vm._v(" "),_vm._m(9),_vm._v(" "),_vm._m(10),_vm._v(" "),_c(\'p\',[_vm._v("An API-based CMS stores all your content in their database. When you edit content, nothing implicitly changes, although you may want to send a webhook to your build process. When you build your website, you will make a request to the API (usually REST or GraphQL) to retrieve the content.")]),_vm._v(" "),_vm._m(11),_vm._v(" "),_vm._m(12),_vm._v(" "),_vm._m(13),_vm._v(" "),_vm._m(14),_vm._v(" "),_vm._m(15),_vm._v(" "),_vm._m(16),_vm._v(" "),_vm._m(17),_vm._v(" "),_c(\'p\',[_vm._v("I wanted to be able to edit my content online but I didn’t want the hassle (although it’s probably very straightforward) of setting up Netlify CMS. So I decided to use Forestry.io!")]),_vm._v(" "),_vm._m(18),_vm._v(" "),_c(\'p\',[_vm._v("Setting up Forestry.io was as simple as telling it where my content and media lived in my repository, and setting up the “sidebar”, essentially the pages on your website.")]),_vm._v(" "),_c(\'p\',[_c(\'lazy-image\',{attrs:{"src":"/assets/images/dynamic/which-cms/screenshot.png","alt":"Screenshot of the Forestry.io editing panel and sidebar"}})],1),_vm._v(" "),_c(\'p\',[_vm._v("I hope you found this blog post useful in deciding which CMS is right for you!")])]) }',staticRenderFns:'return [function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c(\'nav\',{staticClass:"table-of-contents"},[_c(\'ol\',[_c(\'li\',[_c(\'a\',{attrs:{"href":"#why-use-a-content-management-system%3F"}},[_vm._v("Why Use a Content Management System?")])]),_c(\'li\',[_c(\'a\',{attrs:{"href":"#which-type-of-cms-is-right-for-you%3F"}},[_vm._v("Which Type of CMS Is Right for You?")]),_c(\'ol\',[_c(\'li\',[_c(\'a\',{attrs:{"href":"#git-based-cmss"}},[_vm._v("Git-Based CMSs")])]),_c(\'li\',[_c(\'a\',{attrs:{"href":"#api-based-cmss"}},[_vm._v("API-Based CMSs")])])])]),_c(\'li\',[_c(\'a\',{attrs:{"href":"#why-i-chose-forestry.io"}},[_vm._v("Why I Chose Forestry.io")]),_c(\'ol\',[_c(\'li\',[_c(\'a\',{attrs:{"href":"#setting-up-forestry.io"}},[_vm._v("Setting up Forestry.io")])])])])])]) },function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c(\'h2\',{attrs:{"id":"why-use-a-content-management-system%3F","tabindex":"-1"}},[_c(\'a\',{staticClass:"header-anchor",attrs:{"href":"#why-use-a-content-management-system%3F"}},[_vm._v("Why Use a Content Management System?")])]) },function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c(\'p\',[_vm._v("In my opinion, a content management system is used to abstract the content of a website away from the code. Before I started using a CMS, everything was all squished together in a Git repository; when I wanted to make a new blog post, I would open up Visual Studio Code and create a new Markdown file for the blog post. Now I’ve started using a CMS, everything is still inside the repository (more on that later) but I write new content on Forestry.io, which provides me with an online dashboard "),_c(\'em\',[_vm._v("designed solely for my content")]),_vm._v(".")]) },function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c(\'h2\',{attrs:{"id":"which-type-of-cms-is-right-for-you%3F","tabindex":"-1"}},[_c(\'a\',{staticClass:"header-anchor",attrs:{"href":"#which-type-of-cms-is-right-for-you%3F"}},[_vm._v("Which Type of CMS Is Right for You?")])]) },function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c(\'p\',[_vm._v("When you think of a Content Management System, you’ll probably think of WordPress, which is used on a staggering "),_c(\'a\',{attrs:{"href":"https://w3techs.com/technologies/overview/content_management"}},[_vm._v("36.2% of all websites")]),_vm._v(" at the time of writing. If you used WordPress as your CMS of choice, you typically had to use WordPress to create your website as well as the content, this is known as a monolithic or traditional CMS. However, "),_c(\'strong\',[_vm._v("headless")]),_vm._v(" content management systems are becoming much more popular: headless CMSs allow you to manage your content on the CMS but "),_c(\'em\',[_vm._v("use your chosen technology")]),_vm._v(", for example, a static site generator like Gatsby or Hugo, to build your website.")]) },function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c(\'h3\',{attrs:{"id":"git-based-cmss","tabindex":"-1"}},[_c(\'a\',{staticClass:"header-anchor",attrs:{"href":"#git-based-cmss"}},[_vm._v("Git-Based CMSs")])]) },function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c(\'p\',[_c(\'strong\',[_vm._v("Pros:")])]) },function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c(\'ul\',[_c(\'li\',[_vm._v("Version control straight out-of-the-box")]),_vm._v(" "),_c(\'li\',[_vm._v("Easily revert changes (using your version control system)")]),_vm._v(" "),_c(\'li\',[_vm._v("You can easily switch between Git-based CMSs")]),_vm._v(" "),_c(\'li\',[_vm._v("No change to the workflow for developers")]),_vm._v(" "),_c(\'li\',[_vm._v("It’s really simple!")])]) },function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c(\'p\',[_c(\'strong\',[_vm._v("Cons:")])]) },function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c(\'ul\',[_c(\'li\',[_vm._v("Flat-file storage like Markdown isn’t suited to lots of content")]),_vm._v(" "),_c(\'li\',[_vm._v("New content will trigger a build every time")])]) },function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c(\'h3\',{attrs:{"id":"api-based-cmss","tabindex":"-1"}},[_c(\'a\',{staticClass:"header-anchor",attrs:{"href":"#api-based-cmss"}},[_vm._v("API-Based CMSs")])]) },function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c(\'p\',[_c(\'strong\',[_vm._v("Pros:")])]) },function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c(\'ul\',[_c(\'li\',[_vm._v("You can use the content for multiple websites and/or applications")]),_vm._v(" "),_c(\'li\',[_vm._v("It can easily handle large amounts of data")]),_vm._v(" "),_c(\'li\',[_vm._v("Add new content as often as you want, without necessarily triggering a build")])]) },function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c(\'p\',[_c(\'strong\',[_vm._v("Cons:")])]) },function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c(\'ul\',[_c(\'li\',[_vm._v("Version control of your content is now down to the CMS")]),_vm._v(" "),_c(\'li\',[_vm._v("API-based CMSs usually have storage and usage limits, which can cost")]),_vm._v(" "),_c(\'li\',[_vm._v("Changing your API-based CMS will require changes to how you retrieve your content")])]) },function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c(\'h2\',{attrs:{"id":"why-i-chose-forestry.io","tabindex":"-1"}},[_c(\'a\',{staticClass:"header-anchor",attrs:{"href":"#why-i-chose-forestry.io"}},[_vm._v("Why I Chose Forestry.io")])]) },function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c(\'p\',[_vm._v("As all of the content on my website was already stored in the "),_c(\'code\',{pre:true},[_vm._v("contents")]),_vm._v(" directory of my Git repository, it seemed obvious to use a Git-based CMS. I found a number of options, including "),_c(\'a\',{attrs:{"href":"https://forestry.io/"}},[_vm._v("Forestry.io")]),_vm._v(", "),_c(\'a\',{attrs:{"href":"https://getpublii.com/"}},[_vm._v("Publii")]),_vm._v(" and "),_c(\'a\',{attrs:{"href":"https://www.netlifycms.org/"}},[_vm._v("Netlify CMS")]),_vm._v(". Each of these uses a different way of accessing the CMS:")]) },function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c(\'ul\',[_c(\'li\',[_vm._v("Forestry.io provides a hosted dashboard")]),_vm._v(" "),_c(\'li\',[_vm._v("Publii needs to be downloaded as a local application")]),_vm._v(" "),_c(\'li\',[_vm._v("Netlify CMS is hosted by you, on your website")])]) },function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c(\'h3\',{attrs:{"id":"setting-up-forestry.io","tabindex":"-1"}},[_c(\'a\',{staticClass:"header-anchor",attrs:{"href":"#setting-up-forestry.io"}},[_vm._v("Setting up Forestry.io")])]) }]'}}}}]);