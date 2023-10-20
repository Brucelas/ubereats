import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { NoIngresadoGuard } from './no-ingresado.guard';
import { IngresadoGuard } from './ingresado.guard';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule),
    canActivate: [NoIngresadoGuard]
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'copa',
    loadChildren: () => import('./copa/copa.module').then( m => m.CopaPageModule),
    canActivate:[IngresadoGuard]
  },
  {
    path: 'condu',
    loadChildren: () => import('./condu/condu.module').then( m => m.ConduPageModule),
    canActivate: [IngresadoGuard]
  },
  {
    path: 'pasa',
    loadChildren: () => import('./pasa/pasa.module').then( m => m.PasaPageModule),
    canActivate: [IngresadoGuard]
  },
  {
    path: 'registro',
    loadChildren: () => import('./registro/registro.module').then( m => m.RegistroPageModule),
    canActivate: [NoIngresadoGuard]
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
