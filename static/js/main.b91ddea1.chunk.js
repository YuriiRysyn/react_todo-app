(this["webpackJsonpreact_todo-app"]=this["webpackJsonpreact_todo-app"]||[]).push([[0],[,,,,,,,,,function(e,t,a){e.exports=a(17)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),c=a(6),l=a.n(c),r=(a(14),a(15),a(16),a(1)),s=a(4),u=a(7),m=a.n(u),i=function(e){var t=e.todo,a=e.onToggleToDo;return o.a.createElement("li",{className:m()({completed:t.completed})},o.a.createElement("div",{className:"view"},o.a.createElement("input",{type:"checkbox",className:"toggle",checked:t.completed,onChange:function(e){return a(e,t.id)}}),o.a.createElement("label",null,t.title),o.a.createElement("button",{type:"button",className:"destroy"})),o.a.createElement("input",{type:"text",className:"edit"}))},d=function(e){var t=e.todos,a=e.setTodos,n=function(e,t){a((function(e){return e.map((function(e){return e.id===t?Object(s.a)(Object(s.a)({},e),{},{completed:!e.completed}):e}))}))};return o.a.createElement("ul",{className:"todo-list"},t.map((function(e){return o.a.createElement(i,{key:e.id,todo:e,onToggleToDo:n})})))},p=a(8),f=function(e){var t=e.todos,a=e.setTodos,c=Object(n.useState)(""),l=Object(r.a)(c,2),s=l[0],u=l[1];return o.a.createElement("form",{onSubmit:function(e){return function(e){e.preventDefault(),""!==s&&(a((function(e){return[].concat(Object(p.a)(e),[{title:s,id:0===t.length?1:t.reduce((function(e,t){return e>t.id?e:t.id}),0)+1,completed:!1}])})),u(""))}(e)}},o.a.createElement("input",{type:"text",className:"new-todo",placeholder:"What needs to be done?",value:s,onChange:function(e){var t=e.target;return u(t.value)}}))},E=function(){return o.a.createElement("ul",{className:"filters"},o.a.createElement("li",null,o.a.createElement("a",{href:"#/",className:"selected"},"All")),o.a.createElement("li",null,o.a.createElement("a",{href:"#/active"},"Active")),o.a.createElement("li",null,o.a.createElement("a",{href:"#/completed"},"Completed")))},b=function(e){var t=e.todos,a=e.setTodos,c=Object(n.useState)(""),l=Object(r.a)(c,2),s=l[0],u=l[1],m=Object(n.useState)(!1),i=Object(r.a)(m,2),p=i[0],b=i[1];return Object(n.useEffect)((function(){u((function(){return t.filter((function(e){return!e.completed}))})),b((function(){return t.every((function(e){return!0===e.completed}))}))}),[t]),o.a.createElement("section",{className:"todoapp"},o.a.createElement("header",{className:"header"},o.a.createElement("h1",null,"todos"),o.a.createElement(f,{todos:t,setTodos:a})),o.a.createElement("section",{className:"main"},o.a.createElement("input",{type:"checkbox",id:"toggle-all",className:"toggle-all",checked:p,onChange:function(){return b(!p)}}),o.a.createElement("label",{htmlFor:"toggle-all"},"Mark all as complete"),o.a.createElement(d,{todos:t,setTodos:a})),o.a.createElement("footer",{className:"footer"},o.a.createElement("span",{className:"todo-count"},s.length,1===s.length?" item ":" items ","left"),o.a.createElement(E,{todos:t}),o.a.createElement("button",{type:"button",className:"clear-completed"},"Clear completed")))},h=[{id:1,title:"first todo",completed:!1},{id:2,title:"second todo",completed:!0}];var g=function(){var e=Object(n.useState)(h),t=Object(r.a)(e,2),a=t[0],c=t[1];return o.a.createElement(b,{todos:a,setTodos:c})};l.a.render(o.a.createElement(g,null),document.getElementById("root"))}],[[9,1,2]]]);
//# sourceMappingURL=main.b91ddea1.chunk.js.map