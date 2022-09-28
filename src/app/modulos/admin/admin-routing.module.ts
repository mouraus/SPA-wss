import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AtualizaProdutosComponent } from './paginas/atualiza-produtos/atualiza-produtos.component';
import { LoginComponent } from './paginas/login/login.component';
import { PaginaInicialComponent } from './paginas/pagina-inicial/pagina-inicial.component';
import { PatrocinadoresComponent } from './paginas/patrocinadores/patrocinadores.component';
import { ProdutosComponent } from './paginas/produtos/produtos.component';


const routes: Routes = [
  {
    path: 'admin', children: [
      { path: 'login', component: LoginComponent },
      { path: 'dashboard', component: PaginaInicialComponent },
      { path: 'produtos', component: AtualizaProdutosComponent },
      { path: 'adicionar-novo-produto', component: ProdutosComponent },
      { path: 'patrocinadores', component: PatrocinadoresComponent },

    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
