"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[362],{7606:(e,s,t)=>{t.d(s,{A:()=>d});var n=t(5043),o=t(4109),r=t(5721),c=t(1322),i=t(7392),a=t(1698),l=t(906),x=t(6213),p=t(3003),h=(t(9704),t(3333)),u=t(579);function d(e){let{open:s,setOpen:t,menuItems:d}=e;const[m,f]=(0,n.useState)(!1),j=(0,p.wA)();return(0,u.jsxs)(o.Ay,{variant:"permanent",sx:{width:m?240:60,flexShrink:0,"& .MuiDrawer-paper":{marginTop:"89px",borderRadius:"10px",marginBottom:"15px",marginLeft:"20px",width:m?240:60,transition:"width 0.3s",backgroundColor:"#fff",borderRight:"1px solid #e0e0e0"}},open:!0,onMouseEnter:()=>f(!0),onMouseLeave:()=>f(!1),children:[(0,u.jsx)(r.A,{sx:{margin:"0px 0 0 0"},children:d.map(((e,s)=>(0,u.jsx)(l.N_,{to:e.to,children:(0,u.jsxs)(c.Ay,{className:"cursor-pointer",sx:{cursor:"pointer"},onClick:()=>console.log(`Navigating to ${e.text}`),children:[(0,u.jsx)("span",{className:"",children:(0,u.jsx)(i.A,{children:e.icon})}),m&&(0,u.jsx)("span",{className:"text-nowrap  text-md pl-5",children:e.text})]},s)},s)))}),(0,u.jsxs)(c.Ay,{sx:{cursor:"pointer"},onClick:async()=>{try{await x.A.post("http://localhost:3001/auth/logout",{},{withCredentials:!0}),j((0,h.ri)())}catch(e){console.log(e)}},children:[(0,u.jsx)(i.A,{children:(0,u.jsx)(a.A,{})}),m&&(0,u.jsx)("span",{className:"text-sm pl-5",children:"Logout"})]})]})}},9362:(e,s,t)=>{t.r(s),t.d(s,{default:()=>u});var n=t(5043),o=t(9275),r=t(5278),c=t(9662),i=t(579);const a=(0,c.A)((0,i.jsx)("path",{d:"M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2M1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2"}),"ShoppingCart");var l=t(1989),x=t(9972),p=t(9893),h=t(7606);function u(e){let{children:s}=e;const[t,c]=(0,n.useState)(!0),u=[{to:"/user/",text:"Home",icon:(0,i.jsx)(o.A,{})},{to:"/user/course",text:"Courses",icon:(0,i.jsx)(r.A,{})},{to:"/user/purchases",text:"My Purchases",icon:(0,i.jsx)(a,{})},{to:"/user/quiz",text:"Quizes",icon:(0,i.jsx)(l.A,{})},{to:"/user/results",text:"Results",icon:(0,i.jsx)(x.A,{})},{to:"/user/profile",text:"Profile",icon:(0,i.jsx)(p.A,{})}];return(0,i.jsxs)("section",{className:"h-screen bg-[#f4f4f4]",children:[(0,i.jsx)("section",{className:"h-[70px] relative px-5 py-2 top-0  ",style:{zIndex:"2000"},children:(0,i.jsx)("nav",{className:"bg-[#fff] rounded-[15px] text-white flex items-center px-6 md:px-5 justify-between w-[calc(100%-40px)]  h-[70px] fixed shadow-md z-50",children:(0,i.jsx)("img",{src:"/assets/logo.png",className:"h-10",alt:""})})}),(0,i.jsx)(h.A,{menuItems:u,open:t,setOpen:c}),(0,i.jsx)("main",{className:"pl-[90px] pr-5 bg-[#f4f4f4] font-['Poppins'] text-lg py-5",children:s})]})}}}]);
//# sourceMappingURL=362.967dba03.chunk.js.map