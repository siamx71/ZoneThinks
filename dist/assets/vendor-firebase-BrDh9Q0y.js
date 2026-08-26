const fE=()=>{};var Yh={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PC={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const H=function(s,e){if(!s)throw wr(e)},wr=function(s){return new Error("Firebase Database ("+PC.SDK_VERSION+") INTERNAL ASSERT FAILED: "+s)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NC=function(s){const e=[];let t=0;for(let n=0;n<s.length;n++){let r=s.charCodeAt(n);r<128?e[t++]=r:r<2048?(e[t++]=r>>6|192,e[t++]=r&63|128):(r&64512)===55296&&n+1<s.length&&(s.charCodeAt(n+1)&64512)===56320?(r=65536+((r&1023)<<10)+(s.charCodeAt(++n)&1023),e[t++]=r>>18|240,e[t++]=r>>12&63|128,e[t++]=r>>6&63|128,e[t++]=r&63|128):(e[t++]=r>>12|224,e[t++]=r>>6&63|128,e[t++]=r&63|128)}return e},dE=function(s){const e=[];let t=0,n=0;for(;t<s.length;){const r=s[t++];if(r<128)e[n++]=String.fromCharCode(r);else if(r>191&&r<224){const i=s[t++];e[n++]=String.fromCharCode((r&31)<<6|i&63)}else if(r>239&&r<365){const i=s[t++],o=s[t++],a=s[t++],c=((r&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[n++]=String.fromCharCode(55296+(c>>10)),e[n++]=String.fromCharCode(56320+(c&1023))}else{const i=s[t++],o=s[t++];e[n++]=String.fromCharCode((r&15)<<12|(i&63)<<6|o&63)}}return e.join("")},hB={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(s,e){if(!Array.isArray(s))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,n=[];for(let r=0;r<s.length;r+=3){const i=s[r],o=r+1<s.length,a=o?s[r+1]:0,c=r+2<s.length,B=c?s[r+2]:0,h=i>>2,f=(i&3)<<4|a>>4;let C=(a&15)<<2|B>>6,_=B&63;c||(_=64,o||(C=64)),n.push(t[h],t[f],t[C],t[_])}return n.join("")},encodeString(s,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(s):this.encodeByteArray(NC(s),e)},decodeString(s,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(s):dE(this.decodeStringToByteArray(s,e))},decodeStringToByteArray(s,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,n=[];for(let r=0;r<s.length;){const i=t[s.charAt(r++)],a=r<s.length?t[s.charAt(r)]:0;++r;const B=r<s.length?t[s.charAt(r)]:64;++r;const f=r<s.length?t[s.charAt(r)]:64;if(++r,i==null||a==null||B==null||f==null)throw new CE;const C=i<<2|a>>4;if(n.push(C),B!==64){const _=a<<4&240|B>>2;if(n.push(_),f!==64){const I=B<<6&192|f;n.push(I)}}}return n},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let s=0;s<this.ENCODED_VALS.length;s++)this.byteToCharMap_[s]=this.ENCODED_VALS.charAt(s),this.charToByteMap_[this.byteToCharMap_[s]]=s,this.byteToCharMapWebSafe_[s]=this.ENCODED_VALS_WEBSAFE.charAt(s),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[s]]=s,s>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(s)]=s,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(s)]=s)}}};class CE extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const bC=function(s){const e=NC(s);return hB.encodeByteArray(e,!0)},ca=function(s){return bC(s).replace(/\./g,"")},Ba=function(s){try{return hB.decodeString(s,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pE(s){return OC(void 0,s)}function OC(s,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:s===void 0&&(s={});break;case Array:s=[];break;default:return e}for(const t in e)!e.hasOwnProperty(t)||!gE(t)||(s[t]=OC(s[t],e[t]));return s}function gE(s){return s!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mE(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _E=()=>mE().__FIREBASE_DEFAULTS__,EE=()=>{if(typeof process>"u"||typeof Yh>"u")return;const s=Yh.__FIREBASE_DEFAULTS__;if(s)return JSON.parse(s)},DE=()=>{if(typeof document>"u")return;let s;try{s=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=s&&Ba(s[1]);return e&&JSON.parse(e)},za=()=>{try{return fE()||_E()||EE()||DE()}catch(s){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${s}`);return}},FC=s=>za()?.emulatorHosts?.[s],LC=s=>{const e=FC(s);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const n=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),n]:[e.substring(0,t),n]},kC=()=>za()?.config,xC=s=>za()?.[`_${s}`];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eo{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,n))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function MC(s,e){if(s.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},n=e||"demo-project",r=s.iat||0,i=s.sub||s.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${n}`,aud:n,iat:r,exp:r+3600,auth_time:r,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}},...s};return[ca(JSON.stringify(t)),ca(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function st(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function fB(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(st())}function yE(){const s=za()?.forceEnvironment;if(s==="node")return!0;if(s==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function IE(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function wE(){const s=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof s=="object"&&s.id!==void 0}function VC(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function TE(){const s=st();return s.indexOf("MSIE ")>=0||s.indexOf("Trident/")>=0}function vE(){return PC.NODE_ADMIN===!0}function AE(){return!yE()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function RE(){try{return typeof indexedDB=="object"}catch{return!1}}function SE(){return new Promise((s,e)=>{try{let t=!0;const n="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(n);r.onsuccess=()=>{r.result.close(),t||self.indexedDB.deleteDatabase(n),s(!0)},r.onupgradeneeded=()=>{t=!1},r.onerror=()=>{e(r.error?.message||"")}}catch(t){e(t)}})}function K0(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PE="FirebaseError";class yn extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name=PE,Object.setPrototypeOf(this,yn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,to.prototype.create)}}class to{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},r=`${this.service}/${e}`,i=this.errors[e],o=i?NE(i,n):"Error",a=`${this.serviceName}: ${o} (${r}).`;return new yn(r,a,n)}}function NE(s,e){try{let t=0,n="";for(;t<s.length;){const r=s.indexOf("{$",t);if(r===-1){n+=s.substring(t);break}const i=s.indexOf("}",r+2);if(i===-1){n+=s.substring(t);break}const o=s.substring(r+2,i),a=e[o];n+=s.substring(t,r)+(a!=null?String(a):`<${o}?>`),t=i+1}return n}catch{return s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ti(s){return JSON.parse(s)}function We(s){return JSON.stringify(s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GC=function(s){let e={},t={},n={},r="";try{const i=s.split(".");e=Ti(Ba(i[0])||""),t=Ti(Ba(i[1])||""),r=i[2],n=t.d||{},delete t.d}catch{}return{header:e,claims:t,data:n,signature:r}},bE=function(s){const e=GC(s),t=e.claims;return!!t&&typeof t=="object"&&t.hasOwnProperty("iat")},OE=function(s){const e=GC(s).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function In(s,e){return Object.prototype.hasOwnProperty.call(s,e)}function fr(s,e){if(Object.prototype.hasOwnProperty.call(s,e))return s[e]}function yc(s){for(const e in s)if(Object.prototype.hasOwnProperty.call(s,e))return!1;return!0}function ua(s,e,t){const n={};for(const r in s)Object.prototype.hasOwnProperty.call(s,r)&&(n[r]=e.call(t,s[r],r,s));return n}function jn(s,e){if(s===e)return!0;const t=Object.keys(s),n=Object.keys(e);for(const r of t){if(!n.includes(r))return!1;const i=s[r],o=e[r];if($h(i)&&$h(o)){if(!jn(i,o))return!1}else if(i!==o)return!1}for(const r of n)if(!t.includes(r))return!1;return!0}function $h(s){return s!==null&&typeof s=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tr(s){const e=[];for(const[t,n]of Object.entries(s))Array.isArray(n)?n.forEach(r=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(r))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(n));return e.length?"&"+e.join("&"):""}function ii(s){const e={};return s.replace(/^\?/,"").split("&").forEach(n=>{if(n){const[r,i]=n.split("=");e[decodeURIComponent(r)]=decodeURIComponent(i)}}),e}function oi(s){const e=s.indexOf("?");if(!e)return"";const t=s.indexOf("#",e);return s.substring(e,t>0?t:void 0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FE{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const n=this.W_;if(typeof e=="string")for(let f=0;f<16;f++)n[f]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let f=0;f<16;f++)n[f]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let f=16;f<80;f++){const C=n[f-3]^n[f-8]^n[f-14]^n[f-16];n[f]=(C<<1|C>>>31)&4294967295}let r=this.chain_[0],i=this.chain_[1],o=this.chain_[2],a=this.chain_[3],c=this.chain_[4],B,h;for(let f=0;f<80;f++){f<40?f<20?(B=a^i&(o^a),h=1518500249):(B=i^o^a,h=1859775393):f<60?(B=i&o|a&(i|o),h=2400959708):(B=i^o^a,h=3395469782);const C=(r<<5|r>>>27)+B+c+h+n[f]&4294967295;c=a,a=o,o=(i<<30|i>>>2)&4294967295,i=r,r=C}this.chain_[0]=this.chain_[0]+r&4294967295,this.chain_[1]=this.chain_[1]+i&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+c&4294967295}update(e,t){if(e==null)return;t===void 0&&(t=e.length);const n=t-this.blockSize;let r=0;const i=this.buf_;let o=this.inbuf_;for(;r<t;){if(o===0)for(;r<=n;)this.compress_(e,r),r+=this.blockSize;if(typeof e=="string"){for(;r<t;)if(i[o]=e.charCodeAt(r),++o,++r,o===this.blockSize){this.compress_(i),o=0;break}}else for(;r<t;)if(i[o]=e[r],++o,++r,o===this.blockSize){this.compress_(i),o=0;break}}this.inbuf_=o,this.total_+=t}digest(){const e=[];let t=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let r=this.blockSize-1;r>=56;r--)this.buf_[r]=t&255,t/=256;this.compress_(this.buf_);let n=0;for(let r=0;r<5;r++)for(let i=24;i>=0;i-=8)e[n]=this.chain_[r]>>i&255,++n;return e}}function LE(s,e){const t=new kE(s,e);return t.subscribe.bind(t)}class kE{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(n=>{this.error(n)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,n){let r;if(e===void 0&&t===void 0&&n===void 0)throw new Error("Missing Observer.");xE(e,["next","error","complete"])?r=e:r={next:e,error:t,complete:n},r.next===void 0&&(r.next=Xl),r.error===void 0&&(r.error=Xl),r.complete===void 0&&(r.complete=Xl);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(n){typeof console<"u"&&console.error&&console.error(n)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function xE(s,e){if(typeof s!="object"||s===null)return!1;for(const t of e)if(t in s&&typeof s[t]=="function")return!0;return!1}function Xl(){}function dB(s,e){return`${s} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ME=function(s){const e=[];let t=0;for(let n=0;n<s.length;n++){let r=s.charCodeAt(n);if(r>=55296&&r<=56319){const i=r-55296;n++,H(n<s.length,"Surrogate pair missing trail surrogate.");const o=s.charCodeAt(n)-56320;r=65536+(i<<10)+o}r<128?e[t++]=r:r<2048?(e[t++]=r>>6|192,e[t++]=r&63|128):r<65536?(e[t++]=r>>12|224,e[t++]=r>>6&63|128,e[t++]=r&63|128):(e[t++]=r>>18|240,e[t++]=r>>12&63|128,e[t++]=r>>6&63|128,e[t++]=r&63|128)}return e},Qa=function(s){let e=0;for(let t=0;t<s.length;t++){const n=s.charCodeAt(t);n<128?e++:n<2048?e+=2:n>=55296&&n<=56319?(e+=4,t++):e+=3}return e};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VE=1e3,GE=2,HE=14400*1e3,UE=.5;function W0(s,e=VE,t=GE){const n=e*Math.pow(t,s),r=Math.round(UE*n*(Math.random()-.5)*2);return Math.min(HE,n+r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ye(s){return s&&s._delegate?s._delegate:s}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ls(s){try{return(s.startsWith("http://")||s.startsWith("https://")?new URL(s).hostname:s).endsWith(".cloudworkstations.dev")}catch{return!1}}async function CB(s){return(await fetch(s,{credentials:"include"})).ok}class Kn{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ds="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JE{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const n=new eo;if(this.instancesDeferred.set(t,n),this.isInitialized(t)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:t});r&&n.resolve(r)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e?.identifier),n=e?.optional??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(r){if(n)return null;throw r}else{if(n)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(jE(e))try{this.getOrInitializeService({instanceIdentifier:ds})}catch{}for(const[t,n]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(t);try{const i=this.getOrInitializeService({instanceIdentifier:r});n.resolve(i)}catch{}}}}clearInstance(e=ds){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ds){return this.instances.has(e)}getOptions(e=ds){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);n===a&&o.resolve(r)}return r}onInit(e,t){const n=this.normalizeInstanceIdentifier(t),r=this.onInitCallbacks.get(n)??new Set;r.add(e),this.onInitCallbacks.set(n,r);const i=this.instances.get(n);return i&&e(i,n),()=>{r.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const r of n)try{r(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:qE(e),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch{}return n||null}normalizeInstanceIdentifier(e=ds){return this.component?this.component.multipleInstances?e:ds:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function qE(s){return s===ds?void 0:s}function jE(s){return s.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KE{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new JE(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ce;(function(s){s[s.DEBUG=0]="DEBUG",s[s.VERBOSE=1]="VERBOSE",s[s.INFO=2]="INFO",s[s.WARN=3]="WARN",s[s.ERROR=4]="ERROR",s[s.SILENT=5]="SILENT"})(ce||(ce={}));const WE={debug:ce.DEBUG,verbose:ce.VERBOSE,info:ce.INFO,warn:ce.WARN,error:ce.ERROR,silent:ce.SILENT},zE=ce.INFO,QE={[ce.DEBUG]:"log",[ce.VERBOSE]:"log",[ce.INFO]:"info",[ce.WARN]:"warn",[ce.ERROR]:"error"},YE=(s,e,...t)=>{if(e<s.logLevel)return;const n=new Date().toISOString(),r=QE[e];if(r)console[r](`[${n}]  ${s.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Ya{constructor(e){this.name=e,this._logLevel=zE,this._logHandler=YE,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ce))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?WE[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ce.DEBUG,...e),this._logHandler(this,ce.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ce.VERBOSE,...e),this._logHandler(this,ce.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ce.INFO,...e),this._logHandler(this,ce.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ce.WARN,...e),this._logHandler(this,ce.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ce.ERROR,...e),this._logHandler(this,ce.ERROR,...e)}}const $E=(s,e)=>e.some(t=>s instanceof t);let Xh,Zh;function XE(){return Xh||(Xh=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function ZE(){return Zh||(Zh=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const HC=new WeakMap,Ic=new WeakMap,UC=new WeakMap,Zl=new WeakMap,pB=new WeakMap;function eD(s){const e=new Promise((t,n)=>{const r=()=>{s.removeEventListener("success",i),s.removeEventListener("error",o)},i=()=>{t(Vn(s.result)),r()},o=()=>{n(s.error),r()};s.addEventListener("success",i),s.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&HC.set(t,s)}).catch(()=>{}),pB.set(e,s),e}function tD(s){if(Ic.has(s))return;const e=new Promise((t,n)=>{const r=()=>{s.removeEventListener("complete",i),s.removeEventListener("error",o),s.removeEventListener("abort",o)},i=()=>{t(),r()},o=()=>{n(s.error||new DOMException("AbortError","AbortError")),r()};s.addEventListener("complete",i),s.addEventListener("error",o),s.addEventListener("abort",o)});Ic.set(s,e)}let wc={get(s,e,t){if(s instanceof IDBTransaction){if(e==="done")return Ic.get(s);if(e==="objectStoreNames")return s.objectStoreNames||UC.get(s);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Vn(s[e])},set(s,e,t){return s[e]=t,!0},has(s,e){return s instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in s}};function nD(s){wc=s(wc)}function sD(s){return s===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const n=s.call(ec(this),e,...t);return UC.set(n,e.sort?e.sort():[e]),Vn(n)}:ZE().includes(s)?function(...e){return s.apply(ec(this),e),Vn(HC.get(this))}:function(...e){return Vn(s.apply(ec(this),e))}}function rD(s){return typeof s=="function"?sD(s):(s instanceof IDBTransaction&&tD(s),$E(s,XE())?new Proxy(s,wc):s)}function Vn(s){if(s instanceof IDBRequest)return eD(s);if(Zl.has(s))return Zl.get(s);const e=rD(s);return e!==s&&(Zl.set(s,e),pB.set(e,s)),e}const ec=s=>pB.get(s);function iD(s,e,{blocked:t,upgrade:n,blocking:r,terminated:i}={}){const o=indexedDB.open(s,e),a=Vn(o);return n&&o.addEventListener("upgradeneeded",c=>{n(Vn(o.result),c.oldVersion,c.newVersion,Vn(o.transaction),c)}),t&&o.addEventListener("blocked",c=>t(c.oldVersion,c.newVersion,c)),a.then(c=>{i&&c.addEventListener("close",()=>i()),r&&c.addEventListener("versionchange",B=>r(B.oldVersion,B.newVersion,B))}).catch(()=>{}),a}const oD=["get","getKey","getAll","getAllKeys","count"],aD=["put","add","delete","clear"],tc=new Map;function ef(s,e){if(!(s instanceof IDBDatabase&&!(e in s)&&typeof e=="string"))return;if(tc.get(e))return tc.get(e);const t=e.replace(/FromIndex$/,""),n=e!==t,r=aD.includes(t);if(!(t in(n?IDBIndex:IDBObjectStore).prototype)||!(r||oD.includes(t)))return;const i=async function(o,...a){const c=this.transaction(o,r?"readwrite":"readonly");let B=c.store;return n&&(B=B.index(a.shift())),(await Promise.all([B[t](...a),r&&c.done]))[0]};return tc.set(e,i),i}nD(s=>({...s,get:(e,t,n)=>ef(e,t)||s.get(e,t,n),has:(e,t)=>!!ef(e,t)||s.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lD{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(cD(t)){const n=t.getImmediate();return`${n.library}/${n.version}`}else return null}).filter(t=>t).join(" ")}}function cD(s){return s.getComponent()?.type==="VERSION"}const Tc="@firebase/app",tf="0.16.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pn=new Ya("@firebase/app"),BD="@firebase/app-compat",uD="@firebase/analytics-compat",hD="@firebase/analytics",fD="@firebase/app-check-compat",dD="@firebase/app-check",CD="@firebase/auth",pD="@firebase/auth-compat",gD="@firebase/database",mD="@firebase/data-connect",_D="@firebase/database-compat",ED="@firebase/functions",DD="@firebase/functions-compat",yD="@firebase/installations",ID="@firebase/installations-compat",wD="@firebase/messaging",TD="@firebase/messaging-compat",vD="@firebase/performance",AD="@firebase/performance-compat",RD="@firebase/remote-config",SD="@firebase/remote-config-compat",PD="@firebase/storage",ND="@firebase/storage-compat",bD="@firebase/firestore",OD="@firebase/ai",FD="@firebase/firestore-compat",LD="firebase",kD="12.18.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vc="[DEFAULT]",xD={[Tc]:"fire-core",[BD]:"fire-core-compat",[hD]:"fire-analytics",[uD]:"fire-analytics-compat",[dD]:"fire-app-check",[fD]:"fire-app-check-compat",[CD]:"fire-auth",[pD]:"fire-auth-compat",[gD]:"fire-rtdb",[mD]:"fire-data-connect",[_D]:"fire-rtdb-compat",[ED]:"fire-fn",[DD]:"fire-fn-compat",[yD]:"fire-iid",[ID]:"fire-iid-compat",[wD]:"fire-fcm",[TD]:"fire-fcm-compat",[vD]:"fire-perf",[AD]:"fire-perf-compat",[RD]:"fire-rc",[SD]:"fire-rc-compat",[PD]:"fire-gcs",[ND]:"fire-gcs-compat",[bD]:"fire-fst",[FD]:"fire-fst-compat",[OD]:"fire-vertex","fire-js":"fire-js",[LD]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vi=new Map,MD=new Map,Ac=new Map;function nf(s,e){try{s.container.addComponent(e)}catch(t){pn.debug(`Component ${e.name} failed to register with FirebaseApp ${s.name}`,t)}}function As(s){const e=s.name;if(Ac.has(e))return pn.debug(`There were multiple attempts to register component ${e}.`),!1;Ac.set(e,s);for(const t of vi.values())nf(t,s);for(const t of MD.values())nf(t,s);return!0}function $a(s,e){const t=s.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),s.container.getProvider(e)}function At(s){return s==null?!1:s.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VD={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different {$mismatchedParam}. Existing: '{$oldValue}'. New: '{$newValue}'.","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},an=new to("app","Firebase",VD);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GD{constructor(e,t,n){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new Kn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw an.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ks=kD;function HD(s,e={}){let t=s;typeof e!="object"&&(e={name:e});const n={name:vc,automaticDataCollectionEnabled:!0,...e},r=n.name;if(typeof r!="string"||!r)throw an.create("bad-app-name",{appName:String(r)});if(t||(t=kC()),!t)throw an.create("no-options");const i=vi.get(r);if(i)if(jn(t,i.options)){if(jn(n,i.config))return i;throw an.create("duplicate-app",{appName:r,mismatchedParam:"config",oldValue:JSON.stringify(i.config),newValue:JSON.stringify(n)})}else throw an.create("duplicate-app",{appName:r,mismatchedParam:"options",oldValue:JSON.stringify(i.options),newValue:JSON.stringify(t)});const o=new KE(r);for(const c of Ac.values())o.addComponent(c);const a=new GD(t,n,o);return vi.set(r,a),a}function gB(s=vc){const e=vi.get(s);if(!e&&s===vc&&kC())return HD();if(!e)throw an.create("no-app",{appName:s});return e}function z0(){return Array.from(vi.values())}function Qt(s,e,t){let n=xD[s]??s;t&&(n+=`-${t}`);const r=n.match(/\s|\//),i=e.match(/\s|\//);if(r||i){const o=[`Unable to register library "${n}" with version "${e}":`];r&&o.push(`library name "${n}" contains illegal characters (whitespace or "/")`),r&&i&&o.push("and"),i&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),pn.warn(o.join(" "));return}As(new Kn(`${n}-version`,()=>({library:n,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UD="firebase-heartbeat-database",JD=1,Ai="firebase-heartbeat-store";let nc=null;function JC(){return nc||(nc=iD(UD,JD,{upgrade:(s,e)=>{switch(e){case 0:try{s.createObjectStore(Ai)}catch(t){console.warn(t)}}}}).catch(s=>{throw an.create("idb-open",{originalErrorMessage:s.message})})),nc}async function qD(s){try{const t=(await JC()).transaction(Ai),n=await t.objectStore(Ai).get(qC(s));return await t.done,n}catch(e){if(e instanceof yn)pn.warn(e.message);else{const t=an.create("idb-get",{originalErrorMessage:e?.message});pn.warn(t.message)}}}async function sf(s,e){try{const n=(await JC()).transaction(Ai,"readwrite");await n.objectStore(Ai).put(e,qC(s)),await n.done}catch(t){if(t instanceof yn)pn.warn(t.message);else{const n=an.create("idb-set",{originalErrorMessage:t?.message});pn.warn(n.message)}}}function qC(s){return`${s.name}!${s.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jD=1024,KD=30;class WD{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new QD(t),this._heartbeatsCachePromise=this._storage.read().then(n=>(this._heartbeatsCache=n,n))}async triggerHeartbeat(){try{const t=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),n=rf();if(this._heartbeatsCache?.heartbeats==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null)||this._heartbeatsCache.lastSentHeartbeatDate===n||this._heartbeatsCache.heartbeats.some(r=>r.date===n))return;if(this._heartbeatsCache.heartbeats.push({date:n,agent:t}),this._heartbeatsCache.heartbeats.length>KD){const r=YD(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(r,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(e){pn.warn(e)}}async getHeartbeatsHeader(){try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=rf(),{heartbeatsToSend:t,unsentEntries:n}=zD(this._heartbeatsCache.heartbeats),r=ca(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}catch(e){return pn.warn(e),""}}}function rf(){return new Date().toISOString().substring(0,10)}function zD(s,e=jD){const t=[];let n=s.slice();for(const r of s){const i=t.find(o=>o.agent===r.agent);if(i){if(i.dates.push(r.date),of(t)>e){i.dates.pop();break}}else if(t.push({agent:r.agent,dates:[r.date]}),of(t)>e){t.pop();break}n=n.slice(1)}return{heartbeatsToSend:t,unsentEntries:n}}class QD{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return RE()?SE().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await qD(this.app);return t?.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const n=await this.read();return sf(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const n=await this.read();return sf(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}else return}}function of(s){return ca(JSON.stringify({version:2,heartbeats:s})).length}function YD(s){if(s.length===0)return-1;let e=0,t=s[0].date;for(let n=1;n<s.length;n++)s[n].date<t&&(t=s[n].date,e=n);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $D(s){As(new Kn("platform-logger",e=>new lD(e),"PRIVATE")),As(new Kn("heartbeat",e=>new WD(e),"PRIVATE")),Qt(Tc,tf,s),Qt(Tc,tf,"esm2020"),Qt("fire-js","")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */$D("");var XD="firebase",ZD="12.18.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Qt(XD,ZD,"app");var af=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Gn,jC;(function(){var s;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(A,E){function y(){}y.prototype=E.prototype,A.F=E.prototype,A.prototype=new y,A.prototype.constructor=A,A.D=function(R,v,P){for(var D=Array(arguments.length-2),lt=2;lt<arguments.length;lt++)D[lt-2]=arguments[lt];return E.prototype[v].apply(R,D)}}function t(){this.blockSize=-1}function n(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(n,t),n.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function r(A,E,y){y||(y=0);const R=Array(16);if(typeof E=="string")for(var v=0;v<16;++v)R[v]=E.charCodeAt(y++)|E.charCodeAt(y++)<<8|E.charCodeAt(y++)<<16|E.charCodeAt(y++)<<24;else for(v=0;v<16;++v)R[v]=E[y++]|E[y++]<<8|E[y++]<<16|E[y++]<<24;E=A.g[0],y=A.g[1],v=A.g[2];let P=A.g[3],D;D=E+(P^y&(v^P))+R[0]+3614090360&4294967295,E=y+(D<<7&4294967295|D>>>25),D=P+(v^E&(y^v))+R[1]+3905402710&4294967295,P=E+(D<<12&4294967295|D>>>20),D=v+(y^P&(E^y))+R[2]+606105819&4294967295,v=P+(D<<17&4294967295|D>>>15),D=y+(E^v&(P^E))+R[3]+3250441966&4294967295,y=v+(D<<22&4294967295|D>>>10),D=E+(P^y&(v^P))+R[4]+4118548399&4294967295,E=y+(D<<7&4294967295|D>>>25),D=P+(v^E&(y^v))+R[5]+1200080426&4294967295,P=E+(D<<12&4294967295|D>>>20),D=v+(y^P&(E^y))+R[6]+2821735955&4294967295,v=P+(D<<17&4294967295|D>>>15),D=y+(E^v&(P^E))+R[7]+4249261313&4294967295,y=v+(D<<22&4294967295|D>>>10),D=E+(P^y&(v^P))+R[8]+1770035416&4294967295,E=y+(D<<7&4294967295|D>>>25),D=P+(v^E&(y^v))+R[9]+2336552879&4294967295,P=E+(D<<12&4294967295|D>>>20),D=v+(y^P&(E^y))+R[10]+4294925233&4294967295,v=P+(D<<17&4294967295|D>>>15),D=y+(E^v&(P^E))+R[11]+2304563134&4294967295,y=v+(D<<22&4294967295|D>>>10),D=E+(P^y&(v^P))+R[12]+1804603682&4294967295,E=y+(D<<7&4294967295|D>>>25),D=P+(v^E&(y^v))+R[13]+4254626195&4294967295,P=E+(D<<12&4294967295|D>>>20),D=v+(y^P&(E^y))+R[14]+2792965006&4294967295,v=P+(D<<17&4294967295|D>>>15),D=y+(E^v&(P^E))+R[15]+1236535329&4294967295,y=v+(D<<22&4294967295|D>>>10),D=E+(v^P&(y^v))+R[1]+4129170786&4294967295,E=y+(D<<5&4294967295|D>>>27),D=P+(y^v&(E^y))+R[6]+3225465664&4294967295,P=E+(D<<9&4294967295|D>>>23),D=v+(E^y&(P^E))+R[11]+643717713&4294967295,v=P+(D<<14&4294967295|D>>>18),D=y+(P^E&(v^P))+R[0]+3921069994&4294967295,y=v+(D<<20&4294967295|D>>>12),D=E+(v^P&(y^v))+R[5]+3593408605&4294967295,E=y+(D<<5&4294967295|D>>>27),D=P+(y^v&(E^y))+R[10]+38016083&4294967295,P=E+(D<<9&4294967295|D>>>23),D=v+(E^y&(P^E))+R[15]+3634488961&4294967295,v=P+(D<<14&4294967295|D>>>18),D=y+(P^E&(v^P))+R[4]+3889429448&4294967295,y=v+(D<<20&4294967295|D>>>12),D=E+(v^P&(y^v))+R[9]+568446438&4294967295,E=y+(D<<5&4294967295|D>>>27),D=P+(y^v&(E^y))+R[14]+3275163606&4294967295,P=E+(D<<9&4294967295|D>>>23),D=v+(E^y&(P^E))+R[3]+4107603335&4294967295,v=P+(D<<14&4294967295|D>>>18),D=y+(P^E&(v^P))+R[8]+1163531501&4294967295,y=v+(D<<20&4294967295|D>>>12),D=E+(v^P&(y^v))+R[13]+2850285829&4294967295,E=y+(D<<5&4294967295|D>>>27),D=P+(y^v&(E^y))+R[2]+4243563512&4294967295,P=E+(D<<9&4294967295|D>>>23),D=v+(E^y&(P^E))+R[7]+1735328473&4294967295,v=P+(D<<14&4294967295|D>>>18),D=y+(P^E&(v^P))+R[12]+2368359562&4294967295,y=v+(D<<20&4294967295|D>>>12),D=E+(y^v^P)+R[5]+4294588738&4294967295,E=y+(D<<4&4294967295|D>>>28),D=P+(E^y^v)+R[8]+2272392833&4294967295,P=E+(D<<11&4294967295|D>>>21),D=v+(P^E^y)+R[11]+1839030562&4294967295,v=P+(D<<16&4294967295|D>>>16),D=y+(v^P^E)+R[14]+4259657740&4294967295,y=v+(D<<23&4294967295|D>>>9),D=E+(y^v^P)+R[1]+2763975236&4294967295,E=y+(D<<4&4294967295|D>>>28),D=P+(E^y^v)+R[4]+1272893353&4294967295,P=E+(D<<11&4294967295|D>>>21),D=v+(P^E^y)+R[7]+4139469664&4294967295,v=P+(D<<16&4294967295|D>>>16),D=y+(v^P^E)+R[10]+3200236656&4294967295,y=v+(D<<23&4294967295|D>>>9),D=E+(y^v^P)+R[13]+681279174&4294967295,E=y+(D<<4&4294967295|D>>>28),D=P+(E^y^v)+R[0]+3936430074&4294967295,P=E+(D<<11&4294967295|D>>>21),D=v+(P^E^y)+R[3]+3572445317&4294967295,v=P+(D<<16&4294967295|D>>>16),D=y+(v^P^E)+R[6]+76029189&4294967295,y=v+(D<<23&4294967295|D>>>9),D=E+(y^v^P)+R[9]+3654602809&4294967295,E=y+(D<<4&4294967295|D>>>28),D=P+(E^y^v)+R[12]+3873151461&4294967295,P=E+(D<<11&4294967295|D>>>21),D=v+(P^E^y)+R[15]+530742520&4294967295,v=P+(D<<16&4294967295|D>>>16),D=y+(v^P^E)+R[2]+3299628645&4294967295,y=v+(D<<23&4294967295|D>>>9),D=E+(v^(y|~P))+R[0]+4096336452&4294967295,E=y+(D<<6&4294967295|D>>>26),D=P+(y^(E|~v))+R[7]+1126891415&4294967295,P=E+(D<<10&4294967295|D>>>22),D=v+(E^(P|~y))+R[14]+2878612391&4294967295,v=P+(D<<15&4294967295|D>>>17),D=y+(P^(v|~E))+R[5]+4237533241&4294967295,y=v+(D<<21&4294967295|D>>>11),D=E+(v^(y|~P))+R[12]+1700485571&4294967295,E=y+(D<<6&4294967295|D>>>26),D=P+(y^(E|~v))+R[3]+2399980690&4294967295,P=E+(D<<10&4294967295|D>>>22),D=v+(E^(P|~y))+R[10]+4293915773&4294967295,v=P+(D<<15&4294967295|D>>>17),D=y+(P^(v|~E))+R[1]+2240044497&4294967295,y=v+(D<<21&4294967295|D>>>11),D=E+(v^(y|~P))+R[8]+1873313359&4294967295,E=y+(D<<6&4294967295|D>>>26),D=P+(y^(E|~v))+R[15]+4264355552&4294967295,P=E+(D<<10&4294967295|D>>>22),D=v+(E^(P|~y))+R[6]+2734768916&4294967295,v=P+(D<<15&4294967295|D>>>17),D=y+(P^(v|~E))+R[13]+1309151649&4294967295,y=v+(D<<21&4294967295|D>>>11),D=E+(v^(y|~P))+R[4]+4149444226&4294967295,E=y+(D<<6&4294967295|D>>>26),D=P+(y^(E|~v))+R[11]+3174756917&4294967295,P=E+(D<<10&4294967295|D>>>22),D=v+(E^(P|~y))+R[2]+718787259&4294967295,v=P+(D<<15&4294967295|D>>>17),D=y+(P^(v|~E))+R[9]+3951481745&4294967295,A.g[0]=A.g[0]+E&4294967295,A.g[1]=A.g[1]+(v+(D<<21&4294967295|D>>>11))&4294967295,A.g[2]=A.g[2]+v&4294967295,A.g[3]=A.g[3]+P&4294967295}n.prototype.v=function(A,E){E===void 0&&(E=A.length);const y=E-this.blockSize,R=this.C;let v=this.h,P=0;for(;P<E;){if(v==0)for(;P<=y;)r(this,A,P),P+=this.blockSize;if(typeof A=="string"){for(;P<E;)if(R[v++]=A.charCodeAt(P++),v==this.blockSize){r(this,R),v=0;break}}else for(;P<E;)if(R[v++]=A[P++],v==this.blockSize){r(this,R),v=0;break}}this.h=v,this.o+=E},n.prototype.A=function(){var A=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);A[0]=128;for(var E=1;E<A.length-8;++E)A[E]=0;E=this.o*8;for(var y=A.length-8;y<A.length;++y)A[y]=E&255,E/=256;for(this.v(A),A=Array(16),E=0,y=0;y<4;++y)for(let R=0;R<32;R+=8)A[E++]=this.g[y]>>>R&255;return A};function i(A,E){var y=a;return Object.prototype.hasOwnProperty.call(y,A)?y[A]:y[A]=E(A)}function o(A,E){this.h=E;const y=[];let R=!0;for(let v=A.length-1;v>=0;v--){const P=A[v]|0;R&&P==E||(y[v]=P,R=!1)}this.g=y}var a={};function c(A){return-128<=A&&A<128?i(A,function(E){return new o([E|0],E<0?-1:0)}):new o([A|0],A<0?-1:0)}function B(A){if(isNaN(A)||!isFinite(A))return f;if(A<0)return V(B(-A));const E=[];let y=1;for(let R=0;A>=y;R++)E[R]=A/y|0,y*=4294967296;return new o(E,0)}function h(A,E){if(A.length==0)throw Error("number format error: empty string");if(E=E||10,E<2||36<E)throw Error("radix out of range: "+E);if(A.charAt(0)=="-")return V(h(A.substring(1),E));if(A.indexOf("-")>=0)throw Error('number format error: interior "-" character');const y=B(Math.pow(E,8));let R=f;for(let P=0;P<A.length;P+=8){var v=Math.min(8,A.length-P);const D=parseInt(A.substring(P,P+v),E);v<8?(v=B(Math.pow(E,v)),R=R.j(v).add(B(D))):(R=R.j(y),R=R.add(B(D)))}return R}var f=c(0),C=c(1),_=c(16777216);s=o.prototype,s.m=function(){if(O(this))return-V(this).m();let A=0,E=1;for(let y=0;y<this.g.length;y++){const R=this.i(y);A+=(R>=0?R:4294967296+R)*E,E*=4294967296}return A},s.toString=function(A){if(A=A||10,A<2||36<A)throw Error("radix out of range: "+A);if(I(this))return"0";if(O(this))return"-"+V(this).toString(A);const E=B(Math.pow(A,6));var y=this;let R="";for(;;){const v=Re(y,E).g;y=q(y,v.j(E));let P=((y.g.length>0?y.g[0]:y.h)>>>0).toString(A);if(y=v,I(y))return P+R;for(;P.length<6;)P="0"+P;R=P+R}},s.i=function(A){return A<0?0:A<this.g.length?this.g[A]:this.h};function I(A){if(A.h!=0)return!1;for(let E=0;E<A.g.length;E++)if(A.g[E]!=0)return!1;return!0}function O(A){return A.h==-1}s.l=function(A){return A=q(this,A),O(A)?-1:I(A)?0:1};function V(A){const E=A.g.length,y=[];for(let R=0;R<E;R++)y[R]=~A.g[R];return new o(y,~A.h).add(C)}s.abs=function(){return O(this)?V(this):this},s.add=function(A){const E=Math.max(this.g.length,A.g.length),y=[];let R=0;for(let v=0;v<=E;v++){let P=R+(this.i(v)&65535)+(A.i(v)&65535),D=(P>>>16)+(this.i(v)>>>16)+(A.i(v)>>>16);R=D>>>16,P&=65535,D&=65535,y[v]=D<<16|P}return new o(y,y[y.length-1]&-2147483648?-1:0)};function q(A,E){return A.add(V(E))}s.j=function(A){if(I(this)||I(A))return f;if(O(this))return O(A)?V(this).j(V(A)):V(V(this).j(A));if(O(A))return V(this.j(V(A)));if(this.l(_)<0&&A.l(_)<0)return B(this.m()*A.m());const E=this.g.length+A.g.length,y=[];for(var R=0;R<2*E;R++)y[R]=0;for(R=0;R<this.g.length;R++)for(let v=0;v<A.g.length;v++){const P=this.i(R)>>>16,D=this.i(R)&65535,lt=A.i(v)>>>16,ls=A.i(v)&65535;y[2*R+2*v]+=D*ls,re(y,2*R+2*v),y[2*R+2*v+1]+=P*ls,re(y,2*R+2*v+1),y[2*R+2*v+1]+=D*lt,re(y,2*R+2*v+1),y[2*R+2*v+2]+=P*lt,re(y,2*R+2*v+2)}for(A=0;A<E;A++)y[A]=y[2*A+1]<<16|y[2*A];for(A=E;A<2*E;A++)y[A]=0;return new o(y,0)};function re(A,E){for(;(A[E]&65535)!=A[E];)A[E+1]+=A[E]>>>16,A[E]&=65535,E++}function pe(A,E){this.g=A,this.h=E}function Re(A,E){if(I(E))throw Error("division by zero");if(I(A))return new pe(f,f);if(O(A))return E=Re(V(A),E),new pe(V(E.g),V(E.h));if(O(E))return E=Re(A,V(E)),new pe(V(E.g),E.h);if(A.g.length>30){if(O(A)||O(E))throw Error("slowDivide_ only works with positive integers.");for(var y=C,R=E;R.l(A)<=0;)y=yt(y),R=yt(R);var v=ve(y,1),P=ve(R,1);for(R=ve(R,2),y=ve(y,2);!I(R);){var D=P.add(R);D.l(A)<=0&&(v=v.add(y),P=D),R=ve(R,1),y=ve(y,1)}return E=q(A,v.j(E)),new pe(v,E)}for(v=f;A.l(E)>=0;){for(y=Math.max(1,Math.floor(A.m()/E.m())),R=Math.ceil(Math.log(y)/Math.LN2),R=R<=48?1:Math.pow(2,R-48),P=B(y),D=P.j(E);O(D)||D.l(A)>0;)y-=R,P=B(y),D=P.j(E);I(P)&&(P=C),v=v.add(P),A=q(A,D)}return new pe(v,A)}s.B=function(A){return Re(this,A).h},s.and=function(A){const E=Math.max(this.g.length,A.g.length),y=[];for(let R=0;R<E;R++)y[R]=this.i(R)&A.i(R);return new o(y,this.h&A.h)},s.or=function(A){const E=Math.max(this.g.length,A.g.length),y=[];for(let R=0;R<E;R++)y[R]=this.i(R)|A.i(R);return new o(y,this.h|A.h)},s.xor=function(A){const E=Math.max(this.g.length,A.g.length),y=[];for(let R=0;R<E;R++)y[R]=this.i(R)^A.i(R);return new o(y,this.h^A.h)};function yt(A){const E=A.g.length+1,y=[];for(let R=0;R<E;R++)y[R]=A.i(R)<<1|A.i(R-1)>>>31;return new o(y,A.h)}function ve(A,E){const y=E>>5;E%=32;const R=A.g.length-y,v=[];for(let P=0;P<R;P++)v[P]=E>0?A.i(P+y)>>>E|A.i(P+y+1)<<32-E:A.i(P+y);return new o(v,A.h)}n.prototype.digest=n.prototype.A,n.prototype.reset=n.prototype.u,n.prototype.update=n.prototype.v,jC=n,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.B,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=B,o.fromString=h,Gn=o}).apply(typeof af<"u"?af:typeof self<"u"?self:typeof window<"u"?window:{});var Mo=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var KC,ai,WC,Xo,Rc,zC,QC,YC;(function(){var s,e=Object.defineProperty;function t(l){l=[typeof globalThis=="object"&&globalThis,l,typeof window=="object"&&window,typeof self=="object"&&self,typeof Mo=="object"&&Mo];for(var u=0;u<l.length;++u){var d=l[u];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var n=t(this);function r(l,u){if(u)e:{var d=n;l=l.split(".");for(var p=0;p<l.length-1;p++){var S=l[p];if(!(S in d))break e;d=d[S]}l=l[l.length-1],p=d[l],u=u(p),u!=p&&u!=null&&e(d,l,{configurable:!0,writable:!0,value:u})}}r("Symbol.dispose",function(l){return l||Symbol("Symbol.dispose")}),r("Array.prototype.values",function(l){return l||function(){return this[Symbol.iterator]()}}),r("Object.entries",function(l){return l||function(u){var d=[],p;for(p in u)Object.prototype.hasOwnProperty.call(u,p)&&d.push([p,u[p]]);return d}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var i=i||{},o=this||self;function a(l){var u=typeof l;return u=="object"&&l!=null||u=="function"}function c(l,u,d){return l.call.apply(l.bind,arguments)}function B(l,u,d){return B=c,B.apply(null,arguments)}function h(l,u){var d=Array.prototype.slice.call(arguments,1);return function(){var p=d.slice();return p.push.apply(p,arguments),l.apply(this,p)}}function f(l,u){function d(){}d.prototype=u.prototype,l.Z=u.prototype,l.prototype=new d,l.prototype.constructor=l,l.Ob=function(p,S,N){for(var U=Array(arguments.length-2),ie=2;ie<arguments.length;ie++)U[ie-2]=arguments[ie];return u.prototype[S].apply(p,U)}}var C=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?l=>l&&AsyncContext.Snapshot.wrap(l):l=>l;function _(l){const u=l.length;if(u>0){const d=Array(u);for(let p=0;p<u;p++)d[p]=l[p];return d}return[]}function I(l,u){for(let p=1;p<arguments.length;p++){const S=arguments[p];var d=typeof S;if(d=d!="object"?d:S?Array.isArray(S)?"array":d:"null",d=="array"||d=="object"&&typeof S.length=="number"){d=l.length||0;const N=S.length||0;l.length=d+N;for(let U=0;U<N;U++)l[d+U]=S[U]}else l.push(S)}}class O{constructor(u,d){this.i=u,this.j=d,this.h=0,this.g=null}get(){let u;return this.h>0?(this.h--,u=this.g,this.g=u.next,u.next=null):u=this.i(),u}}function V(l){o.setTimeout(()=>{throw l},0)}function q(){var l=A;let u=null;return l.g&&(u=l.g,l.g=l.g.next,l.g||(l.h=null),u.next=null),u}class re{constructor(){this.h=this.g=null}add(u,d){const p=pe.get();p.set(u,d),this.h?this.h.next=p:this.g=p,this.h=p}}var pe=new O(()=>new Re,l=>l.reset());class Re{constructor(){this.next=this.g=this.h=null}set(u,d){this.h=u,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let yt,ve=!1,A=new re,E=()=>{const l=Promise.resolve(void 0);yt=()=>{l.then(y)}};function y(){for(var l;l=q();){try{l.h.call(l.g)}catch(d){V(d)}var u=pe;u.j(l),u.h<100&&(u.h++,l.next=u.g,u.g=l)}ve=!1}function R(){this.u=this.u,this.C=this.C}R.prototype.u=!1,R.prototype.dispose=function(){this.u||(this.u=!0,this.N())},R.prototype[Symbol.dispose]=function(){this.dispose()},R.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function v(l,u){this.type=l,this.g=this.target=u,this.defaultPrevented=!1}v.prototype.h=function(){this.defaultPrevented=!0};var P=(function(){if(!o.addEventListener||!Object.defineProperty)return!1;var l=!1,u=Object.defineProperty({},"passive",{get:function(){l=!0}});try{const d=()=>{};o.addEventListener("test",d,u),o.removeEventListener("test",d,u)}catch{}return l})();function D(l){return/^[\s\xa0]*$/.test(l)}function lt(l,u){v.call(this,l?l.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,l&&this.init(l,u)}f(lt,v),lt.prototype.init=function(l,u){const d=this.type=l.type,p=l.changedTouches&&l.changedTouches.length?l.changedTouches[0]:null;this.target=l.target||l.srcElement,this.g=u,u=l.relatedTarget,u||(d=="mouseover"?u=l.fromElement:d=="mouseout"&&(u=l.toElement)),this.relatedTarget=u,p?(this.clientX=p.clientX!==void 0?p.clientX:p.pageX,this.clientY=p.clientY!==void 0?p.clientY:p.pageY,this.screenX=p.screenX||0,this.screenY=p.screenY||0):(this.clientX=l.clientX!==void 0?l.clientX:l.pageX,this.clientY=l.clientY!==void 0?l.clientY:l.pageY,this.screenX=l.screenX||0,this.screenY=l.screenY||0),this.button=l.button,this.key=l.key||"",this.ctrlKey=l.ctrlKey,this.altKey=l.altKey,this.shiftKey=l.shiftKey,this.metaKey=l.metaKey,this.pointerId=l.pointerId||0,this.pointerType=l.pointerType,this.state=l.state,this.i=l,l.defaultPrevented&&lt.Z.h.call(this)},lt.prototype.h=function(){lt.Z.h.call(this);const l=this.i;l.preventDefault?l.preventDefault():l.returnValue=!1};var ls="closure_listenable_"+(Math.random()*1e6|0),L_=0;function k_(l,u,d,p,S){this.listener=l,this.proxy=null,this.src=u,this.type=d,this.capture=!!p,this.ha=S,this.key=++L_,this.da=this.fa=!1}function Io(l){l.da=!0,l.listener=null,l.proxy=null,l.src=null,l.ha=null}function wo(l,u,d){for(const p in l)u.call(d,l[p],p,l)}function x_(l,u){for(const d in l)u.call(void 0,l[d],d,l)}function Qu(l){const u={};for(const d in l)u[d]=l[d];return u}const Yu="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function $u(l,u){let d,p;for(let S=1;S<arguments.length;S++){p=arguments[S];for(d in p)l[d]=p[d];for(let N=0;N<Yu.length;N++)d=Yu[N],Object.prototype.hasOwnProperty.call(p,d)&&(l[d]=p[d])}}function To(l){this.src=l,this.g={},this.h=0}To.prototype.add=function(l,u,d,p,S){const N=l.toString();l=this.g[N],l||(l=this.g[N]=[],this.h++);const U=Sl(l,u,p,S);return U>-1?(u=l[U],d||(u.fa=!1)):(u=new k_(u,this.src,N,!!p,S),u.fa=d,l.push(u)),u};function Rl(l,u){const d=u.type;if(d in l.g){var p=l.g[d],S=Array.prototype.indexOf.call(p,u,void 0),N;(N=S>=0)&&Array.prototype.splice.call(p,S,1),N&&(Io(u),l.g[d].length==0&&(delete l.g[d],l.h--))}}function Sl(l,u,d,p){for(let S=0;S<l.length;++S){const N=l[S];if(!N.da&&N.listener==u&&N.capture==!!d&&N.ha==p)return S}return-1}var Pl="closure_lm_"+(Math.random()*1e6|0),Nl={};function Xu(l,u,d,p,S){if(Array.isArray(u)){for(let N=0;N<u.length;N++)Xu(l,u[N],d,p,S);return null}return d=th(d),l&&l[ls]?l.J(u,d,a(p)?!!p.capture:!1,S):M_(l,u,d,!1,p,S)}function M_(l,u,d,p,S,N){if(!u)throw Error("Invalid event type");const U=a(S)?!!S.capture:!!S;let ie=Ol(l);if(ie||(l[Pl]=ie=new To(l)),d=ie.add(u,d,p,U,N),d.proxy)return d;if(p=V_(),d.proxy=p,p.src=l,p.listener=d,l.addEventListener)P||(S=U),S===void 0&&(S=!1),l.addEventListener(u.toString(),p,S);else if(l.attachEvent)l.attachEvent(eh(u.toString()),p);else if(l.addListener&&l.removeListener)l.addListener(p);else throw Error("addEventListener and attachEvent are unavailable.");return d}function V_(){function l(d){return u.call(l.src,l.listener,d)}const u=G_;return l}function Zu(l,u,d,p,S){if(Array.isArray(u))for(var N=0;N<u.length;N++)Zu(l,u[N],d,p,S);else p=a(p)?!!p.capture:!!p,d=th(d),l&&l[ls]?(l=l.i,N=String(u).toString(),N in l.g&&(u=l.g[N],d=Sl(u,d,p,S),d>-1&&(Io(u[d]),Array.prototype.splice.call(u,d,1),u.length==0&&(delete l.g[N],l.h--)))):l&&(l=Ol(l))&&(u=l.g[u.toString()],l=-1,u&&(l=Sl(u,d,p,S)),(d=l>-1?u[l]:null)&&bl(d))}function bl(l){if(typeof l!="number"&&l&&!l.da){var u=l.src;if(u&&u[ls])Rl(u.i,l);else{var d=l.type,p=l.proxy;u.removeEventListener?u.removeEventListener(d,p,l.capture):u.detachEvent?u.detachEvent(eh(d),p):u.addListener&&u.removeListener&&u.removeListener(p),(d=Ol(u))?(Rl(d,l),d.h==0&&(d.src=null,u[Pl]=null)):Io(l)}}}function eh(l){return l in Nl?Nl[l]:Nl[l]="on"+l}function G_(l,u){if(l.da)l=!0;else{u=new lt(u,this);const d=l.listener,p=l.ha||l.src;l.fa&&bl(l),l=d.call(p,u)}return l}function Ol(l){return l=l[Pl],l instanceof To?l:null}var Fl="__closure_events_fn_"+(Math.random()*1e9>>>0);function th(l){return typeof l=="function"?l:(l[Fl]||(l[Fl]=function(u){return l.handleEvent(u)}),l[Fl])}function Xe(){R.call(this),this.i=new To(this),this.M=this,this.G=null}f(Xe,R),Xe.prototype[ls]=!0,Xe.prototype.removeEventListener=function(l,u,d,p){Zu(this,l,u,d,p)};function it(l,u){var d,p=l.G;if(p)for(d=[];p;p=p.G)d.push(p);if(l=l.M,p=u.type||u,typeof u=="string")u=new v(u,l);else if(u instanceof v)u.target=u.target||l;else{var S=u;u=new v(p,l),$u(u,S)}S=!0;let N,U;if(d)for(U=d.length-1;U>=0;U--)N=u.g=d[U],S=vo(N,p,!0,u)&&S;if(N=u.g=l,S=vo(N,p,!0,u)&&S,S=vo(N,p,!1,u)&&S,d)for(U=0;U<d.length;U++)N=u.g=d[U],S=vo(N,p,!1,u)&&S}Xe.prototype.N=function(){if(Xe.Z.N.call(this),this.i){var l=this.i;for(const u in l.g){const d=l.g[u];for(let p=0;p<d.length;p++)Io(d[p]);delete l.g[u],l.h--}}this.G=null},Xe.prototype.J=function(l,u,d,p){return this.i.add(String(l),u,!1,d,p)},Xe.prototype.K=function(l,u,d,p){return this.i.add(String(l),u,!0,d,p)};function vo(l,u,d,p){if(u=l.i.g[String(u)],!u)return!0;u=u.concat();let S=!0;for(let N=0;N<u.length;++N){const U=u[N];if(U&&!U.da&&U.capture==d){const ie=U.listener,xe=U.ha||U.src;U.fa&&Rl(l.i,U),S=ie.call(xe,p)!==!1&&S}}return S&&!p.defaultPrevented}function H_(l,u){if(typeof l!="function")if(l&&typeof l.handleEvent=="function")l=B(l.handleEvent,l);else throw Error("Invalid listener argument");return Number(u)>2147483647?-1:o.setTimeout(l,u||0)}function nh(l){l.g=H_(()=>{l.g=null,l.i&&(l.i=!1,nh(l))},l.l);const u=l.h;l.h=null,l.m.apply(null,u)}class U_ extends R{constructor(u,d){super(),this.m=u,this.l=d,this.h=null,this.i=!1,this.g=null}j(u){this.h=arguments,this.g?this.i=!0:nh(this)}N(){super.N(),this.g&&(o.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function xr(l){R.call(this),this.h=l,this.g={}}f(xr,R);var sh=[];function rh(l){wo(l.g,function(u,d){this.g.hasOwnProperty(d)&&bl(u)},l),l.g={}}xr.prototype.N=function(){xr.Z.N.call(this),rh(this)},xr.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Ll=o.JSON.stringify,J_=o.JSON.parse,q_=class{stringify(l){return o.JSON.stringify(l,void 0)}parse(l){return o.JSON.parse(l,void 0)}};function ih(){}function oh(){}var Mr={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function kl(){v.call(this,"d")}f(kl,v);function xl(){v.call(this,"c")}f(xl,v);var cs={},ah=null;function Ao(){return ah=ah||new Xe}cs.Ia="serverreachability";function lh(l){v.call(this,cs.Ia,l)}f(lh,v);function Vr(l){const u=Ao();it(u,new lh(u))}cs.STAT_EVENT="statevent";function ch(l,u){v.call(this,cs.STAT_EVENT,l),this.stat=u}f(ch,v);function ot(l){const u=Ao();it(u,new ch(u,l))}cs.Ja="timingevent";function Bh(l,u){v.call(this,cs.Ja,l),this.size=u}f(Bh,v);function Gr(l,u){if(typeof l!="function")throw Error("Fn must not be null and must be a function");return o.setTimeout(function(){l()},u)}function Hr(){this.g=!0}Hr.prototype.ua=function(){this.g=!1};function j_(l,u,d,p,S,N){l.info(function(){if(l.g)if(N){var U="",ie=N.split("&");for(let me=0;me<ie.length;me++){var xe=ie[me].split("=");if(xe.length>1){const Ue=xe[0];xe=xe[1];const jt=Ue.split("_");U=jt.length>=2&&jt[1]=="type"?U+(Ue+"="+xe+"&"):U+(Ue+"=redacted&")}}}else U=null;else U=N;return"XMLHTTP REQ ("+p+") [attempt "+S+"]: "+u+`
`+d+`
`+U})}function K_(l,u,d,p,S,N,U){l.info(function(){return"XMLHTTP RESP ("+p+") [ attempt "+S+"]: "+u+`
`+d+`
`+N+" "+U})}function qs(l,u,d,p){l.info(function(){return"XMLHTTP TEXT ("+u+"): "+z_(l,d)+(p?" "+p:"")})}function W_(l,u){l.info(function(){return"TIMEOUT: "+u})}Hr.prototype.info=function(){};function z_(l,u){if(!l.g)return u;if(!u)return null;try{const N=JSON.parse(u);if(N){for(l=0;l<N.length;l++)if(Array.isArray(N[l])){var d=N[l];if(!(d.length<2)){var p=d[1];if(Array.isArray(p)&&!(p.length<1)){var S=p[0];if(S!="noop"&&S!="stop"&&S!="close")for(let U=1;U<p.length;U++)p[U]=""}}}}return Ll(N)}catch{return u}}var Ro={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},uh={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},hh;function Ml(){}f(Ml,ih),Ml.prototype.g=function(){return new XMLHttpRequest},hh=new Ml;function Ur(l){return encodeURIComponent(String(l))}function Q_(l){var u=1;l=l.split(":");const d=[];for(;u>0&&l.length;)d.push(l.shift()),u--;return l.length&&d.push(l.join(":")),d}function wn(l,u,d,p){this.j=l,this.i=u,this.l=d,this.S=p||1,this.V=new xr(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new fh}function fh(){this.i=null,this.g="",this.h=!1}var dh={},Vl={};function Gl(l,u,d){l.M=1,l.A=Po(qt(u)),l.u=d,l.R=!0,Ch(l,null)}function Ch(l,u){l.F=Date.now(),So(l),l.B=qt(l.A);var d=l.B,p=l.S;Array.isArray(p)||(p=[String(p)]),Rh(d.i,"t",p),l.C=0,d=l.j.L,l.h=new fh,l.g=Kh(l.j,d?u:null,!l.u),l.P>0&&(l.O=new U_(B(l.Y,l,l.g),l.P)),u=l.V,d=l.g,p=l.ba;var S="readystatechange";Array.isArray(S)||(S&&(sh[0]=S.toString()),S=sh);for(let N=0;N<S.length;N++){const U=Xu(d,S[N],p||u.handleEvent,!1,u.h||u);if(!U)break;u.g[U.key]=U}u=l.J?Qu(l.J):{},l.u?(l.v||(l.v="POST"),u["Content-Type"]="application/x-www-form-urlencoded",l.g.ea(l.B,l.v,l.u,u)):(l.v="GET",l.g.ea(l.B,l.v,null,u)),Vr(),j_(l.i,l.v,l.B,l.l,l.S,l.u)}wn.prototype.ba=function(l){l=l.target;const u=this.O;u&&An(l)==3?u.j():this.Y(l)},wn.prototype.Y=function(l){try{if(l==this.g)e:{const ie=An(this.g),xe=this.g.ya(),me=this.g.ca();if(!(ie<3)&&(ie!=3||this.g&&(this.h.h||this.g.la()||Lh(this.g)))){this.K||ie!=4||xe==7||(xe==8||me<=0?Vr(3):Vr(2)),Hl(this);var u=this.g.ca();this.X=u;var d=Y_(this);if(this.o=u==200,K_(this.i,this.v,this.B,this.l,this.S,ie,u),this.o){if(this.U&&!this.L){t:{if(this.g){var p,S=this.g;if((p=S.g?S.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!D(p)){var N=p;break t}}N=null}if(l=N)qs(this.i,this.l,l,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,Ul(this,l);else{this.o=!1,this.m=3,ot(12),Bs(this),Jr(this);break e}}if(this.R){l=!0;let Ue;for(;!this.K&&this.C<d.length;)if(Ue=$_(this,d),Ue==Vl){ie==4&&(this.m=4,ot(14),l=!1),qs(this.i,this.l,null,"[Incomplete Response]");break}else if(Ue==dh){this.m=4,ot(15),qs(this.i,this.l,d,"[Invalid Chunk]"),l=!1;break}else qs(this.i,this.l,Ue,null),Ul(this,Ue);if(ph(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),ie!=4||d.length!=0||this.h.h||(this.m=1,ot(16),l=!1),this.o=this.o&&l,!l)qs(this.i,this.l,d,"[Invalid Chunked Response]"),Bs(this),Jr(this);else if(d.length>0&&!this.W){this.W=!0;var U=this.j;U.g==this&&U.aa&&!U.P&&(U.j.info("Great, no buffering proxy detected. Bytes received: "+d.length),Yl(U),U.P=!0,ot(11))}}else qs(this.i,this.l,d,null),Ul(this,d);ie==4&&Bs(this),this.o&&!this.K&&(ie==4?Uh(this.j,this):(this.o=!1,So(this)))}else uE(this.g),u==400&&d.indexOf("Unknown SID")>0?(this.m=3,ot(12)):(this.m=0,ot(13)),Bs(this),Jr(this)}}}catch{}finally{}};function Y_(l){if(!ph(l))return l.g.la();const u=Lh(l.g);if(u==="")return"";let d="";const p=u.length,S=An(l.g)==4;if(!l.h.i){if(typeof TextDecoder>"u")return Bs(l),Jr(l),"";l.h.i=new o.TextDecoder}for(let N=0;N<p;N++)l.h.h=!0,d+=l.h.i.decode(u[N],{stream:!(S&&N==p-1)});return u.length=0,l.h.g+=d,l.C=0,l.h.g}function ph(l){return l.g?l.v=="GET"&&l.M!=2&&l.j.Aa:!1}function $_(l,u){var d=l.C,p=u.indexOf(`
`,d);return p==-1?Vl:(d=Number(u.substring(d,p)),isNaN(d)?dh:(p+=1,p+d>u.length?Vl:(u=u.slice(p,p+d),l.C=p+d,u)))}wn.prototype.cancel=function(){this.K=!0,Bs(this)};function So(l){l.T=Date.now()+l.H,gh(l,l.H)}function gh(l,u){if(l.D!=null)throw Error("WatchDog timer not null");l.D=Gr(B(l.aa,l),u)}function Hl(l){l.D&&(o.clearTimeout(l.D),l.D=null)}wn.prototype.aa=function(){this.D=null;const l=Date.now();l-this.T>=0?(W_(this.i,this.B),this.M!=2&&(Vr(),ot(17)),Bs(this),this.m=2,Jr(this)):gh(this,this.T-l)};function Jr(l){l.j.I==0||l.K||Uh(l.j,l)}function Bs(l){Hl(l);var u=l.O;u&&typeof u.dispose=="function"&&u.dispose(),l.O=null,rh(l.V),l.g&&(u=l.g,l.g=null,u.abort(),u.dispose())}function Ul(l,u){try{var d=l.j;if(d.I!=0&&(d.g==l||Jl(d.h,l))){if(!l.L&&Jl(d.h,l)&&d.I==3){try{var p=d.Ba.g.parse(u)}catch{p=null}if(Array.isArray(p)&&p.length==3){var S=p;if(S[0]==0){e:if(!d.v){if(d.g)if(d.g.F+3e3<l.F)Lo(d),Oo(d);else break e;Ql(d),ot(18)}}else d.xa=S[1],0<d.xa-d.K&&S[2]<37500&&d.F&&d.A==0&&!d.C&&(d.C=Gr(B(d.Va,d),6e3));Eh(d.h)<=1&&d.ta&&(d.ta=void 0)}else hs(d,11)}else if((l.L||d.g==l)&&Lo(d),!D(u))for(S=d.Ba.g.parse(u),u=0;u<S.length;u++){let me=S[u];const Ue=me[0];if(!(Ue<=d.K))if(d.K=Ue,me=me[1],d.I==2)if(me[0]=="c"){d.M=me[1],d.ba=me[2];const jt=me[3];jt!=null&&(d.ka=jt,d.j.info("VER="+d.ka));const fs=me[4];fs!=null&&(d.za=fs,d.j.info("SVER="+d.za));const Rn=me[5];Rn!=null&&typeof Rn=="number"&&Rn>0&&(p=1.5*Rn,d.O=p,d.j.info("backChannelRequestTimeoutMs_="+p)),p=d;const Sn=l.g;if(Sn){const xo=Sn.g?Sn.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(xo){var N=p.h;N.g||xo.indexOf("spdy")==-1&&xo.indexOf("quic")==-1&&xo.indexOf("h2")==-1||(N.j=N.l,N.g=new Set,N.h&&(ql(N,N.h),N.h=null))}if(p.G){const $l=Sn.g?Sn.g.getResponseHeader("X-HTTP-Session-Id"):null;$l&&(p.wa=$l,ye(p.J,p.G,$l))}}d.I=3,d.l&&d.l.ra(),d.aa&&(d.T=Date.now()-l.F,d.j.info("Handshake RTT: "+d.T+"ms")),p=d;var U=l;if(p.na=jh(p,p.L?p.ba:null,p.W),U.L){Dh(p.h,U);var ie=U,xe=p.O;xe&&(ie.H=xe),ie.D&&(Hl(ie),So(ie)),p.g=U}else Gh(p);d.i.length>0&&Fo(d)}else me[0]!="stop"&&me[0]!="close"||hs(d,7);else d.I==3&&(me[0]=="stop"||me[0]=="close"?me[0]=="stop"?hs(d,7):zl(d):me[0]!="noop"&&d.l&&d.l.qa(me),d.A=0)}}Vr(4)}catch{}}var X_=class{constructor(l,u){this.g=l,this.map=u}};function mh(l){this.l=l||10,o.PerformanceNavigationTiming?(l=o.performance.getEntriesByType("navigation"),l=l.length>0&&(l[0].nextHopProtocol=="hq"||l[0].nextHopProtocol=="h2")):l=!!(o.chrome&&o.chrome.loadTimes&&o.chrome.loadTimes()&&o.chrome.loadTimes().wasFetchedViaSpdy),this.j=l?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function _h(l){return l.h?!0:l.g?l.g.size>=l.j:!1}function Eh(l){return l.h?1:l.g?l.g.size:0}function Jl(l,u){return l.h?l.h==u:l.g?l.g.has(u):!1}function ql(l,u){l.g?l.g.add(u):l.h=u}function Dh(l,u){l.h&&l.h==u?l.h=null:l.g&&l.g.has(u)&&l.g.delete(u)}mh.prototype.cancel=function(){if(this.i=yh(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const l of this.g.values())l.cancel();this.g.clear()}};function yh(l){if(l.h!=null)return l.i.concat(l.h.G);if(l.g!=null&&l.g.size!==0){let u=l.i;for(const d of l.g.values())u=u.concat(d.G);return u}return _(l.i)}var Ih=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Z_(l,u){if(l){l=l.split("&");for(let d=0;d<l.length;d++){const p=l[d].indexOf("=");let S,N=null;p>=0?(S=l[d].substring(0,p),N=l[d].substring(p+1)):S=l[d],u(S,N?decodeURIComponent(N.replace(/\+/g," ")):"")}}}function Tn(l){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let u;l instanceof Tn?(this.l=l.l,qr(this,l.j),this.o=l.o,this.g=l.g,jr(this,l.u),this.h=l.h,jl(this,Sh(l.i)),this.m=l.m):l&&(u=String(l).match(Ih))?(this.l=!1,qr(this,u[1]||"",!0),this.o=Kr(u[2]||""),this.g=Kr(u[3]||"",!0),jr(this,u[4]),this.h=Kr(u[5]||"",!0),jl(this,u[6]||"",!0),this.m=Kr(u[7]||"")):(this.l=!1,this.i=new zr(null,this.l))}Tn.prototype.toString=function(){const l=[];var u=this.j;u&&l.push(Wr(u,wh,!0),":");var d=this.g;return(d||u=="file")&&(l.push("//"),(u=this.o)&&l.push(Wr(u,wh,!0),"@"),l.push(Ur(d).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.u,d!=null&&l.push(":",String(d))),(d=this.h)&&(this.g&&d.charAt(0)!="/"&&l.push("/"),l.push(Wr(d,d.charAt(0)=="/"?nE:tE,!0))),(d=this.i.toString())&&l.push("?",d),(d=this.m)&&l.push("#",Wr(d,rE)),l.join("")},Tn.prototype.resolve=function(l){const u=qt(this);let d=!!l.j;d?qr(u,l.j):d=!!l.o,d?u.o=l.o:d=!!l.g,d?u.g=l.g:d=l.u!=null;var p=l.h;if(d)jr(u,l.u);else if(d=!!l.h){if(p.charAt(0)!="/")if(this.g&&!this.h)p="/"+p;else{var S=u.h.lastIndexOf("/");S!=-1&&(p=u.h.slice(0,S+1)+p)}if(S=p,S==".."||S==".")p="";else if(S.indexOf("./")!=-1||S.indexOf("/.")!=-1){p=S.lastIndexOf("/",0)==0,S=S.split("/");const N=[];for(let U=0;U<S.length;){const ie=S[U++];ie=="."?p&&U==S.length&&N.push(""):ie==".."?((N.length>1||N.length==1&&N[0]!="")&&N.pop(),p&&U==S.length&&N.push("")):(N.push(ie),p=!0)}p=N.join("/")}else p=S}return d?u.h=p:d=l.i.toString()!=="",d?jl(u,Sh(l.i)):d=!!l.m,d&&(u.m=l.m),u};function qt(l){return new Tn(l)}function qr(l,u,d){l.j=d?Kr(u,!0):u,l.j&&(l.j=l.j.replace(/:$/,""))}function jr(l,u){if(u){if(u=Number(u),isNaN(u)||u<0)throw Error("Bad port number "+u);l.u=u}else l.u=null}function jl(l,u,d){u instanceof zr?(l.i=u,iE(l.i,l.l)):(d||(u=Wr(u,sE)),l.i=new zr(u,l.l))}function ye(l,u,d){l.i.set(u,d)}function Po(l){return ye(l,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),l}function Kr(l,u){return l?u?decodeURI(l.replace(/%25/g,"%2525")):decodeURIComponent(l):""}function Wr(l,u,d){return typeof l=="string"?(l=encodeURI(l).replace(u,eE),d&&(l=l.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),l):null}function eE(l){return l=l.charCodeAt(0),"%"+(l>>4&15).toString(16)+(l&15).toString(16)}var wh=/[#\/\?@]/g,tE=/[#\?:]/g,nE=/[#\?]/g,sE=/[#\?@]/g,rE=/#/g;function zr(l,u){this.h=this.g=null,this.i=l||null,this.j=!!u}function us(l){l.g||(l.g=new Map,l.h=0,l.i&&Z_(l.i,function(u,d){l.add(decodeURIComponent(u.replace(/\+/g," ")),d)}))}s=zr.prototype,s.add=function(l,u){us(this),this.i=null,l=js(this,l);let d=this.g.get(l);return d||this.g.set(l,d=[]),d.push(u),this.h+=1,this};function Th(l,u){us(l),u=js(l,u),l.g.has(u)&&(l.i=null,l.h-=l.g.get(u).length,l.g.delete(u))}function vh(l,u){return us(l),u=js(l,u),l.g.has(u)}s.forEach=function(l,u){us(this),this.g.forEach(function(d,p){d.forEach(function(S){l.call(u,S,p,this)},this)},this)};function Ah(l,u){us(l);let d=[];if(typeof u=="string")vh(l,u)&&(d=d.concat(l.g.get(js(l,u))));else for(l=Array.from(l.g.values()),u=0;u<l.length;u++)d=d.concat(l[u]);return d}s.set=function(l,u){return us(this),this.i=null,l=js(this,l),vh(this,l)&&(this.h-=this.g.get(l).length),this.g.set(l,[u]),this.h+=1,this},s.get=function(l,u){return l?(l=Ah(this,l),l.length>0?String(l[0]):u):u};function Rh(l,u,d){Th(l,u),d.length>0&&(l.i=null,l.g.set(js(l,u),_(d)),l.h+=d.length)}s.toString=function(){if(this.i)return this.i;if(!this.g)return"";const l=[],u=Array.from(this.g.keys());for(let p=0;p<u.length;p++){var d=u[p];const S=Ur(d);d=Ah(this,d);for(let N=0;N<d.length;N++){let U=S;d[N]!==""&&(U+="="+Ur(d[N])),l.push(U)}}return this.i=l.join("&")};function Sh(l){const u=new zr;return u.i=l.i,l.g&&(u.g=new Map(l.g),u.h=l.h),u}function js(l,u){return u=String(u),l.j&&(u=u.toLowerCase()),u}function iE(l,u){u&&!l.j&&(us(l),l.i=null,l.g.forEach(function(d,p){const S=p.toLowerCase();p!=S&&(Th(this,p),Rh(this,S,d))},l)),l.j=u}function oE(l,u){const d=new Hr;if(o.Image){const p=new Image;p.onload=h(vn,d,"TestLoadImage: loaded",!0,u,p),p.onerror=h(vn,d,"TestLoadImage: error",!1,u,p),p.onabort=h(vn,d,"TestLoadImage: abort",!1,u,p),p.ontimeout=h(vn,d,"TestLoadImage: timeout",!1,u,p),o.setTimeout(function(){p.ontimeout&&p.ontimeout()},1e4),p.src=l}else u(!1)}function aE(l,u){const d=new Hr,p=new AbortController,S=setTimeout(()=>{p.abort(),vn(d,"TestPingServer: timeout",!1,u)},1e4);fetch(l,{signal:p.signal}).then(N=>{clearTimeout(S),N.ok?vn(d,"TestPingServer: ok",!0,u):vn(d,"TestPingServer: server error",!1,u)}).catch(()=>{clearTimeout(S),vn(d,"TestPingServer: error",!1,u)})}function vn(l,u,d,p,S){try{S&&(S.onload=null,S.onerror=null,S.onabort=null,S.ontimeout=null),p(d)}catch{}}function lE(){this.g=new q_}function Kl(l){this.i=l.Sb||null,this.h=l.ab||!1}f(Kl,ih),Kl.prototype.g=function(){return new No(this.i,this.h)};function No(l,u){Xe.call(this),this.H=l,this.o=u,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}f(No,Xe),s=No.prototype,s.open=function(l,u){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=l,this.D=u,this.readyState=1,Yr(this)},s.send=function(l){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const u={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};l&&(u.body=l),(this.H||o).fetch(new Request(this.D,u)).then(this.Pa.bind(this),this.ga.bind(this))},s.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,Qr(this)),this.readyState=0},s.Pa=function(l){if(this.g&&(this.l=l,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=l.headers,this.readyState=2,Yr(this)),this.g&&(this.readyState=3,Yr(this),this.g)))if(this.responseType==="arraybuffer")l.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof o.ReadableStream<"u"&&"body"in l){if(this.j=l.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;Ph(this)}else l.text().then(this.Oa.bind(this),this.ga.bind(this))};function Ph(l){l.j.read().then(l.Ma.bind(l)).catch(l.ga.bind(l))}s.Ma=function(l){if(this.g){if(this.o&&l.value)this.response.push(l.value);else if(!this.o){var u=l.value?l.value:new Uint8Array(0);(u=this.B.decode(u,{stream:!l.done}))&&(this.response=this.responseText+=u)}l.done?Qr(this):Yr(this),this.readyState==3&&Ph(this)}},s.Oa=function(l){this.g&&(this.response=this.responseText=l,Qr(this))},s.Na=function(l){this.g&&(this.response=l,Qr(this))},s.ga=function(){this.g&&Qr(this)};function Qr(l){l.readyState=4,l.l=null,l.j=null,l.B=null,Yr(l)}s.setRequestHeader=function(l,u){this.A.append(l,u)},s.getResponseHeader=function(l){return this.h&&this.h.get(l.toLowerCase())||""},s.getAllResponseHeaders=function(){if(!this.h)return"";const l=[],u=this.h.entries();for(var d=u.next();!d.done;)d=d.value,l.push(d[0]+": "+d[1]),d=u.next();return l.join(`\r
`)};function Yr(l){l.onreadystatechange&&l.onreadystatechange.call(l)}Object.defineProperty(No.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(l){this.m=l?"include":"same-origin"}});function Nh(l){let u="";return wo(l,function(d,p){u+=p,u+=":",u+=d,u+=`\r
`}),u}function Wl(l,u,d){e:{for(p in d){var p=!1;break e}p=!0}p||(d=Nh(d),typeof l=="string"?d!=null&&Ur(d):ye(l,u,d))}function Se(l){Xe.call(this),this.headers=new Map,this.L=l||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}f(Se,Xe);var cE=/^https?$/i,BE=["POST","PUT"];s=Se.prototype,s.Fa=function(l){this.H=l},s.ea=function(l,u,d,p){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+l);u=u?u.toUpperCase():"GET",this.D=l,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():hh.g(),this.g.onreadystatechange=C(B(this.Ca,this));try{this.B=!0,this.g.open(u,String(l),!0),this.B=!1}catch(N){bh(this,N);return}if(l=d||"",d=new Map(this.headers),p)if(Object.getPrototypeOf(p)===Object.prototype)for(var S in p)d.set(S,p[S]);else if(typeof p.keys=="function"&&typeof p.get=="function")for(const N of p.keys())d.set(N,p.get(N));else throw Error("Unknown input type for opt_headers: "+String(p));p=Array.from(d.keys()).find(N=>N.toLowerCase()=="content-type"),S=o.FormData&&l instanceof o.FormData,!(Array.prototype.indexOf.call(BE,u,void 0)>=0)||p||S||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[N,U]of d)this.g.setRequestHeader(N,U);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(l),this.v=!1}catch(N){bh(this,N)}};function bh(l,u){l.h=!1,l.g&&(l.j=!0,l.g.abort(),l.j=!1),l.l=u,l.o=5,Oh(l),bo(l)}function Oh(l){l.A||(l.A=!0,it(l,"complete"),it(l,"error"))}s.abort=function(l){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=l||7,it(this,"complete"),it(this,"abort"),bo(this))},s.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),bo(this,!0)),Se.Z.N.call(this)},s.Ca=function(){this.u||(this.B||this.v||this.j?Fh(this):this.Xa())},s.Xa=function(){Fh(this)};function Fh(l){if(l.h&&typeof i<"u"){if(l.v&&An(l)==4)setTimeout(l.Ca.bind(l),0);else if(it(l,"readystatechange"),An(l)==4){l.h=!1;try{const N=l.ca();e:switch(N){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var u=!0;break e;default:u=!1}var d;if(!(d=u)){var p;if(p=N===0){let U=String(l.D).match(Ih)[1]||null;!U&&o.self&&o.self.location&&(U=o.self.location.protocol.slice(0,-1)),p=!cE.test(U?U.toLowerCase():"")}d=p}if(d)it(l,"complete"),it(l,"success");else{l.o=6;try{var S=An(l)>2?l.g.statusText:""}catch{S=""}l.l=S+" ["+l.ca()+"]",Oh(l)}}finally{bo(l)}}}}function bo(l,u){if(l.g){l.m&&(clearTimeout(l.m),l.m=null);const d=l.g;l.g=null,u||it(l,"ready");try{d.onreadystatechange=null}catch{}}}s.isActive=function(){return!!this.g};function An(l){return l.g?l.g.readyState:0}s.ca=function(){try{return An(this)>2?this.g.status:-1}catch{return-1}},s.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},s.La=function(l){if(this.g){var u=this.g.responseText;return l&&u.indexOf(l)==0&&(u=u.substring(l.length)),J_(u)}};function Lh(l){try{if(!l.g)return null;if("response"in l.g)return l.g.response;switch(l.F){case"":case"text":return l.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in l.g)return l.g.mozResponseArrayBuffer}return null}catch{return null}}function uE(l){const u={};l=(l.g&&An(l)>=2&&l.g.getAllResponseHeaders()||"").split(`\r
`);for(let p=0;p<l.length;p++){if(D(l[p]))continue;var d=Q_(l[p]);const S=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const N=u[S]||[];u[S]=N,N.push(d)}x_(u,function(p){return p.join(", ")})}s.ya=function(){return this.o},s.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function $r(l,u,d){return d&&d.internalChannelParams&&d.internalChannelParams[l]||u}function kh(l){this.za=0,this.i=[],this.j=new Hr,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=$r("failFast",!1,l),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=$r("baseRetryDelayMs",5e3,l),this.Za=$r("retryDelaySeedMs",1e4,l),this.Ta=$r("forwardChannelMaxRetries",2,l),this.va=$r("forwardChannelRequestTimeoutMs",2e4,l),this.ma=l&&l.xmlHttpFactory||void 0,this.Ua=l&&l.Rb||void 0,this.Aa=l&&l.useFetchStreams||!1,this.O=void 0,this.L=l&&l.supportsCrossDomainXhr||!1,this.M="",this.h=new mh(l&&l.concurrentRequestLimit),this.Ba=new lE,this.S=l&&l.fastHandshake||!1,this.R=l&&l.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=l&&l.Pb||!1,l&&l.ua&&this.j.ua(),l&&l.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&l&&l.detectBufferingProxy||!1,this.ia=void 0,l&&l.longPollingTimeout&&l.longPollingTimeout>0&&(this.ia=l.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}s=kh.prototype,s.ka=8,s.I=1,s.connect=function(l,u,d,p){ot(0),this.W=l,this.H=u||{},d&&p!==void 0&&(this.H.OSID=d,this.H.OAID=p),this.F=this.X,this.J=jh(this,null,this.W),Fo(this)};function zl(l){if(xh(l),l.I==3){var u=l.V++,d=qt(l.J);if(ye(d,"SID",l.M),ye(d,"RID",u),ye(d,"TYPE","terminate"),Xr(l,d),u=new wn(l,l.j,u),u.M=2,u.A=Po(qt(d)),d=!1,o.navigator&&o.navigator.sendBeacon)try{d=o.navigator.sendBeacon(u.A.toString(),"")}catch{}!d&&o.Image&&(new Image().src=u.A,d=!0),d||(u.g=Kh(u.j,null),u.g.ea(u.A)),u.F=Date.now(),So(u)}qh(l)}function Oo(l){l.g&&(Yl(l),l.g.cancel(),l.g=null)}function xh(l){Oo(l),l.v&&(o.clearTimeout(l.v),l.v=null),Lo(l),l.h.cancel(),l.m&&(typeof l.m=="number"&&o.clearTimeout(l.m),l.m=null)}function Fo(l){if(!_h(l.h)&&!l.m){l.m=!0;var u=l.Ea;yt||E(),ve||(yt(),ve=!0),A.add(u,l),l.D=0}}function hE(l,u){return Eh(l.h)>=l.h.j-(l.m?1:0)?!1:l.m?(l.i=u.G.concat(l.i),!0):l.I==1||l.I==2||l.D>=(l.Sa?0:l.Ta)?!1:(l.m=Gr(B(l.Ea,l,u),Jh(l,l.D)),l.D++,!0)}s.Ea=function(l){if(this.m)if(this.m=null,this.I==1){if(!l){this.V=Math.floor(Math.random()*1e5),l=this.V++;const S=new wn(this,this.j,l);let N=this.o;if(this.U&&(N?(N=Qu(N),$u(N,this.U)):N=this.U),this.u!==null||this.R||(S.J=N,N=null),this.S)e:{for(var u=0,d=0;d<this.i.length;d++){t:{var p=this.i[d];if("__data__"in p.map&&(p=p.map.__data__,typeof p=="string")){p=p.length;break t}p=void 0}if(p===void 0)break;if(u+=p,u>4096){u=d;break e}if(u===4096||d===this.i.length-1){u=d+1;break e}}u=1e3}else u=1e3;u=Vh(this,S,u),d=qt(this.J),ye(d,"RID",l),ye(d,"CVER",22),this.G&&ye(d,"X-HTTP-Session-Id",this.G),Xr(this,d),N&&(this.R?u="headers="+Ur(Nh(N))+"&"+u:this.u&&Wl(d,this.u,N)),ql(this.h,S),this.Ra&&ye(d,"TYPE","init"),this.S?(ye(d,"$req",u),ye(d,"SID","null"),S.U=!0,Gl(S,d,null)):Gl(S,d,u),this.I=2}}else this.I==3&&(l?Mh(this,l):this.i.length==0||_h(this.h)||Mh(this))};function Mh(l,u){var d;u?d=u.l:d=l.V++;const p=qt(l.J);ye(p,"SID",l.M),ye(p,"RID",d),ye(p,"AID",l.K),Xr(l,p),l.u&&l.o&&Wl(p,l.u,l.o),d=new wn(l,l.j,d,l.D+1),l.u===null&&(d.J=l.o),u&&(l.i=u.G.concat(l.i)),u=Vh(l,d,1e3),d.H=Math.round(l.va*.5)+Math.round(l.va*.5*Math.random()),ql(l.h,d),Gl(d,p,u)}function Xr(l,u){l.H&&wo(l.H,function(d,p){ye(u,p,d)}),l.l&&wo({},function(d,p){ye(u,p,d)})}function Vh(l,u,d){d=Math.min(l.i.length,d);const p=l.l?B(l.l.Ka,l.l,l):null;e:{var S=l.i;let ie=-1;for(;;){const xe=["count="+d];ie==-1?d>0?(ie=S[0].g,xe.push("ofs="+ie)):ie=0:xe.push("ofs="+ie);let me=!0;for(let Ue=0;Ue<d;Ue++){var N=S[Ue].g;const jt=S[Ue].map;if(N-=ie,N<0)ie=Math.max(0,S[Ue].g-100),me=!1;else try{N="req"+N+"_"||"";try{var U=jt instanceof Map?jt:Object.entries(jt);for(const[fs,Rn]of U){let Sn=Rn;a(Rn)&&(Sn=Ll(Rn)),xe.push(N+fs+"="+encodeURIComponent(Sn))}}catch(fs){throw xe.push(N+"type="+encodeURIComponent("_badmap")),fs}}catch{p&&p(jt)}}if(me){U=xe.join("&");break e}}U=void 0}return l=l.i.splice(0,d),u.G=l,U}function Gh(l){if(!l.g&&!l.v){l.Y=1;var u=l.Da;yt||E(),ve||(yt(),ve=!0),A.add(u,l),l.A=0}}function Ql(l){return l.g||l.v||l.A>=3?!1:(l.Y++,l.v=Gr(B(l.Da,l),Jh(l,l.A)),l.A++,!0)}s.Da=function(){if(this.v=null,Hh(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var l=4*this.T;this.j.info("BP detection timer enabled: "+l),this.B=Gr(B(this.Wa,this),l)}},s.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,ot(10),Oo(this),Hh(this))};function Yl(l){l.B!=null&&(o.clearTimeout(l.B),l.B=null)}function Hh(l){l.g=new wn(l,l.j,"rpc",l.Y),l.u===null&&(l.g.J=l.o),l.g.P=0;var u=qt(l.na);ye(u,"RID","rpc"),ye(u,"SID",l.M),ye(u,"AID",l.K),ye(u,"CI",l.F?"0":"1"),!l.F&&l.ia&&ye(u,"TO",l.ia),ye(u,"TYPE","xmlhttp"),Xr(l,u),l.u&&l.o&&Wl(u,l.u,l.o),l.O&&(l.g.H=l.O);var d=l.g;l=l.ba,d.M=1,d.A=Po(qt(u)),d.u=null,d.R=!0,Ch(d,l)}s.Va=function(){this.C!=null&&(this.C=null,Oo(this),Ql(this),ot(19))};function Lo(l){l.C!=null&&(o.clearTimeout(l.C),l.C=null)}function Uh(l,u){var d=null;if(l.g==u){Lo(l),Yl(l),l.g=null;var p=2}else if(Jl(l.h,u))d=u.G,Dh(l.h,u),p=1;else return;if(l.I!=0){if(u.o)if(p==1){d=u.u?u.u.length:0,u=Date.now()-u.F;var S=l.D;p=Ao(),it(p,new Bh(p,d)),Fo(l)}else Gh(l);else if(S=u.m,S==3||S==0&&u.X>0||!(p==1&&hE(l,u)||p==2&&Ql(l)))switch(d&&d.length>0&&(u=l.h,u.i=u.i.concat(d)),S){case 1:hs(l,5);break;case 4:hs(l,10);break;case 3:hs(l,6);break;default:hs(l,2)}}}function Jh(l,u){let d=l.Qa+Math.floor(Math.random()*l.Za);return l.isActive()||(d*=2),d*u}function hs(l,u){if(l.j.info("Error code "+u),u==2){var d=B(l.bb,l),p=l.Ua;const S=!p;p=new Tn(p||"//www.google.com/images/cleardot.gif"),o.location&&o.location.protocol=="http"||qr(p,"https"),Po(p),S?oE(p.toString(),d):aE(p.toString(),d)}else ot(2);l.I=0,l.l&&l.l.pa(u),qh(l),xh(l)}s.bb=function(l){l?(this.j.info("Successfully pinged google.com"),ot(2)):(this.j.info("Failed to ping google.com"),ot(1))};function qh(l){if(l.I=0,l.ja=[],l.l){const u=yh(l.h);(u.length!=0||l.i.length!=0)&&(I(l.ja,u),I(l.ja,l.i),l.h.i.length=0,_(l.i),l.i.length=0),l.l.oa()}}function jh(l,u,d){var p=d instanceof Tn?qt(d):new Tn(d);if(p.g!="")u&&(p.g=u+"."+p.g),jr(p,p.u);else{var S=o.location;p=S.protocol,u=u?u+"."+S.hostname:S.hostname,S=+S.port;const N=new Tn(null);p&&qr(N,p),u&&(N.g=u),S&&jr(N,S),d&&(N.h=d),p=N}return d=l.G,u=l.wa,d&&u&&ye(p,d,u),ye(p,"VER",l.ka),Xr(l,p),p}function Kh(l,u,d){if(u&&!l.L)throw Error("Can't create secondary domain capable XhrIo object.");return u=l.Aa&&!l.ma?new Se(new Kl({ab:d})):new Se(l.ma),u.Fa(l.L),u}s.isActive=function(){return!!this.l&&this.l.isActive(this)};function Wh(){}s=Wh.prototype,s.ra=function(){},s.qa=function(){},s.pa=function(){},s.oa=function(){},s.isActive=function(){return!0},s.Ka=function(){};function ko(){}ko.prototype.g=function(l,u){return new It(l,u)};function It(l,u){Xe.call(this),this.g=new kh(u),this.l=l,this.h=u&&u.messageUrlParams||null,l=u&&u.messageHeaders||null,u&&u.clientProtocolHeaderRequired&&(l?l["X-Client-Protocol"]="webchannel":l={"X-Client-Protocol":"webchannel"}),this.g.o=l,l=u&&u.initMessageHeaders||null,u&&u.messageContentType&&(l?l["X-WebChannel-Content-Type"]=u.messageContentType:l={"X-WebChannel-Content-Type":u.messageContentType}),u&&u.sa&&(l?l["X-WebChannel-Client-Profile"]=u.sa:l={"X-WebChannel-Client-Profile":u.sa}),this.g.U=l,(l=u&&u.Qb)&&!D(l)&&(this.g.u=l),this.A=u&&u.supportsCrossDomainXhr||!1,this.v=u&&u.sendRawJson||!1,(u=u&&u.httpSessionIdParam)&&!D(u)&&(this.g.G=u,l=this.h,l!==null&&u in l&&(l=this.h,u in l&&delete l[u])),this.j=new Ks(this)}f(It,Xe),It.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},It.prototype.close=function(){zl(this.g)},It.prototype.o=function(l){var u=this.g;if(typeof l=="string"){var d={};d.__data__=l,l=d}else this.v&&(d={},d.__data__=Ll(l),l=d);u.i.push(new X_(u.Ya++,l)),u.I==3&&Fo(u)},It.prototype.N=function(){this.g.l=null,delete this.j,zl(this.g),delete this.g,It.Z.N.call(this)};function zh(l){kl.call(this),l.__headers__&&(this.headers=l.__headers__,this.statusCode=l.__status__,delete l.__headers__,delete l.__status__);var u=l.__sm__;if(u){e:{for(const d in u){l=d;break e}l=void 0}(this.i=l)&&(l=this.i,u=u!==null&&l in u?u[l]:void 0),this.data=u}else this.data=l}f(zh,kl);function Qh(){xl.call(this),this.status=1}f(Qh,xl);function Ks(l){this.g=l}f(Ks,Wh),Ks.prototype.ra=function(){it(this.g,"a")},Ks.prototype.qa=function(l){it(this.g,new zh(l))},Ks.prototype.pa=function(l){it(this.g,new Qh)},Ks.prototype.oa=function(){it(this.g,"b")},ko.prototype.createWebChannel=ko.prototype.g,It.prototype.send=It.prototype.o,It.prototype.open=It.prototype.m,It.prototype.close=It.prototype.close,YC=function(){return new ko},QC=function(){return Ao()},zC=cs,Rc={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},Ro.NO_ERROR=0,Ro.TIMEOUT=8,Ro.HTTP_ERROR=6,Xo=Ro,uh.COMPLETE="complete",WC=uh,oh.EventType=Mr,Mr.OPEN="a",Mr.CLOSE="b",Mr.ERROR="c",Mr.MESSAGE="d",Xe.prototype.listen=Xe.prototype.J,ai=oh,Se.prototype.listenOnce=Se.prototype.K,Se.prototype.getLastError=Se.prototype.Ha,Se.prototype.getLastErrorCode=Se.prototype.ya,Se.prototype.getStatus=Se.prototype.ca,Se.prototype.getResponseJson=Se.prototype.La,Se.prototype.getResponseText=Se.prototype.la,Se.prototype.send=Se.prototype.ea,Se.prototype.setWithCredentials=Se.prototype.Fa,KC=Se}).apply(typeof Mo<"u"?Mo:typeof self<"u"?self:typeof window<"u"?window:{});/*!
* re2js
* RE2JS is the JavaScript port of RE2, a regular expression engine that provides linear time matching
*
* @version v2.8.6
* @author Oleksii Vasyliev
* @homepage https://github.com/le0pard/re2js#readme
* @repository github:le0pard/re2js
* @license MIT
*/var x=class Cs{static FOLD_CASE=1;static LITERAL=2;static CLASS_NL=4;static DOT_NL=8;static ONE_LINE=16;static NON_GREEDY=32;static PERL_X=64;static UNICODE_GROUPS=128;static WAS_DOLLAR=256;static LOOKBEHIND=512;static MATCH_NL=Cs.CLASS_NL|Cs.DOT_NL;static PERL=Cs.CLASS_NL|Cs.ONE_LINE|Cs.PERL_X|Cs.UNICODE_GROUPS;static POSIX=0;static UNANCHORED=0;static ANCHOR_START=1;static ANCHOR_BOTH=2};const Ws={CASE_INSENSITIVE:1,DOTALL:2,MULTILINE:4,DISABLE_UNICODE_GROUPS:8,LONGEST_MATCH:16,LOOKBEHINDS:512},Ri=128,Sc=new Int32Array(Ri),Pc=new Int32Array(Ri),Vo=65535;for(let s=0;s<Ri;s++)s>=97&&s<=122?Sc[s]=s-32:Sc[s]=s,s>=65&&s<=90?Pc[s]=s+32:Pc[s]=s;var b=class{static CODES=new Map([["\x07",7],["\b",8],["	",9],[`
`,10],["\v",11],["\f",12],["\r",13],[" ",32],['"',34],["$",36],["&",38],["'",39],["(",40],[")",41],["*",42],["+",43],["-",45],[".",46],["0",48],["1",49],["2",50],["3",51],["4",52],["5",53],["6",54],["7",55],["8",56],["9",57],[":",58],["<",60],[">",62],["?",63],["A",65],["B",66],["C",67],["F",70],["P",80],["Q",81],["U",85],["Z",90],["[",91],["\\",92],["]",93],["^",94],["_",95],["`",96],["a",97],["b",98],["f",102],["i",105],["m",109],["n",110],["r",114],["s",115],["t",116],["v",118],["x",120],["z",122],["{",123],["|",124],["}",125]]);static toUpperCase(s){if(s<Ri)return Sc[s];const e=String.fromCodePoint(s).toUpperCase(),t=e.codePointAt(0)>Vo?2:1;if(e.length>t)return s;const n=String.fromCodePoint(e.codePointAt(0)).toLowerCase(),r=n.codePointAt(0)>Vo?2:1;return n.length>r||n.codePointAt(0)!==s?s:e.codePointAt(0)}static toLowerCase(s){if(s<Ri)return Pc[s];const e=String.fromCodePoint(s).toLowerCase(),t=e.codePointAt(0)>Vo?2:1;if(e.length>t)return s;const n=String.fromCodePoint(e.codePointAt(0)).toUpperCase(),r=n.codePointAt(0)>Vo?2:1;return n.length>r||n.codePointAt(0)!==s?s:e.codePointAt(0)}},g=class{constructor(s,e=!1){this.data=s,this.isStride1=e,this.SIZE=e?2:3}getLo(s){return this.data[s*this.SIZE]}getHi(s){return this.data[s*this.SIZE+1]}getStride(s){return this.isStride1?1:this.data[s*this.SIZE+2]}get length(){return this.data.length/this.SIZE}};const $C=new Uint8Array(256);for(let s=0,e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-";s<64;s++)$C[e.charCodeAt(s)]=s;const XC=s=>{const e=[];let t=0,n=0;for(let r=0;r<s.length;r++){let i=$C[s.charCodeAt(r)];t|=(i&31)<<n,(i&32)===0?(e.push(t),t=0,n=0):n+=5}return e},m=(s,e)=>{const t=XC(s),n=e?t.length/2:t.length/3,r=new Uint32Array(n*3);let i=0,o=0;for(let a=0;a<n;a++)i+=t[o++],r[a*3]=i,i+=t[o++],r[a*3+1]=i,r[a*3+2]=e?1:t[o++];return r},ey=s=>{const e=XC(s),t=new Map;let n=0;for(let r=0;r<e.length;r+=2){n+=e[r];const i=e[r+1],o=i>>>1^-(i&1);t.set(n,n+o)}return t};var Go=class{constructor(s){this.initializer=s,this.cache=new Map}has(s){return s in this.initializer}get(s){if(this.cache.has(s))return this.cache.get(s);const e=this.initializer[s],t=e?e():null;return this.cache.set(s,t),t}},Bt=class{static _CASE_ORBIT=null;static get CASE_ORBIT(){return this._CASE_ORBIT||(this._CASE_ORBIT=ey("rCgCIgCY+rQI4QiCuuBLgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCCgCBgCBgCBgCBgCBgCBgCB+7OB-BB-BB-BB-BB-BBskQB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BC-BB-BB-BB-BB-BB-BB-BByHBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBDCBBBCBBBCBBCCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBCCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBxHBCBBBCBBBCBBB3SBmMBkNBCBBBCBBB8MBCBBB6MB6MBCBBC+EB0MB2MBCBBB6MB+MBiGBmNBiNBCBBBmKBikzCBmNBqNBkIBsNBCBBBCBBBCBBB0NBCBBB0NDCBBB0NBCBBByNByNBCBBBCBBB2NBCBBDCBBCwDFCBCBDBCBCBDBCBCBDBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBB9EBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBCCBCBDBCBBBhGBvDBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBjICCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBH2iVBCBBBlKBwiVB+jVB+jVBCBBBlMBqEBuEBCBBBCBBBCBBBCBBBCBBB+hVB4hVB8hVBjNB7MC5MB5MCzMC1MB+0yCE5MB20yCC9MBu2yCBwyyCBo0yCChNBlNBo0yCBu-UBi0yCDlNC6-UBpNDrNIu+UDzNCm0yCBzNE0yyCBzNBpEBxNBxNBtEG1NLqxyCBkxyCnFoFrBCBBBCBBDCBBEkIBkIBkICoHHsCCqCBqCBqCCgEC+DB+DBmkOBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCC+BBgCBgCBgCBgCBgCBgCBgCBgCBrCBpCBpCBpCBmjOB-BB8BB-BB-BBgEB-BB-BByBBqgOBsDB-BBtwBB-BB-BB-BBsBBgDBCB-BB-BB-BBeB-BB-BB61OB-BB-BB-DB9DB9DBQB7DBmCE9CBrDBPBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBrFB-EBOBnHB3FB-FCCBBBNBCBBCjIBjIBjIBgFBgFBgFBgFBgFBgFBgFBgFBgFBgFBgFBgFBgFBgFBgFBgFBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCB-BB-BB8kMB-BB6kMB-BB-BB-BB-BB-BB-BB-BB-BB-BBokMB-BB-BBkkMBkkMB-BB-BB-BB-BB-BB-BB-BB4jMB-BB-BB-BB-BB-BB-EB-EB-EB-EB-EB-EB-EB-EB-EB-EB-EB-EB-EB-EB-EB-EBCBBBCBoiMBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBJCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBeBCBBBCBBBCBBBCBBBCBBBCBBBCBBBdBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBCgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDL-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-C64CgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOBgmOCgmOGgmODg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FBg8FDg8FBg8FBg8FhVg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBg9rCBQBQBQBQBQBQDPBPBPBPBPBPjkC7mMB5mMBnmMBjmMBCBlmMB3lMBpiMBk8kCBCBBG-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FB-7FD-7FB-7FB-7F6FoglCEsuHRwjlCyDCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCB0DBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBG1DD97OCCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBQBQBQBQBQBQBQBQBPBPBPBPBPBPBPBPBQBQBQBQBQBQDPBPBPBPBPBPDQBQBQBQBQBQBQBQBPBPBPBPBPBPBPBPBQBQBQBQBQBQBQBQBPBPBPBPBPBPBPBPBQBQBQBQBQBQDPBPBPBPBPBPEQCQCQCQCPCPCPCPBQBQBQBQBQBQBQBQBPBPBPBPBPBPBPBPB0EB0EBsFBsFBsFBsFBoGBoGBgIBgIBgHBgHB8HB8HDQBQBQBQBQBQBQBQBPBPBPBPBPBPBPBPBQBQBQBQBQBQBQBQBPBPBPBPBPBPBPBPBQBQBQBQBQBQBQBQBPBPBPBPBPBPBPBPBQBQCSFPBPBzEBzEBRCxnOFSFrFBrFBrFBrFBREQBQClkOFPBPBnGBnGFQBQCljOCODPBPB-GB-GBNHSF-HB-HB7HB7HBRqJ53OE9tQBrmQH4Bc3BSgBBgBBgBBgBBgBBgBBgBBgBBgBBgBBgBBgBBgBBgBBgBBgBBfBfBfBfBfBfBfBfBfBfBfBfBfBfBfBfECBByZ0BB0BB0BB0BB0BB0BB0BB0BB0BB0BB0BB0BB0BB0BB0BB0BB0BB0BB0BB0BB0BB0BB0BB0BB0BB0BBzBBzBBzBBzBBzBBzBBzBBzBBzBBzBBzBBzBBzBBzBBzBBzBBzBBzBBzBBzBBzBBzBBzBBzBBzBBzB34BgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDBgDB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CB-CBCBBBt-UBruHBt+UB1iVBviVBCBBBCBBBCBBB3hVB5-UB9hVB7hVCCBBCCBBI9jVB9jVBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBICBBBCBBECBBN-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOB-lOC-lOG-lOzoeCBBBCBBBCBBBCBBBCBBBCBl8kCBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBTCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBnECBBBCBBBCBBBCBBBCBBBCBBBCBBDCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBKCBBBCBBBnglCBCBBBCBBBCBBBCBBBCBBECBBBvyyCDCBBBCBBBgDCCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBn0yCB90yCB10yCBh0yCBn0yCCjxyCBzyyCBpxyCBg6BBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBB-CBl0yCBvjlCBCBBBCBBBt2yCBCBBBCBBBCBBBCBBBCBBBCBBBCBBBCBBBhkzCZCBB9a-5Bd-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCB-8rCm6TCBB7gBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCH-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BmlBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvChDwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCBwCFvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvCBvC1DuCBuCBuCBuCBuCBuCBuCBuCBuCBuCBuCCuCBuCBuCBuCBuCBuCBuCBuCBuCBuCBuCBuCBuCBuCBuCCuCBuCBuCBuCBuCBuCBuCCuCBuCCtCBtCBtCBtCBtCBtCBtCBtCBtCBtCBtCCtCBtCBtCBtCBtCBtCBtCBtCBtCBtCBtCBtCBtCBtCBtCCtCBtCBtCBtCBtCBtCBtCCtCBtCk2BgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEBgEO-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-DB-D+CgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCL-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-B74CgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BhrVgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCBgCB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BB-BhB2BB2BB2BB2BB2BB2BB2BB2BB2BB2BB2BB2BB2BB2BB2BB2BB2BB2BB2BB2BB2BB2BB2BB2BB2BD1BB1BB1BB1BB1BB1BB1BB1BB1BB1BB1BB1BB1BB1BB1BB1BB1BB1BB1BB1BB1BB1BB1BB1BB1BtxekCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBkCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjCBjC")),this._CASE_ORBIT}static _Print=null;static get Print(){return this._Print||(this._Print=new g(m("hB9CBjBLBCpWBDFBFGBCCCBSBCsMBClBBDxBBDCBC2BBJaBFFBSVBC-FBCvBBD6BBDkDBP6BBDwBBDOBCbBDCCBJBGfBIqCBCgFBCHBDBBDVBCGBCEEBCBDIBDBBDDBJFFBCCBDBDYBDCBCFBFBBDVBCGBCBBCBBCBBDCCBDBFBBDCBEIIBCBCIIBPBLCBCIBCCBCVBCGBCBBCEBDJBCCBCCBDQQBCBDLBIGBCCBCHBDBBDVBCGBCBBCEBDIBDBBDCBICBFBBCEBDRBLBBCFBECBCDBEBBCCCBEEBEEBBBELBFEBECBCDBDHHPUBGMBCCBCWBCPBDIBCCBCDBIBBCCBCBBDDBDJBIVBCCBCWBCJBCEBDIBCCBCDBIBBGCBCDBDJBCCBNMBCCBCyBBCCBCFBFPBDZBCCBCRBEXBCIBCDDBFBEFFBEBCCCBGBHJBDCBN5BBFcBmBBBCCCBDBCXBCCCBVBDEBCCCBFBCJBDDBhBnCBCjBBFmBBCjBBCOBCMBmBlGBCGGD4LBCDBDGBCCCBCBDoBBCDBDgBBCDBDGBCCCBCBDOBC4BBCDBDiCBDfBEZBH1CBDFBD-TBCbBE4CBIVBKXBKTBNMBCCBCBBN9CBDJBHJBHNBCKBH4CBIqBBGlCBLeBCLBFLBFEEBoBBDEBMrBBFZBHKBE9BBDgCBCcBDKBHJBHNBDtBBDLBVsCBClFBJ7BBEOBE9BBGqBBDKBJqBBG1QBDFBDlBBDFBDHBCGCBdBD0BBCOBCNBDFBCSBDCBCIBSXBJuBBSBBDaBCMBEhBBPgBBQrEBF5UBXKBWz4BBD9LBGsBBCGGD3BBIBBPXBKGBCGBCGBCGBCGBCGBCGBCGBC9DBjBZBC4CBN1GBbPBC+BBC1CBDmDBGqBBC9CBC1CBKvBBCszcBE2BBK7KBV3FBJ8GBV7BBEJBH3BBJlCBJLBHzDBMdBEtCBCKBFgBBC2BBKNBDJBDmDBZbBLFBDFBDFBKGBCGBC7BBF9DBDJBHj9KBNWBFwBBloItLBDpDBnBGBNEBGZBCEBCCCBCCBCCBoUBhBpBBHyBBCSBCDBFEBCmEBF9FBEFBDFBDFBDCBEGBCGBOBBDLBCZBCSBCBBCOBDNBjB6DBGCBFsBBE3CBCMBEwBwBBsBBjEcBEwBBQbBFjBBKdBGqBBGdBCkBBFNBrB9EBDJBHjBBFjBBFnBBJzBBMLBCOBCGBCBBCKBCOBCGBCBBEzBBN2JBKVBLHBZFBCpBBCIBmCFBDCCBqBBCBBEDDBVBCnCBJIBxBSBCBBGgBBEaBGaBnB3BBFTBDxBBCBBGHBCCBCcBDCBFJBIIBI-BBhBmBBFLBK1BBEcBDaBGZBIDBNGBxCoCB4ByBBOyBBItBBJJBHlBBEcBJBBxGeBCpBBCCBDBBRFBJIBiBtBBJpBBXZBnBbBVWBKtCBFjBBK9BBCEBOYBIJBH0BBCRBJmBBK-CBCTBMRBCuBB-BGBCCCBCBCOBCKBH6BBGJBHDBCHBDBBDVBCGBCBBCEBCJBDBBDCBDHHGGBDGBEEBMJBCDDClBBCJBCDDCDBCJBCBBJBBe7CBCEBfnCBJJBnF1BBDlBBjBkCBMJBHMBU5BBHJBHTBdaBDOBFWB6F7BBlDyCBNHBDDDBGBCBBCdBCBBDLBKJBnCHBDtBBDKBcnCBJyCBOoCBIJB3CHB5ChBBPJBHIBCsBBCNBLcBEfBDVBCNBqCGBCBBCrBBECCBCCBHBJJBHFBCBBCkBBCBBCFBIJBHrBBFJB3HYBIQBCoBBEcB2CQQBwBBO6cBnDuDBCEBMjGBtyCiDBOvhBBRVBL68DBGmSB61G5BBn2B4RBIeBCJBFwCBCJBHdBDFBLlCBLJBCGBCUBGSBxN5BBnG6CBGYBDYBtBqCBF4BBIQBhCEBMGBK1mHBqBfBiDyDB+vIDBCGBCBBCiJBQeeBBBDPPBCBJrMBloCqDBGMBEIBIJBDDBh7D8HBEzNBHWBQQBQtBBDWBKzDB9B1HBLmBBDpCBJvDBWlCB7DTBNTBN2CBKYBoE0CBCmCBCBBDDDBDDBCBCLBCCCBFBCgCBCDBDHBCGBCbBCDBCEBCEEBFBCzKBDjJBD9VBQEBCOBxiBeBHFB2GGBCQBDGBCBBCEBG9BBiBxDxDBrBBENBDJBFBBhKeBS5BBGxOxOBoBB3GqBBFhGhGBdBCVBJBBhHGBCDBCBBCOBCkGBDPBqBrCBFJBFBByYjCBtC8BBjGDBCaBCBBCDDCJBCDBCCCHFFCECBBBCBBCDDCICBCCDDBCGBCDBCDBCCCBIBCQBGCBCEBCQB1BBBvIrBBFjDBNOBDOBCOBCkBBLtFB5BcBOrBBFIBIBBPFB7E4eBEQBEMBE5GBHLBFQQBKBF3BBJJBHnBBJdBDLBFBBPIBoB3KBJNBDMBEKBE4BBCFFBOBDLBFJBIyEBCmDBmgB-2pBBhB9oEBDt0FBDwpHBQtTBjtC9QBjvBq6EBGppIBnkzVvHB",!1))),this._Print}static CATEGORIES=new Go({C:()=>new g(m("AfBgDgBBOrWrWBHHBCBICCVuMuMnBBBzBBBE4B4BBGBcDBHQBXhGhGxBBB8BBBmDNB8BBByBBBQddBCCMEBhBGBsCiFiFJBBDBBXIICCBFBBKBBDBBFHBCDBDGGBaaBEEHDBDBBXIIDGDBCCGDBDBBECBCGBFCCBFBSJBEKKEXXIDDGBBLIEBCCBNBFBBNGBIEEJBBDBBXIIDGGBKKBDDBEEBFBEDBDGGBTTBIBDHHBBBEFFBBBDCCDCBDCBECBNDBGCBEFFBCCBEBCNBWEBOEEYRRBKKEFFBFBDEEDBBFBBLGBXEEYLLGBBKEEFGBDEBEFFBLLELBOEE0BEEHDBRBBbEETCBZKKCBBICBCDBHCCJFBLBBELB7BDBekBBDCCGZZCYYBGGCIILBBFfBpClBlBBCBoBlBlBQOOBjBBnGCCBDBCBB6LFFBIICFFBqBqBFBBiBFFBIICFFBQQ6BFFBkCkCBhBhBBBBbFB3CBBHBB+UCB6CGBXIBZIBVLBOEEDLB-CBBLFBLFBPMMBEB6CGBsBEBnCJBgBNNBCBNDBCCBrBBBGKBtBDBbFBMCB-BBBiCeeBMMBEBLFBPBBvBBBNTBuCnFnFBGB9BCBQCB-BEBsBBBMHBsBEB3QBBHBBnBBBHBBJGCgBBB2BQQPBBHUUBEEKMMBDBbEByBPBDBBcOOBBBjBNBiBOBtEDB7UVBMUB14BBB-LEBuBCCBDBCBB5BGBDNBZIBI4BI-DhBBb6C6CBKB3GZBxC3C3CBoDoDBDBsB-C-C3CIBxBuzcuzcBBB4BIB9KTB5FHB+GTB9BCBLFB5BHBnCHBNFB1DKBfCBvCMMBCBiB4B4BBHBPBBLBBoDXBdJBHBBHBBHIBIII9BDB-DBBLFBl9KLBYDByBjoIBvLBBrDlBBILBGEBbGGCGDrUfBrBFB0BUUFDBGoEoEBCB-FCBHBBHBBHBBECBIIIBLBDBBNbbUDDQBBPhBB8DEBEDBuBCB5COOBBBCuBBvBhEBeCByBOBdDBlBIBfEBsBEBfmBmBBCBPpBB-EBBLFBlBDBlBDBpBHB1BKBNQQIDDMQQIDDBBB1BLB4JIBXJBJXBHrBrBKkCBHBBCtBtBDCBCBBYpCpCBGBKvBBUDDBDBiBCBcEBclBB5BDBVBBzBDDBDBJEEeBBEDBLGBKGBhCfBoBDBNIB3BCBeBBcEBbGBFLBIvCBqC2BB0BMB0BGBvBHBLFBnBCBeHBDvGBgBrBrBEBBDPBHHBKgBBvBHBrBVBblBBdTBYIBvCDBlBIB-BGGBLBaGBLFB2BTTBGBoBIBhDVVBJBTwBwBB8BBICCFQQMFB8BEBLFBFJJBDDBXXIDDGLLBDDBEEBCCBEBCEBIBBICBGKBLCCBCCnBLLCBBCFFLDDBGBDcB9CGGBcBpCHBLlFB3BBBnBhBBmCKBLFBOSB7BFBLFBVbBcBBQDBY4FB9BjDB0CLBJBBCBBJDDfDDBNNBHBLlCBJBBvBBBMaBpCHB0CMBqCGBL1CBJ3CBjBNBLFBKuBuBPJBeCBhBBBXPPBnCBIDDtBCBCDDKHBLFBHDDmBDDHGBLFBtBDBL1HBaGBSqBqBBBBe0CBCOBzBMB8clDBwDGGBJBlGryCBkDMBxhBPBXJB88DEBoS41GB7Bl2BB6RGBgBLLBCByCLLBEBfBBHJBnCJBLIIWEBUvNB7BlGB8CEBaBBarBBsCDB6BGBS-BBGKBIIB3mHoBBhBgDB0D8vIBFIIDkJkJBNBCcBEBBCNBFHBtMjoCBsDEBOCBKGBLBBF-6DB+HCB1NFBYOBSOBvBBBYIB1D7BB3HJBoBBBrCHBxDUBnC5DBVLBVLB4CIBamEB2CoCoCDBBCBBDBBFNNCIIiCFFBJJIddFGGCCBI1K1KBlJlJB-V-VBNBGQQBuiBBgBFBH0GBISSBIIDGGBDB-BgBBCvDBuBCBPBBLDBD-JBgBQB7BEBCvOBrB1GBsBDBC-FBgBXXBGBD-GBIFFDQQmGBBRoBBtCDBLDBDwYBlCrCB+BhGBFccDCCBCCLFFCCCBEBCDBCECEDDCBBCICDCCBFFIKFCLLSEBEGGSzBBDtIBtBDBlDLBQBBQQQmBJBvF3BBeMBtBDBKGBDNBH5EB6eCBSCBOCB7GFBNDBCOBNDB5BHBLFBpBHBfBBNDBDNBKmBB5KHBPBBOCBMCB6BCCBCBRBBNDBLGB0EoDoDBjgBBh3pBfB-oEBBv0FBBypHOBvThtCB-QhvBBs6EEBrpIlkzVBxHvw-FB",!1)),Cc:()=>new g(m("AfgDgB",!0)),Cf:()=>new g(m("tFzqBzqBBEBXhGhGyBhMhMBxCxCs5D9-B9-BBDBbEByBEBCJBw03B6H6HBBBimEQQj7IPBhjiBDBwmFHBn0rYffB+CB",!1)),Cn:()=>new g(m("4bBBHDBICCVuMuMnBBBzBBBE4B4BBGBcDBHKBvI9B9BBmDmDBMB8BBByBBBQddBCCMEBjBEBuHJJBDDBXXICCBBBFBBKBBDBBFHBCDBDGGBaaBEEHDBDBBXIIDGDBCCGDBDBBECBCGBFCCBFBSJBEKKEXXIDDGBBLIEBCCBNBFBBNGBIEEJBBDBBXIIDGGBKKBDDBEEBFBEDBDGGBTTBIBDHHBBBEFFBBBDCCDCBDCBECBNDBGCBEFFBCCBEBCNBWEBOEEYRRBKKEFFBFBDEEDBBFBBLGBXEEYLLGBBKEEFGBDEBEFFBLLELBOEE0BEEHDBRBBbEETCBZKKCBBICBCDBHCCJFBLBBELB7BDBekBBDCCGZZCYYBGGCIILBBFfBpClBlBBCBoBlBlBQOOBjBBnGCCBDBCBB6LFFBIICFFBqBqBFBBiBFFBIICFFBQQ6BFFBkCkCBhBhBBBBbFB3CBBHBB+UCB6CGBXIBZIBVLBOEEDLB-CBBLFBLFBbFB6CGBsBEBnCJBgBNNBCBNDBCCBrBBBGKBtBDBbFBMCB-BBBiCeeBMMBEBLFBPBBvBBBNTBuCnFnFBGB9BCBQCB-BEBsBBBMHBsBEB3QBBHBBnBBBHBBJGCgBBB2BQQPBBHUUBEEKmDmDNBBcOOBBBjBNBiBOBtEDB7UVBMUB14BBB-LEBuBCCBDBCBB5BGBDNBZIBI4BI-DhBBb6C6CBKB3GZBxC3C3CBoDoDBDBsB-C-C3CIBxBuzcuzcBBB4BIB9KTB5FHB+GTB9BCBLFB5BHBnCHBNFB1DKBfCBvCMMBCBiB4B4BBHBPBBLBBoDXBdJBHBBHBBHIBIII9BDB-DBBLFBl9KLBYDByBDBvzIBBrDlBBILBGEBbGGCGDrUfBrBFB0BUUFDBGoEoEBCC-FCBHBBHBBHBBECBIIIBIBGBBNbbUDDQBBPhBB8DEBEDBuBCB5COOBBBCuBBvBhEBeCByBOBdDBlBIBfEBsBEBfmBmBBCBPpBB-EBBLFBlBDBlBDBpBHB1BKBNQQIDDMQQIDDBBB1BLB4JIBXJBJXBHrBrBKkCBHBBCtBtBDCBCBBYpCpCBGBKvBBUDDBDBiBCBcEBclBB5BDBVBBzBDDBDBJEEeBBEDBLGBKGBhCfBoBDBNIB3BCBeBBcEBbGBFLBIvCBqC2BB0BMB0BGBvBHBLFBnBCBeHBDvGBgBrBrBEBBDPBHHBKgBBvBHBrBVBblBBdTBYIBvCDBlBIBlCJBCBBaGBLFB2BTTBGBoBIBhDVVBJBTwBwBB8BBICCFQQMFB8BEBLFBFJJBDDBXXIDDGLLBDDBEEBCCBEBCEBIBBICBGKBLCCBCCnBLLCBBCFFLDDBGBDcB9CGGBcBpCHBLlFB3BBBnBhBBmCKBLFBOSB7BFBLFBVbBcBBQDBY4FB9BjDB0CLBJBBCBBJDDfDDBNNBHBLlCBJBBvBBBMaBpCHB0CMBqCGBL1CBJ3CBjBNBLFBKuBuBPJBeCBhBBBXPPBnCBIDDtBCBCDDKHBLFBHDDmBDDHGBLFBtBDBL1HBaGBSqBqBBBBe0CBCOBzBMB8clDBwDGGBJBlGryCBkDMB3iBJB88DEBoS41GB7Bl2BB6RGBgBLLBCByCLLBEBfBBHJBnCJBLIIWEBUvNB7BlGB8CEBaBBarBBsCDB6BGBS-BBGKBIIB3mHoBBhBgDB0D8vIBFIIDkJkJBNBCcBEBBCNBFHBtMjoCBsDEBOCBKGBLBBJ76DB+HCB1NFBYOBSOBvBBBYIB1D7BB3HJBoBBBjGUBnC5DBVLBVLB4CIBamEB2CoCoCDBBCBBDBBFNNCIIiCFFBJJIddFGGCCBI1K1KBlJlJB-V-VBNBGQQBuiBBgBFBH0GBISSBIIDGGBDB-BgBBCvDBuBCBPBBLDBD-JBgBQB7BEBCvOBrB1GBsBDBC-FBgBXXBGBD-GBIFFDQQmGBBRoBBtCDBLDBDwYBlCrCB+BhGBFccDCCBCCLFFCCCBEBCDBCECEDDCBBCICDCCBFFIKFCLLSEBEGGSzBBDtIBtBDBlDLBQBBQQQmBJBvF3BBeMBtBDBKGBDNBH5EB6eCBSCBOCB7GFBNDBCOBNDB5BHBLFBpBHBfBBNDBDNBKmBB5KHBPBBOCBMCB6BCCBCBRBBNDBLGB0EoDoDBjgBBh3pBfB-oEBBv0FBBypHOBvThtCB-QhvBBs6EEBrpIm8yVBCdBhD-DBxHvw-BB---BBB---BBB",!1)),Co:()=>new g(m("gg4B-nGh4hc9--BD9--B",!0)),Cs:()=>new g(m("gg2B--B",!0)),L:()=>new g(m("hCZBHZBwBLLFGGBVBCeBCpOBFLBPEBICCiEEBCBBDDBCHHCCBCCCBSBCyCBCqEBJlFBClBBDHHBnBBoCaBFDBuBqBBkBBBCiDBCQQBIIBLLBBBDRRCdBe4CBMZZBfBKBBFGGBUBFKKEYYBXBIKBGXBCGBRpBB7B1BBETTIJBQPBFHBDBBDVBCGBCEEBCBERROBBCCBPBBLJJBEBFBBDVBCGBCBBCBBCBBgBDBCUUBBBRIBCCBCVBCGBCBBCEBETTQBBYMMBGBDBBDVBCGBCBBCEBEffBCCBBBQSSCFBECBCDBEBBCCCBEEBEEBBBELBX1B1BBGBCCBCWBCPBEbbBBBCBBDBBfFFBGBCCBCWBCJBCEBEffBBBCBBQBBSIBCCBCoBBDRRGCBJCBZFBGRBEXBCIBCDDBFB7BvBBCBBNGB7BBBCCCBDBCXBCCCBIBCBBKDDBDBCWWBCBhBgCgCBGBCjBBcEB0DqBBVRRBEBFDBEEEBIIBBBFMBNSSBkBBCGGDqBBCsKBCDBDGBCCCBCBDoBBCDBDgBBCDBDGBCCCBCBDOBC4BBCDBDiCBmBPBR1CBDFBErTBDQBCZBGqCBHHBIRBOSBPRBPMBCCBQzBBkBFFkC4CBIEBDhBBCGGBkCBLeByBdBDEBMrBBFZB3BWBK0BBzC+C+CBtBBSHB3BdBOBBLrBBbjBBqBCBLjBBDKBGqBBDCBqBDBCFBCBBEGGB+FBhC1IBDFBDlBBDFBDHBCGCBdBD0BBCGBCEEBBBCGBEDBDFBFMBGCBCGB1DOORMBmDFFDJBCEEBDBHGCBCBCKBDDBGEBF1B1BB8zC8zCBjHBHDBEBBNlBBCGGD3BBIRRBVBKGBCGBCGBCGBCGBCGBCGBCGBxC2O2OBrBrBBDBGBBF1CBHCBC5CBCDBGqBBC9CBSfBxBPBhQ-tGBhCs0VBkCtBBDsIBEPBLBBVuBBReBDlCByBIBDmDBDxCBVQBCCBCDBCWBezBBPxBB-BFBECCBMMBaBLWBacBIuBBdRRBDBCJBLEBCoBBYCBCHBVWBEEEBwBBCEEBDDBDBDCCZCBDKBICBNFBDFBDFBKGBCGBCqBBCNBHyDBej9KBNWBFwBBloItLBDpDBnBGBNEBGCCBIBCMBCEBCCCBCCBCCBqDBiBqLBT-BBD1BBpBLB1DEBCmEBlBZBHZBM4CBEFBDFBDFBDCBkBLBCZBCSBCBBCOBDNBjB6DBmMcBEwBBwBfBOTBCHBHlBBLdBDjBBFHBxB9EBTjBBFjBBFnBBJzBBNKBCOBCGBCBBCKBCOBCGBCBBEzBBN2JBKVBLHBZFBCpBBCIBmCFBDCCBqBBCBBEDDBVBLWBKeBiCSBCBBLVBLZBHZBnB3BBHBBhCQQBCBCCBCcBrBcBEcBkBHBCbBc1BBLVBLSBORBvDoCB4ByBBOyBBOjBBnBbBKWB7HpBBHBBRFB5BcBLJJBUBrBRBvBUBcWBN0BB6BBBDOOBrBBhBYBbjBBeDDJiBBENNBuBBPDBWCCkBRBCYBUBBgCGBCCCBCBCOBCJBIuBBnBHBDBBDVBCGBCBBCEBETTNEBfJBCDDClBBCaaCtBtBBzBBTDBVCBfvBBVBBC5F5FBtBBqBDBlBvBBV8B8BBpBBOoCoCBZBmBGB6FrBB1D-BBgBHBDDDBGBCBBCXBQCC-CHBDmBBRCCdLLBmBBIWWMtBBUTTBnCBoGgBBgBIBCkBBSyByBBcBxDGBCBBClBBWaaBEBCBBCfBPYYBqBBlISBQCCBLBChBB9DwCwCB4cBnHjGBtyCgDBQvhBBSFBa68DBGmSB61GdBj3B4RBIeBSuCBSdBTvBBRDBgBUBGSBxNsBB0G-BBhBYBDYBtBqCBGjCjCBLBhCBBCPPBNNB0mHBqBfBiDyDB+vIDBCGBCBBCiJBQeeBBBDPPBCBJrMBloCqDBGMBEIBIJBn7F0CBCmCBCBBDDDBDDBCBCLBCCCBFBCgCBCDBDHBCGBCbBCDBCEBCEEBFBCzKBDYBCYBCeBCYBCeBCYBCeBCYBCeBCYBCHB15BeBHFBmI9BBzEsBBLGBRiKiKBcBTrBBlPbBlHdBDwGwGBdBCCBCBBCGBDEBKBBhHGBCDBCBBCOBCkGB8BjCBI1lB1lBBCBCaBCBBCDDCJBCDBCCCHFFCECBBBCBBCDDCICBCCDDBCGBCDBCDBCCCBIBCQBGCBCEBCQBlqE-2pBBhB9oEBDt0FBDwpHBQtTBjtC9QBjvBq6EBGppIB",!1)),LC:()=>new g(m("hCZBHZB7BLLBVBCeBCiGBCDBFvGBDZBhGDBDBBECBCHHCCBCCCBSBCyCBCqEBJlFBClBBKoBB44ClBBCGGDqBBDCBhV1CBDFBjkCKBGqBBDCBhCrBBgCMBChBBmD1IBDFBDlBBDFBDHBCGCBdBD0BBCGBCEEBBBCGBEDBDFBFMBGCBCGBmIFFDJBCEEBDBHGCBCBCFBFDDBCBGEBF1B1BB8zC8zCB6DBDmDBHDBEBBNlBBCGGzoetBBTbBnEtCBCWBEDBCsCBZBBE2Z2ZBpBBGIBIvCBh6TGBNEBqgBZBHZBmlBvCBhDjBBFjBB1DKBCOBCGBCBBCKBCOBCGBCBBk2ByBBOyBB+CVBLVB74C-BBhrV-BBhBYBDYBtpZ0CBCmCBCBBDDDBDDBCBCLBCCCBFBCgCBCDBDHBCGBCbBCDBCEBCEEBFBCzKBDYBCYBCeBCYBCeBCYBCeBCYBCeBCYBCHB15BJBCTBHFB2uCjCB",!1)),Ll:()=>new g(m("hDZB7BqBqBBWBCHBC2BCBQCBuBCDECBBBDCCDEEBFFDEEBBBDDDCCCDCCBCCDEECDDBDDBBBHGDCOCBSCBDDCEEC4BCBFBDDDBCCFICBjCBDZBiGCCEEEBBBTccBhBBCBBECBCWCBDBCGDB0B0BBuBBCgBCK0BCDMCBgDCxBoBBo6CqBBDCB5XFBjkCIBC2D2DBqBBgCMBChBBnD0ECBHBCgDCBHBJFBLHBJHBJFBLHBJHBJNBDHBJHBJHBJEBCBBHEEBBBCBBJDBDBBJHBLCBCBBzIEEBEEcKFDBBJDBF2B2Bs1CvBBCEEBGCFCCBCCBEBGiDCBIICFFNlBBCGG0oesBCUaCoEMCBBBC+BCBGBCCCDICFCCDCCBBBCSCGGGCMCFCCDOCbEE2ZqBBGIBIvCBh6TGBNEBqhBZBumBnBBpEjBB8EKBCOBCGBCBBk4ByBB+DVB75CfBhsVfB8BYBnqZZBbGBCRBbZBbDBCCCBFBCKBbZBbZBbZBbZBbZBbZBbZBbZBbbBdYBCFBbYBCFBbYBCFBbYBCFBbYBCFBC15B15BBIBCTBHFB4vChBB",!1)),Lm:()=>new g(m("wVRBFLBPEBICCmEGG-OnHnHlFBBuIBBFgBgBKEEhFoFoF1mBgEgE2R72B72BsDkTkTxOFBvF+BBOjBjBBjBByVOORMBg-CBByHgGgG2OsBsBBDBGiDiDB+C+CBBB34bjnBjnBBEBvIzDzDdBB6DIBxCYYpDDBEBB2OXXqEtDtDWBBoDDBKngVngVuBBBh-BFBCpBBCIB0sBhBhB2K04D04DnrTDB9PCBpBBBnRMBhCBBCPPB9-P9-PBCBCGBCBByhM9BBqGGBud0Q0QsSAB",!1)),Lo:()=>new g(m("qFQQhIFFBCBxGBB7ZaBFDBuBfBCJBkBBBCiDBCZZBLLBBBDRRCdBe4CBMZZBfBWVBrBYBIKBGXBCGBRoBB8B1BBETTIJBROBFHBDBBDVBCGBCEEBCBERROBBCCBPBBLJJBEBFBBDVBCGBCBBCBBCBBgBDBCUUBBBRIBCCBCVBCGBCBBCEBETTQBBYMMBGBDBBDVBCGBCBBCEBEffBCCBBBQSSCFBECBCDBEBBCCCBEEBEEBBBELBX1B1BBGBCCBCWBCPBEbbBBBCBBDBBfFFBGBCCBCWBCJBCEBEffBBBCBBQBBSIBCCBCoBBDRRGCBJCBZFBGRBEXBCIBCDDBFB7BvBBCBBNFB8BBBCCCBDBCXBCCCBIBCBBKDDBDBYDBhBgCgCBGBCjBBcEB0DqBBVRRBEBFDBEEEBIIBBBFMBNyDyDBnKBCDBDGBCCCBCBDoBBCDBDgBBCDBDGBCCCBCBDOBC4BBCDBDiCBmBPByDrTBDQBCZBGqCBHHBIRBOSBPRBPMBCCBQzBBpBkCkCBhBBC0BBIEBDhBBCGGBkCBLeByBdBDEBMrBBFZB3BWBK0BBxFuBBSHB3BdBOBBLrBBbjBBqBCBLdByDDBCFBCBBE7hB7hBBCB4-C3BBZWBKGBCGBCGBCGBCGBCGBCGBCGBoR2B2BF1CBJCCB4CBFGGBpBBC9CBSfBxBPBhQ-tGBhC0wUBC2jBBkCnBBJrIBFPBLBBjCyByBBkCBqFoDoDEGBCCBCDBCWBezBBPxBB-BFBECCBMMBaBLWBacBIuBBuBEBDIBLEBCoBBYCBCHBVPBCFBEEEBwBBCEEBDDBDBDCCZBBEKBIPPBEBDFBDFBKGBCGByEiBBej9KBNWBFwBBloItLBDpDBkCCCBIBCMBCEBCCCBCCBCCBqDBiBqLBT-BBD1BBpBLB1DEBCmEBqDJBCsBBDeBEFBDFBDFBDCBkBLBCZBCSBCBBCOBDNBjB6DBmMcBEwBBwBfBOTBCHBHlBBLdBDjBBFHBhEtCBjDnBBJzBB9CzBBN2JBKVBLHB5EFBDCCBqBBCBBEDDBVBLWBKeBiCSBCBBLVBLZBHZBnB3BBHBBhCQQBCBCCBCcBrBcBEcBkBHBCbBc1BBLVBLSBORBvDoCB4FjBBnBDBCxJxJBoBBHBBRCBCBB5BcBLJJBUBrBRBvBUBcWBN0BB6BBBDOOBrBBhBYBbjBBeDDJiBBENNBuBBPDBWCCkBRBCYBUBBgCGBCCCBCBCOBCJBIuBBnBHBDBBDVBCGBCBBCEBETTNEBfJBCDDClBBCaaCtBtBBzBBTDBVCBfvBBVBBC5F5FBtBBqBDBlBvBBV8B8BBpBBOoCoCBZBmBGB6FrBB0GHBDDDBGBCBBCXBQCC-CHBDmBBRCCdLLBmBBIWWMtBBUTTBnCBoGgBBgBIBCkBBSyByBBcBxDGBCBBClBBWaaBEBCBBCfBPYYBnBBCBBlISBQCCBLBChBB9DwCwCB4cBnHjGBtyCgDBQvhBBSFBa68DBGmSB61GdBj3B4RBIeBSuCBSdBTvBB0BUBGSB0NnBB2MqCBGwFwFB0mHBqBfBiDyDBuwIiJBQeeBBBDPPBCBJrMBloCqDBGMBEIBIJBxzI2P2PBrBBiBiKiKBcBTrBBlPaBmHdBDwGwGBdBCCBCBBCGBDEBKiHiHBFBCDBCBBCOBCkGB8pBDBCaBCBBCDDCJBCDBCCCHFFCECBBBCBBCDDCICBCCDDBCGBCDBCDBCCCBIBCQBGCBCEBCQBlqE-2pBBhB9oEBDt0FBDwpHBQtTBjtC9QBjvBq6EBGppIB",!1)),Lt:()=>new g(m("lOGDnB2sH2sHBGBJHBJHBNQQwBAB",!1)),Lu:()=>new g(m("hCZBmDWBCGBiB2BCDOCDuBCBECEBBCCCBCCBBBDDBCBBCCBEBBCBBCECBCCDCCBCCBBBCCCBEEIJDCMCDQCDDDCCBC4BCIBBCBBDCCBCBCGCiJCCEJJHCCBBBCCCBCCBPBCIBkBDDBBBEWCGDDCBBDyBBxBgBCK2BCBMCD+CCDlBBq6ClBBCGGzW1CB0kCHHBpBBDCBhK0ECKgDCKHBJFBLHBJHBJFBMGCJHBpCDBNDBNDBNEBMDBnIFFECBDCBDEEBDBHGCBCBDDBLBBG+B+B9zCvBBxBCCBBBDGCBCBCDDJCBCgDCJCCFuqeuqeCqBCUaCoEMCE8BCLECBICFCCDCCEUCBDBCEBCOCBCBCCCBQCZs5Vs5VBYBmmBnBBpEjBB9EKBCOBCGBCBBr3ByBB+EVB75CfBhsVfBhCYBoqZZBbZBbZBbCCBGDBDDBCBCHBbZBbBBCDBDHBCGBcBBCDBCEBCEEBFBcZBbZBbZBbZBbZBbZBfYBiBYBiBYBiBYBiBYBiB2pE2pEBgBB",!1)),M:()=>new g(m("gYvDB0IGBoIsBBCCCBCCBCCpCKBxBUBRmDmDBFBDFBDBBCDBkBffBZB8CKB7BIBKZZBCBCIBCCBCEBsBCB8BIBrBXBCgBB3BCBCRBCGBLBBeCB5BCCBFBDBBDCBKLLBbbDCB5BCCBDBFBBDCBEffBEEMCB5BCCBGBCCBCCBVBBXFBCCB5BCCBFBDBBDCBICBLBBf8B8BBDBECBCDBKpBpBBDB4BCCBFBCCBCDBIBBMBBeCB5BCCBFBCCBCDBIBBMBBQNNBCB4BBBCGBCCBCDBKLLBeeBBBnCFFBEBCCCBGBTBB+BDDBFBNHBjDDDBHBMGBqCBBcECFBByBTBCBBGKBCjBBKlDlDBSBYDBFCBCCBDGBEDBOLBCLLBCBgWCBzdDBdCBeBBfBBhCfBKuBuBBBBC2D2DBjBjB3DLBFLB8GEB6BJBCcBDxBxBBsBBDLBVEBwBQBnBIBNCBfMB5BNBxBTB5ECBCUBFHHDCBnG-BBxWgBB--CCBuEhDhDBeBrRFBqDBB1udDBCJBhBBBxCBBxIEEFYYBDBF0C0CBzBzBBQBbRBOnBnBBGBaMBtBDBwBNBlBkCkCBMBNJJBuBuBBBBzBCCBBBDBBGBBCqBqBBDBGBBtHHBCBBx5TiXiXBOBRPBuejHjH2EEBn0BCBCBBGDBpBCBFmFmFB+R+RBCBiCEB+JBBuCFBnCKByBDB7DCB2BOBqBDDBLLBCBuBKBI+B+BBBBlBNBRBBtBNNBBBxBNBJDBCBB9CLBHDD+ELBWDB4BBBCGBDBBDCBKLLBDDBFBEEBkCIBCDDCDBCEBCPPBzCzCBQBYyCyCBSBsHGBDIBcBBzCQBrDMBmDOBhIOB2HFBCBBDDBCCCBuEuEBFBDGBEddBIBpBGBCDBJKKBJBvBPBnGHBoGHBCHBzCVBCNB7DFBECCBCCBFBCjCjCBDBCBBCEB8KDBKBBCxBxBBFBEEBYmnFmnFHOBpmLRBhuCEB8BGB5gBCCB1BBIDByCMMBslTslTBizEizEBsBBDWB-QEBEFBJHBDGBfDB1ECB89B2BBFxBBJPPXEBCOBxqBGBCQBDGBCBBCEBlDhFhFBFB4L+B+BBCB9PDB-HBB0HDDIBBG7O7OBFBuDGB29lYvHB",!1)),Mc:()=>new g(m("joC4B4BDCBJDBCBBzBBB7BCBHBBDBBLsBsB7BCBjC7B7BBBBJCCB2B2BB7B7BCHHBDDBLLnDBBCBBECBCCBLqBqBBBB+BDB+BBB7BCCBDBDBBCBBKBBdPPB7B7BBBBGCBCCBLrBrBBsCsCBBBHHBTBBrKBBgCsFsFBFFHDDBaaBLLBBBDGBWBBDFBDLLBBB5zBffiEIIBGBCBB7KDBDCBFBBCFBhHBB7BCCKCCBJJBEByExBxBGCCBDBCBB+BffFBBD9B9BDCBCEEBxBxBBGBJBBsFWW35EBB0-dBBD5C5CBzBzBBOBvEBBwBxBxBBFFBDDBBBvDBBDBBZuBuBCuDuDDBBGuHuHBCCBCCBCC0gZCCgEuBuBBBBFBB0DZZB8B8BxBCBKBBO+C+CBBBEBBCrFrFBBBgBBB7BBBCDBDBBDCBKLLB1C1CBBBIDDCDBCBBCmDmDBBBJBBErDrDBBBHCCBCBDuHuHBBBHDBDyDyDBBBJBBCuDuDCBBHoDoDCBBFmImIBBBK4H4HBEBCBBFDDCvEvEBBBJDBF1C1CeBB-BqGqGECCoGPPrDIID2G2GBDBFBBC-K-KBNNxBBBJBBCpvQpvQBBBlxD2BBpDBB0rYBBHFB",!1)),Me:()=>new g(m("okBBB1xF-wB-wBBCBCCBsshBCB",!1)),Mn:()=>new g(m("gYvDB0IEBqIsBBCCCBCCBCCpCKBxBUBRmDmDBFBDFBDBBCDBkBffBZB8CKB7BIBKZZBCBCIBCCBCEBsBCB8BIBrBXBCfB4BCCFHBFEEBFBLBBe7B7BFDBJVVBbbDBB6BFFBFFBDDBBBEffBEEMBB6BFFBDBCBBFVVBXXBEBC7B7BDCCBCBJIIBMMBff+BNNzBEE4BCCBBBGCBCDBIBBMBBe7B7BDHHGBBVBBdBB6BBBFDBJVVBeepCIIBBBC7C7CDGBNHBjDDDBHBMGBqCBBcEC4BNBCEBCBBGKBCjBBKnDnDBCBCFBCBBDBBaBBFCBRDBODDBHHQgWgWBBBzdCBeBBfBBfBBhCBBCGBJDDBJBKuBuBBBBC2D2DBjBjB3DCBFBBKHHBBB8GBBD7B7BCGBCCCDHBHJBDxBxBBMBCeBDLBVDBxBCCBDBCGGpBIBNBBhBDBDBBCCB5BCCBEECCB7BHBDBB5ECBCMBCGBFHHEBBnG-BBxWMBFEEBKB--CCBuEhDhDBeBrRDBsDBB1udFFBIBhBBBxCBBxIEEFaaBGG4EBBbRBOnBnBBGBaKBvBCBxBDDBCBDBBoBkCkCBEBDBBDBBNJJwB0B0BCCBDBBGBBCrBrBBJJvHDDFx5Tx5TiXPBRPBuejHjH2EEBn0BCBCBBGDBpBCBFmFmFB+R+RBCBiCEB+JBBuCFBnCKByBDB8D3B3BBNBqBDDBLLBBByBDBDBBI+B+BBBBlBEBCHB-BNNB1B1BBHBLDBDgDgDBBBDCCBHHD+E+EEHBWBB6BBBEmBmBBFBEEBnCFBOECPBB2CHBDCBCYY1CFBCFFBCCBvHvHBCBHBBCBBcBB2CHBDCCBrDrDCDDBEBCmDmDCDDBCBCEBkIIBCBBhIBBCFFxEDBDBBFhBhBBIBpBFBDDBJKKBEBDCBvBMBCBBnGCCBBBCqGqGBFBCFBCzCzCBUBDGBCBBCBB7DFBECCBCCBFBCpCpCBEEC8K8KBMMB1B1BBDBGCCYmnFmnFHOBpmLLBECBhuCEB8BGB5gBgCgCBCByC5lT5lTBizEizEBsBBDWBhRCBSHBDGBfDB1ECB89B2BBFxBBJPPXEBCOBxqBGBCQBDGBCBBCEBlDhFhFBFB4L+B+BBCB9PDB-HBB0HDDIBBG7O7OBFBuDGB29lYvHB",!1)),N:()=>new g(m("wBJB5DBBGDDBBBitBJBnEJBnGJB9MJB3DJBFFBtDJB3DJB3DJBDFBvDMB0DJBJGBoDJBpDGBISBuDJBhDJB3DJBnCTBtIJBnCJBwWTBybCBwHJBHJBXJBtJJBhEKBmFJBHJB3FJB3CJBnEJBHJB3gBEEBEBHJBnGyBBDEB3W7BBvCVB3TdBqrBqYqYaIBPCB4KDBrEJBfHBCOBhBJBoBOBh7cJB9FJBhKFB7EJBnBJBnGJBXJB3CJB3MJB34UJBuPsBBN4BBSBB2KaBlBDBeJJnEEBrGJBvdHBaGBoBIBsCEBXFBhFBBDPBDtBBhCIB1BBBfCBsCEBpDHBZHBqBGBrKFBxBJBHJB3IeB-EJBrBDBxDGBnEdBhEJB9BJBxEJBITB8HJB3KJB3DJB3LJBnDJBHTBtCLBlNSB+CJB3UJB3CcBkHJBnCJB3BJBnLJBnDUBshBuDBimPJBnpCJB3CJBnEJBCGBvQJBnIWB+KCB6nXJBnuBTBNTBtDYB2iBxBBhqCJBnNJB3PJB4HJBtWIBhEJB4Y6BBCCBCDBtCsBBCOBjeMBk3CJB",!1)),Nd:()=>new g(m("wBJnxBJnEJnGJ9MJ3DJ3DJ3DJ3DJ3DJ3DJ3DJ3DJ3DJhDJ3DJnCJ3IJnCJn6BJnBJtJJhEJnFJHJ3FJ3CJnEJHJnuiBJnVJnBJnGJXJ3CJ3MJ34UJnsBJnkCJHJ9YJhEJ9BJxEJ3IJ3KJ3DJ3LJnDJHTtCJnNJnDJ3UJ3CJ3HJnCJ3BJnLJ3uQJnpCJ3CJnEJ3QJ37XJ12CxBhqCJnNJ3PJ4HJ2aJ30EJ",!0)),Nl:()=>new g(m("u3FCBwzCiBBDDB-zDaaBHBPCBs1dJBxyW0BBtOJJnEEBrhIuDBm8SCB",!1)),No:()=>new g(m("yFBBGDDBBB2pCFB5LFB5DCBmEGB6GGBSIByNJB2hBTB0jBJBhP20B20BEFBHJBnGPBqB3W3WB6BBvCVB3TdBqrB1kB1kBBCBrEJBfHBCOBhBJBoBOBxrdFBymWsBBiCDBSBB2KaBlBDB1pBHBaGBoBIBsCEBXFBhFBBDPBDtBBhCIB1BBBfCBsCEBpDHBZHBqBGBrKFBhLeB-EJBrBDBxDGBnETB8LTBmqBBBvNIBobSB0aUBn8SGB-YWBqhZTBNTBtDYBvqFIBid6BBCCBCDBtCsBBCOBjeMB",!1)),P:()=>new g(m("hBCBCFBCDBLBBEBBbCBCccCkBkBGEELBBEEE-VJJzOFBqBBB0BCCDDDtBBBVBBCBBOCCBBBrCDBnDsBsBBMBqHCB3BOBgBmImIBLLtE5D5D6DnMnMNwLwL7CLLBpFpFBNBCmBmBBCBoCrCrCBDBFBBwDFBsFlTlTBHB4EuTuTtBBBvCCBoCBB+ECBCCBmBKB6JBB5GBBhEGBCFBhFBBLGBdCB9DDB8BEB-BBBhCHBM9Z9ZBWBJTBCMBCLBfBBPBB6TDBeBB+hBNBwCBBgBJB0MVBgCDBhBBB8XDBCBBxDwEwEBtBBCfBDLBkNCBFJBDLBRNNjD7C7CjgdBBuICBkDLL0DFB9LDB3CBBpBCBCyByBBwBwBiDMBRBB9DDB-DBBRBB6HzqUzqUBxGxGBIBXiBBCNBCFFCBB2ECBCFBCDBLBBEBBbCBCccCCCBFB7MCB9UxBxB-MoXoXoGgBgBxIIBnBxDxDBFBjCGB6CDByO-J-JjBlElEBDBtBDB+FGBuDBBCDB-DDBxBBBwCDBFOOCCB5CFBsDrJrJBCCBzDzDBDBLBBCpDpD7HWBqDCBdMBtCjEjEBBB9HpIpIBBB8E9C9CBGB0CCBCEB+CJB4GgDgDBDBrBBBmUBBrCMBwFxjBxjBBDB97CBB8zOBBmEiCiCBDBJpRpRBBBoJDBoK9lT9lTovHEB07C-a-aBAB",!1)),Pc:()=>new g(m("-Cg-Hg-HBUU-u3BBBZCBwHAB",!1)),Pd:()=>new g(m("tB9qB9qB0BiyDiyDmgBqgCqgCBEBiwDDDgBBBFdd-NUUwDxszBxszBBmBmBLqFqFhzD-J-J",!1)),Pe:()=>new g(m("pB0B0BgB+1D+1DC-6B-6BqtC4B4BQ7T7TCff-hBMCxChBhBCGC1MUChCCCiBmhBmhBCECtBGCtNICEGCDBB-ozB6G6GeOCESSCCCrF0B0BgBGD",!1)),Pf:()=>new g(m("7F+6H+6HEddpuDCCFDDQEE",!1)),Pi:()=>new g(m("rFt7Ht7HDBBDaapuDCCFDDQEE",!1)),Po:()=>new g(m("hBCBCCBDECBLLBEEBcclCGGPBBI-V-VJzOzOBEBqB3B3BDDDtBBBVBBCBBOCCBBBrCDBnDsBsBBMBqHCB3BOBgBmImIBLLtE5D5D6DnMnMNwLwL7CLLBpFpFBNBCxDxDrCEBFBBwDFBsFlTlTBHBmY9D9DBBBoCBB+ECBCCBmBFBCDB6JBB5GBBhEGBCFBhFBBLGBdCB9DDB8BEB-BBBhCHBMjajaBJJBGBJIBDDBDCBEKBCCCBIB7kDDBCBBxDwEwEBFFBBBDDDBHBCBBCDDBLLBDBCJBDDBCCCBLBDCBtNCB6B+F+FjgdBBuICBkDLL0DFB9LDB3CBBpBCBCyByBBwBwBiDMBRBB9DDB-DBBRBB6HlxUlxUBFBDXXVBBDDBECBCDBICBHCCB2E2EBBBCCBDECBLLBEEBcclBDDB7M7MBBB9UxBxB-MoXoXoGgBgBxIIBnBxDxDBFBjCGB6CDB0ZlElEBDBtBDB+FGBuDBBCDB-DDBxBBBwCDBFOOCCB5CFBsDrJrJBCCBzDzDBDBLBBCpDpD7HWBqDCBdMBtCjEjEBBB9HpIpIBBB8E9C9CBGB0CCBCEB+CJB4GgDgDBDBrBBBmUBBrCMBwFxjBxjBBDB97CBB8zOBBmEiCiCBDBJpRpRBBBoJDBoK9lT9lTovHEB07C-a-aBAB",!1)),Ps:()=>new g(m("oBzBzBgB-1D-1DC-6B-6B-rCEEnB4B4BQ7T7TCff-hBMCxChBhBCGC1MUChCCCiBmhBmhBCECaTTCECtNICEGCDipzBipzB4GeeCMCESSCCCrFzBzBgBEEDAB",!1)),S:()=>new g(m("kBHHRCBgBCCcCCkBEBCBBDCCBCBDEEfgBgBrODBNNBGGBCCCBPB2DPPBxDxDsErIrIBBB3DCBDDDBvGvGLUUB4H4HIBBpEqLqLBHHB2H2H-DjEjEBGBlEwGwGqBmGmGiGCBQCCBBBDFBVECmEHBCFBCBBGDBmGBBxXJB0WuLuLlL+E+EBgBBiLJBKIBhiBCCBBBMCBOCBOCBOBBmCOOoBCBOCBUhBB-BBBCDBCBBLCCBBBGFBCECFMMBFFBDBGDBC7B7BBFFB2LBFcBD+HBXKByCtCBXnTBtBwBBDeBLyMBX+BBFfBD1LBDpEBmHFBmLBBvBZBC4CBN1GBbPBFOOBNNWBBHBB8CBB0HBBFJBhBlBBKRRBdBMdBJQQBeBLmBBQ-JBhuG-BBx0V2BB6RWBKBBoDBB+EDBLDB+RCBiHPPB+9T+9TpEgBBuLPBhCBB3BHBtBDBjDCCBBBD7E7EHRRBBBgBCCcCCiEGBCGBOBB6JIB6BQBDCBCMBEwBwBBrBB7zBBBwSmWmWBiKiKBGBnjC2kC2kCBbBr6SDBG3qU3qUk7DvHBLCBEzNBHWBQQBgDzDB9B1HBLmBBD7BBGCBXBBIdBF8BBWhCBE7F7FB1CBrbaagBaagBaagBaagBaa9B-PB4BDBzBHBCNBCBBp2BwNwNttCEE+DiOiOBvIvIBqBBFjDBNOBDOBCOBCkBBYgFB5BcBOrBBFIBIBBPFB7E4eBEQBEMBE5GBHLBFQQBKBF3BBJJBHnBBJdBDLBFBBPIBoB3KBJNBDMBEKBE4BBCFFBOBDLBFJBIyEBC7CBLAB",!1)),Sc:()=>new g(m("kB+D+DBCBqnB8D8DzPBBzPBBI2H2HoImSmS8sClmClmCBgBB37hBkuVkuVtD7E7E8GBBEBB3-HDB-4wBxtCxtC",!1)),Sk:()=>new g(m("+CCCoCHHFEEqQDBNNBGGBCCCBPB2DPPBjoBjoB15FCCBBBMCBOCBOCBOBB9kEBBkzdWBKBBoDBBxePPBniUniUBPB8bCCjF4g9B4g9BBDB",!1)),Sm:()=>new g(m("rBRRBBB+BCCuBFFmBgBgB-XwQwQBBB8xGOOoBCBOCBsEoBoBBDBHlClCBDBGBBFGDIgBgBBDDCgBgBBqIBhBBB7CffBXBpBFB2OKK3BHBwDxKxKBDBDeBLPBhIiEBX+BBFfBDhIBxBUBDFB9+zB5Z5ZCCBlFRRBBB+BCCkEHHBCBitDBBhrwBx+Bx+BagBgBagBgBagBgBagBgBat5Ft5FB-uC-uCBHB",!1)),So:()=>new g(m("mFDDFCCyerIrIBgEgEBvGvGLUUB4H4HkQ2L2LjEFBClElEwGqBqBoMCBQCCBBBDFBVECmEHBCFBCBBGDBmGBBxXJB0WzWzW+EhBBiLJBKIBksBBBCDBCBBLCCBHHBEBCECFMMBPPCBBC7B7BBKKBDBDDBCBBCBBCGBCeBDBBCCCBdBtIHBFTBDGBDwCBCdBanBBHnCBXKByCtCBX2FBCIBC1BBJuDBC3HBtBrBBhC-HBhQvBBWBBHmBBDpEBmHFBmLBBvBZBC4CBN1GBbPBFOOBNNWBBHBBxKBBFJBhBlBBKRRBdBMdBJQQBeBLmBBQ-JBhuG-BBx0V2BBibDBLBBC+R+RBBBqqUPBuLPBhCBB3BHBuBCBlPEEFBBOBB6JIB6BQBDCBCMBEwBwBBrBB7zBBBwSpgBpgBBGBnjC2kC2kCBGBFQBr6SDBG3qU3qUk7DvHBLCBEzNBHWBQPBhDzDB9B1HBLmBBD7BBGCBXBBIdBF8BBWhCBE7F7FB1CBqlB-PB4BDBzBHBCNBCBBp2B96C96CiEyWyWBqBBFjDBNOBDOBCOBCkBBYgFB5BcBOrBBFIBIBBPFB7E6HBG4WBEQBEMBE5GBHLBFQQBKBF3BBJJBHnBBJdBDLBFBB-B3KBJNBDMBEKBE4BBCFFBOBDLBFJBIyEBC7CBLAB",!1)),Z:()=>new g(m("gBgEgEgvFgsCgsCBJBeBBGwBwBh9DAB",!1)),Zl:()=>new g(m("ohIA",!0)),Zp:()=>new g(m("phIA",!0)),Zs:()=>new g(m("gBgEgEgvFgsCgsCBJBlBwBwBh9DAB",!1)),ASCII_Hex_Digit:()=>new g(m("wBJIFbF",!0)),Alphabetic:()=>new g(m("hCZBHZBwBLLFGGBVBCeBCpOBFLBPEBICC3CeeBQBCBBDDBCHHCCBCCCBSBCyCBCqEBJlFBClBBDHHBnBBoBNBCCCBCCBCCJaBFDBeKBG3BBCGBPlDBCHBFHBFCBLCBDRRBuBBOkDBZgBBKBBFGGBWBDSBUYBIKBGXBCGBIJJBoBBLLBEGBHrCBCPBCCBFOBOSBCHBDBBDVBCGBCEEBCBEHBDBBDBBCJJFBBCEBNBBLFFBBBCFBFBBDVBCGBCBBCBBCBBFEBFBBDBBFIIBCBCSSBEBMCBCIBCCBCVBCGBCBBCEBEIBCCBCBBEQQBCBWDBFCBCHBDBBDVBCGBCBBCEBEHBDBBDBBKBBFBBCEBORRBCCBEBECBCDBEBBCCCBEEBEEBBBELBFEBECBCCBEHHpBMBCCBCWBCPBEHBCCBCCBJBBCCBCBBDDBdDBCHBCCBCWBCJBCEBEHBCCBCCBJBBGCBCDBOCBNMBCCBCoBBDHBCCBCCBCGGBCBIEBXFBCCBCRBEXBCIBCDDBFBJFBCCCBGBTBBO5BBGGBH0B0BBECBDBCXBCCCBRBCCBDEBCHHPDBhBgCgCBGBCjBBFSBFPBCjBBkC2BBCDDBDBR-BBLDBDlBBCGGDqBBCsKBCDBDGBCCCBCBDoBBCDBDgBBCDBDGBCCCBCBDOBC4BBCDBDiCBmBPBR1CBDFBErTBDQBCZBGqCBEKBITBMUBNTBNMBCCBCBBNzBBDSBPFFkC4CBIqBBGlCBLeBCLBFIBYdBDEBMrBBFZB3BbBF+BBDTBzBYYBMMBBByBzBBCOBCHB0BpBBDDBLrBBCKBP2BBXCBLjBBDKBGqBBDCBqBDBCFBCBBEGGB+FBUhBBM1IBDFBDlBBDFBDHBCGCBdBD0BBCGBCEEBBBCGBEDBDFBFMBGCBCGB1DOORMBmDFFDJBCEEBDBHGCBCBCKBDDBGEBFSSBnBBuZzBB34BkHBHDBEBBNlBBCGGD3BBIRRBVBKGBCGBCGBCGBCGBCGBCGBCGBCfBwB2O2OBBBaIBIEBDEBF1CBHCBC5CBCDBGqBBC9CBSfBxBPBhQ-tGBhCs0VBkCtBBDsIBEPBLBBVuBBGHBEwDBoBIBDmDBDxCBVUBCgBBZzBBNjCBCtBtBBEBECCBBBLgBBGiBBOcBEyBBCLBQRRBOBLEBC2BBKNBTWBEkCBCCCZCBDPBDDBMFBDFBDFBKGBCGBCqBBCNBH6DBWj9KBNWBFwBBloItLBDpDBnBGBNEBGLBCMBCEBCCCBCCBCCBqDBiBqLBT-BBD1BBpBLB1DEBCmEBlBZBHZBM4CBEFBDFBDFBDCBkBLBCZBCSBCBBCOBDNBjB6DBmC0BBsIcBEwBBwBfBOdBGqBBGdBDjBBFHBCEBrB9EBTjBBFjBBFnBBJzBBNKBCOBCGBCBBCKBCOBCGBCBBEzBBN2JBKVBLHBZFBCpBBCIBmCFBDCCBqBBCBBEDDBVBLWBKeBiCSBCBBLVBLZBHZBnB3BBHBBhCDBCBBGHBCCBCcBrBcBEcBkBHBCbBc1BBLVBLSBORBvDoCB4ByBBOyBBOnBBjBbBEGGBVB7HpBBCBBEBBRFBzBCBEcBLJJBUBrBRBvBUBcWBKlCBsBEBL4BBKOOBXBYyBBSDBJiBBEKKB+BBCDBKBBLCCkBRBChBBDHHBCB-BGBCCCBCBCOBCJBI4BBYDBCHBDBBDVBCGBCBBCEBEHBDBBDBBEHHGGBdJBCDDClBBCJBCDDCDBCBBECCtBhCBCCBCDBVCBfhCBDBBC5F5FB0BBDGBaFBjB+BBCEE8B1BBDoCoCBZBDNBWGB6F4BBoD-BBgBHBDDDBGBCBBCdBCBBDBBDDB+CHBDtBBDFBCCCBccBxBBDJBSnCBGTTBnCBoDHB5CgBBgBIBCsBBCGBCyByBBcBDVBCNBqCGBCBBCrBBECCBCCBBBCDDBZZBEBCBBCkBBCBBCDBCYYBqBBlIWBKQBCoBBECBwDwCwCB4cBnDuDBSjGBtyCgDBQvhBBSFBa68DBGmSB61GuBBy2B4RBIeBSuCBSdBTvBBRDBgBUBGSBxNsBB0G-BBhBYBDYBtBqCBF4BBIQBhCBBCNNBFBK1mHBqBfBiDyDB+vIDBCGBCBBCiJBQeeBBBDPPBCBJrMBloCqDBGMBEIBIJBFi7Fi7FBzCBCmCBCBBDDDBDDBCBCLBCCCBFBCgCBCDBDHBCGBCbBCDBCEBCEEBFBCzKBDYBCYBCeBCYBCeBCYBCeBCYBCeBCYBCHB15BeBHFB2GGBCQBDGBCBBCEBG9BBiBxDxDBrBBLGBRiKiKBcBTrBBlPbBlHdBDwGwGBdBCVBJBBhHGBCDBCBBCOBCkGB8BjCBEEE1lBDBCaBCBBCDDCJBCDBCCCHFFCECBBBCBBCDDCICBCCDDBCGBCDBCDBCCCBIBCQBGCBCEBCQB1TZBHZBHZB3zD-2pBBhB9oEBDt0FBDwpHBQtTBjtC9QBjvBq6EBGppIB",!1)),Dash:()=>new g(m("tB9qB9qB0BiyDiyDmgBqgCqgCBEB+BoBoBQnMnMlgDDDgBBBFdd-NUUwDxszBxszBBmBmBLqFqFhzD-J-J",!1)),Emoji:()=>new g(m("jBHHGJBwDFFu8HNN5GXX7CFBQBBwLBBNnFnFaKBFCBoGoHoHBLLK7B7BBCBCEBKGDBDDFDDCBBDIEBJJBBBGCCGLBMBBDCCBCCTDDBTTBEBCCCBEEBGGDBBFBBMBBGBBDGGBECBVVBGGBEBCDBDFFDDDBEBCDDCCCHEEHLLBQQDFFCFFBBBCMMBxBxBBBBKeP1LBBwOCBUBB0BFF7mBNN6SCCrrvDrGrGhFBBNBBPDDBIBsCZBCBBYVVDIBWBBvFhBBDvDBDBBCCBDyCBDCBCmIBC+BBMFBCXBIBBDHBNDDBCBDFFBOOBDDJBBKGGBBBNCBJCBDCCFHHEHHB0CBxBlCBGHBDDBEJBECCBEEDJBkHLBF8I8IBtBBCJBC4FBxDMBEKBE4BBCFFBOBDLBFJB",!1)),Emoji_Component:()=>new g(m("jBHHGJB0+H2G2Gsp3B3+8B3+8BBYB8PEBxtBDBtzhY-CB",!1)),Emoji_Modifier:()=>new g(m("7-8DE",!0)),Emoji_Modifier_Base:()=>new g(m("9wJ8G8GRDB4jzD9B9BBBBDDDBBB2DBBDKBWSBEFFBBBCCBICCZqGqGBFFWFFBvFvFBBBEEB0CRRBBBKMMgSDDJHBHKKBIBDCB5B+B+BBCCBCCSCBCMBmHCBrBIB",!1)),Emoji_Presentation:()=>new g(m("64IBBuGDBEDDqQBBWBBzBLBsBUUOJJBSSBGGBJJGWWIBBCFFDIIFBBdkBkBCFFBBBC+B+BBBBZPP8aBB0BFFvlxDrGrG-FDDBIBsCZBCZZVDDBDBCCBWBBvFgBBNIBClCBCVBNqBBFEBNQBEEEBlCBCCCB5FBD+BBODBCXBTbbBOO3C0CBxBlCBHEEBBBDDBEDBMBBIIBkHLBF8I8IBtBBCJBC4FBxDMBEKBE4BBCFFBOBDLBFJB",!1)),Extended_Pictographic:()=>new g(m("pFFFu8HNN5GXX7CFBQBBwLBBNnFnFaKBFCBoGoHoHBLLK7B7BBCBCEBKGDBDDFDDCBBDIEBJJBBBGCCGLBMBBDCCBCCTDDBTTBEBCCCBEEBGGDBBFBBMBBGBBDGGBECBVVBGGBEBCDBDFFDDDBEBCDDCCCHEEHLLBQQDFFCFFBBBCMMBxBxBBBBKeP1LBBwOCBUBB0BFF7mBNN6SCCrrvDoBoBBCBlDLBQBBQPPBmBmBBIBxDBBNBBPDDBIBU3BBcOBLVVDIBCDBKWBH7FBDvDBDBBCCBDyCBDCBCDBG9HBC+BBMFBCXBIBBDHBNDDBCBDFFBOOBDDJBBKGGBBBNCBJCBDCCFHHEHHB0CBxBlCBGHBDQBECCBEBDMB7GlBBNDB5BHBLFBpBHBfBBNDBDNBKmBBNuBBCJBC4FB5CHBPxEBhI9fB",!1)),Hex_Digit:()=>new g(m("wBJIFbFq1-BJIFbF",!0)),Lowercase:()=>new g(m("hDZBwBLLFlBlBBWBCHBC2BCBQCBuBCDECBBBDCCDEEBFFDEEBBBDDDCCCDCCBCCDEECDDBDDBBBHGDCOCBSCBDDCEEC4BCBFBDDDBCCFICBjCBDiBBIBBfEBhDsBsBCEEDDBTccBhBBCBBECBCWCBDBCGDB0B0BBuBBCgBCK0BCDMCBgDCxBoBBo6CqBBCDB5XFBjkCIBC2D2DB+FBiC0ECBHBCgDCBHBJFBLHBJHBJFBLHBJHBJNBDHBJHBJHBJEBCBBHEEBBBCBBJDBDBBJHBLCBCBB6DOORMBuDEEBEEcKFDBBJDBFiBiBBOBFsasaBYBn6BvBBCEEBGCFCCBCCBGBEiDCBIICFFNlBBCGG0oesBCUaCBBBmEMCBBBC8BCBIBCCCDICFCCDCCBBBCSCGGGCMCFCCDOCWDBCCCBBB2ZqBBCNBHvCBh6TGBNEBqhBZBumBnBBpEjBB8EKBCOBCGBCBBkODDBBBCpBBCIBmoByBB+DVB75CfBhsVfB8BYBnqZZBbGBCRBbZBbDBCCCBFBCKBbZBbZBbZBbZBbZBbZBbZBbZBbbBdYBCFBbYBCFBbYBCFBbYBCFBbYBCFBC15B15BBIBCTBHFBmI9BB1lChBB",!1)),Math:()=>new g(m("rBRRBBBgBeeCuBuBFmBmBgB5W5WBBBDbbBDDBBBwQCBuwGccBBBMEEOPPBCBWEBMEBiCMBFEEBFFBDBTFFDJBCDDBEBHEEBDDBCCBBBCFBENBClClCBWBCFBCBBFBBFfBCHHBPPBqIBJDBVBB7CffBZBCZZMGB+NBBNJBFFBFBBDBBEEBPCCDFBMHBGBB6BCCeDBKCBxK-BBhI-PBxBUBDFB9+zB4Z4ZBEBCjFjFRCBeCCeCCkEHHBCBitDBBhrwBwoBwoBBzCBCmCBCBBDDDBDDBCBCLBCCCBFBCgCBCDBDHBCGBCbBCDBCEBCEEBFBCzKBDjJBDxBBhwFDBCaBCBBCDDCJBCDBCCCHFFCECBBBCBBCDDCICBCCDDBCGBCDBCDBCCCBIBCQBGCBCEBCQB1BBB-uCIB",!1)),Quotation_Mark:()=>new g(m("iBFFkEQQ96HHBaBBowDqOqOBCBOCBixzBDB+FFF7CBB",!1)),Terminal_Punctuation:()=>new g(m("hBLLCMMBEE-ZJJiQ6B6BpCPPCCB1FsBsBBJBCsHsHB3B3BBEBCHBgBmImIB1nB1nBBtFtFFFB4JBB2YHBmY9D9DBBBoCBB+ECBEoBoBBCBDBB7JBBjLDBjFBBLBBCCBeCB8FEB-BBBldYYBKKBBBwlDCBzJOOFLLCBBEBBtNBB8ndBBuICBkHEB-LBB3CBBgD4E4EBBB0ECBgERRB6H6HnxUDDB6B6BBBBCDBqFLLCMMBEEiCDD7hBxBxBnkBoGoG3JBB5EFBlCFB6CDB5dEBtBDB+FGBxDDBgECBiEBBHRRB5C5CBDBtDrJrJB2D2DBBBNBBnLDBEOBqDBB6HCBmQCC8HBB4CBBFBB-MCBuBmUmUBrCrCBspBspBBDB6vRBBmEiCiCBBBLqRqRBoJoJBnwTnwTovHDB",!1)),Uppercase:()=>new g(m("hCZBmDWBCGBiB2BCDOCDuBCBECEBBCCCBCCBBBDDBCBBCCBEBBCBBCECBCCDCCBCCBBBCCCBEEIJDCMCDQCDDDCCBC4BCIBBCBBDCCBCBCGCiJCCEJJHCCBBBCCCBCCBPBCIBkBDDBBBEWCGDDCBBDyBBxBgBCK2BCBMCD+CCDlBBq6ClBBCGGzW1CB0kCHHBpBBDCBhK0ECKgDCKHBJFBLHBJHBJFBMGCJHBpCDBNDBNDBNEBMDBnIFFECBDCBDEEBDBHGCBCBDDBLBBGbbBOBUzZzZBYBx5BvBBxBCCBBBDGCBCBCDDJCBCgDCJCCFuqeuqeCqBCUaCoEMCE8BCLECBICFCCDCCEUCBDBCEBCOCBCBCCCBQCZs5Vs5VBYBmmBnBBpEjBB9EKBCOBCGBCBBr3ByBB+EVB75CfBhsVfBhCYBoqZZBbZBbZBbCCBGDBDDBCBCHBbZBbBBCDBDHBCGBcBBCDBCEBCEEBFBcZBbZBbZBbZBbZBbZBfYBiBYBiBYBiBYBiBYBiB2pE2pEBgBBvgCZBHZBHZB",!1)),White_Space:()=>new g(m("JEBTlDlDbgvFgvFgsCKBeBBGwBwBh9DAB",!1))});static get Upper(){return this.CATEGORIES.get("Lu")}static SCRIPTS=new Go({Adlam:()=>new g(m("go6DrCFJFB",!0)),Ahom:()=>new g(m("g4lCaDOFW",!0)),Anatolian_Hieroglyphs:()=>new g(m("ggxCmS",!0)),Arabic:()=>new g(m("gwBEBCFBCNBCCBCfBCJBMZBCrDBChBBxCvBBxHhBBGqCBCcBxy8BtPBDvEBhBPBxDEBCmEBk7DeBkCFBJIBiBFBh43BDBCaBCBBCDDCJBCDBCCCHFFCECBBBCBBCDDCICBCCDDBCGBCDBCDBCCCBIBCQBGCBCEBCQB1BBB",!1)),Armenian:()=>new g(m("xpBlBDxBDCks9BE",!0)),Avestan:()=>new g(m("g4iC1BEG",!0)),Balinese:()=>new g(m("g4GsCCxB",!0)),Bamum:()=>new g(m("g1pB3CpowB4R",!0)),Bassa_Vah:()=>new g(m("w26CdDF",!0)),Batak:()=>new g(m("g+GzBJD",!0)),Bengali:()=>new g(m("gsCDBCHBDBBDVBCGBCEEBCBDIBDBBDDBJFFBCCBDBDYB",!1)),Beria_Erfe:()=>new g(m("g17CYDY",!0)),Bhaiksuki:()=>new g(m("ggnCICsBCNLc",!0)),Bopomofo:()=>new g(m("qXB6wLqBxDf",!0)),Brahmi:()=>new g(m("ggkCtCFjBKA",!0)),Braille:()=>new g(m("ggK-H",!0)),Buginese:()=>new g(m("gwGbDB",!0)),Buhid:()=>new g(m("g6FT",!0)),Canadian_Aboriginal:()=>new g(m("ggF-TxRlC7tgCP",!0)),Carian:()=>new g(m("g1gCwB",!0)),Caucasian_Albanian:()=>new g(m("wphCzBMA",!0)),Chakma:()=>new g(m("gokC0BCR",!0)),Cham:()=>new g(m("gwqB2BKNDJDD",!0)),Cherokee:()=>new g(m("g9E1CDFz7lBvC",!0)),Chorasmian:()=>new g(m("w9jCb",!0)),Common:()=>new g(m("AgCBbFBbuBBCOBCEBYgBgBiOmBBGEBDTB1DKKHCC+THHPEEhB9E9ElQiEiEB6mB6mB2MDBjJwvBwvBBBBoCBBsGBBCumBumBOIIBCBCFBCCBDmYmYBKBD2CBCKBEKBCOBShBB-BlBBCCBDFBCaBCQBqBCBF5UBXKBW-cBhIzTBDpEBhQ9CBzMUBCCCBXBQHBFDB8CBBE7C7CB0E0EBOBhBlBBKxBxBB+BBgBwCBwB5C5CBmFBhuG-BBhoWhBBnDCBmFJB1HhFhFsMPPBzuUzuUBxGxGBIBXiBBCSBCDB0ECCBeBbFBbKBLuBuBBhChCBFBCGBLEBjICBFsBBEIBxCMB0BsBBlHaBltuBDB96D8HBEzNBHWBQQBgDzDB9B1HBLmBBD9BBEQBJBBIdBF8BB2GTBNTBN2CBKYBoE0CBCmCBCBBDDDBDDBCBCLBCCCBFBCgCBCDBDHBCGBCbBCDBCEBCEEBFBCzKBDjJBDxBByjFjCBtC8BBjWrBBFjDBNOBDOBCOBCkBBLtFB5BZBCBBOrBBFIBIBBPFB7E4eBEQBEMBE5GBHLBFQQBKBF3BBJJBHnBBJdBDLBFBBPIBoB3KBJNBDMBEKBE4BBCFFBOBDLBFJBIyEBCmDBnghYffB+CB",!1)),Coptic:()=>new g(m("ifNxkKzDGG",!0)),Cuneiform:()=>new g(m("ggoC5cnDuDCEMjG",!0)),Cypriot:()=>new g(m("ggiCFBDCCBqBBCBBEDD",!1)),Cypro_Minoan:()=>new g(m("w8rCiD",!0)),Cyrillic:()=>new g(m("ggBkEBDoFBx6FKBhFtCtCojEfBhie-CBv8VBBhw4B9BBiBAB",!1)),Deseret:()=>new g(m("gghCvC",!0)),Devanagari:()=>new g(m("goCwCFODZh7nBfhwcJ",!0)),Dives_Akuru:()=>new g(m("gomCGBDDDBGBCBBCdBCBBDLBKJB",!1)),Dogra:()=>new g(m("ggmC7B",!0)),Duployan:()=>new g(m("ggvDqDGMEIIJDD",!0)),Egyptian_Hieroglyphs:()=>new g(m("ggsC1iBL68D",!0)),Elbasan:()=>new g(m("gohCnB",!0)),Elymaic:()=>new g(m("g-jCW",!0)),Ethiopic:()=>new g(m("gwEoCBCDBDGBCCCBCBDoBBCDBDgBBCDBDGBCCCBCBDOBC4BBCDBDiCBDfBEZBnvGWBKGBCGBCGBCGBCGBCGBCGBCGBjpfFBDFBDFBKGBCGBylvCGBCDBCBBCOB",!1)),Garay:()=>new g(m("gqjClBEcJB",!0)),Georgian:()=>new g(m("glElBBCGGDqBBCDBx8CqBBDCBhiElBBCGG",!1)),Glagolitic:()=>new g(m("ggL-Ch9sDGCQDGCBCE",!0)),Gothic:()=>new g(m("w5gCa",!0)),Grantha:()=>new g(m("g4kCDBCHBDBBDVBCGBCBBCEBDIBDBBDCBDHHGGBDGBEEB",!1)),Greek:()=>new g(m("wbDBCCBDDBCFFCCCBBBCCCBSBC+BBPPBnpGEBzBEBFEB1ChKhKBUBDFBDlBBDFBDHBCGCBdBD0BBCOBCNBDFBCSBDCBCIBoJ-xiB-xiB7uVuCBSgj0Bgj0BBkCB",!1)),Gujarati:()=>new g(m("h0CCBCIBCCBCVBCGBCBBCEBDJBCCBCCBDQQBCBDLBIGB",!1)),Gunjala_Gondi:()=>new g(m("grnCFCBCkBCBCFIJ",!0)),Gurmukhi:()=>new g(m("hwCCBCFBFBBDVBCGBCBBCBBCBBDCCBDBFBBDCBEIIBCBCIIBPB",!1)),Gurung_Khema:()=>new g(m("go4C5B",!0)),Han:()=>new g(m("g0LZBC4CBN1GBwBCCaIBPDBle-tGBhC-vUBhoWtLBDpDBpodBBNGBqgkB-2pBBhB9oEBDt0FBDwpHBQtTBjtC9QBjvBq6EBGppIB",!1)),Hangul:()=>new g(m("goE-HvxHBiI9CyDeiCei3dckUj9KNWFwBl9JeEFDFDFDC",!0)),Hanifi_Rohingya:()=>new g(m("gojCnBJJ",!0)),Hanunoo:()=>new g(m("g5FU",!0)),Hatran:()=>new g(m("gniCSCBGE",!0)),Hebrew:()=>new g(m("xsB2BBJaBFFBpp9BZBCEBCCCBCCBCCBIB",!1)),Hiragana:()=>new g(m("hiM1CBHCBi7-C+IBTeeBBBulQAB",!1)),Imperial_Aramaic:()=>new g(m("giiCVCI",!0)),Inherited:()=>new g(m("gYvDB2IBBlOKBbhXhXBCB8qEtBBDLBlPCBCMBCGBFHHEBBnG-BBtQBBjGgBB65DDBsDBBmrzBPBRNBwejHjH7iEl+uBl+uBBsBBDWBhRCBSHBDGBfDBz6rYvHB",!1)),Inscriptional_Pahlavi:()=>new g(m("g7iCSGH",!0)),Inscriptional_Parthian:()=>new g(m("g6iCVDH",!0)),Javanese:()=>new g(m("gsqBtCDJFB",!0)),Kaithi:()=>new g(m("gkkCiCLA",!0)),Kannada:()=>new g(m("gkDMCCCWCJCEDICCCDIBGCCDDJCC",!0)),Katakana:()=>new g(m("hlM5CBDCBxHPBxGuBBC3CBvgzBJBCsBBzisBDBCGBCBBCgJgJBBBzBPPBCB",!1)),Kawi:()=>new g(m("g4nCQCoBEc",!0)),Kayah_Li:()=>new g(m("goqBtBCA",!0)),Kharoshthi:()=>new g(m("gwiCDCBGHCCCcDCFJII",!0)),Khitan_Small_Script:()=>new g(m("k-7C84G84GB0OBqBAB",!1)),Khmer:()=>new g(m("g8F9CDJHJnPf",!0)),Khojki:()=>new g(m("gwkCRCuB",!0)),Khudawadi:()=>new g(m("w1kC6BGJ",!0)),Kirat_Rai:()=>new g(m("gq7C5B",!0)),Lao:()=>new g(m("h0DBBCCCBDBCXBCCCBVBDEBCCCBFBCJBDDB",!1)),Latin:()=>new g(m("hCZBHZBwBQQGWBCeBCgOBoBEB8wGlBBHwBBGDBGMBClCBiC-HByLOORMBuEBBHccSoBB42CfBj1elDBExCBVOBxZqBBCIBCDB38TGB7gBZBHZBmhCFBCpBBCIBm61BeBHFB",!1)),Lepcha:()=>new g(m("ggH3BEOEC",!0)),Limbu:()=>new g(m("goGeBCLBFLBFEEBKB",!1)),Linear_A:()=>new g(m("gwhC2JKVLH",!0)),Linear_B:()=>new g(m("gggCLCZCSCBCODNjB6D",!0)),Lisu:()=>new g(m("wmpBvBx1eA",!0)),Lycian:()=>new g(m("g0gCc",!0)),Lydian:()=>new g(m("gpiCZGA",!0)),Mahajani:()=>new g(m("wqkCmB",!0)),Makasar:()=>new g(m("g3nCY",!0)),Malayalam:()=>new g(m("goDMCCCyBCCCFFPDZ",!0)),Mandaic:()=>new g(m("giCbDA",!0)),Manichaean:()=>new g(m("g2iCmBFL",!0)),Marchen:()=>new g(m("wjnCfDVCN",!0)),Masaram_Gondi:()=>new g(m("gonCGBCBBCrBBECCBCCBHBJJB",!1)),Medefaidrin:()=>new g(m("gy7C6C",!0)),Meetei_Mayek:()=>new g(m("g3qBWqGtBDJ",!0)),Mende_Kikakui:()=>new g(m("gg6DkGDP",!0)),Meroitic_Cursive:()=>new g(m("gtiCXFTDtB",!0)),Meroitic_Hieroglyphs:()=>new g(m("gsiCf",!0)),Miao:()=>new g(m("g47CqCF4BIQ",!0)),Modi:()=>new g(m("gwlCkCMJ",!0)),Mongolian:()=>new g(m("ggGBBDCCBSBH4CBIqBB2t-BMB",!1)),Mro:()=>new g(m("gy6CeCJFB",!0)),Multani:()=>new g(m("g0kCGBCCCBCBCOBCKB",!1)),Myanmar:()=>new g(m("ggE-EhqmBeiDfxibT",!0)),Nabataean:()=>new g(m("gkiCeJI",!0)),Nag_Mundari:()=>new g(m("wm5DpB",!0)),Nandinagari:()=>new g(m("gtmCHDtBDK",!0)),New_Tai_Lue:()=>new g(m("gsGrBFZHKEB",!0)),Newa:()=>new g(m("gglC7CCE",!0)),Nko:()=>new g(m("g+B6BDC",!0)),Nushu:()=>new g(m("h-7CvsQvsQBqMB",!1)),Nyiakeng_Puachue_Hmong:()=>new g(m("go4DsBENDJFB",!0)),Ogham:()=>new g(m("g0Fc",!0)),Ol_Chiki:()=>new g(m("wiHvB",!0)),Ol_Onal:()=>new g(m("wu5DqBFA",!0)),Old_Hungarian:()=>new g(m("gkjCyBOyBIF",!0)),Old_Italic:()=>new g(m("g4gCjBKC",!0)),Old_North_Arabian:()=>new g(m("g0iCf",!0)),Old_Permic:()=>new g(m("w6gCqB",!0)),Old_Persian:()=>new g(m("g9gCjBFN",!0)),Old_Sogdian:()=>new g(m("g4jCnB",!0)),Old_South_Arabian:()=>new g(m("gziCf",!0)),Old_Turkic:()=>new g(m("ggjCoC",!0)),Old_Uyghur:()=>new g(m("w7jCZ",!0)),Oriya:()=>new g(m("h4CCCHDBDVCGCBCEDIDBDCICFBCEDR",!0)),Osage:()=>new g(m("wlhCjBFjB",!0)),Osmanya:()=>new g(m("gkhCdDJ",!0)),Pahawh_Hmong:()=>new g(m("g46ClCLJCGCUGS",!0)),Palmyrene:()=>new g(m("gjiCf",!0)),Pau_Cin_Hau:()=>new g(m("g2mC4B",!0)),Phags_Pa:()=>new g(m("giqB3B",!0)),Phoenician:()=>new g(m("goiCbEA",!0)),Psalter_Pahlavi:()=>new g(m("g8iCRIDNG",!0)),Rejang:()=>new g(m("wpqBjBMA",!0)),Runic:()=>new g(m("g1FqCEK",!0)),Samaritan:()=>new g(m("ggCtBDO",!0)),Saurashtra:()=>new g(m("gkqBlCJL",!0)),Sharada:()=>new g(m("gskC-ChsCH",!0)),Shavian:()=>new g(m("wihCvB",!0)),Siddham:()=>new g(m("gslC1BDlB",!0)),Sidetic:()=>new g(m("gqiCZ",!0)),SignWriting:()=>new g(m("gg2DrUQECO",!0)),Sinhala:()=>new g(m("hsDCBCRBEXBCIBCDDBFBEFFBEBCCCBGBHJBDCBt-gCTB",!1)),Sogdian:()=>new g(m("w5jCpB",!0)),Sora_Sompeng:()=>new g(m("wmkCYIJ",!0)),Soyombo:()=>new g(m("wymCyC",!0)),Sundanese:()=>new g(m("g8G-BhIH",!0)),Sunuwar:()=>new g(m("g+mChBPJ",!0)),Syloti_Nagri:()=>new g(m("ggqBsB",!0)),Syriac:()=>new g(m("g4BNC7BDCxIK",!0)),Tagalog:()=>new g(m("g4FVKA",!0)),Tagbanwa:()=>new g(m("g7FMCCCB",!0)),Tai_Le:()=>new g(m("wqGdDE",!0)),Tai_Tham:()=>new g(m("gxG+BCcDKHJHN",!0)),Tai_Viet:()=>new g(m("g0qBiCZE",!0)),Tai_Yo:()=>new g(m("g25DeCVJB",!0)),Takri:()=>new g(m("g0lC5BHJ",!0)),Tamil:()=>new g(m("i8CBBCFBECBCDBEBBCCCBEEBEEBBBELBFEBECBCDBDHHPUBm+kCxBBOAB",!1)),Tangsa:()=>new g(m("wz6CuCCJ",!0)),Tangut:()=>new g(m("g-7CgBgBB+3GBhQeBiDyDB",!1)),Telugu:()=>new g(m("ggDMCCCWCPDICCCDIBCCCBDDDJII",!0)),Thaana:()=>new g(m("g8BxB",!0)),Thai:()=>new g(m("hwD5BGb",!0)),Tibetan:()=>new g(m("g4DnCCjBFmBCjBCOCGFB",!0)),Tifinagh:()=>new g(m("wpL3BIBPA",!0)),Tirhuta:()=>new g(m("gklCnCJJ",!0)),Todhri:()=>new g(m("guhCzB",!0)),Tolong_Siki:()=>new g(m("wtnCrBFJ",!0)),Toto:()=>new g(m("w04De",!0)),Tulu_Tigalari:()=>new g(m("g8kCJBCDDClBBCJBCDDCDBCJBCBBJBB",!1)),Ugaritic:()=>new g(m("g8gCdCA",!0)),Unknown:()=>new g(m("4bBBHDBICCVuMuMnBBBzBBBE4B4BBGBcDBHKBvI9B9BBmDmDBMB8BBByBBBQddBCCMEBjBEBuHJJBDDBXXICCBBBFBBKBBDBBFHBCDBDGGBaaBEEHDBDBBXIIDGDBCCGDBDBBECBCGBFCCBFBSJBEKKEXXIDDGBBLIEBCCBNBFBBNGBIEEJBBDBBXIIDGGBKKBDDBEEBFBEDBDGGBTTBIBDHHBBBEFFBBBDCCDCBDCBECBNDBGCBEFFBCCBEBCNBWEBOEEYRRBKKEFFBFBDEEDBBFBBLGBXEEYLLGBBKEEFGBDEBEFFBLLELBOEE0BEEHDBRBBbEETCBZKKCBBICBCDBHCCJFBLBBELB7BDBekBBDCCGZZCYYBGGCIILBBFfBpClBlBBCBoBlBlBQOOBjBBnGCCBDBCBB6LFFBIICFFBqBqBFBBiBFFBIICFFBQQ6BFFBkCkCBhBhBBBBbFB3CBBHBB+UCB6CGBXIBZIBVLBOEEDLB-CBBLFBLFBbFB6CGBsBEBnCJBgBNNBCBNDBCCBrBBBGKBtBDBbFBMCB-BBBiCeeBMMBEBLFBPBBvBBBNTBuCnFnFBGB9BCBQCB-BEBsBBBMHBsBEB3QBBHBBnBBBHBBJGCgBBB2BQQPBBHUUBEEKmDmDNBBcOOBBBjBNBiBOBtEDB7UVBMUB14BBB-LEBuBCCBDBCBB5BGBDNBZIBI4BI-DhBBb6C6CBKB3GZBxC3C3CBoDoDBDBsB-C-C3CIBxBuzcuzcBBB4BIB9KTB5FHB+GTB9BCBLFB5BHBnCHBNFB1DKBfCBvCMMBCBiB4B4BBHBPBBLBBoDXBdJBHBBHBBHIBIII9BDB-DBBLFBl9KLBYDByBjoIBvLBBrDlBBILBGEBbGGCGDrUfBrBFB0BUUFDBGoEoEBCC-FCBHBBHBBHBBECBIIIBIBGBBNbbUDDQBBPhBB8DEBEDBuBCB5COOBBBCuBBvBhEBeCByBOBdDBlBIBfEBsBEBfmBmBBCBPpBB-EBBLFBlBDBlBDBpBHB1BKBNQQIDDMQQIDDBBB1BLB4JIBXJBJXBHrBrBKkCBHBBCtBtBDCBCBBYpCpCBGBKvBBUDDBDBiBCBcEBclBB5BDBVBBzBDDBDBJEEeBBEDBLGBKGBhCfBoBDBNIB3BCBeBBcEBbGBFLBIvCBqC2BB0BMB0BGBvBHBLFBnBCBeHBDvGBgBrBrBEBBDPBHHBKgBBvBHBrBVBblBBdTBYIBvCDBlBIBlCJBCBBaGBLFB2BTTBGBoBIBhDVVBJBTwBwBB8BBICCFQQMFB8BEBLFBFJJBDDBXXIDDGLLBDDBEEBCCBEBCEBIBBICBGKBLCCBCCnBLLCBBCFFLDDBGBDcB9CGGBcBpCHBLlFB3BBBnBhBBmCKBLFBOSB7BFBLFBVbBcBBQDBY4FB9BjDB0CLBJBBCBBJDDfDDBNNBHBLlCBJBBvBBBMaBpCHB0CMBqCGBL1CBJ3CBjBNBLFBKuBuBPJBeCBhBBBXPPBnCBIDDtBCBCDDKHBLFBHDDmBDDHGBLFBtBDBL1HBaGBSqBqBBBBe0CBCOBzBMB8clDBwDGGBJBlGryCBkDMB3iBJB88DEBoS41GB7Bl2BB6RGBgBLLBCByCLLBEBfBBHJBnCJBLIIWEBUvNB7BlGB8CEBaBBarBBsCDB6BGBS-BBGKBIIB3mHoBBhBgDB0D8vIBFIIDkJkJBNBCcBEBBCNBFHBtMjoCBsDEBOCBKGBLBBJ76DB+HCB1NFBYOBSOBvBBBYIB1D7BB3HJBoBBBjGUBnC5DBVLBVLB4CIBamEB2CoCoCDBBCBBDBBFNNCIIiCFFBJJIddFGGCCBI1K1KBlJlJB-V-VBNBGQQBuiBBgBFBH0GBISSBIIDGGBDB-BgBBCvDBuBCBPBBLDBD-JBgBQB7BEBCvOBrB1GBsBDBC-FBgBXXBGBD-GBIFFDQQmGBBRoBBtCDBLDBDwYBlCrCB+BhGBFccDCCBCCLFFCCCBEBCDBCECEDDCBBCICDCCBFFIKFCLLSEBEGGSzBBDtIBtBDBlDLBQBBQQQmBJBvF3BBeMBtBDBKGBDNBH5EB6eCBSCBOCB7GFBNDBCOBNDB5BHBLFBpBHBfBBNDBDNBKmBB5KHBPBBOCBMCB6BCCBCBRBBNDBLGB0EoDoDBjgBBh3pBfB-oEBBv0FBBypHOBvThtCB-QhvBBs6EEBrpIm8yVBCdBhD-DBxHvw-FB",!1)),Vai:()=>new g(m("gopBrJ",!0)),Vithkuqi:()=>new g(m("wrhCKCOCGCBCKCOCGCB",!0)),Wancho:()=>new g(m("g24D5BGA",!0)),Warang_Citi:()=>new g(m("glmCyCNA",!0)),Yezidi:()=>new g(m("g0jCpBCCDB",!0)),Yi:()=>new g(m("ggoBskBE2B",!0)),Zanabazar_Square:()=>new g(m("gwmCnC",!0))});static FOLD_CATEGORIES=new Go({L:()=>new g(m("laA",!0)),LC:()=>new g(m("laA",!0)),Ll:()=>new g(m("hCZBmDWBCGBiBuBCEECDOCDuBCBECEBBCCCBCCBBBDDBCBBCCBEBBCBBCECBCCDCCBCCBBBCCCBEEIBBCBBCBBCOCDQCDBBCCCBBBC4BCIBBCBBDCCBCBCGC3HrBrBCEEJHHCCBCCCBCCBPBCIBkBJJCUCGDDCBBDyBBxBgBCK2BCBMCD+CCDlBBq6ClBBCGGzW1CB0kCHHBpBBDCBhK0ECKgDCKHBJFBLHBJHBJFBMGCJHBZHBJHBJHBJEBMEBMDBNEBMEBqJEEBHHxC9zC9zCBuBBxBCCBBBDGCBCBCDDJCBCgDCJCCFuqeuqeCqBCUaCoEMCE8BCLECBICFCCDCCEUCBDBCEBCOCBCBCCCBQCZs5Vs5VBYBmmBnBBpEjBB9EKBCOBCGBCBBr3ByBB+EVB75CfBhsVfBhCYBoyehBB",!1)),Lt:()=>new g(m("kOCCBCCBCClBCCtsHHBJHBJHBMQQwBAB",!1)),Lu:()=>new g(m("hDZB7BqBqBBWBCHBCuBCEECDOCDsBCDECBBBDCCDEEGDDECBDDDCCCDFFDEECDDECCGBBCBBCBBCOCBSCDBBCEECkBCEQCJDDBCCFICBEBCBBCCCBEEBCCBCBCEBDCCBDDIDDCBBEFBGLLBnFnFsBCCEEEBBBvBDBCdBCBBECBCWCBDBCGD1BvBBCgBCK0BCDMCBgDCyBlBBq6CqBBDCB5XFBjkCIBCvHvHERRzD0ECGGGC8CCBHBJFBLHBJHBJFBMGCJHBJNBzBBBNSSBPPBEEpL2B2Bs1CvBBCEEBGCHDDLiDCJCCFNNBkBBCGG0oesBCUaCoEMCE8BCLCCDICFFFCBBDSCMOCFCCDOCb9a9advCBi8UZBumBnBBpEjBB8EKBCOBCGBCBBk4ByBB+DVB75CfBhsVfB8BYBvyehBB",!1)),M:()=>new g(m("5cgBgBlgHAB",!1)),Mn:()=>new g(m("5cgBgBlgHAB",!1)),Emoji:()=>new g(m("8mJA",!0)),Extended_Pictographic:()=>new g(m("8mJA",!0)),Lowercase:()=>new g(m("hCZBmDWBCGBiBuBCEECDOCDuBCBECEBBCCCBCCBBBDDBCBBCCBEBBCBBCECBCCDCCBCCBBBCCCBEEIBBCBBCBBCOCDQCDBBCCCBBBC4BCIBBCBBDCCBCBCGCiJCCEJJHCCBBBCCCBCCBPBCIBkBJJCUCGDDCBBDyBBxBgBCK2BCBMCD+CCDlBBq6ClBBCGGzW1CB0kCHHBpBBDCBhK0ECKgDCKHBJFBLHBJHBJFBMGCJHBZHBJHBJHBJEBMEBMDBNEBMEBqJEEBHHuBPBUzZzZBYBx5BvBBxBCCBBBDGCBCBCDDJCBCgDCJCCFuqeuqeCqBCUaCoEMCE8BCLECBICFCCDCCEUCBDBCEBCOCBCBCCCBQCZs5Vs5VBYBmmBnBBpEjBB9EKBCOBCGBCBBr3ByBB+EVB75CfBhsVfBhCYBoyehBB",!1)),Math:()=>new g(m("ycGDCHHFMMDDDCHHFAB",!1)),Uppercase:()=>new g(m("hDZB7BqBqBBWBCHBCuBCEECDOCDsBCDECBBBDCCDEEGDDECBDDDCCCDFFDEECDDECCGBBCBBCBBCOCBSCDBBCEECkBCEQCJDDBCCFICBEBCBBCCCBEEBCCBCBCEBDCCBDDIDDCBBEFBGLLBnFnFsBCCEEEBBBvBDBCdBCBBECBCWCBDBCGD1BvBBCgBCK0BCDMCBgDCyBlBBq6CqBBDCB5XFBjkCIBCvHvHERRzD0ECGGGC8CCBHBJFBLHBJHBJFBMGCJHBJNBzBBBNSSBPPBEEpLiBiBBOBFsasaBYBn6BvBBCEEBGCHDDLiDCJCCFNNBkBBCGG0oesBCUaCoEMCE8BCLCCDICFFFCBBDSCMOCFCCDOCb9a9advCBi8UZBumBnBBpEjBB8EKBCOBCGBCBBk4ByBB+DVB75CfBhsVfB8BYBvyehBB",!1))});static FOLD_SCRIPT=new Go({Common:()=>new g(m("8cgBgB",!1)),Greek:()=>new g(m("1FwUwU",!1)),Inherited:()=>new g(m("5cgBgBlgHAB",!1))})},j=class bt{static MAX_RUNE=1114111;static MAX_ASCII=127;static MAX_LATIN1=255;static MAX_BMP=65535;static MIN_FOLD=65;static MAX_FOLD=125251;static MIN_HIGH_SURROGATE=55296;static MAX_HIGH_SURROGATE=56319;static MIN_LOW_SURROGATE=56320;static MAX_LOW_SURROGATE=57343;static MIN_SUPPLEMENTARY_CODE_POINT=65536;static is32(e,t){let n=0,r=e.length;for(;n<r;){const i=n+Math.floor((r-n)/2),o=e.getLo(i),a=e.getHi(i);if(o<=t&&t<=a){const c=e.getStride(i);return(t-o)%c===0}t<o?r=i:n=i+1}return!1}static is(e,t){if(t<=bt.MAX_LATIN1){for(let n=0;n<e.length;n++){if(t>e.getHi(n))continue;const r=e.getLo(n);if(t<r)return!1;const i=e.getStride(n);return(t-r)%i===0}return!1}return e.length>0&&t>=e.getLo(0)&&bt.is32(e,t)}static isUpper(e){if(e<=bt.MAX_LATIN1){const t=String.fromCodePoint(e);return t.toUpperCase()===t&&t.toLowerCase()!==t}return bt.is(Bt.Upper,e)}static isPrint(e){return e<=bt.MAX_LATIN1?e>=32&&e<bt.MAX_ASCII||e>=161&&e!==173:bt.is(Bt.Print,e)}static simpleFold(e){if(Bt.CASE_ORBIT.has(e))return Bt.CASE_ORBIT.get(e);const t=b.toLowerCase(e);return t!==e?t:b.toUpperCase(e)}static equalsIgnoreCase(e,t){if(e===t)return!0;if(e<0||t<0)return!1;if(e<=bt.MAX_ASCII&&t<=bt.MAX_ASCII)return 65<=e&&e<=90&&(e|=32),65<=t&&t<=90&&(t|=32),e===t;for(let n=bt.simpleFold(e);n!==e;n=bt.simpleFold(n))if(n===t)return!0;return!1}};const mB=256,ZC=new Uint8Array(mB);for(let s=0;s<mB;s++)ZC[s]=97<=s&&s<=122||65<=s&&s<=90||48<=s&&s<=57||s===95?1:0;let sc=null,rc=null;var Q=class wt{static METACHARACTERS="\\.+*?()|[]{}^$";static EMPTY_BEGIN_LINE=1;static EMPTY_END_LINE=2;static EMPTY_BEGIN_TEXT=4;static EMPTY_END_TEXT=8;static EMPTY_WORD_BOUNDARY=16;static EMPTY_NO_WORD_BOUNDARY=32;static EMPTY_ALL=-1;static emptyInts(){return[]}static isByteArray(e){return Array.isArray(e)||e instanceof Uint8Array}static isalnum(e){return b.CODES.get("0")<=e&&e<=b.CODES.get("9")||b.CODES.get("a")<=e&&e<=b.CODES.get("z")||b.CODES.get("A")<=e&&e<=b.CODES.get("Z")}static unhex(e){return b.CODES.get("0")<=e&&e<=b.CODES.get("9")?e-b.CODES.get("0"):b.CODES.get("a")<=e&&e<=b.CODES.get("f")?e-b.CODES.get("a")+10:b.CODES.get("A")<=e&&e<=b.CODES.get("F")?e-b.CODES.get("A")+10:-1}static escapeRune(e){let t="";if(j.isPrint(e))wt.METACHARACTERS.indexOf(String.fromCodePoint(e))>=0&&(t+="\\"),t+=String.fromCodePoint(e);else switch(e){case b.CODES.get('"'):t+='\\"';break;case b.CODES.get("\\"):t+="\\\\";break;case b.CODES.get("	"):t+="\\t";break;case b.CODES.get(`
`):t+="\\n";break;case b.CODES.get("\r"):t+="\\r";break;case b.CODES.get("\b"):t+="\\b";break;case b.CODES.get("\f"):t+="\\f";break;default:{let n=e.toString(16);e<256?(t+="\\x",n.length===1&&(t+="0"),t+=n):t+=`\\x{${n}}`;break}}return t}static stringToRunes(e){const t=String(e),n=[];let r=0;for(;r<t.length;){const i=t.codePointAt(r);n.push(i),r+=i>j.MAX_BMP?2:1}return n}static runeToString(e){return String.fromCodePoint(e)}static isWordRune(e){return e<mB?ZC[e]===1:!1}static emptyOpContext(e,t){let n=0;return e<0&&(n|=wt.EMPTY_BEGIN_TEXT|wt.EMPTY_BEGIN_LINE),e===10&&(n|=wt.EMPTY_BEGIN_LINE),t<0&&(n|=wt.EMPTY_END_TEXT|wt.EMPTY_END_LINE),t===10&&(n|=wt.EMPTY_END_LINE),wt.isWordRune(e)!==wt.isWordRune(t)?n|=wt.EMPTY_WORD_BOUNDARY:n|=wt.EMPTY_NO_WORD_BOUNDARY,n}static quoteMeta(e){return e.split("").map(t=>wt.METACHARACTERS.indexOf(t)>=0?`\\${t}`:t).join("")}static charCount(e){return e>j.MAX_BMP?2:1}static toArray(e){const t=e.length,n=new Array(t);for(let r=0;r<t;r++)n[r]=e[r];return n}static stringToUtf8ByteArray(e){if(globalThis.TextEncoder)return sc||(sc=new TextEncoder),sc.encode(e);{let t=[],n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=i&63|128):(i&64512)===j.MIN_HIGH_SURROGATE&&r+1<e.length&&(e.charCodeAt(r+1)&64512)===j.MIN_LOW_SURROGATE?(i=j.MIN_SUPPLEMENTARY_CODE_POINT+((i&1023)<<10)+(e.charCodeAt(++r)&1023),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=i&63|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=i&63|128)}return t}}static utf8ByteArrayToString(e){if(globalThis.TextDecoder){rc||(rc=new TextDecoder("utf-8"));const t=e instanceof Uint8Array?e:new Uint8Array(e);return rc.decode(t)}else{let t=[],n=0,r=0;for(;n<e.length;){let i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){let o=e[n++];t[r++]=String.fromCharCode((i&31)<<6|o&63)}else if(i>239&&i<365){let o=e[n++],a=e[n++],c=e[n++],B=((i&7)<<18|(o&63)<<12|(a&63)<<6|c&63)-j.MIN_SUPPLEMENTARY_CODE_POINT;t[r++]=String.fromCharCode(j.MIN_HIGH_SURROGATE+(B>>10)),t[r++]=String.fromCharCode(j.MIN_LOW_SURROGATE+(B&1023))}else{let o=e[n++],a=e[n++];t[r++]=String.fromCharCode((i&15)<<12|(o&63)<<6|a&63)}}return t.join("")}}};const ep=(s=[],e=0)=>{const t=Object.create(null);for(let n=0;n<s.length;n++){const r=s[n],i=e+n;t[r]=i,t[i]=r}return Object.freeze(t)};var Rs=class Nc{static Encoding=ep(["UTF_16","UTF_8"]);getEncoding(){throw Error("not implemented")}asCharSequence(){throw Error("not implemented")}asBytes(){throw Error("not implemented")}length(){throw Error("not implemented")}isUTF8Encoding(){return this.getEncoding()===Nc.Encoding.UTF_8}isUTF16Encoding(){return this.getEncoding()===Nc.Encoding.UTF_16}},lf=class extends Rs{constructor(s=null){super(),this.bytes=s}getEncoding(){return Rs.Encoding.UTF_8}asCharSequence(){return Q.utf8ByteArrayToString(this.bytes)}asBytes(){return this.bytes}length(){return this.bytes.length}},ty=class extends Rs{constructor(s=null){super(),this.charSequence=s}getEncoding(){return Rs.Encoding.UTF_16}asCharSequence(){return this.charSequence}asBytes(){return Q.stringToUtf8ByteArray(this.charSequence.toString())}length(){return this.charSequence.length}},_s=class{static utf16(s){return new ty(s)}static utf8(s){return Q.isByteArray(s)?new lf(s):new lf(Q.stringToUtf8ByteArray(s))}},at=class{static EOF(){return-8}constructor(){this.end=0}canCheckPrefix(){return!0}endPos(){return this.end}hasString(){return!1}hasAnyString(){return!1}prefixLength(){return 0}},ny=class extends at{constructor(s,e=0,t=s.length){super(),this.bytes=s,this.start=e,this.end=t}hasString(s,e){const t=s.bytes;if(t.length===0)return!0;const n=this.indexOf(this.bytes,t,this.start+e);return n!==-1&&n<=this.end-t.length}hasAnyString(s,e){return s.ac8?s.ac8.searchUTF8(this.bytes,this.start+e,this.end):!1}step(s){if(s+=this.start,s>=this.end)return at.EOF();const e=this.bytes[s]&255;if(e<128)return e<<3|1;if(e>=194&&e<=223&&s+1<this.end){const t=this.bytes[s+1]&255;return(t&192)!==128?e<<3|1:((e&31)<<6|t&63)<<3|2}else if(e>=224&&e<=239&&s+2<this.end){const t=this.bytes[s+1]&255;if((t&192)!==128)return e<<3|1;const n=this.bytes[s+2]&255;return(n&192)!==128?e<<3|1:((e&15)<<12|(t&63)<<6|n&63)<<3|3}else if(e>=240&&e<=244&&s+3<this.end){const t=this.bytes[s+1]&255;if((t&192)!==128)return e<<3|1;const n=this.bytes[s+2]&255;if((n&192)!==128)return e<<3|1;const r=this.bytes[s+3]&255;return(r&192)!==128?e<<3|1:((e&7)<<18|(t&63)<<12|(n&63)<<6|r&63)<<3|4}else return e<<3|1}index(s,e){e+=this.start;const t=this.indexOf(this.bytes,s.prefixUTF8,e);return t<0?t:t-e}context(s){s+=this.start;let e=-1;if(s>this.start&&s<=this.end){let n=s-1;if(e=this.bytes[n--],e>=128){let r=s-4;for(r<this.start&&(r=this.start);n>=r&&(this.bytes[n]&192)===128;)n--;n<this.start&&(n=this.start),e=this.step(n-this.start)>>3}}const t=s<this.end?this.step(s-this.start)>>3:-1;return Q.emptyOpContext(e,t)}indexOf(s,e,t=0){let n=e.length;if(n===0)return t<=this.end?t:-1;const r=e[0];let i=this.end-n;const o=typeof s.indexOf=="function";let a=t;for(;a<=i;){if(o){if(a=s.indexOf(r,a),a===-1||a>i)return-1}else{for(;a<=i&&s[a]!==r;)a++;if(a>i)return-1}let c=!0;for(let B=1;B<n;B++)if(s[a+B]!==e[B]){c=!1;break}if(c)return a;a++}return-1}prefixLength(s){return s.prefixUTF8.length}},sy=class extends at{constructor(s,e=0,t=s.length){super(),this.charSequence=s,this.start=e,this.end=t}hasString(s,e){const t=this.charSequence.indexOf(s.str,this.start+e);return t!==-1&&t<=this.end-s.str.length}hasAnyString(s,e){return s.ac16?s.ac16.searchUTF16(this.charSequence,this.start+e,this.end):!1}step(s){if(s+=this.start,s>=this.end)return at.EOF();const e=this.charSequence.charCodeAt(s);if(e<j.MIN_HIGH_SURROGATE||e>j.MAX_HIGH_SURROGATE||s+1>=this.end)return e<<3|1;const t=this.charSequence.charCodeAt(s+1);return t>=j.MIN_LOW_SURROGATE&&t<=j.MAX_LOW_SURROGATE?(e-j.MIN_HIGH_SURROGATE)*1024+(t-j.MIN_LOW_SURROGATE)+j.MIN_SUPPLEMENTARY_CODE_POINT<<3|2:e<<3|1}index(s,e){e+=this.start;const t=this.charSequence.indexOf(s.prefix,e);return t<0||t>this.end-s.prefix.length?-1:t-e}context(s){s+=this.start;const e=s>this.start&&s<=this.end?this.charSequence.charCodeAt(s-1):-1,t=s<this.end?this.charSequence.charCodeAt(s):-1;return Q.emptyOpContext(e,t)}prefixLength(s){return s.prefix.length}},Ie=class{static fromUTF8(s,e=0,t=s.length){return new ny(s,e,t)}static fromUTF16(s,e=0,t=s.length){return new sy(s,e,t)}},no=class extends Error{constructor(s){super(s),this.name="RE2JSException"}},Ee=class extends no{constructor(s,e=null){let t=`error parsing regexp: ${s}`;e&&(t+=`: \`${e}\``),super(t),this.name="RE2JSSyntaxException",this.message=t,this.error=s,this.input=e}getDescription(){return this.error}getPattern(){return this.input}},ry=class extends no{constructor(s){super(s),this.name="RE2JSCompileException"}},ct=class extends no{constructor(s){super(s),this.name="RE2JSGroupException"}},iy=class extends no{constructor(s){super(s),this.name="RE2JSFlagsException"}},hi=class extends no{constructor(s){super(s),this.name="RE2JSInternalException"}},cf=class tp{static MAX_REPLACER_ARGS=65535;static quoteReplacement(e,t=!1){return t?e.indexOf("\\")<0&&e.indexOf("$")<0?e:e.split("").map(n=>{const r=n.codePointAt(0);return r===b.CODES.get("\\")||r===b.CODES.get("$")?`\\${n}`:n}).join(""):e.indexOf("$")<0?e:e.split("").map(n=>n.codePointAt(0)===b.CODES.get("$")?"$$":n).join("")}constructor(e,t){if(e===null)throw new Error("pattern is null");this.patternInput=e;const n=this.patternInput.re2();this.patternGroupCount=n.numberOfCapturingGroups(),this.groups=[],this.namedGroups=n.namedGroups,this.numberOfInstructions=n.numberOfInstructions(),t instanceof Rs?this.resetMatcherInput(t):Q.isByteArray(t)?this.resetMatcherInput(_s.utf8(t)):this.resetMatcherInput(_s.utf16(t))}pattern(){return this.patternInput}reset(){return this.matcherInputLength=this.matcherInput.length(),this.appendPos=0,this.hasMatch=!1,this.hasGroups=!1,this.anchorFlag=0,this}resetMatcherInput(e){if(e===null)throw new Error("input is null");return e instanceof Rs||(Q.isByteArray(e)?e=_s.utf8(e):e=_s.utf16(e)),this.matcherInput=e,this.reset(),this}start(e=0){if(typeof e=="string"){const t=this.namedGroups[e];if(!Number.isFinite(t))throw new ct(`group '${e}' not found`);e=t}return this.loadGroup(e),this.groups[2*e]}end(e=0){if(typeof e=="string"){const t=this.namedGroups[e];if(!Number.isFinite(t))throw new ct(`group '${e}' not found`);e=t}return this.loadGroup(e),this.groups[2*e+1]}programSize(){return this.numberOfInstructions}group(e=0){if(typeof e=="string"){const r=this.namedGroups[e];if(!Number.isFinite(r))throw new ct(`group '${e}' not found`);e=r}const t=this.start(e),n=this.end(e);return t<0&&n<0?null:this.substring(t,n)}getNamedGroups(){if(!this.hasMatch)throw new ct("perhaps no match attempted");const e=Object.create(null);for(const t of Object.keys(this.namedGroups))e[t]=this.group(t);return e}groupCount(){return this.patternGroupCount}loadGroup(e){if(e<0||e>this.patternGroupCount)throw new ct(`Group index out of bounds: ${e}`);if(!this.hasMatch)throw new ct("perhaps no match attempted");if(e===0||this.hasGroups)return;const t=this.matcherInputLength,n=this.patternInput.re2().matchMachineInput(this.matcherInput,this.groups[0],t,this.anchorFlag,1+this.patternGroupCount);if(!n[0])throw new ct("inconsistency in matching group data");this.groups=n[1],this.hasGroups=!0}matches(){return this.genMatch(0,x.ANCHOR_BOTH)}lookingAt(){return this.genMatch(0,x.ANCHOR_START)}find(e=null){if(e!==null){if(e<0||e>this.matcherInputLength)throw new ct(`start index out of bounds: ${e}`);return this.reset(),this.genMatch(e,0)}if(e=0,this.hasMatch&&(e=this.groups[1],this.groups[0]===this.groups[1])){const t=(this.matcherInput.isUTF16Encoding()?Ie.fromUTF16(this.matcherInput.asCharSequence(),0,this.matcherInputLength):Ie.fromUTF8(this.matcherInput.asBytes(),0,this.matcherInputLength)).step(e);t<0?e++:e+=t&7}return this.genMatch(e,x.UNANCHORED)}genMatch(e,t){const n=this.patternInput.re2().matchMachineInput(this.matcherInput,e,this.matcherInputLength,t,1);return n[0]?(this.groups=n[1],this.hasMatch=!0,this.hasGroups=this.patternGroupCount===0,this.anchorFlag=t,!0):(this.hasMatch=!1,!1)}substring(e,t){return this.matcherInput.isUTF8Encoding()?Q.utf8ByteArrayToString(this.matcherInput.asBytes().slice(e,t)):this.matcherInput.asCharSequence().substring(e,t).toString()}inputLength(){return this.matcherInputLength}appendReplacement(e,t=!1){let n="";const r=this.start(),i=this.end();return this.appendPos<r&&(n+=this.substring(this.appendPos,r)),this.appendPos=i,n+=t?this.appendReplacementInternalJava(e):this.appendReplacementInternalJs(e),n}appendReplacementInternalJava(e){let t="",n=0;const r=e.length;let i=0;for(;i<r;){const o=e.codePointAt(i);if(o===b.CODES.get("\\")){if(n<i&&(t+=e.substring(n,i)),i++,i>=r)throw new ct("character to be escaped is missing");n=i,i++;continue}if(o===b.CODES.get("$")){if(n<i&&(t+=e.substring(n,i)),i+1>=r)throw new ct("Illegal group reference: group index is missing");const a=e.codePointAt(i+1);if(b.CODES.get("0")<=a&&a<=b.CODES.get("9")){let c=a-b.CODES.get("0"),B=i+2;for(;B<r;B++){const f=e.codePointAt(B);if(f<b.CODES.get("0")||f>b.CODES.get("9")||c*10+f-b.CODES.get("0")>this.patternGroupCount)break;c=c*10+f-b.CODES.get("0")}if(c>this.patternGroupCount)throw new ct(`n > number of groups: ${c}`);const h=this.group(c);h!==null&&(t+=h),i=B,n=i}else if(a===b.CODES.get("{")){let c=i+2;for(;c<r&&e.codePointAt(c)!==b.CODES.get("}");)c++;if(c>=r)throw new ct("named capture group is missing trailing '}'");const B=e.substring(i+2,c),h=this.group(B);h!==null&&(t+=h),i=c+1,n=i}else throw new ct("Illegal group reference");continue}i++}return n<r&&(t+=e.substring(n,r)),t}appendReplacementInternalJs(e){let t="",n=0;const r=e.length;for(let i=0;i<r-1;i++)if(e.codePointAt(i)===b.CODES.get("$")){let o=e.codePointAt(i+1);if(b.CODES.get("$")===o){n<i&&(t+=e.substring(n,i)),t+="$",i++,n=i+1;continue}else if(b.CODES.get("&")===o){n<i&&(t+=e.substring(n,i));const a=this.group(0);a!==null?t+=a:t+="$&",i++,n=i+1;continue}else if(b.CODES.get("`")===o){n<i&&(t+=e.substring(n,i)),t+=this.substring(0,this.start(0)),i++,n=i+1;continue}else if(b.CODES.get("'")===o){n<i&&(t+=e.substring(n,i)),t+=this.substring(this.end(0),this.matcherInputLength),i++,n=i+1;continue}else if(b.CODES.get("1")<=o&&o<=b.CODES.get("9")){let a=o-b.CODES.get("0");for(n<i&&(t+=e.substring(n,i)),i+=2;i<r&&(o=e.codePointAt(i),!(o<b.CODES.get("0")||o>b.CODES.get("9")||a*10+o-b.CODES.get("0")>this.patternGroupCount));i++)a=a*10+o-b.CODES.get("0");if(a>this.patternGroupCount){t+=`$${a}`,n=i,i--;continue}const c=this.group(a);c!==null&&(t+=c),n=i,i--;continue}else if(o===b.CODES.get("<")){n<i&&(t+=e.substring(n,i)),i++;let a=i+1;for(;a<e.length&&e.codePointAt(a)!==b.CODES.get(">")&&e.codePointAt(a)!==b.CODES.get(" ");)a++;if(a===e.length||e.codePointAt(a)!==b.CODES.get(">")){t+=e.substring(i-1,a+1),n=a+1,i=a;continue}const c=e.substring(i+1,a);if(Object.prototype.hasOwnProperty.call(this.namedGroups,c)){const B=this.group(c);B!==null&&(t+=B)}else t+=`$<${c}>`;n=a+1,i=a;continue}}return n<r&&(t+=e.substring(n,r)),t}appendTail(){return this.substring(this.appendPos,this.matcherInputLength)}replaceAll(e,t=!1){return this.replace(e,!0,t)}replaceFirst(e,t=!1){return this.replace(e,!1,t)}replace(e,t=!0,n=!1){let r="";this.reset();const i=typeof e=="function",o=Object.keys(this.namedGroups).length>0;let a=null;if(i){if(this.groupCount()>=tp.MAX_REPLACER_ARGS)throw new ct("Too many capture groups to safely invoke replacer function");a=this.matcherInput.isUTF8Encoding()?this.matcherInput.asBytes():this.matcherInput.asCharSequence()}for(;this.find()&&(r+=i?this.appendReplacementFunc(e,o,a):this.appendReplacement(e,n),!!t););return r+=this.appendTail(),r}appendReplacementFunc(e,t,n){let r="";const i=this.start(),o=this.end();this.appendPos<i&&(r+=this.substring(this.appendPos,i)),this.appendPos=o;const a=this.buildReplacerArgs(i,t,n);return r+=String(e(...a)),r}buildReplacerArgs(e,t,n){const r=[this.group(0)],i=this.groupCount();for(let o=1;o<=i;o++){const a=this.start(o);a<0?r.push(void 0):r.push(this.substring(a,this.end(o)))}if(r.push(e),r.push(n),t){const o=this.getNamedGroups();for(const a in o)o[a]===null&&(o[a]=void 0);r.push(o)}return r}},F=class Je{static ALT=1;static ALT_MATCH=2;static CAPTURE=3;static EMPTY_WIDTH=4;static FAIL=5;static MATCH=6;static NOP=7;static RUNE=8;static RUNE1=9;static RUNE_ANY=10;static RUNE_ANY_NOT_NL=11;static LB_WRITE=12;static LB_CHECK=13;static isRuneOp(e){return Je.RUNE<=e&&e<=Je.RUNE_ANY_NOT_NL}static escapeRunes(e){let t='"';for(let n of e)t+=Q.escapeRune(n);return t+='"',t}constructor(e){this.op=e,this.out=0,this.arg=0,this.runes=[],this.next=null}matchRune(e){if(this.runes.length===1){const o=this.runes[0];return(this.arg&x.FOLD_CASE)!==0?j.equalsIgnoreCase(o,e):e===o}const t=this.runes.length;if(t===0)return!1;if(t===2||t===4||t===6||t===8){for(let o=0;o<t;o+=2){if(e<this.runes[o])return!1;if(e<=this.runes[o+1])return!0}return!1}let n=0,r=t>>1;for(;r>1;){const o=r>>1;n+=this.runes[n+o<<1]<=e?o:0,r-=o}n+=this.runes[n<<1]<=e?1:0;const i=n-1;return i>=0&&e<=this.runes[i<<1|1]}matchRunePos(e){if(this.runes.length===1){const o=this.runes[0];return(this.arg&x.FOLD_CASE)!==0?j.equalsIgnoreCase(o,e)?0:-1:e===o?0:-1}const t=this.runes.length;if(t===0)return-1;if(t===2||t===4||t===6||t===8){for(let o=0;o<t;o+=2){if(e<this.runes[o])return-1;if(e<=this.runes[o+1])return Math.floor(o/2)}return-1}let n=0,r=t>>1;for(;r>1;){const o=r>>1;n+=this.runes[n+o<<1]<=e?o:0,r-=o}n+=this.runes[n<<1]<=e?1:0;const i=n-1;return i>=0&&e<=this.runes[i<<1|1]?i:-1}toString(){switch(this.op){case Je.ALT:return`alt -> ${this.out}, ${this.arg}`;case Je.ALT_MATCH:return`altmatch -> ${this.out}, ${this.arg}`;case Je.CAPTURE:return`cap ${this.arg} -> ${this.out}`;case Je.EMPTY_WIDTH:return`empty ${this.arg} -> ${this.out}`;case Je.MATCH:return`match${this.arg!==0?` ${this.arg}`:""}`;case Je.FAIL:return"fail";case Je.NOP:return`nop -> ${this.out}`;case Je.LB_WRITE:return`lbwrite ${this.arg} -> ${this.out}`;case Je.LB_CHECK:return`lbcheck ${this.arg} -> ${this.out}`;case Je.RUNE:return this.runes===null?"rune <null>":["rune ",Je.escapeRunes(this.runes),(this.arg&x.FOLD_CASE)!==0?"/i":""," -> ",this.out].join("");case Je.RUNE1:return`rune1 ${Je.escapeRunes(this.runes)} -> ${this.out}`;case Je.RUNE_ANY:return`any -> ${this.out}`;case Je.RUNE_ANY_NOT_NL:return`anynotnl -> ${this.out}`;default:throw new Error("unhandled case in Inst.toString")}}},Bf=class{constructor(s){this.sparse=new Int32Array(s),this.densePcs=new Int32Array(s),this.denseCaps=null,this.size=0,this.ncap=0}init(s){this.ncap=s;const e=this.densePcs.length*s;(!this.denseCaps||this.denseCaps.length<e)&&(this.denseCaps=new Int32Array(e))}contains(s){const e=this.sparse[s];return e<this.size&&this.densePcs[e]===s}isEmpty(){return this.size===0}add(s){const e=this.size++;return this.sparse[s]=e,this.densePcs[e]=s,e}clear(){this.size=0}toString(){let s="{";for(let e=0;e<this.size;e++)e!==0&&(s+=", "),s+=this.densePcs[e];return s+="}",s}},oy=class bc{static fromRE2(e){const t=new bc;return t.prog=e.prog,t.re2=e,t.q0=new Bf(t.prog.numInst()),t.q1=new Bf(t.prog.numInst()),t.matched=!1,t.matchcap=new Int32Array(t.prog.numCap<2?2:t.prog.numCap),t.ncap=0,t}static fromMachine(e){return bc.fromRE2(e.re2)}constructor(){this.prog=null,this.re2=null,this.q0=null,this.q1=null,this.matched=!1,this.matchcap=null,this.ncap=0,this.lbTable=null}init(e){this.ncap=e,e>this.matchcap.length?this.matchcap=new Int32Array(e).fill(-1):this.matchcap.fill(-1),this.q0.init(e),this.q1.init(e),this.prog.numLb>0&&((!this.lbTable||this.lbTable.length<this.prog.numLb+1)&&(this.lbTable=new Int32Array(this.prog.numLb+1)),this.lbTable.fill(-1))}submatches(){return this.ncap===0?Q.emptyInts():Q.toArray(this.matchcap.subarray(0,this.ncap))}match(e,t,n){const r=this.re2.cond;if(r===Q.EMPTY_ALL||(n===x.ANCHOR_START||n===x.ANCHOR_BOTH)&&t!==0)return!1;this.matched=!1,this.matchcap.fill(-1);let i=this.prog.numLb>0?0:t,o=t,a=this.q0,c=this.q1,B=e.step(i),h=B>>3,f=B&7,C=-1,_=0;B!==at.EOF()&&(B=e.step(i+f),C=B>>3,_=B&7);let I;for(i===0?I=Q.emptyOpContext(-1,h):I=e.context(i);;){if(a.isEmpty()){if((r&Q.EMPTY_BEGIN_TEXT)!==0&&i!==0||(n===x.ANCHOR_START||n===x.ANCHOR_BOTH)&&i!==0||this.matched)break;if(this.prog.numLb===0&&this.re2.prefix.length!==0&&C!==this.re2.prefixRune&&e.canCheckPrefix()){const q=e.index(this.re2,i);if(q<0)break;i+=q,B=e.step(i),h=B>>3,f=B&7,B=e.step(i+f),C=B>>3,_=B&7,I=e.context(i)}}if(i===0&&this.prog.numLb>0)for(let q=0;q<this.prog.lbStarts.length;q++)this.add(a,this.prog.lbStarts[q],i,this.matchcap,0,I);!this.matched&&(i===0||n===x.UNANCHORED)&&i>=o&&(this.ncap>0&&(this.matchcap[0]=i),this.add(a,this.prog.start,i,this.matchcap,0,I));const O=i+f;if(I=e.context(O),this.step(a,c,i,O,h,I,n,i===e.endPos()),f===0||this.ncap===0&&this.matched)break;i+=f,h=C,f=_,h!==-1&&(B=e.step(i+f),C=B>>3,_=B&7);const V=a;a=c,c=V}return c.clear(),this.matched}matchSet(e,t,n){const r=this.re2.cond;if(r===Q.EMPTY_ALL)return[];if((n===x.ANCHOR_START||n===x.ANCHOR_BOTH)&&t!==0)return[];let i=this.prog.numLb>0?0:t,o=t,a=this.q0,c=this.q1,B=e.step(i),h=B>>3,f=B&7,C=-1,_=0;B!==at.EOF()&&(B=e.step(i+f),C=B>>3,_=B&7);let I=i===0?Q.emptyOpContext(-1,h):e.context(i);const O=new Set;for(;!(a.isEmpty()&&((r&Q.EMPTY_BEGIN_TEXT)!==0&&i!==0||(n===x.ANCHOR_START||n===x.ANCHOR_BOTH)&&i!==0));){if(i===0&&this.prog.numLb>0)for(let re=0;re<this.prog.lbStarts.length;re++)this.add(a,this.prog.lbStarts[re],i,this.matchcap,0,I);(i===0||n===x.UNANCHORED)&&i>=o&&this.add(a,this.prog.start,i,this.matchcap,0,I);const V=i+f;I=e.context(V);for(let re=0;re<a.size;re++){const pe=a.densePcs[re],Re=this.prog.inst[pe],yt=re*this.ncap;let ve=!1;switch(Re.op){case F.MATCH:if(n===x.ANCHOR_BOTH&&i!==e.endPos())break;O.add(Re.arg);break;case F.RUNE:ve=Re.matchRune(h);break;case F.RUNE1:ve=h===Re.runes[0];break;case F.RUNE_ANY:ve=!0;break;case F.RUNE_ANY_NOT_NL:ve=h!==10;break;default:continue}ve&&this.add(c,Re.out,V,a.denseCaps,yt,I)}if(a.clear(),f===0)break;i+=f,h=C,f=_,h!==-1&&(B=e.step(i+f),C=B>>3,_=B&7);const q=a;a=c,c=q}return c.clear(),Array.from(O).sort((V,q)=>V-q)}step(e,t,n,r,i,o,a,c){const B=this.re2.longest;for(let h=0;h<e.size;h++){const f=e.densePcs[h],C=h*this.ncap;if(B&&this.matched&&this.ncap>0&&this.matchcap[0]<e.denseCaps[C])continue;const _=this.prog.inst[f];let I=!1;switch(_.op){case F.MATCH:if(a===x.ANCHOR_BOTH&&!c)break;if(this.ncap>0&&(!B||!this.matched||this.matchcap[1]<n)){e.denseCaps[C+1]=n;for(let O=0;O<this.ncap;O++)this.matchcap[O]=e.denseCaps[C+O]}B||(e.size=0),this.matched=!0;break;case F.RUNE:I=_.matchRune(i);break;case F.RUNE1:I=i===_.runes[0];break;case F.RUNE_ANY:I=!0;break;case F.RUNE_ANY_NOT_NL:I=i!==10;break;default:continue}I&&this.add(t,_.out,r,e.denseCaps,C,o)}e.clear()}add(e,t,n,r,i,o){for(;;){if(t===0||e.contains(t))return;const a=e.add(t),c=this.prog.inst[t];switch(c.op){case F.FAIL:return;case F.ALT:case F.ALT_MATCH:this.add(e,c.out,n,r,i,o),t=c.arg;continue;case F.EMPTY_WIDTH:if((c.arg&~o)===0){t=c.out;continue}return;case F.NOP:t=c.out;continue;case F.CAPTURE:if(c.arg<this.ncap){const B=r[i+c.arg];r[i+c.arg]=n,this.add(e,c.out,n,r,i,o),r[i+c.arg]=B;return}else{t=c.out;continue}case F.LB_WRITE:this.lbTable[Math.abs(c.arg)]=n,t=c.out;continue;case F.LB_CHECK:if(c.arg>0){if(this.lbTable[c.arg]===n){t=c.out;continue}}else if(this.lbTable[-c.arg]!==n){t=c.out;continue}return;case F.MATCH:case F.RUNE:case F.RUNE1:case F.RUNE_ANY:case F.RUNE_ANY_NOT_NL:if(this.ncap>0){const B=a*this.ncap;for(let h=0;h<this.ncap;h++)e.denseCaps[B+h]=r[i+h]}return;default:throw new hi("unhandled")}}}};const uf=s=>{let e=-2128831035;for(let t=0;t<s.length;t++)e^=s[t],e=Math.imul(e,16777619);return e},ay=(s,e)=>{if(s.length!==e.length)return!1;for(let t=0;t<s.length;t++)if(s[t]!==e[t])return!1;return!0};var ly=class{constructor(s,e,t=[]){this.nfaStates=s,this.isMatch=e,this.matchIDs=t,this.nextLatin1=new Array(j.MAX_LATIN1+1).fill(null),this.nextLatin1Anchored=new Array(j.MAX_LATIN1+1).fill(null),this.transKeys=[],this.transVals=[],this.lastSeen=0}},cy=class Oc{static MAX_CACHE_CLEARS=5;static STATE_MEMORY_ESTIMATE=838;constructor(e,t=8388608){this.prog=e,this.stateCache=new Map,this.stateCount=0,this.startState=null,this.stateLimit=Math.max(1,Math.floor(t/Oc.STATE_MEMORY_ESTIMATE)),this.cacheClears=0,this.failed=!1,this.clock=0}computeClosure(e){const t=new Set,n=[...e];let r=!1;const i=[];for(;n.length>0;){const a=n.pop();if(t.has(a))continue;t.add(a);const c=this.prog.getInst(a);switch(c.op){case F.MATCH:r=!0,i.includes(c.arg)||i.push(c.arg);break;case F.ALT:case F.ALT_MATCH:n.push(c.out),n.push(c.arg);break;case F.NOP:case F.CAPTURE:n.push(c.out);break;case F.EMPTY_WIDTH:case F.LB_WRITE:case F.LB_CHECK:return null}}const o=Int32Array.from(t).sort();return i.sort((a,c)=>a-c),{pcs:o,isMatch:r,matchIDs:i}}getState(e){const t=this.computeClosure(e);if(!t)return null;const n=t.pcs,r=uf(n);let i=this.stateCache.get(r);if(i)for(let a=0;a<i.length;a++){const c=i[a];if(ay(c.nfaStates,n))return c.lastSeen=++this.clock,c}else i=[],this.stateCache.set(r,i);if(this.failed)return null;if(this.stateCount>=this.stateLimit){if(this.cacheClears++,this.cacheClears>=Oc.MAX_CACHE_CLEARS)return this.failed=!0,this.stateCache.clear(),this.stateCount=0,this.startState=null,null;this.evictCache(),i=this.stateCache.get(r),i||(i=[],this.stateCache.set(r,i))}const o=new ly(n,t.isMatch,t.matchIDs);return o.lastSeen=++this.clock,i.push(o),this.stateCount++,o}evictCache(){const e=[];for(const o of this.stateCache.values())for(let a=0;a<o.length;a++)e.push(o[a]);e.sort((o,a)=>o.lastSeen-a.lastSeen);const t=Math.max(1,Math.floor(this.stateLimit/2)),n=e.length-t,r=e.slice(n),i=new Set(r);this.stateCache.clear(),this.stateCount=0;for(let o=0;o<r.length;o++){const a=r[o];a.nextLatin1.fill(null),a.nextLatin1Anchored.fill(null),a.transKeys.length=0,a.transVals.length=0;const c=uf(a.nfaStates);let B=this.stateCache.get(c);B||(B=[],this.stateCache.set(c,B)),B.push(a),this.stateCount++}this.startState&&!i.has(this.startState)&&(this.startState=null)}step(e,t,n){if(t<=j.MAX_LATIN1)if(n===x.UNANCHORED){const o=e.nextLatin1[t];if(o!==null)return o}else{const o=e.nextLatin1Anchored[t];if(o!==null)return o}else{const o=t+(n===x.UNANCHORED?0:j.MAX_RUNE+1),a=e.transKeys,c=a.length;for(let B=0;B<c;B++)if(a[B]===o)return e.transVals[B]}const r=[];for(let o=0;o<e.nfaStates.length;o++){const a=e.nfaStates[o],c=this.prog.getInst(a);F.isRuneOp(c.op)&&c.matchRune(t)&&r.push(c.out)}n===x.UNANCHORED&&r.push(this.prog.start);const i=this.getState(r);if(t<=j.MAX_LATIN1)n===x.UNANCHORED?e.nextLatin1[t]=i:e.nextLatin1Anchored[t]=i;else{const o=t+(n===x.UNANCHORED?0:j.MAX_RUNE+1);e.transKeys.push(o),e.transVals.push(i)}return i}match(e,t,n){if((n===x.ANCHOR_START||n===x.ANCHOR_BOTH)&&t!==0)return!1;if(!this.startState&&(this.startState=this.getState([this.prog.start]),!this.startState))return null;let r=e.endPos(),i=this.startState;if(i.isMatch)if(n===x.ANCHOR_BOTH){if(t===r)return!0}else return!0;let o=t;for(;o<r;){const a=e.step(o),c=a>>3,B=a&7;if(B===0)break;if(i=n===x.UNANCHORED&&c<=j.MAX_LATIN1&&i.nextLatin1[c]||this.step(i,c,n),i===null)return null;if(i.lastSeen=++this.clock,i.isMatch)if(n===x.ANCHOR_BOTH){if(o+B===r)return!0}else return!0;if(i.nfaStates.length===0&&n!==x.UNANCHORED)return!1;o+=B}return!1}matchSet(e,t,n){if((n===x.ANCHOR_START||n===x.ANCHOR_BOTH)&&t!==0)return[];if(!this.startState&&(this.startState=this.getState([this.prog.start]),!this.startState))return null;let r=e.endPos(),i=this.startState;const o=new Set,a=(B,h)=>{B.isMatch&&(n===x.ANCHOR_BOTH?h===r&&B.matchIDs.forEach(f=>o.add(f)):B.matchIDs.forEach(f=>o.add(f)))};a(i,t);let c=t;for(;c<r;){const B=e.step(c),h=B>>3,f=B&7;if(f===0)break;if(i=n===x.UNANCHORED&&h<=j.MAX_LATIN1&&i.nextLatin1[h]||this.step(i,h,n),i===null)return null;if(i.lastSeen=++this.clock,c+=f,a(i,c),i.nfaStates.length===0&&n!==x.UNANCHORED)break}return Array.from(o).sort((B,h)=>B-h)}};const By=32,uy=500,ic=256,hy=256*1024;var fy=class{constructor(){this.end=0,this.cap=new Int32Array(0),this.matchcap=new Int32Array(0),this.ncap=0,this.jobPc=new Int32Array(ic),this.jobArg=new Uint8Array(ic),this.jobPos=new Int32Array(ic),this.jobLen=0,this.visited=new Uint32Array(0)}reset(s,e,t){this.end=e,this.jobLen=0,this.ncap=t;const n=s.numInst()*(e+1)+By-1>>>5;this.visited.length<n?this.visited=new Uint32Array(n):this.visited.fill(0,0,n),this.cap.length<t?this.cap=new Int32Array(t).fill(-1):this.cap.fill(-1,0,t),this.matchcap.length<t?this.matchcap=new Int32Array(t).fill(-1):this.matchcap.fill(-1,0,t)}shouldVisit(s,e){const t=s*(this.end+1)+e,n=t>>>5,r=1<<(t&31);return(this.visited[n]&r)!==0?!1:(this.visited[n]|=r,!0)}push(s,e,t,n){if(s.prog.getInst(e).op!==F.FAIL&&(n||this.shouldVisit(e,t))){if(this.jobLen>=this.jobPc.length){const r=this.jobPc.length*2,i=new Int32Array(r);i.set(this.jobPc),this.jobPc=i;const o=new Uint8Array(r);o.set(this.jobArg),this.jobArg=o;const a=new Int32Array(r);a.set(this.jobPos),this.jobPos=a}this.jobPc[this.jobLen]=e,this.jobArg[this.jobLen]=n?1:0,this.jobPos[this.jobLen]=t,this.jobLen++}}tryBacktrack(s,e,t,n,r){const i=s.longest;for(this.push(s,t,n,!1);this.jobLen>0;){this.jobLen--;let o=this.jobPc[this.jobLen],a=this.jobArg[this.jobLen]===1,c=this.jobPos[this.jobLen],B=!0;for(;!(!B&&!this.shouldVisit(o,c));){B=!1;const h=s.prog.getInst(o);switch(h.op){case F.FAIL:throw new hi("unexpected InstFail");case F.ALT:if(a){a=!1,o=h.arg;continue}else{this.push(s,o,c,!0),o=h.out;continue}case F.ALT_MATCH:{const f=s.prog.getInst(h.out);if(F.isRuneOp(f.op)){this.push(s,h.arg,c,!1),o=h.arg,c=this.end;continue}this.push(s,h.out,this.end,!1),o=h.out;continue}case F.RUNE:{const f=e.step(c);if(f===at.EOF()||!h.matchRune(f>>3))break;c+=f&7,o=h.out;continue}case F.RUNE1:{const f=e.step(c);if(f===at.EOF()||f>>3!==h.runes[0])break;c+=f&7,o=h.out;continue}case F.RUNE_ANY_NOT_NL:{const f=e.step(c);if(f===at.EOF()||f>>3===10)break;c+=f&7,o=h.out;continue}case F.RUNE_ANY:{const f=e.step(c);if(f===at.EOF())break;c+=f&7,o=h.out;continue}case F.CAPTURE:if(a){this.cap[h.arg]=c;break}else{h.arg<this.ncap&&(this.push(s,o,this.cap[h.arg],!0),this.cap[h.arg]=c),o=h.out;continue}case F.EMPTY_WIDTH:{const f=e.context(c);if((h.arg&~f)!==0)break;o=h.out;continue}case F.NOP:o=h.out;continue;case F.MATCH:{if(r===x.ANCHOR_BOTH&&c!==this.end)break;if(this.ncap===0)return!0;this.ncap>1&&(this.cap[1]=c);const f=this.matchcap[1];if((f===-1||i&&c>0&&c>f)&&this.matchcap.set(this.cap),!i||c===this.end)return!0;break}case F.LB_WRITE:case F.LB_CHECK:throw new hi("Backtracker cannot evaluate Lookbehind instructions");default:throw new hi("bad inst")}break}}return i&&this.matchcap.length>1&&this.matchcap[1]>=0}};const Ho=[];var Uo=class np{static shouldBacktrack(e){return e.numInst()<=uy}static maxBitStateLen(e){return np.shouldBacktrack(e)?Math.floor(hy/e.numInst()):0}static execute(e,t,n,r,i){const o=e.cond;if(o===Q.EMPTY_ALL||(r===x.ANCHOR_START||r===x.ANCHOR_BOTH)&&n!==0||(o&Q.EMPTY_BEGIN_TEXT)!==0&&n!==0)return null;const a=Ho.length>0?Ho.pop():new fy,c=t.endPos();a.reset(e.prog,c,i);let B=!1;if((o&Q.EMPTY_BEGIN_TEXT)!==0||r===x.ANCHOR_START||r===x.ANCHOR_BOTH)a.ncap>0&&(a.cap[0]=n),a.tryBacktrack(e,t,e.prog.start,n,r)&&(B=!0);else{let f=-1;for(;n<=c&&f!==0;n+=f){if(e.prefix.length>0){const _=t.index(e,n);if(_<0)break;n+=_}if(a.ncap>0&&(a.cap[0]=n),a.tryBacktrack(e,t,e.prog.start,n,r)){B=!0;break}const C=t.step(n);f=C===at.EOF()?0:C&7}}if(!B)return Ho.push(a),null;const h=i===0?[]:Q.toArray(a.matchcap.subarray(0,i));return Ho.push(a),h}},hf=class{constructor(s){this.sparse=new Uint32Array(s),this.dense=new Uint32Array(s),this.size=0,this.nextIndex=0}empty(){return this.nextIndex>=this.size}next(){return this.dense[this.nextIndex++]}clear(){this.size=0,this.nextIndex=0}contains(s){return s<this.sparse.length&&this.sparse[s]<this.size&&this.dense[this.sparse[s]]===s}insert(s){this.contains(s)||this.insertNew(s)}insertNew(s){s>=this.sparse.length||(this.sparse[s]=this.size,this.dense[this.size]=s,this.size++)}};const dy=(s,e,t,n)=>{const r=s.length,i=e.length;let o=0,a=0;const c=[],B=[];let h=!0,f=-1;const C=_=>{const I=_?s:e,O=_?o:a,V=_?t:n;return f>0&&I[O]<=c[f]?!1:(c.push(I[O],I[O+1]),_?o+=2:a+=2,f+=2,B.push(V),!0)};for(;o<r||a<i;)if(a>=i?h=C(!0):o>=r||e[a]<s[o]?h=C(!1):h=C(!0),!h)return null;return{merged:c,next:B}};var Cy=class{constructor(s){this.start=s.start,this.numCap=s.numCap,this.inst=new Array(s.inst.length);for(let e=0;e<s.inst.length;e++){const t=s.inst[e],n=new F(t.op);n.out=t.out,n.arg=t.arg,n.runes=t.runes?t.runes.slice():[],n.next=null,this.inst[e]=n}}};const py=s=>{const e=new Cy(s);for(let t=0;t<e.inst.length;t++){const n=e.inst[t];if(n.op!==F.ALT&&n.op!==F.ALT_MATCH)continue;let r="out",i="arg",o=e.inst[n[i]];if(o.op!==F.ALT&&o.op!==F.ALT_MATCH&&(r="arg",i="out",o=e.inst[n[i]],o.op!==F.ALT&&o.op!==F.ALT_MATCH))continue;const a=e.inst[n[r]];if(a.op===F.ALT||a.op===F.ALT_MATCH)continue;let c="out",B="arg",h=!1;o.out===t?h=!0:o.arg===t&&(h=!0,c="arg",B="out"),h&&(o[c]=n[r]),n[r]===o[c]&&(n[i]=o[B])}return e},gy=s=>{if(s.inst.length>=1e3)return null;const e=new hf(s.inst.length),t=new hf(s.inst.length),n=new Array(s.inst.length),r=new Array(s.inst.length).fill(!1),i=o=>{let a=!0;const c=s.inst[o];if(t.contains(o))return!0;switch(t.insert(o),c.op){case F.ALT:case F.ALT_MATCH:{a=i(c.out)&&i(c.arg);let B=r[c.out],h=r[c.arg];if(B&&h)return!1;if(h){const I=c.out;c.out=c.arg,c.arg=I;const O=B;B=h,h=O}B&&(r[o]=!0,c.op=F.ALT_MATCH);const f=n[c.out]||[],C=n[c.arg]||[],_=dy(f,C,c.out,c.arg);if(!_)return!1;n[o]=_.merged,c.next=new Uint32Array(_.next);break}case F.CAPTURE:case F.EMPTY_WIDTH:case F.NOP:a=i(c.out),r[o]=r[c.out],n[o]=n[c.out]?n[c.out].slice():[],c.next=new Uint32Array(Math.floor(n[o].length/2)+1).fill(c.out);break;case F.MATCH:case F.FAIL:r[o]=c.op===F.MATCH;break;case F.RUNE:{if(r[o]=!1,c.next&&c.next.length>0)break;if(e.insert(c.out),!c.runes||c.runes.length===0){n[o]=[],c.next=new Uint32Array([c.out]);break}let B=[];if(c.runes.length===1&&(c.arg&x.FOLD_CASE)!==0){const h=c.runes[0];B.push(h,h);for(let f=j.simpleFold(h);f!==h;f=j.simpleFold(f))B.push(f,f);B.sort((f,C)=>f-C)}else for(let h=0;h<c.runes.length;h++)B.push(c.runes[h]);n[o]=B,c.next=new Uint32Array(Math.floor(B.length/2)+1).fill(c.out),c.op=F.RUNE;break}case F.RUNE1:{if(r[o]=!1,c.next&&c.next.length>0)break;e.insert(c.out);let B=[];if((c.arg&x.FOLD_CASE)!==0){const h=c.runes[0];B.push(h,h);for(let f=j.simpleFold(h);f!==h;f=j.simpleFold(f))B.push(f,f);B.sort((f,C)=>f-C)}else B.push(c.runes[0],c.runes[0]);n[o]=B,c.next=new Uint32Array(Math.floor(B.length/2)+1).fill(c.out),c.op=F.RUNE;break}case F.RUNE_ANY:if(r[o]=!1,c.next&&c.next.length>0)break;e.insert(c.out),n[o]=[0,j.MAX_RUNE],c.next=new Uint32Array([c.out]);break;case F.RUNE_ANY_NOT_NL:if(r[o]=!1,c.next&&c.next.length>0)break;e.insert(c.out),n[o]=[0,9,11,j.MAX_RUNE],c.next=new Uint32Array(Math.floor(n[o].length/2)+1).fill(c.out);break}return a};for(e.clear(),e.insert(s.start);!e.empty();)if(t.clear(),!i(e.next()))return null;for(let o=0;o<s.inst.length;o++)n[o]&&(s.inst[o].runes=n[o]);return s},my=(s,e)=>{for(let t=0;t<e.inst.length;t++){const n=e.inst[t];switch(n.op){case F.ALT:case F.ALT_MATCH:case F.RUNE:break;case F.CAPTURE:case F.EMPTY_WIDTH:case F.NOP:case F.MATCH:case F.FAIL:s.inst[t].next=null;break;case F.RUNE1:case F.RUNE_ANY:case F.RUNE_ANY_NOT_NL:s.inst[t].next=null,s.inst[t].op=n.op,s.inst[t].runes=n.runes?n.runes.slice():[];break}}};var ff=class sp{static compile(e){if(e.start===0||e.numLb>0)return null;const t=e.inst[e.start];if(t.op!==F.EMPTY_WIDTH||(t.arg&Q.EMPTY_BEGIN_TEXT)===0)return null;let n=!1;for(let i=0;i<e.inst.length;i++)if(e.inst[i].op===F.ALT||e.inst[i].op===F.ALT_MATCH){n=!0;break}for(let i=0;i<e.inst.length;i++){const o=e.inst[i],a=e.inst[o.out].op;switch(o.op){case F.ALT:case F.ALT_MATCH:if(a===F.MATCH||e.inst[o.arg].op===F.MATCH)return null;break;case F.EMPTY_WIDTH:if(a===F.MATCH){if((o.arg&Q.EMPTY_END_TEXT)===Q.EMPTY_END_TEXT)continue;return null}break;default:if(a===F.MATCH&&n)return null;break}}let r=py(e);return r=gy(r),r!==null&&my(r,e),r}static next(e,t){const n=e.matchRunePos(t);return n>=0?e.next[n]:e.op===F.ALT_MATCH?e.out:0}static execute(e,t,n,r,i){const o=e.onepass;if(!o)return null;const a=new Int32Array(i).fill(-1);let c=!1,B=t.step(n),h=B>>3,f=B&7,C=at.EOF(),_=-1,I=0;B!==at.EOF()&&(C=t.step(n+f),C!==at.EOF()&&(_=C>>3,I=C&7));let O=n===0?Q.emptyOpContext(-1,h):t.context(n),V=o.start,q;for(;;){switch(q=o.inst[V],V=q.out,q.op){case F.MATCH:return r===x.ANCHOR_BOTH&&n!==t.endPos()?null:(c=!0,a.length>0&&(a[0]=0,a[1]=n),i===0?[]:Q.toArray(a));case F.RUNE:if(!q.matchRune(h))return null;break;case F.RUNE1:if(h!==q.runes[0])return null;break;case F.RUNE_ANY:break;case F.RUNE_ANY_NOT_NL:if(h===10)return null;break;case F.ALT:case F.ALT_MATCH:V=sp.next(q,h);continue;case F.FAIL:return null;case F.NOP:continue;case F.EMPTY_WIDTH:if((q.arg&~O)!==0)return null;continue;case F.CAPTURE:q.arg<a.length&&(a[q.arg]=n);continue;default:throw new hi("bad inst")}if(f===0)break;O=Q.emptyOpContext(h,_),n+=f,h=_,f=I,h!==-1&&(C=t.step(n+f),C!==at.EOF()?(_=C>>3,I=C&7):(_=-1,I=0))}return c?i===0?[]:Q.toArray(a):null}},T=class X{static Op=ep(["NO_MATCH","EMPTY_MATCH","LITERAL","CHAR_CLASS","ANY_CHAR_NOT_NL","ANY_CHAR","BEGIN_LINE","END_LINE","BEGIN_TEXT","END_TEXT","WORD_BOUNDARY","NO_WORD_BOUNDARY","CAPTURE","STAR","PLUS","QUEST","REPEAT","CONCAT","ALTERNATE","PLB","NLB","LEFT_PAREN","VERTICAL_BAR"]);static isPseudoOp(e){return e>=X.Op.LEFT_PAREN}static emptySubs(){return[]}static quoteIfHyphen(e){return e===b.CODES.get("-")?"\\":""}static fromRegexp(e){const t=new X(e.op);return t.flags=e.flags,t.subs=e.subs,t.runes=e.runes,t.cap=e.cap,t.min=e.min,t.max=e.max,t.name=e.name,t.namedGroups=e.namedGroups,t.lb=e.lb,t}constructor(e){this.op=e,this.flags=0,this.subs=X.emptySubs(),this.runes=[],this.min=0,this.max=0,this.cap=0,this.name=null,this.namedGroups=Object.create(null),this.lb=0}reinit(){this.flags=0,this.subs=X.emptySubs(),this.runes=[],this.cap=0,this.min=0,this.max=0,this.name=null,this.namedGroups=Object.create(null),this.lb=0}toString(){return this.appendTo()}appendTo(){let e="";switch(this.op){case X.Op.NO_MATCH:e+="[^\\x00-\\x{10FFFF}]";break;case X.Op.EMPTY_MATCH:e+="(?:)";break;case X.Op.STAR:case X.Op.PLUS:case X.Op.QUEST:case X.Op.REPEAT:{const t=this.subs[0];switch(t.op>X.Op.CAPTURE||t.op===X.Op.LITERAL&&t.runes.length>1?e+=`(?:${t.appendTo()})`:e+=t.appendTo(),this.op){case X.Op.STAR:e+="*";break;case X.Op.PLUS:e+="+";break;case X.Op.QUEST:e+="?";break;case X.Op.REPEAT:e+=`{${this.min}`,this.min!==this.max&&(e+=",",this.max>=0&&(e+=this.max)),e+="}";break}(this.flags&x.NON_GREEDY)!==0&&(e+="?");break}case X.Op.CONCAT:for(let t of this.subs)t.op===X.Op.ALTERNATE?e+=`(?:${t.appendTo()})`:e+=t.appendTo();break;case X.Op.ALTERNATE:{let t="";for(let n of this.subs)e+=t,t="|",e+=n.appendTo();break}case X.Op.LITERAL:(this.flags&x.FOLD_CASE)!==0&&(e+="(?i:");for(let t of this.runes)e+=Q.escapeRune(t);(this.flags&x.FOLD_CASE)!==0&&(e+=")");break;case X.Op.ANY_CHAR_NOT_NL:e+="(?-s:.)";break;case X.Op.ANY_CHAR:e+="(?s:.)";break;case X.Op.PLB:e+=`(?<=${this.subs[0].appendTo()})`;break;case X.Op.NLB:e+=`(?<!${this.subs[0].appendTo()})`;break;case X.Op.CAPTURE:this.name===null||this.name.length===0?e+="(":e+=`(?P<${this.name}>`,this.subs[0].op!==X.Op.EMPTY_MATCH&&(e+=this.subs[0].appendTo()),e+=")";break;case X.Op.BEGIN_TEXT:e+="\\A";break;case X.Op.END_TEXT:(this.flags&x.WAS_DOLLAR)!==0?e+="(?-m:$)":e+="\\z";break;case X.Op.BEGIN_LINE:e+="^";break;case X.Op.END_LINE:e+="$";break;case X.Op.WORD_BOUNDARY:e+="\\b";break;case X.Op.NO_WORD_BOUNDARY:e+="\\B";break;case X.Op.CHAR_CLASS:if(this.runes.length%2!==0){e+="[invalid char class]";break}if(e+="[",this.runes.length===0)e+="^\\x00-\\x{10FFFF}";else if(this.runes[0]===0&&this.runes[this.runes.length-1]===j.MAX_RUNE){e+="^";for(let t=1;t<this.runes.length-1;t+=2){const n=this.runes[t]+1,r=this.runes[t+1]-1;e+=X.quoteIfHyphen(n),e+=Q.escapeRune(n),n!==r&&(e+="-",e+=X.quoteIfHyphen(r),e+=Q.escapeRune(r))}}else for(let t=0;t<this.runes.length;t+=2){const n=this.runes[t],r=this.runes[t+1];e+=X.quoteIfHyphen(n),e+=Q.escapeRune(n),n!==r&&(e+="-",e+=X.quoteIfHyphen(r),e+=Q.escapeRune(r))}e+="]";break;default:e+=this.op;break}return e}maxCap(){let e=0;if(this.op===X.Op.CAPTURE&&(e=this.cap),this.subs!==null)for(let t of this.subs){const n=t.maxCap();e<n&&(e=n)}return e}equals(e){if(!(e!==null&&e instanceof X)||this.op!==e.op)return!1;switch(this.op){case X.Op.END_TEXT:if((this.flags&x.WAS_DOLLAR)!==(e.flags&x.WAS_DOLLAR))return!1;break;case X.Op.LITERAL:case X.Op.CHAR_CLASS:if(this.runes===null&&e.runes===null)break;if(this.runes===null||e.runes===null||this.runes.length!==e.runes.length)return!1;for(let t=0;t<this.runes.length;t++)if(this.runes[t]!==e.runes[t])return!1;break;case X.Op.ALTERNATE:case X.Op.CONCAT:if(this.subs.length!==e.subs.length)return!1;for(let t=0;t<this.subs.length;++t)if(!this.subs[t].equals(e.subs[t]))return!1;break;case X.Op.STAR:case X.Op.PLUS:case X.Op.QUEST:if((this.flags&x.NON_GREEDY)!==(e.flags&x.NON_GREEDY)||!this.subs[0].equals(e.subs[0]))return!1;break;case X.Op.REPEAT:if((this.flags&x.NON_GREEDY)!==(e.flags&x.NON_GREEDY)||this.min!==e.min||this.max!==e.max||!this.subs[0].equals(e.subs[0]))return!1;break;case X.Op.CAPTURE:if(this.cap!==e.cap||(this.name===null?e.name!==null:this.name!==e.name)||!this.subs[0].equals(e.subs[0]))return!1;break;case X.Op.PLB:case X.Op.NLB:if(this.lb!==e.lb||!this.subs[0].equals(e.subs[0]))return!1;break}return!0}},df=class{constructor(s){this.next=[Object.create(null)],this.fail=[0],this.match=[!1];for(const t of s){let n=0;for(let r=0;r<t.length;r++){const i=t[r];i in this.next[n]||(this.next.push(Object.create(null)),this.fail.push(0),this.match.push(!1),this.next[n][i]=this.next.length-1),n=this.next[n][i]}this.match[n]=!0}const e=[];for(const t in this.next[0])if(Object.prototype.hasOwnProperty.call(this.next[0],t)){const n=this.next[0][t];this.fail[n]=0,e.push(n)}for(;e.length>0;){const t=e.shift();for(const n in this.next[t])if(Object.prototype.hasOwnProperty.call(this.next[t],n)){const r=this.next[t][n];let i=this.fail[t];for(;i!==0&&!(n in this.next[i]);)i=this.fail[i];n in this.next[i]?this.fail[r]=this.next[i][n]:this.fail[r]=0,this.match[r]=this.match[r]||this.match[this.fail[r]],e.push(r)}}}searchUTF16(s,e,t){let n=0;for(let r=e;r<t;r++){const i=s.charCodeAt(r);for(;n!==0&&!(i in this.next[n]);)n=this.fail[n];if(i in this.next[n]&&(n=this.next[n][i]),this.match[n])return!0}return!1}searchUTF8(s,e,t){let n=0;for(let r=e;r<t;r++){const i=s[r];for(;n!==0&&!(i in this.next[n]);)n=this.fail[n];if(i in this.next[n]&&(n=this.next[n][i]),this.match[n])return!0}return!1}},de=class li{static Type={NONE:0,EXACT:1,AND:2,OR:3};constructor(e){this.type=e,this.subs=[],this.str="",this.bytes=null,this.ac16=null,this.ac8=null}eval(e,t){switch(this.type){case li.Type.NONE:return!0;case li.Type.EXACT:return e.hasString(this,t);case li.Type.AND:for(let n=0;n<this.subs.length;n++)if(!this.subs[n].eval(e,t))return!1;return!0;case li.Type.OR:if(this.ac16&&this.ac8)return e.hasAnyString(this,t);for(let n=0;n<this.subs.length;n++)if(this.subs[n].eval(e,t))return!0;return!1;default:return!0}}},_y=class rn{static build(e){const t=rn.fromRegexp(e);return rn.simplify(t)}static fromRegexp(e){if(!e)return new de(de.Type.NONE);switch(e.op){case T.Op.PLB:case T.Op.NLB:case T.Op.NO_MATCH:case T.Op.EMPTY_MATCH:case T.Op.BEGIN_LINE:case T.Op.END_LINE:case T.Op.BEGIN_TEXT:case T.Op.END_TEXT:case T.Op.WORD_BOUNDARY:case T.Op.NO_WORD_BOUNDARY:case T.Op.CHAR_CLASS:case T.Op.ANY_CHAR_NOT_NL:case T.Op.ANY_CHAR:return new de(de.Type.NONE);case T.Op.LITERAL:{if(e.runes.length===0||(e.flags&x.FOLD_CASE)!==0)return new de(de.Type.NONE);const t=new de(de.Type.EXACT);let n="";for(let r=0;r<e.runes.length;r++)n+=String.fromCodePoint(e.runes[r]);return t.str=n,t.bytes=Q.stringToUtf8ByteArray(t.str),t}case T.Op.CAPTURE:case T.Op.PLUS:return rn.fromRegexp(e.subs[0]);case T.Op.REPEAT:return e.min>=1?rn.fromRegexp(e.subs[0]):new de(de.Type.NONE);case T.Op.CONCAT:{const t=new de(de.Type.AND);for(const n of e.subs)t.subs.push(rn.fromRegexp(n));return t}case T.Op.ALTERNATE:{const t=new de(de.Type.OR);for(const n of e.subs)t.subs.push(rn.fromRegexp(n));return t}default:return new de(de.Type.NONE)}}static simplify(e){if(e.type===de.Type.EXACT||e.type===de.Type.NONE)return e;if(e.type===de.Type.AND){const t=[];for(const n of e.subs){const r=rn.simplify(n);if(r.type!==de.Type.NONE)if(r.type===de.Type.AND)for(let i=0;i<r.subs.length;i++)t.push(r.subs[i]);else t.push(r)}return t.length===0?new de(de.Type.NONE):t.length===1?t[0]:(e.subs=t,e)}if(e.type===de.Type.OR){const t=[];for(const o of e.subs){const a=rn.simplify(o);if(a.type===de.Type.NONE)return new de(de.Type.NONE);if(a.type===de.Type.OR)for(let c=0;c<a.subs.length;c++)t.push(a.subs[c]);else t.push(a)}if(t.length===0)return new de(de.Type.NONE);if(t.length===1)return t[0];const n=new Set,r=[];for(const o of t)o.type===de.Type.EXACT?n.has(o.str)||(n.add(o.str),r.push(o)):r.push(o);e.subs=r;let i=!0;for(const o of r)if(o.type!==de.Type.EXACT){i=!1;break}return i&&r.length>1&&(e.ac16=new df(r.map(o=>{const a=[];for(let c=0;c<o.str.length;c++)a.push(o.str.charCodeAt(c));return a})),e.ac8=new df(r.map(o=>o.bytes))),e}return e}},Ot=class{constructor(s=0,e=0){this.head=s,this.tail=e}},Ey=class{constructor(){this.inst=[],this.start=0,this.numCap=2,this.lbStarts=[],this.numLb=0}getInst(s){return this.inst[s]}numInst(){return this.inst.length}addInst(s){this.inst.push(new F(s))}skipNop(s){let e=this.inst[s];for(;e.op===F.NOP||e.op===F.CAPTURE;)e=this.inst[s],s=e.out;return e}prefix(){let s="",e=this.skipNop(this.start);if(!F.isRuneOp(e.op)||e.runes.length!==1)return[e.op===F.MATCH,s];for(;F.isRuneOp(e.op)&&e.runes.length===1&&(e.arg&x.FOLD_CASE)===0;)s+=String.fromCodePoint(e.runes[0]),e=this.skipNop(e.out);return[e.op===F.MATCH,s]}startCond(){let s=0,e=this.start;e:for(;;){const t=this.inst[e];switch(t.op){case F.EMPTY_WIDTH:s|=t.arg;break;case F.FAIL:return-1;case F.CAPTURE:case F.NOP:break;default:break e}e=t.out}return s}patch(s,e){let t=s.head;for(;t!==0;){const n=this.inst[t>>1];(t&1)===0?(t=n.out,n.out=e):(t=n.arg,n.arg=e)}}append(s,e){if(s.head===0)return e;if(e.head===0)return s;const t=this.inst[s.tail>>1];return(s.tail&1)===0?t.out=e.head:t.arg=e.head,new Ot(s.head,e.tail)}toString(){let s="";for(let e=0;e<this.inst.length;e++){const t=s.length;s+=e,e===this.start&&(s+="*"),s+="        ".substring(s.length-t),s+=this.inst[e],s+=`
`}return s}},Jo=class{constructor(s=0,e=new Ot,t=!1){this.i=s,this.out=e,this.nullable=t}},Dy=class Qs{static ANY_RUNE_NOT_NL(){return[0,b.CODES.get(`
`)-1,b.CODES.get(`
`)+1,j.MAX_RUNE]}static ANY_RUNE(){return[0,j.MAX_RUNE]}static compileRegexp(e){const t=new Qs,n=t.compile(e);return t.prog.patch(n.out,t.newInst(F.MATCH).i),t.prog.start=n.i,t.prog}static compileSet(e){const t=new Qs;if(e.length===0)return t.prog.start=t.newInst(F.FAIL).i,t.prog;let n=[];for(let i=0;i<e.length;i++){const o=t.compile(e[i]),a=t.newInst(F.MATCH);t.prog.getInst(a.i).arg=i,t.prog.patch(o.out,a.i),n.push(o.i)}let r=n[0];for(let i=1;i<n.length;i++){const o=t.newInst(F.ALT),a=t.prog.getInst(o.i);a.out=r,a.arg=n[i],r=o.i}return t.prog.start=r,t.prog}constructor(){this.prog=new Ey,this.newInst(F.FAIL)}newInst(e){return this.prog.addInst(e),new Jo(this.prog.numInst()-1,new Ot,!0)}nop(){const e=this.newInst(F.NOP);return e.out=new Ot(e.i<<1,e.i<<1),e}fail(){return new Jo}cap(e){const t=this.newInst(F.CAPTURE);return t.out=new Ot(t.i<<1,t.i<<1),this.prog.getInst(t.i).arg=e,this.prog.numCap<e+1&&(this.prog.numCap=e+1),t}cat(e,t){return e.i===0||t.i===0?this.fail():(this.prog.patch(e.out,t.i),new Jo(e.i,t.out,e.nullable&&t.nullable))}alt(e,t){if(e.i===0)return t;if(t.i===0)return e;const n=this.newInst(F.ALT),r=this.prog.getInst(n.i);return r.out=e.i,r.arg=t.i,n.out=this.prog.append(e.out,t.out),n.nullable=e.nullable||t.nullable,n}loop(e,t){const n=this.newInst(F.ALT),r=this.prog.getInst(n.i);return t?(r.arg=e.i,n.out=new Ot(n.i<<1,n.i<<1)):(r.out=e.i,n.out=new Ot(n.i<<1|1,n.i<<1|1)),this.prog.patch(e.out,n.i),n}quest(e,t){const n=this.newInst(F.ALT),r=this.prog.getInst(n.i);return t?(r.arg=e.i,n.out=new Ot(n.i<<1,n.i<<1)):(r.out=e.i,n.out=new Ot(n.i<<1|1,n.i<<1|1)),n.out=this.prog.append(n.out,e.out),n}star(e,t){return e.nullable?this.quest(this.plus(e,t),t):this.loop(e,t)}plus(e,t){return new Jo(e.i,this.loop(e,t).out,e.nullable)}empty(e){const t=this.newInst(F.EMPTY_WIDTH);return this.prog.getInst(t.i).arg=e,t.out=new Ot(t.i<<1,t.i<<1),t}rune(e,t){const n=this.newInst(F.RUNE);n.nullable=!1;const r=this.prog.getInst(n.i);return r.runes=e,t&=x.FOLD_CASE,(e.length!==1||j.simpleFold(e[0])===e[0])&&(t&=-2),r.arg=t,n.out=new Ot(n.i<<1,n.i<<1),(t&x.FOLD_CASE)===0&&e.length===1||e.length===2&&e[0]===e[1]?r.op=F.RUNE1:e.length===2&&e[0]===0&&e[1]===j.MAX_RUNE?r.op=F.RUNE_ANY:e.length===4&&e[0]===0&&e[1]===b.CODES.get(`
`)-1&&e[2]===b.CODES.get(`
`)+1&&e[3]===j.MAX_RUNE&&(r.op=F.RUNE_ANY_NOT_NL),n}lookBehind(e,t){const n=this.newInst(F.LB_WRITE);this.prog.getInst(n.i).arg=t;const r=this.rune(Qs.ANY_RUNE(),0),i=this.star(r,!0),o=this.cat(i,e);this.prog.patch(o.out,n.i);const a=this.newInst(F.LB_CHECK);return this.prog.getInst(a.i).arg=t,this.prog.lbStarts.push(o.i),Math.abs(t)>this.prog.numLb&&(this.prog.numLb=Math.abs(t)),a.out=new Ot(a.i<<1,a.i<<1),a}compile(e){switch(e.op){case T.Op.NO_MATCH:return this.fail();case T.Op.EMPTY_MATCH:return this.nop();case T.Op.LITERAL:if(e.runes.length===0)return this.nop();{let t=null;for(let n of e.runes){const r=this.rune([n],e.flags);t=t===null?r:this.cat(t,r)}return t}case T.Op.CHAR_CLASS:return this.rune(e.runes,e.flags);case T.Op.ANY_CHAR_NOT_NL:return this.rune(Qs.ANY_RUNE_NOT_NL(),0);case T.Op.ANY_CHAR:return this.rune(Qs.ANY_RUNE(),0);case T.Op.BEGIN_LINE:return this.empty(Q.EMPTY_BEGIN_LINE);case T.Op.END_LINE:return this.empty(Q.EMPTY_END_LINE);case T.Op.BEGIN_TEXT:return this.empty(Q.EMPTY_BEGIN_TEXT);case T.Op.END_TEXT:return this.empty(Q.EMPTY_END_TEXT);case T.Op.WORD_BOUNDARY:return this.empty(Q.EMPTY_WORD_BOUNDARY);case T.Op.NO_WORD_BOUNDARY:return this.empty(Q.EMPTY_NO_WORD_BOUNDARY);case T.Op.PLB:case T.Op.NLB:return this.lookBehind(this.compile(e.subs[0]),e.lb);case T.Op.CAPTURE:{const t=this.cap(e.cap<<1),n=this.compile(e.subs[0]),r=this.cap(e.cap<<1|1);return this.cat(this.cat(t,n),r)}case T.Op.STAR:return this.star(this.compile(e.subs[0]),(e.flags&x.NON_GREEDY)!==0);case T.Op.PLUS:return this.plus(this.compile(e.subs[0]),(e.flags&x.NON_GREEDY)!==0);case T.Op.QUEST:return this.quest(this.compile(e.subs[0]),(e.flags&x.NON_GREEDY)!==0);case T.Op.CONCAT:if(e.subs.length===0)return this.nop();{let t=null;for(let n of e.subs){const r=this.compile(n);t=t===null?r:this.cat(t,r)}return t}case T.Op.ALTERNATE:if(e.subs.length===0)return this.nop();{let t=null;for(let n of e.subs){const r=this.compile(n);t=t===null?r:this.alt(t,r)}return t}default:throw new ry("regexp: unhandled case in compile")}}},yy=class Tt{static simplify(e){if(e===null)return null;switch(e.op){case T.Op.PLB:case T.Op.NLB:case T.Op.CAPTURE:{const t=Tt.simplify(e.subs[0]);if(t!==e.subs[0]){const n=T.fromRegexp(e);return n.runes=[],n.subs=[t],n}return e}case T.Op.CONCAT:case T.Op.ALTERNATE:{const t=[];let n=!1;for(let r=0;r<e.subs.length;r++){const i=e.subs[r],o=Tt.simplify(i);if(o!==i&&(n=!0),e.op===T.Op.CONCAT){if(o.op===T.Op.NO_MATCH)return new T(T.Op.NO_MATCH);if(o.op===T.Op.EMPTY_MATCH){n=!0;continue}if(o.op===T.Op.CONCAT){n=!0;for(let a=0;a<o.subs.length;a++)t.push(o.subs[a]);continue}}else if(e.op===T.Op.ALTERNATE){if(o.op===T.Op.NO_MATCH){n=!0;continue}if(o.op===T.Op.ALTERNATE){n=!0;for(let a=0;a<o.subs.length;a++)t.push(o.subs[a]);continue}}t.push(o)}if(n){if(t.length===0)return new T(e.op===T.Op.CONCAT?T.Op.EMPTY_MATCH:T.Op.NO_MATCH);if(t.length===1)return t[0];const r=T.fromRegexp(e);return r.runes=[],r.subs=t,r}return e}case T.Op.CHAR_CLASS:return e.runes===null?e:e.runes.length===0?new T(T.Op.NO_MATCH):e.runes.length===2&&e.runes[0]===0&&e.runes[1]===j.MAX_RUNE?new T(T.Op.ANY_CHAR):e.runes.length===4&&e.runes[0]===0&&e.runes[1]===b.CODES.get(`
`)-1&&e.runes[2]===b.CODES.get(`
`)+1&&e.runes[3]===j.MAX_RUNE?new T(T.Op.ANY_CHAR_NOT_NL):e;case T.Op.STAR:case T.Op.PLUS:case T.Op.QUEST:{const t=Tt.simplify(e.subs[0]);return Tt.simplify1(e.op,e.flags,t,e)}case T.Op.REPEAT:{if(e.min===0&&e.max===0)return new T(T.Op.EMPTY_MATCH);const t=Tt.simplify(e.subs[0]);if(e.max===-1){if(e.min===0)return Tt.simplify1(T.Op.STAR,e.flags,t,null);if(e.min===1)return Tt.simplify1(T.Op.PLUS,e.flags,t,null);const r=new T(T.Op.CONCAT),i=[];for(let o=0;o<e.min-1;o++)i.push(t);return i.push(Tt.simplify1(T.Op.PLUS,e.flags,t,null)),r.subs=i.slice(0),Tt.simplify(r)}if(e.min===1&&e.max===1)return t;let n=null;if(e.min>0){n=[];for(let r=0;r<e.min;r++)n.push(t)}if(e.max>e.min){let r=Tt.simplify1(T.Op.QUEST,e.flags,t,null);for(let i=e.min+1;i<e.max;i++){const o=new T(T.Op.CONCAT);o.subs=[t,r],r=Tt.simplify1(T.Op.QUEST,e.flags,o,null)}if(n===null)return r;n.push(r)}if(n!==null){const r=new T(T.Op.CONCAT);return r.subs=n.slice(0),Tt.simplify(r)}return new T(T.Op.NO_MATCH)}}return e}static simplify1(e,t,n,r){if(n.op===T.Op.EMPTY_MATCH)return n;if(n.op===T.Op.NO_MATCH)return e===T.Op.PLUS?n:new T(T.Op.EMPTY_MATCH);if(e===n.op&&(t&x.NON_GREEDY)===(n.flags&x.NON_GREEDY))return n;if(r!==null&&r.op===e&&(r.flags&x.NON_GREEDY)===(t&x.NON_GREEDY)&&n===r.subs[0])return r;const i=new T(e);return i.flags=t,i.subs=[n],i}},fe=class{constructor(s,e){this.sign=s,this.cls=e}};const Cf=[48,57],pf=[9,10,12,13,32,32],gf=[48,57,65,90,95,95,97,122],mf=new Map([["\\d",new fe(1,Cf)],["\\D",new fe(-1,Cf)],["\\s",new fe(1,pf)],["\\S",new fe(-1,pf)],["\\w",new fe(1,gf)],["\\W",new fe(-1,gf)]]),_f=[48,57,65,90,97,122],Ef=[65,90,97,122],Df=[0,127],yf=[9,9,32,32],If=[0,31,127,127],wf=[48,57],Tf=[33,126],vf=[97,122],Af=[32,126],Rf=[33,47,58,64,91,96,123,126],Sf=[9,13,32,32],Pf=[65,90],Nf=[48,57,65,90,95,95,97,122],bf=[48,57,65,70,97,102],Of=new Map([["[:alnum:]",new fe(1,_f)],["[:^alnum:]",new fe(-1,_f)],["[:alpha:]",new fe(1,Ef)],["[:^alpha:]",new fe(-1,Ef)],["[:ascii:]",new fe(1,Df)],["[:^ascii:]",new fe(-1,Df)],["[:blank:]",new fe(1,yf)],["[:^blank:]",new fe(-1,yf)],["[:cntrl:]",new fe(1,If)],["[:^cntrl:]",new fe(-1,If)],["[:digit:]",new fe(1,wf)],["[:^digit:]",new fe(-1,wf)],["[:graph:]",new fe(1,Tf)],["[:^graph:]",new fe(-1,Tf)],["[:lower:]",new fe(1,vf)],["[:^lower:]",new fe(-1,vf)],["[:print:]",new fe(1,Af)],["[:^print:]",new fe(-1,Af)],["[:punct:]",new fe(1,Rf)],["[:^punct:]",new fe(-1,Rf)],["[:space:]",new fe(1,Sf)],["[:^space:]",new fe(-1,Sf)],["[:upper:]",new fe(1,Pf)],["[:^upper:]",new fe(-1,Pf)],["[:word:]",new fe(1,Nf)],["[:^word:]",new fe(-1,Nf)],["[:xdigit:]",new fe(1,bf)],["[:^xdigit:]",new fe(-1,bf)]]);var Pn=class bn{static charClassToString(e,t){let n="[";for(let r=0;r<t;r+=2){r>0&&(n+=" ");const i=e[r],o=e[r+1];i===o?n+=`0x${i.toString(16)}`:n+=`0x${i.toString(16)}-0x${o.toString(16)}`}return n+="]",n}static cmp(e,t,n,r){const i=e[t]-n;return i!==0?i:r-e[t+1]}static qsortIntPair(e,t,n){const r=((t+n)/2|0)&-2,i=e[r],o=e[r+1];let a=t,c=n;for(;a<=c;){for(;a<n&&bn.cmp(e,a,i,o)<0;)a+=2;for(;c>t&&bn.cmp(e,c,i,o)>0;)c-=2;if(a<=c){if(a!==c){let B=e[a];e[a]=e[c],e[c]=B,B=e[a+1],e[a+1]=e[c+1],e[c+1]=B}a+=2,c-=2}}t<c&&bn.qsortIntPair(e,t,c),a<n&&bn.qsortIntPair(e,a,n)}constructor(e=Q.emptyInts()){this.r=e,this.len=e.length}toArray(){return this.len===this.r.length?this.r:this.r.slice(0,this.len)}cleanClass(){if(this.len<4)return this;bn.qsortIntPair(this.r,0,this.len-2);let e=2;for(let t=2;t<this.len;t+=2){const n=this.r[t],r=this.r[t+1];if(n<=this.r[e-1]+1){r>this.r[e-1]&&(this.r[e-1]=r);continue}this.r[e]=n,this.r[e+1]=r,e+=2}return this.len=e,this}appendLiteral(e,t){return(t&x.FOLD_CASE)!==0?this.appendFoldedRange(e,e):this.appendRange(e,e)}appendRange(e,t){if(this.len>0){for(let n=2;n<=4;n+=2)if(this.len>=n){const r=this.r[this.len-n],i=this.r[this.len-n+1];if(e<=i+1&&r<=t+1)return e<r&&(this.r[this.len-n]=e),t>i&&(this.r[this.len-n+1]=t),this}}return this.r[this.len++]=e,this.r[this.len++]=t,this}appendFoldedRange(e,t){if(e<=j.MIN_FOLD&&t>=j.MAX_FOLD)return this.appendRange(e,t);if(t<j.MIN_FOLD||e>j.MAX_FOLD)return this.appendRange(e,t);e<j.MIN_FOLD&&(this.appendRange(e,j.MIN_FOLD-1),e=j.MIN_FOLD),t>j.MAX_FOLD&&(this.appendRange(j.MAX_FOLD+1,t),t=j.MAX_FOLD);for(let n=e;n<=t;n++){this.appendRange(n,n);for(let r=j.simpleFold(n);r!==n;r=j.simpleFold(r))this.appendRange(r,r)}return this}appendClass(e){for(let t=0;t<e.length;t+=2)this.appendRange(e[t],e[t+1]);return this}appendFoldedClass(e){for(let t=0;t<e.length;t+=2)this.appendFoldedRange(e[t],e[t+1]);return this}appendNegatedClass(e){let t=0;for(let n=0;n<e.length;n+=2){const r=e[n],i=e[n+1];t<=r-1&&this.appendRange(t,r-1),t=i+1}return t<=j.MAX_RUNE&&this.appendRange(t,j.MAX_RUNE),this}appendTable(e){for(let t=0;t<e.length;++t){const n=e.getLo(t),r=e.getHi(t),i=e.getStride(t);if(i===1){this.appendRange(n,r);continue}for(let o=n;o<=r;o+=i)this.appendRange(o,o)}return this}appendNegatedTable(e){let t=0;for(let n=0;n<e.length;++n){const r=e.getLo(n),i=e.getHi(n),o=e.getStride(n);if(o===1){t<=r-1&&this.appendRange(t,r-1),t=i+1;continue}for(let a=r;a<=i;a+=o)t<=a-1&&this.appendRange(t,a-1),t=a+1}return t<=j.MAX_RUNE&&this.appendRange(t,j.MAX_RUNE),this}appendTableWithSign(e,t){return t<0?this.appendNegatedTable(e):this.appendTable(e)}negateClass(){let e=0,t=0;for(let n=0;n<this.len;n+=2){const r=this.r[n],i=this.r[n+1];e<=r-1&&(this.r[t]=e,this.r[t+1]=r-1,t+=2),e=i+1}return this.len=t,e<=j.MAX_RUNE&&(this.r[this.len++]=e,this.r[this.len++]=j.MAX_RUNE),this}appendClassWithSign(e,t){return t<0?this.appendNegatedClass(e):this.appendClass(e)}appendGroup(e,t){let n=e.cls;return t&&(n=new bn().appendFoldedClass(n).cleanClass().toArray()),this.appendClassWithSign(n,e.sign)}toString(){return bn.charClassToString(this.r,this.len)}},Iy=class{constructor(s){this.str=s,this.position=0}pos(){return this.position}rewindTo(s){this.position=s}more(){return this.position<this.str.length}peek(){return this.str.codePointAt(this.position)}skip(s){this.position+=s}skipString(s){this.position+=s.length}pop(){const s=this.str.codePointAt(this.position);return this.position+=Q.charCount(s),s}lookingAt(s){return this.str.startsWith(s,this.position)}rest(){return this.str.substring(this.position)}from(s){return this.str.substring(s,this.position)}toString(){return this.rest()}},wy=class W{static ERR_INTERNAL_ERROR="regexp/syntax: internal error";static ERR_INVALID_CHAR_RANGE="invalid character class range";static ERR_INVALID_ESCAPE="invalid escape sequence";static ERR_INVALID_NAMED_CAPTURE="invalid named capture";static ERR_INVALID_PERL_OP="invalid or unsupported Perl syntax";static ERR_INVALID_REPEAT_OP="invalid nested repetition operator";static ERR_INVALID_REPEAT_SIZE="invalid repeat count";static ERR_MISSING_BRACKET="missing closing ]";static ERR_MISSING_PAREN="missing closing )";static ERR_MISSING_REPEAT_ARGUMENT="missing argument to repetition operator";static ERR_TRAILING_BACKSLASH="trailing backslash at end of expression";static ERR_DUPLICATE_NAMED_CAPTURE="duplicate capture group name";static ERR_UNEXPECTED_PAREN="unexpected )";static ERR_NESTING_DEPTH="expression nests too deeply";static ERR_LARGE="expression too large";static ERR_INVALID_CAPTURE_IN_LOOKBEHIND="invalid capture in lookbehind";static MAX_HEIGHT=1e3;static MAX_SIZE=3355443;static MAX_RUNES=33554432;static ANY_TABLE=new g(new Uint32Array([0,j.MAX_RUNE,1]));static ASCII_TABLE=new g(new Uint32Array([0,127,1]));static ASCII_FOLD_TABLE=new g(new Uint32Array([0,127,1,383,383,1,8490,8490,1]));static unicodeTable(e){return e==="Any"?{tab:W.ANY_TABLE,fold:W.ANY_TABLE,sign:1}:e==="Ascii"?{tab:W.ASCII_TABLE,fold:W.ASCII_FOLD_TABLE,sign:1}:e==="Assigned"?{tab:Bt.CATEGORIES.get("Cn"),fold:Bt.CATEGORIES.get("Cn"),sign:-1}:e==="Lc"?{tab:Bt.CATEGORIES.get("LC"),fold:Bt.FOLD_CATEGORIES.get("LC"),sign:1}:Bt.CATEGORIES.has(e)?{tab:Bt.CATEGORIES.get(e),fold:Bt.FOLD_CATEGORIES.get(e),sign:1}:Bt.SCRIPTS.has(e)?{tab:Bt.SCRIPTS.get(e),fold:Bt.FOLD_SCRIPT.get(e),sign:1}:null}static minFoldRune(e){if(e<j.MIN_FOLD||e>j.MAX_FOLD)return e;let t=e;const n=e;for(e=j.simpleFold(e);e!==n;e=j.simpleFold(e))t>e&&(t=e);return t}static leadingRegexp(e){if(e.op===T.Op.EMPTY_MATCH)return null;if(e.op===T.Op.CONCAT&&e.subs.length>0){const t=e.subs[0];return t.op===T.Op.EMPTY_MATCH?null:t}return e}static literalRegexp(e,t){const n=new T(T.Op.LITERAL);return n.flags=t,n.runes=Q.stringToRunes(e),n}static parse(e,t){return new W(e,t).parseInternal()}static parseRepeat(e){const t=e.pos();if(!e.more()||!e.lookingAt("{"))return-1;e.skip(1);const n=W.parseInt(e);if(n===-1||!e.more())return-1;let r;if(!e.lookingAt(","))r=n;else{if(e.skip(1),!e.more())return-1;if(e.lookingAt("}"))r=-1;else if((r=W.parseInt(e))===-1)return-1}if(!e.more()||!e.lookingAt("}"))return-1;if(e.skip(1),n<0||n>1e3||r===-2||r>1e3||r>=0&&n>r)throw new Ee(W.ERR_INVALID_REPEAT_SIZE,e.from(t));return n<<16|r&j.MAX_BMP}static isValidCaptureName(e){if(e.length===0)return!1;for(let t=0;t<e.length;t++){const n=e.codePointAt(t);if(n!==b.CODES.get("_")&&!Q.isalnum(n))return!1}return!0}static parseInt(e){const t=e.pos();for(;e.more()&&e.peek()>=b.CODES.get("0")&&e.peek()<=b.CODES.get("9");)e.skip(1);const n=e.from(t);return n.length===0||n.length>1&&n.codePointAt(0)===b.CODES.get("0")?-1:n.length>8?-2:parseInt(n,10)}static isCharClass(e){return e.op===T.Op.LITERAL&&e.runes.length===1||e.op===T.Op.CHAR_CLASS||e.op===T.Op.ANY_CHAR_NOT_NL||e.op===T.Op.ANY_CHAR}static matchRune(e,t){switch(e.op){case T.Op.LITERAL:return e.runes.length===1&&e.runes[0]===t;case T.Op.CHAR_CLASS:for(let n=0;n<e.runes.length;n+=2)if(e.runes[n]<=t&&t<=e.runes[n+1])return!0;return!1;case T.Op.ANY_CHAR_NOT_NL:return t!==b.CODES.get(`
`);case T.Op.ANY_CHAR:return!0}return!1}static mergeCharClass(e,t){switch(e.op){case T.Op.ANY_CHAR:break;case T.Op.ANY_CHAR_NOT_NL:W.matchRune(t,b.CODES.get(`
`))&&(e.op=T.Op.ANY_CHAR);break;case T.Op.CHAR_CLASS:t.op===T.Op.LITERAL?e.runes=new Pn(e.runes).appendLiteral(t.runes[0],t.flags).toArray():e.runes=new Pn(e.runes).appendClass(t.runes).toArray();break;case T.Op.LITERAL:if(t.runes[0]===e.runes[0]&&t.flags===e.flags)break;e.op=T.Op.CHAR_CLASS,e.runes=new Pn().appendLiteral(e.runes[0],e.flags).appendLiteral(t.runes[0],t.flags).toArray();break}}static parseEscape(e){const t=e.pos();if(e.skip(1),!e.more())throw new Ee(W.ERR_TRAILING_BACKSLASH);let n=e.pop();e:switch(n){case b.CODES.get("1"):case b.CODES.get("2"):case b.CODES.get("3"):case b.CODES.get("4"):case b.CODES.get("5"):case b.CODES.get("6"):case b.CODES.get("7"):if(!e.more()||e.peek()<b.CODES.get("0")||e.peek()>b.CODES.get("7"))break;case b.CODES.get("0"):{let r=n-b.CODES.get("0");for(let i=1;i<3&&!(!e.more()||e.peek()<b.CODES.get("0")||e.peek()>b.CODES.get("7"));i++)r=r*8+e.peek()-b.CODES.get("0"),e.skip(1);return r}case b.CODES.get("x"):{if(!e.more())break;if(n=e.pop(),n===b.CODES.get("{")){let o=0,a=0;for(;;){if(!e.more())break e;if(n=e.pop(),n===b.CODES.get("}"))break;const c=Q.unhex(n);if(c<0||(a=a*16+c,a>j.MAX_RUNE))break e;o++}if(o===0)break e;return a}const r=Q.unhex(n);if(!e.more())break;n=e.pop();const i=Q.unhex(n);if(r<0||i<0)break;return r*16+i}case b.CODES.get("a"):return b.CODES.get("\x07");case b.CODES.get("f"):return b.CODES.get("\f");case b.CODES.get("n"):return b.CODES.get(`
`);case b.CODES.get("r"):return b.CODES.get("\r");case b.CODES.get("t"):return b.CODES.get("	");case b.CODES.get("v"):return b.CODES.get("\v");default:if(n<=j.MAX_ASCII&&!Q.isalnum(n))return n;break}throw new Ee(W.ERR_INVALID_ESCAPE,e.from(t))}static parseClassChar(e,t){if(!e.more())throw new Ee(W.ERR_MISSING_BRACKET,e.from(t));return e.lookingAt("\\")?W.parseEscape(e):e.pop()}static concatRunes(e,t){for(let n=0;n<t.length;n++)e.push(t[n]);return e}static hasCapture(e){if(e===null)return!1;if(e.op===T.Op.CAPTURE)return!0;if(e.subs){for(let t of e.subs)if(W.hasCapture(t))return!0}return!1}constructor(e,t=0){this.wholeRegexp=e,this.flags=t,this.numCap=0,this.namedGroups=Object.create(null),this.stack=[],this.free=null,this.numRegexp=0,this.numRunes=0,this.repeats=0,this.height=null,this.size=null,this.nlb=0}newRegexp(e){let t=this.free;return t!==null&&t.subs!==null&&t.subs.length>0?(this.free=t.subs[0],t.reinit(),t.op=e):(t=new T(e),this.numRegexp+=1),t}reuse(e){this.height!==null&&this.height.has(e)&&this.height.delete(e),e.subs!==null&&e.subs.length>0&&(e.subs[0]=this.free),this.free=e}checkLimits(e){if(this.numRunes>W.MAX_RUNES)throw new Ee(W.ERR_LARGE);this.checkSize(e),this.checkHeight(e)}checkSize(e){if(this.size===null){if(this.repeats===0&&(this.repeats=1),e.op===T.Op.REPEAT){let t=e.max;t===-1&&(t=e.min),t<=0&&(t=1),t>Math.floor(W.MAX_SIZE/this.repeats)?this.repeats=W.MAX_SIZE:this.repeats*=t}if(this.numRegexp<Math.floor(W.MAX_SIZE/this.repeats))return;this.size=new Map;for(let t of this.stack)this.checkSize(t)}if(this.calcSize(e,!0)>W.MAX_SIZE)throw new Ee(W.ERR_LARGE)}calcSize(e,t=!1){if(!t&&this.size!==null&&this.size.has(e))return this.size.get(e);let n=0;switch(e.op){case T.Op.LITERAL:n=e.runes.length;break;case T.Op.PLB:case T.Op.NLB:case T.Op.CAPTURE:case T.Op.STAR:n=2+this.calcSize(e.subs[0]);break;case T.Op.PLUS:case T.Op.QUEST:n=1+this.calcSize(e.subs[0]);break;case T.Op.CONCAT:for(let r of e.subs)n=n+this.calcSize(r);break;case T.Op.ALTERNATE:for(let r of e.subs)n=n+this.calcSize(r);e.subs.length>1&&(n=n+e.subs.length-1);break;case T.Op.REPEAT:{let r=this.calcSize(e.subs[0]);if(e.max===-1){e.min===0?n=2+r:n=1+e.min*r;break}n=e.max*r+(e.max-e.min);break}}return n=Math.max(1,n),this.size===null&&(this.size=new Map),this.size.set(e,n),n}checkHeight(e){if(!(this.numRegexp<W.MAX_HEIGHT)){if(this.height===null){this.height=new Map;for(let t of this.stack)this.checkHeight(t)}if(this.calcHeight(e,!0)>W.MAX_HEIGHT)throw new Ee(W.ERR_NESTING_DEPTH)}}calcHeight(e,t=!1){if(!t&&this.height!==null&&this.height.has(e))return this.height.get(e);let n=1;for(let r of e.subs){const i=this.calcHeight(r);n<1+i&&(n=1+i)}return this.height===null&&(this.height=new Map),this.height.set(e,n),n}pop(){return this.stack.pop()}popToPseudo(){const e=this.stack.length;let t=e;for(;t>0&&!T.isPseudoOp(this.stack[t-1].op);)t--;const n=this.stack.slice(t,e);return this.stack=this.stack.slice(0,t),n}push(e){if(this.numRunes+=e.runes.length,e.op===T.Op.CHAR_CLASS&&e.runes.length===2&&e.runes[0]===e.runes[1]){if(this.maybeConcat(e.runes[0],this.flags&-2))return null;e.op=T.Op.LITERAL,e.runes=[e.runes[0]],e.flags=this.flags&-2}else if(e.op===T.Op.CHAR_CLASS&&e.runes.length===4&&e.runes[0]===e.runes[1]&&e.runes[2]===e.runes[3]&&j.simpleFold(e.runes[0])===e.runes[2]&&j.simpleFold(e.runes[2])===e.runes[0]||e.op===T.Op.CHAR_CLASS&&e.runes.length===2&&e.runes[0]+1===e.runes[1]&&j.simpleFold(e.runes[0])===e.runes[1]&&j.simpleFold(e.runes[1])===e.runes[0]){if(this.maybeConcat(e.runes[0],this.flags|x.FOLD_CASE))return null;e.op=T.Op.LITERAL,e.runes=[e.runes[0]],e.flags=this.flags|x.FOLD_CASE}else this.maybeConcat(-1,0);return this.stack.push(e),this.checkLimits(e),e}maybeConcat(e,t){const n=this.stack.length;if(n<2)return!1;const r=this.stack[n-1],i=this.stack[n-2];return r.op!==T.Op.LITERAL||i.op!==T.Op.LITERAL||(r.flags&x.FOLD_CASE)!==(i.flags&x.FOLD_CASE)?!1:(i.runes=W.concatRunes(i.runes,r.runes),e>=0?(r.runes=[e],r.flags=t,!0):(this.pop(),this.reuse(r),!1))}newLiteral(e,t){const n=this.newRegexp(T.Op.LITERAL);return n.flags=t,(t&x.FOLD_CASE)!==0&&(e=W.minFoldRune(e)),n.runes=[e],n}literal(e){this.push(this.newLiteral(e,this.flags))}op(e){const t=this.newRegexp(e);return t.flags=this.flags,this.push(t)}repeat(e,t,n,r,i,o){let a=this.flags;if((a&x.PERL_X)!==0&&(i.more()&&i.lookingAt("?")&&(i.skip(1),a^=x.NON_GREEDY),o!==-1))throw new Ee(W.ERR_INVALID_REPEAT_OP,i.from(o));const c=this.stack.length;if(c===0)throw new Ee(W.ERR_MISSING_REPEAT_ARGUMENT,i.from(r));const B=this.stack[c-1];if(T.isPseudoOp(B.op))throw new Ee(W.ERR_MISSING_REPEAT_ARGUMENT,i.from(r));const h=this.newRegexp(e);if(h.min=t,h.max=n,h.flags=a,h.subs=[B],this.stack[c-1]=h,this.checkLimits(h),e===T.Op.REPEAT&&(t>=2||n>=2)&&!this.repeatIsValid(h,1e3))throw new Ee(W.ERR_INVALID_REPEAT_SIZE,i.from(r))}repeatIsValid(e,t){if(e.op===T.Op.REPEAT){let n=e.max;if(n===0)return!0;if(n<0&&(n=e.min),n>t)return!1;n>0&&(t=Math.trunc(t/n))}for(let n of e.subs)if(!this.repeatIsValid(n,t))return!1;return!0}concat(){this.maybeConcat(-1,0);const e=this.popToPseudo();return e.length===0?this.push(this.newRegexp(T.Op.EMPTY_MATCH)):this.push(this.collapse(e,T.Op.CONCAT))}alternate(){const e=this.popToPseudo();return e.length>0&&this.cleanAlt(e[e.length-1]),e.length===0?this.push(this.newRegexp(T.Op.NO_MATCH)):this.push(this.collapse(e,T.Op.ALTERNATE))}cleanAlt(e){e.op===T.Op.CHAR_CLASS&&(e.runes=new Pn(e.runes).cleanClass().toArray(),e.runes.length===2&&e.runes[0]===0&&e.runes[1]===j.MAX_RUNE?(e.runes=[],e.op=T.Op.ANY_CHAR):e.runes.length===4&&e.runes[0]===0&&e.runes[1]===b.CODES.get(`
`)-1&&e.runes[2]===b.CODES.get(`
`)+1&&e.runes[3]===j.MAX_RUNE&&(e.runes=[],e.op=T.Op.ANY_CHAR_NOT_NL))}collapse(e,t){if(e.length===1)return e[0];let n=0;for(let a of e)n+=a.op===t?a.subs.length:1;let r=new Array(n).fill(null),i=0;for(let a of e)if(a.op===t){for(let c=0;c<a.subs.length;c++)r[i++]=a.subs[c];this.reuse(a)}else r[i++]=a;let o=this.newRegexp(t);if(o.subs=r,t===T.Op.ALTERNATE&&(o.subs=this.factor(o.subs),o.subs.length===1)){const a=o;o=o.subs[0],this.reuse(a)}return o}factor(e){if(e.length<2)return e;let t=0,n=e.length,r=0,i=null,o=0,a=0,c=0;for(let h=0;h<=n;h++){let f=null,C=0,_=0;if(h<n){let I=e[t+h];if(I.op===T.Op.CONCAT&&I.subs.length>0&&(I=I.subs[0]),I.op===T.Op.LITERAL&&(f=I.runes,C=I.runes.length,_=I.flags&x.FOLD_CASE),_===a){let O=0;for(;O<o&&O<C&&i[O]===f[O];)O++;if(O>0){o=O;continue}}}if(h!==c)if(h===c+1)e[r++]=e[t+c];else{const I=this.newRegexp(T.Op.LITERAL);I.flags=a,I.runes=i.slice(0,o);for(let q=c;q<h;q++)e[t+q]=this.removeLeadingString(e[t+q],o),this.checkLimits(e[t+q]);const O=this.collapse(e.slice(t+c,t+h),T.Op.ALTERNATE),V=this.newRegexp(T.Op.CONCAT);V.subs=[I,O],e[r++]=V}c=h,i=f,o=C,a=_}n=r,t=0,c=0,r=0;let B=null;for(let h=0;h<=n;h++){let f=null;if(!(h<n&&(f=W.leadingRegexp(e[t+h]),B!==null&&B.equals(f)&&(W.isCharClass(B)||B.op===T.Op.REPEAT&&B.min===B.max&&W.isCharClass(B.subs[0]))))){if(h!==c)if(h===c+1)e[r++]=e[t+c];else{const C=B;for(let O=c;O<h;O++){const V=O!==c;e[t+O]=this.removeLeadingRegexp(e[t+O],V),this.checkLimits(e[t+O])}const _=this.collapse(e.slice(t+c,t+h),T.Op.ALTERNATE),I=this.newRegexp(T.Op.CONCAT);I.subs=[C,_],e[r++]=I}c=h,B=f}}n=r,t=0,c=0,r=0;for(let h=0;h<=n;h++)if(!(h<n&&W.isCharClass(e[t+h]))){if(h!==c)if(h===c+1)e[r++]=e[t+c];else{let f=c;for(let _=c+1;_<h;_++){const I=e[t+f],O=e[t+_];(I.op<O.op||I.op===O.op&&(I.runes!==null?I.runes.length:0)<(O.runes!==null?O.runes.length:0))&&(f=_)}const C=e[t+c];e[t+c]=e[t+f],e[t+f]=C;for(let _=c+1;_<h;_++)W.mergeCharClass(e[t+c],e[t+_]),this.reuse(e[t+_]);this.cleanAlt(e[t+c]),e[r++]=e[t+c]}h<n&&(e[r++]=e[t+h]),c=h+1}n=r,t=0,c=0,r=0;for(let h=0;h<n;++h)h+1<n&&e[t+h].op===T.Op.EMPTY_MATCH&&e[t+h+1].op===T.Op.EMPTY_MATCH||(e[r++]=e[t+h]);return n=r,t=0,e.slice(t,n)}removeLeadingString(e,t){if(e.op===T.Op.CONCAT&&e.subs.length>0){const n=this.removeLeadingString(e.subs[0],t);if(e.subs[0]=n,n.op===T.Op.EMPTY_MATCH)switch(this.reuse(n),e.subs.length){case 0:case 1:e.op=T.Op.EMPTY_MATCH,e.subs=T.emptySubs();break;case 2:{const r=e;e=e.subs[1],this.reuse(r);break}default:e.subs=e.subs.slice(1,e.subs.length);break}return e}return e.op===T.Op.LITERAL&&(e.runes=e.runes.slice(t,e.runes.length),e.runes.length===0&&(e.op=T.Op.EMPTY_MATCH)),e}removeLeadingRegexp(e,t){if(e.op===T.Op.CONCAT&&e.subs.length>0){switch(t&&this.reuse(e.subs[0]),e.subs=e.subs.slice(1,e.subs.length),e.subs.length){case 0:e.op=T.Op.EMPTY_MATCH,e.subs=T.emptySubs();break;case 1:{const n=e;e=e.subs[0],this.reuse(n);break}}return e}return t&&this.reuse(e),this.newRegexp(T.Op.EMPTY_MATCH)}parseInternal(){if((this.flags&x.LITERAL)!==0)return W.literalRegexp(this.wholeRegexp,this.flags);let e=-1,t=-1,n=-1;const r=new Iy(this.wholeRegexp);for(;r.more();){let i=-1;e:switch(r.peek()){case b.CODES.get("("):if((this.flags&x.LOOKBEHIND)!==0){if(r.lookingAt("(?<=")){this.parsePosLookBehind(),r.skip(4);break}if(r.lookingAt("(?<!")){this.parseNegLookBehind(),r.skip(4);break}}if((this.flags&x.PERL_X)!==0&&r.lookingAt("(?")){this.parsePerlFlags(r);break}this.op(T.Op.LEFT_PAREN).cap=++this.numCap,r.skip(1);break;case b.CODES.get("|"):this.parseVerticalBar(),r.skip(1);break;case b.CODES.get(")"):this.parseRightParen(),r.skip(1);break;case b.CODES.get("^"):(this.flags&x.ONE_LINE)!==0?this.op(T.Op.BEGIN_TEXT):this.op(T.Op.BEGIN_LINE),r.skip(1);break;case b.CODES.get("$"):(this.flags&x.ONE_LINE)!==0?this.op(T.Op.END_TEXT).flags|=x.WAS_DOLLAR:this.op(T.Op.END_LINE),r.skip(1);break;case b.CODES.get("."):(this.flags&x.DOT_NL)!==0?this.op(T.Op.ANY_CHAR):this.op(T.Op.ANY_CHAR_NOT_NL),r.skip(1);break;case b.CODES.get("["):this.parseClass(r);break;case b.CODES.get("*"):case b.CODES.get("+"):case b.CODES.get("?"):{i=r.pos();let o=null;switch(r.pop()){case b.CODES.get("*"):o=T.Op.STAR;break;case b.CODES.get("+"):o=T.Op.PLUS;break;case b.CODES.get("?"):o=T.Op.QUEST;break}this.repeat(o,t,n,i,r,e);break}case b.CODES.get("{"):{i=r.pos();const o=W.parseRepeat(r);if(o<0){r.rewindTo(i),this.literal(r.pop());break}t=o>>16,n=(o&j.MAX_BMP)<<16>>16,this.repeat(T.Op.REPEAT,t,n,i,r,e);break}case b.CODES.get("\\"):{const o=r.pos();if(r.skip(1),(this.flags&x.PERL_X)!==0&&r.more())switch(r.pop()){case b.CODES.get("A"):this.op(T.Op.BEGIN_TEXT);break e;case b.CODES.get("b"):this.op(T.Op.WORD_BOUNDARY);break e;case b.CODES.get("B"):this.op(T.Op.NO_WORD_BOUNDARY);break e;case b.CODES.get("C"):throw new Ee(W.ERR_INVALID_ESCAPE,"\\C");case b.CODES.get("Q"):{let B=r.rest();const h=B.indexOf("\\E");h>=0?(B=B.substring(0,h),r.skipString(B),r.skipString("\\E")):r.skipString(B);let f=0;for(;f<B.length;){const C=B.codePointAt(f);this.literal(C),f+=Q.charCount(C)}break e}case b.CODES.get("z"):this.op(T.Op.END_TEXT);break e;default:r.rewindTo(o);break}else r.rewindTo(o);const a=this.newRegexp(T.Op.CHAR_CLASS);if(a.flags=this.flags,r.lookingAt("\\p")||r.lookingAt("\\P")){const B=new Pn;if(this.parseUnicodeClass(r,B)){a.runes=B.toArray(),this.push(a);break e}}const c=new Pn;if(this.parsePerlClassEscape(r,c)){a.runes=c.toArray(),this.push(a);break e}r.rewindTo(o),this.reuse(a),this.literal(W.parseEscape(r));break}default:this.literal(r.pop());break}e=i}if(this.concat(),this.swapVerticalBar()&&this.pop(),this.alternate(),this.stack.length!==1)throw new Ee(W.ERR_MISSING_PAREN,this.wholeRegexp);return this.stack[0].namedGroups=this.namedGroups,this.stack[0]}parsePerlFlags(e){const t=e.pos(),n=e.rest();if(n.startsWith("(?P<")||n.startsWith("(?<")){const a=n.charAt(2)==="P"?4:3,c=n.indexOf(">");if(c<0)throw new Ee(W.ERR_INVALID_NAMED_CAPTURE,n);const B=n.substring(a,c);if(e.skipString(B),e.skip(a+1),!W.isValidCaptureName(B))throw new Ee(W.ERR_INVALID_NAMED_CAPTURE,n.substring(0,c+1));const h=this.op(T.Op.LEFT_PAREN);if(h.cap=++this.numCap,this.namedGroups[B])throw new Ee(W.ERR_DUPLICATE_NAMED_CAPTURE,B);this.namedGroups[B]=this.numCap,h.name=B;return}e.skip(2);let r=this.flags,i=1,o=!1;e:for(;e.more();){const a=e.pop();switch(a){case b.CODES.get("i"):r|=x.FOLD_CASE,o=!0;break;case b.CODES.get("m"):r&=-17,o=!0;break;case b.CODES.get("s"):r|=x.DOT_NL,o=!0;break;case b.CODES.get("U"):r|=x.NON_GREEDY,o=!0;break;case b.CODES.get("-"):if(i<0)break e;i=-1,r=~r,o=!1;break;case b.CODES.get(":"):case b.CODES.get(")"):if(i<0){if(!o)break e;r=~r}a===b.CODES.get(":")&&this.op(T.Op.LEFT_PAREN),this.flags=r;return;default:break e}}throw new Ee(W.ERR_INVALID_PERL_OP,e.from(t))}parsePosLookBehind(){const e=this.newRegexp(T.Op.LEFT_PAREN);return e.flags=this.flags,e.lb=++this.nlb,this.push(e)}parseNegLookBehind(){const e=this.newRegexp(T.Op.LEFT_PAREN);return e.flags=this.flags,e.lb=-++this.nlb,this.push(e)}parseVerticalBar(){this.concat(),this.swapVerticalBar()||this.op(T.Op.VERTICAL_BAR)}swapVerticalBar(){const e=this.stack.length;if(e>=3&&this.stack[e-2].op===T.Op.VERTICAL_BAR&&W.isCharClass(this.stack[e-1])&&W.isCharClass(this.stack[e-3])){let t=this.stack[e-1],n=this.stack[e-3];if(t.op>n.op){const r=n;n=t,t=r,this.stack[e-3]=n}return W.mergeCharClass(n,t),this.reuse(t),this.pop(),!0}if(e>=2){const t=this.stack[e-1],n=this.stack[e-2];if(n.op===T.Op.VERTICAL_BAR)return e>=3&&this.cleanAlt(this.stack[e-3]),this.stack[e-2]=t,this.stack[e-1]=n,!0}return!1}parseRightParen(){if(this.concat(),this.swapVerticalBar()&&this.pop(),this.alternate(),this.stack.length<2)throw new Ee(W.ERR_UNEXPECTED_PAREN,this.wholeRegexp);const e=this.pop(),t=this.pop();if(t.op!==T.Op.LEFT_PAREN)throw new Ee(W.ERR_UNEXPECTED_PAREN,this.wholeRegexp);if(this.flags=t.flags,t.lb!==0){if(W.hasCapture(e))throw new Ee(W.ERR_INVALID_CAPTURE_IN_LOOKBEHIND,this.wholeRegexp);t.lb>0?t.op=T.Op.PLB:t.op=T.Op.NLB,t.subs=[e],this.push(t);return}t.cap===0?this.push(e):(t.op=T.Op.CAPTURE,t.subs=[e],this.push(t))}parsePerlClassEscape(e,t){const n=e.pos();if((this.flags&x.PERL_X)===0||!e.more()||e.pop()!==b.CODES.get("\\")||!e.more())return!1;e.pop();const r=e.from(n),i=mf.has(r)?mf.get(r):null;return i===null?!1:(t.appendGroup(i,(this.flags&x.FOLD_CASE)!==0),!0)}parseNamedClass(e,t){const n=e.rest(),r=n.indexOf(":]");if(r<0)return!1;const i=n.substring(0,r+2);e.skipString(i);const o=Of.has(i)?Of.get(i):null;if(o===null)throw new Ee(W.ERR_INVALID_CHAR_RANGE,i);return t.appendGroup(o,(this.flags&x.FOLD_CASE)!==0),!0}parseUnicodeClass(e,t){const n=e.pos();if((this.flags&x.UNICODE_GROUPS)===0||!e.lookingAt("\\p")&&!e.lookingAt("\\P"))return!1;e.skip(1);let r=1,i=e.pop();if(i===b.CODES.get("P")&&(r=-1),!e.more())throw e.rewindTo(n),new Ee(W.ERR_INVALID_CHAR_RANGE,e.rest());i=e.pop();let o;if(i!==b.CODES.get("{"))o=Q.runeToString(i);else{const h=e.rest(),f=h.indexOf("}");if(f<0)throw e.rewindTo(n),new Ee(W.ERR_INVALID_CHAR_RANGE,e.rest());o=h.substring(0,f),e.skipString(o),e.skip(1)}o.length!==0&&o.codePointAt(0)===b.CODES.get("^")&&(r=0-r,o=o.substring(1));const a=W.unicodeTable(o);if(a===null)throw new Ee(W.ERR_INVALID_CHAR_RANGE,e.from(n));a.sign<0&&(r=0-r);const c=a.tab,B=a.fold;if((this.flags&x.FOLD_CASE)===0||B===null)t.appendTableWithSign(c,r);else{const h=new Pn().appendTable(c).appendTable(B).cleanClass().toArray();t.appendClassWithSign(h,r)}return!0}parseClass(e){const t=e.pos();e.skip(1);const n=this.newRegexp(T.Op.CHAR_CLASS);n.flags=this.flags;const r=new Pn;let i=1;e.more()&&e.lookingAt("^")&&(i=-1,e.skip(1),(this.flags&x.CLASS_NL)===0&&r.appendRange(b.CODES.get(`
`),b.CODES.get(`
`)));let o=!0;for(;!e.more()||e.peek()!==b.CODES.get("]")||o;){if(e.more()&&e.lookingAt("-")&&(this.flags&x.PERL_X)===0&&!o){const h=e.rest();if(h==="-"||!h.startsWith("-]"))throw e.rewindTo(t),new Ee(W.ERR_INVALID_CHAR_RANGE,e.rest())}o=!1;const a=e.pos();if(e.lookingAt("[:")){if(this.parseNamedClass(e,r))continue;e.rewindTo(a)}if(this.parseUnicodeClass(e,r)||this.parsePerlClassEscape(e,r))continue;e.rewindTo(a);const c=W.parseClassChar(e,t);let B=c;if(e.more()&&e.lookingAt("-")){if(e.skip(1),e.more()&&e.lookingAt("]"))e.skip(-1);else if(B=W.parseClassChar(e,t),B<c)throw new Ee(W.ERR_INVALID_CHAR_RANGE,e.from(a))}(this.flags&x.FOLD_CASE)===0?r.appendRange(c,B):r.appendFoldedRange(c,B)}e.skip(1),r.cleanClass(),i<0&&r.negateClass(),n.runes=r.toArray(),this.push(n)}},Ty=class ps{static initTest(e){const t=ps.compile(e),n=new ps(t.expr,t.prog,t.numSubexp,t.longest);return n.cond=t.cond,n.prefix=t.prefix,n.prefixUTF8=t.prefixUTF8,n.prefixComplete=t.prefixComplete,n.prefixRune=t.prefixRune,n.prefilter=t.prefilter,n}static compile(e){return ps.compileImpl(e,x.PERL,!1)}static compilePOSIX(e){return ps.compileImpl(e,x.POSIX,!0)}static compileImpl(e,t,n){let r=wy.parse(e,t);const i=r.maxCap();r=yy.simplify(r);const o=_y.build(r),a=Dy.compileRegexp(r),c=new ps(e,a,i,n);c.prefilter=o.type===de.Type.NONE?null:o;const[B,h]=a.prefix();return c.prefixComplete=B,c.prefix=h,c.prefixUTF8=Q.stringToUtf8ByteArray(c.prefix),c.prefix.length>0&&(c.prefixRune=c.prefix.codePointAt(0)),c.namedGroups=r.namedGroups,c}static match(e,t){return ps.compile(e).match(t)}constructor(e,t,n=0,r=0){this.expr=e,this.prog=t,this.numSubexp=n,this.longest=r,this.cond=t.startCond(),this.prefix=null,this.prefixUTF8=null,this.prefixComplete=!1,this.prefixRune=0,this.machinePool=[],this.dfa=new cy(this.prog),this.onepass=ff.compile(this.prog),this.prefilter=null}matchPrefixComplete(e,t,n,r){if((n===x.ANCHOR_START||n===x.ANCHOR_BOTH)&&t!==0)return null;let i=-1,o=-1;const a=e.prefixLength(this);if(n===x.UNANCHORED){const c=e.index(this,t);if(c<0)return null;i=t+c,o=i+a}else if(n===x.ANCHOR_BOTH){if(e.endPos()!==a||e.index(this,0)!==0)return null;i=0,o=a}else if(n===x.ANCHOR_START){if(e.index(this,0)!==0)return null;i=0,o=a}if(i<0)return null;if(r>0){const c=new Int32Array(r).fill(-1);return c[0]=i,c[1]=o,Array.from(c)}return[]}executeEngine(e,t,n,r){if(this.prefixComplete&&(r===0||this.numSubexp===0))return this.matchPrefixComplete(e,t,n,r);if(this.prefilter!==null&&n===x.UNANCHORED&&!this.prefilter.eval(e,t))return null;if(this.onepass!==null)return ff.execute(this,e,t,n,r);if(r>0)return this.prog.numLb===0&&e.endPos()<=Uo.maxBitStateLen(this.prog)?Uo.execute(this,e,t,n,r):this.doExecuteNFA(e,t,n,r);if(this.prog.numLb===0){const i=this.dfa.match(e,t,n);if(i!==null)return i?[]:null;if(e.endPos()<=Uo.maxBitStateLen(this.prog))return Uo.execute(this,e,t,n,r)}return this.doExecuteNFA(e,t,n,r)}numberOfCapturingGroups(){return this.numSubexp}numberOfInstructions(){return this.prog.numInst()}get(){return this.machinePool.length>0?this.machinePool.pop():null}reset(){this.machinePool.length=0}put(e){this.machinePool.push(e)}toString(){return this.expr}doExecuteNFA(e,t,n,r){let i=this.get();i||(i=oy.fromRE2(this)),i.init(r);const o=i.match(e,t,n)?i.submatches():null;return this.put(i),o}match(e){return this.executeEngine(Ie.fromUTF16(e),0,x.UNANCHORED,0)!==null}matchWithGroup(e,t,n,r,i){return e instanceof Rs||(Q.isByteArray(e)?e=_s.utf8(e):e=_s.utf16(e)),this.matchMachineInput(e,t,n,r,i)}matchMachineInput(e,t,n,r,i){if(t>n)return[!1,null];const o=e.isUTF16Encoding()?Ie.fromUTF16(e.asCharSequence(),0,n):Ie.fromUTF8(e.asBytes(),0,n),a=this.executeEngine(o,t,r,2*i);return a===null?[!1,null]:[!0,a]}matchUTF8(e){return this.executeEngine(Ie.fromUTF8(e),0,x.UNANCHORED,0)!==null}replaceAll(e,t){return this.replaceAllFunc(e,()=>t,2*e.length+1)}replaceFirst(e,t){return this.replaceAllFunc(e,()=>t,1)}replaceAllFunc(e,t,n){let r=0,i=0,o="";const a=Ie.fromUTF16(e);let c=0;for(;i<=e.length;){const B=this.executeEngine(a,i,x.UNANCHORED,2);if(B===null||B.length===0)break;o+=e.substring(r,B[0]),(B[1]>r||B[0]===0)&&(o+=t(e.substring(B[0],B[1])),c++),r=B[1];const h=a.step(i)&7;if(i+h>B[1]?i+=h:i+1>B[1]?i++:i=B[1],c>=n)break}return o+=e.substring(r),o}pad(e){if(e===null)return null;let t=(1+this.numSubexp)*2;if(e.length<t){let n=new Array(t).fill(-1);for(let r=0;r<e.length;r++)n[r]=e[r];e=n}return e}allMatches(e,t,n=r=>r){let r=[];const i=e.endPos();t<0&&(t=i+1);let o=0,a=0,c=-1;for(;a<t&&o<=i;){const B=this.executeEngine(e,o,x.UNANCHORED,this.prog.numCap);if(B===null||B.length===0)break;let h=!0;if(B[1]===o){B[0]===c&&(h=!1);const f=e.step(o);f<0?o=i+1:o+=f&7}else o=B[1];c=B[1],h&&(r.push(n(this.pad(B))),a++)}return r}findUTF8(e){const t=this.executeEngine(Ie.fromUTF8(e),0,x.UNANCHORED,2);return t===null?null:e.slice(t[0],t[1])}findUTF8Index(e){const t=this.executeEngine(Ie.fromUTF8(e),0,x.UNANCHORED,2);return t===null?null:t.slice(0,2)}find(e){const t=this.executeEngine(Ie.fromUTF16(e),0,x.UNANCHORED,2);return t===null?"":e.substring(t[0],t[1])}findIndex(e){return this.executeEngine(Ie.fromUTF16(e),0,x.UNANCHORED,2)}findUTF8Submatch(e){const t=this.executeEngine(Ie.fromUTF8(e),0,x.UNANCHORED,this.prog.numCap);if(t===null)return null;const n=new Array(1+this.numSubexp).fill(null);for(let r=0;r<n.length;r++)2*r<t.length&&t[2*r]>=0&&(n[r]=e.slice(t[2*r],t[2*r+1]));return n}findUTF8SubmatchIndex(e){return this.pad(this.executeEngine(Ie.fromUTF8(e),0,x.UNANCHORED,this.prog.numCap))}findSubmatch(e){const t=this.executeEngine(Ie.fromUTF16(e),0,x.UNANCHORED,this.prog.numCap);if(t===null)return null;const n=new Array(1+this.numSubexp).fill(null);for(let r=0;r<n.length;r++)2*r<t.length&&t[2*r]>=0&&(n[r]=e.substring(t[2*r],t[2*r+1]));return n}findSubmatchIndex(e){return this.pad(this.executeEngine(Ie.fromUTF16(e),0,x.UNANCHORED,this.prog.numCap))}findAllUTF8(e,t){const n=this.allMatches(Ie.fromUTF8(e),t,r=>e.slice(r[0],r[1]));return n.length===0?null:n}findAllUTF8Index(e,t){const n=this.allMatches(Ie.fromUTF8(e),t,r=>r.slice(0,2));return n.length===0?null:n}findAll(e,t){const n=this.allMatches(Ie.fromUTF16(e),t,r=>e.substring(r[0],r[1]));return n.length===0?null:n}findAllIndex(e,t){const n=this.allMatches(Ie.fromUTF16(e),t,r=>r.slice(0,2));return n.length===0?null:n}findAllUTF8Submatch(e,t){const n=this.allMatches(Ie.fromUTF8(e),t,r=>{let i=new Array(r.length/2|0).fill(null);for(let o=0;o<i.length;o++)r[2*o]>=0&&(i[o]=e.slice(r[2*o],r[2*o+1]));return i});return n.length===0?null:n}findAllUTF8SubmatchIndex(e,t){const n=this.allMatches(Ie.fromUTF8(e),t);return n.length===0?null:n}findAllSubmatch(e,t){const n=this.allMatches(Ie.fromUTF16(e),t,r=>{let i=new Array(r.length/2|0).fill(null);for(let o=0;o<i.length;o++)r[2*o]>=0&&(i[o]=e.substring(r[2*o],r[2*o+1]));return i});return n.length===0?null:n}findAllSubmatchIndex(e,t){const n=this.allMatches(Ie.fromUTF16(e),t);return n.length===0?null:n}},vy=class Ys{static isHexadecimal(e){return"0"<=e&&e<="9"||"A"<=e&&e<="F"||"a"<=e&&e<="f"}static translate(e){let t="";if(e instanceof RegExp&&(e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.dotAll&&(t+="s"),e=e.source),typeof e!="string")return e;let n="",r=!1,i=e.length;i===0&&(n="(?:)",r=!0);let o=!1,a=0;for(;a<i;){let B=e[a];if(B==="\\"){if(a+1<i)switch(B=e[a+1],B){case"\\":n+="\\\\",a+=2;continue;case"c":if(a+2<i){let C=e[a+2].charCodeAt(0);if(C>=65&&C<=90||C>=97&&C<=122){let _=C%32;n+="\\x",n+=(_>>4).toString(16).toUpperCase(),n+=(_&15).toString(16).toUpperCase(),a+=3,r=!0;continue}}n+="c",a+=2,r=!0;continue;case"u":if(a+2<i){if(e[a+2]==="{"){let C=a+3,_=!1,I=!1;for(;C<i;){const O=e[C];if(O==="}"){I=!0;break}if(!Ys.isHexadecimal(O))break;_=!0,C++}if(I&&_){n+="\\x",a+=2,r=!0;continue}}else if(a+5<i){let C=!0;for(let _=0;_<4;_++)if(!Ys.isHexadecimal(e[a+2+_])){C=!1;break}if(C){n+="\\x{"+e.substring(a+2,a+6)+"}",a+=6,r=!0;continue}}}n+="u",a+=2,r=!0;continue;case"x":{let C=!1;if(a+2<i&&e[a+2]==="{"){let _=a+3,I=!1,O=!1;for(;_<i;){const V=e[_];if(V==="}"){O=!0;break}if(!Ys.isHexadecimal(V))break;I=!0,_++}O&&I&&(C=!0)}else a+3<i&&Ys.isHexadecimal(e[a+2])&&Ys.isHexadecimal(e[a+3])&&(C=!0);C?(n+="\\x",a+=2):(n+="x",a+=2,r=!0);continue}case"n":case"r":case"t":case"a":case"f":case"v":case"d":case"D":case"s":case"S":case"w":case"W":case"b":case"B":case"p":case"P":case"A":case"z":case"Q":case"E":case"0":case"1":case"2":case"3":case"4":case"5":case"6":case"7":n+="\\"+B,a+=2;continue;default:{let C=e.codePointAt(a+1);if(C>=48&&C<=57||C>=65&&C<=90||C>=97&&C<=122){let _=Q.charCount(C);n+=e.substring(a+1,a+1+_),a+=_+1,r=!0}else{n+="\\";let _=Q.charCount(C);n+=e.substring(a+1,a+1+_),a+=_+1}continue}}}else if(B==="/"){n+="\\/",a+=1,r=!0;continue}else if(B==="[")o=!0;else if(B==="]")o=!1;else if(!o&&B==="("&&a+2<i&&e[a+1]==="?"&&e[a+2]==="<"&&a+3<i&&!"=!>)".includes(e[a+3])){n+="(?P<",a+=3,r=!0;continue}let h=e.codePointAt(a),f=Q.charCount(h);n+=e.substring(a,a+f),a+=f}const c=r?n:e;return t.length>0?`(?${t})${c}`:c}},_B=class Kt{static CASE_INSENSITIVE=Ws.CASE_INSENSITIVE;static DOTALL=Ws.DOTALL;static MULTILINE=Ws.MULTILINE;static DISABLE_UNICODE_GROUPS=Ws.DISABLE_UNICODE_GROUPS;static LONGEST_MATCH=Ws.LONGEST_MATCH;static LOOKBEHINDS=Ws.LOOKBEHINDS;static quote(e){return Q.quoteMeta(e)}static quoteReplacement(e,t=!1){return cf.quoteReplacement(e,t)}static translateRegExp(e){return vy.translate(e)}static compile(e,t=0){let n=e;if((t&Kt.CASE_INSENSITIVE)!==0&&(n=`(?i)${n}`),(t&Kt.DOTALL)!==0&&(n=`(?s)${n}`),(t&Kt.MULTILINE)!==0&&(n=`(?m)${n}`),(t&-544)!==0)throw new iy("Flags should only be a combination of MULTILINE, DOTALL, CASE_INSENSITIVE, DISABLE_UNICODE_GROUPS, LONGEST_MATCH, LOOKBEHINDS");let r=x.PERL;(t&Kt.DISABLE_UNICODE_GROUPS)!==0&&(r&=-129),(t&Kt.LOOKBEHINDS)!==0&&(r|=x.LOOKBEHIND);const i=new Kt(e,t);return i.re2Input=Ty.compileImpl(n,r,(t&Kt.LONGEST_MATCH)!==0),i}static matches(e,t){return Kt.compile(e).testExact(t)}static initTest(e,t,n){if(e==null)throw new Error("pattern is null");if(n==null)throw new Error("re2 is null");const r=new Kt(e,t);return r.re2Input=n,r}constructor(e,t){this.patternInput=e,this.flagsInput=t,this.re2Input=null}reset(){this.re2Input.reset()}flags(){return this.flagsInput}pattern(){return this.patternInput}re2(){return this.re2Input}matches(e){return this.testExact(e)}matcher(e){return Q.isByteArray(e)&&(e=_s.utf8(e)),new cf(this,e)}test(e){return Q.isByteArray(e)?this.re2Input.matchUTF8(e):this.re2Input.match(e)}testExact(e){const t=Q.isByteArray(e)?Ie.fromUTF8(e):Ie.fromUTF16(e);return this.re2Input.executeEngine(t,0,x.ANCHOR_BOTH,0)!==null}exec(e){const t=this.matcher(e);if(!t.find())return null;const n=[t.group(0)];for(let i=1;i<=t.groupCount();i++){const o=t.group(i);n.push(o===null?void 0:o)}n.index=t.start(0),n.input=e;const r=this.namedGroups();if(Object.keys(r).length>0){const i=t.getNamedGroups();for(const o in i)i[o]===null&&(i[o]=void 0);n.groups=i}else n.groups=void 0;return n}split(e,t=0){const n=this.matcher(e),r=[];let i=0,o=0;for(;n.find();){if(o===0&&n.end()===0){o=n.end();continue}if(t>0&&r.length===t-1)break;if(o===n.start()){if(t===0){i+=1,o=n.end();continue}}else for(;i>0;)r.push(""),i-=1;r.push(n.substring(o,n.start())),o=n.end()}if(t===0&&o!==n.inputLength()){for(;i>0;)r.push(""),i-=1;r.push(n.substring(o,n.inputLength()))}return(t!==0||r.length===0&&!(o===n.inputLength()&&o>0))&&r.push(n.substring(o,n.inputLength())),r}*matchAll(e){const t=this.matcher(e);for(;t.find();){const n=[t.group(0)];for(let i=1;i<=t.groupCount();i++){const o=t.group(i);n.push(o===null?void 0:o)}n.index=t.start(0),n.input=e;const r=this.namedGroups();if(Object.keys(r).length>0){const i=t.getNamedGroups();for(const o in i)i[o]===null&&(i[o]=void 0);n.groups=i}else n.groups=void 0;yield n}}toString(){return this.patternInput}programSize(){return this.re2Input.numberOfInstructions()}groupCount(){return this.re2Input.numberOfCapturingGroups()}namedGroups(){return this.re2Input.namedGroups}equals(e){return this===e?!0:e===null||this.constructor!==e.constructor?!1:this.flagsInput===e.flagsInput&&this.patternInput===e.patternInput}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let vr="12.18.0";function Ay(s){vr=s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ss=new Ya("@firebase/firestore");function $s(){return Ss.logLevel}function J(s,...e){if(Ss.logLevel<=ce.DEBUG){const t=e.map(EB);Ss.debug(`Firestore (${vr}): ${s}`,...t)}}function gn(s,...e){if(Ss.logLevel<=ce.ERROR){const t=e.map(EB);Ss.error(`Firestore (${vr}): ${s}`,...t)}}function Ut(s,...e){if(Ss.logLevel<=ce.WARN){const t=e.map(EB);Ss.warn(`Firestore (${vr}): ${s}`,...t)}}function EB(s){if(typeof s=="string")return s;try{return(function(t){return JSON.stringify(t)})(s)}catch{return s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Y(s,e,t){let n="Unexpected state";typeof e=="string"?n=e:t=e,rp(s,n,t)}function rp(s,e,t){let n=`FIRESTORE (${vr}) INTERNAL ASSERTION FAILED: ${e} (ID: ${s.toString(16)})`;if(t!==void 0)try{n+=" CONTEXT: "+JSON.stringify(t)}catch{n+=" CONTEXT: "+t}throw gn(n),new Error(n)}function z(s,e,t,n){let r="Unexpected state";typeof t=="string"?r=t:n=t,s||rp(e,r,n)}function se(s,e){return s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ry(s){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(s);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let n=0;n<s;n++)t[n]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DB{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let n="";for(;n.length<20;){const r=Ry(40);for(let i=0;i<r.length;++i)n.length<20&&r[i]<t&&(n+=e.charAt(r[i]%62))}return n}}function Be(s,e){return s<e?-1:s>e?1:0}function Fc(s,e){const t=Math.min(s.length,e.length);for(let n=0;n<t;n++){const r=s.charAt(n),i=e.charAt(n);if(r!==i)return oc(r)===oc(i)?Be(r,i):oc(r)?1:-1}return Be(s.length,e.length)}const Sy=55296,Py=57343;function oc(s){const e=s.charCodeAt(0);return e>=Sy&&e<=Py}function dr(s,e,t){return s.length===e.length&&s.every(((n,r)=>t(n,e[r])))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ne=class Lc{constructor(e,t){this.comparator=e,this.root=t||Hn.EMPTY}insert(e,t){return new Lc(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Hn.BLACK,null,null))}remove(e){return new Lc(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Hn.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const n=this.comparator(e,t.key);if(n===0)return t.value;n<0?t=t.left:n>0&&(t=t.right)}return null}indexOf(e){let t=0,n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return t+n.left.size;r<0?n=n.left:(t+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,n)=>(e(t,n),!1)))}toString(){const e=[];return this.inorderTraversal(((t,n)=>(e.push(`${t}:${n}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new qo(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new qo(this.root,e,this.comparator,!1)}getReverseIterator(){return new qo(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new qo(this.root,e,this.comparator,!0)}},qo=class{constructor(e,t,n,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?n(e.key,t):1,t&&r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}},Hn=class on{constructor(e,t,n,r,i){this.key=e,this.value=t,this.color=n??on.RED,this.left=r??on.EMPTY,this.right=i??on.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,n,r,i){return new on(e??this.key,t??this.value,n??this.color,r??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let r=this;const i=n(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,t,n),null):i===0?r.copy(null,t,null,null,null):r.copy(null,null,null,null,r.right.insert(e,t,n)),r.fixUp()}removeMin(){if(this.left.isEmpty())return on.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let n,r=this;if(t(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,t),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),t(e,r.key)===0){if(r.right.isEmpty())return on.EMPTY;n=r.right.min(),r=r.copy(n.key,n.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,t))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,on.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,on.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw Y(43730,{key:this.key,value:this.value});if(this.right.isRed())throw Y(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw Y(27949);return e+(this.isRed()?0:1)}};Hn.EMPTY=null,Hn.RED=!0,Hn.BLACK=!1;Hn.EMPTY=new class{constructor(){this.size=0}get key(){throw Y(57766)}get value(){throw Y(16141)}get color(){throw Y(16727)}get left(){throw Y(29726)}get right(){throw Y(36894)}copy(e,t,n,r,i){return this}insert(e,t,n){return new Hn(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fe{constructor(e){this.comparator=e,this.data=new Ne(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,n)=>(e(t),!1)))}forEachInRange(e,t){const n=this.data.getIteratorFrom(e[0]);for(;n.hasNext();){const r=n.getNext();if(this.comparator(r.key,e[1])>=0)return;t(r.key)}}forEachWhile(e,t){let n;for(n=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();n.hasNext();)if(!e(n.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Ff(this.data.getIterator())}getIteratorFrom(e){return new Ff(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((n=>{t=t.add(n)})),t}isEqual(e){if(!(e instanceof Fe)||this.size!==e.size)return!1;const t=this.data.getIterator(),n=e.data.getIterator();for(;t.hasNext();){const r=t.getNext().key,i=n.getNext().key;if(this.comparator(r,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new Fe(this.comparator);return t.data=e,t}}class Ff{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const M={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class K extends yn{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cr="__name__";class Wt{constructor(e,t,n){t===void 0?t=0:t>e.length&&Y(637,{offset:t,range:e.length}),n===void 0?n=e.length-t:n>e.length-t&&Y(1746,{length:n,range:e.length-t}),this.segments=e,this.offset=t,this.len=n}get length(){return this.len}isEqual(e){return Wt.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Wt?e.forEach((n=>{t.push(n)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,n=this.limit();t<n;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const n=Math.min(e.length,t.length);for(let r=0;r<n;r++){const i=Wt.compareSegments(e.get(r),t.get(r));if(i!==0)return i}return Be(e.length,t.length)}static compareSegments(e,t){const n=Wt.isNumericId(e),r=Wt.isNumericId(t);return n&&!r?-1:!n&&r?1:n&&r?Wt.extractNumericId(e).compare(Wt.extractNumericId(t)):Fc(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Gn.fromString(e.substring(4,e.length-2))}}class ge extends Wt{construct(e,t,n){return new ge(e,t,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toStringWithLeadingSlash(){return`/${this.canonicalString()}`}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const n of e){if(n.indexOf("//")>=0)throw new K(M.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);t.push(...n.split("/").filter((r=>r.length>0)))}return new ge(t)}static emptyPath(){return new ge([])}}const Ny=/^[_a-zA-Z][_a-zA-Z0-9]*$/;let Pt=class Xs extends Wt{construct(e,t,n){return new Xs(e,t,n)}static isValidIdentifier(e){return Ny.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Xs.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Cr}static keyField(){return new Xs([Cr])}static fromServerFormat(e){const t=[];let n="",r=0;const i=()=>{if(n.length===0)throw new K(M.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(n),n=""};let o=!1;for(;r<e.length;){const a=e[r];if(a==="\\"){if(r+1===e.length)throw new K(M.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[r+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new K(M.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);n+=c,r+=2}else a==="`"?(o=!o,r++):a!=="."||o?(n+=a,r++):(i(),r++)}if(i(),o)throw new K(M.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Xs(t)}static emptyPath(){return new Xs([])}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xt{constructor(e){this.fields=e,e.sort(Pt.comparator)}static empty(){return new xt([])}unionWith(e){let t=new Fe(Pt.comparator);for(const n of this.fields)t=t.add(n);for(const n of e)t=t.add(n);return new xt(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return dr(this.fields,e.fields,((t,n)=>t.isEqual(n)))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ha(s){let e=0;for(const t in s)Object.prototype.hasOwnProperty.call(s,t)&&e++;return e}function xs(s,e){for(const t in s)Object.prototype.hasOwnProperty.call(s,t)&&e(t,s[t])}function by(s,e){const t=[];for(const n in s)Object.prototype.hasOwnProperty.call(s,n)&&t.push(e(s[n],n,s));return t}function ip(s){for(const e in s)if(Object.prototype.hasOwnProperty.call(s,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ${constructor(e){this.path=e}static fromPath(e){return new $(ge.fromString(e))}static fromName(e){return new $(ge.fromString(e).popFirst(5))}static empty(){return new $(ge.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ge.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return ge.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new $(new ge(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oy(s,e,t){if(!t)throw new K(M.INVALID_ARGUMENT,`Function ${s}() cannot be called with an empty ${e}.`)}function Fy(s,e,t,n){if(e===!0&&n===!0)throw new K(M.INVALID_ARGUMENT,`${s} and ${t} cannot be used together.`)}function Lf(s){if(!$.isDocumentKey(s))throw new K(M.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${s} has ${s.length}.`)}function so(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}function yB(s){if(s===void 0)return"undefined";if(s===null)return"null";if(typeof s=="string")return s.length>20&&(s=`${s.substring(0,20)}...`),JSON.stringify(s);if(typeof s=="number"||typeof s=="boolean")return""+s;if(typeof s=="object"){if(s instanceof Array)return"an array";{const e=(function(n){return n.constructor?n.constructor.name:null})(s);return e?`a custom ${e} object`:"an object"}}return typeof s=="function"?"a function":Y(12329,{type:typeof s})}function rr(s,e){if("_delegate"in s&&(s=s._delegate),!(s instanceof e)){if(e.name===s.constructor.name)throw new K(M.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=yB(s);throw new K(M.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return s}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oe(s,e){const t={typeString:s};return e&&(t.value=e),t}function ro(s,e){if(!so(s))throw new K(M.INVALID_ARGUMENT,"JSON must be an object");let t;for(const n in e)if(e[n]){const r=e[n].typeString,i="value"in e[n]?{value:e[n].value}:void 0;if(!(n in s)){t=`JSON missing required field: '${n}'`;break}const o=s[n];if(r&&typeof o!==r){t=`JSON field '${n}' must be a ${r}.`;break}if(i!==void 0&&o!==i.value){t=`Expected '${n}' field to equal '${i.value}'`;break}}if(t)throw new K(M.INVALID_ARGUMENT,t);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kf=-62135596800,xf=1e6;class Te{static now(){return Te.fromMillis(Date.now())}static fromDate(e){return Te.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),n=Math.floor((e-1e3*t)*xf);return new Te(t,n)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new K(M.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new K(M.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<kf)throw new K(M.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new K(M.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/xf}_compareTo(e){return this.seconds===e.seconds?Be(this.nanoseconds,e.nanoseconds):Be(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:Te._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(ro(e,Te._jsonSchema))return new Te(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-kf;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}Te._jsonSchemaVersion="firestore/timestamp/1.0",Te._jsonSchema={type:Oe("string",Te._jsonSchemaVersion),seconds:Oe("number"),nanoseconds:Oe("number")};/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class op extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Le{constructor(e){this.binaryString=e}static fromBase64String(e){const t=(function(r){try{return atob(r)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new op("Invalid base64 string: "+i):i}})(e);return new Le(t)}static fromUint8Array(e){const t=(function(r){let i="";for(let o=0;o<r.length;++o)i+=String.fromCharCode(r[o]);return i})(e);return new Le(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(t){return btoa(t)})(this.binaryString)}toUint8Array(){return(function(t){const n=new Uint8Array(t.length);for(let r=0;r<t.length;r++)n[r]=t.charCodeAt(r);return n})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Be(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Le.EMPTY_BYTE_STRING=new Le("");const Ly=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Wn(s){if(z(!!s,39018),typeof s=="string"){let e=0;const t=Ly.exec(s);if(z(!!t,46558,{timestamp:s}),t[1]){let r=t[1];r=(r+"000000000").substr(0,9),e=Number(r)}const n=new Date(s);return{seconds:Math.floor(n.getTime()/1e3),nanos:e}}return{seconds:Ae(s.seconds),nanos:Ae(s.nanos)}}function Ae(s){return typeof s=="number"?s:typeof s=="string"?Number(s):0}function zn(s){return typeof s=="string"?Le.fromBase64String(s):Le.fromUint8Array(s)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ap="server_timestamp",lp="__type__",cp="__previous_value__",Bp="__local_write_time__";function Xa(s){return(s?.mapValue?.fields||{})[lp]?.stringValue===ap}function io(s){const e=s.mapValue.fields[cp];return Xa(e)?io(e):e}function pr(s){const e=Wn(s.mapValue.fields[Bp].timestampValue);return new Te(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ky{constructor(e,t,n,r,i,o,a,c,B,h,f,C,_){this.databaseId=e,this.appId=t,this.persistenceKey=n,this.host=r,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=c,this.useFetchStreams=B,this.isUsingEmulator=h,this.apiKey=f,this._customHeaders=C,this.grpcFlowControlWindow=_}}const fa="(default)";class Si{constructor(e,t){this.projectId=e,this.database=t||fa}static empty(){return new Si("","")}get isDefaultDatabase(){return this.database===fa}isEqual(e){return e instanceof Si&&e.projectId===this.projectId&&e.database===this.database}}function xy(s,e){if(!Object.prototype.hasOwnProperty.apply(s.options,["projectId"]))throw new K(M.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Si(s.options.projectId,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IB=-1;function Za(s){return s==null}function Pi(s){return s===0&&1/s==-1/0}function My(s){return typeof s=="number"&&Number.isInteger(s)&&!Pi(s)&&s<=Number.MAX_SAFE_INTEGER&&s>=Number.MIN_SAFE_INTEGER}function Vy(s){return typeof s=="string"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const up="__type__",Gy="__max__",jo={mapValue:{}},hp="__vector__",Ni="value",gr={nullValue:"NULL_VALUE"},mt={booleanValue:!0},ze={booleanValue:!1};function ke(s){return"nullValue"in s?0:"booleanValue"in s?1:"integerValue"in s||"doubleValue"in s?2:"timestampValue"in s?3:"stringValue"in s?5:"bytesValue"in s?6:"referenceValue"in s?7:"geoPointValue"in s?8:"arrayValue"in s?9:"mapValue"in s?Xa(s)?4:Hy(s)?9007199254740991:da(s)?10:11:Y(28295,{value:s})}function Lt(s,e,t){if(s===e)return!0;const n=ke(s);if(n!==ke(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return s.booleanValue===e.booleanValue;case 4:return pr(s).isEqual(pr(e));case 3:return(function(i,o){if(typeof i.timestampValue=="string"&&typeof o.timestampValue=="string"&&i.timestampValue.length===o.timestampValue.length)return i.timestampValue===o.timestampValue;const a=Wn(i.timestampValue),c=Wn(o.timestampValue);return a.seconds===c.seconds&&a.nanos===c.nanos})(s,e);case 5:return s.stringValue===e.stringValue;case 6:return(function(i,o){return zn(i.bytesValue).isEqual(zn(o.bytesValue))})(s,e);case 7:return s.referenceValue===e.referenceValue;case 8:return(function(i,o){return Ae(i.geoPointValue.latitude)===Ae(o.geoPointValue.latitude)&&Ae(i.geoPointValue.longitude)===Ae(o.geoPointValue.longitude)})(s,e);case 2:return(function(i,o,a){if("integerValue"in i&&"integerValue"in o)return Ae(i.integerValue)===Ae(o.integerValue);let c,B;if("doubleValue"in i&&"doubleValue"in o)c=Ae(i.doubleValue),B=Ae(o.doubleValue);else{if(!a?.t)return!1;c=Ae(i.integerValue??i.doubleValue),B=Ae(o.integerValue??o.doubleValue)}return c===B?!!a?.i||Pi(c)===Pi(B):!!(a===void 0||a.o)&&isNaN(c)&&isNaN(B)})(s,e,t);case 9:return dr(s.arrayValue.values||[],e.arrayValue.values||[],((r,i)=>Lt(r,i,t)));case 10:case 11:return(function(i,o,a){const c=i.mapValue.fields||{},B=o.mapValue.fields||{};if(ha(c)!==ha(B))return!1;for(const h in c)if(c.hasOwnProperty(h)&&(B[h]===void 0||!Lt(c[h],B[h],a)))return!1;return!0})(s,e,t);default:return Y(52216,{left:s})}}function bi(s,e){return(s.values||[]).find((t=>Lt(t,e)))!==void 0}function _t(s,e){if(s===e)return 0;const t=ke(s),n=ke(e);if(t!==n)return Be(t,n);switch(t){case 0:case 9007199254740991:return 0;case 1:return Be(s.booleanValue,e.booleanValue);case 2:return(function(i,o){const a=Ae(i.integerValue||i.doubleValue),c=Ae(o.integerValue||o.doubleValue);return a<c?-1:a>c?1:a===c?0:isNaN(a)?isNaN(c)?0:-1:1})(s,e);case 3:return Mf(s.timestampValue,e.timestampValue);case 4:return Mf(pr(s),pr(e));case 5:return Fc(s.stringValue,e.stringValue);case 6:return(function(i,o){const a=zn(i),c=zn(o);return a.compareTo(c)})(s.bytesValue,e.bytesValue);case 7:return(function(i,o){const a=i.split("/"),c=o.split("/");for(let B=0;B<a.length&&B<c.length;B++){const h=Be(a[B],c[B]);if(h!==0)return h}return Be(a.length,c.length)})(s.referenceValue,e.referenceValue);case 8:return(function(i,o){const a=Be(Ae(i.latitude),Ae(o.latitude));return a!==0?a:Be(Ae(i.longitude),Ae(o.longitude))})(s.geoPointValue,e.geoPointValue);case 9:return Vf(s.arrayValue,e.arrayValue);case 10:return(function(i,o){const a=i.fields||{},c=o.fields||{},B=a[Ni]?.arrayValue,h=c[Ni]?.arrayValue,f=Be(B?.values?.length||0,h?.values?.length||0);return f!==0?f:Vf(B,h)})(s.mapValue,e.mapValue);case 11:return(function(i,o){if(i===jo.mapValue&&o===jo.mapValue)return 0;if(i===jo.mapValue)return 1;if(o===jo.mapValue)return-1;const a=i.fields||{},c=Object.keys(a),B=o.fields||{},h=Object.keys(B);c.sort(),h.sort();for(let f=0;f<c.length&&f<h.length;++f){const C=Fc(c[f],h[f]);if(C!==0)return C;const _=_t(a[c[f]],B[h[f]]);if(_!==0)return _}return Be(c.length,h.length)})(s.mapValue,e.mapValue);default:throw Y(23264,{u:t})}}function Mf(s,e){if(typeof s=="string"&&typeof e=="string"&&s.length===e.length)return Be(s,e);const t=Wn(s),n=Wn(e),r=Be(t.seconds,n.seconds);return r!==0?r:Be(t.nanos,n.nanos)}function Vf(s,e){const t=s.values||[],n=e.values||[];for(let r=0;r<t.length&&r<n.length;++r){const i=_t(t[r],n[r]);if(i!==void 0&&i!==0)return i}return Be(t.length,n.length)}function mr(s){return kc(s)}function kc(s){return"nullValue"in s?"null":"booleanValue"in s?""+s.booleanValue:"integerValue"in s?""+s.integerValue:"doubleValue"in s?""+s.doubleValue:"timestampValue"in s?(function(t){const n=Wn(t);return`time(${n.seconds},${n.nanos})`})(s.timestampValue):"stringValue"in s?s.stringValue:"bytesValue"in s?(function(t){return zn(t).toBase64()})(s.bytesValue):"referenceValue"in s?(function(t){return $.fromName(t).toString()})(s.referenceValue):"geoPointValue"in s?(function(t){return`geo(${t.latitude},${t.longitude})`})(s.geoPointValue):"arrayValue"in s?(function(t){let n="[",r=!0;for(const i of t.values||[])r?r=!1:n+=",",n+=kc(i);return n+"]"})(s.arrayValue):"mapValue"in s?(function(t){const n=Object.keys(t.fields||{}).sort();let r="{",i=!0;for(const o of n)i?i=!1:r+=",",r+=`${o}:${kc(t.fields[o])}`;return r+"}"})(s.mapValue):Y(61005,{value:s})}function Zo(s){switch(ke(s)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=io(s);return e?16+Zo(e):16;case 5:return 2*s.stringValue.length;case 6:return zn(s.bytesValue).approximateByteSize();case 7:return s.referenceValue.length;case 9:return(function(n){return(n.values||[]).reduce(((r,i)=>r+Zo(i)),0)})(s.arrayValue);case 10:case 11:return(function(n){let r=0;return xs(n.fields,((i,o)=>{r+=i.length+Zo(o)})),r})(s.mapValue);default:throw Y(13486,{value:s})}}function zt(s){return!!s&&"integerValue"in s}function Es(s){return!!s&&"doubleValue"in s}function Qn(s){return zt(s)||Es(s)}function _r(s){return!!s&&"arrayValue"in s}function St(s){return!!s&&"nullValue"in s}function Et(s){return!!s&&"doubleValue"in s&&isNaN(Number(s.doubleValue))}function Is(s){return!!s&&"mapValue"in s}function da(s){return(s?.mapValue?.fields||{})[up]?.stringValue===hp}function xc(s){return(s?.mapValue?.fields||{})[Ni]?.arrayValue}function fi(s){if(s.geoPointValue)return{geoPointValue:{...s.geoPointValue}};if(s.timestampValue&&typeof s.timestampValue=="object")return{timestampValue:{...s.timestampValue}};if(s.mapValue){const e={mapValue:{fields:{}}};return xs(s.mapValue.fields,((t,n)=>e.mapValue.fields[t]=fi(n))),e}if(s.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(s.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=fi(s.arrayValue.values[t]);return e}return{...s}}function Hy(s){return(((s.mapValue||{}).fields||{}).__type__||{}).stringValue===Gy}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rt{constructor(e){this.value=e}static empty(){return new Rt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let n=0;n<e.length-1;++n)if(t=(t.mapValue.fields||{})[e.get(n)],!Is(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=fi(t)}setAll(e){let t=Pt.emptyPath(),n={},r=[];e.forEach(((o,a)=>{if(!t.isImmediateParentOf(a)){const c=this.getFieldsMap(t);this.applyChanges(c,n,r),n={},r=[],t=a.popLast()}o?n[a.lastSegment()]=fi(o):r.push(a.lastSegment())}));const i=this.getFieldsMap(t);this.applyChanges(i,n,r)}delete(e){const t=this.field(e.popLast());Is(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Lt(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let n=0;n<e.length;++n){let r=t.mapValue.fields[e.get(n)];Is(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},t.mapValue.fields[e.get(n)]=r),t=r}return t.mapValue.fields}applyChanges(e,t,n){xs(t,((r,i)=>e[r]=i));for(const r of n)delete e[r]}clone(){return new Rt(fi(this.value))}}function fp(s){const e=[];return xs(s.fields,((t,n)=>{const r=new Pt([t]);if(Is(n)){const i=fp(n.mapValue).fields;if(i.length===0)e.push(r);else for(const o of i)e.push(r.child(o))}else e.push(r)})),new xt(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function el(s,e){if(s.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Pi(e)?"-0":e}}function wB(s){return{integerValue:""+s}}function TB(s,e,t){return My(e)?wB(e):el(s,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tl{constructor(){this._=void 0}}function Uy(s,e,t){return s instanceof Ca?(function(r,i){const o={fields:{[lp]:{stringValue:ap},[Bp]:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return i&&Xa(i)&&(i=io(i)),i&&(o.fields[cp]=i),{mapValue:o}})(t,e):s instanceof Oi?Cp(s,e):s instanceof Fi?pp(s,e):s instanceof Li?(function(r,i){const o=dp(r,i),a=ma(o)+ma(r.l);return zt(o)&&zt(r.l)?wB(a):el(r.serializer,a)})(s,e):s instanceof pa?(function(r,i){return Gf(r,i,Math.min)})(s,e):s instanceof ga?(function(r,i){return Gf(r,i,Math.max)})(s,e):void 0}function Jy(s,e,t){return s instanceof Oi?Cp(s,e):s instanceof Fi?pp(s,e):t}function dp(s,e){return s instanceof Li?Qn(e)?e:{integerValue:0}:null}class Ca extends tl{}class Oi extends tl{constructor(e){super(),this.elements=e}}function Cp(s,e){const t=gp(e);for(const n of s.elements)t.some((r=>Lt(r,n)))||t.push(n);return{arrayValue:{values:t}}}class Fi extends tl{constructor(e){super(),this.elements=e}}function pp(s,e){let t=gp(e);for(const n of s.elements)t=t.filter((r=>!Lt(r,n)));return{arrayValue:{values:t}}}class vB extends tl{constructor(e,t){super(),this.serializer=e,this.l=t}}class Li extends vB{}class pa extends vB{}class ga extends vB{}function Gf(s,e,t){if(!Qn(e))return s.l;const n=t(ma(e),ma(s.l));return zt(e)&&zt(s.l)?wB(n):el(s.serializer,n)}function ma(s){return Ae(s.integerValue||s.doubleValue)}function gp(s){return _r(s)&&s.arrayValue.values?s.arrayValue.values.slice():[]}function qy(s,e){return s.field.isEqual(e.field)&&(function(n,r){return n instanceof Oi&&r instanceof Oi||n instanceof Fi&&r instanceof Fi?dr(n.elements,r.elements,Lt):n instanceof Li&&r instanceof Li||n instanceof pa&&r instanceof pa||n instanceof ga&&r instanceof ga?Lt(n.l,r.l):n instanceof Ca&&r instanceof Ca})(s.transform,e.transform)}class jy{constructor(e,t){this.version=e,this.transformResults=t}}class hn{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new hn}static exists(e){return new hn(void 0,e)}static updateTime(e){return new hn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function ea(s,e){return s.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(s.updateTime):s.exists===void 0||s.exists===e.isFoundDocument()}class nl{}function mp(s,e){if(!s.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return s.isNoDocument()?new Ep(s.key,hn.none()):new oo(s.key,s.data,hn.none());{const t=s.data,n=Rt.empty();let r=new Fe(Pt.comparator);for(let i of e.fields)if(!r.has(i)){let o=t.field(i);o===null&&i.length>1&&(i=i.popLast(),o=t.field(i)),o===null?n.delete(i):n.set(i,o),r=r.add(i)}return new Ms(s.key,n,new xt(r.toArray()),hn.none())}}function Ky(s,e,t){s instanceof oo?(function(r,i,o){const a=r.value.clone(),c=Uf(r.fieldTransforms,i,o.transformResults);a.setAll(c),i.convertToFoundDocument(o.version,a).setHasCommittedMutations()})(s,e,t):s instanceof Ms?(function(r,i,o){if(!ea(r.precondition,i))return void i.convertToUnknownDocument(o.version);const a=Uf(r.fieldTransforms,i,o.transformResults),c=i.data;c.setAll(_p(r)),c.setAll(a),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()})(s,e,t):(function(r,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()})(0,e,t)}function di(s,e,t,n){return s instanceof oo?(function(i,o,a,c){if(!ea(i.precondition,o))return a;const B=i.value.clone(),h=Jf(i.fieldTransforms,c,o);return B.setAll(h),o.convertToFoundDocument(o.version,B).setHasLocalMutations(),null})(s,e,t,n):s instanceof Ms?(function(i,o,a,c){if(!ea(i.precondition,o))return a;const B=Jf(i.fieldTransforms,c,o),h=o.data;return h.setAll(_p(i)),h.setAll(B),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),a===null?null:a.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map((f=>f.field)))})(s,e,t,n):(function(i,o,a){return ea(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a})(s,e,t)}function Wy(s,e){let t=null;for(const n of s.fieldTransforms){const r=e.data.field(n.field),i=dp(n.transform,r||null);i!=null&&(t===null&&(t=Rt.empty()),t.set(n.field,i))}return t||null}function Hf(s,e){return s.type===e.type&&!!s.key.isEqual(e.key)&&!!s.precondition.isEqual(e.precondition)&&!!(function(n,r){return n===void 0&&r===void 0||!(!n||!r)&&dr(n,r,((i,o)=>qy(i,o)))})(s.fieldTransforms,e.fieldTransforms)&&(s.type===0?s.value.isEqual(e.value):s.type!==1||s.data.isEqual(e.data)&&s.fieldMask.isEqual(e.fieldMask))}class oo extends nl{constructor(e,t,n,r=[]){super(),this.key=e,this.value=t,this.precondition=n,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class Ms extends nl{constructor(e,t,n,r,i=[]){super(),this.key=e,this.data=t,this.fieldMask=n,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function _p(s){const e=new Map;return s.fieldMask.fields.forEach((t=>{if(!t.isEmpty()){const n=s.data.field(t);e.set(t,n)}})),e}function Uf(s,e,t){const n=new Map;z(s.length===t.length,32656,{h:t.length,T:s.length});for(let r=0;r<t.length;r++){const i=s[r],o=i.transform,a=e.data.field(i.field);n.set(i.field,Jy(o,a,t[r]))}return n}function Jf(s,e,t){const n=new Map;for(const r of s){const i=r.transform,o=t.data.field(r.field);n.set(r.field,Uy(i,o,e))}return n}class Ep extends nl{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class zy extends nl{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _a{constructor(e,t){this.position=e,this.inclusive=t}}function qf(s,e,t){let n=0;for(let r=0;r<s.position.length;r++){const i=e[r],o=s.position[r];if(i.field.isKeyField()?n=$.comparator($.fromName(o.referenceValue),t.key):n=_t(o,t.data.field(i.field)),i.dir==="desc"&&(n*=-1),n!==0)break}return n}function jf(s,e){if(s===null)return e===null;if(e===null||s.inclusive!==e.inclusive||s.position.length!==e.position.length)return!1;for(let t=0;t<s.position.length;t++)if(!Lt(s.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dp{}class Me extends Dp{constructor(e,t,n){super(),this.field=e,this.op=t,this.value=n}static create(e,t,n){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,n):new Yy(e,t,n):t==="array-contains"?new Zy(e,n):t==="in"?new eI(e,n):t==="not-in"?new tI(e,n):t==="array-contains-any"?new nI(e,n):new Me(e,t,n)}static createKeyFieldInFilter(e,t,n){return t==="in"?new $y(e,n):new Xy(e,n)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(_t(t,this.value)):t!==null&&ke(this.value)===ke(t)&&this.matchesComparison(_t(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Y(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class tn extends Dp{constructor(e,t){super(),this.filters=e,this.op=t,this.P=null}static create(e,t){return new tn(e,t)}matches(e){return yp(this)?this.filters.find((t=>!t.matches(e)))===void 0:this.filters.find((t=>t.matches(e)))!==void 0}getFlattenedFilters(){return this.P!==null||(this.P=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.P}getFilters(){return Object.assign([],this.filters)}}function yp(s){return s.op==="and"}function Ip(s){return Qy(s)&&yp(s)}function Qy(s){for(const e of s.filters)if(e instanceof tn)return!1;return!0}function Mc(s){if(s instanceof Me)return s.field.canonicalString()+s.op.toString()+mr(s.value);if(Ip(s))return s.filters.map((e=>Mc(e))).join(",");{const e=s.filters.map((t=>Mc(t))).join(",");return`${s.op}(${e})`}}function wp(s,e){return s instanceof Me?(function(n,r){return r instanceof Me&&n.op===r.op&&n.field.isEqual(r.field)&&Lt(n.value,r.value)})(s,e):s instanceof tn?(function(n,r){return r instanceof tn&&n.op===r.op&&n.filters.length===r.filters.length?n.filters.reduce(((i,o,a)=>i&&wp(o,r.filters[a])),!0):!1})(s,e):void Y(19439)}function Tp(s){return s instanceof Me?(function(t){return`${t.field.canonicalString()} ${t.op} ${mr(t.value)}`})(s):s instanceof tn?(function(t){return t.op.toString()+" {"+t.getFilters().map(Tp).join(" ,")+"}"})(s):"Filter"}class Yy extends Me{constructor(e,t,n){super(e,t,n),this.key=$.fromName(n.referenceValue)}matches(e){const t=$.comparator(e.key,this.key);return this.matchesComparison(t)}}class $y extends Me{constructor(e,t){super(e,"in",t),this.keys=vp("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class Xy extends Me{constructor(e,t){super(e,"not-in",t),this.keys=vp("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function vp(s,e){return(e.arrayValue?.values||[]).map((t=>$.fromName(t.referenceValue)))}class Zy extends Me{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return _r(t)&&bi(t.arrayValue,this.value)}}class eI extends Me{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&bi(this.value.arrayValue,t)}}class tI extends Me{constructor(e,t){super(e,"not-in",t)}matches(e){if(bi(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!bi(this.value.arrayValue,t)}}class nI extends Me{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!_r(t)||!t.arrayValue.values)&&t.arrayValue.values.some((n=>bi(this.value.arrayValue,n)))}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ea{constructor(e,t="asc"){this.field=e,this.dir=t}}function sI(s,e){return s.dir===e.dir&&s.field.isEqual(e.field)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ne{static fromTimestamp(e){return new ne(e)}static min(){return new ne(new Te(0,0))}static max(){return new ne(new Te(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tt{constructor(e,t,n,r,i,o,a){this.key=e,this.documentType=t,this.version=n,this.readTime=r,this.createTime=i,this.data=o,this.documentState=a}static newInvalidDocument(e){return new tt(e,0,ne.min(),ne.min(),ne.min(),Rt.empty(),0)}static newFoundDocument(e,t,n,r){return new tt(e,1,t,ne.min(),n,r,0)}static newNoDocument(e,t){return new tt(e,2,t,ne.min(),ne.min(),Rt.empty(),0)}static newUnknownDocument(e,t){return new tt(e,3,t,ne.min(),ne.min(),Rt.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(ne.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Rt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Rt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ne.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof tt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new tt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ki=-1;function rI(s,e){const t=s.toTimestamp().seconds,n=s.toTimestamp().nanoseconds+1,r=ne.fromTimestamp(n===1e9?new Te(t+1,0):new Te(t,n));return new Yn(r,$.empty(),e)}function iI(s){return new Yn(s.readTime,s.key,ki)}class Yn{constructor(e,t,n){this.readTime=e,this.documentKey=t,this.largestBatchId=n}static min(){return new Yn(ne.min(),$.empty(),ki)}static max(){return new Yn(ne.max(),$.empty(),ki)}}function oI(s,e){let t=s.readTime.compareTo(e.readTime);return t!==0?t:(t=$.comparator(s.documentKey,e.documentKey),t!==0?t:Be(s.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aI{constructor(e,t=null,n=[],r=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=t,this.orderBy=n,this.filters=r,this.limit=i,this.startAt=o,this.endAt=a,this.R=null}}function Kf(s,e=null,t=[],n=[],r=null,i=null,o=null){return new aI(s,e,t,n,r,i,o)}function Ap(s){const e=se(s);if(e.R===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((n=>Mc(n))).join(","),t+="|ob:",t+=e.orderBy.map((n=>(function(i){return i.field.canonicalString()+i.dir})(n))).join(","),Za(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((n=>mr(n))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((n=>mr(n))).join(",")),e.R=t}return e.R}function Rp(s,e){if(s.limit!==e.limit||s.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<s.orderBy.length;t++)if(!sI(s.orderBy[t],e.orderBy[t]))return!1;if(s.filters.length!==e.filters.length)return!1;for(let t=0;t<s.filters.length;t++)if(!wp(s.filters[t],e.filters[t]))return!1;return s.collectionGroup===e.collectionGroup&&!!s.path.isEqual(e.path)&&!!jf(s.startAt,e.startAt)&&jf(s.endAt,e.endAt)}function ms(s){return!!s.isCorePipeline}function Sp(s){return!!s.path&&$.isDocumentKey(s.path)&&s.collectionGroup===null&&s.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sl{constructor(e,t=null,n=[],r=[],i=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=n,this.filters=r,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=c,this.I=null,this.A=null,this.V=null,this.startAt,this.endAt}}function lI(s,e,t,n,r,i,o,a){return new sl(s,e,t,n,r,i,o,a)}function AB(s){return new sl(s)}function Wf(s){return s.filters.length===0&&s.limit===null&&s.startAt==null&&s.endAt==null&&(s.explicitOrderBy.length===0||s.explicitOrderBy.length===1&&s.explicitOrderBy[0].field.isKeyField())}function cI(s){return $.isDocumentKey(s.path)&&s.collectionGroup===null&&s.filters.length===0}function BI(s){return s.collectionGroup!==null}function Ci(s){const e=se(s);if(e.I===null){e.I=[];const t=new Set;for(const i of e.explicitOrderBy)e.I.push(i),t.add(i.field.canonicalString());const n=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new Fe(Pt.comparator);return o.filters.forEach((c=>{c.getFlattenedFilters().forEach((B=>{B.isInequality()&&(a=a.add(B.field))}))})),a})(e).forEach((i=>{t.has(i.canonicalString())||i.isKeyField()||e.I.push(new Ea(i,n))})),t.has(Pt.keyField().canonicalString())||e.I.push(new Ea(Pt.keyField(),n))}return e.I}function Yt(s){const e=se(s);return e.A||(e.A=uI(e,Ci(s))),e.A}function uI(s,e){if(s.limitType==="F")return Kf(s.path,s.collectionGroup,e,s.filters,s.limit,s.startAt,s.endAt);{e=e.map((r=>{const i=r.dir==="desc"?"asc":"desc";return new Ea(r.field,i)}));const t=s.endAt?new _a(s.endAt.position,s.endAt.inclusive):null,n=s.startAt?new _a(s.startAt.position,s.startAt.inclusive):null;return Kf(s.path,s.collectionGroup,e,s.filters,s.limit,t,n)}}function Vc(s,e,t){return new sl(s.path,s.collectionGroup,s.explicitOrderBy.slice(),s.filters.slice(),e,t,s.startAt,s.endAt)}function hI(s,e){return Rp(Yt(s),Yt(e))&&s.limitType===e.limitType}function pi(s){return`Query(target=${(function(t){let n=t.path.canonicalString();return t.collectionGroup!==null&&(n+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(n+=`, filters: [${t.filters.map((r=>Tp(r))).join(", ")}]`),Za(t.limit)||(n+=", limit: "+t.limit),t.orderBy.length>0&&(n+=`, orderBy: [${t.orderBy.map((r=>(function(o){return`${o.field.canonicalString()} (${o.dir})`})(r))).join(", ")}]`),t.startAt&&(n+=", startAt: ",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map((r=>mr(r))).join(",")),t.endAt&&(n+=", endAt: ",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map((r=>mr(r))).join(",")),`Target(${n})`})(Yt(s))}; limitType=${s.limitType})`}function rl(s,e){return e.isFoundDocument()&&(function(n,r){const i=r.key.path;return n.collectionGroup!==null?r.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(i):$.isDocumentKey(n.path)?n.path.isEqual(i):n.path.isImmediateParentOf(i)})(s,e)&&(function(n,r){for(const i of Ci(n))if(!i.field.isKeyField()&&r.data.field(i.field)===null)return!1;return!0})(s,e)&&(function(n,r){for(const i of n.filters)if(!i.matches(r))return!1;return!0})(s,e)&&(function(n,r){return!(n.startAt&&!(function(o,a,c){const B=qf(o,a,c);return o.inclusive?B<=0:B<0})(n.startAt,Ci(n),r)||n.endAt&&!(function(o,a,c){const B=qf(o,a,c);return o.inclusive?B>=0:B>0})(n.endAt,Ci(n),r))})(s,e)}function RB(s){return(e,t)=>{let n=!1;for(const r of Ci(s)){const i=fI(r,e,t);if(i!==0)return i;n=n||r.field.isKeyField()}return 0}}function fI(s,e,t){const n=s.field.isKeyField()?$.comparator(e.key,t.key):(function(i,o,a){const c=o.data.field(i),B=a.data.field(i);return c!==null&&B!==null?_t(c,B):Y(42886)})(s.field,e,t);switch(s.dir){case"asc":return n;case"desc":return-1*n;default:return Y(19790,{direction:s.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dI{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var be,he;function CI(s){switch(s){case M.OK:return Y(64938);case M.CANCELLED:case M.UNKNOWN:case M.DEADLINE_EXCEEDED:case M.RESOURCE_EXHAUSTED:case M.INTERNAL:case M.UNAVAILABLE:case M.UNAUTHENTICATED:return!1;case M.INVALID_ARGUMENT:case M.NOT_FOUND:case M.ALREADY_EXISTS:case M.PERMISSION_DENIED:case M.FAILED_PRECONDITION:case M.ABORTED:case M.OUT_OF_RANGE:case M.UNIMPLEMENTED:case M.DATA_LOSS:return!0;default:return Y(15467,{code:s})}}function Pp(s){if(s===void 0)return gn("GRPC error has no .code"),M.UNKNOWN;switch(s){case be.OK:return M.OK;case be.CANCELLED:return M.CANCELLED;case be.UNKNOWN:return M.UNKNOWN;case be.DEADLINE_EXCEEDED:return M.DEADLINE_EXCEEDED;case be.RESOURCE_EXHAUSTED:return M.RESOURCE_EXHAUSTED;case be.INTERNAL:return M.INTERNAL;case be.UNAVAILABLE:return M.UNAVAILABLE;case be.UNAUTHENTICATED:return M.UNAUTHENTICATED;case be.INVALID_ARGUMENT:return M.INVALID_ARGUMENT;case be.NOT_FOUND:return M.NOT_FOUND;case be.ALREADY_EXISTS:return M.ALREADY_EXISTS;case be.PERMISSION_DENIED:return M.PERMISSION_DENIED;case be.FAILED_PRECONDITION:return M.FAILED_PRECONDITION;case be.ABORTED:return M.ABORTED;case be.OUT_OF_RANGE:return M.OUT_OF_RANGE;case be.UNIMPLEMENTED:return M.UNIMPLEMENTED;case be.DATA_LOSS:return M.DATA_LOSS;default:return Y(39323,{code:s})}}(he=be||(be={}))[he.OK=0]="OK",he[he.CANCELLED=1]="CANCELLED",he[he.UNKNOWN=2]="UNKNOWN",he[he.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",he[he.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",he[he.NOT_FOUND=5]="NOT_FOUND",he[he.ALREADY_EXISTS=6]="ALREADY_EXISTS",he[he.PERMISSION_DENIED=7]="PERMISSION_DENIED",he[he.UNAUTHENTICATED=16]="UNAUTHENTICATED",he[he.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",he[he.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",he[he.ABORTED=10]="ABORTED",he[he.OUT_OF_RANGE=11]="OUT_OF_RANGE",he[he.UNIMPLEMENTED=12]="UNIMPLEMENTED",he[he.INTERNAL=13]="INTERNAL",he[he.UNAVAILABLE=14]="UNAVAILABLE",he[he.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vs{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),n=this.inner[t];if(n!==void 0){for(const[r,i]of n)if(this.equalsFn(r,e))return i}}has(e){return this.get(e)!==void 0}set(e,t){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return this.inner[n]=[[e,t]],void this.innerSize++;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return void(r[i]=[e,t]);r.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),n=this.inner[t];if(n===void 0)return!1;for(let r=0;r<n.length;r++)if(this.equalsFn(n[r][0],e))return n.length===1?delete this.inner[t]:n.splice(r,1),this.innerSize--,!0;return!1}forEach(e){xs(this.inner,((t,n)=>{for(const[r,i]of n)e(r,i)}))}isEmpty(){return ip(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pI=new Ne($.comparator);function ft(){return pI}const Np=new Ne($.comparator);function Zs(...s){let e=Np;for(const t of s)e=e.insert(t.key,t);return e}function bp(s){let e=Np;return s.forEach(((t,n)=>e=e.insert(t,n.overlayedDocument))),e}function On(){return gi()}function Op(){return gi()}function gi(){return new Vs((s=>s.toString()),((s,e)=>s.isEqual(e)))}const gI=new Ne($.comparator),mI=new Fe($.comparator);function ae(...s){let e=mI;for(const t of s)e=e.add(t);return e}const _I=new Fe(Be);function EI(){return _I}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function DI(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yI=new Gn([4294967295,4294967295],0);function zf(s){const e=DI().encode(s),t=new jC;return t.update(e),new Uint8Array(t.digest())}function Qf(s){const e=new DataView(s.buffer),t=e.getUint32(0,!0),n=e.getUint32(4,!0),r=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new Gn([t,n],0),new Gn([r,i],0)]}class SB{constructor(e,t,n){if(this.bitmap=e,this.padding=t,this.hashCount=n,t<0||t>=8)throw new ci(`Invalid padding: ${t}`);if(n<0)throw new ci(`Invalid hash count: ${n}`);if(e.length>0&&this.hashCount===0)throw new ci(`Invalid hash count: ${n}`);if(e.length===0&&t!==0)throw new ci(`Invalid padding when bitmap length is 0: ${t}`);this.m=8*e.length-t,this.p=Gn.fromNumber(this.m)}S(e,t,n){let r=e.add(t.multiply(Gn.fromNumber(n)));return r.compare(yI)===1&&(r=new Gn([r.getBits(0),r.getBits(1)],0)),r.modulo(this.p).toNumber()}v(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.m===0)return!1;const t=zf(e),[n,r]=Qf(t);for(let i=0;i<this.hashCount;i++){const o=this.S(n,r,i);if(!this.v(o))return!1}return!0}static create(e,t,n){const r=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new SB(i,r,t);return n.forEach((a=>o.insert(a))),o}insert(e){if(this.m===0)return;const t=zf(e),[n,r]=Qf(t);for(let i=0;i<this.hashCount;i++){const o=this.S(n,r,i);this.D(o)}}D(e){const t=Math.floor(e/8),n=e%8;this.bitmap[t]|=1<<n}}class ci extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ao{constructor(e,t,n,r,i,o){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=n,this.documentUpdates=r,this.augmentedDocumentUpdates=i,this.resolvedLimboDocuments=o}static createSynthesizedRemoteEventForCurrentChange(e,t,n){const r=new Map;return r.set(e,lo.createSynthesizedTargetChangeForCurrentChange(e,t,n)),new ao(ne.min(),r,new Ne(Be),ft(),ft(),ae())}}class lo{constructor(e,t,n,r,i){this.resumeToken=e,this.current=t,this.addedDocuments=n,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,n){return new lo(n,t,ae(),ae(),ae())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ta{constructor(e,t,n,r){this.C=e,this.removedTargetIds=t,this.key=n,this.F=r}}class Fp{constructor(e,t){this.targetId=e,this.O=t}}class Lp{constructor(e,t,n=Le.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=t,this.resumeToken=n,this.cause=r}}class Yf{constructor(e){this.targetId=e,this.M=0,this.N=$f(),this.L=Le.EMPTY_BYTE_STRING,this.B=!1,this.U=!0}get current(){return this.B}get resumeToken(){return this.L}get k(){return this.M!==0}get q(){return this.U}$(e){e.approximateByteSize()>0&&(this.U=!0,this.L=e)}K(){let e=ae(),t=ae(),n=ae();return this.N.forEach(((r,i)=>{switch(i){case 0:e=e.add(r);break;case 2:t=t.add(r);break;case 1:n=n.add(r);break;default:Y(38017,{changeType:i})}})),new lo(this.L,this.B,e,t,n)}W(){this.U=!1,this.N=$f()}G(e,t){this.U=!0,this.N=this.N.insert(e,t)}j(e){this.U=!0,this.N=this.N.remove(e)}H(){this.M+=1}J(){this.M-=1,z(this.M>=0,3241,{M:this.M,targetId:this.targetId})}Y(){this.U=!0,this.B=!0}}const Zr="WatchChangeAggregator";class II{constructor(e){this.Z=e,this.X=new Map,this.ee=ft(),this.te=Ko(),this.ne=ft(),this.re=Ko(),this.ie=new Ne(Be)}se(e){for(const t of e.C)e.F&&e.F.isFoundDocument()?this._e(t,e.F):this.oe(t,e.key,e.F);for(const t of e.removedTargetIds)this.oe(t,e.key,e.F)}ae(e){this.forEachTarget(e,(t=>{const n=this.X.get(t);if(n)switch(e.state){case 0:this.ue(t)&&n.$(e.resumeToken);break;case 1:n.J(),n.k||n.W(),n.$(e.resumeToken);break;case 2:n.J(),n.k||this.removeTarget(t);break;case 3:this.ue(t)&&(n.Y(),n.$(e.resumeToken));break;case 4:this.ue(t)&&(this.ce(t),n.$(e.resumeToken));break;default:Y(56790,{state:e.state})}else J(Zr,`handleTargetChange received targetChange for untracked target ID (${t}) with state (${e.state})`)}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.X.forEach(((n,r)=>{this.ue(r)&&t(r)}))}le(e){return ms(e)?e.getPipelineSourceType()==="documents"&&e.getPipelineDocuments()?.length===1:Sp(e)}Ee(e){const t=e.targetId,n=e.O.count,r=this.he(t);if(r){const i=r.target;if(this.le(i))if(n===0){const o=new $(ms(i)?ge.fromString(i.getPipelineDocuments()[0]):i.path);this.oe(t,o,tt.newNoDocument(o,ne.min()))}else z(n===1,20013,"Single document existence filter with count: "+n);else{const o=this.Te(t);if(o!==n){const a=this.Pe(e),c=a?this.Re(a,e,o):1;if(c!==0){this.ce(t);const B=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.ie=this.ie.insert(t,B)}}}}}Pe(e){const t=e.O.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:n="",padding:r=0},hashCount:i=0}=t;let o,a;try{o=zn(n).toUint8Array()}catch(c){if(c instanceof op)return Ut("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{a=new SB(o,r,i)}catch(c){return Ut(c instanceof ci?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return a.m===0?null:a}Re(e,t,n){return t.O.count===n-this.Ve(e,t.targetId)?0:2}Ve(e,t){const n=this.Z.getRemoteKeysForTarget(t);let r=0;return n.forEach((i=>{const o=this.Z.Ae(),a=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(a)||(this.oe(t,i,null),r++)})),r}de(e){const t=new Map;this.X.forEach(((i,o)=>{const a=this.he(o);if(a){if(i.current&&this.le(a.target)){const c=ms(a.target)?ge.fromString(a.target.getPipelineDocuments()[0]):a.target.path,B=new $(c);this.fe(B).has(o)||this.me(o,B)||this.oe(o,B,tt.newNoDocument(B,e))}i.q&&(t.set(o,i.K()),i.W())}}));let n=ae();this.re.forEach(((i,o)=>{let a=!0;o.forEachWhile((c=>{const B=this.he(c);return!B||B.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)})),a&&(n=n.add(i))})),this.ee.forEach(((i,o)=>o.setReadTime(e))),this.ne.forEach(((i,o)=>o.setReadTime(e)));const r=new ao(e,t,this.ie,this.ee,this.ne,n);return this.ee=ft(),this.te=Ko(),this.ne=ft(),this.re=Ko(),this.ie=new Ne(Be),r}_e(e,t){const n=this.X.get(e);if(!n||!this.ue(e))return void J(Zr,`addDocumentToTarget received document for unknown inactive target (${e})`);const r=this.me(e,t.key)?2:0;n.G(t.key,r),ms(this.he(e).target)&&this.he(e).target.getPipelineFlavor()!=="exact"?this.ne=this.ne.insert(t.key,t):this.ee=this.ee.insert(t.key,t),this.te=this.te.insert(t.key,this.fe(t.key).add(e)),this.re=this.re.insert(t.key,this.pe(t.key).add(e))}oe(e,t,n){const r=this.X.get(e);r&&this.ue(e)?(this.me(e,t)?r.G(t,1):r.j(t),this.re=this.re.insert(t,this.pe(t).delete(e)),this.re=this.re.insert(t,this.pe(t).add(e)),n&&(ms(this.he(e).target)&&this.he(e).target.getPipelineFlavor()!=="exact"?this.ne=this.ne.insert(t,n):this.ee=this.ee.insert(t,n))):J(Zr,`removeDocumentFromTarget received document for unknown or inactive target (${e})`)}removeTarget(e){this.X.delete(e)}Te(e){const t=this.X.get(e);if(!t)return 0;const n=t.K();return this.Z.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}H(e){let t=this.X.get(e);t||(J(Zr,`recordPendingTargetRequest set up tracking for target ID ${e}`),t=new Yf(e),this.X.set(e,t)),t.H()}pe(e){let t=this.re.get(e);return t||(t=new Fe(Be),this.re=this.re.insert(e,t)),t}fe(e){let t=this.te.get(e);return t||(t=new Fe(Be),this.te=this.te.insert(e,t)),t}ue(e){const t=this.he(e)!==null;return t||J(Zr,"Detected inactive target",e),t}he(e){const t=this.X.get(e);return t===void 0||t.k?null:this.Z.ge(e)}ce(e){this.X.set(e,new Yf(e)),this.Z.getRemoteKeysForTarget(e).forEach((t=>{this.oe(e,t,null)}))}me(e,t){return this.Z.getRemoteKeysForTarget(e).has(t)}}function Ko(){return new Ne($.comparator)}function $f(){return new Ne($.comparator)}const wI={asc:"ASCENDING",desc:"DESCENDING"},TI={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},vI={and:"AND",or:"OR"};class AI{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Gc(s,e){return s.useProto3Json||Za(e)?e:{value:e}}function Da(s,e){return s.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function PB(s){const e=Wn(s);return new Te(e.seconds,e.nanos)}function kp(s,e){return s.useProto3Json?e.toBase64():e.toUint8Array()}function na(s,e){return Da(s,e.toTimestamp())}function $t(s){return z(!!s,49232),ne.fromTimestamp(PB(s))}function NB(s,e){return Hc(s,e).canonicalString()}function Hc(s,e){const t=(function(r){return new ge(["projects",r.projectId,"databases",r.database])})(s).child("documents");return e===void 0?t:t.child(e)}function xp(s){const e=ge.fromString(s);return z(Up(e),10190,{key:e.toString()}),e}function ya(s,e){return NB(s.databaseId,e.path)}function ac(s,e){const t=xp(e);if(t.get(1)!==s.databaseId.projectId)throw new K(M.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+s.databaseId.projectId);if(t.get(3)!==s.databaseId.database)throw new K(M.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+s.databaseId.database);return new $(Vp(t))}function Mp(s,e){return NB(s.databaseId,e)}function RI(s){const e=xp(s);return e.length===4?ge.emptyPath():Vp(e)}function Uc(s){return new ge(["projects",s.databaseId.projectId,"databases",s.databaseId.database]).canonicalString()}function Vp(s){return z(s.length>4&&s.get(4)==="documents",29091,{key:s.toString()}),s.popFirst(5)}function Xf(s,e,t){return{name:ya(s,e),fields:t.value.mapValue.fields}}function SI(s,e){let t;if("targetChange"in e){e.targetChange;const n=(function(B){return B==="NO_CHANGE"?0:B==="ADD"?1:B==="REMOVE"?2:B==="CURRENT"?3:B==="RESET"?4:Y(39313,{state:B})})(e.targetChange.targetChangeType||"NO_CHANGE"),r=e.targetChange.targetIds||[],i=(function(B,h){return B.useProto3Json?(z(h===void 0||typeof h=="string",58123),Le.fromBase64String(h||"")):(z(h===void 0||h instanceof Buffer||h instanceof Uint8Array,16193),Le.fromUint8Array(h||new Uint8Array))})(s,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&(function(B){const h=B.code===void 0?M.UNKNOWN:Pp(B.code);return new K(h,B.message||"")})(o);t=new Lp(n,r,i,a||null)}else if("documentChange"in e){e.documentChange;const n=e.documentChange;n.document,n.document.name,n.document.updateTime;const r=ac(s,n.document.name),i=$t(n.document.updateTime),o=n.document.createTime?$t(n.document.createTime):ne.min(),a=new Rt({mapValue:{fields:n.document.fields}}),c=tt.newFoundDocument(r,i,o,a),B=n.targetIds||[],h=n.removedTargetIds||[];t=new ta(B,h,c.key,c)}else if("documentDelete"in e){e.documentDelete;const n=e.documentDelete;n.document;const r=ac(s,n.document),i=n.readTime?$t(n.readTime):ne.min(),o=tt.newNoDocument(r,i),a=n.removedTargetIds||[];t=new ta([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const n=e.documentRemove;n.document;const r=ac(s,n.document),i=n.removedTargetIds||[];t=new ta([],i,r,null)}else{if(!("filter"in e))return Y(11601,{ye:e});{e.filter;const n=e.filter;n.targetId;const{count:r=0,unchangedNames:i}=n,o=new dI(r,i),a=n.targetId;t=new Fp(a,o)}}return t}function PI(s,e){let t;if(e instanceof oo)t={update:Xf(s,e.key,e.value)};else if(e instanceof Ep)t={delete:ya(s,e.key)};else if(e instanceof Ms)t={update:Xf(s,e.key,e.data),updateMask:GI(e.fieldMask)};else{if(!(e instanceof zy))return Y(16599,{we:e.type});t={verify:ya(s,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map((n=>(function(i,o){const a=o.transform;if(a instanceof Ca)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof Oi)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof Fi)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof Li)return{fieldPath:o.field.canonicalString(),increment:a.l};if(a instanceof pa)return{fieldPath:o.field.canonicalString(),minimum:a.l};if(a instanceof ga)return{fieldPath:o.field.canonicalString(),maximum:a.l};throw Y(20930,{transform:o.transform})})(0,n)))),e.precondition.isNone||(t.currentDocument=(function(r,i){return i.updateTime!==void 0?{updateTime:na(r,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:Y(27497)})(s,e.precondition)),t}function NI(s,e){return s&&s.length>0?(z(e!==void 0,14353),s.map((t=>(function(r,i){let o=r.updateTime?$t(r.updateTime):$t(i);return o.isEqual(ne.min())&&(o=$t(i)),new jy(o,r.transformResults||[])})(t,e)))):[]}function bI(s,e){return{documents:[Mp(s,e.path)]}}function OI(s,e){const t={structuredQuery:{}},n=e.path;let r;e.collectionGroup!==null?(r=n,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(r=n.popLast(),t.structuredQuery.from=[{collectionId:n.lastSegment()}]),t.parent=Mp(s,r);const i=(function(B){if(B.length!==0)return Hp(tn.create(B,"and"))})(e.filters);i&&(t.structuredQuery.where=i);const o=(function(B){if(B.length!==0)return B.map((h=>(function(C){return{field:er(C.field),direction:xI(C.dir)}})(h)))})(e.orderBy);o&&(t.structuredQuery.orderBy=o);const a=Gc(s,e.limit);return a!==null&&(t.structuredQuery.limit=a),e.startAt&&(t.structuredQuery.startAt=(function(B){return{before:B.inclusive,values:B.position}})(e.startAt)),e.endAt&&(t.structuredQuery.endAt=(function(B){return{before:!B.inclusive,values:B.position}})(e.endAt)),{be:t,parent:r}}function FI(s){let e=RI(s.parent);const t=s.structuredQuery,n=t.from?t.from.length:0;let r=null;if(n>0){z(n===1,65062);const h=t.from[0];h.allDescendants?r=h.collectionId:e=e.child(h.collectionId)}let i=[];t.where&&(i=(function(f){const C=Gp(f);return C instanceof tn&&Ip(C)?C.getFilters():[C]})(t.where));let o=[];t.orderBy&&(o=(function(f){return f.map((C=>(function(I){return new Ea(tr(I.field),(function(V){switch(V){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(I.direction))})(C)))})(t.orderBy));let a=null;t.limit&&(a=(function(f){let C;return C=typeof f=="object"?f.value:f,Za(C)?null:C})(t.limit));let c=null;t.startAt&&(c=(function(f){const C=!!f.before,_=f.values||[];return new _a(_,C)})(t.startAt));let B=null;return t.endAt&&(B=(function(f){const C=!f.before,_=f.values||[];return new _a(_,C)})(t.endAt)),lI(e,r,o,i,a,"F",c,B)}function LI(s,e){const t=(function(r){switch(r){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Y(28987,{purpose:r})}})(e.purpose);return t==null?null:{"goog-listen-tags":t}}function kI(s,e){return{structuredPipeline:{pipeline:{stages:e.stages.map((t=>t._toProto(s)))}}}}function Gp(s){return s.unaryFilter!==void 0?(function(t){switch(t.unaryFilter.op){case"IS_NAN":const n=tr(t.unaryFilter.field);return Me.create(n,"==",{doubleValue:NaN});case"IS_NULL":const r=tr(t.unaryFilter.field);return Me.create(r,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=tr(t.unaryFilter.field);return Me.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=tr(t.unaryFilter.field);return Me.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return Y(61313);default:return Y(60726)}})(s):s.fieldFilter!==void 0?(function(t){return Me.create(tr(t.fieldFilter.field),(function(r){switch(r){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return Y(58110);default:return Y(50506)}})(t.fieldFilter.op),t.fieldFilter.value)})(s):s.compositeFilter!==void 0?(function(t){return tn.create(t.compositeFilter.filters.map((n=>Gp(n))),(function(r){switch(r){case"AND":return"and";case"OR":return"or";default:return Y(1026)}})(t.compositeFilter.op))})(s):Y(30097,{filter:s})}function xI(s){return wI[s]}function MI(s){return TI[s]}function VI(s){return vI[s]}function er(s){return{fieldPath:s.canonicalString()}}function tr(s){return Pt.fromServerFormat(s.fieldPath)}function Hp(s){return s instanceof Me?(function(t){if(t.op==="=="){if(Et(t.value))return{unaryFilter:{field:er(t.field),op:"IS_NAN"}};if(St(t.value))return{unaryFilter:{field:er(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(Et(t.value))return{unaryFilter:{field:er(t.field),op:"IS_NOT_NAN"}};if(St(t.value))return{unaryFilter:{field:er(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:er(t.field),op:MI(t.op),value:t.value}}})(s):s instanceof tn?(function(t){const n=t.getFilters().map((r=>Hp(r)));return n.length===1?n[0]:{compositeFilter:{op:VI(t.op),filters:n}}})(s):Y(54877,{filter:s})}function GI(s){const e=[];return s.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function Up(s){return s.length>=4&&s.get(0)==="projects"&&s.get(2)==="databases"}function Jp(s){return!!s&&typeof s._toProto=="function"&&s._protoValueType==="ProtoValue"}function xi(s,e){const t={fields:{}};return e.forEach(((n,r)=>{if(typeof r!="string")throw new Error(`Cannot encode map with non-string key: ${r}`);t.fields[r]=n._toProto(s)})),{mapValue:t}}function qp(s){return{stringValue:s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function il(s){return new AI(s,!0)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ft{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Ft(Le.fromBase64String(e))}catch(t){throw new K(M.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Ft(Le.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Ft._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(ro(e,Ft._jsonSchema))return Ft.fromBase64String(e.bytes)}}Ft._jsonSchemaVersion="firestore/bytes/1.0",Ft._jsonSchema={type:Oe("string",Ft._jsonSchemaVersion),bytes:Oe("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bB{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new K(M.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Pt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}function HI(){return new bB(Cr)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jp{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xt{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new K(M.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new K(M.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return Be(this._lat,e._lat)||Be(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Xt._jsonSchemaVersion}}static fromJSON(e){if(ro(e,Xt._jsonSchema))return new Xt(e.latitude,e.longitude)}}Xt._jsonSchemaVersion="firestore/geoPoint/1.0",Xt._jsonSchema={type:Oe("string",Xt._jsonSchemaVersion),latitude:Oe("number"),longitude:Oe("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class et{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}et.UNAUTHENTICATED=new et(null),et.GOOGLE_CREDENTIALS=new et("google-credentials-uid"),et.FIRST_PARTY=new et("first-party-uid"),et.MOCK_USER=new et("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ws{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kp{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class UI{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(et.UNAUTHENTICATED)))}shutdown(){}}class JI{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class qI{constructor(e){this.ve=e,this.currentUser=et.UNAUTHENTICATED,this.De=0,this.forceRefresh=!1,this.auth=null}start(e,t){z(this.xe===void 0,42304);let n=this.De;const r=c=>this.De!==n?(n=this.De,t(c)):Promise.resolve();let i=new ws;this.xe=()=>{this.De++,this.currentUser=this.Ce(),i.resolve(),i=new ws,e.enqueueRetryable((()=>r(this.currentUser)))};const o=()=>{const c=i;e.enqueueRetryable((async()=>{await c.promise,await r(this.currentUser)}))},a=c=>{J("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.xe&&(this.auth.addAuthTokenListener(this.xe),o())};this.ve.onInit((c=>a(c))),setTimeout((()=>{if(!this.auth){const c=this.ve.getImmediate({optional:!0});c?a(c):(J("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new ws)}}),0),o()}getToken(){const e=this.De,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((n=>this.De!==e?(J("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):n?(z(typeof n.accessToken=="string",31837,{Fe:n}),new Kp(n.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.xe&&this.auth.removeAuthTokenListener(this.xe),this.xe=void 0}Ce(){const e=this.auth&&this.auth.getUid();return z(e===null||typeof e=="string",2055,{Oe:e}),new et(e)}}class jI{constructor(e,t,n){this.Me=e,this.Ne=t,this.Le=n,this.type="FirstParty",this.user=et.FIRST_PARTY,this.Be=new Map}Ue(){return this.Le?this.Le():null}get headers(){this.Be.set("X-Goog-AuthUser",this.Me);const e=this.Ue();return e&&this.Be.set("Authorization",e),this.Ne&&this.Be.set("X-Goog-Iam-Authorization-Token",this.Ne),this.Be}}class KI{constructor(e,t,n){this.Me=e,this.Ne=t,this.Le=n}getToken(){return Promise.resolve(new jI(this.Me,this.Ne,this.Le))}start(e,t){e.enqueueRetryable((()=>t(et.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class Zf{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class WI{constructor(e,t){this.ke=t,this.forceRefresh=!1,this.appCheck=null,this.qe=null,this.$e=null,At(e)&&e.settings.appCheckToken&&(this.$e=e.settings.appCheckToken)}start(e,t){z(this.xe===void 0,3512);const n=i=>{i.error!=null&&J("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.qe;return this.qe=i.token,J("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?t(i.token):Promise.resolve()};this.xe=i=>{e.enqueueRetryable((()=>n(i)))};const r=i=>{J("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.xe&&this.appCheck.addTokenListener(this.xe)};this.ke.onInit((i=>r(i))),setTimeout((()=>{if(!this.appCheck){const i=this.ke.getImmediate({optional:!0});i?r(i):J("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.$e)return Promise.resolve(new Zf(this.$e));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((t=>t?(z(typeof t.token=="string",44558,{tokenResult:t}),this.qe=t.token,new Zf(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.xe&&this.appCheck.removeTokenListener(this.xe),this.xe=void 0}}function Wp(s){const e={};return s.timeoutSeconds!==void 0&&(e.timeoutSeconds=s.timeoutSeconds),e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zI{Ke(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ed="ConnectivityMonitor";class td{constructor(){this.Qe=()=>this.We(),this.Ge=()=>this.ze(),this.je=[],this.He()}Ke(e){this.je.push(e)}shutdown(){window.removeEventListener("online",this.Qe),window.removeEventListener("offline",this.Ge)}He(){window.addEventListener("online",this.Qe),window.addEventListener("offline",this.Ge)}We(){J(ed,"Network connectivity changed: AVAILABLE");for(const e of this.je)e(0)}ze(){J(ed,"Network connectivity changed: UNAVAILABLE");for(const e of this.je)e(1)}static Je(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Wo=null;function Jc(){return Wo===null?Wo=(function(){return 268435456+Math.round(2147483648*Math.random())})():Wo++,"0x"+Wo.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lc="RestConnection",QI={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery",ExecutePipeline:"executePipeline"};class YI{get Ye(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",n=encodeURIComponent(this.databaseId.projectId),r=encodeURIComponent(this.databaseId.database);this.Ze=t+"://"+e.host,this.Xe=`projects/${n}/databases/${r}`,this.et=this.databaseId.database===fa?`project_id=${n}`:`project_id=${n}&database_id=${r}`}tt(e,t,n,r,i){const o=Jc(),a=this.nt(e,t.toUriEncodedString());J(lc,`Sending RPC '${e}' ${o}:`,a,n);const c={"google-cloud-resource-prefix":this.Xe,"x-goog-request-params":this.et};this.rt(c,r,i);const{host:B}=new URL(a),h=Ls(B);return this.it(e,a,c,n,h).then((f=>(J(lc,`Received RPC '${e}' ${o}: `,f),f)),(f=>{throw Ut(lc,`RPC '${e}' ${o} failed with error: `,f,"url: ",a,"request:",n),f}))}st(e,t,n,r,i,o){return this.tt(e,t,n,r,i)}rt(e,t,n){if(e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+vr})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((r,i)=>e[i]=r)),n&&n.headers.forEach(((r,i)=>e[i]=r)),this.databaseInfo._customHeaders)for(const r of Object.keys(this.databaseInfo._customHeaders))e[r]=this.databaseInfo._customHeaders[r]}nt(e,t){const n=QI[e];let r=`${this.Ze}/v1/${t}:${n}`;return this.databaseInfo.apiKey&&(r=`${r}?key=${encodeURIComponent(this.databaseInfo.apiKey)}`),r}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $I{constructor(e){this._t=e._t,this.ot=e.ot}ut(e){this.ct=e}lt(e){this.Et=e}ht(e){this.Tt=e}onMessage(e){this.Pt=e}close(){this.ot()}send(e){this._t(e)}Rt(){this.ct()}It(){this.Et()}At(e){this.Tt(e)}Vt(e){this.Pt(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ze="WebChannelConnection",ei=(s,e,t)=>{s.listen(e,(n=>{try{t(n)}catch(r){setTimeout((()=>{throw r}),0)}}))};class ir extends YI{constructor(e){super(e),this.dt=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}static ft(){if(!ir.gt){const e=QC();ei(e,zC.STAT_EVENT,(t=>{t.stat===Rc.PROXY?J(Ze,"STAT_EVENT: detected buffering proxy"):t.stat===Rc.NOPROXY&&J(Ze,"STAT_EVENT: detected no buffering proxy")})),ir.gt=!0}}it(e,t,n,r,i){const o=Jc();return new Promise(((a,c)=>{const B=new KC;B.setWithCredentials(!0),B.listenOnce(WC.COMPLETE,(()=>{try{switch(B.getLastErrorCode()){case Xo.NO_ERROR:const f=B.getResponseJson();J(Ze,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(f)),a(f);break;case Xo.TIMEOUT:J(Ze,`RPC '${e}' ${o} timed out`),c(new K(M.DEADLINE_EXCEEDED,"Request time out"));break;case Xo.HTTP_ERROR:const C=B.getStatus();if(J(Ze,`RPC '${e}' ${o} failed with status:`,C,"response text:",B.getResponseText()),C>0){let _=B.getResponseJson();Array.isArray(_)&&(_=_[0]);const I=_?.error;if(I&&I.status&&I.message){const O=(function(q){const re=q.toLowerCase().replace(/_/g,"-");return Object.values(M).indexOf(re)>=0?re:M.UNKNOWN})(I.status);c(new K(O,I.message))}else c(new K(M.UNKNOWN,"Server responded with status "+B.getStatus()))}else c(new K(M.UNAVAILABLE,"Connection failed."));break;default:Y(9055,{yt:e,streamId:o,wt:B.getLastErrorCode(),bt:B.getLastError()})}}finally{J(Ze,`RPC '${e}' ${o} completed.`)}}));const h=JSON.stringify(r);J(Ze,`RPC '${e}' ${o} sending request:`,r),B.send(t,"POST",h,n,15)}))}St(e,t,n){const r=Jc(),i=[this.Ze,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=this.createWebChannelTransport(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(a.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(a.useFetchStreams=!0),this.rt(a.initMessageHeaders,t,n),a.encodeInitMessageHeaders=!0;const B=i.join("");J(Ze,`Creating RPC '${e}' stream ${r}: ${B}`,a);const h=o.createWebChannel(B,a);this.vt(h);let f=!1,C=!1;const _=new $I({_t:I=>{C?J(Ze,`Not sending because RPC '${e}' stream ${r} is closed:`,I):(f||(J(Ze,`Opening RPC '${e}' stream ${r} transport.`),h.open(),f=!0),J(Ze,`RPC '${e}' stream ${r} sending:`,I),h.send(I))},ot:()=>h.close()});return ei(h,ai.EventType.OPEN,(()=>{C||(J(Ze,`RPC '${e}' stream ${r} transport opened.`),_.Rt())})),ei(h,ai.EventType.CLOSE,(()=>{C||(C=!0,J(Ze,`RPC '${e}' stream ${r} transport closed`),_.At(),this.Dt(h))})),ei(h,ai.EventType.ERROR,(I=>{C||(C=!0,Ut(Ze,`RPC '${e}' stream ${r} transport errored. Name:`,I.name,"Message:",I.message),_.At(new K(M.UNAVAILABLE,"The operation could not be completed")))})),ei(h,ai.EventType.MESSAGE,(I=>{if(!C){const O=I.data[0];z(!!O,16349);const V=O,q=V?.error||V[0]?.error;if(q){J(Ze,`RPC '${e}' stream ${r} received error:`,q);const re=q.status;let pe=(function(ve){const A=be[ve];if(A!==void 0)return Pp(A)})(re),Re=q.message;re==="NOT_FOUND"&&Re.includes("database")&&Re.includes("does not exist")&&Re.includes(this.databaseId.database)&&Ut(`Database '${this.databaseId.database}' not found. Please check your project configuration.`),pe===void 0&&(pe=M.INTERNAL,Re="Unknown error status: "+re+" with message "+q.message),C=!0,_.At(new K(pe,Re)),h.close()}else J(Ze,`RPC '${e}' stream ${r} received:`,O),_.Vt(O)}})),ir.ft(),setTimeout((()=>{_.It()}),0),_}terminate(){this.dt.forEach((e=>e.close())),this.dt=[]}vt(e){this.dt.push(e)}Dt(e){this.dt=this.dt.filter((t=>t===e))}rt(e,t,n){super.rt(e,t,n),this.databaseInfo.apiKey&&(e["x-goog-api-key"]=this.databaseInfo.apiKey)}createWebChannelTransport(){return YC()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function XI(s){return new ir(s)}ir.gt=!1;class zp{constructor(e,t,n=1e3,r=1.5,i=6e4){this.xt=e,this.timerId=t,this.Ct=n,this.Ft=r,this.Ot=i,this.Mt=0,this.Nt=null,this.Lt=Date.now(),this.reset()}reset(){this.Mt=0}Bt(){this.Mt=this.Ot}Ut(e){this.cancel();const t=Math.floor(this.Mt+this.kt()),n=Math.max(0,Date.now()-this.Lt),r=Math.max(0,t-n);r>0&&J("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.Mt} ms, delay with jitter: ${t} ms, last attempt: ${n} ms ago)`),this.Nt=this.xt.enqueueAfterDelay(this.timerId,r,(()=>(this.Lt=Date.now(),e()))),this.Mt*=this.Ft,this.Mt<this.Ct&&(this.Mt=this.Ct),this.Mt>this.Ot&&(this.Mt=this.Ot)}qt(){this.Nt!==null&&(this.Nt.skipDelay(),this.Nt=null)}cancel(){this.Nt!==null&&(this.Nt.cancel(),this.Nt=null)}kt(){return(Math.random()-.5)*this.Mt}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nd="PersistentStream";class Qp{constructor(e,t,n,r,i,o,a,c){this.xt=e,this.$t=n,this.Kt=r,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.Qt=0,this.Wt=null,this.Gt=null,this.stream=null,this.zt=0,this.jt=new zp(e,t)}Ht(){return this.state===1||this.state===5||this.Jt()}Jt(){return this.state===2||this.state===3}start(){this.zt=0,this.state!==4?this.auth():this.Yt()}async stop(){this.Ht()&&await this.close(0)}Zt(){this.state=0,this.jt.reset()}Xt(){this.Jt()&&this.Wt===null&&(this.Wt=this.xt.enqueueAfterDelay(this.$t,6e4,(()=>this.en())))}tn(e){this.nn(),this.stream.send(e)}async en(){if(this.Jt())return this.close(0)}nn(){this.Wt&&(this.Wt.cancel(),this.Wt=null)}rn(){this.Gt&&(this.Gt.cancel(),this.Gt=null)}async close(e,t){this.nn(),this.rn(),this.jt.cancel(),this.Qt++,e!==4?this.jt.reset():t&&t.code===M.RESOURCE_EXHAUSTED?(gn(t.toString()),gn("Using maximum backoff delay to prevent overloading the backend."),this.jt.Bt()):t&&t.code===M.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.sn(),this.stream.close(),this.stream=null),this.state=e,await this.listener.ht(t)}sn(){}auth(){this.state=1;const e=this._n(this.Qt),t=this.Qt;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([n,r])=>{this.Qt===t&&this.an(n,r)}),(n=>{e((()=>{const r=new K(M.UNKNOWN,"Fetching auth token failed: "+n.message);return this.un(r)}))}))}an(e,t){const n=this._n(this.Qt);this.stream=this.cn(e,t),this.stream.ut((()=>{n((()=>this.listener.ut()))})),this.stream.lt((()=>{n((()=>(this.state=2,this.Gt=this.xt.enqueueAfterDelay(this.Kt,1e4,(()=>(this.Jt()&&(this.state=3),Promise.resolve()))),this.listener.lt())))})),this.stream.ht((r=>{n((()=>this.un(r)))})),this.stream.onMessage((r=>{n((()=>++this.zt==1?this.En(r):this.onNext(r)))}))}Yt(){this.state=5,this.jt.Ut((async()=>{this.state=0,this.start()}))}un(e){return J(nd,`close with error: ${e}`),this.stream=null,this.close(4,e)}_n(e){return t=>{this.xt.enqueueAndForget((()=>this.Qt===e?t():(J(nd,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class ZI extends Qp{constructor(e,t,n,r,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,n,r,o),this.serializer=i}cn(e,t){return this.connection.St("Listen",e,t)}En(e){return this.onNext(e)}onNext(e){this.jt.reset();const t=SI(this.serializer,e),n=(function(i){if(!("targetChange"in i))return ne.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?ne.min():o.readTime?$t(o.readTime):ne.min()})(e);return this.listener.hn(t,n)}Tn(e){const t={};t.database=Uc(this.serializer),t.addTarget=(function(i,o){let a;const c=o.target;if(a=ms(c)?{pipelineQuery:kI(i,c)}:Sp(c)?{documents:bI(i,c)}:{query:OI(i,c).be},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=kp(i,o.resumeToken);const B=Gc(i,o.expectedCount);B!==null&&(a.expectedCount=B)}else if(o.snapshotVersion.compareTo(ne.min())>0){a.readTime=Da(i,o.snapshotVersion.toTimestamp());const B=Gc(i,o.expectedCount);B!==null&&(a.expectedCount=B)}return a})(this.serializer,e);const n=LI(this.serializer,e);n&&(t.labels=n),this.tn(t)}Pn(e){const t={};t.database=Uc(this.serializer),t.removeTarget=e,this.tn(t)}}class ew extends Qp{constructor(e,t,n,r,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,n,r,o),this.serializer=i}get Rn(){return this.zt>0}start(){this.lastStreamToken=void 0,super.start()}sn(){this.Rn&&this.In([])}cn(e,t){return this.connection.St("Write",e,t)}En(e){return z(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,z(!e.writeResults||e.writeResults.length===0,55816),this.listener.An()}onNext(e){z(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.jt.reset();const t=NI(e.writeResults,e.commitTime),n=$t(e.commitTime);return this.listener.Vn(n,t)}dn(){const e={};e.database=Uc(this.serializer),this.tn(e)}In(e){const t={streamToken:this.lastStreamToken,writes:e.map((n=>PI(this.serializer,n)))};this.tn(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tw{}class nw extends tw{constructor(e,t,n,r){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=n,this.serializer=r,this.fn=!1}mn(){if(this.fn)throw new K(M.FAILED_PRECONDITION,"The client has already been terminated.")}tt(e,t,n,r){return this.mn(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,o])=>this.connection.tt(e,Hc(t,n),r,i,o))).catch((i=>{throw i.name==="FirebaseError"?(i.code===M.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new K(M.UNKNOWN,i.toString())}))}st(e,t,n,r,i){return this.mn(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([o,a])=>this.connection.st(e,Hc(t,n),r,o,a,i))).catch((o=>{throw o.name==="FirebaseError"?(o.code===M.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new K(M.UNKNOWN,o.toString())}))}terminate(){this.fn=!0,this.connection.terminate()}}function sw(s,e,t,n){return new nw(s,e,t,n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rw="ComponentProvider",sd=new Map;function iw(s,e,t,n,r){return new ky(s,e,t,r.host,r.ssl,r.experimentalForceLongPolling,r.experimentalAutoDetectLongPolling,Wp(r.experimentalLongPollingOptions),r.useFetchStreams,r.isUsingEmulator,n,r._customHeaders,r.grpcFlowControlWindow)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rd={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Yp=41943040;class ut{static withCacheSize(e){return new ut(e,ut.DEFAULT_COLLECTION_PERCENTILE,ut.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,n){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=n}}ut.DEFAULT_COLLECTION_PERCENTILE=10,ut.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,ut.DEFAULT=new ut(Yp,ut.DEFAULT_COLLECTION_PERCENTILE,ut.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),ut.DISABLED=new ut(-1,0,0);/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ol{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=n=>this.pn(n),this.gn=n=>t.writeSequenceNumber(n))}pn(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.gn&&this.gn(e),e}}ol.yn=-1;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ow="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class aw{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ar(s){if(s.code!==M.FAILED_PRECONDITION||s.message!==ow)throw s;J("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&Y(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new k(((n,r)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(n,r)},this.catchCallback=i=>{this.wrapFailure(t,i).next(n,r)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof k?t:k.resolve(t)}catch(t){return k.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):k.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):k.reject(t)}static resolve(e){return new k(((t,n)=>{t(e)}))}static reject(e){return new k(((t,n)=>{n(e)}))}static waitFor(e){return new k(((t,n)=>{let r=0,i=0,o=!1;e.forEach((a=>{++r,a.next((()=>{++i,o&&i===r&&t()}),(c=>n(c)))})),o=!0,i===r&&t()}))}static or(e){let t=k.resolve(!1);for(const n of e)t=t.next((r=>r?k.resolve(r):n()));return t}static forEach(e,t){const n=[];return e.forEach(((r,i)=>{n.push(t.call(this,r,i))})),this.waitFor(n)}static mapArray(e,t){return new k(((n,r)=>{const i=e.length,o=new Array(i);let a=0;for(let c=0;c<i;c++){const B=c;t(e[B]).next((h=>{o[B]=h,++a,a===i&&n(o)}),(h=>r(h)))}}))}static doWhile(e,t){return new k(((n,r)=>{const i=()=>{e()===!0?t().next((()=>{i()}),r):n()};i()}))}}function lw(s){const e=s.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function Rr(s){return s.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const id="LruGarbageCollector",cw=1048576;function od([s,e],[t,n]){const r=Be(s,t);return r===0?Be(e,n):r}class Bw{constructor(e){this.Jn=e,this.buffer=new Fe(od),this.Yn=0}Zn(){return++this.Yn}Xn(e){const t=[e,this.Zn()];if(this.buffer.size<this.Jn)this.buffer=this.buffer.add(t);else{const n=this.buffer.last();od(t,n)<0&&(this.buffer=this.buffer.delete(n).add(t))}}get maxValue(){return this.buffer.last()[0]}}class uw{constructor(e,t,n){this.garbageCollector=e,this.asyncQueue=t,this.localStore=n,this.er=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.tr(6e4)}stop(){this.er&&(this.er.cancel(),this.er=null)}get started(){return this.er!==null}tr(e){J(id,`Garbage collection scheduled in ${e}ms`),this.er=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.er=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){Rr(t)?J(id,"Ignoring IndexedDB error during garbage collection: ",t):await Ar(t)}await this.tr(3e5)}))}}class hw{constructor(e,t){this.nr=e,this.params=t}calculateTargetCount(e,t){return this.nr.rr(e).next((n=>Math.floor(t/100*n)))}nthSequenceNumber(e,t){if(t===0)return k.resolve(ol.yn);const n=new Bw(t);return this.nr.forEachTarget(e,(r=>n.Xn(r.sequenceNumber))).next((()=>this.nr.ir(e,(r=>n.Xn(r))))).next((()=>n.maxValue))}removeTargets(e,t,n){return this.nr.removeTargets(e,t,n)}removeOrphanedDocuments(e,t){return this.nr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(J("LruGarbageCollector","Garbage collection skipped; disabled"),k.resolve(rd)):this.getCacheSize(e).next((n=>n<this.params.cacheSizeCollectionThreshold?(J("LruGarbageCollector",`Garbage collection skipped; Cache size ${n} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),rd):this.sr(e,t)))}getCacheSize(e){return this.nr.getCacheSize(e)}sr(e,t){let n,r,i,o,a,c,B;const h=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((f=>(f>this.params.maximumSequenceNumbersToCollect?(J("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${f}`),r=this.params.maximumSequenceNumbersToCollect):r=f,o=Date.now(),this.nthSequenceNumber(e,r)))).next((f=>(n=f,a=Date.now(),this.removeTargets(e,n,t)))).next((f=>(i=f,c=Date.now(),this.removeOrphanedDocuments(e,n)))).next((f=>(B=Date.now(),$s()<=ce.DEBUG&&J("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-h}ms
	Determined least recently used ${r} in `+(a-o)+`ms
	Removed ${i} targets in `+(c-a)+`ms
	Removed ${f} documents in `+(B-c)+`ms
Total Duration: ${B-h}ms`),k.resolve({didRun:!0,sequenceNumbersCollected:r,targetsRemoved:i,documentsRemoved:f}))))}}function fw(s,e){return new hw(s,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $p="firestore.googleapis.com",ad=!0;class ld{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new K(M.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=$p,this.ssl=ad}else this.host=e.host,this.ssl=e.ssl??ad;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e._customHeaders&&(this._customHeaders={...e._customHeaders}),e.cacheSizeBytes===void 0)this.cacheSizeBytes=Yp;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<cw)throw new K(M.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}if(Fy("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Wp(e.experimentalLongPollingOptions??{}),(function(n){if(n.timeoutSeconds!==void 0){if(isNaN(n.timeoutSeconds))throw new K(M.INVALID_ARGUMENT,`invalid long polling timeout: ${n.timeoutSeconds} (must not be NaN)`);if(n.timeoutSeconds<5)throw new K(M.INVALID_ARGUMENT,`invalid long polling timeout: ${n.timeoutSeconds} (minimum allowed value is 5)`);if(n.timeoutSeconds>30)throw new K(M.INVALID_ARGUMENT,`invalid long polling timeout: ${n.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams,e.grpcFlowControlWindow!==void 0){if(typeof e.grpcFlowControlWindow!="number"||e.grpcFlowControlWindow<=0||e.grpcFlowControlWindow>2147483647||!Number.isInteger(e.grpcFlowControlWindow))throw new K(M.INVALID_ARGUMENT,"grpcFlowControlWindow must be a positive integer and cannot exceed 2147483647");this.grpcFlowControlWindow=e.grpcFlowControlWindow}}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(n,r){return n.timeoutSeconds===r.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams&&this.grpcFlowControlWindow===e.grpcFlowControlWindow&&(function(n,r){if(n===r)return!0;if(!n||!r)return!1;const i=Object.keys(n),o=Object.keys(r);if(i.length!==o.length)return!1;for(const a of i)if(n[a]!==r[a])return!1;return!0})(this._customHeaders,e._customHeaders)}}let OB=class{constructor(e,t,n,r){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=n,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new ld({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new K(M.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new K(M.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new ld(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(n){if(!n)return new UI;switch(n.type){case"firstParty":return new KI(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new K(M.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(t){const n=sd.get(t);n&&(J(rw,"Removing Datastore"),sd.delete(t),n.terminate())})(this),Promise.resolve()}};function dw(s,e,t,n={}){s=rr(s,OB);const r=Ls(e),i=s._getSettings(),o={...i,emulatorOptions:s._getEmulatorOptions()},a=`${e}:${t}`;r&&CB(`https://${a}`),i.host!==$p&&i.host!==a&&Ut("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const c={...i,host:a,ssl:r,emulatorOptions:n};if(!jn(c,o)&&(s._setSettings(c),n.mockUserToken)){let B,h;if(typeof n.mockUserToken=="string")B=n.mockUserToken,h=et.MOCK_USER;else{B=MC(n.mockUserToken,s._app?.options.projectId);const f=n.mockUserToken.sub||n.mockUserToken.user_id;if(!f)throw new K(M.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");h=new et(f)}s._authCredentials=new JI(new Kp(B,h))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class al{constructor(e,t,n){this.converter=t,this._query=n,this.type="query",this.firestore=e}withConverter(e){return new al(this.firestore,e,this._query)}}class He{constructor(e,t,n){this.converter=t,this._key=n,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Mi(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new He(this.firestore,e,this._key)}toJSON(){return{type:He._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,n){if(ro(t,He._jsonSchema))return new He(e,n||null,new $(ge.fromString(t.referencePath)))}}He._jsonSchemaVersion="firestore/documentReference/1.0",He._jsonSchema={type:Oe("string",He._jsonSchemaVersion),referencePath:Oe("string")};class Mi extends al{constructor(e,t,n){super(e,t,AB(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new He(this.firestore,null,new $(e))}withConverter(e){return new Mi(this.firestore,e,this._path)}}function X0(s,e,...t){if(s=Ye(s),arguments.length===1&&(e=DB.newId()),Oy("doc","path",e),s instanceof OB){const n=ge.fromString(e,...t);return Lf(n),new He(s,null,new $(n))}{if(!(s instanceof He||s instanceof Mi))throw new K(M.INVALID_ARGUMENT,"Expected first argument to doc() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const n=s._path.child(ge.fromString(e,...t));return Lf(n),new He(s.firestore,s instanceof Mi?s.converter:null,new $(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pt{constructor(e){this._values=(e||[]).map((t=>t))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(n,r){if(n.length!==r.length)return!1;for(let i=0;i<n.length;++i)if(n[i]!==r[i])return!1;return!0})(this._values,e._values)}toJSON(){return{type:pt._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(ro(e,pt._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((t=>typeof t=="number")))return new pt(e.vectorValues);throw new K(M.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}pt._jsonSchemaVersion="firestore/vectorValue/1.0",pt._jsonSchema={type:Oe("string",pt._jsonSchemaVersion),vectorValues:Oe("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cw=/^__.*__$/;class pw{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return this.fieldMask!==null?new Ms(e,this.data,this.fieldMask,t,this.fieldTransforms):new oo(e,this.data,t,this.fieldTransforms)}}function Xp(s){switch(s){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Y(40011,{dataSource:s})}}class FB{constructor(e,t,n,r,i,o){this.settings=e,this.databaseId=t,this.serializer=n,this.ignoreUndefinedProperties=r,i===void 0&&this.validatePath(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get dataSource(){return this.settings.dataSource}contextWith(e){return new FB({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}childContextForField(e){const t=this.path?.child(e),n=this.contextWith({path:t,arrayElement:!1});return n.validatePathSegment(e),n}childContextForFieldPath(e){const t=this.path?.child(e),n=this.contextWith({path:t,arrayElement:!1});return n.validatePath(),n}childContextForArray(e){return this.contextWith({path:void 0,arrayElement:!0})}createError(e){return Ia(e,this.settings.methodName,this.settings.hasConverter||!1,this.path,this.settings.targetDoc)}contains(e){return this.fieldMask.find((t=>e.isPrefixOf(t)))!==void 0||this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))!==void 0}validatePath(){if(this.path)for(let e=0;e<this.path.length;e++)this.validatePathSegment(this.path.get(e))}validatePathSegment(e){if(e.length===0)throw this.createError("Document fields must not be empty");if(Xp(this.dataSource)&&Cw.test(e))throw this.createError('Document fields cannot begin and end with "__"')}}class gw{constructor(e,t,n){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=n||il(e)}createContext(e,t,n,r=!1){return new FB({dataSource:e,methodName:t,targetDoc:n,path:Pt.emptyPath(),arrayElement:!1,hasConverter:r},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function mw(s){const e=s._freezeSettings(),t=il(s._databaseId);return new gw(s._databaseId,!!e.ignoreUndefinedProperties,t)}function _w(s,e,t,n,r,i={}){const o=s.createContext(i.merge||i.mergeFields?2:0,e,t,r);tg("Data must be an object, but it was:",o,n);const a=Zp(n,o);let c,B;if(i.merge)c=new xt(o.fieldMask),B=o.fieldTransforms;else if(i.mergeFields){const h=[];for(const f of i.mergeFields){const C=ll(e,f,t);if(!o.contains(C))throw new K(M.INVALID_ARGUMENT,`Field '${C}' is specified in your field mask but missing from your input data.`);yw(h,C)||h.push(C)}c=new xt(h),B=o.fieldTransforms.filter((f=>c.covers(f.field)))}else c=null,B=o.fieldTransforms;return new pw(new Rt(a),c,B)}function Vi(s,e,t){if(eg(s=Ye(s)))return tg("Unsupported field value:",e,s),Zp(s,e);if(s instanceof jp)return(function(r,i){if(!Xp(i.dataSource))throw i.createError(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.createError(`${r._methodName}() is not currently supported inside arrays`);const o=r._toFieldTransform(i);o&&i.fieldTransforms.push(o)})(s,e),null;if(s===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),s instanceof Array){if(e.settings.arrayElement&&e.dataSource!==4)throw e.createError("Nested arrays are not supported");return(function(r,i){const o=[];let a=0;for(const c of r){let B=Vi(c,i.childContextForArray(a));B==null&&(B={nullValue:"NULL_VALUE"}),o.push(B),a++}return{arrayValue:{values:o}}})(s,e)}return(function(r,i,o){if((r=Ye(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return TB(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const a=Te.fromDate(r);return{timestampValue:Da(i.serializer,a)}}if(r instanceof Te){const a=new Te(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Da(i.serializer,a)}}if(r instanceof Xt)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Ft)return{bytesValue:kp(i.serializer,r._byteString)};if(r instanceof He){const a=i.databaseId,c=r.firestore._databaseId;if(!c.isEqual(a))throw i.createError(`Document reference is for database ${c.projectId}/${c.database} but should be for database ${a.projectId}/${a.database}`);return{referenceValue:NB(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof pt)return(function(c,B){const h=c instanceof pt?c.toArray():c;return{mapValue:{fields:{[up]:{stringValue:hp},[Ni]:{arrayValue:{values:h.map((C=>{if(typeof C!="number")throw B.createError("VectorValues must only contain numeric values.");return el(B.serializer,C)}))}}}}}})(r,i);if(Jp(r))return r._toProto(i.serializer);throw i.createError(`Unsupported field value: ${yB(r)}`)})(s,e)}function Zp(s,e){const t={};return ip(s)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):xs(s,((n,r)=>{const i=Vi(r,e.childContextForField(n));i!=null&&(t[n]=i)})),{mapValue:{fields:t}}}function eg(s){return!(typeof s!="object"||s===null||s instanceof Array||s instanceof Date||s instanceof Te||s instanceof Xt||s instanceof Ft||s instanceof He||s instanceof jp||s instanceof pt||Jp(s))}function tg(s,e,t){if(!eg(t)||!so(t)){const n=yB(t);throw n==="an object"?e.createError(s+" a custom object"):e.createError(s+" "+n)}}function ll(s,e,t){if((e=Ye(e))instanceof bB)return e._internalPath;if(typeof e=="string")return Dw(s,e);throw Ia("Field path arguments must be of type string or ",s,!1,void 0,t)}const Ew=new RegExp("[~\\*/\\[\\]]");function Dw(s,e,t){if(e.search(Ew)>=0)throw Ia(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,s,!1,void 0,t);try{return new bB(...e.split("."))._internalPath}catch{throw Ia(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,s,!1,void 0,t)}}function Ia(s,e,t,n,r){const i=n&&!n.isEmpty(),o=r!==void 0;let a=`Function ${e}() called with invalid data`;t&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${n}`),o&&(c+=` in document ${r}`),c+=")"),new K(M.INVALID_ARGUMENT,a+s+c)}function yw(s,e){return s.some((t=>t.isEqual(e)))}function Iw(s){return typeof s._readUserData=="function"}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rt{constructor(e){this.optionDefinitions=e}_getKnownOptions(e,t){const n=Rt.empty();for(const r in this.optionDefinitions)if(this.optionDefinitions.hasOwnProperty(r)){const i=this.optionDefinitions[r];if(r in e){const o=e[r];let a;i.nestedOptions&&so(o)?a={mapValue:{fields:new rt(i.nestedOptions).getOptionsProto(t,o)}}:o&&(a=Vi(o,t)??void 0),a&&n.set(Pt.fromServerFormat(i.serverName),a)}}return n}getOptionsProto(e,t,n){const r=this._getKnownOptions(t,e);if(n){const i=new Map(by(n,((o,a)=>[Pt.fromServerFormat(a),o!==void 0?Vi(o,e):null])));r.setAll(i)}return r.value.mapValue.fields??{}}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ww(s){return typeof s=="object"&&s!==null&&!!("nullValue"in s&&(s.nullValue===null||s.nullValue==="NULL_VALUE")||"booleanValue"in s&&(s.booleanValue===null||typeof s.booleanValue=="boolean")||"integerValue"in s&&(s.integerValue===null||typeof s.integerValue=="number"||typeof s.integerValue=="string")||"doubleValue"in s&&(s.doubleValue===null||typeof s.doubleValue=="number")||"timestampValue"in s&&(s.timestampValue===null||(function(t){return typeof t=="object"&&t!==null&&"seconds"in t&&(t.seconds===null||typeof t.seconds=="number"||typeof t.seconds=="string")&&"nanos"in t&&(t.nanos===null||typeof t.nanos=="number")})(s.timestampValue))||"stringValue"in s&&(s.stringValue===null||typeof s.stringValue=="string")||"bytesValue"in s&&(s.bytesValue===null||s.bytesValue instanceof Uint8Array)||"referenceValue"in s&&(s.referenceValue===null||typeof s.referenceValue=="string")||"geoPointValue"in s&&(s.geoPointValue===null||(function(t){return typeof t=="object"&&t!==null&&"latitude"in t&&(t.latitude===null||typeof t.latitude=="number")&&"longitude"in t&&(t.longitude===null||typeof t.longitude=="number")})(s.geoPointValue))||"arrayValue"in s&&(s.arrayValue===null||(function(t){return typeof t=="object"&&t!==null&&!(!("values"in t)||t.values!==null&&!Array.isArray(t.values))})(s.arrayValue))||"mapValue"in s&&(s.mapValue===null||(function(t){return typeof t=="object"&&t!==null&&!(!("fields"in t)||t.fields!==null&&!so(t.fields))})(s.mapValue))||"fieldReferenceValue"in s&&(s.fieldReferenceValue===null||typeof s.fieldReferenceValue=="string")||"functionValue"in s&&(s.functionValue===null||(function(t){return typeof t=="object"&&t!==null&&!(!("name"in t)||t.name!==null&&typeof t.name!="string"||!("args"in t)||t.args!==null&&!Array.isArray(t.args))})(s.functionValue))||"pipelineValue"in s&&(s.pipelineValue===null||(function(t){return typeof t=="object"&&t!==null&&!(!("stages"in t)||t.stages!==null&&!Array.isArray(t.stages))})(s.pipelineValue)))}function Tw(s){return new pt(s)}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function G(s){let e;return s instanceof Gs?s:(e=so(s)?Nw(s):s instanceof Array?bw(s):ng(s,void 0),e)}function cc(s){if(s instanceof Gs)return s;if(s instanceof pt)return Gi(s);if(Array.isArray(s))return Gi(Tw(s));throw new Error("Unsupported value: "+typeof s)}function LB(s){return Vy(s)?Rw(s):G(s)}class Gs{constructor(){this._protoValueType="ProtoValue"}add(e){return new L("add",[this,G(e)],"add")}asBoolean(){if(this instanceof $n)return this;if(this instanceof Sr)return new rg(this);if(this instanceof co)return new Pw(this);if(this instanceof L)return new sg(this);throw new K("invalid-argument",`Conversion of type ${typeof this} to BooleanExpression not supported.`)}subtract(e){return new L("subtract",[this,G(e)],"subtract")}multiply(e){return new L("multiply",[this,G(e)],"multiply")}divide(e){return new L("divide",[this,G(e)],"divide")}mod(e){return new L("mod",[this,G(e)],"mod")}equal(e){return new L("equal",[this,G(e)],"equal").asBoolean()}notEqual(e){return new L("not_equal",[this,G(e)],"notEqual").asBoolean()}lessThan(e){return new L("less_than",[this,G(e)],"lessThan").asBoolean()}lessThanOrEqual(e){return new L("less_than_or_equal",[this,G(e)],"lessThanOrEqual").asBoolean()}greaterThan(e){return new L("greater_than",[this,G(e)],"greaterThan").asBoolean()}greaterThanOrEqual(e){return new L("greater_than_or_equal",[this,G(e)],"greaterThanOrEqual").asBoolean()}arrayConcat(e,...t){const n=[e,...t].map((r=>G(r)));return new L("array_concat",[this,...n],"arrayConcat")}arrayContains(e){return new L("array_contains",[this,G(e)],"arrayContains").asBoolean()}arrayContainsAll(e){const t=Array.isArray(e)?new Bi(e.map(G),"arrayContainsAll"):e;return new L("array_contains_all",[this,t],"arrayContainsAll").asBoolean()}arrayContainsAny(e){const t=Array.isArray(e)?new Bi(e.map(G),"arrayContainsAny"):e;return new L("array_contains_any",[this,t],"arrayContainsAny").asBoolean()}arrayReverse(){return new L("array_reverse",[this])}arrayLength(){return new L("array_length",[this],"arrayLength")}equalAny(e){const t=Array.isArray(e)?new Bi(e.map(G),"equalAny"):e;return new L("equal_any",[this,t],"equalAny").asBoolean()}notEqualAny(e){const t=Array.isArray(e)?new Bi(e.map(G),"notEqualAny"):e;return new L("not_equal_any",[this,t],"notEqualAny").asBoolean()}exists(){return new L("exists",[this],"exists").asBoolean()}charLength(){return new L("char_length",[this],"charLength")}like(e){return new L("like",[this,G(e)],"like").asBoolean()}regexContains(e){return new L("regex_contains",[this,G(e)],"regexContains").asBoolean()}regexFind(e){return new L("regex_find",[this,G(e)],"regexFind")}regexFindAll(e){return new L("regex_find_all",[this,G(e)],"regexFindAll")}regexMatch(e){return new L("regex_match",[this,G(e)],"regexMatch").asBoolean()}stringContains(e){return new L("string_contains",[this,G(e)],"stringContains").asBoolean()}startsWith(e){return new L("starts_with",[this,G(e)],"startsWith").asBoolean()}endsWith(e){return new L("ends_with",[this,G(e)],"endsWith").asBoolean()}toLower(){return new L("to_lower",[this],"toLower")}toUpper(){return new L("to_upper",[this],"toUpper")}trim(e){const t=[this];return e&&t.push(G(e)),new L("trim",t,"trim")}ltrim(e){const t=[this];return e&&t.push(G(e)),new L("ltrim",t,"ltrim")}rtrim(e){const t=[this];return e&&t.push(G(e)),new L("rtrim",t,"rtrim")}type(){return new L("type",[this])}isType(e){return new L("is_type",[this,Gi(e)],"isType").asBoolean()}stringConcat(e,...t){const n=[e,...t].map(G);return new L("string_concat",[this,...n],"stringConcat")}stringIndexOf(e){return new L("string_index_of",[this,G(e)],"stringIndexOf")}stringRepeat(e){return new L("string_repeat",[this,G(e)],"stringRepeat")}stringReplaceAll(e,t){return new L("string_replace_all",[this,G(e),G(t)],"stringReplaceAll")}stringReplaceOne(e,t){return new L("string_replace_one",[this,G(e),G(t)],"stringReplaceOne")}concat(e,...t){const n=[e,...t].map(G);return new L("concat",[this,...n],"concat")}reverse(){return new L("reverse",[this],"reverse")}arrayFilter(e,t){return new L("array_filter",[this,G(e),t],"arrayFilter")}arrayTransform(e,t){return new L("array_transform",[this,G(e),t],"arrayTransform")}arrayTransformWithIndex(e,t,n){return new L("array_transform",[this,G(e),G(t),n],"arrayTransformWithIndex")}arraySlice(e,t){const n=[this,G(e)];return t!==void 0&&n.push(G(t)),new L("array_slice",n,"arraySlice")}arrayFirst(){return new L("array_first",[this],"arrayFirst")}arrayFirstN(e){return new L("array_first_n",[this,G(e)],"arrayFirstN")}arrayLast(){return new L("array_last",[this],"arrayLast")}arrayLastN(e){return new L("array_last_n",[this,G(e)],"arrayLastN")}arrayMaximum(){return new L("maximum",[this],"arrayMaximum")}arrayMaximumN(e){return new L("maximum_n",[this,G(e)],"arrayMaximumN")}arrayMinimum(){return new L("minimum",[this],"arrayMinimum")}arrayMinimumN(e){return new L("minimum_n",[this,G(e)],"arrayMinimumN")}arrayIndexOf(e){return new L("array_index_of",[this,G(e),G("first")],"arrayIndexOf")}arrayLastIndexOf(e){return new L("array_index_of",[this,G(e),G("last")],"arrayLastIndexOf")}arrayIndexOfAll(e){return new L("array_index_of_all",[this,G(e)],"arrayIndexOfAll")}byteLength(){return new L("byte_length",[this],"byteLength")}ceil(){return new L("ceil",[this])}floor(){return new L("floor",[this])}abs(){return new L("abs",[this])}exp(){return new L("exp",[this])}mapGet(e){return new L("map_get",[this,Gi(e)],"mapGet")}mapSet(e,t,...n){const r=[this,G(e),G(t),...n.map(G)];return new L("map_set",r,"mapSet")}mapKeys(){return new L("map_keys",[this],"mapKeys")}mapValues(){return new L("map_values",[this],"mapValues")}mapEntries(){return new L("map_entries",[this],"mapEntries")}getField(e){return new L("get_field",[this,G(e)],"get_field")}count(){return vt._create("count",[this],"count")}sum(){return vt._create("sum",[this],"sum")}average(){return vt._create("average",[this],"average")}minimum(){return vt._create("minimum",[this],"minimum")}maximum(){return vt._create("maximum",[this],"maximum")}first(){return vt._create("first",[this],"first")}last(){return vt._create("last",[this],"last")}arrayAgg(){return vt._create("array_agg",[this],"arrayAgg")}arrayAggDistinct(){return vt._create("array_agg_distinct",[this],"arrayAggDistinct")}countDistinct(){return vt._create("count_distinct",[this],"countDistinct")}logicalMaximum(e,...t){const n=[e,...t];return new L("maximum",[this,...n.map(G)],"logicalMaximum")}logicalMinimum(e,...t){const n=[e,...t];return new L("minimum",[this,...n.map(G)],"minimum")}vectorLength(){return new L("vector_length",[this],"vectorLength")}cosineDistance(e){return new L("cosine_distance",[this,cc(e)],"cosineDistance")}dotProduct(e){return new L("dot_product",[this,cc(e)],"dotProduct")}euclideanDistance(e){return new L("euclidean_distance",[this,cc(e)],"euclideanDistance")}unixMicrosToTimestamp(){return new L("unix_micros_to_timestamp",[this],"unixMicrosToTimestamp")}timestampToUnixMicros(){return new L("timestamp_to_unix_micros",[this],"timestampToUnixMicros")}unixMillisToTimestamp(){return new L("unix_millis_to_timestamp",[this],"unixMillisToTimestamp")}timestampToUnixMillis(){return new L("timestamp_to_unix_millis",[this],"timestampToUnixMillis")}unixSecondsToTimestamp(){return new L("unix_seconds_to_timestamp",[this],"unixSecondsToTimestamp")}timestampToUnixSeconds(){return new L("timestamp_to_unix_seconds",[this],"timestampToUnixSeconds")}timestampAdd(e,t){return new L("timestamp_add",[this,G(e),G(t)],"timestampAdd")}timestampSubtract(e,t){return new L("timestamp_subtract",[this,G(e),G(t)],"timestampSubtract")}timestampDiff(e,t){return new L("timestamp_diff",[this,LB(e),G(t)],"timestampDiff")}timestampExtract(e,t){const n=[this,G(e)];return t&&n.push(G(t)),new L("timestamp_extract",n,"timestampExtract")}documentId(){return new L("document_id",[this],"documentId")}parent(){return new L("parent",[this],"parent")}substring(e,t){const n=G(e);return new L("substring",t===void 0?[this,n]:[this,n,G(t)],"substring")}arrayGet(e){return new L("array_get",[this,G(e)],"arrayGet")}isError(){return new L("is_error",[this],"isError").asBoolean()}ifError(e){const t=new L("if_error",[this,G(e)],"ifError");return e instanceof $n?t.asBoolean():t}isAbsent(){return new L("is_absent",[this],"isAbsent").asBoolean()}mapRemove(e){return new L("map_remove",[this,G(e)],"mapRemove")}mapMerge(e,...t){const n=G(e),r=t.map(G);return new L("map_merge",[this,n,...r],"mapMerge")}pow(e){return new L("pow",[this,G(e)])}trunc(e){return e===void 0?new L("trunc",[this]):new L("trunc",[this,G(e)],"trunc")}round(e){return e===void 0?new L("round",[this]):new L("round",[this,G(e)],"round")}collectionId(){return new L("collection_id",[this])}length(){return new L("length",[this])}ln(){return new L("ln",[this])}sqrt(){return new L("sqrt",[this])}stringReverse(){return new L("string_reverse",[this])}ifAbsent(e){return new L("if_absent",[this,G(e)],"ifAbsent")}ifNull(e){return new L("if_null",[this,G(e)],"ifNull")}coalesce(e,...t){return new L("coalesce",[this,G(e),...t.map(G)],"coalesce")}join(e){return new L("join",[this,G(e)],"join")}log10(){return new L("log10",[this])}arraySum(){return new L("sum",[this])}split(e){return new L("split",[this,G(e)])}timestampTruncate(e,t){const n=[this,G(e)];return t&&n.push(G(t)),new L("timestamp_trunc",n)}ascending(){return Ow(this)}descending(){return Fw(this)}as(e){return new Aw(this,e,"as")}}class vt{constructor(e,t){this.name=e,this.params=t,this.exprType="AggregateFunction",this._protoValueType="ProtoValue"}static _create(e,t,n){const r=new vt(e,t);return r._methodName=n,r}as(e){return new vw(this,e,"as")}_toProto(e){return{functionValue:{name:this.name,args:this.params.map((t=>t._toProto(e)))}}}_readUserData(e){e=this._methodName?e.contextWith({methodName:this._methodName}):e,this.params.forEach((t=>t._readUserData(e)))}}class vw{constructor(e,t,n){this.aggregate=e,this.alias=t,this._methodName=n}_readUserData(e){this.aggregate._readUserData(e)}}class Aw{constructor(e,t,n){this.expr=e,this.alias=t,this._methodName=n,this.exprType="AliasedExpression",this.selectable=!0}_readUserData(e){this.expr._readUserData(e)}}class Bi extends Gs{constructor(e,t){super(),this.ur=e,this._methodName=t,this.expressionType="ListOfExpressions"}_toProto(e){return{arrayValue:{values:this.ur.map((t=>t._toProto(e)))}}}_readUserData(e){this.ur.forEach((t=>t._readUserData(e)))}}class co extends Gs{constructor(e,t){super(),this.fieldPath=e,this._methodName=t,this.expressionType="Field",this.selectable=!0}get _fieldPath(){return this.fieldPath}get fieldName(){return this.fieldPath.canonicalString()}get alias(){return this.fieldName}get expr(){return this}geoDistance(e){return new L("geo_distance",[this,G(e)],"geoDistance")}_toProto(e){return{fieldReferenceValue:this.fieldPath.canonicalString()}}_readUserData(e){}}function Rw(s){return Sw(s,"field")}function Sw(s,e){return new co(typeof s=="string"?Cr===s?HI()._internalPath:ll("field",s):s._internalPath,e)}class Sr extends Gs{constructor(e,t){super(),this.value=e,this._methodName=t,this.expressionType="Constant"}static _fromProto(e){const t=new Sr(e,void 0);return t._protoValue=e,t}_toProto(e){return z(this._protoValue!==void 0,237),this._protoValue}_getValue(){return this._protoValue}_readUserData(e){e=this._methodName?e.contextWith({methodName:this._methodName}):e,ww(this._protoValue)||(this._protoValue=Vi(this.value,e))}}function Gi(s,e){return ng(s,"constant")}function ng(s,e){const t=new Sr(s,e);return typeof s=="boolean"?new rg(t):t}class L extends Gs{constructor(e,t,n,r){super(),this.name=e,this.params=t,this.expressionType="Function",this._optionsProto=void 0,n!==void 0&&(this._methodName=n),r!==void 0&&(this._options=r)}get _optionsUtil(){return new rt({})}_toProto(e){const t={functionValue:{name:this.name,args:this.params.map((n=>n._toProto(e)))}};return this._optionsProto&&(t.functionValue.options=this._optionsProto),t}_readUserData(e){e=this._methodName?e.contextWith({methodName:this._methodName}):e,this.params.forEach((t=>t._readUserData(e))),this._options&&(this._optionsProto=this._optionsUtil.getOptionsProto(e,this._options))}}class $n extends Gs{get _methodName(){return this._expr._methodName}countIf(){return vt._create("count_if",[this],"countIf")}not(){return new L("not",[this],"not").asBoolean()}conditional(e,t){return new L("conditional",[this,e,t],"conditional")}ifError(e){const t=G(e),n=new L("if_error",[this,t],"ifError");return t instanceof $n?n.asBoolean():n}_toProto(e){return this._expr._toProto(e)}_readUserData(e){this._expr._readUserData(e)}}class sg extends $n{constructor(e){super(),this._expr=e,this.expressionType="Function"}}class rg extends $n{constructor(e){super(),this._expr=e,this.expressionType="Constant"}_getValue(){return this._expr._getValue()}}class Pw extends $n{constructor(e){super(),this._expr=e,this.expressionType="Field"}}function Nw(s,e){const t=[];for(const n in s)if(Object.prototype.hasOwnProperty.call(s,n)){const r=s[n];t.push(Gi(n)),t.push(G(r))}return new L("map",t,"map")}function bw(s){return(function(t,n){return new L("array",t.map((r=>G(r))),n)})(s,"array")}function Ow(s){return new ig(LB(s),"ascending","ascending")}function Fw(s){return new ig(LB(s),"descending","descending")}class ig{constructor(e,t,n){this.expr=e,this.direction=t,this._methodName=n,this._protoValueType="ProtoValue"}_toProto(e){return{mapValue:{fields:{direction:qp(this.direction),expression:this.expr._toProto(e)}}}}_readUserData(e){this.expr._readUserData(e)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nt{constructor(e){this.optionsProto=void 0,{rawOptions:this.rawOptions,...this.knownOptions}=e}_readUserData(e){this.optionsProto=this._optionsUtil.getOptionsProto(e,this.knownOptions,this.rawOptions)}_toProto(e){return{name:this._name,options:this.optionsProto}}}class og extends Nt{get _name(){return"add_fields"}get _optionsUtil(){return new rt({})}constructor(e,t){super(t),this.fields=e}_toProto(e){return{...super._toProto(e),args:[xi(e,this.fields)]}}_readUserData(e){super._readUserData(e),Xn(this.fields,e)}}class ag extends Nt{get _name(){return"aggregate"}get _optionsUtil(){return new rt({})}constructor(e,t,n){super(n),this.groups=e,this.accumulators=t}_toProto(e){return{...super._toProto(e),args:[xi(e,this.accumulators),xi(e,this.groups)]}}_readUserData(e){super._readUserData(e),Xn(this.groups,e),Xn(this.accumulators,e)}}class lg extends Nt{get _name(){return"distinct"}get _optionsUtil(){return new rt({})}constructor(e,t){super(t),this.groups=e}_toProto(e){return{...super._toProto(e),args:[xi(e,this.groups)]}}_readUserData(e){super._readUserData(e),Xn(this.groups,e)}}class cl extends Nt{get _name(){return"collection"}get _optionsUtil(){return new rt({forceIndex:{serverName:"force_index"}})}constructor(e,t){super(t),this.Er=e.startsWith("/")?e:"/"+e}_toProto(e){return{...super._toProto(e),args:[{referenceValue:this.Er}]}}_readUserData(e){super._readUserData(e)}}class Bl extends Nt{get _name(){return"collection_group"}get _optionsUtil(){return new rt({forceIndex:{serverName:"force_index"}})}constructor(e,t){super(t),this.collectionId=e}_toProto(e){return{...super._toProto(e),args:[{referenceValue:""},{stringValue:this.collectionId}]}}_readUserData(e){super._readUserData(e)}}class kB extends Nt{get _name(){return"database"}get _optionsUtil(){return new rt({})}_toProto(e){return{...super._toProto(e)}}_readUserData(e){super._readUserData(e)}}class xB extends Nt{get _name(){return"documents"}get _optionsUtil(){return new rt({})}constructor(e,t){if(super(t),!e||e.length===0)throw new K(M.INVALID_ARGUMENT,"Empty document paths are not allowed in DocumentsSource");const n=e.map((i=>i.startsWith("/")?i:"/"+i)),r=new Set(n);if(r.size!==n.length)throw new K(M.INVALID_ARGUMENT,"Duplicate document paths are not allowed in DocumentsSource");this.hr=n,this.Tr=r}_toProto(e){return{...super._toProto(e),args:this.hr.map((t=>({referenceValue:t})))}}_readUserData(e){super._readUserData(e)}}class MB extends Nt{get _name(){return"where"}get _optionsUtil(){return new rt({})}constructor(e,t){super(t),this.condition=e}_toProto(e){return{...super._toProto(e),args:[this.condition._toProto(e)]}}_readUserData(e){super._readUserData(e),Xn(this.condition,e)}}class Hi extends Nt{get _name(){return"limit"}get _optionsUtil(){return new rt({})}constructor(e,t){z(!isNaN(e)&&e!==1/0&&e!==-1/0,34860),super(t),this.limit=e}_toProto(e){return{...super._toProto(e),args:[TB(e,this.limit)]}}}class cd extends Nt{get _name(){return"offset"}get _optionsUtil(){return new rt({})}constructor(e,t){super(t),this.offset=e}_toProto(e){return{...super._toProto(e),args:[TB(e,this.offset)]}}}class Lw extends Nt{get _name(){return"select"}get _optionsUtil(){return new rt({})}constructor(e,t){super(t),this.selections=e}_toProto(e){return{...super._toProto(e),args:[xi(e,this.selections)]}}_readUserData(e){super._readUserData(e),Xn(this.selections,e)}}class VB extends Nt{get _name(){return"sort"}get _optionsUtil(){return new rt({})}constructor(e,t){super(t),this.orderings=e}_toProto(e){return{...super._toProto(e),args:this.orderings.map((t=>t._toProto(e)))}}_readUserData(e){super._readUserData(e),Xn(this.orderings,e)}}class GB extends Nt{get _name(){return"replace_with"}get _optionsUtil(){return new rt({})}constructor(e,t){super(t),this.map=e}_toProto(e){return{...super._toProto(e),args:[this.map._toProto(e),qp(GB.Pr)]}}_readUserData(e){super._readUserData(e),Xn(this.map,e)}}GB.Pr="full_replace";function Xn(s,e){return Iw(s)?s._readUserData(e):Array.isArray(s)?s.forEach((t=>t._readUserData(e))):s instanceof Map?s.forEach((t=>t._readUserData(e))):Object.values(s).forEach((t=>t._readUserData(e))),s}// Copyright 2024 Google LLC* @license
class ht{constructor(e,t,n){this.serializer=e,this.stages=t,this.listenOptions=n,this.isCorePipeline=!0}getPipelineCollection(){return ul(this)}getPipelineCollectionGroup(){return HB(this)}getPipelineCollectionId(){return kw(this)}getPipelineDocuments(){return qc(this)}getPipelineFlavor(){return(function(t){let n="exact";return t.stages.forEach(((r,i)=>{r._name!==lg.name&&r._name!==ag.name||(n="keyless"),r._name===Lw.name&&n==="exact"&&(n="augmented"),r._name===og.name&&i<t.stages.length-1&&n==="exact"&&(n="augmented")})),n})(this)}getPipelineSourceType(){return Un(this)}}function Un(s){const e=s.stages[0];return e instanceof cl||e instanceof Bl||e instanceof kB||e instanceof xB?e._name:"unknown"}function ul(s){if(Un(s)==="collection")return s.stages[0].Er}function HB(s){if(Un(s)==="collection_group")return s.stages[0].collectionId}function kw(s){switch(Un(s)){case"collection":return ge.fromString(ul(s)).lastSegment();case"collection_group":return HB(s);default:return}}function qc(s){if(Un(s)==="documents")return s.stages[0].hr}class w{constructor(e,t){this.type=e,this.value=t}static dr(){return new w("ERROR",void 0)}static mr(){return new w("UNSET",void 0)}static pr(){return new w("NULL",gr)}static newValue(e){return St(e)?new w("NULL",gr):(function(n){return!!n&&"booleanValue"in n})(e)?new w("BOOLEAN",e):zt(e)?new w("INT",e):Es(e)?new w("DOUBLE",e):(function(n){return!!n&&"timestampValue"in n&&!!n.timestampValue})(e)?new w("TIMESTAMP",e):(function(n){return!!n&&"stringValue"in n})(e)?new w("STRING",e):(function(n){return!!n&&"bytesValue"in n})(e)?new w("BYTES",e):e.referenceValue?new w("REFERENCE",e):e.geoPointValue?new w("GEO_POINT",e):_r(e)?new w("ARRAY",e):da(e)?new w("VECTOR",e):Is(e)?new w("MAP",e):new w("ERROR",void 0)}gr(){return this.type==="ERROR"||this.type==="UNSET"}yr(){return this.type==="NULL"}}function mi(s){if(!s.gr())return s.value}function cg(s){return s instanceof $n?s._expr:s}function Z(s){if((s=cg(s))instanceof co)return new xw(s);if(s instanceof Sr)return new Mw(s);if(s instanceof Bi)return new Vw(s);if(s instanceof L){if(s.name==="add")return new Uw(s);if(s.name==="subtract")return new Jw(s);if(s.name==="multiply")return new qw(s);if(s.name==="divide")return new jw(s);if(s.name==="mod")return new Kw(s);if(s.name==="and")return new Ww(s);if(s.name==="equal")return new iT(s);if(s.name==="not_equal")return new oT(s);if(s.name==="less_than")return new aT(s);if(s.name==="less_than_or_equal")return new lT(s);if(s.name==="greater_than")return new cT(s);if(s.name==="greater_than_or_equal")return new BT(s);if(s.name==="array_concat")return new uT(s);if(s.name==="array_reverse")return new hT(s);if(s.name==="array_contains")return new fT(s);if(s.name==="array_contains_all")return new dT(s);if(s.name==="array_contains_any")return new CT(s);if(s.name==="array_length")return new pT(s);if(s.name==="array_element")return new gT(s);if(s.name==="equal_any")return new Bg(s);if(s.name==="not_equal_any")return new Qw(s);if(s.name==="is_nan")return new Yw(s);if(s.name==="is_not_nan")return new $w(s);if(s.name==="is_null")return new Xw(s);if(s.name==="is_not_null")return new Zw(s);if(s.name==="is_error")return new eT(s);if(s.name==="exists")return new tT(s);if(s.name==="not")return new hl(s);if(s.name==="or")return new zw(s);if(s.name==="xor")return new UB(s);if(s.name==="conditional")return new nT(s);if(s.name==="maximum")return new sT(s);if(s.name==="minimum")return new rT(s);if(s.name==="reverse")return new mT(s);if(s.name==="replace_first")return new _T(s);if(s.name==="replace_all")return new ET(s);if(s.name==="char_length")return new DT(s);if(s.name==="byte_length")return new yT(s);if(s.name==="like")return new IT(s);if(s.name==="regex_contains")return new wT(s);if(s.name==="regex_match")return new TT(s);if(s.name==="string_contains")return new vT(s);if(s.name==="starts_with")return new AT(s);if(s.name==="ends_with")return new RT(s);if(s.name==="to_lower")return new ST(s);if(s.name==="to_upper")return new PT(s);if(s.name==="trim")return new NT(s);if(s.name==="string_concat")return new bT(s);if(s.name==="map_get")return new OT(s);if(s.name==="cosine_distance")return new FT(s);if(s.name==="dot_product")return new LT(s);if(s.name==="euclidean_distance")return new kT(s);if(s.name==="vector_length")return new xT(s);if(s.name==="unix_micros_to_timestamp")return new UT(s);if(s.name==="timestamp_to_unix_micros")return new jT(s);if(s.name==="unix_millis_to_timestamp")return new JT(s);if(s.name==="timestamp_to_unix_millis")return new KT(s);if(s.name==="unix_seconds_to_timestamp")return new qT(s);if(s.name==="timestamp_to_unix_seconds")return new WT(s);if(s.name==="timestamp_add")return new zT(s);if(s.name==="timestamp_subtract")return new QT(s)}throw new Error(`Unknown Expr : ${s}`)}class xw{constructor(e){this.expr=e}evaluate(e,t){if(this.expr.fieldName===Cr)return w.newValue({referenceValue:ya(e.serializer,t.key)});if(this.expr.fieldName==="__update_time__")return w.newValue({timestampValue:na(e.serializer,t.version)});if(this.expr.fieldName==="__create_time__")return w.newValue({timestampValue:na(e.serializer,t.createTime)});const n=t.data.field(this.expr._fieldPath);return n?Xa(n)?w.newValue((function(i,o){if(i.serverTimestampBehavior==="estimate")return{timestampValue:na(i.serializer,ne.fromTimestamp(pr(o)))};if(i.serverTimestampBehavior==="previous"){const a=io(o);if(a)return a}return{nullValue:"NULL_VALUE"}})(e,n)):w.newValue(n):w.mr()}}class Mw{constructor(e){this.expr=e}evaluate(e,t){return w.newValue(this.expr._getValue())}}class Vw{constructor(e){this.expr=e}evaluate(e,t){const n=this.expr.ur.map((r=>Z(r).evaluate(e,t)));return n.some((r=>r.gr()))?w.dr():w.newValue({arrayValue:{values:n.map((r=>r.value))}})}}function $e(s){return Es(s)?Number(s.doubleValue):Number(s.integerValue)}function nn(s){return BigInt(s.integerValue)}const Gw=BigInt("0x7fffffffffffffff"),Hw=-BigInt("0x8000000000000000");class Bo{constructor(e){this.expr=e}evaluate(e,t){z(this.expr.params.length>=2,24778);const n=Z(this.expr.params[0]).evaluate(e,t),r=Z(this.expr.params[1]).evaluate(e,t);let i=this.wr(n,r);for(const o of this.expr.params.slice(2)){const a=Z(o).evaluate(e,t);i=this.wr(i,a)}return i}wr(e,t){if(e.gr()||t.gr())return w.dr();if(e.yr()||t.yr())return w.pr();const n=e.value,r=t.value;if(!Es(n)&&!zt(n)||!Es(r)&&!zt(r))return w.dr();if(Es(n)||Es(r)){const i=this.br(n,r);return i?w.newValue(i):w.dr()}if(zt(n)&&zt(r)){const i=this.Sr(n,r);return i===void 0?w.dr():typeof i=="number"?w.newValue({doubleValue:i}):i<Hw||i>Gw?w.dr():w.newValue({integerValue:`${i}`})}return w.dr()}}function mn(s,e){return ke(s)!==ke(e)?"TYPE_MISMATCH":Et(s)||Et(e)?"NOT_EQ":St(s)&&St(e)?"EQ":St(s)||St(e)?"NULL":_r(s)&&_r(e)?(function(n,r){if(n.values?.length!==r.values?.length)return"NOT_EQ";let i=!1;for(let o=0;o<(n.values?.length??0);o++){const a=n.values[o],c=r.values[o];switch(mn(a,c)){case"EQ":break;case"NOT_EQ":case"TYPE_MISMATCH":return"NOT_EQ";case"NULL":i=!0;break;default:Y(44609,{vr:a,Dr:c})}}return i?"NULL":"EQ"})(s.arrayValue,e.arrayValue):da(s)&&da(e)||Is(s)&&Is(e)?(function(n,r){const i=n.fields||{},o=r.fields||{};if(ha(i)!==ha(o))return"NOT_EQ";let a=!1;for(const c in i)if(i.hasOwnProperty(c)){if(o[c]===void 0)return"NOT_EQ";switch(mn(i[c],o[c])){case"NOT_EQ":case"TYPE_MISMATCH":return"NOT_EQ";case"NULL":a=!0}}return a?"NULL":"EQ"})(s.mapValue,e.mapValue):(function(n,r){return Lt(n,r,{o:!1,t:!0,i:!0})})(s,e)?"EQ":"NOT_EQ"}class Uw extends Bo{Sr(e,t){return nn(e)+nn(t)}br(e,t){return{doubleValue:$e(e)+$e(t)}}}class Jw extends Bo{constructor(e){super(e),this.expr=e}Sr(e,t){return nn(e)-nn(t)}br(e,t){return{doubleValue:$e(e)-$e(t)}}}class qw extends Bo{constructor(e){super(e),this.expr=e}Sr(e,t){return nn(e)*nn(t)}br(e,t){return{doubleValue:$e(e)*$e(t)}}}class jw extends Bo{constructor(e){super(e),this.expr=e}Sr(e,t){const n=nn(t);if(n!==BigInt(0))return nn(e)/n}br(e,t){const n=$e(t);return n===0?{doubleValue:Pi(n)?Number.NEGATIVE_INFINITY:Number.POSITIVE_INFINITY}:{doubleValue:$e(e)/n}}}class Kw extends Bo{constructor(e){super(e),this.expr=e}Sr(e,t){const n=nn(t);if(n!==BigInt(0))return nn(e)%n}br(e,t){const n=$e(t);if(n!==0)return{doubleValue:$e(e)%n}}}class Ww{constructor(e){this.expr=e}evaluate(e,t){let n=!1,r=!1;for(const i of this.expr.params){const o=Z(i).evaluate(e,t);switch(o.type){case"BOOLEAN":if(!o.value?.booleanValue)return w.newValue(ze);break;case"NULL":r=!0;break;default:n=!0}}return n?w.dr():r?w.pr():w.newValue(mt)}}class hl{constructor(e){this.expr=e}evaluate(e,t){z(this.expr.params.length===1,9634);const n=Z(this.expr.params[0]).evaluate(e,t);switch(n.type){case"BOOLEAN":return w.newValue({booleanValue:!n.value?.booleanValue});case"NULL":return w.pr();default:return w.dr()}}}class zw{constructor(e){this.expr=e}evaluate(e,t){let n=!1,r=!1;for(const i of this.expr.params){const o=Z(i).evaluate(e,t);switch(o.type){case"BOOLEAN":if(o.value?.booleanValue)return w.newValue(mt);break;case"NULL":r=!0;break;default:n=!0}}return n?w.dr():r?w.pr():w.newValue(ze)}}class UB{constructor(e){this.expr=e}evaluate(e,t){let n=!1,r=!1;for(const i of this.expr.params){const o=Z(i).evaluate(e,t);switch(o.type){case"BOOLEAN":n=UB.xor(n,!!o.value?.booleanValue);break;case"NULL":r=!0;break;default:return w.dr()}}return r?w.pr():w.newValue({booleanValue:n})}static xor(e,t){return(e||t)&&!(e&&t)}}class Bg{constructor(e){this.expr=e}evaluate(e,t){z(this.expr.params.length===2,55094);let n=!1;const r=Z(this.expr.params[0]).evaluate(e,t);switch(r.type){case"NULL":n=!0;break;case"ERROR":case"UNSET":return w.dr()}const i=Z(this.expr.params[1]).evaluate(e,t);switch(i.type){case"ARRAY":break;case"NULL":n=!0;break;default:return w.dr()}if(n)return w.pr();for(const o of i.value?.arrayValue?.values??[])switch(St(r.value)&&St(o)?"EQ":mn(r.value,o)){case"EQ":return w.newValue(mt);case"NOT_EQ":case"TYPE_MISMATCH":break;case"NULL":n=!0;break;default:Y(44608,{value:r.value,candidate:o})}return n?w.pr():w.newValue(ze)}}class Qw{constructor(e){this.expr=e}evaluate(e,t){return new hl(new L("not",[new L("equal_any",this.expr.params)])).evaluate(e,t)}}class Yw{constructor(e){this.expr=e}evaluate(e,t){z(this.expr.params.length===1,23322);const n=Z(this.expr.params[0]).evaluate(e,t);switch(n.type){case"INT":return w.newValue(ze);case"DOUBLE":return w.newValue({booleanValue:isNaN($e(n.value))});case"NULL":return w.pr();default:return w.dr()}}}class $w{constructor(e){this.expr=e}evaluate(e,t){return z(this.expr.params.length===1,50406),new hl(new L("not",[new L("is_nan",this.expr.params)])).evaluate(e,t)}}class Xw{constructor(e){this.expr=e}evaluate(e,t){switch(z(this.expr.params.length===1,23123),Z(this.expr.params[0]).evaluate(e,t).type){case"NULL":return w.newValue(mt);case"UNSET":case"ERROR":return w.dr();default:return w.newValue(ze)}}}class Zw{constructor(e){this.expr=e}evaluate(e,t){return z(this.expr.params.length===1,23167),new hl(new L("not",[new L("is_null",this.expr.params)])).evaluate(e,t)}}class eT{constructor(e){this.expr=e}evaluate(e,t){return z(this.expr.params.length===1,5228),Z(this.expr.params[0]).evaluate(e,t).type==="ERROR"?w.newValue(mt):w.newValue(ze)}}class tT{constructor(e){this.expr=e}evaluate(e,t){switch(z(this.expr.params.length===1,6877),Z(this.expr.params[0]).evaluate(e,t).type){case"ERROR":return w.dr();case"UNSET":return w.newValue(ze);default:return w.newValue(mt)}}}class nT{constructor(e){this.expr=e}evaluate(e,t){z(this.expr.params.length===3,11706);const n=Z(this.expr.params[0]).evaluate(e,t);switch(n.type){case"BOOLEAN":return n.value?.booleanValue?Z(this.expr.params[1]).evaluate(e,t):Z(this.expr.params[2]).evaluate(e,t);case"NULL":return Z(this.expr.params[2]).evaluate(e,t);default:return w.dr()}}}class sT{constructor(e){this.expr=e}evaluate(e,t){const n=this.expr.params.map((i=>Z(i).evaluate(e,t)));let r;for(const i of n)switch(i.type){case"ERROR":case"UNSET":case"NULL":continue;default:r=r===void 0||_t(i.value,r.value)>0?i:r}return r===void 0?w.pr():r}}class rT{constructor(e){this.expr=e}evaluate(e,t){const n=this.expr.params.map((i=>Z(i).evaluate(e,t)));let r;for(const i of n)switch(i.type){case"ERROR":case"UNSET":case"NULL":continue;default:r=r===void 0||_t(i.value,r.value)<0?i:r}return r===void 0?w.pr():r}}class Pr{constructor(e){this.expr=e}evaluate(e,t){z(this.expr.params.length===2,31033,`${this.expr.name}() function should have exactly 2 params`);const n=Z(this.expr.params[0]).evaluate(e,t);switch(n.type){case"ERROR":case"UNSET":return w.dr()}const r=Z(this.expr.params[1]).evaluate(e,t);switch(r.type){case"ERROR":case"UNSET":return w.dr()}return this.Cr(n,r)}}class iT extends Pr{constructor(e){super(e),this.expr=e}Cr(e,t){if(e.yr()&&t.yr())return w.newValue(mt);if(e.yr()||t.yr()||Et(e.value)||Et(t.value)||ke(e.value)!==ke(t.value))return w.newValue(ze);switch(mn(e.value,t.value)){case"EQ":return w.newValue(mt);case"NOT_EQ":return w.newValue(ze);case"NULL":return w.pr();default:Y(44615,{left:e,right:t})}}}class oT extends Pr{constructor(e){super(e),this.expr=e}Cr(e,t){switch(mn(e.value,t.value)){case"EQ":return w.newValue(ze);case"NOT_EQ":case"TYPE_MISMATCH":return w.newValue(mt);case"NULL":return w.pr();default:Y(44614,{left:e,right:t})}}}class aT extends Pr{constructor(e){super(e),this.expr=e}Cr(e,t){return ke(e.value)!==ke(t.value)||Et(e.value)||Et(t.value)?w.newValue(ze):w.newValue({booleanValue:_t(e.value,t.value)<0})}}class lT extends Pr{constructor(e){super(e),this.expr=e}Cr(e,t){return ke(e.value)!==ke(t.value)||Et(e.value)||Et(t.value)?w.newValue(ze):mn(e.value,t.value)==="EQ"?w.newValue(mt):w.newValue({booleanValue:_t(e.value,t.value)<0})}}class cT extends Pr{constructor(e){super(e),this.expr=e}Cr(e,t){return ke(e.value)!==ke(t.value)||Et(e.value)||Et(t.value)?w.newValue(ze):w.newValue({booleanValue:_t(e.value,t.value)>0})}}class BT extends Pr{constructor(e){super(e),this.expr=e}Cr(e,t){return ke(e.value)!==ke(t.value)||Et(e.value)||Et(t.value)?w.newValue(ze):mn(e.value,t.value)==="EQ"?w.newValue(mt):w.newValue({booleanValue:_t(e.value,t.value)>0})}}class uT{constructor(e){this.expr=e}evaluate(e,t){throw new Error("Unimplemented")}}class hT{constructor(e){this.expr=e}evaluate(e,t){z(this.expr.params.length===1,216);const n=Z(this.expr.params[0]).evaluate(e,t);switch(n.type){case"NULL":return w.pr();case"ARRAY":{const r=n.value.arrayValue?.values??[];return w.newValue({arrayValue:{values:[...r].reverse()}})}default:return w.dr()}}}class fT{constructor(e){this.expr=e}evaluate(e,t){return z(this.expr.params.length===2,52884),new Bg(new L("eq_any",[this.expr.params[1],this.expr.params[0]])).evaluate(e,t)}}class dT{constructor(e){this.expr=e}evaluate(e,t){z(this.expr.params.length===2,1392);let n=!1;const r=Z(this.expr.params[0]).evaluate(e,t);switch(r.type){case"ARRAY":break;case"NULL":n=!0;break;default:return w.dr()}const i=Z(this.expr.params[1]).evaluate(e,t);switch(i.type){case"ARRAY":break;case"NULL":n=!0;break;default:return w.dr()}if(n)return w.pr();const o=i.value?.arrayValue?.values??[],a=r.value?.arrayValue?.values??[];for(const c of o){let B=!1;n=!1;for(const h of a){switch(St(c)&&St(h)?"EQ":mn(c,h)){case"EQ":B=!0;break;case"NOT_EQ":case"TYPE_MISMATCH":break;case"NULL":n=!0;break;default:Y(44613,{value:h,search:c})}if(B)break}if(!B)return w.newValue(ze)}return w.newValue(mt)}}class CT{constructor(e){this.expr=e}evaluate(e,t){z(this.expr.params.length===2,2680);let n=!1;const r=Z(this.expr.params[0]).evaluate(e,t);switch(r.type){case"ARRAY":break;case"NULL":n=!0;break;default:return w.dr()}const i=Z(this.expr.params[1]).evaluate(e,t);switch(i.type){case"ARRAY":break;case"NULL":n=!0;break;default:return w.dr()}if(n)return w.pr();const o=i.value?.arrayValue?.values??[],a=r.value?.arrayValue?.values??[];for(const c of a)for(const B of o)switch(St(c)&&St(B)?"EQ":mn(c,B)){case"EQ":return w.newValue(mt);case"NOT_EQ":case"TYPE_MISMATCH":break;case"NULL":n=!0;break;default:Y(60403,{value:c,search:B})}return n?w.pr():w.newValue(ze)}}class pT{constructor(e){this.expr=e}evaluate(e,t){z(this.expr.params.length===1,38605);const n=Z(this.expr.params[0]).evaluate(e,t);switch(n.type){case"NULL":return w.pr();case"ARRAY":return w.newValue({integerValue:`${n.value?.arrayValue?.values?.length??0}`});default:return w.dr()}}}class gT{constructor(e){this.expr=e}evaluate(e,t){throw new Error("Unimplemented")}}class mT{constructor(e){this.expr=e}evaluate(e,t){z(this.expr.params.length===1,1508);const n=Z(this.expr.params[0]).evaluate(e,t);switch(n.type){case"NULL":return w.pr();case"BYTES":{const r=n.value?.bytesValue;if(typeof r=="string"){const i=Le.fromBase64String(r).toUint8Array();return i.reverse(),w.newValue({bytesValue:Le.fromUint8Array(i).toBase64()})}return w.newValue({bytesValue:new Uint8Array(r).reverse()})}case"STRING":{const r=n.value?.stringValue,i=new Intl.__PRIVATE_Segmenter(void 0,{granularity:"grapheme"}).segment(r),o=Array.from(i,(a=>a.segment)).reverse();return w.newValue({stringValue:o.join("")})}default:return w.dr()}}}class _T{constructor(e){this.expr=e}evaluate(e,t){throw new Error("Unimplemented")}}class ET{constructor(e){this.expr=e}evaluate(e,t){throw new Error("Unimplemented")}}class DT{constructor(e){this.expr=e}evaluate(e,t){z(this.expr.params.length===1,19400);const n=Z(this.expr.params[0]).evaluate(e,t);switch(n.type){case"NULL":return w.pr();case"STRING":{const r=(function(o){let a=0;for(let c=0;c<o.length;c++){const B=o.codePointAt(c);if(B===void 0)return;if(B<=65535)if(B>=55296&&B<=57343)if(B<=56319){const h=o.codePointAt(c+1);h!==void 0&&h>=56320&&h<=57343?(a+=1,c++):a+=1}else a+=1;else a+=1;else{if(!(B<=1114111))return;a+=1,c++}}return a})(n.value.stringValue);return r===void 0?w.dr():w.newValue({integerValue:r})}default:return w.dr()}}}class yT{constructor(e){this.expr=e}evaluate(e,t){z(this.expr.params.length===1,8486);const n=Z(this.expr.params[0]).evaluate(e,t);switch(n.type){case"BYTES":{const r=n.value?.bytesValue;return typeof r=="string"?w.newValue({integerValue:Le.fromBase64String(r).toUint8Array().length}):w.newValue({integerValue:new Uint8Array(r).length})}case"STRING":{const r=(function(o){let a=0;for(let c=0;c<o.length;c++){const B=o.codePointAt(c);if(B===void 0)return;if(B>=55296&&B<=57343){if(!(B<=56319))return;{const h=o.codePointAt(c+1);if(h===void 0||!(h>=56320&&h<=57343))return;a+=4,c++}}else if(B<=127)a+=1;else if(B<=2047)a+=2;else if(B<=65535)a+=3;else{if(!(B<=1114111))return;a+=4,c++}}return a})(n.value?.stringValue);return r===void 0?w.dr():w.newValue({integerValue:r})}case"NULL":return w.pr();default:return w.dr()}}}class Nr{constructor(e){this.expr=e}evaluate(e,t){z(this.expr.params.length===2,39773,`${this.expr.name}() function should have exactly two parameters`);let n=!1;const r=Z(this.expr.params[0]).evaluate(e,t);switch(r.type){case"STRING":break;case"NULL":n=!0;break;default:return w.dr()}const i=Z(this.expr.params[1]).evaluate(e,t);switch(i.type){case"STRING":break;case"NULL":n=!0;break;default:return w.dr()}return n?w.pr():this.Fr(r.value?.stringValue,i.value?.stringValue)}}class IT extends Nr{Fr(e,t){try{const n=(function(o){let a="";for(let c=0;c<o.length;c++){const B=o.charAt(c);switch(B){case"_":a+=".";break;case"%":a+=".*";break;case"\\":case".":case"*":case"?":case"+":case"^":case"$":case"|":case"(":case")":case"[":case"]":case"{":case"}":a+="\\"+B;break;default:a+=B}}return"^"+a+"$"})(t),r=_B.compile(n);return w.newValue({booleanValue:r.matches(e)})}catch(n){return Ut(`Invalid LIKE pattern converted to regex: ${t}, returning error. Error: ${n}`),w.dr()}}}class wT extends Nr{Fr(e,t){try{const n=_B.compile(t);return w.newValue({booleanValue:n.test(e)})}catch{return Ut(`Invalid regex pattern found in regex_contains: ${t}, returning error`),w.dr()}}}class TT extends Nr{Fr(e,t){try{return w.newValue({booleanValue:_B.compile(t).matches(e)})}catch{return Ut(`Invalid regex pattern found in regex_match: ${t}, returning error`),w.dr()}}}class vT extends Nr{Fr(e,t){return w.newValue({booleanValue:e.includes(t)})}}class AT extends Nr{Fr(e,t){return w.newValue({booleanValue:e.startsWith(t)})}}class RT extends Nr{Fr(e,t){return w.newValue({booleanValue:e.endsWith(t)})}}class ST{constructor(e){this.expr=e}evaluate(e,t){z(this.expr.params.length===1,29079);const n=Z(this.expr.params[0]).evaluate(e,t);switch(n.type){case"STRING":return w.newValue({stringValue:n.value?.stringValue?.toLowerCase()});case"NULL":return w.pr();default:return w.dr()}}}class PT{constructor(e){this.expr=e}evaluate(e,t){z(this.expr.params.length===1,60487);const n=Z(this.expr.params[0]).evaluate(e,t);switch(n.type){case"STRING":return w.newValue({stringValue:n.value?.stringValue?.toUpperCase()});case"NULL":return w.pr();default:return w.dr()}}}class NT{constructor(e){this.expr=e}evaluate(e,t){z(this.expr.params.length===1,28544);const n=Z(this.expr.params[0]).evaluate(e,t);switch(n.type){case"STRING":return w.newValue({stringValue:n.value?.stringValue?.trim()});case"NULL":return w.pr();default:return w.dr()}}}class bT{constructor(e){this.expr=e}evaluate(e,t){const n=this.expr.params.map((o=>Z(o).evaluate(e,t)));let r="",i=!1;for(const o of n)switch(o.type){case"STRING":r+=o.value.stringValue;break;case"NULL":i=!0;break;default:return w.dr()}return i?w.pr():w.newValue({stringValue:r})}}class OT{constructor(e){this.expr=e}evaluate(e,t){z(this.expr.params.length===2,4483);const n=Z(this.expr.params[0]).evaluate(e,t);switch(n.type){case"UNSET":return w.mr();case"MAP":break;default:return w.dr()}const r=Z(this.expr.params[1]).evaluate(e,t);if(r.type!=="STRING")return w.dr();const i=n.value?.mapValue?.fields?.[r.value?.stringValue];return i===void 0?w.mr():w.newValue(i)}}class JB{constructor(e){this.expr=e}evaluate(e,t){z(this.expr.params.length===2,25231,`${this.expr.name}() function should have exactly 2 params`);let n=!1;const r=Z(this.expr.params[0]).evaluate(e,t);switch(r.type){case"VECTOR":break;case"NULL":n=!0;break;default:return w.dr()}const i=Z(this.expr.params[1]).evaluate(e,t);switch(i.type){case"VECTOR":break;case"NULL":n=!0;break;default:return w.dr()}if(n)return w.pr();const o=xc(r.value),a=xc(i.value);if(o===void 0||a===void 0||o.values?.length!==a.values?.length)return w.dr();const c=this.Or(o,a);return c===void 0||isNaN(c)?w.dr():w.newValue({doubleValue:c})}}class FT extends JB{Or(e,t){const n=e?.values??[],r=t?.values??[];if(n.length===0)return;let i=0,o=0,a=0;for(let B=0;B<n.length;B++){if(!Qn(n[B])||!Qn(r[B]))return;const h=$e(n[B]),f=$e(r[B]);i+=h*f,o+=h*h,a+=f*f}const c=Math.sqrt(o)*Math.sqrt(a);if(c!==0)return 1-Math.max(-1,Math.min(1,i/c))}}class LT extends JB{Or(e,t){const n=e?.values??[],r=t?.values??[];if(n.length===0)return 0;let i=0;for(let o=0;o<n.length;o++){if(!Qn(n[o])||!Qn(r[o]))return;i+=$e(n[o])*$e(r[o])}return i}}class kT extends JB{Or(e,t){const n=e?.values??[],r=t?.values??[];if(n.length===0)return 0;let i=0;for(let o=0;o<n.length;o++){if(!Qn(n[o])||!Qn(r[o]))return;const a=$e(n[o]),c=$e(r[o]);i+=Math.pow(a-c,2)}return Math.sqrt(i)}}class xT{constructor(e){this.expr=e}evaluate(e,t){z(this.expr.params.length===1,39044);const n=Z(this.expr.params[0]).evaluate(e,t);switch(n.type){case"VECTOR":{const r=xc(n.value);return w.newValue({integerValue:r?.values?.length??0})}case"NULL":return w.pr();default:return w.dr()}}}const Ui=BigInt(-62135596800),Ji=BigInt(253402300799),wa=BigInt(1e3),Jn=BigInt(1e6),MT=Ui*wa,VT=Ji*wa+BigInt(999),GT=Ui*Jn,HT=Ji*Jn+BigInt(999999);function qB(s){return s>=GT&&s<=HT}function ug(s){return s>=Ui&&s<=Ji}function qi(s,e){const t=BigInt(s);return!(t<Ui||t>Ji)&&!(e<0||e>=1e9)&&(t!==Ui||e===0)&&!(t===Ji&&e>999999999)}function hg(s,e){return e<0?{seconds:s-1,nanos:e+1e9}:{seconds:s,nanos:e}}function jB(s){return BigInt(s.seconds)*Jn+BigInt(Math.trunc(s.nanoseconds/1e3))}class KB{constructor(e){this.expr=e}evaluate(e,t){z(this.expr.params.length===1,49262,`${this.expr.name}() function should have exactly one parameter`);const n=Z(this.expr.params[0]).evaluate(e,t);switch(n.type){case"INT":return this.toTimestamp(BigInt(n.value.integerValue));case"NULL":return w.pr();default:return w.dr()}}}class UT extends KB{toTimestamp(e){if(!qB(e))return w.dr();let t=Number(e/Jn),n=Number(e%Jn*BigInt(1e3));const r=hg(t,n);return t=r.seconds,n=r.nanos,qi(t,n)?w.newValue({timestampValue:{seconds:t,nanos:n}}):w.dr()}}class JT extends KB{toTimestamp(e){if(!(function(o){return o>=MT&&o<=VT})(e))return w.dr();let t=Number(e/wa),n=Number(e%wa*BigInt(1e6));const r=hg(t,n);return t=r.seconds,n=r.nanos,qi(t,n)?w.newValue({timestampValue:{seconds:t,nanos:n}}):w.dr()}}class qT extends KB{toTimestamp(e){if(!ug(e))return w.dr();const t=Number(e);return w.newValue({timestampValue:{seconds:t,nanos:0}})}}class WB{constructor(e){this.expr=e}evaluate(e,t){z(this.expr.params.length===1,1265,`${this.expr.name}() function should have exactly one parameter`);const n=Z(this.expr.params[0]).evaluate(e,t);switch(n.type){case"TIMESTAMP":break;case"NULL":return w.pr();default:return w.dr()}const r=PB(n.value.timestampValue);return qi(r.seconds,r.nanoseconds)?this.Mr(r):w.dr()}}class jT extends WB{Mr(e){const t=jB(e);return qB(t)?w.newValue({integerValue:`${t.toString()}`}):w.dr()}}class KT extends WB{Mr(e){const t=jB(e),n=t/BigInt(1e3),r=t%BigInt(1e3);return n>BigInt(0)||r===BigInt(0)?w.newValue({integerValue:n.toString()}):w.newValue({integerValue:(n-BigInt(1)).toString()})}}class WT extends WB{Mr(e){const t=BigInt(e.seconds);return ug(t)?w.newValue({integerValue:t.toString()}):w.dr()}}class fg{constructor(e){this.expr=e}evaluate(e,t){z(this.expr.params.length===3,2775,`${this.expr.name}() function should have exactly 3 parameters`);let n=!1;const r=Z(this.expr.params[0]).evaluate(e,t);switch(r.type){case"TIMESTAMP":break;case"NULL":n=!0;break;default:return w.dr()}const i=Z(this.expr.params[1]).evaluate(e,t);let o;switch(i.type){case"STRING":if(o=(function(re){switch(re){case"microsecond":return"microsecond";case"millisecond":return"millisecond";case"second":return"second";case"minute":return"minute";case"hour":return"hour";case"day":return"day";default:return}})(i.value.stringValue),o===void 0)return w.dr();break;case"NULL":n=!0;break;default:return w.dr()}const a=Z(this.expr.params[2]).evaluate(e,t);switch(a.type){case"INT":break;case"NULL":n=!0;break;default:return w.dr()}if(n)return w.pr();const c=BigInt(a.value.integerValue);let B;try{switch(o){case"microsecond":B=c;break;case"millisecond":B=c*BigInt(1e3);break;case"second":B=c*BigInt(1e6);break;case"minute":B=c*BigInt(6e7);break;case"hour":B=c*BigInt(36e8);break;case"day":B=c*BigInt(864e8);break;default:return w.dr()}if(o!=="microsecond"&&c!==BigInt(0)&&B/c!==BigInt(this.Nr(o)))return w.dr()}catch(q){return Ut(`Error during timestamp arithmetic: ${q}`),w.dr()}const h=PB(r.value.timestampValue);if(!qi(h.seconds,h.nanoseconds))return w.dr();const f=jB(h),C=this.Lr(f,B);if(!qB(C))return w.dr();const _=Number(C/Jn),I=C%Jn,O=Number((I<0?I+Jn:I)*BigInt(1e3)),V=I<0?_-1:_;return qi(V,O)?w.newValue({timestampValue:{seconds:V,nanos:O}}):w.dr()}Nr(e){switch(e){case"millisecond":return 1e3;case"second":return 1e6;case"minute":return 6e7;case"hour":return 36e8;case"day":return 864e8;default:return 1}}}class zT extends fg{Lr(e,t){return e+t}}class QT extends fg{Lr(e,t){return e-t}}function ji(s){if((s=cg(s))instanceof co)return`fld(${s.fieldName})`;if(s instanceof Sr)return`cst(${(function(t){return t===null?"null":typeof t=="number"?t.toString():typeof t=="string"?`"${t}"`:t instanceof He?`ref(${t.path})`:t instanceof pt?`vec(${JSON.stringify(t)})`:JSON.stringify(t)})(s.value)})`;if(s instanceof L)return`fn(${s.name},[${s.params.map(ji).join(",")}])`;if(s.expressionType==="ListOfExpressions")return`list([${s.ur.map(ji).join(",")}])`;throw new Error(`Unrecognized expr ${JSON.stringify(s,null,2)}`)}function YT(s){if(s instanceof og)return`${s._name}(${zo(s.fields)})`;if(s instanceof ag){let e=`${s._name}(${zo(s.accumulators)})`;return s.groups.size>0&&(e+=`grouping(${zo(s.groups)})`),e}if(s instanceof lg)return`${s._name}(${zo(s.groups)})`;if(s instanceof cl)return`${s._name}(${s.Er})`;if(s instanceof Bl)return`${s._name}(${s.collectionId})`;if(s instanceof kB)return`${s._name}()`;if(s instanceof xB)return`${s._name}(${s.hr.sort()})`;if(s instanceof MB)return`${s._name}(${ji(s.condition)})`;if(s instanceof Hi)return`${s._name}(${s.limit})`;if(s instanceof VB)return`${s._name}(${(function(t){return t.map((n=>`${ji(n.expr)}${n.direction}`)).join(",")})(s.orderings)})`;throw new Error(`Unrecognized stage ${s._name}`)}function zo(s){return`${Array.from(s.entries()).sort().map((([e,t])=>`${e}=${ji(t)}`)).join(",")}`}function fn(s){return s.stages.map((e=>YT(e))).join("|")}function dg(s,e){return fn(s)===fn(e)}function Ve(s){return s instanceof ht}function Bd(s){return Ve(s)?fn(s):pi(s)}function Cg(s){return Ve(s)?fn(s):(function(t){return`${Ap(Yt(t))}|lt:${t.limitType}`})(s)}function fl(s,e){return s instanceof ht&&e instanceof ht?dg(s,e):!(s instanceof ht&&!(e instanceof ht)||!(s instanceof ht)&&e instanceof ht)&&hI(s,e)}function pg(s){return ms(s)?fn(s):Ap(s)}function gg(s,e){return s instanceof ht&&e instanceof ht?dg(s,e):!(s instanceof ht&&!(e instanceof ht)||!(s instanceof ht)&&e instanceof ht)&&Rp(s,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $T{constructor(e,t,n,r){this.batchId=e,this.localWriteTime=t,this.baseMutations=n,this.mutations=r}applyToRemoteDocument(e,t){const n=t.mutationResults;for(let r=0;r<this.mutations.length;r++){const i=this.mutations[r];i.key.isEqual(e.key)&&Ky(i,e,n[r])}}applyToLocalView(e,t){for(const n of this.baseMutations)n.key.isEqual(e.key)&&(t=di(n,e,t,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(e.key)&&(t=di(n,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const n=Op();return this.mutations.forEach((r=>{const i=e.get(r.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=t.has(r.key)?null:a;const c=mp(o,a);c!==null&&n.set(r.key,c),o.isValidDocument()||o.convertToNoDocument(ne.min())})),n}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),ae())}isEqual(e){return this.batchId===e.batchId&&dr(this.mutations,e.mutations,((t,n)=>Hf(t,n)))&&dr(this.baseMutations,e.baseMutations,((t,n)=>Hf(t,n)))}}class zB{constructor(e,t,n,r){this.batch=e,this.commitVersion=t,this.mutationResults=n,this.docVersions=r}static from(e,t,n){z(e.mutations.length===n.length,58842,{Br:e.mutations.length,Ur:n.length});let r=(function(){return gI})();const i=e.mutations;for(let o=0;o<i.length;o++)r=r.insert(i[o].key,n[o].version);return new zB(e,t,n,r)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mg="";function XT(s){let e="";for(let t=0;t<s.length;t++)e.length>0&&(e=ud(e)),e=ZT(s.get(t),e);return ud(e)}function ZT(s,e){let t=e;const n=s.length;for(let r=0;r<n;r++){const i=s.charAt(r);switch(i){case"\0":t+="";break;case mg:t+="";break;default:t+=i}}return t}function ud(s){return s+mg+""}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ev{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ln{constructor(e,t,n,r,i=ne.min(),o=ne.min(),a=Le.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=t,this.purpose=n,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=c}withSequenceNumber(e){return new ln(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new ln(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new ln(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new ln(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tv{constructor(e){this.qr=e}}function nv(s){const e=FI({parent:s.parent,structuredQuery:s.structuredQuery});return s.limitType==="LAST"?Vc(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sv{constructor(){this.Yi=new rv}addToCollectionParentIndex(e,t){return this.Yi.add(t),k.resolve()}getCollectionParents(e,t){return k.resolve(this.Yi.getEntries(t))}addFieldIndex(e,t){return k.resolve()}deleteFieldIndex(e,t){return k.resolve()}deleteAllFieldIndexes(e){return k.resolve()}createTargetIndexes(e,t){return k.resolve()}getDocumentsMatchingTarget(e,t){return k.resolve(null)}getIndexType(e,t){return k.resolve(0)}getFieldIndexes(e,t){return k.resolve([])}getNextCollectionGroupToUpdate(e){return k.resolve(null)}getMinOffset(e,t){return k.resolve(Yn.min())}getMinOffsetFromCollectionGroup(e,t){return k.resolve(Yn.min())}updateCollectionGroup(e,t,n){return k.resolve()}updateIndexEntries(e,t){return k.resolve()}}class rv{constructor(){this.index={}}add(e){const t=e.lastSegment(),n=e.popLast(),r=this.index[t]||new Fe(ge.comparator),i=!r.has(n);return this.index[t]=r.add(n),i}has(e){const t=e.lastSegment(),n=e.popLast(),r=this.index[t];return r&&r.has(n)}getEntries(e){return(this.index[e]||new Fe(ge.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zn{constructor(e){this.gs=e}next(){return this.gs+=2,this.gs}static ys(){return new Zn(0)}static ws(){return new Zn(-1)}}// Copyright 2024 Google LLC* @license
function _g(s,e){let t=e;for(const n of s.stages)t=ov({serializer:s.serializer,serverTimestampBehavior:s.listenOptions?.serverTimestampBehavior},n,t);return t}function dl(s,e){return _g(s,[e]).length>0}function iv(s,e){return Ve(s)?dl(s,e):rl(s,e)}function ov(s,e,t){if(e instanceof cl)return(function(r,i,o){return o.filter((a=>a.isFoundDocument()&&`/${a.key.getCollectionPath().canonicalString()}`===i.Er))})(0,e,t);if(e instanceof MB)return(function(r,i,o){return o.filter((a=>{const c=mi(Z(i.condition).evaluate(r,a));return c!==void 0&&Lt(c,mt)}))})(s,e,t);if(e instanceof Bl)return(function(r,i,o){return o.filter((a=>a.isFoundDocument()&&a.key.getCollectionPath().lastSegment()===i.collectionId))})(0,e,t);if(e instanceof kB)return(function(r,i,o){return o.filter((a=>a.isFoundDocument()))})(0,0,t);if(e instanceof xB)return(function(r,i,o){return o.filter((a=>a.isFoundDocument()&&i.Tr.has(a.key.path.toStringWithLeadingSlash())))})(0,e,t);if(e instanceof Hi)return(function(r,i,o){return o.slice(0,i.limit)})(0,e,t);if(e instanceof VB)return(function(r,i,o){const a=i.orderings.map((c=>({Os:Z(c.expr),direction:c.direction})));return[...o].sort(((c,B)=>{for(const{Os:h,direction:f}of a){const C=mi(h.evaluate(r,c)),_=mi(h.evaluate(r,B)),I=_t(C??gr,_??gr);if(I!==0)return f==="ascending"?I:-I}return 0}))})(s,e,t);throw new Error(`Unknown stage: ${e._name}`)}function jc(s){const e=(function(n){for(let r=n.stages.length-1;r>=0;r--){const i=n.stages[r];if(i instanceof VB)return i.orderings}throw new Error("Pipeline must contain at least one Sort stage")})(s);return(t,n)=>{for(const r of e){const i=mi(Z(r.expr).evaluate({serializer:s.serializer},t)),o=mi(Z(r.expr).evaluate({serializer:s.serializer},n)),a=_t(i||gr,o||gr);if(a!==0)return r.direction==="ascending"?a:-a}return 0}}function Bc(s){for(let e=s.stages.length-1;e>=0;e--){const t=s.stages[e];if(t instanceof Hi)return{limit:t.limit}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class av{constructor(){this.changes=new Vs((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,tt.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const n=this.changes.get(t);return n!==void 0?k.resolve(n):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lv{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cv{constructor(e,t,n,r){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=n,this.indexManager=r}getDocument(e,t){let n=null;return this.documentOverlayCache.getOverlay(e,t).next((r=>(n=r,this.remoteDocumentCache.getEntry(e,t)))).next((r=>(n!==null&&di(n.mutation,r,xt.empty(),Te.now()),r)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((n=>this.getLocalViewOfDocuments(e,n,ae()).next((()=>n))))}getLocalViewOfDocuments(e,t,n=ae()){const r=On();return this.populateOverlays(e,r,t).next((()=>this.computeViews(e,t,r,n).next((i=>{let o=Zs();return i.forEach(((a,c)=>{o=o.insert(a,c.overlayedDocument)})),o}))))}getOverlayedDocuments(e,t){const n=On();return this.populateOverlays(e,n,t).next((()=>this.computeViews(e,t,n,ae())))}populateOverlays(e,t,n){const r=[];return n.forEach((i=>{t.has(i)||r.push(i)})),this.documentOverlayCache.getOverlays(e,r).next((i=>{i.forEach(((o,a)=>{t.set(o,a)}))}))}computeViews(e,t,n,r){let i=ft();const o=gi(),a=(function(){return gi()})();return t.forEach(((c,B)=>{const h=n.get(B.key);r.has(B.key)&&(h===void 0||h.mutation instanceof Ms)?i=i.insert(B.key,B):h!==void 0?(o.set(B.key,h.mutation.getFieldMask()),di(h.mutation,B,h.mutation.getFieldMask(),Te.now())):o.set(B.key,xt.empty())})),this.recalculateAndSaveOverlays(e,i).next((c=>(c.forEach(((B,h)=>o.set(B,h))),t.forEach(((B,h)=>a.set(B,new lv(h,o.get(B)??null)))),a)))}recalculateAndSaveOverlays(e,t){const n=gi();let r=new Ne(((o,a)=>o-a)),i=ae();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((o=>{for(const a of o)a.keys().forEach((c=>{const B=t.get(c);if(B===null)return;let h=n.get(c)||xt.empty();h=a.applyToLocalView(B,h),n.set(c,h);const f=(r.get(a.batchId)||ae()).add(c);r=r.insert(a.batchId,f)}))})).next((()=>{const o=[],a=r.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),B=c.key,h=c.value,f=Op();h.forEach((C=>{if(!i.has(C)){const _=mp(t.get(C),n.get(C));_!==null&&f.set(C,_),i=i.add(C)}})),o.push(this.documentOverlayCache.saveOverlays(e,B,f))}return k.waitFor(o)})).next((()=>n))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((n=>this.recalculateAndSaveOverlays(e,n)))}getDocumentsMatchingQuery(e,t,n,r){return Ve(t)?this.getDocumentsMatchingPipeline(e,t,n,r):cI(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):BI(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,n,r):this.getDocumentsMatchingCollectionQuery(e,t,n,r)}getNextDocuments(e,t,n,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,n,r).next((i=>{const o=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,n.largestBatchId,r-i.size):k.resolve(On());let a=ki,c=i;return o.next((B=>k.forEach(B,((h,f)=>(a<f.largestBatchId&&(a=f.largestBatchId),i.get(h)?k.resolve():this.remoteDocumentCache.getEntry(e,h).next((C=>{c=c.insert(h,C)}))))).next((()=>this.populateOverlays(e,B,i))).next((()=>this.computeViews(e,c,B,ae()))).next((h=>({batchId:a,changes:bp(h)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new $(t)).next((n=>{let r=Zs();return n.isFoundDocument()&&(r=r.insert(n.key,n)),r}))}getDocumentsMatchingCollectionGroupQuery(e,t,n,r){const i=t.collectionGroup;let o=Zs();return this.indexManager.getCollectionParents(e,i).next((a=>k.forEach(a,(c=>{const B=(function(f,C){return new sl(C,null,f.explicitOrderBy.slice(),f.filters.slice(),f.limit,f.limitType,f.startAt,f.endAt)})(t,c.child(i));return this.getDocumentsMatchingCollectionQuery(e,B,n,r).next((h=>{h.forEach(((f,C)=>{o=o.insert(f,C)}))}))})).next((()=>o))))}getDocumentsMatchingCollectionQuery(e,t,n,r){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,n.largestBatchId).next((o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,n,i,r)))).next((o=>this.retrieveMatchingLocalDocuments(i,o,(a=>rl(t,a)))))}getDocumentsMatchingPipeline(e,t,n,r){if(Un(t)==="collection_group"){const i=HB(t);let o=Zs();return this.indexManager.getCollectionParents(e,i).next((a=>k.forEach(a,(c=>{const B=(function(f,C){const _=f.stages.map((I=>I instanceof Bl?new cl(C.canonicalString(),{}):I));return new ht(f.serializer,_)})(t,c.child(i));return this.getDocumentsMatchingPipeline(e,B,n,r).next((h=>{h.forEach(((f,C)=>{o=o.insert(f,C)}))}))})).next((()=>o))))}{let i;return this.getOverlaysForPipeline(e,t,n.largestBatchId).next((o=>{switch(i=o,Un(t)){case"collection":return this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,n,i,r);case"documents":let a=ae();for(const c of qc(t))a=a.add($.fromPath(c));return this.remoteDocumentCache.getEntries(e,a);case"database":return this.remoteDocumentCache.getAllEntries(e);default:throw new K("invalid-argument",`Invalid pipeline source to execute offline: ${fn(t)}`)}})).next((o=>this.retrieveMatchingLocalDocuments(i,o,(a=>dl(t,a)))))}}retrieveMatchingLocalDocuments(e,t,n){e.forEach(((i,o)=>{const a=o.getKey();t.get(a)===null&&(t=t.insert(a,tt.newInvalidDocument(a)))}));let r=Zs();return t.forEach(((i,o)=>{const a=e.get(i);a!==void 0&&di(a.mutation,o,xt.empty(),Te.now()),n(o)&&(r=r.insert(i,o))})),r}getOverlaysForPipeline(e,t,n){switch(Un(t)){case"collection":return this.documentOverlayCache.getOverlaysForCollection(e,ge.fromString(ul(t)),n);case"collection_group":throw new K("invalid-argument",`Unexpected collection group pipeline: ${fn(t)}`);case"documents":return this.documentOverlayCache.getOverlays(e,qc(t).map((r=>$.fromPath(r))));case"database":return this.documentOverlayCache.getAllOverlays(e,n);default:throw new K("invalid-argument",`Failed to get overlays for pipeline: ${fn(t)}`)}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bv{constructor(e){this.serializer=e,this.Ks=new Map,this.Qs=new Map}getBundleMetadata(e,t){return k.resolve(this.Ks.get(t))}saveBundleMetadata(e,t){return this.Ks.set(t.id,(function(r){return{id:r.id,version:r.version,createTime:$t(r.createTime)}})(t)),k.resolve()}getNamedQuery(e,t){return k.resolve(this.Qs.get(t))}saveNamedQuery(e,t){return this.Qs.set(t.name,(function(r){return{name:r.name,query:nv(r.bundledQuery),readTime:$t(r.readTime)}})(t)),k.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uv{constructor(){this.overlays=new Ne($.comparator),this.Ws=new Map}getOverlay(e,t){return k.resolve(this.overlays.get(t))}getOverlays(e,t){const n=On();return k.forEach(t,(r=>this.getOverlay(e,r).next((i=>{i!==null&&n.set(r,i)})))).next((()=>n))}getAllOverlays(e,t){const n=On();return this.overlays.forEach(((r,i)=>{i.largestBatchId>t&&n.set(r,i)})),k.resolve(n)}saveOverlays(e,t,n){return n.forEach(((r,i)=>{this.Yr(e,t,i)})),k.resolve()}removeOverlaysForBatchId(e,t,n){const r=this.Ws.get(n);return r!==void 0&&(r.forEach((i=>this.overlays=this.overlays.remove(i))),this.Ws.delete(n)),k.resolve()}getOverlaysForCollection(e,t,n){const r=On(),i=t.length+1,o=new $(t.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,B=c.getKey();if(!t.isPrefixOf(B.path))break;B.path.length===i&&c.largestBatchId>n&&r.set(c.getKey(),c)}return k.resolve(r)}getOverlaysForCollectionGroup(e,t,n,r){let i=new Ne(((B,h)=>B-h));const o=this.overlays.getIterator();for(;o.hasNext();){const B=o.getNext().value;if(B.getKey().getCollectionGroup()===t&&B.largestBatchId>n){let h=i.get(B.largestBatchId);h===null&&(h=On(),i=i.insert(B.largestBatchId,h)),h.set(B.getKey(),B)}}const a=On(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach(((B,h)=>a.set(B,h))),!(a.size()>=r)););return k.resolve(a)}Yr(e,t,n){const r=this.overlays.get(n.key);if(r!==null){const o=this.Ws.get(r.largestBatchId).delete(n.key);this.Ws.set(r.largestBatchId,o)}this.overlays=this.overlays.insert(n.key,new ev(t,n));let i=this.Ws.get(t);i===void 0&&(i=ae(),this.Ws.set(t,i)),this.Ws.set(t,i.add(n.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hv{constructor(){this.sessionToken=Le.EMPTY_BYTE_STRING}getSessionToken(e){return k.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,k.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QB{constructor(){this.Gs=new Fe(je.zs),this.js=new Fe(je.Hs)}isEmpty(){return this.Gs.isEmpty()}addReference(e,t){const n=new je(e,t);this.Gs=this.Gs.add(n),this.js=this.js.add(n)}Js(e,t){e.forEach((n=>this.addReference(n,t)))}removeReference(e,t){this.Ys(new je(e,t))}Zs(e,t){e.forEach((n=>this.removeReference(n,t)))}Xs(e){const t=new $(new ge([])),n=new je(t,e),r=new je(t,e+1),i=[];return this.js.forEachInRange([n,r],(o=>{this.Ys(o),i.push(o.key)})),i}e_(){this.Gs.forEach((e=>this.Ys(e)))}Ys(e){this.Gs=this.Gs.delete(e),this.js=this.js.delete(e)}t_(e){const t=new $(new ge([])),n=new je(t,e),r=new je(t,e+1);let i=ae();return this.js.forEachInRange([n,r],(o=>{i=i.add(o.key)})),i}containsKey(e){const t=new je(e,0),n=this.Gs.firstAfterOrEqual(t);return n!==null&&e.isEqual(n.key)}}class je{constructor(e,t){this.key=e,this.n_=t}static zs(e,t){return $.comparator(e.key,t.key)||Be(e.n_,t.n_)}static Hs(e,t){return Be(e.n_,t.n_)||$.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fv{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Wr=1,this.r_=new Fe(je.zs)}checkEmpty(e){return k.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,n,r){const i=this.Wr;this.Wr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new $T(i,t,n,r);this.mutationQueue.push(o);for(const a of r)this.r_=this.r_.add(new je(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return k.resolve(o)}lookupMutationBatch(e,t){return k.resolve(this.i_(t))}getNextMutationBatchAfterBatchId(e,t){const n=t+1,r=this.s_(n),i=r<0?0:r;return k.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return k.resolve(this.mutationQueue.length===0?IB:this.Wr-1)}getAllMutationBatches(e){return k.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const n=new je(t,0),r=new je(t,Number.POSITIVE_INFINITY),i=[];return this.r_.forEachInRange([n,r],(o=>{const a=this.i_(o.n_);i.push(a)})),k.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new Fe(Be);return t.forEach((r=>{const i=new je(r,0),o=new je(r,Number.POSITIVE_INFINITY);this.r_.forEachInRange([i,o],(a=>{n=n.add(a.n_)}))})),k.resolve(this.__(n))}getAllMutationBatchesAffectingQuery(e,t){const n=t.path,r=n.length+1;let i=n;$.isDocumentKey(i)||(i=i.child(""));const o=new je(new $(i),0);let a=new Fe(Be);return this.r_.forEachWhile((c=>{const B=c.key.path;return!!n.isPrefixOf(B)&&(B.length===r&&(a=a.add(c.n_)),!0)}),o),k.resolve(this.__(a))}__(e){const t=[];return e.forEach((n=>{const r=this.i_(n);r!==null&&t.push(r)})),t}removeMutationBatch(e,t){z(this.o_(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let n=this.r_;return k.forEach(t.mutations,(r=>{const i=new je(r.key,t.batchId);return n=n.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)})).next((()=>{this.r_=n}))}jr(e){}containsKey(e,t){const n=new je(t,0),r=this.r_.firstAfterOrEqual(n);return k.resolve(t.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,k.resolve()}o_(e,t){return this.s_(e)}s_(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}i_(e){const t=this.s_(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dv{constructor(e){this.a_=e,this.docs=(function(){return new Ne($.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const n=t.key,r=this.docs.get(n),i=r?r.size:0,o=this.a_(t);return this.docs=this.docs.insert(n,{document:t.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,n.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const n=this.docs.get(t);return k.resolve(n?n.document.mutableCopy():tt.newInvalidDocument(t))}getEntries(e,t){let n=ft();return t.forEach((r=>{const i=this.docs.get(r);n=n.insert(r,i?i.document.mutableCopy():tt.newInvalidDocument(r))})),k.resolve(n)}getAllEntries(e){let t=ft();return this.docs.forEach(((n,r)=>{t=t.insert(n,r.document)})),k.resolve(t)}getDocumentsMatchingQuery(e,t,n,r){let i,o;Ve(t)?(i=ge.fromString(ul(t)),o=h=>dl(t,h)):(i=t.path,o=h=>rl(t,h));let a=ft();const c=new $(i.child("__id-9223372036854775808__")),B=this.docs.getIteratorFrom(c);for(;B.hasNext();){const{key:h,value:{document:f}}=B.getNext();if(!i.isPrefixOf(h.path))break;h.path.length>i.length+1||oI(iI(f),n)<=0||(r.has(f.key)||o(f))&&(a=a.insert(f.key,f.mutableCopy()))}return k.resolve(a)}getAllFromCollectionGroup(e,t,n,r){Y(9500)}u_(e,t){return k.forEach(this.docs,(n=>t(n)))}newChangeBuffer(e){return new Cv(this)}getSize(e){return k.resolve(this.size)}}class Cv extends av{constructor(e){super(),this.qs=e}applyChanges(e){const t=[];return this.changes.forEach(((n,r)=>{r.isValidDocument()?t.push(this.qs.addEntry(e,r)):this.qs.removeEntry(n)})),k.waitFor(t)}getFromCache(e,t){return this.qs.getEntry(e,t)}getAllFromCache(e,t){return this.qs.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pv{constructor(e){this.persistence=e,this.c_=new Vs((t=>pg(t)),gg),this.lastRemoteSnapshotVersion=ne.min(),this.highestTargetId=0,this.l_=0,this.E_=new QB,this.targetCount=0,this.h_=Zn.ys()}forEachTarget(e,t){return this.c_.forEach(((n,r)=>t(r))),k.resolve()}getLastRemoteSnapshotVersion(e){return k.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return k.resolve(this.l_)}allocateTargetId(e){return this.highestTargetId=this.h_.next(),k.resolve(this.highestTargetId)}setTargetsMetadata(e,t,n){return n&&(this.lastRemoteSnapshotVersion=n),t>this.l_&&(this.l_=t),k.resolve()}vs(e){this.c_.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.h_=new Zn(t),this.highestTargetId=t),e.sequenceNumber>this.l_&&(this.l_=e.sequenceNumber)}addTargetData(e,t){return this.vs(t),this.targetCount+=1,k.resolve()}updateTargetData(e,t){return this.vs(t),k.resolve()}removeTargetData(e,t){return this.c_.delete(t.target),this.E_.Xs(t.targetId),this.targetCount-=1,k.resolve()}removeTargets(e,t,n){let r=0;const i=[];return this.c_.forEach(((o,a)=>{a.sequenceNumber<=t&&n.get(a.targetId)===null&&(this.c_.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),r++)})),k.waitFor(i).next((()=>r))}getTargetCount(e){return k.resolve(this.targetCount)}getTargetData(e,t){const n=this.c_.get(t)||null;return k.resolve(n)}addMatchingKeys(e,t,n){return this.E_.Js(t,n),k.resolve()}removeMatchingKeys(e,t,n){this.E_.Zs(t,n);const r=this.persistence.referenceDelegate,i=[];return r&&t.forEach((o=>{i.push(r.markPotentiallyOrphaned(e,o))})),k.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.E_.Xs(t),k.resolve()}getMatchingKeysForTargetId(e,t){const n=this.E_.t_(t);return k.resolve(n)}containsKey(e,t){return k.resolve(this.E_.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eg{constructor(e,t){this.T_={},this.overlays={},this.P_=new ol(0),this.R_=!1,this.R_=!0,this.I_=new hv,this.referenceDelegate=e(this),this.A_=new pv(this),this.indexManager=new sv,this.remoteDocumentCache=(function(r){return new dv(r)})((n=>this.referenceDelegate.V_(n))),this.serializer=new tv(t),this.d_=new Bv(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.R_=!1,Promise.resolve()}get started(){return this.R_}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new uv,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let n=this.T_[e.toKey()];return n||(n=new fv(t,this.referenceDelegate),this.T_[e.toKey()]=n),n}getGlobalsCache(){return this.I_}getTargetCache(){return this.A_}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.d_}runTransaction(e,t,n){J("MemoryPersistence","Starting transaction:",e);const r=new gv(this.P_.next());return this.referenceDelegate.f_(),n(r).next((i=>this.referenceDelegate.m_(r).next((()=>i)))).toPromise().then((i=>(r.raiseOnCommittedEvent(),i)))}p_(e,t){return k.or(Object.values(this.T_).map((n=>()=>n.containsKey(e,t))))}}class gv extends aw{constructor(e){super(),this.currentSequenceNumber=e}}class YB{constructor(e){this.persistence=e,this.g_=new QB,this.y_=null}static w_(e){return new YB(e)}get b_(){if(this.y_)return this.y_;throw Y(60996)}addReference(e,t,n){return this.g_.addReference(n,t),this.b_.delete(n.toString()),k.resolve()}removeReference(e,t,n){return this.g_.removeReference(n,t),this.b_.add(n.toString()),k.resolve()}markPotentiallyOrphaned(e,t){return this.b_.add(t.toString()),k.resolve()}removeTarget(e,t){this.g_.Xs(t.targetId).forEach((r=>this.b_.add(r.toString())));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(e,t.targetId).next((r=>{r.forEach((i=>this.b_.add(i.toString())))})).next((()=>n.removeTargetData(e,t)))}f_(){this.y_=new Set}m_(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return k.forEach(this.b_,(n=>{const r=$.fromPath(n);return this.S_(e,r).next((i=>{i||t.removeEntry(r,ne.min())}))})).next((()=>(this.y_=null,t.apply(e))))}updateLimboDocument(e,t){return this.S_(e,t).next((n=>{n?this.b_.delete(t.toString()):this.b_.add(t.toString())}))}V_(e){return 0}S_(e,t){return k.or([()=>k.resolve(this.g_.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.p_(e,t)])}}class Ta{constructor(e,t){this.persistence=e,this.v_=new Vs((n=>XT(n.path)),((n,r)=>n.isEqual(r))),this.garbageCollector=fw(this,t)}static w_(e,t){return new Ta(e,t)}f_(){}m_(e){return k.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}rr(e){const t=this.xs(e);return this.persistence.getTargetCache().getTargetCount(e).next((n=>t.next((r=>n+r))))}xs(e){let t=0;return this.ir(e,(n=>{t++})).next((()=>t))}ir(e,t){return k.forEach(this.v_,((n,r)=>this.Fs(e,n,r).next((i=>i?k.resolve():t(r)))))}removeTargets(e,t,n){return this.persistence.getTargetCache().removeTargets(e,t,n)}removeOrphanedDocuments(e,t){let n=0;const r=this.persistence.getRemoteDocumentCache(),i=r.newChangeBuffer();return r.u_(e,(o=>this.Fs(e,o,t).next((a=>{a||(n++,i.removeEntry(o,ne.min()))})))).next((()=>i.apply(e))).next((()=>n))}markPotentiallyOrphaned(e,t){return this.v_.set(t,e.currentSequenceNumber),k.resolve()}removeTarget(e,t){const n=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,n)}addReference(e,t,n){return this.v_.set(n,e.currentSequenceNumber),k.resolve()}removeReference(e,t,n){return this.v_.set(n,e.currentSequenceNumber),k.resolve()}updateLimboDocument(e,t){return this.v_.set(t,e.currentSequenceNumber),k.resolve()}V_(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=Zo(e.data.value)),t}Fs(e,t,n){return k.or([()=>this.persistence.p_(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const r=this.v_.get(t);return k.resolve(r!==void 0&&r>n)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $B{constructor(e,t,n,r){this.targetId=e,this.fromCache=t,this.Ao=n,this.Vo=r}static fo(e,t){let n=ae(),r=ae();for(const i of t.docChanges)switch(i.type){case 0:n=n.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new $B(e,t.fromCache,n,r)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mv(s,e){return $.comparator(s.key,e.key)}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _v{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ev{constructor(){this.mo=!1,this.po=!1,this.yo=100,this.wo=(function(){return AE()?8:lw(st())>0?6:4})()}initialize(e,t){this.bo=e,this.indexManager=t,this.mo=!0}getDocumentsMatchingQuery(e,t,n,r){const i={result:null};return this.So(e,t).next((o=>{i.result=o})).next((()=>{if(!i.result)return this.vo(e,t,r,n).next((o=>{i.result=o}))})).next((()=>{if(i.result)return;const o=new _v;return this.Do(e,t,o).next((a=>{if(i.result=a,this.po)return this.xo(e,t,o,a.size)}))})).next((()=>i.result))}xo(e,t,n,r){return Ve(t)?k.resolve():n.documentReadCount<this.yo?($s()<=ce.DEBUG&&J("QueryEngine","SDK will not create cache indexes for query:",pi(t),"since it only creates cache indexes for collection contains","more than or equal to",this.yo,"documents"),k.resolve()):($s()<=ce.DEBUG&&J("QueryEngine","Query:",pi(t),"scans",n.documentReadCount,"local documents and returns",r,"documents as results."),n.documentReadCount>this.wo*r?($s()<=ce.DEBUG&&J("QueryEngine","The SDK decides to create cache indexes for query:",pi(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Yt(t))):k.resolve())}So(e,t){if(Ve(t))return k.resolve(null);let n=t;if(Wf(n))return k.resolve(null);let r=Yt(n);return this.indexManager.getIndexType(e,r).next((i=>i===0?null:(n.limit!==null&&i===1&&(n=Vc(n,null,"F"),r=Yt(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next((o=>{const a=ae(...o);return this.bo.getDocuments(e,a).next((c=>this.indexManager.getMinOffset(e,r).next((B=>{const h=this.Co(n,c);return this.Fo(n,h,a,B.readTime)?this.So(e,Vc(n,null,"F")):this.Oo(e,h,n,B)}))))})))))}vo(e,t,n,r){return(Ve(t)?(function(o){for(const a of o.stages){if(a instanceof Hi||a instanceof cd)return!1;if(a instanceof MB){if(a.condition instanceof sg&&a.condition._expr.name==="exists"&&a.condition._expr.params[0]instanceof co&&a.condition._expr.params[0].fieldName===Cr)continue;return!1}}return!0})(t):Wf(t))||r.isEqual(ne.min())?k.resolve(null):this.bo.getDocuments(e,n).next((i=>{const o=this.Co(t,i);return this.Fo(t,o,n,r)?k.resolve(null):($s()<=ce.DEBUG&&J("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),Bd(t)),this.Oo(e,o,t,rI(r,ki)).next((a=>a)))}))}Co(e,t){let n,r;return Ve(e)?(n=new Fe(mv),r=i=>dl(e,i)):(n=new Fe(RB(e)),r=i=>rl(e,i)),t.forEach(((i,o)=>{r(o)&&(n=n.add(o))})),n}Fo(e,t,n,r){if(Ve(e))return(function(a){return a.stages.some((c=>c instanceof Hi||c instanceof cd))})(e);if(e.limit===null)return!1;if(n.size!==t.size)return!0;const i=e.limitType==="F"?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Do(e,t,n){return $s()<=ce.DEBUG&&J("QueryEngine","Using full collection scan to execute query:",Bd(t)),this.bo.getDocumentsMatchingQuery(e,t,Yn.min(),n)}Oo(e,t,n,r){return this.bo.getDocumentsMatchingQuery(e,n,r).next((i=>(t.forEach((o=>{i=i.insert(o.key,o)})),i)))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XB="LocalStore",Dv=3e8;class yv{constructor(e,t,n,r){this.persistence=e,this.Mo=t,this.serializer=r,this.No=new Ne(Be),this.Lo=new Vs((i=>pg(i)),gg),this.Bo=new Map,this.Uo=e.getRemoteDocumentCache(),this.A_=e.getTargetCache(),this.d_=e.getBundleCache(),this.ko(n)}ko(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new cv(this.Uo,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Uo.setIndexManager(this.indexManager),this.Mo.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.No)))}}function Iv(s,e,t,n){return new yv(s,e,t,n)}async function Dg(s,e){const t=se(s);return await t.persistence.runTransaction("Handle user change","readonly",(n=>{let r;return t.mutationQueue.getAllMutationBatches(n).next((i=>(r=i,t.ko(e),t.mutationQueue.getAllMutationBatches(n)))).next((i=>{const o=[],a=[];let c=ae();for(const B of r){o.push(B.batchId);for(const h of B.mutations)c=c.add(h.key)}for(const B of i){a.push(B.batchId);for(const h of B.mutations)c=c.add(h.key)}return t.localDocuments.getDocuments(n,c).next((B=>({qo:B,removedBatchIds:o,addedBatchIds:a})))}))}))}function wv(s,e){const t=se(s);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",(n=>{const r=e.batch.keys(),i=t.Uo.newChangeBuffer({trackRemovals:!0});return(function(a,c,B,h){const f=B.batch,C=f.keys();let _=k.resolve();return C.forEach((I=>{_=_.next((()=>h.getEntry(c,I))).next((O=>{const V=B.docVersions.get(I);z(V!==null,48541),O.version.compareTo(V)<0&&(f.applyToRemoteDocument(O,B),O.isValidDocument()&&(O.setReadTime(B.commitVersion),h.addEntry(O)))}))})),_.next((()=>a.mutationQueue.removeMutationBatch(c,f)))})(t,n,e,i).next((()=>i.apply(n))).next((()=>t.mutationQueue.performConsistencyCheck(n))).next((()=>t.documentOverlayCache.removeOverlaysForBatchId(n,r,e.batch.batchId))).next((()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(n,(function(a){let c=ae();for(let B=0;B<a.mutationResults.length;++B)a.mutationResults[B].transformResults.length>0&&(c=c.add(a.batch.mutations[B].key));return c})(e)))).next((()=>t.localDocuments.getDocuments(n,r)))}))}function yg(s){const e=se(s);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.A_.getLastRemoteSnapshotVersion(t)))}function Tv(s,e){const t=se(s),n=e.snapshotVersion;let r=t.No;return t.persistence.runTransaction("Apply remote event","readwrite-primary",(i=>{const o=t.Uo.newChangeBuffer({trackRemovals:!0});r=t.No;const a=[];e.targetChanges.forEach(((h,f)=>{const C=r.get(f);if(!C)return;a.push(t.A_.removeMatchingKeys(i,h.removedDocuments,f).next((()=>t.A_.addMatchingKeys(i,h.addedDocuments,f))));let _=C.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(f)!==null?_=_.withResumeToken(Le.EMPTY_BYTE_STRING,ne.min()).withLastLimboFreeSnapshotVersion(ne.min()):h.resumeToken.approximateByteSize()>0&&(_=_.withResumeToken(h.resumeToken,n)),r=r.insert(f,_),(function(O,V,q){return O.resumeToken.approximateByteSize()===0||V.snapshotVersion.toMicroseconds()-O.snapshotVersion.toMicroseconds()>=Dv?!0:q.addedDocuments.size+q.modifiedDocuments.size+q.removedDocuments.size>0})(C,_,h)&&a.push(t.A_.updateTargetData(i,_))}));let c=ft(),B=ae();if(e.documentUpdates.forEach((h=>{e.resolvedLimboDocuments.has(h)&&a.push(t.persistence.referenceDelegate.updateLimboDocument(i,h))})),a.push(vv(i,o,e.documentUpdates).next((h=>{c=h.$o,B=h.Ko}))),!n.isEqual(ne.min())){const h=t.A_.getLastRemoteSnapshotVersion(i).next((f=>t.A_.setTargetsMetadata(i,i.currentSequenceNumber,n)));a.push(h)}return k.waitFor(a).next((()=>o.apply(i))).next((()=>t.localDocuments.getLocalViewOfDocuments(i,c,B))).next((()=>c))})).then((i=>(t.No=r,i)))}function vv(s,e,t){let n=ae(),r=ae();return t.forEach((i=>n=n.add(i))),e.getEntries(s,n).next((i=>{let o=ft();return t.forEach(((a,c)=>{const B=i.get(a);c.isFoundDocument()!==B.isFoundDocument()&&(r=r.add(a)),c.isNoDocument()&&c.version.isEqual(ne.min())?(e.removeEntry(a,c.readTime),o=o.insert(a,c)):!B.isValidDocument()||c.version.compareTo(B.version)>0||c.version.compareTo(B.version)===0&&B.hasPendingWrites?(e.addEntry(c),o=o.insert(a,c)):J(XB,"Ignoring outdated watch update for ",a,". Current version:",B.version," Watch version:",c.version)})),{$o:o,Ko:r}}))}function Av(s,e){const t=se(s);return t.persistence.runTransaction("Get next mutation batch","readonly",(n=>(e===void 0&&(e=IB),t.mutationQueue.getNextMutationBatchAfterBatchId(n,e))))}function Rv(s,e){const t=se(s);return t.persistence.runTransaction("Allocate target","readwrite",(n=>{let r;return t.A_.getTargetData(n,e).next((i=>i?(r=i,k.resolve(r)):t.A_.allocateTargetId(n).next((o=>(r=new ln(e,o,"TargetPurposeListen",n.currentSequenceNumber),t.A_.addTargetData(n,r).next((()=>r)))))))})).then((n=>{const r=t.No.get(n.targetId);return(r===null||n.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(t.No=t.No.insert(n.targetId,n),t.Lo.set(e,n.targetId)),n}))}async function Kc(s,e,t){const n=se(s),r=n.No.get(e),i=t?"readwrite":"readwrite-primary";try{t||await n.persistence.runTransaction("Release target",i,(o=>n.persistence.referenceDelegate.removeTarget(o,r)))}catch(o){if(!Rr(o))throw o;J(XB,`Failed to update sequence numbers for target ${e}: ${o}`)}n.No=n.No.remove(e),n.Lo.delete(r.target)}function hd(s,e,t){const n=se(s);let r=ne.min(),i=ae();return n.persistence.runTransaction("Execute query","readwrite",(o=>(function(c,B,h){const f=se(c),C=f.Lo.get(h);return C!==void 0?k.resolve(f.No.get(C)):f.A_.getTargetData(B,h)})(n,o,Ve(e)?e:Yt(e)).next((a=>{if(a)return r=a.lastLimboFreeSnapshotVersion,n.A_.getMatchingKeysForTargetId(o,a.targetId).next((c=>{i=c}))})).next((()=>n.Mo.getDocumentsMatchingQuery(o,e,t?r:ne.min(),t?i:ae()))).next((a=>(Sv(n,a),{documents:a,Qo:i})))))}function Sv(s,e){e.forEach(((t,n)=>{const r=n.key.getCollectionGroup(),i=s.Bo.get(r)||ne.min();n.readTime.compareTo(i)>0&&s.Bo.set(r,n.readTime)}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pv{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.Jo=0,this.Yo=null,this.Zo=!0}Xo(){this.Jo===0&&(this.ea("Unknown"),this.Yo=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.Yo=null,this.ta("Backend didn't respond within 10 seconds."),this.ea("Offline"),Promise.resolve()))))}na(e){this.state==="Online"?this.ea("Unknown"):(this.Jo++,this.Jo>=1&&(this.ra(),this.ta(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ea("Offline")))}set(e){this.ra(),this.Jo=0,e==="Online"&&(this.Zo=!1),this.ea(e)}ea(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ta(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.Zo?(gn(t),this.Zo=!1):J("OnlineStateTracker",t)}ra(){this.Yo!==null&&(this.Yo.cancel(),this.Yo=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sn="RemoteStore";class Nv{constructor(e,t,n,r,i){this.localStore=e,this.datastore=t,this.asyncQueue=n,this.remoteSyncer={},this.ia=[],this.sa=new Map,this._a=new Map,this.oa=new Map,this.aa=new Zn(1e3),this.ua=new Zn(1001),this.ca=new Set,this.la=[],this.Ea=i,this.Ea.Ke((o=>{n.enqueueAndForget((async()=>{Hs(this)&&(J(sn,"Restarting streams for network reachability change."),await(async function(c){const B=se(c);B.ca.add(4),await uo(B),B.ha.set("Unknown"),B.ca.delete(4),await Cl(B)})(this))}))})),this.ha=new Pv(n,r)}}async function Cl(s){if(Hs(s))for(const e of s.la)await e(!0)}async function uo(s){for(const e of s.la)await e(!1)}function Wc(s,e){return s._a.get(e)||void 0}function Ig(s,e){const t=se(s),n=Wc(t,e.targetId);if(n!==void 0&&t.sa.has(n))return;const r=(function(a,c){const B=Wc(a,c);B!==void 0&&a.oa.delete(B);const h=(function(C,_){return _%2!=0?C.ua.next():C.aa.next()})(a,c);return a._a.set(c,h),a.oa.set(h,c),h})(t,e.targetId);J(sn,"remoteStoreListen mapping SDK target ID to remote",e.targetId,r);const i=new ln(e.target,r,e.purpose,e.sequenceNumber,e.snapshotVersion,e.lastLimboFreeSnapshotVersion,e.resumeToken);t.sa.set(r,i),nu(t)?tu(t):br(t).Jt()&&eu(t,i)}function ZB(s,e){const t=se(s),n=br(t),r=Wc(t,e);J(sn,"remoteStoreUnlisten removing mapping of SDK target ID to remote",e,r),t.sa.delete(r),t._a.delete(e),t.oa.delete(r),n.Jt()&&wg(t,r),t.sa.size===0&&(n.Jt()?n.Xt():Hs(t)&&t.ha.set("Unknown"))}function eu(s,e){if(s.Ta.H(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(ne.min())>0){const t=s.oa.get(e.targetId);if(t===void 0)return void J(sn,"SDK target ID not found for remote ID: "+e.targetId);const n=s.remoteSyncer.getRemoteKeysForTarget(t).size;e=e.withExpectedCount(n)}br(s).Tn(e)}function wg(s,e){s.Ta.H(e),br(s).Pn(e)}function tu(s){s.Ta=new II({getRemoteKeysForTarget:e=>{const t=s.oa.get(e);return t!==void 0?s.remoteSyncer.getRemoteKeysForTarget(t):ae()},ge:e=>s.sa.get(e)||null,Ae:()=>s.datastore.serializer.databaseId}),br(s).start(),s.ha.Xo()}function nu(s){return Hs(s)&&!br(s).Ht()&&s.sa.size>0}function Hs(s){return se(s).ca.size===0}function Tg(s){s.Ta=void 0}async function bv(s){s.ha.set("Online")}async function Ov(s){s.sa.forEach(((e,t)=>{eu(s,e)}))}async function Fv(s,e){Tg(s),nu(s)?(s.ha.na(e),tu(s)):s.ha.set("Unknown")}async function Lv(s,e,t){if(s.ha.set("Online"),e instanceof Lp&&e.state===2&&e.cause)try{await(async function(r,i){const o=i.cause;for(const a of i.targetIds){if(r.sa.has(a)){const c=r.oa.get(a);c!==void 0&&(await r.remoteSyncer.rejectListen(c,o),r._a.delete(c),r.oa.delete(a)),r.sa.delete(a)}r.Ta.removeTarget(a)}})(s,e)}catch(n){J(sn,"Failed to remove targets %s: %s ",e.targetIds.join(","),n),await va(s,n)}else if(e instanceof ta?s.Ta.se(e):e instanceof Fp?s.Ta.Ee(e):s.Ta.ae(e),!t.isEqual(ne.min()))try{const n=await yg(s.localStore);t.compareTo(n)>=0&&await(function(i,o){const a=i.Ta.de(o);a.targetChanges.forEach(((B,h)=>{if(B.resumeToken.approximateByteSize()>0){const f=i.sa.get(h);f&&i.sa.set(h,f.withResumeToken(B.resumeToken,o))}})),a.targetMismatches.forEach(((B,h)=>{const f=i.sa.get(B);if(!f)return;i.sa.set(B,f.withResumeToken(Le.EMPTY_BYTE_STRING,f.snapshotVersion)),wg(i,B);const C=new ln(f.target,B,h,f.sequenceNumber);eu(i,C)}));const c=(function(h,f){const C=new Map;f.targetChanges.forEach(((I,O)=>{const V=h.oa.get(O);V!==void 0&&C.set(V,I)}));let _=new Ne(Be);return f.targetMismatches.forEach(((I,O)=>{const V=h.oa.get(I);V!==void 0&&(_=_.insert(V,O))})),new ao(f.snapshotVersion,C,_,f.documentUpdates,f.augmentedDocumentUpdates,f.resolvedLimboDocuments)})(i,a);return i.remoteSyncer.applyRemoteEvent(c)})(s,t)}catch(n){J(sn,"Failed to raise snapshot:",n),await va(s,n)}}async function va(s,e,t){if(!Rr(e))throw e;s.ca.add(1),await uo(s),s.ha.set("Offline"),t||(t=()=>yg(s.localStore)),s.asyncQueue.enqueueRetryable((async()=>{J(sn,"Retrying IndexedDB access"),await t(),s.ca.delete(1),await Cl(s)}))}function vg(s,e){return e().catch((t=>va(s,t,e)))}async function pl(s){const e=se(s),t=es(e);let n=e.ia.length>0?e.ia[e.ia.length-1].batchId:IB;for(;kv(e);)try{const r=await Av(e.localStore,n);if(r===null){e.ia.length===0&&t.Xt();break}n=r.batchId,xv(e,r)}catch(r){await va(e,r)}Ag(e)&&Rg(e)}function kv(s){return Hs(s)&&s.ia.length<10}function xv(s,e){s.ia.push(e);const t=es(s);t.Jt()&&t.Rn&&t.In(e.mutations)}function Ag(s){return Hs(s)&&!es(s).Ht()&&s.ia.length>0}function Rg(s){es(s).start()}async function Mv(s){es(s).dn()}async function Vv(s){const e=es(s);for(const t of s.ia)e.In(t.mutations)}async function Gv(s,e,t){const n=s.ia.shift(),r=zB.from(n,e,t);await vg(s,(()=>s.remoteSyncer.applySuccessfulWrite(r))),await pl(s)}async function Hv(s,e){e&&es(s).Rn&&await(async function(n,r){if((function(o){return CI(o)&&o!==M.ABORTED})(r.code)){const i=n.ia.shift();es(n).Zt(),await vg(n,(()=>n.remoteSyncer.rejectFailedWrite(i.batchId,r))),await pl(n)}})(s,e),Ag(s)&&Rg(s)}async function fd(s,e){const t=se(s);t.asyncQueue.verifyOperationInProgress(),J(sn,"RemoteStore received new credentials");const n=Hs(t);t.ca.add(3),await uo(t),n&&t.ha.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.ca.delete(3),await Cl(t)}async function Uv(s,e){const t=se(s);e?(t.ca.delete(2),await Cl(t)):e||(t.ca.add(2),await uo(t),t.ha.set("Unknown"))}function br(s){return s.Pa||(s.Pa=(function(t,n,r){const i=se(t);return i.mn(),new ZI(n,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,r)})(s.datastore,s.asyncQueue,{ut:bv.bind(null,s),lt:Ov.bind(null,s),ht:Fv.bind(null,s),hn:Lv.bind(null,s)}),s.la.push((async e=>{e?(s.Pa.Zt(),nu(s)?tu(s):s.ha.set("Unknown")):(await s.Pa.stop(),Tg(s))}))),s.Pa}function es(s){return s.Ra||(s.Ra=(function(t,n,r){const i=se(t);return i.mn(),new ew(n,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,r)})(s.datastore,s.asyncQueue,{ut:()=>Promise.resolve(),lt:Mv.bind(null,s),ht:Hv.bind(null,s),An:Vv.bind(null,s),Vn:Gv.bind(null,s)}),s.la.push((async e=>{e?(s.Ra.Zt(),await pl(s)):(await s.Ra.stop(),s.ia.length>0&&(J(sn,`Stopping write stream with ${s.ia.length} pending writes`),s.ia=[]))}))),s.Ra}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jv{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ia(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ia(this.observer.error,e):gn("Uncaught Error in snapshot listener:",e.toString()))}Aa(){this.muted=!0}Ia(e,t){setTimeout((()=>{this.muted||e(t)}),0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class su{constructor(e,t,n,r,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=n,this.op=r,this.removalCallback=i,this.deferred=new ws,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((o=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,t,n,r,i){const o=Date.now()+n,a=new su(e,t,o,r,i);return a.start(n),a}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new K(M.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function ru(s,e){if(gn("AsyncQueue",`${e}: ${s}`),Rr(s))return new K(M.UNAVAILABLE,`${e}: ${s}`);throw s}class dd{constructor(){this.activeTargetIds=EI()}La(e){this.activeTargetIds=this.activeTargetIds.add(e)}Ba(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Na(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class qv{constructor(){this.du=new dd,this.fu={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,n){}addLocalQueryTarget(e,t=!0){return t&&this.du.La(e),this.fu[e]||"not-current"}updateQueryState(e,t,n){this.fu[e]=t}removeLocalQueryTarget(e){this.du.Ba(e)}isLocalQueryTarget(e){return this.du.activeTargetIds.has(e)}clearQueryState(e){delete this.fu[e]}getAllActiveQueryTargets(){return this.du.activeTargetIds}isActiveQueryTarget(e){return this.du.activeTargetIds.has(e)}start(){return this.du=new dd,Promise.resolve()}handleUserChange(e,t,n){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}function uc(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ts{static emptySet(e){return new Ts(e.comparator)}constructor(e){this.comparator=e?(t,n)=>e(t,n)||$.comparator(t.key,n.key):(t,n)=>$.comparator(t.key,n.key),this.keyedMap=Zs(),this.sortedSet=new Ne(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,n)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Ts)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),n=e.sortedSet.getIterator();for(;t.hasNext();){const r=t.getNext().key,i=n.getNext().key;if(!r.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const n=new Ts;return n.comparator=this.comparator,n.keyedMap=e,n.sortedSet=t,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cd{constructor(){this.mu=new Ne($.comparator)}track(e){const t=e.doc.key,n=this.mu.get(t);n?e.type!==0&&n.type===3?this.mu=this.mu.insert(t,e):e.type===3&&n.type!==1?this.mu=this.mu.insert(t,{type:n.type,doc:e.doc}):e.type===2&&n.type===2?this.mu=this.mu.insert(t,{type:2,doc:e.doc}):e.type===2&&n.type===0?this.mu=this.mu.insert(t,{type:0,doc:e.doc}):e.type===1&&n.type===0?this.mu=this.mu.remove(t):e.type===1&&n.type===2?this.mu=this.mu.insert(t,{type:1,doc:n.doc}):e.type===0&&n.type===1?this.mu=this.mu.insert(t,{type:2,doc:e.doc}):Y(63341,{ye:e,pu:n}):this.mu=this.mu.insert(t,e)}gu(){const e=[];return this.mu.inorderTraversal(((t,n)=>{e.push(n)})),e}}class Er{constructor(e,t,n,r,i,o,a,c,B){this.query=e,this.docs=t,this.oldDocs=n,this.docChanges=r,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=B}static fromInitialDocuments(e,t,n,r,i){const o=[];return t.forEach((a=>{o.push({type:0,doc:a})})),new Er(e,t,Ts.emptySet(t),o,n,r,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&fl(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,n=e.docChanges;if(t.length!==n.length)return!1;for(let r=0;r<t.length;r++)if(t[r].type!==n[r].type||!t[r].doc.isEqual(n[r].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jv{constructor(){this.yu=void 0,this.wu=[]}bu(){return this.wu.some((e=>e.Su()))}}class Kv{constructor(){this.queries=pd(),this.onlineState="Unknown",this.vu=new Set}terminate(){(function(t,n){const r=se(t),i=r.queries;r.queries=pd(),i.forEach(((o,a)=>{for(const c of a.wu)c.onError(n)}))})(this,new K(M.ABORTED,"Firestore shutting down"))}}function pd(){return new Vs((s=>Cg(s)),fl)}async function Wv(s,e){const t=se(s);let n=3;const r=e.query;let i=t.queries.get(r);i?!i.bu()&&e.Su()&&(n=2):(i=new jv,n=e.Su()?0:1);try{switch(n){case 0:i.yu=await t.onListen(r,!0);break;case 1:i.yu=await t.onListen(r,!1);break;case 2:await t.onFirstRemoteStoreListen(r)}}catch(o){const a=ru(o,`Initialization of query '${Ve(e.query)?fn(e.query):pi(e.query)}' failed`);return void e.onError(a)}t.queries.set(r,i),i.wu.push(e),e.Du(t.onlineState),i.yu&&e.xu(i.yu)&&iu(t)}async function zv(s,e){const t=se(s),n=e.query;let r=3;const i=t.queries.get(n);if(i){const o=i.wu.indexOf(e);o>=0&&(i.wu.splice(o,1),i.wu.length===0?r=e.Su()?0:1:!i.bu()&&e.Su()&&(r=2))}switch(r){case 0:return t.queries.delete(n),t.onUnlisten(n,!0);case 1:return t.queries.delete(n),t.onUnlisten(n,!1);case 2:return t.onLastRemoteStoreUnlisten(n);default:return}}function Qv(s,e){const t=se(s);let n=!1;for(const r of e){const i=r.query,o=t.queries.get(i);if(o){for(const a of o.wu)a.xu(r)&&(n=!0);o.yu=r}}n&&iu(t)}function Yv(s,e,t){const n=se(s),r=n.queries.get(e);if(r)for(const i of r.wu)i.onError(t);n.queries.delete(e)}function iu(s){s.vu.forEach((e=>{e.next()}))}var zc;(function(s){s.Default="default",s.Cache="cache"})(zc||(zc={}));class $v{constructor(e,t,n){this.query=e,this.Cu=t,this.Fu=!1,this.Ou=null,this.onlineState="Unknown",this.options=n||{}}xu(e){if(!this.options.includeMetadataChanges){const n=[];for(const r of e.docChanges)r.type!==3&&n.push(r);e=new Er(e.query,e.docs,e.oldDocs,n,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Fu?this.Mu(e)&&(this.Cu.next(e),t=!0):this.Nu(e,this.onlineState)&&(this.Lu(e),t=!0),this.Ou=e,t}onError(e){this.Cu.error(e)}Du(e){this.onlineState=e;let t=!1;return this.Ou&&!this.Fu&&this.Nu(this.Ou,e)&&(this.Lu(this.Ou),t=!0),t}Nu(e,t){if(!e.fromCache||!this.Su())return!0;const n=t!=="Offline";return(!this.options.waitForSyncWhenOnline||!n)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Mu(e){if(e.docChanges.length>0)return!0;const t=this.Ou&&this.Ou.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}Lu(e){e=Er.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Fu=!0,this.Cu.next(e)}Su(){return this.options.source!==zc.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sg{constructor(e){this.key=e}}class Pg{constructor(e){this.key=e}}class Xv{constructor(e,t){this.query=e,this.Gu=t,this.zu=null,this.hasCachedResults=!1,this.current=!1,this.ju=ae(),this.mutatedKeys=ae(),this.Hu=Ve(e)?jc(e):RB(e),this.Ju=new Ts(this.Hu)}get Yu(){return this.Gu}Zu(e,t){const n=t?t.Xu:new Cd,r=t?t.Ju:this.Ju;let i=t?t.mutatedKeys:this.mutatedKeys,o=r,a=!1;const[c,B]=this.ec(this.query,r);e.inorderTraversal(((f,C)=>{const _=r.get(f),I=iv(this.query,C)?C:null,O=!!_&&this.mutatedKeys.has(_.key),V=!!I&&(I.hasLocalMutations||this.mutatedKeys.has(I.key)&&I.hasCommittedMutations);let q=!1;_&&I?_.data.isEqual(I.data)?O!==V&&(n.track({type:3,doc:I}),q=!0):this.tc(_,I)||(n.track({type:2,doc:I}),q=!0,(c&&this.Hu(I,c)>0||B&&this.Hu(I,B)<0)&&(a=!0)):!_&&I?(n.track({type:0,doc:I}),q=!0):_&&!I&&(n.track({type:1,doc:_}),q=!0,(c||B)&&(a=!0)),q&&(I?(o=o.add(I),i=V?i.add(f):i.delete(f)):(o=o.delete(f),i=i.delete(f)))}));const h=this.nc(this.query);if(h)if(Ve(this.query)){const f=[];o.forEach((I=>f.push(I)));const C=_g(this.query,f);let _=new Ts(jc(this.query));for(const I of C)_=_.add(I);o.forEach((I=>{_.has(I.key)||(i=i.delete(I.key),n.track({type:1,doc:I}))})),o=_}else{const f=this.rc(this.query);for(;o.size>h;){const C=f==="F"?o.last():o.first();o=o.delete(C.key),i=i.delete(C.key),n.track({type:1,doc:C})}}return{Ju:o,Xu:n,Fo:a,mutatedKeys:i}}nc(e){return Ve(e)?Bc(e)?.limit:e.limit||void 0}rc(e){if(Ve(e)){const t=Bc(e);return t&&t.limit<0?"L":"F"}return e.limitType}ec(e,t){if(Ve(e)){const n=Bc(e)?.limit;return[t.size===n?t.last():null,null]}return[e.limitType==="F"&&t.size===this.nc(this.query)?t.last():null,e.limitType==="L"&&t.size===this.nc(this.query)?t.first():null]}tc(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,n,r){const i=this.Ju;this.Ju=e.Ju,this.mutatedKeys=e.mutatedKeys;const o=e.Xu.gu();o.sort(((h,f)=>(function(_,I){const O=V=>{switch(V){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Y(20277,{ye:V})}};return O(_)-O(I)})(h.type,f.type)||this.Hu(h.doc,f.doc))),this.sc(n),r=r??!1;const a=t&&!r?this._c():[],c=this.ju.size===0&&this.current&&!r?1:0,B=c!==this.zu;return this.zu=c,o.length!==0||B?{snapshot:new Er(this.query,e.Ju,i,o,e.mutatedKeys,c===0,B,!1,!!n&&n.resumeToken.approximateByteSize()>0),oc:a}:{oc:a}}Du(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ju:this.Ju,Xu:new Cd,mutatedKeys:this.mutatedKeys,Fo:!1},!1)):{oc:[]}}ac(e){return!this.Gu.has(e)&&!!this.Ju.has(e)&&!this.Ju.get(e).hasLocalMutations}sc(e){e&&(e.addedDocuments.forEach((t=>this.Gu=this.Gu.add(t))),e.modifiedDocuments.forEach((t=>{})),e.removedDocuments.forEach((t=>this.Gu=this.Gu.delete(t))),this.current=e.current)}_c(){if(!this.current)return[];const e=this.ju;this.ju=ae(),this.Ju.forEach((n=>{this.ac(n.key)&&(this.ju=this.ju.add(n.key))}));const t=[];return e.forEach((n=>{this.ju.has(n)||t.push(new Pg(n))})),this.ju.forEach((n=>{e.has(n)||t.push(new Sg(n))})),t}uc(e){this.Gu=e.Qo,this.ju=ae();const t=this.Zu(e.documents);return this.applyChanges(t,!0)}cc(){return Er.fromInitialDocuments(this.query,this.Ju,this.mutatedKeys,this.zu===0,this.hasCachedResults)}}const ou="SyncEngine";class Zv{constructor(e,t,n){this.query=e,this.targetId=t,this.view=n}}class eA{constructor(e){this.key=e,this.lc=!1}}class tA{constructor(e,t,n,r,i,o){this.localStore=e,this.remoteStore=t,this.eventManager=n,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.Ec={},this.hc=new Vs((a=>Cg(a)),fl),this.Tc=new Map,this.Pc=new Set,this.Rc=new Ne($.comparator),this.Ic=new Map,this.Ac=new QB,this.Vc={},this.dc=new Map,this.fc=Zn.ws(),this.onlineState="Unknown",this.mc=void 0}get isPrimaryClient(){return this.mc===!0}}async function nA(s,e,t=!0){const n=kg(s);let r;const i=n.hc.get(e);return i?(n.sharedClientState.addLocalQueryTarget(i.targetId),r=i.view.cc()):r=await Ng(n,e,t,!0),r}async function sA(s,e){const t=kg(s);await Ng(t,e,!0,!1)}async function Ng(s,e,t,n){const r=await Rv(s.localStore,Ve(e)?e:Yt(e)),i=r.targetId,o=s.sharedClientState.addLocalQueryTarget(i,t);let a;return n&&(a=await rA(s,e,i,o==="current",r.resumeToken)),s.isPrimaryClient&&t&&Ig(s.remoteStore,r),a}async function rA(s,e,t,n,r){s.gc=(f,C,_)=>(async function(O,V,q,re){let pe=V.view.Zu(q);pe.Fo&&(pe=await hd(O.localStore,V.query,!1).then((({documents:A})=>V.view.Zu(A,pe))));const Re=re&&re.targetChanges.get(V.targetId),yt=re&&re.targetMismatches.get(V.targetId)!=null,ve=V.view.applyChanges(pe,O.isPrimaryClient,Re,yt);return md(O,V.targetId,ve.oc),ve.snapshot})(s,f,C,_);const i=await hd(s.localStore,e,!0),o=new Xv(e,i.Qo),a=o.Zu(i.documents),c=lo.createSynthesizedTargetChangeForCurrentChange(t,n&&s.onlineState!=="Offline",r),B=o.applyChanges(a,s.isPrimaryClient,c);md(s,t,B.oc);const h=new Zv(e,t,o);return s.hc.set(e,h),s.Tc.has(t)?s.Tc.get(t).push(e):s.Tc.set(t,[e]),B.snapshot}async function iA(s,e,t){const n=se(s),r=n.hc.get(e),i=n.Tc.get(r.targetId);if(i.length>1)return n.Tc.set(r.targetId,i.filter((o=>!fl(o,e)))),void n.hc.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await Kc(n.localStore,r.targetId,!1).then((()=>{n.sharedClientState.clearQueryState(r.targetId),t&&ZB(n.remoteStore,r.targetId),Qc(n,r.targetId)})).catch(Ar)):(Qc(n,r.targetId),await Kc(n.localStore,r.targetId,!0))}async function oA(s,e){const t=se(s),n=t.hc.get(e),r=t.Tc.get(n.targetId);t.isPrimaryClient&&r.length===1&&(t.sharedClientState.removeLocalQueryTarget(n.targetId),ZB(t.remoteStore,n.targetId))}async function aA(s,e,t){const n=dA(s);try{const r=await(function(o,a){const c=se(o),B=Te.now(),h=a.reduce(((_,I)=>_.add(I.key)),ae());let f,C;return c.persistence.runTransaction("Locally write mutations","readwrite",(_=>{let I=ft(),O=ae();return c.Uo.getEntries(_,h).next((V=>{I=V,I.forEach(((q,re)=>{re.isValidDocument()||(O=O.add(q))}))})).next((()=>c.localDocuments.getOverlayedDocuments(_,I))).next((V=>{f=V;const q=[];for(const re of a){const pe=Wy(re,f.get(re.key).overlayedDocument);pe!=null&&q.push(new Ms(re.key,pe,fp(pe.value.mapValue),hn.exists(!0)))}return c.mutationQueue.addMutationBatch(_,B,q,a)})).next((V=>{C=V;const q=V.applyToLocalDocumentSet(f,O);return c.documentOverlayCache.saveOverlays(_,V.batchId,q)}))})).then((()=>({batchId:C.batchId,changes:bp(f)})))})(n.localStore,e);n.sharedClientState.addPendingMutation(r.batchId),(function(o,a,c){let B=o.Vc[o.currentUser.toKey()];B||(B=new Ne(Be)),B=B.insert(a,c),o.Vc[o.currentUser.toKey()]=B})(n,r.batchId,t),await ho(n,r.changes),await pl(n.remoteStore)}catch(r){const i=ru(r,"Failed to persist write");t.reject(i)}}async function bg(s,e){const t=se(s);try{const n=await Tv(t.localStore,e);e.targetChanges.forEach(((r,i)=>{const o=t.Ic.get(i);o&&(z(r.addedDocuments.size+r.modifiedDocuments.size+r.removedDocuments.size<=1,22616),r.addedDocuments.size>0?o.lc=!0:r.modifiedDocuments.size>0?z(o.lc,14607):r.removedDocuments.size>0&&(z(o.lc,42227),o.lc=!1))})),await ho(t,n,e)}catch(n){await Ar(n)}}function gd(s,e,t){const n=se(s);if(n.isPrimaryClient&&t===0||!n.isPrimaryClient&&t===1){const r=[];n.hc.forEach(((i,o)=>{const a=o.view.Du(e);a.snapshot&&r.push(a.snapshot)})),(function(o,a){const c=se(o);c.onlineState=a;let B=!1;c.queries.forEach(((h,f)=>{for(const C of f.wu)C.Du(a)&&(B=!0)})),B&&iu(c)})(n.eventManager,e),r.length&&n.Ec.hn(r),n.onlineState=e,n.isPrimaryClient&&n.sharedClientState.setOnlineState(e)}}async function lA(s,e,t){const n=se(s);n.sharedClientState.updateQueryState(e,"rejected",t);const r=n.Ic.get(e),i=r&&r.key;if(i){let o=new Ne($.comparator);o=o.insert(i,tt.newNoDocument(i,ne.min()));const a=ae().add(i),c=new ao(ne.min(),new Map,new Ne(Be),o,ft(),a);await bg(n,c),n.Rc=n.Rc.remove(i),n.Ic.delete(e),au(n)}else await Kc(n.localStore,e,!1).then((()=>Qc(n,e,t))).catch(Ar)}async function cA(s,e){const t=se(s),n=e.batch.batchId;try{const r=await wv(t.localStore,e);Fg(t,n,null),Og(t,n),t.sharedClientState.updateMutationState(n,"acknowledged"),await ho(t,r)}catch(r){await Ar(r)}}async function BA(s,e,t){const n=se(s);try{const r=await(function(o,a){const c=se(o);return c.persistence.runTransaction("Reject batch","readwrite-primary",(B=>{let h;return c.mutationQueue.lookupMutationBatch(B,a).next((f=>(z(f!==null,37113),h=f.keys(),c.mutationQueue.removeMutationBatch(B,f)))).next((()=>c.mutationQueue.performConsistencyCheck(B))).next((()=>c.documentOverlayCache.removeOverlaysForBatchId(B,h,a))).next((()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(B,h))).next((()=>c.localDocuments.getDocuments(B,h)))}))})(n.localStore,e);Fg(n,e,t),Og(n,e),n.sharedClientState.updateMutationState(e,"rejected",t),await ho(n,r)}catch(r){await Ar(r)}}function Og(s,e){(s.dc.get(e)||[]).forEach((t=>{t.resolve()})),s.dc.delete(e)}function Fg(s,e,t){const n=se(s);let r=n.Vc[n.currentUser.toKey()];if(r){const i=r.get(e);i&&(t?i.reject(t):i.resolve(),r=r.remove(e)),n.Vc[n.currentUser.toKey()]=r}}function Qc(s,e,t=null){s.sharedClientState.removeLocalQueryTarget(e);for(const n of s.Tc.get(e))s.hc.delete(n),t&&s.Ec.yc(n,t);s.Tc.delete(e),s.isPrimaryClient&&s.Ac.Xs(e).forEach((n=>{s.Ac.containsKey(n)||Lg(s,n)}))}function Lg(s,e){s.Pc.delete(e.path.canonicalString());const t=s.Rc.get(e);t!==null&&(ZB(s.remoteStore,t),s.Rc=s.Rc.remove(e),s.Ic.delete(t),au(s))}function md(s,e,t){for(const n of t)n instanceof Sg?(s.Ac.addReference(n.key,e),uA(s,n)):n instanceof Pg?(J(ou,"Document no longer in limbo: "+n.key),s.Ac.removeReference(n.key,e),s.Ac.containsKey(n.key)||Lg(s,n.key)):Y(19791,{wc:n})}function uA(s,e){const t=e.key,n=t.path.canonicalString();s.Rc.get(t)||s.Pc.has(n)||(J(ou,"New document in limbo: "+t),s.Pc.add(n),au(s))}function au(s){for(;s.Pc.size>0&&s.Rc.size<s.maxConcurrentLimboResolutions;){const e=s.Pc.values().next().value;s.Pc.delete(e);const t=new $(ge.fromString(e)),n=s.fc.next();s.Ic.set(n,new eA(t)),s.Rc=s.Rc.insert(t,n),Ig(s.remoteStore,new ln(Yt(AB(t.path)),n,"TargetPurposeLimboResolution",ol.yn))}}async function ho(s,e,t){const n=se(s),r=[],i=[],o=[];n.hc.isEmpty()||(n.hc.forEach(((a,c)=>{o.push(n.gc(c,e,t).then((B=>{if((B||t)&&n.isPrimaryClient){const h=B?!B.fromCache:t?.targetChanges.get(c.targetId)?.current;n.sharedClientState.updateQueryState(c.targetId,h?"current":"not-current")}if(B){r.push(B);const h=$B.fo(c.targetId,B);i.push(h)}})))})),await Promise.all(o),n.Ec.hn(r),await(async function(c,B){const h=se(c);try{await h.persistence.runTransaction("notifyLocalViewChanges","readwrite",(f=>k.forEach(B,(C=>k.forEach(C.Ao,(_=>h.persistence.referenceDelegate.addReference(f,C.targetId,_))).next((()=>k.forEach(C.Vo,(_=>h.persistence.referenceDelegate.removeReference(f,C.targetId,_)))))))))}catch(f){if(!Rr(f))throw f;J(XB,"Failed to update sequence numbers: "+f)}for(const f of B){const C=f.targetId;if(!f.fromCache){const _=h.No.get(C),I=_.snapshotVersion,O=_.withLastLimboFreeSnapshotVersion(I);h.No=h.No.insert(C,O)}}})(n.localStore,i))}async function hA(s,e){const t=se(s);if(!t.currentUser.isEqual(e)){J(ou,"User change. New user:",e.toKey());const n=await Dg(t.localStore,e);t.currentUser=e,(function(i,o){i.dc.forEach((a=>{a.forEach((c=>{c.reject(new K(M.CANCELLED,o))}))})),i.dc.clear()})(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,n.removedBatchIds,n.addedBatchIds),await ho(t,n.qo)}}function fA(s,e){const t=se(s),n=t.Ic.get(e);if(n&&n.lc)return ae().add(n.key);{let r=ae();const i=t.Tc.get(e);if(!i)return r;for(const o of i??[]){const a=t.hc.get(o);r=r.unionWith(a.view.Yu)}return r}}function kg(s){const e=se(s);return e.remoteStore.remoteSyncer.applyRemoteEvent=bg.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=fA.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=lA.bind(null,e),e.Ec.hn=Qv.bind(null,e.eventManager),e.Ec.yc=Yv.bind(null,e.eventManager),e}function dA(s){const e=se(s);return e.remoteStore.remoteSyncer.applySuccessfulWrite=cA.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=BA.bind(null,e),e}class Aa{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=il(e.databaseInfo.databaseId),this.sharedClientState=this.Sc(e),this.persistence=this.vc(e),await this.persistence.start(),this.localStore=this.Dc(e),this.gcScheduler=this.xc(e,this.localStore),this.indexBackfillerScheduler=this.Cc(e,this.localStore)}xc(e,t){return null}Cc(e,t){return null}Dc(e){return Iv(this.persistence,new Ev,e.initialUser,this.serializer)}vc(e){return new Eg(YB.w_,this.serializer)}Sc(e){return new qv}async terminate(){this.gcScheduler?.stop(),this.indexBackfillerScheduler?.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Aa.provider={build:()=>new Aa};class CA extends Aa{constructor(e){super(),this.cacheSizeBytes=e}xc(e,t){z(this.persistence.referenceDelegate instanceof Ta,46915);const n=this.persistence.referenceDelegate.garbageCollector;return new uw(n,e.asyncQueue,t)}vc(e){const t=this.cacheSizeBytes!==void 0?ut.withCacheSize(this.cacheSizeBytes):ut.DEFAULT;return new Eg((n=>Ta.w_(n,t)),this.serializer)}}class Yc{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=n=>gd(this.syncEngine,n,1),this.remoteStore.remoteSyncer.handleCredentialChange=hA.bind(null,this.syncEngine),await Uv(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new Kv})()}createDatastore(e){const t=il(e.databaseInfo.databaseId),n=XI(e.databaseInfo);return sw(e.authCredentials,e.appCheckCredentials,n,t)}createRemoteStore(e){return(function(n,r,i,o,a){return new Nv(n,r,i,o,a)})(this.localStore,this.datastore,e.asyncQueue,(t=>gd(this.syncEngine,t,0)),(function(){return td.Je()?new td:new zI})())}createSyncEngine(e,t){return(function(r,i,o,a,c,B,h){const f=new tA(r,i,o,a,c,B);return h&&(f.mc=!0),f})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){await(async function(t){const n=se(t);J(sn,"RemoteStore shutting down."),n.ca.add(5),await uo(n),n.Ea.shutdown(),n.ha.set("Unknown")})(this.remoteStore),this.datastore?.terminate(),this.eventManager?.terminate()}}Yc.provider={build:()=>new Yc};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ts="FirestoreClient";class pA{constructor(e,t,n,r,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=n,this._databaseInfo=r,this.user=et.UNAUTHENTICATED,this.clientId=DB.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(n,(async o=>{J(ts,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o})),this.appCheckCredentials.start(n,(o=>(J(ts,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this._databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new ws;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const n=ru(t,"Failed to shutdown persistence");e.reject(n)}})),e.promise}}async function hc(s,e){s.asyncQueue.verifyOperationInProgress(),J(ts,"Initializing OfflineComponentProvider");const t=s.configuration;await e.initialize(t);let n=t.initialUser;s.setCredentialChangeListener((async r=>{n.isEqual(r)||(await Dg(e.localStore,r),n=r)})),e.persistence.setDatabaseDeletedListener((()=>s.terminate())),s._offlineComponents=e}async function _d(s,e){s.asyncQueue.verifyOperationInProgress();const t=await gA(s);J(ts,"Initializing OnlineComponentProvider"),await e.initialize(t,s.configuration),s.setCredentialChangeListener((n=>fd(e.remoteStore,n))),s.setAppCheckTokenChangeListener(((n,r)=>fd(e.remoteStore,r))),s._onlineComponents=e}async function gA(s){if(!s._offlineComponents)if(s._uninitializedComponentsProvider){J(ts,"Using user provided OfflineComponentProvider");try{await hc(s,s._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!(function(r){return r.name==="FirebaseError"?r.code===M.FAILED_PRECONDITION||r.code===M.UNIMPLEMENTED:!(typeof DOMException<"u"&&r instanceof DOMException)||r.code===22||r.code===20||r.code===11})(t))throw t;Ut("Error using user provided cache. Falling back to memory cache: "+t),await hc(s,new Aa)}}else J(ts,"Using default OfflineComponentProvider"),await hc(s,new CA(void 0));return s._offlineComponents}async function xg(s){return s._onlineComponents||(s._uninitializedComponentsProvider?(J(ts,"Using user provided OnlineComponentProvider"),await _d(s,s._uninitializedComponentsProvider._online)):(J(ts,"Using default OnlineComponentProvider"),await _d(s,new Yc))),s._onlineComponents}function mA(s){return xg(s).then((e=>e.syncEngine))}async function Ed(s){const e=await xg(s),t=e.eventManager;return t.onListen=nA.bind(null,e.syncEngine),t.onUnlisten=iA.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=sA.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=oA.bind(null,e.syncEngine),t}function _A(s,e,t,n){const r=new Jv(n),i=new $v(e,r,t);return s.asyncQueue.enqueueAndForget((async()=>Wv(await Ed(s),i))),()=>{r.Aa(),s.asyncQueue.enqueueAndForget((async()=>zv(await Ed(s),i)))}}function EA(s,e){const t=new ws;return s.asyncQueue.enqueueAndForget((async()=>aA(await mA(s),e,t))),t.promise}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Mg=class{constructor(e,t,n,r,i){this._firestore=e,this._userDataWriter=t,this._key=n,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new He(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new DA(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}_fieldsProto(){return this._document?.data.clone().value.mapValue.fields??void 0}get(e){if(this._document){const t=this._document.data.field(ll("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}},DA=class extends Mg{data(){return super.data()}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yA{convertValue(e,t="none"){switch(ke(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ae(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(zn(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw Y(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const n={};return xs(e,((r,i)=>{n[r]=this.convertValue(i,t)})),n}convertVectorValue(e){const t=e.fields?.[Ni].arrayValue?.values?.map((n=>Ae(n.doubleValue)));return new pt(t)}convertGeoPoint(e){return new Xt(Ae(e.latitude),Ae(e.longitude))}convertArray(e,t){return(e.values||[]).map((n=>this.convertValue(n,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const n=io(e);return n==null?null:this.convertValue(n,t);case"estimate":return this.convertTimestamp(pr(e));default:return null}}convertTimestamp(e){const t=Wn(e);return new Te(t.seconds,t.nanos)}convertDocumentKey(e,t){const n=ge.fromString(e);z(Up(n),9688,{name:e});const r=new Si(n.get(1),n.get(3)),i=new $(n.popFirst(5));return r.isEqual(t)||gn(`A document reference to ${i} refers to a different database (${r.projectId}/${r.database}), which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function IA(s,e,t){let n;return n=s?t&&(t.merge||t.mergeFields)?s.toFirestore(e,t):s.toFirestore(e):e,n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dd="AsyncQueue";class yd{constructor(e=Promise.resolve()){this.qc=[],this.$c=!1,this.Kc=[],this.Qc=null,this.Wc=!1,this.Gc=!1,this.zc=[],this.jt=new zp(this,"async_queue_retry"),this.jc=()=>{const n=uc();n&&J(Dd,"Visibility state changed to "+n.visibilityState),this.jt.qt()},this.Hc=e;const t=uc();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.jc)}get isShuttingDown(){return this.$c}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Jc(),this.Yc(e)}enterRestrictedMode(e){if(!this.$c){this.$c=!0,this.Gc=e||!1;const t=uc();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.jc)}}enqueue(e){if(this.Jc(),this.$c)return new Promise((()=>{}));const t=new ws;return this.Yc((()=>this.$c&&this.Gc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.qc.push(e),this.Zc())))}async Zc(){if(this.qc.length!==0){try{await this.qc[0](),this.qc.shift(),this.jt.reset()}catch(e){if(!Rr(e))throw e;J(Dd,"Operation failed with retryable error: "+e)}this.qc.length>0&&this.jt.Ut((()=>this.Zc()))}}Yc(e){const t=this.Hc.then((()=>(this.Wc=!0,e().catch((n=>{throw this.Qc=n,this.Wc=!1,gn("INTERNAL UNHANDLED ERROR: ",Id(n)),n})).then((n=>(this.Wc=!1,n))))));return this.Hc=t,t}enqueueAfterDelay(e,t,n){this.Jc(),this.zc.indexOf(e)>-1&&(t=0);const r=su.createAndSchedule(this,e,t,n,(i=>this.Xc(i)));return this.Kc.push(r),r}Jc(){this.Qc&&Y(47125,{el:Id(this.Qc)})}verifyOperationInProgress(){}async tl(){let e;do e=this.Hc,await e;while(e!==this.Hc)}nl(e){for(const t of this.Kc)if(t.timerId===e)return!0;return!1}rl(e){return this.tl().then((()=>{this.Kc.sort(((t,n)=>t.targetTimeMs-n.targetTimeMs));for(const t of this.Kc)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.tl()}))}il(e){this.zc.push(e)}Xc(e){const t=this.Kc.indexOf(e);this.Kc.splice(t,1)}}function Id(s){let e=s.message||"";return s.stack&&(e=s.stack.includes(s.message)?s.stack:s.message+`
`+s.stack),e}class Ra extends OB{constructor(e,t,n,r){super(e,t,n,r),this.type="firestore",this._queue=new yd,this._persistenceKey=r?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new yd(e),this._firestoreClient=void 0,await e}}}function tb(s,e){const t=typeof s=="object"?s:gB(),n=typeof s=="string"?s:fa,r=$a(t,"firestore").getImmediate({identifier:n});if(!r._initialized){const i=LC("firestore");i&&dw(r,...i)}return r}function Vg(s){if(s._terminated)throw new K(M.FAILED_PRECONDITION,"The client has already been terminated.");return s._firestoreClient||wA(s),s._firestoreClient}function wA(s){const e=s._freezeSettings(),t=iw(s._databaseId,s._app?.options.appId||"",s._persistenceKey,s._app?.options.apiKey,e);s._componentsProvider||e.localCache?._offlineComponentProvider&&e.localCache?._onlineComponentProvider&&(s._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),s._firestoreClient=new pA(s._authCredentials,s._appCheckCredentials,s._queue,t,s._componentsProvider&&(function(r){const i=r?._online.build();return{_offline:r?._offline.build(i),_online:i}})(s._componentsProvider))}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gg extends yA{constructor(e){super(),this.firestore=e}convertBytes(e){return new Ft(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new He(this.firestore,null,t)}}class ui{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class vs extends Mg{constructor(e,t,n,r,i,o){super(e,t,n,r,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new sa(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const n=this._document.data.field(ll("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new K(M.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=vs._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}vs._jsonSchemaVersion="firestore/documentSnapshot/1.0",vs._jsonSchema={type:Oe("string",vs._jsonSchemaVersion),bundleSource:Oe("string","DocumentSnapshot"),bundleName:Oe("string"),bundle:Oe("string")};class sa extends vs{data(e={}){return super.data(e)}}class or{constructor(e,t,n,r){this._firestore=e,this._userDataWriter=t,this._snapshot=r,this.metadata=new ui(r.hasPendingWrites,r.fromCache),this.query=n}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach((n=>{e.call(t,new sa(this._firestore,this._userDataWriter,n.key,n,new ui(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new K(M.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=(function(r,i){if(r._snapshot.oldDocs.isEmpty()){let o=0;return r._snapshot.docChanges.map((a=>{Ve(r._snapshot.query)?jc(r._snapshot.query):RB(r.query._query);const c=new sa(r._firestore,r._userDataWriter,a.doc.key,a.doc,new ui(r._snapshot.mutatedKeys.has(a.doc.key),r._snapshot.fromCache),r.query.converter);return a.doc,{type:"added",doc:c,oldIndex:-1,newIndex:o++}}))}{let o=r._snapshot.oldDocs;return r._snapshot.docChanges.filter((a=>i||a.type!==3)).map((a=>{const c=new sa(r._firestore,r._userDataWriter,a.doc.key,a.doc,new ui(r._snapshot.mutatedKeys.has(a.doc.key),r._snapshot.fromCache),r.query.converter);let B=-1,h=-1;return a.type!==0&&(B=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),h=o.indexOf(a.doc.key)),{type:TA(a.type),doc:c,oldIndex:B,newIndex:h}}))}})(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new K(M.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=or._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=DB.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],n=[],r=[];return this.docs.forEach((i=>{i._document!==null&&(t.push(i._document),n.push(this._userDataWriter.convertObjectMap(i._document.data.value.mapValue.fields,"previous")),r.push(i.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function TA(s){switch(s){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Y(61501,{type:s})}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */or._jsonSchemaVersion="firestore/querySnapshot/1.0",or._jsonSchema={type:Oe("string",or._jsonSchemaVersion),bundleSource:Oe("string","QuerySnapshot"),bundleName:Oe("string"),bundle:Oe("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vA(s){if(s.limitType==="L"&&s.explicitOrderBy.length===0)throw new K(M.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wd(s){return(function(t,n){if(typeof t!="object"||t===null)return!1;const r=t;for(const i of n)if(i in r&&typeof r[i]=="function")return!0;return!1})(s,["next","error","complete"])}function nb(s,e,t){s=rr(s,He);const n=rr(s.firestore,Ra),r=IA(s.converter,e,t),i=mw(n);return AA(n,[_w(i,"setDoc",s._key,r,s.converter!==null,t).toMutation(s._key,hn.none())])}function sb(s,...e){s=Ye(s);let t={includeMetadataChanges:!1,source:"default"},n=0;typeof e[n]!="object"||wd(e[n])||(t=e[n++]);const r={includeMetadataChanges:t.includeMetadataChanges,source:t.source};if(wd(e[n])){const B=e[n];e[n]=B.next?.bind(B),e[n+1]=B.error?.bind(B),e[n+2]=B.complete?.bind(B)}let i,o,a;if(s instanceof He)o=rr(s.firestore,Ra),a=AB(s._key.path),i={next:B=>{e[n]&&e[n](RA(o,s,B))},error:e[n+1],complete:e[n+2]};else{const B=rr(s,al);o=rr(B.firestore,Ra),a=B._query;const h=new Gg(o);i={next:f=>{e[n]&&e[n](new or(o,h,B,f))},error:e[n+1],complete:e[n+2]},vA(s._query)}const c=Vg(o);return _A(c,a,r,i)}function AA(s,e){const t=Vg(s);return EA(t,e)}function RA(s,e,t){const n=t.docs.get(e._key),r=new Gg(s);return new vs(s,r,e._key,n,new ui(t.hasPendingWrites,t.fromCache),e.converter)}const Td="@firebase/firestore",vd="4.17.1";(function(e,t=!0){Ay(ks),As(new Kn("firestore",((n,{instanceIdentifier:r,options:i})=>{const o=n.getProvider("app").getImmediate(),a=new Ra(new qI(n.getProvider("auth-internal")),new WI(o,n.getProvider("app-check-internal")),xy(o,r),o);return i={useFetchStreams:t,...i},a._setSettings(i),a}),"PUBLIC").setMultipleInstances(!0)),Qt(Td,vd,e),Qt(Td,vd,"esm2020")})();var Ad={};const Rd="@firebase/database",Sd="1.1.5";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Hg="";function SA(s){Hg=s}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PA{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){t==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),We(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return t==null?null:Ti(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NA{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){t==null?delete this.cache_[e]:this.cache_[e]=t}get(e){return In(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ug=function(s){try{if(typeof window<"u"&&typeof window[s]<"u"){const e=window[s];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new PA(e)}}catch{}return new NA},Ds=Ug("localStorage"),bA=Ug("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ar=new Ya("@firebase/database"),OA=(function(){let s=1;return function(){return s++}})(),Jg=function(s){const e=ME(s),t=new FE;t.update(e);const n=t.digest();return hB.encodeByteArray(n)},fo=function(...s){let e="";for(let t=0;t<s.length;t++){const n=s[t];Array.isArray(n)||n&&typeof n=="object"&&typeof n.length=="number"?e+=fo.apply(null,n):typeof n=="object"?e+=We(n):e+=n,e+=" "}return e};let _i=null,Pd=!0;const FA=function(s,e){H(!0,"Can't turn on custom loggers persistently."),ar.logLevel=ce.VERBOSE,_i=ar.log.bind(ar)},nt=function(...s){if(Pd===!0&&(Pd=!1,_i===null&&bA.get("logging_enabled")===!0&&FA()),_i){const e=fo.apply(null,s);_i(e)}},Co=function(s){return function(...e){nt(s,...e)}},$c=function(...s){const e="FIREBASE INTERNAL ERROR: "+fo(...s);ar.error(e)},_n=function(...s){const e=`FIREBASE FATAL ERROR: ${fo(...s)}`;throw ar.error(e),new Error(e)},gt=function(...s){const e="FIREBASE WARNING: "+fo(...s);ar.warn(e)},LA=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&gt("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},qg=function(s){return typeof s=="number"&&(s!==s||s===Number.POSITIVE_INFINITY||s===Number.NEGATIVE_INFINITY)},kA=function(s){if(document.readyState==="complete")s();else{let e=!1;const t=function(){if(!document.body){setTimeout(t,Math.floor(10));return}e||(e=!0,s())};document.addEventListener?(document.addEventListener("DOMContentLoaded",t,!1),window.addEventListener("load",t,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&t()}),window.attachEvent("onload",t))}},Dr="[MIN_NAME]",Ps="[MAX_NAME]",Or=function(s,e){if(s===e)return 0;if(s===Dr||e===Ps)return-1;if(e===Dr||s===Ps)return 1;{const t=Nd(s),n=Nd(e);return t!==null?n!==null?t-n===0?s.length-e.length:t-n:-1:n!==null?1:s<e?-1:1}},xA=function(s,e){return s===e?0:s<e?-1:1},ti=function(s,e){if(e&&s in e)return e[s];throw new Error("Missing required key ("+s+") in object: "+We(e))},lu=function(s){if(typeof s!="object"||s===null)return We(s);const e=[];for(const n in s)e.push(n);e.sort();let t="{";for(let n=0;n<e.length;n++)n!==0&&(t+=","),t+=We(e[n]),t+=":",t+=lu(s[e[n]]);return t+="}",t},jg=function(s,e){const t=s.length;if(t<=e)return[s];const n=[];for(let r=0;r<t;r+=e)r+e>t?n.push(s.substring(r,t)):n.push(s.substring(r,r+e));return n};function Dt(s,e){for(const t in s)s.hasOwnProperty(t)&&e(t,s[t])}const Kg=function(s){H(!qg(s),"Invalid JSON number");const e=11,t=52,n=(1<<e-1)-1;let r,i,o,a,c;s===0?(i=0,o=0,r=1/s===-1/0?1:0):(r=s<0,s=Math.abs(s),s>=Math.pow(2,1-n)?(a=Math.min(Math.floor(Math.log(s)/Math.LN2),n),i=a+n,o=Math.round(s*Math.pow(2,t-a)-Math.pow(2,t))):(i=0,o=Math.round(s/Math.pow(2,1-n-t))));const B=[];for(c=t;c;c-=1)B.push(o%2?1:0),o=Math.floor(o/2);for(c=e;c;c-=1)B.push(i%2?1:0),i=Math.floor(i/2);B.push(r?1:0),B.reverse();const h=B.join("");let f="";for(c=0;c<64;c+=8){let C=parseInt(h.substr(c,8),2).toString(16);C.length===1&&(C="0"+C),f=f+C}return f.toLowerCase()},MA=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},VA=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function GA(s,e){let t="Unknown Error";s==="too_big"?t="The data requested exceeds the maximum size that can be accessed with a single request.":s==="permission_denied"?t="Client doesn't have permission to access the desired data.":s==="unavailable"&&(t="The service is unavailable");const n=new Error(s+" at "+e._path.toString()+": "+t);return n.code=s.toUpperCase(),n}const HA=new RegExp("^-?(0*)\\d{1,10}$"),UA=-2147483648,JA=2147483647,Nd=function(s){if(HA.test(s)){const e=Number(s);if(e>=UA&&e<=JA)return e}return null},Fr=function(s){try{s()}catch(e){setTimeout(()=>{const t=e.stack||"";throw gt("Exception was thrown by user callback.",t),e},Math.floor(0))}},qA=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Ei=function(s,e){const t=setTimeout(s,e);return typeof t=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(t):typeof t=="object"&&t.unref&&t.unref(),t};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jA{constructor(e,t){this.appCheckProvider=t,this.appName=e.name,At(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.appCheck=t?.getImmediate({optional:!0}),this.appCheck||t?.get().then(n=>this.appCheck=n)}getToken(e){if(this.serverAppAppCheckToken){if(e)throw new Error("Attempted reuse of `FirebaseServerApp.appCheckToken` after previous usage failed.");return Promise.resolve({token:this.serverAppAppCheckToken})}return this.appCheck?this.appCheck.getToken(e):new Promise((t,n)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(t,n):t(null)},0)})}addTokenChangeListener(e){this.appCheckProvider?.get().then(t=>t.addTokenListener(e))}notifyForInvalidToken(){gt(`Provided AppCheck credentials for the app named "${this.appName}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KA{constructor(e,t,n){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=n,this.auth_=null,this.auth_=n.getImmediate({optional:!0}),this.auth_||n.onInit(r=>this.auth_=r)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(t=>t&&t.code==="auth/token-not-initialized"?(nt("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(t)):new Promise((t,n)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(t,n):t(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(t=>t.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(t=>t.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',gt(e)}}class ra{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}ra.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cu="5",Wg="v",zg="s",Qg="r",Yg="f",$g=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Xg="ls",Zg="p",Xc="ac",em="websocket",tm="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nm{constructor(e,t,n,r,i=!1,o="",a=!1,c=!1,B=null){this.secure=t,this.namespace=n,this.webSocketOnly=r,this.nodeAdmin=i,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=c,this.emulatorOptions=B,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Ds.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Ds.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function WA(s){return s.host!==s.internalHost||s.isCustomHost()||s.includeNamespaceInQueryParams}function sm(s,e,t){H(typeof e=="string","typeof type must == string"),H(typeof t=="object","typeof params must == object");let n;if(e===em)n=(s.secure?"wss://":"ws://")+s.internalHost+"/.ws?";else if(e===tm)n=(s.secure?"https://":"http://")+s.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);WA(s)&&(t.ns=s.namespace);const r=[];return Dt(t,(i,o)=>{r.push(i+"="+o)}),n+r.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zA{constructor(){this.counters_={}}incrementCounter(e,t=1){In(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return pE(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fc={},dc={};function Bu(s){const e=s.toString();return fc[e]||(fc[e]=new zA),fc[e]}function QA(s,e){const t=s.toString();return dc[t]||(dc[t]=e()),dc[t]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YA{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const n=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let r=0;r<n.length;++r)n[r]&&Fr(()=>{this.onMessage_(n[r])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bd="start",$A="close",XA="pLPCommand",ZA="pRTLPCB",rm="id",im="pw",om="ser",eR="cb",tR="seg",nR="ts",sR="d",rR="dframe",am=1870,lm=30,iR=am-lm,oR=25e3,aR=3e4;class nr{constructor(e,t,n,r,i,o,a){this.connId=e,this.repoInfo=t,this.applicationId=n,this.appCheckToken=r,this.authToken=i,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Co(e),this.stats_=Bu(t),this.urlFn=c=>(this.appCheckToken&&(c[Xc]=this.appCheckToken),sm(t,tm,c))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new YA(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(aR)),kA(()=>{if(this.isClosed_)return;this.scriptTagHolder=new uu((...i)=>{const[o,a,c,B,h]=i;if(this.incrementIncomingBytes_(i),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===bd)this.id=a,this.password=c;else if(o===$A)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...i)=>{const[o,a]=i;this.incrementIncomingBytes_(i),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const n={};n[bd]="t",n[om]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(n[eR]=this.scriptTagHolder.uniqueCallbackIdentifier),n[Wg]=cu,this.transportSessionId&&(n[zg]=this.transportSessionId),this.lastSessionId&&(n[Xg]=this.lastSessionId),this.applicationId&&(n[Zg]=this.applicationId),this.appCheckToken&&(n[Xc]=this.appCheckToken),typeof location<"u"&&location.hostname&&$g.test(location.hostname)&&(n[Qg]=Yg);const r=this.urlFn(n);this.log_("Connecting via long-poll to "+r),this.scriptTagHolder.addTag(r,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){nr.forceAllow_=!0}static forceDisallow(){nr.forceDisallow_=!0}static isAvailable(){return nr.forceAllow_?!0:!nr.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!MA()&&!VA()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=We(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const n=bC(t),r=jg(n,iR);for(let i=0;i<r.length;i++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,r.length,r[i]),this.curSegmentNum++}addDisconnectPingFrame(e,t){this.myDisconnFrame=document.createElement("iframe");const n={};n[rR]="t",n[rm]=e,n[im]=t,this.myDisconnFrame.src=this.urlFn(n),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=We(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class uu{constructor(e,t,n,r){this.onDisconnect=n,this.urlFn=r,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=OA(),window[XA+this.uniqueCallbackIdentifier]=e,window[ZA+this.uniqueCallbackIdentifier]=t,this.myIFrame=uu.createIFrame_();let i="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(i='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+i+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){nt("frame writing exception"),a.stack&&nt(a.stack),nt(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||nt("No IE domain setting required")}catch{const n=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+n+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[rm]=this.myID,e[im]=this.myPW,e[om]=this.currentSerial;let t=this.urlFn(e),n="",r=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+lm+n.length<=am;){const o=this.pendingSegs.shift();n=n+"&"+tR+r+"="+o.seg+"&"+nR+r+"="+o.ts+"&"+sR+r+"="+o.d,r++}return t=t+n,this.addLongPollTag_(t,this.currentSerial),!0}else return!1}enqueueSegment(e,t,n){this.pendingSegs.push({seg:e,ts:t,d:n}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const n=()=>{this.outstandingRequests.delete(t),this.newRequest_()},r=setTimeout(n,Math.floor(oR)),i=()=>{clearTimeout(r),n()};this.addTag(e,i)}addTag(e,t){setTimeout(()=>{try{if(!this.sendNewPolls)return;const n=this.myIFrame.doc.createElement("script");n.type="text/javascript",n.async=!0,n.src=e,n.onload=n.onreadystatechange=function(){const r=n.readyState;(!r||r==="loaded"||r==="complete")&&(n.onload=n.onreadystatechange=null,n.parentNode&&n.parentNode.removeChild(n),t())},n.onerror=()=>{nt("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(n)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lR=16384,cR=45e3;let Sa=null;typeof MozWebSocket<"u"?Sa=MozWebSocket:typeof WebSocket<"u"&&(Sa=WebSocket);class kt{constructor(e,t,n,r,i,o,a){this.connId=e,this.applicationId=n,this.appCheckToken=r,this.authToken=i,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Co(this.connId),this.stats_=Bu(t),this.connURL=kt.connectionURL_(t,o,a,r,n),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,n,r,i){const o={};return o[Wg]=cu,typeof location<"u"&&location.hostname&&$g.test(location.hostname)&&(o[Qg]=Yg),t&&(o[zg]=t),n&&(o[Xg]=n),r&&(o[Xc]=r),i&&(o[Zg]=i),sm(e,em,o)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Ds.set("previous_websocket_failure",!0);try{let n;vE(),this.mySock=new Sa(this.connURL,[],n)}catch(n){this.log_("Error instantiating WebSocket.");const r=n.message||n.data;r&&this.log_(r),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=n=>{this.handleIncomingFrame(n)},this.mySock.onerror=n=>{this.log_("WebSocket error.  Closing connection.");const r=n.message||n.data;r&&this.log_(r),this.onClosed_()}}start(){}static forceDisallow(){kt.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,n=navigator.userAgent.match(t);n&&n.length>1&&parseFloat(n[1])<4.4&&(e=!0)}return!e&&Sa!==null&&!kt.forceDisallow_}static previouslyFailed(){return Ds.isInMemoryStorage||Ds.get("previous_websocket_failure")===!0}markConnectionHealthy(){Ds.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const t=this.frames.join("");this.frames=null;const n=Ti(t);this.onMessage(n)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(H(this.frames===null,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(t);else{const n=this.extractFrameCount_(t);n!==null&&this.appendFrame_(n)}}send(e){this.resetKeepAlive();const t=We(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const n=jg(t,lR);n.length>1&&this.sendString_(String(n.length));for(let r=0;r<n.length;r++)this.sendString_(n[r])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(cR))}sendString_(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}kt.responsesRequiredToBeHealthy=2;kt.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ki{static get ALL_TRANSPORTS(){return[nr,kt]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const t=kt&&kt.isAvailable();let n=t&&!kt.previouslyFailed();if(e.webSocketOnly&&(t||gt("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),n=!0),n)this.transports_=[kt];else{const r=this.transports_=[];for(const i of Ki.ALL_TRANSPORTS)i&&i.isAvailable()&&r.push(i);Ki.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Ki.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BR=6e4,uR=5e3,hR=10*1024,fR=100*1024,Cc="t",Od="d",dR="s",Fd="r",CR="e",Ld="o",kd="a",xd="n",Md="p",pR="h";class gR{constructor(e,t,n,r,i,o,a,c,B,h){this.id=e,this.repoInfo_=t,this.applicationId_=n,this.appCheckToken_=r,this.authToken_=i,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=c,this.onKill_=B,this.lastSessionId=h,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Co("c:"+this.id+":"),this.transportManager_=new Ki(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),n=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(t,n)},Math.floor(0));const r=e.healthyTimeout||0;r>0&&(this.healthyTimeout_=Ei(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>fR?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>hR?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(r)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Cc in e){const t=e[Cc];t===kd?this.upgradeIfSecondaryHealthy_():t===Fd?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):t===Ld&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=ti("t",e),n=ti("d",e);if(t==="c")this.onSecondaryControl_(n);else if(t==="d")this.pendingDataMessages.push(n);else throw new Error("Unknown protocol layer: "+t)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Md,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:kd,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:xd,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=ti("t",e),n=ti("d",e);t==="c"?this.onControl_(n):t==="d"&&this.onDataMessage_(n)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=ti(Cc,e);if(Od in e){const n=e[Od];if(t===pR){const r={...n};this.repoInfo_.isUsingEmulator&&(r.h=this.repoInfo_.host),this.onHandshake_(r)}else if(t===xd){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let r=0;r<this.pendingDataMessages.length;++r)this.onDataMessage_(this.pendingDataMessages[r]);this.pendingDataMessages=[],this.tryCleanupConnection()}else t===dR?this.onConnectionShutdown_(n):t===Fd?this.onReset_(n):t===CR?$c("Server Error: "+n):t===Ld?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):$c("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,n=e.v,r=e.h;this.sessionId=e.s,this.repoInfo_.host=r,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),cu!==n&&gt("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),n=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,n),Ei(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(BR))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Ei(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(uR))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Md,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Ds.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cm{put(e,t,n,r){}merge(e,t,n,r){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,n){}onDisconnectMerge(e,t,n){}onDisconnectCancel(e,t){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bm{constructor(e){this.allowedEvents_=e,this.listeners_={},H(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const n=[...this.listeners_[e]];for(let r=0;r<n.length;r++)n[r].callback.apply(n[r].context,t)}}on(e,t,n){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:n});const r=this.getInitialEvent(e);r&&t.apply(n,r)}off(e,t,n){this.validateEventType_(e);const r=this.listeners_[e]||[];for(let i=0;i<r.length;i++)if(r[i].callback===t&&(!n||n===r[i].context)){r.splice(i,1);return}}validateEventType_(e){H(this.allowedEvents_.find(t=>t===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pa extends Bm{static getInstance(){return new Pa}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!fB()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return H(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vd=32,Gd=768;class _e{constructor(e,t){if(t===void 0){this.pieces_=e.split("/");let n=0;for(let r=0;r<this.pieces_.length;r++)this.pieces_[r].length>0&&(this.pieces_[n]=this.pieces_[r],n++);this.pieces_.length=n,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)this.pieces_[t]!==""&&(e+="/"+this.pieces_[t]);return e||"/"}}function Ce(){return new _e("")}function oe(s){return s.pieceNum_>=s.pieces_.length?null:s.pieces_[s.pieceNum_]}function ns(s){return s.pieces_.length-s.pieceNum_}function De(s){let e=s.pieceNum_;return e<s.pieces_.length&&e++,new _e(s.pieces_,e)}function um(s){return s.pieceNum_<s.pieces_.length?s.pieces_[s.pieces_.length-1]:null}function mR(s){let e="";for(let t=s.pieceNum_;t<s.pieces_.length;t++)s.pieces_[t]!==""&&(e+="/"+encodeURIComponent(String(s.pieces_[t])));return e||"/"}function hm(s,e=0){return s.pieces_.slice(s.pieceNum_+e)}function fm(s){if(s.pieceNum_>=s.pieces_.length)return null;const e=[];for(let t=s.pieceNum_;t<s.pieces_.length-1;t++)e.push(s.pieces_[t]);return new _e(e,0)}function Ge(s,e){const t=[];for(let n=s.pieceNum_;n<s.pieces_.length;n++)t.push(s.pieces_[n]);if(e instanceof _e)for(let n=e.pieceNum_;n<e.pieces_.length;n++)t.push(e.pieces_[n]);else{const n=e.split("/");for(let r=0;r<n.length;r++)n[r].length>0&&t.push(n[r])}return new _e(t,0)}function ue(s){return s.pieceNum_>=s.pieces_.length}function dt(s,e){const t=oe(s),n=oe(e);if(t===null)return e;if(t===n)return dt(De(s),De(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+s+")")}function hu(s,e){if(ns(s)!==ns(e))return!1;for(let t=s.pieceNum_,n=e.pieceNum_;t<=s.pieces_.length;t++,n++)if(s.pieces_[t]!==e.pieces_[n])return!1;return!0}function Mt(s,e){let t=s.pieceNum_,n=e.pieceNum_;if(ns(s)>ns(e))return!1;for(;t<s.pieces_.length;){if(s.pieces_[t]!==e.pieces_[n])return!1;++t,++n}return!0}class _R{constructor(e,t){this.errorPrefix_=t,this.parts_=hm(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let n=0;n<this.parts_.length;n++)this.byteLength_+=Qa(this.parts_[n]);dm(this)}}function ER(s,e){s.parts_.length>0&&(s.byteLength_+=1),s.parts_.push(e),s.byteLength_+=Qa(e),dm(s)}function DR(s){const e=s.parts_.pop();s.byteLength_-=Qa(e),s.parts_.length>0&&(s.byteLength_-=1)}function dm(s){if(s.byteLength_>Gd)throw new Error(s.errorPrefix_+"has a key path longer than "+Gd+" bytes ("+s.byteLength_+").");if(s.parts_.length>Vd)throw new Error(s.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Vd+") or object contains a cycle "+gs(s))}function gs(s){return s.parts_.length===0?"":"in property '"+s.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fu extends Bm{static getInstance(){return new fu}constructor(){super(["visible"]);let e,t;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(t="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(t="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(t="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,()=>{const n=!document[e];n!==this.visible_&&(this.visible_=n,this.trigger("visible",n))},!1)}getInitialEvent(e){return H(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ni=1e3,yR=300*1e3,Hd=30*1e3,IR=1.3,wR=3e4,TR="server_kill",Ud=3;class dn extends cm{constructor(e,t,n,r,i,o,a,c){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=n,this.onConnectStatus_=r,this.onServerInfoUpdate_=i,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=c,this.id=dn.nextPersistentConnectionId_++,this.log_=Co("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=ni,this.maxReconnectDelay_=yR,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,c)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");fu.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Pa.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,n){const r=++this.requestNumber_,i={r,a:e,b:t};this.log_(We(i)),H(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(i),n&&(this.requestCBHash_[r]=n)}get(e){this.initConnection_();const t=new eo,r={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?t.resolve(a):t.reject(a)}};this.outstandingGets_.push(r),this.outstandingGetCount_++;const i=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(i),t.promise}listen(e,t,n,r){this.initConnection_();const i=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+i),this.listens.has(o)||this.listens.set(o,new Map),H(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),H(!this.listens.get(o).has(i),"listen() called twice for same path/queryId.");const a={onComplete:r,hashFn:t,query:e,tag:n};this.listens.get(o).set(i,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,n=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(n)})}sendListen_(e){const t=e.query,n=t._path.toString(),r=t._queryIdentifier;this.log_("Listen on "+n+" for "+r);const i={p:n},o="q";e.tag&&(i.q=t._queryObject,i.t=e.tag),i.h=e.hashFn(),this.sendRequest(o,i,a=>{const c=a.d,B=a.s;dn.warnOnListenWarnings_(c,t),(this.listens.get(n)&&this.listens.get(n).get(r))===e&&(this.log_("listen response",a),B!=="ok"&&this.removeListen_(n,r),e.onComplete&&e.onComplete(B,c))})}static warnOnListenWarnings_(e,t){if(e&&typeof e=="object"&&In(e,"w")){const n=fr(e,"w");if(Array.isArray(n)&&~n.indexOf("no_index")){const r='".indexOn": "'+t._queryParams.getIndex().toString()+'"',i=t._path.toString();gt(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${r} at ${i} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||OE(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Hd)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=bE(e)?"auth":"gauth",n={cred:e};this.authOverride_===null?n.noauth=!0:typeof this.authOverride_=="object"&&(n.authvar=this.authOverride_),this.sendRequest(t,n,r=>{const i=r.s,o=r.d||"error";this.authToken_===e&&(i==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(i,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const t=e.s,n=e.d||"error";t==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,n)})}unlisten(e,t){const n=e._path.toString(),r=e._queryIdentifier;this.log_("Unlisten called for "+n+" "+r),H(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(n,r)&&this.connected_&&this.sendUnlisten_(n,r,e._queryObject,t)}sendUnlisten_(e,t,n,r){this.log_("Unlisten on "+e+" for "+t);const i={p:e},o="n";r&&(i.q=n,i.t=r),this.sendRequest(o,i)}onDisconnectPut(e,t,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:n})}onDisconnectMerge(e,t,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:n})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,n,r){const i={p:t,d:n};this.log_("onDisconnect "+e,i),this.sendRequest(e,i,o=>{r&&setTimeout(()=>{r(o.s,o.d)},Math.floor(0))})}put(e,t,n,r){this.putInternal("p",e,t,n,r)}merge(e,t,n,r){this.putInternal("m",e,t,n,r)}putInternal(e,t,n,r,i){this.initConnection_();const o={p:t,d:n};i!==void 0&&(o.h=i),this.outstandingPuts_.push({action:e,request:o,onComplete:r}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,n=this.outstandingPuts_[e].request,r=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,n,i=>{this.log_(t+" response",i),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),r&&r(i.s,i.d)})}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,n=>{if(n.s!=="ok"){const i=n.d;this.log_("reportStats","Error sending stats: "+i)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+We(e));const t=e.r,n=this.requestCBHash_[t];n&&(delete this.requestCBHash_[t],n(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),e==="d"?this.onDataUpdate_(t.p,t.d,!1,t.t):e==="m"?this.onDataUpdate_(t.p,t.d,!0,t.t):e==="c"?this.onListenRevoked_(t.p,t.q):e==="ac"?this.onAuthRevoked_(t.s,t.d):e==="apc"?this.onAppCheckRevoked_(t.s,t.d):e==="sd"?this.onSecurityDebugPacket_(t):$c("Unrecognized action received from server: "+We(e)+`
Are you using the latest client?`)}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){H(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=ni,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=ni,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>wR&&(this.reconnectDelay_=ni),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=Math.max(0,new Date().getTime()-this.lastConnectionAttemptTime_);let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*IR)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),n=this.onRealtimeDisconnect_.bind(this),r=this.id+":"+dn.nextConnectionId_++,i=this.lastSessionId;let o=!1,a=null;const c=function(){a?a.close():(o=!0,n())},B=function(f){H(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(f)};this.realtime_={close:c,sendRequest:B};const h=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[f,C]=await Promise.all([this.authTokenProvider_.getToken(h),this.appCheckTokenProvider_.getToken(h)]);o?nt("getToken() completed but was canceled"):(nt("getToken() completed. Creating connection."),this.authToken_=f&&f.accessToken,this.appCheckToken_=C&&C.token,a=new gR(r,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,n,_=>{gt(_+" ("+this.repoInfo_.toString()+")"),this.interrupt(TR)},i))}catch(f){this.log_("Failed to get token: "+f),o||(this.repoInfo_.nodeAdmin&&gt(f),c())}}}interrupt(e){nt("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){nt("Resuming connection for reason: "+e),delete this.interruptReasons_[e],yc(this.interruptReasons_)&&(this.reconnectDelay_=ni,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let n;t?n=t.map(i=>lu(i)).join("$"):n="default";const r=this.removeListen_(e,n);r&&r.onComplete&&r.onComplete("permission_denied")}removeListen_(e,t){const n=new _e(e).toString();let r;if(this.listens.has(n)){const i=this.listens.get(n);r=i.get(t),i.delete(t),i.size===0&&this.listens.delete(n)}else r=void 0;return r}onAuthRevoked_(e,t){nt("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Ud&&(this.reconnectDelay_=Hd,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){nt("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Ud&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";e["sdk."+t+"."+Hg.replace(/\./g,"-")]=1,fB()?e["framework.cordova"]=1:VC()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Pa.getInstance().currentlyOnline();return yc(this.interruptReasons_)&&e}}dn.nextPersistentConnectionId_=0;dn.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class le{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new le(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gl{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const n=new le(Dr,e),r=new le(Dr,t);return this.compare(n,r)!==0}minPost(){return le.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Qo;class Cm extends gl{static get __EMPTY_NODE(){return Qo}static set __EMPTY_NODE(e){Qo=e}compare(e,t){return Or(e.name,t.name)}isDefinedOn(e){throw wr("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return le.MIN}maxPost(){return new le(Ps,Qo)}makePost(e,t){return H(typeof e=="string","KeyIndex indexValue must always be a string."),new le(e,Qo)}toString(){return".key"}}const lr=new Cm;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yo{constructor(e,t,n,r,i=null){this.isReverse_=r,this.resultGenerator_=i,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=t?n(e.key,t):1,r&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),t;if(this.resultGenerator_?t=this.resultGenerator_(e.key,e.value):t={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return t}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Ke{constructor(e,t,n,r,i){this.key=e,this.value=t,this.color=n??Ke.RED,this.left=r??Ct.EMPTY_NODE,this.right=i??Ct.EMPTY_NODE}copy(e,t,n,r,i){return new Ke(e??this.key,t??this.value,n??this.color,r??this.left,i??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let r=this;const i=n(e,r.key);return i<0?r=r.copy(null,null,null,r.left.insert(e,t,n),null):i===0?r=r.copy(null,t,null,null,null):r=r.copy(null,null,null,null,r.right.insert(e,t,n)),r.fixUp_()}removeMin_(){if(this.left.isEmpty())return Ct.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let n,r;if(n=this,t(e,n.key)<0)!n.left.isEmpty()&&!n.left.isRed_()&&!n.left.left.isRed_()&&(n=n.moveRedLeft_()),n=n.copy(null,null,null,n.left.remove(e,t),null);else{if(n.left.isRed_()&&(n=n.rotateRight_()),!n.right.isEmpty()&&!n.right.isRed_()&&!n.right.left.isRed_()&&(n=n.moveRedRight_()),t(e,n.key)===0){if(n.right.isEmpty())return Ct.EMPTY_NODE;r=n.right.min_(),n=n.copy(r.key,r.value,null,null,n.right.removeMin_())}n=n.copy(null,null,null,null,n.right.remove(e,t))}return n.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Ke.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Ke.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Ke.RED=!0;Ke.BLACK=!1;class vR{copy(e,t,n,r,i){return this}insert(e,t,n){return new Ke(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class Ct{constructor(e,t=Ct.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new Ct(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,Ke.BLACK,null,null))}remove(e){return new Ct(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Ke.BLACK,null,null))}get(e){let t,n=this.root_;for(;!n.isEmpty();){if(t=this.comparator_(e,n.key),t===0)return n.value;t<0?n=n.left:t>0&&(n=n.right)}return null}getPredecessorKey(e){let t,n=this.root_,r=null;for(;!n.isEmpty();)if(t=this.comparator_(e,n.key),t===0){if(n.left.isEmpty())return r?r.key:null;for(n=n.left;!n.right.isEmpty();)n=n.right;return n.key}else t<0?n=n.left:t>0&&(r=n,n=n.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Yo(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new Yo(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new Yo(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new Yo(this.root_,null,this.comparator_,!0,e)}}Ct.EMPTY_NODE=new vR;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function AR(s,e){return Or(s.name,e.name)}function du(s,e){return Or(s,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Zc;function RR(s){Zc=s}const pm=function(s){return typeof s=="number"?"number:"+Kg(s):"string:"+s},gm=function(s){if(s.isLeafNode()){const e=s.val();H(typeof e=="string"||typeof e=="number"||typeof e=="object"&&In(e,".sv"),"Priority must be a string or number.")}else H(s===Zc||s.isEmpty(),"priority of unexpected type.");H(s===Zc||s.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Jd;class qe{static set __childrenNodeConstructor(e){Jd=e}static get __childrenNodeConstructor(){return Jd}constructor(e,t=qe.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,H(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),gm(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new qe(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:qe.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return ue(e)?this:oe(e)===".priority"?this.priorityNode_:qe.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return e===".priority"?this.updatePriority(t):t.isEmpty()&&e!==".priority"?this:qe.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const n=oe(e);return n===null?t:t.isEmpty()&&n!==".priority"?this:(H(n!==".priority"||ns(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(n,qe.__childrenNodeConstructor.EMPTY_NODE.updateChild(De(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+pm(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",t==="number"?e+=Kg(this.value_):e+=this.value_,this.lazyHash_=Jg(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===qe.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof qe.__childrenNodeConstructor?-1:(H(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,n=typeof this.value_,r=qe.VALUE_TYPE_ORDER.indexOf(t),i=qe.VALUE_TYPE_ORDER.indexOf(n);return H(r>=0,"Unknown leaf type: "+t),H(i>=0,"Unknown leaf type: "+n),r===i?n==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:i-r}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}else return!1}}qe.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let mm,_m;function SR(s){mm=s}function PR(s){_m=s}class NR extends gl{compare(e,t){const n=e.node.getPriority(),r=t.node.getPriority(),i=n.compareTo(r);return i===0?Or(e.name,t.name):i}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return le.MIN}maxPost(){return new le(Ps,new qe("[PRIORITY-POST]",_m))}makePost(e,t){const n=mm(e);return new le(t,new qe("[PRIORITY-POST]",n))}toString(){return".priority"}}const Pe=new NR;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bR=Math.log(2);class OR{constructor(e){const t=i=>parseInt(Math.log(i)/bR,10),n=i=>parseInt(Array(i+1).join("1"),2);this.count=t(e+1),this.current_=this.count-1;const r=n(this.count);this.bits_=e+1&r}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Na=function(s,e,t,n){s.sort(e);const r=function(c,B){const h=B-c;let f,C;if(h===0)return null;if(h===1)return f=s[c],C=t?t(f):f,new Ke(C,f.node,Ke.BLACK,null,null);{const _=parseInt(h/2,10)+c,I=r(c,_),O=r(_+1,B);return f=s[_],C=t?t(f):f,new Ke(C,f.node,Ke.BLACK,I,O)}},i=function(c){let B=null,h=null,f=s.length;const C=function(I,O){const V=f-I,q=f;f-=I;const re=r(V+1,q),pe=s[V],Re=t?t(pe):pe;_(new Ke(Re,pe.node,O,null,re))},_=function(I){B?(B.left=I,B=I):(h=I,B=I)};for(let I=0;I<c.count;++I){const O=c.nextBitIsOne(),V=Math.pow(2,c.count-(I+1));O?C(V,Ke.BLACK):(C(V,Ke.BLACK),C(V,Ke.RED))}return h},o=new OR(s.length),a=i(o);return new Ct(n||e,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let pc;const zs={};class cn{static get Default(){return H(zs&&Pe,"ChildrenNode.ts has not been loaded"),pc=pc||new cn({".priority":zs},{".priority":Pe}),pc}constructor(e,t){this.indexes_=e,this.indexSet_=t}get(e){const t=fr(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof Ct?t:null}hasIndex(e){return In(this.indexSet_,e.toString())}addIndex(e,t){H(e!==lr,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const n=[];let r=!1;const i=t.getIterator(le.Wrap);let o=i.getNext();for(;o;)r=r||e.isDefinedOn(o.node),n.push(o),o=i.getNext();let a;r?a=Na(n,e.getCompare()):a=zs;const c=e.toString(),B={...this.indexSet_};B[c]=e;const h={...this.indexes_};return h[c]=a,new cn(h,B)}addToIndexes(e,t){const n=ua(this.indexes_,(r,i)=>{const o=fr(this.indexSet_,i);if(H(o,"Missing index implementation for "+i),r===zs)if(o.isDefinedOn(e.node)){const a=[],c=t.getIterator(le.Wrap);let B=c.getNext();for(;B;)B.name!==e.name&&a.push(B),B=c.getNext();return a.push(e),Na(a,o.getCompare())}else return zs;else{const a=t.get(e.name);let c=r;return a&&(c=c.remove(new le(e.name,a))),c.insert(e,e.node)}});return new cn(n,this.indexSet_)}removeFromIndexes(e,t){const n=ua(this.indexes_,r=>{if(r===zs)return r;{const i=t.get(e.name);return i?r.remove(new le(e.name,i)):r}});return new cn(n,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let si;class te{static get EMPTY_NODE(){return si||(si=new te(new Ct(du),null,cn.Default))}constructor(e,t,n){this.children_=e,this.priorityNode_=t,this.indexMap_=n,this.lazyHash_=null,this.priorityNode_&&gm(this.priorityNode_),this.children_.isEmpty()&&H(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||si}updatePriority(e){return this.children_.isEmpty()?this:new te(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const t=this.children_.get(e);return t===null?si:t}}getChild(e){const t=oe(e);return t===null?this:this.getImmediateChild(t).getChild(De(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,t){if(H(t,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(t);{const n=new le(e,t);let r,i;t.isEmpty()?(r=this.children_.remove(e),i=this.indexMap_.removeFromIndexes(n,this.children_)):(r=this.children_.insert(e,t),i=this.indexMap_.addToIndexes(n,this.children_));const o=r.isEmpty()?si:this.priorityNode_;return new te(r,o,i)}}updateChild(e,t){const n=oe(e);if(n===null)return t;{H(oe(e)!==".priority"||ns(e)===1,".priority must be the last token in a path");const r=this.getImmediateChild(n).updateChild(De(e),t);return this.updateImmediateChild(n,r)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let n=0,r=0,i=!0;if(this.forEachChild(Pe,(o,a)=>{t[o]=a.val(e),n++,i&&te.INTEGER_REGEXP_.test(o)?r=Math.max(r,Number(o)):i=!1}),!e&&i&&r<2*n){const o=[];for(const a in t)o[a]=t[a];return o}else return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+pm(this.getPriority().val())+":"),this.forEachChild(Pe,(t,n)=>{const r=n.hash();r!==""&&(e+=":"+t+":"+r)}),this.lazyHash_=e===""?"":Jg(e)}return this.lazyHash_}getPredecessorChildName(e,t,n){const r=this.resolveIndex_(n);if(r){const i=r.getPredecessorKey(new le(e,t));return i?i.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const n=t.minKey();return n&&n.name}else return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new le(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const n=t.maxKey();return n&&n.name}else return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new le(t,this.children_.get(t)):null}forEachChild(e,t){const n=this.resolveIndex_(e);return n?n.inorderTraversal(r=>t(r.name,r.node)):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const n=this.resolveIndex_(t);if(n)return n.getIteratorFrom(e,r=>r);{const r=this.children_.getIteratorFrom(e.name,le.Wrap);let i=r.peek();for(;i!=null&&t.compare(i,e)<0;)r.getNext(),i=r.peek();return r}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const n=this.resolveIndex_(t);if(n)return n.getReverseIteratorFrom(e,r=>r);{const r=this.children_.getReverseIteratorFrom(e.name,le.Wrap);let i=r.peek();for(;i!=null&&t.compare(i,e)>0;)r.getNext(),i=r.peek();return r}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===po?-1:0}withIndex(e){if(e===lr||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new te(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===lr||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority()))if(this.children_.count()===t.children_.count()){const n=this.getIterator(Pe),r=t.getIterator(Pe);let i=n.getNext(),o=r.getNext();for(;i&&o;){if(i.name!==o.name||!i.node.equals(o.node))return!1;i=n.getNext(),o=r.getNext()}return i===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===lr?null:this.indexMap_.get(e.toString())}}te.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class FR extends te{constructor(){super(new Ct(du),te.EMPTY_NODE,cn.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return te.EMPTY_NODE}isEmpty(){return!1}}const po=new FR;Object.defineProperties(le,{MIN:{value:new le(Dr,te.EMPTY_NODE)},MAX:{value:new le(Ps,po)}});Cm.__EMPTY_NODE=te.EMPTY_NODE;qe.__childrenNodeConstructor=te;RR(po);PR(po);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LR=!0;function Qe(s,e=null){if(s===null)return te.EMPTY_NODE;if(typeof s=="object"&&".priority"in s&&(e=s[".priority"]),H(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof s=="object"&&".value"in s&&s[".value"]!==null&&(s=s[".value"]),typeof s!="object"||".sv"in s){const t=s;return new qe(t,Qe(e))}if(!(s instanceof Array)&&LR){const t=[];let n=!1;if(Dt(s,(o,a)=>{if(o.substring(0,1)!=="."){const c=Qe(a);c.isEmpty()||(n=n||!c.getPriority().isEmpty(),t.push(new le(o,c)))}}),t.length===0)return te.EMPTY_NODE;const i=Na(t,AR,o=>o.name,du);if(n){const o=Na(t,Pe.getCompare());return new te(i,Qe(e),new cn({".priority":o},{".priority":Pe}))}else return new te(i,Qe(e),cn.Default)}else{let t=te.EMPTY_NODE;return Dt(s,(n,r)=>{if(In(s,n)&&n.substring(0,1)!=="."){const i=Qe(r);(i.isLeafNode()||!i.isEmpty())&&(t=t.updateImmediateChild(n,i))}}),t.updatePriority(Qe(e))}}SR(Qe);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kR extends gl{constructor(e){super(),this.indexPath_=e,H(!ue(e)&&oe(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const n=this.extractChild(e.node),r=this.extractChild(t.node),i=n.compareTo(r);return i===0?Or(e.name,t.name):i}makePost(e,t){const n=Qe(e),r=te.EMPTY_NODE.updateChild(this.indexPath_,n);return new le(t,r)}maxPost(){const e=te.EMPTY_NODE.updateChild(this.indexPath_,po);return new le(Ps,e)}toString(){return hm(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xR extends gl{compare(e,t){const n=e.node.compareTo(t.node);return n===0?Or(e.name,t.name):n}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return le.MIN}maxPost(){return le.MAX}makePost(e,t){const n=Qe(e);return new le(t,n)}toString(){return".value"}}const MR=new xR;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Em(s){return{type:"value",snapshotNode:s}}function yr(s,e){return{type:"child_added",snapshotNode:e,childName:s}}function Wi(s,e){return{type:"child_removed",snapshotNode:e,childName:s}}function zi(s,e,t){return{type:"child_changed",snapshotNode:e,childName:s,oldSnap:t}}function VR(s,e){return{type:"child_moved",snapshotNode:e,childName:s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cu{constructor(e){this.index_=e}updateChild(e,t,n,r,i,o){H(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(t);return a.getChild(r).equals(n.getChild(r))&&a.isEmpty()===n.isEmpty()||(o!=null&&(n.isEmpty()?e.hasChild(t)?o.trackChildChange(Wi(t,a)):H(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(yr(t,n)):o.trackChildChange(zi(t,n,a))),e.isLeafNode()&&n.isEmpty())?e:e.updateImmediateChild(t,n).withIndex(this.index_)}updateFullNode(e,t,n){return n!=null&&(e.isLeafNode()||e.forEachChild(Pe,(r,i)=>{t.hasChild(r)||n.trackChildChange(Wi(r,i))}),t.isLeafNode()||t.forEachChild(Pe,(r,i)=>{if(e.hasChild(r)){const o=e.getImmediateChild(r);o.equals(i)||n.trackChildChange(zi(r,i,o))}else n.trackChildChange(yr(r,i))})),t.withIndex(this.index_)}updatePriority(e,t){return e.isEmpty()?te.EMPTY_NODE:e.updatePriority(t)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qi{constructor(e){this.indexedFilter_=new Cu(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Qi.getStartPost_(e),this.endPost_=Qi.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const t=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,n=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return t&&n}updateChild(e,t,n,r,i,o){return this.matches(new le(t,n))||(n=te.EMPTY_NODE),this.indexedFilter_.updateChild(e,t,n,r,i,o)}updateFullNode(e,t,n){t.isLeafNode()&&(t=te.EMPTY_NODE);let r=t.withIndex(this.index_);r=r.updatePriority(te.EMPTY_NODE);const i=this;return t.forEachChild(Pe,(o,a)=>{i.matches(new le(o,a))||(r=r.updateImmediateChild(o,te.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,r,n)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const t=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),t)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const t=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),t)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GR{constructor(e){this.withinDirectionalStart=t=>this.reverse_?this.withinEndPost(t):this.withinStartPost(t),this.withinDirectionalEnd=t=>this.reverse_?this.withinStartPost(t):this.withinEndPost(t),this.withinStartPost=t=>{const n=this.index_.compare(this.rangedFilter_.getStartPost(),t);return this.startIsInclusive_?n<=0:n<0},this.withinEndPost=t=>{const n=this.index_.compare(t,this.rangedFilter_.getEndPost());return this.endIsInclusive_?n<=0:n<0},this.rangedFilter_=new Qi(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,t,n,r,i,o){return this.rangedFilter_.matches(new le(t,n))||(n=te.EMPTY_NODE),e.getImmediateChild(t).equals(n)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,t,n,r,i,o):this.fullLimitUpdateChild_(e,t,n,i,o)}updateFullNode(e,t,n){let r;if(t.isLeafNode()||t.isEmpty())r=te.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<t.numChildren()&&t.isIndexed(this.index_)){r=te.EMPTY_NODE.withIndex(this.index_);let i;this.reverse_?i=t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):i=t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;i.hasNext()&&o<this.limit_;){const a=i.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))r=r.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{r=t.withIndex(this.index_),r=r.updatePriority(te.EMPTY_NODE);let i;this.reverse_?i=r.getReverseIterator(this.index_):i=r.getIterator(this.index_);let o=0;for(;i.hasNext();){const a=i.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:r=r.updateImmediateChild(a.name,te.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,r,n)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,t,n,r,i){let o;if(this.reverse_){const f=this.index_.getCompare();o=(C,_)=>f(_,C)}else o=this.index_.getCompare();const a=e;H(a.numChildren()===this.limit_,"");const c=new le(t,n),B=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),h=this.rangedFilter_.matches(c);if(a.hasChild(t)){const f=a.getImmediateChild(t);let C=r.getChildAfterChild(this.index_,B,this.reverse_);for(;C!=null&&(C.name===t||a.hasChild(C.name));)C=r.getChildAfterChild(this.index_,C,this.reverse_);const _=C==null?1:o(C,c);if(h&&!n.isEmpty()&&_>=0)return i?.trackChildChange(zi(t,n,f)),a.updateImmediateChild(t,n);{i?.trackChildChange(Wi(t,f));const O=a.updateImmediateChild(t,te.EMPTY_NODE);return C!=null&&this.rangedFilter_.matches(C)?(i?.trackChildChange(yr(C.name,C.node)),O.updateImmediateChild(C.name,C.node)):O}}else return n.isEmpty()?e:h&&o(B,c)>=0?(i!=null&&(i.trackChildChange(Wi(B.name,B.node)),i.trackChildChange(yr(t,n))),a.updateImmediateChild(t,n).updateImmediateChild(B.name,te.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pu{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Pe}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return H(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return H(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Dr}hasEnd(){return this.endSet_}getIndexEndValue(){return H(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return H(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Ps}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return H(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Pe}copy(){const e=new pu;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function HR(s){return s.loadsAllData()?new Cu(s.getIndex()):s.hasLimit()?new GR(s):new Qi(s)}function qd(s){const e={};if(s.isDefault())return e;let t;if(s.index_===Pe?t="$priority":s.index_===MR?t="$value":s.index_===lr?t="$key":(H(s.index_ instanceof kR,"Unrecognized index type!"),t=s.index_.toString()),e.orderBy=We(t),s.startSet_){const n=s.startAfterSet_?"startAfter":"startAt";e[n]=We(s.indexStartValue_),s.startNameSet_&&(e[n]+=","+We(s.indexStartName_))}if(s.endSet_){const n=s.endBeforeSet_?"endBefore":"endAt";e[n]=We(s.indexEndValue_),s.endNameSet_&&(e[n]+=","+We(s.indexEndName_))}return s.limitSet_&&(s.isViewFromLeft()?e.limitToFirst=s.limit_:e.limitToLast=s.limit_),e}function jd(s){const e={};if(s.startSet_&&(e.sp=s.indexStartValue_,s.startNameSet_&&(e.sn=s.indexStartName_),e.sin=!s.startAfterSet_),s.endSet_&&(e.ep=s.indexEndValue_,s.endNameSet_&&(e.en=s.indexEndName_),e.ein=!s.endBeforeSet_),s.limitSet_){e.l=s.limit_;let t=s.viewFrom_;t===""&&(s.isViewFromLeft()?t="l":t="r"),e.vf=t}return s.index_!==Pe&&(e.i=s.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ba extends cm{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return t!==void 0?"tag$"+t:(H(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,t,n,r){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=n,this.appCheckTokenProvider_=r,this.log_=Co("p:rest:"),this.listens_={}}listen(e,t,n,r){const i=e._path.toString();this.log_("Listen called for "+i+" "+e._queryIdentifier);const o=ba.getListenId_(e,n),a={};this.listens_[o]=a;const c=qd(e._queryParams);this.restRequest_(i+".json",c,(B,h)=>{let f=h;if(B===404&&(f=null,B=null),B===null&&this.onDataUpdate_(i,f,!1,n),fr(this.listens_,o)===a){let C;B?B===401?C="permission_denied":C="rest_error:"+B:C="ok",r(C,null)}})}unlisten(e,t){const n=ba.getListenId_(e,t);delete this.listens_[n]}get(e){const t=qd(e._queryParams),n=e._path.toString(),r=new eo;return this.restRequest_(n+".json",t,(i,o)=>{let a=o;i===404&&(a=null,i=null),i===null?(this.onDataUpdate_(n,a,!1,null),r.resolve(a)):r.reject(new Error(a))}),r.promise}refreshAuthToken(e){}restRequest_(e,t={},n){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([r,i])=>{r&&r.accessToken&&(t.auth=r.accessToken),i&&i.token&&(t.ac=i.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Tr(t);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(n&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let c=null;if(a.status>=200&&a.status<300){try{c=Ti(a.responseText)}catch{gt("Failed to parse JSON response for "+o+": "+a.responseText)}n(null,c)}else a.status!==401&&a.status!==404&&gt("Got unsuccessful REST response for "+o+" Status: "+a.status),n(a.status);n=null}},a.open("GET",o,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UR{constructor(){this.rootNode_=te.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oa(){return{value:null,children:new Map}}function Dm(s,e,t){if(ue(e))s.value=t,s.children.clear();else if(s.value!==null)s.value=s.value.updateChild(e,t);else{const n=oe(e);s.children.has(n)||s.children.set(n,Oa());const r=s.children.get(n);e=De(e),Dm(r,e,t)}}function eB(s,e,t){s.value!==null?t(e,s.value):JR(s,(n,r)=>{const i=new _e(e.toString()+"/"+n);eB(r,i,t)})}function JR(s,e){s.children.forEach((t,n)=>{e(n,t)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qR{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t={...e};return this.last_&&Dt(this.last_,(n,r)=>{t[n]=t[n]-r}),this.last_=e,t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kd=10*1e3,jR=30*1e3,KR=300*1e3;class WR{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new qR(e);const n=Kd+(jR-Kd)*Math.random();Ei(this.reportStats_.bind(this),Math.floor(n))}reportStats_(){const e=this.statsListener_.get(),t={};let n=!1;Dt(e,(r,i)=>{i>0&&In(this.statsToReport_,r)&&(t[r]=i,n=!0)}),n&&this.server_.reportStats(t),Ei(this.reportStats_.bind(this),Math.floor(Math.random()*2*KR))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Vt;(function(s){s[s.OVERWRITE=0]="OVERWRITE",s[s.MERGE=1]="MERGE",s[s.ACK_USER_WRITE=2]="ACK_USER_WRITE",s[s.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Vt||(Vt={}));function ym(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function gu(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function mu(s){return{fromUser:!1,fromServer:!0,queryId:s,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fa{constructor(e,t,n){this.path=e,this.affectedTree=t,this.revert=n,this.type=Vt.ACK_USER_WRITE,this.source=ym()}operationForChild(e){if(ue(this.path)){if(this.affectedTree.value!=null)return H(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new _e(e));return new Fa(Ce(),t,this.revert)}}else return H(oe(this.path)===e,"operationForChild called for unrelated child."),new Fa(De(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yi{constructor(e,t){this.source=e,this.path=t,this.type=Vt.LISTEN_COMPLETE}operationForChild(e){return ue(this.path)?new Yi(this.source,Ce()):new Yi(this.source,De(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ns{constructor(e,t,n){this.source=e,this.path=t,this.snap=n,this.type=Vt.OVERWRITE}operationForChild(e){return ue(this.path)?new Ns(this.source,Ce(),this.snap.getImmediateChild(e)):new Ns(this.source,De(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $i{constructor(e,t,n){this.source=e,this.path=t,this.children=n,this.type=Vt.MERGE}operationForChild(e){if(ue(this.path)){const t=this.children.subtree(new _e(e));return t.isEmpty()?null:t.value?new Ns(this.source,Ce(),t.value):new $i(this.source,Ce(),t)}else return H(oe(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new $i(this.source,De(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bs{constructor(e,t,n){this.node_=e,this.fullyInitialized_=t,this.filtered_=n}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(ue(e))return this.isFullyInitialized()&&!this.filtered_;const t=oe(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zR{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function QR(s,e,t,n){const r=[],i=[];return e.forEach(o=>{o.type==="child_changed"&&s.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&i.push(VR(o.childName,o.snapshotNode))}),ri(s,r,"child_removed",e,n,t),ri(s,r,"child_added",e,n,t),ri(s,r,"child_moved",i,n,t),ri(s,r,"child_changed",e,n,t),ri(s,r,"value",e,n,t),r}function ri(s,e,t,n,r,i){const o=n.filter(a=>a.type===t);o.sort((a,c)=>$R(s,a,c)),o.forEach(a=>{const c=YR(s,a,i);r.forEach(B=>{B.respondsTo(a.type)&&e.push(B.createEvent(c,s.query_))})})}function YR(s,e,t){return e.type==="value"||e.type==="child_removed"||(e.prevName=t.getPredecessorChildName(e.childName,e.snapshotNode,s.index_)),e}function $R(s,e,t){if(e.childName==null||t.childName==null)throw wr("Should only compare child_ events.");const n=new le(e.childName,e.snapshotNode),r=new le(t.childName,t.snapshotNode);return s.index_.compare(n,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ml(s,e){return{eventCache:s,serverCache:e}}function Di(s,e,t,n){return ml(new bs(e,t,n),s.serverCache)}function Im(s,e,t,n){return ml(s.eventCache,new bs(e,t,n))}function tB(s){return s.eventCache.isFullyInitialized()?s.eventCache.getNode():null}function Os(s){return s.serverCache.isFullyInitialized()?s.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let gc;const XR=()=>(gc||(gc=new Ct(xA)),gc);class we{static fromObject(e){let t=new we(null);return Dt(e,(n,r)=>{t=t.set(new _e(n),r)}),t}constructor(e,t=XR()){this.value=e,this.children=t}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(this.value!=null&&t(this.value))return{path:Ce(),value:this.value};if(ue(e))return null;{const n=oe(e),r=this.children.get(n);if(r!==null){const i=r.findRootMostMatchingPathAndValue(De(e),t);return i!=null?{path:Ge(new _e(n),i.path),value:i.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(ue(e))return this;{const t=oe(e),n=this.children.get(t);return n!==null?n.subtree(De(e)):new we(null)}}set(e,t){if(ue(e))return new we(t,this.children);{const n=oe(e),i=(this.children.get(n)||new we(null)).set(De(e),t),o=this.children.insert(n,i);return new we(this.value,o)}}remove(e){if(ue(e))return this.children.isEmpty()?new we(null):new we(null,this.children);{const t=oe(e),n=this.children.get(t);if(n){const r=n.remove(De(e));let i;return r.isEmpty()?i=this.children.remove(t):i=this.children.insert(t,r),this.value===null&&i.isEmpty()?new we(null):new we(this.value,i)}else return this}}get(e){if(ue(e))return this.value;{const t=oe(e),n=this.children.get(t);return n?n.get(De(e)):null}}setTree(e,t){if(ue(e))return t;{const n=oe(e),i=(this.children.get(n)||new we(null)).setTree(De(e),t);let o;return i.isEmpty()?o=this.children.remove(n):o=this.children.insert(n,i),new we(this.value,o)}}fold(e){return this.fold_(Ce(),e)}fold_(e,t){const n={};return this.children.inorderTraversal((r,i)=>{n[r]=i.fold_(Ge(e,r),t)}),t(e,this.value,n)}findOnPath(e,t){return this.findOnPath_(e,Ce(),t)}findOnPath_(e,t,n){const r=this.value?n(t,this.value):!1;if(r)return r;if(ue(e))return null;{const i=oe(e),o=this.children.get(i);return o?o.findOnPath_(De(e),Ge(t,i),n):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,Ce(),t)}foreachOnPath_(e,t,n){if(ue(e))return this;{this.value&&n(t,this.value);const r=oe(e),i=this.children.get(r);return i?i.foreachOnPath_(De(e),Ge(t,r),n):new we(null)}}foreach(e){this.foreach_(Ce(),e)}foreach_(e,t){this.children.inorderTraversal((n,r)=>{r.foreach_(Ge(e,n),t)}),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal((t,n)=>{n.value&&e(t,n.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ht{constructor(e){this.writeTree_=e}static empty(){return new Ht(new we(null))}}function yi(s,e,t){if(ue(e))return new Ht(new we(t));{const n=s.writeTree_.findRootMostValueAndPath(e);if(n!=null){const r=n.path;let i=n.value;const o=dt(r,e);return i=i.updateChild(o,t),new Ht(s.writeTree_.set(r,i))}else{const r=new we(t),i=s.writeTree_.setTree(e,r);return new Ht(i)}}}function Wd(s,e,t){let n=s;return Dt(t,(r,i)=>{n=yi(n,Ge(e,r),i)}),n}function zd(s,e){if(ue(e))return Ht.empty();{const t=s.writeTree_.setTree(e,new we(null));return new Ht(t)}}function nB(s,e){return Us(s,e)!=null}function Us(s,e){const t=s.writeTree_.findRootMostValueAndPath(e);return t!=null?s.writeTree_.get(t.path).getChild(dt(t.path,e)):null}function Qd(s){const e=[],t=s.writeTree_.value;return t!=null?t.isLeafNode()||t.forEachChild(Pe,(n,r)=>{e.push(new le(n,r))}):s.writeTree_.children.inorderTraversal((n,r)=>{r.value!=null&&e.push(new le(n,r.value))}),e}function qn(s,e){if(ue(e))return s;{const t=Us(s,e);return t!=null?new Ht(new we(t)):new Ht(s.writeTree_.subtree(e))}}function sB(s){return s.writeTree_.isEmpty()}function Ir(s,e){return wm(Ce(),s.writeTree_,e)}function wm(s,e,t){if(e.value!=null)return t.updateChild(s,e.value);{let n=null;return e.children.inorderTraversal((r,i)=>{r===".priority"?(H(i.value!==null,"Priority writes must always be leaf nodes"),n=i.value):t=wm(Ge(s,r),i,t)}),!t.getChild(s).isEmpty()&&n!==null&&(t=t.updateChild(Ge(s,".priority"),n)),t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _u(s,e){return Rm(e,s)}function ZR(s,e,t,n,r){H(n>s.lastWriteId,"Stacking an older write on top of newer ones"),r===void 0&&(r=!0),s.allWrites.push({path:e,snap:t,writeId:n,visible:r}),r&&(s.visibleWrites=yi(s.visibleWrites,e,t)),s.lastWriteId=n}function eS(s,e){for(let t=0;t<s.allWrites.length;t++){const n=s.allWrites[t];if(n.writeId===e)return n}return null}function tS(s,e){const t=s.allWrites.findIndex(a=>a.writeId===e);H(t>=0,"removeWrite called with nonexistent writeId.");const n=s.allWrites[t];s.allWrites.splice(t,1);let r=n.visible,i=!1,o=s.allWrites.length-1;for(;r&&o>=0;){const a=s.allWrites[o];a.visible&&(o>=t&&nS(a,n.path)?r=!1:Mt(n.path,a.path)&&(i=!0)),o--}if(r){if(i)return sS(s),!0;if(n.snap)s.visibleWrites=zd(s.visibleWrites,n.path);else{const a=n.children;Dt(a,c=>{s.visibleWrites=zd(s.visibleWrites,Ge(n.path,c))})}return!0}else return!1}function nS(s,e){if(s.snap)return Mt(s.path,e);for(const t in s.children)if(s.children.hasOwnProperty(t)&&Mt(Ge(s.path,t),e))return!0;return!1}function sS(s){s.visibleWrites=Tm(s.allWrites,rS,Ce()),s.allWrites.length>0?s.lastWriteId=s.allWrites[s.allWrites.length-1].writeId:s.lastWriteId=-1}function rS(s){return s.visible}function Tm(s,e,t){let n=Ht.empty();for(let r=0;r<s.length;++r){const i=s[r];if(e(i)){const o=i.path;let a;if(i.snap)Mt(t,o)?(a=dt(t,o),n=yi(n,a,i.snap)):Mt(o,t)&&(a=dt(o,t),n=yi(n,Ce(),i.snap.getChild(a)));else if(i.children){if(Mt(t,o))a=dt(t,o),n=Wd(n,a,i.children);else if(Mt(o,t))if(a=dt(o,t),ue(a))n=Wd(n,Ce(),i.children);else{const c=fr(i.children,oe(a));if(c){const B=c.getChild(De(a));n=yi(n,Ce(),B)}}}else throw wr("WriteRecord should have .snap or .children")}}return n}function vm(s,e,t,n,r){if(!n&&!r){const i=Us(s.visibleWrites,e);if(i!=null)return i;{const o=qn(s.visibleWrites,e);if(sB(o))return t;if(t==null&&!nB(o,Ce()))return null;{const a=t||te.EMPTY_NODE;return Ir(o,a)}}}else{const i=qn(s.visibleWrites,e);if(!r&&sB(i))return t;if(!r&&t==null&&!nB(i,Ce()))return null;{const o=function(B){return(B.visible||r)&&(!n||!~n.indexOf(B.writeId))&&(Mt(B.path,e)||Mt(e,B.path))},a=Tm(s.allWrites,o,e),c=t||te.EMPTY_NODE;return Ir(a,c)}}}function iS(s,e,t){let n=te.EMPTY_NODE;const r=Us(s.visibleWrites,e);if(r)return r.isLeafNode()||r.forEachChild(Pe,(i,o)=>{n=n.updateImmediateChild(i,o)}),n;if(t){const i=qn(s.visibleWrites,e);return t.forEachChild(Pe,(o,a)=>{const c=Ir(qn(i,new _e(o)),a);n=n.updateImmediateChild(o,c)}),Qd(i).forEach(o=>{n=n.updateImmediateChild(o.name,o.node)}),n}else{const i=qn(s.visibleWrites,e);return Qd(i).forEach(o=>{n=n.updateImmediateChild(o.name,o.node)}),n}}function oS(s,e,t,n,r){H(n||r,"Either existingEventSnap or existingServerSnap must exist");const i=Ge(e,t);if(nB(s.visibleWrites,i))return null;{const o=qn(s.visibleWrites,i);return sB(o)?r.getChild(t):Ir(o,r.getChild(t))}}function aS(s,e,t,n){const r=Ge(e,t),i=Us(s.visibleWrites,r);if(i!=null)return i;if(n.isCompleteForChild(t)){const o=qn(s.visibleWrites,r);return Ir(o,n.getNode().getImmediateChild(t))}else return null}function lS(s,e){return Us(s.visibleWrites,e)}function cS(s,e,t,n,r,i,o){let a;const c=qn(s.visibleWrites,e),B=Us(c,Ce());if(B!=null)a=B;else if(t!=null)a=Ir(c,t);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const h=[],f=o.getCompare(),C=i?a.getReverseIteratorFrom(n,o):a.getIteratorFrom(n,o);let _=C.getNext();for(;_&&h.length<r;)f(_,n)!==0&&h.push(_),_=C.getNext();return h}else return[]}function BS(){return{visibleWrites:Ht.empty(),allWrites:[],lastWriteId:-1}}function La(s,e,t,n){return vm(s.writeTree,s.treePath,e,t,n)}function Eu(s,e){return iS(s.writeTree,s.treePath,e)}function Yd(s,e,t,n){return oS(s.writeTree,s.treePath,e,t,n)}function ka(s,e){return lS(s.writeTree,Ge(s.treePath,e))}function uS(s,e,t,n,r,i){return cS(s.writeTree,s.treePath,e,t,n,r,i)}function Du(s,e,t){return aS(s.writeTree,s.treePath,e,t)}function Am(s,e){return Rm(Ge(s.treePath,e),s.writeTree)}function Rm(s,e){return{treePath:s,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hS{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,n=e.childName;H(t==="child_added"||t==="child_changed"||t==="child_removed","Only child changes supported for tracking"),H(n!==".priority","Only non-priority child changes can be tracked.");const r=this.changeMap.get(n);if(r){const i=r.type;if(t==="child_added"&&i==="child_removed")this.changeMap.set(n,zi(n,e.snapshotNode,r.snapshotNode));else if(t==="child_removed"&&i==="child_added")this.changeMap.delete(n);else if(t==="child_removed"&&i==="child_changed")this.changeMap.set(n,Wi(n,r.oldSnap));else if(t==="child_changed"&&i==="child_added")this.changeMap.set(n,yr(n,e.snapshotNode));else if(t==="child_changed"&&i==="child_changed")this.changeMap.set(n,zi(n,e.snapshotNode,r.oldSnap));else throw wr("Illegal combination of changes: "+e+" occurred after "+r)}else this.changeMap.set(n,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fS{getCompleteChild(e){return null}getChildAfterChild(e,t,n){return null}}const Sm=new fS;class yu{constructor(e,t,n=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=n}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const n=this.optCompleteServerCache_!=null?new bs(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Du(this.writes_,e,n)}}getChildAfterChild(e,t,n){const r=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Os(this.viewCache_),i=uS(this.writes_,r,t,1,n,e);return i.length===0?null:i[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dS(s){return{filter:s}}function CS(s,e){H(e.eventCache.getNode().isIndexed(s.filter.getIndex()),"Event snap not indexed"),H(e.serverCache.getNode().isIndexed(s.filter.getIndex()),"Server snap not indexed")}function pS(s,e,t,n,r){const i=new hS;let o,a;if(t.type===Vt.OVERWRITE){const B=t;B.source.fromUser?o=rB(s,e,B.path,B.snap,n,r,i):(H(B.source.fromServer,"Unknown source."),a=B.source.tagged||e.serverCache.isFiltered()&&!ue(B.path),o=xa(s,e,B.path,B.snap,n,r,a,i))}else if(t.type===Vt.MERGE){const B=t;B.source.fromUser?o=mS(s,e,B.path,B.children,n,r,i):(H(B.source.fromServer,"Unknown source."),a=B.source.tagged||e.serverCache.isFiltered(),o=iB(s,e,B.path,B.children,n,r,a,i))}else if(t.type===Vt.ACK_USER_WRITE){const B=t;B.revert?o=DS(s,e,B.path,n,r,i):o=_S(s,e,B.path,B.affectedTree,n,r,i)}else if(t.type===Vt.LISTEN_COMPLETE)o=ES(s,e,t.path,n,i);else throw wr("Unknown operation type: "+t.type);const c=i.getChanges();return gS(e,o,c),{viewCache:o,changes:c}}function gS(s,e,t){const n=e.eventCache;if(n.isFullyInitialized()){const r=n.getNode().isLeafNode()||n.getNode().isEmpty(),i=tB(s);(t.length>0||!s.eventCache.isFullyInitialized()||r&&!n.getNode().equals(i)||!n.getNode().getPriority().equals(i.getPriority()))&&t.push(Em(tB(e)))}}function Pm(s,e,t,n,r,i){const o=e.eventCache;if(ka(n,t)!=null)return e;{let a,c;if(ue(t))if(H(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const B=Os(e),h=B instanceof te?B:te.EMPTY_NODE,f=Eu(n,h);a=s.filter.updateFullNode(e.eventCache.getNode(),f,i)}else{const B=La(n,Os(e));a=s.filter.updateFullNode(e.eventCache.getNode(),B,i)}else{const B=oe(t);if(B===".priority"){H(ns(t)===1,"Can't have a priority with additional path components");const h=o.getNode();c=e.serverCache.getNode();const f=Yd(n,t,h,c);f!=null?a=s.filter.updatePriority(h,f):a=o.getNode()}else{const h=De(t);let f;if(o.isCompleteForChild(B)){c=e.serverCache.getNode();const C=Yd(n,t,o.getNode(),c);C!=null?f=o.getNode().getImmediateChild(B).updateChild(h,C):f=o.getNode().getImmediateChild(B)}else f=Du(n,B,e.serverCache);f!=null?a=s.filter.updateChild(o.getNode(),B,f,h,r,i):a=o.getNode()}}return Di(e,a,o.isFullyInitialized()||ue(t),s.filter.filtersNodes())}}function xa(s,e,t,n,r,i,o,a){const c=e.serverCache;let B;const h=o?s.filter:s.filter.getIndexedFilter();if(ue(t))B=h.updateFullNode(c.getNode(),n,null);else if(h.filtersNodes()&&!c.isFiltered()){const _=c.getNode().updateChild(t,n);B=h.updateFullNode(c.getNode(),_,null)}else{const _=oe(t);if(!c.isCompleteForPath(t)&&ns(t)>1)return e;const I=De(t),V=c.getNode().getImmediateChild(_).updateChild(I,n);_===".priority"?B=h.updatePriority(c.getNode(),V):B=h.updateChild(c.getNode(),_,V,I,Sm,null)}const f=Im(e,B,c.isFullyInitialized()||ue(t),h.filtersNodes()),C=new yu(r,f,i);return Pm(s,f,t,r,C,a)}function rB(s,e,t,n,r,i,o){const a=e.eventCache;let c,B;const h=new yu(r,e,i);if(ue(t))B=s.filter.updateFullNode(e.eventCache.getNode(),n,o),c=Di(e,B,!0,s.filter.filtersNodes());else{const f=oe(t);if(f===".priority")B=s.filter.updatePriority(e.eventCache.getNode(),n),c=Di(e,B,a.isFullyInitialized(),a.isFiltered());else{const C=De(t),_=a.getNode().getImmediateChild(f);let I;if(ue(C))I=n;else{const O=h.getCompleteChild(f);O!=null?um(C)===".priority"&&O.getChild(fm(C)).isEmpty()?I=O:I=O.updateChild(C,n):I=te.EMPTY_NODE}if(_.equals(I))c=e;else{const O=s.filter.updateChild(a.getNode(),f,I,C,h,o);c=Di(e,O,a.isFullyInitialized(),s.filter.filtersNodes())}}}return c}function $d(s,e){return s.eventCache.isCompleteForChild(e)}function mS(s,e,t,n,r,i,o){let a=e;return n.foreach((c,B)=>{const h=Ge(t,c);$d(e,oe(h))&&(a=rB(s,a,h,B,r,i,o))}),n.foreach((c,B)=>{const h=Ge(t,c);$d(e,oe(h))||(a=rB(s,a,h,B,r,i,o))}),a}function Xd(s,e,t){return t.foreach((n,r)=>{e=e.updateChild(n,r)}),e}function iB(s,e,t,n,r,i,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let c=e,B;ue(t)?B=n:B=new we(null).setTree(t,n);const h=e.serverCache.getNode();return B.children.inorderTraversal((f,C)=>{if(h.hasChild(f)){const _=e.serverCache.getNode().getImmediateChild(f),I=Xd(s,_,C);c=xa(s,c,new _e(f),I,r,i,o,a)}}),B.children.inorderTraversal((f,C)=>{const _=!e.serverCache.isCompleteForChild(f)&&C.value===null;if(!h.hasChild(f)&&!_){const I=e.serverCache.getNode().getImmediateChild(f),O=Xd(s,I,C);c=xa(s,c,new _e(f),O,r,i,o,a)}}),c}function _S(s,e,t,n,r,i,o){if(ka(r,t)!=null)return e;const a=e.serverCache.isFiltered(),c=e.serverCache;if(n.value!=null){if(ue(t)&&c.isFullyInitialized()||c.isCompleteForPath(t))return xa(s,e,t,c.getNode().getChild(t),r,i,a,o);if(ue(t)){let B=new we(null);return c.getNode().forEachChild(lr,(h,f)=>{B=B.set(new _e(h),f)}),iB(s,e,t,B,r,i,a,o)}else return e}else{let B=new we(null);return n.foreach((h,f)=>{const C=Ge(t,h);c.isCompleteForPath(C)&&(B=B.set(h,c.getNode().getChild(C)))}),iB(s,e,t,B,r,i,a,o)}}function ES(s,e,t,n,r){const i=e.serverCache,o=Im(e,i.getNode(),i.isFullyInitialized()||ue(t),i.isFiltered());return Pm(s,o,t,n,Sm,r)}function DS(s,e,t,n,r,i){let o;if(ka(n,t)!=null)return e;{const a=new yu(n,e,r),c=e.eventCache.getNode();let B;if(ue(t)||oe(t)===".priority"){let h;if(e.serverCache.isFullyInitialized())h=La(n,Os(e));else{const f=e.serverCache.getNode();H(f instanceof te,"serverChildren would be complete if leaf node"),h=Eu(n,f)}h=h,B=s.filter.updateFullNode(c,h,i)}else{const h=oe(t);let f=Du(n,h,e.serverCache);f==null&&e.serverCache.isCompleteForChild(h)&&(f=c.getImmediateChild(h)),f!=null?B=s.filter.updateChild(c,h,f,De(t),a,i):e.eventCache.getNode().hasChild(h)?B=s.filter.updateChild(c,h,te.EMPTY_NODE,De(t),a,i):B=c,B.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=La(n,Os(e)),o.isLeafNode()&&(B=s.filter.updateFullNode(B,o,i)))}return o=e.serverCache.isFullyInitialized()||ka(n,Ce())!=null,Di(e,B,o,s.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yS{constructor(e,t){this.query_=e,this.eventRegistrations_=[];const n=this.query_._queryParams,r=new Cu(n.getIndex()),i=HR(n);this.processor_=dS(i);const o=t.serverCache,a=t.eventCache,c=r.updateFullNode(te.EMPTY_NODE,o.getNode(),null),B=i.updateFullNode(te.EMPTY_NODE,a.getNode(),null),h=new bs(c,o.isFullyInitialized(),r.filtersNodes()),f=new bs(B,a.isFullyInitialized(),i.filtersNodes());this.viewCache_=ml(f,h),this.eventGenerator_=new zR(this.query_)}get query(){return this.query_}}function IS(s){return s.viewCache_.serverCache.getNode()}function wS(s,e){const t=Os(s.viewCache_);return t&&(s.query._queryParams.loadsAllData()||!ue(e)&&!t.getImmediateChild(oe(e)).isEmpty())?t.getChild(e):null}function Zd(s){return s.eventRegistrations_.length===0}function TS(s,e){s.eventRegistrations_.push(e)}function eC(s,e,t){const n=[];if(t){H(e==null,"A cancel should cancel all event registrations.");const r=s.query._path;s.eventRegistrations_.forEach(i=>{const o=i.createCancelEvent(t,r);o&&n.push(o)})}if(e){let r=[];for(let i=0;i<s.eventRegistrations_.length;++i){const o=s.eventRegistrations_[i];if(!o.matches(e))r.push(o);else if(e.hasAnyCallback()){r=r.concat(s.eventRegistrations_.slice(i+1));break}}s.eventRegistrations_=r}else s.eventRegistrations_=[];return n}function tC(s,e,t,n){e.type===Vt.MERGE&&e.source.queryId!==null&&(H(Os(s.viewCache_),"We should always have a full cache before handling merges"),H(tB(s.viewCache_),"Missing event cache, even though we have a server cache"));const r=s.viewCache_,i=pS(s.processor_,r,e,t,n);return CS(s.processor_,i.viewCache),H(i.viewCache.serverCache.isFullyInitialized()||!r.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),s.viewCache_=i.viewCache,Nm(s,i.changes,i.viewCache.eventCache.getNode(),null)}function vS(s,e){const t=s.viewCache_.eventCache,n=[];return t.getNode().isLeafNode()||t.getNode().forEachChild(Pe,(i,o)=>{n.push(yr(i,o))}),t.isFullyInitialized()&&n.push(Em(t.getNode())),Nm(s,n,t.getNode(),e)}function Nm(s,e,t,n){const r=n?[n]:s.eventRegistrations_;return QR(s.eventGenerator_,e,t,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ma;class AS{constructor(){this.views=new Map}}function RS(s){H(!Ma,"__referenceConstructor has already been defined"),Ma=s}function SS(){return H(Ma,"Reference.ts has not been loaded"),Ma}function PS(s){return s.views.size===0}function Iu(s,e,t,n){const r=e.source.queryId;if(r!==null){const i=s.views.get(r);return H(i!=null,"SyncTree gave us an op for an invalid query."),tC(i,e,t,n)}else{let i=[];for(const o of s.views.values())i=i.concat(tC(o,e,t,n));return i}}function NS(s,e,t,n,r){const i=e._queryIdentifier,o=s.views.get(i);if(!o){let a=La(t,r?n:null),c=!1;a?c=!0:n instanceof te?(a=Eu(t,n),c=!1):(a=te.EMPTY_NODE,c=!1);const B=ml(new bs(a,c,!1),new bs(n,r,!1));return new yS(e,B)}return o}function bS(s,e,t,n,r,i){const o=NS(s,e,n,r,i);return s.views.has(e._queryIdentifier)||s.views.set(e._queryIdentifier,o),TS(o,t),vS(o,t)}function OS(s,e,t,n){const r=e._queryIdentifier,i=[];let o=[];const a=ss(s);if(r==="default")for(const[c,B]of s.views.entries())o=o.concat(eC(B,t,n)),Zd(B)&&(s.views.delete(c),B.query._queryParams.loadsAllData()||i.push(B.query));else{const c=s.views.get(r);c&&(o=o.concat(eC(c,t,n)),Zd(c)&&(s.views.delete(r),c.query._queryParams.loadsAllData()||i.push(c.query)))}return a&&!ss(s)&&i.push(new(SS())(e._repo,e._path)),{removed:i,events:o}}function bm(s){const e=[];for(const t of s.views.values())t.query._queryParams.loadsAllData()||e.push(t);return e}function cr(s,e){let t=null;for(const n of s.views.values())t=t||wS(n,e);return t}function Om(s,e){if(e._queryParams.loadsAllData())return _l(s);{const n=e._queryIdentifier;return s.views.get(n)}}function Fm(s,e){return Om(s,e)!=null}function ss(s){return _l(s)!=null}function _l(s){for(const e of s.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Va;function FS(s){H(!Va,"__referenceConstructor has already been defined"),Va=s}function LS(){return H(Va,"Reference.ts has not been loaded"),Va}let kS=1;class nC{constructor(e){this.listenProvider_=e,this.syncPointTree_=new we(null),this.pendingWriteTree_=BS(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function Lm(s,e,t,n,r){return ZR(s.pendingWriteTree_,e,t,n,r),r?go(s,new Ns(ym(),e,t)):[]}function ys(s,e,t=!1){const n=eS(s.pendingWriteTree_,e);if(tS(s.pendingWriteTree_,e)){let i=new we(null);return n.snap!=null?i=i.set(Ce(),!0):Dt(n.children,o=>{i=i.set(new _e(o),!0)}),go(s,new Fa(n.path,i,t))}else return[]}function El(s,e,t){return go(s,new Ns(gu(),e,t))}function xS(s,e,t){const n=we.fromObject(t);return go(s,new $i(gu(),e,n))}function MS(s,e){return go(s,new Yi(gu(),e))}function VS(s,e,t){const n=Tu(s,t);if(n){const r=vu(n),i=r.path,o=r.queryId,a=dt(i,e),c=new Yi(mu(o),a);return Au(s,i,c)}else return[]}function oB(s,e,t,n,r=!1){const i=e._path,o=s.syncPointTree_.get(i);let a=[];if(o&&(e._queryIdentifier==="default"||Fm(o,e))){const c=OS(o,e,t,n);PS(o)&&(s.syncPointTree_=s.syncPointTree_.remove(i));const B=c.removed;if(a=c.events,!r){const h=B.findIndex(C=>C._queryParams.loadsAllData())!==-1,f=s.syncPointTree_.findOnPath(i,(C,_)=>ss(_));if(h&&!f){const C=s.syncPointTree_.subtree(i);if(!C.isEmpty()){const _=US(C);for(let I=0;I<_.length;++I){const O=_[I],V=O.query,q=Mm(s,O);s.listenProvider_.startListening(Ii(V),Ga(s,V),q.hashFn,q.onComplete)}}}!f&&B.length>0&&!n&&(h?s.listenProvider_.stopListening(Ii(e),null):B.forEach(C=>{const _=s.queryToTagMap.get(Dl(C));s.listenProvider_.stopListening(Ii(C),_)}))}JS(s,B)}return a}function GS(s,e,t,n){const r=Tu(s,n);if(r!=null){const i=vu(r),o=i.path,a=i.queryId,c=dt(o,e),B=new Ns(mu(a),c,t);return Au(s,o,B)}else return[]}function HS(s,e,t,n){const r=Tu(s,n);if(r){const i=vu(r),o=i.path,a=i.queryId,c=dt(o,e),B=we.fromObject(t),h=new $i(mu(a),c,B);return Au(s,o,h)}else return[]}function sC(s,e,t,n=!1){const r=e._path;let i=null,o=!1;s.syncPointTree_.foreachOnPath(r,(C,_)=>{const I=dt(C,r);i=i||cr(_,I),o=o||ss(_)});let a=s.syncPointTree_.get(r);a?(o=o||ss(a),i=i||cr(a,Ce())):(a=new AS,s.syncPointTree_=s.syncPointTree_.set(r,a));let c;i!=null?c=!0:(c=!1,i=te.EMPTY_NODE,s.syncPointTree_.subtree(r).foreachChild((_,I)=>{const O=cr(I,Ce());O&&(i=i.updateImmediateChild(_,O))}));const B=Fm(a,e);if(!B&&!e._queryParams.loadsAllData()){const C=Dl(e);H(!s.queryToTagMap.has(C),"View does not exist, but we have a tag");const _=qS();s.queryToTagMap.set(C,_),s.tagToQueryMap.set(_,C)}const h=_u(s.pendingWriteTree_,r);let f=bS(a,e,t,h,i,c);if(!B&&!o&&!n){const C=Om(a,e);f=f.concat(jS(s,e,C))}return f}function wu(s,e,t){const r=s.pendingWriteTree_,i=s.syncPointTree_.findOnPath(e,(o,a)=>{const c=dt(o,e),B=cr(a,c);if(B)return B});return vm(r,e,i,t,!0)}function go(s,e){return km(e,s.syncPointTree_,null,_u(s.pendingWriteTree_,Ce()))}function km(s,e,t,n){if(ue(s.path))return xm(s,e,t,n);{const r=e.get(Ce());t==null&&r!=null&&(t=cr(r,Ce()));let i=[];const o=oe(s.path),a=s.operationForChild(o),c=e.children.get(o);if(c&&a){const B=t?t.getImmediateChild(o):null,h=Am(n,o);i=i.concat(km(a,c,B,h))}return r&&(i=i.concat(Iu(r,s,n,t))),i}}function xm(s,e,t,n){const r=e.get(Ce());t==null&&r!=null&&(t=cr(r,Ce()));let i=[];return e.children.inorderTraversal((o,a)=>{const c=t?t.getImmediateChild(o):null,B=Am(n,o),h=s.operationForChild(o);h&&(i=i.concat(xm(h,a,c,B)))}),r&&(i=i.concat(Iu(r,s,n,t))),i}function Mm(s,e){const t=e.query,n=Ga(s,t);return{hashFn:()=>(IS(e)||te.EMPTY_NODE).hash(),onComplete:r=>{if(r==="ok")return n?VS(s,t._path,n):MS(s,t._path);{const i=GA(r,t);return oB(s,t,null,i)}}}}function Ga(s,e){const t=Dl(e);return s.queryToTagMap.get(t)}function Dl(s){return s._path.toString()+"$"+s._queryIdentifier}function Tu(s,e){return s.tagToQueryMap.get(e)}function vu(s){const e=s.indexOf("$");return H(e!==-1&&e<s.length-1,"Bad queryKey."),{queryId:s.substr(e+1),path:new _e(s.substr(0,e))}}function Au(s,e,t){const n=s.syncPointTree_.get(e);H(n,"Missing sync point for query tag that we're tracking");const r=_u(s.pendingWriteTree_,e);return Iu(n,t,r,null)}function US(s){return s.fold((e,t,n)=>{if(t&&ss(t))return[_l(t)];{let r=[];return t&&(r=bm(t)),Dt(n,(i,o)=>{r=r.concat(o)}),r}})}function Ii(s){return s._queryParams.loadsAllData()&&!s._queryParams.isDefault()?new(LS())(s._repo,s._path):s}function JS(s,e){for(let t=0;t<e.length;++t){const n=e[t];if(!n._queryParams.loadsAllData()){const r=Dl(n),i=s.queryToTagMap.get(r);s.queryToTagMap.delete(r),s.tagToQueryMap.delete(i)}}}function qS(){return kS++}function jS(s,e,t){const n=e._path,r=Ga(s,e),i=Mm(s,t),o=s.listenProvider_.startListening(Ii(e),r,i.hashFn,i.onComplete),a=s.syncPointTree_.subtree(n);if(r)H(!ss(a.value),"If we're adding a query, it shouldn't be shadowed");else{const c=a.fold((B,h,f)=>{if(!ue(B)&&h&&ss(h))return[_l(h).query];{let C=[];return h&&(C=C.concat(bm(h).map(_=>_.query))),Dt(f,(_,I)=>{C=C.concat(I)}),C}});for(let B=0;B<c.length;++B){const h=c[B];s.listenProvider_.stopListening(Ii(h),Ga(s,h))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ru{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new Ru(t)}node(){return this.node_}}class Su{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=Ge(this.path_,e);return new Su(this.syncTree_,t)}node(){return wu(this.syncTree_,this.path_)}}const KS=function(s){return s=s||{},s.timestamp=s.timestamp||new Date().getTime(),s},rC=function(s,e,t){if(!s||typeof s!="object")return s;if(H(".sv"in s,"Unexpected leaf node or priority contents"),typeof s[".sv"]=="string")return WS(s[".sv"],e,t);if(typeof s[".sv"]=="object")return zS(s[".sv"],e);H(!1,"Unexpected server value: "+JSON.stringify(s,null,2))},WS=function(s,e,t){switch(s){case"timestamp":return t.timestamp;default:H(!1,"Unexpected server value: "+s)}},zS=function(s,e,t){s.hasOwnProperty("increment")||H(!1,"Unexpected server value: "+JSON.stringify(s,null,2));const n=s.increment;typeof n!="number"&&H(!1,"Unexpected increment value: "+n);const r=e.node();if(H(r!==null&&typeof r<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!r.isLeafNode())return n;const o=r.getValue();return typeof o!="number"?n:o+n},QS=function(s,e,t,n){return Pu(e,new Su(t,s),n)},Vm=function(s,e,t){return Pu(s,new Ru(e),t)};function Pu(s,e,t){const n=s.getPriority().val(),r=rC(n,e.getImmediateChild(".priority"),t);let i;if(s.isLeafNode()){const o=s,a=rC(o.getValue(),e,t);return a!==o.getValue()||r!==o.getPriority().val()?new qe(a,Qe(r)):s}else{const o=s;return i=o,r!==o.getPriority().val()&&(i=i.updatePriority(new qe(r))),o.forEachChild(Pe,(a,c)=>{const B=Pu(c,e.getImmediateChild(a),t);B!==c&&(i=i.updateImmediateChild(a,B))}),i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nu{constructor(e="",t=null,n={children:{},childCount:0}){this.name=e,this.parent=t,this.node=n}}function bu(s,e){let t=e instanceof _e?e:new _e(e),n=s,r=oe(t);for(;r!==null;){const i=fr(n.node.children,r)||{children:{},childCount:0};n=new Nu(r,n,i),t=De(t),r=oe(t)}return n}function Lr(s){return s.node.value}function Gm(s,e){s.node.value=e,aB(s)}function Hm(s){return s.node.childCount>0}function YS(s){return Lr(s)===void 0&&!Hm(s)}function yl(s,e){Dt(s.node.children,(t,n)=>{e(new Nu(t,s,n))})}function Um(s,e,t,n){t&&e(s),yl(s,r=>{Um(r,e,!0)})}function $S(s,e,t){let n=s.parent;for(;n!==null;){if(e(n))return!0;n=n.parent}return!1}function mo(s){return new _e(s.parent===null?s.name:mo(s.parent)+"/"+s.name)}function aB(s){s.parent!==null&&XS(s.parent,s.name,s)}function XS(s,e,t){const n=YS(t),r=In(s.node.children,e);n&&r?(delete s.node.children[e],s.node.childCount--,aB(s)):!n&&!r&&(s.node.children[e]=t.node,s.node.childCount++,aB(s))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZS=/[\[\].#$\/\u0000-\u001F\u007F]/,eP=/[\[\].#$\u0000-\u001F\u007F]/,mc=10*1024*1024,Jm=function(s){return typeof s=="string"&&s.length!==0&&!ZS.test(s)},qm=function(s){return typeof s=="string"&&s.length!==0&&!eP.test(s)},tP=function(s){return s&&(s=s.replace(/^\/*\.info(\/|$)/,"/")),qm(s)},nP=function(s,e,t,n){Ou(dB(s,"value"),e,t)},Ou=function(s,e,t){const n=t instanceof _e?new _R(t,s):t;if(e===void 0)throw new Error(s+"contains undefined "+gs(n));if(typeof e=="function")throw new Error(s+"contains a function "+gs(n)+" with contents = "+e.toString());if(qg(e))throw new Error(s+"contains "+e.toString()+" "+gs(n));if(typeof e=="string"&&e.length>mc/3&&Qa(e)>mc)throw new Error(s+"contains a string greater than "+mc+" utf8 bytes "+gs(n)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let r=!1,i=!1;if(Dt(e,(o,a)=>{if(o===".value")r=!0;else if(o!==".priority"&&o!==".sv"&&(i=!0,!Jm(o)))throw new Error(s+" contains an invalid key ("+o+") "+gs(n)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);ER(n,o),Ou(s,a,n),DR(n)}),r&&i)throw new Error(s+' contains ".value" child '+gs(n)+" in addition to actual children.")}},jm=function(s,e,t,n){if(!qm(t))throw new Error(dB(s,e)+'was an invalid path = "'+t+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},sP=function(s,e,t,n){t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),jm(s,e,t)},rP=function(s,e){if(oe(e)===".info")throw new Error(s+" failed = Can't modify data under /.info/")},iP=function(s,e){const t=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Jm(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||t.length!==0&&!tP(t))throw new Error(dB(s,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oP{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Fu(s,e){let t=null;for(let n=0;n<e.length;n++){const r=e[n],i=r.getPath();t!==null&&!hu(i,t.path)&&(s.eventLists_.push(t),t=null),t===null&&(t={events:[],path:i}),t.events.push(r)}t&&s.eventLists_.push(t)}function Km(s,e,t){Fu(s,t),Wm(s,n=>hu(n,e))}function En(s,e,t){Fu(s,t),Wm(s,n=>Mt(n,e)||Mt(e,n))}function Wm(s,e){s.recursionDepth_++;let t=!0;for(let n=0;n<s.eventLists_.length;n++){const r=s.eventLists_[n];if(r){const i=r.path;e(i)?(aP(s.eventLists_[n]),s.eventLists_[n]=null):t=!1}}t&&(s.eventLists_=[]),s.recursionDepth_--}function aP(s){for(let e=0;e<s.events.length;e++){const t=s.events[e];if(t!==null){s.events[e]=null;const n=t.getEventRunner();_i&&nt("event: "+t.toString()),Fr(n)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lP="repo_interrupt",cP=25;class BP{constructor(e,t,n,r){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=n,this.appCheckProvider_=r,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new oP,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Oa(),this.transactionQueueTree_=new Nu,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function uP(s,e,t){if(s.stats_=Bu(s.repoInfo_),s.forceRestClient_||qA())s.server_=new ba(s.repoInfo_,(n,r,i,o)=>{iC(s,n,r,i,o)},s.authTokenProvider_,s.appCheckProvider_),setTimeout(()=>oC(s,!0),0);else{if(typeof t<"u"&&t!==null){if(typeof t!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{We(t)}catch(n){throw new Error("Invalid authOverride provided: "+n)}}s.persistentConnection_=new dn(s.repoInfo_,e,(n,r,i,o)=>{iC(s,n,r,i,o)},n=>{oC(s,n)},n=>{fP(s,n)},s.authTokenProvider_,s.appCheckProvider_,t),s.server_=s.persistentConnection_}s.authTokenProvider_.addTokenChangeListener(n=>{s.server_.refreshAuthToken(n)}),s.appCheckProvider_.addTokenChangeListener(n=>{s.server_.refreshAppCheckToken(n.token)}),s.statsReporter_=QA(s.repoInfo_,()=>new WR(s.stats_,s.server_)),s.infoData_=new UR,s.infoSyncTree_=new nC({startListening:(n,r,i,o)=>{let a=[];const c=s.infoData_.getNode(n._path);return c.isEmpty()||(a=El(s.infoSyncTree_,n._path,c),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),ku(s,"connected",!1),s.serverSyncTree_=new nC({startListening:(n,r,i,o)=>(s.server_.listen(n,i,r,(a,c)=>{const B=o(a,c);En(s.eventQueue_,n._path,B)}),[]),stopListening:(n,r)=>{s.server_.unlisten(n,r)}})}function hP(s){const t=s.infoData_.getNode(new _e(".info/serverTimeOffset")).val()||0;return new Date().getTime()+t}function Lu(s){return KS({timestamp:hP(s)})}function iC(s,e,t,n,r){s.dataUpdateCount++;const i=new _e(e);t=s.interceptServerDataCallback_?s.interceptServerDataCallback_(e,t):t;let o=[];if(r)if(n){const c=ua(t,B=>Qe(B));o=HS(s.serverSyncTree_,i,c,r)}else{const c=Qe(t);o=GS(s.serverSyncTree_,i,c,r)}else if(n){const c=ua(t,B=>Qe(B));o=xS(s.serverSyncTree_,i,c)}else{const c=Qe(t);o=El(s.serverSyncTree_,i,c)}let a=i;o.length>0&&(a=Il(s,i)),En(s.eventQueue_,a,o)}function oC(s,e){ku(s,"connected",e),e===!1&&CP(s)}function fP(s,e){Dt(e,(t,n)=>{ku(s,t,n)})}function ku(s,e,t){const n=new _e("/.info/"+e),r=Qe(t);s.infoData_.updateSnapshot(n,r);const i=El(s.infoSyncTree_,n,r);En(s.eventQueue_,n,i)}function zm(s){return s.nextWriteId_++}function dP(s,e,t,n,r){xu(s,"set",{path:e.toString(),value:t,priority:n});const i=Lu(s),o=Qe(t,n),a=wu(s.serverSyncTree_,e),c=Vm(o,a,i),B=zm(s),h=Lm(s.serverSyncTree_,e,c,B,!0);Fu(s.eventQueue_,h),s.server_.put(e.toString(),o.val(!0),(C,_)=>{const I=C==="ok";I||gt("set at "+e+" failed: "+C);const O=ys(s.serverSyncTree_,B,!I);En(s.eventQueue_,e,O),mP(s,r,C,_)});const f=Zm(s,e);Il(s,f),En(s.eventQueue_,f,[])}function CP(s){xu(s,"onDisconnectEvents");const e=Lu(s),t=Oa();eB(s.onDisconnect_,Ce(),(r,i)=>{const o=QS(r,i,s.serverSyncTree_,e);Dm(t,r,o)});let n=[];eB(t,Ce(),(r,i)=>{n=n.concat(El(s.serverSyncTree_,r,i));const o=Zm(s,r);Il(s,o)}),s.onDisconnect_=Oa(),En(s.eventQueue_,Ce(),n)}function pP(s,e,t){let n;oe(e._path)===".info"?n=sC(s.infoSyncTree_,e,t):n=sC(s.serverSyncTree_,e,t),Km(s.eventQueue_,e._path,n)}function aC(s,e,t){let n;oe(e._path)===".info"?n=oB(s.infoSyncTree_,e,t):n=oB(s.serverSyncTree_,e,t),Km(s.eventQueue_,e._path,n)}function gP(s){s.persistentConnection_&&s.persistentConnection_.interrupt(lP)}function xu(s,...e){let t="";s.persistentConnection_&&(t=s.persistentConnection_.id+":"),nt(t,...e)}function mP(s,e,t,n){e&&Fr(()=>{if(t==="ok")e(null);else{const r=(t||"error").toUpperCase();let i=r;n&&(i+=": "+n);const o=new Error(i);o.code=r,e(o)}})}function Qm(s,e,t){return wu(s.serverSyncTree_,e,t)||te.EMPTY_NODE}function Mu(s,e=s.transactionQueueTree_){if(e||wl(s,e),Lr(e)){const t=$m(s,e);H(t.length>0,"Sending zero length transaction queue"),t.every(r=>r.status===0)&&_P(s,mo(e),t)}else Hm(e)&&yl(e,t=>{Mu(s,t)})}function _P(s,e,t){const n=t.map(B=>B.currentWriteId),r=Qm(s,e,n);let i=r;const o=r.hash();for(let B=0;B<t.length;B++){const h=t[B];H(h.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),h.status=1,h.retryCount++;const f=dt(e,h.path);i=i.updateChild(f,h.currentOutputSnapshotRaw)}const a=i.val(!0),c=e;s.server_.put(c.toString(),a,B=>{xu(s,"transaction put response",{path:c.toString(),status:B});let h=[];if(B==="ok"){const f=[];for(let C=0;C<t.length;C++)t[C].status=2,h=h.concat(ys(s.serverSyncTree_,t[C].currentWriteId)),t[C].onComplete&&f.push(()=>t[C].onComplete(null,!0,t[C].currentOutputSnapshotResolved)),t[C].unwatcher();wl(s,bu(s.transactionQueueTree_,e)),Mu(s,s.transactionQueueTree_),En(s.eventQueue_,e,h);for(let C=0;C<f.length;C++)Fr(f[C])}else{if(B==="datastale")for(let f=0;f<t.length;f++)t[f].status===3?t[f].status=4:t[f].status=0;else{gt("transaction at "+c.toString()+" failed: "+B);for(let f=0;f<t.length;f++)t[f].status=4,t[f].abortReason=B}Il(s,e)}},o)}function Il(s,e){const t=Ym(s,e),n=mo(t),r=$m(s,t);return EP(s,r,n),n}function EP(s,e,t){if(e.length===0)return;const n=[];let r=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const c=e[a],B=dt(t,c.path);let h=!1,f;if(H(B!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),c.status===4)h=!0,f=c.abortReason,r=r.concat(ys(s.serverSyncTree_,c.currentWriteId,!0));else if(c.status===0)if(c.retryCount>=cP)h=!0,f="maxretry",r=r.concat(ys(s.serverSyncTree_,c.currentWriteId,!0));else{const C=Qm(s,c.path,o);c.currentInputSnapshot=C;const _=e[a].update(C.val());if(_!==void 0){Ou("transaction failed: Data returned ",_,c.path);let I=Qe(_);typeof _=="object"&&_!=null&&In(_,".priority")||(I=I.updatePriority(C.getPriority()));const V=c.currentWriteId,q=Lu(s),re=Vm(I,C,q);c.currentOutputSnapshotRaw=I,c.currentOutputSnapshotResolved=re,c.currentWriteId=zm(s),o.splice(o.indexOf(V),1),r=r.concat(Lm(s.serverSyncTree_,c.path,re,c.currentWriteId,c.applyLocally)),r=r.concat(ys(s.serverSyncTree_,V,!0))}else h=!0,f="nodata",r=r.concat(ys(s.serverSyncTree_,c.currentWriteId,!0))}En(s.eventQueue_,t,r),r=[],h&&(e[a].status=2,(function(C){setTimeout(C,Math.floor(0))})(e[a].unwatcher),e[a].onComplete&&(f==="nodata"?n.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):n.push(()=>e[a].onComplete(new Error(f),!1,null))))}wl(s,s.transactionQueueTree_);for(let a=0;a<n.length;a++)Fr(n[a]);Mu(s,s.transactionQueueTree_)}function Ym(s,e){let t,n=s.transactionQueueTree_;for(t=oe(e);t!==null&&Lr(n)===void 0;)n=bu(n,t),e=De(e),t=oe(e);return n}function $m(s,e){const t=[];return Xm(s,e,t),t.sort((n,r)=>n.order-r.order),t}function Xm(s,e,t){const n=Lr(e);if(n)for(let r=0;r<n.length;r++)t.push(n[r]);yl(e,r=>{Xm(s,r,t)})}function wl(s,e){const t=Lr(e);if(t){let n=0;for(let r=0;r<t.length;r++)t[r].status!==2&&(t[n]=t[r],n++);t.length=n,Gm(e,t.length>0?t:void 0)}yl(e,n=>{wl(s,n)})}function Zm(s,e){const t=mo(Ym(s,e)),n=bu(s.transactionQueueTree_,e);return $S(n,r=>{_c(s,r)}),_c(s,n),Um(n,r=>{_c(s,r)}),t}function _c(s,e){const t=Lr(e);if(t){const n=[];let r=[],i=-1;for(let o=0;o<t.length;o++)t[o].status===3||(t[o].status===1?(H(i===o-1,"All SENT items should be at beginning of queue."),i=o,t[o].status=3,t[o].abortReason="set"):(H(t[o].status===0,"Unexpected transaction status in abort"),t[o].unwatcher(),r=r.concat(ys(s.serverSyncTree_,t[o].currentWriteId,!0)),t[o].onComplete&&n.push(t[o].onComplete.bind(null,new Error("set"),!1,null))));i===-1?Gm(e,void 0):t.length=i+1,En(s.eventQueue_,mo(e),r);for(let o=0;o<n.length;o++)Fr(n[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function DP(s){let e="";const t=s.split("/");for(let n=0;n<t.length;n++)if(t[n].length>0){let r=t[n];try{r=decodeURIComponent(r.replace(/\+/g," "))}catch{}e+="/"+r}return e}function yP(s){const e={};s.charAt(0)==="?"&&(s=s.substring(1));for(const t of s.split("&")){if(t.length===0)continue;const n=t.split("=");n.length===2?e[decodeURIComponent(n[0])]=decodeURIComponent(n[1]):gt(`Invalid query segment '${t}' in query '${s}'`)}return e}const lC=function(s,e){const t=IP(s),n=t.namespace;t.domain==="firebase.com"&&_n(t.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!n||n==="undefined")&&t.domain!=="localhost"&&_n("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),t.secure||LA();const r=t.scheme==="ws"||t.scheme==="wss";return{repoInfo:new nm(t.host,t.secure,n,r,e,"",n!==t.subdomain),path:new _e(t.pathString)}},IP=function(s){let e="",t="",n="",r="",i="",o=!0,a="https",c=443;if(typeof s=="string"){let B=s.indexOf("//");B>=0&&(a=s.substring(0,B-1),s=s.substring(B+2));let h=s.indexOf("/");h===-1&&(h=s.length);let f=s.indexOf("?");f===-1&&(f=s.length),e=s.substring(0,Math.min(h,f)),h<f&&(r=DP(s.substring(h,f)));const C=yP(s.substring(Math.min(s.length,f)));B=e.indexOf(":"),B>=0?(o=a==="https"||a==="wss",c=parseInt(e.substring(B+1),10)):B=e.length;const _=e.slice(0,B);if(_.toLowerCase()==="localhost")t="localhost";else if(_.split(".").length<=2)t=_;else{const I=e.indexOf(".");n=e.substring(0,I).toLowerCase(),t=e.substring(I+1),i=n}"ns"in C&&(i=C.ns)}return{host:e,port:c,domain:t,subdomain:n,secure:o,scheme:a,pathString:r,namespace:i}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wP{constructor(e,t,n,r){this.eventType=e,this.eventRegistration=t,this.snapshot=n,this.prevName=r}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+We(this.snapshot.exportVal())}}class TP{constructor(e,t,n){this.eventRegistration=e,this.error=t,this.path=n}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vP{constructor(e,t){this.snapshotCallback=e,this.cancelCallback=t}onValue(e,t){this.snapshotCallback.call(null,e,t)}onCancel(e){return H(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vu{constructor(e,t,n,r){this._repo=e,this._path=t,this._queryParams=n,this._orderByCalled=r}get key(){return ue(this._path)?null:um(this._path)}get ref(){return new is(this._repo,this._path)}get _queryIdentifier(){const e=jd(this._queryParams),t=lu(e);return t==="{}"?"default":t}get _queryObject(){return jd(this._queryParams)}isEqual(e){if(e=Ye(e),!(e instanceof Vu))return!1;const t=this._repo===e._repo,n=hu(this._path,e._path),r=this._queryIdentifier===e._queryIdentifier;return t&&n&&r}toJSON(){return this.toString()}toString(){return this._repo.toString()+mR(this._path)}}class is extends Vu{constructor(e,t){super(e,t,new pu,!1)}get parent(){const e=fm(this._path);return e===null?null:new is(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class Ha{constructor(e,t,n){this._node=e,this.ref=t,this._index=n}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const t=new _e(e),n=lB(this.ref,e);return new Ha(this._node.getChild(t),n,Pe)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(n,r)=>e(new Ha(r,lB(this.ref,n),Pe)))}hasChild(e){const t=new _e(e);return!this._node.getChild(t).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function rb(s,e){return s=Ye(s),s._checkNotDeleted("ref"),lB(s._root,e)}function lB(s,e){return s=Ye(s),oe(s._path)===null?sP("child","path",e):jm("child","path",e),new is(s._repo,Ge(s._path,e))}function ib(s,e){s=Ye(s),rP("set",s._path),nP("set",e,s._path);const t=new eo;return dP(s._repo,s._path,e,null,t.wrapCallback(()=>{})),t.promise}class Gu{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,t){const n=t._queryParams.getIndex();return new wP("value",this,new Ha(e.snapshotNode,new is(t._repo,t._path),n))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new TP(this,e,t):null}matches(e){return e instanceof Gu?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function AP(s,e,t,n,r){let i;if(typeof n=="object"&&(i=void 0,r=n),typeof n=="function"&&(i=n),r&&r.onlyOnce){const c=t,B=(h,f)=>{aC(s._repo,s,a),c(h,f)};B.userCallback=t.userCallback,B.context=t.context,t=B}const o=new vP(t,i||void 0),a=new Gu(o);return pP(s._repo,s,a),()=>aC(s._repo,s,a)}function ob(s,e,t,n){return AP(s,"value",e,t,n)}RS(is);FS(is);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RP="FIREBASE_DATABASE_EMULATOR_HOST",cB={};let SP=!1;function PP(s,e,t,n){const r=e.lastIndexOf(":"),i=e.substring(0,r),o=Ls(i);s.repoInfo_=new nm(e,o,s.repoInfo_.namespace,s.repoInfo_.webSocketOnly,s.repoInfo_.nodeAdmin,s.repoInfo_.persistenceKey,s.repoInfo_.includeNamespaceInQueryParams,!0,t),n&&(s.authTokenProvider_=n)}function NP(s,e,t,n,r){let i=n||s.options.databaseURL;i===void 0&&(s.options.projectId||_n("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),nt("Using default host for project ",s.options.projectId),i=`${s.options.projectId}-default-rtdb.firebaseio.com`);let o=lC(i,r),a=o.repoInfo,c;typeof process<"u"&&Ad&&(c=Ad[RP]),c?(i=`http://${c}?ns=${a.namespace}`,o=lC(i,r),a=o.repoInfo):o.repoInfo.secure;const B=new KA(s.name,s.options,e);iP("Invalid Firebase Database URL",o),ue(o.path)||_n("Database URL must point to the root of a Firebase Database (not including a child path).");const h=OP(a,s,B,new jA(s,t));return new FP(h,s)}function bP(s,e){const t=cB[e];(!t||t[s.key]!==s)&&_n(`Database ${e}(${s.repoInfo_}) has already been deleted.`),gP(s),delete t[s.key]}function OP(s,e,t,n){let r=cB[e.name];r||(r={},cB[e.name]=r);let i=r[s.toURLString()];return i&&_n("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),i=new BP(s,SP,t,n),r[s.toURLString()]=i,i}class FP{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(uP(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new is(this._repo,Ce())),this._rootInternal}_delete(){return this._rootInternal!==null&&(bP(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&_n("Cannot call "+e+" on a deleted database.")}}function ab(s=gB(),e){const t=$a(s,"database").getImmediate({identifier:e});if(!t._instanceStarted){const n=LC("database");n&&LP(t,...n)}return t}function LP(s,e,t,n={}){s=Ye(s),s._checkNotDeleted("useEmulator");const r=`${e}:${t}`,i=s._repoInternal;if(s._instanceStarted){if(r===s._repoInternal.repoInfo_.host&&jn(n,i.repoInfo_.emulatorOptions))return;_n("connectDatabaseEmulator() cannot initialize or alter the emulator configuration after the database instance has started.")}let o;if(i.repoInfo_.nodeAdmin)n.mockUserToken&&_n('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),o=new ra(ra.OWNER);else if(n.mockUserToken){const a=typeof n.mockUserToken=="string"?n.mockUserToken:MC(n.mockUserToken,s.app.options.projectId);o=new ra(a)}Ls(e)&&CB(e),PP(i,r,n,o)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kP(s){SA(ks),As(new Kn("database",(e,{instanceIdentifier:t})=>{const n=e.getProvider("app").getImmediate(),r=e.getProvider("auth-internal"),i=e.getProvider("app-check-internal");return NP(n,r,i,t)},"PUBLIC").setMultipleInstances(!0)),Qt(Rd,Sd,s),Qt(Rd,Sd,"esm2020")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */dn.prototype.simpleListen=function(s,e){this.sendRequest("q",{p:s},e)};dn.prototype.echo=function(s,e){this.sendRequest("echo",{d:s},e)};kP();function e_(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const xP=e_,t_=new to("auth","Firebase",e_());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ua=new Ya("@firebase/auth");function n_(s,...e){Ua.logLevel<=ce.WARN&&Ua.warn(`Auth (${ks}): ${s}`,...e)}function ia(s,...e){Ua.logLevel<=ce.ERROR&&Ua.error(`Auth (${ks}): ${s}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jt(s,...e){throw Hu(s,...e)}function Zt(s,...e){return Hu(s,...e)}function s_(s,e,t){const n={...xP(),[e]:t};return new to("auth","Firebase",n).create(e,{appName:s.name})}function Cn(s){return s_(s,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Hu(s,...e){if(typeof s!="string"){const t=e[0],n=[...e.slice(1)];return n[0]&&(n[0].appName=s.name),s._errorFactory.create(t,...n)}return t_.create(s,...e)}function ee(s,e,...t){if(!s)throw Hu(e,...t)}function Bn(s){const e="INTERNAL ASSERTION FAILED: "+s;throw ia(e),new Error(e)}function Dn(s,e){s||Bn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function BB(){return typeof self<"u"&&self.location?.href||""}function MP(){return cC()==="http:"||cC()==="https:"}function cC(){return typeof self<"u"&&self.location?.protocol||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function VP(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(MP()||wE()||"connection"in navigator)?navigator.onLine:!0}function GP(){if(typeof navigator>"u")return null;const s=navigator;return s.languages&&s.languages[0]||s.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _o{constructor(e,t){this.shortDelay=e,this.longDelay=t,Dn(t>e,"Short delay should be less than long delay!"),this.isMobile=fB()||VC()}get(){return VP()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uu(s,e){Dn(s.emulator,"Emulator should always be set here");const{url:t}=s.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r_{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Bn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Bn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Bn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HP={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UP=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],JP=new _o(3e4,6e4);function os(s,e){return s.tenantId&&!e.tenantId?{...e,tenantId:s.tenantId}:e}async function as(s,e,t,n,r={}){return i_(s,r,async()=>{let i={},o={};n&&(e==="GET"?o=n:i={body:JSON.stringify(n)});const a=Tr({...o,key:s.config.apiKey}).slice(1),c=await s._getAdditionalHeaders();c["Content-Type"]="application/json",s.languageCode&&(c["X-Firebase-Locale"]=s.languageCode);const B={method:e,headers:c,...i};return IE()||(B.referrerPolicy="strict-origin-when-cross-origin"),s.emulatorConfig&&Ls(s.emulatorConfig.host)&&(B.credentials="include"),r_.fetch()(await o_(s,s.config.apiHost,t,a),B)})}async function i_(s,e,t){s._canInitEmulator=!1;const n={...HP,...e};try{const r=new jP(s),i=await Promise.race([t(),r.promise]);r.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw $o(s,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,B]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw $o(s,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw $o(s,"email-already-in-use",o);if(c==="USER_DISABLED")throw $o(s,"user-disabled",o);const h=n[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(B)throw s_(s,h,B);Jt(s,h)}}catch(r){if(r instanceof yn)throw r;Jt(s,"network-request-failed",{message:String(r)})}}async function Eo(s,e,t,n,r={}){const i=await as(s,e,t,n,r);return"mfaPendingCredential"in i&&Jt(s,"multi-factor-auth-required",{_serverResponse:i}),i}async function o_(s,e,t,n){const r=`${e}${t}?${n}`,i=s,o=i.config.emulator?Uu(s.config,r):`${s.config.apiScheme}://${r}`;return UP.includes(t)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(o).toString():o}function qP(s){switch(s){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class jP{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,n)=>{this.timer=setTimeout(()=>n(Zt(this.auth,"network-request-failed")),JP.get())})}}function $o(s,e,t){const n={appName:s.name};t.email&&(n.email=t.email),t.phoneNumber&&(n.phoneNumber=t.phoneNumber);const r=Zt(s,e,n);return r.customData._tokenResponse=t,r}function BC(s){return s!==void 0&&s.enterprise!==void 0}class KP{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return qP(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function WP(s,e){return as(s,"GET","/v2/recaptchaConfig",os(s,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zP(s,e){return as(s,"POST","/v1/accounts:delete",e)}async function Ja(s,e){return as(s,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wi(s){if(s)try{const e=new Date(Number(s));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function QP(s,e=!1){const t=Ye(s),n=await t.getIdToken(e),r=Ju(n);ee(r&&r.exp&&r.auth_time&&r.iat,t.auth,"internal-error");const i=typeof r.firebase=="object"?r.firebase:void 0,o=i?.sign_in_provider;return{claims:r,token:n,authTime:wi(Ec(r.auth_time)),issuedAtTime:wi(Ec(r.iat)),expirationTime:wi(Ec(r.exp)),signInProvider:o||null,signInSecondFactor:i?.sign_in_second_factor||null}}function Ec(s){return Number(s)*1e3}function Ju(s){const[e,t,n]=s.split(".");if(e===void 0||t===void 0||n===void 0)return ia("JWT malformed, contained fewer than 3 sections"),null;try{const r=Ba(t);return r?JSON.parse(r):(ia("Failed to decode base64 JWT payload"),null)}catch(r){return ia("Caught error parsing JWT payload as JSON",r?.toString()),null}}function uC(s){const e=Ju(s);return ee(e,"internal-error"),ee(typeof e.exp<"u","internal-error"),ee(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Xi(s,e,t=!1){if(t)return e;try{return await e}catch(n){throw n instanceof yn&&YP(n)&&s.auth.currentUser===s&&await s.auth.signOut(),n}}function YP({code:s}){return s==="auth/user-disabled"||s==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $P{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const t=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),t}else{this.errorBackoff=3e4;const n=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,n)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uB{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=wi(this.lastLoginAt),this.creationTime=wi(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qa(s){const e=s.auth,t=await s.getIdToken(),n=await Xi(s,Ja(e,{idToken:t}));ee(n?.users.length,e,"internal-error");const r=n.users[0];s._notifyReloadListener(r);const i=r.providerUserInfo?.length?a_(r.providerUserInfo):[],o=ZP(s.providerData,i),a=s.isAnonymous,c=!(s.email&&r.passwordHash)&&!o?.length,B=a?c:!1,h={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:o,metadata:new uB(r.createdAt,r.lastLoginAt),isAnonymous:B};Object.assign(s,h)}async function XP(s){const e=Ye(s);await qa(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function ZP(s,e){return[...s.filter(n=>!e.some(r=>r.providerId===n.providerId)),...e]}function a_(s){return s.map(({providerId:e,...t})=>({providerId:e,uid:t.rawId||"",displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function eN(s,e){const t=await i_(s,{},async()=>{const n=Tr({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:r,apiKey:i}=s.config,o=await o_(s,r,"/v1/token",`key=${i}`),a=await s._getAdditionalHeaders();a["Content-Type"]="application/x-www-form-urlencoded";const c={method:"POST",headers:a,body:n};return s.emulatorConfig&&Ls(s.emulatorConfig.host)&&(c.credentials="include"),r_.fetch()(o,c)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function tN(s,e){return as(s,"POST","/v2/accounts:revokeToken",os(s,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Br{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ee(e.idToken,"internal-error"),ee(typeof e.idToken<"u","internal-error"),ee(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):uC(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){ee(e.length!==0,"internal-error");const t=uC(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(ee(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:r,expiresIn:i}=await eN(e,t);this.updateTokensAndExpiration(n,r,Number(i))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+n*1e3}static fromJSON(e,t){const{refreshToken:n,accessToken:r,expirationTime:i}=t,o=new Br;return n&&(ee(typeof n=="string","internal-error",{appName:e}),o.refreshToken=n),r&&(ee(typeof r=="string","internal-error",{appName:e}),o.accessToken=r),i&&(ee(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Br,this.toJSON())}_performRefresh(){return Bn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nn(s,e){ee(typeof s=="string"||typeof s>"u","internal-error",{appName:e})}class Gt{constructor({uid:e,auth:t,stsTokenManager:n,...r}){this.providerId="firebase",this.proactiveRefresh=new $P(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=t,this.stsTokenManager=n,this.accessToken=n.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new uB(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const t=await Xi(this,this.stsTokenManager.getToken(this.auth,e));return ee(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return QP(this,e)}reload(){return XP(this)}_assign(e){this!==e&&(ee(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>({...t})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Gt({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return t.metadata._copy(this.metadata),t}_onReload(e){ee(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await qa(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(At(this.auth.app))return Promise.reject(Cn(this.auth));const e=await this.getIdToken();return await Xi(this,zP(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){const n=t.displayName??void 0,r=t.email??void 0,i=t.phoneNumber??void 0,o=t.photoURL??void 0,a=t.tenantId??void 0,c=t._redirectEventId??void 0,B=t.createdAt??void 0,h=t.lastLoginAt??void 0,{uid:f,emailVerified:C,isAnonymous:_,providerData:I,stsTokenManager:O}=t;ee(f&&O,e,"internal-error");const V=Br.fromJSON(this.name,O);ee(typeof f=="string",e,"internal-error"),Nn(n,e.name),Nn(r,e.name),ee(typeof C=="boolean",e,"internal-error"),ee(typeof _=="boolean",e,"internal-error"),Nn(i,e.name),Nn(o,e.name),Nn(a,e.name),Nn(c,e.name),Nn(B,e.name),Nn(h,e.name);const q=new Gt({uid:f,auth:e,email:r,emailVerified:C,displayName:n,isAnonymous:_,photoURL:o,phoneNumber:i,tenantId:a,stsTokenManager:V,createdAt:B,lastLoginAt:h});return I&&Array.isArray(I)&&(q.providerData=I.map(re=>({...re}))),c&&(q._redirectEventId=c),q}static async _fromIdTokenResponse(e,t,n=!1){const r=new Br;r.updateFromServerResponse(t);const i=new Gt({uid:t.localId,auth:e,stsTokenManager:r,isAnonymous:n});return await qa(i),i}static async _fromGetAccountInfoResponse(e,t,n){const r=t.users[0];ee(r.localId!==void 0,"internal-error");const i=r.providerUserInfo!==void 0?a_(r.providerUserInfo):[],o=!(r.email&&r.passwordHash)&&!i?.length,a=new Br;a.updateFromIdToken(n);const c=new Gt({uid:r.localId,auth:e,stsTokenManager:a,isAnonymous:o}),B={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:i,metadata:new uB(r.createdAt,r.lastLoginAt),isAnonymous:!(r.email&&r.passwordHash)&&!i?.length};return Object.assign(c,B),c}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hC=new Map;function un(s){Dn(s instanceof Function,"Expected a class definition");let e=hC.get(s);return e?(Dn(e instanceof s,"Instance stored in cache mismatched with class"),e):(e=new s,hC.set(s,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l_{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}l_.type="NONE";const fC=l_;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oa(s,e,t){return`firebase:${s}:${e}:${t}`}class ur{constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:r,name:i}=this.auth;this.fullUserKey=oa(this.userKey,r.apiKey,i),this.fullPersistenceKey=oa("persistence",r.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await Ja(this.auth,{idToken:e}).catch(()=>{});return t?Gt._fromGetAccountInfoResponse(this.auth,t,e):null}return Gt._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new ur(un(fC),e,n);const r=(await Promise.all(t.map(async B=>{if(await B._isAvailable())return B}))).filter(B=>B);let i=r[0]||un(fC);const o=oa(n,e.config.apiKey,e.name);let a=null;for(const B of t)try{const h=await B._get(o);if(h){let f;if(typeof h=="string"){const C=await Ja(e,{idToken:h}).catch(()=>{});if(!C)break;f=await Gt._fromGetAccountInfoResponse(e,C,h)}else f=Gt._fromJSON(e,h);B!==i&&(a=f),i=B;break}}catch{}const c=r.filter(B=>B._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new ur(i,e,n):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(t.map(async B=>{if(B!==i)try{await B._remove(o)}catch{}})),new ur(i,e,n))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dC(s){const e=s.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(h_(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(c_(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(d_(e))return"Blackberry";if(C_(e))return"Webos";if(B_(e))return"Safari";if((e.includes("chrome/")||u_(e))&&!e.includes("edge/"))return"Chrome";if(f_(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=s.match(t);if(n?.length===2)return n[1]}return"Other"}function c_(s=st()){return/firefox\//i.test(s)}function B_(s=st()){const e=s.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function u_(s=st()){return/crios\//i.test(s)}function h_(s=st()){return/iemobile/i.test(s)}function f_(s=st()){return/android/i.test(s)}function d_(s=st()){return/blackberry/i.test(s)}function C_(s=st()){return/webos/i.test(s)}function qu(s=st()){return/iphone|ipad|ipod/i.test(s)||/macintosh/i.test(s)&&/mobile/i.test(s)}function nN(s=st()){return qu(s)&&!!window.navigator?.standalone}function sN(){return TE()&&document.documentMode===10}function p_(s=st()){return qu(s)||f_(s)||C_(s)||d_(s)||/windows phone/i.test(s)||h_(s)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function g_(s,e=[]){let t;switch(s){case"Browser":t=dC(st());break;case"Worker":t=`${dC(st())}-${s}`;break;default:t=s}const n=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${ks}/${n}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rN{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const n=i=>new Promise((o,a)=>{try{const c=e(i);o(c)}catch(c){a(c)}});n.onAbort=t,this.queue.push(n);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const n of this.queue)await n(e),n.onAbort&&t.push(n.onAbort)}catch(n){t.reverse();for(const r of t)try{r()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:n?.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function iN(s,e={}){return as(s,"GET","/v2/passwordPolicy",os(s,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oN=6;class aN{constructor(e){const t=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=t.minPasswordLength??oN,t.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=t.maxPasswordLength),t.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=t.containsLowercaseCharacter),t.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=t.containsUppercaseCharacter),t.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=t.containsNumericCharacter),t.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=t.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=e.allowedNonAlphanumericCharacters?.join("")??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const t={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,t),this.validatePasswordCharacterOptions(e,t),t.isValid&&(t.isValid=t.meetsMinPasswordLength??!0),t.isValid&&(t.isValid=t.meetsMaxPasswordLength??!0),t.isValid&&(t.isValid=t.containsLowercaseLetter??!0),t.isValid&&(t.isValid=t.containsUppercaseLetter??!0),t.isValid&&(t.isValid=t.containsNumericCharacter??!0),t.isValid&&(t.isValid=t.containsNonAlphanumericCharacter??!0),t}validatePasswordLengthOptions(e,t){const n=this.customStrengthOptions.minPasswordLength,r=this.customStrengthOptions.maxPasswordLength;n&&(t.meetsMinPasswordLength=e.length>=n),r&&(t.meetsMaxPasswordLength=e.length<=r)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let n;for(let r=0;r<e.length;r++)n=e.charAt(r),this.updatePasswordCharacterOptionsStatuses(t,n>="a"&&n<="z",n>="A"&&n<="Z",n>="0"&&n<="9",this.allowedNonAlphanumericCharacters.includes(n))}updatePasswordCharacterOptionsStatuses(e,t,n,r,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=n)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=r)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lN{constructor(e,t,n,r){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new CC(this),this.idTokenSubscription=new CC(this),this.beforeStateQueue=new rN(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=t_,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=un(t)),this._initializationPromise=this.queue(async()=>{if(!this._deleted&&(this.persistenceManager=await ur.create(this,e),this._resolvePersistenceManagerAvailable?.(),!this._deleted)){if(this._popupRedirectResolver?._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=this.currentUser?.uid||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Ja(this,{idToken:e}),n=await Gt._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(n)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){if(At(this.app)){const i=this.app.settings.authIdToken;return i?new Promise(o=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(i).then(o,o))}):this.directlySetCurrentUser(null)}const t=await this.assertedPersistence.getCurrentUser();let n=t,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const i=this.redirectUser?._redirectEventId,o=n?._redirectEventId,a=await this.tryRedirectSignIn(e);(!i||i===o)&&a?.user&&(n=a.user,r=!0)}if(!n)return this.directlySetCurrentUser(null);if(!n._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(n)}catch(i){n=t,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(i))}return n?this.reloadAndSetCurrentUserOrClear(n):this.directlySetCurrentUser(null)}return ee(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===n._redirectEventId?this.directlySetCurrentUser(n):this.reloadAndSetCurrentUserOrClear(n)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await qa(e)}catch(t){if(t?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=GP()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(At(this.app))return Promise.reject(Cn(this));const t=e?Ye(e):null;return t&&ee(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&ee(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return At(this.app)?Promise.reject(Cn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return At(this.app)?Promise.reject(Cn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(un(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await iN(this),t=new aN(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new to("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const n=this.onAuthStateChanged(()=>{n(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),n={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(n.tenantId=this.tenantId),await tN(this,n)}}toJSON(){return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:this._currentUser?.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return e===null?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&un(e)||this._popupRedirectResolver;ee(t,this,"argument-error"),this.redirectPersistenceManager=await ur.create(this,[un(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){return this._isInitialized&&await this.queue(async()=>{}),this._currentUser?._redirectEventId===e?this._currentUser:this.redirectUser?._redirectEventId===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=this.currentUser?.uid??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,r){if(this._deleted)return()=>{};const i=typeof t=="function"?t:t.next.bind(t);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(ee(a,this,"internal-error"),a.then(()=>{o||i(this.currentUser)}),typeof t=="function"){const c=e.addObserver(t,n,r);return()=>{o=!0,c()}}else{const c=e.addObserver(t);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ee(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=g_(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const t=await this.heartbeatServiceProvider.getImmediate({optional:!0})?.getHeartbeatsHeader();t&&(e["X-Firebase-Client"]=t);const n=await this._getAppCheckToken();return n&&(e["X-Firebase-AppCheck"]=n),e}async _getAppCheckToken(){if(At(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await this.appCheckServiceProvider.getImmediate({optional:!0})?.getToken();return e?.error&&n_(`Error while retrieving App Check token: ${e.error}`),e?.token}}function Js(s){return Ye(s)}class CC{constructor(e){this.auth=e,this.observer=null,this.addObserver=LE(t=>this.observer=t)}get next(){return ee(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Tl={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function cN(s){Tl=s}function m_(s){return Tl.loadJS(s)}function BN(){return Tl.recaptchaEnterpriseScript}function uN(){return Tl.gapiScript}function hN(s){return`__${s}${Math.floor(Math.random()*1e6)}`}class fN{constructor(){this.enterprise=new dN}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class dN{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CN="recaptcha-enterprise",__="NO_RECAPTCHA",pC="onFirebaseAuthREInstanceReady";class Fn{constructor(e){this.type=CN,this.auth=Js(e)}async verify(e="verify",t=!1){async function n(i){if(!t){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,a)=>{WP(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const B=new KP(c);return i.tenantId==null?i._agentRecaptchaConfig=B:i._tenantRecaptchaConfigs[i.tenantId]=B,o(B.siteKey)}}).catch(c=>{a(c)})})}function r(i,o,a){const c=window.grecaptcha;BC(c)?c.enterprise.ready(()=>{c.enterprise.execute(i,{action:e}).then(B=>{o(B)}).catch(()=>{o(__)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new fN().execute("siteKey",{action:"verify"}):new Promise((i,o)=>{n(this.auth).then(async a=>{if(!t&&BC(window.grecaptcha)&&Fn.scriptInjectionDeferred)await Fn.scriptInjectionDeferred.promise,r(a,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let c=BN();c.length!==0&&(c+=a+`&onload=${pC}`),Fn.scriptInjectionDeferred=new eo,window[pC]=()=>{Fn.scriptInjectionDeferred?.resolve()},m_(c).then(()=>Fn.scriptInjectionDeferred?.promise).then(()=>{r(a,i,o)}).catch(B=>{o(B)})}}).catch(a=>{o(a)})})}}Fn.scriptInjectionDeferred=null;async function gC(s,e,t,n=!1,r=!1){const i=new Fn(s);let o;if(r)o=__;else try{o=await i.verify(t)}catch{o=await i.verify(t,!0)}const a={...e};if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in a){const c=a.phoneEnrollmentInfo.phoneNumber,B=a.phoneEnrollmentInfo.recaptchaToken;Object.assign(a,{phoneEnrollmentInfo:{phoneNumber:c,recaptchaToken:B,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in a){const c=a.phoneSignInInfo.recaptchaToken;Object.assign(a,{phoneSignInInfo:{recaptchaToken:c,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return a}return n?Object.assign(a,{captchaResp:o}):Object.assign(a,{captchaResponse:o}),Object.assign(a,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(a,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),a}async function mC(s,e,t,n,r){if(s._getRecaptchaConfig()?.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const i=await gC(s,e,t,t==="getOobCode");return n(s,i)}else return n(s,e).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await gC(s,e,t,t==="getOobCode");return n(s,o)}else return Promise.reject(i)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pN(s,e){const t=$a(s,"auth");if(t.isInitialized()){const r=t.getImmediate(),i=t.getOptions();if(jn(i,e??{}))return r;Jt(r,"already-initialized")}return t.initialize({options:e})}function gN(s,e){const t=e?.persistence||[],n=(Array.isArray(t)?t:[t]).map(un);e?.errorMap&&s._updateErrorMap(e.errorMap),s._initializeWithPersistence(n,e?.popupRedirectResolver)}function mN(s,e,t){const n=Js(s);ee(/^https?:\/\//.test(e),n,"invalid-emulator-scheme");const r=!1,i=E_(e),{host:o,port:a}=_N(e),c=a===null?"":`:${a}`,B={url:`${i}//${o}${c}/`},h=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:r})});if(!n._canInitEmulator){ee(n.config.emulator&&n.emulatorConfig,n,"emulator-config-failed"),ee(jn(B,n.config.emulator)&&jn(h,n.emulatorConfig),n,"emulator-config-failed");return}n.config.emulator=B,n.emulatorConfig=h,n.settings.appVerificationDisabledForTesting=!0,Ls(o)?CB(`${i}//${o}${c}`):EN()}function E_(s){const e=s.indexOf(":");return e<0?"":s.substr(0,e+1)}function _N(s){const e=E_(s),t=/(\/\/)?([^?#/]+)/.exec(s.substr(e.length));if(!t)return{host:"",port:null};const n=t[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(n);if(r){const i=r[1];return{host:i,port:_C(n.substr(i.length+1))}}else{const[i,o]=n.split(":");return{host:i,port:_C(o)}}}function _C(s){if(!s)return null;const e=Number(s);return isNaN(e)?null:e}function EN(){function s(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",s):s())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ju{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Bn("not implemented")}_getIdTokenResponse(e){return Bn("not implemented")}_linkToIdToken(e,t){return Bn("not implemented")}_getReauthenticationResolver(e){return Bn("not implemented")}}async function DN(s,e){return as(s,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yN(s,e){return Eo(s,"POST","/v1/accounts:signInWithPassword",os(s,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function IN(s,e){return Eo(s,"POST","/v1/accounts:signInWithEmailLink",os(s,e))}async function wN(s,e){return Eo(s,"POST","/v1/accounts:signInWithEmailLink",os(s,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zi extends ju{constructor(e,t,n,r=null){super("password",n),this._email=e,this._password=t,this._tenantId=r}static _fromEmailAndPassword(e,t){return new Zi(e,t,"password")}static _fromEmailAndCode(e,t,n=null){return new Zi(e,t,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t?.email&&t?.password){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return mC(e,t,"signInWithPassword",yN);case"emailLink":return IN(e,{email:this._email,oobCode:this._password});default:Jt(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const n={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return mC(e,n,"signUpPassword",DN);case"emailLink":return wN(e,{idToken:t,email:this._email,oobCode:this._password});default:Jt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hr(s,e){return Eo(s,"POST","/v1/accounts:signInWithIdp",os(s,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TN="http://localhost";class Fs extends ju{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Fs(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Jt("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:n,signInMethod:r,...i}=t;if(!n||!r)return null;const o=new Fs(n,r);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return hr(e,t)}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,hr(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,hr(e,t)}buildRequest(){const e={requestUri:TN,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Tr(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vN(s){switch(s){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function AN(s){const e=ii(oi(s)).link,t=e?ii(oi(e)).deep_link_id:null,n=ii(oi(s)).deep_link_id;return(n?ii(oi(n)).link:null)||n||t||e||s}class Ku{constructor(e){const t=ii(oi(e)),n=t.apiKey??null,r=t.oobCode??null,i=vN(t.mode??null);ee(n&&r&&i,"argument-error"),this.apiKey=n,this.operation=i,this.code=r,this.continueUrl=t.continueUrl??null,this.languageCode=t.lang??null,this.tenantId=t.tenantId??null}static parseLink(e){const t=AN(e);try{return new Ku(t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kr{constructor(){this.providerId=kr.PROVIDER_ID}static credential(e,t){return Zi._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const n=Ku.parseLink(t);return ee(n,"argument-error"),Zi._fromEmailAndCode(e,n.code,n.tenantId)}}kr.PROVIDER_ID="password";kr.EMAIL_PASSWORD_SIGN_IN_METHOD="password";kr.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D_{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Do extends D_{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ln extends Do{constructor(){super("facebook.com")}static credential(e){return Fs._fromParams({providerId:Ln.PROVIDER_ID,signInMethod:Ln.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ln.credentialFromTaggedObject(e)}static credentialFromError(e){return Ln.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ln.credential(e.oauthAccessToken)}catch{return null}}}Ln.FACEBOOK_SIGN_IN_METHOD="facebook.com";Ln.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kn extends Do{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Fs._fromParams({providerId:kn.PROVIDER_ID,signInMethod:kn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return kn.credentialFromTaggedObject(e)}static credentialFromError(e){return kn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return kn.credential(t,n)}catch{return null}}}kn.GOOGLE_SIGN_IN_METHOD="google.com";kn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xn extends Do{constructor(){super("github.com")}static credential(e){return Fs._fromParams({providerId:xn.PROVIDER_ID,signInMethod:xn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return xn.credentialFromTaggedObject(e)}static credentialFromError(e){return xn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return xn.credential(e.oauthAccessToken)}catch{return null}}}xn.GITHUB_SIGN_IN_METHOD="github.com";xn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mn extends Do{constructor(){super("twitter.com")}static credential(e,t){return Fs._fromParams({providerId:Mn.PROVIDER_ID,signInMethod:Mn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Mn.credentialFromTaggedObject(e)}static credentialFromError(e){return Mn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return Mn.credential(t,n)}catch{return null}}}Mn.TWITTER_SIGN_IN_METHOD="twitter.com";Mn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function RN(s,e){return Eo(s,"POST","/v1/accounts:signUp",os(s,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rs{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,n,r=!1){const i=await Gt._fromIdTokenResponse(e,n,r),o=EC(n);return new rs({user:i,providerId:o,_tokenResponse:n,operationType:t})}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const r=EC(n);return new rs({user:e,providerId:r,_tokenResponse:n,operationType:t})}}function EC(s){return s.providerId?s.providerId:"phoneNumber"in s?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lb(s){if(At(s.app))return Promise.reject(Cn(s));const e=Js(s);if(await e._initializationPromise,e.currentUser?.isAnonymous)return new rs({user:e.currentUser,providerId:null,operationType:"signIn"});const t=await RN(e,{returnSecureToken:!0}),n=await rs._fromIdTokenResponse(e,"signIn",t,!0);return await e._updateCurrentUser(n.user),n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ja extends yn{constructor(e,t,n,r){super(t.code,t.message),this.operationType=n,this.user=r,Object.setPrototypeOf(this,ja.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:t.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(e,t,n,r){return new ja(e,t,n,r)}}function y_(s,e,t,n){return(e==="reauthenticate"?t._getReauthenticationResolver(s):t._getIdTokenResponse(s)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?ja._fromErrorAndOperation(s,i,e,n):i})}async function SN(s,e,t=!1){const n=await Xi(s,e._linkToIdToken(s.auth,await s.getIdToken()),t);return rs._forOperation(s,"link",n)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function PN(s,e,t=!1){const{auth:n}=s;if(At(n.app))return Promise.reject(Cn(n));const r="reauthenticate";try{const i=await Xi(s,y_(n,r,e,s),t);ee(i.idToken,n,"internal-error");const o=Ju(i.idToken);ee(o,n,"internal-error");const{sub:a}=o;return ee(s.uid===a,n,"user-mismatch"),rs._forOperation(s,r,i)}catch(i){throw i?.code==="auth/user-not-found"&&Jt(n,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function I_(s,e,t=!1){if(At(s.app))return Promise.reject(Cn(s));const n="signIn",r=await y_(s,n,e),i=await rs._fromIdTokenResponse(s,n,r);return t||await s._updateCurrentUser(i.user),i}async function NN(s,e){return I_(Js(s),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bN(s){const e=Js(s);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}function cb(s,e,t){return At(s.app)?Promise.reject(Cn(s)):NN(Ye(s),kr.credential(e,t)).catch(async n=>{throw n.code==="auth/password-does-not-meet-requirements"&&bN(s),n})}function ON(s,e,t,n){return Ye(s).onIdTokenChanged(e,t,n)}function FN(s,e,t){return Ye(s).beforeAuthStateChanged(e,t)}const Ka="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w_{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Ka,"1"),this.storage.removeItem(Ka),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const LN=1e3,kN=10;class T_ extends w_{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=p_(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),r=this.localCache[t];n!==r&&e(t,r,n)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const n=e.key;t?this.detachListener():this.stopPolling();const r=()=>{const o=this.storage.getItem(n);!t&&this.localCache[n]===o||this.notifyListeners(n,o)},i=this.storage.getItem(n);sN()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,kN):r()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const r of Array.from(n))r(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)})},LN)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}T_.type="LOCAL";const xN=T_;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v_ extends w_{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}v_.type="SESSION";const A_=v_;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function MN(s){return Promise.all(s.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vl{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(r=>r.isListeningto(e));if(t)return t;const n=new vl(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:r,data:i}=t.data,o=this.handlersMap[r];if(!o?.size)return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:r});const a=Array.from(o).map(async B=>B(t.origin,i)),c=await MN(a);t.ports[0].postMessage({status:"done",eventId:n,eventType:r,response:c})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}vl.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wu(s="",e=10){let t="";for(let n=0;n<e;n++)t+=Math.floor(Math.random()*10);return s+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VN{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const r=typeof MessageChannel<"u"?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const B=Wu("",20);r.port1.start();const h=setTimeout(()=>{c(new Error("unsupported_event"))},n);o={messageChannel:r,onMessage(f){const C=f;if(C.data.eventId===B)switch(C.data.status){case"ack":clearTimeout(h),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(C.data.response);break;default:clearTimeout(h),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),r.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:B,data:t},[r.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function en(){return window}function GN(s){en().location.href=s}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function R_(){return typeof en().WorkerGlobalScope<"u"&&typeof en().importScripts=="function"}async function HN(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function UN(){return navigator?.serviceWorker?.controller||null}function JN(){return R_()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S_="firebaseLocalStorageDb",qN=1,Wa="firebaseLocalStorage",P_="fbase_key";class yo{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Al(s,e){return s.transaction([Wa],e?"readwrite":"readonly").objectStore(Wa)}function jN(){const s=indexedDB.deleteDatabase(S_);return new yo(s).toPromise()}function N_(){const s=indexedDB.open(S_,qN);return new Promise((e,t)=>{s.addEventListener("error",()=>{t(s.error)}),s.addEventListener("upgradeneeded",()=>{const n=s.result;try{n.createObjectStore(Wa,{keyPath:P_})}catch(r){t(r)}}),s.addEventListener("success",async()=>{const n=s.result;n.objectStoreNames.contains(Wa)?e(n):(n.close(),await jN(),e(await N_()))})})}async function DC(s,e,t){const n=Al(s,!0).put({[P_]:e,value:t});return new yo(n).toPromise()}async function KN(s,e){const t=Al(s,!1).get(e),n=await new yo(t).toPromise();return n===void 0?null:n.value}function yC(s,e){const t=Al(s,!0).delete(e);return new yo(t).toPromise()}const WN=800,zN=3;class b_{registerLifecycleListeners(){typeof window<"u"&&typeof window.addEventListener=="function"&&(window.addEventListener("pagehide",this.onPageHide),window.addEventListener("pageshow",this.onPageShow))}unregisterLifecycleListeners(){typeof window<"u"&&typeof window.removeEventListener=="function"&&(window.removeEventListener("pagehide",this.onPageHide),window.removeEventListener("pageshow",this.onPageShow))}constructor(){this.type="LOCAL",this.dbPromise=null,this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.isClosing=!1,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this.onPageHide=()=>{this.isClosing=!0,this.stopPolling(),this.dbPromise&&(this.dbPromise.then(e=>e.close()).catch(()=>{}),this.dbPromise=null)},this.onPageShow=()=>{this.isClosing&&(this.isClosing=!1,Object.keys(this.listeners).length>0&&this.startPolling())},this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){if(this.isClosing)throw new Error("Database is closing");return this.dbPromise?this.dbPromise:(this.dbPromise=N_(),this.dbPromise.catch(()=>{this.dbPromise=null}),this.dbPromise)}async _withRetries(e){let t=0;for(;;)try{const n=await this._openDb();return await e(n)}catch(n){if(this.isClosing||t++>zN)throw n;this.dbPromise&&((await this.dbPromise).close(),this.dbPromise=null)}}async initializeServiceWorkerMessaging(){return R_()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=vl._getInstance(JN()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){if(this.activeServiceWorker=await HN(),!this.activeServiceWorker)return;this.sender=new VN(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&e[0]?.fulfilled&&e[0]?.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||UN()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{return indexedDB?(await this._withRetries(async e=>{await DC(e,Ka,"1"),await yC(e,Ka)}),!0):!1}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(n=>DC(n,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(n=>KN(n,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>yC(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){if(this.isClosing)return[];try{const e=await this._withRetries(r=>{const i=Al(r,!1).getAll();return new yo(i).toPromise()});if(this.isClosing)return[];if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],n=new Set;if(e.length!==0)for(const{fbase_key:r,value:i}of e)n.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),t.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!n.has(r)&&(this.notifyListeners(r,null),t.push(r));return t}catch(e){return this.isClosing||n_(`Firebase Auth cross-tab polling failed with error: ${e}`),[]}}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const r of Array.from(n))r(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),WN)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.startPolling(),this.registerLifecycleListeners()),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.stopPolling(),this.unregisterLifecycleListeners())}}b_.type="LOCAL";const QN=b_;new _o(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function YN(s,e){return e?un(e):(ee(s._popupRedirectResolver,s,"argument-error"),s._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zu extends ju{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return hr(e,this._buildIdpRequest())}_linkToIdToken(e,t){return hr(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return hr(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function $N(s){return I_(s.auth,new zu(s),s.bypassAuthState)}function XN(s){const{auth:e,user:t}=s;return ee(t,e,"internal-error"),PN(t,new zu(s),s.bypassAuthState)}async function ZN(s){const{auth:e,user:t}=s;return ee(t,e,"internal-error"),SN(t,new zu(s),s.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O_{constructor(e,t,n,r,i=!1){this.auth=e,this.resolver=n,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(n){this.reject(n)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:r,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:t,sessionId:n,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(B){this.reject(B)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return $N;case"linkViaPopup":case"linkViaRedirect":return ZN;case"reauthViaPopup":case"reauthViaRedirect":return XN;default:Jt(this.auth,"internal-error")}}resolve(e){Dn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Dn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const e0=new _o(2e3,1e4);class sr extends O_{constructor(e,t,n,r,i){super(e,t,r,i),this.provider=n,this.authWindow=null,this.pollId=null,sr.currentPopupAction&&sr.currentPopupAction.cancel(),sr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ee(e,this.auth,"internal-error"),e}async onExecution(){Dn(this.filter.length===1,"Popup operations only handle one event");const e=Wu();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Zt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){return this.authWindow?.associatedEvent||null}cancel(){this.reject(Zt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,sr.currentPopupAction=null}pollUserCancellation(){const e=()=>{if(this.authWindow?.window?.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Zt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,e0.get())};e()}}sr.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const t0="pendingRedirect",aa=new Map;class n0 extends O_{constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}async execute(){let e=aa.get(this.auth._key());if(!e){try{const n=await s0(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(n)}catch(t){e=()=>Promise.reject(t)}aa.set(this.auth._key(),e)}return this.bypassAuthState||aa.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function s0(s,e){const t=o0(e),n=i0(s);if(!await n._isAvailable())return!1;const r=await n._get(t)==="true";return await n._remove(t),r}function r0(s,e){aa.set(s._key(),e)}function i0(s){return un(s._redirectPersistence)}function o0(s){return oa(t0,s.config.apiKey,s.name)}async function a0(s,e,t=!1){if(At(s.app))return Promise.reject(Cn(s));const n=Js(s),r=YN(n,e),o=await new n0(n,r,t).execute();return o&&!t&&(delete o.user._redirectEventId,await n._persistUserIfCurrent(o.user),await n._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const l0=600*1e3;class c0{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!B0(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){if(e.error&&!F_(e)){const n=e.error.code?.split("auth/")[1]||"internal-error";t.onError(Zt(this.auth,n))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=l0&&this.cachedEventUids.clear(),this.cachedEventUids.has(IC(e))}saveEventToCache(e){this.cachedEventUids.add(IC(e)),this.lastProcessedEventTime=Date.now()}}function IC(s){return[s.type,s.eventId,s.sessionId,s.tenantId].filter(e=>e).join("-")}function F_({type:s,error:e}){return s==="unknown"&&e?.code==="auth/no-auth-event"}function B0(s){switch(s.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return F_(s);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function u0(s,e={}){return as(s,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const h0=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,f0=/^https?/;async function d0(s){if(s.config.emulator)return;const{authorizedDomains:e}=await u0(s);for(const t of e)try{if(C0(t))return}catch{}Jt(s,"unauthorized-domain")}function C0(s){const e=BB(),{protocol:t,hostname:n}=new URL(e);if(s.startsWith("chrome-extension://")){const o=new URL(s);return o.hostname===""&&n===""?t==="chrome-extension:"&&s.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&o.hostname===n}if(!f0.test(t))return!1;if(h0.test(s))return n===s;const r=s.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(n)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const p0=new _o(3e4,6e4);function wC(){const s=en().___jsl;if(s?.H){for(const e of Object.keys(s.H))if(s.H[e].r=s.H[e].r||[],s.H[e].L=s.H[e].L||[],s.H[e].r=[...s.H[e].L],s.CP)for(let t=0;t<s.CP.length;t++)s.CP[t]=null}}function g0(s){return new Promise((e,t)=>{function n(){wC(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{wC(),t(Zt(s,"network-request-failed"))},timeout:p0.get()})}if(en().gapi?.iframes?.Iframe)e(gapi.iframes.getContext());else if(en().gapi?.load)n();else{const r=hN("iframefcb");return en()[r]=()=>{gapi.load?n():t(Zt(s,"network-request-failed"))},m_(`${uN()}?onload=${r}`).catch(i=>t(i))}}).catch(e=>{throw la=null,e})}let la=null;function m0(s){return la=la||g0(s),la}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _0=new _o(5e3,15e3),E0="__/auth/iframe",D0="emulator/auth/iframe",y0={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},I0=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function w0(s){const e=s.config;ee(e.authDomain,s,"auth-domain-config-required");const t=e.emulator?Uu(e,D0):`https://${s.config.authDomain}/${E0}`,n={apiKey:e.apiKey,appName:s.name,v:ks},r=I0.get(s.config.apiHost);r&&(n.eid=r);const i=s._getFrameworks();return i.length&&(n.fw=i.join(",")),`${t}?${Tr(n).slice(1)}`}async function T0(s){const e=await m0(s),t=en().gapi;return ee(t,s,"internal-error"),e.open({where:document.body,url:w0(s),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:y0,dontclear:!0},n=>new Promise(async(r,i)=>{await n.restyle({setHideOnLeave:!1});const o=Zt(s,"network-request-failed"),a=en().setTimeout(()=>{i(o)},_0.get());function c(){en().clearTimeout(a),r(n)}n.ping(c).then(c,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const v0={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},A0=500,R0=600,S0="_blank",P0="http://localhost";class TC{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function N0(s,e,t,n=A0,r=R0){const i=Math.max((window.screen.availHeight-r)/2,0).toString(),o=Math.max((window.screen.availWidth-n)/2,0).toString();let a="";const c={...v0,width:n.toString(),height:r.toString(),top:i,left:o},B=st().toLowerCase();t&&(a=u_(B)?S0:t),c_(B)&&(e=e||P0,c.scrollbars="yes");const h=Object.entries(c).reduce((C,[_,I])=>`${C}${_}=${I},`,"");if(nN(B)&&a!=="_self")return b0(e||"",a),new TC(null);const f=window.open(e||"",a,h);ee(f,s,"popup-blocked");try{f.focus()}catch{}return new TC(f)}function b0(s,e){const t=document.createElement("a");t.href=s,t.target=e;const n=document.createEvent("MouseEvent");n.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(n)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const O0="__/auth/handler",F0="emulator/auth/handler",L0=encodeURIComponent("fac");async function vC(s,e,t,n,r,i){ee(s.config.authDomain,s,"auth-domain-config-required"),ee(s.config.apiKey,s,"invalid-api-key");const o={apiKey:s.config.apiKey,appName:s.name,authType:t,redirectUrl:n,v:ks,eventId:r};if(e instanceof D_){e.setDefaultLanguage(s.languageCode),o.providerId=e.providerId||"",yc(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[h,f]of Object.entries({}))o[h]=f}if(e instanceof Do){const h=e.getScopes().filter(f=>f!=="");h.length>0&&(o.scopes=h.join(","))}s.tenantId&&(o.tid=s.tenantId);const a=o;for(const h of Object.keys(a))a[h]===void 0&&delete a[h];const c=await s._getAppCheckToken(),B=c?`#${L0}=${encodeURIComponent(c)}`:"";return`${k0(s)}?${Tr(a).slice(1)}${B}`}function k0({config:s}){return s.emulator?Uu(s,F0):`https://${s.authDomain}/${O0}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dc="webStorageSupport";class x0{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=A_,this._completeRedirectFn=a0,this._overrideRedirectResult=r0}async _openPopup(e,t,n,r){Dn(this.eventManagers[e._key()]?.manager,"_initialize() not called before _openPopup()");const i=await vC(e,t,n,BB(),r);return N0(e,i,Wu())}async _openRedirect(e,t,n,r){await this._originValidation(e);const i=await vC(e,t,n,BB(),r);return GN(i),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:r,promise:i}=this.eventManagers[t];return r?Promise.resolve(r):(Dn(i,"If manager is not set, promise should be"),i)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n.catch(()=>{delete this.eventManagers[t]}),n}async initAndGetManager(e){const t=await T0(e),n=new c0(e);return t.register("authEvent",r=>(ee(r?.authEvent,e,"invalid-auth-event"),{status:n.onEvent(r.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Dc,{type:Dc},r=>{const i=r?.[0]?.[Dc];i!==void 0&&t(!!i),Jt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=d0(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return p_()||B_()||qu()}}const M0=x0;var AC="@firebase/auth",RC="1.13.5";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V0{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){return this.assertAuthConfigured(),this.auth.currentUser?.uid||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(n=>{e(n?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){ee(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function G0(s){switch(s){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function H0(s){As(new Kn("auth",(e,{options:t})=>{const n=e.getProvider("app").getImmediate(),r=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=n.options;ee(o&&!o.includes(":"),"invalid-api-key",{appName:n.name});const c={apiKey:o,authDomain:a,clientPlatform:s,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:g_(s)},B=new lN(n,r,i,c);return gN(B,t),B},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,n)=>{e.getProvider("auth-internal").initialize()})),As(new Kn("auth-internal",e=>{const t=Js(e.getProvider("auth").getImmediate());return(n=>new V0(n))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Qt(AC,RC,G0(s)),Qt(AC,RC,"esm2020")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const U0=300,J0=xC("authIdTokenMaxAge")||U0;let SC=null;const q0=s=>async e=>{const t=e&&await e.getIdTokenResult(),n=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(n&&n>J0)return;const r=t?.token;SC!==r&&(SC=r,await fetch(s,{method:r?"POST":"DELETE",headers:r?{Authorization:`Bearer ${r}`}:{}}))};function Bb(s=gB()){const e=$a(s,"auth");if(e.isInitialized())return e.getImmediate();const t=pN(s,{popupRedirectResolver:M0,persistence:[QN,xN,A_]}),n=xC("authTokenSyncURL");if(n&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(n,location.origin);if(location.origin===i.origin){const o=q0(i.toString());FN(t,o,()=>o(t.currentUser)),ON(t,a=>o(a))}}const r=FC("auth");return r&&mN(t,`http://${r}`),t}function j0(){return document.getElementsByTagName("head")?.[0]??document}cN({loadJS(s){return new Promise((e,t)=>{const n=document.createElement("script");n.setAttribute("src",s),n.onload=e,n.onerror=r=>{const i=Zt("internal-error");i.customData=r,t(i)},n.type="text/javascript",n.charset="UTF-8",j0().appendChild(n)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});H0("Browser");export{Kn as C,to as E,yn as F,Ya as L,As as _,$a as a,RE as b,W0 as c,K0 as d,gB as e,jn as f,Ye as g,z0 as h,wE as i,HD as j,tb as k,ab as l,Bb as m,X0 as n,iD as o,sb as p,rb as q,Qt as r,lb as s,ob as t,nb as u,SE as v,ib as w,cb as x};
