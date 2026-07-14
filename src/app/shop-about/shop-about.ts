import { Component } from '@angular/core';

@Component({
  selector: 'app-shop-about',
  imports: [],
  templateUrl: './shop-about.html',
  styleUrl: './shop-about.scss',
})

export class ShopAbout {

  shop = {
    nombre: 'GameStore',
    email: 'contacto@gamestore.com',
    telefono: '+54 9 11 1234-5678',
    direccion: 'Av. Corrientes 1234, Buenos Aires'
  }



}
