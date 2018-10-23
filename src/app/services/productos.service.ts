import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Producto} from '../interfaces/producto.interface';


@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  productos: Producto[] = [];
  cargada: boolean = true;


  constructor(private http: HttpClient) {
    this.cargarProductos();
  }


  private cargarProductos(){
    this.http.get('https://newprocess-d1950.firebaseio.com/productoidx.json').subscribe( (resp: Producto[]) => {

      console.log(resp);
      this.productos = resp;
      this.cargada = false;


    });
  }

  getProducto(id: string){
   return  this.http.get(`https://newprocess-d1950.firebaseio.com/productos/${id}.json`);

  }
}
