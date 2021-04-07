(this["webpackJsonpnotes-app-client"]=this["webpackJsonpnotes-app-client"]||[]).push([[0],{158:function(e,t,n){},160:function(e,t,n){},162:function(e,t,n){},163:function(e,t,n){},195:function(e,t,n){},218:function(e,t,n){},225:function(e,t,n){},226:function(e,t,n){},236:function(e,t,n){},237:function(e,t,n){},238:function(e,t,n){},239:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),r=n(53),s=n.n(r),i=n(26),o=(n(158),n(10)),u=n.n(o),l=n(17),j=n(13),b=n(67),d=n(18),p=(n(160),n(3));function h(){return Object(p.jsx)("div",{className:"NotFound text-center",children:Object(p.jsx)("h3",{children:"Sorry, page not found!"})})}var O=n(101),x=n(8),f=n(28),m=n(42),g=n(135),v=n(87);n(162);function w(e){var t=e.isLoading,n=e.className,a=void 0===n?"":n,c=e.disabled,r=void 0!==c&&c,s=Object(m.a)(e,["isLoading","className","disabled"]);return Object(p.jsxs)(g.a,Object(f.a)(Object(f.a)({disabled:r||t,className:"LoaderButton ".concat(a)},s),{},{children:[t&&Object(p.jsx)(v.a,{className:"spinning"}),s.children]}))}var y=Object(a.createContext)(null);function k(){return Object(a.useContext)(y)}var C=n(75);function S(e){var t=Object(a.useState)(e),n=Object(j.a)(t,2),c=n[0],r=n[1];return[c,function(e){r(Object(f.a)(Object(f.a)({},c),{},Object(C.a)({},e.target.id,e.target.value)))}]}function I(e){var t=e.toString();e instanceof Error||!e.message||(t=e.message),alert(t)}n(163);function L(){var e=k().userHasAuthenticated,t=Object(a.useState)(!1),n=Object(j.a)(t,2),c=n[0],r=n[1],s=S({email:"",password:""}),i=Object(j.a)(s,2),o=i[0],b=i[1];function d(){return(d=Object(l.a)(u.a.mark((function t(n){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),r(!0),t.prev=2,t.next=5,O.a.signIn(o.email,o.password);case 5:e(!0),t.next=12;break;case 8:t.prev=8,t.t0=t.catch(2),I(t.t0),r(!1);case 12:case"end":return t.stop()}}),t,null,[[2,8]])})))).apply(this,arguments)}return Object(p.jsx)("div",{className:"Login",children:Object(p.jsxs)(x.a,{onSubmit:function(e){return d.apply(this,arguments)},children:[Object(p.jsxs)(x.a.Group,{size:"lg",controlId:"email",children:[Object(p.jsx)(x.a.Label,{children:"Email"}),Object(p.jsx)(x.a.Control,{autoFocus:!0,type:"email",value:o.email,onChange:b})]}),Object(p.jsxs)(x.a.Group,{size:"lg",controlId:"password",children:[Object(p.jsx)(x.a.Label,{children:"Password"}),Object(p.jsx)(x.a.Control,{type:"password",value:o.password,onChange:b})]}),Object(p.jsx)(w,{block:!0,size:"lg",type:"submit",isLoading:c,disabled:!(o.email.length>0&&o.password.length>0),children:"Login"})]})})}var N=n(94),E=n(46),A=n(249);n(195);function P(){var e=Object(a.useState)([]),t=Object(j.a)(e,2),n=t[0],c=t[1],r=k().isAuthenticated,s=Object(a.useState)(!0),i=Object(j.a)(s,2),o=i[0],b=i[1];function d(){return A.a.get("notes","/notes")}function h(e){return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(E.LinkContainer,{to:"/notes/new",children:Object(p.jsxs)(N.a.Item,{action:!0,className:"py-3 text-nowrap text-truncate",children:[Object(p.jsx)(v.b,{size:17}),Object(p.jsx)("span",{className:"ml-2 font-weight-bold",children:"Create a new note"})]})}),e.map((function(e){var t=e.noteId,n=e.content,a=e.createdAt;return Object(p.jsx)(E.LinkContainer,{to:"/notes/".concat(t),children:Object(p.jsxs)(N.a.Item,{action:!0,children:[Object(p.jsx)("span",{className:"font-weight-bold",children:n.trim().split("\n")[0]}),Object(p.jsx)("br",{}),Object(p.jsxs)("span",{className:"text-muted",children:["Created: ",new Date(a).toLocaleString()]})]})},t)}))]})}return Object(a.useEffect)((function(){function e(){return(e=Object(l.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r){e.next=2;break}return e.abrupt("return");case 2:return e.prev=2,e.next=5,d();case 5:t=e.sent,c(t),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(2),I(e.t0);case 12:b(!1);case 13:case"end":return e.stop()}}),e,null,[[2,9]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[r]),Object(p.jsx)("div",{className:"Home",children:r?Object(p.jsxs)("div",{className:"notes",children:[Object(p.jsx)("h2",{className:"pb-3 mt-4 mb-3 border-bottom",children:"Your Notes"}),Object(p.jsx)(N.a,{children:!o&&h(n)})]}):Object(p.jsxs)("div",{className:"lander",children:[Object(p.jsx)("h1",{children:"Scratch"}),Object(p.jsx)("p",{className:"text-muted",children:"A simple note taking app"})]})})}n(218);function T(){var e=S({email:"",password:"",confirmPassword:"",confirmationCode:""}),t=Object(j.a)(e,2),n=t[0],c=t[1],r=Object(d.k)(),s=Object(a.useState)(null),i=Object(j.a)(s,2),o=i[0],b=i[1],h=k().userHasAuthenticated,f=Object(a.useState)(!1),m=Object(j.a)(f,2),g=m[0],v=m[1];function y(e){return C.apply(this,arguments)}function C(){return(C=Object(l.a)(u.a.mark((function e(t){var a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),v(!0),e.prev=2,e.next=5,O.a.signUp({username:n.email,password:n.password});case 5:a=e.sent,v(!1),b(a),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(2),I(e.t0),v(!1);case 14:case"end":return e.stop()}}),e,null,[[2,10]])})))).apply(this,arguments)}function L(e){return N.apply(this,arguments)}function N(){return(N=Object(l.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),v(!0),e.prev=2,e.next=5,O.a.confirmSignUp(n.email,n.confirmationCode);case 5:return e.next=7,O.a.signIn(n.email,n.password);case 7:h(!0),r.push("/"),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(2),I(e.t0),v(!1);case 15:case"end":return e.stop()}}),e,null,[[2,11]])})))).apply(this,arguments)}return Object(p.jsx)("div",{className:"Signup",children:null===o?Object(p.jsxs)(x.a,{onSubmit:y,children:[Object(p.jsxs)(x.a.Group,{controlId:"email",size:"lg",children:[Object(p.jsx)(x.a.Label,{children:"Email"}),Object(p.jsx)(x.a.Control,{autoFocus:!0,type:"email",value:n.email,onChange:c})]}),Object(p.jsxs)(x.a.Group,{controlId:"password",size:"lg",children:[Object(p.jsx)(x.a.Label,{children:"Password"}),Object(p.jsx)(x.a.Control,{type:"password",value:n.password,onChange:c})]}),Object(p.jsxs)(x.a.Group,{controlId:"confirmPassword",size:"lg",children:[Object(p.jsx)(x.a.Label,{children:"Confirm Password"}),Object(p.jsx)(x.a.Control,{type:"password",onChange:c,value:n.confirmPassword})]}),Object(p.jsx)(w,{block:!0,size:"lg",type:"submit",variant:"success",isLoading:g,disabled:!(n.email.length>0&&n.password.length>0&&n.password===n.confirmPassword),children:"Signup"})]}):Object(p.jsxs)(x.a,{onSubmit:L,children:[Object(p.jsxs)(x.a.Group,{controlId:"confirmationCode",size:"lg",children:[Object(p.jsx)(x.a.Label,{children:"Confirmation Code"}),Object(p.jsx)(x.a.Control,{autoFocus:!0,type:"tel",onChange:c,value:n.confirmationCode}),Object(p.jsx)(x.a.Text,{muted:!0,children:"Please check your email for the code."})]}),Object(p.jsx)(w,{block:!0,size:"lg",type:"submit",variant:"success",isLoading:g,disabled:!(n.confirmationCode.length>0),children:"Verify"})]})})}var _=n(248);function G(e){return D.apply(this,arguments)}function D(){return(D=Object(l.a)(u.a.mark((function e(t){var n,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="".concat(Date.now(),"-").concat(t.name),e.next=3,_.a.vault.put(n,t,{contentType:t.type});case 3:return a=e.sent,e.abrupt("return",a.key);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var z={STRIPE_KEY:"pk_test_51IUoVZHUkyjAXMtWDH20EiKKGNKusb7Jec0fIZQ0fyO8AbjwWxAsGK4SJRm7gGnKswYwasapUt3cmoXZNSJJwHf700zqqYVqTJ",s3:{REGION:"us-west-2",BUCKET:"notes-app-upload-weijia"},apiGateway:{REGION:"us-west-2",URL:"https://y4m5xqlvsc.execute-api.us-west-2.amazonaws.com/prod"},cognito:{REGION:"us-west-2",USER_POOL_ID:"us-west-2_5q6lPCf2F",APP_CLIENT_ID:"1j5vc27s2rgejms8n5hji78r1m",IDENTITY_POOL_ID:"us-west-2:fd4cb159-a523-40e9-9528-9f6aa4b05498"}};n(225);function R(){var e=Object(a.useRef)(null),t=Object(d.k)(),n=Object(a.useState)(""),c=Object(j.a)(n,2),r=c[0],s=c[1],i=Object(a.useState)(!1),o=Object(j.a)(i,2),b=o[0],h=o[1];function O(){return(O=Object(l.a)(u.a.mark((function n(a){var c;return u.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(a.preventDefault(),!(e.current&&e.current.size>z.MAX_ATTACHMENT_SIZE)){n.next=4;break}return alert("Please pick a file smaller than ".concat(z.MAX_ATTACHMENT_SIZE/1e6," MB.")),n.abrupt("return");case 4:if(h(!0),n.prev=5,!e.current){n.next=12;break}return n.next=9,G(e.current);case 9:n.t0=n.sent,n.next=13;break;case 12:n.t0=null;case 13:return c=n.t0,n.next=16,f({content:r,attachment:c});case 16:t.push("/"),n.next=23;break;case 19:n.prev=19,n.t1=n.catch(5),I(n.t1),h(!1);case 23:case"end":return n.stop()}}),n,null,[[5,19]])})))).apply(this,arguments)}function f(e){return A.a.post("notes","/notes",{body:e})}return Object(p.jsx)("div",{className:"NewNote",children:Object(p.jsxs)(x.a,{onSubmit:function(e){return O.apply(this,arguments)},children:[Object(p.jsx)(x.a.Group,{controlId:"content",children:Object(p.jsx)(x.a.Control,{value:r,as:"textarea",onChange:function(e){return s(e.target.value)}})}),Object(p.jsxs)(x.a.Group,{controlId:"file",children:[Object(p.jsx)(x.a.Label,{children:"Attachment"}),Object(p.jsx)(x.a.Control,{onChange:function(t){e.current=t.target.files[0]},type:"file"})]}),Object(p.jsx)(w,{block:!0,type:"submit",size:"lg",variant:"primary",isLoading:b,disabled:!(r.length>0),children:"Create"})]})})}n(226);function F(){var e,t=Object(a.useRef)(null),n=Object(d.m)().id,c=Object(d.k)(),r=Object(a.useState)(null),s=Object(j.a)(r,2),i=s[0],o=s[1],b=Object(a.useState)(""),h=Object(j.a)(b,2),O=h[0],f=h[1],m=Object(a.useState)(!1),g=Object(j.a)(m,2),v=g[0],y=g[1],k=Object(a.useState)(!1),C=Object(j.a)(k,2),S=C[0],L=C[1];function N(e){return A.a.put("notes","/notes/".concat(n),{body:e})}function E(){return(E=Object(l.a)(u.a.mark((function e(n){var a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),!(t.current&&t.current.size>z.MAX_ATTACHMENT_SIZE)){e.next=4;break}return alert("Please pick a file smaller than ".concat(z.MAX_ATTACHMENT_SIZE/1e6," MB.")),e.abrupt("return");case 4:if(y(!0),e.prev=5,!t.current){e.next=10;break}return e.next=9,G(t.current);case 9:a=e.sent;case 10:return e.next=12,N({content:O,attachment:a||i.attachment});case 12:c.push("/"),e.next=19;break;case 15:e.prev=15,e.t0=e.catch(5),I(e.t0),y(!1);case 19:case"end":return e.stop()}}),e,null,[[5,15]])})))).apply(this,arguments)}function P(){return A.a.del("notes","/notes/".concat(n))}function T(){return(T=Object(l.a)(u.a.mark((function e(t){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),window.confirm("Are you sure you want to delete this note?")){e.next=4;break}return e.abrupt("return");case 4:return L(!0),e.prev=5,e.next=8,P();case 8:c.push("/"),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(5),I(e.t0),L(!1);case 15:case"end":return e.stop()}}),e,null,[[5,11]])})))).apply(this,arguments)}return Object(a.useEffect)((function(){function e(){return A.a.get("notes","/notes/".concat(n))}function t(){return(t=Object(l.a)(u.a.mark((function t(){var n,a,c;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e();case 3:if(n=t.sent,a=n.content,!(c=n.attachment)){t.next=9;break}return t.next=8,_.a.vault.get(c);case 8:n.attachmentURL=t.sent;case 9:f(a),o(n),t.next=16;break;case 13:t.prev=13,t.t0=t.catch(0),I(t.t0);case 16:case"end":return t.stop()}}),t,null,[[0,13]])})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[n]),Object(p.jsx)("div",{className:"Notes",children:i&&Object(p.jsxs)(x.a,{onSubmit:function(e){return E.apply(this,arguments)},children:[Object(p.jsx)(x.a.Group,{controlId:"content",children:Object(p.jsx)(x.a.Control,{as:"textarea",value:O,onChange:function(e){return f(e.target.value)}})}),Object(p.jsxs)(x.a.Group,{controlId:"file",children:[Object(p.jsx)(x.a.Label,{children:"Attachment"}),i.attachment&&Object(p.jsx)("p",{children:Object(p.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:i.attachmentURL,children:(e=i.attachment,e.replace(/^\w+-/,""))})}),Object(p.jsx)(x.a.Control,{onChange:function(e){t.current=e.target.files[0]},type:"file"})]}),Object(p.jsx)(w,{block:!0,size:"lg",type:"submit",isLoading:v,disabled:!(O.length>0),children:"Save"}),Object(p.jsx)(w,{block:!0,size:"lg",variant:"danger",onClick:function(e){return T.apply(this,arguments)},isLoading:S,children:"Delete"})]})})}var U=n(57);n(236);var M=Object(U.injectStripe)((function(e){var t=e.isLoading,n=e.onSubmit,c=Object(m.a)(e,["isLoading","onSubmit"]),r=S({name:"",storage:""}),s=Object(j.a)(r,2),i=s[0],o=s[1],b=Object(a.useState)(!1),d=Object(j.a)(b,2),h=d[0],O=d[1],f=Object(a.useState)(!1),g=Object(j.a)(f,2),v=g[0],y=g[1];function k(){return(k=Object(l.a)(u.a.mark((function e(t){var a,r,s;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),O(!0),e.next=4,c.stripe.createToken({name:i.name});case 4:a=e.sent,r=a.token,s=a.error,O(!1),n(i.storage,{token:r,error:s});case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return t=h||t,Object(p.jsxs)(x.a,{className:"BillingForm",onSubmit:function(e){return k.apply(this,arguments)},children:[Object(p.jsxs)(x.a.Group,{size:"lg",controlId:"storage",children:[Object(p.jsx)(x.a.Label,{children:"Storage"}),Object(p.jsx)(x.a.Control,{min:"0",type:"number",value:i.storage,onChange:o,placeholder:"Number of notes to store"})]}),Object(p.jsx)("hr",{}),Object(p.jsxs)(x.a.Group,{size:"lg",controlId:"name",children:[Object(p.jsx)(x.a.Label,{children:"Cardholder's name"}),Object(p.jsx)(x.a.Control,{type:"text",value:i.name,onChange:o,placeholder:"Name on the card"})]}),Object(p.jsx)(x.a.Label,{children:"Credit Card Info"}),Object(p.jsx)(U.CardElement,{className:"card-field",onChange:function(e){return y(e.complete)},style:{base:{fontSize:"16px",color:"#495057",fontFamily:"'Open Sans', sans-serif"}}}),Object(p.jsx)(w,{block:!0,size:"lg",type:"submit",isLoading:t,disabled:!(""!==i.name&&""!==i.storage&&v),children:"Purchase"})]})}));n(237);function H(){var e=Object(d.k)(),t=Object(a.useState)(!1),n=Object(j.a)(t,2),c=n[0],r=n[1],s=Object(a.useState)(null),i=Object(j.a)(s,2),o=i[0],b=i[1];function h(e){return A.a.post("notes","/billing",{body:e})}function O(){return(O=Object(l.a)(u.a.mark((function t(n,a){var c,s;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(c=a.token,!(s=a.error)){t.next=4;break}return I(s),t.abrupt("return");case 4:return r(!0),t.prev=5,t.next=8,h({storage:n,source:c.id});case 8:alert("Your card has been charged successfully!"),e.push("/"),t.next=16;break;case 12:t.prev=12,t.t0=t.catch(5),I(t.t0),r(!1);case 16:case"end":return t.stop()}}),t,null,[[5,12]])})))).apply(this,arguments)}return Object(a.useEffect)((function(){b(window.Stripe(z.STRIPE_KEY))}),[]),Object(p.jsx)("div",{className:"Settings",children:Object(p.jsx)(U.StripeProvider,{stripe:o,children:Object(p.jsx)(U.Elements,{fonts:[{cssSrc:"https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700,800"}],children:Object(p.jsx)(M,{isLoading:c,onSubmit:function(e,t){return O.apply(this,arguments)}})})})})}function B(e){var t=e.children,n=Object(m.a)(e,["children"]),a=Object(d.l)(),c=a.pathname,r=a.search,s=k().isAuthenticated;return Object(p.jsx)(d.d,Object(f.a)(Object(f.a)({},n),{},{children:s?t:Object(p.jsx)(d.c,{to:"/login?redirect=".concat(c).concat(r)})}))}function K(e){var t=e.children,n=Object(m.a)(e,["children"]),a=k().isAuthenticated,c=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:window.location.href;e=e.replace(/[[]]/g,"\\$&");var n=new RegExp("[?&]"+e+"(=([^&#]*)|&|#|$)","i").exec(t);return n?n[2]?decodeURIComponent(n[2].replace(/\+/g," ")):"":null}("redirect");return Object(p.jsx)(d.d,Object(f.a)(Object(f.a)({},n),{},{children:a?Object(p.jsx)(d.c,{to:""===c||null===c?"/":c}):t}))}function Y(){return Object(p.jsxs)(d.g,{children:[Object(p.jsx)(d.d,{exact:!0,path:"/",children:Object(p.jsx)(P,{})}),Object(p.jsx)(K,{exact:!0,path:"/login",children:Object(p.jsx)(L,{})}),Object(p.jsx)(K,{exact:!0,path:"/signup",children:Object(p.jsx)(T,{})}),Object(p.jsx)(B,{exact:!0,path:"/settings",children:Object(p.jsx)(H,{})}),Object(p.jsx)(B,{exact:!0,path:"/notes/new",children:Object(p.jsx)(R,{})}),Object(p.jsx)(B,{exact:!0,path:"/notes/:id",children:Object(p.jsx)(F,{})}),Object(p.jsx)(d.d,{children:Object(p.jsx)(h,{})})]})}var J=n(60);n(238);var Z=function(){var e=Object(a.useState)(!1),t=Object(j.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(!0),s=Object(j.a)(r,2),i=s[0],o=s[1],h=Object(d.k)();function x(){return(x=Object(l.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,O.a.currentSession();case 3:c(!0),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),"No current user"!==e.t0&&I(e.t0);case 9:o(!1);case 10:case"end":return e.stop()}}),e,null,[[0,6]])})))).apply(this,arguments)}function f(){return(f=Object(l.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.a.signOut();case 2:c(!1),h.push("/login");case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(a.useEffect)((function(){!function(){x.apply(this,arguments)}()}),[]),!i&&Object(p.jsxs)("div",{className:"App container py-3",children:[Object(p.jsxs)(b.a,{collapseOnSelect:!0,bg:"light",expand:"md",className:"mb-3",children:[Object(p.jsx)(E.LinkContainer,{to:"/",children:Object(p.jsx)(b.a.Brand,{className:"font-weight-bold text-muted",children:"Scratch"})}),Object(p.jsx)(b.a.Toggle,{}),Object(p.jsx)(b.a.Collapse,{className:"justify-content-end",children:Object(p.jsx)(J.a,{activeKey:window.location.pathname,children:n?Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(E.LinkContainer,{to:"/settings",children:Object(p.jsx)(J.a.Link,{children:"Settings"})}),Object(p.jsx)(J.a.Link,{onClick:function(){return f.apply(this,arguments)},children:"Logout"})]}):Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(E.LinkContainer,{to:"/signup",children:Object(p.jsx)(J.a.Link,{children:"Signup"})}),Object(p.jsx)(E.LinkContainer,{to:"/login",children:Object(p.jsx)(J.a.Link,{children:"Login"})})]})})})]}),Object(p.jsx)(y.Provider,{value:{isAuthenticated:n,userHasAuthenticated:c},children:Object(p.jsx)(Y,{})})]})},X=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,250)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),a(e),c(e),r(e),s(e)}))};n(33).a.configure({Auth:{mandatorySignIn:!0,region:z.cognito.REGION,userPoolId:z.cognito.USER_POOL_ID,identityPoolId:z.cognito.IDENTITY_POOL_ID,userPoolWebClientId:z.cognito.APP_CLIENT_ID},Storage:{region:z.s3.REGION,bucket:z.s3.BUCKET,identityPoolId:z.cognito.IDENTITY_POOL_ID},API:{endpoints:[{name:"notes",endpoint:z.apiGateway.URL,region:z.apiGateway.REGION}]}}),s.a.render(Object(p.jsx)(c.a.StrictMode,{children:Object(p.jsx)(i.BrowserRouter,{children:Object(p.jsx)(Z,{})})}),document.getElementById("root")),X()}},[[239,1,2]]]);
//# sourceMappingURL=main.00d088f9.chunk.js.map