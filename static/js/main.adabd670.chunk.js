(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],{25:function(e,t,n){},26:function(e,t,n){},31:function(e,t,n){"use strict";n.r(t);var a,c,i,r,s,u,o,b,l=n(2),j=n.n(l),d=n(16),m=n.n(d),O=(n(25),n(11)),f=n(6),x=n(7),h=n(9),p=n(8),g=n(15),v=n(5),C=n(33),y=(n(26),n(3)),S=n(4),w=S.a.form(a||(a=Object(y.a)(["\n  width: 70%;\n  margin-bottom: 50px;\n"]))),k=S.a.label(c||(c=Object(y.a)(["\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 10px;\n\n  font-size: 18px;\n"]))),A=n(1),D=(l.Component,function(e){var t=e.onSubmit,n=Object(l.useState)(""),a=Object(v.a)(n,2),c=a[0],i=a[1],r=Object(l.useState)(""),s=Object(v.a)(r,2),u=s[0],o=s[1],b=Object(l.useState)(""),j=Object(v.a)(b,2),d=j[0],m=(j[1],function(e){var t=e.currentTarget,n=t.value;switch(t.name){case"name":i(n);break;case"number":o(n);break;default:return}});return Object(A.jsxs)(w,{onSubmit:function(e){e.preventDefault(),t({name:c,number:u,filter:d}),i(""),o("")},children:[Object(A.jsxs)(k,{children:["Name",Object(A.jsx)("input",{onChange:m,value:c,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0})]}),Object(A.jsxs)(k,{children:["Number",Object(A.jsx)("input",{onChange:m,type:"tel",name:"number",value:u,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0})]}),Object(A.jsx)("button",{type:"submit",children:"Add contact"})]})}),L=n(18),z=n(19),B=S.a.button(i||(i=Object(y.a)(["\n  width: 80px;\n\n  transition: all 250ms ease;\n  &:hover,\n  :focus {\n    background-color: skyblue;\n  }\n"]))),F=S.a.li(r||(r=Object(y.a)(["\n  height: 30px;\n  display: flex;\n  justify-content: space-between;\n"]))),T=S.a.div(s||(s=Object(y.a)(["\n  display: flex;\n  gap: 5px;\n  align-items: center;\n"]))),J=function(e){var t=e.elData,n=e.deleteBtn;return Object(A.jsxs)(F,{children:[Object(A.jsxs)(T,{children:[Object(A.jsx)(L.a,{}),t.name,": ",t.number]}),Object(A.jsx)(B,{type:"button","data-id":t.id,onClick:function(e){n(t.id)},children:Object(A.jsx)(z.a,{})})]})},P=S.a.ul(u||(u=Object(y.a)(["\n  list-style: none;\n  padding: 0;\n\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n"]))),R=function(e){var t=e.contactsList,n=e.searchResult,a=e.btnDelete,c=0===t.length,i=0===n.length;return Object(A.jsxs)("div",{children:[c&&Object(A.jsx)("p",{children:"Your contacts List is still empty."}),Object(A.jsx)(P,{children:i?t.map((function(e){return Object(A.jsx)(J,{elData:e,deleteBtn:a},e.id)})):n.map((function(e){return Object(A.jsx)(J,{elData:e},e.id)}))})]})},Z=n(14),q=S.a.label(o||(o=Object(y.a)(["\n  display: flex;\n  align-items: center;\n  gap: 5px;\n"]))),E=(l.Component,function(e){var t=e.onChange,n=Object(l.useState)(""),a=Object(v.a)(n,2),c=a[0],i=a[1];return Object(A.jsxs)("div",{children:[Object(A.jsx)("h3",{children:"Find contacts by name"}),Object(A.jsxs)(q,{children:[Object(A.jsx)("input",{type:"text",name:"filter",onChange:function(e){var n=e.currentTarget.value;i(e.currentTarget.value),t(n)},value:c}),Object(A.jsx)(Z.a,{size:"18"})]})]})}),I=S.a.div(b||(b=Object(y.a)(["\n  width: 25%;\n  padding-left: 30px;\n"]))),M=(l.Component,function(){var e=Object(l.useState)([{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}]),t=Object(v.a)(e,2),n=t[0],a=t[1],c=Object(l.useState)(""),i=Object(v.a)(c,2),r=(i[0],i[1]),s=Object(l.useState)([]),u=Object(v.a)(s,2),o=u[0],b=u[1],j=function(e){var t=n.find((function(t){return t.name===e}));return t&&alert("".concat(e," is already in contacts")),t};return Object(A.jsxs)(I,{children:[Object(A.jsx)("h1",{children:"Phonebook"}),Object(A.jsx)(D,{onSubmit:function(e){var t=e.name,n=e.number;j(t)||a((function(e){return[].concat(Object(g.a)(e),[{name:t,number:n,id:Object(C.a)()}])}))}}),Object(A.jsx)("h2",{children:"Contacts"}),Object(A.jsx)(E,{onChange:function(e){if(""===e.trim())return r(""),void b([]);r(e);var t=function(e){var t=e.trim().toLowerCase();return n.filter((function(e){return e.name.toLowerCase().indexOf(t)>-1}))}(e);b(t)}}),Object(A.jsx)(R,{searchResult:o,contactsList:n,btnDelete:function(e){var t=n.filter((function(t){return t.id!==e}));a(t)}})]})}),N=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,34)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,i=t.getLCP,r=t.getTTFB;n(e),a(e),c(e),i(e),r(e)}))};m.a.render(Object(A.jsx)(j.a.StrictMode,{children:Object(A.jsx)(M,{})}),document.getElementById("root")),N()}},[[31,1,2]]]);
//# sourceMappingURL=main.adabd670.chunk.js.map