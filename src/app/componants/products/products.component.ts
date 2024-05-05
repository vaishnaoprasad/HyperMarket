import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ProductService } from 'src/app/services/product/product.service';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule ,MatToolbarModule,
    MatIconModule,
    MatProgressSpinnerModule],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit{

  isLoading: boolean = false;
  items: any = [];

  constructor(private productService: ProductService){

  }

  ngOnInit(): void {
    this.isLoading = true;
    this.productService.getProducts.subscribe((data)=>{
      if(data){
        console.log("All Products: ", data);
        this.items = data;
        this.isLoading = false;
      }
    });

  }


}
