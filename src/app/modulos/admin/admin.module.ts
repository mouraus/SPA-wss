import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './paginas/login/login.component';
import { PaginaInicialComponent } from './paginas/pagina-inicial/pagina-inicial.component';
import { FormsModule, ReactiveFormsModule  }  from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavBarComponent } from './componentes/nav-bar/nav-bar.component';
import { AdminRoutingModule } from './admin-routing.module';
import { ProdutosComponent } from './paginas/produtos/produtos.component';
import { FormularioCadastroProdutosComponent } from './componentes/formulario-cadastro-produtos/formulario-cadastro-produtos.component';
import { JwtInterceptor } from './helper/jwt_interceptor';
import { AtualizaProdutosComponent } from './paginas/atualiza-produtos/atualiza-produtos.component';

@NgModule({
  declarations: [
    LoginComponent,
    PaginaInicialComponent,
    NavBarComponent  ,
    ProdutosComponent,
    FormularioCadastroProdutosComponent,
    AtualizaProdutosComponent,
    ],
  imports: [
    CommonModule,
    FormsModule,ReactiveFormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    AdminRoutingModule
  ],
  providers:[JwtInterceptor]
})
export class AdminModule { }
