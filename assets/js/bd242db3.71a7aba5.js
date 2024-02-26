"use strict";(self.webpackChunkweb3auth_docs=self.webpackChunkweb3auth_docs||[]).push([[63588],{67821:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>s,default:()=>p,frontMatter:()=>r,metadata:()=>d,toc:()=>c});var i=t(85893),o=t(11151);const r={title:"Configure Deep Link & Whitelist"},s=void 0,d={type:"mdx",permalink:"/docs/quick-start/builder/pnp/android/stepContent/configureDeepLink",source:"@site/src/pages/quick-start/builder/pnp/android/stepContent/configureDeepLink.mdx",title:"Configure Deep Link & Whitelist",description:"Open your app's AndroidManifest.xml file and add the following deep link intent filter to your sign-in activity:",frontMatter:{title:"Configure Deep Link & Whitelist"},unlisted:!1},a={},c=[];function l(e){const n={a:"a",admonition:"admonition",code:"code",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:["Open your app's ",(0,i.jsx)(n.code,{children:"AndroidManifest.xml"})," file and add the following deep link intent filter to your sign-in activity:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-xml",children:'<intent-filter>\n  <action android:name="android.intent.action.VIEW" />\n\n  <category android:name="android.intent.category.DEFAULT" />\n  <category android:name="android.intent.category.BROWSABLE" />\n\n  \x3c!-- Accept URIs: {YOUR_APP_PACKAGE_NAME}://* --\x3e\n  <data android:scheme="{YOUR_APP_PACKAGE_NAME}" />\n</intent-filter>\n'})}),"\n",(0,i.jsxs)(n.admonition,{title:"Whitelist your app",type:"info",children:[(0,i.jsxs)(n.p,{children:["In order to whitelist your App, you'll need to create a project in the ",(0,i.jsx)(n.a,{href:"https://dashboard.web3auth.io",children:"Developer Dashboard"}),"."]}),(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Go to ",(0,i.jsx)(n.a,{href:"https://dashboard.web3auth.io/",children:"Developer Dashboard"}),", select your Web3Auth project."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Add ",(0,i.jsx)(n.code,{children:"{YOUR_APP_PACKAGE_NAME}://auth"})," to ",(0,i.jsx)(n.strong,{children:"Whitelist URLs"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Copy the ",(0,i.jsx)(n.code,{children:"Client ID"})," and paste it inside ",(0,i.jsx)(n.code,{children:"res/values/strings.xml"})," file."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["It will be used as ",(0,i.jsx)(n.code,{children:"R.string.web3auth_project_id"})," during initialization."]}),"\n"]}),"\n"]})]})]})}function p(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>d,a:()=>s});var i=t(67294);const o={},r=i.createContext(o);function s(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);