import { Component, EventEmitter, Output } from '@angular/core';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-product-box',
  templateUrl: './product-box.component.html',
  styleUrls: ['./product-box.component.scss']
})
export class ProductBoxComponent {
  product: Product | undefined = {
    id: 1,
    title: 'Jaaaaaaa',
    price: 33,
    category: 'Mancare',
    description: 'Meniu1'
  };
  @Output() addToCart = new EventEmitter();
   
  onAddToCart(): void {
    this.addToCart.emit(this.product);
  }
}
