import { Component, OnInit } from '@angular/core';
import {InfoPaginaService} from '../../services/info-pagina.service';
import {ProductosService} from "../../services/productos.service";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor(public information: InfoPaginaService,
              public productos: ProductosService ) { }

  ngOnInit() {
  }

}
