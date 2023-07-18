import { ICurrApiInterface } from './interface/interfaceForBtcApi';
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Angular-app';
  currApi: ICurrApiInterface[] = [];
  selectSymbol: string = 'USD';
  filteredData: ICurrApiInterface[] = [];
 


  constructor(private http: HttpClient) {
    this.http.get<ICurrApiInterface[]>('https://blockchain.info/ticker').subscribe((res) =>{
    this.currApi = Object.values(res);
    console.log(this.currApi);
    this.filteredData = this.currApi;
    this.selectCoinBySymbol(this.selectSymbol)
    })
  }
  selectCoinBySymbol(symbol: string){
    this.selectSymbol = symbol;
    this.filteredData = this.currApi.filter(item => item.symbol === symbol);
  }
}
