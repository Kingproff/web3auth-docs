"use strict";(self.webpackChunkweb3auth_docs=self.webpackChunkweb3auth_docs||[]).push([[11675],{73811:(e,n,t)=>{t.d(n,{ZP:()=>a});var s=t(85893),i=t(11151);function r(e){const n={code:"code",pre:"pre",...(0,i.a)(),...e.components};return(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "userInfo": {\n    "email": "w3a-heroes@web3auth.com",\n    "name": "Web3Auth Heroes",\n    "profileImage": "https://lh3.googleusercontent.com/a/Ajjjsdsmdjmnm...",\n    "verifier": "torus",\n    "verifierId": "w3a-heroes@web3auth.com",\n    "typeOfLogin": "google",\n    "aggregateVerifier": "w3a-google-sapphire",\n    "dappShare": "", // 24 words of seed phrase will be sent only incase of custom verifiers\n    "idToken": "<jwtToken issued by Web3Auth>",\n    "oAuthIdToken": "<jwtToken issued by OAuth Provider>", // will be sent only incase of custom verifiers\n    "oAuthAccessToken": "<accessToken issued by OAuth Provider>", // will be sent only incase of custom verifiers\n    "isMfaEnabled": false // Returns whether the user has enabled MFA or not\n  }\n}\n'})})}function a(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(r,{...e})}):r(e)}},66953:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>h,toc:()=>l});var s=t(85893),i=t(11151),r=t(73811);const a={title:"Using dApp Share in PnP iOS SDK",sidebar_label:"dApp Share",displayed_sidebar:"sdk",description:"Web3Auth PnP iOS SDK - dApp Share | Documentation - Web3Auth"},o=void 0,h={id:"sdk/pnp/ios/dapp-share",title:"Using dApp Share in PnP iOS SDK",description:"Web3Auth PnP iOS SDK - dApp Share | Documentation - Web3Auth",source:"@site/docs/sdk/pnp/ios/dapp-share.mdx",sourceDirName:"sdk/pnp/ios",slug:"/sdk/pnp/ios/dapp-share",permalink:"/docs/sdk/pnp/ios/dapp-share",draft:!1,unlisted:!1,editUrl:"https://github.com/web3auth/web3auth-docs/edit/master/docs/sdk/pnp/ios/dapp-share.mdx",tags:[],version:"current",frontMatter:{title:"Using dApp Share in PnP iOS SDK",sidebar_label:"dApp Share",displayed_sidebar:"sdk",description:"Web3Auth PnP iOS SDK - dApp Share | Documentation - Web3Auth"},sidebar:"sdk",previous:{title:"Multi Factor Authentication",permalink:"/docs/sdk/pnp/ios/mfa"},next:{title:"Web3Auth PnP React Native SDK",permalink:"/docs/sdk/pnp/react-native/"}},d={},l=[{value:"Web3Auth Infrastructure at a glance",id:"web3auth-infrastructure-at-a-glance",level:2},{value:"The User Experience in Mobile Platforms",id:"the-user-experience-in-mobile-platforms",level:2},{value:"dApp Share in iOS",id:"dapp-share-in-ios",level:2},{value:"Sample Response in iOS",id:"sample-response-in-ios",level:4},{value:"Example",id:"example",level:2}];function c(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"web3auth-infrastructure-at-a-glance",children:"Web3Auth Infrastructure at a glance"}),"\n",(0,s.jsxs)(n.p,{children:["If you go through the ",(0,s.jsx)(n.a,{href:"/infrastructure/",children:"Web3Auth infrastructure"})," you'll notice that to enable the non custodiality of Web3Auth, we split the private\nkey into multiple parts, i.e. ",(0,s.jsx)(n.code,{children:"shares"}),". These shares are a part of the off chain multisig, where multiple shares are stored in different places and can\nbe used to reconstruct the private key dynamically in the user's frontend application. For a glance at the structure of the shares, these are the\nfollowing:"]}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsxs)(n.strong,{children:[(0,s.jsx)(n.code,{children:"ShareA"})," is managed by a login service via node operators"]}),": This share is further split amongst a network of nodes and retrieved via\nconventional authentication flows."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsxs)(n.strong,{children:[(0,s.jsx)(n.code,{children:"ShareB"})," is stored on the user's device"]}),": Implementation is device and system specific. For example, on mobile devices, the share could be\nstored in device storage secured via biometrics."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsxs)(n.strong,{children:[(0,s.jsx)(n.code,{children:"ShareC"})," is a recovery share"]}),": An extra share to be kept by the user, possibly kept on a separate device, downloaded or based on user input with\nenough entropy (eg. password, security questions, hardware device etc.)."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Similar to existing 2FA systems, a user needs to prove ownership of at least 2 out of 3 (2/3) shares, in order to retrieve their private key. This\ninitial setup provides several benefits."}),"\n",(0,s.jsx)(n.h2,{id:"the-user-experience-in-mobile-platforms",children:"The User Experience in Mobile Platforms"}),"\n",(0,s.jsx)(n.p,{children:"The user experience on mobile platforms is very different from the web platforms. This is because the user has to be redirected to a browser where\nthey can login using their socials and then back to the app once they have been successfully authenticated. This user experience shifts the context\nbetween two applications, whereas, in the web platforms, the context remains within the browser only."}),"\n",(0,s.jsxs)(n.p,{children:["For the seamless login flow, we need to reconstruct the Shares ",(0,s.jsx)(n.code,{children:"A"})," and ",(0,s.jsx)(n.code,{children:"B"}),". ",(0,s.jsx)(n.code,{children:"Share B"})," is managed by the login service and is provided on successful\nauthentication. Whereas in web platforms, ",(0,s.jsx)(n.code,{children:"Share A"})," is stored in the browser context. We can still store it in the browser context for mobile devices,\nbut this has a few risks like users accidentally deleting browser data. This is a bigger problem in mobile devices since the user doesn't realize that\nthe browser is being used to login within the app and clearing the browser data can cause their logins to fail. Hence, to tackle this issue, Web3Auth\nissues a dApp Share, ie. a backup share that can be stored by the app developer directly within their application and used to reconstruct the private\nkey after successful login by the user."]}),"\n",(0,s.jsx)(n.h2,{id:"dapp-share-in-ios",children:"dApp Share in iOS"}),"\n",(0,s.jsx)(n.p,{children:"Web3Auth issues a dApp Share, ie. a backup share that can be stored by the app developer directly within their application and used to reconstruct the\nprivate key after successful login by the user."}),"\n",(0,s.jsx)(n.p,{children:"After a successful login from a user, the user details are returned as a response to the application in mobile devices."}),"\n",(0,s.jsx)(n.h4,{id:"sample-response-in-ios",children:"Sample Response in iOS"}),"\n",(0,s.jsx)(r.ZP,{}),"\n",(0,s.jsxs)(n.p,{children:["If you notice, the reponses has a field called ",(0,s.jsx)(n.code,{children:"dappShare"})," which is a 24 words seed phrase that can be used to reconstruct the private key. This\ndappShare is a suplement to the ",(0,s.jsx)(n.code,{children:"Share A"})," and represents half of the private key. The application can store the dApp share in their own application\nlocal storage safely."]}),"\n",(0,s.jsx)(n.p,{children:"Now, while logging in, the user can use their social accounts to obtain one share, and the application provides the dApp Share, removing the need to\nstore the share in the browser context and enabling user to login seamlessly. This can be done by passing over the stored dApp share value in the\nlogin function."}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsxs)(n.p,{children:["One major thing to note here is that the ",(0,s.jsx)(n.code,{children:"dappShare"})," is only available for custom verifiers and not the standard Web3Auth verifiers. This is done to\nmake sure that an application only has access to the corresponding share to the private key of their application's user. Hence, to use dApp Share, one\nhas to use the custom authentication feature of Web3Auth. Also, the dApp Share is only returned to users who have enabled 2FA to their account."]})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-swift",children:'Web3Auth().login(W3ALoginParams(loginProvider: provider, dappShare = "<24 words seed phrase>"))\n'})}),"\n",(0,s.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-swift",children:'import Foundation\nimport Web3Auth\n\nclass ViewModel: ObservableObject {\n    var web3Auth: Web3Auth?\n    @Published var loggedIn: Bool = false\n    @Published var user: Web3AuthState?\n    @Published var isLoading = false\n    @Published var navigationTitle: String = ""\n\n    func setup() async {\n        guard web3Auth == nil else { return }\n        await MainActor.run(body: {\n            isLoading = true\n            navigationTitle = "Loading"\n        })\n        web3Auth = await Web3Auth(W3AInitParams(\n            clientId: clientId, network: network\n        ))\n\n        await MainActor.run(body: {\n            if self.web3Auth?.state != nil {\n                user = web3Auth?.state\n                loggedIn = true\n            }\n            isLoading = false\n            navigationTitle = loggedIn ? "UserInfo" : "SignIn"\n        })\n    }\n\n    func login(provider: Web3AuthProvider) {\n        Task {\n            do {\n                let result = try await web3Auth.login(\n\t\t\t\t\tW3ALoginParams(\n                        // provider can be .GOOGLE, .FACEBOOK, .APPLE etc\n\t\t\t\t\t\tloginProvider: provider,\n\t\t\t\t\t\t// highlight-next-line\n                        dappShare: "<24 words seed phrase>"\n\t\t\t\t))\n\n                await MainActor.run(body: {\n                    user = result\n                    loggedIn = true\n                })\n\n            } catch {\n                print("Error")\n            }\n        }\n    }\n}\n\n'})})]})}function p(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>o,a:()=>a});var s=t(67294);const i={},r=s.createContext(i);function a(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);