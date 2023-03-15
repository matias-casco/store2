import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams, HttpStatusCode,  } from '@angular/common/http';
import { throwError, zip } from 'rxjs';
import { retry, catchError, map } from 'rxjs/operators';

import { Product, CreateProductDto } from './../models/product.model';
import { checkTime } from '../interceptors/time.interceptor';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class ProductsService {

  private apiUrl = `${environment.API_URL}/api`

  constructor(
    private http: HttpClient
  ) { }

  getByCategory(categoryId: string, limit?:number, offset?:number) {
    let params = new HttpParams();
    if ( limit && offset != null) {
      params = params.set('limit', limit)
      params = params.set('offset', offset)
    }
    return this.http.get<Product[]>(`${this.apiUrl}/categories/${categoryId}/products`, { params })
  }

  getAllProducts(limit?: number, offset?: number) {
    let params = new HttpParams();
    if(limit && offset != null ) {
      params = params.set('limit', limit)
      params = params.set('offset', offset)
    }
    return this.http.get<Product[]>(`${this.apiUrl}/products`, { params, context: checkTime() })
  }

  getProduct(id: string) {
    return this.http.get<Product>(`${this.apiUrl}/products/${id}`)
    .pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === HttpStatusCode.Conflict) {
          return throwError('Algo esta fallando en el server');
        }
        if (error.status === HttpStatusCode.NotFound) {
          return throwError('El producto no existe');
        }
        if (error.status === HttpStatusCode.Unauthorized) {
          return throwError('Acceso no autorizado');
        }
        return throwError('Ups algo salio mal');
      })
    )
  }

  create(dto: CreateProductDto) {
    return this.http.post<Product>(`${this.apiUrl}/products`, dto);
  }

  update(id: string, dto: any){
    return this.http.put<Product>(`${this.apiUrl}/products/${id}`, dto);
  }

  delete(id: string) {
    return this.http.delete<boolean>(`${this.apiUrl}/products/${id}`)
  }

}
