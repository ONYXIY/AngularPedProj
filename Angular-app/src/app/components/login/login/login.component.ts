import { authService } from 'src/app/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { LoginData } from 'src/app/interface/interfaceAuth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginObj: LoginData = {
    userName: '',
    password: '',
  };

  constructor(private authService: authService) {}

  ngOnInit(): void {}

  onLogin() {
    if (this.loginObj.userName && this.loginObj.password) {
      const isLoginSuccessful = this.authService.onLogin(this.loginObj);

      this.loginObj = {
        userName: '',
        password: '',
      };

      if (isLoginSuccessful) {
        alert('Welcome');
      } else {
        alert('Wrong username or password');
      }
    } else {
      alert('Please enter username and password');
    }
  }
}
