(window.webpackJsonp=window.webpackJsonp||[]).push([[5,2,3,4],{229:function(e,t,r){var content=r(243);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(63).default)("3e617254",content,!0,{sourceMap:!1})},230:function(e,t,r){var content=r(245);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(63).default)("1930a9a0",content,!0,{sourceMap:!1})},231:function(e,t,r){var content=r(247);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(63).default)("e6b0be40",content,!0,{sourceMap:!1})},232:function(e,t,r){var map={"./EvolIA-Presentation.mp4":233};function n(e){var t=o(e);return r(t)}function o(e){if(!r.o(map,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return map[e]}n.keys=function(){return Object.keys(map)},n.resolve=o,e.exports=n,n.id=232},233:function(e,t,r){e.exports=r.p+"videos/EvolIA-Presentation.b504106.mp4"},234:function(e,t,r){var map={"./MonoGame_Logo.png":235,"./SFML_Logo.png":236,"./Unity.jpg":237,"./nuxt-icon.png":238,"./pokeball.png":239,"./qt.jpg":240,"./quasar-logo-big.png":241};function n(e){var t=o(e);return r(t)}function o(e){if(!r.o(map,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return map[e]}n.keys=function(){return Object.keys(map)},n.resolve=o,e.exports=n,n.id=234},235:function(e,t,r){e.exports=r.p+"img/MonoGame_Logo.f63bfd0.png"},236:function(e,t,r){e.exports=r.p+"img/SFML_Logo.a7dc41a.png"},237:function(e,t,r){e.exports=r.p+"img/Unity.6d0f4ac.jpg"},238:function(e,t,r){e.exports=r.p+"img/nuxt-icon.6de3ceb.png"},239:function(e,t,r){e.exports=r.p+"img/pokeball.0e3f8c6.png"},240:function(e,t,r){e.exports=r.p+"img/qt.fa01ffc.jpg"},241:function(e,t,r){e.exports=r.p+"img/quasar-logo-big.8cc3957.png"},242:function(e,t,r){"use strict";r(229)},243:function(e,t,r){var n=r(62)(!1);n.push([e.i,".project-overview{border:1px solid rgba(var(--secondary-rgb),.5);background-color:rgba(var(--secondary-rgb),.1);display:flex;flex-direction:column}.project-overview-bottom{display:flex;flex-direction:row}.project-video{margin-bottom:1em}.project-picture{width:100px;max-width:150px;height:auto;margin-right:1em;border-radius:1em;align-self:center;flex-grow:1;flex-basis:0px}.project-details{flex-grow:2;flex-basis:0px;display:flex;flex-direction:column;justify-content:center}.project-header{display:flex;flex-direction:row;justify-content:space-between;align-items:flex-end;margin-bottom:.2em}.project-title{text-align:left;color:var(--secondary)}.project-technos{text-align:right;color:rgba(var(--primary-contrast-rgb),.4)}.project-description{text-align:left;color:var(--primary-contrast)}",""]),e.exports=n},244:function(e,t,r){"use strict";r(230)},245:function(e,t,r){var n=r(62)(!1);n.push([e.i,".Logo{-webkit-animation:appear 1s;animation:appear 1s;margin:auto}@-webkit-keyframes appear{0%{opacity:0}}@keyframes appear{0%{opacity:0}}",""]),e.exports=n},246:function(e,t,r){"use strict";r(231)},247:function(e,t,r){var n=r(62)(!1);n.push([e.i,".date-separator{font-size:2em;text-align:left;border-bottom:1px solid var(--secondary);margin-top:1em;padding:.25em .5em;color:var(--secondary)}",""]),e.exports=n},248:function(e,t,r){"use strict";r.r(t);var n=new(r(1).a)({data:function(){return{event:null,vssWidth:null,vssHeight:null}}}),o={props:["project"],mixins:[{computed:{$vssEvent:function(){return n.event},$vssWidth:function(){return n.vssWidth||this.getScreenWidth()},$vssHeight:function(){return n.vssHeight||this.getScreenHeight()},isNarrow:function(){return this.$vssWidth<=600}},methods:{getScreenWidth:function(){return window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth},getScreenHeight:function(){return window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight},handleResize:function(e){n.event=e,n.vssWidth=this.getScreenWidth(),n.vssHeight=this.getScreenHeight()},$vssDestroyListener:function(){window.removeEventListener("resize",this.handleResize)}},mounted:function(){window.addEventListener("resize",this.handleResize)},destroyed:function(){window.removeEventListener("resize",this.handleResize)}}]},c=(r(242),r(37)),component=Object(c.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"project-overview"},[e.project.video?n("video",{staticClass:"project-video",attrs:{src:r(232)("./"+e.project.video),loop:"",muted:""},domProps:{muted:!0}}):e._e(),e._v(" "),n("div",{staticClass:"project-overview-bottom"},[n("img",{staticClass:"project-picture",attrs:{src:r(234)("./"+e.project.icon),alt:e.project.alt}}),e._v(" "),n("div",{staticClass:"project-details"},[n("div",{staticClass:"project-header"},[n("h3",{staticClass:"project-title"},[e._v(e._s(e.project.title))]),e._v(" "),n("p",{directives:[{name:"show",rawName:"v-show",value:!e.isNarrow,expression:"!isNarrow"}],staticClass:"project-technos"},[e._v(e._s(e.project.technos))])]),e._v(" "),n("p",{staticClass:"project-description"},[e._v(e._s(e.project.description))])])])])}),[],!1,null,null,null);t.default=component.exports},249:function(e,t,r){var content=r(253);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(63).default)("1b7833da",content,!0,{sourceMap:!1})},250:function(e,t,r){"use strict";r.r(t);var n={props:["date"]},o=(r(246),r(37)),component=Object(o.a)(n,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("h2",{staticClass:"date-separator"},[e._v(e._s(e.date))])}),[],!1,null,null,null);t.default=component.exports},251:function(e,t,r){"use strict";r.r(t);r(244);var n=r(37),component=Object(n.a)({},(function(){var e=this.$createElement;return(this._self._c||e)("img",{staticClass:"Logo",attrs:{width:"245",src:"https://github.com/GPrev.png"}})}),[],!1,null,null,null);t.default=component.exports},252:function(e,t,r){"use strict";r(249)},253:function(e,t,r){var n=r(62)(!1);n.push([e.i,".div-body{transition:background-color .5s}.background{background-color:var(--primary);position:fixed;top:0;left:0;z-index:-50;width:100%;height:100vh}.container{margin:0 auto;min-height:100vh;display:flex;justify-content:center;align-items:center;text-align:center}.first-screen{flex-direction:column;justify-content:space-between}.title{display:block;font-weight:300;font-size:100px;color:var(--primary-contrast);letter-spacing:1px;font-size:calc(2vw + 5vh + 2vmin)}.links{padding-top:2em}.scroll-hint{color:var(--primary-contrast);opacity:.8;height:3em;font-size:1.2em;text-align:center}.project-overview-container{flex-direction:column;align-items:stretch;max-width:800px}.project-overview-item{margin:1em;padding:1em}",""]),e.exports=n},266:function(e,t,r){"use strict";r.r(t);var n=r(6),o=(r(28),r(39),{components:{ProjectOverview:r(248).default},asyncData:function(e){return Object(n.a)(regeneratorRuntime.mark((function t(){var r,n,o,c;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.$content,t.next=3,r("project-overview").sortBy("date","asc").fetch();case 3:return n=t.sent,o=function(e,t){return e.reduce((function(e,r){return(e[r[t]]=e[r[t]]||[]).push(r),e}),{})}(n,"date"),c=n[2],t.abrupt("return",{projectsGrouped:o,project:c});case 8:case"end":return t.stop()}}),t)})))()},mounted:function(){this.initScrollHintTrigger(),this.initVideoPlayTriggers(),this.initBackgroundChangeTriggers()},methods:{initScrollHintTrigger:function(){var e=this.$scrollmagic.scene({triggerElement:"#scroll-hint",triggerHook:.85,duration:250}).setTween("#scroll-hint",.5,{opacity:"0"});this.$scrollmagic.addScene(e)},initVideoPlayTriggers:function(){var e=this;document.getElementsByClassName("project-video").forEach((function(video){var t=e.$scrollmagic.scene({triggerElement:video,duration:250}).on("enter",(function(){video.play()})).on("leave",(function(){video.pause(),video.currentTime=0}));e.$scrollmagic.addScene(t)}))},initBackgroundChangeTriggers:function(){var e=this,t=document.getElementsByClassName("div-body")[0],r=this.$refs.poi,n=this;r.forEach((function(component){var element=component.$el,r=e.$scrollmagic.scene({triggerElement:element,duration:250}).on("enter",(function(){n.project=component.project,t.style.backgroundColor="rgba(var(--primary-rgb), 0.7)"})).on("leave",(function(){t.style.backgroundColor="var(--primary)"}));e.$scrollmagic.addScene(r)}))}}}),c=(r(252),r(37)),component=Object(c.a)(o,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("div",{staticClass:"container first-screen"},[r("div",{staticClass:"scroll-hint"}),e._v(" "),r("div",[r("Logo"),e._v(" "),e._m(0),e._v(" "),e._m(1)],1),e._v(" "),e._m(2)]),e._v(" "),r("div",{staticClass:"container project-overview-container"},e._l(e.projectsGrouped,(function(t,n,o){return r("div",{key:n,style:"order: -"+o},[r("date-separator",{attrs:{date:n}}),e._v(" "),e._l(t,(function(e){return r("project-overview",{key:e.slug,ref:"poi",refInFor:!0,staticClass:"project-overview-item",attrs:{project:e}})}))],2)})),0),e._v(" "),r("div",{staticClass:"background"},e._l(e.projectsGrouped,(function(t,n,o){return r("div",{key:n,style:"order: -"+o},e._l(t,(function(t){return r("nuxt-content",{directives:[{name:"show",rawName:"v-show",value:e.project==t,expression:"project == myproject "}],key:t.slug,attrs:{document:t}})})),1)})),0)])}),[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("h1",{staticClass:"title"},[e._v("GPrev"),r("wbr"),e._v(".getPortfolio()")])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"links"},[r("a",{staticClass:"button",attrs:{href:"https://github.com/Gprev",target:"_blank",rel:"noopener noreferrer"}},[e._v("\n          GitHub\n        ")])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"scroll-hint",attrs:{id:"scroll-hint"}},[e._v("\n      Discover my personal projects"),r("br"),e._v("▼\n    ")])}],!1,null,null,null);t.default=component.exports;installComponents(component,{Logo:r(251).default,DateSeparator:r(250).default,ProjectOverview:r(248).default})}}]);