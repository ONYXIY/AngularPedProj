import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface BitcoinData {
  symbol: string;
  last: number;
  buy: number;
  sell: number;

}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Angular-app';
  bitcoinApiArray: BitcoinData[] = [];
  
  

  constructor(private http: HttpClient) {
    this.http.get<BitcoinData>('https://blockchain.info/ticker').subscribe(res => {
      this.bitcoinApiArray = Object.values(res);
    });
  }
  
}
