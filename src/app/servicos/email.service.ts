import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Router } from '@angular/router';
import { ContatoModel } from '../paginas/contato/contato.model';
@Injectable({
  providedIn: 'root'
})
export class EmailService {
  private storage: any = localStorage.getItem('jwt')
  private httpHeaders = new HttpHeaders(
    {
      'content-type': 'application/json',
    }
  )
  private BASE_URL :string = "https://api-prod-wss.herokuapp.com/contato";
  constructor(private http :HttpClient, private router: Router) { }

  public enviarEmail(email: any){
    return this.http.post<ContatoModel>(`${this.BASE_URL}`,email.value,{ headers: this.httpHeaders }).subscribe((data)=>{
    })
  }


}
