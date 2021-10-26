import { Pipe, PipeTransform } from '@angular/core';
import { Auto } from '../interfaces/auto.interface';

@Pipe({
  name: 'img_principal'
})
export class ImagenPrincipalPipe implements PipeTransform {

  transform(auto: Auto): string {

    return `../assets/cars/${auto.id}.jpg`;
  }

}
