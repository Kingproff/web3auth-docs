"use strict";(self.webpackChunkweb3auth_docs=self.webpackChunkweb3auth_docs||[]).push([[5565],{79090:(e,s,r)=>{r.r(s),r.d(s,{assets:()=>l,contentTitle:()=>t,default:()=>a,frontMatter:()=>n,metadata:()=>i,toc:()=>c});var d=r(85893),h=r(11151);const n={title:"Seed Phrase Module",displayed_sidebar:"sdk",description:"Core Kit tKey Android SDK - Modules - Seed Phrase Module | Documentation - Web3Auth"},t=void 0,i={id:"sdk/core-kit/tkey-android/modules/seed-phrase",title:"Seed Phrase Module",description:"Core Kit tKey Android SDK - Modules - Seed Phrase Module | Documentation - Web3Auth",source:"@site/docs/sdk/core-kit/tkey-android/modules/seed-phrase.mdx",sourceDirName:"sdk/core-kit/tkey-android/modules",slug:"/sdk/core-kit/tkey-android/modules/seed-phrase",permalink:"/docs/sdk/core-kit/tkey-android/modules/seed-phrase",draft:!1,unlisted:!1,editUrl:"https://github.com/web3auth/web3auth-docs/edit/master/docs/sdk/core-kit/tkey-android/modules/seed-phrase.mdx",tags:[],version:"current",frontMatter:{title:"Seed Phrase Module",displayed_sidebar:"sdk",description:"Core Kit tKey Android SDK - Modules - Seed Phrase Module | Documentation - Web3Auth"},sidebar:"sdk",previous:{title:"Security Question Module",permalink:"/docs/sdk/core-kit/tkey-android/modules/security-questions"},next:{title:"Share Serialization Module",permalink:"/docs/sdk/core-kit/tkey-android/modules/share-serialization"}},l={},c=[{value:"<code>setSeedPhrase()</code>",id:"setseedphrase",level:2},{value:"Parameters",id:"parameters",level:4},{value:"<code>changePhrase()</code>",id:"changephrase",level:2},{value:"Parameters",id:"parameters-1",level:4},{value:"<code>getPhrases()</code>",id:"getphrases",level:2},{value:"Parameters",id:"parameters-2",level:4},{value:"<code>deletePhrase()</code>",id:"deletephrase",level:2},{value:"Parameters",id:"parameters-3",level:4}];function o(e){const s={code:"code",h2:"h2",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,h.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(s.p,{children:"SeedPhraseModule is an Android module that provides functionality for setting, changing, getting, and deleting seed phrases for a ThresholdKey object."}),"\n",(0,d.jsx)(s.p,{children:"To use the SeedPhraseModule in your Android project, you will need to import the module as follows:"}),"\n",(0,d.jsx)(s.pre,{children:(0,d.jsx)(s.code,{className:"language-java",children:"import com.web3auth.tkey.ThresholdKey.ThresholdKey;\nimport com.web3auth.tkey.ThresholdKey.Modules.SeedPhraseModule;\n"})}),"\n",(0,d.jsxs)(s.p,{children:[(0,d.jsx)(s.code,{children:"SeedPhraseModule"})," is a class that provides the following methods:"]}),"\n",(0,d.jsxs)(s.table,{children:[(0,d.jsx)(s.thead,{children:(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.th,{children:"Function"}),(0,d.jsx)(s.th,{children:"Description"}),(0,d.jsx)(s.th,{children:"Arguments"}),(0,d.jsx)(s.th,{children:"Async"}),(0,d.jsx)(s.th,{children:"return"})]})}),(0,d.jsxs)(s.tbody,{children:[(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"setSeedPhrase"})}),(0,d.jsx)(s.td,{children:"Set seed phrase to corresponding tKey"}),(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"thresholdKey: ThresholdKey, format: String, phrase: String?, number_of_wallets: UInt32"})}),(0,d.jsx)(s.td,{children:"Yes"}),(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"void"})})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"changePhrase"})}),(0,d.jsx)(s.td,{children:"Changes specific seed phrase"}),(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"thresholdKey: ThresholdKey, old_phrase: String, new_phrase: String"})}),(0,d.jsx)(s.td,{children:"Yes"}),(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"void"})})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"getPhrases"})}),(0,d.jsx)(s.td,{children:"Gets all seed phrases stored in tKey."}),(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"thresholdKey: ThresholdKey"})}),(0,d.jsx)(s.td,{children:"Yes"}),(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"[seedPhraseStruct] "})})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"deletePhrase"})}),(0,d.jsx)(s.td,{children:"Delete the seed phrase"}),(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"thresholdKey: ThresholdKey, phrase: String"})}),(0,d.jsx)(s.td,{children:"Yes"}),(0,d.jsx)(s.td,{children:(0,d.jsx)(s.code,{children:"void"})})]})]})]}),"\n",(0,d.jsx)(s.h2,{id:"setseedphrase",children:(0,d.jsx)(s.code,{children:"setSeedPhrase()"})}),"\n",(0,d.jsx)(s.p,{children:(0,d.jsx)(s.code,{children:"public static void setSeedPhrase(ThresholdKey thresholdKey, String format, @Nullable String phrase, int wallets, ThresholdKeyCallback<Boolean> callback)"})}),"\n",(0,d.jsx)(s.p,{children:"This function sets the seed phrase for the given ThresholdKey."}),"\n",(0,d.jsx)(s.h4,{id:"parameters",children:"Parameters"}),"\n",(0,d.jsxs)(s.table,{children:[(0,d.jsx)(s.thead,{children:(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.th,{children:"Parameters"}),(0,d.jsx)(s.th,{children:"Type"}),(0,d.jsx)(s.th,{children:"Description"})]})}),(0,d.jsxs)(s.tbody,{children:[(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"thresholdKey"}),(0,d.jsx)(s.td,{children:"ThresholdKey"}),(0,d.jsx)(s.td,{children:"The ThresholdKey object to set the seed phrase for."})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"format"}),(0,d.jsx)(s.td,{children:"String"}),(0,d.jsx)(s.td,{children:"The format of the seed phrase."})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"phrase"}),(0,d.jsx)(s.td,{children:"String?"}),(0,d.jsx)(s.td,{children:"The seed phrase. If nil, a random seed phrase is generated."})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"wallets"}),(0,d.jsx)(s.td,{children:"int"}),(0,d.jsx)(s.td,{children:"The number of wallets to derive from the seed phrase."})]})]})]}),"\n",(0,d.jsx)(s.p,{children:(0,d.jsx)(s.strong,{children:"Returns"})}),"\n",(0,d.jsxs)(s.ul,{children:["\n",(0,d.jsx)(s.li,{children:"Void"}),"\n"]}),"\n",(0,d.jsx)(s.p,{children:(0,d.jsx)(s.strong,{children:"Throws"})}),"\n",(0,d.jsxs)(s.ul,{children:["\n",(0,d.jsx)(s.li,{children:"Error: An error if the operation fails."}),"\n"]}),"\n",(0,d.jsx)(s.h2,{id:"changephrase",children:(0,d.jsx)(s.code,{children:"changePhrase()"})}),"\n",(0,d.jsx)(s.p,{children:(0,d.jsx)(s.code,{children:"public static void changePhrase(ThresholdKey thresholdKey, String oldPhrase, String newPhrase, ThresholdKeyCallback<Boolean> callback)"})}),"\n",(0,d.jsx)(s.p,{children:"This function changes the seed phrase of the given ThresholdKey. The old_phrase parameter specifies the old seed phrase, and the new_phrase parameter\nspecifies the new seed phrase. The function is asynchronous and can throw an error."}),"\n",(0,d.jsx)(s.h4,{id:"parameters-1",children:"Parameters"}),"\n",(0,d.jsxs)(s.table,{children:[(0,d.jsx)(s.thead,{children:(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.th,{children:"Parameters"}),(0,d.jsx)(s.th,{children:"Type"}),(0,d.jsx)(s.th,{children:"Description"})]})}),(0,d.jsxs)(s.tbody,{children:[(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"thresholdKey"}),(0,d.jsx)(s.td,{children:"ThresholdKey"}),(0,d.jsx)(s.td,{children:"The ThresholdKey object to change the seed phrase for."})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"oldPhrase"}),(0,d.jsx)(s.td,{children:"String"}),(0,d.jsx)(s.td,{children:"The old seed phrase."})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"newPhrase"}),(0,d.jsx)(s.td,{children:"String"}),(0,d.jsx)(s.td,{children:"The new seed phrase."})]})]})]}),"\n",(0,d.jsx)(s.p,{children:(0,d.jsx)(s.strong,{children:"Returns"})}),"\n",(0,d.jsxs)(s.ul,{children:["\n",(0,d.jsx)(s.li,{children:"Void"}),"\n"]}),"\n",(0,d.jsx)(s.p,{children:(0,d.jsx)(s.strong,{children:"Throws"})}),"\n",(0,d.jsxs)(s.ul,{children:["\n",(0,d.jsx)(s.li,{children:"Error: An error if the operation fails."}),"\n"]}),"\n",(0,d.jsx)(s.h2,{id:"getphrases",children:(0,d.jsx)(s.code,{children:"getPhrases()"})}),"\n",(0,d.jsx)(s.p,{children:(0,d.jsx)(s.code,{children:"public static String getPhrases(ThresholdKey thresholdKey) throws RuntimeError"})}),"\n",(0,d.jsx)(s.p,{children:"This function returns an array of seedPhraseStruct objects, which contain the seed phrases and their type for the given ThresholdKey."}),"\n",(0,d.jsx)(s.h4,{id:"parameters-2",children:"Parameters"}),"\n",(0,d.jsxs)(s.table,{children:[(0,d.jsx)(s.thead,{children:(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.th,{children:"Parameters"}),(0,d.jsx)(s.th,{children:"Type"}),(0,d.jsx)(s.th,{children:"Description"})]})}),(0,d.jsx)(s.tbody,{children:(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"thresholdKey"}),(0,d.jsx)(s.td,{children:"ThresholdKey"}),(0,d.jsx)(s.td,{children:"The ThresholdKey object to get the seed phrases for."})]})})]}),"\n",(0,d.jsx)(s.p,{children:(0,d.jsx)(s.strong,{children:"Returns"})}),"\n",(0,d.jsxs)(s.ul,{children:["\n",(0,d.jsx)(s.li,{children:"seedPhraseStruct"}),"\n"]}),"\n",(0,d.jsx)(s.p,{children:(0,d.jsx)(s.strong,{children:"Throws"})}),"\n",(0,d.jsxs)(s.ul,{children:["\n",(0,d.jsx)(s.li,{children:"RuntimeError: An error if the operation fails."}),"\n"]}),"\n",(0,d.jsx)(s.h2,{id:"deletephrase",children:(0,d.jsx)(s.code,{children:"deletePhrase()"})}),"\n",(0,d.jsx)(s.p,{children:(0,d.jsx)(s.code,{children:"public static void deletePhrase(ThresholdKey thresholdKey, String phrase, ThresholdKeyCallback<Boolean> callback)"})}),"\n",(0,d.jsx)(s.p,{children:"This method deletes a seed phrase from the given ThresholdKey."}),"\n",(0,d.jsx)(s.h4,{id:"parameters-3",children:"Parameters"}),"\n",(0,d.jsxs)(s.table,{children:[(0,d.jsx)(s.thead,{children:(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.th,{children:"Parameters"}),(0,d.jsx)(s.th,{children:"Type"}),(0,d.jsx)(s.th,{children:"Description"})]})}),(0,d.jsxs)(s.tbody,{children:[(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"thresholdKey"}),(0,d.jsx)(s.td,{children:"ThresholdKey"}),(0,d.jsx)(s.td,{children:"The ThresholdKey instance from which to delete the seed phrase."})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"phrase"}),(0,d.jsx)(s.td,{children:"String"}),(0,d.jsx)(s.td,{children:"The seed phrase to delete, as a string."})]})]})]}),"\n",(0,d.jsx)(s.p,{children:(0,d.jsx)(s.strong,{children:"Returns"})}),"\n",(0,d.jsxs)(s.ul,{children:["\n",(0,d.jsx)(s.li,{children:"Void"}),"\n"]}),"\n",(0,d.jsx)(s.p,{children:(0,d.jsx)(s.strong,{children:"Throws"})}),"\n",(0,d.jsxs)(s.ul,{children:["\n",(0,d.jsx)(s.li,{children:"Error: An error if the operation fails."}),"\n"]})]})}function a(e={}){const{wrapper:s}={...(0,h.a)(),...e.components};return s?(0,d.jsx)(s,{...e,children:(0,d.jsx)(o,{...e})}):o(e)}},11151:(e,s,r)=>{r.d(s,{Z:()=>i,a:()=>t});var d=r(67294);const h={},n=d.createContext(h);function t(e){const s=d.useContext(n);return d.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function i(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(h):e.components||h:t(e.components),d.createElement(n.Provider,{value:s},e.children)}}}]);