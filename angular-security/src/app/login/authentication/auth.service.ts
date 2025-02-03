import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { TokenResponse } from "./model/token.model";
import { JWTService } from "./Jwt.service";

@Injectable({
    providedIn: 'root'
})
export class AuthService{

    private apiUrl = 'http://localhost:8080';
    

    constructor(private http: HttpClient, private service: JWTService){}

    login(username: string, password: string): Observable<TokenResponse>{

        return this.http.post<TokenResponse>(this.apiUrl+'/auth/login', {
            "username": username,
            "password": password
        });
     }

     
}