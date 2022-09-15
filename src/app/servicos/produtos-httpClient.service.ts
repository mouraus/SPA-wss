import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { ProdutosModel } from '../paginas/pagina-produtos/pagina-produtos.model';
@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

 private BASE_URL :string = "https://wss-dev.herokuapp.com"

  constructor(private http :HttpClient) { }

  public getProdutos(){
    const httpHeaders = new HttpHeaders({
      'content-type':'application/json',
      'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NSwibm9tZSI6IkFkbWluIiwiaWF0IjoxNjYyMTIzMjg0LCJleHAiOjE2NjIxMzA0ODR9.0wSZp1E2gnsI1IJQptF05Q28fVRxad-JHCg-hUdtyL0'
    })
    return this.http.get<ProdutosModel[]>(`${this.BASE_URL}/produtos`,{ headers: httpHeaders })
  }
}