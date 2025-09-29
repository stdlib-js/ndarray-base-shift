"use strict";var m=function(n,r){return function(){return r||n((r={exports:{}}).exports,r),r.exports}};var v=m(function(p,t){
var d=require('@stdlib/ndarray-base-normalize-index/dist'),f=require('@stdlib/ndarray-base-ndims/dist'),l=require('@stdlib/ndarray-base-slice-from/dist'),q=require('@stdlib/ndarray-base-slice-to/dist'),c=require('@stdlib/array-base-nulls/dist'),u=require('@stdlib/error-tools-fmtprodmsg/dist');function g(n,r,a){var s,o,e,i;if(e=f(n),e===0)throw new TypeError(u('2WdF7',e));if(r=d(r,e-1),r===-1)throw new RangeError(u('2WdF8',e,r));return i=c(e),i[r]=1,s=l(n,i,!1,a),o=q(n,i,!1,a),[s,o]}t.exports=g
});var h=v();module.exports=h;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
