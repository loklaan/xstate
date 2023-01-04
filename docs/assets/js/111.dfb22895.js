(window.webpackJsonp=window.webpackJsonp||[]).push([[111],{597:function(t,a,s){"use strict";s.r(a);var e=s(45),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"installation"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#installation"}},[t._v("#")]),t._v(" Installation")]),t._v(" "),s("p",[t._v("You can install XState from NPM or Yarn, or you can embed the "),s("code",[t._v("<script>")]),t._v(" directly from a CDN.")]),t._v(" "),s("h2",{attrs:{id:"package-manager"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#package-manager"}},[t._v("#")]),t._v(" Package Manager")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" xstate@latest --save\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# or:")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("yarn")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" xstate@latest --save\n")])])]),s("h2",{attrs:{id:"cdn"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#cdn"}},[t._v("#")]),t._v(" CDN")]),t._v(" "),s("p",[t._v("You can include XState directly from the "),s("a",{attrs:{href:"https://unpkg.com/xstate@4/dist/",target:"_blank",rel:"noopener noreferrer"}},[t._v("unpkg CDN"),s("OutboundLink")],1),t._v(":")]),t._v(" "),s("ul",[s("li",[t._v("XState core: "),s("a",{attrs:{href:"https://unpkg.com/xstate@4/dist/xstate.js",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://unpkg.com/xstate@4/dist/xstate.js"),s("OutboundLink")],1)]),t._v(" "),s("li",[t._v("XState web: "),s("a",{attrs:{href:"https://unpkg.com/xstate@4/dist/xstate.web.js",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://unpkg.com/xstate@4/dist/xstate.web.js"),s("OutboundLink")],1),t._v(" "),s("ul",[s("li",[t._v("Browser-friendly, ES module build")])])])]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("src")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("https://unpkg.com/xstate@4/dist/xstate.js"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token script"}}),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("p",[t._v("The variable "),s("code",[t._v("XState")]),t._v(" will be available globally, which will give you access to the top-level exports.")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" createMachine"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" actions"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" interpret "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" XState"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// global variable: window.XState")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" lightMachine "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("createMachine")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ...")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" lightService "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("interpret")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("lightMachine"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])])}),[],!1,null,null,null);a.default=n.exports}}]);