import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ProductosService} from "../../services/productos.service";
import {ProductoDescripcionInterface} from "../../interfaces/producto-descripcion.interface";
import {InfoPaginaService} from "../../services/info-pagina.service";


@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  producto: ProductoDescripcionInterface;
  id: string;

  constructor(private router: ActivatedRoute, public productoServi: ProductosService, public informaServi: InfoPaginaService ) { }

  ngOnInit() {
    this.router.params
      .subscribe( parametros => {
        //console.log(parametros['id']);
        this.productoServi.getProducto(parametros['id'])
          .subscribe((producto: ProductoDescripcionInterface) => {
            this.id = parametros['id'];
            this.producto = producto;
          });
      });
  }

}
