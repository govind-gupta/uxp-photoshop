(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{N4rk:function(e,t,o){e.exports=o.p+"static/illustration-0ba8885e144a3ca6e035ff8169f29132.png"},eNq8:function(e,t,o){"use strict";o.r(t),o.d(t,"_frontmatter",(function(){return l})),o.d(t,"default",(function(){return x}));var n=o("wx14"),i=o("zLVn"),a=(o("q1tI"),o("7ljp")),r=o("LHWr"),s=o("unvl"),l=(o("qKvR"),{}),d=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(a.mdx)("div",t)}},p=d("Hero"),c=d("Resources"),u=d("InlineAlert"),m=d("DiscoverBlock"),h={_frontmatter:l},b=r.a;function x(e){var t=e.components,r=Object(i.a)(e,["components"]);return Object(a.mdx)(b,Object(n.a)({},h,r,{components:t,mdxType:"MDXLayout"}),Object(a.mdx)(p,{slots:"image, heading, text",background:"rgb(64, 34, 138)",mdxType:"Hero"}),Object(a.mdx)("p",null,Object(a.mdx)("img",{alt:"Hero image",src:o("N4rk")})),Object(a.mdx)("h1",{id:"uxp-for-adobe-photoshop-documentation"},"UXP for Adobe Photoshop documentation"),Object(a.mdx)("p",null,"UXP (",Object(a.mdx)("strong",{parentName:"p"},"U"),"nified E",Object(a.mdx)("strong",{parentName:"p"},"x"),"tensibility ",Object(a.mdx)("strong",{parentName:"p"},"P"),"latform) lets you build plugins for Photoshop and other Creative Cloud apps. Automate workflows, build new features, and connect to other software and services—all with HTML, CSS, and JavaScript."),Object(a.mdx)(c,{slots:"heading, links",mdxType:"Resources"}),Object(a.mdx)("h4",{id:"resources"},"Resources"),Object(a.mdx)("ul",null,Object(a.mdx)("li",{parentName:"ul"},Object(a.mdx)("a",Object(n.a)({parentName:"li"},{href:"guides/"}),"Getting Started Guide")),Object(a.mdx)("li",{parentName:"ul"},Object(a.mdx)("a",Object(n.a)({parentName:"li"},{href:"ps_reference/"}),"Photoshop API")),Object(a.mdx)("li",{parentName:"ul"},Object(a.mdx)("a",Object(n.a)({parentName:"li"},{href:"uxp/reference-js/"}),"UXP API")),Object(a.mdx)("li",{parentName:"ul"},Object(a.mdx)("a",Object(n.a)({parentName:"li"},{href:"/uxp-photoshop/distribution/"}),"Sharing your plugin"))),Object(a.mdx)("h2",{id:"overview"},"Overview"),Object(a.mdx)("p",null,"This documentation helps developers build plugins for Adobe Photoshop versions 22.0 and later. If you're building plugins for earlier versions of Photoshop, see the ",Object(a.mdx)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/Adobe-CEP/Getting-Started-guides",target:"_blank",rel:"nofollow noopener noreferrer"}),"CEP Getting Started Guides"),"."),Object(a.mdx)("p",null,"UXP provides modern JavaScript, a curated selection of UI components, and a more streamlined workflow for plugin developers."),Object(a.mdx)("p",null,"With UXP, you can develop:"),Object(a.mdx)("ul",null,Object(a.mdx)("li",{parentName:"ul"},"Direct Actions - headless plugins that interface with Photoshop, the host OS, and the network, free of any UI."),Object(a.mdx)("li",{parentName:"ul"},"Modal Dialogs - plugins that implement one or more modal dialogs. Good for simple user interfaces that don't need to persist."),Object(a.mdx)("li",{parentName:"ul"},"Panels - full-featured panels that look like any other panel in Photoshop. UXP panels can contain as complex a UI as you wish to develop. They can be resized, docked, opened and closed just like native Photoshop panels. And with appropriate CSS constructs, your UXP panels can be theme-aware and change as the user switches UI themes in Photoshop.")),Object(a.mdx)(u,{variant:"info",slots:"text",mdxType:"InlineAlert"}),Object(a.mdx)("p",null,Object(a.mdx)("strong",{parentName:"p"},"IMPORTANT"),":\nWhile this documentation set talks exclusively about Photoshop plugins created using UXP, earlier methods of controlling Photoshop, including CEP (Common Extensibility Platform) and ExtendScript continue to be supported. Over time these earlier technologies will be deprecated and then removed from Photoshop, but there is no need to rush to convert your existing plugins to UXP."),Object(a.mdx)("h2",{id:"discover"},"Discover"),Object(a.mdx)(m,{width:"100%",slots:"heading, link, text",mdxType:"DiscoverBlock"}),Object(a.mdx)("h3",{id:"get-started"},"Get Started"),Object(a.mdx)("p",null,Object(a.mdx)("a",Object(n.a)({parentName:"p"},{href:"guides/"}),"Getting Started Guide")),Object(a.mdx)("p",null,"Get started with UXP for Adobe Photoshop."),Object(a.mdx)(m,{slots:"heading, link, text",mdxType:"DiscoverBlock"}),Object(a.mdx)("h3",{id:"guides"},"Guides"),Object(a.mdx)("p",null,Object(a.mdx)("a",Object(n.a)({parentName:"p"},{href:"guides/uxp_for_you/"}),"Photoshop UXP for You")),Object(a.mdx)("p",null,"What experience do you have with previous Photoshop plugin solutions? Here's what you'll need to learn based on what you already know."),Object(a.mdx)(m,{slots:"link, text",mdxType:"DiscoverBlock"}),Object(a.mdx)("p",null,Object(a.mdx)("a",Object(n.a)({parentName:"p"},{href:"/uxp-photoshop/design/"}),"Designing plugins for Photoshop")),Object(a.mdx)("p",null,"Here are some key design principles for UXP plugins in Photoshop. Learn the high level UI/UX patterns, and understand the different kinds of UI your plugin can present."),Object(a.mdx)(m,{slots:"link, text",mdxType:"DiscoverBlock"}),Object(a.mdx)("p",null,Object(a.mdx)("a",Object(n.a)({parentName:"p"},{href:"guides/ps_basics/"}),"Photoshop API Basics")),Object(a.mdx)("p",null,"For UXP, Photoshop exposes a new API which differs from the one exposed for CEP and ExtendScript."),Object(a.mdx)(m,{slots:"link, text",mdxType:"DiscoverBlock"}),Object(a.mdx)("p",null,Object(a.mdx)("a",Object(n.a)({parentName:"p"},{href:"guides/uxp-developer-tool/"}),"UXP Developer Tool")),Object(a.mdx)("p",null,"The UXP Developer Tool is a GUI app that helps you create, debug, and distribute plugins. It's an essential part of any UXP plugin workflow."),Object(a.mdx)(m,{slots:"link, text",mdxType:"DiscoverBlock"}),Object(a.mdx)("p",null,Object(a.mdx)("a",Object(n.a)({parentName:"p"},{href:"code_samples/"}),"Sample Code")),Object(a.mdx)("p",null,"Want to jump right in building a plugin? Check out these code samples and make immediate progress."),Object(a.mdx)("h2",{id:"api-references"},"API References"),Object(a.mdx)("p",null,"The APIs come in two parts: the methods and properties unique to Photoshop, and those exposed by UXP to all UXP-enabled Creative Cloud applications."),Object(a.mdx)(m,{slots:"link, text",mdxType:"DiscoverBlock"}),Object(a.mdx)("p",null,Object(a.mdx)("a",Object(n.a)({parentName:"p"},{href:"ps_reference/"}),"Photoshop API")),Object(a.mdx)("p",null,"The API Reference for Photoshop calls exposed through UXP."),Object(a.mdx)(m,{slots:"link, text",mdxType:"DiscoverBlock"}),Object(a.mdx)("p",null,Object(a.mdx)("a",Object(n.a)({parentName:"p"},{href:"uxp/reference-js/"}),"UXP API")),Object(a.mdx)("p",null,"The API Reference for UXP itself. Includes UI APIs (including HTML and CSS), file and network I/O, and more."),Object(a.mdx)("h2",{id:"share"},"Share"),Object(a.mdx)("p",null,"You've built the world's greatest plugin. What do you do now? This section explains how to package, distribute, and market your plugin."),Object(a.mdx)(m,{slots:"link, text",mdxType:"DiscoverBlock"}),Object(a.mdx)("p",null,Object(a.mdx)("a",Object(n.a)({parentName:"p"},{href:"distribution/packaging-your-plugin/"}),"Packaging Your Plugin")),Object(a.mdx)("p",null,"Packaging your UXP plugin is a breeze. In many cases, it's just one click away."),Object(a.mdx)(m,{slots:"link, text",mdxType:"DiscoverBlock"}),Object(a.mdx)("p",null,Object(a.mdx)("a",Object(n.a)({parentName:"p"},{href:"distribution/distribution-options/"}),"Options for Distribution")),Object(a.mdx)("p",null,"Did you build a plugin just for yourself, your friends, or your employer? Or do you want to distribute through the Creative Cloud Plugin Marketplace on millions of desktops? Read this section to help you decide."),Object(a.mdx)(m,{slots:"link, text",mdxType:"DiscoverBlock"}),Object(a.mdx)("p",null,Object(a.mdx)("a",Object(n.a)({parentName:"p"},{href:"distribution/submission-checklist/"}),"Submission and Review")),Object(a.mdx)("p",null,"Learn about the review process and associated timelines for Creative Cloud plugins and integrations, and follow our review submission checklist."),Object(a.mdx)(m,{slots:"link, text",mdxType:"DiscoverBlock"}),Object(a.mdx)("p",null,Object(a.mdx)("a",Object(n.a)({parentName:"p"},{href:"distribution/marketing/"}),"Marketing Your Plugin")),Object(a.mdx)("p",null,"Submitting your plugin is only half the battle. Now you have to tell people about it. Read this for some ideas on how to best market your plugin."),Object(a.mdx)(s.default,{mdxType:"Community"}))}x.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-index-md-33886f97ca78e75a0dcf.js.map