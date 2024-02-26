"use strict";(self.webpackChunkweb3auth_docs=self.webpackChunkweb3auth_docs||[]).push([[86392],{80701:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>d,frontMatter:()=>s,metadata:()=>a,toc:()=>u});var i=t(85893),o=t(11151);const s={title:"Multi Factor Authentication in PnP Unity SDK",sidebar_label:"Multi Factor Authentication",displayed_sidebar:"sdk",description:"Web3Auth PnP Unity SDK - Multi Factor Authentication | Documentation - Web3Auth"},r=void 0,a={id:"sdk/pnp/unity/mfa",title:"Multi Factor Authentication in PnP Unity SDK",description:"Web3Auth PnP Unity SDK - Multi Factor Authentication | Documentation - Web3Auth",source:"@site/docs/sdk/pnp/unity/mfa.mdx",sourceDirName:"sdk/pnp/unity",slug:"/sdk/pnp/unity/mfa",permalink:"/docs/sdk/pnp/unity/mfa",draft:!1,unlisted:!1,editUrl:"https://github.com/web3auth/web3auth-docs/edit/master/docs/sdk/pnp/unity/mfa.mdx",tags:[],version:"current",frontMatter:{title:"Multi Factor Authentication in PnP Unity SDK",sidebar_label:"Multi Factor Authentication",displayed_sidebar:"sdk",description:"Web3Auth PnP Unity SDK - Multi Factor Authentication | Documentation - Web3Auth"},sidebar:"sdk",previous:{title:"Custom Authentication",permalink:"/docs/sdk/pnp/unity/custom-authentication"},next:{title:"dApp Share",permalink:"/docs/sdk/pnp/unity/dapp-share"}},c={},u=[{value:"Arguments",id:"arguments",level:2},{value:"<code>MFALevel</code>",id:"mfalevel",level:3},{value:"<code>MFASettings</code>",id:"mfasettings",level:3}];function l(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"MFA is an extra layer of protection that verifies your identity when accessing your account. To ensure ownership, you must provide two or more\ndifferent backup factors. You have the option to choose from the device, social, backup factor (seed phrase), and password factors to guarantee access\nto your Web3 account. Once you create a recovery factor, MFA is enabled, and your keys are divided into three shares for off-chain multi-sig, making\nthe key self-custodial. With backup factors, you can easily recover your account if you lose access to your original device or help login into a new\ndevice."}),"\n",(0,i.jsxs)(n.p,{children:["For a dApp, we provide various options to set up Multi-Factor Authentication. You can customize the MFA screen by setting the ",(0,i.jsx)(n.code,{children:"mfaLevel"})," argument. You\ncan enable or disable a backup factor and change their order. Currently, there are four values for ",(0,i.jsx)(n.code,{children:"mfaLevel"}),":"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"default"}),": presents the MFA screen every third login"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"optional"}),": presents the MFA screen on every login, but you can skip it"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"mandatory"}),": make it mandatory to set up MFA after login"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"none"}),": skips the MFA setup screen"]}),"\n"]}),"\n",(0,i.jsx)(n.admonition,{title:"Note",type:"caution",children:(0,i.jsx)(n.p,{children:"If you are using default verifiers, your users may have set up MFA on other dApps that also use default Web3Auth verifiers. In this case, the MFA\nscreen will continue to appear if the user has enabled MFA on other dApps. This is because MFA cannot be turned off once it is enabled."})}),"\n",(0,i.jsxs)(n.p,{children:["We offer the following backup factors under ",(0,i.jsx)(n.code,{children:"mfaSettings"}),":"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"deviceShareFactor"}),","]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"backUpShareFactor"}),","]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"socialBackupFactor"}),", and"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"passwordFactor"}),"."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Choose the best options that suit your needs to ensure a safe and secure Web3 experience."}),"\n",(0,i.jsx)(n.admonition,{title:"Minimum Growth plan required",type:"note",children:(0,i.jsxs)(n.p,{children:["This is a paid feature and the the minimum ",(0,i.jsx)(n.a,{href:"https://web3auth.io/pricing.html",children:"pricing plan"})," to use this SDK in a production environment is the\n",(0,i.jsx)(n.strong,{children:"Growth Plan"}),". You can use this feature in the development environment for free."]})}),"\n",(0,i.jsx)(n.h2,{id:"arguments",children:"Arguments"}),"\n",(0,i.jsx)(n.h3,{id:"mfalevel",children:(0,i.jsx)(n.code,{children:"MFALevel"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-cs",children:'public enum MFALevel\n{\n    [EnumMember(Value = "default")]\n    DEFAULT,\n    [EnumMember(Value = "optional")]\n    OPTIONAL,\n    [EnumMember(Value = "mandatory")]\n    MANDATORY,\n    [EnumMember(Value = "none")]\n    NONE\n}\n'})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-cs",metastring:'title="Usage"',children:"public void login()\n{\n    var selectedProvider = Provider.GOOGLE;\n    var options = new LoginParams()\n    {\n        loginProvider = selectedProvider,\n\t\tmfaLevel = MFALevel.MANDATORY\n    };\n    web3Auth.login(options);\n}\n"})}),"\n",(0,i.jsx)(n.h3,{id:"mfasettings",children:(0,i.jsx)(n.code,{children:"MFASettings"})}),"\n",(0,i.jsx)(n.admonition,{title:"Minimum SCALE plan required",type:"note",children:(0,i.jsxs)(n.p,{children:["This is a paid feature and the the minimum ",(0,i.jsx)(n.a,{href:"https://web3auth.io/pricing.html",children:"pricing plan"})," to use this SDK in a production environment is the ",(0,i.jsx)(n.strong,{children:"SCALE\nPlan"}),". You can use this feature in the development environment for free."]})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-cs",children:"public class MfaSetting\n{\n    public bool enable { get; set; }\n    public int? priority { get; set; }\n    public bool? mandatory { get; set; }\n\n    // Constructor\n    public MfaSetting(bool enable, int? priority, bool? mandatory)\n    {\n        this.enable = enable;\n        this.priority = priority;\n        this.mandatory = mandatory;\n    }\n}\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-cs",metastring:'title="Usage"',children:'using System;\nusing System.Linq;\nusing System.Collections.Generic;\nusing UnityEngine;\nusing UnityEngine.UI;\nusing Newtonsoft.Json;\n\npublic class Web3custom : MonoBehaviour\n{\n  Web3Auth web3Auth;\n\n  // Start is called before the first frame update\n  void Start()\n  {\n    web3Auth = GetComponent<Web3Auth>();\n    web3Auth.setOptions(new Web3AuthOptions()\n    {\n      redirectUrl = new Uri("torusapp://com.torus.Web3AuthUnity/auth"),\n      clientId = "BAwFgL-r7wzQKmtcdiz2uHJKNZdK7gzEf2q-m55xfzSZOw8jLOyIi4AVvvzaEQO5nv2dFLEmf9LBkF8kaq3aErg",\n      network = Web3Auth.Network.TESTNET,\n      mfaSettings = new MfaSettings(\n        new MfaSetting(true, 1, false),\n        new MfaSetting(true, 1, true),\n        new MfaSetting(true, 1, false),\n        new MfaSetting(true, 1, true)\n      )\n    });\n    web3Auth.onLogin += onLogin;\n    web3Auth.onLogout += onLogout;\n  }\n  public void login() {}\n  private void onLogin(Web3AuthResponse response) {}\n  public void logout() {}\n  private void onLogout() {}\n}\n\n'})})]})}function d(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>a,a:()=>r});var i=t(67294);const o={},s=i.createContext(o);function r(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);