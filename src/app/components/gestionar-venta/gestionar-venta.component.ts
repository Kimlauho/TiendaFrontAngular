import { Component, OnInit } from '@angular/core';

import { Venta } from 'src/app/models/venta.model';
import { VentasService } from 'src/app/services/ventas.service';

@Component({
  selector: 'app-gestionar-venta',
  templateUrl: './gestionar-venta.component.html',
  styleUrls: ['./gestionar-venta.component.scss']
})
export class GestionarVentaComponent implements OnInit {

  ventas: Venta[] = [];

  constructor(private ventasService: VentasService) { }

  ngOnInit(): void {
    this.obtenerVentas();
  }

  obtenerVentas(){
    this.ventasService.obtenerVentas()
    .subscribe(data => {
      this.ventas = data;
    });
  }

}
