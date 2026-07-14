import { Routes } from '@angular/router';
import { GamesList } from './games-list/games-list';
import { ShopAbout } from './shop-about/shop-about';

export const routes: Routes = [
  { path: 'videojuegos', component: GamesList },
  { path: 'about', component: ShopAbout},
  {path: '',  redirectTo: 'videojuegos', pathMatch: 'full'},
];

