"use strict";(self.webpackChunkstore2=self.webpackChunkstore2||[]).push([[767],{7767:(y,n,s)=>{s.r(n),s.d(n,{CategoryModule:()=>r});var u=s(6895),p=s(4466),a=s(4546),l=s(3900),o=s(8256),h=s(9531),m=s(8306);class d{constructor(t,i){this.activatedRoute=t,this.productsService=i,this.productId=null,this.categoryId=null,this.limit=10,this.offset=0,this.products=[]}ngOnInit(){this.activatedRoute.paramMap.pipe((0,l.w)(t=>(this.categoryId=t.get("id"),this.categoryId?this.productsService.getByCategory(this.categoryId,this.limit,this.offset):[]))).subscribe(t=>{this.products=t}),this.activatedRoute.queryParamMap.subscribe(t=>{this.productId=t.get("product")})}onLoadMore(){this.productsService.getAllProducts(this.limit,this.offset).subscribe(t=>{this.products=this.products.concat(t),this.offset+=this.limit})}}d.\u0275fac=function(t){return new(t||d)(o.Y36(a.gz),o.Y36(h.s))},d.\u0275cmp=o.Xpm({type:d,selectors:[["app-category"]],decls:1,vars:2,consts:[[3,"productId","products","loadMore"]],template:function(t,i){1&t&&(o.TgZ(0,"app-products",0),o.NdJ("loadMore",function(){return i.onLoadMore()}),o.qZA()),2&t&&o.Q6J("productId",i.productId)("products",i.products)},dependencies:[m.P]});const g=[{path:":id",component:d}];class e{}e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=o.oAB({type:e}),e.\u0275inj=o.cJS({imports:[a.Bz.forChild(g),a.Bz]});class r{}r.\u0275fac=function(t){return new(t||r)},r.\u0275mod=o.oAB({type:r}),r.\u0275inj=o.cJS({imports:[u.ez,e,p.m]})}}]);