(window.webpackJsonp=window.webpackJsonp||[]).push([[17,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16],{271:function(e,t,n){"use strict";n.r(t);var l={name:"ClickableIcon",props:{link:{type:String,default:null},ariaLabel:{type:String,default:null}}},o=n(9),component=Object(o.a)(l,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("a",{attrs:{"aria-label":e.ariaLabel,href:e.link,rel:"noopener noreferrer",target:"_blank"}},[e._t("default")],2)}),[],!1,null,"af91d4b6",null);t.default=component.exports},272:function(e,t,n){e.exports=n.p+"img/Jan_Owyeong_Guo_Yong_Resume_preview.cf00ef4.PNG"},273:function(e,t,n){"use strict";n.r(t);var l={name:"ScrollIcon",props:{ellipseComponentId:{type:String,required:!0},arrowComponentId:{type:String,required:!0}}},o=n(9),component=Object(o.a)(l,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"svgContainer"}},[n("svg",{attrs:{fill:"none",height:"153",viewBox:"0 0 50 153",width:"50",xmlns:"http://www.w3.org/2000/svg"}},[n("g",{attrs:{id:"scrollIcon"}},[n("rect",{attrs:{id:"curved-body",height:"75",rx:"22.5",stroke:"#F9F9F9","stroke-width":"5",width:"45",x:"2.5",y:"2.5"}}),e._v(" "),n("path",{attrs:{id:e.arrowComponentId,d:"M23.2322 151.768C24.2085 152.744 25.7915 152.744 26.7678 151.768L42.6777 135.858C43.654 134.882 43.654 133.299 42.6777 132.322C41.7014 131.346 40.1184 131.346 39.1421 132.322L25 146.464L10.8579 132.322C9.88155 131.346 8.29864 131.346 7.32233 132.322C6.34602 133.299 6.34602 134.882 7.32233 135.858L23.2322 151.768ZM22.5 149V150H27.5V149H22.5Z",fill:"white"}}),e._v(" "),n("circle",{attrs:{id:e.ellipseComponentId,cx:"25",cy:"26",fill:"white",r:"15"}})])])])}),[],!1,null,"707869d8",null);t.default=component.exports},274:function(e,t,n){"use strict";n.r(t);var l={name:"ScrollIconSmall",props:{ellipseComponentId:{type:String,required:!0},arrowComponentId:{type:String,required:!0}}},o=n(9),component=Object(o.a)(l,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"svgContainerSmall"}},[n("svg",{attrs:{fill:"none",height:"93",viewBox:"0 0 30 93",width:"30",xmlns:"http://www.w3.org/2000/svg"}},[n("g",{attrs:{id:"scrollIconSmall"}},[n("path",{attrs:{id:e.arrowComponentId,d:"M13.9393 92.0607C14.5251 92.6464 15.4749 92.6464 16.0607 92.0607L25.6066 82.5147C26.1924 81.9289 26.1924 80.9792 25.6066 80.3934C25.0208 79.8076 24.0711 79.8076 23.4853 80.3934L15 88.8787L6.51472 80.3934C5.92893 79.8076 4.97918 79.8076 4.3934 80.3934C3.80761 80.9792 3.80761 81.9289 4.3934 82.5147L13.9393 92.0607ZM13.5 90V91H16.5V90H13.5Z",fill:"white"}}),e._v(" "),n("rect",{attrs:{id:"curved-body",height:"47",rx:"3.5",stroke:"#F9F9F9","stroke-width":"3",width:"27",x:"1.5",y:"1.5"}}),e._v(" "),n("circle",{attrs:{id:e.ellipseComponentId,cx:"15",cy:"34",fill:"white",r:"9"}})])])])}),[],!1,null,"28398599",null);t.default=component.exports},275:function(e,t,n){"use strict";n.r(t);n(28);var l={name:"LanguageIcon",props:{width:{type:Number,default:12},height:{type:Number,default:12},fillColour:{type:String,default:"#C4C4C4"}}},o=n(9),component=Object(o.a)(l,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("svg",{attrs:{height:e.height,width:e.width,fill:"none",viewBox:"0 0 17 17",xmlns:"http://www.w3.org/2000/svg"}},[n("circle",{attrs:{id:"language-logo",fill:e.fillColour,cx:"8.5",cy:"8.50195",r:"8.5"}})])}),[],!1,null,"ae0ddcfe",null);t.default=component.exports},276:function(e,t,n){"use strict";n.r(t);n(28);var l={name:"MobileFooter",props:{snsLinks:{type:Object,required:!0},toolsIconSize:{type:Number,default:24},credits:{type:String,default:""},location:{type:String,default:""}}},o=n(9),component=Object(o.a)(l,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"text-p-white"},[n("client-only",[n("div",{staticClass:"sm:flex sm:flex-row sm:items-center sm:justify-center sm:space-x-3"},[n("p",{staticClass:"text-lg"},[e._v("Connect with me:")]),e._v(" "),n("div",{staticClass:"flex flex-row space-x-3 justify-center my-5"},[n("clickable-icon",{attrs:{"aria-label":e.snsLinks.email.ariaLabel,link:e.snsLinks.email.url}},[n("email-icon")],1),e._v(" "),n("clickable-icon",{attrs:{"aria-label":e.snsLinks.github.ariaLabel,link:e.snsLinks.github.url}},[n("github-icon")],1),e._v(" "),n("clickable-icon",{attrs:{"aria-label":e.snsLinks.linkedIn.ariaLabel,link:e.snsLinks.linkedIn.url}},[n("linkedin-icon")],1)],1)])]),e._v(" "),n("div",{staticClass:"sm:hidden"},[n("div",{staticClass:"text-center text-sm mb-1"},[e._v(e._s(e.credits))]),e._v(" "),n("div",{staticClass:"text-center text-sm"},[e._v(e._s(e.location))])]),e._v(" "),n("div",{staticClass:"text-center text-sm hidden sm:block"},[e._v(e._s(e.credits)+" | "+e._s(e.location))]),e._v(" "),n("client-only",[n("div",{staticClass:"mt-5 sm:mt-3 text-xs flex flex-row items-center justify-center space-x-2"},[n("p",{staticClass:"capitalize"},[e._v("created with:")]),e._v(" "),n("nuxt-icon",{attrs:{size:e.toolsIconSize}}),e._v(" "),n("tailwind-icon",{attrs:{size:e.toolsIconSize}})],1)])],1)}),[],!1,null,"2b5011ed",null);t.default=component.exports;installComponents(component,{ClickableIcon:n(271).default})},277:function(e,t,n){"use strict";n.r(t);var l={name:"DesktopFooter",props:{snsLinks:{type:Object,required:!0},credits:{type:String,default:""},location:{type:String,default:""}}},o=n(9),component=Object(o.a)(l,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"text-p-white text-xs"},[n("client-only",[n("div",{staticClass:"flex flex-row space-x-2.5 items-center justify-center"},[n("div",{staticClass:"capitalize font-light"},[e._v("created with:")]),e._v(" "),n("nuxt-icon",{attrs:{title:"Nuxt"}}),e._v(" "),n("tailwind-icon",{attrs:{title:"TailWind"}})],1)]),e._v(" "),n("div",[e._v(e._s(e.credits)+" | "+e._s(e.location))]),e._v(" "),n("client-only",[n("div",{staticClass:"flex flex-row space-x-2.5 items-center justify-center"},[n("div",[e._v("Connect with me:")]),e._v(" "),n("clickable-icon",{attrs:{"aria-label":e.snsLinks.email.ariaLabel,link:e.snsLinks.email.url}},[n("email-icon")],1),e._v(" "),n("clickable-icon",{attrs:{"aria-label":e.snsLinks.github.ariaLabel,link:e.snsLinks.github.url}},[n("github-icon")],1),e._v(" "),n("clickable-icon",{attrs:{"aria-label":e.snsLinks.linkedIn.ariaLabel,link:e.snsLinks.linkedIn.url}},[n("linkedin-icon")],1)],1)])],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{ClickableIcon:n(271).default})},278:function(e,t,n){var content=n(295);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(47).default)("5cee6e95",content,!0,{sourceMap:!1})},279:function(e,t,n){"use strict";n.r(t);var l=n(273),o=n(274),r={name:"ScrollDown",components:{ScrollIcon:l.default,ScrollIconSmall:o.default},props:{ellipseComponentId:{type:String,required:!0},arrowComponentId:{type:String,required:!0}}},c=n(9),component=Object(c.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("scroll-icon",{staticClass:"hidden md:w-8 lg:w-auto md:flex md:justify-center",attrs:{"arrow-component-id":e.arrowComponentId,"ellipse-component-id":e.ellipseComponentId}}),e._v(" "),n("scroll-icon-small",{staticClass:"block md:hidden",attrs:{"arrow-component-id":e.arrowComponentId+"Small","ellipse-component-id":e.ellipseComponentId+"Small"}})],1)}),[],!1,null,"fa487512",null);t.default=component.exports},280:function(e,t,n){"use strict";n.r(t);n(45);var l={name:"NavBar",data:function(){return{showMenuMobile:!1,navItems:["about","projects","resume"]}},methods:{toggleMenuItemsVisibility:function(){this.showMenuMobile=!this.showMenuMobile},generateLocalHref:function(e){return"#".concat(e)},generateName:function(e){return e[0].toUpperCase()+e.slice(1).toLowerCase()}}},o=n(9),component=Object(o.a)(l,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("nav",[n("div",{staticClass:"mx-auto max-w-7xl px-2 sm:px-6 lg:px-8"},[n("div",{staticClass:"relative flex h-16 items-center justify-between"},[n("div",{staticClass:"absolute inset-y-0 left-0 flex items-center sm:hidden"},[n("button",{staticClass:"inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700\n            hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white",attrs:{"aria-controls":"mobile-menu","aria-expanded":"false",type:"button"},on:{click:e.toggleMenuItemsVisibility}},[e.showMenuMobile?n("svg",{staticClass:"h-6 w-6",attrs:{"aria-hidden":"true",fill:"none",stroke:"currentColor","stroke-width":"2",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{d:"M6 18L18 6M6 6l12 12","stroke-linecap":"round","stroke-linejoin":"round"}})]):n("svg",{staticClass:"h-6 w-6",attrs:{"aria-hidden":"true",fill:"none",stroke:"currentColor","stroke-width":"2",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{d:"M4 6h16M4 12h16M4 18h16","stroke-linecap":"round","stroke-linejoin":"round"}})])])]),e._v(" "),n("div",{staticClass:"flex flex-1 items-center justify-center sm:items-stretch sm:justify-end"},[n("div",{staticClass:"hidden sm:ml-6 sm:block"},[n("div",{staticClass:"flex space-x-4"},e._l(e.navItems,(function(t,i){return n("a",{key:i,staticClass:"rounded-md px-3 py-2 text-sm font-medium text-p-white hover:bg-gray-700",attrs:{href:e.generateLocalHref(t)}},[e._v("\n              "+e._s(e.generateName(t))+"\n            ")])})),0)])])])]),e._v(" "),e.showMenuMobile?n("div",{staticClass:"flex justify-center sm:hidden",attrs:{id:"mobile-menu"}},[n("div",{staticClass:"space-y-1 px-2 pt-2 pb-3 text-center"},e._l(e.navItems,(function(t,i){return n("a",{key:i,staticClass:"block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-white",attrs:{href:e.generateLocalHref(t)}},[e._v("\n        "+e._s(e.generateName(t))+"\n      ")])})),0)]):e._e()])}),[],!1,null,null,null);t.default=component.exports},281:function(e,t,n){"use strict";n.r(t);n(37),n(61);var l={name:"ProjectCard",components:{LanguageIcon:n(275).default},props:{projectInfo:{type:Object,required:!0}},data:function(){return{iconSize:24,linkFillColor:"#19191a"}},computed:{projectTitle:function(){return this.projectInfo.project_name},projectDescription:function(){return this.projectInfo.description},projectLanguage:function(){return this.projectInfo.language},projectLanguageColour:function(){return this.projectInfo.language_colour},projectGitUrl:function(){return this.projectInfo.github.url},projectGitAriaLabel:function(){return this.projectInfo.github.url},projectDemoUrl:function(){return this.projectInfo.demo.url},projectDemoAriaLabel:function(){return this.projectInfo.demo.url},hasProjectDemoUrl:function(){return null!==this.projectInfo.demo.url&&void 0!==this.projectInfo.demo.url},hasGitUrl:function(){return null!==this.projectInfo.github.url&&void 0!==this.projectInfo.github.url}}},o=n(9),component=Object(o.a)(l,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"bg-p-white flex flex-col px-5 md:max-w-sm rounded"},[n("h3",{staticClass:"py-7 capitalize text-lg sm:text-xl"},[e._v(e._s(e.projectTitle))]),e._v(" "),n("p",{staticClass:"font-light text-sm sm:text-base flex-grow"},[e._v(e._s(e.projectDescription))]),e._v(" "),n("div",{staticClass:"flex flex-row justify-between pt-12 pb-5 items-center"},[n("div",{staticClass:"flex flex-row space-x-2.5 items-center"},[n("language-icon",{attrs:{"fill-colour":e.projectLanguageColour}}),e._v(" "),n("span",{staticClass:"font-light text-xs sm:text-sm"},[e._v(e._s(e.projectLanguage))])],1),e._v(" "),n("client-only",[n("div",{staticClass:"flex flex-row space-x-3 items-center"},[n("clickable-icon",{attrs:{"aria-label":e.projectGitAriaLabel,link:e.projectGitUrl}},[e.hasGitUrl?n("github-icon",{attrs:{"fill-color":e.linkFillColor,size:e.iconSize}}):e._e()],1),e._v(" "),n("clickable-icon",{attrs:{"aria-label":e.projectDemoAriaLabel,link:e.projectDemoUrl}},[e.hasProjectDemoUrl?n("web-icon",{attrs:{"fill-color":e.linkFillColor}}):e._e()],1)],1)])],1)])}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{ClickableIcon:n(271).default})},282:function(e,t,n){"use strict";n.r(t);var l=n(276),o={name:"FooterBar",components:{DesktopFooter:n(277).default,MobileFooter:l.default},data:function(){return{snsLinks:{email:{url:"mailto:janowyeong@hotmail.com",ariaLabel:"Email"},github:{url:"https://github.com/TryingOutSomething",ariaLabel:"Github"},linkedIn:{url:"https://www.linkedin.com/in/jan-owyeong-guo-yong/",ariaLabel:"LinkedIn"}},mobileToolsIconSize:18,credits:"© 2023 Jan Owyeong Guo Yong",location:"Singapore, Singapore"}}},r=n(9),component=Object(r.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("footer",{staticClass:"bg-p-black bottom-0"},[n("mobile-footer",{staticClass:"md:hidden\n    flex flex-col justify-center items-center\n    py-12 sm:py-5 px-5 sm:px-0",attrs:{"sns-links":e.snsLinks,"tools-icon-size":e.mobileToolsIconSize,credits:e.credits,location:e.location}}),e._v(" "),n("desktop-footer",{staticClass:"hidden md:flex justify-between py-2.5 px-7 lg:px-20 items-center",attrs:{credits:e.credits,location:e.location,"sns-links":e.snsLinks}})],1)}),[],!1,null,null,null);t.default=component.exports},283:function(e,t,n){var map={"./Jan_Owyeong_Guo_Yong_Resume_preview.PNG":272,"./firebase_logo.png":284,"./git_logo.png":285,"./java_logo.png":286,"./js_logo.png":287,"./mongodb_logo.png":288,"./mysql_logo.png":289,"./nodejs_logo.png":290,"./python_logo.png":291,"./spring_logo.svg":292,"./vuejs_logo.png":293};function l(e){var t=o(e);return n(t)}function o(e){if(!n.o(map,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return map[e]}l.keys=function(){return Object.keys(map)},l.resolve=o,e.exports=l,l.id=283},284:function(e,t,n){e.exports=n.p+"img/firebase_logo.608ba5d.png"},285:function(e,t,n){e.exports=n.p+"img/git_logo.c67e6b3.png"},286:function(e,t,n){e.exports=n.p+"img/java_logo.f3f219a.png"},287:function(e,t,n){e.exports=n.p+"img/js_logo.5f63bc2.png"},288:function(e,t,n){e.exports=n.p+"img/mongodb_logo.e89bfa4.png"},289:function(e,t,n){e.exports=n.p+"img/mysql_logo.af5c45a.png"},290:function(e,t,n){e.exports=n.p+"img/nodejs_logo.dfa0ac2.png"},291:function(e,t,n){e.exports=n.p+"img/python_logo.e031ad4.png"},292:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA5Ny4xIDk3Ij4KICA8ZGVmcz4KICAgIDxzdHlsZT4uY2xzLTF7ZmlsbDojNmRiMzNmO308L3N0eWxlPgogIDwvZGVmcz4KICA8dGl0bGU+c3ByaW5nLWljb248L3RpdGxlPgogIDxnIGlkPSJMYXllcl8yIiBkYXRhLW5hbWU9IkxheWVyIDIiPgogICAgPGcgaWQ9ImxvZ29zIj4KICAgICAgPHBhdGggY2xhc3M9ImNscy0xIgogICAgICAgICAgICBkPSJNODguNCw1LjZhNDIuMzIsNDIuMzIsMCwwLDEtNS4yLDkuMUE0OC40Niw0OC40NiwwLDEsMCwxNS41LDg0bDEuOCwxLjZBNDguNDEsNDguNDEsMCwwLDAsOTYuOCw1MkM5OC4yLDM5LjgsOTQuNSwyNC4yLDg4LjQsNS42Wk0yMi41LDg0LjRhNC4xMiw0LjEyLDAsMSwxLS42LTUuOEE0LjIxLDQuMjEsMCwwLDEsMjIuNSw4NC40Wk04OC4xLDY5LjlDNzYuMiw4NS44LDUwLjYsODAuNCwzNC4zLDgxLjJjMCwwLTIuOS4yLTUuOC42LDAsMCwxLjEtLjUsMi41LTEsMTEuNS00LDE2LjktNC44LDIzLjktOC40QzY4LDY1LjcsODEuMSw1MSw4My43LDM1LjhjLTUsMTQuNi0yMC4yLDI3LjItMzQsMzIuM0M0MC4yLDcxLjYsMjMuMSw3NSwyMy4xLDc1bC0uNy0uNGMtMTEuNi01LjctMTItMzAuOSw5LjItMzksOS4zLTMuNiwxOC4xLTEuNiwyOC4yLTQsMTAuNy0yLjUsMjMuMS0xMC41LDI4LjEtMjFDOTMuNSwyNy41LDEwMC4zLDUzLjcsODguMSw2OS45WiIvPgogICAgPC9nPgogIDwvZz4KPC9zdmc+Cg=="},293:function(e,t,n){e.exports=n.p+"img/vuejs_logo.26bd867.png"},294:function(e,t,n){"use strict";n(278)},295:function(e,t,n){var l=n(46)((function(i){return i[1]}));l.push([e.i,"/*purgecss start ignore*/\n.inflate-enter-active[data-v-b93ff6b0]{\n  -webkit-animation:inflate-data-v-b93ff6b0 .1s ease-in;\n          animation:inflate-data-v-b93ff6b0 .1s ease-in\n}\n.inflate-leave-active[data-v-b93ff6b0]{\n  animation:inflate-data-v-b93ff6b0 .1s ease-in reverse\n}\n@-webkit-keyframes inflate-data-v-b93ff6b0{\n0%{\n    transform:scale(0)\n}\nto{\n    transform:scale(100%)\n}\n}\n@keyframes inflate-data-v-b93ff6b0{\n0%{\n    transform:scale(0)\n}\nto{\n    transform:scale(100%)\n}\n}\n\n/*purgecss end ignore*/",""]),l.locals={},e.exports=l},296:function(e,t,n){"use strict";n.r(t);n(20),n(38);var l={name:"NuxtHero",components:{ScrollDown:n(279).default},data:function(){return{emojiElementProps:{id:"handEmoji",parentId:null,animationClassName:"wave-hand"},ellipseProps:{id:"ellipseWheel",parentId:"svgContainer",animationClassName:"ellipse-wheel"},ellipseSmallProps:{id:"ellipseWheelSmall",parentId:"svgContainerSmall",animationClassName:"ellipse-wheel-small"},scrollArrowProps:{id:"scrollArrow",parentId:"svgContainer",animationClassName:"scroll-down-arrow"},scrollArrowSmallProps:{id:"scrollArrowSmall",parentId:"svgContainerSmall",animationClassName:"scroll-down-arrow"},observerOptions:{root:null,rootMargin:"0px",threshold:.75},observer:null}},mounted:function(){var e=new IntersectionObserver(this.handleAnimationDisplay,this.observerOptions);this.elementsToObserve().forEach((function(element){return e.observe(element)})),this.observer=e},beforeDestroy:function(){this.observer.disconnect()},methods:{elementsToObserve:function(){return[document.getElementById(this.emojiElementProps.id),document.getElementById(this.ellipseProps.parentId),document.getElementById(this.ellipseSmallProps.parentId)]},handleAnimationDisplay:function(e,t){var n=this;e.forEach((function(e){var element=e.target;e.isIntersecting?n.addAnimationClassToElement(element):n.removeAnimationClassToElement(element)}))},addAnimationClassToElement:function(element){switch(element.id){case this.emojiElementProps.id:return void element.classList.add(this.emojiElementProps.animationClassName);case this.ellipseProps.parentId:return void this.addScrollDownAnimationGroupClass(element,this.scrollArrowProps,this.ellipseProps);case this.ellipseSmallProps.parentId:this.addScrollDownAnimationGroupClass(element,this.scrollArrowSmallProps,this.ellipseSmallProps)}},addScrollDownAnimationGroupClass:function(e,t,n){var l=e.querySelector("#".concat(t.id)),o=e.querySelector("#".concat(n.id));l.classList.add(t.animationClassName),o.classList.add(n.animationClassName)},removeAnimationClassToElement:function(element){switch(element.id){case this.emojiElementProps.id:return void element.classList.remove(this.emojiElementProps.animationClassName);case this.ellipseProps.parentId:return void this.removeScrollDownAnimationGroupClass(element,this.scrollArrowProps,this.ellipseProps);case this.ellipseSmallProps.parentId:this.removeScrollDownAnimationGroupClass(element,this.scrollArrowSmallProps,this.ellipseSmallProps)}},removeScrollDownAnimationGroupClass:function(e,t,n){var l=e.querySelector("#".concat(t.id)),o=e.querySelector("#".concat(n.id));l.classList.remove(t.animationClassName),o.classList.remove(n.animationClassName)}}},o=n(9),component=Object(o.a)(l,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"\n    bg-p-black\n    flex flex-col\n    h-screen\n  "},[n("nav-bar",{staticClass:"bg-p-black"}),e._v(" "),n("div",{staticClass:"\n      flex flex-col\n      items-center\n      justify-center\n      h-screen\n    "},[n("div",{staticClass:"text-center text-p-white"},[n("div",{staticClass:"flex flex-col items-center justify-center sm:flex-row"},[n("h1",{staticClass:"mb-5 sm:mb-10 text-5xl md:text-7xl lg:text-8xl font-bold"},[e._v("\n          Hello There!\n        ")]),e._v(" "),n("div",{ref:"handEmoji",staticClass:"mb-10 w-11 sm:w-24 lg:w-32 text-4xl md:text-7xl lg:text-8xl",attrs:{id:"handEmoji"}},[e._v("\n          👋🏻\n        ")])]),e._v(" "),n("div",{staticClass:"text-xl md:text-3xl lg:text-4xl"},[e._v("I'm Jan Owyeong!")])])]),e._v(" "),n("scroll-down",{staticClass:"text-p-white flex justify-center mb-10",attrs:{"arrow-component-id":"scrollArrow","ellipse-component-id":"ellipseWheel"}})],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{NavBar:n(280).default})},297:function(e,t,n){"use strict";n.r(t);var l={name:"NuxtAbout",data:function(){return{logoNames:[{name:"python_logo.png",alt:"Python Logo"},{name:"js_logo.png",alt:"Javascript Logo"},{name:"java_logo.png",alt:"Java Logo"},{name:"nodejs_logo.png",alt:"NodeJS Logo"},{name:"spring_logo.svg",alt:"Spring Logo"},{name:"vuejs_logo.png",alt:"VueJS Logo"},{name:"firebase_logo.png",alt:"Firebase Logo"},{name:"mysql_logo.png",alt:"MySQL Logo"},{name:"mongodb_logo.png",alt:"MongoDB Logo"},{name:"git_logo.png",alt:"Git Logo"}]}}},o=n(9),component=Object(o.a)(l,(function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",{staticClass:"\n  bg-p-white\n  flex\n  flex-col\n  lg:h-screen\n  min-h-screen\n  items-center\n  justify-center",attrs:{id:"about"}},[l("div",{staticClass:"space-y-10 sm:space-y-24 lg:space-y-14"},[l("h1",{staticClass:"text-center uppercase font-black\n      text-4xl sm:text-5xl mt-10 sm:mt-0"},[e._v("\n      about me\n    ")]),e._v(" "),l("p",{staticClass:"px-12 sm:px-20 xl:px-72 2xl:px-80 sm:text-xl text-center sm:text-left"},[e._v("\n      I am a computer science graduate from Nanyang Technological University with almost two years of work experience.\n      I engage in various projects during my free time. I love exploring new technologies to enhance my work\n      productivity and enjoy reading blog articles about tech-related implementations. I am eager to gain practical\n      experience and apply the theoretical techniques I learned during my studies to build software in my professional\n      role.\n    ")]),e._v(" "),l("div",{staticClass:"px-12 sm:px-20 xl:px-80 2xl:px-128"},[l("h2",{staticClass:"my-10 text-xl sm:text-2xl text-center sm:text-left font-bold"},[e._v("Skills accumulated:")]),e._v(" "),l("div",{staticClass:"mb-10 lg:mb-0 xl:mb-5 2xl:mb-0\n        grid place-items-center gap-3\n        grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6"},e._l(e.logoNames,(function(e,i){return l("img",{key:i,staticClass:"max-h-24 lg:max-h-20 xl:max-h-24",attrs:{alt:e.alt,src:n(283)("./"+e.name)}})})),0)])])])}),[],!1,null,"0377ef02",null);t.default=component.exports},298:function(e,t,n){"use strict";n.r(t);var l={name:"NuxtProjects",components:{ProjectCard:n(281).default}},o=n(9),component=Object(o.a)(l,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"bg-p-black flex min-h-screen flex-col items-center justify-center",attrs:{id:"projects"}},[n("div",{staticClass:"space-y-20 my-20"},[n("h1",{staticClass:"text-p-white text-center uppercase font-black text-4xl sm:text-5xl"},[e._v("\n      projects created\n    ")]),e._v(" "),n("div",{staticClass:"px-10 2xl:px-96"},[n("div",{staticClass:"grid gap-5 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3"},e._l(e.$getProjectList(),(function(e,i){return n("project-card",{key:i,attrs:{"project-info":e}})})),1)])])])}),[],!1,null,null,null);t.default=component.exports},299:function(e,t,n){"use strict";n.r(t);var l={name:"NuxtResume",data:function(){return{resumePdfPath:"Jan_Owyeong_Guo_Yong_Resume.pdf",resumeImagePath:"".concat(n(272)),viewConfig:{toolbar:{title:!1,zoomIn:!0,zoomOut:!0,oneToOne:!0,reset:!0,prev:!1,play:!1,next:!1,rotateLeft:!1,rotateRight:!1,flipHorizontal:!1,flipVertical:!1},title:!1},viewer:null}},methods:{cacheViewer:function(e){this.viewer=e},showViewer:function(){this.viewer.show()}}},o=n(9),component=Object(o.a)(l,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"bg-p-white flex min-h-screen-50 lg:h-screen-70 xl:h-screen flex-col",attrs:{id:"resume"}},[n("h1",{staticClass:"mt-10 sm:mt-20 text-center uppercase font-black text-4xl sm:text-5xl mb-7 sm:mb-0"},[e._v("resume")]),e._v(" "),n("client-only",[n("div",{staticClass:"min-h-screen-50 lg:h-screen grid place-items-center\n      grid-cols-1 sm:grid-cols-2\n      mb-12\n      sm:px-12 sm:mt-10 sm:mb-20\n      md:px-20\n      lg:px-44\n      xl:px-64\n      2xl:px-96"},[n("viewer",{attrs:{images:[e.resumeImagePath],options:e.viewConfig,static:""},on:{inited:e.cacheViewer}},[n("img",{staticClass:"max-h-96 lg:max-h-128 shadow-md border",attrs:{src:e.resumeImagePath,alt:"Resume preview"}})]),e._v(" "),n("div",{staticClass:"space-y-7 sm:space-y-10 md:space-y-10 xl:space-y-16\n        mt-10 sm:mt-0\n        xl:block"},[n("button",{staticClass:"bg-p-yellow text-p-black font-medium rounded-md uppercase shadow-md\n          flex flex-row items-center justify-center py-5 px-12",on:{click:e.showViewer}},[e._v("\n          view resume\n        ")]),e._v(" "),n("a",{staticClass:"flex",attrs:{download:e.resumePdfPath,href:e.resumePdfPath,"aria-label":"DownloadResumePdf"}},[n("button",{staticClass:"bg-p-brown text-p-white font-medium rounded-md uppercase shadow-md\n          flex flex-row items-center justify-center py-5 px-10"},[n("download-icon",{staticClass:"pr-1.5"}),e._v("\n            download\n          ")],1)])])],1)]),e._v(" "),n("footer-bar")],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{FooterBar:n(282).default})},300:function(e,t,n){"use strict";n.r(t);var l={name:"ScrollToTop",data:function(){return{iconSize:32,hasScrolledDown:!1}},mounted:function(){window.addEventListener("scroll",this.watchScrollDistance)},beforeDestroy:function(){window.removeEventListener("scroll",this.watchScrollDistance)},methods:{watchScrollDistance:function(){if(void 0!==window){var e=window.scrollY||document.documentElement.offsetTop||0;this.hasScrolledDown=e>200}},scrollToTop:function(){window.scrollTo({top:0,behavior:"smooth"})}}},o=(n(294),n(9)),component=Object(o.a)(l,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("client-only",[n("div",{staticClass:"fixed bottom-5 right-5 hidden lg:block"},[n("Transition",{attrs:{name:"inflate"}},[n("button",{directives:[{name:"show",rawName:"v-show",value:e.hasScrolledDown,expression:"hasScrolledDown"}],staticClass:"flex items-center justify-center\n        rounded-full text-white\n        shadow-md hover:shadow-lg\n        bg-p-gray hover:bg-gray-400\n        w-16 h-16",on:{click:e.scrollToTop}},[n("chevron-up-icon",{attrs:{size:e.iconSize}})],1)])],1)])}),[],!1,null,"b93ff6b0",null);t.default=component.exports},301:function(e,t,n){"use strict";n.r(t);var l={name:"IndexPage"},o=n(9),component=Object(o.a)(l,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("Hero"),e._v(" "),n("About"),e._v(" "),n("Projects"),e._v(" "),n("Resume"),e._v(" "),n("scroll-to-top")],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{Hero:n(296).default,About:n(297).default,Projects:n(298).default,Resume:n(299).default,ScrollToTop:n(300).default})}}]);