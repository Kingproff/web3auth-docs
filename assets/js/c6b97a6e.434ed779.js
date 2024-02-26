"use strict";(self.webpackChunkweb3auth_docs=self.webpackChunkweb3auth_docs||[]).push([[1886],{98347:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>u,toc:()=>c});var a=t(85893),r=t(11151),s=t(74866),l=t(85162);const o={title:"Installing PnP Web Modal SDK",sidebar_label:"Install",displayed_sidebar:"sdk",description:"Installing Web3Auth PnP Web Modal SDK | Documentation - Web3Auth"},i=void 0,u={id:"sdk/pnp/web/modal/install",title:"Installing PnP Web Modal SDK",description:"Installing Web3Auth PnP Web Modal SDK | Documentation - Web3Auth",source:"@site/docs/sdk/pnp/web/modal/install.mdx",sourceDirName:"sdk/pnp/web/modal",slug:"/sdk/pnp/web/modal/install",permalink:"/docs/sdk/pnp/web/modal/install",draft:!1,unlisted:!1,editUrl:"https://github.com/web3auth/web3auth-docs/edit/master/docs/sdk/pnp/web/modal/install.mdx",tags:[],version:"current",frontMatter:{title:"Installing PnP Web Modal SDK",sidebar_label:"Install",displayed_sidebar:"sdk",description:"Installing Web3Auth PnP Web Modal SDK | Documentation - Web3Auth"},sidebar:"sdk",previous:{title:" Web3Auth PnP Web Modal SDK",permalink:"/docs/sdk/pnp/web/modal/"},next:{title:"Initialize",permalink:"/docs/sdk/pnp/web/modal/initialize"}},d={},c=[{value:"<code>@web3auth/modal</code>",id:"web3authmodal",level:2},{value:"Add <code>@web3auth/base</code> to your project",id:"add-web3authbase-to-your-project",level:3},{value:"Add <code>@web3auth/ethereum-provider</code> to your project",id:"add-web3authethereum-provider-to-your-project",level:3},{value:"Troubleshooting",id:"troubleshooting",level:2},{value:"Bundler Issues: Missing Dependencies",id:"bundler-issues-missing-dependencies",level:3}];function h(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h2,{id:"web3authmodal",children:(0,a.jsx)(n.a,{href:"https://npmjs.com/package/@web3auth/modal",children:(0,a.jsx)(n.code,{children:"@web3auth/modal"})})}),"\n",(0,a.jsxs)(s.Z,{groupId:"npm2yarn",children:[(0,a.jsx)(l.Z,{value:"npm",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"npm install --save @web3auth/modal\n"})})}),(0,a.jsx)(l.Z,{value:"yarn",label:"Yarn",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"yarn add @web3auth/modal\n"})})}),(0,a.jsx)(l.Z,{value:"pnpm",label:"pnpm",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"pnpm add @web3auth/modal\n"})})})]}),"\n",(0,a.jsxs)(n.h3,{id:"add-web3authbase-to-your-project",children:["Add ",(0,a.jsx)(n.code,{children:"@web3auth/base"})," to your project"]}),"\n",(0,a.jsxs)(s.Z,{groupId:"npm2yarn",children:[(0,a.jsx)(l.Z,{value:"npm",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"npm install --save @web3auth/base\n"})})}),(0,a.jsx)(l.Z,{value:"yarn",label:"Yarn",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"yarn add @web3auth/base\n"})})}),(0,a.jsx)(l.Z,{value:"pnpm",label:"pnpm",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"pnpm add @web3auth/base\n"})})})]}),"\n",(0,a.jsxs)(n.p,{children:["This package gives access to common types and interfaces for Web3Auth. This comes in handy by providing you a standard way of importing the values you\nneed to work with the SDKs. We highly recommend using it while working with ",(0,a.jsx)(n.code,{children:"Typescript"}),"."]}),"\n",(0,a.jsxs)(n.h3,{id:"add-web3authethereum-provider-to-your-project",children:["Add ",(0,a.jsx)(n.code,{children:"@web3auth/ethereum-provider"})," to your project"]}),"\n",(0,a.jsxs)(s.Z,{groupId:"npm2yarn",children:[(0,a.jsx)(l.Z,{value:"npm",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"npm install --save @web3auth/ethereum-provider\n"})})}),(0,a.jsx)(l.Z,{value:"yarn",label:"Yarn",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"yarn add @web3auth/ethereum-provider\n"})})}),(0,a.jsx)(l.Z,{value:"pnpm",label:"pnpm",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"pnpm add @web3auth/ethereum-provider\n"})})})]}),"\n",(0,a.jsxs)(n.p,{children:["This package gives access to ",(0,a.jsx)(n.code,{children:"EthereumPrivateKeyProvider"})," class, which accepts a secp251k1 private key and returns EIP1193 compatible provider.\nThe EIP1193 provider can be used with various wallet sdks. This reference guide demonstrates use of Web3Auth with EVM compatible\nblockchains. To use Web3Auth with different blockchain ecosystems like Solana, XRPL, and others please use their respective providers."]}),"\n",(0,a.jsx)(n.h2,{id:"troubleshooting",children:"Troubleshooting"}),"\n",(0,a.jsx)(n.h3,{id:"bundler-issues-missing-dependencies",children:"Bundler Issues: Missing Dependencies"}),"\n",(0,a.jsx)(n.p,{children:"You might face issues mentioning that certain dependencies are missing within the browser environment. These are node dependencies that need to be\npolyfilled in your application, to enable Web3Auth functionalities. Furthermore, your bundler needs to be reconfigured to use them while building the\napp. We have created guides for different bundlers to help you with this issue:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["Please check out our ",(0,a.jsx)(n.strong,{children:(0,a.jsx)(n.a,{href:"/troubleshooting/webpack-issues",children:"Webpack 5 Troubleshooting Guide"})})]}),"\n",(0,a.jsxs)(n.li,{children:["Please check out our ",(0,a.jsx)(n.strong,{children:(0,a.jsx)(n.a,{href:"/troubleshooting/vite-issues",children:"Vite Troubleshooting Guide"})})]}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},85162:(e,n,t)=>{t.d(n,{Z:()=>l});t(67294);var a=t(36905);const r={tabItem:"tabItem_Ymn6"};var s=t(85893);function l(e){let{children:n,hidden:t,className:l}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,a.Z)(r.tabItem,l),hidden:t,children:n})}},74866:(e,n,t)=>{t.d(n,{Z:()=>y});var a=t(67294),r=t(36905),s=t(12466),l=t(16550),o=t(20469),i=t(91980),u=t(67392),d=t(50012);function c(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,a.useMemo)((()=>{const e=n??function(e){return c(e).map((e=>{let{props:{value:n,label:t,attributes:a,default:r}}=e;return{value:n,label:t,attributes:a,default:r}}))}(t);return function(e){const n=(0,u.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function b(e){let{queryString:n=!1,groupId:t}=e;const r=(0,l.k6)(),s=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,i._X)(s),(0,a.useCallback)((e=>{if(!s)return;const n=new URLSearchParams(r.location.search);n.set(s,e),r.replace({...r.location,search:n.toString()})}),[s,r])]}function m(e){const{defaultValue:n,queryString:t=!1,groupId:r}=e,s=h(e),[l,i]=(0,a.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const a=t.find((e=>e.default))??t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:n,tabValues:s}))),[u,c]=b({queryString:t,groupId:r}),[m,g]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[r,s]=(0,d.Nk)(t);return[r,(0,a.useCallback)((e=>{t&&s.set(e)}),[t,s])]}({groupId:r}),v=(()=>{const e=u??m;return p({value:e,tabValues:s})?e:null})();(0,o.Z)((()=>{v&&i(v)}),[v]);return{selectedValue:l,selectValue:(0,a.useCallback)((e=>{if(!p({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);i(e),c(e),g(e)}),[c,g,s]),tabValues:s}}var g=t(72389);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var f=t(85893);function x(e){let{className:n,block:t,selectedValue:a,selectValue:l,tabValues:o}=e;const i=[],{blockElementScrollPositionUntilNextRender:u}=(0,s.o5)(),d=e=>{const n=e.currentTarget,t=i.indexOf(n),r=o[t].value;r!==a&&(u(n),l(r))},c=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=i.indexOf(e.currentTarget)+1;n=i[t]??i[0];break}case"ArrowLeft":{const t=i.indexOf(e.currentTarget)-1;n=i[t]??i[i.length-1];break}}n?.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":t},n),children:o.map((e=>{let{value:n,label:t,attributes:s}=e;return(0,f.jsx)("li",{role:"tab",tabIndex:a===n?0:-1,"aria-selected":a===n,ref:e=>i.push(e),onKeyDown:c,onClick:d,...s,className:(0,r.Z)("tabs__item",v.tabItem,s?.className,{"tabs__item--active":a===n}),children:t??n},n)}))})}function j(e){let{lazy:n,children:t,selectedValue:r}=e;const s=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=s.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:s.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==r})))})}function w(e){const n=m(e);return(0,f.jsxs)("div",{className:(0,r.Z)("tabs-container",v.tabList),children:[(0,f.jsx)(x,{...e,...n}),(0,f.jsx)(j,{...e,...n})]})}function y(e){const n=(0,g.Z)();return(0,f.jsx)(w,{...e,children:c(e.children)},String(n))}},11151:(e,n,t)=>{t.d(n,{Z:()=>o,a:()=>l});var a=t(67294);const r={},s=a.createContext(r);function l(e){const n=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),a.createElement(s.Provider,{value:n},e.children)}}}]);