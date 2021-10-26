import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

//components
import { AutoComponent } from './auto/auto.component';
import { CatalogoComponent } from './catalogo/catalogo.component';
import { CarruselAutosComponent } from './carrusel-autos/carrusel-autos.component';
import { DisponibilidadPipe } from './pipes/disponibilidad.pipe';
import { FeedInicioComponent } from './feed-inicio/feed-inicio.component';
import { HomeComponent } from './home/home.component';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { SharedModule } from '../shared/shared.module';

//pipes
import { ImagenPipe } from './pipes/imagen.pipe';
import { ImagenPrincipalPipe } from './pipes/imagen-catalogo.pipe';


@NgModule({
  declarations: [
    AutoComponent,
    CarruselAutosComponent,
    CatalogoComponent,
    DisponibilidadPipe,
    FeedInicioComponent,
    HomeComponent,
    ImagenPipe,
    ImagenPrincipalPipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    HttpClientModule,
    FormsModule,
    PrimeNgModule,
    SharedModule
  ],
  exports: [
    FeedInicioComponent,
    CarruselAutosComponent,
    CatalogoComponent
  ]
})
export class AutosModule { }
