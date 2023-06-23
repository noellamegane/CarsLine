import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = 
[
  {path: 'affiche', loadChildren: () => import('./read-voiture/read-voiture.module').then (m => m.ReadVoitureModule) },
  {path: 'authentification', loadChildren: () => import('./authentification/authentification.module').then (m =>m.AuthentificationModule ) },
  {path: 'ajout', loadChildren: () => import('./publicatiion/publicatiion.module').then (m => m.PublicatiionModule) },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

