import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaginaInicialComponent } from './paginas/pagina-inicial/pagina-inicial.component';
import { PaginaProdutoComponent } from './paginas/pagina-produto/pagina-produto.component';

const routes: Routes = [
  { path: '', component: PaginaInicialComponent },
  { path: 'produto', component: PaginaProdutoComponent },
  { path: '*', component: PaginaInicialComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
