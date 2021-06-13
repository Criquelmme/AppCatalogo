import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { FolderPage } from './folder.page';
import { ProductosComponent } from '../productos/productos.component';

const routes: Routes = [
  {
    path: '',
    component: FolderPage
  },
  {
    path: 'productos',
    component: ProductosComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes), CommonModule],
  exports: [RouterModule],
})
export class FolderPageRoutingModule {}
