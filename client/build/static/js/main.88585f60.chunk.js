(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{176:function(e,t,c){},184:function(e,t,c){"use strict";c.r(t);var a=c(0),s=c.n(a),n=c(152),l=c.n(n),r=(c(176),c(16)),i=c(196),j=c(201),d=c(120),o=c(195),b=c(199),x=c(198),O=c(166),h=c(202),m=c(203),u=c(204),p=c(205),g=c(83),v=c(7);var y=()=>{const[e,t]=Object(a.useState)(""),c=Object(r.p)();Object(a.useEffect)((()=>{const e=JSON.parse(localStorage.getItem("users"));e&&t(e)}),[]);return Object(v.jsx)(v.Fragment,{children:Object(v.jsx)("nav",{className:"navbar navbar-expand-lg bg-light",children:Object(v.jsxs)("div",{className:"container-fluid",children:[Object(v.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarTogglerDemo01","aria-controls":"navbarTogglerDemo01","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(v.jsx)("span",{className:"navbar-toggler-icon"})}),Object(v.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarTogglerDemo01",children:[Object(v.jsx)(g.b,{className:"navbar-brand",to:"/",children:"Expense Tracker"}),Object(v.jsxs)("ul",{className:"navbar-nav ms-auto mb-2 mb-lg-0",children:[Object(v.jsxs)("li",{className:"nav-item",children:[" ",Object(v.jsx)("p",{className:"nav-item",children:e&&e.name})," "]}),Object(v.jsx)("li",{className:"nav-item",children:Object(v.jsx)("button",{className:"btn btn-primary",onClick:()=>{localStorage.removeItem("user"),j.a.success("User logged out"),c("/login")},children:"Logout "})})]})]})]})})})};var N=()=>Object(v.jsx)("div",{className:"bg-dark text-light p-4",children:Object(v.jsx)("h6",{className:"text-center",children:"All rights reserved \xa9Salihms"})});var f=e=>{let{children:t}=e;return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)(y,{}),Object(v.jsx)("div",{className:"content",children:t}),Object(v.jsx)(N,{})]})},I=c(197);var S=()=>Object(v.jsx)(v.Fragment,{children:Object(v.jsx)("div",{className:"d-flex justify-content-center",children:Object(v.jsx)("div",{className:"spinner-border",role:"status",children:Object(v.jsx)("span",{className:"visually-hidden",children:"Loading..."})})})}),T=c(155),w=c.n(T),F=c(200);var C=e=>{let{allTransaction:t}=e;const c=["Salary","Tip","Project","Food","Movie","Bills","Medical","Fee","Tax"],a=t.length,s=t.filter((e=>"Income"===e.type)),n=t.filter((e=>"Expense"===e.type)),l=s.length/a*100,r=n.length/a*100,i=t.reduce(((e,t)=>e+t.amount),0),j=t.filter((e=>"Income"===e.type)).reduce(((e,t)=>e+t.amount),0),d=t.filter((e=>"Expense"===e.type)).reduce(((e,t)=>e+t.amount),0),o=j/i*100,b=d/i*100;return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsxs)("div",{className:"row m-3",children:[Object(v.jsx)("div",{className:"col-md-4",children:Object(v.jsxs)("div",{className:"card",children:[Object(v.jsxs)("div",{className:"card-header",children:["Total Transactions : ",a]}),Object(v.jsxs)("div",{className:"card-body",children:[Object(v.jsxs)("h5",{className:"text-success",children:["Income : ",s.length]}),Object(v.jsxs)("h5",{className:"text-danger",children:[" Expense : ",n.length]}),Object(v.jsxs)("div",{children:[Object(v.jsx)(F.a,{type:"circle",strokeColor:"green",className:"mx-2",percent:l.toFixed(0)}),Object(v.jsx)(F.a,{type:"circle",strokeColor:"red",className:"mx-2",percent:r.toFixed(0)})]})]})]})}),Object(v.jsx)("div",{className:"col-md-4",children:Object(v.jsxs)("div",{className:"card",children:[Object(v.jsxs)("div",{className:"card-header",children:["Total Turnover : ",i]}),Object(v.jsxs)("div",{className:"card-body",children:[Object(v.jsxs)("h5",{className:"text-success",children:["Income : ",j]}),Object(v.jsxs)("h5",{className:"text-danger",children:[" Expense : ",d]}),Object(v.jsxs)("div",{children:[Object(v.jsx)(F.a,{type:"circle",strokeColor:"green",className:"mx-2",percent:o.toFixed(0)}),Object(v.jsx)(F.a,{type:"circle",strokeColor:"red",className:"mx-2",percent:b.toFixed(0)})]})]})]})})]}),Object(v.jsxs)("div",{className:"row mt-3",children:[Object(v.jsxs)("div",{className:"col-md-4",children:[Object(v.jsx)("h4",{children:"Categorywise Income"}),c.map((e=>{const c=t.filter((t=>"Income"===t.type&&t.category===e)).reduce(((e,t)=>e+t.amount),0);return c>0&&Object(v.jsx)("div",{className:"card",children:Object(v.jsxs)("div",{className:"card-body",children:[Object(v.jsx)("h5",{children:e}),Object(v.jsx)(F.a,{percent:(c/j*100).toFixed(0)})]})})}))]}),Object(v.jsxs)("div",{className:"col-md-4",children:[Object(v.jsx)("h4",{children:"Categorywise Expense"}),c.map((e=>{const c=t.filter((t=>"Expense"===t.type&&t.category===e)).reduce(((e,t)=>e+t.amount),0);return c>0&&Object(v.jsx)("div",{className:"card",children:Object(v.jsxs)("div",{className:"card-body",children:[Object(v.jsx)("h5",{children:e}),Object(v.jsx)(F.a,{percent:(c/d*100).toFixed(0)})]})})}))]})]})]})};const{RangePicker:E}=i.a;var k=()=>{const[e,t]=Object(a.useState)(!1),[c,s]=Object(a.useState)(!1),[n,l]=Object(a.useState)([]),[r,i]=Object(a.useState)("7"),[g,y]=Object(a.useState)([]),[N,T]=Object(a.useState)("all"),[F,k]=Object(a.useState)("table"),[R,A]=Object(a.useState)(null),L=[{title:"date",dataIndex:"date",render:e=>Object(v.jsx)("span",{children:w()(e).format("YYYY-MM-DD")})},{title:"Amount",dataIndex:"amount"},{title:"Type",dataIndex:"type"},{title:"Category",dataIndex:"category"},{title:"Refrence",dataIndex:"refrence"},{title:"Actions",render:(e,c)=>Object(v.jsxs)("div",{children:[Object(v.jsx)(h.a,{onClick:()=>{A(c),t(!0)}}),Object(v.jsx)(m.a,{className:"mx-2",onClick:()=>{M(c)}})]})}];Object(a.useEffect)((()=>{(async()=>{try{const e=JSON.parse(localStorage.getItem("user"));s(!0);const t=await I.a.post("/api/v1/Transactions/get-transaction",{userid:e.user._id,frequency:r,selectedDate:g,type:N});s(!1),l(t.data),console.log(t.data)}catch(e){console.log(e),j.a.error("fetch issue with transaction")}})()}),[r,g,N]);const M=async e=>{try{s(!0),await I.a.post("/api/v1/Transactions/delete-transaction",{transactionsId:e._id}),s(!1),j.a.success("Transactions deleted successfully")}catch(t){s(!1),console.log(t),j.a.error("unable to delete transaction")}};return Object(v.jsxs)(f,{children:[c&&Object(v.jsx)(S,{}),Object(v.jsxs)("div",{className:"filters",children:[Object(v.jsxs)("div",{children:[Object(v.jsx)("h6",{children:"Select Frequency"}),Object(v.jsxs)(d.a,{value:r,onChange:e=>i(e),children:[Object(v.jsx)(d.a.Option,{value:"7",children:"Last 1 week"}),Object(v.jsx)(d.a.Option,{value:"30",children:"Last 1 Month"}),Object(v.jsx)(d.a.Option,{value:"365",children:"Last 1 Year"}),Object(v.jsx)(d.a.Option,{value:"custom",children:"custom"})]}),"custom"===r&&Object(v.jsx)(E,{value:g,onChange:e=>y(e)})]}),Object(v.jsxs)("div",{children:[Object(v.jsx)("h6",{children:"Select Type"}),Object(v.jsxs)(d.a,{value:N,onChange:e=>T(e),children:[Object(v.jsx)(d.a.Option,{value:"All",children:"All"}),Object(v.jsx)(d.a.Option,{value:"Income",children:"Income"}),Object(v.jsx)(d.a.Option,{value:"Expense",children:"Expense"})]}),"custom"===r&&Object(v.jsx)(E,{value:g,onChange:e=>y(e)})]}),Object(v.jsxs)("div",{className:"switch-icons",children:[Object(v.jsx)(u.a,{className:"mx-2 ".concat("table"===F?"active-icon":"inactive-icon"),onClick:()=>k("table")}),Object(v.jsx)(p.a,{className:"mx-2 ".concat("analytics"===F?"active-icon":"inactive-icon"),onClick:()=>k("analytics")})]}),Object(v.jsx)("div",{children:Object(v.jsx)("button",{className:"btn btn-primary",onClick:()=>t(!0),children:"Add New"})})]}),Object(v.jsx)("div",{className:"content",children:"table"===F?Object(v.jsx)(o.a,{columns:L,dataSource:n}):Object(v.jsx)(C,{allTransaction:n})}),Object(v.jsx)(b.a,{title:R?"Edit Transaction":"Add Transaction",open:e,onCancel:()=>t(!1),footer:!1,children:Object(v.jsxs)(x.a,{layout:"vertical",onFinish:async e=>{try{const c=JSON.parse(localStorage.getItem("user"));e.userid=c._id,s(!0),R?(await I.a.post("/api/v1/Transactions/edit-Transaction",{payload:{...e,userId:c.user._id},transactionsId:R._id}),s(!1),j.a.success("Transaction Updated Success")):(await I.a.post("/api/v1/Transactions/add-transaction",{...e,userid:c.user._id}),s(!1),j.a.success("Successfully added transaction")),t(!1),A(null)}catch(c){s(!1),j.a.error("failed to add transaction")}},initialValues:R,children:[Object(v.jsx)(x.a.Item,{label:"Amount",name:"amount",children:Object(v.jsx)(O.a,{type:"text"})}),Object(v.jsx)(x.a.Item,{label:"Type",name:"type",children:Object(v.jsxs)(d.a,{children:[Object(v.jsx)(d.a.Option,{value:"Income",children:"Income"}),Object(v.jsx)(d.a.Option,{value:"Expense",children:"Expense"})]})}),Object(v.jsx)(x.a.Item,{label:"Category",name:"category",children:Object(v.jsxs)(d.a,{children:[Object(v.jsx)(d.a.Option,{value:"Salary",children:"Salary"}),Object(v.jsx)(d.a.Option,{value:"Tip",children:"Tip"}),Object(v.jsx)(d.a.Option,{value:"Project",children:"Project"}),Object(v.jsx)(d.a.Option,{value:"Food",children:"Food"}),Object(v.jsx)(d.a.Option,{value:"Movie",children:"Movie"}),Object(v.jsx)(d.a.Option,{value:"Bills",children:"Bills"}),Object(v.jsx)(d.a.Option,{value:"Medical",children:"Medical"}),Object(v.jsx)(d.a.Option,{value:"Fee",children:"Fee"}),Object(v.jsx)(d.a.Option,{value:"Tax",children:"Tax"})]})}),Object(v.jsx)(x.a.Item,{label:"Date",name:"date",children:Object(v.jsx)(O.a,{type:"date"})}),Object(v.jsx)(x.a.Item,{label:"Refrence",name:"refrence",children:Object(v.jsx)(O.a,{type:"text"})}),Object(v.jsx)(x.a.Item,{label:"Description",name:"description",children:Object(v.jsx)(O.a,{type:"text"})}),Object(v.jsx)("div",{className:"d-flex justify-content-end",children:Object(v.jsxs)("button",{type:"submit",className:"btn btn-primary",children:[" ","SAVE"]})})]})})]})};var R=()=>{const e=Object(r.p)(),[t,c]=Object(a.useState)(!1);return Object(a.useEffect)((()=>{localStorage.getItem("user")&&e("/")}),[e]),Object(v.jsx)(v.Fragment,{children:Object(v.jsxs)("div",{className:"Register-page",children:[t&&Object(v.jsx)(S,{}),Object(v.jsxs)(x.a,{layout:"vertical",onFinish:async t=>{try{c(!0),await I.a.post("/api/v1/users/register",t),j.a.success("Registered Successfully"),c(!1),e("/login")}catch(a){c(!1),j.a.error("Something went wrong")}},children:[Object(v.jsx)("h1",{children:"Register Form"}),Object(v.jsx)(x.a.Item,{label:"Name",name:"name",children:Object(v.jsx)(O.a,{})}),Object(v.jsx)(x.a.Item,{label:"Email",name:"email",children:Object(v.jsx)(O.a,{type:"email"})}),Object(v.jsx)(x.a.Item,{label:"Password",name:"password",children:Object(v.jsx)(O.a,{type:"password"})}),Object(v.jsxs)("div",{className:"d-flex justify-content-between",children:[Object(v.jsx)(g.b,{to:"/login",children:"Already Registered ? Click here to login"}),Object(v.jsx)("button",{className:"btn btn-primary",children:"Register"})]})]})]})})};var A=()=>{const[e,t]=Object(a.useState)(!1),c=Object(r.p)();return Object(a.useEffect)((()=>{localStorage.getItem("user")&&c("/")}),[c]),Object(v.jsx)(v.Fragment,{children:Object(v.jsxs)("div",{className:"Register-page",children:[e&&Object(v.jsx)(S,{}),Object(v.jsxs)(x.a,{layout:"vertical",onFinish:async e=>{try{t(!0);const{data:a}=await I.a.post("/api/v1/users/login",e);t(!1),j.a.success("login successful"),localStorage.setItem("user",JSON.stringify({...a,password:""})),c("/")}catch(a){t(!1),j.a.error("Something went wrong")}},children:[Object(v.jsx)("h1",{children:"Login Form"}),Object(v.jsx)(x.a.Item,{label:"Email",name:"email",children:Object(v.jsx)(O.a,{type:"email"})}),Object(v.jsx)(x.a.Item,{label:"Password",name:"password",children:Object(v.jsx)(O.a,{type:"password"})}),Object(v.jsxs)("div",{className:"d-flex justify-content-between",children:[Object(v.jsx)(g.b,{to:"/Register",children:"Not a user ? Click here to Register"}),Object(v.jsx)("button",{className:"btn btn-primary",children:"Login"})]})]})]})})};function L(e){return localStorage.getItem("user")?e.children:Object(v.jsx)(r.a,{to:"/login"})}var M=function(){return Object(v.jsx)(v.Fragment,{children:Object(v.jsxs)(r.d,{children:[Object(v.jsx)(r.b,{path:"/",element:Object(v.jsx)(L,{children:Object(v.jsx)(k,{})})}),Object(v.jsx)(r.b,{path:"/Register",element:Object(v.jsx)(R,{})}),Object(v.jsx)(r.b,{path:"/Login",element:Object(v.jsx)(A,{})})]})})};var D=e=>{e&&e instanceof Function&&c.e(3).then(c.bind(null,206)).then((t=>{let{getCLS:c,getFID:a,getFCP:s,getLCP:n,getTTFB:l}=t;c(e),a(e),s(e),n(e),l(e)}))};l.a.createRoot(document.getElementById("root")).render(Object(v.jsx)(s.a.StrictMode,{children:Object(v.jsx)(g.a,{children:Object(v.jsx)(M,{})})})),D()}},[[184,1,2]]]);
//# sourceMappingURL=main.88585f60.chunk.js.map