webpackJsonp([20],{ZNFZ:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=i("Dd8w"),l=i.n(a),n=i("NYxO"),s=i("+cKO"),o={name:"ShiftEmail",components:{EmailField:i("/QaM").a},data:function(){return{email:""}},methods:l()({},Object(n.b)("profile/info",["deleteInfo"]),Object(n.b)("auth/api",["logout"]),Object(n.b)("profile/account",["changeEmail"]),{submitHandler:function(){var e=this;this.$v.$invalid?this.$v.$touch():this.changeEmail({email:this.email}).then(function(){e.deleteInfo().then(function(){e.logout().then(function(){e.$router.push({name:"Login"})})})})}}),validations:{email:{required:s.required,email:s.email}},i18n:{messages:{en:{email:"Change mail",placeholder:"New mail",change:"Change"},ru:{email:"Смена почтового ящика",placeholder:"Новый почтовый ящик",change:"Сменить"}}}},c={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"shift-email"},[i("form",{staticClass:"shift-email__form",on:{submit:function(t){return t.preventDefault(),e.submitHandler(t)}}},[i("div",{staticClass:"form__block"},[i("h4",{staticClass:"form__subtitle"},[e._v(e._s(e.$t("email")))]),i("email-field",{class:{checked:e.$v.email.required&&e.$v.email.email},attrs:{id:"shift-email",v:e.$v.email,placeholder:e.$t("placeholder")},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}})],1),i("div",{staticClass:"shift-email__action"},[i("button-hover",{attrs:{tag:"button",type:"submit",variant:"white"}},[e._v(e._s(e.$t("change")))])],1)])])},staticRenderFns:[]};var r=i("VU/8")(o,c,!1,function(e){i("x32u")},null,null);t.default=r.exports},x32u:function(e,t){}});
//# sourceMappingURL=20.2397a9b6fb24c0068b5a.js.map