(()=>{"use strict";var e={20:(e,t,n)=>{var o=n(609),l=Symbol.for("react.element"),i=(Symbol.for("react.fragment"),Object.prototype.hasOwnProperty),r=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s={key:!0,ref:!0,__self:!0,__source:!0};t.jsx=function(e,t,n){var o,c={},a=null,d=null;for(o in void 0!==n&&(a=""+n),void 0!==t.key&&(a=""+t.key),void 0!==t.ref&&(d=t.ref),t)i.call(t,o)&&!s.hasOwnProperty(o)&&(c[o]=t[o]);if(e&&e.defaultProps)for(o in t=e.defaultProps)void 0===c[o]&&(c[o]=t[o]);return{$$typeof:l,type:e,key:a,ref:d,props:c,_owner:r.current}}},848:(e,t,n)=>{e.exports=n(20)},609:e=>{e.exports=window.React}},t={};function n(o){var l=t[o];if(void 0!==l)return l.exports;var i=t[o]={exports:{}};return e[o](i,i.exports,n),i.exports}var o=n(609);const l=window.wp.blocks,i=window.wp.data,r=window.wp.i18n,s=window.wp.element,c=window.wp.blockEditor,a=window.wp.hooks,d=window.wp.primitives;var u=n(848);const v=(0,u.jsx)(d.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,u.jsx)(d.Path,{d:"M13 5.5H4V4h9v1.5Zm7 7H4V11h16v1.5Zm-7 7H4V18h9v1.5Z"})}),h=(0,u.jsx)(d.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,u.jsx)(d.Path,{d:"M7.5 5.5h9V4h-9v1.5Zm-3.5 7h16V11H4v1.5Zm3.5 7h9V18h-9v1.5Z"})}),p=(0,u.jsx)(d.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,u.jsx)(d.Path,{d:"M11.111 5.5H20V4h-8.889v1.5ZM4 12.5h16V11H4v1.5Zm7.111 7H20V18h-8.889v1.5Z"})}),w=(0,s.memo)((({attributes:e,setAttributes:t,device:n,advancedControl:l})=>{const{GkitTabs:i,GkitChoose:s,GkitPanelBody:d,GkitResponsive:u,GkitBoxControl:w}=window.gutenkit.components,{gkitResponsiveValue:m,responsiveHelper:k}=window.gutenkit.helpers;return(0,a.addFilter)("gutenkit.advancedControl.position.exclude","gutenkit/excludePositionFromTable",(e=>e.add("gutenkit-pro/table-builder-item"))),(0,a.addFilter)("gutenkit.advancedControl.visibility.exclude","gutenkit/excludeVisibilityFromTable",(e=>e.add("gutenkit-pro/table-builder-item"))),(0,a.addFilter)("gutenkit.advancedControl.motion-effect.exclude","gutenkit/excludeMotionFromTable",(e=>e.add("gutenkit-pro/table-builder-item"))),(0,a.addFilter)("gutenkit.advancedControl.layout.exclude","gutenkit/excludeLayoutFromTable",(e=>e.add("gutenkit-pro/table-builder-item"))),(0,o.createElement)(c.InspectorControls,{key:"setting"},(0,o.createElement)(i,{type:"top-level",tabs:[{name:"content",title:(0,r.__)("Content","gutenkit-blocks-addon-pro")},{name:"style",title:(0,r.__)("Style","gutenkit-blocks-addon-pro")}]},(i=>"content"===i.name?(0,o.createElement)(d,{title:(0,r.__)("Item","gutenkit-blocks-addon-pro"),initialOpen:!0},(0,o.createElement)(u,null,(0,o.createElement)(s,{label:(0,r.__)("Alignment","gutenkit-blocks-addon-pro"),value:m(e,"alignment",n),options:[{label:"Left",value:"left",icon:v},{label:"Center",value:"center",icon:h},{label:"Right",value:"right",icon:p}],onChange:e=>k("alignment",e,n,t)}))):"style"===i.name?(0,o.createElement)(o.Fragment,null,(0,o.createElement)(d,{title:(0,r.__)("Layout","gutenkit-blocks-addon-pro"),initialOpen:!0},(0,o.createElement)(u,null,(0,o.createElement)(w,{label:(0,r.__)("Padding","gutenkit-blocks-addon-pro"),values:m(e,"padding",n),onChange:e=>k("padding",e,n,t)}))),l):i.name)))})),m=window.wp.compose,k=window.wp.components,g=(0,u.jsx)(d.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"-2 -2 24 24",children:(0,u.jsx)(d.Path,{d:"M6.656 6.464h2.88v2.88h1.408v-2.88h2.88V5.12h-2.88V2.24H9.536v2.88h-2.88zM0 17.92V0h20.48v17.92H0zm7.68-2.56h5.12v-3.84H7.68v3.84zm-6.4 0H6.4v-3.84H1.28v3.84zM19.2 1.28H1.28v9.024H19.2V1.28zm0 10.24h-5.12v3.84h5.12v-3.84zM6.656 6.464h2.88v2.88h1.408v-2.88h2.88V5.12h-2.88V2.24H9.536v2.88h-2.88zM0 17.92V0h20.48v17.92H0zm7.68-2.56h5.12v-3.84H7.68v3.84zm-6.4 0H6.4v-3.84H1.28v3.84zM19.2 1.28H1.28v9.024H19.2V1.28zm0 10.24h-5.12v3.84h5.12v-3.84z"})}),b=(0,u.jsx)(d.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"-2 -2 24 24",children:(0,u.jsx)(d.Path,{d:"M13.824 10.176h-2.88v-2.88H9.536v2.88h-2.88v1.344h2.88v2.88h1.408v-2.88h2.88zM0 17.92V0h20.48v17.92H0zM6.4 1.28H1.28v3.84H6.4V1.28zm6.4 0H7.68v3.84h5.12V1.28zm6.4 0h-5.12v3.84h5.12V1.28zm0 5.056H1.28v9.024H19.2V6.336z"})}),V=(0,u.jsx)(d.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"-2 -2 24 24",children:(0,u.jsx)(d.Path,{d:"M17.728 11.456L14.592 8.32l3.2-3.2-1.536-1.536-3.2 3.2L9.92 3.648 8.384 5.12l3.2 3.2-3.264 3.264 1.536 1.536 3.264-3.264 3.136 3.136 1.472-1.536zM0 17.92V0h20.48v17.92H0zm19.2-6.4h-.448l-1.28-1.28H19.2V6.4h-1.792l1.28-1.28h.512V1.28H1.28v3.84h6.208l1.28 1.28H1.28v3.84h7.424l-1.28 1.28H1.28v3.84H19.2v-3.84z"})}),x=(0,u.jsx)(d.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"-2 -2 24 24",children:(0,u.jsx)(d.Path,{d:"M6.4 3.776v3.648H2.752v1.792H6.4v3.648h1.728V9.216h3.712V7.424H8.128V3.776zM0 17.92V0h20.48v17.92H0zM12.8 1.28H1.28v14.08H12.8V1.28zm6.4 0h-5.12v3.84h5.12V1.28zm0 5.12h-5.12v3.84h5.12V6.4zm0 5.12h-5.12v3.84h5.12v-3.84z"})}),H=(0,u.jsx)(d.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"-2 -2 24 24",children:(0,u.jsx)(d.Path,{d:"M14.08 12.864V9.216h3.648V7.424H14.08V3.776h-1.728v3.648H8.64v1.792h3.712v3.648zM0 17.92V0h20.48v17.92H0zM6.4 1.28H1.28v3.84H6.4V1.28zm0 5.12H1.28v3.84H6.4V6.4zm0 5.12H1.28v3.84H6.4v-3.84zM19.2 1.28H7.68v14.08H19.2V1.28z"})}),f=(0,u.jsx)(d.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"-2 -2 24 24",children:(0,u.jsx)(d.Path,{d:"M6.4 9.98L7.68 8.7v-.256L6.4 7.164V9.98zm6.4-1.532l1.28-1.28V9.92L12.8 8.64v-.192zm7.68 9.472V0H0v17.92h20.48zm-1.28-2.56h-5.12v-1.024l-.256.256-1.024-1.024v1.792H7.68v-1.792l-1.024 1.024-.256-.256v1.024H1.28V1.28H6.4v2.368l.704-.704.576.576V1.216h5.12V3.52l.96-.96.32.32V1.216h5.12V15.36zm-5.76-2.112l-3.136-3.136-3.264 3.264-1.536-1.536 3.264-3.264L5.632 5.44l1.536-1.536 3.136 3.136 3.2-3.2 1.536 1.536-3.2 3.2 3.136 3.136-1.536 1.536z"})}),_=(0,u.jsx)(d.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",children:(0,u.jsx)(d.Path,{d:"M4 6v11.5h16V6H4zm1.5 1.5h6V11h-6V7.5zm0 8.5v-3.5h6V16h-6zm13 0H13v-3.5h5.5V16zM13 11V7.5h5.5V11H13z"})}),z=JSON.parse('{"UU":"gutenkit/table-builder-item"}');(0,l.registerBlockType)(z.UU,{edit:function({attributes:e,setAttributes:t,clientId:n,context:a,advancedControl:d}){const{GkitStyle:u}=window.gutenkit.components,v=(0,s.useRef)(null),[h,p]=(0,s.useState)(null),[z,B]=(0,s.useState)(null),[C,y]=(0,s.useState)(null),{useDeviceType:E,useBlockStyles:S,useDeviceList:M}=window.gutenkit.helpers,j=M(),P=E(),I="core/block-editor";let G=(0,c.useBlockProps)({className:"gkit-table__body-content",ref:(0,m.useMergeRefs)([v])});const L=(0,c.useInnerBlocksProps)({},{templateLock:!1,template:[["core/paragraph"]]});function A(){return v.current.closest(".gkit-table").querySelectorAll(".gkit-table__body-row")}function F(e){const t=A(),n=Array.from(t).findIndex((e=>e.id===`block-${z}`)),o=(0,l.createBlock)("gutenkit/table-builder-row"),r=(0,i.select)(I).getBlocks(h);r.splice(n+e,0,o),(0,i.dispatch)(I).replaceInnerBlocks(h,r),(0,i.dispatch)(I).updateBlockAttributes(h,{rowCount:r.length})}function O(e){const t=A(),o=C.innerBlocks.findIndex((e=>e.clientId===n));t.forEach((t=>{const n=(0,i.select)(I).getBlocks(t.id.replace("block-","")),r=(0,l.createBlock)("gutenkit/table-builder-item");n.splice(o+e,0,r),(0,i.dispatch)(I).replaceInnerBlocks(t.id.replace("block-",""),n)}));const r=[...a["gutenkit/table-headers"]],s=[...a["gutenkit/table-footers"]];r.splice(o+e,0,{title:"Header"}),s.splice(o+e,0,{title:"Footer"}),(0,i.dispatch)(I).updateBlockAttributes(h,{headers:r,footers:s,columnCount:a["gutenkit/table-columnCount"]+1})}(0,s.useEffect)((()=>{const e=(0,i.select)(I).getBlockParents(n),t=e[e.length-1],o=(0,i.select)(I).getBlock(t);p(e[0]),B(t),y(o)}),[n]);const R=[{icon:g,title:(0,r.__)("Insert row before"),onClick:function(){F(0)}},{icon:b,title:(0,r.__)("Insert row after"),onClick:function(){F(1)}},{icon:V,title:(0,r.__)("Delete row"),isDisabled:1==a["gutenkit/table-rowCount"],onClick:function(){(0,i.dispatch)(I).removeBlock(z),(0,i.dispatch)(I).updateBlockAttributes(h,{rowCount:a["gutenkit/table-rowCount"]-1})}},{icon:x,title:(0,r.__)("Insert column before"),onClick:function(){O(0)}},{icon:H,title:(0,r.__)("Insert column after"),onClick:function(){O(1)}},{icon:f,title:(0,r.__)("Delete column"),isDisabled:1==a["gutenkit/table-columnCount"],onClick:function(){const e=A(),t=C.innerBlocks.findIndex((e=>e.clientId===n));e.forEach((e=>{const n=(0,i.select)(I).getBlocks(e.id.replace("block-","")).filter(((e,n)=>n!==t));(0,i.dispatch)(I).replaceInnerBlocks(e.id.replace("block-",""),n)}));const o=a["gutenkit/table-headers"].filter(((e,n)=>n!==t)),l=a["gutenkit/table-footers"].filter(((e,n)=>n!==t));(0,i.dispatch)(I).updateBlockAttributes(h,{headers:o,footers:l,columnCount:a["gutenkit/table-columnCount"]-1})}}];return S(e,t,"blocksCSS",((e,t)=>{const{parseCSS:n,getBoxValue:o}=window.gutenkit.helpers,l=e.blockClass;return o(e.paddingDesktop,"padding"),n([[],t=>[{selector:`.gkit-table tbody .${l}`,"text-align":e[`alignment${t}`],...o(e[`padding${t}`],"padding")}]],t)})(e,j)),(0,o.createElement)(o.Fragment,null,(0,o.createElement)(u,{blocksCSS:e?.blocksCSS}),(0,o.createElement)(w,{attributes:e,setAttributes:t,device:P,advancedControl:d}),(0,o.createElement)(c.BlockControls,{group:"other"},(0,o.createElement)(k.ToolbarDropdownMenu,{hasArrowIndicator:!0,icon:_,label:(0,r.__)("Edit table"),controls:R})),(0,o.createElement)("td",{...G},(0,o.createElement)("div",{...L})))},icon:{src:(0,o.createElement)("svg",{className:"gkit-editor-icon",fill:"currentColor",viewBox:"0 0 16 14",xmlns:"http://www.w3.org/2000/svg"},(0,o.createElement)("path",{d:"M2 4v8h10V2H2ZM0 2a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2Z"}))},save:function({attributes:e}){const t=c.useBlockProps.save({className:"gkit-table__body-content"}),n=c.useInnerBlocksProps.save();return(0,o.createElement)("td",{...t},(0,o.createElement)("div",{...n}))}})})();