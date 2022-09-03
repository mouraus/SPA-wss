import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaginaIncialAdmComponent } from './modules/adm/paginas/pagina-incial-adm/pagina-incial-adm.component';
import { ContatoComponent } from './paginas/contato/contato.component';
import { PaginaInicialComponent } from './paginas/pagina-inicial/pagina-inicial.component';
import { PaginaProdutoComponent } from './paginas/pagina-produto/pagina-produto.component';
import { PaginaProdutosComponent } from './paginas/pagina-produtos/pagina-produtos.component';

const routes: Routes = [
  { path: '', component: PaginaInicialComponent },
  { path: 'produto', component: PaginaProdutoComponent },
  { path: 'produtos', component: PaginaProdutosComponent },
  { path: 'contato', component: ContatoComponent },
  { path: 'adm', component: PaginaIncialAdmComponent},
  { path: '*', component: PaginaInicialComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
