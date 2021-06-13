import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';


import { IonicModule } from '@ionic/angular';

import { FolderPageRoutingModule } from './folder-routing.module';
import { RouterModule, Routes } from '@angular/router';
import { FolderPage } from './folder.page';
import { ProductosComponent } from '../productos/productos.component';


@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    IonicModule    
  ],
  declarations: [FolderPage]
})
export class FolderPageModule {}
