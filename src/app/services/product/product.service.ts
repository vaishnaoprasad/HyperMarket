import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private _products = new BehaviorSubject([]);

  constructor(
    private http: HttpClient
  ) {}

  get getProducts() {
    return this._products.asObservable();
  }

  addProduct(product) {

    console.log('Product at Service: ', product);

    this._products.next(this._products.value.concat({product}));
  }


}
