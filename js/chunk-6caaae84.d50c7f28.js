(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6caaae84"],{2571:function(e,t,a){},"39d5":function(e,t,a){"use strict";a("b0c0");var o=a("7a23"),c=["src"],r={class:"name ellipsis"},n={class:"desc ellipsis"},i={class:"price"};function l(e,t,a,l,s,d){var u=Object(o["resolveComponent"])("RouterLink");return Object(o["openBlock"])(),Object(o["createBlock"])(u,{to:"/goods/".concat(a.goods.id),class:"goods-item"},{default:Object(o["withCtx"])((function(){return[Object(o["createElementVNode"])("img",{src:a.goods.picture,alt:""},null,8,c),Object(o["createElementVNode"])("p",r,Object(o["toDisplayString"])(a.goods.name),1),Object(o["createElementVNode"])("p",n,Object(o["toDisplayString"])(a.goods.desc),1),Object(o["createElementVNode"])("p",i,"¥"+Object(o["toDisplayString"])(a.goods.price),1)]})),_:1},8,["to"])}var s={name:"GoodsItem",props:{goods:{type:Object,default:function(){return{}}}}},d=(a("fd8e"),a("6b0d")),u=a.n(d);const b=u()(s,[["render",l],["__scopeId","data-v-bef1b662"]]);t["a"]=b},"52d2":function(e,t,a){},"559c":function(e,t,a){"use strict";a("52d2")},"66b2":function(e,t,a){"use strict";a("ea7c")},"8f7e":function(e,t,a){"use strict";a.r(t);a("b0c0");var o=a("7a23"),c={class:"container"},r=Object(o["createTextVNode"])("首页"),n={class:"goods-list"};function i(e,t,a,i,l,s){var d=Object(o["resolveComponent"])("XtxBreadItem"),u=Object(o["resolveComponent"])("XtxBread"),b=Object(o["resolveComponent"])("SubFilter"),j=Object(o["resolveComponent"])("SubSort"),m=Object(o["resolveComponent"])("GoodsList"),O=Object(o["resolveComponent"])("XtxInfiniteLoading"),p=Object(o["resolveComponent"])("AppLayout");return Object(o["openBlock"])(),Object(o["createBlock"])(p,null,{default:Object(o["withCtx"])((function(){return[Object(o["createElementVNode"])("div",c,[Object(o["createVNode"])(u,null,{default:Object(o["withCtx"])((function(){var e;return[Object(o["createVNode"])(d,{path:"/"},{default:Object(o["withCtx"])((function(){return[r]})),_:1}),Object(o["createVNode"])(d,{path:"/category/".concat(null===(e=i.category.topCategory)||void 0===e?void 0:e.id)},{default:Object(o["withCtx"])((function(){var e;return[Object(o["createTextVNode"])(Object(o["toDisplayString"])(null===(e=i.category.topCategory)||void 0===e?void 0:e.name),1)]})),_:1},8,["path"]),Object(o["createVNode"])(o["Transition"],{name:"fade-right",mode:"out-in"},{default:Object(o["withCtx"])((function(){var e;return[(Object(o["openBlock"])(),Object(o["createBlock"])(d,{key:null===(e=i.category.subCategory)||void 0===e?void 0:e.id},{default:Object(o["withCtx"])((function(){var e;return[Object(o["createTextVNode"])(Object(o["toDisplayString"])(null===(e=i.category.subCategory)||void 0===e?void 0:e.name),1)]})),_:1}))]})),_:1})]})),_:1}),Object(o["createVNode"])(b,{onOnFilterChanged:i.onFilterSortChanged},null,8,["onOnFilterChanged"]),Object(o["createElementVNode"])("div",n,[Object(o["createVNode"])(j,{onOnSortChanged:i.onFilterSortChanged},null,8,["onOnSortChanged"]),i.goodsList?(Object(o["openBlock"])(),Object(o["createBlock"])(m,{key:0,goods:i.goodsList.items},null,8,["goods"])):Object(o["createCommentVNode"])("",!0),Object(o["createVNode"])(O,{loading:i.loading,finished:i.finished,onInfinite:i.loadMore},null,8,["loading","finished","onInfinite"])])])]})),_:1})}var l=a("2909"),s=a("5530"),d=(a("d3b7"),a("159b"),a("99af"),a("01de")),u=a("5502"),b=a("6c02"),j=function(e){return Object(o["pushScopeId"])("data-v-47363b3d"),e=e(),Object(o["popScopeId"])(),e},m={key:0,class:"sub-filter"},O={class:"item"},p=j((function(){return Object(o["createElementVNode"])("div",{class:"head"},"品牌：",-1)})),f={class:"body"},v=["onClick"],g={class:"head"},h={class:"body"},C=["onClick"],N={key:1,class:"sub-filter"};function k(e,t,a,c,r,n){var i,l,s=Object(o["resolveComponent"])("XtxSkeleton");return c.filters&&!c.filterLoading?(Object(o["openBlock"])(),Object(o["createElementBlock"])("div",m,[Object(o["createElementVNode"])("div",O,[p,Object(o["createElementVNode"])("div",f,[(Object(o["openBlock"])(!0),Object(o["createElementBlock"])(o["Fragment"],null,Object(o["renderList"])(null===(i=c.filters)||void 0===i?void 0:i.brands,(function(e){return Object(o["openBlock"])(),Object(o["createElementBlock"])("a",{href:"javascript:",key:e.id,class:Object(o["normalizeClass"])({active:c.filters.selectedBrandId===e.id}),onClick:function(t){c.filters.selectedBrandId=e.id,c.updateSelectedFilters()}},Object(o["toDisplayString"])(e.name),11,v)})),128))])]),(Object(o["openBlock"])(!0),Object(o["createElementBlock"])(o["Fragment"],null,Object(o["renderList"])(null===(l=c.filters)||void 0===l?void 0:l.saleProperties,(function(e){return Object(o["openBlock"])(),Object(o["createElementBlock"])("div",{class:"item",key:e.id},[Object(o["createElementVNode"])("div",g,Object(o["toDisplayString"])(e.name)+"：",1),Object(o["createElementVNode"])("div",h,[(Object(o["openBlock"])(!0),Object(o["createElementBlock"])(o["Fragment"],null,Object(o["renderList"])(e.properties,(function(t){return Object(o["openBlock"])(),Object(o["createElementBlock"])("a",{href:"javascript:",key:t.id,class:Object(o["normalizeClass"])({active:t.name===e.selectedFilterName}),onClick:function(a){e.selectedFilterName=t.name,c.updateSelectedFilters()}},Object(o["toDisplayString"])(t.name),11,C)})),128))])])})),128))])):(Object(o["openBlock"])(),Object(o["createElementBlock"])("div",N,[Object(o["createVNode"])(s,{class:"item",width:"800px",height:"40px"}),Object(o["createVNode"])(s,{class:"item",width:"800px",height:"40px"}),Object(o["createVNode"])(s,{class:"item",width:"600px",height:"40px"}),Object(o["createVNode"])(s,{class:"item",width:"600px",height:"40px"}),Object(o["createVNode"])(s,{class:"item",width:"600px",height:"40px"})]))}var y=a("c405"),V={name:"SubFilter",setup:function(e,t){var a=t.emit,o=Object(b["d"])(),c=S(a),r=c.filters,n=c.getData,i=c.updateSelectedFilters,l=c.filterLoading;return n(o.params.id),{filters:r,updateSelectedFilters:i,filterLoading:l}}};function S(e){var t=Object(o["ref"])(),a=Object(o["ref"])(!1),c={brandId:null,attrs:[]},r=function(){c.brandId=t.value.selectedBrandId,c.attrs=[],t.value.saleProperties.forEach((function(e){e.selectedFilterName&&"全部"!==e.selectedFilterName&&c.attrs.push({groupName:e.name,propertyName:e.selectedFilterName})})),e("onFilterChanged",c)},n=function(e){a.value=!0,Object(y["b"])(e).then((function(e){e.result.brands.unshift({name:"全部",id:null}),e.result.selectedBrandId=null,e.result.saleProperties.forEach((function(e){e.properties.unshift({name:"全部",id:null}),e.selectedFilterName="全部"})),t.value=e.result,a.value=!1}))};return Object(b["c"])((function(e){return n(e.params.id)})),{filters:t,getData:n,updateSelectedFilters:r,filterLoading:a}}a("a0b0");var B=a("6b0d"),E=a.n(B);const F=E()(V,[["render",k],["__scopeId","data-v-47363b3d"]]);var x=F,P={className:"sub-sort"},w={className:"sort"},I=Object(o["createTextVNode"])(" 价格排序 "),L={className:"check"},_=Object(o["createTextVNode"])("仅显示有货商品"),D=Object(o["createTextVNode"])("仅显示特惠商品");function M(e,t,a,c,r,n){var i=Object(o["resolveComponent"])("XtxCheckbox");return Object(o["openBlock"])(),Object(o["createElementBlock"])("div",P,[Object(o["createElementVNode"])("div",w,[Object(o["createElementVNode"])("a",{onClick:t[0]||(t[0]=function(e){return c.updateSortParams({sortField:"",sortMethod:"desc"})}),href:"javascript:",class:Object(o["normalizeClass"])({active:""===c.sortParams.sortField})},"默认排序",2),Object(o["createElementVNode"])("a",{onClick:t[1]||(t[1]=function(e){return c.updateSortParams({sortField:"publishTime"})}),href:"javascript:",class:Object(o["normalizeClass"])({active:"publishTime"===c.sortParams.sortField})},"最新商品",2),Object(o["createElementVNode"])("a",{onClick:t[2]||(t[2]=function(e){return c.updateSortParams({sortField:"orderNum"})}),href:"javascript:",class:Object(o["normalizeClass"])({active:"orderNum"===c.sortParams.sortField})},"最高人气",2),Object(o["createElementVNode"])("a",{onClick:t[3]||(t[3]=function(e){return c.updateSortParams({sortField:"evaluateNum"})}),href:"javascript:",class:Object(o["normalizeClass"])({active:"evaluateNum"===c.sortParams.sortField})},"评论最多",2),Object(o["createElementVNode"])("a",{href:"javascript:",onClick:t[4]||(t[4]=function(e){return c.updateSortParams({sortField:"price",sortMethod:"desc"===c.sortParams.sortMethod?"asc":"desc"})})},[I,Object(o["createElementVNode"])("i",{class:Object(o["normalizeClass"])([{active:"asc"===c.sortParams.sortMethod},"arrow up"])},null,2),Object(o["createElementVNode"])("i",{class:Object(o["normalizeClass"])(["arrow down",{active:"desc"===c.sortParams.sortMethod}])},null,2)])]),Object(o["createElementVNode"])("div",L,[Object(o["createVNode"])(i,{modelValue:c.sortParams.inventory,"onUpdate:modelValue":[t[5]||(t[5]=function(e){return c.sortParams.inventory=e}),t[6]||(t[6]=function(e){return c.updateSortParams({inventory:e})})]},{default:Object(o["withCtx"])((function(){return[_]})),_:1},8,["modelValue"]),Object(o["createVNode"])(i,{modelValue:c.sortParams.onlyDiscount,"onUpdate:modelValue":[t[7]||(t[7]=function(e){return c.sortParams.onlyDiscount=e}),t[8]||(t[8]=function(e){return c.updateSortParams({onlyDiscount:e})})]},{default:Object(o["withCtx"])((function(){return[D]})),_:1},8,["modelValue"])])])}var z={name:"SubSort",setup:function(e,t){var a=t.emit,o=T(a),c=o.sortParams,r=o.updateSortParams;return{sortParams:c,updateSortParams:r}}};function T(e){var t=Object(o["ref"])({sortField:"",sortMethod:"desc",inventory:!1,onlyDiscount:!1}),a=function(a){t.value=Object(s["a"])(Object(s["a"])({},t.value),a),e("onSortChanged",t.value)};return{sortParams:t,updateSortParams:a}}a("66b2");const G=E()(z,[["render",M],["__scopeId","data-v-a2bbccea"]]);var X=G;function A(e,t,a,c,r,n){var i=Object(o["resolveComponent"])("GoodsItem");return Object(o["openBlock"])(),Object(o["createElementBlock"])("ul",null,[(Object(o["openBlock"])(!0),Object(o["createElementBlock"])(o["Fragment"],null,Object(o["renderList"])(a.goods,(function(e){return Object(o["openBlock"])(),Object(o["createElementBlock"])("li",{key:e.id},[Object(o["createVNode"])(i,{goods:e},null,8,["goods"])])})),128))])}var J=a("39d5"),U={name:"GoodsList",components:{GoodsItem:J["a"]},props:{goods:{type:Array,default:function(){return[]}}}};a("559c");const R=E()(U,[["render",A],["__scopeId","data-v-6b7e7fba"]]);var q=R,H={name:"SubCategoryPage",components:{GoodsList:q,SubSort:X,SubFilter:x,AppLayout:d["a"]},setup:function(){var e=K(),t=Q(),a=t.goodsList,o=t.onFilterSortChanged,c=t.loadMore,r=t.loading,n=t.finished;return{category:e,goodsList:a,onFilterSortChanged:o,loadMore:c,loading:r,finished:n}}};function K(){var e=Object(u["b"])(),t=Object(b["d"])();return Object(o["computed"])((function(){var a={};return e.state.category.list.forEach((function(e){var o;null===(o=e.children)||void 0===o||o.forEach((function(o){o.id===t.params.id&&(a.topCategory={name:e.name,id:e.id},a.subCategory={name:o.name,id:o.id})}))})),a}))}function Q(){var e=Object(o["ref"])(),t=Object(b["d"])(),a=Object(o["ref"])({categoryId:t.params.id,page:0,pageSize:5}),c=Object(o["ref"])(!1),r=Object(o["ref"])(!1),n=function(){c.value=!0,Object(y["a"])(a.value).then((function(t){1===a.value.page?(e.value=t.result,r.value=!1):e.value=Object(s["a"])(Object(s["a"])({},t.result),{},{items:[].concat(Object(l["a"])(e.value.items),Object(l["a"])(t.result.items))}),c.value=!1,a.value.page!==t.result.pages&&0!==t.result.pages||(r.value=!0)}))},i=function(){a.value=Object(s["a"])(Object(s["a"])({},a.value),{},{page:a.value.page+1})},d=function(e){a.value=Object(s["a"])(Object(s["a"])(Object(s["a"])({},a.value),e),{},{page:1})};return Object(o["watch"])((function(){return a.value}),(function(){n()})),Object(b["c"])((function(e){a.value={categoryId:e.params.id,page:1}})),{goodsList:e,getData:n,onFilterSortChanged:d,loadMore:i,loading:c,finished:r}}a("e177a");const W=E()(H,[["render",i],["__scopeId","data-v-768ac092"]]);t["default"]=W},"9dcb":function(e,t,a){},a0b0:function(e,t,a){"use strict";a("2571")},c405:function(e,t,a){"use strict";a.d(t,"c",(function(){return c})),a.d(t,"b",(function(){return r})),a.d(t,"a",(function(){return n}));var o=a("b775");function c(e){return Object(o["a"])("/category","get",{id:e})}function r(e){return Object(o["a"])("/category/sub/filter","get",{id:e})}function n(e){return Object(o["a"])("/category/goods","post",e)}},e177a:function(e,t,a){"use strict";a("e17d")},e17d:function(e,t,a){},ea7c:function(e,t,a){},fd8e:function(e,t,a){"use strict";a("9dcb")}}]);
//# sourceMappingURL=chunk-6caaae84.d50c7f28.js.map