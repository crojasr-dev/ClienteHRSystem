import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-lista-evaluados',
  templateUrl: './lista-evaluados.component.html',
  styleUrls: ['./lista-evaluados.component.css']
})

export class ListaEvaluadosComponent implements OnInit {

  constructor(private peticion: HttpClient) { }
  ngOnInit(): void {
   this.ObtenerDatos();
  }
  empleados: Persona[] = [];

  ObtenerDatos() {
    // this.peticion.get('http://hrapp.developman.net/Api/Personas')
    this.peticion.get<Persona[]>('https://localhost:44336//Api/Personas')
      .subscribe(data => {
        this.empleados = data.sort();
      })
  }

}
export interface Persona {
  ID: number;
  NOMBRE: string;
  RUT: string;
  AREA: string;
  CARGO: string;
}
