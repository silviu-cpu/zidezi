import { Component, OnDestroy } from '@angular/core';
import { SharedDataService } from '../services/shared-data.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnDestroy {
  selectedMenuIndex: number = 0;
  newCartItemName: string = '';
  newPrice: number = 0;
  newProduct: string = '';
  private subscription: Subscription | undefined;

  constructor(private sharedDataService: SharedDataService) {}

  updateMenuData(): void {
    const existingMenuDataArray = this.sharedDataService.menuDataArraySubject.getValue();
  
    if (
      this.selectedMenuIndex >= 0 &&
      this.selectedMenuIndex < existingMenuDataArray.length
    ) {
      const updatedMenuItem = {
        ...existingMenuDataArray[this.selectedMenuIndex],
        MeniuName: this.newCartItemName,
        MeniuPrice: this.newPrice,
        MeniuProduct: this.newProduct
      };
  
      const updatedMenuDataArray = [...existingMenuDataArray];
      updatedMenuDataArray[this.selectedMenuIndex] = updatedMenuItem;
  
      this.sharedDataService.updateMenuDataArray(updatedMenuDataArray);
  
      // Clear input fields
      this.newCartItemName = '';
      this.newPrice = 0;
      this.newProduct = '';
    }
  }
  

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
