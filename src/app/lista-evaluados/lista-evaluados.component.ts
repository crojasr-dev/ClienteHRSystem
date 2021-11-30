import { Component } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";


@Component({
  selector: 'app-lista-evaluados',
  templateUrl: './lista-evaluados.component.html',
  styleUrls: ['./lista-evaluados.component.css']
})
export class ListaEvaluadosComponent {

  empleados = ["Juan Perez", "Jorge Inostroza", "Roberto Kakas"]

  ObtenerDatos = async () => {
    const resp = await fetch('http://hrapp.developman.net/Api/Personas', {
      'mode': 'no-cors',
      'headers': {
        'Access-Control-Allow-Origin': '*',
      }
    });
    const data = await resp;
    console.log(data);

  }
}
