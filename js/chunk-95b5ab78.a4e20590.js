(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-95b5ab78"],{"10ae":function(e,t,c){"use strict";c("af5a")},1459:function(e,t,c){"use strict";c("1712")},1712:function(e,t,c){},"4a33":function(e,t,c){},"91f7":function(e,t,c){"use strict";c("4a33")},af5a:function(e,t,c){},c04e9:function(e,t,c){"use strict";c.r(t);var n=c("7a23"),o=function(e){return Object(n["pushScopeId"])("data-v-4d350b2c"),e=e(),Object(n["popScopeId"])(),e},r=Object(n["createTextVNode"])("联合登录"),a={key:0,class:"container"},i=o((function(){return Object(n["createElementVNode"])("div",{class:"unbind"},[Object(n["createElementVNode"])("div",{class:"loading"})],-1)})),l=[i],s={key:1,class:"container"},u={class:"tab"},d=o((function(){return Object(n["createElementVNode"])("i",{class:"iconfont icon-bind"},null,-1)})),b=o((function(){return Object(n["createElementVNode"])("span",null,"已有小兔鲜账号，请绑定手机",-1)})),m=[d,b],j=o((function(){return Object(n["createElementVNode"])("i",{class:"iconfont icon-edit"},null,-1)})),O=o((function(){return Object(n["createElementVNode"])("span",null,"没有小兔鲜账号，请完善资料",-1)})),p=[j,O],f={key:0,class:"tab-content"},v={key:1,class:"tab-content"};function E(e,t,c,o,i,d){var b=Object(n["resolveComponent"])("LoginHeader"),j=Object(n["resolveComponent"])("LoginCallbackBindPhone"),O=Object(n["resolveComponent"])("LoginCallbackBindPatch"),E=Object(n["resolveComponent"])("LoginFooter");return Object(n["openBlock"])(),Object(n["createElementBlock"])(n["Fragment"],null,[Object(n["createVNode"])(b,null,{default:Object(n["withCtx"])((function(){return[r]})),_:1}),o.loading?(Object(n["openBlock"])(),Object(n["createElementBlock"])("section",a,l)):Object(n["createCommentVNode"])("",!0),o.loading||o.isBind?Object(n["createCommentVNode"])("",!0):(Object(n["openBlock"])(),Object(n["createElementBlock"])("section",s,[Object(n["createElementVNode"])("nav",u,[Object(n["createElementVNode"])("a",{onClick:t[0]||(t[0]=function(e){return o.hasAccount=!0}),class:Object(n["normalizeClass"])({active:o.hasAccount}),href:"javascript:"},m,2),Object(n["createElementVNode"])("a",{onClick:t[1]||(t[1]=function(e){return o.hasAccount=!1}),class:Object(n["normalizeClass"])({active:!o.hasAccount}),href:"javascript:"},p,2)]),o.hasAccount?(Object(n["openBlock"])(),Object(n["createElementBlock"])("div",f,[Object(n["createVNode"])(j,{unionId:o.unionId},null,8,["unionId"])])):(Object(n["openBlock"])(),Object(n["createElementBlock"])("div",v,[Object(n["createVNode"])(O,{unionId:o.unionId},null,8,["unionId"])]))])),Object(n["createVNode"])(E)],64)}var V=c("4b9d"),g=c("15ab"),k=function(e){return Object(n["pushScopeId"])("data-v-2dfcd29e"),e=e(),Object(n["popScopeId"])(),e},h={class:"user-info"},N=["src"],w={class:"xtx-form-item"},x={class:"field"},y=k((function(){return Object(n["createElementVNode"])("i",{class:"icon iconfont icon-phone"},null,-1)})),S={key:0,class:"error"},C={class:"xtx-form-item"},B={class:"field"},I=k((function(){return Object(n["createElementVNode"])("i",{class:"icon iconfont icon-code"},null,-1)})),M={key:0,class:"error"},F=k((function(){return Object(n["createElementVNode"])("input",{type:"submit",class:"submit",value:"立即绑定"},null,-1)}));function A(e,t,c,o,r,a){return Object(n["openBlock"])(),Object(n["createElementBlock"])("form",{class:"xtx-form",onSubmit:t[3]||(t[3]=function(){return o.onSubmit&&o.onSubmit.apply(o,arguments)})},[Object(n["createElementVNode"])("div",h,[Object(n["createElementVNode"])("img",{src:o.avatar,alt:""},null,8,N),Object(n["createElementVNode"])("p",null,"Hi，"+Object(n["toDisplayString"])(o.nickname)+" 欢迎来小兔鲜，完成绑定后可以QQ账号一键登录哦~",1)]),Object(n["createElementVNode"])("div",w,[Object(n["createElementVNode"])("div",x,[y,Object(n["withDirectives"])(Object(n["createElementVNode"])("input",{"onUpdate:modelValue":t[0]||(t[0]=function(t){return e.mobileField=t}),class:"input",type:"text",placeholder:"绑定的手机号"},null,512),[[n["vModelText"],e.mobileField]])]),e.mobileError?(Object(n["openBlock"])(),Object(n["createElementBlock"])("div",S,Object(n["toDisplayString"])(e.mobileError),1)):Object(n["createCommentVNode"])("",!0)]),Object(n["createElementVNode"])("div",C,[Object(n["createElementVNode"])("div",B,[I,Object(n["withDirectives"])(Object(n["createElementVNode"])("input",{"onUpdate:modelValue":t[1]||(t[1]=function(t){return e.codeField=t}),class:"input",type:"text",placeholder:"短信验证码"},null,512),[[n["vModelText"],e.codeField]]),Object(n["createElementVNode"])("span",{onClick:t[2]||(t[2]=function(){return o.getMsgCode&&o.getMsgCode.apply(o,arguments)}),class:Object(n["normalizeClass"])([{disabled:o.isActive},"code"])},Object(n["toDisplayString"])(o.isActive?"剩余".concat(o.count,"秒"):"发送验证码"),3)]),e.codeError?(Object(n["openBlock"])(),Object(n["createElementBlock"])("div",M,Object(n["toDisplayString"])(e.codeError),1)):Object(n["createCommentVNode"])("",!0)]),F],32)}var D=c("5530"),P=c("1da1"),L=c("15fd"),U=(c("96cf"),c("7bb1")),_=c("3c2f"),T=c("c24f"),Q=c("2f59"),R=c("324c"),z=c("69a3"),H=["handleSubmit","getIsMobileValid"],J={name:"LoginCallbackBindPhone",props:{unionId:{type:String}},setup:function(e){var t=G(),c=t.nickname,n=t.avatar,o=Object(z["a"])(),r=o.loginSuccess,a=o.loginFail,i=q(),l=i.handleSubmit,s=i.getIsMobileValid,u=Object(L["a"])(i,H),d=Object(R["a"])(),b=d.count,m=d.isActive,j=d.start,O=l((function(t){console.log(t),Object(T["a"])({mobile:t.mobile,code:t.code,unionId:e.unionId}).then(r).catch(a)})),p=function(){var e=Object(P["a"])(regeneratorRuntime.mark((function e(){var t,c,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,s();case 2:if(t=e.sent,c=t.isValid,n=t.mobile,!c||m.value){e.next=16;break}return e.prev=6,e.next=9,Object(T["f"])(n);case 9:Object(Q["a"])({type:"success",text:"验证码发送成功"}),j(60),e.next=16;break;case 13:e.prev=13,e.t0=e["catch"](6),Object(Q["a"])({type:"error",text:"验证码发送失败"});case 16:case"end":return e.stop()}}),e,null,[[6,13]])})));return function(){return e.apply(this,arguments)}}();return Object(D["a"])(Object(D["a"])({nickname:c,avatar:n},u),{},{onSubmit:O,getMsgCode:p,count:b,isActive:m})}};function q(){var e=Object(U["b"])({validationSchema:{mobile:_["e"],code:_["c"]}}),t=e.handleSubmit,c=Object(U["a"])("mobile"),n=c.value,o=c.errorMessage,r=c.validate,a=function(){var e=Object(P["a"])(regeneratorRuntime.mark((function e(){var t,c;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,r();case 2:return t=e.sent,c=t.valid,e.abrupt("return",{isValid:c,mobile:n.value});case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),i=Object(U["a"])("code"),l=i.value,s=i.errorMessage;return{handleSubmit:t,mobileField:n,mobileError:o,codeField:l,codeError:s,getIsMobileValid:a}}function G(){var e=Object(n["ref"])(""),t=Object(n["ref"])("");return window.QC.Login.check()&&window.QC.api("get_user_info").success((function(c){e.value=c.data.nickname,t.value=c.data.figureurl_1})),{nickname:e,avatar:t}}c("1459");var K=c("6b0d"),W=c.n(K);const X=W()(J,[["render",A],["__scopeId","data-v-2dfcd29e"]]);var Y=X,Z=function(e){return Object(n["pushScopeId"])("data-v-000d98bf"),e=e(),Object(n["popScopeId"])(),e},$={class:"xtx-form-item"},ee={class:"field"},te=Z((function(){return Object(n["createElementVNode"])("i",{class:"icon iconfont icon-user"},null,-1)})),ce={key:0,class:"error"},ne={class:"xtx-form-item"},oe={class:"field"},re=Z((function(){return Object(n["createElementVNode"])("i",{class:"icon iconfont icon-phone"},null,-1)})),ae={key:0,class:"error"},ie={class:"xtx-form-item"},le={class:"field"},se=Z((function(){return Object(n["createElementVNode"])("i",{class:"icon iconfont icon-code"},null,-1)})),ue={key:0,class:"error"},de={class:"xtx-form-item"},be={class:"field"},me=Z((function(){return Object(n["createElementVNode"])("i",{class:"icon iconfont icon-lock"},null,-1)})),je={key:0,class:"error"},Oe={class:"xtx-form-item"},pe={class:"field"},fe=Z((function(){return Object(n["createElementVNode"])("i",{class:"icon iconfont icon-lock"},null,-1)})),ve={key:0,class:"error"},Ee=Z((function(){return Object(n["createElementVNode"])("input",{type:"submit",class:"submit",value:"立即绑定"},null,-1)}));function Ve(e,t,c,o,r,a){return Object(n["openBlock"])(),Object(n["createElementBlock"])("form",{class:"xtx-form",onSubmit:t[6]||(t[6]=function(){return o.onSubmit&&o.onSubmit.apply(o,arguments)})},[Object(n["createElementVNode"])("div",$,[Object(n["createElementVNode"])("div",ee,[te,Object(n["withDirectives"])(Object(n["createElementVNode"])("input",{"onUpdate:modelValue":t[0]||(t[0]=function(t){return e.accountField=t}),class:"input",type:"text",placeholder:"请输入用户名"},null,512),[[n["vModelText"],e.accountField]])]),e.accountError?(Object(n["openBlock"])(),Object(n["createElementBlock"])("div",ce,Object(n["toDisplayString"])(e.accountError),1)):Object(n["createCommentVNode"])("",!0)]),Object(n["createElementVNode"])("div",ne,[Object(n["createElementVNode"])("div",oe,[re,Object(n["withDirectives"])(Object(n["createElementVNode"])("input",{"onUpdate:modelValue":t[1]||(t[1]=function(t){return e.mobileField=t}),class:"input",type:"text",placeholder:"请输入手机号"},null,512),[[n["vModelText"],e.mobileField]])]),e.mobileError?(Object(n["openBlock"])(),Object(n["createElementBlock"])("div",ae,Object(n["toDisplayString"])(e.mobileError),1)):Object(n["createCommentVNode"])("",!0)]),Object(n["createElementVNode"])("div",ie,[Object(n["createElementVNode"])("div",le,[se,Object(n["withDirectives"])(Object(n["createElementVNode"])("input",{class:"input","onUpdate:modelValue":t[2]||(t[2]=function(t){return e.codeField=t}),type:"text",placeholder:"请输入验证码"},null,512),[[n["vModelText"],e.codeField]]),Object(n["createElementVNode"])("span",{class:"code",onClick:t[3]||(t[3]=function(){return o.getMsgCode&&o.getMsgCode.apply(o,arguments)})},Object(n["toDisplayString"])(o.isActive?"剩余".concat(o.count,"秒"):"发送验证码"),1)]),e.codeError?(Object(n["openBlock"])(),Object(n["createElementBlock"])("div",ue,Object(n["toDisplayString"])(e.codeError),1)):Object(n["createCommentVNode"])("",!0)]),Object(n["createElementVNode"])("div",de,[Object(n["createElementVNode"])("div",be,[me,Object(n["withDirectives"])(Object(n["createElementVNode"])("input",{class:"input","onUpdate:modelValue":t[4]||(t[4]=function(t){return e.passwordField=t}),type:"password",placeholder:"请输入密码"},null,512),[[n["vModelText"],e.passwordField]])]),e.passwordError?(Object(n["openBlock"])(),Object(n["createElementBlock"])("div",je,Object(n["toDisplayString"])(e.passwordError),1)):Object(n["createCommentVNode"])("",!0)]),Object(n["createElementVNode"])("div",Oe,[Object(n["createElementVNode"])("div",pe,[fe,Object(n["withDirectives"])(Object(n["createElementVNode"])("input",{class:"input","onUpdate:modelValue":t[5]||(t[5]=function(t){return e.rePasswordField=t}),type:"password",placeholder:"请确认密码"},null,512),[[n["vModelText"],e.rePasswordField]])]),e.rePasswordError?(Object(n["openBlock"])(),Object(n["createElementBlock"])("div",ve,Object(n["toDisplayString"])(e.rePasswordError),1)):Object(n["createCommentVNode"])("",!0)]),Ee],32)}var ge=["handleSubmit","getMobileIsValidate"],ke={name:"LoginCallbackBindPatch",props:{unionId:{type:String}},setup:function(e){var t=he(),c=t.handleSubmit,n=t.getMobileIsValidate,o=Object(L["a"])(t,ge),r=Object(R["a"])(),a=r.count,i=r.isActive,l=r.start,s=Object(z["a"])(),u=s.loginSuccess,d=s.loginFail,b=c((function(t){var c=t.checkUserAccount,n=t.mobile,o=t.code,r=t.password;Object(T["i"])({checkUserAccount:c,mobile:n,code:o,password:r,unionId:e.unionId}).then(u,d)})),m=function(){i.value||n().then((function(e){var t=e.isValid,c=e.mobile;if(t)return Object(T["e"])(c)})).then((function(){Object(Q["a"])({type:"success",text:"验证码发送成功"}),l(60)})).catch((function(){Object(Q["a"])({type:"error",text:"验证码发送失败"})}))};return Object(D["a"])(Object(D["a"])({},o),{},{onSubmit:b,getMsgCode:m,count:a,isActive:i})}};function he(){var e=Object(U["b"])({validationSchema:{checkUserAccount:_["b"],mobile:_["e"],code:_["c"],rePassword:_["g"],password:_["f"]}}),t=e.handleSubmit,c=Object(U["a"])("checkUserAccount"),n=c.value,o=c.errorMessage,r=Object(U["a"])("mobile"),a=r.value,i=r.errorMessage,l=r.validate,s=Object(U["a"])("code"),u=s.value,d=s.errorMessage,b=Object(U["a"])("password"),m=b.value,j=b.errorMessage,O=Object(U["a"])("rePassword"),p=O.value,f=O.errorMessage,v=function(){var e=Object(P["a"])(regeneratorRuntime.mark((function e(){var t,c;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,l();case 2:return t=e.sent,c=t.valid,e.abrupt("return",{isValid:c,mobile:a.value});case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return{handleSubmit:t,accountField:n,accountError:o,mobileField:a,mobileError:i,codeField:u,codeError:d,passwordField:m,passwordError:j,rePasswordField:p,rePasswordError:f,getMobileIsValidate:v}}c("10ae");const Ne=W()(ke,[["render",Ve],["__scopeId","data-v-000d98bf"]]);var we=Ne,xe={name:"LoginCallbackPage",components:{LoginCallbackBindPatch:we,LoginCallbackBindPhone:Y,LoginFooter:g["a"],LoginHeader:V["a"]},setup:function(){var e=Object(n["ref"])(!0),t=Object(n["ref"])(!1),c=Object(n["ref"])(!1),o=Object(z["a"])(),r=o.loginSuccess,a=Object(n["ref"])("");return window.QC.Login.check()&&(c.value=!0,window.QC.Login.getMe((function(e){a.value=e,Object(T["c"])({unionId:e}).then((function(e){c.value=!1,t.value=!0,r(e)})).catch((function(){c.value=!1,t.value=!1}))}))),{hasAccount:e,isBind:t,loading:c,unionId:a}}};c("91f7");const ye=W()(xe,[["render",E],["__scopeId","data-v-4d350b2c"]]);t["default"]=ye}}]);
//# sourceMappingURL=chunk-95b5ab78.a4e20590.js.map