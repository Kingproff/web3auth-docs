"use strict";(self.webpackChunkweb3auth_docs=self.webpackChunkweb3auth_docs||[]).push([[4331],{61460:(e,n,t)=>{t.d(n,{ZP:()=>o});var a=t(85893),r=t(11151);function i(e){const n={code:"code",pre:"pre",...(0,r.a)(),...e.components};return(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-kotlin",children:'private fun getAddress(): String {\n  println("Address:, ${credentials.address}")\n  // highlight-next-line\n  return credentials.address\n}\n\n// Setup UI and event handlers\nval getAccountButton = findViewById<Button>(R.id.getAccountButton)\ngetAccountButton.setOnClickListener { getAddress() }\n'})})}function o(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(i,{...e})}):i(e)}},95797:(e,n,t)=>{t.d(n,{ZP:()=>o});var a=t(85893),r=t(11151);function i(e){const n={code:"code",pre:"pre",...(0,r.a)(),...e.components};return(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-kotlin",children:'private fun getBalance(): BigInteger? {\n  val publicAddress = credentials.address\n  val ethBalance: EthGetBalance = web3.ethGetBalance(publicAddress, DefaultBlockParameterName.LATEST).sendAsync().get()\n  println("Balance: ${ethBalance.balance}")\n  // highlight-next-line\n  return ethBalance.balance\n}\n\n// Setup UI and event handlers\nval getBalanceButton = findViewById<Button>(R.id.getBalanceButton)\ngetBalanceButton.setOnClickListener { getBalance() }\n'})})}function o(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(i,{...e})}):i(e)}},83182:(e,n,t)=>{t.d(n,{ZP:()=>o});var a=t(85893),r=t(11151);function i(e){const n={code:"code",pre:"pre",...(0,r.a)(),...e.components};return(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-kotlin",children:'class MainActivity : AppCompatActivity() {\n  // highlight-start\n  private lateinit var web3Auth: Web3Auth\n  private lateinit var web3: Web3j\n  private lateinit var credentials: Credentials\n  private val rpcUrl = "" // RPC URL of EVM Chain\n  // highlight-end\n\n  override fun onCreate(savedInstanceState: Bundle?) {\n    super.onCreate(savedInstanceState)\n    setContentView(R.layout.activity_main)\n\n    web3Auth = Web3Auth(\n      Web3AuthOptions(context = this,\n        clientId = getString(R.string.web3auth_project_id),\n        network = Network.MAINNET,\n        redirectUrl = Uri.parse("{YOUR_APP_PACKAGE_NAME}://auth")\n      )\n    )\n\n    // Handle user signing in when app is not alive\n    web3Auth.setResultUrl(intent?.data)\n\n    // Call initialize() in onCreate() to check for any existing session.\n        val sessionResponse: CompletableFuture<Void> = web3Auth.initialize()\n        sessionResponse.whenComplete { _, error ->\n            if (error == null) {\n                reRender()\n                println("PrivKey: " + web3Auth.getPrivkey())\n                println("ed25519PrivKey: " + web3Auth.getEd25519PrivKey())\n                println("Web3Auth UserInfo" + web3Auth.getUserInfo())\n                credentials = Credentials.create(web3Auth.getPrivkey())\n                web3 = Web3j.build(HttpService(rpcUrl))\n            } else {\n                Log.d("MainActivity_Web3Auth", error.message ?: "Something went wrong")\n                // Ideally, you should initiate the login function here.\n            }\n        }\n\n\n    // Setup UI and event handlers\n    val signInButton = findViewById<Button>(R.id.signInButton)\n    signInButton.setOnClickListener { signIn() }\n  }\n\n  override fun onNewIntent(intent: Intent?) {\n    super.onNewIntent(intent)\n\n    // Handle user signing in when app is active\n    web3Auth.setResultUrl(intent?.data)\n  }\n\n  private fun signIn() {\n    val selectedLoginProvider = Provider.GOOGLE   // Can be GOOGLE, FACEBOOK, TWITCH etc.\n    val loginCompletableFuture: CompletableFuture<Web3AuthResponse> =\n            web3Auth.login(LoginParams(selectedLoginProvider))\n\n    loginCompletableFuture.whenComplete { loginResponse, error ->\n      if (error == null) {\n        // render logged in UI\n        println(loginResponse)\n        // highlight-start\n        // Set the sessionId from Web3Auth in App State\n        credentials = Credentials.create(web3Auth.getPrivkey())\n        web3 = Web3j.build(HttpService(rpcUrl))\n        // highlight-end\n      } else {\n        // render error UI\n      }\n    }\n  }\n  //...\n}\n'})})}function o(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(i,{...e})}):i(e)}},89623:(e,n,t)=>{t.d(n,{ZP:()=>o});var a=t(85893),r=t(11151);function i(e){const n={a:"a",code:"code",p:"p",pre:"pre",strong:"strong",...(0,r.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.p,{children:["To interact with the Ethereum blockchain in Android, you can use any ",(0,a.jsx)(n.a,{href:"https://eips.ethereum.org/EIPS/eip-1193",children:(0,a.jsx)(n.code,{children:"EIP1193"})})," compatible package available\nfor Android. Here we're using ",(0,a.jsx)(n.a,{href:"https://github.com/web3j/web3j",children:"web3j"})," to demonstrate how to make blockchain calls using it with Web3Auth."]}),"\n",(0,a.jsxs)(n.p,{children:["In your ",(0,a.jsx)(n.strong,{children:"app-level"})," ",(0,a.jsx)(n.code,{children:"build.gradle"}),"'s dependencies section, add the following:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-tsx",children:"dependencies {\n  // ...\n  implementation 'org.web3j:core:4.8.7-android'\n}\n"})})]})}function o(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(i,{...e})}):i(e)}},25254:(e,n,t)=>{t.d(n,{ZP:()=>o});var a=t(85893),r=t(11151);function i(e){const n={code:"code",pre:"pre",...(0,r.a)(),...e.components};return(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-kotlin",children:'private fun sendTransaction(amount: Double, recipientAddress: String): String? {\n  val ethGetTransactionCount: EthGetTransactionCount = web3.ethGetTransactionCount(credentials.address, DefaultBlockParameterName.LATEST).sendAsync().get()\n  val nonce: BigInteger = ethGetTransactionCount.transactionCount\n  val value: BigInteger = Convert.toWei(amount.toString(), Convert.Unit.ETHER).toBigInteger()\n  val gasLimit: BigInteger = BigInteger.valueOf(21000)\n  val chainId: EthChainId = web3.ethChainId().sendAsync().get()\n\n  // Raw Transaction\n  val rawTransaction: RawTransaction = RawTransaction.createTransaction(\n    chainId.chainId.toLong(),\n    nonce,\n    gasLimit,\n    recipientAddress,\n    value,\n    "",\n    BigInteger.valueOf(5000000000),\n    BigInteger.valueOf(6000000000000)\n  )\n\n  val signedMessage: ByteArray = TransactionEncoder.signMessage(rawTransaction, credentials)\n  val hexValue: String = Numeric.toHexString(signedMessage)\n  // highlight-next-line\n  val ethSendTransaction: EthSendTransaction = web3.ethSendRawTransaction(hexValue).sendAsync().get()\n  return if(ethSendTransaction.error != null) {\n    println("Tx Error: ${ethSendTransaction.error.message}")\n    ethSendTransaction.error.message\n  } else {\n    println("Tx Hash: ${ethSendTransaction.transactionHash}")\n    ethSendTransaction.transactionHash\n  }\n}\n\n// Setup UI and event handlers\nval sendTransactionButton = findViewById<Button>(R.id.sendTransactionButton)\nsendTransactionButton.setOnClickListener { sendTransaction() }\n'})})}function o(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(i,{...e})}):i(e)}},13500:(e,n,t)=>{t.d(n,{ZP:()=>o});var a=t(85893),r=t(11151);function i(e){const n={code:"code",pre:"pre",...(0,r.a)(),...e.components};return(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-kotlin",children:'private fun signMessage(message: String): String {\n  val hashedData = Hash.sha3(message.toByteArray(StandardCharsets.UTF_8))\n  val signature = Sign.signMessage(hashedData, credentials.ecKeyPair)\n  val r = Numeric.toHexString(signature.r)\n  val s = Numeric.toHexString(signature.s).substring(2)\n  val v = Numeric.toHexString(signature.v).substring(2)\n  // highlight-next-line\n  val signHash = StringBuilder(r).append(s).append(v).toString()\n  println("Signed Hash: $signHash")\n  return signHash\n}\n\n// Setup UI and event handlers\nval signMessageButton = findViewById<Button>(R.id.signMessageButton)\nsignMessageButton.setOnClickListener { signMessage() }\n'})})}function o(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(i,{...e})}):i(e)}},37357:(e,n,t)=>{t.d(n,{ZP:()=>o});var a=t(85893),r=t(11151);function i(e){const n={code:"code",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.p,{children:["You get the user information after a successful login returned from the ",(0,a.jsx)(n.code,{children:"login"})," method. The ",(0,a.jsx)(n.code,{children:"userInfo"})," object contains the user information, whereas\nthe ",(0,a.jsx)(n.code,{children:"privKey"})," object contains the private key that can be used to make blockchain calls."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-kotlin",children:"\nprivate fun signIn() {\n  val selectedLoginProvider = Provider.GOOGLE   // Can be GOOGLE, FACEBOOK, TWITCH etc.\n  val loginCompletableFuture: CompletableFuture<Web3AuthResponse> =\n          web3Auth.login(LoginParams(selectedLoginProvider))\n\n  loginCompletableFuture.whenComplete { _, error ->\n    if (error == null) {\n      // render logged in UI with User's Info\n      // highlight-next-line\n      credentials = Credentials.create(web3Auth.getPrivkey())\n      web3 = Web3j.build(HttpService(rpcUrl))\n    } else {\n      // render error UI\n    }\n  }\n}\n\n"})})]})}function o(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(i,{...e})}):i(e)}},65316:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>x,contentTitle:()=>b,default:()=>w,frontMatter:()=>m,metadata:()=>v,toc:()=>f});var a=t(85893),r=t(11151),i=t(89623),o=t(61460),s=t(37357),l=t(95797),c=t(83182),u=t(13500),d=t(25254),h=t(74866),p=t(85162),g=t(30831);const m={title:"Integrate Web3Auth with the Polygon Blockchain in Android",sidebar_label:"Android",image:"content-hub/guides/banners/polygon.png",displayed_sidebar:"docs",keywords:["android","polygon","web3auth","authentication","blockchain"],description:"Integrate Web3Auth with the Polygon Blockchain in Android | Documentation - Web3Auth"},b=void 0,v={id:"connect-blockchain/evm/polygon/android",title:"Integrate Web3Auth with the Polygon Blockchain in Android",description:"Integrate Web3Auth with the Polygon Blockchain in Android | Documentation - Web3Auth",source:"@site/docs/connect-blockchain/evm/polygon/android.mdx",sourceDirName:"connect-blockchain/evm/polygon",slug:"/connect-blockchain/evm/polygon/android",permalink:"/docs/connect-blockchain/evm/polygon/android",draft:!1,unlisted:!1,editUrl:"https://github.com/web3auth/web3auth-docs/edit/master/docs/connect-blockchain/evm/polygon/android.mdx",tags:[],version:"current",frontMatter:{title:"Integrate Web3Auth with the Polygon Blockchain in Android",sidebar_label:"Android",image:"content-hub/guides/banners/polygon.png",displayed_sidebar:"docs",keywords:["android","polygon","web3auth","authentication","blockchain"],description:"Integrate Web3Auth with the Polygon Blockchain in Android | Documentation - Web3Auth"},sidebar:"docs",previous:{title:"Web",permalink:"/docs/connect-blockchain/evm/polygon/web"},next:{title:"iOS",permalink:"/docs/connect-blockchain/evm/polygon/ios"}},x={},f=[{value:"Installation",id:"installation",level:2},{value:"Chain Details for Polygon",id:"chain-details-for-polygon",level:2},{value:"Initialize",id:"initialize",level:2},{value:"Get User Info",id:"get-user-info",level:2},{value:"Get Account",id:"get-account",level:2},{value:"Get Balance",id:"get-balance",level:2},{value:"Send Transaction",id:"send-transaction",level:2},{value:"Sign a message",id:"sign-a-message",level:2}];function j(e){const n={a:"a",code:"code",h2:"h2",li:"li",p:"p",ul:"ul",...(0,r.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(g.Z,{title:"Integrate Web3Auth with the Polygon Blockchain in Android",description:"Integrate Web3Auth with the Polygon Blockchain in Android | Documentation - Web3Auth",image:"https://web3auth.io/docs/content-hub/guides/banners/polygon.png",slug:"/connect-blockchain/evm/polygon/android"}),"\n",(0,a.jsxs)(n.p,{children:["While using the Web3Auth Android SDK, you get the private key and sessionId within the user scope. This private key can interact with\n",(0,a.jsx)(n.a,{href:"https://polygon.technology/",children:"Polygon (formerly Matic)"})," to make any blockchain calls, like getting the user's ",(0,a.jsx)(n.code,{children:"account"}),", fetching ",(0,a.jsx)(n.code,{children:"balance"}),",\n",(0,a.jsx)(n.code,{children:"sign transaction"}),", ",(0,a.jsx)(n.code,{children:"send transaction"}),", ",(0,a.jsx)(n.code,{children:"read"})," from and ",(0,a.jsx)(n.code,{children:"write"})," to the smart contract, etc. We have highlighted a few here to get you started quickly\non that."]}),"\n",(0,a.jsx)(n.h2,{id:"installation",children:"Installation"}),"\n",(0,a.jsx)(i.ZP,{}),"\n",(0,a.jsx)(n.h2,{id:"chain-details-for-polygon",children:"Chain Details for Polygon"}),"\n",(0,a.jsxs)(h.Z,{defaultValue:"mainnet",values:[{label:"Mainnet",value:"mainnet"},{label:"Testnet",value:"testnet"}],children:[(0,a.jsx)(p.Z,{value:"mainnet",children:(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Chain ID: 0x89"}),"\n",(0,a.jsxs)(n.li,{children:["Public RPC URL: ",(0,a.jsx)(n.a,{href:"https://rpc.ankr.com/polygon",children:"https://rpc.ankr.com/polygon"})," (Avoid using public rpcTarget in production, use services like Infura, Quicknode etc)"]}),"\n",(0,a.jsx)(n.li,{children:"Display Name: Polygon Mainnet"}),"\n",(0,a.jsxs)(n.li,{children:["Block Explorer Link: ",(0,a.jsx)(n.a,{href:"https://polygonscan.com",children:"https://polygonscan.com"})]}),"\n",(0,a.jsx)(n.li,{children:"Ticker: MATIC"}),"\n",(0,a.jsx)(n.li,{children:"Ticker Name: MATIC"}),"\n"]})}),(0,a.jsx)(p.Z,{value:"testnet",children:(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Chain ID: 0x13881"}),"\n",(0,a.jsxs)(n.li,{children:["Public RPC URL: ",(0,a.jsx)(n.a,{href:"https://rpc.ankr.com/polygon_mumbai",children:"https://rpc.ankr.com/polygon_mumbai"})," (Avoid using public rpcTarget in production, use services like Infura, Quicknode etc)"]}),"\n",(0,a.jsx)(n.li,{children:"Display Name: Polygon Mumbai Testnet"}),"\n",(0,a.jsxs)(n.li,{children:["Block Explorer Link: ",(0,a.jsx)(n.a,{href:"https://mumbai.polygonscan.com",children:"https://mumbai.polygonscan.com"})]}),"\n",(0,a.jsx)(n.li,{children:"Ticker: MATIC"}),"\n",(0,a.jsx)(n.li,{children:"Ticker Name: MATIC"}),"\n"]})})]}),"\n",(0,a.jsx)(n.h2,{id:"initialize",children:"Initialize"}),"\n",(0,a.jsx)(c.ZP,{}),"\n",(0,a.jsx)(n.h2,{id:"get-user-info",children:"Get User Info"}),"\n",(0,a.jsx)(s.ZP,{}),"\n",(0,a.jsx)(n.h2,{id:"get-account",children:"Get Account"}),"\n",(0,a.jsx)(o.ZP,{}),"\n",(0,a.jsx)(n.h2,{id:"get-balance",children:"Get Balance"}),"\n",(0,a.jsx)(l.ZP,{}),"\n",(0,a.jsx)(n.h2,{id:"send-transaction",children:"Send Transaction"}),"\n",(0,a.jsx)(d.ZP,{}),"\n",(0,a.jsx)(n.h2,{id:"sign-a-message",children:"Sign a message"}),"\n",(0,a.jsx)(u.ZP,{})]})}function w(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(j,{...e})}):j(e)}},85162:(e,n,t)=>{t.d(n,{Z:()=>o});t(67294);var a=t(36905);const r={tabItem:"tabItem_Ymn6"};var i=t(85893);function o(e){let{children:n,hidden:t,className:o}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,a.Z)(r.tabItem,o),hidden:t,children:n})}},74866:(e,n,t)=>{t.d(n,{Z:()=>y});var a=t(67294),r=t(36905),i=t(12466),o=t(16550),s=t(20469),l=t(91980),c=t(67392),u=t(50012);function d(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,a.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:t,attributes:a,default:r}}=e;return{value:n,label:t,attributes:a,default:r}}))}(t);return function(e){const n=(0,c.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function g(e){let{queryString:n=!1,groupId:t}=e;const r=(0,o.k6)(),i=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,l._X)(i),(0,a.useCallback)((e=>{if(!i)return;const n=new URLSearchParams(r.location.search);n.set(i,e),r.replace({...r.location,search:n.toString()})}),[i,r])]}function m(e){const{defaultValue:n,queryString:t=!1,groupId:r}=e,i=h(e),[o,l]=(0,a.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const a=t.find((e=>e.default))??t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:n,tabValues:i}))),[c,d]=g({queryString:t,groupId:r}),[m,b]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[r,i]=(0,u.Nk)(t);return[r,(0,a.useCallback)((e=>{t&&i.set(e)}),[t,i])]}({groupId:r}),v=(()=>{const e=c??m;return p({value:e,tabValues:i})?e:null})();(0,s.Z)((()=>{v&&l(v)}),[v]);return{selectedValue:o,selectValue:(0,a.useCallback)((e=>{if(!p({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),b(e)}),[d,b,i]),tabValues:i}}var b=t(72389);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=t(85893);function f(e){let{className:n,block:t,selectedValue:a,selectValue:o,tabValues:s}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.o5)(),u=e=>{const n=e.currentTarget,t=l.indexOf(n),r=s[t].value;r!==a&&(c(n),o(r))},d=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const t=l.indexOf(e.currentTarget)+1;n=l[t]??l[0];break}case"ArrowLeft":{const t=l.indexOf(e.currentTarget)-1;n=l[t]??l[l.length-1];break}}n?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":t},n),children:s.map((e=>{let{value:n,label:t,attributes:i}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:a===n?0:-1,"aria-selected":a===n,ref:e=>l.push(e),onKeyDown:d,onClick:u,...i,className:(0,r.Z)("tabs__item",v.tabItem,i?.className,{"tabs__item--active":a===n}),children:t??n},n)}))})}function j(e){let{lazy:n,children:t,selectedValue:r}=e;const i=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=i.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:i.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==r})))})}function w(e){const n=m(e);return(0,x.jsxs)("div",{className:(0,r.Z)("tabs-container",v.tabList),children:[(0,x.jsx)(f,{...e,...n}),(0,x.jsx)(j,{...e,...n})]})}function y(e){const n=(0,b.Z)();return(0,x.jsx)(w,{...e,children:d(e.children)},String(n))}},30831:(e,n,t)=>{t.d(n,{Z:()=>i});var a=t(35742),r=t(85893);function i(e){const{title:n,description:t,image:i,slug:o,keywords:s}=e;return(0,r.jsxs)(a.Z,{children:[n?(0,r.jsxs)("title",{children:[n," | Web3Auth "]}):(0,r.jsx)("title",{children:"Documentation | Web3Auth"}),t?(0,r.jsx)("meta",{name:"description",content:t}):(0,r.jsx)("meta",{name:"description",content:"Web3Auth is simple, non-custodial auth infrastructure that enables Web3 wallets and applications to provide seamless user logins for both mainstream and native Web3 users."}),s?s.length>0&&(0,r.jsx)("meta",{name:"keywords",content:`web3auth, blockchain, solana, ethereum, multi party computation, ${s.join(", ")}`}):(0,r.jsx)("meta",{name:"keywords",content:"web3auth, blockchain, web3, web3.js, ethers.js, solana, ethereum, passwordless, passwordless magic link, multi party computation, tkey, torus, web3 auth, auth"}),(0,r.jsx)("meta",{property:"og:site_name",content:"Web3Auth"}),(0,r.jsx)("meta",{property:"og:type",content:"website"}),n?(0,r.jsx)("meta",{property:"og:title",content:n}):(0,r.jsx)("meta",{property:"og:title",content:"Documentation | Web3Auth"}),t?(0,r.jsx)("meta",{property:"og:description",content:t}):(0,r.jsx)("meta",{property:"og:description",content:"Web3Auth is simple, non-custodial auth infrastructure that enables Web3 wallets and applications to provide seamless user logins for both mainstream and native Web3 users."}),o?(0,r.jsx)("meta",{property:"og:url",content:`https://web3auth.io/docs${o}`}):(0,r.jsx)("meta",{property:"og:url",content:"https://web3auth.io/docs"}),i?(0,r.jsx)("meta",{property:"og:image",content:i}):(0,r.jsx)("meta",{property:"og:image",content:"http://web3auth.io/docs/images/docs-meta-cards/documentation-card.png"}),(0,r.jsx)("meta",{name:"twitter:card",content:"summary_large_image"}),(0,r.jsx)("meta",{name:"twitter:site",content:"@Web3Auth"}),(0,r.jsx)("meta",{name:"twitter:creator",content:"@Web3Auth"}),i?(0,r.jsx)("meta",{name:"twitter:image",content:i}):(0,r.jsx)("meta",{name:"twitter:image",content:"http://web3auth.io/docs/images/docs-meta-cards/documentation-card.png"}),n?(0,r.jsx)("meta",{itemProp:"name",content:n}):(0,r.jsx)("meta",{itemProp:"name",content:"Documentation | Web3Auth"}),t?(0,r.jsx)("meta",{itemProp:"description",content:t}):(0,r.jsx)("meta",{itemProp:"description",content:"Web3Auth is simple, non-custodial auth infrastructure that enables Web3 wallets and applications to provide seamless user logins for both mainstream and native Web3 users."}),i?(0,r.jsx)("meta",{itemProp:"image",content:i}):(0,r.jsx)("meta",{itemProp:"image",content:"http://web3auth.io/docs/images/docs-meta-cards/documentation-card.png"}),(0,r.jsx)("meta",{name:"author",content:"Web3Auth"})]})}},11151:(e,n,t)=>{t.d(n,{Z:()=>s,a:()=>o});var a=t(67294);const r={},i=a.createContext(r);function o(e){const n=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),a.createElement(i.Provider,{value:n},e.children)}}}]);