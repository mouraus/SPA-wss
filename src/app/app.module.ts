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
import { PaginaProdutosComponent } from './paginas/pagina-produtos/pagina-produtos.component';
import { CardComponent } from './componentes/card/card.component';
import { HttpClientModule } from '@angular/common/http';
import { ModalFiltroComponent } from './componentes/modal-filtro/modal-filtro.component';
import { MenuFiltroProdutosComponent } from './componentes/menu-filtro-produtos/menu-filtro-produtos.component';

@NgModule({
  declarations: [
    AppComponent,
    PaginaInicialComponent,
    NavbarComponent,
    CarroselComponent,
    FooterComponent,
    BotaoWhatsappComponent,
    PaginaProdutoComponent,
    PaginaProdutosComponent,
    CardComponent,
    ModalFiltroComponent,
    MenuFiltroProdutosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
