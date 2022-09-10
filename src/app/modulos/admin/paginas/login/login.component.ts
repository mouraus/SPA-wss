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

  constructor(private http :HttpClient, private router: Router, private auth:AuthService) {}
  public email:string=""
  public senha: string =""

  private converter(valor:any):any{
  return JSON.parse(valor)
 }


  private BASE_URL :string = "https://wss-dev.herokuapp.com"
  public usuario:any;
  login(email:any,senha:any): void {
   console.log({email:email,senha:senha});
   
    // this.http.post(`${this.BASE_URL}/login`, {email:email,senha:senha}).subscribe(
    //   (data) => {
    //     this.usuario = data
    //     localStorage.setItem("jwt",JSON.stringify(this.usuario))
    //     if(this.usuario.token.length > 0 || this.usuario.token !== ""){
    //       this.router.navigate(['/admin/dashboard'])
    //     } 
        
    //   },
    //   (error) =>{
    //     // console.log(this.token);
    //     // console.log(localStorage.getItem("jwt"));
    //     console.log(error)
    //   }
    // )
    this.auth.login(email,senha).subscribe(
        (data) => {
         this.router.navigate(['/admin/dashboard'])
        },
        (error) =>{
          // console.log(this.token);
          // console.log(localStorage.getItem("jwt"));
          console.log(error)
        }
      )
  }
  ngOnInit(): void {
    if(this.usuario !== ""){
      this.router.navigate(['/admin/dashboard'])
    } 
  }

}
