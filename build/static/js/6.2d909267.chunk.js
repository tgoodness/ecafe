(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[6],{435:function(e,t,n){"use strict";n.d(t,"j",(function(){return i})),n.d(t,"h",(function(){return l})),n.d(t,"a",(function(){return d})),n.d(t,"i",(function(){return o})),n.d(t,"f",(function(){return j})),n.d(t,"d",(function(){return u})),n.d(t,"e",(function(){return b})),n.d(t,"g",(function(){return h})),n.d(t,"b",(function(){return O})),n.d(t,"c",(function(){return x}));var r=n(31),c=n(38),a=n.n(c),s=n(40),i=function(){return a.a.get("".concat(r.b,"users"),{headers:Object(s.a)()})},l=function(e){return a.a.get("".concat(r.b,"users/").concat(e),{headers:Object(s.a)()})},d=function(e){return a.a.post("".concat(r.b,"users/restrictions"),e,{headers:Object(s.a)()})},o=function(e){return a.a.get("".concat(r.b,"btc/").concat(e),{headers:Object(s.a)()})},j=function(){return a.a.get("".concat(r.b,"btc/txs/bought"),{headers:Object(s.a)()})},u=function(){return a.a.get("".concat(r.b,"btc/txs/p2p"),{headers:Object(s.a)()})},b=function(){return a.a.get("".concat(r.b,"btc/txs/received"),{headers:Object(s.a)()})},h=function(){return a.a.get("".concat(r.b,"btc/txs/transfer"),{headers:Object(s.a)()})},O=function(e){return a.a.post("".concat(r.b,"btc/buy-management"),e,{headers:Object(s.a)()})},x=function(e){return a.a.post("".concat(r.b,"btc/transfer-management"),e,{headers:Object(s.a)()})}},436:function(e,t,n){},437:function(e,t,n){},438:function(e,t,n){"use strict";var r=n(26),c=n(0);t.a=function(){var e=Object(c.useState)({pending:!0,completed:!1,cancelled:!1,activeTab:"PENDING"}),t=Object(r.a)(e,2),n=t[0],a=t[1];return[n.activeTab,function(e){"PENDING"===e&&a({pending:!0,completed:!1,cancelled:!1,activeTab:"PENDING"}),"COMPLETED"===e&&a({pending:!1,completed:!0,cancelled:!1,activeTab:"COMPLETED"}),"CANCELLED"===e&&a({pending:!1,completed:!1,cancelled:!0,activeTab:"CANCELLED"})}]}},492:function(e,t,n){"use strict";n.r(t);var r=n(26),c=n(0),a=n(480),s=n(450),i=n(482),l=n(439),d=n(87),o=n(164);var j=function(e){var t=Object(c.useRef)(null),n=Object(c.useState)(""),a=Object(r.a)(n,2),s=a[0],i=a[1],l=Object(c.useState)([]),d=Object(r.a)(l,2),o=d[0],j=d[1];return[s,function(n){i(n.target.value),""===s&&t.current.focus();var r=e.filter((function(e){return e.key.includes(s.toLowerCase())||e.amountInDollar.toString().includes(s.toLowerCase())||e.amountInCoin.toString().includes(s.toLowerCase())||e.sellerFeeInDollar.toString().includes(s.toLowerCase())||e.buyerFeeInDollar.toString().includes(s.toLowerCase())||e.type.toLowerCase().includes(s.toLowerCase())||e.date.toLowerCase().includes(s.toLowerCase())||e.time.toLowerCase().includes(s.toLowerCase())}));j(r)},t,o]};var u=function(){var e=Object(c.useState)(!1),t=Object(r.a)(e,2),n=t[0],a=t[1],s=Object(c.useState)(""),i=Object(r.a)(s,2),l=i[0],d=i[1];return[l,n,function(e){d(e.currentTarget.id),a(!0)},function(){a(!1)}]},b=n(435),h=n(428),O=n(483),x=n(77),m=n(56),f=n(31),p=(n(437),n(2));var v=function(e){var t=e.reference,n=e.data,r=e.visible,c=e.handleCancel;if(void 0===n||""===t)return null;var a=n.data.data.txs.find((function(e){return e.referenceNumber===t}));return Object(p.jsxs)(h.a,{title:"Details",visible:r,onCancel:c,footer:!1,maskClosable:!1,className:"p2p-details",children:[Object(p.jsxs)("div",{children:[Object(p.jsx)("h6",{children:"Reference"}),Object(p.jsx)("h5",{className:"type",children:a.referenceNumber})]}),Object(p.jsxs)("div",{className:"row-wrapper",children:[Object(p.jsxs)("div",{children:[Object(p.jsx)("h6",{children:"Status"}),Object(p.jsx)("h5",{children:"UNCONFIRMED"===a.status&&Object(p.jsx)("span",{className:"pending",children:"UNCONFIRMED"})}),Object(p.jsx)("h5",{children:"CONFIRMED"===a.status&&Object(p.jsx)("span",{className:"success",children:"CONFIRMED"})}),Object(p.jsx)("h5",{children:"CANCELLED"===a.status&&Object(p.jsx)("span",{className:"danger",children:"CANCELLED"})})]}),Object(p.jsxs)("div",{children:[Object(p.jsx)("h6",{children:"Type"}),Object(p.jsx)("h5",{className:"type",children:a.orderType})]})]}),Object(p.jsxs)("div",{className:"row-wrapper",children:[Object(p.jsxs)("div",{children:[Object(p.jsx)("h6",{children:"Amount (USD)"}),Object(p.jsx)("h5",{children:a.amountInDollar})]}),Object(p.jsxs)("div",{children:[Object(p.jsx)("h6",{children:"Amount (BTC)"}),Object(p.jsx)("h5",{children:a.amountInCoin})]})]}),Object(p.jsxs)("div",{className:"row-wrapper",children:[Object(p.jsxs)("div",{children:[Object(p.jsx)("h6",{children:"Buyer Fee(USD)"}),Object(p.jsx)("h5",{children:a.buyerFeeInDollar})]}),Object(p.jsxs)("div",{children:[Object(p.jsx)("h6",{children:"Buyer Fee (BTC)"}),Object(p.jsx)("h5",{children:a.buyerFeeInCoin})]})]}),Object(p.jsxs)("div",{className:"row-wrapper",children:[Object(p.jsxs)("div",{children:[Object(p.jsx)("h6",{children:"Seller Fee(USD)"}),Object(p.jsx)("h5",{children:a.sellerFeeInDollar})]}),Object(p.jsxs)("div",{children:[Object(p.jsx)("h6",{children:"Seller Fee (BTC)"}),Object(p.jsx)("h5",{children:a.sellerFeeInCoin})]})]}),Object(p.jsx)("div",{className:"row-wrapper",children:Object(p.jsxs)("div",{children:[Object(p.jsx)("h6",{children:"Rate"}),Object(p.jsxs)("h5",{children:["$",a.coinRateInDollar,Object(p.jsxs)("span",{children:[">","N",a.coinRateInDollar]})]})]})}),Object(p.jsxs)("div",{className:"row-wrapper",children:[Object(p.jsxs)("div",{children:[Object(p.jsx)("h6",{children:"Buyer"}),Object(p.jsx)("h5",{children:Object(p.jsx)(x.b,{to:"/user/".concat(a.buyer.registrationId),className:"text-info",children:"".concat(a.buyer.firstName," ").concat(a.buyer.lastName)})})]}),Object(p.jsxs)("div",{children:[Object(p.jsx)("h6",{children:"Seller"}),Object(p.jsx)("h5",{children:Object(p.jsx)(x.b,{to:"/user/".concat(a.seller.registrationId),className:"text-info",children:"".concat(a.seller.firstName," ").concat(a.seller.lastName)})})]})]}),Object(p.jsxs)("div",{className:"row-wrapper",children:[Object(p.jsxs)("div",{children:[Object(p.jsx)("h6",{children:"Date Created"}),Object(p.jsx)("h5",{children:m.a.dateFormat(a.dateAndTime)})]}),Object(p.jsxs)("div",{children:[Object(p.jsx)("h6",{children:"Time"}),Object(p.jsx)("h5",{children:m.a.timeFormat(a.dateAndTime)})]})]}),null!==a.dateModified&&Object(p.jsxs)("div",{className:"row-wrapper",children:[Object(p.jsxs)("div",{children:[Object(p.jsx)("h6",{children:"Date Modified"}),Object(p.jsx)("h5",{children:m.a.dateFormat(a.dateModified)})]}),Object(p.jsxs)("div",{children:[Object(p.jsx)("h6",{children:"Time"}),Object(p.jsx)("h5",{children:m.a.timeFormat(a.dateModified)})]})]}),a.popUploaded&&Object(p.jsxs)("div",{className:"pop-wrapper",children:[Object(p.jsx)("h6",{children:"Buyer POP"}),Object(p.jsx)(O.a,{src:"".concat(f.c).concat(a.proofOfPayment.pop)})]})]})},N=n(438);n(436);t.default=function(){var e=Object(N.a)(),t=Object(r.a)(e,2),n=t[0],c=t[1],h=Object(s.a)("p2p",b.d),O=h.status,x=h.error,f=h.data,D=u(),I=Object(r.a)(D,4),C=I[0],y=I[1],w=I[2],E=I[3],F=[];void 0!==f&&f.data.data.txs.map((function(e,t){var n={key:e.referenceNumber,sn:t+1,status:e.status,amountInDollar:e.amountInDollar,amountInCoin:e.amountInCoin,buyerFeeInDollar:e.buyerFeeInDollar,sellerFeeInDollar:e.sellerFeeInDollar,type:e.orderType,date:m.a.dateFormat(e.dateAndTime),time:m.a.timeFormat(e.dateAndTime)};F.push(n)}));var L=j(F),T=Object(r.a)(L,4),g=T[0],k=T[1],S=T[2],P=T[3],M=[{title:"S/N",dataIndex:"sn",key:"sn",sorter:{compare:function(e,t){return e.sn-t.sn}}},{title:"Reference",dataIndex:"key",key:"key",render:function(e){return Object(p.jsx)("span",{className:"text-info",onClick:w,id:e,children:e})},sorter:function(e,t){var n=e.key,r=t.key;return n<r?-1:n>r?1:0}},{title:"Amount(USD)",dataIndex:"amountInDollar",key:"amountInDollar",sorter:function(e,t){var n=e.amountInDollar,r=t.amountInDollar;return n<r?-1:n>r?1:0}},{title:"Amount(BTC)",dataIndex:"amountInCoin",key:"amountInCoin",sorter:function(e,t){var n=e.amountInCoin,r=t.amountInCoin;return n<r?-1:n>r?1:0}},{title:"Buyer Fee(USD)",dataIndex:"buyerFeeInDollar",key:"buyerFeeInDollar",sorter:function(e,t){var n=e.buyerFeeInDollar,r=t.buyerFeeInDollar;return n<r?-1:n>r?1:0}},{title:"Seller Fee(USD)",dataIndex:"sellerFeeInDollar",key:"sellerFeeInDollar",sorter:function(e,t){var n=e.sellerFeeInDollar,r=t.sellerFeeInDollar;return n<r?-1:n>r?1:0}},{title:"Type",dataIndex:"type",key:"type",sorter:function(e,t){var n=e.type,r=t.type;return n<r?-1:n>r?1:0}},{title:"Date",dataIndex:"date",key:"date",sorter:function(e,t){var n=e.date,r=t.date;return n<r?-1:n>r?1:0}},{title:"Time",dataIndex:"time",key:"time",sorter:function(e,t){var n=e.time,r=t.time;return n<r?-1:n>r?1:0}},{title:"More",dataIndex:"key",key:"key",render:function(e,t){return Object(p.jsx)(l.a,{className:"text-primary",onClick:w,id:t.key})}}],A=""===g?F:P;return"PENDING"===n&&(A=A.filter((function(e){return"CANCELLED"===e.status}))),"COMPLETED"===n&&(A=A.filter((function(e){return"COMPLETED"===e.status}))),"success"!==O?Object(p.jsx)(o.a,{status:O,error:x,data:f,title:"P2P"}):Object(p.jsxs)(d.a,{title:"P2P",children:[Object(p.jsxs)("div",{className:"shared-history",children:[Object(p.jsx)("div",{className:"row",children:Object(p.jsx)("div",{className:"offset-md-2 col-md-8",children:Object(p.jsxs)("div",{className:"tab-wrapper",children:[Object(p.jsx)("div",{className:"PENDING"===n?"active":"",onClick:function(){return c("PENDING")},children:"PENDING"}),Object(p.jsx)("div",{className:"COMPLETED"===n?"active":"",onClick:function(){return c("COMPLETED")},children:"COMPLETED"})]})})}),Object(p.jsx)("div",{className:"row",children:Object(p.jsxs)("div",{className:"offset-md-2 col-md-8",children:[Object(p.jsxs)("div",{className:"search-wrapper","data-aos":"fade-down",children:[Object(p.jsx)(a.a,{}),Object(p.jsx)("input",{type:"text",ref:S,value:g,onChange:k,placeholder:"Search"})]}),Object(p.jsx)("div",{className:"table-responsive",children:Object(p.jsx)(i.a,{columns:M,dataSource:A})})]})})]}),Object(p.jsx)(v,{reference:C,data:f,visible:y,handleCancel:E})]})}}}]);
//# sourceMappingURL=6.2d909267.chunk.js.map