"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[152],{6301:(e,s,t)=>{t.d(s,{A:()=>a});const a={dots:!0,infinite:!0,speed:300,slidesToShow:4,slidesToScroll:1,centerPadding:"30px",responsive:[{breakpoint:1024,settings:{slidesToShow:3,slidesToScroll:1}},{breakpoint:768,settings:{slidesToShow:2,slidesToScroll:1}},{breakpoint:640,settings:{slidesToShow:1,slidesToScroll:1,centerPadding:"0px"}}]}},3152:(e,s,t)=>{t.r(s),t.d(s,{default:()=>b});var a=t(5043),r=t(6213),i=t(7353),l=t(3193),n=t(9190),o=t(3360),c=t(1787),d=t(1906),x=t(7392),h=t(9484),m=t(7805),j=t(9662),p=t(579);const g=(0,j.A)((0,p.jsx)("path",{d:"m10 17 5-5-5-5z"}),"ArrowRight");var u=t(906),f=t(3641),v=t(2382),w=t(6301);function b(){const[e,s]=(0,a.useState)([]),[t,j]=(0,a.useState)(1),[b,N]=(0,a.useState)(!0),[A,k]=(0,a.useState)(""),[S,z]=(0,a.useState)(""),[M,T]=(0,a.useState)(!1);(0,a.useEffect)((()=>{(async e=>{try{T(!0);const a=e||9,i=(await r.A.get(`http://localhost:3001/api/quiz/get?page=${t}&limit=${a}&search=${S}`)).data.data;s((e=>1===t?i:[...e,...i])),i.length<a&&N(!1)}catch(a){console.error("Error fetching items:",a)}finally{T(!1)}})(9)}),[S,t]);const V=()=>{j(1),s([]),z(A)};return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsxs)("div",{className:"flex gap-6 justify-between bg-white pr-5",children:[(0,p.jsxs)("div",{className:"flex items-center gap-3 border-none p-5",children:[(0,p.jsx)(i.A,{sx:{"& > :not(style)":{m:1}},children:(0,p.jsxs)(l.A,{variant:"standard",children:[(0,p.jsx)(n.A,{htmlFor:"input-with-icon-adornment",children:"Search Quiz"}),(0,p.jsx)(o.A,{value:A,onChange:e=>k(e.target.value),onKeyUp:e=>{"Enter"===e.key&&V()},id:"input-with-icon-adornment",startAdornment:(0,p.jsx)(c.A,{position:"start",children:(0,p.jsx)(h.A,{})})})]})}),(0,p.jsx)(d.A,{variant:"contained",color:"primary",sx:{color:"#f1f1f1",fontWeight:"bold"},onClick:V,children:"Search"})]}),(0,p.jsx)("div",{className:"items-center flex justify-between",children:(0,p.jsx)("div",{children:(0,p.jsx)(x.A,{children:(0,p.jsx)(m.A,{})})})})]}),(0,p.jsxs)("section",{className:"bg-gray-100 px-10 py-8 overflow-hidden",children:[(0,p.jsx)(v.A,{centerMode:!1,...w.A,className:"",children:e&&e.length>0?e.map(((e,s)=>(0,p.jsx)("div",{className:"max-w-fit",children:(0,p.jsxs)("article",{className:"border w-64 rounded-lg shadow-md bg-white p-5 flex flex-col justify-between leading-normal transition-transform transform ",children:[(0,p.jsx)("img",{src:"https://media.istockphoto.com/id/1409329028/vector/no-picture-available-placeholder-thumbnail-icon-illustration-design.jpg?s=612x612&w=0&k=20&c=_zOuJu755g2eEUioiOUdz_mHKJQJn-tDgIAhQzyeKUQ=",alt:"Qualcomm",className:"h-28 w-full object-cover rounded-t-lg"}),(0,p.jsxs)("div",{className:"pt-3",children:[e.isAvailable?(0,p.jsx)(p.Fragment,{children:(0,p.jsxs)(u.N_,{to:"/user/attempt/"+e._id,className:"text-sm text-gray-600 flex items-center mb-2",children:["Attempt ",(0,p.jsx)(g,{})]})}):(0,p.jsxs)("p",{className:"text-sm text-gray-600 flex items-center mb-2",children:[(0,p.jsx)("svg",{className:"fill-current text-gray-500 w-4 h-4 mr-2",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",children:(0,p.jsx)("path",{d:"M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z"})}),"Locked"]}),(0,p.jsx)(u.N_,{href:"#",className:"text-gray-900 font-bold text-sm mb-2 hover:text-indigo-600 inline-block",children:e.title}),(0,p.jsx)("p",{className:"text-gray-700 text-xs h-20 overflow-x-hidden overflow-y-auto",children:e.description||"No Description "}),(0,p.jsxs)("small",{className:"text-xs",children:["Creator : ",e.creator.name]})]})]})},s))):(0,p.jsx)(p.Fragment,{})}),M&&(0,p.jsx)(f.A,{})]}),(0,p.jsxs)("section",{className:"bg-gray-100 px-10 py-8 overflow-hidden",children:[(0,p.jsxs)(v.A,{centerMode:!1,...w.A,className:"",children:[(0,p.jsx)(y,{}),(0,p.jsx)(y,{}),(0,p.jsx)(y,{}),(0,p.jsx)(y,{}),(0,p.jsx)(y,{}),(0,p.jsx)(y,{})]}),M&&(0,p.jsx)(f.A,{})]}),(0,p.jsxs)("section",{className:"bg-gray-100 px-10 py-8 overflow-hidden",children:[(0,p.jsxs)(v.A,{centerMode:!1,...w.A,className:"",children:[(0,p.jsx)(y,{}),(0,p.jsx)(y,{}),(0,p.jsx)(y,{}),(0,p.jsx)(y,{}),(0,p.jsx)(y,{}),(0,p.jsx)(y,{})]}),M&&(0,p.jsx)(f.A,{})]}),(0,p.jsxs)("section",{className:"bg-gray-100 px-10 py-8 overflow-hidden",children:[(0,p.jsxs)(v.A,{centerMode:!1,...w.A,className:"",children:[(0,p.jsx)(y,{}),(0,p.jsx)(y,{}),(0,p.jsx)(y,{}),(0,p.jsx)(y,{}),(0,p.jsx)(y,{}),(0,p.jsx)(y,{})]}),M&&(0,p.jsx)(f.A,{})]})]})}const y=()=>(0,p.jsxs)("article",{className:"border rounded-lg shadow-md bg-white p-5 flex flex-col justify-between leading-normal transition-transform transform ",children:[(0,p.jsx)("img",{src:"https://cxotoday.com/wp-content/uploads/2023/02/qualcomm.jpeg",alt:"Qualcomm",className:"h-28 w-full object-cover rounded-t-lg"}),(0,p.jsxs)("div",{className:"pt-3",children:[(0,p.jsxs)("p",{className:"text-sm text-gray-600 flex items-center mb-2",children:[(0,p.jsx)("svg",{className:"fill-current text-gray-500 w-4 h-4 mr-2",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",children:(0,p.jsx)("path",{d:"M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z"})}),"Locked"]}),(0,p.jsx)(u.N_,{href:"#",className:"text-gray-900 font-bold text-sm mb-2 hover:text-indigo-600 inline-block",children:"Can coffee make you a better developer?"}),(0,p.jsx)("p",{className:"text-gray-700 text-xs",children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil."})]})]})}}]);
//# sourceMappingURL=152.58285bce.chunk.js.map