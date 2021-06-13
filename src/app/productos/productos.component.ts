import { Component, OnInit } from '@angular/core';
import { element } from 'protractor';
// import { Imagen, Productos, Servicio, Product, Associations } from '../Modelo/Prestashop';
import { Product } from '../Modelo/Prestashop';
import { WebServiceService } from '../Service/web-service.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss'],
  providers: [CommonModule, WebServiceService]
})
export class ProductosComponent implements OnInit {
  // idProductos: Servicio[];
  productos: Product[];
  productosImagen: Blob;
  estadoConsulta: boolean = true;;
  imagen: any;
  daTatable: Product [];

  constructor(private webServiceService: WebServiceService) { }

  ngOnInit() {
    this.consultaProducto();
  }

  consultaProducto() {
    this.webServiceService.traeProductos().subscribe(data => {
      this.productos = data, console.log(data)
    },
      err => {
        console.log("Error." + err);
      })
  }

  cargaProductos() {
    this.daTatable = this.productos["products"]
    console.log(this.daTatable)
  }

  // GenerarCatalogo() {
  //     this.idProductos["products"].forEach(element => {
  //       this.consultaProducto(element)
  //     this.consultaImagen(element);
  //     this.echEnd = true
  //     });
  //     this.consultaProducto(57)
  //     this.consultaImagen(57);
  // }




  imageToShow: Blob


  consultaImagen(id: number) {
    this.getImage(id, 203)
    this.createImageFromBlob(this.productosImagen)
  }

  ver() {
    this.imageToShow = this.imagen
  }

  createImageFromBlob(image: Blob) {
    let reader = new FileReader();
    reader.addEventListener("load", () => {
      this.imagen = reader.result;
    }, false);
    if (image) {
      reader.readAsDataURL(image);
    }
  }

  getImage(idProducto: number, idImagen: number) {
    this.webServiceService.getImagen(idProducto, idImagen).subscribe(data => {
      this.productosImagen = data, console.log(data);
    },
      err => {
        console.log("Error." + err);
      })
  }

}




