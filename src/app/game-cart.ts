import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GameCartService {

  items: any[] = [];

  addToCart(game: any): void {
  const existing = this.items.find(i => i.name === game.name);

  if (existing) {
    // Verifica que no supere el stock
    if (existing.quantity + game.quantity <= game.stock) {
      existing.quantity += game.quantity;
    } else {
      existing.quantity = game.stock; // tope máximo
    }
  } else {
    // Verifica que la cantidad no supere el stock
    const quantity = game.quantity > game.stock ? game.stock : game.quantity;
    this.items.push({ ...game, quantity });
  }
}

  removeItem(game: any): void {
    this.items = this.items.filter(i => i.name !== game.name);
  }

  clearCart(): void {
    this.items = [];
  }

  get totalItems(): number {
    return this.items.reduce((acc, item) => acc + item.quantity, 0);
  }

  get totalPrice(): number {
    return this.items.reduce((acc, item) => acc + item.price * item.quantity, 0);
  }
}
