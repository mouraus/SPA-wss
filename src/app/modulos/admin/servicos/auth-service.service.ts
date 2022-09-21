import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })

export class AuthService {
    private currentUserSubject: BehaviorSubject<any>;
    public currentUser: Observable<any>;
    
    private jwt:any = localStorage.getItem('jwt');
    constructor(private http: HttpClient) {
        this.currentUserSubject = new BehaviorSubject(JSON.parse(this.jwt));
        this.currentUser = this.currentUserSubject.asObservable();
    }

    public get currentUserValue(): any {
        return this.currentUserSubject.value;
    }

    login(email: string, senha: string) {
        return this.http.post<any>(`https://wss-dev.herokuapp.com/login`, { email, senha })
            .pipe(map(user => {
                localStorage.setItem('jwt', JSON.stringify(user));
                this.currentUserSubject.next(user);
                console.log(user);   
                return user;
            }));
            
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        this.currentUserSubject.next(null);
    }
}