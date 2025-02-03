import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';
import { JWTService } from '../Jwt.service';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
  const jwtService = inject(JWTService); // Injeta o AuthService
  const router = inject(Router); // Injeta o Router
  let expiration: null | string | undefined = jwtService.getExpiration();
  expiration = expiration?.substring(1, expiration.length-1);
  if (!jwtService.getToken() || !expiration) {
    router.navigate(['/login']); // Redireciona para a página de login
    return false; // Impede o acesso à rota
  }
  if(new Date(expiration).getTime() < new Date().getTime()){
    router.navigate(['/login']);
    return false;
  }
  return true; // Permite o acesso à rota
};
  
