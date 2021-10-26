import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AutoComponent } from './autos/auto/auto.component';
import { CatalogoComponent } from './autos/catalogo/catalogo.component';
import { HomeComponent } from './autos/home/home.component';

const routes: Routes = [
{
  path: '',
  component: HomeComponent
},
{
  path: 'catalogo',
  component: CatalogoComponent
},
{
  path: 'catalogo/:id',
  component: AutoComponent
},
{
  path: '**',
  redirectTo: ''
}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
