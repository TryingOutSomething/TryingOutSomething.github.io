(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{280:function(e,t,n){"use strict";n.r(t);n(45);var r={name:"NavBar",data:function(){return{showMenuMobile:!1,navItems:["about","projects","resume"]}},methods:{toggleMenuItemsVisibility:function(){this.showMenuMobile=!this.showMenuMobile},generateLocalHref:function(e){return"#".concat(e)},generateName:function(e){return e[0].toUpperCase()+e.slice(1).toLowerCase()}}},o=n(9),component=Object(o.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("nav",[n("div",{staticClass:"mx-auto max-w-7xl px-2 sm:px-6 lg:px-8"},[n("div",{staticClass:"relative flex h-16 items-center justify-between"},[n("div",{staticClass:"absolute inset-y-0 left-0 flex items-center sm:hidden"},[n("button",{staticClass:"inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700\n            hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white",attrs:{"aria-controls":"mobile-menu","aria-expanded":"false",type:"button"},on:{click:e.toggleMenuItemsVisibility}},[e.showMenuMobile?n("svg",{staticClass:"h-6 w-6",attrs:{"aria-hidden":"true",fill:"none",stroke:"currentColor","stroke-width":"2",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{d:"M6 18L18 6M6 6l12 12","stroke-linecap":"round","stroke-linejoin":"round"}})]):n("svg",{staticClass:"h-6 w-6",attrs:{"aria-hidden":"true",fill:"none",stroke:"currentColor","stroke-width":"2",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{d:"M4 6h16M4 12h16M4 18h16","stroke-linecap":"round","stroke-linejoin":"round"}})])])]),e._v(" "),n("div",{staticClass:"flex flex-1 items-center justify-center sm:items-stretch sm:justify-end"},[n("div",{staticClass:"hidden sm:ml-6 sm:block"},[n("div",{staticClass:"flex space-x-4"},e._l(e.navItems,(function(t,i){return n("a",{key:i,staticClass:"rounded-md px-3 py-2 text-sm font-medium text-p-white hover:bg-gray-700",attrs:{href:e.generateLocalHref(t)}},[e._v("\n              "+e._s(e.generateName(t))+"\n            ")])})),0)])])])]),e._v(" "),e.showMenuMobile?n("div",{staticClass:"flex justify-center sm:hidden",attrs:{id:"mobile-menu"}},[n("div",{staticClass:"space-y-1 px-2 pt-2 pb-3 text-center"},e._l(e.navItems,(function(t,i){return n("a",{key:i,staticClass:"block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-white",attrs:{href:e.generateLocalHref(t)}},[e._v("\n        "+e._s(e.generateName(t))+"\n      ")])})),0)]):e._e()])}),[],!1,null,null,null);t.default=component.exports}}]);