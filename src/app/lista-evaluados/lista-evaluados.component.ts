export interface PersonaList {
  ID: number;
  nombre: string;
  rut: string;
  idCargo: number;
  cargo:string;
}

import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { ApiManagerService } from '../services/api-manager.service';

@Component({
  selector: 'app-lista-evaluados',
  templateUrl: './lista-evaluados.component.html',
  styleUrls: ['./lista-evaluados.component.css']
})

export class ListaEvaluadosComponent implements OnInit {

  constructor(private apiman:ApiManagerService) { }
  ngOnInit() {
   this.apiman.ObtenerEmpleados()
   .subscribe(res=>{
     console.log(res);
     
   });
  }

  empleados: PersonaList[] = [];

  showFormulario: number = 0;

  mostrarFormulario(e: PersonaList): void {
    this.showFormulario=e.idCargo;
    console.log(e.idCargo);
    
  }

}
