import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { CommonModule } from '@angular/common';
import { RouteReuseStrategy } from '@angular/router';
import {FormsModule} from '@angular/forms';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';


import { ProductosComponent } from './productos/productos.component'
// import { DadoComponent } from './dado/dado.component'


@NgModule({
  declarations: [AppComponent, ProductosComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    CommonModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    FormsModule
    ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy,  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
