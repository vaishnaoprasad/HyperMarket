import { Component } from '@angular/core';
import {MatTabsModule} from '@angular/material/tabs';
import { ProductsComponent } from '../products/products.component';
import { AddProductsComponent } from '../add-products/add-products.component';

@Component({
  selector: 'app-manage-products',
  standalone: true,
  imports: [MatTabsModule, ProductsComponent, AddProductsComponent],
  templateUrl: './manage-products.component.html',
  styleUrl: './manage-products.component.scss'
})
export class ManageProductsComponent {

}
