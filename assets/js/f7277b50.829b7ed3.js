"use strict";(self.webpackChunkweb3auth_docs=self.webpackChunkweb3auth_docs||[]).push([[89008],{95139:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>j,contentTitle:()=>u,default:()=>g,frontMatter:()=>h,metadata:()=>x,toc:()=>p});var t=r(85893),i=r(11151),s=r(85162),a=r(74866);function c(e){const n={a:"a",admonition:"admonition",code:"code",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.admonition,{title:"Note",type:"warning",children:(0,t.jsxs)(n.p,{children:["Please use these examples in conjunction with our troubleshooting guide for React Native Bundler polyfill issues\n",(0,t.jsx)(n.a,{href:"/troubleshooting/metro-issues",children:"here"}),"."]})}),"\n",(0,t.jsx)(n.admonition,{title:"Note",type:"tip",children:(0,t.jsxs)(n.p,{children:["Please set up Firebase configuration in your React Native bare app using the guide ",(0,t.jsx)(n.a,{href:"https://rnfirebase.io/",children:"here"}),"."]})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",metastring:'title="App.tsx"',children:'import auth from "@react-native-firebase/auth";\nimport EncryptedStorage from "react-native-encrypted-storage";\nimport { EthereumPrivateKeyProvider } from "@web3auth/ethereum-provider";\nimport Web3Auth from "@web3auth/single-factor-auth-react-native";\n\n// Get idToken from Firebase\nasync function signInWithEmailPassword() {\n  try {\n    const res = await auth().signInWithEmailAndPassword("custom+jwt@firebase.login", "Testing@123");\n    return res;\n  } catch (error) {\n    console.error(error);\n  }\n}\n\n// Instantiate Web3Auth SFA SDK\nconst web3AuthSfa = new Web3Auth(EncryptedStorage, {\n  clientId: "WEB3AUTH_CLIENT_ID", // Get your Client ID from the Web3Auth Dashboard\n  web3AuthNetwork: "sapphire_mainnet", // Get your network from the Web3Auth Dashboard\n  usePnPKey: false, // By default, this sdk returns CoreKitKey\n});\n\n// Instantiate Ethereum Provider\nconst privateKeyProvider = new EthereumPrivateKeyProvider({\n  config: {\n    /*\n      pass the chain config that you want to connect with\n      all chainConfig fields are required.\n      */\n    chainConfig: {\n      chainId: "0x1",\n      rpcTarget: "https://rpc.ankr.com/eth",\n      displayName: "mainnet",\n      blockExplorer: "https://etherscan.io/",\n      ticker: "ETH",\n      tickerName: "Ethereum",\n    },\n  },\n});\n\n// Initialize Web3Auth SFA SDK\nawait web3AuthSfa.init(privateKeyProvider);\n\nconst loginRes = await signInWithEmailPassword();\nconst idToken = await loginRes!.user.getIdToken(true);\nconst parsedToken = parseToken(idToken);\n\nconst verifier = "web3auth-firebase-examples";\n// get sub value from firebase id token\nconst verifierId = parsedToken.sub;\n\n// Login the user\nconst web3authProvider = await web3auth!.connect({\n  verifier, // e.g. `web3auth-sfa-verifier` replace with your verifier name, and it has to be on the same network passed in init().\n  verifierId, // e.g. `Yux1873xnibdui` or `name@email.com` replace with your verifier id(sub or email)\'s value.\n  idToken,\n});\n\n// Get the private key, The private key returned here is the CoreKit Key, since the usePnPKey is set to false.\nconst finalPrivateKey = await web3authProvider!.request({\n  method: "eth_private_key",\n});\n'})})]})}function d(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}function o(e){const n={a:"a",admonition:"admonition",code:"code",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.admonition,{title:"Note",type:"warning",children:(0,t.jsxs)(n.p,{children:["Please use these examples in conjunction with our troubleshooting guide for React Native Bundler polyfill issues\n",(0,t.jsx)(n.a,{href:"/troubleshooting/metro-issues",children:"here"}),"."]})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",metastring:'title="App.js"',children:"import { Auth0Provider, useAuth0 } from \"react-native-auth0\";\nimport * as SecureStore from \"expo-secure-store\";\nimport {EthereumPrivateKeyProvider} from '@web3auth/ethereum-provider';\nimport Web3Auth from '@web3auth/single-factor-auth-react-native';\n\n// Instantiate Web3Auth SFA SDK\nconst web3AuthSfa = new Web3Auth(SecureStore, {\n  clientId: \"WEB3AUTH_CLIENT_ID\", // Get your Client ID from the Web3Auth Dashboard\n  web3AuthNetwork: 'sapphire_mainnet',\n  usePnPKey: false, // By default, this sdk returns CoreKitKey\n});\n\n// Instantiate Ethereum Provider\nconst privateKeyProvider = new EthereumPrivateKeyProvider({\n  config: {\n    /*\n      pass the chain config that you want to connect with\n      all chainConfig fields are required.\n      */\n    chainConfig: {\n      chainId: '0x1',\n      rpcTarget: 'https://rpc.ankr.com/eth',\n      displayName: 'mainnet',\n      blockExplorer: 'https://etherscan.io/',\n      ticker: 'ETH',\n      tickerName: 'Ethereum',\n    },\n  },\n});\n\n// Initialize Web3Auth SFA SDK\nawait web3AuthSfa.init(privateKeyProvider);\n\n// Get idToken from auth0\nconst signInWithAuth0 = async () => {\n  try {\n    await authorize({ scope: \"openid profile email\" }, { customScheme: \"auth0.com.web3authsfaauth0\" }, { responseType: \"token id_token\" });\n    const credentials = await getCredentials();\n\n    return credentials.idToken;\n  } catch (error) {\n    console.error(error);\n  }\n};\n\nconst idToken = await signInWithAuth0();\n\n// parseToken is a function that parses the token and returns the payload.\nconst parsedToken = parseToken(idToken);\n\nconst verifier = \"web3auth-auth0-demo\";\nconst verifierId = parsedToken.sub;\n\n// Login the user\nconst web3authProvider = await web3auth!.connect({\n  verifier, // e.g. `web3auth-sfa-verifier` replace with your verifier name, and it has to be on the same network passed in init().\n  verifierId, // e.g. `Yux1873xnibdui` or `name@email.com` replace with your verifier id(sub or email)'s value.\n  idToken,\n});\n\n// Get the private key, The private key returned here is the CoreKit Key, since the usePnPKey is set to false.\nconst finalPrivateKey = await web3authProvider!.request({\n  method: 'eth_private_key',\n});\n\nconsole.log(\"ETH Private key\", finalPrivateKey);\n"})})]})}function l(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}const h={title:"Usage of Core Kit SFA React Native SDK",sidebar_label:"Usage",displayed_sidebar:"sdk",description:"Web3Auth Core Kit Single Factor Auth React Native SDK - Usage | Documentation - Web3Auth"},u=void 0,x={id:"sdk/core-kit/sfa-react-native/usage",title:"Usage of Core Kit SFA React Native SDK",description:"Web3Auth Core Kit Single Factor Auth React Native SDK - Usage | Documentation - Web3Auth",source:"@site/docs/sdk/core-kit/sfa-react-native/usage.mdx",sourceDirName:"sdk/core-kit/sfa-react-native",slug:"/sdk/core-kit/sfa-react-native/usage",permalink:"/docs/sdk/core-kit/sfa-react-native/usage",draft:!1,unlisted:!1,editUrl:"https://github.com/web3auth/web3auth-docs/edit/master/docs/sdk/core-kit/sfa-react-native/usage.mdx",tags:[],version:"current",frontMatter:{title:"Usage of Core Kit SFA React Native SDK",sidebar_label:"Usage",displayed_sidebar:"sdk",description:"Web3Auth Core Kit Single Factor Auth React Native SDK - Usage | Documentation - Web3Auth"},sidebar:"sdk",previous:{title:"Authentication",permalink:"/docs/sdk/core-kit/sfa-react-native/authentication"},next:{title:"Web3Auth Core Kit Single Factor Auth Flutter SDK",permalink:"/docs/sdk/core-kit/sfa-flutter/"}},j={},p=[{value:"Logging in your User",id:"logging-in-your-user",level:2},{value:"Returns",id:"returns",level:4},{value:"<code>LoginParams</code>",id:"loginparams",level:4},{value:"<code>TorusSubVerifierInfo</code>",id:"torussubverifierinfo",level:4},{value:"Usage",id:"usage",level:4},{value:"Get a native provider",id:"get-a-native-provider",level:2},{value:"Returns",id:"returns-1",level:4},{value:"Get connected status",id:"get-connected-status",level:2},{value:"Returns",id:"returns-2",level:4},{value:"Get sessionId",id:"get-sessionid",level:2},{value:"Returns",id:"returns-3",level:4},{value:"Authenticate the user",id:"authenticate-the-user",level:2},{value:"Returns",id:"returns-4",level:4},{value:"<code>UserAuthInfo</code>",id:"userauthinfo",level:4},{value:"Add a new chain",id:"add-a-new-chain",level:2},{value:"<code>CustomChainConfig</code>",id:"customchainconfig",level:4},{value:"Switch the chain",id:"switch-the-chain",level:2},{value:"Logging out the user",id:"logging-out-the-user",level:2},{value:"Example",id:"example",level:2}];function f(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"Once you've installed and successfully initialized Web3Auth, you can use it to authenticate your users. Further, you can use the native provider given\nby Web3Auth to connect the users to the respective blockchain network."}),"\n",(0,t.jsx)(n.p,{children:"Natively, the instance of Web3Auth (referred to as web3auth in our examples) returns the following functions:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"connect()"})," - Logs in the User using the ",(0,t.jsx)(n.code,{children:"verifier"}),", ",(0,t.jsx)(n.code,{children:"verifierId"})," & ",(0,t.jsx)(n.code,{children:"idToken"})," mandatorily while ",(0,t.jsx)(n.code,{children:"subVerifierInfoArray"})," and ",(0,t.jsx)(n.code,{children:"serverTimeOffset"})," are\noptional."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"provider()"})," - Returns the native provider that can be used to make different blockchain transactions."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"connected()"})," - Returns ",(0,t.jsx)(n.code,{children:"true"})," or ",(0,t.jsx)(n.code,{children:"false"})," depending on whether the web3auth instance is available or not."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"sessionId()"})," - Returns the sessionId of the user as a string."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"authenticateUser()"})," - Returns a promise of ",(0,t.jsx)(n.code,{children:"UserAuthInfo"})," object containing the ",(0,t.jsx)(n.code,{children:"idToken"})," of the user."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"addChain()"})," - Add chain configuration to the web3auth instance."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"switchChain()"})," - Switch the chainId to one of the added chainIds."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"logout()"})," - Logs out the user from the web3auth instance."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"logging-in-your-user",children:"Logging in your User"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"connect(loginParams: LoginParams)"})}),"\n",(0,t.jsxs)(n.p,{children:["To log a user in the Web3Auth SFA Web SDK, you need to call ",(0,t.jsx)(n.code,{children:"connect()"})," function."]}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Variable"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{children:"Description"}),(0,t.jsx)(n.th,{children:"Mandatory"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"loginParams"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"object"})}),(0,t.jsx)(n.td,{children:"Login Parameters"}),(0,t.jsx)(n.td,{children:"Yes"})]})})]}),"\n",(0,t.jsx)(n.h4,{id:"returns",children:"Returns"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"connect(loginParams: LoginParams): Promise<IProvider | null>\n"})}),"\n",(0,t.jsx)(n.h4,{id:"loginparams",children:(0,t.jsx)(n.code,{children:"LoginParams"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"connect(loginParams: LoginParams)"})}),"\n",(0,t.jsxs)(n.p,{children:["On successful login, the ",(0,t.jsx)(n.code,{children:"connect()"})," function returns a ",(0,t.jsx)(n.code,{children:"IProvider"})," instance. This instance contains the respective provider corresponding to your\nselected blockchain. You can use this provider to connect your user to the blockchain and make transactions."]}),"\n",(0,t.jsxs)(n.p,{children:["On unsuccessful login, this function will return a ",(0,t.jsx)(n.code,{children:"null"})," value."]}),"\n",(0,t.jsxs)(a.Z,{defaultValue:"table",values:[{label:"Table",value:"table"},{label:"Type Declarations",value:"type"}],children:[(0,t.jsx)(s.Z,{value:"table",children:(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Parameter"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{children:"Description"}),(0,t.jsx)(n.th,{children:"Mandatory"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"verifier"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"string"})}),(0,t.jsxs)(n.td,{children:["Details of the verifier (verifier type, ie. ",(0,t.jsx)(n.code,{children:"torus"}),", ",(0,t.jsx)(n.code,{children:"metamask"}),", ",(0,t.jsx)(n.code,{children:"openlogin"})," etc.)"]}),(0,t.jsx)(n.td,{children:"Yes"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"verifierId"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"string"})}),(0,t.jsxs)(n.td,{children:["Verifier ID's value, ",(0,t.jsx)(n.code,{children:"sub"})," or ",(0,t.jsx)(n.code,{children:"email"})," value present in the idToken."]}),(0,t.jsx)(n.td,{children:"Yes"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"idToken"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"string"})}),(0,t.jsxs)(n.td,{children:["A newly created ",(0,t.jsx)(n.code,{children:"JWT Token"})," that has not already been sent to Web3Auth or a ",(0,t.jsx)(n.code,{children:"Duplicate Token"})," error will be thrown."]}),(0,t.jsx)(n.td,{children:"Yes"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"subVerifierInfoArray?"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"TorusSubVerifierInfo[]"})}),(0,t.jsx)(n.td,{children:"Sub verifier info"}),(0,t.jsx)(n.td,{children:"No"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"serverTimeOffset?"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"number"})}),(0,t.jsx)(n.td,{children:"Server time offset"}),(0,t.jsx)(n.td,{children:"No"})]})]})]})}),(0,t.jsx)(s.Z,{value:"type",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"export type LoginParams = {\n  verifier: string;\n  verifierId: string;\n  idToken: string;\n  subVerifierInfoArray?: TorusSubVerifierInfo[];\n  serverTimeOffset?: number;\n};\n"})})})]}),"\n",(0,t.jsx)(n.h4,{id:"torussubverifierinfo",children:(0,t.jsx)(n.code,{children:"TorusSubVerifierInfo"})}),"\n",(0,t.jsxs)(a.Z,{defaultValue:"table",values:[{label:"Table",value:"table"},{label:"Interface",value:"interface"}],children:[(0,t.jsx)(s.Z,{value:"table",children:(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Parameter"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"verifier"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"string"})}),(0,t.jsxs)(n.td,{children:["Details of the verifier (verifier type, ie. ",(0,t.jsx)(n.code,{children:"torus"}),", ",(0,t.jsx)(n.code,{children:"metamask"}),", ",(0,t.jsx)(n.code,{children:"openlogin"})," etc.)"]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"idToken"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"string"})}),(0,t.jsxs)(n.td,{children:["A newly created ",(0,t.jsx)(n.code,{children:"JWT Token"})," that has not already been sent to Web3Auth or a ",(0,t.jsx)(n.code,{children:"Duplicate Token"})," error will be thrown."]})]})]})]})}),(0,t.jsx)(s.Z,{value:"interface",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"export interface TorusSubVerifierInfo {\n  verifier: string;\n  idToken: string;\n}\n"})})})]}),"\n",(0,t.jsx)(n.h4,{id:"usage",children:"Usage"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:'await web3auth.connect({\n  verifier: "verifier-name", // e.g. `web3auth-sfa-verifier` replace with your verifier name, and it has to be on the same network passed in init().\n  verifierId: "verifier-id-value", // e.g. `Yux1873xnibdui` or `name@email.com` replace with your verifier id(sub or email)\'s value.\n  idToken: "JWT Token", // replace with your newly created unused JWT Token.\n});\n'})}),"\n",(0,t.jsx)(n.h2,{id:"get-a-native-provider",children:"Get a native provider"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"provider()"})}),"\n",(0,t.jsx)(n.p,{children:"Returns the native provider that can be used to make different blockchain transactions."}),"\n",(0,t.jsx)(n.h4,{id:"returns-1",children:"Returns"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"get provider(): IProvider | null;\n"})}),"\n",(0,t.jsx)(n.h2,{id:"get-connected-status",children:"Get connected status"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"connected()"})}),"\n",(0,t.jsxs)(n.p,{children:["Returns ",(0,t.jsx)(n.code,{children:"true"})," or ",(0,t.jsx)(n.code,{children:"false"})," depending on whether the web3auth instance is available or not."]}),"\n",(0,t.jsx)(n.h4,{id:"returns-2",children:"Returns"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"get connected(): boolean;\n"})}),"\n",(0,t.jsx)(n.h2,{id:"get-sessionid",children:"Get sessionId"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"sessionId()"})}),"\n",(0,t.jsx)(n.p,{children:"Returns the sessionId of the user as a string."}),"\n",(0,t.jsx)(n.h4,{id:"returns-3",children:"Returns"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"get sessionId(): string;\n"})}),"\n",(0,t.jsx)(n.h2,{id:"authenticate-the-user",children:"Authenticate the user"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"authenticateUser()"})}),"\n",(0,t.jsxs)(n.p,{children:["Returns a promise of ",(0,t.jsx)(n.code,{children:"UserAuthInfo"})," object containing the ",(0,t.jsx)(n.code,{children:"idToken"})," of the user."]}),"\n",(0,t.jsx)(n.h4,{id:"returns-4",children:"Returns"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"authenticateUser(): Promise<UserAuthInfo>;\n"})}),"\n",(0,t.jsx)(n.h4,{id:"userauthinfo",children:(0,t.jsx)(n.code,{children:"UserAuthInfo"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"export type UserAuthInfo = {\n  idToken: string;\n};\n"})}),"\n",(0,t.jsx)(n.h2,{id:"add-a-new-chain",children:"Add a new chain"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"addChain(chainConfig: CustomChainConfig)"})}),"\n",(0,t.jsx)(n.p,{children:"Add chain configuration to the web3auth instance."}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Variable"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{children:"Description"}),(0,t.jsx)(n.th,{children:"Mandatory"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"chainConfig"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"CustomChainConfig"})}),(0,t.jsx)(n.td,{children:"Chain specific configuration"}),(0,t.jsx)(n.td,{children:"Yes"})]})})]}),"\n",(0,t.jsx)(n.h4,{id:"customchainconfig",children:(0,t.jsx)(n.code,{children:"CustomChainConfig"})}),"\n",(0,t.jsxs)(a.Z,{defaultValue:"table",values:[{label:"Table",value:"table"},{label:"Type Declarations",value:"type"}],children:[(0,t.jsx)(s.Z,{value:"table",children:(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Parameter"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{children:"Description"}),(0,t.jsx)(n.th,{children:"Optional"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"chainNamespace"})}),(0,t.jsx)(n.td,{children:(0,t.jsxs)("ul",{children:[(0,t.jsxs)("li",{children:[(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"string"})})," - (Choose between ",(0,t.jsx)(n.code,{children:"eip155"}),", ",(0,t.jsx)(n.code,{children:"solana"})," & ",(0,t.jsx)(n.code,{children:"other"}),")"]})," ",(0,t.jsx)(n.strong,{children:"or"})," ",(0,t.jsxs)("li",{children:[(0,t.jsx)(n.strong,{children:(0,t.jsx)(n.code,{children:"ChainNamespaceType"})})," - (Choose between ",(0,t.jsx)(n.code,{children:"CHAIN_NAMESPACES.EIP155"}),", ",(0,t.jsx)(n.code,{children:"CHAIN_NAMESPACES.SOLANA"})," & ",(0,t.jsx)(n.code,{children:"CHAIN_NAMESPACES.OTHER"}),")"]})]})}),(0,t.jsxs)(n.td,{children:["The namespace of your preferred chain. Checkout ",(0,t.jsx)(n.a,{href:"/sdk/helper-sdks/providers",children:"Providers SDK Reference"})," for understanding RPC Calls."]}),(0,t.jsx)(n.td,{children:"No"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"chainId"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"string"})}),(0,t.jsxs)(n.td,{children:["The chain id of the selected blockchain in ",(0,t.jsx)(n.code,{children:"hex"})]}),(0,t.jsx)(n.td,{children:"No"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"rpcTarget"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"string"})}),(0,t.jsx)(n.td,{children:(0,t.jsxs)("ul",{children:[(0,t.jsxs)("li",{children:["RPC Target URL for the selected ",(0,t.jsx)(n.code,{children:"chainNamespace"})," & ",(0,t.jsx)(n.code,{children:"chainId"}),"."]}),(0,t.jsx)("li",{children:" We provide a default RPC Target for certain blockchains, but due to congestion it might be slow hence it is recommended to provide your own RPC Target URL."})]})}),(0,t.jsx)(n.td,{children:"No"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"wsTarget"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"string"})}),(0,t.jsx)(n.td,{children:"Web socket target URL for the chain"}),(0,t.jsx)(n.td,{children:"Yes"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"displayName"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"string"})}),(0,t.jsx)(n.td,{children:"Display Name for the chain"}),(0,t.jsx)(n.td,{children:"No"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"blockExplorer"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"string"})}),(0,t.jsxs)(n.td,{children:["Blockchain's explorer URL. (eg: ",(0,t.jsx)(n.code,{children:"https://etherscan.io"}),")"]}),(0,t.jsx)(n.td,{children:"No"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"ticker"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"string"})}),(0,t.jsxs)(n.td,{children:["Default currency ticker of the network (e.g: ",(0,t.jsx)(n.code,{children:"ETH"}),")"]}),(0,t.jsx)(n.td,{children:"No"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"tickerName"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"string"})}),(0,t.jsxs)(n.td,{children:["Name for currency ticker (e.g: ",(0,t.jsx)(n.code,{children:"Ethereum"}),")"]}),(0,t.jsx)(n.td,{children:"No"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"decimals"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"number"})}),(0,t.jsxs)(n.td,{children:["Number of decimals for the currency ticker (e.g: ",(0,t.jsx)(n.code,{children:"18"}),")"]}),(0,t.jsx)(n.td,{children:"Yes"})]})]})]})}),(0,t.jsx)(s.Z,{value:"type",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:'declare const CHAIN_NAMESPACES: {\n  readonly EIP155: "eip155";\n  readonly SOLANA: "solana";\n  readonly OTHER: "other";\n};\n\ndeclare type ChainNamespaceType = typeof CHAIN_NAMESPACES[keyof typeof CHAIN_NAMESPACES];\ndeclare type CustomChainConfig = {\n  chainNamespace: ChainNamespaceType;\n  /**\n   * The chain id of the chain\n   */\n  chainId: string;\n  /**\n   * RPC target Url for the chain\n   */\n  rpcTarget: string;\n  /**\n   * web socket target Url for the chain\n   */\n  wsTarget?: string;\n  /**\n   * Display Name for the chain\n   */\n  displayName: string;\n  /**\n   * Url of the block explorer\n   */\n  blockExplorer: string;\n  /**\n   * Default currency ticker of the network (e.g: ETH)\n   */\n  ticker: string;\n  /**\n   * Name for currency ticker (e.g: `Ethereum`)\n   */\n  tickerName: string;\n  /**\n   * Number of decimals for the currency ticker (e.g: 18)\n   */\n  decimals?: number;\n};\n'})})})]}),"\n",(0,t.jsx)(n.h2,{id:"switch-the-chain",children:"Switch the chain"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"switchChain(params: {chainId: string;})"})}),"\n",(0,t.jsx)(n.p,{children:"Switch to one of the added chains"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Variable"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{children:"Description"}),(0,t.jsx)(n.th,{children:"Mandatory"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"chainId"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"string"})}),(0,t.jsx)(n.td,{children:"id of the chain to switch to"}),(0,t.jsx)(n.td,{children:"yes"})]})})]}),"\n",(0,t.jsx)(n.h2,{id:"logging-out-the-user",children:"Logging out the user"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:"logout()"})}),"\n",(0,t.jsx)(n.p,{children:"Logs out the user and clears the session."}),"\n",(0,t.jsx)(n.admonition,{title:"Note",type:"tip",children:(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"@web3auth/single-factor-auth-react-native"})," SDK only works for users who have ",(0,t.jsx)(n.strong,{children:"not enabled MFA"}),"."]})}),"\n",(0,t.jsx)(n.admonition,{title:"MFA enabled users",type:"danger",children:(0,t.jsxs)(n.p,{children:["For MFA enabled users, you'll see ",(0,t.jsx)(n.code,{children:'Error("User has already enabled mfa, please use the @webauth/webauth-web sdk for login with mfa");'})]})}),"\n",(0,t.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,t.jsxs)(a.Z,{defaultValue:"bare",values:[{label:"Expo app with Auth0 authentication",value:"expo"},{label:"Bare app with Firebase authentication",value:"bare"}],children:[(0,t.jsx)(s.Z,{value:"expo",children:(0,t.jsx)(l,{})}),(0,t.jsx)(s.Z,{value:"bare",children:(0,t.jsx)(d,{})})]})]})}function g(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(f,{...e})}):f(e)}},85162:(e,n,r)=>{r.d(n,{Z:()=>a});r(67294);var t=r(36905);const i={tabItem:"tabItem_Ymn6"};var s=r(85893);function a(e){let{children:n,hidden:r,className:a}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,t.Z)(i.tabItem,a),hidden:r,children:n})}},74866:(e,n,r)=>{r.d(n,{Z:()=>w});var t=r(67294),i=r(36905),s=r(12466),a=r(16550),c=r(20469),d=r(91980),o=r(67392),l=r(50012);function h(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:n,children:r}=e;return(0,t.useMemo)((()=>{const e=n??function(e){return h(e).map((e=>{let{props:{value:n,label:r,attributes:t,default:i}}=e;return{value:n,label:r,attributes:t,default:i}}))}(r);return function(e){const n=(0,o.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,r])}function x(e){let{value:n,tabValues:r}=e;return r.some((e=>e.value===n))}function j(e){let{queryString:n=!1,groupId:r}=e;const i=(0,a.k6)(),s=function(e){let{queryString:n=!1,groupId:r}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:n,groupId:r});return[(0,d._X)(s),(0,t.useCallback)((e=>{if(!s)return;const n=new URLSearchParams(i.location.search);n.set(s,e),i.replace({...i.location,search:n.toString()})}),[s,i])]}function p(e){const{defaultValue:n,queryString:r=!1,groupId:i}=e,s=u(e),[a,d]=(0,t.useState)((()=>function(e){let{defaultValue:n,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!x({value:n,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const t=r.find((e=>e.default))??r[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:n,tabValues:s}))),[o,h]=j({queryString:r,groupId:i}),[p,f]=function(e){let{groupId:n}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(n),[i,s]=(0,l.Nk)(r);return[i,(0,t.useCallback)((e=>{r&&s.set(e)}),[r,s])]}({groupId:i}),g=(()=>{const e=o??p;return x({value:e,tabValues:s})?e:null})();(0,c.Z)((()=>{g&&d(g)}),[g]);return{selectedValue:a,selectValue:(0,t.useCallback)((e=>{if(!x({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);d(e),h(e),f(e)}),[h,f,s]),tabValues:s}}var f=r(72389);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var b=r(85893);function m(e){let{className:n,block:r,selectedValue:t,selectValue:a,tabValues:c}=e;const d=[],{blockElementScrollPositionUntilNextRender:o}=(0,s.o5)(),l=e=>{const n=e.currentTarget,r=d.indexOf(n),i=c[r].value;i!==t&&(o(n),a(i))},h=e=>{let n=null;switch(e.key){case"Enter":l(e);break;case"ArrowRight":{const r=d.indexOf(e.currentTarget)+1;n=d[r]??d[0];break}case"ArrowLeft":{const r=d.indexOf(e.currentTarget)-1;n=d[r]??d[d.length-1];break}}n?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":r},n),children:c.map((e=>{let{value:n,label:r,attributes:s}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:t===n?0:-1,"aria-selected":t===n,ref:e=>d.push(e),onKeyDown:h,onClick:l,...s,className:(0,i.Z)("tabs__item",g.tabItem,s?.className,{"tabs__item--active":t===n}),children:r??n},n)}))})}function v(e){let{lazy:n,children:r,selectedValue:i}=e;const s=(Array.isArray(r)?r:[r]).filter(Boolean);if(n){const e=s.find((e=>e.props.value===i));return e?(0,t.cloneElement)(e,{className:"margin-top--md"}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:s.map(((e,n)=>(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==i})))})}function y(e){const n=p(e);return(0,b.jsxs)("div",{className:(0,i.Z)("tabs-container",g.tabList),children:[(0,b.jsx)(m,{...e,...n}),(0,b.jsx)(v,{...e,...n})]})}function w(e){const n=(0,f.Z)();return(0,b.jsx)(y,{...e,children:h(e.children)},String(n))}},11151:(e,n,r)=>{r.d(n,{Z:()=>c,a:()=>a});var t=r(67294);const i={},s=t.createContext(i);function a(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);