import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { GameCartService } from '../game-cart';

@Component({
  selector: 'app-shop-cart',
  imports: [RouterLink],
  templateUrl: './shop-cart.html',
  styleUrl: './shop-cart.scss'
})
export class ShopCart {

  abierto: boolean = false;

  constructor(public cartService: GameCartService) {}

  toggleCarrito() {
    this.abierto = !this.abierto;
  }

  cerrarCarrito() {
    this.abierto = false;
  }
}
