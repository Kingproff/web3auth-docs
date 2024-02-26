"use strict";(self.webpackChunkweb3auth_docs=self.webpackChunkweb3auth_docs||[]).push([[1560],{52216:(e,i,r)=>{r.r(i),r.d(i,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>l,metadata:()=>h,toc:()=>u});var n=r(85893),t=r(11151);const s=r.p+"assets/images/jwks-endpoint-19b62959e6cac7abe862eab4a0dc8c35.png",o=r.p+"assets/images/jwt-validation-field-5c60403fc5d192c3831dbe1c85403a6e.png",d=r.p+"assets/images/jwt-verifier-id-2ca6895369cc752a6db92b9457bba7d5.png",l={title:"JWT Errors",image:"images/docs-meta-cards/troubleshoot-card.png",displayed_sidebar:"docs",description:"JWT Errors | Documentation - Web3Auth"},a=void 0,h={id:"troubleshooting/jwt-errors",title:"JWT Errors",description:"JWT Errors | Documentation - Web3Auth",source:"@site/docs/troubleshooting/jwt-errors.mdx",sourceDirName:"troubleshooting",slug:"/troubleshooting/jwt-errors",permalink:"/docs/troubleshooting/jwt-errors",draft:!1,unlisted:!1,editUrl:"https://github.com/web3auth/web3auth-docs/edit/master/docs/troubleshooting/jwt-errors.mdx",tags:[],version:"current",frontMatter:{title:"JWT Errors",image:"images/docs-meta-cards/troubleshoot-card.png",displayed_sidebar:"docs",description:"JWT Errors | Documentation - Web3Auth"},sidebar:"docs",previous:{title:"Bundler Polyfill Issues - React Native Metro",permalink:"/docs/troubleshooting/metro-issues"},next:{title:"Supported Browsers List",permalink:"/docs/troubleshooting/supported-browsers"}},c={},u=[{value:"Invalid <code>JWT Verifiers ID</code> field.",id:"invalid-jwt-verifiers-id-field",level:2},{value:"Error occurred while verifying params could not verify identity",id:"error-occurred-while-verifying-params-could-not-verify-identity",level:3},{value:"Failed to verify JWS signature.",id:"failed-to-verify-jws-signature",level:2},{value:"Error occurred while verifying params unable to verify jwt token",id:"error-occurred-while-verifying-params-unable-to-verify-jwt-token",level:3},{value:"Duplicate token",id:"duplicate-token",level:2},{value:"Could not get result from torus nodes Duplicate token found",id:"could-not-get-result-from-torus-nodes-duplicate-token-found",level:3},{value:"Expired token",id:"expired-token",level:2},{value:"Error occurred while verifying paramstimesigned is more than 1m0s ago",id:"error-occurred-while-verifying-paramstimesigned-is-more-than-1m0s-ago",level:3},{value:"Mismatch JWT Validation field",id:"mismatch-jwt-validation-field",level:2},{value:"Looking for Refresh Tokens?",id:"looking-for-refresh-tokens",level:2},{value:"What problem does the Refresh Token solve?",id:"what-problem-does-the-refresh-token-solve",level:4}];function f(e){const i={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.admonition,{type:"warning",children:(0,n.jsxs)(i.p,{children:["To ensure proper authentication with Web3Auth, it is necessary for the JWT header to have the ",(0,n.jsx)(i.code,{children:"kid"})," field, while the payload data should have the\n",(0,n.jsx)(i.code,{children:"iat"})," field."]})}),"\n",(0,n.jsx)(i.p,{children:"When configuring Web3Auth's Custom Authentication, you may encounter JWT errors. Below is a list of these errors and the necessary steps to resolve\nthem."}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.a,{href:"#invalid-jwt-verifiers-id-field",children:"Invalid JWT Verifiers ID field"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:"Error occurred while verifying params could not verify identity"}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.a,{href:"#failed-to-verify-jws-signature",children:"Failed to verify JWS signature"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:"Error occurred while verifying params unable to verify jwt token"}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.a,{href:"#duplicate-token",children:"Duplicate Token"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:"Could not get result from torus nodes Duplicate token found"}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(i.li,{children:[(0,n.jsx)(i.a,{href:"#expired-token",children:"Expired Token"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:"Error occurred while verifying paramstimesigned is more than 1m0s ago"}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.a,{href:"#mismatch-jwt-validation-field",children:"Mismatch JWT Validation field"})}),"\n",(0,n.jsx)(i.li,{children:(0,n.jsx)(i.a,{href:"#looking-for-refresh-tokens",children:"Refresh Tokens?"})}),"\n"]}),"\n",(0,n.jsxs)(i.h2,{id:"invalid-jwt-verifiers-id-field",children:["Invalid ",(0,n.jsx)(i.code,{children:"JWT Verifiers ID"})," field."]}),"\n",(0,n.jsx)(i.h3,{id:"error-occurred-while-verifying-params-could-not-verify-identity",children:"Error occurred while verifying params could not verify identity"}),"\n",(0,n.jsxs)(i.p,{children:['"Error occurred while verifying params could not verify identity" error could be because the ',(0,n.jsx)(i.code,{children:"verifierIdField"})," of ",(0,n.jsx)(i.code,{children:"extraLoginOptions"})," is different\nfrom the one you have set up during the creation of Verifiers (",(0,n.jsx)(i.code,{children:"JWT Verifiers ID"}),") on the Web3Auth dashboard."]}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:["\n",(0,n.jsxs)(i.p,{children:["This is the ",(0,n.jsx)(i.code,{children:"JWT Verifiers ID"})," field on the ",(0,n.jsx)(i.code,{children:"Verifier Modal"})," of the Web3Auth dashboard."]}),"\n",(0,n.jsx)("img",{style:{display:"block",maxHeight:"200px",marginBottom:"20px"},src:d,alt:"JWT Verifier ID - Troubleshoot"}),"\n"]}),"\n",(0,n.jsxs)(i.li,{children:["\n",(0,n.jsx)(i.p,{children:"Make sure, this matched with your code."}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-tsx",children:'import { WALLET_ADAPTERS, CHAIN_NAMESPACES } from "@web3auth/base";\n\nawait web3auth.connectTo(WALLET_ADAPTERS.OPENLOGIN, {\n  loginProvider: "jwt",\n  extraLoginOptions: {\n    domain: "YOUR-AUTH0-DOMAIN",\n    verifierIdField: "sub", // <-- This is the JWT Verifiers ID field.\n    response_type: "token",\n    scope: "email profile openid",\n  },\n});\n'})}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(i.h2,{id:"failed-to-verify-jws-signature",children:"Failed to verify JWS signature."}),"\n",(0,n.jsx)(i.h3,{id:"error-occurred-while-verifying-params-unable-to-verify-jwt-token",children:"Error occurred while verifying params unable to verify jwt token"}),"\n",(0,n.jsx)(i.p,{children:'"Error occurred while verifying params unable to verify jwt token" error could be because of the following reasons:'}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:["The verifier for your OpenLoginAdapter might be wrong. Check to make sure the ",(0,n.jsx)(i.code,{children:"verifier"})," field is set correctly."]}),"\n",(0,n.jsx)(i.li,{children:"The JWT is not signed with the correct key(JWK)."}),"\n",(0,n.jsx)(i.li,{children:"The JWKS endpoint is not reachable or doesn't return a valid JWK that was used to sign the JWT."}),"\n",(0,n.jsxs)(i.li,{children:["The JWKS endpoint is incorrect on the Web3Auth Dashboard. Double check to confirm the correct JWKS endpoint.","\n",(0,n.jsx)("img",{style:{display:"block",maxHeight:"200px",marginBottom:"20px"},src:s,alt:"JWKS Endpoint Field - Troubleshoot"}),"\n"]}),"\n",(0,n.jsxs)(i.li,{children:["The JWKS is missing the ",(0,n.jsx)(i.code,{children:"kid"})," field."]}),"\n",(0,n.jsxs)(i.li,{children:["The ",(0,n.jsx)(i.code,{children:"kid"})," present in the JWT header is not present in the JWKS."]}),"\n"]}),"\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.code,{children:"sample jwks"}),":"]}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-tsx",children:'{\n  "keys": [\n    {\n      "kty": "RSA",\n      "e": "AQAB",\n      "use": "sig",\n      "kid": "YOUR-KID", // <-- This is the kid.\n      "n": "YOUR-N",\n      "alg": "RS256" // <-- This is the algorithm.\n    }\n  ]\n}\n'})}),"\n",(0,n.jsxs)(i.p,{children:[(0,n.jsx)(i.code,{children:"sample jwks endpoint"}),": ",(0,n.jsx)(i.a,{href:"https://www.googleapis.com/oauth2/v3/certs",children:"https://www.googleapis.com/oauth2/v3/certs"})]}),"\n",(0,n.jsx)(i.h2,{id:"duplicate-token",children:"Duplicate token"}),"\n",(0,n.jsx)(i.h3,{id:"could-not-get-result-from-torus-nodes-duplicate-token-found",children:"Could not get result from torus nodes Duplicate token found"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:["\n",(0,n.jsx)(i.p,{children:'"Could not get result from torus nodes Duplicate token found" error is thrown when the JWT is sent twice in the same request.'}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-tsx",children:'await web3auth.connectTo(WALLET_ADAPTERS.OPENLOGIN, {\n  loginProvider: "jwt",\n  extraLoginOptions: {\n    id_token: "ID_TOKEN", // <-- JWT should be unique for each request.\n    verifierIdField: "sub",\n  },\n});\n'})}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(i.h2,{id:"expired-token",children:"Expired token"}),"\n",(0,n.jsx)(i.h3,{id:"error-occurred-while-verifying-paramstimesigned-is-more-than-1m0s-ago",children:"Error occurred while verifying paramstimesigned is more than 1m0s ago"}),"\n",(0,n.jsxs)(i.admonition,{type:"warning",children:[(0,n.jsxs)(i.p,{children:["Web3Auth accepts only those JWTs whose ",(0,n.jsx)(i.code,{children:"iat"})," is less than the current time and is not greater than ",(0,n.jsx)(i.code,{children:"60s"})," from current time. Regardless of the ",(0,n.jsx)(i.code,{children:"exp"}),"\nfield of the JWT."]}),(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:["In short, the JWT is considered expired if the ",(0,n.jsx)(i.code,{children:"iat"})," is greater than ",(0,n.jsx)(i.code,{children:"60s"})," from current time."]}),"\n"]})]}),"\n",(0,n.jsx)(i.p,{children:'"Error occurred while verifying paramstimesigned is more than 1m0s ago 2022-02-24 13:46:05 +0000 UTC" error could be because:'}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:"JWT is expired."}),"\n",(0,n.jsxs)(i.li,{children:["The JWT's ",(0,n.jsx)(i.code,{children:"exp"})," field is less than the current time."]}),"\n",(0,n.jsxs)(i.li,{children:["The JWT's ",(0,n.jsx)(i.code,{children:"iat"})," field is greater than ",(0,n.jsx)(i.code,{children:"60s"})," from current time."]}),"\n"]}),"\n",(0,n.jsx)(i.h2,{id:"mismatch-jwt-validation-field",children:"Mismatch JWT Validation field"}),"\n",(0,n.jsx)(i.p,{children:"This error occurred when the validation field in the JWT is not matching with the validation field entered during the creation of Verifiers on the\nWeb3Auth dashboard."}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:["This is the ",(0,n.jsx)(i.code,{children:"JWT Validation"})," field on the ",(0,n.jsx)(i.code,{children:"Verifier Modal"})," of the Web3Auth configuration.","\n",(0,n.jsx)("img",{style:{display:"block",maxHeight:"200px",marginBottom:"20px"},src:o,alt:"JWT Validation Field - Troubleshoot"}),"\n"]}),"\n",(0,n.jsx)(i.li,{children:"Make sure, these fields are present in the JWT Payload and matches with the JWT."}),"\n"]}),"\n",(0,n.jsx)(i.h2,{id:"looking-for-refresh-tokens",children:"Looking for Refresh Tokens?"}),"\n",(0,n.jsxs)(i.p,{children:["A Refresh Token is a unique token that is used to obtain additional access tokens from an Authentication Service Provider. With Web3Auth, we verify\nthe validity of the ",(0,n.jsx)(i.strong,{children:"id_token"})," and compare its payload value to the JWKS provided by either the Auth provider or your custom JWKS. And with Refresh\nToken, one can get a new id_token. And that id_token will be passed to Web3Auth, essentially making another login request."]}),"\n",(0,n.jsx)(i.h4,{id:"what-problem-does-the-refresh-token-solve",children:"What problem does the Refresh Token solve?"}),"\n",(0,n.jsxs)(i.p,{children:["It enables users to maintain longer authentication sessions without the need for constant re-login. Although we do not support Refresh Tokens to\nmaintain longer sessions, we do offer session management. The ",(0,n.jsx)(i.strong,{children:"Session Management"})," feature allows checking and maintaining existing sessions with\nWeb3Auth."]}),"\n",(0,n.jsxs)(i.p,{children:["During login with Web3Auth, pass the ",(0,n.jsx)(i.code,{children:"sessionTime"})," parameter. It will ",(0,n.jsx)(i.strong,{children:"allow users to stay authenticated with Web3Auth for up to 1 day by default or\na maximum of 7 days"})," until they log out or their session data is cleared."]})]})}function p(e={}){const{wrapper:i}={...(0,t.a)(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(f,{...e})}):f(e)}},11151:(e,i,r)=>{r.d(i,{Z:()=>d,a:()=>o});var n=r(67294);const t={},s=n.createContext(t);function o(e){const i=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function d(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),n.createElement(s.Provider,{value:i},e.children)}}}]);