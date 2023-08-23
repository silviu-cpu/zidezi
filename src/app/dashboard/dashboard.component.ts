import { Component } from '@angular/core';
import { Cart } from '../models/cart.model';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  newCartItemName: string = ''

  constructor(private cartService: CartService) {}

  addItemToCart(): void {
    if (this.newCartItemName.trim() !== '') {
      const newItem = {
        id: 3,
        name: this.newCartItemName,
        price: 10,
        quantity: 1,
        product: this.newCartItemName
      };

      this.cartService.addToCart(newItem);
      this.newCartItemName = ''; // Clear the input field
    }
  }
}
