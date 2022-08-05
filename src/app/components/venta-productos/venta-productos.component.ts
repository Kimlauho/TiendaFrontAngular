import { Component, OnInit, Input } from '@angular/core';
import { Producto } from 'src/app/models/producto.model';
import { ProductosService } from '../../services/productos.service';
import { TiendaService } from '../../services/tienda.service';

@Component({
  selector: 'app-venta-productos',
  templateUrl: './venta-productos.component.html',
  styleUrls: ['./venta-productos.component.scss']
})

export class VentaProductosComponent implements OnInit {

  productosAgregados: Producto[] = [];
  
  total: number = 0 ;
  productos: Producto[] = [];

  constructor(
    private productoService: ProductosService,
    private tiendaService: TiendaService
    ) { }

  ngOnInit(): void {
    this.productoService.obtenerProductos()
    .subscribe(data => {
      this.productos = data;
    });
  }

  agregarProductoCarroCompra(producto: Producto){
    this.tiendaService.agregarProducto(producto);
    this.total = this.tiendaService.obtenerTotal();
  }
}
