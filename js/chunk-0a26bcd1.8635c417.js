(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0a26bcd1"],{"0bbf":function(e,t,c){},1371:function(e,t,c){"use strict";c("8616")},2532:function(e,t,c){"use strict";var n=c("23e7"),o=c("e330"),a=c("5a34"),r=c("1d80"),l=c("577e"),s=c("ab13"),i=o("".indexOf);n({target:"String",proto:!0,forced:!s("includes")},{includes:function(e){return!!~i(l(r(this)),l(a(e)),arguments.length>1?arguments[1]:void 0)}})},2853:function(e,t,c){"use strict";c("5648")},"39d5":function(e,t,c){"use strict";c("b0c0");var n=c("7a23"),o=["src"],a={class:"name ellipsis"},r={class:"desc ellipsis"},l={class:"price"};function s(e,t,c,s,i,d){var u=Object(n["resolveComponent"])("RouterLink");return Object(n["openBlock"])(),Object(n["createBlock"])(u,{to:"/goods/".concat(c.goods.id),class:"goods-item"},{default:Object(n["withCtx"])((function(){return[Object(n["createElementVNode"])("img",{src:c.goods.picture,alt:""},null,8,o),Object(n["createElementVNode"])("p",a,Object(n["toDisplayString"])(c.goods.name),1),Object(n["createElementVNode"])("p",r,Object(n["toDisplayString"])(c.goods.desc),1),Object(n["createElementVNode"])("p",l,"¥"+Object(n["toDisplayString"])(c.goods.price),1)]})),_:1},8,["to"])}var i={name:"GoodsItem",props:{goods:{type:Object,default:function(){return{}}}}},d=(c("fd8e"),c("6b0d")),u=c.n(d);const b=u()(i,[["render",s],["__scopeId","data-v-bef1b662"]]);t["a"]=b},"44e7":function(e,t,c){var n=c("861d"),o=c("c6b6"),a=c("b622"),r=a("match");e.exports=function(e){var t;return n(e)&&(void 0!==(t=e[r])?!!t:"RegExp"==o(e))}},"4cb6":function(e,t,c){"use strict";c("a69e")},"4cd8":function(e,t,c){"use strict";c("891e")},5648:function(e,t,c){},"5a34":function(e,t,c){var n=c("da84"),o=c("44e7"),a=n.TypeError;e.exports=function(e){if(o(e))throw a("The method doesn't accept regular expressions");return e}},"5cbc":function(e,t,c){"use strict";c("a725")},"5f4f":function(e,t,c){"use strict";c("0bbf")},8616:function(e,t,c){},"891e":function(e,t,c){},"98af":function(e,t,c){"use strict";c("f9d2")},"9dcb":function(e,t,c){},"9f59":function(e,t,c){"use strict";var n=c("7a23"),o=function(e){return Object(n["pushScopeId"])("data-v-26c9a4df"),e=e(),Object(n["popScopeId"])(),e},a={class:"goods-relevant"},r={class:"header"},l=o((function(){return Object(n["createElementVNode"])("i",{class:"icon"},null,-1)})),s={class:"title"};function i(e,t,c,o,i,d){var u=Object(n["resolveComponent"])("XtxCarousel");return Object(n["openBlock"])(),Object(n["createElementBlock"])("div",a,[Object(n["createElementVNode"])("div",r,[l,Object(n["createElementVNode"])("span",s,Object(n["toDisplayString"])(c.goodsId?"同类商品推荐":"猜你喜欢"),1)]),Object(n["createVNode"])(u,{carousels:o.carousels},null,8,["carousels"])])}c("fb6a");var d=c("c40e"),u=c("6c02"),b={name:"GoodsRelevant",props:{goodsId:{type:String,default:""}},setup:function(){var e=p(),t=e.relevantGoods,c=e.getData,n=e.carousels,o=Object(u["d"])();return c(o.params.id),{relevantGoods:t,carousels:n}}};function p(){var e=Object(n["ref"])(),t=Object(n["ref"])([]),c=function(c,n){Object(d["e"])({id:c,limit:n}).then((function(c){for(var n=4,o=Math.ceil(c.result.length/n),a=0;a<o;a++)t.value.push(c.result.slice(a*n,a*n+n));e.value=c.result}))};return{relevantGoods:e,getData:c,carousels:t}}c("c29e");var m=c("6b0d"),j=c.n(m);const O=j()(b,[["render",i],["__scopeId","data-v-26c9a4df"]]);t["a"]=O},a15b:function(e,t,c){"use strict";var n=c("23e7"),o=c("e330"),a=c("44ad"),r=c("fc6a"),l=c("a640"),s=o([].join),i=a!=Object,d=l("join",",");n({target:"Array",proto:!0,forced:i||!d},{join:function(e){return s(r(this),void 0===e?",":e)}})},a4fb:function(e,t,c){},a69e:function(e,t,c){},a725:function(e,t,c){},ab13:function(e,t,c){var n=c("b622"),o=n("match");e.exports=function(e){var t=/./;try{"/./"[e](t)}catch(c){try{return t[o]=!1,"/./"[e](t)}catch(n){}}return!1}},baf5:function(e,t,c){"use strict";c("a4fb")},c11e:function(e,t,c){},c29e:function(e,t,c){"use strict";c("d29b")},c40e:function(e,t,c){"use strict";c.d(t,"c",(function(){return o})),c.d(t,"e",(function(){return a})),c.d(t,"d",(function(){return r})),c.d(t,"a",(function(){return l})),c.d(t,"b",(function(){return s}));var n=c("b775");function o(e){return Object(n["a"])("/goods","get",{id:e})}function a(e){var t=e.id,c=e.limit,o=void 0===c?16:c;return Object(n["a"])("/goods/relevant","get",{id:t,limit:o})}function r(e){var t=e.id,c=e.limit,o=void 0===c?3:c,a=e.type;return Object(n["a"])("/goods/hot","get",{id:t,limit:o,type:a})}function l(e){return Object(n["a"])("https://mock.boxuegu.com/mock/1175/goods/".concat(e,"/evaluate"),"get")}function s(e){return Object(n["a"])("https://mock.boxuegu.com/mock/1175/goods/".concat(e.id,"/evaluate/page"),"get",e)}},caad:function(e,t,c){"use strict";var n=c("23e7"),o=c("4d64").includes,a=c("44d2");n({target:"Array",proto:!0},{includes:function(e){return o(this,e,arguments.length>1?arguments[1]:void 0)}}),a("includes")},d29b:function(e,t,c){},daee:function(e,t,c){"use strict";c("deaf")},deaf:function(e,t,c){},e9f0:function(e,t,c){"use strict";c("c11e")},ed57:function(e,t,c){"use strict";c.r(t);c("b0c0");var n=c("7a23"),o={key:0,class:"xtx-goods-page"},a={class:"container"},r=Object(n["createTextVNode"])("首页"),l={class:"goods-info"},s={class:"media"},i={class:"spec"},d=Object(n["createTextVNode"])("加入购物车"),u={class:"goods-footer"},b={class:"goods-article"},p={class:"goods-aside"};function m(e,t,c,m,j,O){var f=Object(n["resolveComponent"])("XtxBreadItem"),v=Object(n["resolveComponent"])("XtxBread"),g=Object(n["resolveComponent"])("GoodsImages"),k=Object(n["resolveComponent"])("GoodsSales"),N=Object(n["resolveComponent"])("GoodsInfo"),E=Object(n["resolveComponent"])("GoodsSku"),V=Object(n["resolveComponent"])("XtxNumberBox"),y=Object(n["resolveComponent"])("XtxButton"),h=Object(n["resolveComponent"])("GoodsRelevant"),C=Object(n["resolveComponent"])("GoodsTab"),B=Object(n["resolveComponent"])("GoodsWarn"),S=Object(n["resolveComponent"])("GoodsHot"),D=Object(n["resolveComponent"])("AppLayout");return Object(n["openBlock"])(),Object(n["createBlock"])(D,null,{default:Object(n["withCtx"])((function(){return[m.goodsDetail?(Object(n["openBlock"])(),Object(n["createElementBlock"])("div",o,[Object(n["createElementVNode"])("div",a,[Object(n["createVNode"])(v,null,{default:Object(n["withCtx"])((function(){return[Object(n["createVNode"])(f,{path:"/"},{default:Object(n["withCtx"])((function(){return[r]})),_:1}),Object(n["createVNode"])(f,{path:"/category/".concat(m.goodsDetail.categories[1].id)},{default:Object(n["withCtx"])((function(){return[Object(n["createTextVNode"])(Object(n["toDisplayString"])(m.goodsDetail.categories[1].name),1)]})),_:1},8,["path"]),Object(n["createVNode"])(f,{path:"/category/sub/".concat(m.goodsDetail.categories[0].id)},{default:Object(n["withCtx"])((function(){return[Object(n["createTextVNode"])(Object(n["toDisplayString"])(m.goodsDetail.categories[0].name),1)]})),_:1},8,["path"]),Object(n["createVNode"])(f,null,{default:Object(n["withCtx"])((function(){return[Object(n["createTextVNode"])(Object(n["toDisplayString"])(m.goodsDetail.name),1)]})),_:1})]})),_:1}),Object(n["createElementVNode"])("div",l,[Object(n["createElementVNode"])("div",s,[Object(n["createVNode"])(g,{images:m.goodsDetail.mainPictures},null,8,["images"]),Object(n["createVNode"])(k)]),Object(n["createElementVNode"])("div",i,[Object(n["createVNode"])(N,{goods:m.goodsDetail},null,8,["goods"]),Object(n["createVNode"])(E,{onOnSpecChanged:m.onSpecChanged,onOnSpecHalfChanged:t[0]||(t[0]=function(e){return m.goodsDetail.currentSkuId=null}),skus:m.goodsDetail.skus,specs:m.goodsDetail.specs},null,8,["onOnSpecChanged","skus","specs"]),Object(n["createVNode"])(V,{label:"数量",modelValue:m.goodsCount,"onUpdate:modelValue":t[1]||(t[1]=function(e){return m.goodsCount=e}),max:m.goodsDetail.inventory},null,8,["modelValue","max"]),Object(n["createVNode"])(y,{onClick:m.addGoodsToCart,type:"primary",style:{"margin-top":"15px"}},{default:Object(n["withCtx"])((function(){return[d]})),_:1},8,["onClick"])])]),Object(n["createVNode"])(h,{goodsId:m.goodsDetail.id},null,8,["goodsId"]),Object(n["createElementVNode"])("div",u,[Object(n["createElementVNode"])("div",b,[Object(n["createVNode"])(C),Object(n["createVNode"])(B)]),Object(n["createElementVNode"])("div",p,[Object(n["createVNode"])(S,{type:1}),Object(n["createVNode"])(S,{type:2}),Object(n["createVNode"])(S,{type:3})])])])])):Object(n["createCommentVNode"])("",!0)]})),_:1})}var j=c("9f59"),O=c("01de"),f=c("c40e"),v=c("6c02"),g={class:"goods-image"},k={class:"middle",ref:"target"},N=["src"],E={class:"small"},V=["onMouseenter"],y=["src"];function h(e,t,c,o,a,r){return Object(n["openBlock"])(),Object(n["createElementBlock"])("div",g,[Object(n["withDirectives"])(Object(n["createElementVNode"])("div",{class:"large",style:Object(n["normalizeStyle"])({backgroundImage:"url(".concat(c.images[o.currentIndex],")"),backgroundPositionX:o.bgPosition.x+"px",backgroundPositionY:o.bgPosition.y+"px"})},null,4),[[n["vShow"],o.show]]),Object(n["createElementVNode"])("div",k,[Object(n["createElementVNode"])("img",{src:c.images[o.currentIndex],alt:""},null,8,N),Object(n["withDirectives"])(Object(n["createElementVNode"])("div",{class:"layer",style:Object(n["normalizeStyle"])({left:o.layerPosition.left+"px",top:o.layerPosition.top+"px"})},null,4),[[n["vShow"],o.show]])],512),Object(n["createElementVNode"])("ul",E,[(Object(n["openBlock"])(!0),Object(n["createElementBlock"])(n["Fragment"],null,Object(n["renderList"])(c.images,(function(e,t){return Object(n["openBlock"])(),Object(n["createElementBlock"])("li",{key:e,onMouseenter:function(e){return o.currentIndex=t},class:Object(n["normalizeClass"])({active:o.currentIndex===t})},[Object(n["createElementVNode"])("img",{src:e,alt:""},null,8,y)],42,V)})),128))])])}var C=c("3835"),B=c("2c28"),S={name:"GoodsImages",props:{images:{type:Array,default:function(){return[]}}},setup:function(){var e=Object(n["ref"])(0),t=Object(n["ref"])(!1),c=Object(n["ref"])(),o=Object(B["useMouseInElement"])(c),a=o.isOutside,r=o.elementX,l=o.elementY,s=Object(n["ref"])({left:0,top:0}),i=Object(n["ref"])({x:0,y:0});return Object(n["watch"])([a,r,l],(function(e){var c=Object(C["a"])(e,3),n=c[0],o=c[1],a=c[2];n?t.value=!1:(t.value=!0,s.value={left:o-100,top:a-100},s.value.left<0?s.value.left=0:s.value.left>200&&(s.value.left=200),s.value.top<0?s.value.top=0:s.value.top>200&&(s.value.top=200),i.value={x:2*-s.value.left,y:2*-s.value.top})})),{currentIndex:e,show:t,target:c,layerPosition:s,bgPosition:i}}},D=(c("98af"),c("6b0d")),I=c.n(D);const x=I()(S,[["render",h],["__scopeId","data-v-348fb98f"]]);var G=x,P={class:"goods-sales"},w=Object(n["createStaticVNode"])('<li data-v-1ca16c9e><p data-v-1ca16c9e>销量人气</p><p data-v-1ca16c9e>200+</p><p data-v-1ca16c9e><i class="iconfont icon-task-filling" data-v-1ca16c9e></i>销量人气</p></li><li data-v-1ca16c9e><p data-v-1ca16c9e>商品评价</p><p data-v-1ca16c9e>400+</p><p data-v-1ca16c9e><i class="iconfont icon-comment-filling" data-v-1ca16c9e></i>查看评价</p></li><li data-v-1ca16c9e><p data-v-1ca16c9e>收藏人气</p><p data-v-1ca16c9e>600+</p><p data-v-1ca16c9e><i class="iconfont icon-favorite-filling" data-v-1ca16c9e></i>收藏商品</p></li><li data-v-1ca16c9e><p data-v-1ca16c9e>品牌信息</p><p data-v-1ca16c9e>苏宁电器</p><p data-v-1ca16c9e><i class="iconfont icon-dynamic-filling" data-v-1ca16c9e></i>品牌主页</p></li>',4),_=[w];function T(e,t,c,o,a,r){return Object(n["openBlock"])(),Object(n["createElementBlock"])("ul",P,_)}var F={name:"GoodsSales"};c("4cb6");const L=I()(F,[["render",T],["__scopeId","data-v-1ca16c9e"]]);var z=L,q=function(e){return Object(n["pushScopeId"])("data-v-fb70829c"),e=e(),Object(n["popScopeId"])(),e},A={class:"g-name"},R={class:"g-desc"},X={class:"g-price"},H={class:"g-service"},M=q((function(){return Object(n["createElementVNode"])("dl",null,[Object(n["createElementVNode"])("dt",null,"促销"),Object(n["createElementVNode"])("dd",null,"12月好物放送，App领券购买直降120元")],-1)})),J=q((function(){return Object(n["createElementVNode"])("dt",null,"配送",-1)})),U=Object(n["createTextVNode"])("至 "),W=q((function(){return Object(n["createElementVNode"])("dl",null,[Object(n["createElementVNode"])("dt",null,"服务"),Object(n["createElementVNode"])("dd",null,[Object(n["createElementVNode"])("span",null,"无忧退货"),Object(n["createElementVNode"])("span",null,"快速退款"),Object(n["createElementVNode"])("span",null,"免费包邮"),Object(n["createElementVNode"])("a",{href:"javascript:"},"了解详情")])],-1)}));function Y(e,t,c,o,a,r){var l=Object(n["resolveComponent"])("XtxCity");return Object(n["openBlock"])(),Object(n["createElementBlock"])(n["Fragment"],null,[Object(n["createElementVNode"])("p",A,Object(n["toDisplayString"])(c.goods.name),1),Object(n["createElementVNode"])("p",R,Object(n["toDisplayString"])(c.goods.desc),1),Object(n["createElementVNode"])("p",X,[Object(n["createElementVNode"])("span",null,Object(n["toDisplayString"])(c.goods.price),1),Object(n["createElementVNode"])("span",null,Object(n["toDisplayString"])(c.goods.oldPrice),1)]),Object(n["createElementVNode"])("div",H,[M,Object(n["createElementVNode"])("dl",null,[J,Object(n["createElementVNode"])("dd",null,[U,Object(n["createVNode"])(l,{onOnCityChanged:o.onCityChanged},null,8,["onOnCityChanged"])])]),W])],64)}var K={name:"GoodsInfo",props:{goods:{type:Object,default:function(){return{}}}},setup:function(){var e=function(e){console.log(e)};return{onCityChanged:e}}};c("e9f0");const Q=I()(K,[["render",Y],["__scopeId","data-v-fb70829c"]]);var Z=Q,$=(c("d3b7"),c("ddb0"),{class:"goods-sku"}),ee=["onClick","src"],te=["onClick"];function ce(e,t,c,o,a,r){return Object(n["openBlock"])(),Object(n["createElementBlock"])("div",$,[(Object(n["openBlock"])(!0),Object(n["createElementBlock"])(n["Fragment"],null,Object(n["renderList"])(c.specs,(function(e){return Object(n["openBlock"])(),Object(n["createElementBlock"])("dl",{key:e.name},[Object(n["createElementVNode"])("dt",null,Object(n["toDisplayString"])(e.name),1),Object(n["createElementVNode"])("dd",null,[(Object(n["openBlock"])(!0),Object(n["createElementBlock"])(n["Fragment"],null,Object(n["renderList"])(e.values,(function(t){return Object(n["openBlock"])(),Object(n["createElementBlock"])(n["Fragment"],{key:t.name},[t.picture?(Object(n["openBlock"])(),Object(n["createElementBlock"])("img",{key:0,onClick:function(c){return o.updateSelected(e,t)},src:t.picture,class:Object(n["normalizeClass"])({selected:t.selected,disabled:t.disabled}),alt:""},null,10,ee)):(Object(n["openBlock"])(),Object(n["createElementBlock"])("span",{key:1,class:Object(n["normalizeClass"])({selected:t.selected,disabled:t.disabled}),onClick:function(c){return o.updateSelected(e,t)}},Object(n["toDisplayString"])(t.name),11,te))],64)})),128))])])})),128))])}c("159b"),c("d81d"),c("4de4"),c("a15b"),c("7db0"),c("caad"),c("2532"),c("99af");function ne(e){for(var t=[],c=Math.pow(2,e.length),n=0;n<c;n+=1){for(var o=[],a=0;a<e.length;a+=1)n&1<<a&&o.push(e[a]);t.push(o)}return t}var oe={name:"GoodsSku",props:{specs:{type:Array,default:function(){return[]}},skus:{type:Array,default:function(){return[]}},skuId:{type:String,default:""}},setup:function(e,t){var c=t.emit,n=ae(e.skus),o=function(t,o){o.disabled||(o.selected?o.selected=!1:(t.values.forEach((function(e){e.selected=!1})),o.selected=!0),re(e.specs,n),ie(e.specs,n,e.skus,c))};return re(e.specs,n),se(e.skuId,e.skus,e.specs),{updateSelected:o}}};function ae(e){var t={};return e.forEach((function(e){if(e.inventory>0){var c=e.specs.map((function(e){return e.valueName})),n=c.length,o=ne(c).filter((function(e){return e.length>0}));o.forEach((function(c){var o=c.join("_");o in t||(c.length===n?t[o]=e.id:t[o]=null)}))}})),t}function re(e,t){e.forEach((function(c,n){var o=le(e);c.values.forEach((function(e){if(!e.selected){o[n]=e.name;var c=o.filter((function(e){return e})).join("_");console.log(c),e.disabled=!(c in t)}}))}))}function le(e){var t=[];return e.forEach((function(e,c){var n=e.values.find((function(e){return e.selected}));t[c]=n?n.name:void 0})),t}function se(e,t,c){if(e){var n=t.find((function(t){return t.id===e})),o=n.specs.map((function(e){return e.valueName}));c.forEach((function(e){e.values.forEach((function(e){o.includes(e.name)&&(e.selected=!0)}))}))}}function ie(e,t,c,n){var o=le(e).filter((function(e){return e}));if(o.length===e.length){var a=t[o.join("_")],r=c.find((function(e){return e.id===a}));n("onSpecChanged",{skuId:a,price:r.price,oldPrice:r.oldPrice,inventory:r.inventory,attrsText:r.specs.map((function(e){return"".concat(e.name,": ").concat(e.valueName)})).join(" ")})}else n("onSpecHalfChanged")}c("4cd8");const de=I()(oe,[["render",ce],["__scopeId","data-v-43b5e18d"]]);var ue=de,be={class:"goods-tabs"},pe=Object(n["createTextVNode"])("商品评价");function me(e,t,c,o,a,r){return Object(n["openBlock"])(),Object(n["createElementBlock"])("div",be,[Object(n["createElementVNode"])("nav",null,[Object(n["createElementVNode"])("a",{onClick:t[0]||(t[0]=function(e){return o.activeComponentName="GoodsDetail"}),class:Object(n["normalizeClass"])({active:"GoodsDetail"===o.activeComponentName}),href:"javascript:"},"商品详情",2),Object(n["createElementVNode"])("a",{onClick:t[1]||(t[1]=function(e){return o.activeComponentName="GoodsComment"}),class:Object(n["normalizeClass"])({active:"GoodsComment"===o.activeComponentName}),href:"javascript:"},[pe,Object(n["createElementVNode"])("span",null,"("+Object(n["toDisplayString"])(o.goodsDetail.commentCount)+")",1)],2)]),(Object(n["openBlock"])(),Object(n["createBlock"])(Object(n["resolveDynamicComponent"])(o.activeComponentName)))])}var je={class:"goods-detail"},Oe={class:"attrs"},fe={class:"dt"},ve={class:"dd"},ge=["src"];function ke(e,t,c,o,a,r){return Object(n["openBlock"])(),Object(n["createElementBlock"])("div",je,[Object(n["createElementVNode"])("ul",Oe,[(Object(n["openBlock"])(!0),Object(n["createElementBlock"])(n["Fragment"],null,Object(n["renderList"])(o.goodsDetail.details.properties,(function(e){return Object(n["openBlock"])(),Object(n["createElementBlock"])("li",{key:e.name},[Object(n["createElementVNode"])("span",fe,Object(n["toDisplayString"])(e.name),1),Object(n["createElementVNode"])("span",ve,Object(n["toDisplayString"])(e.value),1)])})),128))]),(Object(n["openBlock"])(!0),Object(n["createElementBlock"])(n["Fragment"],null,Object(n["renderList"])(o.goodsDetail.details.pictures,(function(e){return Object(n["openBlock"])(),Object(n["createElementBlock"])("img",{src:e,alt:"",key:e},null,8,ge)})),128))])}var Ne={name:"GoodsDetail",setup:function(){var e=Object(n["inject"])("goodsDetail");return{goodsDetail:e}}};c("5f4f");const Ee=I()(Ne,[["render",ke],["__scopeId","data-v-a3746ecc"]]);var Ve=Ee,ye=function(e){return Object(n["pushScopeId"])("data-v-26afada2"),e=e(),Object(n["popScopeId"])(),e},he={class:"goods-comment"},Ce={key:0,class:"head"},Be={class:"data"},Se=ye((function(){return Object(n["createElementVNode"])("span",null,"人购买",-1)})),De=ye((function(){return Object(n["createElementVNode"])("span",null,"好评率",-1)})),Ie={class:"tags"},xe=ye((function(){return Object(n["createElementVNode"])("div",{class:"dt"},"大家都在说：",-1)})),Ge={class:"dd"},Pe=["onClick"],we={class:"sort"},_e=ye((function(){return Object(n["createElementVNode"])("span",null,"排序：",-1)})),Te={key:1,class:"list"},Fe={class:"user"},Le=["src"],ze={class:"body"},qe={class:"score"},Ae={class:"attr"},Re={class:"text"},Xe={class:"time"},He={class:"zan"},Me=ye((function(){return Object(n["createElementVNode"])("i",{class:"iconfont icon-dianzan"},null,-1)}));function Je(e,t,c,o,a,r){var l=Object(n["resolveComponent"])("GoodsCommentImage"),s=Object(n["resolveComponent"])("XtxPagination");return Object(n["openBlock"])(),Object(n["createElementBlock"])("div",he,[o.commentInfo?(Object(n["openBlock"])(),Object(n["createElementBlock"])("div",Ce,[Object(n["createElementVNode"])("div",Be,[Object(n["createElementVNode"])("p",null,[Object(n["createElementVNode"])("span",null,Object(n["toDisplayString"])(o.commentInfo.salesCount),1),Se]),Object(n["createElementVNode"])("p",null,[Object(n["createElementVNode"])("span",null,Object(n["toDisplayString"])(o.commentInfo.praisePercent),1),De])]),Object(n["createElementVNode"])("div",Ie,[xe,Object(n["createElementVNode"])("div",Ge,[(Object(n["openBlock"])(!0),Object(n["createElementBlock"])(n["Fragment"],null,Object(n["renderList"])(o.commentInfo.tags,(function(e){return Object(n["openBlock"])(),Object(n["createElementBlock"])("a",{href:"javascript:",key:e.title,class:Object(n["normalizeClass"])({active:e.title===o.activeTagName}),onClick:function(t){o.activeTagName=e.title,o.updateReqParams({tag:e.title})}},Object(n["toDisplayString"])(e.title)+"（"+Object(n["toDisplayString"])(e.tagCount)+"）",11,Pe)})),128))])])])):Object(n["createCommentVNode"])("",!0),Object(n["createElementVNode"])("div",we,[_e,Object(n["createElementVNode"])("a",{onClick:t[0]||(t[0]=function(e){return o.updateReqParams({sortField:""})}),href:"javascript:",class:Object(n["normalizeClass"])({active:""===o.reqParams.sortField})},"默认",2),Object(n["createElementVNode"])("a",{onClick:t[1]||(t[1]=function(e){return o.updateReqParams({sortField:"createTime"})}),href:"javascript:",class:Object(n["normalizeClass"])({active:"createTime"===o.reqParams.sortField})},"最新",2),Object(n["createElementVNode"])("a",{onClick:t[2]||(t[2]=function(e){return o.updateReqParams({sortField:"praiseCount"})}),class:Object(n["normalizeClass"])({active:"praiseCount"===o.reqParams.sortField}),href:"javascript:"},"最热",2)]),o.commentList?(Object(n["openBlock"])(),Object(n["createElementBlock"])("div",Te,[(Object(n["openBlock"])(!0),Object(n["createElementBlock"])(n["Fragment"],null,Object(n["renderList"])(o.commentList.items,(function(e){return Object(n["openBlock"])(),Object(n["createElementBlock"])("div",{class:"item",key:e.id},[Object(n["createElementVNode"])("div",Fe,[Object(n["createElementVNode"])("img",{src:e.member.avatar,alt:""},null,8,Le),Object(n["createElementVNode"])("span",null,Object(n["toDisplayString"])(o.formatNickname(e.member.nickname)),1)]),Object(n["createElementVNode"])("div",ze,[Object(n["createElementVNode"])("div",qe,[(Object(n["openBlock"])(!0),Object(n["createElementBlock"])(n["Fragment"],null,Object(n["renderList"])(e.score,(function(e){return Object(n["openBlock"])(),Object(n["createElementBlock"])("i",{key:"s"+e,class:"iconfont icon-wjx01"})})),128)),(Object(n["openBlock"])(!0),Object(n["createElementBlock"])(n["Fragment"],null,Object(n["renderList"])(5-e.score,(function(e){return Object(n["openBlock"])(),Object(n["createElementBlock"])("i",{class:"iconfont icon-wjx02",key:"k"+e})})),128)),Object(n["createElementVNode"])("span",Ae,Object(n["toDisplayString"])(o.formatAttrs(e.orderInfo.specs)),1)]),Object(n["createElementVNode"])("div",Re,Object(n["toDisplayString"])(e.content),1),e.pictures.length>0?(Object(n["openBlock"])(),Object(n["createBlock"])(l,{key:0,pictures:e.pictures},null,8,["pictures"])):Object(n["createCommentVNode"])("",!0),Object(n["createElementVNode"])("div",Xe,[Object(n["createElementVNode"])("span",null,Object(n["toDisplayString"])(e.createTime),1),Object(n["createElementVNode"])("span",He,[Me,Object(n["createTextVNode"])(Object(n["toDisplayString"])(e.praiseCount),1)])])])])})),128))])):Object(n["createCommentVNode"])("",!0),Object(n["createVNode"])(s,{pageSize:o.reqParams.pageSize,counts:o.counts,page:o.reqParams.page,"onUpdate:page":t[3]||(t[3]=function(e){return o.reqParams.page=e})},null,8,["pageSize","counts","page"])])}var Ue=c("5530"),We={class:"goods-comment-image"},Ye={class:"list"},Ke=["onClick"],Qe=["src"],Ze={key:0,class:"preview"},$e=["src"];function et(e,t,c,o,a,r){return Object(n["openBlock"])(),Object(n["createElementBlock"])("div",We,[Object(n["createElementVNode"])("div",Ye,[(Object(n["openBlock"])(!0),Object(n["createElementBlock"])(n["Fragment"],null,Object(n["renderList"])(c.pictures,(function(e){return Object(n["openBlock"])(),Object(n["createElementBlock"])("a",{onClick:function(t){return o.preview=e},href:"javascript:",key:e},[Object(n["createElementVNode"])("img",{src:e,alt:""},null,8,Qe)],8,Ke)})),128))]),o.preview?(Object(n["openBlock"])(),Object(n["createElementBlock"])("div",Ze,[Object(n["createElementVNode"])("img",{src:o.preview,alt:""},null,8,$e),Object(n["createElementVNode"])("i",{class:"iconfont icon-close-new",onClick:t[0]||(t[0]=function(e){return o.preview=null})})])):Object(n["createCommentVNode"])("",!0)])}var tt={name:"GoodsCommentImage",props:{pictures:{type:Array,default:function(){return[]}}},setup:function(){var e=Object(n["ref"])(null);return{preview:e}}};c("2853");const ct=I()(tt,[["render",et],["__scopeId","data-v-2952f064"]]);var nt=ct,ot={name:"GoodsComment",components:{GoodsCommentImage:nt},setup:function(){var e=at(),t=e.commentInfo,c=e.activeTagName,n=rt(),o=n.commentList,a=n.formatNickname,r=n.formatAttrs,l=n.updateReqParams,s=n.reqParams,i=n.counts;return{commentInfo:t,commentList:o,activeTagName:c,formatNickname:a,formatAttrs:r,updateReqParams:l,reqParams:s,counts:i}}};function at(){var e=Object(n["ref"])(),t=Object(v["d"])(),c=Object(n["ref"])("全部评价"),o=function(t){Object(f["a"])(t).then((function(t){t.result.tags.unshift({title:"有图",tagCount:t.result.hasPictureCount}),t.result.tags.unshift({title:"全部评价",tagCount:t.result.evaluateCount}),e.value=t.result}))};return o(t.params.id),Object(v["c"])((function(e){return o(e.params.id)})),{commentInfo:e,activeTagName:c}}function rt(){var e=Object(n["ref"])(),t=Object(v["d"])(),c=Object(n["ref"])({id:t.params.id,page:1,pageSize:10,hasPicture:!1,tag:"",sortField:""}),o=function(e){e.tag?c.value=Object(Ue["a"])(Object(Ue["a"])({},c.value),{},{hasPicture:"有图"===e.tag,tag:"全部评价"===e.tag||"有图"===e.tag?"":e.tag}):c.value=Object(Ue["a"])(Object(Ue["a"])({},c.value),e)},a=Object(n["ref"])(0),r=function(){Object(f["b"])(c.value).then((function(t){a.value=t.result.counts,e.value=t.result}))};Object(n["watch"])((function(){return c.value}),(function(){r()}),{immediate:!0,deep:!0});var l=function(e){return e.substr(0,1)+"****"+e.substr(-1)},s=function(e){return e.map((function(e){return"".concat(e.name,": ").concat(e.nameValue)})).join(" ")};return{commentList:e,formatNickname:l,formatAttrs:s,updateReqParams:o,reqParams:c,counts:a}}c("daee");const lt=I()(ot,[["render",Je],["__scopeId","data-v-26afada2"]]);var st=lt,it={name:"GoodsTab",components:{GoodsComment:st,GoodsDetail:Ve},setup:function(){var e=Object(n["ref"])("GoodsDetail"),t=Object(n["inject"])("goodsDetail");return{activeComponentName:e,goodsDetail:t}}};c("1371");const dt=I()(it,[["render",me],["__scopeId","data-v-7885a12b"]]);var ut=dt,bt={key:0,class:"goods-hot"};function pt(e,t,c,o,a,r){var l=Object(n["resolveComponent"])("GoodsItem");return o.hotGoods?(Object(n["openBlock"])(),Object(n["createElementBlock"])("div",bt,[Object(n["createElementVNode"])("h3",null,Object(n["toDisplayString"])(o.titles[c.type]),1),(Object(n["openBlock"])(!0),Object(n["createElementBlock"])(n["Fragment"],null,Object(n["renderList"])(o.hotGoods,(function(e){return Object(n["openBlock"])(),Object(n["createBlock"])(l,{goods:e,key:e.id},null,8,["goods"])})),128))])):Object(n["createCommentVNode"])("",!0)}c("a9e3");var mt=c("39d5"),jt={name:"GoodsHot",components:{GoodsItem:mt["a"]},props:{type:{type:Number,default:1}},setup:function(e){var t=Ot(e.type),c=t.hotGoods,n=t.titles;return{hotGoods:c,titles:n}}};function Ot(e){var t=Object(n["ref"])(),c=Object(v["d"])(),o=Object(n["ref"])({1:"24小时榜",2:"周榜",3:"总榜"}),a=function(){Object(f["d"])({id:c.params.id,type:e}).then((function(e){t.value=e.result}))};return a(),{hotGoods:t,getData:a,titles:o}}c("baf5");const ft=I()(jt,[["render",pt],["__scopeId","data-v-0e315fe8"]]);var vt=ft,gt={class:"goods-warn"},kt=Object(n["createStaticVNode"])('<h3 data-v-4692ce00>注意事项</h3><p class="tit" data-v-4692ce00>• 购买运费如何收取？</p><p data-v-4692ce00> 单笔订单金额(不含运费)满88元免邮费；不满88元，每单收取10元运费。（港澳台地区需满500元免邮费；不满500元，每单收取30元运费) </p><br data-v-4692ce00><p class="tit" data-v-4692ce00>• 使用什么快递发货?</p><p data-v-4692ce00>默认使用顺丰快递发货(个别商品使用其他快递）</p><p data-v-4692ce00>配送范围覆盖全国大部分地区(港澳台地区除外）</p><br data-v-4692ce00><p class="tit" data-v-4692ce00>• 如何申请退货?</p><p data-v-4692ce00> 1.自收到商品之日起30日内，顾客可申请无忧退货，退款将原路返还，不同的银行处理时间不同，预计1-5个工作日到账； </p><p data-v-4692ce00>2.内裤和食品等特殊商品无质量问题不支持退货；</p><p data-v-4692ce00> 3.退货流程： 确认收货-申请退货-客服审核通过-用户寄回商品-仓库签收验货-退款审核-退款完成； </p><p data-v-4692ce00> 4.因小兔鲜儿产生的退货，如质量问题，退货邮费由小兔鲜儿承担，退款完成后会以现金券的形式报销。因客户个人原因产生的退货，购买和寄回运费由客户个人承担。 </p>',13),Nt=[kt];function Et(e,t){return Object(n["openBlock"])(),Object(n["createElementBlock"])("div",gt,Nt)}c("5cbc");const Vt={},yt=I()(Vt,[["render",Et],["__scopeId","data-v-4692ce00"]]);var ht=yt,Ct=c("2f59"),Bt=c("5502"),St={name:"GoodsDetailPage",components:{GoodsWarn:ht,GoodsHot:vt,GoodsTab:ut,GoodsSku:ue,GoodsInfo:Z,GoodsSales:z,GoodsImages:G,GoodsRelevant:j["a"],AppLayout:O["a"]},setup:function(){var e=Dt(),t=e.goodsDetail,c=e.getData,o=Object(v["d"])(),a=Object(Bt["b"])(),r=Object(n["ref"])(1);c(o.params.id);var l=function(e){t.value.price=e.price,t.value.oldPrice=e.oldPrice,t.value.inventory=e.inventory,t.value.currentSkuId=e.skuId,t.value.currentAttrsText=e.attrsText};Object(n["provide"])("goodsDetail",t);var s=function(){if(t.value.currentSkuId){var e={id:t.value.id,skuId:t.value.currentSkuId,name:t.value.name,attrsText:t.value.currentAttrsText,picture:t.value.mainPictures[0],price:t.value.oldPrice,nowPrice:t.value.price,selected:!0,stock:t.value.inventory,count:r.value,isEffective:!1};a.dispatch("cart/addGoodsToCart",e)}else Object(Ct["a"])({type:"warn",text:"请选择商品规格"})};return{goodsDetail:t,onSpecChanged:l,goodsCount:r,addGoodsToCart:s}}};function Dt(){var e=Object(n["ref"])(),t=function(t){Object(f["c"])(t).then((function(t){e.value=t.result}))};return Object(v["c"])((function(e){t(e.params.id)})),{goodsDetail:e,getData:t}}c("f4d5");const It=I()(St,[["render",m],["__scopeId","data-v-b6f93fc8"]]);t["default"]=It},f3de:function(e,t,c){},f4d5:function(e,t,c){"use strict";c("f3de")},f9d2:function(e,t,c){},fd8e:function(e,t,c){"use strict";c("9dcb")}}]);
//# sourceMappingURL=chunk-0a26bcd1.8635c417.js.map