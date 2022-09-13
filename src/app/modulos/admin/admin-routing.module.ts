import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './paginas/login/login.component';
import { PaginaInicialComponent } from './paginas/pagina-inicial/pagina-inicial.component';
import { ProdutosComponent } from './paginas/produtos/produtos.component';
import { AuthGuard } from './servicos/auth-guard-service.service';


const routes: Routes = [
  {
    path: 'admin', children: [
      { path: 'login', component: LoginComponent },
      { path: 'dashboard', component: PaginaInicialComponent,canActivate:[AuthGuard] },
      { path: 'produtos', component: ProdutosComponent,canActivate:[AuthGuard] }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
