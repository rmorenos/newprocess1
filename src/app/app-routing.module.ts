import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProductosComponent} from './productos/productos.component';
import {HomeComponent} from './home/home.component';
import {AboutComponent} from './shared/about/about.component';
import {ItemComponent} from "./productos/item/item.component";


const routes: Routes = [

  {path: 'home', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'productos', component: ProductosComponent},
  {path: 'item/:id', component: ItemComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})

  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
