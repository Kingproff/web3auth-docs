"use strict";(self.webpackChunkweb3auth_docs=self.webpackChunkweb3auth_docs||[]).push([[32824],{55093:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>d,default:()=>a,frontMatter:()=>n,metadata:()=>l,toc:()=>h});var s=r(85893),i=r(11151);const n={title:"Private Keys Module - tKey iOS SDK",sidebar_label:"Private Keys",displayed_sidebar:"sdk",description:"Core Kit tKey iOS SDK - Modules - Private Keys | Documentation - Web3Auth"},d=void 0,l={id:"sdk/core-kit/tkey-ios/modules/private-keys",title:"Private Keys Module - tKey iOS SDK",description:"Core Kit tKey iOS SDK - Modules - Private Keys | Documentation - Web3Auth",source:"@site/docs/sdk/core-kit/tkey-ios/modules/private-keys.mdx",sourceDirName:"sdk/core-kit/tkey-ios/modules",slug:"/sdk/core-kit/tkey-ios/modules/private-keys",permalink:"/docs/sdk/core-kit/tkey-ios/modules/private-keys",draft:!1,unlisted:!1,editUrl:"https://github.com/web3auth/web3auth-docs/edit/master/docs/sdk/core-kit/tkey-ios/modules/private-keys.mdx",tags:[],version:"current",frontMatter:{title:"Private Keys Module - tKey iOS SDK",sidebar_label:"Private Keys",displayed_sidebar:"sdk",description:"Core Kit tKey iOS SDK - Modules - Private Keys | Documentation - Web3Auth"},sidebar:"sdk",previous:{title:"Modules",permalink:"/docs/sdk/core-kit/tkey-ios/modules/"},next:{title:"Security Question",permalink:"/docs/sdk/core-kit/tkey-ios/modules/security-questions"}},c={},h=[{value:"<code>set_private_key()</code>",id:"set_private_key",level:2},{value:"Parameters",id:"parameters",level:4},{value:"<code>get_private_keys()</code>",id:"get_private_keys",level:2},{value:"Parameters",id:"parameters-1",level:4},{value:"<code>get_private_key_accounts()</code>",id:"get_private_key_accounts",level:2},{value:"Parameters",id:"parameters-2",level:4}];function o(e){const t={code:"code",h2:"h2",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:"The PrivateKeysModule module provides an interface for setting, getting and managing private keys for a ThresholdKey object."}),"\n",(0,s.jsx)(t.p,{children:"To use the PrivateKeysModule in your Swift project, you will need to import the module as follows:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-swift",children:"import tkey_pkg\n"})}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.code,{children:"PrivateKeysModule"})," is a class that provides the following methods:"]}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Function"}),(0,s.jsx)(t.th,{children:"Description"}),(0,s.jsx)(t.th,{children:"Arguments"}),(0,s.jsx)(t.th,{children:"Async"}),(0,s.jsx)(t.th,{children:"return"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"set_private_key"})}),(0,s.jsx)(t.td,{children:"Set private key to corresponding tKey"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"threshold_key: ThresholdKey, key: String?, format: String"})}),(0,s.jsx)(t.td,{children:"Yes"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"Bool"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"get_private_keys"})}),(0,s.jsx)(t.td,{children:"Get Private Keys"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"threshold_key: ThresholdKey"})}),(0,s.jsx)(t.td,{children:"No"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"[[String:String]]"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"get_private_key_accounts"})}),(0,s.jsx)(t.td,{children:"Get private Key accounts"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"threshold_key: ThresholdKey"})}),(0,s.jsx)(t.td,{children:"No"}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"[String]"})})]})]})]}),"\n",(0,s.jsx)(t.h2,{id:"set_private_key",children:(0,s.jsx)(t.code,{children:"set_private_key()"})}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.code,{children:"set_private_key(threshold_key: ThresholdKey, key: String?, format: String) async throws -> Bool"})}),"\n",(0,s.jsx)(t.p,{children:"Sets a private key for a ThresholdKey object."}),"\n",(0,s.jsx)(t.h4,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Parameters"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"threshold_key"}),(0,s.jsx)(t.td,{children:"ThresholdKey"}),(0,s.jsx)(t.td,{children:"A ThresholdKey object."})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"key"}),(0,s.jsx)(t.td,{children:"String?"}),(0,s.jsx)(t.td,{children:"A private key in hex-encoded/mnemonic string format"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"format"}),(0,s.jsx)(t.td,{children:"String"}),(0,s.jsx)(t.td,{children:"A string representing the format of the private key."})]})]})]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Returns"})}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Bool: A boolean indicating whether the operation succeeded or not."}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"get_private_keys",children:(0,s.jsx)(t.code,{children:"get_private_keys()"})}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.code,{children:"get_private_keys(threshold_key: ThresholdKey) throws -> [[String:String]]"})}),"\n",(0,s.jsx)(t.p,{children:"Returns a list of private keys for a ThresholdKey object."}),"\n",(0,s.jsx)(t.h4,{id:"parameters-1",children:"Parameters"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Parameters"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsx)(t.tbody,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"threshold_key"}),(0,s.jsx)(t.td,{children:"ThresholdKey"}),(0,s.jsx)(t.td,{children:"A ThresholdKey object."})]})})]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Returns"})}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["[[String",":String","]]: A list of private keys as dictionaries."]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Throws"})}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"RuntimeError: If there is an error in during runtime."}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"get_private_key_accounts",children:(0,s.jsx)(t.code,{children:"get_private_key_accounts()"})}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.code,{children:"get_private_key_accounts(threshold_key: ThresholdKey) throws -> [String]"})}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Returns a list of accounts for which private keys are available."}),"\n"]}),"\n",(0,s.jsx)(t.h4,{id:"parameters-2",children:"Parameters"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Parameters"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsx)(t.tbody,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"threshold_key"}),(0,s.jsx)(t.td,{children:"ThresholdKey"}),(0,s.jsx)(t.td,{children:"A ThresholdKey object."})]})})]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Returns"})}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"[String]: A list of accounts for which private keys are available."}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Throws"})}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"RuntimeError: If there is an error in during runtime."}),"\n"]})]})}function a(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},11151:(e,t,r)=>{r.d(t,{Z:()=>l,a:()=>d});var s=r(67294);const i={},n=s.createContext(i);function d(e){const t=s.useContext(n);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),s.createElement(n.Provider,{value:t},e.children)}}}]);