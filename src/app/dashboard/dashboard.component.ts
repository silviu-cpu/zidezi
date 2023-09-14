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
  
    const productList = await this.api.ListProducts();
  
    
    if (productList?.items?.length) {
      const productIds = productList.items.map((product) => product?.id);
  
     
      for (const productId of productIds) {
        try {
          if (productId) {
            const deleteInput = { id: productId };
            await this.api.DeleteProducts(deleteInput);
            console.log(`Deleted product with ID: ${productId}`);
          }
        } catch (error) {
          console.error(error);
        }
      }
    } else {
      console.log("No products to delete.");
    }
  }
  


  ngOnDestroy(): void {
  }
}
