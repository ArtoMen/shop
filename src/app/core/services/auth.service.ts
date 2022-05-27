import {Injectable} from "@angular/core";
import {LoginUser} from "../interfaces/interfaces";
import {environment} from "../../../environments/environment";
import { Observable, of } from "rxjs";
import {Router} from "@angular/router";

@Injectable({providedIn: 'root'})
export class AuthService {
  constructor(private router: Router) {
  }

  login(user: LoginUser): Observable<boolean> {
    if(user.email === environment.user.email && user.password === environment.user.password) {
      localStorage.setItem('user', JSON.stringify({email: user.email}));
      this.router.navigate(['shop']).catch(err => console.log(err));
    }
    return of(user.email === environment.user.email && user.password === environment.user.password);
  }
}
