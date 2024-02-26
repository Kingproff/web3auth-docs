"use strict";(self.webpackChunkweb3auth_docs=self.webpackChunkweb3auth_docs||[]).push([[87999],{49915:(e,t,i)=>{i.d(t,{ZP:()=>r});var n=i(85893),o=i(11151);function s(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,o.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:"Let's look at the general authentication flow at Web3Auth."}),"\n",(0,n.jsx)(t.p,{children:"When a user logs in with Web3Auth, a user's account can be in two states:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Account Without MFA"}),": When the User logs in with only social login and key is secured by Web3Auth network."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Account With MFA"}),": When the User enables MFA by adding other shares like password, backup share, device share, etc., to their existing account."]}),"\n"]}),"\n",(0,n.jsxs)(t.admonition,{title:"warning",type:"warning",children:[(0,n.jsxs)(t.p,{children:["This SDK only works for users who have ",(0,n.jsx)(t.strong,{children:"not enabled MFA"}),"."]}),(0,n.jsxs)(t.p,{children:["For MFA enabled users, you'll see ",(0,n.jsx)(t.code,{children:'Error("User has already enabled mfa, please use the Web3Auth PnP Web or Mobile SDKs for login with mfa");'})]})]}),"\n",(0,n.jsx)(t.h3,{id:"without-openlogin-redirection-flow",children:"Without Openlogin Redirection Flow"}),"\n",(0,n.jsxs)(t.p,{children:["By default, to reconstruct key in both states, Web3Auth SDKs redirects the user to ",(0,n.jsx)(t.code,{children:"http://app.openlogin.com"}),". Where all the computation to\nreconstruct the key is done. The advantage of this approach is that it makes it easy for applications to integrate web3auth SDK without having to\nworry about the key reconstruction process. But sometimes, applications want to reconstruct the key in their application context, where the\nauthentication flow described can be used with this SDK."]}),"\n",(0,n.jsxs)(t.h2,{id:"create-custom-auth-verifier",children:["Create ",(0,n.jsx)(t.code,{children:"Custom Auth"})," Verifier"]}),"\n",(0,n.jsxs)(t.p,{children:["Once you click on the ",(0,n.jsx)(t.code,{children:"Create Verifier"})," button on Web3Auth Dashboard, you'll see a toggle similar to these, where you can create a custom verifier for\nyour use case."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Web3Auth Plug and Play Login Modal",src:i(43960).Z+"",width:"1152",height:"648"})}),"\n",(0,n.jsxs)(t.p,{children:["Visit ",(0,n.jsx)(t.a,{href:"/auth-provider-setup/byo-jwt-providers#set-up-custom-jwt-verifier",children:"Auth Provider Setup"})," to learn more about creating custom verifiers."]}),"\n",(0,n.jsx)(t.h2,{id:"filled-custom-jwt-verifier",children:"Filled Custom JWT Verifier"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Custom JSON Web Token Provider on Web3Auth Dashboard",src:i(51e3).Z+"",width:"13008",height:"11568"})}),"\n",(0,n.jsx)(t.admonition,{type:"note",children:(0,n.jsx)(t.p,{children:"These verifier details will be used in the next step."})})]})}function r(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(s,{...e})}):s(e)}},98904:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>h,contentTitle:()=>a,default:()=>l,frontMatter:()=>r,metadata:()=>c,toc:()=>d});var n=i(85893),o=i(11151),s=i(49915);const r={title:"Authentication in Core Kit SFA Web SDK",sidebar_label:"Authentication",displayed_sidebar:"sdk",description:"Web3Auth Core Kit Single Factor Auth Web SDK - Authentication | Documentation - Web3Auth"},a=void 0,c={id:"sdk/core-kit/sfa-web/authentication",title:"Authentication in Core Kit SFA Web SDK",description:"Web3Auth Core Kit Single Factor Auth Web SDK - Authentication | Documentation - Web3Auth",source:"@site/docs/sdk/core-kit/sfa-web/authentication.mdx",sourceDirName:"sdk/core-kit/sfa-web",slug:"/sdk/core-kit/sfa-web/authentication",permalink:"/docs/sdk/core-kit/sfa-web/authentication",draft:!1,unlisted:!1,editUrl:"https://github.com/web3auth/web3auth-docs/edit/master/docs/sdk/core-kit/sfa-web/authentication.mdx",tags:[],version:"current",frontMatter:{title:"Authentication in Core Kit SFA Web SDK",sidebar_label:"Authentication",displayed_sidebar:"sdk",description:"Web3Auth Core Kit Single Factor Auth Web SDK - Authentication | Documentation - Web3Auth"},sidebar:"sdk",previous:{title:"Initialize",permalink:"/docs/sdk/core-kit/sfa-web/initialize"},next:{title:"Usage",permalink:"/docs/sdk/core-kit/sfa-web/usage"}},h={},d=[];function u(e){return(0,n.jsx)(s.ZP,{})}function l(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(u,{...e})}):u()}},43960:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/create-verifiers-83ca29513a3deccb7a586d13cb154d14.gif"},51e3:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/custom-jsonwebtoken-verifier-ab82e86043a997b0f4fd04c3ce497315.png"},11151:(e,t,i)=>{i.d(t,{Z:()=>a,a:()=>r});var n=i(67294);const o={},s=n.createContext(o);function r(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);