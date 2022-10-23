import { Injectable } from '@angular/core';
import { FormularioCadastroProdutos } from '../interfaces/formulario-cadastro-produtos';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UrlBaseApiService } from './url-base-api.service';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class CadastroProdutosService {

  private storage: any = localStorage.getItem('jwt')
  private jwt: any = JSON.parse(this.storage)
  private id_imagem: any;
  private httpHeaders = new HttpHeaders(
    {
      'content-type': 'application/json',
      'Authorization': "Bearer " + this.jwt.token
    }
  )

  constructor(private http: HttpClient, private api: UrlBaseApiService, private router: Router) { }

  public cadastrarImagem(base64: any, nome_imagem: string) {
    this.http.post(this.api.URL_UPLOAD, { "nome_imagem": nome_imagem, "imagem": base64 }, { headers: this.httpHeaders }).subscribe(
      (data: any) => {
        this.id_imagem = data.id
      }
    )
  }

  public cadastrarProduto(formularioCadastroProdutos: FormularioCadastroProdutos, errorMensagem: any) {
    if (this.id_imagem !== null) {
      formularioCadastroProdutos.id_imagem = this.id_imagem
    }
    this.http.post(this.api.URL_PRODUTOS, formularioCadastroProdutos, { headers: this.httpHeaders, observe: 'response' })
      .subscribe(
        () => {
          errorMensagem.mensagem = "Produto cadastrado com sucesso!"
          errorMensagem.deuBom = true
          setTimeout(() => {
            errorMensagem.deuBom = false
          }, 5000)


        },
        (error) => {
          if (error.error == "destaque é um campo obrigatório" || error.error == "descricao é um campo obrigatório"
            || error.error == "marca é um campo obrigatório" || error.error == "codigo_produto é um campo obrigatório"
            || error.error == "id_subcategoria deve ser um número positivo" || error.error == "id_categoria deve ser um número positivo"
            || error.error == "nome_produto é um campo obrigatório" || error.error == "Produto já cadastrado"
          ) {
            errorMensagem.mensagem = "Nao foi possivel cadastrar o produto!"
            errorMensagem.deuErro = true

            setTimeout(() => {
              errorMensagem.deuErro = false
            }, 3000)

          }
          if (error.error == "jwt expired") {
            localStorage.clear()
            this.router.navigate(['/admin/login'])
          }

        }
      )
  }


  public deletarProduto(id: number, errorMensagem: any) {
    this.http.delete(`${this.api.URL_PRODUTOS}/` + id, { headers: this.httpHeaders, observe: 'response' }).subscribe(data => {
      errorMensagem.mensagem = data.body
      errorMensagem.deuErro = true
      setTimeout(() => {
        errorMensagem.deuErro = false
      }, 5000)
      window.location.reload();

    })
  }


}
