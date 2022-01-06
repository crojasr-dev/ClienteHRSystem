import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CabeceraComponent } from './cabecera/cabecera.component';
import { ListaEvaluadosComponent } from './lista-evaluados/lista-evaluados.component';
import { HttpClientModule } from '@angular/common/http';
import { Form1Component } from './form1/form1.component';
import { Form2Component } from './form2/form2.component';

@NgModule({
  declarations: [
    AppComponent,
    CabeceraComponent,
    ListaEvaluadosComponent,
    Form1Component,
    Form2Component,
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
