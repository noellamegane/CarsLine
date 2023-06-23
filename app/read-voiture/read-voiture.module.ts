import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AfficheVoitureComponent } from './affiche-voiture/affiche-voiture.component';
import { AccueilComponent } from './accueil/accueil.component';
import { RouterModule } from '@angular/router';
import { ReadVoitureRoutingModule } from './read-voiture-routing.module';
import { DetailsComponent } from './details/details.component';



@NgModule({
  declarations: [
    AccueilComponent,
    AfficheVoitureComponent,
    DetailsComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReadVoitureRoutingModule

  ],
  exports: []
})
export class ReadVoitureModule { }
