import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import {Location} from '@angular/common';
import { ProdutosService } from 'src/app/servicos/produtos.service';
import { ProdutosModel } from '../pagina-produtos/pagina-produtos.model';

@Component({
  selector: 'app-pagina-produto',
  templateUrl: './pagina-produto.component.html',
  styleUrls: ['./pagina-produto.component.scss']
})
export class PaginaProdutoComponent implements OnInit {

  constructor(
    private produtosService:ProdutosService,
    private activatedRoute: ActivatedRoute,
    private location: Location
  ) { }

  public idProduto?: Params;
  public produto?: ProdutosModel;

  ngOnInit(): void {
    this.getProdutoUrl();
  }

  getProdutoUrl(){
    this.activatedRoute.queryParams.subscribe(param => {
      this.idProduto = param['id'];
    })
    console.log(this.idProduto)
    this.produtosService.getProdutoEspecifico(Number(this.idProduto)).subscribe(
      (data: ProdutosModel) => {
        this.produto = data;
        console.log(data)
      }
    )
  }

  public voltarNavegacao(): void{
    this.location.back()
  }
}
