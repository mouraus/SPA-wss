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
  public produtosDisplay: ProdutosModel[] = [];
  public produtosPorPagina: number = 12
  public indiceSelecao: number = 0;
  public paginaCarregada: string = 'carregando';
  public parametroBusca: string = '';
  
  constructor(
    private produtosService:ProdutosService,
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
    this.produtosDisplay =  this.eliminaProdutosDuplicados(this.produtosSelecao[this.indiceSelecao]);
    this.produtosDisplay?.length != undefined ? this.paginaCarregada = 'carregada' : this.paginaCarregada = 'semProdutos';
  }

  public proximaSelecao(): void{
    this.indiceSelecao++;
    this.produtosDisplay = this.eliminaProdutosDuplicados(this.produtosSelecao[this.indiceSelecao]);
  }

  public voltarSelecao(): void{
    this.indiceSelecao--;
    this.produtosDisplay =  this.eliminaProdutosDuplicados(this.produtosSelecao[this.indiceSelecao]);
  }

  public selecionarSelecao(indice: number): void{
    this.indiceSelecao = indice;
    this.produtosDisplay =  this.eliminaProdutosDuplicados(this.produtosSelecao[this.indiceSelecao]);
  }

  public linkPaginaProduto(produtoId: number){
    this.router.navigateByUrl("produto?id=" + produtoId);
  }

  private eliminaProdutosDuplicados(inputLista: ProdutosModel[]): ProdutosModel[]{
    return inputLista.reduce((acc: ProdutosModel[], current: ProdutosModel) => {
      var x:any = acc.find(item => item.id === current.id);
      if(!x) {
        return acc.concat([current]);
      } 
      else {
        return acc;
      }
    },[]);
  }


  public buscarProdutos(): void{
    this.produtosService.setParametroBusca(this.parametroBusca);
    this.router.navigateByUrl(`/produtos`)
  }

}
