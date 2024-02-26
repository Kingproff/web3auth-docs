"use strict";(self.webpackChunkweb3auth_docs=self.webpackChunkweb3auth_docs||[]).push([[47553],{83999:(e,s,r)=>{r.r(s),r.d(s,{assets:()=>l,contentTitle:()=>d,default:()=>a,frontMatter:()=>i,metadata:()=>h,toc:()=>c});var n=r(85893),t=r(11151);const i={title:"Security Question Module - tKey iOS SDK",sidebar_label:"Security Question",displayed_sidebar:"sdk",description:"Core Kit tKey iOS SDK - Modules - Security Questions  | Documentation - Web3Auth"},d=void 0,h={id:"sdk/core-kit/tkey-ios/modules/security-questions",title:"Security Question Module - tKey iOS SDK",description:"Core Kit tKey iOS SDK - Modules - Security Questions  | Documentation - Web3Auth",source:"@site/docs/sdk/core-kit/tkey-ios/modules/security-questions.mdx",sourceDirName:"sdk/core-kit/tkey-ios/modules",slug:"/sdk/core-kit/tkey-ios/modules/security-questions",permalink:"/docs/sdk/core-kit/tkey-ios/modules/security-questions",draft:!1,unlisted:!1,editUrl:"https://github.com/web3auth/web3auth-docs/edit/master/docs/sdk/core-kit/tkey-ios/modules/security-questions.mdx",tags:[],version:"current",frontMatter:{title:"Security Question Module - tKey iOS SDK",sidebar_label:"Security Question",displayed_sidebar:"sdk",description:"Core Kit tKey iOS SDK - Modules - Security Questions  | Documentation - Web3Auth"},sidebar:"sdk",previous:{title:"Private Keys",permalink:"/docs/sdk/core-kit/tkey-ios/modules/private-keys"},next:{title:"Seed Phrase",permalink:"/docs/sdk/core-kit/tkey-ios/modules/seed-phrase"}},l={},c=[{value:"<code>generate_new_share()</code>",id:"generate_new_share",level:2},{value:"Parameters",id:"parameters",level:4},{value:"<code>input_share()</code>",id:"input_share",level:2},{value:"Parameters",id:"parameters-1",level:4},{value:"<code>change_question_and_answer()</code>",id:"change_question_and_answer",level:2},{value:"Parameters",id:"parameters-2",level:4},{value:"<code>store_answer()</code>",id:"store_answer",level:2},{value:"Parameters",id:"parameters-3",level:4},{value:"<code>get_answer()</code>",id:"get_answer",level:2},{value:"Parameters",id:"parameters-4",level:4},{value:"<code>get_questions()</code>",id:"get_questions",level:2},{value:"Parameters",id:"parameters-5",level:4}];function o(e){const s={code:"code",h2:"h2",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.p,{children:"SecurityQuestionModule is a Swift module that provides functionality for setting, changing, getting, and deleting security question and password for a\nThresholdKey object."}),"\n",(0,n.jsx)(s.p,{children:"To use the SecurityQuestionModule in your Swift project, you will need to import the module as follows:"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-swift",children:"import tkey_pkg\n"})}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.code,{children:"SecurityQuestionModule"})," is a class that provides the following methods:"]}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Function"}),(0,n.jsx)(s.th,{children:"Description"}),(0,n.jsx)(s.th,{children:"Arguments"}),(0,n.jsx)(s.th,{children:"Async"}),(0,n.jsx)(s.th,{children:"return"})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"generate_new_share"})}),(0,n.jsx)(s.td,{children:"generate a new Share with security question"}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"threshold_key: ThresholdKey, questions: String, answer: String"})}),(0,n.jsx)(s.td,{children:"Yes"}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"GenerateShareStoreResult"})})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"input_share"})}),(0,n.jsx)(s.td,{children:"input share from security question"}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"threshold_key: ThresholdKey, answer: String"})}),(0,n.jsx)(s.td,{children:"Yes"}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"Bool"})})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"change_question_and_answer"})}),(0,n.jsx)(s.td,{children:"Get private Key accounts"}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"threshold_key: ThresholdKey, questions: String, answer: String"})}),(0,n.jsx)(s.td,{children:"Yes"}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"Bool"})})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"store_answer"})}),(0,n.jsx)(s.td,{children:"Store answer of security question in tKey"}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"threshold_key: ThresholdKey, answer: String"})}),(0,n.jsx)(s.td,{children:"Yes"}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"Bool"})})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"get_answer"})}),(0,n.jsx)(s.td,{children:"Get answer of security question stored in tKey"}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"threshold_key: ThresholdKey"})}),(0,n.jsx)(s.td,{children:"No"}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"String"})})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"get_questions"})}),(0,n.jsx)(s.td,{children:"Get security questions stored in tKey"}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"threshold_key: ThresholdKey"})}),(0,n.jsx)(s.td,{children:"No"}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.code,{children:"String"})})]})]})]}),"\n",(0,n.jsx)(s.h2,{id:"generate_new_share",children:(0,n.jsx)(s.code,{children:"generate_new_share()"})}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.code,{children:"generate_new_share(threshold_key: ThresholdKey, questions: String, answer: String ) async throws -> GenerateShareStoreResult"})}),"\n",(0,n.jsx)(s.p,{children:"This function generates a new share for a given ThresholdKey, along with the user's security question and answer."}),"\n",(0,n.jsx)(s.h4,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Parameters"}),(0,n.jsx)(s.th,{children:"Type"}),(0,n.jsx)(s.th,{children:"Description"})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"threshold_key"}),(0,n.jsx)(s.td,{children:"ThresholdKey"}),(0,n.jsx)(s.td,{children:"A ThresholdKey object representing the key for which to generate a new share."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"questions"}),(0,n.jsx)(s.td,{children:"String"}),(0,n.jsx)(s.td,{children:"A String representing the user's security question."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"answer"}),(0,n.jsx)(s.td,{children:"String"}),(0,n.jsx)(s.td,{children:"A String representing the user's security answer."})]})]})]}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:"Returns"})}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"GenerateShareStoreResult: A struct that contains information about the new share that was generated."}),"\n"]}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:"Throws"})}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"Error: An error if the operation failed."}),"\n"]}),"\n",(0,n.jsx)(s.h2,{id:"input_share",children:(0,n.jsx)(s.code,{children:"input_share()"})}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.code,{children:"input_share(threshold_key: ThresholdKey, answer: String ) async throws -> Bool"})}),"\n",(0,n.jsx)(s.p,{children:"A method that inputs a share for a threshold key based on a security question and answer."}),"\n",(0,n.jsx)(s.h4,{id:"parameters-1",children:"Parameters"}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Parameters"}),(0,n.jsx)(s.th,{children:"Type"}),(0,n.jsx)(s.th,{children:"Description"})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"threshold_key"}),(0,n.jsx)(s.td,{children:"ThresholdKey"}),(0,n.jsx)(s.td,{children:"A ThresholdKey instance for which to input a share."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"answer"}),(0,n.jsx)(s.td,{children:"String"}),(0,n.jsx)(s.td,{children:"A String representing the answer to the security questions."})]})]})]}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:"Returns"})}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"Bool: true if the share was successfully input, false otherwise."}),"\n"]}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:"Throws"})}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"Error: An error if the operation failed."}),"\n"]}),"\n",(0,n.jsx)(s.h2,{id:"change_question_and_answer",children:(0,n.jsx)(s.code,{children:"change_question_and_answer()"})}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.code,{children:"change_question_and_answer(threshold_key: ThresholdKey, questions: String, answer: String ) async throws -> Bool"})}),"\n",(0,n.jsx)(s.p,{children:"A method that changes the security questions and answers for a threshold key."}),"\n",(0,n.jsx)(s.h4,{id:"parameters-2",children:"Parameters"}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Parameters"}),(0,n.jsx)(s.th,{children:"Type"}),(0,n.jsx)(s.th,{children:"Description"})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"threshold_key"}),(0,n.jsx)(s.td,{children:"ThresholdKey"}),(0,n.jsx)(s.td,{children:"A ThresholdKey instance for which to change the security questions and answers."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"questions"}),(0,n.jsx)(s.td,{children:"String"}),(0,n.jsx)(s.td,{children:"A String representing a new set of security questions to be answered."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"answer"}),(0,n.jsx)(s.td,{children:"String"}),(0,n.jsx)(s.td,{children:"A String representing the answer to the security questions."})]})]})]}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:"Returns"})}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"Bool: true if the security questions and answers were successfully changed, false otherwise."}),"\n"]}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:"Throws"})}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"Error: An error if the operation failed."}),"\n"]}),"\n",(0,n.jsx)(s.h2,{id:"store_answer",children:(0,n.jsx)(s.code,{children:"store_answer()"})}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.code,{children:"store_answer(threshold_key: ThresholdKey, answer: String ) async throws -> Bool"})}),"\n",(0,n.jsx)(s.p,{children:"A method that stores the answer to a security question for a threshold key."}),"\n",(0,n.jsx)(s.h4,{id:"parameters-3",children:"Parameters"}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Parameters"}),(0,n.jsx)(s.th,{children:"Type"}),(0,n.jsx)(s.th,{children:"Description"})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"threshold_key"}),(0,n.jsx)(s.td,{children:"ThresholdKey"}),(0,n.jsx)(s.td,{children:"A ThresholdKey instance for which to store the answer to a security question."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"answer"}),(0,n.jsx)(s.td,{children:"String"}),(0,n.jsx)(s.td,{children:"A String representing the answer to the security question."})]})]})]}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:"Returns"})}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"Bool: true if the answer was successfully stored, false otherwise."}),"\n"]}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:"Throws"})}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"Error: An error if the operation failed."}),"\n"]}),"\n",(0,n.jsx)(s.h2,{id:"get_answer",children:(0,n.jsx)(s.code,{children:"get_answer()"})}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.code,{children:"get_answer(threshold_key: ThresholdKey) throws -> String"})}),"\n",(0,n.jsx)(s.p,{children:"Get answer of security question stored in tKey."}),"\n",(0,n.jsx)(s.h4,{id:"parameters-4",children:"Parameters"}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Parameters"}),(0,n.jsx)(s.th,{children:"Type"}),(0,n.jsx)(s.th,{children:"Description"})]})}),(0,n.jsx)(s.tbody,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"threshold_key"}),(0,n.jsx)(s.td,{children:"ThresholdKey"}),(0,n.jsx)(s.td,{children:"A ThresholdKey instance for which to store the answer to a security question."})]})})]}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:"Returns"})}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"String: A String representing the answer to the security questions."}),"\n"]}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:"Throws"})}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"Error: An error if the operation failed."}),"\n"]}),"\n",(0,n.jsx)(s.h2,{id:"get_questions",children:(0,n.jsx)(s.code,{children:"get_questions()"})}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.code,{children:"get_questions(threshold_key: ThresholdKey) throws -> String"})}),"\n",(0,n.jsx)(s.p,{children:"This method gets security questions stored in tKey."}),"\n",(0,n.jsx)(s.h4,{id:"parameters-5",children:"Parameters"}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Parameters"}),(0,n.jsx)(s.th,{children:"Type"}),(0,n.jsx)(s.th,{children:"Description"})]})}),(0,n.jsx)(s.tbody,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"threshold_key"}),(0,n.jsx)(s.td,{children:"ThresholdKey"}),(0,n.jsx)(s.td,{children:"A ThresholdKey instance for which to store the answer to a security question."})]})})]}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:"Returns"})}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"String: A String representing the user's security question."}),"\n"]}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:"Throws"})}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"Error: An error if the operation failed."}),"\n"]})]})}function a(e={}){const{wrapper:s}={...(0,t.a)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(o,{...e})}):o(e)}},11151:(e,s,r)=>{r.d(s,{Z:()=>h,a:()=>d});var n=r(67294);const t={},i=n.createContext(t);function d(e){const s=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function h(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),n.createElement(i.Provider,{value:s},e.children)}}}]);