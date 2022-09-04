import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './paginas/login/login.component';
import { PaginaInicialComponent } from './paginas/pagina-inicial/pagina-inicial.component';


const routes: Routes = [
  {
    path: 'admin', children: [
      { path: 'login', component: LoginComponent },
      { path: 'dashboard', component: PaginaInicialComponent }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
