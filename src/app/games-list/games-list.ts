import { Component } from '@angular/core';
import { game } from './game';
import { InputInteger } from '../input-integer/input-integer';
import { GameCartService } from '../game-cart';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-games-list',
  imports: [FormsModule, InputInteger],
  templateUrl: './games-list.html',
  styleUrl: './games-list.scss',
})
export class GamesList {

  constructor(private cartService: GameCartService) {} // ← va acá

  addToCart(game: any): void {
    this.cartService.addToCart(game);
  }


games: game[] = [
  {
    name: 'Watch Dogs 1',
    type: 'Action',
    price: 40,
    stock: 0,
    image: 'assets/img/WatchDogs1.jpg',
    clearance: false,
    quantity: 0
  },
  {
    name: 'Modern Warfare 2',
    type: 'Shooter/Action',
    price: 40,
    stock: 100,
    image: 'assets/img/modernWarfare2.jpg',
    clearance: true,
    quantity: 0
  },
  {
    name: 'GTA V',
    type: 'Action/Adventure',
    price: 40,
    stock: 50,
    image: 'assets/img/gta5.jpg',
    clearance: false,
    quantity: 0
  },
  {
    name: 'Red Dead Redemption 2',
    type: 'Action/Adventure',
    price: 45,
    stock: 20,
    image: 'assets/img/rdr2.jpg',
    clearance: false,
    quantity: 0
  },
  {
    name: 'Cyberpunk 2077',
    type: 'RPG/Action',
    price: 35,
    stock: 0,
    image: 'assets/img/cyberpunk.jpg',
    clearance: true,
    quantity: 0
  },
  {
    name: 'The Witcher 3',
    type: 'RPG',
    price: 40,
    stock: 75,
    image: 'assets/img/thewitcher3.jpg',
    clearance: false,
    quantity: 0
  },
  {
    name: 'Elden Ring',
    type: 'RPG/Action',
    price: 55,
    stock: 30,
    image: 'assets/img/eldenring.jpg',
    clearance: false,
    quantity: 0
  },

  {
    name: 'God of War',
    type: 'Action/Adventure',
    price: 40,
    stock: 15,
    image: 'assets/img/godwar.png',
    clearance: false,
    quantity: 0
  },
  {
    name: 'Minecraft',
    type: 'Sandbox',
    price: 20,
    stock: 200,
    image: 'assets/img/minecraft.jpg',
    clearance: false,
    quantity: 0
  },
  {
    name: 'Resident Evil 4',
    type: 'Horror/Action',
    price: 50,
    stock: 0,
    image: 'assets/img/re4.jpg',
    clearance: true,
    quantity: 0
  },
  {
    name: 'Forza Horizon 5',
    type: 'Racing',
    price: 45,
    stock: 40,
    image: 'assets/img/forza5.jpg',
    clearance: false,
    quantity: 0
  }
]
 mostrarMensaje(mensaje: string) {
    console.log(mensaje);
  }

}
