import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'copa',
    loadChildren: () => import('./copa/copa.module').then( m => m.CopaPageModule)
  },
  {
    path: 'condu',
    loadChildren: () => import('./condu/condu.module').then( m => m.ConduPageModule)
  },
  {
    path: 'pasa',
    loadChildren: () => import('./pasa/pasa.module').then( m => m.PasaPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
