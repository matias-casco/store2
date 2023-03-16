import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Product, CreateProductDto, UpdateProductDto } from '../../../models/product.model';

import { StoreService } from '../../../services/store.service';
import { ProductsService } from '../../../services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {

  @Input() products: Product[] = [];
  @Input() set productId(id: string | null) {
    if (id) {
      this.onShowDetails(id)
    }
  }
  @Output() loadMore = new EventEmitter;

  myShoppingCart: Product[] = [];
  total = 0;
  showProductDetail = false;
  productChosen: Product = {
    id: '',
    price: 0,
    images: [],
    title: '',
    category: {
      id: '',
      name: '',
    },
    description: ''
  };

  constructor(
    private storeService: StoreService,
    private productsService: ProductsService
  ) {
    this.myShoppingCart = this.storeService.getShoppingCart();
  }

  onAddToShoppingCart(product: Product) {
    this.storeService.addProduct(product);
    this.total = this.storeService.getTotal();
  }

  toggleProductDetail() {
    this.showProductDetail = !this.showProductDetail;
  }

  onShowDetails(id: string) {
    if (!this.showProductDetail) {
      this.showProductDetail = true;
    }
    this.productsService.getProduct(id)
    .subscribe(data => {
      this.productChosen = data;
    })
  }

  createNewProduct() {
    const product: CreateProductDto = {
      title: 'Nuevo producto',
      description: 'Has creado este nuevo producto',
      images: ['https://placeimg.com/640/480/any'],
      price: 1000,
      categoryId: 2,
    }

    this.productsService.create(product)
    .subscribe(data => {
      this.products.unshift(data);
    })
  }

  updateProduct() {
    const changes: UpdateProductDto = {
      title: 'Título cambiado'
    }
    const id = this.productChosen.id;
    this.productsService.update(id, changes)
    .subscribe(data => {
      const productIndex = this.products.findIndex(item => item.id === this.productChosen.id);
      this.products[productIndex] = data;
      this.productChosen = data;
    });
  }

  deleteProduct() {
    const id = this.productChosen.id;
    this.productsService.delete(id)
    .subscribe(() => {
      const productIndex = this.products.findIndex(item => item.id === this.productChosen.id);
      this.products.splice(productIndex, 1);
      this.showProductDetail = false;
    })
  }

  onLoadMore() {
    this.loadMore.emit()
  }

}
