"use strict";(self.webpackChunkweb3auth_docs=self.webpackChunkweb3auth_docs||[]).push([[45620],{57053:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>p,frontMatter:()=>l,metadata:()=>c,toc:()=>d});var r=n(85893),i=n(11151),a=n(85162),o=n(74866);const l={title:"Multi Factor Authentication in PnP iOS SDK",sidebar_label:"Multi Factor Authentication",displayed_sidebar:"sdk",description:"Web3Auth PnP iOS SDK - Multi Factor Authentication | Documentation - Web3Auth"},s=void 0,c={id:"sdk/pnp/ios/mfa",title:"Multi Factor Authentication in PnP iOS SDK",description:"Web3Auth PnP iOS SDK - Multi Factor Authentication | Documentation - Web3Auth",source:"@site/docs/sdk/pnp/ios/mfa.mdx",sourceDirName:"sdk/pnp/ios",slug:"/sdk/pnp/ios/mfa",permalink:"/docs/sdk/pnp/ios/mfa",draft:!1,unlisted:!1,editUrl:"https://github.com/web3auth/web3auth-docs/edit/master/docs/sdk/pnp/ios/mfa.mdx",tags:[],version:"current",frontMatter:{title:"Multi Factor Authentication in PnP iOS SDK",sidebar_label:"Multi Factor Authentication",displayed_sidebar:"sdk",description:"Web3Auth PnP iOS SDK - Multi Factor Authentication | Documentation - Web3Auth"},sidebar:"sdk",previous:{title:"Custom Authentication",permalink:"/docs/sdk/pnp/ios/custom-authentication"},next:{title:"dApp Share",permalink:"/docs/sdk/pnp/ios/dapp-share"}},u={},d=[{value:"Using the <code>mfaSettings</code> to configure MFA Order",id:"using-the-mfasettings-to-configure-mfa-order",level:2}];function h(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:"The Multi Factor Authentication feature refers to the ability of the user to create a backup share (recovery phrase). This helps them login into a new\ndevice and also to recover their account if they lose their original device."}),"\n",(0,r.jsx)(t.admonition,{title:"Minimum Growth plan required",type:"note",children:(0,r.jsxs)(t.p,{children:["This is a paid feature and the the minimum ",(0,r.jsx)(t.a,{href:"https://web3auth.io/pricing.html",children:"pricing plan"})," to use this SDK in a production environment is the\n",(0,r.jsx)(t.strong,{children:"Growth Plan"}),". You can use this feature in the development environment for free."]})}),"\n",(0,r.jsxs)(t.p,{children:["You can set the mfaLevel within the ",(0,r.jsx)(t.code,{children:"loginParams"})," to customize when mfa screen should be shown to user. It currently accepts 4 values:"]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:(0,r.jsx)(t.code,{children:"default"})})," - Setting the mfaLevel to default will present the MFA screen to user on every third login. ",(0,r.jsx)(t.code,{children:"mfaLevel = MFALevel.DEFAULT"})]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:(0,r.jsx)(t.code,{children:"optional"})})," - Setting mfaLevel to optional will present the MFA screen to user on every login but user will have the option to skip it.\n",(0,r.jsx)(t.code,{children:"mfaLevel = MFALevel.OPTIONAL"})]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:(0,r.jsx)(t.code,{children:"mandatory"})})," - Setting mfaLevel to mandatory will make it mandatory for user to setup MFA after login. ",(0,r.jsx)(t.code,{children:"mfaLevel = MFALevel.MANDATORY"})]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:(0,r.jsx)(t.code,{children:"none"})})," - Setting mfaLevel to none will skip the mfa setup screen totally. ",(0,r.jsx)(t.code,{children:"mfaLevel = MFALevel.NONE"})]}),"\n"]}),"\n",(0,r.jsx)(t.admonition,{title:"Note",type:"caution",children:(0,r.jsx)(t.p,{children:"If you are using default verifiers, your users may have set up MFA on other dApps that also use default Web3Auth verifiers. In this case, the MFA\nscreen will continue to appear if the user has enabled MFA on other dApps. This is because MFA cannot be turned off once it is enabled."})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-swift",children:"Web3Auth().login(W3ALoginParams(loginProvider: provider, mfaLevel = MFALevel.MANDATORY))\n"})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-swift",metastring:'title="Usage"',children:'import Foundation\nimport Web3Auth\n\nclass ViewModel: ObservableObject {\n    var web3Auth: Web3Auth?\n    @Published var loggedIn: Bool = false\n    @Published var user: Web3AuthState?\n    @Published var isLoading = false\n    @Published var navigationTitle: String = ""\n\n    func setup() async {\n        guard web3Auth == nil else { return }\n        await MainActor.run(body: {\n            isLoading = true\n            navigationTitle = "Loading"\n        })\n        web3Auth = await Web3Auth(W3AInitParams(\n            clientId: clientId, network: network\n        ))\n        await MainActor.run(body: {\n            if self.web3Auth?.state != nil {\n                user = web3Auth?.state\n                loggedIn = true\n            }\n            isLoading = false\n            navigationTitle = loggedIn ? "UserInfo" : "SignIn"\n        })\n    }\n\n    func login(provider: Web3AuthProvider) {\n        Task {\n            do {\n                let result = try await web3Auth.login(\n\t\t\t\t\tW3ALoginParams(\n                        // provider can be .GOOGLE, .FACEBOOK, .APPLE etc\n\t\t\t\t\t\tloginProvider: provider,\n\t\t\t\t\t\t// highlight-next-line\n                        mfaLevel: MFALevel.MANDATORY\n\t\t\t\t\t))\n                await MainActor.run(body: {\n                    user = result\n                    loggedIn = true\n                })\n\n            } catch {\n                print("Error")\n            }\n        }\n    }\n}\n\n'})}),"\n",(0,r.jsxs)(t.h2,{id:"using-the-mfasettings-to-configure-mfa-order",children:["Using the ",(0,r.jsx)(t.code,{children:"mfaSettings"})," to configure MFA Order"]}),"\n",(0,r.jsx)(t.admonition,{title:"Minimum SCALE plan required",type:"note",children:(0,r.jsxs)(t.p,{children:["This is a paid feature and the the minimum ",(0,r.jsx)(t.a,{href:"https://web3auth.io/pricing.html",children:"pricing plan"})," to use this SDK in a production environment is the ",(0,r.jsx)(t.strong,{children:"SCALE\nPlan"}),". You can use this feature in the development environment for free."]})}),"\n",(0,r.jsxs)(t.p,{children:["You can configure the order of MFA or enable/disable MFA type by passing the ",(0,r.jsx)(t.code,{children:"mfaSettings"})," object in ",(0,r.jsx)(t.code,{children:"Web3AuthOptions"}),"."]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.code,{children:"MfaSettings"})}),"\n",(0,r.jsxs)(o.Z,{defaultValue:"table",values:[{label:"Table",value:"table"},{label:"Class",value:"class"}],children:[(0,r.jsxs)(a.Z,{value:"table",children:[(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"deviceShareFactor"})," | ",(0,r.jsx)(t.code,{children:"backUpShareFactor"})," | ",(0,r.jsx)(t.code,{children:"socialBackupFactor"})," | ",(0,r.jsx)(t.code,{children:"passwordFactor"})]}),(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Parameter"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Mandatory"}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"enable"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"Bool"})}),(0,r.jsx)(t.td,{children:"Yes"}),(0,r.jsx)(t.td,{children:"Enable/Disable MFA"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"priority"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"Int?"})}),(0,r.jsx)(t.td,{children:"No"}),(0,r.jsx)(t.td,{children:"Priority of MFA"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"mandatory"})}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"Bool?"})}),(0,r.jsx)(t.td,{children:"No"}),(0,r.jsx)(t.td,{children:"Mandatory/Optional MFA"})]})]})]})]}),(0,r.jsx)(a.Z,{value:"class",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-swift",children:"\n    public struct MfaSetting: Codable {\n        public init(enable: Bool, priority: Int?, mandatory: Bool? = nil) {\n            self.enable = enable\n            self.priority = priority\n            self.mandatory = mandatory\n        }\n\n        let enable: Bool\n        let priority: Int?\n        let mandatory: Bool?\n    }\n\n    public struct MfaSettings: Codable {\n        public init(deviceShareFactor: MfaSetting?, backUpShareFactor: MfaSetting?, socialBackupFactor: MfaSetting?, passwordFactor: MfaSetting?) {\n            self.deviceShareFactor = deviceShareFactor\n            self.backUpShareFactor = backUpShareFactor\n            self.socialBackupFactor = socialBackupFactor\n            self.passwordFactor = passwordFactor\n        }\n\n        let deviceShareFactor: MfaSetting?\n        let backUpShareFactor: MfaSetting?\n        let socialBackupFactor: MfaSetting?\n        let passwordFactor: MfaSetting?\n    }\n\n\n"})})})]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-swift",children:'let result = try await Web3Auth(\n    W3AInitParams(\n        clientId: "YOUR_CLIENT_ID",\n        network: .sapphire_devnet,\n        loginConfig: [\n            TypeOfLogin.google.rawValue: .init(\n                // Get it from Web3Auth Dashboard\n                verifier: "YOUR_VERIFIER_ID",\n                typeOfLogin: .google,\n                name: "Web3Auth-Aggregate-Verifier-Google-Example",\n                clientId: "YOUR_GOOGLE_CLIENT_ID",\n                // Get it from Web3Auth Dashboard\n                verifierSubIdentifier: "YOUR_VERIFIER_SUB_ID"\n            )\n        ],\n        whiteLabel: W3AWhiteLabelData(\n            appName: "Web3Auth Stub",\n            logoLight: "https://images.web3auth.io/web3auth-logo-w.svg",\n            logoDark: "https://images.web3auth.io/web3auth-logo-w.svg",\n            defaultLanguage: .en, // en, de, ja, ko, zh, es, fr, pt, nl\n            mode: .dark,\n            theme: ["primary": "#d53f8c"]),\n            mfaSettings: MfaSettings(\n                deviceShareFactor: MfaSetting(enable: true, priority: 1),\n                backUpShareFactor: MfaSetting(enable: true, priority: 2),\n                socialBackupFactor: MfaSetting(enable: true, priority: 3),\n                passwordFactor: MfaSetting(enable: true, priority: 4)\n        )\n    )).login(\n        W3ALoginParams(\n        loginProvider: .GOOGLE,\n        dappShare: nil,\n        extraLoginOptions: ExtraLoginOptions(display: nil, prompt: nil, max_age: nil, ui_locales: nil, id_token_hint: nil, id_token: nil, login_hint: nil, acr_values: nil, scope: nil, audience: nil, connection: nil, domain: nil, client_id: nil, redirect_uri: nil, leeway: nil, verifierIdField: nil, isVerifierIdCaseSensitive: nil, additionalParams: nil),\n            mfaLevel: .DEFAULT,\n            curve: .SECP256K1\n    ))\n'})})]})}function p(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},85162:(e,t,n)=>{n.d(t,{Z:()=>o});n(67294);var r=n(36905);const i={tabItem:"tabItem_Ymn6"};var a=n(85893);function o(e){let{children:t,hidden:n,className:o}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,r.Z)(i.tabItem,o),hidden:n,children:t})}},74866:(e,t,n)=>{n.d(t,{Z:()=>y});var r=n(67294),i=n(36905),a=n(12466),o=n(16550),l=n(20469),s=n(91980),c=n(67392),u=n(50012);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:i}}=e;return{value:t,label:n,attributes:r,default:i}}))}(n);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function p(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:n}=e;const i=(0,o.k6)(),a=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,s._X)(a),(0,r.useCallback)((e=>{if(!a)return;const t=new URLSearchParams(i.location.search);t.set(a,e),i.replace({...i.location,search:t.toString()})}),[a,i])]}function b(e){const{defaultValue:t,queryString:n=!1,groupId:i}=e,a=h(e),[o,s]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:a}))),[c,d]=f({queryString:n,groupId:i}),[b,m]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[i,a]=(0,u.Nk)(n);return[i,(0,r.useCallback)((e=>{n&&a.set(e)}),[n,a])]}({groupId:i}),g=(()=>{const e=c??b;return p({value:e,tabValues:a})?e:null})();(0,l.Z)((()=>{g&&s(g)}),[g]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);s(e),d(e),m(e)}),[d,m,a]),tabValues:a}}var m=n(72389);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=n(85893);function x(e){let{className:t,block:n,selectedValue:r,selectValue:o,tabValues:l}=e;const s=[],{blockElementScrollPositionUntilNextRender:c}=(0,a.o5)(),u=e=>{const t=e.currentTarget,n=s.indexOf(t),i=l[n].value;i!==r&&(c(t),o(i))},d=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const n=s.indexOf(e.currentTarget)+1;t=s[n]??s[0];break}case"ArrowLeft":{const n=s.indexOf(e.currentTarget)-1;t=s[n]??s[s.length-1];break}}t?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":n},t),children:l.map((e=>{let{value:t,label:n,attributes:a}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>s.push(e),onKeyDown:d,onClick:u,...a,className:(0,i.Z)("tabs__item",g.tabItem,a?.className,{"tabs__item--active":r===t}),children:n??t},t)}))})}function j(e){let{lazy:t,children:n,selectedValue:i}=e;const a=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=a.find((e=>e.props.value===i));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:a.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==i})))})}function A(e){const t=b(e);return(0,v.jsxs)("div",{className:(0,i.Z)("tabs-container",g.tabList),children:[(0,v.jsx)(x,{...e,...t}),(0,v.jsx)(j,{...e,...t})]})}function y(e){const t=(0,m.Z)();return(0,v.jsx)(A,{...e,children:d(e.children)},String(t))}},11151:(e,t,n)=>{n.d(t,{Z:()=>l,a:()=>o});var r=n(67294);const i={},a=r.createContext(i);function o(e){const t=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),r.createElement(a.Provider,{value:t},e.children)}}}]);