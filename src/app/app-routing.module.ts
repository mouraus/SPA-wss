import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContatoComponent } from './paginas/contato/contato.component';
import { PaginaInicialComponent } from './paginas/pagina-inicial/pagina-inicial.component';
import { PaginaParceirosComponent } from './paginas/pagina-parceiros/pagina-parceiros.component';
import { PaginaProdutoComponent } from './paginas/pagina-produto/pagina-produto.component';
import { PaginaProdutosComponent } from './paginas/pagina-produtos/pagina-produtos.component';

const routes: Routes = [
  { path: '', component: PaginaInicialComponent },
  { path: 'produto', component: PaginaProdutoComponent },
  { path: 'produtos', component: PaginaProdutosComponent },
  { path: 'contato', component: ContatoComponent },
  { path: 'parceiros', component: PaginaParceirosComponent },
  { path: '*', component: PaginaInicialComponent },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
