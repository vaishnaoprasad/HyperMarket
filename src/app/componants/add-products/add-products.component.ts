import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ProductService } from 'src/app/services/product/product.service';

@Component({
  selector: 'app-add-products',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, MatProgressSpinnerModule],
  templateUrl: './add-products.component.html',
  styleUrls: ['./add-products.component.scss']
})
export class AddProductsComponent implements OnInit {

  isLoading: boolean = false;
  productForm: FormGroup;
  selectedFile: File;
  imageUrl: string;

  constructor(private formBuilder: FormBuilder, private productService: ProductService, private fireStorage: AngularFireStorage){

  }

  ngOnInit(): void {
    this.productForm = this.formBuilder.group({
      name: ['', Validators.required],
      image: ['', Validators.required],
      desc: ['', Validators.required],
      brand: ['', Validators.required],
      type: ['', Validators.required],
      price: ['', Validators.compose([Validators.required, Validators.minLength(10)])]
    });
  }

  onSelectProductImage(event: any) {
    this.isLoading = true;
    this.selectedFile = event.target.files[0];

    if (this.selectedFile) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.imageUrl = e.target.result;
      };
      reader.readAsDataURL(this.selectedFile);
      this.isLoading = false;
    } else {
      this.imageUrl = null;
      this.isLoading = false;
    }
  }

  onAddProduct(){
    this.isLoading = true;
    const data = this.productForm?.value;    
    const path = `yt/${Math.random().toString()}`;
    this.fireStorage.upload(path, this.selectedFile).then((upload)=>{
      upload.ref.getDownloadURL().then((url)=>{
        this.productService.addProduct({...data, image: url});
        this.productForm?.reset();
        this.selectedFile = null;
        this.imageUrl = null;
        this.isLoading = false;
      });
    });
  }

}
