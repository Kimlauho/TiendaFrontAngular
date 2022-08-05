import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/models/cliente.model';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-gestionar-cliente',
  templateUrl: './gestionar-cliente.component.html',
  styleUrls: ['./gestionar-cliente.component.scss']
})
export class GestionarClienteComponent implements OnInit {

  cliente: Cliente = {
    idCliente: 0,
    cedula: '',
    nombre: '',
    apellido: '',
    telefono: ''
  }

  constructor(private clienteService: ClienteService) { }

  ngOnInit(): void {
    this.clienteService.obtenerCliente()
    .subscribe(data => {
      this.cliente = data;
    });
  }

  editarcliente(){
    this.clienteService.crearEditarCliente(this.cliente)
    .subscribe(data => {
      this.cliente = data,
      alert(this.cliente.nota);
    });
  }

  cancelarEdicion(){
    this.clienteService.obtenerCliente()
    .subscribe(data => {
      this.cliente = data;
      alert(this.cliente.nota);
    });
  }

}
