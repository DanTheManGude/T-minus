(this["webpackJsonpt-minus"]=this["webpackJsonpt-minus"]||[]).push([[0],{11:function(t,e,a){"use strict";a.r(e);var s=a(1),n=a.n(s),i=a(4),u=a.n(i),c=(a(9),a(2)),o=["https://www.nasa.gov/sites/default/files/thumbnails/image/potw2039a.jpg","https://www.nasa.gov/sites/default/files/thumbnails/image/hubble_snowman_wfc3_display.jpg","https://www.nasa.gov/sites/default/files/thumbnails/image/hubble_deml249_large_3mb.jpg","https://www.nasa.gov/sites/default/files/thumbnails/image/hubble_ngc2903_potw2143a.jpg.jpg","https://www.nasa.gov/sites/default/files/thumbnails/image/potw2138a.jpg","https://www.nasa.gov/sites/default/files/thumbnails/image/arp299.jpg","https://www.nasa.gov/sites/default/files/thumbnails/image/potw2103a.jpg"],r=a(0);var l=function(t){var e=t.time,a=t.isRunning,s=t.setTime,n=Math.floor(e/60),i=e%60;return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("input",{className:"minutesInput",disabled:a,type:"text",value:n,autoComplete:"false",onChange:function(t){var e=t.target.value;s(60*e)}})," ",":",i]})};var b=function(t){var e=t.isRunning,a=t.setIsRunning;return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("button",{disabled:e,children:"Restart"}),Object(r.jsx)("button",{onClick:function(){a(!e)},children:e?"Stop":"Start"})]})};var j=function(t){var e=t.mainTask,a=t.setMainTask;return Object(r.jsx)("input",{className:"mainTaskInput",type:"text",value:e,autoComplete:"false",onChange:function(t){var e=t.target.value;a(e)}})};var g=function(t){var e=t.mainTask,a=t.setMainTask,n=Object(s.useState)(1200),i=Object(c.a)(n,2),u=i[0],o=i[1],g=Object(s.useState)(!1),m=Object(c.a)(g,2),p=m[0],h=m[1];return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(j,{mainTask:e,setMainTask:a}),Object(r.jsx)(l,{time:u,setTime:o,isRunning:p}),Object(r.jsx)(b,{isRunning:p,setIsRunning:h})]})};var m=function(){var t=Object(s.useState)("This is the thing to focus on"),e=Object(c.a)(t,2),a=e[0],n=e[1],i=Object(s.useState)(),u=Object(c.a)(i,2),l=u[0],b=u[1];return Object(s.useEffect)((function(){b(o[Math.floor(Math.random()*o.length)])}),[]),Object(r.jsx)("div",{className:"app",style:{background:"url(".concat(l,")"),backgroundPosition:"center",backgroundRepeat:"no-repeat",backgroundSize:"cover"},children:Object(r.jsx)(g,{mainTask:a,setMainTask:n})})};u.a.render(Object(r.jsx)(n.a.StrictMode,{children:Object(r.jsx)(m,{})}),document.getElementById("root"))},9:function(t,e,a){}},[[11,1,2]]]);
//# sourceMappingURL=main.6a18bfd6.chunk.js.map