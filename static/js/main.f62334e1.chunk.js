(this["webpackJsonpjournal-app"]=this["webpackJsonpjournal-app"]||[]).push([[0],{157:function(e,t,n){},158:function(e,t,n){"use strict";n.r(t);var a=n(2),c=n(32),r=n.n(c),o=n(8),i=n(20),s=n(22),u=n(10),l=n(30),d=(n(159),n(73),{apiKey:Object({NODE_ENV:"production",PUBLIC_URL:"/journal-app",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_apiKey,authDomain:Object({NODE_ENV:"production",PUBLIC_URL:"/journal-app",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_authDomain,projectId:Object({NODE_ENV:"production",PUBLIC_URL:"/journal-app",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_projectId,storageBucket:Object({NODE_ENV:"production",PUBLIC_URL:"/journal-app",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_storageBucket,messagingSenderId:Object({NODE_ENV:"production",PUBLIC_URL:"/journal-app",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_messagingSenderId,appId:Object({NODE_ENV:"production",PUBLIC_URL:"/journal-app",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_appId,measurementId:Object({NODE_ENV:"production",PUBLIC_URL:"/journal-app",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_measurementId});l.a.initializeApp(d);var j=l.a.firestore(),b=new l.a.auth.GoogleAuthProvider,p=n(5),O=n(9),h=n.n(O),m=n(15),f=n(21),_=n.n(f),v=function(){var e=Object(m.a)(h.a.mark((function e(t){var n,a,c;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://api.cloudinary.com/v1_1/dlwi9zyyq/upload",(n=new FormData).append("upload_preset","react-journal"),n.append("file",t),e.prev=4,e.next=7,fetch("https://api.cloudinary.com/v1_1/dlwi9zyyq/upload",{method:"POST",body:n});case 7:if(!(a=e.sent).ok){e.next=15;break}return e.next=11,a.json();case 11:return c=e.sent,e.abrupt("return",c.secure_url);case 15:return e.abrupt("return",null);case 16:e.next=22;break;case 18:throw e.prev=18,e.t0=e.catch(4),console.log(e.t0),e.t0;case 22:case"end":return e.stop()}}),e,null,[[4,18]])})));return function(t){return e.apply(this,arguments)}}(),x=function(){var e=Object(m.a)(h.a.mark((function e(t){var n,a;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,j.collection("".concat(t,"/journal/notes")).get();case 2:return n=e.sent,a=[],n.forEach((function(e){a.push(Object(p.a)({id:e.id},e.data()))})),e.abrupt("return",a);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),g="[Auth] Login",y="[Auth] Logout",E="[UI] Set Error",S="[UI] Remove Error",N="[UI] Start loading",w="[UI] Finish loading",C="[Notes] New note",T="[Notes] Set Active note",P="[Notes] Load notes",A="[Notes] Update note",R="[Notes] Delete note",D="[Notes] Logout Cleaning",k=function(e,t){return{type:C,payload:Object(p.a)({id:e},t)}},I=function(e,t){return{type:T,payload:Object(p.a)({id:e},t)}},W=function(e){return{type:P,payload:e}},L=function(e){return function(){var t=Object(m.a)(h.a.mark((function t(n,a){var c,r;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c=a().auth.uid,e.url||delete e.url,delete(r=Object(p.a)({},e)).id,t.next=6,j.doc("".concat(c,"/journal/notes/").concat(e.id)).update(r);case 6:n(K(e.id,r)),_.a.fire("Saved",e.title,"success");case 8:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()},K=function(e,t){return{type:A,payload:{id:e,note:Object(p.a)({id:e},t)}}},U=function(e){return{type:R,payload:e}},H=n(35),F=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object(a.useState)(e),n=Object(i.a)(t,2),c=n[0],r=n[1],o=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:e;r(t)},s=function(e){var t=e.target;r(Object(p.a)(Object(p.a)({},c),{},Object(H.a)({},t.name,t.value)))};return[c,s,o]},B=n(1),V=function(){var e=Object(o.b)(),t=Object(o.c)((function(e){return e.notes})).active;return Object(B.jsxs)("div",{className:" notes__appbar",children:[Object(B.jsx)("span",{children:" 26 de feb 1992"}),Object(B.jsx)("input",{id:"fileSelector",type:"file",name:"file",style:{display:"none"},onChange:function(t){var n=t.target.files[0];n&&e(function(e){return function(){var t=Object(m.a)(h.a.mark((function t(n,a){var c,r;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c=a().notes.active,_.a.fire({title:"Uploading...",text:"Please Wait...",allowOutsideClick:function(){return!_.a.isLoading()},allowEnterKey:!1,allowEscapeKey:!1,showConfirmButton:!1,willOpen:function(){_.a.showLoading()}}),t.next=4,v(e);case 4:r=t.sent,c.url=r,n(L(c)),_.a.close();case 8:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()}(n))}}),Object(B.jsxs)("div",{children:[Object(B.jsx)("button",{className:"btn",onClick:function(){document.querySelector("#fileSelector").click()},children:"Picture"}),Object(B.jsx)("button",{className:"btn",onClick:function(){e(L(t))},children:"Save"})]})]})},q=function(){var e=Object(o.b)(),t=Object(o.c)((function(e){return e.notes})).active,n=F(t),c=Object(i.a)(n,3),r=c[0],s=c[1],u=c[2],l=r.title,d=r.body,b=r.id,O=Object(a.useRef)(t.id);Object(a.useEffect)((function(){t.id!==O.current&&(u(t),O.current=t.id)}),[t,u]),Object(a.useEffect)((function(){e(I(r.id,Object(p.a)({},r)))}),[r,e]);return Object(B.jsx)(B.Fragment,{children:Object(B.jsxs)("div",{className:"notes__main-content",children:[Object(B.jsx)(V,{}),Object(B.jsxs)("div",{className:"notes__content",children:[Object(B.jsx)("input",{type:"text",placeholder:"The best Title",className:" notes__title-input",autoComplete:"off",name:"title",value:l,onChange:s}),Object(B.jsx)("textarea",{placeholder:"What happend today ?",className:"notes__text-area",name:"body",value:d,onChange:s}),t.url&&Object(B.jsx)("div",{className:"notes__images",children:Object(B.jsx)("img",{src:t.url,alt:"example"})})]}),Object(B.jsx)("button",{className:" btn btn-danger",onClick:function(){e(function(e){return function(){var t=Object(m.a)(h.a.mark((function t(n,a){var c;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c=a().auth.uid,t.next=3,j.doc("/".concat(c,"/journal/notes/").concat(e)).delete();case 3:n(U(e));case 4:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()}(b))},children:"Delete"})]})})},z=function(){return Object(B.jsxs)("div",{className:"nothing__main-content",children:[Object(B.jsxs)("p",{children:["Select something",Object(B.jsx)("br",{}),"or create an entry!"]}),Object(B.jsx)("i",{className:"far fa-star fa-4x mt-5"})]})},G=function(e){return{type:E,payload:e}},J=function(){return{type:S}},X=function(){return{type:w}},M=function(e,t){return function(n){return n({type:N}),l.a.auth().signInWithEmailAndPassword(e,t).then((function(e){var t=e.user;n(Q(t.uid,t.displayName)),n(X())})).catch((function(e){console.log(e),n(X()),_.a.fire("Error",e.message,"error")}))}},Q=function(e,t){return{type:g,payload:{uid:e,displayName:t}}},Y=function(){return{type:y}},Z=n(62),$=n.n(Z),ee=function(e){var t=e.id,n=e.date,a=e.title,c=e.body,r=e.url,i=$()(n),s=Object(o.b)();return Object(B.jsxs)("div",{className:"journal__entry pointer animate__animated animate__fadeIn",onClick:function(){s(I(t,{id:t,date:n,title:a,body:c,url:r}))},children:[r&&Object(B.jsx)("div",{className:"journal__entry-picture",style:{backgroundSize:"cover",backgroundImage:"url(".concat(r,")")}}),Object(B.jsxs)("div",{className:"journal__entry-body",children:[Object(B.jsx)("p",{className:"journal__entry-title",children:a}),Object(B.jsx)("p",{className:"journal__entry-content",children:c})]}),Object(B.jsxs)("div",{className:"journal__entry-date-box",children:[Object(B.jsxs)("span",{children:[" ",i.format("dddd")," "]}),Object(B.jsxs)("h4",{children:[" ",i.format("do")," "]})]})]})},te=function(){var e=Object(o.c)((function(e){return e.notes})).notes;return Object(B.jsx)("div",{className:"journal__entries",children:e.map((function(e){return Object(B.jsx)(ee,Object(p.a)({},e),e.id)}))})},ne=function(){var e=Object(o.b)(),t=Object(o.c)((function(e){return e.auth})).name;return Object(B.jsxs)("aside",{className:"journal__side-bar",children:[Object(B.jsxs)("div",{className:"journal_sidebar-navbar mt-1",children:[Object(B.jsxs)("h3",{children:[Object(B.jsx)("i",{className:"far fa-moon"}),Object(B.jsxs)("span",{children:[" ",t," "]})]}),Object(B.jsx)("button",{className:"btn",onClick:function(){e(function(){var e=Object(m.a)(h.a.mark((function e(t){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l.a.auth().signOut();case 2:t(Y()),t({type:D});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())},children:" Logout "})]}),Object(B.jsxs)("div",{className:"journal__new-entry",onClick:function(){e(function(){var e=Object(m.a)(h.a.mark((function e(t,n){var a,c,r;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=n().auth.uid,c={title:"",body:"",date:(new Date).getTime()},e.prev=2,e.next=5,j.collection("".concat(a,"/journal/notes")).add(c).catch((function(e){console.log(e),_.a.fire("Error",e.message,"error")}));case 5:r=e.sent,t(I(r.id,c)),t(k(r.id,c)),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(2),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(t,n){return e.apply(this,arguments)}}())},children:[Object(B.jsx)("i",{className:"far fa-calendar-plus fa-5x"}),Object(B.jsx)("p",{className:"mt-5",children:" New Entry"})]}),Object(B.jsx)(te,{})]})},ae=function(){var e=Object(o.c)((function(e){return e.notes})).active;return Object(B.jsxs)("div",{className:"journal__main-content animate__animated animate__fadeIn",children:[Object(B.jsx)(ne,{}),Object(B.jsx)("main",{children:e?Object(B.jsx)(q,{}):Object(B.jsx)(z,{})})]})},ce=n(36),re=n.n(ce),oe=function(){var e=Object(o.b)(),t=Object(o.c)((function(e){return e.ui})).loading,n=F({email:"",password:""}),a=Object(i.a)(n,2),c=a[0],r=a[1],u=c.email,d=c.password,j=function(){return re.a.isEmail(u)?d.length<5?(e(G("Password is not valid")),!1):(e(J()),!0):(e(G("Email is not valid")),!1)};return Object(B.jsx)(B.Fragment,{children:Object(B.jsxs)("div",{className:"animate__animated animate__fadeIn",children:[Object(B.jsx)("h3",{className:"auth__title mb-5",children:" Login "}),Object(B.jsxs)("form",{onSubmit:function(t){t.preventDefault(),j()&&e(M(u,d))},children:[Object(B.jsx)("input",{type:"text",placeholder:"Email",name:"email",className:"auth__input",autoComplete:"off",value:u,onChange:r}),Object(B.jsx)("input",{type:"password",placeholder:"Password",name:"password",className:"auth__input",value:d,onChange:r}),Object(B.jsx)("button",{type:"submit",className:"btn btn-primary btn-block",disabled:t,children:"Login"}),Object(B.jsxs)("div",{className:"auth__social-networks mb-1",children:[Object(B.jsx)("p",{children:"Login with Social networks"}),Object(B.jsxs)("div",{className:"google-btn",onClick:function(){e((function(e){l.a.auth().signInWithPopup(b).then((function(t){var n=t.user;e(Q(n.uid,n.displayName))})).catch((function(e){console.log(e),_.a.fire("Error",e.message,"error")}))}))},children:[Object(B.jsx)("div",{className:"google-icon-wrapper",children:Object(B.jsx)("img",{className:"google-icon",src:"https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg",alt:"google button"})}),Object(B.jsx)("p",{className:"btn-text",children:Object(B.jsx)("b",{children:"Sign in with google"})})]})]}),Object(B.jsx)("hr",{}),Object(B.jsx)(s.b,{to:"/auth/register",className:"link",children:"Create new Account"})]})]})})},ie=function(){var e=Object(o.b)(),t=Object(o.c)((function(e){return e.ui})),n=t.loading,a=t.msgError,c=F({name:"",email:"",password:"",password2:""}),r=Object(i.a)(c,2),u=r[0],d=r[1],j=u.name,b=u.email,p=u.password,O=u.password2,f=function(){return 0===j.trim().length?(e(G("Name is required")),!1):re.a.isEmail(b)?p!==O||p.length<5?(e(G("Password is not valid")),!1):(e(J()),!0):(e(G("Email is not valid")),!1)};return Object(B.jsx)(B.Fragment,{children:Object(B.jsxs)("div",{className:"animate__animated animate__fadeIn",children:[Object(B.jsx)("h3",{className:"auth__title mb-5",children:" Register "}),a&&Object(B.jsx)("div",{className:"auth__alert-error",children:a}),Object(B.jsxs)("form",{onSubmit:function(t){t.preventDefault(),f()&&e(function(e,t,n){return function(a){l.a.auth().createUserWithEmailAndPassword(e,t).then(function(){var e=Object(m.a)(h.a.mark((function e(t){var c;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=t.user,e.next=3,c.updateProfile({displayName:n});case 3:console.log(c),a(Q(c.uid,c.displayName));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){console.log(e),_.a.fire("Error",e.message,"error")}))}}(b,p,j))},children:[Object(B.jsx)("input",{type:"text",placeholder:"Name",name:"name",className:"auth__input",autoComplete:"off",value:j,onChange:d}),Object(B.jsx)("input",{type:"text",placeholder:"Email",name:"email",className:"auth__input",autoComplete:"off",value:b,onChange:d}),Object(B.jsx)("input",{type:"password",placeholder:"Password",name:"password",className:"auth__input",value:p,onChange:d}),Object(B.jsx)("input",{type:"password",placeholder:"Confirm Password",name:"password2",className:"auth__input",value:O,onChange:d}),Object(B.jsx)("button",{type:"submit",className:"btn btn-primary btn-block mb-5",disabled:n,children:"Register"}),Object(B.jsx)("hr",{}),Object(B.jsx)(s.b,{to:"/auth/login",className:"link mt-5",children:"Already registered?"})]})]})})},se=function(){return Object(B.jsx)("div",{className:"auth__main",children:Object(B.jsx)("div",{className:"auth__box-container",children:Object(B.jsxs)(u.d,{children:[Object(B.jsx)(u.b,{exact:!0,path:"/auth/login",component:oe}),Object(B.jsx)(u.b,{exact:!0,path:"/auth/register",component:ie}),Object(B.jsx)(u.a,{to:"/auth/login"})]})})})},ue=n(37),le=function(e){var t=e.isAuthenticated,n=e.component,a=Object(ue.a)(e,["isAuthenticated","component"]);return Object(B.jsx)(u.b,Object(p.a)(Object(p.a)({},a),{},{component:function(e){return t?Object(B.jsx)(n,Object(p.a)({},e)):Object(B.jsx)(u.a,{to:"/auth/login"})}}))},de=function(e){var t=e.isAuthenticated,n=e.component,a=Object(ue.a)(e,["isAuthenticated","component"]);return Object(B.jsx)(u.b,Object(p.a)(Object(p.a)({},a),{},{component:function(e){return t?Object(B.jsx)(u.a,{to:"/"}):Object(B.jsx)(n,Object(p.a)({},e))}}))},je=function(){var e=Object(o.b)(),t=Object(a.useState)(!0),n=Object(i.a)(t,2),c=n[0],r=n[1],d=Object(a.useState)(!1),j=Object(i.a)(d,2),b=j[0],p=j[1];return Object(a.useEffect)((function(){l.a.auth().onAuthStateChanged((function(t){var n;(null===t||void 0===t?void 0:t.uid)?(e(Q(t.uid,t.displayName)),p(!0),e((n=t.uid,function(){var e=Object(m.a)(h.a.mark((function e(t){var a;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x(n);case 2:a=e.sent,t(W(a));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()))):p(!1),r(!1)}))}),[e,r,p]),c?Object(B.jsx)("h1",{children:" Wait..."}):Object(B.jsx)(s.a,{children:Object(B.jsx)("div",{children:Object(B.jsxs)(u.d,{children:[Object(B.jsx)(de,{path:"/auth",component:se,isAuthenticated:b}),Object(B.jsx)(le,{exact:!0,path:"/",component:ae,isAuthenticated:b}),Object(B.jsx)(u.a,{to:"/auth/login"})]})})})},be=n(23),pe=n(63),Oe=n(46),he={notes:[],active:null},me={loading:!1,msgError:null},fe="undefined"!==typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||be.d,_e=Object(be.c)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case g:return{uid:t.payload.uid,name:t.payload.displayName};case y:return{};default:return e}},ui:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:me,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case E:return Object(p.a)(Object(p.a)({},e),{},{msgError:t.payload});case S:return Object(p.a)(Object(p.a)({},e),{},{msgError:null});case N:return Object(p.a)(Object(p.a)({},e),{},{loading:!0});case w:return Object(p.a)(Object(p.a)({},e),{},{loading:!1});default:return e}},notes:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:he,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case T:return Object(p.a)(Object(p.a)({},e),{},{active:Object(p.a)({},t.payload)});case C:return Object(p.a)(Object(p.a)({},e),{},{notes:[t.payload].concat(Object(Oe.a)(e.notes))});case P:return Object(p.a)(Object(p.a)({},e),{},{notes:Object(Oe.a)(t.payload)});case A:return Object(p.a)(Object(p.a)({},e),{},{notes:e.notes.map((function(e){return e.id===t.payload.id?t.payload.note:e}))});case R:return Object(p.a)(Object(p.a)({},e),{},{active:null,notes:e.notes.filter((function(e){return e.id!==t.payload}))});case D:return Object(p.a)(Object(p.a)({},e),{},{notes:[],active:null});default:return e}}}),ve=Object(be.e)(_e,fe(Object(be.a)(pe.a))),xe=function(){return Object(B.jsx)(o.a,{store:ve,children:Object(B.jsx)(je,{})})};n(157);r.a.render(Object(B.jsx)(xe,{}),document.getElementById("root"))}},[[158,1,2]]]);
//# sourceMappingURL=main.f62334e1.chunk.js.map