"use strict";(self.webpackChunkweb3auth_docs=self.webpackChunkweb3auth_docs||[]).push([[56178],{18786:(e,n,t)=>{t.d(n,{ZP:()=>i});var r=t(85893),a=t(11151);function o(e){const n={code:"code",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"After logging in, the Web3Auth instance will provide you with information regarding the user that is logged in. This information is obtained directly\nfrom the JWT token and is not stored by Web3Auth. Therefore, this information can only be accessed through social logins after the user has logged\ninto your application."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:"const user = await web3auth.getUserInfo(); // web3auth instance\n"})})]})}function i(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},50210:(e,n,t)=>{t.d(n,{ZP:()=>c});var r=t(85893),a=t(11151),o=t(74866),i=t(85162);function s(e){const n={code:"code",pre:"pre",...(0,a.a)(),...e.components};return(0,r.jsxs)(o.Z,{defaultValue:"modal",values:[{label:"PnP Modal SDK",value:"modal"},{label:"PnP NoModal SDK",value:"no-modal"},{label:"CoreKit SFA Web SDK",value:"sfa"},{label:"CoreKit MFA tKey JS SDK",value:"tkey"}],children:[(0,r.jsx)(i.Z,{value:"modal",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:'import { Web3Auth } from "@web3auth/modal";\nimport { CommonPrivateKeyProvider } from "@web3auth/base-provider";\nimport { WEB3AUTH_NETWORK } from "@web3auth/base";\n\nconst privateKeyProvider = new CommonPrivateKeyProvider({\n  config: { chainConfig: chainConfig }\n});\n\nconst web3auth = new Web3Auth({\n  // Get it from Web3Auth Dashboard\n  clientId,\n  web3AuthNetwork: WEB3AUTH_NETWORK.SAPPHIRE_MAINNET,\n  privateKeyProvider: privateKeyProvider,\n});\n'})})}),(0,r.jsx)(i.Z,{value:"no-modal",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:'import { Web3AuthNoModal } from "@web3auth/no-modal";\nimport { OpenloginAdapter } from "@web3auth/openlogin-adapter";\nimport { CommonPrivateKeyProvider } from "@web3auth/base-provider";\nimport { WEB3AUTH_NETWORK } from "@web3auth/base";\n\nconst privateKeyProvider = new CommonPrivateKeyProvider({\n  config: {chainConfig},\n});\n\nconst web3auth = new Web3AuthNoModal({\n  clientId, // Get it from Web3Auth Dashboard\n  web3AuthNetwork: WEB3AUTH_NETWORK.SAPPHIRE_MAINNET,\n});\n\nconst openloginAdapter = new OpenloginAdapter();\nweb3auth.configureAdapter(openloginAdapter);\n'})})}),(0,r.jsx)(i.Z,{value:"sfa",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:'import { Web3Auth } from "@web3auth/single-factor-auth";\nimport { CommonPrivateKeyProvider } from "@web3auth/base-provider";\n\nconst web3auth = new Web3Auth({\n  clientId, // Get your Client ID from Web3Auth Dashboard\n  web3AuthNetwork: "sapphire_mainnet",\n});\n\nconst privateKeyProvider = new CommonPrivateKeyProvider({\n  config: { chainConfig },\n});\n'})})}),(0,r.jsx)(i.Z,{value:"tkey",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:'import { SfaServiceProvider } from "@tkey/service-provider-sfa";\nimport { CommonPrivateKeyProvider } from "@web3auth/base-provider";\n\n// Initialization of private key provider\nconst privateKeyProvider = new CommonPrivateKeyProvider({\n  config: {\n    chainConfig,\n  },\n});\n\nawait (tKey.serviceProvider as SfaServiceProvider).init(privateKeyProvider);\n'})})})]})}function c(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(s,{...e})}):s(e)}},66072:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>h,contentTitle:()=>u,default:()=>b,frontMatter:()=>l,metadata:()=>d,toc:()=>p});var r=t(85893),a=t(11151),o=t(74866),i=t(85162),s=t(18786),c=t(50210);const l={title:"Integrate Web3Auth with the Near Protocol",sidebar_label:"Near",image:"content-hub/guides/banners/near.png",displayed_sidebar:"docs",keywords:["near","near protocol","web3auth","authentication","blockchain"],description:"Integrate Web3Auth with the Near Protocol | Documentation - Web3Auth"},u=void 0,d={id:"connect-blockchain/other/near",title:"Integrate Web3Auth with the Near Protocol",description:"Integrate Web3Auth with the Near Protocol | Documentation - Web3Auth",source:"@site/docs/connect-blockchain/other/near.mdx",sourceDirName:"connect-blockchain/other",slug:"/connect-blockchain/other/near",permalink:"/docs/connect-blockchain/other/near",draft:!1,unlisted:!1,editUrl:"https://github.com/web3auth/web3auth-docs/edit/master/docs/connect-blockchain/other/near.mdx",tags:[],version:"current",frontMatter:{title:"Integrate Web3Auth with the Near Protocol",sidebar_label:"Near",image:"content-hub/guides/banners/near.png",displayed_sidebar:"docs",keywords:["near","near protocol","web3auth","authentication","blockchain"],description:"Integrate Web3Auth with the Near Protocol | Documentation - Web3Auth"},sidebar:"docs",previous:{title:"ImmutableX",permalink:"/docs/connect-blockchain/other/immutablex"},next:{title:"Polkadot",permalink:"/docs/connect-blockchain/other/polkadot"}},h={},p=[{value:"Installation",id:"installation",level:2},{value:"Initializing Provider",id:"initializing-provider",level:2},{value:"Getting the <code>chainConfig</code>",id:"getting-the-chainconfig",level:3},{value:"Initializing and instantiating the Web3Auth SDK",id:"initializing-and-instantiating-the-web3auth-sdk",level:3},{value:"Get User Info",id:"get-user-info",level:2},{value:"Get Key Pair and Account",id:"get-key-pair-and-account",level:2},{value:"Get Balance",id:"get-balance",level:2},{value:"Send Transaction",id:"send-transaction",level:2}];function m(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:["While using the Web3Auth Web SDK for a non-EVM chain like ",(0,r.jsx)(n.a,{href:"https://near.org/",children:"NEAR"}),", you get a standard provider from which you can get the user's\nprivate key. Using this private key, you can use the corresponding libraries of the blockchain to make blockchain calls like getting a user's\n",(0,r.jsx)(n.code,{children:"account"}),", fetching ",(0,r.jsx)(n.code,{children:"balance"}),", performing ",(0,r.jsx)(n.code,{children:"send transaction"}),", etc. To help you get started, we've outlined some methods for you to use."]}),"\n",(0,r.jsx)(n.h2,{id:"installation",children:"Installation"}),"\n",(0,r.jsxs)(o.Z,{groupId:"npm2yarn",children:[(0,r.jsx)(i.Z,{value:"npm",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"npm install --save near-api-js\n"})})}),(0,r.jsx)(i.Z,{value:"yarn",label:"Yarn",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"yarn add near-api-js\n"})})}),(0,r.jsx)(i.Z,{value:"pnpm",label:"pnpm",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"pnpm add near-api-js\n"})})})]}),"\n",(0,r.jsx)(n.h2,{id:"initializing-provider",children:"Initializing Provider"}),"\n",(0,r.jsxs)(n.h3,{id:"getting-the-chainconfig",children:["Getting the ",(0,r.jsx)(n.code,{children:"chainConfig"})]}),"\n",(0,r.jsxs)(o.Z,{defaultValue:"mainnet",values:[{label:"Mainnet",value:"mainnet"},{label:"Testnet",value:"testnet"}],children:[(0,r.jsx)(i.Z,{value:"mainnet",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:'const chainConfig = {\n  chainNamespace: "other",\n  chainId: "0x4e454152",\n  rpcTarget: "https://mainnet.aurora.dev",\n  // Avoid using public rpcTarget in production.\n  displayName: "Near",\n  blockExplorerUrl: "https://aurorascan.dev",\n  ticker: "NEAR",\n  tickerName: "NEAR",\n};\n'})})}),(0,r.jsx)(i.Z,{value:"testnet",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-typescript",children:'const chainConfig = {\n  chainNamespace: "other",\n  chainId: "0x4e454153",\n  rpcTarget: "https://testnet.aurora.dev",\n  // Avoid using public rpcTarget in production.\n  displayName: "Near",\n  blockExplorerUrl: "https://explorer.testnet.aurora.dev",\n  ticker: "NEAR",\n  tickerName: "NEAR",\n};\n'})})})]}),"\n",(0,r.jsx)(n.h3,{id:"initializing-and-instantiating-the-web3auth-sdk",children:"Initializing and instantiating the Web3Auth SDK"}),"\n",(0,r.jsx)(c.ZP,{}),"\n",(0,r.jsx)(n.h2,{id:"get-user-info",children:"Get User Info"}),"\n",(0,r.jsx)(s.ZP,{}),"\n",(0,r.jsx)(n.h2,{id:"get-key-pair-and-account",children:"Get Key Pair and Account"}),"\n",(0,r.jsx)(n.p,{children:"After a user logs in, they receive a provider from the Web3Auth SDK. However, there is no native provider for Near in Web3Auth, so we must use the\nprivate key to make RPC calls directly."}),"\n",(0,r.jsxs)(n.p,{children:["To access the user's private key, the application can use the function ",(0,r.jsx)(n.code,{children:'web3auth.provider.request({method: "private_key"})'})," from the Web3Auth\nprovider. Yet, this key cannot be used with Near since it requires the ",(0,r.jsx)(n.code,{children:"ed25519"})," key. Therefore, we must use the ",(0,r.jsx)(n.code,{children:"getED25519Key()"})," function from\n",(0,r.jsx)(n.code,{children:"@toruslabs/openlogin-ed25519"})," to convert the ",(0,r.jsx)(n.code,{children:"secp256k1"})," key to an ",(0,r.jsx)(n.code,{children:"ed25519"})," key."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:'import { connect, KeyPair, keyStores, utils } from "near-api-js";\n/*\n  Use code from the above Initializing Provider here\n*/\n\n// web3authProvider is web3auth.provider from above\nconst privateKey = await web3authProvider.request({ method: "private_key" });\n\n// Convert the secp256k1 key to ed25519 key\nconst { getED25519Key } = await import("@toruslabs/openlogin-ed25519");\nconst privateKeyEd25519 = getED25519Key(privateKey).sk.toString("hex");\n\n// Convert the private key to Buffer\nconst privateKeyEd25519Buffer = Buffer.from(privateKeyEd25519, "hex");\n\n// Convert the private key to base58\nconst bs58encode = utils.serialize.base_encode(privateKeyEd25519Buffer);\n\n// Convert the base58 private key to KeyPair\nconst keyPair = KeyPair.fromString(bs58encode);\n\n// publicAddress\nconst publicAddress = keyPair?.getPublicKey().toString();\n\n// accountId is the account address which is where funds will be sent to.\nconst accountId = utils.serialize.base_decode(pk58.split(":")[1]).toString("hex");\n'})}),"\n",(0,r.jsx)(n.h2,{id:"get-balance",children:"Get Balance"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:'import { connect, keyStores, utils } from "near-api-js";\n/*\n  Use code from the above Initializing Provider here\n*/\nconst myKeyStore = new keyStores.InMemoryKeyStore();\nawait myKeyStore.setKey("testnet", accountId, keyPair); // accountId and keyPair from above\nconst connectionConfig = {\n  networkId: "testnet",\n  keyStore: myKeyStore,\n  nodeUrl: "https://rpc.testnet.near.org",\n  walletUrl: "https://wallet.testnet.near.org",\n  helperUrl: "https://helper.testnet.near.org",\n  explorerUrl: "https://explorer.testnet.near.org",\n};\nconst nearConnection = await connect(connectionConfig);\nconst account = await nearConnection.account(accountId);\nconst accountBalance = await account.getAccountBalance();\nconst availableBalance = utils.format.formatNearAmount(accountBalance.available);\n'})}),"\n",(0,r.jsx)(n.h2,{id:"send-transaction",children:"Send Transaction"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",children:'import { connect, keyStores, utils } from "near-api-js";\n/*\n  Use code from the above Initializing Provider here\n*/\nconst receiver = "shahbaz17.testnet";\nconst amount = "2"; // in NEAR\nconst myKeyStore = new keyStores.InMemoryKeyStore();\nawait myKeyStore.setKey("testnet", accountId, keyPair); // accountId and keyPair from above\nconst connectionConfig = {\n  networkId: "testnet",\n  keyStore: myKeyStore,\n  nodeUrl: "https://rpc.testnet.near.org",\n  walletUrl: "https://wallet.testnet.near.org",\n  helperUrl: "https://helper.testnet.near.org",\n  explorerUrl: "https://explorer.testnet.near.org",\n};\nconst nearConnection = await connect(connectionConfig);\nconst senderAccount = await nearConnection.account(accountId);\nconst result = await senderAccount.sendMoney(receiver, utils.format.parseNearAmount(amount));\n'})})]})}function b(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(m,{...e})}):m(e)}},85162:(e,n,t)=>{t.d(n,{Z:()=>i});t(67294);var r=t(36905);const a={tabItem:"tabItem_Ymn6"};var o=t(85893);function i(e){let{children:n,hidden:t,className:i}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,r.Z)(a.tabItem,i),hidden:t,children:n})}},74866:(e,n,t)=>{t.d(n,{Z:()=>k});var r=t(67294),a=t(36905),o=t(12466),i=t(16550),s=t(20469),c=t(91980),l=t(67392),u=t(50012);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:a}}=e;return{value:n,label:t,attributes:r,default:a}}))}(t);return function(e){const n=(0,l.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:t}=e;const a=(0,i.k6)(),o=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,c._X)(o),(0,r.useCallback)((e=>{if(!o)return;const n=new URLSearchParams(a.location.search);n.set(o,e),a.replace({...a.location,search:n.toString()})}),[o,a])]}function b(e){const{defaultValue:n,queryString:t=!1,groupId:a}=e,o=h(e),[i,c]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:o}))),[l,d]=m({queryString:t,groupId:a}),[b,v]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,o]=(0,u.Nk)(t);return[a,(0,r.useCallback)((e=>{t&&o.set(e)}),[t,o])]}({groupId:a}),g=(()=>{const e=l??b;return p({value:e,tabValues:o})?e:null})();(0,s.Z)((()=>{g&&c(g)}),[g]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);c(e),d(e),v(e)}),[d,v,o]),tabValues:o}}var v=t(72389);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var f=t(85893);function y(e){let{className:n,block:t,selectedValue:r,selectValue:i,tabValues:s}=e;const c=[],{blockElementScrollPositionUntilNextRender:l}=(0,o.o5)(),u=e=>{const n=e.currentTarget,t=c.indexOf(n),a=s[t].value;a!==r&&(l(n),i(a))},d=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const t=c.indexOf(e.currentTarget)+1;n=c[t]??c[0];break}case"ArrowLeft":{const t=c.indexOf(e.currentTarget)-1;n=c[t]??c[c.length-1];break}}n?.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":t},n),children:s.map((e=>{let{value:n,label:t,attributes:o}=e;return(0,f.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>c.push(e),onKeyDown:d,onClick:u,...o,className:(0,a.Z)("tabs__item",g.tabItem,o?.className,{"tabs__item--active":r===n}),children:t??n},n)}))})}function x(e){let{lazy:n,children:t,selectedValue:a}=e;const o=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=o.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:o.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==a})))})}function w(e){const n=b(e);return(0,f.jsxs)("div",{className:(0,a.Z)("tabs-container",g.tabList),children:[(0,f.jsx)(y,{...e,...n}),(0,f.jsx)(x,{...e,...n})]})}function k(e){const n=(0,v.Z)();return(0,f.jsx)(w,{...e,children:d(e.children)},String(n))}},11151:(e,n,t)=>{t.d(n,{Z:()=>s,a:()=>i});var r=t(67294);const a={},o=r.createContext(a);function i(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);