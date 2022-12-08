import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Router } from '@angular/router';
import { ContatoModel } from '../paginas/contato/contato.model';
@Injectable({
  providedIn: 'root'
})
export class EmailService {
  private storage: any = localStorage.getItem('jwt')
  private jwt: any = JSON.parse(this.storage)
  private httpHeaders = new HttpHeaders(
    {
      'content-type': 'application/json',
      'Authorization': "Bearer " + this.jwt.token
    }
  )
  private BASE_URL :string = "https://wss-dev.herokuapp.com";
  constructor(private http :HttpClient, private router: Router) { }

  public enviarEmail(email: ContatoModel){
    return this.http.post<ContatoModel>(`${this.BASE_URL}`,email,{ headers: this.httpHeaders })
  }


}