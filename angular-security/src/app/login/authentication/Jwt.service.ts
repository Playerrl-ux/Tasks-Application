import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class JWTService{

    expirationTime = 1000 * 60 * 3600;

    getToken(): string | null{
        return localStorage.getItem('tokenJwt');
    }

    getExpiration(): string | null{
        return localStorage.getItem('expiration');
    }

    setToken(token: string): void{
        localStorage.setItem('tokenJwt', token);
        const expirationDate = new Date(new Date().getTime() + this.expirationTime);
        localStorage.setItem('expiration', JSON.stringify(expirationDate));
    }
}    