import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{
  isChecked: boolean = false;
  signupUsers: any[] = [];
  signupObj: any = {
    userName: '',
    email: '',
    password: ''
  };

  loginObj: any = {
    userName: '',
    password: ''
  }


  constructor(){}

ngOnInit(): void {
  const localData = localStorage.getItem('signUsers');
  if(localData != null){
    this.signupUsers = JSON.parse(localData);
  }
}
acceptTerms(){
  this.isChecked = !this.isChecked
} 

onSignUp() {
this.signupUsers.push(this.signupObj);
localStorage.setItem('signUpUsers',JSON.stringify(this.signupUsers));
this.signupObj = {
  userName: '',
  email: '',
  password: ''
};
}
onLogin() {
const isUserExist = this.signupUsers.find(m => m.userName == this.loginObj.userName && m.password == this.loginObj.password);
if(isUserExist != undefined){
  alert('User Login Successfully')
}else{
  alert('Wrong username of password')
}
}
}

