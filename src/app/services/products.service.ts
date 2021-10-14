import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Product } from '../../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private http: HttpClient) {}

  getAllProducts() {
    // aplicamos un tipado Product a la respuesta de la api
    return this.http.get<Product[]>('https://fakestoreapi.com/products');
  }
}
