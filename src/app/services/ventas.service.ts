import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Venta } from '../models/venta.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class VentasService {

  constructor(private http: HttpClient ) { }

  obtenerVentas(){
    return this.http.get<Venta[]>('http://localhost:63780/api/Venta/obtenerVentas/1');
  }

  crearEditarVenta(Venta: Venta){
    return this.http.post('http://localhost:63780/api/Venta/crearEditarVenta', Venta)
      .pipe(
        map((response: any) => {
          const Venta: Venta = response;
          return Venta;
        })
      );
  }
}
