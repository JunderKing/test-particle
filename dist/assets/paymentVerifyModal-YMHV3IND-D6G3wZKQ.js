import{Q as f}from"./chunk-25AJW3AC-CVkT1k49.js";import{U as b,r as m,m as g,o as a,aA as h,D as c,aq as E}from"./index-CwMm_7HW.js";import{u as x}from"./useRequest-DWSDEbZG.js";import{u as C}from"./useTranslation-L85-XbTB.js";import"./chunk-MYQNSXNS-DH2S_xSd.js";import"./chunk-KGYACALK-DwB-tQk9.js";import"./throttle-BoqW9Efe.js";import"./index-BGrVr97U.js";var P=`.payment-password-drawer {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.payment-password-drawer .ant-drawer-body {
  padding-right: 0;
  padding-left: 0;
  overflow: hidden;
}
.payment-password-drawer .ant-drawer-content-wrapper {
  width: 100% !important;
}
.payment-password-drawer .ant-drawer-content .ant-drawer-wrapper-body .ant-drawer-header {
  display: none;
}
.payment-password-drawer .particle-pc-drawer .payment-verify-content {
  margin-top: 38px;
}
.payment-password-drawer .payment-verify-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  margin-top: 22px;
}
.payment-password-drawer .payment-verify-content .particle-keywords-map {
  position: absolute;
}
@media (min-width: 600px) {
  .payment-password-drawer {
    position: absolute;
  }
}
`,_=({props:r})=>{let{setPaymentVerify:n,setWrongPassword:s}=b(),{t}=C(),[i,o]=m.useState(""),{authCoreModal:w}=g();m.useEffect(()=>{r.visible&&o("")},[r.visible]);let{loading:l,run:y}=x(E,{manual:!0,onSuccess:(e,d)=>{var p;n({visible:!1}),(p=r.onVerifyCompleted)==null||p.call(r,i)},onError:e=>{if(o(""),(e==null?void 0:e.error_code)===c.WrongPaymentPassword)s({visible:!0});else if((e==null?void 0:e.error_code)===c.SecurityAccountFrozen){let d=e.extra.seconds||0;s({visible:!0,accountFrozen:{seconds:d}})}}}),u=()=>{var e;if(l)return!1;n({visible:!1}),(e=r.onVerifyFailed)==null||e.call(r,t("common.cancel"))},v=e=>{o(e),e.length===6&&y(e)};return a.createElement(a.Fragment,null,a.createElement("style",null,P),a.createElement(h,{visible:r.visible,placement:"bottom",height:421,closable:!1,maskClosable:!1,onClose:u,className:"payment-password-drawer",title:r.type==="close"?t("account.close_payment_password"):t("account.payment_password"),forceRender:!0,getContainer:()=>w.rootBody},a.createElement("div",{className:"content payment-verify-content"},a.createElement(f,{onChange:v,value:i,keyboardInvisible:l}))))},N=_;export{N as default};
