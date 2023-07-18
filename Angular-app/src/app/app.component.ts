import { ICurrApiInterface } from './interface/interfaceForBtcApi';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit{
  title = 'Angular-app';
  currApi: ICurrApiInterface[] = [];
  selectSymbol: string = 'USD';
  filteredData: ICurrApiInterface[] = [];
 


  constructor(private http: HttpClient) {
    setInterval(() =>{
    this.http.get<ICurrApiInterface[]>('https://blockchain.info/ticker').subscribe((res) =>{
    this.currApi = Object.values(res);
    console.log(this.currApi);
    this.filteredData = this.currApi;
    this.selectCoinBySymbol(this.selectSymbol)
    })
  },2000)
  }
  ngOnInit(): void {
  }
  selectCoinBySymbol(symbol: string){
    this.selectSymbol = symbol;
    this.filteredData = this.currApi.filter(item => item.symbol === symbol);
  }
}
