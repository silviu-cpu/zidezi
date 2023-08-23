import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {
  public menuDataArraySubject = new BehaviorSubject<any[]>([
    {
      MeniuID: 1,
      MeniuName: 'Meniul number 1',
      MeniuPrice: 30,
      MeniuProduct: 'Ciorba de burta, Mancare de Fasole'
    },
    {
      MeniuID: 2,
      MeniuName: 'Meniul number 2',
      MeniuPrice: 31,
      MeniuProduct: 'Ciorba de perisoare, Cotlet cu Piure'
    },
    {
      MeniuID: 3,
      MeniuName: 'Meniul number 3',
      MeniuPrice: 32,
      MeniuProduct: 'Ciorba de legume, Pilaf de orez'
    }
  ]);

  constructor() {
    const storedMenuData = localStorage.getItem('menuDataArray');
    if (storedMenuData) {
      this.menuDataArraySubject.next(JSON.parse(storedMenuData));
    }
  }
  
  menuDataArray$ = this.menuDataArraySubject.asObservable();
  selectedMenuIndex = 0; // Initial selected index

  updateMenuDataArray(newDataArray: any[]): void {
    this.menuDataArraySubject.next(newDataArray);
    localStorage.setItem('menuDataArray', JSON.stringify(newDataArray));
  }

  setSelectedMenuIndex(index: number): void {
    this.selectedMenuIndex = index;
  }
}