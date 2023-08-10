import { Component, OnInit } from '@angular/core';
import { Cart, CartItem } from '../models/cart.model';
import { loadStripe } from '@stripe/stripe-js';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit{
  cart: Cart = { items: [{
    product: 'sangelatava',
    name: 'snickers',
    price: 150,
    quantity: 1,
    id: 1
  },{
    product: 'sangelatava',
    name: 'snickers',
    price: 150,
    quantity: 1,
    id: 1
  }
]};
  dataSource: Array<CartItem> = [];
  displayedColumns: Array<string> = [
    'product',
    'name',
    'price',
    'quantity',
    'total',
    'action'
  ]
  constructor(private http: HttpClient ) { }

  ngOnInit(): void {
    this.dataSource = this.cart.items;
  }

  getTotal(items: Array<CartItem>): number {
    return items
            .map((item) => item.price * item.quantity)
            .reduce((prev,current) => prev + current, 0)
  }

  onCheckout():void {
    //call stripe service
    this.http.post('http://localhost:4242/checkout', {
      //items: this.cart.items
    }).subscribe(async (res: any) => {
      let stripe = await loadStripe('pk_test_51Nc6sEArMML4vzqfC2eBG4jCVWOpjs2Gub9QUV6XEM90DmLnAgZU8WCrdt6TPHrrYzBfzjnpDbeJsZ4lnItweppt003Cck5UN6');
      stripe?.redirectToCheckout({
        sessionId: res.id
      })
    })
  }

}
