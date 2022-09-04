import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './paginas/login/login.component';
import { PaginaInicialComponent } from './paginas/pagina-inicial/pagina-inicial.component';
import { MenuLateralComponent } from './componentes/menu-lateral/menu-lateral.component';



@NgModule({
  declarations: [
    LoginComponent,
    PaginaInicialComponent,
    MenuLateralComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AdminModule { }
