(window.webpackJsonp=window.webpackJsonp||[]).push([[46,14],{1073:function(t,e,o){"use strict";o(693)},1074:function(t,e,o){var n=o(107)(!1);n.push([t.i,".link-button-wrapper[data-v-6b90c3af]{padding:37px 0;outline:none;border:none;cursor:pointer;display:block;text-align:center;border-radius:15px;display:flex;align-items:center;justify-content:center}.link-button-wrapper[data-v-6b90c3af]:hover{filter:contrast(85%)}.link-button-img[data-v-6b90c3af]{display:block;height:45px;width:170px;-o-object-fit:contain;object-fit:contain}",""]),t.exports=n},1075:function(t,e,o){"use strict";o(694)},1076:function(t,e,o){var n=o(107),r=o(200),d=o(1077),l=n(!1),c=r(d);l.push([t.i,"@font-face{font-family:Bauhaus93;src:url("+c+")}.container[data-v-4d578fb4]{background:linear-gradient(#1b0c43,#2f1670);height:100%}.container-inner[data-v-4d578fb4]{max-width:900px;margin-left:auto;margin-right:auto;padding-top:90px}.header[data-v-4d578fb4]{font-size:90px;text-transform:uppercase;line-height:90px;font-family:Bauhaus93,sans-serif}.desc[data-v-4d578fb4],.header[data-v-4d578fb4]{color:#fff;text-align:center;padding:0 20px}.desc[data-v-4d578fb4]{font-size:26px;opacity:.7;margin-top:5px}.link-buttons[data-v-4d578fb4]{max-width:725px;grid-gap:55px 60px;display:grid;grid-template-columns:repeat(2,1fr);margin-left:auto;margin-right:auto;margin-top:35px;border-radius:20px;padding:50px 0;position:relative}.particles-container[data-v-4d578fb4]{position:fixed;top:0;left:0;width:100%;height:100%;pointer-events:none}.particles-container-count[data-v-4d578fb4]{z-index:3;background:linear-gradient(#1b0c43,#2f1670)}.particles[data-v-4d578fb4]{height:100%;pointer-events:none}.countdown[data-v-4d578fb4]{position:absolute;left:50%;top:50%;font-family:Bauhaus93,sans-serif;font-size:86px;color:#fff;transform:translate(-50%,-50%)}.countdown-wrapper[data-v-4d578fb4]{position:fixed;top:0;left:0;width:100%;height:100%;touch-action:none;z-index:4}.credit-footer[data-v-4d578fb4]{text-align:center;padding:15px}.credit-footer[data-v-4d578fb4],.credit-footer a[data-v-4d578fb4]{color:#fff;font-size:18px}.site-link[data-v-4d578fb4]{position:absolute;color:#fff;text-decoration:none;top:15px;left:15px;max-width:140px}@media only screen and (max-width:750px){.container-inner[data-v-4d578fb4]{padding-top:55px}.header[data-v-4d578fb4]{font-size:90px;line-height:80px}.desc[data-v-4d578fb4]{font-size:22px;margin-top:15px}.link-buttons[data-v-4d578fb4]{grid-template-columns:1fr;grid-gap:30px;padding:10px 20px 20px}.site-link[data-v-4d578fb4]{display:none}}",""]),t.exports=l},1077:function(t,e,o){t.exports=o.p+"fonts/Bauhaus93.e75c9bd.woff2"},1078:function(t,e,o){"use strict";o(695)},1079:function(t,e,o){var n=o(107)(!1);n.push([t.i,".tsparticles-canvas-el{pointer-events:none!important}",""]),t.exports=n},1166:function(t,e,o){"use strict";o.r(e);var n=o(1183),r=o(1151),d={props:{bgColor:{required:!0,type:String},img:{required:!0,type:String},to:{required:!0,type:String},goToPage:{required:!0,type:Function}}},l=(o(1073),o(28)),c=Object(l.a)(d,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"link-button-wrapper",style:{background:t.bgColor},on:{click:function(){return t.goToPage("https://ten-years-ago.neal.fun/".concat(t.to,"/"))}}},[e("img",{staticClass:"link-button-img",attrs:{src:t.img}})])}),[],!1,null,"6b90c3af",null).exports,f=o(1127),m=o(311),h={components:{linkButton:c},data:function(){var t=n.a(new Date,10);return{showCount:!1,date:t,dateStr:r.a(t,"LLLL do, yyyy"),currYear:(new Date).getFullYear(),yearAnim:null}},mounted:function(){var t=this;f.a.load("ten-years-ago-particles",{particles:{number:{value:6,density:{enable:!0,value_area:50}},color:{value:"rgba(255, 255, 255, .2)"},line_linked:{enable:!0,distance:120,color:"#ffffff",opacity:.2,width:1},size:{value:3,random:!0},move:{enable:!0,speed:1,direction:"none",random:!1,straight:!1,out_mode:"out",bounce:!1}},interactivity:{events:{resize:!0}},retina_detect:!0}),this.$addEventListener("pageshow",(function(e){e.persisted&&(t.showCount=!1)}))},methods:{goToPage:function(t){var e=this;this.showCount=!0,this.yearAnim=this.currYear;this.$requestAnimationFrame((function(time){m.a.update(time)}));var o={year:this.currYear};new m.a.Tween(o).to({year:this.currYear-10},2e3).delay(200).easing(m.a.Easing.Quadratic.Out).onUpdate((function(){e.yearAnim=Math.round(o.year)})).start(),this.$setTimeout((function(){window.location.href=t}),2300)}}},v=(o(1075),o(1078),Object(l.a)(h,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"container"},[e("nuxt-link",{staticClass:"site-link",attrs:{to:"/"}},[e("logo",{attrs:{color:"white"}})],1),t._v(" "),e("div",{staticClass:"particles-container",class:{"particles-container-count":t.showCount}},[e("div",{staticClass:"particles",attrs:{id:"ten-years-ago-particles"}})]),t._v(" "),e("div",{staticClass:"container-inner"},[e("div",{staticClass:"header"},[t._v("Ten Years Ago")]),t._v(" "),e("div",{staticClass:"desc"},[t._v("\n      See what the internet looked like on "+t._s(t.dateStr)+".\n    ")]),t._v(" "),e("div",{staticClass:"link-buttons"},[e("link-button",{attrs:{to:"cnn.com",bgColor:"#cc0000",img:"/ten-years-ago/cnn.svg",goToPage:t.goToPage}}),t._v(" "),e("link-button",{attrs:{to:"nytimes.com",bgColor:"white",img:"/ten-years-ago/nytimes.svg",goToPage:t.goToPage}}),t._v(" "),e("link-button",{attrs:{to:"bbc.com",bgColor:"white",img:"/ten-years-ago/bbc.svg",goToPage:t.goToPage}}),t._v(" "),e("link-button",{attrs:{to:"foxnews.com",bgColor:"#003366",img:"/ten-years-ago/fox-news.svg",goToPage:t.goToPage}}),t._v(" "),e("link-button",{attrs:{to:"reddit.com",bgColor:"#FF5700",img:"/ten-years-ago/reddit.svg",goToPage:t.goToPage}}),t._v(" "),e("link-button",{attrs:{to:"amazon.com",bgColor:"#FF9900",img:"/ten-years-ago/amazon.svg",goToPage:t.goToPage}}),t._v(" "),e("link-button",{attrs:{to:"youtube.com",bgColor:"#FF0000",img:"/ten-years-ago/youtube.svg",goToPage:t.goToPage}}),t._v(" "),e("link-button",{attrs:{to:"espn.go.com",bgColor:"#E52534",img:"/ten-years-ago/espn.svg",goToPage:t.goToPage}}),t._v(" "),e("link-button",{attrs:{to:"apple.com",bgColor:"white",img:"/ten-years-ago/apple.svg",goToPage:t.goToPage}}),t._v(" "),e("link-button",{attrs:{to:"imdb.com",bgColor:"#F6C700",img:"/ten-years-ago/imdb.svg",goToPage:t.goToPage}}),t._v(" "),e("link-button",{attrs:{to:"cnet.com",bgColor:"#CC0001",img:"/ten-years-ago/cnet.svg",goToPage:t.goToPage}}),t._v(" "),e("link-button",{attrs:{to:"ign.com",bgColor:"white",img:"/ten-years-ago/ign.svg",goToPage:t.goToPage}}),t._v(" "),e("link-button",{attrs:{to:"store.steampowered.com",bgColor:"#171a21",img:"/ten-years-ago/steam.svg",goToPage:t.goToPage}}),t._v(" "),e("link-button",{attrs:{to:"goodreads.com",bgColor:"#e9e5cd",img:"/ten-years-ago/good-reads.svg",goToPage:t.goToPage}})],1),t._v(" "),t._m(0),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:t.showCount,expression:"showCount"}],staticClass:"countdown-wrapper"},[e("div",{staticClass:"countdown"},[t._v(t._s(t.yearAnim))])])]),t._v(" "),e("Footer",{attrs:{bg:"none",color:"white"}})],1)}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"credit-footer"},[t._v("\n      Data provided by the Internet Archive. Support efforts to archive the\n      web\n      "),e("a",{attrs:{href:"https://archive.org/donate/"}},[t._v("here")]),t._v(".\n    ")])}],!1,null,"4d578fb4",null));e.default=v.exports;installComponents(v,{Logo:o(288).default,Footer:o(295).default})},277:function(t,e,o){var content=o(285);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(108).default)("f68e4eaa",content,!0,{sourceMap:!1})},278:function(t,e,o){var content=o(291);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(108).default)("db35a8f0",content,!0,{sourceMap:!1})},279:function(t,e,o){var content=o(294);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(108).default)("c9434642",content,!0,{sourceMap:!1})},280:function(t,e,o){"use strict";o.r(e);o(276);var n={props:{slotId:{type:String,required:!0},adFormat:{type:String,required:!0},isResponsive:{type:Boolean,required:!1,default:!1},adStyle:{type:String,required:!0},minWidth:{type:Number,required:!1,default:-1},maxWidth:{type:Number,required:!1,default:-1}},data:function(){return{hideAd:!1,shouldShow:this.shouldShowAd()}},mounted:function(){var t=this;this.createAds(),this.$addEventListener("resize",(function(){t.hideAd=!t.shouldShowAd()}))},watch:{$route:function(){this.firstLoad=!1,this.createAds()}},methods:{createAds:function(){var t=this;this.$nextTick((function(){t.shouldShowAd()&&(window.adsbygoogle=window.adsbygoogle||[],adsbygoogle.push({}))}))},shouldShowAd:function(){return(-1===this.minWidth||window.innerWidth>=this.minWidth)&&(-1===this.maxWidth||window.innerWidth<this.maxWidth)}},beforeDestroy:function(){window.top.__vm_remove=window.top.__vm_remove||[],window.top.__vm_remove.push(this.$refs.adPlacement)}},r=(o(284),o(28)),component=Object(r.a)(n,(function(){var t=this,e=t._self._c;return e("client-only",[t.shouldShow?e("ins",{staticClass:"adsbygoogle",class:{hide:t.hideAd},style:t.adStyle,attrs:{"data-ad-client":"ca-pub-4556406968269041","data-ad-slot":t.slotId,"data-ad-format":t.adFormat,"data-full-width-responsive":t.isResponsive}}):e("div")])}),[],!1,null,"8af1cc2e",null);e.default=component.exports},284:function(t,e,o){"use strict";o(277)},285:function(t,e,o){var n=o(107)(!1);n.push([t.i,".hide[data-v-8af1cc2e]{display:none!important}",""]),t.exports=n},287:function(t,e,o){t.exports=o.p+"fonts/RobotoCondensed-Light.f982e4a.woff2"},290:function(t,e,o){"use strict";o(278)},291:function(t,e,o){var n=o(107)(!1);n.push([t.i,".link{border-radius:19px;aspect-ratio:391/145;display:block;position:relative;z-index:2}.link-img{max-width:100%;cursor:pointer;transition:transform .07s linear,filter .1s ease-out,opacity .15s linear;opacity:0}.link-img:hover{transform:scale(1.02);filter:drop-shadow(3px 3px 5px rgba(0,0,0,.17))}",""]),t.exports=n},292:function(t,e,o){"use strict";o.r(e);var n={props:{title:{required:!0,type:String},path:{required:!0,type:String},preload:{required:!1,type:Boolean,default:!1}},data:function(){return{imageLoaded:!1}}},r=(o(290),o(28)),component=Object(r.a)(n,(function(){var t=this,e=t._self._c;return e("nuxt-link",{staticClass:"link",style:{background:t.imageLoaded?"none":"#f1f2f6"},attrs:{prefetch:t.preload,to:"/".concat(t.path,"/")}},[e("img",{staticClass:"link-img",style:{opacity:t.imageLoaded?1:0},attrs:{onload:t.imageLoaded=!0,alt:t.title,src:"/link-images/".concat(t.path,".svg"),loading:"lazy"}})])}),[],!1,null,null,null);e.default=component.exports},293:function(t,e,o){"use strict";o(279)},294:function(t,e,o){var n=o(107),r=o(200),d=o(287),l=n(!1),c=r(d);l.push([t.i,"@font-face{font-family:RobotoCondensedLight;src:url("+c+")}.footer-wrapper[data-v-2b1aca38]{margin-top:15px;padding:30px 20px 45px;text-align:center;font-size:22px;font-family:RobotoCondensedLight,sans-serif}.related-text[data-v-2b1aca38]{font-size:22px}.site-title[data-v-2b1aca38]{margin-top:18px;max-width:140px}.related-posts[data-v-2b1aca38],.site-title[data-v-2b1aca38]{margin-left:auto;margin-right:auto}.related-posts[data-v-2b1aca38]{display:grid;max-width:870px;grid-template-columns:repeat(2,1fr);grid-gap:16px 18px;margin-top:15px;font-size:0}.made-by[data-v-2b1aca38]{font-size:16px;margin-top:15px;opacity:.6;display:none}.made-by a[data-v-2b1aca38]{color:#000}.heart[data-v-2b1aca38]{width:17px;height:17px;position:relative;top:4px}.site-title-logo[data-v-2b1aca38]{height:25px}.newsletter-text[data-v-2b1aca38]{font-size:19px;margin-bottom:8px}.newsletter-img[data-v-2b1aca38]{height:16px;position:relative;top:3px;margin-right:7px}.newsletter-input[data-v-2b1aca38]{font-size:17px;padding:7px 5px 7px 40px;border-radius:5px;border:1px solid #000;max-width:220px;width:100%;background-color:#fff;background-image:url(/general/mail.svg);background-repeat:no-repeat;background-size:auto 15px;background-position:10px;font-family:RobotoCondensedLight;outline:none;color:#000}.newsletter-input[data-v-2b1aca38]::-moz-placeholder{color:rgba(0,0,0,.8)}.newsletter-input[data-v-2b1aca38]::placeholder{color:rgba(0,0,0,.8)}.newsletter-subscribe[data-v-2b1aca38]{background:#fff5d9;font-size:17px;-webkit-appearance:none;-moz-appearance:none;appearance:none;box-shadow:none;border:1px solid #000;border-radius:5px;padding:7px 12px;margin-left:5px;height:100%;cursor:pointer;color:#000;font-family:RobotoCondensedLight}.newsletter-subscribe[data-v-2b1aca38]:hover{transform:scale(1.03)}.newsletter-box[data-v-2b1aca38]{padding:20px 10px;border-radius:5px;margin-left:auto;margin-right:auto;margin-top:10px}.newsletter-inner[data-v-2b1aca38]{display:flex;justify-content:center;height:42px}@media only screen and (max-width:700px){.footer-wrapper[data-v-2b1aca38]{padding-left:12px;padding-right:12px}.related-posts[data-v-2b1aca38]{grid-template-columns:repeat(1,1fr)}.site-title[data-v-2b1aca38]{max-width:145px;margin-top:25px}}",""]),t.exports=l},295:function(t,e,o){"use strict";o.r(e);var n,r=o(286),d=o(10),l=(o(45),o(15),o(204),o(60),o(297)),c=o.n(l),f=o(289),m={props:{color:{type:String,required:!1,default:"black"},bg:{type:String,required:!1,default:"white"}},data:function(){return{related:[],submittedEmail:!1,email:""}},mounted:function(){this.getRelated()},computed:{isValidEmail:function(){return f.validate(this.email)}},methods:{onEmailSubmit:(n=Object(d.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!this.isValidEmail){t.next=4;break}return this.submittedEmail=!0,t.next=4,c()({url:"https://neal.fun/api/newsletter/subscribe",method:"POST",data:{email:this.email}});case 4:case"end":return t.stop()}}),t,this)}))),function(){return n.apply(this,arguments)}),getRelated:function(){var t=window.innerWidth>500?4:3,e=Object(r.a)(this.$store.state.posts),o=this.$route.path;e=e.filter((function(t){return"/".concat(t.path,"/")!==o&&!t.hidden&&!t.hideInRecommended}));for(var n=[],d=0;d<t;d++){var l=Math.floor(Math.random()*e.length);n.push(e[l]),e.splice(l,1)}this.related=n}}},h=m,v=(o(293),o(28)),component=Object(v.a)(h,(function(){var t=this,e=t._self._c;return e("div",[e("Ad",{attrs:{slotId:"2834998355",adStyle:"display: block; margin-left: auto; margin-right: auto; max-width: min(970px, calc(100% - 60px)); margin-top: 15px;",adFormat:"auto",isResponsive:!0,minWidth:800}}),t._v(" "),e("Ad",{attrs:{slotId:"2834998355",adStyle:"display: block; margin-left: auto; margin-right: auto; margin-top: 15px;",adFormat:"auto",isResponsive:!0,maxWidth:800}}),t._v(" "),e("div",{staticClass:"footer-wrapper",style:{color:t.color,background:t.bg}},[e("div",{staticClass:"related-text"},[t._v("You may also like")]),t._v(" "),e("div",{staticClass:"related-posts"},t._l(t.related,(function(t){return e("page-link",{key:t.title,attrs:{bg:"#f1f2f6",path:t.path,title:t.title,preload:t.preload}})})),1),t._v(" "),e("div",{staticClass:"newsletter-box"},[e("div",{staticClass:"newsletter-text"},[t._v("\n        "+t._s(t.submittedEmail?"Thanks for subscribing :)":"Get new posts!")+"\n      ")]),t._v(" "),t.submittedEmail?t._e():e("form",{staticClass:"newsletter-inner",on:{submit:function(e){return e.preventDefault(),t.onEmailSubmit.apply(null,arguments)}}},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"newsletter-input",attrs:{type:"email",placeholder:"Your email"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}}),t._v(" "),e("button",{staticClass:"newsletter-subscribe"},[t._v("Subscribe")])])]),t._v(" "),e("div",{staticClass:"made-by"},[t._v("\n      Made with\n      "),e("svg",{staticClass:"heart",staticStyle:{"enable-background":"new 0 0 512 512"},attrs:{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink","xmlns:svgjs":"http://svgjs.com/svgjs",version:"1.1",width:"512",height:"512",x:"0",y:"0",viewBox:"0 0 512.001 512","xml:space":"preserve"}},[e("g",[e("path",{attrs:{xmlns:"http://www.w3.org/2000/svg",d:"m256 455.515625c-7.289062 0-14.316406-2.640625-19.792969-7.4375-20.683593-18.085937-40.625-35.082031-58.21875-50.074219l-.089843-.078125c-51.582032-43.957031-96.125-81.917969-127.117188-119.3125-34.644531-41.804687-50.78125-81.441406-50.78125-124.742187 0-42.070313 14.425781-80.882813 40.617188-109.292969 26.503906-28.746094 62.871093-44.578125 102.414062-44.578125 29.554688 0 56.621094 9.34375 80.445312 27.769531 12.023438 9.300781 22.921876 20.683594 32.523438 33.960938 9.605469-13.277344 20.5-24.660157 32.527344-33.960938 23.824218-18.425781 50.890625-27.769531 80.445312-27.769531 39.539063 0 75.910156 15.832031 102.414063 44.578125 26.191406 28.410156 40.613281 67.222656 40.613281 109.292969 0 43.300781-16.132812 82.9375-50.777344 124.738281-30.992187 37.398437-75.53125 75.355469-127.105468 119.308594-17.625 15.015625-37.597657 32.039062-58.328126 50.167969-5.472656 4.789062-12.503906 7.429687-19.789062 7.429687zm-112.96875-425.523437c-31.066406 0-59.605469 12.398437-80.367188 34.914062-21.070312 22.855469-32.675781 54.449219-32.675781 88.964844 0 36.417968 13.535157 68.988281 43.882813 105.605468 29.332031 35.394532 72.960937 72.574219 123.476562 115.625l.09375.078126c17.660156 15.050781 37.679688 32.113281 58.515625 50.332031 20.960938-18.253907 41.011719-35.34375 58.707031-50.417969 50.511719-43.050781 94.136719-80.222656 123.46875-115.617188 30.34375-36.617187 43.878907-69.1875 43.878907-105.605468 0-34.515625-11.605469-66.109375-32.675781-88.964844-20.757813-22.515625-49.300782-34.914062-80.363282-34.914062-22.757812 0-43.652344 7.234374-62.101562 21.5-16.441406 12.71875-27.894532 28.796874-34.609375 40.046874-3.453125 5.785157-9.53125 9.238282-16.261719 9.238282s-12.808594-3.453125-16.261719-9.238282c-6.710937-11.25-18.164062-27.328124-34.609375-40.046874-18.449218-14.265626-39.34375-21.5-62.097656-21.5zm0 0",fill:t.color,"data-original":"#000000"}})])]),t._v("\n      by Neal Agarwal\n    ")]),t._v(" "),e("div",{staticClass:"site-title"},[e("nuxt-link",{attrs:{to:"/"}},[e("logo",{attrs:{color:t.color}})],1)],1)])],1)}),[],!1,null,"2b1aca38",null);e.default=component.exports;installComponents(component,{Ad:o(280).default,PageLink:o(292).default,Logo:o(288).default})},693:function(t,e,o){var content=o(1074);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(108).default)("0893e070",content,!0,{sourceMap:!1})},694:function(t,e,o){var content=o(1076);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(108).default)("11f00f50",content,!0,{sourceMap:!1})},695:function(t,e,o){var content=o(1079);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(108).default)("755e2d9a",content,!0,{sourceMap:!1})}}]);