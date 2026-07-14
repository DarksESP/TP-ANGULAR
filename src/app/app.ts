import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { GamesList } from './games-list/games-list';
import { ShopCart} from './shop-cart/shop-cart';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, GamesList, ShopCart],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title =('Game');
  protected readonly title2 =('Store');



}
