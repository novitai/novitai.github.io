(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{583:function(e,o){function r(e){var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}r.keys=function(){return[]},r.resolve=r,e.exports=r,r.id=583},584:function(e,o,r){var map={"./spaceborne/isg_expansion/optic/output.mp4":585,"./spaceborne/isg_expansion/radar/output.mp4":586,"./spaceborne/shale/optic/rgb-fast.mp4":587,"./spaceborne/shale/optic/ucrop/output.mp4":588,"./spaceborne/shale/radar/output.mp4":589};function t(e){var o=n(e);return r(o)}function n(e){if(!r.o(map,e)){var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}return map[e]}t.keys=function(){return Object.keys(map)},t.resolve=n,e.exports=t,t.id=584},585:function(e,o,r){e.exports=r.p+"videos/52e8226.mp4"},586:function(e,o,r){e.exports=r.p+"videos/92d535d.mp4"},587:function(e,o,r){e.exports=r.p+"videos/f2c6973.mp4"},588:function(e,o,r){e.exports=r.p+"videos/738c731.mp4"},589:function(e,o,r){e.exports=r.p+"videos/a7df7c8.mp4"},612:function(e,o,r){"use strict";r.r(o);var t={props:{src:{type:String,required:!0}},computed:{srcWebm:function(){return r(583)("./".concat(this.src,".webm"))},srcMp4:function(){return r(584)("./".concat(this.src,".mp4"))}}},n=r(5),component=Object(n.a)(t,(function(){var e=this,o=e.$createElement,r=e._self._c||o;return r("video",[r("source",{attrs:{src:e.srcWebm,type:"video/webm"}}),e._v(" "),r("source",{attrs:{src:e.srcMp4,type:"video/mp4"}})])}),[],!1,null,null,null);o.default=component.exports}}]);