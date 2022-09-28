import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Router } from '@angular/router';
import { ContatoModel } from '../paginas/contato/contato.model';
@Injectable({
  providedIn: 'root'
})
export class EmailService {

  private BASE_URL :string = "https://wss-dev.herokuapp.com";

  private HTTP_HEADER_NO_AUTH: HttpHeaders = new HttpHeaders({
    'content-type':'application/json'
  })

  constructor(private http :HttpClient, private router: Router) { }

  public enviarEmail(email: ContatoModel){
    console.log(email);
    // return this.http.post<ContatoModel>(`${this.BASE_URL}`,email,{ headers: this.HTTP_HEADER_NO_AUTH })
  }


}