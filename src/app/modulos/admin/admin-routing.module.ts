import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AtualizaProdutosComponent } from './paginas/atualiza-produtos/atualiza-produtos.component';
import { LoginComponent } from './paginas/login/login.component';
import { PaginaInicialComponent } from './paginas/pagina-inicial/pagina-inicial.component';
import { PatrocinadoresComponent } from './paginas/patrocinadores/patrocinadores.component';
import { ProdutosComponent } from './paginas/produtos/produtos.component';
import { AuthGuard } from './servicos/auth-guard-service.service';


const routes: Routes = [
  {
    path: 'admin', children: [
      { path: 'login', component: LoginComponent },
      { path: 'dashboard', component: PaginaInicialComponent,canActivate:[AuthGuard] },
      { path: 'produtos', component: AtualizaProdutosComponent,canActivate:[AuthGuard] },
      { path: 'adicionar-novo-produto', component: ProdutosComponent,canActivate:[AuthGuard] },
      { path: 'patrocinadores', component: PatrocinadoresComponent,canActivate:[AuthGuard] },

    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
