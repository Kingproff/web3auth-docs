"use strict";(self.webpackChunkweb3auth_docs=self.webpackChunkweb3auth_docs||[]).push([[4752],{55644:(e,t,n)=>{n.d(t,{ZP:()=>s});var r=n(85893),a=n(11151);function i(e){const t={code:"code",pre:"pre",...(0,a.a)(),...e.components};return(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",children:"// For ethers v5\n// const ethersProvider = new ethers.providers.Web3Provider(this.provider);\nconst ethersProvider = new ethers.BrowserProvider(provider!);\n\n// For ethers v5\n// const signer = ethersProvider.getSigner();\nconst signer = await ethersProvider.getSigner();\n\n// Get user's Ethereum public address\nconst address = signer.getAddress();\nuiConsole(address);\n"})})}function s(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(i,{...e})}):i(e)}},51564:(e,t,n)=>{n.d(t,{ZP:()=>s});var r=n(85893),a=n(11151);function i(e){const t={code:"code",pre:"pre",...(0,a.a)(),...e.components};return(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",children:"// For ethers v5\n// const ethersProvider = new ethers.providers.Web3Provider(this.provider);\nconst ethersProvider = new ethers.BrowserProvider(provider!);\n\n// For ethers v5\n// const signer = ethersProvider.getSigner();\nconst signer = await ethersProvider.getSigner();\n\n// Get user's Ethereum public address\nconst address = signer.getAddress();\n\n// Get user's balance in ether\n// For ethers v5\n// const balance = ethers.utils.formatEther(\n// await ethersProvider.getBalance(address) // Balance is in wei\n// );\nconst balance = ethers.formatEther(\n  await ethersProvider.getBalance(address), // Balance is in wei\n);\n"})})}function s(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(i,{...e})}):i(e)}},11621:(e,t,n)=>{n.d(t,{ZP:()=>c});var r=n(85893),a=n(11151),i=n(74866),s=n(85162);function o(e){const t={code:"code",pre:"pre",...(0,a.a)(),...e.components};return(0,r.jsxs)(i.Z,{defaultValue:"pnp",values:[{label:"PnP React Native SDK",value:"pnp"},{label:"SFA React Native SDK",value:"sfa"}],children:[(0,r.jsx)(s.Z,{value:"pnp",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-typescript",children:'import * as WebBrowser from "@toruslabs/react-native-web-browser";\nimport EncryptedStorage from "react-native-encrypted-storage";\nimport Web3Auth, { LOGIN_PROVIDER, OPENLOGIN_NETWORK, OpenloginUserInfo } from "@web3auth/react-native-sdk";\nimport "@ethersproject/shims";\nimport { ethers } from "ethers";\nimport { EthereumPrivateKeyProvider } from "@web3auth/ethereum-provider";\n\nconst [provider, setProvider] = useState<IProvider | null>(null);\n\nconst ethereumPrivateKeyProvider = new EthereumPrivateKeyProvider({\n  config: {\n    chainConfig,\n  },\n});\n\nconst web3auth = new Web3Auth(WebBrowser, EncryptedStorage, {\n  clientId,\n  network: OPENLOGIN_NETWORK.SAPPHIRE_MAINNET, // or other networks\n});\n\nawait ethereumPrivateKeyProvider.setupProvider(web3auth.privKey);\n\nsetProvider(ethereumPrivateKeyProvider);\n'})})}),(0,r.jsx)(s.Z,{value:"sfa",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-typescript",children:'import EncryptedStorage from "react-native-encrypted-storage";\nimport "@ethersproject/shims";\nimport Web3Auth from "@web3auth/single-factor-auth-react-native";\nimport { EthereumPrivateKeyProvider } from "@web3auth/ethereum-provider";\nimport { ethers } from "ethers";\n\nconst [provider, setProvider] = useState<IProvider | null>(null);\n\nconst web3auth = new Web3Auth(EncryptedStorage, {\n  clientId, // Get your Client ID from Web3Auth Dashboard\n  web3AuthNetwork: "sapphire_mainnet",\n});\n\nconst privateKeyProvider = new EthereumPrivateKeyProvider({\n  config: { chainConfig },\n});\n\nawait web3auth.init(privateKeyProvider);\nsetProvider(web3auth.provider);\n'})})})]})}function c(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},30491:(e,t,n)=>{n.d(t,{ZP:()=>s});var r=n(85893),a=n(11151);function i(e){const t={a:"a",admonition:"admonition",code:"code",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:["To interact with an EVM blockchain in React Native, you can use any ",(0,r.jsx)(t.a,{href:"https://eips.ethereum.org/EIPS/eip-1193",children:(0,r.jsx)(t.code,{children:"EIP1193"})})," compatible package like\n",(0,r.jsx)(t.a,{href:"https://web3js.readthedocs.io/en/v1.2.8/getting-started.html",children:(0,r.jsx)(t.code,{children:"web3.js"})}),", ",(0,r.jsx)(t.a,{href:"https://docs.ethers.io/v5/getting-started/",children:(0,r.jsx)(t.code,{children:"ethers.js"})})," etc."]}),"\n",(0,r.jsxs)(t.p,{children:["In this reference, we're using ",(0,r.jsx)(t.code,{children:"ethers.js"})," to demonstrate how to make blockchain calls using it with Web3Auth."]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["Install the ",(0,r.jsx)(t.code,{children:"ethers.js"})," package using ",(0,r.jsx)(t.code,{children:"npm"})," or ",(0,r.jsx)(t.code,{children:"yarn"}),":"]}),"\n"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",metastring:"npm2yarn",children:"npm install @@ethersproject/shims ethers\n"})}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Import the packages and shims into your codebase:"}),"\n"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",children:'// Import the required shims\nimport "@ethersproject/shims";\n\n// Import the ethers library\nimport { ethers } from "ethers";\n'})}),"\n",(0,r.jsx)(t.admonition,{type:"info",children:(0,r.jsxs)(t.p,{children:["We have followed ",(0,r.jsx)(t.a,{href:"https://docs.ethers.org/v5/cookbook/react-native/#cookbook-reactnative",children:"this guide"})," to set up the ",(0,r.jsx)(t.code,{children:"ethers.js"})," package in React\nNative."]})})]})}function s(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(i,{...e})}):i(e)}},98312:(e,t,n)=>{n.d(t,{ZP:()=>s});var r=n(85893),a=n(11151);function i(e){const t={code:"code",pre:"pre",...(0,a.a)(),...e.components};return(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",children:'const ethersProvider = ethers.getDefaultProvider(providerUrl);\nconst wallet = new ethers.Wallet(key, ethersProvider);\n\nconst destination = "0x40e1c367Eca34250cAF1bc8330E9EddfD403fC56";\n\n// Convert 1 ether to wei\nconst amount = ethers.utils.parseEther("0.001");\n\n// Submit transaction to the blockchain\n//highlight-start\nconst tx = await wallet.sendTransaction({\n  to: destination,\n  value: amount,\n  maxPriorityFeePerGas: "5000000000", // Max priority fee per gas\n  maxFeePerGas: "6000000000000", // Max fee per gas\n});\n//highlight-end\n'})})}function s(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(i,{...e})}):i(e)}},4094:(e,t,n)=>{n.d(t,{ZP:()=>s});var r=n(85893),a=n(11151);function i(e){const t={code:"code",pre:"pre",...(0,a.a)(),...e.components};return(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",children:'// For ethers v5\n// const ethersProvider = new ethers.providers.Web3Provider(this.provider);\nconst ethersProvider = new ethers.BrowserProvider(provider!);\n\n// For ethers v5\n// const signer = ethersProvider.getSigner();\nconst signer = await ethersProvider.getSigner();\nconst originalMessage = "YOUR_MESSAGE";\n\n// Sign the message\nconst signedMessage = await signer.signMessage(originalMessage);\n'})})}function s(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(i,{...e})}):i(e)}},60307:(e,t,n)=>{n.d(t,{ZP:()=>s});var r=n(85893),a=n(11151);function i(e){const t={code:"code",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:["You get the user information after a successful login is returned from the ",(0,r.jsx)(t.code,{children:"login"})," method. The ",(0,r.jsx)(t.code,{children:"userInfo"})," object contains the user information."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",children:"const info = web3auth.userInfo(); // User Information\n"})})]})}function s(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(i,{...e})}):i(e)}},55436:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>x,contentTitle:()=>g,default:()=>w,frontMatter:()=>b,metadata:()=>v,toc:()=>j});var r=n(85893),a=n(11151),i=n(30491),s=n(55644),o=n(60307),c=n(51564),l=n(11621),d=n(4094),u=n(98312),h=n(74866),p=n(85162),m=n(30831);const b={title:"Integrate Web3Auth with the BNB Optimistic Rolllup in React Native",sidebar_label:"React Native",image:"content-hub/guides/banners/opbnb.png",displayed_sidebar:"docs",keywords:["react-native","opbnb","web3auth","authentication","blockchain"],description:"Integrate Web3Auth with the BNB Optimistic Rolllup in React Native | Documentation - Web3Auth"},g=void 0,v={id:"connect-blockchain/evm/opbnb/react-native",title:"Integrate Web3Auth with the BNB Optimistic Rolllup in React Native",description:"Integrate Web3Auth with the BNB Optimistic Rolllup in React Native | Documentation - Web3Auth",source:"@site/docs/connect-blockchain/evm/opbnb/react-native.mdx",sourceDirName:"connect-blockchain/evm/opbnb",slug:"/connect-blockchain/evm/opbnb/react-native",permalink:"/docs/connect-blockchain/evm/opbnb/react-native",draft:!1,unlisted:!1,editUrl:"https://github.com/web3auth/web3auth-docs/edit/master/docs/connect-blockchain/evm/opbnb/react-native.mdx",tags:[],version:"current",frontMatter:{title:"Integrate Web3Auth with the BNB Optimistic Rolllup in React Native",sidebar_label:"React Native",image:"content-hub/guides/banners/opbnb.png",displayed_sidebar:"docs",keywords:["react-native","opbnb","web3auth","authentication","blockchain"],description:"Integrate Web3Auth with the BNB Optimistic Rolllup in React Native | Documentation - Web3Auth"},sidebar:"docs",previous:{title:"iOS",permalink:"/docs/connect-blockchain/evm/opbnb/ios"},next:{title:"Flutter",permalink:"/docs/connect-blockchain/evm/opbnb/flutter"}},x={},j=[{value:"Installation",id:"installation",level:2},{value:"Initializing Provider",id:"initializing-provider",level:2},{value:"Getting the <code>chainConfig</code>",id:"getting-the-chainconfig",level:3},{value:"Initialize",id:"initialize",level:2},{value:"Get User Info",id:"get-user-info",level:2},{value:"Get Account",id:"get-account",level:2},{value:"Get Balance",id:"get-balance",level:2},{value:"Send Transaction",id:"send-transaction",level:2},{value:"Sign a message",id:"sign-a-message",level:2}];function f(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(m.Z,{title:"Integrate Web3Auth with the BNB Optimistic Rolllup in React Native",description:"Integrate Web3Auth with the BNB Optimistic Rolllup in React Native | Documentation - Web3Auth",image:"https://web3auth.io/docs/content-hub/guides/banners/opbnb.png",slug:"/connect-blockchain/evm/opbnb/react-native"}),"\n",(0,r.jsxs)(t.p,{children:["While using the Web3Auth React Native SDK, you get a ",(0,r.jsx)(t.a,{href:"https://eips.ethereum.org/EIPS/eip-1193",children:(0,r.jsx)(t.code,{children:"EIP1193"})})," provider, similar to the\n",(0,r.jsx)(t.a,{href:"https://docs.metamask.io/guide/ethereum-provider.html",children:"Metamask Provider"}),". This provider can be used with libraries like\n",(0,r.jsx)(t.a,{href:"https://web3js.readthedocs.io/en/v1.2.8/getting-started.html",children:(0,r.jsx)(t.code,{children:"web3.js"})}),", ",(0,r.jsx)(t.a,{href:"https://docs.ethers.io/v5/getting-started/",children:(0,r.jsx)(t.code,{children:"ethers.js"})})," etc. to make\n",(0,r.jsx)(t.a,{href:"https://astar.network/",children:"opBNB"})," blockchain calls like getting the user's ",(0,r.jsx)(t.code,{children:"account"}),", fetching ",(0,r.jsx)(t.code,{children:"balance"}),", ",(0,r.jsx)(t.code,{children:"sign transaction"}),", ",(0,r.jsx)(t.code,{children:"send transaction"}),", ",(0,r.jsx)(t.code,{children:"read"}),"\nfrom and ",(0,r.jsx)(t.code,{children:"write"})," to the smart contract, etc. We have highlighted a few here to get you started quickly on that."]}),"\n",(0,r.jsx)(t.h2,{id:"installation",children:"Installation"}),"\n",(0,r.jsx)(i.ZP,{}),"\n",(0,r.jsx)(t.h2,{id:"initializing-provider",children:"Initializing Provider"}),"\n",(0,r.jsxs)(t.p,{children:["Using ",(0,r.jsx)(t.code,{children:"eip155"})," as ",(0,r.jsx)(t.code,{children:"chainNamespace"})," while initializing ",(0,r.jsx)(t.code,{children:"web3auth"})," will provide an ",(0,r.jsx)(t.a,{href:"https://eips.ethereum.org/EIPS/eip-1193",children:(0,r.jsx)(t.code,{children:"EIP1193"})})," compatible\nprovider as ",(0,r.jsx)(t.strong,{children:(0,r.jsx)(t.code,{children:"web3auth.provider"})})," after successful authentication."]}),"\n",(0,r.jsxs)(t.h3,{id:"getting-the-chainconfig",children:["Getting the ",(0,r.jsx)(t.code,{children:"chainConfig"})]}),"\n",(0,r.jsxs)(h.Z,{defaultValue:"mainnet",values:[{label:"Mainnet",value:"mainnet"},{label:"Testnet",value:"testnet"}],children:[(0,r.jsx)(p.Z,{value:"mainnet",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-typescript",children:'const chainConfig = {\n  chainNamespace: "eip155",\n  chainId: "0xCC", // hex of 1261120\n  rpcTarget: "https://opbnb-mainnet-rpc.bnbchain.org",\n  // Avoid using public rpcTarget in production.\n  // Use services like Infura, Quicknode etc\n  displayName: "opBNB Mainnet",\n  blockExplorer: "https://opbnbscan.com",\n  ticker: "BNB",\n  tickerName: "opBNB",\n};\n'})})}),(0,r.jsx)(p.Z,{value:"testnet",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-typescript",children:'const chainConfig = {\n  chainNamespace: "eip155",\n  chainId: "0x15EB", // hex of 1261120\n  rpcTarget: "https://opbnb-testnet-rpc.bnbchain.org",\n  // Avoid using public rpcTarget in production.\n  // Use services like Infura, Quicknode etc\n  displayName: "opBNB Testnet",\n  blockExplorer: "https://testnet.opbnbscan.com",\n  ticker: "tBNB",\n  tickerName: "opBNB",\n};\n'})})})]}),"\n",(0,r.jsx)(t.h2,{id:"initialize",children:"Initialize"}),"\n",(0,r.jsx)(l.ZP,{}),"\n",(0,r.jsx)(t.h2,{id:"get-user-info",children:"Get User Info"}),"\n",(0,r.jsx)(o.ZP,{}),"\n",(0,r.jsx)(t.h2,{id:"get-account",children:"Get Account"}),"\n",(0,r.jsx)(s.ZP,{}),"\n",(0,r.jsx)(t.h2,{id:"get-balance",children:"Get Balance"}),"\n",(0,r.jsx)(c.ZP,{}),"\n",(0,r.jsx)(t.h2,{id:"send-transaction",children:"Send Transaction"}),"\n",(0,r.jsx)(u.ZP,{}),"\n",(0,r.jsx)(t.h2,{id:"sign-a-message",children:"Sign a message"}),"\n",(0,r.jsx)(d.ZP,{})]})}function w(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(f,{...e})}):f(e)}},85162:(e,t,n)=>{n.d(t,{Z:()=>s});n(67294);var r=n(36905);const a={tabItem:"tabItem_Ymn6"};var i=n(85893);function s(e){let{children:t,hidden:n,className:s}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,r.Z)(a.tabItem,s),hidden:n,children:t})}},74866:(e,t,n)=>{n.d(t,{Z:()=>P});var r=n(67294),a=n(36905),i=n(12466),s=n(16550),o=n(20469),c=n(91980),l=n(67392),d=n(50012);function u(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??function(e){return u(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}(n);return function(e){const t=(0,l.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function p(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:n}=e;const a=(0,s.k6)(),i=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,c._X)(i),(0,r.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(a.location.search);t.set(i,e),a.replace({...a.location,search:t.toString()})}),[i,a])]}function b(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,i=h(e),[s,c]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:i}))),[l,u]=m({queryString:n,groupId:a}),[b,g]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,i]=(0,d.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&i.set(e)}),[n,i])]}({groupId:a}),v=(()=>{const e=l??b;return p({value:e,tabValues:i})?e:null})();(0,o.Z)((()=>{v&&c(v)}),[v]);return{selectedValue:s,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);c(e),u(e),g(e)}),[u,g,i]),tabValues:i}}var g=n(72389);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=n(85893);function j(e){let{className:t,block:n,selectedValue:r,selectValue:s,tabValues:o}=e;const c=[],{blockElementScrollPositionUntilNextRender:l}=(0,i.o5)(),d=e=>{const t=e.currentTarget,n=c.indexOf(t),a=o[n].value;a!==r&&(l(t),s(a))},u=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;t=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;t=c[n]??c[c.length-1];break}}t?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":n},t),children:o.map((e=>{let{value:t,label:n,attributes:i}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>c.push(e),onKeyDown:u,onClick:d,...i,className:(0,a.Z)("tabs__item",v.tabItem,i?.className,{"tabs__item--active":r===t}),children:n??t},t)}))})}function f(e){let{lazy:t,children:n,selectedValue:a}=e;const i=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=i.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:i.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a})))})}function w(e){const t=b(e);return(0,x.jsxs)("div",{className:(0,a.Z)("tabs-container",v.tabList),children:[(0,x.jsx)(j,{...e,...t}),(0,x.jsx)(f,{...e,...t})]})}function P(e){const t=(0,g.Z)();return(0,x.jsx)(w,{...e,children:u(e.children)},String(t))}},30831:(e,t,n)=>{n.d(t,{Z:()=>i});var r=n(35742),a=n(85893);function i(e){const{title:t,description:n,image:i,slug:s,keywords:o}=e;return(0,a.jsxs)(r.Z,{children:[t?(0,a.jsxs)("title",{children:[t," | Web3Auth "]}):(0,a.jsx)("title",{children:"Documentation | Web3Auth"}),n?(0,a.jsx)("meta",{name:"description",content:n}):(0,a.jsx)("meta",{name:"description",content:"Web3Auth is simple, non-custodial auth infrastructure that enables Web3 wallets and applications to provide seamless user logins for both mainstream and native Web3 users."}),o?o.length>0&&(0,a.jsx)("meta",{name:"keywords",content:`web3auth, blockchain, solana, ethereum, multi party computation, ${o.join(", ")}`}):(0,a.jsx)("meta",{name:"keywords",content:"web3auth, blockchain, web3, web3.js, ethers.js, solana, ethereum, passwordless, passwordless magic link, multi party computation, tkey, torus, web3 auth, auth"}),(0,a.jsx)("meta",{property:"og:site_name",content:"Web3Auth"}),(0,a.jsx)("meta",{property:"og:type",content:"website"}),t?(0,a.jsx)("meta",{property:"og:title",content:t}):(0,a.jsx)("meta",{property:"og:title",content:"Documentation | Web3Auth"}),n?(0,a.jsx)("meta",{property:"og:description",content:n}):(0,a.jsx)("meta",{property:"og:description",content:"Web3Auth is simple, non-custodial auth infrastructure that enables Web3 wallets and applications to provide seamless user logins for both mainstream and native Web3 users."}),s?(0,a.jsx)("meta",{property:"og:url",content:`https://web3auth.io/docs${s}`}):(0,a.jsx)("meta",{property:"og:url",content:"https://web3auth.io/docs"}),i?(0,a.jsx)("meta",{property:"og:image",content:i}):(0,a.jsx)("meta",{property:"og:image",content:"http://web3auth.io/docs/images/docs-meta-cards/documentation-card.png"}),(0,a.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,a.jsx)("meta",{name:"twitter:site",content:"@Web3Auth"}),(0,a.jsx)("meta",{name:"twitter:creator",content:"@Web3Auth"}),i?(0,a.jsx)("meta",{name:"twitter:image",content:i}):(0,a.jsx)("meta",{name:"twitter:image",content:"http://web3auth.io/docs/images/docs-meta-cards/documentation-card.png"}),t?(0,a.jsx)("meta",{itemProp:"name",content:t}):(0,a.jsx)("meta",{itemProp:"name",content:"Documentation | Web3Auth"}),n?(0,a.jsx)("meta",{itemProp:"description",content:n}):(0,a.jsx)("meta",{itemProp:"description",content:"Web3Auth is simple, non-custodial auth infrastructure that enables Web3 wallets and applications to provide seamless user logins for both mainstream and native Web3 users."}),i?(0,a.jsx)("meta",{itemProp:"image",content:i}):(0,a.jsx)("meta",{itemProp:"image",content:"http://web3auth.io/docs/images/docs-meta-cards/documentation-card.png"}),(0,a.jsx)("meta",{name:"author",content:"Web3Auth"})]})}},11151:(e,t,n)=>{n.d(t,{Z:()=>o,a:()=>s});var r=n(67294);const a={},i=r.createContext(a);function s(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);