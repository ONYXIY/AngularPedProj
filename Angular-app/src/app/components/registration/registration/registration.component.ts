import { Component, OnInit, Input } from '@angular/core';
import { SignupData } from 'src/app/interface/interfaceAuth';
import { authService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit{

  isChecked!: boolean;
  
  signupObj: SignupData = {
    userName: '',
    email: '',
    password: ''
  };
  

  constructor(private authService: authService){
    this.isChecked = this.authService.isChecked
  }

  ngOnInit(): void {
  
  }
  onSignUp() {
    if (this.signupObj.userName && this.signupObj.email && this.signupObj.password) {
      this.authService.onSignUp(this.signupObj);
      this.signupObj = {
        userName: '',
        email: '',
        password: ''
      };
    }
  }
}
