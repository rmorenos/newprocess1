import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { ProductosRoutingModule } from './productos-routing.module';
import { ProductosComponent } from './productos.component';
import { ItemComponent } from './item/item.component';
import { SearchComponent } from './search/search.component';

@NgModule({
  imports: [
    CommonModule,
    ProductosRoutingModule
  ],
  declarations: [ProductosComponent, ItemComponent, SearchComponent]

})
export class ProductosModule { }
