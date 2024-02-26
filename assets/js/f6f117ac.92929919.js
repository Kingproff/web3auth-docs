"use strict";(self.webpackChunkweb3auth_docs=self.webpackChunkweb3auth_docs||[]).push([[74220],{24347:(e,n,t)=>{t.d(n,{ZP:()=>l});var o=t(85893),i=t(11151),r=t(85162),s=t(74866);function a(e){const n={code:"code",pre:"pre",...(0,i.a)(),...e.components};return(0,o.jsxs)(s.Z,{defaultValue:"google",values:[{label:"Google",value:"google"},{label:"Auth0",value:"auth0"},{label:"JWT",value:"jwt"},{label:"Facebook",value:"facebook"},{label:"Discord",value:"discord"},{label:"Email Passwordless",value:"email_passwordless"},{label:"SMS Passwordless",value:"sms_passwordless"},{label:"Twitter",value:"twitter"},{label:"Reddit",value:"reddit"},{label:"Twitch",value:"twitch"},{label:"Apple",value:"apple"},{label:"GitHub",value:"github"},{label:"LinkedIn",value:"linkedin"}],children:[(0,o.jsx)(r.Z,{value:"google",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",children:'import { WALLET_ADAPTERS } from "@web3auth/base";\n// inside your async function with on click handler\nconst web3authProvider = await web3auth.connectTo(WALLET_ADAPTERS.OPENLOGIN, {\n  loginProvider: "google",\n});\n'})})}),(0,o.jsx)(r.Z,{value:"auth0",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",children:'const web3authProvider = await web3auth.connectTo(WALLET_ADAPTERS.OPENLOGIN, {\n  loginProvider: "jwt",\n  extraLoginOptions: {\n    verifierIdField: "sub", // same as your JWT Verifier ID\n    domain: "https://YOUR-APPLICATION-DOMAIN", // your service provider domain, e.g. Auth0\n  },\n});\n'})})}),(0,o.jsx)(r.Z,{value:"jwt",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",children:'// Login using JWT, either obtained from Firebase, Okta, Auth0 or bring your own JWT.\nconst web3authProvider = await web3auth.connectTo(WALLET_ADAPTERS.OPENLOGIN, {\n  loginProvider: "jwt",\n  extraLoginOptions: {\n    id_token: "idToken", // in JWT Format\n    verifierIdField: "sub", // same as your JWT Verifier ID\n  },\n});\n'})})}),(0,o.jsx)(r.Z,{value:"facebook",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",children:'import { WALLET_ADAPTERS } from "@web3auth/base";\n\nconst web3authProvider = await web3auth.connectTo(WALLET_ADAPTERS.OPENLOGIN, {\n  loginProvider: "facebook",\n});\n'})})}),(0,o.jsx)(r.Z,{value:"email_passwordless",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",children:'import { WALLET_ADAPTERS } from "@web3auth/base";\n\nconst web3authProvider = await web3auth.connectTo(WALLET_ADAPTERS.OPENLOGIN, {\n  loginProvider: "email_passwordless",\n  extraLoginOptions: {\n    login_hint: "hello@web3auth.io", // email to send the OTP to\n  },\n});\n'})})}),(0,o.jsx)(r.Z,{value:"sms_passwordless",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",children:'import { WALLET_ADAPTERS } from "@web3auth/base";\n\nconst web3authProvider = await web3auth.connectTo(WALLET_ADAPTERS.OPENLOGIN, {\n  loginProvider: "sms_passwordless",\n  extraLoginOptions: {\n    login_hint: "+65-XXXXXXX",\n  },\n});\n'})})}),(0,o.jsx)(r.Z,{value:"discord",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",children:'import { WALLET_ADAPTERS } from "@web3auth/base";\n\nconst web3authProvider = await web3auth.connectTo(WALLET_ADAPTERS.OPENLOGIN, {\n  loginProvider: "discord",\n});\n'})})}),(0,o.jsx)(r.Z,{value:"twitter",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",children:'import { WALLET_ADAPTERS } from "@web3auth/base";\n\nconst web3authProvider = await web3auth.connectTo(WALLET_ADAPTERS.OPENLOGIN, {\n  loginProvider: "twitter",\n});\n'})})}),(0,o.jsx)(r.Z,{value:"reddit",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",children:'import { WALLET_ADAPTERS } from "@web3auth/base";\n\nconst web3authProvider = await web3auth.connectTo(WALLET_ADAPTERS.OPENLOGIN, {\n  loginProvider: "reddit",\n});\n'})})}),(0,o.jsx)(r.Z,{value:"twitch",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",children:'import { WALLET_ADAPTERS } from "@web3auth/base";\n\nconst web3authProvider = await web3auth.connectTo(WALLET_ADAPTERS.OPENLOGIN, {\n  loginProvider: "twitch",\n});\n'})})}),(0,o.jsx)(r.Z,{value:"apple",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",children:'import { WALLET_ADAPTERS } from "@web3auth/base";\n\nconst web3authProvider = await web3auth.connectTo(WALLET_ADAPTERS.OPENLOGIN, {\n  loginProvider: "apple",\n});\n'})})}),(0,o.jsx)(r.Z,{value:"github",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",children:'import { WALLET_ADAPTERS } from "@web3auth/base";\n\nconst web3authProvider = await web3auth.connectTo(WALLET_ADAPTERS.OPENLOGIN, {\n  loginProvider: "github",\n});\n'})})}),(0,o.jsx)(r.Z,{value:"linkedin",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",children:'import { WALLET_ADAPTERS } from "@web3auth/base";\n\nconst web3authProvider = await web3auth.connectTo(WALLET_ADAPTERS.OPENLOGIN, {\n  loginProvider: "linkedin",\n});\n'})})})]})}function l(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(a,{...e})}):a(e)}},25462:(e,n,t)=>{t.d(n,{ZP:()=>l});var o=t(85893),i=t(11151),r=t(85162),s=t(74866);function a(e){const n={code:"code",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h3,{id:"connectto",children:(0,o.jsx)(n.code,{children:"connectTo()"})}),"\n",(0,o.jsxs)(n.p,{children:["To log a user in the Web3Auth Plug and Play No Modal SDK, you need to call the ",(0,o.jsx)(n.code,{children:"connectTo()"})," function. This function helps you customize the login\nprocess according to your own needs, by taking the following parameters:"]}),"\n",(0,o.jsxs)(s.Z,{defaultValue:"table",values:[{label:"Table",value:"table"},{label:"Function Definition",value:"definition"}],children:[(0,o.jsx)(r.Z,{value:"table",children:(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:"Variable"}),(0,o.jsx)(n.th,{children:"Type"}),(0,o.jsx)(n.th,{children:"Description"}),(0,o.jsx)(n.th,{children:"Mandatory"})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"walletName"})}),(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"WALLET_ADAPTER_TYPE"})}),(0,o.jsx)(n.td,{children:"Wallet Adapter you want to use for logging in your user"}),(0,o.jsx)(n.td,{children:"Yes"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"loginParams"})}),(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"object"})}),(0,o.jsx)(n.td,{children:"Login Parameters specific to your wallet adapter"}),(0,o.jsx)(n.td,{children:"No"})]})]})]})}),(0,o.jsxs)(r.Z,{value:"definition",children:[(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",children:"  connectTo<T>(walletName: WALLET_ADAPTER_TYPE, loginParams?: T): Promise<IProvider | null>;\n"})}),(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",children:"export type WALLET_ADAPTER_TYPE = typeof WALLET_ADAPTERS[keyof typeof WALLET_ADAPTERS];\nexport declare const WALLET_ADAPTERS: {\n  OPENLOGIN: string;\n  WALLET_CONNECT_V2: string;\n  TORUS_SOLANA: string;\n  PHANTOM: string;\n  SOLFLARE: string;\n  SLOPE: string;\n  TORUS_EVM: string;\n  METAMASK: string;\n  COINBASE: string;\n};\n"})})]})]})]})}function l(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(a,{...e})}):a(e)}},55978:(e,n,t)=>{t.d(n,{ZP:()=>s});var o=t(85893),i=t(11151);function r(e){const n={code:"code",pre:"pre",...(0,i.a)(),...e.components};return(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-javascript",children:'import { OpenloginAdapter } from "@web3auth/openlogin-adapter";\n\nconst openloginAdapter = new OpenloginAdapter({\n  adapterSettings: {\n    clientId, //Optional - Provide only if you haven\'t provided it in the Web3Auth Instantiation Code\n    network: "sapphire_mainnet", // Optional - Provide only if you haven\'t provided it in the Web3Auth Instantiation Code\n    uxMode: "popup",\n    loginConfig: {\n      jwt: {\n        verifier: "YOUR-VERIFIER-NAME-ON-WEB3AUTH-DASHBOARD",\n        typeOfLogin: "jwt",\n        clientId: "YOUR-CLIENTID-FROM-LOGIN-PROVIDER",\n      },\n    },\n  },\n  privateKeyProvider,\n});\n\nweb3auth.configureAdapter(openloginAdapter);\n'})})}function s(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(r,{...e})}):r(e)}},65943:(e,n,t)=>{t.d(n,{ZP:()=>l});var o=t(85893),i=t(11151),r=t(85162),s=t(74866);function a(e){const n={code:"code",h5:"h5",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,o.jsxs)(s.Z,{defaultValue:"table",values:[{label:"Table",value:"table"},{label:"Interface",value:"interface"}],children:[(0,o.jsxs)(r.Z,{value:"table",children:[(0,o.jsx)(n.h5,{id:"extraloginoptions",children:(0,o.jsx)(n.code,{children:"ExtraLoginOptions"})}),(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:"Variable"}),(0,o.jsx)(n.th,{children:"Type"}),(0,o.jsx)(n.th,{children:"Description"}),(0,o.jsx)(n.th,{children:"Mandatory"})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"domain?"})}),(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"string"})}),(0,o.jsxs)(n.td,{children:["The target domain for your proxy login provider like Auth0, such as ",(0,o.jsx)(n.code,{children:"'example.auth0.com'"}),", ",(0,o.jsx)(n.code,{children:"'example.eu.auth0.com'"})," or , ",(0,o.jsx)(n.code,{children:"'example.mycompany.com'"})]}),(0,o.jsx)(n.td,{children:"Yes"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"client_id?"})}),(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"string"})}),(0,o.jsx)(n.td,{children:"The Client ID of your login provider, found on your Application settings page"}),(0,o.jsx)(n.td,{children:"No"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"redirect_uri?"})}),(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"string"})}),(0,o.jsx)(n.td,{children:'The default URL where the login provider will redirect your browser to with the authentication result. It must be whitelisted in the "Allowed Callback URLs" field in your Application\'s settings. If not provided here, it should be provided in the other methods that provide authentication.'}),(0,o.jsx)(n.td,{children:"No"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"leeway?"})}),(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"number"})}),(0,o.jsxs)(n.td,{children:["The value in seconds used to account for clock skew in JWT expirations. Typically, this value is no more than a minute or two at maximum. ",(0,o.jsx)(n.strong,{children:"Default Value:"})," ",(0,o.jsx)(n.code,{children:"60"})]}),(0,o.jsx)(n.td,{children:"No"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"verifierIdField?"})}),(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"string"})}),(0,o.jsx)(n.td,{children:"The field in jwt token which maps to verifier id"}),(0,o.jsx)(n.td,{children:"No"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"isVerifierIdCaseSensitive?"})}),(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"boolean"})}),(0,o.jsxs)(n.td,{children:["Whether the verifier id field is case sensitive. ",(0,o.jsx)(n.strong,{children:"Default Value:"})," ",(0,o.jsx)(n.code,{children:"true"})]}),(0,o.jsx)(n.td,{children:"No"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"max_age?"})}),(0,o.jsxs)(n.td,{children:[(0,o.jsx)(n.code,{children:"string"})," or ",(0,o.jsx)(n.code,{children:"number"})]}),(0,o.jsx)(n.td,{children:"Maximum allowable elapsed time (in seconds) since authentication. If the last time the user authenticated is greater than this value, the user must be re-authenticated."}),(0,o.jsx)(n.td,{children:"No"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"id_token?"})}),(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"string"})}),(0,o.jsxs)(n.td,{children:["Pass your own generated or obtained ",(0,o.jsx)(n.code,{children:"id_token"})," to login using JWT."]}),(0,o.jsx)(n.td,{children:"No"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"login_hint?"})}),(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"string"})}),(0,o.jsx)(n.td,{children:"The user's email address or other identifier. When your app knows which user is trying to authenticate, you can provide this parameter to pre-fill the email box or select the right session for sign-in."}),(0,o.jsx)(n.td,{children:"No"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"scope?"})}),(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"string"})}),(0,o.jsx)(n.td,{children:"The default scope to be used on authentication requests. The defaultScope defined in the Auth0Client is included along with this scope."}),(0,o.jsx)(n.td,{children:"No"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"audience?"})}),(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"string"})}),(0,o.jsx)(n.td,{children:"The default audience to be used for requesting API access."}),(0,o.jsx)(n.td,{children:"No"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"connection?"})}),(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"string"})}),(0,o.jsx)(n.td,{children:"The name of the connection configured for your application. If null, it will redirect to the Auth0 Login Page and show the Login Widget."}),(0,o.jsx)(n.td,{children:"No"})]})]})]})]}),(0,o.jsx)(r.Z,{value:"interface",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",children:"export interface ExtraLoginOptions extends BaseLoginOptions {\n  /**\n   * Your Auth0 account domain such as `'example.auth0.com'`,\n   * `'example.eu.auth0.com'` or , `'example.mycompany.com'`\n   * (when using [custom domains](https://auth0.com/docs/custom-domains))\n   */\n  domain?: string;\n  /**\n   * The Client ID found on your Application settings page\n   */\n  client_id?: string;\n  /**\n   * The default URL where Auth0 will redirect your browser to with\n   * the authentication result. It must be whitelisted in\n   * the \"Allowed Callback URLs\" field in your Auth0 Application's\n   * settings. If not provided here, it should be provided in the other\n   * methods that provide authentication.\n   */\n  redirect_uri?: string;\n  /**\n   * The value in seconds used to account for clock skew in JWT expirations.\n   * Typically, this value is no more than a minute or two at maximum.\n   * Defaults to 60s.\n   */\n  leeway?: number;\n  /**\n   * The field in jwt token which maps to verifier id\n   */\n  verifierIdField?: string;\n  /**\n   * Whether the verifier id field is case sensitive\n   * @defaultValue true\n   */\n  isVerifierIdCaseSensitive?: boolean;\n}\nexport interface BaseLoginOptions {\n  /**\n   * If you need to send custom parameters to the Authorization Server,\n   * make sure to use the original parameter name.\n   */\n  [key: string]: unknown;\n  /**\n   * - `'page'`: displays the UI with a full page view\n   * - `'popup'`: displays the UI with a popup window\n   * - `'touch'`: displays the UI in a way that leverages a touch interface\n   * - `'wap'`: displays the UI with a \"feature phone\" type interface\n   */\n  display?: \"page\" | \"popup\" | \"touch\" | \"wap\" | string;\n  /**\n   * - `'none'`: do not prompt user for login or consent on re-authentication\n   * - `'login'`: prompt user for re-authentication\n   * - `'consent'`: prompt user for consent before processing request\n   * - `'select_account'`: prompt user to select an account\n   */\n  prompt?: \"none\" | \"login\" | \"consent\" | \"select_account\" | string;\n  /**\n   * Maximum allowable elapsed time (in seconds) since authentication.\n   * If the last time the user authenticated is greater than this value,\n   * the user must be re-authenticated.\n   */\n  max_age?: string | number;\n  /**\n   * The space-separated list of language tags, ordered by preference.\n   * For example: `'fr-CA fr en'`.\n   */\n  ui_locales?: string;\n  /**\n   * Previously issued ID Token.\n   */\n  id_token_hint?: string;\n  /**\n   * The user's email address or other identifier. When your app knows\n   * which user is trying to authenticate, you can provide this parameter\n   * to pre-fill the email box or select the right session for sign-in.\n   *\n   * This currently only affects the classic Lock experience.\n   */\n  login_hint?: string;\n  id_token?: string;\n  acr_values?: string;\n  /**\n   * The default scope to be used on authentication requests.\n   * The defaultScope defined in the Auth0Client is included\n   * along with this scope\n   */\n  scope?: string;\n  /**\n   * The default audience to be used for requesting API access.\n   */\n  audience?: string;\n  /**\n   * The name of the connection configured for your application.\n   * If null, it will redirect to the Auth0 Login Page and show\n   * the Login Widget.\n   */\n  connection?: string;\n}\n"})})})]})}function l(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(a,{...e})}):a(e)}},78709:(e,n,t)=>{t.d(n,{ZP:()=>l});var o=t(85893),i=t(11151),r=t(85162),s=t(74866);function a(e){const n={a:"a",code:"code",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,o.jsxs)(s.Z,{defaultValue:"table",values:[{label:"Table",value:"table"},{label:"Type Declarations",value:"type"}],children:[(0,o.jsxs)(r.Z,{value:"table",children:[(0,o.jsx)(n.p,{children:(0,o.jsx)(n.code,{children:'loginConfig: { "identifier of social login": { params } }'})}),(0,o.jsx)(n.p,{children:(0,o.jsx)(n.code,{children:"params"})}),(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:"Parameter"}),(0,o.jsx)(n.th,{children:"Type"}),(0,o.jsx)(n.th,{children:"Description"}),(0,o.jsx)(n.th,{children:"Mandatory"})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"verifier"})}),(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"string"})}),(0,o.jsxs)(n.td,{children:["Identifier for the Verifier you created on the ",(0,o.jsx)(n.a,{href:"https://dashboard.web3auth.io",children:"Web3Auth Developer Dashboard"})]}),(0,o.jsx)(n.td,{children:"Yes"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"typeOfLogin"})}),(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"TypeOfLogin"})}),(0,o.jsxs)(n.td,{children:["Choose your type of social login. Select from the list: ",(0,o.jsx)(n.code,{children:"google"}),", ",(0,o.jsx)(n.code,{children:"facebook"}),", ",(0,o.jsx)(n.code,{children:"twitter"}),", ",(0,o.jsx)(n.code,{children:"reddit"}),", ",(0,o.jsx)(n.code,{children:"discord"}),", ",(0,o.jsx)(n.code,{children:"twitch"}),", ",(0,o.jsx)(n.code,{children:"apple"}),", ",(0,o.jsx)(n.code,{children:"line"}),", ",(0,o.jsx)(n.code,{children:"github"}),", ",(0,o.jsx)(n.code,{children:"kakao"}),", ",(0,o.jsx)(n.code,{children:"linkedin"}),", ",(0,o.jsx)(n.code,{children:"weibo"}),", ",(0,o.jsx)(n.code,{children:"wechat"})]}),(0,o.jsx)(n.td,{children:"Yes"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"name"})}),(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"string"})}),(0,o.jsx)(n.td,{children:"Display Name. If not provided, we use the default for openlogin app"}),(0,o.jsx)(n.td,{children:"No"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"description?"})}),(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"string"})}),(0,o.jsx)(n.td,{children:"Description for button. If provided, it renders as a full-length button. else, icon button"}),(0,o.jsx)(n.td,{children:"No"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"clientId?"})}),(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"string"})}),(0,o.jsx)(n.td,{children:"Custom client_id for the corresponding social provider. This is needed for connecting to your account. If not provided, we use the default for openlogin app"}),(0,o.jsx)(n.td,{children:"No"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"verifierSubIdentifier?"})}),(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"string"})}),(0,o.jsx)(n.td,{children:"Sub identifier - used in case of creation of aggregate verifiers"}),(0,o.jsx)(n.td,{children:"No"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"logoHover?"})}),(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"string"})}),(0,o.jsx)(n.td,{children:"Logo to be shown on mouse hover. If not provided, we use the default for openlogin app"}),(0,o.jsx)(n.td,{children:"No"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"logoLight?"})}),(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"string"})}),(0,o.jsx)(n.td,{children:"Logo to be shown on a light background (light mode). If not provided, we use the default for openlogin app"}),(0,o.jsx)(n.td,{children:"No"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"logoDark?"})}),(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"string"})}),(0,o.jsx)(n.td,{children:"Logo to be shown on a dark background (dark mode). If not provided, we use the default for openlogin app"}),(0,o.jsx)(n.td,{children:"No"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"mainOption?"})}),(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"boolean"})}),(0,o.jsx)(n.td,{children:"Show login button on the main list"}),(0,o.jsx)(n.td,{children:"No"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"showOnModal?"})}),(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"boolean"})}),(0,o.jsx)(n.td,{children:"Whether to show the login button on modal or not"}),(0,o.jsx)(n.td,{})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"showOnDesktop"})}),(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"boolean"})}),(0,o.jsx)(n.td,{children:"Whether to show the login button on desktop"}),(0,o.jsx)(n.td,{children:"No"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"showOnMobile?"})}),(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"boolean"})}),(0,o.jsx)(n.td,{children:"Whether to show the login button on mobile"}),(0,o.jsx)(n.td,{children:"No"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"showOnSocialBackupFactor?"})}),(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"boolean"})}),(0,o.jsx)(n.td,{children:"If we are using social logins as a backup factor, then this option will be used to show the type of social login on the social backup login screen."}),(0,o.jsx)(n.td,{children:"No"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"jwtParameters?"})}),(0,o.jsx)(n.td,{children:(0,o.jsx)(n.code,{children:"JwtParameters"})}),(0,o.jsx)(n.td,{children:"Custom jwt parameters to configure the login. Useful for Auth0 configuration"}),(0,o.jsx)(n.td,{children:"No"})]})]})]})]}),(0,o.jsx)(r.Z,{value:"type",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-tsx",children:'export type LoginConfig = Record<\n  string,\n  {\n    verifier: string;\n    /**\n     * The type of login. Refer to enum `LOGIN_TYPE`\n     */\n    typeOfLogin: TypeOfLogin;\n    /**\n     * Display Name. If not provided, we use the default for openlogin app\n     */\n    name?: string;\n    /**\n     * Description for button. If provided, it renders as a full length button. else, icon button\n     */\n    description?: string;\n    /**\n     * Custom client_id. If not provided, we use the default for openlogin app\n     */\n    clientId?: string;\n    verifierSubIdentifier?: string;\n    /**\n     * Logo to be shown on mouse hover. If not provided, we use the default for openlogin app\n     */\n    logoHover?: string;\n    /**\n     * Logo to be shown on dark background (dark theme). If not provided, we use the default for openlogin app\n     */\n    logoLight?: string;\n    /**\n     * Logo to be shown on light background (light theme). If not provided, we use the default for openlogin app\n     */\n    logoDark?: string;\n    /**\n     * Show login button on the main list\n     */\n    mainOption?: boolean;\n    /**\n     * Whether to show the login button on modal or not\n     */\n    showOnModal?: boolean;\n    /**\n     * Whether to show the login button on desktop\n     */\n    showOnDesktop?: boolean;\n    /**\n     * Whether to show the login button on mobile\n     */\n    showOnMobile?: boolean;\n    /**\n     * If we are using social logins as a backup factor,\n     * then this option will be used to show the type of social login\n     * on the social backup login screen.\n     */\n    showOnSocialBackupFactor?: boolean;\n    /**\n     * Custom jwt parameters to configure the login. Useful for Auth0 configuration\n     */\n    jwtParameters?: JwtParameters;\n  }\n>;\n\nexport type TypeOfLogin =\n  | "google"\n  | "facebook"\n  | "reddit"\n  | "discord"\n  | "twitch"\n  | "apple"\n  | "github"\n  | "linkedin"\n  | "twitter"\n  | "weibo"\n  | "line"\n  | "email_password"\n  | "passwordless"\n  | "jwt"\n  | "webauthn";\n'})})})]})}function l(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(a,{...e})}):a(e)}},64414:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>g,contentTitle:()=>p,default:()=>b,frontMatter:()=>u,metadata:()=>x,toc:()=>j});var o=t(85893),i=t(11151),r=t(74866),s=t(85162),a=t(25462),l=t(24347),d=t(55978),c=t(65943),h=t(78709);const u={title:"Custom Authentication with PnP Web No Modal SDK",sidebar_label:"Custom Authentication",displayed_sidebar:"sdk",description:"Web3Auth PnP Web No Modal SDK - Custom Authentication | Documentation - Web3Auth"},p=void 0,x={id:"sdk/pnp/web/no-modal/custom-authentication",title:"Custom Authentication with PnP Web No Modal SDK",description:"Web3Auth PnP Web No Modal SDK - Custom Authentication | Documentation - Web3Auth",source:"@site/docs/sdk/pnp/web/no-modal/custom-authentication.mdx",sourceDirName:"sdk/pnp/web/no-modal",slug:"/sdk/pnp/web/no-modal/custom-authentication",permalink:"/docs/sdk/pnp/web/no-modal/custom-authentication",draft:!1,unlisted:!1,editUrl:"https://github.com/web3auth/web3auth-docs/edit/master/docs/sdk/pnp/web/no-modal/custom-authentication.mdx",tags:[],version:"current",frontMatter:{title:"Custom Authentication with PnP Web No Modal SDK",sidebar_label:"Custom Authentication",displayed_sidebar:"sdk",description:"Web3Auth PnP Web No Modal SDK - Custom Authentication | Documentation - Web3Auth"},sidebar:"sdk",previous:{title:"Whitelabel",permalink:"/docs/sdk/pnp/web/no-modal/whitelabel"},next:{title:"Multi Factor Authentication",permalink:"/docs/sdk/pnp/web/no-modal/mfa"}},g={},j=[{value:"Installing Openlogin Adapter",id:"installing-openlogin-adapter",level:2},{value:"Configuring Openlogin Adapter",id:"configuring-openlogin-adapter",level:2},{value:"<code>loginConfig</code>",id:"loginconfig",level:4},{value:"Logging in through your Custom JWT Token",id:"logging-in-through-your-custom-jwt-token",level:2},{value:"Example",id:"example",level:2}];function m(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h4:"h4",hr:"hr",p:"p",pre:"pre",strong:"strong",...(0,i.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.p,{children:"Custom Authentication is a way to authenticate users with your custom authentication service. For example, while authenticating with Google, you can\nuse your own Google Client ID and Dashboard to authenticate users directly or use aggregate services like Auth0, Firebase, AWS Cognito etc.\nAdditionally, you can make your own JWT token authentication system and pass over the ID Token to Web3Auth to generate a private key for them."}),"\n",(0,o.jsxs)(n.p,{children:["For enabling this, you need ",(0,o.jsx)(n.a,{href:"/auth-provider-setup/verifiers",children:"Create a Verifier"})," from the ",(0,o.jsx)(n.strong,{children:"Custom Auth"})," section of the"]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"https://dashboard.web3auth.io",children:"Web3Auth Developer Dashboard"})," with your desired configuration."]}),"\n",(0,o.jsx)(n.admonition,{type:"note",children:(0,o.jsxs)(n.p,{children:["This is a paid feature and the the minimum ",(0,o.jsx)(n.a,{href:"https://web3auth.io/pricing.html",children:"pricing plan"})," to use this SDK in a production environment is the\n",(0,o.jsx)(n.strong,{children:"Growth Plan"}),". You can use this feature in the development environment for free."]})}),"\n",(0,o.jsx)(n.admonition,{type:"tip",children:(0,o.jsxs)(n.p,{children:["If you want to know more about setting up a verifier and how to use it, please refer to the\n",(0,o.jsx)(n.a,{href:"/pnp/features/custom-authentication",children:"Custom Authentication Documentation"}),"."]})}),"\n",(0,o.jsx)(n.h2,{id:"installing-openlogin-adapter",children:"Installing Openlogin Adapter"}),"\n",(0,o.jsx)(n.hr,{}),"\n",(0,o.jsxs)(n.p,{children:["Social logins in Web3Auth are enabled by the ",(0,o.jsx)(n.a,{href:"/sdk/pnp/web/adapters/openlogin",children:(0,o.jsx)(n.code,{children:"openlogin-adapter"})}),". Natively, it is already present and preconfigured\nwithin the Plug and Play SDK, but for custom configurations, you need to install the adapter package."]}),"\n",(0,o.jsxs)(r.Z,{groupId:"npm2yarn",children:[(0,o.jsx)(s.Z,{value:"npm",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"npm install --save @web3auth/openlogin-adapter\n"})})}),(0,o.jsx)(s.Z,{value:"yarn",label:"Yarn",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"yarn add @web3auth/openlogin-adapter\n"})})}),(0,o.jsx)(s.Z,{value:"pnpm",label:"pnpm",children:(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:"pnpm add @web3auth/openlogin-adapter\n"})})})]}),"\n",(0,o.jsx)(n.h2,{id:"configuring-openlogin-adapter",children:"Configuring Openlogin Adapter"}),"\n",(0,o.jsxs)(n.p,{children:["While instantiating the Openlogin Adapter, you can pass some configuration objects to the constructor. One of these configurations is the\n",(0,o.jsx)(n.code,{children:"adapterSettings"})," configuration which enables you to make changes in the adapter, enabling you to do things like Whitelabeling and Custom\nAuthentication among other things."]}),"\n",(0,o.jsx)(n.admonition,{type:"tip",children:(0,o.jsxs)(n.p,{children:["Checkout the ",(0,o.jsx)(n.a,{href:"/sdk/pnp/web/adapters/openlogin",children:(0,o.jsx)(n.code,{children:"openlogin-adapter"})})," SDK Reference for more details on different configurations you can pass for\ncustomizations."]})}),"\n",(0,o.jsx)(n.h4,{id:"loginconfig",children:(0,o.jsx)(n.code,{children:"loginConfig"})}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.code,{children:"loginConfig"})," parameter of ",(0,o.jsx)(n.code,{children:"adapterSettings"})," in ",(0,o.jsx)(n.code,{children:"openlogin-adapter"})," contains the following properties:"]}),"\n",(0,o.jsx)(h.ZP,{}),"\n",(0,o.jsx)(n.h2,{id:"logging-in-through-your-custom-jwt-token",children:"Logging in through your Custom JWT Token"}),"\n",(0,o.jsxs)(n.p,{children:["While using the Web3Auth Plug and Play No Modal SDK, you have the option to use the ",(0,o.jsx)(n.code,{children:"connectTo"})," function, which enables you to customize the login\nprocess according to the parameters you have for your custom authentication service."]}),"\n",(0,o.jsx)(a.ZP,{}),"\n",(0,o.jsx)(n.admonition,{type:"tip",children:(0,o.jsxs)(n.p,{children:["Know more about the ",(0,o.jsx)(n.code,{children:"connectTo"})," function in the ",(0,o.jsx)(n.a,{href:"/sdk/pnp/web/no-modal/usage#logging-in-the-user",children:(0,o.jsx)(n.code,{children:"Usage SDK Reference"})})]})}),"\n",(0,o.jsx)(n.admonition,{type:"important",children:(0,o.jsxs)(n.p,{children:["It is mandatory to pass the ",(0,o.jsx)(n.code,{children:"idToken"})," parameter in the ",(0,o.jsx)(n.code,{children:"extraLoginOptions"})," object when logging in through your custom JWT token."]})}),"\n",(0,o.jsxs)(n.p,{children:["Further, to enable Custom Authentication, the ",(0,o.jsx)(n.code,{children:"loginParams"})," parameter takes in another object called ",(0,o.jsx)(n.code,{children:"extraLoginOptions"})," which contains the following\nproperties:"]}),"\n",(0,o.jsx)(c.ZP,{}),"\n",(0,o.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,o.jsxs)(n.p,{children:["Since we're using the ",(0,o.jsx)(n.code,{children:"@web3auth/no-modal"}),", ie. the Plug and Play No Modal SDK, the ",(0,o.jsx)(n.code,{children:"loginConfig"})," can include custom JWT-based authentication as well.\nThis way, we can use any of our preferred login providers and further setup their configs while logging the user in and passing over the\n",(0,o.jsx)(n.code,{children:"extraLoginOptions"})," in the ",(0,o.jsx)(n.code,{children:"connectTo"})," function."]}),"\n",(0,o.jsx)(d.ZP,{}),"\n",(0,o.jsx)(l.ZP,{})]})}function b(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(m,{...e})}):m(e)}},85162:(e,n,t)=>{t.d(n,{Z:()=>s});t(67294);var o=t(36905);const i={tabItem:"tabItem_Ymn6"};var r=t(85893);function s(e){let{children:n,hidden:t,className:s}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,o.Z)(i.tabItem,s),hidden:t,children:n})}},74866:(e,n,t)=>{t.d(n,{Z:()=>A});var o=t(67294),i=t(36905),r=t(12466),s=t(16550),a=t(20469),l=t(91980),d=t(67392),c=t(50012);function h(e){return o.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,o.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:n,children:t}=e;return(0,o.useMemo)((()=>{const e=n??function(e){return h(e).map((e=>{let{props:{value:n,label:t,attributes:o,default:i}}=e;return{value:n,label:t,attributes:o,default:i}}))}(t);return function(e){const n=(0,d.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function x(e){let{queryString:n=!1,groupId:t}=e;const i=(0,s.k6)(),r=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,l._X)(r),(0,o.useCallback)((e=>{if(!r)return;const n=new URLSearchParams(i.location.search);n.set(r,e),i.replace({...i.location,search:n.toString()})}),[r,i])]}function g(e){const{defaultValue:n,queryString:t=!1,groupId:i}=e,r=u(e),[s,l]=(0,o.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const o=t.find((e=>e.default))??t[0];if(!o)throw new Error("Unexpected error: 0 tabValues");return o.value}({defaultValue:n,tabValues:r}))),[d,h]=x({queryString:t,groupId:i}),[g,j]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[i,r]=(0,c.Nk)(t);return[i,(0,o.useCallback)((e=>{t&&r.set(e)}),[t,r])]}({groupId:i}),m=(()=>{const e=d??g;return p({value:e,tabValues:r})?e:null})();(0,a.Z)((()=>{m&&l(m)}),[m]);return{selectedValue:s,selectValue:(0,o.useCallback)((e=>{if(!p({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);l(e),h(e),j(e)}),[h,j,r]),tabValues:r}}var j=t(72389);const m={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var b=t(85893);function f(e){let{className:n,block:t,selectedValue:o,selectValue:s,tabValues:a}=e;const l=[],{blockElementScrollPositionUntilNextRender:d}=(0,r.o5)(),c=e=>{const n=e.currentTarget,t=l.indexOf(n),i=a[t].value;i!==o&&(d(n),s(i))},h=e=>{let n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const t=l.indexOf(e.currentTarget)+1;n=l[t]??l[0];break}case"ArrowLeft":{const t=l.indexOf(e.currentTarget)-1;n=l[t]??l[l.length-1];break}}n?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":t},n),children:a.map((e=>{let{value:n,label:t,attributes:r}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:o===n?0:-1,"aria-selected":o===n,ref:e=>l.push(e),onKeyDown:h,onClick:c,...r,className:(0,i.Z)("tabs__item",m.tabItem,r?.className,{"tabs__item--active":o===n}),children:t??n},n)}))})}function w(e){let{lazy:n,children:t,selectedValue:i}=e;const r=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=r.find((e=>e.props.value===i));return e?(0,o.cloneElement)(e,{className:"margin-top--md"}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:r.map(((e,n)=>(0,o.cloneElement)(e,{key:n,hidden:e.props.value!==i})))})}function v(e){const n=g(e);return(0,b.jsxs)("div",{className:(0,i.Z)("tabs-container",m.tabList),children:[(0,b.jsx)(f,{...e,...n}),(0,b.jsx)(w,{...e,...n})]})}function A(e){const n=(0,j.Z)();return(0,b.jsx)(v,{...e,children:h(e.children)},String(n))}},11151:(e,n,t)=>{t.d(n,{Z:()=>a,a:()=>s});var o=t(67294);const i={},r=o.createContext(i);function s(e){const n=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),o.createElement(r.Provider,{value:n},e.children)}}}]);