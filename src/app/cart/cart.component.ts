import { Component, OnInit } from '@angular/core';
import { Cart, CartItem } from '../models/cart.model';
import { loadStripe } from '@stripe/stripe-js';
import { HttpClient } from '@angular/common/http'
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit{
  cart: Cart = { items: []};
  dataSource: Array<CartItem> = [];
  displayedColumns: Array<string> = [
    'product',
    'name',
    'price',
    'quantity',
    'total',
    'action'
  ]
  constructor(private http: HttpClient, private cartService: CartService ) { }

  ngOnInit(): void {
    this.cartService.cart.subscribe((_cart: Cart) => {
      this.cart = _cart;
      this.dataSource = this.cart.items;
    })
  }

  getTotal(items: Array<CartItem>): number {
    return this.cartService.getTotal(items);
  }

  onClearCart(): void {
    this.cartService.clearCart();
  }

  onCheckout():void {
    //call stripe service
    this.http.post('https://2o9rzraukf.execute-api.eu-north-1.amazonaws.com/checkout', {
      items: this.cart.items
    }).subscribe(async (res: any) => {
      let stripe = await loadStripe('pk_test_51Nc6sEArMML4vzqfC2eBG4jCVWOpjs2Gub9QUV6XEM90DmLnAgZU8WCrdt6TPHrrYzBfzjnpDbeJsZ4lnItweppt003Cck5UN6');
      stripe?.redirectToCheckout({
        sessionId: res.id
      })
    })
  }

  onRemoveCart(item: CartItem): void {
    this.cartService.removeFromCart(item)
  }

  onAddQuantity(item: CartItem): void {
    this.cartService.addToCart(item);
  }

  onRemoveQuantity(item: CartItem): void {
    this.cartService.removeQuantity(item);
  }
}
