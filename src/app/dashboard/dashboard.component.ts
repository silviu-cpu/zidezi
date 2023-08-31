import { Component, OnDestroy } from '@angular/core';
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

  constructor() {}

  

  ngOnDestroy(): void {
  }
}
