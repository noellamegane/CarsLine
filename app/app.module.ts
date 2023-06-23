import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule, registerLocaleData } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import localeFr from '@angular/common/locales/fr';
import { AppComponent } from './app.component';
import { PublicatiionModule } from './publicatiion/publicatiion.module';
import { CoreModule } from './core/core.module';
import { AuthentificationModule } from './authentification/authentification.module';
import { ReadVoitureModule } from './read-voiture/read-voiture.module';
import { AfficheVoitureService } from './read-voiture/services/affiche-voiture.service';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { HttpStatusInterceptor } from './interceptors/auth.interceptors';
//import { AccueilComponent } from './accueil/accueil.component';

registerLocaleData(localeFr,'fr');

@NgModule({
  declarations: [
    AppComponent
    ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    CoreModule,
    HttpClientModule
  ],
  providers: [
    AfficheVoitureService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpStatusInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
