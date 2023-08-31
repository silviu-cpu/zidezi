import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../models/product.model';
import { CartService } from '../services/cart.service';
import { Cart, CartItem } from '../models/cart.model';
import { SharedDataService } from '../services/shared-data.service';
import { Observable } from 'rxjs/internal/Observable';
import { APIService } from '../API.service';

@Component({
  selector: 'app-product-box',
  templateUrl: './product-box.component.html',
  styleUrls: ['./product-box.component.scss']
})
export class ProductBoxComponent {
  allProducts: any = [];
  private _cart: Cart = { items: []};
  MeniuID: any
  MeniuName: any 
  MeniuPrice: any 
  MeniuProduct: any
  
  @Input()
  get cart(): Cart {
    return this._cart;
  }

  set cart(cart: Cart) {
    this._cart = cart                          
  }

  constructor(private cartService: CartService,private sharedDataService: SharedDataService, private api: APIService){}

  async ngOnInit() {
    this.createProduct();
    const result = await this.api.ListProducts();
    this.allProducts = result.items;
  }

  getMenuDataArray(): Observable<any[]> {
    return this.sharedDataService.menuDataArray$;
  }

  addItemToCart(menuData: any): void {
    if (menuData.MeniuName.trim() !== '') {
      const newItem = {
        id: menuData.MeniuID,
        name: menuData.MeniuName,
        price: menuData.MeniuPrice,
        quantity: 1,
        product: menuData.MeniuProduct
      };

      this.cartService.addToCart(newItem);
    }
  }

  async createProduct() {
    const newProduct = {
      name: "Primul meniu creat GraphQL",
      description: "Descriere din GraphQL",
      price: 69
    }

    let result = await this.api.CreateProducts(newProduct)
    this.allProducts.push(result);
  }

  // async listProduct(){
  //   const result = await this.api.ListProducts();
  //   this.allProducts = result.items;
  // }
}
