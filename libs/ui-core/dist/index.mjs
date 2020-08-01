function t(){}function e(t){return t()}function n(){return Object.create(null)}function r(t){t.forEach(e)}function c(t){return"function"==typeof t}function o(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function i(t,e,n,r){if(t){const c=l(t,e,n,r);return t[0](c)}}function l(t,e,n,r){return t[1]&&r?function(t,e){for(const n in e)t[n]=e[n];return t}(n.ctx.slice(),t[1](r(e))):n.ctx}function u(t,e,n,r,c,o,i){const u=function(t,e,n,r){if(t[2]&&r){const c=t[2](r(n));if(void 0===e.dirty)return c;if("object"==typeof c){const t=[],n=Math.max(e.dirty.length,c.length);for(let r=0;r<n;r+=1)t[r]=e.dirty[r]|c[r];return t}return e.dirty|c}return e.dirty}(e,r,c,o);if(u){const c=l(e,n,r,i);t.p(c,u)}}function s(t,e){t.appendChild(e)}function a(t,e,n){t.insertBefore(e,n||null)}function f(t){t.parentNode.removeChild(t)}function d(t){return document.createElement(t)}function p(t){return document.createTextNode(t)}function $(t,e,n,r){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n,r)}function m(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function h(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function g(t,e,n){t.classList[n?"add":"remove"](e)}let y;function v(t){y=t}function b(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach(t=>t(e))}const x=[],E=[],A=[],_=[],w=Promise.resolve();let T=!1;function R(t){A.push(t)}let j=!1;const L=new Set;function N(){if(!j){j=!0;do{for(let t=0;t<x.length;t+=1){const e=x[t];v(e),q(e.$$)}for(x.length=0;E.length;)E.pop()();for(let t=0;t<A.length;t+=1){const e=A[t];L.has(e)||(L.add(e),e())}A.length=0}while(x.length);for(;_.length;)_.pop()();T=!1,j=!1,L.clear()}}function q(t){if(null!==t.fragment){t.update(),r(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(R)}}const S=new Set;function k(t,e){t&&t.i&&(S.delete(t),t.i(e))}function O(t,e,n,r){if(t&&t.o){if(S.has(t))return;S.add(t),(void 0).c.push(()=>{S.delete(t),r&&(n&&t.d(1),r())}),t.o(e)}}function P(t,e){-1===t.$$.dirty[0]&&(x.push(t),T||(T=!0,w.then(N)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function C(o,i,l,u,s,a,d=[-1]){const p=y;v(o);const $=i.props||{},m=o.$$={fragment:null,ctx:null,props:a,update:t,not_equal:s,bound:n(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(p?p.$$.context:[]),callbacks:n(),dirty:d};let h=!1;if(m.ctx=l?l(o,$,(t,e,...n)=>{const r=n.length?n[0]:e;return m.ctx&&s(m.ctx[t],m.ctx[t]=r)&&(m.bound[t]&&m.bound[t](r),h&&P(o,t)),e}):[],m.update(),h=!0,r(m.before_update),m.fragment=!!u&&u(m.ctx),i.target){if(i.hydrate){const t=function(t){return Array.from(t.childNodes)}(i.target);m.fragment&&m.fragment.l(t),t.forEach(f)}else m.fragment&&m.fragment.c();i.intro&&k(o.$$.fragment),function(t,n,o){const{fragment:i,on_mount:l,on_destroy:u,after_update:s}=t.$$;i&&i.m(n,o),R(()=>{const n=l.map(e).filter(c);u?u.push(...n):r(n),t.$$.on_mount=[]}),s.forEach(R)}(o,i.target,i.anchor),N()}v(p)}class D{$destroy(){!function(t,e){const n=t.$$;null!==n.fragment&&(r(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(){}}function I(e){let n;return{c(){n=d("h1"),n.textContent="This is part of the @flia/ui-core"},m(t,e){a(t,n,e)},p:t,i:t,o:t,d(t){t&&f(n)}}}class V extends D{constructor(t){super(),C(this,t,null,I,o,{})}}function B(e){let n,r;return{c(){var t,c,o;n=d("nav"),r=p(e[0]),t="--padding",c=M+"rem",n.style.setProperty(t,c,o?"important":""),m(n,"class","svelte-h8eqod")},m(t,e){a(t,n,e),s(n,r)},p(t,[e]){1&e&&h(r,t[0])},i:t,o:t,d(t){t&&f(n)}}}let M=1;function Y(t,e,n){let{title:r="Default Title"}=e;return t.$set=t=>{"title"in t&&n(0,r=t.title)},[r]}class z extends D{constructor(t){super(),C(this,t,Y,B,o,{title:0})}}function F(t){let e,n;const r=t[1].default,c=i(r,t,t[0],null);return{c(){e=d("section"),c&&c.c(),m(e,"class","svelte-10wugmv")},m(t,r){a(t,e,r),c&&c.m(e,null),n=!0},p(t,[e]){c&&c.p&&1&e&&u(c,r,t,t[0],e,null,null)},i(t){n||(k(c,t),n=!0)},o(t){O(c,t),n=!1},d(t){t&&f(e),c&&c.d(t)}}}function G(t,e,n){let{$$slots:r={},$$scope:c}=e;return t.$set=t=>{"$$scope"in t&&n(0,c=t.$$scope)},[c,r]}class K extends D{constructor(t){super(),C(this,t,G,F,o,{})}}function U(e){let n,c,o,i,l,u,g;return{c(){n=d("label"),c=d("div"),o=p(e[1]),i=p(" "),l=d("input"),m(c,"class","labelText"),m(l,"type",e[3]),m(l,"placeholder",e[2]),l.value=e[0]},m(t,r){a(t,n,r),s(n,c),s(c,o),s(n,i),s(n,l),u||(g=[$(l,"keydown",e[4]),$(l,"change",e[5]),$(l,"input",e[6]),$(l,"focus",e[7]),$(l,"blur",e[8]),$(l,"input",e[9])],u=!0)},p(t,[e]){2&e&&h(o,t[1]),8&e&&m(l,"type",t[3]),4&e&&m(l,"placeholder",t[2]),1&e&&l.value!==t[0]&&(l.value=t[0])},i:t,o:t,d(t){t&&f(n),u=!1,r(g)}}}function W(t,e,n){let{label:r}=e,{placeholder:c}=e,{type:o}=e,{value:i=""}=e;return t.$set=t=>{"label"in t&&n(1,r=t.label),"placeholder"in t&&n(2,c=t.placeholder),"type"in t&&n(3,o=t.type),"value"in t&&n(0,i=t.value)},[i,r,c,o,function(e){b(t,e)},function(e){b(t,e)},function(e){b(t,e)},function(e){b(t,e)},function(e){b(t,e)},({target:t})=>{n(0,i=t.value)}]}class Z extends D{constructor(t){super(),C(this,t,W,U,o,{label:1,placeholder:2,type:3,value:0})}}function H(t){let e,n;const r=t[4].default,c=i(r,t,t[3],null);return{c(){e=d("div"),c&&c.c(),m(e,"class","svelte-1ju58r"),g(e,"column","column"===t[2]),g(e,"space-between","space-between"===t[0]),g(e,"start","start"===t[1]),g(e,"center","center"===t[1]),g(e,"end","end"===t[1])},m(t,r){a(t,e,r),c&&c.m(e,null),n=!0},p(t,[n]){c&&c.p&&8&n&&u(c,r,t,t[3],n,null,null),4&n&&g(e,"column","column"===t[2]),1&n&&g(e,"space-between","space-between"===t[0]),2&n&&g(e,"start","start"===t[1]),2&n&&g(e,"center","center"===t[1]),2&n&&g(e,"end","end"===t[1])},i(t){n||(k(c,t),n=!0)},o(t){O(c,t),n=!1},d(t){t&&f(e),c&&c.d(t)}}}function J(t,e,n){let{justify:r="left"}=e,{align:c="baseline"}=e,{direction:o="row"}=e,{$$slots:i={},$$scope:l}=e;return t.$set=t=>{"justify"in t&&n(0,r=t.justify),"align"in t&&n(1,c=t.align),"direction"in t&&n(2,o=t.direction),"$$scope"in t&&n(3,l=t.$$scope)},[r,c,o,l,i]}class Q extends D{constructor(t){super(),C(this,t,J,H,o,{justify:0,align:1,direction:2})}}function X(t){let e,n,r;return{c(){e=d("picture"),n=d("img"),n.src!==(r=t[0])&&m(n,"src",r),m(n,"alt",t[1]),m(n,"id",t[2]),m(e,"class","svelte-rqania")},m(t,r){a(t,e,r),s(e,n)},p(t,e){1&e&&n.src!==(r=t[0])&&m(n,"src",r),2&e&&m(n,"alt",t[1]),4&e&&m(n,"id",t[2])},d(t){t&&f(e)}}}function tt(e){let n,r=e[0]&&e[0].length>0&&X(e);return{c(){r&&r.c(),n=p("")},m(t,e){r&&r.m(t,e),a(t,n,e)},p(t,[e]){t[0]&&t[0].length>0?r?r.p(t,e):(r=X(t),r.c(),r.m(n.parentNode,n)):r&&(r.d(1),r=null)},i:t,o:t,d(t){r&&r.d(t),t&&f(n)}}}function et(t,e,n){let{imgSrc:r}=e,{imgAlt:c}=e,{id:o}=e;return t.$set=t=>{"imgSrc"in t&&n(0,r=t.imgSrc),"imgAlt"in t&&n(1,c=t.imgAlt),"id"in t&&n(2,o=t.id)},[r,c,o]}class nt extends D{constructor(t){super(),C(this,t,et,tt,o,{imgSrc:0,imgAlt:1,id:2})}}function rt(e){let n,r,c;return{c(){n=d("picture"),r=d("img"),r.src!==(c=e[0])&&m(r,"src",c),m(r,"alt","qrcode"),m(n,"class","svelte-ucm4r")},m(t,e){a(t,n,e),s(n,r)},p(t,[e]){1&e&&r.src!==(c=t[0])&&m(r,"src",c)},i:t,o:t,d(t){t&&f(n)}}}function ct(t,e,n){let r,c,{values:o}=e;return t.$set=t=>{"values"in t&&n(1,o=t.values)},t.$$.update=()=>{2&t.$$.dirty&&n(2,r=`BEGIN:VCARD\n    VERSION:4.0\n    N:${o.name};${o.name};;;\n    FN:${o.name}\n    ORG:${o.organization}\n    TITLE:${o.jobTitle}\n    TEL;TYPE=work;VALUE=uri:${o.phone}\n    ADR;TYPE=WORK;PREF=1;LABEL="${o.address}":;;${o.address}\n    EMAIL;TYPE=WORK:${o.email}\n    REV:20080424T195243Z\n    x-qq:21588891\n    END:VCARD`),4&t.$$.dirty&&n(0,c="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data="+encodeURI(r))},[c,o]}class ot extends D{constructor(t){super(),C(this,t,ct,rt,o,{values:1})}}export{K as Card,V as Component,Q as FlexLayout,nt as Logo,z as Navbar,ot as QRCode,Z as TextInput};
