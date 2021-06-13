import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { ProductosComponent } from './productos/productos.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/Home',
    pathMatch: 'full'
  },
  {
    path: 'productos',
    component: ProductosComponent
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./index/folder.module').then( m => m.FolderPageModule)
  },
  

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
