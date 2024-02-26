"use strict";(self.webpackChunkweb3auth_docs=self.webpackChunkweb3auth_docs||[]).push([[15680],{74129:(e,t,E)=>{var n,r=E(67294),L=(n=r)&&"object"==typeof n&&"default"in n?n.default:n,S=function(){return S=Object.assign||function(e){for(var t,E=1,n=arguments.length;E<n;E++)for(var r in t=arguments[E])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},S.apply(this,arguments)},u="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==E.g?E.g:"undefined"!=typeof self?self:{};function O(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function _(e,t){return e(t={exports:{}},t.exports),t.exports}var l=_((function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.BLOCKS=void 0,function(e){e.DOCUMENT="document",e.PARAGRAPH="paragraph",e.HEADING_1="heading-1",e.HEADING_2="heading-2",e.HEADING_3="heading-3",e.HEADING_4="heading-4",e.HEADING_5="heading-5",e.HEADING_6="heading-6",e.OL_LIST="ordered-list",e.UL_LIST="unordered-list",e.LIST_ITEM="list-item",e.HR="hr",e.QUOTE="blockquote",e.EMBEDDED_ENTRY="embedded-entry-block",e.EMBEDDED_ASSET="embedded-asset-block",e.EMBEDDED_RESOURCE="embedded-resource-block",e.TABLE="table",e.TABLE_ROW="table-row",e.TABLE_CELL="table-cell",e.TABLE_HEADER_CELL="table-header-cell"}(t.BLOCKS||(t.BLOCKS={}))}));O(l);l.BLOCKS;var o=_((function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.INLINES=void 0,function(e){e.HYPERLINK="hyperlink",e.ENTRY_HYPERLINK="entry-hyperlink",e.ASSET_HYPERLINK="asset-hyperlink",e.RESOURCE_HYPERLINK="resource-hyperlink",e.EMBEDDED_ENTRY="embedded-entry-inline",e.EMBEDDED_RESOURCE="embedded-resource-inline"}(t.INLINES||(t.INLINES={}))}));O(o);o.INLINES;var i=_((function(e,t){var E;Object.defineProperty(t,"__esModule",{value:!0}),function(e){e.BOLD="bold",e.ITALIC="italic",e.UNDERLINE="underline",e.CODE="code",e.SUPERSCRIPT="superscript",e.SUBSCRIPT="subscript"}(E||(E={})),t.default=E}));O(i);var B=_((function(e,t){var E,n=u&&u.__spreadArray||function(e,t,E){if(E||2===arguments.length)for(var n,r=0,L=t.length;r<L;r++)!n&&r in t||(n||(n=Array.prototype.slice.call(t,0,r)),n[r]=t[r]);return e.concat(n||Array.prototype.slice.call(t))},r=u&&u.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.V1_MARKS=t.V1_NODE_TYPES=t.TEXT_CONTAINERS=t.HEADINGS=t.CONTAINERS=t.VOID_BLOCKS=t.TABLE_BLOCKS=t.LIST_ITEM_BLOCKS=t.TOP_LEVEL_BLOCKS=void 0;var L=r(i);t.TOP_LEVEL_BLOCKS=[l.BLOCKS.PARAGRAPH,l.BLOCKS.HEADING_1,l.BLOCKS.HEADING_2,l.BLOCKS.HEADING_3,l.BLOCKS.HEADING_4,l.BLOCKS.HEADING_5,l.BLOCKS.HEADING_6,l.BLOCKS.OL_LIST,l.BLOCKS.UL_LIST,l.BLOCKS.HR,l.BLOCKS.QUOTE,l.BLOCKS.EMBEDDED_ENTRY,l.BLOCKS.EMBEDDED_ASSET,l.BLOCKS.EMBEDDED_RESOURCE,l.BLOCKS.TABLE],t.LIST_ITEM_BLOCKS=[l.BLOCKS.PARAGRAPH,l.BLOCKS.HEADING_1,l.BLOCKS.HEADING_2,l.BLOCKS.HEADING_3,l.BLOCKS.HEADING_4,l.BLOCKS.HEADING_5,l.BLOCKS.HEADING_6,l.BLOCKS.OL_LIST,l.BLOCKS.UL_LIST,l.BLOCKS.HR,l.BLOCKS.QUOTE,l.BLOCKS.EMBEDDED_ENTRY,l.BLOCKS.EMBEDDED_ASSET,l.BLOCKS.EMBEDDED_RESOURCE],t.TABLE_BLOCKS=[l.BLOCKS.TABLE,l.BLOCKS.TABLE_ROW,l.BLOCKS.TABLE_CELL,l.BLOCKS.TABLE_HEADER_CELL],t.VOID_BLOCKS=[l.BLOCKS.HR,l.BLOCKS.EMBEDDED_ENTRY,l.BLOCKS.EMBEDDED_ASSET,l.BLOCKS.EMBEDDED_RESOURCE],t.CONTAINERS=((E={})[l.BLOCKS.OL_LIST]=[l.BLOCKS.LIST_ITEM],E[l.BLOCKS.UL_LIST]=[l.BLOCKS.LIST_ITEM],E[l.BLOCKS.LIST_ITEM]=t.LIST_ITEM_BLOCKS,E[l.BLOCKS.QUOTE]=[l.BLOCKS.PARAGRAPH],E[l.BLOCKS.TABLE]=[l.BLOCKS.TABLE_ROW],E[l.BLOCKS.TABLE_ROW]=[l.BLOCKS.TABLE_CELL,l.BLOCKS.TABLE_HEADER_CELL],E[l.BLOCKS.TABLE_CELL]=[l.BLOCKS.PARAGRAPH],E[l.BLOCKS.TABLE_HEADER_CELL]=[l.BLOCKS.PARAGRAPH],E),t.HEADINGS=[l.BLOCKS.HEADING_1,l.BLOCKS.HEADING_2,l.BLOCKS.HEADING_3,l.BLOCKS.HEADING_4,l.BLOCKS.HEADING_5,l.BLOCKS.HEADING_6],t.TEXT_CONTAINERS=n([l.BLOCKS.PARAGRAPH],t.HEADINGS,!0),t.V1_NODE_TYPES=[l.BLOCKS.DOCUMENT,l.BLOCKS.PARAGRAPH,l.BLOCKS.HEADING_1,l.BLOCKS.HEADING_2,l.BLOCKS.HEADING_3,l.BLOCKS.HEADING_4,l.BLOCKS.HEADING_5,l.BLOCKS.HEADING_6,l.BLOCKS.OL_LIST,l.BLOCKS.UL_LIST,l.BLOCKS.LIST_ITEM,l.BLOCKS.HR,l.BLOCKS.QUOTE,l.BLOCKS.EMBEDDED_ENTRY,l.BLOCKS.EMBEDDED_ASSET,o.INLINES.HYPERLINK,o.INLINES.ENTRY_HYPERLINK,o.INLINES.ASSET_HYPERLINK,o.INLINES.EMBEDDED_ENTRY,"text"],t.V1_MARKS=[L.default.BOLD,L.default.CODE,L.default.ITALIC,L.default.UNDERLINE]}));O(B);B.V1_MARKS,B.V1_NODE_TYPES,B.TEXT_CONTAINERS,B.HEADINGS,B.CONTAINERS,B.VOID_BLOCKS,B.TABLE_BLOCKS,B.LIST_ITEM_BLOCKS,B.TOP_LEVEL_BLOCKS;var a=_((function(e,t){Object.defineProperty(t,"__esModule",{value:!0})}));O(a);var C=_((function(e,t){Object.defineProperty(t,"__esModule",{value:!0})}));O(C);var c=_((function(e,t){Object.defineProperty(t,"__esModule",{value:!0});var E={nodeType:l.BLOCKS.DOCUMENT,data:{},content:[{nodeType:l.BLOCKS.PARAGRAPH,data:{},content:[{nodeType:"text",value:"",marks:[],data:{}}]}]};t.default=E}));O(c);var D=_((function(e,t){function E(e,t){for(var E=0,n=Object.keys(e);E<n.length;E++){if(t===e[n[E]])return!0}return!1}Object.defineProperty(t,"__esModule",{value:!0}),t.isText=t.isBlock=t.isInline=void 0,t.isInline=function(e){return E(o.INLINES,e.nodeType)},t.isBlock=function(e){return E(l.BLOCKS,e.nodeType)},t.isText=function(e){return"text"===e.nodeType}}));O(D);D.isText,D.isBlock,D.isInline;var I=_((function(e,t){var E=u&&u.__createBinding||(Object.create?function(e,t,E,n){void 0===n&&(n=E);var r=Object.getOwnPropertyDescriptor(t,E);r&&!("get"in r?!t.__esModule:r.writable||r.configurable)||(r={enumerable:!0,get:function(){return t[E]}}),Object.defineProperty(e,n,r)}:function(e,t,E,n){void 0===n&&(n=E),e[n]=t[E]}),n=u&&u.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),r=u&&u.__exportStar||function(e,t){for(var n in e)"default"===n||Object.prototype.hasOwnProperty.call(t,n)||E(t,e,n)},L=u&&u.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)"default"!==r&&Object.prototype.hasOwnProperty.call(e,r)&&E(t,e,r);return n(t,e),t},S=u&&u.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.helpers=t.EMPTY_DOCUMENT=t.MARKS=t.INLINES=t.BLOCKS=void 0,Object.defineProperty(t,"BLOCKS",{enumerable:!0,get:function(){return l.BLOCKS}}),Object.defineProperty(t,"INLINES",{enumerable:!0,get:function(){return o.INLINES}}),Object.defineProperty(t,"MARKS",{enumerable:!0,get:function(){return S(i).default}}),r(B,t),r(a,t),r(C,t),Object.defineProperty(t,"EMPTY_DOCUMENT",{enumerable:!0,get:function(){return S(c).default}});var O=L(D);t.helpers=O}));O(I);var T,d,A=I.helpers,K=(I.EMPTY_DOCUMENT,I.MARKS),N=I.INLINES,f=I.BLOCKS;function R(e,t){return e.map((function(e,E){return n=s(e,t),L=E,r.isValidElement(n)&&null===n.key?r.cloneElement(n,{key:L}):n;var n,L}))}function s(e,t){var E=t.renderNode,n=t.renderMark,r=t.renderText,S=t.preserveWhitespace;if(A.isText(e)){var u=r?r(e.value):e.value;if(S){var O=(u=u.replace(/ {2,}/g,(function(e){return"&nbsp;".repeat(e.length)}))).split("\n"),_=[];O.forEach((function(e,t){_.push(e),t!==O.length-1&&_.push(L.createElement("br",null))})),u=_}return e.marks.reduce((function(e,t){return n[t.type]?n[t.type](e):e}),u)}var l=R(e.content,t);return e.nodeType&&E[e.nodeType]?E[e.nodeType](e,l):L.createElement(L.Fragment,null,l)}var p=((T={})[f.DOCUMENT]=function(e,t){return t},T[f.PARAGRAPH]=function(e,t){return L.createElement("p",null,t)},T[f.HEADING_1]=function(e,t){return L.createElement("h1",null,t)},T[f.HEADING_2]=function(e,t){return L.createElement("h2",null,t)},T[f.HEADING_3]=function(e,t){return L.createElement("h3",null,t)},T[f.HEADING_4]=function(e,t){return L.createElement("h4",null,t)},T[f.HEADING_5]=function(e,t){return L.createElement("h5",null,t)},T[f.HEADING_6]=function(e,t){return L.createElement("h6",null,t)},T[f.EMBEDDED_ENTRY]=function(e,t){return L.createElement("div",null,t)},T[f.EMBEDDED_RESOURCE]=function(e,t){return L.createElement("div",null,t)},T[f.UL_LIST]=function(e,t){return L.createElement("ul",null,t)},T[f.OL_LIST]=function(e,t){return L.createElement("ol",null,t)},T[f.LIST_ITEM]=function(e,t){return L.createElement("li",null,t)},T[f.QUOTE]=function(e,t){return L.createElement("blockquote",null,t)},T[f.HR]=function(){return L.createElement("hr",null)},T[f.TABLE]=function(e,t){return L.createElement("table",null,L.createElement("tbody",null,t))},T[f.TABLE_ROW]=function(e,t){return L.createElement("tr",null,t)},T[f.TABLE_HEADER_CELL]=function(e,t){return L.createElement("th",null,t)},T[f.TABLE_CELL]=function(e,t){return L.createElement("td",null,t)},T[N.ASSET_HYPERLINK]=function(e){return P(N.ASSET_HYPERLINK,e)},T[N.ENTRY_HYPERLINK]=function(e){return P(N.ENTRY_HYPERLINK,e)},T[N.RESOURCE_HYPERLINK]=function(e){return M(N.RESOURCE_HYPERLINK,e)},T[N.EMBEDDED_ENTRY]=function(e){return P(N.EMBEDDED_ENTRY,e)},T[N.EMBEDDED_RESOURCE]=function(e,t){return M(N.EMBEDDED_RESOURCE,e)},T[N.HYPERLINK]=function(e,t){return L.createElement("a",{href:e.data.uri},t)},T),H=((d={})[K.BOLD]=function(e){return L.createElement("b",null,e)},d[K.ITALIC]=function(e){return L.createElement("i",null,e)},d[K.UNDERLINE]=function(e){return L.createElement("u",null,e)},d[K.CODE]=function(e){return L.createElement("code",null,e)},d[K.SUPERSCRIPT]=function(e){return L.createElement("sup",null,e)},d[K.SUBSCRIPT]=function(e){return L.createElement("sub",null,e)},d);function P(e,t){return L.createElement("span",{key:t.data.target.sys.id},"type: ",t.nodeType," id: ",t.data.target.sys.id)}function M(e,t){return L.createElement("span",{key:t.data.target.sys.urn},"type: ",t.nodeType," urn: ",t.data.target.sys.urn)}t.h=function(e,t){return void 0===t&&(t={}),e?s(e,{renderNode:S(S({},p),t.renderNode),renderMark:S(S({},H),t.renderMark),renderText:t.renderText,preserveWhitespace:t.preserveWhitespace}):null}},20549:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.BLOCKS=void 0,function(e){e.DOCUMENT="document",e.PARAGRAPH="paragraph",e.HEADING_1="heading-1",e.HEADING_2="heading-2",e.HEADING_3="heading-3",e.HEADING_4="heading-4",e.HEADING_5="heading-5",e.HEADING_6="heading-6",e.OL_LIST="ordered-list",e.UL_LIST="unordered-list",e.LIST_ITEM="list-item",e.HR="hr",e.QUOTE="blockquote",e.EMBEDDED_ENTRY="embedded-entry-block",e.EMBEDDED_ASSET="embedded-asset-block",e.EMBEDDED_RESOURCE="embedded-resource-block",e.TABLE="table",e.TABLE_ROW="table-row",e.TABLE_CELL="table-cell",e.TABLE_HEADER_CELL="table-header-cell"}(t.BLOCKS||(t.BLOCKS={}))},51928:(e,t,E)=>{Object.defineProperty(t,"__esModule",{value:!0});var n=E(20549),r={nodeType:n.BLOCKS.DOCUMENT,data:{},content:[{nodeType:n.BLOCKS.PARAGRAPH,data:{},content:[{nodeType:"text",value:"",marks:[],data:{}}]}]};t.default=r},86061:(e,t,E)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.isText=t.isBlock=t.isInline=void 0;var n=E(20549),r=E(7845);function L(e,t){for(var E=0,n=Object.keys(e);E<n.length;E++){if(t===e[n[E]])return!0}return!1}t.isInline=function(e){return L(r.INLINES,e.nodeType)},t.isBlock=function(e){return L(n.BLOCKS,e.nodeType)},t.isText=function(e){return"text"===e.nodeType}},86437:function(e,t,E){var n=this&&this.__createBinding||(Object.create?function(e,t,E,n){void 0===n&&(n=E);var r=Object.getOwnPropertyDescriptor(t,E);r&&!("get"in r?!t.__esModule:r.writable||r.configurable)||(r={enumerable:!0,get:function(){return t[E]}}),Object.defineProperty(e,n,r)}:function(e,t,E,n){void 0===n&&(n=E),e[n]=t[E]}),r=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),L=this&&this.__exportStar||function(e,t){for(var E in e)"default"===E||Object.prototype.hasOwnProperty.call(t,E)||n(t,e,E)},S=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var E in e)"default"!==E&&Object.prototype.hasOwnProperty.call(e,E)&&n(t,e,E);return r(t,e),t},u=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.helpers=t.EMPTY_DOCUMENT=t.MARKS=t.INLINES=t.BLOCKS=void 0;var O=E(20549);Object.defineProperty(t,"BLOCKS",{enumerable:!0,get:function(){return O.BLOCKS}});var _=E(7845);Object.defineProperty(t,"INLINES",{enumerable:!0,get:function(){return _.INLINES}});var l=E(31376);Object.defineProperty(t,"MARKS",{enumerable:!0,get:function(){return u(l).default}}),L(E(97951),t),L(E(80167),t),L(E(11911),t);var o=E(51928);Object.defineProperty(t,"EMPTY_DOCUMENT",{enumerable:!0,get:function(){return u(o).default}});var i=S(E(86061));t.helpers=i},7845:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.INLINES=void 0,function(e){e.HYPERLINK="hyperlink",e.ENTRY_HYPERLINK="entry-hyperlink",e.ASSET_HYPERLINK="asset-hyperlink",e.RESOURCE_HYPERLINK="resource-hyperlink",e.EMBEDDED_ENTRY="embedded-entry-inline",e.EMBEDDED_RESOURCE="embedded-resource-inline"}(t.INLINES||(t.INLINES={}))},31376:(e,t)=>{var E;Object.defineProperty(t,"__esModule",{value:!0}),function(e){e.BOLD="bold",e.ITALIC="italic",e.UNDERLINE="underline",e.CODE="code",e.SUPERSCRIPT="superscript",e.SUBSCRIPT="subscript"}(E||(E={})),t.default=E},11911:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0})},97951:function(e,t,E){var n,r=this&&this.__spreadArray||function(e,t,E){if(E||2===arguments.length)for(var n,r=0,L=t.length;r<L;r++)!n&&r in t||(n||(n=Array.prototype.slice.call(t,0,r)),n[r]=t[r]);return e.concat(n||Array.prototype.slice.call(t))},L=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.V1_MARKS=t.V1_NODE_TYPES=t.TEXT_CONTAINERS=t.HEADINGS=t.CONTAINERS=t.VOID_BLOCKS=t.TABLE_BLOCKS=t.LIST_ITEM_BLOCKS=t.TOP_LEVEL_BLOCKS=void 0;var S=E(20549),u=E(7845),O=L(E(31376));t.TOP_LEVEL_BLOCKS=[S.BLOCKS.PARAGRAPH,S.BLOCKS.HEADING_1,S.BLOCKS.HEADING_2,S.BLOCKS.HEADING_3,S.BLOCKS.HEADING_4,S.BLOCKS.HEADING_5,S.BLOCKS.HEADING_6,S.BLOCKS.OL_LIST,S.BLOCKS.UL_LIST,S.BLOCKS.HR,S.BLOCKS.QUOTE,S.BLOCKS.EMBEDDED_ENTRY,S.BLOCKS.EMBEDDED_ASSET,S.BLOCKS.EMBEDDED_RESOURCE,S.BLOCKS.TABLE],t.LIST_ITEM_BLOCKS=[S.BLOCKS.PARAGRAPH,S.BLOCKS.HEADING_1,S.BLOCKS.HEADING_2,S.BLOCKS.HEADING_3,S.BLOCKS.HEADING_4,S.BLOCKS.HEADING_5,S.BLOCKS.HEADING_6,S.BLOCKS.OL_LIST,S.BLOCKS.UL_LIST,S.BLOCKS.HR,S.BLOCKS.QUOTE,S.BLOCKS.EMBEDDED_ENTRY,S.BLOCKS.EMBEDDED_ASSET,S.BLOCKS.EMBEDDED_RESOURCE],t.TABLE_BLOCKS=[S.BLOCKS.TABLE,S.BLOCKS.TABLE_ROW,S.BLOCKS.TABLE_CELL,S.BLOCKS.TABLE_HEADER_CELL],t.VOID_BLOCKS=[S.BLOCKS.HR,S.BLOCKS.EMBEDDED_ENTRY,S.BLOCKS.EMBEDDED_ASSET,S.BLOCKS.EMBEDDED_RESOURCE],t.CONTAINERS=((n={})[S.BLOCKS.OL_LIST]=[S.BLOCKS.LIST_ITEM],n[S.BLOCKS.UL_LIST]=[S.BLOCKS.LIST_ITEM],n[S.BLOCKS.LIST_ITEM]=t.LIST_ITEM_BLOCKS,n[S.BLOCKS.QUOTE]=[S.BLOCKS.PARAGRAPH],n[S.BLOCKS.TABLE]=[S.BLOCKS.TABLE_ROW],n[S.BLOCKS.TABLE_ROW]=[S.BLOCKS.TABLE_CELL,S.BLOCKS.TABLE_HEADER_CELL],n[S.BLOCKS.TABLE_CELL]=[S.BLOCKS.PARAGRAPH],n[S.BLOCKS.TABLE_HEADER_CELL]=[S.BLOCKS.PARAGRAPH],n),t.HEADINGS=[S.BLOCKS.HEADING_1,S.BLOCKS.HEADING_2,S.BLOCKS.HEADING_3,S.BLOCKS.HEADING_4,S.BLOCKS.HEADING_5,S.BLOCKS.HEADING_6],t.TEXT_CONTAINERS=r([S.BLOCKS.PARAGRAPH],t.HEADINGS,!0),t.V1_NODE_TYPES=[S.BLOCKS.DOCUMENT,S.BLOCKS.PARAGRAPH,S.BLOCKS.HEADING_1,S.BLOCKS.HEADING_2,S.BLOCKS.HEADING_3,S.BLOCKS.HEADING_4,S.BLOCKS.HEADING_5,S.BLOCKS.HEADING_6,S.BLOCKS.OL_LIST,S.BLOCKS.UL_LIST,S.BLOCKS.LIST_ITEM,S.BLOCKS.HR,S.BLOCKS.QUOTE,S.BLOCKS.EMBEDDED_ENTRY,S.BLOCKS.EMBEDDED_ASSET,u.INLINES.HYPERLINK,u.INLINES.ENTRY_HYPERLINK,u.INLINES.ASSET_HYPERLINK,u.INLINES.EMBEDDED_ENTRY,"text"],t.V1_MARKS=[O.default.BOLD,O.default.CODE,O.default.ITALIC,O.default.UNDERLINE]},80167:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0})}}]);