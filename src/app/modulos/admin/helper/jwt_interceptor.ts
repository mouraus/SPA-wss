import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../servicos/auth-service.service';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
    constructor(private authenticationService: AuthService) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        const uruario = this.authenticationService.currentUserValue;
        const estaLogado = uruario && uruario.token;
        if (estaLogado){
            request = request.clone({
                setHeaders: {
                    Authorization: `${uruario.token}`
                }
            });
        }

        return next.handle(request);
    }
}