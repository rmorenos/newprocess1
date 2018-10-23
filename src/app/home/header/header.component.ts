import { Component, OnInit } from '@angular/core';
import {InfoPaginaService} from '../../services/info-pagina.service';
import {ProductosService} from "../../services/productos.service";


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(public information: InfoPaginaService,
              public productos: ProductosService ) { }

  ngOnInit() {
  }

}
