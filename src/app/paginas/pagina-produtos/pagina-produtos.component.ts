import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProdutosService } from 'src/app/servicos/produtos.service';
import { ProdutosModel } from './pagina-produtos.model';

@Component({
  selector: 'app-pagina-produtos',
  templateUrl: './pagina-produtos.component.html',
  styleUrls: ['./pagina-produtos.component.scss']
})

export class PaginaProdutosComponent implements OnInit{
  public produtos: ProdutosModel[] = [];
  public produtosSelecao: any[][] = [];
  public produtosDisplay: any = [];
  public produtosPorPagina: number = 12
  public indiceSelecao: number = 0;
  public paginaCarregada: string = 'carregando';
  private selecaoFiltroCategoria: number[] | undefined;
  private parametroBuscar?: string;
  
  constructor(
    private produtosService:ProdutosService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) 
  {}

  ngOnInit(): void {
    this.produtosService.getListaProdutosFiltrados();
    this.produtosService.attFiltros.subscribe(
      (att) => {
        this.produtos = att
        this.organizarProdutos();
      }
    )
  }

  public organizarProdutos(): void{
    this.paginaCarregada = 'carregando';
    this.produtosSelecao = []
    for(let i = 0 ; i < this.produtos.length; i += this.produtosPorPagina){
      this.produtosSelecao.push(this.produtos.slice(i, i + this.produtosPorPagina))
    }
    this.produtosDisplay = this.produtosSelecao[this.indiceSelecao];
    this.produtosDisplay?.length != undefined ? this.paginaCarregada = 'carregada' : this.paginaCarregada = 'semProdutos';
  }

  public proximaSelecao(): void{
    this.indiceSelecao++;
    this.produtosDisplay = this.produtosSelecao[this.indiceSelecao];
  }

  public voltarSelecao(): void{
    this.indiceSelecao--;
    this.produtosDisplay = this.produtosSelecao[this.indiceSelecao];
  }

  public selecionarSelecao(indice: number): void{
    this.indiceSelecao = indice;
    this.produtosDisplay = this.produtosSelecao[this.indiceSelecao];
  }

  public linkPaginaProduto(produtoId: number){
    this.router.navigateByUrl("produto?id=" + produtoId);
  }

}
