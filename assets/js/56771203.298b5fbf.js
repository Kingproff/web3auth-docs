"use strict";(self.webpackChunkweb3auth_docs=self.webpackChunkweb3auth_docs||[]).push([[28146],{95953:(e,r,s)=>{s.r(r),s.d(r,{assets:()=>l,contentTitle:()=>h,default:()=>a,frontMatter:()=>n,metadata:()=>i,toc:()=>c});var t=s(85893),d=s(11151);const n={title:"Share Transfer Module",displayed_sidebar:"sdk",description:"Core Kit tKey Android SDK - Modules - Share Transfer Module  | Documentation - Web3Auth"},h=void 0,i={id:"sdk/core-kit/tkey-android/modules/share-transfer",title:"Share Transfer Module",description:"Core Kit tKey Android SDK - Modules - Share Transfer Module  | Documentation - Web3Auth",source:"@site/docs/sdk/core-kit/tkey-android/modules/share-transfer.mdx",sourceDirName:"sdk/core-kit/tkey-android/modules",slug:"/sdk/core-kit/tkey-android/modules/share-transfer",permalink:"/docs/sdk/core-kit/tkey-android/modules/share-transfer",draft:!1,unlisted:!1,editUrl:"https://github.com/web3auth/web3auth-docs/edit/master/docs/sdk/core-kit/tkey-android/modules/share-transfer.mdx",tags:[],version:"current",frontMatter:{title:"Share Transfer Module",displayed_sidebar:"sdk",description:"Core Kit tKey Android SDK - Modules - Share Transfer Module  | Documentation - Web3Auth"},sidebar:"sdk",previous:{title:"Share Serialization Module",permalink:"/docs/sdk/core-kit/tkey-android/modules/share-serialization"},next:{title:"Web3Auth Core Kit Single Factor Auth Web SDK",permalink:"/docs/sdk/core-kit/sfa-web/"}},l={},c=[{value:"<code>requestNewShare()</code>",id:"requestnewshare",level:2},{value:"Parameters",id:"parameters",level:4},{value:"<code>addCustomInfoToRequest()</code>",id:"addcustominfotorequest",level:2},{value:"Parameters",id:"parameters-1",level:4},{value:"<code>lookForRequest()</code>",id:"lookforrequest",level:2},{value:"Parameters",id:"parameters-2",level:4},{value:"<code>approveRequest()</code>",id:"approverequest",level:2},{value:"Parameters",id:"parameters-3",level:4},{value:"<code>approveRequestWithShareIndex()</code>",id:"approverequestwithshareindex",level:2},{value:"Parameters",id:"parameters-4",level:4},{value:"<code>getStore()</code>",id:"getstore",level:2},{value:"Parameters",id:"parameters-5",level:4},{value:"<code>setStore()</code>",id:"setstore",level:2},{value:"Parameters",id:"parameters-6",level:4},{value:"<code>deleteStore()</code>",id:"deletestore",level:2},{value:"Parameters",id:"parameters-7",level:4},{value:"<code>getCurrentEncryptionKey()</code>",id:"getcurrentencryptionkey",level:2},{value:"Parameters",id:"parameters-8",level:4},{value:"<code>requestStatusCheck()</code>",id:"requeststatuscheck",level:2},{value:"Parameters",id:"parameters-9",level:4},{value:"<code>cleanupRequest()</code>",id:"cleanuprequest",level:2},{value:"Parameters",id:"parameters-10",level:4}];function o(e){const r={code:"code",h2:"h2",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,d.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.p,{children:"The SharetransferModule is an Android module that provides functions for requesting, approving and transfering a share to another device."}),"\n",(0,t.jsx)(r.p,{children:"To use the SharetransferModule in your Android project, you will need to import the module as follows:"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-java",children:"import com.web3auth.tkey.ThresholdKey.ThresholdKey;\nimport com.web3auth.tkey.ThresholdKey.Modules.SharetransferModule;\n"})}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.code,{children:"SharetransferModule"})," is a class that provides the following methods:"]}),"\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Function"}),(0,t.jsx)(r.th,{children:"Description"}),(0,t.jsx)(r.th,{children:"Arguments"}),(0,t.jsx)(r.th,{children:"Async"}),(0,t.jsx)(r.th,{children:"return"})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"requestNewShare"})}),(0,t.jsx)(r.td,{children:"request a new share"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"thresholdKey: ThresholdKey, userAgent: String, availableShareIndexes: String"})}),(0,t.jsx)(r.td,{children:"Yes"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"String"})})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"addCustomInfoToRequest"})}),(0,t.jsx)(r.td,{children:"Add custom info to share request"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"thresholdKey: ThresholdKey, encPubKeyX: String, customInfo: String"})}),(0,t.jsx)(r.td,{children:"Yes"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"void"})})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"lookForRequest"})}),(0,t.jsx)(r.td,{children:"Returns an array of indexes of pending requests"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"thresholdKey: ThresholdKey "})}),(0,t.jsx)(r.td,{children:"Yes"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"[String]"})})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"approveRequest"})}),(0,t.jsx)(r.td,{children:"approve the shareStore to be shared"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"thresholdKey: ThresholdKey, encPubKeyX: String, store: ShareStore"})}),(0,t.jsx)(r.td,{children:"Yes"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"void"})})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"approveRequestWithShareIndex"})}),(0,t.jsx)(r.td,{children:"approve sharing with share index"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"thresholdKey: ThresholdKey, encPubKeyX: String, shareIndex: String"})}),(0,t.jsx)(r.td,{children:"Yes"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"void"})})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"getStore"})}),(0,t.jsx)(r.td,{children:"Get share transfer store"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"thresholdKey: ThresholdKey"})}),(0,t.jsx)(r.td,{children:"Yes"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"ShareTransferStore"})})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"setStore"})}),(0,t.jsx)(r.td,{children:"Set share transfer store"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"thresholdKey: ThresholdKey, store: ShareTransferStore"})}),(0,t.jsx)(r.td,{children:"Yes"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"Bool"})})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"deleteStore"})}),(0,t.jsx)(r.td,{children:"Delete share transfer store"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"thresholdKey: ThresholdKey, encPubKeyX: String"})}),(0,t.jsx)(r.td,{children:"Yes"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"Bool"})})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"getCurrentEncryptionKey"})}),(0,t.jsx)(r.td,{children:"Get security questions stored in tKey"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"thresholdKey: ThresholdKey"})}),(0,t.jsx)(r.td,{children:"No"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"String"})})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"requestStatusCheck"})}),(0,t.jsx)(r.td,{children:"start request status checking"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"thresholdKey: ThresholdKey, encPubKeyX: String, deleteRequestOnCompletion: Bool"})}),(0,t.jsx)(r.td,{children:"Yes"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"ShareStore"})})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"cleanupRequest"})}),(0,t.jsx)(r.td,{children:"cleanup the request"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"thresholdKey: ThresholdKey"})}),(0,t.jsx)(r.td,{children:"No"}),(0,t.jsx)(r.td,{children:(0,t.jsx)(r.code,{children:"Bool"})})]})]})]}),"\n",(0,t.jsx)(r.h2,{id:"requestnewshare",children:(0,t.jsx)(r.code,{children:"requestNewShare()"})}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.code,{children:"public static void requestNewShare(ThresholdKey thresholdKey, String userAgent, String availableShareIndexes, ThresholdKeyCallback<String> callback)"})}),"\n",(0,t.jsx)(r.p,{children:"Request a new share for the given user."}),"\n",(0,t.jsx)(r.h4,{id:"parameters",children:"Parameters"}),"\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Parameters"}),(0,t.jsx)(r.th,{children:"Type"}),(0,t.jsx)(r.th,{children:"Description"})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"thresholdKey"}),(0,t.jsx)(r.td,{children:"ThresholdKey"}),(0,t.jsx)(r.td,{children:"A ThresholdKey object representing the user's threshold key."})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"userAgent"}),(0,t.jsx)(r.td,{children:"String"}),(0,t.jsx)(r.td,{children:"A string representing the user's user agent."})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"availableShareIndexes"}),(0,t.jsx)(r.td,{children:"String"}),(0,t.jsx)(r.td,{children:"A string representing the available share indexes for the user."})]})]})]}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.strong,{children:"Returns"})}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsx)(r.li,{children:"String: A string representing the requested share."}),"\n"]}),"\n",(0,t.jsx)(r.h2,{id:"addcustominfotorequest",children:(0,t.jsx)(r.code,{children:"addCustomInfoToRequest()"})}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.code,{children:"public static void addCustomInfoToRequest(ThresholdKey thresholdKey, String encPubKeyX, String customInfo, ThresholdKeyCallback<Boolean> callback)"})}),"\n",(0,t.jsx)(r.p,{children:"Adds custom information to a share request."}),"\n",(0,t.jsx)(r.h4,{id:"parameters-1",children:"Parameters"}),"\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Parameters"}),(0,t.jsx)(r.th,{children:"Type"}),(0,t.jsx)(r.th,{children:"Description"})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"thresholdKey"}),(0,t.jsx)(r.td,{children:"ThresholdKey"}),(0,t.jsx)(r.td,{children:"A ThresholdKey object representing the user's threshold key."})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"encPubKeyX"}),(0,t.jsx)(r.td,{children:"String"}),(0,t.jsx)(r.td,{children:"A string representing the user's encryption public key."})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"customInfo"}),(0,t.jsx)(r.td,{children:"String"}),(0,t.jsx)(r.td,{children:"A string representing the custom information to add to the request."})]})]})]}),"\n",(0,t.jsx)(r.h2,{id:"lookforrequest",children:(0,t.jsx)(r.code,{children:"lookForRequest()"})}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.code,{children:"public static void lookForRequest(ThresholdKey thresholdKey, ThresholdKeyCallback<ArrayList<String>> callback)"})}),"\n",(0,t.jsx)(r.p,{children:"Check the status of the user's share request."}),"\n",(0,t.jsx)(r.h4,{id:"parameters-2",children:"Parameters"}),"\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Parameters"}),(0,t.jsx)(r.th,{children:"Type"}),(0,t.jsx)(r.th,{children:"Description"})]})}),(0,t.jsx)(r.tbody,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"thresholdKey"}),(0,t.jsx)(r.td,{children:"ThresholdKey"}),(0,t.jsx)(r.td,{children:"A ThresholdKey object representing the user's threshold key."})]})})]}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.strong,{children:"Returns"})}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsx)(r.li,{children:"[String]: An array of strings representing the status of the user's share request."}),"\n"]}),"\n",(0,t.jsx)(r.h2,{id:"approverequest",children:(0,t.jsx)(r.code,{children:"approveRequest()"})}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.code,{children:"public static void approveRequest(ThresholdKey thresholdKey, String encPubKeyX, @Nullable ShareStore store, ThresholdKeyCallback<Boolean> callback)"})}),"\n",(0,t.jsx)(r.p,{children:"Approves a share request for the user."}),"\n",(0,t.jsx)(r.h4,{id:"parameters-3",children:"Parameters"}),"\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Parameters"}),(0,t.jsx)(r.th,{children:"Type"}),(0,t.jsx)(r.th,{children:"Description"})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"thresholdKey"}),(0,t.jsx)(r.td,{children:"ThresholdKey"}),(0,t.jsx)(r.td,{children:"A ThresholdKey object representing the user's threshold key."})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"encPubKeyX"}),(0,t.jsx)(r.td,{children:"String"}),(0,t.jsx)(r.td,{children:"A string representing the user's encryption public key."})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"store"}),(0,t.jsx)(r.td,{children:"ShareStore"}),(0,t.jsx)(r.td,{children:"A ShareStore object representing the user's share store."})]})]})]}),"\n",(0,t.jsx)(r.h2,{id:"approverequestwithshareindex",children:(0,t.jsx)(r.code,{children:"approveRequestWithShareIndex()"})}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.code,{children:"public static void approveRequestWithShareIndex(ThresholdKey thresholdKey, String encPubKeyX, String shareIndex, ThresholdKeyCallback<Boolean> callback)"})}),"\n",(0,t.jsx)(r.p,{children:"Approves a share request for the user using a specific share index."}),"\n",(0,t.jsx)(r.h4,{id:"parameters-4",children:"Parameters"}),"\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Parameters"}),(0,t.jsx)(r.th,{children:"Type"}),(0,t.jsx)(r.th,{children:"Description"})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"thresholdKey"}),(0,t.jsx)(r.td,{children:"ThresholdKey"}),(0,t.jsx)(r.td,{children:"A ThresholdKey object representing the user's threshold key."})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"encPubKeyX"}),(0,t.jsx)(r.td,{children:"String"}),(0,t.jsx)(r.td,{children:"A string representing the user's encryption public key."})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"shareIndex"}),(0,t.jsx)(r.td,{children:"String"}),(0,t.jsx)(r.td,{children:"A string representing the specific share index to use for the share request."})]})]})]}),"\n",(0,t.jsx)(r.h2,{id:"getstore",children:(0,t.jsx)(r.code,{children:"getStore()"})}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.code,{children:"public static void getStore(ThresholdKey thresholdKey, ThresholdKeyCallback<ShareTransferStore> callback)"})}),"\n",(0,t.jsx)(r.p,{children:"Get the user's share store."}),"\n",(0,t.jsx)(r.h4,{id:"parameters-5",children:"Parameters"}),"\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Parameters"}),(0,t.jsx)(r.th,{children:"Type"}),(0,t.jsx)(r.th,{children:"Description"})]})}),(0,t.jsx)(r.tbody,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"thresholdKey"}),(0,t.jsx)(r.td,{children:"ThresholdKey"}),(0,t.jsx)(r.td,{children:"A ThresholdKey object representing the user's threshold key."})]})})]}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.strong,{children:"Returns"})}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsx)(r.li,{children:"ShareTransferStore: A ShareTransferStore object representing the user's share store."}),"\n"]}),"\n",(0,t.jsx)(r.h2,{id:"setstore",children:(0,t.jsx)(r.code,{children:"setStore()"})}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.code,{children:"public static void setStore(ThresholdKey thresholdKey, ShareTransferStore store, ThresholdKeyCallback<Boolean> callback)"})}),"\n",(0,t.jsx)(r.p,{children:"Set the user's share store."}),"\n",(0,t.jsx)(r.h4,{id:"parameters-6",children:"Parameters"}),"\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Parameters"}),(0,t.jsx)(r.th,{children:"Type"}),(0,t.jsx)(r.th,{children:"Description"})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"thresholdKey"}),(0,t.jsx)(r.td,{children:"ThresholdKey"}),(0,t.jsx)(r.td,{children:"A ThresholdKey object representing the user's threshold key."})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"store"}),(0,t.jsx)(r.td,{children:"ShareTransferStore"}),(0,t.jsx)(r.td,{children:"A ShareTransferStore object representing the user's share store."})]})]})]}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.strong,{children:"Returns"})}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsx)(r.li,{children:"Bool: A boolean value indicating whether the operation was successful."}),"\n"]}),"\n",(0,t.jsx)(r.h2,{id:"deletestore",children:(0,t.jsx)(r.code,{children:"deleteStore()"})}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.code,{children:"public static void deleteStore(ThresholdKey thresholdKey, String encPubKeyX, ThresholdKeyCallback<Boolean> callback)"})}),"\n",(0,t.jsx)(r.p,{children:"Delete the user's share store."}),"\n",(0,t.jsx)(r.h4,{id:"parameters-7",children:"Parameters"}),"\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Parameters"}),(0,t.jsx)(r.th,{children:"Type"}),(0,t.jsx)(r.th,{children:"Description"})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"thresholdKey"}),(0,t.jsx)(r.td,{children:"ThresholdKey"}),(0,t.jsx)(r.td,{children:"A ThresholdKey object representing the user's threshold key."})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"encPubKeyX"}),(0,t.jsx)(r.td,{children:"String"}),(0,t.jsx)(r.td,{children:"A string representing the user's encryption public key."})]})]})]}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.strong,{children:"Returns"})}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsx)(r.li,{children:"Bool: A boolean value indicating whether the operation was successful."}),"\n"]}),"\n",(0,t.jsx)(r.h2,{id:"getcurrentencryptionkey",children:(0,t.jsx)(r.code,{children:"getCurrentEncryptionKey()"})}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.code,{children:"public static String getCurrentEncryptionKey(ThresholdKey thresholdKey) throws RuntimeError"})}),"\n",(0,t.jsx)(r.p,{children:"This method is used to get the current encryption key for the given thresholdKey."}),"\n",(0,t.jsx)(r.h4,{id:"parameters-8",children:"Parameters"}),"\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Parameters"}),(0,t.jsx)(r.th,{children:"Type"}),(0,t.jsx)(r.th,{children:"Description"})]})}),(0,t.jsx)(r.tbody,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"thresholdKey"}),(0,t.jsx)(r.td,{children:"ThresholdKey"}),(0,t.jsx)(r.td,{children:"A ThresholdKey object representing the user's threshold key."})]})})]}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.strong,{children:"Returns"})}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsx)(r.li,{children:"String: A string value representing the current encryption key."}),"\n"]}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.strong,{children:"Throws"})}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsx)(r.li,{children:"ShareTransferError: If there is an issue with the underlying share transfer module."}),"\n",(0,t.jsx)(r.li,{children:"RuntimeError: If there is an issue with the runtime environment."}),"\n"]}),"\n",(0,t.jsx)(r.h2,{id:"requeststatuscheck",children:(0,t.jsx)(r.code,{children:"requestStatusCheck()"})}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.code,{children:"public static void requestStatusCheck(ThresholdKey thresholdKey, String encPubKeyX, Boolean deleteRequestOnCompletion, ThresholdKeyCallback<ShareStore> callback)"})}),"\n",(0,t.jsx)(r.p,{children:"This method is used to check the status of a request for the specified encPubKeyX under the given thresholdKey."}),"\n",(0,t.jsx)(r.h4,{id:"parameters-9",children:"Parameters"}),"\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Parameters"}),(0,t.jsx)(r.th,{children:"Type"}),(0,t.jsx)(r.th,{children:"Description"})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"thresholdKey"}),(0,t.jsx)(r.td,{children:"ThresholdKey"}),(0,t.jsx)(r.td,{children:"A ThresholdKey object representing the user's threshold key."})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"encPubKeyX"}),(0,t.jsx)(r.td,{children:"String"}),(0,t.jsx)(r.td,{children:"A string representing the user's encryption public key."})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"deleteRequestOnCompletion"}),(0,t.jsx)(r.td,{children:"Bool"}),(0,t.jsx)(r.td,{children:"A boolean value indicating whether the request should be deleted upon completion."})]})]})]}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.strong,{children:"Returns"})}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsx)(r.li,{children:"ShareStore: A ShareStore object representing the current status of the request."}),"\n"]}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.strong,{children:"Throws"})}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsx)(r.li,{children:"ShareTransferError: If there is an issue with the underlying share transfer module."}),"\n",(0,t.jsx)(r.li,{children:"RuntimeError: If there is an issue with the runtime environment."}),"\n"]}),"\n",(0,t.jsx)(r.h2,{id:"cleanuprequest",children:(0,t.jsx)(r.code,{children:"cleanupRequest()"})}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.code,{children:"public static void cleanupRequest(ThresholdKey thresholdKey) throws RuntimeError"})}),"\n",(0,t.jsx)(r.p,{children:"This method is used to clean up any remaining requests for the specified thresholdKey."}),"\n",(0,t.jsx)(r.h4,{id:"parameters-10",children:"Parameters"}),"\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Parameters"}),(0,t.jsx)(r.th,{children:"Type"}),(0,t.jsx)(r.th,{children:"Description"})]})}),(0,t.jsx)(r.tbody,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"thresholdKey"}),(0,t.jsx)(r.td,{children:"ThresholdKey"}),(0,t.jsx)(r.td,{children:"A ThresholdKey object representing the user's threshold key."})]})})]}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.strong,{children:"Returns"})}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsx)(r.li,{children:"Void"}),"\n"]}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.strong,{children:"Throws"})}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsx)(r.li,{children:"RuntimeError: If there is an issue with the runtime environment."}),"\n"]})]})}function a(e={}){const{wrapper:r}={...(0,d.a)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}},11151:(e,r,s)=>{s.d(r,{Z:()=>i,a:()=>h});var t=s(67294);const d={},n=t.createContext(d);function h(e){const r=t.useContext(n);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:h(e.components),t.createElement(n.Provider,{value:r},e.children)}}}]);