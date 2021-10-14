import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Product } from '../../../models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  @Input() product: Product = {
    // definimos el estado inicial
    id: '',
    title: '',
    price: 0,
    image: '',
    category: '',
    description: '',
  };

  // comunicacion hacia el componente padre app-product to app-products con el event addedProduct que transmite
  // información de tipo product
  @Output() addedProduct = new EventEmitter<Product>();

  constructor() {}

  ngOnInit(): void {}

  onAddToCart() {
    // desde nuestro evento addedProduct emitimos el producto
    this.addedProduct.emit(this.product);
  }
}
