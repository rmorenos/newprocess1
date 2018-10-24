import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductosModule } from './productos/productos.module';
import { HomeModule } from './home/home.module';
import { AboutComponent } from './shared/about/about.component';
import { NoticiasComponent } from './shared/noticias/noticias.component';


import {InfoPaginaService} from './services/info-pagina.service';
import {HttpClientModule} from '@angular/common/http';
import { ContactoComponent } from './shared/contacto/contacto.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    NoticiasComponent,
    ContactoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot(),
    ProductosModule,
    HomeModule,
    HttpClientModule
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [InfoPaginaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
