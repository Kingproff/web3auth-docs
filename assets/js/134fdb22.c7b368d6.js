"use strict";(self.webpackChunkweb3auth_docs=self.webpackChunkweb3auth_docs||[]).push([[16470],{27964:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>h,contentTitle:()=>r,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>d});var n=i(85893),o=i(11151);const a={title:"GitHub Social Login with Web3Auth",sidebar_label:"GitHub",displayed_sidebar:"docs",description:"GitHub Social Login with Web3Auth | Documentation - Web3Auth"},r=void 0,s={id:"auth-provider-setup/social-providers/github",title:"GitHub Social Login with Web3Auth",description:"GitHub Social Login with Web3Auth | Documentation - Web3Auth",source:"@site/docs/auth-provider-setup/social-providers/github.mdx",sourceDirName:"auth-provider-setup/social-providers",slug:"/auth-provider-setup/social-providers/github",permalink:"/docs/auth-provider-setup/social-providers/github",draft:!1,unlisted:!1,editUrl:"https://github.com/web3auth/web3auth-docs/edit/master/docs/auth-provider-setup/social-providers/github.mdx",tags:[],version:"current",frontMatter:{title:"GitHub Social Login with Web3Auth",sidebar_label:"GitHub",displayed_sidebar:"docs",description:"GitHub Social Login with Web3Auth | Documentation - Web3Auth"},sidebar:"docs",previous:{title:"LinkedIn",permalink:"/docs/auth-provider-setup/social-providers/linkedin"},next:{title:"Line",permalink:"/docs/auth-provider-setup/social-providers/line"}},h={},d=[{value:"Set up GitHub via Auth0",id:"set-up-github-via-auth0",level:2},{value:"Example",id:"example",level:3}];function c(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,o.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.admonition,{type:"note",children:(0,n.jsx)(t.p,{children:"GitHub login can be performed in various ways, depending on the use case. We have demonstrated this with Auth0, but this can be done with any other\nFederated/JWT providers."})}),"\n",(0,n.jsxs)(t.h2,{id:"set-up-github-via-auth0",children:["Set up ",(0,n.jsx)(t.a,{href:"https://marketplace.auth0.com/integrations/github-social-connection",children:"GitHub"})," via Auth0"]}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["Create a verifier for your Auth0 application by selecting ",(0,n.jsx)(t.code,{children:"Auth0"})," as the Login provider from this modal.\n",(0,n.jsx)(t.img,{alt:"Twitter - Login Providers list on Web3Auth Dashboard",src:i(87047).Z+"",width:"1840",height:"1191"})]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["Select the ",(0,n.jsx)(t.code,{children:"GitHub"})," as the ",(0,n.jsx)(t.strong,{children:"Authentication Type"})," based on the dropdown.\n",(0,n.jsx)(t.img,{alt:"Twitter - Auth0 Authentication Type list on Web3Auth Dashboard",src:i(83380).Z+"",width:"3236",height:"2748"})]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["Enter the ",(0,n.jsx)(t.code,{children:"Auth0 Client ID"})," and ",(0,n.jsx)(t.code,{children:"Auth0 Domain"})," from your Auth0 application. See how to create a new Auth0 application\n",(0,n.jsx)(t.a,{href:"https://auth0.com/docs/quickstart/webapp/",children:"here"}),"."]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.img,{alt:"GitHub - Domain and Client ID from Auth0 Dashboard",src:i(88699).Z+"",width:"713",height:"388"}),"\n",(0,n.jsx)(t.img,{alt:"GitHub - Auth0 Client ID and Auth0 Domain on Web3Auth Dashboard",src:i(47407).Z+"",width:"2624",height:"1902"})]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["Add the ",(0,n.jsx)(t.a,{href:"https://marketplace.auth0.com/integrations/github-social-connection",children:"GitHub Social Connection"})," to your Auth0 application."]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["Click on the ",(0,n.jsx)(t.code,{children:"Create"})," button to create ",(0,n.jsx)(t.code,{children:"GitHub"})," Custom Authentication via Auth0 verifier."]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.h3,{id:"example",children:"Example"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-tsx",children:'import { Web3AuthNoModal } from "@web3auth/no-modal";\nimport { OpenloginAdapter } from "@web3auth/openlogin-adapter";\nimport { EthereumPrivateKeyProvider } from "@web3auth/ethereum-provider";\n\nconst clientId = "BPi5PB_UiIZ-cPz1GtV5i1I2iOSOHuimiXBI0e-Oe_u6X3oVAbCiAZOTEBtTXw4tsluTITPqA8zMsfxIKMjiqNQ";\n// get it from https://dashboard.web3auth.io by creating a project.\n\n\nconst chainConfig = {\n  chainNamespace: "eip155",\n  chainId: "0x1",\n  rpcTarget: "https://rpc.ankr.com/eth",\n  displayName: "Ethereum Mainnet",\n  blockExplorerUrl: "https://etherscan.io",\n  ticker: "ETH",\n  logo: "https://images.toruswallet.io/ethereum.svg"\n};\n\nconst privateKeyProvider = new EthereumPrivateKeyProvider({\n  config: { chainConfig },\n});\n\nconst web3auth = new Web3AuthNoModal({\n  clientId,\n  web3AuthNetwork: "sapphire_mainnet",\n  privateKeyProvider: privateKeyProvider,\n});\n\nconst openloginAdapter = new OpenloginAdapter({\n  privateKeyProvider,\n  adapterSettings: {\n    loginConfig: {\n      jwt: {\n        verifier: "w3a-auth0-demo", // Pass the Verifier name here\n        typeOfLogin: "jwt", // Pass on the login provider of the verifier you\'ve created\n        clientId: "hUVVf4SEsZT7syOiL0gLU9hFEtm2gQ6O", // Pass on the Auth0 `Client ID` here\n      },\n    },\n  },\n});\n\nweb3auth.configureAdapter(openloginAdapter);\nsetWeb3auth(web3auth);\n\n// Initialize\nawait web3auth.init();\n\n// Login with GitHub\nawait web3auth.connectTo(WALLET_ADAPTERS.OPENLOGIN, {\n  loginProvider: "jwt",\n  extraLoginOptions: {\n    domain: "https://web3auth.au.auth0.com", // Pass on the Auth0 `Domain` here\n    verifierIdField: "sub", // Pass on the field name of the `sub` field in the JWT\n    connection: "github", // Use this to skip Auth0 Modal for GitHub login\n  },\n});\n'})})]})}function u(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},83380:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/auth0-authentication-type-list-4ac151a7ae4c71595f812d0c01f49dd1.png"},88699:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/create-verifier-auth0-filled-common-d138f69a9802bc60dc68484d3ea7e500.png"},47407:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/create-verifier-auth0-unfilled-3e776a3ff9d8a7d8d9574238180e5209.png"},87047:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/create-verifier-auth0-d3d29d61412cd450daca94128c4849bd.png"},11151:(e,t,i)=>{i.d(t,{Z:()=>s,a:()=>r});var n=i(67294);const o={},a=n.createContext(o);function r(e){const t=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),n.createElement(a.Provider,{value:t},e.children)}}}]);