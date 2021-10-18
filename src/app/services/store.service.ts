import { Injectable } from '@angular/core';
/** state management */
import { BehaviorSubject } from 'rxjs';
/** state management */

import { Product } from '../../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class StoreService {
  private myShoppingCart: Product[] = [];
  /** Observable pattern */
  private myCart = new BehaviorSubject<Product[]>([]); // contiene un array de productos con un state inicial vacio

  // creamos el subscriber
  myCart$ = this.myCart.asObservable();

  /** Observable pattern */

  constructor() {}

  getShoppingCart() {
    return this.myShoppingCart;
  }

  addProduct(product: Product) {
    this.myShoppingCart.push(product);
    this.myCart.next(this.myShoppingCart);
  }

  getTotal() {
    return this.myShoppingCart.reduce((sum, item) => sum + item.price, 0);
  }
}
