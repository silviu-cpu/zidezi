import { Injectable } from '@angular/core';
import { BehaviorSubject, filter } from 'rxjs';
import { Cart, CartItem } from '../models/cart.model';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart = new BehaviorSubject<Cart>({items: []})

  constructor(private _snackBar: MatSnackBar) { }

  addToCart(item: CartItem):void {
    const items = [...this.cart.value.items]
    const itemInCart = items.find( i => i.id === item.id)

    if (itemInCart) {
      itemInCart.quantity++;
    } else {
      items.push(item);
    }

    this.cart.next({ items }) 
    this._snackBar.open('1 item added to cart.' , 'Ok', { duration: 3000})

  }

  getTotal(items: Array<CartItem>): number {
    return items
            .map((item) => item.price * item.quantity)
            .reduce((prev,current) => prev + current, 0)
  }

  clearCart(): void {
    this.cart.next({ items: [] })
    this._snackBar.open('Cart is cleared.' , 'Ok', { duration: 3000})
  }

  removeFromCart(item: CartItem): void {
    const filteredItems = this.cart.value.items.filter((_item) => _item.id !== item.id)
    this.cart.next({items: filteredItems});
    this._snackBar.open('1 item removed from Cart.' , 'Ok', { duration: 3000})

  }
}
