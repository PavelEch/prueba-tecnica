import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Auto, Marca, Inventario } from '../interfaces/auto.interface';

@Injectable({
  providedIn: 'root'
})
export class AutosService {

  marca = Marca;
  inventario = Inventario;

  baseUrl: string = "http://localhost:3000";

  currentAuto: Auto = {
    id:   "",
    anio: 0,
    modelo: '',
    marca: this.marca.Nissan,
    precio: 0,
    inventario: this.inventario.Instock,
    mensualidad: 0
  };

  constructor(
    private http: HttpClient
  ) { }

  getAutos(): Observable<Auto[]> {
    return this.http.get<Auto[]>(`${this.baseUrl}/autos`);
  }

  getAutoId(id:string): Observable<Auto>{
    return this.http.get<Auto>(`${this.baseUrl}/autos/${id}`)
  }

  actualizarAuto(auto:Auto): Observable<Auto> {
    return this.http.put<Auto>(`${ this.baseUrl }/autos/${auto.id}`, auto);
  }

  eliminarAuto(id:string): Observable<any> {
    return this.http.delete<Auto>(`${ this.baseUrl }/autos/${id}`);
  }

  setAuto(auto: Auto): void {
    this.currentAuto = auto;
    localStorage.setItem("historial", JSON.stringify(this.currentAuto));
  }
}
