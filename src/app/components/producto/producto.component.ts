import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';
import { Producto } from 'src/app/models/producto.model';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.scss']
})
export class ProductoComponent implements OnInit {

  @Input() producto: Producto = {
    idProducto: 0,
    nombreProducto: 'default',
    valorUnitario: 100,
    image: ''
  };

  //children to parent
  @Output() productoAgregado = new EventEmitter<Producto>(); 

  constructor() { }

  ngOnInit(): void {
  }

  agregarProductoCarro(){
    this.productoAgregado.emit(this.producto);
  }

}
