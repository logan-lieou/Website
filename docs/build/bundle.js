var app=function(){"use strict";function t(){}function n(t){return t()}function e(){return Object.create(null)}function r(t){t.forEach(n)}function o(t){return"function"==typeof t}function c(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}let l,a=!1;function i(t,n,e,r){for(;t<n;){const o=t+(n-t>>1);e(o)<=r?t=o+1:n=o}return t}function s(t,n){a?(!function(t){if(t.hydrate_init)return;t.hydrate_init=!0;const n=t.childNodes,e=new Int32Array(n.length+1),r=new Int32Array(n.length);e[0]=-1;let o=0;for(let t=0;t<n.length;t++){const c=i(1,o+1,(t=>n[e[t]].claim_order),n[t].claim_order)-1;r[t]=e[c]+1;const l=c+1;e[l]=t,o=Math.max(l,o)}const c=[],l=[];let a=n.length-1;for(let t=e[o]+1;0!=t;t=r[t-1]){for(c.push(n[t-1]);a>=t;a--)l.push(n[a]);a--}for(;a>=0;a--)l.push(n[a]);c.reverse(),l.sort(((t,n)=>t.claim_order-n.claim_order));for(let n=0,e=0;n<l.length;n++){for(;e<c.length&&l[n].claim_order>=c[e].claim_order;)e++;const r=e<c.length?c[e]:null;t.insertBefore(l[n],r)}}(t),(void 0===t.actual_end_child||null!==t.actual_end_child&&t.actual_end_child.parentElement!==t)&&(t.actual_end_child=t.firstChild),n!==t.actual_end_child?t.insertBefore(n,t.actual_end_child):t.actual_end_child=n.nextSibling):n.parentNode!==t&&t.appendChild(n)}function u(t){t.parentNode.removeChild(t)}function d(t){l=t}const f=[],h=[],p=[],_=[],m=Promise.resolve();let g=!1;function $(t){p.push(t)}let y=!1;const b=new Set;function x(){if(!y){y=!0;do{for(let t=0;t<f.length;t+=1){const n=f[t];d(n),v(n.$$)}for(d(null),f.length=0;h.length;)h.pop()();for(let t=0;t<p.length;t+=1){const n=p[t];b.has(n)||(b.add(n),n())}p.length=0}while(f.length);for(;_.length;)_.pop()();g=!1,y=!1,b.clear()}}function v(t){if(null!==t.fragment){t.update(),r(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach($)}}const k=new Set;function w(t,n){-1===t.$$.dirty[0]&&(f.push(t),g||(g=!0,m.then(x)),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function F(c,i,s,f,h,p,_=[-1]){const m=l;d(c);const g=c.$$={fragment:null,ctx:null,props:p,update:t,not_equal:h,bound:e(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(m?m.$$.context:i.context||[]),callbacks:e(),dirty:_,skip_bound:!1};let y=!1;if(g.ctx=s?s(c,i.props||{},((t,n,...e)=>{const r=e.length?e[0]:n;return g.ctx&&h(g.ctx[t],g.ctx[t]=r)&&(!g.skip_bound&&g.bound[t]&&g.bound[t](r),y&&w(c,t)),n})):[],g.update(),y=!0,r(g.before_update),g.fragment=!!f&&f(g.ctx),i.target){if(i.hydrate){a=!0;const t=function(t){return Array.from(t.childNodes)}(i.target);g.fragment&&g.fragment.l(t),t.forEach(u)}else g.fragment&&g.fragment.c();i.intro&&((b=c.$$.fragment)&&b.i&&(k.delete(b),b.i(v))),function(t,e,c,l){const{fragment:a,on_mount:i,on_destroy:s,after_update:u}=t.$$;a&&a.m(e,c),l||$((()=>{const e=i.map(n).filter(o);s?s.push(...e):r(e),t.$$.on_mount=[]})),u.forEach($)}(c,i.target,i.anchor,i.customElement),a=!1,x()}var b,v;d(m)}function q(n){let e;return{c(){var t,n,r,o;t="main",e=document.createElement(t),e.innerHTML='<h1 class="svelte-qanqy7">This is a WIP!</h1> \n   <hr/> \n   <center><img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Forig00.deviantart.net%2F0287%2Ff%2F2013%2F274%2F4%2F8%2Fangel_the_bunny_by_wild_sin-d6otbr7.gif&amp;f=1&amp;nofb=1" alt="没有" class="svelte-qanqy7"/></center>',n=e,r="class",null==(o="svelte-qanqy7")?n.removeAttribute(r):n.getAttribute(r)!==o&&n.setAttribute(r,o)},m(t,n){!function(t,n,e){a&&!e?s(t,n):(n.parentNode!==t||e&&n.nextSibling!==e)&&t.insertBefore(n,e||null)}(t,e,n)},p:t,i:t,o:t,d(t){t&&u(e)}}}return new class extends class{$destroy(){!function(t,n){const e=t.$$;null!==e.fragment&&(r(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}(this,1),this.$destroy=t}$on(t,n){const e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(n),()=>{const t=e.indexOf(n);-1!==t&&e.splice(t,1)}}$set(t){var n;this.$$set&&(n=t,0!==Object.keys(n).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}{constructor(t){super(),F(this,t,null,q,c,{})}}({target:document.body,props:{name:"world"}})}();
//# sourceMappingURL=bundle.js.map
