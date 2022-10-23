import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UrlBaseApiService } from '../../servicos/url-base-api.service';
import { CadastroProdutosService } from '../../servicos/cadastro-produtos.service';
import { ProdutoAttModel } from './produtoModel';
import { HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-atualiza-produtos',
  templateUrl: './atualiza-produtos.component.html',
  styleUrls: ['./atualiza-produtos.component.scss']
})
export class AtualizaProdutosComponent implements OnInit {
  public errorMensagem: any = { mensagem: "", deuErro: false }
  public storage = JSON.parse(localStorage.getItem('jwt') || '{}')

  private httpHeaders = new HttpHeaders({
    'content-type': 'application/json',
    'Authorization': "Bearer " + this.storage.token
  })
  public imagem?: any
  public categoriasSelect: Array<any> = []
  public subCategoriasSelect: Array<any> = []
  public modalCategoria: boolean = false
  public imageError?: any;
  public isImageSaved?: any;
  public cardImageBase64?: any;


  public novaCategoria: string = "algo"

  constructor(private http: HttpClient, private api: UrlBaseApiService, private crudApi: CadastroProdutosService, private router: Router) { }

  public produtos: any = [];

  public produto: ProdutoAttModel = {
    id: 0,
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

  public setaModal(modalCategoria: boolean) {
    this.modalCategoria = modalCategoria
  }
  public cadastrarCategoria(c: any) {
    this.http.post(this.api.URL_CATEGORIA, { nome_categoria: c.value.novaCategoria }, { headers: this.httpHeaders, observe: 'response' })
      .subscribe(
        () => {
          this.iniciaSelect()
        },
        (error) => {
          if (error.error == "jwt expired") {
            localStorage.clear()
            this.router.navigate(['/admin/login'])
          }
        }
      )

  }
  public deletarCategoria(c: any) {
    this.http.delete(this.api.URL_CATEGORIA + `${c.value.id_categoriaDeletada}`, { headers: this.httpHeaders, observe: 'response' }).subscribe(
      () => {
        this.iniciaSelect()
      }
      , (error) => {
        if (error.error == "jwt expired") {
          localStorage.clear()
          this.router.navigate(['/admin/login'])
        }
      })
  }

  public atualizarCategoria(c: any) {
    this.http.put(this.api.URL_CATEGORIA + `${c.value.id_categoria}`, { nome_categoria: c.value.categoriaAtualizada }, { headers: this.httpHeaders, observe: 'response' })
      .subscribe(
        () => {
          this.iniciaSelect()
        },
        (error) => {
          if (error.error == "jwt expired") {
            localStorage.clear()
            this.router.navigate(['/admin/login'])
          }
        })
  }

  public atualizarProduto(formulario: any, id: number) {
    this.http.put(`${this.api.URL_PRODUTOS}/` + id, formulario.value, { headers: this.httpHeaders, observe: 'response' }).subscribe(
      (data) => {
        if (data.ok) {
          this.http.get(`${this.api.URL_PRODUTOS}`).subscribe(res => {
            this.produtos = res
          })
        }
      }, (error) => {
        if (error.error == "jwt expired") {
          localStorage.clear()
          this.router.navigate(['/admin/login'])
        }
      })
  }

  private iniciaSelect() {
    this.http.get(this.api.URL_CATEGORIA).subscribe((data: any) => {
      this.categoriasSelect = data
    })

  }
  public getProdutoPorId(id: any) {
    this.iniciaSelect()
    this.http.get<ProdutoAttModel>(`${this.api.URL_PRODUTOS}/detalhar/` + id).subscribe(data => {
      this.produto = data
    })
  }
  ngOnInit(): void {
    this.iniciaSelect()
    this.http.get(`${this.api.URL_PRODUTOS}`).subscribe(data => {
      this.produtos = data
    })

  }

}
