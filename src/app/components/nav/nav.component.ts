import { Component, OnInit } from '@angular/core';

import { StoreService } from '../../services/store.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {
  activeMenu = false;
  counter = 0;

  // inyectamos el servicios
  constructor(private storeService: StoreService) {}

  ngOnInit(): void {
    // nos suscribimos, cada que se produzca un cambio nos informará y retornará la lista de productos
    this.storeService.myCart$.subscribe((products) => {
      this.counter = products.length;
    });
  }

  toggleMenu() {
    this.activeMenu = !this.activeMenu;
  }
}
