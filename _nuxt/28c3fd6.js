(window.webpackJsonp=window.webpackJsonp||[]).push([[13,3,14,15],{271:function(t,e,r){"use strict";r.r(e);var l={name:"ClickableIcon",props:{link:{type:String,default:null},ariaLabel:{type:String,default:null}}},n=r(9),component=Object(n.a)(l,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("a",{attrs:{"aria-label":t.ariaLabel,href:t.link,rel:"noopener noreferrer",target:"_blank"}},[t._t("default")],2)}),[],!1,null,"af91d4b6",null);e.default=component.exports},275:function(t,e,r){"use strict";r.r(e);r(28);var l={name:"LanguageIcon",props:{width:{type:Number,default:12},height:{type:Number,default:12},fillColour:{type:String,default:"#C4C4C4"}}},n=r(9),component=Object(n.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("svg",{attrs:{height:t.height,width:t.width,fill:"none",viewBox:"0 0 17 17",xmlns:"http://www.w3.org/2000/svg"}},[r("circle",{attrs:{id:"language-logo",fill:t.fillColour,cx:"8.5",cy:"8.50195",r:"8.5"}})])}),[],!1,null,"ae0ddcfe",null);e.default=component.exports},281:function(t,e,r){"use strict";r.r(e);r(37),r(61);var l={name:"ProjectCard",components:{LanguageIcon:r(275).default},props:{projectInfo:{type:Object,required:!0}},data:function(){return{iconSize:24,linkFillColor:"#19191a"}},computed:{projectTitle:function(){return this.projectInfo.project_name},projectDescription:function(){return this.projectInfo.description},projectLanguage:function(){return this.projectInfo.language},projectLanguageColour:function(){return this.projectInfo.language_colour},projectGitUrl:function(){return this.projectInfo.github.url},projectGitAriaLabel:function(){return this.projectInfo.github.url},projectDemoUrl:function(){return this.projectInfo.demo.url},projectDemoAriaLabel:function(){return this.projectInfo.demo.url},hasProjectDemoUrl:function(){return null!==this.projectInfo.demo.url&&void 0!==this.projectInfo.demo.url},hasGitUrl:function(){return null!==this.projectInfo.github.url&&void 0!==this.projectInfo.github.url}}},n=r(9),component=Object(n.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"bg-p-white flex flex-col px-5 md:max-w-sm rounded"},[r("h3",{staticClass:"py-7 capitalize text-lg sm:text-xl"},[t._v(t._s(t.projectTitle))]),t._v(" "),r("p",{staticClass:"font-light text-sm sm:text-base flex-grow"},[t._v(t._s(t.projectDescription))]),t._v(" "),r("div",{staticClass:"flex flex-row justify-between pt-12 pb-5 items-center"},[r("div",{staticClass:"flex flex-row space-x-2.5 items-center"},[r("language-icon",{attrs:{"fill-colour":t.projectLanguageColour}}),t._v(" "),r("span",{staticClass:"font-light text-xs sm:text-sm"},[t._v(t._s(t.projectLanguage))])],1),t._v(" "),r("client-only",[r("div",{staticClass:"flex flex-row space-x-3 items-center"},[r("clickable-icon",{attrs:{"aria-label":t.projectGitAriaLabel,link:t.projectGitUrl}},[t.hasGitUrl?r("github-icon",{attrs:{"fill-color":t.linkFillColor,size:t.iconSize}}):t._e()],1),t._v(" "),r("clickable-icon",{attrs:{"aria-label":t.projectDemoAriaLabel,link:t.projectDemoUrl}},[t.hasProjectDemoUrl?r("web-icon",{attrs:{"fill-color":t.linkFillColor}}):t._e()],1)],1)])],1)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{ClickableIcon:r(271).default})},299:function(t,e,r){"use strict";r.r(e);var l={name:"NuxtProjects",components:{ProjectCard:r(281).default}},n=r(9),component=Object(n.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"bg-p-black flex min-h-screen flex-col items-center justify-center",attrs:{id:"projects"}},[r("div",{staticClass:"space-y-20 my-20"},[r("h1",{staticClass:"text-p-white text-center uppercase font-black text-4xl sm:text-5xl"},[t._v("\n      projects created\n    ")]),t._v(" "),r("div",{staticClass:"px-10 2xl:px-96"},[r("div",{staticClass:"grid gap-5 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3"},t._l(t.$getProjectList(),(function(t,i){return r("project-card",{key:i,attrs:{"project-info":t}})})),1)])])])}),[],!1,null,null,null);e.default=component.exports}}]);