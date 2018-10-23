import { Component, OnInit } from '@angular/core';
import {InfoPaginaService} from '../../services/info-pagina.service';
import {ProductosService} from "../../services/productos.service";
import {Router} from "@angular/router";


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(public information: InfoPaginaService,
              public productos: ProductosService,
              private router: Router) { }

  ngOnInit() {
  }

  buscarProducto( termino: string) {
    if ( termino.length < 1){
      return;
    }

    this.router.navigate(['/search', termino]);
  }

  redirectToHome() {

    this.router.navigate(['/home']);
  }
  redirectToProdcutos() {

    this.router.navigate(['/productos']);
  }
  redirectToContacto() {

    this.router.navigate(['/home']);
  }
  redirectToabout() {

    this.router.navigate(['/about']);
  }

}
