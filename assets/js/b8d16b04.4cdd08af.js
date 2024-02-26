"use strict";(self.webpackChunkweb3auth_docs=self.webpackChunkweb3auth_docs||[]).push([[36461],{61252:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>r,toc:()=>d});var i=n(85893),s=n(11151);const o={title:"Web3Auth PnP React Native SDK",image:"images/docs-meta-cards/sdk-reference-card.png",displayed_sidebar:"sdk",description:"Web3Auth PnP React Native SDK | Documentation - Web3Auth"},a=void 0,r={id:"sdk/pnp/react-native/react-native",title:"Web3Auth PnP React Native SDK",description:"Web3Auth PnP React Native SDK | Documentation - Web3Auth",source:"@site/docs/sdk/pnp/react-native/react-native.mdx",sourceDirName:"sdk/pnp/react-native",slug:"/sdk/pnp/react-native/",permalink:"/docs/sdk/pnp/react-native/",draft:!1,unlisted:!1,editUrl:"https://github.com/web3auth/web3auth-docs/edit/master/docs/sdk/pnp/react-native/react-native.mdx",tags:[],version:"current",frontMatter:{title:"Web3Auth PnP React Native SDK",image:"images/docs-meta-cards/sdk-reference-card.png",displayed_sidebar:"sdk",description:"Web3Auth PnP React Native SDK | Documentation - Web3Auth"},sidebar:"sdk",previous:{title:"dApp Share",permalink:"/docs/sdk/pnp/ios/dapp-share"},next:{title:"Install",permalink:"/docs/sdk/pnp/react-native/install"}},c={},d=[{value:"This Documentation is based on the <code>5.1.0</code> SDK Version.",id:"this-documentation-is-based-on-the-510-sdk-version",level:4},{value:"Requirements",id:"requirements",level:3},{value:"Resources",id:"resources",level:2}];function l(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",ul:"ul",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(t.p,{children:["For using Web3Auth in React Native, Web3Auth provides an ",(0,i.jsx)(t.a,{href:"https://github.com/Web3Auth/web3auth-react-native-sdk",children:"React Native SDK"}),", written in\nTypeScript. The Web3Auth React Native SDK is a client-side library you can use with your React Native app to authenticate users using Web3Auth. It\nreturns a private key generated in a non-custodial way on successful authentication of the user. This authentication can be achieved by using any of\nthe social logins Web3Auth provides or using a custom authentication flow of your choice."]}),"\n",(0,i.jsxs)(t.h4,{id:"this-documentation-is-based-on-the-510-sdk-version",children:["This Documentation is based on the ",(0,i.jsx)(t.code,{children:"5.1.0"})," SDK Version."]}),"\n",(0,i.jsx)(t.h3,{id:"requirements",children:"Requirements"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"React Native Release 0.71 and above (for Bare React Native Workflow)"}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"Expo SDK 48 and above (for Expo Managed Workflow)"}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"iOS Platform Target Version 14 and above"}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"Android Target SDK Version 31 and above"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(t.admonition,{type:"warning",children:[(0,i.jsx)(t.p,{children:'The Web3Auth React Native PnP SDK is not compatible with "Expo Go" app. It is compatible only with Custom Dev Client and EAS builds. Please refer to\nthe troubleshooting section for more on this.'}),(0,i.jsxs)(t.p,{children:["Please run ",(0,i.jsx)(t.code,{children:"npx expo prebuild"})," to generate native code based on the version of expo a project has installed, before moving forward."]})]}),"\n",(0,i.jsx)(t.h2,{id:"resources",children:"Resources"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.a,{href:"/quick-start?product=PNP&sdk=PNP_REACT_NATIVE&framework=IOS&stepIndex=0",children:"Quick Start"}),": Get Started with an easy to follow integration of Web3Auth"]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.a,{href:"/examples?product=Plug+and+Play&sdk=Plug+and+Play+React+Native+SDK",children:"Example Applications"}),": Explore our example applications and try the SDK\nyourself."]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.a,{href:"/troubleshooting",children:"Troubleshooting"}),": Find quick solutions to common issues faced by developers."]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.a,{href:"https://github.com/Web3Auth/web3auth-react-native-sdk/",children:"Source Code"}),": Web3Auth is open sourced. You can find the source code on our GitHub\nrepository."]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.a,{href:"https://web3auth.io/community/c/help-pnp/pnp-rn/19",children:"Community Support Portal"}),": Join our community to get support from our team and other\ndevelopers."]}),"\n"]}),"\n"]})]})}function u(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>r,a:()=>a});var i=n(67294);const s={},o=i.createContext(s);function a(e){const t=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),i.createElement(o.Provider,{value:t},e.children)}}}]);