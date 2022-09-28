import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { ProdutosModel } from '../paginas/pagina-produtos/pagina-produtos.model';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  private BASE_URL :string = "https://wss-dev.herokuapp.com";

  private HTTP_HEADER_NO_AUTH: HttpHeaders = new HttpHeaders({
    'content-type':'application/json'
  })

  constructor(private http :HttpClient, private router: Router) { }

  public getProdutos(){
    return this.http.get<ProdutosModel[]>(`${this.BASE_URL}/produtos`,{ headers: this.HTTP_HEADER_NO_AUTH })
  }

  public getCategorias(){
    return this.http.get<any>(`${this.BASE_URL}/categorias`,{ headers: this.HTTP_HEADER_NO_AUTH })
  }

  public setFiltros(inputFiltros: number[]){
    console.log(inputFiltros)
    if(inputFiltros.length == 0){
      window.location.href = `/produtos`;
    }
   else{
    window.location.href = `/produtos?categorias=${inputFiltros}`;
   } 
  }

  public getProdutoEspecifico(id: number){
    return this.http.get<ProdutosModel>(`${this.BASE_URL}/produtos/detalhar/${id}`,{ headers: this.HTTP_HEADER_NO_AUTH })
  }
}