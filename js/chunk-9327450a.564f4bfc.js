(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-9327450a"],{"3a66":function(t,e,i){"use strict";i.d(e,"a",(function(){return n}));var o=i("fe6c"),a=i("58df");function n(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return Object(a["a"])(Object(o["b"])(["absolute","fixed"])).extend({name:"applicationable",props:{app:Boolean},computed:{applicationProperty:function(){return t}},watch:{app:function(t,e){e?this.removeApplication(!0):this.callUpdate()},applicationProperty:function(t,e){this.$vuetify.application.unregister(this._uid,e)}},activated:function(){this.callUpdate()},created:function(){for(var t=0,i=e.length;t<i;t++)this.$watch(e[t],this.callUpdate);this.callUpdate()},mounted:function(){this.callUpdate()},deactivated:function(){this.removeApplication()},destroyed:function(){this.removeApplication()},methods:{callUpdate:function(){this.app&&this.$vuetify.application.register(this._uid,this.applicationProperty,this.updateApplication())},removeApplication:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];(t||this.app)&&this.$vuetify.application.unregister(this._uid,this.applicationProperty)},updateApplication:function(){return 0}}})}},"553a":function(t,e,i){"use strict";var o=i("5530"),a=(i("a9e3"),i("c7cd"),i("b5b6"),i("8dd9")),n=i("3a66"),s=i("d10f"),r=i("58df"),c=i("80d2");e["a"]=Object(r["a"])(a["a"],Object(n["a"])("footer",["height","inset"]),s["a"]).extend({name:"v-footer",props:{height:{default:"auto",type:[Number,String]},inset:Boolean,padless:Boolean,tag:{type:String,default:"footer"}},computed:{applicationProperty:function(){return this.inset?"insetFooter":"footer"},classes:function(){return Object(o["a"])(Object(o["a"])({},a["a"].options.computed.classes.call(this)),{},{"v-footer--absolute":this.absolute,"v-footer--fixed":!this.absolute&&(this.app||this.fixed),"v-footer--padless":this.padless,"v-footer--inset":this.inset})},computedBottom:function(){if(this.isPositioned)return this.app?this.$vuetify.application.bottom:0},computedLeft:function(){if(this.isPositioned)return this.app&&this.inset?this.$vuetify.application.left:0},computedRight:function(){if(this.isPositioned)return this.app&&this.inset?this.$vuetify.application.right:0},isPositioned:function(){return Boolean(this.absolute||this.fixed||this.app)},styles:function(){var t=parseInt(this.height);return Object(o["a"])(Object(o["a"])({},a["a"].options.computed.styles.call(this)),{},{height:isNaN(t)?t:Object(c["d"])(t),left:Object(c["d"])(this.computedLeft),right:Object(c["d"])(this.computedRight),bottom:Object(c["d"])(this.computedBottom)})}},methods:{updateApplication:function(){var t=parseInt(this.height);return isNaN(t)?this.$el?this.$el.clientHeight:0:t}},render:function(t){var e=this.setBackgroundColor(this.color,{staticClass:"v-footer",class:this.classes,style:this.styles});return t(this.tag,e,this.$slots.default)}})},b5b6:function(t,e,i){},d10f:function(t,e,i){"use strict";var o=i("2b0e");e["a"]=o["a"].extend({name:"ssr-bootable",data:function(){return{isBooted:!1}},mounted:function(){var t=this;window.requestAnimationFrame((function(){t.$el.setAttribute("data-booted","true"),t.isBooted=!0}))}})},e117:function(t,e,i){"use strict";i.r(e);var o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-footer",{attrs:{color:t.bgColour,absolute:""}},[i("v-row",{attrs:{align:"center"}},[i("v-col",{staticClass:"pr-0 mr-lg-2 mr-xl-1 mr-md-3 mr-sm-3 mr-2",attrs:{cols:"1"}},[i("language-icon",{attrs:{colour:t.languageColour}})],1),i("span",{staticClass:"card-footer"},[t._v(t._s(t.language))])],1)],1)},a=[],n=(i("d3b7"),i("3ca3"),i("ddb0"),i("65a7")),s={name:"language-info",components:{LanguageIcon:function(){return i.e("chunk-2d0b72ca").then(i.bind(null,"1ffe"))}},mixins:[n["a"]],props:{language:{type:String,required:!0},languageColour:{type:String}}},r=s,c=i("2877"),u=i("6544"),p=i.n(u),l=i("62ad"),d=i("553a"),h=i("0fd9"),f=Object(c["a"])(r,o,a,!1,null,null,null);e["default"]=f.exports;p()(f,{VCol:l["a"],VFooter:d["a"],VRow:h["a"]})}}]);