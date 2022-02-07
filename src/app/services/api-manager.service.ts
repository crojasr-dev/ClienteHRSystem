import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ApirequestService } from './apirequest.service';




@Injectable({
  providedIn: 'root'
})
export class ApiManagerService {

private oDatosEmpleados=new BehaviorSubject(null);



  constructor(private lala: ApirequestService) { }

  public ObtenerEmpleados(){
   const datos= this.lala.getEmpleados();
   return datos;
  }

}
