import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Producto} from '../interfaces/producto.interface';



@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  productos: Producto[] = [];
  productoFiltrado: Producto[] = [];
  cargada: boolean = true;


  constructor(private http: HttpClient) {
    this.cargarProductos();
  }


  private cargarProductos(){
    return new Promise( (resolve, reject) => {
      this.http.get('https://newprocess-d1950.firebaseio.com/productoidx.json')
        .subscribe( (resp: Producto[]) => {
          this.productos = resp;
          this.cargada = false;
          resolve();
        });

    });
  }

  getProducto(id: string){
   return  this.http.get(`https://newprocess-d1950.firebaseio.com/productos/${id}.json`);

  }

  buscarProducto( termino: string) {

    if (this.productos.length === 0 ){
      // Cargar productos
      this.cargarProductos().then( ( ) => {
        // Aplicar Filtro
        this.flitrarProductos(termino);

      });
    } else {
      // aplicar filtro
      this.flitrarProductos(termino);

    }

  }

  private flitrarProductos( termino: string) {
    this.productoFiltrado = [];

    termino = termino.toLocaleLowerCase();

    this.productos.forEach( prod => {
      const tituloLower = prod.titulo.toLocaleLowerCase();
      if( prod.categoria.indexOf( termino) >= 0 || tituloLower.indexOf(termino) >= 0) {
        this.productoFiltrado.push(prod);
      }

    });

  }
}
