import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ReadVoitureModule } from '../read-voiture/read-voiture.module';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    ReadVoitureModule

  ],
  exports: [
    HeaderComponent,
    FooterComponent
  ]
})
export class CoreModule { }
