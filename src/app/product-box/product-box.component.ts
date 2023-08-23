import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../models/product.model';
import { CartService } from '../services/cart.service';
import { Cart, CartItem } from '../models/cart.model';

@Component({
  selector: 'app-product-box',
  templateUrl: './product-box.component.html',
  styleUrls: ['./product-box.component.scss']
})
export class ProductBoxComponent {
  
  private _cart: Cart = { items: []};
  MeniuID: any  = 1
  MeniuName: any = 'Meniul nomber 1'
  MeniuPrice: any = 30;
  MeniuProduct: any = 'Ciorba de burta, Mancare de Fasole'
  
  @Input()
  get cart(): Cart {
    return this._cart;
  }

  set cart(cart: Cart) {
    this._cart = cart                          
  }

  constructor(private cartService: CartService){}


  addItemToCart(): void {
    if (this.MeniuName.trim() !== '') {
      const newItem = {
        id: this.MeniuID,
        name: this.MeniuName,
        price: this.MeniuPrice,
        quantity: 1,
        product: this.MeniuProduct
      };

      this.cartService.addToCart(newItem);
    }
  }
}
