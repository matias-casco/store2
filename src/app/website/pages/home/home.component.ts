import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import { ActivatedRoute } from '@angular/router';

import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{

  products: Product[] = [];
  productId: string | null = null;
  limit = 10;
  offset = 0;

  constructor(
    private productsService: ProductsService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.productsService.getAllProducts(10, 0)
    .subscribe((data) => {
      this.products = data;
      this.offset += this.limit;
    })
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

