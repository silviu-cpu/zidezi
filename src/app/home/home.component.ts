import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { CartService } from '../services/cart.service';
import { Product } from '../models/product.model';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor(public afAuth: AngularFireAuth , private cartService: CartService) {

  }

  ngOnInit():void {

  }

  logout():void {
    this.afAuth.signOut();
  }

  onAddToCart(product: Product): void {
    this.cartService.addToCart({
      product: product.title,
      name: product.description,
      price: product.price,
      quantity: 1,
      id: product.id
    })
  }
}
