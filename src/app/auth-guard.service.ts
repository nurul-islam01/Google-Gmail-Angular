import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {

    // if(localStorage.getItem('username')!=null && localStorage.getItem('userid') !=null) {      
    //        return true;
    // }else{
     
    //   window.location.href ='http://lucid.nassa.com.bd/Account/Login?returnUrl=http://175.29.197.27:81';	
    // }

   
    return true;
  }


}
