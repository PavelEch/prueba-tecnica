import { NgModule } from '@angular/core';

//PrimeNg
import { ButtonModule } from 'primeng/button';
import { CarouselModule } from 'primeng/carousel';
import { DataViewModule } from 'primeng/dataview';
import { DropdownModule } from 'primeng/dropdown';
import { FieldsetModule } from 'primeng/fieldset';
import { MenubarModule } from 'primeng/menubar';
import { InputTextModule } from 'primeng/inputtext';
import {ToastModule} from 'primeng/toast';


@NgModule({
  exports: [
    ButtonModule,
    CarouselModule,
    DataViewModule,
    DropdownModule,
    FieldsetModule,
    MenubarModule,
    InputTextModule,
    ToastModule
  ]
})
export class PrimeNgModule { }
