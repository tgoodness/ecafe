(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[11],{389:function(e,t,n){"use strict";n.d(t,"f",(function(){return i})),n.d(t,"e",(function(){return o})),n.d(t,"c",(function(){return d})),n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return u})),n.d(t,"d",(function(){return j}));var r=n(387),a=n(393),c=n.n(a),s=n(392),i=function(){return c.a.get("".concat(r.a,"users"),{headers:Object(s.a)()})},o=function(e){return c.a.get("".concat(r.a,"users/").concat(e),{headers:Object(s.a)()})},d=function(){return c.a.get("".concat(r.a,"btc/txs/bought"),{headers:Object(s.a)()})},l=function(){return c.a.get("".concat(r.a,"btc/txs/p2p"),{headers:Object(s.a)()})},u=function(){return c.a.get("".concat(r.a,"btc/txs/received"),{headers:Object(s.a)()})},j=function(){return c.a.get("".concat(r.a,"btc/txs/transfer"),{headers:Object(s.a)()})}},390:function(e,t,n){},391:function(e,t,n){},397:function(e,t,n){"use strict";var r=n(35),a=n(0);t.a=function(){var e=Object(a.useState)({pending:!0,completed:!1,cancelled:!1,activeTab:"PENDING"}),t=Object(r.a)(e,2),n=t[0],c=t[1];return[n.activeTab,function(e){"PENDING"===e&&c({pending:!0,completed:!1,cancelled:!1,activeTab:"PENDING"}),"COMPLETED"===e&&c({pending:!1,completed:!0,cancelled:!1,activeTab:"COMPLETED"}),"CANCELLED"===e&&c({pending:!1,completed:!1,cancelled:!0,activeTab:"CANCELLED"})}]}},486:function(e,t,n){"use strict";n.r(t);var r=n(35),a=n(0),c=n(487),s=n(472),i=n(476),o=n(399),d=n(98),l=n(148),u=n(389);var j=function(e){var t=Object(a.useRef)(null),n=Object(a.useState)(""),c=Object(r.a)(n,2),s=c[0],i=c[1],o=Object(a.useState)([]),d=Object(r.a)(o,2),l=d[0],u=d[1];return[s,function(n){i(n.target.value),""===s&&t.current.focus();var r=e.filter((function(e){return e.sn.toString().includes(s.toString())||e.registrationId.toLowerCase().includes(s.toLowerCase())||e.amountInDollar.toString().includes(s.toLowerCase())||e.amountInCoin.toString().includes(s.toLowerCase())||e.feeInDollar.toString().includes(s.toLowerCase())||e.orderType.toLowerCase().includes(s.toLowerCase())||e.date.toLowerCase().includes(s.toLowerCase())||e.time.toLowerCase().includes(s.toLowerCase())}));u(r)},t,l]};var b=function(){var e=Object(a.useState)(!1),t=Object(r.a)(e,2),n=t[0],c=t[1],s=Object(a.useState)(""),i=Object(r.a)(s,2),o=i[0],d=i[1];return[o,n,function(e){d(e.currentTarget.id),c(!0)},function(){c(!1)}]},h=n(381),O=(n(390),n(2));var f=function(e){var t=e.reference,n=e.data,r=e.visible,a=e.handleCancel;if(void 0===n||""===t)return null;var c=n.data.data.txs.find((function(e){return e.transactionReference===t}));return console.log(c),Object(O.jsxs)(h.a,{title:"Details",visible:r,onCancel:a,footer:!1,centered:!0,maskClosable:!1,className:"p2p-details",children:[Object(O.jsxs)("div",{className:"row-wrapper",children:[Object(O.jsxs)("div",{children:[Object(O.jsx)("h6",{children:"Transact ID"}),Object(O.jsx)("h5",{children:"B9737392"})]}),Object(O.jsxs)("div",{children:[Object(O.jsx)("h6",{children:"Type"}),Object(O.jsx)("h5",{className:"type",children:c.orderType})]})]}),Object(O.jsxs)("div",{className:"row-wrapper",children:[Object(O.jsxs)("div",{children:[Object(O.jsx)("h6",{children:"Amount (USD)"}),Object(O.jsx)("h5",{children:c.amountInDollar})]}),Object(O.jsxs)("div",{children:[Object(O.jsx)("h6",{children:"Amount (BTC)"}),Object(O.jsx)("h5",{children:c.amountInCoin})]})]}),Object(O.jsx)("div",{className:"row-wrapper",children:Object(O.jsxs)("div",{children:[Object(O.jsx)("h6",{children:"Senders's Wallet Address"}),Object(O.jsx)("h5",{children:"1MSg5LpvGd8GmibgnQzM5j96CxyPQSZYMF"})]})}),Object(O.jsx)("div",{className:"row-wrapper",children:Object(O.jsxs)("div",{children:[Object(O.jsx)("h6",{children:"Status"}),Object(O.jsx)("h5",{children:Object(O.jsx)("span",{className:"success",children:"SUCCESS"})})]})}),Object(O.jsxs)("div",{className:"row-wrapper",children:[Object(O.jsxs)("div",{children:[Object(O.jsx)("h6",{children:"Date"}),Object(O.jsx)("h5",{children:"20th Sept, 2021"})]}),Object(O.jsxs)("div",{children:[Object(O.jsx)("h6",{children:"Time"}),Object(O.jsx)("h5",{children:"10:00AM"})]})]})]})},x=n(144),v=n(397);n(391);t.default=function(){var e=Object(v.a)(),t=Object(r.a)(e,2),n=t[0],a=t[1],h=Object(c.a)("received",u.b),m=h.status,p=h.error,I=h.data,C=b(),D=Object(r.a)(C,4),N=D[0],g=D[1],T=D[2],w=D[3];console.log(I);var y=[];void 0!==I&&I.data.data.txs.map((function(e,t){var n={key:e.transactionReference,sn:t+1,registrationId:e.registrationId,amountInDollar:e.amountInDollar,amountInCoin:e.amountInCoin,feeInDollar:e.feeInDollar,orderType:e.orderType,status:e.status,date:x.a.dateFormat(e.dateAndTime),time:x.a.timeFormat(e.dateAndTime)};y.push(n)}));var E=[{title:"S/N",dataIndex:"sn",key:"sn",sorter:{compare:function(e,t){return e.sn-t.sn}}},{title:"Reference",dataIndex:"registrationId",key:"registrationId",render:function(e,t){return Object(O.jsx)("span",{className:"text-info",onClick:T,id:t.key,children:e})},sorter:function(e,t){var n=e.registrationId,r=t.registrationId;return n<r?-1:n>r?1:0}},{title:"Amount(USD)",dataIndex:"amountInDollar",key:"amountInDollar",sorter:function(e,t){var n=e.amountInDollar,r=t.amountInDollar;return n<r?-1:n>r?1:0}},{title:"Amount(BTC)",dataIndex:"amountInCoin",key:"amountInCoin",sorter:function(e,t){var n=e.amountInCoin,r=t.amountInCoin;return n<r?-1:n>r?1:0}},{title:"Fee(USD)",dataIndex:"feeInDollar",key:"feeInDollar",sorter:function(e,t){var n=e.feeInDollar,r=t.feeInDollar;return n<r?-1:n>r?1:0}},{title:"Type",dataIndex:"orderType",key:"orderType",sorter:function(e,t){var n=e.orderType,r=t.orderType;return n<r?-1:n>r?1:0}},{title:"Date",dataIndex:"date",key:"date",sorter:function(e,t){var n=e.date,r=t.date;return n<r?-1:n>r?1:0}},{title:"Time",dataIndex:"time",key:"time",sorter:function(e,t){var n=e.time,r=t.time;return n<r?-1:n>r?1:0}},{title:"More",dataIndex:"key",key:"key",render:function(e){return Object(O.jsx)(o.a,{onClick:T,id:e})}}],S=j(y),L=Object(r.a)(S,4),k=L[0],P=L[1],M=L[2],A=L[3],G=""===k?y:A;return"PENDING"===n&&(G=G.filter((function(e){return"UNCONFIRMED"===e.status}))),"COMPLETED"===n&&(G=G.filter((function(e){return"CONFIRMED"===e.status}))),"success"!==m?Object(O.jsx)(l.a,{status:m,error:p,data:I,title:"Received"}):Object(O.jsxs)(d.a,{title:"Received",children:[Object(O.jsxs)("div",{className:"shared-history",children:[Object(O.jsx)("div",{className:"row",children:Object(O.jsx)("div",{className:"offset-md-2 col-md-8",children:Object(O.jsxs)("div",{className:"tab-wrapper",children:[Object(O.jsx)("div",{className:"PENDING"===n?"active":"",onClick:function(){return a("PENDING")},children:"PENDING"}),Object(O.jsx)("div",{className:"COMPLETED"===n?"active":"",onClick:function(){return a("COMPLETED")},children:"COMPLETED"})]})})}),Object(O.jsx)("div",{className:"row",children:Object(O.jsxs)("div",{className:"offset-md-2 col-md-8",children:[Object(O.jsxs)("div",{className:"search-wrapper","data-aos":"fade-down",children:[Object(O.jsx)(s.a,{}),Object(O.jsx)("input",{type:"text",ref:M,value:k,onChange:P,placeholder:"Search"})]}),Object(O.jsx)("div",{className:"table-responsive",children:Object(O.jsx)(i.a,{columns:E,dataSource:G})})]})})]}),Object(O.jsx)(f,{reference:N,data:I,visible:g,handleCancel:w})]})}}}]);
//# sourceMappingURL=11.18e65fd8.chunk.js.map