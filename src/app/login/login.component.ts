import { Component } from '@angular/core';
import {AuthService} from "../core/services/auth.service";
import {LoginUser} from "../core/interfaces/interfaces";
import {NzMessageService} from "ng-zorro-antd/message";
import {FormControl, FormGroup, Validators} from "@angular/forms";

enum FORM_CONTROLS {
  email = 'email',
  password = 'password'
}

enum LOGIN_MESSAGES {
  success = 'You are logged in',
  error = 'Incorrect email or password'
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  form = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)])
  });

  constructor(
    private auth: AuthService,
    private message: NzMessageService
  ) { }

  get email(): FormControl {
    return <FormControl>this.form.controls[FORM_CONTROLS.email];
  }

  get password(): FormControl {
    return <FormControl>this.form.controls[FORM_CONTROLS.password];
  }

  submit(): void {
    const user: LoginUser = {
      email: this.form.controls['email'].value,
      password: this.form.controls['password'].value
    }

    this.auth.login(user).subscribe((result) => {
      if(result) {
        this.message.success(LOGIN_MESSAGES.success);
      } else {
        this.message.error(LOGIN_MESSAGES.error);
      }
    });
  }
}
