import { SignupData, LoginData } from './../interface/interfaceAuth';
import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class authService implements OnInit {
  signupUsers: any[] = [];
  isChecked: boolean = false;

  signupObj: SignupData = {
    userName: '',
    email: '',
    password: '',
  };
  loginObj: LoginData = {
    userName: '',
    password: '',
  };

  constructor() {}
  ngOnInit(): void {
    const localData = localStorage.getItem('signUpUsers');
    if (localData != null) {
      this.signupUsers = JSON.parse(localData);
    }
  }

  acceptTerms() {
    this.isChecked = !this.isChecked;
  }
  onSignUp(signupObj: SignupData) {
    this.signupUsers.push(signupObj);
    localStorage.setItem('signUpUsers', JSON.stringify(this.signupUsers));
    this.signupObj = {
      userName: '',
      email: '',
      password: '',
    };
  }

  onLogin(loginObj: LoginData) {
    const isUserExist = this.signupUsers.find(
      (m) =>
        m.userName === loginObj.userName && m.password === loginObj.password
    );
    return isUserExist !== undefined;
  }
}
