import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApirequestService {

  constructor(private http: HttpClient) { }

  public getEmpleados() {

    const httpOptions = {
      params: {

      },
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': "*",
      })
    };
    return this.http.get(environment.endpoint.HR_apiEmpleados)
  }

}
