"use strict";(self.webpackChunkweb3auth_docs=self.webpackChunkweb3auth_docs||[]).push([[26384],{49687:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>a,metadata:()=>o,toc:()=>l});var i=n(85893),r=n(11151);const a={title:"Multi Factor Authentication in PnP Unreal Engine SDK",sidebar_label:"Multi Factor Authentication",displayed_sidebar:"sdk",description:"Web3Auth PnP Unreal Engine SDK - Multi Factor Authentication | Documentation - Web3Auth"},s=void 0,o={id:"sdk/pnp/unreal/mfa",title:"Multi Factor Authentication in PnP Unreal Engine SDK",description:"Web3Auth PnP Unreal Engine SDK - Multi Factor Authentication | Documentation - Web3Auth",source:"@site/docs/sdk/pnp/unreal/mfa.mdx",sourceDirName:"sdk/pnp/unreal",slug:"/sdk/pnp/unreal/mfa",permalink:"/docs/sdk/pnp/unreal/mfa",draft:!1,unlisted:!1,editUrl:"https://github.com/web3auth/web3auth-docs/edit/master/docs/sdk/pnp/unreal/mfa.mdx",tags:[],version:"current",frontMatter:{title:"Multi Factor Authentication in PnP Unreal Engine SDK",sidebar_label:"Multi Factor Authentication",displayed_sidebar:"sdk",description:"Web3Auth PnP Unreal Engine SDK - Multi Factor Authentication | Documentation - Web3Auth"},sidebar:"sdk",previous:{title:"Custom Authentication",permalink:"/docs/sdk/pnp/unreal/custom-authentication"},next:{title:"Wallet Services",permalink:"/docs/sdk/wallet-services/"}},c={},l=[{value:"<code>MFALevel</code>",id:"mfalevel",level:2},{value:"Usage",id:"usage",level:3},{value:"<code>MFASettings</code>",id:"mfasettings",level:2},{value:"Usage",id:"usage-1",level:3}];function d(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.p,{children:"The Multi Factor Authentication feature refers to the ability of the user to create a backup share (recovery phrase). This helps them login into a new\ndevice and also to recover their account if they lose their original device."}),"\n",(0,i.jsxs)(t.p,{children:["You can set the mfaLevel within the ",(0,i.jsx)(t.code,{children:"loginParams"})," to customize when mfa screen should be shown to user. It currently accepts 4 values:"]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:(0,i.jsx)(t.code,{children:"default"})})," - Setting the mfaLevel to default will present the MFA screen to user on every third login. ",(0,i.jsx)(t.code,{children:"mfaLevel = MFALevel.DEFAULT"})]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:(0,i.jsx)(t.code,{children:"optional"})})," - Setting mfaLevel to optional will present the MFA screen to user on every login but user will have the option to skip it.\n",(0,i.jsx)(t.code,{children:"mfaLevel = MFALevel.OPTIONAL"})]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:(0,i.jsx)(t.code,{children:"mandatory"})})," - Setting mfaLevel to mandatory will make it mandatory for user to setup MFA after login. ",(0,i.jsx)(t.code,{children:"mfaLevel = MFALevel.MANDATORY"})]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.strong,{children:(0,i.jsx)(t.code,{children:"none"})})," - Setting mfaLevel to none will skip the mfa setup screen totally. ",(0,i.jsx)(t.code,{children:"mfaLevel = MFALevel.NONE"})]}),"\n"]}),"\n",(0,i.jsx)(t.admonition,{title:"Note",type:"caution",children:(0,i.jsx)(t.p,{children:"If you are using default verifiers, your users may have set up MFA on other dApps that also use default Web3Auth verifiers. In this case, the MFA\nscreen will continue to appear if the user has enabled MFA on other dApps. This is because MFA cannot be turned off once it is enabled."})}),"\n",(0,i.jsx)(t.admonition,{title:"Minimum Growth plan required",type:"note",children:(0,i.jsxs)(t.p,{children:["This is a paid feature and the the minimum ",(0,i.jsx)(t.a,{href:"https://web3auth.io/pricing.html",children:"pricing plan"})," to use this SDK in a production environment is the\n",(0,i.jsx)(t.strong,{children:"Growth Plan"}),". You can use this feature in the development environment for free."]})}),"\n",(0,i.jsx)(t.h2,{id:"mfalevel",children:(0,i.jsx)(t.code,{children:"MFALevel"})}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-c",children:"UENUM(BlueprintType)\nenum class FMFALevel : uint8\n{\n\tDEFAULT,\n\tOPTIONAL,\n\tMANDATORY,\n\tNONE\n};\n"})}),"\n",(0,i.jsx)(t.h3,{id:"usage",children:"Usage"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Unreal Blueprint MFA Options",src:n(9976).Z+"",width:"1496",height:"1416"})}),"\n",(0,i.jsx)(t.h2,{id:"mfasettings",children:(0,i.jsx)(t.code,{children:"MFASettings"})}),"\n",(0,i.jsx)(t.admonition,{title:"Minimum SCALE plan required",type:"note",children:(0,i.jsxs)(t.p,{children:["This is a paid feature and the the minimum ",(0,i.jsx)(t.a,{href:"https://web3auth.io/pricing.html",children:"pricing plan"})," to use this SDK in a production environment is the ",(0,i.jsx)(t.strong,{children:"SCALE\nPlan"}),". You can use this feature in the development environment for free."]})}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-c",children:"USTRUCT(BlueprintType)\nstruct FMfaSettings\n{\n\tGENERATED_BODY()\n\n\tUPROPERTY(EditAnywhere, BlueprintReadWrite)\n    \tFMfaSetting deviceShareFactor;\n\n    UPROPERTY(EditAnywhere, BlueprintReadWrite)\n    \tFMfaSetting backUpShareFactor;\n\n    UPROPERTY(EditAnywhere, BlueprintReadWrite)\n        FMfaSetting socialBackupFactor;\n\n    UPROPERTY(EditAnywhere, BlueprintReadWrite)\n        FMfaSetting passwordFactor;\n\n\tFMfaSettings() {};\n\n\tvoid operator= (const FMfaSettings& other) {\n\t\tdeviceShareFactor = other.deviceShareFactor;\n\t\tbackUpShareFactor = other.backUpShareFactor;\n\t\tsocialBackupFactor = other.socialBackupFactor;\n\t\tpasswordFactor = other.passwordFactor;\n\t}\n\n\tbool operator==(const FMfaSettings& other) const\n    {\n    if (deviceShareFactor == other.deviceShareFactor &&\n\t    backUpShareFactor == other.backUpShareFactor  &&\n\t    socialBackupFactor == other.socialBackupFactor &&\n\t    passwordFactor == other.passwordFactor)\n\t\t{\n\t\t\treturn true;\n\t\t}\n\treturn false;\n    }\n\n};\n"})}),"\n",(0,i.jsx)(t.h3,{id:"usage-1",children:"Usage"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Unreal Blueprint MFA Settings Options",src:n(72731).Z+"",width:"1826",height:"1534"})})]})}function h(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},9976:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/mfa-5c96b8f8266fcce159442dec77598bd2.png"},72731:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/unreal-mfa-settings-144a60d3eb8ca0706fb0934f28b6464d.png"},11151:(e,t,n)=>{n.d(t,{Z:()=>o,a:()=>s});var i=n(67294);const r={},a=i.createContext(r);function s(e){const t=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),i.createElement(a.Provider,{value:t},e.children)}}}]);