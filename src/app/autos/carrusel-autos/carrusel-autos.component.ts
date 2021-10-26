import { Component, OnInit } from '@angular/core';
import { Auto } from '../interfaces/auto.interface';
import { AutosService } from '../services/autos.service';

@Component({
  selector: 'app-carrusel-autos',
  templateUrl: './carrusel-autos.component.html',
  styleUrls: ['./carrusel-autos.component.css']
})
export class CarruselAutosComponent implements OnInit {

  autos: Auto[] = [];

  responsiveOptions = [
    {
      "breakpoint": '1920px',
      "numVisible": 4,
      "numScroll": 4
    },
    {
      "breakpoint": '1366px',
      "numVisible": 3,
      "numScroll": 3
    },
    {
      "breakpoint": '768px',
      "numVisible": 2,
      "numScroll": 2
    },
    {
      "breakpoint": '560px',
      "numVisible": 1,
      "numScroll": 1
    }
  ];

  constructor(
    private autosService: AutosService
  ) {
  }

  ngOnInit(): void {

    this.autosService.getAutos()
      .subscribe(res => {

        this.autos = res;
      });
  }

}
