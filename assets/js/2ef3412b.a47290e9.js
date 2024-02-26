"use strict";(self.webpackChunkweb3auth_docs=self.webpackChunkweb3auth_docs||[]).push([[69750],{57271:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>d,toc:()=>r});var s=a(85893),t=a(11151);const i={title:"Web3Auth PnP Web SDKs",displayed_sidebar:"sdk",description:"Web3Auth PnP Web SDKs | Documentation - Web3Auth"},o=void 0,d={id:"sdk/pnp/web/web",title:"Web3Auth PnP Web SDKs",description:"Web3Auth PnP Web SDKs | Documentation - Web3Auth",source:"@site/docs/sdk/pnp/web/web.mdx",sourceDirName:"sdk/pnp/web",slug:"/sdk/pnp/web/",permalink:"/docs/sdk/pnp/web/",draft:!1,unlisted:!1,editUrl:"https://github.com/web3auth/web3auth-docs/edit/master/docs/sdk/pnp/web/web.mdx",tags:[],version:"current",frontMatter:{title:"Web3Auth PnP Web SDKs",displayed_sidebar:"sdk",description:"Web3Auth PnP Web SDKs | Documentation - Web3Auth"},sidebar:"sdk",next:{title:" Web3Auth PnP Web Modal SDK",permalink:"/docs/sdk/pnp/web/modal/"}},l={},r=[{value:"Web3Auth Plug and Play Modal SDK",id:"web3auth-plug-and-play-modal-sdk",level:2},{value:"<code>@web3auth/modal</code>",id:"web3authmodal",level:3},{value:"Web3Auth Plug and Play No Modal SDK",id:"web3auth-plug-and-play-no-modal-sdk",level:2},{value:"<code>@web3auth/no-modal</code>",id:"web3authno-modal",level:3},{value:"Additional SDKs",id:"additional-sdks",level:2},{value:"Adapter packages",id:"adapter-packages",level:3},{value:"wagmi Connector",id:"wagmi-connector",level:3},{value:"Helper SDKs",id:"helper-sdks",level:2},{value:"Provider packages",id:"provider-packages",level:3},{value:"Plugin packages",id:"plugin-packages",level:3},{value:"Common Types and Interfaces",id:"common-types-and-interfaces",level:3},{value:"<code>@web3auth/base</code>",id:"web3authbase",level:4}];function h(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",strong:"strong",ul:"ul",...(0,t.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"In the Plug and Play product, we offer a modular package of Web3Auth which helps you connect the Social Logins (using Openlogin Adapter) alongside\nexternal wallet via a modular adapter interface. This helps you make Web3Auth, a one stop solution for all your authentication needs and get started\nquickly with your user onboarding journey. An adapter is just an extension/ connector of the underlying wallet to Web3Auth. This modular approach\nhelps the package remain lightweight and easy to use, while providing you the flexibilty of using multiple underlying packages in an efficient way."}),"\n",(0,s.jsx)(n.p,{children:"For using Web3Auth in the web, you have two choices of SDKs to get started with."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsxs)(n.strong,{children:["Web3Auth Plug and Play Modal SDK ",(0,s.jsx)(n.a,{href:"/sdk/pnp/web/modal/",children:(0,s.jsx)(n.code,{children:"@web3auth/modal"})}),":"]})," A simple and easy to use SDK that will give you a simple modular way\nof implementing Web3Auth directly within your application. You can use the pre-configured Web3Auth Modal UI and whitelabel it according to your\nneeds."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsxs)(n.strong,{children:["Web3Auth Plug and Play No Modal SDK ",(0,s.jsx)(n.a,{href:"/sdk/pnp/web/no-modal",children:(0,s.jsx)(n.code,{children:"@web3auth/no-modal"})}),":"]})," The core module implemeting all the Web3Auth features you\nneed and giving you the flexibilty of using your own UI with the Web3Auth SDK working in the backend."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"web3auth-plug-and-play-modal-sdk",children:"Web3Auth Plug and Play Modal SDK"}),"\n",(0,s.jsx)(n.h3,{id:"web3authmodal",children:(0,s.jsx)(n.a,{href:"/sdk/pnp/web/modal",children:(0,s.jsx)(n.code,{children:"@web3auth/modal"})})}),"\n",(0,s.jsxs)(n.p,{children:["This package provides main class for using default Web3Auth Modal. The package includes all of our packages and gives you a simple way of implementing\nWeb3Auth within your interface. Additionally, it is a child class of ",(0,s.jsx)(n.a,{href:"/sdk/pnp/web/no-modal",children:(0,s.jsx)(n.code,{children:"@web3auth/no-modal"})})," package. Hence, you can still call\nall the functions available in the ",(0,s.jsx)(n.a,{href:"/sdk/pnp/web/no-modal",children:(0,s.jsx)(n.code,{children:"@web3auth/no-modal"})})," package."]}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsxs)(n.p,{children:["Head on to the ",(0,s.jsxs)(n.a,{href:"/sdk/pnp/web/modal",children:[(0,s.jsx)(n.code,{children:"@web3auth/modal"})," SDK Reference"]})," section to get started."]})}),"\n",(0,s.jsx)(n.h2,{id:"web3auth-plug-and-play-no-modal-sdk",children:"Web3Auth Plug and Play No Modal SDK"}),"\n",(0,s.jsx)(n.h3,{id:"web3authno-modal",children:(0,s.jsx)(n.a,{href:"/sdk/pnp/web/no-modal",children:(0,s.jsx)(n.code,{children:"@web3auth/no-modal"})})}),"\n",(0,s.jsx)(n.p,{children:"This package provides the core logic for handling adapters within Web3auth. This package acts as a manager for all the wallet adapters we offer. You\nshould use this package to build your custom login UI on top of Web3Auth. The SDK size for this is comparatively smaller than the Plug and Play Modal\nSDK, since it doesn't have the Web3Auth Modal UI within it."}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsxs)(n.p,{children:["Head on to the ",(0,s.jsxs)(n.a,{href:"/sdk/pnp/web/no-modal",children:[(0,s.jsx)(n.code,{children:"web3auth/no-modal"})," SDK Reference"]})," to get started."]})}),"\n",(0,s.jsx)(n.h2,{id:"additional-sdks",children:"Additional SDKs"}),"\n",(0,s.jsx)(n.h3,{id:"adapter-packages",children:"Adapter packages"}),"\n",(0,s.jsxs)(n.p,{children:["Adapter acts as a connector between the Web3Auth and an underlying wallet provider. Web3Auth uses the default\n",(0,s.jsx)(n.a,{href:"/sdk/pnp/web/adapters/openlogin",children:(0,s.jsx)(n.code,{children:"@web3auth/openlogin-adapter"})})," for social logins. For the rest of the external wallets, every adapter follows a\ncommon interface which is required by Web3Auth to communicate with the wallet."]}),"\n",(0,s.jsxs)(n.admonition,{type:"tip",children:[(0,s.jsxs)(n.p,{children:["Checkout the ",(0,s.jsx)(n.a,{href:"/sdk/pnp/web/adapters",children:"Adapters SDK Reference"})," to learn more."]}),(0,s.jsx)(n.p,{children:"Currently we have the following adapters available for utilisation:"}),(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"/sdk/pnp/web/adapters/openlogin",children:(0,s.jsx)(n.code,{children:"@web3auth/openlogin-adapter"})})," ",(0,s.jsxs)(n.em,{children:[(0,s.jsx)(n.strong,{children:"- default"})," (Enables social logins)"]})]}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/sdk/pnp/web/adapters/torus-evm",children:(0,s.jsx)(n.code,{children:"@web3auth/torus-evm-adapter"})})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/sdk/pnp/web/adapters/torus-solana",children:(0,s.jsx)(n.code,{children:"@web3auth/torus-solana-adapter"})})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/sdk/pnp/web/adapters/metamask",children:(0,s.jsx)(n.code,{children:"@web3auth/metamask-adapter"})})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/sdk/pnp/web/adapters/phantom",children:(0,s.jsx)(n.code,{children:"@web3auth/phantom-adapter"})})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/sdk/pnp/web/adapters/wallet-connect-v1",children:(0,s.jsx)(n.code,{children:"@web3auth/wallet-connect-v1-adapter"})})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/sdk/pnp/web/adapters/coinbase",children:(0,s.jsx)(n.code,{children:"@web3auth/coinbase-adapter"})})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/sdk/pnp/web/adapters/slope",children:(0,s.jsx)(n.code,{children:"@web3auth/slope-adapter"})})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/sdk/pnp/web/adapters/solflare",children:(0,s.jsx)(n.code,{children:"@web3auth/solflare-adapter"})})}),"\n"]})]}),"\n",(0,s.jsx)(n.h3,{id:"wagmi-connector",children:"wagmi Connector"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"wagmi"})," is a collection of React Hooks containing everything you need to start working with Ethereum. Web3Auth can be used with wagmi library to\nease the integration process for a dApp using wagmi hooks."]}),"\n",(0,s.jsxs)(n.p,{children:["Simply use ",(0,s.jsx)(n.a,{href:"/sdk/pnp/web/wagmi-connector",children:(0,s.jsx)(n.code,{children:"@web3auth/web3auth-wagmi-connector"})})," which connects with both Modal and No Modal SDKs in your dApp to\nmanage the interactions seamlessly."]}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsxs)(n.p,{children:["Head on to the ",(0,s.jsx)(n.a,{href:"/sdk/pnp/web/wagmi-connector",children:(0,s.jsx)(n.code,{children:"@web3auth/web3auth-wagmi-connector"})})," to get started."]})}),"\n",(0,s.jsx)(n.h2,{id:"helper-sdks",children:"Helper SDKs"}),"\n",(0,s.jsx)(n.h3,{id:"provider-packages",children:"Provider packages"}),"\n",(0,s.jsx)(n.p,{children:"For making RPC calls within your dApp, Web3Auth exposes respective providers for different chains. This provider can be used to interact with the\nconnected chain using exposed functions within the provider. Currently Web3Auth supports providers for both EVM and Solana chains. For other chains,\none can easily get the private key from the Web3Auth SDK."}),"\n",(0,s.jsxs)(n.admonition,{type:"tip",children:[(0,s.jsxs)(n.p,{children:["Checkout the ",(0,s.jsx)(n.a,{href:"/sdk/helper-sdks/providers",children:"Providers SDK Reference"})," to learn more."]}),(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsxs)(n.a,{href:"/sdk/helper-sdks/providers/evm",children:["For EVM based Chains ",(0,s.jsx)(n.code,{children:"@web3auth/ethereum-provider"})]})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsxs)(n.a,{href:"/sdk/helper-sdks/providers/solana",children:["For Solana Blockchain ",(0,s.jsx)(n.code,{children:"@web3auth/solana-provider"})]})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsxs)(n.a,{href:"/sdk/helper-sdks/providers/common",children:["Common Key Provider for other Blockchains ",(0,s.jsx)(n.code,{children:"@web3auth/base-provider"})]})}),"\n"]})]}),"\n",(0,s.jsx)(n.h3,{id:"plugin-packages",children:"Plugin packages"}),"\n",(0,s.jsx)(n.p,{children:"Plugins extend the functionality of Web3Auth, helping you to add more features to your application. These features can be used to extend the UI\nfunctionalities, making your Web3Auth instance more interoperable, adding wallet features and a lot more!"}),"\n",(0,s.jsx)(n.p,{children:"Currently, we support UI plugins for wallet operations, helping you with flows to add funds, manage transactions, provide wallet UI and much more.\nThis helps you avoid making wallet flows within your application. Additionally, for interoperability with multiple applications, these packages give\nyou the advantage of using the same key from Web3Auth across multiple applications."}),"\n",(0,s.jsxs)(n.admonition,{type:"tip",children:[(0,s.jsxs)(n.p,{children:["Checkout the ",(0,s.jsx)(n.a,{href:"/sdk/helper-sdks/plugins",children:"Plugins SDK Reference"})," to learn more."]}),(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsxs)(n.a,{href:"/sdk/helper-sdks/plugins/evm-wallet",children:["EVM Wallet UI Plugin ",(0,s.jsx)(n.code,{children:"@web3auth/torus-wallet-connector-plugin"})]})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsxs)(n.a,{href:"/sdk/helper-sdks/plugins/solana-wallet",children:["Solana Wallet UI Plugin ",(0,s.jsx)(n.code,{children:"@web3auth/solana-wallet-connector-plugin"})]})}),"\n"]})]}),"\n",(0,s.jsx)(n.h3,{id:"common-types-and-interfaces",children:"Common Types and Interfaces"}),"\n",(0,s.jsx)(n.h4,{id:"web3authbase",children:(0,s.jsx)(n.a,{href:"https://npmjs.com/package/@web3auth/base",children:(0,s.jsx)(n.code,{children:"@web3auth/base"})})}),"\n",(0,s.jsx)(n.p,{children:"This package gives access to common types and interfaces for Web3Auth. This comes in handy by providing you a standard way of importing the values you\nneed to work with the SDKs. We highly recommend using it while working with Typescript."})]})}function c(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},11151:(e,n,a)=>{a.d(n,{Z:()=>d,a:()=>o});var s=a(67294);const t={},i=s.createContext(t);function o(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);