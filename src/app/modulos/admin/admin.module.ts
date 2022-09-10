import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './paginas/login/login.component';
import { PaginaInicialComponent } from './paginas/pagina-inicial/pagina-inicial.component';
import { MenuLateralComponent } from './componentes/menu-lateral/menu-lateral.component';
import { FormsModule, ReactiveFormsModule  }  from '@angular/forms';



@NgModule({
  declarations: [
    LoginComponent,
    PaginaInicialComponent,
    MenuLateralComponent
  ],
  imports: [
    CommonModule,
    FormsModule,ReactiveFormsModule
  ]
})
export class AdminModule { }
