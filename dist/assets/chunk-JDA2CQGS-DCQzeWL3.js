import{p as r}from"./chunk-MYQNSXNS-DH2S_xSd.js";import{o as l,ao as u,al as i}from"./index-CwMm_7HW.js";import{I as s}from"./index-BH0HXIOn.js";var o=`.icon-eye {
  display: block;
  margin: auto;
  font-size: 23px;
}
`,d=()=>l.createElement(l.Fragment,null,l.createElement("style",null,o),l.createElement(r,{className:"icon-eye",name:"eye_open"})),p=()=>l.createElement(l.Fragment,null,l.createElement("style",null,o),l.createElement(r,{className:"icon-eye",name:"eye_close"})),c=`.password-input {
  position: relative;
  width: 100%;
  height: 47px;
  min-height: 47px;
  padding: 0;
  border: 1px solid var(--input-border-color) !important;
  border-radius: var(--primary-btn-border-radius);
  overflow: hidden;
  background: none;
}
.password-input input {
  width: 100%;
  height: 45px;
  padding: 0 8px;
  padding-left: 16px !important;
  font-weight: 500;
  font-size: 15px;
  color: var(--text-color);
  background-color: var(--input-background-color);
}
.password-input .ant-input-suffix {
  position: absolute;
  z-index: 1;
  top: 12px;
  right: 14px;
  cursor: pointer;
}
`,m=e=>{let n=l.useRef(null);return l.createElement(l.Fragment,null,l.createElement("style",null,c),l.createElement(s.Password,{ref:n,className:"password-input"+(e!=null&&e.className?` ${e==null?void 0:e.className}`:""),iconRender:a=>a?l.createElement("div",null,l.createElement(d,null)):l.createElement("div",null,l.createElement(p,null)),onChange:a=>{var t;e!=null&&e.onChange&&((t=e==null?void 0:e.onChange)==null||t.call(e,a.target.value))},defaultValue:e==null?void 0:e.defaultValue,maxLength:(e==null?void 0:e.maxLength)||20,onPressEnter:a=>{var t;return(t=e==null?void 0:e.onPressEnter)==null?void 0:t.call(e,a)},onBlur:a=>{var t;return(t=e==null?void 0:e.onBlur)==null?void 0:t.call(e,a)},autoFocus:u(e==null?void 0:e.autoFocus)&&i()?!0:e==null?void 0:e.autoFocus}))},h=m;export{h as B};
