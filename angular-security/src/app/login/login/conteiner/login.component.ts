import { Component, ViewChild } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { InputTextComponent } from '../../../shared/input-text/input-text.component';
import { AuthService } from '../../authentication/auth.service';
import { JWTService } from '../../authentication/Jwt.service';
import { PresenterLoginComponent } from '../presenter/presenter.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
 

  @ViewChild('login') presenter!: PresenterLoginComponent;

  constructor(private authService: AuthService, private jwtService: JWTService, private router: Router){}

  submit(): void{
    console.log('username ' + this.presenter.usernameField.getValue());
    this.authService.login(this.presenter.usernameField.getValue(), this.presenter.passwordField.getValue()).subscribe(data => {
      this.jwtService.setToken(data.token);
      this.router.navigateByUrl('/home')})

  }


 
}
