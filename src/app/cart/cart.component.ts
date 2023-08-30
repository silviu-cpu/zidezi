import { Component, OnInit } from '@angular/core';
import { Cart, CartItem } from '../models/cart.model';
import { loadStripe } from '@stripe/stripe-js';
import { HttpClient } from '@angular/common/http'
import { CartService } from '../services/cart.service';
import { API } from '@aws-amplify/api';

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


async onCheckout() {
  try {
    // Call your API using Amplify
    const response = await API.post('checkout', '/checkout', {
      body: {
        items: this.cart.items
      }
    });

    const stripe = await loadStripe('pk_test_51Nc6sEArMML4vzqfC2eBG4jCVWOpjs2Gub9QUV6XEM90DmLnAgZU8WCrdt6TPHrrYzBfzjnpDbeJsZ4lnItweppt003Cck5UN6');
    const { id } = response; // Assuming the API response has an 'id' field
    console.log("this is the response---")
    console.log(response)

    if (stripe) {
      await stripe.redirectToCheckout({
        sessionId: id
      });
    }
  } catch (error) {
    console.error('Error during checkout:', error);
  }
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
