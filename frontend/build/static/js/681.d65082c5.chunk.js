"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[681],{408:(e,t,n)=>{n.d(t,{A:()=>D});var r=n(5043),o=n(8387),i=n(8610);function s(e){try{return e.matches(":focus-visible")}catch(t){0}return!1}var l=n(2108),a=n(6431),u=n(5849);const c=n(1782).A;var p=n(1902);class d{static create(){return new d}static use(){const e=(0,p.A)(d.create).current,[t,n]=r.useState(!1);return e.shouldMount=t,e.setShouldMount=n,r.useEffect(e.mountEffect,[t]),e}constructor(){this.ref={current:null},this.mounted=null,this.didMount=!1,this.shouldMount=!1,this.setShouldMount=null}mount(){return this.mounted||(this.mounted=function(){let e,t;const n=new Promise(((n,r)=>{e=n,t=r}));return n.resolve=e,n.reject=t,n}(),this.shouldMount=!0,this.setShouldMount(this.shouldMount)),this.mounted}mountEffect=()=>{this.shouldMount&&!this.didMount&&null!==this.ref.current&&(this.didMount=!0,this.mounted.resolve())};start(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];this.mount().then((()=>this.ref.current?.start(...t)))}stop(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];this.mount().then((()=>this.ref.current?.stop(...t)))}pulsate(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];this.mount().then((()=>this.ref.current?.pulsate(...t)))}}var h=n(8587),f=n(8168);var m=n(5540),v=n(8726);function b(e,t){var n=Object.create(null);return e&&r.Children.map(e,(function(e){return e})).forEach((function(e){n[e.key]=function(e){return t&&(0,r.isValidElement)(e)?t(e):e}(e)})),n}function y(e,t,n){return null!=n[t]?n[t]:e.props[t]}function g(e,t,n){var o=b(e.children),i=function(e,t){function n(n){return n in t?t[n]:e[n]}e=e||{},t=t||{};var r,o=Object.create(null),i=[];for(var s in e)s in t?i.length&&(o[s]=i,i=[]):i.push(s);var l={};for(var a in t){if(o[a])for(r=0;r<o[a].length;r++){var u=o[a][r];l[o[a][r]]=n(u)}l[a]=n(a)}for(r=0;r<i.length;r++)l[i[r]]=n(i[r]);return l}(t,o);return Object.keys(i).forEach((function(s){var l=i[s];if((0,r.isValidElement)(l)){var a=s in t,u=s in o,c=t[s],p=(0,r.isValidElement)(c)&&!c.props.in;!u||a&&!p?u||!a||p?u&&a&&(0,r.isValidElement)(c)&&(i[s]=(0,r.cloneElement)(l,{onExited:n.bind(null,l),in:c.props.in,exit:y(l,"exit",e),enter:y(l,"enter",e)})):i[s]=(0,r.cloneElement)(l,{in:!1}):i[s]=(0,r.cloneElement)(l,{onExited:n.bind(null,l),in:!0,exit:y(l,"exit",e),enter:y(l,"enter",e)})}})),i}var A=Object.values||function(e){return Object.keys(e).map((function(t){return e[t]}))},x=function(e){function t(t,n){var r,o=(r=e.call(this,t,n)||this).handleExited.bind(function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(r));return r.state={contextValue:{isMounting:!0},handleExited:o,firstRender:!0},r}(0,m.A)(t,e);var n=t.prototype;return n.componentDidMount=function(){this.mounted=!0,this.setState({contextValue:{isMounting:!1}})},n.componentWillUnmount=function(){this.mounted=!1},t.getDerivedStateFromProps=function(e,t){var n,o,i=t.children,s=t.handleExited;return{children:t.firstRender?(n=e,o=s,b(n.children,(function(e){return(0,r.cloneElement)(e,{onExited:o.bind(null,e),in:!0,appear:y(e,"appear",n),enter:y(e,"enter",n),exit:y(e,"exit",n)})}))):g(e,i,s),firstRender:!1}},n.handleExited=function(e,t){var n=b(this.props.children);e.key in n||(e.props.onExited&&e.props.onExited(t),this.mounted&&this.setState((function(t){var n=(0,f.A)({},t.children);return delete n[e.key],{children:n}})))},n.render=function(){var e=this.props,t=e.component,n=e.childFactory,o=(0,h.A)(e,["component","childFactory"]),i=this.state.contextValue,s=A(this.state.children).map(n);return delete o.appear,delete o.enter,delete o.exit,null===t?r.createElement(v.A.Provider,{value:i},s):r.createElement(v.A.Provider,{value:i},r.createElement(t,o,s))},t}(r.Component);x.propTypes={},x.defaultProps={component:"div",childFactory:function(e){return e}};const S=x;var M=n(3593),E=n(3290),R=n(579);const w=function(e){const{className:t,classes:n,pulsate:i=!1,rippleX:s,rippleY:l,rippleSize:a,in:u,onExited:c,timeout:p}=e,[d,h]=r.useState(!1),f=(0,o.A)(t,n.ripple,n.rippleVisible,i&&n.ripplePulsate),m={width:a,height:a,top:-a/2+l,left:-a/2+s},v=(0,o.A)(n.child,d&&n.childLeaving,i&&n.childPulsate);return u||d||h(!0),r.useEffect((()=>{if(!u&&null!=c){const e=setTimeout(c,p);return()=>{clearTimeout(e)}}}),[c,u,p]),(0,R.jsx)("span",{className:f,style:m,children:(0,R.jsx)("span",{className:v})})};var k=n(2532);const z=(0,k.A)("MuiTouchRipple",["root","ripple","rippleVisible","ripplePulsate","child","childLeaving","childPulsate"]),T=E.i7`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`,C=E.i7`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`,P=E.i7`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`,V=(0,l.Ay)("span",{name:"MuiTouchRipple",slot:"Root"})({overflow:"hidden",pointerEvents:"none",position:"absolute",zIndex:0,top:0,right:0,bottom:0,left:0,borderRadius:"inherit"}),I=(0,l.Ay)(w,{name:"MuiTouchRipple",slot:"Ripple"})`
  opacity: 0;
  position: absolute;

  &.${z.rippleVisible} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${T};
    animation-duration: ${550}ms;
    animation-timing-function: ${e=>{let{theme:t}=e;return t.transitions.easing.easeInOut}};
  }

  &.${z.ripplePulsate} {
    animation-duration: ${e=>{let{theme:t}=e;return t.transitions.duration.shorter}}ms;
  }

  & .${z.child} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${z.childLeaving} {
    opacity: 0;
    animation-name: ${C};
    animation-duration: ${550}ms;
    animation-timing-function: ${e=>{let{theme:t}=e;return t.transitions.easing.easeInOut}};
  }

  & .${z.childPulsate} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${P};
    animation-duration: 2500ms;
    animation-timing-function: ${e=>{let{theme:t}=e;return t.transitions.easing.easeInOut}};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`,j=r.forwardRef((function(e,t){const n=(0,a.b)({props:e,name:"MuiTouchRipple"}),{center:i=!1,classes:s={},className:l,...u}=n,[c,p]=r.useState([]),d=r.useRef(0),h=r.useRef(null);r.useEffect((()=>{h.current&&(h.current(),h.current=null)}),[c]);const f=r.useRef(!1),m=(0,M.A)(),v=r.useRef(null),b=r.useRef(null),y=r.useCallback((e=>{const{pulsate:t,rippleX:n,rippleY:r,rippleSize:i,cb:l}=e;p((e=>[...e,(0,R.jsx)(I,{classes:{ripple:(0,o.A)(s.ripple,z.ripple),rippleVisible:(0,o.A)(s.rippleVisible,z.rippleVisible),ripplePulsate:(0,o.A)(s.ripplePulsate,z.ripplePulsate),child:(0,o.A)(s.child,z.child),childLeaving:(0,o.A)(s.childLeaving,z.childLeaving),childPulsate:(0,o.A)(s.childPulsate,z.childPulsate)},timeout:550,pulsate:t,rippleX:n,rippleY:r,rippleSize:i},d.current)])),d.current+=1,h.current=l}),[s]),g=r.useCallback((function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:()=>{};const{pulsate:r=!1,center:o=i||t.pulsate,fakeElement:s=!1}=t;if("mousedown"===e?.type&&f.current)return void(f.current=!1);"touchstart"===e?.type&&(f.current=!0);const l=s?null:b.current,a=l?l.getBoundingClientRect():{width:0,height:0,left:0,top:0};let u,c,p;if(o||void 0===e||0===e.clientX&&0===e.clientY||!e.clientX&&!e.touches)u=Math.round(a.width/2),c=Math.round(a.height/2);else{const{clientX:t,clientY:n}=e.touches&&e.touches.length>0?e.touches[0]:e;u=Math.round(t-a.left),c=Math.round(n-a.top)}if(o)p=Math.sqrt((2*a.width**2+a.height**2)/3),p%2===0&&(p+=1);else{const e=2*Math.max(Math.abs((l?l.clientWidth:0)-u),u)+2,t=2*Math.max(Math.abs((l?l.clientHeight:0)-c),c)+2;p=Math.sqrt(e**2+t**2)}e?.touches?null===v.current&&(v.current=()=>{y({pulsate:r,rippleX:u,rippleY:c,rippleSize:p,cb:n})},m.start(80,(()=>{v.current&&(v.current(),v.current=null)}))):y({pulsate:r,rippleX:u,rippleY:c,rippleSize:p,cb:n})}),[i,y,m]),A=r.useCallback((()=>{g({},{pulsate:!0})}),[g]),x=r.useCallback(((e,t)=>{if(m.clear(),"touchend"===e?.type&&v.current)return v.current(),v.current=null,void m.start(0,(()=>{x(e,t)}));v.current=null,p((e=>e.length>0?e.slice(1):e)),h.current=t}),[m]);return r.useImperativeHandle(t,(()=>({pulsate:A,start:g,stop:x})),[A,g,x]),(0,R.jsx)(V,{className:(0,o.A)(z.root,s.root,l),ref:b,...u,children:(0,R.jsx)(S,{component:null,exit:!0,children:c})})}));var $=n(2372);function B(e){return(0,$.Ay)("MuiButtonBase",e)}const N=(0,k.A)("MuiButtonBase",["root","disabled","focusVisible"]),O=(0,l.Ay)("button",{name:"MuiButtonBase",slot:"Root",overridesResolver:(e,t)=>t.root})({display:"inline-flex",alignItems:"center",justifyContent:"center",position:"relative",boxSizing:"border-box",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none",textDecoration:"none",color:"inherit","&::-moz-focus-inner":{borderStyle:"none"},[`&.${N.disabled}`]:{pointerEvents:"none",cursor:"default"},"@media print":{colorAdjust:"exact"}}),D=r.forwardRef((function(e,t){const n=(0,a.b)({props:e,name:"MuiButtonBase"}),{action:l,centerRipple:p=!1,children:h,className:f,component:m="button",disabled:v=!1,disableRipple:b=!1,disableTouchRipple:y=!1,focusRipple:g=!1,focusVisibleClassName:A,LinkComponent:x="a",onBlur:S,onClick:M,onContextMenu:E,onDragLeave:w,onFocus:k,onFocusVisible:z,onKeyDown:T,onKeyUp:C,onMouseDown:P,onMouseLeave:V,onMouseUp:I,onTouchEnd:$,onTouchMove:N,onTouchStart:D,tabIndex:L=0,TouchRippleProps:F,touchRippleRef:X,type:Y,...U}=n,H=r.useRef(null),K=d.use(),W=(0,u.A)(K.ref,X),[_,q]=r.useState(!1);v&&_&&q(!1),r.useImperativeHandle(l,(()=>({focusVisible:()=>{q(!0),H.current.focus()}})),[]);const G=K.shouldMount&&!b&&!v;function J(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:y;return c((r=>{t&&t(r);return n||K[e](r),!0}))}r.useEffect((()=>{_&&g&&!b&&K.pulsate()}),[b,g,_,K]);const Q=J("start",P),Z=J("stop",E),ee=J("stop",w),te=J("stop",I),ne=J("stop",(e=>{_&&e.preventDefault(),V&&V(e)})),re=J("start",D),oe=J("stop",$),ie=J("stop",N),se=J("stop",(e=>{s(e.target)||q(!1),S&&S(e)}),!1),le=c((e=>{H.current||(H.current=e.currentTarget),s(e.target)&&(q(!0),z&&z(e)),k&&k(e)})),ae=()=>{const e=H.current;return m&&"button"!==m&&!("A"===e.tagName&&e.href)},ue=c((e=>{g&&!e.repeat&&_&&" "===e.key&&K.stop(e,(()=>{K.start(e)})),e.target===e.currentTarget&&ae()&&" "===e.key&&e.preventDefault(),T&&T(e),e.target===e.currentTarget&&ae()&&"Enter"===e.key&&!v&&(e.preventDefault(),M&&M(e))})),ce=c((e=>{g&&" "===e.key&&_&&!e.defaultPrevented&&K.stop(e,(()=>{K.pulsate(e)})),C&&C(e),M&&e.target===e.currentTarget&&ae()&&" "===e.key&&!e.defaultPrevented&&M(e)}));let pe=m;"button"===pe&&(U.href||U.to)&&(pe=x);const de={};"button"===pe?(de.type=void 0===Y?"button":Y,de.disabled=v):(U.href||U.to||(de.role="button"),v&&(de["aria-disabled"]=v));const he=(0,u.A)(t,H),fe={...n,centerRipple:p,component:m,disabled:v,disableRipple:b,disableTouchRipple:y,focusRipple:g,tabIndex:L,focusVisible:_},me=(e=>{const{disabled:t,focusVisible:n,focusVisibleClassName:r,classes:o}=e,s={root:["root",t&&"disabled",n&&"focusVisible"]},l=(0,i.A)(s,B,o);return n&&r&&(l.root+=` ${r}`),l})(fe);return(0,R.jsxs)(O,{as:pe,className:(0,o.A)(me.root,f),ownerState:fe,onBlur:se,onClick:M,onContextMenu:Z,onFocus:le,onKeyDown:ue,onKeyUp:ce,onMouseDown:Q,onMouseLeave:ne,onMouseUp:te,onDragLeave:ee,onTouchEnd:oe,onTouchMove:ie,onTouchStart:re,ref:he,tabIndex:v?-1:L,type:Y,...de,...U,children:[h,G?(0,R.jsx)(j,{ref:W,center:p,...F}):null]})}))},9662:(e,t,n)=>{n.d(t,{A:()=>b});var r=n(5043),o=n(8387),i=n(8610),s=n(6803),l=n(2108),a=n(6262),u=n(6431),c=n(2532),p=n(2372);function d(e){return(0,p.Ay)("MuiSvgIcon",e)}(0,c.A)("MuiSvgIcon",["root","colorPrimary","colorSecondary","colorAction","colorError","colorDisabled","fontSizeInherit","fontSizeSmall","fontSizeMedium","fontSizeLarge"]);var h=n(579);const f=(0,l.Ay)("svg",{name:"MuiSvgIcon",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,"inherit"!==n.color&&t[`color${(0,s.A)(n.color)}`],t[`fontSize${(0,s.A)(n.fontSize)}`]]}})((0,a.A)((e=>{let{theme:t}=e;return{userSelect:"none",width:"1em",height:"1em",display:"inline-block",flexShrink:0,transition:t.transitions?.create?.("fill",{duration:(t.vars??t).transitions?.duration?.shorter}),variants:[{props:e=>!e.hasSvgAsChild,style:{fill:"currentColor"}},{props:{fontSize:"inherit"},style:{fontSize:"inherit"}},{props:{fontSize:"small"},style:{fontSize:t.typography?.pxToRem?.(20)||"1.25rem"}},{props:{fontSize:"medium"},style:{fontSize:t.typography?.pxToRem?.(24)||"1.5rem"}},{props:{fontSize:"large"},style:{fontSize:t.typography?.pxToRem?.(35)||"2.1875rem"}},...Object.entries((t.vars??t).palette).filter((e=>{let[,t]=e;return t&&t.main})).map((e=>{let[n]=e;return{props:{color:n},style:{color:(t.vars??t).palette?.[n]?.main}}})),{props:{color:"action"},style:{color:(t.vars??t).palette?.action?.active}},{props:{color:"disabled"},style:{color:(t.vars??t).palette?.action?.disabled}},{props:{color:"inherit"},style:{color:void 0}}]}}))),m=r.forwardRef((function(e,t){const n=(0,u.b)({props:e,name:"MuiSvgIcon"}),{children:l,className:a,color:c="inherit",component:p="svg",fontSize:m="medium",htmlColor:v,inheritViewBox:b=!1,titleAccess:y,viewBox:g="0 0 24 24",...A}=n,x=r.isValidElement(l)&&"svg"===l.type,S={...n,color:c,component:p,fontSize:m,instanceFontSize:e.fontSize,inheritViewBox:b,viewBox:g,hasSvgAsChild:x},M={};b||(M.viewBox=g);const E=(e=>{const{color:t,fontSize:n,classes:r}=e,o={root:["root","inherit"!==t&&`color${(0,s.A)(t)}`,`fontSize${(0,s.A)(n)}`]};return(0,i.A)(o,d,r)})(S);return(0,h.jsxs)(f,{as:p,className:(0,o.A)(E.root,a),focusable:"false",color:v,"aria-hidden":!y||void 0,role:y?"img":void 0,ref:t,...M,...A,...x&&l.props,ownerState:S,children:[x?l.props.children:l,y?(0,h.jsx)("title",{children:y}):null]})}));m&&(m.muiName="SvgIcon");const v=m;function b(e,t){function n(n,r){return(0,h.jsx)(v,{"data-testid":`${t}Icon`,ref:r,...n,children:e})}return n.muiName=v.muiName,r.memo(r.forwardRef(n))}},5849:(e,t,n)=>{n.d(t,{A:()=>r});const r=n(3462).A},6564:(e,t,n)=>{function r(e,t){"function"===typeof e?e(t):e&&(e.current=t)}n.d(t,{A:()=>r})},4440:(e,t,n)=>{n.d(t,{A:()=>o});var r=n(5043);const o="undefined"!==typeof window?r.useLayoutEffect:r.useEffect},1782:(e,t,n)=>{n.d(t,{A:()=>i});var r=n(5043),o=n(4440);const i=function(e){const t=r.useRef(e);return(0,o.A)((()=>{t.current=e})),r.useRef((function(){return(0,t.current)(...arguments)})).current}},3462:(e,t,n)=>{n.d(t,{A:()=>i});var r=n(5043),o=n(6564);function i(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return r.useMemo((()=>t.every((e=>null==e))?null:e=>{t.forEach((t=>{(0,o.A)(t,e)}))}),t)}},1902:(e,t,n)=>{n.d(t,{A:()=>i});var r=n(5043);const o={};function i(e,t){const n=r.useRef(o);return n.current===o&&(n.current=e(t)),n}},3593:(e,t,n)=>{n.d(t,{A:()=>l});var r=n(1902),o=n(5043);const i=[];class s{static create(){return new s}currentId=null;start(e,t){this.clear(),this.currentId=setTimeout((()=>{this.currentId=null,t()}),e)}clear=()=>{null!==this.currentId&&(clearTimeout(this.currentId),this.currentId=null)};disposeEffect=()=>this.clear}function l(){const e=(0,r.A)(s.create).current;var t;return t=e.disposeEffect,o.useEffect(t,i),e}},8726:(e,t,n)=>{n.d(t,{A:()=>r});const r=n(5043).createContext(null)},5540:(e,t,n)=>{function r(e,t){return r=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},r(e,t)}function o(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,r(e,t)}n.d(t,{A:()=>o})},8587:(e,t,n)=>{function r(e,t){if(null==e)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.includes(r))continue;n[r]=e[r]}return n}n.d(t,{A:()=>r})}}]);
//# sourceMappingURL=681.d65082c5.chunk.js.map