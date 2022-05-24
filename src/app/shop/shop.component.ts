import {Component} from "@angular/core";
import {AuthService} from "../shared/services/auth.service";

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent {
  constructor(private auth: AuthService) {
  }

  logout() {
    this.auth.logout();
  }
}
