import { Injectable } from '@angular/core';
import { Router,
        ActivatedRouteSnapshot, // con este elemento puedo saber a donde esta intentando ingresar
        RouterStateSnapshot,    // con este elemento puedo saber a donde esta intentando ingresar
        CanActivate
      } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor( private auth: AuthService) { }

  canActivate( next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

    console.log(next);

    if ( this.auth.isAuthenticated() ) {
      console.log('Pasó el guard');
      return true;
    } else {
      console.error('Bloqueado por el guard');
      return false;
    }
  }
}
