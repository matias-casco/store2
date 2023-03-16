import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';

import { ProductsService } from 'src/app/services/products.service';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-category',
  template: `<app-products [productId]="productId" [products]="products" (loadMore)="onLoadMore()"></app-products>`,
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  productId: string | null = null;
  categoryId: string | null = null;
  limit = 10;
  offset = 0;
  products: Product[] = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private productsService: ProductsService
  ) {

  }

  ngOnInit(): void {
    this.activatedRoute.paramMap
    .pipe(
      switchMap(params => {
        this.categoryId = params.get('id');
        if(this.categoryId) {
          return this.productsService.getByCategory(this.categoryId, this.limit, this.offset)
        }
        return []
      })
    )
   .subscribe(data => {
      this.products = data;
    });
    this.activatedRoute.queryParamMap.subscribe(params => {
      this.productId = params.get('product');
    })
  }

  onLoadMore(){
    this.productsService.getAllProducts(this.limit, this.offset)
    .subscribe(data => {
      this.products = this.products.concat(data);
      this.offset += this.limit;
    });
  }



}
