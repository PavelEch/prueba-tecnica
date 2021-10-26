import { Pipe, PipeTransform } from "@angular/core";


@Pipe({
    name: 'disponibilidad'
})
export class DisponibilidadPipe implements PipeTransform {

    transform(valor: string): string {

        return (valor === "INSTOCK") ? "Modelos Disponibles" : "Modelo No Disponible";

    }

}