(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[13],{435:function(e,t,a){"use strict";a.d(t,"j",(function(){return i})),a.d(t,"h",(function(){return u})),a.d(t,"a",(function(){return o})),a.d(t,"i",(function(){return d})),a.d(t,"f",(function(){return f})),a.d(t,"d",(function(){return l})),a.d(t,"e",(function(){return b})),a.d(t,"g",(function(){return j})),a.d(t,"b",(function(){return m})),a.d(t,"c",(function(){return O}));var r=a(31),n=a(38),s=a.n(n),c=a(40),i=function(){return s.a.get("".concat(r.b,"users"),{headers:Object(c.a)()})},u=function(e){return s.a.get("".concat(r.b,"users/").concat(e),{headers:Object(c.a)()})},o=function(e){return s.a.post("".concat(r.b,"users/restrictions"),e,{headers:Object(c.a)()})},d=function(e){return s.a.get("".concat(r.b,"btc/").concat(e),{headers:Object(c.a)()})},f=function(){return s.a.get("".concat(r.b,"btc/txs/bought"),{headers:Object(c.a)()})},l=function(){return s.a.get("".concat(r.b,"btc/txs/p2p"),{headers:Object(c.a)()})},b=function(){return s.a.get("".concat(r.b,"btc/txs/received"),{headers:Object(c.a)()})},j=function(){return s.a.get("".concat(r.b,"btc/txs/transfer"),{headers:Object(c.a)()})},m=function(e){return s.a.post("".concat(r.b,"btc/buy-management"),e,{headers:Object(c.a)()})},O=function(e){return s.a.post("".concat(r.b,"btc/transfer-management"),e,{headers:Object(c.a)()})}},452:function(e,t,a){"use strict";var r=a(0),n=a(50);t.a=Object(n.a)(r.createElement("path",{d:"M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"}),"CheckOutlined")},458:function(e,t,a){"use strict";var r=a(0),n=a(50);t.a=Object(n.a)(r.createElement("path",{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"}),"CloseOutlined")},459:function(e,t,a){},496:function(e,t,a){"use strict";a.r(t);var r=a(26),n=a(0),s=a(450),c=a(452),i=a(458),u=a(480),o=a(482),d=a(439),f=a(77),l=a(87),b=a(164);var j=function(e){var t=Object(n.useRef)(null),a=Object(n.useState)(""),s=Object(r.a)(a,2),c=s[0],i=s[1],u=Object(n.useState)([]),o=Object(r.a)(u,2),d=o[0],f=o[1];return[c,function(a){i(a.target.value),""===c&&t.current.focus();var r=e.filter((function(e){return e.key.toLowerCase().includes(c.toLowerCase())||e.username.toLowerCase().includes(c.toLowerCase())||e.firstName.toString().includes(c.toLowerCase())||e.lastName.toString().includes(c.toLowerCase())||e.email.toString().includes(c.toLowerCase())||e.verified.toLowerCase().includes(c.toLowerCase())}));f(r)},t,d]},m=a(435),O=(a(459),a(2));t.default=function(){var e=Object(s.a)("users",m.j),t=e.status,a=e.error,n=e.data,v=[];void 0!==n&&n.data.data.users.map((function(e,t){var a={key:e.registrationId,sn:t+1,username:e.username,firstName:"VERIFIED"===e.verifyStatus?e.firstName:"---",lastName:"VERIFIED"===e.verifyStatus?e.lastName:"---",email:e.email,verified:e.verifyStatus};v.push(a)}));var h=j(v),x=Object(r.a)(h,4),p=x[0],N=x[1],g=x[2],y=x[3],k=[{title:"SN",dataIndex:"sn",key:"sn",sorter:{compare:function(e,t){return e.sn-t.sn}}},{title:"Username",dataIndex:"username",key:"username",render:function(e,t){return Object(O.jsx)(f.b,{to:"user/".concat(t.key),className:"text-info",children:e})},sorter:function(e,t){var a=e.username,r=t.username;return a<r?-1:a>r?1:0}},{title:"FirstName",dataIndex:"firstName",key:"firstName",sorter:function(e,t){var a=e.firstName,r=t.firstName;return a<r?-1:a>r?1:0}},{title:"LastName",dataIndex:"lastName",key:"lastName",sorter:function(e,t){var a=e.lastName,r=t.lastName;return a<r?-1:a>r?1:0}},{title:"Email",dataIndex:"email",key:"email",sorter:function(e,t){var a=e.email,r=t.email;return a<r?-1:a>r?1:0}},{title:"Verified",dataIndex:"verified",key:"verified",render:function(e){return Object(O.jsx)("span",{children:"VERIFIED"===e?Object(O.jsx)(c.a,{className:"text-success"}):Object(O.jsx)(i.a,{className:"text-danger"})})},sorter:function(e,t){var a=e.verified,r=t.verified;return a<r?-1:a>r?1:0}},{title:"More",dataIndex:"key",key:"key",render:function(e){return Object(O.jsx)(f.b,{to:"user/".concat(e),children:Object(O.jsx)(d.a,{})})}}],w=""===p?v:y;return"success"!==t?Object(O.jsx)(b.a,{status:t,error:a,data:n,title:"Users"}):Object(O.jsx)(l.a,{title:"Users",className:"users",children:Object(O.jsx)("div",{className:"row",children:Object(O.jsxs)("div",{className:"offset-md-2 col-md-8",children:[Object(O.jsxs)("div",{className:"search-wrapper","data-aos":"fade-down",children:[Object(O.jsx)(u.a,{}),Object(O.jsx)("input",{type:"text",ref:g,value:p,onChange:N,placeholder:"Search"})]}),Object(O.jsx)("div",{className:"table-responsive",children:Object(O.jsx)(o.a,{columns:k,dataSource:w})})]})})})}}}]);
//# sourceMappingURL=13.56749c91.chunk.js.map