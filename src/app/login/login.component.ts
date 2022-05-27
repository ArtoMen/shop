import { Component, OnInit } from '@angular/core';
import {AuthService} from "../core/services/auth.service";
import {LoginUser} from "../core/interfaces/interfaces";
import {NzMessageService} from "ng-zorro-antd/message";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)])
  });

  constructor(
    private auth: AuthService,
    private message: NzMessageService
  ) { }

  get email() {
    return this.form.controls['email'];
  }

  get password() {
    return this.form.controls['password'];
  }

  ngOnInit(): void {
  }

  submit() {
    const user: LoginUser = {
      email: this.form.controls['email'].value,
      password: this.form.controls['password'].value
    }

    this.auth.login(user).subscribe((result) => {
      if(result) {
        this.message.success('You are logged in');
      } else {
        this.message.error('Incorrect email or password');
      }
    });
  }
}
