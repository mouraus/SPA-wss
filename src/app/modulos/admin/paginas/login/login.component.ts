import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../servicos/auth-service.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private http: HttpClient, private router: Router, private auth: AuthService) { }
  public email: string = ""
  public senha: string = ""
  public erro: any = {mensagem:"", deuErro:false}

  login(email: any, senha: any): void {
    console.log({ email: email, senha: senha });
    
    this.auth.login(email, senha , this.erro)
      }
    
  ngOnInit(): void {
  }

}
