(window.webpackJsonp=window.webpackJsonp||[]).push([[6,3],{271:function(t,e,l){"use strict";l.r(e);var n={name:"ClickableIcon",props:{link:{type:String,default:null},ariaLabel:{type:String,default:null}}},c=l(9),component=Object(c.a)(n,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("a",{attrs:{"aria-label":t.ariaLabel,href:t.link,rel:"noopener noreferrer",target:"_blank"}},[t._t("default")],2)}),[],!1,null,"af91d4b6",null);e.default=component.exports},276:function(t,e,l){"use strict";l.r(e);l(28);var n={name:"MobileFooter",props:{snsLinks:{type:Object,required:!0},toolsIconSize:{type:Number,default:24},credits:{type:String,default:""},location:{type:String,default:""}}},c=l(9),component=Object(c.a)(n,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"text-p-white"},[l("client-only",[l("div",{staticClass:"sm:flex sm:flex-row sm:items-center sm:justify-center sm:space-x-3"},[l("p",{staticClass:"text-lg"},[t._v("Connect with me:")]),t._v(" "),l("div",{staticClass:"flex flex-row space-x-3 justify-center my-5"},[l("clickable-icon",{attrs:{"aria-label":t.snsLinks.email.ariaLabel,link:t.snsLinks.email.url}},[l("email-icon")],1),t._v(" "),l("clickable-icon",{attrs:{"aria-label":t.snsLinks.github.ariaLabel,link:t.snsLinks.github.url}},[l("github-icon")],1),t._v(" "),l("clickable-icon",{attrs:{"aria-label":t.snsLinks.linkedIn.ariaLabel,link:t.snsLinks.linkedIn.url}},[l("linkedin-icon")],1)],1)])]),t._v(" "),l("div",{staticClass:"sm:hidden"},[l("div",{staticClass:"text-center text-sm mb-1"},[t._v(t._s(t.credits))]),t._v(" "),l("div",{staticClass:"text-center text-sm"},[t._v(t._s(t.location))])]),t._v(" "),l("div",{staticClass:"text-center text-sm hidden sm:block"},[t._v(t._s(t.credits)+" | "+t._s(t.location))]),t._v(" "),l("client-only",[l("div",{staticClass:"mt-5 sm:mt-3 text-xs flex flex-row items-center justify-center space-x-2"},[l("p",{staticClass:"capitalize"},[t._v("created with:")]),t._v(" "),l("nuxt-icon",{attrs:{size:t.toolsIconSize}}),t._v(" "),l("tailwind-icon",{attrs:{size:t.toolsIconSize}})],1)])],1)}),[],!1,null,"2b5011ed",null);e.default=component.exports;installComponents(component,{ClickableIcon:l(271).default})}}]);