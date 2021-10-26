import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";

//componentes y módulos creados
import { AppComponent } from './app.component';
import { AutosModule } from './autos/autos.module';
import { PrimeNgModule } from './prime-ng/prime-ng.module';
import { SharedModule } from './shared/shared.module';

//routes
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    AutosModule,
    PrimeNgModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
