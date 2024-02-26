"use strict";(self.webpackChunkweb3auth_docs=self.webpackChunkweb3auth_docs||[]).push([[26144],{13708:(e,n,t)=>{t.d(n,{ZP:()=>r});var a=t(85893),i=t(11151);function s(e){const n={a:"a",admonition:"admonition",code:"code",li:"li",p:"p",ul:"ul",...(0,i.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.p,{children:["In this reference, we're using the ",(0,a.jsx)(n.code,{children:"Nethereum"})," library to demonstrate how to make blockchain calls using it with Web3Auth."]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["Download the latest ",(0,a.jsx)(n.code,{children:"net461dllsAOT.zip"})," package from Nethereum's ",(0,a.jsx)(n.a,{href:"https://github.com/Nethereum/Nethereum/releases",children:"latest release"})]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["Extract and the rename the folder to ",(0,a.jsx)(n.code,{children:"NethereumLib"})," for easy identification."]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["Move the folder to the ",(0,a.jsx)(n.code,{children:"Assets/Plugins"})," folder of your Unity project."]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["You might have to delete a few files from the ",(0,a.jsx)(n.code,{children:"NethereumLib"})," folder, if you're getting any errors while building the project. For our\nimplementation, we deleted the following files: ",(0,a.jsx)(n.code,{children:"Newtonsoft.Json.dll"}),", all the files starting with ",(0,a.jsx)(n.code,{children:"System.*"}),", ",(0,a.jsx)(n.code,{children:"UnityEngine.dll"}),",\n",(0,a.jsx)(n.code,{children:"Nethereum.Web3Lite.dll"}),", ",(0,a.jsx)(n.code,{children:"Nethereum.HdWallet.dll"}),", ",(0,a.jsx)(n.code,{children:"NBitcoin.dll"}),", ",(0,a.jsx)(n.code,{children:"Nethereum.RPC.Reactive.dll"}),"."]}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(n.admonition,{type:"info",children:[(0,a.jsxs)(n.p,{children:["We have followed ",(0,a.jsx)(n.a,{href:"https://docs.nethereum.com/en/latest/unity3d-introduction/",children:"this guide"})," to set up the ",(0,a.jsx)(n.code,{children:"Nethereum"})," package in our app. You can check\ntheir sample applications as well for a decent reference."]}),(0,a.jsxs)(n.p,{children:["You can also check the ",(0,a.jsx)(n.a,{href:"/examples?product=Plug+and+Play&sdk=Plug+and+Play+Unity+SDK",children:"Web3Auth Unity Sample Apps"}),", where we have added the required\npackages."]})]})]})}function r(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(s,{...e})}):s(e)}},36216:(e,n,t)=>{t.d(n,{ZP:()=>r});var a=t(85893),i=t(11151);function s(e){const n={code:"code",pre:"pre",...(0,i.a)(),...e.components};return(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-cs",children:'public void getBalance() {\n  if (account == null) {\n    Debug.Log("Please Login First");\n    return;\n  }\n  // highlight-next-line\n  var balance = web3.Eth.GetBalance.SendRequestAsync(account.Address).Result.Value;\n\n  Debug.Log(balance);\n}\n'})})}function r(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(s,{...e})}):s(e)}},17648:(e,n,t)=>{t.d(n,{ZP:()=>r});var a=t(85893),i=t(11151);function s(e){const n={code:"code",pre:"pre",...(0,i.a)(),...e.components};return(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-cs",children:'using Nethereum.Web3;\nusing Nethereum.Util;\nusing Nethereum.Signer;\nusing Nethereum.Hex.HexConvertors.Extensions;\nusing Nethereum.ABI.Encoders;\nusing Nethereum.Hex.HexTypes;\nusing Nethereum.Web3.Accounts;\nusing Nethereum.Web3.Accounts.Managed;\n\npublic class Web3AuthScript : MonoBehaviour\n{\n    Web3 web3;\n    Web3Auth web3Auth;\n    private string privateKey;\n    private Account account;\n\n    const string rpcURL = "" // EVM chain RPC URL\n\n    void Start()\n    {\n\n      web3Auth = GetComponent<Web3Auth>();\n\n      // Add Web3Auth Unity SDK Initialisation Code here\n\n      web3Auth.onLogin += onLogin;\n      web3Auth.onLogout += onLogout;\n      web3 = new Web3(rpcURL);\n    }\n\n    private void onLogin(Web3AuthResponse response)\n    {\n        privateKey = response.privKey;\n        var newAccount = new Account(privateKey);\n        account = newAccount;\n    }\n// ...\n}\n'})})}function r(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(s,{...e})}):s(e)}},7950:(e,n,t)=>{t.d(n,{ZP:()=>r});var a=t(85893),i=t(11151);function s(e){const n={a:"a",admonition:"admonition",code:"code",li:"li",p:"p",ul:"ul",...(0,i.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.p,{children:["In this reference, we're using the ",(0,a.jsx)(n.code,{children:"Nethereum"})," library to demonstrate how to make blockchain calls using it with Web3Auth."]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["Download the latest ",(0,a.jsx)(n.code,{children:"net461dllsAOT.zip"})," package from Nethereum's ",(0,a.jsx)(n.a,{href:"https://github.com/Nethereum/Nethereum/releases",children:"latest release"})]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["Extract and the rename the folder to ",(0,a.jsx)(n.code,{children:"NethereumLib"})," for easy identification."]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["Move the folder to the ",(0,a.jsx)(n.code,{children:"Assets/Plugins"})," folder of your Unity project."]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:["You might have to delete a few files from the ",(0,a.jsx)(n.code,{children:"NethereumLib"})," folder, if you're getting any errors while building the project. For our\nimplementation, we deleted the following files: ",(0,a.jsx)(n.code,{children:"Newtonsoft.Json.dll"}),", all the files starting with ",(0,a.jsx)(n.code,{children:"System.*"}),", ",(0,a.jsx)(n.code,{children:"UnityEngine.dll"}),",\n",(0,a.jsx)(n.code,{children:"Nethereum.Web3Lite.dll"}),", ",(0,a.jsx)(n.code,{children:"Nethereum.HdWallet.dll"}),", ",(0,a.jsx)(n.code,{children:"NBitcoin.dll"}),", ",(0,a.jsx)(n.code,{children:"Nethereum.RPC.Reactive.dll"}),"."]}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(n.admonition,{type:"info",children:[(0,a.jsxs)(n.p,{children:["We have followed ",(0,a.jsx)(n.a,{href:"https://docs.nethereum.com/en/latest/unity3d-introduction/",children:"this guide"})," to set up the ",(0,a.jsx)(n.code,{children:"Nethereum"})," package in our app. You can check\ntheir sample applications as well for a decent reference."]}),(0,a.jsxs)(n.p,{children:["You can also check the ",(0,a.jsx)(n.a,{href:"/examples?product=Plug+and+Play&sdk=Plug+and+Play+Unity+SDK",children:"Web3Auth Unity Sample Apps"}),", where we have added the required\npackages."]})]})]})}function r(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(s,{...e})}):s(e)}},77380:(e,n,t)=>{t.d(n,{ZP:()=>r});var a=t(85893),i=t(11151);function s(e){const n={code:"code",pre:"pre",...(0,i.a)(),...e.components};return(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-cs",children:'public async void sendTransaction() {\n  if (account == null) {\n    Debug.Log("Please Login First");\n    return;\n  }\n  // highlight-start\n  var toAddress = "0x2E464..82D5057fB507Cc21";\n  var transaction = await web3.TransactionManager.SendTransactionAsync(account.Address, toAddress, new Nethereum.Hex.HexTypes.HexBigInteger(1));\n  // highlight-end\n\n  Debug.Log(transaction);\n}\n'})})}function r(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(s,{...e})}):s(e)}},51031:(e,n,t)=>{t.d(n,{ZP:()=>r});var a=t(85893),i=t(11151);function s(e){const n={code:"code",pre:"pre",...(0,i.a)(),...e.components};return(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-cs",children:'public void signMessage() {\n  if (account == null) {\n    Debug.Log("Please Login First");\n    return;\n  }\n  // highlight-start\n  var msg = "test message 19/01/2023 02:55PM";\n  var signer = new EthereumMessageSigner();\n  var signature = signer.EncodeUTF8AndSign(msg, new EthECKey(privateKey));\n  // highlight-end\n\n  Debug.Log(signature);\n}\n'})})}function r(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(s,{...e})}):s(e)}},49737:(e,n,t)=>{t.d(n,{ZP:()=>r});var a=t(85893),i=t(11151);function s(e){const n={code:"code",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.p,{children:["You get the user information after a successful login returned from the ",(0,a.jsx)(n.code,{children:"login"})," method. The ",(0,a.jsx)(n.code,{children:"userInfo"})," object contains the user information, whereas\nthe ",(0,a.jsx)(n.code,{children:"privKey"})," object contains the private key that can be used to make blockchain calls."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-cs",children:"private string userInfo;\n\nprivate void onLogin(Web3AuthResponse response)\n{\n  userInfo = JsonConvert.SerializeObject(response.userInfo, Formatting.Indented);\n}\n"})})]})}function r(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(s,{...e})}):s(e)}},10226:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>j,contentTitle:()=>g,default:()=>w,frontMatter:()=>b,metadata:()=>x,toc:()=>f});var a=t(85893),i=t(11151),s=t(7950),r=t(13708),o=t(49737),c=t(36216),l=t(17648),u=t(51031),d=t(77380),h=t(74866),p=t(85162),m=t(30831);const b={title:"Integrate Web3Auth with the Base Chain (Coinbase) Blockchain in Unity",sidebar_label:"Unity",image:"content-hub/guides/banners/unity.png",displayed_sidebar:"docs",keywords:["unity","base","coinbase","web3auth","authentication","blockchain"],description:"Integrate Web3Auth with the Base Chain (Coinbase) Blockchain in Unity | Documentation - Web3Auth"},g=void 0,x={id:"connect-blockchain/evm/base/unity",title:"Integrate Web3Auth with the Base Chain (Coinbase) Blockchain in Unity",description:"Integrate Web3Auth with the Base Chain (Coinbase) Blockchain in Unity | Documentation - Web3Auth",source:"@site/docs/connect-blockchain/evm/base/unity.mdx",sourceDirName:"connect-blockchain/evm/base",slug:"/connect-blockchain/evm/base/unity",permalink:"/docs/connect-blockchain/evm/base/unity",draft:!1,unlisted:!1,editUrl:"https://github.com/web3auth/web3auth-docs/edit/master/docs/connect-blockchain/evm/base/unity.mdx",tags:[],version:"current",frontMatter:{title:"Integrate Web3Auth with the Base Chain (Coinbase) Blockchain in Unity",sidebar_label:"Unity",image:"content-hub/guides/banners/unity.png",displayed_sidebar:"docs",keywords:["unity","base","coinbase","web3auth","authentication","blockchain"],description:"Integrate Web3Auth with the Base Chain (Coinbase) Blockchain in Unity | Documentation - Web3Auth"},sidebar:"docs",previous:{title:"Flutter",permalink:"/docs/connect-blockchain/evm/base/flutter"},next:{title:"Integrate Web3Auth with the BNB Blockchain",permalink:"/docs/connect-blockchain/evm/bnb/"}},j={},f=[{value:"Installation",id:"installation",level:2},{value:"Chain Details for Base Chain (Coinbase)",id:"chain-details-for-base-chain-coinbase",level:2},{value:"Initialize",id:"initialize",level:2},{value:"Get User Info",id:"get-user-info",level:2},{value:"Get Account",id:"get-account",level:2},{value:"Get Balance",id:"get-balance",level:2},{value:"Sign a message",id:"sign-a-message",level:2},{value:"Send Transaction",id:"send-transaction",level:2}];function v(e){const n={a:"a",code:"code",h2:"h2",li:"li",p:"p",ul:"ul",...(0,i.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(m.Z,{title:"Integrate Web3Auth with the Base Chain (Coinbase) Blockchain in Unity",description:"Integrate Web3Auth with the Base Chain (Coinbase) Blockchain in Unity | Documentation - Web3Auth",image:"https://web3auth.io/docs/content-hub/guides/banners/base.png",slug:"/connect-blockchain/evm/base/unity"}),"\n",(0,a.jsxs)(n.p,{children:["While using the Web3Auth Unity SDK, you get the private key within the user scope. This private key can interact with the\n",(0,a.jsx)(n.a,{href:"https://base.org/",children:"Base Chain (Coinbase)"})," to make EVM-based blockchain calls, like getting the user's ",(0,a.jsx)(n.code,{children:"account"}),", fetch ",(0,a.jsx)(n.code,{children:"balance"}),", ",(0,a.jsx)(n.code,{children:"sign transaction"}),",\n",(0,a.jsx)(n.code,{children:"send transaction"}),", ",(0,a.jsx)(n.code,{children:"read"})," from and ",(0,a.jsx)(n.code,{children:"write"})," to the smart contract, etc. We have highlighted a few here to get you started quickly on that."]}),"\n",(0,a.jsx)(n.h2,{id:"installation",children:"Installation"}),"\n",(0,a.jsx)(s.ZP,{}),"\n",(0,a.jsx)(n.h2,{id:"chain-details-for-base-chain-coinbase",children:"Chain Details for Base Chain (Coinbase)"}),"\n",(0,a.jsxs)(h.Z,{defaultValue:"mainnet",values:[{label:"Mainnet",value:"mainnet"},{label:"Testnet",value:"testnet"}],children:[(0,a.jsx)(p.Z,{value:"mainnet",children:(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Chain ID: 0x2105"}),"\n",(0,a.jsxs)(n.li,{children:["Public RPC URL: ",(0,a.jsx)(n.code,{children:"https://mainnet.base.org"})," (Avoid using public rpcTarget in production, use services like Infura, Quicknode etc)"]}),"\n",(0,a.jsx)(n.li,{children:"Display Name: Base Mainnet"}),"\n",(0,a.jsxs)(n.li,{children:["Block Explorer Link: ",(0,a.jsx)(n.a,{href:"https://basescan.org/",children:"https://basescan.org/"})]}),"\n",(0,a.jsx)(n.li,{children:"Ticker: ETH"}),"\n",(0,a.jsx)(n.li,{children:"Ticker Name: ETH"}),"\n"]})}),(0,a.jsx)(p.Z,{value:"testnet",children:(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Chain ID: 0x14A34"}),"\n",(0,a.jsxs)(n.li,{children:["Public RPC URL: ",(0,a.jsx)(n.code,{children:"https://sepolia.base.org"})," (Avoid using public rpcTarget in production, use services like Infura, Quicknode etc)"]}),"\n",(0,a.jsx)(n.li,{children:"Display Name: Base Sepolia"}),"\n",(0,a.jsxs)(n.li,{children:["Block Explorer Link: ",(0,a.jsx)(n.a,{href:"https://sepolia-explorer.base.org",children:"https://sepolia-explorer.base.org"})]}),"\n",(0,a.jsx)(n.li,{children:"Ticker: ETH"}),"\n",(0,a.jsx)(n.li,{children:"Ticker Name: ETH"}),"\n"]})})]}),"\n",(0,a.jsx)(n.h2,{id:"initialize",children:"Initialize"}),"\n",(0,a.jsx)(l.ZP,{}),"\n",(0,a.jsx)(n.h2,{id:"get-user-info",children:"Get User Info"}),"\n",(0,a.jsx)(o.ZP,{}),"\n",(0,a.jsx)(n.h2,{id:"get-account",children:"Get Account"}),"\n",(0,a.jsx)(r.ZP,{}),"\n",(0,a.jsx)(n.h2,{id:"get-balance",children:"Get Balance"}),"\n",(0,a.jsx)(c.ZP,{}),"\n",(0,a.jsx)(n.h2,{id:"sign-a-message",children:"Sign a message"}),"\n",(0,a.jsx)(u.ZP,{}),"\n",(0,a.jsx)(n.h2,{id:"send-transaction",children:"Send Transaction"}),"\n",(0,a.jsx)(d.ZP,{})]})}function w(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(v,{...e})}):v(e)}},85162:(e,n,t)=>{t.d(n,{Z:()=>r});t(67294);var a=t(36905);const i={tabItem:"tabItem_Ymn6"};var s=t(85893);function r(e){let{children:n,hidden:t,className:r}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,a.Z)(i.tabItem,r),hidden:t,children:n})}},74866:(e,n,t)=>{t.d(n,{Z:()=>y});var a=t(67294),i=t(36905),s=t(12466),r=t(16550),o=t(20469),c=t(91980),l=t(67392),u=t(50012);function d(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,a.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:t,attributes:a,default:i}}=e;return{value:n,label:t,attributes:a,default:i}}))}(t);return function(e){const n=(0,l.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:t}=e;const i=(0,r.k6)(),s=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,c._X)(s),(0,a.useCallback)((e=>{if(!s)return;const n=new URLSearchParams(i.location.search);n.set(s,e),i.replace({...i.location,search:n.toString()})}),[s,i])]}function b(e){const{defaultValue:n,queryString:t=!1,groupId:i}=e,s=h(e),[r,c]=(0,a.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const a=t.find((e=>e.default))??t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:n,tabValues:s}))),[l,d]=m({queryString:t,groupId:i}),[b,g]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[i,s]=(0,u.Nk)(t);return[i,(0,a.useCallback)((e=>{t&&s.set(e)}),[t,s])]}({groupId:i}),x=(()=>{const e=l??b;return p({value:e,tabValues:s})?e:null})();(0,o.Z)((()=>{x&&c(x)}),[x]);return{selectedValue:r,selectValue:(0,a.useCallback)((e=>{if(!p({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);c(e),d(e),g(e)}),[d,g,s]),tabValues:s}}var g=t(72389);const x={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var j=t(85893);function f(e){let{className:n,block:t,selectedValue:a,selectValue:r,tabValues:o}=e;const c=[],{blockElementScrollPositionUntilNextRender:l}=(0,s.o5)(),u=e=>{const n=e.currentTarget,t=c.indexOf(n),i=o[t].value;i!==a&&(l(n),r(i))},d=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const t=c.indexOf(e.currentTarget)+1;n=c[t]??c[0];break}case"ArrowLeft":{const t=c.indexOf(e.currentTarget)-1;n=c[t]??c[c.length-1];break}}n?.focus()};return(0,j.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":t},n),children:o.map((e=>{let{value:n,label:t,attributes:s}=e;return(0,j.jsx)("li",{role:"tab",tabIndex:a===n?0:-1,"aria-selected":a===n,ref:e=>c.push(e),onKeyDown:d,onClick:u,...s,className:(0,i.Z)("tabs__item",x.tabItem,s?.className,{"tabs__item--active":a===n}),children:t??n},n)}))})}function v(e){let{lazy:n,children:t,selectedValue:i}=e;const s=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=s.find((e=>e.props.value===i));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,j.jsx)("div",{className:"margin-top--md",children:s.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==i})))})}function w(e){const n=b(e);return(0,j.jsxs)("div",{className:(0,i.Z)("tabs-container",x.tabList),children:[(0,j.jsx)(f,{...e,...n}),(0,j.jsx)(v,{...e,...n})]})}function y(e){const n=(0,g.Z)();return(0,j.jsx)(w,{...e,children:d(e.children)},String(n))}},30831:(e,n,t)=>{t.d(n,{Z:()=>s});var a=t(35742),i=t(85893);function s(e){const{title:n,description:t,image:s,slug:r,keywords:o}=e;return(0,i.jsxs)(a.Z,{children:[n?(0,i.jsxs)("title",{children:[n," | Web3Auth "]}):(0,i.jsx)("title",{children:"Documentation | Web3Auth"}),t?(0,i.jsx)("meta",{name:"description",content:t}):(0,i.jsx)("meta",{name:"description",content:"Web3Auth is simple, non-custodial auth infrastructure that enables Web3 wallets and applications to provide seamless user logins for both mainstream and native Web3 users."}),o?o.length>0&&(0,i.jsx)("meta",{name:"keywords",content:`web3auth, blockchain, solana, ethereum, multi party computation, ${o.join(", ")}`}):(0,i.jsx)("meta",{name:"keywords",content:"web3auth, blockchain, web3, web3.js, ethers.js, solana, ethereum, passwordless, passwordless magic link, multi party computation, tkey, torus, web3 auth, auth"}),(0,i.jsx)("meta",{property:"og:site_name",content:"Web3Auth"}),(0,i.jsx)("meta",{property:"og:type",content:"website"}),n?(0,i.jsx)("meta",{property:"og:title",content:n}):(0,i.jsx)("meta",{property:"og:title",content:"Documentation | Web3Auth"}),t?(0,i.jsx)("meta",{property:"og:description",content:t}):(0,i.jsx)("meta",{property:"og:description",content:"Web3Auth is simple, non-custodial auth infrastructure that enables Web3 wallets and applications to provide seamless user logins for both mainstream and native Web3 users."}),r?(0,i.jsx)("meta",{property:"og:url",content:`https://web3auth.io/docs${r}`}):(0,i.jsx)("meta",{property:"og:url",content:"https://web3auth.io/docs"}),s?(0,i.jsx)("meta",{property:"og:image",content:s}):(0,i.jsx)("meta",{property:"og:image",content:"http://web3auth.io/docs/images/docs-meta-cards/documentation-card.png"}),(0,i.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,i.jsx)("meta",{name:"twitter:site",content:"@Web3Auth"}),(0,i.jsx)("meta",{name:"twitter:creator",content:"@Web3Auth"}),s?(0,i.jsx)("meta",{name:"twitter:image",content:s}):(0,i.jsx)("meta",{name:"twitter:image",content:"http://web3auth.io/docs/images/docs-meta-cards/documentation-card.png"}),n?(0,i.jsx)("meta",{itemProp:"name",content:n}):(0,i.jsx)("meta",{itemProp:"name",content:"Documentation | Web3Auth"}),t?(0,i.jsx)("meta",{itemProp:"description",content:t}):(0,i.jsx)("meta",{itemProp:"description",content:"Web3Auth is simple, non-custodial auth infrastructure that enables Web3 wallets and applications to provide seamless user logins for both mainstream and native Web3 users."}),s?(0,i.jsx)("meta",{itemProp:"image",content:s}):(0,i.jsx)("meta",{itemProp:"image",content:"http://web3auth.io/docs/images/docs-meta-cards/documentation-card.png"}),(0,i.jsx)("meta",{name:"author",content:"Web3Auth"})]})}},11151:(e,n,t)=>{t.d(n,{Z:()=>o,a:()=>r});var a=t(67294);const i={},s=a.createContext(i);function r(e){const n=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),a.createElement(s.Provider,{value:n},e.children)}}}]);