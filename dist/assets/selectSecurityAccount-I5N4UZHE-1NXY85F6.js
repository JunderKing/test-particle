import{U as h,Y as g,m as y,o,aA as f,B as d,A as m,O as x,P as w}from"./index-CwMm_7HW.js";import{u as C}from"./useTranslation-L85-XbTB.js";var _=`.select-account-drawer .ant-drawer-body {
  padding: 18px !important;
}
.select-account {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
}
.select-account .close-icon {
  position: absolute;
  top: 10px;
  right: 10px;
}
.select-account .account-btn {
  width: 100%;
  height: 47px;
  border: none;
  border-radius: var(--primary-btn-border-radius);
  outline: none;
  font-size: var(--primary-btn-font-size);
  line-height: 22px;
  color: var(--primary-btn-color);
  background: var(--primary-btn-background-color);
}
.select-account .account-btn:hover {
  opacity: var(--hover-opacity);
}
.select-account .select-account-title {
  padding-top: 24px;
  padding-bottom: 24px;
  font-weight: 500;
  font-size: 20px;
  line-height: 1;
  color: var(--text-color);
}
`,E=p=>{var c,n,l;let{t:a}=C(),{visible:v,state:r}=p,{showSelectSecurityAccount:i,userInfo:e}=h(),s=g(),{authCoreModal:b}=y(),u=(t,k)=>{r?s("/account/verify",{state:{account:t,...r}}):s("/account/set-password",{state:{account:t}}),i(!1)};return o.createElement(o.Fragment,null,o.createElement("style",null,_),o.createElement(f,{title:(c=a("account.modal_select_verification"))!=null?c:"",placement:"bottom",closable:!1,className:"select-account-drawer",visible:v,maskClosable:!0,forceRender:!0,height:220,onClose:()=>i(!1),getContainer:()=>b.rootBody},o.createElement("div",{className:"select-account"},o.createElement(d,{className:"account-btn",onClick:()=>{var t;return u((t=e==null?void 0:e.security_account)==null?void 0:t.email,m.email)}},`${a("account.email")} - ${x(((n=e==null?void 0:e.security_account)==null?void 0:n.email)||"")}`),o.createElement(d,{className:"account-btn",onClick:()=>{var t;return u((t=e==null?void 0:e.security_account)==null?void 0:t.phone,m.phone)}},`${a("account.mobile")} - ${w(((l=e==null?void 0:e.security_account)==null?void 0:l.phone)||"")}`))))},$=E;export{$ as default};
