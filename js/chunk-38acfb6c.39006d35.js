(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-38acfb6c"],{"4ec3":function(t,e,n){"use strict";n.d(e,"e",(function(){return r})),n.d(e,"b",(function(){return a})),n.d(e,"c",(function(){return s})),n.d(e,"a",(function(){return i})),n.d(e,"d",(function(){return u}));var o=window.axios,r=function(t){return o.post("/signin",t)},a=function(){return o.get("/getAllData")},s=function(){return o.get("/getAllGroup")},i=function(t){return o.post("/addPassword",t)},u=function(t){return o.get("/getInfoById",{params:{id:t}})}},d3bb:function(t,e,n){},dd7b:function(t,e,n){"use strict";n.r(e);var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("van-nav-bar",{attrs:{title:t.title,"left-text":t.showBack,"left-arrow":t.showArrow,fixed:""}}),n("form",{attrs:{action:"javascript:void(0)",method:"post"}},[n("van-cell-group",[n("van-field",{attrs:{border:"",placeholder:"请输入用户名",label:"用户名",required:""},model:{value:t.form.username,callback:function(e){t.$set(t.form,"username",e)},expression:"form.username"}}),n("van-field",{attrs:{border:"",placeholder:"请输入密码",type:"password",label:"密 码",required:""},model:{value:t.form.password,callback:function(e){t.$set(t.form,"password",e)},expression:"form.password"}})],1),n("van-button",{staticStyle:{"margin-top":"10px"},attrs:{type:"primary",block:"",loading:t.loading,"loading-text":"登录中..."},on:{click:t.userLogin}},[t._v("登录")])],1)],1)},r=[],a=(n("0653"),n("34e9")),s=(n("be7f"),n("565f")),i=n("4ec3"),u={name:"login",components:{Field:s["a"],CellGroup:a["a"]},data:function(){return{loading:!1,form:{username:null,password:null}}},computed:{title:function(){return this.$route.meta.title||""},showBack:function(){return this.$route.meta.showBack||""},showArrow:function(){return this.$route.meta.showArrow||!1}},methods:{userLogin:function(){var t=this;this.loading=!0,Object(i["e"])(this.form).then((function(e){t.loading=!1,"success"==e.code&&(localStorage.setItem("token",e.message),t.$toast.success("登录成功！"),t.$router.push({name:"home"}))})).catch((function(e){t.loading=!1,localStorage.clear(),t.$toast.fail(e)}))}}},c=u,l=(n("ff1d"),n("2877")),d=Object(l["a"])(c,o,r,!1,null,"1fa40f50",null);e["default"]=d.exports},ff1d:function(t,e,n){"use strict";var o=n("d3bb"),r=n.n(o);r.a}}]);
//# sourceMappingURL=chunk-38acfb6c.39006d35.js.map