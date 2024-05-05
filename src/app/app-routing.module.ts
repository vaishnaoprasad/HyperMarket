import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './componants/products/products.component';
import { AddProductsComponent } from './componants/add-products/add-products.component';
import { LoginComponent } from './componants/login/login.component';
import { ManageProductsComponent } from './componants/manage-products/manage-products.component';
import { HomeComponent } from './componants/home/home.component';
import { CartComponent } from './componants/cart/cart.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'manage-products',
    component: ManageProductsComponent
  },
  {
    path: 'products',
    component: ProductsComponent
  },
  {
    path: 'add-products',
    component: AddProductsComponent
  },
  {
    path: 'cart',
    component: CartComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '', 
    redirectTo: 'login',
    pathMatch: 'full',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
