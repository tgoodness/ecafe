(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[5],{439:function(e,t,r){"use strict";var s=r(3),n=r(0),c={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M765.7 486.8L314.9 134.7A7.97 7.97 0 00302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 000-50.4z"}}]},name:"right",theme:"outlined"},i=r(30),a=function(e,t){return n.createElement(i.a,Object(s.a)(Object(s.a)({},e),{},{ref:t,icon:c}))};a.displayName="RightOutlined";t.a=n.forwardRef(a)},443:function(e,t,r){"use strict";r.d(t,"a",(function(){return u}));var s=r(14),n=(r(0),r(228)),c=r(229),i=r(354),a=r(226),l=r(225),o=r(115),d=r.n(o),h=r(2);function u(e){var t=e.value,r=e.type,o=e.name,u=e.onChange,j=e.label,b=e.error,A=void 0===b?null:b,p=e.helperText,O=e.disabled,f=void 0===O?null:O,v=e.id,m=void 0===v?null:v,x=e.img;return Object(h.jsxs)(l.a,{variant:"outlined",className:"text-field",children:[Object(h.jsx)(c.a,{htmlFor:"outlined-adornment-password ",children:j}),Object(h.jsx)(n.a,Object(s.a)(Object(s.a)({type:r,value:t,label:j,name:o,id:m,disabled:f},A&&{error:!0}),{},{onChange:u,endAdornment:Object(h.jsx)(i.a,{position:"end",children:Object(h.jsx)("img",{src:x,width:"25",alt:"Addon Icon"})}),labelWidth:70,autoComplete:"off"})),Object(h.jsxs)(a.a,{className:"text-danger",children:[A&&Object(h.jsx)(d.a,{style:{fontSize:"15px"}})," ",p]})]})}},450:function(e,t,r){"use strict";r.d(t,"a",(function(){return B}));var s=r(1),n=r(21),c=r(10),i=r(22),a=r(90),l=r(60),o=r(111),d=r(64),h=function(e){function t(t,r){var s;return(s=e.call(this)||this).client=t,s.options=r,s.trackedProps=[],s.previousSelectError=null,s.bindMethods(),s.setOptions(r),s}Object(n.a)(t,e);var r=t.prototype;return r.bindMethods=function(){this.remove=this.remove.bind(this),this.refetch=this.refetch.bind(this)},r.onSubscribe=function(){1===this.listeners.length&&(this.currentQuery.addObserver(this),u(this.currentQuery,this.options)&&this.executeFetch(),this.updateTimers())},r.onUnsubscribe=function(){this.listeners.length||this.destroy()},r.shouldFetchOnReconnect=function(){return e=this.currentQuery,!1!==(t=this.options).enabled&&("always"===t.refetchOnReconnect||!1!==t.refetchOnReconnect&&b(e,t));var e,t},r.shouldFetchOnWindowFocus=function(){return e=this.currentQuery,!1!==(t=this.options).enabled&&("always"===t.refetchOnWindowFocus||!1!==t.refetchOnWindowFocus&&b(e,t));var e,t},r.destroy=function(){this.listeners=[],this.clearTimers(),this.currentQuery.removeObserver(this)},r.setOptions=function(e,t){var r=this.options,s=this.currentQuery;if(this.options=this.client.defaultQueryObserverOptions(e),"undefined"!==typeof this.options.enabled&&"boolean"!==typeof this.options.enabled)throw new Error("Expected enabled to be a boolean");this.options.queryKey||(this.options.queryKey=r.queryKey),this.updateQuery();var n=this.hasListeners();n&&j(this.currentQuery,s,this.options,r)&&this.executeFetch(),this.updateResult(t),!n||this.currentQuery===s&&this.options.enabled===r.enabled&&this.options.staleTime===r.staleTime||this.updateStaleTimeout(),!n||this.currentQuery===s&&this.options.enabled===r.enabled&&this.options.refetchInterval===r.refetchInterval||this.updateRefetchInterval()},r.getOptimisticResult=function(e){var t=this.client.defaultQueryObserverOptions(e),r=this.client.getQueryCache().build(this.client,t);return this.createResult(r,t)},r.getCurrentResult=function(){return this.currentResult},r.trackResult=function(e){var t=this,r={};return Object.keys(e).forEach((function(s){Object.defineProperty(r,s,{configurable:!1,enumerable:!0,get:function(){var r=s;return t.trackedProps.includes(r)||t.trackedProps.push(r),e[r]}})})),r},r.getNextResult=function(e){var t=this;return new Promise((function(r,s){var n=t.subscribe((function(t){t.isFetching||(n(),t.isError&&(null==e?void 0:e.throwOnError)?s(t.error):r(t))}))}))},r.getCurrentQuery=function(){return this.currentQuery},r.remove=function(){this.client.getQueryCache().remove(this.currentQuery)},r.refetch=function(e){return this.fetch(Object(s.a)({},e,{meta:{refetchPage:null==e?void 0:e.refetchPage}}))},r.fetchOptimistic=function(e){var t=this,r=this.client.defaultQueryObserverOptions(e),s=this.client.getQueryCache().build(this.client,r);return s.fetch().then((function(){return t.createResult(s,r)}))},r.fetch=function(e){var t=this;return this.executeFetch(e).then((function(){return t.updateResult(),t.currentResult}))},r.executeFetch=function(e){this.updateQuery();var t=this.currentQuery.fetch(this.options,e);return(null==e?void 0:e.throwOnError)||(t=t.catch(c.i)),t},r.updateStaleTimeout=function(){var e=this;if(this.clearStaleTimeout(),!c.e&&!this.currentResult.isStale&&Object(c.f)(this.options.staleTime)){var t=Object(c.r)(this.currentResult.dataUpdatedAt,this.options.staleTime)+1;this.staleTimeoutId=setTimeout((function(){e.currentResult.isStale||e.updateResult()}),t)}},r.updateRefetchInterval=function(){var e=this;this.clearRefetchInterval(),!c.e&&!1!==this.options.enabled&&Object(c.f)(this.options.refetchInterval)&&(this.refetchIntervalId=setInterval((function(){(e.options.refetchIntervalInBackground||a.a.isFocused())&&e.executeFetch()}),this.options.refetchInterval))},r.updateTimers=function(){this.updateStaleTimeout(),this.updateRefetchInterval()},r.clearTimers=function(){this.clearStaleTimeout(),this.clearRefetchInterval()},r.clearStaleTimeout=function(){clearTimeout(this.staleTimeoutId),this.staleTimeoutId=void 0},r.clearRefetchInterval=function(){clearInterval(this.refetchIntervalId),this.refetchIntervalId=void 0},r.createResult=function(e,t){var r,s=this.currentQuery,n=this.options,i=this.currentResult,a=this.currentResultState,l=this.currentResultOptions,d=e!==s,h=d?e.state:this.currentQueryInitialState,A=d?this.currentResult:this.previousQueryResult,p=e.state,O=p.dataUpdatedAt,f=p.error,v=p.errorUpdatedAt,m=p.isFetching,x=p.status,B=!1,y=!1;if(t.optimisticResults){var S=this.hasListeners(),R=!S&&u(e,t),g=S&&j(e,s,t,n);(R||g)&&(m=!0,O||(x="loading"))}if(t.keepPreviousData&&!p.dataUpdateCount&&(null==A?void 0:A.isSuccess)&&"error"!==x)r=A.data,O=A.dataUpdatedAt,x=A.status,B=!0;else if(t.select&&"undefined"!==typeof p.data)if(i&&p.data===(null==a?void 0:a.data)&&t.select===(null==l?void 0:l.select)&&!this.previousSelectError)r=i.data;else try{r=t.select(p.data),!1!==t.structuralSharing&&(r=Object(c.n)(null==i?void 0:i.data,r)),this.previousSelectError=null}catch(N){Object(o.a)().error(N),f=N,this.previousSelectError=N,v=Date.now(),x="error"}else r=p.data;if("undefined"!==typeof t.placeholderData&&"undefined"===typeof r&&("loading"===x||"idle"===x)){var C;if((null==i?void 0:i.isPlaceholderData)&&t.placeholderData===(null==l?void 0:l.placeholderData))C=i.data;else if(C="function"===typeof t.placeholderData?t.placeholderData():t.placeholderData,t.select&&"undefined"!==typeof C)try{C=t.select(C),!1!==t.structuralSharing&&(C=Object(c.n)(null==i?void 0:i.data,C)),this.previousSelectError=null}catch(N){Object(o.a)().error(N),f=N,this.previousSelectError=N,v=Date.now(),x="error"}"undefined"!==typeof C&&(x="success",r=C,y=!0)}return{status:x,isLoading:"loading"===x,isSuccess:"success"===x,isError:"error"===x,isIdle:"idle"===x,data:r,dataUpdatedAt:O,error:f,errorUpdatedAt:v,failureCount:p.fetchFailureCount,isFetched:p.dataUpdateCount>0||p.errorUpdateCount>0,isFetchedAfterMount:p.dataUpdateCount>h.dataUpdateCount||p.errorUpdateCount>h.errorUpdateCount,isFetching:m,isLoadingError:"error"===x&&0===p.dataUpdatedAt,isPlaceholderData:y,isPreviousData:B,isRefetchError:"error"===x&&0!==p.dataUpdatedAt,isStale:b(e,t),refetch:this.refetch,remove:this.remove}},r.shouldNotifyListeners=function(e,t){if(!t)return!0;if(e===t)return!1;var r=this.options,s=r.notifyOnChangeProps,n=r.notifyOnChangePropsExclusions;if(!s&&!n)return!0;if("tracked"===s&&!this.trackedProps.length)return!0;var c="tracked"===s?this.trackedProps:s;return Object.keys(e).some((function(r){var s=r,i=e[s]!==t[s],a=null==c?void 0:c.some((function(e){return e===r})),l=null==n?void 0:n.some((function(e){return e===r}));return i&&!l&&(!c||a)}))},r.updateResult=function(e){var t=this.currentResult;if(this.currentResult=this.createResult(this.currentQuery,this.options),this.currentResultState=this.currentQuery.state,this.currentResultOptions=this.options,!Object(c.p)(this.currentResult,t)){var r={cache:!0};!1!==(null==e?void 0:e.listeners)&&this.shouldNotifyListeners(this.currentResult,t)&&(r.listeners=!0),this.notify(Object(s.a)({},r,e))}},r.updateQuery=function(){var e=this.client.getQueryCache().build(this.client,this.options);if(e!==this.currentQuery){var t=this.currentQuery;this.currentQuery=e,this.currentQueryInitialState=e.state,this.previousQueryResult=this.currentResult,this.hasListeners()&&(null==t||t.removeObserver(this),e.addObserver(this))}},r.onQueryUpdate=function(e){var t={};"success"===e.type?t.onSuccess=!0:"error"!==e.type||Object(d.c)(e.error)||(t.onError=!0),this.updateResult(t),this.hasListeners()&&this.updateTimers()},r.notify=function(e){var t=this;i.a.batch((function(){e.onSuccess?(null==t.options.onSuccess||t.options.onSuccess(t.currentResult.data),null==t.options.onSettled||t.options.onSettled(t.currentResult.data,null)):e.onError&&(null==t.options.onError||t.options.onError(t.currentResult.error),null==t.options.onSettled||t.options.onSettled(void 0,t.currentResult.error)),e.listeners&&t.listeners.forEach((function(e){e(t.currentResult)})),e.cache&&t.client.getQueryCache().notify({query:t.currentQuery,type:"observerResultsUpdated"})}))},t}(l.a);function u(e,t){return function(e,t){return!1!==t.enabled&&!e.state.dataUpdatedAt&&!("error"===e.state.status&&!1===t.retryOnMount)}(e,t)||function(e,t){return!1!==t.enabled&&e.state.dataUpdatedAt>0&&("always"===t.refetchOnMount||!1!==t.refetchOnMount&&b(e,t))}(e,t)}function j(e,t,r,s){return!1!==r.enabled&&(e!==t||!1===s.enabled)&&("error"!==e.state.status||!1===s.enabled)&&b(e,r)}function b(e,t){return e.isStaleByTime(t.staleTime)}var A=r(0),p=r.n(A);function O(){var e=!1;return{clearReset:function(){e=!1},reset:function(){e=!0},isReset:function(){return e}}}var f=p.a.createContext(O()),v=r(170),m=r(171);function x(e,t){var r=p.a.useRef(!1),s=p.a.useState(0)[1],n=Object(v.b)(),c=p.a.useContext(f),a=n.defaultQueryObserverOptions(e);a.optimisticResults=!0,a.onError&&(a.onError=i.a.batchCalls(a.onError)),a.onSuccess&&(a.onSuccess=i.a.batchCalls(a.onSuccess)),a.onSettled&&(a.onSettled=i.a.batchCalls(a.onSettled)),a.suspense&&"number"!==typeof a.staleTime&&(a.staleTime=1e3),(a.suspense||a.useErrorBoundary)&&(c.isReset()||(a.retryOnMount=!1));var l=p.a.useState((function(){return new t(n,a)}))[0],o=l.getOptimisticResult(a);if(p.a.useEffect((function(){r.current=!0,c.clearReset();var e=l.subscribe(i.a.batchCalls((function(){r.current&&s((function(e){return e+1}))})));return l.updateResult(),function(){r.current=!1,e()}}),[c,l]),p.a.useEffect((function(){l.setOptions(a,{listeners:!1})}),[a,l]),a.suspense&&o.isLoading)throw l.fetchOptimistic(a).then((function(e){var t=e.data;null==a.onSuccess||a.onSuccess(t),null==a.onSettled||a.onSettled(t,null)})).catch((function(e){c.clearReset(),null==a.onError||a.onError(e),null==a.onSettled||a.onSettled(void 0,e)}));if(o.isError&&!o.isFetching&&Object(m.a)(a.suspense,a.useErrorBoundary,o.error))throw o.error;return"tracked"===a.notifyOnChangeProps&&(o=l.trackResult(o)),o}function B(e,t,r){return x(Object(c.l)(e,t,r),h)}},452:function(e,t,r){"use strict";var s=r(0),n=r(50);t.a=Object(n.a)(s.createElement("path",{d:"M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"}),"CheckOutlined")},457:function(e,t,r){},458:function(e,t,r){"use strict";var s=r(0),n=r(50);t.a=Object(n.a)(s.createElement("path",{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"}),"CloseOutlined")},486:function(e,t,r){"use strict";r.r(t);var s=r(0),n=r(450),c=r(50),i=Object(c.a)(s.createElement("path",{d:"M11 7h6v2h-6zm0 4h6v2h-6zm0 4h6v2h-6zM7 7h2v2H7zm0 4h2v2H7zm0 4h2v2H7zM20.1 3H3.9c-.5 0-.9.4-.9.9v16.2c0 .4.4.9.9.9h16.2c.4 0 .9-.5.9-.9V3.9c0-.5-.5-.9-.9-.9zM19 19H5V5h14v14z"}),"ListAltOutlined"),a=r(452),l=r(458),o=r(426),d=r(439),h=r(77),u=r(87),j=r(443),b=r(164),A=r(110),p=(r(457),r(2));t.default=function(){var e=Object(n.a)("analytics",A.e),t=e.status,r=e.error,s=e.data;if("success"!==t)return Object(p.jsx)(b.a,{status:t,error:r,title:"Dashboard"});var c=s.data.data.btc,O=s.data.data;return Object(p.jsx)(u.a,{title:"Dashboard",className:"dashboard",children:Object(p.jsx)("div",{className:"row",children:Object(p.jsx)("div",{className:"offset-md-2 col-md-8",children:Object(p.jsxs)("div",{className:"row section-one",children:[Object(p.jsx)("div",{className:"col-md-6 mb-3",children:Object(p.jsxs)("div",{className:"card-wrapper",children:[Object(p.jsxs)("div",{className:"title",children:[Object(p.jsx)("h5",{children:"Bitcoin Details"}),Object(p.jsx)("img",{src:"data:image/png;base64,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",alt:"Bitcoin Icon",width:"50"})]}),Object(p.jsxs)("div",{className:"first-row",children:[Object(p.jsxs)("h5",{children:[Object(p.jsxs)("span",{children:["$",c.platformBalance.balanceInDollar]})," ",Object(p.jsxs)("span",{children:[">",c.platformBalance.balanceInBTC]})]}),Object(p.jsx)("h6",{className:"label",children:"Botmecash"})]}),Object(p.jsxs)("div",{className:"second-row",children:[Object(p.jsxs)("h5",{children:["$",c.customerBalance.totalBalanceInDollar," ",Object(p.jsxs)("span",{children:[">"," ",c.customerBalance.totalBalance]})]}),Object(p.jsx)("h6",{className:"label",children:"Customer"})]})]})}),Object(p.jsx)("div",{className:"col-md-6 mb-3",children:Object(p.jsxs)("div",{className:"card-wrapper",children:[Object(p.jsxs)("div",{className:"title",children:[Object(p.jsx)("h5",{children:"Profits"}),Object(p.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEcAAABBCAYAAACD6bkCAAAACXBIWXMAABCcAAAQnAEmzTo0AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAASjSURBVHgB7ZzPbxtFFMffe2M7dexFpC0JiZCQkHAl1Ft6AXHoH5Bwa6QeQPxSeuDW/AGIO4IbopYAgYBK4UjvpBIXpBapEhcigcrFAYlIbZ107fXOvM5suo7XP8auvLEdez4Hr3fn7a783ffmzb7dMcIAXNneFi+8Bnl//2BB5DLFUMi5jEIBpwWmx6RU4BepWhNnHvx0cSMYZDe0NRpRFl6pLwYqXDpVYvQBEavZQr7yxcWNA6tdr4a37323KOpyZZpEaSdk3j/0CpVentRVnA/vff8S+OESzACh4iD3f/BX+a1rj9vbOsT56PcfXq4HjfMwQyCxxH+D3XaBqHXFeMysCWNg3XXwi7nSlT+2c63bm+K889u352YllLphBCo8OrxgklC8LRLHKEZSrcCMkyHMmewcr0fiLNTq50wDOLQHhUux90TiBEE4c/1ML0x4xd5D7/7yzfPOa5KwVJ5ZUuZstgiOBMzsmdAirMl5cHRQePXQowYqJ04XzpDI0TTfOw2DaqAgcPQkA+NAylUgLAGD17WdeReE2IExM3JxUKktLczVo5VeRrpByT0WuKULVbswJkYaVroat6kFuTqQMeIyKrgB3PBgTIzUczgpTFWHT2clDtGMu2JB9FKs6eVNGAMjE0eXJpdb+xgG/gxI/NzVluWP+rNkvpNeKhgP48tWCJXejVSFCcClcgvphhXyGiq+rPuSC93bscUUP9V3eAc97Jr3ezr8LusMd6nThioIXGGCMjPtwQmQjjg6oyCQ/rG4Gq0jDrKXp+0GyUQ97HiZAVZBwTop+YkS3fuvYUgprMR1rcgqjAkm/FiPLFM///Ceg6qEDOvNdeY9BtwBk6pjk6MU/vTq8y5z1N4PD5Opf4cZjgeEZhwE3DwvMm3qocI1SJHhxVGQvGIis2kEStrI9Tg0dPj9qa90ud9ho9SvZFMcVnwb2kJHiwXHAnGpzwPcZ2b4sGq7P+J2YU6S5LlSH0m7VG7BiWPBiWPBiWPBiWPBiWPBiWPBiWPBiWPBiWPBiWPBiWPBiWNheHEEJgrlJOU6jIKo+siJOhKkTBr1nNtwVNiKSgamKodKbiZsTG3mKT1rwt1orTkTXofW46Io6vKNd2xKdxjSJYVKIFb1Dy7rauBWy7Zlyx6D1o4H389UH4UoR9WvFEmpz6GbukTZt7p3MvBdU33kiQyrJlRWwLd0ebMESpXgpCETytFLBnfT9piYVJ9baWFM51wBoh2YAlwqt+DEseDEsUAZQXVwdBCI0Cc/UD44OljwC3VSxcl4F2aSMJPTPn9jwyczWxYcCRoSIk3ITP40s2XB0YSk2o+W5kM2wtE9355wjKN8/eYHkbNE4pgV5z1HPCjk78ffqXUjz3haV6Hca51j3hTHbPwP/b9D3VPDDJJh3tcRlCjcdbzts3bnxvx5lSvN0mwaI8yXr793v31711ehzGzh5/xaCaWagynHhFK7x8RY3xN7/9evVnAue3YaRTIJyGTpODN1tel3EONF+UPfyylchFM+q0/lRKjq4UMzjrGJEvNMbxiaSaHeSnW+4WXz+cbp6ZOyUgX/iJp/61Lnn3nYeALJerDj9hDhSwAAAABJRU5ErkJggg==",alt:"Profit Icon",width:"50"})]}),Object(p.jsxs)("div",{className:"first-row",children:[Object(p.jsxs)("h5",{children:["$",c.totalSellingProfitInDollar," ",Object(p.jsxs)("span",{children:[">",c.totalSellingProfitInCoin]})]}),Object(p.jsx)("h6",{children:"Trade Crypto"})]}),Object(p.jsxs)("div",{className:"second-row",children:[Object(p.jsxs)("h5",{children:["$",c.totalP2PProfitInDollar," ",Object(p.jsxs)("span",{children:[">",c.totalP2PProfitInCoin]})]}),Object(p.jsx)("h6",{children:"P2P"})]})]})}),Object(p.jsx)("div",{className:"col-md-6 mb-3",children:Object(p.jsx)(h.b,{to:"/users",children:Object(p.jsxs)("div",{className:"card-wrapper",children:[Object(p.jsxs)("div",{className:"title",children:[Object(p.jsx)("h5",{children:"Users"}),Object(p.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEcAAABBCAYAAACD6bkCAAAACXBIWXMAABCcAAAQnAEmzTo0AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAU6SURBVHgB7ZzPTxtXEMdnZu2lIDuhhdgBV6W9kKrqzbnXvZcjh/wD9NBLVapccW5VpKS3SvAPVOqV3Ovey62qFKS2qKU2qFiFmGBsdt9k3oId/1wbtG8xeD8HvPv2rY2/npk3M+s1wjAs/2Tdu5ebjL/z6l2OTSWcupqIWWTBTcGCkxg79Trblf3EwSHkP60Pcxr6HhVRFjKfp06glr5RYgyAWFXqp3bxvx9Sx37z+oqT/nYvpRxn/jaJ0gm7tfLe9OtiP0vqKU7mcfl95dbSMAYo5dbp9f4fpY2HJ53HusSZW/1/AaA6C2MEkXLV0d52p0DUuqMtZtyE0ShFFt29vwj53+zW8aY4ma92Z8bFlXqhBUof3X0Ay9yMsefiiGKOzfMw5hBZ9kLmINXc139mD9Mz+gBEgBMX77mwHk8cC0/HLs70Q7tXw3po+uu/piOracehWlI/Etl3EhDRhkJKatcicqpTENHFdGYnGZtQMKXCLRCyYrDZi+0t+Zy2YASZiE3aMRVe7ZQFpjwizLUOMlNJ8vT8qInkOpZFEAKkMIdA653CaPSY1DDrBJiDEcO4OErxvEJcHTSPAdcY3SSMEMbFIaLPellMD5LI8UcwQhgXR1xmafi5nIMRIoSYg4uXmDuMhYVGDEaLtpjDrpu0rPgj9iwKK2JaRVfBBqEqQQgYF4cBSuJaQ1oEbze2dCAniq+zdy42niwrpv5QMa2EIVAYS3lh+Kn4srFFaPVd+i0vLzJPCOKowrAzkWHjYjM7YIVrzbKNEYblbIlr/DhokszZUE1XGSaI8yUC/dUIJUMW63mm37zPcRFPtRzHIZJBNJ4whrha6TfPBWmtSaLHD7wRiTEI6gV4BehbELEoRZfvs0lJsq0Mf7ShLuVSIshqpJ409hF6C6BA/UJAFTkj2ft5uKSssy1kszVzSG51OZC5Auw8738cNkSYChhm1JLAJoy4iSwyIX/ZyJO0xZCCZ4q0e5onNHEkcZsjxBwBZ+VNznsZL3iuVlDMhV5JnVTpOh69cOVcvU8o7hSirRsXR2e60k9bk8Qt63323ujbq9ASd7JybBWQNsMsDYbBqDjiFEsWxb7pF1jbYFgSkaQphk+Ut6pJIgi0onMeCxvnk1YzNBFxbrVoJNPUwgBaa3AFGKEgQTfnNwd10tiWGwXLmRsvGvFg7UpXFUYzSBiNuOcKeZZlDiPi6KIRQkALZLLGClwcyT++GLItGszreQKZIXjLQTV0WzQgsqYa84GKI4mb/JNovJXQhYrlwACBiiMrlPE2Qs/XRTO954DdCq9FHLFZI3VWwEmggR4LQkW6Fz7fF+YisZQgyBA0gYojxcE2Dvje96VR/Fz8ddN3igFhNIGKgzrtZ8pLJR3I9wslhpV4gDAmCby2uqikA3ouuFZGstk1KkTi+BCJ40Mkjg+ROD5E4vgg18aoBhFdOHBcJa7VqxDRRQI/rBFO2MYvjt009M1pu99jlWYS6UOIaMM9szxN6Pc81s9YRdbTgmMflfXj+WoVOx6ZC2nXjb6t+uDpx56xeOLonch6zrl7J7PT2G7mOSkZHPdlPWY5JR1mGvtNcfQgvdr9k1zlwhjCcSz/8/SDYutY933lK79O0dT9RXWLf4mgEy3M3ndzO53jPdtJn+TZLh/vL0pwmoBbjnalTotp4Ntrm33897yl7Pduo0jeAiSrdGNl6sXARqS2oqPav8nTKqVsC270LY8uWw6pkyPHrpX9RGlwqS7t8jJbP3/0cspS05P6Tja4IdQma/VEea/a68c8/HgDMPzj37uK07YAAAAASUVORK5CYII=",alt:"Users Icon",width:"50"})]}),Object(p.jsxs)("div",{className:"first-row",children:[Object(p.jsx)("h5",{children:O.totalUser}),Object(p.jsx)("h6",{className:"label",children:"Active"})]}),Object(p.jsxs)("div",{className:"second-row",children:[Object(p.jsx)("h5",{children:O.totalUserDisabled}),Object(p.jsx)("h6",{className:"label",children:"Disabled"})]})]})})}),Object(p.jsx)("div",{className:"col-md-6 mb-3 transaction-section",children:Object(p.jsxs)("div",{className:"card-wrapper",children:[Object(p.jsxs)("div",{className:"title",children:[Object(p.jsx)("h5",{children:"Pending"}),Object(p.jsx)(i,{className:"pending"})]}),Object(p.jsx)(h.b,{to:"/trade-crypto",children:Object(p.jsxs)("div",{className:"first-row",children:[Object(p.jsxs)("div",{children:[Object(p.jsx)("h5",{children:c.totalPendingBTCSold}),Object(p.jsx)("h6",{className:"label",children:"Sell Crypto"})]}),Object(p.jsx)(d.a,{})]})}),Object(p.jsx)(h.b,{to:"/transfer",children:Object(p.jsxs)("div",{className:"second-row",children:[Object(p.jsxs)("div",{children:[Object(p.jsx)("h5",{children:O.totalPendingTransfer}),Object(p.jsx)("h6",{className:"label",children:"Transfer"})]}),Object(p.jsx)(d.a,{})]})})]})}),Object(p.jsx)("div",{className:"col-md-6 transaction-section mb-3",children:Object(p.jsxs)("div",{className:"card-wrapper",children:[Object(p.jsxs)("div",{className:"title",children:[Object(p.jsx)("h5",{children:"Completed"}),Object(p.jsx)(a.a,{className:"completed"})]}),Object(p.jsx)(h.b,{to:"/trade-crypto",children:Object(p.jsxs)("div",{className:"first-row",children:[Object(p.jsxs)("div",{children:[Object(p.jsx)("h5",{children:c.totalBTCSoldCompleted}),Object(p.jsx)("h6",{className:"label",children:"Sell Crypto"})]}),Object(p.jsx)(d.a,{})]})}),Object(p.jsx)(h.b,{to:"/transfer",children:Object(p.jsxs)("div",{className:"second-row",children:[Object(p.jsxs)("div",{children:[Object(p.jsx)("h5",{children:O.totalCompletedTransfer}),Object(p.jsx)("h6",{className:"label",children:"Transfer"})]}),Object(p.jsx)(d.a,{})]})})]})}),Object(p.jsx)("div",{className:"col-md-6 transaction-section",children:Object(p.jsxs)("div",{className:"card-wrapper",children:[Object(p.jsxs)("div",{className:"title",children:[Object(p.jsx)("h5",{children:"Cancelled"}),Object(p.jsx)(l.a,{className:"cancelled"})]}),Object(p.jsx)(h.b,{to:"/trade-crypto",children:Object(p.jsxs)("div",{className:"first-row",children:[Object(p.jsxs)("div",{children:[Object(p.jsx)("h5",{children:c.totalBTCSoldCancelled}),Object(p.jsx)("h6",{className:"label",children:"Sell Crypto"})]}),Object(p.jsx)(d.a,{})]})}),Object(p.jsx)(h.b,{to:"/transfer",children:Object(p.jsxs)("div",{className:"second-row",children:[Object(p.jsxs)("div",{children:[Object(p.jsx)("h5",{children:O.totalCancelledTransfer}),Object(p.jsx)("h6",{className:"label",children:"Transfer"})]}),Object(p.jsx)(d.a,{})]})})]})}),Object(p.jsx)("div",{className:"col-md-6  bitcoin-section mb-4",children:Object(p.jsxs)("div",{className:"card-wrapper",children:[Object(p.jsxs)("div",{className:"title",children:[Object(p.jsx)("h5",{children:"Sub Admins"}),Object(p.jsx)(o.a,{})]}),Object(p.jsx)(h.b,{to:"/trade-crypto",children:Object(p.jsxs)("div",{className:"first-row",children:[Object(p.jsxs)("div",{children:[Object(p.jsx)("h5",{children:O.totalEnabledAdmin}),Object(p.jsx)("h6",{className:"label",children:"Active"})]}),Object(p.jsx)(d.a,{})]})}),Object(p.jsx)(h.b,{to:"/transfer",children:Object(p.jsxs)("div",{className:"second-row",children:[Object(p.jsxs)("div",{children:[Object(p.jsx)("h5",{children:O.totalDisabledAdmin}),Object(p.jsx)("h6",{className:"label",children:"Disabled"})]}),Object(p.jsx)(d.a,{})]})})]})}),Object(p.jsx)("div",{className:"col-md-6 bitcoin-section",children:Object(p.jsxs)("div",{className:"converter",children:[Object(p.jsx)("h5",{children:"Bitcoin Converter"}),Object(p.jsx)(j.a,{label:"BTC",img:"data:image/png;base64,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"}),Object(p.jsx)(j.a,{label:"USD",img:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC8AAAAjCAYAAAAE5VPXAAAACXBIWXMAABCcAAAQnAEmzTo0AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAQKSURBVHgB1ZhtbFNVGMf/57Rd25W1q5t7dWzMIdixsaHoghAx0QR1ossMSiTT+EH0g1k08QMa52YkftCIiSZEiBHRSDASo0ScS3SEweKYyEC3Ac5tMpnb2Fu7tXd9ufd4zuElkPCScE9J+0ua23vPTfO/93n+z/OcEpyn7IeGxynBWwCrAAhB4hFghOyIzQSaetZtmRQXpMjK5jfrdAPbCIgdiQ5Be5TQx3rWNE6Syn2bfDpsrfwpspAkMBhbA07rq5QhpT6ZhAsIIXVeLVxMDbC1SDYYcRnEtop7lGUjGWHIoglaWa4LY7BQJDFWKCbX4cFiTy4iho72s308ugzxQvmbL/cWYMuy9WhYshY2akE8USbea0tFBRd+9y1F8txhsWFN3hLckZYNK4lPdppOG5fVjnXzl6Om4C4UpHp5Azznf4/NibfLanj6xPD71Gl83n8QhycGoDMDqjAl3pviwrsVT6Iqoxi8X6BjvB9T0RAezi1DIKrhu3+PYnX2Yrle6Z2PT/8+gO19B5T5wFQ8ny5cLoWdCU1hw6FteLFzJ/aPnpBrmh7FR6d+Rm3bx3i/txm6YeD54lXIdXqgClNv/k53njx+M/QbegLDV7xHVJ1d/3Sg0JXJI+VEqiUFqjAlfkTzy2NVxu34+nQngrHwFe8Teb65ey9UYyptdnPBE+Eg7s0sxvZ7nkPdghXctBlyjchPfJs3WbqvwZR7Cl0ZaCqvQaknDzZyeV2fjc2hY6Ifv4z2onX0JEJXicyNwMeDJtPiBRZex8vS81GeXoAHc3zyGOW5LtLIw/NcREB4ouH4t+ibGYMKhHgl3UPkdNfUEHYOtOOrwQ55bTISxPpDn+CVI7vQ7R+Gj5t7c3kt5lkdUIUp8aJz2qkV9JIOemkNn4jMYv/YSbx85EuMzPmxyJ2DkjR1+x5T4jeVPorv76/n9XvlNe/TYtGLj6Ry3jFVKjvHB/DEbcuwceFq2VHbxv66/Md5REq4kZ9dcB9y7G4Ma9M4FRiBKkyJbxntgW8wDxuKVuD10mpMlgQRiGly7Vb7POxe+RKyHG6ZWuPhWbzX+yP8UQ2qMCXe4Eb94EQLfvqvG88UVmEhz+l8Z7pcEz4Q3bTbfwatI73YO3wM05EQVKJkMyIEvnF8DzLtaajOX4r6RQ/JNHrh8A4M8blHTJbxQNmgLQx5NjyDweA4ZnhzGuPf4ylcoHwbKDrqUwe3yoFMNKp4olx8KBaRn5sB5fFWZ/+bihGmjKILSQb3l9hLHqXQ8YUcc5IK8ieNzP5KAy76GWOkDUkDCxPor3XVfDhNBx9onLPptJa//Obz4UhkgswgG4898k6LOLm41SlqbXS4NVTzp/LxSCTi34BBxuieP6ob+y9c+B8d7IJxDGkihQAAAABJRU5ErkJggg=="})]})})]})})})})}}}]);
//# sourceMappingURL=5.95cd3a58.chunk.js.map