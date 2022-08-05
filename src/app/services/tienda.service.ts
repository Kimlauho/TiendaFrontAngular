import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Producto } from '../models/producto.model';

@Injectable({
  providedIn: 'root'
})
export class TiendaService {

  private productosAgregados: Producto[] = [];
  private carro = new BehaviorSubject<Producto[]>([]);

  carro$ = this.carro.asObservable();

  constructor() { }

  agregarProducto(producto: Producto){
    this.productosAgregados.push(producto);
    this.carro.next(this.productosAgregados);
  }

  limpiarCarroProductos() {
    //Remover del array de productosAgregados, por el indice o por el id del producto
    this.productosAgregados = [];
    this.carro.next(this.productosAgregados);
  }

  //get
  obtenerProductosAgregados(){
    return this.productosAgregados;
  }  

  obtenerTotal(){
    return this.productosAgregados.reduce((sum,item) => sum + item.valorUnitario,0);
  }
}
