import { Component } from '@angular/core';
import { GamesList } from '../games-list/games-list';
import { ShopCart } from '../shop-cart/shop-cart';
import { GameCartService } from '../game-cart';
@Component({
  selector: 'app-shop-games',
  imports: [GamesList, ShopCart],
  templateUrl: './shop-games.html',
  styleUrl: './shop-games.scss',
})
export class ShopGames {

constructor(private cartService: GameCartService) {}

  addToCart(game: any): void {
    this.cartService.addToCart(game);
  }

}
