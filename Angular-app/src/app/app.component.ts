import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Angular-app';
  message: string = '';
  Login: string = '';
  bitcoinApi? = 'https://blockchain.info/ticker'

  constructor(){
    
  }
  setMessage(){
  this.Login = this.Login
  }
}
