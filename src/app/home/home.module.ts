import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

@NgModule({
  imports: [
    MDBBootstrapModule.forRoot(),
    CommonModule,
    HomeRoutingModule
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  declarations: [HomeComponent]
})
export class HomeModule { }
