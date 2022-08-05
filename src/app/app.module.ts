import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { GestionarProductoComponent } from './components/gestionar-producto/gestionar-producto.component';
import { GestionarVentaComponent } from './components/gestionar-venta/gestionar-venta.component';
import { VentaProductosComponent } from './components/venta-productos/venta-productos.component';
import { ProductoComponent } from './components/producto/producto.component';
import { GestionarClienteComponent } from './components/gestionar-cliente/gestionar-cliente.component';

const routes: Routes = [
  {path: 'gestionar-productos', component: GestionarProductoComponent},
  {path: 'gestionar-perfil', component: GestionarClienteComponent},
  {path: 'gestionar-ventas', component: GestionarVentaComponent},
  {path: '', component: VentaProductosComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    GestionarProductoComponent,
    GestionarVentaComponent,
    VentaProductosComponent,
    ProductoComponent,
    GestionarClienteComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
