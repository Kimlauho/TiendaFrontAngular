import { Component, OnInit, Input } from '@angular/core';
import { Producto } from 'src/app/models/producto.model';
import { Venta, DetalleVenta } from 'src/app/models/venta.model';
import { VentasService } from 'src/app/services/ventas.service';
import { TiendaService } from '../../services/tienda.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  @Input() productosAgregados: Producto[] = [];
  activeMenu: boolean = false;
  activeMenuCarro: boolean = false;
  valorTotal: number = 0;
  contadorProductos = 0;
  detallesVenta: DetalleVenta[] = [];
  detalleVenta: DetalleVenta = {
      idVenta: 0,
      idDetalleVenta: 0,
      idProducto:0,
      valorUnitario: 0
  };

  venta: Venta = {
    idVenta: 0,
    idCliente: 1,
    valorTotal: this.valorTotal,
    _DetalleVenta: []
}

  constructor(
    private tiendaService: TiendaService,
    private ventaService: VentasService
  ) { }

  ngOnInit(): void {
    
    this.tiendaService.carro$.subscribe(productos =>  {

      this.contadorProductos = productos.length;
      this.productosAgregados = productos;
      this.valorTotal = productos.reduce((sum,item) => sum + item.valorUnitario,0);

    });
  }

  toggleMenu(){
    this.activeMenu = !this.activeMenu;
  }

  toggleMenuCar(){
    this.activeMenuCarro = !this.activeMenuCarro;
  }

  agregarProductoAlCarro(producto: Producto){
    this.tiendaService.agregarProducto(producto);
    this.valorTotal = this.tiendaService.obtenerTotal();
  }

  eliminarProductoCarro(producto: number){
    this.productosAgregados.splice(producto,1);
    this.valorTotal = this.tiendaService.obtenerTotal();
  }

  registrarCompra(){
    this.detallesVenta = [];
    for (let index = 0; index < this.productosAgregados.length; index++) {
      this.detalleVenta = {
        idVenta: 0,
        idDetalleVenta: 0,
        idProducto: this.productosAgregados[index].idProducto,
        valorUnitario: this.productosAgregados[index].valorUnitario,
      };
      this.detallesVenta.push(this.detalleVenta);
    }
    this.venta._DetalleVenta = this.detallesVenta;
    console.log(this.venta);
    this.ventaService.crearEditarVenta(this.venta)
    .subscribe(data => {
      this.venta = data,
      alert(this.venta.nota);
    });
  }

  limpiarCarro() {
    this.tiendaService.limpiarCarroProductos();
    this.valorTotal = this.tiendaService.obtenerTotal();
  }

}
