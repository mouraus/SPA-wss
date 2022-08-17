import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PaginaInicialComponent } from './paginas/pagina-inicial/pagina-inicial.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { CarroselComponent } from './componentes/carrosel/carrosel.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { BotaoWhatsappComponent } from './componentes/botao-whatsapp/botao-whatsapp.component';
import { PaginaProdutoComponent } from './paginas/pagina-produto/pagina-produto.component';

@NgModule({
  declarations: [
    AppComponent,
    PaginaInicialComponent,
    NavbarComponent,
    CarroselComponent,
    FooterComponent,
    BotaoWhatsappComponent,
    PaginaProdutoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
