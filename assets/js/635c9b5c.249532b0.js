"use strict";(self.webpackChunkweb3auth_docs=self.webpackChunkweb3auth_docs||[]).push([[8822],{18786:(e,n,t)=>{t.d(n,{ZP:()=>o});var r=t(85893),a=t(11151);function i(e){const n={code:"code",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"After logging in, the Web3Auth instance will provide you with information regarding the user that is logged in. This information is obtained directly\nfrom the JWT token and is not stored by Web3Auth. Therefore, this information can only be accessed through social logins after the user has logged\ninto your application."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:"const user = await web3auth.getUserInfo(); // web3auth instance\n"})})]})}function o(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(i,{...e})}):i(e)}},50210:(e,n,t)=>{t.d(n,{ZP:()=>l});var r=t(85893),a=t(11151),i=t(74866),o=t(85162);function s(e){const n={code:"code",pre:"pre",...(0,a.a)(),...e.components};return(0,r.jsxs)(i.Z,{defaultValue:"modal",values:[{label:"PnP Modal SDK",value:"modal"},{label:"PnP NoModal SDK",value:"no-modal"},{label:"CoreKit SFA Web SDK",value:"sfa"},{label:"CoreKit MFA tKey JS SDK",value:"tkey"}],children:[(0,r.jsx)(o.Z,{value:"modal",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:'import { Web3Auth } from "@web3auth/modal";\nimport { CommonPrivateKeyProvider } from "@web3auth/base-provider";\nimport { WEB3AUTH_NETWORK } from "@web3auth/base";\n\nconst privateKeyProvider = new CommonPrivateKeyProvider({\n  config: { chainConfig: chainConfig }\n});\n\nconst web3auth = new Web3Auth({\n  // Get it from Web3Auth Dashboard\n  clientId,\n  web3AuthNetwork: WEB3AUTH_NETWORK.SAPPHIRE_MAINNET,\n  privateKeyProvider: privateKeyProvider,\n});\n'})})}),(0,r.jsx)(o.Z,{value:"no-modal",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:'import { Web3AuthNoModal } from "@web3auth/no-modal";\nimport { OpenloginAdapter } from "@web3auth/openlogin-adapter";\nimport { CommonPrivateKeyProvider } from "@web3auth/base-provider";\nimport { WEB3AUTH_NETWORK } from "@web3auth/base";\n\nconst privateKeyProvider = new CommonPrivateKeyProvider({\n  config: {chainConfig},\n});\n\nconst web3auth = new Web3AuthNoModal({\n  clientId, // Get it from Web3Auth Dashboard\n  web3AuthNetwork: WEB3AUTH_NETWORK.SAPPHIRE_MAINNET,\n});\n\nconst openloginAdapter = new OpenloginAdapter();\nweb3auth.configureAdapter(openloginAdapter);\n'})})}),(0,r.jsx)(o.Z,{value:"sfa",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:'import { Web3Auth } from "@web3auth/single-factor-auth";\nimport { CommonPrivateKeyProvider } from "@web3auth/base-provider";\n\nconst web3auth = new Web3Auth({\n  clientId, // Get your Client ID from Web3Auth Dashboard\n  web3AuthNetwork: "sapphire_mainnet",\n});\n\nconst privateKeyProvider = new CommonPrivateKeyProvider({\n  config: { chainConfig },\n});\n'})})}),(0,r.jsx)(o.Z,{value:"tkey",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:'import { SfaServiceProvider } from "@tkey/service-provider-sfa";\nimport { CommonPrivateKeyProvider } from "@web3auth/base-provider";\n\n// Initialization of private key provider\nconst privateKeyProvider = new CommonPrivateKeyProvider({\n  config: {\n    chainConfig,\n  },\n});\n\nawait (tKey.serviceProvider as SfaServiceProvider).init(privateKeyProvider);\n'})})})]})}function l(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(s,{...e})}):s(e)}},42996:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>h,contentTitle:()=>u,default:()=>p,frontMatter:()=>c,metadata:()=>d,toc:()=>m});var r=t(85893),a=t(11151),i=t(74866),o=t(85162),s=t(18786),l=t(50210);const c={title:"Integrate Web3Auth with the ImmutableX Blockchain",sidebar_label:"ImmutableX",image:"content-hub/guides/banners/immutablex.png",displayed_sidebar:"docs",keywords:["immutablex","web3auth","authentication","blockchain"],description:"Integrate Web3Auth with the ImmutableX Blockchain | Documentation - Web3Auth"},u=void 0,d={id:"connect-blockchain/other/immutablex",title:"Integrate Web3Auth with the ImmutableX Blockchain",description:"Integrate Web3Auth with the ImmutableX Blockchain | Documentation - Web3Auth",source:"@site/docs/connect-blockchain/other/immutablex.mdx",sourceDirName:"connect-blockchain/other",slug:"/connect-blockchain/other/immutablex",permalink:"/docs/connect-blockchain/other/immutablex",draft:!1,unlisted:!1,editUrl:"https://github.com/web3auth/web3auth-docs/edit/master/docs/connect-blockchain/other/immutablex.mdx",tags:[],version:"current",frontMatter:{title:"Integrate Web3Auth with the ImmutableX Blockchain",sidebar_label:"ImmutableX",image:"content-hub/guides/banners/immutablex.png",displayed_sidebar:"docs",keywords:["immutablex","web3auth","authentication","blockchain"],description:"Integrate Web3Auth with the ImmutableX Blockchain | Documentation - Web3Auth"},sidebar:"docs",previous:{title:"Cosmos",permalink:"/docs/connect-blockchain/other/cosmos"},next:{title:"Near",permalink:"/docs/connect-blockchain/other/near"}},h={},m=[{value:"Installation",id:"installation",level:2},{value:"Initializing Provider",id:"initializing-provider",level:2},{value:"Getting the <code>chainConfig</code>",id:"getting-the-chainconfig",level:3},{value:"Initializing and instantiating the Web3Auth SDK",id:"initializing-and-instantiating-the-web3auth-sdk",level:3},{value:"Get User Info",id:"get-user-info",level:2},{value:"Creating Layer 1 and Layer 2 Signers",id:"creating-layer-1-and-layer-2-signers",level:2},{value:"Get Balance",id:"get-balance",level:2},{value:"Send funds from Layer 1 to Layer 2",id:"send-funds-from-layer-1-to-layer-2",level:2}];function b(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:["While using the Web3Auth Web SDK, you get a ",(0,r.jsx)(n.a,{href:"https://eips.ethereum.org/EIPS/eip-1193",children:(0,r.jsx)(n.code,{children:"EIP1193"})})," provider, similar to the\n",(0,r.jsx)(n.a,{href:"https://docs.metamask.io/guide/ethereum-provider.html",children:"Metamask Provider"}),". This provider can be used with libraries like\n",(0,r.jsx)(n.a,{href:"https://web3js.readthedocs.io/en/v1.2.8/getting-started.html",children:(0,r.jsx)(n.code,{children:"web3.js"})}),", ",(0,r.jsx)(n.a,{href:"https://docs.ethers.io/v5/getting-started/",children:(0,r.jsx)(n.code,{children:"ethers.js"})})," etc. to make\n",(0,r.jsx)(n.a,{href:"https://www.avalabs.org",children:"ImmutableX"})," blockchain calls. However, since this chain is not fully EVM-compatible, there are a few extra setup\nrequirements. We have highlighted a few methods here to get you started quickly on that."]}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsxs)(n.p,{children:["This reference is for the ",(0,r.jsx)(n.code,{children:"Web"}),", however, you can use ImmutableX on other Mobile and Gaming Platforms as well. Please follow our reference for\n",(0,r.jsx)(n.a,{href:"/connect-blockchain/evm/",children:"EVM Blockchains"}),", and similarly use ImmutableX libraries that support the platforms to use the private key and make\nblockchain calls accordingly."]})}),"\n",(0,r.jsx)(n.h2,{id:"installation",children:"Installation"}),"\n",(0,r.jsxs)(i.Z,{groupId:"npm2yarn",children:[(0,r.jsx)(o.Z,{value:"npm",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"npm install --save @imtbl/core-sdk\n"})})}),(0,r.jsx)(o.Z,{value:"yarn",label:"Yarn",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"yarn add @imtbl/core-sdk\n"})})}),(0,r.jsx)(o.Z,{value:"pnpm",label:"pnpm",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"pnpm add @imtbl/core-sdk\n"})})})]}),"\n",(0,r.jsx)(n.h2,{id:"initializing-provider",children:"Initializing Provider"}),"\n",(0,r.jsxs)(n.h3,{id:"getting-the-chainconfig",children:["Getting the ",(0,r.jsx)(n.code,{children:"chainConfig"})]}),"\n",(0,r.jsxs)(i.Z,{defaultValue:"mainnet",values:[{label:"Mainnet",value:"mainnet"},{label:"Testnet",value:"testnet"}],children:[(0,r.jsx)(o.Z,{value:"mainnet",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:'const chainConfig = {\n  chainNamespace: "eip155",\n  chainId: "0x1", //\n  rpcTarget: "https://rpc.ankr.com/eth",\n  // Avoid using public rpcTarget in production.\n  displayName: "ImmutableX Mainnet",\n  blockExplorerUrl: "https://explorer.immutable.com",\n  ticker: "IMX",\n  tickerName: "ImmutableX",\n};\n'})})}),(0,r.jsx)(o.Z,{value:"testnet",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:'const chainConfig = {\n  chainNamespace: "eip155",\n  chainId: "0xaa36a7", //\n  rpcTarget: "https://rpc.ankr.com/eth_sepolia",\n  // Avoid using public rpcTarget in production.\n  displayName: "ImmutableX Testnet",\n  blockExplorerUrl: "https://explorer.testnet.immutable.com",\n  ticker: "IMX",\n  tickerName: "ImmutableX",\n};\n'})})})]}),"\n",(0,r.jsx)(n.h3,{id:"initializing-and-instantiating-the-web3auth-sdk",children:"Initializing and instantiating the Web3Auth SDK"}),"\n",(0,r.jsx)(l.ZP,{}),"\n",(0,r.jsx)(n.h2,{id:"get-user-info",children:"Get User Info"}),"\n",(0,r.jsx)(s.ZP,{}),"\n",(0,r.jsx)(n.h2,{id:"creating-layer-1-and-layer-2-signers",children:"Creating Layer 1 and Layer 2 Signers"}),"\n",(0,r.jsxs)(n.p,{children:["Once a user logs in, the Web3Auth SDK returns a provider. ImmutableX is a layer 2 solution for Ethereum, thus we need to create a eth signer using the\nprovider. We will use the ethers library to create the signer. Then we use the helper function ",(0,r.jsx)(n.code,{children:"createStarkSigner"})," from the ",(0,r.jsx)(n.code,{children:"@imtbl/core-sdk"})," to\ncreate a stark signer from the private key."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:'import { IProvider } from "@web3auth/base";\nimport { ImmutableX, Config, createStarkSigner } from "@imtbl/core-sdk";\nimport { ethers } from "ethers";\n\n/*\n  Use code from the above Initializing Provider here\n*/\n\nconst ethersProvider = new ethers.providers.Web3Provider(web3authProvider);\nconst ethSigner = ethersProvider.getSigner();\n\n// Get user\'s Ethereum public address\nconst address = await ethSigner.getAddress();\n\n// Get user\'s Starkex public address\n\nconst starkKey = await web3authProvider.request({ method: "private_key" });\nconst starkSigner = createStarkSigner(starkKey);\n'})}),"\n",(0,r.jsxs)(n.p,{children:["After creating the signers, we need to register these signers with the ImmutableX SDK. We can do this by calling the ",(0,r.jsx)(n.code,{children:"registerOffchain"})," method."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:"const config = Config.SANDBOX; // Or Config.PRODUCTION or Config.ROPSTEN\nconst client = new ImmutableX(config);\n\n// We use the signers we created in the above step\n\nconst walletConnection = { ethSigner, starkSigner };\nconst response = await client.registerOffchain(walletConnection);\n"})}),"\n",(0,r.jsx)(n.h2,{id:"get-balance",children:"Get Balance"}),"\n",(0,r.jsx)(n.p,{children:"We can get the Layer 1 ( Ethereum ) balance using the below code snippet."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:"const ethersProvider = new ethers.providers.Web3Provider(web3authProvider);\nconst signer = ethersProvider.getSigner();\n\n// Get user's Ethereum public address\nconst address = await signer.getAddress();\n\n// Get user's balance in ether\nconst balance = ethers.utils.formatEther(\n  await ethersProvider.getBalance(address), // Balance is in wei\n);\n"})}),"\n",(0,r.jsx)(n.h2,{id:"send-funds-from-layer-1-to-layer-2",children:"Send funds from Layer 1 to Layer 2"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:'const ethersProvider = new ethers.providers.Web3Provider(web3authProvider);\nconst ethSigner = ethersProvider.getSigner();\nconst depositResponse = await client.deposit(ethSigner, {\n  type: "ETH",\n  amount: "10000000000000", // Amount in wei\n});\n'})})]})}function p(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(b,{...e})}):b(e)}},85162:(e,n,t)=>{t.d(n,{Z:()=>o});t(67294);var r=t(36905);const a={tabItem:"tabItem_Ymn6"};var i=t(85893);function o(e){let{children:n,hidden:t,className:o}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,r.Z)(a.tabItem,o),hidden:t,children:n})}},74866:(e,n,t)=>{t.d(n,{Z:()=>j});var r=t(67294),a=t(36905),i=t(12466),o=t(16550),s=t(20469),l=t(91980),c=t(67392),u=t(50012);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:a}}=e;return{value:n,label:t,attributes:r,default:a}}))}(t);return function(e){const n=(0,c.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function m(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function b(e){let{queryString:n=!1,groupId:t}=e;const a=(0,o.k6)(),i=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,l._X)(i),(0,r.useCallback)((e=>{if(!i)return;const n=new URLSearchParams(a.location.search);n.set(i,e),a.replace({...a.location,search:n.toString()})}),[i,a])]}function p(e){const{defaultValue:n,queryString:t=!1,groupId:a}=e,i=h(e),[o,l]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!m({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:i}))),[c,d]=b({queryString:t,groupId:a}),[p,g]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,i]=(0,u.Nk)(t);return[a,(0,r.useCallback)((e=>{t&&i.set(e)}),[t,i])]}({groupId:a}),v=(()=>{const e=c??p;return m({value:e,tabValues:i})?e:null})();(0,s.Z)((()=>{v&&l(v)}),[v]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),g(e)}),[d,g,i]),tabValues:i}}var g=t(72389);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var f=t(85893);function x(e){let{className:n,block:t,selectedValue:r,selectValue:o,tabValues:s}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.o5)(),u=e=>{const n=e.currentTarget,t=l.indexOf(n),a=s[t].value;a!==r&&(c(n),o(a))},d=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const t=l.indexOf(e.currentTarget)+1;n=l[t]??l[0];break}case"ArrowLeft":{const t=l.indexOf(e.currentTarget)-1;n=l[t]??l[l.length-1];break}}n?.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":t},n),children:s.map((e=>{let{value:n,label:t,attributes:i}=e;return(0,f.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>l.push(e),onKeyDown:d,onClick:u,...i,className:(0,a.Z)("tabs__item",v.tabItem,i?.className,{"tabs__item--active":r===n}),children:t??n},n)}))})}function w(e){let{lazy:n,children:t,selectedValue:a}=e;const i=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=i.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:i.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==a})))})}function y(e){const n=p(e);return(0,f.jsxs)("div",{className:(0,a.Z)("tabs-container",v.tabList),children:[(0,f.jsx)(x,{...e,...n}),(0,f.jsx)(w,{...e,...n})]})}function j(e){const n=(0,g.Z)();return(0,f.jsx)(y,{...e,children:d(e.children)},String(n))}},11151:(e,n,t)=>{t.d(n,{Z:()=>s,a:()=>o});var r=t(67294);const a={},i=r.createContext(a);function o(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);