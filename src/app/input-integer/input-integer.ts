/*import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-input-integer',
  imports: [FormsModule],
  templateUrl: './input-integer.html',
  styleUrl: './input-integer.scss'
})
export class InputInteger {
  @Input() quantity: number = 0;
@Input() max: number = 0;

@Output() quantityChange : EventEmitter<number>
= new EventEmitter<number>()

  upQuantity() {
    if (this.quantity < this.max) {
      this.quantity++;
      this.quantityChange.emit(this.quantity);
    }
  }

  downQuantity() {
    if (this.quantity > 0) {
      this.quantity--;
      this.quantityChange.emit(this.quantity);
    }
  }

  onChangeQuantity(event: any) {
    let value = event.target.value;

    if (isNaN(value) || value === '') {
      this.quantity = 0;
      return;
    }

    value = parseInt(value);

    if (value < 0) {
      this.quantity = 0;
      return;
    }

    if (value > this.max) {
      this.quantity = this.max;
      return;
    }

    this.quantity = value;
    this.quantityChange.emit(this.quantity);
  }
}
*/

import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-input-integer',
  imports: [FormsModule],
  templateUrl: './input-integer.html',
  styleUrl: './input-integer.scss'
})
export class InputInteger {
  @Input() quantity: number = 0;
  @Input() max: number = 0;

  @Output() quantityChange: EventEmitter<number> = new EventEmitter<number>();
  @Output() onMaxExceeded: EventEmitter<string> = new EventEmitter<string>();
  @Output() onBelowMin: EventEmitter<string> = new EventEmitter<string>();

  mensaje: string = '';



  upQuantity() {
    if (this.quantity < this.max) {
      this.quantity++;
      this.quantityChange.emit(this.quantity);
      this.mensaje = '';
    } else {
      this.mensaje = '⚠️ No hay más stock disponible';
      this.onMaxExceeded.emit(this.mensaje);
    }
  }

  downQuantity() {
    if (this.quantity > 0) {
      this.quantity--;
      this.quantityChange.emit(this.quantity);
      this.mensaje = '';
    } else {
      this.mensaje = '⚠️ La cantidad mínima es 0';
      this.onBelowMin.emit(this.mensaje);
    }
  }

  onChangeQuantity(event: any) {
    let value = event.target.value;

    if (isNaN(value) || value === '') {
      this.quantity = 0;
      this.mensaje = '';
      return;
    }

    value = parseInt(value);

    if (value < 0) {
      this.quantity = 0;
      this.mensaje = '⚠️ La cantidad mínima es 0';
      this.onBelowMin.emit(this.mensaje);
      return;
    }

    if (value > this.max) {
      this.quantity = this.max;
      this.mensaje = '⚠️ No hay más stock disponible';
      this.onMaxExceeded.emit(this.mensaje);
      return;
    }

    this.quantity = value;
    this.mensaje = '';
    this.quantityChange.emit(this.quantity);
  }
}
