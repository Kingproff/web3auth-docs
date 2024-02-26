"use strict";(self.webpackChunkweb3auth_docs=self.webpackChunkweb3auth_docs||[]).push([[68136],{58406:(e,a,r)=>{r.r(a),r.d(a,{assets:()=>c,contentTitle:()=>d,default:()=>p,frontMatter:()=>i,metadata:()=>o,toc:()=>h});var s=r(85893),n=r(11151),t=r(74866),l=r(85162);const i={title:"Installing tKey JS SDK",sidebar_label:"Install",displayed_sidebar:"sdk",description:"Web3Auth Core Kit tKey JS SDK - Install  | Documentation - Web3Auth"},d=void 0,o={id:"sdk/core-kit/tkey/install",title:"Installing tKey JS SDK",description:"Web3Auth Core Kit tKey JS SDK - Install  | Documentation - Web3Auth",source:"@site/docs/sdk/core-kit/tkey/install.mdx",sourceDirName:"sdk/core-kit/tkey",slug:"/sdk/core-kit/tkey/install",permalink:"/docs/sdk/core-kit/tkey/install",draft:!1,unlisted:!1,editUrl:"https://github.com/web3auth/web3auth-docs/edit/master/docs/sdk/core-kit/tkey/install.mdx",tags:[],version:"current",frontMatter:{title:"Installing tKey JS SDK",sidebar_label:"Install",displayed_sidebar:"sdk",description:"Web3Auth Core Kit tKey JS SDK - Install  | Documentation - Web3Auth"},sidebar:"sdk",previous:{title:"Web3Auth tKey JS SDK",permalink:"/docs/sdk/core-kit/tkey/"},next:{title:"Initialize",permalink:"/docs/sdk/core-kit/tkey/initialize"}},c={},h=[{value:"Base tKey Package",id:"base-tkey-package",level:2},{value:"<code>@tkey/core</code>",id:"tkeycore",level:4},{value:"Adding Service Provider",id:"adding-service-provider",level:2},{value:"<code>@tkey/service-provider-sfa</code>",id:"tkeyservice-provider-sfa",level:4},{value:"Adding Storage Layer",id:"adding-storage-layer",level:2},{value:"<code>@tkey/storage-layer-torus</code>",id:"tkeystorage-layer-torus",level:4},{value:"Storage Modules (Share B)",id:"storage-modules-share-b",level:2},{value:"Web Storage Module",id:"web-storage-module",level:3},{value:"<code>@tkey/web-storage</code>",id:"tkeyweb-storage",level:4},{value:"React Native Storage Module",id:"react-native-storage-module",level:3},{value:"<code>@tkey/react-native-storage</code>",id:"tkeyreact-native-storage",level:4},{value:"Chrome Storage Module",id:"chrome-storage-module",level:3},{value:"<code>@tkey/chrome-storage</code>",id:"tkeychrome-storage",level:4},{value:"Recovery Modules (Share C)",id:"recovery-modules-share-c",level:2},{value:"Security Questions Module",id:"security-questions-module",level:3},{value:"<code>@tkey/security-questions</code>",id:"tkeysecurity-questions",level:4},{value:"Share Transfer Module",id:"share-transfer-module",level:3},{value:"<code>@tkey/share-transfer</code>",id:"tkeyshare-transfer",level:4},{value:"Share Serialization Module",id:"share-serialization-module",level:3},{value:"<code>@tkey/share-serialization</code>",id:"tkeyshare-serialization",level:4},{value:"Additional Modules",id:"additional-modules",level:2},{value:"Seed Phrase Module",id:"seed-phrase-module",level:3},{value:"<code>@tkey/seed-phrase</code>",id:"tkeyseed-phrase",level:4},{value:"Private Keys Module",id:"private-keys-module",level:3},{value:"<code>@tkey/private-keys</code>",id:"tkeyprivate-keys",level:4},{value:"Troubleshooting",id:"troubleshooting",level:2},{value:"Bundler Issues: Missing Dependencies",id:"bundler-issues-missing-dependencies",level:3}];function u(e){const a={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,n.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(a.p,{children:"The tKey SDK contains multiple packages are needed to enable different functionalities of the tKey SDK. You can choose the packages you want to\ninstall according to the functionalities you want to enable in your application. In this doc we have highlighted all of the packages and their\nfunctionalities."}),"\n",(0,s.jsx)(a.h2,{id:"base-tkey-package",children:"Base tKey Package"}),"\n",(0,s.jsxs)(a.p,{children:["While installing Web3Auth Core Kit tKey SDK, we recommend installing the ",(0,s.jsx)(a.code,{children:"tkey/core"})," SDK. This package contains all the needed core functionalities of\nthe ",(0,s.jsx)(a.code,{children:"tkey"})," SDK."]}),"\n",(0,s.jsx)(a.h4,{id:"tkeycore",children:(0,s.jsx)(a.a,{href:"https://www.npmjs.com/package/@tkey/core",children:(0,s.jsx)(a.code,{children:"@tkey/core"})})}),"\n",(0,s.jsxs)(t.Z,{groupId:"npm2yarn",children:[(0,s.jsx)(l.Z,{value:"npm",children:(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-bash",children:"npm install --save @tkey/core\n"})})}),(0,s.jsx)(l.Z,{value:"yarn",label:"Yarn",children:(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-bash",children:"yarn add @tkey/core\n"})})}),(0,s.jsx)(l.Z,{value:"pnpm",label:"pnpm",children:(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-bash",children:"pnpm add @tkey/core\n"})})})]}),"\n",(0,s.jsx)(a.h2,{id:"adding-service-provider",children:"Adding Service Provider"}),"\n",(0,s.jsxs)(a.p,{children:["The Service Provider helps with the authentication and identification of the user using their social logins and giving the user an easy way of account\nretrieval. We have made a custom service provider utilizing the ",(0,s.jsx)(a.a,{href:"/sdk/core-kit/sfa-web/",children:"Single Factor Auth Web SDK"})," as a service provider within the\ntKey SDK."]}),"\n",(0,s.jsx)(a.h4,{id:"tkeyservice-provider-sfa",children:(0,s.jsx)(a.a,{href:"https://www.npmjs.com/package/@tkey/service-provider-sfa",children:(0,s.jsx)(a.code,{children:"@tkey/service-provider-sfa"})})}),"\n",(0,s.jsxs)(t.Z,{groupId:"npm2yarn",children:[(0,s.jsx)(l.Z,{value:"npm",children:(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-bash",children:"npm install --save @tkey/service-provider-sfa\n"})})}),(0,s.jsx)(l.Z,{value:"yarn",label:"Yarn",children:(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-bash",children:"yarn add @tkey/service-provider-sfa\n"})})}),(0,s.jsx)(l.Z,{value:"pnpm",label:"pnpm",children:(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-bash",children:"pnpm add @tkey/service-provider-sfa\n"})})})]}),"\n",(0,s.jsx)(a.h2,{id:"adding-storage-layer",children:"Adding Storage Layer"}),"\n",(0,s.jsx)(a.p,{children:"The Storage Layer refers to the Metadata Storage, which is used to store the metadata information of the shares generated by the tKey SDK."}),"\n",(0,s.jsx)(a.h4,{id:"tkeystorage-layer-torus",children:(0,s.jsx)(a.a,{href:"https://www.npmjs.com/package/@tkey/storage-layer-torus",children:(0,s.jsx)(a.code,{children:"@tkey/storage-layer-torus"})})}),"\n",(0,s.jsxs)(t.Z,{groupId:"npm2yarn",children:[(0,s.jsx)(l.Z,{value:"npm",children:(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-bash",children:"npm install --save @tkey/storage-layer-torus\n"})})}),(0,s.jsx)(l.Z,{value:"yarn",label:"Yarn",children:(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-bash",children:"yarn add @tkey/storage-layer-torus\n"})})}),(0,s.jsx)(l.Z,{value:"pnpm",label:"pnpm",children:(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-bash",children:"pnpm add @tkey/storage-layer-torus\n"})})})]}),"\n",(0,s.jsx)(a.h1,{id:"modules",children:"Modules"}),"\n",(0,s.jsx)(a.p,{children:"Modules extend the tKey SDK's capability to provide additional functionality for managing your tKey shares. Out of the multiple modules available, you\ncan choose the module you want to include in your implementation. Here is the list of available modules:"}),"\n",(0,s.jsx)(a.h2,{id:"storage-modules-share-b",children:"Storage Modules (Share B)"}),"\n",(0,s.jsx)(a.p,{children:"Storage Modules are used to store the tKey shares in the user's device storage. You can choose any of the following modules:"}),"\n",(0,s.jsx)(a.h3,{id:"web-storage-module",children:"Web Storage Module"}),"\n",(0,s.jsx)(a.p,{children:"Adds the capability to add or remove a share from the local and file storage."}),"\n",(0,s.jsx)(a.h4,{id:"tkeyweb-storage",children:(0,s.jsx)(a.a,{href:"https://www.npmjs.com/package/@tkey/web-storage",children:(0,s.jsx)(a.code,{children:"@tkey/web-storage"})})}),"\n",(0,s.jsxs)(t.Z,{groupId:"npm2yarn",children:[(0,s.jsx)(l.Z,{value:"npm",children:(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-bash",children:"npm install --save @tkey/web-storage\n"})})}),(0,s.jsx)(l.Z,{value:"yarn",label:"Yarn",children:(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-bash",children:"yarn add @tkey/web-storage\n"})})}),(0,s.jsx)(l.Z,{value:"pnpm",label:"pnpm",children:(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-bash",children:"pnpm add @tkey/web-storage\n"})})})]}),"\n",(0,s.jsx)(a.h3,{id:"react-native-storage-module",children:"React Native Storage Module"}),"\n",(0,s.jsx)(a.p,{children:"Adds the capability to add or remove a share from the React Native Encrypted Store/ Expo Secure Store."}),"\n",(0,s.jsx)(a.h4,{id:"tkeyreact-native-storage",children:(0,s.jsx)(a.a,{href:"https://www.npmjs.com/package/@tkey/react-native-storage",children:(0,s.jsx)(a.code,{children:"@tkey/react-native-storage"})})}),"\n",(0,s.jsxs)(t.Z,{groupId:"npm2yarn",children:[(0,s.jsx)(l.Z,{value:"npm",children:(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-bash",children:"npm install --save @tkey/react-native-storage\n"})})}),(0,s.jsx)(l.Z,{value:"yarn",label:"Yarn",children:(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-bash",children:"yarn add @tkey/react-native-storage\n"})})}),(0,s.jsx)(l.Z,{value:"pnpm",label:"pnpm",children:(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-bash",children:"pnpm add @tkey/react-native-storage\n"})})})]}),"\n",(0,s.jsx)(a.h3,{id:"chrome-storage-module",children:"Chrome Storage Module"}),"\n",(0,s.jsx)(a.p,{children:"Adds the capability to add or remove a share from the Chrome Extension storage."}),"\n",(0,s.jsx)(a.h4,{id:"tkeychrome-storage",children:(0,s.jsx)(a.a,{href:"https://www.npmjs.com/package/@tkey/chrome-storage",children:(0,s.jsx)(a.code,{children:"@tkey/chrome-storage"})})}),"\n",(0,s.jsxs)(t.Z,{groupId:"npm2yarn",children:[(0,s.jsx)(l.Z,{value:"npm",children:(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-bash",children:"npm install --save @tkey/chrome-storage\n"})})}),(0,s.jsx)(l.Z,{value:"yarn",label:"Yarn",children:(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-bash",children:"yarn add @tkey/chrome-storage\n"})})}),(0,s.jsx)(l.Z,{value:"pnpm",label:"pnpm",children:(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-bash",children:"pnpm add @tkey/chrome-storage\n"})})})]}),"\n",(0,s.jsx)(a.h2,{id:"recovery-modules-share-c",children:"Recovery Modules (Share C)"}),"\n",(0,s.jsx)(a.p,{children:"Recovery Modules are used to recover the tKey shares in the case user doesn't have access to their device/storage or needs additional security."}),"\n",(0,s.jsx)(a.h3,{id:"security-questions-module",children:"Security Questions Module"}),"\n",(0,s.jsx)(a.p,{children:"Adds the capability to add or remove a question and password as a share."}),"\n",(0,s.jsx)(a.h4,{id:"tkeysecurity-questions",children:(0,s.jsx)(a.a,{href:"https://www.npmjs.com/package/@tkey/security-questions",children:(0,s.jsx)(a.code,{children:"@tkey/security-questions"})})}),"\n",(0,s.jsxs)(t.Z,{groupId:"npm2yarn",children:[(0,s.jsx)(l.Z,{value:"npm",children:(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-bash",children:"npm install --save @tkey/security-questions\n"})})}),(0,s.jsx)(l.Z,{value:"yarn",label:"Yarn",children:(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-bash",children:"yarn add @tkey/security-questions\n"})})}),(0,s.jsx)(l.Z,{value:"pnpm",label:"pnpm",children:(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-bash",children:"pnpm add @tkey/security-questions\n"})})})]}),"\n",(0,s.jsx)(a.h3,{id:"share-transfer-module",children:"Share Transfer Module"}),"\n",(0,s.jsx)(a.p,{children:"Adds the capability to transfer a share to another device."}),"\n",(0,s.jsx)(a.h4,{id:"tkeyshare-transfer",children:(0,s.jsx)(a.a,{href:"https://www.npmjs.com/package/@tkey/share-transfer",children:(0,s.jsx)(a.code,{children:"@tkey/share-transfer"})})}),"\n",(0,s.jsxs)(t.Z,{groupId:"npm2yarn",children:[(0,s.jsx)(l.Z,{value:"npm",children:(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-bash",children:"npm install --save @tkey/share-transfer\n"})})}),(0,s.jsx)(l.Z,{value:"yarn",label:"Yarn",children:(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-bash",children:"yarn add @tkey/share-transfer\n"})})}),(0,s.jsx)(l.Z,{value:"pnpm",label:"pnpm",children:(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-bash",children:"pnpm add @tkey/share-transfer\n"})})})]}),"\n",(0,s.jsx)(a.h3,{id:"share-serialization-module",children:"Share Serialization Module"}),"\n",(0,s.jsx)(a.p,{children:"Adds the capability to serialize/ deserialize a BN (private key) into a mnemonic."}),"\n",(0,s.jsx)(a.h4,{id:"tkeyshare-serialization",children:(0,s.jsx)(a.a,{href:"https://www.npmjs.com/package/@tkey/share-serialization",children:(0,s.jsx)(a.code,{children:"@tkey/share-serialization"})})}),"\n",(0,s.jsxs)(t.Z,{groupId:"npm2yarn",children:[(0,s.jsx)(l.Z,{value:"npm",children:(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-bash",children:"npm install --save @tkey/share-serialization\n"})})}),(0,s.jsx)(l.Z,{value:"yarn",label:"Yarn",children:(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-bash",children:"yarn add @tkey/share-serialization\n"})})}),(0,s.jsx)(l.Z,{value:"pnpm",label:"pnpm",children:(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-bash",children:"pnpm add @tkey/share-serialization\n"})})})]}),"\n",(0,s.jsx)(a.h2,{id:"additional-modules",children:"Additional Modules"}),"\n",(0,s.jsx)(a.p,{children:"These modules provide extra capability to the tKey SDK, like importing users' existing private keys or seedphrases."}),"\n",(0,s.jsx)(a.h3,{id:"seed-phrase-module",children:"Seed Phrase Module"}),"\n",(0,s.jsx)(a.p,{children:"Adds the capability to store and use seed phrases on the metadata."}),"\n",(0,s.jsx)(a.h4,{id:"tkeyseed-phrase",children:(0,s.jsx)(a.a,{href:"https://www.npmjs.com/package/@tkey/seed-phrase",children:(0,s.jsx)(a.code,{children:"@tkey/seed-phrase"})})}),"\n",(0,s.jsxs)(t.Z,{groupId:"npm2yarn",children:[(0,s.jsx)(l.Z,{value:"npm",children:(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-bash",children:"npm install --save @tkey/seed-phrase\n"})})}),(0,s.jsx)(l.Z,{value:"yarn",label:"Yarn",children:(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-bash",children:"yarn add @tkey/seed-phrase\n"})})}),(0,s.jsx)(l.Z,{value:"pnpm",label:"pnpm",children:(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-bash",children:"pnpm add @tkey/seed-phrase\n"})})})]}),"\n",(0,s.jsx)(a.h3,{id:"private-keys-module",children:"Private Keys Module"}),"\n",(0,s.jsx)(a.p,{children:"Adds the capability to store extra private keys on the metadata."}),"\n",(0,s.jsx)(a.h4,{id:"tkeyprivate-keys",children:(0,s.jsx)(a.a,{href:"https://www.npmjs.com/package/@tkey/private-keys",children:(0,s.jsx)(a.code,{children:"@tkey/private-keys"})})}),"\n",(0,s.jsxs)(t.Z,{groupId:"npm2yarn",children:[(0,s.jsx)(l.Z,{value:"npm",children:(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-bash",children:"npm install --save @tkey/private-keys\n"})})}),(0,s.jsx)(l.Z,{value:"yarn",label:"Yarn",children:(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-bash",children:"yarn add @tkey/private-keys\n"})})}),(0,s.jsx)(l.Z,{value:"pnpm",label:"pnpm",children:(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-bash",children:"pnpm add @tkey/private-keys\n"})})})]}),"\n",(0,s.jsx)(a.h2,{id:"troubleshooting",children:"Troubleshooting"}),"\n",(0,s.jsx)(a.h3,{id:"bundler-issues-missing-dependencies",children:"Bundler Issues: Missing Dependencies"}),"\n",(0,s.jsx)(a.p,{children:"You might face issues mentioning that certain dependencies are missing within the browser or React Native environments. These are node dependencies\nthat need to be polyfilled in your application, to enable Web3Auth functionalities. Furthermore, your bundler needs to be reconfigured to use them\nwhile building the app. We have created guides for different bundlers to help you with this issue:"}),"\n",(0,s.jsxs)(a.ul,{children:["\n",(0,s.jsxs)(a.li,{children:["Please check out our ",(0,s.jsx)(a.strong,{children:(0,s.jsx)(a.a,{href:"/troubleshooting/webpack-issues",children:"Webpack 5 Troubleshooting Guide"})})]}),"\n",(0,s.jsxs)(a.li,{children:["Please check out our ",(0,s.jsx)(a.strong,{children:(0,s.jsx)(a.a,{href:"/troubleshooting/vite-issues",children:"Vite Troubleshooting Guide"})})]}),"\n",(0,s.jsxs)(a.li,{children:["Please check out our ",(0,s.jsx)(a.strong,{children:(0,s.jsx)(a.a,{href:"/troubleshooting/metro-issues",children:"React Native Troubleshooting Guide"})})]}),"\n"]})]})}function p(e={}){const{wrapper:a}={...(0,n.a)(),...e.components};return a?(0,s.jsx)(a,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},85162:(e,a,r)=>{r.d(a,{Z:()=>l});r(67294);var s=r(36905);const n={tabItem:"tabItem_Ymn6"};var t=r(85893);function l(e){let{children:a,hidden:r,className:l}=e;return(0,t.jsx)("div",{role:"tabpanel",className:(0,s.Z)(n.tabItem,l),hidden:r,children:a})}},74866:(e,a,r)=>{r.d(a,{Z:()=>f});var s=r(67294),n=r(36905),t=r(12466),l=r(16550),i=r(20469),d=r(91980),o=r(67392),c=r(50012);function h(e){return s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:a}=e;return!!a&&"object"==typeof a&&"value"in a}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:a,children:r}=e;return(0,s.useMemo)((()=>{const e=a??function(e){return h(e).map((e=>{let{props:{value:a,label:r,attributes:s,default:n}}=e;return{value:a,label:r,attributes:s,default:n}}))}(r);return function(e){const a=(0,o.l)(e,((e,a)=>e.value===a.value));if(a.length>0)throw new Error(`Docusaurus error: Duplicate values "${a.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[a,r])}function p(e){let{value:a,tabValues:r}=e;return r.some((e=>e.value===a))}function m(e){let{queryString:a=!1,groupId:r}=e;const n=(0,l.k6)(),t=function(e){let{queryString:a=!1,groupId:r}=e;if("string"==typeof a)return a;if(!1===a)return null;if(!0===a&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:a,groupId:r});return[(0,d._X)(t),(0,s.useCallback)((e=>{if(!t)return;const a=new URLSearchParams(n.location.search);a.set(t,e),n.replace({...n.location,search:a.toString()})}),[t,n])]}function y(e){const{defaultValue:a,queryString:r=!1,groupId:n}=e,t=u(e),[l,d]=(0,s.useState)((()=>function(e){let{defaultValue:a,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(a){if(!p({value:a,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${a}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return a}const s=r.find((e=>e.default))??r[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:a,tabValues:t}))),[o,h]=m({queryString:r,groupId:n}),[y,g]=function(e){let{groupId:a}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(a),[n,t]=(0,c.Nk)(r);return[n,(0,s.useCallback)((e=>{r&&t.set(e)}),[r,t])]}({groupId:n}),v=(()=>{const e=o??y;return p({value:e,tabValues:t})?e:null})();(0,i.Z)((()=>{v&&d(v)}),[v]);return{selectedValue:l,selectValue:(0,s.useCallback)((e=>{if(!p({value:e,tabValues:t}))throw new Error(`Can't select invalid tab value=${e}`);d(e),h(e),g(e)}),[h,g,t]),tabValues:t}}var g=r(72389);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=r(85893);function j(e){let{className:a,block:r,selectedValue:s,selectValue:l,tabValues:i}=e;const d=[],{blockElementScrollPositionUntilNextRender:o}=(0,t.o5)(),c=e=>{const a=e.currentTarget,r=d.indexOf(a),n=i[r].value;n!==s&&(o(a),l(n))},h=e=>{let a=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const r=d.indexOf(e.currentTarget)+1;a=d[r]??d[0];break}case"ArrowLeft":{const r=d.indexOf(e.currentTarget)-1;a=d[r]??d[d.length-1];break}}a?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,n.Z)("tabs",{"tabs--block":r},a),children:i.map((e=>{let{value:a,label:r,attributes:t}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:s===a?0:-1,"aria-selected":s===a,ref:e=>d.push(e),onKeyDown:h,onClick:c,...t,className:(0,n.Z)("tabs__item",v.tabItem,t?.className,{"tabs__item--active":s===a}),children:r??a},a)}))})}function b(e){let{lazy:a,children:r,selectedValue:n}=e;const t=(Array.isArray(r)?r:[r]).filter(Boolean);if(a){const e=t.find((e=>e.props.value===n));return e?(0,s.cloneElement)(e,{className:"margin-top--md"}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:t.map(((e,a)=>(0,s.cloneElement)(e,{key:a,hidden:e.props.value!==n})))})}function k(e){const a=y(e);return(0,x.jsxs)("div",{className:(0,n.Z)("tabs-container",v.tabList),children:[(0,x.jsx)(j,{...e,...a}),(0,x.jsx)(b,{...e,...a})]})}function f(e){const a=(0,g.Z)();return(0,x.jsx)(k,{...e,children:h(e.children)},String(a))}},11151:(e,a,r)=>{r.d(a,{Z:()=>i,a:()=>l});var s=r(67294);const n={},t=s.createContext(n);function l(e){const a=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function i(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:l(e.components),s.createElement(t.Provider,{value:a},e.children)}}}]);