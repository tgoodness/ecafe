(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[14],{450:function(e,t,r){"use strict";r.d(t,"a",(function(){return g}));var n=r(1),s=r(21),i=r(10),a=r(22),c=r(90),o=r(60),u=r(111),l=r(64),d=function(e){function t(t,r){var n;return(n=e.call(this)||this).client=t,n.options=r,n.trackedProps=[],n.previousSelectError=null,n.bindMethods(),n.setOptions(r),n}Object(s.a)(t,e);var r=t.prototype;return r.bindMethods=function(){this.remove=this.remove.bind(this),this.refetch=this.refetch.bind(this)},r.onSubscribe=function(){1===this.listeners.length&&(this.currentQuery.addObserver(this),h(this.currentQuery,this.options)&&this.executeFetch(),this.updateTimers())},r.onUnsubscribe=function(){this.listeners.length||this.destroy()},r.shouldFetchOnReconnect=function(){return e=this.currentQuery,!1!==(t=this.options).enabled&&("always"===t.refetchOnReconnect||!1!==t.refetchOnReconnect&&b(e,t));var e,t},r.shouldFetchOnWindowFocus=function(){return e=this.currentQuery,!1!==(t=this.options).enabled&&("always"===t.refetchOnWindowFocus||!1!==t.refetchOnWindowFocus&&b(e,t));var e,t},r.destroy=function(){this.listeners=[],this.clearTimers(),this.currentQuery.removeObserver(this)},r.setOptions=function(e,t){var r=this.options,n=this.currentQuery;if(this.options=this.client.defaultQueryObserverOptions(e),"undefined"!==typeof this.options.enabled&&"boolean"!==typeof this.options.enabled)throw new Error("Expected enabled to be a boolean");this.options.queryKey||(this.options.queryKey=r.queryKey),this.updateQuery();var s=this.hasListeners();s&&f(this.currentQuery,n,this.options,r)&&this.executeFetch(),this.updateResult(t),!s||this.currentQuery===n&&this.options.enabled===r.enabled&&this.options.staleTime===r.staleTime||this.updateStaleTimeout(),!s||this.currentQuery===n&&this.options.enabled===r.enabled&&this.options.refetchInterval===r.refetchInterval||this.updateRefetchInterval()},r.getOptimisticResult=function(e){var t=this.client.defaultQueryObserverOptions(e),r=this.client.getQueryCache().build(this.client,t);return this.createResult(r,t)},r.getCurrentResult=function(){return this.currentResult},r.trackResult=function(e){var t=this,r={};return Object.keys(e).forEach((function(n){Object.defineProperty(r,n,{configurable:!1,enumerable:!0,get:function(){var r=n;return t.trackedProps.includes(r)||t.trackedProps.push(r),e[r]}})})),r},r.getNextResult=function(e){var t=this;return new Promise((function(r,n){var s=t.subscribe((function(t){t.isFetching||(s(),t.isError&&(null==e?void 0:e.throwOnError)?n(t.error):r(t))}))}))},r.getCurrentQuery=function(){return this.currentQuery},r.remove=function(){this.client.getQueryCache().remove(this.currentQuery)},r.refetch=function(e){return this.fetch(Object(n.a)({},e,{meta:{refetchPage:null==e?void 0:e.refetchPage}}))},r.fetchOptimistic=function(e){var t=this,r=this.client.defaultQueryObserverOptions(e),n=this.client.getQueryCache().build(this.client,r);return n.fetch().then((function(){return t.createResult(n,r)}))},r.fetch=function(e){var t=this;return this.executeFetch(e).then((function(){return t.updateResult(),t.currentResult}))},r.executeFetch=function(e){this.updateQuery();var t=this.currentQuery.fetch(this.options,e);return(null==e?void 0:e.throwOnError)||(t=t.catch(i.i)),t},r.updateStaleTimeout=function(){var e=this;if(this.clearStaleTimeout(),!i.e&&!this.currentResult.isStale&&Object(i.f)(this.options.staleTime)){var t=Object(i.r)(this.currentResult.dataUpdatedAt,this.options.staleTime)+1;this.staleTimeoutId=setTimeout((function(){e.currentResult.isStale||e.updateResult()}),t)}},r.updateRefetchInterval=function(){var e=this;this.clearRefetchInterval(),!i.e&&!1!==this.options.enabled&&Object(i.f)(this.options.refetchInterval)&&(this.refetchIntervalId=setInterval((function(){(e.options.refetchIntervalInBackground||c.a.isFocused())&&e.executeFetch()}),this.options.refetchInterval))},r.updateTimers=function(){this.updateStaleTimeout(),this.updateRefetchInterval()},r.clearTimers=function(){this.clearStaleTimeout(),this.clearRefetchInterval()},r.clearStaleTimeout=function(){clearTimeout(this.staleTimeoutId),this.staleTimeoutId=void 0},r.clearRefetchInterval=function(){clearInterval(this.refetchIntervalId),this.refetchIntervalId=void 0},r.createResult=function(e,t){var r,n=this.currentQuery,s=this.options,a=this.currentResult,c=this.currentResultState,o=this.currentResultOptions,l=e!==n,d=l?e.state:this.currentQueryInitialState,p=l?this.currentResult:this.previousQueryResult,v=e.state,j=v.dataUpdatedAt,O=v.error,m=v.errorUpdatedAt,y=v.isFetching,x=v.status,g=!1,R=!1;if(t.optimisticResults){var C=this.hasListeners(),S=!C&&h(e,t),E=C&&f(e,n,t,s);(S||E)&&(y=!0,j||(x="loading"))}if(t.keepPreviousData&&!v.dataUpdateCount&&(null==p?void 0:p.isSuccess)&&"error"!==x)r=p.data,j=p.dataUpdatedAt,x=p.status,g=!0;else if(t.select&&"undefined"!==typeof v.data)if(a&&v.data===(null==c?void 0:c.data)&&t.select===(null==o?void 0:o.select)&&!this.previousSelectError)r=a.data;else try{r=t.select(v.data),!1!==t.structuralSharing&&(r=Object(i.n)(null==a?void 0:a.data,r)),this.previousSelectError=null}catch(w){Object(u.a)().error(w),O=w,this.previousSelectError=w,m=Date.now(),x="error"}else r=v.data;if("undefined"!==typeof t.placeholderData&&"undefined"===typeof r&&("loading"===x||"idle"===x)){var N;if((null==a?void 0:a.isPlaceholderData)&&t.placeholderData===(null==o?void 0:o.placeholderData))N=a.data;else if(N="function"===typeof t.placeholderData?t.placeholderData():t.placeholderData,t.select&&"undefined"!==typeof N)try{N=t.select(N),!1!==t.structuralSharing&&(N=Object(i.n)(null==a?void 0:a.data,N)),this.previousSelectError=null}catch(w){Object(u.a)().error(w),O=w,this.previousSelectError=w,m=Date.now(),x="error"}"undefined"!==typeof N&&(x="success",r=N,R=!0)}return{status:x,isLoading:"loading"===x,isSuccess:"success"===x,isError:"error"===x,isIdle:"idle"===x,data:r,dataUpdatedAt:j,error:O,errorUpdatedAt:m,failureCount:v.fetchFailureCount,isFetched:v.dataUpdateCount>0||v.errorUpdateCount>0,isFetchedAfterMount:v.dataUpdateCount>d.dataUpdateCount||v.errorUpdateCount>d.errorUpdateCount,isFetching:y,isLoadingError:"error"===x&&0===v.dataUpdatedAt,isPlaceholderData:R,isPreviousData:g,isRefetchError:"error"===x&&0!==v.dataUpdatedAt,isStale:b(e,t),refetch:this.refetch,remove:this.remove}},r.shouldNotifyListeners=function(e,t){if(!t)return!0;if(e===t)return!1;var r=this.options,n=r.notifyOnChangeProps,s=r.notifyOnChangePropsExclusions;if(!n&&!s)return!0;if("tracked"===n&&!this.trackedProps.length)return!0;var i="tracked"===n?this.trackedProps:n;return Object.keys(e).some((function(r){var n=r,a=e[n]!==t[n],c=null==i?void 0:i.some((function(e){return e===r})),o=null==s?void 0:s.some((function(e){return e===r}));return a&&!o&&(!i||c)}))},r.updateResult=function(e){var t=this.currentResult;if(this.currentResult=this.createResult(this.currentQuery,this.options),this.currentResultState=this.currentQuery.state,this.currentResultOptions=this.options,!Object(i.p)(this.currentResult,t)){var r={cache:!0};!1!==(null==e?void 0:e.listeners)&&this.shouldNotifyListeners(this.currentResult,t)&&(r.listeners=!0),this.notify(Object(n.a)({},r,e))}},r.updateQuery=function(){var e=this.client.getQueryCache().build(this.client,this.options);if(e!==this.currentQuery){var t=this.currentQuery;this.currentQuery=e,this.currentQueryInitialState=e.state,this.previousQueryResult=this.currentResult,this.hasListeners()&&(null==t||t.removeObserver(this),e.addObserver(this))}},r.onQueryUpdate=function(e){var t={};"success"===e.type?t.onSuccess=!0:"error"!==e.type||Object(l.c)(e.error)||(t.onError=!0),this.updateResult(t),this.hasListeners()&&this.updateTimers()},r.notify=function(e){var t=this;a.a.batch((function(){e.onSuccess?(null==t.options.onSuccess||t.options.onSuccess(t.currentResult.data),null==t.options.onSettled||t.options.onSettled(t.currentResult.data,null)):e.onError&&(null==t.options.onError||t.options.onError(t.currentResult.error),null==t.options.onSettled||t.options.onSettled(void 0,t.currentResult.error)),e.listeners&&t.listeners.forEach((function(e){e(t.currentResult)})),e.cache&&t.client.getQueryCache().notify({query:t.currentQuery,type:"observerResultsUpdated"})}))},t}(o.a);function h(e,t){return function(e,t){return!1!==t.enabled&&!e.state.dataUpdatedAt&&!("error"===e.state.status&&!1===t.retryOnMount)}(e,t)||function(e,t){return!1!==t.enabled&&e.state.dataUpdatedAt>0&&("always"===t.refetchOnMount||!1!==t.refetchOnMount&&b(e,t))}(e,t)}function f(e,t,r,n){return!1!==r.enabled&&(e!==t||!1===n.enabled)&&("error"!==e.state.status||!1===n.enabled)&&b(e,r)}function b(e,t){return e.isStaleByTime(t.staleTime)}var p=r(0),v=r.n(p);function j(){var e=!1;return{clearReset:function(){e=!1},reset:function(){e=!0},isReset:function(){return e}}}var O=v.a.createContext(j()),m=r(170),y=r(171);function x(e,t){var r=v.a.useRef(!1),n=v.a.useState(0)[1],s=Object(m.b)(),i=v.a.useContext(O),c=s.defaultQueryObserverOptions(e);c.optimisticResults=!0,c.onError&&(c.onError=a.a.batchCalls(c.onError)),c.onSuccess&&(c.onSuccess=a.a.batchCalls(c.onSuccess)),c.onSettled&&(c.onSettled=a.a.batchCalls(c.onSettled)),c.suspense&&"number"!==typeof c.staleTime&&(c.staleTime=1e3),(c.suspense||c.useErrorBoundary)&&(i.isReset()||(c.retryOnMount=!1));var o=v.a.useState((function(){return new t(s,c)}))[0],u=o.getOptimisticResult(c);if(v.a.useEffect((function(){r.current=!0,i.clearReset();var e=o.subscribe(a.a.batchCalls((function(){r.current&&n((function(e){return e+1}))})));return o.updateResult(),function(){r.current=!1,e()}}),[i,o]),v.a.useEffect((function(){o.setOptions(c,{listeners:!1})}),[c,o]),c.suspense&&u.isLoading)throw o.fetchOptimistic(c).then((function(e){var t=e.data;null==c.onSuccess||c.onSuccess(t),null==c.onSettled||c.onSettled(t,null)})).catch((function(e){i.clearReset(),null==c.onError||c.onError(e),null==c.onSettled||c.onSettled(void 0,e)}));if(u.isError&&!u.isFetching&&Object(y.a)(c.suspense,c.useErrorBoundary,u.error))throw u.error;return"tracked"===c.notifyOnChangeProps&&(u=o.trackResult(u)),u}function g(e,t,r){return x(Object(i.l)(e,t,r),d)}},470:function(e,t,r){},477:function(e,t,r){"use strict";var n=r(1),s=r(5),i=r(0),a=r(8),c=r(4),o=r(12),u=r.n(o),l=r(167),d=r(145),h=i.forwardRef((function(e,t){var r,n=e.prefixCls,o=void 0===n?"rc-switch":n,h=e.className,f=e.checked,b=e.defaultChecked,p=e.disabled,v=e.loadingIcon,j=e.checkedChildren,O=e.unCheckedChildren,m=e.onClick,y=e.onChange,x=e.onKeyDown,g=Object(c.a)(e,["prefixCls","className","checked","defaultChecked","disabled","loadingIcon","checkedChildren","unCheckedChildren","onClick","onChange","onKeyDown"]),R=Object(l.a)(!1,{value:f,defaultValue:b}),C=Object(a.a)(R,2),S=C[0],E=C[1];function N(e,t){var r=S;return p||(E(r=e),null===y||void 0===y||y(r,t)),r}var w=u()(o,h,(r={},Object(s.a)(r,"".concat(o,"-checked"),S),Object(s.a)(r,"".concat(o,"-disabled"),p),r));return i.createElement("button",Object.assign({},g,{type:"button",role:"switch","aria-checked":S,disabled:p,className:w,ref:t,onKeyDown:function(e){e.which===d.a.LEFT?N(!1,e):e.which===d.a.RIGHT&&N(!0,e),null===x||void 0===x||x(e)},onClick:function(e){var t=N(!S,e);null===m||void 0===m||m(t,e)}}),v,i.createElement("span",{className:"".concat(o,"-inner")},S?j:O))}));h.displayName="Switch";var f=h,b=r(92),p=r(181),v=r(93),j=r(103),O=r(57),m=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var s=0;for(n=Object.getOwnPropertySymbols(e);s<n.length;s++)t.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(e,n[s])&&(r[n[s]]=e[n[s]])}return r},y=i.forwardRef((function(e,t){var r,a=e.prefixCls,c=e.size,o=e.loading,l=e.className,d=void 0===l?"":l,h=e.disabled,y=m(e,["prefixCls","size","loading","className","disabled"]);Object(O.a)("checked"in y||!("value"in y),"Switch","`value` is not a valid prop, do you mean `checked`?");var x=i.useContext(v.b),g=x.getPrefixCls,R=x.direction,C=i.useContext(j.b),S=g("switch",a),E=i.createElement("div",{className:"".concat(S,"-handle")},o&&i.createElement(b.a,{className:"".concat(S,"-loading-icon")})),N=u()((r={},Object(s.a)(r,"".concat(S,"-small"),"small"===(c||C)),Object(s.a)(r,"".concat(S,"-loading"),o),Object(s.a)(r,"".concat(S,"-rtl"),"rtl"===R),r),d);return i.createElement(p.a,{insertExtraNode:!0},i.createElement(f,Object(n.a)({},y,{prefixCls:S,className:N,disabled:h||o,ref:t,loadingIcon:E})))}));y.__ANT_SWITCH=!0,y.displayName="Switch";t.a=y},494:function(e,t,r){"use strict";r.r(t);var n=r(26),s=r(0),i=r(429),a=r(477),c=r(28),o=r(77),u=r(450),l=r(87),d=r(164),h=r(428),f=r(92),b=r(165),p=r(170),v=r(434),j=r(110),O=r(144),m=r(43);var y=function(e,t,r){var i=Object(s.useReducer)(O.b,O.a),a=Object(n.a)(i,2),c=a[0],o=a[1],u=Object(p.b)(),l=Object(v.a)(j.i,{onMutate:function(){o({type:m.d})},onError:function(e){o({type:m.b,message:e})},onSuccess:function(e){u.invalidateQueries("admin"),o({type:m.e,message:e}),setTimeout((function(){r()}),2e3)}}).mutate;return[c,function(){l({action:e,registrationId:t})},function(e,t){"clickaway"!==t&&o({type:m.a})}]},x=r(2);var g=function(e){var t=e.action,r=e.registrationId,s=e.visible,i=e.handleCancel,a=y("Enable"===t?"Unlock":"Lock",r,i),c=Object(n.a)(a,3),o=c[0],u=c[1],l=c[2];return Object(x.jsxs)(h.a,{className:"confirm-modal",visible:s,onCancel:i,footer:!1,closable:!1,children:[Object(x.jsxs)("h6",{children:[t," this admin?"]}),Object(x.jsxs)("div",{className:"confirm-modal-wrapper",children:[Object(x.jsx)("h5",{onClick:i,children:"CANCEL"}),Object(x.jsxs)("h5",{onClick:u,children:[" ",o.loading?Object(x.jsx)(f.a,{}):"CONFIRM"]})]}),Object(x.jsx)(b.a,{open:o.open,msg:o.message,onClose:l})]})};var R=function(){var e=Object(s.useState)(!1),t=Object(n.a)(e,2),r=t[0],i=t[1],a=Object(s.useState)(""),c=Object(n.a)(a,2),o=c[0],u=c[1];return[o,r,function(e){u(!0===e?"Enable":"Disable"),i(!0)},function(){i(!1)}]},C=r(58),S=r(56);r(470);t.default=function(){var e=Object(c.i)().registrationId,t=Object(u.a)(["admin",e],(function(){return Object(j.b)(e)})),r=t.status,s=t.error,h=t.data,f=R(),b=Object(n.a)(f,4),p=b[0],v=b[1],O=b[2],m=b[3];if("success"!==r)return Object(x.jsx)(d.a,{status:r,error:s,data:h,title:"Admin"});var y=h.data.data.admin,E=h.data.data.admin.loginActivities,N="";if(E.length>0){var w=h.data.data.admin.loginActivities.length-1;N=h.data.data.admin.loginActivities[w]}return Object(x.jsxs)(l.a,{title:"Admin",className:"sub-admin",children:[Object(x.jsx)("div",{className:"row",children:Object(x.jsxs)("div",{className:"offset-md-2 col-md-8",children:[Object(x.jsxs)("div",{className:"user-bio-wrapper",children:[Object(x.jsx)(i.a,{src:C.a.adminImage(y.image),alt:"User Avater",size:100}),null!==y.firstName&&Object(x.jsx)("h5",{children:"".concat(y.firstName," ").concat(y.lastName)}),Object(x.jsx)("h6",{children:y.email}),Object(x.jsx)("div",{className:"switch-wrapper",children:Object(x.jsxs)("h6",{children:[Object(x.jsx)(a.a,{checked:!!y.isLocked,onClick:function(){O(y.isLocked)}}),Object(x.jsx)("span",{children:"Disabled"})]})}),Object(x.jsx)(o.b,{to:"/sub-admin/activity/".concat(e),children:Object(x.jsx)("span",{className:"transaction-link",children:"Activies"})})]}),Object(x.jsxs)("div",{className:"row",children:[Object(x.jsx)("div",{className:"".concat(E.length>0?"col-md-6":"offset-md-3 col-md-6"),children:Object(x.jsxs)("div",{className:"info-wrapper",children:[Object(x.jsx)("h5",{className:"title",children:"Profile Information"}),Object(x.jsxs)("div",{className:"data",children:[Object(x.jsx)("h6",{children:"Phone Number"}),Object(x.jsx)("h5",{children:y.phoneNumber})]}),Object(x.jsxs)("div",{className:"data",children:[Object(x.jsx)("h6",{children:"Role"}),Object(x.jsx)("h5",{children:y.role})]}),Object(x.jsxs)("div",{className:"data",children:[Object(x.jsx)("h6",{children:"Account Status"}),Object(x.jsx)("h5",{children:y.isLocked?"Disable":"Enable"})]})]})}),E.length>0&&Object(x.jsx)("div",{className:"col-md-6",children:Object(x.jsxs)("div",{className:"info-wrapper",children:[Object(x.jsx)("h5",{className:"title",children:"Login Details"}),Object(x.jsxs)("div",{className:"data",children:[Object(x.jsx)("h6",{children:"Browser"}),Object(x.jsx)("h5",{children:N.deviceName})]}),Object(x.jsxs)("div",{className:"double-data",children:[Object(x.jsxs)("div",{children:[Object(x.jsx)("h6",{children:"Device"}),Object(x.jsx)("h5",{children:N.deviceModel})]}),Object(x.jsxs)("div",{children:[Object(x.jsx)("h6",{children:"Ip Address"}),Object(x.jsx)("h5",{children:N.ip})]})]}),Object(x.jsxs)("div",{className:"data",children:[Object(x.jsx)("h6",{children:"Time & Date"}),Object(x.jsxs)("h5",{children:[S.a.dateFormat(N.dateAndTime)," -",S.a.timeFormat(N.dateAndTime)]})]})]})})]})]})}),Object(x.jsx)(g,{action:p,registrationId:e,visible:v,handleCancel:m})]})}}}]);
//# sourceMappingURL=14.aee8b65a.chunk.js.map