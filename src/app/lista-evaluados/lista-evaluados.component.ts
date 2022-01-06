export interface PersonaList {
  ID: number;
  nombre: string;
  rut: string;
  idCargo: number;
  cargo:string;
}

import { Component, Input, OnInit } from '@angular/core';
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

  empleados: PersonaList[] = [];

  showFormulario: number = 0;

  @Input() caca:string='';
  
  // valor:string="valor local";

  ObtenerDatos() {
    this.peticion.get<PersonaList[]>('https://localhost:44374/api/Persona')
      .subscribe(data => {
        this.empleados = data;
        console.log(this.empleados);
      })
    return this.empleados;
  }

  mostrarFormulario(e: PersonaList): void {
    this.showFormulario=e.idCargo;
    console.log(e.idCargo);
    
  }

}
