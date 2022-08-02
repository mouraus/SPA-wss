import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PaginaInicialComponent } from './paginas/pagina-inicial/pagina-inicial.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { CarroselComponent } from './componentes/carrosel/carrosel.component';

@NgModule({
  declarations: [
    AppComponent,
    PaginaInicialComponent,
    NavbarComponent,
    CarroselComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
