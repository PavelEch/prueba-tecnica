import { Component, OnInit } from '@angular/core';
import { Auto } from '../interfaces/auto.interface';
import { AutosService } from '../services/autos.service';

@Component({
	selector: 'app-catalogo',
	templateUrl: './catalogo.component.html',
	styleUrls: ['./catalogo.component.scss']
})
export class CatalogoComponent implements OnInit {

	autos: Auto[] = [];

	constructor(
		private autosService: AutosService
	) {

	}

	ngOnInit(): void {
		this.autosService.getAutos().subscribe(res => {
			this.autos = res;
		});
	}

}
