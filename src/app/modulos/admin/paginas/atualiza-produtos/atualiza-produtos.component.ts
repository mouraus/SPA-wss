import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UrlBaseApiService } from '../../servicos/url-base-api.service';
import { CadastroProdutosService } from '../../servicos/cadastro-produtos.service';
import { FormularioCadastroProdutos } from '../../interfaces/formulario-cadastro-produtos';

@Component({
  selector: 'app-atualiza-produtos',
  templateUrl: './atualiza-produtos.component.html',
  styleUrls: ['./atualiza-produtos.component.scss']
})
export class AtualizaProdutosComponent implements OnInit {

  public errorMensagem: any = { mensagem: "", deuErro: false }

  public nome_produto: string = ""
  public categoria: number = 0
  public subcategoria: number = 0
  public disponibilidade: boolean = false
  public codigo_produto: string = ""
  public marca: string = ""
  public descricao: string = ""
  public destaque?: any

  public novaCategoria: string = "";
  public novaSubCategoria: string = "";

  public imagem?: any
  public categoriasSelect: Array<any> = []
  public subCategoriasSelect: Array<any> = []

  public imageError?: any;
  public isImageSaved?: any;
  public cardImageBase64?: any;

  constructor(private http: HttpClient, private api: UrlBaseApiService, private crudApi: CadastroProdutosService) { }

  public produtos: any = []
  public produto: any
  public formulario:FormularioCadastroProdutos = {
    nome_produto : "",
    codigo_produto : "",
    descricao : "",
    marca : "",
    destaque : 0,
    id_imagem : 0,
    id_categoria : 0,
    id_subcategoria : 0,
    disponibilidade : false,

  }
  public setFormulario(formulario: FormularioCadastroProdutos, nome_produto: string, destaque: number, categoria: number, subcategoria: number, disponibilidade: boolean, codigo_produto: string, marca: string, descricao: string, id_imagem:number) {
    if (this.formulario !== null) {
        formulario.nome_produto = nome_produto,
        formulario.disponibilidade = disponibilidade,
        formulario.codigo_produto = codigo_produto,
        formulario.descricao = descricao,
        formulario.marca = marca,
        formulario.destaque = destaque,
        formulario.id_imagem = id_imagem
        formulario.id_categoria = categoria,
        formulario.id_subcategoria = subcategoria
      }
  }
  public deletarProduto(id: any) {
    this.crudApi.deletarProduto(id, this.errorMensagem)
  }

  public atualizarProduto(nome_produto: string, destaque: number, categoria: any, subcategoria: any, disponibilidade: boolean, codigo_produto: string, marca: string, descricao: string,id:number){
    this.setFormulario(this.formulario,nome_produto, destaque, categoria, subcategoria, disponibilidade, codigo_produto, marca, descricao,0)
    this.crudApi.atualizarProduto(this.formulario,id)
  }

  public getProdutoPorId(id: any) {
    this.http.get(`${this.api.URL_PRODUTOS}/` + id).subscribe(data => {
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
