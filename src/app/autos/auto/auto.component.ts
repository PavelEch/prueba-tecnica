import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Auto, Marca, Inventario, Disponibilidad, MarcaDropdown } from '../interfaces/auto.interface';
import { AutosService } from '../services/autos.service';
import { switchMap } from "rxjs/operators";
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-auto',
  templateUrl: './auto.component.html',
  styleUrls: ['./auto.component.css'],
  providers: [MessageService]
})
export class AutoComponent implements OnInit {

  modeloValido: boolean = true;
  marcaValida: boolean = true;
  anioValido: boolean = true;
  precioValido: boolean = true;
  mensualidadValida: boolean = true;
  disponibilidadValida: boolean = true;

  marca = Marca;
  inventario = Inventario;

  autoDisponible: string = "";
  marcaSeleccionada: string = "";

  auto: Auto = {
    id: '',
    anio: 0,
    modelo: '',
    marca: this.marca.Nissan,
    precio: 0,
    inventario: this.inventario.Instock,
    mensualidad: 0
  };

  disponibilidad: Disponibilidad[];
  _marca: MarcaDropdown[];

  constructor(
    private autoService: AutosService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private messageService: MessageService
  ) {

    this.disponibilidad = [
      {
        disponibilidad: "Disponible",
        code: "Disponible"
      },
      {
        disponibilidad: "No Disponible",
        code: "Disponible"
      }
    ];

    this._marca = [
      {
        marca: "Nissan",
        code: "Nissan"
      },
      {
        marca: "Volkswagen",
        code: "Volkswagen"
      }
    ];

    if (localStorage.getItem('historial')) {
      this.auto = JSON.parse(localStorage.getItem('historial')!);
    }

  }

  ngOnInit(): void {

    this.activatedRoute.params
      .pipe(
        switchMap(({ id }) => this.autoService.getAutoId(id))
      )
      .subscribe(auto => this.auto = auto);

    this.autoService.setAuto(this.auto);

  }

  actualizarAuto() {

    if (this.auto.modelo.trim().length === 0) {
      this.modeloValido = false;
      return;
    } else {
      this.modeloValido = true;
    }

    if (this.marcaSeleccionada.trim().length !== 0) {
      const nuevaMarca = (this.marcaSeleccionada === "Nissan") ? this.marca.Nissan : this.marca.Volkswagen;
      this.auto.marca = nuevaMarca;
      this.marcaValida = true;
    } else {
      this.marcaValida = false;
      return;
    }

    if (this.auto.anio < 2000 || this.auto.anio > 2022) {
      this.anioValido = false;
      return;
    } else {
      this.anioValido = true;
    }

    if (this.auto.precio < 149999 || isNaN(this.auto.precio)) {
      this.precioValido = false;
      return;
    } else {
      this.precioValido = true;
    }

    if (this.auto.mensualidad < 1999 || isNaN(this.auto.mensualidad)) {
      this.mensualidadValida = false;
      return;
    } else {
      this.mensualidadValida = true;
    }

    if (this.autoDisponible.trim().length !== 0) {
      const InStock = (this.autoDisponible === "Disponible") ? this.inventario.Instock : this.inventario.Outofstock;
      this.auto.inventario = InStock;
      this.disponibilidadValida = true;
    } else {
      this.disponibilidadValida = false;
      return;
    }

    this.autoService.actualizarAuto(this.auto)
      .subscribe(auto => console.log('Actualizado', auto));

    this.showSuccess();

  }

  eliminarAuto() {
    let answer = confirm("Deseas eliminar este Auto?");

    if (answer) {
      this.autoService.eliminarAuto(this.auto.id)
        .subscribe(resp => {
          this.router.navigate(['/catalogo']);
        })
    }
  }

  showSuccess() {
    this.messageService.add({ severity: 'success', summary: 'Auto Actualizado', detail: 'Se guardaron los cambios con éxito' });
  }
}
