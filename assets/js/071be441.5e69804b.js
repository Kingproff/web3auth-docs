"use strict";(self.webpackChunkweb3auth_docs=self.webpackChunkweb3auth_docs||[]).push([[16353,80438,35543,72351,57849,14783,98828,34781],{78293:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>d});var r=n(85893),i=n(11151),a=n(74866),s=n(85162);const o={title:"Web3Auth SFA Swift/iOS Quick Start"},l=void 0,c={type:"mdx",permalink:"/docs/quick-start/builder/core_kit/sfa/ios/stepContent/iOSQuickStart",source:"@site/src/pages/quick-start/builder/core_kit/sfa/ios/stepContent/iOSQuickStart.mdx",title:"Web3Auth SFA Swift/iOS Quick Start",description:"This guide is designed to help you quickly integrate a basic instance of Web3Auth SFA in your Swift/iOS app.",frontMatter:{title:"Web3Auth SFA Swift/iOS Quick Start"},unlisted:!1},u={},d=[];function h(e){const t={a:"a",admonition:"admonition",code:"code",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:"This guide is designed to help you quickly integrate a basic instance of Web3Auth SFA in your Swift/iOS app."}),"\n",(0,r.jsxs)(t.p,{children:["If you face any problem anytime, you can always find help in the ",(0,r.jsx)(t.a,{href:"https://web3auth.io/community/c/help-core-kit/sfa-swift-sdk/30",children:"Web3Auth Community"}),"."]}),"\n",(0,r.jsx)(t.admonition,{title:"building locally",type:"tip",children:(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:"Clone the PnP Swift/iOS Quick Start Application"}),"\n",(0,r.jsxs)(a.Z,{groupId:"npm2yarn",children:[(0,r.jsx)(s.Z,{value:"npm",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-shell",children:"npx degit Web3Auth/web3auth-core-kit-examples/single-factor-auth-ios/sfa-ios-quick-start sfa-ios-quick-start\n"})})}),(0,r.jsx)(s.Z,{value:"yarn",label:"Yarn",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-shell",children:"npx degit Web3Auth/web3auth-core-kit-examples/single-factor-auth-ios/sfa-ios-quick-start sfa-ios-quick-start\n"})})}),(0,r.jsx)(s.Z,{value:"pnpm",label:"pnpm",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-shell",children:"npx degit Web3Auth/web3auth-core-kit-examples/single-factor-auth-ios/sfa-ios-quick-start sfa-ios-quick-start\n"})})})]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:"Install & Run"}),"\n",(0,r.jsxs)(a.Z,{groupId:"npm2yarn",children:[(0,r.jsx)(s.Z,{value:"npm",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-shell",children:"cd sfa-ios-quick-start\n# run project in Xcode\n"})})}),(0,r.jsx)(s.Z,{value:"yarn",label:"Yarn",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-shell",children:"cd sfa-ios-quick-start\n# run project in Xcode\n"})})}),(0,r.jsx)(s.Z,{value:"pnpm",label:"pnpm",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-shell",children:"cd sfa-ios-quick-start\n# run project in Xcode\n"})})})]}),"\n"]}),"\n"]})}),"\n",(0,r.jsx)(t.admonition,{title:"Requirements",type:"note",children:(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"iOS 14+, Xcode 11.4+ / 12.x & Swift 4.x / 5.x"}),"\n"]})})]})}function p(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},65978:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>a,metadata:()=>o,toc:()=>c});var r=n(85893),i=n(11151);const a={title:"Create and initialize the Web3Auth SFA instance"},s=void 0,o={type:"mdx",permalink:"/docs/quick-start/builder/core_kit/sfa/ios/stepContent/initialize",source:"@site/src/pages/quick-start/builder/core_kit/sfa/ios/stepContent/initialize.mdx",title:"Create and initialize the Web3Auth SFA instance",description:"Let's now create an instance of the SingleFactAuth.",frontMatter:{title:"Create and initialize the Web3Auth SFA instance"},unlisted:!1},l={},c=[];function u(e){const t={a:"a",admonition:"admonition",code:"code",p:"p",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:["Let's now create an instance of the ",(0,r.jsx)(t.code,{children:"SingleFactAuth"}),"."]}),"\n",(0,r.jsxs)(t.p,{children:["We need the ",(0,r.jsx)(t.code,{children:"network"})," to initialize SingleFactAuth class. ",(0,r.jsx)(t.code,{children:"network"})," signifies the type of network(",(0,r.jsx)(t.code,{children:"mainnet"}),", ",(0,r.jsx)(t.code,{children:"cyan"}),", ",(0,r.jsx)(t.code,{children:"aqua"}),", or ",(0,r.jsx)(t.code,{children:"testnet"}),") you want to\ninitialize web3auth with."]}),"\n",(0,r.jsx)(t.admonition,{title:"sdk reference",type:"info",children:(0,r.jsxs)(t.p,{children:["Read more about ",(0,r.jsx)(t.a,{href:"/sdk/core-kit/sfa-ios",children:"SFA iOS/Swift SDK"}),"."]})})]})}function d(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},63583:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>a,metadata:()=>o,toc:()=>c});var r=n(85893),i=n(11151);const a={title:"Install Web3Auth"},s=void 0,o={type:"mdx",permalink:"/docs/quick-start/builder/core_kit/sfa/ios/stepContent/installation",source:"@site/src/pages/quick-start/builder/core_kit/sfa/ios/stepContent/installation.mdx",title:"Install Web3Auth",description:"Add the Web3Auth SFA iOS SDK to your project",frontMatter:{title:"Install Web3Auth"},unlisted:!1},l={},c=[];function u(e){const t={a:"a",admonition:"admonition",code:"code",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:"Add the Web3Auth SFA iOS SDK to your project"}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsxs)(t.p,{children:["In Xcode, with your app project open, navigate to ",(0,r.jsx)(t.strong,{children:"File > Add Packages"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:"When prompted, add the tKey iOS SDK repository:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"https://github.com/Web3Auth/single-factor-auth-swift\n"})}),"\n",(0,r.jsxs)(t.p,{children:["From the ",(0,r.jsx)(t.code,{children:"Dependency Rule"})," dropdown, select ",(0,r.jsx)(t.code,{children:"Exact Version"})," and enter the\n",(0,r.jsx)(t.a,{href:"https://github.com/Web3Auth/single-factor-auth-swift/releases",children:"latest version"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(t.li,{children:["\n",(0,r.jsx)(t.p,{children:"When finished, Xcode will automatically begin resolving and downloading your dependencies in the background."}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(t.admonition,{title:"SDK Reference",type:"tip",children:(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.a,{href:"/sdk/core-kit/sfa-ios/install",children:"Installing Web3Auth SFA iOS"}),"."]}),"\n"]})})]})}function d(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},47046:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>a,metadata:()=>o,toc:()=>c});var r=n(85893),i=n(11151);const a={title:"Logging in your User"},s=void 0,o={type:"mdx",permalink:"/docs/quick-start/builder/core_kit/sfa/ios/stepContent/login",source:"@site/src/pages/quick-start/builder/core_kit/sfa/ios/stepContent/login.mdx",title:"Logging in your User",description:"Use the getKey function in the Web3Auth SFA Instance to log in the user.",frontMatter:{title:"Logging in your User"},unlisted:!1},l={},c=[];function u(e){const t={a:"a",admonition:"admonition",code:"code",li:"li",p:"p",ul:"ul",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:["Use the ",(0,r.jsx)(t.code,{children:"getKey"})," function in the Web3Auth SFA Instance to log in the user."]}),"\n",(0,r.jsx)(t.p,{children:"Using the information provided by your auth provider, within the id token, after verification, web3auth will return the private key for the respective\nuser."}),"\n",(0,r.jsx)(t.admonition,{title:"SDK Reference",type:"info",children:(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsxs)(t.a,{href:"/sdk/core-kit/sfa-ios/usage#getkey",children:[(0,r.jsx)(t.code,{children:"getKey()"})," function"]}),"."]}),"\n"]})})]})}function d(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},62183:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>a,metadata:()=>o,toc:()=>c});var r=n(85893),i=n(11151);const a={title:"Trigger Login using your Auth Provider"},s=void 0,o={type:"mdx",permalink:"/docs/quick-start/commonSteps/authProviderLogin",source:"@site/src/pages/quick-start/commonSteps/authProviderLogin.mdx",title:"Trigger Login using your Auth Provider",description:"Before you fetch your provider from Web3Auth, you need to trigger a login using your Auth Provider. Your Auth Provider, on a successful authentication",frontMatter:{title:"Trigger Login using your Auth Provider"},unlisted:!1},l={},c=[];function u(e){const t={a:"a",admonition:"admonition",p:"p",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:"Before you fetch your provider from Web3Auth, you need to trigger a login using your Auth Provider. Your Auth Provider, on a successful authentication\nwill return an ID Token, which will be passed to Web3Auth."}),"\n",(0,r.jsx)(t.admonition,{type:"info",children:(0,r.jsxs)(t.p,{children:["In this example, we're using Firebase as the authentication service. Web3Auth supports any OAuth2.0 compliant authentication service, we have\ndocumented a few of the most common ones ",(0,r.jsx)(t.a,{href:"/auth-provider-setup/",children:"here"}),"."]})})]})}function d(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},53641:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>l,toc:()=>u});var r=n(85893),i=n(11151);const a=n.p+"assets/images/create-verifier-d18533b1f4eb8c914bbc54b841e7caab.png",s={title:"Setting up your Verifier"},o=void 0,l={type:"mdx",permalink:"/docs/quick-start/commonSteps/createVerifier",source:"@site/src/pages/quick-start/commonSteps/createVerifier.mdx",title:"Setting up your Verifier",description:"One of the prerequisites of using the Core Kit SDKs, is the creation of a custom verifier. This can be done easily by setting up custom authentication",frontMatter:{title:"Setting up your Verifier"},unlisted:!1},c={},u=[];function d(e){const t={a:"a",admonition:"admonition",p:"p",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:"One of the prerequisites of using the Core Kit SDKs, is the creation of a custom verifier. This can be done easily by setting up custom authentication\nin your Web3Auth Dashboard."}),"\n",(0,r.jsx)(t.admonition,{type:"info",children:(0,r.jsxs)(t.p,{children:["Read more about ",(0,r.jsx)(t.a,{href:"/auth-provider-setup/verifiers",children:"Verifier Creation"})," and ",(0,r.jsx)(t.a,{href:"/auth-provider-setup/",children:"Custom Authentication Setup"})," for your Auth Provider."]})}),"\n",(0,r.jsx)("img",{src:a,style:{alignSelf:"center",maxWidth:"100%"},alt:"Verifier Modal on Web3Auth Dashboard"}),"\n",(0,r.jsx)("a",{className:"button button--primary",href:"https://dashboard.web3auth.io",target:"_blank",rel:"noreferrer noopener",children:(0,r.jsx)("span",{children:"Go to Developer Dashboard"})})]})}function h(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},85162:(e,t,n)=>{n.d(t,{Z:()=>s});n(67294);var r=n(36905);const i={tabItem:"tabItem_Ymn6"};var a=n(85893);function s(e){let{children:t,hidden:n,className:s}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,r.Z)(i.tabItem,s),hidden:n,children:t})}},74866:(e,t,n)=>{n.d(t,{Z:()=>k});var r=n(67294),i=n(36905),a=n(12466),s=n(16550),o=n(20469),l=n(91980),c=n(67392),u=n(50012);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:i}}=e;return{value:t,label:n,attributes:r,default:i}}))}(n);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function p(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:n}=e;const i=(0,s.k6)(),a=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l._X)(a),(0,r.useCallback)((e=>{if(!a)return;const t=new URLSearchParams(i.location.search);t.set(a,e),i.replace({...i.location,search:t.toString()})}),[a,i])]}function m(e){const{defaultValue:t,queryString:n=!1,groupId:i}=e,a=h(e),[s,l]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:a}))),[c,d]=f({queryString:n,groupId:i}),[m,g]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[i,a]=(0,u.Nk)(n);return[i,(0,r.useCallback)((e=>{n&&a.set(e)}),[n,a])]}({groupId:i}),b=(()=>{const e=c??m;return p({value:e,tabValues:a})?e:null})();(0,o.Z)((()=>{b&&l(b)}),[b]);return{selectedValue:s,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),g(e)}),[d,g,a]),tabValues:a}}var g=n(72389);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=n(85893);function j(e){let{className:t,block:n,selectedValue:r,selectValue:s,tabValues:o}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,a.o5)(),u=e=>{const t=e.currentTarget,n=l.indexOf(t),i=o[n].value;i!==r&&(c(t),s(i))},d=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const n=l.indexOf(e.currentTarget)+1;t=l[n]??l[0];break}case"ArrowLeft":{const n=l.indexOf(e.currentTarget)-1;t=l[n]??l[l.length-1];break}}t?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":n},t),children:o.map((e=>{let{value:t,label:n,attributes:a}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>l.push(e),onKeyDown:d,onClick:u,...a,className:(0,i.Z)("tabs__item",b.tabItem,a?.className,{"tabs__item--active":r===t}),children:n??t},t)}))})}function y(e){let{lazy:t,children:n,selectedValue:i}=e;const a=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=a.find((e=>e.props.value===i));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:a.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==i})))})}function v(e){const t=m(e);return(0,x.jsxs)("div",{className:(0,i.Z)("tabs-container",b.tabList),children:[(0,x.jsx)(j,{...e,...t}),(0,x.jsx)(y,{...e,...t})]})}function k(e){const t=(0,g.Z)();return(0,x.jsx)(v,{...e,children:d(e.children)},String(t))}},65684:(e,t,n)=>{n.r(t),n.d(t,{default:()=>u});var r=n(1003),i=n(53641),a=n(62183),s=n(65978),o=n(63583),l=n(47046),c=n(78293);const u=(0,r.toSteps)({iOSQuickStart:c,installation:o,createVerifier:i,authProviderLogin:a,initialization:s,login:l})},1003:(e,t,n)=>{n.r(t),n.d(t,{ReplaceFileAggregator:()=>s,replaceFileVariable:()=>o,toStep:()=>i,toSteps:()=>a});n(67294);var r=n(85893);function i(e){const t=e.default;return{title:e.frontMatter.title,content:(0,r.jsx)(t,{})}}function a(e){return Object.fromEntries(Object.entries(e).map((e=>{let[t,n]=e;return[t,i(n)]})))}class s{replacementOutcomes=[];replaceFileVariable(e,t,n,r){const i=r.split("\n").length-3,a=e.split("\n");let s;for(let l=0;l<a.length;l+=1)a[l].includes(n)&&(s=l);s+=1;const o=new RegExp(`\n *// REPLACE-${n}-\n *`,"gm");return this.replacementOutcomes.push({filename:t,replacementLineCount:i,variableLine:s}),e.replace(o,r)}highlightRange(e,t,n){const r=t.split("\n"),i=[],a=[];for(let s=0;s<r.length;s+=1)r[s].includes(`IMP START - ${n}`)&&i.push(s),r[s].includes(`IMP END - ${n}`)&&a.push(s);return{range:`${i[0]}-${a[0]}`,filename:e,fileContent:t,variableName:n}}rangeOffsetEditor(e){const t=e.range.split("-");for(let n=0;n<t.length;n+=1){let r=parseInt(t[n],10),i=0;for(let t=0;t<this.replacementOutcomes.length;t+=1){r+i>this.replacementOutcomes[t].variableLine&&this.replacementOutcomes[t].filename===e.filename&&(i+=this.replacementOutcomes[t].replacementLineCount)}r+=i,t[n]=r.toString()}return{range:t.join("-"),filename:e.filename}}}function o(e,t,n){const r=new RegExp(`\n *// REPLACE-${t}-\n *`,"gm");return e.replace(r,n)}},11151:(e,t,n)=>{n.d(t,{Z:()=>o,a:()=>s});var r=n(67294);const i={},a=r.createContext(i);function s(e){const t=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),r.createElement(a.Provider,{value:t},e.children)}}}]);