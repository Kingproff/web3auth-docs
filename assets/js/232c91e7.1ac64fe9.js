"use strict";(self.webpackChunkweb3auth_docs=self.webpackChunkweb3auth_docs||[]).push([[91137],{18786:(e,n,t)=>{t.d(n,{ZP:()=>i});var a=t(85893),r=t(11151);function o(e){const n={code:"code",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.p,{children:"After logging in, the Web3Auth instance will provide you with information regarding the user that is logged in. This information is obtained directly\nfrom the JWT token and is not stored by Web3Auth. Therefore, this information can only be accessed through social logins after the user has logged\ninto your application."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-tsx",children:"const user = await web3auth.getUserInfo(); // web3auth instance\n"})})]})}function i(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(o,{...e})}):o(e)}},50210:(e,n,t)=>{t.d(n,{ZP:()=>l});var a=t(85893),r=t(11151),o=t(74866),i=t(85162);function s(e){const n={code:"code",pre:"pre",...(0,r.a)(),...e.components};return(0,a.jsxs)(o.Z,{defaultValue:"modal",values:[{label:"PnP Modal SDK",value:"modal"},{label:"PnP NoModal SDK",value:"no-modal"},{label:"CoreKit SFA Web SDK",value:"sfa"},{label:"CoreKit MFA tKey JS SDK",value:"tkey"}],children:[(0,a.jsx)(i.Z,{value:"modal",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-tsx",children:'import { Web3Auth } from "@web3auth/modal";\nimport { CommonPrivateKeyProvider } from "@web3auth/base-provider";\nimport { WEB3AUTH_NETWORK } from "@web3auth/base";\n\nconst privateKeyProvider = new CommonPrivateKeyProvider({\n  config: { chainConfig: chainConfig }\n});\n\nconst web3auth = new Web3Auth({\n  // Get it from Web3Auth Dashboard\n  clientId,\n  web3AuthNetwork: WEB3AUTH_NETWORK.SAPPHIRE_MAINNET,\n  privateKeyProvider: privateKeyProvider,\n});\n'})})}),(0,a.jsx)(i.Z,{value:"no-modal",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-tsx",children:'import { Web3AuthNoModal } from "@web3auth/no-modal";\nimport { OpenloginAdapter } from "@web3auth/openlogin-adapter";\nimport { CommonPrivateKeyProvider } from "@web3auth/base-provider";\nimport { WEB3AUTH_NETWORK } from "@web3auth/base";\n\nconst privateKeyProvider = new CommonPrivateKeyProvider({\n  config: {chainConfig},\n});\n\nconst web3auth = new Web3AuthNoModal({\n  clientId, // Get it from Web3Auth Dashboard\n  web3AuthNetwork: WEB3AUTH_NETWORK.SAPPHIRE_MAINNET,\n});\n\nconst openloginAdapter = new OpenloginAdapter();\nweb3auth.configureAdapter(openloginAdapter);\n'})})}),(0,a.jsx)(i.Z,{value:"sfa",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-tsx",children:'import { Web3Auth } from "@web3auth/single-factor-auth";\nimport { CommonPrivateKeyProvider } from "@web3auth/base-provider";\n\nconst web3auth = new Web3Auth({\n  clientId, // Get your Client ID from Web3Auth Dashboard\n  web3AuthNetwork: "sapphire_mainnet",\n});\n\nconst privateKeyProvider = new CommonPrivateKeyProvider({\n  config: { chainConfig },\n});\n'})})}),(0,a.jsx)(i.Z,{value:"tkey",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-tsx",children:'import { SfaServiceProvider } from "@tkey/service-provider-sfa";\nimport { CommonPrivateKeyProvider } from "@web3auth/base-provider";\n\n// Initialization of private key provider\nconst privateKeyProvider = new CommonPrivateKeyProvider({\n  config: {\n    chainConfig,\n  },\n});\n\nawait (tKey.serviceProvider as SfaServiceProvider).init(privateKeyProvider);\n'})})})]})}function l(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(s,{...e})}):s(e)}},1470:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>h,contentTitle:()=>d,default:()=>b,frontMatter:()=>c,metadata:()=>u,toc:()=>p});var a=t(85893),r=t(11151),o=t(74866),i=t(85162),s=t(18786),l=t(50210);const c={title:"Integrate Web3Auth with the Polkadot Blockchain",sidebar_label:"Polkadot",image:"content-hub/guides/banners/polkadot.png",displayed_sidebar:"docs",keywords:["polkadot","web3auth","authentication","blockchain"],description:"Integrate Web3Auth with the Polkadot Blockchain | Documentation - Web3Auth"},d=void 0,u={id:"connect-blockchain/other/polkadot",title:"Integrate Web3Auth with the Polkadot Blockchain",description:"Integrate Web3Auth with the Polkadot Blockchain | Documentation - Web3Auth",source:"@site/docs/connect-blockchain/other/polkadot.mdx",sourceDirName:"connect-blockchain/other",slug:"/connect-blockchain/other/polkadot",permalink:"/docs/connect-blockchain/other/polkadot",draft:!1,unlisted:!1,editUrl:"https://github.com/web3auth/web3auth-docs/edit/master/docs/connect-blockchain/other/polkadot.mdx",tags:[],version:"current",frontMatter:{title:"Integrate Web3Auth with the Polkadot Blockchain",sidebar_label:"Polkadot",image:"content-hub/guides/banners/polkadot.png",displayed_sidebar:"docs",keywords:["polkadot","web3auth","authentication","blockchain"],description:"Integrate Web3Auth with the Polkadot Blockchain | Documentation - Web3Auth"},sidebar:"docs",previous:{title:"Near",permalink:"/docs/connect-blockchain/other/near"},next:{title:"StarkEx",permalink:"/docs/connect-blockchain/other/starkex"}},h={},p=[{value:"Installation",id:"installation",level:2},{value:"Initializing Provider",id:"initializing-provider",level:2},{value:"Getting the <code>chainConfig</code>",id:"getting-the-chainconfig",level:3},{value:"Initializing and instantiating the Web3Auth SDK",id:"initializing-and-instantiating-the-web3auth-sdk",level:3},{value:"Get User Info",id:"get-user-info",level:2},{value:"Get Account and KeyPair",id:"get-account-and-keypair",level:2},{value:"Get Balance",id:"get-balance",level:2},{value:"Send Transaction",id:"send-transaction",level:2}];function m(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.p,{children:["While using the Web3Auth Web SDK for a non-EVM chain like ",(0,a.jsx)(n.a,{href:"https://www.polkadot.network/",children:"Polkadot"})," you get a standard provider from which you can get\nthe private key of the user. Using this private key, you can use the corresponding libraries of the blockchain to make blockchain calls like getting\nthe user's ",(0,a.jsx)(n.code,{children:"account"}),", fetching ",(0,a.jsx)(n.code,{children:"balance"}),", and ",(0,a.jsx)(n.code,{children:"sign & send transaction"}),". We have highlighted a few methods here to get you started quickly on that."]}),"\n",(0,a.jsx)(n.h2,{id:"installation",children:"Installation"}),"\n",(0,a.jsxs)(n.p,{children:["For Polkadot, we will use the libraries ",(0,a.jsx)(n.code,{children:"@polkadot/keyring"})," and ",(0,a.jsx)(n.code,{children:"@polkadot/util-crypto"})," to create the Polkadot address."]}),"\n",(0,a.jsxs)(o.Z,{groupId:"npm2yarn",children:[(0,a.jsx)(i.Z,{value:"npm",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"npm install --save @polkadot/keyring @polkadot/util-crypto\n"})})}),(0,a.jsx)(i.Z,{value:"yarn",label:"Yarn",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"yarn add @polkadot/keyring @polkadot/util-crypto\n"})})}),(0,a.jsx)(i.Z,{value:"pnpm",label:"pnpm",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"pnpm add @polkadot/keyring @polkadot/util-crypto\n"})})})]}),"\n",(0,a.jsx)(n.h2,{id:"initializing-provider",children:"Initializing Provider"}),"\n",(0,a.jsxs)(n.h3,{id:"getting-the-chainconfig",children:["Getting the ",(0,a.jsx)(n.code,{children:"chainConfig"})]}),"\n",(0,a.jsxs)(o.Z,{defaultValue:"mainnet",values:[{label:"Mainnet",value:"mainnet"},{label:"Testnet",value:"testnet"}],children:[(0,a.jsx)(i.Z,{value:"mainnet",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-typescript",children:'const chainConfig = {\n  chainNamespace: "other",\n  chainId: "Polkadot", //\n  rpcTarget: "https://rpc.polkadot.io",\n  // Avoid using public rpcTarget in production.\n  displayName: "Polkadot Mainnet",\n  blockExplorerUrl: "https://explorer.polkascan.io/polkadot",\n  ticker: "DOT",\n  tickerName: "Polkadot",\n};\n'})})}),(0,a.jsx)(i.Z,{value:"testnet",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-typescript",children:'const chainConfig = {\n  chainNamespace: "other",\n  chainId: "0x5", //\n  rpcTarget: "https://westend-rpc.polkadot.io",\n  // Avoid using public rpcTarget in production.\n  displayName: "Polkadot Testnet",\n  blockExplorerUrl: "https://westend.subscan.io",\n  ticker: "DOT",\n  tickerName: "Polkadot",\n};\n'})})})]}),"\n",(0,a.jsx)(n.h3,{id:"initializing-and-instantiating-the-web3auth-sdk",children:"Initializing and instantiating the Web3Auth SDK"}),"\n",(0,a.jsx)(l.ZP,{}),"\n",(0,a.jsx)(n.h2,{id:"get-user-info",children:"Get User Info"}),"\n",(0,a.jsx)(s.ZP,{}),"\n",(0,a.jsx)(n.h2,{id:"get-account-and-keypair",children:"Get Account and KeyPair"}),"\n",(0,a.jsx)(n.p,{children:"Once a user logs in, the Web3Auth SDK returns a provider. Since Web3Auth doesn't have a native provider for Polkadot, we need to directly use the\nprivate key to make the RPC calls."}),"\n",(0,a.jsxs)(n.p,{children:["Using the function, ",(0,a.jsx)(n.code,{children:'web3auth.provider.request({method: "private_key"})'})," from Web3Auth provider, the application can have access to the user's private\nkey. However, we cannot use this key with Polkadot-specific signing functions, hence, we first derive the Polkadot Keyring using the ",(0,a.jsx)(n.code,{children:"Keyring"})," class."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-tsx",children:'import { Keyring } from "@polkadot/api";\nimport { cryptoWaitReady } from "@polkadot/util-crypto";\n\n/*\n  Use code from the above Initializing Provider here\n*/\n\n// web3authProvider is web3auth.provider from above\nconst privateKey = await web3authProvider.request({ method: "private_key" });\n\n// cryptoWaitReady is required to initialize the Keyring\nawait cryptoWaitReady();\nconst keyring = new Keyring({ ss58Format: 42, type: "sr25519" });\nconst keyPair = keyring.addFromUri("0x" + privateKey);\n// keyPair.address is the account address.\nconst address = keyPair.address;\n'})}),"\n",(0,a.jsx)(n.h2,{id:"get-balance",children:"Get Balance"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-tsx",children:'import { Keyring } from "@polkadot/api";\nimport { cryptoWaitReady } from "@polkadot/util-crypto";\nimport { ApiPromise, WsProvider } from "@polkadot/api";\n\n/*\n  Use code from the above Initializing Provider here\n*/\n\n// web3authProvider is web3auth.provider from above\nconst privateKey = await web3authProvider.request({ method: "private_key" });\n\n// cryptoWaitReady is required to initialize the Keyring\nawait cryptoWaitReady();\nconst keyring = new Keyring({ ss58Format: 42, type: "sr25519" });\nconst keyPair = keyring.addFromUri("0x" + privateKey);\n\nconst provider = new WsProvider("wss://westend-rpc.polkadot.io"); // testnet\n// const provider = new WsProvider("wss://rpc.polkadot.io"); // Polkadot Relay Chain\n\n// Create the API and wait until ready\nconst api = await ApiPromise.create({ provider });\n\n// Retrieve the chain & node information information via rpc calls\nconst data = await api.query.system.account(keyPair.address);\n\n// Balance\nconst balance = data.toHuman();\n'})}),"\n",(0,a.jsx)(n.h2,{id:"send-transaction",children:"Send Transaction"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-tsx",children:'import { Keyring } from "@polkadot/api";\nimport { cryptoWaitReady } from "@polkadot/util-crypto";\nimport { ApiPromise, WsProvider } from "@polkadot/api";\n\n/*\n  Use code from the above Initializing Provider here\n*/\n\n// web3authProvider is web3auth.provider from above\nconst privateKey = await web3authProvider.request({ method: "private_key" });\n\n// cryptoWaitReady is required to initialize the Keyring\nawait cryptoWaitReady();\nconst keyring = new Keyring({ ss58Format: 42, type: "sr25519" });\nconst keyPair = keyring.addFromUri("0x" + privateKey);\n\nconst provider = new WsProvider("wss://westend-rpc.polkadot.io"); // testnet\n// const provider = new WsProvider("wss://rpc.polkadot.io"); // Polkadot Relay Chain\n\n// Create the API and wait until ready\nconst api = await ApiPromise.create({ provider });\n\n// Transfer 12345 units to \'5Gzhnn1MsDUjMi7S4cN41CfggEVzSyM58LkTYPFJY3wt7o3d\'\nconst txHash = await api.tx.balances.transferKeepAlive("5Gzhnn1MsDUjMi7S4cN41CfggEVzSyM58LkTYPFJY3wt7o3d", 12345).signAndSend(keyPair);\n\nconsole.log("txHash", txHash.toHuman());\n'})})]})}function b(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(m,{...e})}):m(e)}},85162:(e,n,t)=>{t.d(n,{Z:()=>i});t(67294);var a=t(36905);const r={tabItem:"tabItem_Ymn6"};var o=t(85893);function i(e){let{children:n,hidden:t,className:i}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,a.Z)(r.tabItem,i),hidden:t,children:n})}},74866:(e,n,t)=>{t.d(n,{Z:()=>x});var a=t(67294),r=t(36905),o=t(12466),i=t(16550),s=t(20469),l=t(91980),c=t(67392),d=t(50012);function u(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,a.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:t,attributes:a,default:r}}=e;return{value:n,label:t,attributes:a,default:r}}))}(t);return function(e){const n=(0,c.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:t}=e;const r=(0,i.k6)(),o=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,l._X)(o),(0,a.useCallback)((e=>{if(!o)return;const n=new URLSearchParams(r.location.search);n.set(o,e),r.replace({...r.location,search:n.toString()})}),[o,r])]}function b(e){const{defaultValue:n,queryString:t=!1,groupId:r}=e,o=h(e),[i,l]=(0,a.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const a=t.find((e=>e.default))??t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:n,tabValues:o}))),[c,u]=m({queryString:t,groupId:r}),[b,v]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[r,o]=(0,d.Nk)(t);return[r,(0,a.useCallback)((e=>{t&&o.set(e)}),[t,o])]}({groupId:r}),g=(()=>{const e=c??b;return p({value:e,tabValues:o})?e:null})();(0,s.Z)((()=>{g&&l(g)}),[g]);return{selectedValue:i,selectValue:(0,a.useCallback)((e=>{if(!p({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),v(e)}),[u,v,o]),tabValues:o}}var v=t(72389);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var f=t(85893);function y(e){let{className:n,block:t,selectedValue:a,selectValue:i,tabValues:s}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,o.o5)(),d=e=>{const n=e.currentTarget,t=l.indexOf(n),r=s[t].value;r!==a&&(c(n),i(r))},u=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=l.indexOf(e.currentTarget)+1;n=l[t]??l[0];break}case"ArrowLeft":{const t=l.indexOf(e.currentTarget)-1;n=l[t]??l[l.length-1];break}}n?.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":t},n),children:s.map((e=>{let{value:n,label:t,attributes:o}=e;return(0,f.jsx)("li",{role:"tab",tabIndex:a===n?0:-1,"aria-selected":a===n,ref:e=>l.push(e),onKeyDown:u,onClick:d,...o,className:(0,r.Z)("tabs__item",g.tabItem,o?.className,{"tabs__item--active":a===n}),children:t??n},n)}))})}function k(e){let{lazy:n,children:t,selectedValue:r}=e;const o=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=o.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:o.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==r})))})}function w(e){const n=b(e);return(0,f.jsxs)("div",{className:(0,r.Z)("tabs-container",g.tabList),children:[(0,f.jsx)(y,{...e,...n}),(0,f.jsx)(k,{...e,...n})]})}function x(e){const n=(0,v.Z)();return(0,f.jsx)(w,{...e,children:u(e.children)},String(n))}},11151:(e,n,t)=>{t.d(n,{Z:()=>s,a:()=>i});var a=t(67294);const r={},o=a.createContext(r);function i(e){const n=a.useContext(o);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),a.createElement(o.Provider,{value:n},e.children)}}}]);