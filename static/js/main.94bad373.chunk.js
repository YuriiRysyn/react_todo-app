(this["webpackJsonpreact_todo-app"]=this["webpackJsonpreact_todo-app"]||[]).push([[0],[,,,,,,,,,function(e,t,n){e.exports=n(17)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var o=n(0),a=n.n(o),c=n(7),l=n.n(c),r=(n(14),n(15),n(16),n(2)),u=n(1),i=n(3),s=n.n(i),m=function(e){var t=e.todo,n=e.onToggleToDo,c=e.removeTodo,l=e.changeTodo,r=Object(o.useState)(!1),i=Object(u.a)(r,2),m=i[0],d=i[1],f=Object(o.useState)(t.title),p=Object(u.a)(f,2),b=p[0],E=p[1];return a.a.createElement("li",{className:s()({completed:t.completed,editing:m}),onDoubleClick:function(){return d(!m)}},m?a.a.createElement("input",{type:"text",className:"edit",value:b,autoFocus:!0,onChange:function(e){return E(e.target.value)},onKeyUp:function(e){"Enter"===e.key&&(b?l(t.id,b.trim()):c(t.id),d(!1)),"Escape"===e.key&&(E(t.title),d(!1))},onBlur:function(e){b?l(t.id,b.trim()):c(t.id),d(!1)}}):a.a.createElement("div",{className:"view"},a.a.createElement("input",{type:"checkbox",className:"toggle",checked:t.completed,onChange:function(e){return n(e,t.id)}}),a.a.createElement("label",null,t.title),a.a.createElement("button",{type:"button",className:"destroy",onClick:function(){return c(t.id)}})))},d=function(e){var t=e.todos,n=e.setTodos,o=e.removeTodo,c=e.changeTodo,l=function(e,t){n((function(e){return e.map((function(e){return e.id===t?Object(r.a)(Object(r.a)({},e),{},{completed:!e.completed}):e}))}))};return a.a.createElement("ul",{className:"todo-list"},t.map((function(e){return a.a.createElement(m,{key:e.id,todo:e,onToggleToDo:l,removeTodo:o,changeTodo:c})})))},f=n(8),p=function(e){var t=e.todos,n=e.setTodos,c=Object(o.useState)(""),l=Object(u.a)(c,2),r=l[0],i=l[1];return a.a.createElement("form",{onSubmit:function(e){return function(e){e.preventDefault(),""!==r.trim()&&(n((function(e){return[].concat(Object(f.a)(e),[{title:r,id:0===t.length?1:t.reduce((function(e,t){return e>t.id?e:t.id}),0)+1,completed:!1}])})),i(""))}(e)}},a.a.createElement("input",{type:"text",className:"new-todo",placeholder:"What needs to be done?",value:r,onChange:function(e){var t=e.target;return i(t.value)}}))},b=function(e){var t=e.filterForTodos,n=e.setFilterForTodos,o=e.FILTERS,c=function(e,t){e.preventDefault(),n(t)};return a.a.createElement("ul",{className:"filters"},a.a.createElement("li",null,a.a.createElement("a",{href:"#/",className:s()({selected:t===o.all}),onClick:function(e){return c(e,o.all)}},"All")),a.a.createElement("li",null,a.a.createElement("a",{href:"#/active",className:s()({selected:t===o.active}),onClick:function(e){return c(e,o.active)}},"Active")),a.a.createElement("li",null,a.a.createElement("a",{href:"#/completed",className:s()({selected:t===o.completed}),onClick:function(e){return c(e,o.completed)}},"Completed")))},E={all:"All",active:"Active",completed:"Completed"},g=function(){var e=Object(o.useState)([]),t=Object(u.a)(e,2),n=t[0],c=t[1],l=Object(o.useState)(E.all),i=Object(u.a)(l,2),s=i[0],m=i[1],f=Object(o.useState)(""),g=Object(u.a)(f,2),O=g[0],h=g[1],v=Object(o.useState)(""),j=Object(u.a)(v,2),T=j[0],N=j[1],k=Object(o.useState)(!1),S=Object(u.a)(k,2),y=S[0],C=S[1];Object(o.useEffect)((function(){JSON.parse(localStorage.getItem("todos"))&&c(JSON.parse(localStorage.getItem("todos")))}),[]);var F=Object(o.useMemo)((function(){return s===E.all?n:n.filter((function(e){return s===E.completed?e.completed:!e.completed}))}),[s,n]);Object(o.useEffect)((function(){h((function(){return n.filter((function(e){return!e.completed}))})),N((function(){return n.filter((function(e){return e.completed}))})),C((function(){return n.every((function(e){return!0===e.completed}))})),localStorage.setItem("todos",JSON.stringify(n))}),[n]);var I=Object(o.useCallback)((function(){c((function(e){return e.map((function(e){return Object(r.a)(Object(r.a)({},e),{},{completed:!y})}))}))}),[y]);return a.a.createElement("section",{className:"todoapp"},a.a.createElement("header",{className:"header"},a.a.createElement("h1",null,"todos"),a.a.createElement(p,{todos:n,setTodos:c})),0!==n.length?a.a.createElement(a.a.Fragment,null,a.a.createElement("section",{className:"main"},a.a.createElement("input",{type:"checkbox",id:"toggle-all",className:"toggle-all",checked:y,onChange:function(){return I()}}),a.a.createElement("label",{htmlFor:"toggle-all"},"Mark all as complete"),a.a.createElement(d,{todos:F,setTodos:c,removeTodo:function(e){c(n.filter((function(t){return t.id!==e})))},changeTodo:function(e,t){c((function(n){return n.map((function(n){return n.id===e?Object(r.a)(Object(r.a)({},n),{},{title:t}):n}))}))}})),a.a.createElement("footer",{className:"footer"},a.a.createElement("span",{className:"todo-count"},O.length,1===O.length?" item ":" items ","left"),a.a.createElement(b,{todos:n,filterForTodos:s,setFilterForTodos:m,FILTERS:E}),T.length>0?a.a.createElement("button",{type:"button",className:"clear-completed",onClick:function(){return c(O)}},"Clear completed"):"")):"")};l.a.render(a.a.createElement(g,null),document.getElementById("root"))}],[[9,1,2]]]);
//# sourceMappingURL=main.94bad373.chunk.js.map