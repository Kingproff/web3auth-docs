"use strict";(self.webpackChunkweb3auth_docs=self.webpackChunkweb3auth_docs||[]).push([[85121],{98961:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>d,default:()=>a,frontMatter:()=>s,metadata:()=>l,toc:()=>o});var i=t(85893),n=t(11151);const s={title:"Using tKey iOS SDK",sidebar_label:"Usage",displayed_sidebar:"sdk",description:"Web3Auth Core Kit tKey iOS SDK - Usage | Documentation - Web3Auth"},d=void 0,l={id:"sdk/core-kit/tkey-ios/usage",title:"Using tKey iOS SDK",description:"Web3Auth Core Kit tKey iOS SDK - Usage | Documentation - Web3Auth",source:"@site/docs/sdk/core-kit/tkey-ios/usage.mdx",sourceDirName:"sdk/core-kit/tkey-ios",slug:"/sdk/core-kit/tkey-ios/usage",permalink:"/docs/sdk/core-kit/tkey-ios/usage",draft:!1,unlisted:!1,editUrl:"https://github.com/web3auth/web3auth-docs/edit/master/docs/sdk/core-kit/tkey-ios/usage.mdx",tags:[],version:"current",frontMatter:{title:"Using tKey iOS SDK",sidebar_label:"Usage",displayed_sidebar:"sdk",description:"Web3Auth Core Kit tKey iOS SDK - Usage | Documentation - Web3Auth"},sidebar:"sdk",previous:{title:"Initialize",permalink:"/docs/sdk/core-kit/tkey-ios/initialize"},next:{title:"Modules",permalink:"/docs/sdk/core-kit/tkey-ios/modules/"}},c={},o=[{value:"<code>ThresholdKey</code>",id:"thresholdkey",level:3},{value:"Log In",id:"log-in",level:2},{value:"Triggering Login and Initializing Service Provider",id:"triggering-login-and-initializing-service-provider",level:3},{value:"<code>SubVerifierDetails</code>",id:"subverifierdetails",level:4},{value:"<code>CustomAuth</code>",id:"customauth",level:4},{value:"Instantiate tKey",id:"instantiate-tkey",level:2},{value:"Parameters",id:"parameters",level:3},{value:"Example",id:"example",level:3},{value:"Initialize tKey",id:"initialize-tkey",level:2},{value:"<code>threshold_key.initialize(params?)</code>",id:"threshold_keyinitializeparams",level:4},{value:"Parameters",id:"parameters-1",level:3},{value:"Example",id:"example-1",level:3},{value:"Get tKey Details",id:"get-tkey-details",level:2},{value:"Usage Sample",id:"usage-sample",level:4},{value:"Reconstruct Private Key",id:"reconstruct-private-key",level:2},{value:"Generate a New Share",id:"generate-a-new-share",level:2},{value:"Delete a Share",id:"delete-a-share",level:2},{value:"Using Modules for Further Operations",id:"using-modules-for-further-operations",level:2},{value:"Consider multiple device environment",id:"consider-multiple-device-environment",level:2},{value:"Making Blockchain Calls",id:"making-blockchain-calls",level:2}];function h(e){const r={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,n.a)(),...e.components},{Details:t}=r;return t||function(e,r){throw new Error("Expected "+(r?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r.p,{children:"Once you've installed and successfully instantiated tKey and initialized the service provider in your constructor, you can use it to authenticate your\nusers and generate their tKey shares. Further, you can use various functions exposed by the tKey SDK and its modules to manage different aspects of\nyour users' authentication needs."}),"\n",(0,i.jsx)(r.h3,{id:"thresholdkey",children:(0,i.jsx)(r.code,{children:"ThresholdKey"})}),"\n",(0,i.jsxs)(r.p,{children:["Natively, the instance of ",(0,i.jsx)(r.code,{children:"tKey"}),", (i.e., ",(0,i.jsx)(r.code,{children:"ThresholdKey"}),") returns many functions. However, we have documented a few relevant ones here. You can check\nthe table below for a list of all relevant functions or the class reference to check out the complete list of functions."]}),"\n",(0,i.jsxs)(t,{children:[(0,i.jsx)("summary",{children:"Functions"}),(0,i.jsx)("div",{children:(0,i.jsxs)("table",{children:[(0,i.jsx)("thead",{children:(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{children:"Function"}),(0,i.jsx)("th",{children:"Description"}),(0,i.jsx)("th",{children:"Arguments"}),(0,i.jsx)("th",{children:"Async"}),(0,i.jsx)("th",{children:"return"})]})}),(0,i.jsxs)("tbody",{children:[(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)("code",{children:"initialize"})}),(0,i.jsx)("td",{children:"Generates a Threshold Key object corresponding to your login provider."}),(0,i.jsx)("td",{children:(0,i.jsxs)(r.p,{children:[(0,i.jsx)("code",{children:"import_share: String"}),", ",(0,i.jsx)("code",{children:"input: ShareStore?"}),", ",(0,i.jsx)("code",{children:"never_initialize_new_key: Bool?"}),","," ","\n",(0,i.jsx)("code",{children:"include_local_metadata_transitions: Bool?"})]})}),(0,i.jsx)("td",{children:"Yes"}),(0,i.jsx)("td",{children:(0,i.jsx)("code",{children:"KeyDetails"})})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)("code",{children:"reconstruct"})}),(0,i.jsx)("td",{children:"Reconstructs the user private key (minimum threshold no. of shares required)"}),(0,i.jsx)("td",{children:(0,i.jsx)("code",{children:"void"})}),(0,i.jsx)("td",{children:"Yes"}),(0,i.jsx)("td",{children:(0,i.jsx)("code",{children:"KeyReconstructionDetails"})})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)("code",{children:"reconstruct_latest_poly"})}),(0,i.jsx)("td",{children:(0,i.jsx)(r.p,{children:"Returns the latest polynomial from all the available shares (for this pub-poly). We using Lagrange's interpolation to derive the\npolynomial"})}),(0,i.jsx)("td",{children:(0,i.jsx)("code",{children:"void"})}),(0,i.jsx)("td",{children:"No"}),(0,i.jsx)("td",{children:(0,i.jsx)("code",{children:"Polynomial"})})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)("code",{children:"get_all_share_stores_for_latest_polynomial"})}),(0,i.jsx)("td",{children:"Get all available ShareStores from latest polynomial"}),(0,i.jsx)("td",{children:(0,i.jsx)("code",{children:"void"})}),(0,i.jsx)("td",{children:"No"}),(0,i.jsx)("td",{children:(0,i.jsx)("code",{children:"ShareStoreArray"})})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)("code",{children:"generate_new_share"})}),(0,i.jsx)("td",{children:"Generate a new share for the reconstructed private key."}),(0,i.jsx)("td",{children:(0,i.jsx)("code",{children:"void"})}),(0,i.jsx)("td",{children:"Yes"}),(0,i.jsx)("td",{children:(0,i.jsx)("code",{children:"GenerateShareStoreResult"})})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)("code",{children:"delete_share"})}),(0,i.jsx)("td",{children:"Delete a share from private key."}),(0,i.jsx)("td",{children:(0,i.jsx)("code",{children:"share_index: String"})}),(0,i.jsx)("td",{children:"Yes"}),(0,i.jsx)("td",{children:(0,i.jsx)("code",{children:"void"})})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)("code",{children:"CRITICAL_delete_tkey"})}),(0,i.jsx)("td",{children:"Deletes a threshold key, all shares will be removed, use with caution"}),(0,i.jsx)("td",{children:(0,i.jsx)("code",{children:"void"})}),(0,i.jsx)("td",{children:"Yes"}),(0,i.jsx)("td",{children:(0,i.jsx)("code",{children:"void"})})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)("code",{children:"get_key_details"})}),(0,i.jsx)("td",{children:"Get the details of the keys."}),(0,i.jsx)("td",{children:(0,i.jsx)("code",{children:"void"})}),(0,i.jsx)("td",{children:"No"}),(0,i.jsx)("td",{children:(0,i.jsx)("code",{children:"KeyDetails"})})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)("code",{children:"output_share"})}),(0,i.jsx)("td",{children:"Output a share from the tKey"}),(0,i.jsx)("td",{children:(0,i.jsx)("code",{children:"shareIndex: String, shareType: String?"})}),(0,i.jsx)("td",{children:"No"}),(0,i.jsx)("td",{children:(0,i.jsx)("code",{children:"String"})})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)("code",{children:"share_to_share_store"})}),(0,i.jsx)("td",{children:"Convert Share to ShareStore"}),(0,i.jsx)("td",{children:(0,i.jsx)("code",{children:"share: String"})}),(0,i.jsx)("td",{children:"No"}),(0,i.jsx)("td",{children:(0,i.jsx)("code",{children:"ShareStore"})})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)("code",{children:"input_share"})}),(0,i.jsx)("td",{children:"Adds an existing share to tkey."}),(0,i.jsx)("td",{children:(0,i.jsxs)(r.p,{children:[(0,i.jsx)("code",{children:"share: String"}),", ",(0,i.jsx)("code",{children:"shareType: String?"})]})}),(0,i.jsx)("td",{children:"Yes"}),(0,i.jsx)("td",{children:(0,i.jsx)("code",{children:"void"})})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)("code",{children:"output_share_store"})}),(0,i.jsx)("td",{children:"Output a share store from the tKey"}),(0,i.jsx)("td",{children:(0,i.jsx)("code",{children:"shareIndex: String, polyId: String?"})}),(0,i.jsx)("td",{children:"No"}),(0,i.jsx)("td",{children:(0,i.jsx)("code",{children:"ShareStore"})})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)("code",{children:"input_share_store"})}),(0,i.jsx)("td",{children:"Input a share store into the tKey"}),(0,i.jsx)("td",{children:(0,i.jsx)("code",{children:"shareStore: ShareStore"})}),(0,i.jsx)("td",{children:"Yes"}),(0,i.jsx)("td",{children:(0,i.jsx)("code",{children:"void"})})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)("code",{children:"get_shares_indexes"})}),(0,i.jsx)("td",{children:"Returns an array of all the share indexes from latest polynomial"}),(0,i.jsx)("td",{children:(0,i.jsx)("code",{children:"void"})}),(0,i.jsx)("td",{children:"No"}),(0,i.jsx)("td",{children:(0,i.jsx)("code",{children:"[String]"})})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)("code",{children:"encrypt"})}),(0,i.jsx)("td",{children:"Encrypt a message/data with the provided publicKey."}),(0,i.jsx)("td",{children:(0,i.jsx)("code",{children:"msg: String"})}),(0,i.jsx)("td",{children:"No"}),(0,i.jsx)("td",{children:(0,i.jsx)("code",{children:"String"})})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)("code",{children:"decrypt"})}),(0,i.jsx)("td",{children:"Decrypt a message/data with the provided publicKey."}),(0,i.jsx)("td",{children:(0,i.jsx)("code",{children:"msg: String"})}),(0,i.jsx)("td",{children:"No"}),(0,i.jsx)("td",{children:(0,i.jsx)("code",{children:"String"})})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)("code",{children:"get_tkey_store"})}),(0,i.jsx)("td",{children:"Returns data from tkey store given a module name"}),(0,i.jsx)("td",{children:(0,i.jsx)("code",{children:"moduleName: String"})}),(0,i.jsx)("td",{children:"No"}),(0,i.jsx)("td",{children:(0,i.jsxs)("code",{children:["[[String",":Any","]]"]})})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)("code",{children:"get_tkey_store_item"})}),(0,i.jsx)("td",{children:"Returns data from tkey store given id and a module name"}),(0,i.jsx)("td",{children:(0,i.jsxs)(r.p,{children:[(0,i.jsx)("code",{children:"moduleName: String"}),", ",(0,i.jsx)("code",{children:"id: String"})]})}),(0,i.jsx)("td",{children:"No"}),(0,i.jsx)("td",{children:(0,i.jsx)("code",{children:"String"})})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)("code",{children:"get_shares"})}),(0,i.jsx)("td",{children:"get shares from tKey"}),(0,i.jsx)("td",{children:(0,i.jsx)("code",{children:"void"})}),(0,i.jsx)("td",{children:"No"}),(0,i.jsx)("td",{children:(0,i.jsx)("code",{children:"ShareStorePolyIdIndexMap"})})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)("code",{children:"get_share_descriptions"})}),(0,i.jsx)("td",{children:"Get a description to a share"}),(0,i.jsx)("td",{children:(0,i.jsx)("code",{children:"void"})}),(0,i.jsx)("td",{children:"No"}),(0,i.jsx)("td",{children:(0,i.jsx)("code",{children:"[String: [String]]"})})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)("code",{children:"add_share_description"})}),(0,i.jsx)("td",{children:"Add a description to a share"}),(0,i.jsx)("td",{children:(0,i.jsx)("code",{children:"key: String, description: String, update_metadata: Bool"})}),(0,i.jsx)("td",{children:"Yes"}),(0,i.jsx)("td",{children:(0,i.jsx)("code",{children:"void"})})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)("code",{children:"update_share_description"})}),(0,i.jsx)("td",{children:"Update a description to a share"}),(0,i.jsx)("td",{children:(0,i.jsx)("code",{children:"key: String, oldDescription: String, newDescription: String, update_metadata: Bool"})}),(0,i.jsx)("td",{children:"Yes"}),(0,i.jsx)("td",{children:(0,i.jsx)("code",{children:"void"})})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)("code",{children:"delete_share_description"})}),(0,i.jsx)("td",{children:"Delete a description to a share"}),(0,i.jsx)("td",{children:(0,i.jsx)("code",{children:"key: String, description: String, update_metadata: Bool"})}),(0,i.jsx)("td",{children:"Yes"}),(0,i.jsx)("td",{children:(0,i.jsx)("code",{children:"void"})})]})]})]})})]}),"\n",(0,i.jsx)(r.h2,{id:"log-in",children:"Log In"}),"\n",(0,i.jsxs)(r.p,{children:["The login with the tKey SDK is a two-step process. First, you need to trigger the login process by calling the ",(0,i.jsx)(r.code,{children:"triggerLogin()"})," function of the\nCustomAuth SDK. Using the returned information, use the ",(0,i.jsx)(r.code,{children:"initialize()"})," function of the tKey to generate the Threshold Key corresponding to the user."]}),"\n",(0,i.jsxs)(r.p,{children:["However, before starting this process, you must set up Custom Authentication on your Web3Auth Dashboard. You must\n",(0,i.jsx)(r.a,{href:"/auth-provider-setup/verifiers",children:"Create a Verifier"})," from the ",(0,i.jsx)(r.strong,{children:"Custom Auth"})," section of the\n",(0,i.jsx)(r.a,{href:"https://dashboard.web3auth.io",children:"Web3Auth Developer Dashboard"})," with your desired configuration."]}),"\n",(0,i.jsx)(r.admonition,{type:"tip",children:(0,i.jsxs)(r.p,{children:["For further information on how to set up and use a verifier, please visit the\n",(0,i.jsx)(r.a,{href:"/pnp/features/custom-authentication",children:(0,i.jsx)(r.strong,{children:"Custom Authentication Documentation"})}),"."]})}),"\n",(0,i.jsx)(r.h3,{id:"triggering-login-and-initializing-service-provider",children:"Triggering Login and Initializing Service Provider"}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-swift",children:'import CustomAuth\n\nlet sub = SubVerifierDetails(\n  loginType: .web, // default .web\n  loginProvider: <typeOfLogin>, // .google,\n  clientId: "<your-client-id>",\n  verifierName: "<verifier-name>",\n  redirectURL: "<your-redirect-url>",\n  browserRedirectURL: "<your-browser-redirect-url>")\n\nlet tdsdk = CustomAuth(\n  aggregateVerifierType: "<type-of-verifier>", // singleLogin, singleIdVerifier supported\n  aggregateVerifierName: "<verifier-name>", // Web3Auth Custom verifier name\n  subVerifierDetails: [sub],\n  network: .TESTNET)\n\ntdsdk.triggerLogin(controller: <UIViewController>?, browserType: <method-of-opening-browser>, modalPresentationStyle: <style-of-modal>).done{ data in\n    print("user data", data)\n    let key = data["privateKey"]\n    // highlight-next-line\n    service_provider = try! ServiceProvider(enable_logging: true, postbox_key: key)\n}.catch{ err in\n    print(err)\n}\n'})}),"\n",(0,i.jsxs)(r.p,{children:["Generating a private key is an essential step for the tKey to create its share. The ",(0,i.jsx)(r.code,{children:"triggerLogin()"})," function of the ",(0,i.jsx)(r.code,{children:"CustomAuth"})," is called to\naccomplish this."]}),"\n",(0,i.jsx)(r.h4,{id:"subverifierdetails",children:(0,i.jsx)(r.code,{children:"SubVerifierDetails"})}),"\n",(0,i.jsxs)(r.table,{children:[(0,i.jsx)(r.thead,{children:(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.th,{children:"Parameter"}),(0,i.jsx)(r.th,{children:"Type"}),(0,i.jsx)(r.th,{children:"Mandatory"}),(0,i.jsx)(r.th,{children:"Description"})]})}),(0,i.jsxs)(r.tbody,{children:[(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:(0,i.jsx)(r.code,{children:"loginType"})}),(0,i.jsx)(r.td,{children:"SubVerifierType"}),(0,i.jsx)(r.td,{children:"No"}),(0,i.jsxs)(r.td,{children:["loginType to be used. [ ",(0,i.jsx)(r.code,{children:"web"}),": default, ",(0,i.jsx)(r.code,{children:"installed"}),"]"]})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:(0,i.jsx)(r.code,{children:"loginProvider"})}),(0,i.jsx)(r.td,{children:"LoginProviders"}),(0,i.jsx)(r.td,{children:"Yes"}),(0,i.jsxs)(r.td,{children:["loginProvider to be used. [ ",(0,i.jsx)(r.code,{children:"google"}),", ",(0,i.jsx)(r.code,{children:"facebook"}),", ",(0,i.jsx)(r.code,{children:"twitch"}),", ",(0,i.jsx)(r.code,{children:"reddit"}),", ",(0,i.jsx)(r.code,{children:"discord"}),", ",(0,i.jsx)(r.code,{children:"apple"}),", ",(0,i.jsx)(r.code,{children:"github"}),", ",(0,i.jsx)(r.code,{children:"linkedin"}),", ",(0,i.jsx)(r.code,{children:"kakao"}),", ",(0,i.jsx)(r.code,{children:"twitter"}),", ",(0,i.jsx)(r.code,{children:"weibo"}),", ",(0,i.jsx)(r.code,{children:"line"}),", ",(0,i.jsx)(r.code,{children:"wechat"}),", ",(0,i.jsx)(r.code,{children:"email_password"}),", and ",(0,i.jsx)(r.code,{children:"jwt"})," ]"]})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:(0,i.jsx)(r.code,{children:"clientId"})}),(0,i.jsx)(r.td,{children:"String"}),(0,i.jsx)(r.td,{children:"Yes"}),(0,i.jsx)(r.td,{children:"login provider's client Id."})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:(0,i.jsx)(r.code,{children:"verifier"})}),(0,i.jsx)(r.td,{children:"String"}),(0,i.jsx)(r.td,{children:"Yes"}),(0,i.jsx)(r.td,{children:"Web3Auth verifier name"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:(0,i.jsx)(r.code,{children:"redirectURL"})}),(0,i.jsx)(r.td,{children:"String"}),(0,i.jsx)(r.td,{children:"Yes"}),(0,i.jsxs)(r.td,{children:["It refers to a url for the login flow to redirect into your app, it should have a scheme that is registered by your app, for example ",(0,i.jsx)(r.code,{children:"com.mycompany.myapp://redirect"})]})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:(0,i.jsx)(r.code,{children:"browserRedirectURL"})}),(0,i.jsx)(r.td,{children:"String"}),(0,i.jsx)(r.td,{children:"No"}),(0,i.jsxs)(r.td,{children:["It refers to a page that the browser should use in the login flow, it should have a http or https scheme. e.g. ",(0,i.jsx)(r.code,{children:"https://scripts.toruswallet.io/redirect.html"})]})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:(0,i.jsx)(r.code,{children:"jwtParams"})}),(0,i.jsx)(r.td,{children:"String"}),(0,i.jsx)(r.td,{children:"No"}),(0,i.jsx)(r.td,{children:"Additional JWT parameters to be passed."})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:(0,i.jsx)(r.code,{children:"urlSession"})}),(0,i.jsx)(r.td,{children:"URLSession"}),(0,i.jsx)(r.td,{children:"No"}),(0,i.jsx)(r.td,{children:"Custom URLSession to be used."})]})]})]}),"\n",(0,i.jsx)(r.h4,{id:"customauth",children:(0,i.jsx)(r.code,{children:"CustomAuth"})}),"\n",(0,i.jsxs)(r.table,{children:[(0,i.jsx)(r.thead,{children:(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.th,{children:"Parameter"}),(0,i.jsx)(r.th,{children:"Type"}),(0,i.jsx)(r.th,{children:"Mandatory"}),(0,i.jsx)(r.th,{children:"Description"})]})}),(0,i.jsxs)(r.tbody,{children:[(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:(0,i.jsx)(r.code,{children:"aggregateVerifierType"})}),(0,i.jsx)(r.td,{children:"String"}),(0,i.jsx)(r.td,{children:"Yes"}),(0,i.jsx)(r.td,{children:"Type of the aggregate verifier."})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:(0,i.jsx)(r.code,{children:"aggregateVerifier"})}),(0,i.jsx)(r.td,{children:"String"}),(0,i.jsx)(r.td,{children:"Yes"}),(0,i.jsx)(r.td,{children:"Name of the aggregate verifier."})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:(0,i.jsx)(r.code,{children:"subVerifierDetails"})}),(0,i.jsxs)(r.td,{children:["[",(0,i.jsx)(r.code,{children:"SubVerifierDetails"}),"]"]}),(0,i.jsx)(r.td,{children:"Yes"}),(0,i.jsx)(r.td,{children:"Array of SubVerifierDetails."})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:(0,i.jsx)(r.code,{children:"network"})}),(0,i.jsx)(r.td,{children:"Network"}),(0,i.jsx)(r.td,{children:"Yes"}),(0,i.jsxs)(r.td,{children:["Network to be used. [ ",(0,i.jsx)(r.code,{children:"MAINNET"}),", ",(0,i.jsx)(r.code,{children:"TESTNET"}),", ",(0,i.jsx)(r.code,{children:"CYAN"}),", ",(0,i.jsx)(r.code,{children:"AQUA"}),"]"]})]})]})]}),"\n",(0,i.jsx)(r.h2,{id:"instantiate-tkey",children:"Instantiate tKey"}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-swift",children:"let thresholdKey = try? ThresholdKey(\n  storage_layer: storage_layer,\n  service_provider: service_provider,\n  enable_logging: true,\n  manual_sync: false)\n"})}),"\n",(0,i.jsx)(r.h3,{id:"parameters",children:"Parameters"}),"\n",(0,i.jsxs)(r.table,{children:[(0,i.jsx)(r.thead,{children:(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.th,{children:"Parameter"}),(0,i.jsx)(r.th,{children:"Type"}),(0,i.jsx)(r.th,{children:"Description"}),(0,i.jsx)(r.th,{children:"Mandatory"})]})}),(0,i.jsxs)(r.tbody,{children:[(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:(0,i.jsx)(r.code,{children:"metadata"})}),(0,i.jsx)(r.td,{children:(0,i.jsx)(r.code,{children:"Metadata"})}),(0,i.jsx)(r.td,{children:"Metadata object containing the metadata details of tKey."}),(0,i.jsx)(r.td,{children:"No"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:(0,i.jsx)(r.code,{children:"shares"})}),(0,i.jsx)(r.td,{children:(0,i.jsx)(r.code,{children:"ShareStorePolyIdIndexMap"})}),(0,i.jsx)(r.td,{children:"Array of ShareStore with PolyId."}),(0,i.jsx)(r.td,{children:"No"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:(0,i.jsx)(r.code,{children:"storage_layer"})}),(0,i.jsx)(r.td,{children:(0,i.jsx)(r.code,{children:"StorageLayer"})}),(0,i.jsx)(r.td,{children:"Takes in the Storage Provider Instance"}),(0,i.jsx)(r.td,{children:"No"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:(0,i.jsx)(r.code,{children:"service_provider"})}),(0,i.jsx)(r.td,{children:(0,i.jsx)(r.code,{children:"ServiceProvider"})}),(0,i.jsx)(r.td,{children:"Takes in the Service Provider Instance"}),(0,i.jsx)(r.td,{children:"No"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:(0,i.jsx)(r.code,{children:"local_matadata_transitions"})}),(0,i.jsx)(r.td,{children:(0,i.jsx)(r.code,{children:"Metadata"})}),(0,i.jsx)(r.td,{children:"Local metadata transitions"}),(0,i.jsx)(r.td,{children:"No"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:(0,i.jsx)(r.code,{children:"enable_logging"})}),(0,i.jsx)(r.td,{children:(0,i.jsx)(r.code,{children:"Bool"})}),(0,i.jsx)(r.td,{children:"This option is used to specify whether to enable logging or not."}),(0,i.jsx)(r.td,{children:"No"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:(0,i.jsx)(r.code,{children:"manual_sync"})}),(0,i.jsx)(r.td,{children:(0,i.jsx)(r.code,{children:"Bool"})}),(0,i.jsx)(r.td,{children:"manual sync provides atomicity to your tkey share. If manual_sync is true, you should sync your local metadata transitions manually to your storage_layer, which means your storage layer doesn\u2019t know the local changes of your tkey unless you manually sync, gives atomicity. Otherwise, If manual_sync is false, then your local metadata changes will be synced automatically to your storage layer. If manual_sync = true and want to synchronize manually, you need to call sync_local_metadata_transitions() manually."}),(0,i.jsx)(r.td,{children:"No"})]})]})]}),"\n",(0,i.jsx)(r.h3,{id:"example",children:"Example"}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-swift",children:'guard let postboxkey = userData["privateKey"] as? String else {\n  alertContent = "Failed to get postboxkey"\n  return\n}\n\nguard let storage_layer = try? StorageLayer(enable_logging: true, host_url: "https://metadata.tor.us", server_time_offset: 2) else {\n  alertContent = "Failed to create storage layer"\n  return\n}\n\nguard let service_provider = try? ServiceProvider(enable_logging: true, postbox_key: postboxkey) else {\n  alertContent = "Failed to create service provider"\n  return\n}\n\nguard let thresholdKey = try? ThresholdKey(\n  storage_layer: storage_layer,\n  service_provider: service_provider,\n  enable_logging: true,\n  manual_sync: false) else {\n    alertContent = "Failed to create threshold key"\n    return\n  }\n\nthreshold_key = thresholdKey\n'})}),"\n",(0,i.jsx)(r.h2,{id:"initialize-tkey",children:"Initialize tKey"}),"\n",(0,i.jsx)(r.h4,{id:"threshold_keyinitializeparams",children:(0,i.jsx)(r.code,{children:"threshold_key.initialize(params?)"})}),"\n",(0,i.jsx)(r.p,{children:"Once you have triggered the login process, you're ready to initialize the tKey. This will generate a Threshold Key corresponding to your login\nprovider."}),"\n",(0,i.jsx)(r.h3,{id:"parameters-1",children:"Parameters"}),"\n",(0,i.jsxs)(r.table,{children:[(0,i.jsx)(r.thead,{children:(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.th,{children:"Parameter"}),(0,i.jsx)(r.th,{children:"Type"}),(0,i.jsx)(r.th,{children:"Description"}),(0,i.jsx)(r.th,{children:"Mandatory"})]})}),(0,i.jsxs)(r.tbody,{children:[(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:(0,i.jsx)(r.code,{children:"import_share"})}),(0,i.jsx)(r.td,{children:"String"}),(0,i.jsx)(r.td,{children:"An optional string representing the import share."}),(0,i.jsx)(r.td,{children:"No"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:(0,i.jsx)(r.code,{children:"input"})}),(0,i.jsx)(r.td,{children:"ShareStore"}),(0,i.jsx)(r.td,{children:"An optional ShareStore object representing the input."}),(0,i.jsx)(r.td,{children:"No"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:(0,i.jsx)(r.code,{children:"never_initialize_new_key"})}),(0,i.jsx)(r.td,{children:"Bool"}),(0,i.jsx)(r.td,{children:"A boolean value indicating whether or not to initialize a new key."}),(0,i.jsx)(r.td,{children:"No"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:(0,i.jsx)(r.code,{children:"include_local_metadata_transitions"})}),(0,i.jsx)(r.td,{children:"Bool"}),(0,i.jsx)(r.td,{children:"A boolean value indicating whether or not to include local metadata transitions."}),(0,i.jsx)(r.td,{children:"No"})]})]})]}),"\n",(0,i.jsx)(r.h3,{id:"example-1",children:"Example"}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-swift",children:'guard let key_details = try? await threshold_key.initialize() else {\n  alertContent = "Failed to get key details"\n  return\n}\n'})}),"\n",(0,i.jsx)(r.h2,{id:"get-tkey-details",children:"Get tKey Details"}),"\n",(0,i.jsx)(r.p,{children:(0,i.jsx)(r.code,{children:"let key_details = try! threshold_key.get_key_details()"})}),"\n",(0,i.jsxs)(r.p,{children:["The ",(0,i.jsx)(r.code,{children:"get_key_details()"})," function provides information about the keys created for a particular user. It includes the user's public key X and Y, as well\nas the share descriptions, number of required shares, total shares, and threshold."]}),"\n",(0,i.jsx)(r.h4,{id:"usage-sample",children:"Usage Sample"}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-swift",children:'let key_details = try! threshold_key.get_key_details() // Returns a KeyDetails object.\n\n// To get the public key\nlet pub_key = key_details.pub_key // Returns a KeyPoint object\n\n// For key x and y, or serialized representation\nlet x_coord = try! pub_key.getX()\nlet y_coord = try! pub_key.getY()\nlet serialized = try! pub_key.getAsCompressedPublicKey(format: "elliptic-compressed")\n\n//Required shares\nkey_details.required_shares\n\n// Threshold\nkey_details.threshold\n\n// Total Shares\nkey_details.total_shares\n\n// Share Descriptions\nkey_details.share_descriptions // This is a json object in string format\n'})}),"\n",(0,i.jsx)(r.p,{children:"From here, you can know whether the user key can be reconstructed or not."}),"\n",(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsxs)(r.li,{children:["If the value of ",(0,i.jsx)(r.code,{children:"required_shares"})," is more than zero, it implies that the threshold hasn't been met yet, and as a result, the key can't be\nreconstructed since the user hasn't generated enough shares."]}),"\n",(0,i.jsxs)(r.li,{children:["When the value of ",(0,i.jsx)(r.code,{children:"required_shares"})," is 0 or less, the user can reconstruct the key. They can then use the shares to generate their private key and\ncarry out additional operations on the tKey to manage their keys."]}),"\n"]}),"\n",(0,i.jsx)(r.h2,{id:"reconstruct-private-key",children:"Reconstruct Private Key"}),"\n",(0,i.jsxs)(r.p,{children:["The function ",(0,i.jsx)(r.code,{children:"reconstruct()"})," reconstructs the private key of the user from the shares. This function returns the private key of the user once the\nthreshold has been met."]}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-swift",children:"let reconstructedKeyResult = try! await threshold_key.reconstruct()\n\npublic final class KeyReconstructionDetails: Codable {\n    public var key: String\n    public var seed_phrase: [String]\n    public var all_keys: [String]\n}\n"})}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-swift",metastring:'title="Example"',children:'guard let key_details = try? await threshold_key.initialize(never_initialize_new_key: false) else {\n\talertContent = "Failed to get key details"\n\treturn\n}\n\nguard let reconstructionDetails = try? await threshold_key.reconstruct() else {\n  alertContent = "Failed to reconstruct key. \\(threshold) more share(s) required"\n  resetAccount = true\n  return\n}\n'})}),"\n",(0,i.jsx)(r.h2,{id:"generate-a-new-share",children:"Generate a New Share"}),"\n",(0,i.jsxs)(r.p,{children:["The function ",(0,i.jsx)(r.code,{children:"generate_new_share()"})," generates a new share on the same threshold (e.g, 2/3 -> 2/4). This function returns the new share generated."]}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-tsx",children:"let newShare = try! await threshold_key.generate_new_share()\n"})}),"\n",(0,i.jsx)(r.h2,{id:"delete-a-share",children:"Delete a Share"}),"\n",(0,i.jsxs)(r.p,{children:["The function ",(0,i.jsx)(r.code,{children:"delete_share()"})," deletes a share from the user's shares. This function returns the updated shareStore after the share has been deleted."]}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-tsx",children:"let shareStore = try! await threshold_key.delete_share(share_index: idx)\n"})}),"\n",(0,i.jsx)(r.h2,{id:"using-modules-for-further-operations",children:"Using Modules for Further Operations"}),"\n",(0,i.jsxs)(r.p,{children:["To perform advanced operations and manipulate keys, tKey offers modules that can be utilized. As previously stated in the\n",(0,i.jsx)(r.a,{href:"/sdk/core-kit/tkey-ios/initialize",children:"initialization"})," section, modules need to be configured beforehand to function properly with tKey. After\nconfiguration, the respective module's instance is accessible within your tKey instance and can be utilized for additional operations."]}),"\n",(0,i.jsx)(r.admonition,{title:"Modules",type:"info",children:(0,i.jsxs)(r.p,{children:["Please visit the ",(0,i.jsx)(r.a,{href:"/sdk/core-kit/tkey-ios/modules",children:(0,i.jsx)(r.strong,{children:"Modules"})})," section to view a comprehensive list of available modules and their respective\nfunctions."]})}),"\n",(0,i.jsx)(r.h2,{id:"consider-multiple-device-environment",children:"Consider multiple device environment"}),"\n",(0,i.jsx)(r.p,{children:"Imagine a situation where a user wants to use the same private key on multiple devices using the Tkey SDK."}),"\n",(0,i.jsx)(r.p,{children:"Basically, you need at least 2 shares to reconstruct a tkey. If you initialized tkey on device A, you need the 2 shares (social login share, device\nshare) obtained through initialization on device A'. This can be accomplished by transferring the device share from device A to device A'. (by using\nshare transfer module)"}),"\n",(0,i.jsx)(r.p,{children:"You can try like this :"}),"\n",(0,i.jsxs)(r.ol,{children:["\n",(0,i.jsx)(r.li,{children:"Serialize a share created on device A and import it from device A' to reconstruct it."}),"\n",(0,i.jsx)(r.li,{children:"Use share Transfer Module"}),"\n"]}),"\n",(0,i.jsx)(r.p,{children:"Here's an example of transfering a share using shareTransfer module."}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-swift",children:'// assume that threshold_key, threshold_key2 are independent tkeys initialized on each device\n// initialized with the same value of service provider and storage layer\n// 1. request new share from second device\nlet request_enc = try! await ShareTransferModule.request_new_share(threshold_key: threshold_key2, user_agent: "agent", available_share_indexes: "[]")\n// 2. generate new share and approve the request from existing device\nlet lookup = try! await ShareTransferModule.look_for_request(threshold_key: threshold_key)\nlet encPubKey = lookup[0]\n// generate a new share\nlet newShare = try! await threshold_key.generate_new_share()\n// approve the corresponding share\ntry! await ShareTransferModule.approve_request_with_share_index(threshold_key: threshold_key, enc_pub_key_x: encPubKey, share_index: newShare.hex)\n// 3. check the request status and reconstruct when it succeeds\n_ = try! await ShareTransferModule.add_custom_info_to_request(threshold_key: threshold_key2, enc_pub_key_x: request_enc, custom_info: "test info")\n_ = try! await ShareTransferModule.request_status_check(threshold_key: threshold_key2, enc_pub_key_x: request_enc, delete_request_on_completion: true)\nlet k2 = try! await threshold_key2.reconstruct()\n'})}),"\n",(0,i.jsx)(r.p,{children:"Alternatively, you can create one additional share (backup share, security question share, etc) and utilize it on device A'."}),"\n",(0,i.jsx)(r.p,{children:"Below is an example guide of leveraging security question module :"}),"\n",(0,i.jsxs)(r.ol,{children:["\n",(0,i.jsx)(r.li,{children:"Initialize the tkey on Device A. (2/2 shares are needed)"}),"\n",(0,i.jsx)(r.li,{children:"Create an extra share using the Security question module and reconstruct it. (2/3)"}),"\n",(0,i.jsx)(r.li,{children:"Recover the final key from Device A' with the social login share and security question share."}),"\n",(0,i.jsx)(r.li,{children:"Save the security question share locally. If you set up the device share like this, you don't need to ask the security question every time you log\nin."}),"\n"]}),"\n",(0,i.jsx)(r.p,{children:"Creating an additional share also makes it easier for account management, as you can recover your account if you lose your device share."}),"\n",(0,i.jsx)(r.h2,{id:"making-blockchain-calls",children:"Making Blockchain Calls"}),"\n",(0,i.jsxs)(r.p,{children:["After generating your private key with tKey, you can use it to make blockchain calls on EVM-based blockchains like Ethereum, Polygon and other EVM\nChains. The key is of the ",(0,i.jsx)(r.code,{children:"secp256k1"})," type, which is compatible with EVM blockchains. Additionally, you can convert this key into other curves if\nneeded."]}),"\n",(0,i.jsx)(r.p,{children:"In addition to that, we have dedicated provider packages for EVM Blockchain."}),"\n",(0,i.jsx)(r.p,{children:"You can find their documentation by following these links:"}),"\n",(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsxs)(r.li,{children:["Getting a Ethereum Provider from tKey: ",(0,i.jsx)(r.a,{href:"/sdk/helper-sdks/providers/evm#getting-a-provider-from-any-secp256k1-private-key",children:"Ethereum Provider"})]}),"\n"]}),"\n",(0,i.jsx)(r.admonition,{title:"Connect Blockchain",type:"info",children:(0,i.jsxs)(r.p,{children:["Our ",(0,i.jsx)(r.a,{href:"/connect-blockchain",children:(0,i.jsx)(r.strong,{children:"Connect Blockchain"})})," documentation provides a comprehensive guide on how to connect to major blockchains. Feel free to\ncheck it out."]})})]})}function a(e={}){const{wrapper:r}={...(0,n.a)(),...e.components};return r?(0,i.jsx)(r,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},11151:(e,r,t)=>{t.d(r,{Z:()=>l,a:()=>d});var i=t(67294);const n={},s=i.createContext(n);function d(e){const r=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function l(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:d(e.components),i.createElement(s.Provider,{value:r},e.children)}}}]);