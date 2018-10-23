import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {ProductosService} from "../services/productos.service";


@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss']
})
export class ProductosComponent implements OnInit {

  constructor( private router: Router, public productoServi: ProductosService) { }

  ngOnInit() {
  }

  redirectproductos() {
    this.router.navigate(['/productos']);
  }


}
