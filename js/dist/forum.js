(()=>{var o={n:t=>{var n=t&&t.__esModule?()=>t.default:()=>t;return o.d(n,{a:n}),n},d:(t,n)=>{for(var e in n)o.o(n,e)&&!o.o(t,e)&&Object.defineProperty(t,e,{enumerable:!0,get:n[e]})},o:(o,t)=>Object.prototype.hasOwnProperty.call(o,t),r:o=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(o,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(o,"__esModule",{value:!0})}},t={};(()=>{"use strict";o.r(t);const n=flarum.core.compat["forum/app"];var e=o.n(n);const r=flarum.core.compat["forum/extend"],c=flarum.core.compat["forum/ForumApplication"];var a=o.n(c);function l(o,t){return l=Object.setPrototypeOf||function(o,t){return o.__proto__=t,o},l(o,t)}const i=flarum.core.compat["common/Component"];var s=o.n(i);const u=flarum.core.compat["common/components/Button"];var p=o.n(u);const d=flarum.core.compat["utils/classList"];var f=o.n(d),b=function(o){var t,n;function e(){return o.apply(this,arguments)||this}n=o,(t=e).prototype=Object.create(n.prototype),t.prototype.constructor=t,l(t,n);var r=e.prototype;return r.oninit=function(t){var n=this;o.prototype.oninit.call(this,t),window.onscroll=function(){n.scroll()}},r.view=function(){var o=this,t=f()("Button","Button--icon","ScrollButtons-button"),n=app.forum.attribute("scrollToTopButton")?p().component({className:t,icon:"fas fa-angle-double-up",onclick:function(){o.scrollToTop()}}):"",e=app.forum.attribute("scrollToBottomButton")?p().component({className:t,icon:"fas fa-angle-double-down",onclick:function(){o.scrollToBottom()}}):"";return m("[",null,n,e)},r.scroll=function(){var o=window.pageYOffset||document.documentElement.scrollTop,t=document.body.scrollHeight-window.innerHeight,n=document.getElementsByClassName("ScrollButtons")[0];o>0&&o<t?n.classList.add("is-visible"):n.classList.remove("is-visible")},r.scrollToTop=function(){"discussion.near"===app.current.get("routeName")?app.current.data.stream.goToFirst():window.scrollTo(0,0)},r.scrollToBottom=function(){"discussion.near"===app.current.get("routeName")?app.current.data.stream.goToLast():window.scrollTo(0,document.body.scrollHeight)},e}(s());e().initializers.add("datlechin/flarum-scroll-buttons",(function(){(0,r.extend)(a().prototype,"mount",(function(){var o=document.createElement("div");o.classList.add("ScrollButtons"),(e().initializers.has("acpl/mobile-tab")||e().initializers.has("itnt-uitab"))&&o.classList.add("has-MobileTab"),m.mount(document.querySelector(".App-content").appendChild(o),b)}))}))})(),module.exports=t})();
//# sourceMappingURL=forum.js.map