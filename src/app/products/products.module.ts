import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ProductsRoutingModule } from "./products-routing.module";
import { ProductListComponent } from "./product-list/product-list.component";
import { ReactiveFormsModule } from "@angular/forms";
import { AddEditProductsComponent } from './add-edit-products/add-edit-products.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [ProductListComponent, AddEditProductsComponent],
  imports: [CommonModule, ProductsRoutingModule,HttpClientModule, ReactiveFormsModule],
})
export class ProductsModule {}
