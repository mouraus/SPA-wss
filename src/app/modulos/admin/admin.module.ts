import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './paginas/login/login.component';
import { PaginaInicialComponent } from './paginas/pagina-inicial/pagina-inicial.component';



@NgModule({
  declarations: [
    LoginComponent,
    PaginaInicialComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AdminModule { }
