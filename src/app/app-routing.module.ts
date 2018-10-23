import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProductosComponent} from "./productos/productos.component";
import {HomeComponent} from "./home/home.component";
import {AboutComponent} from "./shared/about/about.component";


const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'productos', children: [
      {path: 'productos', component: ProductosComponent},
      {path: 'productos/id', component: ProductosComponent},

    ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
