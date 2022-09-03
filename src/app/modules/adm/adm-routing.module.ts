import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaginaIncialAdmComponent } from './paginas/pagina-incial-adm/pagina-incial-adm.component';

const routes: Routes = [
  { path: '', component: PaginaIncialAdmComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
