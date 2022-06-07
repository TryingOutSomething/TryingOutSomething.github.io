(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{132:function(n,e,t){"use strict";var r=t(1),o=t(187),m=t(188),l=t(189),d=t(190),c=t(191),h=t(192),f=t(193),w=t(194);r.default.component("GithubIcon",o.a),r.default.component("WebIcon",m.a),r.default.component("DownloadIcon",l.a),r.default.component("EmailIcon",d.a),r.default.component("NuxtIcon",c.a),r.default.component("TailwindIcon",h.a),r.default.component("LinkedinIcon",f.a),r.default.component("ChevronUpIcon",w.a)},133:function(n,e,t){"use strict";var r=t(1),o=(t(268),t(184)),m=t.n(o);r.default.use(m.a)},134:function(n,e,t){"use strict";var r=t(19),o=(t(173),t(45),t(135)),m=t(136);e.a=function(n,e){n.app;e("getProjectList",(function(){for(var n=0,e=Object.entries(o);n<e.length;n++){var t=Object(r.a)(e[n],2),l=(t[0],t[1]),d=l.language;l.language_colour=m[d]||m.default,l.language=l.language[0].toUpperCase()+l.language.slice(1)}return o}))}},135:function(n){n.exports=JSON.parse('[{"project_name":"Github Repo Viewer","description":"View trending repositories built by developers on Github using Vue3\'s Composition API.","demo":{"url":"https://5f3546afd1ccbb70569b5a74--focused-cray-9a652d.netlify.app/","aria_label":"Github Repo Viewer"},"github":{"url":"https://github.com/TryingOutSomething/github-repo-viewer-vue3","aria_label":"Github Repo Viewer Source Code"},"language":"vue"},{"project_name":"Zoomba","description":"This project contains a demo of the landing page and admin CMS dashboard for Zoomba, a motion tracking desktop game.","demo":{"url":"https://tryingoutsomething.github.io/Zoomba/","aria_label":"Zoomba Web App"},"github":{"url":"https://github.com/TryingOutSomething/Zoomba","aria_label":"Zoomba Source Code"},"language":"vue"},{"project_name":"Car park Finder","description":"A mobile application that finds the nearest car park from your current location and displays the number of available lots for that car park.","demo":{"url":null,"aria_label":null},"github":{"url":"https://github.com/TryingOutSomething/cz2006-carpark-finder","aria_label":"Carpark Finder Source Code"},"language":"javascript"},{"project_name":"Multi-Disciplinary Project","description":"A project to build a robot that navigates a maze. This repository contains the algorithm implementation for the robot.","demo":{"url":null,"aria_label":null},"github":{"url":"https://github.com/HanYiChoong/MDP_Grp6_Algorithms","aria_label":"MDP Source Code"},"language":"python"},{"project_name":"CCA Web Scraper","description":"An automated web scrapper that scrapes the Co-Curricular Activities (CCA) from Ngee Ann Polytechnic’s website","demo":{"url":null,"aria_label":null},"github":{"url":"https://github.com/TryingOutSomething/CCA-web-scraper","aria_label":"CCA Web Scraper Viewer Source Code"},"language":"python"},{"project_name":"Snapee Bot","description":"A Telegram bot service that allows users to manage and spend retail and restaurant vouchers earned by playing games and doing tasks.","demo":{"url":null,"aria_label":null},"github":{"url":"https://github.com/TryingOutSomething/SnapeeBot","aria_label":"Snapee Source Code"},"language":"python"},{"project_name":"Match In A Snap","description":"A website that recommends food places base on user\'s preference and their location.","demo":{"url":"https://tryingoutsomething.github.io/match-in-a-snap/","aria_label":"Match In A Snap"},"github":{"url":"https://github.com/TryingOutSomething/match-in-a-snap","aria_label":"Match In A Snap Source Code"},"language":"vue"},{"project_name":"Sound Mode","description":"A dart/flutter plugin to manage device\'s sound mode","demo":{"url":null,"aria_label":null},"github":{"url":"https://github.com/TryingOutSomething/sound_mode","aria_label":"Sound Mode Source Code"},"language":"dart"}]')},136:function(n){n.exports=JSON.parse('{"vue":"#2c3e50","node":"#f1e05a","javascript":"#f1e05a","python":"#3572a5","dart":"#00b4ab","flutter":"#00b4ab","default":"#c4c4c4"}')},195:function(n,e,t){t(196),n.exports=t(197)},259:function(n,e,t){var content=t(260);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[n.i,content,""]]),content.locals&&(n.exports=content.locals);(0,t(47).default)("253c7981",content,!0,{sourceMap:!1})},260:function(n,e,t){var r=t(46)((function(i){return i[1]}));r.push([n.i,"/*! tailwindcss v2.2.19 | MIT License | https://tailwindcss.com*/\n\n/*! modern-normalize v1.1.0 | MIT License | https://github.com/sindresorhus/modern-normalize */\n\n/*\nDocument\n========\n*/\n\n/**\nUse a better box model (opinionated).\n*/\n\n*,\n::before,\n::after {\n  box-sizing: border-box;\n}\n\n/**\nUse a more readable tab size (opinionated).\n*/\n\nhtml {\n  -moz-tab-size: 4;\n  -o-tab-size: 4;\n     tab-size: 4;\n}\n\n/**\n1. Correct the line height in all browsers.\n2. Prevent adjustments of font size after orientation changes in iOS.\n*/\n\nhtml {\n  line-height: 1.15; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/*\nSections\n========\n*/\n\n/**\nRemove the margin in all browsers.\n*/\n\nbody {\n  margin: 0;\n}\n\n/**\nImprove consistency of default fonts in all browsers. (https://github.com/sindresorhus/modern-normalize/issues/3)\n*/\n\nbody {\n  font-family:\n\t\tsystem-ui,\n\t\t-apple-system, /* Firefox supports this but not yet `system-ui` */\n\t\t'Segoe UI',\n\t\tRoboto,\n\t\tHelvetica,\n\t\tArial,\n\t\tsans-serif,\n\t\t'Apple Color Emoji',\n\t\t'Segoe UI Emoji';\n}\n\n/*\nGrouping content\n================\n*/\n\n/**\n1. Add the correct height in Firefox.\n2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)\n*/\n\nhr {\n  height: 0; /* 1 */\n  color: inherit; /* 2 */\n}\n\n/*\nText-level semantics\n====================\n*/\n\n/**\nAdd the correct text decoration in Chrome, Edge, and Safari.\n*/\n\nabbr[title] {\n  -webkit-text-decoration: underline dotted;\n          text-decoration: underline dotted;\n}\n\n/**\nAdd the correct font weight in Edge and Safari.\n*/\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n1. Improve consistency of default fonts in all browsers. (https://github.com/sindresorhus/modern-normalize/issues/3)\n2. Correct the odd 'em' font sizing in all browsers.\n*/\n\ncode,\nkbd,\nsamp,\npre {\n  font-family:\n\t\tui-monospace,\n\t\tSFMono-Regular,\n\t\tConsolas,\n\t\t'Liberation Mono',\n\t\tMenlo,\n\t\tmonospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/**\nAdd the correct font size in all browsers.\n*/\n\nsmall {\n  font-size: 80%;\n}\n\n/**\nPrevent 'sub' and 'sup' elements from affecting the line height in all browsers.\n*/\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/*\nTabular data\n============\n*/\n\n/**\n1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)\n2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)\n*/\n\ntable {\n  text-indent: 0; /* 1 */\n  border-color: inherit; /* 2 */\n}\n\n/*\nForms\n=====\n*/\n\n/**\n1. Change the font styles in all browsers.\n2. Remove the margin in Firefox and Safari.\n*/\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: 1.15; /* 1 */\n  margin: 0; /* 2 */\n}\n\n/**\nRemove the inheritance of text transform in Edge and Firefox.\n1. Remove the inheritance of text transform in Firefox.\n*/\n\nbutton,\nselect { /* 1 */\n  text-transform: none;\n}\n\n/**\nCorrect the inability to style clickable types in iOS and Safari.\n*/\n\nbutton,\n[type='button'],\n[type='reset'] {\n  -webkit-appearance: button;\n}\n\n/**\nRemove the inner border and padding in Firefox.\n*/\n\n::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n/**\nRestore the focus styles unset by the previous rule.\n*/\n\n/**\nRemove the additional ':invalid' styles in Firefox.\nSee: https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737\n*/\n\n/**\nRemove the padding so developers are not caught out when they zero out 'fieldset' elements in all browsers.\n*/\n\nlegend {\n  padding: 0;\n}\n\n/**\nAdd the correct vertical alignment in Chrome and Firefox.\n*/\n\nprogress {\n  vertical-align: baseline;\n}\n\n/**\nCorrect the cursor style of increment and decrement buttons in Safari.\n*/\n\n::-webkit-inner-spin-button,\n::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n1. Correct the odd appearance in Chrome and Safari.\n2. Correct the outline style in Safari.\n*/\n\n/**\nRemove the inner padding in Chrome and Safari on macOS.\n*/\n\n::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n1. Correct the inability to style clickable types in iOS and Safari.\n2. Change font properties to 'inherit' in Safari.\n*/\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/*\nInteractive\n===========\n*/\n\n/*\nAdd the correct display in Chrome and Safari.\n*/\n\nsummary {\n  display: list-item;\n}\n\n/**\n * Manually forked from SUIT CSS Base: https://github.com/suitcss/base\n * A thin layer on top of normalize.css that provides a starting point more\n * suitable for web applications.\n */\n\n/**\n * Removes the default spacing and border for appropriate elements.\n */\n\nblockquote,\ndl,\ndd,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\nhr,\nfigure,\np,\npre {\n  margin: 0;\n}\n\nbutton {\n  background-color: transparent;\n  background-image: none;\n}\n\nfieldset {\n  margin: 0;\n  padding: 0;\n}\n\nol,\nul {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n/**\n * Tailwind custom reset styles\n */\n\n/**\n * 1. Use the user's configured `sans` font-family (with Tailwind's default\n *    sans-serif font stack as a fallback) as a sane default.\n * 2. Use Tailwind's default \"normal\" line-height so the user isn't forced\n *    to override it to ensure consistency even when using the default theme.\n */\n\nhtml {\n  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"; /* 1 */\n  line-height: 1.5; /* 2 */\n}\n\n/**\n * Inherit font-family and line-height from `html` so users can set them as\n * a class directly on the `html` element.\n */\n\nbody {\n  font-family: inherit;\n  line-height: inherit;\n}\n\n/**\n * 1. Prevent padding and border from affecting element width.\n *\n *    We used to set this in the html element and inherit from\n *    the parent element for everything else. This caused issues\n *    in shadow-dom-enhanced elements like <details> where the content\n *    is wrapped by a div with box-sizing set to `content-box`.\n *\n *    https://github.com/mozdevs/cssremedy/issues/4\n *\n *\n * 2. Allow adding a border to an element by just adding a border-width.\n *\n *    By default, the way the browser specifies that an element should have no\n *    border is by setting it's border-style to `none` in the user-agent\n *    stylesheet.\n *\n *    In order to easily add borders to elements by just setting the `border-width`\n *    property, we change the default border-style for all elements to `solid`, and\n *    use border-width to hide them instead. This way our `border` utilities only\n *    need to set the `border-width` property instead of the entire `border`\n *    shorthand, making our border utilities much more straightforward to compose.\n *\n *    https://github.com/tailwindcss/tailwindcss/pull/116\n */\n\n*,\n::before,\n::after {\n  box-sizing: border-box; /* 1 */\n  border-width: 0; /* 2 */\n  border-style: solid; /* 2 */\n  border-color: currentColor; /* 2 */\n}\n\n/*\n * Ensure horizontal rules are visible by default\n */\n\nhr {\n  border-top-width: 1px;\n}\n\n/**\n * Undo the `border-style: none` reset that Normalize applies to images so that\n * our `border-{width}` utilities have the expected effect.\n *\n * The Normalize reset is unnecessary for us since we default the border-width\n * to 0 on all elements.\n *\n * https://github.com/tailwindcss/tailwindcss/issues/362\n */\n\nimg {\n  border-style: solid;\n}\n\ntextarea {\n  resize: vertical;\n}\n\ninput::-moz-placeholder, textarea::-moz-placeholder {\n  opacity: 1;\n  color: #9ca3af;\n}\n\ninput:-ms-input-placeholder, textarea:-ms-input-placeholder {\n  opacity: 1;\n  color: #9ca3af;\n}\n\ninput::placeholder,\ntextarea::placeholder {\n  opacity: 1;\n  color: #9ca3af;\n}\n\nbutton,\n[role=\"button\"] {\n  cursor: pointer;\n}\n\n/**\n * Override legacy focus reset from Normalize with modern Firefox focus styles.\n *\n * This is actually an improvement over the new defaults in Firefox in our testing,\n * as it triggers the better focus styles even for links, which still use a dotted\n * outline in Firefox by default.\n */\n\ntable {\n  border-collapse: collapse;\n}\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-size: inherit;\n  font-weight: inherit;\n}\n\n/**\n * Reset links to optimize for opt-in styling instead of\n * opt-out.\n */\n\na {\n  color: inherit;\n  text-decoration: inherit;\n}\n\n/**\n * Reset form element properties that are easy to forget to\n * style explicitly so you don't inadvertently introduce\n * styles that deviate from your design system. These styles\n * supplement a partial reset that is already applied by\n * normalize.css.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  padding: 0;\n  line-height: inherit;\n  color: inherit;\n}\n\n/**\n * Use the configured 'mono' font family for elements that\n * are expected to be rendered with a monospace font, falling\n * back to the system monospace stack if there is no configured\n * 'mono' font family.\n */\n\npre,\ncode,\nkbd,\nsamp {\n  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace;\n}\n\n/**\n * 1. Make replaced elements `display: block` by default as that's\n *    the behavior you want almost all of the time. Inspired by\n *    CSS Remedy, with `svg` added as well.\n *\n *    https://github.com/mozdevs/cssremedy/issues/14\n * \n * 2. Add `vertical-align: middle` to align replaced elements more\n *    sensibly by default when overriding `display` by adding a\n *    utility like `inline`.\n *\n *    This can trigger a poorly considered linting error in some\n *    tools but is included by design.\n * \n *    https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210\n */\n\nimg,\nsvg,\nvideo,\ncanvas,\naudio,\niframe,\nembed,\nobject {\n  display: block; /* 1 */\n  vertical-align: middle; /* 2 */\n}\n\n/**\n * Constrain images and videos to the parent width and preserve\n * their intrinsic aspect ratio.\n *\n * https://github.com/mozdevs/cssremedy/issues/14\n */\n\nimg,\nvideo {\n  max-width: 100%;\n  height: auto;\n}\n\n/**\n * Ensure the default browser behavior of the `hidden` attribute.\n */\n\n[hidden] {\n  display: none;\n}\n\n*, ::before, ::after{\n  --tw-border-opacity:1;\n  border-color:rgba(229, 231, 235, var(--tw-border-opacity));\n}\n\nhtml{\n  font-family:Poppins, Sans-Serif\n}\n\n.static{\n  position:static;\n}\n\n.fixed{\n  position:fixed;\n}\n\n.absolute{\n  position:absolute;\n}\n\n.relative{\n  position:relative;\n}\n\n.inset-y-0{\n  top:0px;\n  bottom:0px;\n}\n\n.right-5{\n  right:1.25rem;\n}\n\n.bottom-0{\n  bottom:0px;\n}\n\n.bottom-5{\n  bottom:1.25rem;\n}\n\n.left-0{\n  left:0px;\n}\n\n.mx-auto{\n  margin-left:auto;\n  margin-right:auto;\n}\n\n.my-5{\n  margin-top:1.25rem;\n  margin-bottom:1.25rem;\n}\n\n.my-10{\n  margin-top:2.5rem;\n  margin-bottom:2.5rem;\n}\n\n.my-20{\n  margin-top:5rem;\n  margin-bottom:5rem;\n}\n\n.mt-3{\n  margin-top:0.75rem;\n}\n\n.mt-4{\n  margin-top:1rem;\n}\n\n.mt-5{\n  margin-top:1.25rem;\n}\n\n.mt-8{\n  margin-top:2rem;\n}\n\n.mt-10{\n  margin-top:2.5rem;\n}\n\n.mt-20{\n  margin-top:5rem;\n}\n\n.mb-1{\n  margin-bottom:0.25rem;\n}\n\n.mb-5{\n  margin-bottom:1.25rem;\n}\n\n.mb-7{\n  margin-bottom:1.75rem;\n}\n\n.mb-10{\n  margin-bottom:2.5rem;\n}\n\n.mb-12{\n  margin-bottom:3rem;\n}\n\n.mb-24{\n  margin-bottom:6rem;\n}\n\n.block{\n  display:block;\n}\n\n.flex{\n  display:flex;\n}\n\n.inline-flex{\n  display:inline-flex;\n}\n\n.table{\n  display:table;\n}\n\n.grid{\n  display:grid;\n}\n\n.hidden{\n  display:none;\n}\n\n.h-6{\n  height:1.5rem;\n}\n\n.h-16{\n  height:4rem;\n}\n\n.max-h-24{\n  max-height:6rem;\n}\n\n.max-h-96{\n  max-height:24rem;\n}\n\n.min-h-screen{\n  min-height:100vh;\n}\n\n.min-h-screen-50{\n  min-height:50vh;\n}\n\n.w-6{\n  width:1.5rem;\n}\n\n.w-11{\n  width:2.75rem;\n}\n\n.w-16{\n  width:4rem;\n}\n\n.max-w-4xl{\n  max-width:56rem;\n}\n\n.max-w-7xl{\n  max-width:80rem;\n}\n\n.flex-1{\n  flex:1 1 0%;\n}\n\n.flex-grow{\n  flex-grow:1;\n}\n\n.transform{\n  --tw-translate-x:0;\n  --tw-translate-y:0;\n  --tw-rotate:0;\n  --tw-skew-x:0;\n  --tw-skew-y:0;\n  --tw-scale-x:1;\n  --tw-scale-y:1;\n  transform:translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));\n}\n\n@-webkit-keyframes spin{\n  to{\n    transform:rotate(360deg);\n  }\n}\n\n@keyframes spin{\n  to{\n    transform:rotate(360deg);\n  }\n}\n\n@-webkit-keyframes ping{\n  75%, 100%{\n    transform:scale(2);\n    opacity:0;\n  }\n}\n\n@keyframes ping{\n  75%, 100%{\n    transform:scale(2);\n    opacity:0;\n  }\n}\n\n@-webkit-keyframes pulse{\n  50%{\n    opacity:.5;\n  }\n}\n\n@keyframes pulse{\n  50%{\n    opacity:.5;\n  }\n}\n\n@-webkit-keyframes bounce{\n  0%, 100%{\n    transform:translateY(-25%);\n    -webkit-animation-timing-function:cubic-bezier(0.8,0,1,1);\n            animation-timing-function:cubic-bezier(0.8,0,1,1);\n  }\n\n  50%{\n    transform:none;\n    -webkit-animation-timing-function:cubic-bezier(0,0,0.2,1);\n            animation-timing-function:cubic-bezier(0,0,0.2,1);\n  }\n}\n\n@keyframes bounce{\n  0%, 100%{\n    transform:translateY(-25%);\n    -webkit-animation-timing-function:cubic-bezier(0.8,0,1,1);\n            animation-timing-function:cubic-bezier(0.8,0,1,1);\n  }\n\n  50%{\n    transform:none;\n    -webkit-animation-timing-function:cubic-bezier(0,0,0.2,1);\n            animation-timing-function:cubic-bezier(0,0,0.2,1);\n  }\n}\n\n.grid-cols-1{\n  grid-template-columns:repeat(1, minmax(0, 1fr));\n}\n\n.grid-cols-2{\n  grid-template-columns:repeat(2, minmax(0, 1fr));\n}\n\n.flex-row{\n  flex-direction:row;\n}\n\n.flex-col{\n  flex-direction:column;\n}\n\n.place-items-center{\n  place-items:center;\n}\n\n.items-center{\n  align-items:center;\n}\n\n.justify-center{\n  justify-content:center;\n}\n\n.justify-between{\n  justify-content:space-between;\n}\n\n.gap-3{\n  gap:0.75rem;\n}\n\n.gap-5{\n  gap:1.25rem;\n}\n\n.space-x-2 > :not([hidden]) ~ :not([hidden]){\n  --tw-space-x-reverse:0;\n  margin-right:calc(0.5rem * var(--tw-space-x-reverse));\n  margin-left:calc(0.5rem * calc(1 - var(--tw-space-x-reverse)));\n}\n\n.space-x-3 > :not([hidden]) ~ :not([hidden]){\n  --tw-space-x-reverse:0;\n  margin-right:calc(0.75rem * var(--tw-space-x-reverse));\n  margin-left:calc(0.75rem * calc(1 - var(--tw-space-x-reverse)));\n}\n\n.space-x-4 > :not([hidden]) ~ :not([hidden]){\n  --tw-space-x-reverse:0;\n  margin-right:calc(1rem * var(--tw-space-x-reverse));\n  margin-left:calc(1rem * calc(1 - var(--tw-space-x-reverse)));\n}\n\n.space-x-2\\.5 > :not([hidden]) ~ :not([hidden]){\n  --tw-space-x-reverse:0;\n  margin-right:calc(0.625rem * var(--tw-space-x-reverse));\n  margin-left:calc(0.625rem * calc(1 - var(--tw-space-x-reverse)));\n}\n\n.space-y-1 > :not([hidden]) ~ :not([hidden]){\n  --tw-space-y-reverse:0;\n  margin-top:calc(0.25rem * calc(1 - var(--tw-space-y-reverse)));\n  margin-bottom:calc(0.25rem * var(--tw-space-y-reverse));\n}\n\n.space-y-7 > :not([hidden]) ~ :not([hidden]){\n  --tw-space-y-reverse:0;\n  margin-top:calc(1.75rem * calc(1 - var(--tw-space-y-reverse)));\n  margin-bottom:calc(1.75rem * var(--tw-space-y-reverse));\n}\n\n.space-y-10 > :not([hidden]) ~ :not([hidden]){\n  --tw-space-y-reverse:0;\n  margin-top:calc(2.5rem * calc(1 - var(--tw-space-y-reverse)));\n  margin-bottom:calc(2.5rem * var(--tw-space-y-reverse));\n}\n\n.space-y-20 > :not([hidden]) ~ :not([hidden]){\n  --tw-space-y-reverse:0;\n  margin-top:calc(5rem * calc(1 - var(--tw-space-y-reverse)));\n  margin-bottom:calc(5rem * var(--tw-space-y-reverse));\n}\n\n.overflow-hidden{\n  overflow:hidden;\n}\n\n.rounded{\n  border-radius:0.25rem;\n}\n\n.rounded-md{\n  border-radius:0.375rem;\n}\n\n.rounded-full{\n  border-radius:9999px;\n}\n\n.border{\n  border-width:1px;\n}\n\n.border-t{\n  border-top-width:1px;\n}\n\n.border-dashed{\n  border-style:dashed;\n}\n\n.bg-white{\n  --tw-bg-opacity:1;\n  background-color:rgba(255, 255, 255, var(--tw-bg-opacity));\n}\n\n.bg-gray-100{\n  --tw-bg-opacity:1;\n  background-color:rgba(243, 244, 246, var(--tw-bg-opacity));\n}\n\n.bg-gray-900{\n  --tw-bg-opacity:1;\n  background-color:rgba(17, 24, 39, var(--tw-bg-opacity));\n}\n\n.bg-p-black{\n  --tw-bg-opacity:1;\n  background-color:rgba(25, 25, 26, var(--tw-bg-opacity));\n}\n\n.bg-p-white{\n  --tw-bg-opacity:1;\n  background-color:rgba(249, 249, 249, var(--tw-bg-opacity));\n}\n\n.bg-p-yellow{\n  --tw-bg-opacity:1;\n  background-color:rgba(249, 193, 64, var(--tw-bg-opacity));\n}\n\n.bg-p-brown{\n  --tw-bg-opacity:1;\n  background-color:rgba(175, 89, 54, var(--tw-bg-opacity));\n}\n\n.bg-p-gray{\n  --tw-bg-opacity:1;\n  background-color:rgba(138, 147, 140, var(--tw-bg-opacity));\n}\n\n.hover\\:bg-gray-400:hover{\n  --tw-bg-opacity:1;\n  background-color:rgba(156, 163, 175, var(--tw-bg-opacity));\n}\n\n.hover\\:bg-gray-700:hover{\n  --tw-bg-opacity:1;\n  background-color:rgba(55, 65, 81, var(--tw-bg-opacity));\n}\n\n.p-1{\n  padding:0.25rem;\n}\n\n.p-2{\n  padding:0.5rem;\n}\n\n.p-6{\n  padding:1.5rem;\n}\n\n.px-2{\n  padding-left:0.5rem;\n  padding-right:0.5rem;\n}\n\n.px-3{\n  padding-left:0.75rem;\n  padding-right:0.75rem;\n}\n\n.px-5{\n  padding-left:1.25rem;\n  padding-right:1.25rem;\n}\n\n.px-7{\n  padding-left:1.75rem;\n  padding-right:1.75rem;\n}\n\n.px-10{\n  padding-left:2.5rem;\n  padding-right:2.5rem;\n}\n\n.px-12{\n  padding-left:3rem;\n  padding-right:3rem;\n}\n\n.py-2{\n  padding-top:0.5rem;\n  padding-bottom:0.5rem;\n}\n\n.py-5{\n  padding-top:1.25rem;\n  padding-bottom:1.25rem;\n}\n\n.py-7{\n  padding-top:1.75rem;\n  padding-bottom:1.75rem;\n}\n\n.py-12{\n  padding-top:3rem;\n  padding-bottom:3rem;\n}\n\n.py-2\\.5{\n  padding-top:0.625rem;\n  padding-bottom:0.625rem;\n}\n\n.pt-2{\n  padding-top:0.5rem;\n}\n\n.pt-4{\n  padding-top:1rem;\n}\n\n.pt-8{\n  padding-top:2rem;\n}\n\n.pt-12{\n  padding-top:3rem;\n}\n\n.pr-1{\n  padding-right:0.25rem;\n}\n\n.pr-1\\.5{\n  padding-right:0.375rem;\n}\n\n.pb-3{\n  padding-bottom:0.75rem;\n}\n\n.pb-5{\n  padding-bottom:1.25rem;\n}\n\n.text-center{\n  text-align:center;\n}\n\n.text-xs{\n  font-size:0.75rem;\n  line-height:1rem;\n}\n\n.text-sm{\n  font-size:0.875rem;\n  line-height:1.25rem;\n}\n\n.text-base{\n  font-size:1rem;\n  line-height:1.5rem;\n}\n\n.text-lg{\n  font-size:1.125rem;\n  line-height:1.75rem;\n}\n\n.text-xl{\n  font-size:1.25rem;\n  line-height:1.75rem;\n}\n\n.text-2xl{\n  font-size:1.5rem;\n  line-height:2rem;\n}\n\n.text-4xl{\n  font-size:2.25rem;\n  line-height:2.5rem;\n}\n\n.text-5xl{\n  font-size:3rem;\n  line-height:1;\n}\n\n.font-light{\n  font-weight:300;\n}\n\n.font-medium{\n  font-weight:500;\n}\n\n.font-semibold{\n  font-weight:600;\n}\n\n.font-bold{\n  font-weight:700;\n}\n\n.font-black{\n  font-weight:900;\n}\n\n.uppercase{\n  text-transform:uppercase;\n}\n\n.capitalize{\n  text-transform:capitalize;\n}\n\n.leading-7{\n  line-height:1.75rem;\n}\n\n.text-white{\n  --tw-text-opacity:1;\n  color:rgba(255, 255, 255, var(--tw-text-opacity));\n}\n\n.text-gray-400{\n  --tw-text-opacity:1;\n  color:rgba(156, 163, 175, var(--tw-text-opacity));\n}\n\n.text-gray-600{\n  --tw-text-opacity:1;\n  color:rgba(75, 85, 99, var(--tw-text-opacity));\n}\n\n.text-gray-800{\n  --tw-text-opacity:1;\n  color:rgba(31, 41, 55, var(--tw-text-opacity));\n}\n\n.text-green-500{\n  --tw-text-opacity:1;\n  color:rgba(16, 185, 129, var(--tw-text-opacity));\n}\n\n.text-p-black{\n  --tw-text-opacity:1;\n  color:rgba(25, 25, 26, var(--tw-text-opacity));\n}\n\n.text-p-white{\n  --tw-text-opacity:1;\n  color:rgba(249, 249, 249, var(--tw-text-opacity));\n}\n\n.hover\\:text-white:hover{\n  --tw-text-opacity:1;\n  color:rgba(255, 255, 255, var(--tw-text-opacity));\n}\n\n.hover\\:text-gray-800:hover{\n  --tw-text-opacity:1;\n  color:rgba(31, 41, 55, var(--tw-text-opacity));\n}\n\n.hover\\:underline:hover{\n  text-decoration:underline;\n}\n\n*, ::before, ::after{\n  --tw-shadow:0 0 #0000;\n}\n\n.shadow{\n  --tw-shadow:0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);\n  box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\n\n.shadow-md{\n  --tw-shadow:0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);\n  box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\n\n.hover\\:shadow-lg:hover{\n  --tw-shadow:0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);\n  box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);\n}\n\n.focus\\:outline-none:focus{\n  outline:2px solid transparent;\n  outline-offset:2px;\n}\n\n*, ::before, ::after{\n  --tw-ring-inset:var(--tw-empty,/*!*/ /*!*/);\n  --tw-ring-offset-width:0px;\n  --tw-ring-offset-color:#fff;\n  --tw-ring-color:rgba(59, 130, 246, 0.5);\n  --tw-ring-offset-shadow:0 0 #0000;\n  --tw-ring-shadow:0 0 #0000;\n}\n\n.focus\\:ring-2:focus{\n  --tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);\n  --tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);\n  box-shadow:var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);\n}\n\n.focus\\:ring-inset:focus{\n  --tw-ring-inset:inset;\n}\n\n.focus\\:ring-white:focus{\n  --tw-ring-opacity:1;\n  --tw-ring-color:rgba(255, 255, 255, var(--tw-ring-opacity));\n}\n\n.ease-in{\n  transition-timing-function:cubic-bezier(0.4, 0, 1, 1);\n}\n\n@media (min-width: 640px){\n  .sm\\:mt-0{\n    margin-top:0px;\n  }\n\n  .sm\\:mt-3{\n    margin-top:0.75rem;\n  }\n\n  .sm\\:mt-10{\n    margin-top:2.5rem;\n  }\n\n  .sm\\:mt-20{\n    margin-top:5rem;\n  }\n\n  .sm\\:mb-0{\n    margin-bottom:0px;\n  }\n\n  .sm\\:mb-10{\n    margin-bottom:2.5rem;\n  }\n\n  .sm\\:mb-20{\n    margin-bottom:5rem;\n  }\n\n  .sm\\:ml-6{\n    margin-left:1.5rem;\n  }\n\n  .sm\\:block{\n    display:block;\n  }\n\n  .sm\\:flex{\n    display:flex;\n  }\n\n  .sm\\:hidden{\n    display:none;\n  }\n\n  .sm\\:w-24{\n    width:6rem;\n  }\n\n  .sm\\:grid-cols-1{\n    grid-template-columns:repeat(1, minmax(0, 1fr));\n  }\n\n  .sm\\:grid-cols-2{\n    grid-template-columns:repeat(2, minmax(0, 1fr));\n  }\n\n  .sm\\:grid-cols-3{\n    grid-template-columns:repeat(3, minmax(0, 1fr));\n  }\n\n  .sm\\:flex-row{\n    flex-direction:row;\n  }\n\n  .sm\\:items-center{\n    align-items:center;\n  }\n\n  .sm\\:items-stretch{\n    align-items:stretch;\n  }\n\n  .sm\\:justify-end{\n    justify-content:flex-end;\n  }\n\n  .sm\\:justify-center{\n    justify-content:center;\n  }\n\n  .sm\\:space-x-3 > :not([hidden]) ~ :not([hidden]){\n    --tw-space-x-reverse:0;\n    margin-right:calc(0.75rem * var(--tw-space-x-reverse));\n    margin-left:calc(0.75rem * calc(1 - var(--tw-space-x-reverse)));\n  }\n\n  .sm\\:space-y-10 > :not([hidden]) ~ :not([hidden]){\n    --tw-space-y-reverse:0;\n    margin-top:calc(2.5rem * calc(1 - var(--tw-space-y-reverse)));\n    margin-bottom:calc(2.5rem * var(--tw-space-y-reverse));\n  }\n\n  .sm\\:space-y-24 > :not([hidden]) ~ :not([hidden]){\n    --tw-space-y-reverse:0;\n    margin-top:calc(6rem * calc(1 - var(--tw-space-y-reverse)));\n    margin-bottom:calc(6rem * var(--tw-space-y-reverse));\n  }\n\n  .sm\\:rounded-lg{\n    border-radius:0.5rem;\n  }\n\n  .sm\\:px-0{\n    padding-left:0px;\n    padding-right:0px;\n  }\n\n  .sm\\:px-6{\n    padding-left:1.5rem;\n    padding-right:1.5rem;\n  }\n\n  .sm\\:px-12{\n    padding-left:3rem;\n    padding-right:3rem;\n  }\n\n  .sm\\:px-20{\n    padding-left:5rem;\n    padding-right:5rem;\n  }\n\n  .sm\\:py-5{\n    padding-top:1.25rem;\n    padding-bottom:1.25rem;\n  }\n\n  .sm\\:pt-0{\n    padding-top:0px;\n  }\n\n  .sm\\:text-left{\n    text-align:left;\n  }\n\n  .sm\\:text-sm{\n    font-size:0.875rem;\n    line-height:1.25rem;\n  }\n\n  .sm\\:text-base{\n    font-size:1rem;\n    line-height:1.5rem;\n  }\n\n  .sm\\:text-xl{\n    font-size:1.25rem;\n    line-height:1.75rem;\n  }\n\n  .sm\\:text-2xl{\n    font-size:1.5rem;\n    line-height:2rem;\n  }\n\n  .sm\\:text-5xl{\n    font-size:3rem;\n    line-height:1;\n  }\n}\n\n@media (min-width: 768px){\n  .md\\:mt-10{\n    margin-top:2.5rem;\n  }\n\n  .md\\:block{\n    display:block;\n  }\n\n  .md\\:flex{\n    display:flex;\n  }\n\n  .md\\:hidden{\n    display:none;\n  }\n\n  .md\\:max-w-sm{\n    max-width:24rem;\n  }\n\n  .md\\:grid-cols-2{\n    grid-template-columns:repeat(2, minmax(0, 1fr));\n  }\n\n  .md\\:grid-cols-3{\n    grid-template-columns:repeat(3, minmax(0, 1fr));\n  }\n\n  .md\\:space-y-10 > :not([hidden]) ~ :not([hidden]){\n    --tw-space-y-reverse:0;\n    margin-top:calc(2.5rem * calc(1 - var(--tw-space-y-reverse)));\n    margin-bottom:calc(2.5rem * var(--tw-space-y-reverse));\n  }\n\n  .md\\:px-20{\n    padding-left:5rem;\n    padding-right:5rem;\n  }\n\n  .md\\:text-3xl{\n    font-size:1.875rem;\n    line-height:2.25rem;\n  }\n\n  .md\\:text-7xl{\n    font-size:4.5rem;\n    line-height:1;\n  }\n}\n\n@media (min-width: 1024px){\n  .lg\\:mb-0{\n    margin-bottom:0px;\n  }\n\n  .lg\\:block{\n    display:block;\n  }\n\n  .lg\\:h-screen{\n    height:100vh;\n  }\n\n  .lg\\:h-screen-70{\n    height:70vh;\n  }\n\n  .lg\\:max-h-20{\n    max-height:5rem;\n  }\n\n  .lg\\:max-h-128{\n    max-height:32rem;\n  }\n\n  .lg\\:min-h-screen-50{\n    min-height:50vh;\n  }\n\n  .lg\\:w-32{\n    width:8rem;\n  }\n\n  .lg\\:grid-cols-3{\n    grid-template-columns:repeat(3, minmax(0, 1fr));\n  }\n\n  .lg\\:grid-cols-4{\n    grid-template-columns:repeat(4, minmax(0, 1fr));\n  }\n\n  .lg\\:px-8{\n    padding-left:2rem;\n    padding-right:2rem;\n  }\n\n  .lg\\:px-20{\n    padding-left:5rem;\n    padding-right:5rem;\n  }\n\n  .lg\\:px-44{\n    padding-left:11rem;\n    padding-right:11rem;\n  }\n\n  .lg\\:text-4xl{\n    font-size:2.25rem;\n    line-height:2.5rem;\n  }\n\n  .lg\\:text-8xl{\n    font-size:6rem;\n    line-height:1;\n  }\n}\n\n@media (min-width: 1280px){\n  .xl\\:mb-5{\n    margin-bottom:1.25rem;\n  }\n\n  .xl\\:block{\n    display:block;\n  }\n\n  .xl\\:h-screen{\n    height:100vh;\n  }\n\n  .xl\\:max-h-24{\n    max-height:6rem;\n  }\n\n  .xl\\:min-h-screen-75{\n    min-height:75vh;\n  }\n\n  .xl\\:grid-cols-6{\n    grid-template-columns:repeat(6, minmax(0, 1fr));\n  }\n\n  .xl\\:space-y-16 > :not([hidden]) ~ :not([hidden]){\n    --tw-space-y-reverse:0;\n    margin-top:calc(4rem * calc(1 - var(--tw-space-y-reverse)));\n    margin-bottom:calc(4rem * var(--tw-space-y-reverse));\n  }\n\n  .xl\\:px-64{\n    padding-left:16rem;\n    padding-right:16rem;\n  }\n\n  .xl\\:px-72{\n    padding-left:18rem;\n    padding-right:18rem;\n  }\n\n  .xl\\:px-80{\n    padding-left:20rem;\n    padding-right:20rem;\n  }\n}\n\n@media (min-width: 1536px){\n  .\\32xl\\:mb-0{\n    margin-bottom:0px;\n  }\n\n  .\\32xl\\:px-96{\n    padding-left:24rem;\n    padding-right:24rem;\n  }\n\n  .\\32xl\\:px-128{\n    padding-left:32rem;\n    padding-right:32rem;\n  }\n}",""]),r.locals={},n.exports=r},261:function(n,e,t){var content=t(262);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[n.i,content,""]]),content.locals&&(n.exports=content.locals);(0,t(47).default)("09611f61",content,!0,{sourceMap:!1})},262:function(n,e,t){var r=t(46)((function(i){return i[1]}));r.push([n.i,"/*purgecss start ignore*/\n\nhtml{\n  scroll-behavior:smooth!important\n}\n\n/*purgecss end ignore*/",""]),r.locals={},n.exports=r},263:function(n,e,t){var content=t(264);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[n.i,content,""]]),content.locals&&(n.exports=content.locals);(0,t(47).default)("668c047e",content,!0,{sourceMap:!1})},264:function(n,e,t){var r=t(46)((function(i){return i[1]}));r.push([n.i,"/*purgecss start ignore*/\n\n:root{\n  --float-up-origin-pos:-2vh;\n  --desktop-scroll-midpoint:28px;\n  --mobile-scroll-midpoint:-17px;\n  --svg-translate-origin-pos:0\n}\n\n.wave-hand{\n  -webkit-animation-name:wave-hand-animation;\n          animation-name:wave-hand-animation;\n  -webkit-animation-duration:2s;\n          animation-duration:2s;\n  -webkit-animation-iteration-count:infinite;\n          animation-iteration-count:infinite;\n  transform-origin:70% 70%\n}\n\n@-webkit-keyframes wave-hand-animation{\n  0%{\n    transform:rotate(0deg)\n  }\n\n  10%{\n    transform:rotate(14deg)\n  }\n\n  20%{\n    transform:rotate(-8deg)\n  }\n\n  30%{\n    transform:rotate(14deg)\n  }\n\n  40%{\n    transform:rotate(-4deg)\n  }\n\n  50%{\n    transform:rotate(10deg)\n  }\n\n  60%{\n    transform:rotate(0deg)\n  }\n\n  to{\n    transform:rotate(0deg)\n  }\n}\n\n@keyframes wave-hand-animation{\n  0%{\n    transform:rotate(0deg)\n  }\n\n  10%{\n    transform:rotate(14deg)\n  }\n\n  20%{\n    transform:rotate(-8deg)\n  }\n\n  30%{\n    transform:rotate(14deg)\n  }\n\n  40%{\n    transform:rotate(-4deg)\n  }\n\n  50%{\n    transform:rotate(10deg)\n  }\n\n  60%{\n    transform:rotate(0deg)\n  }\n\n  to{\n    transform:rotate(0deg)\n  }\n}\n\n.ellipse-wheel{\n  -webkit-animation-name:float-down;\n          animation-name:float-down;\n  -webkit-animation-duration:2s;\n          animation-duration:2s;\n  -webkit-animation-iteration-count:infinite;\n          animation-iteration-count:infinite\n}\n\n@-webkit-keyframes float-down{\n  0%{\n    transform:translateY(0);\n    transform:translateY(var(--svg-translate-origin-pos))\n  }\n\n  50%{\n    transform:translateY(28px);\n    transform:translateY(var(--desktop-scroll-midpoint))\n  }\n\n  to{\n    transform:translateY(0);\n    transform:translateY(var(--svg-translate-origin-pos))\n  }\n}\n\n@keyframes float-down{\n  0%{\n    transform:translateY(0);\n    transform:translateY(var(--svg-translate-origin-pos))\n  }\n\n  50%{\n    transform:translateY(28px);\n    transform:translateY(var(--desktop-scroll-midpoint))\n  }\n\n  to{\n    transform:translateY(0);\n    transform:translateY(var(--svg-translate-origin-pos))\n  }\n}\n\n.ellipse-wheel-small{\n  -webkit-animation-name:float-opposite;\n          animation-name:float-opposite;\n  -webkit-animation-duration:2s;\n          animation-duration:2s;\n  -webkit-animation-iteration-count:infinite;\n          animation-iteration-count:infinite\n}\n\n@-webkit-keyframes float-opposite{\n  0%{\n    transform:translateY(0);\n    transform:translateY(var(--svg-translate-origin-pos))\n  }\n\n  50%{\n    transform:translateY(-17px);\n    transform:translateY(var(--mobile-scroll-midpoint))\n  }\n\n  to{\n    transform:translateY(0);\n    transform:translateY(var(--svg-translate-origin-pos))\n  }\n}\n\n@keyframes float-opposite{\n  0%{\n    transform:translateY(0);\n    transform:translateY(var(--svg-translate-origin-pos))\n  }\n\n  50%{\n    transform:translateY(-17px);\n    transform:translateY(var(--mobile-scroll-midpoint))\n  }\n\n  to{\n    transform:translateY(0);\n    transform:translateY(var(--svg-translate-origin-pos))\n  }\n}\n\n.scroll-down-arrow{\n  -webkit-animation-name:float-up;\n          animation-name:float-up;\n  -webkit-animation-duration:2s;\n          animation-duration:2s;\n  -webkit-animation-iteration-count:infinite;\n          animation-iteration-count:infinite\n}\n\n@-webkit-keyframes float-up{\n  0%{\n    transform:translateY(-2vh);\n    transform:translateY(var(--float-up-origin-pos))\n  }\n\n  50%{\n    transform:translateY(0);\n    transform:translateY(var(--svg-translate-origin-pos))\n  }\n\n  to{\n    transform:translateY(-2vh);\n    transform:translateY(var(--float-up-origin-pos))\n  }\n}\n\n@keyframes float-up{\n  0%{\n    transform:translateY(-2vh);\n    transform:translateY(var(--float-up-origin-pos))\n  }\n\n  50%{\n    transform:translateY(0);\n    transform:translateY(var(--svg-translate-origin-pos))\n  }\n\n  to{\n    transform:translateY(-2vh);\n    transform:translateY(var(--float-up-origin-pos))\n  }\n}\n\n/*purgecss end ignore*/",""]),r.locals={},n.exports=r}},[[195,20,1,21]]]);