(window.webpackJsonp=window.webpackJsonp||[]).push([[72],{464:function(s,t,a){"use strict";a.r(t);var n=a(0),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey},scopedSlots:s._u([{key:"abstract",fn:function(){return[a("p",[a("a",{attrs:{href:"https://webpack.docschina.org/",target:"_blank",rel:"noopener noreferrer"}},[s._v("Webpack"),a("OutboundLink")],1),s._v(" 是当前前端最热门的前端资源模块化管理和打包工具，一直以来我对 webpack 都只停留在会写一点简单的配置，或者干脆就是复制粘贴的别人的配置文件，可以说是纯萌新")]),s._v(" "),a("p",[s._v("在这次秋招之际，我打算从零开始学习 webpack 的相关知识，并将学习过程中的感悟和遇到的问题总结记录在此处，为“升职加薪”之路踏出第一步")]),s._v(" "),a("blockquote",[a("p",[s._v("虽然在 vite 出来后，有好多的声音在说 vite 将要取代 webpack 成为新一代的主流前端构建工具，但我还是决定先学 webpack 再学 vite ，这是因为 webpack 生态强大、用户量多，而且都是构建工具，其中的一些原理肯定是共通的")])])]},proxy:!0}])},[a("h2",{attrs:{id:"前言"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[s._v("#")]),s._v(" 前言")]),s._v(" "),a("p",[s._v("在开始之前，先来了解一下 webpack 中的三个术语—— "),a("code",[s._v("module")]),s._v(" 、 "),a("code",[s._v("chunk")]),s._v(" 和 "),a("code",[s._v("bundle")])]),s._v(" "),a("h3",{attrs:{id:"概念"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#概念"}},[s._v("#")]),s._v(" 概念")]),s._v(" "),a("p",[s._v("简单总结一下，其实这三者可以说是同一份代码在不同转换场景的不同名称：")]),s._v(" "),a("ul",[a("li",[a("code",[s._v("module")]),s._v(" 模块就是我们编写的代码文件")]),s._v(" "),a("li",[a("code",[s._v("chunk")]),s._v(" 是 webpack 打包过程的中间产物，一般一个 chunk 由一个或多个 module 组成，取决于文件的引入关系")]),s._v(" "),a("li",[a("code",[s._v("bundle")]),s._v(" 是 webpack 打包的最终产物，通常来说，一个  bundle 对应一个 chunk ，而一个 chunk 可以对应多个 bundle")])]),s._v(" "),a("h3",{attrs:{id:"例子"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#例子"}},[s._v("#")]),s._v(" 例子")]),s._v(" "),a("p",[s._v("这里再举个例子吧，现在有一个项目，目录结构如下：")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("src/\n├── index.css\n├── index.js\n├── common.js\n└── utils.js\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("p",[a("code",[s._v("index.js")]),s._v(" 和 "),a("code",[s._v("utils.js")]),s._v(" 两个文件作为入口文件，而在 index.js 中引入了 "),a("code",[s._v("common.js")]),s._v(" 和 "),a("code",[s._v("index.css")]),s._v(" ，以此分析可得：")]),s._v(" "),a("ul",[a("li",[a("p",[s._v("这四个文件都是我们编写的代码文件，因此都是 "),a("code",[s._v("module")])])]),s._v(" "),a("li",[a("p",[s._v("因为有两个入口文件，并且它们最后是独立打包成 "),a("code",[s._v("bundle")]),s._v(" 的，所以在打包过程中会形成两个 "),a("code",[s._v("chunk")])])]),s._v(" "),a("li",[a("p",[s._v("最后，我们打包出来 "),a("code",[s._v("index.bundle.css")]),s._v(" 、 "),a("code",[s._v("index.bundle.js")]),s._v(" 和 "),a("code",[s._v("uitls.bundle.js")]),s._v(" ，这三个也就是 "),a("code",[s._v("bundle")]),s._v(" 文件")])])]),s._v(" "),a("p",[s._v("用一张图来概括如下：")]),s._v(" "),a("p",[a("img",{attrs:{src:"http://upyun.cavalheiro.cn/images/363c4a0f658c408e93b89e95ebeb15c6~tplv-k3u1fbpfcp-watermark.image",alt:"module-chunk-bundle.png"}})]),s._v(" "),a("p",[s._v("（图片来源于：https://juejin.cn/post/6994346951739179039）")]),s._v(" "),a("h2",{attrs:{id:"配置webpack"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置webpack"}},[s._v("#")]),s._v(" 配置Webpack")]),s._v(" "),a("p",[s._v("webpack 在使用时，需要创建并编写一个配置文件—— "),a("code",[s._v("webpack.config.js")])]),s._v(" "),a("p",[s._v("但是在没有这个配置文件的情况下也是可以正常打包的，这是因为 webpack 会有个默认的配置，在检测不到配置文件时使用默认配置，配置内容如下：")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" path "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'path'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\nmodule"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    entry"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'./src/index.js'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    output"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        path"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" path"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("resolve")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("__dirname"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'dist'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        filename"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'main.js'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])]),a("h3",{attrs:{id:"entry和output"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#entry和output"}},[s._v("#")]),s._v(" entry和output")]),s._v(" "),a("p",[a("code",[s._v("entry")]),s._v(" 表示入口文件的配置，数据类型可以是字符串、数组、对象，字符串设置的是单入口，数组和对象则用于设置多入口。webpack 只支持 js 或 json 文件作为入口文件，若是使用了其他类型的文件则会报错，默认值为： "),a("code",[s._v("./src/index.js")])]),s._v(" "),a("p",[a("code",[s._v("output")]),s._v(" 选项表示输出配置， "),a("strong",[s._v("该选项必须是对象类型")]),s._v(" ，在该对象中，有两个必选项：导出路径 "),a("code",[s._v("path")]),s._v(" 和导出文件的 bundle 名 "),a("code",[s._v("filename")]),s._v(" ，其中 filename 必须为 "),a("strong",[s._v("绝对路径")])]),s._v(" "),a("p",[s._v("对于不同的应用场景，这两个选项的配置也会有所不同")]),s._v(" "),a("h4",{attrs:{id:"单入口单输出"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#单入口单输出"}},[s._v("#")]),s._v(" 单入口单输出")]),s._v(" "),a("p",[s._v("最简单也是使用最多的就是单个入口文件打包成单个 bundle 文件，配置内容如下：")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[s._v("module"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    entry"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'./src/index.js'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    output"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        path"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" path"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("resolve")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("__dirname"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'dist'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        filename"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'main.js'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// ...")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 或使用对象形式，后面会详解对象")]),s._v("\nmodule"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    entry"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        main"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'./src/index.js'")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    output"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        path"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" path"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("resolve")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("__dirname"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'dist'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        filename"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'main.js'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// ...")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br")])]),a("h4",{attrs:{id:"多入口单输出"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#多入口单输出"}},[s._v("#")]),s._v(" 多入口单输出")]),s._v(" "),a("p",[s._v("当项目需要多个入口文件而只需要一个输出 bundle 时，可以将 entry 设置为数组")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[s._v("module"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    entry"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'./src/index.js'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'./src/utils.js'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    output"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        path"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" path"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("resolve")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("__dirname"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'dist'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        filename"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'main.js'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// ...")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("blockquote",[a("p",[s._v("注意：此时其实只有一个chunk，因为是单输出")])]),s._v(" "),a("h4",{attrs:{id:"多入口多输出"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#多入口多输出"}},[s._v("#")]),s._v(" 多入口多输出")]),s._v(" "),a("p",[s._v("当项目需要多个入口文件并且需要其单独打包时，这意味着会产生多个 bundle 文件输出，也就是会有多个 chunk ，因此在配置时：")]),s._v(" "),a("ul",[a("li",[s._v("entry 需要使用对象形式，并且对象的 key 对应着 chunk 的名称，即 "),a("code",[s._v("chunkName")]),s._v(" "),a("ul",[a("li",[s._v("语法： "),a("code",[s._v("entry: { <entryChunkName> string | [string] } | {}")])])])]),s._v(" "),a("li",[s._v("output 需要在 filename 中使用 "),a("code",[s._v("[name]")]),s._v(" 占位符来将其自动替换为对应的 "),a("code",[s._v("chunkName")])])]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[s._v("module"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    entry"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    \tindex"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'./src/index.js'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// chunkName为index")]),s._v("\n        utils"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'./src/utils.js'")]),s._v("\t\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// chunkName为utils")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    output"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        path"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" path"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("resolve")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("__dirname"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'dist'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        filename"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'[name].js'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\t\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// [name]占位符会自动替换为chunkName")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// ...")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br")])]),a("p",[s._v("根据如上配置，最终会打包出两个文件："),a("code",[s._v("index.js")]),s._v(" 和 "),a("code",[s._v("utils.js")])]),s._v(" "),a("h4",{attrs:{id:"补充"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#补充"}},[s._v("#")]),s._v(" 补充")]),s._v(" "),a("p",[s._v("在单入口单输出的应用场景下，entry 也可以使用对象的形式，从而来自定义 chunkName ，然后 "),a("code",[s._v("output.filename")]),s._v(" 也使用 "),a("code",[s._v("[name]")]),s._v(" 占位符来自动匹配。当然也可以使用数组，但是没有太大必要")]),s._v(" "),a("p",[s._v("当 entry 使用数组或字符串的时候， "),a("code",[s._v("chunkName")]),s._v(" 默认为 "),a("code",[s._v("main")]),s._v(" ，因此如果 "),a("code",[s._v("output.filename")]),s._v(" 使用 "),a("code",[s._v("[name]")]),s._v(" 占位符的时候，会自动替换为 "),a("code",[s._v("main")])]),s._v(" "),a("h3",{attrs:{id:"mode"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mode"}},[s._v("#")]),s._v(" mode")]),s._v(" "),a("p",[s._v("在运行了上面的例子后，控制台会报如下警告：")]),s._v(" "),a("p",[a("img",{attrs:{src:"http://upyun.cavalheiro.cn/images/image-20210916221704852.png",alt:"image-20210916221704852"}})]),s._v(" "),a("p",[s._v("意思是说我们没有进行打包模式的配置，这时 webpack 默认使用 "),a("code",[s._v("production")]),s._v(" 模式，即生产模式")]),s._v(" "),a("p",[s._v("除此之外还有两个选项： "),a("code",[s._v("none")]),s._v(" 和 "),a("code",[s._v("development")]),s._v(" ，三者之间的区别在于 webpack 对自带的代码压缩和优化插件的使用情况：")]),s._v(" "),a("ul",[a("li",[s._v("none：不使用优化选项")]),s._v(" "),a("li",[s._v("development：表示开发模式，在此模式下会默认开启一些有利于开发调试的选项")])])])}),[],!1,null,null,null);t.default=e.exports}}]);