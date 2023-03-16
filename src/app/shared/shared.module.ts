import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'

import { SwiperModule } from 'swiper/angular';

import { ProductComponent } from '../shared/components/product/product.component';
import { ProductsComponent } from '../shared/components/products/products.component';
import { ImgComponent } from '../shared/components/img/img.component';



@NgModule({
  declarations: [
    ImgComponent,
    ProductComponent,
    ProductsComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    SwiperModule
  ],
  exports: [
    ImgComponent,
    ProductComponent,
    ProductsComponent,
  ]
})
export class SharedModule { }
