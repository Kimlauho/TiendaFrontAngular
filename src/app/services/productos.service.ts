import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Producto } from '../models/producto.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor(private http: HttpClient ) { }

  obtenerProductos(){
    return this.http.get<Producto[]>('http://localhost:63780/api/Producto/obtenerProductos');
  }

  crearEditarProducto(producto: Producto){
    return this.http.post('http://localhost:63780/api/Producto/crearEditarProducto', producto)
      .pipe(
        map((response: any) => {
          const producto: Producto = response;
          return producto;
        })
      );
  }
}
