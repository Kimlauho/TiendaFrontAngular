import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cliente } from '../models/cliente.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(private http: HttpClient ) { }

  obtenerCliente(){
    return this.http.get<Cliente>('http://localhost:63780/api/Cliente/obtenerClientes/1');
  }

  crearEditarCliente(cliente: Cliente){
    console.log("servicio");
    return this.http.post('http://localhost:63780/api/Cliente/CrearEditarCliente', cliente)
      .pipe(
        map((response: any) => {
          const cliente: Cliente = response;
          console.log(cliente);
          return cliente;
        })
      );
  }

}
