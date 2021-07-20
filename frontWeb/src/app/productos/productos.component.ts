import { Component, OnInit } from '@angular/core';
import {ProductosService  } from '../service/productos-service.service';
import { Productos } from "../modelos/productos";

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css'],
  providers: [ProductosService]

})
export class ProductosComponent implements OnInit {
  Productos : Productos;
  constructor(private productosService: ProductosService,
    ) { }

  ngOnInit() {
    this.productosService.definirContexto("http://127.0.0.1:3000/", '123');
    this.listarProductos();
  }

  listarProductos(){
      this.productosService.listar(-1).subscribe(data => {
        this.Productos = data, console.log(data)
      })
  }

}
