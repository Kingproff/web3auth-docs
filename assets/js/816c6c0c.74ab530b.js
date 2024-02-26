"use strict";(self.webpackChunkweb3auth_docs=self.webpackChunkweb3auth_docs||[]).push([[3597],{11900:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>h,contentTitle:()=>s,default:()=>g,frontMatter:()=>a,metadata:()=>d,toc:()=>c});var i=t(85893),r=t(11151),o=t(85162),l=t(74866);const a={title:"Using Custom Authentication in PnP Android SDK",sidebar_label:"Custom Authentication",displayed_sidebar:"sdk",description:"Web3Auth PnP Android SDK - Using Custom Authentication | Documentation - Web3Auth"},s=void 0,d={id:"sdk/pnp/android/custom-authentication",title:"Using Custom Authentication in PnP Android SDK",description:"Web3Auth PnP Android SDK - Using Custom Authentication | Documentation - Web3Auth",source:"@site/docs/sdk/pnp/android/custom-authentication.mdx",sourceDirName:"sdk/pnp/android",slug:"/sdk/pnp/android/custom-authentication",permalink:"/docs/sdk/pnp/android/custom-authentication",draft:!1,unlisted:!1,editUrl:"https://github.com/web3auth/web3auth-docs/edit/master/docs/sdk/pnp/android/custom-authentication.mdx",tags:[],version:"current",frontMatter:{title:"Using Custom Authentication in PnP Android SDK",sidebar_label:"Custom Authentication",displayed_sidebar:"sdk",description:"Web3Auth PnP Android SDK - Using Custom Authentication | Documentation - Web3Auth"},sidebar:"sdk",previous:{title:"Whitelabel",permalink:"/docs/sdk/pnp/android/whitelabel"},next:{title:"Multi Factor Authentication",permalink:"/docs/sdk/pnp/android/mfa"}},h={},c=[{value:"<code>LoginConfigItem</code>",id:"loginconfigitem",level:2},{value:"Arguments",id:"arguments",level:3},{value:"<code>typeOfLogin</code>",id:"typeoflogin",level:3},{value:"<code>ExtraLoginOptions</code> for special login methods",id:"extraloginoptions-for-special-login-methods",level:2},{value:"Using Auth0 Login",id:"using-auth0-login",level:3},{value:"Custom JWT Login",id:"custom-jwt-login",level:3},{value:"Email Passwordless",id:"email-passwordless",level:3}];function u(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:["This is a document to use a custom login mechanism with the Web3Auth Android SDK. For example, to login using your own custom JWT issuers like Auth0,\nAWS Cognito, or Firebase. You can add the your configuration to the ",(0,i.jsx)(n.code,{children:"loginConfig"})," field of the ",(0,i.jsx)(n.code,{children:"Web3AuthOptions"})," object."]}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"loginConfig"})," field is a key value map. The key should be one of the ",(0,i.jsx)(n.code,{children:"Web3AuthProvider"})," in its string form, and the value should be a\n",(0,i.jsx)(n.code,{children:"LoginConfigItem"})," struct instance."]}),"\n",(0,i.jsx)(n.p,{children:"First, configure your own verifier in the Web3Auth Dashboard to use custom authentication."}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsxs)(n.p,{children:["This is a paid feature and the the minimum ",(0,i.jsx)(n.a,{href:"https://web3auth.io/pricing.html",children:"pricing plan"})," to use this SDK in a production environment is the\n",(0,i.jsx)(n.strong,{children:"Growth Plan"}),". You can use this feature in the development environment for free."]})}),"\n",(0,i.jsx)(n.admonition,{title:"Create Custom Verifier",type:"tip",children:(0,i.jsxs)(n.p,{children:["Check out how to create a ",(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.a,{href:"/auth-provider-setup/verifiers",children:"Custom Verifier"})})," on the Web3Auth Dashboard."]})}),"\n",(0,i.jsx)(n.admonition,{title:"using dapp share",type:"info",children:(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"dApp Share is only returned for the Custom verifiers."}),"\n",(0,i.jsxs)(n.li,{children:["Also, 2FA should be enabled for the account using it. Use ",(0,i.jsx)(n.code,{children:"mfaLevel = MFALevel.MANDATORY"})," in the ",(0,i.jsx)(n.code,{children:"LoginParams"})," during login. See\n",(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.a,{href:"/sdk/pnp/android/mfa",children:"MFA"})})," for more details."]}),"\n"]})}),"\n",(0,i.jsxs)(n.p,{children:["Then, you should specify the details of your verifier in the ",(0,i.jsx)(n.code,{children:"LoginConfigItem"})," struct, the details of this struct are as follows:"]}),"\n",(0,i.jsx)(n.h2,{id:"loginconfigitem",children:(0,i.jsx)(n.code,{children:"LoginConfigItem"})}),"\n",(0,i.jsx)(n.h3,{id:"arguments",children:"Arguments"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"LoginConfigItem"})}),"\n",(0,i.jsxs)(l.Z,{defaultValue:"table",values:[{label:"Table",value:"table"},{label:"Interface",value:"interface"}],children:[(0,i.jsx)(o.Z,{value:"table",children:(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Parameter"}),(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{children:"Mandatory"}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"verifier"}),(0,i.jsx)(n.td,{children:"String"}),(0,i.jsx)(n.td,{children:"Yes"}),(0,i.jsx)(n.td,{children:"The name of the verifier that you have registered on the Web3Auth Dashboard."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"typeOfLogin"}),(0,i.jsxs)(n.td,{children:["Enum",(0,i.jsx)(n.code,{children:"<TypeOfLogin>"})]}),(0,i.jsx)(n.td,{children:"Yes"}),(0,i.jsx)(n.td,{children:"Type of login of this verifier, this value will affect the login flow that is adapted. For example, if you choose google, a google sign-in flow will be used. If you choose jwt, which you should be providing your own JWT token, no sign-in flow will be presented."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"clientId"}),(0,i.jsx)(n.td,{children:"String"}),(0,i.jsx)(n.td,{children:"Yes"}),(0,i.jsx)(n.td,{children:"The Client Id of the login provider. e.g. Google's Client ID"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"name"}),(0,i.jsx)(n.td,{children:"String?"}),(0,i.jsx)(n.td,{children:"No"}),(0,i.jsx)(n.td,{children:"Name of your verifier."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"description"}),(0,i.jsx)(n.td,{children:"String?"}),(0,i.jsx)(n.td,{children:"No"}),(0,i.jsx)(n.td,{children:"Description of this login flow."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"verifierSubIdentifier"}),(0,i.jsx)(n.td,{children:"String?"}),(0,i.jsx)(n.td,{children:"No"}),(0,i.jsx)(n.td,{children:"The name of the field in the JWT that should be used as the unique user ID of the JWT. Should be same as the one you used"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"logoHover"}),(0,i.jsx)(n.td,{children:"String?"}),(0,i.jsx)(n.td,{children:"No"}),(0,i.jsx)(n.td,{children:"Logo to be shown on mouse hover."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"logoLight"}),(0,i.jsx)(n.td,{children:"String?"}),(0,i.jsx)(n.td,{children:"No"}),(0,i.jsx)(n.td,{children:"Light logo for dark background"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"logoDark"}),(0,i.jsx)(n.td,{children:"String?"}),(0,i.jsx)(n.td,{children:"No"}),(0,i.jsx)(n.td,{children:"Dark logo for light background"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"mainOption"}),(0,i.jsx)(n.td,{children:"Boolean?"}),(0,i.jsx)(n.td,{children:"No"}),(0,i.jsx)(n.td,{children:"Show login button on the main list"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"showOnModal"}),(0,i.jsx)(n.td,{children:"Boolean?"}),(0,i.jsx)(n.td,{children:"No"}),(0,i.jsx)(n.td,{children:"Whether to show the login button on modal or not"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"showOnDesktop"}),(0,i.jsx)(n.td,{children:"Boolean?"}),(0,i.jsx)(n.td,{children:"No"}),(0,i.jsx)(n.td,{children:"Whether to show the login button on desktop"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"showOnMobile"}),(0,i.jsx)(n.td,{children:"Boolean?"}),(0,i.jsx)(n.td,{children:"No"}),(0,i.jsx)(n.td,{children:"Whether to show the login button on mobile"})]})]})]})}),(0,i.jsx)(o.Z,{value:"interface",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-kotlin",children:"data class LoginConfigItem(\n    var verifier: String,\n    private var typeOfLogin: TypeOfLogin,\n    private var name: String? = null,\n    private var description: String? = null,\n    private var clientId: String,\n    private var verifierSubIdentifier: String? = null,\n    private var logoHover: String? = null,\n    private var logoLight: String? = null,\n    private var logoDark: String? = null,\n    private var mainOption: Boolean? = false,\n    private var showOnModal: Boolean? = true,\n    private var showOnDesktop: Boolean? = true,\n    private var showOnMobile: Boolean? = true,\n)\n"})})})]}),"\n",(0,i.jsx)(n.h3,{id:"typeoflogin",children:(0,i.jsx)(n.code,{children:"typeOfLogin"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-kotlin",children:'enum class TypeOfLogin {\n    @SerializedName("google")\n    GOOGLE,\n    @SerializedName("facebook")\n    FACEBOOK,\n    @SerializedName("reddit")\n    REDDIT,\n    @SerializedName("discord")\n    DISCORD,\n    @SerializedName("twitch")\n    TWITCH,\n    @SerializedName("apple")\n    APPLE,\n    @SerializedName("line")\n    LINE,\n    @SerializedName("github")\n    GITHUB,\n    @SerializedName("kakao")\n    KAKAO,\n    @SerializedName("linkedin")\n    LINKEDIN,\n    @SerializedName("twitter")\n    TWITTER,\n    @SerializedName("weibo")\n    WEIBO,\n    @SerializedName("wechat")\n    WECHAT,\n    @SerializedName("email_passwordless")\n    EMAIL_PASSWORDLESS,\n    @SerializedName("email_password")\n    EMAIL_PASSWORD,\n    @SerializedName("jwt")\n    JWT\n}\n'})}),"\n",(0,i.jsxs)(l.Z,{defaultValue:"google",values:[{label:"Google",value:"google"},{label:"Facebook",value:"facebook"},{label:"Auth0",value:"auth0"},{label:"JWT",value:"jwt"}],children:[(0,i.jsx)(o.Z,{value:"google",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-kotlin",metastring:'title="Usage"',children:'web3Auth = Web3Auth (\n  Web3AuthOptions (\n    context = this,\n    clientId = getString (R.string.web3auth_project_id),\n    network = Network.MAINNET,\n    redirectUrl = Uri.parse ("{YOUR_APP_PACKAGE_NAME}://auth"),\n    // Optional loginConfig object\n    // highlight-start\n    loginConfig = hashMapOf("google" to LoginConfigItem(\n      verifier = "verifier-name", // get it from web3auth dashboard\n      typeOfLogin = TypeOfLogin.GOOGLE,\n      clientId = getString(R.string.google_client_id) // google\'s client id\n    ))\n    // highlight-end\n  )\n)\n'})})}),(0,i.jsx)(o.Z,{value:"facebook",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-kotlin",metastring:'title="Usage"',children:'web3Auth = Web3Auth (\n  Web3AuthOptions (\n    context = this,\n    clientId = getString (R.string.web3auth_project_id),\n    network = Network.MAINNET,\n    redirectUrl = Uri.parse ("{YOUR_APP_PACKAGE_NAME}://auth"),\n    // Optional loginConfig object\n    // highlight-start\n    loginConfig = hashMapOf("facebook" to LoginConfigItem(\n      verifier = "verifier-name", // get it from web3auth dashboard\n      typeOfLogin = TypeOfLogin.FACEBOOK,\n      clientId = getString(R.string.facebook_client_id) // facebook\'s client id\n    ))\n    // highlight-end\n  )\n)\n'})})}),(0,i.jsx)(o.Z,{value:"auth0",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-kotlin",metastring:'title="Usage"',children:'web3Auth = Web3Auth (\n  Web3AuthOptions (\n    context = this,\n    clientId = getString (R.string.web3auth_project_id),\n    network = Network.MAINNET,\n    redirectUrl = Uri.parse ("{YOUR_APP_PACKAGE_NAME}://auth"),\n    // Optional loginConfig object\n    // highlight-start\n    loginConfig = hashMapOf("jwt" to LoginConfigItem(\n      verifier = "verifier-name", // get it from web3auth dashboard\n      typeOfLogin = TypeOfLogin.JWT,\n      clientId = getString (R.string.auth0_project_id) // auth0\'s client id\n    ))\n    // highlight-end\n  )\n)\n'})})}),(0,i.jsx)(o.Z,{value:"jwt",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-kotlin",metastring:'title="Usage"',children:'web3Auth = Web3Auth (\n  Web3AuthOptions (\n    context = this,\n    clientId = getString (R.string.web3auth_project_id),\n    network = Network.MAINNET,\n    redirectUrl = Uri.parse ("{YOUR_APP_PACKAGE_NAME}://auth"),\n    // Optional loginConfig object\n    // highlight-start\n    loginConfig = hashMapOf("jwt" to LoginConfigItem(\n      verifier = "verifier-name", // get it from web3auth dashboard\n      typeOfLogin = TypeOfLogin.JWT,\n    ))\n    // highlight-end\n  )\n)\n'})})})]}),"\n",(0,i.jsxs)(n.h2,{id:"extraloginoptions-for-special-login-methods",children:[(0,i.jsx)(n.code,{children:"ExtraLoginOptions"})," for special login methods"]}),"\n",(0,i.jsxs)(n.p,{children:["Additional to the ",(0,i.jsx)(n.code,{children:"LoginConfig"})," you can pass extra options to the ",(0,i.jsx)(n.code,{children:"login"})," function to configure the login flow for cases requiring additional info for\nenabling login. The ",(0,i.jsx)(n.code,{children:"ExtraLoginOptions"})," accepts the following parameters:"]}),"\n",(0,i.jsxs)(l.Z,{defaultValue:"table",values:[{label:"Table",value:"table"},{label:"Interface",value:"interface"}],children:[(0,i.jsx)(o.Z,{value:"table",children:(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Parameter"}),(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"domain"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"string"})}),(0,i.jsxs)(n.td,{children:["Your Auth0 account domain such as ",(0,i.jsx)(n.code,{children:"example.auth0.com"})," or ",(0,i.jsx)(n.code,{children:"example.mycompany.com"})," etc."]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"client_id"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"string"})}),(0,i.jsx)(n.td,{children:"The Client ID found on your Auth0 Application settings page."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"redirect_uri"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"string"})}),(0,i.jsx)(n.td,{children:"The default URL where Auth0 will redirect your browser to with the authentication result."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"leeway"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"number"})}),(0,i.jsx)(n.td,{children:"The value in seconds used to account for clock skew in JWT expirations."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"verifierIdField"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"string"})}),(0,i.jsx)(n.td,{children:"The field in jwt token which maps to verifier id."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"isVerifierIdCaseSensitive"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"boolean"})}),(0,i.jsxs)(n.td,{children:["Whether the verifier id field is case sensitive. Defaults to ",(0,i.jsx)(n.code,{children:"true"})]})]})]})]})}),(0,i.jsx)(o.Z,{value:"interface",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-kotlin",children:"data class ExtraLoginOptions(\n  private var additionalParams : HashMap<String, String>? = null,\n  private var domain : String? = null,\n  private var client_id : String? = null,\n  private var leeway : String? = null,\n  private var verifierIdField : String? =null,\n  private var isVerifierIdCaseSensitive : Boolean? = null,\n  private var display : Display? = null,\n  private var prompt : Prompt? = null,\n  private var max_age : String? = null,\n  private var ui_locales : String? = null,\n  private var id_token : String? = null,\n  private var id_token_hint : String? = null,\n  private var login_hint : String? = null,\n  private var acr_values : String? = null,\n  private var scope : String? = null,\n  private var audience : String? = null,\n  private var connection : String? = null,\n  private var state : String? = null,\n  private var response_type : String? = null,\n  private var nonce : String? = null,\n  private var redirect_uri : String? = null\n)\n"})})})]}),"\n",(0,i.jsx)(n.h3,{id:"using-auth0-login",children:"Using Auth0 Login"}),"\n",(0,i.jsxs)(n.p,{children:["Auth0 has a special login flow, called the SPA flow. This flow requires a ",(0,i.jsx)(n.code,{children:"client_id"})," and ",(0,i.jsx)(n.code,{children:"domain"})," to be passed, and Web3Auth will get the JWT\n",(0,i.jsx)(n.code,{children:"id_token"})," from Auth0 directly. You can pass these configurations in the ",(0,i.jsx)(n.code,{children:"ExtraLoginOptions"})," object in the login function."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-tsx",children:'web3Auth = Web3Auth (\n  Web3AuthOptions (\n    context = this,\n    clientId = getString (R.string.web3auth_project_id),\n    network = Network.MAINNET,\n    redirectUrl = Uri.parse ("{YOUR_APP_PACKAGE_NAME}://auth"),\n    // Optional loginConfig object\n    // highlight-start\n    loginConfig = hashMapOf("jwt" to LoginConfigItem(\n      verifier = "verifier-name", // get it from web3auth dashboard for auth0 configuration\n      typeOfLogin = TypeOfLogin.JWT,\n      clientId = getString (R.string.auth0_client_id) // auth0\'s client id, get it from auth0 dashboard\n    ))\n    // highlight-end\n  )\n)\n\nval loginCompletableFuture: CompletableFuture<Web3AuthResponse> =\n    web3Auth.login(LoginParams(Provider.JWT,\n      // highlight-start\n      extraLoginOptions = ExtraLoginOptions(\n        domain: "https://username.us.auth0.com", // domain of your auth0 app\n        verifierIdField: "sub", // The field in jwt token which maps to verifier id.\n      )\n      // highlight-end\n    ))\n'})}),"\n",(0,i.jsx)(n.h3,{id:"custom-jwt-login",children:"Custom JWT Login"}),"\n",(0,i.jsxs)(n.p,{children:["If you're using any other provider like Firebase/ AWS Cognito or deploying your own Custom JWT server, you need to put the jwt token into the\n",(0,i.jsx)(n.code,{children:"id_token"})," field of the ",(0,i.jsx)(n.code,{children:"extraLoginOptions"}),", additionally, you need to pass over the ",(0,i.jsx)(n.code,{children:"domain"})," field as well, which is mandatory. If you don't have a\ndomain, just passover a string in that field."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-tsx",children:'web3Auth = Web3Auth (\n  Web3AuthOptions (\n    context = this,\n    clientId = getString (R.string.web3auth_project_id),\n    network = Network.MAINNET,\n    redirectUrl = Uri.parse ("{YOUR_APP_PACKAGE_NAME}://auth"),\n    // Optional loginConfig object\n    // highlight-start\n    loginConfig = hashMapOf("jwt" to LoginConfigItem(\n      verifier = "verifier-name", // get it from web3auth dashboard for auth0 configuration\n      typeOfLogin = TypeOfLogin.JWT,\n    ))\n    // highlight-end\n  )\n)\n\nval loginCompletableFuture: CompletableFuture<Web3AuthResponse> =\n    web3Auth.login(LoginParams(Provider.JWT,\n      // highlight-start\n      extraLoginOptions = ExtraLoginOptions(\n        id_token: "Your JWT id token",\n      )\n      // highlight-end\n    ))\n'})}),"\n",(0,i.jsx)(n.h3,{id:"email-passwordless",children:"Email Passwordless"}),"\n",(0,i.jsxs)(n.p,{children:["To use the ",(0,i.jsx)(n.code,{children:"EMAIL_PASSWORDLESS"})," login, you need to put the email into the ",(0,i.jsx)(n.code,{children:"login_hint"})," field of the ",(0,i.jsx)(n.code,{children:"extraLoginOptions"}),"."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-kotlin",children:'val loginCompletableFuture: CompletableFuture<Web3AuthResponse> =\n    web3Auth.login(LoginParams(Provider.EMAIL_PASSWORDLESS,\n      // highlight-next-line\n      extraLoginOptions = ExtraLoginOptions(login_hint = "hello@web3auth.io")))\n'})})]})}function g(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}},85162:(e,n,t)=>{t.d(n,{Z:()=>l});t(67294);var i=t(36905);const r={tabItem:"tabItem_Ymn6"};var o=t(85893);function l(e){let{children:n,hidden:t,className:l}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,i.Z)(r.tabItem,l),hidden:t,children:n})}},74866:(e,n,t)=>{t.d(n,{Z:()=>A});var i=t(67294),r=t(36905),o=t(12466),l=t(16550),a=t(20469),s=t(91980),d=t(67392),h=t(50012);function c(e){return i.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,i.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:n,children:t}=e;return(0,i.useMemo)((()=>{const e=n??function(e){return c(e).map((e=>{let{props:{value:n,label:t,attributes:i,default:r}}=e;return{value:n,label:t,attributes:i,default:r}}))}(t);return function(e){const n=(0,d.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function g(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function p(e){let{queryString:n=!1,groupId:t}=e;const r=(0,l.k6)(),o=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,s._X)(o),(0,i.useCallback)((e=>{if(!o)return;const n=new URLSearchParams(r.location.search);n.set(o,e),r.replace({...r.location,search:n.toString()})}),[o,r])]}function f(e){const{defaultValue:n,queryString:t=!1,groupId:r}=e,o=u(e),[l,s]=(0,i.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!g({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const i=t.find((e=>e.default))??t[0];if(!i)throw new Error("Unexpected error: 0 tabValues");return i.value}({defaultValue:n,tabValues:o}))),[d,c]=p({queryString:t,groupId:r}),[f,x]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[r,o]=(0,h.Nk)(t);return[r,(0,i.useCallback)((e=>{t&&o.set(e)}),[t,o])]}({groupId:r}),j=(()=>{const e=d??f;return g({value:e,tabValues:o})?e:null})();(0,a.Z)((()=>{j&&s(j)}),[j]);return{selectedValue:l,selectValue:(0,i.useCallback)((e=>{if(!g({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);s(e),c(e),x(e)}),[c,x,o]),tabValues:o}}var x=t(72389);const j={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var m=t(85893);function b(e){let{className:n,block:t,selectedValue:i,selectValue:l,tabValues:a}=e;const s=[],{blockElementScrollPositionUntilNextRender:d}=(0,o.o5)(),h=e=>{const n=e.currentTarget,t=s.indexOf(n),r=a[t].value;r!==i&&(d(n),l(r))},c=e=>{let n=null;switch(e.key){case"Enter":h(e);break;case"ArrowRight":{const t=s.indexOf(e.currentTarget)+1;n=s[t]??s[0];break}case"ArrowLeft":{const t=s.indexOf(e.currentTarget)-1;n=s[t]??s[s.length-1];break}}n?.focus()};return(0,m.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":t},n),children:a.map((e=>{let{value:n,label:t,attributes:o}=e;return(0,m.jsx)("li",{role:"tab",tabIndex:i===n?0:-1,"aria-selected":i===n,ref:e=>s.push(e),onKeyDown:c,onClick:h,...o,className:(0,r.Z)("tabs__item",j.tabItem,o?.className,{"tabs__item--active":i===n}),children:t??n},n)}))})}function v(e){let{lazy:n,children:t,selectedValue:r}=e;const o=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=o.find((e=>e.props.value===r));return e?(0,i.cloneElement)(e,{className:"margin-top--md"}):null}return(0,m.jsx)("div",{className:"margin-top--md",children:o.map(((e,n)=>(0,i.cloneElement)(e,{key:n,hidden:e.props.value!==r})))})}function w(e){const n=f(e);return(0,m.jsxs)("div",{className:(0,r.Z)("tabs-container",j.tabList),children:[(0,m.jsx)(b,{...e,...n}),(0,m.jsx)(v,{...e,...n})]})}function A(e){const n=(0,x.Z)();return(0,m.jsx)(w,{...e,children:c(e.children)},String(n))}},11151:(e,n,t)=>{t.d(n,{Z:()=>a,a:()=>l});var i=t(67294);const r={},o=i.createContext(r);function l(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);