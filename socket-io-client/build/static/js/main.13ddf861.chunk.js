(this["webpackJsonpsocket-io-client"]=this["webpackJsonpsocket-io-client"]||[]).push([[0],{13:function(e,t,n){},15:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var c=n(1),i=n.n(c),s=n(7),r=n.n(s),o=(n(13),n(8)),a=n(2),u=n(3),d=n(5),l=n(4),j=n(0),h=function(e){Object(d.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(a.a)(this,n);for(var c=arguments.length,i=new Array(c),s=0;s<c;s++)i[s]=arguments[s];return(e=t.call.apply(t,[this].concat(i))).hideUsers=function(){document.getElementById("hide-users").innerText.match("\u276f")?(document.querySelector("#profile").classList.toggle("hide-animation"),document.querySelector("#users").classList.toggle("hide"),document.getElementById("hide-users").innerText=" \u276e Hide users"):(document.querySelector("#profile").classList.toggle("hide-animation"),document.querySelector("#users").classList.toggle("hide"),document.getElementById("hide-users").innerText="\u276f")},e}return Object(u.a)(n,[{key:"render",value:function(){var e=this;return Object(j.jsxs)("section",{id:"chat-main-container",children:[Object(j.jsxs)("div",{id:"profile",children:[Object(j.jsx)("div",{id:"hide-users",onClick:function(){return e.hideUsers()},children:" \u276e Hide users"}),Object(j.jsxs)("div",{id:"users",children:["Users Online",Object(j.jsx)("p",{id:"users-connected",children:"1 user(s) connected!"}),Object(j.jsx)("span",{className:"username"})]})]}),Object(j.jsxs)("div",{id:"chat-container",children:[Object(j.jsx)("ul",{id:"messages"}),Object(j.jsxs)("form",{id:"form",action:"",children:[Object(j.jsx)("p",{id:"typing"}),Object(j.jsx)("input",{id:"input",autoComplete:"off",maxLength:"256",placeholder:"Type your message..."}),Object(j.jsx)("button",{children:"Send"})]})]})]})}}]),n}(i.a.Component),m=function(e){Object(d.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(a.a)(this,n);for(var c=arguments.length,i=new Array(c),s=0;s<c;s++)i[s]=arguments[s];return(e=t.call.apply(t,[this].concat(i))).hidePage=function(){document.querySelector("#welcome-page").classList.add("hidden"),document.querySelector("#input").focus()},e.hidePageEnter=function(){document.getElementById("username-input").addEventListener("keypress",(function(t){"Enter"==t.key&&(e.hidePage(),document.querySelector("#input").focus())}))},e}return Object(u.a)(n,[{key:"render",value:function(){var e=this;return Object(j.jsxs)("section",{id:"welcome-page",children:[Object(j.jsxs)("div",{id:"page-container",children:[Object(j.jsx)("p",{id:"welcome-text",children:"Welcome to Xenochat!"}),Object(j.jsx)("p",{id:"welcome-subtext",children:"Please select a username."}),Object(j.jsxs)("div",{id:"username-container",children:[Object(j.jsx)("p",{id:"username-text",children:"Username: "}),Object(j.jsx)("input",{id:"username-input",name:"username-input",maxLength:"16",onKeyPress:function(){return e.hidePageEnter()},autoFocus:!0},"usernameInput"),Object(j.jsx)("button",{type:"submit",id:"username-button",onClick:function(){return e.hidePage()},children:"Confirm"})]})]}),Object(j.jsx)("div",{style:{overflow:"hidden"},id:"svg-container",children:Object(j.jsxs)("svg",{preserveAspectRatio:"none",viewBox:"0 0 1200 120",xmlns:"http://www.w3.org/2000/svg",children:[Object(j.jsx)("path",{d:"M0 0v46.29c47.79 22.2 103.59 32.17 158 28 70.36-5.37 136.33-33.31 206.8-37.5 73.84-4.36 147.54 16.88 218.2 35.26 69.27 18 138.3 24.88 209.4 13.08 36.15-6 69.85-17.84 104.45-29.34C989.49 25 1113-14.29 1200 52.47V0z",opacity:".25"}),Object(j.jsx)("path",{d:"M0 0v15.81c13 21.11 27.64 41.05 47.69 56.24C99.41 111.27 165 111 224.58 91.58c31.15-10.15 60.09-26.07 89.67-39.8 40.92-19 84.73-46 130.83-49.67 36.26-2.85 70.9 9.42 98.6 31.56 31.77 25.39 62.32 62 103.63 73 40.44 10.79 81.35-6.69 119.13-24.28s75.16-39 116.92-43.05c59.73-5.85 113.28 22.88 168.9 38.84 30.2 8.66 59 6.17 87.09-7.5 22.43-10.89 48-26.93 60.65-49.24V0z",opacity:".5"}),Object(j.jsx)("path",{d:"M0 0v5.63C149.93 59 314.09 71.32 475.83 42.57c43-7.64 84.23-20.12 127.61-26.46 59-8.63 112.48 12.24 165.56 35.4C827.93 77.22 886 95.24 951.2 90c86.53-7 172.46-45.71 248.8-84.81V0z"})]})})]})}}]),n}(i.a.Component);n(15);var b=function(){var e=i.a.useState(null),t=Object(o.a)(e,2),n=t[0],c=t[1];return i.a.useEffect((function(){fetch("/api").then((function(e){return e.json()})).then((function(e){return c(e.message)}))}),[]),[Object(j.jsx)("div",{id:"backend-test",style:{position:"absolute"},children:n||"Loading..."}),Object(j.jsx)(m,{}),Object(j.jsx)(h,{})]},p=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,s=t.getLCP,r=t.getTTFB;n(e),c(e),i(e),s(e),r(e)}))};r.a.render(Object(j.jsx)(b,{}),document.getElementById("root")),p()}},[[16,1,2]]]);
//# sourceMappingURL=main.13ddf861.chunk.js.map