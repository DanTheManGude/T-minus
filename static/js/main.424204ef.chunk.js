(this["webpackJsonpt-minus"]=this["webpackJsonpt-minus"]||[]).push([[0],{11:function(t,e,a){},13:function(t,e,a){"use strict";a.r(e);var n=a(1),s=a.n(n),c=a(6),i=a.n(c),u=(a(11),a(2)),o=["https://www.nasa.gov/sites/default/files/thumbnails/image/potw2039a.jpg","https://www.nasa.gov/sites/default/files/thumbnails/image/hubble_snowman_wfc3_display.jpg","https://www.nasa.gov/sites/default/files/thumbnails/image/hubble_deml249_large_3mb.jpg","https://www.nasa.gov/sites/default/files/thumbnails/image/hubble_ngc2903_potw2143a.jpg.jpg","https://www.nasa.gov/sites/default/files/thumbnails/image/potw2138a.jpg","https://www.nasa.gov/sites/default/files/thumbnails/image/arp299.jpg","https://www.nasa.gov/sites/default/files/thumbnails/image/potw2103a.jpg"],r={MAIN_TASK:"MAIN_TASK",ORIGINAL_TIME:"ORIGINAL_TIME"},l=a(3),b=a(5),j=function(t,e){localStorage.setItem(t,e)},f=a(0);var g=function(t){var e=t.time,a=t.isRunning,n=t.enterTime,s=Math.floor(e/60),c=e%60;return Object(f.jsxs)("div",{className:"numbersContainer",children:[Object(f.jsx)("input",{className:"minutesInput",readOnly:a,type:"text",value:s,autoComplete:"false",onChange:function(t){var e=t.target.value;n(60*e)},style:a?{cursor:"not-allowed"}:{}}),":",String(c).padStart(2,"0")]})};var m=function(t){var e=t.onResetClick,a=t.isRunning,n=t.setIsRunning;return Object(f.jsxs)("div",{className:"controls",children:[Object(f.jsx)("button",{className:"controls-button",onClick:e,disabled:a,style:{backgroundColor:a?"#aaaaaa":"#f0ad4e",cursor:a?"not-allowed":"pointer"},children:"Reset"}),Object(f.jsx)("button",{className:"controls-button",onClick:function(){n(!a)},style:{backgroundColor:a?"#bb2124":"#22bb33"},children:a?"Stop":"Start"})]})};var d=function(t){var e=t.mainTask,a=t.enterMainTask;return Object(f.jsx)("div",{children:Object(f.jsx)("textarea",{className:"mainTaskInput",type:"text",value:e,autoComplete:"false",onChange:function(t){var e=t.target.value;a(e)}})})};var O=function(t){var e=t.updateBackground,a=Object(n.useState)("Main Task"),s=Object(u.a)(a,2),c=s[0],i=s[1],o=Object(n.useState)(1200),O=Object(u.a)(o,2),p=O[0],v=O[1],h=Object(n.useState)(p),w=Object(u.a)(h,2),I=w[0],k=w[1],x=Object(n.useState)(!1),N=Object(u.a)(x,2),S=N[0],T=N[1],_=Object(n.useState)(),M=Object(u.a)(_,2),R=M[0],A=M[1],C=function(){k(p)};return Object(n.useEffect)((function(){var t=Object.values(r).reduce((function(t,e){var a=localStorage.getItem(e);return Object(b.a)(Object(b.a)({},t),{},Object(l.a)({},e,a))}),{}),e=t[r.ORIGINAL_TIME];e&&(k(e),v(e));var a=t[r.MAIN_TASK];a&&i(a)}),[]),Object(n.useEffect)((function(){if(S){var t=setInterval((function(){k((function(t){return t-1}))}),1e3);A(t)}else R&&clearInterval(R)}),[S]),Object(n.useEffect)((function(){I<=0&&(T(!1),C())}),[I]),Object(f.jsxs)("div",{className:"timer-container",children:[Object(f.jsx)(d,{mainTask:c,enterMainTask:function(t){i(t),j(r.MAIN_TASK,t)}}),Object(f.jsx)(g,{time:I,enterTime:function(t){k(t),v(t),j(r.ORIGINAL_TIME,t)},isRunning:S}),Object(f.jsx)(m,{onResetClick:C,isRunning:S,setIsRunning:T}),Object(f.jsx)("button",{className:"new-background-button",onClick:e,children:"New background"})]})},p=function(){return o[Math.floor(Math.random()*o.length)]};var v=function(){var t=Object(n.useState)(),e=Object(u.a)(t,2),a=e[0],s=e[1];return Object(n.useEffect)((function(){s(p())}),[]),Object(f.jsx)("div",{className:"app",style:{backgroundImage:"url(".concat(a,")")},children:Object(f.jsx)(O,{updateBackground:function(){for(var t=a;t==a;)t=p();s(t)}})})};i.a.render(Object(f.jsx)(s.a.StrictMode,{children:Object(f.jsx)(v,{})}),document.getElementById("root"))}},[[13,1,2]]]);
//# sourceMappingURL=main.424204ef.chunk.js.map