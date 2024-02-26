"use strict";(self.webpackChunkweb3auth_docs=self.webpackChunkweb3auth_docs||[]).push([[69744],{13708:(e,n,t)=>{t.d(n,{ZP:()=>s});var r=t(85893),i=t(11151);function a(e){const n={a:"a",admonition:"admonition",code:"code",li:"li",p:"p",ul:"ul",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:["In this reference, we're using the ",(0,r.jsx)(n.code,{children:"Nethereum"})," library to demonstrate how to make blockchain calls using it with Web3Auth."]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Download the latest ",(0,r.jsx)(n.code,{children:"net461dllsAOT.zip"})," package from Nethereum's ",(0,r.jsx)(n.a,{href:"https://github.com/Nethereum/Nethereum/releases",children:"latest release"})]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Extract and the rename the folder to ",(0,r.jsx)(n.code,{children:"NethereumLib"})," for easy identification."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Move the folder to the ",(0,r.jsx)(n.code,{children:"Assets/Plugins"})," folder of your Unity project."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["You might have to delete a few files from the ",(0,r.jsx)(n.code,{children:"NethereumLib"})," folder, if you're getting any errors while building the project. For our\nimplementation, we deleted the following files: ",(0,r.jsx)(n.code,{children:"Newtonsoft.Json.dll"}),", all the files starting with ",(0,r.jsx)(n.code,{children:"System.*"}),", ",(0,r.jsx)(n.code,{children:"UnityEngine.dll"}),",\n",(0,r.jsx)(n.code,{children:"Nethereum.Web3Lite.dll"}),", ",(0,r.jsx)(n.code,{children:"Nethereum.HdWallet.dll"}),", ",(0,r.jsx)(n.code,{children:"NBitcoin.dll"}),", ",(0,r.jsx)(n.code,{children:"Nethereum.RPC.Reactive.dll"}),"."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.admonition,{type:"info",children:[(0,r.jsxs)(n.p,{children:["We have followed ",(0,r.jsx)(n.a,{href:"https://docs.nethereum.com/en/latest/unity3d-introduction/",children:"this guide"})," to set up the ",(0,r.jsx)(n.code,{children:"Nethereum"})," package in our app. You can check\ntheir sample applications as well for a decent reference."]}),(0,r.jsxs)(n.p,{children:["You can also check the ",(0,r.jsx)(n.a,{href:"/examples?product=Plug+and+Play&sdk=Plug+and+Play+Unity+SDK",children:"Web3Auth Unity Sample Apps"}),", where we have added the required\npackages."]})]})]})}function s(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},36216:(e,n,t)=>{t.d(n,{ZP:()=>s});var r=t(85893),i=t(11151);function a(e){const n={code:"code",pre:"pre",...(0,i.a)(),...e.components};return(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-cs",children:'public void getBalance() {\n  if (account == null) {\n    Debug.Log("Please Login First");\n    return;\n  }\n  // highlight-next-line\n  var balance = web3.Eth.GetBalance.SendRequestAsync(account.Address).Result.Value;\n\n  Debug.Log(balance);\n}\n'})})}function s(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},17648:(e,n,t)=>{t.d(n,{ZP:()=>s});var r=t(85893),i=t(11151);function a(e){const n={code:"code",pre:"pre",...(0,i.a)(),...e.components};return(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-cs",children:'using Nethereum.Web3;\nusing Nethereum.Util;\nusing Nethereum.Signer;\nusing Nethereum.Hex.HexConvertors.Extensions;\nusing Nethereum.ABI.Encoders;\nusing Nethereum.Hex.HexTypes;\nusing Nethereum.Web3.Accounts;\nusing Nethereum.Web3.Accounts.Managed;\n\npublic class Web3AuthScript : MonoBehaviour\n{\n    Web3 web3;\n    Web3Auth web3Auth;\n    private string privateKey;\n    private Account account;\n\n    const string rpcURL = "" // EVM chain RPC URL\n\n    void Start()\n    {\n\n      web3Auth = GetComponent<Web3Auth>();\n\n      // Add Web3Auth Unity SDK Initialisation Code here\n\n      web3Auth.onLogin += onLogin;\n      web3Auth.onLogout += onLogout;\n      web3 = new Web3(rpcURL);\n    }\n\n    private void onLogin(Web3AuthResponse response)\n    {\n        privateKey = response.privKey;\n        var newAccount = new Account(privateKey);\n        account = newAccount;\n    }\n// ...\n}\n'})})}function s(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},7950:(e,n,t)=>{t.d(n,{ZP:()=>s});var r=t(85893),i=t(11151);function a(e){const n={a:"a",admonition:"admonition",code:"code",li:"li",p:"p",ul:"ul",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:["In this reference, we're using the ",(0,r.jsx)(n.code,{children:"Nethereum"})," library to demonstrate how to make blockchain calls using it with Web3Auth."]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Download the latest ",(0,r.jsx)(n.code,{children:"net461dllsAOT.zip"})," package from Nethereum's ",(0,r.jsx)(n.a,{href:"https://github.com/Nethereum/Nethereum/releases",children:"latest release"})]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Extract and the rename the folder to ",(0,r.jsx)(n.code,{children:"NethereumLib"})," for easy identification."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Move the folder to the ",(0,r.jsx)(n.code,{children:"Assets/Plugins"})," folder of your Unity project."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["You might have to delete a few files from the ",(0,r.jsx)(n.code,{children:"NethereumLib"})," folder, if you're getting any errors while building the project. For our\nimplementation, we deleted the following files: ",(0,r.jsx)(n.code,{children:"Newtonsoft.Json.dll"}),", all the files starting with ",(0,r.jsx)(n.code,{children:"System.*"}),", ",(0,r.jsx)(n.code,{children:"UnityEngine.dll"}),",\n",(0,r.jsx)(n.code,{children:"Nethereum.Web3Lite.dll"}),", ",(0,r.jsx)(n.code,{children:"Nethereum.HdWallet.dll"}),", ",(0,r.jsx)(n.code,{children:"NBitcoin.dll"}),", ",(0,r.jsx)(n.code,{children:"Nethereum.RPC.Reactive.dll"}),"."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.admonition,{type:"info",children:[(0,r.jsxs)(n.p,{children:["We have followed ",(0,r.jsx)(n.a,{href:"https://docs.nethereum.com/en/latest/unity3d-introduction/",children:"this guide"})," to set up the ",(0,r.jsx)(n.code,{children:"Nethereum"})," package in our app. You can check\ntheir sample applications as well for a decent reference."]}),(0,r.jsxs)(n.p,{children:["You can also check the ",(0,r.jsx)(n.a,{href:"/examples?product=Plug+and+Play&sdk=Plug+and+Play+Unity+SDK",children:"Web3Auth Unity Sample Apps"}),", where we have added the required\npackages."]})]})]})}function s(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},77380:(e,n,t)=>{t.d(n,{ZP:()=>s});var r=t(85893),i=t(11151);function a(e){const n={code:"code",pre:"pre",...(0,i.a)(),...e.components};return(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-cs",children:'public async void sendTransaction() {\n  if (account == null) {\n    Debug.Log("Please Login First");\n    return;\n  }\n  // highlight-start\n  var toAddress = "0x2E464..82D5057fB507Cc21";\n  var transaction = await web3.TransactionManager.SendTransactionAsync(account.Address, toAddress, new Nethereum.Hex.HexTypes.HexBigInteger(1));\n  // highlight-end\n\n  Debug.Log(transaction);\n}\n'})})}function s(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},51031:(e,n,t)=>{t.d(n,{ZP:()=>s});var r=t(85893),i=t(11151);function a(e){const n={code:"code",pre:"pre",...(0,i.a)(),...e.components};return(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-cs",children:'public void signMessage() {\n  if (account == null) {\n    Debug.Log("Please Login First");\n    return;\n  }\n  // highlight-start\n  var msg = "test message 19/01/2023 02:55PM";\n  var signer = new EthereumMessageSigner();\n  var signature = signer.EncodeUTF8AndSign(msg, new EthECKey(privateKey));\n  // highlight-end\n\n  Debug.Log(signature);\n}\n'})})}function s(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},49737:(e,n,t)=>{t.d(n,{ZP:()=>s});var r=t(85893),i=t(11151);function a(e){const n={code:"code",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:["You get the user information after a successful login returned from the ",(0,r.jsx)(n.code,{children:"login"})," method. The ",(0,r.jsx)(n.code,{children:"userInfo"})," object contains the user information, whereas\nthe ",(0,r.jsx)(n.code,{children:"privKey"})," object contains the private key that can be used to make blockchain calls."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-cs",children:"private string userInfo;\n\nprivate void onLogin(Web3AuthResponse response)\n{\n  userInfo = JsonConvert.SerializeObject(response.userInfo, Formatting.Indented);\n}\n"})})]})}function s(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},99974:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>j,contentTitle:()=>b,default:()=>w,frontMatter:()=>g,metadata:()=>x,toc:()=>f});var r=t(85893),i=t(11151),a=t(7950),s=t(13708),o=t(49737),c=t(36216),l=t(17648),u=t(51031),h=t(77380),d=t(74866),m=t(85162),p=t(30831);const g={title:"Integrate Web3Auth with the Ethereum Blockchain in Unity",sidebar_label:"Unity",image:"content-hub/guides/banners/unity.png",displayed_sidebar:"docs",keywords:["unity","ethereum","web3auth","authentication","blockchain"],description:"Integrate Web3Auth with the Ethereum Blockchain in Unity | Documentation - Web3Auth"},b=void 0,x={id:"connect-blockchain/evm/ethereum/unity",title:"Integrate Web3Auth with the Ethereum Blockchain in Unity",description:"Integrate Web3Auth with the Ethereum Blockchain in Unity | Documentation - Web3Auth",source:"@site/docs/connect-blockchain/evm/ethereum/unity.mdx",sourceDirName:"connect-blockchain/evm/ethereum",slug:"/connect-blockchain/evm/ethereum/unity",permalink:"/docs/connect-blockchain/evm/ethereum/unity",draft:!1,unlisted:!1,editUrl:"https://github.com/web3auth/web3auth-docs/edit/master/docs/connect-blockchain/evm/ethereum/unity.mdx",tags:[],version:"current",frontMatter:{title:"Integrate Web3Auth with the Ethereum Blockchain in Unity",sidebar_label:"Unity",image:"content-hub/guides/banners/unity.png",displayed_sidebar:"docs",keywords:["unity","ethereum","web3auth","authentication","blockchain"],description:"Integrate Web3Auth with the Ethereum Blockchain in Unity | Documentation - Web3Auth"},sidebar:"docs",previous:{title:"Flutter",permalink:"/docs/connect-blockchain/evm/ethereum/flutter"},next:{title:"Integrate Web3Auth with the Arbitrum Blockchain",permalink:"/docs/connect-blockchain/evm/arbitrum/"}},j={},f=[{value:"Installation",id:"installation",level:2},{value:"Chain Details for Ethereum",id:"chain-details-for-ethereum",level:2},{value:"Initialize",id:"initialize",level:2},{value:"Get User Info",id:"get-user-info",level:2},{value:"Get Account",id:"get-account",level:2},{value:"Get Balance",id:"get-balance",level:2},{value:"Sign a message",id:"sign-a-message",level:2},{value:"Send Transaction",id:"send-transaction",level:2}];function v(e){const n={a:"a",code:"code",h2:"h2",li:"li",p:"p",ul:"ul",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(p.Z,{title:"Integrate Web3Auth with the Ethereum Blockchain in Unity",description:"Integrate Web3Auth with the Ethereum Blockchain in Unity | Documentation - Web3Auth",image:"https://web3auth.io/docs/content-hub/guides/banners/ethereum.png",slug:"/connect-blockchain/evm/ethereum/unity"}),"\n",(0,r.jsxs)(n.p,{children:["While using the Web3Auth Unity SDK, you get the private key within the user scope. This private key can interact with the\n",(0,r.jsx)(n.a,{href:"https://nethereum.com/",children:"Nethereum Library"})," to make EVM based blockchain calls, like getting user's ",(0,r.jsx)(n.code,{children:"account"}),", fetch ",(0,r.jsx)(n.code,{children:"balance"}),", ",(0,r.jsx)(n.code,{children:"sign transaction"}),",\n",(0,r.jsx)(n.code,{children:"send transaction"}),", ",(0,r.jsx)(n.code,{children:"read"})," from and ",(0,r.jsx)(n.code,{children:"write"})," to the smart contract, etc. We have highlighted a few here for getting you started quickly on that."]}),"\n",(0,r.jsx)(n.h2,{id:"installation",children:"Installation"}),"\n",(0,r.jsx)(a.ZP,{}),"\n",(0,r.jsx)(n.h2,{id:"chain-details-for-ethereum",children:"Chain Details for Ethereum"}),"\n",(0,r.jsxs)(d.Z,{defaultValue:"mainnet",values:[{label:"Mainnet",value:"mainnet"},{label:"Testnet",value:"testnet"}],children:[(0,r.jsx)(m.Z,{value:"mainnet",children:(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Chain ID: 0x1"}),"\n",(0,r.jsxs)(n.li,{children:["Public RPC URL: ",(0,r.jsx)(n.a,{href:"https://rpc.ankr.com/eth",children:"https://rpc.ankr.com/eth"})," (Avoid using public rpcTarget in production, use services like Infura, Quicknode etc)"]}),"\n",(0,r.jsx)(n.li,{children:"Display Name: Ethereum Mainnet"}),"\n",(0,r.jsxs)(n.li,{children:["Block Explorer Link: ",(0,r.jsx)(n.a,{href:"https://etherscan.io",children:"https://etherscan.io"})]}),"\n",(0,r.jsx)(n.li,{children:"Ticker: ETH"}),"\n",(0,r.jsx)(n.li,{children:"Ticker Name: Ethereum"}),"\n"]})}),(0,r.jsx)(m.Z,{value:"testnet",children:(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Chain ID: 0xaa36a7"}),"\n",(0,r.jsxs)(n.li,{children:["Public RPC URL: ",(0,r.jsx)(n.a,{href:"https://rpc.ankr.com/eth_sepolia",children:"https://rpc.ankr.com/eth_sepolia"})," (Avoid using public rpcTarget in production, use services like Infura, Quicknode etc)"]}),"\n",(0,r.jsx)(n.li,{children:"Display Name: Ethereum Sepolia Testnet"}),"\n",(0,r.jsxs)(n.li,{children:["Block Explorer Link: ",(0,r.jsx)(n.a,{href:"https://sepolia.etherscan.io",children:"https://sepolia.etherscan.io"})]}),"\n",(0,r.jsx)(n.li,{children:"Ticker: ETH"}),"\n",(0,r.jsx)(n.li,{children:"Ticker Name: Sepolia"}),"\n"]})})]}),"\n",(0,r.jsx)(n.h2,{id:"initialize",children:"Initialize"}),"\n",(0,r.jsx)(l.ZP,{}),"\n",(0,r.jsx)(n.h2,{id:"get-user-info",children:"Get User Info"}),"\n",(0,r.jsx)(o.ZP,{}),"\n",(0,r.jsx)(n.h2,{id:"get-account",children:"Get Account"}),"\n",(0,r.jsx)(s.ZP,{}),"\n",(0,r.jsx)(n.h2,{id:"get-balance",children:"Get Balance"}),"\n",(0,r.jsx)(c.ZP,{}),"\n",(0,r.jsx)(n.h2,{id:"sign-a-message",children:"Sign a message"}),"\n",(0,r.jsx)(u.ZP,{}),"\n",(0,r.jsx)(n.h2,{id:"send-transaction",children:"Send Transaction"}),"\n",(0,r.jsx)(h.ZP,{})]})}function w(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(v,{...e})}):v(e)}},85162:(e,n,t)=>{t.d(n,{Z:()=>s});t(67294);var r=t(36905);const i={tabItem:"tabItem_Ymn6"};var a=t(85893);function s(e){let{children:n,hidden:t,className:s}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,r.Z)(i.tabItem,s),hidden:t,children:n})}},74866:(e,n,t)=>{t.d(n,{Z:()=>y});var r=t(67294),i=t(36905),a=t(12466),s=t(16550),o=t(20469),c=t(91980),l=t(67392),u=t(50012);function h(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function d(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return h(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:i}}=e;return{value:n,label:t,attributes:r,default:i}}))}(t);return function(e){const n=(0,l.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function m(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function p(e){let{queryString:n=!1,groupId:t}=e;const i=(0,s.k6)(),a=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,c._X)(a),(0,r.useCallback)((e=>{if(!a)return;const n=new URLSearchParams(i.location.search);n.set(a,e),i.replace({...i.location,search:n.toString()})}),[a,i])]}function g(e){const{defaultValue:n,queryString:t=!1,groupId:i}=e,a=d(e),[s,c]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!m({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:a}))),[l,h]=p({queryString:t,groupId:i}),[g,b]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[i,a]=(0,u.Nk)(t);return[i,(0,r.useCallback)((e=>{t&&a.set(e)}),[t,a])]}({groupId:i}),x=(()=>{const e=l??g;return m({value:e,tabValues:a})?e:null})();(0,o.Z)((()=>{x&&c(x)}),[x]);return{selectedValue:s,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);c(e),h(e),b(e)}),[h,b,a]),tabValues:a}}var b=t(72389);const x={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var j=t(85893);function f(e){let{className:n,block:t,selectedValue:r,selectValue:s,tabValues:o}=e;const c=[],{blockElementScrollPositionUntilNextRender:l}=(0,a.o5)(),u=e=>{const n=e.currentTarget,t=c.indexOf(n),i=o[t].value;i!==r&&(l(n),s(i))},h=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const t=c.indexOf(e.currentTarget)+1;n=c[t]??c[0];break}case"ArrowLeft":{const t=c.indexOf(e.currentTarget)-1;n=c[t]??c[c.length-1];break}}n?.focus()};return(0,j.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":t},n),children:o.map((e=>{let{value:n,label:t,attributes:a}=e;return(0,j.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>c.push(e),onKeyDown:h,onClick:u,...a,className:(0,i.Z)("tabs__item",x.tabItem,a?.className,{"tabs__item--active":r===n}),children:t??n},n)}))})}function v(e){let{lazy:n,children:t,selectedValue:i}=e;const a=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=a.find((e=>e.props.value===i));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,j.jsx)("div",{className:"margin-top--md",children:a.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==i})))})}function w(e){const n=g(e);return(0,j.jsxs)("div",{className:(0,i.Z)("tabs-container",x.tabList),children:[(0,j.jsx)(f,{...e,...n}),(0,j.jsx)(v,{...e,...n})]})}function y(e){const n=(0,b.Z)();return(0,j.jsx)(w,{...e,children:h(e.children)},String(n))}},30831:(e,n,t)=>{t.d(n,{Z:()=>a});var r=t(35742),i=t(85893);function a(e){const{title:n,description:t,image:a,slug:s,keywords:o}=e;return(0,i.jsxs)(r.Z,{children:[n?(0,i.jsxs)("title",{children:[n," | Web3Auth "]}):(0,i.jsx)("title",{children:"Documentation | Web3Auth"}),t?(0,i.jsx)("meta",{name:"description",content:t}):(0,i.jsx)("meta",{name:"description",content:"Web3Auth is simple, non-custodial auth infrastructure that enables Web3 wallets and applications to provide seamless user logins for both mainstream and native Web3 users."}),o?o.length>0&&(0,i.jsx)("meta",{name:"keywords",content:`web3auth, blockchain, solana, ethereum, multi party computation, ${o.join(", ")}`}):(0,i.jsx)("meta",{name:"keywords",content:"web3auth, blockchain, web3, web3.js, ethers.js, solana, ethereum, passwordless, passwordless magic link, multi party computation, tkey, torus, web3 auth, auth"}),(0,i.jsx)("meta",{property:"og:site_name",content:"Web3Auth"}),(0,i.jsx)("meta",{property:"og:type",content:"website"}),n?(0,i.jsx)("meta",{property:"og:title",content:n}):(0,i.jsx)("meta",{property:"og:title",content:"Documentation | Web3Auth"}),t?(0,i.jsx)("meta",{property:"og:description",content:t}):(0,i.jsx)("meta",{property:"og:description",content:"Web3Auth is simple, non-custodial auth infrastructure that enables Web3 wallets and applications to provide seamless user logins for both mainstream and native Web3 users."}),s?(0,i.jsx)("meta",{property:"og:url",content:`https://web3auth.io/docs${s}`}):(0,i.jsx)("meta",{property:"og:url",content:"https://web3auth.io/docs"}),a?(0,i.jsx)("meta",{property:"og:image",content:a}):(0,i.jsx)("meta",{property:"og:image",content:"http://web3auth.io/docs/images/docs-meta-cards/documentation-card.png"}),(0,i.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,i.jsx)("meta",{name:"twitter:site",content:"@Web3Auth"}),(0,i.jsx)("meta",{name:"twitter:creator",content:"@Web3Auth"}),a?(0,i.jsx)("meta",{name:"twitter:image",content:a}):(0,i.jsx)("meta",{name:"twitter:image",content:"http://web3auth.io/docs/images/docs-meta-cards/documentation-card.png"}),n?(0,i.jsx)("meta",{itemProp:"name",content:n}):(0,i.jsx)("meta",{itemProp:"name",content:"Documentation | Web3Auth"}),t?(0,i.jsx)("meta",{itemProp:"description",content:t}):(0,i.jsx)("meta",{itemProp:"description",content:"Web3Auth is simple, non-custodial auth infrastructure that enables Web3 wallets and applications to provide seamless user logins for both mainstream and native Web3 users."}),a?(0,i.jsx)("meta",{itemProp:"image",content:a}):(0,i.jsx)("meta",{itemProp:"image",content:"http://web3auth.io/docs/images/docs-meta-cards/documentation-card.png"}),(0,i.jsx)("meta",{name:"author",content:"Web3Auth"})]})}},11151:(e,n,t)=>{t.d(n,{Z:()=>o,a:()=>s});var r=t(67294);const i={},a=r.createContext(i);function s(e){const n=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),r.createElement(a.Provider,{value:n},e.children)}}}]);