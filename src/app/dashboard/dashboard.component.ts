import { Component, OnDestroy } from '@angular/core';
import { APIService } from '../API.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnDestroy {
  newCartItemName: string = '';
  newPrice: number = 0;
  newDescription: string = '';
  allProducts: any = [];

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

  async deleteAllProducts(){

  }


  ngOnDestroy(): void {
  }
}
