(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[18],{390:function(e,t,n){},401:function(e,t,n){},478:function(e,t,n){"use strict";n.r(t);var r=n(35),c=n(0),a=n(98);var s=function(){var e=Object(c.useState)({p2p:!0,trade:!1,transfer:!1,received:!1,activeTab:"P2P"}),t=Object(r.a)(e,2),n=t[0],a=t[1];return[n.activeTab,function(e){"P2P"===e&&a({p2p:!0,trade:!1,transfer:!1,received:!1,activeTab:"P2P"}),"TRADE"===e&&a({p2p:!1,trade:!0,transfer:!1,received:!1,activeTab:"TRADE"}),"TRANSFER"===e&&a({p2p:!1,trade:!1,transfer:!0,received:!1,activeTab:"TRANSFER"}),"RECEIVE"===e&&a({p2p:!1,trade:!1,transfer:!1,received:!0,activeTab:"RECEIVE"})}]},i=n(472),l=n(476),o=n(399);var d=function(e){var t=Object(c.useRef)(null),n=Object(c.useState)(""),a=Object(r.a)(n,2),s=a[0],i=a[1],l=Object(c.useState)([]),o=Object(r.a)(l,2),d=o[0],j=o[1];return[s,function(n){i(n.target.value),""===s&&t.current.focus();var r=e.filter((function(e){return e.key.toLowerCase().includes(s.toLowerCase())||e.reference.toLowerCase().includes(s.toLowerCase())||e.amountInDollar.toString().includes(s.toLowerCase())||e.amountInCoin.toString().includes(s.toLowerCase())||e.feeInDollar.toString().includes(s.toLowerCase())||e.type.toLowerCase().includes(s.toLowerCase())||e.date.toLowerCase().includes(s.toLowerCase())||e.time.toLowerCase().includes(s.toLowerCase())}));j(r)},t,d]};var j=function(){var e=Object(c.useState)(!1),t=Object(r.a)(e,2),n=t[0],a=t[1];return[n,function(){a(!0)},function(){a(!1)}]},u=n(381),h=n(477),b=n(63),x=(n(390),n.p+"static/media/pop.b3bb6773.png"),O=n(2);var f=function(e){var t=e.data,n=e.visible,r=e.handleCancel;return void 0===t?null:Object(O.jsxs)(u.a,{title:"Details",visible:n,onCancel:r,footer:!1,centered:!0,maskClosable:!1,className:"p2p-details",children:[Object(O.jsxs)("div",{className:"row-wrapper",children:[Object(O.jsxs)("div",{children:[Object(O.jsx)("h6",{children:"Transact ID"}),Object(O.jsx)("h5",{children:"B9737392"})]}),Object(O.jsxs)("div",{children:[Object(O.jsx)("h6",{children:"Type"}),Object(O.jsx)("h5",{className:"type",children:"BUY (P2P)"})]})]}),Object(O.jsxs)("div",{className:"row-wrapper",children:[Object(O.jsxs)("div",{children:[Object(O.jsx)("h6",{children:"Amount (USD)"}),Object(O.jsx)("h5",{children:"578.00"})]}),Object(O.jsxs)("div",{children:[Object(O.jsx)("h6",{children:"Amount (BTC)"}),Object(O.jsx)("h5",{children:"0.00680944"})]})]}),Object(O.jsxs)("div",{className:"row-wrapper",children:[Object(O.jsxs)("div",{children:[Object(O.jsx)("h6",{children:"Fee (USD)"}),Object(O.jsx)("h5",{children:"5.00"})]}),Object(O.jsxs)("div",{children:[Object(O.jsx)("h6",{children:"Fee (BTC)"}),Object(O.jsx)("h5",{children:"0.00680944"})]})]}),Object(O.jsx)("div",{className:"row-wrapper",children:Object(O.jsxs)("div",{children:[Object(O.jsx)("h6",{children:"Rate"}),Object(O.jsxs)("h5",{children:["5.00 ",Object(O.jsxs)("span",{children:[">","N450.00"]})]})]})}),Object(O.jsxs)("div",{className:"row-wrapper",children:[Object(O.jsxs)("div",{children:[Object(O.jsx)("h6",{children:"Buyer"}),Object(O.jsx)("h5",{children:Object(O.jsx)(b.b,{to:"/user/3838383",children:"goodness"})})]}),Object(O.jsxs)("div",{children:[Object(O.jsx)("h6",{children:"Seller"}),Object(O.jsx)("h5",{children:Object(O.jsx)(b.b,{to:"/user/3838383",children:"raphael"})})]})]}),Object(O.jsxs)("div",{className:"row-wrapper",children:[Object(O.jsxs)("div",{children:[Object(O.jsx)("h6",{children:"Category"}),Object(O.jsx)("h5",{children:"Dynamic"})]}),Object(O.jsxs)("div",{children:[Object(O.jsx)("h6",{children:"In Bit"}),Object(O.jsx)("h5",{children:"YES"})]})]}),Object(O.jsxs)("div",{className:"row-wrapper",children:[Object(O.jsxs)("div",{children:[Object(O.jsx)("h6",{children:"Date"}),Object(O.jsx)("h5",{children:"20th Sept, 2021"})]}),Object(O.jsxs)("div",{children:[Object(O.jsx)("h6",{children:"Time"}),Object(O.jsx)("h5",{children:"10:00AM"})]})]}),Object(O.jsxs)("div",{className:"pop-wrapper",children:[Object(O.jsx)("h6",{children:"Buyer POP"}),Object(O.jsx)(h.a,{src:x})]})]})},m=n(144);n(401);var v=function(){var e=0,t=[{key:"01",sn:m.a.SNformat(e++),reference:"BM37392",amountInDollar:"578.00",amountInCoin:"0.07856393",feeInDollar:"10.00",type:"SELL",date:"21/03/2020",time:"10:20AM"},{key:"02",sn:m.a.SNformat(e++),reference:"BM373923",amountInDollar:"572.00",amountInCoin:"0.03856393",feeInDollar:"102.00",type:"BUY",date:"21/05/2020",time:"10:20PM"}],n=d(t),a=Object(r.a)(n,4),s=a[0],u=a[1],h=a[2],b=a[3],x=[{title:"SN",dataIndex:"sn",key:"sn",sorter:{compare:function(e,t){return e.sn-t.sn}}},{title:"Reference",dataIndex:"reference",key:"reference",render:function(e){return Object(O.jsx)("span",{className:"text-info",children:e})},sorter:function(e,t){var n=e.reference,r=t.reference;return n<r?-1:n>r?1:0}},{title:"Amount(USD)",dataIndex:"amountInDollar",key:"amountInDollar",sorter:function(e,t){var n=e.amountInDollar,r=t.amountInDollar;return n<r?-1:n>r?1:0}},{title:"Amount(BTC)",dataIndex:"amountInCoin",key:"amountInCoin",sorter:function(e,t){var n=e.amountInCoin,r=t.amountInCoin;return n<r?-1:n>r?1:0}},{title:"Fee(USD)",dataIndex:"feeInDollar",key:"feeInDollar",sorter:function(e,t){var n=e.feeInDollar,r=t.feeInDollar;return n<r?-1:n>r?1:0}},{title:"Type",dataIndex:"type",key:"type",sorter:function(e,t){var n=e.type,r=t.type;return n<r?-1:n>r?1:0}},{title:"Date",dataIndex:"date",key:"date",render:function(e){return Object(O.jsx)("span",{className:"text-info",children:e})},sorter:function(e,t){var n=e.date,r=t.date;return n<r?-1:n>r?1:0}},{title:"Time",dataIndex:"time",key:"time",render:function(e){return Object(O.jsx)("span",{className:"text-info",children:e})},sorter:function(e,t){var n=e.time,r=t.time;return n<r?-1:n>r?1:0}},{title:"More",dataIndex:"key",key:"key",render:function(){return Object(O.jsx)(o.a,{})}}],v=""===s?t:b,p=Object(c.useState)(),C=Object(r.a)(p,2),I=C[0],w=C[1],y=j(),S=Object(r.a)(y,3),D=S[0],N=S[1],k=S[2];return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("div",{className:"row animate__animated animate__fadeIn",children:Object(O.jsxs)("div",{className:"offset-md-2 col-md-8",children:[Object(O.jsxs)("div",{className:"search-wrapper","data-aos":"fade-down",children:[Object(O.jsx)(i.a,{}),Object(O.jsx)("input",{type:"text",ref:h,value:s,onChange:u,placeholder:"Search"})]}),Object(O.jsx)("div",{className:"table-responsive",children:Object(O.jsx)(l.a,{columns:x,dataSource:v,onRow:function(e){return{onClick:function(){return function(e){var n=t.filter((function(t){return t.reference===e}));w(n),N()}(e.reference)}}}})})]})}),Object(O.jsx)(f,{visible:D,handleCancel:k,data:I})]})};var p=function(e){var t=Object(c.useRef)(null),n=Object(c.useState)(""),a=Object(r.a)(n,2),s=a[0],i=a[1],l=Object(c.useState)([]),o=Object(r.a)(l,2),d=o[0],j=o[1];return[s,function(n){i(n.target.value),""===s&&t.current.focus();var r=e.filter((function(e){return e.key.toLowerCase().includes(s.toLowerCase())||e.reference.toLowerCase().includes(s.toLowerCase())||e.amountInDollar.toString().includes(s.toLowerCase())||e.amountInCoin.toString().includes(s.toLowerCase())||e.feeInDollar.toString().includes(s.toLowerCase())||e.type.toLowerCase().includes(s.toLowerCase())||e.date.toLowerCase().includes(s.toLowerCase())||e.time.toLowerCase().includes(s.toLowerCase())}));j(r)},t,d]};var C=function(){var e=Object(c.useState)(!1),t=Object(r.a)(e,2),n=t[0],a=t[1];return[n,function(){a(!0)},function(){a(!1)}]};var I=function(e){var t=e.data,n=e.visible,r=e.handleCancel;return void 0===t?null:Object(O.jsxs)(u.a,{title:"Details",visible:n,onCancel:r,footer:!1,centered:!0,maskClosable:!1,className:"p2p-details",children:[Object(O.jsxs)("div",{className:"row-wrapper",children:[Object(O.jsxs)("div",{children:[Object(O.jsx)("h6",{children:"Transact ID"}),Object(O.jsx)("h5",{children:"B9737392"})]}),Object(O.jsxs)("div",{children:[Object(O.jsx)("h6",{children:"Type"}),Object(O.jsx)("h5",{className:"type",children:"BUY"})]})]}),Object(O.jsxs)("div",{className:"row-wrapper",children:[Object(O.jsxs)("div",{children:[Object(O.jsx)("h6",{children:"Amount (USD)"}),Object(O.jsx)("h5",{children:"578.00"})]}),Object(O.jsxs)("div",{children:[Object(O.jsx)("h6",{children:"Amount (BTC)"}),Object(O.jsx)("h5",{children:"0.00680944"})]})]}),Object(O.jsxs)("div",{className:"row-wrapper",children:[Object(O.jsxs)("div",{children:[Object(O.jsx)("h6",{children:"Fee (USD)"}),Object(O.jsx)("h5",{children:"5.00"})]}),Object(O.jsxs)("div",{children:[Object(O.jsx)("h6",{children:"Fee (BTC)"}),Object(O.jsx)("h5",{children:"0.00680944"})]})]}),Object(O.jsx)("div",{className:"row-wrapper",children:Object(O.jsxs)("div",{children:[Object(O.jsx)("h6",{children:"Receiver\u2019s Wallet Address"}),Object(O.jsx)("h5",{children:"1MSg5LpvGd8GmibgnQzM5j96CxyPQSZYMF"})]})}),Object(O.jsxs)("div",{className:"row-wrapper",children:[Object(O.jsxs)("div",{children:[Object(O.jsx)("h6",{children:"Miner Fee (USD)"}),Object(O.jsx)("h5",{children:"4.50"})]}),Object(O.jsxs)("div",{children:[Object(O.jsx)("h6",{children:"Miner Fee (BTC)"}),Object(O.jsx)("h5",{children:"0.00680944"})]})]}),Object(O.jsx)("div",{className:"row-wrapper",children:Object(O.jsxs)("div",{children:[Object(O.jsx)("h6",{children:"Status"}),Object(O.jsx)("h5",{children:"SUCCESS"})]})}),Object(O.jsxs)("div",{className:"row-wrapper",children:[Object(O.jsxs)("div",{children:[Object(O.jsx)("h6",{children:"Date"}),Object(O.jsx)("h5",{children:"20th Sept, 2021"})]}),Object(O.jsxs)("div",{children:[Object(O.jsx)("h6",{children:"Time"}),Object(O.jsx)("h5",{children:"10:00AM"})]})]})]})};var w=function(){var e=0,t=[{key:"01",sn:m.a.SNformat(e++),reference:"BM37392",amountInDollar:"578.00",amountInCoin:"0.07856393",feeInDollar:"10.00",type:"SELL",date:"21/03/2020",time:"10:20AM"},{key:"02",sn:m.a.SNformat(e++),reference:"BM373923",amountInDollar:"572.00",amountInCoin:"0.03856393",feeInDollar:"102.00",type:"BUY",date:"21/05/2020",time:"10:20PM"}],n=p(t),a=Object(r.a)(n,4),s=a[0],d=a[1],j=a[2],u=a[3],h=[{title:"SN",dataIndex:"sn",key:"sn",sorter:{compare:function(e,t){return e.sn-t.sn}}},{title:"Reference",dataIndex:"reference",key:"reference",render:function(e){return Object(O.jsx)("span",{className:"text-info",children:e})},sorter:function(e,t){var n=e.reference,r=t.reference;return n<r?-1:n>r?1:0}},{title:"Amount(USD)",dataIndex:"amountInDollar",key:"amountInDollar",sorter:function(e,t){var n=e.amountInDollar,r=t.amountInDollar;return n<r?-1:n>r?1:0}},{title:"Amount(BTC)",dataIndex:"amountInCoin",key:"amountInCoin",sorter:function(e,t){var n=e.amountInCoin,r=t.amountInCoin;return n<r?-1:n>r?1:0}},{title:"Fee(USD)",dataIndex:"feeInDollar",key:"feeInDollar",sorter:function(e,t){var n=e.feeInDollar,r=t.feeInDollar;return n<r?-1:n>r?1:0}},{title:"Type",dataIndex:"type",key:"type",sorter:function(e,t){var n=e.type,r=t.type;return n<r?-1:n>r?1:0}},{title:"Date",dataIndex:"date",key:"date",render:function(e){return Object(O.jsx)("span",{className:"text-info",children:e})},sorter:function(e,t){var n=e.date,r=t.date;return n<r?-1:n>r?1:0}},{title:"Time",dataIndex:"time",key:"time",render:function(e){return Object(O.jsx)("span",{className:"text-info",children:e})},sorter:function(e,t){var n=e.time,r=t.time;return n<r?-1:n>r?1:0}},{title:"More",dataIndex:"key",key:"key",render:function(){return Object(O.jsx)(o.a,{})}}],b=""===s?t:u,x=Object(c.useState)(),f=Object(r.a)(x,2),v=f[0],w=f[1],y=C(),S=Object(r.a)(y,3),D=S[0],N=S[1],k=S[2];return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("div",{className:"row animate__animated animate__fadeIn",children:Object(O.jsxs)("div",{className:"offset-md-2 col-md-8",children:[Object(O.jsxs)("div",{className:"search-wrapper","data-aos":"fade-down",children:[Object(O.jsx)(i.a,{}),Object(O.jsx)("input",{type:"text",ref:j,value:s,onChange:d,placeholder:"Search"})]}),Object(O.jsx)("div",{className:"table-responsive",children:Object(O.jsx)(l.a,{columns:h,dataSource:b,onRow:function(e){return{onClick:function(){return function(e){var n=t.filter((function(t){return t.reference===e}));w(n),N()}(e.reference)}}}})})]})}),Object(O.jsx)(I,{visible:D,handleCancel:k,data:v})]})};var y=function(e){var t=Object(c.useRef)(null),n=Object(c.useState)(""),a=Object(r.a)(n,2),s=a[0],i=a[1],l=Object(c.useState)([]),o=Object(r.a)(l,2),d=o[0],j=o[1];return[s,function(n){i(n.target.value),""===s&&t.current.focus();var r=e.filter((function(e){return e.key.toLowerCase().includes(s.toLowerCase())||e.reference.toLowerCase().includes(s.toLowerCase())||e.amountInDollar.toString().includes(s.toLowerCase())||e.amountInCoin.toString().includes(s.toLowerCase())||e.feeInDollar.toString().includes(s.toLowerCase())||e.type.toLowerCase().includes(s.toLowerCase())||e.date.toLowerCase().includes(s.toLowerCase())||e.time.toLowerCase().includes(s.toLowerCase())}));j(r)},t,d]};var S=function(){var e=Object(c.useState)(!1),t=Object(r.a)(e,2),n=t[0],a=t[1];return[n,function(){a(!0)},function(){a(!1)}]};var D=function(e){var t=e.data,n=e.visible,r=e.handleCancel;return void 0===t?null:Object(O.jsxs)(u.a,{title:"Details",visible:n,onCancel:r,footer:!1,centered:!0,maskClosable:!1,className:"p2p-details",children:[Object(O.jsxs)("div",{className:"row-wrapper",children:[Object(O.jsxs)("div",{children:[Object(O.jsx)("h6",{children:"Transact ID"}),Object(O.jsx)("h5",{children:"B9737392"})]}),Object(O.jsxs)("div",{children:[Object(O.jsx)("h6",{children:"Type"}),Object(O.jsx)("h5",{className:"type",children:"BUY"})]})]}),Object(O.jsxs)("div",{className:"row-wrapper",children:[Object(O.jsxs)("div",{children:[Object(O.jsx)("h6",{children:"Amount (USD)"}),Object(O.jsx)("h5",{children:"578.00"})]}),Object(O.jsxs)("div",{children:[Object(O.jsx)("h6",{children:"Amount (BTC)"}),Object(O.jsx)("h5",{children:"0.00680944"})]})]}),Object(O.jsx)("div",{className:"row-wrapper",children:Object(O.jsxs)("div",{children:[Object(O.jsx)("h6",{children:"Senders's Wallet Address"}),Object(O.jsx)("h5",{children:"1MSg5LpvGd8GmibgnQzM5j96CxyPQSZYMF"})]})}),Object(O.jsx)("div",{className:"row-wrapper",children:Object(O.jsxs)("div",{children:[Object(O.jsx)("h6",{children:"Status"}),Object(O.jsx)("h5",{children:Object(O.jsx)("span",{className:"success",children:"SUCCESS"})})]})}),Object(O.jsxs)("div",{className:"row-wrapper",children:[Object(O.jsxs)("div",{children:[Object(O.jsx)("h6",{children:"Date"}),Object(O.jsx)("h5",{children:"20th Sept, 2021"})]}),Object(O.jsxs)("div",{children:[Object(O.jsx)("h6",{children:"Time"}),Object(O.jsx)("h5",{children:"10:00AM"})]})]})]})};var N=function(){var e=0,t=[{key:"01",sn:m.a.SNformat(e++),reference:"BM37392",amountInDollar:"578.00",amountInCoin:"0.07856393",feeInDollar:"10.00",type:"SELL",date:"21/03/2020",time:"10:20AM"},{key:"02",sn:m.a.SNformat(e++),reference:"BM373923",amountInDollar:"572.00",amountInCoin:"0.03856393",feeInDollar:"102.00",type:"BUY",date:"21/05/2020",time:"10:20PM"}],n=y(t),a=Object(r.a)(n,4),s=a[0],d=a[1],j=a[2],u=a[3],h=[{title:"SN",dataIndex:"sn",key:"sn",sorter:{compare:function(e,t){return e.sn-t.sn}}},{title:"Reference",dataIndex:"reference",key:"reference",render:function(e){return Object(O.jsx)("span",{className:"text-info",children:e})},sorter:function(e,t){var n=e.reference,r=t.reference;return n<r?-1:n>r?1:0}},{title:"Amount(USD)",dataIndex:"amountInDollar",key:"amountInDollar",sorter:function(e,t){var n=e.amountInDollar,r=t.amountInDollar;return n<r?-1:n>r?1:0}},{title:"Amount(BTC)",dataIndex:"amountInCoin",key:"amountInCoin",sorter:function(e,t){var n=e.amountInCoin,r=t.amountInCoin;return n<r?-1:n>r?1:0}},{title:"Fee(USD)",dataIndex:"feeInDollar",key:"feeInDollar",sorter:function(e,t){var n=e.feeInDollar,r=t.feeInDollar;return n<r?-1:n>r?1:0}},{title:"Type",dataIndex:"type",key:"type",sorter:function(e,t){var n=e.type,r=t.type;return n<r?-1:n>r?1:0}},{title:"Date",dataIndex:"date",key:"date",render:function(e){return Object(O.jsx)("span",{className:"text-info",children:e})},sorter:function(e,t){var n=e.date,r=t.date;return n<r?-1:n>r?1:0}},{title:"Time",dataIndex:"time",key:"time",render:function(e){return Object(O.jsx)("span",{className:"text-info",children:e})},sorter:function(e,t){var n=e.time,r=t.time;return n<r?-1:n>r?1:0}},{title:"More",dataIndex:"key",key:"key",render:function(){return Object(O.jsx)(o.a,{})}}],b=""===s?t:u,x=Object(c.useState)(),f=Object(r.a)(x,2),v=f[0],p=f[1],C=S(),I=Object(r.a)(C,3),w=I[0],N=I[1],k=I[2];return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("div",{className:"row animate__animated animate__fadeIn",children:Object(O.jsxs)("div",{className:"offset-md-2 col-md-8",children:[Object(O.jsxs)("div",{className:"search-wrapper","data-aos":"fade-down",children:[Object(O.jsx)(i.a,{}),Object(O.jsx)("input",{type:"text",ref:j,value:s,onChange:d,placeholder:"Search"})]}),Object(O.jsx)("div",{className:"table-responsive",children:Object(O.jsx)(l.a,{columns:h,dataSource:b,onRow:function(e){return{onClick:function(){return function(e){var n=t.filter((function(t){return t.reference===e}));p(n),N()}(e.reference)}}}})})]})}),Object(O.jsx)(D,{visible:w,handleCancel:k,data:v})]})};t.default=function(){var e=s(),t=Object(r.a)(e,2),n=t[0],c=t[1];return Object(O.jsxs)(a.a,{title:"Transactions",className:"user-transactions",children:[Object(O.jsx)("div",{className:"row",children:Object(O.jsx)("div",{className:"offset-md-2 col-md-8",children:Object(O.jsxs)("div",{className:"tab-wrapper",children:[Object(O.jsx)("div",{className:"P2P"===n?"active":"",onClick:function(){return c("P2P")},children:"P2P"}),Object(O.jsx)("div",{className:"TRADE"===n?"active":"",onClick:function(){return c("TRADE")},children:"Trade"}),Object(O.jsx)("div",{className:"TRANSFER"===n?"active":"",onClick:function(){return c("TRANSFER")},children:"Transfer"}),Object(O.jsx)("div",{className:"RECEIVE"===n?"active":"",onClick:function(){return c("RECEIVE")},children:"Received"})]})})}),"P2P"===n&&Object(O.jsx)(v,{}),"TRADE"===n&&Object(O.jsx)(v,{}),"TRANSFER"===n&&Object(O.jsx)(w,{}),"RECEIVE"===n&&Object(O.jsx)(N,{})]})}}}]);
//# sourceMappingURL=18.bd449781.chunk.js.map