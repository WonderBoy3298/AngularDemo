import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NewProductComponent } from './new-product/new-product.component';
import { ProductComponent } from './product/product.component';

const routes: Routes = [
  {path:"home",component:HomeComponent},
  {path:"newProduct",component:NewProductComponent},
  {path:"product",component:ProductComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {




 }
