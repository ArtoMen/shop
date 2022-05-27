import { Injectable } from '@angular/core';
import { Resolve, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthResolverGuard implements Resolve<any> {
  constructor(private router: Router) {
  }

  resolve() {
    if(localStorage.getItem('user')) {
      this.router.navigate(['/shop']).catch(err => console.log(err));
    }
  }

}
