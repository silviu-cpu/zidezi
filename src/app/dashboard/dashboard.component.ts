import { Component, OnDestroy } from '@angular/core';
import { APIService, Products } from '../API.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnDestroy {
  newCartItemName: string = '';
  newPrice: number = 0;
  newDescription: string = '';
  allProducts: Array<Products> = [];
  listProducts: any = [];
  constructor(private api: APIService) {}

  async createProduct() {
    const newProduct = {
      name: this.newCartItemName,
      description: this.newDescription,
      price: this.newPrice,
      quantity: 1
    }

    let result = await this.api.CreateProducts(newProduct)
    this.allProducts.push(result);

    this.newCartItemName = '';
    this.newPrice = 0;
    this.newDescription = '';
  }

  async deleteAllProducts() {
    let result = await this.api.ListProducts();
    this.listProducts.push(result)
    console.log("This is listProduccts")
    console.log(this.listProducts)

    for(let a of this.listProducts.items){
      console.log("this is a")
      console.log(a)
    }
    //await this.api.DeleteProducts();
  
  }


  ngOnDestroy(): void {
  }
}
