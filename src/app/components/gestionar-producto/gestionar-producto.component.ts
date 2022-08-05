import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/models/producto.model';
import { ProductosService } from '../../services/productos.service';

@Component({
  selector: 'app-gestionar-producto',
  templateUrl: './gestionar-producto.component.html',
  styleUrls: ['./gestionar-producto.component.scss']
})

export class GestionarProductoComponent implements OnInit {

  hidden: boolean = true;
  hiddenCreacion: boolean = true;
  productos: Producto[] = [];

  productoAEditar: Producto = {
    idProducto: 0,
    nombreProducto: '',
    valorUnitario: 0,
    image: ''
  };

  productoACrear: Producto = {
    idProducto: 0,
    nombreProducto: '.',
    valorUnitario: 0,
    image: '.'
  };
  
  constructor(private productosService: ProductosService) { }

  ngOnInit(): void {
    this.obtenerProductos();
  }

  editarProducto(producto: Producto){
    this.hidden = false;
    this.productoAEditar = producto;
  }

  cancelarEdicion(){
    this.hidden = true;
    this.obtenerProductos();
  }

  cancelarCreacion(){
    this.hiddenCreacion = true;
  }

  guardarEdicionProducto(){
    this.productosService.crearEditarProducto(this.productoAEditar)
    .subscribe(data => {
      this.productoAEditar = data;
      alert(this.productoAEditar.nota);
      this.hidden = true;
      this.obtenerProductos();
    });

    this.productosService.obtenerProductos()
    .subscribe(data => {
      this.productos = data;
    });
  }

  guardarCreacionProducto(){
    this.productosService.crearEditarProducto(this.productoACrear)
    .subscribe(data => {
      alert(data.nota);
      this.hiddenCreacion = true;
      this.obtenerProductos();
    });
  }

  eliminarProducto(producto: Producto){
    producto.idProducto = producto.idProducto * -1;

    this.productosService.crearEditarProducto(producto)
    .subscribe({
      next: data => this.obtenerProductos(),
      error: err => alert("No se puede eliminar el producto porque tiene ventas asociadas")
    });
  }

  obtenerProductos(){
    this.productosService.obtenerProductos()
    .subscribe(data => {
      this.productos = data;
    });
  }

  habilitarCreacionProducto(){
    this.hiddenCreacion = false;
    this.hidden = true;
  }

}
