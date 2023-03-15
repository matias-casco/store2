import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';

import { ProductsService } from 'src/app/services/products.service';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  productId: string | null = null;
  product: Product | null = null;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private productsService: ProductsService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.paramMap
    .pipe(
      switchMap(params => {
        this.productId = params.get('id');
        if(this.productId) {
          return this.productsService.getProduct(this.productId)
        }
        return [null]
      })
    )
   .subscribe(data => {
      this.product = data;
    });

  }

  goToBack() {
    this.router.navigate(['..'])
  }

}
