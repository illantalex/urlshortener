(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{22:function(e,t,a){e.exports=a(34)},27:function(e,t,a){},34:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(20),l=a.n(c),o=(a(27),a(28),a(1)),s=a(2),i=a.n(s),u=a(5),m=a(4),d=function(){var e=Object(n.useState)(!1),t=Object(m.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)(null),l=Object(m.a)(c,2),o=l[0],s=l[1];return{loading:a,request:Object(n.useCallback)(function(){var e=Object(u.a)(i.a.mark((function e(t){var a,n,c,l,o,u=arguments;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=u.length>1&&void 0!==u[1]?u[1]:"GET",n=u.length>2&&void 0!==u[2]?u[2]:null,c=u.length>3&&void 0!==u[3]?u[3]:{},r(!0),e.prev=4,n&&(n=JSON.stringify(n),c["Content-Type"]="application/json"),e.next=8,fetch(t,{method:a,body:n,headers:c});case 8:return l=e.sent,e.next=11,l.json();case 11:if(o=e.sent,l.ok){e.next=14;break}throw new Error(o.message||"Something was wrong ");case 14:return r(!1),e.abrupt("return",o);case 18:throw e.prev=18,e.t0=e.catch(4),r(!1),s(e.t0.message),e.t0;case 23:case"end":return e.stop()}}),e,null,[[4,18]])})));return function(t){return e.apply(this,arguments)}}(),[]),error:o,clearError:Object(n.useCallback)((function(){return s(null)}),[])}};function f(){}var p=Object(n.createContext)({token:null,userId:null,login:f,logout:f,isAuthenticated:!1}),E=function(){return r.a.createElement("div",{style:{display:"flex",justifyContent:"center",paddingTop:"2rem"}},r.a.createElement("div",{className:"preloader-wrapper big active"},r.a.createElement("div",{className:"spinner-layer spinner-blue-only"},r.a.createElement("div",{className:"circle-clipper left"},r.a.createElement("div",{className:"circle"})),r.a.createElement("div",{className:"gap-patch"},r.a.createElement("div",{className:"circle"})),r.a.createElement("div",{className:"circle-clipper right"},r.a.createElement("div",{className:"circle"})))))},v=a(9),b=function(e){var t=e.header,a=e.text,c=e.index,l=e.func;return Object(n.useEffect)((function(){var e=document.querySelectorAll(".modal");window.M.Modal.init(e)}),[]),r.a.createElement("div",{id:"modal".concat(c),className:"modal"},r.a.createElement("div",{className:"modal-content"},r.a.createElement("h4",null,t),r.a.createElement("p",{style:{wordWrap:"break-word"}},a)),r.a.createElement("div",{className:"modal-footer"},r.a.createElement("button",{className:"btn-flat waves-effect",onClick:l},"OK"),r.a.createElement("a",{href:"#!",className:"modal-close waves-effect btn-flat"},"Cancel")))},h=function(e){var t=e.links,a=e.deleteLink;return t.length?r.a.createElement("div",{className:"container",style:{marginTop:"2rem"}},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col s1"},"#"),r.a.createElement("div",{className:"col s5"},"Original"),r.a.createElement("div",{className:"col s4"},"Shorted"),r.a.createElement("div",{className:"col s2"},"Action")),t.map((function(e,t){return r.a.createElement("div",{className:"row",key:e._id},r.a.createElement("div",{className:"col s1"},t+1),r.a.createElement("div",{className:"col s5",style:{overflow:"hidden",wordWrap:"break-word"}},e.from),r.a.createElement("div",{className:"col s4",style:{overflow:"hidden",wordWrap:"break-word"}},e.to),r.a.createElement("div",{className:"col s2"},r.a.createElement(v.b,{to:"/detail/".concat(e._id)},"Open"),r.a.createElement("br",null),r.a.createElement("a",{href:"#modal".concat(t),className:"modal-trigger"},"Delete"),r.a.createElement(b,{header:"Delete link?",text:"Are you sure you want to delete link ".concat(e.from,"?"),index:t,func:function(){return a(e._id)}})))}))):r.a.createElement("p",{className:"center"},"there're still no links")},k=function(){return Object(n.useCallback)((function(e){window.M&&e&&window.M.toast({html:e})}),[])},g=function(){var e=Object(n.useState)([]),t=Object(m.a)(e,2),a=t[0],c=t[1],l=d(),o=l.loading,s=l.request,f=l.error,v=l.clearError,b=k(),g=Object(n.useContext)(p).token,w=Object(n.useCallback)(Object(u.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s("api/link","GET",null,{Authorization:"Bearer ".concat(g)});case 3:t=e.sent,c(t),e.next=9;break;case 7:e.prev=7,e.t0=e.catch(0);case 9:case"end":return e.stop()}}),e,null,[[0,7]])}))),[g,s]),O=function(){var e=Object(u.a)(i.a.mark((function e(t){var a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s("/api/link/".concat(t),"DELETE",null,{Authorization:"Bearer ".concat(g)});case 3:a=e.sent,b(a.message),w(),e.next=10;break;case 8:e.prev=8,e.t0=e.catch(0);case 10:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){b(f),v()}),[f,b,v]),Object(n.useEffect)((function(){w()}),[w]),o?r.a.createElement(E,null):r.a.createElement("div",null,!o&&r.a.createElement(h,{links:a,deleteLink:O}))},w=function(){var e=Object(o.g)(),t=Object(n.useContext)(p),a=d().request,c=Object(n.useState)(""),l=Object(m.a)(c,2),s=l[0],f=l[1];Object(n.useEffect)((function(){window.M.updateTextFields()}),[]);var E=function(){var n=Object(u.a)(i.a.mark((function n(r){var c;return i.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if("Enter"!==r.key){n.next=10;break}return n.prev=1,n.next=4,a("/api/link/generate","POST",{from:s},{Authorization:"Bearer ".concat(t.token)});case 4:c=n.sent,e.push("/detail/".concat(c.link._id)),n.next=10;break;case 8:n.prev=8,n.t0=n.catch(1);case 10:case"end":return n.stop()}}),n,null,[[1,8]])})));return function(e){return n.apply(this,arguments)}}();return r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col s8 offset-s2",style:{paddingTop:"2rem"}},r.a.createElement("div",{className:"input-field"},r.a.createElement("input",{placeholder:"Write a link",id:"link",type:"text",value:s,onChange:function(e){return f(e.target.value)},onKeyPress:E}),r.a.createElement("label",{htmlFor:"link"},"Input your link"))))},O=function(){var e=Object(n.useContext)(p).token,t=d(),a=t.request,c=t.loading,l=t.error,s=t.clearError,f=Object(n.useState)(null),v=Object(m.a)(f,2),h=v[0],g=v[1],w=Object(o.h)().id,O=Object(o.g)(),j=k(),N=Object(n.useCallback)(Object(u.a)(i.a.mark((function t(){var n;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,a("/api/link/".concat(w),"GET",null,{Authorization:"Bearer ".concat(e)});case 3:n=t.sent,g(n),t.next=9;break;case 7:t.prev=7,t.t0=t.catch(0);case 9:case"end":return t.stop()}}),t,null,[[0,7]])}))),[e,w,a]);Object(n.useEffect)((function(){N()}),[N]),Object(n.useEffect)((function(){j(l),s()}),[l,j,s]);var x=function(){var t=Object(u.a)(i.a.mark((function t(){var n;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,a("/api/link/".concat(w),"DELETE",null,{Authorization:"Bearer ".concat(e)});case 3:n=t.sent,j(n.message),O.push("/links"),t.next=10;break;case 8:t.prev=8,t.t0=t.catch(0);case 10:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(){return t.apply(this,arguments)}}();return c?r.a.createElement(E,null):r.a.createElement("div",{className:"container"},!c&&h&&r.a.createElement("div",{className:"row"},r.a.createElement("h2",null,"Link"),r.a.createElement("p",{className:"col s12"},"Your link:"," ",r.a.createElement("a",{href:h.to,target:"_blank",rel:"noopener noreferrer"},h.to)),r.a.createElement("p",{className:"col s12"},"It's from:"," ",r.a.createElement("a",{style:{wordWrap:"break-word"},href:h.from,target:"_blank",rel:"noopener noreferrer"},h.from)),r.a.createElement("p",{className:"col s12"},"Number of clicks: ",r.a.createElement("strong",null,h.clicks)),r.a.createElement("p",{className:"col s12"},"Date created:"," ",r.a.createElement("strong",null,new Date(h.date).toLocaleDateString())),r.a.createElement("p",{className:"col s12"},r.a.createElement("button",{className:"btn pink modal-trigger","data-target":"modal0"},"Delete"),r.a.createElement(b,{header:"Delete link?",text:"Are you sure you want to delete link ".concat(h.from,"?"),index:0,func:x}))))},j=a(13),N=a(12),x=function(){var e=Object(n.useContext)(p),t=k(),a=d(),c=a.loading,l=a.request,o=a.error,s=a.clearError,f=Object(n.useState)({email:"",password:""}),E=Object(m.a)(f,2),v=E[0],b=E[1];Object(n.useEffect)((function(){t(o),s()}),[o,t,s]),Object(n.useEffect)((function(){window.M.updateTextFields()}),[]);var h=function(e){b(Object(N.a)(Object(N.a)({},v),{},Object(j.a)({},e.target.name,e.target.value)))},g=function(){var e=Object(u.a)(i.a.mark((function e(){var a;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,l("/api/auth/register","POST",Object(N.a)({},v));case 3:a=e.sent,t(a.message),e.next=9;break;case 7:e.prev=7,e.t0=e.catch(0);case 9:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),w=function(){var t=Object(u.a)(i.a.mark((function t(){var a;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,l("/api/auth/login","POST",Object(N.a)({},v));case 3:a=t.sent,e.login(a.token,a.userId),t.next=9;break;case 7:t.prev=7,t.t0=t.catch(0);case 9:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(){return t.apply(this,arguments)}}();return r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col s6 offset-s3"},r.a.createElement("h1",null,"Shorten your link"),r.a.createElement("div",{className:"card blue darken-1"},r.a.createElement("div",{className:"card-content white-text"},r.a.createElement("span",{className:"card-title"},"Authorization"),r.a.createElement("div",null,r.a.createElement("div",{className:"input-field"},r.a.createElement("input",{placeholder:"Email",id:"email",type:"text",name:"email",className:"yellow-input",value:v.email,onChange:h})),r.a.createElement("div",{className:"input-field"},r.a.createElement("input",{placeholder:"Password",id:"password",type:"password",name:"password",className:"yellow-input",value:v.password,onChange:h})))),r.a.createElement("div",{className:"card-action"},r.a.createElement("button",{className:"btn yellow darken-4",style:{marginRight:10},onClick:w,disabled:c},"Login"),r.a.createElement("button",{className:"btn grey lighten-1 black-text",onClick:g,disabled:c},"Register"," ")))))},y=function(){var e=Object(o.g)(),t=Object(n.useContext)(p),a=function(){window.M.Sidenav.getInstance(document.querySelector(".sidenav")).close()};Object(n.useEffect)((function(){window.M.Sidenav.init(document.querySelector(".sidenav"))}),[]);var c=r.a.createElement("div",null,r.a.createElement("li",null,r.a.createElement(v.c,{to:"/create",onClick:a},"Create")),r.a.createElement("li",null,r.a.createElement(v.c,{to:"/links",onClick:a},"Links")),r.a.createElement("li",null,r.a.createElement("a",{href:"/",onClick:function(n){n.preventDefault(),a(),t.logout(),e.push("/")}},"Logout")));return r.a.createElement("div",null,r.a.createElement("nav",null,r.a.createElement("div",{className:"nav-wrapper blue darken-1"},r.a.createElement("a",{href:"#mobile-demo",className:"sidenav-trigger"},r.a.createElement("i",{className:"material-icons"},"menu")),r.a.createElement("span",{className:"brand-logo",style:{paddingLeft:"1rem"}},"Shortify"),r.a.createElement("ul",{id:"nav-mobile",className:"right hide-on-med-and-down"},c))),r.a.createElement("ul",{className:"sidenav",id:"mobile-demo"},c))};var S=function(){var e=function(){var e=Object(n.useState)(null),t=Object(m.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)(!1),l=Object(m.a)(c,2),o=l[0],s=l[1],i=Object(n.useState)(null),u=Object(m.a)(i,2),d=u[0],f=u[1],p=Object(n.useCallback)((function(e,t){r(e),f(t),localStorage.setItem("userData",JSON.stringify({userId:t,token:e}))}),[]),E=Object(n.useCallback)((function(){r(null),f(null),localStorage.removeItem("userData")}),[]);return Object(n.useEffect)((function(){var e=JSON.parse(localStorage.getItem("userData"));e&&e.token&&p(e.token,e.userId),s(!0)}),[p]),{login:p,logout:E,token:a,userId:d,ready:o}}(),t=e.token,a=e.login,c=e.logout,l=e.userId,s=e.ready,i=!!t,u=function(e){return e?r.a.createElement(o.d,null,r.a.createElement(o.b,{path:"/links",exact:!0},r.a.createElement(g,null)),r.a.createElement(o.b,{path:"/create",exact:!0},r.a.createElement(w,null)),r.a.createElement(o.b,{path:"/detail/:id",exact:!0},r.a.createElement(O,null)),r.a.createElement(o.a,{to:"/create"})):r.a.createElement(o.d,null,r.a.createElement(o.b,{path:"/",exact:!0},r.a.createElement(x,null)),r.a.createElement(o.a,{to:"/"}))}(i);return s?r.a.createElement(p.Provider,{value:{token:t,login:a,logout:c,userId:l,isAuthenticated:i}},r.a.createElement(v.a,null,i&&r.a.createElement(y,null),r.a.createElement("div",{className:"container"},u))):r.a.createElement(E,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(S,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[22,1,2]]]);
//# sourceMappingURL=main.adcdcbff.chunk.js.map