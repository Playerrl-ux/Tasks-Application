import { Injectable } from "@angular/core";
import { JWTService } from "./Jwt.service";
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from "rxjs";

@Injectable()
export class AuthInterceptor implements HttpInterceptor{
    
    constructor(private tokenService: JWTService) {}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // Obter o token do serviço AuthService
        const token = this.tokenService.getToken();

        // Clonar a requisição para adicionar o cabeçalho Authorization se o token existir
        if (token) {
        request = request.clone({
            setHeaders: {
            Authorization: `Bearer ${token}`
            }
        });
        }

        // Passar a requisição para o próximo handler
        return next.handle(request);
    }
}