import { Component, OnInit } from '@angular/core';
import { ProdutosService } from 'src/app/servicos/produtos-httpClient.service';
import { ProdutosModel } from './pagina-produtos.model';

@Component({
  selector: 'app-pagina-produtos',
  templateUrl: './pagina-produtos.component.html',
  styleUrls: ['./pagina-produtos.component.scss']
})

export class PaginaProdutosComponent implements OnInit {
  public categorias : Array<String> = []
  public patrocinadores: Array<String> = ['Megatron','Multilaser','FC', 'AGL']
  public produtos: ProdutosModel[] = [];
  public produtosSelecao: any = [];
  public produtosDisplay: any = [];
  public produtosPorPagina: number = 12
  public indiceSelecao: number = 0;
  
  constructor(
    private produtosService:ProdutosService
  ) { }

  ngOnInit(): void {
    this.produtosService.getProdutos().subscribe(
      (data: ProdutosModel[]) => {
        this.produtos = data;
        this.organizarProdutos()
      }
    )
  }

  public organizarProdutos(): void{
    for(let i = 0 ; i < this.produtos.length; i += this.produtosPorPagina){
      this.produtosSelecao.push(this.produtos.slice(i, i + this.produtosPorPagina))
    }
    this.produtosDisplay = this.produtosSelecao[this.indiceSelecao];
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

}
