"use strict";(self.webpackChunkweb3auth_docs=self.webpackChunkweb3auth_docs||[]).push([[98278],{87525:(e,r,s)=>{s.r(r),s.d(r,{assets:()=>u,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>d,toc:()=>c});var t=s(85893),a=s(11151),n=s(74866),l=s(85162);const i={title:"Seed Phrase Module - tKey JS SDK",sidebar_label:"Seed Phrase",displayed_sidebar:"sdk",description:"Core Kit tKey SDK - Modules - Seed Phrase Module | Documentation - Web3Auth"},o=void 0,d={id:"sdk/core-kit/tkey/modules/seed-phrase",title:"Seed Phrase Module - tKey JS SDK",description:"Core Kit tKey SDK - Modules - Seed Phrase Module | Documentation - Web3Auth",source:"@site/docs/sdk/core-kit/tkey/modules/seed-phrase.mdx",sourceDirName:"sdk/core-kit/tkey/modules",slug:"/sdk/core-kit/tkey/modules/seed-phrase",permalink:"/docs/sdk/core-kit/tkey/modules/seed-phrase",draft:!1,unlisted:!1,editUrl:"https://github.com/web3auth/web3auth-docs/edit/master/docs/sdk/core-kit/tkey/modules/seed-phrase.mdx",tags:[],version:"current",frontMatter:{title:"Seed Phrase Module - tKey JS SDK",sidebar_label:"Seed Phrase",displayed_sidebar:"sdk",description:"Core Kit tKey SDK - Modules - Seed Phrase Module | Documentation - Web3Auth"},sidebar:"sdk",previous:{title:"Share Serialization",permalink:"/docs/sdk/core-kit/tkey/modules/share-serialization"},next:{title:"Private Key",permalink:"/docs/sdk/core-kit/tkey/modules/private-keys"}},u={},c=[{value:"<code>@tkey/seed-phrase</code>",id:"tkeyseed-phrase",level:4},{value:"Installation",id:"installation",level:2},{value:"Initialization",id:"initialization",level:2},{value:"Usage",id:"usage",level:2},{value:"Set Seed Phrase",id:"set-seed-phrase",level:3},{value:"Example",id:"example",level:4},{value:"Get Seed Phrase",id:"get-seed-phrase",level:3},{value:"Return",id:"return",level:4},{value:"Example",id:"example-1",level:4},{value:"Type Reference",id:"type-reference",level:2},{value:"<code>SeedPhraseModule</code>",id:"seedphrasemodule",level:3}];function h(e){const r={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.h4,{id:"tkeyseed-phrase",children:(0,t.jsx)(r.a,{href:"https://npmjs.com/package/@tkey/seed-phrase",children:(0,t.jsx)(r.code,{children:"@tkey/seed-phrase"})})}),"\n",(0,t.jsx)(r.p,{children:"The Seed Phrase Module helps you to store and use seed phrases on the metadata."}),"\n",(0,t.jsx)(r.h2,{id:"installation",children:"Installation"}),"\n",(0,t.jsxs)(n.Z,{groupId:"npm2yarn",children:[(0,t.jsx)(l.Z,{value:"npm",children:(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-bash",children:"npm install --save @tkey/seed-phrase\n"})})}),(0,t.jsx)(l.Z,{value:"yarn",label:"Yarn",children:(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-bash",children:"yarn add @tkey/seed-phrase\n"})})}),(0,t.jsx)(l.Z,{value:"pnpm",label:"pnpm",children:(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-bash",children:"pnpm add @tkey/seed-phrase\n"})})})]}),"\n",(0,t.jsx)(r.h2,{id:"initialization",children:"Initialization"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-tsx",children:'import { SeedPhraseModule } from "@tkey/seed-phrase";\nconst seedPhraseModule = new SeedPhraseModule();\n'})}),"\n",(0,t.jsx)(r.h2,{id:"usage",children:"Usage"}),"\n",(0,t.jsxs)(r.p,{children:["With the ",(0,t.jsx)(r.code,{children:"SeedPhraseModule"}),", you have access to the multiple functions as mentioned in the type reference, however, the most important ones are:"]}),"\n",(0,t.jsx)(r.h3,{id:"set-seed-phrase",children:"Set Seed Phrase"}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.code,{children:"setSeedPhrase(seedPhraseType: string, seedPhrase?: string): Promise<void>;"})}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.code,{children:"seedPhraseType"}),": The type of seed phrase to set."]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.code,{children:"seedPhrase"}),": The seed phrase to set."]}),"\n"]}),"\n",(0,t.jsx)(r.h4,{id:"example",children:"Example"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-tsx",children:"await tKey.modules.privateKeyModule.setPrivateKey(seedPhraseType, seedPhrase);\n"})}),"\n",(0,t.jsx)(r.h3,{id:"get-seed-phrase",children:"Get Seed Phrase"}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.code,{children:"getSeedPhrases(): Promise<ISeedPhraseStore[]>;"})}),"\n",(0,t.jsx)(r.h4,{id:"return",children:"Return"}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.code,{children:"Promise<ISeedPhraseStore[]>"}),": A list of seed phrases."]}),"\n"]}),"\n",(0,t.jsx)(r.h4,{id:"example-1",children:"Example"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-tsx",children:"await tKey.modules.privateKeyModule.getSeedPhrases();\n"})}),"\n",(0,t.jsx)(r.h2,{id:"type-reference",children:"Type Reference"}),"\n",(0,t.jsx)(r.h3,{id:"seedphrasemodule",children:(0,t.jsx)(r.code,{children:"SeedPhraseModule"})}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-tsx",children:"declare class SeedPhraseModule implements IModule {\n  moduleName: string;\n  tbSDK: ITKeyApi;\n  seedPhraseFormats: ISeedPhraseFormat[];\n  constructor(formats: ISeedPhraseFormat[]);\n  setModuleReferences(tbSDK: ITKeyApi): void;\n  initialize(): Promise<void>;\n  setSeedPhrase(seedPhraseType: string, seedPhrase?: string): Promise<void>;\n  setSeedPhraseStoreItem(partialStore: ISeedPhraseStore): Promise<void>;\n  CRITICAL_changeSeedPhrase(oldSeedPhrase: string, newSeedPhrase: string): Promise<void>;\n  getSeedPhrases(): Promise<ISeedPhraseStore[]>;\n  getSeedPhrasesWithAccounts(): Promise<ISeedPhraseStoreWithKeys[]>;\n  getAccounts(): Promise<BN[]>;\n}\n"})})]})}function p(e={}){const{wrapper:r}={...(0,a.a)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},85162:(e,r,s)=>{s.d(r,{Z:()=>l});s(67294);var t=s(36905);const a={tabItem:"tabItem_Ymn6"};var n=s(85893);function l(e){let{children:r,hidden:s,className:l}=e;return(0,n.jsx)("div",{role:"tabpanel",className:(0,t.Z)(a.tabItem,l),hidden:s,children:r})}},74866:(e,r,s)=>{s.d(r,{Z:()=>P});var t=s(67294),a=s(36905),n=s(12466),l=s(16550),i=s(20469),o=s(91980),d=s(67392),u=s(50012);function c(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:r}=e;return!!r&&"object"==typeof r&&"value"in r}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:r,children:s}=e;return(0,t.useMemo)((()=>{const e=r??function(e){return c(e).map((e=>{let{props:{value:r,label:s,attributes:t,default:a}}=e;return{value:r,label:s,attributes:t,default:a}}))}(s);return function(e){const r=(0,d.l)(e,((e,r)=>e.value===r.value));if(r.length>0)throw new Error(`Docusaurus error: Duplicate values "${r.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[r,s])}function p(e){let{value:r,tabValues:s}=e;return s.some((e=>e.value===r))}function m(e){let{queryString:r=!1,groupId:s}=e;const a=(0,l.k6)(),n=function(e){let{queryString:r=!1,groupId:s}=e;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!s)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return s??null}({queryString:r,groupId:s});return[(0,o._X)(n),(0,t.useCallback)((e=>{if(!n)return;const r=new URLSearchParams(a.location.search);r.set(n,e),a.replace({...a.location,search:r.toString()})}),[n,a])]}function v(e){const{defaultValue:r,queryString:s=!1,groupId:a}=e,n=h(e),[l,o]=(0,t.useState)((()=>function(e){let{defaultValue:r,tabValues:s}=e;if(0===s.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!p({value:r,tabValues:s}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${r}" but none of its children has the corresponding value. Available values are: ${s.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return r}const t=s.find((e=>e.default))??s[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:r,tabValues:n}))),[d,c]=m({queryString:s,groupId:a}),[v,b]=function(e){let{groupId:r}=e;const s=function(e){return e?`docusaurus.tab.${e}`:null}(r),[a,n]=(0,u.Nk)(s);return[a,(0,t.useCallback)((e=>{s&&n.set(e)}),[s,n])]}({groupId:a}),f=(()=>{const e=d??v;return p({value:e,tabValues:n})?e:null})();(0,i.Z)((()=>{f&&o(f)}),[f]);return{selectedValue:l,selectValue:(0,t.useCallback)((e=>{if(!p({value:e,tabValues:n}))throw new Error(`Can't select invalid tab value=${e}`);o(e),c(e),b(e)}),[c,b,n]),tabValues:n}}var b=s(72389);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=s(85893);function y(e){let{className:r,block:s,selectedValue:t,selectValue:l,tabValues:i}=e;const o=[],{blockElementScrollPositionUntilNextRender:d}=(0,n.o5)(),u=e=>{const r=e.currentTarget,s=o.indexOf(r),a=i[s].value;a!==t&&(d(r),l(a))},c=e=>{let r=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const s=o.indexOf(e.currentTarget)+1;r=o[s]??o[0];break}case"ArrowLeft":{const s=o.indexOf(e.currentTarget)-1;r=o[s]??o[o.length-1];break}}r?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":s},r),children:i.map((e=>{let{value:r,label:s,attributes:n}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:t===r?0:-1,"aria-selected":t===r,ref:e=>o.push(e),onKeyDown:c,onClick:u,...n,className:(0,a.Z)("tabs__item",f.tabItem,n?.className,{"tabs__item--active":t===r}),children:s??r},r)}))})}function S(e){let{lazy:r,children:s,selectedValue:a}=e;const n=(Array.isArray(s)?s:[s]).filter(Boolean);if(r){const e=n.find((e=>e.props.value===a));return e?(0,t.cloneElement)(e,{className:"margin-top--md"}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:n.map(((e,r)=>(0,t.cloneElement)(e,{key:r,hidden:e.props.value!==a})))})}function g(e){const r=v(e);return(0,x.jsxs)("div",{className:(0,a.Z)("tabs-container",f.tabList),children:[(0,x.jsx)(y,{...e,...r}),(0,x.jsx)(S,{...e,...r})]})}function P(e){const r=(0,b.Z)();return(0,x.jsx)(g,{...e,children:c(e.children)},String(r))}},11151:(e,r,s)=>{s.d(r,{Z:()=>i,a:()=>l});var t=s(67294);const a={},n=t.createContext(a);function l(e){const r=t.useContext(n);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),t.createElement(n.Provider,{value:r},e.children)}}}]);