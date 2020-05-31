import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'bloodshot',
    loadChildren: () => import('./filmes/bloodshot/bloodshot.module').then( m => m.BloodshotPageModule)
  },
  {
    path: 'scooby',
    loadChildren: () => import('./filmes/scooby/scooby.module').then( m => m.ScoobyPageModule)
  },
  {
    path: 'flash',
    loadChildren: () => import('./series/flash/flash.module').then( m => m.FlashPageModule)
  },
  {
    path: 'game-of-thrones',
    loadChildren: () => import('./series/game-of-thrones/game-of-thrones.module').then( m => m.GameOfThronesPageModule)
  },
  {
    path: 'rick-and-morty',
    loadChildren: () => import('./desenhos/rick-and-morty/rick-and-morty.module').then( m => m.RickAndMortyPageModule)
  },
  {
    path: 'gravity-falls',
    loadChildren: () => import('./desenhos/gravity-falls/gravity-falls.module').then( m => m.GravityFallsPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
