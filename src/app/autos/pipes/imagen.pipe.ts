import { Pipe, PipeTransform } from '@angular/core';
import { Auto } from '../interfaces/auto.interface';

@Pipe({
  name: 'imagen'
})
export class ImagenPipe implements PipeTransform {

  transform(auto: Auto): string {
    return `../assets/sideways_cars/${auto.id}.png`;
  }

}
