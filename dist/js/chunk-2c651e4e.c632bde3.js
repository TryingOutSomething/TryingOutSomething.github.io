(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2c651e4e"],{"62ad":function(e,t,n){"use strict";var r=n("ade3"),a=n("5530"),c=(n("13d5"),n("a9e3"),n("b64b"),n("ac1f"),n("5319"),n("4ec9"),n("d3b7"),n("3ca3"),n("ddb0"),n("caad"),n("159b"),n("2ca0"),n("4b85"),n("2b0e")),o=n("d9f7"),u=n("80d2"),l=["sm","md","lg","xl"],f=function(){return l.reduce((function(e,t){return e[t]={type:[Boolean,String,Number],default:!1},e}),{})}(),i=function(){return l.reduce((function(e,t){return e["offset"+Object(u["n"])(t)]={type:[String,Number],default:null},e}),{})}(),s=function(){return l.reduce((function(e,t){return e["order"+Object(u["n"])(t)]={type:[String,Number],default:null},e}),{})}(),d={col:Object.keys(f),offset:Object.keys(i),order:Object.keys(s)};function b(e,t,n){var r=e;if(null!=n&&!1!==n){if(t){var a=t.replace(e,"");r+="-".concat(a)}return"col"!==e||""!==n&&!0!==n?(r+="-".concat(n),r.toLowerCase()):r.toLowerCase()}}var p=new Map;t["a"]=c["a"].extend({name:"v-col",functional:!0,props:Object(a["a"])(Object(a["a"])(Object(a["a"])(Object(a["a"])({cols:{type:[Boolean,String,Number],default:!1}},f),{},{offset:{type:[String,Number],default:null}},i),{},{order:{type:[String,Number],default:null}},s),{},{alignSelf:{type:String,default:null,validator:function(e){return["auto","start","end","center","baseline","stretch"].includes(e)}},tag:{type:String,default:"div"}}),render:function(e,t){var n=t.props,a=t.data,c=t.children,u=(t.parent,"");for(var l in n)u+=String(n[l]);var f=p.get(u);return f||function(){var e,t;for(t in f=[],d)d[t].forEach((function(e){var r=n[e],a=b(t,e,r);a&&f.push(a)}));var a=f.some((function(e){return e.startsWith("col-")}));f.push((e={col:!a||!n.cols},Object(r["a"])(e,"col-".concat(n.cols),n.cols),Object(r["a"])(e,"offset-".concat(n.offset),n.offset),Object(r["a"])(e,"order-".concat(n.order),n.order),Object(r["a"])(e,"align-self-".concat(n.alignSelf),n.alignSelf),e)),p.set(u,f)}(),e(n.tag,Object(o["a"])(a,{class:f}),c)}})},dc6f:function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("base-body",{attrs:{color:e.bgColour}},[n("v-col",[e._t("title"),e._t("projects")],2)],1)},a=[],c=n("65a7"),o={name:"ContentBody",mixins:[c["a"]]},u=o,l=n("2877"),f=n("6544"),i=n.n(f),s=n("62ad"),d=Object(l["a"])(u,r,a,!1,null,"856390a0",null);t["default"]=d.exports;i()(d,{VCol:s["a"]})}}]);