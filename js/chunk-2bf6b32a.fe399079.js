(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2bf6b32a"],{"0fd9":function(t,e,n){"use strict";var i=n("ade3"),r=n("5530"),o=(n("caad"),n("2532"),n("99af"),n("b64b"),n("ac1f"),n("5319"),n("4ec9"),n("d3b7"),n("3ca3"),n("ddb0"),n("159b"),n("4b85"),n("2b0e")),a=n("d9f7"),s=n("80d2"),l=["sm","md","lg","xl"],u=["start","end","center"];function c(t,e){return l.reduce((function(n,i){return n[t+Object(s["n"])(i)]=e(),n}),{})}var f=function(t){return[].concat(u,["baseline","stretch"]).includes(t)},d=c("align",(function(){return{type:String,default:null,validator:f}})),v=function(t){return[].concat(u,["space-between","space-around"]).includes(t)},b=c("justify",(function(){return{type:String,default:null,validator:v}})),p=function(t){return[].concat(u,["space-between","space-around","stretch"]).includes(t)},g=c("alignContent",(function(){return{type:String,default:null,validator:p}})),h={align:Object.keys(d),justify:Object.keys(b),alignContent:Object.keys(g)},y={align:"align",justify:"justify",alignContent:"align-content"};function m(t,e,n){var i=y[t];if(null!=n){if(e){var r=e.replace(t,"");i+="-".concat(r)}return i+="-".concat(n),i.toLowerCase()}}var w=new Map;e["a"]=o["a"].extend({name:"v-row",functional:!0,props:Object(r["a"])(Object(r["a"])(Object(r["a"])({tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:f}},d),{},{justify:{type:String,default:null,validator:v}},b),{},{alignContent:{type:String,default:null,validator:p}},g),render:function(t,e){var n=e.props,r=e.data,o=e.children,s="";for(var l in n)s+=String(n[l]);var u=w.get(s);return u||function(){var t,e;for(e in u=[],h)h[e].forEach((function(t){var i=n[t],r=m(e,t,i);r&&u.push(r)}));u.push((t={"no-gutters":n.noGutters,"row--dense":n.dense},Object(i["a"])(t,"align-".concat(n.align),n.align),Object(i["a"])(t,"justify-".concat(n.justify),n.justify),Object(i["a"])(t,"align-content-".concat(n.alignContent),n.alignContent),t)),w.set(s,u)}(),t(n.tag,Object(a["a"])(r,{staticClass:"row",class:u}),o)}})},"3faa":function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("nav-bar",{attrs:{"bg-colour":t.black,"is-mobile-screen":t.isMobileScreen}}),n("content-body",{attrs:{"bg-colour":t.black,rounded:"0"},scopedSlots:t._u([{key:"title",fn:function(){return[n("horizontal-padding",{attrs:{height:t.horizontalPaddingHeight}}),n("hero-title",{attrs:{"is-mobile-screen":t.isMobileScreen}})]},proxy:!0},{key:"subtitle",fn:function(){return[n("h1",{staticClass:"hero-subtitle custom-white text-center mb-12"},[t._v("I'm Jan Owyeong!")])]},proxy:!0},{key:"scroll-icon",fn:function(){return[n("v-row",{staticClass:"pb-12 mb-5 pt-5",attrs:{justify:"center"}},[t.isMobileDevice?n("scroll-icon-small",{directives:[{name:"observe-visibility",rawName:"v-observe-visibility",value:t.trackViewportVisibilityConfig,expression:"trackViewportVisibilityConfig"}],attrs:{"txt-colour":t.white,"arrow-id":t.toggleUseArrowAnimation,"scroll-id":t.toggleUseEllipseSmallAnimation}}):n("scroll-icon",{directives:[{name:"observe-visibility",rawName:"v-observe-visibility",value:t.trackViewportVisibilityConfig,expression:"trackViewportVisibilityConfig"}],attrs:{"txt-colour":t.white,"arrow-id":t.toggleUseArrowAnimation,"scroll-id":t.toggleUseEllipseAnimation}})],1)]},proxy:!0}])})],1)},r=[],o=(n("d3b7"),n("3ca3"),n("ddb0"),n("65a7")),a=n("bbed"),s={name:"Hero",components:{ScrollIcon:function(){return n.e("chunk-2d0c8a11").then(n.bind(null,"5660"))},ScrollIconSmall:function(){return n.e("chunk-2d0b995b").then(n.bind(null,"3426"))},ContentBody:function(){return n.e("chunk-2c6504ca").then(n.bind(null,"dec3"))},NavBar:function(){return n.e("chunk-7845fb42").then(n.bind(null,"35fb"))},HeroTitle:function(){return n.e("chunk-2c659d74").then(n.bind(null,"e38f"))}},mixins:[o["b"],a["b"],a["a"]],computed:{horizontalPaddingHeight:function(){return this.isMobileScreen?"1rem":"10rem"},toggleUseEllipseAnimation:function(){return this.toggleAnimationInView("ellipse-wheel")},toggleUseEllipseSmallAnimation:function(){return this.toggleAnimationInView("ellipse-wheel-small")},toggleUseArrowAnimation:function(){return this.toggleAnimationInView("scroll-down-arrow")}}},l=s,u=n("2877"),c=n("6544"),f=n.n(c),d=n("0fd9"),v=Object(u["a"])(l,i,r,!1,null,"3ac50752",null);e["default"]=v.exports;f()(v,{VRow:d["a"]})},"4ec9":function(t,e,n){"use strict";var i=n("6d61"),r=n("6566");t.exports=i("Map",(function(t){return function(){return t(this,arguments.length?arguments[0]:void 0)}}),r)},6566:function(t,e,n){"use strict";var i=n("9bf2").f,r=n("7c73"),o=n("e2cc"),a=n("0366"),s=n("19aa"),l=n("2266"),u=n("7dd0"),c=n("2626"),f=n("83ab"),d=n("f183").fastKey,v=n("69f3"),b=v.set,p=v.getterFor;t.exports={getConstructor:function(t,e,n,u){var c=t((function(t,i){s(t,c,e),b(t,{type:e,index:r(null),first:void 0,last:void 0,size:0}),f||(t.size=0),void 0!=i&&l(i,t[u],{that:t,AS_ENTRIES:n})})),v=p(e),g=function(t,e,n){var i,r,o=v(t),a=h(t,e);return a?a.value=n:(o.last=a={index:r=d(e,!0),key:e,value:n,previous:i=o.last,next:void 0,removed:!1},o.first||(o.first=a),i&&(i.next=a),f?o.size++:t.size++,"F"!==r&&(o.index[r]=a)),t},h=function(t,e){var n,i=v(t),r=d(e);if("F"!==r)return i.index[r];for(n=i.first;n;n=n.next)if(n.key==e)return n};return o(c.prototype,{clear:function(){var t=this,e=v(t),n=e.index,i=e.first;while(i)i.removed=!0,i.previous&&(i.previous=i.previous.next=void 0),delete n[i.index],i=i.next;e.first=e.last=void 0,f?e.size=0:t.size=0},delete:function(t){var e=this,n=v(e),i=h(e,t);if(i){var r=i.next,o=i.previous;delete n.index[i.index],i.removed=!0,o&&(o.next=r),r&&(r.previous=o),n.first==i&&(n.first=r),n.last==i&&(n.last=o),f?n.size--:e.size--}return!!i},forEach:function(t){var e,n=v(this),i=a(t,arguments.length>1?arguments[1]:void 0,3);while(e=e?e.next:n.first){i(e.value,e.key,this);while(e&&e.removed)e=e.previous}},has:function(t){return!!h(this,t)}}),o(c.prototype,n?{get:function(t){var e=h(this,t);return e&&e.value},set:function(t,e){return g(this,0===t?0:t,e)}}:{add:function(t){return g(this,t=0===t?0:t,t)}}),f&&i(c.prototype,"size",{get:function(){return v(this).size}}),c},setStrong:function(t,e,n){var i=e+" Iterator",r=p(e),o=p(i);u(t,e,(function(t,e){b(this,{type:i,target:t,state:r(t),kind:e,last:void 0})}),(function(){var t=o(this),e=t.kind,n=t.last;while(n&&n.removed)n=n.previous;return t.target&&(t.last=n=n?n.next:t.state.first)?"keys"==e?{value:n.key,done:!1}:"values"==e?{value:n.value,done:!1}:{value:[n.key,n.value],done:!1}:(t.target=void 0,{value:void 0,done:!0})}),n?"entries":"values",!n,!0),c(e)}}},"6d61":function(t,e,n){"use strict";var i=n("23e7"),r=n("da84"),o=n("94ca"),a=n("6eeb"),s=n("f183"),l=n("2266"),u=n("19aa"),c=n("861d"),f=n("d039"),d=n("1c7e"),v=n("d44e"),b=n("7156");t.exports=function(t,e,n){var p=-1!==t.indexOf("Map"),g=-1!==t.indexOf("Weak"),h=p?"set":"add",y=r[t],m=y&&y.prototype,w=y,k={},x=function(t){var e=m[t];a(m,t,"add"==t?function(t){return e.call(this,0===t?0:t),this}:"delete"==t?function(t){return!(g&&!c(t))&&e.call(this,0===t?0:t)}:"get"==t?function(t){return g&&!c(t)?void 0:e.call(this,0===t?0:t)}:"has"==t?function(t){return!(g&&!c(t))&&e.call(this,0===t?0:t)}:function(t,n){return e.call(this,0===t?0:t,n),this})},S=o(t,"function"!=typeof y||!(g||m.forEach&&!f((function(){(new y).entries().next()}))));if(S)w=n.getConstructor(e,t,p,h),s.REQUIRED=!0;else if(o(t,!0)){var V=new w,j=V[h](g?{}:-0,1)!=V,O=f((function(){V.has(1)})),A=d((function(t){new y(t)})),C=!g&&f((function(){var t=new y,e=5;while(e--)t[h](e,e);return!t.has(-0)}));A||(w=e((function(e,n){u(e,w,t);var i=b(new y,e,w);return void 0!=n&&l(n,i[h],{that:i,AS_ENTRIES:p}),i})),w.prototype=m,m.constructor=w),(O||C)&&(x("delete"),x("has"),p&&x("get")),(C||j)&&x(h),g&&m.clear&&delete m.clear}return k[t]=w,i({global:!0,forced:w!=y},k),v(w,t),g||n.setStrong(w,t,p),w}},bbed:function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"a",(function(){return r})),n.d(e,"c",(function(){return o}));var i={computed:{isMobileDevice:function(){return this.$vuetify.breakpoint.mobile},isMobileScreen:function(){return this.$vuetify.breakpoint.xsOnly},isTabletScreen:function(){return this.$vuetify.breakpoint.smOnly},isMediumDeviceScreen:function(){return this.$vuetify.breakpoint.mdOnly},isLargeDeviceScreen:function(){return this.$vuetify.breakpoint.lgOnly},isTabletAndMobileScreen:function(){return this.$vuetify.breakpoint.smAndDown}}},r={data:function(){return{elementIsVisible:!0}},computed:{trackViewportVisibilityConfig:function(){return{callback:this.setElementVisibilityInViewport,throttle:1e3}}},methods:{setElementVisibilityInViewport:function(t){this.elementIsVisible=t},toggleAnimationInView:function(t){return this.elementIsVisible?t:""}}},o={props:{arrowId:{type:String},scrollId:{type:String}}}}}]);