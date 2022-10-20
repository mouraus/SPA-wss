import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProdutosService } from 'src/app/servicos/produtos.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(
    private router: Router,
    private produtosService:ProdutosService) { }

  ngOnInit(): void {
  }

  public parametroBusca: string = '';

  public buscarProdutos(): void{
    this.produtosService.setParametroBusca(this.parametroBusca)
    this.router.navigateByUrl(`/produtos`)
  }

  public navegarPaginaProdutos(){
    this.produtosService.setFiltros([]);
    window.location.href = `/produtos`;
  }
}
