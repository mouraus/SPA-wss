import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UrlBaseApiService } from '../../servicos/url-base-api.service';
import { CadastroProdutosService } from '../../servicos/cadastro-produtos.service';
import { ProdutoAttModel } from './produtoModel';

@Component({
  selector: 'app-atualiza-produtos',
  templateUrl: './atualiza-produtos.component.html',
  styleUrls: ['./atualiza-produtos.component.scss']
})
export class AtualizaProdutosComponent implements OnInit {

  public errorMensagem: any = { mensagem: "", deuErro: false }


  public imagem?: any
  public categoriasSelect: Array<any> = []
  public subCategoriasSelect: Array<any> = []

  public imageError?: any;
  public isImageSaved?: any;
  public cardImageBase64?: any;

  constructor(private http: HttpClient, private api: UrlBaseApiService, private crudApi: CadastroProdutosService) { }

  public produtos: any = [];

  public produto: ProdutoAttModel = {
    id : 0,
    nome_produto: "",
    nome_categoria: 0,
    nome_subcategoria: 0,
    disponibilidade: false,
    codigo_produto: "",
    id_marca: 1,
    descricao: "",
    destaque: 0
  };

  public deletarProduto(id: any) {
    this.crudApi.deletarProduto(id, this.errorMensagem)
  }

  public atualizarProduto(formulario: any,id:number) {
    console.log(formulario);    
    this.crudApi.atualizarProduto(formulario.value,id)
  }

  private iniciaSelect(){
    this.http.get(this.api.URL_CATEGORIA).subscribe((data: any) => {
      this.categoriasSelect = data
    })
    this.http.get(this.api.URL_SUBCATEGORIA).subscribe((data: any) => {
      this.subCategoriasSelect = data      
    })
  }
  public getProdutoPorId(id: any) {
    this.http.get<ProdutoAttModel>(`${this.api.URL_PRODUTOS}/detalhar/` + id).subscribe(data => {
      this.produto = data
      this.iniciaSelect()
    })
  }
  ngOnInit(): void {
    this.http.get(`${this.api.URL_PRODUTOS}`).subscribe(data => {
      this.produtos = data
    })

  }

}
