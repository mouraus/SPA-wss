import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UrlBaseApiService } from '../../servicos/url-base-api.service';
import { CadastroProdutosService } from '../../servicos/cadastro-produtos.service';
import { FormularioCadastroProdutos } from '../../interfaces/formulario-cadastro-produtos';
import { ProdutoAttModel } from './produtoModel';

@Component({
  selector: 'app-atualiza-produtos',
  templateUrl: './atualiza-produtos.component.html',
  styleUrls: ['./atualiza-produtos.component.scss']
})
export class AtualizaProdutosComponent implements OnInit {

  public errorMensagem: any = { mensagem: "", deuErro: false }

  // public nome_produto: string = ""
  // public categoria: number = 0
  // public subcategoria: number = 0
  // public disponibilidade: boolean = false
  // public codigo_produto: string = ""
  // public marca: string = ""
  // public descricao: string = ""
  // public destaque?: any


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
    marca: "",
    descricao: "",
    destaque: 0
  };

  public setFormulario(formulario: any) {

  }
  public deletarProduto(id: any) {
    this.crudApi.deletarProduto(id, this.errorMensagem)
  }

  public atualizarProduto(formulario: any,id:number) {
    console.log(formulario);    
    this.crudApi.atualizarProduto(formulario.value,id)
  }

  public getProdutoPorId(id: any) {
    this.http.get<ProdutoAttModel>(`${this.api.URL_PRODUTOS}/` + id).subscribe(data => {
      this.produto = data
      console.log(this.produto);
    })
  }
  ngOnInit(): void {
    this.http.get(`${this.api.URL_PRODUTOS}`).subscribe(data => {
      this.produtos = data
      console.log(this.produtos);
    })

  }

}
