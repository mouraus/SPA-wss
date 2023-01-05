import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
@Injectable({ providedIn: 'root' })

export class AuthService {
    
    private jwt:any = localStorage.getItem('jwt');
    constructor(private http: HttpClient, private router:Router) {}


    login(email: string, senha: string, erro:any) {
        return this.http.post<any>(`https://api-prod-wss.herokuapp.com/login`, { email, senha }).subscribe(
            (data) => {
                console.log(data);
                localStorage.setItem("jwt", JSON.stringify(data))
                this.router.navigate(['/admin/dashboard'])

            },
            (error) => {
            console.log(error);
              if (error.status == 400 ) {
                erro.mensagem = error.error
                erro.deuErro = true
                setTimeout(() => {
                    erro.deuErro = false
                }, 5000)
    
              }
            }
          )  
    }

    logout() {
        localStorage.removeItem('jwt');
        this.router.navigate(['/admin/login'])
    }
}