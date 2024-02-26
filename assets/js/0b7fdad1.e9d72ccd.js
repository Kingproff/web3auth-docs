"use strict";(self.webpackChunkweb3auth_docs=self.webpackChunkweb3auth_docs||[]).push([[89443],{91355:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>u});var r=n(85893),i=n(11151),s=n(85162),a=n(74866);const o={title:"Using Core Kit SFA Android SDK",sidebar_label:"Usage",displayed_sidebar:"sdk",description:"Web3Auth Core Kit Single Factor Auth Android SDK - Usage | Documentation - Web3Auth"},l=void 0,c={id:"sdk/core-kit/sfa-android/usage",title:"Using Core Kit SFA Android SDK",description:"Web3Auth Core Kit Single Factor Auth Android SDK - Usage | Documentation - Web3Auth",source:"@site/docs/sdk/core-kit/sfa-android/usage.mdx",sourceDirName:"sdk/core-kit/sfa-android",slug:"/sdk/core-kit/sfa-android/usage",permalink:"/docs/sdk/core-kit/sfa-android/usage",draft:!1,unlisted:!1,editUrl:"https://github.com/web3auth/web3auth-docs/edit/master/docs/sdk/core-kit/sfa-android/usage.mdx",tags:[],version:"current",frontMatter:{title:"Using Core Kit SFA Android SDK",sidebar_label:"Usage",displayed_sidebar:"sdk",description:"Web3Auth Core Kit Single Factor Auth Android SDK - Usage | Documentation - Web3Auth"},sidebar:"sdk",previous:{title:"Authentication",permalink:"/docs/sdk/core-kit/sfa-android/authentication"},next:{title:"Web3Auth Core Kit Single Factor Auth iOS SDK",permalink:"/docs/sdk/core-kit/sfa-ios/"}},d={},u=[{value:"<code>getKey()</code>",id:"getkey",level:2},{value:"Returns",id:"returns",level:4},{value:"<code>LoginParams</code>",id:"loginparams",level:4},{value:"Example",id:"example",level:2}];function h(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:"After successfully installing and initializing SingleFactorAuth, you can use it to authenticate your users and obtain their private and public keys."}),"\n",(0,r.jsx)(t.p,{children:"The SingleFactorAuth instance natively provides the following functions:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"getKey()"})," - Returns the torus key using the ",(0,r.jsx)(t.code,{children:"verifier"}),", ",(0,r.jsx)(t.code,{children:"verifierId"})," & ",(0,r.jsx)(t.code,{children:"idToken"}),"."]}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"getkey",children:(0,r.jsx)(t.code,{children:"getKey()"})}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.code,{children:"getKey()"})}),"\n",(0,r.jsxs)(t.p,{children:["To obtain a user's Torus key using the Web3Auth SFA Android SDK, you can call the ",(0,r.jsx)(t.code,{children:"getKey()"})," function."]}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Variable"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Description"}),(0,r.jsx)(t.th,{children:"Mandatory"})]})}),(0,r.jsx)(t.tbody,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"loginParams"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"object"})}),(0,r.jsx)(t.td,{children:"Login Parameters"}),(0,r.jsx)(t.td,{children:"Yes"})]})})]}),"\n",(0,r.jsx)(t.h4,{id:"returns",children:"Returns"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",children:"public CompletableFuture<TorusKey> getKey(LoginParams loginParams)\n"})}),"\n",(0,r.jsxs)(t.p,{children:["On successful call, the ",(0,r.jsx)(t.code,{children:"getKey()"})," function returns a ",(0,r.jsx)(t.code,{children:"CompletableFuture"})," instance."]}),"\n",(0,r.jsx)(t.h4,{id:"loginparams",children:(0,r.jsx)(t.code,{children:"LoginParams"})}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.code,{children:"getKey(loginParams: LoginParams)"})}),"\n",(0,r.jsxs)(a.Z,{defaultValue:"table",values:[{label:"Table",value:"table"},{label:"Type",value:"type"}],children:[(0,r.jsx)(s.Z,{value:"table",children:(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Parameter"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Description"}),(0,r.jsx)(t.th,{children:"Mandatory"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"verifier"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"string"})}),(0,r.jsxs)(t.td,{children:["Details of the verifier (verifier type, ie. ",(0,r.jsx)(t.code,{children:"torus"}),", ",(0,r.jsx)(t.code,{children:"metamask"}),", ",(0,r.jsx)(t.code,{children:"openlogin"})," etc.)"]}),(0,r.jsx)(t.td,{children:"Yes"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"verifierId"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"string"})}),(0,r.jsxs)(t.td,{children:["Verifier ID's value, ",(0,r.jsx)(t.code,{children:"sub"})," or ",(0,r.jsx)(t.code,{children:"email"})," value present in the idToken."]}),(0,r.jsx)(t.td,{children:"Yes"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"idToken"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"string"})}),(0,r.jsxs)(t.td,{children:["A newly created ",(0,r.jsx)(t.code,{children:"JWT Token"})," that has not already been sent to Web3Auth or a ",(0,r.jsx)(t.code,{children:"Duplicate Token"})," error will be thrown."]}),(0,r.jsx)(t.td,{children:"Yes"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"subVerifierInfoArray?"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"TorusSubVerifierInfo[]"})}),(0,r.jsx)(t.td,{children:"Sub verifier info"}),(0,r.jsx)(t.td,{children:"No"})]})]})]})}),(0,r.jsx)(s.Z,{value:"type",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-javascript",children:"export type LoginParams = {\n  verifier: string,\n  verifierId: string,\n  idToken: string,\n  subVerifierInfoArray?: TorusSubVerifierInfo[],\n};\n"})})})]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-tsx",metastring:'title="Usage"',children:'loginParams = LoginParams("YOUR_VERIFIER_NAME", "YOUR_VERIFIER_ID", "YOUR_ID_TOKEN");\ntorusKey = singleFactorAuth.getKey(loginParams).get();\n'})}),"\n",(0,r.jsx)(t.admonition,{title:"Note",type:"tip",children:(0,r.jsxs)(t.p,{children:["Web3Auth SFA Android SDK only works for users who have ",(0,r.jsx)(t.strong,{children:"not enabled MFA"}),"."]})}),"\n",(0,r.jsx)(t.admonition,{title:"MFA enabled users",type:"danger",children:(0,r.jsx)(t.p,{children:"For MFA enabled users, you'll see an Error message."})}),"\n",(0,r.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-kotlin",children:'import android.widget.Button\nimport android.os.Bundle\nimport com.github.web3auth.singlefactorauth.SingleFactorAuth\nimport com.github.web3auth.singlefactorauth.types.SingleFactorAuthArgs\nimport com.github.web3auth.singlefactorauth.types.LoginParams\nimport com.github.web3auth.singlefactorauth.types.TorusKey\nimport org.torusresearch.fetchnodedetails.types.TorusNetwork\nimport com.auth0.android.jwt.JWT\n\nclass MainActivity : AppCompatActivity() {\n  // ...\n  private lateinit var singleFactorAuth: SingleFactorAuth\n  private lateinit var singleFactorAuthArgs: SingleFactorAuthArgs\n  private lateinit var loginParams: LoginParams\n  private var torusKey: TorusKey? = null\n\n  override fun onCreate(savedInstanceState: Bundle?) {\n    super.onCreate(savedInstanceState)\n    setContentView(R.layout.activity_main)\n\n    singleFactorAuthArgs = SingleFactorAuthArgs(TorusNetwork.TESTNET)\n    singleFactorAuth = SingleFactorAuth(singleFactorAuthArgs)\n\n    // Setup UI and event handlers\n    val signInButton = findViewById<Button>(R.id.signIn)\n    signInButton.setOnClickListener { signIn() }\n  }\n\n  private fun signIn() {\n    val jwt = JWT(idToken) // idToken is the JWT token obtained from auth provider or your custom JWT provider\n    val sub = jwt.getClaim("sub").asString() // get sub claims\n    loginParams = LoginParams("web3auth-firebase-examples", "$sub", "$idToken")\n    try {\n        torusKey = singleFactorAuth.getKey(loginParams).get()\n    } catch (e: ExecutionException) {\n        e.printStackTrace()\n    } catch (e: InterruptedException) {\n        e.printStackTrace()\n    }\n    println("""Private Key: ${torusKey!!.privateKey.toString(16)}""".trimIndent())\n    println("""Public Address: ${torusKey!!.publicAddress}""".trimIndent())\n  }\n  //...\n}\n'})}),"\n",(0,r.jsx)(t.admonition,{title:"Example",type:"info",children:(0,r.jsxs)(t.p,{children:["You can have a look at the ",(0,r.jsx)(t.strong,{children:(0,r.jsx)(t.a,{href:"/examples?product=Core+Kit&sdk=Single+Factor+Auth+Android+SDK",children:"this example"})})," made on top of this SDK and try it out\nyourself."]})})]})}function p(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},85162:(e,t,n)=>{n.d(t,{Z:()=>a});n(67294);var r=n(36905);const i={tabItem:"tabItem_Ymn6"};var s=n(85893);function a(e){let{children:t,hidden:n,className:a}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,r.Z)(i.tabItem,a),hidden:n,children:t})}},74866:(e,t,n)=>{n.d(t,{Z:()=>A});var r=n(67294),i=n(36905),s=n(12466),a=n(16550),o=n(20469),l=n(91980),c=n(67392),d=n(50012);function u(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??function(e){return u(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:i}}=e;return{value:t,label:n,attributes:r,default:i}}))}(n);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function p(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function g(e){let{queryString:t=!1,groupId:n}=e;const i=(0,a.k6)(),s=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l._X)(s),(0,r.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(i.location.search);t.set(s,e),i.replace({...i.location,search:t.toString()})}),[s,i])]}function x(e){const{defaultValue:t,queryString:n=!1,groupId:i}=e,s=h(e),[a,l]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:s}))),[c,u]=g({queryString:n,groupId:i}),[x,b]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[i,s]=(0,d.Nk)(n);return[i,(0,r.useCallback)((e=>{n&&s.set(e)}),[n,s])]}({groupId:i}),m=(()=>{const e=c??x;return p({value:e,tabValues:s})?e:null})();(0,o.Z)((()=>{m&&l(m)}),[m]);return{selectedValue:a,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),b(e)}),[u,b,s]),tabValues:s}}var b=n(72389);const m={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var f=n(85893);function j(e){let{className:t,block:n,selectedValue:r,selectValue:a,tabValues:o}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.o5)(),d=e=>{const t=e.currentTarget,n=l.indexOf(t),i=o[n].value;i!==r&&(c(t),a(i))},u=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=l.indexOf(e.currentTarget)+1;t=l[n]??l[0];break}case"ArrowLeft":{const n=l.indexOf(e.currentTarget)-1;t=l[n]??l[l.length-1];break}}t?.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":n},t),children:o.map((e=>{let{value:t,label:n,attributes:s}=e;return(0,f.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>l.push(e),onKeyDown:u,onClick:d,...s,className:(0,i.Z)("tabs__item",m.tabItem,s?.className,{"tabs__item--active":r===t}),children:n??t},t)}))})}function v(e){let{lazy:t,children:n,selectedValue:i}=e;const s=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=s.find((e=>e.props.value===i));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:s.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==i})))})}function y(e){const t=x(e);return(0,f.jsxs)("div",{className:(0,i.Z)("tabs-container",m.tabList),children:[(0,f.jsx)(j,{...e,...t}),(0,f.jsx)(v,{...e,...t})]})}function A(e){const t=(0,b.Z)();return(0,f.jsx)(y,{...e,children:u(e.children)},String(t))}},11151:(e,t,n)=>{n.d(t,{Z:()=>o,a:()=>a});var r=n(67294);const i={},s=r.createContext(i);function a(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);