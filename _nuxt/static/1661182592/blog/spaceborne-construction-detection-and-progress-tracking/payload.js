__NUXT_JSONP__("/blog/spaceborne-construction-detection-and-progress-tracking", {data:[{post:{layout:"investigations",title:"Spaceborne Construction Detection and Progress Tracking",subtitle:"Even under cloud coverage with SAR imagery (radar)",date:new Date(1642334773000),background:"\u002Fimg\u002Fconstruction_detection_progress_tracking\u002Fisg-Sentinel_2016-01-09_09-03-cropped.jpg",slug:"spaceborne-construction-detection-and-progress-tracking",link:"\u002Fblog\u002Fspaceborne-construction-detection-and-progress-tracking\u002F",mins:4,tableOfContents:null,vue:{render:"return function render() { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _vm._m(0) }",staticRenderFns:"return [function () { var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:\"markdown\"},[_c('style',{attrs:{\"type\":\"text\u002Fcss\"}},[_vm._v(\"\\n.smalltext {\\n\\tfont-size: 8px;\\n}\\n\")]),_vm._v(\" \"),_c('p',[_vm._v(\"In this post we will talk about the potential use of near bi-weekly satellite imagery combined with AI for construction detection and tracking development progress and we’ll present 2 examples of our observations.\")]),_vm._v(\" \"),_c('div',{staticClass:\"embed-responsive embed-responsive-1by1\"},[_c('video',{staticClass:\"embed-responsive-item\",attrs:{\"autoplay\":\"\",\"loop\":\"\",\"controls\":\"\"}},[_c('source',{attrs:{\"src\":\"https:\u002F\u002Fgithub.com\u002Fnovitai\u002Fnovitai.github.io\u002Fraw\u002Fmaster\u002Fassets\u002Fvideos\u002Fspaceborne\u002Fshale\u002Foptic\u002Frgb-fast.mp4\",\"type\":\"video\u002Fmp4\"}}),_vm._v(\"\\n    Your browser does not support the video tag.\\n    \")])]),_vm._v(\" \"),_c('div',{staticClass:\"smalltext\",staticStyle:{\"text-align\":\"right\"}},[_vm._v(\"© European Commission, 2019\")]),_vm._v(\" \"),_c('p',[_c('strong',[_vm._v(\"Construction Detection\")])]),_vm._v(\" \"),_c('p',[_vm._v(\"For various reasons detection of construction events from space is a needed commodity. Some of these reasons can be summarised as below.\")]),_vm._v(\" \"),_c('ul',[_c('li',[_vm._v(\"illegal construction detection\")]),_vm._v(\" \"),_c('li',[_vm._v(\"oil rigs & shale site detection\")]),_vm._v(\" \"),_c('li',[_vm._v(\"renewable\u002Ffossil fuel based energy plant detection\")])]),_vm._v(\" \"),_c('p',[_vm._v(\"Using satellite imagery we now can derive factual data that analytics businesses can use. In below figures you can see the detection and in fact the build progress of a shale site using radar imagery.\")]),_vm._v(\" \"),_c('p',[_vm._v(\"While observing note that radar and satellite acquisitions are done at different dates so even though there’s good overlap of construction stages, the events (big changes in frame) do not necessarily overlap.\")]),_vm._v(\" \"),_c('span',{staticClass:\"smalltext\",staticStyle:{\"text-align\":\"right\"}},[_vm._v(\"© European Commission, 2019\")]),_c('table',{staticClass:\"table table-responsive\"},[_c('tbody',[_c('tr',[_c('td',[_c('div',{staticClass:\"embed-responsive-1by1\"},[_c('video',{staticClass:\"embed-responsive-item\",attrs:{\"autoplay\":\"\",\"loop\":\"\",\"controls\":\"\"}},[_c('source',{attrs:{\"src\":\"https:\u002F\u002Fgithub.com\u002Fnovitai\u002Fnovitai.github.io\u002Fraw\u002Fmaster\u002Fassets\u002Fvideos\u002Fspaceborne\u002Fshale\u002Fradar\u002Foutput.mp4\",\"type\":\"video\u002Fmp4\"}}),_vm._v(\"\\n                Your browser does not support the video tag.\\n                \")])])]),_vm._v(\" \"),_c('td',[_c('div',{staticClass:\"embed-responsive-1by1\"},[_c('video',{staticClass:\"embed-responsive-item\",attrs:{\"autoplay\":\"\",\"loop\":\"\",\"controls\":\"\"}},[_c('source',{attrs:{\"src\":\"https:\u002F\u002Fgithub.com\u002Fnovitai\u002Fnovitai.github.io\u002Fraw\u002Fmaster\u002Fassets\u002Fvideos\u002Fspaceborne\u002Fshale\u002Foptic\u002Fucrop\u002Foutput.mp4\",\"type\":\"video\u002Fmp4\"}}),_vm._v(\"\\n                Your browser does not support the video tag.\\n                \")])])])])])]),_vm._v(\" \"),_c('blockquote',[_c('p',[_vm._v(\"Note that these radar images are post-processed with our own algorithms to maximise observability of events.\")])]),_vm._v(\" \"),_c('p',[_vm._v(\"In the above sequences in both radar and optical imagery, certain construction events are clearly distinguishable. While this is only a small example and may not be so obvious for the untrained eye, an task-specific AI model can detect construction events at a massive scale.\")]),_vm._v(\" \"),_c('p',[_c('strong',[_vm._v(\"Progress Development\")])]),_vm._v(\" \"),_c('p',[_vm._v(\"Apart from scanning massive areas for detection events sometimes it’s more important to focus on a single site and track its progress. For this we’ll now look at Istanbul Sabiha Gokcen Airport (SAW) and observe its \"),_c('a',{attrs:{\"href\":\"https:\u002F\u002Fwww.routesonline.com\u002Fairports\u002F6063\u002Fistanbul-sabiha-gokcen-international-airport\u002Fnews\u002F279911\u002Fnew-domestic-terminal-building-at-istanbul-sabiha-gokcen-international-airport-to-boost-passenger-capacity-to-41-million\u002F\"}},[_vm._v(\"expansion\")]),_vm._v(\" from 2015 to 2019. Since there are too many images this sequence is sped up to 0.1 seconds per acquisition.\")]),_vm._v(\" \"),_c('blockquote',[_c('p',[_vm._v(\"Note that this video may take a while to load. Hover your mouse over the video to see controls\")])]),_vm._v(\" \"),_c('div',{staticClass:\"embed-responsive embed-responsive-1by1\"},[_c('video',{staticClass:\"embed-responsive-item\",attrs:{\"controls\":\"\"}},[_c('source',{attrs:{\"src\":\"https:\u002F\u002Fgithub.com\u002Fnovitai\u002Fnovitai.github.io\u002Fraw\u002Fmaster\u002Fassets\u002Fvideos\u002Fspaceborne\u002Fisg_expansion\u002Foptic\u002Foutput.mp4\",\"type\":\"video\u002Fmp4\"}}),_vm._v(\"\\n    Your browser does not support the video tag.\\n    \")])]),_vm._v(\" \"),_c('div',{staticClass:\"smalltext\",staticStyle:{\"text-align\":\"right\"}},[_vm._v(\"© European Commission, 2019\")]),_vm._v(\" \"),_c('p',[_vm._v(\"The slow but steady progress of the expansion can be seen just below the main airstrips. Thanks to the non-reflective (to radar) nature of asphalt, a similar expansion can also be observed in radar imagery which is presented below.\")]),_vm._v(\" \"),_c('div',{staticClass:\"embed-responsive embed-responsive-1by1\"},[_c('video',{staticClass:\"embed-responsive-item\",attrs:{\"controls\":\"\"}},[_c('source',{attrs:{\"src\":\"https:\u002F\u002Fgithub.com\u002Fnovitai\u002Fnovitai.github.io\u002Fraw\u002Fmaster\u002Fassets\u002Fvideos\u002Fspaceborne\u002Fisg_expansion\u002Fradar\u002Foutput.mp4\",\"type\":\"video\u002Fmp4\"}}),_vm._v(\"\\n    Your browser does not support the video tag.\\n    \")])]),_vm._v(\" \"),_c('div',{staticClass:\"smalltext\",staticStyle:{\"text-align\":\"right\"}},[_vm._v(\"© European Commission, 2019\")]),_vm._v(\" \"),_c('p',[_vm._v(\"Notice the increasing darkness under the mainstrips which are also pitch black compared to other areas. This provide a means to track the development of a construction even if there’s cloud coverage.\")]),_vm._v(\" \"),_c('p',[_vm._v(\"Our post processing algorithm combines SAR (synthetic aperture radar) images obtained via different polarisations to bring out the advantages of both acquisitions. This even allows us to even make a manual surface roughness\u002Fsmoothness analysis or even help us estimate sea state.\")]),_vm._v(\" \"),_c('blockquote',[_c('p',[_vm._v(\"For a basic understanding of how SAR imagery works \"),_c('a',{attrs:{\"href\":\"https:\u002F\u002Fwww.radartutorial.eu\u002F20.airborne\u002Fab07.en.html\"}},[_vm._v(\"radartutorial.eu\")]),_vm._v(\" is an incredible source for basics.\")])]),_vm._v(\" \"),_c('p',[_vm._v(\"For your needs of spaceborne detection and tracking needs and for more information, please reach out to us at \"),_c('a',{attrs:{\"href\":\"mailto:contact@novit.ai\"}},[_vm._v(\"contact@novit.ai\")])])]) }]"}}}],fetch:{},mutations:void 0});