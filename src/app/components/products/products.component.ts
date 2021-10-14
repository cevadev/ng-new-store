import { Component, OnInit } from '@angular/core';

import { Product } from '../../../models/product.model';

// services
import { StoreService } from '../../services/store.service';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  myShoppingCart: Product[] = [];
  total = 0;
  products: Product[] = [];

  /** Date Pipe */
  today = new Date();
  date = new Date(2021, 1, 21);
  /** Date Pipe */

  // injectamos el service store
  constructor(
    private storeService: StoreService,
    private productsService: ProductsService
  ) {
    // obtenemos la lista actual de productos en el carrito
    this.myShoppingCart = this.storeService.getShoppingCart();
  }

  ngOnInit(): void {
    // ngOnInit es el metodo ideal para hacer peticiones
    // angular maneja el patron Observable por lo que para obtener los datos del api utilizamos subscribe
    this.productsService.getAllProducts().subscribe((data) => {
      this.products = data;
    });
  }

  // evento que escucha cuando el componente hijo app-product emite un evento con un Product
  onAddToShoppingCart(product: Product) {
    this.storeService.addProduct(product);
    this.total = this.storeService.getTotal();
  }
}
