"use strict";(self.webpackChunkweb3auth_docs=self.webpackChunkweb3auth_docs||[]).push([[62373],{19375:(e,r,s)=>{s.r(r),s.d(r,{assets:()=>l,contentTitle:()=>d,default:()=>a,frontMatter:()=>i,metadata:()=>h,toc:()=>c});var n=s(85893),t=s(11151);const i={title:"Security Question Module",displayed_sidebar:"sdk",description:"Core Kit tKey Android SDK - Modules - Security Questions  | Documentation - Web3Auth"},d=void 0,h={id:"sdk/core-kit/tkey-android/modules/security-questions",title:"Security Question Module",description:"Core Kit tKey Android SDK - Modules - Security Questions  | Documentation - Web3Auth",source:"@site/docs/sdk/core-kit/tkey-android/modules/security-questions.mdx",sourceDirName:"sdk/core-kit/tkey-android/modules",slug:"/sdk/core-kit/tkey-android/modules/security-questions",permalink:"/docs/sdk/core-kit/tkey-android/modules/security-questions",draft:!1,unlisted:!1,editUrl:"https://github.com/web3auth/web3auth-docs/edit/master/docs/sdk/core-kit/tkey-android/modules/security-questions.mdx",tags:[],version:"current",frontMatter:{title:"Security Question Module",displayed_sidebar:"sdk",description:"Core Kit tKey Android SDK - Modules - Security Questions  | Documentation - Web3Auth"},sidebar:"sdk",previous:{title:"Private Keys Module",permalink:"/docs/sdk/core-kit/tkey-android/modules/private-keys"},next:{title:"Seed Phrase Module",permalink:"/docs/sdk/core-kit/tkey-android/modules/seed-phrase"}},l={},c=[{value:"<code>generateNewShare()</code>",id:"generatenewshare",level:2},{value:"Parameters",id:"parameters",level:4},{value:"<code>inputShare()</code>",id:"inputshare",level:2},{value:"Parameters",id:"parameters-1",level:4},{value:"<code>changeSecurityQuestionAndAnswer()</code>",id:"changesecurityquestionandanswer",level:2},{value:"Parameters",id:"parameters-2",level:4},{value:"<code>storeAnswer()</code>",id:"storeanswer",level:2},{value:"Parameters",id:"parameters-3",level:4},{value:"<code>getAnswer()</code>",id:"getanswer",level:2},{value:"Parameters",id:"parameters-4",level:4},{value:"<code>getQuestions()</code>",id:"getquestions",level:2},{value:"Parameters",id:"parameters-5",level:4}];function o(e){const r={code:"code",h2:"h2",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.p,{children:"SecurityQuestionModule is an Android module that provides functionality for setting, changing, getting, and deleting security question and password\nfor a ThresholdKey object."}),"\n",(0,n.jsx)(r.p,{children:"To use the SecurityQuestionModule in your Android project, you will need to import the module as follows:"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-java",children:"import com.web3auth.tkey.ThresholdKey.ThresholdKey;\nimport com.web3auth.tkey.ThresholdKey.Modules.SecurityQuestionModule;\n"})}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.code,{children:"SecurityQuestionModule"})," is a class that provides the following methods:"]}),"\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Function"}),(0,n.jsx)(r.th,{children:"Description"}),(0,n.jsx)(r.th,{children:"Arguments"}),(0,n.jsx)(r.th,{children:"Async"}),(0,n.jsx)(r.th,{children:"return"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"generateNewShare"})}),(0,n.jsx)(r.td,{children:"generate a new Share with security question"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"thresholdKey: ThresholdKey, questions: String, answer: String"})}),(0,n.jsx)(r.td,{children:"Yes"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"GenerateShareStoreResult"})})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"inputShare"})}),(0,n.jsx)(r.td,{children:"input share from security question"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"thresholdKey: ThresholdKey, answer: String"})}),(0,n.jsx)(r.td,{children:"Yes"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"Bool"})})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"changeSecurityQuestionAndAnswer"})}),(0,n.jsx)(r.td,{children:"Get private Key accounts"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"thresholdKey: ThresholdKey, questions: String, answer: String"})}),(0,n.jsx)(r.td,{children:"Yes"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"Bool"})})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"storeAnswer"})}),(0,n.jsx)(r.td,{children:"Store answer of security question in tKey"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"thresholdKey: ThresholdKey, answer: String"})}),(0,n.jsx)(r.td,{children:"Yes"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"Bool"})})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"getAnswer"})}),(0,n.jsx)(r.td,{children:"Get answer of security question stored in tKey"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"thresholdKey: ThresholdKey"})}),(0,n.jsx)(r.td,{children:"No"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"String"})})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"getQuestions"})}),(0,n.jsx)(r.td,{children:"Get security questions stored in tKey"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"thresholdKey: ThresholdKey"})}),(0,n.jsx)(r.td,{children:"No"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"String"})})]})]})]}),"\n",(0,n.jsx)(r.h2,{id:"generatenewshare",children:(0,n.jsx)(r.code,{children:"generateNewShare()"})}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.code,{children:"public static void generateNewShare(ThresholdKey thresholdKey, String questions, String answer, ThresholdKeyCallback<GenerateShareStoreResult> callback)"})}),"\n",(0,n.jsx)(r.p,{children:"This function generates a new share for a given ThresholdKey, along with the user's security question and answer."}),"\n",(0,n.jsx)(r.h4,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Parameters"}),(0,n.jsx)(r.th,{children:"Type"}),(0,n.jsx)(r.th,{children:"Description"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"thresholdKey"}),(0,n.jsx)(r.td,{children:"ThresholdKey"}),(0,n.jsx)(r.td,{children:"A ThresholdKey object representing the key for which to generate a new share."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"questions"}),(0,n.jsx)(r.td,{children:"String"}),(0,n.jsx)(r.td,{children:"A String representing the user's security question."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"answer"}),(0,n.jsx)(r.td,{children:"String"}),(0,n.jsx)(r.td,{children:"A String representing the user's security answer."})]})]})]}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Returns"})}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsx)(r.li,{children:"GenerateShareStoreResult: A struct that contains information about the new share that was generated."}),"\n"]}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Throws"})}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsx)(r.li,{children:"Error: An error if the operation failed."}),"\n"]}),"\n",(0,n.jsx)(r.h2,{id:"inputshare",children:(0,n.jsx)(r.code,{children:"inputShare()"})}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.code,{children:"public static void inputShare(ThresholdKey thresholdKey, String answer, ThresholdKeyCallback<Boolean> callback)"})}),"\n",(0,n.jsx)(r.p,{children:"A method that inputs a share for a threshold key based on a security question and answer."}),"\n",(0,n.jsx)(r.h4,{id:"parameters-1",children:"Parameters"}),"\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Parameters"}),(0,n.jsx)(r.th,{children:"Type"}),(0,n.jsx)(r.th,{children:"Description"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"thresholdKey"}),(0,n.jsx)(r.td,{children:"ThresholdKey"}),(0,n.jsx)(r.td,{children:"A ThresholdKey instance for which to input a share."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"answer"}),(0,n.jsx)(r.td,{children:"String"}),(0,n.jsx)(r.td,{children:"A String representing the answer to the security questions."})]})]})]}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Returns"})}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsx)(r.li,{children:"Boolean: true if the share was successfully input, false otherwise."}),"\n"]}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Throws"})}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsx)(r.li,{children:"Error: An error if the operation failed."}),"\n"]}),"\n",(0,n.jsx)(r.h2,{id:"changesecurityquestionandanswer",children:(0,n.jsx)(r.code,{children:"changeSecurityQuestionAndAnswer()"})}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.code,{children:"public static void changeSecurityQuestionAndAnswer(ThresholdKey thresholdKey, String questions, String answer, ThresholdKeyCallback<Boolean> callback)"})}),"\n",(0,n.jsx)(r.p,{children:"A method that changes the security questions and answers for a threshold key."}),"\n",(0,n.jsx)(r.h4,{id:"parameters-2",children:"Parameters"}),"\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Parameters"}),(0,n.jsx)(r.th,{children:"Type"}),(0,n.jsx)(r.th,{children:"Description"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"thresholdKey"}),(0,n.jsx)(r.td,{children:"ThresholdKey"}),(0,n.jsx)(r.td,{children:"A ThresholdKey instance for which to change the security questions and answers."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"questions"}),(0,n.jsx)(r.td,{children:"String"}),(0,n.jsx)(r.td,{children:"A String representing a new set of security questions to be answered."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"answer"}),(0,n.jsx)(r.td,{children:"String"}),(0,n.jsx)(r.td,{children:"A String representing the answer to the security questions."})]})]})]}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Returns"})}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsx)(r.li,{children:"Bool: true if the security questions and answers were successfully changed, false otherwise."}),"\n"]}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Throws"})}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsx)(r.li,{children:"Error: An error if the operation failed."}),"\n"]}),"\n",(0,n.jsx)(r.h2,{id:"storeanswer",children:(0,n.jsx)(r.code,{children:"storeAnswer()"})}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.code,{children:"public static void storeAnswer(ThresholdKey thresholdKey, String answer, ThresholdKeyCallback<Boolean> callback)"})}),"\n",(0,n.jsx)(r.p,{children:"A method that stores the answer to a security question for a threshold key."}),"\n",(0,n.jsx)(r.h4,{id:"parameters-3",children:"Parameters"}),"\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Parameters"}),(0,n.jsx)(r.th,{children:"Type"}),(0,n.jsx)(r.th,{children:"Description"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"thresholdKey"}),(0,n.jsx)(r.td,{children:"ThresholdKey"}),(0,n.jsx)(r.td,{children:"A ThresholdKey instance for which to store the answer to a security question."})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"answer"}),(0,n.jsx)(r.td,{children:"String"}),(0,n.jsx)(r.td,{children:"A String representing the answer to the security question."})]})]})]}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Returns"})}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsx)(r.li,{children:"Bool: true if the answer was successfully stored, false otherwise."}),"\n"]}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Throws"})}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsx)(r.li,{children:"Error: An error if the operation failed."}),"\n"]}),"\n",(0,n.jsx)(r.h2,{id:"getanswer",children:(0,n.jsx)(r.code,{children:"getAnswer()"})}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.code,{children:"public static String getAnswer(ThresholdKey thresholdKey) throws RuntimeError"})}),"\n",(0,n.jsx)(r.p,{children:"Get answer of security question stored in tKey."}),"\n",(0,n.jsx)(r.h4,{id:"parameters-4",children:"Parameters"}),"\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Parameters"}),(0,n.jsx)(r.th,{children:"Type"}),(0,n.jsx)(r.th,{children:"Description"})]})}),(0,n.jsx)(r.tbody,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"thresholdKey"}),(0,n.jsx)(r.td,{children:"ThresholdKey"}),(0,n.jsx)(r.td,{children:"A ThresholdKey instance for which to store the answer to a security question."})]})})]}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Returns"})}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsx)(r.li,{children:"String: A String representing the answer to the security questions."}),"\n"]}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Throws"})}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsx)(r.li,{children:"RuntimeError: An error if the operation failed."}),"\n"]}),"\n",(0,n.jsx)(r.h2,{id:"getquestions",children:(0,n.jsx)(r.code,{children:"getQuestions()"})}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.code,{children:"public static String getQuestions(ThresholdKey thresholdKey) throws RuntimeError"})}),"\n",(0,n.jsx)(r.p,{children:"This method gets security questions stored in tKey."}),"\n",(0,n.jsx)(r.h4,{id:"parameters-5",children:"Parameters"}),"\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Parameters"}),(0,n.jsx)(r.th,{children:"Type"}),(0,n.jsx)(r.th,{children:"Description"})]})}),(0,n.jsx)(r.tbody,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"thresholdKey"}),(0,n.jsx)(r.td,{children:"ThresholdKey"}),(0,n.jsx)(r.td,{children:"A ThresholdKey instance for which to store the answer to a security question."})]})})]}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Returns"})}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsx)(r.li,{children:"String: A String representing the user's security question."}),"\n"]}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Throws"})}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsx)(r.li,{children:"RuntimeError: An error if the operation failed."}),"\n"]})]})}function a(e={}){const{wrapper:r}={...(0,t.a)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(o,{...e})}):o(e)}},11151:(e,r,s)=>{s.d(r,{Z:()=>h,a:()=>d});var n=s(67294);const t={},i=n.createContext(t);function d(e){const r=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function h(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),n.createElement(i.Provider,{value:r},e.children)}}}]);