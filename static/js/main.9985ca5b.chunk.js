(this.webpackJsonptodolist=this.webpackJsonptodolist||[]).push([[0],{30:function(e,t,c){},31:function(e,t,c){"use strict";c.r(t);var a=c(1),s=c(13),n=c.n(s),l=c.p+"static/media/logo.dfae1499.png",i=c(0),d=function(){return Object(i.jsx)("div",{className:"Header",children:Object(i.jsxs)("nav",{children:[Object(i.jsx)("img",{src:l,className:"logo",alt:"Todolist"}),Object(i.jsx)("h2",{children:"TodoList"})]})})},r=c(2),j=function(e){var t=e.selectedTab,c=e.setSelectedTab;return Object(i.jsxs)("div",{className:"Sidebar",children:[Object(i.jsxs)("div",{className:"All"===t?"active":"",onClick:function(){return c("All")},children:[Object(i.jsx)("i",{className:"fas fa-check-circle"})," All Tasks"]}),Object(i.jsxs)("div",{className:"Today"===t?"active":"",onClick:function(){return c("Today")},children:[Object(i.jsx)("i",{className:"fas fa-angle-double-right"})," Today"]}),Object(i.jsxs)("div",{className:"Week"===t?"active":"",onClick:function(){return c("Week")},children:[Object(i.jsx)("i",{className:"fas fa-calendar-alt"})," Last 7 Days"]})]})},o=c(15),b=c(14),u=c.n(b),O=(c(29),c(9)),x="dd/MM/yyyy";function f(e,t,c){return Object(O.a)(e,t,{locale:c})}var h=function(e){var t=e.onCancel,c=e.onAddTask,s=Object(a.useState)(""),n=Object(r.a)(s,2),l=n[0],d=n[1],j=Object(a.useState)(null),o=Object(r.a)(j,2),b=o[0],h=o[1];return Object(i.jsxs)("div",{className:"task-dialogue",children:[Object(i.jsx)("input",{className:"tskinp",value:l,onChange:function(e){return d(e.target.value)}}),Object(i.jsxs)("div",{className:"task-btn-action-container",children:[Object(i.jsxs)("div",{className:"btn-task-action",children:[Object(i.jsx)("button",{disabled:!l,className:"Add-btn",onClick:function(){c(l,b),t(),d("")},children:"Add task"}),Object(i.jsx)("button",{className:"cancel-btn",onClick:function(){t(),d("")},children:"cancel"})]}),Object(i.jsx)("div",{className:"btn-calender",children:Object(i.jsx)(u.a,{onDayChange:function(e){return h(e)},formatDate:f,format:x,dayPickerProps:{modifiers:{disabled:[{before:new Date}]}},placeholder:Object(O.a)(new Date,x)})})]})]})},m={All:"All",Today:"Today",Week:"Week"},k=function(e){var t=e.selectedTab,c=Object(a.useState)(!1),s=Object(r.a)(c,2),n=s[0],l=s[1],d=Object(a.useState)([]),j=Object(r.a)(d,2),b=j[0],u=j[1];return Object(i.jsxs)("div",{className:"tasks",children:[Object(i.jsx)("h1",{children:m[t]}),Object(i.jsxs)("div",{className:"add-task-btn",onClick:function(){return l((function(e){return!e}))},children:[Object(i.jsx)("span",{className:"plus",children:"+"}),Object(i.jsx)("span",{className:"add-task-text",children:"Add task"})]}),n&&Object(i.jsx)(h,{onAddTask:function(e,t){var c={text:e,date:t||new Date};u((function(e){return[].concat(Object(o.a)(e),[c])}))},onCancel:function(){return l(!1)}}),b.length>0?b.map((function(e){return Object(i.jsxs)("p",{children:[e.text,Object(O.a)(new Date(e.date),x)]})})):Object(i.jsx)("p",{children:"No Task added"})]})},v=function(){var e=Object(a.useState)("All"),t=Object(r.a)(e,2),c=t[0],s=t[1];return Object(i.jsxs)("div",{className:"Content",children:[Object(i.jsx)(j,{selectedTab:c,setSelectedTab:s}),Object(i.jsx)(k,{selectedTab:c})]})},N=(c(30),function(){return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(d,{}),Object(i.jsx)(v,{})]})});n.a.render(Object(i.jsx)(N,{}),document.getElementById("root"))}},[[31,1,2]]]);
//# sourceMappingURL=main.9985ca5b.chunk.js.map