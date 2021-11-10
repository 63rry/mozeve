import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'tomorrow-land',
    loadChildren: () => import('./eventos/tomorrow-land/tomorrow-land.module').then( m => m.TomorrowLandPageModule)
  },
  {
    path: 'kings-of-house',
    loadChildren: () => import('./eventos/kings-of-house/kings-of-house.module').then( m => m.KingsOfHousePageModule)
  },
  {
    path: 'a-salvacao',
    loadChildren: () => import('./eventos/a-salvacao/a-salvacao.module').then( m => m.ASalvacaoPageModule)
  },
  {
    path: 'small-papo',
    loadChildren: () => import('./eventos/small-papo/small-papo.module').then( m => m.SmallPapoPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
