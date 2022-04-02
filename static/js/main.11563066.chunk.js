(this["webpackJsonpexpence-app"]=this["webpackJsonpexpence-app"]||[]).push([[0],[,,,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(8),c=n.n(a),l=(n(14),n(5)),s=n(2),i=n(1),r=(n(15),n(16),n(0)),u=function(e){var t="card "+e.className;return Object(r.jsx)("div",{className:t,children:e.children})},j=(n(18),function(e){return Object(r.jsx)("div",{className:"expenses-filter",children:Object(r.jsxs)("div",{className:"expenses-filter__control",children:[Object(r.jsx)("label",{children:"Filter by year"}),Object(r.jsxs)("select",{value:e.value,onChange:function(t){e.filteredYear(t.target.value)},children:[Object(r.jsx)("option",{value:"2022",children:"2022"}),Object(r.jsx)("option",{value:"2021",children:"2021"}),Object(r.jsx)("option",{value:"2020",children:"2020"}),Object(r.jsx)("option",{value:"2019",children:"2019"})]})]})})}),o=(n(19),n(20),function(e){var t=e.date.toLocaleString("en-US",{month:"long"}),n=e.date.toLocaleString("en-US",{day:"numeric"}),a=e.date.getFullYear();return Object(r.jsxs)("div",{className:"expense-date",children:[Object(r.jsx)("div",{className:"expense-date__month",children:t}),Object(r.jsx)("div",{className:"expense-date__year",children:a}),Object(r.jsx)("div",{className:"expense-date__day",children:n})]})}),b=function(e){var t=Object(i.useState)(e.title),n=Object(s.a)(t,2),a=n[0];n[1];return Object(r.jsx)("li",{children:Object(r.jsxs)(u,{className:"expense-item",children:[Object(r.jsx)(o,{date:e.date}),Object(r.jsxs)("div",{className:"expense-item__description",children:[Object(r.jsx)("h2",{children:a}),Object(r.jsxs)("div",{className:"expense-item__price",children:["$",e.amount]})]})]})})},d=(n(21),function(e){return 0===e.item.length?Object(r.jsx)("h2",{className:"expenses-list__fallback",children:"Found no expence."}):Object(r.jsx)("ul",{className:"expenses-list",children:e.item.map((function(e){return Object(r.jsx)(b,{title:e.title,amount:e.amount,date:e.date},e.id)}))})}),x=n(9),O=(n(22),function(e){var t="0%";return e.maxValue>0&&(t=Math.round(e.value/e.maxValue*100)+"%"),Object(r.jsxs)("div",{className:"chart-bar",children:[Object(r.jsx)("div",{className:"chart-bar__inner",children:Object(r.jsx)("div",{className:"chart-bar__fill",style:{height:t}})}),Object(r.jsx)("div",{className:"chart-bar__label",children:e.label})]})}),v=(n(23),function(e){return Object(r.jsx)("div",{className:"chart",children:e.chartDatePoints.map((function(t){return Object(r.jsx)(O,{value:t.value,label:t.label,maxValue:e.maxValue},t.label)}))})}),h=function(e){var t,n=[{label:"Jan",value:0},{label:"Feb",value:0},{label:"Mar",value:0},{label:"Apr",value:0},{label:"May",value:0},{label:"Jun",value:0},{label:"Jul",value:0},{label:"Aug",value:0},{label:"Sep",value:0},{label:"Oct",value:0},{label:"Nov",value:0},{label:"Dec",value:0}],a=Object(x.a)(e.expences);try{for(a.s();!(t=a.n()).done;){var c=t.value;n[c.date.getMonth()].value+=c.amount}}catch(u){a.e(u)}finally{a.f()}var s=n.map((function(e){return e.value})),i=Math.max.apply(Math,Object(l.a)(s));return Object(r.jsx)(v,{maxValue:i,chartDatePoints:n})},m=function(e){var t=Object(i.useState)("2020"),n=Object(s.a)(t,2),a=n[0],c=n[1],l=e.item.filter((function(e){return e.date.getFullYear().toString()===a}));return Object(r.jsx)("div",{children:Object(r.jsxs)(u,{className:"expenses",children:[Object(r.jsx)(j,{value:a,filteredYear:function(e){c(e)}}),Object(r.jsx)(h,{expences:l}),Object(r.jsx)(d,{item:l})]})})},p=n(7),f=(n(24),n(25),function(e){var t=Object(i.useState)(""),n=Object(s.a)(t,2),a=n[0],c=n[1],l=Object(i.useState)(""),u=Object(s.a)(l,2),j=u[0],o=u[1],b=Object(i.useState)(""),d=Object(s.a)(b,2),x=d[0],O=d[1];return Object(r.jsxs)("form",{onSubmit:function(t){var n={title:a,amount:+j,date:new Date(x)};c(""),O(""),o(""),e.onSaveExpenceData(n),t.preventDefault()},children:[Object(r.jsxs)("div",{className:"new-expense__controls",children:[Object(r.jsxs)("div",{className:"new-expense__control",children:[Object(r.jsx)("label",{children:"Title"}),Object(r.jsx)("input",{type:"text",value:a,onChange:function(e){c(e.target.value)}})]}),Object(r.jsxs)("div",{className:"new-expense__control",children:[Object(r.jsx)("label",{children:"Amount"}),Object(r.jsx)("input",{type:"number",onChange:function(e){o(e.target.value)},value:j,min:"0.01",step:"0.01"})]}),Object(r.jsxs)("div",{className:"new-expense__control",children:[Object(r.jsx)("label",{children:"Date"}),Object(r.jsx)("input",{value:x,type:"date",onChange:function(e){O(e.target.value)},min:"2019-01-01",max:"2021-12-31"})]})]}),Object(r.jsxs)("div",{className:"new-expense__actions",children:[Object(r.jsx)("button",{type:"submit",children:"Add Expence"}),Object(r.jsx)("button",{type:"button",onClick:e.onStop,children:"Cancel"})]})]})}),_=function(e){var t=Object(i.useState)(!1),n=Object(s.a)(t,2),a=n[0],c=n[1];return Object(r.jsxs)("div",{className:"new-expense",children:[!1===a&&Object(r.jsx)("button",{onClick:function(){c(!0)},children:"Add New Expence"}),!0===a&&Object(r.jsx)(f,{onSaveExpenceData:function(t){var n=Object(p.a)(Object(p.a)({},t),{},{id:Math.random().toString()});e.onAddExpence(n),c(!1)},onStop:function(){c(!1)}})]})},N=[{id:"e1",title:"Toilet Paper",amount:94.12,date:new Date(2020,7,14)},{id:"e2",title:"New TV",amount:799.49,date:new Date(2021,2,12)},{id:"e3",title:"Car Insurance",amount:294.67,date:new Date(2021,2,28)},{id:"e4",title:"New Desk (Wooden)",amount:450,date:new Date(2021,5,12)}];var g=function(){var e=Object(i.useState)(N),t=Object(s.a)(e,2),n=t[0],a=t[1];return Object(r.jsxs)("div",{children:[Object(r.jsx)(_,{onAddExpence:function(e){a((function(t){return[e].concat(Object(l.a)(t))}))}}),Object(r.jsx)(m,{item:n})]})};c.a.render(Object(r.jsx)(g,{}),document.getElementById("root"))}],[[26,1,2]]]);
//# sourceMappingURL=main.11563066.chunk.js.map